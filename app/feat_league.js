/* شطّور · مسابقة الأسبوع والشهر + صفّ الأستاذ
 * © 2026 جميع الحقوق محفوظة · mohamedfayzyasenalsabagh@gmail.com */
(function(){
const css=document.createElement('style');css.textContent=`
.lg-prize{background:linear-gradient(135deg,#FFC83D,#FFB020);color:#4A3300;border-radius:22px;padding:14px 16px;display:flex;gap:12px;align-items:center;font-weight:800;box-shadow:0 5px 0 #C99410}
.lg-prize .big{font-size:2.2rem}
.lg-list{display:flex;flex-direction:column;gap:8px}
.lg-row{display:flex;align-items:center;gap:10px;background:var(--card);border:1.5px solid var(--line);border-radius:16px;padding:10px 12px}
.lg-row.me{border-color:var(--teal);background:#E6F3F1;box-shadow:0 3px 0 var(--teal)}
.lg-rk{width:34px;text-align:center;font-family:var(--display);font-size:1.3rem;color:var(--muted)}
.lg-av{font-size:1.6rem;width:42px;height:42px;border-radius:50%;background:#FFF6E3;display:grid;place-items:center;flex:none}
.lg-n{flex:1;font-weight:800;min-width:0;overflow:hidden;text-overflow:ellipsis;white-space:nowrap}
.lg-p{font-weight:800;color:#C98A0A;display:flex;align-items:center;gap:4px}.lg-p .jas{width:18px;height:18px}
.lg-podium{display:grid;grid-template-columns:1fr 1.15fr 1fr;align-items:end;gap:8px;text-align:center}
.lg-podium>div{display:flex;flex-direction:column;align-items:center;gap:4px}
.lg-podium .col{width:100%;border-radius:16px 16px 6px 6px;color:#fff;font-family:var(--display);font-size:1.6rem;padding-top:6px}
.lg-podium .av{font-size:2.2rem}
.tc-table{display:flex;flex-direction:column;gap:8px}
.tc-st{background:var(--card);border:1.5px solid var(--line);border-radius:16px;padding:10px 12px;display:flex;flex-direction:column;gap:6px}
.tc-st .top{display:flex;justify-content:space-between;align-items:center;gap:8px}
.tc-bars{display:grid;grid-template-columns:repeat(5,1fr);gap:4px}
.tc-bars span{font-size:.7rem;text-align:center;border-radius:8px;padding:3px 0;background:#F1F5F5;font-weight:700}
.tc-code{font-family:var(--display);font-size:2rem;letter-spacing:.15em;color:var(--teal);direction:ltr}
.tag.warn{background:#FCE0E5;color:#8A1C2E}
`;document.head.appendChild(css);

const weekId=()=>Math.floor((today()+5)/7);
const monthId=()=>{const d=new Date();return d.getFullYear()+'-'+String(d.getMonth()+1).padStart(2,'0')};
function bump(n){if(!S||!n)return;const w=weekId(),m=monthId();
  if(!S.wk||S.wk.w!==w)S.wk={w,p:0};if(!S.mo||S.mo.m!==m)S.mo={m,p:0};S.wk.p+=n;S.mo.p+=n}
let pushT=null;
function pushBoard(){if(!APP.child||!S||S.noBoard)return;clearTimeout(pushT);pushT=setTimeout(()=>{
  const c=APP.child,g=c.grade,first=String(c.name||'').trim().split(/\s+/)[0].slice(0,20),av=typeof avatarOf==='function'?avatarOf():'🌼';
  bump(0);const base={n:first,av,g,cid:c.id,t:today()};
  if(S.wk&&S.wk.p>0)API.boardPut(`w${S.wk.w}_g${g}_${c.id}`,Object.assign({per:`w${S.wk.w}_g${g}`,p:S.wk.p},base)).catch(()=>{});
  if(S.mo&&S.mo.p>0)API.boardPut(`m${S.mo.m}_g${g}_${c.id}`,Object.assign({per:`m${S.mo.m}_g${g}`,p:S.mo.p},base)).catch(()=>{});
},1500)}
function memberSync(){const c=APP.child;if(!c||!c.cls||!S)return;bump(0);
  API.memberPut(c.cls,c.id,{name:c.name,grade:c.grade,jas:S.jas,streak:S.streak,stats:S.stats||{},last:today(),wk:S.wk&&S.wk.w===weekId()?S.wk.p:0,exams:(S.exams||[]).slice(-5)}).catch(()=>{})}
HOOKS.push({points:n=>{bump(n);save()},finish:()=>pushBoard(),sync:()=>memberSync()});

async function viewLeague(){
  if(!APP.child)return go('kids');
  const per=ui.lgPer||'w',g=APP.child.grade;bump(0);
  const key=per==='w'?`w${weekId()}_g${g}`:`m${monthId()}_g${g}`,mine=per==='w'?S.wk.p:S.mo.p;
  const monthName=new Intl.DateTimeFormat('ar-SY',{month:'long'}).format(new Date());
  V.innerHTML=`<h1 class="ptitle">🏆 المسابقة</h1>
  ${APP.set.prize?`<div class="lg-prize"><span class="big">🎁</span><span>جائزة شهر ${monthName}: ${esc(APP.set.prize)}</span></div>`:''}
  <div class="tabs"><button data-act="lg_per" data-p="w" class="${per==='w'?'on':''}">هالأسبوع</button><button data-act="lg_per" data-p="m" class="${per==='m'?'on':''}">شهر ${monthName}</button></div>
  <p class="muted small">ترتيب أطفال الصف ${GRADES[g-1]} حسب الياسمينات يلي جمعوها ${per==='w'?'من السبت لهلق':'هالشهر'}. كل جواب صح وكل امتحان بيزيد نقاطك!</p>
  <div id="lgbox"><p class="muted">جارِ التحميل…</p></div>${tabbar('league')}`;
  if(S.noBoard){V.querySelector('#lgbox').innerHTML=`<section class="panel"><p>اسم ${esc(APP.child.name)} مخفي من المسابقة. فيك تفعّلها من ركن الأهل.</p><p>نقاطك: <b>${ar(mine)}</b></p></section>`;return}
  pushBoard();
  let L=[];try{L=await API.boardGet(key)}catch(e){V.querySelector('#lgbox').innerHTML=`<section class="panel"><p>المسابقة رح تشتغل قريباً إن شاء الله 🌼</p><p>نقاطك ${per==='w'?'هالأسبوع':'هالشهر'}: <b>${ar(mine)}</b></p></section>`;return}
  const me=APP.child.id;L=L.filter(x=>x.cid!==me);if(mine>0)L.push({cid:me,n:String(APP.child.name).split(' ')[0],av:avatarOf(),p:mine});
  L.sort((a,b)=>b.p-a.p);const rk=L.findIndex(x=>x.cid===me);
  const top=L.slice(0,3),col=['#C99410','#8FA3AE','#C7773B'],h=[110,80,64];
  const pod=top.length>=3?`<div class="lg-podium">${[1,0,2].map(i=>`<div><span class="av">${top[i].av||'🌼'}</span><b class="lg-n" style="max-width:100%">${esc(top[i].n)}</b><span class="lg-p">${JAS()}${ar(top[i].p)}</span><div class="col" style="background:${col[i]};height:${h[i]}px">${ar(i+1)}</div></div>`).join('')}</div>`:'';
  V.querySelector('#lgbox').innerHTML=`${pod}
    ${rk>=0?`<div class="status ok"><span>ترتيبك: <b>${ar(rk+1)}</b> من ${ar(L.length)} · ${ar(mine)} ياسمينة</span></div>`:`<div class="status trial"><span>لسا ما جمعت نقاط ${per==='w'?'هالأسبوع':'هالشهر'}. حل تحدي اليوم لتدخل المسابقة!</span></div>`}
    <div class="lg-list">${L.slice(0,30).map((x,i)=>`<div class="lg-row ${x.cid===me?'me':''}"><span class="lg-rk">${i<3?['🥇','🥈','🥉'][i]:ar(i+1)}</span><span class="lg-av">${x.av||'🌼'}</span><span class="lg-n">${esc(x.n)}${x.cid===me?' (أنت)':''}</span><span class="lg-p">${JAS()}${ar(x.p)}</span></div>`).join('')||'<p class="muted">لسا ما حدا دخل المسابقة. كون الأول! 🚀</p>'}</div>
    ${rk>29?`<div class="lg-row me"><span class="lg-rk">${ar(rk+1)}</span><span class="lg-av">${avatarOf()}</span><span class="lg-n">${esc(APP.child.name)} (أنت)</span><span class="lg-p">${JAS()}${ar(mine)}</span></div>`:''}`;
}

/* ---- صف الأستاذ: انضمام الطفل (ركن الأهل) ---- */
window.classPanelHTML=()=>{const c=APP.child;
  return`<section class="panel"><h3>🧑‍🏫 صف الأستاذ</h3>
  ${c.cls?`<p>${esc(c.name)} منضم لصف ${ui.clsName?'«'+esc(ui.clsName)+'»':'برمز'} <b dir="ltr">${esc(c.cls)}</b>. الأستاذ بيشوف تقدّمه بالتطبيق.</p><button class="btn ghost" data-act="cls_leave">الخروج من الصف</button>`
  :`<p class="muted">إذا أستاذ ${esc(c.name)} عطاكم رمز صف، اكتبوه هون ليتابع تقدّمه.</p>
   <div class="row"><input id="clsin" type="tel" dir="ltr" inputmode="numeric" maxlength="6" placeholder="رمز من ٦ أرقام" style="flex:1"><button class="btn teal sm" data-act="cls_join">انضمام</button></div>`}
  <div class="row between" style="margin-top:8px"><span>إظهار الاسم بالمسابقة</span><button class="btn ${S.noBoard?'teal':'ghost'} sm" data-act="lg_toggle">${S.noBoard?'إظهار':'إخفاء'}</button></div>
  ${ui.clsMsg?`<p class="msg ${ui.clsMsg.ok?'ok':'no'}">${ui.clsMsg.t}</p>`:''}</section>`};

/* ---- لوحة الأستاذ ---- */
async function viewTeacher(){
  if(!APP.user)return go('auth');
  V.innerHTML=`${back(APP.child?'parent':'kids','لوحة الأستاذ')}<div id="tcb"><p class="muted">جارِ التحميل…</p></div>`;
  const box=V.querySelector('#tcb');
  let C=[];try{C=await API.myClasses()}catch(e){box.innerHTML=`<section class="panel"><p>لوحة الأستاذ رح تشتغل قريباً إن شاء الله.</p></section>`;return}
  const sel=ui.tcCode&&C.find(x=>x.code===ui.tcCode)?ui.tcCode:(C[0]||{}).code;
  let M=[];if(sel){try{M=await API.members(sel)}catch(e){}}
  const cl=C.find(x=>x.code===sel),t=today();
  const pct=x=>x&&x.t?Math.round(100*x.c/x.t):null;
  M.sort((a,b)=>(b.last||0)-(a.last||0));
  const inactive=M.filter(m=>t-(m.last||0)>=3).length;
  box.innerHTML=`
  ${C.length?`<div class="tabs" style="flex-wrap:wrap">${C.map(x=>`<button data-act="tc_sel" data-c="${x.code}" class="${x.code===sel?'on':''}">${esc(x.name)}</button>`).join('')}</div>`:''}
  ${cl?`<section class="panel" style="text-align:center"><small class="muted">رمز الصف</small><div class="tc-code sel">${esc(cl.code)}</div>
    <p class="muted small">الأهل بيكتبوا هالرمز من «ركن الأهل ← صف الأستاذ».</p>
    <a class="btn sun sm" href="https://wa.me/?text=${encodeURIComponent(`أهلاً بأهالي طلاب ${cl.name} 🌼\nانضموا لصفّنا على تطبيق شطّور لنتابع تقدّم أولادنا سوا:\n١. افتحوا التطبيق ← ركن الأهل ← صف الأستاذ\n٢. اكتبوا الرمز: ${cl.code}\n${location.origin+location.pathname}`)}" target="_blank" rel="noopener">ابعت الرمز للأهل على واتساب</a></section>
  <div class="tiles" style="grid-template-columns:repeat(3,1fr)"><div class="tile"><b>${ar(M.length)}</b><span>طالب</span></div><div class="tile ok"><b>${ar(M.filter(m=>t-(m.last||0)<3).length)}</b><span>نشيط</span></div><div class="tile"><b>${ar(inactive)}</b><span>غايب ٣ أيام+</span></div></div>
  <div class="tc-table">${M.map(m=>{const d=t-(m.last||0);return`<div class="tc-st"><div class="top"><b>${esc(m.name)}</b><span class="tag ${d>=3?'warn':'ok'}">${d<=0?'اليوم':d===1?'مبارح':'من '+ar(d)+' أيام'}</span></div>
    <div class="row between muted small"><span>🔥 ${ar(m.streak||0)} · ${JAS()} ${ar(m.jas||0)} · هالأسبوع ${ar(m.wk||0)}</span>${(m.exams||[]).length?`<span>آخر امتحان: <b>${ar(m.exams[m.exams.length-1].sc)}</b></span>`:''}</div>
    <div class="tc-bars">${['math','ar','sci','en','isl'].map(s=>{const p=pct((m.stats||{})[s]);return`<span style="${p!=null?`background:color-mix(in srgb,${SUBJ[s].c} ${Math.max(15,p)}%,#fff)`:''}">${{math:'رياضيات',ar:'عربي',sci:'علوم',en:'English',isl:'ديانة'}[s]}<br>${p!=null?ar(p)+'٪':'—'}</span>`}).join('')}</div></div>`}).join('')||'<p class="muted">لسا ما انضم حدا. ابعت الرمز للأهل.</p>'}</div>`
  :'<section class="panel"><h3>أهلاً أستاذ/ة 👋</h3><p class="muted">اعمل صف، وابعت رمزه للأهل. بتشوف هون نشاط كل طالب ونسبته بكل مادة وعلامات امتحاناته.</p></section>'}
  <form class="panel" id="tcf"><h3>صف جديد</h3><div class="field"><label for="tcn">اسم الصف أو المدرسة</label><input id="tcn" type="text" maxlength="40" placeholder="مثلاً: الثالث ب · مدرسة الأمل"></div><button class="btn teal" type="submit">إنشاء الصف</button>${msgHTML()}</form>
  ${cl?`<button class="btn ghost" data-act="tc_del" data-c="${cl.code}">حذف هالصف</button>`:''}`;
  V.querySelector('#tcf').addEventListener('submit',async e=>{e.preventDefault();const n=val('tcn');if(!n){ui.msg={t:'اكتب اسم الصف.'};return viewTeacher()}
    if(C.length>=8){ui.msg={t:'وصلت للحد الأعلى (٨ صفوف).'};return viewTeacher()}
    try{ui.tcCode=await API.classCreate({name:n});ui.msg={ok:true,t:'تم إنشاء الصف ✓'}}catch(err){ui.msg={t:errMsg(err)}}viewTeacher()});
}
VIEWS.league=viewLeague;VIEWS.teacher=viewTeacher;

document.addEventListener('click',async e=>{const b=e.target.closest('[data-act]');if(!b||b.disabled)return;const a=b.dataset.act;
  if(a==='lg_per'){ui.lgPer=b.dataset.p;viewLeague()}
  else if(a==='lg_toggle'){S.noBoard=!S.noBoard;save();viewParent()}
  else if(a==='tc_sel'){ui.tcCode=b.dataset.c;viewTeacher()}
  else if(a==='tc_del'){if(!confirm('متأكد بدك تحذف الصف؟'))return;try{await API.classDel(b.dataset.c);ui.tcCode=null}catch(err){}viewTeacher()}
  else if(a==='cls_join'){const code=normCode(val('clsin'));if(code.length!==6){ui.clsMsg={t:'الرمز لازم يكون ٦ أرقام.'};return viewParent()}
    busy(b);try{const c=await API.classGet(code);if(!c){ui.clsMsg={t:'ما في صف بهالرمز. تأكد منه مع الأستاذ.'};return viewParent()}
      await API.updateChild(APP.child.id,{cls:code});APP.child.cls=code;ui.clsName=c.name;memberSync();ui.clsMsg={ok:true,t:`انضم ${APP.child.name} لصف «${c.name}» ✓`}}
    catch(err){ui.clsMsg={t:errMsg(err)}}viewParent()}
  else if(a==='cls_leave'){const code=APP.child.cls;busy(b);try{await API.memberDel(code,APP.child.id).catch(()=>{});await API.updateChild(APP.child.id,{cls:null});APP.child.cls=null;ui.clsMsg={ok:true,t:'خرج من الصف.'}}catch(err){ui.clsMsg={t:errMsg(err)}}viewParent()}
});
})();
