// فحص حي: تسجيل حساب تجريبي على الموقع الحقيقي ومعرفة إذا انحفظ
const {chromium}=require('playwright');
(async()=>{const b=await chromium.launch();const p=await b.newPage({viewport:{width:390,height:844}});const log=[];
p.on('console',m=>log.push('['+m.type()+'] '+m.text()));p.on('pageerror',e=>log.push('[pageerror] '+e.message));
p.on('requestfailed',r=>log.push('[reqfail] '+r.url().slice(0,120)+' '+(r.failure()||{}).errorText));
const PH=process.env.PH,PW='Test#2026x';
await p.goto('https://mohamedfayzyasenalsabagh-create.github.io/shattoor/?t='+Date.now(),{waitUntil:'networkidle'});await p.waitForTimeout(3000);
log.push('DEMO? '+await p.evaluate(()=>!!(window.API&&API.demo)).catch(e=>'?'));
await p.click('[data-act=mode][data-m=signup]');await p.fill('#an','🧪 حساب اختبار — احذفه');await p.fill('#ap',PH);await p.fill('#aw',PW);
await p.click('#authb');await p.waitForTimeout(9000);
log.push('AFTER SIGNUP VIEW: '+(await p.evaluate(()=>document.getElementById('view').innerText)).slice(0,300).replace(/\n/g,' | '));
log.push('USER: '+await p.evaluate(()=>JSON.stringify(APP.user)));
// تحقق من قراءة وثيقة الحساب من السيرفر
log.push('PARENT DOC: '+await p.evaluate(async()=>{try{const d=await firebase.firestore().collection('parents').doc(APP.user.phone).get({source:'server'});return d.exists?JSON.stringify(Object.keys(d.data())):'MISSING'}catch(e){return 'ERR '+e.code+' '+e.message}}));
log.push('LOGIN DOC: '+await p.evaluate(async()=>{try{const d=await firebase.firestore().collection('logins').doc(APP.user.phone).get({source:'server'});return d.exists?'OK':'MISSING'}catch(e){return 'ERR '+e.code}}));
// إضافة طفل
log.push('ADD CHILD: '+await p.evaluate(async()=>{try{const id=await API.addChild({name:'تجربة',grade:2});return 'OK '+id}catch(e){return 'ERR '+e.code+' '+e.message}}));
// خروج ودخول من جديد
log.push('RELOGIN: '+await p.evaluate(async(pw)=>{try{await API.signOut();const u=await API.signIn(APP.user?APP.user.phone:'',pw);return 'OK '+JSON.stringify(u)}catch(e){return 'ERR '+e.code+' '+e.message}},PW));
await p.screenshot({path:'diag.png'});
require('fs').writeFileSync('diag.txt',log.join('\n'));console.log(log.join('\n'));await b.close()})();
