/* ================== تحدّي العيلة — مبارزة على موبايل واحد ================== */
(function(){
const st=document.createElement('style');
st.textContent=`
.du-wrap{display:flex;flex-direction:column;gap:14px;padding-bottom:96px}
.du-hero{display:flex;align-items:center;gap:12px;background:linear-gradient(135deg,var(--teal),#13A39B);color:#fff;border-radius:24px;padding:14px 16px;box-shadow:0 5px 0 var(--teal-d)}
.du-hero b{font-family:var(--display);font-size:1.5rem;font-weight:400;display:block}
.du-hero small{opacity:.9}
.du-vs{display:grid;grid-template-columns:1fr auto 1fr;align-items:center;gap:8px}
.du-pl{border-radius:20px;padding:12px 8px;display:flex;flex-direction:column;align-items:center;gap:4px;text-align:center;border:2px solid}
.du-pl.p0{background:#E1F4F2;border-color:var(--teal)}
.du-pl.p1{background:#FFF4D6;border-color:#E2AC1F}
.du-pl .du-av{font-size:2.3rem;line-height:1.1}
.du-pl b{font-size:1.05rem;max-width:100%;overflow:hidden;text-overflow:ellipsis;white-space:nowrap}
.du-pl small{color:var(--muted);font-size:.78rem}
.du-vsx{font-family:var(--display);font-size:1.6rem;color:var(--pom)}
.du-in{width:100%;border:2px solid #E2AC1F;border-radius:12px;padding:6px 8px;font:800 1rem var(--body);text-align:center;background:#fff;color:var(--ink)}
.du-chips{display:flex;flex-wrap:wrap;gap:6px;justify-content:center}
.du-chip{border:1.5px solid var(--line);background:var(--card);border-radius:999px;padding:6px 12px;font-weight:800;font-size:.95rem;min-height:38px}
.du-chip.on{background:var(--sun);border-color:#C99410;color:var(--ink)}
.du-lab{font-weight:800;font-size:1rem}
.du-subs{display:grid;grid-template-columns:repeat(3,1fr);gap:8px}
.du-sub{display:flex;flex-direction:column;align-items:center;gap:4px;padding:10px 4px;border-radius:16px;border:2px solid var(--line);background:var(--card);font-weight:800;font-size:.92rem;min-height:72px;box-shadow:0 3px 0 var(--line)}
.du-sub .ic{width:26px;height:26px;fill:var(--c)}
.du-sub.on{border-color:var(--c);background:color-mix(in srgb,var(--c) 14%,#fff);box-shadow:0 3px 0 var(--c)}
.du-sub .du-e{font-size:1.4rem;line-height:26px}
.du-len{display:grid;grid-template-columns:1fr 1fr;gap:8px}
.du-len button{border:2px solid var(--line);background:var(--card);border-radius:16px;padding:10px;font-weight:800;min-height:56px;box-shadow:0 3px 0 var(--line)}
.du-len button b{font-family:var(--display);font-weight:400;font-size:1.5rem;display:block;line-height:1.1}
.du-len button.on{border-color:var(--teal);background:#E1F4F2;box-shadow:0 3px 0 var(--teal)}
.du-hist{display:flex;justify-content:space-around;text-align:center;background:var(--card);border:1.5px dashed var(--line);border-radius:18px;padding:8px}
.du-hist b{font-family:var(--display);font-weight:400;font-size:1.4rem;display:block}
.du-hist small{color:var(--muted);font-size:.8rem}
.du-lock{text-align:center;align-items:center}
/* شاشة التسليم */
.du-hand{min-height:calc(100vh - 40px);display:flex;flex-direction:column;align-items:center;justify-content:center;gap:16px;text-align:center;border-radius:28px;padding:24px 18px;color:#fff}
.du-hand.p0{background:radial-gradient(circle at 50% 30%,#19A9A0,var(--teal) 70%)}
.du-hand.p1{background:radial-gradient(circle at 50% 30%,#FFD866,#F2B21F 70%);color:var(--ink)}
.du-hand .du-big{font-size:5rem;line-height:1;animation:du-bob 1.6s ease-in-out infinite}
.du-hand h1{font-family:var(--display);font-weight:400;font-size:2.3rem;margin:0}
.du-hand p{margin:0;font-weight:700;opacity:.9}
.du-go{font-family:var(--display);font-size:1.9rem;font-weight:400;border-radius:24px;padding:14px 46px;min-height:72px;background:#fff;color:var(--ink);box-shadow:0 6px 0 #0003}
.du-go:active{transform:translateY(4px);box-shadow:0 2px 0 #0003}
.du-hand>.row:first-child{margin-bottom:auto}.du-hand>:last-child{margin-bottom:auto}
.du-hand .x{color:var(--ink)}
.du-rd{background:#ffffff33;border-radius:999px;padding:4px 14px;font-weight:800}
@keyframes du-bob{50%{transform:translateY(-8px) rotate(-4deg)}}
/* السؤال */
.du-top{display:flex;align-items:center;gap:10px}
.du-tag{display:flex;align-items:center;gap:6px;border-radius:999px;padding:4px 12px 4px 8px;font-weight:800;color:#fff}
.du-tag.p0{background:var(--teal)}.du-tag.p1{background:var(--sun);color:var(--ink)}
.du-tag span{font-size:1.3rem}
.du-sp{flex:1}
.du-rn{font-weight:800;color:var(--muted)}
.du-tbar{height:16px;border-radius:999px;background:var(--line);overflow:hidden;position:relative}
.du-tbar i{position:absolute;inset:0 0 0 auto;width:100%;border-radius:999px;background:var(--leaf);transition:width .1s linear}
.du-tbar i.mid{background:var(--sun)}.du-tbar i.low{background:var(--pom)}
.du-secs{font-family:var(--display);font-size:1.5rem;min-width:34px;text-align:center}
.du-q{background:var(--card);border-radius:22px;padding:16px;border:2px solid var(--line);display:flex;flex-direction:column;gap:6px}
.du-q.p0{border-color:var(--teal)}.du-q.p1{border-color:#E2AC1F}
.du-q .pre{font-size:.95rem;color:var(--muted)}
.du-q .en{font-size:1.15rem;font-weight:700}
.du-wait{text-align:center;padding:30px 10px;display:flex;flex-direction:column;align-items:center;gap:10px}
.du-wait b{font-family:var(--display);font-weight:400;font-size:1.6rem}
.opt2.du-picked{border-color:var(--ink);box-shadow:0 4px 0 var(--ink);background:#EEF2F5}
/* الكشف */
.du-ans{background:#DDF2E4;border:2px solid var(--leaf);border-radius:18px;padding:12px 14px;font-weight:800;font-size:1.15rem;text-align:center}
.du-ans small{display:block;color:var(--muted);font-size:.85rem;font-weight:700}
.du-picks{display:grid;grid-template-columns:1fr 1fr;gap:10px}
.du-pk{border-radius:18px;padding:12px 10px;display:flex;flex-direction:column;align-items:center;gap:4px;text-align:center;border:2px solid}
.du-pk.p0{border-color:var(--teal);background:#E1F4F2}.du-pk.p1{border-color:#E2AC1F;background:#FFF4D6}
.du-pk .du-av{font-size:1.8rem}
.du-pk .du-ch{font-weight:800;font-size:1.05rem;word-break:break-word}
.du-pk .du-ok{font-weight:800;border-radius:999px;padding:2px 10px;font-size:.9rem}
.du-pk .du-ok.y{background:var(--leaf);color:#fff}.du-pk .du-ok.n{background:var(--pom);color:#fff}
.du-pts{font-family:var(--display);font-size:1.6rem;line-height:1}
.du-board{display:grid;grid-template-columns:1fr auto 1fr;align-items:center;gap:8px;background:var(--ink);color:#fff;border-radius:20px;padding:10px 14px}
.du-board .du-s{display:flex;flex-direction:column;align-items:center}
.du-board .du-s b{font-family:var(--display);font-weight:400;font-size:2rem;line-height:1}
.du-board .du-s.p0 b{color:#5FE0D6}.du-board .du-s.p1 b{color:var(--sun)}
.du-board .du-s small{opacity:.85;font-size:.8rem;max-width:120px;overflow:hidden;text-overflow:ellipsis;white-space:nowrap}
.du-board .du-m{font-weight:800;opacity:.7}
.du-lead{animation:du-pop .5s}
@keyframes du-pop{40%{transform:scale(1.18)}}
/* النهاية */
.du-end{text-align:center;align-items:center}
.du-end h1{font-family:var(--display);font-weight:400;font-size:2rem;margin:0}
.du-crown{font-size:3rem;line-height:1}
.du-end .du-board,.du-end .du-rank{width:100%;align-self:stretch}
.du-prize{background:#FFF4D6;border:2px solid #E2AC1F;border-radius:999px;padding:6px 16px;font-weight:800;display:inline-flex;align-items:center;gap:6px}
.du-prize svg{width:22px;height:22px}
.du-pl.p2,.du-pk.p2{background:#F1EAFE;border-color:#7A4FD1}.du-pl.p3,.du-pk.p3{background:#FCE4EA;border-color:#DD3F57}
.du-hand.p2{background:radial-gradient(circle at 50% 30%,#9B78E6,#7A4FD1 70%)}.du-hand.p3{background:radial-gradient(circle at 50% 30%,#F07A8A,#DD3F57 70%)}
.du-tag.p2{background:#7A4FD1}.du-tag.p3{background:#DD3F57}.du-q.p2{border-color:#7A4FD1}.du-q.p3{border-color:#DD3F57}
.du-plist{display:flex;flex-direction:column;gap:8px}
.du-prow{display:flex;align-items:center;gap:10px;border-radius:18px;padding:8px 10px;border:2px solid}
.du-prow .du-av{font-size:1.9rem;width:44px;text-align:center}
.du-prow .du-in{flex:1;border-color:transparent;background:#ffffffaa}
.du-prow .du-rm{width:36px;height:36px;border-radius:50%;border:0;background:#0001;font-size:1.1rem;font-weight:800}
.du-prow.p0{background:#E1F4F2;border-color:var(--teal)}.du-prow.p1{background:#FFF4D6;border-color:#E2AC1F}.du-prow.p2{background:#F1EAFE;border-color:#7A4FD1}.du-prow.p3{background:#FCE4EA;border-color:#DD3F57}
.du-add{border:2px dashed var(--line);background:transparent;border-radius:18px;padding:10px;font-weight:800;color:var(--muted)}
.du-rank{display:flex;flex-direction:column;gap:6px;background:var(--ink);color:#fff;border-radius:20px;padding:10px 12px}
.du-rank>div{display:flex;align-items:center;gap:10px}
.du-rank .m{width:30px;text-align:center;font-size:1.3rem}.du-rank .n{flex:1;font-weight:800;overflow:hidden;text-overflow:ellipsis;white-space:nowrap}
.du-rank b{font-family:var(--display);font-weight:400;font-size:1.6rem;line-height:1}
.du-rank .c0{color:#5FE0D6}.du-rank .c1{color:var(--sun)}.du-rank .c2{color:#C9B3FF}.du-rank .c3{color:#FF9DAC}
.du-podium{display:grid;grid-template-columns:1fr 1.15fr 1fr;align-items:end;gap:8px;width:100%}
.du-podium>div{display:flex;flex-direction:column;align-items:center;gap:4px}
.du-podium .col{width:100%;border-radius:14px 14px 6px 6px;color:#fff;font-family:var(--display);font-size:1.6rem;padding-top:4px}
.du-podium .av{font-size:2.2rem}.du-podium small{font-weight:800;max-width:100%;overflow:hidden;text-overflow:ellipsis;white-space:nowrap}
@media (prefers-reduced-motion:reduce){.du-hand .du-big,.du-lead{animation:none}}
`;
document.head.appendChild(st);

const P2CH=[['ماما','👩'],['بابا','👨'],['أخي','👦'],['أختي','👧']];
const SECS=10,MAXP=4;
const SET={ps:['ماما'],subj:'mix',n:6};
let D=null,TM=null;

function stopT(){if(TM){clearInterval(TM);TM=null}}
// تنظيف المؤقت عند أي تنقّل، ولو طلعنا من شاشة اللعب منلغي المباراة
if(typeof go==='function'){const _go=go;go=function(v,f){stopT();if(v!=='duelq')D=null;return _go(v,f)}}

const SIBS=()=>(APP.kids||[]).filter(k=>APP.child&&k.id!==APP.child.id).map(k=>[String(k.name||'').trim(),'🧒']).filter(x=>x[0]);
const CHIPS=()=>{const L=[['ماما','👩'],['بابا','👨']].concat(SIBS());return L.length>2?L:L.concat([['أخي','👦'],['أختي','👧']])};
const avOf=n=>(CHIPS().concat(P2CH).find(x=>x[0]===String(n).trim())||[0,'🙂'])[1];
window.duelWith=n=>{SET.ps=[n];SET._init=APP.child&&APP.child.id;if(S)S.duPs=[n];go('duel')};
const childAv=()=>{try{return typeof avatarOf==='function'?avatarOf():'🧒'}catch(e){return '🧒'}};
const hist=()=>{S.duel=S.duel||{w:0,l:0,t:0};return S.duel};
const SUBS=()=>Object.keys(SUBJ).filter(k=>['math','ar','sci','en','isl'].includes(k));
const MED=['🥇','🥈','🥉','4️⃣'];

function drawQs(subj,n){
  const out=[],seen=new Set(),g=APP.child.grade;
  for(let t=0;t<30&&out.length<n;t++){
    const s=subj==='mix'?pick(SUBS()):subj;let arr=[];
    try{arr=buildPractice(s,g)||[]}catch(e){arr=[]}
    arr.forEach(it=>{if(out.length>=n||!it||it.kind==='spell'||!Array.isArray(it.opts)||it.opts.length<2||!it.opts.includes(it.a))return;
      const k=it.s+'|'+it.q+'|'+it.a;if(seen.has(k))return;seen.add(k);out.push(it)});
  }
  return subj==='mix'?shuf(out):out;
}
function readNames(){V.querySelectorAll('.du-pin').forEach(inp=>{SET.ps[+inp.dataset.i]=inp.value})}

/* ---------- شاشة الإعداد ---------- */
function viewDuel(){
  if(!APP.child){go('kids');return}
  stopT();
  const h=hist(),c=APP.child;
  if(SET._init!==APP.child.id){SET._init=APP.child.id;if(Array.isArray(S.duPs)&&S.duPs.length)SET.ps=S.duPs.slice(0,MAXP-1);else if(S.duP2)SET.ps=[S.duP2]}
  if(!hasAccess()){
    V.innerHTML=`${back('home','تحدّي العيلة')}
    <div class="du-wrap"><section class="panel du-lock">${MASCOT('sad','mascot')}
      <b style="font-size:1.2rem">التحدّي مقفول ${ICON('lock')}</b>
      <p class="muted">تحدّي العيلة متاح مع الاشتراك. اطلب من ماما أو بابا يفعّلوا الاشتراك لتلعبوا سوا!</p>
      <button class="btn sun big wide" data-act="go" data-v="sub">اشترك وافتح التحدّي</button></section></div>${tabbar('home')}`;
    return;
  }
  const subs=SUBS(),names=SET.ps.map(x=>String(x).trim());
  V.innerHTML=`${back('home','تحدّي العيلة')}
  <div class="du-wrap">
    <div class="du-hero">${MASCOT('happy','mascot sm')}<div><b>⚔️ مين الأشطر؟</b><small>من ٢ لـ ${ar(MAXP)} لاعبين على نفس الموبايل. نفس السؤال للكل، والأسرع بالجواب الصح ياخد نقاط أكتر!</small></div></div>
    <div class="du-lab">اللاعبين (${ar(names.length+1)})</div>
    <div class="du-plist">
      <div class="du-prow p0"><span class="du-av">${childAv()}</span><b style="flex:1">${esc(c.name)}</b><small class="muted">اللاعب الأول</small></div>
      ${SET.ps.map((n,i)=>`<div class="du-prow p${i+1}"><span class="du-av">${avOf(n)}</span><input class="du-in du-pin" data-i="${i}" maxlength="12" value="${esc(n)}" aria-label="اسم اللاعب ${ar(i+2)}">${SET.ps.length>1?`<button class="du-rm" data-act="du_rm" data-i="${i}" aria-label="شيل اللاعب">×</button>`:''}</div>`).join('')}
      ${SET.ps.length<MAXP-1?`<button class="du-add" data-act="du_add">➕ ضيف لاعب</button>`:''}
    </div>
    <div class="du-chips">${CHIPS().map(([n,e])=>`<button class="du-chip ${names.includes(n)?'on':''}" data-act="du_p2" data-v="${esc(n)}">${e} ${esc(n)}</button>`).join('')}</div>
    <div class="du-lab">اختار المادة</div>
    <div class="du-subs">${subs.map(s=>`<button class="du-sub ${SET.subj===s?'on':''}" style="--c:${SUBJ[s].c}" data-act="du_subj" data-v="${s}">${ICON(SUBJ[s].k)}<span>${SUBJ[s].n}</span></button>`).join('')}
      <button class="du-sub ${SET.subj==='mix'?'on':''}" style="--c:#DD3F57" data-act="du_subj" data-v="mix"><span class="du-e">🎲</span><span>منوّع</span></button></div>
    <div class="du-lab">كم جولة؟</div>
    <div class="du-len">${[6,10].map(n=>`<button class="${SET.n===n?'on':''}" data-act="du_len" data-v="${n}"><b>${ar(n)}</b>جولات${n===6?' · سريع':' · طويل'}</button>`).join('')}</div>
    ${msgHTML()}<button class="btn teal big wide" data-act="du_start">${ICON('play')} يلّا نبلّش!</button>
    <div class="du-hist" aria-label="سجل التحدّيات"><div><b>${ar(h.w)}</b><small>فوز 🏆</small></div><div><b>${ar(h.t)}</b><small>تعادل 🤝</small></div><div><b>${ar(h.l)}</b><small>خسارة</small></div></div>
  </div>${tabbar('home')}`;
  V.querySelectorAll('.du-pin').forEach(inp=>inp.addEventListener('input',()=>{SET.ps[+inp.dataset.i]=inp.value;const av=inp.parentNode.querySelector('.du-av');if(av)av.textContent=avOf(inp.value)}));
}

function startDuel(){
  if(!hasAccess()){go('sub');return}
  let ps=SET.ps.map(x=>String(x||'').trim()).filter(Boolean);if(!ps.length)ps=['ماما'];
  const seen=new Set([String(APP.child.name).trim()]);ps=ps.map(n=>{let m=n,k=2;while(seen.has(m))m=n+' '+ar(k++);seen.add(m);return m});
  SET.ps=ps.slice();S.duPs=ps.slice();
  const qs=drawQs(SET.subj,SET.n);
  if(!qs.length){ui.msg={ok:false,t:'ما لقينا أسئلة، جرّب مادة تانية'};viewDuel();return}
  D={subj:SET.subj,n:qs.length,qs,r:0,k:0,phase:'hand',done:false,
     p:[{n:APP.child.name,av:childAv(),sc:0}].concat(ps.map(n=>({n,av:avOf(n),sc:0}))),picks:[]};
  go('duelq');
}
const NP=()=>D.p.length;
const order=()=>D.p.map((_,k)=>(k+D.r)%NP());  // كل جولة بيبلّش لاعب مختلف
const cur=()=>order()[D.k];
const ranked=()=>{const L=D.p.map((P,i)=>Object.assign({i},P)).sort((a,b)=>b.sc-a.sc);L.forEach(P=>P.rk=1+L.filter(x=>x.sc>P.sc).length);return L};

/* ---------- شاشة اللعب ---------- */
function viewDuelq(){
  if(!APP.child){go('kids');return}
  if(!D){go('duel');return}
  stopT();
  if(D.phase==='hand')return rHand();
  if(D.phase==='q')return rQ();
  if(D.phase==='rev')return rRev();
  return rEnd();
}
function quitBtn(){return `<button class="x" data-act="du_quit" aria-label="خروج">×</button>`}
function rHand(){
  const i=cur(),P=D.p[i],first=D.k===0;
  V.innerHTML=`<div class="du-hand p${i}">
    <div class="row between" style="width:100%">${quitBtn()}<span class="du-rd">الجولة ${ar(D.r+1)} من ${ar(D.n)}</span></div>
    <div class="du-big">${P.av}</div>
    <h1>دور ${esc(P.n)}</h1>
    <p>${first?(NP()>2?'خلّي الباقيين ما يتطلّعوا على الشاشة 🙈':'خلّي التاني ما يتطلّع على الشاشة 🙈'):'تمّ! هلّق سلّم الموبايل لـ'+esc(P.n)+' 📱'}</p>
    <button class="du-go" data-act="du_ready">جاهز؟</button>
    <p class="small">عندك ${ar(SECS)} ثواني ⏱️ — الأسرع ياخد نقاط أكتر</p>
  </div>`;
}
function qHead(it){
  const f=it.m?ar:(x=>x);
  return `${it.pre?`<div class="pre">${it.preKind==='quran'?'قال تعالى: ﴿'+esc(it.pre)+'﴾':'قال رسول الله ﷺ: «'+it.pre+'»'}</div>`:''}
    <h2 class="qq">${esc(f(it.q))}</h2>${it.en?`<div class="en" dir="ltr">${esc(it.en)}</div>`:''}`;
}
function rQ(){
  const i=cur(),P=D.p[i],it=D.qs[D.r],f=it.m?ar:(x=>x),sj=SUBJ[it.s]||{n:'',c:'var(--teal)',k:'star'},BADGE=['أ','ب','ج','د','هـ'];
  V.innerHTML=`<div class="du-wrap" style="padding-bottom:20px">
    <div class="du-top">${quitBtn()}<span class="du-tag p${i}"><span>${P.av}</span>${esc(P.n)}</span><span class="du-sp"></span><span class="du-rn">${ar(D.r+1)}/${ar(D.n)}</span></div>
    <div class="row" style="gap:10px"><div class="du-tbar" style="flex:1"><i id="du-bar"></i></div><span class="du-secs" id="du-secs">${ar(SECS)}</span></div>
    <section class="du-q p${i}"><div class="qmeta" style="--c:${sj.c}"><span class="sicon sm">${ICON(sj.k)}</span><span>${sj.n}</span></div>${qHead(it)}</section>
    <div class="olist" id="du-opts">${it.opts.map((o,j)=>`<button class="opt2" data-act="du_ans" data-i="${j}"><span class="ob">${BADGE[j]||j+1}</span>${OT(f(o))}</button>`).join('')}</div>
  </div>`;
  D.t0=Date.now();D.locked=false;
  TM=setInterval(()=>{
    const bar=document.getElementById('du-bar');if(!bar||!D||D.phase!=='q'){stopT();return}
    const left=Math.max(0,SECS-(Date.now()-D.t0)/1000);
    bar.style.width=(100*left/SECS)+'%';bar.className=left<3?'low':left<6?'mid':'';
    const sc=document.getElementById('du-secs');if(sc)sc.textContent=ar(Math.ceil(left));
    if(left<=0)answerDuel(-1);
  },100);
}
function answerDuel(j){
  if(!D||D.phase!=='q'||D.locked)return;D.locked=true;stopT();
  const i=cur(),it=D.qs[D.r],left=Math.max(0,SECS-(Date.now()-D.t0)/1000);
  const ok=j>=0&&it.opts[j]===it.a,pts=ok?10+Math.ceil(left):0;
  D.picks[i]={j,ok,pts};D.p[i].sc+=pts;
  try{if(navigator.vibrate)navigator.vibrate(20)}catch(e){}
  const btns=[...V.querySelectorAll('#du-opts .opt2')];btns.forEach((b,k)=>{b.disabled=true;if(k===j)b.classList.add('du-picked')});
  const box=document.createElement('div');box.className='du-wait';
  box.innerHTML=`<b>${j<0?'⏰ خلص الوقت!':'🔒 انحفظ جوابك'}</b>`;
  V.querySelector('.du-wrap').appendChild(box);
  setTimeout(()=>{if(!D||D.phase!=='q'||!document.getElementById('du-opts'))return;
    if(D.k<NP()-1){D.k++;D.phase='hand'}else{D.phase='rev';D.revTone=true}
    viewDuelq();window.scrollTo(0,0)},j<0?1100:700);
}
function board(){
  const R=ranked(),top=R[0].sc;
  return `<div class="du-rank">${R.map((P,k)=>`<div><span class="m">${P.sc>0&&P.sc===top?'👑':MED[P.rk-1]}</span><span class="n">${P.av} ${esc(P.n)}</span><b class="c${P.i}">${ar(P.sc)}</b></div>`).join('')}</div>`;
}
function rRev(){
  const it=D.qs[D.r],f=it.m?ar:(x=>x),last=D.r===D.n-1;
  V.innerHTML=`<div class="du-wrap" style="padding-bottom:20px">
    <div class="du-top">${quitBtn()}<b style="font-size:1.1rem">نتيجة الجولة ${ar(D.r+1)}</b><span class="du-sp"></span><span class="du-rn">${ar(D.r+1)}/${ar(D.n)}</span></div>
    <section class="du-q">${qHead(it)}</section>
    <div class="du-ans"><small>الجواب الصح</small>✅ ${esc(f(it.a))}</div>
    <div class="du-picks">${D.p.map((P,i)=>{const k=D.picks[i]||{j:-1,ok:false,pts:0};
      return `<div class="du-pk p${i}"><span class="du-av">${P.av}</span><b>${esc(P.n)}</b>
        <span class="du-ch">${k.j<0?'⏰ ما جاوب':esc(f(it.opts[k.j]))}</span>
        <span class="du-ok ${k.ok?'y':'n'}">${k.ok?'صح ✓':'غلط ✗'}</span><span class="du-pts">+${ar(k.pts)}</span></div>`}).join('')}</div>
    ${board()}
    <button class="btn ${last?'sun':'teal'} big wide" data-act="du_next">${last?'🏆 شوف مين ربح':'الجولة الجاية ←'}</button>
  </div>`;
  if(D.revTone){D.revTone=false;tone(!!(D.picks[0]||{}).ok)}
}
function rEnd(){
  const R=ranked(),top=R[0].sc,winners=R.filter(P=>P.sc===top),me=D.p[0];
  const res=me.sc<top?'l':winners.length>1?'t':'w';
  if(!D.done){D.done=true;const h=hist();h[res]++;S.duelVs=S.duelVs||{};
    D.p.slice(1).forEach(o=>{const vk=String(o.n).trim(),vs=S.duelVs[vk]||(S.duelVs[vk]={w:0,l:0,t:0});vs[me.sc>o.sc?'w':me.sc<o.sc?'l':'t']++});
    if(res!=='l')S.jas+=15;save();if(typeof hook==='function'&&res!=='l')try{hook('points',15)}catch(e){}
    if(res!=='l'){confetti();tone(true)}else tone(false)}
  const pod=R.length>=3?`<div class="du-podium">${[1,0,2].map(k=>{const P=R[k],cols=['#C99410','#8FA3AE','#C7773B'],hh=[96,70,54];return`<div><span class="av">${P.av}</span><small>${esc(P.n)}</small><div class="col" style="background:${cols[P.rk-1]||cols[2]};height:${hh[P.rk-1]||hh[2]}px">${ar(P.rk)}</div></div>`}).join('')}</div>`:'';
  V.innerHTML=`<div class="du-wrap">
    <section class="panel du-end">
      ${MASCOT(res==='l'?'happy':'wow','mascot big')}
      ${winners.length===1?`<div class="du-crown">👑 ${winners[0].av}</div><h1>البطل: ${esc(winners[0].n)}!</h1>`:`<div class="du-crown">🤝</div><h1>تعادل بين ${winners.map(w=>esc(w.n)).join(' و')}!</h1>`}
      <p class="muted">${res==='w'?'برافو يا شطّور! كنت الأشطر 💪':res==='l'?'ولا يهمك! المرة الجاية بتربح 💪':'نفس النقاط بالزبط، شو هالمستوى!'}</p>
      ${pod}${board()}
      ${res!=='l'?`<span class="du-prize">${JAS()} +${ar(15)} نقطة لـ${esc(me.n)}</span>`:''}
    </section>
    <button class="btn teal big wide" data-act="du_again">🔁 جولة جديدة</button>
    <button class="btn ghost big wide" data-act="du_back">الرجوع</button>
  </div>`;
}

document.addEventListener('click',e=>{
  const b=e.target.closest('[data-act]');if(!b||b.disabled)return;const a=b.dataset.act;
  if(!a||a.indexOf('du_')!==0)return;
  if(a==='du_p2'){readNames();const n=b.dataset.v,k=SET.ps.map(x=>String(x).trim()).indexOf(n);if(k>=0){if(SET.ps.length>1)SET.ps.splice(k,1)}else if(SET.ps.length<MAXP-1)SET.ps.push(n);else SET.ps[SET.ps.length-1]=n;viewDuel()}
  else if(a==='du_add'){readNames();if(SET.ps.length<MAXP-1){const used=SET.ps.map(x=>String(x).trim());const nx=(CHIPS().find(c=>!used.includes(c[0]))||['لاعب'])[0];SET.ps.push(nx)}viewDuel()}
  else if(a==='du_rm'){readNames();if(SET.ps.length>1)SET.ps.splice(+b.dataset.i,1);viewDuel()}
  else if(a==='du_subj'){readNames();SET.subj=b.dataset.v;viewDuel()}
  else if(a==='du_len'){readNames();SET.n=+b.dataset.v;viewDuel()}
  else if(a==='du_start'){readNames();startDuel()}
  else if(a==='du_ready'){if(D&&D.phase==='hand'){D.phase='q';viewDuelq()}}
  else if(a==='du_ans'){answerDuel(+b.dataset.i)}
  else if(a==='du_next'){if(!D)return;if(D.r>=D.n-1){D.phase='end'}else{D.r++;D.k=0;D.picks=[];D.phase='hand'}viewDuelq();window.scrollTo(0,0)}
  else if(a==='du_quit'){if(D&&D.phase!=='end'&&!confirm('بدك توقف التحدّي؟'))return;stopT();D=null;go('duel')}
  else if(a==='du_again'){stopT();D=null;startDuel()}
  else if(a==='du_back'){stopT();D=null;go('home')}
});

VIEWS.duel=viewDuel;
VIEWS.duelq=viewDuelq;
window.duelCardHTML=function(){return `<button class="fcard" style="--c:#DD3F57;width:100%;margin-top:10px" data-act="go" data-v="duel"><span class="sicon">👨‍👩‍👧</span><b>⚔️ تحدّي العيلة</b><small>من ٢ لـ ٤ لاعبين على نفس الموبايل</small></button>`};
})();
