// فحص حي: تسجيل حساب تجريبي على الموقع الحقيقي ومعرفة إذا انحفظ
const {chromium}=require('playwright');const fs=require('fs');
const log=[];const W=()=>fs.writeFileSync('diag.txt',log.join('\n'));const L=s=>{log.push(new Date().toISOString().slice(11,19)+' '+s);W();console.log(s)};
const T=(pr,ms)=>Promise.race([pr,new Promise(r=>setTimeout(()=>r('TIMEOUT '+ms+'ms'),ms))]);
(async()=>{let b;try{b=await chromium.launch();const p=await b.newPage({viewport:{width:390,height:844}});
p.on('console',m=>{if(m.type()!=='log')L('[console.'+m.type()+'] '+m.text().slice(0,300))});p.on('pageerror',e=>L('[pageerror] '+e.message));
p.on('requestfailed',r=>L('[reqfail] '+r.url().slice(0,100)+' '+((r.failure()||{}).errorText||'')));
const PH=process.env.PH,PW='Test#2026x';
await p.goto('https://mohamedfayzyasenalsabagh-create.github.io/shattoor/?t='+Date.now(),{waitUntil:'load',timeout:45000});await p.waitForTimeout(5000);
L('VIEW0: '+(await p.evaluate(()=>document.getElementById('view').innerText)).slice(0,150).replace(/\n/g,' | '));
L('DEMO? '+await p.evaluate(()=>String(API.demo)));
await p.click('[data-act=mode][data-m=signup]');await p.fill('#an','🧪 حساب اختبار — احذفه');await p.fill('#ap',PH);await p.fill('#aw',PW);
await p.click('#authb');
for(let i=1;i<=6;i++){await p.waitForTimeout(5000);L('t+'+(i*5)+'s VIEW: '+(await p.evaluate(()=>document.getElementById('view').innerText)).slice(0,160).replace(/\n/g,' | '))}
L('AUTH USER: '+await T(p.evaluate(()=>{const u=firebase.auth().currentUser;return u?u.email:'none'}),5000));
L('APP.user: '+await T(p.evaluate(()=>JSON.stringify(APP.user)),5000));
L('PARENT DOC: '+await T(p.evaluate(async(ph)=>{try{const d=await firebase.firestore().collection('parents').doc(ph).get({source:'server'});return d.exists?'EXISTS '+JSON.stringify(d.data()).slice(0,200):'MISSING'}catch(e){return 'ERR '+e.code+' '+e.message}},PH),20000));
L('LOGIN DOC: '+await T(p.evaluate(async(ph)=>{try{const d=await firebase.firestore().collection('logins').doc(ph).get({source:'server'});return d.exists?'OK':'MISSING'}catch(e){return 'ERR '+e.code+' '+e.message}},PH),20000));
L('DIRECT WRITE TEST: '+await T(p.evaluate(async(ph)=>{try{const db=firebase.firestore(),u=firebase.auth().currentUser;if(!u)return 'no user';await db.collection('parents').doc(ph).set({phone:ph,name:'🧪 حساب اختبار — احذفه',uid:u.uid,created:firebase.firestore.FieldValue.serverTimestamp()});return 'OK'}catch(e){return 'ERR '+e.code+' '+e.message}},PH),25000));
await p.screenshot({path:'diag.png'});L('DONE');
}catch(e){L('FATAL '+e.stack)}finally{try{await b.close()}catch(e){}process.exit(0)}})();
