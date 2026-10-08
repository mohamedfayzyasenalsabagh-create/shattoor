/* ================== حروفي: تتبّع الحروف ونطقها (الصف ١–٢) ================== */
(function(){
'use strict';

/* ---------- البيانات ---------- */
const AR_L=['أ','ب','ت','ث','ج','ح','خ','د','ذ','ر','ز','س','ش','ص','ض','ط','ظ','ع','غ','ف','ق','ك','ل','م','ن','ه','و','ي'];
const AR_NAME={'أ':'ألف','ب':'باء','ت':'تاء','ث':'ثاء','ج':'جيم','ح':'حاء','خ':'خاء','د':'دال','ذ':'ذال','ر':'راء','ز':'زاي','س':'سين','ش':'شين','ص':'صاد','ض':'ضاد','ط':'طاء','ظ':'ظاء','ع':'عين','غ':'غين','ف':'فاء','ق':'قاف','ك':'كاف','ل':'لام','م':'ميم','ن':'نون','ه':'هاء','و':'واو','ي':'ياء'};
const NON_CONN='اأدذرزو';
const AR_EX={'أ':['أرنب','🐰'],'ب':['بطة','🦆'],'ت':['تفاحة','🍎'],'ث':['ثعلب','🦊'],'ج':['جمل','🐫'],'ح':['حصان','🐴'],'خ':['خروف','🐑'],'د':['دب','🐻'],'ذ':['ذرة','🌽'],'ر':['رمان','🍎'],'ز':['زرافة','🦒'],'س':['سمكة','🐟'],'ش':['شمس','☀️'],'ص':['صقر','🦅'],'ض':['ضفدع','🐸'],'ط':['طائرة','✈️'],'ظ':['ظرف','✉️'],'ع':['عنب','🍇'],'غ':['غيمة','☁️'],'ف':['فيل','🐘'],'ق':['قمر','🌙'],'ك':['كتاب','📖'],'ل':['ليمون','🍋'],'م':['موز','🍌'],'ن':['نحلة','🐝'],'ه':['هدية','🎁'],'و':['وردة','🌹'],'ي':['يد','✋']};
const EN_L='ABCDEFGHIJKLMNOPQRSTUVWXYZ'.split('');
const EN_EX={A:['apple','🍎'],B:['ball','⚽'],C:['cat','🐱'],D:['dog','🐶'],E:['egg','🥚'],F:['fish','🐟'],G:['grapes','🍇'],H:['hat','🎩'],I:['ice cream','🍦'],J:['juice','🧃'],K:['kite','🪁'],L:['lion','🦁'],M:['moon','🌙'],N:['nose','👃'],O:['orange','🍊'],P:['pig','🐷'],Q:['queen','👑'],R:['rabbit','🐰'],S:['sun','☀️'],T:['tree','🌳'],U:['umbrella','☂️'],V:['van','🚐'],W:['watch','⌚'],X:['box','📦'],Y:['yo-yo','🪀'],Z:['zebra','🦓']};
const FREE=3, BRUSH=.09, REWARD=5;
// عتبات مضبوطة باختبارات Playwright اصطناعية: نقاط على الحرف=٣، خربشة عشوائية=٠–١، تلوين كل اللوحة≤٢
const TH={c3:.7,c2:.55,c1:.3,out1:.35,out2:.6};

let TAB='ar';
const list=lang=>lang==='en'?EN_L:AR_L;
const locked=(lang,L)=>list(lang).indexOf(L)>=FREE&&!hasAccess();
const starsOf=L=>(S&&S.lt&&S.lt[L])||0;
function exampleOf(L,lang){
  if(lang==='en')return EN_EX[L];
  const w=(typeof WORDS!=='undefined'?WORDS:[]).find(x=>x[0][0]===L);
  return w||AR_EX[L];
}
function formsOf(L){
  const T='ـ';
  return NON_CONN.includes(L)?[['منفصل',L],['متّصل بآخر الكلمة',T+L]]
    :[['منفصل',L],['أول الكلمة',L+T],['وسط الكلمة',T+L+T],['آخر الكلمة',T+L]];
}
function vowelsOf(L){
  if(L==='أ')return ['أَ','أُ','إِ'];
  return [L+'َ',L+'ُ',L+'ِ'];
}
const starRow=(n,cls)=>`<span class="lt-stars ${cls||''}">${[1,2,3].map(i=>`<i class="${i<=n?'on':''}">${ICON('star')}</i>`).join('')}</span>`;

/* ---------- CSS ---------- */
const css=document.createElement('style');
css.textContent=`
.lt-hero{position:relative;display:flex;align-items:center;gap:12px;background:linear-gradient(135deg,#0E7C77,#0B6A66 60%,#095755);color:#fff;border-radius:24px;padding:14px 16px;overflow:hidden;box-shadow:0 10px 24px -14px #0e7c77aa}
.lt-hero::before{content:"";position:absolute;inset-inline-end:-40px;top:-60px;width:170px;height:170px;border-radius:50%;background:radial-gradient(circle,#ffffff2a,transparent 70%)}
.lt-hero .mascot{width:70px;height:72px;flex:none;filter:drop-shadow(0 4px 8px #0004)}
.lt-hero b{font-family:var(--display);font-weight:400;font-size:1.35rem;display:block;line-height:1.3}
.lt-hero small{opacity:.9;font-size:.88rem}
.lt-hst{margin-top:4px;font-weight:700}.lt-hst span{display:inline-flex;align-items:center;gap:4px}.lt-hst .ic{width:16px;height:16px;fill:var(--sun);stroke:none}.lt-hst svg:not(.ic){width:18px;height:18px}
.lt-bar{height:10px;background:#ffffff33;border-radius:999px;overflow:hidden;margin-top:6px}
.lt-bar i{display:block;height:100%;background:linear-gradient(90deg,#FFC83D,#FFB020);border-radius:999px}
.lt-grid{display:grid;grid-template-columns:repeat(4,minmax(0,1fr));gap:10px}
.lt-tile{position:relative;aspect-ratio:1/1.12;background:var(--card);border:1.5px solid var(--line);border-radius:20px;box-shadow:0 4px 0 var(--line);display:flex;flex-direction:column;align-items:center;justify-content:center;gap:2px;padding:4px}
.lt-tile:active{transform:translateY(3px);box-shadow:0 1px 0 var(--line)}
.lt-tile .g{font-family:'Tajawal',var(--body);font-weight:800;font-size:2.3rem;line-height:1;color:var(--teal)}
.lt-tile.en .g{font-family:system-ui,-apple-system,'Segoe UI',Roboto,sans-serif;font-size:2rem;color:#7E4FD0;direction:ltr}
.lt-tile.en .g small{font-size:.62em;opacity:.7}
.lt-tile.full{background:#FFF8E1;border-color:#F3D27A;box-shadow:0 4px 0 #F3D27A}
.lt-tile.lock{background:#EEF4F3}
.lt-tile.lock .g{color:#9DB3B8}
.lt-tile .lk{position:absolute;top:5px;inset-inline-end:5px;width:22px;height:22px;border-radius:8px;opacity:.85;background:var(--ink);color:#fff;display:grid;place-items:center}
.lt-tile .lk .ic{width:14px;height:14px}
.lt-stars{display:inline-flex;gap:1px}
.lt-stars i{color:var(--line);display:grid}
.lt-stars i.on{color:#FFB020}
.lt-stars .ic{width:14px;height:14px;fill:currentColor;stroke:none}
.lt-stars.md .ic{width:20px;height:20px}
.lt-lockmsg{display:flex;align-items:center;gap:10px;background:#FFF1D6;border-radius:16px;padding:10px 12px;font-size:.92rem;font-weight:700;color:#7A4A06}
.lt-lockmsg .btn{margin-inline-start:auto}
.lt-card{background:var(--card);border:1.5px solid var(--line);border-radius:24px;padding:14px;display:flex;flex-direction:column;gap:12px;box-shadow:0 4px 0 var(--line)}
.lt-top{display:flex;align-items:center;gap:14px}
.lt-big{width:96px;height:96px;flex:none;border-radius:24px;background:linear-gradient(160deg,#E5F5F3,#CFEBE7);display:grid;place-items:center;font-family:'Tajawal',var(--body);font-weight:800;font-size:3.6rem;line-height:1;color:var(--teal);box-shadow:inset 0 -5px 0 #0001}
.lt-big.en{background:linear-gradient(160deg,#F1EAFB,#E3D6F7);color:#7E4FD0;font-family:system-ui,-apple-system,'Segoe UI',Roboto,sans-serif;font-size:3rem;direction:ltr}
.lt-big.en small{font-size:.6em;opacity:.75}
.lt-name{flex:1;min-width:0;display:flex;flex-direction:column;gap:4px}
.lt-name b{font-family:var(--display);font-weight:400;font-size:1.9rem;line-height:1.2}
.lt-name .row{gap:6px}
.lt-say{display:inline-flex;align-items:center;gap:6px;min-height:44px;padding:6px 12px;border-radius:14px;background:#DFF1EF;color:var(--teal-d);font-weight:800;font-size:.95rem}
.lt-say:active{transform:translateY(2px)}
.lt-say.sun{background:#FFF1D6;color:#7A4A06}
.lt-forms{display:grid;grid-template-columns:repeat(var(--n),minmax(0,1fr));gap:8px}
.lt-forms>div{background:var(--ground);border-radius:16px;padding:8px 4px 6px;display:flex;flex-direction:column;align-items:center;gap:0}
.lt-forms b{font-family:'Tajawal',var(--body);font-weight:800;font-size:2.1rem;line-height:1.35;color:var(--ink)}
.lt-forms small{font-size:.72rem;color:var(--muted);font-weight:700;text-align:center;line-height:1.3}
.lt-ex{display:flex;align-items:center;gap:12px;background:#FFF8E1;border:1.5px dashed #F3D27A;border-radius:18px;padding:8px 12px}
.lt-ex .em{font-size:2.4rem;line-height:1}
.lt-ex .w{flex:1;min-width:0;font-weight:800;font-size:1.5rem}
.lt-ex .w mark{background:none;color:var(--pom)}
.lt-ex.en .w{direction:ltr;text-align:left;font-family:system-ui,-apple-system,'Segoe UI',Roboto,sans-serif}
.lt-trace{align-items:center}
.lt-trace h3{align-self:stretch;display:flex;justify-content:space-between;align-items:center}
.lt-pad{position:relative;border-radius:22px;background:#FFFDF6;border:2px solid #F3D27A;box-shadow:inset 0 0 0 6px #FFF6DA;overflow:hidden;touch-action:none}
.lt-pad canvas{position:absolute;inset:0;display:block;touch-action:none}
.lt-pad .hint{position:absolute;inset-inline:0;bottom:8px;text-align:center;font-size:.8rem;font-weight:700;color:#B79A4C;pointer-events:none;transition:opacity .3s}
.lt-btns{display:grid;grid-template-columns:1fr 1.4fr;gap:10px;align-self:stretch}
.lt-case{display:inline-flex;background:var(--ground);border-radius:12px;padding:3px;gap:2px;direction:ltr}
.lt-case button{min-width:44px;min-height:36px;border-radius:10px;font-weight:800;color:var(--muted);font-family:system-ui,sans-serif;font-size:1.05rem}
.lt-case button.on{background:#7E4FD0;color:#fff}
.lt-res{display:flex;flex-direction:column;align-items:center;gap:10px;text-align:center;padding:4px 0}
.lt-res h2{font-size:1.6rem}
.lt-gain{display:inline-flex;align-items:center;gap:6px;background:#FFF1D6;color:#7A4A06;border-radius:999px;padding:4px 14px;font-weight:800}
.lt-gain .jas{width:22px;height:22px}
.lt-res .bigstars{display:flex;gap:6px;justify-content:center}
.lt-res .bigstars i{color:var(--line);display:grid;animation:ltpop .45s cubic-bezier(.3,1.6,.5,1) both;animation-delay:var(--d)}
.lt-res .bigstars i.on{color:#FFB020;filter:drop-shadow(0 3px 0 #C99410)}
.lt-res .bigstars .ic{width:52px;height:52px;fill:currentColor;stroke:none}
@keyframes ltpop{from{transform:scale(.2) rotate(-30deg);opacity:0}to{transform:none;opacity:1}}
@media (prefers-reduced-motion:reduce){.lt-res .bigstars i{animation:none}}
.lt-res .acts{display:flex;flex-direction:column;gap:10px;width:100%}
.lt-nav{display:flex;justify-content:space-between;gap:10px}
.lt-nav .btn{flex:1}
.lt-msg{background:#FCE0E5;color:#8A1C2E;border-radius:14px;padding:8px 12px;font-weight:700;font-size:.92rem;text-align:center;align-self:stretch}
`;
document.head.appendChild(css);

/* ---------- القائمة ---------- */
function viewLetters(){
  if(!APP.child)return go('kids');
  if(ui.ltLang)TAB=ui.ltLang;
  const lang=TAB,L=list(lang),acc=hasAccess();
  const got=L.reduce((a,x)=>a+starsOf(x),0),max=L.length*3;
  const tile=x=>{
    const lk=locked(lang,x),n=starsOf(x);
    const g=lang==='en'?`${x}<small>${x.toLowerCase()}</small>`:x;
    return `<button class="lt-tile ${lang} ${lk?'lock':''} ${n===3?'full':''}" data-act="lt_open" data-l="${x}" data-lang="${lang}" aria-label="${lang==='en'?x:AR_NAME[x]}${lk?' (مقفول)':''}">
      ${lk?`<span class="lk">${ICON('lock')}</span>`:''}<span class="g">${g}</span>${starRow(n)}</button>`;
  };
  V.innerHTML=`${back('home','✍️ حروفي')}
  <div class="tabs"><button data-act="lt_tab" data-lang="ar" class="${lang==='ar'?'on':''}">الحروف العربية</button><button data-act="lt_tab" data-lang="en" class="${lang==='en'?'on':''}" style="direction:ltr">English A–Z</button></div>
  <section class="lt-hero">${MASCOT(got>=max/2?'wow':'happy','mascot')}
    <div style="flex:1;min-width:0;position:relative"><b>${lang==='en'?'اكتب الحروف الإنجليزية':'اكتب واسمع الحروف'}</b>
      <small>امشِ بإصبعك فوق الحرف وجمّع النجوم</small>
      <div class="row between small lt-hst"><span>${ICON('star')} ${ar(got)} من ${ar(max)}</span><span>كل نجمة = ${ar(REWARD)} ${JAS()}</span></div>
      <div class="lt-bar"><i style="width:${Math.max(3,Math.round(100*got/max))}%"></i></div></div></section>
  ${acc?'':`<div class="lt-lockmsg">${ICON('lock')}<span>أول ${ar(FREE)} حروف مجانية</span><button class="btn sun sm" data-act="go" data-v="sub">اشترك</button></div>`}
  <div class="lt-grid">${L.map(tile).join('')}</div>
  ${tabbar('home')}`;
}

/* ---------- تخطيط الحرف على اللوحة ---------- */
function fontFor(lang,px){return lang==='en'?`bold ${px}px system-ui,-apple-system,'Segoe UI',Roboto,Arial,sans-serif`:`800 ${px}px 'Tajawal'`}
function layout(ctx,glyph,lang,size){
  ctx.direction='ltr';ctx.textAlign='left';ctx.textBaseline='alphabetic';
  ctx.font=fontFor(lang,100);let m=ctx.measureText(glyph);
  const w=Math.max(1,m.actualBoundingBoxLeft+m.actualBoundingBoxRight),h=Math.max(1,m.actualBoundingBoxAscent+m.actualBoundingBoxDescent);
  const px=Math.min(100*size*.68/w,100*size*.70/h,size*1.15);
  ctx.font=fontFor(lang,px);m=ctx.measureText(glyph);
  const x=size/2+(m.actualBoundingBoxLeft-m.actualBoundingBoxRight)/2;
  const y=size/2+(m.actualBoundingBoxAscent-m.actualBoundingBoxDescent)/2;
  return {font:ctx.font,x,y,px};
}
function drawGuide(cv,glyph,lang,size){
  const dpr=window.devicePixelRatio||1,ctx=cv.getContext('2d');
  ctx.setTransform(dpr,0,0,dpr,0,0);ctx.clearRect(0,0,size,size);
  // شبكة خفيفة وخط أساس
  ctx.save();ctx.strokeStyle='#F3E3B0';ctx.lineWidth=1.5;ctx.setLineDash([6,8]);
  ctx.beginPath();ctx.moveTo(size/2,10);ctx.lineTo(size/2,size-10);ctx.moveTo(10,size/2);ctx.lineTo(size-10,size/2);ctx.stroke();ctx.restore();
  const lay=layout(ctx,glyph,lang,size);
  ctx.font=lay.font;ctx.direction='ltr';ctx.textAlign='left';ctx.textBaseline='alphabetic';
  ctx.fillStyle='rgba(14,124,119,.13)';ctx.fillText(glyph,lay.x,lay.y);
  ctx.save();ctx.setLineDash([2,Math.max(5,size*.022)]);ctx.lineCap='round';ctx.lineJoin='round';
  ctx.lineWidth=Math.max(2.5,size*.011);ctx.strokeStyle='rgba(14,124,119,.55)';ctx.strokeText(glyph,lay.x,lay.y);ctx.restore();
}

/* ---------- التقييم ---------- */
function score(glyph,lang,size,strokes){
  size=Math.round(size);
  const mk=()=>{const c=document.createElement('canvas');c.width=c.height=size;const x=c.getContext('2d',{willReadFrequently:true});return [c,x]};
  const [,mx]=mk(),[,dx]=mk(),[,ix]=mk();
  const lay=layout(mx,glyph,lang,size);
  for(const x of [mx,dx]){x.font=lay.font;x.direction='ltr';x.textAlign='left';x.textBaseline='alphabetic';x.fillStyle='#000';x.fillText(glyph,lay.x,lay.y)}
  dx.lineJoin='round';dx.lineCap='round';dx.strokeStyle='#000';dx.lineWidth=size*.13;dx.strokeText(glyph,lay.x,lay.y);
  const bw=size*BRUSH;
  ix.fillStyle=ix.strokeStyle='#000';ix.lineWidth=bw;ix.lineCap='round';ix.lineJoin='round';
  for(const s of strokes){
    if(!s.length)continue;
    if(s.length===1){ix.beginPath();ix.arc(s[0][0]*size,s[0][1]*size,bw/2,0,Math.PI*2);ix.fill();continue}
    ix.beginPath();ix.moveTo(s[0][0]*size,s[0][1]*size);for(let i=1;i<s.length;i++)ix.lineTo(s[i][0]*size,s[i][1]*size);ix.stroke();
  }
  const M=mx.getImageData(0,0,size,size).data,D=dx.getImageData(0,0,size,size).data,I=ix.getImageData(0,0,size,size).data;
  let m=0,mc=0,ink=0,out=0;
  for(let i=3;i<M.length;i+=4){
    const isM=M[i]>127,isI=I[i]>127;
    if(isM){m++;if(isI)mc++}
    if(isI){ink++;if(D[i]<=127)out++}
  }
  const coverage=m?mc/m:0,outside=ink?out/ink:0;
  let stars=coverage>=TH.c3?3:coverage>=TH.c2?2:coverage>=TH.c1?1:0;
  stars=Math.max(0,stars-(outside>TH.out1?1:0)-(outside>TH.out2?1:0));
  return {coverage,outside,stars};
}

/* ---------- شاشة الحرف ---------- */
function curGlyph(){return ui.ltLang==='en'&&ui.ltCase==='lo'?ui.ltL.toLowerCase():ui.ltL}
function viewLetter(){
  if(!APP.child)return go('kids');
  const lang=ui.ltLang==='en'?'en':'ar',L=ui.ltL;
  if(!L||!list(lang).includes(L))return go('letters');
  if(locked(lang,L))return go('sub');
  TAB=lang;ui.ltStrokes=ui.ltStrokes||[];
  const ex=exampleOf(L,lang),n=starsOf(L),idx=list(lang).indexOf(L);
  const title=lang==='en'?`حرف ${L}`:`حرف ال${AR_NAME[L]}`;
  let top;
  if(lang==='ar'){
    const f=formsOf(L),w=ex[0];
    top=`<div class="lt-top"><div class="lt-big" aria-hidden="true">${L}</div>
      <div class="lt-name"><b>${AR_NAME[L]}</b>${starRow(n,'md')}
      <div class="row"><button class="lt-say" data-act="lt_say" data-k="name">🔊 اسمه</button><button class="lt-say sun" data-act="lt_say" data-k="vow">🔊 ${vowelsOf(L).join(' ')}</button></div></div></div>
      <div class="lt-forms" style="--n:${f.length}">${f.map(([t,g])=>`<div><b>${g}</b><small>${t}</small></div>`).join('')}</div>
      <div class="lt-ex"><span class="em">${ex[1]}</span><span class="w"><mark>${esc(w[0])}</mark>${esc(w.slice(1))}</span><button class="lt-say" data-act="lt_say" data-k="word">🔊 الكلمة</button></div>`;
  }else{
    const w=ex[0];
    top=`<div class="lt-top"><div class="lt-big en" aria-hidden="true">${L}<small>${L.toLowerCase()}</small></div>
      <div class="lt-name"><b style="direction:ltr;text-align:right">${L} ${L.toLowerCase()}</b>${starRow(n,'md')}
      <div class="row"><button class="lt-say" data-act="lt_say" data-k="name">🔊 ${L}</button><button class="lt-say sun" data-act="lt_say" data-k="word" style="direction:ltr">🔊 ${L.toLowerCase()} for ${esc(w)}</button></div></div></div>
      <div class="lt-ex en"><span class="em">${ex[1]}</span><span class="w">${w.toLowerCase().startsWith(L.toLowerCase())?`<mark>${esc(w[0])}</mark>${esc(w.slice(1))}`:esc(w).replace(L.toLowerCase(),`<mark>${L.toLowerCase()}</mark>`)}</span></div>`;
  }
  const nextL=list(lang)[idx+1];
  V.innerHTML=`${back('letters',title)}
  <section class="lt-card">${top}</section>
  <section class="lt-card lt-trace" id="ltTrace">${ui.ltRes?resultHTML():traceHTML(lang)}</section>
  <div class="lt-nav">
    ${idx>0?`<button class="btn ghost" data-act="lt_go" data-l="${list(lang)[idx-1]}">→ ${lang==='en'?list(lang)[idx-1]:list(lang)[idx-1]}</button>`:'<span style="flex:1"></span>'}
    ${nextL?`<button class="btn ghost" data-act="lt_go" data-l="${nextL}">${locked(lang,nextL)?ICON('lock')+' ':''}${nextL} ←</button>`:'<span style="flex:1"></span>'}
  </div>
  ${tabbar('home')}`;
  if(!ui.ltRes)setupPad();
  if(!ui.ltSpoke&&typeof autoRead==='function'&&autoRead()){ui.ltSpoke=1;sayName()}
}
function traceHTML(lang){
  const sz=padSize();
  return `<h3><span>✍️ امشِ فوق الحرف</span>${lang==='en'?`<span class="lt-case"><button data-act="lt_case" data-c="up" class="${ui.ltCase!=='lo'?'on':''}">${ui.ltL}</button><button data-act="lt_case" data-c="lo" class="${ui.ltCase==='lo'?'on':''}">${ui.ltL.toLowerCase()}</button></span>`:''}</h3>
    <div class="lt-pad" id="ltPad" style="width:${sz}px;height:${sz}px"><canvas id="ltGuide"></canvas><canvas id="ltInk" aria-label="لوحة الكتابة"></canvas><span class="hint" id="ltHint">ابدأ من أي مكان وغطِّ الحرف كله</span></div>
    ${ui.ltMsg?`<div class="lt-msg">${ui.ltMsg}</div>`:''}
    <div class="lt-btns"><button class="btn ghost" data-act="lt_clear">🧽 امسح</button><button class="btn teal" data-act="lt_check">${ICON('check')} تحقّق</button></div>`;
}
function padSize(){
  const w=Math.min(window.innerWidth||390,520);
  return Math.max(200,Math.floor(Math.min(w-32-32,360)));
}
function resultHTML(){
  const r=ui.ltRes,lang=ui.ltLang,idx=list(lang).indexOf(ui.ltL),nextL=list(lang)[idx+1];
  const msg=['ولا يهمك! امشِ فوق الحرف المنقّط','منيح! جرّب تغطّي الحرف أكتر','شغل حلو! قرّبت كتير','برافو عليك! خطّك بيجنّن 🌟'][r.stars];
  return `<div class="lt-res">${MASCOT(r.stars>=2?'wow':'sad','mascot')}
    <div class="bigstars">${[1,2,3].map(k=>`<i class="${k<=r.stars?'on':''}" style="--d:${k*0.18}s">${ICON('star')}</i>`).join('')}</div>
    <h2>${msg}</h2>
    ${r.gain?`<span class="lt-gain">${JAS()} +${ar(r.gain)} نقطة</span>`:r.best>r.stars?`<span class="muted small">أحسن نتيجة إلك: ${ar(r.best)} نجوم</span>`:''}
    <div class="acts">
      ${nextL?`<button class="btn sun big wide" data-act="lt_go" data-l="${nextL}">${locked(lang,nextL)?ICON('lock')+' ':''}الحرف التالي ←</button>`:`<button class="btn sun big wide" data-act="go" data-v="letters">خلّصت كل الحروف! 🎉</button>`}
      <button class="btn ghost wide" data-act="lt_retry">↻ جرّب مرة تانية</button>
    </div></div>`;
}

/* ---------- لوحة الرسم ---------- */
function setupPad(){
  const pad=document.getElementById('ltPad');if(!pad)return;
  const g=document.getElementById('ltGuide'),ink=document.getElementById('ltInk'),hint=document.getElementById('ltHint');
  const size=parseFloat(pad.style.width),dpr=window.devicePixelRatio||1,lang=ui.ltLang,glyph=curGlyph();
  for(const c of [g,ink]){c.width=Math.round(size*dpr);c.height=Math.round(size*dpr);c.style.width=c.style.height=size+'px'}
  const ctx=ink.getContext('2d');ctx.setTransform(dpr,0,0,dpr,0,0);ctx.lineCap='round';ctx.lineJoin='round';
  const bw=size*BRUSH;
  const fontsReady=document.fonts&&document.fonts.ready?Promise.all([document.fonts.ready,lang==='ar'?document.fonts.load(`800 80px 'Tajawal'`,glyph).catch(()=>{}):null]):Promise.resolve();
  const draw=()=>{if(document.getElementById('ltGuide')===g)drawGuide(g,glyph,lang,size)};
  draw();fontsReady.then(draw);
  let hue=Math.random()*360,cur=null,last=null;
  const pt=e=>{const r=ink.getBoundingClientRect();return [(e.clientX-r.left)/r.width,(e.clientY-r.top)/r.height]};
  const seg=(a,b)=>{
    hue=(hue+Math.hypot(b[0]-a[0],b[1]-a[1])*size*.9)%360;
    ctx.strokeStyle=`hsl(${hue},88%,52%)`;ctx.lineWidth=bw;
    ctx.beginPath();ctx.moveTo(a[0]*size,a[1]*size);ctx.lineTo(b[0]*size,b[1]*size);ctx.stroke();
  };
  const dot=p=>{ctx.fillStyle=`hsl(${hue},88%,52%)`;ctx.beginPath();ctx.arc(p[0]*size,p[1]*size,bw/2,0,Math.PI*2);ctx.fill()};
  // إعادة رسم الخطوط المحفوظة (مثلاً بعد تبديل الحالة)
  for(const s of ui.ltStrokes){dot(s[0]);for(let i=1;i<s.length;i++)seg(s[i-1],s[i])}
  if(ui.ltStrokes.length)hint.style.opacity=0;
  ink.addEventListener('pointerdown',e=>{
    e.preventDefault();try{ink.setPointerCapture(e.pointerId)}catch(_){}
    const p=pt(e);cur=[p];ui.ltStrokes.push(cur);last=p;dot(p);hint.style.opacity=0;
  });
  ink.addEventListener('pointermove',e=>{
    if(!cur)return;e.preventDefault();
    const evs=e.getCoalescedEvents?e.getCoalescedEvents():[];
    for(const ev of (evs.length?evs:[e])){const p=pt(ev);if(Math.hypot(p[0]-last[0],p[1]-last[1])*size<1.5)continue;seg(last,p);cur.push(p);last=p}
  });
  const end=()=>{cur=null;last=null};
  ink.addEventListener('pointerup',end);ink.addEventListener('pointercancel',end);ink.addEventListener('lostpointercapture',end);
}

/* ---------- الصوت ---------- */
function sayName(){
  if(ui.ltLang==='en')speak(ui.ltL,'en');else speak(AR_NAME[ui.ltL],'ar');
}
function say(k){
  const L=ui.ltL,lang=ui.ltLang,ex=exampleOf(L,lang);
  if(k==='name')return sayName();
  if(lang==='en'){speak(`${L}. ${L.toLowerCase()} for ${ex[0]}`,'en');return}
  if(k==='vow')speak(vowelsOf(L).join('، '),'ar');
  else if(k==='word')speak(ex[0],'ar');
}

/* ---------- التحقق والمكافأة ---------- */
function check(){
  const pad=document.getElementById('ltPad');if(!pad)return;
  const strokes=ui.ltStrokes||[];
  if(!strokes.length){ui.ltMsg='ارسم فوق الحرف أول، وبعدين اكبس تحقّق 😊';tone(false);return rerender()}
  const r=score(curGlyph(),ui.ltLang,parseFloat(pad.style.width),strokes);
  S.lt=S.lt||{};
  const prev=S.lt[ui.ltL]||0,gain=Math.max(0,r.stars-prev)*REWARD;
  if(r.stars>prev){S.lt[ui.ltL]=r.stars;S.jas=(S.jas||0)+gain}
  save();if(gain&&typeof syncSummary==='function')syncSummary();
  ui.ltRes={...r,gain,best:Math.max(prev,r.stars)};ui.ltMsg=null;
  tone(r.stars>=2);if(r.stars===3)confetti();
  rerender();
  const el=document.getElementById('ltTrace');if(el&&el.scrollIntoView)el.scrollIntoView({block:'center',behavior:'smooth'});
}
function rerender(){const y=window.scrollY;viewLetter();window.scrollTo(0,y)}
function openLetter(L,lang){
  if(locked(lang,L))return go('sub');
  ui.keep={ltL:L,ltLang:lang};go('letter');
}

/* ---------- النقرات ---------- */
document.addEventListener('click',e=>{
  const b=e.target.closest('[data-act^="lt_"]');if(!b||b.disabled)return;
  const a=b.dataset.act;
  if(a==='lt_tab'){TAB=b.dataset.lang;ui.ltLang=TAB;viewLetters()}
  else if(a==='lt_open')openLetter(b.dataset.l,b.dataset.lang);
  else if(a==='lt_go')openLetter(b.dataset.l,ui.ltLang);
  else if(a==='lt_say')say(b.dataset.k);
  else if(a==='lt_clear'){ui.ltStrokes=[];ui.ltMsg=null;rerender()}
  else if(a==='lt_check')check();
  else if(a==='lt_retry'){ui.ltRes=null;ui.ltStrokes=[];rerender()}
  else if(a==='lt_case'){ui.ltCase=b.dataset.c;ui.ltStrokes=[];ui.ltMsg=null;rerender()}
});

/* ---------- التسجيل ---------- */
VIEWS.letters=viewLetters;
VIEWS.letter=viewLetter;
window.lettersCardHTML=function(){
  const tot=S&&S.lt?Object.values(S.lt).reduce((a,b)=>a+b,0):0;
  return `<button class="fcard" style="--c:var(--teal);width:100%;margin-top:10px" data-act="go" data-v="letters"><span class="sicon">✍️</span><b>✍️ حروفي — اكتب واسمع الحروف</b><small>${tot?`${ar(tot)} نجمة لحد هلّق · `:''}العربي والإنجليزي</small></button>`;
};
})();
