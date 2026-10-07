import sys
import zipfile,struct,zlib
src=zipfile.ZipFile(sys.argv[1])
entries=[(i.filename,src.read(i.filename)) for i in src.infolist()]
entries.insert(1,('classes.dex',open(sys.argv[2],'rb').read()))
out=bytearray(); cd=bytearray(); n=0
for name,data in entries:
    store = name=='resources.arsc' or name.endswith('.png') or name.endswith('.woff2')
    crc=zlib.crc32(data)&0xffffffff
    if store: comp=data; method=0
    else:
        c=zlib.compressobj(9,zlib.DEFLATED,-15); comp=c.compress(data)+c.flush(); method=8
    nb=name.encode()
    off=len(out); extra=b''
    if method==0:
        pad=(-(off+30+len(nb)))%4; extra=b'\0'*pad
    out+=struct.pack('<IHHHHHIIIHH',0x04034b50,20,0,method,0,0x21,crc,len(comp),len(data),len(nb),len(extra))+nb+extra+comp
    cd+=struct.pack('<IHHHHHHIIIHHHHHII',0x02014b50,20,20,0,method,0,0x21,crc,len(comp),len(data),len(nb),0,0,0,0,0,off)+nb
    n+=1
cdoff=len(out); out+=cd
out+=struct.pack('<IHHHHIIH',0x06054b50,0,0,n,n,len(cd),cdoff,0)
open(sys.argv[3],'wb').write(out)
