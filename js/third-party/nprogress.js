NProgress.configure({showSpinner:CONFIG.nprogress.spinner}),NProgress.start(),document.addEventListener("readystatechange",(()=>{"interactive"===document.readyState&&NProgress.inc(.8),"complete"===document.readyState&&NProgress.done()})),document.addEventListener("pjax:send",(()=>{NProgress.start()})),document.addEventListener("pjax:success",(()=>{NProgress.done()}));