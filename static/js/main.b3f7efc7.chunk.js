(this.webpackJsonpusers_board_client=this.webpackJsonpusers_board_client||[]).push([[0],{101:function(e,t,n){},104:function(e,t,n){},111:function(e,t,n){"use strict";n.r(t);var r=n(0),a=n.n(r),c=n(26),o=n.n(c),i=(n(101),n(17)),s=n(55),u=n(10),l=n(41),d=n.n(l),j=(n(104),n(168)),b=n(156),f=n(158),O=n(86),h=n.n(O),p=n(2),v=a.a.memo((function(e){var t=e.users;return Object(p.jsx)(p.Fragment,{children:t.map((function(e){var t;return Object(p.jsxs)(j.a,{children:[Object(p.jsx)(b.a,{children:Object(p.jsx)(h.a,{fontSize:"large",style:{color:(null===e||void 0===e||null===(t=e.carColor)||void 0===t?void 0:t.name)||"black"}})}),Object(p.jsx)(f.a,{primary:e.name})]},e.id)}))})})),m=n(159),x=n(162),y=n(161),w=n(171),g=n(164),C=a.a.memo((function(e){var t=e.colors,n=e.addUser,a=Object(r.useState)(""),c=Object(u.a)(a,2),o=c[0],i=c[1],l=Object(r.useState)(0),j=Object(u.a)(l,2),b=j[0],f=j[1],O=Object(r.useState)(!1),h=Object(u.a)(O,2),v=h[0],C=h[1],S=Object(r.useState)(!1),k=Object(u.a)(S,2),T=k[0],E=k[1],I=Object(r.useState)(!1),U=Object(u.a)(I,2),_=U[0],J=U[1],A=t.find((function(e){return e.id===b})),B=function(){var e=Object(s.a)(d.a.mark((function e(){return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(o&&b){e.next=4;break}return C(!o),E(!b),e.abrupt("return");case 4:return J(!0),e.prev=5,e.next=8,n(o,b);case 8:i(""),f(0),e.next=15;break;case 12:e.prev=12,e.t0=e.catch(5),window.alert(e.t0);case 15:return e.prev=15,J(!1),e.finish(15);case 18:case"end":return e.stop()}}),e,null,[[5,12,15,18]])})));return function(){return e.apply(this,arguments)}}();return Object(p.jsxs)("form",{onSubmit:function(e){e.preventDefault(),B()},children:[Object(p.jsx)(m.a,{}),Object(p.jsxs)("div",{style:{padding:"16px 0 16px",display:"flex",alignItems:"end",justifyContent:"space-between"},children:[Object(p.jsx)(x.a,{variant:"standard",label:"Name",style:{width:"45%"},value:o,onChange:function(e){i(e.target.value),C(!1)},error:v,disabled:_}),Object(p.jsxs)(y.a,{label:"Car color",style:{width:"45%",color:(null===A||void 0===A?void 0:A.name)||"currentColor"},variant:"standard",value:b,onChange:function(e){E(!1),f(+e.target.value)},error:T,disabled:_,children:[Object(p.jsx)(w.a,{value:0,disabled:!0,children:"Color"}),t.map((function(e){return Object(p.jsx)(w.a,{style:{color:e.name},value:e.id,children:e.name},e.id)}))]})]}),Object(p.jsx)(g.a,{type:"submit",variant:"outlined",style:{width:"100%"},loading:_,children:"Add new player"})]})})),S=n(167),k=n(61),T=a.a.memo((function(e){var t=e.children;return Object(p.jsxs)(S.a,{elevation:10,style:{padding:"20px",width:"30%",position:"absolute",top:"50%",left:"50%",transform:"translate(-50%, -50%)"},children:[Object(p.jsx)(k.a,{variant:"h2",style:{textAlign:"center",marginBottom:"16px"},children:"Users` board"}),t,Object(p.jsx)(m.a,{})]})})),E=n(70),I="http://localhost:5000";function U(e){var t,n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:null,r={method:arguments.length>1&&void 0!==arguments[1]?arguments[1]:"GET"};return n&&(r.body=JSON.stringify(n),r.headers={"Content-Type":"application/json; charset=UTF-8"}),(t=300,new Promise((function(e){setTimeout(e,t)}))).then((function(){return fetch(I+e,r)})).then((function(e){if(!e.ok)throw new Error;return e.json()}))}var _=function(e){return U(e)},J=function(e,t){return U(e,"POST",t)},A=function(){return _("/users")},B=function(e){return J("/users",e)},F=function(){return _("/colors")},M=function(){var e=Object(r.useState)([]),t=Object(u.a)(e,2),n=t[0],a=t[1],c=Object(r.useState)([]),o=Object(u.a)(c,2),l=o[0],j=o[1],b=Object(r.useMemo)((function(){return function(e,t){return e.map((function(e){return Object(E.a)(Object(E.a)({},e),{},{carColor:t.find((function(t){return t.id===e.carColorId}))})}))}(n,l)}),[n,l]);Object(r.useEffect)((function(){A().then(a),F().then(j)}),[]);var f=Object(r.useCallback)(function(){var e=Object(s.a)(d.a.mark((function e(t,n){var r;return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,B({name:t,carColorId:n});case 2:r=e.sent,a((function(e){return[].concat(Object(i.a)(e),[r])}));case 4:case"end":return e.stop()}}),e)})));return function(t,n){return e.apply(this,arguments)}}(),[]);return Object(p.jsxs)(T,{children:[Object(p.jsx)(v,{users:b}),Object(p.jsx)(C,{colors:l,addUser:f})]})};o.a.render(Object(p.jsx)(a.a.StrictMode,{children:Object(p.jsx)(M,{})}),document.getElementById("root"))}},[[111,1,2]]]);
//# sourceMappingURL=main.b3f7efc7.chunk.js.map