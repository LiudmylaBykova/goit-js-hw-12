import"./assets/styles-ba76fef6.js";import{a as d,S as M,i as b}from"./assets/vendor-c145bea9.js";const e={form:document.querySelector(".search-form"),input:document.querySelector(".search-inp"),searchBtn:document.querySelector(".search-btn"),gallery:document.querySelector(".gallery"),loadMoreBtn:document.querySelector(".load-btn"),loader:document.querySelector(".loader")};d.defaults.baseURL="https://pixabay.com/api";const q="41834264-e3d0e5d80121a8a176d918e74",r="is-hidden";let o=1,l="",i=0;e.form.addEventListener("submit",v);async function v(a){if(a.preventDefault(),e.gallery.innerHTML="",o=1,e.loadMoreBtn.classList.add(r),l=e.form.query.value.trim(),!l){n("The search field can't be empty! Please, enter your request!");return}try{const{hits:s,total:t}=await u(l);i=Math.ceil(t/40),y(s,e.gallery),s.length>0?(e.loadMoreBtn.classList.remove(r),e.loadMoreBtn.addEventListener("click",B)):(e.loadMoreBtn.classList.add(r),n("Sorry, there are no images matching your search query. Please, try again!")),c(!1)}catch(s){console.log(s)}finally{e.form.reset(),o===i&&(e.loadMoreBtn.classList.add(r),n("We're sorry, but you've reached the end of search results!"))}}async function B(){o+=1;try{c(!0),e.loadMoreBtn.classList.add(r);const{hits:a}=await u(l,o);y(a,e.gallery),c(!1),S(),e.loadMoreBtn.classList.remove(r)}catch(a){console.log(a)}finally{o>i&&(e.loadMoreBtn.classList.add(r),n("We're sorry, but you've reached the end of search results!"))}}function u(a,s=1){return c(!0),d.get("/",{params:{key:q,q:a,image_type:"photo",orientation:"horizontal",safesearch:!0,per_page:40,page:s}}).then(({data:t})=>t)}function y(a){const s=a.map(({webformatURL:t,largeImageURL:m,tags:g,likes:p,views:h,comments:f,downloads:L})=>`
        <li class="gallery-item">
  <a class="gallery-link" href="${m}">
    <img
      class="gallery-image"
      src="${t}"
      alt="${g}"
    />
    <p class="gallery-descr">likes: <span class="descr-span">${p}</span> views: <span class="descr-span">${h}</span> comments: <span class="descr-span">${f}</span> downloads: <span class="descr-span">${L}</span></p>
  </a>
</li>`).join("");e.gallery.insertAdjacentHTML("beforeend",s),new M(".gallery-item a",{captionsData:"alt",captionDelay:250})}function n(a){b.show({class:"error-svg",position:"topRight",icon:"error-svg",message:a,maxWidth:"432",messageColor:"#fff",messageSize:"16px",backgroundColor:"#EF4040",close:!1,closeOnClick:!0})}function c(a=!0){e.loader.style.display=a?"inline-block":"none"}function S(){const a=document.querySelector(".gallery-link").getBoundingClientRect();window.scrollBy({top:a.height*2,left:0,behavior:"smooth"})}
//# sourceMappingURL=commonHelpers.js.map