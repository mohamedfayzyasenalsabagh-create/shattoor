/* شطّور — تذكيرات تجديد الاشتراك على واتساب (لوحة الإدارة ← تذكيرات)
   كل وليّ أمر بيطلع مرة وحدة بكل مرحلة، برسالة جاهزة فيها أسماء أطفاله والأسعار.
   بس تضغط «ابعت واتساب» بيتسجّل إنو تذكّر (بملف الأهل) حتى ما يرجع يطلع بنفس المرحلة. */
(function(){
const ST={d0:{t:'بينتهي اليوم أو بكرا',e:'🔴',o:0},d3:{t:'بينتهي خلال ٣ أيام',e:'🟠',o:1},d7:{t:'بينتهي خلال أسبوع',e:'🟡',o:2},
  tr:{t:'خلصت التجربة المجانية وما اشترك',e:'🎁',o:3},x:{t:'انتهى اشتراكه (آخر ٣٠ يوم)',e:'⚪',o:4}};
const cur=()=>APP.set.currency||'ل.س';
function priceLine(){const P=(APP.set.plans||[]).filter(p=>p.on!==false&&+p.price>0);if(!P.length)return'';
  return '💰 الأسعار لكل صف: '+P.map(p=>p.name+' '+fmtNum(p.price)+' '+cur()).join(' · ')}
const names=L=>{const n=[...new Set(L.map(a=>a.k.name))];return n.length<=1?n[0]||'طفلك':n.slice(0,-1).join('، ')+' و'+n[n.length-1]};
const whenTxt=l=>l<=0?'بينتهي اليوم':l===1?'بينتهي بكرا':'بينتهي بعد '+ar(l)+' أيام';
const STEPS='للتجديد: افتح تطبيق شطّور ← «الاشتراك» ← اختار الباقة وطريقة الدفع ← ابعت الإيصال، وبيتفعّل بسرعة ✅';

function message(x){const many=new Set(x.items.map(a=>a.k.name)).size>1,H=many?'هم':'ه',pn=(x.name||'').trim(),hi='مرحباً'+(pn?' '+pn:'')+' 🌟',kn=names(x.items),pl=priceLine(),note=(ui.rmNote||'').trim();
  let m;
  if(x.st==='d0'||x.st==='d3'||x.st==='d7'){
    const gs=[...new Set(x.items.map(a=>'الصف '+GRADES[a.g-1]))].join(' و');
    m=`${hi}\nاشتراك ${kn} بتطبيق شطّور (${gs}) ${whenTxt(x.left)} ⏳\nلحتى ما ${many?'ينقطعوا':'ينقطع'} عن الدروس وتحدي اليوم والامتحانات، جدّد من هلق.\n${STEPS}`;
  }else if(x.st==='tr'){
    m=`${hi}\nخلصت التجربة المجانية لـ ${kn} بتطبيق شطّور 🎁\nكل تقدّم${H} ونقاط${H} محفوظين، وبيرجع كل شي مفتوح أول ما تشترك: دروس منهاج ٢٠٢٥–٢٠٢٦، تحدي يومي، امتحانات، ومسابقة العيلة.\n${STEPS}`;
  }else{
    m=`${hi}\nاشتقنا لـ ${kn} بتطبيق شطّور 💙\nانتهى الاشتراك من ${x.ago<=1?'يوم':ar(x.ago)+' أيام'}، بس كل تقدّم${H} ونقاط${H} لسا محفوظين وبيرجعوا أول ما تجدّد.\n${STEPS}`;
  }
  if(pl)m+='\n'+pl;if(note)m+='\n'+note;
  return m+'\nشكراً لثقتكم 🙏';
}

function build(st){const t=today(),td=APP.set.trialDays||0,adm=normPhone(CONFIG.adminPhone),byP={};
  st.kids.forEach(k=>{(byP[k.phone]=byP[k.phone]||[]).push(k)});
  const out=[];
  st.parents.forEach(p=>{if(p.phone===adm)return;const kids=byP[p.phone]||[];
    const act=[],old=[];kids.forEach(k=>Object.entries(k.subs||{}).forEach(([g,s])=>{(s.until>=t?act:old).push({k,g:+g,s})}));
    let r=null;
    if(act.length){const soon=act.filter(a=>a.s.until-t<=7).sort((a,b)=>a.s.until-b.s.until);
      if(soon.length){const l=soon[0].s.until-t,stg=l<=1?'d0':l<=3?'d3':'d7';r={st:stg,left:l,items:soon.filter(a=>a.s.until-t<=(stg==='d0'?1:stg==='d3'?3:7)),key:stg+':'+soon[0].s.until}}}
    else if(old.length){const last=old.sort((a,b)=>b.s.until-a.s.until)[0],ago=t-last.s.until;
      if(ago<=30){const fresh=old.filter(a=>a.s.until===last.s.until||t-a.s.until<=30);r={st:'x',ago,items:fresh,key:'x:'+last.s.until}}}
    else if(kids.length&&p.created!=null){const end=p.created+td,ago=t-end;
      if(ago>=0&&ago<=21)r={st:'tr',ago,items:kids.map(k=>({k,g:k.grade||1})),key:'tr:'+end}}
    if(r){r.phone=p.phone;r.name=p.name;r.sent=p.rem&&p.rem.k===r.key?p.rem.d:null;out.push(r)}});
  return out.sort((a,b)=>ST[a.st].o-ST[b.st].o||(a.left||0)-(b.left||0));
}

async function admRem(box){
  let st;try{st=await API.stats()}catch(e){box.innerHTML=`<p class="msg no">${errMsg(e)}</p>`;return}
  const L=build(st),todo=L.filter(x=>!x.sent),done=L.filter(x=>x.sent);ui.rmList=L;
  const sec=k=>{const R=todo.filter(x=>x.st===k);if(!R.length)return'';
    return`<section class="panel"><h3>${ST[k].e} ${ST[k].t} (${ar(R.length)})</h3>${R.map(row).join('')}</section>`};
  const row=x=>`<div class="exp rm-row"><div style="flex:1;min-width:0"><b>${esc(x.name||'بدون اسم')}</b>
      <div class="muted small"><span dir="ltr">${esc(x.phone)}</span> · ${x.items.map(a=>esc(a.k.name)+' ('+GRADES[a.g-1]+')').join('، ')}</div>
      <div class="muted small">${x.st==='tr'?'خلصت تجربته '+(x.ago<=0?'اليوم':'من '+ar(x.ago)+' يوم'):x.st==='x'?'انتهى من '+ar(x.ago)+' يوم':whenTxt(x.left)}${x.sent!=null?' · ✓ تذكّر '+fmtDay(x.sent,{day:'numeric',month:'short'}):''}</div></div>
    <div style="display:flex;flex-direction:column;gap:6px"><a class="btn ${x.sent!=null?'ghost':'teal'} sm" data-rm="${x.phone}" href="${waLink(x.phone,message(x))}" target="_blank" rel="noopener">${x.sent!=null?'ابعت مرة تانية':'ابعت واتساب'}</a>
    <button class="btn ghost sm" data-act="rm_prev" data-p="${x.phone}">شوف الرسالة</button></div></div>
    ${ui.rmPrev===x.phone?`<pre class="rm-prev">${esc(message(x))}</pre>`:''}`;
  box.innerHTML=`<section class="panel"><h3>🔔 تذكيرات التجديد على واتساب</h3>
    <p class="muted small">كل يوم افتح هالصفحة واضغط «ابعت واتساب» لكل اسم. الرسالة جاهزة بأسماء الأطفال والأسعار. بعد ما تبعت، الاسم بينتقل لـ «تم التذكير» وما بيرجع إلا بالمرحلة الجاية.</p>
    <div class="tiles" style="grid-template-columns:repeat(3,1fr)"><div class="tile"><b>${fmtNum(todo.length)}</b><span>لازم تذكّرهم</span></div><div class="tile ok"><b>${fmtNum(done.length)}</b><span>تذكّروا</span></div><div class="tile"><b>${fmtNum(todo.filter(x=>x.st==='d0').length)}</b><span>بينتهي اليوم/بكرا</span></div></div>
    <div class="field"><label for="rmn">سطر إضافي لكل الرسائل (اختياري، مثلاً عرض أو كود خصم)</label><input id="rmn" type="text" value="${esc(ui.rmNote||'')}" placeholder="مثال: عرض هالأسبوع: خصم ١٠٪ على السنوي 🎉"></div>
    </section>
    ${todo.length?Object.keys(ST).map(sec).join(''):'<section class="panel"><p class="muted center">ما في حدا لازم تذكّره اليوم 👌</p></section>'}
    ${done.length?`<section class="panel"><h3>✓ تم التذكير (${ar(done.length)})</h3>${done.map(row).join('')}</section>`:''}`;
  const n=box.querySelector('#rmn');if(n)n.addEventListener('change',()=>{ui.rmNote=n.value;try{localStorage.setItem('shattoor_rmnote',n.value)}catch(e){}admRem(box)});
  setRemBadge(todo.length);
}
function setRemBadge(n){const b=document.querySelector('.admtabs [data-t=rem]');if(b)b.innerHTML='تذكيرات'+(n?` <i class="badge">${ar(n)}</i>`:' 🔔')}
try{ui.rmNote=ui.rmNote||localStorage.getItem('shattoor_rmnote')||''}catch(e){}
window.SUBADM=window.SUBADM||{};SUBADM.rem=admRem;

// عدّاد على تبويب التذكيرات حتى لو كنت بتبويب تاني
const _va=viewAdmin;viewAdmin=async function(){await _va();if((ui.tab||'req')!=='rem'&&isAdmin())API.stats().then(st=>setRemBadge(build(st).filter(x=>!x.sent).length)).catch(()=>{})};
VIEWS.admin=viewAdmin;

document.addEventListener('click',async e=>{
  const a=e.target.closest('a[data-rm]');
  if(a){const x=(ui.rmList||[]).find(r=>r.phone===a.dataset.rm);if(x){const d=today();try{await API.markRem(x.phone,{k:x.key,d})}catch(err){}x.sent=d;
      setTimeout(()=>{if(ui.tab==='rem'){const box=document.getElementById('adm');if(box)admRem(box)}},1200)}return}
  const b=e.target.closest('[data-act]');if(!b)return;
  if(b.dataset.act==='rm_prev'){ui.rmPrev=ui.rmPrev===b.dataset.p?null:b.dataset.p;const box=document.getElementById('adm');if(box)admRem(box)}
});
})();
