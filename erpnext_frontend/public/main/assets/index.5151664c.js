var h=(n,r,s)=>new Promise((t,e)=>{var o=c=>{try{u(s.next(c))}catch(d){e(d)}},i=c=>{try{u(s.throw(c))}catch(d){e(d)}},u=c=>c.done?t(c.value):Promise.resolve(c.value).then(o,i);u((s=s.apply(n,r)).next())});import{c as m,r as y,a as L,b as v,d as P,_ as k,e as E,o as w,f as I,g as A,h as C,s as R,i as b,j as O,C as S,I as q,k as x}from"./vendor.f9ec8656.js";const $=function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))t(e);new MutationObserver(e=>{for(const o of e)if(o.type==="childList")for(const i of o.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&t(i)}).observe(document,{childList:!0,subtree:!0});function s(e){const o={};return e.integrity&&(o.integrity=e.integrity),e.referrerpolicy&&(o.referrerPolicy=e.referrerpolicy),e.crossorigin==="use-credentials"?o.credentials="include":e.crossorigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function t(e){if(e.ep)return;e.ep=!0;const o=s(e);fetch(e.href,o)}};$();const j="modulepreload",_={},N="/assets/erpnext_frontend/main/",U=function(r,s){return!s||s.length===0?r():Promise.all(s.map(t=>{if(t=`${N}${t}`,t in _)return;_[t]=!0;const e=t.endsWith(".css"),o=e?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${t}"]${o}`))return;const i=document.createElement("link");if(i.rel=e?"stylesheet":j,e||(i.as="script",i.crossOrigin=""),i.href=t,document.head.appendChild(i),e)return new Promise((u,c)=>{i.addEventListener("load",u),i.addEventListener("error",c)})})).then(()=>r())},p=m({url:"frappe.auth.get_logged_user",cache:"User",onError(n){n&&n.exc_type==="AuthenticationError"&&f.push({name:"LoginPage"})}});function g(){let r=new URLSearchParams(document.cookie.split("; ").join("&")).get("user_id");return r==="Guest"&&(r=null),r}const l=y({login:m({url:"login",makeParams({email:n,password:r}){return{usr:n,pwd:r}},onSuccess(n){p.reload(),l.user=g(),l.login.reset(),f.replace(n.default_route||"/")}}),logout:m({url:"logout",onSuccess(){p.reset(),l.user=g(),f.replace({name:"Login"})}}),user:g(),isLoggedIn:L(()=>!!l.user)}),B=[{name:"MainPage",path:"/mainpage",component:()=>U(()=>import("./MainPage.382edcc1.js"),["assets/MainPage.382edcc1.js","assets/vendor.f9ec8656.js","assets/vendor.46449452.css"]),meta:{requiresAuth:!0}},{name:"Login",path:"/login"}];let f=v({history:P("/main"),routes:B});f.beforeEach((n,r,s)=>h(void 0,null,function*(){let t=l.isLoggedIn;try{yield p.promise}catch(e){t=!1}n.meta.requiresAuth&&!t&&(window.location.href="/login"),s()}));const F={};function M(n,r){const s=E("router-view");return w(),I("div",null,[A(s)])}var V=k(F,[["render",M]]);let a=C(V);R("resourceFetcher",x);a.use(f);a.use(b);a.component("Button",O);a.component("Card",S);a.component("Input",q);a.mount("#app");
