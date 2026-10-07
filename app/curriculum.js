/* شطّور · ربط الأسئلة بدروس المنهاج السوري المعدّل (2025–2026)
 * © 2026 جميع الحقوق محفوظة · mohamedfayzyasenalsabagh@gmail.com
 * CUR[الصف][المادة] = قائمة دروس مرتبة: {sem:الفصل, unit:الوحدة, t:عنوان الدرس, q:[[سؤال, الصحيح, خطأ, خطأ, خطأ]...], gen:[مولدات الرياضيات]}
 */
/* ---- مولّدات أسئلة الرياضيات حسب موضوع الدرس ---- */
var MATHG = {
  count: g => { const f = pick([['🍎','تفاحة'],['⭐','نجمة'],['🐟','سمكة'],['🌼','زهرة'],['🎈','بالون']]); const n = ri(2, 10); return mN(`كم ${f[1]} هنا؟\n${f[0].repeat(n)}`, n, 2, '', 1) },
  cmp: g => { const m = g <= 1 ? 20 : g === 2 ? 100 : 1000; const a = ri(1, m); let b = ri(1, m); while (b === a) b = ri(1, m); return mc(`أيّ العددين أكبر؟ ${a} أم ${b}`, Math.max(a, b), [Math.min(a, b)], { m: true }) },
  seq: g => { const st = g <= 1 ? 1 : pick([2, 5, 10]), s0 = st * ri(0, 6); return mN(`${s0}، ${s0 + st}، ${s0 + 2 * st}، ؟`, s0 + 3 * st, st) },
  add10: g => { const a = ri(0, 9), b = ri(0, 10 - a); return mN(`${a} + ${b} = ؟`, a + b, 2) },
  sub10: g => { const a = ri(2, 10), b = ri(0, a); return mN(`${a} − ${b} = ؟`, a - b, 2) },
  add20: g => { const a = ri(5, 15), b = ri(1, 20 - a); return mN(`${a} + ${b} = ؟`, a + b, 3) },
  sub20: g => { const a = ri(11, 20), b = ri(1, 10); return mN(`${a} − ${b} = ؟`, a - b, 3) },
  tens: g => { const t = ri(1, 9), u = ri(0, 9), n = 10 * t + u; return R() < .5 ? mN(`كم عشرة في العدد ${n}؟`, t, 2, '', 0) : mN(`كم آحاد في العدد ${n}؟`, u, 2, '', 0) },
  place: g => { const n = ri(100, 999), d = pick([['المئات', Math.floor(n / 100)], ['العشرات', Math.floor(n / 10) % 10], ['الآحاد', n % 10]]); return mN(`ما رقم ${d[0]} في العدد ${n}؟`, d[1], 3, '', 0) },
  add100: g => { const a = ri(10, 70), b = ri(5, 99 - a); return mN(`${a} + ${b} = ؟`, a + b, 10) },
  sub100: g => { const a = ri(30, 99), b = ri(5, a - 5); return mN(`${a} − ${b} = ؟`, a - b, 10) },
  add1000: g => { const a = ri(100, 600), b = ri(50, 999 - a); return mN(`${a} + ${b} = ؟`, a + b, 20) },
  sub1000: g => { const a = ri(300, 999), b = ri(50, a - 50); return mN(`${a} − ${b} = ؟`, a - b, 20) },
  addbig: g => { const a = ri(1000, 60000), b = ri(500, 30000); return mN(`${a} + ${b} = ؟`, a + b, 100) },
  subbig: g => { const a = ri(5000, 90000), b = ri(500, a - 100); return mN(`${a} − ${b} = ؟`, a - b, 100) },
  mul2510: g => { const a = pick([2, 5, 10]), b = ri(1, 10); return mN(`${a} × ${b} = ؟`, a * b, a) },
  multab: g => { const a = ri(2, 10), b = ri(2, 10); return mN(`${a} × ${b} = ؟`, a * b, a) },
  mul2d: g => { const a = ri(12, 99), b = ri(3, 9); return mN(`${a} × ${b} = ؟`, a * b, 10) },
  mul3d: g => { const a = ri(101, 999), b = ri(11, 49); return mN(`${a} × ${b} = ؟`, a * b, 100) },
  div: g => { const a = ri(2, 10), b = ri(2, 10); return mN(`${a * b} ÷ ${b} = ؟`, a, 2, '', 1) },
  divrem: g => { const b = ri(3, 9), a = ri(20, 99), r = a % b, w = []; for (let i = 1; i < b && w.length < 3; i++) w.push((r + i) % b); return mc(`ما باقي قسمة ${a} على ${b}؟`, r, w, { m: true }) },
  divbig: g => { const b = ri(3, 12), q = ri(12, 250); return mN(`${b * q} ÷ ${b} = ؟`, q, 5) },
  half: g => { const k = ri(2, 20); return mN(`ما نصف العدد ${2 * k}؟`, k, 3, '', 1) },
  frac: g => { const d = pick([2, 3, 4, 5, 6, 8]), n = ri(1, d - 1), k = ri(2, 6); return mN(`كم يساوي ${n}/${d} من العدد ${d * k}؟`, n * k, k) },
  fracadd: g => { const d = ri(5, 12), a = ri(1, d - 2), b = ri(1, d - a - 1); return mc(`${a}/${d} + ${b}/${d} = ؟`, `${a + b}/${d}`, [`${a + b}/${2 * d}`, `${a + b + 1}/${d}`, `${a * b}/${d}`, `${a + b - 1}/${d}`], { m: true }) },
  fraccmp: g => { const d = ri(4, 12), a = ri(1, d - 1); let b = ri(1, d - 1); while (b === a) b = ri(1, d - 1); return mc(`أيّ الكسرين أكبر؟`, `${Math.max(a, b)}/${d}`, [`${Math.min(a, b)}/${d}`], { m: true }) },
  decadd: g => { const a = ri(11, 59) / 10, b = ri(11, 49) / 10; return mD(`${a.toFixed(1)} + ${b.toFixed(1)} = ؟`, a + b) },
  decmul: g => { const x = ri(11, 99) / 10, m = pick([10, 100]), v = Math.round(x * m); return mc(`${x.toFixed(1)} × ${m} = ؟`, v, [v * 10, Math.round(v / 10), v + m], { m: true }) },
  perim: g => { const l = ri(4, 20), w = ri(2, l - 1), p = 2 * (l + w); return mc(`مستطيل طوله ${l} سم وعرضه ${w} سم.\nما محيطه؟`, p + ' سم', [l * w + ' سم', (l + w) + ' سم', (p + 2) + ' سم'], { m: true }) },
  area: g => { const l = ri(3, 15), w = ri(2, 9); return mc(`ما مساحة مستطيل طوله ${l} سم وعرضه ${w} سم؟`, l * w + ' سم²', [2 * (l + w) + ' سم²', (l + w) + ' سم²', (l * w + l) + ' سم²'], { m: true }) },
  sqarea: g => { const a = ri(2, 12); return mc(`ما مساحة مربع طول ضلعه ${a} سم؟`, a * a + ' سم²', [4 * a + ' سم²', 2 * a + ' سم²', (a * a + a) + ' سم²'], { m: true }) },
  percent: g => { const p = pick([10, 20, 25, 50, 75]), n = 20 * ri(2, 15); return mN(`${p}% من ${n} = ؟`, p * n / 100, 5) },
  ratio: g => { const [p, q] = pick([[1, 2], [2, 3], [3, 4], [1, 3], [2, 5], [3, 5]]), k = ri(2, 6); return mc(`بسّط النسبة ${p * k} : ${q * k}`, `${p} : ${q}`, [`${q} : ${p}`, `${p + 1} : ${q + 1}`, `${p * k} : ${q}`], { m: true }) },
  avg: g => { const m = ri(10, 40), d = ri(2, 8), v = shuf([m - d, m, m + d]); return mN(`ما متوسط الأعداد ${v[0]} و ${v[1]} و ${v[2]}؟`, m, 3) },
  orderops: g => { const a = ri(2, 9), b = ri(2, 6), c = ri(2, 6); return mc(`${a} + ${b} × ${c} = ؟`, a + b * c, [(a + b) * c, a + b + c, a * b + c], { m: true }) },
  time: g => { const h = ri(1, 12), m = pick([0, 15, 30, 45]); const said = m === 0 ? 'تماماً' : m === 15 ? 'وربع' : m === 30 ? 'ونصف' : 'إلا ربع'; const hh = m === 45 ? (h % 12) + 1 : h; return mc(`الساعة ${h}:${String(m).padStart(2, '0')} نقرؤها:`, `${hh} ${said}`, [`${hh} ${m === 30 ? 'وربع' : 'ونصف'}`, `${(hh % 12) + 1} ${said}`, `${hh} ${m === 0 ? 'ونصف' : 'تماماً'}`]) },
  money: g => { const a = 50 * ri(1, 9), b = 50 * ri(1, 9); return mc(`معك ${a} ليرة وأعطاك أبوك ${b} ليرة. كم صار معك؟`, (a + b) + ' ليرة', [(a + b + 50) + ' ليرة', (a + b - 50) + ' ليرة', Math.abs(a - b) + ' ليرة'], { m: true }) },
  length: g => { const k = pick([['متر', 'سم', 100], ['كم', 'متر', 1000], ['سم', 'مم', 10]]), n = ri(2, 9); return mc(`${n} ${k[0]} = ؟ ${k[1]}`, n * k[2] + ' ' + k[1], [n * k[2] * 10 + ' ' + k[1], n * k[2] / 10 + ' ' + k[1], (n + 1) * k[2] + ' ' + k[1]], { m: true }) },
  shapes: g => { const e = pick([['كم ضلعاً للمثلث؟', '٣', '٤', '٥', '٦'], ['كم ضلعاً للمربع؟', '٤', '٣', '٥', '٦'], ['كم رأساً للمستطيل؟', '٤', '٣', '٢', '٥'], ['شكل ليس له أضلاع ولا رؤوس:', 'الدائرة', 'المثلث', 'المربع', 'المستطيل'], ['كم ضلعاً للمخمس؟', '٥', '٤', '٦', '٧'], ['كم وجهاً للمكعب؟', '٦', '٤', '٨', '١٢']]); return mc(e[0], e[1], e.slice(2)) },
  angles: g => { const e = pick([['الزاوية التي قياسها ٩٠ درجة تسمى:', 'قائمة', 'حادة', 'منفرجة', 'مستقيمة'], ['الزاوية التي قياسها أقل من ٩٠ درجة:', 'حادة', 'قائمة', 'منفرجة', 'مستقيمة'], ['الزاوية التي قياسها أكبر من ٩٠ وأقل من ١٨٠ درجة:', 'منفرجة', 'حادة', 'قائمة', 'مستقيمة'], ['مجموع زوايا المثلث:', '١٨٠ درجة', '٩٠ درجة', '٣٦٠ درجة', '٢٧٠ درجة']]); return mc(e[0], e[1], e.slice(2)) },
  tf: g => gTF(g)
};

/* ---- دروس المنهاج حسب الصف والمادة ---- */
var CUR = {};
