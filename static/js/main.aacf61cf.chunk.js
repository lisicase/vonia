(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{188:function(e,t,a){e.exports=a(275)},194:function(e,t,a){},268:function(e,t,a){},275:function(e,t,a){"use strict";a.r(t);var n=a(1),l=a.n(n),r=a(38),i=a.n(r),c=(a(193),a(194),a(8)),o=a(10),s=a(20),m=a(16),u=a(19),d=a(66),f=a(25),E=a(136),p=a(67),g=a(312),h=(a(139),function(e){function t(){return Object(c.a)(this,t),Object(s.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(o.a)(t,[{key:"getStars",value:function(e){for(var t=this,a=[],n=0;n<5;n++)e>=1?a.push(1):a.push(e),e--;return a.map(function(e){return 1==e?l.a.createElement(p.a,{size:t.props.size}):l.a.createElement(p.d,{size:t.props.size})})}},{key:"render",value:function(){return l.a.createElement(g.a,{disabled:!0,defaultValue:this.props.rating,allowHalf:!0,style:{color:"#E0AFFB"}})}}]),t}(n.Component)),b=function(e){function t(){return Object(c.a)(this,t),Object(s.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){return l.a.createElement("div",null,l.a.createElement("h2",null,"Ratings"),l.a.createElement(y,{title:"Cleanliness",rating:4}),l.a.createElement(y,{title:"Privacy",rating:4}),l.a.createElement(y,{title:"Well-Stocked",rating:5}),l.a.createElement(y,{title:"Wait Line",rating:3}))}}]),t}(n.Component),y=function(e){function t(){return Object(c.a)(this,t),Object(s.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){return l.a.createElement("div",{style:{display:"flex",justifyContent:"space-between"}},l.a.createElement("p",{className:"slightBold"},this.props.title),l.a.createElement(h,{rating:this.props.rating,size:25}))}}]),t}(n.Component),v=function(e){function t(){return Object(c.a)(this,t),Object(s.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){return l.a.createElement("div",{className:"lightDivider"})}}]),t}(n.Component),j=function(e){function t(){return Object(c.a)(this,t),Object(s.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){return l.a.createElement("div",{className:"lightDivider short"})}}]),t}(n.Component),O=function(e){function t(){return Object(c.a)(this,t),Object(s.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){return l.a.createElement("img",{src:"logo/Logo0.png",style:{height:"15rem",marginTop:"3rem",marginBottom:"3rem"}})}}]),t}(n.Component),w=function(e){function t(e){var a;return Object(c.a)(this,t),(a=Object(s.a)(this,Object(m.a)(t).call(this,e))).redirect=function(){a.setState({redirect:!0})},a.state={redirect:!1},a}return Object(u.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){return this.state&&this.state.redirect?l.a.createElement(f.a,{to:this.props.redirectTo}):l.a.createElement("div",{onClick:this.redirect},this.props.button)}}]),t}(n.Component),x=a(171),C=a(55),S=a(159),k=a(96),N=a(56);function A(){var e=[{count:1},{count:2}].map(function(e){return l.a.createElement("div",null,l.a.createElement(T,{num:e}),l.a.createElement(v,null))});return l.a.createElement("div",null,e)}function T(){return l.a.createElement("div",null,l.a.createElement("div",{style:{display:"flex",flexDirection:"row",justifyContent:"space-between"}},l.a.createElement("p",null,l.a.createElement("strong",null,"LOVE THIS BATHROOM!!!")),l.a.createElement(h,{rating:"5",size:25})),l.a.createElement("div",{style:{display:"flex",flexDirection:"row"}},l.a.createElement(I,null),l.a.createElement(R,null)))}function I(){return l.a.createElement("div",null,l.a.createElement("div",{style:{display:"flex",flexDirection:"row"}},l.a.createElement(S.a,{className:"bufferedIcon loweredIcon",size:25}),l.a.createElement("p",{style:{paddingRight:"1rem",fontSize:"1.1rem"}},"rebec20"),l.a.createElement("p",null,"1/3/2020")),l.a.createElement("p",null,"I was really satisfied with this bathroom! It was clean, well maintained, and had no line! Thanks to Spotty, I could easily and quickly use a great public bathroom! :)"))}function R(){return l.a.createElement("div",null,l.a.createElement(N.d,{size:25}),l.a.createElement(k.c,{size:25}))}var B=function(){var e=l.a.createElement(w,{redirectTo:"/signin",button:l.a.createElement(x.a,null,l.a.createElement(C.b,{className:"bufferedIcon"}),"Write a Review")});return sessionStorage.getItem("Auth Token")&&(e=l.a.createElement(w,{redirectTo:"/review",button:l.a.createElement(x.a,null,l.a.createElement(C.b,{className:"bufferedIcon"}),"Write a Review")})),l.a.createElement("div",null,l.a.createElement("div",{style:{display:"flex"}},l.a.createElement("h2",null,"Reviews"),l.a.createElement("p",{style:{marginLeft:"1rem"}},"38 reviews")),l.a.createElement("div",{style:{textAlign:"center"}},e),l.a.createElement(v,null),l.a.createElement(A,null))},D=a(160),F=a(115);function z(){Object(f.g)();return l.a.createElement("div",{style:{display:"flex",flexDirection:"row",justifyContent:"space-evenly"}},l.a.createElement(W,{clickHandler:function(){console.log("direction click working"),window.open("https://www.google.com/maps/search/?api=1&query=Architecture+Hall%2CSeattle%2CWA")},icon:l.a.createElement(k.a,{size:30}),title:"Directions"}),l.a.createElement(W,{icon:l.a.createElement(F.a,{size:30}),title:"Favorite"}),l.a.createElement(W,{icon:l.a.createElement(D.a,{size:30}),title:"Review"}),l.a.createElement(W,{icon:l.a.createElement(k.b,{size:30}),title:"Share"}))}function W(e){var t=e.icon,a=e.title,n=e.clickHandler;return l.a.createElement("div",{onClick:n,className:"textCenter"},l.a.createElement("div",{className:"actionBtn"},t),l.a.createElement("p",null,a))}var H=a(73),L=function(e){function t(){return Object(c.a)(this,t),Object(s.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){return l.a.createElement("div",null,l.a.createElement("h2",null,"Gallery"),l.a.createElement("div",{style:{display:"flex",height:"10rem",marginTop:"2rem",marginBottom:"1rem"}},l.a.createElement("img",{src:"temp-imgs/bathrooms/br1.png",className:"bufferedIcon shadow"}),l.a.createElement("img",{src:"temp-imgs/bathrooms/br2.png",className:"bufferedIcon shadow"}),l.a.createElement("img",{src:"temp-imgs/bathrooms/br3.png",className:"bufferedIcon shadow"}),l.a.createElement("div",{style:{display:"flex",alignItems:"center"}},l.a.createElement(H.a,{size:20}))))}}]),t}(n.Component),P=a(86),U=function(e){function t(){return Object(c.a)(this,t),Object(s.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){return l.a.createElement("div",null,l.a.createElement("h2",null,"Features"),l.a.createElement("div",{style:{display:"flex",justifyContent:"space-between"}},l.a.createElement("div",{style:{display:"flex",flexWrap:"wrap"}},l.a.createElement(M,{feature:"Tall Stalls"}),l.a.createElement(M,{feature:"Paper Towels"}),l.a.createElement(M,{feature:"Auto Flush"}),l.a.createElement(M,{feature:"Hand Dryer"})),l.a.createElement("div",{style:{display:"flex",alignItems:"center"}},l.a.createElement(H.a,{size:20}))))}}]),t}(n.Component),M=function(e){function t(){return Object(c.a)(this,t),Object(s.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){return l.a.createElement("div",{style:{display:"flex",flexDirection:"row",marginRight:"5rem"}},l.a.createElement(p.b,{className:"bufferedIcon",size:25}),l.a.createElement("p",null,this.props.feature))}}]),t}(n.Component);function q(){return l.a.createElement("div",{style:{textAlign:"left"}},l.a.createElement(G,null),l.a.createElement("div",{style:{display:"flex",flexDirection:"row",alignContent:"center"}},l.a.createElement("div",{style:{width:"5vw"}}),l.a.createElement("div",{style:{width:"90vw"}},l.a.createElement(z,null),l.a.createElement(v,null),l.a.createElement(b,null),l.a.createElement(v,null),l.a.createElement(L,null),l.a.createElement(v,null),l.a.createElement(U,null),l.a.createElement(v,null),l.a.createElement(B,null))))}function G(){return l.a.createElement("div",{style:{textAlign:"left"}},l.a.createElement("div",{style:{display:"flex",flexDirection:"row",justifyContent:"space-between"}},l.a.createElement("div",{style:{display:"flex",flexDirection:"row"}},l.a.createElement(w,{redirectTo:"/",button:l.a.createElement(P.a,{className:"bufferedIcon",style:{height:"1.5rem"}})}),l.a.createElement("h2",null,"Room 104 / Floor 1")),l.a.createElement(h,{rating:"4.5",size:"25"})),l.a.createElement("p",{className:"bathroomAddress"},"Guthrie Annex 3 (GA3), Seattle, WA 98105"))}var J=a(13),K=a(74);function V(e){var t=e.bathroom,a=Object(n.useState)(""),r=Object(J.a)(a,2),i=r[0];r[1];return console.log(t),console.log(t.properties.floors),i&&"bathroom"===i?l.a.createElement(f.a,{to:"/bathroom"}):l.a.createElement("div",{className:"shadow",style:{width:"70vw",borderRadius:"25px",backgroundColor:"white"}},l.a.createElement("div",{style:{margin:"1rem"}},l.a.createElement(Q,{name:t.properties.name,location:t.properties.location,miles:t.properties.dist,imgSrc:t.properties.imgSrc}),t.properties.floors.map(function(e){var t=Math.floor(2*Math.random()),a=Math.floor(20*Math.random());return l.a.createElement("div",null,l.a.createElement(Z,{id:a,accessible:0===t,title:"Floor ".concat(e.level),rating:e.rating}),l.a.createElement(j,null))})))}function Q(e){var t=e.name,a=e.location,n=e.imgSrc,r=e.miles;return l.a.createElement("div",{style:{display:"flex",flexDirection:"row",marginBottom:"1rem"}},l.a.createElement("img",{src:n,style:{height:"5rem",width:"5rem",objectFit:"cover",marginRight:"1rem",borderRadius:"1rem"}}),l.a.createElement("div",{style:{textAlign:"left"}},l.a.createElement("h3",{className:"bathroomTitle"},l.a.createElement("strong",null,t)),l.a.createElement("div",{style:{lineHeight:"0.5rem"}},l.a.createElement("p",null,a),l.a.createElement("p",null,"".concat(r," miles")," "))))}function Z(e){var t=e.id,a=e.title,n=e.rating,r=e.accessible?l.a.createElement(N.a,{style:{height:"1.5rem"}}):l.a.createElement("span",{style:{width:"1rem"}});return l.a.createElement("div",{style:{textAlign:"left"}},l.a.createElement("div",{style:{display:"flex",flexDirection:"row",justifyContent:"space-between"}},l.a.createElement("div",{style:{display:"flex",flexDirection:"row"}},l.a.createElement(P.c,{className:"bufferedIcon",style:{height:"1.5rem",fontSize:"0.7rem"}}),l.a.createElement("a",{href:"/vonia/#/bathroom/".concat(t)},a)),l.a.createElement("div",{style:{display:"flex",flexDirection:"row"}},l.a.createElement(h,{rating:n}),r)))}var Y=a(127);a(125);function _(e){var t=e.flyToStore,a=e.createPopup;K.features.forEach(function(e,t){e.properties.id=t});var n=function(e){a(e),t(e)};return l.a.createElement("div",{className:"shadow",style:{width:"100vw",borderTopLeftRadius:"25px",borderTopRightRadius:"25px",backgroundColor:"white"}},l.a.createElement("div",{style:{display:"flex",justifyContent:"center"}},l.a.createElement(H.b,{style:{marginTop:"0.5rem"}})),l.a.createElement("div",null,K.features.map(function(e){return l.a.createElement(X,{bathroom:e,onClick:n})})))}function X(e){var t=e.bathroom,a=e.onClick,r=Object(n.useState)(""),i=Object(J.a)(r,2),c=i[0];i[1];return"bathroomcard"===c?l.a.createElement(f.a,{to:"/bathroomcard"}):l.a.createElement("div",{id:"listing-".concat(t.properties.id),onClick:function(){a(t)},style:{textAlign:"left",display:"flex",flexDirection:"row",justifyContent:"space-between"}},l.a.createElement(Q,{name:t.properties.name,location:t.properties.address,miles:t.properties.dist,imgSrc:t.properties.imgSrc}))}var $=function(e){function t(){return Object(c.a)(this,t),Object(s.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){var e=this,t=[{id:0,name:"Chemistry Building",location:"Rainier Vista",miles:"0.1",imgSrc:"temp-imgs/buildings/CHB.png",rating:4.6},{id:1,name:"Physics/Astronomy Auditorium",location:"3910 15th Ave NE",miles:"0.1",imgSrc:"temp-imgs/buildings/PAA.png",rating:4.3},{id:2,name:"Husky Union Bldg",location:"4001 E Stevens Way NE",miles:"0.3",imgSrc:"temp-imgs/buildings/HUB.jpg",rating:3.1},{id:3,name:"Mary Gates Hall",location:"1851 NE Grant Ln",miles:"0.3",imgSrc:"temp-imgs/buildings/MGH.jpg",rating:3.6},{id:4,name:"Alder Hall",location:"1315 NE Campus Pkwy",miles:"0.4",imgSrc:"temp-imgs/buildings/HFS-Alder.jpg",rating:4.9},{id:5,name:"Hans Rosling Center",location:"Guthrie Annex 3 (GA3)",miles:"0.4",imgSrc:"temp-imgs/buildings/HRC.jpg",rating:4.6},{id:6,name:"Suzzalo Library",location:"4000 15th Ave NE",miles:"0.5",imgSrc:"temp-imgs/buildings/SUZ.jpg",rating:3.1}],a=[{id:0,name:"Floor 2"},{id:1,name:"Floor 3"},{id:2,name:"Floor 1"},{id:3,name:"Floor 1"},{id:4,name:"Floor 3"},{id:5,name:"Floor 2"},{id:6,name:"Floor 1"}].map(function(a){var n=a.id;return l.a.createElement(ee,{handleClick:e.props.test,brInfo:a,bldgInfo:t[n],key:n})});return l.a.createElement("div",null,l.a.createElement("div",{style:{textAlign:"left"}},l.a.createElement(w,{redirectTo:"/",button:l.a.createElement("i",{className:"open-details fa fa-chevron-left","aria-hidden":"true"})}),l.a.createElement("h1",null,"Favorites")),l.a.createElement("div",null,a))}}]),t}(n.Component),ee=function(e){function t(){return Object(c.a)(this,t),Object(s.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){return l.a.createElement("div",{style:{margin:"1rem"}},l.a.createElement("div",{style:{textAlign:"left",display:"flex",flexDirection:"row",justifyContent:"space-between"}},l.a.createElement(w,{redirectTo:"/bathroom",button:l.a.createElement(te,{brInfo:this.props.brInfo,bldgInfo:this.props.bldgInfo})}),l.a.createElement("div",null,l.a.createElement(P.b,{size:30,className:"purpleRatingSymbol"}))),l.a.createElement(j,null))}}]),t}(n.Component),te=function(e){function t(){return Object(c.a)(this,t),Object(s.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){var e=this.props.brInfo,t=this.props.bldgInfo;return l.a.createElement("div",{style:{display:"flex",flexDirection:"row",marginBottom:"1rem"}},l.a.createElement("img",{src:t.imgSrc,style:{height:"5rem",width:"5rem",objectFit:"cover",marginRight:"1rem",borderRadius:"1rem"}}),l.a.createElement("div",{style:{textAlign:"left"}},l.a.createElement("h3",{className:"bathroomTitle"},l.a.createElement("strong",null,t.name)),l.a.createElement("div",{style:{lineHeight:"0.5rem"}},l.a.createElement("p",null,t.location),l.a.createElement("p",null,e.name))))}}]),t}(n.Component),ae=a(315),ne=a(316),le=a(310),re=a(311),ie=a(314);function ce(){return l.a.createElement("div",null,l.a.createElement("div",{style:{textAlign:"left"}},l.a.createElement(w,{redirectTo:"/bathroom",button:l.a.createElement("i",{className:"open-details fa fa-chevron-left","aria-hidden":"true"})}),l.a.createElement("h1",null,"Write a Review")),l.a.createElement(oe,null))}function oe(){return l.a.createElement("form",{class:"form-inline"},l.a.createElement("div",{style:{textAlign:"left",display:"flex",flexDirection:"column",margin:"3rem"}},l.a.createElement(se,null),l.a.createElement(ue,null),l.a.createElement(de,null)),l.a.createElement("div",{style:{marginTop:"2rem",paddingBottom:"2rem"}},l.a.createElement(fe,null)))}function se(){return l.a.createElement("div",null,l.a.createElement("h2",{className:"sectionTitle"},"Rating"),l.a.createElement(me,{title:"Cleanliness"}),l.a.createElement(me,{title:"Privacy"}),l.a.createElement(me,{title:"Well-Stocked"}),l.a.createElement(me,{title:"Wait Line"}))}var me=function(e){function t(){return Object(c.a)(this,t),Object(s.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){return l.a.createElement("div",{style:{display:"flex",justifyContent:"space-between"}},l.a.createElement("p",{className:"slightBold"},this.props.title),l.a.createElement(g.a,{allowHalf:!0,style:{color:"#E0AFFB"}}))}}]),t}(n.Component);function ue(){return l.a.createElement("div",null,l.a.createElement("h2",{className:"sectionTitle",style:{marginTop:"1rem"}},"Bathroom Type"),l.a.createElement(ae.a,{fullWidth:!0},l.a.createElement(ne.a,{id:"demo-simple-select-label",variant:"standard"},"Gender"),l.a.createElement(le.a,{labelId:"demo-simple-select-label",id:"demo-simple-select",variant:"standard"},l.a.createElement(re.a,{value:10},"Women"),l.a.createElement(re.a,{value:20},"Men"),l.a.createElement(re.a,{value:30},"Neutral"))))}function de(){return l.a.createElement("div",null,l.a.createElement("h2",{className:"sectionTitle",style:{marginTop:"2rem"}},"Review Content"),l.a.createElement("div",{class:"form-group mr-3",style:{display:"flex",marginBottom:"1rem"}},l.a.createElement(ie.a,{label:"Title",variant:"standard",fullWidth:!0})),l.a.createElement("div",{class:"form-group mr-3",style:{display:"flex"}},l.a.createElement(ie.a,{label:"Description",variant:"outlined",fullWidth:!0,multiline:!0,minRows:5})))}function fe(){return l.a.createElement("button",{type:"submit",class:"btn submitBtn"},l.a.createElement("i",{className:"fa-solid fa-right-to-bracket","aria-hidden":"true"}),"SUBMIT")}function Ee(){return l.a.createElement("div",null,l.a.createElement("div",{style:{textAlign:"left"}},l.a.createElement(w,{redirectTo:"/",button:l.a.createElement("i",{className:"open-details fa fa-chevron-left","aria-hidden":"true"})}),l.a.createElement("h1",null,"Filters")),l.a.createElement(pe,null))}function pe(){return l.a.createElement("form",{class:"form-inline"},l.a.createElement("div",{style:{textAlign:"left",display:"flex",flexDirection:"column",margin:"1.5rem"}},l.a.createElement(ge,{title:"Gender",filters:["Women","Men","Neutral"]}),l.a.createElement(ge,{title:"Features",filters:["Accessible","Changing Station","Tall Stalls","Water Fountain","Auto-Flush","Feminine Products","Towels"]}),l.a.createElement(ge,{title:"Requirements",filters:["No Key","Free"]}),l.a.createElement(he,null)),l.a.createElement("div",{style:{paddingTop:"2rem"}},l.a.createElement(ve,null),l.a.createElement("span",{style:{padding:"7vw"}}),l.a.createElement(je,null)))}function ge(e){var t=e.filters.map(function(e){return l.a.createElement(ye,{text:e,id:e})});return l.a.createElement("div",null,l.a.createElement("div",{style:{display:"flex"}},l.a.createElement(be,{title:e.title}),l.a.createElement("div",{style:{display:"flex",flexWrap:"wrap",paddingLeft:"1rem"}},t)),l.a.createElement(v,null))}function he(){return l.a.createElement("div",null,l.a.createElement("div",{style:{display:"flex"}},l.a.createElement(be,{title:"Minimum Rating"}),l.a.createElement("div",{style:{paddingLeft:"1rem"}},l.a.createElement(g.a,{allowHalf:!0,style:{color:"#E0AFFB"}}))))}function be(e){return l.a.createElement("div",null,l.a.createElement("h2",{style:{fontSize:"1.1rem",width:"8rem"}},l.a.createElement("strong",null,e.title)))}function ye(e){var t=Object(n.useState)(!1),a=Object(J.a)(t,2),r=a[0],i=a[1],c="btn filterToggle";r&&(c="btn filterToggle on");return l.a.createElement("button",{onClick:function(e){e.preventDefault(),i(!r)},class:c},l.a.createElement("i",{className:"fa-solid fa-right-to-bracket","aria-hidden":"true"}),e.text)}function ve(){return l.a.createElement("button",{type:"submit",class:"btn resetBtn",style:{width:"25vw"}},l.a.createElement("i",{className:"fa-solid fa-right-to-bracket","aria-hidden":"true"}),"RESET")}function je(){return l.a.createElement("button",{type:"submit",class:"btn submitBtn",style:{width:"25vw"}},l.a.createElement("i",{className:"fa-solid fa-right-to-bracket","aria-hidden":"true"}),"SAVE")}function Oe(){return l.a.createElement("div",null,l.a.createElement(we,null),l.a.createElement("div",{style:{paddingLeft:"20vw",paddingRight:"20vw",paddingBottom:"2rem"}},l.a.createElement(xe,null),l.a.createElement(Ce,null),l.a.createElement(ke,null)))}function we(){return l.a.createElement("div",{style:{backgroundColor:"#e3fcff",height:"100vh",display:"flex",alignItems:"center",justifyContent:"center"}},l.a.createElement("div",null,l.a.createElement("h1",{style:{fontSize:"4rem",marginBottom:"1rem"}},"spotty"),l.a.createElement("h2",null,"spot a potty"),l.a.createElement("div",{style:{height:"2rem"}}),l.a.createElement(w,{redirectTo:"/",button:l.a.createElement(x.a,{color:"#68DCEC",shape:"round"},"find a bathroom")}),l.a.createElement("span",{style:{height:"2rem"}})))}function xe(){return l.a.createElement("div",{style:{display:"flex",paddingTop:"4rem",paddingBottom:"4rem",alignItems:"center"}},l.a.createElement("div",{style:{textAlign:"left"}},l.a.createElement("h2",null,"About"),l.a.createElement("p",null,"Lack of bathroom access is a serious humanitarian and public health issue."),l.a.createElement("ul",null,l.a.createElement("li",null,"bathrooms are difficult to access, particularly for people who have to be on the move frequently"),l.a.createElement("li",null,"bathrooms have become even scarcer with the pandemic, and when looking for ability-, gender- and race-inclusive options")),l.a.createElement("p",null,l.a.createElement("strong",null,"To help address this, we have created a mobile-first web application to help people on the move find nearby bathrooms that fit their needs.")),l.a.createElement("p",null)),l.a.createElement("span",{style:{width:"2rem"}}),l.a.createElement(O,null))}function Ce(){return l.a.createElement("div",null,l.a.createElement("h2",null,"The Team"),l.a.createElement("div",{style:{display:"flex",justifyContent:"center"}},l.a.createElement(Se,{name:"Lisi Case",role:"Product Manager & Developer",img:"LisiCase-sq.jpg"}),l.a.createElement(Se,{name:"Kevin Chou",role:"Software Engineer",img:"KevinChou-sq.jpg"}),l.a.createElement(Se,{name:"David Chiang",role:"Data Scientist",img:"DavidChiang-sq.JPG"}),l.a.createElement(Se,{name:"Jacqueline Park",role:"Designer",img:"JacquelinePark-sq.jpg"})))}function Se(e){var t="team-members/"+e.img;return l.a.createElement("div",{style:{margin:"1rem"}},l.a.createElement("img",{src:t,style:{height:"10rem",margin:"1rem"}}),l.a.createElement("p",{style:{marginBottom:"0",fontSize:"1.1rem"}},l.a.createElement("strong",null,e.name)),l.a.createElement("p",null,e.role))}function ke(){return l.a.createElement("div",null,l.a.createElement("h2",null,"Project Status"),l.a.createElement("h6",null,"University of Washington Information School: Capstone project for Winter/Spring 2022"),l.a.createElement("p",null,"This project will transition to open source, effective July 2022 (with no plans to maintain by the original team)."),l.a.createElement("a",{href:"https://github.com/lisicase/vonia/",style:{color:"black"}},l.a.createElement(H.c,{size:50,style:{paddingTop:"1rem"}})))}a(268),a(269);var Ne=a(164),Ae=(Object(Ne.a)({apiKey:"AIzaSyABZx_0B15UsoLInwOJhfkTZuFRa4-ASfQ",authDomain:"spotty-a8e30.firebaseapp.com",databaseURL:"https://spotty-a8e30-default-rtdb.firebaseio.com",projectId:"spotty-a8e30",storageBucket:"spotty-a8e30.appspot.com",messagingSenderId:"589465109564",appId:"1:589465109564:web:ceabc124742b369ee42f39",measurementId:"G-CLY8B68X50"}),a(64));function Te(){var e=Object(n.useState)(""),t=Object(J.a)(e,2),a=t[0],r=t[1],i=Object(n.useState)(""),c=Object(J.a)(i,2),o=c[0],s=c[1],m=Object(f.g)();return l.a.createElement("div",null,l.a.createElement("div",{style:{textAlign:"left"}},l.a.createElement(w,{redirectTo:"/",button:l.a.createElement("i",{className:"open-details fa fa-chevron-left","aria-hidden":"true"})}),l.a.createElement("h1",null,"Log In")),l.a.createElement(O,null),l.a.createElement(Ie,{handleSubmit:function(e){e.preventDefault();var t=Object(Ae.b)();Object(Ae.d)(t,a,o).then(function(e){sessionStorage.setItem("Auth Token",e._tokenResponse.refreshToken),sessionStorage.getItem("Auth Token")&&m("/")}).catch(function(e){var t=e.code,a=e.message;alert("".concat(t,": ").concat(a))})},handleEmail:function(e){return r(e.target.value)},handlePassword:function(e){return s(e.target.value)}}))}function Ie(e){return l.a.createElement("form",{class:"form-inline",onSubmit:e.handleSubmit},l.a.createElement("div",{style:{textAlign:"left",display:"flex",flexDirection:"row",alignContent:"center"}},l.a.createElement("div",{style:{width:"15vw"}}),l.a.createElement("div",{style:{width:"70vw"}},l.a.createElement(Re,{handleEmail:e.handleEmail,handlePassword:e.handlePassword}),l.a.createElement(w,{redirectTo:"/register",button:l.a.createElement("p",{className:"textCenter"},"Don't have an account? ",l.a.createElement("strong",{className:"actionBtn"},"Register Here"))}))),l.a.createElement("div",{style:{marginTop:"20vw"}},l.a.createElement(Be,null)))}function Re(e){return l.a.createElement("div",null,l.a.createElement("div",{class:"form-group mr-3",style:{display:"flex"}},l.a.createElement("label",{for:"searchQuery",class:"mr-2"},l.a.createElement(N.c,{className:"bufferedIcon",size:30,style:{height:"4rem"}})),l.a.createElement(ie.a,{onChange:e.handleEmail,id:"standard-basic",label:"Email",variant:"standard",fullWidth:!0})),l.a.createElement("div",{class:"form-group mr-3",style:{display:"flex"}},l.a.createElement("label",{for:"searchQuery",class:"mr-2"},l.a.createElement(N.b,{className:"bufferedIcon",size:30,style:{height:"4rem"}})),l.a.createElement(ie.a,{onChange:e.handlePassword,id:"standard-basic",label:"Password",variant:"standard",fullWidth:!0})))}function Be(){return l.a.createElement("button",{type:"submit",class:"btn submitBtn"},l.a.createElement("i",{className:"fa-solid fa-right-to-bracket","aria-hidden":"true"}),"LOGIN")}function De(){var e=Object(n.useState)(""),t=Object(J.a)(e,2),a=t[0],r=t[1],i=Object(n.useState)(""),c=Object(J.a)(i,2),o=c[0],s=c[1],m=Object(n.useState)(""),u=Object(J.a)(m,2),d=u[0],E=u[1],p=Object(f.g)();return l.a.createElement("div",null,l.a.createElement("div",{style:{textAlign:"left"}},l.a.createElement(w,{redirectTo:"/",button:l.a.createElement("i",{className:"open-details fa fa-chevron-left","aria-hidden":"true"})}),l.a.createElement("h1",null,"Welcome to Spotty!")),l.a.createElement(O,null),l.a.createElement(Fe,{handleSubmit:function(e){e.preventDefault();var t=Object(Ae.b)(),n=null;Object(Ae.a)(t,a,o).then(function(e){console.log(e),sessionStorage.setItem("Auth Token",e._tokenResponse.refreshToken),n=t.currentUser,console.log(t.currentUser),Object(Ae.c)(n),console.log(sessionStorage.getItem("Auth Token")),sessionStorage.getItem("Auth Token")&&Object(Ae.e)(t.currentUser,{displayName:d}).then(function(){console.log("successfully updated account"),console.log(t.currentUser),p("/")}).catch(function(e){var t=e.code,a=e.message;alert("Error ".concat(t,": ").concat(a,". Please try again"))})}).catch(function(e){var t=e.code,a=e.message;"auth/email-already-in-use"===t?alert("Error: email already in use. Please try a different one"):alert("".concat(t,": ").concat(a))})},handleId:function(e){return E(e.target.value)},handleEmail:function(e){return r(e.target.value)},handlePassword:function(e){return s(e.target.value)}}))}function Fe(e){return l.a.createElement("form",{class:"form-inline",onSubmit:e.handleSubmit},l.a.createElement("div",{style:{textAlign:"left",display:"flex",flexDirection:"row",alignContent:"center"}},l.a.createElement("div",{style:{width:"15vw"}}),l.a.createElement("div",{style:{width:"70vw"}},l.a.createElement("div",{class:"form-group mr-3",style:{display:"flex"}},l.a.createElement("label",{for:"searchQuery",class:"mr-2"},l.a.createElement(C.d,{className:"bufferedIcon",size:30,style:{height:"4rem"}})),l.a.createElement(ie.a,{onChange:e.handleId,id:"standard-basic",label:"Display Name",variant:"standard",fullWidth:!0,required:!0})),l.a.createElement("div",{class:"form-group mr-3",style:{display:"flex"}},l.a.createElement("label",{for:"searchQuery",class:"mr-2"},l.a.createElement(N.c,{className:"bufferedIcon",size:30,style:{height:"4rem"}})),l.a.createElement(ie.a,{onChange:e.handleEmail,id:"standard-basic",label:"Email",variant:"standard",fullWidth:!0,required:!0})),l.a.createElement("div",{class:"form-group mr-3",style:{display:"flex"}},l.a.createElement("label",{for:"searchQuery",class:"mr-2"},l.a.createElement(N.b,{className:"bufferedIcon",size:30,style:{height:"4rem"}})),l.a.createElement(ie.a,{onChange:e.handlePassword,id:"standard-basic",label:"Password",variant:"standard",fullWidth:!0,required:!0})))),l.a.createElement("div",{style:{marginTop:"20vw"}},l.a.createElement(ze,null)))}function ze(){return l.a.createElement("button",{type:"submit",class:"btn submitBtn"},l.a.createElement("i",{className:"fa-solid fa-right-to-bracket","aria-hidden":"true"}),"SIGN UP")}var We=a(100),He=a(165),Le=a(135);function Pe(){var e=Object(Ae.b)(),t=Object(n.useState)(""),a=Object(J.a)(t,2),r=a[0],i=a[1];if(""!==r){var c="/"+r;return l.a.createElement(f.a,{to:c})}return l.a.createElement("div",{className:"fillLeftPage",style:{textAlign:"left",display:"flex",flexDirection:"row",alignContent:"center",backgroundColor:"white"}},l.a.createElement("div",{className:"shadow",style:{width:"80vw",height:"100vh"}},l.a.createElement("div",{style:{margin:"1rem"}},l.a.createElement(Ue,{username:e.currentUser.displayName,location:"Rainier Vista",miles:"0.1",imgSrc:"logo192.png"}),l.a.createElement(j,null),l.a.createElement(Me,{handleClick:function(){i("favorites")},title:"Favorites",icon:l.a.createElement(F.a,{className:"bufferedIcon",style:{height:"1.5rem"}})}),l.a.createElement(Me,{handleClick:function(){i("reviews")},title:"Review History",icon:l.a.createElement(He.a,{className:"bufferedIcon",style:{height:"1.5rem",width:"0.8rem"}})}),l.a.createElement(Me,{title:"Account",icon:l.a.createElement(N.b,{className:"bufferedIcon",style:{height:"1.5rem"}})}),l.a.createElement(Me,{title:"Help",icon:l.a.createElement(Le.a,{className:"bufferedIcon",style:{height:"1.5rem"}})}),l.a.createElement(Me,{title:"Sign Out",handleClick:function(){sessionStorage.removeItem("Auth Token"),console.log("signing out"),window.location.reload()},icon:l.a.createElement(Le.b,{className:"bufferedIcon",style:{height:"1.5rem"}})}))))}var Ue=function(e){function t(){return Object(c.a)(this,t),Object(s.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){return l.a.createElement("div",{style:{display:"flex",flexDirection:"row",marginBottom:"1rem"}},l.a.createElement(C.d,{className:"bufferedIcon",style:{height:"1.5rem"}}),l.a.createElement("p",null,l.a.createElement("strong",null,this.props.username)))}}]),t}(n.Component),Me=function(e){function t(){return Object(c.a)(this,t),Object(s.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){if(this.state&&"reviews"===this.state.redirectTo){var e="/"+this.state.redirectTo;return l.a.createElement(f.a,{to:e})}return l.a.createElement("div",{style:{textAlign:"left"}},l.a.createElement("div",{onClick:this.props.handleClick,style:{display:"flex",flexDirection:"row",justifyContent:"space-between"}},l.a.createElement("div",{style:{display:"flex",flexDirection:"row"}},this.props.icon,l.a.createElement("p",null,this.props.title)),l.a.createElement("div",{style:{display:"flex",flexDirection:"row"}},l.a.createElement(p.c,{style:{height:"1.5rem"}}))))}}]),t}(n.Component),qe=a(166),Ge=a(309),Je=a(119),Ke=a.n(Je);function Ve(){C.c;var e=Object(n.useState)(""),t=Object(J.a)(e,2),a=(t[0],t[1],Object(n.useRef)(null)),r=Object(n.useRef)(null),i=Object(n.useState)(-122.3035),c=Object(J.a)(i,2),o=c[0],s=c[1],m=Object(n.useState)(47.655548),u=Object(J.a)(m,2),d=u[0],f=u[1],E=Object(n.useState)(13),p=Object(J.a)(E,2),g=p[0],h=p[1],b=function(e){console.log("flying to store"),console.log(e),r.current.flyTo({center:e.geometry.coordinates,zoom:15})},y=function(e){var t=document.getElementsByClassName("mapboxgl-popup");t[0]&&t[0].remove(),console.log("creating popup:"),console.log(e);var a=l.a.createElement(V,{bathroom:e}),n=document.createElement("div"),i=Object(qe.renderToString)(a);n.innerHTML="<div>".concat(i,"</div>");var c=e.geometry.coordinates,o=[c[0],c[1]+.0101];new Ke.a.Popup({closeOnClick:!0}).setLngLat(o).setDOMContent(n).addTo(r.current)};return K.features.forEach(function(e,t){e.properties.id=t}),Object(n.useEffect)(function(){r.current||(r.current=new Ke.a.Map({container:a.current,style:"mapbox://styles/mapbox/light-v10",center:[o,d],zoom:g}),r.current.on("load",function(){r.current.addLayer({id:"locations",type:"circle",source:{type:"geojson",data:K},paint:{"circle-radius":3,"circle-stroke-width":2,"circle-color":"#68DCEC","circle-stroke-color":"#68DCEC"}})}),r.current.on("click",function(e){var t=r.current.queryRenderedFeatures(e.point,{layers:["locations"]});if(console.log(e),t.length){console.log(t);var a=t[0];a.properties.floors=JSON.parse(a.properties.floors),console.log(t),b(a),y(a);var n=document.getElementsByClassName("active");n[0]&&n[0].classList.remove("active"),document.getElementById("listing-".concat(a.properties.id)).classList.add("active")}}))}),Object(n.useEffect)(function(){r.current&&r.current.on("move",function(){s(r.current.getCenter().lng.toFixed(4)),f(r.current.getCenter().lat.toFixed(4)),h(r.current.getZoom().toFixed(2))})}),l.a.createElement("div",null,l.a.createElement("div",{style:{marginBottom:"1rem",marginTop:"1rem"},className:"searchBar"},l.a.createElement(Ge.a.Group,{compact:!0},l.a.createElement(Ge.a,{placeholder:"Location",style:{width:"70vw",textAlign:"left"},prefix:l.a.createElement(C.c,{color:"gray"})}),l.a.createElement(w,{redirectTo:"/filter",button:l.a.createElement(x.a,null,l.a.createElement(C.a,{color:"gray"}))}))),l.a.createElement("div",{ref:a,className:"map-container",style:{height:"30rem",overflow:"hidden"}}),l.a.createElement(_,{flyToStore:b,createPopup:y}))}function Qe(e){var t=l.a.createElement(w,{redirectTo:"/signin",button:l.a.createElement("div",null,l.a.createElement(We.a,null))});return sessionStorage.getItem("Auth Token")&&(t=l.a.createElement(Y.a,{trigger:l.a.createElement("div",null,l.a.createElement(We.a,null)),closeOnDocumentClick:!0},l.a.createElement("div",null,l.a.createElement(Pe,null)))),l.a.createElement("div",{style:{backgroundColor:"#dae1e3"}},l.a.createElement("div",{style:{display:"flex",backgroundColor:"white",paddingTop:"0.5rem",justifyContent:"space-between"}},l.a.createElement("div",{style:{display:"flex",justifyContent:"left",paddingLeft:"0.5rem",paddingRight:"0.5rem"}},t),l.a.createElement("div",{style:{display:"flex",justifyContent:"center"}},l.a.createElement("h5",null,"spotty")),l.a.createElement("div",{style:{opacity:"0"}},l.a.createElement(We.a,null))),l.a.createElement(Ve,null))}Ke.a.accessToken="pk.eyJ1Ijoib2ZmaWNpYWwtdm9uaWEiLCJhIjoiY2wwN2RrNm9hMmdheDNldDh4ajFmMmU3bSJ9.35q1Hw4C-OVCh-WOqfRL7A";var Ze=function(e){function t(e){return Object(c.a)(this,t),Object(s.a)(this,Object(m.a)(t).call(this,e))}return Object(u.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){return document.title="Spotty",l.a.createElement("div",{className:"App"},l.a.createElement(l.a.Fragment,null,l.a.createElement(d.a,null,l.a.createElement(f.d,null,l.a.createElement(f.b,{path:"/",element:l.a.createElement(Qe,null)}),l.a.createElement(f.b,{path:"/bathroom/:bathroomId",element:l.a.createElement(q,null)}),l.a.createElement(f.b,{path:"/bathroomcard",element:l.a.createElement(V,null)}),l.a.createElement(f.b,{path:"/reviews",element:l.a.createElement(Ye,null)}),l.a.createElement(f.b,{path:"/review",element:l.a.createElement(ce,null)}),l.a.createElement(f.b,{path:"/signin",element:l.a.createElement(Te,null)}),l.a.createElement(f.b,{path:"/buildinglist",element:l.a.createElement(_,null)}),l.a.createElement(f.b,{path:"/favorites",element:l.a.createElement($,null)}),l.a.createElement(f.b,{path:"/filter",element:l.a.createElement(Ee,null)}),l.a.createElement(f.b,{path:"/register",element:l.a.createElement(De,null)}),l.a.createElement(f.b,{path:"/landing-page",element:l.a.createElement(Oe,null)})))))}}]),t}(n.Component),Ye=function(e){function t(){return Object(c.a)(this,t),Object(s.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){return l.a.createElement("div",{style:{textAlign:"left"}},l.a.createElement("div",{style:{textAlign:"left"}},l.a.createElement(w,{redirectTo:"/",button:l.a.createElement("i",{className:"open-details fa fa-chevron-left","aria-hidden":"true"})}),l.a.createElement("h1",null,"Review History")),l.a.createElement(E.a,{variant:"flush"},l.a.createElement(_e,null),l.a.createElement(_e,null),l.a.createElement(_e,null),l.a.createElement(_e,null)))}}]),t}(n.Component),_e=function(e){function t(){return Object(c.a)(this,t),Object(s.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){return l.a.createElement(E.a.Item,{className:"session"},l.a.createElement("div",{className:"d-flex w-100 justify-content-between"},l.a.createElement("div",null,l.a.createElement("h3",{className:"list-favorites mb-1",style:{borderLeft:"25px solid gray",paddingLeft:"7px",marginTop:"1rem",fontSize:"20px"}},"Building Name"),l.a.createElement("p",{className:"list-book-count",style:{marginBottom:"1.5rem",marginLeft:"32px"}},"Review text........")),l.a.createElement(p.d,{size:"40"})))}}]),t}(n.Component),Xe=Ze;i.a.render(l.a.createElement(l.a.StrictMode,null,l.a.createElement(Xe,null)),document.getElementById("root"))},74:function(e){e.exports={type:"FeatureCollection",features:[{type:"Feature",geometry:{type:"Point",coordinates:[-122.31091976201161,47.65511719894073]},properties:{name:"Architecture Hall",address:"Architecture Hall (ARC)",city:"Seattle",country:"United States",postalCode:"98105",state:"WA",floors:[{level:0,rating:4}],overallRating:4,imgSrc:"temp-imgs/buildings/CHB.png",dist:.1}},{type:"Feature",geometry:{type:"Point",coordinates:[-122.30859952214098,47.6531530133415]},properties:{name:"Bagley Hall",address:"Bagley Hall (Bag)",city:"Seattle",country:"United States",postalCode:"98195",state:"WA",floors:[{level:0,rating:4}],overallRating:4,imgSrc:"temp-imgs/buildings/PAA.png",dist:.1}},{type:"Feature",geometry:{type:"Point",coordinates:[-122.30840106764549,47.65373311108504]},properties:{name:"Chemistry Building",address:"Rainier Vista",city:"Seattle",country:"United States",postalCode:"98195",state:"WA",floors:[{level:0,rating:4}],overallRating:4,imgSrc:"temp-imgs/buildings/HUB.jpg",dist:.3}},{type:"Feature",geometry:{type:"Point",coordinates:[-122.30489035393985,47.658113986558625]},properties:{name:"Communications Building",address:"2023 King Ln NE",city:"Seattle",country:"United States",postalCode:"98105",state:"WA",floors:[{level:0,rating:4}],overallRating:4,imgSrc:"temp-imgs/buildings/MGH.jpg",dist:.3}},{type:"Feature",geometry:{type:"Point",coordinates:[-122.31473901312123,47.6559101529856]},properties:{name:"Samuel E. Kelly Ethnic Cultural Center",address:"3931 Brooklyn Ave NE",city:"Seattle",country:"United States",postalCode:"98105",state:"WA",floors:[{level:0,rating:4},{level:1,rating:3}],overallRating:3.5,imgSrc:"temp-imgs/buildings/HFS-Alder.jpg",dist:.4}},{type:"Feature",geometry:{type:"Point",coordinates:[-122.30763693585985,47.65655202400539]},properties:{name:"Suzzallo and Allen Libraries",address:"4000 15th Ave NE",city:"Seattle",country:"United States",postalCode:"98195",state:"WA",floors:[{level:0,rating:4},{level:1,rating:4.2}],overallRating:4.1,imgSrc:"temp-imgs/buildings/SUZ.jpg",dist:.4}},{type:"Feature",geometry:{type:"Point",coordinates:[-122.30899914257314,47.657637914753685]},properties:{name:"Kane Hall",address:"4069 Spokane Ln",city:"Seattle",country:"United States",postalCode:"98195",state:"WA",floors:[{level:0,rating:4},{level:1,rating:4.4}],overallRating:4.2,imgSrc:"temp-imgs/buildings/HRC.jpg",dist:.5}}]}}},[[188,1,2]]]);
//# sourceMappingURL=main.aacf61cf.chunk.js.map