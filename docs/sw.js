/* شطّور: يشغّل التطبيق بلا إنترنت */
const V='shattoor-c088842062';
const PRE=["./", "assets/icon-192.png", "assets/icon-512.png", "assets/shamcash.png", "curriculum.js", "fb/firebase-app-compat.js", "fb/firebase-auth-compat.js", "fb/firebase-firestore-compat.js", "feat_duel.js", "feat_exams.js", "feat_league.js", "feat_letters.js", "feat_report.js", "feat_stories.js", "fonts/lalezar-arabic-400-normal.woff2", "fonts/lalezar-latin-400-normal.woff2", "fonts/tajawal-arabic-200-normal.woff2", "fonts/tajawal-arabic-300-normal.woff2", "fonts/tajawal-arabic-400-normal.woff2", "fonts/tajawal-arabic-500-normal.woff2", "fonts/tajawal-arabic-700-normal.woff2", "fonts/tajawal-arabic-800-normal.woff2", "fonts/tajawal-arabic-900-normal.woff2", "fonts/tajawal-latin-200-normal.woff2", "fonts/tajawal-latin-300-normal.woff2", "fonts/tajawal-latin-400-normal.woff2", "fonts/tajawal-latin-500-normal.woff2", "fonts/tajawal-latin-700-normal.woff2", "fonts/tajawal-latin-800-normal.woff2", "fonts/tajawal-latin-900-normal.woff2"];
self.addEventListener('install',e=>{e.waitUntil(caches.open(V).then(c=>Promise.all(PRE.map(u=>c.add(u).catch(()=>{})))).then(()=>self.skipWaiting()))});
self.addEventListener('activate',e=>{e.waitUntil(caches.keys().then(ks=>Promise.all(ks.filter(k=>k!==V).map(k=>caches.delete(k)))).then(()=>self.clients.claim()))});
self.addEventListener('fetch',e=>{
  const r=e.request;if(r.method!=='GET')return;const u=new URL(r.url);if(u.origin!==location.origin)return;
  const fresh=r.mode==='navigate'||/\.(html|js)$/.test(u.pathname)||u.pathname.endsWith('/');
  if(fresh){
    e.respondWith(new Promise(res=>{let done=false;const fb=()=>caches.match(r,{ignoreSearch:true}).then(m=>m||caches.match('./')).then(m=>{if(!done){done=true;res(m||fetch(r))}});
      const t=setTimeout(fb,4000);
      fetch(r).then(n=>{if(n&&n.ok){const cp=n.clone();caches.open(V).then(c=>c.put(r,cp))}clearTimeout(t);if(!done){done=true;res(n)}}).catch(()=>{clearTimeout(t);fb()})}));
  }else{
    e.respondWith(caches.match(r,{ignoreSearch:true}).then(m=>m||fetch(r).then(n=>{if(n&&n.ok){const cp=n.clone();caches.open(V).then(c=>c.put(r,cp))}return n})));
  }
});
