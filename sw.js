if(!self.define){const e=e=>{"require"!==e&&(e+=".js");let r=Promise.resolve();return s[e]||(r=new Promise(async r=>{if("document"in self){const s=document.createElement("script");s.src=e,document.head.appendChild(s),s.onload=r}else importScripts(e),r()})),r.then(()=>{if(!s[e])throw new Error(`Module ${e} didn’t register its module`);return s[e]})},r=(r,s)=>{Promise.all(r.map(e)).then(e=>s(1===e.length?e[0]:e))},s={require:Promise.resolve(r)};self.define=(r,i,o)=>{s[r]||(s[r]=Promise.resolve().then(()=>{let s={};const t={uri:location.origin+r.slice(1)};return Promise.all(i.map(r=>{switch(r){case"exports":return s;case"module":return t;default:return e(r)}})).then(e=>{const r=o(...e);return s.default||(s.default=r),s})}))}}define("./sw.js",["./workbox-8f821244"],(function(e){"use strict";self.addEventListener("message",e=>{e.data&&"SKIP_WAITING"===e.data.type&&self.skipWaiting()}),e.precacheAndRoute([{url:"img/avatar.jpg",revision:"6bf5b14d4558893724e471d95980bf07"},{url:"img/bg.jpg",revision:"57724f1815075ab4adcd1b167a79bee1"},{url:"index.html",revision:"f20c271ff8a6e44e2326c276f88847cd"},{url:"sound/explosion.mp3",revision:"598479ead7669f7fc3f5dbeb4c47f114"},{url:"styles/background.css",revision:"9f1d44f0a3a375ccf61cff8729f9681f"},{url:"styles/wibro.css",revision:"84706a33b155a3b3d581d67dc41d3848"}],{})}));
//# sourceMappingURL=sw.js.map
