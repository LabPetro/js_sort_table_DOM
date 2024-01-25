document.querySelectorAll("th").forEach(function(e,t){e.addEventListener("click",function(){var e,r;(r=Array.from((e=document.querySelector("table").querySelector("tbody")).querySelectorAll("tr"))).sort(function(e,r){var c=e.cells[t].textContent,n=r.cells[t].textContent;return 2===t||3===t?Number(c.replace(/[$,]/g,""))-Number(n.replace(/[$,]/g,"")):c.localeCompare(n,{numeric:"true",sensitivity:"base"})}),r.forEach(function(t){e.removeChild(t)}),r.forEach(function(t){e.appendChild(t)})})});//# sourceMappingURL=index.bc1c1688.js.map

//# sourceMappingURL=index.bc1c1688.js.map
