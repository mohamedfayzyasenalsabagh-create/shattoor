import sys,os,shutil,glob
# الاستخدام: python3 build-tools/make_page.py app/index.html docs
out=sys.argv[2]; os.makedirs(out+'/fonts',exist_ok=True)
for f in glob.glob('node_modules/@fontsource/tajawal/files/tajawal-*-normal.woff2')+glob.glob('node_modules/@fontsource/lalezar/files/lalezar-*-normal.woff2'):
    b=os.path.basename(f)
    if any(x in b for x in ('-arabic-','-latin-')) and '-latin-ext-' not in b: shutil.copy(f,out+'/fonts/'+b)
open(out+'/.nojekyll','w').close()
import re
s=open(sys.argv[1]).read()
s=re.sub(r'<link rel="preconnect"[^>]*>\s*<link rel="stylesheet"[^>]*>','',s)
faces=[]
for fam,f,w,sub,rng in [(fam,f,w,sub,rng) for fam,f,ws in [('Tajawal','tajawal',[400,500,700,800]),('Lalezar','lalezar',[400])] for w in ws for sub,rng in [('arabic','U+0600-06FF,U+0750-077F,U+0870-088E,U+0890-0891,U+0898-08E1,U+08E3-08FF,U+200C-200E,U+2010-2011,U+204F,U+2E41,U+FB50-FDFF,U+FE70-FE74,U+FE76-FEFC'),('latin','U+0000-00FF,U+0131,U+0152-0153,U+02BB-02BC,U+02C6,U+02DA,U+02DC,U+2000-206F,U+20AC,U+2122,U+2191,U+2193,U+2212,U+2215,U+FEFF,U+FFFD')]]:
    faces.append(f"@font-face{{font-family:'{fam}';font-style:normal;font-weight:{w};font-display:swap;src:url(fonts/{f}-{sub}-{w}-normal.woff2) format('woff2');unicode-range:{rng}}}")
s=s.replace('<style>','<style>\n'+'\n'.join(faces)+'\n',1)
head='<!doctype html>\n<html lang="ar" dir="rtl">\n<head>\n<meta charset="utf-8">\n<meta name="viewport" content="width=device-width,initial-scale=1,viewport-fit=cover">\n'
t=s.index('</title>')+len('</title>')
s=head+s[:t]+'\n'+s[t:].replace('</style>','</style>\n</head>\n<body>',1)+'\n</body>\n</html>\n'
if re.search(r'firebase:\s*\{',s):
    import shutil,os
    os.makedirs(sys.argv[2]+'/fb',exist_ok=True)
    tags=''
    for f in ['firebase-app-compat.js','firebase-auth-compat.js','firebase-firestore-compat.js']:
        shutil.copy('node_modules/firebase/'+f,sys.argv[2]+'/fb/'+f); tags+=f'<script src="fb/{f}"></script>\n'
    s=s.replace('<script>',tags+'<script>',1)
    print('firebase: ON')
else: print('firebase: demo mode')
open(sys.argv[2]+'/index.html','w').write(s)
