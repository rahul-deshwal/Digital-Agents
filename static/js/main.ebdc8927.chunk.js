(this.webpackJsonpdigitalagent=this.webpackJsonpdigitalagent||[]).push([[0],{26:function(t,e,i){},27:function(t,e,i){},29:function(t,e,i){},30:function(t,e,i){"use strict";i.r(e);var n=i(0),s=i(7),a=i.n(s),c=i(9),l=i(3),o=i(15),r=(i(26),i(6)),d=i(2),u=i(4),j=(i(27),i(1)),h=function(t){var e=Object(n.useState)([]),i=Object(u.a)(e,2),s=i[0],a=i[1],c=Object(n.useState)({title:"",description:""}),l=Object(u.a)(c,2),o=l[0],h=l[1],b=Object(n.useState)(!1),m=Object(u.a)(b,2),O=m[0],g=m[1],f=Object(n.useState)(""),p=Object(u.a)(f,2),L=p[0],v=p[1],x=Object(n.useState)([]),I=Object(u.a)(x,2),S=I[0],N=I[1];Object(n.useEffect)((function(){window.addEventListener("mousedown",y);var t=JSON.parse(localStorage.getItem("titleList"));return t&&a(t),function(){window.removeEventListener("mousedown",y)}}),[]),Object(n.useEffect)((function(){var e=JSON.parse(localStorage.getItem("titleList"));null==e?(a(t.titleList),localStorage.setItem("titleList",JSON.stringify([]))):t.titleList.length>e.length?(a(t.titleList),localStorage.setItem("titleList",JSON.stringify(t.titleList))):t.titleList.length<e.length&&t.setDataFromLocal(e)}),[t.titleList]);var y=function(t){document.getElementById("addItemDiv")&&!document.getElementById("addItemDiv").contains(t.target)&&(g(!1),h({title:"",description:""}))},T=function(t,e){h("title"===e?Object(d.a)(Object(d.a)({},o),{},{title:t.target.value}):Object(d.a)(Object(d.a)({},o),{},{description:t.target.value}))},w=function(e){if("submit"===e){var i=JSON.parse(localStorage.getItem("titleList"));i.push(o),localStorage.setItem("titleList",JSON.stringify(i)),t.setTitleList(o),a([].concat(Object(r.a)(s),[Object(d.a)({id:s.length+1},o)])),h({title:"",description:""}),g(!1)}else h({title:"",description:""}),g(!1)},D=function(){return Object(j.jsx)("div",{className:"addItemDiv",id:"addItemDiv",children:Object(j.jsxs)("div",{className:"addItemDivInner",children:[Object(j.jsx)("h1",{children:"Add Title"}),Object(j.jsx)("input",{className:"addTitleInput",placeholder:"Title Heading",onChange:function(t){return T(t,"title")}}),Object(j.jsx)("h2",{children:"Title Description"}),Object(j.jsx)("textarea",{className:"addDescInput",placeholder:"Add Description",onChange:function(t){return T(t,"desc")}}),Object(j.jsxs)("div",{children:[Object(j.jsx)("button",{onClick:function(){return w("submit")},children:"Submit"})," ",Object(j.jsx)("button",{onClick:function(){return w("cancel")},children:"Cancel"})]})]})})},C=function(t){return Object(j.jsx)("div",{className:"itemLists",children:t.map((function(t){return Object(j.jsxs)("div",{className:"itemList",children:[Object(j.jsx)("p",{className:"titleText",children:t.title.length>18?t.title.slice(0,18)+"...":t.title}),Object(j.jsx)("p",{className:"descriptionText",children:t.description.length>80?t.description.slice(0,60)+"...":t.description})]},t.id)}))})};return Object(j.jsxs)("div",{className:"parentDiv",children:[Object(j.jsx)("div",{className:"parentTo1"}),Object(j.jsx)("div",{className:"parentTo2"}),Object(j.jsxs)("div",{className:"mainContainer",children:[Object(j.jsx)("div",{className:"searchBoxDiv",children:Object(j.jsx)("input",{className:"searchBox",placeholder:"Search Items",onChange:function(t){var e=t.target.value.toLowerCase();v(e);var i=Object(r.a)(s).filter((function(t){return t.title.toLowerCase().includes(e)}));N(i)}})}),Object(j.jsxs)("div",{className:"itemsListsParentDiv",children:[Object(j.jsx)("span",{onClick:function(){g(!0),D()},children:"+"}),Object(j.jsx)("p",{className:"headingItems",children:"ITEMS"}),L.length?C(S):null,!L.length&&s.length?C(s):null]}),O?D():null]})]})},b="SET_TITLE_LIST",m="SET_LOCAL_LIST",O=Object(c.b)((function(t){return{titleList:t.titleList}}),(function(t){return{setTitleList:function(e){return t(function(t){return console.log(t,"titleList actions"),{type:b,titleList:t}}(e))},setDataFromLocal:function(e){return t(function(t){return console.log(t,"setDataFromLocal actions"),{type:m,localList:t}}(e))}}}))(h),g=(i(29),function(){return Object(j.jsx)(O,{})}),f=function(t){t&&t instanceof Function&&i.e(3).then(i.bind(null,31)).then((function(e){var i=e.getCLS,n=e.getFID,s=e.getFCP,a=e.getLCP,c=e.getTTFB;i(t),n(t),s(t),a(t),c(t)}))},p={titleList:[{id:1,title:"What Life Should Be",description:"Much like those more well-known poems above, it talks us through how we ought to try to live our lives. It\u2019s simple, yet inspiring."},{id:2,title:"The Road Not Taken",description:"Life is made up of a succession of choices. This famous poem begins at a fork in a wooded path and ushers the reader along one \u201croad\u201d as a means of explaining that we must choose one way."},{id:3,title:"A Psalm of Life",description:"Don\u2019t let the world rush by without notice; open your eyes and see \u2013 really see \u2013 it in all its glory. Make space in your life for this simplest act of leisure."},{id:4,title:"Opportunity",description:"It talks of great acts and great deeds, but also of love and romance and laughter and loyalty \u2013 things that every man or woman is capable of."}]},L=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:p,e=arguments.length>1?arguments[1]:void 0;switch(e.type){case b:return Object(d.a)(Object(d.a)({},t),{},{titleList:[].concat(Object(r.a)(t.titleList),[e.titleList])});case m:return Object(d.a)(Object(d.a)({},t),{},{titleList:e.localList});default:return t}},v=l.c,x=Object(l.d)(L,v(Object(l.a)(o.a))),I=Object(j.jsx)(c.a,{store:x,children:Object(j.jsx)(g,{})});a.a.render(I,document.getElementById("root")),f()}},[[30,1,2]]]);
//# sourceMappingURL=main.ebdc8927.chunk.js.map