(this["webpackJsonpstarter-project"]=this["webpackJsonpstarter-project"]||[]).push([[0],{193:function(e,t,c){"use strict";c.r(t);var n=c(0),s=c.n(n),j=c(70),r=c.n(j),a=(c(78),c(79),c(15)),b=c(2),i=c(73),o=c(71),d=c.n(o),h=c(1);var l=function(){var e=Object(b.f)().post,t=Object(b.f)().date,c=Object(n.useState)(""),s=Object(i.a)(c,2),j=s[0],r=s[1];return fetch("/blog/"+t+"/"+e+"/post.md").then((function(e){return e.text()})).then((function(e){var t;(t=e).includes("<!DOCTYPE html>")?r("No hemos podido encontrar el post que buscas..."):r(t)})),Object(h.jsx)(d.a,{children:j})};var O=function(){return Object(h.jsxs)("div",{className:"App",children:[Object(h.jsx)("div",{children:Object(h.jsxs)("nav",{children:[Object(h.jsx)(a.b,{to:"/",children:Object(h.jsx)("div",{className:"nav-btn",children:Object(h.jsx)("p",{children:"Home"})})}),Object(h.jsx)(a.b,{to:"/about",children:Object(h.jsx)("div",{className:"nav-btn",children:Object(h.jsx)("p",{children:"About"})})})]})}),Object(h.jsx)("div",{className:"content",children:Object(h.jsxs)(b.c,{children:[Object(h.jsxs)(b.a,{exact:!0,path:"/",children:[Object(h.jsx)("h1",{children:"Home"}),Object(h.jsx)("br",{}),Object(h.jsx)(a.b,{to:"/2021/T1",children:"\xbfEsto funciona?"})]}),Object(h.jsx)(b.a,{path:"/about",children:Object(h.jsx)("h1",{children:"About"})}),Object(h.jsx)(b.a,{exact:!0,path:"/:date/:post/",children:Object(h.jsx)(l,{})}),Object(h.jsx)(b.a,{children:"404"})]})})]})};r.a.render(Object(h.jsx)(s.a.StrictMode,{children:Object(h.jsx)(a.a,{children:Object(h.jsx)(O,{})})}),document.getElementById("root"))},78:function(e,t,c){},79:function(e,t,c){}},[[193,1,2]]]);
//# sourceMappingURL=main.185d5f17.chunk.js.map