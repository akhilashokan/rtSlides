document.addEventListener("readystatechange",(()=>{"complete"===document.readyState&&function(){let e=document.querySelector(".rt_slides"),t=document.querySelector(".rt_wrapper"),r=t.getBoundingClientRect().width,n=e.querySelector(".rt_navigation");var c=0;let a=(t.childElementCount-1)*r;n.addEventListener("click",(e=>{console.log(c,a),"right"===e.target.accessKey&&c<a&&(c+=r),"left"===e.target.accessKey&&c>=0&&(c-=r),t.style.transform=`translateX(-${c}px)`}))}()}));