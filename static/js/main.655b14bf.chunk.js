(this["webpackJsonpbutton-data"]=this["webpackJsonpbutton-data"]||[]).push([[0],{10:function(e,r,t){},12:function(e,r,t){"use strict";t.r(r);var d=t(1),o=t.n(d),n=t(4),a=t.n(n),c=(t(10),t(3),t(5)),s=[{orderStage:"new",orderName:"order 1",orderId:1,orderDate:"2020-11-17"},{orderStage:"processing",orderName:"order 2",orderId:2,orderDate:"2021-1-10"},{orderStage:"processing",orderName:"order 3",orderId:3,orderDate:"2020-10-17"},{orderStage:"finished",orderName:"order 4",orderId:4,orderDate:"2020-11-17"},{orderStage:"new",orderName:"order 5",orderId:5,orderDate:"2021-1-10"},{orderStage:"new",orderName:"order 6",orderId:6,orderDate:"2020-11-16"},{orderStage:"finished",orderName:"order 7",orderId:7,orderDate:"2021-1-5"},{orderStage:"processing",orderName:"order 8",orderId:8,orderDate:"2021-1-5"},{orderStage:"finished",orderName:"order 9",orderId:9,orderDate:"2020-11-15"}],i=t(0),l=function(){var e=Object(d.useState)(s),r=Object(c.a)(e,2),t=r[0],o=r[1],n=function(e){var r=e.target.value;if("All"===r)o(s);else if("new"===r){var t=s.filter((function(e){return"new"===e.orderStage}));o(t)}else if("processing"===r){var d=s.filter((function(e){return"processing"===e.orderStage}));o(d)}else if("finished"===r){var n=s.filter((function(e){return"finished"===e.orderStage}));o(n)}};return Object(i.jsxs)(i.Fragment,{children:[Object(i.jsx)("h1",{className:"heading",children:"Order your Favourite Food"}),Object(i.jsx)("hr",{}),Object(i.jsxs)("div",{className:"button-group",children:[Object(i.jsx)("button",{className:"btn1",value:"All",onClick:n,children:"All"}),Object(i.jsx)("button",{className:"btn1",value:"new",onClick:n,children:"new"}),Object(i.jsx)("button",{className:"btn1",value:"processing",onClick:n,children:"processing"}),Object(i.jsx)("button",{className:"btn1",value:"finished",onClick:n,children:"Finished"})]}),Object(i.jsx)("div",{className:"box-container",children:t.map((function(e){return Object(i.jsx)("div",{className:"card",children:Object(i.jsxs)("div",{className:"card-body",children:["s",Object(i.jsxs)("h2",{children:["orderStage: ",e.orderStage]}),Object(i.jsxs)("h5",{children:[" orderName:  ",e.orderName]}),Object(i.jsxs)("p",{children:["orderId:",e.orderId]}),Object(i.jsxs)("p",{children:[" orderDate:  ",e.orderDate]})]})},e.Id)}))})]})};var j=function(){return Object(i.jsx)("div",{className:"App",children:Object(i.jsx)(l,{})})},u=function(e){e&&e instanceof Function&&t.e(3).then(t.bind(null,13)).then((function(r){var t=r.getCLS,d=r.getFID,o=r.getFCP,n=r.getLCP,a=r.getTTFB;t(e),d(e),o(e),n(e),a(e)}))};a.a.render(Object(i.jsx)(o.a.StrictMode,{children:Object(i.jsx)(j,{})}),document.getElementById("root")),u()},3:function(e,r,t){}},[[12,1,2]]]);
//# sourceMappingURL=main.655b14bf.chunk.js.map