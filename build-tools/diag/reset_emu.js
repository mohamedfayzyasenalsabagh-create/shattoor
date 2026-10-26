// اختبار كامل لإعادة تعيين كلمة السر على محاكي Firebase بنفس قواعد الحماية
const {chromium}=require('playwright');const http=require('http');const fs=require('fs');const path=require('path');
const DIR=process.argv[2],OUT=process.argv[3];const log=[];const L=s=>{log.push(s);console.log(s);fs.writeFileSync(OUT,log.join('\n'))};
const srv=http.createServer((q,r)=>{let f=path.join(DIR,decodeURIComponent(q.url.split('?')[0]));if(f.endsWith('/'))f+='index.html';
  if(!fs.existsSync(f)){r.writeHead(404);return r.end()}let d=fs.readFileSync(f);
  if(f.endsWith('index.html'))d=Buffer.from(d.toString().replace("const auth=firebase.auth(),db=firebase.firestore(),FV=firebase.firestore.FieldValue;","const auth=firebase.auth(),db=firebase.firestore(),FV=firebase.firestore.FieldValue;auth.useEmulator('http://127.0.0.1:9099');db.useEmulator('127.0.0.1',8080);"));
  if(f.endsWith('sw.js')){r.writeHead(404);return r.end()}
  r.writeHead(200,{'content-type':f.endsWith('.html')?'text/html':f.endsWith('.js')?'text/javascript':'application/octet-stream'});r.end(d)}).listen(5055);
const U='http://127.0.0.1:5055/';
const txt=p=>p.evaluate(()=>document.getElementById('view').innerText.replace(/\s+/g,' ').slice(0,200));
async function settle(p){for(let i=0;i<30;i++){await p.waitForTimeout(500);const busy=await p.evaluate(()=>{const b=document.getElementById('authb');return !!(b&&(b.disabled||b.classList.contains('busy')||b.getAttribute('aria-busy')==='true'))});if(!busy&&i>3)break}await p.waitForTimeout(1500)}
async function page(b){const c=await b.newContext({viewport:{width:390,height:844}});const p=await c.newPage();p.on('pageerror',e=>L('[pageerror] '+e.message));p.on('console',m=>{if(m.type()==='error'||m.type()==='warning')L('[console] '+m.text().slice(0,200))});await p.goto(U);await p.waitForTimeout(2500);return p}
async function signup(p,ph,name,pw){await p.click('[data-act=mode][data-m=signup]');await p.fill('#an',name);await p.fill('#ap',ph);await p.fill('#aw',pw);await p.click('#authb');await settle(p)}
async function login(p,ph,pw){await p.fill('#ap',ph);await p.fill('#aw',pw);await p.click('#authb');await settle(p)}
async function reset(p,ph,code,pw){await p.click('[data-act=mode][data-m=reset]');await p.fill('#ap',ph);await p.fill('#ac',code);await p.fill('#aw',pw);await p.click('#authb');await settle(p)}
(async()=>{const b=await chromium.launch();let ok=true;const chk=(c,m)=>{L((c?'✅ ':'❌ ')+m);if(!c)ok=false};
try{
 const A=await page(b);await signup(A,'0986411114','الأدمن','Admin#123');L('admin view: '+await txt(A));
 const P=await page(b);await signup(P,'0935683181','اية الصباغ','Old#1234');L('parent view: '+await txt(P));
 await A.goto(U);await A.waitForTimeout(2500);
 await A.click('[data-act=tab][data-t=find]');await A.fill('#fp','0935683181');await A.click('#ffb');await A.waitForTimeout(2000);
 await A.click('[data-act=mkReset]');await A.waitForTimeout(2000);const c1=(await A.innerText('.code')).trim();L('code1='+c1);
 const hasNew=await A.$('[data-act=mkReset]');chk(!!hasNew,'زر «رمز جديد» ظاهر بعد توليد الرمز');
 if(hasNew){await hasNew.click();await A.waitForTimeout(2000)}const c2=(await A.innerText('.code')).trim();L('code2='+c2);chk(c1!==c2,'الرمز الجديد مختلف عن القديم');
 const R=await page(b);await reset(R,'0935683181',c1,'New#5678');const v1=await txt(R);L('old code -> '+v1);chk(/غلط|غير صحيح|خطأ|صحيح/.test(v1)&&!/أطفالي|أضف/.test(v1),'الرمز القديم مرفوض');
 const R2=await page(b);const AR=c2.replace(/\d/g,d=>'٠١٢٣٤٥٦٧٨٩'[d]);await reset(R2,'٠٩٣٥٦٨٣١٨١',AR,'New#5678');const v2=await txt(R2);L('new code (arabic digits) -> '+v2);chk(!/رمز|غلط/.test(v2)&&/طفل|أطفال/.test(v2),'الرمز الجديد (بأرقام عربية) بيشتغل وبيدخل الحساب');
 const N=await page(b);await login(N,'0935683181','New#5678');chk(/طفل|أطفال/.test(await txt(N)),'الدخول بكلمة السر الجديدة شغّال');
 const O=await page(b);await login(O,'0935683181','Old#1234');chk(!/أطفالي/.test(await txt(O))&&/غير صحيحة/.test(await txt(O)),'كلمة السر القديمة ما عادت تشتغل');
 await A.goto(U);await A.waitForTimeout(2500);await A.click('[data-act=tab][data-t=find]');await A.fill('#fp','0935683181');await A.click('#ffb');await A.waitForTimeout(2000);
 const fv=await txt(A);L('admin after: '+fv);chk(/اية الصباغ/.test(fv),'اسم وليّ الأمر ما انمسح');chk(!(await A.$('.code')),'الرمز المستعمل انشال من لوحة الأدمن');
 await A.click('[data-act=mkReset]');await A.waitForTimeout(2000);const c3=(await A.innerText('.code')).trim();const R3=await page(b);await reset(R3,'0935683181',c3,'Third#999');chk(/طفل|أطفال/.test(await txt(R3)),'إعادة تعيين تانية لنفس الحساب شغّالة');
 const N2=await page(b);await login(N2,'0935683181','Third#999');chk(/طفل|أطفال/.test(await txt(N2)),'الدخول بعد التعيين التاني شغّال');
}catch(e){L('FATAL '+e.stack);ok=false}L(ok?'RESULT: PASS':'RESULT: FAIL');await b.close();srv.close();process.exit(0)})();
