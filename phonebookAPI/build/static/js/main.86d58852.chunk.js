(this.webpackJsonpphonebook=this.webpackJsonpphonebook||[]).push([[0],{20:function(e,t,n){},40:function(e,t,n){},41:function(e,t,n){"use strict";n.r(t);var c=n(15),a=n.n(c),r=(n(20),n(6)),s=n(3),i=n(1),o=n(0),d=function(e){var t=e.filter,n=e.handler;return Object(o.jsx)("div",{children:Object(o.jsx)("input",{value:t,onChange:n,placeholder:"Search contacts..",className:"search_bar"})})},u=function(e){return Object(o.jsx)("div",{children:Object(o.jsxs)("form",{onSubmit:e.addNewPerson,children:[Object(o.jsx)("table",{className:"form",children:Object(o.jsxs)("tbody",{children:[Object(o.jsxs)("tr",{children:[Object(o.jsx)("td",{children:"Name"}),Object(o.jsx)("td",{children:Object(o.jsx)("input",{value:e.newName,onChange:e.handleNewName,className:"input"})})]}),Object(o.jsxs)("tr",{children:[Object(o.jsx)("td",{children:"Number"}),Object(o.jsx)("td",{children:Object(o.jsx)("input",{type:"text",pattern:"\\d*-*",value:e.newNumber,onChange:e.handleNewNumber,className:"input"})})]})]})}),Object(o.jsx)("div",{className:"space",children:Object(o.jsx)("button",{type:"submit",className:"button",children:"add"})})]})})},l=function(e){var t=e.person,n=e.deleteHandler;return Object(o.jsxs)("div",{className:"card",children:[Object(o.jsx)("div",{className:"photo"}),Object(o.jsx)("div",{className:"banner"}),Object(o.jsx)("ul",{children:Object(o.jsxs)("li",{children:[Object(o.jsx)("b",{children:t.name})," ",Object(o.jsx)("br",{}),t.number]},t.name)}),Object(o.jsx)("button",{className:"contact",id:"main-button",onClick:n,children:"Delete"})]})},j=n(4),b=n.n(j),h="/api/persons",m=function(){return b.a.get(h).then((function(e){return e.data}))},f=function(e){return b.a.post(h,e).then((function(e){return e.data}))},O=function(e,t){return b.a.put("".concat(h,"/").concat(e),t).then((function(e){return e.data}))},x=function(e){return b.a.delete("".concat(h,"/").concat(e))},p=function(e){var t=e.message,n=e.style;return null==t?null:n?Object(o.jsx)("div",{className:"success",children:t}):Object(o.jsx)("div",{className:"error",children:t})},N=(n(40),function(){var e=Object(i.useState)([]),t=Object(s.a)(e,2),n=t[0],c=t[1],a=Object(i.useState)(""),j=Object(s.a)(a,2),b=j[0],h=j[1],N=Object(i.useState)(""),v=Object(s.a)(N,2),w=v[0],g=v[1],y=Object(i.useState)(""),k=Object(s.a)(y,2),C=k[0],S=k[1],L=Object(i.useState)(!0),D=Object(s.a)(L,2),P=D[0],E=D[1],H=Object(i.useState)(null),J=Object(s.a)(H,2),B=J[0],I=J[1];Object(i.useEffect)((function(){m().then((function(e){c(e)}))}),[]);var T=function(e,t){E(t),I(e),setTimeout((function(){I(null)}),5e3)},U=C?n.filter((function(e){return e.name.toLocaleLowerCase().includes(C.toLocaleLowerCase())})):n;return Object(o.jsxs)("div",{children:[Object(o.jsx)("div",{className:"header",children:Object(o.jsx)("h2",{children:"Phonebook"})}),Object(o.jsxs)("div",{className:"page",children:[Object(o.jsx)("h2",{children:"add a new"}),Object(o.jsx)(u,{addNewPerson:function(e){if(e.preventDefault(),b&&w)if(n.filter((function(e){return e.name===b})).length>0){var t=n.filter((function(e){return e.name===b})).pop();t.number!==w?window.confirm("".concat(t.name," is already addded to phonebook, replace the old number with a new one?"))&&O(t.id,Object(r.a)(Object(r.a)({},t),{},{number:w})).then((function(e){c(n.map((function(n){return n.id!==t.id?n:e}))),h(""),g(""),T("Updated ".concat(t.name),!0)})).catch((function(e){T("'".concat(t.name,"' was already deleted from server"),!1),c(n.filter((function(e){return e.id!==t.id})))})):T("".concat(b," is already added to the phonebook"),!1)}else{var a={name:b,number:w};f(a).then((function(e){c(n.concat(e)),h(""),g(""),T("Contact ".concat(a.name," created!"),!0)})).catch((function(e){T(e.response.data,!1)}))}else T("Can't add an empty contact!",!1)},newName:b,handleNewName:function(e){return h(e.target.value)},newNumber:w,handleNewNumber:function(e){return g(e.target.value)}})]}),Object(o.jsxs)("div",{className:"filter",children:[Object(o.jsx)(p,{message:B,style:P}),Object(o.jsx)("h2",{children:"Numbers"}),Object(o.jsx)(d,{filter:C,handler:function(e){return S(e.target.value)}})]}),Object(o.jsx)("div",{className:"grid",children:U.map((function(e){return Object(o.jsx)(l,{person:e,deleteHandler:function(){return t=e.id,a=e.name,void(window.confirm("Delete ".concat(a," ?"))&&x(t).then((function(e){c(n.filter((function(e){return e.id!==t}))),T("".concat(a," deleted"),!0)})).catch((function(e){T("'".concat(a,"' was already deleted from server"),!1),c(n.filter((function(e){return e.id!==t})))})));var t,a}},e.name)}))})]})});a.a.render(Object(o.jsx)(N,{}),document.getElementById("root"))}},[[41,1,2]]]);
//# sourceMappingURL=main.86d58852.chunk.js.map