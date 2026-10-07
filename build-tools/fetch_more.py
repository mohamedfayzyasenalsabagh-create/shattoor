# المرحلة الثانية: إعادة محاولة الكتب الفاشلة (حد التنزيل من Drive) + قراءة الكتب المصوّرة بالـ OCR
import re, os, subprocess, json, time, glob
from concurrent.futures import ThreadPoolExecutor
log = open('out/LOG2.txt', 'w')
links = json.load(open('out/links.json'))
index = json.load(open('out/index.json'))
have = {re.search(r'/file/d/([\w-]{20,})', x['href']).group(1) for x in index if '/file/d/' in x['href']}
todo, seen = [], set()
for i, it in enumerate(links):
    m = re.search(r'/file/d/([\w-]{20,})', it['href'])
    if not m or not it['subj'] or m.group(1) in have or m.group(1) in seen: continue
    seen.add(m.group(1)); todo.append((i, it, m.group(1)))
log.write(f'RETRY {len(todo)}\n'); log.flush()
def ocr(pdf, txt, pages):
    tmp = txt + '.d'; os.makedirs(tmp, exist_ok=True)
    subprocess.run(['pdftoppm', '-r', '150', '-gray', '-png', pdf, f'{tmp}/p'], timeout=1800)
    out = []
    for png in sorted(glob.glob(f'{tmp}/p-*.png')):
        r = subprocess.run(['tesseract', png, '-', '-l', 'ara+eng', '--psm', '4'], capture_output=True, text=True, timeout=400, env=dict(os.environ, OMP_THREAD_LIMIT='1'))
        out.append(f'\n===== صفحة {png.rsplit("-",1)[1][:-4]} =====\n' + r.stdout)
    open(txt, 'w').write(''.join(out)); subprocess.run(['rm', '-rf', tmp])
def textify(pdf, txt):
    subprocess.run(['pdftotext', '-layout', pdf, txt])
    info = subprocess.run(['pdfinfo', pdf], capture_output=True, text=True).stdout
    np = int(re.search(r'Pages:\s+(\d+)', info).group(1)) if re.search(r'Pages:\s+(\d+)', info) else 1
    if os.path.getsize(txt) / max(np, 1) < 300:
        ocr(pdf, txt, np); log.write(f'OCR {txt} pages={np} chars={os.path.getsize(txt)}\n'); log.flush()
    return np
for i, it, fid in todo:
    pdf = f'/tmp/r{i}.pdf'; ok = False
    for attempt in range(3):
        for cmd in (['curl', '-sL', '--max-time', '400', '-o', pdf, f'https://drive.usercontent.google.com/download?id={fid}&export=download&confirm=t'],
                    ['python3', '-m', 'gdown', fid, '-O', pdf]):
            try: subprocess.run(cmd, capture_output=True, timeout=420)
            except Exception: pass
            if os.path.exists(pdf) and open(pdf, 'rb').read(4) == b'%PDF': ok = True; break
        if ok: break
        time.sleep(60)
    if not ok:
        log.write(f'MISS {it["grade"]} {fid} {it["label"][-70:]}\n'); log.flush(); continue
    name = f'{it["grade"]}-{it["subj"]}-{i}'; os.makedirs(f'out/{it["grade"]}', exist_ok=True)
    np = textify(pdf, f'out/{it["grade"]}/{name}.txt')
    index.append(dict(it, file=f'{it["grade"]}/{name}.txt', pages=np, chars=os.path.getsize(f'out/{it["grade"]}/{name}.txt')))
    log.write(f'OK {name} pages={np} {it["label"][-80:]}\n'); log.flush()
    json.dump(index, open('out/index.json', 'w'), ensure_ascii=False, indent=1)
# الكتب التي نزلت سابقاً لكنها مصوّرة: أعد تنزيلها واقرأها بالـ OCR
def redo(x):
    try:
        m = re.search(r'/file/d/([\w-]{20,})', x['href'])
        if not m or x.get('ocr') or x['chars'] / max(x['pages'] or 1, 1) >= 300: return
        pdf = f'/tmp/o{abs(hash(m.group(1)))}.pdf'
        subprocess.run(['curl', '-sL', '--max-time', '400', '-o', pdf, f'https://drive.usercontent.google.com/download?id={m.group(1)}&export=download&confirm=t'], capture_output=True, timeout=420)
        if not (os.path.exists(pdf) and open(pdf, 'rb').read(4) == b'%PDF'):
            subprocess.run(['python3', '-m', 'gdown', m.group(1), '-O', pdf], capture_output=True, timeout=300)
        if os.path.exists(pdf) and open(pdf, 'rb').read(4) == b'%PDF':
            ocr(pdf, 'out/' + x['file'], x['pages']); x['chars'] = os.path.getsize('out/' + x['file']); x['ocr'] = True
            log.write(f'OCR {x["file"]} chars={x["chars"]}\n'); log.flush()
    except Exception as e:
        log.write(f'OCRERR {x["file"]} {e!r}\n')
with ThreadPoolExecutor(4) as ex: list(ex.map(redo, list(index)))
json.dump(index, open('out/index.json', 'w'), ensure_ascii=False, indent=1)
log.close()
