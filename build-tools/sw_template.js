/* شطّور: يشغّل التطبيق بلا إنترنت */
const V='__VERSION__';
const PRE=__FILES__;
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
