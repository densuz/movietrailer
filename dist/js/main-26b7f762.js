(()=>{var e,t,n={819:e=>{e.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADgAAAA4CAMAAACfWMssAAAABGdBTUEAALGPC/xhBQAAACBjSFJNAAB6JgAAgIQAAPoAAACA6AAAdTAAAOpgAAA6mAAAF3CculE8AAAAwFBMVEUAAAAgcN8saNsrZt0rat8sat8tad8sad8sad8tadwsad8qaNwsat8rad8oaN8padwtad8rad8wcN8rat8sauEsaN0raN8pZtwsaN8rZt8rad0sad8sad4taN4raN4tad8taN8saN8tat8waN8saN0tad8uZt8sad4sad4rad4sad85cuHl7Pt7oetGfOP///9ul+mwxvNGe+OVtO/Y4vmIq+3K2vdhj+fy9f2Jq+2WtO85c+GjvfFTheWwx/PX4/lYsXJgAAAAKnRSTlMAEEBwn8/fv69Q72B/3yBQj48Qz3+An1BAcHDPwKCwUGCAnyCQ73Dg0KC6Ue7aAAAAAWJLR0QvI9QgEQAAAAlwSFlzAAALEwAACxMBAJqcGAAAAAd0SU1FB+UBDQgMFYosK6MAAAGuSURBVEjHndfbeoIwDADgogKK4pSd3KaoA3WrzO6ITnZ4/7daRZ1KmzYlt/B/SWpKKyGSsCrVmu1QHo5br1YILqyG69GT8OpNBGsV1Db8WrsMy6OloGcw22SFCrY6VBPdQOba51QbvqTctk9pGYlzosS6orTQjlL7eIU61CC6B9ekRtEwb3A3u/tiL6hhXO4SCg/mc1TKK+FBkjxhUgodLhhjybM2pbikG8jYy6tCXnNYByBjbzB1OfRAyOBWea09CkNOoaQVcqOEYKu3khZPIW9VBmvE1UJpq3fE0UPG3oV6fUIxUNIqFrLkoyRkSUmYLgsQtThs9Sksjo2B66z4Tp8M9DBdiO+E2pFjyVI+cuohF5v7H/LAU8GvDNhWfD+6MEy/of0YcjiEoLy5bYw4FGvN4Wqdwc7Jv3JjGfzJVF+5+xyKKX/Tpfq7GhF5SuQRIPtFlOFE++NqaAZHhwMyNnHx0Ykc2AaFnlx2Ise8QTNZdFgpOpy0I9llLtCubRwA98eRMulkCF9YI3j6JuNAeUeOBk4Zti04nBRUvxEg/wn0pmF/tjGzh8dpT6r+ADvWmQmg1pUBAAAAJXRFWHRkYXRlOmNyZWF0ZQAyMDIxLTAxLTEzVDA4OjEyOjA1KzAwOjAwr3gO7AAAACV0RVh0ZGF0ZTptb2RpZnkAMjAyMS0wMS0xM1QwODoxMjowNSswMDowMN4ltlAAAAAASUVORK5CYII="},569:(e,t,n)=>{"use strict";function a(e,t){const n=t??"";let a=`https://api.themoviedb.org/3/${e}?api_key=6fa39716df5c82d1be46c3d685c8c56c&query=${n}`;return""===n&&a.includes("&query=")?fetch(a.replace("&query=","")):fetch(a)}function r(e,t){return fetch(`https://youtube.googleapis.com/youtube/v3/${e}?part=snippet&channelId=UCi8e0iOVk1fEOogdfu4YgfA&maxResults=1&q=${t}&type=video&key=AIzaSyDv8wAkRENMnAXnAqx4QsUs8ufDokXTXt0`,{cache:"force-cache"})}n.d(t,{X:()=>a,A:()=>r})}},a={};function r(e){if(a[e])return a[e].exports;var t=a[e]={exports:{}};return n[e](t,t.exports,r),t.exports}r.m=n,r.d=(e,t)=>{for(var n in t)r.o(t,n)&&!r.o(e,n)&&Object.defineProperty(e,n,{enumerable:!0,get:t[n]})},r.f={},r.e=e=>Promise.all(Object.keys(r.f).reduce(((t,n)=>(r.f[n](e,t),t)),[])),r.u=e=>"trailer-9b7a07aa.js",r.miniCssF=e=>"../css/"+{179:"main",955:"trailer"}[e]+"-"+{179:"undefine",955:"31d6cfe0"}[e]+".css",r.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"==typeof window)return window}}(),r.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),e={},t="movietrailer:",r.l=(n,a,o,s)=>{if(e[n])e[n].push(a);else{var i,c;if(void 0!==o)for(var l=document.getElementsByTagName("script"),d=0;d<l.length;d++){var u=l[d];if(u.getAttribute("src")==n||u.getAttribute("data-webpack")==t+o){i=u;break}}i||(c=!0,(i=document.createElement("script")).charset="utf-8",i.timeout=120,r.nc&&i.setAttribute("nonce",r.nc),i.setAttribute("data-webpack",t+o),i.src=n),e[n]=[a];var A=(t,a)=>{i.onerror=i.onload=null,clearTimeout(p);var r=e[n];if(delete e[n],i.parentNode&&i.parentNode.removeChild(i),r&&r.forEach((e=>e(a))),t)return t(a)},p=setTimeout(A.bind(null,void 0,{type:"timeout",target:i}),12e4);i.onerror=A.bind(null,i.onerror),i.onload=A.bind(null,i.onload),c&&document.head.appendChild(i)}},r.r=e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},(()=>{var e;r.g.importScripts&&(e=r.g.location+"");var t=r.g.document;if(!e&&t&&(t.currentScript&&(e=t.currentScript.src),!e)){var n=t.getElementsByTagName("script");n.length&&(e=n[n.length-1].src)}if(!e)throw new Error("Automatic publicPath is not supported in this browser");e=e.replace(/#.*$/,"").replace(/\?.*$/,"").replace(/\/[^\/]+$/,"/"),r.p=e})(),(()=>{var e={179:0};r.f.j=(t,n)=>{var a=r.o(e,t)?e[t]:void 0;if(0!==a)if(a)n.push(a[2]);else{var o=new Promise(((n,r)=>{a=e[t]=[n,r]}));n.push(a[2]=o);var s=r.p+r.u(t),i=new Error;r.l(s,(n=>{if(r.o(e,t)&&(0!==(a=e[t])&&(e[t]=void 0),a)){var o=n&&("load"===n.type?"missing":n.type),s=n&&n.target&&n.target.src;i.message="Loading chunk "+t+" failed.\n("+o+": "+s+")",i.name="ChunkLoadError",i.type=o,i.request=s,a[1](i)}}),"chunk-"+t,t)}};var t=(t,n)=>{for(var a,o,[s,i,c]=n,l=0,d=[];l<s.length;l++)o=s[l],r.o(e,o)&&e[o]&&d.push(e[o][0]),e[o]=0;for(a in i)r.o(i,a)&&(r.m[a]=i[a]);for(c&&c(r),t&&t(n);d.length;)d.shift()()},n=self.webpackChunkmovietrailer=self.webpackChunkmovietrailer||[];n.forEach(t.bind(null,0)),n.push=t.bind(null,n.push.bind(n))})(),(()=>{"use strict";var e=r(569);let t,n=!1,a=0,o=0,s=!0;const i=document.querySelector(".loading .circle"),c=document.querySelector(".content-popular"),l=document.querySelector("section#genre .movies"),d=document.querySelectorAll(".genre-nav li"),u=document.querySelectorAll(".genre-nav a"),A=document.querySelector(".input-search"),p=document.querySelector(".next");function f(){const t=this.dataset.genre;d.forEach((e=>{e.classList.contains("active")&&e.classList.remove("active")})),this.classList.add("active"),async function(t){try{v(await(0,e.X)("trending/movie/day"),t)}catch(e){console.log(e)}}(t)}async function v(e,t){!function(e,t){let n="";e.forEach((e=>{e.genre_ids.includes(parseInt(t))&&(n+=y(e)),"all"==t&&(n+=y(e))})),l.innerHTML=n,l.addEventListener("mousedown",h),l.addEventListener("mousemove",m),l.addEventListener("mouseup",g),l.addEventListener("mouseleave",g)}((await e.json()).results,t)}function h(e){e.preventDefault(),s=!1,n=!0,a=e.clientX,t=this.scrollLeft}function m(e){if(e.preventDefault(),!n)return;let r=e.clientX;o=r-a,e.path.some((e=>{"header"==e.localName?(c.scrollLeft=t-o,c.scrollLeft==c.scrollWidth-c.clientWidth?p.style.cssText="opacity: 1":p.style.cssText="opacity: 0"):"movies"==e.className&&(l.scrollLeft=t-o)}))}function g(e){s||(o>0?c.scrollTo({top:0,left:c.scrollLeft,behavior:"smooth"}):(c.scrollTo({top:0,left:e.target.offsetLeft-432,behavior:"smooth"}),console.log(o))),s=!0,n=!1}function y(e){return`<div class="card">\n                <div class="thumbnail">\n                    <img loading="lazy" src="https://image.tmdb.org/t/p/w200${e.poster_path}" alt="Thumbnail">\n                </div>\n                <div class="card-title">\n                    <h3>${e.title}</h3>\n                    <span>${e.release_date}</span>\n                    <span>&#11088;${e.vote_average}</span>\n                </div>\n            </div>`}d.forEach((e=>e.addEventListener("click",f))),u.forEach((e=>e.addEventListener("click",(e=>e.preventDefault())))),A.addEventListener("keydown",(async function(t){const n=A.value;if("Enter"==t.key)try{const t=await(0,e.X)("search/movie",n);console.log(t)}catch(e){console.log(e)}})),document.addEventListener("click",(function(e){e.path.some((t=>{"button"===t.localName&&r.e(955).then(r.bind(r,95)).then((t=>{t.trailer(e)}))}))})),async function(){try{const t=await(0,e.X)("trending/movie/week");i.classList.add("spin"),async function(e){try{const t=await e.json();i.classList.remove("spin"),function(e){const t=e.results;let n="";t.forEach((e=>{n+=function(e){return`<div class="card">\n                <div class="thumbnail">\n                    <img loading="lazy" src="https://image.tmdb.org/t/p/w400${e.backdrop_path}" alt="Thumbnail" >\n                    <button data-btn='${e.title}'>\n                        <img loading="lazy" src="${r(819)}" alt="Trailer" data-btn='${e.title}'>\n                    </button>\n                </div>\n                <div class="card-title">\n                    <h3>${e.title}</h3>\n                    <span>${e.release_date}</span>\n                </div>\n                <div class="rating">\n                    <span>&#11088;${e.vote_average}</span>\n                </div>\n            </div>`}(e)})),c.innerHTML=n,c.addEventListener("mousedown",h),c.addEventListener("mousemove",m),c.addEventListener("mouseup",g),c.addEventListener("mouseleave",g)}(t),i.parentElement.style.display="none"}catch(e){console.log(e)}}(t)}catch(e){console.log(e)}}(),async function(){try{v(await(0,e.X)("trending/movie/day"),"all")}catch(e){console.log(e)}}()})()})();