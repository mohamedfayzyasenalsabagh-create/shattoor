# يجمع كتب الصفوف ١–٦ (المنهاج السوري المعدّل) من صفحات أفدني (روابط Google Drive والوزارة) ويستخرج نصوصها
import re, os, subprocess, urllib.parse, json, html as H
os.makedirs('out', exist_ok=True)
log = open('out/LOG.txt', 'w')
def get(url, binary=False, t=90):
    r = subprocess.run(['curl', '-skL', '--max-time', str(t), '-A', 'Mozilla/5.0 (Linux; Android 14)', url], capture_output=True)
    return r.stdout if binary else r.stdout.decode('utf-8', 'ignore')
A = 'https://afedne.com/'
PAGES = {
 1: A + 'دليل-المعلم-وكتب-الطالب-الصف-الأول',
 2: A + 'كتب-الطالب-و-دليل-المعلم-للصف-الثاني-ال/',
 3: A + 'تحميل-كتب-ودليل-المعلم-للثالث-الأساسي/',
 4: A + 'تحميل-كتب-الرابع-الأساسي-2022-ودليل-المعل/',
 6: A + 'كتب-الطالب-ودليل-المعلم-للصف-السادس-ال/',
}
HUBS = [A + 'المناهج-المطورة-مركز-تطوير-المناهج-ال/', A + 'تحميل-مناهج-سورية-2019-كامل-المواد-لجميع-ا']
# ابحث عن صفحة الصف الخامس من صفحات التجميع
for hub in HUBS:
    h = get(urllib.parse.quote(hub, safe=':/'))
    for href in re.findall(r'href=["\']([^"\']+)["\']', h):
        d = urllib.parse.unquote(href)
        if 'afedne.com' in d and 'الخامس' in d and 5 not in PAGES:
            PAGES[5] = d; log.write(f'GRADE5 {d}\n')
SUBJ = {'math': ['رياضيات', 'الرياضيات'], 'arabic': ['العربية', 'لغتي', 'اللغة العربية'], 'science': ['العلوم', 'علوم'], 'english': ['الإنكليزية', 'الانكليزية', 'English', 'إنكليزي'], 'islamic': ['الإسلامية', 'الاسلامية']}
items = []
for g, url in sorted(PAGES.items()):
    h = get(urllib.parse.quote(url, safe=':/'))
    log.write(f'PAGE {g} {len(h)} {url}\n')
    for m in re.finditer(r'<a\s[^>]*href=["\']([^"\']+)["\'][^>]*>(.*?)</a>', h, re.S):
        href, txt = m.group(1), H.unescape(re.sub('<[^>]+>', ' ', m.group(2))).strip()
        ctx = H.unescape(re.sub('<[^>]+>', ' ', h[max(0, m.start() - 400):m.start()]))[-200:]
        if not ('drive.google.com' in href or href.lower().endswith('.pdf')): continue
        label = (ctx + ' ' + txt).replace('\n', ' ')
        subj = next((k for k, ws in SUBJ.items() if any(w in label for w in ws)), None)
        if 'curricula.moed.gov.sy' in href:
            n = href.rsplit('/', 1)[1]
            for k in SUBJ:
                if k[:4].lower() in n.lower(): subj = k
        items.append({'grade': g, 'subj': subj, 'href': href, 'label': re.sub(r'\s+', ' ', label)[-160:]})
json.dump(items, open('out/links.json', 'w'), ensure_ascii=False, indent=1)
subprocess.run(['python3', '-m', 'pip', 'install', '-q', '--user', 'gdown'])
index = []
from concurrent.futures import ThreadPoolExecutor
seen_ids = set()
jobs = []
for i, it in enumerate(items):
    if not it['subj']: continue
    m = re.search(r'/file/d/([\w-]{20,})', it['href'])
    if not m: continue
    if m.group(1) in seen_ids: continue
    seen_ids.add(m.group(1)); jobs.append((i, it, m.group(1)))
log.write(f'JOBS {len(jobs)}\n'); log.flush()
def work(job):
    i, it, fid = job; pdf = f'/tmp/b{i}.pdf'
    try:
        r = subprocess.run(['python3', '-m', 'gdown', '--fuzzy', f'https://drive.google.com/uc?id={fid}', '-O', pdf], capture_output=True, text=True, timeout=240)
        err = r.stderr[-200:].replace('\n', ' ')
    except Exception as e:
        err = 'TIMEOUT ' + str(e)[:80]
    if not os.path.exists(pdf) or open(pdf, 'rb').read(4) != b'%PDF':
        return ('MISS', it, fid, err)
    name = f'{it["grade"]}-{it["subj"]}-{i}'
    os.makedirs(f'out/{it["grade"]}', exist_ok=True)
    subprocess.run(['pdftotext', '-layout', pdf, f'out/{it["grade"]}/{name}.txt'])
    info = subprocess.run(['pdfinfo', pdf], capture_output=True, text=True).stdout
    np = re.search(r'Pages:\s+(\d+)', info)
    chars = os.path.getsize(f'out/{it["grade"]}/{name}.txt')
    os.remove(pdf)
    return ('OK', dict(it, file=f'{it["grade"]}/{name}.txt', pages=int(np.group(1)) if np else None, chars=chars), fid, '')
with ThreadPoolExecutor(8) as ex:
    for st, it, fid, err in ex.map(work, jobs):
        if st == 'OK':
            index.append(it); log.write(f'OK {it["file"]} pages={it["pages"]} chars={it["chars"]} {it["label"][-90:]}\n')
        else:
            log.write(f'MISS {it["grade"]} {it["subj"]} {fid} {err}\n')
        log.flush()
json.dump(index, open('out/index.json', 'w'), ensure_ascii=False, indent=1)
log.close()
