(window.webpackJsonp=window.webpackJsonp||[]).push([[0],[,,,,,function(e,t,a){var c={"./commercial/0.jpg":15,"./commercial/1.jpg":16,"./commercial/2.jpg":17,"./commercial/3.jpg":18,"./commercial/4.jpg":19,"./food/0.jpg":20,"./food/1.jpg":21,"./food/2.jpg":22,"./food/3.jpg":23,"./food/4.jpg":24,"./landscape/0.jpg":25,"./landscape/1.jpg":26,"./landscape/2.jpg":27,"./landscape/3.jpg":28,"./landscape/4.jpg":29,"./portraits/0.jpg":30,"./portraits/1.jpg":31,"./portraits/2.jpg":32,"./portraits/3.jpg":33};function n(e){var t=i(e);return a(t)}function i(e){var t=c[e];if(!(t+1)){var a=new Error("Cannot find module '"+e+"'");throw a.code="MODULE_NOT_FOUND",a}return t}n.keys=function(){return Object.keys(c)},n.resolve=i,e.exports=n,n.id=5},,function(e,t,a){e.exports=a.p+"static/media/cover-image.6a2b7a16.jpg"},function(e,t,a){e.exports=a(36)},,,,,function(e,t,a){},,function(e,t,a){e.exports=a.p+"static/media/0.a42cd359.jpg"},function(e,t,a){e.exports=a.p+"static/media/1.e05d88b5.jpg"},function(e,t,a){e.exports=a.p+"static/media/2.75df3018.jpg"},function(e,t,a){e.exports=a.p+"static/media/3.0a075f4d.jpg"},function(e,t,a){e.exports=a.p+"static/media/4.74c830fd.jpg"},function(e,t,a){e.exports=a.p+"static/media/0.736e9503.jpg"},function(e,t,a){e.exports=a.p+"static/media/1.6dc96543.jpg"},function(e,t,a){e.exports=a.p+"static/media/2.082ff7d9.jpg"},function(e,t,a){e.exports=a.p+"static/media/3.c7510d3a.jpg"},function(e,t,a){e.exports=a.p+"static/media/4.8c4c93ec.jpg"},function(e,t,a){e.exports=a.p+"static/media/0.c0bc02a0.jpg"},function(e,t,a){e.exports=a.p+"static/media/1.100fef3c.jpg"},function(e,t,a){e.exports=a.p+"static/media/2.0c7dce01.jpg"},function(e,t,a){e.exports=a.p+"static/media/3.ff79cea1.jpg"},function(e,t,a){e.exports=a.p+"static/media/4.9030776b.jpg"},function(e,t,a){e.exports=a.p+"static/media/0.3cb61cf2.jpg"},function(e,t,a){e.exports=a.p+"static/media/1.181f9d5c.jpg"},function(e,t,a){e.exports=a.p+"static/media/2.efb308ab.jpg"},function(e,t,a){e.exports=a.p+"static/media/3.b2912d99.jpg"},function(e,t,a){},,function(e,t,a){"use strict";a.r(t);var c=a(0),n=a.n(c),i=a(6),r=a.n(i),o=(a(13),a(1)),l=a(7),s=a.n(l);var m=function(){return n.a.createElement("section",{className:"my-5"},n.a.createElement("h1",{id:"about"},"Who am I?"),n.a.createElement("img",{src:s.a,className:"my-2",style:{width:"100%"},alt:"cover"}))};function u(e){return e.charAt(0).toUpperCase()+e.slice(1)}var p=function(e){var t=e.categories,a=void 0===t?[]:t,i=e.setCurrentCategory,r=e.currentCategory,o=e.contactSelected,l=e.setContactSelected;return Object(c.useEffect)(function(){document.title=u(r.name)},[r]),n.a.createElement("header",{className:"flex-row px-1"},n.a.createElement("h2",null,n.a.createElement("a",{"data-testid":"link",href:"/"},n.a.createElement("span",{role:"img","aria-label":"camera"},"\ud83d\udcf8"),"Oh Snap!")),n.a.createElement("nav",null,n.a.createElement("ul",{className:"flex-row"},n.a.createElement("li",{className:"mx-2 ".concat(o&&"navActive")},n.a.createElement("a",{"data-testid":"about",href:"#about",onClick:function(){return l(!1)}},"About me")),n.a.createElement("li",null,n.a.createElement("span",{onClick:function(){return l(!0)}},"Contact")),a.map(function(e){return n.a.createElement("li",{className:"mx-1 ".concat(r.name===e.name&&!o&&"navActive"),key:e.name},n.a.createElement("span",{onClick:function(){i(e),l(!1)}},u(e.name)))}))))},d=a(2);var g=function(e){var t=e.onClose,c=e.currentPhoto,i=c.name,r=c.category,o=c.description,l=c.index;return n.a.createElement("div",{className:"ModalBackdrop"},n.a.createElement("div",{className:"modalContainer"},n.a.createElement("h3",{className:"modalTitle"},i),n.a.createElement("img",{src:a(5)("./".concat(r,"/").concat(l,".jpg")),alt:"".concat(r)}),n.a.createElement("p",null,o),n.a.createElement("button",{type:"button",onClick:t},"Close this modal")))},f=function(e){var t=e.category,i=Object(c.useState)([{name:"Grocery aisle",category:"commercial",description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc ultricie"},{name:"Grocery booth",category:"commercial",description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc ultricie"},{name:"Building exterior",category:"commercial",description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc ultricie"},{name:"Restaurant table",category:"commercial",description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc ultricie"},{name:"Cafe interior",category:"commercial",description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc ultricie"},{name:"Cat green eyes",category:"portraits",description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc ultricie"},{name:"Green parrot",category:"portraits",description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc ultricie"},{name:"Yellow macaw",category:"portraits",description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc ultricie"},{name:"Pug smile",category:"portraits",description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc ultricie"},{name:"Pancakes",category:"food",description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc ultricie"},{name:"Burrito",category:"food",description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc ultricie"},{name:"Scallop pasta",category:"food",description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc ultricie"},{name:"Burger",category:"food",description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc ultricie"},{name:"Fruit bowl",category:"food",description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc ultricie"},{name:"Green river",category:"landscape",description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc ultricie"},{name:"Docks",category:"landscape",description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc ultricie"},{name:"Panoramic village by sea",category:"landscape",description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc ultricie"},{name:"Domestic landscape",category:"landscape",description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc ultricie"},{name:"Park bench",category:"landscape",description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc ultricie"}]),r=Object(o.a)(i,1)[0],l=Object(c.useState)(),s=Object(o.a)(l,2),m=s[0],u=s[1],p=Object(c.useState)(!1),f=Object(o.a)(p,2),j=f[0],E=f[1],b=r.filter(function(e){return e.category===t});function y(e,t){u(Object(d.a)({},e,{index:t})),E(!j)}return n.a.createElement("div",null,j&&n.a.createElement(g,{currentPhoto:m,onClose:y}),n.a.createElement("div",{className:"flex-row"},b.map(function(e,c){return n.a.createElement("img",{src:a(5)("./".concat(t,"/").concat(c,".jpg")),alt:e.name,className:"img-thumbnail mx-1",onClick:function(){return y(e,c)},key:e.name})})))};var j=function(e){var t=e.currentCategory,a=t.name,c=t.description;return n.a.createElement("section",null,n.a.createElement("h1",{"data-testid":"h1tag"},u(a)),n.a.createElement("p",null,c),n.a.createElement(f,{category:a}))},E=(a(34),a(3));var b=function(){var e=Object(c.useState)(""),t=Object(o.a)(e,2),a=t[0],i=t[1],r=Object(c.useState)({name:"",email:"",message:""}),l=Object(o.a)(r,2),s=l[0],m=l[1],u=s.name,p=s.email,g=s.message;function f(e){if("email"===e.target.name){var t=(c=e.target.value,/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(String(c).toLowerCase()));console.log(t),i(t?"":"Please provide a valid email")}else e.target.value.length?i(""):i("".concat(e.target.name," is required."));var c;a||m(Object(d.a)({},s,Object(E.a)({},e.target.name,e.target.value))),console.log("errorMessage:",a)}return console.log(s),n.a.createElement("section",null,n.a.createElement("h1",{"data-testid":"contactTitle"},"Contact Me"),n.a.createElement("form",{id:"contact-form"},n.a.createElement("div",null,n.a.createElement("label",{htmlFor:"name"},"Name:"),n.a.createElement("input",{type:"text",defaultValue:u,onBlur:f,name:"name"})),n.a.createElement("div",null,n.a.createElement("label",{htmlFor:"email"},"Email address:"),n.a.createElement("input",{type:"email",defaultValue:p,onBlur:f,name:"email"})),n.a.createElement("div",null,n.a.createElement("label",{htmlFor:"message"},"Message:"),n.a.createElement("textarea",{name:"message",defaultValue:g,onBlur:f,rows:"5"})),a&&n.a.createElement("div",null,n.a.createElement("p",{className:"error-text"},a)),n.a.createElement("button",{"data-testid":"contactButton",type:"submit",onSubmit:function(e){e.preventDefault(),console.log(s)}},"Submit")))};var y=function(){var e=Object(c.useState)(!1),t=Object(o.a)(e,2),a=t[0],i=t[1],r=Object(c.useState)([{name:"commercial",description:"Photos of grocery stores, food trucks, and other commercial projects."},{name:"portraits",description:"Portraits of people in my life"},{name:"food",description:"Delicious delicacies"},{name:"landscape",description:"Fields, farmhouses, waterfalls, and the beauty of nature."}]),l=Object(o.a)(r,1)[0],s=Object(c.useState)(l[0]),u=Object(o.a)(s,2),d=u[0],g=u[1];return n.a.createElement("div",null,n.a.createElement(p,{categories:l,setCurrentCategory:g,currentCategory:d,setContactSelected:i}),n.a.createElement("main",null,a?n.a.createElement(b,null):n.a.createElement(n.a.Fragment,null,n.a.createElement(j,{currentCategory:d}),n.a.createElement(m,null))))},v=function(e){e&&e instanceof Function&&a.e(1).then(a.bind(null,37)).then(function(t){var a=t.getCLS,c=t.getFID,n=t.getFCP,i=t.getLCP,r=t.getTTFB;a(e),c(e),n(e),i(e),r(e)})};r.a.render(n.a.createElement(n.a.StrictMode,null,n.a.createElement(y,null)),document.getElementById("root")),v()}],[[8,3,2]]]);
//# sourceMappingURL=main.d07ee26a.chunk.js.map