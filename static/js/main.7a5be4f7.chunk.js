(this["webpackJsonpsvburger-dev"]=this["webpackJsonpsvburger-dev"]||[]).push([[0],{37:function(e,t,r){},50:function(e,t,r){},51:function(e,t,r){},52:function(e,t,r){},53:function(e,t,r){},54:function(e,t,r){},55:function(e,t,r){},56:function(e,t,r){},58:function(e,t,r){"use strict";r.r(t);var c=r(2),n=r.n(c),s=r(29),a=r.n(s),i=r(8),o=r(6),l=(r(37),r(1));function u(){return Object(l.jsx)("div",{className:"card",children:Object(l.jsxs)("div",{className:"card-body container-btn text-center",children:[Object(l.jsxs)("p",{style:{fontSize:"40px"},className:"eranClass",children:["Welcome to ",Object(l.jsx)("span",{id:"bolderHeader",children:" SVBurger"})]}),Object(l.jsx)("p",{style:{fontSize:"30px"},className:"eranClass",children:"Lets start your way to our best burger"}),Object(l.jsx)("br",{}),Object(l.jsxs)(i.b,{to:"/SignIn",children:["  ",Object(l.jsx)("button",{style:{marginBottom:"40px",fontWeight:"bold",fontSize:"25px"},className:"btn btn-primary",children:"Sign In"})]}),Object(l.jsx)("br",{}),Object(l.jsxs)(i.b,{to:"/SignUp",children:["  ",Object(l.jsx)("button",{style:{fontWeight:"bold",fontSize:"25px"},className:"btn btn-primary",children:"Sign Up"})]})]})})}var j=r(12),d=r.n(j),b=r(15),p=r(9),h=r(26),m=(r(44),r(46),h.a.initializeApp({apiKey:"AIzaSyB3NN9nBcABO0fkgHvuZ3r3XU2sK5IjIP4",authDomain:"auth-development-1dced.firebaseapp.com",projectId:"auth-development-1dced",databaseURL:"https://auth-development-1dced-default-rtdb.europe-west1.firebasedatabase.app",storageBucket:"auth-development-1dced.appspot.com",messagingSenderId:"652127023114",appId:"1:652127023114:web:63723d827748615d286ff3"}));function x(e,t,r,c){h.a.database().ref("users/"+e).set({firstName:e,lastName:t,password:r,email:c})}var O=m.auth(),f=n.a.createContext();function v(){return Object(c.useContext)(f)}function g(e){var t=e.children,r=Object(c.useState)(),n=Object(p.a)(r,2),s=n[0],a=n[1],i=Object(c.useState)(!0),o=Object(p.a)(i,2),u=o[0],j=o[1];Object(c.useEffect)((function(){return O.onAuthStateChanged((function(e){a(e),j(!1)}))}),[]);var d={currentUser:s,login:function(e,t){return O.signInWithEmailAndPassword(e,t)},signup:function(e,t){return O.createUserWithEmailAndPassword(e,t)},logout:function(){return O.signOut()},resetPassword:function(e){return O.sendPasswordResetEmail(e)},updateEmail:function(e){return s.updateEmail(e)},updatePassword:function(e){return s.updatePassword(e)}};return Object(l.jsx)(f.Provider,{value:d,children:!u&&t})}r(50);function N(){var e=v().login,t=Object(o.g)(),r=Object(c.useRef)(),n=Object(c.useRef)();function s(){return(s=Object(b.a)(d.a.mark((function c(s){return d.a.wrap((function(c){for(;;)switch(c.prev=c.next){case 0:return s.preventDefault(),c.prev=1,c.next=4,e(r.current.value,n.current.value);case 4:t.push("/"),c.next=10;break;case 7:c.prev=7,c.t0=c.catch(1),alert("Failed to log in");case 10:case"end":return c.stop()}}),c,null,[[1,7]])})))).apply(this,arguments)}return Object(l.jsx)("div",{className:"card container-input text-center",children:Object(l.jsx)("form",{onSubmit:function(e){return s.apply(this,arguments)},children:Object(l.jsxs)("div",{className:"card-body text-center",children:[Object(l.jsx)("input",{className:"form-control",ref:r,type:"text",placeholder:"Enter your email"}),Object(l.jsx)("br",{}),Object(l.jsx)("input",{className:"form-control",ref:n,type:"password",placeholder:"Enter your password"}),Object(l.jsx)("br",{}),Object(l.jsx)(i.b,{id:"forgotId",to:"/Forgot-Password",children:"Forgot Password?"}),Object(l.jsx)("br",{}),Object(l.jsx)("button",{type:"submit",style:{fontWeight:"bold"},className:"btn btn-primary",children:"Sign in"})]})})})}r(51);function y(){var e=v(),t=e.signup,r=(e.currentUser,Object(o.g)()),n=Object(c.useRef)(),s=Object(c.useRef)(),a=Object(c.useRef)(),i=Object(c.useRef)(),u=Object(c.useRef)();function j(){if(1===s.current.value.length||s.current.value.length>10)throw"First name must be between 2 and 10 characters";if(!/^[a-zA-Z]+$/.test(s.current.value))throw"First name must be in English letters only";if(1===a.current.value.length||a.current.value.length>10)throw"Last name must be between 2 and 10 characters";if(!/^[a-zA-Z]+$/.test(a.current.value))throw"Last name must be in English letters only";if(n.current.value.indexOf("@")<0)throw"miising @";if(i.current.value!==u.current.value)throw"password and confirm error"}function p(){return(p=Object(b.a)(d.a.mark((function e(c){return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return c.preventDefault(),e.prev=1,j(),e.next=5,t(n.current.value,i.current.value);case 5:x(s.current.value,a.current.value,i.current.value,n.current.value),r.push("/"),e.next=12;break;case 9:e.prev=9,e.t0=e.catch(1),alert(e.t0.toString());case 12:case"end":return e.stop()}}),e,null,[[1,9]])})))).apply(this,arguments)}return Object(l.jsx)("div",{className:"card container-input text-center",children:Object(l.jsx)("div",{className:"card-body text-center",children:Object(l.jsxs)("form",{onSubmit:function(e){return p.apply(this,arguments)},children:[Object(l.jsx)("input",{className:"form-control",ref:s,type:"text",placeholder:"Type your first name"}),Object(l.jsx)("br",{}),Object(l.jsx)("input",{className:"form-control",ref:a,type:"text",placeholder:"Type your last name"}),Object(l.jsx)("br",{}),Object(l.jsx)("input",{required:!0,className:"form-control",type:"email",ref:n,placeholder:"Enter your email"}),Object(l.jsx)("br",{}),Object(l.jsx)("input",{required:!0,className:"form-control",type:"password",ref:i,placeholder:"Create Password"}),Object(l.jsx)("br",{}),Object(l.jsx)("input",{required:!0,className:"form-control",type:"password",ref:u,placeholder:"Confirm Password"}),Object(l.jsx)("br",{}),Object(l.jsx)("button",{type:"submit",style:{fontWeight:"bold"},className:"btn btn-primary",children:"Sign Up"}),Object(l.jsx)("br",{})]})})})}var w=r(32),S=r(19);r(52);function k(e){var t=Object(c.useState)("white"),r=Object(p.a)(t,2),n=r[0],s=r[1];return Object(l.jsx)("div",{className:" middle text-center",children:Object(l.jsx)("div",{onClick:function(){"white"===n?1==e.permision&&(e.add(e.index),s("lightBlue")):(e.delete(e.index),s("white"))},className:"card text-center mb-3",style:{backgroundColor:n,maxWidth:"540px",marginLeft:"auto",marginRight:"auto"},children:Object(l.jsxs)("div",{className:"row g-0",children:[Object(l.jsx)("div",{className:"col-md-4",children:Object(l.jsx)("img",{src:e.src,alt:"logo"})}),Object(l.jsx)("div",{className:"col-md-8",children:Object(l.jsxs)("div",{className:"card-body",children:[Object(l.jsx)("h5",{className:"card-title",children:e.title}),Object(l.jsx)("p",{className:"card-text",children:e.info}),Object(l.jsx)("p",{className:"card-text",children:Object(l.jsxs)("small",{className:"text-muted",children:["price: ",e.price]})})]})})]})})})}var C=r(31);r(53);function P(e){var t=Object(c.useState)(0),r=Object(p.a)(t,2),n=r[0],s=r[1],a=Object(c.useState)(e.items.map((function(){return 1}))),i=Object(p.a)(a,2),o=i[0],u=i[1],j=Object(c.useState)(!0),d=Object(p.a)(j,2),b=d[0],h=d[1],m=Object(c.useState)(1),x=Object(p.a)(m,2),O=x[0],f=x[1],v=function(){var t=0;return e.items.forEach((function(e,r){t+=Number(e.price)*Number(o[r])})),"150"!=O&&"160"!=O&&"170"!=O||(t*=.8),Number(t.toFixed(1))};return Object(l.jsx)("div",{className:"popup",children:Object(l.jsx)("div",{className:"popup_inner",children:Object(l.jsx)("div",{className:"container",children:Object(l.jsxs)("div",{className:"row",children:[Object(l.jsx)("div",{className:"col-12",children:Object(l.jsx)("h1",{children:"SVBurger Summary"})}),b?Object(l.jsxs)("div",{children:[Object(l.jsxs)("div",{className:"row mainTitle",children:[Object(l.jsx)("div",{className:"col-6",children:"Product / Quantity"}),Object(l.jsx)("div",{className:"col-6",children:"Price"})]}),e.items.map((function(e,t){return Object(l.jsxs)("div",{className:"row",children:[Object(l.jsx)("div",{className:"col-6",children:Object(l.jsxs)("div",{children:[Object(l.jsx)("label",{htmlFor:"",children:e.title}),Object(l.jsx)("br",{}),Object(l.jsx)("input",{onChange:function(e){return function(e,t){var r=o.map((function(r,c){return c==t&&(r=e.target.value),r}));u(Object(S.a)(r))}(e,t)},index:t,type:"number",defaultValue:"1",min:"1",max:"2"})]})}),Object(l.jsx)("div",{className:"col-6",children:e.price*o[t]})]})})),Object(l.jsxs)("div",{className:"row",children:[Object(l.jsx)("div",{className:"col-6"}),Object(l.jsxs)("div",{className:"col-6",children:[Object(l.jsxs)("label",{children:["Subtotal: ",v()+"$"]}),Object(l.jsx)("br",{}),Object(l.jsxs)("label",{children:["Service: ",Number((v()/10).toFixed(1))+"$"]})]}),Object(l.jsxs)("div",{className:"col-6",style:{backgroundColor:"lightgray"},children:[Object(l.jsx)("label",{children:"Coupon No. "}),Object(l.jsx)("input",{onChange:function(e){f(e.target.value)},placeholder:"XXX",maxLength:"3",type:"text"})]}),Object(l.jsx)("div",{className:"col-6",style:{backgroundColor:"lightgray"},children:150==O||160==O||170==O?Object(l.jsx)("span",{style:{color:"green"},children:"\u2713"}):null}),Object(l.jsxs)("div",{className:"col-6",style:{backgroundColor:"lightgray"},children:[Object(l.jsx)("label",{children:"table No. "}),Object(l.jsx)("input",{onChange:function(e){s(e.target.value)},defaultValue:"1",min:"1",max:"99",type:"number"})]}),Object(l.jsxs)("div",{className:"col-6",style:{backgroundColor:"lightgray"},children:["Total: ",v()+v()/10+"$"]})]}),Object(l.jsxs)("div",{className:"row",children:[Object(l.jsx)("div",{className:"col-6",children:Object(l.jsx)("button",{onClick:function(){h(!1)},className:"btn btn-primary",children:"Send"})}),Object(l.jsx)("div",{className:"col-6",children:Object(l.jsx)("button",{className:"btn btn-primary",onClick:function(){e.closePopup(!1)},children:"Back To Menu"})})]})]}):Object(l.jsxs)("div",{children:[Object(l.jsx)("h3",{children:" Your order has been successfully received "}),Object(l.jsxs)("h2",{children:[" Total: ",v(),"$ "]}),Object(l.jsxs)("h3",{children:["Table No ",n]}),Object(l.jsx)("h4",{children:"Your order will arrive at the table in ..."}),Object(l.jsxs)("h2",{children:["  ",Object(l.jsx)(C.a,{date:Date.now()+6e5})]}),Object(l.jsx)("div",{className:"col-12",children:Object(l.jsx)("button",{className:"btn btn-primary",onClick:function(){h(!0)},children:"Cancel"})})]})]})})})})}r(54);function B(){var e=v(),t=e.currentUser,r=e.logout,n=Object(o.g)(),s=Object(c.useState)(!0),a=Object(p.a)(s,2),i=a[0],u=a[1],j=Object(c.useState)(!1),h=Object(p.a)(j,2),m=h[0],x=h[1],O=Object(c.useState)([]),f=Object(p.a)(O,2),g=f[0],N=f[1],y=Object(c.useState)(!0),w=Object(p.a)(y,2),C=w[0],B=w[1],I=[{title:"Combo Meal",count:"1",info:"Burger + Drink",price:"59",src:"https://st.depositphotos.com/1004059/2748/v/950/depositphotos_27488437-stock-illustration-fast-food.jpg"},{title:"Kids Meal",count:"1",info:"Chicken + Drink",price:"39",src:"https://st2.depositphotos.com/5739646/11649/v/950/depositphotos_116498516-stock-illustration-kids-restaurant-menu-cardboard-character.jpg"},{title:"Burger",count:"1",info:"Burger 220",price:"45",src:"https://image.freepik.com/free-vector/hamburger-cheeseburger-cartoon-icon_202271-1154.jpg"},{title:"Vegan",count:"1",info:"Beyond Vegan Burger",price:"45",src:"https://st2.depositphotos.com/5739646/11444/v/950/depositphotos_114446346-stock-illustration-kids-restaurant-menu-cardboard-character.jpg"},{title:"Sides",count:"1",info:"Fries",price:"12",src:"https://st2.depositphotos.com/5739646/11444/v/950/depositphotos_114446306-stock-illustration-kids-restaurant-menu-cardboard-character.jpg"}];function E(){return(E=Object(b.a)(d.a.mark((function e(){return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,r();case 3:n.push("/HomePage"),e.next=9;break;case 6:e.prev=6,e.t0=e.catch(0),alert("error");case 9:case"end":return e.stop()}}),e,null,[[0,6]])})))).apply(this,arguments)}var F=function(e){g.length<3?(g.push(I[e]),1==g.length&&u(!1),N(Object(S.a)(g)),B(!0)):B(!1)},U=function(e){var t=g.filter((function(t){return t.title!==I[e].title}));0==t.length&&u(!0),N(Object(S.a)(t)),B(!0)};return Object(l.jsxs)("div",{className:"text-center",children:[Object(l.jsx)("strong",{children:"Email:"})," ",t.email,Object(l.jsx)("div",{className:"productsMain",children:I.map((function(e,t){return Object(l.jsx)(k,{permision:C,add:F,delete:U,title:e.title,info:e.info,price:e.price,src:e.src,index:t},t)}))}),Object(l.jsx)("button",{className:"btn btn-primary",variant:"link",onClick:function(){return E.apply(this,arguments)},children:" Log out "}),Object(l.jsx)("button",{className:"btn btn-primary",disabled:i,onClick:function(){x(!0)},children:" Reserve "}),1==m?Object(l.jsx)(P,{closePopup:x,items:g}):null]})}function I(){var e=v().currentUser;return Object(l.jsx)("div",{children:Object(l.jsx)(o.b,{render:function(t){return e?Object(l.jsx)(B,Object(w.a)({},t)):Object(l.jsx)(o.a,{to:"/HomePage"})}})})}r(55);function E(){var e=Object(c.useRef)(),t=v().resetPassword;function r(){return(r=Object(b.a)(d.a.mark((function r(c){return d.a.wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return c.preventDefault(),r.prev=1,r.next=4,t(e.current.value);case 4:alert("Check your inbox for further instructions"),r.next=10;break;case 7:r.prev=7,r.t0=r.catch(1),alert("Failed to reset password");case 10:case"end":return r.stop()}}),r,null,[[1,7]])})))).apply(this,arguments)}return Object(l.jsxs)(l.Fragment,{children:[Object(l.jsx)("div",{children:Object(l.jsxs)("div",{children:[Object(l.jsx)("form",{onSubmit:function(e){return r.apply(this,arguments)},children:Object(l.jsxs)("div",{className:"card-body container-btn text-center",id:"email",children:[Object(l.jsx)("input",{id:"inputForgotPassword",type:"email",ref:e,placeholder:"Enter Your Email",required:!0})," ",Object(l.jsx)("br",{}),Object(l.jsx)("button",{style:{marginBottom:"40px",fontWeight:"bold"},className:"btn btn-primary",type:"submit",children:"Reset Password"})]})}),Object(l.jsx)("div",{className:"w-100 text-center mt-3",children:Object(l.jsx)(i.b,{className:"SignInUpButton",to:"/SignIn",children:"Sign In"})})]})}),Object(l.jsxs)("div",{className:"w-100 text-center mt-2",children:[Object(l.jsx)("span",{id:"labelId",children:" Need an account? "})," ",Object(l.jsx)(i.b,{className:"SignInUpButton",to:"/SignUp",children:"Sign Up"})]})]})}var F=Object(o.h)((function(e){return Object(l.jsx)(c.Fragment,{children:Object(l.jsx)("div",{style:{},children:e.children})})}));r(56);var U=function(){return Object(l.jsxs)(l.Fragment,{children:[Object(l.jsx)("div",{children:Object(l.jsx)("p",{id:"mainHeader",className:"title",children:"SVBurger"})}),Object(l.jsx)("div",{className:"container",children:Object(l.jsx)(i.a,{children:Object(l.jsx)(g,{children:Object(l.jsx)(F,{children:Object(l.jsxs)(o.d,{children:[Object(l.jsx)(I,{exact:!0,path:"/",component:I}),Object(l.jsx)(o.b,{path:"/HomePage",component:u}),Object(l.jsx)(o.b,{path:"/SignIn",component:N}),Object(l.jsx)(o.b,{path:"/SignUp",component:y}),Object(l.jsx)(o.b,{path:"/Forgot-Password",component:E})]})})})})})]})};r(57);a.a.render(Object(l.jsx)(n.a.StrictMode,{children:Object(l.jsx)(U,{})}),document.getElementById("root"))}},[[58,1,2]]]);
//# sourceMappingURL=main.7a5be4f7.chunk.js.map