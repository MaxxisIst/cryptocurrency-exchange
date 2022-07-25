(()=>{"use strict";var e={50:(e,t,s)=>{s(70),s(525),s(124),s(982),s(526),s(279),(0,s(450).T)()},526:()=>{const e=document.querySelector(".exchange-rates__list"),t=new WebSocket("wss://web-socket-current.herokuapp.com");t.addEventListener("message",(t=>{((e,t)=>{const{from:s,to:o,rate:n,change:a}=JSON.parse(t),r=document.createElement("li");r.classList.add("exchange-rates__item",1===a?"exchange-rates__item_up":"exchange-rates__item_down");const c=document.createElement("span");c.classList.add("exchange-rates__currency"),c.textContent=`${s}/${o}`;const l=document.createElement("span");l.classList.add("exchange-rates__value"),l.textContent=n,r.append(c,l),e.prepend(r),e.children.length>4&&e.children[4].remove()})(e,t.data)})),t.addEventListener("error",(e=>{console.log(e)}))},450:(e,t,s)=>{s.d(t,{T:()=>n});const o=(e,t)=>{e.classList.contains("faq__item_show")&&!e.collapsing&&(t.style.height=`${t.offsetHeight}px`,t.offsetHeight,t.style.display="block",t.style.height=0,t.style.overflow="hidden",t.style.transition="height 0.36s ease-in-out",e.classList.remove("faq__item_show"),e.collapsing=!0,setTimeout((()=>{t.style.display="",t.style.height="",t.style.overflow="",t.style.transition="",e.collapsing=!1}),360))},n=()=>{const e=document.querySelector(".faq__list"),t=document.querySelectorAll(".faq__item");e.addEventListener("click",(e=>{const s=e.target.closest(".faq__question");if(s){const e=s.closest(".faq__item");t.forEach(((t,s)=>{const n=t.querySelector(".faq__answer");e===t?t.classList.contains("faq__item_show")?o(t,n):((e,t)=>{if(e.classList.contains("faq__item_show")||e.collapsing)return;t.style.display="block";const s=t.offsetHeight;t.style.height=0,t.style.overflow="hidden",t.style.transition="height 0.36s ease-in-out",t.offsetHeight,t.style.height=`${s}px`,e.collapsing=!0,setTimeout((()=>{e.classList.add("faq__item_show"),t.style.display="",t.style.height="",t.style.overflow="",t.style.transition="",e.collapsing=!1}),360)})(t,n):o(t,n)}))}}))}},124:()=>{const e=document.querySelector(".header__nav-btn"),t=document.querySelector(".header__navigation");e.addEventListener("click",(()=>{t.classList.toggle("header__navigation_open")}))},70:()=>{const e=document.querySelector(".hero__btn"),t=document.querySelector(".overlay"),s=document.querySelector(".modal");setTimeout((()=>{t.style.transitionDuration="0.36s",s.style.transitionDuration="0.36s"}),360),e.addEventListener("click",(()=>{t.classList.add("overlay_open"),s.classList.add("modal_open")})),t.addEventListener("click",(e=>{const o=e.target;(o===t||o.closest(".modal__close"))&&(t.classList.remove("overlay_open"),s.classList.remove("modal_open"))}));const o=document.querySelector("form"),n=document.querySelector(".modal__title");o.addEventListener("submit",(e=>{e.preventDefault();const t={name:o.name.value,surname:o.surname.value,tel:o.tel.value};fetch("https://api-form-order.herokuapp.com/api/order",{method:"post",body:JSON.stringify(t)}).then((e=>e.json())).then((e=>{n.textContent=`${e.name}, Ваша заявка успешно отправлена, номер: ${e.id}`,o.remove()}))}))},525:()=>{const e=document.querySelectorAll('a[href*="#"]');for(let t of e)t.addEventListener("click",(function(e){e.preventDefault();const s=t.getAttribute("href").substr(1);document.getElementById(s).scrollIntoView({behavior:"smooth",block:"start"})}))},279:()=>{const e=document.querySelector(".remark");let t=e.offsetHeight;e.style.height=`${t}px`;const s=()=>{t-=5,e.style.height=`${t}px`,t>0?requestAnimationFrame(s):e.style.display="none"};setTimeout(s,5e3)},982:()=>{const e=document.querySelectorAll(".advantage__btn"),t=document.querySelectorAll(".advantage__item-content");e.forEach(((s,o)=>{s.addEventListener("click",(()=>{t.forEach(((n,a)=>{o===a?(s.classList.add("advantage__btn_active"),n.classList.add("advantage__item-content_active")):(e[a].classList.remove("advantage__btn_active"),t[a].classList.remove("advantage__item-content_active"))}))}))}))}},t={};function s(o){var n=t[o];if(void 0!==n)return n.exports;var a=t[o]={exports:{}};return e[o](a,a.exports,s),a.exports}s.d=(e,t)=>{for(var o in t)s.o(t,o)&&!s.o(e,o)&&Object.defineProperty(e,o,{enumerable:!0,get:t[o]})},s.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),s(50),s(526),s(450),s(124),s(70),s(525),s(279),s(982)})();