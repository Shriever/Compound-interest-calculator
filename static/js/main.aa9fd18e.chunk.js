(this["webpackJsonpcompound-interest-calc"]=this["webpackJsonpcompound-interest-calc"]||[]).push([[0],{34:function(e,t,n){},43:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n(12),i=n.n(r),c=n(13),o=(n(34),n(11)),s=n(15),l=n(6),u=(n(35),n(47)),b=n(46),j=n(24),m=n.n(j),p=n(2),d=function(e){var t=e.handleFormChange,n=e.inputs;return Object(p.jsxs)(p.Fragment,{children:[Object(p.jsx)("h2",{className:"future-balance",children:"Future Balance"}),Object(p.jsxs)("h2",{className:"total",children:["$",m()(e.total).format("0,0")]}),Object(p.jsxs)(u.a,{className:"bt-1 investment-form",children:[Object(p.jsxs)(u.a.Group,{controlId:"formBasicPrincipal",children:[Object(p.jsx)(u.a.Label,{children:"Initial Investment"}),Object(p.jsx)(u.a.Control,{className:"form-input",min:"100",type:"number",name:"principal",value:n.principal,onChange:t}),e.fieldErrors.principal&&Object(p.jsx)(b.a,{variant:"danger",className:"form-error",children:e.fieldErrors.principal})]}),Object(p.jsxs)(u.a.Group,{controlId:"formBasicContributions",children:[Object(p.jsx)(u.a.Label,{children:"Annual Contribution"}),Object(p.jsx)(u.a.Control,{className:"form-input",min:"0",type:"number",name:"annual-contribution",value:n.annualContribution,onChange:t}),e.fieldErrors.annualContribution&&Object(p.jsx)(b.a,{variant:"danger",className:"form-error",children:e.fieldErrors.annualContribution})]}),Object(p.jsxs)(u.a.Group,{controlId:"formBasicTimeSpan",children:[Object(p.jsx)(u.a.Label,{children:"Investment Time Span in Years"}),Object(p.jsx)(u.a.Control,{className:"form-input",min:"0",type:"number",name:"time-span",value:n.timeSpan,onChange:t}),e.fieldErrors.timeSpan&&Object(p.jsx)(b.a,{variant:"danger",className:"form-error",children:e.fieldErrors.timeSpan})]}),Object(p.jsxs)(u.a.Group,{controlId:"formBasicRateOfReturn",children:[Object(p.jsx)(u.a.Label,{children:"Annual Rate of Return"}),Object(p.jsx)(u.a.Control,{className:"form-input",min:"1",max:"1000",type:"number",name:"rate-of-return",value:n.rateOfReturn,onChange:t}),e.fieldErrors.rateOfReturn&&Object(p.jsx)(b.a,{variant:"danger",className:"form-error",children:e.fieldErrors.rateOfReturn})]})]})]})},O=n.p+"static/media/typescript-logo.57404d48.png",h=n.p+"static/media/react-logo.60daf01b.png",f=n.p+"static/media/sass-logo.c5213e47.png",x=function(){return Object(p.jsxs)("div",{children:[Object(p.jsx)("h2",{children:"Challenges"}),Object(p.jsxs)("p",{className:"about-text",children:["I'd say that the most challenging parts of this project had to be",Object(p.jsx)("br",{})," 1) Adapting to typescript and ",Object(p.jsx)("br",{})," 2) Figuring out how to calculate compound interest. I felt comfortable with primitive types thanks to my experience with the C programming language which I worked with in Harvard's CS50 course. But defining types for functions and React Hooks definitely took some getting used to."]}),Object(p.jsx)("br",{}),Object(p.jsx)("h2",{children:"Tech Used"}),Object(p.jsxs)("div",{className:"about-images",children:[Object(p.jsx)("img",{src:h,alt:"",width:"200"}),Object(p.jsx)("img",{src:O,alt:"",width:"200"}),Object(p.jsx)("img",{src:f,alt:"",width:"200"})]})]})},g=function(e,t,n){return e*((Math.pow(1+t,n)-1)/t)*(1+t)},C=function(e,t,n){return e*Math.pow(1+t,n)},v=function(e){var t=e.principal,n=e.annualContribution,a=e.timeSpan,r=e.rateOfReturn/100,i=C(t,r,a)+g(n,r,a);return Math.ceil(i)},N=function(e,t){var n=e.target.name,a=e.target.value;return"principal"===n?Object(o.a)(Object(o.a)({},t),{},{principal:Number(a)}):"annual-contribution"===n?Object(o.a)(Object(o.a)({},t),{},{annualContribution:a}):"time-span"===n?Object(o.a)(Object(o.a)({},t),{},{timeSpan:a}):"rate-of-return"===n?Object(o.a)(Object(o.a)({},t),{},{rateOfReturn:a}):t},S=function(e,t){var n={principal:"",annualContribution:"",timeSpan:"",rateOfReturn:""};n.principal=e.principal<=0?"Please enter an investment amount above 0":"",n.annualContribution=e.annualContribution<0?"Contribution amount cannot be negative":"",n.timeSpan=e.timeSpan<=0?"Please enter a time span above 0":"",n.rateOfReturn=e.rateOfReturn<=0?"Please enter a rate of return above 0":"",t(n)},R=n(45),w=function(){var e=Object(a.useState)({principal:1e4,annualContribution:100,timeSpan:5,rateOfReturn:10}),t=Object(s.a)(e,2),n=t[0],r=t[1],i=Object(a.useState)(0),u=Object(s.a)(i,2),b=u[0],j=u[1],m=Object(a.useState)({principal:"",annualContribution:"",timeSpan:"",rateOfReturn:""}),O=Object(s.a)(m,2),h=O[0],f=O[1],g=Object(a.useCallback)((function(e){S(n,f),r((function(t){return N(e,t)})),j(v(n))}),[n]);Object(a.useEffect)((function(){g({target:{name:""}})}),[g]);var C={handleFormChange:g,inputs:n,fieldErrors:h,total:b};return Object(p.jsxs)(R.a,{className:"app",children:[Object(p.jsx)(c.b,{to:"/calculator",className:"link",children:"Calculator"}),Object(p.jsx)(c.b,{to:"/about",className:"link",children:"About"}),Object(p.jsx)("h1",{className:"text-center",children:"Levi's Compound Interest Calculator"}),Object(p.jsxs)(l.d,{children:[Object(p.jsx)(l.b,{exact:!0,path:"/calculator",children:Object(p.jsx)(d,Object(o.a)({},C))}),Object(p.jsx)(l.b,{path:"/about",component:x}),Object(p.jsx)(l.b,{path:"*",children:Object(p.jsx)(l.a,{to:"/calculator"})})]})]})};i.a.render(Object(p.jsx)(c.a,{children:Object(p.jsx)(a.StrictMode,{children:Object(p.jsx)(w,{})})}),document.getElementById("root"))}},[[43,1,2]]]);
//# sourceMappingURL=main.aa9fd18e.chunk.js.map