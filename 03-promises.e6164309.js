const e=document.querySelector('button[type="submit"]'),t=document.querySelector('input[name="amount"]'),o=document.querySelector('input[name="delay"]'),n=document.querySelector('input[name="step"]');function u(e,t){const o=Math.random()>.3;return new Promise(((n,u)=>{setTimeout((()=>{o?n({position:e,delay:t}):u({position:e,delay:t})}),t)}))}e.addEventListener("click",(function(e){e.preventDefault();for(let e=0;e<Number(t.value);e+=1){const t=e+1,i=Number(o.value)+Number(n.value*e);u(t,i).then((({position:e,delay:t})=>{console.log(`✅ Fulfilled promise ${e} in ${t}ms`)})).catch((({position:e,delay:t})=>{console.log(`❌ Rejected promise ${e} in ${t}ms`)}))}}));
//# sourceMappingURL=03-promises.e6164309.js.map