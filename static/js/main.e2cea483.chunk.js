(this["webpackJsonplanding-page"]=this["webpackJsonplanding-page"]||[]).push([[0],[,,,,,,,,,,,,,function(e,t,s){},,,,,,,,,,function(e,t,s){},function(e,t,s){},function(e,t,s){},,,,,,,,,,function(e,t,s){},function(e,t,s){},,function(e,t,s){},function(e,t,s){},function(e,t,s){},,,,,function(e,t,s){},function(e,t,s){},function(e,t,s){},function(e,t,s){},function(e,t,s){},function(e,t,s){},,,function(e,t,s){},function(e,t,s){},function(e,t,s){"use strict";s.r(t);var i={};s.r(i),s.d(i,"getPopularGames",(function(){return Y}));var n=s(1),a=s.n(n),c=s(15),A=s.n(c),r=(s(35),s(16)),l=s(3),o=s(8),d=s(9),j=s(11),u=s(10),m=(s(36),s(0)),g=function(){return Object(m.jsx)("div",{className:"loader",children:"loading..."})},b=function(e,t){return function(s){Object(j.a)(n,s);var i=Object(u.a)(n);function n(){var e;Object(o.a)(this,n);for(var t=arguments.length,s=new Array(t),a=0;a<t;a++)s[a]=arguments[a];return(e=i.call.apply(i,[this].concat(s))).state={user:null},e}return Object(d.a)(n,[{key:"componentWillMount",value:function(){var e=this;setTimeout((function(){e.setState({user:!1})}),100)}},{key:"render",value:function(){return this.state.user?Object(m.jsx)(e,{user:this.state.user}):Object(m.jsx)(t,{})}}]),n}(a.a.Component)},h=(s(38),function(e){var t=e.text;return"h1"==e.tag?Object(m.jsx)("h1",{children:t}):Object(m.jsx)("h2",{children:t})}),f=(s(39),s(40),function(e){var t=e.preText,s=e.title,i=e.url;return Object(m.jsxs)("p",{className:"url-link",children:[" ",t||null," ",Object(m.jsx)(r.b,{to:"/".concat(i),children:s})]})}),O=function(e){Object(j.a)(s,e);var t=Object(u.a)(s);function s(){var e;Object(o.a)(this,s);for(var i=arguments.length,n=new Array(i),a=0;a<i;a++)n[a]=arguments[a];return(e=t.call.apply(t,[this].concat(n))).state={isResponsiveListDisplayed:!1,links:[{id:1,name:"About",url:"about"},{id:2,name:"Games",url:"games"},{id:3,name:"Sign In",url:"login"},{id:4,name:"Sign Up",url:"register"}]},e.handleClick=function(t){e.state.isResponsiveListDisplayed?(document.getElementById("references").setAttribute("style","display: none"),e.setState({isResponsiveListDisplayed:!1})):(document.getElementById("references").setAttribute("style","display: block;"),e.setState({isResponsiveListDisplayed:!0}))},e}return Object(d.a)(s,[{key:"render",value:function(){return Object(m.jsxs)(a.a.Fragment,{children:[Object(m.jsx)("button",{className:"burger-button",onClick:this.handleClick,children:Object(m.jsx)("i",{className:"fas fa-bars"})}),Object(m.jsx)("nav",{id:"references",className:"nav-references",children:this.state.links.map((function(e){return Object(m.jsx)(f,{title:e.name,url:e.url},e.id)}))})]})}}]),s}(a.a.Component),x="data:image/png;base64,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",p=(s(23),function(){return Object(m.jsxs)("div",{className:"logo-and-name",children:[Object(m.jsx)("img",{src:x}),Object(m.jsx)("h2",{children:"PWAhub"})]})}),v=function(){return Object(m.jsxs)(a.a.Fragment,{children:[Object(m.jsx)("div",{children:Object(m.jsx)(p,{})}),Object(m.jsx)("div",{children:Object(m.jsx)(O,{})})]})},C=s.p+"static/media/Wallpaper.69ef91a0.png",w=(s(13),function(){return Object(m.jsxs)("header",{className:"site-header",children:[Object(m.jsx)("div",{className:"references-var",children:Object(m.jsx)(v,{})}),Object(m.jsxs)("div",{className:"container",children:[Object(m.jsxs)("div",{className:"header-text",children:[Object(m.jsx)(h,{text:"Download web games without needing storage space",tag:"h1"}),Object(m.jsx)("div",{children:Object(m.jsx)("p",{children:"Install web games on your homescreen"})})]}),Object(m.jsx)("div",{children:Object(m.jsx)("div",{className:"videogame-image-header",children:Object(m.jsx)("img",{src:C})})})]})]})}),N=(s(45),function(e){var t=e.title,s=e.imgSrc;return Object(m.jsxs)("div",{className:"single-property flex-item",children:[Object(m.jsx)("div",{children:Object(m.jsx)("img",{src:s})}),Object(m.jsx)("h3",{children:t})]})}),B=(s(24),function(e){var t=e.text,s=e.tag;return Object(m.jsx)("div",{className:"dis-flex",children:Object(m.jsx)("div",{className:"title",children:Object(m.jsx)(h,{text:t,tag:s})})})}),D=(s(46),[{id:1,title:"No Storage",img:s.p+"static/media/files_and_folder.819076f9.svg"},{id:2,title:"Multiplatform",img:s.p+"static/media/network_.45090b93.svg"},{id:4,title:"Develop and Share",img:s.p+"static/media/coding_.d1ed4824.svg"}]),P=function(){return Object(m.jsxs)("section",{className:"site-properties container",children:[Object(m.jsx)(B,{text:"Want to get distracted?",tag:"h2"}),Object(m.jsx)("div",{className:"list-of-properties flex-items clearfix",children:D.map((function(e){var t=e.id,s=e.title,i=e.img;return Object(m.jsx)(N,{title:s,imgSrc:i},t)}))})]})},y=(s(47),function(e){var t=e.title,s=e.Description,i=e.img,n=e.reverse;return Object(m.jsxs)("div",{className:"single-feature",style:n?{flexDirection:"row-reverse"}:null,children:[Object(m.jsx)("div",{className:"feature-img",children:Object(m.jsx)("img",{src:i})}),Object(m.jsxs)("div",{className:"feature-text",children:[Object(m.jsx)("h3",{children:t}),Object(m.jsx)("p",{children:s})]})]})}),Q=function(e){var t=e.color;return Object(m.jsx)("svg",{viewBox:"0 0 1440 120",fill:t,children:Object(m.jsx)("path",{d:"M1440,21.2101911 L1440,120 L0,120 L0,21.2101911 C120,35.0700637 240,42 360,42 C480,42 600,35.0700637 720,21.2101911 C808.32779,12.416393 874.573633,6.87702029 918.737528,4.59207306 C972.491685,1.8109458 1026.24584,0.420382166 1080,0.420382166 C1200,0.420382166 1320,7.35031847 1440,21.2101911 Z"})})},I=(s(48),s.p+"static/media/undraw_app_installation.8854cbe8.svg"),k=s.p+"static/media/undraw_progressive_app.75fcf155.svg",M=s.p+"static/media/undraw_uploading.38d4dd8c.svg",E=function(e){Object(j.a)(s,e);var t=Object(u.a)(s);function s(){var e;Object(o.a)(this,s);for(var i=arguments.length,n=new Array(i),a=0;a<i;a++)n[a]=arguments[a];return(e=t.call.apply(t,[this].concat(n))).state={features:[{id:1,title:"Add games to your homescreen",Description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce porta porta felis, et fermentum ante posuere sit amet. Nam pellentesque aliquam fringilla. Interdum et malesuada fames ac ante ipsum primis in faucibus.",img:I},{id:2,title:"PWA Technologies",Description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce porta porta felis, et fermentum ante posuere sit amet. Nam pellentesque aliquam fringilla. Interdum et malesuada fames ac ante ipsum primis in faucibus.",img:k},{id:3,title:"Upload a game easily",Description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce porta porta felis, et fermentum ante posuere sit amet. Nam pellentesque aliquam fringilla. Interdum et malesuada fames ac ante ipsum primis in faucibus.",img:M}]},e}return Object(d.a)(s,[{key:"render",value:function(){return Object(m.jsxs)("main",{className:"main-features",children:[Object(m.jsx)(Q,{color:"rgb(224, 253, 251)"}),Object(m.jsx)("div",{className:"container",children:Object(m.jsxs)("div",{className:"site-features",children:[Object(m.jsx)(h,{text:"Main Features!",tag:"h2"}),Object(m.jsx)("div",{className:"features-list",children:this.state.features.map((function(e){return Object(m.jsx)(y,{title:e.title,Description:e.Description,img:e.img,reverse:e.id%2==0},e.id)}))})]})})]})}}]),s}(n.Component),Y=function(){return[{id:1,title:"runningFood",img:"images/Wallpaper2.png",developer:"Jorge",comments:100,likes:150},{id:2,title:"runningFood",img:"images/Wallpaper2.png",developer:"Jorge",comments:100,likes:150},{id:3,img:"images/Wallpaper2.png",title:"runningFood",developer:"Jorge",comments:100,likes:150}]},H=(s(49),function(e){var t=e.title,s=e.img,i=e.developer,n=e.comments,a=e.likes;return Object(m.jsxs)("div",{className:"single-game",children:[Object(m.jsx)("div",{className:"game-mini",children:Object(m.jsx)("a",{href:"#",children:Object(m.jsx)("img",{src:s})})}),Object(m.jsxs)("div",{className:"game-info",children:[Object(m.jsx)("a",{href:"#",children:Object(m.jsx)("h3",{children:t})}),Object(m.jsxs)("p",{className:"gameLayout-username",children:[Object(m.jsx)("i",{className:"fas fa-user user-color"}),": ",i," "]}),Object(m.jsxs)("div",{className:"mini-likes-comments",children:[Object(m.jsxs)("p",{children:[n," ",Object(m.jsx)("i",{className:"fas fa-comment comment-color"})," "]}),Object(m.jsxs)("p",{children:[a," ",Object(m.jsx)("i",{className:" fas fa-heart heart-color"})]})]})]})]})}),R=s(27),U=(s(50),s(51),s(52),function(e){Object(j.a)(s,e);var t=Object(u.a)(s);function s(){var e;Object(o.a)(this,s);for(var i=arguments.length,n=new Array(i),a=0;a<i;a++)n[a]=arguments[a];return(e=t.call.apply(t,[this].concat(n))).state={loading:!0,error:!1,games:[],Glide:null},e.MountGlide=function(){return new R.a(".glide",{startAt:0,perView:5,breakpoints:{800:{perView:3},550:{perView:1}}}).mount()},e}return Object(d.a)(s,[{key:"componentDidMount",value:function(){var e=this;setTimeout((function(){e.setState({games:e.props.data(i),loading:!1}),e.setState({Glide:e.MountGlide()})}),200)}},{key:"render",value:function(){return this.state.loading?Object(m.jsx)(g,{}):Object(m.jsxs)("div",{className:"site-games-list",children:[Object(m.jsx)(h,{text:this.props.title,tag:"h2"}),Object(m.jsx)("div",{className:"list-background",style:{backgroundColor:this.props.backgroundColor},children:Object(m.jsxs)("div",{className:"glide container",children:[Object(m.jsx)("div",{className:"glide__track","data-glide-el":"track",children:Object(m.jsx)("ul",{className:"glide__slides",children:this.state.games.map((function(e){return Object(m.jsx)("li",{children:Object(m.jsx)("div",{className:"glide__slide",children:Object(m.jsx)(H,{title:e.title,img:e.img,developer:e.developer,comments:e.comments,likes:e.likes})})},e.id)}))})}),Object(m.jsxs)("div",{className:"glide__arrows arrows","data-glide-el":"controls",children:[Object(m.jsx)("button",{className:"glide__arrow glide__arrow--left","data-glide-dir":"<",children:Object(m.jsx)("i",{className:"fas fa-arrow-left"})}),Object(m.jsx)("button",{className:"glide__arrow glide__arrow--right","data-glide-dir":">",children:Object(m.jsx)("i",{className:"fas fa-arrow-right"})})]}),Object(m.jsx)("div",{className:"glide__bullets","data-glide-el":"controls[nav]",children:this.state.games.map((function(e,t){return Object(m.jsx)("button",{className:"glide__bullet","data-glide-dir":"=".concat(t)},t)}))})]})})]})}}]),s}(n.Component)),F=(s(53),function(){return Object(m.jsxs)("footer",{children:[Object(m.jsx)(Q,{color:"rgba(254,108,248,1)"}),Object(m.jsx)("div",{className:"site-footer",children:Object(m.jsxs)("div",{className:"container",children:[Object(m.jsx)("div",{className:"logo-name",children:Object(m.jsx)(p,{})}),Object(m.jsxs)("div",{className:"links-info",children:[Object(m.jsx)("div",{className:"footer-links",children:Object(m.jsxs)("nav",{children:[Object(m.jsx)(f,{title:"about",url:"#"}),Object(m.jsx)(f,{title:"Contact",url:"#"}),Object(m.jsx)(f,{title:"terms",url:"#"})]})}),Object(m.jsxs)("div",{className:"footer-info",children:[Object(m.jsxs)("p",{children:["Hosted on AWS ",Object(m.jsx)("i",{className:"fab fa-aws"})]}),Object(m.jsx)(f,{preText:"a design by ",title:"Jorge Mendez",url:"mailTo:jorgelmh_01@hotmail.com"})]})]}),Object(m.jsx)("p",{id:"copyright-zone",children:" PWAhub 2020 \xa9 "})]})})]})}),z=function(){return Object(m.jsxs)(a.a.Fragment,{children:[Object(m.jsx)(w,{}),Object(m.jsx)(P,{}),Object(m.jsx)(E,{}),Object(m.jsx)(U,{title:"Main Games",backgroundColor:"#f2f2f2",data:function(e){return e.getPopularGames()}}),Object(m.jsx)(F,{})]})},W=function(e){Object(j.a)(s,e);var t=Object(u.a)(s);function s(){return Object(o.a)(this,s),t.apply(this,arguments)}return Object(d.a)(s,[{key:"render",value:function(){return Object(m.jsx)("div",{className:"container",children:Object(m.jsx)("div",{className:"row justify-content-center",children:Object(m.jsx)("div",{className:"col-md-8",children:Object(m.jsxs)("div",{className:"card",children:[Object(m.jsx)("div",{className:"card-header",children:"Example Component"}),Object(m.jsx)("div",{className:"card-body",children:"I'm an example component!"})]})})})})}}]),s}(n.Component);document.getElementById("example")&&A.a.render(Object(m.jsx)(W,{}),document.getElementById("example"));var S=s(20),G=function(e){var t=e.name,s=e.type,i=e.onChange,n=e.value;return Object(m.jsx)("div",{className:"campo",children:Object(m.jsx)("input",{type:s,onChange:function(e){return i(e.target.value)},name:t,placeholder:t,value:n,required:!0})})},J=(s(25),s(54),function(e){var t=e.onSubmit,s=e.text;return Object(m.jsx)("button",{className:"form-button",onSubmit:t,children:s})}),L=function(e){var t=e.onChangeName,s=e.onChangePassword,i=e.name,n=e.password;return Object(m.jsx)("div",{className:"login-form",children:Object(m.jsxs)("form",{children:[Object(m.jsx)(G,{type:"text",name:"name",onChange:t,value:i},"2"),Object(m.jsx)(G,{type:"password",name:"password",onChange:s,value:n},"1"),Object(m.jsx)(J,{text:"Sign in",onSubmit:"not-yet"})]})})},K=s(28),T=function(){var e=Object(n.useState)(""),t=Object(S.a)(e,2),s=t[0],i=t[1],a=Object(n.useState)(""),c=Object(S.a)(a,2),A=c[0],r=c[1];return Object(m.jsxs)(n.Fragment,{children:[Object(m.jsx)(K.a,{bodyAttributes:{style:"background-image: url(images/19742.jpg);"}}),Object(m.jsxs)("div",{className:"site-login",children:[Object(m.jsxs)("div",{className:"login-letter",children:[Object(m.jsx)("img",{src:x}),Object(m.jsx)("h1",{children:"Sign In"})]}),Object(m.jsx)(L,{onChangeName:i,onChangePassword:r,name:s,password:A})]})]})},X=function(){return Object(m.jsx)(r.a,{children:Object(m.jsxs)(l.c,{children:[Object(m.jsx)(l.a,{exact:!0,path:"/",component:b(W,z)}),Object(m.jsx)(l.a,{exact:!0,path:"/login",component:b(W,T)})]})})},q=function(e){e&&e instanceof Function&&s.e(3).then(s.bind(null,56)).then((function(t){var s=t.getCLS,i=t.getFID,n=t.getFCP,a=t.getLCP,c=t.getTTFB;s(e),i(e),n(e),a(e),c(e)}))};A.a.render(Object(m.jsx)(a.a.StrictMode,{children:Object(m.jsx)(X,{})}),document.getElementById("root")),q()}],[[55,1,2]]]);
//# sourceMappingURL=main.e2cea483.chunk.js.map