# يزحف على موقع المناهج الرسمي ويجمع ملفات PDF للصفوف ١–٦ ثم يستخرج النص
import re, os, subprocess, urllib.parse, json, time
BASE = 'https://curricula.moed.gov.sy/'
os.makedirs('out', exist_ok=True)
log = open('out/LOG.txt', 'w')
for probe in ['https://curricula.moed.gov.sy/', 'http://curricula.moed.gov.sy/', 'https://curricula.moed.gov.sy/curricula-2026-2025/01/1-arabic-1.pdf', 'http://curricula.moed.gov.sy/curricula-2026-2025/01/1-arabic-1.pdf', 'https://moed.gov.sy/', 'http://www.moed.gov.sy/altlym-alam/alsf-althalth']:
    r = subprocess.run(['curl', '-skIL', '--max-time', '40', '-A', 'Mozilla/5.0', probe], capture_output=True, text=True)
    log.write('PROBE ' + probe + '\n' + r.stdout[:800] + '\nERR ' + r.stderr[:300] + '\n')
def get(url, binary=False):
    r = subprocess.run(['curl', '-skL', '--max-time', '120', '-A', 'Mozilla/5.0', url], capture_output=True)
    return r.stdout if binary else r.stdout.decode('utf-8', 'ignore')
seen, pdfs, queue = set(), set(), [BASE, BASE + 'altlym-alam']
while queue and len(seen) < 120:
    u = queue.pop(0)
    if u in seen: continue
    seen.add(u)
    html = get(u)
    log.write(f'PAGE {u} {len(html)}\n')
    for h in re.findall(r'href=["\']([^"\']+)["\']', html):
        a = urllib.parse.urljoin(u, h).split('#')[0]
        if not a.startswith(BASE): continue
        if a.lower().endswith('.pdf'):
            pdfs.add(a)
        elif ('altlym-alam' in a or 'alsf' in a) and a not in seen:
            queue.append(a)
# تخمين مسارات الصفوف ١–٦ أيضاً
for g in range(1, 7):
    for name in ['arabic-1', 'arabic-2', 'math-1', 'math-2', 'science-1', 'science-2', 'English-SB', 'English-AB', 'islamic', 'social', 'social-1', 'social-2', 'math', 'arabic', 'science']:
        pdfs.add(f'{BASE}curricula-2026-2025/{g:02d}/{g}-{name}.pdf')
keep = sorted(p for p in pdfs if re.search(r'/curricula-2026-2025/0[1-6]/', p))
log.write(f'CANDIDATES {len(keep)}\n')
index = []
for p in keep:
    g = re.search(r'/0([1-6])/', p).group(1)
    name = urllib.parse.unquote(p.rsplit('/', 1)[1])[:-4]
    data = get(p, True)
    if not data.startswith(b'%PDF'):
        log.write(f'MISS {p} {len(data)}\n'); continue
    os.makedirs(f'out/{g}', exist_ok=True)
    pdf = f'/tmp/{g}-{name}.pdf'; open(pdf, 'wb').write(data)
    subprocess.run(['pdftotext', '-layout', pdf, f'out/{g}/{name}.txt'])
    pages = subprocess.run(['pdfinfo', pdf], capture_output=True, text=True).stdout
    np = re.search(r'Pages:\s+(\d+)', pages)
    index.append({'grade': int(g), 'name': name, 'url': p, 'pages': int(np.group(1)) if np else None, 'bytes': len(data)})
    log.write(f'OK {p} {len(data)}\n')
json.dump(index, open('out/index.json', 'w'), ensure_ascii=False, indent=1)
log.close()
print(len(index), 'books')
