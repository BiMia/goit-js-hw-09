document.addEventListener("DOMContentLoaded",(t=>{const e=document.querySelector("[data-start]"),n=document.querySelector("[data-stop]");let d=null;e.addEventListener("click",(function(){d=setInterval((()=>{document.body.style.backgroundColor=`#${Math.floor(16777215*Math.random()).toString(16).padStart(6,"0")}`}),1e3),e.disabled=!0})),n.addEventListener("click",(function(){clearInterval(d),e.disabled=!1}))}));
//# sourceMappingURL=01-color-switcher.0f2df1cd.js.map