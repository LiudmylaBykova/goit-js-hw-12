import{S as v,a as f,i as M}from"./assets/vendor-ed396e71.js";(function(){const a=document.createElement("link").relList;if(a&&a.supports&&a.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))l(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const i of t.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&l(i)}).observe(document,{childList:!0,subtree:!0});function n(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerpolicy&&(t.referrerPolicy=e.referrerpolicy),e.crossorigin==="use-credentials"?t.credentials="include":e.crossorigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function l(e){if(e.ep)return;e.ep=!0;const t=n(e);fetch(e.href,t)}})();const s={form:document.querySelector(".search-form"),input:document.querySelector(".search-inp"),searchBtn:document.querySelector(".search-btn"),gallery:document.querySelector(".gallery"),loadMoreBtn:document.querySelector(".load-btn"),loader:document.querySelector(".loader")},m=new v(".gallery-item a",{captionsData:"alt",captionDelay:250});f.defaults.baseURL="https://pixabay.com/api";const S="41834264-e3d0e5d80121a8a176d918e74";async function y({query:r,page:a=1,per_page:n}){return(await f.get("/",{params:{key:S,q:r,image_type:"photo",orientation:"horizontal",safesearch:!0,per_page:n,page:a}})).data}function d(r){M.show({class:"error-svg",position:"topRight",icon:"error-svg",message:r,maxWidth:"432",messageColor:"#fff",messageSize:"16px",backgroundColor:"#EF4040",close:!1,closeOnClick:!0})}function w(){const r=document.querySelector(".gallery-link").getBoundingClientRect();window.scrollBy({top:r.height*2,left:0,behavior:"smooth"})}function p(){s.loader.classList.remove("is-hidden")}function u(){s.loader.classList.add("is-hidden")}function g(){s.loadMoreBtn.classList.remove("is-hidden")}function c(){s.loadMoreBtn.classList.add("is-hidden")}function h(r,a){const n=r.map(({webformatURL:l,largeImageURL:e,tags:t,likes:i,views:L,comments:q,downloads:b})=>`
        <li class="gallery-item">
  <a class="gallery-link" href="${e}">
    <img
      class="gallery-image"
      src="${l}"
      alt="${t}"
    />
    <p class="gallery-descr">likes: <span class="descr-span">${i}</span> views: <span class="descr-span">${L}</span> comments: <span class="descr-span">${q}</span> downloads: <span class="descr-span">${b}</span></p>
  </a>
</li>`).join("");a.insertAdjacentHTML("beforeend",n)}const o={page:1,query:"",maxPage:0,per_page:40};u();c();s.form.addEventListener("submit",P);async function P(r){if(r.preventDefault(),s.gallery.innerHTML="",o.page=1,o.query=s.form.query.value.trim(),!o.query){d("The search field can't be empty! Please, enter your request!");return}try{p();const{hits:a,totalHits:n}=await y(o);o.maxPage=Math.ceil(n/o.per_page),h(a,s.gallery),m.refresh(),a.length>0?(g(),s.loadMoreBtn.addEventListener("click",k)):(c(),d("Sorry, there are no images matching your search query. Please, try again!")),u()}catch(a){console.log(a)}finally{s.form.reset(),o.page===o.maxPage&&(c(),d("We're sorry, but you've reached the end of search results!"))}}async function k(){o.page+=1;try{p(),c();const{hits:r}=await y(o);h(r,s.gallery),m.refresh(),u(),w(),g()}catch(r){console.log(r)}finally{o.page===o.maxPage&&(c(),d("We're sorry, but you've reached the end of search results!"))}}
//# sourceMappingURL=commonHelpers.js.map
