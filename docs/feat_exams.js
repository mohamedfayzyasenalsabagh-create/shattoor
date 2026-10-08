/* شطّور · تحضير المذاكرات والامتحانات
 * © 2026 جميع الحقوق محفوظة · mohamedfayzyasenalsabagh@gmail.com */
(function(){
const css=document.createElement('style');css.textContent=`
.ex-subj{display:grid;grid-template-columns:repeat(3,1fr);gap:8px}
.ex-subj button{display:flex;flex-direction:column;align-items:center;gap:6px;padding:10px 4px;border-radius:18px;border:2px solid var(--line);background:var(--card);font-weight:800;font-size:.85rem}
.ex-subj button.on{border-color:var(--c);background:color-mix(in srgb,var(--c) 12%,#fff);box-shadow:0 4px 0 var(--c)}
.ex-subj .sicon{width:40px;height:40px}
.ex-types{display:flex;flex-direction:column;gap:10px}
.ex-type{display:flex;align-items:center;gap:12px;text-align:start;background:var(--card);border:1.5px solid var(--line);border-radius:20px;padding:14px;box-shadow:0 4px 0 var(--line)}
.ex-type .em{font-size:1.8rem;width:48px;height:48px;border-radius:15px;display:grid;place-items:center;background:#F1EAFE;flex:none}
.ex-type b{display:block;font-size:1.05rem}.ex-type small{color:var(--muted)}
.ex-units{display:flex;flex-wrap:wrap;gap:6px;margin-top:8px}
.ex-units button{border:1.5px solid var(--line);background:#fff;border-radius:999px;padding:6px 12px;font-weight:700;font-size:.85rem}
.ex-hist{display:flex;flex-direction:column;gap:6px}
.ex-hist div{display:flex;justify-content:space-between;align-items:center;padding:8px 10px;background:#F6F9F9;border-radius:12px;font-size:.9rem}
.ex-mark{font-family:var(--display);font-size:4rem;line-height:1;color:#7A4FD1}
.ex-mark small{font-size:1.6rem;color:var(--muted)}
.ex-grade{display:inline-block;padding:4px 16px;border-radius:999px;font-weight:800;color:#fff}
.ex-rev{display:flex;flex-direction:column;gap:8px;width:100%;text-align:start}
.ex-rev .it{background:var(--card);border:1.5px solid var(--line);border-radius:16px;padding:10px 12px}
.ex-rev .it p{margin:0 0 4px;font-weight:700;white-space:pre-line}
.ex-rev .bad{color:var(--pom)}.ex-rev .good{color:#1F7A42}
.ex-weak{display:flex;flex-direction:column;gap:8px;width:100%}
.ex-weak button{display:flex;justify-content:space-between;align-items:center;gap:8px;text-align:start;background:#FFF6E3;border:1.5px solid #F3D48A;border-radius:14px;padding:10px 12px;font-weight:700}
.opt2.picked{border-color:#7A4FD1;background:#F1EAFE;box-shadow:0 4px 0 #7A4FD1}
`;document.head.appendChild(css);

const TYPES={
  monthly:{n:'مذاكرة شهرية',e:'📝',d:'دروس آخر ٤ أسابيع',N:15,min:20},
  sem:{n:'امتحان الفصل',e:'🎓',d:'كل دروس الفصل لحد هلق',N:25,min:40},
  unit:{n:'امتحان وحدة',e:'📚',d:'اختار وحدة من الكتاب',N:15,min:20}};
let TMR=null;
const stopT=()=>{if(TMR){clearInterval(TMR);TMR=null}};
const SUBJS=['math','ar','sci','en','isl'];
const gradeOf=sc=>sc>=90?['ممتاز','#1F7A42']:sc>=80?['جيد جداً','#2E9A57']:sc>=65?['جيد','#2E7DB8']:sc>=50?['مقبول','#C99410']:['بدها مراجعة','#DD3F57'];

function lessonsFor(s,type,unit){
  const g=APP.child.grade,p=schoolPos(),L=semLessons(g,s,p.sem);if(!L.length)return[];
  const c=currentLesson(g,s),k=c?L.findIndex(l=>l.i===c.lesson.i):L.length-1;
  if(type==='unit')return L.filter(l=>l.unit===unit);
  if(type==='monthly')return L.slice(Math.max(0,k-3),k+1);
  return L.slice(0,Math.max(1,k+1));
}
function buildExam(s,ls,N){
  const g=APP.child.grade,used=new Set(),out=[];setDiff(s);
  if(!ls.length){for(let t=0;t<N*4&&out.length<N;t++){const q=Object.assign({s},GEN_FOR[s](g));if(q.kind==='spell'||used.has(qKey(q)))continue;used.add(qKey(q));out.push(q)}return out}
  let r=0,guard=0;
  while(out.length<N&&guard++<N*12){const l=ls[r++%ls.length];const q=lessonQ(g,s,l,used);if(!q||q.kind==='spell'||!q.opts||used.has(qKey(q)))continue;used.add(qKey(q));out.push(Object.assign(q,{li:l.i}))}
  return shuf(out);
}
window.examClock=()=>{if(!Q||Q.mode!=='exam')return'';const left=Math.max(0,Math.round((Q.t0+Q.dur*1000-Date.now())/1000));return ar(Math.floor(left/60))+':'+ar(String(left%60).padStart(2,'0'))};
function tick(){const el=document.getElementById('extime');if(!Q||Q.mode!=='exam'){stopT();return}const left=Q.t0+Q.dur*1000-Date.now();if(el){el.textContent='⏱ '+examClock();el.classList.toggle('low',left<60000)}if(left<=0){stopT();examFinish(true)}}
window.examAnswer=i=>{
  const it=Q.list[Q.i];Q.res[Q.i]=it.opts[i]===it.a;Q.pick[Q.i]=it.opts[i];if(Q.res[Q.i])Q.c++;markSeen(it);
  const st=S.stats[it.s]||(S.stats[it.s]={c:0,t:0});st.t++;if(Q.res[Q.i])st.c++;
  const d=today();S.hist=S.hist||{};const hd=S.hist[d]||(S.hist[d]={}),hs=hd[it.s]||(hd[it.s]={c:0,t:0});hs.t++;if(Q.res[Q.i])hs.c++;
  const btn=V.querySelectorAll('.opt2')[i];if(btn)btn.classList.add('picked');
  V.querySelectorAll('.opt2').forEach(b=>b.disabled=true);
  setTimeout(()=>{if(!Q||Q.mode!=='exam')return;Q.i++;if(Q.i>=Q.list.length)examFinish(false);else{viewQuiz();window.scrollTo(0,0)}},280);
};
function startExam(s,type,unit){
  const T=TYPES[type],ls=lessonsFor(s,type,unit),list=buildExam(s,ls,T.N);
  const title=type==='unit'?'امتحان '+unit:T.n+' · '+SUBJ[s].n;
  Q={mode:'exam',s,type,unit,title,list,i:0,c:0,res:[],pick:[],t0:Date.now(),dur:T.min*60};
  push('quiz');viewQuiz();window.scrollTo(0,0);stopT();TMR=setInterval(tick,1000);
}
function examFinish(timeout){
  stopT();const q=Q,n=q.list.length,sc=Math.round(100*q.c/n),[gn,gc]=gradeOf(sc);
  S.exams=S.exams||[];S.exams.push({d:today(),s:q.s,t:q.type,u:q.unit||'',sc,n});while(S.exams.length>40)S.exams.shift();
  const earn=Math.round(sc/5);S.jas+=earn;hook('points',earn);save();syncSummary();
  const weak={};q.list.forEach((it,k)=>{if(!q.res[k]&&it.li!=null){const w=weak[it.li]||(weak[it.li]={t:it.lt,n:0,li:it.li});w.n++}});
  const W=Object.values(weak).sort((a,b)=>b.n-a.n).slice(0,5);
  const wrong=q.list.map((it,k)=>({it,k})).filter(x=>!q.res[x.k]);
  const f=it=>it.m?ar:(x=>x);
  Q=null;
  V.innerHTML=`<div class="result2">${MASCOT(sc>=65?'wow':sc>=50?'happy':'sad','mascot big')}
    <h1>${esc(q.title)}</h1>${timeout?'<p class="muted">خلص الوقت ⏱</p>':''}
    <div class="ex-mark">${ar(sc)}<small> / ${ar(100)}</small></div>
    <span class="ex-grade" style="background:${gc}">${gn}</span>
    <div class="rstats"><div><b>${ar(q.c)}/${ar(n)}</b><span>إجابات صحيحة</span></div><div><b>${JAS()}${ar(earn)}</b><span>ياسمينة</span></div></div>
    ${W.length?`<h3 style="align-self:flex-start">🎯 راجع هالدروس</h3><div class="ex-weak">${W.map(w=>`<button data-act="practiceL" data-s="${q.s}" data-i="${w.li}"><span>${esc(w.t||'')}</span><small>${ar(w.n)} غلط · تمرّن ←</small></button>`).join('')}</div>`:''}
    ${wrong.length?`<details style="width:100%"><summary class="btn ghost wide">شوف الأسئلة الغلط (${ar(wrong.length)})</summary><div class="ex-rev">${wrong.map(({it,k})=>`<div class="it"><p>${esc(f(it)(it.q))}</p>${it.en?`<p dir="ltr">${esc(it.en)}</p>`:''}<div class="bad">جوابك: ${q.pick[k]!=null?esc(f(it)(q.pick[k])):'ما جاوبت'}</div><div class="good">الصح: ${esc(f(it)(it.a))}</div></div>`).join('')}</div></details>`:''}
    <div style="display:flex;flex-direction:column;gap:10px;width:100%">
      <button class="btn teal wide" data-act="ex_again" data-s="${q.s}" data-t="${q.type}" data-u="${esc(q.unit||'')}">امتحان جديد</button>
      <button class="btn ghost wide" data-act="go" data-v="exams">كل الامتحانات</button>
    </div></div>`;
  if(sc>=80)confetti();window.scrollTo(0,0);
}
function viewExams(){
  if(!APP.child)return go('kids');if(!hasAccess())return go('sub');
  const s=ui.exS||'math',g=APP.child.grade,p=schoolPos(),units=[...new Set(semLessons(g,s,p.sem).map(l=>l.unit).filter(Boolean))];
  const H=(S.exams||[]).slice().reverse().slice(0,8);
  V.innerHTML=`${back('home','تحضير الامتحانات')}
  <p class="muted">امتحان تجريبي متل المدرسة: وقت محدد، بدون ما تعرف الجواب لحتى تخلّص، وبالآخر علامة من ١٠٠ وشو لازم تراجع.</p>
  <section class="panel"><h3>المادة</h3><div class="ex-subj">${SUBJS.map(k=>`<button class="${k===s?'on':''}" style="--c:${SUBJ[k].c}" data-act="ex_s" data-s="${k}"><span class="sicon">${ICON(SUBJ[k].k)}</span>${SUBJ[k].n}</button>`).join('')}</div></section>
  <div class="ex-types">
    ${['monthly','sem'].map(t=>`<button class="ex-type" data-act="ex_go" data-t="${t}"><span class="em">${TYPES[t].e}</span><span><b>${TYPES[t].n} · ${SUBJ[s].n}</b><small>${TYPES[t].d} · ${ar(TYPES[t].N)} سؤال · ${ar(TYPES[t].min)} دقيقة</small></span></button>`).join('')}
    ${units.length?`<div class="ex-type" style="flex-direction:column;align-items:stretch"><div class="row"><span class="em">${TYPES.unit.e}</span><span><b>${TYPES.unit.n}</b><small>${TYPES.unit.d} · ${ar(15)} سؤال</small></span></div><div class="ex-units">${units.map(u=>`<button data-act="ex_go" data-t="unit" data-u="${esc(u)}">${esc(u)}</button>`).join('')}</div></div>`:''}
  </div>
  ${H.length?`<section class="panel"><h3>علاماتي</h3><div class="ex-hist">${H.map(h=>`<div><span>${SUBJ[h.s].n} · ${h.t==='unit'?esc(h.u):TYPES[h.t].n}</span><b style="color:${gradeOf(h.sc)[1]}">${ar(h.sc)}/${ar(100)}</b></div>`).join('')}</div></section>`:''}
  ${tabbar('home')}`;
}
VIEWS.exams=viewExams;
const _go=go;window.go=go=function(v,f){if(v!=='quiz')stopT();return _go(v,f)};
document.addEventListener('click',e=>{const b=e.target.closest('[data-act]');if(!b||b.disabled)return;const a=b.dataset.act;
  if(a==='ex_s'){ui.exS=b.dataset.s;viewExams()}
  else if(a==='ex_go'){startExam(ui.exS||'math',b.dataset.t,b.dataset.u)}
  else if(a==='ex_again'){ui.exS=b.dataset.s;startExam(b.dataset.s,b.dataset.t,b.dataset.u||undefined)}
  else if(a==='quit')stopT();
});
})();
