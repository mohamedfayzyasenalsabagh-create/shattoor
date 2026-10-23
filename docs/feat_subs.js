/* شطّور · نظام الاشتراكات (على نمط تطبيق نبض مع إضافات)
 * - باقات يحددها الأدمن (اسم، مدة بالأشهر، سعر رقمي، تفعيل/إخفاء) + عملة
 * - خصم الإخوة + أكواد خصم
 * - إثبات الدفع: صورة إيصال مضغوطة و/أو رقم عملية (شام كاش بيتطلب صورة)
 * - سجل دفعات للأهل مع سبب الرفض ورقم فاتورة وإيصال كصورة
 * - مراجعة الأدمن: صورة الإيصال، كشف رقم العملية المكرر، قبول ذرّي برقم فاتورة، رفض بسبب
 * - إشعار للأهل عند التفعيل أو الرفض
 * © 2026 جميع الحقوق محفوظة · mohamedfayzyasenalsabagh@gmail.com */
(function(){
const css=document.createElement('style');css.textContent=`
.sb-status{border-radius:24px;padding:16px;color:#fff;display:flex;flex-direction:column;gap:8px;box-shadow:0 8px 20px -12px #0006}
.sb-status.active{background:linear-gradient(135deg,#0E7C77,#2E9A57)}.sb-status.trial{background:linear-gradient(135deg,#2E7DB8,#4A9AD4)}
.sb-status.expired,.sb-status.none{background:linear-gradient(135deg,#B8384E,#DD3F57)}.sb-status.gift{background:linear-gradient(135deg,#C98A0A,#FFB020)}
.sb-status .top{display:flex;justify-content:space-between;align-items:center;gap:8px}
.sb-status .chip{background:#ffffff33;border-radius:999px;padding:3px 12px;font-weight:800;font-size:.85rem;white-space:nowrap}
.sb-status h2{font-size:1.5rem;margin:0}.sb-status small{opacity:.92}
.sb-prog{height:8px;border-radius:99px;background:#ffffff40;overflow:hidden}.sb-prog i{display:block;height:100%;background:#fff;border-radius:99px}
.sb-step{display:flex;align-items:center;gap:8px;font-family:var(--display);font-size:1.25rem;margin:14px 0 8px}
.sb-step b{width:30px;height:30px;border-radius:50%;background:var(--teal);color:#fff;display:grid;place-items:center;font-family:var(--body);font-size:1rem}
.sb-plans{display:grid;grid-template-columns:1fr 1fr;gap:10px}
.sb-plan{position:relative;display:flex;flex-direction:column;gap:3px;align-items:flex-start;text-align:start;background:var(--card);border:2px solid var(--line);border-radius:20px;padding:14px 12px 12px;box-shadow:0 4px 0 var(--line)}
.sb-plan.on{border-color:var(--teal);background:#E6F3F1;box-shadow:0 4px 0 var(--teal)}
.sb-plan b{font-size:1.05rem}.sb-plan .pr{font-family:var(--display);font-size:1.35rem;color:var(--teal);line-height:1.2}
.sb-plan small{color:var(--muted);font-size:.78rem}
.sb-plan .bdg{position:absolute;top:-10px;inset-inline-end:10px;background:var(--sun);color:#4A3300;font-size:.7rem;font-weight:800;border-radius:999px;padding:2px 9px}
.sb-plan .bdg.me{background:var(--teal);color:#fff}
.sb-total{background:#FFF6E3;border:1.5px dashed #E6B53A;border-radius:18px;padding:12px 14px;display:flex;flex-direction:column;gap:4px;margin-top:10px}
.sb-total .row{display:flex;justify-content:space-between}.sb-total .sum{font-family:var(--display);font-size:1.5rem;color:#8A5A00}
.sb-meths{display:flex;flex-wrap:wrap;gap:8px}
.sb-meths button{border:2px solid var(--line);background:var(--card);border-radius:14px;padding:10px 14px;font-weight:800}
.sb-meths button.on{border-color:var(--teal);background:#E6F3F1;color:var(--teal)}
.sb-pay{background:var(--card);border:1.5px solid var(--line);border-radius:18px;padding:12px;margin-top:10px;display:flex;flex-direction:column;gap:8px}
.sb-num{display:flex;align-items:center;justify-content:space-between;gap:8px;background:#F6F9F9;border-radius:12px;padding:8px 10px;font-weight:800;direction:ltr}
.sb-proof{display:flex;flex-direction:column;gap:10px}
.sb-drop{border:2px dashed var(--line);border-radius:18px;padding:16px;text-align:center;color:var(--muted);font-weight:700;background:#FAFCFC;cursor:pointer}
.sb-drop img{max-width:100%;max-height:240px;border-radius:12px;display:block;margin:0 auto 8px}
.sb-hist{display:flex;flex-direction:column;gap:8px}
.sb-h{background:var(--card);border:1.5px solid var(--line);border-radius:16px;padding:10px 12px;display:flex;flex-direction:column;gap:4px}
.sb-h .top{display:flex;justify-content:space-between;align-items:center;gap:6px}
.sb-chip{border-radius:999px;padding:2px 10px;font-size:.75rem;font-weight:800;white-space:nowrap}
.sb-chip.pending{background:#FFF3C4;color:#7A5A00}.sb-chip.approved{background:#DDF2E4;color:#1F7A42}.sb-chip.rejected{background:#FCE0E5;color:#8A1C2E}.sb-chip.merged{background:#E8EEF0;color:#55697A}
.sb-reason{color:#8A1C2E;font-size:.85rem;font-weight:700}
.sb-faq details{background:var(--card);border:1.5px solid var(--line);border-radius:14px;padding:10px 12px;margin-bottom:8px}
.sb-faq summary{font-weight:800;cursor:pointer}.sb-faq p{margin:8px 0 0;color:var(--muted)}
.sb-thumb{width:72px;height:72px;object-fit:cover;border-radius:12px;border:1.5px solid var(--line);cursor:zoom-in;flex:none}
.sb-ov{position:fixed;inset:0;z-index:60;background:#000c;display:grid;place-items:center;padding:16px}
.sb-ov img{max-width:100%;max-height:90vh;border-radius:12px}
.sb-warn{background:#FCE0E5;color:#8A1C2E;border-radius:10px;padding:4px 10px;font-weight:800;font-size:.8rem}
.sb-note{position:fixed;inset:0;z-index:55;background:#0007;display:flex;align-items:flex-end;justify-content:center}
.sb-note>div{background:var(--card);width:100%;max-width:520px;border-radius:26px 26px 0 0;padding:20px 18px calc(18px + env(safe-area-inset-bottom,0px));display:flex;flex-direction:column;align-items:center;gap:10px;text-align:center;animation:up .3s ease-out}
.sb-plan-ed{display:grid;grid-template-columns:1.3fr .7fr 1fr auto;gap:6px;align-items:center;margin-bottom:6px}
.sb-plan-ed input{min-width:0;padding:8px;border-radius:10px;border:1.5px solid var(--line);font:inherit}
.admtabs{grid-template-columns:repeat(3,1fr)!important;row-gap:4px}.admtabs button{font-size:.85rem;padding-inline:2px}
.ac-row{display:flex;align-items:center;gap:10px;background:var(--card);border:1.5px solid var(--line);border-radius:16px;padding:10px 12px;text-align:start;width:100%}
.ac-row .av{width:42px;height:42px;border-radius:50%;display:grid;place-items:center;font-weight:800;color:#fff;flex:none}
.ac-row .t{flex:1;min-width:0;display:flex;flex-direction:column;gap:2px}.ac-row .t b{overflow:hidden;text-overflow:ellipsis;white-space:nowrap}
.ac-row small{color:var(--muted);font-size:.78rem}
.ac-st{border-radius:999px;padding:3px 10px;font-size:.75rem;font-weight:800;white-space:nowrap}
.ac-st.sub{background:#DDF2E4;color:#1F7A42}.ac-st.trial{background:#E3EEF9;color:#2E7DB8}.ac-st.exp{background:#FCE0E5;color:#8A1C2E}.ac-st.none{background:#EEF2F4;color:#55697A}
.ac-new{background:var(--sun);color:#4A3300;border-radius:999px;padding:1px 8px;font-size:.7rem;font-weight:800;margin-inline-start:6px}
.admtabs .badge{display:inline-grid;place-items:center;min-width:18px;height:18px;border-radius:9px;background:var(--pom);color:#fff;font-style:normal;font-size:.7rem;padding:0 4px}
.sb-reasons{display:flex;flex-wrap:wrap;gap:6px}.sb-reasons button{border:1.5px solid var(--line);background:#fff;border-radius:999px;padding:5px 10px;font-size:.8rem;font-weight:700}
`;document.head.appendChild(css);

/* ---------- أدوات ---------- */
const CUR=()=>APP.set.currency||'ل.س';
const money=n=>fmtNum(Math.round(n))+' '+CUR();
const showAmt=r=>typeof r.amount==='number'?money(r.amount):esc(r.amount||'');
const activePlans=()=>(APP.set.plans||[]).filter(p=>p.on!==false);
const round100=n=>Math.max(0,Math.round(n/100)*100);
const famActive=()=>APP.child&&APP.set.family>0&&APP.kids.some(k=>k.id!==APP.child.id&&Object.values(k.subs||{}).some(x=>x.until>=today()));
function calc(p){const base=+p.price||0,fam=famActive()?APP.set.family:0,cp=(ui.sbCp&&ui.sbCp.pct)||0;
  const total=base?round100(base*(100-fam)/100*(100-cp)/100):0;return{base,fam,cp,total}}
function stateOf(c,g){const s=subOf(c,g),t=today();
  if(s&&s.plan==='gift')return{k:'gift',s};
  if(s&&s.until>=t)return{k:'active',s,left:s.until-t};
  const tl=trialLeft();if(tl>0)return{k:'trial',left:tl,s};
  return{k:s?'expired':'none',s}}
const MNAME={syriatel:'سيريتل كاش',mtn:'MTN كاش',sham:'شام كاش'};
const methName=m=>MNAME[m]||PAY[m]||m||'';
const statusName={pending:'قيد المراجعة',approved:'مقبول ✓',rejected:'مرفوض',merged:'دُمج بتفعيل يدوي'};
const invNo=n=>'SH-'+String(n).padStart(6,'0');
function compress(file){return new Promise((res,rej)=>{const r=new FileReader();r.onerror=rej;r.onload=()=>{const im=new Image();im.onerror=rej;im.onload=()=>{
  let max=1200,q=.72,out='';for(let i=0;i<7;i++){const k=Math.min(1,max/Math.max(im.width,im.height)),c=document.createElement('canvas');c.width=Math.round(im.width*k);c.height=Math.round(im.height*k);
    const x=c.getContext('2d');x.fillStyle='#fff';x.fillRect(0,0,c.width,c.height);x.drawImage(im,0,0,c.width,c.height);out=c.toDataURL('image/jpeg',q);if(out.length<600000)break;q-=.1;max=Math.round(max*.85)}
  res(out)};im.src=r.result};r.readAsDataURL(file)})}
function overlay(src){const d=document.createElement('div');d.className='sb-ov';d.innerHTML=`<img src="${src}" alt="صورة الإيصال">`;d.onclick=()=>d.remove();document.body.appendChild(d)}
const copyBtn=t=>`<button class="btn ghost sm" data-act="sb_copy" data-t="${esc(t)}">نسخ</button>`;

/* ---------- صفحة الاشتراك للأهل ---------- */
function statusCard(c){const g=c.grade,st=stateOf(c,g),p=st.s&&PLANS[st.s.plan];
  const chip={active:'فعّال',trial:'تجربة مجانية',expired:'منتهي',none:'غير مشترك',gift:'هدية'}[st.k];
  let body='';
  if(st.k==='gift')body='<small>اشتراك مدى الحياة 🎁</small>';
  else if(st.k==='active'){const tot=(p&&p.days)||30,used=Math.max(0,Math.min(1,1-st.left/tot));body=`<small>${p?'باقة '+esc(p.name)+' · ':''}ينتهي ${fmtDay(st.s.until,{day:'numeric',month:'long',year:'numeric'})} · باقي ${ar(st.left)} يوم</small><div class="sb-prog"><i style="width:${Math.round(100*(1-used))}%"></i></div>`}
  else if(st.k==='trial')body=`<small>باقي ${ar(st.left)} ${st.left===1?'يوم':'أيام'} من التجربة المجانية. اشترك هلق لتضل كل الميزات مفتوحة.</small>`;
  else if(st.k==='expired')body=`<small>انتهى ${fmtDay(st.s.until,{day:'numeric',month:'long'})}. نتائج ${esc(c.name)} ونقاطه محفوظة، وبترجع تنفتح كل الدروس أول ما تجدّد.</small>`;
  else body='<small>اشترك لتنفتح الدروس والتمارين والامتحانات لكل المواد. حديث اليوم مجاني دائماً.</small>';
  return`<section class="sb-status ${st.k}"><div class="top"><h2>${esc(c.name)} · الصف ${GRADES[g-1]}</h2><span class="chip">${chip}</span></div>${body}</section>`}

function planCards(cur){const P=activePlans(),m=PLANS.monthly&&PLANS.monthly.price,sel=ui.sbPlan&&P.find(p=>p.id===ui.sbPlan)?ui.sbPlan:(P.find(p=>p.id==='yearly')||P[0]||{}).id;ui.sbPlan=sel;
  let best=null,bestSave=0;P.forEach(p=>{if(m&&p.months>1&&p.price){const sv=1-p.price/(m*p.months);if(sv>bestSave){bestSave=sv;best=p.id}}});
  return`<div class="sb-plans">${P.map(p=>{const save=m&&p.months>1&&p.price?Math.round(100*(1-p.price/(m*p.months))):0;
    return`<button class="sb-plan ${p.id===sel?'on':''}" data-act="sb_plan" data-p="${p.id}">${cur===p.id?'<span class="bdg me">باقتك</span>':p.id===best&&save>0?'<span class="bdg">الأكثر توفيراً</span>':''}
      <b>${esc(p.name)}</b><span class="pr">${p.price?money(p.price):'يُحدَّد لاحقاً'}</span>
      <small>${p.months===1?'شهر واحد':ar(p.months)+' أشهر'}${p.price&&p.months>1?' · '+money(p.price/p.months)+' بالشهر':''}</small>${save>0?`<small style="color:#1F7A42;font-weight:800">وفّر ${ar(save)}٪</small>`:''}</button>`}).join('')}</div>`}

function viewSub2(){
  if(!APP.child)return go('kids');
  const c=APP.child,g=c.grade,pend=pendingFor(c,g),st=stateOf(c,g),pays=payList();
  const meth=ui.sbMeth&&pays.includes(ui.sbMeth)?ui.sbMeth:pays[0];ui.sbMeth=meth;
  const hist=(APP.reqs||[]).filter(r=>r.status!=='merged').sort((a,b)=>tsDay(b.created)-tsDay(a.created));
  let main='';
  if(pend){main=`<section class="panel"><h3>⏳ طلبك قيد المراجعة</h3>
    <p>طلبت باقة <b>${esc(planName(pend.plan))}</b> للصف ${GRADES[pend.grade-1]}${pend.amount?' بمبلغ <b>'+showAmt(pend)+'</b>':''}${pend.method?' عبر '+methName(pend.method):''}.</p>
    <p class="muted small">بنراجع الدفعة ونفعّل الاشتراك عادةً خلال ساعات. رح يوصلك إشعار هون أول ما يتفعّل.</p>
    <div class="row"><button class="btn teal" data-act="sb_recheck">تحقّق من التفعيل</button>${APP.set.whatsapp?`<a class="btn ghost sm" target="_blank" rel="noopener" href="${waLink(normPhone(APP.set.whatsapp)||APP.set.whatsapp,`مرحباً، أرسلت طلب اشتراك لـ ${c.name} (الصف ${GRADES[g-1]}) من الرقم ${APP.user.phone}`)}">راسلنا</a>`:''}</div>${msgHTML()}</section>`}
  else{
    const P=activePlans(),p=P.find(x=>x.id===ui.sbPlan)||P[0];
    if(!P.length)main=`<section class="panel"><p>الاشتراكات رح تفتح قريباً. تواصل معنا على واتساب ${waHTML()}.</p></section>`;
    else{const k=calc(p);
    main=`<div class="sb-step"><b>١</b>اختار الباقة</div>${planCards(st.s&&st.s.until>=today()?st.s.plan:null)}
    ${famActive()?`<div class="status ok" style="margin-top:10px"><span>🎁 خصم الإخوة ${ar(APP.set.family)}٪ مطبّق تلقائياً</span></div>`:''}
    <div class="row" style="margin-top:10px;gap:6px">${ui.sbCp?`<span class="status ok" style="flex:1"><span>🏷️ كود «${esc(ui.sbCp.code)}»: خصم ${ar(ui.sbCp.pct)}٪</span></span><button class="btn ghost sm" data-act="sb_cpx">إلغاء</button>`
      :`<input id="sbcp" type="text" dir="ltr" placeholder="عندك كود خصم؟" style="flex:1;text-transform:uppercase" maxlength="20"><button class="btn ghost sm" data-act="sb_cp">تطبيق</button>`}</div>
    ${p.price?`<div class="sb-total"><div class="row"><span>سعر الباقة</span><span>${money(k.base)}</span></div>${k.fam?`<div class="row"><span>خصم الإخوة</span><span>−${ar(k.fam)}٪</span></div>`:''}${k.cp?`<div class="row"><span>كود الخصم</span><span>−${ar(k.cp)}٪</span></div>`:''}<div class="row"><b>المطلوب تحويله</b><span class="sum">${money(k.total)}</span></div></div>`:''}
    <div class="sb-step"><b>٢</b>ادفع</div>
    ${pays.length?`<div class="sb-meths">${pays.map(m=>`<button class="${m===meth?'on':''}" data-act="sb_meth" data-m="${m}">${methName(m)}</button>`).join('')}</div>
      <div class="sb-pay">${meth==='sham'?shamHTML():`<span>حوّل ${p.price?'<b>'+money(k.total)+'</b>':'المبلغ'} عبر <b>${methName(meth)}</b> إلى الرقم:</span><div class="sb-num"><span class="sel">${esc(APP.set.pay[meth])}</span>${copyBtn(APP.set.pay[meth])}</div>`}</div>`
      :`<p>تواصل معنا على واتساب ${waHTML()} لنعطيك طريقة الدفع.</p>`}
    <div class="sb-step"><b>٣</b>أرسل إثبات الدفع</div>
    <div class="sb-proof">
      <label class="sb-drop" for="sbfile">${ui.sbRcpt?`<img src="${ui.sbRcpt}" alt="صورة الإيصال"><span>✓ الصورة جاهزة · اكبس لتغييرها</span>`:'📷 اكبس لترفع صورة الإيصال (لقطة شاشة التحويل)'}</label>
      <input id="sbfile" type="file" accept="image/*" hidden>
      <div class="field"><label for="sbtxn">رقم العملية (إذا ما رفعت صورة)</label><input id="sbtxn" type="text" dir="ltr" inputmode="numeric" value="${esc(ui.sbTxn||'')}" placeholder="مثلاً: 123456789"></div>
      <button class="btn teal big" data-act="sb_send">أرسل طلب التفعيل</button>${msgHTML()}
      <p class="muted small">بإرسالك الطلب بتوافق إنو الاشتراك لصف ${GRADES[g-1]} لـ ${esc(c.name)} فقط، وبيتفعّل بعد التأكد من وصول المبلغ.</p>
    </div>`}}
  V.innerHTML=`${back('home','الاشتراك')}${statusCard(c)}${main}
  ${hist.length?`<div class="sb-step" style="font-size:1.1rem">🧾 سجل الدفعات</div><div class="sb-hist">${hist.map(r=>`<div class="sb-h"><div class="top"><b>${esc(r.childName||'')} · الصف ${GRADES[(r.grade||1)-1]}</b><span class="sb-chip ${r.status}">${statusName[r.status]||r.status}</span></div>
    <span class="muted small">${esc(planName(r.plan))} · ${showAmt(r)}${r.method?' · '+methName(r.method):''} · ${fmtDay(tsDay(r.created),{day:'numeric',month:'short',year:'numeric'})}</span>
    ${r.status==='rejected'&&r.reason?`<span class="sb-reason">السبب: ${esc(r.reason)}</span>`:''}
    ${r.status==='approved'&&r.invoice?`<div class="row between"><span class="muted small">فاتورة ${invNo(r.invoice)}${r.until?' · حتى '+fmtDay(r.until,{day:'numeric',month:'short',year:'numeric'}):''}</span><button class="btn ghost sm" data-act="sb_rcpt" data-id="${r.id}">الإيصال</button></div>`:''}</div>`).join('')}</div>`:''}
  <div class="sb-step" style="font-size:1.1rem">❓ أسئلة شائعة</div>
  <div class="sb-faq">
    <details><summary>كيف بيتفعّل الاشتراك؟</summary><p>بتحوّل المبلغ، وبترفع صورة الإيصال أو رقم العملية. منتأكد من الدفعة ومنفعّل الاشتراك عادةً خلال ساعات، وبيوصلك إشعار بالتطبيق.</p></details>
    <details><summary>إذا جدّدت قبل ما يخلص، بتضيع الأيام الباقية؟</summary><p>لا، المدة الجديدة بتنضاف على الأيام الباقية.</p></details>
    <details><summary>شو بصير لما يخلص الاشتراك؟</summary><p>الدروس والتمارين بتتسكّر، بس كل نتائج الطفل ونقاطه بتضل محفوظة، وحديث اليوم بيضل مجاني.</p></details>
    <details><summary>عندي أكتر من ولد؟</summary><p>كل صف إله اشتراك لحاله، والولد التاني وما بعده بياخد خصم الإخوة${APP.set.family?' '+ar(APP.set.family)+'٪':''} تلقائياً.</p></details>
    <details><summary>بقدر أسترجع المبلغ؟</summary><p>المبلغ ما بيرجع بعد بداية مدة الاشتراك. إذا صار غلط بالتحويل تواصل معنا.</p></details>
  </div>
  ${APP.set.school?`<section class="panel"><h3>🏫 للمدارس والأساتذة</h3><p class="muted">${esc(APP.set.school)}</p><button class="btn ghost sm" data-act="go" data-v="teacher">لوحة الأستاذ</button></section>`:''}`;
  const f=V.querySelector('#sbfile');if(f)f.addEventListener('change',async e=>{const file=e.target.files[0];if(!file)return;ui.sbTxn=(V.querySelector('#sbtxn')||{}).value||ui.sbTxn;try{ui.sbRcpt=await compress(file);ui.msg=null}catch(err){ui.msg={t:'ما قدرنا نقرأ الصورة. جرّب صورة تانية.'}}viewSub2()});
}
VIEWS.sub=viewSub2;

/* ---------- الإيصال كصورة ---------- */
async function makeReceipt(r){try{await document.fonts.ready}catch(e){}
  const W=1080,H=1350,cv=document.createElement('canvas');cv.width=W;cv.height=H;const x=cv.getContext('2d');const D="'Lalezar','Tajawal',sans-serif",B="'Tajawal',sans-serif";
  x.fillStyle='#E6F3F1';x.fillRect(0,0,W,H);x.fillStyle='#fff';x.beginPath();x.roundRect?x.roundRect(60,60,W-120,H-120,40):x.rect(60,60,W-120,H-120);x.fill();
  x.fillStyle='#0E7C77';x.beginPath();x.roundRect?x.roundRect(60,60,W-120,230,[40,40,0,0]):x.rect(60,60,W-120,230);x.fill();
  x.direction='rtl';x.textAlign='center';x.fillStyle='#fff';x.font=`90px ${D}`;x.fillText('شطّور',W/2,180);x.font=`40px ${B}`;x.fillText('إيصال اشتراك',W/2,245);
  x.fillStyle='#1F7A42';x.font=`54px ${D}`;x.fillText('مدفوع ✓',W/2,380);
  const rows=[['رقم الفاتورة',invNo(r.invoice)],['التاريخ',fmtDay(tsDay(r.done||r.created),{day:'numeric',month:'long',year:'numeric'})],['وليّ الأمر',(r.parentName||'')+' · '+(r.phone||'')],['الطفل',r.childName||''],['الصف',GRADES[(r.grade||1)-1]],['الباقة',planName(r.plan)],['صالح حتى',r.until?fmtDay(r.until,{day:'numeric',month:'long',year:'numeric'}):'—'],['المبلغ',typeof r.amount==='number'?fmtNum(r.amount)+' '+(r.currency||CUR()):String(r.amount||'')],['طريقة الدفع',methName(r.method)||'—'],['رقم العملية',r.txn||'—']];
  rows.forEach((rw,i)=>{const y=470+i*72;x.fillStyle=i%2?'#fff':'#F6F9F9';x.fillRect(110,y-48,W-220,68);x.textAlign='right';x.fillStyle='#55697A';x.font=`34px ${B}`;x.fillText(rw[0],W-140,y);x.textAlign='left';x.fillStyle='#15283A';x.font=`36px ${B}`;x.fillText(String(rw[1]),140,y)});
  x.textAlign='center';x.fillStyle='#55697A';x.font=`26px ${B}`;x.fillText('شكراً لثقتكم 🌟 · © 2026 جميع الحقوق محفوظة',W/2,H-110);
  return cv.toDataURL('image/png')}
async function viewRcpt(){const r=(APP.reqs||[]).find(x=>x.id===ui.rcId);if(!r)return go('sub');
  V.innerHTML=`${back('sub','الإيصال')}<p class="muted">جارِ التجهيز…</p>`;const url=await makeReceipt(r);ui.rcUrl=url;
  V.innerHTML=`${back('sub','إيصال '+invNo(r.invoice))}<img src="${url}" alt="إيصال" style="width:100%;border-radius:18px;box-shadow:0 8px 24px -10px #0004">
  <div style="display:flex;flex-direction:column;gap:10px;margin-top:12px"><button class="btn teal" data-act="sb_rshare">📤 مشاركة</button>${typeof NATIVE!=='undefined'&&NATIVE&&NATIVE.saveImage?'<button class="btn ghost" data-act="sb_rsave">حفظ بالمعرض</button>':'<p class="muted center small">اضغط مطوّل على الصورة لتحفظها.</p>'}</div>`}
VIEWS.rcpt=viewRcpt;

/* ---------- إشعار التفعيل/الرفض ---------- */
function seen(){try{return JSON.parse(localStorage.getItem('shattoor_seenreq')||'{}')}catch(e){return{}}}
function markSeen(id){const s=seen();s[id]=1;try{localStorage.setItem('shattoor_seenreq',JSON.stringify(s))}catch(e){}}
function notify(){if(!APP.user||isAdmin())return;const s=seen();const r=(APP.reqs||[]).find(x=>(x.status==='approved'||x.status==='rejected')&&!s[x.id]&&tsDay(x.done||x.created)>=today()-30);if(!r||document.querySelector('.sb-note'))return;
  const ok=r.status==='approved',d=document.createElement('div');d.className='sb-note';
  d.innerHTML=`<div>${MASCOT(ok?'wow':'sad','mascot')}<h2>${ok?'🎉 تفعّل الاشتراك!':'ما قدرنا نفعّل الطلب'}</h2>
    <p>${ok?`اشتراك <b>${esc(r.childName)}</b> للصف ${GRADES[r.grade-1]} صار فعّال${r.until?' حتى '+fmtDay(r.until,{day:'numeric',month:'long',year:'numeric'}):''}. بالتوفيق!`:`طلب اشتراك ${esc(r.childName)} انرفض${r.reason?': <b>'+esc(r.reason)+'</b>':''}. فيك تبعت طلب جديد من صفحة الاشتراك.`}</p>
    <button class="btn ${ok?'teal':'sun'} wide big" data-act="sb_seen" data-id="${r.id}">${ok?'يلا نبلّش 🚀':'صفحة الاشتراك'}</button></div>`;
  document.body.appendChild(d);if(ok)confetti()}
const _home=VIEWS.home;VIEWS.home=function(){_home();setTimeout(notify,400)};

/* ---------- لوحة الأدمن ---------- */
const REASONS=['ما وصل المبلغ','المبلغ ناقص','صورة الإيصال مو واضحة','رقم العملية مستخدم قبل'];
async function admReq(box){
  let L=[];try{L=(await API.pending()).sort((a,b)=>tsDay(a.created)-tsDay(b.created))}catch(e){box.innerHTML=`<p class="msg no">${errMsg(e)}</p>`;return}
  ui.reqs=L;setBadge(L.length);
  box.innerHTML=msgHTML()+(L.length?L.map((r,i)=>`<section class="panel req">
    <div class="row between"><b>${esc(r.childName)} · الصف ${GRADES[r.grade-1]}</b><span class="tag trial">${esc(planName(r.plan))}</span></div>
    <div class="row between"><span>${esc(r.parentName||'')}</span><a dir="ltr" class="sel" href="${waLink(r.phone,'')}" target="_blank" rel="noopener">${esc(r.phone)}</a></div>
    <div class="row" style="gap:10px;align-items:flex-start">${r.receipt?`<img class="sb-thumb" src="${r.receipt}" data-act="sb_zoom" data-i="${i}" alt="الإيصال">`:'<span class="sb-thumb" style="display:grid;place-items:center;color:var(--muted);font-size:.7rem">بلا صورة</span>'}
      <div style="flex:1;display:flex;flex-direction:column;gap:3px"><b style="font-size:1.15rem;color:var(--teal)">${showAmt(r)}</b>
      <span class="muted small">${r.method?methName(r.method)+' · ':''}${fmtDay(tsDay(r.created),{day:'numeric',month:'short'})}${r.family?' · خصم إخوة':''}${r.coupon?' · كود '+esc(r.coupon):''}</span>
      ${r.txn?`<span class="small">رقم العملية: <b dir="ltr" class="sel">${esc(r.txn)}</b> <span id="dup${i}"></span></span>`:''}</div></div>
    ${ui.rejI===i?`<div class="field"><label>سبب الرفض (بيشوفه الأهل)</label><div class="sb-reasons">${REASONS.map(x=>`<button data-act="sb_rs" data-t="${x}">${x}</button>`).join('')}</div><input id="rjr" type="text" value="${esc(ui.rjr||'')}" placeholder="اكتب السبب"></div><div class="row"><button class="btn red" data-act="sb_no2" data-i="${i}">تأكيد الرفض</button><button class="btn ghost" data-act="sb_nox">إلغاء</button></div>`
      :`<div class="row"><button class="btn teal" data-act="sb_ok" data-i="${i}">تأكد الدفع، فعّل</button><button class="btn ghost" data-act="sb_no" data-i="${i}">رفض</button></div>`}
  </section>`).join(''):`<section class="panel"><p>ما في طلبات جديدة 👌</p><button class="btn ghost" data-act="tab" data-t="req">تحديث</button></section>`);
  L.forEach((r,i)=>{if(r.txn)API.txnUsed(r.txn,r.id).then(n=>{const el=document.getElementById('dup'+i);if(el&&n)el.innerHTML='<span class="sb-warn">⚠️ مستخدم '+ar(n)+' مرة قبل</span>'}).catch(()=>{})});
}
async function admHist(box){
  let L=[];try{L=await API.history()}catch(e){box.innerHTML=`<p class="msg no">${errMsg(e)}</p>`;return}
  const f=ui.hf||'all',q=(ui.hq||'').trim(),now=new Date(),m0=dayIdx(new Date(now.getFullYear(),now.getMonth(),1)),m1=dayIdx(new Date(now.getFullYear(),now.getMonth()-1,1));
  const ap=L.filter(r=>r.status==='approved'),sum=(a,b)=>ap.filter(r=>{const d=tsDay(r.done||r.created);return d>=a&&d<b}).reduce((s,r)=>s+amountOf(r.amount),0);
  const thisM=sum(m0,1e9),lastM=sum(m1,m0);
  const V2=L.filter(r=>(f==='all'||r.status===f)&&(!q||(r.phone||'').includes(q)||(r.childName||'').includes(q)||(r.parentName||'').includes(q)||String(r.invoice||'').includes(q)));
  box.innerHTML=`<div class="tiles" style="grid-template-columns:1fr 1fr"><div class="tile ok"><b>${fmtNum(thisM)}</b><span>محصّل هالشهر (${CUR()})</span></div><div class="tile"><b>${fmtNum(lastM)}</b><span>الشهر الماضي</span></div></div>
  <div class="tabs">${[['all','الكل'],['approved','مقبول'],['rejected','مرفوض']].map(([k,n])=>`<button data-act="sb_hf" data-f="${k}" class="${f===k?'on':''}">${n}</button>`).join('')}</div>
  <div class="row" style="margin:8px 0"><input id="hq" type="text" placeholder="بحث برقم أو اسم أو فاتورة" value="${esc(q)}" style="flex:1"><button class="btn ghost sm" data-act="sb_hq">بحث</button></div>
  <div class="sb-hist">${V2.map(r=>`<div class="sb-h"><div class="top"><b>${esc(r.childName||'')} · الصف ${GRADES[(r.grade||1)-1]}</b><span class="sb-chip ${r.status}">${statusName[r.status]||r.status}</span></div>
    <span class="muted small">${esc(r.parentName||'')} · <span dir="ltr">${esc(r.phone||'')}</span></span>
    <span class="small">${esc(planName(r.plan))} · <b>${showAmt(r)}</b>${r.method?' · '+methName(r.method):''}${r.source==='admin'?' · تفعيل يدوي':''} · ${fmtDay(tsDay(r.done||r.created),{day:'numeric',month:'short',year:'numeric'})}</span>
    ${r.invoice?`<span class="muted small">فاتورة ${invNo(r.invoice)}${r.by?' · بواسطة '+esc(r.by):''}</span>`:''}${r.reason?`<span class="sb-reason">السبب: ${esc(r.reason)}</span>`:''}</div>`).join('')||'<p class="muted">ما في نتائج.</p>'}</div>`;
}
async function admSet(box){
  const st=APP.set,P=ui.plEd||(ui.plEd=(st.plans||DEFAULT_PLANS).map(x=>Object.assign({},x)));
  let C=[];try{C=await API.couponList()}catch(e){}
  box.innerHTML=`<form class="panel" id="sf2" novalidate>
    <h3>الباقات</h3><p class="muted small">السعر رقم بس (مثلاً 25000). الباقة المخفية ما بتظهر للأهل.</p>
    <div class="sb-plan-ed muted small"><span>الاسم</span><span>الأشهر</span><span>السعر</span><span>ظاهرة</span></div>
    ${P.map((p,i)=>`<div class="sb-plan-ed"><input id="pn${i}" value="${esc(p.name)}"><input id="pm${i}" type="tel" dir="ltr" value="${esc(p.months)}"><input id="pp${i}" type="tel" dir="ltr" value="${esc(p.price||'')}" placeholder="0"><input id="po${i}" type="checkbox" ${p.on!==false?'checked':''} style="width:24px;height:24px"></div>`).join('')}
    <div class="field"><label for="s_cur">العملة</label><input id="s_cur" value="${esc(st.currency||'ل.س')}"></div>
    <div class="field"><label for="s_t">أيام التجربة المجانية للحساب الجديد</label><input id="s_t" type="tel" dir="ltr" value="${esc(st.trialDays)}"></div>
    <div class="field"><label for="s_fd">خصم الإخوة ٪</label><input id="s_fd" type="tel" dir="ltr" value="${esc(st.family)}"></div>
    <h3>طرق الدفع</h3><p class="muted small">اترك الحقل فاضي لإخفاء طريقة الدفع.</p>
    ${Object.entries(PAY).map(([k,n])=>`<div class="field"><label for="s_${k}">${n}</label><input id="s_${k}" type="text" dir="ltr" value="${esc(st.pay[k]||'')}"></div>`).join('')}
    <div class="field"><label for="s_sn">اسم صاحب حساب شام كاش</label><input id="s_sn" type="text" value="${esc(st.shamName||'')}"></div>
    <div class="field"><label>صورة QR شام كاش</label><div class="qrprev">${(ui.newQr||st.shamQr)?`<img src="${ui.newQr||st.shamQr}" alt="QR">`:''}</div><input id="s_qr" type="file" accept="image/*"></div>
    <div class="field"><label for="s_w">رقم واتساب لاستقبال الإيصالات</label><input id="s_w" type="text" dir="ltr" value="${esc(st.whatsapp||'')}"></div>
    <h3>العروض والمسابقة</h3>
    <div class="field"><label for="s_sc">عرض المدارس والأساتذة</label><textarea id="s_sc" rows="3">${esc(st.school||'')}</textarea></div>
    <div class="field"><label for="s_pz">جائزة مسابقة الشهر</label><input id="s_pz" type="text" value="${esc(st.prize||'')}"></div>
    <button class="btn teal" id="sfb" type="submit">حفظ الإعدادات</button>${msgHTML()}
  </form>
  <section class="panel"><h3>🏷️ أكواد الخصم</h3>
    ${C.length?C.map(c=>`<div class="row between"><span><b dir="ltr">${esc(c.code)}</b> · ${ar(c.pct)}٪${c.until?' · حتى '+fmtDay(c.until,{day:'numeric',month:'short'}):''}${c.on===false?' · <span class="offc">موقوف</span>':''}</span><span class="row"><button class="btn ghost sm" data-act="sb_cptog" data-c="${esc(c.code)}" data-on="${c.on===false?1:0}">${c.on===false?'تشغيل':'إيقاف'}</button><button class="btn ghost sm" data-act="sb_cpdel" data-c="${esc(c.code)}">حذف</button></span></div>`).join(''):'<p class="muted">ما في أكواد.</p>'}
    <div class="row" style="gap:6px;margin-top:8px"><input id="ncc" dir="ltr" placeholder="الكود" style="flex:1.3;text-transform:uppercase" maxlength="20"><input id="ncp" type="tel" dir="ltr" placeholder="٪" style="flex:.6"><input id="ncd" type="tel" dir="ltr" placeholder="أيام" style="flex:.7"><button class="btn teal sm" data-act="sb_cpadd">إضافة</button></div>
    <p class="muted small">مثلاً: EID25 بخصم ٢٥٪ لمدة ١٠ أيام. اترك الأيام فاضية ليضل شغّال.</p></section>`;
  V.querySelector('#s_qr').addEventListener('change',async e=>{const f=e.target.files[0];if(!f)return;try{ui.newQr=await resizeImage(f,520);V.querySelector('.qrprev').innerHTML=`<img src="${ui.newQr}" alt="QR">`}catch(err){}});
  V.querySelector('#sf2').addEventListener('submit',async e=>{e.preventDefault();
    const plans=P.map((p,i)=>({id:p.id,name:val('pn'+i)||p.name,months:Math.max(1,Math.min(24,parseInt(normCode(val('pm'+i)),10)||p.months)),price:parseInt(normCode(val('pp'+i)),10)||0,on:V.querySelector('#po'+i).checked}));
    const t=parseInt(normCode(val('s_t')),10);
    const ns={trialDays:isNaN(t)?st.trialDays:Math.min(t,60),plans,currency:val('s_cur')||'ل.س',prices:{monthly:String((plans.find(x=>x.id==='monthly')||{}).price||''),yearly:String((plans.find(x=>x.id==='yearly')||{}).price||'')},
      pay:Object.fromEntries(Object.keys(PAY).map(k=>[k,val('s_'+k)])),whatsapp:val('s_w'),shamName:val('s_sn'),shamQr:ui.newQr||st.shamQr,family:Math.max(0,Math.min(90,parseInt(normCode(val('s_fd')),10)||0)),school:val('s_sc'),prize:val('s_pz')};
    busy(V.querySelector('#sfb'),'جارِ الحفظ…');
    try{await API.saveSettings(ns);APP.set=mergeSettings(ns);ui.plEd=null;try{localStorage.setItem('shattoor_set',JSON.stringify(APP.set))}catch(x){}ui.msg={ok:true,t:'تم الحفظ ✓ الأهل بيشوفوا التغييرات بأول فتح للتطبيق.'}}catch(err){ui.msg={t:errMsg(err)}}viewAdmin()});
}

async function admAccts(box){
  let st;try{st=await API.stats()}catch(e){box.innerHTML=`<p class="msg no">${errMsg(e)}</p>`;return}
  const t=today(),td=APP.set.trialDays||0,adm=normPhone(CONFIG.adminPhone);
  const byP={};st.kids.forEach(k=>{(byP[k.phone]=byP[k.phone]||[]).push(k)});
  const L=st.parents.filter(p=>p.phone!==adm).map(p=>{const kids=byP[p.phone]||[];
    const act=[],had=[];kids.forEach(k=>Object.entries(k.subs||{}).forEach(([g,s])=>{(s.until>=t?act:had).push({k,g:+g,s})}));
    const cr=p.created!=null?p.created:null,trial=cr!=null&&cr+td>t;
    const stt=act.length?'sub':trial?'trial':had.length?'exp':'none';
    const last=Math.max(-1,...kids.map(k=>k.lastActive!=null?k.lastActive:-1));
    return Object.assign({},p,{kids,act,had,stt,cr,last})}).sort((a,b)=>(b.cr||0)-(a.cr||0));
  const cnt=k=>L.filter(x=>k==='all'||x.stt===k).length;
  const f=ui.acF||'all',q=(ui.acQ||'').trim();
  const V2=L.filter(x=>(f==='all'||x.stt===f)&&(!q||(x.name||'').includes(q)||x.phone.includes(normCode(q)||q)||x.kids.some(k=>(k.name||'').includes(q))));
  const NM={sub:'مشترك',trial:'تجربة',exp:'منتهي',none:'غير مشترك'},CL={sub:'#2E9A57',trial:'#2E7DB8',exp:'#DD3F57',none:'#8FA3AE'};
  const newN=L.filter(x=>x.cr!=null&&t-x.cr<=7).length;
  box.innerHTML=`<div class="tiles" style="grid-template-columns:repeat(2,1fr)"><div class="tile"><b>${fmtNum(L.length)}</b><span>حساب أهل</span></div><div class="tile ok"><b>${fmtNum(cnt('sub'))}</b><span>مشترك</span></div><div class="tile"><b>${fmtNum(cnt('trial'))}</b><span>بالتجربة</span></div><div class="tile"><b>${fmtNum(newN)}</b><span>جديد آخر ٧ أيام</span></div></div>
  <div class="tabs" style="flex-wrap:wrap">${[['all','الكل'],['sub','مشترك'],['trial','تجربة'],['none','غير مشترك'],['exp','منتهي']].map(([k,n])=>`<button data-act="sb_acf" data-f="${k}" class="${f===k?'on':''}">${n} (${ar(cnt(k))})</button>`).join('')}</div>
  <div class="row" style="margin:8px 0"><input id="acq" type="text" placeholder="بحث بالاسم أو الرقم أو اسم الطفل" value="${esc(q)}" style="flex:1"><button class="btn ghost sm" data-act="sb_acq">بحث</button></div>
  <div style="display:flex;flex-direction:column;gap:8px">${V2.map(x=>`<button class="ac-row" data-act="sb_aco" data-p="${x.phone}">
    <span class="av" style="background:${CL[x.stt]}">${esc((x.name||'؟').trim()[0]||'؟')}</span>
    <span class="t"><b>${esc(x.name||'بدون اسم')}${x.cr!=null&&t-x.cr<=7?'<span class="ac-new">جديد</span>':''}</b>
      <small dir="ltr" style="text-align:end">${esc(x.phone)}</small>
      <small>${x.kids.length?x.kids.map(k=>esc(k.name)+' ('+GRADES[(k.grade||1)-1]+')').join('، '):'ما ضاف أطفال'}${x.cr!=null?' · انضم '+fmtDay(x.cr,{day:'numeric',month:'short'}):''}${x.last>=0?' · آخر نشاط '+(t-x.last<=0?'اليوم':'من '+ar(t-x.last)+' يوم'):''}</small>
      ${x.act.length?`<small style="color:#1F7A42;font-weight:700">${x.act.map(a=>esc(a.k.name)+': '+esc(planName(a.s.plan))+' حتى '+fmtDay(a.s.until,{day:'numeric',month:'short'})).join(' · ')}</small>`:''}</span>
    <span class="ac-st ${x.stt}">${NM[x.stt]}</span></button>`).join('')||'<p class="muted">ما في حسابات.</p>'}</div>`;
}
window.SUBADM={req:admReq,hist:admHist,set:admSet,accts:admAccts};
function setBadge(n){const b=V.querySelector('.admtabs [data-t=req]');if(b)b.innerHTML='الطلبات'+(n?` <i class="badge">${ar(n)}</i>`:'')}
const _va=viewAdmin;viewAdmin=async function(){await _va();if((ui.tab||'req')!=='req')API.pending().then(L=>setBadge(L.length)).catch(()=>{})};
VIEWS.admin=viewAdmin;

/* ---------- الأحداث ---------- */
async function shareImg(url,name){if(typeof NATIVE!=='undefined'&&NATIVE&&NATIVE.shareImage){try{NATIVE.shareImage(url,name,'إيصال اشتراك شطّور');return}catch(e){}}
  try{const bl=await (await fetch(url)).blob(),f=new File([bl],name+'.png',{type:'image/png'});if(navigator.canShare&&navigator.canShare({files:[f]}))await navigator.share({files:[f]})}catch(e){}}
document.addEventListener('click',async e=>{const b=e.target.closest('[data-act]');if(!b||b.disabled)return;const a=b.dataset.act;if(!a.startsWith('sb_'))return;
  const keepTxn=()=>{const t=V.querySelector('#sbtxn');if(t)ui.sbTxn=t.value};
  if(a==='sb_plan'){keepTxn();ui.sbPlan=b.dataset.p;ui.msg=null;viewSub2()}
  else if(a==='sb_meth'){keepTxn();ui.sbMeth=b.dataset.m;ui.msg=null;viewSub2()}
  else if(a==='sb_copy'){try{await navigator.clipboard.writeText(b.dataset.t);b.textContent='تم ✓'}catch(err){b.textContent=b.dataset.t}}
  else if(a==='sb_cp'){keepTxn();const code=normCodeTxt(val('sbcp'));if(!code)return;busy(b,'…');
    try{const c=await API.couponGet(code);if(!c||c.on===false||(c.until!=null&&c.until<today()))ui.msg={t:'الكود غير صالح أو منتهي.'};else{ui.sbCp={code,pct:Math.max(1,Math.min(90,+c.pct||0))};ui.msg={ok:true,t:'تم تطبيق الكود ✓'}}}catch(err){ui.msg={t:'الكود غير صالح.'}}viewSub2()}
  else if(a==='sb_cpx'){keepTxn();ui.sbCp=null;viewSub2()}
  else if(a==='sb_send'){keepTxn();const c=APP.child,P=activePlans(),p=P.find(x=>x.id===ui.sbPlan)||P[0],m=ui.sbMeth||'',txn=normCode(ui.sbTxn||'');
    if(!p)return;
    if(!ui.sbRcpt&&txn.length<4){ui.msg={t:txn?'رقم العملية قصير. اكتب رقم العملية كامل كما هو بإشعار التحويل (٤ أرقام على الأقل)، أو ارفع صورة الإيصال.':'ارفع صورة الإيصال أو اكتب رقم العملية.'};return viewSub2()}
    const k=calc(p);busy(b,'جارِ الإرسال…');
    try{await API.requestSub({phone:APP.user.phone,parentName:APP.user.name,childId:c.id,childName:c.name,grade:c.grade,plan:p.id,months:p.months,amount:k.total,currency:CUR(),method:m,txn:txn||'',receipt:ui.sbRcpt||'',coupon:ui.sbCp?ui.sbCp.code:'',family:!!k.fam});
      await refreshReqs();ui.sbRcpt=null;ui.sbTxn='';ui.sbCp=null;ui.msg={ok:true,t:'وصل طلبك ✓ رح نراجعه ونفعّل الاشتراك بأقرب وقت.'}}
    catch(err){ui.msg={t:errMsg(err)}}viewSub2();window.scrollTo(0,0)}
  else if(a==='sb_recheck'){busy(b,'جارِ التحقق…');try{APP.kids=await API.listChildren();APP.child=APP.kids.find(k=>k.id===APP.child.id)||APP.child;await refreshReqs();ui.msg=hasSub()?{ok:true,t:'تم التفعيل 🎉'}:{t:'لسا قيد المراجعة. جرّب بعد شوي.'}}catch(err){ui.msg={t:errMsg(err)}}if(hasSub())go('home',true);else viewSub2()}
  else if(a==='sb_rcpt'){ui.keep={rcId:b.dataset.id};go('rcpt')}
  else if(a==='sb_rshare')shareImg(ui.rcUrl,'shattoor-receipt');
  else if(a==='sb_rsave'){try{NATIVE.saveImage(ui.rcUrl,'shattoor-receipt-'+Date.now());b.textContent='انحفظ ✓'}catch(err){}}
  else if(a==='sb_seen'){const id=b.dataset.id,r=(APP.reqs||[]).find(x=>x.id===id);markSeen(id);document.querySelector('.sb-note').remove();if(r&&r.status==='rejected')go('sub');else notify()}
  else if(a==='sb_zoom'){overlay(ui.reqs[+b.dataset.i].receipt)}
  else if(a==='sb_ok'){const r=ui.reqs[+b.dataset.i],days=(PLANS[r.plan]&&PLANS[r.plan].days)||planDays(r.months||1);busy(b,'جارِ التفعيل…');
    try{const s=await API.approveReq(r,days);ui.msg={ok:true,t:`✓ تفعّل اشتراك ${esc(r.childName)} للصف ${GRADES[r.grade-1]} حتى ${fmtDay(s.until)} · فاتورة ${invNo(s.invoice)} · <a href="${waLink(r.phone,`مرحباً ${r.parentName||''} 🌟\nتم تفعيل اشتراك ${r.childName} بتطبيق شطّور (الصف ${GRADES[r.grade-1]}) حتى ${fmtDay(s.until)}.\nرقم الفاتورة: ${invNo(s.invoice)}\nشكراً لثقتكم 🙏`)}" target="_blank" rel="noopener">بلّغ الأهل بواتساب</a>`}}
    catch(err){ui.msg={t:err.code==='already'?'هالطلب انراجع من قبل.':errMsg(err)}}viewAdmin()}
  else if(a==='sb_no'){ui.rejI=+b.dataset.i;ui.rjr='';viewAdmin()}
  else if(a==='sb_nox'){ui.rejI=null;viewAdmin()}
  else if(a==='sb_rs'){const i=V.querySelector('#rjr');if(i)i.value=b.dataset.t}
  else if(a==='sb_no2'){const r=ui.reqs[+b.dataset.i],why=val('rjr');if(!why){ui.rjr='';ui.msg={t:'اكتب سبب الرفض ليعرفه الأهل.'};return viewAdmin()}busy(b);
    try{await API.rejectReq(r.id,why);ui.msg={ok:true,t:`انرفض الطلب · <a href="${waLink(r.phone,`مرحباً ${r.parentName||''}\nما قدرنا نفعّل اشتراك ${r.childName} بتطبيق شطّور: ${why}.\nفيكم تبعتوا طلب جديد من صفحة الاشتراك.`)}" target="_blank" rel="noopener">بلّغ الأهل بواتساب</a>`}}catch(err){ui.msg={t:errMsg(err)}}ui.rejI=null;viewAdmin()}
  else if(a==='sb_hf'){ui.hf=b.dataset.f;viewAdmin()}
  else if(a==='sb_acf'){ui.acF=b.dataset.f;viewAdmin()}
  else if(a==='sb_acq'){ui.acQ=val('acq');viewAdmin()}
  else if(a==='sb_aco'){const ph=b.dataset.p;ui.tab='find';ui.fp=ph;ui.msg=null;try{ui.found=await API.findByPhone(ph)}catch(err){ui.msg={t:errMsg(err)}}viewAdmin()}
  else if(a==='sb_hq'){ui.hq=val('hq');viewAdmin()}
  else if(a==='sb_cpadd'){const code=normCodeTxt(val('ncc')),pct=parseInt(normCode(val('ncp')),10),d=parseInt(normCode(val('ncd')),10);
    if(!code||!(pct>0&&pct<=90)){ui.msg={t:'اكتب كود ونسبة بين ١ و٩٠.'};return viewAdmin()}
    try{await API.couponSet(code,{pct,on:true,until:d>0?today()+d:null});ui.msg={ok:true,t:'انضاف الكود ✓'}}catch(err){ui.msg={t:errMsg(err)}}viewAdmin()}
  else if(a==='sb_cptog'||a==='sb_cpdel'){const code=b.dataset.c;try{if(a==='sb_cpdel')await API.couponDel(code);else{const c=await API.couponGet(code);await API.couponSet(code,{pct:c.pct,until:c.until==null?null:c.until,on:b.dataset.on==='1'})}}catch(err){ui.msg={t:errMsg(err)}}viewAdmin()}
});
function normCodeTxt(s){return AR2EN(String(s||'')).toUpperCase().replace(/[^A-Z0-9]/g,'').slice(0,20)}
})();
