(this["webpackJsonpe-commerce"]=this["webpackJsonpe-commerce"]||[]).push([[0],{101:function(t,e,a){"use strict";a.r(e);var o=a(3),i=a.n(o),c=a(20),r=a.n(c),s=(a(70),a(71),a(12)),n=a(11),m=(a(27),a(15)),g=a(56),l=a.n(g),p=a(64),d=a(40),h=a(1),b=Object(o.createContext)(),u=function(t){var e=t.children,a=Object(o.useState)([]),i=Object(m.a)(a,2),c=i[0],r=i[1];return Object(h.jsx)(b.Provider,{value:{cart:c,setCart:r,addItem:function(t,e){var a=Object(d.a)(Object(d.a)({},t),{},{count:e});if(c.some((function(e){return e.id===t.id}))){var o=c.find((function(e){return e.id===t.id}));o.count=o.count+e}else r.apply(void 0,Object(p.a)(c).concat([a]))},removeItem:function(t){console.log("click")},removeAll:function(){r([])}},children:e})},j=function(){var t=Object(o.useContext)(b).cart;return Object(h.jsxs)("div",{children:[Object(h.jsx)("i",{className:"bi bi-cart2 h4 mx-1 text-dark"}),Object(h.jsx)("span",{className:"h5 bg-secondary rounded-pill text-white px-1 py-1",children:t.length}),Object(h.jsx)("br",{})]})},x=a(102),w=a(103),I=a(104),B=a(105),f=a(106),O=a(112),y=a(111),L=a(113),C=a(107),G=function(){var t=Object(o.useState)(!1),e=Object(m.a)(t,2),a=e[0],i=e[1];return Object(h.jsx)("div",{className:"sticky-top",children:Object(h.jsxs)(x.a,{light:!0,expand:"md",className:l.a.NavBarNav,children:[Object(h.jsx)(w.a,{onClick:function(){return i(!a)}}),Object(h.jsx)(I.a,{isOpen:a,navbar:!0,children:Object(h.jsxs)(B.a,{className:"ms-auto",navbar:!0,children:[Object(h.jsx)(f.a,{className:"mx-4 my-3",children:Object(h.jsx)(s.b,{to:"/category/smartphone",className:"text-dark text-decoration-none",children:"smartphones"})}),Object(h.jsx)(f.a,{className:"mx-4 my-3",children:Object(h.jsx)(s.b,{to:"/category/smartwatch",className:"text-dark text-decoration-none",children:"smartwatch"})}),Object(h.jsx)(f.a,{className:"mx-4 my-3",children:Object(h.jsx)(s.b,{to:"/category/accesories",className:"text-dark text-decoration-none",children:"accesories"})}),Object(h.jsx)(f.a,{className:"mx-4 my-3",children:Object(h.jsx)(s.b,{exact:!0,to:"/Cart",className:"text-decoration-none",children:Object(h.jsx)(j,{})})}),Object(h.jsxs)(O.a,{nav:!0,inNavbar:!0,className:"my-2",children:[Object(h.jsx)(y.a,{nav:!0,caret:!0,children:"Sort by Price"}),Object(h.jsxs)(L.a,{right:!0,children:[Object(h.jsx)(C.a,{children:"lower to higher"}),Object(h.jsx)(C.a,{children:"higher to lower"}),Object(h.jsx)(C.a,{children:"option 3"})]})]})]})})]})})},k=function(){return Object(h.jsxs)(h.Fragment,{children:[Object(h.jsx)(G,{}),Object(h.jsx)("h1",{className:"text-center my-5 border",children:"HOME IN CONSTRUCTION"})]})},M=(a(98),a(61)),P=function(t){var e=Object(o.useState)(0),a=Object(m.a)(e,2),i=a[0],c=a[1],r=Object(o.useContext)(b).addItem,s=t.item.stock,n=t.item;return Object(h.jsx)(h.Fragment,{children:Object(h.jsxs)("div",{className:"row text-center",children:[Object(h.jsx)("div",{className:"col-4 mt-1",children:Object(h.jsx)("button",{className:"btn btn-light col-12",onClick:function(t){t.preventDefault(),i<s&&c(i+1)},children:"\u2795"})}),Object(h.jsx)("div",{className:"col-3 bg-light rounded bagde mx-1",children:Object(h.jsx)("h4",{className:"mt-2",children:i})}),Object(h.jsx)("div",{className:"col-4 mt-1",children:Object(h.jsx)("button",{className:"btn btn-light col-12",onClick:function(t){t.preventDefault(),i>0&&c(i-1)},children:"\u2796"})}),Object(h.jsxs)("h5",{children:["Units available:",t.item.stock]}),Object(h.jsx)("div",{children:Object(h.jsx)("button",{className:"btn btn-outline-dark flex-shrink-0 mb-2",onClick:function(e){!function(e){e.preventDefault(),0!==i&&t.onAdd(i),r(n,i)}(e)},type:"button",children:"Add To Cart"})}),Object(h.jsx)("div",{})]})})},D=function(t){var e=t.item,a=Object(o.useState)(!0),i=Object(m.a)(a,2),c=i[0],r=i[1],n=Object(o.useState)(0),g=Object(m.a)(n,2),l=(g[0],g[1],Object(o.useContext)(b)),p=(l.cart,l.setCart);return Object(h.jsx)(h.Fragment,{children:Object(h.jsx)("div",{children:Object(h.jsx)("section",{className:"py-1",children:Object(h.jsx)("div",{className:"container px-4 px-lg-5 my-5",children:Object(h.jsxs)("div",{className:"row gx-4 gx-lg-5 align-items-center",children:[Object(h.jsx)("div",{className:"col-md-6",children:Object(h.jsx)("img",{className:"card-img-top mb-5 mb-md-0",src:e.img,alt:"..."})}),Object(h.jsxs)("div",{className:"col-md-6",children:[Object(h.jsx)("div",{className:"small mb-1"}),Object(h.jsx)("h1",{className:"display-5 fw-bolder",children:e.title}),Object(h.jsx)("div",{className:"fs-5 mb-5",children:Object(h.jsxs)("span",{children:["$ ",e.price]})}),Object(h.jsx)("p",{className:"lead",children:e.description}),Object(h.jsx)("div",{className:"d-flex",children:Object(h.jsx)("div",{className:"mx-3",children:c&&Object(h.jsx)(P,{item:e,onAdd:function(t){r(!1),alert("Se agregaron "+t+" items al carrito"),p(e)}})})}),Object(h.jsx)("div",{className:"text-center col-11",children:Object(h.jsx)(s.b,{exact:!0,to:"/Cart",children:Object(h.jsx)("button",{className:"btn btn-outline-dark flex-shrink-0 mb-2",children:"CartView"})})})]})]})})})},e.id)})},N=function(){var t=Object(n.f)().itemId,e=Object(o.useState)(),a=Object(m.a)(e,2),i=a[0],c=a[1];return Object(o.useEffect)((function(){var e;(e=M,new Promise((function(t,a){setTimeout((function(){e?t(e):a("La ruta no se pudo encontrar")}),1500)}))).then((function(e){return c(e.product.find((function(e){return e.id===t})))})).catch((function(t){return console.log(t)}))}),[t]),Object(h.jsxs)(h.Fragment,{children:[Object(h.jsx)(G,{}),i?Object(h.jsx)(D,{item:i}):"Cargando..."]})},U=function(t){return Object(h.jsx)(h.Fragment,{children:Object(h.jsx)(G,{})})},v=(a(62),a(29),a.p,a(99),a(108)),S=a(109),A=a(110),F=function(){return Object(h.jsx)(h.Fragment,{children:Object(h.jsx)(v.a,{className:"border text-center",children:Object(h.jsxs)(S.a,{children:[Object(h.jsx)(A.a,{xs:"4",children:"Contact 1"}),Object(h.jsx)(A.a,{xs:"4",children:"Contact 2"}),Object(h.jsx)(A.a,{xs:"4",children:"Contact 3"})]})})})},X=function(){var t=Object(o.useContext)(b),e=t.cart,a=(t.addItem,t.removeItem,t.removeAll);return Object(h.jsxs)(h.Fragment,{children:[Object(h.jsx)(G,{}),Object(h.jsxs)("table",{className:"table",children:[Object(h.jsxs)("tr",{className:"text-center",children:[Object(h.jsx)("th",{className:"mx-5 my-5 h3 border bg-primary",children:"Titulo"}),Object(h.jsx)("th",{className:"mx-5 my-5 h3 border bg-primary",children:"Cantidad"}),Object(h.jsx)("th",{className:"mx-5 my-5 h3 border bg-primary",children:"Precio"}),Object(h.jsx)("th",{className:"mx-5 my-5 h3 border bg-primary",children:"   "})]}),Object(h.jsxs)("tr",{className:"text-center",children:[Object(h.jsx)("th",{className:"mx-5 my-5 h4",children:e.title}),Object(h.jsx)("th",{className:"mx-5 my-5 h4",children:e.count}),Object(h.jsxs)("th",{className:"mx-5 my-5 h4",children:["$ ",e.price]}),Object(h.jsx)("th",{children:Object(h.jsx)("button",{className:"btn btn-primary bg-dark m-2",onClick:a,children:" X "})})]})]})]})},W=a(63),T=function(t){var e=t.item;return Object(h.jsx)(h.Fragment,{children:Object(h.jsx)("div",{className:"col-3 mb-5",children:Object(h.jsxs)("div",{className:"card h-100",children:[Object(h.jsx)("div",{children:Object(h.jsx)(s.b,{exact:!0,to:"/item/".concat(e.id),children:Object(h.jsx)("img",{className:"card-img-top",src:e.img,alt:"..."})},e.id)}),Object(h.jsx)("div",{className:"card-body p-4",children:Object(h.jsxs)("div",{className:"text-center",children:[Object(h.jsx)("h5",{className:"fw-bolder text-decoration-none",children:e.title}),Object(h.jsxs)("h4",{children:["$ ",e.price]})]})}),Object(h.jsxs)("div",{className:"card-footer p-4 pt-0 border-top-0 bg-transparent",children:[Object(h.jsx)("div",{className:"text-center",children:Object(h.jsx)("a",{className:"btn btn-outline-dark mt-auto",href:"/",children:"Add To Cart"})}),Object(h.jsx)("div",{children:Object(h.jsxs)("p",{className:"mt-2 text-center",children:["Units available: ",e.stock]})})]})]})})})},_=function(t){var e=t.items;return Object(h.jsx)(h.Fragment,{children:e.length?e.map((function(t){return Object(h.jsx)(T,{item:t},t.id)})):"Cargando productos..."})},E=function(){var t=Object(n.f)().categoryId,e=Object(o.useState)([]),a=Object(m.a)(e,2),i=a[0],c=a[1];return Object(o.useEffect)((function(){var e;(e=W,new Promise((function(t,a){setTimeout((function(){e?t(e):a("La ruta no se pudo encontrar")}),2e3)}))).then((function(e){return c(e.filter((function(e){return e.category===t})))})).catch((function(t){return console.log(t)}))}),[t]),console.log(t),Object(h.jsx)(h.Fragment,{children:Object(h.jsx)(_,{items:i},i.id)})},J=function(){return Object(h.jsxs)(h.Fragment,{children:[Object(h.jsx)(G,{}),Object(h.jsx)("div",{className:"row mx-1",children:Object(h.jsx)(E,{})})]})};var R=function(){return Object(h.jsx)(h.Fragment,{children:Object(h.jsx)(s.a,{children:Object(h.jsx)(u,{children:Object(h.jsx)("div",{className:"d-flex",children:Object(h.jsx)("div",{className:"content w-100",children:Object(h.jsxs)(n.c,{children:[Object(h.jsx)(n.a,{exact:!0,path:"/",component:k}),Object(h.jsx)(n.a,{exact:!0,path:"/Offers",component:U}),Object(h.jsx)(n.a,{exact:!0,path:"/Contact",component:F}),Object(h.jsx)(n.a,{exact:!0,path:"/Cart",component:X}),Object(h.jsx)(n.a,{exact:!0,path:"/category/:categoryId",component:J}),Object(h.jsx)(n.a,{exact:!0,path:"/item/:itemId",component:N}),Object(h.jsx)(n.a,{exact:!0,path:"*",children:Object(h.jsx)("h1",{children:"Se ha producido un error, la pagina no fue encontrada!"})})]})})})})})})},$=(a(100),function(t){t&&t instanceof Function&&a.e(3).then(a.bind(null,114)).then((function(e){var a=e.getCLS,o=e.getFID,i=e.getFCP,c=e.getLCP,r=e.getTTFB;a(t),o(t),i(t),c(t),r(t)}))});r.a.render(Object(h.jsx)(i.a.StrictMode,{children:Object(h.jsx)(R,{})}),document.getElementById("root")),$()},27:function(t,e,a){t.exports={sideBar:"SideBar_sideBar___v8rl",imgMovile:"SideBar_imgMovile__2LJrK"}},56:function(t,e,a){t.exports={NavBarNav:"NavBarNav_NavBarNav__2Atx6"}},61:function(t){t.exports=JSON.parse('{"product":[{"category":"smartphone","id":"0","title":"Motorola E6","model":"motorola","price":40000,"stock":5,"description":"Light, fast and compact cell phone","storage":"64gb","img":"https://github.com/joseguti99/DB-IMG-PUBLIC/blob/main/motorola/e6.png?raw=true"},{"category":"smartphone","id":"1","title":"Motorola E7","model":"motorola","price":42000,"stock":7,"description":"Light, fast and compact cell phone","storage":"64gb","img":"https://github.com/joseguti99/DB-IMG-PUBLIC/blob/main/motorola/e7.png?raw=true"},{"category":"smartphone","id":"2","title":"Motorola G9","model":"motorola","price":65000,"stock":9,"description":"Light, fast and compact cell phone","storage":"128gb","img":"https://github.com/joseguti99/DB-IMG-PUBLIC/blob/main/motorola/g9.png?raw=true"},{"category":"smartphone","id":"3","title":"Motorola G9 Plus","model":"motorola","price":70000,"stock":6,"description":"Light, fast and compact cell phone","storage":"128gb","img":"https://github.com/joseguti99/DB-IMG-PUBLIC/blob/main/motorola/g9plus.png?raw=true"},{"category":"smartphone","id":"4","title":"Motorola G9 Power","model":"motorola","price":55000,"stock":10,"description":"Light, fast and compact cell phone","storage":"128gb","img":"https://github.com/joseguti99/DB-IMG-PUBLIC/blob/main/motorola/g9power.png?raw=true"},{"category":"smartphone","id":"5","title":"Motorola G20","model":"motorola","price":60000,"stock":7,"description":"Light, fast and compact cell phone","storage":"128gb","img":"https://github.com/joseguti99/DB-IMG-PUBLIC/blob/main/motorola/g20.png?raw=true"},{"category":"smartphone","id":"6","title":"Motorola G30","model":"motorola","price":67000,"stock":9,"description":"Light, fast and compact cell phone","storage":"128gb","img":"https://github.com/joseguti99/DB-IMG-PUBLIC/blob/main/motorola/motog30.png?raw=true"},{"category":"smartphone","id":"7","title":"Motorola One","model":"motorola","price":48000,"stock":9,"description":"Light, fast and compact cell phone","storage":"128gb","img":"https://github.com/joseguti99/DB-IMG-PUBLIC/blob/main/motorola/one.png?raw=true"},{"category":"smartphone","id":"8","title":"Samsung Galaxy A02","model":"samsung","price":42999,"stock":11,"description":"Light, fast and compact cell phone","storage":"128gb","img":"https://github.com/joseguti99/DB-IMG-PUBLIC/blob/main/Samsung/a02.png?raw=true"},{"category":"smartphone","id":"9","title":"Samsung Galaxy A12","model":"samsung","price":43599,"stock":14,"description":"Light, fast and compact cell phone","storage":"128gb","img":"https://github.com/joseguti99/DB-IMG-PUBLIC/blob/main/Samsung/a12.png?raw=true"},{"category":"smartphone","id":"10","title":"Samsung Galaxy A32","model":"samsung","price":46999,"stock":13,"description":"Light, fast and compact cell phone","storage":"128gb","img":"https://github.com/joseguti99/DB-IMG-PUBLIC/blob/main/Samsung/a32.png?raw=true"},{"category":"smartphone","id":"11","title":"Samsung Galaxy A52","model":"samsung","price":52999,"stock":15,"description":"Light, fast and compact cell phone","storage":"256gb","img":"https://github.com/joseguti99/DB-IMG-PUBLIC/blob/main/Samsung/a52.png?raw=true"},{"category":"smartphone","id":"12","title":"Samsung Galaxy Note 20","model":"samsung","price":75999,"stock":12,"description":"Light, fast and compact cell phone","storage":"256gb","img":"https://github.com/joseguti99/DB-IMG-PUBLIC/blob/main/Samsung/note20.png?raw=true"},{"category":"smartphone","id":"13","title":"Samsung Galaxy S20","model":"samsung","price":65999,"stock":15,"description":"Light, fast and compact cell phone","storage":"256gb","img":"https://github.com/joseguti99/DB-IMG-PUBLIC/blob/main/Samsung/s20.png?raw=true"},{"category":"smartphone","id":"14","title":"Samsung Galaxy S21","model":"samsung","price":75999,"stock":13,"description":"Light, fast and compact cell phone","storage":"256gb","img":"https://github.com/joseguti99/DB-IMG-PUBLIC/blob/main/Samsung/s21.png?raw=true"},{"category":"smartphone","id":"15","title":"Samsung Galaxy S21 Pro","model":"samsung","price":79999,"stock":12,"description":"Light, fast and compact cell phone","storage":"480gb","img":"https://github.com/joseguti99/DB-IMG-PUBLIC/blob/main/Samsung/s21rosa.png?raw=true"},{"category":"smartphone","id":"16","title":"Xiaomi A9","model":"xiaomi","price":35999,"stock":13,"description":"Light, fast and compact cell phone","storage":"64gb","img":"https://github.com/joseguti99/DB-IMG-PUBLIC/blob/main/xiaomi/9a.png?raw=true"},{"category":"smartphone","id":"17","title":"Xiaomi 9T","model":"xiaomi","price":38599,"stock":11,"description":"Light, fast and compact cell phone","storage":"128gb","img":"https://github.com/joseguti99/DB-IMG-PUBLIC/blob/main/xiaomi/9t.png?raw=true"},{"category":"smartphone","id":"18","title":"Xiaomi F3","model":"xiaomi","price":32599,"stock":17,"description":"Light, fast and compact cell phone","storage":"64gb","img":"https://github.com/joseguti99/DB-IMG-PUBLIC/blob/main/xiaomi/f3.png?raw=true"},{"category":"smartphone","id":"19","title":"Xiaomi M3","model":"xiaomi","price":37499,"stock":12,"description":"Light, fast and compact cell phone","storage":"128gb","img":"https://github.com/joseguti99/DB-IMG-PUBLIC/blob/main/xiaomi/m3.png?raw=true"},{"category":"smartphone","id":"20","title":"xiaomi Mi 11","model":"xiaomi","price":51999,"stock":13,"description":"Light, fast and compact cell phone","storage":"128gb","img":"https://github.com/joseguti99/DB-IMG-PUBLIC/blob/main/xiaomi/mi11.png?raw=true"},{"category":"smartphone","id":"21","title":"Xiaomi Note 8","model":"xiaomi","price":62599,"stock":0,"description":"Light, fast and compact cell phone","storage":"64gb","img":"https://github.com/joseguti99/DB-IMG-PUBLIC/blob/main/xiaomi/note8.png?raw=true"},{"category":"smartphone","id":"22","title":"Xiaomi Note 9","model":"xiaomi","price":65499,"stock":13,"description":"Light, fast and compact cell phone","storage":"128gb","img":"https://github.com/joseguti99/DB-IMG-PUBLIC/blob/main/xiaomi/note9.png?raw=true"},{"category":"smartphone","id":"23","title":"xiaomi Poco 3","model":"xiaomi","price":46599,"stock":15,"description":"Light, fast and compact cell phone","storage":"64gb","img":"https://github.com/joseguti99/DB-IMG-PUBLIC/blob/main/xiaomi/pocox3.png?raw=true"},{"category":"smartwatch","id":"24","title":"Apple Watch Nike-Air","model":"apple","price":34999,"stock":12,"description":"powerful, ultra-durable and waterproof smartwatch","storage":"","img":"https://github.com/joseguti99/DB-IMG-PUBLIC/blob/main/smartwatch/apple-nike.png?raw=true"},{"category":"smartwatch","id":"25","title":"Apple Serie 6","model":"apple","price":31999,"stock":14,"description":"powerful, ultra-durable and waterproof smartwatch","storage":"","img":"https://github.com/joseguti99/DB-IMG-PUBLIC/blob/main/smartwatch/apple-serie-6.png?raw=true"},{"category":"smartwatch","id":"26","title":"Apple Serie 3","model":"apple","price":29999,"stock":8,"description":"powerful, ultra-durable and waterproof smartwatch","storage":"","img":"https://github.com/joseguti99/DB-IMG-PUBLIC/blob/main/smartwatch/apple-watch-s3.png?raw=true"},{"category":"smartwatch","id":"27","title":"Galaxy Watch S4","model":"samsung","price":27999,"stock":10,"description":"powerful, ultra-durable and waterproof smartwatch","storage":"","img":"https://github.com/joseguti99/DB-IMG-PUBLIC/blob/main/smartwatch/galaxy-watch-4.png?raw=true"},{"category":"smartwatch","id":"28","title":"Garmin Watch-X","model":"samsung","price":32999,"stock":14,"description":"powerful, ultra-durable and waterproof smartwatch","storage":"","img":"https://github.com/joseguti99/DB-IMG-PUBLIC/blob/main/smartwatch/garmin-watch.png?raw=true"},{"category":"smartwatch","id":"29","title":"FibiWatch S10","model":"samsung","price":28999,"stock":16,"description":"powerful, ultra-durable and waterproof smartwatch","storage":"","img":"https://github.com/joseguti99/DB-IMG-PUBLIC/blob/main/smartwatch/smartwatch-fibi.png?raw=true"},{"category":"smartwatch","id":"30","title":"SmartWatch G-PRO","model":"samsung","price":33999,"stock":13,"description":"powerful, ultra-durable and waterproof smartwatch","storage":"","img":"https://github.com/joseguti99/DB-IMG-PUBLIC/blob/main/smartwatch/smart-watch-gt.png?raw=true"},{"category":"smartwatch","id":"31","title":"SmartWatch X-OMI","model":"samsung","price":26999,"stock":11,"description":"powerful, ultra-durable and waterproof smartwatch","storage":"","img":"https://github.com/joseguti99/DB-IMG-PUBLIC/blob/main/smartwatch/smart-watch-xiaomi.png?raw=true"},{"category":"accesories","id":"32","title":"Samsung car charger","model":"samsung","price":959,"stock":25,"description":"accesories charger","storage":"","img":"https://github.com/joseguti99/DB-IMG-PUBLIC/blob/main/accesorios/cargador-usb-auto.png?raw=true"},{"category":"accesories","id":"33","title":"wireless charger phone","model":"samsung","price":1199,"stock":10,"description":"wireless charger phone","storage":"","img":"https://github.com/joseguti99/DB-IMG-PUBLIC/blob/main/accesorios/cgd-inalambric.png?raw=true"},{"category":"accesories","id":"34","title":"Portable phone charger","model":"samsung","price":1299,"stock":20,"description":"Portable phone charger","storage":"","img":"https://github.com/joseguti99/DB-IMG-PUBLIC/blob/main/accesorios/cargador-portatil.png?raw=true"},{"category":"accesories","id":"35","title":"Charger power-100","model":"","price":1499,"stock":15,"description":"","storage":"","img":"https://github.com/joseguti99/DB-IMG-PUBLIC/blob/main/accesorios/cargador-power-portatil.png?raw=true"},{"category":"accesories","id":"36","title":"Charger fast Samsung","model":"","price":649,"stock":45,"description":"","storage":"","img":"https://github.com/joseguti99/DB-IMG-PUBLIC/blob/main/accesorios/cargador-tipo-c.png?raw=true"},{"category":"accesories","id":"37","title":"Gamepad Pro","model":"","price":2499,"stock":16,"description":"","storage":"","img":"https://github.com/joseguti99/DB-IMG-PUBLIC/blob/main/accesorios/gamepad.png?raw=true"},{"category":"accesories","id":"38","title":"phone holder X-50","model":"","price":1599,"stock":13,"description":"","storage":"","img":"https://github.com/joseguti99/DB-IMG-PUBLIC/blob/main/accesorios/soporte-bici.png?raw=true"},{"category":"accesories","id":"37","title":"Cell tripod Pro","model":"","price":899,"stock":11,"description":"","storage":"","img":"https://github.com/joseguti99/DB-IMG-PUBLIC/blob/main/accesorios/tripode-smart.png?raw=true"}]}')},63:function(t){t.exports=JSON.parse('[{"category":"smartphone","id":"0","title":"Motorola E6","model":"motorola","price":40000,"stock":5,"description":"Light, fast and compact cell phone","storage":"64gb","img":"https://github.com/joseguti99/DB-IMG-PUBLIC/blob/main/motorola/e6.png?raw=true"},{"category":"smartphone","id":"1","title":"Motorola E7","model":"motorola","price":42000,"stock":7,"description":"Light, fast and compact cell phone","storage":"64gb","img":"https://github.com/joseguti99/DB-IMG-PUBLIC/blob/main/motorola/e7.png?raw=true"},{"category":"smartphone","id":"2","title":"Motorola G9","model":"motorola","price":65000,"stock":9,"description":"Light, fast and compact cell phone","storage":"128gb","img":"https://github.com/joseguti99/DB-IMG-PUBLIC/blob/main/motorola/g9.png?raw=true"},{"category":"smartphone","id":"3","title":"Motorola G9 Plus","model":"motorola","price":70000,"stock":6,"description":"Light, fast and compact cell phone","storage":"128gb","img":"https://github.com/joseguti99/DB-IMG-PUBLIC/blob/main/motorola/g9plus.png?raw=true"},{"category":"smartphone","id":"4","title":"Motorola G9 Power","model":"motorola","price":55000,"stock":10,"description":"Light, fast and compact cell phone","storage":"128gb","img":"https://github.com/joseguti99/DB-IMG-PUBLIC/blob/main/motorola/g9power.png?raw=true"},{"category":"smartphone","id":"5","title":"Motorola G20","model":"motorola","price":60000,"stock":7,"description":"Light, fast and compact cell phone","storage":"128gb","img":"https://github.com/joseguti99/DB-IMG-PUBLIC/blob/main/motorola/g20.png?raw=true"},{"category":"smartphone","id":"6","title":"Motorola G30","model":"motorola","price":67000,"stock":9,"description":"Light, fast and compact cell phone","storage":"128gb","img":"https://github.com/joseguti99/DB-IMG-PUBLIC/blob/main/motorola/motog30.png?raw=true"},{"category":"smartphone","id":"7","title":"Motorola One","model":"motorola","price":48000,"stock":9,"description":"Light, fast and compact cell phone","storage":"128gb","img":"https://github.com/joseguti99/DB-IMG-PUBLIC/blob/main/motorola/one.png?raw=true"},{"category":"smartphone","id":"8","title":"Samsung Galaxy A02","model":"samsung","price":42999,"stock":11,"description":"Light, fast and compact cell phone","storage":"128gb","img":"https://github.com/joseguti99/DB-IMG-PUBLIC/blob/main/Samsung/a02.png?raw=true"},{"category":"smartphone","id":"9","title":"Samsung Galaxy A12","model":"samsung","price":43599,"stock":14,"description":"Light, fast and compact cell phone","storage":"128gb","img":"https://github.com/joseguti99/DB-IMG-PUBLIC/blob/main/Samsung/a12.png?raw=true"},{"category":"smartphone","id":"10","title":"Samsung Galaxy A32","model":"samsung","price":46999,"stock":13,"description":"Light, fast and compact cell phone","storage":"128gb","img":"https://github.com/joseguti99/DB-IMG-PUBLIC/blob/main/Samsung/a32.png?raw=true"},{"category":"smartphone","id":"11","title":"Samsung Galaxy A52","model":"samsung","price":52999,"stock":15,"description":"Light, fast and compact cell phone","storage":"256gb","img":"https://github.com/joseguti99/DB-IMG-PUBLIC/blob/main/Samsung/a52.png?raw=true"},{"category":"smartphone","id":"12","title":"Samsung Galaxy Note 20","model":"samsung","price":75999,"stock":12,"description":"Light, fast and compact cell phone","storage":"256gb","img":"https://github.com/joseguti99/DB-IMG-PUBLIC/blob/main/Samsung/note20.png?raw=true"},{"category":"smartphone","id":"13","title":"Samsung Galaxy S20","model":"samsung","price":65999,"stock":15,"description":"Light, fast and compact cell phone","storage":"256gb","img":"https://github.com/joseguti99/DB-IMG-PUBLIC/blob/main/Samsung/s20.png?raw=true"},{"category":"smartphone","id":"14","title":"Samsung Galaxy S21","model":"samsung","price":75999,"stock":13,"description":"Light, fast and compact cell phone","storage":"256gb","img":"https://github.com/joseguti99/DB-IMG-PUBLIC/blob/main/Samsung/s21.png?raw=true"},{"category":"smartphone","id":"15","title":"Samsung Galaxy S21 Pro","model":"samsung","price":79999,"stock":12,"description":"Light, fast and compact cell phone","storage":"480gb","img":"https://github.com/joseguti99/DB-IMG-PUBLIC/blob/main/Samsung/s21rosa.png?raw=true"},{"category":"smartphone","id":"16","title":"Xiaomi A9","model":"xiaomi","price":35999,"stock":13,"description":"Light, fast and compact cell phone","storage":"64gb","img":"https://github.com/joseguti99/DB-IMG-PUBLIC/blob/main/xiaomi/9a.png?raw=true"},{"category":"smartphone","id":"17","title":"Xiaomi 9T","model":"xiaomi","price":38599,"stock":11,"description":"Light, fast and compact cell phone","storage":"128gb","img":"https://github.com/joseguti99/DB-IMG-PUBLIC/blob/main/xiaomi/9t.png?raw=true"},{"category":"smartphone","id":"18","title":"Xiaomi F3","model":"xiaomi","price":32599,"stock":17,"description":"Light, fast and compact cell phone","storage":"64gb","img":"https://github.com/joseguti99/DB-IMG-PUBLIC/blob/main/xiaomi/f3.png?raw=true"},{"category":"smartphone","id":"19","title":"Xiaomi M3","model":"xiaomi","price":37499,"stock":12,"description":"Light, fast and compact cell phone","storage":"128gb","img":"https://github.com/joseguti99/DB-IMG-PUBLIC/blob/main/xiaomi/m3.png?raw=true"},{"category":"smartphone","id":"20","title":"xiaomi Mi 11","model":"xiaomi","price":51999,"stock":13,"description":"Light, fast and compact cell phone","storage":"128gb","img":"https://github.com/joseguti99/DB-IMG-PUBLIC/blob/main/xiaomi/mi11.png?raw=true"},{"category":"smartphone","id":"21","title":"Xiaomi Note 8","model":"xiaomi","price":62599,"stock":0,"description":"Light, fast and compact cell phone","storage":"64gb","img":"https://github.com/joseguti99/DB-IMG-PUBLIC/blob/main/xiaomi/note8.png?raw=true"},{"category":"smartphone","id":"22","title":"Xiaomi Note 9","model":"xiaomi","price":65499,"stock":13,"description":"Light, fast and compact cell phone","storage":"128gb","img":"https://github.com/joseguti99/DB-IMG-PUBLIC/blob/main/xiaomi/note9.png?raw=true"},{"category":"smartphone","id":"23","title":"xiaomi Poco 3","model":"xiaomi","price":46599,"stock":15,"description":"Light, fast and compact cell phone","storage":"64gb","img":"https://github.com/joseguti99/DB-IMG-PUBLIC/blob/main/xiaomi/pocox3.png?raw=true"},{"category":"smartwatch","id":"24","title":"Apple Watch Nike-Air","model":"apple","price":34999,"stock":12,"description":"powerful, ultra-durable and waterproof smartwatch","storage":"","img":"https://github.com/joseguti99/DB-IMG-PUBLIC/blob/main/smartwatch/apple-nike.png?raw=true"},{"category":"smartwatch","id":"25","title":"Apple Serie 6","model":"apple","price":31999,"stock":14,"description":"powerful, ultra-durable and waterproof smartwatch","storage":"","img":"https://github.com/joseguti99/DB-IMG-PUBLIC/blob/main/smartwatch/apple-serie-6.png?raw=true"},{"category":"smartwatch","id":"26","title":"Apple Serie 3","model":"apple","price":29999,"stock":8,"description":"powerful, ultra-durable and waterproof smartwatch","storage":"","img":"https://github.com/joseguti99/DB-IMG-PUBLIC/blob/main/smartwatch/apple-watch-s3.png?raw=true"},{"category":"smartwatch","id":"27","title":"Galaxy Watch S4","model":"samsung","price":27999,"stock":10,"description":"powerful, ultra-durable and waterproof smartwatch","storage":"","img":"https://github.com/joseguti99/DB-IMG-PUBLIC/blob/main/smartwatch/galaxy-watch-4.png?raw=true"},{"category":"smartwatch","id":"28","title":"Garmin Watch-X","model":"samsung","price":32999,"stock":14,"description":"powerful, ultra-durable and waterproof smartwatch","storage":"","img":"https://github.com/joseguti99/DB-IMG-PUBLIC/blob/main/smartwatch/garmin-watch.png?raw=true"},{"category":"smartwatch","id":"29","title":"FibiWatch S10","model":"samsung","price":28999,"stock":16,"description":"powerful, ultra-durable and waterproof smartwatch","storage":"","img":"https://github.com/joseguti99/DB-IMG-PUBLIC/blob/main/smartwatch/smartwatch-fibi.png?raw=true"},{"category":"smartwatch","id":"30","title":"SmartWatch G-PRO","model":"samsung","price":33999,"stock":13,"description":"powerful, ultra-durable and waterproof smartwatch","storage":"","img":"https://github.com/joseguti99/DB-IMG-PUBLIC/blob/main/smartwatch/smart-watch-gt.png?raw=true"},{"category":"smartwatch","id":"31","title":"SmartWatch X-OMI","model":"samsung","price":26999,"stock":11,"description":"powerful, ultra-durable and waterproof smartwatch","storage":"","img":"https://github.com/joseguti99/DB-IMG-PUBLIC/blob/main/smartwatch/smart-watch-xiaomi.png?raw=true"},{"category":"accesories","id":"32","title":"Samsung car charger","model":"samsung","price":959,"stock":25,"description":"accesories charger","storage":"","img":"https://github.com/joseguti99/DB-IMG-PUBLIC/blob/main/accesorios/cargador-usb-auto.png?raw=true"},{"category":"accesories","id":"33","title":"wireless charger phone","model":"samsung","price":1199,"stock":10,"description":"wireless charger phone","storage":"","img":"https://github.com/joseguti99/DB-IMG-PUBLIC/blob/main/accesorios/cgd-inalambric.png?raw=true"},{"category":"accesories","id":"34","title":"Portable phone charger","model":"samsung","price":1299,"stock":20,"description":"Portable phone charger","storage":"","img":"https://github.com/joseguti99/DB-IMG-PUBLIC/blob/main/accesorios/cargador-portatil.png?raw=true"},{"category":"accesories","id":"35","title":"Charger power-100","model":"","price":1499,"stock":15,"description":"","storage":"","img":"https://github.com/joseguti99/DB-IMG-PUBLIC/blob/main/accesorios/cargador-power-portatil.png?raw=true"},{"category":"accesories","id":"36","title":"Charger fast Samsung","model":"","price":649,"stock":45,"description":"","storage":"","img":"https://github.com/joseguti99/DB-IMG-PUBLIC/blob/main/accesorios/cargador-tipo-c.png?raw=true"},{"category":"accesories","id":"37","title":"Gamepad Pro","model":"","price":2499,"stock":16,"description":"","storage":"","img":"https://github.com/joseguti99/DB-IMG-PUBLIC/blob/main/accesorios/gamepad.png?raw=true"},{"category":"accesories","id":"38","title":"phone holder X-50","model":"","price":1599,"stock":13,"description":"","storage":"","img":"https://github.com/joseguti99/DB-IMG-PUBLIC/blob/main/accesorios/soporte-bici.png?raw=true"},{"category":"accesories","id":"37","title":"Cell tripod Pro","model":"","price":899,"stock":11,"description":"","storage":"","img":"https://github.com/joseguti99/DB-IMG-PUBLIC/blob/main/accesorios/tripode-smart.png?raw=true"}]')},70:function(t,e,a){},71:function(t,e,a){},98:function(t,e,a){},99:function(t,e,a){}},[[101,1,2]]]);
//# sourceMappingURL=main.18c4e935.chunk.js.map