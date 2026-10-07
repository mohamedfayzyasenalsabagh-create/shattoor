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