(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[195],{6055:function(e,t,i){(window.__NEXT_P=window.__NEXT_P||[]).push(["/blog",function(){return i(2722)}])},1839:function(e,t){"use strict";t.Z={src:"/_next/static/media/2.8dbfb741.jpg",height:450,width:330,blurDataURL:"data:image/jpeg;base64,/9j/2wBDAAoHBwgHBgoICAgLCgoLDhgQDg0NDh0VFhEYIx8lJCIfIiEmKzcvJik0KSEiMEExNDk7Pj4+JS5ESUM8SDc9Pjv/2wBDAQoLCw4NDhwQEBw7KCIoOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozv/wAARCAAIAAYDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAb/xAAZEAACAwEAAAAAAAAAAAAAAAAAEgERMUH/xAAUAQEAAAAAAAAAAAAAAAAAAAAA/8QAFBEBAAAAAAAAAAAAAAAAAAAAAP/aAAwDAQACEQMRAD8Ar4ZptV5WgAD/2Q==",blurWidth:6,blurHeight:8}},5275:function(e,t,i){"use strict";var s=i(5893),a=i(1664),l=i.n(a);let r=()=>(0,s.jsx)(s.Fragment,{children:(0,s.jsx)("section",{className:"cta__area",children:(0,s.jsxs)("div",{className:"container line pb-110",children:[(0,s.jsx)("div",{className:"line-3"}),(0,s.jsx)("div",{className:"row",children:(0,s.jsx)("div",{className:"col-xxl-12",children:(0,s.jsxs)("div",{className:"cta__content",children:[(0,s.jsx)("p",{className:"cta__sub-title",children:"Ready for Transformation?"}),(0,s.jsx)("h2",{className:"cta__title title-anim",children:"Discuss your vision with our experts. Shape your business's future."}),(0,s.jsx)("div",{className:"btn_wrapper",children:(0,s.jsxs)(l(),{href:"/contact",className:"wc-btn-primary btn-hover btn-item",children:[(0,s.jsx)("span",{}),"Talk with us"," ",(0,s.jsx)("i",{className:"fa-solid fa-arrow-right"})]})})]})})})]})})});t.Z=r},2722:function(e,t,i){"use strict";i.r(t),i.d(t,{default:function(){return _}});var s=i(5893),a=i(9008),l=i.n(a),r=i(8961),n=i(7294),o=i(990),c=i(7960),d=i(1664),A=i.n(d),h=i(1839),u=i(5675),g=i.n(u),m=i(5121);let x=()=>{let[e,t]=(0,n.useState)(!1),[i,s]=(0,n.useState)([]),a=async()=>{t(!0);try{let e=await m.Z.get("".concat("https://cms.projecx.io/api","/blogs/?populate=*"));s(e.data.data),t(!1)}catch(e){t(!1),console.error("Error fetching blogs:",e)}};return(0,n.useEffect)(()=>{a()},[]),{isLoading:e,blogs:i}};var v=i(6603);o.p8.registerPlugin(c.ic);let p=()=>{let{blogs:e}=x();return(0,n.useEffect)(()=>{{let e=window.innerWidth,t=o.p8.context(()=>{if(o.p8.set(".blog__animation .blog__item-3",{x:50,opacity:0}),e<1023){let e=o.p8.utils.toArray(".blog__animation .blog__item-3");e.forEach((e,t)=>{o.p8.timeline({scrollTrigger:{trigger:e,start:"top center+=200"}}).to(e,{x:0,opacity:1,ease:"power2.out",duration:1.5})})}else o.p8.to(".blog__animation .blog__item-3",{scrollTrigger:{trigger:".blog__animation .blog__item-3",start:"top center+=300",markers:!1},x:0,opacity:1,ease:"power2.out",duration:2,stagger:{each:.3}})});return()=>t.revert()}},[]),(0,s.jsx)(s.Fragment,{children:(0,s.jsx)("section",{className:"blog__area-3 blog-v3 blog__animation",children:(0,s.jsxs)("div",{className:"container line",children:[(0,s.jsx)("div",{className:"line-3"}),(0,s.jsx)("div",{className:"row ",children:(0,s.jsx)("div",{className:"col-xxl-12",children:(0,s.jsxs)("div",{className:"sec-title-wrapper text-anim pt-130",children:[(0,s.jsx)("h2",{className:"sec-sub-title",children:"Recent Blog"}),(0,s.jsxs)("h3",{className:"sec-title title-anim",children:["Read Updated ",(0,s.jsx)("br",{}),"Journal"]}),(0,s.jsxs)("p",{children:["Read our blog and try to see everything from every perspective. Our passion lies in making everything accessible and aesthetic for everyone."," "]})]})})}),(0,s.jsx)("div",{className:"row",children:e.map(e=>{var t,i,a,l,r,n,o,c,d;return(0,s.jsx)("div",{className:"col-xxl-6 col-xl-6 col-lg-6",children:(0,s.jsxs)("article",{className:"blog__item-3",children:[(0,s.jsx)("div",{className:"blog__img-wrapper-3",children:(0,s.jsx)(A(),{href:"/blog/".concat(e.attributes.slug),children:(0,s.jsx)("div",{className:"img-box",children:(null==e?void 0:null===(t=e.attributes)||void 0===t?void 0:null===(i=t.coverImage)||void 0===i?void 0:null===(a=i.data)||void 0===a?void 0:null===(l=a.attributes)||void 0===l?void 0:l.url)?(0,s.jsx)(g(),{priority:!0,style:{width:"auto",height:"auto"},className:"image-box__item",src:"".concat("https://cms.projecx.io").concat(null==e?void 0:null===(r=e.attributes)||void 0===r?void 0:null===(n=r.coverImage)||void 0===n?void 0:null===(o=n.data)||void 0===o?void 0:null===(c=o.attributes)||void 0===c?void 0:c.url),alt:"Blog Thumbnail",width:300,height:300}):(0,s.jsx)(g(),{priority:!0,style:{width:"auto",height:"auto"},className:"image-box__item",src:h.Z,alt:"Blog Thumbnail",width:300,height:300})})})}),(0,s.jsxs)("div",{className:"blog__info-3",children:[(0,s.jsx)("h4",{className:"blog__meta",children:(0,v.p)(null==e?void 0:null===(d=e.attributes)||void 0===d?void 0:d.publishedAt)}),(0,s.jsx)("h5",{children:(0,s.jsx)(A(),{href:"/blog/".concat(e.attributes.slug),className:"blog__title-3",children:e.attributes.title})}),(0,s.jsxs)(A(),{href:"/blog/".concat(e.attributes.slug),className:"blog__btn",children:["Read More"," ",(0,s.jsx)("span",{children:(0,s.jsx)("i",{className:"fa-solid fa-arrow-right"})})]})]})]})},e.id)})})]})})})};var b=i(5275);let j=()=>(0,s.jsxs)(s.Fragment,{children:[(0,s.jsxs)(l(),{children:[(0,s.jsx)("title",{children:"Projecx - Blog"}),(0,s.jsx)("meta",{name:"description",content:"Projecx Blog provides integrated digital solutions and the latest advancements for programmers and business owners. Our expert team offers exclusive insights and advice designed to keep you ahead in the digital landscape. At Projecx, we don’t just follow technology—we lead it. Through our blog, we support business development and enhance efficiency, empowering our clients to achieve their goals in an ever-changing digital world."}),(0,s.jsx)("meta",{name:"viewport",content:"width=device-width, initial-scale=1"})]}),(0,s.jsx)("main",{children:(0,s.jsxs)(r.Z,{header:"header3",footer:"footer3",defaultMode:"dark",children:[(0,s.jsx)(p,{}),(0,s.jsx)(b.Z,{})]})})]});var _=j},6603:function(e,t,i){"use strict";i.d(t,{p:function(){return s}});let s=e=>{let t=new Date(e);return t.toLocaleDateString("en-GB",{day:"2-digit",month:"short",year:"numeric"})}}},function(e){e.O(0,[976,571,802,406,961,774,888,179],function(){return e(e.s=6055)}),_N_E=e.O()}]);