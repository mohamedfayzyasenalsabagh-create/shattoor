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
CUR[1].ar = [
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
];
CUR[2] = CUR[2] || {};
CUR[2].ar = [
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
];

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
