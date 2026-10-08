/* شطّور · ربط الأسئلة بدروس المنهاج السوري المعدّل (2025–2026)
 * © 2026 جميع الحقوق محفوظة · mohamedfayzyasenalsabagh@gmail.com
 * CUR[الصف][المادة] = قائمة دروس مرتبة: {sem:الفصل, unit:الوحدة, t:عنوان الدرس, q:[[سؤال, الصحيح, خطأ, خطأ, خطأ]...], gen:[مولدات الرياضيات]}
 */
/* ---- مولّدات أسئلة الرياضيات حسب موضوع الدرس ---- */
/* مستوى الصعوبة: 0 سهل، 1 متوسط، 2 تحدّي — يكبّر مجال الأعداد */
var DIFF = 0;
function rr(a, b) { return ri(a, Math.round(b + (b - a) * 0.8 * DIFF)) }
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
  add100: g => { const a = rr(10, 70), b = rr(5, 99 - a); return mN(`${a} + ${b} = ؟`, a + b, 10) },
  sub100: g => { const a = rr(30, 99), b = rr(5, a - 5); return mN(`${a} − ${b} = ؟`, a - b, 10) },
  add1000: g => { const a = rr(100, 600), b = rr(50, 999 - a); return mN(`${a} + ${b} = ؟`, a + b, 20) },
  sub1000: g => { const a = rr(300, 999), b = rr(50, a - 50); return mN(`${a} − ${b} = ؟`, a - b, 20) },
  addbig: g => { const a = rr(1000, 60000), b = rr(500, 30000); return mN(`${a} + ${b} = ؟`, a + b, 100) },
  subbig: g => { const a = rr(5000, 90000), b = rr(500, a - 100); return mN(`${a} − ${b} = ؟`, a - b, 100) },
  mul2510: g => { const a = pick([2, 5, 10]), b = ri(1, 10); return mN(`${a} × ${b} = ؟`, a * b, a) },
  multab: g => { const a = rr(2, 10), b = rr(2, 10); return mN(`${a} × ${b} = ؟`, a * b, a) },
  mul2d: g => { const a = rr(12, 99), b = rr(3, 9); return mN(`${a} × ${b} = ؟`, a * b, 10) },
  mul3d: g => { const a = rr(101, 999), b = rr(11, 49); return mN(`${a} × ${b} = ؟`, a * b, 100) },
  div: g => { const a = rr(2, 10), b = rr(2, 10); return mN(`${a * b} ÷ ${b} = ؟`, a, 2, '', 1) },
  divrem: g => { const b = rr(3, 9), a = rr(20, 99), r = a % b, w = []; for (let i = 1; i < b && w.length < 3; i++) w.push((r + i) % b); return mc(`ما باقي قسمة ${a} على ${b}؟`, r, w, { m: true }) },
  divbig: g => { const b = rr(3, 12), q = rr(12, 250); return mN(`${b * q} ÷ ${b} = ؟`, q, 5) },
  half: g => { const k = rr(2, 20); return mN(`ما نصف العدد ${2 * k}؟`, k, 3, '', 1) },
  frac: g => { const d = pick([2, 3, 4, 5, 6, 8]), n = rr(1, d - 1), k = rr(2, 6); return mN(`كم يساوي ${n}/${d} من العدد ${d * k}؟`, n * k, k) },
  fracadd: g => { const d = ri(5, 12), a = ri(1, d - 2), b = ri(1, d - a - 1); return mc(`${a}/${d} + ${b}/${d} = ؟`, `${a + b}/${d}`, [`${a + b}/${2 * d}`, `${a + b + 1}/${d}`, `${a * b}/${d}`, `${a + b - 1}/${d}`], { m: true }) },
  fraccmp: g => { const d = ri(4, 12), a = ri(1, d - 1); let b = ri(1, d - 1); while (b === a) b = ri(1, d - 1); return mc(`أيّ الكسرين أكبر؟`, `${Math.max(a, b)}/${d}`, [`${Math.min(a, b)}/${d}`], { m: true }) },
  decadd: g => { const a = rr(11, 59) / 10, b = rr(11, 49) / 10; return mD(`${a.toFixed(1)} + ${b.toFixed(1)} = ؟`, a + b) },
  decmul: g => { const x = ri(11, 99) / 10, m = pick([10, 100]), v = Math.round(x * m); return mc(`${x.toFixed(1)} × ${m} = ؟`, v, [v * 10, Math.round(v / 10), v + m], { m: true }) },
  perim: g => { const l = rr(4, 20), w = rr(2, l - 1), p = 2 * (l + w); return mc(`مستطيل طوله ${l} سم وعرضه ${w} سم.\nما محيطه؟`, p + ' سم', [l * w + ' سم', (l + w) + ' سم', (p + 2) + ' سم'], { m: true }) },
  area: g => { const l = rr(3, 15), w = rr(2, 9); return mc(`ما مساحة مستطيل طوله ${l} سم وعرضه ${w} سم؟`, l * w + ' سم²', [2 * (l + w) + ' سم²', (l + w) + ' سم²', (l * w + l) + ' سم²'], { m: true }) },
  sqarea: g => { const a = rr(2, 12); return mc(`ما مساحة مربع طول ضلعه ${a} سم؟`, a * a + ' سم²', [4 * a + ' سم²', 2 * a + ' سم²', (a * a + a) + ' سم²'], { m: true }) },
  percent: g => { const p = pick([10, 20, 25, 50, 75]), n = 20 * rr(2, 15); return mN(`${p}% من ${n} = ؟`, p * n / 100, 5) },
  ratio: g => { const [p, q] = pick([[1, 2], [2, 3], [3, 4], [1, 3], [2, 5], [3, 5]]), k = ri(2, 6); return mc(`بسّط النسبة ${p * k} : ${q * k}`, `${p} : ${q}`, [`${q} : ${p}`, `${p + 1} : ${q + 1}`, `${p * k} : ${q}`], { m: true }) },
  avg: g => { const m = rr(10, 40), d = rr(2, 8), v = shuf([m - d, m, m + d]); return mN(`ما متوسط الأعداد ${v[0]} و ${v[1]} و ${v[2]}؟`, m, 3) },
  orderops: g => { const a = ri(2, 9), b = ri(2, 6), c = ri(2, 6); return mc(`${a} + ${b} × ${c} = ؟`, a + b * c, [(a + b) * c, a + b + c, a * b + c], { m: true }) },
  time: g => { const h = ri(1, 12), m = pick([0, 15, 30, 45]); const said = m === 0 ? 'تماماً' : m === 15 ? 'وربع' : m === 30 ? 'ونصف' : 'إلا ربع'; const hh = m === 45 ? (h % 12) + 1 : h; return mc(`الساعة ${h}:${String(m).padStart(2, '0')} نقرؤها:`, `${hh} ${said}`, [`${hh} ${m === 30 ? 'وربع' : 'ونصف'}`, `${(hh % 12) + 1} ${said}`, `${hh} ${m === 0 ? 'ونصف' : 'تماماً'}`]) },
  money: g => { const a = 50 * ri(1, 9), b = 50 * ri(1, 9); return mc(`معك ${a} ليرة وأعطاك أبوك ${b} ليرة. كم صار معك؟`, (a + b) + ' ليرة', [(a + b + 50) + ' ليرة', (a + b - 50) + ' ليرة', Math.abs(a - b) + ' ليرة'], { m: true }) },
  length: g => { const k = pick([['متر', 'سم', 100], ['كم', 'متر', 1000], ['سم', 'مم', 10]]), n = ri(2, 9); return mc(`${n} ${k[0]} = ؟ ${k[1]}`, n * k[2] + ' ' + k[1], [n * k[2] * 10 + ' ' + k[1], n * k[2] / 10 + ' ' + k[1], (n + 1) * k[2] + ' ' + k[1]], { m: true }) },
  shapes: g => { const e = pick([['كم ضلعاً للمثلث؟', '٣', '٤', '٥', '٦'], ['كم ضلعاً للمربع؟', '٤', '٣', '٥', '٦'], ['كم رأساً للمستطيل؟', '٤', '٣', '٢', '٥'], ['شكل ليس له أضلاع ولا رؤوس:', 'الدائرة', 'المثلث', 'المربع', 'المستطيل'], ['كم ضلعاً للمخمس؟', '٥', '٤', '٦', '٧'], ['كم وجهاً للمكعب؟', '٦', '٤', '٨', '١٢']]); return mc(e[0], e[1], e.slice(2)) },
  angles: g => { const e = pick([['الزاوية التي قياسها ٩٠ درجة تسمى:', 'قائمة', 'حادة', 'منفرجة', 'مستقيمة'], ['الزاوية التي قياسها أقل من ٩٠ درجة:', 'حادة', 'قائمة', 'منفرجة', 'مستقيمة'], ['الزاوية التي قياسها أكبر من ٩٠ وأقل من ١٨٠ درجة:', 'منفرجة', 'حادة', 'قائمة', 'مستقيمة'], ['مجموع زوايا المثلث:', '١٨٠ درجة', '٩٠ درجة', '٣٦٠ درجة', '٢٧٠ درجة']]); return mc(e[0], e[1], e.slice(2)) },
  tf: g => gTF(g)
};

/* ---- دروس المنهاج حسب الصف والمادة ---- */
var CUR = {1:{},2:{},3:{},4:{},5:{},6:{}};

(function(){
/* العربية لغتي: الفصل الأول للصفوف ١، ٢، ٣، ٥، ٦ والفصل الثاني للصفوف ٣، ٥، ٦ — مهارات المنهاج السوري لكل صف */
function A(sem, unit, t, q) { return { sem, unit, t, q } }
function first(word, pic, wrong) { return [`بأيّ حرف تبدأ كلمة «${word}»؟ ${pic || ''}`, word[0], ...wrong] }
CUR[1].ar = (CUR[1].ar || []).concat([
 A(1,'أنا والمدرسة','حرف الميم (م)',[first('موز','🍌',['ب','ن','ر']),first('مدرسة','🏫',['د','س','ل']),['أيّ كلمة فيها حرف «م»؟','قلم','باب','نور','بيت']]),
 A(1,'أنا والمدرسة','حرف الباء (ب)',[first('بطة','🦆',['ت','م','ن']),first('باب','🚪',['ن','ت','ي']),['أيّ كلمة فيها حرف «ب»؟','كتاب','قلم','نور','وردة']]),
 A(1,'أنا والمدرسة','حرف الراء (ر)',[first('رمان','',['ز','د','و']),['أيّ كلمة فيها حرف «ر»؟','نور','قلم','بيت','سلة']]),
 A(1,'أسرتي','حرف الدال (د)',[first('دب','🐻',['ذ','ر','ب']),first('دار','🏠',['ذ','ر','ز']),['أيّ كلمة فيها حرف «د»؟','ورد','باب','نمر','قلم']]),
 A(1,'أسرتي','حرف السين (س)',[first('سمكة','🐟',['ش','ص','ز']),first('سيارة','🚗',['ش','ص','ث']),['أيّ كلمة فيها حرف «س»؟','شمس','قمر','بيت','وردة']]),
 A(1,'أسرتي','حرف النون (ن)',[first('نحلة','🐝',['ت','ب','ي']),first('نمر','🐯',['ب','م','ل']),['أيّ كلمة فيها حرف «ن»؟','لون','باب','قلم','دار']]),
 A(1,'بيتي','حرف اللام (ل)',[first('ليمون','🍋',['ك','ن','م']),['أيّ كلمة فيها حرف «ل»؟','قلم','باب','نور','دار'],['كم حرفاً في كلمة «ليل»؟','٣','٢','٤']]),
 A(1,'بيتي','حرف الكاف (ك)',[first('كتاب','📖',['ق','ت','ل']),first('كرة','⚽',['ق','ر','ج']),['أيّ كلمة فيها حرف «ك»؟','سمك','باب','نور','قلم']]),
 A(1,'بيتي','حرف الفاء والقاف (ف - ق)',[first('فيل','🐘',['ق','ب','ث']),first('قمر','🌙',['ف','ك','غ']),['أيّ كلمة تبدأ بحرف «ق»؟','قلم','فيل','كتاب','باب']]),
 A(1,'بيتي','حرف العين والغين (ع - غ)',[first('عنب','🍇',['غ','ح','أ']),first('غيمة','☁️',['ع','ف','ق']),['أيّ كلمة تبدأ بحرف «ع»؟','عصفور','غزال','فيل','باب']])
]);
CUR[2].ar = (CUR[2].ar || []).concat([
 A(1,'الوحدة الأولى: أنا ومدرستي','المفرد والجمع',[['جمع «قلم»:','أقلام','قلمان','قلمات'],['مفرد «كتب»:','كتاب','كاتب','مكتبة'],['جمع «ولد»:','أولاد','ولدان','والدون']]),
 A(1,'الوحدة الأولى: أنا ومدرستي','ال الشمسية وال القمرية',[['في كلمة «الشمس» اللام:','شمسية لا تُلفظ','قمرية تُلفظ'],['في كلمة «القمر» اللام:','قمرية تُلفظ','شمسية لا تُلفظ'],['أيّ كلمة فيها ال قمرية؟','الكتاب','النهر','الشمس','السماء']]),
 A(1,'الوحدة الثانية: أسرتي','التاء المربوطة والتاء المفتوحة',[['أيّ كلمة تنتهي بتاء مربوطة؟','شجرة','بيت','زيت','صوت'],['أيّ كلمة تنتهي بتاء مفتوحة؟','بنت','مدرسة','وردة','شجرة'],['نكتب: «حديقـ...»','ة','ت']]),
 A(1,'الوحدة الثانية: أسرتي','أسماء الإشارة',[['اسم الإشارة للمفرد المذكر القريب:','هذا','هذه','هؤلاء'],['اسم الإشارة للمفردة المؤنثة القريبة:','هذه','هذا','ذلك'],['«___ وردةٌ جميلة»','هذه','هذا','هؤلاء']]),
 A(1,'الوحدة الثالثة: صحتي','المذكر والمؤنث',[['مؤنث «معلّم»:','معلّمة','معلّمون','مُعلِم'],['مذكر «طالبة»:','طالب','طلاب','طالبات'],['«الشجرة» كلمة:','مؤنثة','مذكرة']]),
 A(1,'الوحدة الثالثة: صحتي','الأضداد',[['عكس «نظيف»:','متسخ','جميل','كبير'],['عكس «صحيح» (سليم):','مريض','قوي','طويل'],['عكس «نهار»:','ليل','صباح','شمس']])
]);
CUR[3].ar = (CUR[3].ar || []).concat([
 A(1,'الوحدة الأولى: الوطن','الاسم والفعل والحرف',[['«يلعبُ» نوعها:','فعل','اسم','حرف'],['«مدرسة» نوعها:','اسم','فعل','حرف'],['«في» نوعها:','حرف','اسم','فعل']]),
 A(1,'الوحدة الأولى: الوطن','الجملة الاسمية والفعلية',[['«الوطنُ جميلٌ» جملة:','اسمية','فعلية'],['«يحبُّ الطفلُ وطنَه» جملة:','فعلية','اسمية'],['الجملة الفعلية تبدأ بـ:','فعل','اسم','حرف']]),
 A(1,'الوحدة الثانية: الطبيعة','المثنى',[['مثنى «كتاب»:','كتابان','كتب','كتابات'],['مثنى «شجرة»:','شجرتان','أشجار','شجرات'],['«الطالبان» تدل على:','اثنين','واحد','جماعة']]),
 A(1,'الوحدة الثانية: الطبيعة','المرادف (الكلمة ومعناها)',[['مرادف «سعيد»:','فرحان','حزين','غاضب'],['مرادف «بيت»:','منزل','مدرسة','شارع'],['مرادف «عام»:','سنة','شهر','يوم']]),
 A(1,'الوحدة الثالثة: العلم','الضمائر',[['«نحن» ضمير للـ:','متكلمين','غائب','مخاطب'],['«هي» ضمير للـ:','غائبة المفردة','متكلم','مخاطبين'],['«أنتَ» ضمير للـ:','مخاطب المفرد','غائب','متكلمة']]),
 A(2,'الوحدة الرابعة: البيئة','الفعل الماضي والمضارع والأمر',[['«كتبَ» فعل:','ماضٍ','مضارع','أمر'],['«يكتبُ» فعل:','مضارع','ماضٍ','أمر'],['«اكتبْ» فعل:','أمر','ماضٍ','مضارع']]),
 A(2,'الوحدة الرابعة: البيئة','حروف الجر',[['من حروف الجر:','في، من، على، إلى','لم، لن','هذا، هذه'],['«العصفور على الشجرة» حرف الجر:','على','العصفور','الشجرة']]),
 A(2,'الوحدة الخامسة: الصحة','الهمزة في أول الكلمة',[['أيّ كلمة تبدأ بهمزة؟','أمل','بيت','قلم'],['تُكتب الهمزة تحت الألف في:','إبرة','أسد','أمّ']]),
 A(2,'الوحدة السادسة: القيم','علامات الترقيم',[['نضع في نهاية السؤال:','؟','.','!'],['نضع في نهاية الجملة الخبرية:','.','؟','!'],['علامة التعجب:','!','؟','،']])
]);
CUR[5].ar = (CUR[5].ar || []).concat([
 A(1,'الوحدة الأولى: المواطنة والانتماء','الجملة الفعلية ومتمّماتها',[['«قرأَ الطالبُ القصةَ» الفاعل:','الطالبُ','قرأَ','القصةَ'],['«قرأَ الطالبُ القصةَ» المفعول به:','القصةَ','الطالبُ','قرأَ'],['ركنا الجملة الفعلية:','الفعل والفاعل','المبتدأ والخبر','الحرف والاسم']]),
 A(1,'الوحدة الأولى: المواطنة والانتماء','الهمزة المتوسطة',[['تُكتب الهمزة على الواو في:','مؤمن','سأل','بئر'],['تُكتب الهمزة على الألف في:','سأل','بئر','مؤمن'],['تُكتب الهمزة على النبرة في:','بئر','رأس','مؤذن']]),
 A(1,'الوحدة الثانية: التعاون','حقيقة أم رأي أم خيال',[['«الماء يغلي عند ١٠٠ درجة» هذه:','حقيقة','رأي','خيال'],['«الصيف أجمل الفصول» هذا:','رأي','حقيقة','خيال'],['«طار الحصان إلى القمر» هذا:','خيال','حقيقة','رأي']]),
 A(1,'الوحدة الثانية: التعاون','المبتدأ والخبر',[['«التعاونُ قوةٌ» المبتدأ:','التعاونُ','قوةٌ'],['«الأصدقاءُ متعاونون» الخبر:','متعاونون','الأصدقاءُ'],['حركة المبتدأ والخبر:','الرفع','النصب','الجر']]),
 A(1,'الوحدة الثالثة: العلم والعمل','جمع المذكر السالم',[['جمع «مهندس» جمع مذكر سالم:','مهندسون','مهندسات','مهاندس'],['علامة رفع جمع المذكر السالم:','الواو','الضمة','الألف'],['«رأيتُ المعلمين» علامة النصب:','الياء','الواو','الفتحة']]),
 A(2,'الوحدة الرابعة: البيئة','كان وأخواتها',[['«كان الجوُّ جميلاً» اسم كان:','الجوُّ','جميلاً','كان'],['من أخوات كان:','أصبح، صار، ليس','إنّ، ليت','في، على'],['خبر كان يكون:','منصوباً','مرفوعاً','مجروراً']]),
 A(2,'الوحدة الخامسة: الصحة','إنّ وأخواتها',[['«إنّ الرياضةَ مفيدةٌ» اسم إنّ:','الرياضةَ','مفيدةٌ','إنّ'],['خبر إنّ يكون:','مرفوعاً','منصوباً','مجروراً'],['من أخوات إنّ:','أنّ، كأنّ، لكنّ، ليت، لعلّ','كان، صار','لم، لن']]),
 A(2,'الوحدة السادسة: التراث','الهمزة المتطرفة',[['تُكتب الهمزة على السطر في:','سماء','قرأ','لؤلؤ'],['تُكتب الهمزة على الألف في آخر:','قرأ','شيء','ضوء']])
]);
CUR[6].ar = (CUR[6].ar || []).concat([
 A(1,'الوحدة الأولى: الوطن','الفاعل ونائب الفاعل',[['«كُتِبَ الدرسُ» الدرسُ:','نائب فاعل','فاعل','مفعول به'],['«كتبَ الطالبُ الدرسَ» الطالبُ:','فاعل','نائب فاعل','مبتدأ'],['الفعل المبني للمجهول:','كُسِرَ','كَسَرَ','يكسرُ']]),
 A(1,'الوحدة الأولى: الوطن','المفعول به',[['«شاهدتُ القلعةَ» المفعول به:','القلعةَ','شاهدتُ','التاء'],['علامة نصب المفعول به المفرد:','الفتحة','الضمة','الكسرة']]),
 A(1,'الوحدة الثانية: العلم','الأفعال الخمسة',[['من الأفعال الخمسة:','يكتبون','كتب','اكتب'],['علامة رفع الأفعال الخمسة:','ثبوت النون','الضمة','الواو'],['«لم يكتبوا» علامة الجزم:','حذف النون','السكون','الفتحة']]),
 A(1,'الوحدة الثانية: العلم','الأسماء الخمسة',[['من الأسماء الخمسة:','أبو، أخو، حمو، فو، ذو','هذا، هذه','كان، صار'],['«جاء أبوك» علامة رفع «أبو»:','الواو','الضمة','الألف'],['«رأيت أخاك» علامة النصب:','الألف','الفتحة','الياء']]),
 A(1,'الوحدة الثالثة: الصحة','الحال',[['«جاء الطفلُ مسرعاً» الحال:','مسرعاً','جاء','الطفلُ'],['الحال يكون:','منصوباً','مرفوعاً','مجروراً']]),
 A(2,'الوحدة الرابعة: التراث','التمييز',[['«اشتريتُ كيلو عنباً» التمييز:','عنباً','كيلو','اشتريت'],['التمييز يكون:','منصوباً','مرفوعاً','مجروراً']]),
 A(2,'الوحدة الخامسة: البيئة','أسلوب النداء والتعجب',[['«يا أحمدُ» أسلوب:','نداء','تعجب','استفهام'],['«ما أجملَ الربيعَ!» أسلوب:','تعجب','نداء','أمر']]),
 A(2,'الوحدة السادسة: القيم','العدد والمعدود',[['«ثلاثةُ كتبٍ» العدد يخالف المعدود في:','التذكير والتأنيث','العدد','الإعراب'],['الصواب:','خمسُ طالباتٍ','خمسةُ طالباتٍ','خمسُ طلابٍ']])
]);

})();
(function(){
/* الإنكليزي · سلسلة إيمار · الصفوف ١–٣ (٢٥ وحدة: ١–١٣ الفصل الأول، ١٤–٢٥ الفصل الثاني) */
// مساعد: سؤال معنى كلمة
function V(en, ar, w1, w2, w3) { return ['ما معنى الكلمة؟||' + en, ar, w1, w2, w3] }
function P(emoji, en, w1, w2, w3) { return [`ما الكلمة الإنكليزية لـ ${emoji}؟`, en, w1, w2, w3] }
function C(sentence, ok, w1, w2) { return ['اختر الكلمة المناسبة:||' + sentence, ok, w1, w2] }
function enUnits(list) { return list.map((u, i) => ({ sem: i < 13 ? 1 : 2, unit: 'Unit ' + (i + 1), t: u[0], q: u[1] })) }
CUR[1] = CUR[1] || {}; CUR[2] = CUR[2] || {}; CUR[3] = CUR[3] || {};
CUR[1].en = enUnits([
 ['Hello!', [['اختر الرد المناسب:||Hello!', 'Hello!', 'Bye!', 'Thank you.'], C('My ___ is Sami.', 'name', 'book', 'red'), V('Goodbye', 'مع السلامة', 'مرحباً', 'شكراً', 'نعم')]],
 ['My Classroom', [P('📖', 'book', 'pen', 'bag', 'desk'), P('✏️', 'pencil', 'book', 'chair', 'door'), C('What’s ___? It’s a pen.', 'this', 'he', 'she'), V('bag', 'حقيبة', 'كتاب', 'قلم', 'كرسي')]],
 ['In the Classroom', [V('Stand up', 'قف', 'اجلس', 'افتح', 'أغلق'), V('Sit down', 'اجلس', 'قف', 'اكتب', 'اقرأ'), ['كيف نكتب ٣ بالإنكليزي؟', 'three', 'two', 'five', 'one'], V('Open your book', 'افتح كتابك', 'أغلق كتابك', 'اقرأ', 'ارسم')]],
 ['A Boy and a Girl', [C('This is Sami. ___ is a boy.', 'He', 'She', 'It'), C('This is Hala. ___ is a girl.', 'She', 'He', 'It'), V('girl', 'بنت', 'ولد', 'رجل', 'امرأة'), V('boy', 'ولد', 'بنت', 'أم', 'أخت')]],
 ['Revision 1', [P('🎒', 'bag', 'book', 'pen', 'cat'), C('___ is a girl.', 'She', 'He', 'I'), ['كيف نكتب ٥ بالإنكليزي؟', 'five', 'four', 'three', 'two'], V('pen', 'قلم حبر', 'كتاب', 'باب', 'نافذة')]],
 ['Colours', [P('🍎 (لون)', 'red', 'blue', 'green', 'yellow'), P('🍌 (لون)', 'yellow', 'red', 'black', 'blue'), P('🌿 (لون)', 'green', 'red', 'white', 'pink'), C('What ___ is this? It’s blue.', 'colour', 'name', 'time')]],
 ['My Body', [P('👁️', 'eye', 'ear', 'nose', 'hand'), P('👂', 'ear', 'eye', 'leg', 'head'), P('✋', 'hand', 'foot', 'nose', 'mouth'), V('head', 'رأس', 'يد', 'قدم', 'أذن')]],
 ['My Family', [V('mother', 'أم', 'أب', 'أخ', 'أخت'), V('father', 'أب', 'أم', 'جد', 'أخت'), C('Who’s ___? He’s my brother.', 'he', 'she', 'it'), V('sister', 'أخت', 'أخ', 'أم', 'أب')]],
 ['My Birthday', [C('How ___ are you? I’m six.', 'old', 'are', 'is'), ['كيف نكتب ٧ بالإنكليزي؟', 'seven', 'six', 'eight', 'nine'], ['كيف نكتب ١٠ بالإنكليزي؟', 'ten', 'nine', 'six', 'one'], P('🎂', 'cake', 'ball', 'car', 'book')]],
 ['Revision 2', [P('🔵 (لون)', 'blue', 'red', 'green', 'white'), V('brother', 'أخ', 'أخت', 'أب', 'أم'), P('👃', 'nose', 'ear', 'eye', 'mouth'), ['كيف نكتب ٨ بالإنكليزي؟', 'eight', 'eleven', 'six', 'three']]],
 ['My House', [V('kitchen', 'مطبخ', 'حمام', 'غرفة نوم', 'حديقة'), C('The cat is ___ the box. (فوق)', 'on', 'in', 'under'), C('The ball is ___ the bag. (داخل)', 'in', 'on', 'at'), P('🛏️', 'bed', 'door', 'table', 'window')]],
 ['Clothes', [P('👕', 'shirt', 'hat', 'shoes', 'dress'), P('👗', 'dress', 'shirt', 'socks', 'cap'), P('👟', 'shoes', 'hat', 'skirt', 'coat'), C('Who’s ___? She’s my mum.', 'that', 'this is', 'they')]],
 ['My Food', [P('🍞', 'bread', 'milk', 'egg', 'rice'), P('🥛', 'milk', 'water', 'juice', 'tea'), P('🥚', 'egg', 'apple', 'cake', 'bread'), C('Do you like apples? Yes, I ___.', 'do', 'am', 'is')]],
 ['Seasons', [V('summer', 'الصيف', 'الشتاء', 'الربيع', 'الخريف'), V('winter', 'الشتاء', 'الصيف', 'الربيع', 'الخريف'), C('It’s hot in ___.', 'summer', 'winter', 'snow'), V('spring', 'الربيع', 'الخريف', 'الصيف', 'الشتاء')]],
 ['Revision 3', [P('🚪', 'door', 'window', 'bed', 'chair'), C('The book is ___ the table. (فوق)', 'on', 'in', 'is'), P('🧢', 'cap', 'shoe', 'shirt', 'sock'), V('autumn', 'الخريف', 'الربيع', 'الصيف', 'الشتاء')]],
 ['Animals', [P('🐱', 'cat', 'dog', 'cow', 'duck'), P('🐶', 'dog', 'cat', 'horse', 'fish'), C('There ___ three ducks.', 'are', 'is', 'am'), P('🐄', 'cow', 'cat', 'bird', 'lion')]],
 ['Vehicles', [P('🚗', 'car', 'bus', 'bike', 'train'), P('🚌', 'bus', 'car', 'plane', 'boat'), P('✈️', 'plane', 'train', 'ship', 'bike'), V('fast', 'سريع', 'بطيء', 'كبير', 'صغير')]],
 ['Jobs', [V('doctor', 'طبيب', 'معلم', 'شرطي', 'فلاح'), V('teacher', 'معلم', 'طبيب', 'طباخ', 'سائق'), C('___ a farmer.', 'He’s', 'He', 'Is'), V('nurse', 'ممرضة', 'معلمة', 'طبيبة أسنان', 'بائعة')]],
 ['In the Park', [P('🌳', 'tree', 'flower', 'ball', 'bird'), P('🌸', 'flower', 'tree', 'grass', 'sun'), C('Where ___ the ball? It’s under the tree.', 'is', 'are', 'am'), V('under', 'تحت', 'فوق', 'جانب', 'داخل')]],
 ['Revision 4', [P('🐴', 'horse', 'cow', 'dog', 'goat'), P('🚲', 'bike', 'car', 'bus', 'boat'), V('next to', 'بجانب', 'تحت', 'فوق', 'داخل'), V('police officer', 'شرطي', 'طبيب', 'طيار', 'فلاح')]],
 ['Music', [P('🎸', 'guitar', 'drum', 'piano', 'flute'), P('🥁', 'drum', 'guitar', 'piano', 'violin'), C('I can ___ the piano.', 'play', 'eat', 'swim'), V('song', 'أغنية', 'لعبة', 'قصة', 'رقصة')]],
 ['At the Beach', [C('I ___ swim. (أستطيع)', 'can', 'can’t', 'is'), V('sea', 'البحر', 'الشاطئ', 'الشمس', 'الرمل'), P('☀️', 'sun', 'moon', 'star', 'cloud'), V('sand', 'رمل', 'ماء', 'صدف', 'سمك')]],
 ['Sports', [P('⚽', 'football', 'tennis', 'basketball', 'swimming'), C('I like football. I ___ like tennis.', 'don’t', 'am', 'is'), V('run', 'يركض', 'يسبح', 'يقفز', 'ينام'), V('jump', 'يقفز', 'يركض', 'يأكل', 'يرسم')]],
 ['Look at Me', [V('tall', 'طويل', 'قصير', 'سمين', 'صغير'), V('short', 'قصير', 'طويل', 'كبير', 'قوي'), C('She ___ long hair.', 'has', 'have', 'is'), V('hair', 'شعر', 'عين', 'أذن', 'يد')]],
 ['Revision 5', [C('He ___ tall.', 'is', 'are', 'am'), C('I ___ play football.', 'can', 'is', 'are'), P('🎹', 'piano', 'drum', 'guitar', 'ball'), V('happy', 'سعيد', 'حزين', 'متعب', 'جائع')]]
]);
CUR[2].en = enUnits([
 ['Welcome Back', [['اختر الرد المناسب:||How are you?', 'I’m fine, thank you.', 'I’m seven.', 'It’s red.'], C('My name ___ Rami.', 'is', 'are', 'am'), V('friend', 'صديق', 'أخ', 'معلم', 'جار')]],
 ['Our New Classroom', [C('These are ___. (أقلام)', 'pens', 'pen', 'a pen'), P('🪑', 'chair', 'table', 'board', 'door'), C('How many books? ___ books.', 'Four', 'Is', 'Are'), V('board', 'السبورة', 'المقعد', 'النافذة', 'الحقيبة')]],
 ['New Friends', [C('___ are my friends. (أولئك)', 'Those', 'This', 'That'), C('___ are my books. (هذه)', 'These', 'This', 'That'), V('kind', 'لطيف', 'طويل', 'سريع', 'غاضب'), V('funny', 'مضحك', 'حزين', 'هادئ', 'خائف')]],
 ['Follow the Rules', [C('___ run in the classroom!', 'Don’t', 'Do', 'Is'), V('Be quiet', 'كن هادئاً', 'اركض', 'اصرخ', 'نَم'), C('___ your hand.', 'Raise', 'Eat', 'Jump'), V('rules', 'القواعد', 'الألعاب', 'الكتب', 'الأصدقاء')]],
 ['Revision 1', [C('This ___ my bag.', 'is', 'are', 'am'), C('___ shout in class!', 'Don’t', 'Do', 'Can'), V('classroom', 'الصف', 'المطبخ', 'الحديقة', 'الملعب'), C('Those ___ my pencils.', 'are', 'is', 'am')]],
 ['In the Park', [P('🛝', 'slide', 'swing', 'tree', 'bench'), V('swing', 'أرجوحة', 'زحليقة', 'مقعد', 'شجرة'), C('Is there a bird? Yes, there ___.', 'is', 'are', 'am'), V('bench', 'مقعد', 'شجرة', 'زهرة', 'كرة')]],
 ['Where Is It?', [C('The cat is ___ the chair. (تحت)', 'under', 'on', 'in'), C('The ball is ___ the box. (داخل)', 'in', 'on', 'under'), V('behind', 'خلف', 'أمام', 'فوق', 'تحت'), C('Where ___ my shoes?', 'are', 'is', 'am')]],
 ['I Like Food', [C('Can I have some water, ___?', 'please', 'thanks', 'sorry'), P('🍕', 'pizza', 'bread', 'rice', 'soup'), P('🍇', 'grapes', 'apples', 'bananas', 'oranges'), ['اختر الرد المناسب:||Here you are.', 'Thank you.', 'Hello.', 'Goodbye.']]],
 ['Computer Games', [V('computer', 'حاسوب', 'تلفاز', 'هاتف', 'راديو'), C('Can you play this game? Yes, I ___.', 'can', 'do', 'am'), V('game', 'لعبة', 'كتاب', 'قلم', 'درس'), V('win', 'يفوز', 'يخسر', 'يلعب', 'ينام')]],
 ['Revision 2', [P('🍉', 'watermelon', 'apple', 'orange', 'pear'), C('The bag is ___ the desk. (فوق)', 'on', 'in', 'under'), V('slide', 'زحليقة', 'أرجوحة', 'شجرة', 'كرة'), C('Can I have an apple, ___?', 'please', 'sorry', 'yes')]],
 ['Baby Animals', [V('kitten', 'قطة صغيرة', 'جرو', 'خروف صغير', 'كتكوت'), V('puppy', 'جرو (كلب صغير)', 'قطة صغيرة', 'عجل', 'مهر'), C('Birds can ___.', 'fly', 'swim', 'read'), C('Fish can ___.', 'swim', 'fly', 'climb')]],
 ['Helping at Home', [C('What are you ___? I’m cleaning.', 'doing', 'do', 'does'), C('I’m ___ the dishes.', 'washing', 'wash', 'washes'), V('help', 'يساعد', 'يلعب', 'ينام', 'يأكل'), C('She is ___ her room.', 'tidying', 'tidy', 'tidies')]],
 ['On Holiday', [V('holiday', 'عطلة', 'مدرسة', 'درس', 'واجب'), C('They are ___ in the sea.', 'swimming', 'swim', 'swims'), V('beach', 'الشاطئ', 'الجبل', 'المدينة', 'الصحراء'), C('We ___ having fun.', 'are', 'is', 'am')]],
 ['Happy New Year', [C('Here ___ some cakes.', 'are', 'is', 'am'), C('I’ve got ___ sweets.', 'some', 'a', 'an'), V('party', 'حفلة', 'رحلة', 'مدرسة', 'سوق'), V('present', 'هدية', 'شمعة', 'كعكة', 'بالون')]],
 ['Revision 3', [C('What is he ___? He’s reading.', 'doing', 'do', 'does'), V('kitten', 'قطة صغيرة', 'دب', 'أرنب', 'حصان'), C('Here ___ your pen.', 'is', 'are', 'am'), C('They are ___ football.', 'playing', 'play', 'plays')]],
 ['Daily Routine', [C('I get up ___ seven o’clock.', 'at', 'on', 'in'), V('Monday', 'الاثنين', 'الأحد', 'الجمعة', 'السبت'), C('I ___ my teeth.', 'brush', 'brushes', 'brushing'), V('breakfast', 'الفطور', 'العشاء', 'الغداء', 'الحلوى')]],
 ['Telling the Time', [C('What ___ is it?', 'time', 'colour', 'name'), ['الساعة ٣:٠٠ نقولها:||It’s ___ .', 'three o’clock', 'half past three', 'two o’clock'], ['كيف نكتب ١٢ بالإنكليزي؟', 'twelve', 'twenty', 'eleven', 'two'], V('clock', 'ساعة حائط', 'قلم', 'هاتف', 'باب')]],
 ['Meet My Family', [V('grandfather', 'الجد', 'الأب', 'العم', 'الأخ'), C('My mother ___ a teacher.', 'is', 'are', 'am'), V('hospital', 'مستشفى', 'مدرسة', 'مزرعة', 'مخبز'), V('farmer', 'فلاح', 'طبيب', 'طيار', 'شرطي')]],
 ['At the Weekend', [C('What do you ___ at the weekend?', 'do', 'does', 'doing'), V('weekend', 'عطلة نهاية الأسبوع', 'يوم المدرسة', 'الصباح', 'المساء'), C('I ___ my grandma on Friday.', 'visit', 'visits', 'visiting'), V('Friday', 'الجمعة', 'الخميس', 'السبت', 'الأحد')]],
 ['Revision 4', [C('I go to school ___ Sunday.', 'on', 'at', 'in'), ['كيف نكتب ١١ بالإنكليزي؟', 'eleven', 'twelve', 'one', 'seven'], V('uncle', 'العم أو الخال', 'الجد', 'الأخ', 'الأب'), C('She ___ up at six.', 'gets', 'get', 'getting')]],
 ['Fun Time', [P('🟣 (لون)', 'purple', 'pink', 'brown', 'grey'), P('🩷 (لون)', 'pink', 'purple', 'orange', 'red'), C('She’s ___ a red dress.', 'wearing', 'wear', 'wears'), V('curly hair', 'شعر مجعد', 'شعر طويل', 'شعر أسود', 'شعر قصير')]],
 ['Get Well Soon', [V('cold', 'زكام', 'صداع', 'ألم ضرس', 'حمى'), C('I’ve got a ___. (ألم رأس)', 'headache', 'toothache', 'cold'), ['ماذا نقول للمريض؟||', 'Get well soon!', 'Happy birthday!', 'Good night!'], V('medicine', 'دواء', 'طعام', 'ماء', 'لعبة')]],
 ['What’s the Weather Like?', [V('rainy', 'ماطر', 'مشمس', 'حار', 'مثلج'), V('cloudy', 'غائم', 'مشمس', 'عاصف', 'حار'), C('It’s ___ today. (مشمس)', 'sunny', 'snowy', 'rainy'), V('windy', 'عاصف', 'ماطر', 'بارد', 'مثلج')]],
 ['Hobbies', [C('Do you like drawing? Yes, I ___.', 'do', 'am', 'can'), V('reading', 'القراءة', 'الكتابة', 'الرسم', 'السباحة'), V('dancing', 'الرقص', 'الغناء', 'الطبخ', 'الركض'), C('He likes ___ football.', 'playing', 'play', 'plays')]],
 ['Revision 5', [V('hot', 'حار', 'بارد', 'ماطر', 'غائم'), C('I’ve got a ___. (زكام)', 'cold', 'cake', 'cat'), C('She has ___ hair.', 'long', 'tall', 'old'), V('hobby', 'هواية', 'وظيفة', 'مدرسة', 'بيت')]]
]);
CUR[3].en = enUnits([
 ['Back to School', [C('I have ___ a new bag.', 'got', 'get', 'go'), C('This is my friend. ___ name is Sara.', 'Her', 'His', 'Its'), ['اختر الرد المناسب:||Nice to meet you.', 'Nice to meet you, too.', 'I’m eight.', 'Goodbye.']]],
 ['School Subjects', [V('Science', 'العلوم', 'الرياضيات', 'الرسم', 'العربي'), C('I have Maths ___ Monday.', 'on', 'in', 'at'), C('My favourite subject ___ Art.', 'is', 'are', 'am'), V('Music', 'الموسيقا', 'الرياضة', 'العلوم', 'الرسم')]],
 ['My Lovely School', [V('library', 'المكتبة', 'المختبر', 'الملعب', 'المقصف'), C('The library is ___ the first floor.', 'on', 'in', 'at'), V('playground', 'ساحة اللعب', 'المكتبة', 'الصف', 'المكتب'), V('canteen', 'المقصف', 'الصف', 'الحديقة', 'المسرح')]],
 ['My Five Senses', [C('I ___ with my eyes.', 'see', 'hear', 'smell'), C('I hear with my ___.', 'ears', 'eyes', 'nose'), C('A dog ___ smell very well.', 'can', 'can’t', 'is'), V('touch', 'يلمس', 'يرى', 'يسمع', 'يتذوق')]],
 ['Revision 1', [V('Art', 'الرسم', 'العلوم', 'الرياضيات', 'الرياضة'), C('I taste with my ___.', 'tongue', 'ears', 'eyes'), C('She has ___ a cat.', 'got', 'get', 'go'), V('office', 'المكتب', 'الصف', 'المكتبة', 'المطبخ')]],
 ['My Daily Routine', [C('What time ___ you get up?', 'do', 'does', 'are'), C('He ___ breakfast at seven.', 'has', 'have', 'having'), V('lunch', 'الغداء', 'الفطور', 'العشاء', 'الوجبة الخفيفة'), C('I go to bed ___ nine o’clock.', 'at', 'on', 'in')]],
 ['I Love Cartoons', [V('cartoons', 'رسوم متحركة', 'أخبار', 'رياضة', 'أفلام'), C('I watch TV ___ the evening.', 'in', 'on', 'at'), ['الساعة ٤:٣٠ نقولها:', 'half past four', 'four o’clock', 'half past three'], V('programme', 'برنامج', 'لعبة', 'كتاب', 'قصة')]],
 ['Let’s Have Fun', [C('Let’s ___ football!', 'play', 'plays', 'playing'), ['اختر الرد المناسب:||Let’s go to the park!', 'Good idea!', 'I’m eight.', 'It’s blue.'], V('fly a kite', 'يطيّر طائرة ورقية', 'يركب دراجة', 'يسبح', 'يرسم'), V('ride a bike', 'يركب دراجة', 'يقود سيارة', 'يطير', 'يركض')]],
 ['Fun at Home', [C('Is he ___ TV? Yes, he is.', 'watching', 'watch', 'watches'), C('Are they ___ the garden?', 'cleaning', 'clean', 'cleans'), C('Is she ___ a book?', 'reading', 'read', 'reads'), C('Is Sara ___ the car?', 'washing', 'wash', 'washes')]],
 ['Revision 2', [C('What time ___ she go to school?', 'does', 'do', 'is'), C('They ___ playing chess.', 'are', 'is', 'am'), V('evening', 'المساء', 'الصباح', 'الظهر', 'الليل'), C('Let’s ___ a kite!', 'fly', 'flies', 'flying')]],
 ['Friendly Neighbours', [V('neighbour', 'جار', 'صديق', 'أخ', 'معلم'), C('What is he doing? He ___ painting.', 'is', 'are', 'am'), C('They are ___ to music.', 'listening', 'listen', 'listens'), V('watering', 'يسقي', 'يأكل', 'يكتب', 'يركض')]],
 ['A Different Day', [V('always', 'دائماً', 'أبداً', 'أحياناً', 'غالباً'), V('sometimes', 'أحياناً', 'دائماً', 'أبداً', 'اليوم'), C('I ___ go to school on Friday. (أبداً)', 'never', 'always', 'usually'), C('She usually ___ milk.', 'drinks', 'drink', 'drinking')]],
 ['Give Me a Hand', [C('___ you help me, please?', 'Can', 'Is', 'Are'), ['اختر الرد المناسب:||Can you open the door, please?', 'Sure!', 'I’m nine.', 'It’s Monday.'], V('carry', 'يحمل', 'يرمي', 'يأكل', 'يكسر'), V('Give me a hand', 'ساعدني', 'أعطني يدك فقط', 'صافحني', 'اتركني')]],
 ['Months and Seasons', [V('January', 'كانون الثاني', 'شباط', 'آذار', 'نيسان'), C('It’s cold in ___.', 'winter', 'summer', 'spring'), V('August', 'آب', 'أيار', 'أيلول', 'حزيران'), C('What’s the weather ___ in spring?', 'like', 'is', 'do')]],
 ['Revision 3', [C('Can you ___ me, please?', 'help', 'helps', 'helping'), V('December', 'كانون الأول', 'تشرين الأول', 'تشرين الثاني', 'تموز'), C('He always ___ his homework.', 'does', 'do', 'doing'), C('She ___ sleeping now.', 'is', 'are', 'am')]],
 ['Save the Baby Bird', [V('nest', 'عش', 'قفص', 'شجرة', 'ريشة'), C('I ___ we should help it. (أعتقد)', 'think', 'thinks', 'thinking'), V('baby bird', 'فرخ العصفور', 'دجاجة', 'نسر', 'بيضة'), V('careful', 'حذر', 'سريع', 'غاضب', 'مضحك')]],
 ['A Visit to the Zoo', [C('How ___ is the giraffe? It’s 5 metres.', 'tall', 'long', 'old'), C('How ___ is the snake?', 'long', 'tall', 'many'), P('🦒', 'giraffe', 'elephant', 'zebra', 'monkey'), P('🐒', 'monkey', 'lion', 'bear', 'tiger')]],
 ['Let’s Go Shopping', [C('How ___ is the T-shirt?', 'much', 'many', 'old'), V('shop', 'متجر', 'مدرسة', 'حديقة', 'بيت'), C('The bakery is ___ to the bank.', 'next', 'under', 'on'), V('money', 'نقود', 'هدية', 'حقيبة', 'طعام')]],
 ['My Favourite Meal', [C('I’d ___ some rice, please.', 'like', 'likes', 'liking'), C('Can I ___ some juice?', 'have', 'has', 'having'), V('meal', 'وجبة', 'كوب', 'صحن', 'ملعقة'), V('menu', 'قائمة الطعام', 'المطبخ', 'الطاولة', 'النادل')]],
 ['Revision 4', [C('How ___ is your brother? He’s 1.5 metres.', 'tall', 'long', 'much'), C('I’d like ___ apple.', 'an', 'a', 'some'), P('🦁', 'lion', 'tiger', 'bear', 'wolf'), C('The shop is ___ the bank and the school.', 'between', 'on', 'in')]],
 ['When I Was Five', [C('When I was five I ___ small.', 'was', 'were', 'am'), C('My friends ___ funny.', 'were', 'was', 'is'), V('young', 'صغير السن', 'كبير السن', 'طويل', 'قوي'), C('I ___ happy yesterday.', 'was', 'were', 'am')]],
 ['My Town', [C('There ___ a big park in my town.', 'was', 'were', 'is'), C('There ___ many shops.', 'were', 'was', 'is'), V('town', 'بلدة', 'قرية', 'غابة', 'بحر'), V('old', 'قديم', 'جديد', 'كبير', 'صغير')]],
 ['On the Farm', [C('Yesterday I ___ the animals. (أطعم)', 'fed', 'feed', 'feeds'), C('We ___ the cows yesterday.', 'milked', 'milk', 'milks'), P('🐓', 'hen', 'cow', 'sheep', 'goat'), C('He ___ the farm last week.', 'visited', 'visit', 'visits')]],
 ['The Treasure', [V('treasure', 'كنز', 'خريطة', 'جزيرة', 'سفينة'), V('map', 'خريطة', 'كنز', 'صندوق', 'مفتاح'), C('They ___ a box under the tree.', 'found', 'find', 'finds'), V('exciting', 'مثير', 'ممل', 'حزين', 'مخيف')]],
 ['Revision 5', [C('I ___ my grandma last Friday.', 'visited', 'visit', 'visits'), C('There ___ a lot of children at the party.', 'were', 'was', 'is'), C('How ___ is the elephant?', 'tall', 'many', 'much'), V('island', 'جزيرة', 'بحر', 'نهر', 'جبل')]]
]);

})();
(function(){
/* الإنكليزي · سلسلة إيمار · الصفوف ٤–٦ (الوحدات ١–١٠ الفصل الأول، ١١–٢٠ الفصل الثاني) */
CUR[4] = CUR[4] || {};
CUR[4].en = [
 {sem:1,unit:'Unit 1',t:'Nice to meet you',q:[['اختر الكلمة المناسبة:||I ___ from Syria.','am','is','are'],['اختر الرد المناسب:||Nice to meet you.','Nice to meet you, too.','Good night.','I am ten.'],['اختر الكلمة المناسبة:||We ___ friends.','are','is','am'],['كيف نكتب العدد ١٥ بالإنكليزي؟','fifteen','fifty','five','fourteen']]},
 {sem:1,unit:'Unit 2',t:'My Family',q:[['ما معنى الكلمة؟||grandmother','الجدّة','الأم','الأخت','العمّة'],['اختر الكلمة المناسبة:||She has ___ eyes.','blue','tall','long','old'],['اختر الكلمة المناسبة:||This is my brother. ___ is tall.','He','She','They','It'],['ما معنى الكلمة؟||uncle','العم أو الخال','الجد','الابن','الأب']]},
 {sem:1,unit:'Unit 3',t:'Daily Routine',q:[['اختر الكلمة المناسبة:||I ___ up at six o’clock.','get','gets','getting'],['اختر الكلمة المناسبة:||She ___ her teeth every morning.','brushes','brush','brushing'],['ما معنى الكلمة؟||breakfast','الفطور','الغداء','العشاء','النوم'],['اختر الكلمة المناسبة:||He goes to bed ___ nine o’clock.','at','on','in']]},
 {sem:1,unit:'Unit 4',t:'My House',q:[['اختر الكلمة المناسبة:||___ there a garden?','Is','Are','Am'],['اختر الكلمة المناسبة:||There ___ two beds in my room.','are','is','am'],['ما معنى الكلمة؟||kitchen','المطبخ','الحمّام','غرفة النوم','الحديقة'],['نطبخ الطعام في:','kitchen','bathroom','bedroom','garden']]},
 {sem:1,unit:'Unit 5',t:'School Subjects',q:[['ما معنى الكلمة؟||Science','العلوم','الرياضيات','الرسم','الموسيقا'],['ما معنى الكلمة؟||Maths','الرياضيات','العلوم','اللغة العربية','الرياضة'],['اختر الكلمة المناسبة:||My favourite ___ is Arabic.','subject','teacher','school'],['اختر الكلمة المناسبة:||We ___ English on Monday.','have','has','having']]},
 {sem:1,unit:'Unit 6',t:'Where I Live',q:[['اختر الكلمة المناسبة:||I live ___ Damascus.','in','on','at'],['ما معنى الكلمة؟||village','القرية','المدينة','الشارع','الجسر'],['ما معنى الكلمة؟||hospital','المستشفى','المدرسة','الحديقة','المخبز'],['اختر الكلمة المناسبة:||The bank is ___ the school and the park.','between','under','on']]},
 {sem:1,unit:'Unit 7',t:'Hobbies and Interests',q:[['اختر الكلمة المناسبة:||I like ___ football.','playing','play','plays'],['ما معنى الكلمة؟||drawing','الرسم','السباحة','القراءة','الطبخ'],['اختر الكلمة المناسبة:||She ___ reading stories.','likes','like','liking'],['ما معنى الكلمة؟||swimming','السباحة','الركض','الغناء','الرسم']]},
 {sem:1,unit:'Unit 8',t:'Clothes',q:[['ما معنى الكلمة؟||jacket','سترة','قبعة','حذاء','قميص'],['اختر الكلمة المناسبة:||He is wearing a red ___.','shirt','apple','chair'],['ما معنى الكلمة؟||shoes','حذاء','جوارب','بنطال','قفازات'],['في الشتاء نلبس:','a coat','shorts','a swimsuit','sandals']]},
 {sem:1,unit:'Unit 9',t:'Giving Directions',q:[['اختر الكلمة المناسبة:||Turn ___ and go straight.','left','up','big'],['ما معنى العبارة؟||Go straight','امشِ للأمام','انعطف يساراً','انعطف يميناً','توقف'],['اختر السؤال المناسب:||Excuse me! How can I get to the bank?','Go straight, then turn right.','I am fine.','It is red.','Yes, I do.'],['ما معنى الكلمة؟||next to','بجانب','خلف','فوق','تحت']]},
 {sem:1,unit:'Unit 10',t:'My Computer',q:[['ما معنى الكلمة؟||screen','الشاشة','الفأرة','لوحة المفاتيح','الطابعة'],['ما معنى الكلمة؟||keyboard','لوحة المفاتيح','الشاشة','السماعة','الكاميرا'],['اختر الكلمة المناسبة:||I use the ___ to click.','mouse','pen','book'],['اختر الكلمة المناسبة:||I send an ___ to my friend.','email','apple','egg']]},
 {sem:2,unit:'Unit 11',t:'Illnesses',q:[['ما معنى الكلمة؟||headache','صداع','ألم أسنان','زكام','حرارة'],['اختر الكلمة المناسبة:||What’s the ___ with you?','matter','name','time'],['اختر النصيحة المناسبة:||I have a cold.','You should rest.','You should eat sweets.','You should run.','You should shout.'],['ما معنى الكلمة؟||toothache','ألم أسنان','ألم بطن','صداع','سعال']]},
 {sem:2,unit:'Unit 12',t:'Jobs',q:[['ما معنى الكلمة؟||doctor','طبيب','معلّم','فلاح','طيّار'],['من يعلّم الطلاب؟','teacher','farmer','pilot','driver'],['اختر الكلمة المناسبة:||What ___ your father’s job?','is','are','am'],['من يطفئ الحرائق؟','firefighter','baker','nurse','pilot']]},
 {sem:2,unit:'Unit 13',t:'Healthy Habits',q:[['اختر العادة الصحية:','Eat fruit and vegetables.','Eat sweets all day.','Sleep late every night.','Never wash your hands.'],['اختر الكلمة المناسبة:||You ___ wash your hands before eating.','should','shouldn’t','can’t'],['ما معنى الكلمة؟||healthy','صحي','مريض','سريع','كبير'],['اختر الكلمة المناسبة:||Drink a lot of ___.','water','sugar','oil']]},
 {sem:2,unit:'Unit 14',t:'Sports',q:[['ما معنى الكلمة؟||basketball','كرة السلة','كرة القدم','التنس','السباحة'],['اختر الكلمة المناسبة:||He can ___ fast.','run','runs','running'],['ما معنى الكلمة؟||team','فريق','ملعب','كرة','حَكَم'],['اختر الكلمة المناسبة:||I play tennis ___ Fridays.','on','at','in']]},
 {sem:2,unit:'Unit 15',t:'A Trip',q:[['اختر الكلمة المناسبة:||Last summer we ___ to Lattakia.','went','go','going'],['ما معنى الكلمة؟||beach','الشاطئ','الجبل','الغابة','النهر'],['ما الماضي من الفعل؟||see','saw','seed','seen'],['اختر الكلمة المناسبة:||We ___ a lot of photos.','took','take','takes']]},
 {sem:2,unit:'Unit 16',t:'Food',q:[['ما معنى الكلمة؟||bread','خبز','جبنة','حليب','بيض'],['اختر الكلمة المناسبة:||Would you like ___ apple?','an','a','the'],['اختر الكلمة المناسبة:||What would you like to ___?','drink','drinks','drank'],['أيّ هذه فاكهة؟','orange','carrot','potato','onion']]},
 {sem:2,unit:'Unit 17',t:'Shopping',q:[['اختر السؤال المناسب:||It’s 200 pounds.','How much is the pen?','Where is the pen?','What colour is the pen?','Who is the pen?'],['ما معنى الكلمة؟||cheap','رخيص','غالٍ','كبير','جديد'],['اختر الكلمة المناسبة:||How ___ are these shoes?','much','many','old'],['ما معنى الكلمة؟||market','السوق','المكتبة','المطار','المستشفى']]},
 {sem:2,unit:'Unit 18',t:'The Weather',q:[['ما معنى الكلمة؟||sunny','مشمس','ماطر','غائم','عاصف'],['اختر الكلمة المناسبة:||It’s ___ today. Take your umbrella.','rainy','sunny','hot'],['ما معنى الكلمة؟||snowy','مثلج','حار','مشمس','جاف'],['اختر الكلمة المناسبة:||What’s the weather ___ today?','like','likes','liking']]},
 {sem:2,unit:'Unit 19',t:'Animals',q:[['أيّ حيوان يعيش في البحر؟','dolphin','camel','lion','rabbit'],['اختر الكلمة المناسبة:||An elephant is ___ than a cat.','bigger','big','biggest'],['اختر الكلمة المناسبة:||The giraffe is the ___ animal.','tallest','taller','tall'],['ما معنى الكلمة؟||wild','بري','أليف','صغير','سريع']]},
 {sem:2,unit:'Unit 20',t:'Transportation',q:[['ما معنى الكلمة؟||train','قطار','طائرة','سفينة','دراجة'],['اختر الكلمة المناسبة:||I go to school ___ bus.','by','on','in'],['أيّ هذه يطير؟','plane','car','ship','bus'],['اختر الكلمة المناسبة:||Which is the ___ mountain?','highest','high','higher']]}
];
CUR[5] = CUR[5] || {};
CUR[5].en = [
 {sem:1,unit:'Unit 1',t:'At School',q:[['ما معنى الكلمة؟||classroom','الصف','الملعب','المكتبة','المطعم'],['اختر الكلمة المناسبة:||There ___ twenty students in my class.','are','is','am'],['ما معنى الكلمة؟||library','المكتبة','المختبر','الملعب','المكتب'],['اختر الكلمة المناسبة:||Our teacher ___ kind.','is','are','am']]},
 {sem:1,unit:'Unit 2',t:'Family',q:[['ما معنى الكلمة؟||cousin','ابن العم أو الخال','الأخ','العم','الجد'],['اختر الكلمة المناسبة:||My sister ___ two children.','has','have','having'],['اختر الكلمة المناسبة:||This is ___ father. (أنا)','my','your','his'],['ما معنى الكلمة؟||aunt','العمة أو الخالة','الجدة','الأخت','الأم']]},
 {sem:1,unit:'Unit 3',t:'Daily Routines',q:[['اختر الكلمة المناسبة:||She ___ breakfast at seven.','has','have','having'],['اختر الكلمة المناسبة:||I ___ go to bed late.','never','yesterday','tomorrow'],['ما معنى الكلمة؟||usually','عادةً','أبداً','أمس','غداً'],['اختر الكلمة المناسبة:||He ___ to school by bus.','goes','go','going']]},
 {sem:1,unit:'Unit 4',t:'The Five Senses',q:[['نسمع بـ:','ears','eyes','nose','hands'],['نشمّ بـ:','nose','ears','mouth','feet'],['ما معنى الكلمة؟||taste','تذوق','لمس','سمع','بصر'],['اختر الكلمة المناسبة:||The flower ___ nice.','smells','hears','sees']]},
 {sem:1,unit:'Unit 5',t:'Clothes',q:[['ما معنى الكلمة؟||trousers','بنطال','قميص','حذاء','قبعة'],['اختر الكلمة المناسبة:||She is ___ a blue dress.','wearing','wear','wears'],['ما معنى الكلمة؟||scarf','وشاح','قفاز','جورب','حزام'],['اختر الكلمة المناسبة:||These shoes ___ new.','are','is','am']]},
 {sem:1,unit:'Unit 6',t:'Healthy Lifestyle',q:[['اختر العادة الصحية:','Do exercise every day.','Watch TV all day.','Eat a lot of sweets.','Skip breakfast.'],['اختر الكلمة المناسبة:||You ___ eat too much sugar.','shouldn’t','should','must'],['ما معنى الكلمة؟||exercise','تمارين رياضية','نوم','طعام','مرض'],['اختر الكلمة المناسبة:||Fruit is good ___ you.','for','to','at']]},
 {sem:1,unit:'Unit 7',t:'Hobbies',q:[['اختر الكلمة المناسبة:||I enjoy ___ stamps.','collecting','collect','collects'],['ما معنى الكلمة؟||painting','الرسم بالألوان','الطبخ','الكتابة','السباحة'],['اختر الكلمة المناسبة:||What do you do in your free ___?','time','day','game'],['اختر الكلمة المناسبة:||She is good ___ singing.','at','in','on']]},
 {sem:1,unit:'Unit 8',t:'Inventions',q:[['ما معنى الكلمة؟||invent','يخترع','يكتب','يرسم','يبني'],['اختر الكلمة المناسبة:||Graham Bell ___ the telephone.','invented','invents','invent'],['ما الماضي من الفعل؟||make','made','maked','makes'],['ما معنى الكلمة؟||light bulb','المصباح الكهربائي','الهاتف','الحاسوب','الراديو']]},
 {sem:1,unit:'Unit 9',t:'Music',q:[['ما معنى الكلمة؟||guitar','غيتار','طبل','بيانو','ناي'],['اختر الكلمة المناسبة:||He can ___ the piano.','play','plays','playing'],['ما معنى الكلمة؟||song','أغنية','قصة','رقصة','لعبة'],['اختر الكلمة المناسبة:||I like ___ to music.','listening','listen','listens']]},
 {sem:1,unit:'Unit 10',t:'Technology',q:[['ما معنى الكلمة؟||tablet','جهاز لوحي','طاولة','قلم','كتاب'],['اختر الكلمة المناسبة:||I ___ the internet to do my homework.','use','uses','using'],['ما معنى الكلمة؟||charger','الشاحن','الهاتف','الشاشة','السماعة'],['اختر الكلمة المناسبة:||Don’t use your phone ___ long.','too','to','two']]},
 {sem:2,unit:'Unit 11',t:'Nature',q:[['ما معنى الكلمة؟||forest','غابة','صحراء','بحر','مدينة'],['ما معنى الكلمة؟||river','نهر','جبل','بحيرة','وادٍ'],['اختر الكلمة المناسبة:||We must ___ the trees.','protect','cut','burn'],['ما معنى الكلمة؟||desert','صحراء','غابة','حديقة','شاطئ']]},
 {sem:2,unit:'Unit 12',t:'Jobs',q:[['من يعمل في المستشفى ويساعد الطبيب؟','nurse','farmer','pilot','baker'],['من يقود الطائرة؟','pilot','driver','chef','vet'],['ما معنى الكلمة؟||vet','طبيب بيطري','مهندس','صيدلاني','نجار'],['اختر الكلمة المناسبة:||A chef ___ food.','cooks','teaches','flies']]},
 {sem:2,unit:'Unit 13',t:'Houses',q:[['ما معنى الكلمة؟||roof','سقف','باب','نافذة','درج'],['اختر الكلمة المناسبة:||There is a sofa ___ the living room.','in','on','at'],['ما معنى الكلمة؟||stairs','الدرج','الجدار','الأرض','السقف'],['اختر الكلمة المناسبة:||My house is ___ than yours.','bigger','big','biggest']]},
 {sem:2,unit:'Unit 14',t:'At the Sports Centre',q:[['ما معنى الكلمة؟||swimming pool','مسبح','ملعب','نادٍ','حديقة'],['اختر الكلمة المناسبة:||I go to the sports centre ___ Saturday.','on','in','at'],['ما معنى الكلمة؟||coach','المدرّب','اللاعب','الحَكَم','المشجّع'],['اختر الكلمة المناسبة:||They ___ playing volleyball now.','are','is','am']]},
 {sem:2,unit:'Unit 15',t:'Sports Equipment',q:[['ما معنى الكلمة؟||racket','مضرب','كرة','شبكة','قفاز'],['نلعب التنس بـ:','racket and ball','bat and stick','net and goal','helmet only'],['ما معنى الكلمة؟||helmet','خوذة','حذاء','قبعة','نظارة'],['اختر الكلمة المناسبة:||You need a ___ to play football.','ball','pen','book']]},
 {sem:2,unit:'Unit 16',t:'Food and Drinks',q:[['اختر الكلمة المناسبة:||How ___ milk do you want?','much','many','old'],['اختر الكلمة المناسبة:||How ___ carrots did she cut?','many','much','old'],['ما معنى الكلمة؟||butter','زبدة','جبنة','عسل','زيت'],['اختر الكلمة المناسبة:||There isn’t ___ juice in the bottle.','any','some','many']]},
 {sem:2,unit:'Unit 17',t:'Farming',q:[['ما معنى الكلمة؟||farmer','فلاح','طبيب','بائع','سائق'],['ما معنى الكلمة؟||crops','المحاصيل','الأبقار','الآلات','الأمطار'],['اختر الكلمة المناسبة:||The farmer ___ wheat in autumn.','plants','eats','drinks'],['ما معنى الكلمة؟||tractor','جرّار زراعي','سيارة','قطار','دراجة']]},
 {sem:2,unit:'Unit 18',t:'At the Airport',q:[['ما معنى الكلمة؟||passport','جواز سفر','حقيبة','تذكرة','طائرة'],['ما معنى الكلمة؟||ticket','تذكرة','حقيبة','بوابة','مقعد'],['اختر الكلمة المناسبة:||The plane will ___ at five o’clock.','take off','take on','take in'],['ما معنى الكلمة؟||suitcase','حقيبة سفر','حقيبة مدرسة','محفظة','صندوق']]},
 {sem:2,unit:'Unit 19',t:'Festivals',q:[['ما معنى الكلمة؟||celebrate','يحتفل','يسافر','ينام','يدرس'],['اختر الكلمة المناسبة:||We visit our relatives ___ Eid.','at','on','in'],['ما معنى الكلمة؟||gift','هدية','حلوى','بالون','رسالة'],['اختر الكلمة المناسبة:||My grandmother ___ delicious cakes yesterday.','baked','bakes','bake']]},
 {sem:2,unit:'Unit 20',t:'Places Around the World',q:[['ما معنى الكلمة؟||island','جزيرة','جبل','نهر','مدينة'],['أرواد جزيرة سورية تقع قرب مدينة:','Tartous','Aleppo','Homs','Daraa'],['اختر الكلمة المناسبة:||Arwad is ___ island in Syria.','an','a','the'],['ما معنى الكلمة؟||famous','مشهور','صغير','قديم','جميل']]}
];
CUR[6] = CUR[6] || {};
CUR[6].en = [
 {sem:1,unit:'Unit 1',t:'Countries',q:[['اختر الكلمة المناسبة:||He is from Egypt. He is ___.','Egyptian','Egypt','Egyptians'],['ما عاصمة سوريا؟','Damascus','Aleppo','Cairo','Amman'],['ما معنى الكلمة؟||capital','عاصمة','دولة','قرية','لغة'],['اختر الكلمة المناسبة:||People in Syria speak ___.','Arabic','Syrian','English']]},
 {sem:1,unit:'Unit 2',t:'At the Theatre',q:[['ما معنى الكلمة؟||stage','خشبة المسرح','التذكرة','الجمهور','الستارة'],['اختر الكلمة المناسبة:||Where is your ___, please?','ticket','tickets','tick'],['ما معنى الكلمة؟||audience','الجمهور','الممثل','المخرج','المسرح'],['ما معنى الكلمة؟||actor','ممثل','كاتب','مغنٍّ','رسام']]},
 {sem:1,unit:'Unit 3',t:'The Big Blue',q:[['ما معنى الكلمة؟||ocean','المحيط','النهر','البحيرة','البئر'],['أكبر حيوان في البحر:','blue whale','shark','octopus','crab'],['ما معنى الكلمة؟||shell','صدفة','سمكة','موجة','رمل'],['اختر الكلمة المناسبة:||Fish ___ in water.','live','lives','living']]},
 {sem:1,unit:'Unit 4',t:'Arts',q:[['ما معنى الكلمة؟||painter','رسّام','نحّات','ممثل','موسيقي'],['اختر الكلمة المناسبة:||Is Sally ___ the museum?','visiting','visit','visits'],['ما معنى الكلمة؟||museum','متحف','مسرح','ملعب','سوق'],['ما معنى الكلمة؟||statue','تمثال','لوحة','صورة','قصيدة']]},
 {sem:1,unit:'Unit 5',t:'What’s on TV',q:[['ما معنى الكلمة؟||cartoon','رسوم متحركة','أخبار','فيلم وثائقي','مسلسل'],['اختر الكلمة المناسبة:||Is Leen ___ the script of a new film?','writing','write','writes'],['ما معنى الكلمة؟||news','الأخبار','الطقس','الرياضة','الإعلان'],['ما معنى الكلمة؟||channel','قناة','برنامج','شاشة','جهاز']]},
 {sem:1,unit:'Unit 6',t:'At the Hospital',q:[['اختر الكلمة المناسبة:||___ he have an injection?','Did','Does','Is'],['ما معنى الكلمة؟||injection','إبرة (حقنة)','دواء شراب','ضمادة','سرير'],['اختر الكلمة المناسبة:||Did she ___ in bed?','stay','stayed','stays'],['ما معنى الكلمة؟||nurse','ممرضة','طبيبة أسنان','صيدلانية','مريضة']]},
 {sem:1,unit:'Unit 7',t:'Free Time',q:[['ما معنى العبارة؟||free time','وقت الفراغ','وقت المدرسة','وقت النوم','وقت الطعام'],['اختر الكلمة المناسبة:||I often ___ chess with my dad.','play','plays','played'],['ما معنى الكلمة؟||hiking','المشي في الطبيعة','السباحة','التسوق','الطبخ'],['اختر الكلمة المناسبة:||How often ___ you go swimming?','do','does','are']]},
 {sem:1,unit:'Unit 8',t:'Appearance',q:[['ما معنى الكلمة؟||curly','مجعّد','ناعم','قصير','أسود'],['اختر الكلمة المناسبة:||She has ___ brown hair.','long','tall','fat'],['ما معنى الكلمة؟||beard','لحية','شارب','حاجب','رمش'],['اختر الكلمة المناسبة:||What does he look ___?','like','likes','at']]},
 {sem:1,unit:'Unit 9',t:'Farming',q:[['ما معنى الكلمة؟||harvest','الحصاد','الزراعة','السقاية','الحراثة'],['ما معنى الكلمة؟||cow','بقرة','ماعز','حصان','خروف'],['اختر الكلمة المناسبة:||Bees make ___.','honey','milk','eggs'],['ما معنى الكلمة؟||field','حقل','بيت','سوق','نهر']]},
 {sem:1,unit:'Unit 10',t:'Recycling and Reusing',q:[['ما معنى الكلمة؟||recycle','يعيد التدوير','يرمي','يحرق','يشتري'],['اختر الكلمة المناسبة:||Is there ___ water in the bucket?','any','many','a'],['ما معنى الكلمة؟||plastic','بلاستيك','زجاج','ورق','خشب'],['اختر الكلمة المناسبة:||We should ___ old bottles.','reuse','waste','break']]},
 {sem:2,unit:'Unit 11',t:'Tasty Food',q:[['اختر الكلمة المناسبة:||Have you grated the cheese ___?','yet','already','ago'],['ما معنى الكلمة؟||delicious','لذيذ','مالح','حار','بارد'],['اختر الكلمة المناسبة:||Has he ___ his email yet?','checked','check','checks'],['ما معنى الكلمة؟||recipe','وصفة طبخ','قائمة طعام','مطبخ','صحن']]},
 {sem:2,unit:'Unit 12',t:'Shopping Around the World',q:[['ما معنى الكلمة؟||customer','زبون','بائع','محاسب','مدير'],['ما معنى الكلمة؟||price','سعر','نقود','فاتورة','خصم'],['اختر الكلمة المناسبة:||This bag is ___ expensive than that one.','more','most','much'],['ما معنى الكلمة؟||sale','تنزيلات','شراء','بيع بالجملة','هدية']]},
 {sem:2,unit:'Unit 13',t:'Feelings',q:[['ما معنى الكلمة؟||angry','غاضب','سعيد','حزين','خائف'],['ما معنى الكلمة؟||proud','فخور','متعب','خجول','ملول'],['اختر الكلمة المناسبة:||She is ___ because she lost her pen.','sad','happy','excited'],['ما معنى الكلمة؟||scared','خائف','سعيد','جائع','نشيط']]},
 {sem:2,unit:'Unit 14',t:'Natural Resources',q:[['ما معنى الكلمة؟||oil','نفط','ماء','هواء','رمل'],['مصدر طاقة متجدد:','sun','oil','coal','gas'],['اختر الكلمة المناسبة:||We must ___ water.','save','waste','sell'],['ما معنى الكلمة؟||wind','الرياح','المطر','الثلج','الغيوم']]},
 {sem:2,unit:'Unit 15',t:'I Know my Rights',q:[['ما معنى الكلمة؟||right','حق','واجب','قانون','مدرسة'],['اختر الكلمة المناسبة:||He ___ look around before he crosses the street.','must','mustn’t','can’t'],['ما معنى الكلمة؟||education','التعليم','الصحة','اللعب','العمل'],['اختر الكلمة المناسبة:||Every child has the right ___ play.','to','for','at']]},
 {sem:2,unit:'Unit 16',t:'Parties',q:[['اختر الكلمة المناسبة:||Reem ___ lighting the candles yesterday.','was','were','is'],['ما معنى الكلمة؟||invitation','دعوة','هدية','كعكة','بالون'],['اختر الكلمة المناسبة:||They ___ dancing when I arrived.','were','was','are'],['ما معنى الكلمة؟||candles','شموع','زهور','أضواء','بالونات']]},
 {sem:2,unit:'Unit 17',t:'Maths',q:[['ما معنى الكلمة؟||add','اجمع','اطرح','اضرب','اقسم'],['كيف نقرأ 100 بالإنكليزي؟','one hundred','one thousand','ten','one million'],['ما معنى الكلمة؟||divide','اقسم','اجمع','اضرب','ارسم'],['اختر الجواب:||Ten minus four equals ___.','six','fourteen','four','forty']]},
 {sem:2,unit:'Unit 18',t:'Technology',q:[['ما معنى الكلمة؟||download','ينزّل (تحميل)','يطبع','يحذف','يشحن'],['ما معنى الكلمة؟||password','كلمة السر','اسم المستخدم','رسالة','موقع'],['اختر الكلمة المناسبة:||Robots ___ help people in the future.','will','was','did'],['ما معنى الكلمة؟||website','موقع إلكتروني','بريد','تطبيق','شاشة']]},
 {sem:2,unit:'Unit 19',t:'Holidays',q:[['ما معنى الكلمة؟||holiday','عطلة','مدرسة','واجب','امتحان'],['اختر الكلمة المناسبة:||Next summer I am going ___ visit my uncle.','to','for','at'],['ما معنى الكلمة؟||abroad','خارج البلاد','في البيت','في المدرسة','في الحديقة'],['ما الماضي من الفعل؟||fly','flew','flied','flown']]},
 {sem:2,unit:'Unit 20',t:'Review',q:[['ما الماضي من الفعل؟||write','wrote','writed','written'],['اختر الكلمة المناسبة:||She ___ already finished.','has','have','is'],['اختر الكلمة المناسبة:||If it rains, we ___ stay home.','will','would','did'],['اختر الكلمة المناسبة:||This is the ___ book I have ever read.','best','good','better']]}
];

})();
(function(){
/* الصف الأول والثاني: العربية لغتي (الفصل الثاني) — من فهرس كتاب ٢٠٢٥–٢٠٢٦ */
function letterQ(letters, words) {
  // سؤال: أيّ كلمة فيها الحرف؟ / بأيّ حرف تبدأ؟
  const out = [];
  words.forEach(w => {
    const l = letters.find(x => w[0].includes(x)) || letters[0];
    out.push([`بأيّ حرف تبدأ كلمة «${w[0]}»؟ ${w[1] || ''}`, w[0][0], ...['ب', 'م', 'ن', 'ر', 'س', 'ل', 'ك', 'د'].filter(x => x !== w[0][0]).slice(0, 3)]);
  });
  letters.forEach(l => {
    const has = words.filter(w => w[0].includes(l)).map(w => w[0]);
    if (has.length) out.push([`أيّ كلمة فيها حرف «${l}»؟`, has[0], ...['بيت', 'قلم', 'وردة', 'نمر', 'مدرسة', 'كتاب'].filter(x => !x.includes(l)).slice(0, 3)]);
  });
  return out;
}
CUR[1] = CUR[1] || {};
CUR[1].ar = (CUR[1].ar || []).concat([
 {sem:2,unit:'البيئة',t:'الشجرة (ط - ظ)',q:letterQ(['ط','ظ'],[['طائرة','✈️'],['ظرف','✉️'],['بطة','🦆'],['ظل','🌳']]).concat([['الحرف الأول في «طبل» هو:','ط','ظ','ت','د'],['الشجرة تعطينا:','الثمار والظل','الحليب','البيض','الصوف']])},
 {sem:2,unit:'البيئة',t:'العصفورة (ص - ض)',q:letterQ(['ص','ض'],[['صقر','🦅'],['ضفدع','🐸'],['صابون','🧼'],['بيض','🥚']]).concat([['العصفورة تبني:','عشّاً','بيتاً من حجر','نفقاً'],['الحرف الأول في «ضوء» هو:','ض','ص','د','ظ']])},
 {sem:2,unit:'البيئة',t:'صديقتي المياه (ث)',q:letterQ(['ث'],[['ثعلب','🦊'],['ثوم','🧄'],['ثلج','❄️']]).concat([['نحافظ على الماء بأن:','نغلق الصنبور بعد الاستعمال','نترك الصنبور مفتوحاً','نرمي فيه النفايات'],['الحرف الأول في «ثمار» هو:','ث','ت','س','ش']])},
 {sem:2,unit:'البيئة',t:'الشتاء (ح - خ)',q:letterQ(['ح','خ'],[['حصان','🐴'],['خروف','🐑'],['حليب','🥛'],['خبز','🍞']]).concat([['في الشتاء نلبس:','الملابس الصوفية','ملابس السباحة','القبعة الصيفية فقط'],['يتساقط في الشتاء:','المطر والثلج','أوراق الربيع','الثمار']])},
 {sem:2,unit:'الصحة والتوعية',t:'أنظّف مدرستي (ة)',q:[['أيّ كلمة تنتهي بتاء مربوطة؟','مدرسة','كتاب','قلم','باب'],['أيّ كلمة تنتهي بتاء مربوطة؟','وردة','شمس','بيت','نور'],['أضع الورق المهمل في:','سلة المهملات','الأرض','الدرج'],['التاء المربوطة نكتبها في آخر:','الكلمة','أول الكلمة','وسط الكلمة']]},
 {sem:2,unit:'الصحة والتوعية',t:'صحة الأسنان (ء)',q:[['أيّ كلمة فيها همزة؟','سماء','بيت','قلم','وردة'],['أنظّف أسناني:','صباحاً ومساءً','مرة في الشهر','لا أنظفها'],['من الأطعمة التي تضر الأسنان:','الحلويات الكثيرة','الجزر','الحليب','التفاح'],['أيّ كلمة فيها همزة؟','ماء','نار','باب','دار']]},
 {sem:2,unit:'الصحة والتوعية',t:'غذائي (المدّ ~)',q:[['أيّ كلمة فيها مدّ (آ)؟','آمنة','أمل','إبرة','أسد'],['الغذاء الصحي:','الخضار والفواكه','الحلوى فقط','المشروبات الغازية'],['أيّ كلمة فيها مدّ؟','قرآن','قرأ','سأل','فأر'],['نشرب كل يوم:','الحليب والماء','العصير الغازي فقط','لا شيء']]},
 {sem:2,unit:'الصحة والتوعية',t:'الحواس الخمس (الشدّة)',q:[['بأيّ عضو نرى؟','العين','الأذن','الأنف','اليد'],['بأيّ عضو نسمع؟','الأذن','العين','اللسان','اليد'],['أيّ كلمة فيها شدّة؟','مُعلّم','كتاب','بيت','قلم'],['بأيّ عضو نتذوّق الطعام؟','اللسان','الأنف','الأذن','العين'],['بأيّ عضو نشمّ الوردة؟','الأنف','الأذن','اليد','العين']]},
 {sem:2,unit:'قيم اجتماعية',t:'في قلبي',q:[['أحبّ أمي وأبي لأنهما:','يرعيانني ويحبانني','يعطيانني الحلوى فقط','لا شيء'],['أطيع والديّ و:','أساعدهما','أغضب منهما','أصرخ عليهما'],['جمع «قلب»:','قلوب','قلبان','قالب'],['مفرد «أصدقاء»:','صديق','صدق','صديقة']]},
 {sem:2,unit:'قيم اجتماعية',t:'التعاون',q:[['التعاون يعني:','أن نعمل معاً ونساعد بعضنا','أن يعمل كل واحد وحده','أن نتشاجر'],['أساعد زميلي إذا:','احتاج للمساعدة','كان يلعب','كان نائماً'],['عكس «قوي»:','ضعيف','كبير','سريع'],['«يدٌ واحدة لا تصفّق» معناها:','نحتاج للتعاون','اليد ضعيفة','لا نصفّق']]},
 {sem:2,unit:'قيم اجتماعية',t:'العازفة الصغيرة',q:[['العازفة تعزف على:','آلة موسيقية','الكرة','الورق'],['من الآلات الموسيقية:','العود','الكرسي','القلم','الصحن'],['عكس «صغيرة»:','كبيرة','قصيرة','جميلة'],['جمع «آلة»:','آلات','آلون','أوائل']]},
 {sem:2,unit:'قيم اجتماعية',t:'صانعو السعادة',q:[['أصنع السعادة عندما:','أساعد الآخرين وأبتسم لهم','أحزن الآخرين','أبكي'],['عكس «سعيد»:','حزين','فرحان','نشيط'],['الابتسامة في وجه أخيك:','صدقة','عيب','كسل'],['جمع «طفل»:','أطفال','طفلون','طفلات']]}
]);
CUR[2] = CUR[2] || {};
CUR[2].ar = (CUR[2].ar || []).concat([
 {sem:2,unit:'الوحدة الرابعة: البيئة',t:'العاشق الصغير',q:[['«العاشق الصغير» يحبّ:','الطبيعة وبلده','النوم','اللعب فقط'],['عكس «صغير»:','كبير','قصير','قليل'],['جمع «زهرة»:','زهرات أو أزهار','زهرون','زهار'],['أيّ كلمة فيها «ال» شمسية (لا تُلفظ اللام)؟','الشمس','القمر','الكتاب','البيت']]},
 {sem:2,unit:'الوحدة الرابعة: البيئة',t:'تتكيّف لتعيش',q:[['الجمل يعيش في:','الصحراء','القطب','البحر'],['يغطي جسم الدب القطبي:','فرو كثيف','ريش','حراشف'],['معنى «تتكيّف»:','تتأقلم مع المكان','تهرب','تنام'],['أيّ كلمة فيها «ال» قمرية (تُلفظ اللام)؟','القمر','الشمس','النهر','السماء']]},
 {sem:2,unit:'الوحدة الرابعة: البيئة',t:'الفلّاح',q:[['الفلّاح يعمل في:','الحقل','المستشفى','المدرسة'],['يزرع الفلاح:','القمح والخضار','الحديد','البلاستيك'],['جمع «فلّاح»:','فلّاحون','فلّحات','أفلاح'],['عكس «يزرع»:','يحصد','يسقي','يحرث']]},
 {sem:2,unit:'الوحدة الرابعة: البيئة',t:'نزهة في الطبيعة',q:[['في النزهة نحافظ على المكان بأن:','نجمع النفايات','نكسر الأغصان','نترك النار مشتعلة'],['«ذهبنا إلى النهرِ» حرف الجرّ:','إلى','ذهبنا','النهر'],['معنى «نزهة»:','رحلة للمتعة','درس','عمل'],['أيّ كلمة تنتهي بتاء مربوطة؟','نزهة','بيت','شجر','نهر']]},
 {sem:2,unit:'الوحدة الخامسة: هوايات واهتمامات',t:'خير جليس',q:[['«خير جليس في الزمان»:','كتاب','هاتف','تلفاز'],['نحافظ على الكتاب بأن:','نغلّفه ولا نمزّقه','نرسم عليه','نرميه'],['جمع «كتاب»:','كتب','كتابات فقط','كاتبون'],['المكتبة مكان:','للقراءة والكتب','للطعام','للعب الكرة']]},
 {sem:2,unit:'الوحدة الخامسة: هوايات واهتمامات',t:'هذي لغتي',q:[['لغتنا هي:','اللغة العربية','اللغة الإنكليزية','اللغة الفرنسية'],['عدد حروف اللغة العربية:','٢٨','٢٦','٣٠','٢٠'],['«هذه لغتي» كلمة «هذه»:','اسم إشارة للمؤنث','اسم إشارة للمذكر','فعل'],['اسم الإشارة للمذكر القريب:','هذا','هذه','هؤلاء','تلك']]},
 {sem:2,unit:'الوحدة الخامسة: هوايات واهتمامات',t:'المكتشفة الصغيرة',q:[['المكتشف يحب:','الملاحظة والسؤال','النوم','الكسل'],['اخترع توماس أديسون:','المصباح الكهربائي','الطائرة','الهاتف المحمول'],['معنى «الملاحظة»:','النظر والمشاهدة بانتباه','النسيان','الركض'],['عكس «تعلّم»:','جهل','قرأ','فهم']]},
 {sem:2,unit:'الوحدة الخامسة: هوايات واهتمامات',t:'هوايات متعدّدة',q:[['من الهوايات المفيدة:','الرسم والقراءة والرياضة','السهر الطويل','إزعاج الآخرين'],['جمع «هواية»:','هوايات','هوايون','أهوية'],['«أنا أحبّ الرسمَ» الضمير المنفصل:','أنا','أحبّ','الرسم'],['اسم الإشارة للجمع:','هؤلاء','هذا','هذه','ذلك']]},
 {sem:2,unit:'الوحدة السادسة: قيم اجتماعية',t:'العدد صفر',q:[['الصفر وحده قيمته:','لا شيء','عشرة','واحد'],['إذا وضعنا صفراً على يمين ١ صار:','١٠','١','٠١','١٠٠'],['اخترع العرب والمسلمون استعمال:','الصفر','الحاسوب','الهاتف'],['عكس «كثير»:','قليل','كبير','طويل']]},
 {sem:2,unit:'الوحدة السادسة: قيم اجتماعية',t:'وتبقى نبضة الحب',q:[['الحبّ بين الناس يجعلهم:','متعاونين وسعداء','متخاصمين','حزانى'],['معنى «نبضة»:','دقة القلب','ضربة الكرة','صوت الرعد'],['جمع «قلب»:','قلوب','قلبات','أقلاب'],['عكس «يحبّ»:','يكره','يساعد','يبتسم']]},
 {sem:2,unit:'الوحدة السادسة: قيم اجتماعية',t:'عطاء بلا حدود',q:[['العطاء يعني:','أن نقدّم الخير للآخرين','أن نأخذ فقط','أن نبخل'],['من صور العطاء:','مساعدة المحتاج','الأنانية','الغضب'],['عكس «يعطي»:','يأخذ','يمنح','يهدي'],['الأم مثال على:','العطاء','البخل','الكسل']]},
 {sem:2,unit:'الوحدة السادسة: قيم اجتماعية',t:'اليد الواحدة لا تصفّق',q:[['معنى المثل:','التعاون يحقق النجاح','اليد ضعيفة','لا تصفق أبداً'],['عكس «تعاون»:','تخاصم','تفاهم','مساعدة'],['«العملُ الجماعيُّ مفيدٌ» نوع الجملة:','اسمية','فعلية'],['نتعاون في:','تنظيف الصف وترتيبه','الشجار','الغش']]}
]);

})();
(function(){
/* الصف الرابع: العربية لغتي (الفصلان) + العلوم (الفصل الثاني) — من فهارس كتب ٢٠٢٥–٢٠٢٦ */
CUR[4] = CUR[4] || {};
CUR[4].ar = [
 {sem:1,unit:'الوحدة الأولى: الطبيعة',t:'عاد الربيع',q:[
  ['«ذهبتُ إلى الحديقةِ»\nما الاسم المجرور؟','الحديقةِ','ذهبتُ','إلى'],
  ['حرف الجرّ في جملة «الطيورُ على الشجرةِ» هو:','على','الطيور','الشجرة'],
  ['حركة آخر الاسم المجرور غالباً:','الكسرة','الفتحة','الضمة','السكون'],
  ['الفصل الذي يأتي بعد الشتاء:','الربيع','الصيف','الخريف'],
  ['من علامات الربيع:','تفتّح الأزهار','تساقط الثلج','تساقط أوراق الشجر','قصر النهار']]},
 {sem:1,unit:'الوحدة الأولى: الطبيعة',t:'البحر ينادينا',q:[
  ['«لن أتأخرَ عن المدرسة»\nحرف النصب هو:','لن','أتأخر','عن'],
  ['أحرف النصب التي تعلمناها:','أن، لن، كي','في، من، على','لم، لا، لام الأمر','إنّ، كأنّ، ليت'],
  ['«جئتُ كي أتعلمَ» الفعل المنصوب هو:','أتعلمَ','جئتُ','كي'],
  ['علامة نصب الفعل المضارع في «لن يسبحَ»:','الفتحة','الضمة','الكسرة','السكون'],
  ['معنى «الشاطئ»:','حافة البحر','عمق البحر','سفينة صغيرة','موجة كبيرة']]},
 {sem:1,unit:'الوحدة الأولى: الطبيعة',t:'رئة الأرض',q:[
  ['سُمّيت الغابات «رئة الأرض» لأنها:','تنتج الأكسجين وتنقّي الهواء','تنتج الماء','تحمي من البرد','تصنع التربة'],
  ['واجبنا نحو الغابات:','نحميها من الحرائق والقطع','نقطع أشجارها','نرمي النفايات فيها','نشعل النار فيها'],
  ['جمع كلمة «شجرة»:','أشجار','شجرون','شجرات فقط','مشاجر'],
  ['«تتنفسُ الأشجارُ في الغابةِ» ما الاسم المجرور؟','الغابةِ','الأشجارُ','تتنفسُ']]},
 {sem:1,unit:'الوحدة الثانية: الصحة والتوعية',t:'كرة القدم',q:[
  ['الرياضة تفيد الجسم لأنها:','تقوّي العضلات والقلب','تُتعب الجسم بلا فائدة','تسبب المرض','تُضعف العظام'],
  ['«يلعبُ الفريقُ بروحٍ رياضيةٍ» الفاعل هو:','الفريقُ','يلعبُ','روحٍ'],
  ['معنى «الحَكَم» في المباراة:','الذي يطبّق قوانين اللعبة','اللاعب الهدّاف','المشجّع','حارس المرمى'],
  ['«أريدُ أنْ ألعبَ» حرف النصب:','أنْ','أريد','ألعب']]},
 {sem:1,unit:'الوحدة الثانية: الصحة والتوعية',t:'سوف أبدو وردة',q:[
  ['الهمزة في كلمة «أغسلُ» هي:','همزة قطع','همزة وصل','همزة متوسطة','همزة متطرفة'],
  ['همزة القطع:','تُلفظ وتُكتب','تُكتب ولا تُلفظ','لا تُكتب أبداً','تُلفظ ولا تُكتب'],
  ['أيّ كلمة تبدأ بهمزة قطع؟','إلى','استمع','انطلق','ابن'],
  ['من عادات النظافة الشخصية:','غسل اليدين والوجه','النوم دون تنظيف الأسنان','ترك الأظافر طويلة','لبس الملابس المتسخة']]},
 {sem:1,unit:'الوحدة الثانية: الصحة والتوعية',t:'أطفال بين الواقع والخيال',q:[
  ['«الباحةُ واسعةٌ» نوع الجملة:','جملة اسمية','جملة فعلية','شبه جملة'],
  ['الجملة الاسمية تبدأ بـ:','اسم','فعل','حرف'],
  ['أيّ جملة اسمية؟','الشمسُ مشرقةٌ','أشرقت الشمسُ','تشرق الشمسُ'],
  ['«الخيال» معناه:','تصوّر أشياء غير موجودة في الواقع','الحقيقة','النوم','الكذب']]},
 {sem:1,unit:'الوحدة الثالثة: دنيا العلوم',t:'مملكة النحل',q:[
  ['كلمة «زهرات» جمع:','جمع مؤنث سالم','جمع مذكر سالم','جمع تكسير','مثنى'],
  ['جمع المؤنث السالم ينتهي بـ:','ألف وتاء','واو ونون','ياء ونون','ألف ونون'],
  ['يصنع النحل:','العسل','الحليب','الحرير','الصوف'],
  ['ملكة النحل وظيفتها:','وضع البيض','جمع الرحيق','حراسة الخلية فقط','صنع الشمع فقط'],
  ['جمع «نحلة» جمع مؤنث سالماً:','نحلات','نحول','نواحل','نحلين']]},
 {sem:1,unit:'الوحدة الثالثة: دنيا العلوم',t:'الباخرة',q:[
  ['«متى تصل الباخرة؟» اسم الاستفهام:','متى','تصل','الباخرة'],
  ['نسأل عن المكان بـ:','أين','متى','كم','مَن'],
  ['نسأل عن العدد بـ:','كم','أين','ماذا','متى'],
  ['نسأل عن العاقل (الإنسان) بـ:','مَن','ماذا','كم','أين'],
  ['الباخرة وسيلة نقل:','بحرية','برية','جوية']]},
 {sem:1,unit:'الوحدة الثالثة: دنيا العلوم',t:'الساعة البيولوجية',q:[
  ['الجملة التي تبدأ بأداة استفهام تسمى:','أسلوب استفهام','أسلوب نداء','أسلوب تعجب','أسلوب أمر'],
  ['أيّها أسلوب استفهام؟','كيف حالك؟','ما أجملَ السماءَ!','يا أحمدُ','اكتب درسك'],
  ['الساعة البيولوجية تنظّم:','مواعيد نومنا واستيقاظنا','وقت المدرسة','حركة الشمس','ساعات العمل'],
  ['العلامة التي توضع بعد جملة الاستفهام:','؟','!','.','،']]},
 {sem:2,unit:'الوحدة الرابعة: المواطنة والانتماء',t:'مدينة الياسمين',q:[
  ['تُلقّب دمشق بـ:','مدينة الياسمين','مدينة الشهباء','عروس البحر','أم الحجارة السود'],
  ['«جلستُ تحتَ الشجرة» ظرف المكان:','تحتَ','جلستُ','الشجرة'],
  ['ظرف المكان يدل على:','مكان حدوث الفعل','زمن حدوث الفعل','صاحب الفعل','نوع الفعل'],
  ['أيّها ظرف مكان؟','أمامَ','يومَ','صباحاً','مساءً'],
  ['دمشق من أقدم:','عواصم العالم','قرى الريف','موانئ البحر','صحارى العرب']]},
 {sem:2,unit:'الوحدة الرابعة: المواطنة والانتماء',t:'تحية للعالم',q:[
  ['«أنا، نحن، هو» تسمى:','ضمائر منفصلة','أسماء إشارة','حروف جر','أفعالاً'],
  ['الضمير المناسب: «___ طالبان مجتهدان»','هما','هو','هي','هم'],
  ['الضمير للمتكلم المفرد:','أنا','نحن','أنتَ','هو'],
  ['الضمير للمخاطبة المفردة:','أنتِ','أنتَ','أنتم','هي']]},
 {sem:2,unit:'الوحدة الرابعة: المواطنة والانتماء',t:'الصغير يتعلم',q:[
  ['العلم يفيد الإنسان لأنه:','يفتح له طريق النجاح','يضيّع وقته','يجعله كسولاً','لا فائدة منه'],
  ['جمع «معلّم»:','معلمون','معاليم','معلمات فقط','علماء'],
  ['«يتعلّمُ الصغيرُ من الكبيرِ» الاسم المجرور:','الكبيرِ','الصغيرُ','يتعلّمُ'],
  ['«أنتم» ضمير يدل على:','جماعة المخاطبين','المتكلم','الغائب المفرد','المثنى الغائب']]},
 {sem:2,unit:'الوحدة الخامسة: التواصل والتنوّع',t:'الملاحظة',q:[
  ['العالِم الناجح يعتمد على:','الملاحظة الدقيقة والتجربة','الحظ فقط','التخمين','النوم الطويل'],
  ['معنى «لاحظَ»:','نظر بانتباه','نام','ركض','نسي'],
  ['«الملاحظةُ مفيدةٌ» نوع الجملة:','اسمية','فعلية'],
  ['نضع النقطة (.) في:','نهاية الجملة','وسط الكلمة','قبل السؤال','بعد النداء']]},
 {sem:2,unit:'الوحدة الخامسة: التواصل والتنوّع',t:'الشتاء الحكيم',q:[
  ['الجملة التي تبدأ بفعل تسمى:','جملة فعلية','جملة اسمية','شبه جملة'],
  ['«هطلَ المطرُ» نوع الجملة:','فعلية','اسمية'],
  ['«المطرُ غزيرٌ» نوع الجملة:','اسمية','فعلية'],
  ['من فوائد المطر:','يسقي الأرض والزرع','يجفف الأنهار','يحرق النبات','يلوّث الهواء']]},
 {sem:2,unit:'الوحدة الخامسة: التواصل والتنوّع',t:'آراء مختلفة',q:[
  ['«لم يتأخرْ سامرٌ» الفعل المضارع:','مجزوم','مرفوع','منصوب'],
  ['علامة جزم الفعل في «لم يكتبْ»:','السكون','الضمة','الفتحة','الكسرة'],
  ['«ينصتُ الطالبُ» الفعل المضارع:','مرفوع بالضمة','مجزوم بالسكون','منصوب بالفتحة'],
  ['احترام آراء الآخرين يعني:','أن أسمعهم حتى لو خالفوني','أن أسكتهم','أن أغضب منهم','ألا أتكلم معهم']]},
 {sem:2,unit:'الوحدة السادسة: الفنون والتراث',t:'النحّات',q:[
  ['النحّات فنان يصنع:','التماثيل من الحجر والخشب','الألحان','القصائد','الأفلام'],
  ['الهمزة في «استمعَ» همزة:','وصل','قطع'],
  ['همزة الوصل:','تُلفظ في بداية الكلام وتسقط في وسطه','تُلفظ دائماً','تُكتب على الألف دائماً'],
  ['أيّ كلمة تبدأ بهمزة وصل؟','انطلق','أكرم','إلى','أخذ']]},
 {sem:2,unit:'الوحدة السادسة: الفنون والتراث',t:'سوق الأعمال اليدوية',q:[
  ['من الحِرف اليدوية الدمشقية:','صناعة الموزاييك والبروكار','صناعة السيارات','صناعة الحواسيب','صناعة الطائرات'],
  ['معنى «الحِرفي»:','صانع ماهر بيديه','تاجر كبير','مزارع','طبيب'],
  ['«اشتريتُ قطعةً جميلةً» الصفة هي:','جميلةً','اشتريتُ','قطعةً'],
  ['الصفة تتبع الموصوف في:','الإعراب والتذكير والتأنيث','المعنى فقط','الكتابة فقط']]},
 {sem:2,unit:'الوحدة السادسة: الفنون والتراث',t:'قلعة صلخد',q:[
  ['تقع قلعة صلخد في محافظة:','السويداء','حلب','اللاذقية','دير الزور'],
  ['«قلعةٌ خالدةٌ» كلمة «خالدة»:','صفة','فاعل','فعل','حرف'],
  ['القلاع بُنيت قديماً لـ:','الدفاع والحماية','الزراعة','التجارة فقط','الرياضة'],
  ['«مدينةٌ زاهيةٌ» الموصوف هو:','مدينةٌ','زاهيةٌ']]}
];
CUR[4].sci = [
 {sem:2,unit:'الوحدة الرابعة',t:'نبتتي تتغذّى',q:[['يصنع النبات غذاءه في:','الأوراق','الجذور','الأزهار','البذور'],['يحتاج النبات لصنع غذائه:','الماء وضوء الشمس وثنائي أكسيد الكربون','الحليب','التراب فقط','الظلام'],['يمتص الجذر من التربة:','الماء والأملاح','الهواء فقط','الضوء','السكر'],['تسمى عملية صنع النبات لغذائه:','التركيب الضوئي','التنفس','الهضم','التبخر']]},
 {sem:2,unit:'الوحدة الرابعة',t:'طاقة الحياة',q:[['مصدر الطاقة الأساسي لكل الكائنات الحية:','الشمس','القمر','الريح','الماء'],['يحصل الإنسان على الطاقة من:','الغذاء','النوم فقط','الماء فقط','الهواء فقط'],['الحيوان آكل الأعشاب يحصل على طاقته من:','النباتات','الحيوانات الأخرى','الصخور','الشمس مباشرة'],['في السلسلة الغذائية يأتي أولاً:','النبات المنتج','الأسد','الإنسان','النسر']]},
 {sem:2,unit:'الوحدة الرابعة',t:'رحلة المواد',q:[['حالات المادة:','صلبة وسائلة وغازية','صلبة فقط','حارة وباردة','ثقيلة وخفيفة'],['تحوّل الماء من سائل إلى بخار:','التبخر','التجمد','الانصهار','التكاثف'],['تحوّل الجليد إلى ماء:','الانصهار','التبخر','التجمد','التكاثف'],['تحوّل بخار الماء إلى قطرات:','التكاثف','التبخر','الانصهار','الاحتراق']]},
 {sem:2,unit:'الوحدة الرابعة',t:'التغيّرات الفيزيائية',q:[['أيّها تغيّر فيزيائي؟','تقطيع الورق','احتراق الخشب','صدأ الحديد','تعفّن الخبز'],['في التغيّر الفيزيائي:','لا تتكون مادة جديدة','تتكون مادة جديدة دائماً','تختفي المادة','يتغير اللون دائماً'],['ذوبان السكر في الماء تغيّر:','فيزيائي','كيميائي'],['تجمّد الماء تغيّر:','فيزيائي','كيميائي']]},
 {sem:2,unit:'الوحدة الرابعة',t:'التغيّرات الكيميائية',q:[['أيّها تغيّر كيميائي؟','احتراق الورق','تمزيق الورق','ذوبان الثلج','كسر الزجاج'],['في التغيّر الكيميائي:','تتكون مادة جديدة','لا تتكون مادة جديدة','يتغير الشكل فقط'],['صدأ الحديد تغيّر:','كيميائي','فيزيائي'],['من علامات التغيّر الكيميائي:','تغيّر اللون وتصاعد غاز أو رائحة','تغيّر الشكل فقط','تغيّر الحجم فقط']]},
 {sem:2,unit:'الوحدة الخامسة',t:'الصخور من حولنا',q:[['الصخور تتكوّن من:','معادن','ماء فقط','نباتات','هواء'],['نستخدم الصخور في:','البناء','الطعام','الشرب','التنفس'],['من أنواع الصخور:','البازلت والكلس','الخشب والورق','البلاستيك والزجاج','القطن والصوف'],['صخر أسود يكثر في محافظة السويداء:','البازلت','الرخام','الطباشير','الملح']]},
 {sem:2,unit:'الوحدة الخامسة',t:'كيف تتغيّر الصخور؟',q:[['تتفتت الصخور بفعل:','الماء والرياح وتغيّر الحرارة','الضوء فقط','الصوت','الظلام'],['تفتّت الصخور يكوّن مع الزمن:','التربة','الماء','الهواء','النفط'],['تسمى عملية تفتّت الصخور:','التجوية','التبخر','التنفس','الهضم'],['جذور النباتات قد:','تفتّت الصخور','تبني الصخور','تذيب الماء']]},
 {sem:2,unit:'الوحدة الخامسة',t:'قوّة الطفو',q:[['يطفو الخشب على الماء لأن:','قوة دفع الماء له أكبر من وزنه','الخشب ثقيل جداً','الماء خفيف','الخشب يحب الماء'],['أيّها يطفو على الماء؟','الفلين','الحجر','المسمار','قطعة نقد'],['أيّها يغوص في الماء؟','الحجر','الفلين','ورقة الشجر','الإسفنج الجاف'],['السفن الكبيرة تطفو بسبب:','شكلها الذي يزيح كمية كبيرة من الماء','خفة الحديد','قوة الرياح','قلة حمولتها']]},
 {sem:2,unit:'الوحدة السادسة',t:'مصادر الطاقة',q:[['مصدر طاقة متجدد:','الشمس','النفط','الفحم','الغاز الطبيعي'],['مصدر طاقة غير متجدد:','النفط','الرياح','الشمس','الماء الجاري'],['طاقة الرياح نستفيد منها بـ:','العنفات الهوائية','الألواح الشمسية','السدود','المواقد'],['الألواح الشمسية تحوّل ضوء الشمس إلى:','كهرباء','ماء','هواء','صوت']]},
 {sem:2,unit:'الوحدة السادسة',t:'تحوّلات الطاقة',q:[['المصباح الكهربائي يحوّل الكهرباء إلى:','ضوء وحرارة','صوت','حركة','ماء'],['المروحة تحوّل الكهرباء إلى:','طاقة حركية','طاقة ضوئية فقط','طاقة صوتية فقط','طاقة كيميائية'],['المذياع يحوّل الكهرباء إلى:','صوت','ضوء','حرارة فقط','ماء'],['البطارية تخزّن طاقة:','كيميائية','ضوئية','صوتية','حرارية']]},
 {sem:2,unit:'الوحدة السادسة',t:'تكيّف الكائنات مع بيئاتها',q:[['يخزّن الجمل الدهون في:','سنامه','قدميه','أذنيه','ذيله'],['الدب القطبي يتكيّف مع البرد بـ:','فراء كثيف وطبقة دهون','جلد رقيق','أذنين كبيرتين','الصيام'],['نبات الصبار يتكيّف مع الصحراء بـ:','أوراق شوكية وساق تخزّن الماء','أوراق عريضة','جذور قصيرة جداً','أزهار كبيرة'],['السمك يتنفّس بـ:','الخياشيم','الرئتين','الجلد','الأنف']]},
 {sem:2,unit:'الوحدة السادسة',t:'التلوّث وإعادة التدوير',q:[['من مصادر تلوّث الهواء:','دخان المصانع والسيارات','الأشجار','المطر','الشمس'],['إعادة التدوير تعني:','تحويل المخلفات إلى مواد مفيدة','حرق النفايات','رمي النفايات في البحر','دفن كل شيء'],['يمكن إعادة تدوير:','الورق والبلاستيك والزجاج','الطعام الفاسد فقط','الهواء','الماء الملوّث فقط'],['لنحافظ على البيئة:','نضع النفايات في الحاوية','نرمي النفايات في الشارع','نقطع الأشجار','نحرق البلاستيك']]}
];

})();
(function(){
/* التربية الإسلامية: الصفوف ١–٦ وفق محاور المنهاج السوري (العقيدة، القرآن، الحديث، السيرة، العبادات، الأخلاق) */
function I(sem, unit, t, q) { return { sem, unit, t, q } }
CUR[1].isl = [
 I(1,'العقيدة','الله خالقي',[['من خلق السماء والأرض؟','الله تعالى','الإنسان','الشمس'],['نحب الله لأنه:','خلقنا وأنعم علينا','يعطينا الألعاب فقط','لا شيء']]),
 I(1,'القرآن الكريم','سورة الفاتحة',[['أول سورة في القرآن الكريم:','الفاتحة','الناس','الإخلاص'],['نقرأ سورة الفاتحة في:','كل ركعة من الصلاة','العيد فقط','رمضان فقط']]),
 I(1,'العبادات','أركان الإسلام',[['عدد أركان الإسلام:','٥','٣','٧','٤'],['من أركان الإسلام:','الصلاة','اللعب','النوم']]),
 I(1,'الأخلاق','آداب الطعام',[['نقول قبل الطعام:','بسم الله','الحمد لله','مع السلامة'],['نأكل باليد:','اليمنى','اليسرى','الاثنتين معاً'],['نقول بعد الطعام:','الحمد لله','بسم الله','صباح الخير']]),
 I(2,'السيرة','نبيّنا محمد ﷺ',[['اسم نبينا:','محمد ﷺ','موسى عليه السلام','عيسى عليه السلام'],['وُلد النبي ﷺ في:','مكة المكرمة','المدينة المنورة','دمشق']]),
 I(2,'القرآن الكريم','سورة الإخلاص',[['«قل هو الله أحد» من سورة:','الإخلاص','الفلق','الكوثر'],['معنى «أحد»:','واحد لا شريك له','كبير','قريب']]),
 I(2,'العبادات','الوضوء',[['نتوضأ قبل:','الصلاة','النوم فقط','اللعب'],['أول أعمال الوضوء:','النية وغسل اليدين','غسل القدمين','مسح الرأس']]),
 I(2,'الأخلاق','بر الوالدين',[['أطيع والديّ لأن الله:','أمرني بذلك','لا يحب ذلك','لم يذكر ذلك'],['من بر الوالدين:','مساعدتهما والدعاء لهما','رفع الصوت عليهما','إهمالهما']])
];
CUR[2].isl = [
 I(1,'العقيدة','أركان الإيمان',[['عدد أركان الإيمان:','٦','٥','٤','٧'],['من أركان الإيمان:','الإيمان بالملائكة','الصيام','الحج']]),
 I(1,'القرآن الكريم','سورة الفلق',[['«قل أعوذ برب الفلق» من سورة:','الفلق','الناس','الإخلاص'],['نقرأ المعوذتين لـ:','نحتمي بالله من الشر','نتعلم الحساب','نلعب']]),
 I(1,'العبادات','الصلاة',[['عدد الصلوات المفروضة في اليوم والليلة:','خمس','ثلاث','سبع'],['نتّجه في الصلاة نحو:','الكعبة','الشرق دائماً','الجبل']]),
 I(1,'الحديث الشريف','الكلمة الطيبة صدقة',[['«الكلمة الطيبة»:','صدقة','عيب','لا أجر لها'],['من الكلمة الطيبة:','شكراً، من فضلك','الشتم','الصراخ']]),
 I(2,'السيرة','طفولة النبي ﷺ',[['أم النبي ﷺ:','آمنة بنت وهب','خديجة','فاطمة'],['مرضعة النبي ﷺ:','حليمة السعدية','آمنة','عائشة'],['كفل النبيَّ ﷺ بعد جده:','عمه أبو طالب','أبو بكر','عثمان']]),
 I(2,'القرآن الكريم','سورة الناس',[['آخر سورة في القرآن:','الناس','الفاتحة','الفلق'],['نستعيذ في سورة الناس من:','شر الوسواس الخناس','الحر','البرد']]),
 I(2,'العبادات','الصيام',[['نصوم في شهر:','رمضان','شعبان','شوال'],['يبدأ الصيام من:','طلوع الفجر','الظهر','العصر'],['ينتهي الصيام عند:','غروب الشمس','منتصف الليل','الفجر']]),
 I(2,'الأخلاق','الصدق',[['المسلم:','صادق لا يكذب','يكذب أحياناً','يكذب دائماً'],['الصدق يقود إلى:','الخير','الشر','الخوف']])
];
CUR[3].isl = [
 I(1,'العقيدة','من أسماء الله الحسنى',[['من أسماء الله الحسنى:','الرحمن الرحيم','القوي فقط','لا شيء'],['«الرزاق» معناه:','الذي يرزق كل المخلوقات','الذي ينام','الذي يأكل']]),
 I(1,'القرآن الكريم','سورة الكوثر',[['«إنا أعطيناك الكوثر» الكوثر:','نهر في الجنة','جبل','بحر في الدنيا'],['عدد آيات سورة الكوثر:','٣','٥','٧','٤']]),
 I(1,'العبادات','أركان الصلاة وكيفيتها',[['عدد ركعات صلاة الفجر:','ركعتان','ثلاث','أربع'],['عدد ركعات صلاة المغرب:','ثلاث','ركعتان','أربع'],['نختم الصلاة بـ:','التسليم','التكبير','الركوع']]),
 I(1,'السيرة','بعثة النبي ﷺ',[['نزل الوحي على النبي ﷺ في:','غار حراء','غار ثور','المسجد'],['أول ما نزل من القرآن:','اقرأ','الفاتحة','الناس'],['الملك الذي نزل بالوحي:','جبريل عليه السلام','ميكائيل','إسرافيل']]),
 I(2,'الحديث الشريف','الرحمة',[['«ارحموا من في الأرض...»:','يرحمكم من في السماء','تفوزوا بالمال','تكونوا أقوياء'],['من الرحمة:','العطف على الحيوان','ضرب القطط','قطع الأشجار']]),
 I(2,'القرآن الكريم','سورة العصر',[['«إن الإنسان لفي خسر» إلا:','الذين آمنوا وعملوا الصالحات','الأغنياء','الأقوياء'],['تحثنا سورة العصر على:','التواصي بالحق والصبر','النوم','الكسل']]),
 I(2,'العبادات','الزكاة',[['الزكاة تُعطى لـ:','الفقراء والمحتاجين','الأغنياء','الأصدقاء فقط'],['الزكاة ركن من أركان:','الإسلام','الإيمان','الإحسان']]),
 I(2,'الأخلاق','الأمانة',[['المسلم:','يحفظ الأمانة','يخون الأمانة','ينساها'],['إذا وجدت شيئاً ليس لي:','أعيده لصاحبه','آخذه','أرميه']])
];
CUR[4].isl = [
 I(1,'العقيدة','الإيمان بالملائكة',[['الملائكة مخلوقون من:','نور','طين','نار'],['الملك الموكّل بالوحي:','جبريل','ميكائيل','مالك'],['الملائكة:','يطيعون الله دائماً','يعصون الله','يأكلون ويشربون']]),
 I(1,'القرآن الكريم','سورة النصر',[['«إذا جاء نصر الله والفتح» المقصود فتح:','مكة','دمشق','القدس'],['أمرت السورة بـ:','التسبيح والاستغفار','النوم','الغضب']]),
 I(1,'العبادات','سنن الصلاة وصلاة الجماعة',[['صلاة الجماعة أفضل من صلاة الفرد بـ:','٢٧ درجة','درجتين','١٠ درجات'],['صلاة الجمعة تُصلّى:','ركعتين بعد الخطبة','أربع ركعات','ركعة']]),
 I(1,'السيرة','الهجرة النبوية',[['هاجر النبي ﷺ من مكة إلى:','المدينة المنورة','الطائف','الشام'],['رافق النبيَّ ﷺ في الهجرة:','أبو بكر الصديق','عمر','علي'],['اختبأ النبي ﷺ وصاحبه في غار:','ثور','حراء','الكهف']]),
 I(2,'الحديث الشريف','حسن الخلق',[['«إن من أحبكم إليّ...»:','أحسنكم أخلاقاً','أكثركم مالاً','أقواكم جسماً'],['من حسن الخلق:','الابتسامة واحترام الآخرين','السخرية','الغضب']]),
 I(2,'القرآن الكريم','سورة الكافرون',[['«لكم دينكم ولي دين» من سورة:','الكافرون','الإخلاص','الماعون'],['عدد آيات سورة الكافرون:','٦','٤','٥','٧']]),
 I(2,'العبادات','الحج',[['يحج المسلم إلى:','مكة المكرمة','المدينة','القدس'],['الحج واجب مرة في العمر على:','المستطيع','كل طفل','كل شخص كل سنة']]),
 I(2,'الأخلاق','التعاون والإيثار',[['الإيثار:','تقديم الآخرين على النفس','الأنانية','البخل'],['من التعاون:','مساعدة الجيران','الشجار معهم','إزعاجهم']])
];
CUR[5].isl = [
 I(1,'العقيدة','الإيمان بالكتب السماوية',[['أُنزل التوراة على:','موسى عليه السلام','عيسى','محمد ﷺ'],['أُنزل الإنجيل على:','عيسى عليه السلام','داود','موسى'],['أُنزل الزبور على:','داود عليه السلام','إبراهيم','نوح']]),
 I(1,'القرآن الكريم','سورة الماعون',[['«أرأيت الذي يكذب بالدين» من سورة:','الماعون','الفيل','قريش'],['تذم السورة من:','يقهر اليتيم ولا يطعم المسكين','يكرم الضيف','يصلي بخشوع']]),
 I(1,'السيرة','غزوة بدر',[['كانت غزوة بدر في شهر:','رمضان','محرّم','ذي الحجة'],['انتصر المسلمون في بدر رغم:','قلة عددهم','كثرة عددهم','عدم القتال']]),
 I(1,'العبادات','صلاة المسافر والمريض',[['المريض الذي لا يستطيع القيام يصلي:','جالساً','لا يصلي','واقفاً رغماً عنه'],['قصر الصلاة يعني صلاة الرباعية:','ركعتين','ثلاثاً','ركعة']]),
 I(2,'الحديث الشريف','إماطة الأذى عن الطريق',[['إزالة الأذى عن الطريق:','صدقة','لا أجر لها','عيب'],['من الأذى في الطريق:','الحجارة والزجاج','الأشجار','الإشارات']]),
 I(2,'القرآن الكريم','سورة قريش',[['«رحلة الشتاء والصيف» كانت لقريش للـ:','تجارة','حرب','سياحة'],['أمرت السورة قريشاً بعبادة:','رب هذا البيت','الأصنام','الشمس']]),
 I(2,'السيرة','فتح مكة',[['فُتحت مكة في السنة:','الثامنة للهجرة','الأولى','العاشرة'],['قال النبي ﷺ لأهل مكة يوم الفتح:','اذهبوا فأنتم الطلقاء','عاقبوهم','اطردوهم']]),
 I(2,'الأخلاق','الوفاء بالعهد',[['المسلم إذا وعد:','وفى بوعده','أخلف','نسي عمداً'],['من علامات المنافق:','إذا وعد أخلف','إذا حدّث صدق','إذا اؤتمن حفظ']])
];
CUR[6].isl = [
 I(1,'العقيدة','الإيمان بالرسل',[['أولو العزم من الرسل عددهم:','٥','٣','٧','١٠'],['خاتم الأنبياء:','محمد ﷺ','عيسى','موسى'],['أول الرسل إلى الأرض:','نوح عليه السلام','إبراهيم','موسى']]),
 I(1,'القرآن الكريم','سورة الفيل',[['«ألم تر كيف فعل ربك بأصحاب...»:','الفيل','الكهف','الأخدود'],['أرسل الله على أصحاب الفيل:','طيراً أبابيل','الريح','المطر'],['حدثت قصة الفيل في عام:','ولادة النبي ﷺ','الهجرة','فتح مكة']]),
 I(1,'العبادات','الصيام وأحكامه',[['يفطر الصائم ناسياً:','يتم صومه ولا شيء عليه','يفطر بقية اليوم','يعيد الصيام دائماً'],['يُستحب للصائم:','السحور وتعجيل الفطر','ترك السحور','تأخير الفطر']]),
 I(1,'السيرة','صلح الحديبية',[['كان صلح الحديبية بين المسلمين و:','قريش','الروم','الفرس'],['من نتائج صلح الحديبية:','الهدنة وانتشار الإسلام','الحرب','الهزيمة']]),
 I(2,'الحديث الشريف','المسلم من سلم المسلمون من لسانه ويده',[['المسلم الحقيقي:','لا يؤذي الناس بلسانه ويده','يؤذي الناس','يغتاب الناس'],['من أذى اللسان:','الغيبة والكذب','الذكر','النصيحة']]),
 I(2,'القرآن الكريم','سورة المسد',[['نزلت سورة المسد في:','أبي لهب وامرأته','أبي بكر','فرعون'],['«حمالة الحطب» هي:','امرأة أبي لهب','خديجة','مريم']]),
 I(2,'العبادات','الزكاة وأحكامها',[['نسبة زكاة المال:','٢٫٥٪','١٠٪','٥٠٪','١٪'],['زكاة الفطر تُخرج:','قبل صلاة عيد الفطر','بعد شهر','في الحج']]),
 I(2,'الأخلاق','احترام الآخرين وحقوق الجار',[['حق الجار:','الإحسان إليه وعدم إيذائه','إزعاجه','تجاهله'],['«ما زال جبريل يوصيني بـ...»:','الجار','المال','السفر']])
];

})();
(function(){
/* الرياضيات: دروس الصفوف ١–٦ وفق تسلسل موضوعات المنهاج السوري، كل درس مربوط بمولّد أسئلة */
function M(list) { return list.map(x => ({ sem: x[0], unit: x[1], t: x[2], gen: x[3] })) }
CUR[1] = CUR[1] || {}; CUR[2] = CUR[2] || {}; CUR[3] = CUR[3] || {}; CUR[4] = CUR[4] || {}; CUR[5] = CUR[5] || {}; CUR[6] = CUR[6] || {};
CUR[1].math = M([
 [1,'الأعداد حتى ١٠','العدّ من ١ إلى ٥',['count']],
 [1,'الأعداد حتى ١٠','العدّ من ٦ إلى ١٠',['count','seq']],
 [1,'الأعداد حتى ١٠','مقارنة الأعداد (أكبر، أصغر)',['cmp']],
 [1,'الأعداد حتى ١٠','ترتيب الأعداد',['seq','cmp']],
 [1,'الجمع والطرح','الجمع ضمن ١٠',['add10']],
 [1,'الجمع والطرح','الطرح ضمن ١٠',['sub10']],
 [1,'الجمع والطرح','الجمع والطرح معاً',['add10','sub10','tf']],
 [1,'الهندسة','الأشكال الهندسية',['shapes']],
 [2,'الأعداد حتى ٢٠','الأعداد من ١١ إلى ٢٠',['seq','cmp']],
 [2,'الأعداد حتى ٢٠','الجمع ضمن ٢٠',['add20']],
 [2,'الأعداد حتى ٢٠','الطرح ضمن ٢٠',['sub20']],
 [2,'الأعداد حتى ٩٩','العشرات والآحاد',['tens']],
 [2,'الأعداد حتى ٩٩','الأعداد حتى ٩٩',['cmp','seq']],
 [2,'القياس','الساعة',['time']],
 [2,'القياس','النقود',['money']]
]);
CUR[2].math = M([
 [1,'الأعداد حتى ٩٩','العشرات والآحاد',['tens']],
 [1,'الأعداد حتى ٩٩','مقارنة الأعداد وترتيبها',['cmp']],
 [1,'الجمع والطرح','الجمع ضمن ١٠٠',['add100']],
 [1,'الجمع والطرح','الطرح ضمن ١٠٠',['sub100']],
 [1,'الجمع والطرح','العدّ بالقفز (٢، ٥، ١٠)',['seq']],
 [1,'الهندسة','الأشكال والمجسمات',['shapes']],
 [1,'القياس','الساعة',['time']],
 [2,'الأعداد حتى ١٠٠٠','المئات والعشرات والآحاد',['place']],
 [2,'الأعداد حتى ١٠٠٠','مقارنة الأعداد الثلاثية',['cmp']],
 [2,'الضرب','مفهوم الضرب',['mul2510']],
 [2,'الضرب','جدول ضرب ٢ و٥ و١٠',['mul2510']],
 [2,'القسمة','نصف العدد',['half']],
 [2,'القياس','الطول (متر وسنتيمتر)',['length']],
 [2,'القياس','النقود',['money']]
]);
CUR[3].math = M([
 [1,'الأعداد حتى ١٠٠٠٠','القيمة المنزلية',['place']],
 [1,'الأعداد حتى ١٠٠٠٠','مقارنة الأعداد وترتيبها',['cmp']],
 [1,'الجمع والطرح','الجمع مع الحمل',['add1000']],
 [1,'الجمع والطرح','الطرح مع الاستلاف',['sub1000']],
 [1,'الضرب','جداول الضرب',['multab']],
 [1,'الضرب','خواص الضرب',['multab','tf']],
 [1,'القسمة','القسمة وعلاقتها بالضرب',['div']],
 [2,'القسمة','القسمة مع الباقي',['divrem']],
 [2,'الكسور','مفهوم الكسر (نصف، ثلث، ربع)',['half','frac']],
 [2,'الكسور','مقارنة الكسور',['fraccmp']],
 [2,'الهندسة','المضلعات',['shapes']],
 [2,'القياس','المحيط',['perim']],
 [2,'القياس','الزمن والساعة',['time']],
 [2,'القياس','وحدات الطول',['length']]
]);
CUR[4].math = M([
 [1,'الأعداد','الأعداد الكبيرة والقيمة المنزلية',['place','cmp']],
 [1,'العمليات','جمع الأعداد الكبيرة وطرحها',['addbig','subbig']],
 [1,'العمليات','ضرب عدد من رقمين بعدد من رقم',['mul2d']],
 [1,'العمليات','القسمة الطويلة',['divbig','divrem']],
 [1,'الكسور','الكسور المتكافئة',['frac','fraccmp']],
 [1,'الكسور','جمع الكسور وطرحها',['fracadd']],
 [2,'الهندسة','المستقيمات والزوايا',['angles']],
 [2,'الهندسة','المضلعات والمثلثات',['shapes','angles']],
 [2,'القياس','محيط المستطيل والمربع',['perim']],
 [2,'القياس','المساحة',['area','sqarea']],
 [2,'الكسور العشرية','مفهوم الكسر العشري',['decadd']],
 [2,'القياس','وحدات القياس',['length']]
]);
CUR[5].math = M([
 [1,'الأعداد','الأعداد حتى الملايين',['cmp','place']],
 [1,'العمليات','الضرب بعدد من رقمين',['mul3d','mul2d']],
 [1,'العمليات','القسمة على عدد من رقمين',['divbig']],
 [1,'العمليات','ترتيب العمليات',['orderops']],
 [1,'الكسور','الكسور وعملياتها',['fracadd','frac']],
 [1,'الكسور العشرية','جمع الكسور العشرية وطرحها',['decadd']],
 [2,'الكسور العشرية','ضرب الكسور العشرية',['decmul']],
 [2,'النسبة المئوية','النسبة المئوية',['percent']],
 [2,'الهندسة','الزوايا والمثلثات',['angles']],
 [2,'القياس','المساحة والمحيط',['area','perim','sqarea']],
 [2,'الإحصاء','المتوسط الحسابي',['avg']]
]);
CUR[6].math = M([
 [1,'الأعداد','قابلية القسمة والقواسم',['divrem','div']],
 [1,'العمليات','ترتيب العمليات',['orderops']],
 [1,'الكسور','العمليات على الكسور',['fracadd','frac']],
 [1,'الكسور العشرية','العمليات على الكسور العشرية',['decadd','decmul']],
 [1,'النسبة والتناسب','النسبة',['ratio']],
 [2,'النسبة والتناسب','النسبة المئوية',['percent']],
 [2,'الهندسة','الزوايا ومجموع زوايا المثلث',['angles']],
 [2,'القياس','المساحات',['area','sqarea']],
 [2,'القياس','المحيطات',['perim']],
 [2,'الإحصاء','المتوسط الحسابي',['avg']]
]);

})();
(function(){
/* العلوم: الصفوف ١–٦ وفق موضوعات المنهاج السوري (الصف الرابع الفصل الثاني في g4.js من الكتاب نفسه) */
function L(sem, unit, t, q) { return { sem, unit, t, q } }
CUR[1].sci = [
 L(1,'جسمي','أجزاء جسمي',[['بماذا نمشي؟','القدمين','اليدين','الأذنين','العينين'],['بماذا نمسك الأشياء؟','اليدين','القدمين','الأنف','الأذن'],['الرأس في أعلى:','الجسم','القدم','اليد']]),
 L(1,'جسمي','حواسي الخمس',[['بماذا نرى؟','العين','الأذن','الأنف','اللسان'],['بماذا نسمع؟','الأذن','العين','الجلد','اللسان'],['بماذا نتذوّق؟','اللسان','الأنف','العين','الأذن'],['بماذا نشمّ؟','الأنف','الأذن','العين','اليد']]),
 L(1,'جسمي','نظافتي وصحتي',[['نغسل أيدينا:','قبل الأكل وبعده','مرة في الأسبوع','لا نغسلها'],['ننظّف أسناننا بـ:','فرشاة الأسنان','المشط','المنشفة'],['الطعام المفيد:','الخضار والفواكه','الحلوى الكثيرة','الشيبس']]),
 L(1,'الكائنات الحية','الكائن الحي وغير الحي',[['أيّها كائن حي؟','العصفور','الحجر','الكرة','القلم'],['أيّها غير حي؟','الكرسي','القطة','الشجرة','الإنسان'],['الكائن الحي:','يتغذّى وينمو','لا يتغذّى','لا يتحرك أبداً']]),
 L(1,'الكائنات الحية','الحيوانات من حولنا',[['أيّ حيوان يعطينا الحليب؟','البقرة','القطة','الدجاجة','السمكة'],['أيّ حيوان يطير؟','العصفور','الأرنب','الحصان','السمكة'],['أيّ حيوان يعيش في الماء؟','السمكة','الحصان','الأسد','الأرنب']]),
 L(2,'الكائنات الحية','النباتات من حولنا',[['يحتاج النبات إلى:','الماء والضوء','الحلوى','الظلام'],['جزء النبات تحت التربة:','الجذر','الورقة','الزهرة'],['من النبات نأكل:','الثمار','الحجارة','البلاستيك']]),
 L(2,'بيئتي','الماء',[['نشرب الماء لأنه:','ضروري لحياتنا','لونه أزرق','لا فائدة منه'],['نحافظ على الماء بـ:','إغلاق الصنبور','تركه مفتوحاً','رميه'],['الماء عندما يبرد كثيراً يصبح:','ثلجاً','بخاراً','تراباً']]),
 L(2,'بيئتي','الفصول الأربعة',[['كم فصلاً في السنة؟','٤','٢','٣','٥'],['أبرد فصل:','الشتاء','الصيف','الربيع','الخريف'],['تتفتح الأزهار في:','الربيع','الشتاء','الخريف']]),
 L(2,'بيئتي','الشمس والقمر',[['تعطينا الشمس:','الضوء والحرارة','الماء','الثلج'],['نرى القمر في:','الليل','الظهر فقط','لا نراه'],['يكون النهار عندما تظهر:','الشمس','النجوم','الغيوم']])
];
CUR[2].sci = [
 L(1,'جسم الإنسان','الهيكل العظمي',[['العظام تحمي:','أعضاء الجسم الداخلية','الملابس','الطعام'],['عظم الجمجمة يحمي:','الدماغ','القلب','المعدة'],['لتقوية العظام نشرب:','الحليب','المشروبات الغازية','القهوة']]),
 L(1,'جسم الإنسان','الغذاء الصحي',[['أيّها غذاء صحي؟','التفاح','الحلوى','الشيبس','العصير الغازي'],['نأكل الخضار لأنها:','تقوّي الجسم','تضرّ الأسنان','لا فائدة منها'],['الوجبة الأهم في الصباح:','الفطور','العشاء','الحلوى']]),
 L(1,'الحيوانات','غذاء الحيوانات',[['الأرنب يأكل:','النباتات','اللحوم','الحجارة'],['الأسد يأكل:','اللحوم','العشب','الفواكه'],['الحيوان الذي يأكل النبات واللحم:','الدب','الغزال','الأسد']]),
 L(1,'الحيوانات','أغطية أجسام الحيوانات',[['جسم الطائر مغطى بـ:','الريش','الحراشف','الصوف'],['جسم السمكة مغطى بـ:','الحراشف','الريش','الشعر'],['جسم الخروف مغطى بـ:','الصوف','الريش','الحراشف']]),
 L(1,'النبات','أجزاء النبات',[['الجزء الذي يمتص الماء من التربة:','الجذر','الساق','الورقة'],['الجزء الذي يحمل الأوراق:','الساق','الجذر','البذرة'],['تتكوّن الثمار من:','الأزهار','الجذور','التربة']]),
 L(2,'المادة','حالات المادة',[['الماء في الكأس:','سائل','صلب','غاز'],['الحجر:','صلب','سائل','غاز'],['الهواء:','غاز','صلب','سائل']]),
 L(2,'المادة','المغناطيس',[['المغناطيس يجذب:','الحديد','الخشب','الورق','البلاستيك'],['أيّها لا ينجذب للمغناطيس؟','الخشب','المسمار','الدبوس','مشبك الحديد']]),
 L(2,'الأرض والسماء','الليل والنهار',[['يحدث الليل والنهار بسبب:','دوران الأرض حول نفسها','حركة الغيوم','دوران القمر'],['نرى النجوم في:','الليل','الظهر','العصر']]),
 L(2,'الأرض والسماء','الطقس',[['أداة قياس الحرارة:','ميزان الحرارة','المسطرة','الساعة'],['الطقس الماطر نحتاج فيه:','مظلة','نظارة شمسية','ملابس السباحة']])
];
CUR[3].sci = [
 L(1,'الكائنات الحية','تصنيف الحيوانات',[['الثدييات تُرضع صغارها:','الحليب','الماء','العسل'],['أيّها من الثدييات؟','الحوت','السمكة','الدجاجة','الضفدع'],['أيّها من الطيور؟','الحمامة','الخفاش','الأفعى','القطة']]),
 L(1,'الكائنات الحية','دورة حياة الكائنات',[['دورة حياة الفراشة تبدأ بـ:','البيضة','الفراشة','الشرنقة'],['صغير الضفدع يسمى:','أبو ذنيبة','الكتكوت','اليرقة'],['تخرج الفراشة من:','الشرنقة','العش','البيضة مباشرة']]),
 L(1,'الكائنات الحية','الحشرات',[['كم رجلاً للحشرة؟','٦','٤','٨','١٠'],['أيّها حشرة؟','النحلة','العنكبوت','الدودة','الحلزون'],['جسم الحشرة يتكوّن من:','٣ أقسام','قسمين','٥ أقسام']]),
 L(1,'جسم الإنسان','الهضم والتنفس',[['يبدأ هضم الطعام في:','الفم','المعدة','الأمعاء'],['نتنفس بواسطة:','الرئتين','المعدة','القلب'],['القلب يضخّ:','الدم','الهواء','الطعام']]),
 L(2,'المادة والطاقة','التبخر والتكاثف',[['تحوّل الماء إلى بخار:','التبخر','التجمد','الانصهار'],['تتكون الغيوم من:','بخار الماء المتكاثف','الدخان','الغبار']]),
 L(2,'المادة والطاقة','الضوء والظل',[['يتكوّن الظل عندما:','يحجب جسم الضوء','نطفئ الضوء','نشعل الضوء'],['ينتشر الضوء في:','خطوط مستقيمة','خطوط متعرجة','دوائر'],['أيّها مصدر ضوء؟','الشمس','القمر','المرآة']]),
 L(2,'المادة والطاقة','الصوت',[['ينتج الصوت عن:','اهتزاز الأجسام','الضوء','الحرارة'],['نسمع الأصوات بـ:','الأذن','العين','اليد']]),
 L(2,'الأرض','التربة والصخور',[['التربة الجيدة للزراعة:','التربة الطينية الغنية','الرمل الجاف','الصخر'],['تتكون التربة من تفتت:','الصخور','البلاستيك','الزجاج']])
];
CUR[4].sci = (CUR[4].sci || []).concat([
 L(1,'الوحدة الأولى','جسم الإنسان: الجهاز الهيكلي والعضلي',[['عدد عظام جسم الإنسان البالغ تقريباً:','٢٠٦','١٠٠','٥٠','٣٠٠'],['تحرك العضلات:','العظام','الشعر','الأظافر'],['المفصل هو:','مكان التقاء عظمتين','عضلة','عصب']]),
 L(1,'الوحدة الأولى','الجهاز الهضمي',[['يبدأ الهضم في:','الفم','المعدة','الأمعاء الغليظة'],['يُمتص الغذاء في:','الأمعاء الدقيقة','المريء','الفم'],['المريء يصل بين الفم و:','المعدة','الرئتين','القلب']]),
 L(1,'الوحدة الثانية','الكائنات الحية الدقيقة',[['الجراثيم نراها بـ:','المجهر','العين المجردة','المرآة'],['نحمي أنفسنا من الجراثيم بـ:','غسل اليدين','لمس الأوساخ','عدم الاستحمام'],['من الكائنات الدقيقة المفيدة:','خميرة الخبز','جراثيم الزكام','فيروس الإنفلونزا']]),
 L(1,'الوحدة الثالثة','الكهرباء',[['أيّ مادة توصل الكهرباء؟','النحاس','الخشب','المطاط','البلاستيك'],['يضيء المصباح عندما تكون الدارة:','مغلقة','مفتوحة','مقطوعة'],['من مصادر الكهرباء:','البطارية','الحجر','الماء الراكد']]),
 L(1,'الوحدة الثالثة','المغناطيس',[['للمغناطيس قطبان:','شمالي وجنوبي','شرقي وغربي','علوي وسفلي'],['القطبان المتشابهان:','يتنافران','يتجاذبان','لا يتأثران']])
]);
CUR[5].sci = [
 L(1,'الكائنات الحية','الخلية',[['الوحدة الأساسية لبناء الكائن الحي:','الخلية','العظم','الدم'],['نرى الخلايا بـ:','المجهر','العين المجردة','المنظار'],['تحتوي الخلية النباتية على:','جدار خلوي','ريش','حراشف']]),
 L(1,'الكائنات الحية','التكاثر عند النبات',[['عضو التكاثر في النبات الزهري:','الزهرة','الجذر','الساق'],['تنتقل حبوب الطلع بواسطة:','الحشرات والرياح','الحجارة','الضوء'],['تنمو النبتة الجديدة من:','البذرة','الورقة اليابسة','التربة وحدها']]),
 L(1,'جسم الإنسان','الجهاز الدوراني',[['ينقل الدم الأكسجين بواسطة:','الكريات الحمراء','الكريات البيضاء','الصفائح'],['تدافع عن الجسم:','الكريات البيضاء','الكريات الحمراء','العظام'],['القلب عضو:','عضلي يضخ الدم','يهضم الطعام','يفكر']]),
 L(1,'جسم الإنسان','الجهاز التنفسي',[['ندخل إلى رئتينا غاز:','الأكسجين','ثنائي أكسيد الكربون','الهيليوم'],['نطرد عند الزفير:','ثنائي أكسيد الكربون','الأكسجين فقط','الماء فقط'],['التدخين يضرّ:','الرئتين','الأظافر','الشعر']]),
 L(2,'المادة','المخاليط وفصلها',[['نفصل الرمل عن الماء بـ:','الترشيح','التسخين فقط','التجميد'],['نفصل برادة الحديد عن الرمل بـ:','المغناطيس','الماء','الغربال الناعم فقط'],['الماء والملح:','محلول','مادة صلبة','غاز']]),
 L(2,'القوى والحركة','الاحتكاك',[['قوة تعيق حركة الأجسام:','الاحتكاك','المغناطيسية','الضوء'],['يقلّ الاحتكاك على سطح:','أملس','خشن','رملي'],['نستفيد من الاحتكاك في:','المشي دون انزلاق','الطيران','الغوص']]),
 L(2,'الأرض والفضاء','المجموعة الشمسية',[['عدد كواكب المجموعة الشمسية:','٨','٩','٧','١٠'],['أقرب كوكب إلى الشمس:','عطارد','الأرض','المريخ','زحل'],['تدور الأرض حول الشمس في:','سنة','يوم','شهر']]),
 L(2,'الأرض والفضاء','الآلات البسيطة',[['من الآلات البسيطة:','الرافعة والبكرة','الحاسوب','التلفاز'],['المقص مثال على:','الرافعة','البكرة','العجلة']])
];
CUR[6].sci = [
 L(1,'المادة','تركيب المادة والذرة',[['تتكوّن المادة من:','ذرات','خلايا','كواكب'],['تدور حول نواة الذرة:','الإلكترونات','البروتونات فقط','الجزيئات'],['الماء يتكوّن من:','الهيدروجين والأكسجين','الحديد','الكربون فقط']]),
 L(1,'المادة','التغيرات الفيزيائية والكيميائية',[['أيّها تحوّل كيميائي؟','احتراق الورق','ذوبان الثلج','تقطيع الورق'],['غليان الماء تحوّل:','فيزيائي','كيميائي'],['تعفّن الخبز تحوّل:','كيميائي','فيزيائي']]),
 L(1,'المادة','الحموض والأسس',[['طعم الحموض:','حامض','حلو','مر'],['من الحموض في المطبخ:','الخل والليمون','الصابون','الملح'],['الصابون من:','الأسس (القلويات)','الحموض','الأملاح فقط']]),
 L(1,'القوى والطاقة','الجاذبية والوزن',[['القوة التي تجذب الأجسام نحو الأرض:','الجاذبية','الاحتكاك','المغناطيسية'],['السرعة = ','المسافة ÷ الزمن','الزمن ÷ المسافة','المسافة × الزمن']]),
 L(2,'القوى والطاقة','مصادر الطاقة',[['مصدر طاقة غير متجدد:','النفط','الرياح','الشمس'],['نرى البرق قبل سماع الرعد لأن:','الضوء أسرع من الصوت','الصوت أسرع','البرق أقرب']]),
 L(2,'الأرض','طبقات الأرض',[['الطبقة الخارجية من الأرض:','القشرة','اللب','الوشاح'],['تتشكل البراكين بسبب:','خروج الصهارة من باطن الأرض','الأمطار','الرياح'],['الزلازل سببها:','حركة صفائح القشرة الأرضية','المد والجزر','الغيوم']]),
 L(2,'جسم الإنسان','جهاز المناعة والصحة',[['يدافع عن الجسم ضد الجراثيم:','جهاز المناعة','جهاز الهضم','الهيكل العظمي'],['اللقاح يساعد على:','الوقاية من الأمراض','زيادة الوزن','النوم'],['الغذاء المتوازن يحتوي:','كل العناصر الغذائية','السكر فقط','الدهون فقط']]),
 L(2,'البيئة','حماية البيئة',[['الاحتباس الحراري سببه:','زيادة غازات مثل ثنائي أكسيد الكربون','كثرة الأشجار','المطر'],['نحمي البيئة بـ:','التشجير وإعادة التدوير','حرق النفايات','قطع الغابات']])
];

})();
(function(){
/* العربية لغتي الصف الأول والثاني — الفصل الأول، من كتب ٢٠٢٥–٢٠٢٦ */
function REPL(g, s, lessons) { CUR[g][s] = lessons.concat((CUR[g][s] || []).filter(l => l.sem !== 1)); }
REPL(1, 'ar', [
 {sem:1, unit:'الانتماء والمواطنة', t:'أحلى لغة (ب - ت)', q:[
  ['أكمِلْ من الأنشودة:\nهيّا نقرأْ أحلى …','لُغَةْ','قِصّةْ','لُعْبةْ'],
  ['ما اسمُ لُغتي الجميلةِ في الأنشودة؟','الفُصْحى','الإنكليزيّة','الفرنسيّة'],
  ['أكمِلْ: أهلاً أهلاً يا …','مَدْرَسَتي','حَديقَتي','غُرْفَتي'],
  ['ما الحرفُ الأوّلُ في كلمةِ «بَصَل»؟','ب','ت','ن'],
  ['ما الحرفُ الأوّلُ في كلمةِ «تَمْر»؟','ت','ب','ث'],
  ['أيُّ كلمةٍ فيها حرفُ الباء؟','طَبيب','حُوت','زَيْت'],
  ['أيُّ كلمةٍ تنتهي بحرفِ التّاء؟','حُوت','دُبّ','بَصَل'],
  ['في المقطع «بو» حرفُ الباءِ مع مَدٍّ بـ:','الواو','الألف','الياء'],
  ['أيُّ مقطعٍ فيه مَدٌّ بالألف؟','تا','تُ','تِ'],
  ['نُدخِلُ «ال» على كلمةِ «كِتاب» فتصبح:','الكِتاب','كُتُب','كِتابان']]},
 {sem:1, unit:'الانتماء والمواطنة', t:'موطني (و - ي)', q:[
  ['أكمِلْ: بلادي أجملُ …','البُلْدان','البِحار','الألوان'],
  ['كيف أرضُ بلادي في النّصّ؟','كريمة','بعيدة','صغيرة'],
  ['خَيْراتُ بلادي …','وفيرة','قليلة','مَخْفيّة'],
  ['كيف أهلُ بلادي في النّصّ؟','طيّبون يُحبّون بعضَهم بعضاً','غاضبون','مُسافرون'],
  ['ما معنى كلمةِ «وَفيرة»؟','كثيرة','قليلة','صغيرة'],
  ['ما الحرفُ الأوّلُ في كلمةِ «وَرْدة»؟','و','ي','ر'],
  ['أيُّ كلمةٍ فيها حرفُ الياء؟','بِلادي','وَطَن','أرض'],
  ['أيُّ كلمةٍ فيها حرفُ الواو؟','ضُيُوف','بِلادي','تَمْر'],
  ['في المقطع «يو» حرفُ الياءِ مع مَدٍّ بـ:','الواو','الألف','الياء'],
  ['نقولُ للولد «طِفْل»، ونقولُ للبنت:','طِفْلة','أطفال','طُفولة']]},
 {sem:1, unit:'الانتماء والمواطنة', t:'مدرستي (م)', q:[
  ['أكمِلْ: مَدْرَسَتي يا بَيْتي …','الثّاني','الأوّل','الكبير'],
  ['أكمِلْ: يا لَحْناً حُلْواً في …','شَفَتي','غُرْفَتي','حَقيبَتي'],
  ['المدرسةُ في الأنشودةِ نَبْعُ عَطاءٍ و…','حَنان','ماء','لَعِب'],
  ['ما معنى كلمةِ «لَحْن»؟','نَغَمٌ نُغنّيه','طعامٌ نأكلُه','لونٌ نرسُمُ به'],
  ['ما الحرفُ الأوّلُ في كلمةِ «مِقْلَمة»؟','م','ق','ن'],
  ['أين حرفُ الميمِ في كلمةِ «قَلَم»؟','في آخرِها','في أوّلِها','في وسطِها'],
  ['أين حرفُ الميمِ في كلمةِ «ليمون»؟','في وسطِها','في أوّلِها','في آخرِها'],
  ['أيُّ كلمةٍ فيها حرفُ الميم؟','خاتَم','باب','تُوت'],
  ['أيُّ مقطعٍ فيه مَدٌّ بالواو؟','مو','مُ','ما'],
  ['نقولُ للبنت: «هِيَ تَرْسُمُ»، ونقولُ للولد:','هُوَ يَرْسُمُ','هِيَ تَرْسُمُ','هِيَ يَرْسُمُ']]},
 {sem:1, unit:'الانتماء والمواطنة', t:'الأطفال (ح)', q:[
  ['أكمِلْ: جِئْنا جِئْنا نَبْني …','الوَطَنا','البَيْتا','السُّورا'],
  ['أكمِلْ: نحنُ الفَجْرُ الآتي …','الطّالِعْ','النّائِمْ','البَعيدْ'],
  ['أكمِلْ: نحنُ الجيلُ الآتي …','الرّائِعْ','الصّغيرْ','الحَزينْ'],
  ['مَنْ يتكلّمُ في الأنشودة؟','الأطفال','المعلّمون','الطّيور'],
  ['ما «الفَجْر»؟','أوّلُ ضوءِ الصّباح','وقتُ اللّيل','نوعٌ من الطّعام'],
  ['ما الحرفُ الأوّلُ في كلمةِ «حُقول»؟','ح','خ','ج'],
  ['أيُّ كلمةٍ تنتهي بحرفِ الحاء؟','قَمْح','بَحْر','حُقول'],
  ['أين حرفُ الحاءِ في كلمةِ «بَحْر»؟','في وسطِها','في أوّلِها','في آخرِها'],
  ['نُشيرُ إلى البيتِ فنقول: … بيتٌ.','هذا','هذه','هِيَ'],
  ['نُشيرُ إلى الحديقةِ فنقول: … حديقةٌ.','هذه','هذا','هُوَ']]},
 {sem:1, unit:'الرياضة والفنون', t:'أرسم بالألوان (س - ش)', q:[
  ['ماذا يفعلُ الطّفلُ في الأنشودة؟','يرسُمُ بالألوان','يلعبُ بالكُرة','يسبَحُ في البحر'],
  ['يقولُ الطّفلُ في الأنشودة: أنا …','فنّان','طبيب','خبّاز'],
  ['أين يرسُمُ الطّفلُ عَلَمَه؟','فوقَ القِمَم','تحتَ الماء','في الكتاب'],
  ['أكمِلْ: دَعْني أرسُمْ ضَوْءَ …','النَّجْم','الشّمس','البيت'],
  ['ما «الكَرْم»؟','بُستانُ العِنَب','بيتٌ كبير','نهرٌ صغير'],
  ['ما الحرفُ الأوّلُ في كلمةِ «سَماء»؟','س','ش','ص'],
  ['ما الحرفُ الأوّلُ في كلمةِ «شَمْعة»؟','ش','س','ث'],
  ['أيُّ كلمةٍ تنتهي بحرفِ الشّين؟','رِمْش','كيس','كأس'],
  ['أيُّ كلمةٍ فيها حرفُ السّين؟','مَسْرَح','فَراش','ريشة'],
  ['اخترِ الجملةَ الصّحيحة:','يكتُبُ مازنٌ بالقَلَمِ.','يكتُبُ مازنٌ بالقَلَمُ.','يكتُبُ مازنٌ بالقَلَمَ.']]},
 {sem:1, unit:'الرياضة والفنون', t:'هيا نلعب (د - ذ)', q:[
  ['إلى أين ذهبَ الأطفال؟','إلى المَلْعَب','إلى المكتبة','إلى البحر'],
  ['كيف ذهبَ الأطفالُ إلى الملعب؟','فَرِحين','حَزينين','خائفين'],
  ['كيف تبادلَ الأطفالُ الكُرة؟','بذكاء','بغضب','ببُطء'],
  ['سدَّدَ الطّفلُ الكُرةَ إلى …','المَرْمى','السّماء','البيت'],
  ['ماذا هتفَ الأطفال؟','الرّياضةُ فنٌّ وذَوْق','نحبُّ النّوم','الكُرةُ صغيرة'],
  ['ما الحرفُ الأوّلُ في كلمةِ «ذِراع»؟','ذ','د','ز'],
  ['أيُّ كلمةٍ فيها حرفُ الدّال؟','قَدَم','ذُرة','قُنْفُذ'],
  ['أيُّ كلمةٍ تنتهي بحرفِ الذّال؟','قُنْفُذ','دُود','حديقة'],
  ['ما الفرقُ بين «د» و«ذ»؟','الذّالُ فوقَها نُقطة','الدّالُ فوقَها نُقطة','لا فرقَ بينهما'],
  ['الكُرةُ على سطحِ الطّاولة، نقول:\nالكُرةُ … الطّاولة.','فوقَ','تحتَ','أمامَ']]},
 {sem:1, unit:'الرياضة والفنون', t:'الموسيقا (ك - ل)', q:[
  ['بماذا ستحتفلُ مَلَكُ وليلى؟','بتكريمِ جَمال','بعيدِ الأمّ','ببدايةِ المدرسة'],
  ['قالت مَلَك: سنعزِفُ الألحانَ …','الحُلْوة','الحزينة','القديمة'],
  ['قالت ليلى: ما أحلى أن نسمعَ أجملَ …','الألحان','القِصص','الأخبار'],
  ['أيُّ كلمةٍ لا تنتمي إلى الموسيقا؟','يُسافِرُ','يُغنّي','يَعزِفُ'],
  ['«الكَمان» هو:','آلةٌ موسيقيّة','نوعٌ من الطّعام','لُعبةٌ رياضيّة'],
  ['ما الحرفُ الأوّلُ في كلمةِ «لَيْلى»؟','ل','ك','ن'],
  ['أيُّ كلمةٍ فيها حرفا الكافِ واللّامِ معاً؟','كَلْب','كُوب','حَليب'],
  ['أين حرفُ الكافِ في كلمةِ «مَلَك»؟','في آخرِها','في أوّلِها','في وسطِها'],
  ['أيُّ كلمةٍ فيها حرفُ اللّامِ مع مَدٍّ طويل؟','حَليب','جَمَل','كَلْب'],
  ['نقولُ للولد: أنتَ تلعبُ، ونقولُ للبنت:','أنتِ تلعبينَ','أنتَ تلعبُ','أنا ألعبُ']]},
 {sem:1, unit:'الرياضة والفنون', t:'فن التمثيل (ف - ق)', q:[
  ['ماذا قرَّرَ تلاميذُ الصّفّ؟','تمثيلَ مسرحيّة','رحلةً إلى البحر','رسمَ لوحة'],
  ['ماذا لَبِسَ التّلاميذ؟','ثيابَ التّمثيل','ثيابَ النّوم','ثيابَ السّباحة'],
  ['كيف لعبَ الأصدقاءُ أدوارَهم؟','بإتقان','بكسل','بخوف'],
  ['ماذا فعلَ الجمهورُ تحيّةً للأطفال؟','صفَّقَ','نامَ','خرجَ'],
  ['قال التّلاميذ: ما أحلى فنَّ …','التّمثيل','الطّبخ','السّباحة'],
  ['«ما أحلى!» معناها:','ما أجملَ!','ما أغلى!','ما أكبرَ!'],
  ['ما الحرفُ الأوّلُ في كلمةِ «فَنّان»؟','ف','ق','غ'],
  ['أيُّ كلمةٍ تنتهي بحرفِ القاف؟','بُوق','صُفوف','قِصّة'],
  ['أيُّ كلمةٍ فيها حرفا الفاءِ والقافِ معاً؟','فُسْتُق','صُوف','دَقيق'],
  ['أنا أرسُمُ زهرةً، ونحنُ …','نرسُمُ أزهاراً','أرسُمُ زهرةً','ترسُمُ أزهاراً']]},
 {sem:1, unit:'دنيا العلوم', t:'سفينة الفضاء (ن)', q:[
  ['أين تطيرُ سفينةُ الفضاء؟','بين النُّجوم','فوق البحر','تحت الأرض'],
  ['هل لسفينةِ الفضاءِ أجنحة؟','لا، تطيرُ بلا أجنحة','نعم، لها جناحان','نعم، لها أربعةُ أجنحة'],
  ['مَنْ تحملُ سفينةُ الفضاء؟','رُوّادَ الفضاء','الأسماك','الطّيور'],
  ['لماذا يجمعُ الرُّوّادُ المعلومات؟','لخدمةِ الإنسان','للّعب','للنّوم'],
  ['مفردُ كلمةِ «النُّجوم»:','النَّجْم','النَّجْمان','النُّجوميّ'],
  ['ما الحرفُ الأوّلُ في كلمةِ «نُجوم»؟','ن','ت','ب'],
  ['أين حرفُ النّونِ في كلمةِ «عَيْن»؟','في آخرِها','في أوّلِها','في وسطِها'],
  ['ما الحرفُ السّاكنُ في كلمةِ «رَمْلٌ»؟','الميم','الرّاء','اللّام'],
  ['أيُّ كلمةٍ فيها نونٌ ساكنة (نْ)؟','أَنْتَ','نَهَرٌ','نُجومٌ'],
  ['«يعزفُ مجدٌ الموسيقا»، ننفيها فنقول:','لم يعزفْ مجدٌ الموسيقا','يعزفُ مجدٌ الأناشيدَ','عزفَ مجدٌ الموسيقا']]},
 {sem:1, unit:'دنيا العلوم', t:'المكتبة (هـ)', q:[
  ['ماذا يهوى الطّفلُ في النّصّ؟','قراءةَ الكتبِ والقِصص','الرّسم','السّباحة'],
  ['كيف وجدَ الطّفلُ المكتبة؟','هادئةً ومُرتّبة','مُزدحمةً','مُغلقة'],
  ['ماذا يوجدُ على رفوفِ المكتبة؟','كنوزٌ ثمينة','ألعاب','طعام'],
  ['بماذا يشعرُ الطّفلُ كلّما زارَ المكتبة؟','بالبَهْجة','بالحُزن','بالتّعب'],
  ['ما معنى كلمةِ «البَهْجة»؟','الفَرَح','الخَوف','النّوم'],
  ['ماذا يَنْهَلُ الطّفلُ من الكتب؟','العِلْمَ والمعرفة','الماء','الألوان'],
  ['ما الحرفُ الأوّلُ في كلمةِ «هُدوء»؟','هـ','ح','خ'],
  ['أين حرفُ الهاءِ في كلمةِ «وَجْه»؟','في آخرِها','في أوّلِها','في وسطِها'],
  ['أيُّ كلمةٍ فيها حرفُ الهاء؟','مِياه','مِقْعَد','قَلَم'],
  ['أكمِلْ: أكلَ الطّفلُ …','طعامَه','الدّرسَ','الكُرسيَّ']]},
 {sem:1, unit:'دنيا العلوم', t:'الحاسوب (ر - ز)', q:[
  ['أكمِلْ: عندي حاسوبٌ …','ماهِرْ','صغيرْ','قديمْ'],
  ['يُدهِشُني الحاسوبُ مِثلَ …','السّاحِرْ','الطّبيبْ','البائِعْ'],
  ['ماذا يَنقُرُ الطّفلُ بيدِه؟','زِرَّ الفأرة','بابَ البيت','الطّاولة'],
  ['ماذا يحدثُ للشّاشة؟','تُضيءُ كالدُّرّة','تنكسرُ','تنطفئُ'],
  ['«الفأرة» في الأنشودة هي:','قطعةٌ من الحاسوب','حيوانٌ صغير','لُعبة'],
  ['أكمِلْ: فيه عِلْمٌ و…','مَنافِعْ','ألعابْ','طعامْ'],
  ['ما الحرفُ الأوّلُ في كلمةِ «زَهْرة»؟','ز','ر','ذ'],
  ['أيُّ كلمةٍ تنتهي بحرفِ الرّاء؟','مِزْمار','زَيْت','فَأْرة'],
  ['إذا وضعْنا نُقطةً فوقَ «ر» صارت:','ز','ذ','ن'],
  ['أكمِلْ: يزرعُ الفلّاحُ …','الأرضَ','السّماءَ','الكتابَ']]},
 {sem:1, unit:'دنيا العلوم', t:'الحساب (ع - غ)', q:[
  ['مَنْ سيُساعدُ فِراسٌ؟','أختَه الصّغيرة','أباه','صديقَه'],
  ['في أيِّ واجبٍ سيُساعدُها؟','الحساب','العلوم','القراءة'],
  ['في الجمعِ نحنُ …','نُضيفُ إلى الأعداد','نُنقِصُ من الأعداد','لا نفعلُ شيئاً'],
  ['الطّرحُ عكسُ …','الجَمْع','العَدّ','القِسمة'],
  ['ثلاثُ زهراتٍ وواحدةٌ من عندنا، كم صارت؟','أربع','ثلاث','خمس'],
  ['خمسُ تفّاحاتٍ نأخذُ منها اثنتين، كم يبقى؟','ثلاث','سبع','اثنتان'],
  ['مفردُ كلمةِ «زَهَرات»:','زَهْرة','زُهور','أزهار'],
  ['ما الحرفُ الأوّلُ في كلمةِ «غَيْمة»؟','غ','ع','ف'],
  ['أيُّ كلمةٍ فيها حرفُ العين؟','جَمْع','صَمْغ','فارِغ'],
  ['إذا وضعْنا نُقطةً فوقَ «ع» صارت:','غ','خ','ف']]},
]);
REPL(2, 'ar', [
 {sem:1, unit:'المواطنة والانتماء', t:'اليوم الأول في المدرسة', q:[
  ['ما اسمُ التّلميذةِ في النّصّ؟','آلاء','ليلى','ريم'],
  ['متى نهضَتْ آلاءُ من نومِها؟','صباحاً','ظُهراً','مساءً'],
  ['ماذا طلبَتِ المعلّمةُ من الأطفال؟','أن يرسموا بالألوان','أن يُغنّوا','أن يلعبوا'],
  ['ماذا رسمَتْ آلاء؟','مدرستَها وفوقَها علمُ سورية','بيتَها','شجرةً كبيرة'],
  ['ماذا كتبَتْ آلاءُ إلى جوارِ العَلَم؟','أحبُّ وطني الغالي','أحبُّ اللّعب','مدرستي جميلة'],
  ['ما معنى «نَهَضَتْ»؟','قامَتْ','نامَتْ','جلسَتْ'],
  ['جمعُ كلمةِ «طِفْل»:','أطفال','طِفْلة','طُفولة'],
  ['أيُّ كلمةٍ فيها حرفُ الظّاء؟','حَفِظَ','وَضَعَ','نَهَضَ'],
  ['في أيِّ كلمةٍ الهمزةُ تحتَ الألف (إ)؟','إغلاق','أقلام','أُسْرة'],
  ['«لَعِبَ الطِّفلُ» تصبحُ بالفعلِ المضارع:','يلعبُ الطِّفلُ','لَعِبَ الطِّفلُ','اِلْعَبْ يا طفلُ']]},
 {sem:1, unit:'المواطنة والانتماء', t:'من حقي أن أتعلم', q:[
  ['أكمِلْ: مِنْ حقّي عِلْمٌ …','يَنْفَعُني','يُتْعِبُني','يُخيفُني'],
  ['أكمِلْ: مِنْ حقّي حُلْمٌ …','أرسُمُهُ','أبيعُهُ','أنساهُ'],
  ['أكمِلْ: سأكونُ نشيطاً في …','صَفّي','بيتي','حديقتي'],
  ['ما معنى «أزهو»؟','أتباهى وأفتخرُ','أحزنُ','أنامُ'],
  ['ما معنى «أُنمّيه»؟','أزيدُه','أُنقِصُه','أتركُه'],
  ['ضِدُّ كلمةِ «عِلْم»:','جَهْل','فَنّ','خُلُق'],
  ['جمعُ كلمةِ «دَرْب»:','دُروب','دَرْبان','دَرّاب'],
  ['في كلمةِ «عِلْمٌ» تنوينُ:','الضّمّ','الفتح','الكسر'],
  ['أيُّ كلمةٍ تبدأُ بـ «ال» التّعريف؟','الوَطَن','جَبَل','سَماء'],
  ['أيُّ كلمةٍ فيها حرفُ القاف؟','خُلُق','فِكْر','سأكون']]},
 {sem:1, unit:'المواطنة والانتماء', t:'وطني', q:[
  ['أكمِلْ: وطني كنزٌ بـ…','الآمال','الذّهب','الألعاب'],
  ['وطني أجملُ من كلِّ …','البُلدان','الأزهار','النّجوم'],
  ['أيُّ مدينةٍ ذُكِرَتْ في الأنشودة؟','دمشق','حلب','حمص'],
  ['«الفَيْحاء» لقبٌ من ألقابِ مدينة:','دمشق','حلب','اللّاذقيّة'],
  ['ما معنى «الآمال»؟','الأُمْنيات','الأحزان','الأشجار'],
  ['ضِدُّ كلمةِ «الخير»:','الشّرّ','الحُزن','الكَسَل'],
  ['ما معنى «العَطاء»؟','الكَرَم','الصُّمود','الجَمال'],
  ['في أيِّ كلمةٍ «ال» شمسيّة (لا نلفظُ اللّام)؟','النُّور','القَمَر','الفَرَح'],
  ['في أيِّ كلمةٍ «ال» قمريّة (نلفظُ اللّام)؟','الفَرَح','الضَّحِك','النَّجْمة'],
  ['اخترِ الصّحيح: لنْ …. في النّهرِ وحدي.','أسبحَ','أسبحُ','أسبحْ']]},
 {sem:1, unit:'المواطنة والانتماء', t:'الزيتونة والريح', q:[
  ['ماذا قالتِ العاصفةُ لشجرةِ الزّيتون؟','ابتعدي عن طريقي','أنتِ جميلة','تعالي معي'],
  ['بماذا ردَّتِ الزّيتونة؟','هذه أرضي، جذوري فيها، لن أبتعد','سأبتعدُ حالاً','أنا خائفةٌ منكِ'],
  ['ماذا تساقطَ من الزّيتونةِ في المرّةِ الأولى؟','الزَّهْر','الثَّمَر','الجذور'],
  ['ما الحكمةُ من القصّة؟','مَنْ يصمُدْ يُعاوِدِ الإثمارَ من جديد','الرّيحُ دائماً أقوى','الأشجارُ تخافُ العاصفة'],
  ['ما معنى «يَصْمُد»؟','يَثْبُتُ','يهربُ','ينامُ'],
  ['ضِدُّ كلمةِ «اقتربي»:','ابتعدي','تعالي','اجلسي'],
  ['جمعُ كلمةِ «جِذْر»:','جُذور','جِذْران','جذّار'],
  ['أيُّ كلمةٍ فيها حرفُ الثّاء؟','ثِقة','سَقَطَ','مَوْسِم'],
  ['ما العلامةُ الّتي نضعُها بعد «قالتِ العاصفةُ»؟','النّقطتان (:)','الفاصلة (،)','علامة الاستفهام (؟)'],
  ['في جملة «لن يفوزَ عامرٌ» آخرُ الفعل «يفوز» عليه:','فتحة','ضمّة','كسرة']]},
 {sem:1, unit:'الرياضة والفنون', t:'هيا نسبح', q:[
  ['مَنْ يُنادي الطّفلُ في الأنشودة ليسبحا؟','عمّار','نوّار','ميّار'],
  ['كيف الجوُّ في الأنشودة؟','صيفٌ حارّ','شتاءٌ بارد','ربيعٌ ماطر'],
  ['ما معنى «الإرهاق»؟','التَّعَب','الفَرَح','الماء'],
  ['ما معنى «يُداعِبُنا»؟','يُمازِحُنا','يَضرِبُنا','يُخيفُنا'],
  ['أكمِلْ: ما أحلى الرّكضَ على …','الرَّمْلِ','الماءِ','الجبلِ'],
  ['جمعُ كلمةِ «ظِلّ»:','ظِلال','ظِلّان','مِظَلّة'],
  ['ضِدُّ كلمةِ «بارد»:','حارّ','ماطر','جميل'],
  ['أيُّ كلمةٍ فيها حرفا اللّامِ والرّاءِ معاً؟','رَمْل','حَرير','لَوْن'],
  ['كيف نكتبُ التّاءَ في آخرِ «فُزْتُ»؟','مفتوحة (ت)','مربوطة (ة)','لا نكتبُها'],
  ['اخترِ الصّحيح: أُحِبُّ أنْ …','ألعبَ','ألعبُ','ألعبْ']]},
 {sem:1, unit:'الرياضة والفنون', t:'تحدي الأذكياء', q:[
  ['عن أيِّ لُعبةٍ تتحدّثُ الأنشودة؟','الشِّطْرَنْج','كرة القدم','السّباحة'],
  ['أكمِلْ: سأُحدّثُكم يا أطفالْ عن حربٍ من دونِ …','قِتالْ','لَعِبْ','تفكيرْ'],
  ['كم عقلاً يتنافسُ في هذه اللّعبة؟','عقلان','ثلاثةُ عقول','أربعةُ عقول'],
  ['كم لوناً في رُقعةِ الشّطرنج؟','لونان','لونٌ واحد','ثلاثةُ ألوان'],
  ['مَنْ يحظى بالميدان؟','الأذكى','الأقوى','الأكبر'],
  ['أيُّ قطعةٍ ليست من أحجارِ الشّطرنج؟','الكُرة','الفيل','الحِصان'],
  ['ما معنى «يَحظى»؟','ينالُ الشّيءَ','يخسرُ','ينامُ'],
  ['جمعُ كلمةِ «مَلِك»:','مُلوك','مَلِكة','مَمْلكة'],
  ['أيُّ كلمةٍ فيها تنوينُ النَّصْب؟','نَهْراً','نَهْرٌ','نَهْرٍ'],
  ['«يسمعُ هاني» نُدخِلُ عليها «لم» فتصبح:','لم يسمعْ هاني','لم يسمعُ هاني','لم يسمعَ هاني']]},
 {sem:1, unit:'الرياضة والفنون', t:'عشاق الأغاني', q:[
  ['مَنْ «أصحابُ الوَتَر»؟','العازفون','الرّسّامون','الرّياضيّون'],
  ['بماذا يملأُ عُشّاقُ الأغاني الأرض؟','حُبّاً','ماءً','ضجيجاً'],
  ['أكمِلْ: وبنا تحلو …','الحياة','الحلوى','المدرسة'],
  ['تُزهِرُ الدّنيا جمالاً من …','أغاني العاشقين','أزهارِ الحديقة','ماءِ المطر'],
  ['جمعُ كلمةِ «صاحِب» في الأنشودة:','أصحاب','صاحِبان','مَصْحوب'],
  ['ضِدُّ كلمةِ «فوقَ»:','تحتَ','جنبَ','أمامَ'],
  ['ضِدُّ كلمةِ «فَرِحَ»:','حَزِنَ','ضَحِكَ','لَعِبَ'],
  ['أيُّ كلمةٍ تنتهي بتاءٍ مربوطة؟','مكتبة','بِنْت','بيت'],
  ['أيُّ كلمةٍ فيها حرفُ الضّاد؟','أرض','دَرْب','دُبّ'],
  ['في «لم أذهبْ إلى البحر» آخرُ الفعل «أذهب» عليه:','سكون','ضمّة','فتحة']]},
 {sem:1, unit:'الرياضة والفنون', t:'العالم الطبيب', q:[
  ['ما اسمُ العالِمِ في النّصّ؟','أبو بكرٍ الرّازي','ابنُ سينا','جابرُ بنُ حيّان'],
  ['الرّازي طبيبٌ و…','كيميائيٌّ','رسّامٌ','شاعرٌ'],
  ['كم كتاباً ألّفَ الرّازي في الطّبّ؟','أكثرَ من مئتين وعشرين','عشرين فقط','مئةً فقط'],
  ['عَمَّ كان يبحثُ الرّازي وتلاميذُه؟','عن مكانٍ لبناءِ المستشفى','عن كنز','عن كتابٍ ضائع'],
  ['ما اسمُ التّلميذِ الّذي ناداه الرّازي؟','طارق','سامر','مازن'],
  ['ماذا فتحَ الرّازي أمامَ تلاميذِه؟','خريطة','كتاباً','مجلّة'],
  ['ماذا فعلوا عندما وجدوا المكان؟','فرحوا وغنّوا','بكَوا','ناموا'],
  ['ما معنى «صُغْناه»؟','صَنَعْناه','كَسَرْناه','قَرَأْناه'],
  ['أيُّ كلمةٍ فيها حرفُ الخاء؟','تاريخ','مُحامي','يَحْدُث'],
  ['«تشربُ لينا الحليبَ» مع «لم» تصبح:','لم تشربْ لينا الحليبَ','لم تشربُ لينا الحليبَ','لم تشربَ لينا الحليبَ']]},
 {sem:1, unit:'دنيا العلوم', t:'جرة الفخار وجرة الحديد', q:[
  ['النّصُّ الّذي استمعْنا إليه:','قِصّة','رسالة','أُنشودة'],
  ['مَنْ بطلا القصّة؟','جرّةُ الفخّارِ وجرّةُ الحديد','شجرةٌ وريح','قطٌّ وفأر'],
  ['بماذا تفخرُ جرّةُ الحديد؟','بأنّها أقوى','بلونِها','بصِغَرِها'],
  ['قالت جرّةُ الحديد: أُراهِنُ أنّكِ تخافينَ من مُواجهتي لأنّي …','أقوى منكِ','أجملُ منكِ','أصغرُ منكِ'],
  ['وظيفةُ الجِرارِ كما في القصّة:','أن تحتويَ الأشياءَ، لا أن تتصادم','أن تتصارعَ','أن تزيّنَ الحدائق'],
  ['أين وجدوا جرّةَ الفخّارِ بعد مئاتِ السّنين؟','داخلَ طبقاتِ التّرابِ العميقة','في أعلى شجرة','في السّوق'],
  ['لماذا يجبُ أن نحرصَ على آثارِ الأجداد؟','لأنّها كنزٌ ثمين','لأنّها جديدة','لأنّها رخيصة'],
  ['ما الحكمةُ من القصّة؟','لا تُؤكِّدْ قوّتَكَ بمقارنتِها بضعفِ غيرِك','القويُّ دائماً على حقّ','الحديدُ أفضلُ من كلِّ شيء'],
  ['جمعُ كلمةِ «جَرّة»:','جِرار','جَرّان','مَجْرور'],
  ['جمعُ كلمةِ «قَصْر»:','قُصور','قَصْران','مَقْصورة']]},
 {sem:1, unit:'دنيا العلوم', t:'رحلة الفضاء', q:[
  ['عمَّ تتحدّثُ الأنشودة؟','رحلةٍ خياليّةٍ إلى الفضاء','رحلةٍ إلى البحر','لُعبةِ الشّطرنج'],
  ['ما الّذي يحملُ مركبةَ الفضاء؟','صاروخ','طائرة','سفينة'],
  ['ما معنى «عَناء»؟','تَعَب','فَرَح','سُرعة'],
  ['أكمِلْ: فجناحُ خيالٍ يحملُنا حتّى نلقى وجهَ …','القمر','الشّمس','البحر'],
  ['تأخذُنا الأحلامُ بعيداً كي نصبحَ جيرانَ …','النَّجْم','البحر','الغيوم'],
  ['مفردُ كلمةِ «كواكب»:','كَوْكَب','كَوْكَبان','كواكبيّ'],
  ['مفردُ كلمةِ «مَرْكَبات»:','مَرْكَبة','مَرْكوب','رِكاب'],
  ['أيُّ جملةٍ نضعُ في آخرِها علامةَ الاستفهام (؟)','هل شاهدْتَ سفينةَ الفضاء','أحبُّ وطني كثيراً','ذهبْتُ إلى المدرسة'],
  ['«يبني العمّالُ الوطنَ» مَنِ الّذي يبني؟','العمّالُ','الوطنَ','يبني'],
  ['نُدخلُ اللّامَ على «الغيوم» فتصبح:','لِلْغيوم','لالْغيوم','الغيوم']]},
 {sem:1, unit:'دنيا العلوم', t:'متحف دمشق التربوي', q:[
  ['في أيِّ مدينةٍ يقعُ المتحفُ التّربويّ؟','دمشق','حلب','حماة'],
  ['ماذا تشاهدُ في المدخلِ الرّئيس؟','نَوْلاً قديماً وآلاتٍ موسيقيّة','سيّارات','طائرات'],
  ['الحيواناتُ في الطّابقِ الأوّلِ …','مُحنَّطة','حيّةٌ تتحرّك','مصنوعةٌ من الحلوى'],
  ['كم قاعةً في الطّابقِ الأوّل؟','أربع','ثلاث','خمس'],
  ['مُجسَّمُ أيِّ جسرٍ تجدُه في الطّريقِ إلى الطّابقِ الثّاني؟','جسرِ دير الزّور المعلّق','جسرٍ في حلب','جسرٍ على البحر'],
  ['ما معنى «مُزَخْرَفاً»؟','مُزَيَّناً','مكسوراً','مُظلماً'],
  ['«قصّةٌ رائعةٌ ترويها كلُّ أرجاءِ المتحف» معنى «ترويها»:','تحكيها','تسقيها','تملؤها'],
  ['جمعُ كلمةِ «هاتِف»:','هواتِف','هاتِفان','مُهاتَفة'],
  ['ضِدُّ كلمةِ «تهبطُ»:','تصعدُ','تنزلُ','تقفُ'],
  ['في جملة «تساقطَ الثَّمرُ» آخرُ كلمة «الثّمر» عليه:','ضمّة','فتحة','كسرة']]},
 {sem:1, unit:'دنيا العلوم', t:'هل تعلم؟', q:[
  ['من أين سمعَ همّامٌ الخبر؟','من المِذياع','من التّلفاز','من صديقِه'],
  ['عن أيِّ طيورٍ كان الخبر؟','العصافيرِ البرّيّة','الحَمام','البطّ'],
  ['ماذا تنقرُ العصافيرُ البرّيّةُ مع الحَبّ؟','حُصَيّاتٍ صغيرة','أوراقاً','ريشاً'],
  ['لماذا تأكلُ العصافيرُ الحُصيّات؟','ليُهضَمَ ما تأكلُه','لتلعبَ بها','لتبنيَ عُشَّها'],
  ['مَنْ شرحَ الفكرةَ لهمّام؟','أبوه','معلّمُه','أختُه'],
  ['ما معنى «الأصقاع»؟','الجهاتُ والنّواحي','الطّيور','الأشجار'],
  ['ما معنى «الحَصى»؟','الحجارةُ الصّغيرة','الحَبّ','الرّيش'],
  ['«طيورٌ جِدُّ ذكيّة» هذه الجملةُ تُعبِّرُ عن:','رأي','حقيقة','سؤال'],
  ['أيُّ كلمةٍ فيها حرفُ الغين؟','غريبة','هذه','تَهيج'],
  ['«أطعمَ عامرٌ الدّجاجةَ» ماذا أطعمَ عامرٌ؟','الدّجاجةَ','عامرٌ','أطعمَ']]},
]);

})();
(function(){
/* العربية لغتي الصف الثالث والخامس — الفصل الأول، من كتب ٢٠٢٥–٢٠٢٦ */
function REPL(g, s, lessons) { CUR[g][s] = lessons.concat((CUR[g][s] || []).filter(l => l.sem !== 1)); }

REPL(3, 'ar', [
 {sem:1, unit:'الوحدة الأولى: الانتماء والمواطنة', t:'أرضنا', q:[
  ['في نصّ «أرضنا»، بماذا كان جود يساعد جدَّه وجدّته؟','في قطاف الزيتون','في سقاية الحديقة','في صيد السمك'],
  ['مَنْ زرع أشجار الزيتون في الحقل؟','الجدّ قبل عشرات السنين','جود في العام الماضي','الجدّة قبل أيّام'],
  ['قال الجدّ لجود إنّ أهمّ شيء هو:','الأرض','الدار','الصندوق القديم'],
  ['ما معنى كلمة «حَفْنة» في: «رفعت الجدّة بيدها حفنةً من التراب»؟','ملء الكفّ أو الكفّين','صندوق صغير','شجرة كبيرة'],
  ['ما معنى «نَتَشَبَّث» في: «نتشبّث بأرضنا»؟','نتعلّق ونتمسّك','نبتعد ونرحل','ننام ونرتاح'],
  ['ما مفرد كلمة «أحفاد»؟','حفيد','حافد','حفدة'],
  ['ما جمع كلمة «جِذْر»؟','جذور','جذرة','مجذور'],
  ['«أعدَّ الجدُّ مفاجأةً لحفيده»\nأيّ كلمة فيها حرفٌ مُضعَّف (عليه شدّة)؟','الجدُّ','مفاجأة','لحفيده'],
  ['«خرجَ جودٌ إلى الحقلِ»\nما نوع كلمة «خرجَ»؟','فعل','اسم','حرف'],
  ['«خرجَ جودٌ إلى الحقلِ»\nما نوع كلمة «إلى»؟','حرف','اسم','فعل']]},

 {sem:1, unit:'الوحدة الأولى: الانتماء والمواطنة', t:'من حقنا', q:[
  ['في نشيد «من حقّنا»، من حقّ الصغار أن يعيشوا في بيئة خالية من:','الضجيج والدخان','الأشجار والأزهار','الطيور والأغاني'],
  ['بماذا شبّه الشاعر الأطفال وهم يغنّون؟','بالطيور','بالأزهار','بالنجوم'],
  ['بحسب النشيد، كلّما زاد العمل من أجل بلادنا:','زادت جمالًا','قلّت أزهارها','تعب الأطفال'],
  ['ما معنى «نَغْدو» في: «في الحقل نغدو ونروح»؟','نذهب وننطلق','ننام','نبكي'],
  ['ما معنى «فتّانة» في: «فتّانةٌ تُغري العيون»؟','جذّابة','حزينة','بعيدة'],
  ['ما مفرد كلمة «عيون»؟','عين','عيونة','أعين'],
  ['ما ضدّ كلمة «أُعطي»؟','آخذ','أمنح','أهدي'],
  ['«بَحَثَ التلاميذُ في الشابكة»\nالفعل «بحث» يدلّ على عمل:','حصل وانتهى','يحصل الآن','نطلب حصوله'],
  ['«ابحثْ عن القصّة في المكتبة»\nالفعل «ابحثْ» يدلّ على:','طلب حصول العمل','عمل حصل في الماضي','عمل يحصل الآن'],
  ['أيّ فعل يدلّ على عمل يحدث ويحصل الآن؟','يُشارك','شاركَ','شارِكْ']]},

 {sem:1, unit:'الوحدة الأولى: الانتماء والمواطنة', t:'يدا بيد', q:[
  ['في نصّ «يدًا بيد»، ماذا اتّفقت الأسرة أن تفعل في نهاية الأسبوع؟','المشاركة في تنظيف نهر بردى','زيارة حديقة الحيوان','السفر إلى البحر'],
  ['متى أصبح بالإمكان إزالة الملوّثات من نهر بردى؟','بعد أن انخفضت مياهه','بعد أن ذاب الثلج','بعد هطول المطر'],
  ['قالت ريم: «سنعمل اليوم بانتظام كخليّة ......»','نحل','نمل','عصافير'],
  ['ما معنى «الهِمّة» في: «ارتفعت الهمّة للعمل»؟','العزيمة والقوّة','التعب والكسل','الماء الصافي'],
  ['ما معنى «تقيهم» في: «يرتدون الملابس التي تقيهم المياه»؟','تحميهم','تُبلّلهم','تُزيّنهم'],
  ['العمل التطوّعيّ هو عمل لخدمة المجتمع:','دون مقابل','مقابل المال','للتسلية فقط'],
  ['ما ضدّ كلمة «انخفض»؟','ارتفع','نزل','هبط'],
  ['في كلمة «الشّمس» لا نلفظ اللام، ونلفظ الحرف بعدها مضعّفًا. ماذا نسمّي هذا الحرف؟','حرفًا شمسيًّا','حرفًا قمريًّا','حرفًا مكسورًا'],
  ['أيّ كلمة تبدأ بلامٍ شمسيّة؟','السعادة','الحياة','الموز'],
  ['«نالَ حاتمٌ الجائزةَ»\nما الفعل الماضي في الجملة؟','نالَ','حاتمٌ','الجائزةَ']]},

 {sem:1, unit:'الوحدة الأولى: الانتماء والمواطنة', t:'الكل سيعمل', q:[
  ['مَن الشخصان اللذان خاطبهما الشاعر في نشيد «الكلّ سيعمل»؟','عامر وماهر','جود وكرم','سامر وريم'],
  ['ما معنى «المِعْوَل» في: «يا عامرُ ناولني المِعول»؟','آلة تُحفر بها الأرض','آلة للكتابة','نوع من الأزهار'],
  ['ما معنى «حُبورًا» في: «ويغنّي فرحًا وحبورًا»؟','سرورًا','حزنًا','تعبًا'],
  ['ما معنى «نُعبِّد دربًا»؟','نمهّد الطريق','نزرع شجرة','نبني بيتًا'],
  ['يدعو النشيد إلى:','التعاون في العمل','النوم والراحة','اللعب فقط'],
  ['ما مفرد كلمة «الطُّرُقات»؟','الطريق','الطرق','الطارق'],
  ['ما جمع كلمة «مَعْمَل»؟','معامل','معملات','معمولون'],
  ['أيّ كلمة لامها قمريّة (تُلفظ اللام)؟','المعمل','التسامح','الدرب'],
  ['«يزرعُ الفلّاحُ الحقلَ»\nما الفعل المضارع في الجملة؟','يزرعُ','الفلّاحُ','الحقلَ'],
  ['الفعل المضارع يدلّ على حدث يقع في:','الزمن الحاضر أو المستقبل','الزمن الماضي فقط','لا يدلّ على زمن']]},

 {sem:1, unit:'الوحدة الثانية: دنيا العلوم', t:'حبة القمح', q:[
  ['قالت حبّة القمح: «أنا القمح رمز ......»','الخير والعطاء','الحزن والتعب','الكسل'],
  ['ماذا يخرج من حبّة القمح حين تهب نفسها للأرض؟','سنبلة خضراء','زهرة حمراء','شجرة زيتون'],
  ['ما معنى «أَهَبُ» في: «أهبُ نفسي للأرض»؟','أمنح','آخذ','أخاف'],
  ['ما عكس كلمة «يَحزن»؟','يَبهج','يُؤلم','يبكي'],
  ['ما العلاقة بين كلمتي «الخير» و«العطاء»؟','كلمة ومرادفها','كلمة وعكسها','مفرد وجمعه'],
  ['أيّ كلمة لا تنتمي إلى عائلة القمح؟','أرزّ','رغيف','طحين'],
  ['«أُساعد والدتي في تحضير الطعام»\nأين كُتبت همزة القطع في «أُساعد»؟','فوق الألف','تحت الألف','على السطر'],
  ['أيّ كلمة تبدأ بهمزة قطع مكتوبة تحت الألف؟','إكرام','أساعد','أرض'],
  ['أيّ الأحرف الآتية أحرف ناصبة للفعل المضارع؟','أنْ – لنْ – كيْ','لمْ – لا','في – من'],
  ['اختر الضبط الصحيح:\n«أريد أنْ ...... الثمار»','تنضجَ','تنضجُ','تنضجْ']]},

 {sem:1, unit:'الوحدة الثانية: دنيا العلوم', t:'العنكبوت', q:[
  ['أين يعيش العنكبوت كما جاء في النشيد؟','في الدار والبستان','في البحر','في السماء'],
  ['من أين تتدفّق خيوط العنكبوت الناعمة؟','من بطنه','من فمه','من رجليه'],
  ['ما غذاء العنكبوت كما جاء في النشيد؟','فرائس تضرّ بالإنسان','أوراق الشجر','العسل'],
  ['ما معنى «الإتقان» في: «يحوك منها مسكنًا في غاية الإتقان»؟','الإجادة','السرعة','الإهمال'],
  ['ما معنى «تحومُ» في: «ذبابةٌ تحومُ في المكان»؟','تدور','تنام','تختفي'],
  ['ما معنى «الكِتمان»؟','الإخفاء','الإظهار','الصراخ'],
  ['ما مفرد كلمة «فرائس»؟','فريسة','فارس','فراسة'],
  ['أكمل بكلمة تبدأ بهمزة قطع:\n«...... المديرُ كلمةً مهمّة»','ألقى','قال','تكلّم'],
  ['أيّ الحرفين يجزمان الفعل المضارع؟','لم – لا الناهية','أن – لن','في – على'],
  ['أدخل «لم» على جملة: «يذهبُ هاني إلى الملعب»','لم يذهبْ هاني إلى الملعب','لم يذهبُ هاني إلى الملعب','لم ذهبَ هاني إلى الملعب']]},

 {sem:1, unit:'الوحدة الثانية: دنيا العلوم', t:'ابنة المحارة', q:[
  ['إلى أين اصطحبت المعلّمة التلاميذ في قصّة «ابنة المحارة»؟','إلى مكتبة المدرسة','إلى شاطئ البحر','إلى الملعب'],
  ['ما «ابنة المحارة»؟','اللؤلؤة','السمكة','الصدفة الفارغة'],
  ['كيف تتشكّل اللؤلؤة؟','تستقرّ حبّة رمل داخل الصدفة فتغلّفها المحارة بطبقات','يصنعها الغوّاص بيده','تسقط من السماء'],
  ['ما معنى «تحلَّقْنا» في: «تحلّقنا حول المعلّمة»؟','جلسنا بشكل دائريّ','وقفنا في صفّ','ركضنا بسرعة'],
  ['ما معنى «نُصغي»؟','نستمع باهتمام','نتكلّم بصوت عالٍ','نكتب'],
  ['ما عكس كلمة «ابتداء»؟','انتهاء','بداية','افتتاح'],
  ['بماذا شبّه الجدّ أحفاده؟','بحبّات اللؤلؤ','بالأصداف','بالأسماك'],
  ['أيّ كلمة تبدأ بهمزة وصل (تُكتب ألفًا ولا تُلفظ في أثناء الكلام)؟','ابتسامة','أحفاد','إكرام'],
  ['«احذرْ يا زيادُ قنديلَ البحر»\nما فعل الأمر في الجملة؟','احذرْ','زيادُ','قنديلَ'],
  ['فعل الأمر هو الفعل الذي يدلّ على:','الطلب','حدث في الماضي','حدث في الحاضر']]},

 {sem:1, unit:'الوحدة الثانية: دنيا العلوم', t:'صديقي القمر', q:[
  ['عن أيّ قمر يتحدّث نشيد «صديقي القمر»؟','القمر الصناعيّ من صنع البشر','القمر الحقيقيّ في السماء','قمر في قصّة خياليّة'],
  ['قال الشاعر للقمر الصناعيّ: «أنتَ للأرض ......»','رسالة','شمس','حديقة'],
  ['ما معنى «روضًا» في: «صرتَ روضًا للثقافة»؟','بستانًا','بحرًا','جبلًا'],
  ['ما معنى «اكتشاف»؟','معرفة المجهول','النسيان','السفر'],
  ['ما معنى «عِبْرة»؟','موعظة','صورة','رحلة'],
  ['من الأجهزة التي نستعملها بمساعدة القمر الصناعيّ:','الجوّال والتلفاز والحاسوب','المِعوَل والمِحراث','الكرسيّ والطاولة'],
  ['أيّ كلمة تبدأ بهمزة وصل؟','اكتشاف','أرض','أخضر'],
  ['«جلسنا على شاطئِ البحر»\nما حرف الجرّ في الجملة؟','على','جلسنا','البحر'],
  ['«تحلّق الطائرةُ في السماءِ»\nما حركة آخر الاسم المجرور «السماء»؟','الكسرة','الضمّة','الفتحة'],
  ['أيّ مجموعة كلّها أحرف جرّ؟','من – إلى – عن – على – في','لم – لا – لن','أن – كي – لن']]},

 {sem:1, unit:'الوحدة الثالثة: أماكن من بلدي', t:'الفيحاء', q:[
  ['ما المدينة التي يتغنّى بها نشيد «الفيحاء»؟','دمشق','حلب','اللاذقية'],
  ['ما الجبل الذي «يحرسُ دمشقَ شامخًا»؟','قاسيون','جبل الشيخ','جبل العرب'],
  ['بماذا شبّه الشاعر دمشق في المقطع الثالث؟','بالأمّ الحنون','بالعروس','بالنجمة'],
  ['ما معنى «شامخًا»؟','فخورًا ومرتفعًا','حزينًا','صغيرًا'],
  ['ما معنى «تُسطِّرُ» في: «تُسطّر بالمجد معنى الحياة»؟','تكتب','تقرأ','تنسى'],
  ['«ويسبحُ فيها القمرُ ببحرةِ ماء» عبارة تمثّل:','خيالًا','حقيقة','رأيًا'],
  ['«في السماءِ قمرٌ منيرٌ»\nالتنوين على «قمرٌ» هو:','تنوين رفع (ضمّتان)','تنوين نصب (فتحتان)','تنوين جرّ (كسرتان)'],
  ['اختر الكتابة الصحيحة:\n«اشتريتُ من المكتبة كتابًا ......»','مفيدًا','مفيدٌ','مفيدٍ'],
  ['حوّل الفعل الماضي «ردَّدَ» إلى فعل أمر:','ردِّدْ','يُردِّدُ','مُردِّد'],
  ['الفعل «يصعدُ» يدلّ على حدث:','يحدث في الزمن الحاضر','حدث في الزمن الماضي','نطلب حدوثه']]},

 {sem:1, unit:'الوحدة الثالثة: أماكن من بلدي', t:'طبيعتنا الجميلة', q:[
  ['عن أيّ مدينة يتحدّث نصّ «طبيعتنا الجميلة»؟','اللاذقية','دمشق','الحسكة'],
  ['بماذا تُلقَّب اللاذقية في النصّ؟','عروس الساحل السوري','الشهباء','الفيحاء'],
  ['كم محميّة طبيعيّة ذُكرت في النصّ؟','خمس محميّات','محميّتان','عشر محميّات'],
  ['ما معنى «تسحر» في: «غابات تسحر العقول»؟','تستميل وتجذب','تُتعب','تُخيف'],
  ['ما ضدّ كلمة «الأفقر»؟','الأغنى','الأصغر','الأبعد'],
  ['ما ضدّ كلمة «إهمال»؟','اهتمام','نسيان','كسل'],
  ['«مياهُ الينابيعِ دافئة»\nأين جاءت الهمزة في كلمة «دافئة»؟','وسط الكلمة على النبرة','أوّل الكلمة','آخر الكلمة'],
  ['«غرّدَ العصفورُ»\nما الفاعل في الجملة؟','العصفورُ','غرّدَ','لا يوجد فاعل'],
  ['«زارَ التلاميذُ الساحلَ السوريّ»\nما حركة آخر الفاعل؟','الضمّة','الفتحة','الكسرة'],
  ['الفاعل هو الاسم الذي يدلّ على:','مَن قام بالفعل','ما وقع عليه الفعل','زمن الفعل']]},

 {sem:1, unit:'الوحدة الثالثة: أماكن من بلدي', t:'الحسكة', q:[
  ['كم عُمر مدينة الحسكة كما جاء في النصّ؟','سبعة آلاف عام','مئة عام','ألف عام'],
  ['ما الأنهار الثلاثة التي تتربّع التلال على ضفافها في الحسكة؟','دجلة والخابور والجغجغ','بردى والعاصي والفرات','النيل والأردن والليطاني'],
  ['الحسكة «أمّ الذهب الأصفر»، والمقصود بالذهب الأصفر:','القمح','النفط','القطن'],
  ['والمقصود بالذهب الأسود:','النفط','القمح','القطن'],
  ['ما معنى «شُيِّدَتْ» في: «شُيِّدت المساجد والكنائس»؟','بُنيت وارتفعت','هُدمت','زُرعت'],
  ['ما جمع كلمة «مسجد»؟','مساجد','مسجدات','سجود'],
  ['أيّ كلمة كُتبت فيها الهمزة المتوسّطة على الواو؟','سُؤال','رأس','مسألة'],
  ['أيّ كلمة كُتبت فيها الهمزة المتوسّطة على الألف؟','مسألة','مسؤول','كؤوس'],
  ['«يزرعُ الفلّاحُ القمحَ»\nما المفعول به في الجملة؟','القمحَ','الفلّاحُ','يزرعُ'],
  ['«شمَّ الولدُ الزهرةَ»\nما حركة آخر المفعول به؟','الفتحة','الضمّة','الكسرة']]},
]);

REPL(5, 'ar', [
 {sem:1, unit:'الوحدة الأولى: المواطنة والانتماء', t:'السمكة الذهبية', q:[
  ['لماذا كان الصيّاد يحلم باصطياد سمكة ذهبيّة؟','ليشتري بثمنها زورقًا للصيد','ليضعها في حوض بيته','ليهديها إلى البحر'],
  ['ما الفكرة التي اقترحها الصيّاد الشابّ؟','أن يصطاد كلٌّ منهم سمكة إضافيّة كلّ يوم ويجمعوا ثمنها','أن يبيعوا شباكهم','أن يتوقّفوا عن الصيد'],
  ['ترمز السمكة الذهبيّة في القصّة إلى:','العمل والتعاون','سمكة من الذهب','غضب البحر'],
  ['ما الاسم الذي أطلقه الصيّادون على مركبهم؟','مركب السمكة الذهبيّة','مركب البحر','مركب الأمل'],
  ['ما معنى «المَغزى» في: «يستفيدوا من مغزاها»؟','المقصد','الحكاية','الصيد'],
  ['ما ضدّ كلمة «فَرِحَ»؟','حَزِنَ','سَعِدَ','ضَحِكَ'],
  ['في أيّ عبارة أعطى الكاتبُ البحرَ صفةً إنسانيّة؟','استمع البحرُ إلى أغاني الصيّادين','يصطاد الصيّادُ السمك','ليس في المياه سمكٌ ذهبيّ'],
  ['«التعاونُ قوّةٌ»\nما نوع هذه الجملة؟','اسميّة','فعليّة','ليست جملة'],
  ['«صنعَ العمّالُ مركبًا»\nما نوع هذه الجملة؟','فعليّة','اسميّة','ليست جملة'],
  ['الهمزة في أوّل كلمة «امنحني» هي:','همزة وصل','همزة قطع','همزة متوسّطة']]},

 {sem:1, unit:'الوحدة الأولى: المواطنة والانتماء', t:'بالرأي والرأي الآخر', q:[
  ['يدعو الشاعر في قصيدة «بالرأي والرأي الآخر» إلى:','الحوار الإيجابيّ','الخصام والشجار','الصمت الدائم'],
  ['بحسب القصيدة، الحكمة لا تنضج إلّا:','بالرأي وبالرأي الآخر','بالخصام','بالفوضى'],
  ['ما معنى «نَحظى» في: «كي نحظى بالمعنى الأجمل»؟','ننال','نفقد','نخاف'],
  ['ما المقصود بالتركيب «أرفعُ صوتي» في القصيدة؟','أعبّر عن رأيي','أصرخ','أخاصم'],
  ['ما ضدّ كلمة «الفوضى»؟','النظام','الضجيج','الخصام'],
  ['ما جمع كلمة «رأي»؟','آراء','رأيات','مرائي'],
  ['المصدر اسمٌ من جنس الفعل يدلّ على حدثٍ:','مجرّد من الزمن','مقترن بزمن ماضٍ','مقترن بزمن حاضر'],
  ['ما مصدر الفعل «ذهبَ»؟','ذهاب','ذاهب','مذهوب'],
  ['ما مصدر الفعل «اشتركَ»؟','اشتراك','مشترك','شريك'],
  ['«أقبلَ مازنٌ على العلم إقبالًا كبيرًا»\nالهمزة في «أقبلَ» و«إقبالًا» هي:','همزة قطع','همزة وصل','همزة متوسّطة']]},

 {sem:1, unit:'الوحدة الأولى: المواطنة والانتماء', t:'لغتي', q:[
  ['عن أيّ لغة يتحدّث الشاعر في قصيدة «لغتي»؟','اللغة العربيّة لغة الضاد','اللغة الإنكليزيّة','لغة الإشارة'],
  ['وصف الشاعر اللغة العربيّة بأنّها رابطة:','تؤلّف بين أبنائها','تفرّق بين الناس','لا قيمة لها'],
  ['ما معنى «المِداد» في: «لكسرتُ أقلامي وعِفتُ مِدادي»؟','سائل يُكتب به (الحبر)','الورق','الكتاب'],
  ['ما معنى «الأنام»؟','الناس','الجبال','النجوم'],
  ['ما معنى «الوِهاد»؟','المنخفض من الأرض','المرتفع من الأرض','البحار'],
  ['ما ضدّ كلمة «تقارب»؟','تباعد','تعاون','تشابه'],
  ['ما ركنا الجملة الفعليّة؟','الفعل والفاعل','المبتدأ والخبر','الفعل والحرف'],
  ['«تحفظُ اللغةُ التراثَ»\nما المفعول به في الجملة؟','التراثَ','اللغةُ','تحفظُ'],
  ['تقع همزة الوصل في أمر الفعل الثلاثيّ، مثل:','اعلمْ','أكرِمْ','أحسِنْ'],
  ['أيّ اسم مما يأتي يبدأ بهمزة وصل؟','ابن','أب','أمّ']]},

 {sem:1, unit:'الوحدة الثانية: العلم والتقانة', t:'مخترع من بلدي', q:[
  ['ماذا ابتكر المخترع سليمان محمود حين رأى أمّه تخيط ثوبًا بالإبرة؟','آلة خياطة','مذياعًا','سيّارة'],
  ['السيّارة التي اخترعها تستمدّ طاقتها من:','الشمس','الفحم','الماء'],
  ['ماذا كانت تولّد المروحة التي وضعها على سطح منزله؟','الطاقة الكهربائيّة','الماء','الصوت'],
  ['ما «الدرّاسة» التي اخترعها لخدمة الزراعة؟','آلة لفصل الحبوب عن القشّ','آلة لسقاية الأرض','آلة للخياطة'],
  ['ما معنى التركيب «يُحلّق بأفكاره إلى النجوم»؟','يتخيّل ويطمح إلى أمور عظيمة','يطير بطائرة','ينام كثيرًا'],
  ['الجملة الاسميّة تتكوّن من ركنين أساسيّين هما:','المبتدأ والخبر','الفعل والفاعل','الفعل والمفعول به'],
  ['«العلمُ أساسٌ للتحضّر»\nما المبتدأ في الجملة؟','العلمُ','أساسٌ','للتحضّر'],
  ['«الشمسُ مشرقةٌ»\nما الخبر في الجملة؟','مشرقةٌ','الشمسُ','لا يوجد خبر'],
  ['«العاملاتُ نشيطاتٌ»\nما علامة رفع المبتدأ والخبر؟','الضمّة','الفتحة','الكسرة'],
  ['أكمل الجملة الاسميّة بخبر مناسب:\n«القراءةُ ......»','مفيدةٌ','مفيدةً','تُفيدَ']]},

 {sem:1, unit:'الوحدة الثانية: العلم والتقانة', t:'الذكاء الاصطناعي', q:[
  ['أين كان سامي حين جلس أمام حاسبه صباح العيد؟','في بعثة دراسيّة خارج الجمهوريّة العربيّة السوريّة','في بيته مع أسرته','في المدرسة'],
  ['ادّعى الحاسب أنّه:','أكثر إبداعًا من سامي','لا يحفظ شيئًا','يحبّ اللعب'],
  ['بماذا ردّ سامي على الحاسب؟','الإبداع يحتاج إلى فكر، والحاسب لا يقدّم إلّا ما أودعه الإنسان','الحاسب أذكى من الإنسان','الإنسان لا يفكّر'],
  ['ما معنى «أطرقَ» في: «أطرقَ الحاسبُ حزينًا»؟','سكت','ضحك','صرخ'],
  ['ما معنى «أودعَ»؟','وضع في','أخذ من','نسي'],
  ['ما مفرد كلمة «نواقل»؟','ناقل','نقل','منقول'],
  ['لتحويل الجملة الفعليّة إلى جملة اسميّة نقدّم:','الفاعل على الفعل','الفعل على الفاعل','المفعول به على الفاعل'],
  ['حوّل إلى جملة اسميّة:\n«يبرمجُ الخبيرُ الحاسبَ»','الخبيرُ يبرمجُ الحاسبَ','الحاسبُ يبرمجُ الخبيرَ','يبرمجُ الحاسبَ الخبيرُ'],
  ['تُكتب التاء مربوطة في آخر:','الاسم المفرد المؤنّث مثل: شجرة','الفعل مثل: كتبتْ','جمع المؤنّث السالم مثل: كاتبات'],
  ['لماذا كُتبت التاء مبسوطة في كلمة «وقت»؟','لأنّها اسم ثلاثيّ ساكن الوسط','لأنّها فعل','لأنّها جمع مؤنّث سالم']]},

 {sem:1, unit:'الوحدة الثانية: العلم والتقانة', t:'بالعلم نرقى', q:[
  ['ينصح الشاعرُ الطالبَ في قصيدة «بالعلم نرقى» أن يتّخذ صديقًا هو:','الكتاب','الحاسوب','اللعب'],
  ['ما معنى «مُستطاب» في: «تجنِ شهدًا مستطابا»؟','طيّب','مُرّ','بعيد'],
  ['ما معنى «العُجمة» في: «فاحذروا العُجمة دابا»؟','الكلام غير الفصيح','الكلام الفصيح','الشعر الجميل'],
  ['ما ضدّ كلمة «العُجمة»؟','الفصاحة','الغموض','السكوت'],
  ['ما مفرد كلمة «الهِضاب»؟','هضبة','هاضب','مهضوب'],
  ['يدعو الشاعر إلى العلم المقترن بـ:','الأخلاق','الغرور','الكسل'],
  ['الفعل الماضي فعلٌ:','مبنيّ دائمًا','معرب دائمًا','مجزوم دائمًا'],
  ['«نالَ المتفوّقُ جائزةً»\nعلى ماذا بُني الفعل «نالَ»؟','الفتح','الضمّ','السكون'],
  ['«الكتابُ والتقنياتُ عمِلا على تسهيل المعرفة»\nبُني الفعل «عمِلا» على الفتح لأنّه اتّصلت به:','ألف الاثنين','واو الجماعة','تاء الفاعل'],
  ['تُكتب التاء في آخر كلمة «المعلّمات»:','مبسوطة لأنّها جمع مؤنّث سالم','مربوطة لأنّها مؤنّث','مربوطة لأنّها اسم']]},

 {sem:1, unit:'الوحدة الثالثة: إبداعات من وطني', t:'العلماء الصغار', q:[
  ['يتحدّث نشيد «العلماء الصغار» عن تلاميذ:','يجدّون في طلب العلم ولا يخشون الفشل','يخافون من المجهول','يتركون الدراسة'],
  ['ما معنى «نتوانى» في: «ننهلُ علمًا لا نتوانى»؟','نتكاسل ونتباطأ','نُسرع','نفرح'],
  ['ما معنى «نسمو» في: «نسمو للأقمار»؟','نرتفع ونعلو','ننزل','ننام'],
  ['ما جمع كلمة «الحلّ»؟','الحلول','الحلّات','المحلول'],
  ['يكون الفعل المضارع مرفوعًا وعلامة رفعه الضمّة إذا:','لم يسبقه ناصب أو جازم','سبقه حرف ناصب','سبقه حرف جازم'],
  ['«يدرسُ المجدُّ كي يتفوّقَ»\nما علامة نصب الفعل «يتفوّقَ»؟','الفتحة','الضمّة','السكون'],
  ['من الأحرف الجازمة للفعل المضارع:','لم – لا الناهية – لام الأمر','أن – لن – كي','في – من – إلى'],
  ['اختر الضبط الصحيح:\n«لا ...... وقتك»','تُضيّعْ','تُضيّعُ','تُضيّعَ'],
  ['لكتابة الهمزة المتوسّطة ننظر إلى حركتها وحركة الحرف الذي قبلها، ونكتبها على ما يناسب:','أقوى الحركتين','أضعف الحركتين','حركة آخر الكلمة'],
  ['ترتيب الحركات من الأقوى إلى الأضعف:','الكسرة ثم الضمّة ثم الفتحة ثم السكون','الفتحة ثم الضمّة ثم الكسرة ثم السكون','السكون ثم الفتحة ثم الضمّة ثم الكسرة']]},

 {sem:1, unit:'الوحدة الثالثة: إبداعات من وطني', t:'حلمي حقيقة', q:[
  ['ما اللعبة التي طلبتها المعلّمة في نصّ «حلمي حقيقة»؟','أن يغمض كلّ تلميذ عينيه ويتخيّل حلمًا يقصّه على زملائه','أن يرسموا البحر','أن يقرؤوا قصّة'],
  ['بماذا حلمت سحر؟','بالفوز بجائزة الأولمبياد العلميّ ممثّلةً لأبناء وطنها','بأن تصبح طبّاخة','بالسفر إلى البحر'],
  ['ما معنى «التميُّز»؟','التفرّد والتفوّق على الآخرين في أمر معيّن','الكسل','التقليد'],
  ['ما معنى «الطموح»؟','الأمل المصحوب بالسعي إلى الأمجاد والمراتب العليا','الخوف من المستقبل','الرضا بالقليل'],
  ['ما معنى «الإبداع»؟','الاختراع والإنشاء والإجادة في العمل','النسخ والتقليد','الإهمال'],
  ['يُبنى فعل الأمر الصحيح الآخر على:','السكون','الفتح','الضمّ'],
  ['«اقرأْ كتابًا في الأسبوع»\nما فعل الأمر في الجملة؟','اقرأْ','كتابًا','الأسبوع'],
  ['اختر الضبط الصحيح لفعل الأمر:\n«...... أفكارك في أثناء الكتابة»','رتِّبْ','رتِّبَ','رتِّبُ'],
  ['كُتبت الهمزة المتوسّطة على النبرة في «أفئِدة» لأنّ:','حركتها الكسرة وهي الأقوى','الضمّة قبلها أقوى','الفتحة هي الأقوى'],
  ['من صفات الإعلان الناجح:','شائق، وعباراته موجزة وجذّابة','طويل جدًّا وكثير الكلمات','بلا عنوان ولا ألوان']]},

 {sem:1, unit:'الوحدة الثالثة: إبداعات من وطني', t:'الخط العربي', q:[
  ['مَن يُعَدّ «المهندس الأوّل للخطّ العربيّ»؟','ابن مقلة','ابن البوّاب','مصطفى غزلان بك'],
  ['لماذا عُدَّ ابن مقلة المهندسَ الأوّل للخطّ العربيّ؟','لأنّه ابتكر القوانين والقواعد لكلّ حرف','لأنّه بنى المساجد','لأنّه اخترع الورق'],
  ['يعود الفضل في تطوير الخطّ الديوانيّ إلى:','مصطفى غزلان بك','محمد بدوي الديراني','ابن مقلة'],
  ['ما الاسم الحقيقيّ للخطّاط السوريّ محمد حسني؟','حسني البابا','محمد بن أسد','ابن البوّاب'],
  ['من أنواع الخطوط العربيّة:','الرقعة والنسخ والثلث والديوانيّ والكوفيّ','الخطّ اللاتينيّ','الخطّ الصينيّ'],
  ['من أهمّ ميزات الخطّ العربيّ كما ذكر الكاتب:','أصالته الضاربة في عمق التاريخ','أنّه حديث العهد','أنّه لا يُستعمل في الزخرفة'],
  ['«أجرى الباحثُ دراسةً»\nكلمة «الباحث» اسم فاعل من الفعل:','بحثَ','درسَ','أجرى'],
  ['اسم المفعول من الفعل الثلاثيّ «جهلَ» هو:','مجهول','جاهل','جهل'],
  ['اسم الفاعل اسمٌ يدلّ على:','مَن قام بالفعل','مَن وقع عليه الفعل','زمن الفعل'],
  ['يُصاغ اسم المفعول من الفعل الثلاثيّ على وزن:','مفعول','فاعل','فعيل']]},
]);

})();
(function(){
/* العربية لغتي الصف السادس — من كتاب ٢٠٢٥–٢٠٢٦ */
function REPL(g, s, sem, lessons) { const old = (CUR[g][s] || []).filter(l => l.sem !== sem); CUR[g][s] = sem === 1 ? lessons.concat(old) : old.concat(lessons); }
REPL(6, 'ar', 1, [
 {sem:1, unit:'الوحدة الأولى: المواطنة والانتماء', t:'يوم لا يُنسى', q:[
  ['في نصّ «يوم لا يُنسى»، ما الحملة التي شارك فيها أخو كندة في الجامعة؟','حملة التبرّع بالدم','حملة تشجير الحدائق','حملة تنظيف الشوارع'],
  ['ماذا صمّمت كندة لتعرض فكرتها على زملائها؟','لوحة في وسطها قطرة دم','مجلّة حائط عن الأشجار','بطاقة تهنئة بالعيد'],
  ['ما الفكرة التي اقترحها كنان لأنّ أعمارهم لا تسمح لهم بالتبرّع؟','استقبال المتبرّعين في مركز نقل الدم','جمع المال للمرضى','زيارة المرضى في المشفى'],
  ['ما معنى «التبرُّع» كما ورد في النصّ؟','العطاء من غير طلب أو أجر','البيع بثمن قليل','الطلب من الآخرين'],
  ['ما معنى «بُزوغ الشمس»؟','بدء طلوع الشمس','غروب الشمس','شدّة حرارة الشمس'],
  ['«لمعَتْ فكرةٌ برأسي»\nما معنى «لمعَت» هنا؟','خطرت فجأة','أضاءت في السماء','انطفأت'],
  ['ما علامة الترقيم التي توضع بعد القول أو ما في معناه، وعند الشرح والتفسير؟','النقطتان (:)','الفاصلة (،)','النقطة (.)'],
  ['ما علامة الترقيم التي توضع بين الجمل القصيرة المتعاطفة أو المتّصلة في المعنى؟','الفاصلة (،)','علامة التعجّب (!)','النقاط المتتالية (...)'],
  ['«ضحكتْ ندى ...»\nعلامَ تدلّ النقاط المتتالية (...)؟','على أنّ الكلام فيه حذف أو أنّه لم ينتهِ','على أنّ الجملة استفهاميّة','على بداية فقرة جديدة'],
  ['«ما أجملَ علاماتِ الترقيم في لغتنا!»\nلماذا وُضعت علامة (!) في آخر الجملة؟','لأنّها جملة تعجّب','لأنّها جملة استفهام','لأنّ المعنى لم يتمّ']]},

 {sem:1, unit:'الوحدة الأولى: المواطنة والانتماء', t:'شاعر وانتماء', q:[
  ['عن أيّ شاعر يتحدّث نصّ «شاعر وانتماء»؟','سليمان العيسى','معروف الرصافي','حافظ إبراهيم'],
  ['في أيّ قرية نشأ الشاعر سليمان العيسى؟','النعيريّة في لواء الإسكندرون','قرية في الغوطة','قرية قرب حمص'],
  ['بماذا حلم سليمان العيسى طوال عمره؟','بالوحدة العربيّة','بالسفر حول العالم','بجمع المال'],
  ['ما معنى «يَهْجِسُ» في: «من كلّ الذي يهجس في الضلوع»؟','يخطر في باله','يصرخ بصوت عالٍ','ينام طويلًا'],
  ['ما معنى «المُشْبَعَة» في: «بإيقاعاتها المحبّبة المشبعة بقيم الخير»؟','الممتلئة','الفارغة','الحزينة'],
  ['«تعلّقَ شاعرُنا باللغة العربيّة»\nعلامَ بُني الفعل «تعلّقَ»؟','على الفتح لأنّه لم يتّصل به شيء','على السكون','على الضمّ'],
  ['«قرأْتُ الكثيرَ عن سليمان العيسى»\nعلامَ بُني الفعل «قرأْتُ» لاتّصاله بالتاء المتحرّكة؟','على السكون','على الفتح','على الضمّ'],
  ['«حفظُوا القصائدَ عن ظهر قلب»\nعلامَ بُني الفعل الماضي «حفظُوا»؟','على الضمّ لاتّصاله بواو الجماعة','على الفتح لاتّصاله بواو الجماعة','على السكون لاتّصاله بواو الجماعة'],
  ['في أيّ الجمل الآتية بُني الفعل الماضي على الفتح؟','رافقا الشاعرَ في رحلته','ردّدْنَ الأناشيدَ','استمتعْنا بكلماته'],
  ['أيّ الكلمات الآتية تبدأ بهمزة وصل؟','اجتمعت','أخي','إدارة']]},

 {sem:1, unit:'الوحدة الأولى: المواطنة والانتماء', t:'مبادرون', q:[
  ['عن أيّ فئة يتحدّث الشاعر في قصيدة «مبادرون»؟','الشباب','المسنّين','الأطفال الرضّع'],
  ['«إنّ الشبابَ دعائمُ الأوطانِ»\nما معنى «دعائم» ومفردها «الدِّعامة»؟','السَّنَد','الهدم','العائق'],
  ['شبّه الشاعر جهود الشباب حين سطعت بـ:','عِقد الجُمان (اللؤلؤ)','ضوء القمر','زهور الربيع'],
  ['ما معنى «التواني» في: «ويتمّمون النقص دون توانِ»؟','التقصير','السرعة','الفرح'],
  ['أيّ صفة ليست من صفات الشباب المبادرين في النصّ؟','انتظار دعوة الآخرين لبدء العمل','التفاني في العمل','العمل في فِرَق متآزرة'],
  ['«صمّمَ الجميعُ على العمل»\nما نوع الفاعل في الجملة؟','اسم ظاهر','ضمير متّصل','ضمير مستتر'],
  ['«حفظْنا ثلاثةَ أبياتٍ من النصّ»\nما الفاعل في الجملة؟','«نا» الدالّة على الفاعلين، ضمير متّصل','ثلاثة، اسم ظاهر','ضمير مستتر تقديره «هو»'],
  ['«أرغبُ أن نلتقطَ صورةً»\nما فاعل الفعل «أرغبُ»؟','ضمير مستتر تقديره «أنا»','صورةً','ضمير مستتر تقديره «نحن»'],
  ['«أنا ...... وجبةً غذائيّةً متوازنةً»\nما الكتابة الصحيحة للفعل المضارع من «أكل»؟','آكلُ','أأكلُ','أاكلُ'],
  ['لماذا رُسمت الهمزة مدّة في كلمة «آمال»؟','لأنّ الهمزة جاءت بعدها همزة ساكنة','لأنّها همزة وصل','لأنّها في آخر الكلمة']]},

 {sem:1, unit:'الوحدة الثانية: لغتنا العربيّة', t:'أسرار الكلمات', q:[
  ['في نصّ «أسرار الكلمات»، ما الذي لفت انتباه الكاتب في غرفة المعيشة عند جدّته؟','لوحة مؤطّرة على الجدار','مكتبة كبيرة','ساعة قديمة'],
  ['ما الكلمة التي اكتشفها الحفيدان في اللوحة؟','الحقّ','المحبّة','الصدق'],
  ['ما معنى «مُؤطَّرة» في: «تلك اللوحة المؤطّرة»؟','محاطة بإطار','ممزّقة','ملوّنة بالأحمر'],
  ['ما معنى «الباهتة» في: «أرى ألوانها باهتة»؟','الشاحبة','الزاهية','اللامعة'],
  ['ما ضدّ كلمة «الشاسعة» في: «آفاقها الشاسعة»؟','الضيّقة','الواسعة','البعيدة'],
  ['«انتبهَ الأطفالُ إلى لوحةٍ عند الباب»\nما نوع الفعل «انتبه» من حيث اللزوم والتعدّي؟','لازم يكتفي بفاعله','متعدٍّ يحتاج إلى مفعول به','مبنيّ للمجهول'],
  ['أيّ الجمل الآتية فعلها متعدٍّ؟','رسمَ الفنّانُ لوحةً','نجحَ العالِمُ في اختراعه','فرحَ الطفلُ بالهديّة'],
  ['الفعل المتعدّي هو الفعل الذي:','لا يكتفي بفاعله، ويحتاج إلى مفعول به لإتمام المعنى','يكتفي بفاعله فقط','ليس له فاعل'],
  ['ما الكتابة الصحيحة لاسم الفاعل من الفعل «باع»؟','بائع','باءع','بائئع'],
  ['في كتابة الهمزة المتوسّطة، ما أقوى الحركات؟','الكسرة','الضمّة','الفتحة']]},

 {sem:1, unit:'الوحدة الثانية: لغتنا العربيّة', t:'أنا الفصحى', q:[
  ['مَن الذي يتكلّم في قصيدة «أنا الفصحى»؟','اللغة العربيّة الفصحى','الشاعر عن نفسه','شجرة الزيتون'],
  ['«وبالأهداب أرعى مُقْلةَ العربِ»\nما معنى «مُقلة»؟','عين','يد','قلب'],
  ['ما مفرد كلمة «آفاق»؟','أُفُق','أفيق','آفة'],
  ['«يردّده زئيرُ الريح في الآفاق»\nهذه العبارة تُعدّ:','خيالًا','حقيقة','رأيًا'],
  ['«حَفِظَتِ اللغةُ العربيّةُ تاريخَنا»\nما نوع الفعل «حفظت» من حيث البناء؟','مبنيّ للمعلوم','مبنيّ للمجهول','فعل أمر'],
  ['الفعل المبنيّ للمجهول هو الفعل الذي:','كان فاعله مجهولًا غير معلوم','ذُكر فاعله في الجملة','لا يحتاج إلى فاعل أبدًا'],
  ['كيف يُبنى الفعل الماضي للمجهول؟','بضمّ أوّله وكسر ما قبل آخره','بفتح أوّله وضمّ ما قبل آخره','بكسر أوّله وفتح ما قبل آخره'],
  ['«يُحفَظُ تاريخُنا»\nما إعراب «تاريخُ»؟','نائب فاعل مرفوع','فاعل مرفوع','مفعول به منصوب'],
  ['ما الفعل المضارع المبنيّ للمجهول من «يكرّمُ»؟','يُكَرَّمُ','يُكَرِّمُ','كُرِّمَ'],
  ['«ومن أشهر خطباء العرب قُسُّ بنُ ساعدة ......»\nما علامة الترقيم المناسبة في نهاية الجملة؟','النقطة (.)','علامة الاستفهام (؟)','النقطتان (:)']]},

 {sem:1, unit:'الوحدة الثانية: لغتنا العربيّة', t:'عشقت الضاد', q:[
  ['«بني العروبة مُدّوا للعلوم يدًا»\nإلامَ يدعو الشاعر علي الجارم في هذا البيت؟','إلى طلب العلم','إلى السفر','إلى الراحة'],
  ['بحسب القصيدة، قيمة الناس في:','التجريب والإتقان','المال والجاه','كثرة الكلام'],
  ['ما معنى «مُؤتمَر» كما ورد في النصّ؟','اجتماع للتشاور والبحث في أمر ما','مكتبة كبيرة','قصيدة طويلة'],
  ['ما معنى «تزدهي الفصحى»؟','تتفاخر','تحزن','تختفي'],
  ['ما معنى «الخِذلان»؟','الخزي والخيبة','النصر والفرح','الكرم والعطاء'],
  ['ما الكتاب الذي نبحث فيه عن معنى كلمة مثل «رقراق»؟','المعجم','الأطلس','الديوان'],
  ['لماذا كُتبت الهمزة على السطر في كلمة «قراءة»؟','لأنّها مفتوحة بعد ألف ساكنة','لأنّها مكسورة','لأنّها في أوّل الكلمة'],
  ['لماذا كُتبت الهمزة على السطر في كلمة «مملوءة»؟','لأنّها مفتوحة بعد واو ساكنة','لأنّها بعد ياء ساكنة','لأنّها همزة قطع'],
  ['ما الكتابة الصحيحة للهمزة في كلمة «بيـ...ـة»؟','بيئة','بيأة','بيءة'],
  ['«صُوِّبَتِ الأخطاءُ»\nما نائب الفاعل في الجملة؟','الأخطاءُ','صُوِّبت','التاء']]},

 {sem:1, unit:'الوحدة الثالثة: مواهب وهوايات', t:'تزيين أوقاتي', q:[
  ['«فما الحياةُ بأوقاتٍ تضيعُ سُدى»\nبماذا تكون الحياة عند الشاعر؟','بتنظيم الأوقات','بالنوم الطويل','باللعب طوال اليوم'],
  ['ما معنى «الطموح» كما ورد في معجم النصّ؟','الآمال','المخاوف','الذكريات'],
  ['ما معنى «أنأى» في: «فأنأى عن معاناتي»؟','أبتعد','أقترب','أبكي'],
  ['«الهواية» هي:','عمل محبّب نقوم به في وقت الفراغ','عمل نُجبر عليه','واجب مدرسيّ'],
  ['ما جمع كلمة «فنّ»؟','فنون','فنّانون','أفنان'],
  ['«هي بستانٌ جميلٌ»\nما إعراب الضمير «هي»؟','ضمير رفع منفصل مبنيّ في محلّ رفع مبتدأ','ضمير نصب منفصل في محلّ نصب','ضمير متّصل في محلّ رفع فاعل'],
  ['ما ضمير الرفع المنفصل الذي يدلّ على جماعة الغائبات؟','هُنَّ','هُم','أنتُنَّ'],
  ['«...... صادقان بعزمكما على التفوّق»\nما الضمير المناسب؟','أنتما','نحن','هم'],
  ['لماذا كُتبت الألف اللينة ممدودة في الفعل «نما»؟','لأنّه ثلاثيّ أصل ألفه واو (ينمو)','لأنّ أصل ألفه ياء','لأنّه أكثر من ثلاثة أحرف'],
  ['ما الكتابة الصحيحة للفعل الماضي من «يسقي»؟','سقى','سقا','سقي']]},

 {sem:1, unit:'الوحدة الثالثة: مواهب وهوايات', t:'الأبطال صنعها', q:[
  ['في أيّ بطولة فاز الفريق السوريّ في نصّ «الأبطال صنعها»؟','بطولة التحكّم الآليّ (الروبوتيك)','بطولة كرة القدم','بطولة السباحة'],
  ['منذ أيّ عام تشارك الفرق السوريّة في أولمبياد الروبوت العالميّ؟','٢٠١٥م','٢٠٠٠م','٢٠٢٠م'],
  ['ما المرتبة التي أحرزها الفريق السوريّ عام ٢٠١٨م في تايلاند؟','المرتبة الثالثة','المرتبة الأولى','المرتبة العاشرة'],
  ['ما معنى «عارمة» في: «شعرتُ برغبةٍ عارمةٍ»؟','كبيرة','ضعيفة','غريبة'],
  ['«التحكّم الآليّ (الروبوتيك)» هو:','آلة ميكانيكيّة قادرة على القيام بأعمال مبرمجة سابقًا','لعبة إلكترونيّة للتسلية','جهاز لقياس الحرارة'],
  ['«إيّاكَ نحبُّ»\nما إعراب «إيّاك»؟','ضمير نصب منفصل مبنيّ في محلّ نصب مفعول به مقدّم','ضمير رفع منفصل في محلّ رفع مبتدأ','فاعل مرفوع'],
  ['ما ضمير النصب المنفصل الذي يدلّ على المثنّى الغائب؟','إيّاهما','إيّاكما','إيّاهم'],
  ['«المُخلصُ إيّاهُ نحترمُ»\nعلامَ يدلّ الضمير «إيّاه»؟','المفرد المذكّر الغائب','المفرد المذكّر المخاطب','جماعة المتكلّمين'],
  ['أيّ الكلمات الآتية كُتب فيها تنوين النصب دون زيادة ألف؟','معلنةً','فوزًا','كتابًا'],
  ['ما الكتابة الصحيحة لتنوين النصب في «جعلَ المثابرةَ ......» (رداء)؟','رداءً','رداءًا','رداءَا']]},

 {sem:1, unit:'الوحدة الثالثة: مواهب وهوايات', t:'درب الريادة', q:[
  ['«نشأتُ كبذرةٍ في خير أرضٍ»\nبمَ شبّه الشاعر نفسه في البيت الأوّل؟','بالبذرة','بالشجرة الكبيرة','بالماء'],
  ['ما الهوايتان اللتان ذكرهما الشاعر في البيت الثاني؟','العلم والرسم','السباحة والجري','الغناء والطبخ'],
  ['«بأقلام الطموح أصوغ حلمي»\nما معنى «أصوغ»؟','أكوّن','أنسى','أهدم'],
  ['ما معنى «الريادة»؟','القيادة أو الرئاسة','الراحة','الخوف'],
  ['ما معنى «يأبى» في: «ويأبى المجدُ أن يلقى الكسولا»؟','لا يرضى','يحبّ','ينتظر'],
  ['بحسب البيت الأخير، مَن يحبّ المجدُ؟','مَن يبقى مُجِدًّا','الكسول','مَن ينام كثيرًا'],
  ['ما الميزان الصرفيّ للفعل الثلاثيّ «نَجَحَ»؟','فَعَلَ','فَعْلَلَ','فاعَلَ'],
  ['في الفعل «بَدَأَ»، ما الحرف الذي يقابل «لام الفعل»؟','الهمزة','الباء','الدال'],
  ['ما الميزان الصرفيّ للفعل الرباعيّ «بَرْهَنَ»؟','فَعْلَلَ','فَعَلَ','فَعَّلَ'],
  ['«تنشأ الهواية كبذرة فتعطي ثمارًا يانعةً»\nلماذا زيدت ألف بعد تنوين النصب في «ثمارًا»؟','لأنّها لا تنتهي بتاء مربوطة ولا بهمزة','لأنّها تنتهي بتاء مربوطة','لأنّها تنتهي بهمزة بعد ألف']]},
]);

})();
(function(){
/* التربية الإسلامية — من كتب ٢٠٢٥–٢٠٢٦ */
function REPL(g, s, sem, lessons) { const old = (CUR[g][s] || []).filter(l => l.sem !== sem); CUR[g][s] = sem === 1 ? lessons.concat(old) : old.concat(lessons); }

/* الصف الثاني — الفصل الأول (الوحدة الأولى: أدب واحترام، الوحدة الثانية: أنا إنسان) */
REPL(2, 'isl', 1, [
 {sem:1, unit:'القرآن الكريم', t:'احترام الوقت', q:[
  ['أقسم الله تعالى في سورة العصر بـ:','الزمن (الوقت)','الشمس','القمر','البحر'],
  ['معنى كلمة «العصر» في السورة:','الزمن','المدينة','القرية'],
  ['استثمار الوقت يكون بـ:','تنظيمه','إضاعته','إهماله'],
  ['التلميذ الناجح:','ينظّم وقته بين الدراسة واللعب','يلعب طوال اليوم','يسهر على التلفاز'],
  ['من حقي أن ألعب، ومن واجبي أن:','أنظّم وقتي','أترك دروسي','أنام في وقت المدرسة'],
  ['أذهب إلى مدرستي:','في الوقت المحدد','متأخراً كل يوم','متى أشاء'],
  ['من الأعمال المفيدة في وقت الفراغ:','قراءة القرآن الكريم والمطالعة','إزعاج الجيران','إضاعة الوقت بلا فائدة'],
  ['أول ما يفعله المسلم إذا استيقظ باكراً:','يصلي الفجر','يعود إلى النوم','يشاهد التلفاز'],
  ['الوقت نعمة من الله، لذلك:','نحرص على استثماره','نضيّعه في اللهو','لا نهتم به']]},
 {sem:1, unit:'القرآن الكريم', t:'سورة العصر', q:[
  ['عدد آيات سورة العصر:','٣','٥','٧','٤'],
  ['الآية التي تأتي بعد «والعصر»:','إن الإنسان لفي خسر','قل هو الله أحد','إذا جاء نصر الله'],
  ['معنى «تواصوا» في السورة:','تناصحوا','تخاصموا','تسابقوا'],
  ['«الصبر» هو القدرة على:','تحمّل الصعاب','اللعب','النوم'],
  ['ضد كلمة «الحق»:','الباطل','الصبر','الصدق'],
  ['ضد كلمة «خسر»:','الفوز','الضرر','الحزن'],
  ['يفوز الإنسان برضا الله إذا:','آمن وعمل صالحاً وتواصى بالحق والصبر','لعب كثيراً','أضاع وقته'],
  ['من العمل الصالح:','مساعدة المحتاجين','السرقة','إيذاء الآخرين'],
  ['من الأعمال غير الصالحة:','استعمال أدوات الآخرين دون استئذانهم','قراءة القرآن الكريم','مساعدة المحتاجين'],
  ['نتعلّم من سورة العصر أن:','نعمل الخير وننصح الآخرين به','نضيّع الوقت','نترك النصيحة']]},
 {sem:1, unit:'الحديث الشريف', t:'أحب الخير', q:[
  ['أكمل الحديث: «المسلم من سلم المسلمون من لسانه...»:','ويده','وماله','وبيته'],
  ['روى حديث «المسلم من سلم المسلمون من لسانه ويده»:','الإمام البخاري','الإمام مالك','الإمام الشافعي'],
  ['من حفظ اللسان:','قول الكلام الطيب','الشتم','الكذب'],
  ['من حفظ اليد:','لا نؤذي الآخرين','نأخذ أغراض غيرنا','نرمي المهملات في الحديقة'],
  ['من الأمور التي يحبها الله تعالى:','مساعدة الناس','إيذاء الآخرين','الكلام البذيء'],
  ['نحافظ على نظافة المدارس والحدائق بـ:','عدم رمي المهملات','قطف الأزهار','الكتابة على الجدران'],
  ['إذا وجدت شيئاً في الصف:','أعطيه إلى المعلمة','آخذه لنفسي','أرميه'],
  ['أتكلم مع أصدقائي:','بلطف','بصراخ','بكلام قبيح'],
  ['عدم أخذ أغراض الآخرين دون إذنهم من:','حفظ اليد','حفظ اللسان','الأكل'],
  ['قول الصدق من:','حفظ اللسان','حفظ اليد','اللعب']]},
 {sem:1, unit:'الأخلاق', t:'بطاقة الدخول إلى قلوب الآخرين', q:[
  ['بطاقة الدخول إلى قلوب الآخرين هي:','التحية (السلام)','الهدية الغالية','الصمت'],
  ['تحية المسلمين:','السلام عليكم','صباح الخير فقط','مرحباً فقط'],
  ['نرد على «السلام عليكم» بمثلها بقولنا:','وعليكم السلام','شكراً','إلى اللقاء'],
  ['الرد بأحسن منها:','وعليكم السلام ورحمة الله','أهلاً','وعليكم'],
  ['أمرنا الله إذا حيّانا أحد أن:','نرد بأحسن منها أو بمثلها','نسكت','نبتعد عنه'],
  ['قال النبي ﷺ: «أفشوا السلام...»:','بينكم','في بيوتكم فقط','للكبار فقط'],
  ['من فوائد التحية:','انتشار المحبة','الخصام','الخوف'],
  ['ألقي التحية على:','الكبير والصغير','الكبير فقط','أصدقائي فقط'],
  ['إذا خاصمت صديقي:','ألقي التحية عليه','لا أسلّم عليه','أبتعد عنه دائماً'],
  ['ألقي التحية على الآخرين بوجه:','بشوش','عابس','غاضب']]},
 {sem:1, unit:'الأخلاق', t:'أدب الانصراف', q:[
  ['عندما أنصرف من مكان أقول:','السلام عليكم','لا أقول شيئاً','أخرج مسرعاً'],
  ['من العبارات المناسبة عند الانصراف:','إلى اللقاء','صباح الخير','أهلاً وسهلاً'],
  ['إذا أردت أن أنام مساءً أقول لأهلي:','تصبحون على خير','صباح الخير','مع السلامة يا صديقي'],
  ['عندما أذهب إلى المدرسة:','أودّع أمي وأسلّم عليها','أخرج دون أن أخبر أحداً','أغلق الباب بقوة'],
  ['قبل أن أنصرف من عند أصدقائي:','أستأذن منهم','أهرب دون كلام','أغضب'],
  ['الاستئذان عند الانصراف:','خلق جميل','عيب','غير مهم'],
  ['الاستئذان عند الانصراف فيه:','احترام لنفسي وللآخرين','إزعاج للآخرين','تضييع للوقت'],
  ['الأدب عند الدخول إلى الصف:','إلقاء التحية','الصراخ','الدخول دون كلام'],
  ['أشعر عندما ألتزم بأدب الانصراف أنني:','مهذّب يحبني الناس','حزين','وحيد']]},
 {sem:1, unit:'القرآن الكريم', t:'نعم الله تعالى', q:[
  ['«الضحى» هو:','أول النهار','آخر النهار','منتصف الليل'],
  ['معنى «سجى» في قوله تعالى «والليل إذا سجى»:','سكن وأظلم','أضاء','انتهى'],
  ['أقسم الله تعالى في أول سورة الضحى بـ:','الضحى والليل','التين والزيتون','العصر'],
  ['ضد كلمة «الليل»:','النهار','الضحى','القمر'],
  ['ضد كلمة «الآخرة»:','الأولى (الدنيا)','الجنة','النهار'],
  ['معنى «يتيماً»:','الصغير الذي مات أبوه','الفقير','الغني'],
  ['معنى «عائلاً»:','فقيراً','غنياً','قوياً'],
  ['معنى «هدى»:','أرشد','ترك','أغنى'],
  ['معنى «تنهر» في قوله «وأما السائل فلا تنهر»:','تزجر','تساعد','تعطي'],
  ['واجبنا تجاه نعم الله علينا:','أن نشكره ونحمده','أن ننساها','أن نتفاخر بها']]},
 {sem:1, unit:'القرآن الكريم', t:'سورة الضحى', q:[
  ['عدد آيات سورة الضحى:','١١','٨','٣','١٥'],
  ['الآية التي تأتي بعد «والضحى»:','والليل إذا سجى','والعصر','ألم نشرح لك صدرك'],
  ['أكمل: «ألم يجدك يتيماً...»:','فآوى','فهدى','فأغنى'],
  ['أكمل: «ووجدك ضالاً...»:','فهدى','فآوى','فأغنى'],
  ['أكمل: «ووجدك عائلاً...»:','فأغنى','فهدى','فآوى'],
  ['أكمل: «فأما اليتيم فلا...»:','تقهر','تنهر','تنسَ'],
  ['آخر آية في سورة الضحى:','وأما بنعمة ربك فحدّث','وأما السائل فلا تنهر','ولسوف يعطيك ربك فترضى'],
  ['معنى «تقهر»:','تؤذي','تساعد','تُطعم'],
  ['معنى «السائل»:','المحتاج','الغني','المعلم'],
  ['تخاطب سورة الضحى:','النبي محمداً ﷺ','موسى عليه السلام','قريشاً']]},
 {sem:1, unit:'الحديث الشريف', t:'خير البيوت', q:[
  ['خير البيوت بيت فيه:','يتيم يُكرَم','مال كثير','ألعاب كثيرة'],
  ['أكمل الحديث: «أنا وكافل اليتيم في الجنة...»:','كهاتين','كالنجوم','كالأخوين'],
  ['أشار النبي ﷺ عندما قال «كهاتين» بـ:','إصبعيه','يده كلها','رأسه'],
  ['كفالة اليتيم هي:','رعايته والإحسان إليه','الإساءة إليه','تركه وحده'],
  ['جعفر بن أبي طالب رضي الله عنه هو:','ابن عم النبي ﷺ','عم النبي ﷺ','جد النبي ﷺ'],
  ['لما استشهد جعفر رضي الله عنه:','كفل النبي ﷺ أبناءه','تركهم النبي ﷺ','سافر أبناؤه بعيداً'],
  ['نشأ النبي ﷺ:','يتيماً','بين أبيه وأمه حتى كبر','في بلاد الشام'],
  ['توفي والد النبي ﷺ:','قبل أن يولد','وعمره عشر سنوات','بعد أن تزوج'],
  ['نحسن إلى اليتيم معنوياً بـ:','الاحترام والكلمة الطيبة','الضحك عليه','إهماله'],
  ['نُدخل الفرح إلى قلب اليتيم بـ:','تقديم الهدايا له','إبعاده عن اللعب','الصراخ عليه']]},
 {sem:1, unit:'السيرة', t:'اعتماده ﷺ على نفسه', q:[
  ['اسم والد النبي ﷺ:','عبد الله','عبد المطلب','أبو طالب'],
  ['اسم أم النبي ﷺ:','آمنة بنت وهب','حليمة السعدية','خديجة'],
  ['جد النبي ﷺ الذي رعاه بعد وفاة أمه:','عبد المطلب','أبو طالب','عبد الله'],
  ['كفل النبيَّ ﷺ بعد وفاة جده:','عمه أبو طالب','عمه حمزة','أبو بكر'],
  ['كان عمر النبي ﷺ عندما توفي جده:','ثماني سنوات','سنة واحدة','عشرين سنة'],
  ['بدأ النبي ﷺ العمل بـ:','رعي الغنم','التجارة إلى الهند','صناعة السيوف'],
  ['عمل النبي ﷺ برعي الغنم في:','مكة المكرمة','المدينة المنورة','بلاد الشام'],
  ['كان النبي ﷺ يحب العمل لأن العمل:','متعة وعبادة','تعب بلا فائدة','للأغنياء فقط'],
  ['من صفات النبي ﷺ:','الصدق والأمانة','الكذب','الكسل'],
  ['أقتدي بالنبي ﷺ في الاعتماد على نفسي فـ:','أقوم بواجباتي المدرسية وأرتب غرفتي','أنتظر غيري ليعمل عني','لا أرتب أغراضي']]}
]);

/* الصف الثاني — الفصل الثاني (الوحدة الثالثة: أماكن وأشخاص مكرّمون، الوحدة الرابعة: خلق كريم) */
REPL(2, 'isl', 2, [
 {sem:2, unit:'القرآن الكريم', t:'أماكن مشرفة', q:[
  ['التين والزيتون شجرتان مباركتان تشتهر بهما:','بلاد الشام','بلاد الهند','الصحراء الكبرى'],
  ['«طور سينين» هو:','جبل في سيناء كلّم الله عنده موسى عليه السلام','نهر في الشام','مدينة في اليمن'],
  ['«البلد الأمين» هو:','مكة المكرمة','دمشق','القدس'],
  ['في مكة المكرمة:','الكعبة المشرفة','جبل الطور','المسجد الأقصى'],
  ['بيت المقدس في:','بلاد الشام','بلاد الحجاز','سيناء'],
  ['بعث الله تعالى في مكة المكرمة النبي:','محمداً ﷺ','موسى عليه السلام','عيسى عليه السلام'],
  ['النبي الذي كلّمه الله عند جبل الطور:','موسى عليه السلام','محمد ﷺ','نوح عليه السلام'],
  ['معنى «أحسن تقويم»:','أحسن صورة','أصعب عمل','أكبر حجم'],
  ['معنى «غير ممنون»:','دائم لا ينقطع','قليل','سريع الانتهاء'],
  ['«أليس الله بأحكم الحاكمين» تعني أن الله تعالى:','لا يظلم أحداً','يغضب دائماً','لا يرى الناس']]},
 {sem:2, unit:'القرآن الكريم', t:'سورة التين', q:[
  ['عدد آيات سورة التين:','٨','١١','٥','٣'],
  ['الآية التي تأتي بعد «والتين والزيتون»:','وطور سينين','وهذا البلد الأمين','والليل إذا سجى'],
  ['الآية التي تأتي بعد «وطور سينين»:','وهذا البلد الأمين','لقد خلقنا الإنسان في أحسن تقويم','والعصر'],
  ['آخر آية في سورة التين:','أليس الله بأحكم الحاكمين','ثم رددناه أسفل سافلين','وهذا البلد الأمين'],
  ['أقسم الله تعالى في سورة التين بـ:','التين والزيتون وطور سينين والبلد الأمين','الشمس والقمر','العصر'],
  ['خلق الله الإنسان:','في أحسن صورة','في صورة قبيحة','بلا عقل'],
  ['أجر الذين آمنوا وعملوا الصالحات:','غير ممنون (دائم)','قليل','ينتهي بسرعة'],
  ['الإنسان الذي يعمل الخير في شبابه:','يحفظه الله في كِبَره','يتعب في كبره','ينساه الناس'],
  ['نشكر الله على أن خلقنا في أحسن صورة بـ:','طاعته وفعل الخير','التكبّر على الناس','إضاعة الوقت'],
  ['من واجبي تجاه الأماكن المقدسة:','أن أقدّرها وأحترمها','أن أهملها','أن أنساها']]},
 {sem:2, unit:'الحديث الشريف', t:'احترام الوالدين', q:[
  ['سأل رجلٌ النبيَّ ﷺ: من أحق الناس بحسن صحابتي؟ فقال:','أمك','صديقك','جارك'],
  ['قال النبي ﷺ «أمك»:','ثلاث مرات','مرة واحدة','مرتين'],
  ['بعد الأم ذكر النبي ﷺ:','أباك','أخاك','معلمك'],
  ['معنى «حسن الصحبة»:','المعاملة الحسنة','الإساءة','كثرة العتاب'],
  ['حملتني أمي في بطنها:','تسعة أشهر','تسعة أسابيع','سنة كاملة'],
  ['رضا الله تعالى من رضا:','الوالدين','الأصدقاء','الجيران'],
  ['أمرنا الله تعالى بعبادته وحده و:','الإحسان إلى الوالدين','ترك الوالدين','الغضب على الوالدين'],
  ['أخاطب أمي وأبي:','بأدب واحترام','بصوت مرتفع','بالتأفف'],
  ['إذا طلبت أمي مني مراجعة دروسي:','أستجيب لها وأراجع دروسي','أتابع اللعب','أغضب'],
  ['يعمل والداي ويسهران من أجل:','راحتي وتأمين حاجاتي','إزعاجي','لا شيء']]},
 {sem:2, unit:'السيرة', t:'رحلته ﷺ إلى بلاد الشام', q:[
  ['كانت قريش ترسل قوافلها إلى بلاد الشام في:','الصيف','الشتاء','الربيع'],
  ['كانت قريش ترسل قوافلها إلى اليمن في:','الشتاء','الصيف','الخريف'],
  ['السورة التي ذكرت رحلة الشتاء والصيف:','سورة قريش','سورة الإخلاص','سورة العصر'],
  ['سافر النبي ﷺ إلى الشام وهو صغير برفقة:','عمه أبي طالب','جده عبد المطلب','أمه آمنة'],
  ['كان أبو طالب يعمل في:','التجارة','الزراعة','الصيد'],
  ['المدينة التي وصلت إليها القافلة في الشام:','بُصرى','دمشق','حلب'],
  ['الراهب الذي لفت النبي ﷺ انتباهه:','بحيرى','ورقة بن نوفل','أبو جهل'],
  ['الراهب هو:','رجل دين متفرغ لعبادة الله','تاجر','راعي غنم'],
  ['القوافل التجارية مجموعة من الناس يسافرون بهدف:','البيع والشراء','السياحة','الحرب'],
  ['أخبر بحيرى أبا طالب أن ابن أخيه سيكون له:','شأن عظيم','مال كثير','بيت كبير']]},
 {sem:2, unit:'القرآن الكريم', t:'انتصار الحق', q:[
  ['السورة التي تتحدث عن نصر الله والفتح:','سورة النصر','سورة التين','سورة الضحى'],
  ['عدد آيات سورة النصر:','٣','٥','٨','١١'],
  ['المقصود بـ«الفتح» في سورة النصر:','فتح مكة المكرمة','فتح باب البيت','فتح الكتاب'],
  ['معنى «أفواجاً»:','جماعات كثيرة','فرداً فرداً','قليلاً'],
  ['الآية التي تأتي بعد «إذا جاء نصر الله والفتح»:','ورأيت الناس يدخلون في دين الله أفواجاً','فسبّح بحمد ربك واستغفره','والعصر'],
  ['معنى «توّاباً»:','يقبل توبة الناس','يغضب كثيراً','يعاقب دائماً'],
  ['أمر الله نبيه ﷺ بعد النصر أن:','يسبّح بحمد ربه ويستغفره','يفتخر بنصره','ينتقم من أعدائه'],
  ['عندما فتح النبي ﷺ مكة قال لأهلها:','اذهبوا فأنتم الطلقاء','سأعاقبكم','اخرجوا من مكة'],
  ['نال النبي ﷺ محبة الناس لأنه:','يعطف على الصغير ويحترم الكبير ويعفو','كان يؤذي الناس','كان ينتقم ممن ظلمه'],
  ['إذا أساء إليّ صديقي:','أسامحه','أنتقم منه','أقاطعه للأبد']]},
 {sem:2, unit:'الحديث الشريف', t:'الرحمة', q:[
  ['أكمل الحديث: «الراحمون يرحمهم...»:','الرحمن','الناس','أصدقاؤهم'],
  ['أكمل: «ارحموا من في الأرض...»:','يرحمكم من في السماء','يحبكم الناس','تنجحوا'],
  ['معنى الرحمة:','الرقة واللين','القسوة','القوة'],
  ['ضد الرحمة:','القسوة','الرقة','اللين'],
  ['من أسماء الله الحسنى الدالة على الرحمة:','الرحيم','القوي','العظيم'],
  ['من الرحمة بالحيوان:','إطعام القط الجائع','ضربه','حبسه بلا طعام'],
  ['من الرحمة بالنبات:','سقي الشجرة العطشى','قطف الأزهار وتركها','كسر الأغصان'],
  ['من الرحمة بالإنسان:','مساعدة من وقع على الأرض','الضحك عليه','تركه يبكي'],
  ['من يرفع صوته في وجه أخيه يتصف بـ:','القسوة','الرحمة','الحكمة'],
  ['من فوائد الرحمة:','أفوز برحمة الله ويحبني الناس','يبتعد الناس عني','لا فائدة لها']]},
 {sem:2, unit:'السيرة', t:'حكمته ﷺ', q:[
  ['اختلف سادة مكة عند إعادة بناء الكعبة على:','وضع الحجر الأسود في مكانه','لون الكعبة','مكان بئر زمزم'],
  ['الحجر الأسود حجر كريم من:','الجنة','جبل الطور','بلاد الشام'],
  ['حلّ النبي ﷺ الخلاف بأن:','بسط رداءه ووضع عليه الحجر','أخذ الحجر لنفسه','ترك الحجر مكانه'],
  ['طلب النبي ﷺ من كل سيد من سادة القبائل أن:','يأخذ بناحية من الثوب','يذهب إلى بيته','يحمل الحجر وحده'],
  ['الذي وضع الحجر الأسود في مكانه:','النبي محمد ﷺ','عبد المطلب','أبو طالب'],
  ['رضي سادة مكة بحكم النبي ﷺ لأنه:','حكيم صادق أمين','غني جداً','قوي البدن'],
  ['من الحكمة:','حل المشكلات','إثارة المشكلات','الانتقام'],
  ['الكعبة المشرفة في:','مكة المكرمة','المدينة المنورة','القدس'],
  ['يقصد المسلمون الكعبة لأداء فريضة:','الحج','الصيام','الزكاة'],
  ['الإنسان الصادق هو الذي:','يقول الحقيقة','يكذب أحياناً','يخفي الحق']]}
]);

})();
(function(){
/* التربية الإسلامية الصفوف ١، ٤، ٥، ٦ — من كتب ٢٠٢٥–٢٠٢٦ */
function REPL(g, s, sem, lessons) { const old = (CUR[g][s] || []).filter(l => l.sem !== sem); CUR[g][s] = sem === 1 ? lessons.concat(old) : old.concat(lessons); }

/* الصف الأول — الفصل الأول (الوحدات: أحب القرآن الكريم، أشكر الله تعالى على نعمه، أحب نبيي ﷺ، أحلى الكلام) */
REPL(1, 'isl', 1, [
 {sem:1, unit:'القرآن الكريم', t:'أحترم القرآن الكريم', q:[
  ['القرآن الكريم هو:','كتاب الله تعالى','كتاب قصص','كتاب حساب'],
  ['عندما أبدأ بقراءة القرآن الكريم أقول أولاً:','أعوذ بالله من الشيطان الرجيم','صباح الخير','الله أكبر'],
  ['بعد الاستعاذة أقول:','بسم الله الرحمن الرحيم','الحمد لله','آمين'],
  ['معنى «أعوذ بالله»:','أحتمي وألتجئ إلى الله','أنام','ألعب'],
  ['أقرأ القرآن الكريم وأنا:','طاهر نظيف','آكل','ألعب'],
  ['أمسك المصحف بيدين:','نظيفتين','متسختين','فيهما طعام'],
  ['أضع المصحف في:','مكان نظيف مرتفع','على الأرض','بين الألعاب'],
  ['عندما يُقرأ القرآن الكريم:','أستمع وأنصت','أتكلم بصوت عالٍ','أضحك وألعب'],
  ['نزل القرآن الكريم على:','سيدنا محمد ﷺ','سيدنا موسى عليه السلام','سيدنا نوح عليه السلام']]},
 {sem:1, unit:'القرآن الكريم', t:'أحمد الله تعالى (سورة الفاتحة)', q:[
  ['سورة الفاتحة هي أول سورة في:','القرآن الكريم','كتاب الرياضيات','كتاب العلوم'],
  ['عدد آيات سورة الفاتحة:','سبع آيات','أربع آيات','عشر آيات'],
  ['معنى «الحمد لله»:','الشكر والثناء لله','النوم','الطعام'],
  ['معنى «العالمين»:','جميع المخلوقات','الطيور فقط','البحار فقط'],
  ['اسم من أسماء الله تعالى ورد في سورة الفاتحة:','الرحيم','الصمد','الأحد'],
  ['«مالك يوم الدين»، يوم الدين هو:','يوم القيامة','يوم الجمعة','يوم العيد'],
  ['«إياك نعبد» معناها:','نعبدك وحدك يا الله','نعبد الأصنام','نعبد الشمس'],
  ['معنى «نستعين»:','نطلب المساعدة','نلعب','ننام'],
  ['الكلمات التي تأتي بعد «الحمد لله»:','رب العالمين','مالك يوم الدين','إياك نعبد'],
  ['نحمد الله تعالى لأنه:','أنعم علينا بنعم كثيرة','يحتاج إلينا','لا يعطينا شيئاً']]},
 {sem:1, unit:'القرآن الكريم', t:'هداية الله تعالى (سورة الفاتحة)', q:[
  ['ندعو الله تعالى في سورة الفاتحة فنقول:','اهدنا الصراط المستقيم','قل هو الله أحد','لإيلاف قريش'],
  ['«الصراط المستقيم» هو:','طريق الخير والإسلام','طريق الشر','طريق السوق'],
  ['أكمل: «اهدنا الصراط ...»:','المستقيم','الطويل','الواسع'],
  ['«الذين أنعمت عليهم» هم:','الأنبياء والصالحون والشهداء والصديقون','الذين عرفوا الحق وتركوه','الذين ضلوا عن الحق'],
  ['«المغضوب عليهم» هم:','الذين عرفوا الحق وتركوه عمداً','الأنبياء','الصالحون'],
  ['«الضالين» هم:','الذين تركوا الحق عن جهل وضلال','الشهداء','الصديقون'],
  ['آخر كلمة في سورة الفاتحة:','الضالين','المستقيم','العالمين'],
  ['بعد الانتهاء من قراءة الفاتحة نقول:','آمين','السلام عليكم','بسم الله'],
  ['نطلب الهداية من:','الله تعالى','الأصنام','النجوم']]},
 {sem:1, unit:'القرآن الكريم', t:'أحب القرآن الكريم', q:[
  ['أتعلم القرآن الكريم لأفوز بـ:','محبة الله تعالى','الجوائز فقط','التباهي على أصدقائي'],
  ['القرآن الكريم يهديني إلى:','الخير','الشر','الكسل'],
  ['القرآن الكريم كلام:','الله تعالى','الملائكة','الشعراء'],
  ['الحديث الشريف هو كلام:','الرسول ﷺ','الشعراء','المعلمين'],
  ['«الحمد لله رب العالمين» هي:','آية قرآنية','حديث شريف','قصيدة'],
  ['«خيركم من تعلم القرآن وعلمه» هو:','حديث شريف','آية قرآنية','مثل شعبي'],
  ['أستمع إلى القرآن الكريم:','بانتباه وهدوء','وأنا ألعب','وأنا أصرخ'],
  ['من آداب قراءة القرآن الكريم:','الجلوس بأدب','الاستلقاء والضحك','الأكل أثناء القراءة'],
  ['أحب القرآن الكريم لأنه:','كتاب الله الذي يهديني','كتاب ألعاب','كتاب قصص خيالية']]},
 {sem:1, unit:'الحديث الشريف', t:'أعلّم القرآن الكريم', q:[
  ['أكمل الحديث الشريف: «خيركم من تعلم القرآن ...»:','وعلمه','ونسيه','وتركه'],
  ['معنى كلمة «خيركم»:','أفضلكم','أصغركم','أطولكم'],
  ['خير الناس كما في الحديث الشريف:','من تعلم القرآن وعلمه','من لعب كثيراً','من نام كثيراً'],
  ['قائل الحديث الشريف «خيركم من تعلم القرآن وعلمه»:','النبي محمد ﷺ','المعلم','الجد'],
  ['كلمة وردت في الحديث الشريف:','خيركم','الصلاة','الصيام'],
  ['أعلّم غيري:','آيات القرآن الكريم','الكلام السيئ','الكذب'],
  ['إذا سمعت غيري يقرأ القرآن الكريم:','أنصت وأستمع','أتكلم','أضحك'],
  ['عندما أعلّم أخي الصغير سورة الفاتحة فأنا:','أعمل عملاً يحبه الله','أضيّع وقتي','أفعل شيئاً سيئاً'],
  ['أتعلم القرآن الكريم من:','معلمي ووالديّ','الرسوم المتحركة','الشارع']]},
 {sem:1, unit:'العقيدة', t:'نعم الله تعالى', q:[
  ['الذي أنعم علينا بالنعم الكثيرة هو:','الله تعالى','الأصنام','الشمس'],
  ['من نعم الله تعالى علينا:','نعمة الأمان','الخوف','المرض'],
  ['الأسرة التي تعيش بأمان تنعم بنعمة:','الأمن','الحرب','الجوع'],
  ['يتجول الأطفال في الحديقة بأمان، وهذه من نعمة:','الأمان','الخوف','الحزن'],
  ['البرتقال والتفاح والليمون من:','نعم الله تعالى','الألعاب','الأدوات'],
  ['من نعم الله تعالى في جسمي:','العينان أرى بهما','الكسل','الغضب'],
  ['نشكر الله تعالى على نعمه فنقول:','الحمد لله','لا شيء','وداعاً'],
  ['نحافظ على نعم الله تعالى بـ:','عدم الإسراف فيها','رمي الطعام','إفساد الماء'],
  ['المسلم الذي يرى نعم الله تعالى:','يشكره عليها','ينساها','يغضب']]},
 {sem:1, unit:'القرآن الكريم', t:'أعبد الله تعالى (سورة قريش)', q:[
  ['السورة التي ورد فيها «أطعمهم من جوع»:','سورة قريش','سورة الفاتحة','سورة الإخلاص'],
  ['عدد آيات سورة قريش:','أربع آيات','سبع آيات','ثلاث آيات'],
  ['الكلمة التي تأتي بعد «لإيلاف»:','قريش','الفيل','الناس'],
  ['من نعم الله تعالى على قريش التي وردت في السورة:','الطعام والأمان','الذهب والفضة','البحار والأنهار'],
  ['«أطعمهم من جوع» أي:','رزقهم الطعام','تركهم جائعين','منعهم الماء'],
  ['«وآمنهم من خوف» أي:','أعطاهم الأمان','أخافهم','أبعدهم'],
  ['أمر الله تعالى قريشاً أن يعبدوا:','رب هذا البيت','الأصنام','النجوم'],
  ['«البيت» المذكور في السورة هو:','الكعبة المشرفة','بيت المعلم','بيت الجيران'],
  ['رحلة الشتاء والصيف كانت لـ:','التجارة','النزهة','الصيد']]},
 {sem:1, unit:'الأخلاق', t:'أبدأ باسم الله', q:[
  ['قبل أن آكل أقول:','بسم الله','الحمد لله','آمين'],
  ['بعد أن أنتهي من الطعام أقول:','الحمد لله','بسم الله','أعوذ بالله'],
  ['قبل أن أشرب الماء أقول:','بسم الله','وداعاً','مع السلامة'],
  ['إذا نسيت التسمية في أول الطعام ثم تذكرت أقول:','بسم الله أوله وآخره','لا أقول شيئاً','أتوقف عن الأكل'],
  ['أبدأ دراستي بقول:','بسم الله الرحمن الرحيم','لا أقول شيئاً','أنا متعب'],
  ['أسمي الله تعالى عند بدء:','كل عمل مفيد','الكذب','الشجار'],
  ['أسمي الله تعالى عند بدء عملي ليـ:','يبارك الله لي فيه','أتعب','أنساه'],
  ['عندما أدخل البيت أقول:','بسم الله والسلام عليكم','لا أقول شيئاً','أصرخ'],
  ['بعد أن أشرب الماء أقول:','الحمد لله','بسم الله','صباح الخير']]},
 {sem:1, unit:'الحديث الشريف', t:'آداب الطعام', q:[
  ['أكمل الحديث الشريف: «سمِّ الله، وكُلْ ...»:','بيمينك','بشمالك','بسرعة'],
  ['«وكُلْ مما يليك» أي:','من الجانب الذي أمامك','من صحن غيرك','من كل الجهات'],
  ['آكل بيدي:','اليمنى','اليسرى','كلتيهما معاً دائماً'],
  ['أغسل يديّ بالماء والصابون:','قبل الطعام وبعده','قبل النوم فقط','لا أغسلهما'],
  ['قائل الحديث الشريف «سمِّ الله وكُلْ بيمينك»:','النبي محمد ﷺ','المعلم','الطبيب'],
  ['أجلس حول المائدة:','بأدب وهدوء','وأنا ألعب','وأنا أركض'],
  ['بقايا الطعام:','لا أرميها على الأرض','أرميها على الأرض','أرميها على أصدقائي'],
  ['أتناول الطعام:','وأنا جالس بهدوء','وأنا ألعب','وأنا أركض'],
  ['بعد الطعام:','أنظف أسناني','أنام فوراً','أترك يديّ متسختين']]},
 {sem:1, unit:'السيرة', t:'مولد النبي ﷺ', q:[
  ['وُلد النبي محمد ﷺ في:','مكة المكرمة','المدينة المنورة','القدس'],
  ['اليوم الذي وُلد فيه النبي ﷺ:','الاثنين','الجمعة','الثلاثاء'],
  ['الشهر الذي وُلد فيه النبي ﷺ:','ربيع الأول','رمضان','تشرين الثاني'],
  ['العام الذي وُلد فيه النبي ﷺ:','عام الفيل','عام الحزن','عام الهجرة'],
  ['أبو النبي ﷺ:','عبد الله','عبد المطلب','أبو طالب'],
  ['أم النبي ﷺ:','آمنة بنت وهب','حليمة السعدية','خديجة'],
  ['جد النبي ﷺ:','عبد المطلب','عبد الله','وهب'],
  ['ينتسب النبي ﷺ إلى قبيلة:','قريش','ثقيف','الأوس'],
  ['سكنت قبيلة قريش في:','مكة المكرمة','الشام','اليمن']]},
 {sem:1, unit:'السيرة', t:'وُلد الهدى', q:[
  ['فرحت بولادة النبي ﷺ أمه:','السيدة آمنة بنت وهب','السيدة حليمة','السيدة خديجة'],
  ['الذي اختار اسم «محمد» للنبي ﷺ:','جده عبد المطلب','عمه أبو طالب','أبوه عبد الله'],
  ['وُلد النبي ﷺ يتيماً لأن أباه:','توفي قبل ولادته','كان مسافراً','كان مريضاً'],
  ['مرضعة النبي ﷺ هي:','حليمة السعدية','آمنة بنت وهب','خديجة'],
  ['أُرسل النبي ﷺ للرضاعة إلى:','البادية','المدينة','الشام'],
  ['عاش النبي ﷺ طفولته المبكرة في:','البادية','المدينة','الطائف'],
  ['كان العرب يرسلون أولادهم إلى البادية ليصبحوا:','فصحاء أقوياء','أغنياء','تجاراً'],
  ['تتميز البادية بـ:','هواء نقي ومكان واسع','الزحام','الضجيج'],
  ['من يرعى الطفل في أسرته:','الأم والأب','الجيران فقط','لا أحد']]},
 {sem:1, unit:'السيرة', t:'عناية الله تعالى بنبيه ﷺ', q:[
  ['ذهب النبي ﷺ مع أمه لزيارة أخوال أبيه في:','المدينة المنورة','الطائف','الشام'],
  ['توفيت السيدة آمنة وهي:','عائدة إلى مكة المكرمة','في الشام','في اليمن'],
  ['كان عمر النبي ﷺ عند وفاة أمه:','ست سنوات','أربع سنوات','عشر سنوات'],
  ['اعتنى بالنبي ﷺ بعد وفاة أمه:','جده عبد المطلب','عمه أبو لهب','مرضعته حليمة'],
  ['قدّم عبد المطلب للنبي ﷺ:','الحب والحنان والرعاية','القسوة','الإهمال'],
  ['فقد النبي ﷺ في صغره:','أباه وأمه','جده وعمه','إخوته'],
  ['من عناية الله تعالى بنبيه ﷺ أنه:','هيّأ له من يرعاه','تركه وحيداً','أبعده عن أهله'],
  ['أساعد أمي في:','أعمالها','إزعاجها','إهمالها'],
  ['أفراد أسرتي:','يساعد بعضهم بعضاً','يتشاجرون دائماً','لا يهتم أحد بالآخر']]},
 {sem:1, unit:'الأخلاق', t:'الصدق', q:[
  ['الصدق أن أقول:','الحقيقة','الخيال','الكذب'],
  ['في القصة: كسرت الكرة زجاج:','نافذة غرفة الرياضة','باب الصف','سيارة المدير'],
  ['عندما سأل المعلم «من رمى الكرة؟» قال أويس:','أنا يا أستاذ','لا أعرف','زميلي'],
  ['أُعجب المعلم بـ:','صدق أويس','كذب أويس','هروب أويس'],
  ['إذا أخطأت:','أعترف بخطئي','أكذب','ألوم غيري'],
  ['أكون صادقاً مع:','أهلي ومعلمي وأصدقائي','نفسي فقط','لا أحد'],
  ['أكون صادقاً في:','قولي وعملي','بعض الأيام','اللعب فقط'],
  ['عكس الصدق:','الكذب','الأمانة','الشجاعة'],
  ['الإنسان الصادق يحبه:','الله تعالى والناس','لا أحد','الكاذبون فقط']]},
 {sem:1, unit:'الحديث الشريف', t:'نظافتي', q:[
  ['أكمل الحديث الشريف: «الطهور شطر ...»:','الإيمان','الطعام','اللعب'],
  ['معنى «الطهور»:','النظافة','السلامة','الهدوء'],
  ['معنى «شطر»:','نصف','ربع','ثلث'],
  ['قائل الحديث الشريف «الطهور شطر الإيمان»:','النبي محمد ﷺ','المعلم','الطبيب'],
  ['أرمي المهملات في:','سلة المهملات','الصف','الطريق'],
  ['أستحم دائماً لأحافظ على:','نظافتي','ألعابي','كتبي'],
  ['أحافظ على نظافة مدرستي فلا:','أكتب على جدرانها','أرتب صفي','أنظف مقعدي'],
  ['أحافظ على نظافة جسمي بـ:','غسل يديّ وقص أظافري','ترك يديّ متسختين','عدم الاستحمام'],
  ['النظافة من:','الإيمان','الكسل','الإهمال']]},
 {sem:1, unit:'القرآن الكريم', t:'سورة الإخلاص', q:[
  ['عدد آيات سورة الإخلاص:','أربع آيات','سبع آيات','ثلاث آيات'],
  ['أكمل: «قل هو الله ...»:','أحد','الصمد','العالمين'],
  ['أكمل: «الله ...»:','الصمد','أحد','الرحيم'],
  ['معنى «الصمد»:','الذي تحتاج إليه المخلوقات في كل الأوقات','الذي يحتاج إلى غيره','الذي ينام'],
  ['أكمل: «لم يلد ولم ...»:','يولد','يكن','ينم'],
  ['معنى «ولم يكن له كفواً أحد»:','الله لا شبيه له ولا مثيل','لله شريك','لله أولاد'],
  ['آخر كلمة في سورة الإخلاص:','أحد','الصمد','يولد'],
  ['السورة التي تبدأ بـ«قل هو الله أحد»:','سورة الإخلاص','سورة الفاتحة','سورة قريش'],
  ['تعلمنا سورة الإخلاص أن الله تعالى:','واحد لا شريك له','له شركاء','يشبه المخلوقات']]},
 {sem:1, unit:'الحديث الشريف', t:'أحلى الكلام', q:[
  ['أكمل الحديث الشريف: «والكلمة الطيبة ...»:','صدقة','سهلة','قصيرة'],
  ['معنى «الطيبة»:','الجيدة الحسنة','السيئة','الطويلة'],
  ['معنى «صدقة»:','حسنة','نجاح','لعبة'],
  ['عندما يساعدني أحد أقول له:','شكراً','لا شيء','ابتعد'],
  ['عندما أودّع صديقي أقول:','مع السلامة','اذهب','لا أقول شيئاً'],
  ['إذا أخطأت في حق صديقي أقول:','أعتذر منك','لا يهمني','أنت المخطئ'],
  ['عندما ألقى أصدقائي أقول:','السلام عليكم','لا أقول شيئاً','ابتعدوا'],
  ['من فوائد الكلمة الطيبة:','محبة الناس ورضا الله','الشجار','الحزن'],
  ['الكلمة الطيبة تجعل الناس:','يحبونني','يبتعدون عني','يغضبون مني']]},
 {sem:1, unit:'السيرة', t:'رعاية الله تعالى لنبيه ﷺ', q:[
  ['كان عمر النبي ﷺ عندما توفي جده عبد المطلب:','ثماني سنوات','ست سنوات','عشر سنوات'],
  ['كفل النبي ﷺ بعد وفاة جده:','عمه أبو طالب','أبوه عبد الله','جده وهب'],
  ['رعى أبو طالب النبي ﷺ في:','طفولته وشبابه','شيخوخته','أيام قليلة'],
  ['اصطحب أبو طالب النبي ﷺ في رحلة تجارية إلى:','الشام','اليمن','مصر'],
  ['أول من توفي من أهل النبي ﷺ:','أبوه عبد الله قبل ولادته','جده عبد المطلب','عمه أبو طالب'],
  ['توفيت أم النبي ﷺ وعمره:','ست سنوات','ثماني سنوات','سنة واحدة'],
  ['أبو طالب هو:','عم النبي ﷺ','أخو النبي ﷺ','ابن النبي ﷺ'],
  ['اهتمت أسرة النبي ﷺ به بـ:','رعايته والعناية به','إهماله','إبعاده'],
  ['أشكر من يرعاني من:','والديّ وأقاربي','لا أحد','الغرباء فقط']]}
]);

})();
(function(){
/* التربية الدينية الإسلامية — الصفوف ٤، ٥، ٦ — مطابقة لكتب وزارة التربية السورية ٢٠٢٥–٢٠٢٦ (الكتاب للفصلين) */
function REPL(g, s, sem, lessons) { const old = (CUR[g][s] || []).filter(l => l.sem !== sem); CUR[g][s] = sem === 1 ? lessons.concat(old) : old.concat(lessons); }

/* الصف الرابع — الفصل الأول (الوحدات ١–٣ كما في الصفحة الأولى من فهرس الكتاب) */
REPL(4, 'isl', 1, [
 {sem:1, unit:'القرآن الكريم', t:'من سورة النحل (تلاوة)', q:[
  ['رقم سورة النحل في المصحف الشريف:','السادسة عشرة','الثامنة عشرة','العاشرة','الثانية عشرة'],
  ['عدد آيات سورة النحل:','مئة وثمانٍ وعشرون آية','مئة آية','خمسون آية','تسع وعشرون آية'],
  ['معنى «رواسي» في الآيات:','جبالاً ثوابت','أنهاراً جارية','نجوماً لامعة','أشجاراً عالية'],
  ['معنى «أن تميد بكم»:','لئلا تتحرك الأرض وتضطرب بكم','لكي تسيروا عليها','لكي تزرعوها','لكي تشربوا منها'],
  ['معنى «سُبُلاً»:','طرقاً','بحاراً','بيوتاً','حدائق'],
  ['معنى «لا تحصوها»:','لا تستطيعوا عدّها','لا تحبوها','لا تشكروها','لا تروها'],
  ['سخّر الله تعالى البحر لنأكل منه:','لحماً طريّاً','خبزاً','فاكهة','عسلاً'],
  ['يهتدي المسافرون في الليل بـ:','النجوم','الغيوم','الرياح','الأمواج'],
  ['أكمل: «وإن تعدّوا نعمة الله ...»:','لا تحصوها','فاشكروها','كثيرة','عظيمة'],
  ['أشكر الله تعالى على نعمه:','بالقول والعمل','بالقول فقط','بالعمل فقط','لا أشكره']]},
 {sem:1, unit:'القرآن الكريم', t:'من سورة النحل (استحفاظ): مجتمع النحل', q:[
  ['معنى «وأوحى ربك إلى النحل»:','ألهمها وأرشدها','أمرها بالنوم','جعلها تطير فقط','أخافها'],
  ['معنى «بيوتاً» في الآية:','أوكاراً تبنيها النحل','قصوراً','مدارس','سفناً'],
  ['معنى «يعرشون»:','ما يبنيه الناس ويجعلونه عريشة للنبات','ما يأكلونه','ما يلبسونه','ما يشربونه'],
  ['معنى «سُبُل ربك ذُلُلاً»:','الطرق التي هيّأها لك ربك وسهّلها','الطرق الصعبة','الجبال العالية','البحار العميقة'],
  ['الشراب المختلف ألوانه الذي يخرج من بطون النحل هو:','العسل','الحليب','الماء','العصير'],
  ['قال تعالى عن العسل: «فيه ...»:','شفاء للناس','طعام للأنعام','زينة للبيوت','سمّ للناس'],
  ['تأكل النحل من:','كل الثمرات والأزهار','الحجارة','الرمال','الملح'],
  ['مجتمع النحل قائم على:','التعاون والنظام والعمل الدؤوب','الكسل والفوضى','الشجار الدائم','العزلة'],
  ['من عمل النحل في الخلية:','حارسات يمنعن الدخلاء','لا عمل لها','تنام طوال اليوم','تهدم الخلية'],
  ['أتعلّم من مجتمع النحل أن:','أتقاسم العمل مع زملائي','أعيش منعزلاً','أتجنّب مشاركة الآخرين','أترك واجباتي']]},
 {sem:1, unit:'الحديث الشريف', t:'التاجر الصدوق', q:[
  ['أكمل الحديث: «التاجر الصدوق الأمين مع ...»:','النبيين والصديقين والشهداء','الأغنياء والملوك','التجار فقط','الناس جميعاً'],
  ['أخرج حديث التاجر الصدوق الإمام:','الترمذي','مالك','أحمد','النسائي'],
  ['التاجر الصدوق الأمين هو الذي:','لا يكذب ويتحرّى الصدق والأمانة في بيعه وشرائه','يخفي عيب السلعة','يغش في الميزان','يرفع السعر كذباً'],
  ['جزاء التاجر الصدوق الأمين عند الله:','أجر كبير ودرجة عظيمة','لا أجر له','عقاب شديد','مال كثير فقط'],
  ['الصدق هو:','القول المطابق للحقيقة والواقع','القول المخالف للحقيقة','السكوت دائماً','المزاح'],
  ['من صور الغش في البيع:','إخفاء العيب الموجود في السلعة','بيان عيب السلعة','الوفاء بالكيل','الصدق مع المشتري'],
  ['الغش في المكاييل والأوزان يسمّى:','تطفيفاً','إحساناً','أمانة','كرماً'],
  ['الصدق والأمانة يؤديان إلى:','مجتمع تسوده الأخوّة والمحبة','مجتمع يسوده الحقد','بغض الناس','الخسارة'],
  ['أعطاني زميلي مالاً لأشتري له كتاباً وبقي منه شيء، فإني:','أعيد له ما تبقى كاملاً','آخذ الباقي لنفسي','أقتطع جزءاً منه','أنفقه على الحلوى']]},
 {sem:1, unit:'الأخلاق والآداب', t:'بر الوالدين', q:[
  ['أكمل قوله تعالى: «ووصّينا الإنسان بوالديه ...»:','إحساناً','مالاً','سفراً','بيتاً'],
  ['نهانا الله تعالى أن نقول للوالدين:','أُفّ','شكراً','أحبكما','جزاكما الله خيراً'],
  ['أمرنا الله تعالى أن نقول لوالدينا:','قولاً كريماً','قولاً قاسياً','كلاماً بصوت عالٍ','لا نكلمهما'],
  ['من دعاء الأبناء لوالديهم في القرآن الكريم:','ربّ ارحمهما كما ربّياني صغيراً','ربّ أبعدهما عني','ربّ أعطني مالهما','لا أدعو لهما'],
  ['أكّد الله تعالى البرّ بالوالدين عند الكِبَر:','لشدة حاجتهما إلى الأبناء','لأنهما لا يحتاجان شيئاً','لأنهما أغنياء','لأن البرّ يكون عند الكبر فقط'],
  ['من صور البرّ بالوالدين:','الدعاء لهما بالخير في حياتهما وبعد موتهما','رفع الصوت عليهما','اللعب وقت راحتهما','مناداة الأم باسمها'],
  ['من صور العقوق:','رفع الصوت وقت راحة الوالدين','الوقوف احتراماً لهما','طاعتهما بالمعروف','مساعدتهما'],
  ['لا أسبق والديّ في:','الأكل والكلام','السلام عليهما','خدمتهما','الدعاء لهما'],
  ['المعلّم بمنزلة:','الوالد','الغريب','الصديق الصغير','الجار البعيد']]},
 {sem:1, unit:'العقيدة', t:'من صفات الله تعالى (القوي)', q:[
  ['من صفات الله تعالى «القوي» ومعناها:','لا يعجزه شيء في الأرض ولا في السماء','لا يغيب عن علمه شيء','يرحم عباده','يرزق عباده'],
  ['أرسل الله تعالى على قريش ومن معها في غزوة الأحزاب:','ريحاً قوية','مطراً خفيفاً','ثلجاً','زلزالاً'],
  ['حفر المسلمون حول المدينة المنورة في غزوة الأحزاب:','خندقاً','بئراً','نهراً','سوراً من الحجارة'],
  ['أكمل قوله تعالى: «إنّ ربك هو القوي ...»:','العزيز','الرحيم','الغفور','الكريم'],
  ['أكمل الحديث: «المؤمن القوي خير وأحب إلى الله من المؤمن ...»:','الضعيف','الغني','الكبير','العالِم'],
  ['يستمدّ المؤمن القوة من:','الله تعالى','نفسه فقط','ماله','الناس'],
  ['يكثر المؤمن من قول:','لا حول ولا قوة إلا بالله','أنا أقوى الناس','لا أحتاج أحداً','القوة لي وحدي'],
  ['أستخدم القوة التي منحني الله إياها في:','العمل النافع وبناء الوطن','إيذاء الآخرين','التكبّر على الناس','تخريب الممتلكات'],
  ['يحتاج الإنسان إلى الله القوي في:','شأنه كله','رزقه فقط','طعامه فقط','لا يحتاج إليه']]},
 {sem:1, unit:'الأخلاق والآداب', t:'النظافة وأثرها في سلامة البيئة', q:[
  ['النظافة دليل:','الإيمان','الكسل','التكبّر','الإسراف'],
  ['من فوائد النظافة أنها:','تقي الإنسان من الأمراض','تسبّب الأمراض','تضيّع الوقت','تؤذي البيئة'],
  ['اهتم الإسلام بالنظافة ليعيش الإنسان:','في وسط صحي نظيف','في الفوضى','وحيداً','مريضاً'],
  ['المؤمن يحافظ على نظافة:','مظهره وبيئته','مظهره فقط','بيته فقط','لا شيء'],
  ['أحافظ على نظافة مدرستي فلا:','أكتب على جدرانها','أرتّب صفي','أرمي النفايات في السلة','أنظف مقعدي'],
  ['إلقاء المخلّفات في البحار والأنهار:','يضرّ الأسماك والنباتات','ينفع الأسماك','لا يؤثر في شيء','يجمّل الأنهار'],
  ['نظافة البيئة دليل على:','رقيّ المجتمع وحضارته','تخلّف المجتمع','فقر الناس','كثرة المال'],
  ['من مظاهر انتمائي لوطني:','أحافظ على نظافة الأماكن العامة','أرمي القمامة في الطريق','أكسر الأشجار','أهدر الماء'],
  ['خلق الله تعالى الكون:','نظيفاً جميلاً مسخّراً لخدمة الإنسان','بلا نظام','قبيحاً','لا فائدة منه']]},
 {sem:1, unit:'الحديث الشريف', t:'الإسلام دين اليُسر', q:[
  ['من الوصايا في الحديث الشريف: «علّموا وبشّروا ولا ...»:','تعسّروا','تتعلموا','تتكلموا','تلعبوا'],
  ['معنى «بشّروا»:','حبّبوا الناس بالخير','أخيفوا الناس','اتركوا الناس','اسكتوا'],
  ['معنى «لا تعسّروا»:','لا تشدّدوا','لا تتعلموا','لا تتكلموا','لا تبتسموا'],
  ['علاج الغضب كما ورد في الحديث الشريف:','السكوت','الصراخ','الضرب','الهرب'],
  ['من وسائل ضبط النفس عند الغضب أيضاً:','الاستعاذة بالله من الشيطان الرجيم','رفع الصوت','كسر الأشياء','الشتم'],
  ['من صور اليسر في الإسلام أن المريض الذي يشتد عليه المرض يجوز له:','الإفطار في رمضان','ترك الصلاة نهائياً','الكذب','ترك برّ والديه'],
  ['أباح الإسلام التيمّم إذا:','فُقِد الماء','كان الجو حاراً','تأخّر المسلم','كان المسجد بعيداً فقط'],
  ['حارب الإسلام الأمية والجهل وحثّ على:','العلم','الكسل','اللعب الدائم','النوم'],
  ['الإنسان العاقل:','يحب الحلم ويبتعد عن الغضب','يغضب لأتفه الأسباب','يشدّد على الناس','ينفّر الناس من الخير']]},
 {sem:1, unit:'الأخلاق والآداب', t:'حقوق وهبني الله إياها', q:[
  ['لم يهرب الطفل من عمر بن الخطاب رضي الله عنه لأنه:','لم يرتكب ذنباً والطريق لم تكن ضيقة','كان خائفاً جداً','كان نائماً','لم يرَ عمر'],
  ['أُعجب عمر بن الخطاب رضي الله عنه بالطفل لـ:','شجاعته وذكائه','كسله','هروبه','سكوته'],
  ['كان النبي ﷺ مع الأطفال:','يلاعبهم ويُدخل السرور على قلوبهم','يبتعد عنهم','يقسو عليهم','لا يكلمهم'],
  ['كان النبي ﷺ يَصُفّ أبناء الصحابة ثم يقول: من سبق إليّ فله كذا، فيـ:','يستبقون إليه فيقبّلهم ويلتزمهم','يبكون','يهربون','يتشاجرون'],
  ['من حقوق الطفل في الإسلام:','التعلّم واللعب البريء','العمل الشاق','الحرمان من التعليم','العيش في خوف'],
  ['أعبّر عن رأيي:','بهدوء وشجاعة وأدب','بصوت مرتفع','بخوف','لا أعبّر أبداً'],
  ['إذا اختلفت مع زميلي في الرأي فإني:','أحترم رأيه','أسخر منه','أضربه','أقاطعه'],
  ['أعتمد في مناقشتي للآخرين على:','التفكير','التقليد','مصلحتي الشخصية','الصراخ'],
  ['المشاركة في الحوار دليل على:','الثقة بالنفس','الضعف','التكبّر','الخوف']]},
 {sem:1, unit:'السيرة النبوية', t:'جوانب من سيرة النبي ﷺ (إيذاء قريش للنبي ﷺ وأصحابه)', q:[
  ['من أسباب عداوة قريش للنبي ﷺ:','تمسّكها بعبادة الأصنام تقليداً للآباء','حبها للإسلام','كثرة المسلمين في البداية','فقر النبي ﷺ'],
  ['خافت قريش من الإسلام لأنه:','يدعو إلى المساواة بين الناس','يدعو إلى الظلم','يأمر بعبادة الأصنام','يمنع التجارة'],
  ['قال النبي ﷺ لعمه: «والله يا عم لو وضعوا الشمس في يميني والقمر في ...»:','يساري','يدي','بيتي','طريقي'],
  ['قال أبو طالب للنبي ﷺ بعد سماع كلامه:','افعل ما أحببت فوالله لا أُسلمك لهم أبداً','اترك دعوتك','اخرج من مكة','لا تكلّم أحداً'],
  ['قاطعت قريش المسلمين وحاصرتهم في:','شعب أبي طالب','غار حراء','المدينة المنورة','الطائف'],
  ['دام حصار الشعب:','ثلاث سنين','سنة واحدة','شهراً واحداً','عشر سنين'],
  ['من شدة الجوع في الحصار أكل المسلمون:','أوراق الشجر','الحجارة','الرمل','لا شيء أبداً'],
  ['كان بلال الحبشي رضي الله عنه يُعذَّب فيقول:','أحدٌ أحد','أترك الإسلام','ارحموني فقط','لا أعرف'],
  ['الذي كان يعذّب بلالاً رضي الله عنه هو:','أمية بن خلف','أبو بكر الصديق','أبو طالب','زيد بن حارثة']]},
 {sem:1, unit:'القرآن الكريم', t:'من سورة الأعلى', q:[
  ['رقم سورة الأعلى في المصحف:','السابعة والثمانون','الثمانون','التسعون','الخامسة والثمانون'],
  ['عدد آيات سورة الأعلى:','تسع عشرة آية','عشرون آية','إحدى عشرة آية','ثلاثون آية'],
  ['أكمل: «سبّح اسم ربك ...»:','الأعلى','العظيم','الكريم','الرحيم'],
  ['الآية التي تلي «الذي خلق فسوّى» هي:','والذي قدّر فهدى','فجعله غثاءً أحوى','سنقرئك فلا تنسى','فذكّر إن نفعت الذكرى'],
  ['معنى «فسوّى»:','خلق المخلوقات فأتقن خلقها','ترك المخلوقات','أفنى المخلوقات','أخفى المخلوقات'],
  ['معنى «المرعى»:','النبات الذي ترعاه الماشية','البحر','الجبل','الطريق'],
  ['معنى «غثاءً»:','يابساً هشيماً','أخضر نضراً','ماءً عذباً','طعاماً لذيذاً'],
  ['وعد الله نبيه ﷺ في قوله «سنقرئك فلا تنسى» بأن:','يحفظه القرآن الكريم فلا ينساه','يعطيه مالاً','ينصره في بدر','يرزقه أولاداً'],
  ['نقول في السجود تعظيماً لله تعالى:','سبحان ربي الأعلى','سبحان ربي العظيم','سمع الله لمن حمده','الله أكبر فقط'],
  ['أكمل: «فذكّر إن نفعت ...»:','الذكرى','الدنيا','الصلاة','الكلمة']]},
 {sem:1, unit:'العقيدة', t:'التوكل على الله تعالى', q:[
  ['التوكل على الله هو:','الاعتماد على الله تعالى مقروناً بالعمل','الاعتماد على الله مع ترك العمل','ترك الدعاء','الاعتماد على الناس'],
  ['الاعتماد على الله تعالى مع ترك العمل يسمّى:','التواكل','التوكل','الصبر','الشكر'],
  ['أكمل قوله تعالى: «وعلى الله فتوكّلوا إن كنتم ...»:','مؤمنين','صادقين','أغنياء','مسافرين'],
  ['الأم التي ارتفعت حرارة ابنها أعطته الدواء ثم:','دعت الله أن يشفيه','تركت الدعاء','نامت','لم تفعل شيئاً'],
  ['من صور التوكل الصحيح:','أجتهد في الدراسة وأطلب من الله النجاح','أهمل الدراسة وأنتظر النجاح','أنام وأطلب الرزق','أترك الدواء وأنتظر الشفاء'],
  ['أهمل صلاته وطلب من الله الجنة، هذا مثال على:','التواكل','التوكل','الإحسان','الصبر'],
  ['يقول المؤمن بعد أن يعمل ويتوكل:','حسبي الله ونعم الوكيل','لا أحتاج الله','أنا وحدي أنجح','لا فائدة من الدعاء'],
  ['العمل الدؤوب مع الاعتماد على الله سبيل:','النجاح والتفوّق','الفشل','الكسل','الخسارة'],
  ['الفلاح الذي يحرث الأرض ويزرعها ثم يتوكل على الله يرجو:','المحصول الوفير','الجفاف','خراب الأرض','لا شيء']]},
 {sem:1, unit:'القرآن الكريم', t:'من سورة البلد', q:[
  ['رقم سورة البلد في المصحف:','التسعون','الثمانون','المئة','الخامسة والتسعون'],
  ['عدد آيات سورة البلد:','عشرون آية','عشر آيات','ثلاثون آية','خمس عشرة آية'],
  ['معنى «فكّ رقبة»:','تحرير إنسان من الرقّ','ربط الحبل','قطع الشجر','بناء البيوت'],
  ['معنى «مسغبة»:','مجاعة','فرح','مطر','سفر'],
  ['معنى «ذا مقربة»:','ذا قرابة في النسب','ذا مال','بعيداً','غريباً'],
  ['معنى «ذا متربة»:','ذا فقر شديد','ذا غنى','ذا علم','ذا قوة'],
  ['أكمل: «أو إطعامٌ في يوم ذي مسغبة»، والآية التالية:','يتيماً ذا مقربة','فكّ رقبة','أولئك أصحاب الميمنة','وتواصوا بالمرحمة'],
  ['من صفات أصحاب الميمنة أنهم:','تواصوا بالصبر وتواصوا بالمرحمة','بخلوا بأموالهم','قسوا على اليتيم','كذّبوا بالحق'],
  ['أصحاب الميمنة هم الذين:','يأخذون كتبهم بأيمانهم يوم القيامة','يأخذون كتبهم بشمائلهم','لا يُحاسَبون','يدخلون النار'],
  ['جزاء أصحاب الميمنة:','الخلود في جنات النعيم','النار','لا جزاء لهم','مال في الدنيا فقط']]},
 {sem:1, unit:'الحديث الشريف', t:'تقوى الله تعالى وحسن الخلق', q:[
  ['أكمل الحديث: «اتقِ الله حيثما ...»:','كنت','ذهبت','نمت','أكلت'],
  ['أكمل الحديث: «وأتبع السيئة الحسنة ...»:','تمحها','تكتبها','تنسها','تزدها'],
  ['أكمل الحديث: «وخالق الناس بـ ...»:','خلق حسن','قسوة','غضب','تكبّر'],
  ['راوي حديث «اتق الله حيثما كنت»:','أبو ذر رضي الله عنه','أبو بكر رضي الله عنه','عمر رضي الله عنه','علي رضي الله عنه'],
  ['معنى «اتق الله»:','أطع أوامره واجتنب نواهيه','اترك العبادة','نَم مبكراً','كُل كثيراً'],
  ['معنى «خالق الناس»:','عامل الناس','ابتعد عن الناس','اضرب الناس','اسخر من الناس'],
  ['إذا أخطأ المؤمن فإنه:','يسارع إلى التوبة والاستغفار وعمل الصالحات','يكرر الخطأ','يتكبّر','ييأس من رحمة الله'],
  ['الحديث جامع لحقوق:','الله تعالى وحقوق العباد','العباد فقط','الله فقط','الحيوانات فقط'],
  ['إذا اعتذر زميلي منك بعد أن أساء إليك فإنك:','تعفو عنه','تسيء إليه','تقاطعه','تشتمه']]},
 {sem:1, unit:'الأخلاق والآداب', t:'آداب الحديث في الإسلام', q:[
  ['أكمل الحديث الشريف: «الكلمة الطيبة ...»:','صدقة','ضعف','مضيعة للوقت','عيب'],
  ['من آداب الحديث:','أتحدث بصوت معتدل','أصرخ في وجه الآخرين','أقاطع المتكلم','أتكلم بكلام بذيء'],
  ['أكمل الحديث: «ليس المؤمن بالطعّان ولا اللعّان ولا الفاحش ولا ...»:','البذيء','الكريم','الصادق','الحليم'],
  ['إذا كنا ثلاثة فلا يتناجى اثنان دون الثالث لأن ذلك:','يحزنه','يفرحه','ينفعه','لا يهمه'],
  ['من آداب الحديث أني:','أستمع لمن يحدّثني ولا أقاطعه','أتكلم عن زميلي بسوء إذا غاب','أسخر من المتكلم','أنشغل عنه'],
  ['من فوائد التزام آداب الحديث أنه:','يُكسب الإنسان محبة الناس واحترامهم','يزرع البغضاء','يسبب الخصومة','يجعل الناس يبتعدون'],
  ['قال تعالى: «ما يلفظ من قول إلا لديه رقيب ...»:','عتيد','بعيد','سعيد','جديد'],
  ['إذا نادتني أمي من بعيد فإني:','أسرع إليها وأجيبها','لا أكترث بالنداء','أكمل لعبي','أصرخ في وجهها'],
  ['أتحدث بخير أو:','أسكت','أصرخ','أشتم','أكذب']]},
 {sem:1, unit:'القرآن الكريم', t:'من سورة عبس', q:[
  ['رقم سورة عبس في المصحف:','الثمانون','السبعون','التسعون','المئة'],
  ['عدد آيات سورة عبس:','اثنتان وأربعون آية','عشرون آية','ثلاثون آية','خمسون آية'],
  ['نزلت الآيات الأولى من سورة عبس في الصحابي:','عبد الله بن أم مكتوم رضي الله عنه','أبي بكر الصديق رضي الله عنه','بلال الحبشي رضي الله عنه','زيد بن حارثة رضي الله عنه'],
  ['كان عبد الله بن أم مكتوم رضي الله عنه:','رجلاً أعمى','تاجراً غنياً','من كبراء قريش','طفلاً صغيراً'],
  ['كان النبي ﷺ حين جاءه ابن أم مكتوم مشغولاً بـ:','دعوة كبراء مكة إلى الإسلام','التجارة','السفر','الطعام'],
  ['معنى «تلهّى»:','تتشاغل','تفرح','تغضب','تنام'],
  ['معنى «سَفَرة»:','ملائكة مرسلون','مسافرون','كتب','أنبياء'],
  ['وصف الله تعالى صحف القرآن الكريم بأنها:','مرفوعة مطهّرة','قديمة ممزقة','صغيرة','مخفية'],
  ['أكمل: «كلّا إنها ...»:','تذكرة','قصة','صحيفة','كلمة'],
  ['صار النبي ﷺ بعد نزول الآيات إذا رأى ابن أم مكتوم:','أقبل عليه ورحّب به','أعرض عنه','غضب منه','تركه']]}
]);

/* الصف الرابع — الفصل الثاني (الوحدتان ٤–٥) */
REPL(4, 'isl', 2, [
 {sem:2, unit:'العقيدة', t:'القرآن الكريم (نزوله – حفظه)', q:[
  ['القرآن الكريم هو:','كلام الله تعالى المنزّل على سيدنا محمد ﷺ','كلام الناس','كتاب تاريخ','شعر عربي'],
  ['نزل القرآن الكريم على النبي ﷺ بوساطة الملَك:','جبريل عليه السلام','ميكائيل عليه السلام','إسرافيل عليه السلام','مالك عليه السلام'],
  ['بدأ نزول القرآن الكريم في شهر:','رمضان','شعبان','رجب','محرّم'],
  ['بدأ نزول القرآن الكريم في ليلة:','القدر','العيد','الإسراء','الجمعة'],
  ['بدأ نزول القرآن الكريم في غار:','حراء','ثور','الطائف','قباء'],
  ['دامت مدة نزول القرآن الكريم:','ثلاثة وعشرين عاماً','سنة واحدة','عشر سنين','أربعين سنة'],
  ['عدد سور القرآن الكريم:','مئة وأربع عشرة سورة','مئة سورة','ستون سورة','ثلاثون سورة'],
  ['نزل القرآن الكريم مفرّقاً لأسباب منها:','ليسهل على المسلمين حفظه وفهمه','لأنه قصير','لأن الناس رفضوه','لكي يُنسى'],
  ['أكمل قوله تعالى: «إنّا نحن نزّلنا الذكر وإنّا له ...»:','لحافظون','لقادرون','لشاكرون','لعالمون'],
  ['من واجبي تجاه القرآن الكريم:','أن أتلوه وأعمل بأوامره وأجتنب نواهيه','أن أهجره','أن أضعه في مكان غير لائق','أن أقرأه دون فهم فقط']]},
 {sem:2, unit:'الحديث الشريف', t:'شُعَب الإيمان', q:[
  ['أكمل الحديث: «الإيمان بضع وسبعون ...»:','شعبة','سنة','كلمة','صلاة'],
  ['أفضل شعب الإيمان:','قول لا إله إلا الله','إماطة الأذى عن الطريق','الحياء','الصدقة'],
  ['أدنى شعب الإيمان:','إماطة الأذى عن الطريق','قول لا إله إلا الله','الصلاة','الصوم'],
  ['ذكر الحديث أن ... شعبة من الإيمان:','الحياء','الغضب','الكسل','المزاح'],
  ['معنى «بضع»:','عدد ما بين الثلاثة والتسعة','عدد أكبر من مئة','واحد فقط','ألف'],
  ['معنى «إماطة»:','إزالة','وضع','رمي','جمع'],
  ['شبّه النبي ﷺ الإيمان بـ:','شجرة ذات أغصان','بحر','جبل','بيت'],
  ['من صور إماطة الأذى عن الطريق:','إزالة الأحجار والزجاج المتكسر','رمي القمامة','وضع الأغصان في الطريق','كسر المصابيح'],
  ['راوي حديث شعب الإيمان:','أبو هريرة رضي الله عنه','عمر بن الخطاب رضي الله عنه','أنس بن مالك رضي الله عنه','ابن عباس رضي الله عنهما'],
  ['الإيمان الصادق:','لا ينفصل عن العمل الصالح','يكون بالقلب دون عمل','لا يحتاج إلى عمل','يكون بالكلام فقط']]},
 {sem:2, unit:'القرآن الكريم', t:'من سورة الأنعام: من جاء بالحسنة', q:[
  ['رقم سورة الأنعام في المصحف:','السادسة','الثانية','العاشرة','الرابعة عشرة'],
  ['من جاء بالحسنة يكافئه الله تعالى بـ:','عشر أمثالها','مثلها فقط','نصفها','لا شيء'],
  ['من جاء بالسيئة:','يُجزى مثلها دون مضاعفة','يُجزى عشر أمثالها','لا يُحاسب','يُجزى مئة ضعف'],
  ['معنى «صراط مستقيم»:','طريق واضح','طريق طويل','طريق مظلم','طريق صعب'],
  ['معنى «ديناً قِيَماً»:','ديناً مستقيماً لا عوج فيه','ديناً قديماً','ديناً صعباً','ديناً جديداً'],
  ['معنى «نُسُكي»:','عبادتي','بيتي','مالي','طعامي'],
  ['أكمل: «قل إن صلاتي ونسكي ومحياي ومماتي لله ...»:','رب العالمين','الواحد','الرحمن','العظيم'],
  ['الدين الذي ذُكر في الآيات هو ملّة:','إبراهيم عليه السلام حنيفاً','موسى عليه السلام','عيسى عليه السلام','نوح عليه السلام'],
  ['رأيت عجوزاً يقع على الأرض فأكسب الحسنات بأن:','أساعده على الوقوف','أتركه وأتابع سيري','أضحك منه','أصوّره'],
  ['أكمل: «لا شريك له وبذلك أُمرت وأنا ...»:','أول المسلمين','أكرم الناس','أقوى الناس','آخر المسلمين']]},
 {sem:2, unit:'الأخلاق والآداب', t:'آداب اللباس في الإسلام', q:[
  ['دعا الإسلام إلى التجمّل في الملبس دون:','كبر أو إسراف','نظافة','ترتيب','ستر'],
  ['قال النبي ﷺ: «إن الله جميل يحب ...»:','الجمال','المال','الكسل','الطعام'],
  ['كان رسول الله ﷺ:','حسن الهندام جميل المظهر نظيف الثياب','لا يهتم بثيابه','يلبس ثياباً متسخة','يتباهى بثيابه'],
  ['كانت للنبي ﷺ حُلّة جميلة يلبسها في:','العيدين والجمعة','الحرب فقط','النوم','السفر فقط'],
  ['كان النبي ﷺ يُكثر من:','السواك والطيب','النوم','الطعام','الضحك'],
  ['من آداب اللباس:','ألا أتباهى بثيابي على الآخرين','أن أرتدي ثياباً متسخة','أن أسخر من ثياب غيري','أن أسرف في شراء الثياب'],
  ['نظافة اللباس تدلّ على:','الاهتمام بالنفس واحترامها','الإسراف','التكبر','الكسل'],
  ['المحافظة على نظافة لباسي:','مسؤوليتي','مسؤولية أمي وحدها','لا تهمني','مسؤولية المعلم'],
  ['النظافة والجمال في المظهر يكسبانني:','محبة الناس واحترامهم','بغض الناس','الخسارة','المرض']]},
 {sem:2, unit:'السيرة النبوية', t:'جوانب من سيرة النبي ﷺ (الهجرة إلى الحبشة)', q:[
  ['سبب هجرة المسلمين إلى الحبشة:','ازدياد أذى كفار قريش وتعذيبهم للمسلمين','طلب التجارة','الفقر','زيارة الأقارب'],
  ['قال النبي ﷺ عن ملك الحبشة إنه:','لا يُظلم عنده أحد','ظالم','بخيل','عدو للمسلمين'],
  ['لقب ملك الحبشة:','النجاشي','كسرى','قيصر','فرعون'],
  ['عدد من هاجر إلى الحبشة كما في الدرس:','ثلاثة وثمانون صحابياً','عشرة صحابة','ألف صحابي','خمسة صحابة'],
  ['أرسلت قريش إلى النجاشي رسولين يحملان:','الهدايا الثمينة لإقناعه بإعادة المسلمين','السلاح','رسالة سلام','الطعام للمسلمين'],
  ['اختار المسلمون ليتكلم أمام النجاشي:','جعفر بن أبي طالب رضي الله عنه','عمر بن الخطاب رضي الله عنه','أبا بكر الصديق رضي الله عنه','بلالاً الحبشي رضي الله عنه'],
  ['بعد أن سمع النجاشي كلام جعفر:','سُرّ بكلامه ورفض إعادة المسلمين وردّ الهدايا','طرد المسلمين','قبل الهدايا','سجن المسلمين'],
  ['عاد بعض المهاجرين إلى مكة بسبب:','خبر كاذب بإسلام أهل مكة','طرد النجاشي لهم','انتهاء الطعام','مرض أصابهم'],
  ['عاد مهاجرو الحبشة جميعاً بعد:','هجرة النبي ﷺ إلى المدينة المنورة','غزوة بدر مباشرة','وفاة النجاشي فوراً','سنة واحدة']]},
 {sem:2, unit:'القرآن الكريم', t:'من سورة الليل', q:[
  ['رقم سورة الليل في المصحف:','الثانية والتسعون','التسعون','الثمانون','المئة'],
  ['عدد آيات سورة الليل:','إحدى وعشرون آية','عشر آيات','ثلاثون آية','أربع عشرة آية'],
  ['أقسم الله تعالى في بداية السورة بـ:','الليل والنهار','الشمس والقمر','التين والزيتون','الفجر'],
  ['أكمل: «والليل إذا ...»:','يغشى','سجى','عسعس','أدبر'],
  ['أكمل: «والنهار إذا ...»:','تجلّى','جلّاها','تنفّس','سرى'],
  ['معنى «إنّ سعيكم لشتّى»:','أعمال العباد مختلفة','أعمال العباد متشابهة','الناس لا يعملون','العمل لا ينفع'],
  ['من أعطى واتقى وصدّق بالحسنى يُيسّره الله:','لليسرى','للعسرى','للفقر','للحزن'],
  ['معنى «لليُسرى»:','إلى ما فيه الخير','إلى ما فيه الشر','إلى الشدة','إلى الحزن'],
  ['من بخل واستغنى وكذّب بالحسنى يُيسّره:','للعسرى','لليسرى','للجنة','للخير'],
  ['يدلّنا قوله تعالى «وما يغني عنه ماله إذا تردّى» على أن:','المال لا ينفع صاحبه البخيل يوم القيامة','المال ينفع كل الناس','المال يمنع الموت','البخل خير']]},
 {sem:2, unit:'الحديث الشريف', t:'سبل التقرّب إلى الله تعالى', q:[
  ['أكمل الحديث: «عينان لا تمسّهما ...»:','النار','الدموع','الشمس','الأمراض'],
  ['العين الأولى في الحديث:','عين بكت من خشية الله','عين نامت طويلاً','عين نظرت إلى الحرام','عين أصابها المرض'],
  ['العين الثانية في الحديث:','عين باتت تحرس في سبيل الله','عين تبكي على الدنيا','عين تشاهد اللهو','عين تنام عن الصلاة'],
  ['راوي الحديث:','ابن عباس رضي الله عنهما','أبو هريرة رضي الله عنه','أنس بن مالك رضي الله عنه','أبو ذر رضي الله عنه'],
  ['أخرج الحديث الإمام:','الترمذي','البخاري','مالك','أبو داود'],
  ['معنى «خشية الله»:','الشعور بجلال الله وعظمته','الخوف من الناس','الحزن','الكسل'],
  ['من أحب الأعمال إلى الله:','الدفاع عن الوطن والمقدسات','ترك العمل','إيذاء الناس','الكسل'],
  ['أكون أميناً على وطني بأن:','أجتهد في تعلّم العلم النافع','أنقطع عن المدرسة','أخرّب الحدائق','أهمل نظافته'],
  ['خشية الله تعالى والتزام طاعته:','سبيل النجاة من النار','سبب للخسارة','لا فائدة منها','تبعد عن الجنة']]},
 {sem:2, unit:'الأخلاق والآداب', t:'آداب الاستئذان والزيارة', q:[
  ['شرع الإسلام الاستئذان حرصاً على:','حرمة البيوت وحفظ أسرار الناس','كثرة الزيارات','إزعاج الناس','التجسس'],
  ['عند الاستئذان أقف:','في زاوية الباب يمنة أو يسرة','أمام الباب مباشرة','خلف النافذة','داخل البيت'],
  ['كان النبي ﷺ إذا أتى باب قوم لم يستقبل الباب من:','تلقاء وجهه','جانبه الأيمن','جانبه الأيسر','بعيد'],
  ['أقرع الباب:','بلطف','بقوة','باستمرار دون توقف','بقدمي'],
  ['إذا لم يُؤذن لي بالدخول فإني:','أنصرف بهدوء ورضا','أستمر في قرع الباب','أنادي بصوت مرتفع','أدخل دون إذن'],
  ['من آداب الزيارة:','أختار الوقت المناسب','أطيل المكوث','أنصرف قبل أن أستأذن','أزور في وقت الراحة'],
  ['عند دخولي البيت أُلقي:','السلام على أهله','الكلام البذيء','اللوم','الأوامر'],
  ['لا أطيل المكوث في الزيارة كي:','لا أثقل على أهل البيت','أتناول الطعام','أنام هناك','أزعجهم'],
  ['من فوائد الزيارة:','تقوية روابط الأخوة والمودة بين الناس','زرع العداوة','قطع الأرحام','إضاعة الوقت فقط']]},
 {sem:2, unit:'القرآن الكريم', t:'من سورة الأنعام: من دلائل قدرة الله تعالى', q:[
  ['معنى «فالق الحب والنوى»:','يشقّ الحبّ عن النبات','يجمع الحب','يأكل الحب','يرمي الحب'],
  ['من مظاهر قدرة الله أنه:','يخرج الحيّ من الميت','لا يخرج شيئاً','يخلق كما يخلق الناس','يحتاج إلى الناس'],
  ['معنى «فالق الإصباح»:','يشق ضياء الصبح عن ظلام الليل','يطفئ النور','يخفي الشمس','يأتي بالليل'],
  ['جعل الله تعالى الليل:','سكناً يسكن فيه الناس عن الحركة','وقتاً للعمل الشاق','نهاراً','بلا فائدة'],
  ['معنى «حُسباناً»:','بحساب دقيق','بلا نظام','قليلاً','بعيداً'],
  ['جعل الله تعالى النجوم لـ:','نهتدي بها في ظلمات البر والبحر','نأكلها','نلعب بها','نخاف منها'],
  ['معنى «فأنّى تؤفكون»:','كيف تُصرَفون عن الحق','كيف تأكلون','كيف تنامون','كيف تسافرون'],
  ['معنى «أنشأكم»:','خلقكم','أطعمكم','أغناكم','علّمكم'],
  ['معنى «فصّلنا»:','بيّنّا ووضّحنا','أخفينا','نسينا','جمعنا'],
  ['التفكر في هذه الآيات يدلّنا على:','عظمة الله تعالى وقدرته','ضعف الخالق','أن الكون بلا خالق','أن الإنسان خالق']]},
 {sem:2, unit:'السيرة النبوية', t:'جوانب من سيرة النبي ﷺ (ذهابه إلى الطائف – الإسراء والمعراج)', q:[
  ['ذهب النبي ﷺ إلى الطائف رغبة في:','هدايتهم إلى الإسلام','أموالهم','قوتهم','التجارة'],
  ['رافق النبي ﷺ إلى الطائف:','زيد بن حارثة رضي الله عنه','أبو بكر الصديق رضي الله عنه','علي بن أبي طالب رضي الله عنه','عمر بن الخطاب رضي الله عنه'],
  ['كان ردّ أهل الطائف على دعوة النبي ﷺ أنهم:','رفضوها ورموه بالحجارة','قبلوها جميعاً','أكرموه','سكتوا'],
  ['دعا النبي ﷺ بعد عودته من الطائف: «اللهم إليك أشكو ...»:','ضعف قوتي وقلة حيلتي','كثرة مالي','قوة أعدائي فقط','طول الطريق'],
  ['الإسراء هو انتقال النبي ﷺ من:','المسجد الحرام إلى المسجد الأقصى','مكة إلى الطائف','المدينة إلى مكة','المسجد الأقصى إلى السماوات'],
  ['المعراج هو صعود النبي ﷺ من:','المسجد الأقصى إلى السماوات العلا','مكة إلى المدينة','غار حراء إلى مكة','المدينة إلى الشام'],
  ['ركب النبي ﷺ في رحلة الإسراء:','البراق','الفرس','الجمل','السفينة'],
  ['فُرضت في رحلة الإسراء والمعراج:','الصلاة','الزكاة','الصوم','الحج'],
  ['لُقّب أبو بكر رضي الله عنه بالصدّيق لأنه:','صدّق النبي ﷺ في الإسراء والمعراج','كان غنياً','كان قوياً','هاجر إلى الحبشة'],
  ['صلّى النبي ﷺ في المسجد الأقصى:','إماماً بالأنبياء جميعهم','وحده','مأموماً','لم يصلّ']]}
]);

/* الصف الخامس — الفصل الأول (الوحدات ١–٣ كما في «فهرس الفصل الأول») */
REPL(5, 'isl', 1, [
 {sem:1, unit:'القرآن الكريم', t:'عاقبة الصبر والثبات (من سورة الفتح)', q:[
  ['رقم سورة الفتح في المصحف:','الثامنة والأربعون','الخامسة والعشرون','الستون','العاشرة'],
  ['عدد آيات سورة الفتح:','تسع وعشرون آية','عشرون آية','خمسون آية','مئة آية'],
  ['نزلت سورة الفتح بعد:','صلح الحديبية','غزوة بدر','غزوة أحد','الهجرة مباشرة'],
  ['سمّى الله تعالى صلح الحديبية:','فتحاً مبيناً','هزيمة','حرباً','سفراً'],
  ['معنى «السكينة»:','الطمأنينة والثبات','الخوف','الغضب','الحزن'],
  ['من نتائج صلح الحديبية:','دخول عدد كبير من الناس في الإسلام','نشر الإسلام بالاضطهاد والتخويف','انقطاع الدعوة','هجرة المسلمين إلى الحبشة'],
  ['أكمل: «ولله جنود السماوات و ...»:','الأرض','البحار','الجبال','النجوم'],
  ['أول آية في سورة الفتح:','إنا فتحنا لك فتحاً مبيناً','إذا جاء نصر الله والفتح','والفجر','قل هو الله أحد'],
  ['حروف الإظهار الحلقي:','الهمزة والهاء والعين والحاء والغين والخاء','الباء والميم والواو','اللام والراء','الياء والنون'],
  ['يدلّنا الدرس على أن عاقبة الصبر والتمسك بالحق:','النصر والفوز','الخسارة','الذلة','الضياع']]},
 {sem:1, unit:'الحديث الشريف', t:'أخوة وتراحم', q:[
  ['أكمل الحديث: «المسلم أخو المسلم لا يظلمه ولا ...»:','يُسلمه','يزوره','يكلّمه','يعرفه'],
  ['معنى «لا يُسلمه»:','لا يتركه مع من يؤذيه','لا يسلّم عليه','لا يعطيه مالاً','لا يزوره'],
  ['من كان في حاجة أخيه:','كان الله في حاجته','خسر ماله','ضاع وقته','لا أجر له'],
  ['من فرّج عن مسلم كربة:','فرّج الله عنه كربة من كربات يوم القيامة','زادت همومه','لا ثواب له','غضب الله عليه'],
  ['معنى «كربة»:','الشدة والغم','الفرح','المال','الطعام'],
  ['من ستر مسلماً:','ستره الله يوم القيامة','فضحه الله','خسر أصدقاءه','لا أجر له'],
  ['راوي حديث «المسلم أخو المسلم»:','عبد الله بن عمر رضي الله عنهما','أبو هريرة رضي الله عنه','أنس بن مالك رضي الله عنه','أبو ذر رضي الله عنه'],
  ['والد راوي الحديث هو:','عمر بن الخطاب رضي الله عنه','أبو بكر الصديق رضي الله عنه','عثمان بن عفان رضي الله عنه','علي بن أبي طالب رضي الله عنه'],
  ['أكمل قوله تعالى: «إنما المؤمنون ...»:','إخوة','أغنياء','أقوياء','علماء'],
  ['صديقي حزين لموت قريب له، فإني:','أواسيه لأكشف همّه','أتركه','أضحك','أعاتبه']]},
 {sem:1, unit:'القرآن الكريم', t:'مكانة النبي ﷺ (سورة الضحى)', q:[
  ['رقم سورة الضحى في المصحف:','الثالثة والتسعون','التسعون','المئة','الثمانون'],
  ['عدد آيات سورة الضحى:','إحدى عشرة آية','ثماني آيات','عشرون آية','خمس آيات'],
  ['أقسم الله تعالى في سورة الضحى بـ:','الضحى والليل','الشمس والقمر','التين والزيتون','العصر'],
  ['معنى «سجى»:','سكن واشتد ظلامه','أشرق','أمطر','تحرك'],
  ['معنى «ما ودّعك ربك»:','ما تركك ربك','ما أحبك','ما رزقك','ما هداك'],
  ['معنى «قلى»:','أبغض','أحب','أعطى','نسي'],
  ['معنى «عائلاً»:','فقيراً','غنياً','يتيماً','مريضاً'],
  ['أكمل: «ألم يجدك يتيماً ...»:','فآوى','فهدى','فأغنى','فأعطى'],
  ['أوصى الله تعالى نبيه ﷺ في السورة باليتيم:','فلا تقهر','فلا تنهر','فحدّث','فارغب'],
  ['أكمل: «وأمّا بنعمة ربك ...»:','فحدّث','فلا تنهر','فلا تقهر','فآوى']]},
 {sem:1, unit:'الأخلاق والآداب', t:'احترام المعلّم', q:[
  ['أكمل الحديث: «ليس منّا من لم يُجِلّ كبيرنا ويرحم صغيرنا ويعرف لعالمنا ...»:','حقّه','بيته','ماله','اسمه'],
  ['قال النبي ﷺ: «ولكن بعثني ...»:','معلّماً ميسّراً','تاجراً','ملكاً','قاضياً فقط'],
  ['كان رسول الله ﷺ أعظم:','معلّم للبشرية','تاجر','قائد عسكري فقط','شاعر'],
  ['ذهب موسى عليه السلام إلى رجل صالح ليطلب:','العلم والمعرفة','المال','الطعام','الملك'],
  ['أكمل: «إذا مات الإنسان انقطع عمله إلا من ثلاث: صدقة جارية أو علم ...»:','يُنتفع به','يُنسى','يُخفى','يُكتب فقط'],
  ['من حقوق المعلّم على الطالب:','احترامه والإنصات إليه','التهاون في الحصة','مقاطعته','السخرية منه'],
  ['أعبّر عن تقديري لمعلّمي بـ:','الدعاء له وشكره','إهمال واجباتي','الكلام في الحصة','التأخر عن الدرس'],
  ['للمعلّم فضل على:','الطالب والمجتمع','نفسه فقط','لا أحد','الأغنياء فقط'],
  ['إذا دخل معلّمي الصف فإني:','أبادر إلى تحيته','أتجاهله','أستمر في اللعب','أخرج من الصف']]},
 {sem:1, unit:'القرآن الكريم', t:'من دلائل قدرة الله تعالى (من سورة يس)', q:[
  ['رقم سورة يس في المصحف:','السادسة والثلاثون','الثامنة عشرة','الخمسون','العشرون'],
  ['عدد آيات سورة يس:','ثلاث وثمانون آية','أربعون آية','مئة آية','ست وعشرون آية'],
  ['أكمل: «وآية لهم الأرض الميتة ...»:','أحييناها','أنبتناها','بسطناها','سقيناها'],
  ['معنى «نسلخ منه النهار»:','ننزع منه ضوء النهار','نزيد النهار','نطيل النهار','نجعله حاراً'],
  ['أكمل: «والشمس تجري لمستقر ...»:','لها','عظيم','قريب','بعيد'],
  ['معنى «العرجون القديم»:','العود المتقوس من عنقود التمر','الجبل العالي','النهر الجاري','الحجر الأسود'],
  ['معنى «فَلَك» في قوله «وكلٌّ في فلك يسبحون»:','مدار','بحر','صحراء','سفينة'],
  ['أكمل: «لا الشمس ينبغي لها أن تدرك ...»:','القمر','الأرض','النجوم','الليل'],
  ['من النعم المذكورة في الآيات:','جنات من نخيل وأعناب وتفجير العيون','الذهب والفضة','الملابس','البيوت'],
  ['حكم النون الساكنة في «مَنْ آمَنَ» لأن بعدها حرفاً حلقياً:','إظهار','إدغام','إقلاب','إخفاء']]},
 {sem:1, unit:'الحديث الشريف', t:'الأمانة في البيع', q:[
  ['مرّ النبي ﷺ على صُبرة طعام فأدخل يده فيها فنالت أصابعه:','بللاً','حجارة','ذهباً','تراباً'],
  ['معنى «صُبرة»:','كومة من الطعام','كيس من الذهب','جرة ماء','قطعة قماش'],
  ['قال صاحب الطعام: أصابته السماء، أي:','المطر','الشمس','الريح','النار'],
  ['قال النبي ﷺ: «أفلا جعلته فوق الطعام كي ...»:','يراه الناس','يأكله الناس','يجف','يبرد'],
  ['ختم النبي ﷺ الحديث بقوله: «من غشّ ...»:','فليس مني','فله أجر','فهو تاجر','فهو ذكي'],
  ['راوي الحديث:','أبو هريرة رضي الله عنه','أنس بن مالك رضي الله عنه','ابن عباس رضي الله عنهما','جابر رضي الله عنه'],
  ['اسم أبي هريرة رضي الله عنه:','عبد الرحمن بن صخر الدوسي','عبد الله بن مسعود','زيد بن ثابت','سعد بن معاذ'],
  ['تميّز أبو هريرة رضي الله عنه بأنه:','من أكثر الصحابة حفظاً ورواية للحديث','أول من أسلم','أول سفير في الإسلام','أول مؤذن'],
  ['من صور الغش:','إخفاء العيب في السلعة','بيان العيب للمشتري','الوفاء بالكيل','الصدق في السعر'],
  ['لا يجوز للبائع أن يُغيّر:','تاريخ انتهاء صلاحية السلعة','ترتيب بضاعته','مكان محله','لون لافتته']]},
 {sem:1, unit:'الأخلاق والآداب', t:'اختيار الصديق الصالح', q:[
  ['أكمل الحديث: «المرء على دين خليله فلينظر أحدكم ...»:','من يُخالل','ماذا يأكل','أين يسكن','ماذا يلبس'],
  ['أوصانا النبي ﷺ بحسن اختيار الأصدقاء لأن الإنسان:','يتأثر بطباع جلسائه','لا يتأثر بأحد','يعيش وحده','لا يحتاج أصدقاء'],
  ['من صفات الصديق الصالح:','يعفو ويسامح','يكذب','يحسد','يغتاب'],
  ['من ثمار الصحبة الصالحة:','محبة الله تعالى للمتحابين فيه','الضياع','الخسارة','المعاصي'],
  ['أكمل الحديث: «خير الأصحاب عند الله خيرهم ...»:','لصاحبه','لنفسه','للأغنياء','للأقوياء'],
  ['أكمل قوله تعالى: «وتعاونوا على البرّ و ...»:','التقوى','الإثم','العدوان','اللهو'],
  ['لا أختار صديقاً:','لا يحترم والديه','يحافظ على نظافته','يصدق في كلامه','يحب الخير'],
  ['إذا رأيت زميلي يصاحب رفاق سوء فإن واجبي:','نصحه بلطف','تشجيعه','السكوت','السخرية منه'],
  ['أكمل الحديث: «ما نقصت صدقة من ...»:','مال','علم','وقت','طعام']]},
 {sem:1, unit:'السيرة النبوية', t:'العقبة الأولى والثانية', q:[
  ['كانت بيعة العقبة الأولى سنة:','اثنتي عشرة للبعثة','عشر للبعثة','ثلاث عشرة للبعثة','خمس للبعثة'],
  ['عدد رجال وفد العقبة الأولى من المدينة:','اثنا عشر رجلاً','سبعون رجلاً','ثلاثة رجال','مئة رجل'],
  ['من بنود بيعة العقبة الأولى:','ألا نشرك بالله شيئاً ولا نسرق','النصرة في الحرب','الهجرة إلى الحبشة','دفع الجزية'],
  ['أرسل النبي ﷺ مع وفد المدينة أول سفير في الإسلام وهو:','مصعب بن عمير رضي الله عنه','زيد بن حارثة رضي الله عنه','جعفر بن أبي طالب رضي الله عنه','سعد بن معاذ رضي الله عنه'],
  ['كانت بيعة العقبة الثانية سنة:','ثلاث عشرة للبعثة','اثنتي عشرة للبعثة','إحدى عشرة للبعثة','عشرين للبعثة'],
  ['شارك في العقبة الثانية من النساء:','امرأتان','عشر نساء','لم تشارك أي امرأة','مئة امرأة'],
  ['من النساء في العقبة الثانية:','نسيبة بنت كعب المازنية (أم عمارة)','خديجة بنت خويلد','عائشة بنت أبي بكر','فاطمة الزهراء'],
  ['اختار وفد العقبة الثانية من بينهم اثني عشر:','نقيباً','قائداً للجيش','تاجراً','شاعراً'],
  ['كانت العقبة الثانية عهداً على:','الطاعة والنصرة','الهجرة إلى الحبشة فقط','ترك القتال','التجارة'],
  ['بعد العقبة الثانية أذن النبي ﷺ للمسلمين بـ:','الهجرة إلى المدينة المنورة','الهجرة إلى الطائف','العودة إلى الحبشة','قتال قريش في مكة']]},
 {sem:1, unit:'القرآن الكريم', t:'مناظرة إبراهيم عليه السلام لقومه (من سورة الأنعام)', q:[
  ['كان منهج إبراهيم عليه السلام في دعوة قومه:','الحوار والحجة العقلية','القوة والقتال','الهرب','السكوت'],
  ['معنى «جنّ عليه الليل»:','ستره بظلامه','أشرق عليه','أيقظه','أخافه'],
  ['معنى «بازغاً»:','طالعاً','غائباً','صغيراً','بعيداً'],
  ['معنى «أفل»:','غاب بعد ظهوره','طلع','كبر','اقترب'],
  ['قال إبراهيم عليه السلام لما أفل الكوكب: «لا أحب ...»:','الآفلين','الظالمين','الكاذبين','المسرفين'],
  ['معنى «وجّهت وجهي»:','قصدت بعبادتي','نظرت','سافرت','غيّرت طريقي'],
  ['معنى «حنيفاً»:','مائلاً عن الباطل إلى الحق','مائلاً عن الحق','متردداً','غاضباً'],
  ['أراد إبراهيم عليه السلام أن يبيّن لقومه أن الكواكب:','لا تستحق أن تُعبد','آلهة','تخلق','ترزق'],
  ['حروف الإدغام بغنة مجموعة في كلمة:','ينمو','لر','أبغ','قطب'],
  ['حكم النون الساكنة إذا جاء بعدها لام أو راء:','إدغام بلا غنة','إظهار','إقلاب','إخفاء']]},
 {sem:1, unit:'الحديث الشريف', t:'وصايا نبوية', q:[
  ['راوي الحديث أبو أيوب الأنصاري رضي الله عنه واسمه:','خالد بن زيد','سعد بن معاذ','زيد بن ثابت','أنس بن مالك'],
  ['نزل النبي ﷺ عند أبي أيوب الأنصاري رضي الله عنه:','حين هاجر إلى المدينة','في غزوة بدر','في مكة','في الطائف'],
  ['توفي أبو أيوب الأنصاري رضي الله عنه عند أسوار:','القسطنطينية','دمشق','القدس','بغداد'],
  ['سأل رجل النبي ﷺ عن عمل:','يدنيه من الجنة ويباعده من النار','يجعله غنياً','يجعله قوياً','يجعله مشهوراً'],
  ['أول ما أوصاه به النبي ﷺ:','تعبد الله لا تشرك به شيئاً','تصوم رمضان','تحج البيت','تجاهد'],
  ['من الأعمال في الحديث:','إقامة الصلاة وإيتاء الزكاة','صوم رمضان','الحج','بر الوالدين'],
  ['ختم النبي ﷺ وصاياه بقوله:','وتصل ذا رحمك','وتحسن إلى جارك','وتكرم ضيفك','وتطيع أميرك'],
  ['معنى «ذا رحمك»:','قرابتك','جارك','صديقك','معلمك'],
  ['صلة الرحم يقوم بها:','الرجال والنساء','الرجال فقط','النساء فقط','الأطفال فقط']]},
 {sem:1, unit:'السيرة النبوية', t:'الهجرة النبوية الشريفة', q:[
  ['اجتمع المشركون للتآمر على النبي ﷺ في:','دار الندوة','الكعبة','غار ثور','سوق عكاظ'],
  ['اتفق المشركون على أن يأخذوا من كل قبيلة:','شاباً قوياً ليضربوه ضربة رجل واحد','مالاً','رسولاً','شيخاً'],
  ['رافق النبي ﷺ في الهجرة:','أبو بكر الصديق رضي الله عنه','علي بن أبي طالب رضي الله عنه','عمر بن الخطاب رضي الله عنه','زيد بن حارثة رضي الله عنه'],
  ['نام في فراش النبي ﷺ ليلة الهجرة وردّ الأمانات:','علي بن أبي طالب رضي الله عنه','أبو بكر الصديق رضي الله عنه','بلال رضي الله عنه','مصعب بن عمير رضي الله عنه'],
  ['اختبأ النبي ﷺ وصاحبه في غار:','ثور','حراء','الطائف','أحد'],
  ['قال النبي ﷺ لأبي بكر في الغار: «ما ظنك باثنين الله ...»:','ثالثهما','معهما','ناصرهما','يراهما'],
  ['من الحكمة النبوية في الهجرة أنهما سلكا طريقاً:','وعرة غير طريق القوافل','قصيرة معروفة','طريق البحر','طريق الشام'],
  ['استقبل أهل المدينة النبي ﷺ:','فرحين مكبّرين','بالحجارة','بالسيوف','بالبكاء'],
  ['وصل النبي ﷺ إلى المدينة في شهر:','ربيع الأول','رمضان','محرّم','ذي الحجة'],
  ['من دروس الهجرة:','الأخذ بالأسباب مع التوكل على الله','ترك التخطيط','الاعتماد على النفس فقط','اليأس']]},
 {sem:1, unit:'القرآن الكريم', t:'جزاء المؤمنين (من سورة الكهف)', q:[
  ['رقم سورة الكهف في المصحف:','الثامنة عشرة','السادسة والثلاثون','العشرون','الثانية'],
  ['أكمل: «إنّا لا نضيع أجر من أحسن ...»:','عملاً','قولاً','بيتاً','مالاً'],
  ['أعدّ الله للمؤمنين الذين عملوا الصالحات:','جنات عدن تجري من تحتهم الأنهار','قصوراً في الدنيا فقط','مالاً كثيراً','لا شيء'],
  ['يُحلَّى المؤمنون في الجنة بـ:','أساور من ذهب','أساور من حديد','عقود من خشب','خواتم من نحاس'],
  ['يلبس المؤمنون في الجنة ثياباً لونها:','خضر','سود','حمر','صفر'],
  ['معنى «سُندُس»:','الحرير الرقيق','الحرير السميك','الصوف','القطن'],
  ['معنى «إستبرق»:','الحرير السميك','الحرير الرقيق','الكتان','الجلد'],
  ['معنى «الأرائك»:','الأسرّة المزيّنة الفاخرة','البيوت العالية','الأنهار','الحدائق'],
  ['أكمل: «نِعْمَ الثواب وحسنت ...»:','مرتفقاً','منزلاً','داراً','مكاناً'],
  ['الطريق إلى نهضة الوطن وتقدّمه:','الإيمان والعمل','الكسل','الجهل','الأنانية']]},
 {sem:1, unit:'السيرة النبوية', t:'السيدة خديجة رضي الله عنها', q:[
  ['والد السيدة خديجة رضي الله عنها:','خويلد بن أسد','عبد المطلب','أبو بكر','عمر'],
  ['لُقّبت السيدة خديجة رضي الله عنها قبل الإسلام بـ:','الطاهرة','الصدّيقة','الحميراء','الزهراء'],
  ['كانت السيدة خديجة رضي الله عنها:','غنية تعمل بالتجارة','فقيرة','شاعرة','طبيبة'],
  ['أرسلت النبي ﷺ تاجراً في مالها إلى:','الشام','اليمن','الحبشة','مصر'],
  ['تزوّجها النبي ﷺ وعمره:','خمس وعشرون سنة','أربعون سنة','عشرون سنة','ثلاثون سنة'],
  ['كانت السيدة خديجة رضي الله عنها أول من:','آمن بالنبي ﷺ','هاجر إلى المدينة','استشهد في الإسلام','جمع القرآن'],
  ['قالت للنبي ﷺ بعد نزول الوحي: «والله لا يخزيك الله أبداً، إنك ...»:','لتصل الرحم','لغني','لقوي','لشاعر'],
  ['من أبنائها من النبي ﷺ:','فاطمة رضي الله عنها','عائشة رضي الله عنها','حفصة رضي الله عنها','أسماء رضي الله عنها'],
  ['أنفقت مالها في حصار:','شعب أبي طالب','الطائف','المدينة','الحديبية'],
  ['توفيت السيدة خديجة رضي الله عنها:','بمكة قبل الهجرة بثلاث سنين','بالمدينة بعد الهجرة','في الحبشة','في الطائف']]}
]);

/* الصف الخامس — الفصل الثاني (الوحدات ٤–٦ كما في «فهرس الفصل الثاني») */
REPL(5, 'isl', 2, [
 {sem:2, unit:'القرآن الكريم', t:'بيان إلهي (من سورة المزّمّل)', q:[
  ['رقم سورة المزّمّل في المصحف:','الثالثة والسبعون','الستون','الثمانون','الخمسون'],
  ['عدد آيات سورة المزّمّل:','عشرون آية','عشر آيات','ثلاثون آية','أربعون آية'],
  ['معنى «المزّمّل»:','الملتفّ بثيابه','النائم','المسافر','القارئ'],
  ['أمر الله تعالى نبيه ﷺ في السورة بـ:','قيام الليل وترتيل القرآن','النوم طويلاً','السفر','التجارة'],
  ['أكمل: «ورتّل القرآن ...»:','ترتيلاً','تبتيلاً','قليلاً','سريعاً'],
  ['القول الثقيل في قوله «إنا سنلقي عليك قولاً ثقيلاً» هو:','القرآن الكريم','الشعر','الحكمة','الأخبار'],
  ['معنى «سَبْحاً طويلاً»:','فراغاً طويلاً لأمورك','سباحة في البحر','نوماً طويلاً','سفراً بعيداً'],
  ['معنى «وتبتّل إليه تبتيلاً»:','انقطع إليه بالعبادة والإخلاص','ابتعد عنه','نَم طويلاً','سافر إليه'],
  ['أكمل: «لا إله إلا هو فاتخذه ...»:','وكيلاً','صديقاً','رفيقاً','قريباً'],
  ['الإقلاب هو قلب النون الساكنة أو التنوين ميماً إذا جاء بعدها حرف:','الباء','الميم','اللام','الراء']]},
 {sem:2, unit:'الحديث الشريف', t:'تحريم الأذى', q:[
  ['أكمل الحديث: «من قطع سِدرة صوّب الله رأسه في ...»:','النار','الأرض','الماء','الجنة'],
  ['أخرج الحديث الإمام:','أبو داود','البخاري','مسلم','مالك'],
  ['السِّدرة:','شجرة','بئر','بيت','حجر'],
  ['معنى «صوّب الله رأسه»:','نكّسه وألقاه','رفعه','أكرمه','ستره'],
  ['حرّم النبي ﷺ قطع الشجرة إذا كانت في أرض يستظلّ بها الناس و:','قطعها ظلماً وعدواناً','قطعها صاحبها لحاجته','زرع بدلها','كانت ميتة'],
  ['قطع الشجر ظلماً فيه أذى:','للناس والبيئة','لا أذى فيه','للقاطع فقط','للطيور فقط'],
  ['الأشجار من نعم الله تعالى التي تستحق:','الشكر والمحافظة عليها','الإتلاف','الإهمال','القطع'],
  ['إذا رأيت زميلاً يقطع غصن شجرة في المدرسة فإني:','أنصحه بلطف','أشاركه','أسكت','أشجعه'],
  ['أتعهّد الشجرة التي أغرسها بـ:','السقاية والرعاية','القطع','الإهمال','الكسر']]},
 {sem:2, unit:'العبادات', t:'العبادة وفوائدها في الإسلام', q:[
  ['العبادة هي:','كل طاعة يؤديها المسلم خضوعاً وشكراً لله تعالى','الصلاة فقط','العمل لكسب المال فقط','اللعب'],
  ['أكمل قوله تعالى: «وما خلقت الجن والإنس إلا ...»:','ليعبدون','ليأكلوا','ليناموا','ليلعبوا'],
  ['من العبادات الخاصة:','الصلاة والزكاة والصوم والحج','طلب العلم','عمل الوالدين لطلب الرزق','إتقان العمل'],
  ['الاجتهاد في طلب العلم بنية صالحة من العبادة:','العامة','الخاصة','المحرّمة','المكروهة'],
  ['من فوائد الصلاة:','تنهى عن الفحشاء والمنكر','تسبب الكسل','تضيع الوقت','لا فائدة منها'],
  ['من فوائد الصوم:','يعوّد المسلم الصبر ويشعره بالفقراء','يجعله بخيلاً','يجعله كسولاً','يجعله أنانياً'],
  ['من فوائد الزكاة:','تعوّد المسلم الكرم وتزرع المحبة','تزيد البخل','تزرع الحقد','تفقر المعطي'],
  ['من فوائد الحج:','الشعور بالمساواة والوحدة بين المسلمين','التفاخر','التباعد','التكبر'],
  ['للعبادة دور كبير في:','صلاح الفرد واستقامته','فساد المجتمع','الكسل','الخصام']]},
 {sem:2, unit:'الأخلاق والآداب', t:'مفاسد ذميمة (الكذب – الحسد – التنابز بالألقاب)', q:[
  ['الكذب هو:','الإخبار عن الشيء بخلاف ما هو عليه في الواقع','قول الحقيقة','السكوت','المدح'],
  ['الحسد هو:','أن يكره الإنسان النعمة للآخرين ويتمنى زوالها','أن يتمنى الخير للناس','أن يشكر الله','أن يساعد غيره'],
  ['التنابز بالألقاب هو:','أن يدعو الإنسان أخاه بلقب يكرهه','أن يناديه باسمه','أن يمدحه','أن يسلّم عليه'],
  ['قال تعالى: «ولا تلمزوا أنفسكم ولا تنابزوا بـ ...»:','الألقاب','الأسماء الحسنة','الأموال','الأعمال'],
  ['الكذب مزاحاً:','حرام لا يجوز','مباح','واجب','مستحب'],
  ['من آثار الحسد على صاحبه:','يعيش في همّ وحزن دائم','يعيش سعيداً','يحبه الناس','يزداد رزقه'],
  ['من آثار التنابز بالألقاب:','زرع الشقاق والعداوة بين الناس','زيادة المحبة','نشر الألفة','التعاون'],
  ['هذه المفاسد تعرّض صاحبها لـ:','غضب الله تعالى','رضا الله','محبة الناس','الأجر'],
  ['إذا سمعت زميلاً ينادي غيره بلقب يكرهه فإني:','أنصحه بلطف','أضحك معه','أشاركه','أشجعه']]},
 {sem:2, unit:'السيرة النبوية', t:'أعمال النبي ﷺ في المدينة المنورة', q:[
  ['أول مسجد بُني في الإسلام:','مسجد قباء','المسجد النبوي','المسجد الأقصى','المسجد الحرام'],
  ['قال النبي ﷺ عن ناقته: «خلّوا سبيلها فإنها ...»:','مأمورة','متعبة','جائعة','ضائعة'],
  ['بركت ناقة النبي ﷺ في أرض ليتيمين من:','بني النجار','بني قريظة','بني هاشم','بني عبد الأشهل'],
  ['نزل النبي ﷺ في المدينة عند الصحابي:','أبي أيوب الأنصاري رضي الله عنه','سعد بن معاذ رضي الله عنه','أبي بكر الصديق رضي الله عنه','عثمان بن عفان رضي الله عنه'],
  ['أول عمل قام به النبي ﷺ في المدينة:','بناء المسجد النبوي','كتابة الوثيقة','غزوة بدر','المؤاخاة'],
  ['شارك النبي ﷺ في بناء المسجد:','بنقل الحجارة بنفسه','بالمراقبة فقط','بالمال فقط','لم يشارك'],
  ['آخى النبي ﷺ بين:','المهاجرين والأنصار','قريش واليهود','الأوس والمشركين','أهل مكة وأهل الطائف'],
  ['آخى النبي ﷺ بين عبد الرحمن بن عوف و:','سعد بن الربيع','سعد بن معاذ','أبي بكر الصديق','بلال الحبشي'],
  ['قال عبد الرحمن بن عوف لأخيه الأنصاري: بارك الله لك في أهلك ومالك ...:','دلّني على السوق','أعطني نصف مالك','أعطني بيتك','لا أريد شيئاً'],
  ['كتب النبي ﷺ وثيقة تنظّم العلاقة بين المسلمين و:','اليهود','الفرس','الروم','الحبشة']]},
 {sem:2, unit:'القرآن الكريم', t:'الرسول ﷺ والقرآن الكريم (من سورة طه)', q:[
  ['رقم سورة طه في المصحف:','العشرون','الثامنة عشرة','الثلاثون','العاشرة'],
  ['كانت آيات من سورة طه سبباً في إسلام:','عمر بن الخطاب رضي الله عنه','أبي بكر الصديق رضي الله عنه','عثمان بن عفان رضي الله عنه','حمزة رضي الله عنه'],
  ['أكمل: «ما أنزلنا عليك القرآن ...»:','لتشقى','لتنام','لتغضب','لتحزن'],
  ['أكمل: «إلا تذكرةً لمن ...»:','يخشى','يكتب','ينام','يسافر'],
  ['معنى «تذكرة»:','موعظة','قصة','حكاية','لعبة'],
  ['معنى «الثرى»:','التراب','السماء','البحر','الجبل'],
  ['معنى «العُلى»:','العالية','المنخفضة','الصغيرة','البعيدة'],
  ['أكمل: «فإنه يعلم السرّ و ...»:','أخفى','أعلن','أظهر','أكثر'],
  ['أكمل: «الله لا إله إلا هو له الأسماء ...»:','الحسنى','الكثيرة','الجميلة','العظيمة'],
  ['عدد حروف الإخفاء الحقيقي:','خمسة عشر حرفاً','ستة أحرف','أربعة أحرف','حرف واحد']]},
 {sem:2, unit:'الحديث الشريف', t:'فضل الصدقة', q:[
  ['أكمل الحديث: «اليد العليا خير من اليد ...»:','السفلى','اليسرى','القوية','الكبيرة'],
  ['معنى «اليد العليا»:','يد المعطي','يد الآخذ','اليد اليمنى','اليد القوية'],
  ['معنى «اليد السفلى»:','يد الآخذ','يد المعطي','اليد اليسرى','يد العامل'],
  ['أكمل: «وابدأ بمن ...»:','تعول','تحب','تعرف','ترى'],
  ['معنى «عن ظهر غنى»:','ما زاد عن حاجة المتصدّق وأهله','كل ماله','ماله المقترض','لا شيء'],
  ['أكمل: «ومن يستعفف ...»:','يعفّه الله','يغنه الناس','يفتقر','يمرض'],
  ['راوي الحديث:','حكيم بن حزام رضي الله عنه','أبو هريرة رضي الله عنه','أنس بن مالك رضي الله عنه','سعد بن معاذ رضي الله عنه'],
  ['أسلم حكيم بن حزام رضي الله عنه يوم:','فتح مكة','بدر','الهجرة','أحد'],
  ['ليس من صور العفّة:','سؤال الناس المال دون حاجة','سؤال الله وحده','العمل وبذل الجهد','التوكل على الله'],
  ['يُقدَّم في النفقة على غيرهم:','من يعولهم الإنسان من أهله','الغرباء','الأصدقاء الأغنياء','لا أحد']]},
 {sem:2, unit:'السيرة النبوية', t:'سعد بن معاذ رضي الله عنه', q:[
  ['كان سعد بن معاذ رضي الله عنه سيّد:','الأوس','الخزرج','قريش','ثقيف'],
  ['أسلم سعد بن معاذ رضي الله عنه على يد:','مصعب بن عمير رضي الله عنه','أبي بكر الصديق رضي الله عنه','النبي ﷺ في مكة','عمر بن الخطاب رضي الله عنه'],
  ['كان إسلام سعد بن معاذ رضي الله عنه سبباً في:','إسلام قومه','هجرة المسلمين إلى الحبشة','غزوة أحد','صلح الحديبية'],
  ['تكلّم سعد بن معاذ رضي الله عنه نيابة عن الأنصار حين استشارهم النبي ﷺ في غزوة:','بدر','الخندق','تبوك','حنين'],
  ['قال سعد رضي الله عنه: لو استعرضت بنا هذا البحر فخضته:','لخضناه معك','لرجعنا','لتركناك','لخفنا'],
  ['أصيب سعد بن معاذ رضي الله عنه بسهم في غزوة:','الخندق','بدر','أحد','حنين'],
  ['حكم سعد بن معاذ رضي الله عنه في:','بني قريظة','بني قينقاع','قريش','أهل الطائف'],
  ['قال النبي ﷺ عند موت سعد: «اهتزّ عرش الرحمن لموت ...»:','سعد بن معاذ','حمزة','مصعب','أبي بكر'],
  ['توفي سعد بن معاذ رضي الله عنه سنة:','خمس للهجرة','عشر للهجرة','سنة الهجرة','ثلاث عشرة للبعثة']]},
 {sem:2, unit:'القرآن الكريم', t:'إبراهيم عليه السلام والدعوة إلى التوحيد (من سورة إبراهيم)', q:[
  ['رقم سورة إبراهيم في المصحف:','الرابعة عشرة','العاشرة','العشرون','السادسة'],
  ['أكمل: «ربّ اجعل هذا البلد ...»:','آمناً','غنياً','كبيراً','جميلاً'],
  ['البلد المقصود في دعاء إبراهيم عليه السلام:','مكة المكرمة','المدينة المنورة','القدس','دمشق'],
  ['دعا إبراهيم عليه السلام ربه أن يجنّبه وبنيه:','عبادة الأصنام','الفقر','السفر','المرض'],
  ['ترك إبراهيم عليه السلام أهله عند البيت المحرم:','بوادٍ غير ذي زرع','بأرض خصبة','بجوار نهر','في مدينة كبيرة'],
  ['معنى «أفئدة»:','قلوباً','بيوتاً','أموالاً','أشجاراً'],
  ['معنى «تهوي إليهم»:','تميل إليهم وتسرع','تبتعد عنهم','تخاف منهم','تنساهم'],
  ['أكمل: «ربّ اجعلني مقيم ...»:','الصلاة','البيت','العدل','الحج'],
  ['أكمل: «ربّنا اغفر لي ولوالديّ و ...»:','للمؤمنين يوم يقوم الحساب','لأصدقائي','لجيراني','للناس في الدنيا'],
  ['تدلّ الآيات على أن الأنبياء:','أعظم الناس دعاءً لربهم ورحمة بغيرهم','لا يدعون','يطلبون الدنيا فقط','لا يهتمون بأولادهم']]},
 {sem:2, unit:'الحديث الشريف', t:'تحريم الغيبة', q:[
  ['عرّف النبي ﷺ الغيبة بأنها:','ذكرك أخاك بما يكره','مدحك أخاك','السلام على أخيك','نصيحة أخيك سراً'],
  ['إن كان في أخيك ما تقول عنه فقد:','اغتبته','نصحته','أكرمته','بهتّه'],
  ['إن لم يكن في أخيك ما تقول عنه فقد:','بهتّه','اغتبته فقط','مدحته','نصحته'],
  ['البهتان هو:','وصف الإنسان بسوء ليس فيه','ذكر عيب موجود فيه','مدحه','الدعاء له'],
  ['راوي حديث الغيبة:','أبو هريرة رضي الله عنه','أنس بن مالك رضي الله عنه','ابن عمر رضي الله عنهما','أبو ذر رضي الله عنه'],
  ['شبّه الله تعالى المغتاب بمن يأكل:','لحم أخيه ميتاً','طعاماً حراماً','مال اليتيم','الربا'],
  ['حكم الغيبة والبهتان:','حرام','مباح','مستحب','واجب'],
  ['من أضرار الغيبة أنها:','تزرع الحقد بين الناس','تزيد المحبة','تنشر الألفة','تقوي العلاقات'],
  ['إذا سمعت أحداً يغتاب زميلي فإني:','أدافع عنه وأنصح المغتاب','أضحك','أشارك في الحديث','أنقل الكلام']]},
 {sem:2, unit:'الأخلاق والآداب', t:'العفو والتسامح', q:[
  ['العفو هو:','التجاوز عن السيئات وعدم المؤاخذة','ردّ الإساءة بمثلها','الانتقام','الغضب'],
  ['قال النبي ﷺ لأهل مكة يوم الفتح: «اذهبوا فأنتم ...»:','الطلقاء','الأسرى','الأعداء','العبيد'],
  ['لما سأل الأعرابي النبي ﷺ: من يمنعك مني؟ قال ﷺ:','الله','أصحابي','سيفي','قوتي'],
  ['فعل النبي ﷺ مع الأعرابي بعد أن سقط السيف من يده:','عفا عنه','قتله','سجنه','طرده'],
  ['أكمل: «فاصفح الصفح ...»:','الجميل','الكبير','القليل','السريع'],
  ['أكمل: «فمن عفا وأصلح فأجره على ...»:','الله','الناس','نفسه','الحاكم'],
  ['أكمل: «ادفع بالتي هي ...»:','أحسن','أقوى','أسرع','أكبر'],
  ['من ثمار العفو أنه:','يزرع المحبة والتراحم بين الناس','يزرع العداوة','يضعف المسلم','يجلب الخسارة'],
  ['العافي عن الناس:','يقتدي برسول الله ﷺ','ضعيف','جبان','خاسر']]},
 {sem:2, unit:'القرآن الكريم', t:'آيات الله في الكون (من سورة ق)', q:[
  ['رقم سورة ق في المصحف:','الخمسون','الأربعون','الستون','العشرون'],
  ['أكمل: «أفلم ينظروا إلى السماء فوقهم كيف ...»:','بنيناها وزيّنّاها','رفعناها فقط','خلقناها بالأمس','أنزلناها'],
  ['معنى «فُروج»:','شقوق','نجوم','أبواب','غيوم'],
  ['معنى «رواسي»:','جبالاً ثوابت','أنهاراً','أشجاراً','بحاراً'],
  ['معنى «زوج بهيج»:','صنف حسن جميل','زوجان من الطيور','نهر جارٍ','حجر كريم'],
  ['معنى «عبد مُنيب»:','راجع إلى الله بالتوبة','غافل','مسافر','نائم'],
  ['معنى «حبّ الحصيد»:','الزرع الذي يُحصد','الثمر الطري','الماء','الشجر'],
  ['معنى «النخل باسقات»:','طوالاً شامخات','قصيرة','مائلة','يابسة'],
  ['معنى «طلعٌ نضيد»:','متراكم بعضه فوق بعض','متفرق','يابس','صغير'],
  ['أكمل: «وأحيينا به بلدة ميتاً كذلك ...»:','الخروج','الحساب','المطر','النبات']]},
 {sem:2, unit:'العقيدة', t:'قصة سيدنا موسى عليه السلام', q:[
  ['أمر فرعون بقتل كل مولود ذكر من:','بني إسرائيل','المصريين','أهل الشام','العرب'],
  ['أوحى الله إلى أم موسى أن تضعه في صندوق وتلقيه في:','اليم (نهر النيل)','البئر','الصحراء','البيت'],
  ['التقطت موسى عليه السلام من الماء:','امرأة فرعون','أخته','أمه','ابنة الرجل الصالح'],
  ['رفض موسى عليه السلام كل المرضعات حتى عاد إلى:','أمه','عمته','جدته','امرأة فرعون'],
  ['خرج موسى عليه السلام من مصر خائفاً متجهاً إلى:','مدين','العراق','اليمن','مكة'],
  ['رأى موسى عليه السلام النار عند جبل:','الطور','أحد','حراء','عرفات'],
  ['من معجزات موسى عليه السلام:','العصا واليد البيضاء','الناقة','إحياء الموتى','تكليم الناس في المهد'],
  ['طلب موسى عليه السلام من ربه أن يرسل معه وزيراً هو أخوه:','هارون عليه السلام','يوسف عليه السلام','يعقوب عليه السلام','شعيب عليه السلام'],
  ['كانت نهاية فرعون المتكبّر:','الغرق في البحر مع جنوده','الموت في قصره','الهرب','الإيمان والنجاة'],
  ['قالت ابنة الرجل الصالح: «إن خير من استأجرت القويّ ...»:','الأمين','الغني','الكبير','الذكي']]}
]);

/* الصف السادس — الفصل الأول (الوحدات ١–٣ كما في فهرس «الفصل الأول») */
REPL(6, 'isl', 1, [
 {sem:1, unit:'القرآن الكريم', t:'جلال الله تعالى في الكون (من سورة الملك)', q:[
  ['رقم سورة الملك في المصحف:','السابعة والستون','الخمسون','السبعون','الستون'],
  ['عدد آيات سورة الملك:','ثلاثون آية','عشرون آية','أربعون آية','خمس عشرة آية'],
  ['من فضل سورة الملك أنها:','شفعت لصاحبها حتى غُفر له','أطول سورة','أول سورة نزلت','آخر سورة نزلت'],
  ['معنى «تبارك»:','تعالى وتعظّم','نام','غاب','تعب'],
  ['خلق الله الموت والحياة «ليبلوكم» أي:','ليمتحنكم','ليعاقبكم','ليغنيكم','ليفقركم'],
  ['معنى «طباقاً»:','بعضها فوق بعض','متفرقة','صغيرة','مظلمة'],
  ['معنى «فُطور»:','شقوق','نجوم','أبواب','غيوم'],
  ['معنى «تميّز من الغيظ»:','تكاد تتقطع غضباً على الكفار','تفرح','تهدأ','تنطفئ'],
  ['معنى «فسُحقاً»:','بُعداً عن رحمة الله تعالى','قرباً','فرحاً','نجاحاً'],
  ['أكمل: «ألا يعلم من خلق وهو اللطيف ...»:','الخبير','الكريم','العظيم','الرحيم']]},
 {sem:1, unit:'العقيدة', t:'الإيمان بالله تعالى فطرة', q:[
  ['الفطرة هي:','الطبيعة والخِلقة التي جعل الله الإنسان عليها','العادة المكتسبة','المال','العلم المكتسب'],
  ['الإيمان بوجود الله تعالى:','شعور فطري مغروس في النفس الإنسانية','يحتاج دائماً إلى معلم','لا يوجد عند الناس','خاص بالعلماء'],
  ['أكمل الحديث: «ما من مولود إلا يولد على ...»:','الفطرة','الضلال','الجهل','الشر'],
  ['من أسباب انحراف الفطرة:','البيئة الفاسدة والانغماس في الأهواء والمعاصي','الصحبة الصالحة','قراءة القرآن','بر الوالدين'],
  ['أرسل الله الرسل ليـ:','يصحّحوا للناس مسلكهم ويبيّنوا لهم الطريق القويم','يجمعوا المال','يحكموا الناس بالقوة فقط','يتركوا الناس'],
  ['تظهر الفطرة الإيمانية بوضوح عند:','الشدة والضيق كالغرق في البحر','الفرح فقط','اللعب','النوم'],
  ['من آثار الفطرة الإيمانية السليمة:','إيمان راسخ يورث الطمأنينة','القلق الدائم','الأنانية','سوء الخلق'],
  ['يحافظ المسلم على فطرته السليمة بـ:','ذكر الله تعالى وتلاوة القرآن الكريم','مصاحبة رفاق السوء','الكذب','ترك الصلاة'],
  ['الفطرة الإيمانية موجودة عند:','جميع الناس','المسلمين فقط','العلماء فقط','الكبار فقط']]},
 {sem:1, unit:'الحديث الشريف', t:'فضل حفظ الحديث الشريف', q:[
  ['أكمل الحديث: «نضّر الله امرأً سمع منا حديثاً فحفظه حتى ...»:','يبلّغه','ينساه','يكتمه','يغيّره'],
  ['معنى «نضّر الله»:','دعاء بالنضارة أي البهجة والبهاء','دعاء عليه','أبعده الله','أغناه الله بالمال'],
  ['معنى «أوعى»:','أكثر حفظاً وفهماً','أقل فهماً','أكبر سناً','أكثر مالاً'],
  ['راوي الحديث:','عبد الله بن مسعود رضي الله عنه','أبو هريرة رضي الله عنه','أنس بن مالك رضي الله عنه','عائشة رضي الله عنها'],
  ['أخرج الحديث الإمام:','الترمذي','مالك','النسائي','ابن ماجه'],
  ['كان عبد الله بن مسعود رضي الله عنه:','من السابقين إلى الإسلام وحافظاً متقناً للقرآن','من مسلمي فتح مكة','من أهل الطائف','لم يشهد بدراً'],
  ['توفي ابن مسعود رضي الله عنه ودفن في:','البقيع بالمدينة المنورة','مكة المكرمة','دمشق','الكوفة'],
  ['قال النبي ﷺ: «من كذب عليّ متعمّداً فليتبوّأ مقعده من ...»:','النار','الجنة','المسجد','البيت'],
  ['من واجبي تجاه حديث النبي ﷺ:','حفظه بدقة وإتقان والعمل به','الزيادة عليه من عندي','إخفاؤه','نسيانه']]},
 {sem:1, unit:'القرآن الكريم', t:'الدعوة إلى التوحيد (من سورة الأنبياء)', q:[
  ['رقم سورة الأنبياء في المصحف:','الحادية والعشرون','العشرون','الثلاثون','الخامسة عشرة'],
  ['أكمل: «ولقد آتينا إبراهيم ...»:','رشده','ملكاً','مالاً','قصراً'],
  ['معنى «التماثيل» في الآيات:','الأصنام','الأشجار','البيوت','النجوم'],
  ['معنى «عاكفون»:','مواظبون على عبادتها','معرضون عنها','مكسّرون لها','خائفون منها'],
  ['أجاب قوم إبراهيم عن عبادتهم للأصنام بأنهم:','وجدوا آباءهم لها عابدين','اقتنعوا بالدليل','رأوها تنفع','سمعوها تتكلم'],
  ['معنى «جُذاذاً»:','قطعاً صغيرة مكسّرة','أصناماً كبيرة','ذهباً','حجارة كريمة'],
  ['ترك إبراهيم عليه السلام من الأصنام:','كبيرهم','أصغرها','أجملها','لا شيء'],
  ['اعتمد إبراهيم عليه السلام في دعوة قومه أسلوب:','الحوار والحجة','الإجبار','العقاب','التهديد'],
  ['أراد إبراهيم عليه السلام أن يثبت لقومه أن الأصنام:','لا تضر ولا تنفع فلا تستحق العبادة','آلهة قوية','تتكلم','ترزق'],
  ['أكمل: «قال بل ربكم ربّ السماوات والأرض الذي ...»:','فطرهن','زيّنهن','رفعهن','بسطهن']]},
 {sem:1, unit:'السيرة النبوية', t:'غزوة بدر الكبرى', q:[
  ['وقعت غزوة بدر الكبرى في السنة:','الثانية للهجرة','الثالثة للهجرة','الخامسة للهجرة','الأولى للبعثة'],
  ['وقعت غزوة بدر في شهر:','رمضان','شوال','محرّم','ذي الحجة'],
  ['خرج المسلمون في البداية لملاقاة:','قافلة قريش العائدة من الشام بقيادة أبي سفيان','جيش الروم','قبيلة ثقيف','يهود المدينة'],
  ['قال للنبي ﷺ عن الأنصار: قد آمنا بك وصدّقناك فامضِ لما أردت:','سعد بن معاذ رضي الله عنه','أبو بكر الصديق رضي الله عنه','عمر بن الخطاب رضي الله عنه','علي بن أبي طالب رضي الله عنه'],
  ['أشار على النبي ﷺ باختيار مكان قرب ماء بدر:','الحباب بن المنذر رضي الله عنه','سلمان الفارسي رضي الله عنه','خالد بن الوليد رضي الله عنه','مصعب بن عمير رضي الله عنه'],
  ['دعا النبي ﷺ قبل المعركة: «اللهم أنجز لي ما ...»:','وعدتني','أعطيتني','علّمتني','رزقتني'],
  ['أمدّ الله المؤمنين في بدر بـ:','الملائكة','الرياح الشديدة فقط','الأمطار الغزيرة فقط','جيش من الحبشة'],
  ['قُتل من المشركين في بدر:','سبعون','عشرة','ثلاثمئة','ألف'],
  ['كان فداء الأسير الذي يعرف القراءة والكتابة:','أن يعلّم عشرة من أولاد المسلمين','ألف دينار','أن يحارب مع المسلمين','لا فداء له'],
  ['سُمّي يوم بدر:','يوم الفرقان','يوم الأحزاب','يوم الفتح','يوم الدين']]},
 {sem:1, unit:'القرآن الكريم', t:'الله تعالى هو المعبود بحق (من سورة الملك)', q:[
  ['ما يمسك الطير في السماء وهي صافّات ويقبضن إلا:','الرحمن','الهواء وحده','الناس','الأجنحة وحدها'],
  ['معنى «لجّوا في عتوّ ونفور»:','تمادوا في الطغيان والبعد عن الحق','رجعوا إلى الحق','آمنوا','تابوا'],
  ['معنى «ذرأكم»:','خلقكم وبثّكم','أطعمكم','أخافكم','أغناكم'],
  ['معنى «زُلفة»:','قريباً','بعيداً','كبيراً','مظلماً'],
  ['معنى «غوراً»:','ذاهباً في الأرض','جارياً على الأرض','مالحاً','بارداً'],
  ['معنى «ماء مَعين»:','ماء جارٍ على وجه الأرض','ماء مالح','ماء راكد','ماء قليل'],
  ['أكمل: «أفمن يمشي مكبّاً على وجهه أهدى أمّن يمشي سويّاً على ...»:','صراط مستقيم','الأرض','الجبل','الطريق'],
  ['إذا جاء بعد الميم الساكنة حرف الباء فالحكم:','إخفاء شفوي','إظهار شفوي','إدغام متماثلين','إقلاب'],
  ['إذا جاء بعد الميم الساكنة ميم فالحكم:','إدغام متماثلين','إخفاء شفوي','إظهار شفوي','إقلاب'],
  ['نحافظ على نعمة الماء العذب بـ:','عدم الإسراف فيه وشكر الله عليه','هدره','تلويثه','تركه مفتوحاً']]},
 {sem:1, unit:'العقيدة', t:'الإسلام دين التوحيد', q:[
  ['معنى الوحدانية:','الله تعالى واحد في ذاته وصفاته وأفعاله','الله له شريك','الآلهة كثيرة','الإنسان واحد'],
  ['أكمل: «ليس كمثله شيء وهو السميع ...»:','البصير','العليم','القدير','الحكيم'],
  ['معنى «لا إله إلا الله»:','لا معبود بحق إلا الله','لا خالق إلا الإنسان','الله أكبر','الحمد لله'],
  ['التوحيد هو الأساس المشترك بين:','الرسالات السماوية جميعها','الأديان الوثنية','القبائل العربية','الشعراء'],
  ['أكمل: «لو كان فيهما آلهة إلا الله ...»:','لفسدتا','لصلحتا','لتساوتا','لبقيتا'],
  ['من الأدلة العقلية على الوحدانية:','نظام الكون الدقيق','كثرة الأصنام','اختلاف الناس','قوة الملوك'],
  ['الله تعالى وحده المستحق لـ:','العبادة والطاعة والتعظيم','الشريك','النسيان','الإنكار'],
  ['من ثمرات التوحيد في حياة المؤمن:','إخلاص العبادة لله والطمأنينة','الخوف من المخلوقات','الأنانية','التشاؤم'],
  ['آخذ الدواء وأعتقد أن الشافي هو:','الله تعالى','الدواء وحده','الطبيب وحده','الصيدلي']]},
 {sem:1, unit:'الحديث الشريف', t:'الحِلم والأناة', q:[
  ['أكمل الحديث: «إن فيك خصلتين يحبهما الله: الحلم و ...»:','الأناة','الشجاعة','الكرم','الصدق'],
  ['قال النبي ﷺ هذا الحديث لـ:','أشج عبد القيس','أبي بكر الصديق','ابن عباس','بلال'],
  ['أخرج الحديث الإمام:','مسلم','الترمذي','أبو داود','مالك'],
  ['معنى «الحلم»:','ضبط النفس عند الغضب مع تحكيم العقل','سرعة الغضب','الكسل','الخوف'],
  ['معنى «الأناة»:','التثبّت وعدم العجلة','التسرّع','التردّد الدائم','الكسل'],
  ['راوي الحديث ابن عباس رضي الله عنهما لُقّب بـ:','حبر الأمة','سيف الله','الفاروق','ذي النورين'],
  ['دعا النبي ﷺ لابن عباس: «اللهم فقّهه في الدين وعلّمه ...»:','التأويل','الحساب','الشعر','التجارة'],
  ['قال النبي ﷺ: «ليس الشديد بالصُّرعة، إنما الشديد الذي يملك نفسه عند ...»:','الغضب','الطعام','النوم','الفرح'],
  ['من ثمار الحلم والأناة:','معرفة الحقيقة وإتقان العمل','الندم','الخسران','الخصام'],
  ['العجلة والتسرّع في الحكم على الأمور طريق:','الندم والخسران','النجاح','المحبة','الحكمة']]},
 {sem:1, unit:'العبادات', t:'الطهارة (أهميتها وأنواعها)', q:[
  ['الطهارة في الاصطلاح:','رفع حدث أو إزالة نجس','الاغتسال للتبريد','لبس الثياب الجديدة','التطيّب فقط'],
  ['أكمل الحديث: «الطُّهور شطر ...»:','الإيمان','الصلاة','الدين كله','الحياة'],
  ['الحدث الأصغر يُرفع بـ:','الوضوء','الغسل فقط','التطيّب','تغيير الثياب'],
  ['الحدث الأكبر يُرفع بـ:','الغسل','الوضوء فقط','السواك','غسل اليدين'],
  ['الطهارة من النجس تكون في:','البدن والثوب والمكان','البدن فقط','الثوب فقط','المكان فقط'],
  ['الماء الطهور هو:','النازل من السماء أو النابع من الأرض الباقي على أصل خلقته','الماء المتغيّر بالنجاسة','العصير','ماء الورد'],
  ['من الدعاء بعد الوضوء: «اللهم اجعلني من التوابين واجعلني من ...»:','المتطهرين','الأغنياء','الأقوياء','المسافرين'],
  ['أكمل قوله تعالى: «إن الله يحب التوابين ويحب ...»:','المتطهرين','المسرفين','المتكبرين','الغافلين'],
  ['أول أعمال الوضوء:','النية والتسمية','غسل الرجلين','مسح الرأس','غسل الوجه'],
  ['الإسراف في ماء الوضوء:','مكروه منهي عنه','مستحب','واجب','سنة']]},
 {sem:1, unit:'الأخلاق والآداب', t:'الإخلاص لله تعالى', q:[
  ['الإخلاص هو:','تصفية العمل من الشوائب كالرياء وجعله خالصاً لوجه الله','العمل لمدح الناس','ترك العمل','إظهار العمل للتفاخر'],
  ['العمل بقصد رضا الناس ومدحهم يسمّى:','رياءً','إخلاصاً','إحساناً','توكلاً'],
  ['أكمل: «وما أُمروا إلا ليعبدوا الله مخلصين له ...»:','الدين','المال','العلم','الوقت'],
  ['من أنواع الإخلاص:','الإخلاص في العقيدة والعبادة والعمل','الإخلاص في الكلام فقط','الإخلاص للناس','الإخلاص في اللعب'],
  ['الإخلاص في العمل يكون بـ:','إتقانه والإتيان به على أكمل وجه','إهماله','التفاخر به','تركه'],
  ['أكمل: «قل إن صلاتي ونسكي ومحياي ومماتي لله ...»:','رب العالمين','الواحد القهار','العزيز الحكيم','الغفور الرحيم'],
  ['وزّع الصحابي قافلة تجارته على فقراء المسلمين وقال: إن الله يعطيني بالدرهم سبعمئة:','عثمان بن عفان رضي الله عنه','أبو هريرة رضي الله عنه','بلال رضي الله عنه','زيد بن ثابت رضي الله عنه'],
  ['قال الأبرار: «إنما نطعمكم لوجه الله لا نريد منكم جزاءً ولا ...»:','شكوراً','طعاماً','مالاً','كلاماً'],
  ['يعين على الإخلاص:','مراقبة الله تعالى وتجديد النية','حب الشهرة','طلب مدح الناس','التفاخر']]},
 {sem:1, unit:'القرآن الكريم', t:'نبيّ ذو خلق عظيم (من سورة القلم)', q:[
  ['رقم سورة القلم في المصحف:','الثامنة والستون','السابعة والستون','الخمسون','السبعون'],
  ['أقسم الله تعالى في أول السورة بـ:','القلم','الشمس','الفجر','العصر'],
  ['أكمل: «وإنك لعلى خُلُق ...»:','عظيم','كريم','حسن','جميل'],
  ['معنى «غير ممنون»:','غير مقطوع','قليل','مؤقت','ممنوع'],
  ['معنى «المفتون»:','المجنون','الغني','الحكيم','الشجاع'],
  ['معنى «همّاز»:','عيّاب للناس','كريم','صادق','صامت'],
  ['معنى «مشّاء بنميم»:','ينقل الكلام بين الناس للإفساد','يمشي كثيراً','يصلح بين الناس','يسافر كثيراً'],
  ['منع أصحاب البستان حق:','المساكين','الجيران الأغنياء','التجار','الضيوف الأغنياء'],
  ['أصبح البستان بعد عقابه:','كالصريم أي كالليل الأسود','أخضر نضراً','مليئاً بالثمار','كما كان'],
  ['يحذر المؤمن من صفات المنافقين مثل:','الحلف الكاذب والنميمة والبخل','الصدق','الكرم','الأمانة']]},
 {sem:1, unit:'الحديث الشريف', t:'أداء الفرائض', q:[
  ['قال النبي ﷺ هذا الحديث في:','حجة الوداع','غزوة بدر','فتح مكة','الهجرة'],
  ['أكمل الحديث: «اتقوا الله ربكم وصلّوا ...»:','خمسكم','ليلكم','ركعتين','جماعة فقط'],
  ['معنى «صوموا شهركم»:','صوموا رمضان','صوموا كل الشهور','صوموا شوال','صوموا يوماً واحداً'],
  ['أكمل: «وأدّوا زكاة ...»:','أموالكم','أعمالكم','بيوتكم','أوقاتكم'],
  ['معنى «ذا أمركم»:','ولاة أموركم','آباءكم فقط','أصدقاءكم','جيرانكم'],
  ['جزاء من عمل بهذه الوصايا:','دخول جنة ربه','المال الكثير','الشهرة','لا جزاء'],
  ['راوي الحديث:','أبو أمامة الباهلي رضي الله عنه','أبو هريرة رضي الله عنه','ابن عمر رضي الله عنهما','جابر رضي الله عنه'],
  ['في الجنة باب يدخل منه الصائمون اسمه:','الريان','السلام','الرحمة','الفردوس'],
  ['أكمل: «من صام رمضان إيماناً واحتساباً غُفر له ...»:','ما تقدّم من ذنبه','ماله','شهره فقط','لا شيء'],
  ['طاعة أولي الأمر واجبة ما لم تكن في:','معصية الله تعالى','مصلحة الوطن','الخير','العدل']]},
 {sem:1, unit:'القرآن الكريم', t:'الله تعالى خالق كل شيء (سورة الشمس)', q:[
  ['رقم سورة الشمس في المصحف:','الحادية والتسعون','التسعون','الثمانون','المئة'],
  ['عدد آيات سورة الشمس:','خمس عشرة آية','عشر آيات','عشرون آية','ثلاثون آية'],
  ['معنى «ضحاها»:','ضوؤها','حرارتها','غروبها','ظلّها'],
  ['معنى «تلاها»:','تبعها','سبقها','أخفاها','أكلها'],
  ['معنى «طحاها»:','بسطها ومهّدها','رفعها','أخفاها','أغرقها'],
  ['معنى «زكّاها»:','طهّرها من المعاصي','أهملها','أخفاها بالمعاصي','أتعبها'],
  ['أكمل: «قد أفلح من زكّاها وقد خاب من ...»:','دسّاها','طحاها','جلّاها','سوّاها'],
  ['أُرسل إلى قوم ثمود:','صالح عليه السلام','هود عليه السلام','شعيب عليه السلام','لوط عليه السلام'],
  ['كانت معجزة صالح عليه السلام:','الناقة','العصا','السفينة','النار'],
  ['معنى «فدمدم عليهم ربهم»:','أهلكهم','رحمهم','أغناهم','هداهم']]},
 {sem:1, unit:'العبادات', t:'الصلاة (فضلها – كيفيتها)', q:[
  ['الصلاة:','عماد الدين وركن الإسلام المتين','سنة','تطوع فقط','عادة'],
  ['أول ما يُحاسب عليه العبد يوم القيامة:','الصلاة','الصوم','الزكاة','الحج'],
  ['فُرضت الصلاة في:','السماء ليلة المعراج','المدينة بعد بدر','غار حراء','الحبشة'],
  ['عدد ركعات صلاة المغرب:','ثلاث ركعات','ركعتان','أربع ركعات','خمس ركعات'],
  ['عدد ركعات صلاة الفجر:','ركعتان','ثلاث ركعات','أربع ركعات','ركعة واحدة'],
  ['تبدأ الصلاة بـ:','تكبيرة الإحرام','التسليم','السجود','التشهد'],
  ['نقول في الركوع:','سبحان ربي العظيم','سبحان ربي الأعلى','سمع الله لمن حمده','الله أكبر'],
  ['نقول عند الرفع من الركوع:','سمع الله لمن حمده','سبحان ربي العظيم','السلام عليكم','بسم الله'],
  ['يبدأ وقت صلاة الظهر من:','زوال الشمس عن وسط السماء','طلوع الفجر','غروب الشمس','منتصف الليل'],
  ['تنتهي الصلاة بـ:','التسليم','تكبيرة الإحرام','الركوع','قراءة الفاتحة']]},
 {sem:1, unit:'السيرة النبوية', t:'أبو بكر الصديق رضي الله عنه', q:[
  ['اسم أبي بكر الصديق رضي الله عنه:','عبد الله بن عثمان','عمر بن الخطاب','عثمان بن عفان','علي بن أبي طالب'],
  ['كان أبو بكر رضي الله عنه أول من أسلم من:','الرجال','الصبيان','النساء','الموالي'],
  ['سُمّي بالصديق لأنه:','بادر إلى تصديق النبي ﷺ','كان غنياً','كان طويلاً','كان شاعراً'],
  ['صحب أبو بكر رضي الله عنه النبي ﷺ في:','الهجرة إلى المدينة','الهجرة إلى الحبشة','رحلة الطائف','رحلة الشام'],
  ['قال النبي ﷺ لأبي بكر في الغار: «لا تحزن إن الله ...»:','معنا','قريب','ناصرنا','يرانا'],
  ['قال أبو بكر عند وفاة النبي ﷺ: «من كان يعبد محمداً فإن محمداً قد مات، ومن كان يعبد الله فإن الله ...»:','حيّ لا يموت','غفور رحيم','عزيز حكيم','سميع بصير'],
  ['من أعماله العظيمة في خلافته:','جمع القرآن الكريم في مصحف واحد','بناء مسجد قباء','فتح مكة','كتابة وثيقة المدينة'],
  ['أسند أبو بكر رضي الله عنه جمع القرآن إلى:','زيد بن ثابت رضي الله عنه','أبي هريرة رضي الله عنه','خالد بن الوليد رضي الله عنه','سلمان الفارسي رضي الله عنه'],
  ['قاتل أبو بكر رضي الله عنه المرتدين و:','مانعي الزكاة','أهل الحبشة','الأنصار','أهل المدينة'],
  ['توفي أبو بكر الصديق رضي الله عنه سنة:','ثلاث عشرة للهجرة','عشر للهجرة','عشرين للهجرة','خمس للهجرة']]}
]);

/* الصف السادس — الفصل الثاني (الوحدات ٤–٦ كما في فهرس «الفصل الثاني») */
REPL(6, 'isl', 2, [
 {sem:2, unit:'القرآن الكريم', t:'جزاء المتقين وعقاب المكذبين (من سورة القلم)', q:[
  ['أكمل: «إنّ للمتقين عند ربهم جنات ...»:','النعيم','الدنيا','الأرض','الخلد فقط'],
  ['أكمل: «أفنجعل المسلمين كـ ...»:','المجرمين','الصالحين','المتقين','المحسنين'],
  ['معنى «سنستدرجهم»:','نأخذهم بالتدريج','نرحمهم','نغنيهم','نهديهم'],
  ['معنى «وأُملي لهم»:','أمهلهم','أعاقبهم فوراً','أنساهم','أطعمهم'],
  ['أكمل: «إنّ كيدي ...»:','متين','ضعيف','قليل','بعيد'],
  ['صاحب الحوت المذكور في السورة هو:','يونس عليه السلام','موسى عليه السلام','نوح عليه السلام','يوسف عليه السلام'],
  ['معنى «لنُبذ بالعراء»:','لطُرح في الأرض الفضاء','لغرق في البحر','لسُجن','لنام طويلاً'],
  ['من ترك الصلاة في الدنيا أصابته يوم القيامة:','الذلة والمهانة','العزة','الكرامة','السعادة'],
  ['أكمل: «وما هو إلا ذكرٌ ...»:','للعالمين','للعرب','للأغنياء','للأنبياء'],
  ['اللام في كلمة «القمر» لام:','قمرية تُلفظ','شمسية لا تُلفظ','زائدة','محذوفة']]},
 {sem:2, unit:'العقيدة', t:'الطريق الموصل إلى الإيمان', q:[
  ['من طرق الوصول إلى الإيمان:','التفكّر في الكون وما فيه','التقليد الأعمى','الغفلة','اتباع الهوى'],
  ['أكمل: «قل انظروا ماذا في السماوات و ...»:','الأرض','البحار','الجبال','النجوم'],
  ['أكمل: «أفلا ينظرون إلى الإبل كيف ...»:','خُلقت','رُفعت','نُصبت','سُطحت'],
  ['قال الأعرابي: البعرة تدل على البعير، وأثر الأقدام يدل على:','المسير','الطعام','الماء','النوم'],
  ['ميّز الله الإنسان عن سائر المخلوقات بنعمة:','العقل','القوة','الطول','السرعة'],
  ['من مظاهر قدرة الله في المخلوقات:','دودة القز تنتج الحرير','الأصنام تخلق','الحجر ينطق','الإنسان يخلق نفسه'],
  ['التفكّر في مخلوقات الله:','يزيد المؤمن إيماناً بعظمة الله','يضعف الإيمان','لا فائدة منه','يبعد عن الله'],
  ['الله تعالى رفع السماء:','بغير عمد نراها','بأعمدة من حجارة','بالجبال','بالأشجار'],
  ['امتدح الله المؤمنين الذين:','أعملوا عقولهم فازدادوا إيماناً','عطّلوا عقولهم','قلّدوا الآباء','غفلوا عن الآيات']]},
 {sem:2, unit:'الحديث الشريف', t:'الاعتدال في الطعام', q:[
  ['أكمل الحديث: «ما ملأ آدميّ وعاءً شرّاً من ...»:','بطن','بيت','كيس','إناء'],
  ['معنى «بحسب ابن آدم»:','يكفي ابن آدم','يحسب ابن آدم','يأكل ابن آدم','ينام ابن آدم'],
  ['معنى «أُكُلات»:','لقيمات','أطباق كثيرة','أيام','أشربة'],
  ['معنى «يُقمن صلبه»:','يحفظن قوته','يملأن بطنه','يُتعبنه','يُنمنه'],
  ['جعل الحديث البطن أثلاثاً: ثلث لطعامه وثلث لشرابه وثلث لـ:','نفَسه','نومه','دوائه','ضيفه'],
  ['راوي الحديث:','المقدام بن معدي كرب رضي الله عنه','أنس بن مالك رضي الله عنه','أبو هريرة رضي الله عنه','ابن مسعود رضي الله عنه'],
  ['قال النبي ﷺ للغلام: «سمّ الله، وكُل بيمينك، وكُل ...»:','مما يليك','بسرعة','كثيراً','وحدك'],
  ['نهى النبي ﷺ عن النفخ في:','الإناء','الهواء','النار فقط','الماء الجاري'],
  ['أكمل: «وكلوا واشربوا ولا ...»:','تسرفوا','تجلسوا','تتكلموا','تشكروا'],
  ['من عواقب المبالغة في الطعام:','الكسل والخمول والأمراض','النشاط','الذكاء','الصحة']]},
 {sem:2, unit:'القرآن الكريم', t:'من مظاهر قدرة الله تعالى (من سورة النبأ)', q:[
  ['رقم سورة النبأ في المصحف:','الثامنة والسبعون','السبعون','الثمانون','التسعون'],
  ['عدد آيات سورة النبأ:','أربعون آية','ثلاثون آية','عشرون آية','خمسون آية'],
  ['النبأ العظيم الذي يتساءل عنه المشركون:','البعث والحساب','المطر','الحرب','التجارة'],
  ['معنى «مهاداً»:','ممهّدة للاستقرار عليها','عالية','مظلمة','متحركة'],
  ['جعل الله الجبال:','أوتاداً','أنهاراً','سهولاً','صحارى'],
  ['معنى «سُباتاً»:','راحة','تعباً','عملاً','سفراً'],
  ['جعل الله النهار:','معاشاً أي وقتاً للسعي والكسب','لباساً','سباتاً','سكناً'],
  ['معنى «سراجاً وهّاجاً»:','الشمس','القمر','النجوم','البرق'],
  ['معنى «المُعصرات»:','السحب المحمّلة بالمطر','الجبال','البحار','الرياح'],
  ['معنى «جنات ألفافاً»:','بساتين ملتفة الأشجار','بساتين صغيرة','أنهار جارية','صحراء واسعة']]},
 {sem:2, unit:'الأخلاق والآداب', t:'العدل', q:[
  ['العدل هو:','الإنصاف بإعطاء كل ذي حق حقه من غير زيادة ولا نقصان','الظلم','المحاباة','الأنانية'],
  ['العدل اسم من أسماء:','الله تعالى','الملوك','الأنبياء','الملائكة'],
  ['أكمل: «إنّ الله يأمر بالعدل و ...»:','الإحسان','المال','القوة','الحرب'],
  ['أكمل: «وإذا حكمتم بين الناس أن تحكموا بـ ...»:','العدل','القوة','الهوى','الشدة'],
  ['قال عمر بن الخطاب رضي الله عنه في قصة القبطي: «متى استعبدتم الناس وقد ولدتهم أمهاتهم ...»:','أحراراً','فقراء','ضعفاء','صغاراً'],
  ['قال النبي ﷺ: «اتقوا الله واعدلوا في ...»:','أولادكم','أموالكم','بيوتكم','أعمالكم'],
  ['المقسطون عند الله يوم القيامة على:','منابر من نور','كراسي من ذهب','أرض من ماء','جبال من رمل'],
  ['قال رسول الروم حين رأى عمر نائماً تحت شجرة: حكمتَ فعدلتَ فأمنتَ:','فنمت','فخفت','فهربت','فسافرت'],
  ['من آثار العدل في المجتمع:','انتشار الأمن والمحبة','انتشار الجريمة','البغضاء','التخلّف'],
  ['العدل في الكيل والميزان يكون بـ:','إعطاء المشتري حقه دون زيادة ولا نقصان','إنقاص الوزن','زيادة السعر كذباً','إخفاء العيب']]},
 {sem:2, unit:'القرآن الكريم', t:'تسبيح الكون (من سورة الحديد)', q:[
  ['رقم سورة الحديد في المصحف:','السابعة والخمسون','الخمسون','الستون','الثامنة والأربعون'],
  ['أكمل: «سبّح لله ما في السماوات و ...»:','الأرض','البحار','النجوم','الجبال'],
  ['معنى «سبّح لله»:','نزّه الله ومجّده وقدّسه','نسي الله','نام','سافر'],
  ['أكمل: «هو الأول والآخر والظاهر و ...»:','الباطن','القادر','العليم','الرحيم'],
  ['اسم الله «الأول» معناه:','الذي ليس قبله شيء','الذي ليس بعده شيء','الذي ليس فوقه شيء','الذي ليس دونه شيء'],
  ['اسم الله «الآخر» معناه:','الذي ليس بعده شيء','الذي ليس قبله شيء','الذي ليس فوقه شيء','الذي ليس دونه شيء'],
  ['معنى «يولج الليل في النهار»:','يُدخل الليل في النهار','يُطفئ الشمس','يوقف الزمن','يخفي القمر'],
  ['أكمل: «وهو معكم أينما ...»:','كنتم','ذهبتم','سافرتم','جلستم'],
  ['معنى «مستخلَفين فيه»:','جعلكم الله خلفاء في المال تتصرفون فيه كما أمر','تملكون المال ملكاً مطلقاً','ستتركون المال للأعداء','المال لا قيمة له'],
  ['معنى «عليم بذات الصدور»:','يعلم ما يخفيه الإنسان في صدره','يعلم الظاهر فقط','لا يعلم القلوب','يعلم الماضي فقط']]},
 {sem:2, unit:'الحديث الشريف', t:'فضل الغرس والزرع', q:[
  ['أكمل الحديث: «ما من مسلم يغرس غرساً أو يزرع زرعاً فيأكل منه طير أو إنسان أو بهيمة إلا كان له به ...»:','صدقة','دَين','عقاب','تعب'],
  ['راوي الحديث:','أنس بن مالك رضي الله عنه','أبو هريرة رضي الله عنه','حكيم بن حزام رضي الله عنه','أبو أمامة رضي الله عنه'],
  ['خدم أنس بن مالك رضي الله عنه النبي ﷺ:','عشر سنين','سنة واحدة','عشرين سنة','ثلاث سنين'],
  ['كان أنس رضي الله عنه آخر الصحابة وفاة في:','البصرة','المدينة','مكة','دمشق'],
  ['معنى «غرساً»:','ما يُغرس من الشجر','ما يُبنى من البيوت','ما يُصنع من الثياب','ما يُطبخ من الطعام'],
  ['معنى «بهيمة»:','حيوان','نبات','حجر','ماء'],
  ['ثواب الغرس والزرع:','صدقة جارية لا ينقطع أجرها بموت صاحبها','ينقطع بموت صاحبه','لا ثواب فيه','للأغنياء فقط'],
  ['الإسلام يحث على:','إعمار الأرض واستثمار خيراتها','ترك الأرض بلا زرع','قطع الأشجار','الكسل'],
  ['ليس من الصدقة:','الغش في الامتحان','إماطة الأذى عن الطريق','نشر العلم','الكلمة الطيبة']]},
 {sem:2, unit:'القرآن الكريم', t:'جزاء المتقين (من سورة الذاريات)', q:[
  ['رقم سورة الذاريات في المصحف:','الحادية والخمسون','الخمسون','الستون','الأربعون'],
  ['أكمل: «إنّ المتقين في جنات و ...»:','عيون','قصور','أنهار','بساتين'],
  ['معنى «يهجعون»:','ينامون','يأكلون','يسافرون','يعملون'],
  ['أكمل: «وبالأسحار هم ...»:','يستغفرون','ينامون','يأكلون','يتحدثون'],
  ['أكمل: «وفي أموالهم حقّ للسائل و ...»:','المحروم','الغني','الضيف','القريب'],
  ['المحروم هو:','المتعفف عن السؤال مع حاجته','الغني','السارق','التاجر'],
  ['أكمل: «وفي الأرض آياتٌ ...»:','للموقنين','للغافلين','للمسافرين','للتجار'],
  ['أكمل: «وفي أنفسكم أفلا ...»:','تبصرون','تعقلون','تسمعون','تشكرون'],
  ['أكمل: «وفي السماء رزقكم وما ...»:','توعدون','تعملون','تأكلون','تكسبون'],
  ['وصف الله المتقين بأنهم كانوا قبل ذلك:','محسنين','أغنياء','أقوياء','مشهورين']]},
 {sem:2, unit:'السيرة النبوية', t:'غزوة أحد', q:[
  ['وقعت غزوة أحد في السنة:','الثالثة للهجرة','الثانية للهجرة','الخامسة للهجرة','الثامنة للهجرة'],
  ['خرجت قريش إلى أحد بجيش قوامه:','ثلاثة آلاف مقاتل','ألف مقاتل','عشرة آلاف مقاتل','ثلاثمئة مقاتل'],
  ['أخبر النبي ﷺ بخروج قريش عمّه:','العباس بن عبد المطلب','أبو طالب','حمزة','أبو لهب'],
  ['انسحب بثلث الجيش قبل المعركة المنافق:','عبد الله بن أبي بن سلول','أبو سفيان','خالد بن الوليد','عكرمة بن أبي جهل'],
  ['جعل النبي ﷺ ظهر الجيش إلى:','جبل أحد','البحر','المدينة','الصحراء'],
  ['سبب تحوّل المعركة لصالح المشركين:','مخالفة الرماة أمر النبي ﷺ ونزولهم لجمع الغنائم','قلة السلاح','المطر','هروب النبي ﷺ'],
  ['التفّ على المسلمين من خلف الجبل:','خالد بن الوليد','أبو جهل','أمية بن خلف','عمرو بن العاص'],
  ['دافعت عن رسول الله ﷺ في أحد وجُرحت جرحاً عميقاً:','نسيبة بنت كعب المازنية رضي الله عنها','خديجة رضي الله عنها','عائشة رضي الله عنها','فاطمة رضي الله عنها'],
  ['لما قال أبو سفيان: لنا العُزّى ولا عُزّى لكم، أمر النبي ﷺ أن يُقال:','الله مولانا ولا مولى لكم','نحن أقوى','سننتصر غداً','لا نردّ عليه'],
  ['من دروس غزوة أحد:','ضرورة التزام الجنود بأوامر قائدهم','مخالفة القائد','ترك الشورى','الاستعجال في جمع الغنائم']]},
 {sem:2, unit:'السيرة النبوية', t:'مصعب بن عمير رضي الله عنه', q:[
  ['كان مصعب بن عمير رضي الله عنه قبل إسلامه:','فتى مكة جمالاً وشباباً ونعمة','فقيراً معدماً','شيخاً كبيراً','من أهل المدينة'],
  ['لما علمت أم مصعب بإسلامه:','حبسته','فرحت','أسلمت معه','أعطته مالاً'],
  ['هاجر مصعب رضي الله عنه أولاً إلى:','الحبشة','الطائف','اليمن','الشام'],
  ['يُعدّ مصعب بن عمير رضي الله عنه:','أول سفير في الإسلام','أول مؤذن في الإسلام','أول خليفة','أول من جمع القرآن'],
  ['أرسله النبي ﷺ إلى المدينة بعد بيعة:','العقبة الأولى','العقبة الثانية','الرضوان','بدر'],
  ['لُقّب مصعب رضي الله عنه في المدينة بـ:','المقرئ','الفاروق','الصديق','سيف الله'],
  ['أسلم على يد مصعب بن عمير رضي الله عنه:','سعد بن معاذ رضي الله عنه','أبو بكر الصديق رضي الله عنه','عمر بن الخطاب رضي الله عنه','بلال رضي الله عنه'],
  ['حمل مصعب رضي الله عنه لواء المسلمين واستشهد في غزوة:','أحد','بدر','الخندق','حنين'],
  ['كُفّن مصعب رضي الله عنه في بُردة قصيرة وجُعل على رجليه:','الإذخر','الحرير','الصوف','الحجارة'],
  ['أكمل: «من المؤمنين رجال صدقوا ما عاهدوا الله ...»:','عليه','به','معه','إليه']]},
 {sem:2, unit:'القرآن الكريم', t:'اصطفاء وإعجاز (من سورة مريم)', q:[
  ['رقم سورة مريم في المصحف:','التاسعة عشرة','العشرون','الثامنة عشرة','الثلاثون'],
  ['معنى «انتبذت من أهلها»:','ابتعدت عنهم واعتزلتهم','رجعت إليهم','نادتهم','أكرمتهم'],
  ['أرسل الله تعالى إلى مريم عليها السلام «روحنا» وهو:','جبريل عليه السلام','ميكائيل عليه السلام','عيسى عليه السلام','زكريا عليه السلام'],
  ['قيل لمريم: «وهزّي إليك بجذع ...»:','النخلة','الزيتونة','التينة','الشجرة اليابسة'],
  ['معنى «رُطباً جنيّاً»:','تمراً طرياً صالحاً للأكل','تمراً يابساً','ماءً بارداً','لبناً'],
  ['معنى «سريّاً» في قوله «قد جعل ربك تحتك سريّاً»:','جدول ماء صغيراً','قصراً','شجرة','طريقاً'],
  ['أول ما قاله عيسى عليه السلام في المهد:','إني عبد الله','أنا ملك','أنا ابن الله','أريد الطعام'],
  ['المعجزة هي:','أمر خارق للعادة يجريه الله على يد نبي','أمر عادي','سحر','عمل يستطيعه كل الناس'],
  ['الكرامة هي:','أمر خارق للعادة يجريه الله على يد عبد صالح غير نبي','معجزة لنبي','سحر','حيلة'],
  ['قال عيسى عليه السلام: «وبرّاً بـ ...»:','والدتي','قومي','أصحابي','الناس']]},
 {sem:2, unit:'العقيدة', t:'الإيمان باليوم الآخر', q:[
  ['الإيمان باليوم الآخر:','ركن من أركان الإيمان','سنة','أمر اختياري','لا علاقة له بالإيمان'],
  ['من أسماء يوم القيامة:','يوم الدين','يوم العيد','يوم الجمعة','يوم عرفة'],
  ['قال تعالى: «مالك يوم ...»:','الدين','القيامة','الحساب','الفصل'],
  ['من أسماء يوم القيامة أيضاً:','الحاقة والواقعة والصاخة','الضحى والليل','العصر والفجر','الفتح والنصر'],
  ['بعد النفخ في الصور يكون:','البعث ثم الحشر ثم الحساب','الحساب قبل البعث','الجنة مباشرة','لا شيء'],
  ['لا يعلم وقت قيام الساعة إلا:','الله تعالى','الأنبياء','الملائكة','العلماء'],
  ['المفلس من أمة النبي ﷺ هو من:','يأتي بصلاة وصيام وزكاة وقد شتم هذا وظلم هذا','لا يملك درهماً','خسر تجارته','لا يعمل'],
  ['في اليوم الآخر:','يُنصف المظلوم من الظالم','يفلت الظالم','لا حساب','يتساوى المحسن والمسيء'],
  ['ينجو الإنسان من الإفلاس يوم القيامة بـ:','أداء حقوق الله وحقوق الناس','الغنى في الدنيا','كثرة الكلام','ظلم الآخرين']]},
 {sem:2, unit:'الحديث الشريف', t:'الدعوة إلى الخير', q:[
  ['كان النبي ﷺ يقول: «اللهم إني أسألك الهدى والتقى والعفاف و ...»:','الغنى','الملك','الشهرة','القوة'],
  ['راوي الحديث:','عبد الله بن مسعود رضي الله عنه','أنس بن مالك رضي الله عنه','أبو هريرة رضي الله عنه','ابن عمر رضي الله عنهما'],
  ['أخرج الحديث الإمام:','مسلم','الترمذي','أبو داود','مالك'],
  ['معنى «الهدى»:','الدلالة والإرشاد إلى الحق','الضلال','المال','القوة'],
  ['معنى «التُّقى»:','امتثال الأوامر واجتناب النواهي','ترك العبادة','الخوف من الناس','الغنى'],
  ['معنى «العفاف»:','الكفّ عمّا لا يحلّ','طلب الحرام','سؤال الناس','التبذير'],
  ['الغنى الحقيقي هو:','غنى النفس بالقناعة','جمع المال الكثير','كثرة الأولاد','الشهرة'],
  ['أكمل: «وإذا سألك عبادي عنّي فإني ...»:','قريب','بعيد','غائب','كريم'],
  ['من آداب الدعاء:','خفض الصوت والتضرّع إلى الله','الصراخ','الاستعجال والتذمر','الدعاء بالإثم'],
  ['سؤال الناس من دون حاجة شرعية:','ذلّ ومهانة','عزة','واجب','مستحب']]},
 {sem:2, unit:'السيرة النبوية', t:'غزوة الخندق (الأحزاب)', q:[
  ['حرّض على غزوة الخندق زعماء:','يهود بني النضير','الأوس','الخزرج','أهل الحبشة'],
  ['بلغ عدد جيش الأحزاب قرابة:','عشرة آلاف مقاتل','ألف مقاتل','ثلاثة آلاف مقاتل','خمسمئة مقاتل'],
  ['أشار بحفر الخندق الصحابي:','سلمان الفارسي رضي الله عنه','الحباب بن المنذر رضي الله عنه','سعد بن معاذ رضي الله عنه','نعيم بن مسعود رضي الله عنه'],
  ['شارك النبي ﷺ أصحابه في:','حفر الخندق','الراحة','الهرب','التفرّج'],
  ['نقض العهد مع المسلمين من داخل المدينة يهود:','بني قريظة','بني قينقاع','خيبر','بني النضير'],
  ['أوقع الفرقة بين الأحزاب بخطة ذكية الصحابي:','نعيم بن مسعود رضي الله عنه','خالد بن الوليد رضي الله عنه','أبو سفيان','زيد بن حارثة رضي الله عنه'],
  ['قال النبي ﷺ لنعيم بن مسعود: «فإن الحرب ...»:','خدعة','طويلة','قاسية','سهلة'],
  ['أرسل الله على الأحزاب:','ريحاً شديدة باردة اقتلعت خيامهم','مطراً خفيفاً','ثلجاً','زلزالاً'],
  ['من صفات المنافقين في الغزوة:','الأعذار الكاذبة والهرب من الجهاد','الصدق','الشجاعة','الثبات'],
  ['من دروس غزوة الخندق:','المشاورة وتبادل الآراء طريق للصواب','الاستبداد بالرأي','الغدر بالعهود','الاستسلام']]},
 {sem:2, unit:'العقيدة', t:'سيدنا عيسى عليه السلام', q:[
  ['أم عيسى عليه السلام:','مريم بنت عمران عليها السلام','آسيا امرأة فرعون','هاجر','سارة'],
  ['خلق الله تعالى عيسى عليه السلام:','من غير أب','من غير أم','من أب وأم','من تراب مباشرة'],
  ['أكمل: «إنّ مثل عيسى عند الله كمثل ...»:','آدم','نوح','إبراهيم','موسى'],
  ['الكتاب الذي أنزله الله على عيسى عليه السلام:','الإنجيل','التوراة','الزبور','القرآن'],
  ['من معجزات عيسى عليه السلام:','إحياء الموتى بإذن الله','العصا','الناقة','عدم إحراق النار له'],
  ['ومن معجزاته:','إبراء الأكمه والأبرص بإذن الله','شق البحر','تسخير الريح','الطوفان'],
  ['دعا عيسى عليه السلام قومه إلى:','توحيد الله وعبادته','عبادة الأصنام','عبادته هو','ترك الصلاة'],
  ['كان عيسى عليه السلام آخر أنبياء:','بني إسرائيل','العرب','البشر جميعاً','أهل مكة'],
  ['بشّر عيسى عليه السلام برسول يأتي من بعده اسمه:','أحمد','موسى','يحيى','إسحاق'],
  ['نجّى الله عيسى عليه السلام من أعدائه بأن:','رفعه إليه إلى السماء','قتلوه','صلبوه','هرب إلى مصر']]}
]);

})();
(function(){
/* الرياضيات الصفوف ١–٣ — من كتب ٢٠٢٥–٢٠٢٦ */
/* كتابا الصفين الأول والثاني يغطيان الفصل الأول فقط؛ كتاب الصف الثالث يغطي العام كاملاً وقُسِّمت فصوله على الفصلين بحسب تسلسل الكتاب (الفصول ١–٤ ثم ٥–٨) */
function REPL(g, s, sem, lessons) { const old = (CUR[g][s] || []).filter(l => l.sem !== sem); CUR[g][s] = sem === 1 ? lessons.concat(old) : old.concat(lessons); }

/* ===================== الصف الأول — الفصل الأول (الكتاب يغطي الفصل الأول فقط: الفصول ١–٧) ===================== */
REPL(1, 'math', 1, [
 {sem:1, unit:'الفصل الأول: الأنماط', t:'الأنماط من عنصرين', q:[
  ['أكمل النمط: 🔴 🔵 🔴 🔵 🔴 ؟','🔵','🔴','🟡'],
  ['أكمل النمط: ⭐ 🌙 ⭐ 🌙 ؟','⭐','🌙','☀️'],
  ['النمط 🍎 🍌 🍎 🍌 يتكوّن من:','عنصرين','عنصر واحد','ثلاثة عناصر'],
  ['أكمل النمط: 🟥 🟥 🟦 🟥 🟥 🟦 🟥 🟥 ؟','🟦','🟥','🟩'],
  ['ما العنصر الناقص؟ 🐱 🐶 ؟ 🐶 🐱 🐶','🐱','🐶','🐭'],
  ['أيّ ممّا يأتي نمط من عنصرين؟','🔺 🔵 🔺 🔵 🔺 🔵','🔺 🔵 🟩 🔺 🔵 🟩','🔺 🔺 🔺 🔺'],
  ['في النمط ⬆️ ⬇️ ⬆️ ⬇️ ماذا يأتي بعد ⬇️؟','⬆️','⬇️','➡️'],
  ['أكمل النمط: 1 2 1 2 1 ؟','2','1','3']]},
 {sem:1, unit:'الفصل الأول: الأنماط', t:'الأنماط من ثلاثة عناصر', q:[
  ['أكمل النمط: 🔴 🔵 🟢 🔴 🔵 ؟','🟢','🔴','🔵'],
  ['النمط 🍎 🍌 🍇 🍎 🍌 🍇 يتكوّن من:','ثلاثة عناصر','عنصرين','أربعة عناصر'],
  ['أكمل النمط: ⭐ 🌙 ☀️ ⭐ 🌙 ☀️ ⭐ ؟','🌙','☀️','⭐'],
  ['ما العنصر الناقص؟ 🐱 🐶 🐰 🐱 ؟ 🐰','🐶','🐱','🐰'],
  ['أيّ ممّا يأتي نمط من ثلاثة عناصر؟','🔺 🟦 🔵 🔺 🟦 🔵','🔺 🟦 🔺 🟦','🔵 🔵 🔵 🔵'],
  ['أكمل النمط: 1 2 3 1 2 3 1 ؟','2','3','1'],
  ['كم لوناً نحتاج لنكوّن نمطاً من ثلاثة عناصر بالألوان؟','3','2','1'],
  ['أكمل نمط الحركات: 👏 👣 🙌 👏 👣 ؟','🙌','👏','👣']]},
 {sem:1, unit:'الفصل الثاني: استكشاف الأعداد حتى العدد 9', t:'العددان 1 و2', gen:['count'], q:[
  ['كم تفاحة؟ 🍎','1','2','3'],
  ['كم نجمة؟ ⭐⭐','2','1','3'],
  ['كم عيناً لك؟','2','1','3'],
  ['كم أنفاً لك؟','1','2','3'],
  ['العدد الذي يأتي بعد 1 هو:','2','1','3'],
  ['أيّ مجموعة فيها عنصران؟','🐟🐟','🐟','🐟🐟🐟'],
  ['نكتب العدد «واحد» هكذا:','1','2','7'],
  ['نكتب العدد «اثنان» هكذا:','2','1','5']]},
 {sem:1, unit:'الفصل الثاني: استكشاف الأعداد حتى العدد 9', t:'العددان 3 و4', gen:['count'], q:[
  ['كم كرة؟ ⚽⚽⚽','3','2','4'],
  ['كم بطّة؟ 🦆🦆🦆🦆','4','3','5'],
  ['العدد الذي يأتي بعد 3 هو:','4','2','5'],
  ['العدد الذي يأتي قبل 4 هو:','3','5','2'],
  ['كم رجلاً للقطة؟','4','2','3'],
  ['أيّ مجموعة فيها 3 عناصر؟','🌸🌸🌸','🌸🌸','🌸🌸🌸🌸'],
  ['نكتب العدد «أربعة» هكذا:','4','3','6'],
  ['عُدّ: 1، 2، 3، ؟','4','5','2']]},
 {sem:1, unit:'الفصل الثاني: استكشاف الأعداد حتى العدد 9', t:'العددان 5 و6', gen:['count'], q:[
  ['كم إصبعاً في يدك الواحدة؟','5','6','4'],
  ['كم نحلة؟ 🐝🐝🐝🐝🐝🐝','6','5','4'],
  ['كم وردة؟ 🌷🌷🌷🌷🌷','5','6','4'],
  ['العدد الذي يأتي بعد 5 هو:','6','4','7'],
  ['عُدّ: 3، 4، 5، ؟','6','7','2'],
  ['أيّ مجموعة فيها 6 عناصر؟','⭐⭐⭐⭐⭐⭐','⭐⭐⭐⭐⭐','⭐⭐⭐⭐'],
  ['نكتب العدد «خمسة» هكذا:','5','6','2'],
  ['العدد الذي يأتي قبل 6 هو:','5','7','4']]},
 {sem:1, unit:'الفصل الثاني: استكشاف الأعداد حتى العدد 9', t:'الأعداد 7 و8 و9', gen:['count'], q:[
  ['كم سمكة؟ 🐟🐟🐟🐟🐟🐟🐟','7','8','6'],
  ['كم بالوناً؟ 🎈🎈🎈🎈🎈🎈🎈🎈','8','7','9'],
  ['كم دائرة؟ 🟢🟢🟢🟢🟢🟢🟢🟢🟢','9','8','7'],
  ['العدد الذي يأتي بعد 8 هو:','9','7','6'],
  ['عُدّ: 6، 7، 8، ؟','9','5','7'],
  ['العدد الذي يأتي قبل 8 هو:','7','9','6'],
  ['كم يوماً في الأسبوع؟','7','8','9'],
  ['نكتب العدد «تسعة» هكذا:','9','6','8']]},
 {sem:1, unit:'الفصل الثاني: استكشاف الأعداد حتى العدد 9', t:'العدد صفر', gen:['count'], q:[
  ['كم كتاباً في البرّاد؟','0','1','2'],
  ['صحن فارغ ليس فيه تفاح. كم تفاحة فيه؟','0','1','3'],
  ['العدد الذي يأتي قبل 1 هو:','0','2','5'],
  ['صحن فيه 🍪🍪 أكلتُهما كلتيهما. كم بقي؟','0','2','1'],
  ['ما اسم العدد 0؟','صفر','واحد','عشرة'],
  ['أصغر عدد تعلّمناه هو:','0','1','9'],
  ['عُدّ تنازلياً: 3، 2، 1، ؟','0','4','5'],
  ['كم سمكة في الحوض الفارغ؟','0','1','4']]},
 {sem:1, unit:'الفصل الثاني: استكشاف الأعداد حتى العدد 9', t:'الأكبر والأصغر', gen:['cmp'], q:[
  ['أيّهما أكبر: 3 أم 5؟','5','3','متساويان'],
  ['أيّهما أصغر: 7 أم 4؟','4','7','متساويان'],
  ['أيّ مجموعة أكبر عدداً؟','🍎🍎🍎🍎🍎','🍎🍎🍎','🍎'],
  ['أيّ مجموعة أصغر عدداً؟','🌼🌼','🌼🌼🌼🌼','🌼🌼🌼🌼🌼🌼'],
  ['أكبر عدد بين 2 و8 و6 هو:','8','6','2'],
  ['أصغر عدد بين 9 و1 و5 هو:','1','5','9'],
  ['عدد أصغر من 3 هو:','2','4','6'],
  ['عدد أكبر من 6 هو:','7','5','3']]},
 {sem:1, unit:'الفصل الثاني: استكشاف الأعداد حتى العدد 9', t:'المساواة', gen:['cmp'], q:[
  ['عدد عينيك يساوي عدد:','أذنيك','أصابع يدك','أسنانك'],
  ['أيّ مجموعة تساوي 🍎🍎🍎؟','🍌🍌🍌','🍌🍌','🍌🍌🍌🍌'],
  ['العدد المساوي للعدد 6 هو:','6','5','7'],
  ['المجموعتان المتساويتان لهما:','العدد نفسه من العناصر','اللون نفسه دائماً','الشكل نفسه دائماً'],
  ['أسرة فيها 5 أفراد. كم ملعقة نحضر لتكون بعددهم؟','5','4','6'],
  ['⭐⭐ و ⭐⭐ : المجموعتان','متساويتان','الأولى أكبر','الثانية أكبر'],
  ['🐥🐥🐥 و 🐥🐥 : المجموعتان','غير متساويتين','متساويتان','فارغتان'],
  ['نكتب «3 يساوي 3» هكذا:','3 = 3','3 + 3','3 - 3']]},
 {sem:1, unit:'الفصل الثالث: الاستعداد للجمع والطرح', t:'مكوّنات العددين 4 و5', gen:['add10'], q:[
  ['3 و1 يكوّنان العدد:','4','5','3'],
  ['2 و2 يكوّنان العدد:','4','5','2'],
  ['4 و1 يكوّنان العدد:','5','4','6'],
  ['3 و2 يكوّنان العدد:','5','4','6'],
  ['العدد 4 يتكوّن من 1 و:','3','2','4'],
  ['العدد 5 يتكوّن من 2 و:','3','2','4'],
  ['أيّ عددين يكوّنان 5؟','1 و 4','2 و 2','1 و 3'],
  ['العدد 4 يتكوّن من 0 و:','4','0','3']]},
 {sem:1, unit:'الفصل الثالث: الاستعداد للجمع والطرح', t:'مكوّنات العددين 6 و7', gen:['add10'], q:[
  ['3 و3 يكوّنان العدد:','6','7','5'],
  ['5 و1 يكوّنان العدد:','6','7','4'],
  ['4 و3 يكوّنان العدد:','7','6','8'],
  ['العدد 6 يتكوّن من 2 و:','4','3','5'],
  ['العدد 7 يتكوّن من 5 و:','2','3','1'],
  ['العدد 7 يتكوّن من 1 و:','6','7','5'],
  ['أيّ عددين يكوّنان 6؟','4 و 2','4 و 3','5 و 2'],
  ['أيّ عددين يكوّنان 7؟','6 و 1','3 و 3','5 و 1']]},
 {sem:1, unit:'الفصل الثالث: الاستعداد للجمع والطرح', t:'مكوّنات العددين 8 و9', gen:['add10'], q:[
  ['4 و4 يكوّنان العدد:','8','9','7'],
  ['6 و2 يكوّنان العدد:','8','9','7'],
  ['5 و4 يكوّنان العدد:','9','8','7'],
  ['العدد 8 يتكوّن من 3 و:','5','4','6'],
  ['العدد 9 يتكوّن من 7 و:','2','3','1'],
  ['العدد 9 يتكوّن من 6 و:','3','2','4'],
  ['أيّ عددين يكوّنان 9؟','8 و 1','7 و 1','4 و 4'],
  ['أيّ عددين يكوّنان 8؟','7 و 1','6 و 3','5 و 2']]},
 {sem:1, unit:'الفصل الثالث: الاستعداد للجمع والطرح', t:'استكشاف الأجزاء الناقصة', gen:['sub10'], q:[
  ['الكل 5، والظاهر 3 أقراص. كم قرصاً مخبّأ؟','2','3','8'],
  ['الكل 4، والظاهر 1. كم المخبّأ؟','3','4','5'],
  ['الكل 6، والظاهر 2. كم المخبّأ؟','4','3','8'],
  ['الكل 7، والظاهر 7. كم المخبّأ؟','0','7','1'],
  ['الكل 8، والظاهر 3. كم المخبّأ؟','5','4','11'],
  ['الجزءان 4 و5. كم الكل؟','9','8','1'],
  ['الكل 9، والظاهر 6. كم المخبّأ؟','3','4','15'],
  ['الجزءان 2 و4. كم الكل؟','6','2','8']]},
 {sem:1, unit:'الفصل الرابع: الأعداد حتى 12', t:'العدد 10', gen:['count'], q:[
  ['كم إصبعاً في يديك معاً؟','10','5','9'],
  ['لوحة العشرة الممتلئة فيها:','10','9','5'],
  ['العدد الذي يأتي بعد 9 هو:','10','8','11'],
  ['في لوحة العشرة 8 أقراص. كم نضيف لنحصل على 10؟','2','1','3'],
  ['نكتب العدد «عشرة» هكذا:','10','01','100'],
  ['لوحة العشرة فيها 7 أقراص. كم خانة فارغة؟','3','2','7'],
  ['أيّ مجموعة فيها 10 عناصر؟','🔵🔵🔵🔵🔵🔵🔵🔵🔵🔵','🔵🔵🔵🔵🔵🔵🔵🔵🔵','🔵🔵🔵🔵🔵🔵🔵🔵'],
  ['لوحة العشرة فيها صفّان، في كل صفّ:','5 خانات','10 خانات','خانتان']]},
 {sem:1, unit:'الفصل الرابع: الأعداد حتى 12', t:'مكوّنات العدد 10', gen:['add10'], q:[
  ['5 و5 يكوّنان العدد:','10','9','11'],
  ['العدد 10 يتكوّن من 7 و:','3','4','2'],
  ['العدد 10 يتكوّن من 6 و:','4','3','5'],
  ['العدد 10 يتكوّن من 9 و:','1','2','0'],
  ['العدد 10 يتكوّن من 2 و:','8','7','9'],
  ['أيّ عددين يكوّنان 10؟','4 و 6','4 و 5','3 و 6'],
  ['أيّ عددين يكوّنان 10؟','10 و 0','9 و 0','5 و 4'],
  ['8 و2 يكوّنان العدد:','10','6','9']]},
 {sem:1, unit:'الفصل الرابع: الأعداد حتى 12', t:'العدّ التصاعدي والعدّ التنازلي', gen:['seq'], q:[
  ['في العدّ التصاعدي الأعداد:','تتزايد','تتناقص','لا تتغيّر'],
  ['في العدّ التنازلي الأعداد:','تتناقص','تتزايد','لا تتغيّر'],
  ['تابع تصاعدياً: 3، 4، 5، ؟','6','4','7'],
  ['تابع تنازلياً: 9، 8، 7، ؟','6','8','5'],
  ['تابع تصاعدياً: 7، 8، 9، ؟','10','6','11'],
  ['تابع تنازلياً: 4، 3، 2، ؟','1','3','0'],
  ['أيّ ترتيب تصاعدي؟','1، 2، 3، 4','4، 3، 2، 1','2، 1، 4، 3'],
  ['أيّ ترتيب تنازلي؟','10، 9، 8، 7','7، 8، 9، 10','8، 10، 7، 9']]},
 {sem:1, unit:'الفصل الرابع: الأعداد حتى 12', t:'العددان 11 و12', gen:['count'], q:[
  ['10 وواحد يساوي:','11','12','10'],
  ['10 واثنان يساوي:','12','11','20'],
  ['العدد الذي يأتي بعد 11 هو:','12','10','13'],
  ['العدد الذي يأتي بعد 10 هو:','11','12','9'],
  ['لوحة عشرة ممتلئة وقرص واحد خارجها. كم العدد؟','11','10','12'],
  ['لوحة عشرة ممتلئة وقرصان خارجها. كم العدد؟','12','11','2'],
  ['كم شهراً في السنة؟','12','11','10'],
  ['نكتب العدد «أحد عشر» هكذا:','11','12','1']]},
 {sem:1, unit:'الفصل الرابع: الأعداد حتى 12', t:'مكوّنات العددين 11 و12', gen:['add20'], q:[
  ['10 و1 يكوّنان العدد:','11','12','10'],
  ['6 و6 يكوّنان العدد:','12','11','13'],
  ['العدد 11 يتكوّن من 5 و:','6','5','7'],
  ['العدد 12 يتكوّن من 8 و:','4','3','5'],
  ['العدد 11 يتكوّن من 9 و:','2','3','1'],
  ['العدد 12 يتكوّن من 7 و:','5','6','4'],
  ['أيّ عددين يكوّنان 11؟','7 و 4','7 و 5','6 و 4'],
  ['5 لاعبين بقمصان زرقاء و6 بقمصان حمراء. كم لاعباً جميعاً؟','11','12','10']]},
 {sem:1, unit:'الفصل الرابع: الأعداد حتى 12', t:'الأكبر والأصغر', gen:['cmp'], q:[
  ['أيّهما أكبر: 11 أم 9؟','11','9','متساويان'],
  ['أيّهما أصغر: 12 أم 10؟','10','12','متساويان'],
  ['أكبر عدد بين 8 و12 و10 هو:','12','10','8'],
  ['أصغر عدد بين 11 و7 و9 هو:','7','9','11'],
  ['عدد أكبر من 10 هو:','11','9','8'],
  ['عدد أصغر من 12 هو:','11','12','13'],
  ['مجموعة فيها 9 كرات. أيّ عدد أكبر منها؟','10','8','6'],
  ['أيّ مجموعة أكبر؟','12 تفاحة','10 تفاحات','11 تفاحة']]},
 {sem:1, unit:'الفصل الخامس: مفاهيم الجمع والطرح', t:'استكشاف الجمع', gen:['add10'], q:[
  ['2 + 3 = ؟','5','6','4'],
  ['4 + 1 = ؟','5','3','6'],
  ['في عبارة الجمع نستعمل الإشارة:','+','-','='],
  ['لدى رند 3 غرسات واشترت غرستين. كم غرسة لديها؟','5','1','6'],
  ['🍎🍎 + 🍎🍎🍎🍎 = ؟','6','4','2'],
  ['3 + 3 = ؟','6','5','7'],
  ['5 أطفال في الحديقة وجاء 2. كم أصبحوا؟','7','3','8'],
  ['ما عبارة الجمع لـ 🐥🐥🐥 و 🐥؟','3 + 1 = 4','3 - 1 = 2','3 + 2 = 5']]},
 {sem:1, unit:'الفصل الخامس: مفاهيم الجمع والطرح', t:'الجمع الأفقي والجمع العمودي', gen:['add10'], q:[
  ['4 + 2 = ؟','6','2','7'],
  ['6 + 3 = ؟','9','8','3'],
  ['العبارة 5 + 2 = 7 مكتوبة بالشكل:','الأفقي','العمودي','الدائري'],
  ['في الجمع العمودي نكتب العددين:','أحدهما فوق الآخر','بجانب بعضهما','دون إشارة'],
  ['ناتج 7 + 1 عمودياً هو:','8','6','9'],
  ['عمرك 6 سنوات. كم يصبح عمرك بعد 3 سنوات؟','9','3','8'],
  ['5 + 5 = ؟','10','9','0'],
  ['ناتج 2 + 4 أفقياً وعمودياً:','متساويان','مختلفان','الأفقي أكبر']]},
 {sem:1, unit:'الفصل الخامس: مفاهيم الجمع والطرح', t:'استكشاف الطرح', gen:['sub10'], q:[
  ['5 - 2 = ؟','3','7','2'],
  ['في عبارة الطرح نستعمل الإشارة:','-','+','='],
  ['مع يحيى 5 قطع بسكويت أكل منها 2. كم قطعة بقيت معه؟','3','7','2'],
  ['🎈🎈🎈🎈 طار منها بالون واحد. كم بقي؟','3','5','4'],
  ['6 - 4 = ؟','2','10','3'],
  ['7 - 0 = ؟','7','0','6'],
  ['لنجد ناتج الطرح بالرسم نقوم بـ:','الشطب','التلوين فقط','العدّ من جديد'],
  ['9 - 3 = ؟','6','12','5']]},
 {sem:1, unit:'الفصل الخامس: مفاهيم الجمع والطرح', t:'الطرح الأفقي والطرح العمودي', gen:['sub10'], q:[
  ['8 - 3 = ؟','5','11','4'],
  ['10 - 4 = ؟','6','14','5'],
  ['العبارة 7 - 2 = 5 مكتوبة بالشكل:','الأفقي','العمودي','الدائري'],
  ['في الطرح العمودي نكتب العدد الكبير:','في الأعلى','في الأسفل','في أيّ مكان'],
  ['عمرك 7 سنوات. كم كان عمرك قبل 3 سنوات؟','4','10','3'],
  ['9 - 9 = ؟','0','9','18'],
  ['6 - 1 = ؟','5','7','4'],
  ['ناتج 8 - 2 عمودياً هو:','6','10','5']]},
 {sem:1, unit:'الفصل الخامس: مفاهيم الجمع والطرح', t:'حلّ المسائل باستعمال الجمع والطرح', gen:['add10', 'sub10'], q:[
  ['في الحديقة 8 أطفال، خرج منها 3. كم طفلاً بقي؟','5','11','4'],
  ['في الموقف 5 سيارات، غادرت سيارة واحدة. كم سيارة بقيت؟','4','6','5'],
  ['قطفت لين 3 تفاحات حمراء و4 خضراء. كم تفاحة قطفت؟','7','1','6'],
  ['حصص الرياضيات 5 وحصص الرياضة 2. بكم تزيد حصص الرياضيات؟','3','7','2'],
  ['لدى سلمى 6 قصص وأهدتها أمها 2. كم قصة أصبح معها؟','8','4','9'],
  ['ما العدد الذي نجمعه إلى 4 ليصبح 10؟','6','5','14'],
  ['كلمة «بقي» في المسألة تدلّ غالباً على:','الطرح','الجمع','المساواة'],
  ['كلمة «أصبح معه» بعد الإضافة تدلّ على:','الجمع','الطرح','المساواة']]},
 {sem:1, unit:'الفصل السادس: مسائل وخطط حتى العدد 10', t:'الجمع عملية تبديلية', gen:['add10'], q:[
  ['3 + 4 = 4 + ؟','3','4','7'],
  ['العبارة التبديلية لـ 2 + 5 هي:','5 + 2','5 - 2','2 + 2'],
  ['إذا كان 6 + 1 = 7 فإن 1 + 6 =','7','5','6'],
  ['عند تبديل العددين في الجمع فإن الناتج:','لا يتغيّر','يزيد','ينقص'],
  ['5 + 3 = 3 + 5 = ؟','8','2','9'],
  ['أيّ عبارة تساوي 4 + 2؟','2 + 4','4 - 2','4 + 4'],
  ['العبارة التبديلية لـ 7 + 2 هي:','2 + 7','7 + 7','7 - 2'],
  ['1 + 8 = ؟','9','7','10']]},
 {sem:1, unit:'الفصل السادس: مسائل وخطط حتى العدد 10', t:'جمع العدد إلى نفسه', gen:['add10'], q:[
  ['2 + 2 = ؟','4','2','3'],
  ['3 + 3 = ؟','6','5','9'],
  ['4 + 4 = ؟','8','6','9'],
  ['5 + 5 = ؟','10','5','11'],
  ['1 + 1 = ؟','2','1','3'],
  ['أيّ عبارة هي جمع عدد إلى نفسه؟','4 + 4','4 + 3','4 - 4'],
  ['جمعتُ عدداً إلى نفسه فكان الناتج 6. ما العدد؟','3','6','2'],
  ['جمعتُ عدداً إلى نفسه فكان الناتج 10. ما العدد؟','5','10','4']]},
 {sem:1, unit:'الفصل السادس: مسائل وخطط حتى العدد 10', t:'استعمال مستقيم الأعداد في الجمع', gen:['add10'], q:[
  ['عند الجمع على مستقيم الأعداد أقف عند العدد الأول ثم:','أتقدّم بمقدار العدد الثاني','أتراجع بمقدار العدد الثاني','أبقى مكاني'],
  ['4 تلاميذ في الحافلة وصعد إليها تلميذان. كم أصبح العدد؟','6','2','7'],
  ['أقف عند 5 وأتقدّم 3 خطوات. إلى أين أصل؟','8','2','7'],
  ['أقف عند 2 وأتقدّم 4 خطوات. إلى أين أصل؟','6','5','2'],
  ['3 + 5 = ؟','8','2','9'],
  ['أقف عند 7 وأتقدّم خطوة واحدة. إلى أين أصل؟','8','6','7'],
  ['6 + 4 = ؟','10','2','9'],
  ['أقف عند 0 وأتقدّم 9 خطوات. إلى أين أصل؟','9','0','10']]},
 {sem:1, unit:'الفصل السادس: مسائل وخطط حتى العدد 10', t:'استعمال مستقيم الأعداد في الطرح', gen:['sub10'], q:[
  ['عند الطرح على مستقيم الأعداد أقف عند العدد الأول ثم:','أتراجع بمقدار العدد الثاني','أتقدّم بمقدار العدد الثاني','أعود إلى الصفر'],
  ['7 - 4 = ؟','3','11','4'],
  ['في الحافلة 9 تلاميذ ونزل منها 3. كم تلميذاً بقي؟','6','12','5'],
  ['أقف عند 8 وأتراجع 5 خطوات. إلى أين أصل؟','3','13','4'],
  ['أقف عند 10 وأتراجع خطوتين. إلى أين أصل؟','8','12','7'],
  ['أقف عند 6 وأتراجع 6 خطوات. إلى أين أصل؟','0','6','12'],
  ['5 - 1 = ؟','4','6','3'],
  ['أقف عند 4 وأتراجع 3 خطوات. إلى أين أصل؟','1','7','2']]},
 {sem:1, unit:'الفصل السادس: مسائل وخطط حتى العدد 10', t:'حلّ المسائل', gen:['add10', 'sub10'], q:[
  ['مع زينة 5 أقلام وأعطتها أمها 3. كم قلماً معها؟','8','2','9'],
  ['في غرفة الرياضة 9 كرات، أخذ التلاميذ 4 إلى الباحة. كم كرة بقيت؟','5','13','4'],
  ['رتّب زين 6 مكعبات ثم أضاف 4 ليصنع برجاً. كم مكعباً استخدم؟','10','2','9'],
  ['يرسم 8 تلاميذ، انتهى 3 منهم. كم تلميذاً ما زال يرسم؟','5','11','4'],
  ['التقط أبي 4 صدفات ثم 5 صدفات. كم صدفة أصبح معه؟','9','1','8'],
  ['لدى سامي 7 بالونات طار منها 2. كم بالوناً بقي؟','5','9','4'],
  ['نتحقّق من صحّة الحلّ باستعمال:','مستقيم الأعداد','الميزان','الساعة'],
  ['في الصف 3 بنات و3 أولاد. كم تلميذاً في الصف؟','6','0','5']]},
 {sem:1, unit:'الفصل السادس: مسائل وخطط حتى العدد 10', t:'الأعداد الترتيبية', q:[
  ['الطفل الذي يقف في المقدّمة ترتيبه:','الأول','الأخير','العاشر'],
  ['الذي يأتي بعد الثاني هو:','الثالث','الأول','الرابع'],
  ['الذي يأتي قبل الخامس هو:','الرابع','السادس','الثالث'],
  ['ترتيب العدد 9 بالكلمات هو:','التاسع','الثامن','العاشر'],
  ['الذي يأتي بعد التاسع هو:','العاشر','الثامن','السابع'],
  ['في صفّ من 10 أطفال، الأخير ترتيبه:','العاشر','التاسع','الأول'],
  ['أستيقظ أولاً ثم أشرب الحليب. شرب الحليب يكون:','ثانياً','أولاً','ثالثاً'],
  ['السادس يأتي بين:','الخامس والسابع','الرابع والخامس','السابع والثامن']]},
 {sem:1, unit:'الفصل السابع: الهندسة', t:'المجسّمات', gen:['solids'], q:[
  ['الكرة الأرضية تشبه مجسّم:','الكرة','المكعّب','المخروط'],
  ['حجر النرد يشبه:','المكعّب','الكرة','الأسطوانة'],
  ['علبة العصير المعدنية تشبه:','الأسطوانة','المكعّب','الكرة'],
  ['قمع البوظة يشبه:','المخروط','الكرة','المكعّب'],
  ['علبة الحذاء تشبه:','متوازي المستطيلات','الكرة','المخروط'],
  ['المجسّم الذي يتدحرج بسهولة في كل اتجاه:','الكرة','المكعّب','متوازي المستطيلات'],
  ['هل يتدحرج المكعّب؟','لا','نعم','بسرعة كبيرة'],
  ['مجسّم يتدحرج ويقف أيضاً على قاعدته:','الأسطوانة','الكرة','المكعّب']]},
 {sem:1, unit:'الفصل السابع: الهندسة', t:'الأشكال الهندسية', gen:['shapes'], q:[
  ['إذا رسمنا حول قاعدة الأسطوانة نحصل على:','دائرة','مربّع','مثلّث'],
  ['سطح المكعّب شكله:','مربّع','دائرة','مثلّث'],
  ['عندما نقطع ليمونة عرضياً يظهر شكل:','دائرة','مربّع','مستطيل'],
  ['كم ضلعاً للمثلّث؟','3','4','0'],
  ['كم ضلعاً للمربّع؟','4','3','5'],
  ['شكل له 4 أضلاع، يشبه الباب:','مستطيل','دائرة','مثلّث'],
  ['شكل ليس له أضلاع ولا زوايا:','الدائرة','المربّع','المثلّث'],
  ['سطح علبة المحارم الكبير شكله:','مستطيل','دائرة','مثلّث']]},
 {sem:1, unit:'الفصل السابع: الهندسة', t:'التطابق', gen:['shapes'], q:[
  ['الشكلان المتطابقان لهما:','الشكل نفسه والقياس نفسه','اللون نفسه فقط','القياس نفسه فقط'],
  ['مربّع صغير ومربّع كبير هما:','غير متطابقين','متطابقان','متساويان في كل شيء'],
  ['دائرتان لهما القياس نفسه:','متطابقتان','غير متطابقتين','مختلفتان في الشكل'],
  ['مثلّث ومربّع:','غير متطابقين','متطابقان','متطابقان دائماً'],
  ['أيّ شكل يطابق ⬛؟','⬛','🔺','⚫'],
  ['أيّ شكل يطابق 🔵؟','🔵','🟦','🔺'],
  ['ورقتان من الدفتر نفسه:','متطابقتان','غير متطابقتين','مختلفتان في القياس'],
  ['لنتأكّد من تطابق شكلين نضع أحدهما:','فوق الآخر','بعيداً عن الآخر','في الماء']]}
]);

/* ===================== الصف الثاني — الفصل الأول (الكتاب يغطي الفصل الأول فقط: الفصول ١–٥) ===================== */
REPL(2, 'math', 1, [
 {sem:1, unit:'الفصل الأول: قراءة البيانات', t:'استكشاف التمثيل البياني بالصور', q:[
  ['تمثيل بالصور للخضار المفضّلة: بندورة 6، خيار 4، جزر 3. كم تلميذاً يفضّل البندورة؟','6','4','3'],
  ['في التمثيل نفسه (بندورة 6، خيار 4، جزر 3) الخضار الأقل تفضيلاً:','الجزر','البندورة','الخيار'],
  ['بكم يزيد محبّو البندورة (6) على محبّي الجزر (3)؟','3','9','2'],
  ['كم تلميذاً شارك في الاختيار كله (6 و4 و3)؟','13','12','10'],
  ['الجدول الذي نمثّل فيه الأشياء بصور نسمّيه:','تمثيلاً بيانياً بالصور','قصّة مصوّرة','خريطة'],
  ['الصفّ الذي فيه أكبر عدد من الصور يمثّل:','الأكثر تفضيلاً','الأقل تفضيلاً','لا شيء'],
  ['الألوان المفضّلة: أخضر 5، أصفر 2، أزرق 7. كم ينقص الأخضر عن الأزرق؟','2','12','5'],
  ['في المثال السابق، بكم يزيد الأزرق (7) على الأصفر (2)؟','5','9','3']]},
 {sem:1, unit:'الفصل الأول: قراءة البيانات', t:'قراءة التمثيل البياني بالصور', q:[
  ['المفتاح: كل 🙂 تمثّل تلميذاً. صفّ كرة القدم فيه 7 وجوه. كم تلميذاً يفضّلها؟','7','6','8'],
  ['يفضّل الجريَ 5 تلاميذ والسباحةَ 3. بكم يزيد الجري؟','2','8','3'],
  ['كرة القدم 7، الجري 5، السباحة 3. الرياضة الأكثر تفضيلاً:','كرة القدم','الجري','السباحة'],
  ['كرة القدم 7، الجري 5، السباحة 3. الرياضة الأقل تفضيلاً:','السباحة','الجري','كرة القدم'],
  ['ما فائدة المفتاح في التمثيل البياني؟','يبيّن ماذا تمثّل الصورة الواحدة','يبيّن لون الصور','يبيّن عدد الصفوف'],
  ['حصص اللغة العربية 7 وحصص العلوم 2. بكم تزيد حصص العربية؟','5','9','4'],
  ['كل 📕 تمثّل حصّة، وفي صفّ الرياضيات 6 كتب. عدد حصص الرياضيات:','6','5','12'],
  ['كم تلميذاً في الرياضات الثلاث (7 و5 و3)؟','15','14','12']]},
 {sem:1, unit:'الفصل الثاني: جمع وطرح الأعداد حتى 99', t:'الأعداد حتى 99', gen:['place'], q:[
  ['العدد 43 فيه:','4 عشرات و3 آحاد','3 عشرات و4 آحاد','43 عشرة'],
  ['العدد الذي آحاده 5 وعشراته 4 هو:','45','54','9'],
  ['«اثنان وعشرون» تُكتب:','22','202','12'],
  ['«خمسون» تُكتب:','50','15','5'],
  ['«واحد وخمسون» تُكتب:','51','15','501'],
  ['8 آحاد و7 عشرات =','78','87','15'],
  ['العدد 74 يُقرأ:','أربعة وسبعون','سبعة وأربعون','سبعون'],
  ['كم عشرة في العدد 90؟','9','90','0'],
  ['«ثلاثة عشر» تُكتب:','13','31','30']]},
 {sem:1, unit:'الفصل الثاني: جمع وطرح الأعداد حتى 99', t:'مقارنة الأعداد حتى 99', gen:['cmp'], q:[
  ['قارن: 53 ... 36','>','<','='],
  ['قارن: 45 ... 54','<','>','='],
  ['قارن: 25 ... 25','=','>','<'],
  ['عند مقارنة عددين من منزلتين نبدأ بمقارنة:','العشرات','الآحاد','الرقم الأصغر'],
  ['قارن: 67 ... 64','>','<','='],
  ['أيّ عدد أكبر من 79؟','81','78','69'],
  ['أيّ عدد أصغر من 40؟','39','41','44'],
  ['إذا تساوت العشرات نقارن:','الآحاد','المئات','لا نقارن']]},
 {sem:1, unit:'الفصل الثاني: جمع وطرح الأعداد حتى 99', t:'ترتيب الأعداد حتى 99', gen:['seq'], q:[
  ['رتّب من الأصغر إلى الأكبر: 55، 17، 65','17، 55، 65','65، 55، 17','55، 17، 65'],
  ['رتّب من الأكبر إلى الأصغر: 99، 71، 89','99، 89، 71','71، 89، 99','89، 99، 71'],
  ['أكبر عدد بين 38 و83 و80 هو:','83','80','38'],
  ['أصغر عدد بين 46 و64 و40 هو:','40','46','64'],
  ['العدد الذي يقع بين 29 و31 هو:','30','28','32'],
  ['تابع تصاعدياً: 24، 25، 26، ؟','27','23','28'],
  ['العدد الذي يأتي قبل 70 هو:','69','71','60'],
  ['عدد أكبر من 40 وأصغر من 42:','41','43','39']]},
 {sem:1, unit:'الفصل الثاني: جمع وطرح الأعداد حتى 99', t:'الجمع البسيط', gen:['add100'], q:[
  ['23 + 15 = ؟','38','37','8'],
  ['41 + 32 = ؟','73','72','9'],
  ['15 + 4 = ؟','19','55','18'],
  ['عند جمع عددين من منزلتين نبدأ بجمع:','الآحاد','العشرات','العدد الأكبر'],
  ['60 + 30 = ؟','90','9','80'],
  ['52 + 26 = ؟','78','77','28'],
  ['تكلّم يحيى 25 دقيقة في أسبوع و14 دقيقة في الأسبوع التالي. كم دقيقة تكلّم؟','39','11','49'],
  ['34 + 5 = ؟','39','84','38']]},
 {sem:1, unit:'الفصل الثاني: جمع وطرح الأعداد حتى 99', t:'الجمع مع الحمل (إعادة تسمية)', gen:['add100'], q:[
  ['لدى تيم 28 كتاباً واشترى 6 كتب. كم كتاباً أصبح لديه؟','34','22','24'],
  ['27 + 15 = ؟','42','32','312'],
  ['عشر واحدات نبادلها بـ:','عشرة واحدة','مئة','واحدة'],
  ['39 + 18 = ؟','57','47','51'],
  ['46 + 37 = ؟','83','73','93'],
  ['أيّ عملية تحتاج إلى حمل؟','48 + 25','42 + 15','31 + 26'],
  ['58 + 9 = ؟','67','57','68'],
  ['لُقّح 35 طفلاً في الساعة الأولى و48 في الساعة الثانية. كم طفلاً لُقّح؟','83','73','13']]},
 {sem:1, unit:'الفصل الثاني: جمع وطرح الأعداد حتى 99', t:'الطرح البسيط', gen:['sub100'], q:[
  ['48 - 25 = ؟','23','73','22'],
  ['96 - 54 = ؟','42','52','41'],
  ['صنع ماهر 18 دمية وباع منها 10. كم دمية بقيت؟','8','28','9'],
  ['عند طرح عددين من منزلتين نبدأ بطرح:','الآحاد','العشرات','العدد الأصغر'],
  ['75 - 3 = ؟','72','78','45'],
  ['80 - 50 = ؟','30','130','3'],
  ['67 - 67 = ؟','0','67','1'],
  ['59 - 36 = ؟','23','95','33']]},
 {sem:1, unit:'الفصل الثاني: جمع وطرح الأعداد حتى 99', t:'الطرح مع الاستلاف (1)', gen:['sub100'], q:[
  ['32 - 7 = ؟','25','35','39'],
  ['41 - 5 = ؟','36','44','46'],
  ['عندما لا تكفي الآحاد للطرح نستلف:','عشرة واحدة من العشرات','مئة','من العدد الثاني'],
  ['عند الاستلاف في العدد 53 يصبح لدينا:','4 عشرات و13 آحاداً','5 عشرات و13 آحاداً','4 عشرات و3 آحاد'],
  ['64 - 8 = ؟','56','66','54'],
  ['20 - 6 = ؟','14','26','16'],
  ['أيّ عملية تحتاج إلى استلاف؟','45 - 9','45 - 3','48 - 5'],
  ['90 - 1 = ؟','89','91','80']]},
 {sem:1, unit:'الفصل الثاني: جمع وطرح الأعداد حتى 99', t:'الطرح مع الاستلاف (2)', gen:['sub100'], q:[
  ['اشترى فلاح 34 غرسة زيتون، زرع منها 16. كم غرسة بقيت ليغرسها؟','18','22','50'],
  ['52 - 27 = ؟','25','35','79'],
  ['في مكتبة صلاح 41 كتاباً علمياً و23 قصّة. بكم تزيد الكتب العلمية؟','18','28','64'],
  ['70 - 35 = ؟','35','45','105'],
  ['63 - 48 = ؟','15','25','111'],
  ['81 - 19 = ؟','62','72','68'],
  ['أيّ عملية تحتاج إلى استلاف؟','62 - 37','68 - 35','79 - 42'],
  ['ما العدد الذي أطرحه من 50 لأحصل على 26؟','24','76','34']]},
 {sem:1, unit:'الفصل الثاني: جمع وطرح الأعداد حتى 99', t:'حلّ المسائل (اختيار العملية المناسبة)', gen:['add100', 'sub100'], q:[
  ['شارك في الرحلة 9 تلاميذ و8 تلميذات. ما عدد المشاركين؟','17','1','16'],
  ['في الرحلة 15 تلميذاً، عاد منهم 6. كم تلميذاً بقي؟','9','21','11'],
  ['في المرآب 29 سيارة بيضاء و8 سيارات حمراء. بكم تزيد البيضاء؟','21','37','11'],
  ['كلمة «بقي» تدلّ غالباً على عملية:','الطرح','الجمع','العدّ'],
  ['كلمة «جميعاً» تدلّ غالباً على عملية:','الجمع','الطرح','المقارنة'],
  ['مع سلمى 45 ليرة وأعطاها أبوها 30 ليرة. كم ليرة أصبح معها؟','75','15','65'],
  ['في السلّة 60 بيضة، انكسرت 12. كم بيضة سليمة؟','48','72','52'],
  ['قرأت رنا 23 صفحة أمس و19 صفحة اليوم. كم صفحة قرأت؟','42','4','32']]},
 {sem:1, unit:'الفصل الثالث: الأعداد حتى 999', t:'العدد 100', gen:['tens'], q:[
  ['9 عشرات + 1 عشرة =','100','91','10'],
  ['90 + 10 = ؟','100','91','900'],
  ['كم عشرة في العدد 100؟','10','100','1'],
  ['العدد الذي يأتي بعد 99 هو:','100','98','910'],
  ['نسمّي العدد 100:','مئة','عشرة','ألفاً'],
  ['99 + 1 = ؟','100','98','991'],
  ['كم نضيف إلى 70 ليصبح 100؟','30','40','170'],
  ['العدد 100 يتكوّن من:','10 عشرات','10 آحاد','100 عشرة']]},
 {sem:1, unit:'الفصل الثالث: الأعداد حتى 999', t:'العدّ بالمئات حتى 1000', gen:['place'], q:[
  ['مئة + مئتان =','300','12','30'],
  ['4 مئات تُكتب:','400','40','4'],
  ['تابع: 100، 200، 300، ؟','400','310','500'],
  ['كم مئة في العدد 1000؟','10','100','1000'],
  ['«أربعمئة» تُكتب:','400','4100','40'],
  ['900 + 100 = ؟','1000','910','800'],
  ['7 مئات =','700','70','7000'],
  ['تابع تنازلياً: 800، 700، 600، ؟','500','590','400']]},
 {sem:1, unit:'الفصل الثالث: الأعداد حتى 999', t:'كتابة عدد بثلاث منازل', gen:['place'], q:[
  ['العدد 640 فيه:','6 مئات و4 عشرات و0 آحاد','6 مئات و0 عشرات و4 آحاد','64 مئة'],
  ['3 مئات و5 عشرات و2 آحاد =','352','253','325'],
  ['«خمسمئة وسبعة وعشرون» تُكتب:','527','5027','572'],
  ['قيمة الرقم 8 في العدد 483:','80','8','800'],
  ['قيمة الرقم 2 في العدد 215:','200','2','20'],
  ['العدد 906 يُقرأ:','تسعمئة وستة','تسعمئة وستون','ستمئة وتسعة'],
  ['الرقم 7 في العدد 371 في منزلة:','العشرات','الآحاد','المئات'],
  ['4 مئات و0 عشرات و9 آحاد =','409','490','49']]},
 {sem:1, unit:'الفصل الثالث: الأعداد حتى 999', t:'مقارنة عدد بثلاث منازل', gen:['cmp'], q:[
  ['قارن: 825 ... 795','>','<','='],
  ['قارن: 304 ... 340','<','>','='],
  ['قارن: 999 ... 999','=','>','<'],
  ['لمقارنة عددين بثلاث منازل نبدأ بمقارنة:','المئات','الآحاد','العشرات'],
  ['قارن: 561 ... 516','>','<','='],
  ['قارن: 200 ... 199','>','<','='],
  ['أيّ عدد هو الأكبر؟','710','701','170'],
  ['أيّ عدد هو الأصغر؟','389','398','893']]},
 {sem:1, unit:'الفصل الثالث: الأعداد حتى 999', t:'ترتيب الأعداد', gen:['seq'], q:[
  ['رتّب تصاعدياً: 455، 358، 391','358، 391، 455','455، 391، 358','391، 358، 455'],
  ['رتّب تنازلياً: 620، 260، 602','620، 602، 260','260، 602، 620','602، 620، 260'],
  ['أكبر عدد بين 789 و798 و879 هو:','879','798','789'],
  ['أصغر عدد بين 150 و105 و510 هو:','105','150','510'],
  ['العدد الذي يأتي بعد 499 هو:','500','498','4910'],
  ['العدد الذي يأتي قبل 300 هو:','299','301','200'],
  ['العدد الذي يقع بين 345 و347 هو:','346','344','348'],
  ['في 254 و259 المئات والعشرات متساوية، فالأكبر هو:','259','254','متساويان']]},
 {sem:1, unit:'الفصل الرابع: الوقت', t:'الوقت بالساعات الكاملة وأنصافها', gen:['time'], q:[
  ['عقرب الساعات على 7 وعقرب الدقائق على 12. الوقت:','7:00','12:07','7:30'],
  ['عقرب الدقائق على 6 يعني:','نصف ساعة','ساعة كاملة','6 دقائق'],
  ['الساعة السابعة والنصف تُكتب:','7:30','7:00','6:30'],
  ['في الساعة 3:00 يشير عقرب الدقائق إلى:','12','3','6'],
  ['في الساعة 6:30 يشير عقرب الدقائق إلى:','6','12','3'],
  ['الساعة 9:30 تُقرأ:','التاسعة والنصف','التاسعة تماماً','الثالثة والنصف'],
  ['العقرب الطويل في الساعة هو عقرب:','الدقائق','الساعات','الأيام'],
  ['بعد نصف ساعة من الساعة 4:00 تصبح الساعة:','4:30','5:00','3:30']]},
 {sem:1, unit:'الفصل الرابع: الوقت', t:'النشاط والمدّة', gen:['timecalc'], q:[
  ['اليوم 24 ساعة. كم ساعة في يومين؟','48','26','24'],
  ['أصل مدرستي الساعة 7:30 وأغادرها 12:30. كم ساعة أقضي فيها؟','5','6','4'],
  ['أيّهما يستغرق وقتاً أطول: النوم ليلاً أم غسل اليدين؟','النوم ليلاً','غسل اليدين','متساويان'],
  ['الساعة 2:00، بعد ساعتين تصبح:','4:00','2:30','3:00'],
  ['الساعة 5:00، بعد نصف ساعة تصبح:','5:30','6:00','4:30'],
  ['الساعة الواحدة = ... دقيقة','60','30','100'],
  ['نصف الساعة = ... دقيقة','30','60','50'],
  ['بدأتُ الواجب الساعة 4:00 وانتهيت 5:00. كم استغرق؟','ساعة واحدة','نصف ساعة','ساعتين']]},
 {sem:1, unit:'الفصل الخامس: جمع وطرح الأعداد حتى 999', t:'جمع العشرات والمئات وطرحها', gen:['tens'], q:[
  ['300 + 400 = ؟','700','70','600'],
  ['800 - 500 = ؟','300','1300','30'],
  ['لجمع 300 + 400 نعتمد على عبارة الجمع:','3 + 4 = 7','4 - 3 = 1','30 + 4 = 34'],
  ['50 + 30 = ؟','80','8','800'],
  ['90 - 40 = ؟','50','130','5'],
  ['600 + 200 = ؟','800','400','620'],
  ['لطرح 800 - 500 نعتمد على عبارة الطرح:','8 - 5 = 3','8 + 5 = 13','80 - 5 = 75'],
  ['1000 - 300 = ؟','700','1300','970']]},
 {sem:1, unit:'الفصل الخامس: جمع وطرح الأعداد حتى 999', t:'الجمع البسيط', gen:['add1000'], q:[
  ['حضر الحفل 124 تلميذاً و452 من أولياء الأمور. ما عدد الحضور كلّهم؟','576','567','328'],
  ['231 + 145 = ؟','376','367','386'],
  ['500 + 36 = ؟','536','563','86'],
  ['412 + 205 = ؟','617','607','671'],
  ['نجمع الأعداد ذات المنازل الثلاث بالترتيب:','الآحاد ثم العشرات ثم المئات','المئات ثم الآحاد ثم العشرات','العشرات فقط'],
  ['623 + 154 = ؟','777','767','787'],
  ['340 + 250 = ؟','590','509','580'],
  ['111 + 888 = ؟','999','989','899']]},
 {sem:1, unit:'الفصل الخامس: جمع وطرح الأعداد حتى 999', t:'الجمع مع الحمل', gen:['add1000'], q:[
  ['زار حديقة الحيوانات 237 طفلاً في اليوم الأول و145 في اليوم الثاني. كم طفلاً زارها؟','382','372','392'],
  ['458 + 326 = ؟','784','774','794'],
  ['265 + 182 = ؟','447','347','437'],
  ['375 + 248 = ؟','623','613','523'],
  ['أيّ عملية تحتاج إلى حمل؟','167 + 225','123 + 456','300 + 400'],
  ['509 + 92 = ؟','601','591','501'],
  ['إذا كان مجموع العشرات 13 عشرة نكتب 3 ونحمل:','مئة واحدة','عشرة واحدة','3 مئات'],
  ['199 + 1 = ؟','200','1910','190']]},
 {sem:1, unit:'الفصل الخامس: جمع وطرح الأعداد حتى 999', t:'الطرح البسيط', gen:['sub1000'], q:[
  ['شارك في مهرجان الطفولة 386 طفلاً، منهم 124 من الأقطار المجاورة. كم طفلاً من سورية؟','262','510','252'],
  ['587 - 243 = ؟','344','334','830'],
  ['975 - 50 = ؟','925','475','970'],
  ['699 - 199 = ؟','500','400','599'],
  ['768 - 435 = ؟','333','323','343'],
  ['459 - 8 = ؟','451','457','379'],
  ['نطرح الأعداد ذات المنازل الثلاث بدءاً بـ:','الآحاد','المئات','العشرات'],
  ['864 - 864 = ؟','0','864','1']]},
 {sem:1, unit:'الفصل الخامس: جمع وطرح الأعداد حتى 999', t:'الطرح مع الاستلاف (1)', gen:['sub1000'], q:[
  ['قصّة عدد صفحاتها 152، قرأ منها كريم 115 صفحة. كم صفحة بقيت؟','37','47','267'],
  ['352 - 127 = ؟','225','235','275'],
  ['481 - 156 = ؟','325','335','337'],
  ['640 - 218 = ؟','422','432','428'],
  ['أيّ عملية تحتاج إلى استلاف؟','573 - 248','573 - 241','579 - 248'],
  ['293 - 9 = ؟','284','286','294'],
  ['عند الاستلاف من العشرات نضيف إلى الآحاد:','10','1','100'],
  ['765 - 338 = ؟','427','433','437']]},
 {sem:1, unit:'الفصل الخامس: جمع وطرح الأعداد حتى 999', t:'الطرح مع الاستلاف (2)', gen:['sub1000'], q:[
  ['مع رامي 645 ليرة، تبرّع بـ 295 ليرة لجمعية خيرية. كم ليرة بقيت معه؟','350','450','940'],
  ['528 - 274 = ؟','254','354','246'],
  ['716 - 352 = ؟','364','464','368'],
  ['835 - 491 = ؟','344','444','346'],
  ['عند الاستلاف من المئات نضيف إلى العشرات:','10 عشرات','10 آحاد','100 عشرة'],
  ['400 - 150 = ؟','250','350','550'],
  ['623 - 387 = ؟','236','346','244'],
  ['أيّ عملية تحتاج إلى استلاف من المئات؟','419 - 172','419 - 112','479 - 352']]},
 {sem:1, unit:'الفصل الخامس: جمع وطرح الأعداد حتى 999', t:'حلّ المسائل (استعمال معطيات الصورة)', gen:['add1000', 'sub1000', 'money'], q:[
  ['مع سلمى 500 ليرة، اشترت مجموعة قصص علمية بـ 350 ليرة. كم بقي معها؟','150','850','250'],
  ['لدى رؤى 200 ليرة، وثمن مجموعة القصص 350 ليرة. كم ليرة ينقصها؟','150','550','100'],
  ['ثمن كرة 275 ليرة وثمن دمية 150 ليرة. كم ثمنهما معاً؟','425','125','325'],
  ['بكم يزيد ثمن الكرة (275) على ثمن الدمية (150)؟','125','425','135'],
  ['ثمن قلم 120 ليرة. كم ثمن قلمين؟','240','220','122'],
  ['في المكتبة 345 كتاباً و210 مجلات. كم كتاباً ومجلة معاً؟','555','135','545'],
  ['اشترى سامي حقيبة بـ 640 ليرة ودفع 1000 ليرة. كم الباقي؟','360','460','1640'],
  ['لحلّ المسألة نقرأ معطيات الصورة أولاً ثم:','نختار العملية المناسبة','نخمّن الجواب','نلوّن الصورة']]}
]);

/* ===================== الصف الثالث — الفصل الأول (الفصول ١–٤ من الكتاب) ===================== */
REPL(3, 'math', 1, [
 {sem:1, unit:'الفصل الأول: التمثيلات البيانية', t:'التمثيل البياني بالصور', q:[
  ['المفتاح: كل 🙂 = تلميذان. في صفّ الفئة الأولى 5 وجوه. كم تلميذاً فيها؟','10','5','7'],
  ['المفتاح: كل 🙂 = تلميذان. في صفّ الفئة الثانية 7 وجوه. كم تلميذاً فيها؟','14','7','9'],
  ['المفتاح: كل 🎵 = 5 تلاميذ. في صفّ البيانو 3 علامات. كم تلميذاً يفضّل البيانو؟','15','8','3'],
  ['إذا كانت 🙂 تمثّل تلميذين، فنصف الصورة يمثّل:','تلميذاً واحداً','تلميذين','نصف تلميذ'],
  ['يبيّن المفتاح في التمثيل بالصور:','ما تمثّله الصورة الواحدة','عنوان التمثيل','عدد الصفوف'],
  ['الفئة الأولى 10 تلاميذ والثالثة 16. بكم تزيد الثالثة؟','6','26','4'],
  ['في الفئات الثلاث 10 و14 و16 تلميذاً. كم تلميذاً معاً؟','40','30','38'],
  ['الصفّ الذي فيه أكبر عدد من الصور يدلّ على:','العدد الأكبر','العدد الأصغر','العنوان']]},
 {sem:1, unit:'الفصل الأول: التمثيلات البيانية', t:'التمثيل البياني بالأعمدة', q:[
  ['يُرسم التمثيل البياني بالأعمدة بالشكلين:','الشاقولي والأفقي','الدائري والمربّع','المثلّثي والدائري'],
  ['الأيام الغائمة 7 والمشمسة 12. بكم تزيد الأيام المشمسة؟','5','19','6'],
  ['العمود الأطول يمثّل:','القيمة الأكبر','القيمة الأصغر','الصفر'],
  ['عمود الدجاج يصل إلى 8 وعمود البطّ إلى 5. كم طائراً معاً؟','13','3','85'],
  ['ينتهي عمود الإوزّ عند التدريج 6. عدد الإوزّ:','6','5','7'],
  ['الفصل المفضّل: الربيع 9، الصيف 7، الخريف 3، الشتاء 5. الأكثر تفضيلاً:','الربيع','الصيف','الشتاء'],
  ['في المثال السابق (9 و7 و3 و5) كم تلميذاً سُئل؟','24','21','23'],
  ['الفرق بين الربيع (9) والخريف (3):','6','12','5']]},
 {sem:1, unit:'الفصل الأول: التمثيلات البيانية', t:'علامات العدّ', q:[
  ['أربعة خطوط يقطعها خطّ مائل تساوي:','5','4','6'],
  ['حزمتان من علامات العدّ (كل حزمة 5) تساويان:','10','5','2'],
  ['حزمة واحدة و3 خطوط تساوي:','8','6','53'],
  ['نستعمل علامات العدّ لـ:','تسجيل البيانات وعدّها بسرعة','رسم الأشكال','قياس الأطوال'],
  ['لنمثّل العدد 12 بعلامات العدّ نرسم:','حزمتين وخطّين','12 حزمة','حزمة وخطّين'],
  ['3 حزم كاملة تساوي:','15','3','12'],
  ['يأتي بالحافلة 9 تلاميذ وسيراً على الأقدام 14. كم تلميذاً معاً؟','23','5','22'],
  ['القطط 7 والعصافير 4. بكم تزيد القطط؟','3','11','4']]},
 {sem:1, unit:'الفصل الأول: التمثيلات البيانية', t:'التمثيل البياني (إنشاء تمثيل بياني)', q:[
  ['أول خطوة لإنشاء تمثيل بياني:','تنظيم البيانات في جدول','تلوين الأعمدة','كتابة أعداد عشوائية'],
  ['نكتب أعلى التمثيل البياني:','العنوان','الحل','اسم المعلّم'],
  ['واجبات اللغة العربية 5 والعلوم 3. عمود العربية يصل إلى:','5','3','8'],
  ['إذا كان التدريج 0، 2، 4، 6، فكل خطّ يزيد بمقدار:','2','1','4'],
  ['يجب أن تكون الأعمدة:','متساوية العرض','مختلفة العرض','متلاصقة دائماً'],
  ['عمود يصل إلى منتصف المسافة بين 4 و6 يمثّل:','5','4','6'],
  ['واجبات الرياضيات 4 والموسيقا 1. الفرق:','3','5','4'],
  ['لنمثّل العدد 8 بعلامات العدّ نرسم:','حزمة و3 خطوط','8 حزم','حزمتين']]},
 {sem:1, unit:'الفصل الثاني: الأعداد حتى 9999', t:'العدد 1000 (ألف)', gen:['place'], q:[
  ['10 مئات =','1000','100','10000'],
  ['900 + 100 = ؟','1000','910','9100'],
  ['كم مئة في العدد 1000؟','10','100','1'],
  ['العدد الذي يأتي بعد 999 هو:','1000','998','9910'],
  ['كم عشرة في العدد 1000؟','100','10','1000'],
  ['«ألف» تُكتب:','1000','100','10000'],
  ['كم نضيف إلى 600 ليصبح 1000؟','400','300','1600'],
  ['999 + 1 = ؟','1000','9910','990']]},
 {sem:1, unit:'الفصل الثاني: الأعداد حتى 9999', t:'العدّ بالآلاف حتى 10000', gen:['place'], q:[
  ['تابع: 1000، 2000، 3000، ؟','4000','3100','5000'],
  ['5 آلاف تُكتب:','5000','500','50000'],
  ['كم ألفاً في العدد 10000؟','10','100','1000'],
  ['9000 + 1000 = ؟','10000','9100','1000'],
  ['«سبعة آلاف» تُكتب:','7000','700','70000'],
  ['تابع تنازلياً: 8000، 7000، 6000، ؟','5000','5900','4000'],
  ['«عشرة آلاف» تُكتب:','10000','1000','100000'],
  ['3 آلاف + 4 آلاف =','7000','34000','700']]},
 {sem:1, unit:'الفصل الثاني: الأعداد حتى 9999', t:'كتابة عدد بأربع منازل', gen:['place'], q:[
  ['ثمن لعبة 7555 ليرة. الرقم 7 في منزلة:','الآلاف','المئات','العشرات'],
  ['2 ألف و5 مئات و3 عشرات و8 آحاد =','2538','8352','2358'],
  ['«ستة آلاف وأربعمئة واثنان» تُكتب:','6402','6420','642'],
  ['قيمة الرقم 4 في العدد 3485:','400','4','40'],
  ['قيمة الرقم 9 في العدد 9021:','9000','900','9'],
  ['العدد 5060 يُقرأ:','خمسة آلاف وستون','خمسمئة وستون','خمسة آلاف وستمئة'],
  ['أكبر عدد بأربع منازل هو:','9999','1000','9000'],
  ['أصغر عدد بأربع منازل هو:','1000','1111','9999']]},
 {sem:1, unit:'الفصل الثاني: الأعداد حتى 9999', t:'الموازنة بين عددين بأربع منازل', gen:['cmp'], q:[
  ['وازن: 4532 ... 4523','>','<','='],
  ['وازن: 1999 ... 2001','<','>','='],
  ['وازن: 7080 ... 7080','=','>','<'],
  ['نبدأ الموازنة بين عددين بأربع منازل من منزلة:','الآلاف','الآحاد','العشرات'],
  ['وازن: 6105 ... 6150','<','>','='],
  ['أيّ عدد هو الأكبر؟','8301','8130','8031'],
  ['أيّ عدد هو الأصغر؟','2459','2495','2549'],
  ['وازن: 3000 + 500 ... 3400','>','<','=']]},
 {sem:1, unit:'الفصل الثاني: الأعداد حتى 9999', t:'ترتيب الأعداد حتى 9999', gen:['seq'], q:[
  ['رتّب تصاعدياً: 5372، 5732، 5237','5237، 5372، 5732','5732، 5372، 5237','5372، 5237، 5732'],
  ['رتّب تنازلياً: 1840، 1480، 4180','4180، 1840، 1480','1480، 1840، 4180','1840، 4180، 1480'],
  ['أكبر عدد بين 6099 و6909 و6990 هو:','6990','6909','6099'],
  ['أصغر عدد بين 3010 و3001 و3100 هو:','3001','3010','3100'],
  ['العدد الذي يأتي بعد 4999 هو:','5000','4998','4100'],
  ['العدد الذي يأتي قبل 7000 هو:','6999','7001','6000'],
  ['العدد الذي يقع بين 2398 و2400 هو:','2399','2401','2397'],
  ['الترتيب التصاعدي يكون من:','الأصغر إلى الأكبر','الأكبر إلى الأصغر','الأوسط إلى الأكبر']]},
 {sem:1, unit:'الفصل الثالث: جمع الأعداد وطرحها حتى 9999', t:'جمع المئات والألوف وطرحها', gen:['add1000', 'sub1000'], q:[
  ['3000 + 4000 = ؟','7000','700','1000'],
  ['9000 - 4000 = ؟','5000','13000','500'],
  ['600 + 700 = ؟','1300','130','1200'],
  ['1500 - 700 = ؟','800','2200','900'],
  ['لطرح 9000 - 4000 نعتمد على عبارة الطرح:','9 - 4 = 5','9 + 4 = 13','90 - 4 = 86'],
  ['5000 + 2000 = ؟','7000','3000','5200'],
  ['2000 + 800 = ؟','2800','2080','10000'],
  ['8000 - 8000 = ؟','0','8000','16000']]},
 {sem:1, unit:'الفصل الثالث: جمع الأعداد وطرحها حتى 9999', t:'الجمع البسيط', gen:['add1000'], q:[
  ['2134 + 3521 = ؟','5655','5565','5645'],
  ['4302 + 1475 = ؟','5777','5767','5787'],
  ['زار مدينة الملاهي 1215 طفلاً في يوم و1432 في اليوم التالي. كم طفلاً معاً؟','2647','2637','217'],
  ['6000 + 2345 = ؟','8345','6345','8354'],
  ['3210 + 4567 = ؟','7777','7677','7787'],
  ['نجمع الأعداد ذات المنازل الأربع بدءاً بـ:','الآحاد','الألوف','المئات'],
  ['1111 + 2222 = ؟','3333','3332','4444'],
  ['5040 + 2306 = ؟','7346','7364','7436']]},
 {sem:1, unit:'الفصل الثالث: جمع الأعداد وطرحها حتى 9999', t:'الجمع مع الحمل', gen:['add1000'], q:[
  ['2748 + 1365 = ؟','4113','4013','3113'],
  ['3456 + 2789 = ؟','6245','6145','5245'],
  ['1508 + 497 = ؟','2005','1905','2015'],
  ['4675 + 3250 = ؟','7925','7825','8925'],
  ['5999 + 1 = ؟','6000','5900','5991'],
  ['إذا كان مجموع المئات 12 مئة نكتب 2 في المئات ونحمل:','ألفاً واحداً','مئة واحدة','ألفين'],
  ['2367 + 1845 = ؟','4212','4112','3212'],
  ['أيّ عملية تحتاج إلى حمل؟','3478 + 1256','3412 + 1256','3001 + 2004']]},
 {sem:1, unit:'الفصل الثالث: جمع الأعداد وطرحها حتى 9999', t:'الطرح البسيط', gen:['sub1000'], q:[
  ['5445 - 1234 = ؟','4211','4221','6679'],
  ['8796 - 4352 = ؟','4444','4434','4344'],
  ['9999 - 5555 = ؟','4444','5444','4445'],
  ['6870 - 2450 = ؟','4420','4320','9320'],
  ['7568 - 3040 = ؟','4528','4538','4518'],
  ['3750 - 1200 = ؟','2550','2450','4950'],
  ['ارتفاع جبل 2895 م، صعد متسلّق 1500 م. كم متراً بقي له؟','1395','1495','4395'],
  ['نطرح الأعداد ذات المنازل الأربع بدءاً بـ:','الآحاد','الألوف','المئات']]},
 {sem:1, unit:'الفصل الثالث: جمع الأعداد وطرحها حتى 9999', t:'الطرح مع الاستلاف (1)', gen:['sub1000'], q:[
  ['6245 - 1734 = ؟','4511','4411','5511'],
  ['5382 - 2147 = ؟','3235','3245','3335'],
  ['3650 - 1425 = ؟','2225','2235','2215'],
  ['9154 - 4632 = ؟','4522','5522','4532'],
  ['8372 - 2549 = ؟','5823','5833','6823'],
  ['أيّ عملية تحتاج إلى استلاف؟','4352 - 1128','4352 - 1121','4358 - 1125'],
  ['عند الاستلاف من المئات نضيف إلى العشرات:','10 عشرات','10 مئات','عشرة واحدة'],
  ['عند الاستلاف من العشرات نضيف إلى الآحاد:','10 آحاد','10 عشرات','100 آحاد']]},
 {sem:1, unit:'الفصل الثالث: جمع الأعداد وطرحها حتى 9999', t:'الطرح مع الاستلاف (2)', gen:['sub1000'], q:[
  ['9534 - 4786 = ؟','4748','4848','5748'],
  ['6213 - 2847 = ؟','3366','3466','4366'],
  ['8125 - 3468 = ؟','4657','4757','5657'],
  ['7342 - 1865 = ؟','5477','5577','6477'],
  ['4321 - 1234 = ؟','3087','3187','3097'],
  ['كم مرّة نحتاج إلى الاستلاف في 5432 - 1876؟','3','1','0'],
  ['5432 - 1876 = ؟','3556','3656','4556'],
  ['وزن شاحنة ممتلئة 9150 كغ ووزنها فارغة 4680 كغ. وزن البضائع:','4470','4570','5530']]},
 {sem:1, unit:'الفصل الثالث: جمع الأعداد وطرحها حتى 9999', t:'طرح أعداد تتضمّن أصفاراً', gen:['sub1000'], q:[
  ['5000 - 1 = ؟','4999','5999','4000'],
  ['4005 - 1234 = ؟','2771','2871','3771'],
  ['3000 - 1250 = ؟','1750','2250','1850'],
  ['6004 - 2378 = ؟','3626','3726','4626'],
  ['7000 - 3456 = ؟','3544','4544','3644'],
  ['في 4005 - 1234 لا يمكن الاستلاف من المئات لأنها صفر، فنستلف من:','الألوف','الآحاد','العشرات'],
  ['9000 - 999 = ؟','8001','8101','9001'],
  ['2050 - 1025 = ؟','1025','1035','1125']]},
 {sem:1, unit:'الفصل الثالث: جمع الأعداد وطرحها حتى 9999', t:'حلّ المسائل', gen:['add1000', 'sub1000'], q:[
  ['زار مدينة الملاهي 1728 طفلاً في أول أيام العيد و1450 في اليوم الثاني. كم طفلاً في اليومين؟','3178','3168','278'],
  ['في المسألة السابقة، بكم يزيد اليوم الأول (1728) على الثاني (1450)؟','278','3178','288'],
  ['وزن شاحنة فارغة 4100 كغ ووزنها ممتلئة 6550 كغ. ما وزن البضائع؟','2450','10650','2550'],
  ['في مكتبة 2500 كتاب، أُعير منها 750. كم كتاباً بقي؟','1750','3250','1850'],
  ['أنتج مصنع 3260 قطعة ثم 2840 قطعة. كم قطعة أنتج؟','6100','6000','420'],
  ['ثمن دراجة 8500 ليرة ومع سامي 6000 ليرة. كم ينقصه؟','2500','14500','3500'],
  ['أيّ عبارة تدلّ على الطرح؟','كم بقي','كم المجموع','كم معاً'],
  ['أيّ عبارة تدلّ على الجمع؟','كم معاً','كم بقي','بكم يزيد']]},
 {sem:1, unit:'الفصل الرابع: الهندسة', t:'مفاهيم في عالم الهندسة', q:[
  ['شكل له بداية وليس له نهاية:','نصف مستقيم','قطعة مستقيمة','مستقيم'],
  ['شكل له بداية وله نهاية:','قطعة مستقيمة','نصف مستقيم','مستقيم'],
  ['شكل ليس له بداية ولا نهاية:','مستقيم','قطعة مستقيمة','نصف مستقيم'],
  ['كم طرفاً للقطعة المستقيمة؟','2','1','0'],
  ['نسمّي النقطة عادةً بـ:','حرف','عدد','لون'],
  ['تتكوّن الزاوية من:','نصفي مستقيمين لهما البداية نفسها','نقطة واحدة فقط','دائرة'],
  ['حافّة المسطرة تمثّل:','قطعة مستقيمة','نقطة','دائرة'],
  ['شعاع الضوء الخارج من المصباح يشبه:','نصف مستقيم','قطعة مستقيمة','نقطة']]},
 {sem:1, unit:'الفصل الرابع: الهندسة', t:'المستقيمات المتقاطعة والمتوازية', q:[
  ['مستقيمان لا يلتقيان مهما امتدّا:','متوازيان','متقاطعان','متعامدان'],
  ['مستقيمان يلتقيان في نقطة:','متقاطعان','متوازيان','لا يلتقيان'],
  ['مستقيمان متقاطعان يشكّلان زاوية قائمة:','متعامدان','متوازيان','لا يلتقيان'],
  ['قضبان سكّة القطار مثال على مستقيمات:','متوازية','متقاطعة','متعامدة'],
  ['في كم نقطة يلتقي مستقيمان متقاطعان؟','1','2','0'],
  ['إشارة الجمع + تتكوّن من مستقيمين:','متعامدين','متوازيين','لا يلتقيان'],
  ['إشارة المساواة = تتكوّن من قطعتين:','متوازيتين','متعامدتين','متقاطعتين'],
  ['الحرف X يتكوّن من قطعتين:','متقاطعتين','متوازيتين','لا تلتقيان']]},
 {sem:1, unit:'الفصل الرابع: الهندسة', t:'المجسّمات ورؤوسها وحروفها', gen:['solids'], q:[
  ['كم سطحاً (وجهاً) للمكعّب؟','6','4','8'],
  ['كم رأساً للمكعّب؟','8','6','12'],
  ['كم حرفاً للمكعّب؟','12','8','6'],
  ['الكرة لها:','سطح واحد وليس لها أحرف','6 سطوح','8 رؤوس'],
  ['كم قاعدة للأسطوانة؟','2','1','0'],
  ['المخروط له:','قاعدة واحدة ورأس واحد','قاعدتان','6 رؤوس'],
  ['كم سطحاً لمتوازي المستطيلات؟','6','4','5'],
  ['المجسّم الذي له قاعدتان دائريتان:','الأسطوانة','المكعّب','المخروط']]},
 {sem:1, unit:'الفصل الرابع: الهندسة', t:'الأشكال الهندسية', gen:['shapes'], q:[
  ['كم ضلعاً للمثلّث؟','3','4','5'],
  ['كم زاوية للمستطيل؟','4','3','2'],
  ['شكل له 4 أضلاع متساوية و4 زوايا قائمة:','المربّع','المستطيل','المثلّث'],
  ['شكل له 5 أضلاع:','المخمّس','المسدّس','المربّع'],
  ['شكل له 6 أضلاع:','المسدّس','المخمّس','المثمّن'],
  ['عدد أضلاع المضلّع يساوي عدد:','زواياه','أقطاره','نصف زواياه'],
  ['كم ضلعاً للدائرة؟','0','1','4'],
  ['الأضلاع المتقابلة في المستطيل:','متساوية','مختلفة','متقاطعة']]},
 {sem:1, unit:'الفصل الرابع: الهندسة', t:'خطّ (مستقيم) التناظر', q:[
  ['خطّ التناظر يقسم الشكل إلى جزأين:','متطابقين','مختلفين','غير متساويين'],
  ['كم خطّ تناظر للمربّع؟','4','2','1'],
  ['كم خطّ تناظر للمستطيل (غير المربّع)؟','2','4','1'],
  ['هل كل خطّ يمرّ في الشكل هو خطّ تناظر؟','لا','نعم','دائماً'],
  ['نحدّد خطّ التناظر بطريقة:','طيّ الورقة','قصّ الشكل عشوائياً','تلوين الشكل'],
  ['خطّ تناظر الفراشة:','شاقولي في منتصفها','أفقي في أعلاها','لا يوجد'],
  ['كم خطّ تناظر للمثلّث المتساوي الأضلاع؟','3','1','0'],
  ['أيّ شكل متناظر؟','❤','الرقم 7','الحرف ع']]}
]);

/* ===================== الصف الثالث — الفصل الثاني (الفصول ٥–٨ من الكتاب) ===================== */
REPL(3, 'math', 2, [
 {sem:2, unit:'الفصل الخامس: الضرب', t:'الاستعداد للضرب', gen:['mul2510'], q:[
  ['4 مجموعات في كل منها 5: 5 + 5 + 5 + 5 =','20','9','25'],
  ['العبارة 3 + 3 + 3 + 3 تساوي عبارة الضرب:','4 × 3','3 × 3','4 + 3'],
  ['في 4 × 5 = 20 يسمّى العدد 20:','ناتج الضرب','عاملاً','مجموعة'],
  ['في 4 × 5 = 20 يسمّى العددان 4 و5:','عاملَي الضرب','ناتجَي الضرب','المجموع'],
  ['3 مجموعات في كل منها تفاحتان. كم تفاحة؟','6','5','32'],
  ['7 + 7 تساوي:','2 × 7','7 × 7','7 + 2'],
  ['5 أزهار في كل منها 4 ورقات. عبارة الضرب المناسبة:','5 × 4 = 20','5 + 4 = 9','5 × 5 = 25'],
  ['2 + 2 + 2 تساوي:','3 × 2','2 × 2','3 + 2']]},
 {sem:2, unit:'الفصل الخامس: الضرب', t:'الضرب بالعدد 2', gen:['multab'], q:[
  ['2 × 3 = ؟','6','5','8'],
  ['2 × 7 = ؟','14','9','12'],
  ['2 × 9 = ؟','18','11','16'],
  ['5 × 2 = ؟','10','7','12'],
  ['8 × 2 = ؟','16','10','18'],
  ['ما العدد الذي إذا ضربناه بالعدد 2 كان الناتج 12؟','6','10','24'],
  ['كم عيناً لـ 4 أطفال؟','8','6','4'],
  ['2 × 10 = ؟','20','12','210']]},
 {sem:2, unit:'الفصل الخامس: الضرب', t:'الضرب بالعدد 3', gen:['multab'], q:[
  ['3 × 4 = ؟','12','7','15'],
  ['3 × 6 = ؟','18','9','21'],
  ['3 × 9 = ؟','27','24','12'],
  ['7 × 3 = ؟','21','24','10'],
  ['3 × 5 = ؟','15','8','18'],
  ['للمثلّث 3 أضلاع. كم ضلعاً لـ 8 مثلّثات؟','24','11','21'],
  ['ما العامل الذي ناتج ضربه بالعدد 3 يساوي 24؟','8','7','21'],
  ['3 × 10 = ؟','30','13','33']]},
 {sem:2, unit:'الفصل الخامس: الضرب', t:'الضرب بالعدد 4', gen:['multab'], q:[
  ['4 × 3 = ؟','12','7','16'],
  ['4 × 6 = ؟','24','20','10'],
  ['4 × 8 = ؟','32','28','12'],
  ['9 × 4 = ؟','36','32','13'],
  ['4 × 7 = ؟','28','24','11'],
  ['للسيارة 4 عجلات. كم عجلة لـ 5 سيارات؟','20','9','25'],
  ['4 × ؟ = 16','4','12','8'],
  ['4 × 10 = ؟','40','14','44']]},
 {sem:2, unit:'الفصل الخامس: الضرب', t:'الضرب بالعدد 5', gen:['multab', 'mul2510'], q:[
  ['5 × 3 = ؟','15','8','20'],
  ['5 × 7 = ؟','35','30','12'],
  ['5 × 9 = ؟','45','40','14'],
  ['6 × 5 = ؟','30','35','11'],
  ['5 × 8 = ؟','40','45','13'],
  ['في كل علبة 5 قطع حلوى. كم قطعة في 4 علب؟','20','9','25'],
  ['5 × ؟ = 25','5','20','6'],
  ['آحاد ناتج الضرب بالعدد 5 دائماً:','0 أو 5','2 أو 4','1 أو 9']]},
 {sem:2, unit:'الفصل الخامس: الضرب', t:'الضرب بالعدد 6', gen:['multab'], q:[
  ['6 × 2 = ؟','12','8','14'],
  ['6 × 4 = ؟','24','20','10'],
  ['6 × 6 = ؟','36','30','12'],
  ['6 × 7 = ؟','42','36','48'],
  ['6 × 9 = ؟','54','48','56'],
  ['في كل علبة 6 بيضات. كم بيضة في 3 علب؟','18','9','12'],
  ['8 × 6 = ؟','48','42','54'],
  ['6 × ؟ = 30','5','6','24']]},
 {sem:2, unit:'الفصل الخامس: الضرب', t:'الضرب بالعدد 7', gen:['multab'], q:[
  ['7 × 2 = ؟','14','9','21'],
  ['7 × 4 = ؟','28','24','11'],
  ['7 × 6 = ؟','42','48','36'],
  ['7 × 7 = ؟','49','42','14'],
  ['7 × 8 = ؟','56','54','63'],
  ['7 × 9 = ؟','63','56','72'],
  ['في الأسبوع 7 أيام. كم يوماً في 3 أسابيع؟','21','10','24'],
  ['7 × ؟ = 35','5','7','28']]},
 {sem:2, unit:'الفصل الخامس: الضرب', t:'الضرب بالعدد 8', gen:['multab'], q:[
  ['8 × 3 = ؟','24','21','11'],
  ['8 × 4 = ؟','32','36','12'],
  ['8 × 6 = ؟','48','42','56'],
  ['8 × 7 = ؟','56','54','64'],
  ['8 × 8 = ؟','64','56','16'],
  ['8 × 9 = ؟','72','81','63'],
  ['للعنكبوت 8 أرجل. كم رجلاً لـ 5 عناكب؟','40','13','45'],
  ['8 × ؟ = 16','2','8','4']]},
 {sem:2, unit:'الفصل الخامس: الضرب', t:'الضرب بالعدد 9', gen:['multab'], q:[
  ['9 × 2 = ؟','18','11','16'],
  ['9 × 4 = ؟','36','32','13'],
  ['9 × 5 = ؟','45','40','54'],
  ['9 × 6 = ؟','54','56','45'],
  ['9 × 7 = ؟','63','72','56'],
  ['9 × 9 = ؟','81','72','18'],
  ['8 × 4 = 32، فلحساب 9 × 4 نضيف 4 فنحصل على:','36','32','40'],
  ['9 × ؟ = 27','3','9','18']]},
 {sem:2, unit:'الفصل الخامس: الضرب', t:'الضرب بالعدد 1 وبالعدد صفر', gen:['multab'], q:[
  ['7 × 1 = ؟','7','1','8'],
  ['1 × 9 = ؟','9','1','10'],
  ['5 × 0 = ؟','0','5','1'],
  ['0 × 8 = ؟','0','8','80'],
  ['ناتج ضرب أيّ عدد بالعدد 1 هو:','العدد نفسه','صفر','1'],
  ['ناتج ضرب أيّ عدد بالصفر هو:','صفر','العدد نفسه','1'],
  ['4 سلال فارغة. كم تفاحة فيها؟ (4 × 0)','0','4','40'],
  ['؟ × 1 = 6','6','1','5']]},
 {sem:2, unit:'الفصل الخامس: الضرب', t:'استكشاف أنماط الضرب بالعددين 2 و5', gen:['mul2510'], q:[
  ['آحاد مضاعفات العدد 2 أحد الأرقام:','0، 2، 4، 6، 8','1، 3، 5، 7، 9','0 و5 فقط'],
  ['آحاد مضاعفات العدد 5 أحد الرقمين:','0 أو 5','2 أو 4','1 أو 3'],
  ['أيّ عدد من مضاعفات 2؟','14','15','9'],
  ['أيّ عدد من مضاعفات 5؟','45','42','51'],
  ['العدد 10 من مضاعفات:','2 و5 معاً','2 فقط','5 فقط'],
  ['أيّ عدد من مضاعفات 2 و5 معاً؟','30','25','12'],
  ['عُدّ بالخمسات: 5، 10، 15، ؟','20','16','25'],
  ['عُدّ بالاثنينات: 2، 4، 6، ؟','8','7','10']]},
 {sem:2, unit:'الفصل الخامس: الضرب', t:'استكشاف أنماط الضرب بالعدد 9', gen:['multab'], q:[
  ['9 × 2 = 18. مجموع الرقمين 1 و8 يساوي:','9','18','8'],
  ['أيّ عدد من مضاعفات 9؟','27','29','19'],
  ['9 × 3 = ؟','27','12','36'],
  ['9 × 8 = ؟','72','81','63'],
  ['رقم العشرات في ناتج 9 × 6 هو:','5','6','4'],
  ['وازن: 9 × 4 ... 6 × 6','=','>','<'],
  ['وازن: 9 × 5 ... 8 × 5','>','<','='],
  ['مجموع رقمي ناتج 9 × 7 يساوي:','9','16','7']]},
 {sem:2, unit:'الفصل الخامس: الضرب', t:'ضرب عدد من منزلة واحدة بعدد من منزلتين', gen:['mul2d'], q:[
  ['شاركت 12 مدرسة في مسابقة، وأرسلت كل مدرسة 3 تلاميذ. كم تلميذاً شارك؟','36','15','33'],
  ['13 × 2 = ؟','26','15','23'],
  ['21 × 4 = ؟','84','25','80'],
  ['32 × 3 = ؟','96','35','66'],
  ['14 × 5 = ؟','70','19','55'],
  ['23 × 3 = ؟','69','26','66'],
  ['12 × 4 = (10 × 4) + (2 × 4) = ؟','48','16','44'],
  ['25 × 3 = ؟','75','28','65']]},
 {sem:2, unit:'الفصل الخامس: الضرب', t:'حلّ المسائل', gen:['multab', 'mul2d'], q:[
  ['تحتاج المحارة 3 سنوات لإنتاج لؤلؤة. كم سنة تحتاج لإنتاج 4 لآلئ واحدة بعد الأخرى؟','12','7','16'],
  ['يتدرّب سامي 3 ساعات يومياً. كم ساعة يتدرّب يومَي الإثنين والجمعة؟','6','5','3'],
  ['يحتاج المنطاد 5 لترات من الهليوم ليرتفع متراً واحداً. كم لتراً يحتاج ليرتفع 6 أمتار؟','30','11','35'],
  ['في الصف 6 صفوف من المقاعد، في كل صف 4 مقاعد. كم مقعداً؟','24','10','20'],
  ['ثمن القلم 8 ليرات. كم ثمن 7 أقلام؟','56','15','54'],
  ['في كل علبة 9 أقلام تلوين. كم قلماً في 3 علب؟','27','12','24'],
  ['اشترت أمي كيسين، في كل كيس 15 برتقالة. كم برتقالة؟','30','17','25'],
  ['عبارة «في كل» مع مجموعات متساوية تدلّ غالباً على:','الضرب','الطرح','المقارنة']]},
 {sem:2, unit:'الفصل السادس: القسمة', t:'القسمة (تكوين مجموعات متساوية)', gen:['div'], q:[
  ['وزّع الخيّاط 15 زرّاً على 3 قمصان بالتساوي. كم زرّاً على كل قميص؟','5','12','18'],
  ['12 ÷ 3 = ؟','4','9','15'],
  ['في 15 ÷ 3 = 5 يسمّى العدد 15:','المقسوم','المقسوم عليه','ناتج القسمة'],
  ['في 15 ÷ 3 = 5 يسمّى العدد 3:','المقسوم عليه','المقسوم','ناتج القسمة'],
  ['8 كرات في سلّتين بالتساوي. كم كرة في كل سلّة؟','4','6','10'],
  ['20 ÷ 4 = ؟','5','16','24'],
  ['18 عصفوراً في 3 مجموعات متساوية. كم عصفوراً في كل مجموعة؟','6','15','9'],
  ['10 ÷ 5 = ؟','2','5','15']]},
 {sem:2, unit:'الفصل السادس: القسمة', t:'علاقة القسمة بالضرب', gen:['div'], q:[
  ['إذا كان 3 × 6 = 18 فإن 18 ÷ 3 =','6','3','15'],
  ['إذا كان 4 × 5 = 20 فإن 20 ÷ 5 =','4','5','15'],
  ['عبارة القسمة المرتبطة بـ 7 × 2 = 14:','14 ÷ 2 = 7','14 - 2 = 12','7 + 2 = 9'],
  ['24 ÷ 6 = ؟','4','18','6'],
  ['35 ÷ 7 = ؟','5','28','7'],
  ['عبارة الضرب المرتبطة بـ 30 ÷ 5 = 6:','5 × 6 = 30','5 + 6 = 11','30 - 5 = 25'],
  ['42 ÷ 6 = ؟','7','6','36'],
  ['27 ÷ ؟ = 9','3','9','18']]},
 {sem:2, unit:'الفصل السادس: القسمة', t:'الأعداد الزوجية والأعداد الفردية', q:[
  ['العدد الزوجي آحاده أحد الأرقام:','0، 2، 4، 6، 8','1، 3، 5، 7، 9','5 فقط'],
  ['أيّ عدد زوجي؟','14','15','7'],
  ['أيّ عدد فردي؟','23','18','40'],
  ['العدد 0 عدد:','زوجي','فردي','لا زوجي ولا فردي'],
  ['تابع العدّ بالاثنينات: 1، 3، 5، ؟','7','6','8'],
  ['تابع العدّ بالاثنينات: 2، 4، 6، ؟','8','7','9'],
  ['العدد 17 فردي لأن:','آحاده 7 وهو رقم فردي','آحاده رقم زوجي','العدد أكبر من 10'],
  ['العدد الزوجي الذي يأتي بعد 38 هو:','40','39','42']]},
 {sem:2, unit:'الفصل السابع: الكسور', t:'الكسور', gen:['frac'], q:[
  ['قسّمنا قرصاً إلى 4 أجزاء متساوية ولوّنا جزءاً واحداً. الكسر الملوّن:','1/4','4/1','1/3'],
  ['في الكسر 3/5 يسمّى العدد 5:','المقام','البسط','العامل'],
  ['في الكسر 3/5 يسمّى العدد 3:','البسط','المقام','العامل'],
  ['الكسر «خمسة أتساع» يُكتب:','5/9','9/5','5/10'],
  ['كم ربعاً في الوحدة الكاملة؟','4','2','1'],
  ['كم خُمساً في الوحدة الكاملة؟','5','4','10'],
  ['الكسر 2/3 يُقرأ:','ثلثان','ثلاثة أنصاف','ربعان'],
  ['شكل مقسوم إلى 8 أجزاء متساوية لوّنا منها 3. الكسر الملوّن:','3/8','8/3','3/5']]},
 {sem:2, unit:'الفصل السابع: الكسور', t:'موازنة الكسور وترتيبها', gen:['fraccmp'], q:[
  ['لموازنة كسرين لهما المقام نفسه نوازن بين:','البسطين','المقامين','الكسرين بالطول'],
  ['وازن: 3/7 ... 5/7','<','>','='],
  ['وازن: 4/5 ... 2/5','>','<','='],
  ['وازن: 2/9 ... 2/9','=','>','<'],
  ['الكسر الأكبر:','6/8','3/8','5/8'],
  ['الكسر الأصغر:','1/6','4/6','5/6'],
  ['رتّب تصاعدياً: 3/4، 1/4، 2/4','1/4، 2/4، 3/4','3/4، 2/4، 1/4','2/4، 1/4، 3/4'],
  ['أيّ كسر أكبر من 2/5؟','4/5','1/5','2/5']]},
 {sem:2, unit:'الفصل السابع: الكسور', t:'جمع كسرين لهما المقام نفسه', gen:['fracadd'], q:[
  ['1/5 + 2/5 = ؟','3/5','3/10','2/5'],
  ['2/7 + 3/7 = ؟','5/7','5/14','6/7'],
  ['عند جمع كسرين لهما المقام نفسه:','نجمع البسطين ونُبقي المقام','نجمع المقامين فقط','نجمع البسطين والمقامين'],
  ['1/4 + 1/4 = ؟','2/4','2/8','1/4'],
  ['3/8 + 4/8 = ؟','7/8','7/16','1/8'],
  ['لوّنت وعد 1/6 من قرص ثم 3/6 منه. كم لوّنت؟','4/6','4/12','2/6'],
  ['1/3 + 2/3 = ؟','3/3','3/6','2/3'],
  ['4/9 + 4/9 = ؟','8/9','8/18','16/9']]},
 {sem:2, unit:'الفصل السابع: الكسور', t:'طرح كسرين لهما المقام نفسه', gen:['frac'], q:[
  ['قسّمنا قرص بيتزا إلى 8 أجزاء متساوية وأكلنا 3. ما الكسر الدالّ على الباقي؟','5/8','3/8','8/5'],
  ['4/5 - 1/5 = ؟','3/5','5/5','1/5'],
  ['6/7 - 2/7 = ؟','4/7','8/7','4/14'],
  ['عند طرح كسرين لهما المقام نفسه:','نطرح البسطين ونُبقي المقام','نطرح المقامين فقط','نطرح البسطين والمقامين'],
  ['5/9 - 5/9 = ؟','0','10/9','5/9'],
  ['الوحدة الكاملة 4/4. كم يبقى إذا أخذنا 1/4؟','3/4','1/4','5/4'],
  ['7/10 - 3/10 = ؟','4/10','10/10','4/20'],
  ['3/6 - 1/6 = ؟','2/6','4/6','2/12']]},
 {sem:2, unit:'الفصل الثامن: القياس', t:'الطول', gen:['length'], q:[
  ['نقيس طول القلم بوحدة:','السنتيمتر','الكيلوغرام','اللتر'],
  ['1 متر = ... سم','100','10','1000'],
  ['قلم يبدأ عند 0 وينتهي عند 12 على المسطرة. طوله:','12 سم','13 سم','11 سم'],
  ['نقيس طول ملعب المدرسة بوحدة:','المتر','السنتيمتر','الغرام'],
  ['شريط طوله 8 سم وآخر طوله 5 سم. الفرق بينهما:','3 سم','13 سم','4 سم'],
  ['قطعة مستقيمة تبدأ عند 2 وتنتهي عند 9 على المسطرة. طولها:','7 سم','9 سم','11 سم'],
  ['2 متر = ... سم','200','20','2000'],
  ['أيّها الأطول؟','1 متر','90 سم','50 سم']]},
 {sem:2, unit:'الفصل الثامن: القياس', t:'الكتلة', gen:['weight'], q:[
  ['نقيس كتلة كيس الطحين بوحدة:','الكيلوغرام','الغرام','المتر'],
  ['نقيس كتلة قلم الرصاص بوحدة:','الغرام','الكيلوغرام','اللتر'],
  ['1 كغ = ... غ','1000','100','10'],
  ['كتلة الطفل المولود حديثاً تقريباً:','3 كغ','3 غ','30 كغ'],
  ['2 كغ = ... غ','2000','200','20'],
  ['أيّها الأثقل؟','1 كغ','500 غ','900 غ'],
  ['نستعمل لقياس الكتلة:','الميزان','المسطرة','الساعة'],
  ['كيس أرز كتلته 5 كغ وآخر 3 كغ. كتلتهما معاً:','8 كغ','2 كغ','53 كغ']]},
 {sem:2, unit:'الفصل الثامن: القياس', t:'السعة', q:[
  ['نقيس سعة الأوعية بوحدة:','اللتر','المتر','الكيلوغرام'],
  ['سعة ملعقة الدواء:','أقل من لتر واحد','أكثر من لتر واحد','لتر واحد تقريباً'],
  ['سعة حوض الاستحمام:','أكثر من لتر واحد','أقل من لتر واحد','لتر واحد تقريباً'],
  ['سعة علبة الحليب الكبيرة عادةً:','لتر واحد تقريباً','أكثر من 100 لتر','أقل من ملعقة'],
  ['سعة فنجان القهوة:','أقل من لتر واحد','أكثر من لتر واحد','10 لترات'],
  ['في دلو 5 لترات من الماء، أضفنا 3 لترات. كم لتراً صار فيه؟','8','2','15'],
  ['أيّها سعته أكبر؟','برميل الماء','كوب الماء','ملعقة الشاي'],
  ['قارورة ماء سعتها 2 لتر. كم لتراً في 3 قوارير؟','6','5','8']]},
 {sem:2, unit:'الفصل الثامن: القياس', t:'استكشاف المحيط', gen:['perim'], q:[
  ['المحيط هو:','مجموع أطوال أضلاع الشكل','عدد المربّعات داخل الشكل','طول ضلع واحد'],
  ['مربّع طول ضلعه 3 وحدات. محيطه:','12 وحدة','9 وحدات','6 وحدات'],
  ['مستطيل طوله 5 وحدات وعرضه وحدتان. محيطه:','14 وحدة','10 وحدات','7 وحدات'],
  ['مثلّث أطوال أضلاعه 3 و4 و5 وحدات. محيطه:','12 وحدة','7 وحدات','60 وحدة'],
  ['مربّع طول ضلعه 6 سم. محيطه:','24 سم','36 سم','12 سم'],
  ['مستطيل طوله 4 وحدات وعرضه 3 وحدات. محيطه:','14 وحدة','12 وحدة','7 وحدات'],
  ['أيّهما محيطه أكبر: مربّع ضلعه 5 أم مربّع ضلعه 4؟','مربّع ضلعه 5','مربّع ضلعه 4','متساويان'],
  ['يُقاس المحيط بوحدات:','الطول','الكتلة','السعة']]},
 {sem:2, unit:'الفصل الثامن: القياس', t:'استكشاف المساحة', gen:['area', 'sqarea'], q:[
  ['المساحة هي:','عدد الوحدات المربّعة التي تغطّي الشكل','مجموع أطوال الأضلاع','طول ضلع واحد'],
  ['شكل تغطّيه 12 وحدة مربّعة. مساحته:','12 وحدة مربّعة','24 وحدة مربّعة','6 وحدات مربّعة'],
  ['مستطيل فيه 3 صفوف، في كل صف 4 مربّعات. مساحته:','12 وحدة مربّعة','7 وحدات مربّعة','14 وحدة مربّعة'],
  ['مربّع فيه صفّان، في كل صفّ مربّعان. مساحته:','4 وحدات مربّعة','8 وحدات مربّعة','وحدتان مربّعتان'],
  ['مستطيل فيه صفّان، في كل صفّ 5 مربّعات. مساحته:','10 وحدات مربّعة','7 وحدات مربّعة','14 وحدة مربّعة'],
  ['نافذة مكوّنة من 3 صفوف، في كل صفّ 3 مربّعات. مساحتها:','9 وحدات مربّعة','6 وحدات مربّعة','12 وحدة مربّعة'],
  ['شكل مساحته 8 وحدات مربّعة وآخر 10. أيّهما أكبر مساحة؟','الثاني','الأول','متساويان'],
  ['نصفا وحدة مربّعة يكوّنان:','وحدة مربّعة واحدة','وحدتين مربّعتين','نصف وحدة']]},
 {sem:2, unit:'الفصل الثامن: القياس', t:'قراءة الوقت بربع الساعة', gen:['time'], q:[
  ['عقرب الدقائق على 3 يعني:','ربع ساعة','نصف ساعة','3 دقائق'],
  ['الساعة الثانية والربع تُكتب:','2:15','2:30','2:45'],
  ['الساعة الثانية إلا ربعاً تُكتب:','1:45','2:45','2:15'],
  ['ربع الساعة = ... دقيقة','15','30','25'],
  ['عقرب الدقائق على 9 يعني أن الوقت:','إلا ربعاً','والربع','والنصف'],
  ['الساعة 8:30 تُقرأ:','الثامنة والنصف','الثامنة والربع','التاسعة إلا ربعاً'],
  ['كم ربع ساعة في الساعة؟','4','2','15'],
  ['الساعة 5:45 تُقرأ:','السادسة إلا ربعاً','الخامسة والربع','الخامسة إلا ربعاً']]},
 {sem:2, unit:'الفصل الثامن: القياس', t:'قراءة الوقت بعشرات الدقائق', gen:['time'], q:[
  ['عقرب الدقائق على 2 يعني:','10 دقائق','دقيقتين','20 دقيقة'],
  ['عقرب الدقائق على 4 يعني:','20 دقيقة','4 دقائق','40 دقيقة'],
  ['كم عشر دقائق في الساعة؟','6','10','60'],
  ['عقرب الساعات بعد 3 وعقرب الدقائق على 8. الوقت:','3:40','8:15','3:08'],
  ['الساعة 9:10 تعني:','التاسعة وعشر دقائق','العاشرة وتسع دقائق','التاسعة إلا عشر دقائق'],
  ['بعد 10 دقائق من الساعة 4:20 تصبح:','4:30','4:21','5:20'],
  ['الساعة 6:50، بعد 10 دقائق تصبح:','7:00','6:60','6:51'],
  ['في الساعة 11:40 يشير عقرب الدقائق إلى:','8','4','11']]},
 {sem:2, unit:'الفصل الثامن: القياس', t:'قراءة الوقت بخمسات الدقائق', gen:['time'], q:[
  ['كم خمس دقائق في الساعة؟','12','5','60'],
  ['عقرب الدقائق على 1 يعني:','5 دقائق','دقيقة واحدة','10 دقائق'],
  ['عقرب الدقائق على 7 يعني:','35 دقيقة','7 دقائق','45 دقيقة'],
  ['عقرب الدقائق على 11 يعني:','55 دقيقة','11 دقيقة','50 دقيقة'],
  ['في الساعة 2:25 يشير عقرب الدقائق إلى:','5','2','25'],
  ['الساعة 7:05 تُقرأ:','السابعة وخمس دقائق','الخامسة وسبع دقائق','السابعة إلا خمس دقائق'],
  ['بعد 5 دقائق من الساعة 10:55 تصبح:','11:00','10:60','10:56'],
  ['عقرب الساعات بعد 6 وعقرب الدقائق على 5. الوقت:','6:25','6:05','5:30']]},
 {sem:2, unit:'الفصل الثامن: القياس', t:'النشاط والمدّة', gen:['timecalc'], q:[
  ['بدأت رحلة الطيّار فراس الساعة 8:00 وانتهت 11:00. مدّة الرحلة:','3 ساعات','4 ساعات','19 ساعة'],
  ['بدأت الحصّة 9:00 وانتهت 9:45. مدّتها:','45 دقيقة','30 دقيقة','9 دقائق'],
  ['بدأت الاستراحة 10:30 ومدّتها 15 دقيقة. متى تنتهي؟','10:45','10:15','11:00'],
  ['أيّهما يستغرق وقتاً أطول: الحصّة الدرسية أم الاستراحة؟','الحصّة الدرسية','الاستراحة','متساويتان'],
  ['من الساعة 2:15 إلى الساعة 3:15 تمرّ:','ساعة واحدة','ربع ساعة','نصف ساعة'],
  ['بدأتُ الواجب 5:20 وانتهيت 5:50. كم استغرق؟','30 دقيقة','20 دقيقة','70 دقيقة'],
  ['نمتُ الساعة 9:00 مساءً واستيقظت 6:00 صباحاً. كم ساعة نمت؟','9 ساعات','3 ساعات','15 ساعة'],
  ['الساعة 1:40، بعد 25 دقيقة تصبح:','2:05','1:65','2:15']]}
]);

})();
(function(){
/* الرياضيات الصفوف ٤–٦ — من كتب ٢٠٢٥–٢٠٢٦ */
/* كل كتاب يغطي العام الدراسي كاملاً؛ قُسِّمت فصوله/وحداته على الفصلين الدراسيين بحسب تسلسل الكتاب */
function REPL(g, s, sem, lessons) { const old = (CUR[g][s] || []).filter(l => l.sem !== sem); CUR[g][s] = sem === 1 ? lessons.concat(old) : old.concat(lessons); }

/* ===================== الصف الرابع — الفصل الأول (الفصول ١–٥ من الكتاب) ===================== */
REPL(4, 'math', 1, [
 {sem:1, unit:'الفصل الأول: التمثيلات البيانية', t:'التمثيل البياني بالأعمدة', gen:['sub100'], q:[
  ['يساعدنا التمثيل البياني بالأعمدة على:','موازنة البيانات بسهولة','حساب المساحة','رسم الزوايا'],
  ['في تمثيل بالأعمدة لسرعة الحيوانات، الحيوان الأسرع صاحب العمود:','الأطول','الأقصر','الأعرض'],
  ['عمود الفهد عند 110 وعمود الغزال عند 80. بكم تزيد سرعة الفهد؟','30','190','20'],
  ['مواليد شهر آب 25 ومواليد شهر أيلول 40. بكم يزيد مواليد أيلول على آب؟','15','65','25'],
  ['عمودان لهما الطول نفسه يعني أن قيمتيهما:','متساويتان','مختلفتان','صفر'],
  ['يُكتب عنوان التمثيل البياني ليوضّح:','موضوع البيانات','لون الأعمدة','عرض الأعمدة'],
  ['رتّب من الأقل إلى الأكثر: 40، 25، 35','25، 35، 40','40، 35، 25','35، 25، 40']]},
 {sem:1, unit:'الفصل الأول: التمثيلات البيانية', t:'إنشاء تمثيل بياني بالأعمدة', gen:[], q:[
  ['لإنشاء تمثيل بياني بالأعمدة نعتمد على:','جدول البيانات','رسم دائرة','قياس الزوايا'],
  ['في التمثيل الأفقي بالأعمدة تكون الأعمدة:','أفقية','شاقولية','مائلة'],
  ['إذا كان التدريج 0، 2، 4، 6، ... فكل خط يزيد بمقدار:','2','1','4'],
  ['عدد حصص الرياضيات 6. ينتهي عمود الرياضيات عند التدريج:','6','3','12'],
  ['يجب أن تكون الأعمدة في التمثيل البياني:','متساوية العرض','مختلفة العرض','متلاصقة دائماً'],
  ['المادة صاحبة أطول عمود هي التي لها:','أكبر عدد من الحصص','أقل عدد من الحصص','صفر حصص'],
  ['نكتب بجانب كل عمود:','اسم الفئة (مثل اسم المادة)','عدد الصفحات','اسم المعلّم']]},
 {sem:1, unit:'الفصل الأول: التمثيلات البيانية', t:'شبكة الإحداثيات', gen:[], q:[
  ['شبكة الإحداثيات مكوّنة من خطوط:','أفقية وشاقولية متقاطعة','دائرية','مائلة فقط'],
  ['كل نقطة تقاطع على الشبكة تقابلها:','ثنائية من الأعداد','عدد واحد','كسر'],
  ['في الثنائية (3، 5) العدد الأول 3 نقرؤه على المحور:','الأفقي','الشاقولي','المائل'],
  ['في الثنائية (3، 5) العدد 5 يدل على التحرك على المحور:','الشاقولي','الأفقي','المائل'],
  ['للوصول إلى النقطة (4، 2) نبدأ من الصفر ونتحرك:','4 وحدات أفقياً ثم 2 شاقولياً','2 أفقياً ثم 4 شاقولياً','4 شاقولياً فقط'],
  ['النقطة (0، 0) هي:','نقطة البداية','نهاية الشبكة','نقطة على بعد 5 من البداية'],
  ['هل النقطتان (2، 5) و(5، 2) نقطة واحدة؟','لا، هما نقطتان مختلفتان','نعم، هما النقطة نفسها','لا يمكن معرفة ذلك']]},
 {sem:1, unit:'الفصل الأول: التمثيلات البيانية', t:'حل المسائل (ابحث عن نمط)', gen:['seq'], q:[
  ['أكمل النمط: 6، 12، 18، 24، ...','30','28','36'],
  ['قاعدة النمط 5، 10، 15، 20 هي:','نضيف 5 على التتالي','نضيف 10 على التتالي','نضرب بـ 2'],
  ['أكمل النمط: 100، 90، 80، 70، ...','60','50','65'],
  ['قاعدة النمط 3، 7، 11، 15 هي:','نضيف 4 على التتالي','نضيف 3 على التتالي','نضيف 5 على التتالي'],
  ['أكمل النمط: 250، 500، 750، ...','1000','900','800'],
  ['ما العدد الناقص: 8، 16، ...، 32','24','20','28'],
  ['أكمل النمط: 45، 40، 35، ...','30','25','40']]},

 {sem:1, unit:'الفصل الثاني: الأعداد حتى 99999', t:'الأعداد حتى 99999', gen:['place'], q:[
  ['ما قيمة الرقم 8 في العدد 84516؟','80000','8000','8'],
  ['الصيغة التفصيلية للعدد 84516:','80000 + 4000 + 500 + 10 + 6','8000 + 400 + 50 + 16','84 + 516'],
  ['اكتب بالأرقام: أربعة وثمانون ألفاً وخمسمئة واثنا عشر','84512','48512','84521'],
  ['في العدد 70421، الرقم في منزلة عشرات الألوف هو:','7','0','4'],
  ['اكتب بالأرقام: تسعون ألفاً وخمسمئة وثلاثة وأربعون','90543','95043','90534'],
  ['الرقم في منزلة المئات في العدد 36952 هو:','9','6','5'],
  ['أكبر عدد مؤلف من خمس منازل:','99999','10000','9999'],
  ['ما العدد: 30000 + 5000 + 60 + 2؟','35062','35602','3562']]},
 {sem:1, unit:'الفصل الثاني: الأعداد حتى 99999', t:'موازنة الأعداد وترتيبها', gen:['cmp'], q:[
  ['أيّ إشارة تناسب: 45728 ... 45278','>','<','='],
  ['للموازنة بين عددين لهما عدد المنازل نفسه نبدأ من المنزلة:','الأكبر','الآحاد','الوسطى'],
  ['أيّ الأعداد هو الأكبر؟','61202','61022','60212','61200'],
  ['رتّب تصاعدياً: 3025، 3205، 3052','3025، 3052، 3205','3205، 3052، 3025','3052، 3025، 3205'],
  ['العدد المؤلف من خمس منازل دائماً ... من العدد المؤلف من أربع منازل.','أكبر','أصغر','يساوي'],
  ['أيّ الأعداد هو الأصغر؟','19999','20001','21000'],
  ['الترتيب التنازلي يعني من:','الأكبر إلى الأصغر','الأصغر إلى الأكبر','الوسط إلى الطرفين']]},
 {sem:1, unit:'الفصل الثاني: الأعداد حتى 99999', t:'التقريب إلى أقرب عشرة', gen:[], q:[
  ['قرّب 54 إلى أقرب عشرة:','50','60','55'],
  ['قرّب 75 إلى أقرب عشرة:','80','70','75'],
  ['قرّب 8715 إلى أقرب عشرة:','8720','8710','8700'],
  ['عند التقريب إلى أقرب عشرة ننظر إلى منزلة:','الآحاد','العشرات','المئات'],
  ['قرّب 342 إلى أقرب عشرة:','340','350','300'],
  ['إذا كان رقم الآحاد 5 أو أكبر:','نضيف واحداً إلى العشرات ونجعل الآحاد صفراً','نترك العشرات كما هي','نحذف رقم العشرات'],
  ['قرّب 1996 إلى أقرب عشرة:','2000','1990','1900']]},
 {sem:1, unit:'الفصل الثاني: الأعداد حتى 99999', t:'التقريب إلى أقرب مئة', gen:[], q:[
  ['قرّب 8715 إلى أقرب مئة:','8700','8800','8720'],
  ['قرّب 580 إلى أقرب مئة:','600','500','580'],
  ['عند التقريب إلى أقرب مئة ننظر إلى منزلة:','العشرات','الآحاد','الألوف'],
  ['قرّب 1349 إلى أقرب مئة:','1300','1400','1350'],
  ['قرّب 4250 إلى أقرب مئة:','4300','4200','4000'],
  ['أيّ عدد ناتج تقريبه إلى أقرب مئة هو 700؟','682','640','750'],
  ['قرّب 96 إلى أقرب مئة:','100','0','90']]},

 {sem:1, unit:'الفصل الثالث: جمع الأعداد وطرحها حتى 99999', t:'جمع أعداد مؤلفة من خمس منازل', gen:['addbig'], q:[
  ['24658 + 13241 = ؟','37899','37889','11417'],
  ['45678 + 21354 = ؟','67032','66032','67022'],
  ['عند جمع عددين نبدأ بجمع منزلة:','الآحاد','عشرات الألوف','المئات'],
  ['إذا كان مجموع الآحاد 13 نكتب 3 و:','نحمل 1 إلى العشرات','نحمل 3 إلى العشرات','نهمل الواحد'],
  ['تقدّم للامتحان 18580 تلميذاً في دمشق و16410 في حمص. كم عددهم في المحافظتين؟','34990','34890','2170'],
  ['30000 + 4500 = ؟','34500','30450','75000'],
  ['أنتج معمل 25300 قطعة في شهر و24700 في الشهر التالي. كم أنتج في الشهرين؟','50000','49000','600']]},
 {sem:1, unit:'الفصل الثالث: جمع الأعداد وطرحها حتى 99999', t:'طرح أعداد مؤلفة من خمس منازل', gen:['subbig'], q:[
  ['58764 − 23512 = ؟','35252','35352','82276'],
  ['50000 − 1 = ؟','49999','49000','4999'],
  ['70000 − 25000 = ؟','45000','55000','95000'],
  ['47568 − 20412 = ؟','27156','27146','67980'],
  ['للتحقق من صحة الطرح نجمع الناتج مع:','المطروح','المطروح منه','الصفر'],
  ['إذا كان رقم الآحاد في المطروح منه أصغر من رقم الآحاد في المطروح:','نستلف عشرة من منزلة العشرات','نطرح الأصغر من الأكبر','نكتب صفراً'],
  ['60305 − 4208 = ؟','56097','56107','64513']]},
 {sem:1, unit:'الفصل الثالث: جمع الأعداد وطرحها حتى 99999', t:'حل المسائل', gen:['addbig','subbig'], q:[
  ['أنتج معمل حلوى هذا الشهر 37210 قطعة، بزيادة 4500 على الشهر الماضي. كم أنتج الشهر الماضي؟','32710','41710','33710'],
  ['حضر مباراةً 25608 أشخاص وحضر مباراةً أخرى 18300. كم عدد الحاضرين للمبارتين؟','43908','7308','42908'],
  ['عبارة «بكم يزيد» في المسألة تدل غالباً على عملية:','الطرح','الجمع','الضرب'],
  ['عبارة «ما مجموع» تدل على عملية:','الجمع','الطرح','القسمة'],
  ['في مكتبة 12500 كتاب، أُعير منها 3250. كم كتاباً بقي؟','9250','15750','9350'],
  ['عدد القادمين إلى المطار 14250 وعدد المغادرين 12980. بكم يزيد القادمون؟','1270','1370','27230']]},

 {sem:1, unit:'الفصل الرابع: الضرب والقسمة (1)', t:'معنى القسمة', gen:['div'], q:[
  ['وُزّعت 12 قطعة حلوى بالتساوي على 4 أصدقاء. كم قطعة لكل صديق؟','3','4','8'],
  ['القسمة تعني:','التوزيع إلى مجموعات متساوية','الجمع المتكرر','المقارنة'],
  ['في 15 ÷ 3 = 5، العدد 15 يسمى:','المقسوم','المقسوم عليه','ناتج القسمة'],
  ['في 15 ÷ 3 = 5، العدد 3 يسمى:','المقسوم عليه','المقسوم','الباقي'],
  ['في 15 ÷ 3 = 5، العدد 5 يسمى:','ناتج القسمة','المقسوم','المقسوم عليه'],
  ['20 ÷ 5 = ؟','4','5','15'],
  ['18 مكعباً وُضعت في مجموعات في كل منها 6. كم مجموعة؟','3','6','12']]},
 {sem:1, unit:'الفصل الرابع: الضرب والقسمة (1)', t:'الربط بين الضرب والقسمة', gen:['div','multab'], q:[
  ['بما أن 4 × 7 = 28 فإن 28 ÷ 7 = ؟','4','7','21'],
  ['عبارة القسمة المرتبطة بـ 6 × 8 = 48 هي:','48 ÷ 8 = 6','48 ÷ 6 = 7','8 ÷ 6 = 48'],
  ['القسمة هي العملية ... للضرب.','العكسية','نفسها','المساوية'],
  ['بما أن 9 × 5 = 45 فإن 45 ÷ 9 = ؟','5','9','36'],
  ['أيّ عبارة ضرب ترتبط بـ 32 ÷ 4 = 8؟','4 × 8 = 32','4 + 8 = 12','32 × 4 = 8'],
  ['كم عبارة قسمة ترتبط بعبارة الضرب 3 × 7 = 21؟','2','1','3']]},
 {sem:1, unit:'الفصل الرابع: الضرب والقسمة (1)', t:'الحقائق المترابطة للضرب والقسمة', gen:['multab','div'], q:[
  ['من عائلة الحقائق للأعداد 3، 6، 18:','18 ÷ 3 = 6','3 + 6 = 9','18 − 6 = 12'],
  ['كم حقيقة في عائلة الحقائق للأعداد 4، 5، 20؟','4','2','3'],
  ['أيّ حقيقة لا تنتمي إلى عائلة الأعداد 7، 8، 56؟','56 ÷ 4 = 14','56 ÷ 7 = 8','8 × 7 = 56'],
  ['كم حقيقة في عائلة الحقائق للأعداد 6، 6، 36؟','2','4','3'],
  ['أكمل: 9 × ... = 63','7','8','6'],
  ['أكمل: 54 ÷ ... = 9','6','7','5']]},
 {sem:1, unit:'الفصل الرابع: الضرب والقسمة (1)', t:'المضاعفات', gen:['seq','multab'], q:[
  ['المضاعفات الستة الأولى للعدد 2:','2، 4، 6، 8، 10، 12','1، 2، 3، 4، 5، 6','2، 3، 4، 5، 6، 7'],
  ['أيّ عدد من مضاعفات 5؟','35','32','23'],
  ['العدّ التجاوزي بالعشرات: 10، 20، 30، ... العدد التالي:','40','35','300'],
  ['أيّ عدد ليس من مضاعفات 3؟','14','12','18'],
  ['المضاعف الرابع للعدد 6 هو:','24','18','30'],
  ['أيّ عدد من مضاعفات 2 و5 معاً؟','10','15','12'],
  ['مضاعفات العدد 10 تنتهي دائماً بالرقم:','0','5','1']]},
 {sem:1, unit:'الفصل الرابع: الضرب والقسمة (1)', t:'توزيع الضرب على الجمع', gen:['multab','mul2d'], q:[
  ['6 × 9 = 6 × (5 + 4) = ؟','30 + 24 = 54','30 + 4 = 34','11 + 10 = 21'],
  ['أكمل: 7 × 12 = 7 × 10 + 7 × ...','2','12','10'],
  ['5 × 14 = ؟','70','60','45'],
  ['3 × (10 + 6) = ؟','48','36','19'],
  ['لحساب 6 × 13 بالتوزيع نكتب 13 بالشكل:','10 + 3','1 + 3','10 × 3'],
  ['4 × 15 = 4 × 10 + 4 × 5 = ؟','60','45','40']]},
 {sem:1, unit:'الفصل الرابع: الضرب والقسمة (1)', t:'ضرب العشرات', gen:['multab'], q:[
  ['4 × 30 = ؟','120','12','1200'],
  ['4 × 3 عشرات = ... عشرة','12','7','34'],
  ['زُرعت 30 غرسة ياسمين في كل حيّ من 4 أحياء. كم غرسة زُرعت؟','120','34','70'],
  ['6 × 50 = ؟','300','30','3000'],
  ['8 × 70 = ؟','560','56','5600'],
  ['لحساب 3 × 40 نحسب 3 × 4 ثم:','نضيف صفراً واحداً على اليمين','نضيف صفرين','نحذف صفراً'],
  ['9 × 20 = ؟','180','18','29']]},
 {sem:1, unit:'الفصل الرابع: الضرب والقسمة (1)', t:'أنماط الضرب', gen:['multab'], q:[
  ['3 × 4 = 12، إذن 3 × 400 = ؟','1200','120','12000'],
  ['5 × 6000 = ؟','30000','3000','300000'],
  ['2 × 700 = ؟','1400','140','14000'],
  ['كم صفراً في ناتج 4 × 5000؟','4','3','2'],
  ['7 × 300 = ؟','2100','210','21000'],
  ['8 × 9000 = ؟','72000','7200','720000']]},
 {sem:1, unit:'الفصل الرابع: الضرب والقسمة (1)', t:'أنماط القسمة', gen:['div'], q:[
  ['15 ÷ 3 = 5، إذن 150 ÷ 3 = ؟','50','5','500'],
  ['2400 ÷ 6 = ؟','400','40','4000'],
  ['3500 ÷ 7 = ؟','500','50','5000'],
  ['720 ÷ 8 = ؟','90','9','900'],
  ['حقيقة القسمة التي نستعملها لحساب 4500 ÷ 9 هي:','45 ÷ 9 = 5','40 ÷ 8 = 5','9 × 9 = 81'],
  ['6300 ÷ 9 = ؟','700','70','7000']]},
 {sem:1, unit:'الفصل الرابع: الضرب والقسمة (1)', t:'حل المسائل', gen:['multab','div'], q:[
  ['مع كل تلميذ 8 أوراق. كم ورقة مع 5 تلاميذ؟','40','13','3'],
  ['وُزّعت 36 تفاحة على 4 سلال بالتساوي. كم تفاحة في كل سلة؟','9','32','40'],
  ['في القاعة 6 صفوف من المقاعد، في كل صف 5 مقاعد. كم مقعداً؟','30','11','1'],
  ['ثمن القلم 50 ليرة. كم ثمن 7 أقلام؟','350','57','300'],
  ['قُسم 42 تلميذاً إلى فرق، في كل فرقة 7. كم فرقة؟','6','7','35'],
  ['اشترى سامر 3 علب في كل منها 8 أقلام، وأعطى أخاه 4 أقلام. كم بقي معه؟','20','24','28']]},

 {sem:1, unit:'الفصل الخامس: الهندسة', t:'الزوايا', gen:['angles'], q:[
  ['الزاوية التي ضلعاها متعامدان تسمى:','قائمة','حادة','منفرجة'],
  ['الأداة التي نستعملها لتمييز الزاوية القائمة:','الكوس','الفرجار','الميزان'],
  ['الزاوية الأصغر من القائمة تسمى:','حادة','منفرجة','مستقيمة'],
  ['الزاوية الأكبر من القائمة والأصغر من المستقيمة تسمى:','منفرجة','حادة','قائمة'],
  ['نقطة التقاء ضلعي الزاوية تسمى:','رأس الزاوية','ضلع الزاوية','مركز الزاوية'],
  ['الزاوية س م ع رأسها:','م','س','ع'],
  ['الزاوية المستقيمة ضلعاها:','على استقامة واحدة','متعامدان','متوازيان']]},
 {sem:1, unit:'الفصل الخامس: الهندسة', t:'المستطيل', gen:['shapes'], q:[
  ['كم زاوية قائمة في المستطيل؟','4','2','0'],
  ['في المستطيل كل ضلعين متقابلين:','متساويان في الطول','مختلفان في الطول','متعامدان'],
  ['البعد الأكبر في المستطيل يسمى:','الطول','العرض','القطر'],
  ['لرسم مستطيل نستعمل:','المسطرة والكوس','الفرجار فقط','الميزان'],
  ['كم ضلعاً للمستطيل؟','4','3','5'],
  ['أيّ مما يأتي مستطيل الشكل غالباً؟','باب الغرفة','الكرة','الصحن'],
  ['مستطيل طوله 5 سم. كم طول الضلع المقابل للطول؟','5 سم','3 سم','10 سم']]},
 {sem:1, unit:'الفصل الخامس: الهندسة', t:'المربع', gen:['shapes'], q:[
  ['المربع شكل أضلاعه الأربعة:','متساوية في الطول','مختلفة','اثنان منها فقط متساويان'],
  ['كم زاوية قائمة في المربع؟','4','2','3'],
  ['مربع طول ضلعه 4 سم. كم طول الضلع المجاور له؟','4 سم','8 سم','2 سم'],
  ['ما الذي يميّز المربع عن المستطيل؟','أضلاعه الأربعة متساوية','له 5 أضلاع','زواياه حادة'],
  ['كل مربع هو أيضاً:','مستطيل','مثلث','دائرة'],
  ['كم رأساً للمربع؟','4','3','6']]},
 {sem:1, unit:'الفصل الخامس: الهندسة', t:'تصميم أشكال متناظرة', gen:[], q:[
  ['عند طي الشكل المتناظر على خط التناظر ينطبق نصفاه:','تماماً','جزئياً','لا ينطبقان'],
  ['الخط الذي يقسم الشكل إلى نصفين متطابقين يسمى:','خط التناظر','القطر','الضلع'],
  ['كم خط تناظر للمربع؟','4','2','1'],
  ['كم خط تناظر للمستطيل (غير المربع)؟','2','4','1'],
  ['أيّ مما يأتي له خط تناظر؟','جناحا الفراشة','الرقم 7','حرف ع'],
  ['كم خط تناظر للدائرة؟','عدد لا نهائي','1','4'],
  ['الجزآن على جانبي خط التناظر:','متطابقان','مختلفان','أحدهما أكبر']]}
]);

/* ===================== الصف الرابع — الفصل الثاني (الفصول ٦–٩ من الكتاب) ===================== */
REPL(4, 'math', 2, [
 {sem:2, unit:'الفصل السادس: الضرب والقسمة (2)', t:'الضرب دون حمل', gen:['mul2d'], q:[
  ['24 × 2 = ؟','48','46','26'],
  ['31 × 3 = ؟','93','34','63'],
  ['213 × 3 = ؟','639','636','216'],
  ['42 × 2 = ؟','84','44','82'],
  ['عند ضرب 23 × 3 نضرب أولاً:','الآحاد','العشرات','المئات'],
  ['العدد 24 بالصيغة التفصيلية:','20 + 4','2 + 4','200 + 4'],
  ['122 × 4 = ؟','488','486','126']]},
 {sem:2, unit:'الفصل السادس: الضرب والقسمة (2)', t:'الضرب مع الحمل (1)', gen:['mul2d'], q:[
  ['26 × 3 = ؟','78','68','618'],
  ['15 × 4 = ؟','60','40','45'],
  ['عند ضرب 27 × 3: نجد 7 × 3 = 21، فنكتب 1 و:','نحمل 2 إلى العشرات','نحمل 1 إلى العشرات','نكتب 21 في الآحاد'],
  ['38 × 2 = ؟','76','66','616'],
  ['49 × 2 = ؟','98','88','818'],
  ['17 × 5 = ؟','85','55','75']]},
 {sem:2, unit:'الفصل السادس: الضرب والقسمة (2)', t:'الضرب مع الحمل (2)', gen:['mul2d'], q:[
  ['175 × 3 = ؟','525','325','515'],
  ['248 × 2 = ؟','496','486','4816'],
  ['136 × 4 = ؟','544','524','444'],
  ['209 × 5 = ؟','1045','1005','1450'],
  ['463 × 3 = ؟','1389','1289','1379'],
  ['عند ضرب 158 × 6: نجد 8 × 6 = 48. كم نحمل إلى العشرات؟','4','8','6']]},
 {sem:2, unit:'الفصل السادس: الضرب والقسمة (2)', t:'ضرب ثلاثة أعداد ببعضها', gen:['multab'], q:[
  ['(2 × 3) × 4 = ؟','24','9','14'],
  ['5 × 2 × 7 = ؟','70','14','35'],
  ['لا يتغيّر ناتج ضرب ثلاثة أعداد إذا غيّرنا طريقة تجميعها. تسمى هذه الخاصة:','الخاصة التجميعية','الخاصة التبديلية','توزيع الضرب على الجمع'],
  ['3 × 5 × 2 = ؟','30','10','15'],
  ['أكمل: (4 × 5) × 3 = 4 × (5 × ...)','3','4','20'],
  ['الأسهل لحساب 7 × 5 × 2 أن نبدأ بـ:','5 × 2','7 × 5','7 + 5'],
  ['2 × 4 × 10 = ؟','80','16','40']]},
 {sem:2, unit:'الفصل السادس: الضرب والقسمة (2)', t:'القسمة دون باقٍ (1)', gen:['div','divbig'], q:[
  ['84 ÷ 4 = ؟','21','22','12'],
  ['69 ÷ 3 = ؟','23','22','33'],
  ['48 ÷ 2 = ؟','24','22','42'],
  ['في القسمة نبدأ دائماً بقسمة المنزلة:','الأكبر','الآحاد','الأصغر'],
  ['للتحقق من 96 ÷ 3 = 32 نحسب:','32 × 3','32 + 3','96 × 3'],
  ['55 ÷ 5 = ؟','11','10','15'],
  ['72 ÷ 6 = ؟','12','11','13']]},
 {sem:2, unit:'الفصل السادس: الضرب والقسمة (2)', t:'القسمة دون باقٍ (2)', gen:['divbig'], q:[
  ['369 ÷ 3 = ؟','123','122','133'],
  ['844 ÷ 4 = ؟','211','201','221'],
  ['288 ÷ 2 = ؟','144','124','164'],
  ['لحساب 639 ÷ 3 نقسم أولاً:','المئات','الآحاد','العشرات'],
  ['555 ÷ 5 = ؟','111','11','110'],
  ['486 ÷ 2 = ؟','243','233','242']]},
 {sem:2, unit:'الفصل السادس: الضرب والقسمة (2)', t:'القسمة مع إعادة التجميع', gen:['divbig'], q:[
  ['72 ÷ 3 = ؟','24','23','21'],
  ['92 ÷ 4 = ؟','23','22','24'],
  ['85 ÷ 5 = ؟','17','16','15'],
  ['عند قسمة 52 على 4 تبقى عشرة واحدة، فنفكّها إلى:','10 آحاد','100 آحاد','آحاد واحد'],
  ['336 ÷ 3 = ؟','112','111','122'],
  ['78 ÷ 6 = ؟','13','12','14'],
  ['256 ÷ 2 = ؟','128','118','127']]},
 {sem:2, unit:'الفصل السادس: الضرب والقسمة (2)', t:'أصفار في ناتج القسمة', gen:['divbig'], q:[
  ['624 ÷ 6 = ؟','104','14','140'],
  ['816 ÷ 8 = ؟','102','12','120'],
  ['927 ÷ 9 = ؟','103','13','130'],
  ['412 ÷ 4 = ؟','103','13','130'],
  ['إذا كانت العشرات أصغر من المقسوم عليه نكتب في خانتها من الناتج:','0','1','نتركها فارغة'],
  ['520 ÷ 5 = ؟','104','14','140'],
  ['840 ÷ 4 = ؟','210','21','201']]},
 {sem:2, unit:'الفصل السادس: الضرب والقسمة (2)', t:'القسمة والباقي', gen:['divrem'], q:[
  ['37 ÷ 4 = 9 والباقي:','1','3','0'],
  ['25 ÷ 3 = ؟','8 والباقي 1','8 والباقي 2','7 والباقي 4'],
  ['يجب أن يكون الباقي دائماً ... المقسوم عليه.','أصغر من','أكبر من','مساوياً'],
  ['للتحقق: (ناتج القسمة × المقسوم عليه) + الباقي = ؟','المقسوم','المقسوم عليه','الصفر'],
  ['ما باقي قسمة 50 على 6؟','2','4','0'],
  ['47 ÷ 5 = ؟','9 والباقي 2','9 والباقي 3','8 والباقي 7'],
  ['ما باقي قسمة 29 على 7؟','1','2','3']]},
 {sem:2, unit:'الفصل السادس: الضرب والقسمة (2)', t:'الأعداد الزوجية والأعداد الفردية', gen:[], q:[
  ['العدد الزوجي آحاده:','0 أو 2 أو 4 أو 6 أو 8','1 أو 3 أو 5 أو 7 أو 9','أي رقم'],
  ['أيّ الأعداد زوجي؟','428','715','333'],
  ['أيّ الأعداد فردي؟','715','420','96'],
  ['باقي قسمة العدد الفردي على 2 هو:','1','0','2'],
  ['باقي قسمة العدد الزوجي على 2 هو:','0','1','2'],
  ['أيّ عدد زوجي أكبر من 11 وأصغر من 14؟','12','13','11'],
  ['عند تقسيم 9 كرات إلى مجموعتين متساويتين:','تبقى كرة واحدة','لا يبقى شيء','تبقى كرتان']]},
 {sem:2, unit:'الفصل السادس: الضرب والقسمة (2)', t:'حل المسائل', gen:['mul2d','divbig'], q:[
  ['لدى ممدوح 15 قطعة نقدية من فئة 10 ليرات. كم ليرة معه؟','150','25','105'],
  ['وُزّعت 96 بطاقة على 4 أطفال بالتساوي. كم بطاقة لكل طفل؟','24','92','100'],
  ['في كل صندوق 24 علبة. كم علبة في 3 صناديق؟','72','27','62'],
  ['وُزّع 50 قلماً على 6 تلاميذ بالتساوي. كم قلماً لكل تلميذ وكم يبقى؟','8 ويبقى 2','9 ويبقى 4','8 ويبقى 0'],
  ['يحتاج كل فريق 5 لاعبين. كم فريقاً نكوّن من 35 لاعباً؟','7','30','40'],
  ['ثمن الكتاب 125 ليرة. كم ثمن 4 كتب؟','500','129','400']]},

 {sem:2, unit:'الفصل السابع: القياس', t:'محيط المستطيل', gen:['perim'], q:[
  ['محيط أي شكل هو:','مجموع أطوال أضلاعه','عدد زواياه','المساحة داخله'],
  ['مغلّف مستطيل بُعداه 9 سم و5 سم. محيطه:','28 سم','14 سم','45 سم'],
  ['مستطيل طوله 6 سم وعرضه 4 سم. محيطه:','20 سم','24 سم','10 سم'],
  ['محيط المستطيل = (الطول + العرض) × ...','2','4','1'],
  ['مستطيل طوله 10 م وعرضه 3 م. محيطه:','26 م','30 م','13 م'],
  ['حديقة مستطيلة طولها 12 م وعرضها 8 م. ما طول السياج حولها؟','40 م','96 م','20 م']]},
 {sem:2, unit:'الفصل السابع: القياس', t:'محيط المربع', gen:['perim'], q:[
  ['محيط المربع = طول الضلع × ...','4','2','3'],
  ['بلاطة مربعة طول ضلعها 8 سم. محيطها:','32 سم','16 سم','64 سم'],
  ['مربع طول ضلعه 5 م. محيطه:','20 م','25 م','10 م'],
  ['مربع محيطه 36 سم. طول ضلعه:','9 سم','6 سم','12 سم'],
  ['مربع طول ضلعه 12 سم. محيطه:','48 سم','24 سم','144 سم'],
  ['أيهما محيطه أكبر: مربع ضلعه 6 سم أم مستطيل بُعداه 7 سم و4 سم؟','المربع','المستطيل','متساويان']]},
 {sem:2, unit:'الفصل السابع: القياس', t:'مساحة المستطيل والمربع', gen:['area','sqarea'], q:[
  ['مساحة أي شكل هي عدد ... اللازمة لتغطية سطحه.','الوحدات المربعة','الأضلاع','الزوايا'],
  ['مساحة المستطيل =','الطول × العرض','الطول + العرض','(الطول + العرض) × 2'],
  ['مستطيل طوله 7 سم وعرضه 3 سم. مساحته:','21 سم²','20 سم²','10 سم²'],
  ['غرفة مربعة طول ضلعها 4 م. مساحتها:','16 م²','8 م²','12 م²'],
  ['من واحدات قياس المساحة:','السنتيمتر المربع','السنتيمتر','الكيلوغرام'],
  ['مساحة مربع طول ضلعه 9 سم:','81 سم²','36 سم²','18 سم²'],
  ['مستطيل مساحته 24 سم² وطوله 6 سم. عرضه:','4 سم','18 سم','30 سم']]},
 {sem:2, unit:'الفصل السابع: القياس', t:'حل المسائل', gen:['area','perim'], q:[
  ['النموذج الأول فيه مستطيل واحد، والثاني 3، والثالث 5. كم مستطيلاً في النموذج الرابع؟','7','6','8'],
  ['مستطيل بُعداه 8 سم و5 سم. مساحته:','40 سم²','26 سم²','13 سم²'],
  ['أرض مستطيلة بُعداها 10 م و6 م أُحيطت بسياج. ما طول السياج؟','32 م','60 م','16 م'],
  ['نريد تغطية أرض مربعة ضلعها 3 م ببلاطات مساحة كل منها 1 م². كم بلاطة نحتاج؟','9','12','6'],
  ['ورقة مستطيلة بُعداها 12 سم و10 سم قُصّ من زاويتها مربع ضلعه 2 سم. ما مساحة الجزء الباقي؟','116 سم²','120 سم²','118 سم²'],
  ['غرفة رامي مربعة طول ضلعها 5 م. ما مساحتها؟','25 م²','20 م²','10 م²']]},
 {sem:2, unit:'الفصل السابع: القياس', t:'المسافة والطول', gen:['length'], q:[
  ['1 كيلومتر = ... متر','1000','100','10'],
  ['1 متر = ... سنتيمتر','100','10','1000'],
  ['3 كم = ... م','3000','300','30000'],
  ['5000 م = ... كم','5','50','500'],
  ['الوحدة الأنسب لقياس المسافة بين دمشق وطرطوس:','الكيلومتر','السنتيمتر','الميليمتر'],
  ['الرمز (كم) اختصار لكلمة:','الكيلومتر','الكيلوغرام','الكمية'],
  ['المسافة بين مدينتين 295 كم. ذهب سائق وعاد. كم كيلومتراً قطع؟','590','295','300']]},
 {sem:2, unit:'الفصل السابع: القياس', t:'الكتلة', gen:['weight'], q:[
  ['1 طن = ... كيلوغرام','1000','100','10'],
  ['1 كيلوغرام = ... غرام','1000','100','10'],
  ['3 طن = ... كغ','3000','300','30'],
  ['نستعمل الطن لقياس كتلة:','شاحنة','تفاحة','قلم'],
  ['5000 كغ = ... طن','5','50','500'],
  ['أيّ موازنة صحيحة؟','2 طن > 1500 كغ','2 طن < 1500 كغ','2 طن = 200 كغ'],
  ['لافتة تمنع مرور الشاحنات التي كتلتها أكثر من 3 طن. شاحنة كتلتها 2500 كغ:','يُسمح لها بالمرور','يُمنع مرورها','كتلتها 25 طناً']]},
 {sem:2, unit:'الفصل السابع: القياس', t:'السعة', gen:[], q:[
  ['الوحدة الأساسية لقياس السعة:','اللتر','المتر','الغرام'],
  ['1 لتر = ... ميليلتر','1000','100','10'],
  ['نقيس جرعة الدواء بـ:','الميليلتر','اللتر','الطن'],
  ['4 ل = ... مل','4000','400','40'],
  ['3000 مل = ... ل','3','30','300'],
  ['الوحدة الأنسب لقياس سعة خزان الماء:','اللتر','الميليلتر','السنتيمتر'],
  ['أيّهما أكبر: 2 ل أم 1500 مل؟','2 ل','1500 مل','متساويان']]},

 {sem:2, unit:'الفصل الثامن: الكسور', t:'تمثيل الكسور على مستقيم الأعداد', gen:['frac'], q:[
  ['في الكسر 3/4، العدد 4 يسمى:','المقام','البسط','العدد الصحيح'],
  ['في الكسر 3/4، العدد 3 يدل على:','عدد الأجزاء الملوّنة','عدد الأجزاء كلها','عدد القوالب'],
  ['نقرأ الكسر 3/4:','ثلاثة أرباع','أربعة أثلاث','ثلاثة أخماس'],
  ['لتمثيل 2/5 على مستقيم الأعداد نقسم المسافة بين 0 و1 إلى:','5 أجزاء متساوية','جزأين','7 أجزاء'],
  ['الكسر «خمسة أسداس» يُكتب:','5/6','6/5','5/10'],
  ['قُسمت فطيرة إلى 8 أجزاء متساوية وأُكل 3 منها. الكسر الدال على ما أُكل:','3/8','5/8','8/3'],
  ['الكسر الذي يقع في منتصف المسافة بين 0 و1:','1/2','1/4','2/1']]},
 {sem:2, unit:'الفصل الثامن: الكسور', t:'الكسور المتكافئة', gen:['frac'], q:[
  ['أيّ كسر يكافئ 1/2؟','2/4','2/3','1/4'],
  ['أيّ كسر يكافئ 2/3؟','4/6','3/4','2/6'],
  ['أكمل: 1/3 = ?/6','2','3','1'],
  ['الكسور المتكافئة تدل على:','الكمية نفسها','كميات مختلفة','أعداد أكبر من 1'],
  ['لإيجاد كسر مكافئ نضرب البسط والمقام في:','العدد نفسه','عددين مختلفين','صفر'],
  ['أيّ كسر يكافئ 3/4؟','6/8','3/8','4/3'],
  ['أكمل: 2/5 = 4/?','10','7','8']]},
 {sem:2, unit:'الفصل الثامن: الكسور', t:'موازنة الكسور (1)', gen:['fraccmp'], q:[
  ['أيّ إشارة تناسب: 3/7 ... 5/7','<','>','='],
  ['عند موازنة كسرين لهما المقام نفسه، الأكبر هو الذي:','بسطه أكبر','بسطه أصغر','مقامه أكبر'],
  ['أيّ الكسرين أكبر: 1/3 أم 1/5؟','1/3','1/5','متساويان'],
  ['عند موازنة كسرين لهما البسط نفسه، الأكبر هو الذي:','مقامه أصغر','مقامه أكبر','بسطه أكبر'],
  ['أيّ الكسور أكبر؟','7/9','4/9','2/9'],
  ['أيّ إشارة تناسب: 2/3 ... 2/5','>','<','=']]},
 {sem:2, unit:'الفصل الثامن: الكسور', t:'موازنة الكسور (2)', gen:['fraccmp'], q:[
  ['لموازنة 1/2 و3/8 نحوّل 1/2 إلى:','4/8','2/8','1/8'],
  ['أيّ الكسرين أكبر: 1/2 أم 3/8؟','1/2','3/8','متساويان'],
  ['قرأ كرم 2/3 الكتاب وقرأ تيم 5/6 الكتاب نفسه. من قرأ أكثر؟','تيم','كرم','قرأا الكمية نفسها'],
  ['أيّ إشارة تناسب: 3/4 ... 5/8','>','<','='],
  ['أيّ إشارة تناسب: 2/5 ... 4/10','=','>','<'],
  ['مقام مشترك للكسرين 1/3 و5/6 هو:','6','3','9'],
  ['أيّ الكسرين أصغر: 3/10 أم 2/5؟','3/10','2/5','متساويان']]},
 {sem:2, unit:'الفصل الثامن: الكسور', t:'موازنة الكسور مع العدد 1', gen:[], q:[
  ['الكسر الذي بسطه أصغر من مقامه يكون:','أصغر من 1','أكبر من 1','يساوي 1'],
  ['5/5 = ؟','1','5','0'],
  ['أيّ كسر أكبر من 1؟','7/4','3/4','4/7'],
  ['أيّ إشارة تناسب: 8/9 ... 1','<','>','='],
  ['أيّ إشارة تناسب: 9/6 ... 1','>','<','='],
  ['الكسر الذي بسطه يساوي مقامه:','يساوي 1','أصغر من 1','أكبر من 1']]},
 {sem:2, unit:'الفصل الثامن: الكسور', t:'ترتيب الكسور', gen:['fraccmp'], q:[
  ['رتّب تصاعدياً: 3/8، 1/8، 7/8','1/8، 3/8، 7/8','7/8، 3/8، 1/8','3/8، 1/8، 7/8'],
  ['رتّب تنازلياً: 1/2، 1/5، 1/3','1/2، 1/3، 1/5','1/5، 1/3، 1/2','1/3، 1/2، 1/5'],
  ['أصغر الكسور 2/4، 3/4، 1/4:','1/4','3/4','2/4'],
  ['رتّب تصاعدياً: 1/2، 1/4، 3/4','1/4، 1/2، 3/4','1/2، 1/4، 3/4','3/4، 1/2، 1/4'],
  ['أكبر الكسور 4/9، 4/7، 4/11:','4/7','4/11','4/9'],
  ['الترتيب التصاعدي يعني من:','الأصغر إلى الأكبر','الأكبر إلى الأصغر','دون ترتيب']]},
 {sem:2, unit:'الفصل الثامن: الكسور', t:'الاستعداد لجمع الكسور وطرحها', gen:['fracadd'], q:[
  ['لجمع كسرين لهما المقام نفسه:','نجمع البسطين ويبقى المقام نفسه','نجمع البسطين والمقامين','نضرب البسطين'],
  ['3/8 + 4/8 = ؟','7/8','7/16','12/8'],
  ['5/7 − 2/7 = ؟','3/7','3/0','7/7'],
  ['1/5 + 2/5 = ؟','3/5','3/10','2/5'],
  ['6/9 − 4/9 = ؟','2/9','2/0','10/9'],
  ['2/6 + 3/6 = ؟','5/6','5/12','6/6']]},
 {sem:2, unit:'الفصل الثامن: الكسور', t:'جمع الكسور', gen:['fracadd'], q:[
  ['1/2 + 1/4 = ؟','3/4','2/6','2/4'],
  ['1/3 + 1/6 = ؟','3/6','2/9','2/6'],
  ['لجمع 2/5 + 3/10 نحوّل 2/5 إلى:','4/10','2/10','5/10'],
  ['2/5 + 3/10 = ؟','7/10','5/15','5/10'],
  ['1/4 + 3/8 = ؟','5/8','4/12','4/8'],
  ['3/4 + 1/8 = ؟','7/8','4/12','4/8']]},
 {sem:2, unit:'الفصل الثامن: الكسور', t:'طرح الكسور', gen:['fracadd'], q:[
  ['1/2 − 1/4 = ؟','1/4','0/2','2/4'],
  ['استهلك صلاح نصف طبق الكرتون. ما الكسر الدال على الجزء الباقي؟','1/2','1/4','2/2'],
  ['5/6 − 1/3 = ؟','3/6','4/3','4/6'],
  ['7/8 − 1/4 = ؟','5/8','6/4','6/8'],
  ['9/10 − 2/5 = ؟','5/10','7/5','7/10'],
  ['خزان وقود ممتلئ حتى 3/4، استُهلك منه ما يعادل 1/2 الخزان. كم بقي فيه؟','1/4 الخزان','2/2 الخزان','2/4 الخزان']]},

 {sem:2, unit:'الفصل التاسع: الوقت', t:'قراءة الوقت وكتابته إلى دقيقة', gen:['time'], q:[
  ['كم دقيقة في الساعة؟','60','100','30'],
  ['كم دقيقة في ساعة ونصف؟','90','60','150'],
  ['العقرب الطويل في الساعة يشير إلى:','الدقائق','الساعات','الأيام'],
  ['الساعة الرقمية 4:41 تعني:','الرابعة وإحدى وأربعون دقيقة','الرابعة إلا إحدى وأربعين دقيقة','الحادية والأربعون وأربع دقائق'],
  ['بين كل رقمين متتاليين على وجه الساعة ... دقائق.','5','10','1'],
  ['يشير عقرب الدقائق إلى الرقم 3. كم دقيقة مضت بعد الساعة؟','15','3','30'],
  ['الساعة 7:08 تعني السابعة و:','ثماني دقائق','ثمانون دقيقة','ثماني ساعات']]},
 {sem:2, unit:'الفصل التاسع: الوقت', t:'قراءة الوقت وكتابته (و، إلا)', gen:['time'], q:[
  ['الساعة 3:55 نقرؤها:','الرابعة إلا خمس دقائق','الثالثة إلا خمس دقائق','الثالثة وخمس دقائق'],
  ['الساعة 7:05 نقرؤها:','السابعة وخمس دقائق','السابعة إلا خمس دقائق','الخامسة وسبع دقائق'],
  ['الساعة 10:30 نقرؤها:','العاشرة والنصف','العاشرة والربع','الحادية عشرة إلا ربعاً'],
  ['الساعة 6:45 نقرؤها:','السابعة إلا ربعاً','السادسة إلا ربعاً','السادسة والربع'],
  ['الساعة 9:15 نقرؤها:','التاسعة والربع','التاسعة إلا ربعاً','التاسعة والنصف'],
  ['«الثانية عشرة إلا عشر دقائق» تُكتب:','11:50','12:10','12:50']]},
 {sem:2, unit:'الفصل التاسع: الوقت', t:'النشاط والمدة', gen:['timecalc'], q:[
  ['من دمشق إلى حمص ساعتان و15 دقيقة، ومن حمص إلى حلب ساعتان و30 دقيقة. كم المدة كلها؟','4 ساعات و45 دقيقة','4 ساعات و15 دقيقة','5 ساعات و45 دقيقة'],
  ['تنطلق الحافلة 7:15 وتصل إلى المدرسة 7:25. كم دقيقة استغرقت؟','10','15','25'],
  ['بدأ الدرس 8:00 وانتهى 8:45. كم استغرق؟','45 دقيقة','40 دقيقة','ساعة واحدة'],
  ['ساعتان و40 دقيقة + ساعة و30 دقيقة = ؟','4 ساعات و10 دقائق','3 ساعات و10 دقائق','4 ساعات و70 دقيقة'],
  ['نام سامر الساعة 9 مساءً واستيقظ الساعة 6 صباحاً. كم ساعة نام؟','9','3','15'],
  ['عند جمع الدقائق إذا بلغ الناتج 60 دقيقة أو أكثر:','نحوّل كل 60 دقيقة إلى ساعة','نكتبه كما هو','نهمل الدقائق الزائدة']]}
]);

/* ===================== الصف الخامس — الفصل الأول (الوحدتان ١–٢ من الكتاب) ===================== */
REPL(5, 'math', 1, [
 {sem:1, unit:'الوحدة الأولى', t:'شبكة الإحداثيات', gen:[], q:[
  ['تُكتب النقطة على شبكة الإحداثيات بثنائية مثل (3، 4). العدد الأول يقابل المحور:','الأفقي','الشاقولي','المائل'],
  ['النقطة (0، 0) تسمى:','المبدأ','الرأس','المركز'],
  ['النقطة (5، 0) تقع على المحور:','الأفقي','الشاقولي','لا تقع على أي محور'],
  ['النقطة (0، 3) تقع على المحور:','الشاقولي','الأفقي','لا تقع على أي محور'],
  ['للوصول إلى (2، 6) من المبدأ نتحرك:','2 أفقياً ثم 6 شاقولياً','6 أفقياً ثم 2 شاقولياً','2 شاقولياً فقط'],
  ['تُستعمل شبكة الإحداثيات في:','تحديد المواقع على الخرائط','قياس الكتل','حساب الزمن'],
  ['النقطتان (1، 4) و(4، 1):','مختلفتان','متطابقتان','على المحور نفسه']]},
 {sem:1, unit:'الوحدة الأولى', t:'التمثيلات البيانية بالخطوط', gen:[], q:[
  ['يُستعمل التمثيل البياني بالخطوط لإظهار:','تغيّر البيانات عبر الزمن','أجزاء الدائرة','شكل المجسم'],
  ['إذا ارتفع الخط من سنة إلى التالية فهذا يعني أن القيمة:','ازدادت','نقصت','بقيت ثابتة'],
  ['إذا كان الخط أفقياً بين نقطتين فهذا يعني أن القيمة:','بقيت ثابتة','ازدادت','نقصت'],
  ['في التمثيل بالخطوط نصل بين النقاط بـ:','قطع مستقيمة','أعمدة','دوائر'],
  ['السنوات تُكتب عادة على المحور:','الأفقي','الشاقولي','المائل'],
  ['عدد الطلاب 60 سنة 2013 و70 سنة 2014. مقدار الزيادة:','10','130','70']]},
 {sem:1, unit:'الوحدة الأولى', t:'الأعداد الطبيعية', gen:['place','cmp'], q:[
  ['اكتب بالأرقام: مليونان وأربعمئة وثلاثة عشر ألفاً ومئة وخمسة وخمسون','2413155','2431155','241355'],
  ['قيمة الرقم 4 في العدد 2413155:','400000','4000','40000'],
  ['الصيغة اللفظية للعدد 4000:','أربعة آلاف','أربعمئة','أربعون'],
  ['الصيغة التفصيلية 7000 + 400 + 2 هي للعدد:','7402','742','7420'],
  ['المليون يساوي:','1000000','100000','10000000'],
  ['الرقم في منزلة مئات الألوف في العدد 5728016:','7','5','2'],
  ['اكتب بالأرقام: ثلاثة آلاف وستمئة وخمسة','3605','3650','30605']]},
 {sem:1, unit:'الوحدة الأولى', t:'تقريب الأعداد الطبيعية', gen:[], q:[
  ['العدد 1390 مقرّباً لأقرب مئة:','1400','1300','1399'],
  ['قرّب 2137 لأقرب ألف:','2000','3000','2100'],
  ['قرّب 315 لأقرب عشرة:','320','310','300'],
  ['قرّب 385920 لأقرب ألف:','386000','385000','390000'],
  ['قرّب 580 لأقرب مئة:','600','500','580'],
  ['قرّب 47500 لأقرب ألف:','48000','47000','50000'],
  ['قرّب 385920 لأقرب مئة ألف:','400000','300000','390000']]},
 {sem:1, unit:'الوحدة الأولى', t:'جمع الأعداد الطبيعية وطرحها', gen:['addbig','subbig'], q:[
  ['203565 + 321789 = ؟','525354','525344','524354'],
  ['5028000 − 3264240 = ؟','1763760','1764760','2236240'],
  ['عند الجمع شاقولياً نرتّب خانات العددين تحت بعضها بدءاً من خانة:','الآحاد','الملايين','الألوف'],
  ['25 + 75 = ؟','100','90','110'],
  ['47000 + 53000 = ؟','100000','90000','10000'],
  ['600000 − 250000 = ؟','350000','450000','250000'],
  ['300 − 290 = ؟','10','590','100']]},
 {sem:1, unit:'الوحدة الأولى', t:'قياس الزوايا', gen:['angles','angles2'], q:[
  ['نقيس الزوايا باستعمال:','المنقلة','المسطرة','الفرجار'],
  ['واحدة قياس الزوايا هي:','الدرجة','السنتيمتر','الغرام'],
  ['قياس الزاوية القائمة:','90°','180°','45°'],
  ['قياس الزاوية المستقيمة:','180°','90°','360°'],
  ['زاوية قياسها 120° هي زاوية:','منفرجة','حادة','قائمة'],
  ['زاوية قياسها 35° هي زاوية:','حادة','منفرجة','مستقيمة'],
  ['نصف المستقيم هو جزء من المستقيم:','له بداية وليس له نهاية','له طرفان','ليس له بداية ولا نهاية']]},
 {sem:1, unit:'الوحدة الأولى', t:'متوازي الأضلاع', gen:['shapes'], q:[
  ['متوازي الأضلاع شكل رباعي فيه كل ضلعين متقابلين:','متوازيان','متعامدان','متقاطعان'],
  ['في متوازي الأضلاع كل ضلعين متقابلين:','متساويان في الطول','مختلفان دائماً','أحدهما ضعف الآخر'],
  ['في متوازي الأضلاع كل زاويتين متقابلتين:','متساويتان','مجموعهما 90°','قائمتان دائماً'],
  ['متوازي أضلاع ABCD فيه AB = 5 سم. طول CD:','5 سم','10 سم','2.5 سم'],
  ['كم ضلعاً لمتوازي الأضلاع؟','4','3','6'],
  ['متوازي أضلاع طولا ضلعين متجاورين فيه 6 سم و4 سم. محيطه:','20 سم','24 سم','10 سم']]},
 {sem:1, unit:'الوحدة الأولى', t:'المعيّن', gen:['shapes'], q:[
  ['المعيّن متوازي أضلاع فيه ضلعان متجاوران:','متساويان','متوازيان','مختلفان'],
  ['أضلاع المعيّن الأربعة:','متساوية','مختلفة','اثنان منها فقط متساويان'],
  ['معيّن طول ضلعه 3 سم. محيطه:','12 سم','9 سم','6 سم'],
  ['قطرا المعيّن:','متعامدان','متوازيان','منطبقان'],
  ['معيّن محيطه 20 سم. طول ضلعه:','5 سم','4 سم','10 سم'],
  ['كل معيّن هو:','متوازي أضلاع','مستطيل','مثلث']]},

 {sem:1, unit:'الوحدة الثانية', t:'مقارنة الأعداد الطبيعية وترتيبها', gen:['cmp'], q:[
  ['الرمز < يُقرأ:','أصغر من','أكبر من','يساوي'],
  ['أيّ إشارة تناسب: 4779 ... 4797','<','>','='],
  ['رتّب تصاعدياً: 422، 425، 291، 315','291، 315، 422، 425','425، 422، 315، 291','315، 291، 422، 425'],
  ['أكبر الأعداد:','6120202','6120022','6102202'],
  ['أيّ إشارة تناسب: 1000000 ... 999999','>','<','='],
  ['رتّب تنازلياً: 1025، 6120، 6012','6120، 6012، 1025','1025، 6012، 6120','6012، 6120، 1025']]},
 {sem:1, unit:'الوحدة الثانية', t:'ضرب الأعداد الطبيعية', gen:['mul3d','mul2d'], q:[
  ['3 × 1320 = ؟','3960','3660','3906'],
  ['383 × 365 = ؟','139795','139695','138795'],
  ['الخاصة التبديلية للضرب تعني:','12 × 5 = 5 × 12','12 × 5 = 12 + 5','(2 × 3) × 4 = 2 × (3 × 4)'],
  ['الخاصة التجميعية للضرب تعني:','(2 × 3) × 4 = 2 × (3 × 4)','12 × 5 = 5 × 12','2 × (3 + 4) = 2 × 3 + 2 × 4'],
  ['3 × 5 × 2 = ؟','30','10','25'],
  ['125 × 8 = ؟','1000','800','1250'],
  ['سعر متر القماش 1250 ليرة. ثمن 4 أمتار:','5000','4250','4800']]},
 {sem:1, unit:'الوحدة الثانية', t:'المضاعف المشترك الأصغر', gen:[], q:[
  ['المضاعفات الستة الأولى للعدد 3:','3، 6، 9، 12، 15، 18','1، 3، 6، 9، 12، 15','3، 5، 7، 9، 11، 13'],
  ['المضاعف المشترك الأصغر للعددين 3 و4:','12','7','24'],
  ['المضاعف المشترك الأصغر للعددين 2 و3:','6','5','12'],
  ['المضاعف المشترك الأصغر للعددين 4 و6:','12','24','10'],
  ['يُصدر جهاز ضوءاً كل 3 ثوانٍ وآخر كل 4 ثوانٍ، وبدأا معاً. بعد كم ثانية يُصدران الضوء معاً أول مرة؟','12','7','24'],
  ['المضاعف المشترك الأصغر للعددين 5 و10:','10','50','15'],
  ['أيّ عدد مضاعف مشترك للعددين 2 و5؟','20','15','25']]},
 {sem:1, unit:'الوحدة الثانية', t:'الكسور (1)', gen:['fraccmp'], q:[
  ['تناول صلاح 3/4 قالب الحلوى وتناولت مايا 5/8 منه. من تناول كمية أكبر؟','صلاح','مايا','الكمية نفسها'],
  ['أيّ إشارة تناسب: 2/9 ... 7/9','<','>','='],
  ['لمقارنة كسرين مقام أحدهما مضاعف لمقام الآخر:','نوحّد المقامين ثم نقارن البسطين','نقارن المقامين فقط','نجمع الكسرين'],
  ['أكمل لتحصل على كسرين متكافئين: 1/2 = 5/?','10','5','7'],
  ['رتّب تصاعدياً: 3/10، 1/2، 1/5','1/5، 3/10، 1/2','1/2، 3/10، 1/5','3/10، 1/5، 1/2'],
  ['أيّ إشارة تناسب: 4/5 ... 8/10','=','>','<'],
  ['أيّ الكسرين أكبر: 2/3 أم 7/12؟','2/3','7/12','متساويان']]},
 {sem:1, unit:'الوحدة الثانية', t:'الكسور (2)', gen:['frac'], q:[
  ['كتلة السكر «ثلاثة كيلوغرامات ونصف» تُكتب كسراً عادياً:','7/2','3/2','5/2'],
  ['الكسر 7/4 يُكتب كسراً مركباً:','1 و3/4','3 و1/4','1 و4/7'],
  ['الكسر الذي بسطه أكبر من مقامه يكون:','أكبر من 1','أصغر من 1','يساوي 0'],
  ['2 و1/3 = ؟','7/3','6/3','5/3'],
  ['قالب حلوى وثلاثة أرباع القالب يساوي:','7/4 قالب','4/7 قالب','3/4 قالب'],
  ['10/5 = ؟','2','5','10'],
  ['أيّ إشارة تناسب: 9/4 ... 2','>','<','=']]},
 {sem:1, unit:'الوحدة الثانية', t:'الأجزاء العشرية (1)', gen:['decadd'], q:[
  ['3/10 يُكتب بالصيغة العشرية:','0.3','3.0','0.03'],
  ['0.7 تُقرأ:','سبعة أجزاء من عشرة','سبعة أجزاء من مئة','سبعة'],
  ['أيّ إشارة تناسب: 0.4 ... 0.6','<','>','='],
  ['قُسم مكعب إلى 10 شرائح متساوية ولُوّنت 6 منها. الجزء الملوّن:','0.6','0.06','6'],
  ['أيّ عدد يساوي 1/10؟','0.1','1.0','0.01'],
  ['10/10 = ؟','1','0.10','10']]},
 {sem:1, unit:'الوحدة الثانية', t:'الأجزاء العشرية (2)', gen:['decadd'], q:[
  ['24/100 يُكتب بالصيغة العشرية:','0.24','2.4','0.024'],
  ['0.05 تُقرأ:','خمسة أجزاء من مئة','خمسة أجزاء من عشرة','خمسون'],
  ['أيّ إشارة تناسب: 0.4 ... 0.40','=','>','<'],
  ['أيّ إشارة تناسب: 0.35 ... 0.5','<','>','='],
  ['ما العدد العشري المساوي لـ 7/100؟','0.07','0.7','7.00'],
  ['0.3 = ... جزءاً من مئة','30','3','300']]},
 {sem:1, unit:'الوحدة الثانية', t:'الأجزاء العشرية (3)', gen:['decadd'], q:[
  ['35/1000 يُكتب بالصيغة العشرية:','0.035','0.35','3.5'],
  ['0.005 تُقرأ:','خمسة أجزاء من ألف','خمسة أجزاء من مئة','خمسمئة'],
  ['أيّ إشارة تناسب: 0.304 ... 0.34','<','>','='],
  ['0.2 = ... جزءاً من ألف','200','20','2'],
  ['أيّ إشارة تناسب: 7/1000 ... 5/1000','>','<','='],
  ['1000/1000 = ؟','1','0.1','1000']]},
 {sem:1, unit:'الوحدة الثانية', t:'المستطيل', gen:['perim','area'], q:[
  ['المستطيل متوازي أضلاع فيه:','زاوية قائمة','أضلاع متساوية كلها','زاوية منفرجة'],
  ['قطرا المستطيل:','متساويان في الطول','متعامدان دائماً','مختلفان دائماً'],
  ['كم زاوية قائمة في المستطيل؟','4','1','2'],
  ['عرض العلم السوري ثلثا طوله. إذا كان طوله 90 سم فعرضه:','60 سم','30 سم','45 سم'],
  ['مستطيل بُعداه 8 سم و5 سم. محيطه:','26 سم','40 سم','13 سم'],
  ['كل مستطيل هو:','متوازي أضلاع','مربع','معيّن']]},
 {sem:1, unit:'الوحدة الثانية', t:'المربع', gen:['sqarea','perim'], q:[
  ['المربع مستطيل:','تساوى بُعداه','فيه زاوية منفرجة','أضلاعه مختلفة'],
  ['المربع معيّن:','فيه زاوية قائمة','فيه زاوية منفرجة','بلا زوايا'],
  ['قطرا المربع:','متساويان ومتعامدان','متوازيان','مختلفان في الطول'],
  ['مربع طول ضلعه 7 سم. محيطه:','28 سم','49 سم','14 سم'],
  ['مربع طول ضلعه 6 سم. مساحته:','36 سم²','24 سم²','12 سم²'],
  ['كم محور تناظر للمربع؟','4','2','1']]}
]);

/* ===================== الصف الخامس — الفصل الثاني (الوحدات ٣–٥ من الكتاب) ===================== */
REPL(5, 'math', 2, [
 {sem:2, unit:'الوحدة الثالثة', t:'جمع الكسور وطرحها', gen:['fracadd'], q:[
  ['3/7 + 2/7 = ؟','5/7','5/14','6/7'],
  ['8/9 − 5/9 = ؟','3/9','3/0','13/9'],
  ['1/2 + 3/10 = ؟','8/10','4/12','4/10'],
  ['3/4 − 1/2 = ؟','1/4','2/2','2/4'],
  ['إذا كان 74/100 من مساحةٍ ما ماءً، فما الجزء الباقي منها؟','26/100','36/100','74/100'],
  ['عند جمع كسرين لهما المقام نفسه:','نضع المقام كما هو ونجمع البسطين','نجمع المقامين','نضرب البسطين'],
  ['2/3 + 1/6 = ؟','5/6','3/9','3/6']]},
 {sem:2, unit:'الوحدة الثالثة', t:'قراءة الأعداد العشرية وكتابتها', gen:['decadd'], q:[
  ['العدد 3 و25/100 يُكتب بالصيغة العشرية:','3.25','32.5','3.025'],
  ['في العدد 4.75 الرقم 7 في منزلة:','الأجزاء من عشرة','الأجزاء من مئة','الآحاد'],
  ['العدد 12.006 يُقرأ:','اثنا عشر وستة أجزاء من ألف','اثنا عشر وستة أجزاء من مئة','اثنا عشر وستة'],
  ['في العدد 15.38 القسم الصحيح هو:','15','38','1538'],
  ['اكتب بالصيغة العشرية: 2 و7/10','2.7','2.07','27'],
  ['أيّ عدد يساوي 5 و4/1000؟','5.004','5.04','5.4']]},
 {sem:2, unit:'الوحدة الثالثة', t:'ترتيب الأعداد العشرية', gen:[], q:[
  ['أيّ إشارة تناسب: 0.7 ... 0.75','<','>','='],
  ['أيّ إشارة تناسب: 10.2 ... 9.99','>','<','='],
  ['رتّب تصاعدياً: 0.02، 0.3، 0.005','0.005، 0.02، 0.3','0.3، 0.02، 0.005','0.02، 0.005، 0.3'],
  ['أيّ عدد هو الأكبر؟','3.5','3.45','3.405'],
  ['لمقارنة عددين عشريين نقارن أولاً:','القسم الصحيح','الرقم الأخير','عدد الخانات'],
  ['رمى رامي الكرة الحديدية 8.35 م ورمتها عبير 8.5 م. من رمى أبعد؟','عبير','رامي','المسافة نفسها']]},
 {sem:2, unit:'الوحدة الثالثة', t:'المثلث', gen:['angles2','shapes'], q:[
  ['المثلث خط منكسر مغلق مكوّن من:','3 قطع مستقيمة','4 قطع مستقيمة','قطعتين'],
  ['المثلث الذي أضلاعه الثلاثة متساوية يسمى:','متساوي الأضلاع','متساوي الساقين فقط','مختلف الأضلاع'],
  ['المثلث الذي فيه ضلعان فقط متساويان يسمى:','متساوي الساقين','مختلف الأضلاع','متساوي الأضلاع'],
  ['مثلث أطوال أضلاعه 3 سم و4 سم و5 سم هو مثلث:','مختلف الأضلاع','متساوي الأضلاع','متساوي الساقين'],
  ['مثلث أطوال أضلاعه 6 سم و6 سم و6 سم. محيطه:','18 سم','12 سم','36 سم'],
  ['مجموع قياسات زوايا المثلث:','180°','90°','360°'],
  ['المثلث الذي فيه زاوية قائمة يسمى:','قائم الزاوية','حاد الزوايا','منفرج الزاوية']]},
 {sem:2, unit:'الوحدة الثالثة', t:'الدائرة', gen:[], q:[
  ['طول قطر الدائرة يساوي طول نصف القطر مضروباً في:','2','3','4'],
  ['دائرة نصف قطرها 3 سم. طول قطرها:','6 سم','3 سم','9 سم'],
  ['دائرة قطرها 10 سم. نصف قطرها:','5 سم','20 سم','10 سم'],
  ['لرسم دائرة نستعمل:','الفرجار','المنقلة','الكوس'],
  ['النقطة التي تبعد المسافة نفسها عن جميع نقاط الدائرة تسمى:','المركز','القطر','الوتر'],
  ['القطعة التي تصل المركز بنقطة من الدائرة تسمى:','نصف القطر','القطر','المحيط']]},
 {sem:2, unit:'الوحدة الثالثة', t:'المجسمات', gen:['solids'], q:[
  ['مجسم جميع سطوحه مستوية:','المكعب','الكرة','الأسطوانة'],
  ['مجسم بعض سطوحه منحنية:','الأسطوانة','المكعب','متوازي المستطيلات'],
  ['كم وجهاً للمكعب؟','6','4','8'],
  ['كم رأساً للمكعب؟','8','6','12'],
  ['كم حرفاً للمكعب؟','12','8','6'],
  ['سطح الكرة:','منحنٍ','مستوٍ','مثلثي'],
  ['علبة المحارم الورقية تشبه:','متوازي المستطيلات','الكرة','المخروط']]},

 {sem:2, unit:'الوحدة الرابعة', t:'جمع الأعداد العشرية وطرحها', gen:['decadd'], q:[
  ['0.15 + 0.12 = ؟','0.27','0.37','2.7'],
  ['كتلة وليد 40.75 كغ وازدادت 8.5 كغ. كتلته الجديدة:','49.25 كغ','48.25 كغ','41.6 كغ'],
  ['0.004 + 0.005 = ؟','0.009','0.09','0.9'],
  ['5.6 − 2.3 = ؟','3.3','7.9','3.9'],
  ['عند جمع الأعداد العشرية نرتّبها بحيث تكون:','الفواصل تحت بعضها','الأرقام الأخيرة تحت بعضها','الأرقام الأولى تحت بعضها'],
  ['10 − 3.75 = ؟','6.25','7.25','6.35'],
  ['12.5 + 7.25 = ؟','19.75','19.30','20.75']]},
 {sem:2, unit:'الوحدة الرابعة', t:'ضرب عدد عشري بعدد طبيعي', gen:['decmul'], q:[
  ['0.2 × 3 = ؟','0.6','6','0.5'],
  ['0.07 × 4 = ؟','0.28','2.8','0.028'],
  ['2.35 × 10 = ؟','23.5','235','0.235'],
  ['4.6 × 100 = ؟','460','46','4600'],
  ['عند ضرب عدد عشري في 1000 تتحرك الفاصلة:','3 خانات نحو اليمين','3 خانات نحو اليسار','خانة واحدة نحو اليمين'],
  ['1.5 × 6 = ؟','9','6.5','90'],
  ['قطعة مطاط طولها 8.5 سم مُطّت إلى 10 أضعاف طولها. طولها الجديد:','85 سم','850 سم','18.5 سم']]},
 {sem:2, unit:'الوحدة الرابعة', t:'مساحة المثلث', gen:['area'], q:[
  ['مساحة المثلث =','(القاعدة × الارتفاع) ÷ 2','القاعدة × الارتفاع','القاعدة + الارتفاع'],
  ['مثلث قاعدته 6 سم وارتفاعه 4 سم. مساحته:','12 سم²','24 سم²','10 سم²'],
  ['مساحة المثلث تساوي ... مساحة المستطيل الذي له القاعدة والارتفاع نفسهما.','نصف','ضعف','ربع'],
  ['مثلث قائم طولا ضلعي القائمة فيه 8 سم و5 سم. مساحته:','20 سم²','40 سم²','13 سم²'],
  ['مثلث قاعدته 10 م وارتفاعه 7 م. مساحته:','35 م²','70 م²','17 م²'],
  ['مستطيل مساحته 12 مربعاً قُسم بقطره إلى مثلثين. مساحة كل مثلث:','6 مربعات','12 مربعاً','24 مربعاً']]},
 {sem:2, unit:'الوحدة الرابعة', t:'التشابه والتطابق', gen:[], q:[
  ['الشكلان المتطابقان لهما:','الشكل نفسه والقياسات نفسها','الشكل نفسه وقياسات مختلفة','أشكال مختلفة'],
  ['الشكلان المتشابهان لهما:','الشكل نفسه وقد تختلف القياسات','القياسات نفسها دائماً','أشكال مختلفة'],
  ['الصورة المكبَّرة لشكل هي شكل:','مشابه له','مطابق له','مختلف عنه'],
  ['مربعان طول ضلع الأول 2 سم وطول ضلع الثاني 5 سم:','متشابهان','متطابقان','غير متشابهين'],
  ['مثلثان لهما الأطوال نفسها وقياسات الزوايا نفسها:','متطابقان','غير متشابهين','مختلفان'],
  ['كل شكلين متطابقين هما أيضاً:','متشابهان','مختلفان','متعامدان']]},
 {sem:2, unit:'الوحدة الرابعة', t:'حركة الأشكال المتطابقة', gen:[], q:[
  ['حركات الأشكال المتطابقة هي:','الانسحاب والدوران والانعكاس','الجمع والطرح','التكبير والتصغير'],
  ['انزلاق الشكل في اتجاه معين دون أن يدور يسمى:','انسحاباً','دوراناً','انعكاساً'],
  ['حركة ناعورة حماة حول محورها مثال على:','الدوران','الانسحاب','الانعكاس'],
  ['صورة الشكل في المرآة مثال على:','الانعكاس','الانسحاب','الدوران'],
  ['بعد الانسحاب أو الدوران أو الانعكاس يبقى الشكل:','مطابقاً للأصل','أكبر من الأصل','أصغر من الأصل'],
  ['حركة المصعد من طابق إلى آخر مثال على:','الانسحاب','الدوران','الانعكاس']]},

 {sem:2, unit:'الوحدة الخامسة', t:'أنماط قسمة عدد عشري', gen:['decmul'], q:[
  ['56144.15 ÷ 10 = ؟','5614.415','561441.5','561.4415'],
  ['عند القسمة على 100 تتحرك الفاصلة العشرية:','خانتين نحو اليسار','خانتين نحو اليمين','خانة واحدة نحو اليسار'],
  ['47202.3 ÷ 100 = ؟','472.023','4720.23','47.2023'],
  ['87.91 ÷ 1000 = ؟','0.08791','0.8791','8.791'],
  ['71.4 ÷ 10 = ؟','7.14','714','0.714'],
  ['العملية التي تعكس الضرب في 10 هي:','القسمة على 10','الضرب في 100','الجمع مع 10']]},
 {sem:2, unit:'الوحدة الخامسة', t:'القسمة (1)', gen:['divrem'], q:[
  ['يقبل العدد القسمة على 2 إذا كان آحاده:','زوجياً','فردياً','5 فقط'],
  ['يقبل العدد القسمة على 5 إذا كان آحاده:','0 أو 5','2 أو 4','أي رقم'],
  ['يقبل العدد القسمة على 10 إذا كان آحاده:','0','5','1'],
  ['يقبل العدد القسمة على 3 إذا كان:','مجموع أرقامه يقبل القسمة على 3','آحاده 3','عشراته 3'],
  ['أيّ عدد يقبل القسمة على 3؟','78','77','79'],
  ['العدد 1350 يقبل القسمة على كل من:','3 و5 و10','7 و9','4 و7'],
  ['أيّ عدد لا يقبل القسمة على 5؟','78','75','80']]},
 {sem:2, unit:'الوحدة الخامسة', t:'القسمة (2)', gen:['divbig'], q:[
  ['137 ÷ 2 = ؟','68.5','68','69.5'],
  ['10 ÷ 4 = ؟','2.5','2','2.4'],
  ['وُزّع مبلغ 137 ليرة بالتساوي بين خالد ومنى. حصة كل منهما:','68.5 ليرة','68 ليرة','70 ليرة'],
  ['15 ÷ 2 = ؟','7.5','7','8'],
  ['9 ÷ 4 = ؟','2.25','2.5','2.1'],
  ['لمتابعة القسمة بعد ظهور باقٍ نكتب المقسوم عدداً عشرياً ونضيف:','صفراً بعد الفاصلة','واحداً','الباقي إلى الناتج']]},
 {sem:2, unit:'الوحدة الخامسة', t:'تحليل العدد', gen:[], q:[
  ['العدد الأولي له:','قاسمان مختلفان فقط: 1 والعدد نفسه','ثلاثة قواسم','قاسم واحد'],
  ['أيّ الأعداد أولي؟','13','15','21'],
  ['العدد 1:','ليس أولياً','أولي','زوجي'],
  ['قواسم العدد 4:','1 و2 و4','1 و4','2 و4'],
  ['تحليل 12 إلى جداء عوامل أولية:','2 × 2 × 3','3 × 4','2 × 6'],
  ['أيّ الأعداد ليس أولياً؟','9','7','11'],
  ['الأعداد الأولية الأصغر من 10:','2، 3، 5، 7','1، 3، 5، 7، 9','2، 4، 6، 8']]},
 {sem:2, unit:'الوحدة الخامسة', t:'الطول', gen:['length'], q:[
  ['الوحدة الأساسية لقياس الأطوال:','المتر','السنتيمتر','الكيلومتر'],
  ['1 ديسيمتر = ... سنتيمتر','10','100','1000'],
  ['1 متر = ... ميليمتر','1000','100','10'],
  ['2.56 كم = ... م','2560','256','25600'],
  ['نقيس سماكة قطعة نقود بـ:','الميليمتر','المتر','الكيلومتر'],
  ['350 سم = ... م','3.5','35','0.35'],
  ['1 متر = ... ديسيمتر','10','100','1000']]},
 {sem:2, unit:'الوحدة الخامسة', t:'الكتلة', gen:['weight'], q:[
  ['الوحدة الأساسية لقياس الكتلة:','الغرام','الطن','المتر'],
  ['1 غرام = ... ميليغرام','1000','100','10'],
  ['3 طن = ... كغ','3000','300','30'],
  ['3000 غ = ... كغ','3','30','300'],
  ['الوحدة المناسبة لقياس كتلة حقيبة سفر:','الكيلوغرام','الطن','الميليغرام'],
  ['الوحدة المناسبة لقياس كتلة فيل:','الطن','الغرام','الميليغرام'],
  ['1 ميليغرام = ... غرام','0.001','1000','0.1']]},
 {sem:2, unit:'الوحدة الخامسة', t:'الحجم', gen:[], q:[
  ['حجم المجسم هو عدد ... التي تؤلفه.','الوحدات المكعبة','الوحدات المربعة','الأضلاع'],
  ['حجم متوازي المستطيلات =','الطول × العرض × الارتفاع','الطول + العرض + الارتفاع','الطول × العرض'],
  ['مكعب طول حرفه 3 سم. حجمه:','27 سم³','9 سم³','18 سم³'],
  ['متوازي مستطيلات أبعاده 5 سم و4 سم و2 سم. حجمه:','40 سم³','11 سم³','20 سم³'],
  ['1 دسم³ = ... سم³','1000','100','10'],
  ['مكعب طول حرفه 2 سم. حجمه:','8 سم³','6 سم³','4 سم³']]},
 {sem:2, unit:'الوحدة الخامسة', t:'الزمن', gen:['timecalc'], q:[
  ['1 ساعة = ... دقيقة','60','100','24'],
  ['1 دقيقة = ... ثانية','60','100','10'],
  ['3 دقائق و10 ثوانٍ + 4 دقائق و45 ثانية = ؟','7 دقائق و55 ثانية','7 دقائق و35 ثانية','8 دقائق و55 ثانية'],
  ['2 سا 15 د 20 ث + 1 سا 30 د 33 ث = ؟','3 سا 45 د 53 ث','3 سا 45 د 13 ث','4 سا 45 د 53 ث'],
  ['عند جمع الأزمنة نبدأ بجمع:','الثواني','الساعات','الدقائق'],
  ['1 ساعة = ... ثانية','3600','60','360'],
  ['90 دقيقة = ؟','ساعة و30 دقيقة','ساعة و90 دقيقة','9 ساعات']]}
]);

/* ===================== الصف السادس — الفصل الأول (الوحدات ١–٣ من الكتاب) ===================== */
REPL(6, 'math', 1, [
 {sem:1, unit:'الوحدة الأولى', t:'التمثيل البياني بالخطوط', gen:[], q:[
  ['التمثيل البياني بالخطوط يهتم بـ:','تغيّر البيانات عبر الزمن','أجزاء الكل','أشكال المجسمات'],
  ['في النقطة (4، 0) العدد 0 هو الإحداثي على المحور:','الشاقولي','الأفقي','المائل'],
  ['عدد الطلاب 65 سنة 2015 و60 سنة 2016. ماذا حدث؟','نقص بمقدار 5','زاد بمقدار 5','لم يتغيّر'],
  ['في تمثيل عدد الطلاب عبر السنوات، المحور الأفقي يمثل:','السنوات','عدد الطلاب','التدريج'],
  ['إذا انحدر الخط نحو الأسفل فإن القيمة:','تتناقص','تتزايد','ثابتة'],
  ['النقطة (3، 2) تبعد عن المحور الشاقولي:','3 وحدات','وحدتين','5 وحدات']]},
 {sem:1, unit:'الوحدة الأولى', t:'الأعداد الطبيعية (1)', gen:[], q:[
  ['الأعداد الطبيعية هي:','0، 1، 2، 3، ...','1، 2، 3 فقط','الكسور'],
  ['أصغر عدد طبيعي:','0','1','لا يوجد'],
  ['هل يوجد أكبر عدد طبيعي؟','لا','نعم','هو 1000000'],
  ['العدد الطبيعي الذي يلي 999:','1000','998','9910'],
  ['ساهمت كتابات ... بنشر الأرقام العربية في العالم.','الخوارزمي','ابن بطوطة','الإدريسي'],
  ['أيّ مما يأتي ليس عدداً طبيعياً؟','1/2','0','15']]},
 {sem:1, unit:'الوحدة الأولى', t:'الأعداد الطبيعية (2)', gen:['place'], q:[
  ['المليار يساوي:','1000 مليون','100 مليون','10 ملايين'],
  ['الصيغة اللفظية للعدد 50000:','خمسون ألفاً','خمسة آلاف','خمسمئة ألف'],
  ['اكتب بالأرقام: مليون وستمئة وخمسة وثلاثون','1000635','1635','100635'],
  ['الصيغة التفصيلية 300000 + 8000 + 700 + 1 هي للعدد:','308701','38701','3008701'],
  ['تبلغ المسافة بين الأرض والشمس نحو 150 مليون كيلومتر، وتُكتب:','150000000','15000000','1500000000'],
  ['كم صفراً في المليار (1000000000)؟','9','6','12']]},
 {sem:1, unit:'الوحدة الأولى', t:'الأعداد الطبيعية (3)', gen:['cmp'], q:[
  ['العدد 1390 مقرّباً لأقرب مئة:','1400','1300','1390'],
  ['أكبر الأعداد:','10200','10020','10002'],
  ['أيّ عبارة صحيحة؟','4382000 > 4315000','3251680 = 3251580','200001 > 1000002'],
  ['قرّب 149597870 لأقرب مليون:','150000000','149000000','149600000'],
  ['عند التقريب، إذا كان الرقم على يمين الخانة المطلوبة 5 أو أكبر:','نضيف 1 إلى الخانة ونجعل ما يمينها أصفاراً','نتركها كما هي','نحذف العدد'],
  ['قرّب 7649 لأقرب ألف:','8000','7000','7600']]},
 {sem:1, unit:'الوحدة الأولى', t:'المستقيم', gen:[], q:[
  ['من نقطتين مختلفتين يمرّ:','مستقيم واحد فقط','مستقيمان','عدد لا نهائي من المستقيمات'],
  ['الرمز (AB) يدل على:','المستقيم AB','القطعة المستقيمة AB','نصف المستقيم AB'],
  ['الرمز [AB] يدل على:','القطعة المستقيمة AB','المستقيم AB','نصف المستقيم AB'],
  ['الرمز [AB) يدل على:','نصف المستقيم AB','القطعة المستقيمة AB','المستقيم AB'],
  ['القطعة المستقيمة لها:','طرفان','طرف واحد','لا أطراف'],
  ['المسافة بين الأرض والشمس هي طول:','القطعة المستقيمة الواصلة بينهما','المستقيم المار بهما','الزاوية بينهما']]},
 {sem:1, unit:'الوحدة الأولى', t:'التعامد والتوازي', gen:[], q:[
  ['المستقيمان المتقاطعان يشتركان في:','نقطة واحدة','نقطتين','لا شيء'],
  ['المستقيمان المتوازيان:','لا يتقاطعان مهما امتدّا','يتقاطعان في نقطة','متعامدان'],
  ['المستقيمان المتعامدان يصنعان زاوية:','قائمة','حادة','منفرجة'],
  ['لرسم مستقيمين متعامدين نستعمل:','الكوس','الفرجار','الميزان'],
  ['خطّا سكة القطار مثال على مستقيمين:','متوازيين','متعامدين','متقاطعين'],
  ['المستقيمان المتعامدان هما مستقيمان:','متقاطعان','متوازيان','لا يلتقيان']]},
 {sem:1, unit:'الوحدة الأولى', t:'الزوايا', gen:['angles','angles2'], q:[
  ['قسّم البابليون الدائرة إلى ... قسماً، كل قسم درجة.','360','180','90'],
  ['الزاويتان المتقابلتان بالرأس:','متساويتان في القياس','مجموعهما 90°','مختلفتان دائماً'],
  ['زاويتان متجاورتان ضلعاهما غير المشتركين على استقامة واحدة. مجموعهما:','180°','90°','360°'],
  ['زاوية قياسها 60° تقابلها بالرأس زاوية قياسها:','60°','120°','30°'],
  ['زاويتان متجاورتان على مستقيم، قياس إحداهما 30°. قياس الأخرى:','150°','60°','330°'],
  ['الزاويتان المتجاورتان تشتركان في:','الرأس وضلع','الرأس فقط','لا شيء']]},
 {sem:1, unit:'الوحدة الأولى', t:'المثلث', gen:['angles2'], q:[
  ['مجموع قياسات زوايا المثلث:','180°','360°','90°'],
  ['مثلث فيه زاويتان 50° و60°. قياس الزاوية الثالثة:','70°','80°','110°'],
  ['زاويتا القاعدة في المثلث المتساوي الساقين:','متساويتان','مجموعهما 90°','مختلفتان'],
  ['قياس كل زاوية في المثلث المتساوي الأضلاع:','60°','90°','45°'],
  ['مثلث متساوي الساقين قياس كل من زاويتي قاعدته 75°. قياس زاوية رأسه:','30°','75°','105°'],
  ['المثلث الذي أكبر زواياه منفرجة يسمى:','منفرج الزاوية','حاد الزوايا','قائم الزاوية'],
  ['مثلث زواياه 40° و50° و90° هو مثلث:','قائم الزاوية','منفرج الزاوية','متساوي الأضلاع']]},

 {sem:1, unit:'الوحدة الثانية', t:'جمع الأعداد الطبيعية وطرحها', gen:['addbig','subbig'], q:[
  ['125 − 25 = ؟','100','150','75'],
  ['1708 + 300 = ؟','2008','5068','1738'],
  ['515995 − 24872 = ؟','491123','491127','540867'],
  ['الخاصة التبديلية للجمع: 128 + 72 =','72 + 128','128 − 72','128 × 72'],
  ['في الجمع الشاقولي نرتّب الخانات المتقابلة بدءاً من خانة:','الآحاد','العشرات','الأكبر'],
  ['10041 + 104 = ؟','10145','11081','10045']]},
 {sem:1, unit:'الوحدة الثانية', t:'ضرب الأعداد الطبيعية', gen:['mul3d'], q:[
  ['يرسل جهاز في مركبة فضائية 125 إشارة كل دقيقة. كم إشارة في 30 دقيقة؟','3750','155','3650'],
  ['135 × 100 = ؟','13500','1350','135000'],
  ['20 × 231 = ؟','4620','462','4602'],
  ['الخاصة التجميعية للضرب: (4 × 25) × 3 =','4 × (25 × 3)','4 + 25 + 3','(4 + 25) × 3'],
  ['5 × 37 × 2 = ؟','370','185','74'],
  ['302 × 12 = ؟','3624','3604','3024']]},
 {sem:1, unit:'الوحدة الثانية', t:'قسمة الأعداد الطبيعية', gen:['divbig'], q:[
  ['وُزّع 2376 صندوق برتقال بالتساوي على 12 محلاً. حصة كل محل:','198','188','208'],
  ['6225 ÷ 5 = ؟','1245','1240','1255'],
  ['897 ÷ 3 = ؟','299','289','309'],
  ['في القسمة: المقسوم = (المقسوم عليه × ناتج القسمة) + ...','الباقي','الصفر','المقسوم عليه'],
  ['456 ÷ 8 = ؟','57','56','58'],
  ['1440 ÷ 12 = ؟','120','12','1200']]},
 {sem:1, unit:'الوحدة الثانية', t:'القوى', gen:[], q:[
  ['2 × 2 × 2 × 2 × 2 تُكتب بصيغة قوة:','2⁵','5²','2 × 5'],
  ['في القوة 2⁵ العدد 5 يسمى:','الأس','الأساس','الجداء'],
  ['3⁴ = ؟','81','12','64'],
  ['6³ = ؟','216','18','36'],
  ['10² = ؟','100','20','1000'],
  ['15² = ؟','225','30','150'],
  ['أيّ قوة تساوي 1000؟','10³','3¹⁰','100²']]},
 {sem:1, unit:'الوحدة الثانية', t:'ترتيب العمليات الحسابية', gen:['orderops'], q:[
  ['أول ما نجريه عند حساب عبارة فيها أقواس:','العمليات داخل الأقواس','الجمع','الطرح'],
  ['اشترى سامر كيس طحين بـ 200 ليرة وزجاجتي عصير سعر الواحدة 350 ليرة: 200 + 2 × 350 = ؟','900','70700','552'],
  ['8 × 2 × 5 = ؟','80','56','10'],
  ['24 ÷ (5 + 3) = ؟','3','7','8'],
  ['10 + 110 ÷ 2 = ؟','65','60','120'],
  ['بعد العمليات داخل الأقواس نحسب:','القوى','الجمع','الطرح'],
  ['2 + 3² = ؟','11','25','10']]},
 {sem:1, unit:'الوحدة الثانية', t:'متوازي الأضلاع', gen:['shapes'], q:[
  ['قطرا متوازي الأضلاع:','ينصّف كل منهما الآخر','متعامدان دائماً','متساويان دائماً'],
  ['في متوازي الأضلاع كل ضلعين متقابلين:','متوازيان ومتساويان','متعامدان','متقاطعان'],
  ['في متوازي الأضلاع كل زاويتين متقابلتين:','متساويتان','قائمتان دائماً','مجموعهما 90°'],
  ['متوازي أضلاع ABCD تقاطع قطراه في O، و OA = 4 سم. طول AC:','8 سم','4 سم','2 سم'],
  ['في متوازي الأضلاع مجموع قياسي زاويتين متتاليتين:','180°','90°','360°'],
  ['متوازي أضلاع فيه زاوية قياسها 70°. قياس الزاوية المقابلة لها:','70°','110°','20°']]},
 {sem:1, unit:'الوحدة الثانية', t:'رسم متوازي الأضلاع', gen:[], q:[
  ['لرسم متوازي أضلاع عُلم طولا ضلعيه والزاوية بينهما نستعمل:','المسطرة والمنقلة','الفرجار فقط','الكوس فقط'],
  ['متوازي أضلاع ABCD فيه AB = 3 سم و AD = 2 سم. طول DC:','3 سم','2 سم','5 سم'],
  ['متوازي أضلاع ABCD قياس زاويته DAB = 120°. قياس الزاوية ABC:','60°','120°','240°'],
  ['يمكن رسم متوازي أضلاع إذا عُلم طولا قطريه و:','الزاوية بينهما','لونه','عدد أضلاعه'],
  ['عند رسم متوازي أضلاع من قطريه تكون نقطة تقاطعهما:','منتصفاً لكل منهما','رأساً من رؤوسه','خارج الشكل'],
  ['متوازي أضلاع طولا ضلعين متجاورين فيه 3 سم و2 سم. محيطه:','10 سم','6 سم','5 سم']]},

 {sem:1, unit:'الوحدة الثالثة', t:'تحليل عدد إلى جداء عوامل', gen:[], q:[
  ['كم عدداً أولياً أصغر من 20؟','8','10','7'],
  ['تحليل 36 إلى جداء عوامل أولية:','2² × 3²','4 × 9','6²'],
  ['تحليل 60 إلى جداء عوامل أولية:','2² × 3 × 5','2 × 30','6 × 10'],
  ['أيّ عدد يقبل القسمة على 3؟','222','133','310'],
  ['أيّ عدد أولي؟','17','27','51'],
  ['تحليل 18 إلى جداء عوامل أولية:','2 × 3²','2² × 3','3 × 6']]},
 {sem:1, unit:'الوحدة الثالثة', t:'القاسم المشترك الأكبر', gen:[], q:[
  ['القاسم المشترك الأكبر للعددين 12 و18:','6','3','36'],
  ['القاسم المشترك الأكبر للعددين 24 و32:','8','4','96'],
  ['لإيجاد القاسم المشترك الأكبر نأخذ العوامل الأولية المشتركة فقط وبـ:','أصغر أس','أكبر أس','أي أس'],
  ['القاسم المشترك الأكبر للعددين 7 و10:','1','70','7'],
  ['24 علبة أوراق ملونة و32 قصة وُزعت في حقائب متماثلة. أكبر عدد ممكن من الحقائب:','8','4','56'],
  ['القاسم المشترك الأكبر للعددين 15 و25:','5','75','3']]},
 {sem:1, unit:'الوحدة الثالثة', t:'المضاعف المشترك الأصغر', gen:[], q:[
  ['المضاعف المشترك الأصغر للعددين 6 و8:','24','48','2'],
  ['يقطر صنبور كل 6 ثوانٍ وآخر كل 4 ثوانٍ، وقطرا معاً. بعد كم ثانية يقطران معاً مرة أخرى؟','12','24','10'],
  ['لإيجاد المضاعف المشترك الأصغر نأخذ العوامل المشتركة وغير المشتركة بـ:','أكبر أس','أصغر أس','الأس 1 فقط'],
  ['أصغر عدد من البطاقات يمكن توزيعه بالتساوي على 2 أو 3 أو 4 أو 5 أشخاص:','60','120','14'],
  ['المضاعف المشترك الأصغر للعددين 9 و12:','36','108','3'],
  ['المضاعف المشترك الأصغر للعددين 5 و7:','35','12','1']]},
 {sem:1, unit:'الوحدة الثالثة', t:'المتوسط الحسابي', gen:['avg'], q:[
  ['المتوسط الحسابي =','مجموع الأعداد ÷ عددها','أكبر عدد − أصغر عدد','مجموع الأعداد × عددها'],
  ['درجات الحرارة في أسبوع: 27، 28، 28، 30، 31، 31، 28. متوسطها:','29','28','30'],
  ['قرأ علاء في خمسة أيام: 15، 16، 17، 18، 19 صفحة. متوسط ما قرأه يومياً:','17','16','85'],
  ['المتوسط الحسابي للأعداد 4، 6، 8:','6','18','4'],
  ['المتوسط الحسابي للعددين 10 و20:','15','30','10'],
  ['متوسط علامات 3 اختبارات 80. مجموع العلامات:','240','80','83']]},
 {sem:1, unit:'الوحدة الثالثة', t:'حالات خاصة: مستطيل، معيّن، مربع', gen:['shapes'], q:[
  ['قطرا المستطيل:','متساويان في الطول','متعامدان دائماً','غير متقاطعين'],
  ['قطرا المعيّن:','متعامدان','متساويان دائماً','متوازيان'],
  ['قطرا المربع:','متساويان ومتعامدان','متوازيان','مختلفان في الطول'],
  ['متوازي أضلاع قطراه متساويان في الطول هو:','مستطيل','شبه منحرف','مثلث'],
  ['متوازي أضلاع قطراه متعامدان هو:','معيّن','شبه منحرف','مثلث'],
  ['المستطيلات والمعينات والمربعات جزء من عائلة:','متوازيات الأضلاع','المثلثات','الدوائر']]},
 {sem:1, unit:'الوحدة الثالثة', t:'التناظر المحوري', gen:[], q:[
  ['المستقيم الذي يقسم الشكل إلى جزأين ينطبقان بالطي يسمى:','محور التناظر','القطر','نصف المستقيم'],
  ['كم محور تناظر للمستطيل (غير المربع)؟','2','4','1'],
  ['كم محور تناظر للمعيّن (غير المربع)؟','2','4','0'],
  ['كم محور تناظر للمثلث المتساوي الأضلاع؟','3','1','6'],
  ['كم محور تناظر للمثلث المتساوي الساقين غير المتساوي الأضلاع؟','1','2','3'],
  ['نظير نقطة تقع على محور التناظر هو:','النقطة نفسها','نقطة أبعد منها','لا نظير لها'],
  ['من أمثلة التناظر في الطبيعة:','جناحا الفراشة','الحجر','الغيوم']]},
 {sem:1, unit:'الوحدة الثالثة', t:'شبه المنحرف', gen:[], q:[
  ['شبه المنحرف شكل رباعي فيه:','ضلعان فقط متوازيان','كل ضلعين متقابلين متوازيان','لا أضلاع متوازية'],
  ['الضلعان المتوازيان في شبه المنحرف يسمّيان:','القاعدتين','الساقين','القطرين'],
  ['طول القاعدة الوسطى في شبه المنحرف يساوي:','نصف مجموع طولي القاعدتين','مجموع طولي القاعدتين','ضعف القاعدة الكبرى'],
  ['شبه منحرف طولا قاعدتيه 10 سم و6 سم. طول قاعدته الوسطى:','8 سم','16 سم','4 سم'],
  ['في الرباعي ABCD، القطعتان [AB] و[BC] هما:','ضلعان متتاليان','ضلعان متقابلان','قطران'],
  ['في الرباعي ABCD، القطعتان [AC] و[BD] هما:','قطران','ضلعان متتاليان','ضلعان متقابلان']]}
]);

/* ===================== الصف السادس — الفصل الثاني (الوحدات ٤–٦ من الكتاب) ===================== */
REPL(6, 'math', 2, [
 {sem:2, unit:'الوحدة الرابعة', t:'جمع الكسور المركبة وطرحها', gen:['fracadd'], q:[
  ['2 و1/4 + 1 و2/4 = ؟','3 و3/4','3 و3/8','2 و3/4'],
  ['3 و1/2 + 2 و1/2 = ؟','6','5','5 و1/2'],
  ['الكسر 9/4 يُكتب كسراً مركباً:','2 و1/4','1 و5/4','4 و1/9'],
  ['5 و3/5 − 2 و1/5 = ؟','3 و2/5','3 و4/5','7 و4/5'],
  ['2 و2/3 بصيغة كسر عادي:','8/3','6/3','4/3'],
  ['4 − 1 و1/3 = ؟','2 و2/3','3 و1/3','3 و2/3']]},
 {sem:2, unit:'الوحدة الرابعة', t:'ضرب الكسور', gen:['frac'], q:[
  ['10 × 2/5 = ؟','4','20/50','2'],
  ['2/3 × 3/4 = ؟','6/12','5/7','8/9'],
  ['لضرب كسرين:','نضرب البسط بالبسط والمقام بالمقام','نوحّد المقامين ثم نجمع','نجمع البسطين'],
  ['3 × 1 و1/2 = ؟','4 و1/2','3 و1/2','6'],
  ['1/2 × 1/2 = ؟','1/4','1','2/4'],
  ['بستان فيه 30 شجرة، تعطي كل شجرة 1 و1/2 قنطار. كم قنطاراً يعطي البستان؟','45','31 و1/2','60']]},
 {sem:2, unit:'الوحدة الرابعة', t:'قسمة كسرين', gen:[], q:[
  ['لقسمة كسر على كسر:','نضرب الكسر الأول بمقلوب الكسر الثاني','نقسم البسطين فقط','نجمع الكسرين'],
  ['مقلوب الكسر 3/4:','4/3','3/4','1/4'],
  ['1/2 ÷ 1/4 = ؟','2','1/8','1/2'],
  ['3/5 ÷ 3/10 = ؟','2','9/50','1/2'],
  ['2/3 ÷ 2 = ؟','1/3','4/3','3'],
  ['4 ÷ 1/2 = ؟','8','2','1/8']]},
 {sem:2, unit:'الوحدة الرابعة', t:'العبارات الجبرية', gen:[], q:[
  ['العبارة التي تحوي أعداداً ورموزاً تسمى:','عبارة جبرية','كسراً','قوة'],
  ['يتقاضى بلّاط 1500 ليرة عن المتر المربع. أجرته عن y متراً مربعاً:','1500 × y','1500 + y','y − 1500'],
  ['ضعفا العدد x:','2 × x','x + 2','x ÷ 2'],
  ['نصف العدد n:','n ÷ 2','n × 2','n − 2'],
  ['قيمة العبارة 3 × a + 1 عندما a = 4:','13','16','8'],
  ['أجرة البلّاط عن 40 م² بسعر 1500 ليرة للمتر المربع:','60000','1540','6000']]},
 {sem:2, unit:'الوحدة الرابعة', t:'المعادلات', gen:[], q:[
  ['المعادلة مساواة تتضمّن:','متغيّراً (حرفاً) مثل x','أعداداً فقط','أشكالاً هندسية'],
  ['حل المعادلة x + 5 = 12:','7','17','5'],
  ['حل المعادلة 3 × c = 15:','5','12','45'],
  ['حل المعادلة y − 4 = 10:','14','6','40'],
  ['حل المعادلة x ÷ 2 = 9:','18','4.5','11'],
  ['كتلة برتقالة تعادل كتلة 3 إجاصات. كم إجاصة توازن برتقالتين؟','6','5','3'],
  ['هل c = 3 حل للمعادلة c + 2 = 5؟','نعم','لا','لا يمكن المعرفة']]},
 {sem:2, unit:'الوحدة الرابعة', t:'الانسحاب', gen:[], q:[
  ['الانسحاب تحريك للشكل في اتجاه معيّن:','دون تدوير أو قلب','مع تدويره','مع تكبيره'],
  ['صورة الشكل بالانسحاب:','تطابق الشكل الأصلي','أكبر منه','أصغر منه'],
  ['يستعمل الرسامون ... لرسم أشكال متطابقة مكررة بسهولة.','الانسحاب','القسمة','المعادلات'],
  ['انسحبت النقطة (2، 1) ثلاث وحدات أفقياً نحو اليمين. صورتها:','(5، 1)','(2، 4)','(6، 1)'],
  ['في الانسحاب تتحرك جميع نقاط الشكل:','المسافة نفسها وبالاتجاه نفسه','مسافات مختلفة','حول نقطة ثابتة'],
  ['حركة المصعد مثال على:','الانسحاب','الدوران','التناظر']]},
 {sem:2, unit:'الوحدة الرابعة', t:'الدوران', gen:[], q:[
  ['الدوران تحريك للشكل حول:','نقطة ثابتة','مستقيم','قطعة مستقيمة'],
  ['عجلة السيارة وعقارب الساعة أمثلة على:','الدوران','الانسحاب','التناظر'],
  ['يدور عقرب الدقائق دورة كاملة قياسها:','360°','180°','90°'],
  ['ربع دورة يساوي:','90°','45°','180°'],
  ['نصف دورة يساوي:','180°','90°','360°'],
  ['صورة الشكل بالدوران:','تطابق الشكل الأصلي','أكبر منه','تختلف عنه في الأطوال']]},

 {sem:2, unit:'الوحدة الخامسة', t:'جمع الأعداد العشرية وطرحها', gen:['decadd'], q:[
  ['14.7 + 23.8 = ؟','38.5','37.5','38.15'],
  ['27.216 + 1.992 = ؟','29.208','29.108','28.208'],
  ['77.32 − 25.11 = ؟','52.21','52.43','102.43'],
  ['99.31 − 2.67 = ؟','96.64','97.64','96.74'],
  ['عند جمع أعداد عشرية نكمل الخانات الناقصة على يمين الفاصلة بـ:','أصفار','آحاد','نتركها فارغة'],
  ['5 − 0.25 = ؟','4.75','4.25','5.25']]},
 {sem:2, unit:'الوحدة الخامسة', t:'ضرب الأعداد العشرية (1)', gen:['decmul'], q:[
  ['العدد 0.8 بصيغة كسر عادي:','8/10','8/100','80/10'],
  ['العدد 0.16 بصيغة كسر عادي:','16/100','16/10','16/1000'],
  ['0.3 × 0.2 = ؟','0.06','0.6','6'],
  ['1.5 × 4 = ؟','6','6.5','60'],
  ['2.5 × 1.2 = ؟','3','3.5','30'],
  ['ورقة مستطيلة بُعداها 30 سم و21.5 سم. مساحتها:','645 سم²','103 سم²','6450 سم²']]},
 {sem:2, unit:'الوحدة الخامسة', t:'ضرب الأعداد العشرية (2)', gen:['decmul'], q:[
  ['15.3 × 21 = ؟','321.3','32.13','3213'],
  ['2.14 × 12 = ؟','25.68','256.8','2.568'],
  ['0.15 × 100 = ؟','15','1.5','150'],
  ['كم خانة عشرية في ناتج 1.25 × 0.3؟','3','2','1'],
  ['0.02 × 0.4 = ؟','0.008','0.08','0.8'],
  ['3.578 × 1000 = ؟','3578','357.8','35780']]},
 {sem:2, unit:'الوحدة الخامسة', t:'قسمة الأعداد العشرية', gen:[], q:[
  ['45.75 ÷ 3 = ؟','15.25','15.5','152.5'],
  ['743.04 ÷ 43 = ؟','17.28','172.8','1.728'],
  ['12.5 ÷ 10 = ؟','1.25','125','0.125'],
  ['3.6 ÷ 0.4 = ؟','9','0.9','90'],
  ['48.6 ÷ 100 = ؟','0.486','4.86','4860'],
  ['7.5 ÷ 5 = ؟','1.5','15','0.15']]},
 {sem:2, unit:'الوحدة الخامسة', t:'وحدات قياس الطول', gen:['length'], q:[
  ['أجزاء المتر:','الديسيمتر والسنتيمتر والميليمتر','الكيلومتر والهكتومتر','الغرام والكيلوغرام'],
  ['1 ديكامتر = ... متر','10','100','1000'],
  ['1 هكتومتر = ... متر','100','10','1000'],
  ['1.5 كم = ... م','1500','150','15'],
  ['12 ديكامتراً = ... م','120','1200','12'],
  ['يبعد منزل لينا 1.5 كم، ومنزل أمل 300 م، ومنزل ليناز 12 ديكامتراً عن المدرسة. أيّها الأقرب؟','منزل ليناز','منزل أمل','منزل لينا'],
  ['4156 ÷ 1000 = ؟','4.156','41.56','4156000']]},
 {sem:2, unit:'الوحدة الخامسة', t:'حساب المحيط', gen:['perim'], q:[
  ['محيط الدائرة =','القطر × π','نصف القطر × π','القطر + π'],
  ['القيمة التقريبية المستعملة للعدد π:','3.14','2.14','4.13'],
  ['دائرة قطرها 10 سم. محيطها (π = 3.14):','31.4 سم','314 سم','15.7 سم'],
  ['دائرة نصف قطرها 5 سم. محيطها (π = 3.14):','31.4 سم','15.7 سم','78.5 سم'],
  ['مستطيل بُعداه 5 م و3 م. محيطه:','16 م','15 م','8 م'],
  ['مربع طول ضلعه 4 م. محيطه:','16 م','8 م','12 م']]},
 {sem:2, unit:'الوحدة الخامسة', t:'حساب المساحة', gen:['area','sqarea'], q:[
  ['مستطيل طوله 5 سم وعرضه 2.5 سم. مساحته:','12.5 سم²','7.5 سم²','15 سم²'],
  ['مربع طول ضلعه 1.5 م. مساحته:','2.25 م²','3 م²','6 م²'],
  ['مساحة المستطيل =','الطول × العرض','2 × (الطول + العرض)','الطول + العرض'],
  ['مثلث قاعدته 8 سم وارتفاعه 5 سم. مساحته:','20 سم²','40 سم²','13 سم²'],
  ['غرفة مستطيلة بُعداها 4 م و3 م. مساحتها:','12 م²','14 م²','7 م²'],
  ['مساحة سورية نحو 185180 كم²، منها 1130 كم² مسطحات مائية. مساحة اليابسة:','184050 كم²','186310 كم²','184150 كم²']]},
 {sem:2, unit:'الوحدة الخامسة', t:'التشابه', gen:[], q:[
  ['الشكلان المتشابهان لهما:','الشكل نفسه وقد تختلف القياسات','القياسات نفسها دائماً','أشكال مختلفة'],
  ['الشكلان الطبوقان (المتطابقان) لهما:','الشكل نفسه والقياسات نفسها','الشكل نفسه فقط','قياسات مختلفة'],
  ['أيّ شكلين مربعين يكونان دائماً:','متشابهين','متطابقين','غير متشابهين'],
  ['صورة مكبَّرة عن صورة أخرى تشكّلان شكلين:','متشابهين','متطابقين','مختلفين في الشكل'],
  ['مستطيل بُعداه 2 سم و3 سم ومستطيل بُعداه 4 سم و6 سم:','متشابهان','متطابقان','غير متشابهين'],
  ['مستطيل بُعداه 2 سم و3 سم ومستطيل بُعداه 3 سم و4 سم:','غير متشابهين','متشابهان','متطابقان']]},

 {sem:2, unit:'الوحدة السادسة', t:'النسبة والتناسب', gen:['ratio'], q:[
  ['تُستعمل النسبة للمقارنة بين مقدارين بـ:','قسمة أحدهما على الآخر','جمعهما','طرحهما'],
  ['بسّط النسبة 6 : 9','2 : 3','3 : 2','1 : 3'],
  ['النسبة 3 : 8 تكافئ:','6 : 16','6 : 8','3 : 16'],
  ['أوجد الحد المجهول: 2/5 = x/15','6','10','3'],
  ['في الصف 12 ولداً و18 بنتاً. نسبة الأولاد إلى البنات:','2 : 3','3 : 2','12 : 30'],
  ['أوجد الحد المجهول: 4/7 = 12/x','21','15','28'],
  ['لُوّن 3 أجزاء من دائرة مقسومة إلى 8 أجزاء متساوية. نسبة الملوّن إلى الكل:','3 : 8','3 : 5','5 : 8']]},
 {sem:2, unit:'الوحدة السادسة', t:'النسبة المئوية', gen:['percent'], q:[
  ['النسبة المئوية نسبة مقامها:','100','10','1000'],
  ['1/2 = ...%','50','20','12'],
  ['0.04 = ...%','4','40','0.4'],
  ['اكتب 3/4 بصيغة نسبة مئوية:','75%','34%','43%'],
  ['25% من 80 = ؟','20','25','40'],
  ['1.21 = ...%','121','12.1','1.21'],
  ['تخفيض 10% على سلعة ثمنها 5000 ليرة. قيمة التخفيض:','500 ليرة','50 ليرة','4500 ليرة']]},
 {sem:2, unit:'الوحدة السادسة', t:'وحدات قياس المساحة والحجم', gen:[], q:[
  ['1 م² = ... دسم²','100','10','1000'],
  ['1 دسم² = ... سم²','100','10','1000'],
  ['1 هكتار = ... م²','10000','1000','100'],
  ['1 دسم³ = ... سم³','1000','100','10'],
  ['1 م³ = ... دسم³','1000','100','10'],
  ['ورث مالك هكتارين من الأرض. مساحتها بالمتر المربع:','20000 م²','2000 م²','200 م²'],
  ['كم مربعاً طول ضلعه 1 سم يغطي مربعاً طول ضلعه 10 سم؟','100','10','40']]},
 {sem:2, unit:'الوحدة السادسة', t:'مساحة متوازي الأضلاع', gen:['area'], q:[
  ['مساحة متوازي الأضلاع =','القاعدة × الارتفاع','(القاعدة + الارتفاع) × 2','(القاعدة × الارتفاع) ÷ 2'],
  ['متوازي أضلاع طول قاعدته 6 سم وارتفاعه 5 سم. مساحته:','30 سم²','22 سم²','15 سم²'],
  ['البعد بين ضلعين متقابلين في متوازي الأضلاع يسمى:','الارتفاع','القطر','المحيط'],
  ['متوازي أضلاع طول قاعدته 12 م وارتفاعه 4 م. مساحته:','48 م²','32 م²','24 م²'],
  ['بالقص واللصق يمكن تحويل متوازي الأضلاع إلى:','مستطيل له المساحة نفسها','مثلث نصف مساحته','دائرة'],
  ['متوازي أضلاع مساحته 40 سم² وطول قاعدته 8 سم. ارتفاعه:','5 سم','32 سم','320 سم']]},
 {sem:2, unit:'الوحدة السادسة', t:'مساحة الدائرة', gen:[], q:[
  ['مساحة الدائرة =','π × نصف القطر × نصف القطر','π × القطر','2 × π × نصف القطر'],
  ['دائرة نصف قطرها 10 سم. مساحتها (π = 3.14):','314 سم²','62.8 سم²','31.4 سم²'],
  ['دائرة نصف قطرها 2 سم. مساحتها (π = 3.14):','12.56 سم²','6.28 سم²','25.12 سم²'],
  ['دائرة قطرها 6 سم. نصف قطرها:','3 سم','12 سم','6 سم'],
  ['دائرة نصف قطرها 1 م. مساحتها (π = 3.14):','3.14 م²','6.28 م²','1 م²'],
  ['دائرة قطرها 20 سم. مساحتها (π = 3.14):','314 سم²','1256 سم²','62.8 سم²']]},
 {sem:2, unit:'الوحدة السادسة', t:'المساحة والمحيط', gen:['area','perim'], q:[
  ['غرفة رولا مربعة طول ضلعها 4 م، وغرفة ريم مستطيلة بُعداها 5 م و3 م. أيهما أكبر مساحة؟','غرفة رولا','غرفة ريم','متساويتان'],
  ['في السؤال السابق، أيّ الغرفتين أكبر محيطاً؟','متساويتان','غرفة رولا','غرفة ريم'],
  ['شكلان لهما المساحة نفسها:','قد يختلف محيطاهما','محيطاهما متساويان دائماً','متطابقان دائماً'],
  ['مستطيل بُعداه 6 سم و2 سم. مساحته ومحيطه:','12 سم² و16 سم','16 سم² و12 سم','12 سم² و8 سم'],
  ['مستطيل بُعداه 9 سم و1 سم ومربع طول ضلعه 3 سم. مساحتاهما:','متساويتان','مساحة المستطيل أكبر','مساحة المربع أكبر'],
  ['في السؤال السابق، أيّهما أكبر محيطاً؟','المستطيل','المربع','متساويان']]},
 {sem:2, unit:'الوحدة السادسة', t:'الزمن', gen:['timecalc'], q:[
  ['الوحدة الأساسية لقياس الزمن:','الثانية','الساعة','اليوم'],
  ['1 ساعة = ... ثانية','3600','60','360'],
  ['اليوم يساوي:','24 ساعة','12 ساعة','30 ساعة'],
  ['ساعة وعشرون دقيقة وخمس وثلاثون ثانية تُكتب:','1:20:35','1:35:20','20:01:35'],
  ['ساعتان و30 دقيقة = ... دقيقة','150','230','120'],
  ['3 سا 40 د + 1 سا 35 د = ؟','5 سا 15 د','4 سا 15 د','5 سا 75 د'],
  ['7200 ثانية = ... ساعة','2','72','20']]},
 {sem:2, unit:'الوحدة السادسة', t:'الموشور القائم والأسطوانة', gen:['solids'], q:[
  ['يُستعمل الموشور لتحليل الضوء الأبيض إلى:','ألوان الطيف','حرارة','صوت'],
  ['الموشور القائم الذي قاعدته مثلث يسمى:','موشوراً ثلاثياً','هرماً','أسطوانة'],
  ['كم وجهاً للموشور الثلاثي القائم؟','5','6','3'],
  ['كم رأساً للموشور الثلاثي القائم؟','6','5','9'],
  ['كم حرفاً للموشور الثلاثي القائم؟','9','6','12'],
  ['قاعدتا الأسطوانة:','دائرتان','مربعان','مثلثان'],
  ['متوازي المستطيلات موشور قائم قاعدته:','مستطيل','مثلث','دائرة']]}
]);

})();
(function(){
/* العلوم الصف الأول والثاني — الفصل الأول، من كتب ٢٠٢٥–٢٠٢٦ */
function REPL(g, s, lessons) { CUR[g][s] = lessons.concat((CUR[g][s] || []).filter(l => l.sem !== 1)); }
REPL(1, 'sci', [
 {sem:1, unit:'الوحدة الأولى', t:'حي وغير حي', q:[
  ['كل شيء من حولنا إمّا حيّ وإمّا ...؟','غير حيّ','ملوّن','كبير'],
  ['أيّ هذه كائن حيّ؟ 🌳','الشجرة','الحجر','الكرسي','الكرة'],
  ['أيّ هذه شيء غير حيّ؟','الحجر','القطة','الوردة','العصفور'],
  ['الإنسان والنبات والحيوان كائنات ...؟','حيّة','غير حيّة','مصنوعة'],
  ['أيّ هذه كائن حيّ؟','السمكة','السيارة','الكتاب'],
  ['الكرة التي نلعب بها هي شيء ...؟','غير حيّ','حيّ','ينمو'],
  ['أيّ هذه شيء غير حيّ أستخدمه في منزلي؟','الملعقة','الطفل','نبتة الصبّار'],
  ['زار الأطفال الحديقة فرسموا الفراشة. الفراشة ...؟','كائن حيّ','شيء غير حيّ','لعبة'],
  ['أيّ مجموعة كلّها كائنات حيّة؟','قطة، شجرة، طفل','قطة، حجر، طفل','كرسي، شجرة، كرة']]},
 {sem:1, unit:'الوحدة الأولى', t:'تعيش معنا', q:[
  ['يمكن ترتيب الكائنات الحيّة في مجموعات هي: إنسان ونبات و...؟','حيوان','حجر','ماء'],
  ['الحصان من مجموعة ...؟ 🐴','الحيوان','النبات','الإنسان'],
  ['شجرة الزيتون من مجموعة ...؟','النبات','الحيوان','الإنسان'],
  ['الطبيب الذي يعالجنا من مجموعة ...؟','الإنسان','النبات','الحيوان'],
  ['الوردة من مجموعة ...؟ 🌹','النبات','الحيوان','الإنسان'],
  ['أيّ هذه حيوان؟','الأرنب','النخلة','العشب'],
  ['أيّ هذه نبات؟','القمح','الخروف','الدجاجة'],
  ['هل توجد أنواع مختلفة من النباتات؟','نعم، كثيرة','لا، نوع واحد فقط','لا يوجد نباتات'],
  ['الكائنات الحيّة ...؟','تتشابه في أشياء وتختلف في أشياء','كلّها متشابهة تمامًا','لا تتشابه أبدًا']]},
 {sem:1, unit:'الوحدة الأولى', t:'كانت حيّة', q:[
  ['من أين نحصل على الخشب؟','من الأشجار','من الصخور','من الماء'],
  ['الشجرة الخضراء في الحديقة ...؟','حيّة','غير حيّة','لم تكن حيّة أبدًا'],
  ['عندما تُقطع الشجرة يتوقف فيها ...؟','النموّ','اللون','الشكل'],
  ['الكرسي الخشبي شيء غير حيّ، لكنه ...؟','كان حيًّا سابقًا','لم يكن حيًّا أبدًا','ينمو الآن'],
  ['أيّ شيء لم يكن حيًّا أبدًا؟','الحجر','الطاولة الخشبية','الورقة'],
  ['أيّ شيء يُصنع من الشجرة؟','الباب الخشبي','الكأس الزجاجية','الملعقة الحديدية'],
  ['الأشياء غير الحيّة منها ما كان حيًّا سابقًا، ومنها ما ...؟','لم يكن حيًّا أبدًا','يأكل ويشرب','ينمو ويكبر'],
  ['الغصن اليابس المقطوع من الشجرة هو ...؟','شيء كان حيًّا سابقًا','كائن حيّ ينمو','شيء لم يكن حيًّا أبدًا'],
  ['أيّ هذه لم يكن حيًّا أبدًا؟','الرمل','قلم الخشب','الكرسي الخشبي']]},
 {sem:1, unit:'الوحدة الأولى', t:'أكتشف عالمي', q:[
  ['تختلف الموادّ من حولنا في الحجم واللون والشكل و...؟','الملمس','الاسم فقط','العمر'],
  ['جميع الأشياء تتكوّن من ...؟','موادّ','هواء فقط','ماء فقط'],
  ['كل الأشياء تشغل مكانًا من ...؟','الفراغ','الوقت','الصوت'],
  ['وضعنا تفاحة وبالونًا في كفّتي ميزان، فنزلت كفّة التفاحة. أيّهما كتلته أكبر؟','التفاحة','البالون','متساويان'],
  ['الأشياء الثقيلة لها كتلة ...؟','أكبر','أصغر','لا كتلة لها'],
  ['المادّة هي كل ما له كتلة ويشغل ...؟','حيّزًا (مكانًا)','لونًا','صوتًا'],
  ['أيّهما كتلته أكبر؟','البطيخة','حبة العنب','الريشة'],
  ['الكرة الكبيرة تحتاج إلى حيّز ...؟','أكبر','أصغر','لا تحتاج حيّزًا'],
  ['أيّ هذه ليس مادّة؟','الصوت','الحجر','الماء','الخشب']]},
 {sem:1, unit:'الوحدة الأولى', t:'ثلج وماء وهواء', q:[
  ['للماء في الطبيعة ثلاث حالات: صلبة وسائلة و...؟','غازية','ملوّنة','ثقيلة'],
  ['الثلج على قمم الجبال حالته ...؟ ❄️','صلبة','سائلة','غازية'],
  ['ماء النهر حالته ...؟','سائلة','صلبة','غازية'],
  ['المادّة الصلبة لها شكل محدّد وحجم ...؟','ثابت','متغيّر','لا حجم لها'],
  ['المادّة السائلة يتغيّر شكلها حسب ...؟','الإناء الذي توضع فيه','لونها','الوقت'],
  ['حجم المادّة السائلة ...؟','ثابت','يتغيّر دائمًا','يختفي'],
  ['الهواء في البالون مادّة ...؟ 🎈','غازية','صلبة','سائلة'],
  ['المادّة الغازية يتغيّر شكلها و...؟','حجمها','لونها فقط','لا يتغيّر شيء'],
  ['نقلنا مكعّبًا من وعاء إلى وعاء آخر. شكله وحجمه ...؟','لم يتغيّرا','تغيّرا','اختفيا'],
  ['أيّ هذه مادّة صلبة؟','الحجر','العصير','الهواء']]},
 {sem:1, unit:'الوحدة الأولى', t:'عالمي يتغيّر', q:[
  ['تركنا المثلّجات خارج الثلاجة فتحوّلت إلى سائل. هذا يسمّى ...؟','الانصهار','التجمّد','التكاثف'],
  ['الانصهار يحدث عندما تكتسب المادّة ...؟','الحرارة','البرودة','اللون'],
  ['وضعنا الماء في قالب داخل الثلاجة فأصبح ثلجًا. هذا يسمّى ...؟','التجمّد','التبخّر','الانصهار'],
  ['التجمّد هو تحوّل المادّة من سائلة إلى صلبة ب...؟','التبريد','التسخين','التحريك'],
  ['سخّنّا الماء في الإبريق فصعد منه البخار. هذا يسمّى ...؟','التبخّر','التجمّد','التكاثف'],
  ['التبخّر هو تحوّل المادّة من سائلة إلى ...؟','غازية','صلبة','سائلة'],
  ['قرّبنا غطاءً من بخار الماء فتكوّنت عليه قطرات ماء. هذا يسمّى ...؟','التكاثف','الانصهار','التجمّد'],
  ['التكاثف يحدث ب...؟','فقدان الحرارة','اكتساب الحرارة','الضوء'],
  ['أمسكت مكعّب ثلج في يدي فظهرت قطرات ماء. لماذا؟','انصهر بحرارة يدي','تجمّد','تبخّر'],
  ['قطرات الماء على زجاج النافذة شتاءً سببها ...؟','التكاثف','الانصهار','التجمّد']]},
 {sem:1, unit:'الوحدة الأولى', t:'حيث نعيش', q:[
  ['البيئة هي كل ما ...؟','يحيط بنا','في البيت فقط','في البحر فقط'],
  ['تُقسم البيئة إلى بيئة يابسة وبيئة ...؟','مائية','ملوّنة','صغيرة'],
  ['السمكة تعيش في البيئة ...؟ 🐟','المائية','الصحراوية','الجبلية'],
  ['الجمل يعيش في بيئة ...؟ 🐪','يابسة حارّة (الصحراء)','مائية','باردة جدًا'],
  ['الدبّ القطبي يعيش في بيئة ...؟','باردة','حارّة','مائية دافئة'],
  ['ماذا يغطّي جسم الحيوانات في البيئات الباردة؟','فرو كثيف يدفئها','لا شيء','أوراق'],
  ['أين نجد أشجارًا كثيفة وعالية؟','في الغابة','في الصحراء','في البحر'],
  ['تحوي البيئة ما يحتاجه الكائن الحيّ مثل: الغذاء والماء و...؟','الهواء','الألعاب','النقود'],
  ['أيّ نبات يعيش في الصحراء؟','الصبّار','زنبق الماء','الطحالب البحرية']]},
 {sem:1, unit:'الوحدة الأولى', t:'نكتشف معًا', q:[
  ['البيئة القريبة من بيتي ومدرستي تسمّى البيئة ...؟','المحلّية','البعيدة','الفضائية'],
  ['أين تعيش بعض الحيوانات الصغيرة في الحديقة؟','تحت الأوراق والأحجار','في السماء فقط','داخل البيت'],
  ['يمكن أن تحتوي البيئة المحلّية على نباتات وحيوانات ...؟','متعدّدة','قليلة جدًا دائمًا','لا شيء'],
  ['أيّ حيوان قد يجده الطفل تحت حجر في الحديقة؟','النملة','الزرافة','الحوت'],
  ['أيّ حيوان يعيش على الأشجار في الغابة؟','السنجاب','السمكة','الجمل'],
  ['تحت جذوع الأشجار قد تعيش ...؟','الديدان والحشرات','الأسماك','الأسود'],
  ['ماذا يستعمل الطفل ليرى الحشرات الصغيرة بوضوح؟ 🔍','العدسة المكبّرة','المسطرة','المقص'],
  ['عندما نستكشف الحديقة يجب أن ...؟','نحافظ على النباتات والحيوانات','نقطف كل الأزهار','نؤذي الحشرات']]},
 {sem:1, unit:'الوحدة الثانية', t:'صغار الحيوانات', q:[
  ['صغير الحصان يُسمّى المُهر، وهو ...؟','يشبه والديه','لا يشبه والديه أبدًا','نبات'],
  ['صغير الضفدع ...؟ 🐸','يختلف عن والديه','يشبه والديه تمامًا','ليس له صغار'],
  ['تتغيّر صغار الحيوانات وتنمو حتى تصبح ...؟','كبارًا','أصغر','نباتات'],
  ['التغيّرات والنموّ التي تمرّ بها الحيوانات تسمّى ...؟','دورة حياة الحيوان','بيئة الحيوان','غذاء الحيوان'],
  ['صغير الخروف يسمّى ...؟','الحَمَل','الجرو','الشبل'],
  ['بعض صغار الحيوانات تحتاج إلى من يساعدها في ...؟','إيجاد الطعام والبقاء بأمان','الطيران إلى القمر','بناء البيوت'],
  ['جميع الحيوانات ...؟','لها صغار','ليس لها صغار','صغارها لا تكبر'],
  ['صغير الطائر يخرج من ...؟ 🐣','البيضة','التربة','الماء'],
  ['أيّ عبارة صحيحة؟','تختلف أشكال صغار الضفادع عن والديها','تتشابه صغار الحيوانات جميعها مع والديها','تستطيع جميع الصغار العناية بنفسها']]},
 {sem:1, unit:'الوحدة الثانية', t:'عطاء الله', q:[
  ['الحيوانات الأليفة ...؟','مفيدة للإنسان','لا فائدة منها','تعيش في الغابة فقط'],
  ['الدجاجة تعطينا ...؟ 🐔','البيض','الصوف','العسل'],
  ['النحلة تعطينا ...؟ 🐝','العسل','الحليب','البيض'],
  ['من صوف الخروف يصنع الناس ...؟','الثياب','الخبز','الأحذية البلاستيكية'],
  ['البقرة تعطينا ...؟','الحليب','الصوف','الريش'],
  ['أيّ هذه حيوان أليف؟','الخروف','الذئب','الأسد'],
  ['أيّ حيوان أليف لا يعطينا غذاءً؟','القطة','البقرة','الدجاجة'],
  ['كيف نعتني بالحيوانات الأليفة؟','نطعمها ونسقيها وننظّف مكانها','نضربها','نتركها بلا طعام'],
  ['أيّ هذه من الحيوانات الأليفة؟','الأرنب','النمر','التمساح']]},
 {sem:1, unit:'الوحدة الثانية', t:'ألعب وأتحرّك', q:[
  ['الموقع هو ...؟','مكان وجود الجسم','لون الجسم','وزن الجسم'],
  ['عندما تتحرّك الأشياء فإن مواقعها ...؟','تتغيّر','تبقى كما هي','تختفي'],
  ['كيف أعرف أن شيئًا قد تحرّك؟','تغيّر مكانه','تغيّر لونه','تغيّر اسمه'],
  ['تتحرّك الأشياء في خطّ مستقيم أو بشكل دائري أو بشكل ...؟','متعرّج','مربّع ثابت','لا تتحرك'],
  ['دولاب الهواء في مدينة الألعاب يتحرّك بشكل ...؟','دائري','مستقيم','متعرّج'],
  ['وصلت السيارة إلى المدينة قبل عربة الحصان. أيّهما أسرع؟ 🚗','السيارة','العربة','متساويتان'],
  ['تتحرّك السلحفاة بسرعة ... من سرعة الحصان.','أقل','أكثر','تساوي'],
  ['يتحرّك الصاروخ بسرعة ... من سرعة الطائرة.','أكثر','أقل','تساوي'],
  ['الأجسام تتحرّك بسرعات ...؟','مختلفة','متساوية دائمًا','لا تتحرّك'],
  ['الأفعى تتحرّك بشكل ...؟ 🐍','متعرّج','دائري','لا تتحرّك']]},
 {sem:1, unit:'الوحدة الثانية', t:'أدفع... أسحب', q:[
  ['حين ندفع الأشياء فإننا ...؟','نبعدها عنّا','نقرّبها منّا','نوقفها'],
  ['حين نسحب الأشياء فإننا ...؟','نقرّبها منّا','نبعدها عنّا','نكسرها'],
  ['ما الذي يحرّك الأجسام؟','القوّة','اللون','الصوت'],
  ['ربطتُ سيارتي بخيط وشددتُه نحوي. استخدمت قوّة ...؟','السحب','الدفع','لا شيء'],
  ['ركلتُ الكرة بقدمي. استخدمت قوّة ...؟ ⚽','الدفع','السحب','لا شيء'],
  ['فتحتُ الدرج بشدّه نحوي. هذا ...؟','سحب','دفع','قفز'],
  ['القوّة تحرّك الأجسام وتغيّر ...؟','جهة حركتها','لونها','اسمها'],
  ['من القواعد الآمنة: أتجنّب ...؟','سحب سلك الكهرباء','غسل يديّ','ترتيب ألعابي'],
  ['عند الصعود إلى الحافلة ...؟','لا أدفع صديقي','أدفع صديقي بقوة','أسحب حقيبة صديقي'],
  ['هل يمكننا رؤية القوّة نفسها؟','لا، نرى أثرها فقط','نعم، لونها أحمر','نعم، شكلها مربّع']]},
 {sem:1, unit:'الوحدة الثالثة', t:'أنمو وأكبر', q:[
  ['أقسام جسم الإنسان هي: رأس وجذع و...؟','أطراف','أجنحة','ذيل'],
  ['اليدان من الأطراف ...؟','العلوية','السفلية','الخلفية'],
  ['الرجلان من الأطراف ...؟','السفلية','العلوية','الأمامية'],
  ['الجزء الأوسط من الجسم بين الرأس والأطراف هو ...؟','الجذع','القدم','الكفّ'],
  ['قد يختلف شكل الناس، لكن أقسام الجسم عندهم ...؟','نفسها','مختلفة تمامًا','غير موجودة'],
  ['القبّعة تغطّي ...؟ 🧢','الرأس','القدم','اليد'],
  ['الحذاء يغطّي ...؟','القدمين','الرأس','الجذع'],
  ['كلّما كبرنا في العمر فإننا ...؟','ننمو ونتغيّر','نصغر','لا نتغيّر'],
  ['ماذا أستطيع أن أفعل الآن ولم أكن أستطيعه وأنا رضيع؟','المشي والكلام','البكاء','النوم']]},
 {sem:1, unit:'الوحدة الثالثة', t:'حياتي... صحتي', q:[
  ['من القواعد الصحية: الاستيقاظ ...؟ ☀️','باكرًا','متأخّرًا جدًا','في الليل'],
  ['بعد الاستيقاظ أغسل ...؟','وجهي ويديّ','حذائي','حقيبتي'],
  ['قبل الذهاب إلى المدرسة أتناول ...؟','طعام الفطور','الحلوى فقط','لا شيء'],
  ['ممارسة الرياضة ...؟','تقوّي جسمي','تضرّ صحتي','غير مفيدة'],
  ['لتبقى أسناني نظيفة ...؟ 🪥','أنظّفها بالفرشاة والمعجون','آكل الحلوى كثيرًا','لا أنظّفها'],
  ['إلى أين أذهب للتأكّد من صحة جسمي؟','إلى الطبيب','إلى السوق','إلى الملعب'],
  ['اللقاح ...؟ 💉','يحميني من الأمراض','يسبّب الأمراض','لا فائدة منه'],
  ['كيف أجلس في الصف؟','بظهر مستقيم','منحنيًا جدًا','نائمًا على المقعد'],
  ['أين ألعب بأمان؟','في الحديقة','في الشارع بين السيارات','قرب أسلاك الكهرباء']]},
 {sem:1, unit:'الوحدة الثالثة', t:'تنير حياتي', q:[
  ['فركتُ البالون بالكفّ الصوفي ثم قرّبته من شعري، فماذا يحدث؟ 🎈','ينجذب الشعر نحو البالون','يبتعد الشعر','لا يحدث شيء'],
  ['الكهرباء الناتجة عن الفرك تسمّى الكهرباء ...؟','الساكنة','المتحرّكة','المائية'],
  ['أشعر بلسعة خفيفة عندما ألمس مقبض الباب بعد المشي على السجادة. السبب ...؟','الكهرباء الساكنة','الماء','المغناطيس'],
  ['الكهرباء التي تشغّل الأجهزة في البيت هي الكهرباء ...؟','المتحرّكة','الساكنة','الخفيفة'],
  ['من أين تأتي الكهرباء المتحرّكة؟','من محطّات (مصانع) توليد الكهرباء','من الشجر','من البالون'],
  ['أيّ جهاز يعمل بالكهرباء؟','البرّاد (الثلّاجة)','الكرسي','الكتاب'],
  ['أسمع طقطقة خفيفة عند خلع كنزتي الصوفية. هذا بسبب ...؟','الكهرباء الساكنة','المطر','المغناطيس'],
  ['للكهرباء فوائد ...؟','عديدة','قليلة جدًا','لا فوائد لها'],
  ['ماذا نفعل مع أسلاك الكهرباء؟','لا نلمسها ولا نلعب قربها','نسحبها','نلعب بها']]},
 {sem:1, unit:'الوحدة الثالثة', t:'القوّة الخفية', q:[
  ['من صاحب القوّة الخفية الذي يجذب الأجسام الحديدية؟','المغناطيس','الخشب','البلاستيك'],
  ['المغناطيس يجذب الأجسام ...؟','الحديدية','الخشبية','المطاطية'],
  ['أيّ هذه يجذبه المغناطيس؟ 🧲','الدبّوس','الممحاة','المسطرة الخشبية'],
  ['أيّ هذه لا يجذبه المغناطيس؟','المشط البلاستيكي','المسمار الحديدي','الدبّوس'],
  ['وضعنا ورقة فوق الدبابيس وقرّبنا المغناطيس. ماذا يحدث؟','يجذب الدبابيس عبر الورقة','لا يجذبها','تحترق الورقة'],
  ['المغناطيس يجذب الحديد عبر موادّ مختلفة مثل ...؟','الورق','الحديد السميك فقط','لا شيء'],
  ['هل يجذب المغناطيس الكرة المطاطية؟','لا','نعم','أحيانًا فقط'],
  ['وضعنا مسمارًا حديديًا في كأس ماء وقرّبنا المغناطيس من الكأس. ماذا يحدث؟','ينجذب المسمار نحو المغناطيس','لا يتحرّك أبدًا','يذوب المسمار'],
  ['أين قد نجد المغناطيس؟','عند الخيّاط وفي المنزل','في الماء فقط','داخل الشجرة']]},
 {sem:1, unit:'الوحدة الثالثة', t:'تجاذب... تنافر', q:[
  ['للمغناطيس قطبان يقعان في ...؟','طرفيه','وسطه','داخله'],
  ['القطب الشمالي للمغناطيس يُرمز له بالحرف ...؟','N','S','M'],
  ['القطب الجنوبي يرمز له بالحرف ...؟','S','N','A'],
  ['القطب الشمالي يلوّن غالبًا باللون ...؟','الأحمر','الأزرق','الأخضر'],
  ['القطب الجنوبي يلوّن غالبًا باللون ...؟','الأزرق','الأحمر','الأصفر'],
  ['الأقطاب المتماثلة (N مع N) ...؟','تتنافر','تتجاذب','لا يحدث شيء'],
  ['الأقطاب المختلفة (N مع S) ...؟','تتجاذب','تتنافر','تنكسر'],
  ['أين تتجمّع الدبابيس على المغناطيس؟','عند القطبين في الطرفين','في الوسط','لا تتجمّع'],
  ['للمغناطيس أشكال ...؟','عديدة','شكل واحد فقط','لا شكل له'],
  ['تُستخدم الإبرة المغناطيسية في صناعة ...؟ 🧭','البوصلة','الساعة','المصباح']]}
]);
REPL(2, 'sci', [
 {sem:1, unit:'الوحدة الأولى', t:'جسمي السليم', q:[
  ['تناول طعام الفطور صباحًا يزيد ...؟','قوّتي ونشاطي','تعبي','نومي في الصف'],
  ['تناول الفواكه يمدّ جسمي ب...؟ 🍎','الطاقة التي يحتاجها','المرض','التعب'],
  ['قبل أكل الخضار والفواكه يجب أن ...؟','أغسلها','أرميها','أتركها في الشمس'],
  ['أنظّف أسناني بالفرشاة والمعجون ... يوميًا.','ثلاث مرات','مرة كل أسبوع','لا حاجة'],
  ['أغسل يديّ بالماء و...؟','الصابون','الرمل','العصير'],
  ['متى أغسل يديّ؟','قبل الطعام وبعده وبعد الخروج من المرحاض','مرة في الأسبوع','قبل النوم فقط'],
  ['بعد غسل يديّ أجفّفهما ب...؟','منشفة أو منديل نظيف','ثيابي','الهواء الملوّث'],
  ['الإفراط في تناول الحلويات ...؟ 🍬','يضرّ بالجسم والأسنان','مفيد جدًا','يقوّي العظام'],
  ['عند غسل اليدين يجب أن ...؟','لا أهدر الماء','أترك الصنبور مفتوحًا','أستعمل الماء فقط بلا صابون'],
  ['الحليب يقوّي ...؟ 🥛','العظام','الشعر فقط','الأظافر فقط']]},
 {sem:1, unit:'الوحدة الأولى', t:'مصدر غذائي', q:[
  ['الخضار والفواكه مصدرها ...؟','نباتي','حيواني','صناعي'],
  ['اللحوم والبيض مصدرها ...؟','حيواني','نباتي','الصخور'],
  ['نحصل على الحليب من ...؟ 🐄','البقرة','الشجرة','النحلة'],
  ['البيض مصدره ...؟','الدجاجة','القمح','البندورة'],
  ['العسل غذاء حلو نحصل عليه من ...؟ 🍯','النحلة','الشجرة','البقرة'],
  ['البرتقال غذاء مصدره ...؟','نباتي','حيواني','بحري'],
  ['السمك غذاء مصدره ...؟','حيواني','نباتي','لا مصدر له'],
  ['هل نعتمد على مصدر واحد للغذاء؟','لا، نُنوّع بين النباتي والحيواني','نعم، النباتي فقط','نعم، الحيواني فقط'],
  ['أيّ غذاء مصدره نباتي؟','الخيار','الجبن','اللحم']]},
 {sem:1, unit:'الوحدة الأولى', t:'أتذوّق طعامي', q:[
  ['عضو حاسّة التذوّق هو ...؟ 👅','اللسان','الأنف','الأذن'],
  ['على سطح اللسان بروزات تساعد على تمييز الطعوم تسمّى ...؟','الحليمات الذوقية','الأسنان','المسامات'],
  ['الحليمات الذوقية موجودة على السطح ... للسان.','العلوي','السفلي','الداخلي للأسنان'],
  ['طعم الحلوى ...؟','حلو','مالح','مرّ'],
  ['طعم الليمون ...؟ 🍋','حامض','حلو','مالح'],
  ['طعم المخلّلات التي فيها ملح ...؟','مالح','حلو','حامض فقط'],
  ['يميّز اللسان الطعم الحلو والمالح والحامض و...؟','المرّ','الأزرق','الناعم'],
  ['من وظائف اللسان: النطق وتحريك اللقمة و...؟','البلع','السمع','الشمّ'],
  ['حاولتُ القراءة ولساني ثابت فلم أستطع. لأن اللسان يساعد في ...؟','النطق','الرؤية','الشمّ'],
  ['مضغ الطعام جيدًا يساعدني على ...؟','الاستمتاع بالطعام والشعور بالشبع','النوم','الركض']]},
 {sem:1, unit:'الوحدة الأولى', t:'غذائي المتنوّع', q:[
  ['يحتاج الجسم إلى أصناف ... من الأغذية.','عديدة','قليلة','صنف واحد'],
  ['من أصناف الغذاء: الحبوب، الخضار والفواكه، و...؟','اللحوم','البلاستيك','الورق'],
  ['أيّ هذه من الحبوب؟ 🌾','القمح','التفاح','الدجاج'],
  ['العدس والحمّص من ...؟','البقوليات','الحلويات','اللحوم'],
  ['الحلويات نأكلها بكميّة ...؟','قليلة','كبيرة جدًا','في كل وجبة'],
  ['الأرز من صنف ...؟','الحبوب','الفواكه','اللحوم'],
  ['يساعد الغذاء المتنوّع الجسم على ...؟','النموّ والقيام بجميع النشاطات','التعب','المرض'],
  ['أيّ هذه من الخضار؟ 🥕','الجزر','السمك','الخبز'],
  ['الزيت من أصناف الغذاء، ونستعمله ب...؟','كميات قليلة','كميات كبيرة جدًا','لا نستعمله أبدًا']]},
 {sem:1, unit:'الوحدة الأولى', t:'الغذاء النظيف', q:[
  ['يتلوّث الغذاء عندما يتعرّض ل...؟','الحشرات والمياه الملوّثة','الغسل','الحفظ في البرّاد'],
  ['المبيدات الحشرية موادّ ...؟','سامّة','مفيدة للأكل','حلوة الطعم'],
  ['تلوّث الغذاء هو احتواء الأطعمة على ...؟','جراثيم أو موادّ سامّة','فيتامينات','ماء نظيف'],
  ['الذباب على الطعام المكشوف ...؟ 🪰','يلوّثه','ينظّفه','يحفظه'],
  ['كيف أحافظ على طعامي نظيفًا؟','أغطّيه','أتركه مكشوفًا','أضعه على الأرض'],
  ['أكل الطعام الملوّث قد يسبّب ...؟','المرض','القوّة','النموّ السريع'],
  ['قبل أكل الفواكه التي رُشّت بالمبيدات يجب أن ...؟','أغسلها جيدًا','آكلها مباشرة','أضعها في الشمس'],
  ['من قواعد السلامة الغذائية ...؟','غسل اليدين قبل الطعام','شراء الطعام المكشوف','أكل الطعام الفاسد'],
  ['الماء الملوّث ...؟','يلوّث الغذاء','ينظّف الغذاء','مفيد للشرب']]},
 {sem:1, unit:'الوحدة الأولى', t:'حواسي تميّزها', q:[
  ['لنا ... حواسّ.','خمس','ثلاث','عشر'],
  ['تساعدني الحواسّ على تمييز صفات الموادّ مثل الشكل والملمس و...؟','الرائحة واللون','الاسم','العمر'],
  ['أميّز رائحة الوردة الطبيعية بحاسّة ...؟ 🌹','الشمّ','الرؤية','السمع'],
  ['أميّز ملمس الأشياء بحاسّة ...؟','اللمس','التذوّق','الشمّ'],
  ['أميّز بين الملح والسكّر بحاسّة ...؟','التذوّق','السمع','الرؤية'],
  ['أميّز بين خرير الماء وتغريد العصفور بحاسّة ...؟','السمع','اللمس','الشمّ'],
  ['أميّز شكل الأشياء ولونها بحاسّة ...؟ 👀','الرؤية','الشمّ','التذوّق'],
  ['ملمس الملابس القطنية ...؟','ناعم','خشن جدًا','حادّ'],
  ['للنوم بشكل مريح أستخدم وسادة ...؟','ليّنة','قاسية','خشنة'],
  ['يختلف الموز عن الليمون في ...؟','الشكل والطعم','لا يختلفان أبدًا','الوزن فقط']]},
 {sem:1, unit:'الوحدة الأولى', t:'صوتي يتغيّر', q:[
  ['ما الذي يُصدر الصوت عند قرع الطبل؟ 🥁','سطح الطبل المهتزّ','العصا الساكنة','الهواء البارد'],
  ['السطح المهتزّ هو منبع ...؟','الصوت','الضوء','الحرارة'],
  ['قرعنا طبلًا صغيرًا وطبلًا كبيرًا بالقوّة نفسها. أيّهما صوته أقوى؟','الكبير','الصغير','متساويان'],
  ['تزداد شدّة الصوت بزيادة مساحة سطح ...؟','المنبع الصوتي','الأذن','الغرفة'],
  ['عندما أقترب من الطبل أسمع صوته ...؟','أقوى','أضعف','لا أسمعه'],
  ['عندما أبتعد عن المنبع الصوتي فإن شدّة الصوت ...؟','تنقص','تزداد','لا تتغيّر'],
  ['الخاصّية التي تميّز بها الأذن الصوت الخشن من الصوت الرفيع هي ...؟','ارتفاع الصوت','شدّة الصوت','لون الصوت'],
  ['صوت البقرة بالنسبة لصوت العصفور ...؟ 🐄','خشن (غليظ)','رفيع (حادّ)','متساويان'],
  ['صوت أختي الصغيرة بالنسبة لصوت أخي الكبير ...؟','أرفع','أخشن','أقوى دائمًا'],
  ['مكبّر الصوت يجعل صوتي ...؟ 📢','أقوى','أضعف','أرفع']]},
 {sem:1, unit:'الوحدة الثانية', t:'جذرٌ.. ساق.. وأوراق', q:[
  ['يتألّف الجهاز الإعاشي للنبات من جذر وساق و...؟','أوراق','أزهار فقط','ثمار فقط'],
  ['أيّ قسم من النبات يوجد تحت التربة؟','الجذر','الأوراق','الساق'],
  ['الجذر يمتصّ ... من التربة.','الماء','الضوء','الهواء'],
  ['الجذر يثبّت النبات في ...؟','التربة','الماء','الهواء'],
  ['ينقل الساق الماء من الجذر إلى ...؟','أقسام النبات الأخرى','التربة','الهواء'],
  ['وضعنا ساق زهرة بيضاء في ماء ملوّن فتلوّنت. ما الذي نقل الماء؟ 🌼','الساق','الجذر','التربة'],
  ['أيّ قسم يصل بين الجذر والأوراق؟','الساق','الثمرة','البذرة'],
  ['الجذر والساق والأوراق تسمّى الجهاز ...؟','الإعاشي','الهضمي','التنفسي'],
  ['لو لم يكن للنبات جذر ...؟','لن يثبت في التربة','سيكبر أسرع','لن يحتاج للماء']]},
 {sem:1, unit:'الوحدة الثانية', t:'غطائي الجميل', q:[
  ['لون أوراق النبات غالبًا ...؟ 🍃','أخضر','أزرق','أسود'],
  ['تحتاج الورقة إلى الماء و... لتصنع الغذاء.','الضوء','الظلام','الملح'],
  ['من أهمّ وظائف الورقة ...؟','صنع الغذاء للنبات','امتصاص الماء من التربة','تثبيت النبات'],
  ['تعطي أوراق النبات غاز ...؟','الأكسجين','الدخان','البخار الملوّث'],
  ['الفتحات الصغيرة على سطح الورقة تسمّى ...؟','المسامات','الجذور','الحليمات'],
  ['تطرح الورقة من المسامات الماء الزائد و...؟','الأكسجين','التربة','الضوء'],
  ['غطّينا نبتة بكيس شفّاف وتركناها في الشمس. ماذا ظهر على الكيس؟','قطرات ماء','تراب','رمل'],
  ['الأكسجين غاز مهمّ ل...؟','تنفّس الكائنات الحيّة','الطبخ فقط','لا فائدة منه'],
  ['أين يكثر الأكسجين؟ 🌲','في الغابات','في الصحراء الجافة','تحت الأرض']]},
 {sem:1, unit:'الوحدة الثانية', t:'زينة الطبيعة', q:[
  ['هل لأوراق النباتات شكل واحد؟','لا، لها أشكال مختلفة','نعم، كلّها متشابهة','ليس لها شكل'],
  ['ورقة الصنوبر رفيعة كالإبرة، فهي ورقة ...؟ 🌲','إبرية','كفّية','بيضوية'],
  ['ورقة الذرة طويلة كالشريط، فهي ورقة ...؟','شريطية','إبرية','كفّية'],
  ['ورقة العنب تشبه كفّ اليد، فهي ورقة ...؟','كفّية','شريطية','إبرية'],
  ['ورقة التفاح تشبه شكل البيضة، فهي ورقة ...؟','بيضوية','إبرية','شريطية'],
  ['من أشكال الأوراق: بيضوية، إبرية، شريطية، و...؟','كفّية','مربّعة','مثلّثة'],
  ['ورق العنب الذي نطبخه ورق ...؟','كفّي','إبري','شريطي'],
  ['أيّ نبات أوراقه إبرية؟','الصنوبر','العنب','التفاح']]},
 {sem:1, unit:'الوحدة الثانية', t:'أزحف.. أقف.. أو أتسلّق', q:[
  ['هل لسوق النباتات شكل واحد؟','لا، لها أشكال مختلفة','نعم، كلّها منتصبة','ليس للنبات ساق'],
  ['نبات اللبلاب يستند على الجدار ليرتفع، فساقه ...؟','متسلّقة','زاحفة','منتصبة'],
  ['شجرة السرو ساقها قائمة لا تحتاج إلى شيء تستند عليه، فساقها ...؟','منتصبة','زاحفة','متسلّقة'],
  ['الساق التي تمتدّ على سطح التربة تسمّى ساقًا ...؟','زاحفة','منتصبة','متسلّقة'],
  ['ساق شجرة الكرز ...؟','منتصبة','زاحفة','متسلّقة'],
  ['البطيخ ينمو ممتدًّا على الأرض، فساقه ...؟ 🍉','زاحفة','منتصبة','متسلّقة'],
  ['الساق المتسلّقة تحتاج إلى ...؟','شيء تستند عليه','ماء أقلّ','ظلام'],
  ['من أشكال السوق: الزاحفة والمتسلّقة و...؟','المنتصبة','الطائرة','السابحة']]},
 {sem:1, unit:'الوحدة الثانية', t:'جذور متنوّعة', q:[
  ['من أشكال الجذور: الدرني والليفي و...؟','الوتدي','الإبري','الكفّي'],
  ['جذر البطاطا الحلوة منتفخ ونأكله، فهو جذر ...؟ 🍠','درني','ليفي','وتدي'],
  ['جذر القمح يشبه الخيوط الرفيعة، فهو جذر ...؟','ليفي','درني','وتدي'],
  ['جذر القطن له جذر رئيسي كبير تتفرّع منه جذور صغيرة، فهو جذر ...؟','وتدي','ليفي','درني'],
  ['جذر الذرة ...؟','ليفي','درني','وتدي'],
  ['جذر الفول ...؟','وتدي','ليفي','درني'],
  ['أيّ جذر يمكن أكله؟','الجزر','جذر القمح','جذر القطن'],
  ['جذور النباتات ... في شكلها.','تختلف','تتشابه تمامًا','لا يوجد لها شكل']]},
 {sem:1, unit:'الوحدة الثانية', t:'أعتني بنباتاتي', q:[
  ['من طرائق العناية بالنباتات: الريّ و...؟','التسميد','الكسر','القطف'],
  ['ماذا يضيف البستاني إلى التربة لتنمو النباتات أفضل؟','السماد','الملح','البلاستيك'],
  ['يحتاج النبات لينمو إلى الماء و...؟ 🌱','الضوء والهواء','الظلام','الدخان'],
  ['للمحافظة على النباتات ...؟','لا أقطع الأشجار الخضراء','أقطف الأزهار','ألعب فوق الأعشاب'],
  ['من أسباب حرائق الغابات ...؟ 🔥','إشعال النار في الغابات','سقي الأشجار','زراعة الأشجار'],
  ['في عيد الشجرة يقال: ازرعْ ولا ...؟','تقطعْ','تسقِ','تزرعْ'],
  ['أيّ سلوك صحيح في الحديقة؟','أمشي في الممرّات','أقطف الأزهار','أكسر الأغصان'],
  ['تشتهر سورية بتربتها ... وكثرة نباتاتها.','الخصبة','المالحة','الجافة'],
  ['عندما أرى نبتة عطشى في حديقة المدرسة ...؟','أسقيها','أقطعها','أتركها']]},
 {sem:1, unit:'الوحدة الثانية', t:'أصل الحكاية', q:[
  ['تُصنع الأشياء في حياتنا من نوع واحد أو من أنواع ... من الموادّ.','مختلفة','غير موجودة','سامّة'],
  ['يتألّف قلم الرصاص من ...؟ ✏️','موادّ عديدة','مادّة واحدة','ماء'],
  ['رأس قلم الرصاص الذي نكتب به مصنوع من ...؟','الغرافيت','المطاط','الزجاج'],
  ['الجزء الرئيسي لقلم الرصاص مصنوع من ...؟','الخشب','البلاستيك','الحديد'],
  ['ممحاة القلم مصنوعة من ...؟','المطاط','الزجاج','الخشب'],
  ['الخبز يُصنع من ...؟ 🍞','القمح','البرتقال','الحليب'],
  ['الجبن يُصنع من ...؟','الحليب','القمح','المشمش'],
  ['مربّى المشمش يُصنع من ...؟','المشمش','الزيتون','القطن'],
  ['النجّار يحتاج لعمله إلى ...؟','الخشب','القطن','القمح'],
  ['فنّ طيّ الورق يدعى ...؟','الأوريغامي','الرسم بالألوان','النحت']]},
 {sem:1, unit:'الوحدة الثانية', t:'أقلّ.. أكثر', q:[
  ['الكتلة هي مقدار ما يحتويه الجسم من ...؟','مادّة','لون','صوت'],
  ['كل جسم مصنوع من مادّة ويشغل ... من الفراغ.','حيّزًا','لونًا','صوتًا'],
  ['لصناعة شمعة كبيرة نحتاج إلى شمع ... من الشمعة الصغيرة.','أكثر','أقلّ','نفس الكمية'],
  ['نقيس الكتلة باستخدام ...؟ ⚖️','الميزان ذي الكفّتين','المسطرة','الساعة'],
  ['وحدة قياس الكتلة هي ...؟','الكيلوغرام','المتر','الساعة'],
  ['من أجزاء الكيلوغرام ...؟','الغرام','السنتيمتر','الدقيقة'],
  ['صنعنا من قطعة معجون كرة ثم حلقة. كتلة المعجون ...؟','لا تتغيّر','تزداد','تنقص'],
  ['كتلة الجسم تساوي مجموع كتل الصنجات اللازمة ل...؟','توازن كفّتي الميزان','كسر الميزان','رفع الكفّتين معًا'],
  ['كتلة عنقود العنب ... من كتلة إحدى حبّاته. 🍇','أكبر','أصغر','تساوي'],
  ['أيّهما كتلته أكبر؟','الفيل','العصفور','الفأر']]}
]);

})();
(function(){
/* العلوم الصف الثالث والرابع — الفصل الأول، من كتب ٢٠٢٥–٢٠٢٦ */
function REPL(g, s, lessons) { CUR[g][s] = lessons.concat((CUR[g][s] || []).filter(l => l.sem !== 1)); }
REPL(3, 'sci', [
 {sem:1, unit:'الوحدة الأولى', t:'بيئتي تدعمني', q:[
  ['ما معنى تكيّف الحيوان؟','قدرته على العيش والتأقلم مع بيئته','قدرته على الطيران فقط','تغيير بيته كل يوم','نومه طوال الشتاء'],
  ['يتكيّف الدب القطبي مع بيئته الثلجية بوساطة:','لونه الأبيض وفروه الكثيف','لونه الأسود','زعانفه','أجنحته'],
  ['ماذا تفعل السلحفاة عندما تشعر بالخطر؟','تختبئ داخل درعها','تطير بعيدًا','تغيّر لونها','تتسلّق الشجرة'],
  ['شكل جسم السمكة يساعدها على:','السباحة بسهولة في الماء','المشي على اليابسة','الطيران','حفر التراب'],
  ['الضفدع الصغير يتنفّس في الماء، وعندما يكبر يتنفّس:','الهواء على اليابسة','الرمل','لا يتنفّس','الطين فقط'],
  ['ما الذي يساعد الجمل على المشي في رمال الصحراء؟','خفّه العريض','ذيله الطويل','منقاره','زعانفه'],
  ['ما الذي يساعد القرد على التنقّل بين الأشجار؟','أطرافه الطويلة القوية','زعانفه','خفّه العريض','منقاره المفلطح'],
  ['البطّ له منقار مفلطح وغشاء بين أصابعه يساعده على:','السباحة والبحث عن غذائه في الماء','تسلّق الأشجار','الجري في الصحراء','حفر الأنفاق'],
  ['لماذا يكسو جسمَ الدبّ فروٌ سميك؟','ليحميه من البرد','ليساعده على السباحة السريعة','ليطير','ليختبئ في الرمل'],
  ['يعتمد تكيّف الحيوان على:','نوع البيئة التي يعيش فيها','لون عينيه','عمره فقط','اسمه'],
 ]},
 {sem:1, unit:'الوحدة الأولى', t:'تتكيّف لتعيش', q:[
  ['لماذا للنمر أنياب حادة؟','ليمزّق اللحم الذي يأكله','ليأكل أوراق الشجر','ليحفر الأرض','ليشرب الماء'],
  ['أسنان الزرافة مسطّحة وعريضة لأنها تأكل:','أوراق الأشجار','اللحوم','الأسماك','الحشرات'],
  ['ما الذي ساعد الزرافة على أكل أوراق الأشجار العالية؟','رقبتها الطويلة','ذيلها القصير','أنيابها الحادة','لونها'],
  ['قدرة الحيوان على الاختفاء عن أعدائه تسمّى:','التخفّي','التكاثر','الهجرة','التغذية'],
  ['كيف تتخفّى الحرباء عن أعدائها؟','تغيّر لونها بحسب المكان','تحفر حفرة عميقة','تطير بعيدًا','تصدر صوتًا عاليًا'],
  ['يساعد النمرَ على الإمساك بفريسته:','الجري بسرعة','التلوّن','الصوت'],
  ['الجرادة الخضراء تختبئ بين الأعشاب لأن لونها:','يشبه لون الأعشاب','أحمر لامع','مختلف عن البيئة','أسود'],
  ['يحمي القنفذ نفسه من أعدائه بوساطة:','الأشواك التي تغطّي جسمه','تغيير لونه','الطيران','السباحة'],
  ['يتشابه النمر والصقر في أن كليهما يتغذّى على:','اللحوم','الأعشاب','الحبوب','الفواكه'],
  ['لماذا تهاجر بعض الطيور في فصل الخريف؟','للبحث عن الدفء والغذاء لتستمر حياتها','لأنها تحب السفر فقط','لتبني أعشاشها في الثلج','لتنام'],
 ]},
 {sem:1, unit:'الوحدة الأولى', t:'السلسلة الغذائية', q:[
  ['الكائنات الحية التي تصنع غذاءها بنفسها تسمّى:','المنتجات','المستهلكات الأولية','المستهلكات الثانوية','المستهلكات الثالثية'],
  ['من المنتجات في السلسلة الغذائية:','النباتات الخضراء','الأرنب','الأفعى','العصفور'],
  ['الحيوانات التي تتغذّى على النباتات فقط تسمّى:','مستهلكات أولية','منتجات','مستهلكات ثانوية','مستهلكات ثالثية'],
  ['الحيوانات آكلة اللحوم التي تأكل آكلات النبات تسمّى:','مستهلكات ثانوية','منتجات','مستهلكات أولية','نباتات'],
  ['في السلسلة: ورق التوت ثم دودة القز ثم العصفور ثم الأفعى\nما المنتج؟','ورق التوت','دودة القز','العصفور','الأفعى'],
  ['في السلسلة: ورق التوت ثم دودة القز ثم العصفور ثم الأفعى\nالأفعى هي:','مستهلك ثالثي','منتج','مستهلك أولي','مستهلك ثانوي'],
  ['في السلسلة: طحالب ثم أسماك صغيرة ثم أسماك كبيرة ثم قرش\nالمستهلك الأولي هو:','الأسماك الصغيرة','الطحالب','القرش','الأسماك الكبيرة'],
  ['تبدأ السلسلة الغذائية بـ:','منتج (نبات)','مستهلك أولي','مستهلك ثانوي','مستهلك ثالثي'],
  ['الأرنب يأكل الأعشاب، فهو:','مستهلك أولي','منتج','مستهلك ثانوي','مستهلك ثالثي'],
  ['أين توجد السلاسل الغذائية؟','على اليابسة وفي الماء','على اليابسة فقط','في الماء فقط','في الصحراء فقط'],
 ]},
 {sem:1, unit:'الوحدة الأولى', t:'طبيب نفسه', q:[
  ['حيوانات البراري تعتمد في تأمين غذائها ومسكنها على:','نفسها','الإنسان','الطبيب البيطري','المزارع'],
  ['القطّ المنزلي يعتمد في تأمين مسكنه على:','الإنسان','نفسه فقط','الحيوانات الأخرى','الغابة'],
  ['من يعالج الحيوانات الأليفة عندما تمرض؟','الطبيب البيطري','الحيوانات الأخرى','المعلّم','لا أحد'],
  ['كيف تعالج حيوانات البراري نفسها؟','بما حولها كالتراب والأعشاب البرية','بالذهاب إلى الطبيب','بالأدوية من الصيدلية','لا تمرض أبدًا'],
  ['تحمي الحيوانات البرية نفسها بوساطة:','الأنياب الحادة والمخالب القوية','الطبيب البيطري','الأسوار','المزارع'],
  ['من يؤمّن الحماية لحيوانات المزرعة؟','الإنسان','الذئب','هي وحدها','الطيور'],
  ['من شروط المسكن الجيد للحيوانات:','الإضاءة المناسبة والتهوية الجيدة والنظافة','الظلام التام','عدم وجود ماء','الازدحام الشديد'],
  ['ما فائدة المعالف والمشارب في مسكن الحيوان؟','تقديم الطعام والماء للحيوان','تدفئة المكان','إضاءة المكان','تزيين الحظيرة'],
  ['أوّل عالم عربي وضع كتابًا في علم الحيوان هو:','الجاحظ','ابن البيطار','الخوارزمي','الفارابي'],
  ['هل يستطيع الدجاج في المدينة تأمين حاجاته بنفسه؟','لا، يحتاج إلى عناية الإنسان','نعم، دائمًا','نعم، يصطاد طعامه','لا يحتاج إلى أي شيء'],
 ]},
 {sem:1, unit:'الوحدة الأولى', t:'الحضن الدافئ', q:[
  ['أين تضع أنثى الكنغر صغيرها بعد ولادته مباشرة؟','في الجراب في بطنها','في عش على الشجرة','في حفرة في الرمل','في الماء'],
  ['يبقى صغير الكنغر في الجراب حتى يبلغ من العمر نحو:','سبعة أشهر','سبعة أيام','سنتين','يوم واحد'],
  ['أين تضع العصفورة بيضها؟','في العش','في الماء','في جراب','في الرمل'],
  ['كم يومًا ترقد العصفورة على البيض تقريبًا حتى يفقس؟','18 يومًا','3 أيام','سنة كاملة','100 يوم'],
  ['ماذا يفعل الأب عندما ترقد العصفورة على البيض؟','يحضر لها الطعام','يكسر البيض','يترك العش للأبد','ينام فقط'],
  ['أين تضع السلحفاة البحرية بيوضها؟','في حفرة في رمال الشاطئ','في عش على الشجرة','في جراب','داخل درعها'],
  ['بعد أن تفقس بيوض السلحفاة البحرية تزحف صغارها إلى البحر و:','تعتمد على نفسها','تعتني بها الأم','يعتني بها الأب','تعود إلى البيض'],
  ['من يرقد على بيوض البطريق في القطب المتجمد؟','الأب','لا أحد يرقد عليها','السمك','العصفور'],
  ['أيّ هذه الحيوانات تعتمد صغاره على نفسها منذ بداية حياتها؟','السمك','الكنغر','العصفور','البطريق'],
  ['صغار العصفور يعتني بها:','الأب والأم معًا','لا أحد','تعتمد على نفسها منذ خروجها من البيضة','السلحفاة'],
 ]},
 {sem:1, unit:'الوحدة الأولى', t:'قوة وجذب وتأثير', q:[
  ['المغناطيس يجذب الأجسام المصنوعة من:','الحديد','الخشب','البلاستيك','الورق'],
  ['هل يجذب المغناطيس المشبك الحديدي دون أن يلمسه؟','نعم','لا','فقط في الماء','فقط إذا كان مبللًا'],
  ['ينتقل تأثير المغناطيس عبر:','الهواء والورق','لا ينتقل أبدًا','الهواء فقط','الخشب السميك فقط'],
  ['كيف أُخرج دبابيس حديدية من كأس ماء دون أن أبلّل يدي؟','باستعمال مغناطيس','بقطعة بلاستيك','بالنفخ عليها','بقطعة قماش'],
  ['كلّما ابتعد المغناطيس عن الجسم الحديدي فإن قوة جذبه له:','تنقص','تزداد','تبقى كما هي','تتضاعف'],
  ['أين تكون قوة جذب المغناطيس أكبر؟','عند قطبيه','في منتصفه','في كل مكان بالتساوي','لا يجذب أبدًا'],
  ['أين تكون قوة جذب المغناطيس ضعيفة جدًا؟','في منتصفه','عند القطب الشمالي','عند القطب الجنوبي','عند طرفيه'],
  ['للمغناطيس قطبان هما:','الشمالي والجنوبي','الشرقي والغربي','العلوي والسفلي','الأيمن والأيسر'],
  ['من استعمالات المغناطيس في البيت:','إغلاق باب الثلاجة','طهي الطعام','تنظيف الأرض','ري النباتات'],
  ['يُستعمل المغناطيس في صناعة:','الجرس الكهربائي والهاتف','الخبز','الملابس القطنية','الأقلام الخشبية'],
 ]},
 {sem:1, unit:'الوحدة الأولى', t:'حقل يحمل أسرارًا', q:[
  ['المنطقة التي تحيط بالمغناطيس ويظهر فيها أثره تسمّى:','الحقل المغناطيسي','الحقل الزراعي','القطب','السلسلة الغذائية'],
  ['ماذا يحدث للإبرة المغناطيسية عندما نقرّب منها مغناطيسًا؟','تنحرف وتهتز','لا يحدث شيء','تذوب','تنكسر'],
  ['كلّما اقترب المغناطيس من الإبرة المغناطيسية فإن اهتزازها:','يتزايد','يتناقص','يتوقف','يبقى كما هو'],
  ['هل يمكننا رؤية الحقل المغناطيسي بأعيننا؟','لا، لكن يمكن رؤية أثره','نعم بسهولة','نعم في الليل فقط','نعم إذا كان المغناطيس كبيرًا'],
  ['ما الذي نستعمله لنرى أثر الحقل المغناطيسي؟','برادة الحديد','الماء','الرمل','السكر'],
  ['تنتظم برادة الحديد حول المغناطيس على شكل:','خطوط متجاورة','كومة واحدة في المنتصف','نقاط متفرقة','مربعات'],
  ['عندما نقرّب قطبين متماثلين لمغناطيسين فإنهما:','يتنافران','يتجاذبان','يلتصقان','يذوبان'],
  ['عندما نقرّب قطبين مختلفين لمغناطيسين فإنهما:','يتجاذبان','يتنافران','لا يتأثران','يتكسّران'],
  ['يتغيّر شكل خطوط الحقل المغناطيسي عند:','تجاذب قطبي مغناطيسين أو تنافرهما','وضع المغناطيس في الشمس','تلوين المغناطيس','غسل المغناطيس'],
  ['الأداة التي فيها إبرة مغناطيسية وتساعدنا على معرفة الاتجاهات هي:','البوصلة','الميزان','المسطرة','ميزان الحرارة'],
 ]},
 {sem:1, unit:'الوحدة الثانية', t:'تنتشر لتعيش', q:[
  ['تنتقل بذور جوز الهند من مكان إلى آخر بوساطة:','المياه','الرياح','النمل','القطط'],
  ['تنتقل بذور الصنوبر بوساطة:','الرياح','المياه الجارية','الأسماك','لا تنتقل'],
  ['البذور التي تنتشر بوساطة الهواء تكون:','خفيفة الوزن','ثقيلة جدًا','كبيرة وقاسية','مدفونة في التراب'],
  ['بذور زهيرات الأمل لها مظلّات تسهّل حملها بوساطة:','الرياح','الماء','الحيوانات','الإنسان'],
  ['كيف ينشر الطائر بذور التوت؟','يأكل الثمار فتخرج البذور مع فضلاته','يزرعها بمنقاره','يحفظها في عشه','يرميها في البحر'],
  ['نبات إبرة العجوز ينشر بذوره بوساطة:','النبات ذاته','الأسماك','المياه','الرياح'],
  ['تنتقل بذور الزنبق المائي بوساطة:','المياه','الرياح','النمل','القطط'],
  ['هل للنمل دور في انتشار البذور؟','نعم','لا','فقط في البحر','فقط في الليل'],
  ['كيف نمت الأشجار على سفوح الجبال دون أن يزرعها أحد؟','انتقلت إليها البذور بالرياح والحيوانات','نبتت من الصخور','نزلت مع المطر وهي أشجار','نمت بلا بذور'],
  ['من طرائق انتشار البذور:','الرياح والمياه الجارية والحيوانات والنبات ذاته','الكهرباء','المغناطيس','الثلاجة'],
 ]},
 {sem:1, unit:'الوحدة الثانية', t:'إنتاش البذور', q:[
  ['أين توجد البذرة؟','داخل الثمرة','داخل الجذر','داخل الورقة','فوق الساق'],
  ['الجنين النباتي داخل البذرة يسمّى:','الرشيم','الثمرة','اللب','القشرة'],
  ['يتألّف الرشيم من:','جذير وسويقة وبريعم وفلقات','ساق وأزهار وثمار','قشرة ولب فقط','أوراق وجذور كبيرة'],
  ['أيّ أقسام الرشيم ينمو باتجاه الأسفل ليصبح جذرًا؟','الجذير','السويقة','البريعم','الفلقة'],
  ['تنمو السويقة لتصبح:','ساقًا','جذرًا','ثمرة','بذرة'],
  ['تظهر الوريقات الأولى من:','البريعم','الجذير','القشرة','التربة'],
  ['نموّ جنين النبات وإعطاء نبات جديد يسمّى:','الإنتاش','الانتشار','التكيّف','التخفّي'],
  ['قبل زراعة بذور العدس ننقعها في الماء مدة:','24 ساعة','دقيقة واحدة','شهر','سنة'],
  ['نضع بذور العدس المنقوعة لتنمو على:','قطن مبلّل بالماء','قطن جاف','ورق في الثلاجة','حجر ساخن'],
  ['العالم العربي الذي ألّف موسوعة عن الأدوية والأغذية من النباتات هو:','ابن البيطار','الجاحظ','ابن خلدون','الفارابي'],
 ]},
 {sem:1, unit:'الوحدة الثانية', t:'أنمو لكن بشروط', q:[
  ['لكي تنمو البذرة يجب أن تكون:','حيّة وسليمة','مسلوقة','مهشّمة','مكسورة'],
  ['البذور المسلوقة هي بذور:','غير حية','حية','قاسية فقط','سريعة النمو'],
  ['لماذا لا تنمو البذور المسلوقة؟','لأن الرشيم فيها مات','لأنها كبيرة','لأنها نظيفة','لأن لونها تغيّر فقط'],
  ['البذور التي وُضعت على قطن جاف:','لم تنمُ لعدم توافر الرطوبة','نمت بسرعة كبيرة','أعطت ثمارًا','تحوّلت إلى أزهار'],
  ['البذور التي وُضعت في الثلاجة لم تنمُ لأنها لم تحصل على:','الحرارة المناسبة','الماء','الهواء','القطن'],
  ['من شروط الإنتاش التي لا تتعلّق بالبذرة:','الرطوبة والحرارة والضوء','أن تكون البذرة سليمة','أن تكون البذرة حية','لون البذرة'],
  ['من شروط الإنتاش التي تتعلّق بالبذرة نفسها:','أن تكون حية وسليمة','توافر الضوء','توافر الرطوبة','الحرارة المناسبة'],
  ['يموت رشيم البذرة عندما نضعه في:','ماء ساخن','ماء عادي','ماء بارد','قطن رطب'],
  ['البذور المهشّمة لا تنمو لأن:','جزءًا من رشيمها تهشّم','لونها جميل','حجمها مناسب','قشرتها سليمة'],
  ['ماذا يحدث لو لم تنتشر البذور في أنحاء العالم؟','لن تنمو نباتات جديدة في أماكن كثيرة','ستكثر النباتات في كل مكان','ستصبح البذور حجارة','لا يحدث شيء'],
 ]},
 {sem:1, unit:'الوحدة الثانية', t:'مراحل نمو النبات', q:[
  ['الترتيب الصحيح لمراحل نمو النبات:','بذرة، بادرة، نبات فتي، نبات مزهر، نبات مثمر','بذرة، نبات مثمر، بادرة، نبات مزهر، نبات فتي','بادرة، بذرة، نبات مثمر، نبات فتي، نبات مزهر','نبات مزهر، بذرة، بادرة، نبات مثمر، نبات فتي'],
  ['تنمو البذرة لتعطي:','البادرة','الثمرة مباشرة','الزهرة مباشرة','الحجارة'],
  ['تنمو الأزهار لتعطي:','الثمار','الجذور','البادرة','التربة'],
  ['من أين نحصل على البذور؟','من الثمار','من الجذور','من التربة','من الأوراق'],
  ['تتكوّن بذرة الفول من:','غلاف وفلقتين ورشيم','قشرة فقط','لب وعصير','جذر وساق'],
  ['أين توجد المواد الغذائية المدّخرة في بذرة الفول؟','في الفلقتين','في الغلاف','في الجذير','في البريعم'],
  ['بذرة القمح بذرة:','وحيدة الفلقة','ثنائية الفلقة','بلا فلقات','ثلاثية الفلقة'],
  ['بذرة الفول بذرة:','ثنائية الفلقة','وحيدة الفلقة','بلا رشيم','لا تنمو'],
  ['أيّ هذه النباتات أحادي (وحيد) الفلقة؟','الذرة','الفول','الفاصولياء','الحمص'],
  ['تختلف البذور فيما بينها في:','اللون والشكل والحجم','لا تختلف أبدًا','اللون فقط','الاسم فقط'],
 ]},
 {sem:1, unit:'الوحدة الثانية', t:'أقيس بأدواتي', q:[
  ['نقيس درجة حرارة الجسم بدقة باستعمال:','ميزان الحرارة الطبي','اليد على الجبين','الكأس المدرجة','الربيعة'],
  ['تُقدَّر درجة الحرارة بواحدة:','الدرجة المئوية (سيلزيوس)','الكيلوغرام','اللتر','النيوتن'],
  ['درجة حرارة جسم الإنسان الطبيعية هي:','37 درجة مئوية','10 درجات مئوية','50 درجة مئوية','100 درجة مئوية'],
  ['نقيس كتلة المادة باستعمال:','الميزان ذي الكفّتين','ميزان الحرارة','الكأس المدرجة','المسطرة'],
  ['من واحدات قياس كتلة المادة:','الكيلوغرام','اللتر','النيوتن','الدرجة المئوية'],
  ['نقيس ثقل المادة باستعمال:','الربيعة ذات النابض','الميزان ذي الكفّتين','ميزان الحرارة','الكأس المدرجة'],
  ['يُقدَّر الثقل بواحدة:','النيوتن','الغرام','الميللتر','الدرجة المئوية'],
  ['نقيس حجم السوائل باستعمال:','الكأس المدرجة','الربيعة','ميزان الحرارة الطبي','الميزان ذي الكفّتين'],
  ['واحدة قياس حجم السوائل هي:','اللتر','الكيلوغرام','النيوتن','المتر'],
  ['كتلة الجسم على سطح القمر:','تبقى ثابتة','تزيد','تنقص','تصبح صفرًا'],
 ]},
 {sem:1, unit:'الوحدة الثانية', t:'مناطق النمو عند النبات', q:[
  ['النموّ هو زيادة في:','الطول والوزن','اللون فقط','عدد الأوراق المتساقطة','الرائحة'],
  ['مناطق النمو في النبات هي:','نهاية الجذر ونهاية الساق','الأوراق فقط','الأزهار فقط','وسط الساق'],
  ['مع مرور الأيام، طول نبات البندورة:','يزداد','ينقص','يبقى ثابتًا','يختفي'],
  ['مع مرور الأيام، وزن نبات البندورة:','يزداد','ينقص','يبقى ثابتًا','يصبح صفرًا'],
  ['لماذا ذبل نبات الحمص الذي رُشّ المبيد العشبي على نهاية ساقه؟','لأن المبيد أصاب منطقة النمو','لأنه شرب ماء كثيرًا','لأنه نبات صغير','لأن أوراقه خضراء'],
  ['نبات الحمص الذي لم يُرشّ بالمبيد العشبي:','يستمر في النمو','يذبل','يموت فورًا','يتوقف نموّه'],
  ['المادة التي تُستعمل للقضاء على الأعشاب الضارة تسمّى:','مبيدًا عشبيًا','مبيدًا حشريًا','سمادًا','ماءً'],
  ['المادة التي تُستعمل للقضاء على الحشرات تسمّى:','مبيدًا حشريًا','مبيدًا عشبيًا','عصيرًا','بذورًا'],
  ['من أيّ منطقة يطول الجذر نحو الأسفل؟','نهاية الجذر','نهاية الساق','الورقة','الزهرة'],
  ['إذا قُطعت نهاية ساق نبتة صغيرة فإن نموّها نحو الأعلى:','يتوقف','يزداد','لا يتأثر','يصبح أسرع'],
 ]},
 {sem:1, unit:'الوحدة الثانية', t:'خيرات بلادي', q:[
  ['تتحوّل الزهرة إلى:','ثمرة','جذر','ساق','ورقة'],
  ['الثمرة جزء من النبات يحيط بالبذرة و:','يحميها','يأكلها','يقطعها','يرميها'],
  ['تتكوّن بعض الثمار مثل الخوخ من:','قشرة ولب وبذرة','جذر وساق','أوراق وأزهار','ماء فقط'],
  ['الثمرة البسيطة تنتج عن:','زهرة واحدة','أزهار عدة','جذر واحد','ورقة واحدة'],
  ['الثمرة المركّبة تنتج عن:','أزهار عدة','زهرة واحدة','بذرة واحدة','ساق واحدة'],
  ['من الثمار المركّبة:','التين','التفاح','الخوخ','المشمش'],
  ['من الثمار البسيطة:','المشمش','التوت','التين'],
  ['أيّ هذه الثمار فيها عدد كبير من البذور؟','البطيخ','الكرز','المشمش','الخوخ'],
  ['أين نرى بذور ثمرة الفريز (الفراولة)؟','على سطحها الخارجي','في وسطها فقط','في جذورها','ليس لها بذور'],
  ['في ثمرة البازلاء نأكل:','البذور','القشرة فقط','الجذر','الأوراق'],
 ]},
 {sem:1, unit:'الوحدة الثانية', t:'ساكنة ومتحركة', q:[
  ['عند دلك البالون بالكف الصوفي تنتقل الشحنات السالبة:','من الكف الصوفي إلى البالون','من البالون إلى الكف الصوفي','إلى الهواء','لا تنتقل'],
  ['بعد الدلك تصبح شحنة البالون:','سالبة','موجبة','معتدلة','لا شحنة له'],
  ['الكف الصوفي الذي فقد شحنات سالبة تصبح شحنته:','موجبة','سالبة','معتدلة','مغناطيسية'],
  ['الكهرباء التي تتولّد عند دلك جسمين معًا تسمّى:','الكهرباء الساكنة','الكهرباء المتحركة','المغناطيسية','الطاقة الشمسية'],
  ['ماذا يحدث لخيط الماء عند تقريب بالون مدلوك منه؟','ينجذب نحو البالون','يبتعد عن البالون','يتجمّد','لا يتأثر'],
  ['يتجاذب الجسمان المشحونان بشحنتين:','مختلفتين','متماثلتين','معدومتين','كبيرتين فقط'],
  ['يتنافر الجسمان المشحونان بشحنتين:','متماثلتين','مختلفتين','موجبة وسالبة','معدومتين'],
  ['القوة الكهربائية بين الأجسام المشحونة تكون:','قوة تجاذب أو تنافر','قوة تجاذب فقط','قوة تنافر فقط','لا توجد قوة'],
  ['من الظواهر التي تحدث بسبب الكهرباء الساكنة:','البرق وانجذاب الشعر إلى المشط','هطول المطر','نمو النبات','ذوبان الثلج'],
  ['عند دلك البالونين كليهما بالكف الصوفي ثم تقريبهما فإنهما:','يتنافران','يتجاذبان','يلتصقان','ينفجران'],
 ]},
]);
REPL(4, 'sci', [
 {sem:1, unit:'الوحدة الأولى', t:'بنى تتحرك', q:[
  ['جسم قنديل البحر هلامي و:','ليس فيه عظام','مليء بالعظام','له هيكل خارجي قاسٍ','له قوقعة'],
  ['أيّ هذه الحيوانات له هيكل عظمي داخلي؟','الأرنب','الدودة','قنديل البحر','النملة'],
  ['أيّ هذه الحيوانات ليس له هيكل عظمي؟','الدودة','القطة','التمساح','النعامة'],
  ['الغطاء القاسي الذي يغطي جسم بعض الحيوانات من الخارج يسمّى:','الهيكل الخارجي','الهيكل الداخلي','الجلد الناعم','الريش'],
  ['من الحيوانات ذات الهيكل الخارجي:','السرطان','الحصان','السمكة','الطائر'],
  ['ترتبط العظام بعضها ببعض لتشكّل:','الهيكل العظمي','العضلات','الجلد','الدم'],
  ['من وظائف الهيكل العظمي:','يعطي الجسم شكله ويدعمه ويحمي أعضاءه الداخلية','يهضم الطعام','ينقل الدم','يرى الأشياء'],
  ['ما الذي يساعد الحيوان على الحركة ويحمي أعضاءه الداخلية؟','الهيكل العظمي','الشعر','الريش فقط','الأظافر'],
  ['العالم الذي اكتشف الأشعة السينية هو:','رونتجن','نيوتن','الجاحظ','ابن البيطار'],
  ['يستخدم الأطباء الأشعة السينية من أجل:','رؤية ما داخل جسم الإنسان كالعظام','تدفئة المريض','تنظيف الأسنان','قياس الطول'],
 ]},
 {sem:1, unit:'الوحدة الأولى', t:'عظامي تدعمني', q:[
  ['كم عدد عظام جسم الإنسان البالغ؟','206','100','270','50'],
  ['من عظام الطرف العلوي:','عظم العضد','عظم الفخذ','عظما الساق','عظام القدم'],
  ['من عظام الطرف السفلي:','عظم الفخذ','عظم العضد','عظما الساعد','عظام الكف'],
  ['يرتبط الطرفان العلويان بالجذع بوساطة:','الزنار الكتفي','الزنار الحوضي','الجمجمة','الأضلاع'],
  ['للعظام ثلاثة أشكال هي:','طويلة وقصيرة ومسطّحة','حمراء وزرقاء وصفراء','لينة وسائلة وغازية','دائرية فقط'],
  ['منطقة اتصال عظم بعظم آخر تسمّى:','المفصل','العضلة','العصب','الجمجمة'],
  ['المفاصل بين عظام الجمجمة مفاصل:','ثابتة','متحركة بكل الاتجاهات','نصف متحركة','غير موجودة'],
  ['المفاصل بين فقرات العمود الفقري مفاصل:','نصف متحركة','ثابتة','متحركة بكل الاتجاهات','غير موجودة'],
  ['تحمي عظام الجمجمة:','الدماغ','القلب','المعدة','الرئتين'],
  ['يحمي القفص الصدري:','القلب والرئتين','الدماغ','القدمين','العينين'],
 ]},
 {sem:1, unit:'الوحدة الأولى', t:'أصبحت أكبر', q:[
  ['كم عدد عظام الطفل الصغير تقريبًا؟','270','206','100','150'],
  ['العظام في جسمنا:','حيّة تنمو وتتغير عندما نكبر','لا تتغير أبدًا','مصنوعة من البلاستيك','تصغر كلما كبرنا'],
  ['تتوقف عظامنا عن النمو بين عمر:','20 و25 سنة','5 و6 سنوات','10 و12 سنة','60 و70 سنة'],
  ['العظام الصغيرة التي يشكّل مجموعها العمود الفقري تسمّى:','الفقرات','الأضلاع','الأصابع','الأسنان'],
  ['الغضروف نسيج:','أقل صلابة من العظام وقابل للالتواء','أقسى من العظام','سائل','مصنوع من الحديد'],
  ['يتكوّن صيوان الأذن الخارجي والأنف من:','الغضاريف','العظام القاسية','الأظافر','الأسنان'],
  ['لماذا تغطّي الغضاريف أطراف العظام عند التقائها؟','لمنع احتكاكها','لتلوينها','لتجعلها أثقل','لتغطيتها بالشعر'],
  ['ما الذي يربط العظام فلا تتباعد في أثناء الحركة؟','الأربطة','الشعر','الجلد','الدم'],
  ['من المواد المهمّة لقوّة العظام:','الكالسيوم','السكر','المشروبات الغازية','الحلويات'],
  ['الإفراط في شرب المشروبات الغازية يضرّ بـ:','العظام والأسنان','الشعر فقط','الأظافر فقط','لا يضرّ شيئًا'],
 ]},
 {sem:1, unit:'الوحدة الأولى', t:'ألعب وأتحرك', q:[
  ['ما الذي يغطّي العظام ويساعد الجسم على الحركة؟','العضلات','الأظافر','الشعر','الدم'],
  ['العضلات التي أستطيع التحكّم بحركتها تسمّى:','العضلات الإرادية','العضلات اللاإرادية','الغضاريف','الأربطة'],
  ['العضلات التي لا أستطيع التحكّم بحركتها تسمّى:','العضلات اللاإرادية','العضلات الإرادية','عضلات اليد','عضلات الرجل'],
  ['من العضلات الإرادية:','عضلات الرجل','عضلات المعدة','عضلات الأمعاء','عضلة القلب'],
  ['من العضلات اللاإرادية:','عضلات المعدة','عضلات اليد','عضلات الرقبة','عضلات الفخذ'],
  ['عضلة القلب عضلة:','لاإرادية لا تتعب','إرادية','تتوقف عند النوم','نحرّكها متى نشاء'],
  ['عند ثني الساعد نحو العضد، عضلة العضد الأمامية:','تتقلّص فتصبح أقصر وأكبر قطرًا','تسترخي وتطول','تختفي','لا يحدث لها شيء'],
  ['عند ثني الساعد نحو العضد، عضلة العضد الخلفية:','تسترخي','تتقلّص','تنكسر','تتصلّب'],
  ['تنتج حركة أعضاء الجسم بسبب:','تقلّص العضلات واسترخائها','نمو الشعر','الأظافر','الجلد'],
  ['العضلات المرتبطة بالهيكل العظمي تسمّى العضلات الهيكلية، وهي:','إرادية','لاإرادية','مثل عضلة القلب','بلا حركة'],
 ]},
 {sem:1, unit:'الوحدة الأولى', t:'جسمي السليم', q:[
  ['عندما ينكسر عظم يجب:','عدم تحريك العضو المكسور والذهاب إلى الطبيب','تحريكه بقوة','الاستمرار في اللعب','وضعه في الماء الساخن'],
  ['ماذا يضع الطبيب على العضو المكسور ليلتئم الكسر؟','الجبيرة','اللقاح','المغناطيس','العطر'],
  ['يُستخدم اللقاح من أجل:','الوقاية من الأمراض وإعطاء الجسم مناعة','علاج الكسور','زيادة الطول','تقوية العضلات فقط'],
  ['متى نتناول الدواء؟','عند المرض وحسب إرشادات الطبيب','كلّما شعرنا بالجوع','كل يوم دون سبب','عندما نحب طعمه'],
  ['الجلسة الصحيحة تحمي الهيكل العظمي من:','التشوّه','النمو','الحركة','الكالسيوم'],
  ['لماذا يُنصح بعدم حمل الأشياء الثقيلة؟','لأنها تضرّ بالهيكل العظمي والعضلات','لأنها تقوّي العظام','لأنها تزيد الطول','لأنها مفيدة دائمًا'],
  ['من مصادر فيتامين (د):','أشعة الشمس صباحًا وعصرًا','الظلام','المشروبات الغازية','الحلويات'],
  ['الأغذية الغنية بالكالسيوم وفيتامين (د) مفيدة لـ:','العظام','الشعر فقط','الأظافر فقط','لا فائدة لها'],
  ['ممارسة التمارين الرياضية تحافظ على:','صحة الهيكل العظمي والعضلات','لون العينين','طول الشعر','لا شيء'],
  ['لماذا نقرأ النشرة الموجودة في عبوة الدواء؟','لنعرف طريقة استعماله وتعليماته','لنعرف لونه فقط','لا فائدة منها','لنلعب بها'],
 ]},
 {sem:1, unit:'الوحدة الأولى', t:'طاقتي الخفية', q:[
  ['الطاقة التي يختزنها الجسم نتيجة وجوده في موضع معيّن تسمّى:','الطاقة الكامنة','الطاقة الحركية','الطاقة الضوئية','الطاقة الصوتية'],
  ['كرة الإسفنج بعد ضغطها تعود إلى شكلها لأنها اختزنت طاقة:','كامنة','ضوئية','صوتية','حرارية'],
  ['الكرة المرفوعة إلى ارتفاع معيّن:','تختزن طاقة كامنة','لا تختزن طاقة','تملك طاقة ضوئية','تملك طاقة صوتية'],
  ['تزداد الطاقة الكامنة لجسم بازدياد:','كتلته وارتفاعه عن سطح الأرض','لونه','عمره','نعومته'],
  ['سقطت قطعتان معدنيتان من الارتفاع نفسه، أيّهما غرزت المسمار أكثر؟','القطعة ذات الكتلة الأكبر','القطعة ذات الكتلة الأصغر','غرزتاه بالقدر نفسه','لم تغرزه أيّ منهما'],
  ['سقطت القطعة نفسها مرة من 50 سم ومرة من 30 سم، متى غرزت المسمار أكثر؟','عند سقوطها من 50 سم','عند سقوطها من 30 سم','بالقدر نفسه في المرتين','لم تغرزه'],
  ['سيارة متوقفة في قمة منحدر تملك طاقة:','كامنة','ضوئية','صوتية','حرارية'],
  ['عندما تتحرك سيارة من قمة منحدر إلى أسفله فإن طاقتها الكامنة:','تنقص','تزداد','تبقى ثابتة','تتضاعف'],
  ['عندما تتحرك سيارة على طريق أفقية مستقيمة فإن طاقتها الكامنة:','تبقى ثابتة','تزداد','تنقص','تزداد ثم تنقص'],
  ['أيّ مما يأتي يعبّر عن طاقة كامنة؟','الطاقة المختزنة في البطارية','طاقة السيارة المتحركة','طاقة الكرة المتدحرجة','طاقة الطفل الراكض'],
 ]},
 {sem:1, unit:'الوحدة الأولى', t:'أصبحت أسرع', q:[
  ['عندما تتزايد سرعة الجسم نقول إنه:','يتسارع','يتباطأ','يتوقف','يسكن'],
  ['عندما تتناقص سرعة الجسم نقول إنه:','يتباطأ','يتسارع','يطير','يقفز'],
  ['يزداد تسارع الجسم بازدياد:','القوة المؤثرة فيه','لونه','عمره','طوله'],
  ['دفعنا سيارتين بالقوة نفسها، أيّهما تصل أولًا؟','السيارة الأصغر','السيارة الأكبر','تصلان معًا','لا تتحرك أيّ منهما'],
  ['عندما تؤثّر قوة ثابتة في جسم، يكون تسارعه أكبر كلما كانت كتلته:','أصغر','أكبر','أثقل','لا علاقة للكتلة'],
  ['عندما ندفع السيارة بقوة أكبر فإنها تصل إلى سطح الطاولة في زمن:','أقل','أكثر','الزمن نفسه','لا تصل'],
  ['متزلّجان كتلة كلّ منهما 90 كغ، الأول يندفع بقوة 20 نيوتن والثاني بقوة 50 نيوتن، أيّهما تسارعه أكبر؟','الثاني','الأول','تسارعهما متساوٍ','لا تسارع لهما'],
  ['السيارة التي تقترب من إشارة المرور حتى تتوقف:','تتباطأ','تتسارع','تزداد سرعتها','تطير'],
  ['يحدث التسارع عند تزايد السرعة أو تناقصها أو:','تغيير اتجاه الحركة','تغيير لون الجسم','بقاء الجسم ساكنًا','تغيير اسم الجسم'],
  ['الرياح عند بدء العاصفة:','تتسارع','تتباطأ','تتوقف','تختفي'],
 ]},
 {sem:1, unit:'الوحدة الأولى', t:'ألعب بالكرة', q:[
  ['الطاقة التي يمتلكها الجسم المتحرك تسمّى:','الطاقة الحركية','الطاقة الكامنة','الطاقة الضوئية','الطاقة الصوتية'],
  ['أيّ مما يأتي مثال على الطاقة الحركية؟','طفل يقود دراجته','سيارة متوقفة','صخرة عند قمة منحدر','طفل يقف أمام دراجته'],
  ['تزداد الطاقة الحركية للجسم بزيادة:','كتلته وسرعته','لونه','طوله فقط','نقصان كتلته'],
  ['عندما اصطدمت كرة كبيرة متدحرجة بكرة صغيرة ساكنة، الكرة الصغيرة:','تحرّكت','بقيت ساكنة','انفجرت','اختفت'],
  ['عند الاصطدام انتقلت طاقة الكرة المتحركة إلى:','الكرة الساكنة','الشمس','لم تنتقل أبدًا','الماء'],
  ['صدمت سيارة صغيرة ثم سيارة كبيرة مكعبًا، أيّهما حرّكت المكعب مسافة أكبر؟','السيارة الكبيرة','السيارة الصغيرة','المسافة نفسها','لم تحرّكه أيّ منهما'],
  ['إذا قطعتُ المسافة نفسها إلى المدرسة راكضًا بدل المشي فإن طاقتي الحركية:','تزداد','تنقص','تبقى كما هي','تصبح صفرًا'],
  ['لماذا تُحدث السيارة السريعة ضررًا أكبر عند اصطدامها بجدار من السيارة البطيئة؟','لأن طاقتها الحركية أكبر','لأن لونها مختلف','لأنها أخفّ','لأنها متوقفة'],
  ['الجسم الساكن طاقته الحركية:','معدومة','كبيرة جدًا','تزداد وحدها','مثل طاقة الشمس'],
  ['الكرة التي يركلها اللاعب وهي تتحرك نحو المرمى تملك طاقة:','حركية','ضوئية','صوتية','لا طاقة لها'],
 ]},
 {sem:1, unit:'الوحدة الثانية', t:'مركز القيادة', q:[
  ['الجهاز الذي يشرف على جميع وظائف الجسم وينظّم العمل بينها هو:','الجهاز العصبي','الجهاز الهضمي','الهيكل العظمي','العضلات'],
  ['يتكوّن الجهاز العصبي من:','الدماغ والنخاع الشوكي والأعصاب','القلب والرئتين','العظام والعضلات','المعدة والأمعاء'],
  ['يتكوّن الدماغ من:','المخ والمخيخ والبصلة السيسائية','النخاع الشوكي والأعصاب','القلب والدم','الجمجمة فقط'],
  ['أين يوجد الدماغ؟','داخل الجمجمة','داخل القفص الصدري','في البطن','في القدم'],
  ['القسم المسؤول عن التذكّر والتفكير هو:','المخ','المخيخ','القلب','العمود الفقري'],
  ['القسم المسؤول عن توازن الجسم هو:','المخيخ','المخ','القلب','المعدة'],
  ['المخ مسؤول عن:','الحس والحركة والتذكر والتفكير','التوازن فقط','هضم الطعام','ضخ الدم'],
  ['عندما أمشي على خط مستقيم وعيناي مغمضتان فأنا أختبر:','توازني','سمعي','تذوّقي','نظري'],
  ['في تجربة التقاط المسطرة، كلما كان العدد الذي التقطتُ عنده المسطرة أصغر كان ردّ فعلي:','أسرع','أبطأ','لا يتغير','خاطئًا'],
 ]},
 {sem:1, unit:'الوحدة الثانية', t:'منبه وحركة', q:[
  ['أين يوجد النخاع الشوكي؟','داخل قناة العمود الفقري','داخل الجمجمة','في المعدة','تحت الجلد مباشرة'],
  ['ينقل النخاع الشوكي التنبيهات الحسية من الجلد إلى:','المخ','العضلات','القلب','العظام'],
  ['ينقل النخاع الشوكي الأوامر الحركية من المخ إلى:','العضلات','الجلد','العينين','الأذنين'],
  ['عندما نلمس شمعة مشتعلة نُبعد يدنا بسرعة، هذه حركة:','لاإرادية دون تدخل المخ','إرادية بعد تفكير طويل','يتحكم بها المخيخ','لا يتحكم بها شيء'],
  ['الأعصاب حبال بيض تنقل:','التنبيهات والأوامر الحركية','الطعام','الدم','الهواء'],
  ['تُقسم الأعصاب من حيث منشؤها إلى:','دماغية وشوكية','كبيرة وصغيرة','إرادية ولاإرادية','طويلة وقصيرة'],
  ['تنشأ الأعصاب الدماغية من:','الدماغ','النخاع الشوكي','القلب','العضلات'],
  ['تتوزّع الأعصاب الشوكية في:','أنحاء الجسم عدا الرأس','الرأس فقط','اليدين فقط','العينين فقط'],
  ['الأعصاب الحركية تنقل أوامر الحركة من:','الدماغ إلى العضلات','العضلات إلى الدماغ','الجلد إلى الدماغ','القلب إلى الرئتين'],
  ['للمحافظة على صحة الجهاز العصبي يجب:','النوم فترة كافية والابتعاد عن التدخين','الإكثار من المنبّهات','السهر كل ليلة','التدخين'],
 ]},
 {sem:1, unit:'الوحدة الثانية', t:'عالمي الصغير', q:[
  ['كل مادة لها كتلة و:','تشغل حيّزًا من الفراغ','لا تشغل أي مكان','لا وزن لها','تختفي في الماء'],
  ['الوحدات البنائية المتشابهة التي تتكوّن منها جميع المواد تسمّى:','العناصر','الخلائط','المحاليل','العضلات'],
  ['العنصر مادة:','لا يمكن تفكيكها إلى عناصر أخرى مختلفة عنها','يمكن تفكيكها إلى عناصر مختلفة','تتكوّن دائمًا من عنصرين','سائلة دائمًا'],
  ['هل يمكن تفكيك العنصر إلى عناصر أخرى؟','لا','نعم بسهولة','نعم بالماء','نعم بالمقص'],
  ['الذهب مادة تتكوّن من:','عنصر واحد','عنصرين','ثلاثة عناصر','لا عناصر فيه'],
  ['يتكوّن الماء من عنصري:','الهدروجين والأكسجين','الذهب والفضة','الكربون والحديد','الملح والسكر'],
  ['رأس قلم الرصاص مصنوع من عنصر:','الكربون','الذهب','الفضة','الأكسجين'],
  ['تُصنع بعض النقود المعدنية من عنصر:','الفضة','الأكسجين','الهدروجين','الماء'],
  ['تتكوّن المواد من:','عنصر واحد أو عدة عناصر','عنصر واحد فقط دائمًا','لا تتكوّن من عناصر','الماء فقط'],
 ]},
 {sem:1, unit:'الوحدة الثانية', t:'أشياء لا أراها', q:[
  ['تتكوّن العناصر من أجزاء صغيرة جدًا لا تُرى بالعين المجردة تسمّى:','الذرات','الخلايا','الحبوب','القطرات'],
  ['أصغر جزء من المادة يحمل صفات العنصر نفسها هو:','الذرة','الخليط','المحلول','الحجر'],
  ['تحتوي نواة الذرة على:','بروتونات ونيوترونات','إلكترونات فقط','ماء','سكر'],
  ['الجسيم الذي يدور بسرعة كبيرة حول نواة الذرة هو:','الإلكترون','البروتون','النيوترون','الجزيء'],
  ['شحنة البروتون:','موجبة','سالبة','معتدلة'],
  ['شحنة الإلكترون:','سالبة','موجبة','معتدلة'],
  ['شحنة النيوترون:','معتدلة','موجبة','سالبة'],
  ['عندما تتحد ذرات مختلفة بعضها مع بعض تشكّل:','الجزيء','العنصر','الإلكترون','النواة'],
  ['تصبح شحنة الذرة سالبة إذا:','اكتسبت إلكترونات','فقدت إلكترونات','فقدت نيوترونات','بقيت كما هي'],
  ['يحوي العنصر الواحد:','نوعًا واحدًا فقط من الذرات','أنواعًا كثيرة من الذرات','جزيئات ماء','لا ذرات فيه'],
 ]},
 {sem:1, unit:'الوحدة الثانية', t:'أمزج ألواني', q:[
  ['الخليط يتكوّن من:','مادتين أو أكثر غير متحدتين','مادة واحدة فقط','عنصر واحد','ذرة واحدة'],
  ['مكوّنات الخليط بعد الخلط:','تحافظ على خاصياتها','تتغيّر خاصياتها تمامًا','تختفي','تصبح عنصرًا واحدًا'],
  ['عند وضع الزيت في الماء فإن الزيت:','يطفو على سطح الماء','يذوب ويختفي','يترسّب في الأسفل','يتحول إلى رمل'],
  ['عند وضع الرمل في الماء فإن الرمل:','يترسّب في أسفل الكأس','يطفو','يذوب تمامًا','يتبخّر'],
  ['الخليط الذي لا يمكن تمييز مكوّناته بالعين المجردة يسمّى:','خليطًا متجانسًا','خليطًا غير متجانس','عنصرًا','ذرة'],
  ['خليط الماء والرمل خليط:','غير متجانس','متجانس','عنصر','ذرة'],
  ['نفصل القطع الحديدية عن الخليط باستعمال:','المغناطيس','المصفاة','الماء','الملعقة'],
  ['نفصل الرمل عن الماء باستعمال:','المصفاة','المغناطيس','الميزان','المسطرة'],
  ['عند خلط اللون الأحمر مع اللون الأصفر نحصل على اللون:','البرتقالي','الأخضر','البنفسجي','الأسود'],
  ['عند خلط اللون الأحمر مع اللون الأزرق نحصل على اللون:','البنفسجي','البرتقالي','الأخضر','الأبيض'],
 ]},
 {sem:1, unit:'الوحدة الثانية', t:'مشروبي المفضل', q:[
  ['المحلول خليط:','يبدو كمادة واحدة لكنه يتألّف من عدة مواد','نرى كل مكوّناته بوضوح','يتكوّن من مادة واحدة فقط','لا يحتوي ماء أبدًا'],
  ['محلول الماء والملح خليط:','متجانس','غير متجانس','عنصر','ذرة'],
  ['في محلول الماء والسكر، الماء هو:','المذيب','المذاب','العنصر','الجزيء'],
  ['في محلول الماء والسكر، السكر هو:','المذاب','المذيب','المحلول','الماء'],
  ['عملية تحضير محلول الماء والسكر تسمّى:','الذوبان','الانصهار','التبخر','التجمّد'],
  ['من أمثلة المحاليل:','عصير الفواكه','الرمل والماء','الماء والزيت','الحصى والتراب'],
  ['يذوب السكر بسرعة أكبر في الماء:','الساخن','البارد','المتجمّد','الموضوع في الثلاجة'],
  ['تساعد عملية التحريك على:','زيادة سرعة الذوبان','إبطاء الذوبان','منع الذوبان','تحويل السكر إلى ملح'],
  ['تزداد سرعة الذوبان بازدياد كمية:','المذيب','الكؤوس الفارغة','الملاعق الفارغة'],
  ['المذيب في محلول الشوكولا والحليب هو:','الحليب','الشوكولا','الحليب والشوكولا معًا'],
 ]},
 {sem:1, unit:'الوحدة الثالثة', t:'استمرار الحياة', q:[
  ['التكاثر هو:','الزيادة العددية لأفراد النوع','نقصان عدد الأفراد','نمو الشعر','تغيّر لون الحيوان'],
  ['تتكاثر الطيور بـ:','البيوض','الولادة','البذور','الجذور'],
  ['تتكاثر الأبقار بـ:','الولادة','البيوض','البذور','الأزهار'],
  ['الترتيب الصحيح لدورة حياة الضفدع:','بيوض، شرغوف، ضفدع صغير، ضفدع بالغ','شرغوف، بيوض، ضفدع بالغ، ضفدع صغير','ضفدع بالغ، شرغوف، بيوض، ضفدع صغير','ضفدع صغير، بيوض، شرغوف، ضفدع بالغ'],
  ['صغير الضفدع الذي يعيش في الماء يسمّى:','الشرغوف','الجرو','المهر','العجل'],
  ['يسمّى صغير الحصان:','المهر','الجرو','الشرغوف','الفرخ'],
  ['يسمّى صغير الكلب:','الجرو','المهر','العجل','الشرغوف'],
  ['كيف يتغذّى صغير البقرة؟','بالرضاعة من أمه','يصطاد طعامه بنفسه','يأكل الحشرات','لا يأكل'],
  ['من الحيوانات التي تتكاثر بالبيوض:','السلحفاة','القطة','البقرة','الحصان'],
  ['من الحيوانات التي تتكاثر بالولادة:','القطة','الدجاجة','الضفدع','السلحفاة'],
 ]},
 {sem:1, unit:'الوحدة الثالثة', t:'لم نعد نراها', q:[
  ['الانقراض هو:','تناقص أعداد النوع دون تعويض حتى موت جميع أفراده','زيادة أعداد الحيوانات','هجرة الطيور','نوم الحيوانات في الشتاء'],
  ['من الحيوانات المنقرضة:','الديناصورات','القطط','الأبقار','العصافير'],
  ['تقول إحدى النظريات إن الديناصورات انقرضت لأن:','نيزكًا كبيرًا أثار غبارًا حجب ضوء الشمس فاشتد البرد','الطعام كان كثيرًا جدًا','الشمس صارت أقرب','البحار جفّت في يوم واحد'],
  ['من أسباب انقراض الحيوانات:','الصيد الجائر','إقامة المحميات الطبيعية','وضع قوانين للصيد','تربية الحيوانات المهددة'],
  ['انقرض طائر الدودو لأن:','جناحيه قصيران ووزنه ثقيل فسهل صيده','كان يطير بسرعة كبيرة','كان يعيش في الماء','كان صغيرًا جدًا'],
  ['وحيد القرن مهدّد بالانقراض بسبب:','صيده لاستخدام قرنه في العلاج','قلة الماء في البحر','كثرة الأشجار','البرد الشديد'],
  ['من الحلول لحماية الحيوانات من الانقراض:','إقامة المحميات الطبيعية','قطع الأشجار','الصيد الجائر','تلويث المياه'],
  ['المناطق التي تحميها الدولة لحماية الحيوانات والنباتات المهددة بالانقراض تسمّى:','المحميات الطبيعية','الأسواق','المصانع','الملاعب'],
  ['كيف نستدل على وجود حيوانات منقرضة؟','من بقايا هياكلها العظمية','من رؤيتها في الشارع','من أصواتها في الليل','لا يمكن ذلك أبدًا'],
  ['من الحيوانات المهدّدة بالانقراض في سورية:','السلحفاة الفراتية','الدجاجة','القطة','البقرة'],
 ]},
 {sem:1, unit:'الوحدة الثالثة', t:'تضيء الكون', q:[
  ['المصدر الرئيس لمعظم الطاقات على سطح الأرض هو:','الشمس','القمر','الماء','الرياح'],
  ['عند وضع قطعة شوكولا تحت أشعة الشمس الحارة فإنها:','تذوب','تتجمّد','تكبر','لا تتغيّر'],
  ['ذوبان الشوكولا تحت أشعة الشمس دليل على أن للشمس طاقة:','حرارية','حركية','صوتية','كامنة'],
  ['تحتاج النباتات للقيام بعملية التركيب الضوئي إلى طاقة الشمس:','الضوئية','الصوتية','الحركية','الكامنة'],
  ['سُمّي نبات عبّاد الشمس بهذا الاسم لأنه:','يتبع ضوء الشمس','ينمو في الليل','لا يحب الشمس','لونه أزرق'],
  ['لا نحتاج إلى إضاءة المصابيح نهارًا بفضل طاقة الشمس:','الضوئية','الحرارية','الحركية','الكامنة'],
  ['رمال الشاطئ دافئة في الصيف بفضل:','طاقة الشمس','موج البحر','الرياح الباردة','القمر'],
  ['طاقة الشمس صديقة للبيئة لأنها:','لا تنفث دخانًا يلوّث الهواء','تنفث دخانًا كثيرًا','تنفد بسرعة','تضرّ النباتات'],
  ['طاقة الشمس طاقة:','متجددة','غير متجددة','تنفد بعد يوم','لا فائدة منها'],
  ['استعمال الخلايا الشمسية للإنارة وتسخين الماء يوفّر الكهرباء، لذلك طاقة الشمس:','اقتصادية','غير اقتصادية','ملوّثة','خطيرة'],
 ]},
 {sem:1, unit:'الوحدة الثالثة', t:'دولاب الهواء', q:[
  ['تنشأ الرياح نتيجة:','اختلاف درجة الحرارة بين منطقتين على سطح الأرض','دوران القمر','نمو الأشجار','حركة الأسماك'],
  ['الهواء الساخن يرتفع نحو الأعلى لأنه:','أخفّ من الهواء البارد','أثقل من الهواء البارد','مليء بالماء','بارد جدًا'],
  ['تؤدي حرارة الشمس إلى:','تسخين الهواء فوق سطح اليابسة','تبريد الهواء فوق اليابسة','تجميد البحر','إيقاف الرياح'],
  ['ما الذي يحرّك القارب الشراعي؟','طاقة الرياح','ضوء القمر','الكهرباء الساكنة','المغناطيس'],
  ['نولّد الكهرباء من الرياح بتدوير:','عنفات هوائية متصلة بمولّدات','مصابيح','بالونات','أقلام'],
  ['طاقة الرياح طاقة:','حركية','كامنة فقط','ضوئية','صوتية'],
  ['يتبخّر الماء عندما:','يكتسب طاقة حرارية','يفقد طاقة حرارية','يوضع في الثلاجة','يُخلط بالملح'],
  ['يتكاثف بخار الماء على شكل قطرات عندما:','يفقد جزءًا من طاقته الحرارية','يكتسب طاقة حرارية','يتعرّض لأشعة الشمس','يُسخَّن'],
  ['المرحلة الأولى من مراحل دورة الماء في الطبيعة هي:','التبخر','التكاثف','التساقط','التجمّد'],
  ['دورة الماء هي انتقال الماء:','من الأرض إلى السحب ومن السحب إلى الأرض مجددًا','من البحر إلى البحر فقط','من الأشجار إلى الحيوانات','من السحب إلى القمر'],
 ]},
]);

})();
(function(){
/* العلوم الصف الخامس والسادس — من كتب ٢٠٢٥–٢٠٢٦ (الفصل الأول) */
function REPL(g, s, sem, lessons) { const old = (CUR[g][s] || []).filter(l => l.sem !== sem); CUR[g][s] = sem === 1 ? lessons.concat(old) : old.concat(lessons); }
REPL(5, 'sci', 1, [
 {sem:1, unit:'الوحدة الأولى', t:'نبض الحياة', q:[
  ['ممّ يتكوّن جهاز الدوران؟','القلب والدم والأوعية الدموية','القلب والرئتان فقط','المعدة والأمعاء','العظام والعضلات'],
  ['أين يقع القلب في جسمي؟','في التجويف الصدري بين الرئتين','في البطن','في الرأس','في الرقبة'],
  ['ما شكل القلب؟','مخروطي','مربّع','مستطيل','دائري مسطّح'],
  ['حجم القلب تقريبًا بحجم:','قبضة اليد','الرأس','حبة العدس','الكرة'],
  ['كم جوفًا في قلب الإنسان؟','أربعة أجواف','جوفان','ثلاثة أجواف','جوف واحد'],
  ['الجوفان الصغيران في القلب يُسمّيان:','الأذينتين','البطينين','الرئتين','الصمّامين'],
  ['ما الذي يسمح للدم بالمرور من الأذين إلى البطين ولا يسمح له بالعودة؟','الصمّام (الدسام)','الحاجز العضلي','الشريان','النبض'],
  ['عضلة القلب عضلة:','لا إرادية','إرادية نتحكّم بها','عظمية','غير موجودة'],
  ['ماذا يحدث لعدد ضربات القلب بعد الجري وبذل الجهد؟','يزداد','ينقص','يتوقف','يبقى كما هو'],
  ['ما الذي يفصل بين القسم الأيمن والقسم الأيسر من القلب؟','حاجز عضلي','عظمة','صمّام','شريان']
 ]},
 {sem:1, unit:'الوحدة الأولى', t:'شبكة الحياة', q:[
  ['الأوعية الدموية هي:','أنابيب ذات جدران عضلية تنقل الدم في الجسم','عظام صغيرة','أعصاب الجسم','أجزاء من المعدة'],
  ['الوعاء الدموي الذي ينقل الدم من القلب إلى أنحاء الجسم هو:','الشريان','الوريد','الشعيرة','الصمّام'],
  ['الوعاء الدموي الذي ينقل الدم من أنحاء الجسم إلى القلب هو:','الوريد','الشريان','البطين','الأذين'],
  ['أين تتم المبادلات الغذائية والغازية؟','في الشعيرات الدموية','في الشريان الأبهر','في الأذين','في الصمّام'],
  ['ما لون الدم في الشريان الأبهر؟','أحمر قانئ','أحمر قاتم','أزرق','أبيض'],
  ['ما لون الدم في الشريان الرئوي؟','قاتم','قانئ','أبيض','شفاف'],
  ['الأوردة الرئوية تحمل دمًا:','قانئًا','قاتمًا','بلا أكسجين أبدًا','أبيض'],
  ['من أمثلة الأوردة:','الوريدان الأجوفان','الشريان الأبهر','الشريان الرئوي','البطين الأيسر'],
  ['يشبه القلب في عمله:','المضخّة','المصباح','المرآة','الميزان'],
  ['كم عدد الأوردة الرئوية؟','أربعة','اثنان','واحد','ثلاثة']
 ]},
 {sem:1, unit:'الوحدة الأولى', t:'أنقل، أحمي، وأغذّي', q:[
  ['ممّ يتكوّن الدم؟','كريات حمراء وبيضاء وصفيحات دموية ومصوّرة (بلازما)','كريات حمراء فقط','ماء وسكر فقط','عظام وعضلات'],
  ['ما الذي يعطي الدم لونه الأحمر؟','الكريات الحمراء','الكريات البيضاء','الصفيحات الدموية','المصوّرة'],
  ['ما وظيفة الكريات البيضاء؟','الدفاع عن الجسم ضد الأمراض','إعطاء الدم لونه','نقل الغذاء المهضوم','تخثّر الدم'],
  ['ما وظيفة الصفيحات الدموية؟','تخثّر الدم وإيقاف النزف','نقل الأكسجين','قتل الجراثيم','نقل الفضلات'],
  ['ما الذي ينقل الغذاء المهضوم والفضلات في الدم؟','المصوّرة (البلازما)','الكريات البيضاء','الصفيحات','الصمّام'],
  ['الكريات الحمراء تنقل غاز الأكسجين وغاز:','ثنائي أكسيد الكربون','الهيدروجين','النيتروجين فقط','الهيليوم'],
  ['لماذا يزداد عدد الكريات البيضاء في أثناء المرض؟','لتدافع عن الجسم وتقضي على الجراثيم','لتعطي الدم لونًا أغمق','لتنقل الغذاء','لتوقف النزف'],
  ['أيّهما أكثر عددًا في الدم؟','الكريات الحمراء','الكريات البيضاء','عددهما متساوٍ','لا توجد كريات حمراء'],
  ['التبرّع بالدم:','واجب إنساني ووطني يُنقذ حياة الناس','يضرّ المتبرّع دائمًا','لا فائدة منه','ممنوع'],
  ['الدم سائل لزج لونه:','أحمر','أخضر','أزرق','شفاف']
 ]},
 {sem:1, unit:'الوحدة الأولى', t:'رحلة في جسمي', q:[
  ['كم دورة يسير فيها الدم في الجسم؟','دورتان: صغرى وكبرى','دورة واحدة','ثلاث دورات','أربع دورات'],
  ['الدورة الدموية الصغرى تكون بين:','القلب والرئتين','القلب وجميع أنحاء الجسم','المعدة والأمعاء','الدماغ واليدين'],
  ['الدورة الدموية الكبرى تكون بين:','القلب ومختلف أنحاء الجسم','القلب والرئتين فقط','الرئتين والمعدة','الكليتين والكبد'],
  ['تُسمّى الدورة الدموية الصغرى أيضًا:','الدورة الرئوية','الدورة الهضمية','الدورة العصبية','الدورة العظمية'],
  ['في الدورة الصغرى يدفع البطين الأيمن الدم القاتم إلى الرئتين عبر:','الشريان الرئوي','الشريان الأبهر','الأوردة الرئوية','الوريدين الأجوفين'],
  ['يعود الدم القانئ من الرئتين إلى القلب عبر:','الأوردة الرئوية','الشريان الرئوي','الشريان الأبهر','الشعيرات فقط'],
  ['في الرئتين يأخذ الدم غاز الأكسجين ويتخلّص من غاز:','ثنائي أكسيد الكربون','الأكسجين','النيتروجين','الهيدروجين'],
  ['يدفع البطين الأيسر الدم القانئ إلى الجسم عبر:','الشريان الأبهر','الشريان الرئوي','الأوردة الرئوية','الوريد الأجوف'],
  ['مَن العالِم العربي مكتشف الدورة الدموية الصغرى؟','ابن النفيس','ابن الهيثم','ابن سينا','الخوارزمي'],
  ['مَن مكتشف الدورة الدموية الكبرى؟','وليام هارفي','ابن النفيس','نيوتن','أديسون']
 ]},
 {sem:1, unit:'الوحدة الأولى', t:'وقاية وحماية', q:[
  ['ما المناعة؟','قدرة الجسم على مقاومة الأمراض','نوع من الطعام','مرض يصيب القلب','عضو في الجسم'],
  ['المناعة نوعان:','طبيعية ومكتسبة','قوية وضعيفة','داخلية وخارجية','حمراء وبيضاء'],
  ['المناعة التي يكتسبها الجسم بعد المرض أو بعد أخذ اللقاح هي:','مناعة مكتسبة','مناعة طبيعية','لا تُسمّى مناعة','مناعة دائمة للجميع'],
  ['يُعدّ اللقاح وسيلة لـ:','الوقاية من الأمراض','زيادة الوزن','علاج الكسور','تقوية النظر'],
  ['مَن يدافع عن جسمي ضد الأمراض؟','الكريات البيضاء','الكريات الحمراء','الصفيحات','الصمّامات'],
  ['أيّ عمل يحافظ على صحة جهاز الدوران؟','ممارسة الرياضة بانتظام','التدخين','الإكثار من السكّريات','الجلوس طوال اليوم'],
  ['ارتداء الملابس الضيّقة والوقوف الطويل قد يسبّب مرض:','الدوالي','الزكام','تسوّس الأسنان','قصر النظر'],
  ['عند جرح بسيط نقوم بـ:','تنظيف الجرح وتعقيمه وتضميده','تركه دون تنظيف','وضع التراب عليه','حكّه'],
  ['ماذا نفعل إذا كان الجرح عميقًا؟','نعقّمه ونضغط عليه ثم نقصد الطبيب','نتركه','نغسله بالسكر','نلعب حتى يتوقّف'],
  ['مرض الكزاز ينتج عن:','تلوّث الجروح بالجراثيم','قلّة النوم','شرب الماء','ممارسة الرياضة']
 ]},
 {sem:1, unit:'الوحدة الأولى', t:'تتشابه وتختلف', q:[
  ['بماذا تتشابه الفقاريات جميعها؟','بوجود جهاز دوران من قلب وأوعية دموية ودم','بعدد أجواف القلب','بأنها تعيش في الماء','بأنها تطير'],
  ['بماذا تختلف أجهزة الدوران عند الفقاريات؟','بعدد أجواف القلب','بوجود الدم','بوجود القلب','بوجود الأوعية الدموية'],
  ['كم عدد أجواف القلب عند الأسماك؟','جوفان','ثلاثة','أربعة','جوف واحد'],
  ['قلب الأسماك يتكوّن من:','أذين واحد وبطين واحد','أذينتين وبطينين','أذينتين وبطين','ثلاثة بطينات'],
  ['قلب الضفدع يتكوّن من:','أذينتين وبطين واحد','أذين وبطين','أذينتين وبطينين','بطين واحد فقط'],
  ['قلب الزواحف يتكوّن من أذينتين وبطين:','مقسوم بحاجز غير مكتمل','مقسوم بحاجز كامل','بلا بطين','ثلاثة بطينات'],
  ['قلب الطيور يتكوّن من:','أذينتين وبطينين','أذين وبطين','أذينتين وبطين','ثلاثة أجواف'],
  ['كم جوفًا في قلب الثدييات؟','أربعة','ثلاثة','اثنان','خمسة'],
  ['من الحيوانات التي قلبها أربعة أجواف:','الأرنب','السمك','الضفدع','الضبّ'],
  ['يسير الدم عند الفقاريات في:','الشرايين والأوردة والشعيرات الدموية','العظام','المعدة','الرئتين فقط']
 ]},
 {sem:1, unit:'الوحدة الأولى', t:'المسافة/الزمن', q:[
  ['المسافة هي:','طول المسار الذي يقطعه الجسم المتحرّك','الوقت الذي يستغرقه الجسم','وزن الجسم','لون الجسم'],
  ['السرعة الوسطى = ؟','المسافة ÷ الزمن','الزمن ÷ المسافة','المسافة × الزمن','المسافة + الزمن'],
  ['في الزمن نفسه، المتسابق الأسرع هو الذي يقطع مسافة:','أطول','أقصر','مساوية للصفر','لا علاقة'],
  ['في المسافة نفسها، المتسابق الأسرع هو الذي يصل بزمن:','أقل','أكثر','مساوٍ للأبطأ','لا يصل'],
  ['ما وحدة قياس السرعة في الجملة الدولية؟','m/s','km','s','m'],
  ['ما وحدة قياس الزمن في الجملة الدولية؟','الثانية s','المتر m','الكيلوغرام','الساعة h'],
  ['رياضي قطع 40 m في زمن 20 s، فما سرعته الوسطى؟','2 m/s','20 m/s','60 m/s','800 m/s'],
  ['السرعة اللحظية هي:','سرعة الجسم في لحظة معيّنة','المسافة الكلية','الزمن الكلي','سرعة الضوء'],
  ['ماذا يدلّ مؤشّر عدّاد السرعة في السيارة عند الصفر؟','أن السيارة متوقّفة','أنها سريعة جدًا','أنها تتحرّك ببطء','أن الوقود انتهى'],
  ['لماذا نرى البرق قبل أن نسمع صوت الرعد؟','لأن الضوء أسرع من الصوت','لأن الصوت أسرع','لأن البرق يحدث أولًا دائمًا','لأن الأذن بطيئة']
 ]},
 {sem:1, unit:'الوحدة الثانية', t:'نافذة على العالم', q:[
  ['ما العضو المسؤول عن حاسة الرؤية؟','العين','الأذن','الأنف','اللسان'],
  ['ما وظيفة الحاجب؟','حماية العين من العرق','تحريك كرة العين','إفراز الدمع','تكوين الخيال'],
  ['الجفنان والأهداب تحمي العين من:','الأجسام الغريبة وأشعة الشمس','العرق فقط','الصوت','الحرارة'],
  ['ما وظيفة الغدّتين الدمعيّتين؟','إفراز الدمع الذي يرطّب العين وينظّفها','تحريك العين','رؤية الألوان','حماية العين من العرق'],
  ['ما وظيفة العضلات المحرّكة للعين؟','تحريك كرة العين في جميع الاتجاهات','إفراز الدمع','حماية العين من الغبار','تكوين الصورة'],
  ['ما طبقات جدار كرة العين من الخارج إلى الداخل؟','الصلبة ثم المشيمية ثم الشبكية','الشبكية ثم المشيمية ثم الصلبة','المشيمية ثم الصلبة ثم الشبكية','الصلبة ثم الشبكية ثم المشيمية'],
  ['الطبقة البيضاء الخارجية للعين هي:','الصلبة','الشبكية','المشيمية','الجسم البلوري'],
  ['يقوم الجسم البلوري بدور عدسة ترسم الخيال على الشبكية:','صغيرًا ومقلوبًا','كبيرًا ومعتدلًا','ملوّنًا وكبيرًا','بلا شكل'],
  ['ينتقل التنبيه من الشبكية إلى المخ بوساطة:','العصب البصري','الحاجب','الدمع','الجفن'],
  ['مَن يصحّح الخيال ويفسّره فنشعر بالرؤية؟','المخ','الجفن','الحاجب','الغدّة الدمعية']
 ]},
 {sem:1, unit:'الوحدة الثانية', t:'أبيض وأسود', q:[
  ['الوسط الذي يسمح بمرور الضوء وبرؤية الأجسام خلفه بوضوح هو:','الوسط الشفاف','الوسط العاتم','الوسط نصف الشفاف','لا يوجد'],
  ['الوسط الذي لا يسمح بمرور الضوء هو:','الوسط العاتم','الوسط الشفاف','الوسط نصف الشفاف','الهواء'],
  ['الوسط نصف الشفاف:','يسمح بمرور الضوء ولا نرى خلفه بوضوح','لا يسمح بمرور الضوء','نرى خلفه بوضوح تام','لا يوجد في الطبيعة'],
  ['من الأوساط الشفافة:','الماء النقي','الخشب','الحديد','الحليب'],
  ['من الأوساط العاتمة:','الحديد','الزجاج المصقول','الهواء','الماء النقي'],
  ['من الأوساط نصف الشفافة:','المناديل الورقية','الحديد','الخشب','الهواء النقي'],
  ['ماذا يحدث للماء الشفاف عندما نضيف إليه الكثير من الحبر الأزرق؟','يصبح عاتمًا','يبقى شفافًا تمامًا','يصبح مرآة','يتبخّر'],
  ['يمكن تحويل الجسم الشفاف إلى نصف شفاف وعاتم بزيادة:','كثافته','لونه الأبيض','حرارته فقط','سرعته'],
  ['يتحوّل الهواء من وسط شفاف إلى نصف شفاف بوجود:','الضباب','الشمس','الريح الخفيفة','الليل'],
  ['ورق الألمنيوم يُصنَّف ضمن الأجسام:','العاتمة','الشفافة','نصف الشفافة','المضيئة']
 ]},
 {sem:1, unit:'الوحدة الثانية', t:'منظار الصورة', q:[
  ['العدسة جسم شفاف مصنوع من:','الزجاج أو البلاستيك','الخشب','الحديد','الورق المقوّى'],
  ['للعدسات نوعان هما:','محدّبة ومقعّرة','كبيرة وصغيرة','بيضاء وسوداء','مستوية ومربعة'],
  ['العدسة المحدّبة:','رقيقة الحواف وسميكة الوسط','سميكة الحواف ورقيقة الوسط','متساوية السماكة','عاتمة'],
  ['العدسة المقعّرة:','سميكة الحواف ورقيقة الوسط','رقيقة الحواف وسميكة الوسط','مصنوعة من الحديد','لا يمرّ الضوء منها'],
  ['العدسة المحدّبة تُسمّى مقرّبة لأنها:','تجمّع الأشعة الضوئية','تفرّق الأشعة الضوئية','تعكس الضوء كله','تمنع الضوء'],
  ['العدسة المقعّرة تُسمّى مبعّدة لأنها:','تفرّق الأشعة الضوئية','تجمّع الأشعة الضوئية','تعكس الضوء','تمتصّ الضوء'],
  ['عندما يمرّ الضوء في العدسة فإنه:','ينكسر','ينعكس كله','يتوقّف','يختفي'],
  ['العدسة المكبّرة أداة نستخدمها لـ:','رؤية الأجسام الصغيرة بوضوح','رؤية الأجسام البعيدة جدًا','تصغير الكلمات','حماية العين'],
  ['أيّ جهاز تدخل العدسات في صناعته؟','المجهر الضوئي','الملعقة','المسطرة','الكرسي'],
  ['لماذا قد تسبّب الزجاجات الفارغة في الغابات الحرائق؟','لأنها تعمل كعدسة محدّبة تجمّع أشعة الشمس','لأنها تفرّق الضوء','لأنها عاتمة','لأنها باردة']
 ]},
 {sem:1, unit:'الوحدة الثانية', t:'عيني على عيني', q:[
  ['ماذا تصحّح النظارات الطبية؟','بعض عيوب الرؤية','لون العين','حجم العين','السمع'],
  ['من مشكلات البصر الشائعة:','مدّ البصر وقصر البصر','الزكام','الصداع فقط','تسوّس الأسنان'],
  ['هل يمكن للتلاميذ تبديل نظاراتهم الطبية فيما بينهم؟','لا، لأن كل نظارة مناسبة لعيون صاحبها','نعم دائمًا','نعم إن كانت بالشكل نفسه','نعم في المدرسة فقط'],
  ['أيّ عمل يحافظ على سلامة عيني؟','استخدام إضاءة جيدة عند القراءة','القراءة في الظلام','النظر إلى الشمس مباشرة','الجلوس قريبًا جدًا من التلفاز'],
  ['يجب أن أجلس عن التلفاز:','على مسافة مناسبة','ملاصقًا له','خلفه','في غرفة أخرى'],
  ['أمسح عيني بـ:','منديل نظيف','يدي المتّسخة','قطعة قماش متّسخة','التراب'],
  ['أراجع طبيب العيون:','بشكل دوري','أبدًا','مرة كل عشر سنوات','عندما أفقد البصر فقط'],
  ['من الأعمال التي تضرّ بالعين:','النظر إلى لحام الحدّادين مباشرة','غسل الوجه بالماء يوميًا','النوم الكافي','الإضاءة الجيدة'],
  ['كم ساعة أنام يوميًا للحفاظ على صحة عيني حسب الكتاب؟','ثماني ساعات','ساعتين','أربع ساعات','لا أنام'],
  ['أغسل وجهي بالماء:','يوميًا','مرة في الشهر','لا أغسله','مرة في السنة']
 ]},
 {sem:1, unit:'الوحدة الثانية', t:'ألوان', q:[
  ['انعكاس الضوء هو:','ارتداد الضوء وفق اتجاه محدّد','مرور الضوء عبر الزجاج','انكسار الضوء في العدسة','اختفاء الضوء'],
  ['الانعكاس المنتظم يحدث عندما يسقط الضوء على سطح:','مصقول','خشن','عاتم غير مصقول','شفاف فقط'],
  ['الانعكاس غير المنتظم ترتدّ فيه الأشعة في:','عدّة اتجاهات','اتجاه واحد','لا ترتدّ','اتجاهين فقط'],
  ['أين يحدث الانعكاس المنتظم؟','على سطح المرآة المستوية','على سطح الطاولة الخشبية غير المصقولة','على الجدار الإسمنتي','على الورق المقوّى'],
  ['لماذا أرى صورتي في المرآة ولا أراها على الجدار الإسمنتي؟','لأن المرآة سطح مصقول تعكس الضوء انعكاسًا منتظمًا','لأن الجدار شفاف','لأن المرآة عاتمة','لأن الجدار يعكس الضوء انعكاسًا منتظمًا'],
  ['الشعاع الصادر من المنبع الضوئي إلى المرآة يُسمّى:','الشعاع الوارد','الشعاع المنعكس','الناظم','نقطة الورود'],
  ['الشعاع الصادر عن المرآة من نقطة الورود يُسمّى:','الشعاع المنعكس','الشعاع الوارد','الناظم','الشعاع المنكسر'],
  ['الناظم هو:','العمود المقام من نقطة الورود على سطح المرآة','الشعاع الوارد','سطح المرآة','المنبع الضوئي'],
  ['الشعاع الوارد والشعاع المنعكس والناظم تقع جميعها:','في مستوٍ واحد','في مستويات مختلفة','خارج المرآة دائمًا','في الظلام'],
  ['العالِم العربي الذي فسّر رؤية الأشياء نتيجة سقوط الضوء عليها ثم انعكاسه هو:','الحسن بن الهيثم','ابن النفيس','ابن سينا','جابر بن حيان']
 ]},
 {sem:1, unit:'الوحدة الثالثة', t:'أتحرّك بمرونة', q:[
  ['الحيوانات التي ليس لها عمود فقري وهيكل عظمي تُسمّى:','اللافقاريات','الفقاريات','الثدييات','الطيور'],
  ['تشكّل اللافقاريات نحو 93% من الحيوانات الموجودة على:','الكرة الأرضية','القمر','الصحراء فقط','البحر فقط'],
  ['من شعب اللافقاريات:','مفصليات الأرجل','الثدييات','الطيور','الزواحف'],
  ['ينتمي نجم البحر إلى:','شوكيات الجلد','الرخويات','مفصليات الأرجل','معائيات الجوف'],
  ['ينتمي الأخطبوط (له ثمانية أذرع) إلى:','الرخويات','الإسفنجيات','شوكيات الجلد','الديدان'],
  ['تنتمي النحلة التي تصنع العسل إلى:','مفصليات الأرجل','الرخويات','الديدان','الإسفنجيات'],
  ['كم رجلًا للجرادة؟','ستّ أرجل','ثماني أرجل','أربع أرجل','لا أرجل لها'],
  ['أيّ مما يأتي لا يُعدّ من اللافقاريات؟','الأسماك','الإسفنجيات','الرخويات','معائيات الجوف'],
  ['تنتمي دودة الأرض إلى شعبة:','الديدان','الرخويات','شوكيات الجلد','الإسفنجيات'],
  ['حيوان رخوي يعيش داخل صدفة هو:','الحلزون','الجرادة','العنكبوت','النملة']
 ]},
 {sem:1, unit:'الوحدة الثالثة', t:'هيكلي يدعمني', q:[
  ['الحيوانات التي لها عمود فقري وهيكل عظمي تُسمّى:','الفقاريات','اللافقاريات','الإسفنجيات','الرخويات'],
  ['ما الذي يدعم جسم الفقاريات ويساعدها في الحركة؟','الهيكل العظمي','الصدفة','الريش','الجلد فقط'],
  ['تُصنَّف الفقاريات في خمسة صفوف هي:','الأسماك والبرمائيات والزواحف والطيور والثدييات','الحشرات والديدان والرخويات والإسفنج والطيور','الأسماك والحشرات فقط','الثدييات والإسفنجيات'],
  ['ينتمي الضفدع إلى صف:','البرمائيات','الزواحف','الأسماك','الطيور'],
  ['تنتمي السحلية إلى صف:','الزواحف','البرمائيات','الثدييات','الطيور'],
  ['تنتمي النعامة إلى صف:','الطيور','الثدييات','الزواحف','الأسماك'],
  ['فقاريات جسمها مغطى بالشعر وتلد وترضع صغارها هي:','الثدييات','الطيور','الزواحف','الأسماك'],
  ['فقاريات تعيش في الماء وجسمها مغطى بالحراشف ولها زعانف هي:','الأسماك','الطيور','الثدييات','البرمائيات'],
  ['فقاريات تتكاثر بالبيوض وجسمها مغطى بالريش هي:','الطيور','الأسماك','الثدييات','البرمائيات'],
  ['حيوان يقضي جزءًا من حياته في الماء وجزءًا على اليابسة ينتمي إلى:','البرمائيات','الطيور','الثدييات','الأسماك']
 ]},
 {sem:1, unit:'الوحدة الثالثة', t:'ثروة تعيش معي', q:[
  ['من أهمية الثروة الحيوانية:','توفير الغذاء','تلويث البيئة','نشر الأمراض','لا فائدة لها'],
  ['تُستخدم جلود الحيوانات وفروها وريشها في:','الصناعة','الطهي فقط','إطفاء الحرائق','لا تُستخدم'],
  ['تُسهم الثروة الحيوانية في زيادة الدخل القومي من خلال:','بيعها أو بيع منتجاتها','إهمالها','صيدها الجائر','قطع الأشجار'],
  ['ماذا لاحظنا في أعداد الأغنام في سورية بين عامي 2007 و2015؟','تناقصت','تزايدت كثيرًا','بقيت ثابتة','انقرضت'],
  ['من طرائق المحافظة على الثروة الحيوانية:','إعطاء الحيوانات اللقاح لحمايتها من الأمراض','الصيد الجائر','قطع الأشجار','الزحف العمراني'],
  ['من الطرائق الحديثة لحماية الثروة الحيوانية:','حفظ الأصول الوراثية','بيع جميع الحيوانات','إهمال الحيوانات المريضة','هدم الحظائر'],
  ['يهدّد الثروة الحيوانية:','الصيد الجائر','الرعاية البيطرية','التلقيح','زراعة المراعي'],
  ['لماذا يجب وقف الزحف العمراني وقطع الأشجار؟','للمحافظة على بيئة الحيوانات','لزيادة التلوّث','لأنها تفيد الحيوانات','لتقليل الغذاء'],
  ['تُسهم الحيوانات في تنشيط:','السياحة والتنقّل','الحرائق','الأمراض','التصحّر'],
  ['مَن ينبغي أن يحافظ على الثروة الحيوانية؟','جميعنا','الأطباء فقط','لا أحد','الأطفال فقط']
 ]},
 {sem:1, unit:'الوحدة الثالثة', t:'التبدّل', q:[
  ['التجمّد هو تحوّل المادة من الحالة السائلة إلى الحالة:','الصلبة','الغازية','السائلة','لا يتحوّل'],
  ['يحدث التجمّد عندما تفقد المادة:','طاقة حرارية','وزنها','لونها','شكلها فقط'],
  ['الانصهار هو تحوّل المادة من الحالة الصلبة إلى الحالة:','السائلة','الغازية','الصلبة','البلورية'],
  ['التبخّر هو تحوّل المادة من الحالة السائلة إلى الحالة:','الغازية','الصلبة','السائلة','المتجمّدة'],
  ['التكاثف هو تحوّل المادة من الحالة الغازية إلى الحالة:','السائلة','الصلبة','الغازية','الهوائية'],
  ['تتشكّل قطرات الماء على السطح الخارجي لكأس العصير البارد بسبب:','تكاثف بخار الماء الجوي','تسرّب العصير','تبخّر الثلج','انصهار الكأس'],
  ['عند وضع الكحول الطبي على يدي أحسّ بالبرودة لأنه:','يتبخّر مكتسبًا حرارة من يدي','يتجمّد','يتكاثف','ينصهر'],
  ['ما العمليتان اللتان تكتسب فيهما المادة طاقة حرارية؟','الانصهار والتبخّر','التجمّد والتكاثف','التجمّد فقط','التكاثف فقط'],
  ['جفاف الخضراوات الورقية في فصل الصيف مثال على:','التبخّر','التجمّد','التكاثف','الانصهار'],
  ['لماذا يجب ألّا نملأ قارورة الماء كاملة عند وضعها في الثلاجة؟','لأن الماء يزداد حجمه عند التجمّد','لأن الماء يتبخّر','لأن الماء ينصهر','لأن الثلاجة تسخّن الماء']
 ]},
 {sem:1, unit:'الوحدة الثالثة', t:'كيف تتغيّر؟', q:[
  ['التغيّر الكيميائي هو تغيّر ينتج عنه:','موادّ جديدة تختلف عن الموادّ الأصلية','تغيّر في الشكل فقط','تغيّر في الحالة فقط','لا شيء'],
  ['ماذا يحدث للبالون عند خلط الخلّ مع مسحوق الخميرة؟','ينتفخ بسبب انطلاق غاز','يتجمّد','يتبخّر','لا يتغيّر'],
  ['انتفاخ البالون يدلّ على وجود:','غاز','ماء','ثلج','ضوء'],
  ['من دلائل حدوث التغيّر الكيميائي:','انطلاق الغاز وتغيّر اللون','تغيّر الشكل فقط','انصهار الثلج','تقطيع الورق'],
  ['ما الذي ينبعث من الخشب عند احتراقه؟','الضوء والحرارة','الماء فقط','الثلج','لا شيء'],
  ['تغيّر لون ثمار الموز عند نضجها دليل على:','تغيّر كيميائي','تغيّر فيزيائي','تجمّد','تكاثف'],
  ['أيّ مما يأتي تغيّر كيميائي؟','احتراق الخشب','تقطيع الورق','انصهار الحديد','كسر البيض'],
  ['أيّ مما يأتي تغيّر فيزيائي؟','تجمّد الماء','احتراق الورق','تعفّن الخبز','قلي البيض'],
  ['لماذا يزداد حجم العجين بعد إضافة الخميرة؟','بسبب تشكّل غاز ينفخ العجين','لأنه يتجمّد','لأن الماء يتبخّر منه','لأنه يفقد وزنه'],
  ['عند احتراق الشمعة يحدث:','تحوّلان أحدهما فيزيائي والآخر كيميائي','تحوّل فيزيائي فقط','تحوّل كيميائي فقط','لا يحدث أي تحوّل']
 ]},
 {sem:1, unit:'الوحدة الرابعة', t:'في حديقتي', q:[
  ['ما العضو المسؤول عن التكاثر في النباتات الزهرية؟','الزهرة','الجذر','الساق','الورقة'],
  ['تتألّف الزهرة من أربعة أقسام هي:','الكأس والتويج والأسدية والمدقّة','الجذر والساق والورقة والثمرة','البذرة والثمرة والجذر والورقة','الخيط والمئبر والقلم فقط'],
  ['الأوراق الخضراء في الزهرة تُسمّى:','السبلات (الكأس)','البتلات','الأسدية','المدقّة'],
  ['الأوراق الملوّنة الزاهية في الزهرة تُسمّى:','البتلات (التويج)','السبلات','الأسدية','البذيرات'],
  ['تتكوّن السداة من:','الخيط والمئبر','المبيض والقلم','الميسم والقلم','الكأس والتويج'],
  ['أين توجد حبات الطلع؟','في المئبر','في المبيض','في الخيط','في الكأس'],
  ['تتألّف المدقّة من:','المبيض والقلم والميسم','الخيط والمئبر','السبلات والبتلات','الجذر والساق'],
  ['أين توجد البذيرات؟','في المبيض','في المئبر','في البتلات','في الخيط'],
  ['ما وظيفة الكأس والتويج؟','حماية باقي أجزاء الزهرة','صنع حبات الطلع','امتصاص الماء','تكوين البذيرات'],
  ['الوردة التي سُمّيت باسم عاصمة سورية هي:','الوردة الشامية (الدمشقية)','الزنبق','الياسمين','القرنفل']
 ]},
 {sem:1, unit:'الوحدة الرابعة', t:'بستاني الصغير', q:[
  ['تُصنَّف النباتات إلى نوعين:','بذرية ولابذرية','كبيرة وصغيرة','خضراء وصفراء','مثمرة وعالية'],
  ['النباتات البذرية هي نباتات تتكاثر بـ:','الأزهار','الأبواغ','الأوراق فقط','الجذور فقط'],
  ['عضو التكاثر في النباتات اللابذرية هو:','الأبواغ','الزهرة','الثمرة','البذرة'],
  ['من النباتات اللابذرية:','السرخس','المشمش','التفاح','الفول'],
  ['أين توجد الأبواغ في نبات السرخس؟','على الوجه السفلي للورقة','داخل الثمرة','في الجذر','في الزهرة'],
  ['تُقسَم النباتات البذرية إلى:','مغلّفات البذور وعاريات البذور','أحادية وثلاثية','سرخسيات وطحالب','لابذرية وبذرية'],
  ['في مغلّفات البذور يكون المبيض:','مغلقًا والبذيرات داخله','مفتوحًا والبذيرات عارية','غير موجود','على الجذر'],
  ['من النباتات عاريات البذور:','الصنوبر','التفاح','الفول','القمح'],
  ['عضو التكاثر في عاريات البذور هو:','زهرة بشكل مخروط','الأبواغ','زهرة ملوّنة زاهية','الجذر'],
  ['يُعدّ نبات التفاح من:','مغلّفات البذور','عاريات البذور','النباتات اللابذرية','السرخسيات']
 ]},
 {sem:1, unit:'الوحدة الرابعة', t:'بذوري تتنوّع', q:[
  ['تُقسَم النباتات مغلّفات البذور إلى:','أحادية الفلقة وثنائية الفلقة','بذرية ولابذرية','عاريات ومغلّفات','سرخسيات وصنوبريات'],
  ['البذرة التي تنفصل إلى نصفين هي بذرة:','ثنائية الفلقة','أحادية الفلقة','لابذرية','بوغية'],
  ['من النباتات أحادية الفلقة:','القمح','الفول','القرع','المشمش'],
  ['من النباتات ثنائية الفلقة:','الفول','الذرة','القمح','الرز'],
  ['تُعدّ الذرة من النباتات:','أحادية الفلقة','ثنائية الفلقة','اللابذرية','عاريات البذور'],
  ['النباتات البذرية هي الأكثر انتشارًا، وتمثّل نحو:','90% من النباتات','10% من النباتات','50% من النباتات','1% من النباتات'],
  ['نبات الفاصولياء نبات:','بذري يشكّل ثمارًا','لابذري يتكاثر بالأبواغ','لا يشكّل ثمارًا','بلا أزهار'],
  ['لماذا يُعدّ السرخس من النباتات اللابذرية؟','لأنه يتكاثر بالأبواغ ولا يكوّن أزهارًا','لأنه يكوّن بذورًا كثيرة','لأنه يعيش في الصحراء','لأنه شجرة كبيرة'],
  ['بذور القطن تُعدّ من:','ثنائيات الفلقة','أحاديات الفلقة','الأبواغ','عاريات البذور'],
  ['يُعدّ الورد الجوري من النباتات:','البذرية','اللابذرية','السرخسية','التي لا تزهر']
 ]},
 {sem:1, unit:'الوحدة الرابعة', t:'نبتتي ثروتي', q:[
  ['استمرارية حياة النبات الأخضر:','ضرورية لحياة الكائنات الحية','غير مهمة','تضرّ الإنسان','تخصّ النبات فقط'],
  ['من طرائق المحافظة على استمرارية النبات:','التقليم والعناية بالنبات','قطع الأشجار','الرعي الجائر','حرق الغابات'],
  ['إنشاء مصدّات للرياح يساعد على:','حماية النبات','زيادة التصحّر','قطع الأشجار','تلويث التربة'],
  ['الدورة الزراعية هي:','زراعة الأرض بمحاصيل مختلفة وبشكل متعاقب','زراعة المحصول نفسه كل عام','ترك الأرض دون زراعة','زراعة الأشجار فقط'],
  ['من فوائد الدورة الزراعية:','مقاومة الآفات الزراعية','زيادة التصحّر','إفقار التربة','قتل النباتات'],
  ['في دورة القمح الثنائية يتعاقب القمح مع:','البقوليات','الصنوبر','السرخس','الأعشاب الضارة'],
  ['تُسهم البقوليات في إثراء التربة بالمواد المغذية عن طريق تثبيت:','النتروجين','الحديد','الذهب','الرمل'],
  ['من الحلول التي تحدّ من الرعي الجائر والتصحّر:','إنشاء محميات طبيعية','قطع الأشجار','زيادة الرعي','حرق الأعشاب'],
  ['اليوم العالمي لمكافحة التصحّر يصادف:','17 حزيران','1 كانون الثاني','10 آذار','25 كانون الأول'],
  ['التشجير يعني:','زراعة الأشجار','قطع الأشجار','حرق الأشجار','تقليم الأزهار فقط']
 ]},
 {sem:1, unit:'الوحدة الرابعة', t:'حيث نعيش', q:[
  ['التربة هي:','الطبقة السطحية للأرض','طبقة الهواء','ماء البحر','الصخر الصلب في الأعماق'],
  ['تتشكّل التربة من:','تفتّت الصخور بتأثير عوامل عديدة','الماء فقط','الهواء','البلاستيك'],
  ['من فوائد التربة للنبات:','تثبيته وتغذيته','حرقه','قتله','لا فائدة لها'],
  ['تُعدّ التربة للكثير من الحيوانات:','مأوى','سمًّا','ماءً','هواءً'],
  ['من الموارد الطبيعية المحفوظة في التربة:','الفحم الحجري','البلاستيك','الزجاج المصنوع','الورق'],
  ['من ملوّثات التربة:','الموادّ الكيميائية والفضلات','السماد الطبيعي','دودة الأرض','أوراق الشجر المتحلّلة'],
  ['من نتائج تلوّث التربة بمخلّفات الحرب:','تدنّي خصوبة التربة وانتشار الأمراض','زيادة خصوبتها','نموّ النباتات أسرع','لا شيء'],
  ['ماذا أفعل إذا وجدت جسمًا غريبًا من مخلّفات الحرب؟','أبتعد عنه وأبلّغ الجهات المختصة','ألمسه وألعب به','آخذه إلى البيت','أرميه بالحجارة'],
  ['من طرائق المحافظة على التربة:','إقامة المصاطب في الأراضي المنحدرة','قطع الأشجار','الرعي الجائر','الإكثار من المبيدات'],
  ['الزراعة التي لا نستخدم فيها التربة تُسمّى:','الزراعة المائية','الزراعة الجبلية','الزراعة الصحراوية','الدورة الزراعية']
 ]},
 {sem:1, unit:'الوحدة الرابعة', t:'إحياء الأرض', q:[
  ['لماذا نحتاج إلى استصلاح الأراضي؟','لأن عدد السكان يزداد والأراضي الزراعية تتناقص','لأن الغذاء كثير جدًا','لنبني عليها مصانع فقط','لا حاجة لذلك'],
  ['من طرائق استصلاح الأراضي الصحراوية:','خلط التربة الرملية بالتربة الطينية','قطع الأشجار','حرق الأعشاب','الرعي الجائر'],
  ['حفر الآبار من طرائق استصلاح الأراضي:','الصحراوية','الملحية فقط','الجليدية','البحرية'],
  ['استجرار المياه إلى الصحراء يساعد على:','استصلاحها للزراعة','زيادة التصحّر','تلويثها','تجفيفها'],
  ['من طرائق استصلاح الأراضي الجبلية:','المدرّجات الجبلية','حفر الآبار في الرمال','خلط الرمل بالطين','تغطيتها بالملح'],
  ['بناء الجدران الاستنادية يُستخدم في استصلاح الأراضي:','الجبلية','الصحراوية','البحرية','الملحية'],
  ['عمل مصدّات الرياح من طرائق استصلاح الأراضي:','الصحراوية','الجليدية','المغمورة بالماء','البركانية'],
  ['من الأفضل ألّا نحرق بقايا المحاصيل في الحقل لأنها:','تزيد خصوبة التربة','تلوّث الماء فقط','لا فائدة لها','تجذب الأمطار'],
  ['من الطرائق الجديدة لاستصلاح الأراضي الصحراوية:','تغطيتها بالأغطية البلاستيكية أو تزفيتها','إغراقها بالماء المالح','حرقها','تركها'],
  ['التربة الملحية:','غير صالحة لنموّ المحاصيل','أفضل أنواع التربة','لا تحتاج إلى استصلاح','تُستخدم في الدورة الزراعية']
 ]}
]);

REPL(6, 'sci', 1, [
 {sem:1, unit:'الوحدة الأولى', t:'العلاقات بين الأحياء', q:[
  ['من فوائد النباتات للحيوانات:','الغذاء والمسكن','نقل البذار','تهوية التربة','لا فائدة لها'],
  ['من فوائد الحيوانات للنباتات:','نقل البذار وتسميد التربة','صنع الغذاء للنبات بالتركيب الضوئي','قطع الأشجار','لا فائدة لها'],
  ['علاقة غذائية بين كائنين: الأول مفترس والثاني فريسة، تُسمّى:','الافتراس','التطفّل','التقايض','الرمية'],
  ['العلاقة التي يستفيد فيها أحد الكائنين (الطفيلي) ويتضرّر الآخر (المضيف) هي:','التطفّل','التقايض','الافتراس','الرمية'],
  ['تُعدّ علاقة القمل بالإنسان:','تطفّلًا خارجيًا','تطفّلًا داخليًا','تقايضًا','افتراسًا'],
  ['تُعدّ علاقة ديدان الإسكاريس بالإنسان:','تطفّلًا داخليًا','تطفّلًا خارجيًا','تقايضًا','رمية'],
  ['علاقة يتبادل فيها الكائنان المنفعة ولا يستطيع أحدهما الاستغناء عن الآخر هي:','التقايض','التطفّل','الافتراس','التنافس'],
  ['العصفور الذي ينظّف أسنان التمساح مثال على:','التقايض','الافتراس','التطفّل','الرمية'],
  ['الكائنات التي تتغذّى على الكائنات الميتة أو المتفسّخة تُسمّى:','الكائنات الرمية','المفترسات','الطفيليات','المنتجات'],
  ['من الكائنات الرمية:','الفطريات والجراثيم','الغزال','العصفور','الأرنب']
 ]},
 {sem:1, unit:'الوحدة الأولى', t:'لغز الطبيعة', q:[
  ['السلسلة الغذائية هي:','مسار انتقال الطاقة الموجودة في الغذاء من كائن حي إلى آخر','مجموعة من الصخور','مكان عيش الحيوان','نوع من النباتات'],
  ['بماذا تبدأ السلسلة الغذائية عادةً؟','بالنبات','بالمفترس','بالإنسان','بالنسر'],
  ['الشبكة الغذائية هي:','مجموعة من السلاسل الغذائية المتداخلة في بيئة ما','سلسلة غذائية واحدة','شبكة صيد','حيوان واحد'],
  ['لماذا تتداخل السلاسل الغذائية؟','لأن الكثير من الحيوانات لها أكثر من نمط غذائي','لأن النباتات تأكل الحيوانات','لأن الحيوانات لا تأكل','لأن الطاقة لا تنتقل'],
  ['في السلسلة: عشب ← أرنب ← ثعلب، ماذا يأكل الأرنب؟','العشب','الثعلب','لا شيء','الصقر'],
  ['في السلسلة: عشب ← أرنب ← ثعلب، الثعلب هو:','مفترس','منتج','نبات','فريسة للأرنب'],
  ['تشير الأسهم في السلسلة الغذائية إلى:','اتجاه انتقال الطاقة','اتجاه الرياح','حجم الحيوان','لون الكائن'],
  ['ماذا يحدث للشبكة الغذائية عند الاستخدام المفرط للمبيدات الحشرية؟','يحدث خلل فيها','تبقى كما هي','تصبح أقوى','تزداد الحشرات'],
  ['إذا زاد عدد الصقور كثيرًا في شبكة غذائية فإن أعداد فرائسها:','تتناقص','تتزايد','لا تتأثر','تتضاعف'],
  ['يمكن للكائن الحي أن يكون في:','أكثر من سلسلة غذائية','سلسلة واحدة فقط دائمًا','لا يدخل في أي سلسلة','سلسلة الصخور'],
 ]},
 {sem:1, unit:'الوحدة الأولى', t:'النظام البيئي', q:[
  ['النظام البيئي هو:','منطقة من الطبيعة تحتوي على كائنات حية ومكوّنات غير حية تؤثّر بعضها في بعض','الكائنات الحية فقط','الصخور فقط','حديقة الحيوان فقط'],
  ['من المكوّنات غير الحية في النظام البيئي:','الماء والهواء والتربة','الأشجار','الطيور','الفطريات'],
  ['من المكوّنات الحية في النظام البيئي:','النباتات والحيوانات','الشمس','الصخور','الهواء'],
  ['الكائنات الحية والمكوّنات غير الحية في البيئة:','يؤثّر بعضها في بعض','لا علاقة بينها','منفصلة تمامًا','لا تتغيّر أبدًا'],
  ['تأثّر الأنظمة البيئية بعضها في بعض يحقّق:','التوازن البيئي','التلوّث','التصحّر','الانقراض'],
  ['العنصر المشترك في كل الأنظمة البيئية هو:','الكائنات الحية','المصانع','الطرق','المباني'],
  ['من أمثلة الأنظمة البيئية:','البحر والغابة','الكرسي','الحاسوب','السيارة'],
  ['ماذا يحدث للنظام البيئي إذا نقص أحد عناصره؟','يتأثّر توازنه','لا يتأثّر','يصبح أفضل دائمًا','يختفي فورًا'],
  ['ماذا يحتاج النبات من المكوّنات غير الحية؟','الماء والهواء وضوء الشمس','اللحم','الحيوانات المفترسة','لا شيء'],
  ['ماذا يحدث للكائنات التي تتغذّى على الدجاج إذا انقرض الدجاج؟','تتأثّر وقد يقلّ عددها','يزداد عددها','لا تتأثّر','تتحوّل إلى نباتات']
 ]},
 {sem:1, unit:'الوحدة الأولى', t:'تأثير الإنسان في النظام البيئي', q:[
  ['يؤثّر سلوك الإنسان في النظام البيئي:','سلبًا أو إيجابًا','إيجابًا دائمًا','سلبًا دائمًا','لا يؤثّر أبدًا'],
  ['من الممارسات السلبية للإنسان في البيئة:','رمي القمامة من نافذة السيارة','فرز النفايات','زراعة الأشجار','ترشيد استهلاك الماء'],
  ['من الممارسات الإيجابية:','فرز النفايات في المنزل','كسر أغصان الأشجار','ترك النفايات على الشاطئ','الصيد الجائر'],
  ['ما سبب قلّة أعداد الغزلان في بيئتنا؟','الصيد الجائر','زراعة الأشجار','وجود المحميات','الأمطار'],
  ['ما الذي يسبّب تدهور الغطاء النباتي؟','قطع الأشجار والحرائق','التشجير','إنشاء المحميات','الريّ المنظّم'],
  ['من الحلول التي تحمي البيئة:','سنّ القوانين والتشريعات','زيادة الصيد','رمي النفايات في الأنهار','قطع الغابات'],
  ['في تجربة البطاقات المدهونة بالفازلين، ماذا تلتقط البطاقات؟','الملوّثات الموجودة في الهواء','الماء','الضوء','الحرارة'],
  ['البطاقة الأكثر اتّساخًا تدلّ على أن المكان:','أكثر تلوّثًا','أقل تلوّثًا','نظيف تمامًا','بلا هواء'],
  ['الاستحمام بالمياه الساخنة لوقت طويل يؤدّي إلى:','هدر المياه والطاقة','توفير الماء','حماية البيئة','زيادة الأشجار'],
  ['الممارسات السلبية للإنسان تسبّب في البيئة:','الخلل وفقدان التوازن','التوازن','زيادة النظافة','زيادة الغابات']
 ]},
 {sem:1, unit:'الوحدة الثانية', t:'القوى في الطبيعة', q:[
  ['القوة هي:','كل مؤثّر قادر على تغيير الحالة الحركية للجسم أو تغيير شكله','وزن الجسم فقط','لون الجسم','حجم الجسم'],
  ['قوى التماس تنشأ:','عند التلامس المباشر بين الأجسام','دون تلامس','في الفضاء فقط','بين المغناطيس والحديد فقط'],
  ['جذب المغناطيس للدبابيس الحديدية مثال على قوى:','عدم التماس','التماس','الاحتكاك','الدفع باليد'],
  ['من قوى عدم التماس:','الجاذبية الأرضية (قوة الثقل)','الدفع باليد','الاحتكاك','القوة العضلية'],
  ['القوى المتوازنة هي القوى التي إذا أثّرت في جسم:','لا تغيّر حالته الحركية','تغيّر اتجاه حركته','تغيّر سرعته','تكسره دائمًا'],
  ['عندما يغيّر لاعب اتجاه الكرة برأسه تكون القوى المؤثّرة:','غير متوازنة','متوازنة','معدومة','عدم تماس'],
  ['ما عناصر القوة الأربعة؟','نقطة التأثير والحامل والجهة والشدّة','الطول والعرض والارتفاع والوزن','اللون والشكل والحجم والكتلة','السرعة والزمن والمسافة والجهة'],
  ['ما الأداة التي تُستخدم لقياس شدّة القوة؟','الربيعة','المسطرة','الميزان الحراري','الساعة'],
  ['ما وحدة قياس شدّة القوة؟','النيوتن N','المتر m','الثانية s','الجول J'],
  ['قوّتان على حامل واحد وفي اتجاه واحد شدّتاهما 2N و3N، فما شدّة محصّلتهما؟','5N','1N','6N','3N']
 ]},
 {sem:1, unit:'الوحدة الثانية', t:'تساعدنا أو تعيقنا', q:[
  ['ما الذي يجعل الكرة المتدحرجة على أرض الملعب تتوقّف؟','قوة الاحتكاك','قوة المغناطيس','ازدياد سرعتها','الضوء'],
  ['تكون جهة قوة الاحتكاك:','بعكس جهة حركة الجسم','بجهة حركة الجسم','نحو الأعلى دائمًا','بلا جهة'],
  ['قوة الاحتكاك تقلّل من:','سرعة الجسم المتحرّك','وزن الجسم','لون الجسم','حجم الجسم'],
  ['كلما ازدادت شدّة القوة التي تضغط الجسمين معًا فإن قوة الاحتكاك:','تزداد','تنقص','تنعدم','لا تتغيّر'],
  ['كلما زادت خشونة سطح التماس فإن قوة الاحتكاك:','تزداد','تنقص','تختفي','لا تتأثّر'],
  ['أيّ الكرتين تقطع مسافة أطول على السطح الخشبي نفسه؟','الكرة الزجاجية','الكرة المطاطية','تقطعان المسافة نفسها','لا تتحرّكان'],
  ['الورقة غير المطوية تصل إلى الأرض بعد المطوية لأن:','مساحة سطحها أكبر فيزداد احتكاكها بالهواء','وزنها أكبر','الهواء لا يؤثّر فيها','مساحتها أصغر'],
  ['من فوائد الاحتكاك:','يحمينا من الانزلاق في أثناء المشي','يسبّب تآكل الإطارات','يبطئ الآلات','يهدر الطاقة'],
  ['من أضرار الاحتكاك:','تآكل إطارات السيارة مع مرور الزمن','يمنعنا من الانزلاق','يساعدنا على الكتابة','يشعل عود الثقاب'],
  ['لماذا نضع الشحوم والزيوت بين الأجزاء المتحرّكة في الآلات؟','للتقليل من الاحتكاك','لزيادة الاحتكاك','لتلوينها','لزيادة وزنها']
 ]},
 {sem:1, unit:'الوحدة الثانية', t:'أخلص في عملي', q:[
  ['تنجز القوة عملًا إذا:','انتقلت نقطة تأثيرها مسافة ما','لم يتحرّك الجسم','كان الجسم ثقيلًا فقط','أثّرت لحظة دون حركة'],
  ['طفل يدفع سيارة ولا تتحرّك، هل أنجز عملًا فيزيائيًا؟','لا، لأن السيارة لم تنتقل','نعم، لأنه تعب','نعم دائمًا','نعم، لأنه بذل قوة كبيرة'],
  ['قانون العمل هو:','العمل = شدّة القوة × المسافة','العمل = المسافة ÷ الزمن','العمل = القوة ÷ المسافة','العمل = القوة + المسافة'],
  ['ما وحدة قياس العمل؟','الجول J','النيوتن N','المتر m','الثانية s'],
  ['الجول يساوي:','نيوتن × متر','متر ÷ ثانية','نيوتن ÷ متر','متر × ثانية'],
  ['كلما ازدادت شدّة القوة (مع ثبات المسافة) فإن العمل:','يزداد','ينقص','يبقى ثابتًا','ينعدم'],
  ['يتناسب العمل مع المسافة المقطوعة تناسبًا:','طرديًا','عكسيًا','لا علاقة بينهما','عشوائيًا'],
  ['العمل لنقل جسم مسافة 5m مقارنةً بنقله 10m بالقوة نفسها:','أصغر','أكبر','مساوٍ','معدوم'],
  ['رجل ينقل كيسًا بقوة 40N مسافة 20m بجهة القوة، فما العمل المبذول؟','800 J','60 J','20 J','2 J'],
  ['قوة 10N تنقل جسمًا مسافة 3m بجهتها، فما العمل؟','30 J','13 J','7 J','3 J']
 ]},
 {sem:1, unit:'الوحدة الثالثة', t:'الإطراح', q:[
  ['الإطراح هو:','عملية التخلّص من الموادّ السائلة الزائدة والموادّ الضارّة إلى خارج الجسم','عملية هضم الطعام','عملية التنفّس فقط','عملية نقل الدم'],
  ['يتكوّن جهاز البول من:','الكليتين والحالبين والمثانة والقناة البولية (الإحليل)','القلب والرئتين','المعدة والأمعاء','الدماغ والأعصاب'],
  ['أين تقع الكليتان؟','في الناحية الظهرية للتجويف البطني','في الصدر','في الرأس','في الرقبة'],
  ['تشبه الكلية في شكلها:','حبة الفاصولياء','الكرة','المثلّث','الأنبوب'],
  ['تعمل الكلية كمصفاة لـ:','تخليص وتنقية الدم من الموادّ الزائدة والضارّة','هضم الطعام','ضخّ الدم','تخزين الهواء'],
  ['ما وظيفة الحالبين؟','نقل البول من الكلية إلى المثانة','تصفية الدم','إخراج البول خارج الجسم','صنع البول'],
  ['أين يتجمّع البول قبل طرحه؟','في المثانة','في الكلية','في الحالب','في المعدة'],
  ['ما وظيفة القناة البولية (الإحليل)؟','توصيل البول من المثانة إلى خارج الجسم','تصفية الدم','نقل البول من الكلية إلى المثانة','تخزين البول'],
  ['تتألّف الكلية من منطقتين:','قشرية ولبّية','عضلية وعظمية','داخلية وهوائية','عصبية ودهنية'],
  ['يطرح الجسم الموادّ الزائدة والضارّة بطرائق عدّة منها:','التنفّس والبول والجلد','الهضم فقط','النظر','السمع']
 ]},
 {sem:1, unit:'الوحدة الثالثة', t:'صحة جهاز البول', q:[
  ['من أمراض جهاز البول:','الحصيات البولية والتهاب الكلية','قصر النظر','الزكام','تسوّس الأسنان'],
  ['أين تتكوّن الحصى الكلوية؟','في الكلية','في المعدة','في القلب','في الرئتين'],
  ['من أعراض الحصيات البولية:','آلام شديدة مع حرقة أثناء التبوّل','حكّة في الرأس','سعال','صداع فقط'],
  ['من أسباب التهاب الكلية:','الجراثيم أو تلقّي ضربة شديدة على الظهر','شرب الماء','ممارسة الرياضة','النوم الكافي'],
  ['من أعراض التهاب الكلية:','خروج دم مع البول وحرقة عند التبوّل','ألم في الأسنان','احمرار العين','تساقط الشعر'],
  ['ماذا يطلب الطبيب عادةً لتشخيص أمراض جهاز البول؟','تحليل عيّنة من البول','صورة للأسنان','فحص النظر','قياس الطول'],
  ['أيّ عمل يحافظ على صحة جهاز البول؟','شرب كمية كافية من الماء','الإفراط في البروتينات','حبس البول','الإكثار من المشروبات الغازية'],
  ['عند الشعور بالحاجة إلى التبوّل يجب:','إفراغ البول','حبس البول طويلًا','شرب المزيد من المشروبات الغازية','تجاهل ذلك'],
  ['لماذا نتجنّب كثرة تناول الأطعمة المالحة؟','كي لا تتشكّل الحصيات','لأنها تقوّي الكلية','لأنها تزيد الطول','لأنها مفيدة جدًا'],
  ['لماذا يجب تجنّب تناول الأدوية دون استشارة الطبيب؟','لأنها قد تضرّ الكليتين','لأنها لذيذة','لأنها رخيصة','لأنها تزيد الشهية']
 ]},
 {sem:1, unit:'الوحدة الثالثة', t:'الإطراح لدى الفقاريات', q:[
  ['هل تمتلك الفقاريات جميعها جهازًا بوليًا؟','نعم، يخلّصها من الموادّ الزائدة والضارّة','لا، الثدييات فقط','لا، الأسماك فقط','لا يوجد لدى أي فقاري'],
  ['لماذا تختلف أقسام جهاز البول لدى الفقاريات؟','تكيّفًا مع بيئتها','بسبب لونها','بسبب حجمها فقط','لا تختلف'],
  ['المقذرة فتحة مشتركة توجد لدى:','الطيور','الحصان','الإنسان','القطّ'],
  ['أيّ الحيوانات الآتية لا تملك مثانة؟','الحمام','الحصان','الإنسان','الأرنب'],
  ['يمتلك الحصان جهاز بول يشبه جهاز الإنسان، فيه:','كليتان وحالبان ومثانة وقناة بولية','مقذرة فقط','غلاصم فقط','لا كلى له'],
  ['ينتهي جهاز البول لدى الضفادع والزواحف والطيور بـ:','المقذرة','القناة البولية كما عند الإنسان','الغلاصم','الرئتين'],
  ['يساعد الأسماك على التخلّص من بعض الفضلات أيضًا:','الغلاصم','الريش','الأجنحة','الحراشف فقط'],
  ['تتشابه الفقاريات في وجود:','الكليتين','المثانة دائمًا','المقذرة دائمًا','الغلاصم'],
  ['من الحيوانات التي لديها مقذرة:','الضفدع','الحصان','البقرة','الإنسان'],
  ['عدم وجود مثانة لدى الطيور يساعدها على:','تخفيف وزنها للطيران','السباحة','الحفر','زيادة وزنها']
 ]},
 {sem:1, unit:'الوحدة الثالثة', t:'ردائي الواقي', q:[
  ['ما العضو الذي يكسو الجسم الخارجي للإنسان؟','الجلد','العظم','العضلات','الكلية'],
  ['الجلد هو:','أكبر أعضاء الجسم','أصغر أعضاء الجسم','عضو داخلي','جزء من العظام'],
  ['البصمة هي:','مجموعة الخطوط في أطراف الأصابع ولكل فرد بصمة خاصة به','لون الجلد','شعر اليد','ثقوب الجلد'],
  ['تُستخدم البصمة لـ:','التعرّف على الأشخاص','قياس الحرارة','رؤية الألوان','تحريك اليد'],
  ['يتكوّن الجلد من طبقتين هما:','البشرة والأدمة','القشرة واللبّ','الصلبة والشبكية','العضلية والعظمية'],
  ['الطبقة الخارجية من الجلد هي:','البشرة','الأدمة','العضلة','العظم'],
  ['أين توجد الغدد العرقية والأوعية الدموية؟','في الأدمة','في الطبقة السطحية للبشرة','في الأظافر','في الشعر فقط'],
  ['ما الذي يعطي الجلد لونه؟','صباغ الميلانين','الدم الأزرق','العرق','الماء'],
  ['كيف ينظّم الجلد حرارة الجسم؟','بالعرق الذي يتبخّر فيخفّض حرارة الجسم','بتغيير لونه','بالنوم','بالأكل'],
  ['أيّ مما يأتي ليس من وظائف الجلد؟','تنشيط الدورة الدموية','الحماية','الإحساس','الإطراح']
 ]},
 {sem:1, unit:'الوحدة الثالثة', t:'صحة ردائي الواقي', q:[
  ['تنقل ذبابة الرمل طفيليًا يسبّب مرض:','اللشمانيا الجلدية (حبة حلب)','الجرب','قمل الرأس','الفطريات الجلدية'],
  ['المرض الذي يسبّب حكّة شديدة بين الأصابع والقدمين خاصة في الليل هو:','الجرب','قمل الرأس','اللشمانيا','الحصيات'],
  ['الطفيلي المسبّب للجرب يُسمّى:','هامة الجرب','ذبابة الرمل','قمل الرأس','دودة الإسكاريس'],
  ['بيوض قمل الرأس تُسمّى:','الصئبان','الأبواغ','البذيرات','الحراشف'],
  ['ينتج قمل الرأس عن:','إهمال نظافة الشعر ومشاركة الأدوات الشخصية','شرب الماء','ممارسة الرياضة','أكل الخضار'],
  ['كائنات تعيش متطفّلة على الخلايا الحية وتسبّب التهابات جلدية:','الفطريات الجلدية','ذبابة الرمل','الكريات البيضاء','البكتيريا النافعة فقط'],
  ['كيف تنتقل الفطريات الجلدية؟','باللمس أو استخدام أدوات المصاب','عبر الهواء فقط','بشرب الماء النظيف','لا تنتقل'],
  ['من طرائق الوقاية من الأمراض الجلدية:','عدم استخدام الأدوات الشخصية للآخرين','مشاركة المناشف','إهمال الاستحمام','ارتداء أحذية ضيّقة'],
  ['ينصح الأطباء بارتداء أحذية:','مريحة ومناسبة','ضيّقة','مبلّلة','مكسورة'],
  ['لماذا يجب العناية بنظافة القدمين وبين الأصابع؟','لمنع الإصابة بالفطريات الجلدية','لزيادة الطول','لتقوية النظر','لا داعي لذلك']
 ]},
 {sem:1, unit:'الوحدة الرابعة', t:'السطح المائل', q:[
  ['المستوى المائل هو:','سطح منحدر يسهّل تحريك الجسم الثقيل عليه','سطح أفقي تمامًا','حبل وبكرة','عجلة ومحور'],
  ['يُستخدم السطح المائل لـ:','تقليل الجهد اللازم لرفع الأجسام','زيادة الجهد','تغيير لون الأجسام','قطع الأجسام'],
  ['المسافة المقطوعة باستخدام السطح المائل مقارنةً بالمسافة الشاقولية:','أطول','أقصر','مساوية','معدومة'],
  ['كلما زاد ميل اللوح المائل فإن رفع الجسم عليه يصبح:','أصعب ويحتاج جهدًا أكبر','أسهل','بلا جهد','مستحيلًا دائمًا'],
  ['الوتد (الإسفين) آلة بسيطة لها وجهان مائلان يلتقيان بزاوية:','حادّة','قائمة','منفرجة','مستقيمة'],
  ['يُستخدم الوتد (الإسفين) لـ:','قطع الأجسام أو فصلها عن بعضها','رفع العلم','تدوير العجلات','قياس القوة'],
  ['تُطبَّق القوة في الوتد على:','النهاية الثخينة','النهاية الرفيعة','الوسط فقط','لا تُطبَّق قوة'],
  ['البرغي جسم معدني أسطواني له أسنان:','حلزونية','مستقيمة','دائرية مغلقة','بلا أسنان'],
  ['كيف يُثبَّت البرغي؟','بالتدوير','بالطرق فقط','باللصق','بالسحب'],
  ['أسنان البرغي تشبه في عملها:','الإسفين','البكرة','العجلة','الربيعة']
 ]},
 {sem:1, unit:'الوحدة الرابعة', t:'الرافعة', q:[
  ['الرافعة (العتلة) آلة بسيطة تساعدنا على:','إنجاز العمل بسهولة بتغيير اتجاه القوة','قياس الزمن','رؤية الأشياء','قطع الخشب فقط'],
  ['تتحرّك الرافعة حول مسند ثابت يُسمّى:','المرتكز','المقاومة','القوة','الذراع'],
  ['ثقل الجسم المراد تحريكه بالرافعة يُسمّى:','المقاومة','المرتكز','ذراع القوة','المحور'],
  ['ذراع القوة هو المسافة بين:','المرتكز ونقطة تأثير القوة المطبّقة','المرتكز والمقاومة','القوة والمقاومة','طرفي الرافعة'],
  ['في رافعة النوع الأول يقع:','المرتكز بين القوة والمقاومة','المقاومة بين القوة والمرتكز','القوة بين المقاومة والمرتكز','لا يوجد مرتكز'],
  ['في رافعة النوع الثاني تقع:','المقاومة بين القوة والمرتكز','القوة بين المقاومة والمرتكز','المرتكز بين القوة والمقاومة','القوة عند المرتكز'],
  ['في رافعة النوع الثالث تقع:','القوة المطبّقة بين المقاومة والمرتكز','المقاومة بين القوة والمرتكز','المرتكز بين القوة والمقاومة','المقاومة عند المرتكز'],
  ['المقصّ رافعة من النوع:','الأول','الثاني','الثالث','لا يُعدّ رافعة'],
  ['عربة الجرّ رافعة من النوع:','الثاني','الأول','الثالث','الرابع'],
  ['ملقط الثلج رافعة من النوع:','الثالث','الأول','الثاني','ليس رافعة']
 ]},
 {sem:1, unit:'الوحدة الرابعة', t:'البكرة وأنواعها', q:[
  ['البكرة آلة بسيطة تتكوّن من:','قرص قابل للدوران حول محور وعلى محيطه مجرى يمرّ فيه حبل','لوح مائل','جسم أسطواني بأسنان حلزونية','عجلة كبيرة فقط'],
  ['للبكرات نوعان هما:','الثابتة والمتحرّكة','الكبيرة والصغيرة','المائلة والأفقية','الحلزونية والمستقيمة'],
  ['البكرة الثابتة:','تغيّر اتجاه القوة لكنها لا توفّر الجهد','توفّر الجهد ولا تغيّر اتجاه القوة','لا تفيد في شيء','تقطع الأجسام'],
  ['البكرة المتحرّكة:','توفّر الجهد ولا تغيّر اتجاه القوة','تغيّر اتجاه القوة ولا توفّر الجهد','تزيد الجهد','لا تتحرّك'],
  ['لرفع جسم ثقله 10N ببكرة ثابتة نحتاج قوة:','10N','5N','20N','1N'],
  ['لرفع ثقل مقداره 40N ببكرة متحرّكة نحتاج قوة:','20N','40N','80N','10N'],
  ['عند استخدام البكرة الثابتة نشدّ الحبل نحو:','الأسفل لرفع الجسم إلى الأعلى','الأعلى فقط','اليمين','لا نشدّ'],
  ['كيف يصل العلم إلى أعلى السارية؟','باستخدام بكرة ثابتة','باستخدام إسفين','باستخدام برغي','باستخدام سطح مائل'],
  ['تُعدّ البكرات الثابتة روافع من النوع:','الأول','الثاني','الثالث','الرابع'],
  ['لماذا تُستخدم البكرة الثابتة والمتحرّكة معًا في الروافع الكبيرة؟','لتغيير اتجاه القوة وتوفير الجهد معًا','لزيادة الجهد','لتلوين الأثقال','لإبطاء العمل فقط']
 ]},
 {sem:1, unit:'الوحدة الرابعة', t:'العجلة والمحور', q:[
  ['العجلة والمحور آلة بسيطة تتألّف من:','جسمين مثبّتين معًا ويدوران معًا','لوح وحبل','قرص وحبل','سطحين مائلين'],
  ['الجزء الأكبر في العجلة والمحور يُسمّى:','العجلة','المحور','المرتكز','الوتد'],
  ['الجزء الأصغر في العجلة والمحور يُسمّى:','المحور','العجلة','البكرة','المجرى'],
  ['نصف قطر المحور مقارنةً بنصف قطر العجلة:','أصغر','أكبر','مساوٍ','ضعفه'],
  ['زيادة قطر العجلة:','تزيد القوة الناتجة على محورها','تنقص القوة الناتجة','لا تؤثّر','توقف الدوران'],
  ['لماذا يكون مقود الشاحنة أكبر من مقود السيارة الصغيرة؟','لينتج قوة أكبر على المحور بجهد أقل','للزينة فقط','لأنه أخفّ','لتقليل القوة'],
  ['من الآلات التي تعمل على مبدأ العجلة والمحور:','مقبض الباب','المطرقة','ملقط الثلج','الإسفين'],
  ['من أمثلة العجلة والمحور:','حجر طحن الحبوب (الرحى)','المقصّ','السطح المائل','الوتد'],
  ['تسهّل العجلة والمحور:','الحركة والنقل وأداء العمل في الآلات','الرؤية','قياس الزمن','التنفّس'],
  ['يعود أصل العجلات إلى حضارة:','سومر في العراق القديمة','الرومان الحديثة','اليابان','أمريكا']
 ]},
 {sem:1, unit:'الوحدة الرابعة', t:'أجدادي العظماء', q:[
  ['الآلة المركّبة هي:','آلة تتألّف من آلتين بسيطتين أو أكثر تعمل معًا','آلة بسيطة واحدة','آلة بلا أجزاء','آلة كهربائية فقط'],
  ['زيادة عدد الآلات البسيطة في الآلة المركّبة:','تزيد من سهولة العمل','تنقص من سهولة العمل','لا تؤثّر','توقف العمل'],
  ['تزيد الآلات المركّبة من سهولة العمل وتوفّر:','الوقت والجهد','الضوء','الحرارة','الماء'],
  ['مقصّ الأظافر يُعدّ آلة:','مركّبة','بسيطة','بلا عمل','كهربائية'],
  ['يحتوي مقصّ الأظافر على:','أكثر من رافعة','بكرة','عجلة ومحور فقط','برغي فقط'],
  ['الفرّامة اليدوية تُعدّ آلة:','مركّبة','بسيطة','لا تعمل','مائلة'],
  ['السكّين تُعدّ آلة:','بسيطة','مركّبة','كهربائية','بكرية'],
  ['أيّ مما يأتي ليس من فوائد الآلات المركّبة؟','زيادة مقدار العمل','توفير الوقت والجهد','تسهيل العمل','إنجاز الأعمال الصعبة'],
  ['تُعدّ الدرّاجة الهوائية آلة مركّبة لأنها:','تتألّف من عدة آلات بسيطة','آلة بسيطة واحدة','لا تحتوي عجلات','لا تتحرّك'],
  ['الرافعات في المباني تستخدم عددًا كبيرًا من:','البكرات','الأسافين','السطوح المائلة فقط','الأقلام']
 ]}
]);

})();
(function(){
/* أسئلة إضافية مستوحاة من دليل الأنشطة والتقويم — العربية لغتي */
function ADDQ(g, s, t, qs) { const l = (CUR[g][s] || []).find(x => x.t === t); if (l) l.q = l.q.concat(qs); }

/* ===== الصف الأول — الفصل الأول ===== */
ADDQ(1, 'ar', 'أحلى لغة (ب - ت)', [
 ['كم حرفاً في كلمةِ «بَيْت»؟','ثلاثةُ أحرف','حرفان','أربعةُ أحرف'],
 ['نُحلِّلُ كلمةَ «تَمْر» إلى أحرفِها:','ت - م - ر','ت - ر - م','م - ت - ر'],
 ['نُركِّبُ الأحرفَ «ب - ا - ب» فتصيرُ كلمة:','باب','بات','تاب'],
 ['ما الحرفُ المُشتركُ في الكلماتِ: «تاج - تُوت - تَمْر»؟','ت','ب','م'],
 ['«…يْت» مكانٌ نسكنُ فيه. ما الحرفُ النّاقصُ في أوّلِها؟','ب','ت','ن']
]);
ADDQ(1, 'ar', 'موطني (و - ي)', [
 ['المكانُ الّذي فيه بيوتٌ قليلةٌ وحقولٌ واسعةٌ هو:','القَرْية','المدينة','البحر'],
 ['أيُّ جملةٍ تَصِفُ وطني؟','وطني جميلٌ وأُحِبُّه.','وطني يشربُ الحليب.','وطني يلعبُ بالكُرة.'],
 ['نُحلِّلُ كلمةَ «وَلَد» إلى أحرفِها:','و - ل - د','د - ل - و','و - د - ل'],
 ['ما الحرفُ المُشتركُ في الكلماتِ: «يَد - يَمامة - ياسَمين»؟','ي','و','م'],
 ['نُركِّبُ الأحرفَ «و - ر - د» فتصيرُ كلمة:','وَرْد','وَلَد','بَرْد'],
 ['أين حرفُ الياءِ في كلمةِ «بِلادي»؟','في آخرِها','في أوّلِها','في وسطِها']
]);
ADDQ(1, 'ar', 'مدرستي (م)', [
 ['أُكمِلُ كلمةَ «حَـ … م» (طائرٌ يطيرُ في السّماء) بالمقطعِ المناسب:','ما','مو','مي'],
 ['ما المقطعُ المُشتركُ في الكلماتِ: «ماما - مازن - ماء»؟','ما','مو','مي'],
 ['نُركِّبُ «قَ + لَ + م» فتصيرُ كلمة:','قَلَم','قَمَر','عَلَم'],
 ['كم حرفاً في كلمةِ «مَدْرَسة»؟','خمسةُ أحرف','أربعةُ أحرف','ثلاثةُ أحرف'],
 ['أيُّ كلمةٍ لا تنتمي إلى أدواتِ المدرسة؟','وِسادة','دَفْتَر','قَلَم','مِقْلَمة']
]);
ADDQ(1, 'ar', 'الأطفال (ح)', [
 ['رتِّبِ الكلماتِ لتصيرَ جملةً من الأنشودة: (الرّائعُ - نحنُ - الآتي - الجيلُ)','نحنُ الجيلُ الآتي الرّائعُ','الجيلُ نحنُ الرّائعُ الآتي','الآتي الرّائعُ نحنُ الجيلُ'],
 ['أيُّ جملةٍ صحيحةٌ ومفيدة؟','لَعِبَ الطّفلُ بالكُرةِ.','لَعِبَتِ الكُرةُ بالطّفلِ.','بالكُرةِ الطّفلُ.'],
 ['ما المقطعُ المُشتركُ في الكلماتِ: «حَديقة - حَليب - حَمام»؟','حَـ','حُـ','حِـ'],
 ['نُركِّبُ الأحرفَ «ب - ح - ر» فتصيرُ كلمة:','بَحْر','بَرْد','حَبْل'],
 ['أيُّ كلمةٍ ليس فيها حرفُ الحاء؟','خُبْز','حِصان','مِلْح']
]);
ADDQ(1, 'ar', 'أرسم بالألوان (س - ش)', [
 ['ما لونُ العُشب؟','أخضر','أحمر','أزرق'],
 ['ما لونُ السّماءِ الصّافية؟','أزرق','أسود','بُنّيّ'],
 ['أيُّ شيءٍ لونُه أصفر؟','المَوْز','الفَراوِلة','الباذِنْجان'],
 ['ما الحرفُ المُشتركُ في الكلماتِ: «شَمْس - شَجَرة - عُشّ»؟','ش','س','ج'],
 ['نُحلِّلُ كلمةَ «رَسَمَ» إلى أحرفِها:','ر - س - م','ر - ش - م','س - ر - م'],
 ['«…مْس» تُضيءُ في النّهار. ما الحرفُ النّاقصُ في أوّلِها؟','ش','س','ص']
]);
ADDQ(1, 'ar', 'هيا نلعب (د - ذ)', [
 ['ما الحرفُ المُشتركُ في الكلماتِ: «دُبّ - وَرْد - مَدْرَسة»؟','د','ذ','ر'],
 ['«…هَب» معدنٌ أصفرُ ثمين. ما الحرفُ النّاقصُ في أوّلِها؟','ذ','د','ز'],
 ['أيُّ كلمةٍ لا تنتمي إلى اللّعب؟','سَرير','كُرة','مَلْعَب','فَريق'],
 ['أيُّ جملةٍ مُرتَّبةٌ ترتيباً صحيحاً؟','ذهبَ الأطفالُ إلى الملعبِ.','إلى الأطفالُ ذهبَ الملعبِ.','الملعبِ ذهبَ إلى الأطفالُ.'],
 ['كم حرفاً في كلمةِ «ذِراع»؟','أربعةُ أحرف','ثلاثةُ أحرف','خمسةُ أحرف'],
 ['نسألُ صديقَنا: «… لعبتَ بالكُرةِ اليوم؟»','هل','نعم','لا']
]);
ADDQ(1, 'ar', 'الموسيقا (ك - ل)', [
 ['أيُّ كلمةٍ ليست من عائلةِ كلمةِ «عَزَفَ»؟','كِتاب','عازِف','يَعْزِفُ','مَعْزوفة'],
 ['ما الحرفُ المُشتركُ في الكلماتِ: «كَعْك - كُرة - سَمَك»؟','ك','ل','م'],
 ['نُركِّبُ الأحرفَ «ل - ح - ن» فتصيرُ كلمة:','لَحْن','لَوْن','حَبْل'],
 ['«…يْمون» فاكهةٌ صفراءُ حامضة. ما الحرفُ النّاقصُ في أوّلِها؟','ل','ك','ن'],
 ['كم حرفاً في كلمةِ «كَمان»؟','أربعةُ أحرف','ثلاثةُ أحرف','خمسةُ أحرف']
]);
ADDQ(1, 'ar', 'فن التمثيل (ف - ق)', [
 ['ما الحرفُ المُشتركُ في الكلماتِ: «قَمَر - قِطّ - بُرْتُقال»؟','ق','ف','ت'],
 ['«…يل» حيوانٌ ضخمٌ له خُرطوم. ما الحرفُ النّاقصُ في أوّلِها؟','ف','ق','غ'],
 ['أيُّ كلمةٍ لا تنتمي إلى المسرح؟','مِلْعَقة','مُمَثِّل','جُمْهور','سِتارة'],
 ['نُحلِّلُ كلمةَ «فَرَح» إلى أحرفِها:','ف - ر - ح','ق - ر - ح','ف - ح - ر'],
 ['أيُّ جملةٍ مُرتَّبةٌ ترتيباً صحيحاً؟','مثّلَ التّلاميذُ الأدوارَ بإتقانٍ.','بإتقانٍ الأدوارَ التّلاميذُ مثّلَ.','الأدوارَ التّلاميذُ بإتقانٍ مثّلَ.']
]);
ADDQ(1, 'ar', 'سفينة الفضاء (ن)', [
 ['«رُوّاد» نُسمّي الواحدَ منهم:','رائِد','رُوّادان','رائِدات'],
 ['أيُّ كلمةٍ ليس فيها حرفُ النّون؟','بَيْت','بَنات','نَبات','بِنايات'],
 ['ضِدُّ كلمةِ «داخِل»:','خارِج','أسفل','بعيد'],
 ['ما الحرفُ المُشتركُ في الكلماتِ: «نَجْمة - عَيْن - سَفينة»؟','ن','م','س'],
 ['«نَجْمة» نقولُ للكثيرِ منها:','نُجوم','نَجْمان','نُجَيْمة'],
 ['كم حرفاً في كلمةِ «نَجْمات»؟','خمسةُ أحرف','أربعةُ أحرف','ستّةُ أحرف']
]);
ADDQ(1, 'ar', 'المكتبة (هـ)', [
 ['كيف تُكتَبُ الهاءُ في وسطِ الكلمة؟','ـهـ','هـ','ـه'],
 ['أين نجدُ الكُتُبَ والقِصَصَ الجميلة؟','في المكتبة','في المطبخ','في الملعب'],
 ['أُحافِظُ على كُتُبي بأن:','أُبقيَها نظيفةً ومُرتّبة','أُمزِّقَ أوراقَها','أرسُمَ عليها'],
 ['نُحلِّلُ كلمةَ «زُهور» إلى أحرفِها:','ز - هـ - و - ر','ز - و - هـ - ر','ر - هـ - و - ز'],
 ['نُركِّبُ «ما + هِر» فتصيرُ كلمة:','ماهِر','هارِم','مَهْر'],
 ['ما الحرفُ المُشتركُ في الكلماتِ: «هاتِف - نَهْر - وَجْه»؟','هـ','ن','ف']
]);
ADDQ(1, 'ar', 'الحاسوب (ر - ز)', [
 ['أيُّ كلمةٍ نُكوِّنُها من حروفِ كلمةِ «حاسوب»؟','سَحاب','كِتاب','شُبّاك'],
 ['نُركِّبُ الأحرفَ «ن - هـ - ر» فتصيرُ كلمة:','نَهْر','زَهْر','بَحْر'],
 ['نُركِّبُ «شا + هَدَ» فتصيرُ كلمة:','شاهَدَ','شَهِدَ','هادِئ'],
 ['ما الحرفُ المُشتركُ في الكلماتِ: «زَيْت - مَوْز - زَرافة»؟','ز','ر','ت'],
 ['كم مقطعاً في كلمةِ «مَرْمى» (مَرْ + مى)؟','مقطعان','ثلاثةُ مقاطع','مقطعٌ واحد']
]);
ADDQ(1, 'ar', 'الحساب (ع - غ)', [
 ['«تُفّاحات» نُسمّي الواحدةَ منها:','تُفّاحة','تُفّاحتان','تُفّاحِيّ'],
 ['نُحلِّلُ كلمةَ «غامِق» إلى مقاطع:','غا + مِق','غَ + امِق','غام + ق'],
 ['نُحلِّلُ كلمةَ «عَجيب» إلى أحرفِها:','ع - ج - ي - ب','ع - ي - ج - ب','غ - ج - ي - ب'],
 ['عندي ثلاثُ برتقالات، أكلتُ واحدةً، كم بقي؟','اثنتان','أربع','واحدة'],
 ['«…صْفور» طائرٌ صغيرٌ يُغرِّد. ما الحرفُ النّاقصُ في أوّلِها؟','ع','غ','ح']
]);

/* ===== الصف الأول — الفصل الثاني ===== */
ADDQ(1, 'ar', 'الشجرة (ط - ظ)', [
 ['ما الحرفُ المُشتركُ في الكلماتِ: «طاوِلة - بَطّيخ - شَطّ»؟','ط','ظ','ت'],
 ['«…فْر» ينمو في أطرافِ أصابعِنا. ما الحرفُ النّاقصُ في أوّلِها؟','ظ','ط','ض'],
 ['ما الفرقُ في الكتابةِ بين «ط» و«ظ»؟','الظّاءُ فوقَها نُقطة','الطّاءُ فوقَها نُقطة','لا فرقَ بينهما'],
 ['أيُّ كلمةٍ لا تنتمي إلى الشّجرة؟','سَمَكة','أغْصان','أوْراق','جُذور'],
 ['كم حرفاً في كلمةِ «طَبْل»؟','ثلاثةُ أحرف','أربعةُ أحرف','حرفان']
]);
ADDQ(1, 'ar', 'العصفورة (ص - ض)', [
 ['ما الحرفُ المُشتركُ في الكلماتِ: «صَباح - قَميص - عَصا»؟','ص','ض','س'],
 ['«…فْدَع» يعيشُ قربَ الماء. ما الحرفُ النّاقصُ في أوّلِها؟','ض','ص','ظ'],
 ['أيُّ كلمةٍ لا تنتمي إلى عائلةِ الطّيور؟','قِطّة','عُصْفور','حَمامة','بُلْبُل'],
 ['«عَصافير» نُسمّي الواحدَ منها:','عُصْفور','عُصْفوران','عُصْفورات'],
 ['نُحلِّلُ كلمةَ «بَيْض» إلى أحرفِها:','ب - ي - ض','ب - ي - ص','ي - ب - ض']
]);
ADDQ(1, 'ar', 'صديقتي المياه (ث)', [
 ['أيُّ كلمةٍ ليست من عائلةِ كلمةِ «غَسَلَ»؟','صَغير','يَغْسِلُ','غَسيل','مَغْسَلة'],
 ['أيُّ كلمةٍ تتعلَّقُ بموضوعِ المياه؟','نَهْر','صَخْرة','نار'],
 ['لا يعيشُ الإنسانُ والحيوانُ والنّباتُ بلا:','الماء','الحلوى','الألعاب'],
 ['أيُّ كلمةٍ تنتهي بحرفِ الثّاء؟','مُثَلَّث','ثَوْب','ثَلْج'],
 ['ما الفرقُ في الكتابةِ بين «ت» و«ث»؟','الثّاءُ فوقَها ثلاثُ نِقاط','الثّاءُ تحتَها نُقطتان','لا فرقَ بينهما']
]);
ADDQ(1, 'ar', 'الشتاء (ح - خ)', [
 ['كم فصلاً في السّنة؟','أربعةُ فصول','ثلاثةُ فصول','فصلان'],
 ['الفصلُ الّذي يأتي بعدَ الشّتاء:','الرّبيع','الصّيف','الخريف'],
 ['ما الحرفُ المُشتركُ في الكلماتِ: «خَيْمة - نَخْلة - بِطّيخ»؟','خ','ح','ن'],
 ['ما الفرقُ في الكتابةِ بين «ح» و«خ»؟','الخاءُ فوقَها نُقطة','الحاءُ فوقَها نُقطة','الخاءُ تحتَها نُقطة'],
 ['أيُّ كلمةٍ لا تنتمي إلى الشّتاء؟','شاطِئ البحرِ صيفاً','مِظَلّة','مِعْطَف','مَطَر']
]);
ADDQ(1, 'ar', 'أنظّف مدرستي (ة)', [
 ['أتعاونُ أنا وزملائي على:','تنظيفِ الصّفّ','رمي الأوراقِ على الأرض','الكتابةِ على الجدران'],
 ['النّظافةُ مُهمّةٌ لأنّها:','تحمي صحّتَنا','تُتعِبُنا','تُضيِّعُ وقتَنا'],
 ['أُكمِلُ الكلمةَ: «مِكْنَسـ…» (نُنظِّفُ بها الأرض)','ـة','ـت','ـه'],
 ['ما العملُ الّذي يجعلُ مدرستَنا أجمل؟','المحافظةُ على نظافتِها','رميُ النّفايات','قطفُ أزهارِ الحديقة'],
 ['أيُّ كلمةٍ لا تنتمي إلى النّظافة؟','طائِرة','صابون','مِكْنَسة','ماء']
]);
ADDQ(1, 'ar', 'صحة الأسنان (ء)', [
 ['نغسلُ الفاكهةَ قبلَ أكلِها لكي:','نُبعِدَ عنها الجراثيم','تصيرَ حُلوة','تكبرَ'],
 ['متى أُنظِّفُ أسناني بالفرشاةِ والمعجون؟','بعدَ كلِّ وجبة','مرّةً في الأسبوع','عندما أتذكّرُ فقط'],
 ['لماذا لا نأكلُ الحلوى المكشوفة؟','لأنّ الجراثيمَ تصلُ إليها','لأنّ لونَها جميل','لأنّها غالية'],
 ['تهربُ الجراثيمُ من الأطفالِ الّذين:','يهتمّونَ بنظافتِهم','يأكلونَ الطّعامَ المكشوف','لا يغسلونَ أيديَهم'],
 ['أين الهمزةُ في كلمةِ «غِذاء»؟','في آخرِها','في أوّلِها','في وسطِها']
]);
ADDQ(1, 'ar', 'غذائي (المدّ ~)', [
 ['نسألُ صديقَنا: «… تناولتَ فطورَكَ اليوم؟»','هل','نعم','لا'],
 ['«هل تُحِبُّ الخضار؟» نُجيبُ:','نعم، أُحِبُّ الخضار.','هل الخضار.','الخضارُ هل.'],
 ['ماذا نضعُ في آخرِ السّؤال؟','؟','.','!'],
 ['أيُّ طعامٍ مفيدٌ لجسمي؟','التُّفّاح','رقائقُ البطاطا المقليّة','الحلوى الكثيرة'],
 ['كيف نكتبُ «أا» في أوّلِ الكلمة؟','آ','أا','اأ']
]);
ADDQ(1, 'ar', 'الحواس الخمس (الشدّة)', [
 ['كم حاسّةً عندَ الإنسان؟','خمسُ حواسّ','ثلاثُ حواسّ','سبعُ حواسّ'],
 ['بأيِّ حاسّةٍ نعرفُ أنّ الماءَ ساخن؟','اللّمس','السّمع','الشّمّ'],
 ['نكتشفُ الفروقَ بين صورتين بحاسّة:','البصر','الذّوق','الشّمّ'],
 ['ما الحرفُ المُشدَّدُ في كلمةِ «مُعَلِّم»؟','اللّام','الميم','العين'],
 ['في كلمةِ «كُرّاسة» حرفُ الرّاء:','مُشدَّد','ساكن','مكسور']
]);
ADDQ(1, 'ar', 'في قلبي', [
 ['أُكوِّنُ جملةً مفيدة من الكلمات: (قلبي - في - أُمّي)','أُمّي في قلبي.','في أُمّي قلبي.','قلبي أُمّي في.'],
 ['أيُّ كلمةٍ لا تنتمي إلى الأُسرة؟','شَجَرة','أب','أُمّ','أخ'],
 ['ما الحرفُ المُشتركُ في الكلماتِ: «قَلْب - قَمَر - طَريق»؟','ق','ب','ط'],
 ['ماذا أقولُ لأمّي عندما تُساعدُني؟','شُكراً يا أُمّي','لا أُريد','اتركيني'],
 ['ضِدُّ كلمةِ «أُحِبُّ»:','أكْرَهُ','أفْرَحُ','أُساعِدُ']
]);
ADDQ(1, 'ar', 'التعاون', [
 ['أيُّ جملةٍ فيها كلمةُ «مُساعَدة»؟','أُقدِّمُ المُساعَدةَ لصديقي.','أُساعِدُ أُمّي.','يُساعِدُ الطّفلُ جَدَّه.'],
 ['مَنْ يُعالِجُ المَرْضى؟','الطّبيبة','الفلّاح','النّجّار'],
 ['مَنْ يزرعُ الأرض؟','الفلّاح','المعلّم','الطّبيبة'],
 ['مَنْ يُعلِّمُ الأجيال؟','المعلّم','النّجّار','الفلّاح'],
 ['مَنْ يصنعُ مقاعدَ الدّراسة؟','النّجّار','الطّبيبة','المعلّم']
]);

/* ===== الصف الرابع ===== */
ADDQ(4, 'ar', 'عاد الربيع', [
 ['ضِدُّ كلمةِ «عادَ»:','رَحَلَ','رَجَعَ','أتى'],
 ['«فالأرضُ ثوبٌ مُزْهِرٌ» معنى «مُزْهِر»:','مليءٌ بالأزهار','مُمزَّق','قديم'],
 ['«والنّهرُ يجري ضاحكاً» يَصِفُ الشّاعرُ النّهرَ بأنّه:','فَرِحٌ يتدفّق','حزينٌ جافّ','متجمّدٌ ساكن'],
 ['أيُّ ممّا يأتي من أحرفِ الجرّ؟','مِنْ','ثُمَّ','أنْ'],
 ['أختارُ حرفَ الجرِّ المناسب: «غرَّدَ البلبلُ … الغُصنِ»','على','لن','ثمّ'],
 ['«ما أجملَ فصلَ الرّبيع! تلبسُ الأرضُ فيه غطاءً …»','أخضرَ','أسودَ','رماديّاً']
]);
ADDQ(4, 'ar', 'رئة الأرض', [
 ['«الغابةُ مسرحٌ تتراقصُ على ألحانِ طيورِه أغصانُ الأشجار» معنى «تتراقص»:','تتمايلُ وتتحرّك','تنكسرُ','تجفُّ'],
 ['«تُشكِّلُ أشجارُها سدّاً منيعاً في وجهِ الرّيح» معنى «منيعاً»:','قويّاً يصعبُ اختراقُه','ضعيفاً','قصيراً'],
 ['«ترتسمُ على مُحَيّاها ملامحُ النّضارة» معنى «مُحَيّاها»:','وجهُها','يدُها','ظِلُّها'],
 ['السّبب: نحافظُ على الأشجار. النّتيجة:','يبقى الهواءُ نقيّاً','يزدادُ التّلوّث','تجفُّ الأنهار'],
 ['أيُّ جملةٍ مكتوبةٌ كتابةً صحيحة؟','يُعَدُّ التّلوّثُ البيئيُّ من أخطرِ المشكلات.','يُعَدُ التّلوثُ البيئيُ من أخطرِ المشكلاة.','يعد التلوت البيئي من اخطر المشكلاة.'],
 ['كلمةُ «النّضارة» هي:','اسم','فعل','حرف']
]);
ADDQ(4, 'ar', 'كرة القدم', [
 ['من الصّفاتِ الّتي يجبُ أن يتحلّى بها الرّياضيّون:','التّسامح','الأنانيّة','الغضب'],
 ['«الإيثار» معناه:','أن تُقدِّمَ غيرَك على نفسِك','أن تأخذَ كلَّ شيءٍ لنفسِك','أن تغضبَ بسرعة'],
 ['ينجحُ الفريقُ عندما يسودُ بين لاعبيه:','التّعاونُ والمحبّة','الخِصامُ والشِّجار','الكسلُ والتّأخّر'],
 ['أُكمِلُ وَفقَ النّموذج: ذهبَ - يذهبُ - اذهبْ / لعبَ - يلعبُ - …','الْعَبْ','لاعِب','لَعِبَ'],
 ['الرّوحُ الرّياضيّةُ تعني أن:','أتقبّلَ الخسارةَ وأُهنّئَ الفائز','أغضبَ إذا خسرت','أتشاجرَ مع الحَكَم']
]);
ADDQ(4, 'ar', 'سوف أبدو وردة', [
 ['الهمزةُ في كلمةِ «وائِل»:','همزةٌ في وسطِ الكلمة','همزةٌ في أوّلِ الكلمة','همزةٌ في آخرِ الكلمة'],
 ['حركةُ الهمزةِ في كلمةِ «وائِل»:','الكسرة','الفتحة','الضمّة'],
 ['أقوى الحركاتِ هي:','الكسرة','الضمّة','الفتحة','السّكون'],
 ['السّبب: لا أُنظِّفُ أسناني. النّتيجة:','تظهرُ بُقَعٌ سوداءُ على أسناني','تصيرُ أسناني أقوى','تَبْيَضُّ أسناني'],
 ['السّبب: أغسلُ يديَّ قبلَ الطّعام. النّتيجة:','أحمي جسمي من الجراثيم','أُصابُ بالمرض','يتّسخُ طعامي']
]);
ADDQ(4, 'ar', 'أطفال بين الواقع والخيال', [
 ['أيُّ جملةٍ تُعبِّرُ عن الخيال؟','الشّجرةُ تتحدّثُ للشّطِّ كلاماً.','الطّفلُ يلهو ويَعُدُّ الأرقام.','الشّجرةُ تُعطينا الثّمار.'],
 ['أيُّ جملةٍ تُعبِّرُ عن الواقع؟','يلعبُ الأطفالُ في الحديقة.','طارَ الولدُ إلى القمرِ بجناحين.','ضحكَ الكرسيُّ من النُّكتة.'],
 ['«صحّتُنا تاجٌ على رؤوسِنا» معنى ذلك أنّ الصّحّة:','غاليةٌ يجبُ أن نحافظَ عليها','لا قيمةَ لها','شيءٌ نلبسُه على رؤوسِنا'],
 ['الإكثارُ من الألعابِ الإلكترونيّةِ يُسبِّبُ:','التّعبَ وضعفَ النّظر','قوّةَ العضلات','النّومَ المُبكِّر'],
 ['من حلولِ مشكلةِ الإدمانِ على الألعابِ الإلكترونيّة:','تنظيمُ الوقتِ بين اللّعبِ والدّراسةِ والنّوم','اللّعبُ طوالَ اللّيل','تركُ الدّراسة'],
 ['أُكوِّنُ جملةً اسميّة: «الكُتُبُ …»','مفيدةٌ','قرأَ','في']
]);
ADDQ(4, 'ar', 'مملكة النحل', [
 ['نتعلّمُ من مملكةِ النّحل:','التّعاونَ والنّشاط','الكسل','الأنانيّة'],
 ['«أنا نحلةٌ نشيطة» أُؤكِّدُ المعنى فأقول: أنا نحلةٌ نشيطةٌ غيرُ …','كسولة','نشيطة','مجتهدة'],
 ['من أين تجمعُ النّحلةُ الرّحيقَ لصنعِ العسل؟','من الأزهار','من التّراب','من الماء'],
 ['أين يُخزِّنُ النّحلُ العسل؟','في أقراصِ الشّمعِ داخلَ الخليّة','تحتَ التّراب','في أعشاشِ الطّيور'],
 ['أُكمِلُ لأؤكِّدَ المعنى: «هذا بيتٌ كبيرٌ غيرُ …»','صغير','كبير','واسع']
]);
ADDQ(4, 'ar', 'الباخرة', [
 ['«ماذا تحملُ البحار؟» الأسلوبُ المستخدمُ في الجملة:','استفهام','تعجّب','نداء'],
 ['أداةُ الاستفهامِ في «ماذا تحملُ البحار؟»:','ماذا','تحملُ','البحار'],
 ['نسألُ عن الزّمانِ بـ:','متى','أين','مَن'],
 ['نسألُ عن الحالِ بـ:','كيف','كم','أين'],
 ['أختارُ الأداةَ المناسبة: «… تُبحِرُ الباخرة؟ — تُبحِرُ غداً.»','متى','مَن','كم']
]);
ADDQ(4, 'ar', 'الساعة البيولوجية', [
 ['«أسهمَتِ العلومُ في تطوّرِ الحضارةِ الإنسانيّة» معنى «أسهمَتْ»:','شاركَتْ','منعَتْ','أخّرَتْ'],
 ['أبدعَ الإنسانُ في اكتشافِ الكثيرِ من الأشياءِ في مجالات:','دراسةِ الكائناتِ الحيّةِ ووسائلِ النّقلِ والفضاء','اللّعبِ فقط','النّومِ والرّاحة'],
 ['«ما زلنا نؤمنُ أنّ الكثيرَ لم يُكتشَفْ بعد» يعني أنّ:','العلمَ ما زالَ أمامَه اكتشافاتٌ كثيرة','العلماءَ اكتشفوا كلَّ شيء','لا فائدةَ من البحث'],
 ['أيُّ كلمةٍ مكتوبةٌ كتابةً صحيحة؟','اكتشافات','إكتشافات','أكتشافات'],
 ['جمعُ كلمةِ «اكتشاف»:','اكتشافات','كواشِف','اكتشافان']
]);
ADDQ(4, 'ar', 'مدينة الياسمين', [
 ['عاصمةُ سوريّة هي:','دمشق','حلب','اللاذقيّة'],
 ['المدينةُ السّوريّةُ الّتي تقعُ على البحر:','اللاذقيّة','تدمر','السّويداء'],
 ['المدينةُ الأثريّةُ في البادية السّوريّة:','تدمر','طرطوس','اللاذقيّة'],
 ['في دمشقَ سوقٌ شعبيٌّ مشهورٌ اسمُه:','سوقُ الحميديّة','سوقُ البحر','سوقُ الثّلج'],
 ['تُلقَّبُ مدينةُ حلب بـ:','الشّهباء','الفيحاء','عروس البحر']
]);
ADDQ(4, 'ar', 'تحية للعالم', [
 ['في قصّة «مركب وهديّة»، كيف أرسلَ الأصدقاءُ رسالتَهم؟','في مركبٍ صغيرٍ عبرَ النّهر','بالبريد','مع طائر'],
 ['من أين صنعَ الأصدقاءُ القارب؟','من جِذعِ شجرةٍ يابسة','من الورق','من الحديد'],
 ['ماذا كتبَ الصّديقُ الثّالثُ في الرّسالة؟','أتمنّى لكمُ الخيرَ والمحبّةَ والسّلام','أنا لا أعرفُكم','عودوا إلى بيوتِكم'],
 ['أختارُ الضّميرَ المناسب: «مرحباً … أُحِبُّكم»','أنا','هم','هي'],
 ['تحيّةُ العالمِ تعني أن نُرسِلَ للشّعوبِ الأخرى:','المحبّةَ والسّلام','الخِصام','الحرب']
]);
ADDQ(4, 'ar', 'الصغير يتعلم', [
 ['ماذا يُعلِّمُني وطني؟','الحبَّ والعطاء','الكسل','الأنانيّة'],
 ['يُقدِّمُ لي وطني:','التّعليمَ والرّعايةَ والأمان','الخوف','الحزن'],
 ['أتعلَّمُ لأكونَ:','مُساهِماً في بناءِ بلدي','بعيداً عن وطني','كسولاً'],
 ['سوريّة «مَهْدُ الحضارات» أي:','المكانُ الّذي نشأَتْ فيه حضاراتٌ قديمة','بلدٌ بلا تاريخ','مدينةٌ حديثة'],
 ['«مَنْبِتُ الأبطال» معنى «مَنْبِت»:','مكانُ النّشأة','مكانُ اللّعب','مكانُ النّوم']
]);
ADDQ(4, 'ar', 'الملاحظة', [
 ['لكي أكتشفَ الفروقَ بين صورتين يجبُ أن:','أتأمّلَهما بدقّةٍ وانتباه','أنظرَ إليهما بسرعة','أُغمِضَ عينيَّ'],
 ['الحاسّةُ الّتي نستعملُها أكثرَ في ملاحظةِ الصّور:','البصر','السّمع','الذّوق'],
 ['أُصنِّفُ الحيوانات: أيُّها من الطّيور؟','الحمامة','الأغنام','الحمار'],
 ['ما قاعدةُ تصنيفِ هذه المجموعة: (الحمامة - الدّيك - العصفور)؟','كلُّها طيور','كلُّها تعيشُ في الماء','كلُّها حيواناتٌ مُفترِسة'],
 ['يُسجِّلُ العالِمُ ملاحظاتِه في:','دفترٍ خاصّ','سلّةِ المهملات','الهواء']
]);
ADDQ(4, 'ar', 'الشتاء الحكيم', [
 ['من مظاهرِ فصلِ الشّتاء:','هطولُ المطرِ والثّلج','تفتّحُ الأزهار','نُضجُ القمحِ في الحقول'],
 ['ماذا نتعلّمُ من النّهرِ الّذي يجري ولا يتوقّف؟','المثابرةَ على العمل','الكسل','الخوف'],
 ['ماذا نتعلّمُ من الجبل؟','الثّباتَ والقوّة','الضّعف','التّردّد'],
 ['أيُّ فعلٍ حدثَ في الأمس (فعلٌ ماضٍ)؟','ساعَدَ','يُساعِدُ','ساعِدْ'],
 ['أيُّ فعلٍ يحدثُ الآن (فعلٌ مضارع)؟','يُحاوِرُ','حاوَرَ','حاوِرْ']
]);
ADDQ(4, 'ar', 'النحّات', [
 ['أختارُ الصّفةَ المناسبة: «نحّاتٌ …»','مُبدِعٌ','مُبدِعةٌ','مُبدِعاً'],
 ['أختارُ الصّفةَ المناسبة: «منحوتةٌ …»','رائعةٌ','رائعٌ','رائعين'],
 ['أختارُ الصّفةَ المناسبة: «زهرةٌ …»','فوّاحةٌ','فوّاحٌ','فوّاحون'],
 ['«شاهدتُ فنّاناً ماهراً» الموصوفُ هو:','فنّاناً','ماهراً','شاهدتُ'],
 ['أيُّ الأدواتِ يستعملُها النّحّات؟','الإزميلُ والمطرقة','الإبرةُ والخيط','المِغْرفةُ والقِدْر']
]);
ADDQ(4, 'ar', 'سوق الأعمال اليدوية', [
 ['صاحبُ الحرفةِ الّذي يصنعُ الأواني من الطّين:','الفخّاري','النّجّار','الحدّاد'],
 ['صاحبُ الحرفةِ الّذي يصنعُ الأثاثَ من الخشب:','النّجّار','الخيّاط','الفخّاري'],
 ['يُرحِّبُ البائعُ في السّوقِ بالزّبائنِ بقوله:','أهلاً وسهلاً، تفضّلوا','اخرجوا من هنا','لا أبيعُ شيئاً'],
 ['«قطعةٌ نحاسيّةٌ لامعةٌ» كم صفةً في العبارة؟','صفتان','صفةٌ واحدة','ثلاثُ صفات'],
 ['نحافظُ على الحِرَفِ اليدويّة لأنّها:','جزءٌ من تراثِنا','لا فائدةَ منها','صعبةُ الاستعمال']
]);
ADDQ(4, 'ar', 'قلعة صلخد', [
 ['من الأماكنِ الأثريّةِ في محافظةِ السّويداء:','قلعةُ صلخد','قلعةُ حلب','قلعةُ دمشق'],
 ['أيُّ كلمةٍ مكتوبةٌ كتابةً صحيحة؟','رِحْلة','رِحْلت','رِحْله'],
 ['أيُّ كلمةٍ تنتهي بتاءٍ مبسوطة؟','بُيوت','قلعة','مدينة'],
 ['«أعلنَتْ مدرستُنا عن رحلةٍ» الاسمُ المجرور:','رحلةٍ','مدرستُنا','أعلنَتْ'],
 ['نحافظُ على الأماكنِ الأثريّةِ بأن:','لا نكتبَ على جدرانِها','نرميَ فيها النّفايات','نكسرَ حجارتَها']
]);

})();
(function(){
/* أسئلة إضافية مستوحاة من كتاب المدرس — رياضيات السادس (الدليل يغطّي الوحدات 1–5) */
function ADDQ(g, s, t, qs) { const l = (CUR[g][s] || []).find(x => x.t === t); if (l) l.q = l.q.concat(qs); }

/* ===== الوحدة الأولى ===== */
ADDQ(6, 'math', 'التمثيل البياني بالخطوط', [
 ['معدل الأمطار في دمشق 38 ملم في كانون الأول و35 ملم في نيسان. بكم يزيد معدل كانون الأول؟','3 ملم','73 ملم','13 ملم'],
 ['أيّ البيانات الآتية يناسبها التمثيل البياني بالخطوط؟','وزن طفل خلال عدة أشهر','عدد أضلاع المربع','ألوان علم بلدي'],
 ['باع مطعم 32 وجبة يوم الأحد و40 وجبة يوم الخميس. الفرق بينهما:','8 وجبات','72 وجبة','12 وجبة'],
 ['في التمثيل البياني بالخطوط نصل بين النقاط بـ:','قطع مستقيمة','أقواس دائرية','أعمدة ملوّنة'],
 ['إنتاج مزرعة من التفاح: 2014: 5 طن، 2015: 7 طن، 2016: 6 طن. في أيّ سنة كان الإنتاج أكبر؟','2015','2014','2016'],
 ['إذا كان الخط بين سنتين أفقياً فإن القيمة:','لم تتغيّر','تزايدت','تناقصت']
]);

ADDQ(6, 'math', 'الأعداد الطبيعية (1)', [
 ['أربعة أعداد طبيعية متتالية مجموعها 10 هي:','1، 2، 3، 4','2، 3، 4، 5','0، 1، 2، 3'],
 ['ثلاثة أعداد طبيعية متتالية مجموعها 12 هي:','3، 4، 5','2، 4، 6','4، 5، 6'],
 ['كم عدداً طبيعياً زوجياً يقع بين 1001 و1021؟','10','9','11'],
 ['كم عدداً طبيعياً يقع بين 200 و210 (دون العددين)؟','9','10','11'],
 ['أيّ الأعداد الآتية عدد طبيعي؟','187082','3.5','0.3'],
 ['العدد الطبيعي الذي يسبق 1000:','999','1001','100']
]);

ADDQ(6, 'math', 'الأعداد الطبيعية (2)', [
 ['كم صفراً في العدد سبعمئة ألف (700000)؟','5','6','3'],
 ['اكتب بالأرقام: أربعة مليارات','4000000000','4000000','400000000'],
 ['نصف قطر الأرض نحو ستة ملايين وثلاثمئة وسبعين ألف متر، ويُكتب:','6370000','6037000','637000'],
 ['اكتب بالأرقام: مليار وأربعة ملايين وخمسمئة ألف','1004500000','1045000000','1004050000'],
 ['في رزمة 1000 ورقة نقدية من فئة 500 ليرة. كم ليرة في الرزمة؟','500000','50000','5000000'],
 ['كتبت عبير العدد 500305707: «خمسة ملايين وثلاثمئة وخمسة آلاف وسبعمئة وسبعة». الصواب أن تبدأ بـ:','خمسمئة مليون','خمسين مليوناً','خمسة مليارات']
]);

ADDQ(6, 'math', 'الأعداد الطبيعية (3)', [
 ['قرّب 295992458 لأقرب مليون:','296000000','295000000','300000000'],
 ['قرّب 295992458 لأقرب مئة مليون:','300000000','200000000','296000000'],
 ['مساحة الصحراء الكبرى 5628000 كم². قرّبها لأقرب مليون:','6000000','5000000','5600000'],
 ['قرّب 19251000 لأقرب عشرة ملايين:','20000000','19000000','10000000'],
 ['تربح بطاقة اليانصيب ذات الرقم الأصغر. أيّها الرابحة؟','120258758','125258506','200100002'],
 ['أصغر الأعداد الآتية:','964322','20604321','59654324']
]);

ADDQ(6, 'math', 'المستقيم', [
 ['كم مستقيماً يمرّ بنقطة واحدة؟','عدد لا نهائي','مستقيم واحد','مستقيمان'],
 ['نصف المستقيم [AB) يبدأ من النقطة:','A','B','منتصف [AB]'],
 ['النقطة M تقع على المستقيم (AB) ولا تقع على القطعة [AB]. إذن M تقع:','على امتداد القطعة [AB]','بين A و B','خارج المستقيم (AB)'],
 ['المستقيمان (AQ) و(BQ) يتقاطعان في النقطة:','Q','A','B'],
 ['ثلاث نقاط يمرّ بها مستقيم واحد نقول إنها:','على استقامة واحدة','متعامدة','متوازية'],
 ['أيّ مما يأتي له طول يمكن قياسه؟','القطعة المستقيمة','المستقيم','نصف المستقيم']
]);

ADDQ(6, 'math', 'التعامد والتوازي', [
 ['المستقيمان العموديان على مستقيم ثالث:','متوازيان','متعامدان','متقاطعان'],
 ['المستقيمان الموازيان لمستقيم ثالث:','متوازيان','متعامدان','متقاطعان'],
 ['من نقطة A خارج المستقيم (d)، كم مستقيماً يمرّ بها ويعامد (d)؟','واحد فقط','اثنان','عدد لا نهائي'],
 ['من نقطة A خارج المستقيم (d)، كم مستقيماً يمرّ بها ويوازي (d)؟','واحد فقط','اثنان','لا يوجد'],
 ['إذا كان (d) يعامد (L) و(M) يعامد (L) فإن (d) و(M):','متوازيان','متعامدان','متقاطعان'],
 ['لرسم مستقيم يوازي مستقيماً آخر نستعمل:','المسطرة والكوس','المنقلة فقط','الفرجار فقط']
]);

ADDQ(6, 'math', 'الزوايا', [
 ['زاويتان متجاورتان على مستقيم، قياس إحداهما 89°. قياس الأخرى:','91°','89°','101°'],
 ['مستقيمان متقاطعان، قياس إحدى الزوايا 70°. قياس الزاوية المقابلة لها بالرأس:','70°','110°','20°'],
 ['كم زاوية يشكّل مستقيمان متقاطعان؟','4','2','3'],
 ['مجموع قياسات الزوايا الأربع حول نقطة تقاطع مستقيمين:','360°','180°','90°'],
 ['زاوية قياسها 120° نوعها:','منفرجة','حادة','قائمة'],
 ['زاوية قياسها 180° تسمى:','مستقيمة','قائمة','منفرجة']
]);

ADDQ(6, 'math', 'المثلث', [
 ['مثلث فيه زاويتان 35° و75°. قياس الزاوية الثالثة:','70°','80°','110°'],
 ['مثلث قائم الزاوية، إحدى زاويتيه الحادتين 25°. قياس الأخرى:','65°','75°','155°'],
 ['مثلث فيه زاويتان 45° و35°. نوعه بحسب زواياه:','منفرج الزاوية','حاد الزوايا','قائم الزاوية'],
 ['مثلث MNP فيه M = 35° وقياس N ضعفا قياس M. قياس P:','75°','70°','105°'],
 ['مثلث MNP فيه M = 30° وقياس N ضعفا قياس M. نوعه:','قائم الزاوية','حاد الزوايا','منفرج الزاوية'],
 ['مثلث أطوال أضلاعه 3 سم و3 سم و2.5 سم هو مثلث:','متساوي الساقين','متساوي الأضلاع','مختلف الأضلاع']
]);

/* ===== الوحدة الثانية ===== */
ADDQ(6, 'math', 'جمع الأعداد الطبيعية وطرحها', [
 ['8000000000 − 6000000000 = ؟','2000000000','200000000','14000000000'],
 ['120025323 + 236598 = ؟','120261921','120251921','122391303'],
 ['قروض مصرف: 23659823 ليرة في النصف الأول من العام و36895162 ليرة في الثاني. مجموعها:','60554985','60544985','13235339'],
 ['23053659 − 125963 = ؟','22927696','22937696','23179622'],
 ['مجموع الأعداد من 1 إلى 9:','45','90','55'],
 ['100 − 41 + 10 = ؟','69','49','151']
]);

ADDQ(6, 'math', 'ضرب الأعداد الطبيعية', [
 ['40 × 921 = ؟','36840','3684','368400'],
 ['0 × 3987268 = ؟','0','3987268','1'],
 ['1258 × 999 = 1258 × 1000 − 1258 = ؟','1256742','1257742','1259258'],
 ['9875 × 20 × 50 = ؟','9875000','987500','98750'],
 ['ملعب مستطيل طوله 11000 سم وعرضه 7500 سم. مساحته:','82500000 سم²','37000 سم²','8250000 سم²'],
 ['5000 × 362 × 2 = ؟','3620000','362000','36200000']
]);

ADDQ(6, 'math', 'قسمة الأعداد الطبيعية', [
 ['مستطيل مساحته 37800 سم² وعرضه 15 سم. طوله:','2520 سم','252 سم','37785 سم'],
 ['صندوق فيه 210 قطع حلوى ثمنه 4200 ليرة. ثمن القطعة:','20 ليرة','200 ليرة','2 ليرة'],
 ['دفع والدي 4050 ليرة ثمن 18 ليتراً من البنزين. ثمن الليتر:','225 ليرة','2250 ليرة','215 ليرة'],
 ['256 ÷ 0 = ؟','عملية غير ممكنة','0','256'],
 ['أيّ الأعداد الآتية باقي قسمته على 5 يساوي صفراً؟','725','723','451'],
 ['38400 ÷ 512 = ؟','75','750','85']
]);

ADDQ(6, 'math', 'القوى', [
 ['9⁴ = ؟','6561','36','729'],
 ['15³ = ؟','3375','45','225'],
 ['16³ = ؟','4096','48','256'],
 ['10⁹ بالصيغة القياسية:','1000000000','10000000000','100000000'],
 ['جداء ضرب العدد 45 بنفسه 7 مرات يُكتب:','45⁷','7⁴⁵','45 × 7'],
 ['مستودع أدوية مكعب الشكل طول حرفه 2 م. حجمه:','8 م³','6 م³','4 م³']
]);

ADDQ(6, 'math', 'ترتيب العمليات الحسابية', [
 ['9 + 6 × (8 − 5) = ؟','27','45','52'],
 ['2 × (1256 + 744) − 1000 = ؟','3000','1000','4000'],
 ['7² − 8 × 2 = ؟','33','82','45'],
 ['10³ − 10² = ؟','900','10','1000'],
 ['295 − 5 × 20 + 2 = ؟','197','5802','193'],
 ['أين نضع الأقواس ليصبح الناتج 40؟ 5 + 3 × 7 − 2','(5 + 3) × (7 − 2)','5 + (3 × 7) − 2','(5 + 3 × 7) − 2'],
 ['(3 + 5)² = ؟','64','34','16']
]);

ADDQ(6, 'math', 'متوازي الأضلاع', [
 ['متوازي أضلاع ABCD فيه AB = 13 سم و AD = 5 سم. محيطه:','36 سم','18 سم','65 سم'],
 ['متوازي أضلاع فيه زاوية قياسها 60°. قياس الزاوية المجاورة لها:','120°','60°','30°'],
 ['متوازي أضلاع ABCD فيه قياس B يساوي 130°. قياس D:','130°','50°','230°'],
 ['متوازي أضلاع ABCD فيه AB = 8 سم. طول CD:','8 سم','4 سم','16 سم'],
 ['قطعتان مستقيمتان متناصفتان في متوازي الأضلاع هما:','القطران','ضلعان متقابلان','ضلعان متتاليان'],
 ['تقاطع شريطين من الورق، حافتا كل منهما متوازيتان، يعطي شكلاً هو:','متوازي أضلاع','مثلث','دائرة']
]);

ADDQ(6, 'math', 'رسم متوازي الأضلاع', [
 ['شكل رباعي قطراه متناصفان هو:','متوازي أضلاع','شبه منحرف','مثلث'],
 ['لتعيين الرأس الرابع D لمتوازي الأضلاع ABCD بالفرجار نعتمد على أن:','كل ضلعين متقابلين متساويان في الطول','القطرين متعامدان','كل زواياه قائمة'],
 ['شكل رباعي فيه ضلعان متقابلان غير متوازيين:','ليس متوازي أضلاع','متوازي أضلاع','مستطيل'],
 ['متوازي أضلاع طولا قطريه 6 سم و4 سم. طول نصف القطر الأصغر:','2 سم','3 سم','4 سم'],
 ['لرسم الزاوية GMN = 70° في متوازي الأضلاع نستعمل:','المنقلة','الفرجار','الكوس']
]);

/* ===== الوحدة الثالثة ===== */
ADDQ(6, 'math', 'تحليل عدد إلى جداء عوامل', [
 ['تحليل 80 إلى جداء عوامل أولية:','2⁴ × 5','2³ × 10','8 × 10'],
 ['تحليل 108 إلى جداء عوامل أولية:','2² × 3³','2³ × 3²','4 × 27'],
 ['تحليل 140 إلى جداء عوامل أولية:','2² × 5 × 7','2 × 70','2² × 35'],
 ['تحليل 216 إلى جداء عوامل أولية:','2³ × 3³','2⁴ × 3²','2 × 108'],
 ['تحليل 105 إلى جداء عوامل أولية:','3 × 5 × 7','3 × 35','5 × 21'],
 ['أيّ الأعداد الآتية يقبل القسمة على 2؟','312','221','185'],
 ['العدد 7 أولي لأن له قاسمين فقط هما:','1 و7','7 و14','0 و7']
]);

ADDQ(6, 'math', 'القاسم المشترك الأكبر', [
 ['القاسم المشترك الأكبر للعددين 435 و150:','15','5','30'],
 ['القاسم المشترك الأكبر للأعداد 98 و75 و60:','1','2','3'],
 ['الكسر 88/99 بأبسط شكل:','8/9','4/9','44/49'],
 ['الكسر 231/441 بأبسط شكل:','11/21','33/63','21/11'],
 ['الكسر 32/40 بأبسط شكل:','4/5','8/10','16/20'],
 ['63 عبوة صابون و54 عبوة ملمّع و36 عبوة معقّم توزَّع في سلال متماثلة. أكبر عدد من السلال:','9','3','18']
]);

ADDQ(6, 'math', 'المضاعف المشترك الأصغر', [
 ['المضاعف المشترك الأصغر للعددين 14 و20:','140','280','2'],
 ['المضاعف المشترك الأصغر للأعداد 15 و18 و24:','360','6480','3'],
 ['المضاعف المشترك الأصغر للأعداد 8 و10 و12:','120','960','240'],
 ['إذا كان A = 2 × 5 و B = 3 × 7 فإن المضاعف المشترك الأصغر لهما:','210','21','31'],
 ['المضاعف المشترك الأصغر للأعداد 12 و10 و20:','60','2400','120'],
 ['أصغر خمسة مضاعفات موجبة للعدد 8:','8، 16، 24، 32، 40','1، 2، 4، 8، 16','8، 18، 28، 38، 48']
]);

ADDQ(6, 'math', 'المتوسط الحسابي', [
 ['علامات كريم: 9، 10، 10، 10، 7، 8. متوسطها الحسابي:','9','10','54'],
 ['نقاط فريق السلة في 4 مباريات: 90، 101، 108، 85. المتوسط الحسابي:','96','384','97'],
 ['علامات رهف في 7 اختبارات: 10، 9، 10، 5، 5، 8، 9. متوسطها:','8','56','9'],
 ['متوسط علامات رهف في 7 اختبارات 8، ونالت 8 في الاختبار الثامن. متوسطها الجديد:','8','9','7'],
 ['المتوسط الحسابي للأعداد 132، 138، 145، 137، 148:','140','700','145']
]);

ADDQ(6, 'math', 'حالات خاصة: مستطيل، معيّن، مربع', [
 ['شكل رباعي أطوال أضلاعه الأربعة متساوية هو:','معيّن','مستطيل غير مربع','شبه منحرف'],
 ['شكل رباعي زواياه الأربع قائمة هو:','مستطيل','شبه منحرف','معيّن غير مربع'],
 ['معيّن زواياه قائمة هو:','مربع','شبه منحرف','مثلث'],
 ['أيّ الأشكال الآتية ليس متوازي أضلاع؟','شبه المنحرف','المعيّن','المربع'],
 ['في المربع ABCD قياس الزاوية A:','90°','60°','180°'],
 ['لتعيين الرأس الرابع للمعيّن بمعرفة ضلعين متتاليين نستعمل:','الفرجار','المنقلة فقط','الكوس فقط']
]);

ADDQ(6, 'math', 'التناظر المحوري', [
 ['كم محور تناظر للمربع؟','4','2','1'],
 ['كم محور تناظر للخماسي المنتظم؟','5','1','10'],
 ['كم محور تناظر للدائرة؟','عدد لا نهائي','1','4'],
 ['نظير شكل بالنسبة إلى محور:','يطابق الشكل الأصلي','أكبر منه','أصغر منه'],
 ['نقطة A تبعد 3 سم عن محور التناظر. نظيرها يبعد عن المحور:','3 سم','6 سم','0 سم'],
 ['أداة تساعد على رسم نظير شكل بالنسبة إلى محور:','ورقة شفافة','الميزان','الساعة']
]);

ADDQ(6, 'math', 'شبه المنحرف', [
 ['شبه منحرف طولا قاعدتيه 6 سم و2 سم. طول قاعدته الوسطى:','4 سم','8 سم','3 سم'],
 ['شبه منحرف طولا قاعدتيه 9 سم و5 سم. طول قاعدته الوسطى:','7 سم','14 سم','4 سم'],
 ['القاعدة الوسطى في شبه المنحرف تصل بين:','منتصفي الساقين','منتصفي القاعدتين','رأسين متقابلين'],
 ['القاعدة الوسطى في شبه المنحرف:','توازي القاعدتين','تعامد القاعدتين','تساوي القاعدة الكبرى'],
 ['الضلعان غير المتوازيين في شبه المنحرف يسمّيان:','الساقين','القاعدتين','القطرين'],
 ['شبه منحرف قاعدته الوسطى 6 سم وقاعدته الكبرى 8 سم. طول قاعدته الصغرى:','4 سم','2 سم','7 سم']
]);

/* ===== الوحدة الرابعة ===== */
ADDQ(6, 'math', 'جمع الكسور المركبة وطرحها', [
 ['1 و2/7 + 3 و4/7 = ؟','4 و6/7','4 و6/14','3 و6/7'],
 ['2 و1/2 + 1 و1/3 = ؟','3 و5/6','3 و2/5','4 و5/6'],
 ['7 و3/4 − 2 و1/4 = ؟','5 و1/2','5 و1/4','9 و1/2'],
 ['الكسر 17/5 بصيغة كسر مركب:','3 و2/5','2 و7/5','5 و2/3'],
 ['حديقة مستطيلة طولها 5 و1/2 م وعرضها 3 و1/2 م. محيطها:','18 م','9 م','19 و1/4 م'],
 ['لدى سارة 5 و1/2 كغ من الرز، استهلكت 2 و1/4 كغ. كم بقي لديها؟','3 و1/4 كغ','3 و1/2 كغ','7 و3/4 كغ']
]);

ADDQ(6, 'math', 'ضرب الكسور', [
 ['يسير فؤاد بسرعة 100 كم في الساعة مدة 2 و3/4 ساعة. المسافة التي يقطعها:','275 كم','203 كم','250 كم'],
 ['5 × 6 و1/5 = ؟','31','30 و1/5','11 و1/5'],
 ['8 × 3/4 = ؟','6','24/32','11/4'],
 ['3 × 2 و1/3 = ؟','7','6 و1/3','5 و1/3'],
 ['1 و1/2 × 1 و1/3 = ؟','2','1 و1/6','2 و1/6'],
 ['لضرب كسر مركب بعدد نضرب القسم الصحيح بالعدد، ثم:','نضرب الكسر بالعدد ونجمع الناتجين','نترك الكسر كما هو','نقسم الكسر على العدد']
]);

ADDQ(6, 'math', 'قسمة كسرين', [
 ['5/6 ÷ 5/12 = ؟','2','25/72','1/2'],
 ['3/4 ÷ 3 = ؟','1/4','9/4','4'],
 ['1 و1/2 ÷ 3/4 = ؟','2','9/8','1/2'],
 ['باحة مساحتها 190 م²، ومساحة قطعة البلاط 2/5 م². عدد القطع اللازمة:','475','76','380'],
 ['يحرث فلاح 1 و1/2 هكتار في اليوم. كم يوماً يحتاج لحراثة 6 هكتارات؟','4','9','7 و1/2'],
 ['مقلوب العدد 3:','1/3','3','0.3']
]);

ADDQ(6, 'math', 'العبارات الجبرية', [
 ['قيمة العبارة 2 × x + 1 عندما x = 15:','31','32','17'],
 ['قيمة العبارة 7 × x − 2 عندما x = 15:','103','105','91'],
 ['العبارة الجبرية التي تعبّر عن: «ثلث x مضافاً إليه 1»','x ÷ 3 + 1','3 × x + 1','x + 3 + 1'],
 ['في صندوق x علبة ألوان، في كل علبة 12 قلماً. عدد الأقلام في الصندوق:','12 × x','12 + x','x ÷ 12'],
 ['مصروف سامي ضعفا مصروف رامي y مضافاً إليه 100 ليرة. مصروف سامي:','2 × y + 100','y + 2 + 100','2 × (y + 100)'],
 ['مكعب العدد x مضافاً إليه 8:','x³ + 8','3 × x + 8','x² + 8'],
 ['خمسة أضعاف العدد x مضافاً إليه 4:','5 × x + 4','x + 5 + 4','5 × (x + 4)']
]);

ADDQ(6, 'math', 'المعادلات', [
 ['حل المعادلة x + 20 = 50:','30','70','20'],
 ['في علبة x قطعة شوكولا، أُكلت 3 قطع فبقي 17. المعادلة المناسبة:','x − 3 = 17','x + 3 = 17','3 − x = 17'],
 ['حل المعادلة x − 3 = 17:','20','14','51'],
 ['صندوق فيه 40 كرة، سقط منه x كرة فبقي 32. قيمة x:','8','72','12'],
 ['حل المعادلة 10 × x = 30:','3','20','300'],
 ['حل المعادلة 4 × x + 3 = 11:','2','3','8'],
 ['أيّ قيمة لـ c تحقق المعادلة 30 × c + 70 = 130؟','2','3','4']
]);

ADDQ(6, 'math', 'الانسحاب', [
 ['انسحبت النقطة (5، 4) ثلاث وحدات نحو اليسار. صورتها:','(2، 4)','(8، 4)','(5، 1)'],
 ['انسحبت النقطة (3، 7) ست وحدات نحو الأسفل. صورتها:','(3، 1)','(9، 7)','(3، 13)'],
 ['لرسم صورة مضلّع وفق انسحاب نرسم صور:','رؤوسه ثم نصل بينها','أضلاعه فقط','مركزه فقط'],
 ['انسحاب 7 وحدات نحو اليسار ثم 6 وحدات نحو الأسفل يكافئ انسحاباً واحداً:','7 نحو اليسار و6 نحو الأسفل','13 وحدة نحو اليسار','وحدة واحدة نحو الأسفل'],
 ['الانسحاب يحافظ على:','الأطوال وقياسات الزوايا','موقع الشكل','الأطوال فقط دون الزوايا'],
 ['شكل انسحب 5 وحدات نحو اليمين. لإعادته إلى مكانه نسحبه:','5 وحدات نحو اليسار','5 وحدات نحو اليمين','10 وحدات نحو اليسار']
]);

ADDQ(6, 'math', 'الدوران', [
 ['الأداة المناسبة لرسم دائرة:','الفرجار','المسطرة','المنقلة'],
 ['إذا كانت النقطة A′ صورة A وفق دوران مركزه O، فإن:','OA′ = OA','OA′ = 2 × OA','OA′ = 0'],
 ['صورة مركز الدوران O وفق هذا الدوران:','النقطة O نفسها','نقطة أخرى','لا صورة لها'],
 ['لرسم صورة نقطة وفق دوران نستعمل المسطرة و:','المنقلة','الكوس فقط','الميزان'],
 ['مربع مركزه O دار حول O بزاوية 90°. صورته:','تنطبق على المربع نفسه','مستطيل','مثلث'],
 ['يدور عقرب الدقائق في 15 دقيقة بزاوية قياسها:','90°','15°','180°']
]);

/* ===== الوحدة الخامسة ===== */
ADDQ(6, 'math', 'جمع الأعداد العشرية وطرحها', [
 ['165.211 + 23.1 + 14.12 = ؟','202.431','166.854','202.341'],
 ['150 − 70.99 = ؟','79.01','80.01','79.99'],
 ['30.12 + 22 = ؟','52.12','30.34','32.32'],
 ['22.15 + 5.7 = ؟','27.85','22.72','27.22'],
 ['522 + 71.99 = ؟','593.99','594.99','522.7199'],
 ['عند جمع أعداد عشرية نرتّبها بحيث تكون ... تحت بعضها.','الفواصل','الأرقام اليسرى','الأرقام اليمنى']
]);

ADDQ(6, 'math', 'ضرب الأعداد العشرية (1)', [
 ['العدد 0.218 بصيغة كسر عادي:','218/1000','218/100','218/10'],
 ['4.3 × 5.2 = ؟','22.36','223.6','20.36'],
 ['تقدير ناتج 32.1 × 5.3:','160','16','1600'],
 ['7.1 × 8.2 = ؟','58.22','5.822','582.2'],
 ['يأخذ عامل 1750 ليرة عن تبليط المتر المربع، وبلّط 95.5 م². أجرته:','167125 ليرة','16712.5 ليرة','167025 ليرة'],
 ['لحساب 4.13 × 22 باستعمال الكسور نكتب:','413/100 × 22','413/10 × 22','413/1000 × 22']
]);

ADDQ(6, 'math', 'ضرب الأعداد العشرية (2)', [
 ['3.14 × 24 = ؟','75.36','7.536','753.6'],
 ['0.007 × 13 = ؟','0.091','0.91','0.0091'],
 ['17.513 × 1000 = ؟','17513','1751.3','175130'],
 ['4.8 × 22.13 = ؟','106.224','1062.24','10.6224'],
 ['يطلي دهّان المتر المربع بـ 1500 ليرة. أجرته عن جدار مساحته 12.25 م²:','18375 ليرة','1837.5 ليرة','183750 ليرة'],
 ['مربع طول ضلعه 6.5 سم. مساحته:','42.25 سم²','26 سم²','13 سم²'],
 ['مستطيل بُعداه 15.8 سم و4.1 سم. مساحته:','64.78 سم²','39.8 سم²','647.8 سم²']
]);

ADDQ(6, 'math', 'قسمة الأعداد العشرية', [
 ['209.44 ÷ 17 = ؟','12.32','1.232','123.2'],
 ['36.15 ÷ 5 = ؟','7.23','72.3','7.3'],
 ['1422.9 ÷ 27 = ؟','52.7','5.27','527'],
 ['256.2 ÷ 100 = ؟','2.562','25620','25.62'],
 ['1.95 ÷ 13 = ؟','0.15','1.5','0.015'],
 ['قطع عامر 4.5 كم في 9 دقائق، وقطع فؤاد 3.6 كم في 6 دقائق. الأسرع:','فؤاد','عامر','متساويان']
]);

ADDQ(6, 'math', 'وحدات قياس الطول', [
 ['0.45 كم = ... ديكامتر','45','4.5','450'],
 ['212 ديكامتراً = ... كم','2.12','21.2','2120'],
 ['450 م = ... هكتومتر','4.5','45','0.45'],
 ['1400 سم = ... م','14','140','1.4'],
 ['أيّ مقارنة صحيحة؟','5 م < 5 ديكامتر','1 كم < 20 ديكامتر','2 م > 200 سم'],
 ['قطع صلاح 197.65 كم، منها 32250 م من قريته إلى حمص. المسافة الباقية من حمص إلى دمشق:','165.4 كم','229.9 كم','197.33 كم'],
 ['للانتقال من وحدة طول إلى الوحدة الأدنى منها مباشرة نضرب بالعدد:','10','100','1000']
]);

ADDQ(6, 'math', 'حساب المحيط', [
 ['دائرة نصف قطرها 30 ملم. محيطها (π = 3.14):','188.4 ملم','94.2 ملم','2826 ملم'],
 ['دائرة قطرها 5 سم. محيطها (π = 3.14):','15.7 سم','31.4 سم','7.85 سم'],
 ['إذا أضفنا 2 سم إلى كل ضلع من أضلاع مربع، فإن محيطه يزداد:','8 سم','2 سم','4 سم'],
 ['إذا ضاعفنا نصف قطر دائرة فإن محيطها:','يُضرب بالعدد 2','يُضرب بالعدد 4','لا يتغيّر'],
 ['مستطيل طوله 5.5 سم وعرضه 4.5 سم. محيطه:','20 سم','10 سم','24.75 سم'],
 ['مثلث محيطه 12 سم ألصق بمثلث محيطه 17 سم على ضلع مشترك طوله 5 سم. محيط الشكل الناتج:','19 سم','29 سم','24 سم'],
 ['مربع محيطه 18 سم. طول ضلعه:','4.5 سم','9 سم','6 سم']
]);

ADDQ(6, 'math', 'حساب المساحة', [
 ['مثلث قائم طولا ضلعي القائمة فيه 6 سم و3 سم. مساحته:','9 سم²','18 سم²','4.5 سم²'],
 ['مستطيل ABCD بُعداه 9.6 سم و3.5 سم. مساحة المثلث ACD:','16.8 سم²','33.6 سم²','13.1 سم²'],
 ['القطر يقسم المستطيل إلى مثلثين، مساحة كل منهما:','نصف مساحة المستطيل','ربع مساحة المستطيل','مساحة المستطيل نفسها'],
 ['مستطيل محيطه 18 سم وطوله 6 سم. مساحته:','18 سم²','108 سم²','36 سم²'],
 ['مستطيل بُعداه 8 سم و7 سم قُصّ منه مربع طول ضلعه 6 سم. مساحة الباقي:','20 سم²','50 سم²','2 سم²'],
 ['مساحة المثلث القائم =','جداء ضلعي القائمة ÷ 2','جداء ضلعي القائمة','مجموع أطوال أضلاعه']
]);

ADDQ(6, 'math', 'التشابه', [
 ['صورة بُعداها 5 و4 كُبّرت بضرب كل من بعديها بالعدد 2. بُعدا الصورة الجديدة:','10 و8','5 و8','7 و6'],
 ['صورة بُعداها 5 و4، وصورة أخرى بُعداها 5 و8. الصورتان:','غير متشابهتين','متشابهتان','متطابقتان'],
 ['متوازي أضلاع ضلعاه 5 و7، وآخر ضلعاه 10 و12. هما:','غير متشابهين','متشابهان','متطابقان'],
 ['مثلثان متشابهان أطوال الثاني ضعفا أطوال الأول. ضلع طوله 4 سم في الأول يقابله في الثاني:','8 سم','6 سم','2 سم'],
 ['مثلثان متشابهان: ظل عصا 100 سم وظل شجرة 200 سم، وطول العصا 150 سم. طول الشجرة:','300 سم','250 سم','75 سم'],
 ['في الشكلين المتشابهين نحصل على أطوال أحدهما من الآخر بـ:','الضرب بالعدد نفسه','إضافة العدد نفسه','طرح العدد نفسه']
]);

})();
(function(){
/* أسئلة إضافية مستوحاة من دليل المعلم — العلوم، الحلقة الأولى (الصفوف 3–6؛ الدليل لا يغطّي الصفّين الأول والثاني) */
function ADDQ(g, s, t, qs) { const l = (CUR[g][s] || []).find(x => x.t === t); if (l) l.q = l.q.concat(qs); }

/* ===== الصف الثالث — الفصل الأول ===== */
ADDQ(3, 'sci', 'بيئتي تدعمني', [
 ['لماذا تفتح السمكة فمها باستمرار في أثناء السباحة؟','ليدخل الماء إلى غلاصمها فتأخذ منه الأكسجين','لتأكل الرمل','لتصدر أصواتًا','لتطرد الماء من جسمها'],
 ['يتنفّس الشرغوف (صغير الضفدع) في الماء بوساطة:','الغلاصم','الرئتين','فتحة النفث','الأنف'],
 ['الطرفان الخلفيان للأرنب أطول من الأماميين، وهذا يساعده على:','القفز والجري بسرعة','السباحة','الطيران','تسلّق الأشجار'],
 ['لماذا للجمل أرجل طويلة؟','لتُبعد جسمه عن حرارة الرمال الملتهبة','ليسبح في الماء','ليختبئ بين الأشجار','ليصطاد الأسماك'],
 ['الحوت يعيش في البحر لكنه يتنفّس:','الهواء الجوي برئتيه','بالغلاصم مثل السمك','بجلده فقط','لا يتنفّس أبدًا'],
 ['أهداب الجمل الطويلة تحمي عينيه من:','الرمال والغبار','المطر','الثلج','الظلام'],
]);
ADDQ(3, 'sci', 'تتكيّف لتعيش', [
 ['يستعمل الصقر منقاره المعكوف الحاد في:','تمزيق فريسته','شرب الماء','حفر التراب','السباحة'],
 ['يرى الصقر فريسته من مسافة بعيدة بفضل:','بصره الحاد','ذيله الطويل','لونه','صوته العالي'],
 ['أيّ هذه الحيوانات لا يتكيّف بالتمويه (التخفّي باللون)؟','الجمل','الحرباء','فرس النبي','الجرادة الخضراء'],
 ['تساعد الخطوط على جسم حمار الوحش على:','التخفّي من الحيوانات المفترسة','الطيران','صيد الفرائس','حفر الأرض'],
 ['يمضي النمر النهار في أماكن ظليلة وينشط ليلًا هربًا من:','الحرارة المرتفعة','البرد الشديد','المطر','الثلج'],
]);
ADDQ(3, 'sci', 'السلسلة الغذائية', [
 ['أعداد المستهلكات الأولية في الطبيعة مقارنة بالمستهلكات الثانوية:','أكثر','أقل','مساوية دائمًا'],
 ['في السلسلة: أعشاب ← جرادة ← عصفور ← أفعى\nالعصفور هو:','مستهلك ثانوي','منتج','مستهلك أولي','مستهلك ثالثي'],
 ['في السلسلة: أعشاب ← جراد ← عصفور ← أفعى\nماذا يحدث للعصافير لو اختفى الجراد؟','يقلّ غذاؤها فتقلّ أعدادها','تزداد أعدادها','لا تتأثّر أبدًا','تصبح منتجات'],
 ['لماذا تبدأ كل سلسلة غذائية بنبات أخضر؟','لأن النبات يصنع غذاءه بنفسه','لأن النبات يأكل الحيوانات','لأن النبات أكبر الكائنات','لأن النبات لا يحتاج إلى الضوء'],
 ['إذا ازدادت أعداد الأفاعي كثيرًا في الحقل فإن أعداد العصافير:','تقلّ','تزداد','لا تتغيّر'],
]);
ADDQ(3, 'sci', 'طبيب نفسه', [
 ['لماذا تغمس الفيلة أجسامها في الطين؟','لتعدّل درجة حرارة جسمها','لتصطاد فريستها','لتبني بيتها','لتغيّر لونها'],
 ['تنظّف القرود بعضها بعضًا للتخلّص من:','الحشرات والقمّل والطفيليات','الماء','الطعام','الفرو كلّه'],
 ['كيف تحمي الغزلان نفسها في الغابة؟','بالتخفّي والجري السريع والعيش في قطعان','بأنيابها الحادة','بالذهاب إلى الطبيب البيطري','بأشواكها'],
 ['كيف يُعطى الدواء للدجاج في المداجن عادة؟','يوضع في ماء الشرب','يُدهن على الريش','يُرشّ على البيض','يُدفن في التراب'],
 ['لماذا يأخذ الكلب اللقاح عند الطبيب البيطري؟','ليحميه من الأمراض','ليكبر بسرعة','ليتغيّر لونه','ليصبح أسرع في الجري'],
]);
ADDQ(3, 'sci', 'الحضن الدافئ', [
 ['تتشابه السلحفاة البرية والسلحفاة البحرية في أن كلتيهما:','تضع بيوضها في التراب وتتركها','تحمل صغارها في جراب','ترقد على البيض حتى يفقس','تُطعم صغارها كل يوم'],
 ['في بعض أنواع الضفادع يحمي الأب صغاره بوضعها في:','فمه','جرابه','عشّ على الشجرة','حفرة في الرمل'],
 ['لماذا تحتاج صغار العصافير إلى عناية والديها؟','لأنها تولد ضعيفة لا تستطيع تأمين غذائها','لأنها كبيرة جدًا','لأنها تعيش في الماء','لأنها تطير منذ ولادتها'],
 ['صغار النعام يعتني بها:','الأب والأم','لا أحد، تعتمد على نفسها','السلحفاة','القرد'],
 ['أيّ هذه الحيوانات تعتني الأم بصغيرها وترضعه؟','الفيل','السمكة','السلحفاة','الضفدع'],
]);
ADDQ(3, 'sci', 'قوة وجذب وتأثير', [
 ['إذا قطعنا مغناطيسًا إلى نصفين نحصل على:','مغناطيسين لكلّ منهما قطبان','قطب شمالي وحده وقطب جنوبي وحده','قطعتي حديد لا تجذبان','مغناطيس واحد فقط'],
 ['وضعنا ورقة بين مغناطيس ومشبك حديدي، ماذا يحدث؟','يبقى المغناطيس يجذب المشبك','يتوقّف الجذب تمامًا','يحترق الورق','يتنافر المشبك والمغناطيس'],
 ['هل يجذب المغناطيس دبوسًا حديديًا داخل علبة بلاستيكية؟','نعم، لأن تأثيره ينتقل عبر البلاستيك','لا، لأن البلاستيك يوقف تأثيره دائمًا','نعم، لأن البلاستيك يُجذب للمغناطيس','لا، لأن الدبوس لا يُجذب'],
 ['أيّ هذه الأشياء لا يجذبه المغناطيس؟','ملعقة خشبية','مسمار حديدي','مشبك حديدي','برادة حديد'],
 ['مغناطيس (أ) جذب 10 مشابك ومغناطيس (ب) جذب 3 مشابك. أيّهما أقوى؟','المغناطيس (أ)','المغناطيس (ب)','متساويان'],
]);
ADDQ(3, 'sci', 'حقل يحمل أسرارًا', [
 ['يتّجه القطب الشمالي لإبرة البوصلة نحو:','الشمال','الجنوب','الشرق','الغرب'],
 ['لماذا تتّجه إبرة البوصلة دائمًا نحو الشمال؟','لأن الأرض تعمل كمغناطيس كبير','لأن الريح تدفعها','لأن الشمس تجذبها','لأن الإبرة ثقيلة'],
 ['الأحجار السوداء (حجر المغنتيت) التي تجذب الحديد في الطبيعة هي:','مغناطيس طبيعي','فحم','حجر عادي لا يجذب شيئًا','قطع بلاستيك'],
 ['بين قطبين متماثلين متنافرين، تأخذ خطوط برادة الحديد شكلًا:','متباعدًا لا يصل بين القطبين','متّصلًا بين القطبين','مختفيًا تمامًا','دائريًا حول الوسط فقط'],
]);
ADDQ(3, 'sci', 'تنتشر لتعيش', [
 ['لماذا لبذور الصنوبر غلاف مجنّح؟','لتحملها الرياح إلى أماكن بعيدة','لتطفو على الماء','لتلتصق بفرو الحيوانات','لتصبح ثقيلة'],
 ['لماذا تنتشر البذور بعيدًا عن النبات الأم؟','لتجد مكانًا مناسبًا للنمو بلا ازدحام','لتموت بسرعة','لتعود إلى الشجرة','لتتحوّل إلى ثمار'],
 ['بعض الثمار تنفجر عند ارتفاع الحرارة فـ:','تنثر بذورها بعيدًا','تتحوّل إلى أزهار','تموت بذورها','تصبح جذورًا'],
 ['السنجاب يخزّن البذور للشتاء وينسى بعضها في التراب، فماذا يحدث؟','قد تنمو نباتات جديدة','تتحوّل إلى حجارة','تطير مع الريح','لا شيء أبدًا'],
 ['أيّهما يعطي نباتًا مزهرًا بشكل أسرع؟','الشتلة','البذرة','متساويان'],
]);
ADDQ(3, 'sci', 'إنتاش البذور', [
 ['هل تحتوي بذور القمح الجافة على جنين حيّ؟','نعم، والدليل أنها تنتش إذا زُرعت','لا، لأنها جافة','لا، الجنين موجود في الجذر','لا، القمح لا بذور له'],
 ['أيّ هذه النباتات نزرعه عادة من بذوره؟','عبّاد الشمس','النرجس (من البصلة)','البطاطا (من الدرنة)'],
 ['لماذا ننقع البذور في الماء قبل زراعتها؟','لتمتصّ الماء فيبدأ الرشيم بالنمو','لنقتل الرشيم','لنغيّر لونها','لنزيل الفلقات'],
 ['الفلقتان في بذرة الفول تغذّيان:','الرشيم في أثناء نموّه','التربة','الثمار','الأزهار'],
 ['عندما تنتش البذرة يخرج منها أولًا:','الجذير','الثمرة','الزهرة','الورقة الكبيرة'],
]);
ADDQ(3, 'sci', 'أنمو لكن بشروط', [
 ['وضعنا بذورًا على قطن مبلّل وأخرى على قطن جاف في الغرفة نفسها. أيّ شرط نختبر؟','الرطوبة (الماء)','الحرارة','سلامة البذرة','لون البذرة'],
 ['وضعنا بذورًا على قطن مبلّل في الثلاجة وأخرى في الغرفة. أيّ شرط نختبر؟','الحرارة','الرطوبة','سلامة البذرة','حجم البذرة'],
 ['نبتة صغيرة وُضعت في خزانة مظلمة ولم تُسقَ. ماذا سيحدث لها؟','ستذبل وتموت','ستنمو أسرع','ستعطي ثمارًا','لن تتغيّر'],
 ['أيّ هذه النباتات يمكن أن ينمو في الرمال؟','النخيل (التمر)','زنبق الماء','الأرز في الماء','الطحالب'],
 ['لماذا تتضرّر الكائنات الحية كلها لو لم تنتش البذور؟','لأن النباتات غذاء لكثير من الكائنات','لأن النباتات تأكل الحيوانات','لأن البذور سامة','لأن الحيوانات لا تأكل إلا البذور'],
]);
ADDQ(3, 'sci', 'مراحل نمو النبات', [
 ['يُزرع النرجس عادة من:','البصلة','الثمرة','الورقة','الزهرة'],
 ['بذرة التمر بذرة:','وحيدة الفلقة','ثنائية الفلقة','بلا رشيم','ثلاثية الفلقة'],
 ['أيّ هذه البذور ثنائية الفلقة؟','اللوز','القمح','الذرة','التمر'],
 ['بعد مرحلة النبات المزهر تأتي مرحلة:','النبات المثمر','البادرة','البذرة','النبات الفتي'],
 ['لماذا تذبل فلقتا بذرة الفول مع نموّ البادرة؟','لأن الغذاء المدّخر فيهما يُستهلك في النمو','لأنهما مريضتان','لأن الشمس تحرقهما','لأن التربة تأكلهما'],
]);
ADDQ(3, 'sci', 'أقيس بأدواتي', [
 ['ملأنا عبوة سعتها 3 لتر بالماء، ثم صببنا منها في عبوة سعتها 2 لتر حتى امتلأت. كم بقي في الأولى؟','1 لتر','2 لتر','3 لتر','5 لتر'],
 ['بأيّ واحدة نقيس كتلة خاتم صغير؟','الغرام','الكيلوغرام','اللتر','الميليلتر'],
 ['نقيس كمية الدواء السائل في عبوة صغيرة بواحدة:','الميليلتر','الكيلوغرام','المتر','النيوتن'],
 ['كم كوبًا من الماء يحتاج الإنسان يوميًا تقريبًا؟','8 أكواب','كوب واحد','30 كوبًا','لا يحتاج إلى الماء'],
 ['ثقل الجسم على سطح القمر مقارنة بثقله على الأرض:','أقلّ','أكبر','مساوٍ له'],
]);
ADDQ(3, 'sci', 'مناطق النمو عند النبات', [
 ['لماذا يزداد حمل شجرة الزيتون للثمار بعد تقليمها؟','لإزالة الأغصان الميتة ووصول الضوء إليها بشكل أفضل','لأن التقليم يقتل الجذور','لأن التقليم يقلّل الماء','لأن الأوراق تكثر على الأرض'],
 ['رسمنا خطوطًا متساوية البعد على جذر صغير، فبعد أيام تتباعد الخطوط أكثر عند:','نهاية الجذر','قاعدة الجذر قرب البذرة','لا تتباعد أبدًا'],
 ['أيّ هذه لا يدلّ على نموّ النبات؟','تغيّر لون الإناء','زيادة طوله','زيادة وزنه','ظهور أوراق جديدة'],
 ['إذا تضرّرت نهاية الجذر فإن الجذر:','يتوقّف عن الطول','يطول أسرع','يتحوّل إلى ساق','يعطي أزهارًا'],
]);
ADDQ(3, 'sci', 'خيرات بلادي', [
 ['يتشابه التفاح والخوخ في أن لكلّ منهما:','قشرة ولبًّا وبذورًا','اللون نفسه','العدد نفسه من البذور','الحجم نفسه'],
 ['يختلف التفاح عن الخوخ في:','الشكل واللون وعدد البذور','أن لكليهما قشرة','أن لكليهما لبًّا','أن لكليهما بذورًا'],
 ['في ثمرة الخيار نأكل:','القشرة واللب والبذور','القشرة فقط','البذور فقط','الجذر'],
 ['أيّ هذه ثمرة بسيطة؟','الزيتون','التوت','التين'],
 ['الجزء الذي نأكله غالبًا من البطيخ هو:','اللب','القشرة الخضراء القاسية','الأوراق','الجذر'],
]);
ADDQ(3, 'sci', 'ساكنة ومتحركة', [
 ['لماذا يفقد البالون المشحون شحنته إذا تُرك في الهواء فترة طويلة؟','لأنه يتبادل الشحنات مع الهواء','لأنه ينفجر','لأنه يبرد','لأنه يصبح مغناطيسًا'],
 ['ما فائدة وصلة التأريض في الأجهزة الكهربائية؟','حماية الأجهزة والأشخاص من الصعق الكهربائي','زيادة الإضاءة','تشغيل الجهاز أسرع','تبريد الجهاز'],
 ['قرّبنا مشطًا مشحونًا من قصاصات ورق صغيرة، ماذا يحدث؟','تنجذب القصاصات إلى المشط','تبتعد القصاصات عن المشط','تحترق القصاصات','لا يحدث شيء'],
 ['الجسم المعتدل كهربائيًا يحتوي على:','شحنات موجبة وسالبة متساوية','شحنات سالبة فقط','شحنات موجبة فقط','لا يحتوي أيّ شحنات'],
 ['دلكنا بالونًا بكفّ صوفي ثم قرّبناه من الكفّ نفسه، فإنهما:','يتجاذبان','يتنافران','لا يتأثّران'],
]);

/* ===== الصف الرابع — الفصل الأول ===== */
ADDQ(4, 'sci', 'بنى تتحرك', [
 ['أيّ هذه الحيوانات له هيكل خارجي؟','الصرصور','الضفدع','السمكة','الحصان'],
 ['المحار له:','غطاء خارجي قاسٍ (صدفة)','هيكل عظمي داخلي','عمود فقري','لا شيء يحمي جسمه'],
 ['أيّ مجموعة كلها حيوانات لها هيكل عظمي داخلي؟','السحلية، الطائر، الحصان','قنديل البحر، الدودة، الحصان','العنكبوت، السرطان، الطائر','الدودة، النمل، القطة'],
 ['لماذا يفقد قنديل البحر شكله إذا أُخرج من الماء؟','لأنه ليس له هيكل يدعم جسمه','لأن عظامه تنكسر','لأنه يتجمّد','لأن صدفته تذوب'],
]);
ADDQ(4, 'sci', 'عظامي تدعمني', [
 ['عظام القفص الصدري من العظام:','المسطّحة','الطويلة','القصيرة'],
 ['عظم العضد من العظام:','الطويلة','المسطّحة','القصيرة'],
 ['لماذا يتحرّك الفك السفلي بينما لا تتحرّك عظام الجمجمة؟','لأن مفصله متحرّك ومفاصل الجمجمة ثابتة','لأنه ليس له مفصل','لأنه مصنوع من غضروف فقط','لأنه أكبر عظام الجسم'],
 ['مفصل المرفق (الكوع) يصل بين عظمي:','العضد والساعد','الفخذ والساق','الجمجمة والفقرات','الأضلاع والقص'],
 ['مفصل الكتف من المفاصل:','المتحركة','الثابتة','نصف المتحركة'],
]);
ADDQ(4, 'sci', 'أصبحت أكبر', [
 ['لماذا عدد عظام الطفل أكبر من عدد عظام الإنسان البالغ؟','لأن بعض عظامه تندمج مع بعضها عند النمو','لأن البالغ يفقد عظامًا عند المرض','لأن عظام الطفل أطول','لأن الطفل يأكل أكثر'],
 ['هل يملك الشخص الطويل عظامًا أكثر من الشخص القصير؟','لا، الاختلاف في طول العظام لا في عددها','نعم، أكثر بكثير','نعم، عظم إضافي في كل رجل','لا، يملك عظامًا أقل'],
 ['تكون عظام الطفل في البداية على شكل:','غضاريف لينة تتصلّب مع النمو','حجارة صلبة جدًا','عضلات فقط','ماء'],
 ['لماذا يضرّ الإكثار من المشروبات الغازية بالعظام؟','لأنه يقلّل نسبة الكالسيوم فيها','لأنه يزيد الكالسيوم فيها','لأنه يطيل العظام','لأنه يقوّي المفاصل'],
 ['نقص الكالسيوم في الجسم قد يسبّب:','هشاشة العظام','زيادة قوة العظام','زيادة الطول','قوة الأسنان'],
]);
ADDQ(4, 'sci', 'ألعب وأتحرك', [
 ['لماذا لا تتوقّف عضلة القلب عن العمل في الليل؟','لأنها تضخّ الدم المحمّل بالأكسجين إلى الجسم دائمًا','لأننا نتحكّم بها','لأنها عضلة إرادية','لأنها تنام في النهار'],
 ['عند ركل الكرة نستعمل خاصة عضلات:','الفخذ والساق','الوجه','الرقبة','الأصابع'],
 ['عند الضحك نستعمل عضلات:','الوجه والرقبة','الساق','الفخذ','الظهر فقط'],
 ['يشكّل العظام والعضلات معًا:','الهيكل الدعامي الحركي','الجهاز العصبي','الجهاز الهضمي','الجهاز التنفسي'],
 ['أيّ نشاط يستعمل معظم عضلات الجسم؟','السباحة','الكتابة','المضغ','إغماض العينين'],
]);
ADDQ(4, 'sci', 'جسمي السليم', [
 ['ما الهدف من تجبير العظم المكسور؟','تثبيته ليلتئم ويخفّ الألم','تجميل العضو','زيادة طول العظم','تحريكه بسهولة'],
 ['لماذا يضع المسعف قطنًا تحت الجبيرة؟','لمنع احتكاك الجبيرة بالجلد','لتدفئة العظم','ليصبح العظم أطول','لتغيير لون الجلد'],
 ['لماذا يحتاج الأطفال إلى النوم الكافي؟','لأن الجسم يفرز هرمون النمو في أثناء النوم','لأن العظام تنكسر في النهار','لأن النوم يقلّل الطول','لأن العضلات لا تعمل نهارًا'],
 ['أين نضع الأدوية في البيت؟','في مكان مرتفع بعيدًا عن متناول الأطفال','على طاولة الأطفال','في حقيبة المدرسة','بجانب الألعاب'],
]);
ADDQ(4, 'sci', 'طاقتي الخفية', [
 ['كتابان متماثلان: أحدهما على رفّ عالٍ والآخر على رفّ منخفض. أيّهما طاقته الكامنة أكبر؟','الكتاب على الرفّ العالي','الكتاب على الرفّ المنخفض','متساويان'],
 ['الطاقة المختزنة في الغذاء الذي نأكله طاقة:','كيميائية','حركية','صوتية','ضوئية'],
 ['النابض المضغوط يختزن طاقة:','كامنة','ضوئية','صوتية','حرارية'],
 ['عندما يصعد طفل إلى أعلى الزلّاقة فإن طاقته الكامنة:','تزداد','تنقص','تبقى ثابتة'],
]);
ADDQ(4, 'sci', 'أصبحت أسرع', [
 ['سيارة تدور في منعطف بسرعة ثابتة. هل تتسارع؟','نعم، لأنها تغيّر اتجاه حركتها','لا أبدًا، لأن سرعتها ثابتة','نعم، لأن كتلتها تزداد'],
 ['كرة تتدحرج صعودًا على منحدر، فهي:','تتباطأ','تتسارع','تبقى سرعتها ثابتة'],
 ['كرة تتدحرج نزولًا على منحدر، فهي:','تتسارع','تتباطأ','تبقى ساكنة'],
 ['سيارة متوقفة تبدأ الحركة عندما تصبح الإشارة خضراء، فهي:','تتسارع','تتباطأ','تبقى ساكنة'],
]);
ADDQ(4, 'sci', 'ألعب بالكرة', [
 ['عندما تسقط كرة من مكان مرتفع تتحوّل طاقتها الكامنة إلى طاقة:','حركية','ضوئية','كهربائية'],
 ['عندما تصطدم الكرة الساقطة بالأرض تتحوّل طاقتها الحركية إلى طاقة:','حرارية وصوتية','ضوئية','كهربائية','كامنة أكبر'],
 ['لماذا يجب أن يخفّف السائق سرعته قرب المدارس؟','لأن الطاقة الحركية الأكبر تُحدث ضررًا أكبر عند الاصطدام','لأن السيارة تتوقف وحدها','لتزداد طاقتها الكامنة','لأن الطريق يصبح أطول'],
 ['كرة قُذفت للأعلى وتوقّفت لحظة في أعلى نقطة. عندها تكون:','طاقتها الكامنة أكبر ما يكون','طاقتها الكامنة معدومة','طاقتها الحركية أكبر ما يكون'],
]);
ADDQ(4, 'sci', 'مركز القيادة', [
 ['البصلة السيسائية تتحكّم في:','التنفس وحركة القلب','حلّ المسائل','التوازن','التذكّر'],
 ['عند حلّ مسألة رياضيات يعمل بشكل خاص:','المخ','المخيخ','البصلة السيسائية','النخاع الشوكي'],
 ['يمشي لاعب الجمباز على العارضة دون أن يقع بفضل:','المخيخ','البصلة السيسائية','المعدة','القلب'],
 ['عندما نرمي الكرة يعمل:','المخ والمخيخ معًا','البصلة السيسائية وحدها','لا يعمل الدماغ','القلب وحده'],
 ['عندما نشمّ رائحة وردة، يدرك الرائحة:','المخ','المخيخ','البصلة السيسائية'],
]);
ADDQ(4, 'sci', 'منبه وحركة', [
 ['لماذا لا يُنصح بالإكثار من القهوة والشاي؟','لأنها تسبّب القلق والتوتر وضعف التركيز','لأنها تقوّي الذاكرة','لأنها تزيد ساعات النوم','لأنها تقوّي العظام'],
 ['لعب الشطرنج مفيد للجهاز العصبي لأنه:','يقوّي الذاكرة وينشّط التفكير','يقوّي عضلات الساق','يزيد الطول','يقوّي العظام'],
 ['دخلت شوكة وردة في إصبع فتاة. ما الترتيب الصحيح لما حدث؟','الجلد ينقل التنبيه، النخاع الشوكي يعطي الأمر، تُبعد إصبعها','تُبعد إصبعها، ثم يحسّ الجلد، ثم يفكّر المخ','المخ يعطي الأمر، ثم يحسّ الجلد، ثم تُبعد إصبعها'],
 ['الأعصاب الحسية تنقل التنبيه من:','أعضاء الحسّ كالجلد إلى النخاع الشوكي والدماغ','الدماغ إلى العضلات','العضلات إلى العظام','العظام إلى القلب'],
]);
ADDQ(4, 'sci', 'عالمي الصغير', [
 ['أيّ هذه المواد عنصر؟','الحديد','الماء','الملح','الهواء'],
 ['لماذا لا يُعدّ الماء عنصرًا؟','لأنه يتكوّن من عنصرين: الهدروجين والأكسجين','لأنه سائل','لأنه شفاف','لأنه بلا لون'],
 ['الأكسجين الذي نتنفّسه:','عنصر','خليط','محلول'],
 ['قطعة حديد كبيرة ومسمار حديد صغير يتكوّنان من:','العنصر نفسه','عنصرين مختلفين','لا يتكوّنان من عناصر'],
]);
ADDQ(4, 'sci', 'أشياء لا أراها', [
 ['لماذا تكون الذرة معتدلة كهربائيًا؟','لأن عدد الإلكترونات يساوي عدد البروتونات','لأنها لا تحتوي أيّ شحنات','لأن عدد النيوترونات أكبر','لأن الإلكترونات موجبة'],
 ['ذرة معتدلة فيها 8 بروتونات، كم إلكترونًا فيها؟','8','4','16','لا شيء'],
 ['إذا فقدت الذرة إلكترونًا تصبح شحنتها:','موجبة','سالبة','معتدلة'],
 ['ذرة فيها 6 إلكترونات و6 بروتونات، شحنتها:','معتدلة','موجبة','سالبة'],
]);
ADDQ(4, 'sci', 'أمزج ألواني', [
 ['لماذا يُعدّ الهواء خليطًا متجانسًا؟','لأن مكوّناته لا تُميَّز بالعين المجردة','لأنه ملوّن','لأنه عنصر واحد','لأن مكوّناته تترسّب'],
 ['خليط الزيت والخل خليط:','غير متجانس','متجانس','عنصر'],
 ['عند خلط اللون الأزرق مع اللون الأصفر نحصل على اللون:','الأخضر','البرتقالي','البنفسجي','الأحمر'],
 ['كيف نفصل حبّات الفاصولياء عن حبّات الأرز؟','باليد','بالمغناطيس','بالتبخير','بالماء الساخن'],
]);
ADDQ(4, 'sci', 'مشروبي المفضل', [
 ['أيّهما يذوب في الماء أسرع؟','السكر الناعم','مكعب السكر','يذوبان في الزمن نفسه'],
 ['في مياه البحر، المذاب هو:','الملح','الماء','الرمل'],
 ['أيّ هذه ليس محلولًا؟','الماء والرمل','الماء والسكر','الماء والملح'],
 ['أريد أن يحلو الشاي بسرعة، ماذا أفعل؟','أضيف السكر إلى الشاي الساخن وأحرّكه','أضيف السكر إلى شاي بارد ولا أحرّكه','أضع مكعب سكر كبيرًا ولا أحرّكه'],
]);
ADDQ(4, 'sci', 'استمرار الحياة', [
 ['أيّ عبارة صحيحة؟','بعض الحيوانات تتكاثر بالولادة وبعضها بالبيوض','كل الحيوانات تتكاثر بالولادة','كل الحيوانات تتكاثر بالبيوض'],
 ['كيف تحصل صغار الأفعى على غذائها؟','تعتمد على نفسها','ترضع الحليب من أمها','يُطعمها أبوها'],
 ['كيف تتغذّى صغار النمر في البداية؟','بالرضاعة من أمها','تصطاد بنفسها','تأكل الأعشاب'],
 ['يسمّى صغير الفيل:','الدغفل','الجرو','المهر','الحمل'],
 ['من أسباب نقص أعداد الأبقار في بعض السنوات:','قلّة العلف والرعاية الصحية وتقلّص المراعي','كثرة المراعي','تحسّن الرعاية الصحية','كثرة اللقاحات'],
]);
ADDQ(4, 'sci', 'لم نعد نراها', [
 ['من أسباب انقراض الحمام المهاجر:','قطع الغابات التي يعيش فيها وقلّة بيضه','كثرة غذائه','كثرة الأشجار','قلّة الصيادين'],
 ['ما الحلّ المناسب لمشكلة الصيد الجائر؟','منع الصيد ووضع قوانين وعقوبات','زيادة الصيد','قطع الأشجار','بيع الحيوانات'],
 ['لماذا لا نُدخل كائنات جديدة إلى بيئة ما دون دراسة؟','لأنها قد تُخلّ بتوازن البيئة','لأنها تزيد الأمطار','لأنها تجمّل البيئة دائمًا','لأنها تنقرض فورًا'],
 ['الفقمة المتوسطية مهدّدة بالانقراض بسبب:','تلوّث البحار والصيد','كثرة الأسماك','الثلوج','كثرة المحميات'],
 ['من النظريات التي تفسّر انقراض الديناصورات:','عدم قدرتها على التكيّف مع تغيّرات البيئة','كثرة غذائها','قلّة الحيوانات المفترسة','كثرة المحميات الطبيعية'],
]);
ADDQ(4, 'sci', 'تضيء الكون', [
 ['ماذا يحدث لو غابت الشمس نهائيًا عن الأرض؟','يصبح الجو باردًا جدًا وتموت النباتات','يزداد الجو حرارة','تكثر النباتات','لا يتغيّر شيء'],
 ['لماذا تتضرّر الحيوانات العاشبة إذا غابت الشمس؟','لأن النباتات لا تصنع غذاءها فتقلّ','لأن الحيوانات لا تحب الظلام','لأن الماء يزداد','لأن الحيوانات تكبر'],
 ['الألواح (الخلايا) الشمسية تحوّل ضوء الشمس إلى طاقة:','كهربائية','صوتية','كامنة في الماء'],
 ['لماذا لا تولّد الألواح الشمسية الكهرباء ليلًا؟','لغياب ضوء الشمس','لأن الهواء بارد','لأن القمر يمنعها','لأنها تتعطّل كل ليلة'],
 ['جفاف الغسيل المنشور تحت أشعة الشمس دليل على طاقة الشمس:','الحرارية','الصوتية','الكهربائية','المغناطيسية'],
]);
ADDQ(4, 'sci', 'دولاب الهواء', [
 ['كيف تساعد الرياح على تكاثر بعض النباتات؟','تنقل حبات الطلع من زهرة إلى أخرى','تسقي النبات','تقتل الحشرات كلها','تحرق الأعشاب'],
 ['بعد تكاثف بخار الماء في الغيوم يعود الماء إلى الأرض على شكل:','أمطار','بخار','رمال','غيوم'],
 ['متى تجفّ الملابس المنشورة أسرع؟','في يوم حارّ فيه رياح','في يوم بارد بلا رياح','في غرفة مظلمة مغلقة'],
 ['مصدر الطاقة الذي يسبّب الرياح ودورة الماء هو:','الشمس','القمر','النجوم','الصخور'],
 ['في النهار تسخن اليابسة أسرع من البحر، فيتحرّك الهواء:','من البحر نحو اليابسة','من اليابسة نحو البحر','لا يتحرّك أبدًا'],
]);

/* ===== الصف الرابع — الفصل الثاني ===== */
ADDQ(4, 'sci', 'نبتتي تتغذّى', [
 ['يمتصّ النبات في أثناء عملية التركيب الضوئي غاز:','ثنائي أكسيد الكربون','الأكسجين','الهدروجين','النتروجين'],
 ['ينتج عن عملية التركيب الضوئي سكّريات وغاز:','الأكسجين','ثنائي أكسيد الكربون','الدخان','بخار الحبر'],
 ['لماذا حملات التشجير مهمّة؟','لأن الأشجار تزيد الأكسجين في الهواء وتقلّل التلوث','لأن الأشجار تزيد ثنائي أكسيد الكربون','لأن الأشجار تمنع المطر','لأن الأشجار تأكل الحيوانات'],
 ['من أخطار قطع الأشجار:','زيادة تلوّث الهواء وتخريب مواطن الحيوانات','زيادة الأكسجين','زيادة الغذاء للحيوانات','انخفاض التلوّث'],
 ['أيّ هذه الأغذية غنيّ بالدسم؟','المكسّرات','التفاح','قصب السكر','العنب'],
]);
ADDQ(4, 'sci', 'طاقة الحياة', [
 ['في النهار يقوم النبات بعمليتي:','التنفس والتركيب الضوئي','التنفس فقط','التركيب الضوئي فقط','لا يقوم بأيّ عملية'],
 ['في الليل يقوم النبات بعملية:','التنفس فقط','التركيب الضوئي فقط','التنفس والتركيب الضوئي','لا يقوم بأيّ عملية'],
 ['يطرح النبات في عملية التنفس غاز:','ثنائي أكسيد الكربون','الأكسجين','الهدروجين','بخار الحبر'],
 ['يحتاج النبات في عملية التنفس إلى:','الأكسجين','الضوء فقط','الظلام فقط','ثنائي أكسيد الكربون'],
 ['لماذا يُنصح بزيادة المساحات الخضراء في المدن؟','لزيادة الأكسجين في الهواء والحدّ من التلوّث','لزيادة ثنائي أكسيد الكربون','لزيادة الضجيج','لتقليل الأكسجين'],
 ['بعد انطفاء شمعة مغطّاة بكأس يكون الغاز الذي زاد داخل الكأس هو:','ثنائي أكسيد الكربون','الأكسجين','الهدروجين','بخار الحبر'],
]);
ADDQ(4, 'sci', 'رحلة المواد', [
 ['ينقل النسغ الناقص (الماء والأملاح المعدنية) من:','الجذر إلى الساق والأوراق','الأوراق إلى الجذر','الثمار إلى الجذر','الهواء إلى الأوراق'],
 ['ينتقل النسغ الكامل (السكّريات) من:','الأوراق إلى باقي أقسام النبات','الجذر إلى الأوراق فقط','التربة إلى الجذر','الأزهار إلى التربة'],
 ['الأوعية التي تنقل النسغ الناقص هي الأوعية:','الخشبية','اللحائية (الغربالية)','الدموية','الهوائية'],
 ['الأوعية التي تنقل النسغ الكامل هي الأوعية:','اللحائية (الغربالية)','الخشبية','الدموية','الهوائية'],
 ['نعرف عمر الشجرة من:','عدد الحلقات في جذعها','لون أوراقها','عدد ثمارها','طول جذورها'],
 ['ما الجزء من النبات الذي يثبّته في التربة ويمتصّ الماء والأملاح؟','الجذر','الورقة','الزهرة','الثمرة'],
]);
ADDQ(4, 'sci', 'التغيّرات الفيزيائية', [
 ['التغيّر الفيزيائي هو تغيّر في:','شكل المادة أو حالتها دون تغيّر تركيبها','تركيب المادة وتكوّن مادة جديدة','لون المادة بعد احتراقها','رائحة المادة بعد تعفّنها'],
 ['طيّ الورقة تغيّر فيزيائي لأن:','الورقة تبقى ورقًا ويمكن إعادتها كما كانت','الورقة تحترق','تتكوّن مادة جديدة','يتغيّر تركيب الورقة'],
 ['أيّ هذه تغيّر فيزيائي؟','تبخّر ماء البحر','طهي الطعام','تعفّن الفاكهة','احتراق الخشب'],
 ['انصهار الشمع تغيّر:','فيزيائي','كيميائي','لا يُعدّ تغيّرًا'],
 ['بعد ذوبان قطعة شوكولا ثم تبريدها نحصل على:','شوكولا من جديد','مادة جديدة مختلفة','رماد','غاز'],
]);
ADDQ(4, 'sci', 'التغيّرات الكيميائية', [
 ['لماذا يُعدّ احتراق الورقة تغيّرًا كيميائيًا؟','لأنه تنتج عنه مواد جديدة لها خاصّيات مختلفة','لأن شكل الورقة يتغيّر فقط','لأنه يمكن إعادة الورقة كما كانت','لأن الورقة تبقى ورقًا'],
 ['أيّ هذه تغيّر كيميائي؟','تعفّن الفاكهة','تبخّر الماء','انصهار الشمع','ذوبان الشوكولا'],
 ['تقطيع الخشب تغيّر فيزيائي، أما احتراق الخشب فتغيّر:','كيميائي','فيزيائي','لا يُعدّ تغيّرًا'],
 ['طهي البيضة تغيّر:','كيميائي','فيزيائي','لا يُعدّ تغيّرًا'],
 ['احتراق السكر تغيّر:','كيميائي','فيزيائي','لا يُعدّ تغيّرًا'],
]);
ADDQ(4, 'sci', 'الصخور من حولنا', [
 ['لماذا يصنع النحّات التماثيل من حجر البازلت؟','لأنه صخر قاسٍ يتحمّل الظروف الجوية زمنًا طويلًا','لأنه ليّن يذوب في الماء','لأنه خفيف يطفو','لأنه شفاف'],
 ['لماذا يُستعمل الغرانيت لصنع سطوح العمل في المطابخ؟','لأنه متين وملوّن ويحافظ على منظره','لأنه ليّن جدًا','لأنه يذوب بالماء','لأنه يتفتّت بسرعة'],
 ['تُبنى قلعة دمشق وقلعة حلب من صخر:','رسوبي كلسي','بازلتي أسود','زجاجي','بلاستيكي'],
 ['ثلاثة أنهار يكوّن كلّ منها رسوبيات بسماكة 1 سم في السنة. كم تبلغ سماكتها بعد خمس سنوات؟','15 سم','5 سم','3 سم','8 سم'],
 ['من صفات حجر الصوان:','قاسٍ ويمكن تشكيله قطعًا حادّة','ليّن يذوب في الماء','خفيف يطفو','يمتصّ الماء كالإسفنج'],
]);
ADDQ(4, 'sci', 'كيف تتغيّر الصخور؟', [
 ['لماذا لا نشاهد المستحاثات في الصخور الاندفاعية؟','لأن حرارة الماغما الشديدة تشوّه بقايا الكائنات','لأنها صخور ملوّنة','لأنها صخور صغيرة جدًا','لأنها تتكوّن في الماء'],
 ['تحوّل الصخر من نوع إلى آخر يسمّى:','دورة الصخر','دورة الماء','السلسلة الغذائية','التركيب الضوئي'],
 ['يتحوّل أيّ صخر إلى صخر متحوّل بفعل:','الحرارة والضغط الشديدين','الرياح الخفيفة','المطر فقط','ضوء القمر'],
 ['أيّهما أكثر صلابة؟','الرخام (متحوّل)','الحجر الكلسي (رسوبي)','متساويان'],
 ['التربة ضرورية للنبات لأنها:','تمدّه بالغذاء وتثبّته','تحجب عنه الضوء','تمنع عنه الماء','تجعله يطفو'],
]);
ADDQ(4, 'sci', 'قوّة الطفو', [
 ['لماذا السباحة في البحر أسهل منها في المسبح؟','لأن الماء المالح يزيد قوة الطفو','لأن ماء البحر أسخن','لأن البحر أعمق','لأن البحر فيه أمواج'],
 ['زيادة كثافة السائل (بإذابة الملح فيه مثلًا) تجعل قوة الطفو:','تزداد','تنقص','لا تتغيّر'],
 ['أيّ هذه يغرق في الماء؟','المفتاح','قطعة الفلين','المكعب الخشبي','أوراق النعناع'],
 ['أيّ هذه يطفو على الماء؟','قلم الرصاص الخشبي','المقصّ','مسمار الحديد','اللوح الزجاجي'],
 ['بيضة غرقت في كأس ماء عذب، ماذا يحدث إذا أذبنا كمية كبيرة من الملح في الماء؟','قد تطفو البيضة','تغرق أسرع','تنكسر البيضة','يتبخّر الماء'],
]);
ADDQ(4, 'sci', 'مصادر الطاقة', [
 ['لماذا يُعدّ الخشب مصدرًا متجدّدًا للطاقة؟','لأن الأشجار تنمو وتتكاثر من جديد','لأنه لا يحترق','لأنه يتكوّن في ملايين السنين','لأنه لا ينفد أبدًا مهما قطعنا'],
 ['أيّ عبارة صحيحة؟','مصادر الطاقة المتجدّدة صديقة للبيئة','مصادر الطاقة غير المتجدّدة لا تنفد','المدّ والجزر مصدر غير متجدّد','الفحم الحجري مصدر متجدّد'],
 ['حركة الأمواج من مصادر الطاقة:','المتجدّدة','غير المتجدّدة','الملوّثة للبيئة'],
 ['لماذا يُعدّ النفط مصدرًا غير متجدّد؟','لأنه احتاج ملايين السنين ليتكوّن وينفد باستهلاكه','لأنه يتجدّد كل يوم','لأنه لا يلوّث البيئة','لأنه موجود في الهواء'],
 ['مصادر الطاقة غير المتجدّدة تسبّب غالبًا:','تلوّث البيئة عند احتراقها','زيادة الأكسجين','نموّ الأشجار','صفاء الهواء'],
]);
ADDQ(4, 'sci', 'تحوّلات الطاقة', [
 ['الناعورة تحوّل طاقة الماء الكامنة إلى طاقة:','حركية','ضوئية','صوتية'],
 ['المدفأة الكهربائية تحوّل الطاقة الكهربائية إلى طاقة:','حرارية','صوتية','كيميائية'],
 ['السيارة تحوّل طاقة الوقود الكيميائية إلى طاقة:','حركية','ضوئية فقط','كهربائية فقط'],
 ['عند فرك اليدين ببعضهما تتحوّل الطاقة الحركية إلى طاقة:','حرارية','ضوئية','كيميائية'],
 ['في عملية التركيب الضوئي تتحوّل الطاقة الضوئية إلى طاقة:','كيميائية مختزنة في الغذاء','صوتية','كهربائية'],
]);
ADDQ(4, 'sci', 'تكيّف الكائنات مع بيئاتها', [
 ['لماذا أوراق نبات البلّان شوكية؟','لتقلّل خسارة الماء وتُبعد الحيوانات عنها','لتمتصّ الماء من الهواء','لتطفو على الماء','لتجذب الحشرات'],
 ['أوراق نبات النيلوفر عريضة وعليها طبقة شمعية، وهذا يساعدها على:','الطفو على سطح الماء','الحفر في الرمل','تخزين الدهون','الطيران'],
 ['كيف يهرب الحبّار من أعدائه؟','يغيّر لونه وينفث حبرًا خلفه','يحفر في الرمل','يطير فوق الماء','يصدر صوتًا عاليًا'],
 ['لماذا سيقان النباتات المائية مرنة وأوراقها شريطية؟','حتى لا تتمزّق بفعل التيارات المائية','لتخزّن الرمل','لتجذب الطيور','لتصبح ثقيلة فتغرق'],
 ['لماذا تُزرع أشجار الصنوبر في المناطق الجرداء؟','لأن جذورها عميقة وتقاوم الحرّ والبرد','لأنها تموت بسرعة','لأنها تحتاج ماء كثيرًا جدًا','لأن جذورها سطحية ضعيفة'],
 ['حراشف الضبّ تساعده على:','منع تبخّر الماء من جسمه','الطيران','السباحة السريعة','التنفّس تحت الماء'],
]);
ADDQ(4, 'sci', 'التلوّث وإعادة التدوير', [
 ['ما أهمّ مرحلة في إعادة تدوير الورق؟','الفرز','الحرق','الدفن','الرمي في النهر'],
 ['كيف نحوّل بقايا الأطعمة إلى سماد طبيعي؟','نضعها مع التراب طبقات في برميل ونتركها زمنًا','نحرقها في الشارع','نرميها في النهر','نتركها تحت الشمس على الطاولة'],
 ['من الحلول التي تحدّ من تلوّث الهواء:','بناء المصانع بعيدًا عن المناطق السكنية','حرق النفايات قرب البيوت','زيادة ازدحام السيارات','قطع الأشجار'],
 ['من فوائد إعادة التدوير:','تقليل النفايات والمحافظة على موارد الطبيعة','زيادة النفايات','زيادة التلوّث','زيادة مدافن النفايات'],
 ['المحافظة على البيئة باستعمال مخلّفات بعض المواد لصنع مواد جديدة تسمّى:','إعادة التدوير','التلوّث','التبخّر','الانقراض'],
]);

/* ===== الصف الخامس — الفصل الأول (الوحدتان الأولى والثانية) ===== */
ADDQ(5, 'sci', 'نبض الحياة', [
 ['لماذا تزداد ضربات القلب عند الجري؟','لأن العضلات تحتاج إلى مزيد من الأكسجين والغذاء','لأن الدم يقلّ في الجسم','لأن الرئتين تتوقّفان','لأن القلب يصغر'],
 ['لماذا جدار البطين أسمك من جدار الأذين؟','لكي يضخّ الدم بقوة أكبر','ليخزّن الهواء','ليصبح القلب أخفّ','ليمنع النبض'],
 ['ما فائدة الحاجز العضلي في القلب؟','يمنع اختلاط الدم بين القسمين الأيمن والأيسر','يضخّ الهواء إلى الرئتين','يقتل الجراثيم','يصنع الدم'],
 ['الجوفان الكبيران في القلب يُسمّيان:','البطينين','الأذينتين','الرئتين','الصمامين'],
]);
ADDQ(5, 'sci', 'شبكة الحياة', [
 ['لماذا لون الدم في الشريان الرئوي قاتم؟','لأنه يحمل ثنائي أكسيد الكربون من الجسم إلى الرئتين','لأنه يحمل الأكسجين من الرئتين','لأنه يحمل الغذاء فقط','لأنه بلا كريات حمراء'],
 ['يُسمّى الشريان الرئوي شريانًا رغم أن دمه قاتم لأنه:','ينقل الدم من القلب','ينقل الدم إلى القلب','لونه أحمر قانئ','يوجد داخل الرئة فقط'],
 ['الشريان الأبهر ينقل الدم:','من القلب إلى أنحاء الجسم','من أنحاء الجسم إلى القلب','من الرئتين إلى القلب','من القلب إلى الرئتين'],
 ['يصبّ الوريدان الأجوفان الدمَ في:','الأذينة اليمنى','البطين الأيسر','الأذينة اليسرى','الرئتين'],
 ['تبدو العروق على ظاهر اليد غامقة لأن الدم فيها:','قاتم فقير بالأكسجين','غنيّ جدًا بالأكسجين','غير موجود','أبيض'],
]);
ADDQ(5, 'sci', 'أنقل، أحمي، وأغذّي', [
 ['كيف تقضي الكريات البيضاء على الجراثيم؟','تحيط بها وتقتلها','تعطيها لونًا أحمر','تنقلها إلى الرئتين','تحوّلها إلى غذاء'],
 ['الكريات البيضاء لونها:','لا لون لها','أحمر','أزرق','أسود'],
 ['ينقل الدم الفضلات إلى:','أعضاء الإطراح كالكليتين','المعدة','العضلات','العظام'],
 ['أين يُحفظ الدم المتبرَّع به ليستفيد منه المصابون بنزف شديد؟','في بنك الدم','في المطبخ','في المدرسة','في الصيدلية العادية'],
 ['عدد الكريات الحمراء في 1 ملم³ من الدم تقريبًا:','5 ملايين','5 آلاف','50','500'],
]);
ADDQ(5, 'sci', 'رحلة في جسمي', [
 ['ما المسار الصحيح للدورة الدموية الصغرى؟','البطين الأيمن ← الشريان الرئوي ← الرئتان ← الأوردة الرئوية ← الأذينة اليسرى','البطين الأيسر ← الشريان الأبهر ← الرئتان ← الوريدان الأجوفان','الأذينة اليمنى ← الشريان الأبهر ← الرئتان ← البطين الأيمن'],
 ['يعود الدم القاتم من أنحاء الجسم إلى القلب ليصبّ في:','الأذينة اليمنى','البطين الأيسر','الأذينة اليسرى','الشريان الأبهر'],
 ['لماذا يُسمّى جهاز الدوران جهاز النقل؟','لأنه ينقل الغازات والمواد الغذائية إلى أنحاء الجسم','لأنه ينقل الطعام إلى المعدة','لأنه ينقل الهواء إلى الرئتين فقط','لأنه ينقل الأصوات'],
 ['من أين يحصل الدم على غاز الأكسجين؟','من هواء الشهيق في الرئتين','من الطعام في المعدة','من الماء الذي نشربه','من العظام'],
 ['تبدأ الدورة الدموية الكبرى من:','البطين الأيسر','البطين الأيمن','الأذينة اليمنى','الرئتين'],
]);
ADDQ(5, 'sci', 'وقاية وحماية', [
 ['كيف يكتسب الجسم مناعة ضد مرض الجدري؟','بأخذ لقاح الجدري','بشرب الماء البارد','بالسهر','بالأكل الكثير'],
 ['نعزّز مناعتنا الطبيعية بوساطة:','الغذاء المناسب والنظافة والرياضة والنوم الجيد','السهر الطويل','قلّة الطعام','ترك غسل اليدين'],
 ['لماذا نحتاج إلى الأغذية الغنية بالحديد؟','لأنه يدخل في تركيب خضاب الدم','لأنه يقوّي الشعر فقط','لأنه يغيّر لون الجلد','لأنه يمنع النوم'],
 ['من العوامل التي تسبّب تصلّب الشرايين:','السمنة والتدخين','ممارسة الرياضة','أكل الخضار','شرب الماء'],
 ['لماذا تقلّل ممارسة الرياضة من النوبات القلبية؟','لأنها تنشّط الدورة الدموية','لأنها تُضعف القلب','لأنها توقف ضربات القلب','لأنها تزيد السمنة'],
]);
ADDQ(5, 'sci', 'تتشابه وتختلف', [
 ['أيّ هذه الحيوانات قلبه مؤلّف من ثلاثة أجواف؟','الضفدع','السمكة','الحمامة','القطة'],
 ['أيّ الفقاريات يشبه قلبها قلب الإنسان في عدد الأجواف؟','الطيور','الأسماك','الضفادع'],
 ['أيّ هذه الفقاريات قلبها أقل عددًا من الأجواف؟','الأسماك','الطيور','الثدييات'],
 ['في أيّ هذه الفقاريات يكون البطين مقسومًا بحاجز غير مكتمل؟','الزواحف','الطيور','الثدييات'],
]);
ADDQ(5, 'sci', 'المسافة/الزمن', [
 ['سيارة سرعتها 20 m/s سارت مدة 10 s. ما المسافة التي قطعتها؟','200 m','2 m','30 m','10 m'],
 ['قطع عدّاء 100 m بسرعة 5 m/s. ما الزمن الذي استغرقه؟','20 s','500 s','95 s','105 s'],
 ['أيّ علاقة صحيحة؟','المسافة = السرعة × الزمن','المسافة = السرعة ÷ الزمن','الزمن = السرعة × المسافة'],
 ['في أيّ وسط ينتقل الصوت أسرع؟','الحديد','الماء','الهواء'],
 ['سُمّيت كواكب المجموعة الشمسية بالكواكب السيّارة لأنها:','تتحرّك بشكل مستمر','تشبه السيارات','ثابتة لا تتحرّك','تضيء بنفسها'],
]);
ADDQ(5, 'sci', 'نافذة على العالم', [
 ['ماذا يحدث لو تضرّر العصب البصري؟','لا يصل التنبيه إلى المخ فلا تحدث الرؤية','تتحسّن الرؤية','تبقى الرؤية طبيعية','نرى الأشياء أكبر'],
 ['ما الترتيب الصحيح لحدوث الرؤية؟','الجسم البلوري ← الشبكية ← العصب البصري ← المخ','المخ ← العصب البصري ← الشبكية ← الجسم البلوري','الشبكية ← المخ ← الجسم البلوري ← العصب البصري'],
 ['الطبقة الداخلية من جدار العين التي يتكوّن عليها الخيال هي:','الشبكية','الصلبة','المشيمية','الجفن'],
 ['تميّز العين:','الألوان والأشكال والأجسام','الأصوات','الروائح','الطعوم'],
]);
ADDQ(5, 'sci', 'أبيض وأسود', [
 ['لماذا تبدو مياه البحر شفافة عند السطح وعاتمة في الأعماق؟','لأن الضوء يتشتّت كلما زاد العمق فلا يصل','لأن الماء يتلوّن بالأسود','لأن الأسماك تحجب الضوء','لأن الماء يتجمّد'],
 ['كيف نجعل جسمًا عاتمًا يسمح بمرور الضوء؟','بإنقاص سماكته','بزيادة سماكته','بطلائه باللون الأسود','بوضعه في الظلام'],
 ['الورق المبلّل بالماء يصبح:','نصف شفاف','عاتمًا تمامًا','شفافًا تمامًا'],
 ['الزجاج المغبّش من الأوساط:','نصف الشفافة','الشفافة','العاتمة'],
 ['أيّ هذه عاتم؟','يد الإنسان','الهواء','الزجاج العادي','الماء النقي'],
]);
ADDQ(5, 'sci', 'منظار الصورة', [
 ['العدسة المكبّرة نوعها:','محدّبة','مقعّرة','مستوية'],
 ['عندما ننظر إلى كتابة بعدسة مقعّرة نراها:','أصغر','أكبر','بالحجم نفسه'],
 ['نستعمل المقراب (التلسكوب) لرؤية:','الأجسام البعيدة كالكواكب','الجراثيم','العظام داخل الجسم'],
 ['نستعمل المجهر لرؤية:','الأجسام الدقيقة جدًا كالجراثيم','النجوم البعيدة','الجبال'],
]);
ADDQ(5, 'sci', 'عيني على عيني', [
 ['لتصحيح مدّ البصر نستعمل نظارة بعدسة:','محدّبة','مقعّرة','مستوية'],
 ['لتصحيح قصر البصر نستعمل نظارة بعدسة:','مقعّرة','محدّبة','مستوية'],
 ['لماذا لا نكتب الواجب في إضاءة منخفضة؟','لأنها ترهق العين','لأنها تقوّي النظر','لأن الحبر يختفي'],
 ['لماذا لا ننظر إلى الشمس مباشرة؟','لأن أشعتها القوية تؤذي العين','لأنها بعيدة','لأنها صغيرة','لأنها تختفي'],
 ['الاقتراب كثيرًا من شاشة الهاتف:','يضرّ بالعين','يقوّي العين','لا تأثير له أبدًا'],
]);
ADDQ(5, 'sci', 'ألوان', [
 ['يتكوّن البريسكوب (منظار الغواصة) من:','مرآتين متقابلتين داخل أنبوب','عدسة مكبّرة واحدة','مصباح ومرآة','عدستين مقعّرتين فقط'],
 ['يستعمل البحّارة البريسكوب في الغواصة لـ:','رؤية ما فوق سطح الماء','رؤية الجراثيم','تكبير الأصوات','قياس السرعة'],
 ['لماذا لا نرى شيئًا في غرفة مظلمة تمامًا؟','لعدم وجود ضوء ينعكس عن الأجسام إلى العين','لأن العين تنام','لأن الأجسام تختفي','لأن الهواء يصبح عاتمًا'],
 ['لماذا نلبس الملابس الداكنة في الشتاء؟','لأنها تمتصّ الضوء أكثر فتدفئنا','لأنها تعكس الضوء كلّه','لأنها أخفّ وزنًا'],
 ['تساعد مرايا السيارة السائق على:','رؤية ما خلفه وحوله','زيادة السرعة','تشغيل السيارة'],
]);

/* ===== الصف الخامس — الفصل الأول (الوحدتان الثالثة والرابعة) ===== */
ADDQ(5, 'sci', 'أتحرّك بمرونة', [
 ['كم رجلًا للعنكبوت؟','ثماني أرجل','ستّ أرجل','عشر أرجل','أربع أرجل'],
 ['كم قسمًا لجسم الحشرة كالجرادة والدعسوقة؟','ثلاثة أقسام','قسمان','خمسة أقسام','قسم واحد'],
 ['ينتمي قنديل البحر إلى شعبة:','معائيات الجوف','الرخويات','شوكيات الجلد','مفصليات الأرجل'],
 ['ينتمي الإسفنج إلى شعبة:','الإسفنجيات','الديدان','الرخويات','مفصليات الأرجل'],
 ['لماذا يستطيع الأخطبوط المرور من فتحات ضيقة جدًا؟','لأنه لا يملك هيكلًا عظميًا','لأن له عمودًا فقريًا مرنًا','لأن له صدفة صلبة','لأن له ستّ أرجل'],
]);
ADDQ(5, 'sci', 'هيكلي يدعمني', [
 ['أيّ هذه الحيوانات من الفقاريات؟','الدولفين','خيار البحر','الأخطبوط','المرجان'],
 ['أيّ هذه الحيوانات من اللافقاريات؟','الفراشة','الكنغر','التمساح','الدجاجة'],
 ['ينتمي الحوت إلى صف:','الثدييات','الأسماك','البرمائيات','الزواحف'],
 ['ينتمي الخفاش إلى صف:','الثدييات','الطيور','الزواحف','البرمائيات'],
 ['ينتمي التمساح إلى صف:','الزواحف','البرمائيات','الثدييات','الأسماك'],
 ['أين يضع الضفدع بيوضه؟','في الماء ضمن كتلة هلامية','في عشّ على الشجرة','في جراب على بطنه','في حفرة في الصحراء'],
]);
ADDQ(5, 'sci', 'ثروة تعيش معي', [
 ['ماذا يحدث لو انقرضت الأغنام؟','يختلّ التوازن البيئي ويتضرّر الإنسان اقتصاديًا','لا يتأثّر أحد','تزداد اللحوم والحليب','يزداد الصوف'],
 ['لماذا يُعدّ الزحف العمراني خطرًا على الثروة الحيوانية؟','لأنه يدمّر المراعي فتقلّ أعداد الحيوانات','لأنه يزيد المراعي','لأنه يزيد الغذاء','لأنه يحمي الحيوانات'],
 ['لماذا نلجأ إلى حفظ الأصول الوراثية للحيوانات؟','لحمايتها من الانقراض وتحسين سلالاتها','لزيادة صيدها','لتقليل أعدادها','لتغيير ألوانها فقط'],
 ['من الحلول المقترحة لزيادة أعداد الأغنام:','إقامة المراعي وتوفير الغذاء والرعاية الصحية','زيادة الصيد','تقليل الغذاء','بناء المدن في المراعي'],
]);
ADDQ(5, 'sci', 'التبدّل', [
 ['لماذا نشعر ببرودة الطقس عند ذوبان الثلج؟','لأن انصهار الثلج يأخذ طاقة حرارية من الهواء حولنا','لأن الثلج يطلق حرارة','لأن الشمس تختفي دائمًا','لأن الهواء يتجمّد'],
 ['لماذا نشعر بالبرودة بعد التعرّق؟','لأن العرق يتبخّر آخذًا حرارة من الجسم','لأن العرق بارد أصلًا','لأن الجلد يتجمّد','لأن القلب يتوقف'],
 ['يتشكّل الضباب بسبب:','تكاثف بخار الماء قرب سطح الأرض البارد','تبخّر الثلج','انصهار الغيوم','تجمّد الهواء'],
 ['أيّ هذه السوائل يتبخّر أسرع؟','البنزين','الماء','الزيت'],
 ['عند وضع قطعة زبدة في مقلاة ساخنة تحدث عملية:','الانصهار','التجمّد','التكاثف'],
]);
ADDQ(5, 'sci', 'كيف تتغيّر؟', [
 ['انصهار شمع الشمعة تغيّر:','فيزيائي','كيميائي'],
 ['صناعة الصابون تغيّر:','كيميائي','فيزيائي'],
 ['قلي البيضة تغيّر:','كيميائي','فيزيائي'],
 ['أيّ زوج يمثّل تغيّرًا فيزيائيًا ثم تغيّرًا كيميائيًا؟','تقطيع الخشب ثم احتراقه','احتراق الخشب ثم تقطيعه','تجمّد الماء ثم انصهاره','تقطيع الورق ثم طيّه'],
 ['ما الدليل على أن صدأ الحديد تغيّر كيميائي؟','تغيّر لونه وتكوّن مادة جديدة','تغيّر شكله فقط','بقاؤه حديدًا كما هو','انصهاره'],
]);
ADDQ(5, 'sci', 'في حديقتي', [
 ['لماذا تكون بتلات التويج ملوّنة زاهية؟','لتجذب الحشرات التي تساعد في التلقيح','لتصنع الغذاء','لتمتصّ الماء','لتحمي الجذر'],
 ['الجزء في أعلى المدقّة الذي تلتصق به حبات الطلع هو:','الميسم','المئبر','السبلة','الخيط'],
 ['ماذا يتكوّن من المبيض بعد التلقيح؟','الثمرة','الجذر','الورقة','الساق'],
 ['أهمية أزهار القطن:','صناعية','طبية','جمالية فقط'],
 ['أهمية القرنبيط:','غذائية','صناعية','لا أهمية له'],
]);
ADDQ(5, 'sci', 'بستاني الصغير', [
 ['لماذا سُمّيت عاريات البذور بهذا الاسم؟','لأن مبيضها مفتوح وبذيراتها عارية','لأنها بلا أوراق','لأنها بلا جذور','لأن بذورها داخل ثمار مغلقة'],
 ['لماذا يبقى الصنوبر أخضر طوال العام؟','لأنه يحتفظ بأوراقه ولا تسقط دفعة واحدة','لأنه بلا أوراق','لأنه يزهر كل يوم','لأنه يعيش في الماء'],
 ['ما وظيفة الساق في النبات؟','يحمل الأوراق والأزهار والثمار','يمتصّ الماء من التربة','يصنع البذور','يجذب الحشرات'],
 ['أيّ هذه النباتات لابذري (يتكاثر بالأبواغ)؟','الحزازيات','الدرّاق','التفاح','المشمش'],
 ['نبات السرو من:','عاريات البذور','مغلّفات البذور','النباتات اللابذرية'],
]);
ADDQ(5, 'sci', 'بذوري تتنوّع', [
 ['أيّ مجموعة كلّها نباتات أحادية الفلقة؟','القمح والذرة والتمر','القرع واللوز والدرّاق','الفول والقطن والذرة'],
 ['أيّ مجموعة كلّها نباتات ثنائية الفلقة؟','الكتان والقطن والبازلاء','الرز والبصل والذرة','القمح والتمر والفول'],
 ['نبات البصل:','أحادي الفلقة','ثنائي الفلقة','لابذري'],
 ['نبات الخسّ من:','ثنائيات الفلقة','أحاديات الفلقة','النباتات اللابذرية'],
]);
ADDQ(5, 'sci', 'نبتتي ثروتي', [
 ['ماذا يحدث للكائنات الحية لو اختفت النباتات الخضراء؟','تتأثّر بشدة وقد تموت لأنها تعتمد عليها في الغذاء والأكسجين','لا تتأثّر','تزداد أعدادها','تصنع غذاءها بنفسها'],
 ['من أسباب التصحّر:','الرعي الجائر والجفاف وقطع الأشجار','التشجير','الريّ المنتظم','إنشاء المحميات'],
 ['حقل زُرع قمحًا ثم بقوليات ثم شمندرًا في ثلاث سنوات متتالية. ماذا يُزرع فيه في السنة الرابعة؟','قمح','شمندر','بقوليات'],
 ['إذا التفّت قمم الأغصان الفتية في أشجار الحمضيات بسبب سوء التغذية، فالحلّ:','إضافة الأسمدة المناسبة','قطع الشجرة','التوقّف عن الريّ','إشعال النار حولها'],
]);
ADDQ(5, 'sci', 'حيث نعيش', [
 ['لدودة الأرض في التربة دور في:','تهويتها وزيادة خصوبتها','تلويثها','تجفيفها','زيادة ملوحتها'],
 ['من النباتات ذات الجذور الليفية:','الذرة وقصب السكر','الجزر','الفجل','الشمندر'],
 ['يُستعمل الفحم الحجري المستخرج من المناجم في:','توليد الكهرباء والتدفئة','صناعة الخبز','ريّ الأراضي'],
 ['تُصنع الأواني الفخارية من:','الطين','الحديد','البلاستيك','الزجاج'],
 ['لماذا تُزرع أشجار السرو والصنوبر على المنحدرات؟','لتثبيت التربة ومنع انجرافها','لتجفيف التربة','لزيادة ملوحتها','لقطعها بعد شهر'],
]);
ADDQ(5, 'sci', 'إحياء الأرض', [
 ['كيف نعالج التربة الملحية؟','نرويها بمياه غير مالحة عدة مرات ونزرع نباتات تتحمّل الملوحة','نضيف إليها مزيدًا من الملح','نتركها بلا ماء','نحرقها'],
 ['أين نضع النفايات التي لا يمكن تدويرها؟','في مواقع بعيدة عن الأراضي الزراعية','في الحقول المزروعة','في الأنهار','قرب البيوت'],
 ['ما الترتيب الصحيح لبناء المدرّجات الجبلية؟','تكسير الصخور، جمع الحجارة، نقلها، بناء المدرّجات','بناء المدرّجات، تكسير الصخور، جمع الحجارة، نقلها','نقل الحجارة، بناء المدرّجات، تكسير الصخور، جمع الحجارة'],
 ['من المواد التي تزيد خصوبة التربة:','السماد الطبيعي','الملح','البلاستيك','الزجاج'],
]);

/* ===== الصف السادس — الفصل الأول ===== */
ADDQ(6, 'sci', 'العلاقات بين الأحياء', [
 ['نبات الهالوك يتطفّل على:','نبات البندورة','الإنسان','البقرة','دودة الأرض'],
 ['في علاقة النمل وشجرة الأكاسيا، يقدّم النمل للشجرة:','الدفاع عنها ضد الحشرات الضارة','الماء','ضوء الشمس','البذور'],
 ['الجراثيم في عقد جذور البقوليات تثبّت الآزوت للنبات، والنبات يقدّم لها السكّريات. هذه العلاقة:','تقايض','تطفّل','افتراس','رمية'],
 ['اصطاد نمر غزالًا ثم أكلت الضباع ما تبقّى منه. العلاقة بين الضباع وبقايا الغزال:','رمية','افتراس','تقايض','تطفّل'],
 ['ماذا يحدث لو اختفت الكائنات الرمية من الطبيعة؟','تتراكم الجثث دون تحلّل ويختلّ التوازن البيئي','تزداد خصوبة التربة','تختفي الأمراض','لا يتغيّر شيء'],
 ['كيف تدافع الفرائس عن نفسها؟','بالتخفّي والهرب والعيش الجماعي','بالاقتراب من المفترس','بالنوم في العراء','بإصدار رائحة تجذب المفترس'],
]);
ADDQ(6, 'sci', 'لغز الطبيعة', [
 ['في السلسلة: طحالب ← سمكة صغيرة ← سمكة كبيرة ← فقمة\nماذا يحدث إذا اختفت الطحالب؟','تتناقص الأسماك ثم الفقمات لنقص الغذاء','تزداد الأسماك الصغيرة','لا تتأثّر الفقمات','تزداد الفقمات'],
 ['في السلسلة: نبات ← جراد ← ضفدع ← أفعى ← صقر\nالمستهلك الأولي هو:','الجراد','الضفدع','الصقر','النبات'],
 ['في السلسلة: نبات ← جراد ← ضفدع ← أفعى ← صقر\nماذا يحدث لأعداد الجراد إذا قلّت الضفادع؟','تزداد','تقلّ','تنقرض فورًا'],
 ['مصدر الطاقة الأول في كل سلسلة غذائية هو:','الشمس','الصقر','التربة','الماء'],
]);
ADDQ(6, 'sci', 'النظام البيئي', [
 ['أيّ هذه من المكوّنات غير الحية في النظام البيئي؟','الضوء','الشيح','الجمل','الحرباء'],
 ['الشيح والجمل والحرباء من مكوّنات النظام البيئي:','الصحراوي','المائي','المتجمّد','الغابة الرطبة'],
 ['الفقمة والدب القطبي من مكوّنات النظام البيئي:','المتجمّد','الصحراوي','الغابة','النهر العذب'],
 ['إذا ازدادت أعداد الأفاعي في شبكة غذائية فإن أعداد فرائسها كالدجاج والقنافذ:','تتناقص','تزداد','لا تتغيّر'],
 ['إذا تناقصت القنافذ التي تأكل الديدان والجراد، فإن أعداد الديدان والجراد:','تزداد','تتناقص','لا تتغيّر'],
]);
ADDQ(6, 'sci', 'تأثير الإنسان في النظام البيئي', [
 ['ما الحلّ المناسب لتلوّث الهواء بدخان المصانع؟','بناء المصانع بعيدًا عن المساكن واستعمال الطاقة النظيفة','بناء المصانع قرب البيوت','قطع الأشجار','حرق النفايات'],
 ['بدلًا من الإفراط في المبيدات الحشرية نستعمل:','المكافحة الحيوية','مزيدًا من المبيدات','حرق الحقول','قطع الأشجار'],
 ['للحدّ من تلوّث التربة بالبلاستيك نستعمل:','موادّ قابلة للتحلّل','أكياس نايلون أكثر','حرق البلاستيك في الحقل','دفن البلاستيك قرب الآبار'],
 ['من الحلول لتدهور الغطاء النباتي:','حملات التشجير وتنظيم الرعي','زيادة الرعي','قطع الأشجار للتدفئة','إشعال الحرائق'],
 ['من سلوكي اليومي الذي يحمي البيئة:','استعمال كيس القماش بدل أكياس النايلون','رمي القمامة في الشارع','ترك الماء يجري','حرق الأوراق قرب البيت'],
]);
ADDQ(6, 'sci', 'القوى في الطبيعة', [
 ['سيارة تسير على طريق مستقيمة بسرعة ثابتة. القوى المؤثّرة فيها:','متوازنة','غير متوازنة','لا توجد قوى'],
 ['كتاب ساكن على الطاولة:','تؤثّر فيه قوى متوازنة','لا تؤثّر فيه أيّ قوة','تؤثّر فيه قوى غير متوازنة'],
 ['قوّتان على حامل واحد متعاكستان في الجهة، شدّتاهما 5N و3N. ما شدّة محصّلتهما؟','2N','8N','15N','5N'],
 ['في لعبة شدّ الحبل نعرف قوة الفريق بـ:','جمع شدّات قوى أفراده','طرح قوى أفراده','قوة أضعف فرد فيه','عدد أفراده فقط'],
 ['أيّ هذه القوى تعيق حركة السيارة إلى الأمام؟','مقاومة الهواء','قوة دفع المحرّك','لا شيء يعيقها'],
]);
ADDQ(6, 'sci', 'تساعدنا أو تعيقنا', [
 ['لماذا تفرد الطيور أجنحتها عند الهبوط؟','لتزيد الاحتكاك بالهواء فتتباطأ وتهبط بأمان','لتزيد سرعتها','لتخفّف وزنها','لتطير نحو الأعلى'],
 ['لماذا تُثبَّت سلاسل معدنية على إطارات السيارات في الطرق المثلجة؟','لزيادة الاحتكاك ومنع الانزلاق','لتقليل الاحتكاك','لتزيين الإطارات','لتسخين الثلج'],
 ['جسم السمكة الانسيابي يساعدها على:','تقليل الاحتكاك بالماء فتسبح أسرع','زيادة الاحتكاك بالماء','الطيران','المشي على اليابسة'],
 ['لماذا التزلّج على الجليد أسهل منه على العشب؟','لأن الجليد أملس فاحتكاكه أقل','لأن الجليد أخشن','لأن العشب أملس','لأن الجليد أثقل'],
 ['ما فائدة الرولمان (المحامل الكروية) في الآلات؟','تقليل الاحتكاك بين الأجزاء المتحركة ومنع تآكلها','زيادة الاحتكاك','إيقاف الآلة','تبريد الهواء'],
]);
ADDQ(6, 'sci', 'أخلص في عملي', [
 ['أنجز مزارع عملًا مقداره 50 J بنقل كيس مسافة 10 m. ما شدّة القوة؟','5 N','500 N','60 N','40 N'],
 ['نُقلت ثلاجة مسافة 8 m بقوة 1500 N. ما العمل المنجز؟','12000 J','1508 J','187.5 J','1492 J'],
 ['قوة 20 N أنجزت عملًا 100 J. ما المسافة؟','5 m','2000 m','120 m','80 m'],
 ['كيف أزيد العمل المنجز في جرّ عربة التسوّق؟','بزيادة قوة الجرّ أو المسافة','بتقليل المسافة','بالوقوف دون حركة','بتقليل القوة'],
]);
ADDQ(6, 'sci', 'الإطراح', [
 ['يطرح جهاز التنفّس:','ثنائي أكسيد الكربون وبخار الماء','البول','العرق','العصارة الصفراوية'],
 ['هل يستطيع الإنسان العيش بكلية واحدة؟','نعم، لأن الكلية الثانية تقوم بالوظيفة نفسها','لا أبدًا','نعم، لكن جسمه لا يطرح البول'],
 ['لماذا جدار المثانة قابل للتمدّد؟','لتتّسع لتخزين البول','لتصفّي الدم','لتصنع البول','لتنقل البول إلى الكلية'],
 ['لماذا تكون الكلية اليمنى أخفض قليلًا من اليسرى؟','لوجود الكبد في الجهة اليمنى','لأنها أكبر','لأن القلب في الجهة اليمنى','لأنها لا تعمل'],
 ['يدخل الدم إلى الكلية عبر:','الشريان الكلوي','الوريد الكلوي','الحالب','المثانة'],
]);
ADDQ(6, 'sci', 'صحة جهاز البول', [
 ['الإفراط في تناول الأغذية الغنية بالبروتين كاللحوم:','يرهق الكليتين','يقوّي الكليتين','لا يؤثّر فيهما أبدًا'],
 ['لماذا يُنصح بشرب كميات كافية من الماء؟','لتنشيط الجهاز البولي وتجنّب الحصيات','لزيادة تشكّل الحصيات','لإرهاق الكليتين','لتوقيف البول'],
 ['الإكثار من المشروبات الغازية:','يضرّ بالكليتين','يفيد الكليتين','ينظّف الكليتين'],
 ['الاستحمام بانتظام والمحافظة على نظافة المرحاض يقيان من:','التهابات جهاز البول','كسور العظام','قصر النظر','تسوّس الأسنان'],
]);
ADDQ(6, 'sci', 'الإطراح لدى الفقاريات', [
 ['يتشابه الضفدع والحمام في جهاز الإطراح بوجود:','الكليتين والحالبين والمقذرة','المثانة والقناة البولية','الرئتين فقط'],
 ['يختلف جهاز الإطراح عند الضفدع عنه عند الحمام بوجود:','مثانة','كليتين','مقذرة','حالبين'],
 ['أيّ هذه الحيوانات ينتهي جهازه البولي بقناة بولية لا بمقذرة؟','الحصان','الحمام','الضفدع','الضبّ'],
 ['لو امتلكت الطيور مثانة مليئة بالبول، فماذا يحدث؟','يزداد وزنها فيصعب طيرانها','تطير أسرع','لا يتغيّر شيء'],
]);
ADDQ(6, 'sci', 'ردائي الواقي', [
 ['لماذا نشعر بالألم عند وخز اليد بدبوس؟','لوجود النهايات العصبية في الجلد','لأن الجلد بلا أعصاب','لوجود الغدد الدهنية فقط','لأن الدم يتجمّد'],
 ['كيف يحفظ الجلد حرارة الجسم في الطقس البارد؟','بطبقات الدهن التي تحبس الحرارة','بإفراز عرق كثير','بتبخير الماء','بتساقط الشعر'],
 ['أين تكثر الغدد العرقية؟','في الإبطين والجبهة والقدمين','في الأظافر','في الشعر','في الأسنان'],
 ['ماذا يحدث لو لم يكن لجسمنا جلد يغطّيه؟','تدخل الجراثيم بسهولة ونتعرّض للأمراض','نصبح أقوى','تزداد حرارتنا ثباتًا','لا يتغيّر شيء'],
 ['يتحسّس الجلد:','الحرارة والبرودة والضغط واللمس والألم','الأصوات','الألوان','الروائح'],
]);
ADDQ(6, 'sci', 'صحة ردائي الواقي', [
 ['ماذا أفعل عند العودة من المدرسة للحفاظ على جلدي؟','أغسل يديّ ووجهي وقدميّ بالماء والصابون وأغيّر ملابسي','لا أغسل شيئًا','أنام بملابس المدرسة','أغسل يديّ بالماء فقط مرة في الأسبوع'],
 ['لماذا لا نتعرّض لأشعة الشمس القوية مدة طويلة؟','لأنها قد تسبّب حروقًا للجلد','لأنها تقوّي الجلد دائمًا','لأنها تمنع العرق','لأنها تبرّد الجسم'],
 ['لبس الأحذية الضيّقة مدة طويلة قد يسبّب:','المسامير الجلدية','قوة القدمين','نموّ الأظافر بسرعة','تحسّن المشي'],
 ['لماذا نعقّم الجروح؟','لمنع دخول الجراثيم والتهاب الجلد','لتسريع النزف','لتغيير لون الجلد','لتوسيع الجرح'],
 ['قصّ الأظافر بانتظام يحمي من:','تجمّع الأوساخ والجراثيم تحتها','كسور العظام','قصر النظر'],
]);
ADDQ(6, 'sci', 'السطح المائل', [
 ['أيّ هذه الأدوات تعمل عمل الإسفين (الوتد)؟','الفأس','البكرة','الميزان','مقود السيارة'],
 ['غطاء برطمان المربّى يعمل على مبدأ:','البرغي','البكرة','الرافعة','العجلة الكبيرة'],
 ['شفرة المقصّ تعمل عمل:','الإسفين','البكرة','البرغي'],
 ['لماذا تُبنى الطرق الجبلية متعرّجة؟','لأن السطح المائل الأطول يقلّل الجهد اللازم للصعود','لتصبح المسافة أقصر','لزيادة الجهد اللازم','للزينة فقط'],
]);
ADDQ(6, 'sci', 'الرافعة', [
 ['كسّارة البندق رافعة من النوع:','الثاني','الأول','الثالث'],
 ['ملقط الشعر رافعة من النوع:','الثالث','الأول','الثاني'],
 ['الميزان ذو الكفّتين رافعة من النوع:','الأول','الثاني','الثالث'],
 ['فتّاحة المياه الغازية رافعة من النوع:','الثاني','الأول','الثالث'],
 ['الأرجوحة المتوازنة (السيسو) رافعة من النوع الأول لأن:','المرتكز يقع بين القوة والمقاومة','المقاومة تقع بين القوة والمرتكز','القوة تقع بين المرتكز والمقاومة'],
]);
ADDQ(6, 'sci', 'البكرة وأنواعها', [
 ['البكرة المثبّتة أعلى الستائر بكرة:','ثابتة','متحرّكة'],
 ['ماذا يحدث لمقدار القوة اللازمة عند استبدال بكرة ثابتة ببكرة متحرّكة؟','يقلّ','يزداد','يبقى نفسه'],
 ['يعتمد المصعد الكهربائي في عمله على:','البكرات','الإسفين','البرغي'],
 ['لماذا نستعمل البكرة الثابتة رغم أنها لا توفّر الجهد؟','لأنها تغيّر اتجاه القوة فنسحب نحو الأسفل بسهولة','لأنها تقلّل الثقل إلى النصف','لأنها تزيد ثقل الجسم','لأنها تقطع الحبل'],
]);
ADDQ(6, 'sci', 'العجلة والمحور', [
 ['لماذا عجلات الجرّار الزراعي كبيرة؟','لأن زيادة نصف قطر العجلة تزيد القوة على المحور فيسهل نقل الأحمال الثقيلة','للزينة فقط','لتقليل القوة الناتجة','لأنها أخفّ وزنًا'],
 ['أيّ هذه يعمل على مبدأ العجلة والمحور؟','دولاب صناعة الفخار','المقصّ','ملقط الشعر','الفأس'],
 ['مقبض صنبور الماء يعمل عمل:','العجلة والمحور','الإسفين','البكرة'],
 ['في مفكّ البراغي ذي المقبض العريض، المقبض العريض يمثّل:','العجلة','المحور','الإسفين'],
]);
ADDQ(6, 'sci', 'أجدادي العظماء', [
 ['يُعدّ المقصّ آلة مركّبة لأنه يحتوي على:','رافعتين وإسفينين','بكرة واحدة','عجلة فقط','برغي فقط'],
 ['أسناننا الأمامية (القواطع) تعمل عمل:','الإسفين','البكرة','العجلة والمحور'],
 ['ذراع الإنسان تعمل عمل:','الرافعة','البرغي','البكرة'],
 ['الملعقة آلة:','بسيطة','مركّبة'],
 ['أيّ هذه آلة مركّبة؟','عصّارة البرتقال','الملعقة','المبشرة'],
]);

})();
(function(){
/* مولّدات أسئلة العربي والإنكليزي من بنوك كلمات كبيرة + ربطها تلقائياً بالدروس حسب العنوان
 * الهدف: كل درس فيه عشرات الأسئلة المختلفة ومستويات صعوبة */

/* ===================== بنوك كلمات العربي ===================== */
const PLURALS = [['ولد','أولاد'],['كتاب','كتب'],['قلم','أقلام'],['بيت','بيوت'],['شجرة','أشجار'],['نجم','نجوم'],['باب','أبواب'],['طائر','طيور'],['جبل','جبال'],['بحر','بحار'],['درس','دروس'],['صديق','أصدقاء'],['زهرة','أزهار'],['يوم','أيام'],['نهر','أنهار'],['قمر','أقمار'],['سوق','أسواق'],['ملك','ملوك'],['شارع','شوارع'],['مدينة','مدن'],['قرية','قرى'],['سفينة','سفن'],['حديقة','حدائق'],['رسالة','رسائل'],['طريق','طرق'],['ثوب','ثياب'],['كلب','كلاب'],['جمل','جمال'],['حصان','أحصنة'],['غصن','أغصان'],['ورقة','أوراق'],['فصل','فصول'],['بلد','بلدان'],['عين','عيون'],['قلب','قلوب'],['وجه','وجوه'],['رجل','رجال'],['امرأة','نساء'],['طفل','أطفال'],['شيخ','شيوخ'],['سؤال','أسئلة'],['جواب','أجوبة'],['مفتاح','مفاتيح'],['عصفور','عصافير'],['فنجان','فناجين'],['مسجد','مساجد'],['مصنع','مصانع'],['مكتب','مكاتب'],['ملعب','ملاعب'],['معلم','معلمون'],['طالب','طلاب'],['صورة','صور'],['غرفة','غرف'],['لعبة','ألعاب'],['دفتر','دفاتر'],['سمكة','أسماك'],['ثمرة','ثمار'],['جزيرة','جزر'],['سحابة','سحب']];
const OPPOSITES = [['كبير','صغير'],['طويل','قصير'],['ساخن','بارد'],['نهار','ليل'],['فوق','تحت'],['سريع','بطيء'],['فرح','حزين'],['قريب','بعيد'],['نظيف','متسخ'],['مفتوح','مغلق'],['أبيض','أسود'],['قوي','ضعيف'],['جديد','قديم'],['دخل','خرج'],['صعد','نزل'],['نام','استيقظ'],['ثقيل','خفيف'],['كثير','قليل'],['غني','فقير'],['شجاع','جبان'],['صادق','كاذب'],['نشيط','كسول'],['واسع','ضيق'],['عالٍ','منخفض'],['حلو','مر'],['يمين','يسار'],['أمام','خلف'],['شرق','غرب'],['شمال','جنوب'],['صيف','شتاء'],['حياة','موت'],['حرب','سلام'],['نجاح','فشل'],['أول','آخر'],['ممتلئ','فارغ'],['ناعم','خشن'],['جاف','رطب'],['مبكر','متأخر'],['داخل','خارج'],['يعطي','يأخذ'],['يبكي','يضحك'],['يبيع','يشتري'],['يتذكر','ينسى'],['صحيح','خطأ'],['سهل','صعب']];
const SYNONYMS = [['سعيد','فرحان'],['بيت','منزل'],['عام','سنة'],['طريق','درب'],['صديق','رفيق'],['جميل','حسن'],['شجاع','جريء'],['الضياء','النور'],['البحر','اليم'],['الغيث','المطر'],['جلس','قعد'],['ذهب','مضى'],['رأى','شاهد'],['قال','تحدث'],['بدأ','شرع'],['أسرع','عجّل'],['الحزن','الأسى'],['الخوف','الفزع'],['الكرم','الجود'],['العلم','المعرفة'],['الوطن','البلاد'],['النصر','الفوز'],['الهدوء','السكينة'],['الغضب','الانفعال'],['الذكي','الفطن'],['المساء','العشية'],['الصباح','الغداة'],['الطعام','الغذاء'],['الأمل','الرجاء'],['يحمي','يصون']];
const NOUNS_M = ['كتاب','قلم','باب','بيت','ولد','طالب','معلم','حصان','جبل','نهر','قمر','صديق','شارع','دفتر','كرسي','مسجد','بحر','طائر','عصفور','فلاح'];
const NOUNS_F = ['شجرة','مدرسة','وردة','طالبة','معلمة','حديقة','سيارة','غرفة','مدينة','نافذة','سمكة','ورقة','طاولة','قطة','نحلة','فراشة','بنت','أم','شمس','أرض'];
const PROFS = [['معلم','معلمون','معلمات'],['مهندس','مهندسون','مهندسات'],['لاعب','لاعبون','لاعبات'],['مسافر','مسافرون','مسافرات'],['فلاح','فلاحون','فلاحات'],['مسلم','مسلمون','مسلمات'],['مجتهد','مجتهدون','مجتهدات'],['ممرض','ممرضون','ممرضات'],['رسام','رسامون','رسامات'],['مدرب','مدربون','مدربات']];
const VERBS = [['كتب','يكتب','اكتب'],['قرأ','يقرأ','اقرأ'],['لعب','يلعب','العب'],['رسم','يرسم','ارسم'],['شرب','يشرب','اشرب'],['جلس','يجلس','اجلس'],['فتح','يفتح','افتح'],['سمع','يسمع','اسمع'],['حفظ','يحفظ','احفظ'],['زرع','يزرع','ازرع'],['ركض','يركض','اركض'],['نظّف','ينظّف','نظّف'],['ساعد','يساعد','ساعد'],['شكر','يشكر','اشكر'],['درس','يدرس','ادرس'],['سبح','يسبح','اسبح'],['صعد','يصعد','اصعد'],['ذهب','يذهب','اذهب'],['عمل','يعمل','اعمل'],['فهم','يفهم','افهم']];
const SUBJ_M = ['الطالبُ','الفلاحُ','الطفلُ','المعلمُ','العصفورُ','الولدُ','الطبيبُ','الرسامُ','اللاعبُ','الصيادُ'];
const SUBJ_PLAIN = s => s.replace(/[ًٌٍَُِّْ]/g,'');
const VO = [['كتبَ','الدرسَ'],['قرأَ','القصةَ'],['زرعَ','الشجرةَ'],['رسمَ','لوحةً'],['شربَ','الماءَ'],['فتحَ','البابَ'],['حفظَ','الدرسَ'],['ركلَ','الكرةَ'],['أكلَ','التفاحةَ'],['نظّفَ','الغرفةَ'],['سقى','الزرعَ'],['حملَ','الحقيبةَ']];
const ADJS = ['مجتهدٌ','نشيطٌ','سعيدٌ','ماهرٌ','لطيفٌ','صادقٌ','كريمٌ','شجاعٌ'];
const PLACES = ['المدرسةِ','الحديقةِ','البيتِ','السوقِ','الملعبِ','المكتبةِ','الحقلِ','النهرِ','البحرِ','الجبلِ'];
const JAR = ['في','من','إلى','على','عن'];
const SUN = 'تثدذرزسشصضطظلن';
const AL_WORDS = ['الشمس','القمر','النهر','الكتاب','السماء','البحر','التفاح','الورد','الدرس','الجبل','الزهرة','الباب','الثلج','الفيل','الرمل','العين','الطائر','الصباح','الليل','الحديقة','الذهب','السمك','الأرض','الضوء','المطر','الغيم','النجم','الهواء','الولد','الشجرة'];
const HAMZA_MID = [['سأل','الألف'],['رأس','الألف'],['فأس','الألف'],['يأكل','الألف'],['مؤمن','الواو'],['مؤذن','الواو'],['سؤال','الواو'],['لؤلؤ','الواو'],['بئر','النبرة (الياء)'],['ذئب','النبرة (الياء)'],['سئل','النبرة (الياء)'],['مسائل','النبرة (الياء)']];
const LETTER_WORDS = [['أسد','🦁'],['أرنب','🐰'],['بطة','🦆'],['باب','🚪'],['تفاحة','🍎'],['تمر','🌴'],['ثعلب','🦊'],['ثوم','🧄'],['جمل','🐫'],['جزر','🥕'],['حصان','🐴'],['حليب','🥛'],['خروف','🐑'],['خبز','🍞'],['دب','🐻'],['دجاجة','🐔'],['ذئب','🐺'],['ذرة','🌽'],['رمان','🍎'],['ريشة','🪶'],['زرافة','🦒'],['زيتون','🫒'],['سمكة','🐟'],['سيارة','🚗'],['شمس','☀️'],['شجرة','🌳'],['صقر','🦅'],['صابون','🧼'],['ضفدع','🐸'],['ضوء','💡'],['طائرة','✈️'],['طبل','🥁'],['ظرف','✉️'],['ظل','🌳'],['عنب','🍇'],['عصفور','🐦'],['غيمة','☁️'],['غزال','🦌'],['فيل','🐘'],['فراشة','🦋'],['قمر','🌙'],['قطة','🐱'],['كتاب','📖'],['كرة','⚽'],['ليمون','🍋'],['لؤلؤ','💎'],['موز','🍌'],['مفتاح','🔑'],['نحلة','🐝'],['نمر','🐯'],['هدية','🎁'],['هلال','🌙'],['وردة','🌹'],['ولد','👦'],['يد','✋'],['يقطين','🎃'],['قلم','✏️'],['سلة','🧺'],['نجمة','⭐'],['بيت','🏠']];

/* ===================== مولّدات العربي ===================== */
const opts3 = (correct, pool) => shuf(pool.filter(x => x !== correct)).slice(0, 3);
var ARG = {
  plu: () => { const e = pick(PLURALS); return mc(`ما جمع كلمة «${e[0]}»؟`, e[1], opts3(e[1], PLURALS.map(x => x[1]))) },
  sing: () => { const e = pick(PLURALS); return mc(`ما مفرد كلمة «${e[1]}»؟`, e[0], opts3(e[0], PLURALS.map(x => x[0]))) },
  opp: () => { const e = pick(OPPOSITES), r = R() < .5; const a = r ? e[1] : e[0], b = r ? e[0] : e[1]; return mc(`ما عكس كلمة «${a}»؟`, b, opts3(b, OPPOSITES.flat().filter(x => x !== a))) },
  syn: () => { const e = pick(SYNONYMS); return mc(`ما معنى كلمة «${e[0]}»؟`, e[1], opts3(e[1], SYNONYMS.map(x => x[1]))) },
  dual: () => { const f = R() < .5, n = pick(f ? NOUNS_F : NOUNS_M), d = f ? n.replace(/ة$/, 'ت') + 'ان' : n + 'ان'; const w = f ? [n.replace(/ة$/, 'ات'), n + 'ون', n.replace(/ة$/, '') + 'ين'] : [n + 'ون', n + 'ات', 'ال' + n]; return mc(`ما مثنى كلمة «${n}»؟`, d, w) },
  gender: () => { const f = R() < .5, n = pick(f ? NOUNS_F : NOUNS_M); return mc(`كلمة «${n}»:`, f ? 'مؤنثة' : 'مذكرة', [f ? 'مذكرة' : 'مؤنثة']) },
  num: () => { const k = ri(0, 2), f = R() < .5, n = pick(f ? NOUNS_F : NOUNS_M); const w = k === 0 ? 'ال' + n : k === 1 ? 'ال' + (f ? n.replace(/ة$/, 'ت') : n) + 'ان' : 'ال' + (pick(PLURALS.filter(x => x[0] === n)) || [0, n + (f ? '' : 'ون')])[1]; return mc(`كلمة «${w}» تدل على:`, ['مفرد', 'مثنى', 'جمع'][k], ['مفرد', 'مثنى', 'جمع']) },
  plt: () => { const p = pick(PROFS), k = ri(0, 2); const w = k === 0 ? p[1] : k === 1 ? p[2] : pick(PLURALS.filter(x => !/ون$|ات$/.test(x[1])))[1]; return mc(`نوع الجمع في كلمة «${w}»:`, ['جمع مذكر سالم', 'جمع مؤنث سالم', 'جمع تكسير'][k], ['جمع مذكر سالم', 'جمع مؤنث سالم', 'جمع تكسير']) },
  type: () => { const k = ri(0, 2); const w = k === 0 ? pick(NOUNS_M.concat(NOUNS_F)) : k === 1 ? pick(VERBS)[ri(0, 1)] : pick(['في', 'من', 'على', 'إلى', 'عن', 'هل', 'لم', 'لن', 'ثم', 'أو']); return mc(`ما نوع الكلمة «${w}»؟`, ['اسم', 'فعل', 'حرف'][k], ['اسم', 'فعل', 'حرف']) },
  tense: () => { const v = pick(VERBS), k = ri(0, 2); return mc(`الفعل «${v[k]}» فعل:`, ['ماضٍ', 'مضارع', 'أمر'][k], ['ماضٍ', 'مضارع', 'أمر']) },
  past: () => { const v = pick(VERBS); return mc(`ما الفعل الماضي من «${v[1]}»؟`, v[0], opts3(v[0], VERBS.map(x => x[0]))) },
  imper: () => { const v = pick(VERBS); return mc(`ما فعل الأمر من «${v[1]}»؟`, v[2], [v[0], v[1], 'لا ' + v[1]]) },
  sty: () => { const s = pick(SUBJ_M); if (R() < .5) { const vo = pick(VO); return mc(`«${vo[0]} ${s} ${vo[1]}»\nما نوع الجملة؟`, 'جملة فعلية', ['جملة اسمية']) } return mc(`«${s} ${pick(ADJS)}»\nما نوع الجملة؟`, 'جملة اسمية', ['جملة فعلية']) },
  fa3il: () => { const s = pick(SUBJ_M), vo = pick(VO); return mc(`«${vo[0]} ${s} ${vo[1]}»\nما الفاعل؟`, SUBJ_PLAIN(s), [SUBJ_PLAIN(vo[0]), SUBJ_PLAIN(vo[1])]) },
  maf3ul: () => { const s = pick(SUBJ_M), vo = pick(VO); return mc(`«${vo[0]} ${s} ${vo[1]}»\nما المفعول به؟`, SUBJ_PLAIN(vo[1]), [SUBJ_PLAIN(s), SUBJ_PLAIN(vo[0])]) },
  mubtada: () => { const s = pick(SUBJ_M), a = pick(ADJS), m = R() < .5; return mc(`«${s} ${a}»\nما ${m ? 'المبتدأ' : 'الخبر'}؟`, SUBJ_PLAIN(m ? s : a), [SUBJ_PLAIN(m ? a : s)]) },
  jar: () => { const s = pick(SUBJ_M), p = pick(PLACES), j = pick(['في', 'إلى', 'من']), m = R() < .5; const sent = `ذهبَ ${s} ${j} ${p}`.replace('ذهبَ ' + s + ' في', 'جلسَ ' + s + ' في'); return m ? mc(`«${sent}»\nما الاسم المجرور؟`, SUBJ_PLAIN(p), [SUBJ_PLAIN(s), j]) : mc(`«${sent}»\nما حرف الجر؟`, j, opts3(j, ['في', 'إلى', 'من', 'على', 'ذهب', 'جلس']).concat([SUBJ_PLAIN(s)]).slice(0, 3)) },
  nasb: () => { const v = pick(VERBS), h = pick(['لن', 'أن', 'كي']), m = R() < .5; const sent = h === 'لن' ? `لن ${v[1]}َ الكسولُ` : h === 'أن' ? `أحبُّ أن ${v[1].replace(/^ي/, 'أ')}َ` : `جئتُ كي ${v[1].replace(/^ي/, 'أ')}َ`; return m ? mc(`«${sent}»\nما حرف النصب؟`, h, opts3(h, ['لن', 'أن', 'كي', 'لم', 'في'])) : mc(`علامة نصب الفعل المضارع بعد «${h}»:`, 'الفتحة', ['الضمة', 'السكون', 'الكسرة']) },
  jazm: () => { const v = pick(VERBS); return R() < .5 ? mc(`«لم ${v[1]}ْ الطالبُ»\nحالة الفعل المضارع:`, 'مجزوم', ['مرفوع', 'منصوب']) : mc(`«${v[1]}ُ الطالبُ»\nحالة الفعل المضارع:`, 'مرفوع', ['مجزوم', 'منصوب']) },
  ishara: () => { const e = pick([['هذا', 'للمفرد المذكر القريب', 'كتابٌ'], ['هذه', 'للمفردة المؤنثة القريبة', 'وردةٌ'], ['هذان', 'للمثنى المذكر', 'ولدان'], ['هاتان', 'للمثنى المؤنث', 'بنتان'], ['هؤلاء', 'للجمع', 'طلابٌ'], ['ذلك', 'للمفرد المذكر البعيد', 'جبلٌ'], ['تلك', 'للمفردة المؤنثة البعيدة', 'شجرةٌ']]); return R() < .5 ? mc(`اسم الإشارة «${e[0]}» يُستعمل:`, e[1], ['للمفرد المذكر القريب', 'للمفردة المؤنثة القريبة', 'للجمع', 'للمثنى المذكر'].filter(x => x !== e[1]).slice(0, 3)) : mc(`أكمل: «___ ${e[2]}»`, e[0], opts3(e[0], ['هذا', 'هذه', 'هذان', 'هاتان', 'هؤلاء'])) },
  damir: () => { const e = pick([['أنا', 'المتكلم المفرد'], ['نحن', 'المتكلمين'], ['أنتَ', 'المخاطب المفرد'], ['أنتِ', 'المخاطبة المفردة'], ['أنتم', 'جماعة المخاطبين'], ['هو', 'الغائب المفرد'], ['هي', 'الغائبة المفردة'], ['هم', 'جماعة الغائبين'], ['هما', 'المثنى الغائب']]); return mc(`الضمير «${e[0]}» يدل على:`, e[1], opts3(e[1], ['المتكلم المفرد', 'المتكلمين', 'المخاطب المفرد', 'الغائب المفرد', 'الغائبة المفردة', 'جماعة الغائبين', 'المثنى الغائب'])) },
  taa: () => { const m = R() < .5; const w = m ? pick(NOUNS_F.filter(x => /ة$/.test(x))) : pick(['بنت', 'بيت', 'صوت', 'زيت', 'وقت', 'سكت', 'نبات', 'أخت', 'كتبت', 'ذهبت']); return mc(`كلمة «${w}» تنتهي بتاء:`, m ? 'مربوطة' : 'مفتوحة', [m ? 'مفتوحة' : 'مربوطة']) },
  shams: () => { const w = pick(AL_WORDS), s = SUN.includes(w[2]); return mc(`اللام في كلمة «${w}»:`, s ? 'شمسية (لا تُلفظ)' : 'قمرية (تُلفظ)', [s ? 'قمرية (تُلفظ)' : 'شمسية (لا تُلفظ)']) },
  hamza: () => { const e = pick(HAMZA_MID); return mc(`كُتبت الهمزة في كلمة «${e[0]}» على:`, e[1], opts3(e[1], ['الألف', 'الواو', 'النبرة (الياء)', 'السطر'])) },
  istifham: () => { const e = pick([['أين', 'المكان'], ['متى', 'الزمان'], ['كم', 'العدد'], ['مَن', 'العاقل'], ['ماذا', 'غير العاقل'], ['كيف', 'الحال'], ['لماذا', 'السبب']]); return R() < .5 ? mc(`نسأل عن ${e[1]} بـ:`, e[0], opts3(e[0], ['أين', 'متى', 'كم', 'مَن', 'ماذا', 'كيف', 'لماذا'])) : mc(`اسم الاستفهام «${e[0]}» نسأل به عن:`, e[1], opts3(e[1], ['المكان', 'الزمان', 'العدد', 'العاقل', 'الحال', 'السبب'])) },
  zarf: () => { const z = pick(['أمامَ', 'خلفَ', 'فوقَ', 'تحتَ', 'بينَ', 'عندَ', 'يمينَ', 'يسارَ']), t = pick(['صباحاً', 'مساءً', 'يومَ', 'ليلاً', 'ظهراً']); return R() < .5 ? mc(`أيّها ظرف مكان؟`, z.replace(/َ$/, ''), [t.replace(/[ًَ]$/, ''), 'كتب', 'جميل']) : mc(`«${z.replace(/َ$/, '')}» ظرف:`, 'مكان', ['زمان']) },
  sifa: () => { const n = pick(NOUNS_F), a = pick(['جميلةٌ', 'كبيرةٌ', 'نظيفةٌ', 'واسعةٌ', 'جديدةٌ']); return mc(`«${n}ٌ ${a}»\nما الصفة (النعت)؟`, SUBJ_PLAIN(a), [n]) },
  kana: () => { const s = pick(['الجوُّ', 'الطالبُ', 'الطقسُ', 'البحرُ']), a = pick(['جميلاً', 'هادئاً', 'بارداً', 'نشيطاً']), k = pick(['كان', 'أصبح', 'صار', 'ليس']), m = R() < .5; return mc(`«${k} ${s} ${a}»\nما ${m ? 'اسم' : 'خبر'} ${k}؟`, SUBJ_PLAIN(m ? s : a), [SUBJ_PLAIN(m ? a : s), k]) },
  inna: () => { const s = pick(['العلمَ', 'الرياضةَ', 'الصدقَ', 'الوطنَ']), a = pick(['مفيدٌ', 'جميلٌ', 'نورٌ', 'غالٍ']), k = pick(['إنّ', 'كأنّ', 'لعلّ', 'لكنّ']), m = R() < .5; return mc(`«${k} ${s} ${a}»\nما ${m ? 'اسم' : 'خبر'} ${k}؟`, SUBJ_PLAIN(m ? s : a), [SUBJ_PLAIN(m ? a : s), k]) },
  letter: l => () => { const has = LETTER_WORDS.filter(w => w[0].includes(l)); const st = has.filter(w => w[0][0] === l); if (st.length && R() < .5) { const w = pick(st); return mc(`بأيّ حرف تبدأ كلمة «${w[0]}»؟ ${w[1]}`, l, opts3(l, 'بتثجحخدرسشصعفقكلمن'.split(''))) } const w = pick(has.length ? has : LETTER_WORDS); return mc(`أيّ كلمة فيها حرف «${l}»؟ ${w[1]}`, w[0], opts3(w[0], LETTER_WORDS.filter(x => !x[0].includes(l)).map(x => x[0]))) },
  firstAny: () => { const w = pick(LETTER_WORDS); return mc(`بأيّ حرف تبدأ كلمة «${w[0]}»؟ ${w[1]}`, w[0][0], opts3(w[0][0], 'أبتثجحخدذرزسشصضطظعغفقكلمنهوي'.split(''))) },
  count: () => { const w = pick(LETTER_WORDS), n = w[0].length; return mc(`كم حرفاً في كلمة «${w[0]}»؟`, ar(n), nearN(n, 2, 2).map(ar)) }
};

/* ===================== بنوك كلمات الإنكليزي ===================== */
const TOPICS = {
  greet: [['hello','مرحباً'],['goodbye','مع السلامة'],['thank you','شكراً'],['please','من فضلك'],['sorry','آسف'],['good morning','صباح الخير'],['good night','تصبح على خير'],['friend','صديق'],['name','اسم'],['welcome','أهلاً وسهلاً']],
  school: [['book','كتاب'],['pen','قلم حبر'],['pencil','قلم رصاص'],['bag','حقيبة'],['desk','مقعد'],['chair','كرسي'],['board','سبورة'],['teacher','معلم'],['student','طالب'],['ruler','مسطرة'],['eraser','ممحاة'],['classroom','صف'],['library','مكتبة'],['playground','ساحة'],['homework','واجب']],
  colours: [['red','أحمر'],['blue','أزرق'],['green','أخضر'],['yellow','أصفر'],['black','أسود'],['white','أبيض'],['orange','برتقالي'],['pink','زهري'],['purple','بنفسجي'],['brown','بني'],['grey','رمادي']],
  body: [['head','رأس'],['eye','عين'],['ear','أذن'],['nose','أنف'],['mouth','فم'],['hand','يد'],['foot','قدم'],['leg','ساق'],['arm','ذراع'],['hair','شعر'],['teeth','أسنان'],['finger','إصبع']],
  family: [['mother','أم'],['father','أب'],['brother','أخ'],['sister','أخت'],['grandmother','جدة'],['grandfather','جد'],['uncle','عم أو خال'],['aunt','عمة أو خالة'],['cousin','ابن العم'],['baby','طفل رضيع'],['parents','الوالدان'],['son','ابن'],['daughter','ابنة']],
  house: [['kitchen','مطبخ'],['bedroom','غرفة نوم'],['bathroom','حمام'],['living room','غرفة الجلوس'],['garden','حديقة'],['door','باب'],['window','نافذة'],['bed','سرير'],['sofa','أريكة'],['table','طاولة'],['roof','سقف'],['stairs','درج']],
  clothes: [['shirt','قميص'],['dress','فستان'],['shoes','حذاء'],['hat','قبعة'],['coat','معطف'],['jacket','سترة'],['trousers','بنطال'],['skirt','تنورة'],['socks','جوارب'],['scarf','وشاح'],['gloves','قفازات'],['T-shirt','كنزة قصيرة']],
  food: [['bread','خبز'],['milk','حليب'],['egg','بيضة'],['rice','رز'],['apple','تفاحة'],['banana','موزة'],['orange','برتقالة'],['cheese','جبنة'],['water','ماء'],['juice','عصير'],['chicken','دجاج'],['fish','سمك'],['carrot','جزرة'],['tomato','بندورة'],['soup','حساء'],['honey','عسل']],
  animals: [['cat','قطة'],['dog','كلب'],['cow','بقرة'],['horse','حصان'],['sheep','خروف'],['lion','أسد'],['elephant','فيل'],['monkey','قرد'],['giraffe','زرافة'],['bird','طائر'],['fish','سمكة'],['rabbit','أرنب'],['camel','جمل'],['bear','دب'],['duck','بطة'],['tiger','نمر']],
  jobs: [['doctor','طبيب'],['teacher','معلم'],['nurse','ممرض'],['farmer','فلاح'],['pilot','طيار'],['driver','سائق'],['engineer','مهندس'],['police officer','شرطي'],['cook','طباخ'],['dentist','طبيب أسنان'],['baker','خباز'],['firefighter','إطفائي']],
  weather: [['sunny','مشمس'],['rainy','ماطر'],['cloudy','غائم'],['windy','عاصف'],['snowy','مثلج'],['hot','حار'],['cold','بارد'],['warm','دافئ'],['spring','الربيع'],['summer','الصيف'],['autumn','الخريف'],['winter','الشتاء']],
  transport: [['car','سيارة'],['bus','حافلة'],['train','قطار'],['plane','طائرة'],['ship','سفينة'],['bike','دراجة'],['taxi','سيارة أجرة'],['boat','قارب'],['motorbike','دراجة نارية'],['ticket','تذكرة']],
  sports: [['football','كرة القدم'],['basketball','كرة السلة'],['tennis','التنس'],['swimming','السباحة'],['running','الجري'],['ball','كرة'],['team','فريق'],['player','لاعب'],['win','يفوز'],['race','سباق']],
  places: [['school','مدرسة'],['hospital','مستشفى'],['bank','مصرف'],['park','حديقة عامة'],['market','سوق'],['mosque','مسجد'],['library','مكتبة'],['bakery','مخبز'],['street','شارع'],['village','قرية'],['city','مدينة'],['zoo','حديقة حيوان']],
  days: [['Monday','الاثنين'],['Tuesday','الثلاثاء'],['Wednesday','الأربعاء'],['Thursday','الخميس'],['Friday','الجمعة'],['Saturday','السبت'],['Sunday','الأحد'],['January','كانون الثاني'],['March','آذار'],['May','أيار'],['July','تموز'],['October','تشرين الأول']],
  hobbies: [['reading','القراءة'],['drawing','الرسم'],['painting','التلوين'],['singing','الغناء'],['dancing','الرقص'],['swimming','السباحة'],['cooking','الطبخ'],['fishing','صيد السمك'],['camping','التخييم'],['collecting stamps','جمع الطوابع']],
  feelings: [['happy','سعيد'],['sad','حزين'],['angry','غاضب'],['tired','متعب'],['hungry','جائع'],['thirsty','عطشان'],['scared','خائف'],['excited','متحمس'],['bored','ملول'],['proud','فخور']],
  tech: [['computer','حاسوب'],['screen','شاشة'],['keyboard','لوحة مفاتيح'],['mouse','فأرة'],['phone','هاتف'],['internet','الإنترنت'],['email','بريد إلكتروني'],['password','كلمة السر'],['tablet','جهاز لوحي'],['camera','كاميرا']],
  health: [['headache','صداع'],['toothache','ألم أسنان'],['cold','زكام'],['fever','حرارة'],['cough','سعال'],['medicine','دواء'],['healthy','صحي'],['exercise','تمرين رياضي'],['sleep','نوم'],['vegetables','خضار']],
  nature: [['tree','شجرة'],['flower','زهرة'],['river','نهر'],['mountain','جبل'],['sea','بحر'],['forest','غابة'],['desert','صحراء'],['island','جزيرة'],['sky','سماء'],['sun','شمس'],['moon','قمر'],['star','نجمة']],
  music: [['guitar','غيتار'],['piano','بيانو'],['drum','طبل'],['violin','كمان'],['song','أغنية'],['singer','مغني'],['band','فرقة'],['music','موسيقا']]
};
const TOPIC_KEYS = [['greet',/hello|welcome|nice to meet|back to school/i],['school',/school|classroom|rules|subjects/i],['colours',/colour|fun time/i],['body',/body|look at me|senses|appearance/i],['family',/family/i],['house',/house|home/i],['clothes',/clothes/i],['food',/food|meal|tasty|drink/i],['animals',/animal|zoo|farm|bird|big blue/i],['jobs',/job/i],['weather',/weather|season|months/i],['transport',/transport|vehicle|airport|trip|holiday/i],['sports',/sport/i],['places',/where i live|town|direction|places|shopping|neighbour/i],['days',/routine|time|weekend|day/i],['hobbies',/hobb|free time|fun|cartoon|tv|theatre|arts|parties|festival/i],['feelings',/feeling|well soon|illness/i],['tech',/computer|technolog|invention/i],['health',/health|illness|hospital|get well/i],['nature',/nature|beach|park|recycl|resources|baby animals/i],['music',/music/i]];
const IRREG = [['go','went'],['eat','ate'],['see','saw'],['write','wrote'],['have','had'],['make','made'],['come','came'],['take','took'],['buy','bought'],['swim','swam'],['drink','drank'],['run','ran'],['sing','sang'],['fly','flew'],['read','read'],['sleep','slept'],['give','gave'],['find','found'],['teach','taught'],['think','thought']];
const REG = [['play','played'],['watch','watched'],['visit','visited'],['clean','cleaned'],['help','helped'],['cook','cooked'],['walk','walked'],['open','opened'],['paint','painted'],['wash','washed'],['jump','jumped'],['listen','listened']];
const ADJ_CMP = [['big','bigger','biggest'],['small','smaller','smallest'],['tall','taller','tallest'],['fast','faster','fastest'],['long','longer','longest'],['happy','happier','happiest'],['old','older','oldest'],['hot','hotter','hottest'],['cold','colder','coldest'],['short','shorter','shortest']];
const COUNTABLE = ['apples','books','eggs','pens','carrots','friends','chairs','cars'], UNCOUNT = ['milk','water','juice','bread','rice','sugar','money','time'];
const NUM_W = ['zero','one','two','three','four','five','six','seven','eight','nine','ten','eleven','twelve','thirteen','fourteen','fifteen','sixteen','seventeen','eighteen','nineteen','twenty'];
const BE_SUBJ = [['I','am'],['He','is'],['She','is'],['It','is'],['We','are'],['They','are'],['You','are'],['My mother','is'],['The boys','are'],['Sami','is']];
var ENG = {
  vocab: topic => () => { const L = TOPICS[topic], e = pick(L), r = R() < .5; return r ? mc('ما معنى الكلمة؟', e[1], opts3(e[1], L.map(x => x[1])), { en: e[0] }) : mc(`ما الكلمة الإنكليزية لـ «${e[1]}»؟`, e[0], opts3(e[0], L.map(x => x[0]))) },
  be: () => { const e = pick(BE_SUBJ); return mc('اختر الكلمة المناسبة:', e[1], opts3(e[1], ['am', 'is', 'are']), { en: `${e[0]} ___ happy.` }) },
  aan: () => { const w = pick(['apple', 'egg', 'orange', 'elephant', 'umbrella', 'ice cream', 'book', 'cat', 'ball', 'dog', 'pen', 'house']); const a = /^[aeiou]/.test(w) ? 'an' : 'a'; return mc('اختر الكلمة المناسبة:', a, ['a', 'an', 'the'].filter(x => x !== a), { en: `This is ___ ${w}.` }) },
  num: () => { const n = ri(1, 20); return mc(`كيف نكتب العدد ${ar(n)} بالإنكليزي؟`, NUM_W[n], opts3(NUM_W[n], NUM_W.slice(1))) },
  plural: () => { const e = pick([['box', 'boxes'], ['cat', 'cats'], ['child', 'children'], ['man', 'men'], ['baby', 'babies'], ['tooth', 'teeth'], ['bus', 'buses'], ['book', 'books'], ['foot', 'feet'], ['mouse', 'mice'], ['woman', 'women'], ['knife', 'knives']]); const s = e[0] + 's'; return mc('ما جمع الكلمة؟', e[1], [s === e[1] ? e[0] + 'es' : s, e[0] + 'ies', e[0]].filter(x => x !== e[1]), { en: e[0] }) },
  past: () => { const e = pick(R() < .6 ? IRREG : REG); return mc('ما الماضي من الفعل؟', e[1], [e[0] + 'ed', e[0] + 's', e[0] + 'ing'].filter(x => x !== e[1]), { en: e[0] }) },
  cont: () => { const v = pick(['play', 'read', 'eat', 'draw', 'sleep', 'cook', 'walk', 'sing']); const s = pick(BE_SUBJ.slice(1)); return mc('اختر الكلمة المناسبة:', v + 'ing', [v, v + 's', v + 'ed'], { en: `${s[0]} ${s[1]} ___ now.` }) },
  pres3: () => { const v = pick(['play', 'read', 'eat', 'drink', 'walk', 'sleep', 'help', 'write']); return mc('اختر الكلمة المناسبة:', v + 's', [v, v + 'ing', v + 'ed'], { en: `She ___ every day.` }) },
  cmp: () => { const e = pick(ADJ_CMP), sup = R() < .5; return sup ? mc('اختر الكلمة المناسبة:', e[2], [e[0], e[1], 'more ' + e[0]], { en: `It is the ___ in the class.` }) : mc('اختر الكلمة المناسبة:', e[1], [e[0], e[2], 'more ' + e[0]], { en: `A lion is ___ than a cat.` }) },
  much: () => { const c = R() < .5, w = pick(c ? COUNTABLE : UNCOUNT); return mc('اختر الكلمة المناسبة:', c ? 'many' : 'much', [c ? 'much' : 'many', 'any'], { en: `How ___ ${w} do you have?` }) },
  there: () => { const pl = R() < .5, w = pl ? pick(['three books', 'two cats', 'many trees', 'four chairs']) : pick(['a bed', 'a cat', 'a garden', 'a table']); return mc('اختر الكلمة المناسبة:', pl ? 'are' : 'is', [pl ? 'is' : 'are', 'am'], { en: `There ___ ${w} in the room.` }) },
  can: () => { const e = pick([['Fish can ___.', 'swim', 'fly', 'read'], ['Birds can ___.', 'fly', 'swim', 'write'], ['I can ___ with my eyes.', 'see', 'hear', 'smell'], ['A baby can’t ___.', 'drive', 'cry', 'sleep']]); return mc('اختر الكلمة المناسبة:', e[1], e.slice(2), { en: e[0] }) },
  wasw: () => { const pl = R() < .5, s = pl ? pick(['They', 'We', 'The children']) : pick(['I', 'He', 'She']); return mc('اختر الكلمة المناسبة:', pl ? 'were' : 'was', [pl ? 'was' : 'were', 'is'], { en: `${s} ___ at home yesterday.` }) },
  prep: () => { const e = pick([['in', 'داخل'], ['on', 'فوق'], ['under', 'تحت'], ['next to', 'بجانب'], ['behind', 'خلف'], ['between', 'بين']]); return mc('ما معنى الكلمة؟', e[1], opts3(e[1], ['داخل', 'فوق', 'تحت', 'بجانب', 'خلف', 'بين']), { en: e[0] }) }
};
const EN_GRAMMAR = { 1: ['num', 'be', 'prep'], 2: ['num', 'be', 'plural', 'there', 'can'], 3: ['be', 'cont', 'pres3', 'can', 'plural'], 4: ['pres3', 'cont', 'there', 'past', 'aan', 'cmp'], 5: ['past', 'cmp', 'much', 'pres3', 'cont'], 6: ['past', 'wasw', 'cmp', 'much', 'cont'] };

/* ===================== الربط التلقائي بعناوين الدروس ===================== */
const AR_RULES = [
  [/الجمع|المفرد/, ['plu', 'sing']], [/مثنى|المثنى/, ['dual', 'num']], [/المذكر والمؤنث/, ['gender']], [/الأضداد|عكس/, ['opp']], [/المرادف|معناها/, ['syn']],
  [/الاسم والفعل والحرف/, ['type']], [/الماضي والمضارع|الأمر/, ['tense', 'past', 'imper']], [/الجملة الاسمية والفعلية|الجملة الاسمية|الجملة الفعلية/, ['sty']],
  [/الفاعل/, ['fa3il', 'maf3ul']], [/المفعول به/, ['maf3ul', 'fa3il']], [/المبتدأ والخبر/, ['mubtada']], [/حروف الجر|المجرور/, ['jar']],
  [/أحرف النصب|النصب/, ['nasb']], [/مجزوم|الجزم/, ['jazm']], [/أسماء الإشارة|الإشارة/, ['ishara']], [/الضمائر/, ['damir']],
  [/التاء/, ['taa']], [/ال الشمسية|الشمسية/, ['shams']], [/الهمزة المتوسطة/, ['hamza']], [/الاستفهام/, ['istifham']], [/ظرف/, ['zarf']], [/الصفة|النعت/, ['sifa']],
  [/كان وأخواتها/, ['kana']], [/إنّ وأخواتها|إن وأخواتها/, ['inna']], [/جمع المذكر السالم|جمع المؤنث/, ['plt']]
];
// مهارات عامة لكل صف تُضاف لدروس العربي التي لا تطابق قاعدة محددة
const AR_GRADE = { 1: ['firstAny', 'count'], 2: ['plu', 'opp', 'shams', 'taa'], 3: ['type', 'syn', 'opp', 'tense'], 4: ['sty', 'jar', 'syn', 'plu'], 5: ['fa3il', 'mubtada', 'plt', 'syn'], 6: ['fa3il', 'maf3ul', 'kana', 'inna', 'syn'] };
for (const g in CUR) {
  (CUR[g].ar || []).forEach(l => {
    const m = l.t.match(/\(([^)]+)\)/), letters = m ? m[1].split(/\s*-\s*/).filter(x => x.length === 1) : [];
    let keys = [];
    AR_RULES.forEach(r => { if (r[0].test(l.t)) keys.push(...r[1]) });
    const fns = keys.map(k => ARG[k]);
    letters.forEach(x => fns.push(ARG.letter(x)));
    if (!fns.length) AR_GRADE[g].forEach(k => fns.push(ARG[k]));
    l.fx = (l.fx || []).concat(fns);
  });
  (CUR[g].en || []).forEach(l => {
    const fns = [];
    TOPIC_KEYS.forEach(([t, re]) => { if (re.test(l.t)) fns.push(ENG.vocab(t)) });
    (EN_GRAMMAR[g] || []).forEach(k => fns.push(ENG[k]));
    if (fns.length < 3) fns.push(ENG.vocab('school'));
    l.fx = (l.fx || []).concat(fns);
  });
}

})();
(function(){
/* مولّدات العلوم والتربية الإسلامية + توسيع بنوك الرياضيات الصغيرة — بيانات حقيقية ثابتة تولّد أسئلة كثيرة */
const ANIMALS = [
 // الاسم، الصنف، الغذاء، الغطاء، البيئة، التكاثر
 ['القطة','ثدييات','لاحم','شعر','البيت','تلد'],['البقرة','ثدييات','عاشب','شعر','المزرعة','تلد'],['الأسد','ثدييات','لاحم','شعر','الغابة','يلد'],['الحوت','ثدييات','لاحم','جلد أملس','البحر','يلد'],['الخفاش','ثدييات','قارت (حشرات)','شعر','الكهوف','يلد'],['الجمل','ثدييات','عاشب','شعر','الصحراء','يلد'],['الأرنب','ثدييات','عاشب','فرو','الحقول','يلد'],['الدب','ثدييات','قارت','فرو','الغابة','يلد'],
 ['الحمامة','طيور','حبوب','ريش','المدينة','تبيض'],['النسر','طيور','لاحم','ريش','الجبال','يبيض'],['الدجاجة','طيور','حبوب','ريش','المزرعة','تبيض'],['البطة','طيور','قارت','ريش','البحيرة','تبيض'],['البطريق','طيور','لاحم (سمك)','ريش','القطب','يبيض'],
 ['السمكة','أسماك','قارت','حراشف','الماء','تبيض'],['القرش','أسماك','لاحم','حراشف','البحر','يلد أو يبيض'],
 ['الأفعى','زواحف','لاحم','حراشف','الصحراء والحقول','تبيض'],['السلحفاة','زواحف','عاشب','درع صلب','البر والبحر','تبيض'],['التمساح','زواحف','لاحم','حراشف','الأنهار','يبيض'],
 ['الضفدع','برمائيات','قارت (حشرات)','جلد رطب','الماء واليابسة','يبيض'],
 ['النحلة','حشرات','رحيق الأزهار','هيكل خارجي','الخلية','تبيض'],['الفراشة','حشرات','رحيق الأزهار','هيكل خارجي','الحدائق','تبيض'],['النملة','حشرات','قارت','هيكل خارجي','المستعمرة','تبيض']];
const ORGANS = [['القلب','ضخ الدم'],['الرئتان','التنفس'],['المعدة','هضم الطعام'],['الدماغ','التفكير والتحكم بالجسم'],['الكليتان','تنقية الدم وطرح البول'],['العين','الرؤية'],['الأذن','السمع'],['الجلد','الحماية والإحساس'],['العظام','دعم الجسم وحمايته'],['العضلات','الحركة'],['الأمعاء الدقيقة','امتصاص الغذاء'],['الكبد','إفراز العصارة الصفراء']];
const MATERIALS = [['الحجر','صلب'],['الحليب','سائل'],['بخار الماء','غاز'],['الخشب','صلب'],['الزيت','سائل'],['الهواء','غاز'],['الجليد','صلب'],['العصير','سائل'],['الأكسجين','غاز'],['الحديد','صلب'],['الماء','سائل'],['الدخان','غاز']];
const CONDUCT = [['النحاس','موصل'],['الحديد','موصل'],['الألمنيوم','موصل'],['الذهب','موصل'],['الخشب','عازل'],['البلاستيك','عازل'],['المطاط','عازل'],['الزجاج','عازل'],['الورق','عازل']];
const PLANETS = ['عطارد','الزهرة','الأرض','المريخ','المشتري','زحل','أورانوس','نبتون'];
const CHANGES = [['احتراق الخشب','كيميائي'],['صدأ الحديد','كيميائي'],['تعفّن الخبز','كيميائي'],['طهي البيضة','كيميائي'],['ذوبان الثلج','فيزيائي'],['تقطيع الورق','فيزيائي'],['غليان الماء','فيزيائي'],['ذوبان السكر في الماء','فيزيائي'],['كسر الزجاج','فيزيائي'],['تخمّر العجين','كيميائي']];
const ENERGY = [['الشمس','متجدد'],['الرياح','متجدد'],['الماء الجاري','متجدد'],['النفط','غير متجدد'],['الفحم','غير متجدد'],['الغاز الطبيعي','غير متجدد']];
var SCIG = {
  animalClass: () => { const a = pick(ANIMALS); return mc(`${a[0]} من:`, a[1], opts3(a[1], ['ثدييات', 'طيور', 'أسماك', 'زواحف', 'برمائيات', 'حشرات'])) },
  animalFood: () => { const a = pick(ANIMALS.filter(x => /لاحم|عاشب/.test(x[2]))); const k = /لاحم/.test(a[2]) ? 'لاحم' : 'عاشب'; return mc(`${a[0]} حيوان:`, k, ['لاحم', 'عاشب', 'لا يتغذى'].filter(x => x !== k)) },
  animalCover: () => { const a = pick(ANIMALS); return mc(`يغطي جسم ${a[0]}:`, a[3], opts3(a[3], [...new Set(ANIMALS.map(x => x[3]))])) },
  animalBirth: () => { const a = pick(ANIMALS.filter(x => !/أو/.test(x[5]))); const k = /تلد|يلد/.test(a[5]) ? 'يلد' : 'يبيض'; return mc(`${a[0]}:`, k, [k === 'يلد' ? 'يبيض' : 'يلد']) },
  organ: () => { const o = pick(ORGANS), r = R() < .5; return r ? mc(`وظيفة ${o[0]}:`, o[1], opts3(o[1], ORGANS.map(x => x[1]))) : mc(`العضو المسؤول عن ${o[1]}:`, o[0], opts3(o[0], ORGANS.map(x => x[0]))) },
  matter: () => { const m = pick(MATERIALS); return mc(`${m[0]} مادة:`, m[1], ['صلب', 'سائل', 'غاز'].filter(x => x !== m[1])) },
  conduct: () => { const m = pick(CONDUCT); return mc(`${m[0]} للكهرباء:`, m[1], [m[1] === 'موصل' ? 'عازل' : 'موصل']) },
  planet: () => { const i = ri(0, 7), r = R() < .5; return r ? mc(`الكوكب رقم ${ar(i + 1)} في البعد عن الشمس:`, PLANETS[i], opts3(PLANETS[i], PLANETS)) : mc(`أيّ كوكب أقرب إلى الشمس؟`, PLANETS[Math.min(i, 6)], [PLANETS[Math.min(i, 6) + 1]]) },
  change: () => { const c = pick(CHANGES); return mc(`${c[0]} تغيّر:`, c[1], [c[1] === 'كيميائي' ? 'فيزيائي' : 'كيميائي']) },
  energy: () => { const e = pick(ENERGY); return mc(`${e[0]} مصدر طاقة:`, e[1], [e[1] === 'متجدد' ? 'غير متجدد' : 'متجدد']) },
  senses: () => { const e = pick([['العين', 'البصر'], ['الأذن', 'السمع'], ['الأنف', 'الشم'], ['اللسان', 'التذوق'], ['الجلد', 'اللمس']]); return R() < .5 ? mc(`عضو حاسة ${e[1]}:`, e[0], opts3(e[0], ['العين', 'الأذن', 'الأنف', 'اللسان', 'الجلد'])) : mc(`${e[0]} عضو حاسة:`, e[1], opts3(e[1], ['البصر', 'السمع', 'الشم', 'التذوق', 'اللمس'])) },
  seasons: () => { const e = pick([['الشتاء', 'الأبرد'], ['الصيف', 'الأحر'], ['الربيع', 'تتفتح فيه الأزهار'], ['الخريف', 'تتساقط فيه أوراق الشجر']]); return mc(`الفصل ${e[1]}:`, e[0], opts3(e[0], ['الشتاء', 'الصيف', 'الربيع', 'الخريف'])) },
  living: () => { const alive = R() < .5; const w = alive ? pick(['العصفور', 'الشجرة', 'القطة', 'الإنسان', 'الوردة', 'السمكة', 'النملة']) : pick(['الحجر', 'الكرسي', 'الكرة', 'القلم', 'الماء', 'السيارة', 'الباب']); return mc(`${w}:`, alive ? 'كائن حي' : 'غير حي', [alive ? 'غير حي' : 'كائن حي']) }
};
const PROPHETS = [['التوراة', 'موسى عليه السلام'], ['الإنجيل', 'عيسى عليه السلام'], ['الزبور', 'داود عليه السلام'], ['القرآن الكريم', 'محمد ﷺ'], ['الصحف', 'إبراهيم عليه السلام']];
const PRAYERS = [['الفجر', 2], ['الظهر', 4], ['العصر', 4], ['المغرب', 3], ['العشاء', 4]];
const SURAH_INFO = () => (typeof SURAHS !== 'undefined' ? SURAHS : []);
const opts3 = (correct, pool) => shuf(pool.filter(x => x !== correct)).slice(0, 3);
var ISLG = {
  rakaat: () => { const p = pick(PRAYERS); return mc(`عدد ركعات صلاة ${p[0]}:`, ar(p[1]), opts3(ar(p[1]), ['٢', '٣', '٤', '٥'])) },
  books: () => { const b = pick(PROPHETS); return R() < .5 ? mc(`أُنزل ${b[0]} على:`, b[1], opts3(b[1], PROPHETS.map(x => x[1]))) : mc(`الكتاب الذي أُنزل على ${b[1]}:`, b[0], opts3(b[0], PROPHETS.map(x => x[0]))) },
  pillars: () => { const p = ['الشهادتان', 'الصلاة', 'الزكاة', 'صوم رمضان', 'حج البيت'], k = ri(0, 4); return R() < .5 ? mc(`الركن رقم ${ar(k + 1)} من أركان الإسلام:`, p[k], opts3(p[k], p)) : mc(`أيّها من أركان الإسلام؟`, p[k], ['الكذب', 'النوم', 'اللعب']) },
  iman: () => { const p = ['الإيمان بالله', 'الإيمان بالملائكة', 'الإيمان بالكتب', 'الإيمان بالرسل', 'الإيمان باليوم الآخر', 'الإيمان بالقدر خيره وشره']; return mc(`أيّها من أركان الإيمان؟`, pick(p), ['الصلاة', 'الحج', 'الزكاة']) },
  names: () => { const e = pick([['الرحمن', 'واسع الرحمة'], ['الرزاق', 'الذي يرزق المخلوقات'], ['الخالق', 'الذي خلق كل شيء'], ['السميع', 'الذي يسمع كل شيء'], ['البصير', 'الذي يرى كل شيء'], ['الغفور', 'الذي يغفر الذنوب'], ['العليم', 'الذي يعلم كل شيء']]); return mc(`معنى اسم الله «${e[0]}»:`, e[1], opts3(e[1], ['واسع الرحمة', 'الذي يرزق المخلوقات', 'الذي خلق كل شيء', 'الذي يسمع كل شيء', 'الذي يغفر الذنوب'])) },
  surahNext: () => { const su = pick(SURAH_INFO()); if (!su) return mc('أول سورة في القرآن:', 'الفاتحة', ['الناس', 'البقرة']); const i = ri(0, su.v.length - 2); return mc(`سورة ${su.n}: ما الآية بعد «${su.v[i]}»؟`, su.v[i + 1], opts3(su.v[i + 1], SURAH_INFO().flatMap(x => x.v).filter(x => x !== su.v[i]))) },
  surahCount: () => { const su = pick(SURAH_INFO()); if (!su) return mc('عدد آيات سورة الفاتحة:', '٧', ['٥', '٦']); return mc(`عدد آيات سورة ${su.n}:`, ar(su.v.length), opts3(ar(su.v.length), ['٣', '٤', '٥', '٦', '٧', '٨'])) },
  hadith: () => { const h = pick((typeof HADITH !== 'undefined' ? HADITH : null) || [['إنما الأعمال بالنيات', '', '', 'على ماذا تقوم الأعمال؟', 'النية', 'السرعة', 'الكلام']]); return mc(`«${h[0]}»\n${h[3]}`, h[4], h.slice(5)) },
  sira: () => { const e = pick([['وُلد النبي ﷺ في عام:', 'الفيل', 'الهجرة', 'الحزن'], ['هاجر النبي ﷺ إلى:', 'المدينة المنورة', 'الطائف', 'الشام'], ['زوجة النبي ﷺ الأولى:', 'خديجة رضي الله عنها', 'عائشة', 'حفصة'], ['أول من أسلم من الصبيان:', 'علي بن أبي طالب', 'عمر', 'عثمان'], ['نزل الوحي أول مرة في:', 'غار حراء', 'غار ثور', 'الكعبة'], ['عمر النبي ﷺ عند البعثة:', '٤٠ سنة', '٢٠ سنة', '٦٠ سنة'], ['أول مسجد بُني في الإسلام:', 'مسجد قباء', 'المسجد الأقصى', 'المسجد الأموي']]); return mc(e[0], e[1], e.slice(2)) },
  akhlaq: () => { const e = pick([['الصدق', 'خلق حسن'], ['الأمانة', 'خلق حسن'], ['التعاون', 'خلق حسن'], ['الكذب', 'خلق سيئ'], ['الغش', 'خلق سيئ'], ['الغيبة', 'خلق سيئ'], ['بر الوالدين', 'خلق حسن'], ['الأنانية', 'خلق سيئ'], ['الرحمة', 'خلق حسن'], ['السخرية من الناس', 'خلق سيئ']]); return mc(`«${e[0]}»:`, e[1], [e[1] === 'خلق حسن' ? 'خلق سيئ' : 'خلق حسن']) },
  wudu: () => { const steps = ['النية', 'غسل الكفين', 'المضمضة', 'الاستنشاق', 'غسل الوجه', 'غسل اليدين إلى المرفقين', 'مسح الرأس', 'غسل القدمين']; const i = ri(0, 6); return mc(`في الوضوء، بعد «${steps[i]}» يأتي:`, steps[i + 1], opts3(steps[i + 1], steps.filter(x => x !== steps[i]))) }
};
// توسيع مولدات الرياضيات ذات البنوك الصغيرة
MATHG.shapes2 = g => { const e = pick([['مثلث', 3], ['مربع', 4], ['مستطيل', 4], ['مخمس', 5], ['مسدس', 6], ['مثمن', 8]]), w = R() < .5; return w ? mc(`كم ضلعاً للـ${e[0]}؟`, ar(e[1]), opts3(ar(e[1]), ['٣', '٤', '٥', '٦', '٨'])) : mc(`كم رأساً للـ${e[0]}؟`, ar(e[1]), opts3(ar(e[1]), ['٣', '٤', '٥', '٦', '٨'])) };
MATHG.solids = g => { const e = pick([['المكعب', 'وجوه', 6], ['المكعب', 'أحرف', 12], ['المكعب', 'رؤوس', 8], ['متوازي المستطيلات', 'وجوه', 6], ['الهرم الرباعي', 'وجوه', 5]]); return mc(`كم عدد ${e[1]} ${e[0]}؟`, ar(e[2]), opts3(ar(e[2]), ['٤', '٥', '٦', '٨', '١٢'])) };
MATHG.timecalc = g => { const h = ri(1, 9), d = ri(1, 3); return mc(`بدأ الدرس الساعة ${h} واستمر ${d} ساعة. متى انتهى؟`, `الساعة ${h + d}`, [`الساعة ${h + d + 1}`, `الساعة ${Math.max(1, h + d - 1)}`, `الساعة ${h}`], { m: true }) };
MATHG.money2 = g => { const p = 25 * ri(2, 20), paid = Math.ceil(p / 100) * 100 + (R() < .5 ? 0 : 100); return mc(`اشتريت لعبة بـ ${p} ليرة ودفعت ${paid} ليرة. كم الباقي؟`, (paid - p) + ' ليرة', [(paid - p + 25) + ' ليرة', (paid - p - 25 < 0 ? paid - p + 50 : paid - p - 25) + ' ليرة', (paid + p) + ' ليرة'], { m: true }) };
MATHG.weight = g => { const n = ri(2, 9); return mc(`${n} كغ = ؟ غرام`, (n * 1000) + ' غ', [(n * 100) + ' غ', (n * 10) + ' غ', (n * 10000) + ' غ'], { m: true }) };
MATHG.angles2 = g => { const a = 10 * ri(2, 8), b = 10 * ri(2, 17 - a / 10); return mc(`مثلث فيه زاويتان ${a}° و${b}°. ما الزاوية الثالثة؟`, (180 - a - b) + '°', [(190 - a - b) + '°', (170 - a - b) + '°', (360 - a - b) + '°'], { m: true }) };
MATHG.word = g => { const a = ri(5, 20 * g), b = ri(2, 10 * g), e = pick([[`مع سامر ${a} بطاقة وأعطاه صديقه ${b}. كم صار معه؟`, a + b], [`في الصف ${a + b} طالباً، خرج ${b}. كم بقي؟`, a], [`في كل علبة ${Math.min(b, 12)} أقلام. كم قلماً في ${Math.min(a, 9)} علب؟`, Math.min(b, 12) * Math.min(a, 9)]]); return mN(e[0], e[1], Math.max(2, Math.round(e[1] / 10))) };
/* الربط بالدروس حسب الكلمات في العنوان */
const SCI_RULES = [[/حواس|الحواس/, ['senses']], [/جسم|الهيكل|العظم|الهضم|التنفس|الدوران|المناعة|الجهاز/, ['organ']], [/حيوان|تصنيف|الحشرات|دورة حياة|تكيّف|الكائن|الكائنات/, ['animalClass', 'animalFood', 'animalCover', 'animalBirth', 'living']], [/المادة|حالات|التبخر|رحلة المواد/, ['matter']], [/الكهرباء/, ['conduct']], [/الشمسية|الفضاء|الشمس والقمر/, ['planet']], [/التغيّرات|التغيرات|الكيميائية|الفيزيائية/, ['change']], [/الطاقة|طاقة/, ['energy']], [/الفصول|الطقس/, ['seasons']], [/النبات|نبتتي/, ['living']]];
const ISL_RULES = [[/الصلاة|سنن الصلاة|صلاة/, ['rakaat']], [/الكتب السماوية|الرسل/, ['books']], [/أركان الإسلام/, ['pillars']], [/أركان الإيمان|الملائكة|الإيمان/, ['iman']], [/أسماء الله|خالقي/, ['names']], [/سورة/, ['surahNext', 'surahCount']], [/الحديث|الكلمة الطيبة|الرحمة|حسن الخلق|إماطة|المسلم من/, ['hadith', 'akhlaq']], [/السيرة|نبي|بعثة|الهجرة|غزوة|فتح|صلح|طفولة/, ['sira']], [/الأخلاق|الصدق|الأمانة|التعاون|بر الوالدين|الوفاء|احترام|آداب/, ['akhlaq']], [/الوضوء/, ['wudu']], [/الزكاة|الحج|الصيام/, ['pillars']]];
const MATH_EXTRA = { shapes: ['shapes2', 'solids'], angles: ['angles2'], time: ['timecalc'], money: ['money2'], length: ['weight'] };
for (const g in CUR) {
  (CUR[g].sci || []).forEach(l => { const fx = []; SCI_RULES.forEach(([re, ks]) => { if (re.test(l.t) || re.test(l.unit || '')) ks.forEach(k => fx.push(SCIG[k])) }); if (!fx.length) fx.push(SCIG.living, SCIG.matter); l.fx = (l.fx || []).concat(fx) });
  (CUR[g].isl || []).forEach(l => { const fx = []; ISL_RULES.forEach(([re, ks]) => { if (re.test(l.t) || re.test(l.unit || '')) ks.forEach(k => fx.push(ISLG[k])) }); if (!fx.length) fx.push(ISLG.akhlaq, ISLG.pillars); l.fx = (l.fx || []).concat(fx) });
  (CUR[g].math || []).forEach(l => { const extra = []; (l.gen || []).forEach(k => (MATH_EXTRA[k] || []).forEach(x => extra.push(x))); if (+g >= 2) extra.push('word'); l.gen = (l.gen || []).concat(extra) });
}

})();