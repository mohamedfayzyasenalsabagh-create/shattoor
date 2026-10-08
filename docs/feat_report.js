/* شطّور · التقرير الأسبوعي كصورة + شهادة نهاية الفصل
 * © 2026 جميع الحقوق محفوظة · mohamedfayzyasenalsabagh@gmail.com */
(function(){
const css=document.createElement('style');css.textContent=`.rp-img{width:100%;border-radius:20px;box-shadow:0 8px 24px -10px #0004}
.rp-fri{background:linear-gradient(135deg,#0E7C77,#2E9A57);color:#fff;border-radius:20px;padding:14px 16px;display:flex;gap:10px;align-items:center;font-weight:800}
.rp-fri .btn{margin-inline-start:auto}`;document.head.appendChild(css);
const SITE=location.origin+location.pathname;
const D="'Lalezar','Tajawal',sans-serif",B="'Tajawal',sans-serif";
function rr(x,X,Y,W,H,r){x.beginPath();if(x.roundRect)x.roundRect(X,Y,W,H,r);else x.rect(X,Y,W,H)}
function flower(x,cx,cy,r){for(let k=0;k<5;k++){x.save();x.translate(cx,cy);x.rotate(k*Math.PI*2/5);x.beginPath();x.ellipse(0,-r*.55,r*.32,r*.55,0,0,Math.PI*2);x.fillStyle='#fff';x.fill();x.strokeStyle='#E6C96A';x.lineWidth=3;x.stroke();x.restore()}x.beginPath();x.arc(cx,cy,r*.22,0,Math.PI*2);x.fillStyle='#FFC83D';x.fill()}

async function makeReport(){
  try{await document.fonts.ready}catch(e){}
  const W=1080,H=1500,cv=document.createElement('canvas');cv.width=W;cv.height=H;const x=cv.getContext('2d');
  const r=weekReport(),c=APP.child,t=today();
  const g=x.createLinearGradient(0,0,0,420);g.addColorStop(0,'#0E7C77');g.addColorStop(1,'#095755');x.fillStyle='#E6F3F1';x.fillRect(0,0,W,H);x.fillStyle=g;x.fillRect(0,0,W,430);
  flower(x,W-120,110,70);flower(x,110,340,34);
  x.direction='rtl';x.textAlign='right';
  x.fillStyle='#fff';x.font=`44px ${B}`;x.fillText('تقرير الأسبوع من شطّور',W-70,110);
  x.font=`110px ${D}`;x.fillText(c.name,W-70,240);
  x.font=`40px ${B}`;x.globalAlpha=.9;x.fillText(`الصف ${GRADES[c.grade-1]} · ${fmtDay(t-6,{day:'numeric',month:'long'})} ← ${fmtDay(t,{day:'numeric',month:'long'})}`,W-70,310);x.globalAlpha=1;
  // tiles
  const ex=(S.exams||[]).filter(e=>e.d>t-7),exAvg=ex.length?Math.round(ex.reduce((a,b)=>a+b.sc,0)/ex.length):null;
  const qs=r.rows.reduce((a,b)=>a+b.t,0);
  const tiles=[[ar(r.active)+'/'+ar(7),'أيام نشاط'],[ar(qs),'سؤال محلول'],[ar(S.streak),'🔥 أيام ورا بعض'],[exAvg!=null?ar(exAvg)+'٪':'—','معدل الامتحانات']];
  tiles.forEach((tl,i)=>{const w=225,X=W-70-w-(i*(w+20)),Y=370;x.fillStyle='#fff';rr(x,X,Y,w,170,28);x.fill();x.shadowColor='transparent';
    x.textAlign='center';x.fillStyle='#0E7C77';x.font=`64px ${D}`;x.fillText(tl[0],X+w/2,Y+90);x.fillStyle='#55697A';x.font=`28px ${B}`;x.fillText(tl[1],X+w/2,Y+138)});
  // subjects
  x.textAlign='right';x.fillStyle='#15283A';x.font=`46px ${D}`;x.fillText('النتائج حسب المادة',W-70,640);
  r.rows.forEach((row,i)=>{const Y=690+i*104,sj=SUBJ[row.s];
    x.fillStyle='#fff';rr(x,70,Y,W-140,88,22);x.fill();
    x.fillStyle=sj.c;x.font=`36px ${B}`;x.textAlign='right';x.fillText(sj.n,W-100,Y+56);
    x.fillStyle='#E3ECEC';rr(x,240,Y+32,500,24,12);x.fill();
    if(row.p!=null){x.fillStyle=sj.c;rr(x,740-Math.max(24,5*row.p),Y+32,Math.max(24,5*row.p),24,12);x.fill()}
    x.textAlign='left';x.fillStyle='#15283A';x.font=`36px ${D}`;x.fillText(row.p!=null?ar(row.p)+'٪':'—',110,Y+58)});
  let Y=1230;x.textAlign='right';x.font=`38px ${B}`;
  if(r.best){x.fillStyle='#1F7A42';x.fillText(`💪 أقوى مادة: ${SUBJ[r.best.s].n} (${ar(r.best.p)}٪)`,W-70,Y);Y+=60}
  if(r.weak&&r.weak.p<80){x.fillStyle='#B8741A';x.fillText(`🎯 بدها اهتمام: ${SUBJ[r.weak.s].n} (${ar(r.weak.p)}٪)`,W-70,Y);Y+=60}
  if(!r.active){x.fillStyle='#55697A';x.fillText('لسا ما في نشاط هالأسبوع، يلا نبلّش 🌱',W-70,Y)}
  x.fillStyle='#0E7C77';rr(x,0,H-120,W,120,0);x.fill();x.textAlign='center';x.fillStyle='#fff';x.font=`52px ${D}`;x.fillText('شطّور',W/2,H-58);
  x.font=`24px ${B}`;x.globalAlpha=.85;x.fillText('تعلّم ممتع حسب المنهاج السوري · © 2026',W/2,H-22);x.globalAlpha=1;
  return cv.toDataURL('image/png');
}
function reportText(){const r=weekReport(),c=APP.child;
  return `🌼 تقرير ${c.name} هالأسبوع على تطبيق شطّور\n📅 أيام النشاط: ${r.active} من 7\n🔥 أيام ورا بعض: ${S.streak}\n`+r.rows.filter(x=>x.t).map(x=>`• ${SUBJ[x.s].n}: ${x.p}٪`).join('\n')+(r.best?`\n💪 أقوى مادة: ${SUBJ[r.best.s].n}`:'')+`\n\nجرّبوا شطّور لأولادكم: ${SITE}`}
async function share(url,name,text){
  if(NATIVE&&NATIVE.shareImage){try{NATIVE.shareImage(url,name,text);return true}catch(e){}}
  try{const blob=await (await fetch(url)).blob(),f=new File([blob],name+'.png',{type:'image/png'});if(navigator.canShare&&navigator.canShare({files:[f]})){await navigator.share({files:[f],text});return true}}catch(e){}
  return false}
async function viewReport(){
  if(!APP.child)return go('kids');
  V.innerHTML=`${back('parent','تقرير الأسبوع')}<p class="muted">جارِ تجهيز التقرير…</p>`;
  const url=await makeReport();ui.rp=url;
  V.innerHTML=`${back('parent','تقرير الأسبوع')}
  <img class="rp-img" src="${url}" alt="تقرير أسبوع ${esc(APP.child.name)}">
  <div class="links" style="display:flex;flex-direction:column;gap:10px;margin-top:12px">
    <button class="btn teal" data-act="rp_share">📤 مشاركة الصورة</button>
    <a class="btn sun" href="https://wa.me/?text=${encodeURIComponent(reportText())}" target="_blank" rel="noopener">شارك كنص على واتساب</a>
    ${NATIVE&&NATIVE.saveImage?`<button class="btn ghost" data-act="rp_save">حفظ بالمعرض</button>`:'<p class="muted center small">إذا ما اشتغلت المشاركة، اضغط مطوّل على الصورة لتحفظها.</p>'}
  </div>`;S.rpShared=Math.floor((today()+1)/7);save();
}
/* شهادة نهاية الفصل */
async function makeSemCert(){
  try{await document.fonts.ready}catch(e){}
  const W=1080,H=1350,cv=document.createElement('canvas');cv.width=W;cv.height=H;const x=cv.getContext('2d');
  x.fillStyle='#FFF6E3';x.fillRect(0,0,W,H);x.fillStyle='#C99410';x.fillRect(40,40,W-80,H-80);x.fillStyle='#fff';x.fillRect(64,64,W-128,H-128);
  x.strokeStyle='#0E7C77';x.lineWidth=6;x.strokeRect(92,92,W-184,H-184);
  flower(x,W/2,220,90);flower(x,170,170,40);flower(x,W-170,170,40);flower(x,170,H-170,40);flower(x,W-170,H-170,40);
  x.textAlign='center';x.direction='rtl';const T=(t,y,s,f,c)=>{x.font=`${s}px ${f}`;x.fillStyle=c;x.fillText(t,W/2,y)};
  const p=schoolPos(),c=APP.child,g=c.grade;
  T('شهادة نهاية الفصل',400,88,D,'#C98A0A');T(`الفصل ${p.sem===1?'الأول':'الثاني'} · الصف ${GRADES[g-1]}`,470,40,B,'#55697A');
  T(c.name,590,112,D,'#15283A');T('أتمّ دروسه بجدّ واجتهاد على تطبيق شطّور',670,40,B,'#15283A');
  const subs=['math','ar','sci','en','isl'];
  subs.forEach((s,i)=>{const L=semLessons(g,s,p.sem),done=L.filter(l=>starsOf(s,l.i)>0).length,st=(S.stats||{})[s],pc=st&&st.t?Math.round(100*st.c/st.t):null;
    const Y=730+i*84;x.fillStyle='#F6F9F9';x.beginPath();x.roundRect?x.roundRect(170,Y,W-340,68,18):x.rect(170,Y,W-340,68);x.fill();
    x.textAlign='right';x.fillStyle=SUBJ[s].c;x.font=`34px ${B}`;x.fillText(SUBJ[s].n,W-200,Y+45);
    x.textAlign='left';x.fillStyle='#15283A';x.font=`32px ${B}`;x.fillText(`${ar(done)}/${ar(L.length)} درس${pc!=null?' · '+ar(pc)+'٪':''}`,200,Y+45)});
  x.textAlign='center';T('شطّور',1200,60,D,'#0E7C77');
  x.font=`24px ${B}`;x.fillStyle='#55697A';x.fillText('© 2026 جميع الحقوق محفوظة · mohamedfayzyasenalsabagh@gmail.com',W/2,1240);
  return cv.toDataURL('image/png');
}
async function viewSemCert(){
  if(!APP.child)return go('kids');
  V.innerHTML=`${back('parent','شهادة نهاية الفصل')}<p class="muted">جارِ تجهيز الشهادة…</p>`;
  const url=await makeSemCert();ui.rp=url;
  V.innerHTML=`${back('parent','شهادة نهاية الفصل')}<img class="rp-img" src="${url}" alt="شهادة نهاية الفصل">
  <div style="display:flex;flex-direction:column;gap:10px;margin-top:12px"><button class="btn teal" data-act="rp_share">📤 مشاركة</button>${NATIVE&&NATIVE.saveImage?'<button class="btn ghost" data-act="rp_save">حفظ بالمعرض</button>':''}</div>`;
}
window.reportBannerHTML=()=>{const d=new Date().getDay(),wk=Math.floor((today()+1)/7);if((d===5||d===6)&&S.rpShared!==wk)return`<div class="rp-fri"><span>🎉 تقرير ${esc(APP.child.name)} لهالأسبوع جاهز!</span><button class="btn sun sm" data-act="go" data-v="report">شوفه</button></div>`;return''};
VIEWS.report=viewReport;VIEWS.semcert=viewSemCert;
document.addEventListener('click',async e=>{const b=e.target.closest('[data-act]');if(!b)return;const a=b.dataset.act;
  if(a==='rp_share'){const ok=await share(ui.rp,'shattoor-report','تقرير شطّور 🌼 '+SITE);if(!ok){b.textContent='اضغط مطوّل على الصورة لتحفظها'}}
  else if(a==='rp_save'){try{NATIVE.saveImage(ui.rp,'shattoor-'+Date.now());b.textContent='انحفظت ✓'}catch(err){}}
});
})();
