# مصدر إضافي: مكتبة المرحلة الابتدائية في مدرسة الجالية السورية الافتراضية (روابط Google Drive)
import re, os, subprocess, json, html as H, urllib.parse
from concurrent.futures import ThreadPoolExecutor
os.makedirs('out', exist_ok=True); log = open('out/LOG.txt', 'w')
URL = 'https://scv.school/' + urllib.parse.quote('المكتبة/مكتبة-المرحلة-الابتدائية/')
h = subprocess.run(['curl', '-skL', '--max-time', '90', '-A', 'Mozilla/5.0', URL], capture_output=True).stdout.decode('utf-8', 'ignore')
log.write(f'PAGE {len(h)}\n')
GR = {'الأول': 1, 'الاول': 1, 'الثاني': 2, 'الثالث': 3, 'الرابع': 4, 'الخامس': 5, 'السادس': 6}
items = []
for m in re.finditer(r'href=["\'](https://drive\.google\.com/[^"\']+)["\']', h):
    before = H.unescape(re.sub('<[^>]+>', ' ', h[max(0, m.start() - 3000):m.start()]))
    after = H.unescape(re.sub('<[^>]+>', ' ', h[m.end():m.end() + 200]))
    gs = [(mm.start(), GR[mm.group(1)]) for mm in re.finditer(r'الصف\s+(الأول|الاول|الثاني|الثالث|الرابع|الخامس|السادس)', before)]
    g = gs[-1][1] if gs else None
    ctx = re.sub(r'\s+', ' ', before[-160:] + ' || ' + after[:80])
    fid = re.search(r'/d/([\w-]{20,})', m.group(1))
    if fid and g: items.append({'grade': g, 'id': fid.group(1), 'ctx': ctx})
json.dump(items, open('out/links.json', 'w'), ensure_ascii=False, indent=1)
log.write(f'LINKS {len(items)}\n'); log.flush()
def work(it):
    pdf = f'/tmp/{it["id"]}.pdf'
    for _ in range(2):
        subprocess.run(['python3', '-m', 'gdown', it['id'], '-O', pdf], capture_output=True, timeout=400)
        if os.path.exists(pdf) and open(pdf, 'rb').read(4) == b'%PDF': break
    if not (os.path.exists(pdf) and open(pdf, 'rb').read(4) == b'%PDF'): return ('MISS', it)
    os.makedirs(f'out/{it["grade"]}', exist_ok=True)
    txt = f'out/{it["grade"]}/{it["id"]}.txt'
    subprocess.run(['pdftotext', '-l', '12', '-layout', pdf, txt])
    info = subprocess.run(['pdfinfo', pdf], capture_output=True, text=True).stdout
    np = int(re.search(r'Pages:\s+(\d+)', info).group(1))
    full = f'out/{it["grade"]}/{it["id"]}.full.txt'
    subprocess.run(['pdftotext', '-layout', pdf, full])
    if os.path.getsize(full) / np < 300:
        subprocess.run(['pdftoppm', '-r', '150', '-gray', '-png', '-l', '10', pdf, f'/tmp/{it["id"]}'])
        o = ''
        for png in sorted(f for f in os.listdir('/tmp') if f.startswith(it['id']) and f.endswith('.png')):
            o += subprocess.run(['tesseract', '/tmp/' + png, '-', '-l', 'ara+eng', '--psm', '4'], capture_output=True, text=True).stdout + '\n=====\n'
        open(txt, 'w').write(o); it['ocr'] = True
    it['pages'] = np; it['file'] = txt
    return ('OK', it)
with ThreadPoolExecutor(6) as ex:
    for st, it in ex.map(work, items):
        log.write(f'{st} {it["grade"]} {it["id"]} p={it.get("pages")} {it["ctx"][-120:]}\n'); log.flush()
json.dump(items, open('out/index.json', 'w'), ensure_ascii=False, indent=1)
