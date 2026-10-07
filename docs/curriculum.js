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