(this["webpackJsonpfasten-web"]=this["webpackJsonpfasten-web"]||[]).push([[0],{82:function(e,t,n){},83:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n(1),i=n.n(r),c=n(47),s=n.n(c),o=n(6),l=n(10),d=n(7),u=n(9),p=n(5),b=n(4),h=b.a.div({minHeight:"100%",width:"100%",display:"flex",flexFlow:"column",margin:0,padding:0}),g=n(26),j=n(16),f=n.p+"static/media/fasten_logo.621b8d55.svg",m={fontSize:{xs:8,sm:10,md:14,lg:18,xl:22,xxl:30},fontWeight:{light:300,regular:400,boldLight:600,bold:700},padding:{none:0,tiny:4,sm:8,md:16,lg:24,xl:36,xxl:48},margin:{none:0,tiny:4,sm:8,md:16,lg:24,xl:36,xxl:48},breakpoints:{sm:600,md:960,lg:1280,xl:1920}},x=Object(j.a)(Object(j.a)({},m),{},{mediaQueries:Object.keys(m.breakpoints).reduce((function(e,t){return e[t]="@media (min-width: ".concat(m.breakpoints[t],"px)"),e}),{})}),O={transparent:"transparent",white:"#fff",primary:"#00A6D6",black:"#2f2e41",grey:"#9d9d9d",silver:"#a5b1c2",platinum:"#e0e1dd",platinumWhite:"#f8f9f9",highBlue:"#45aaf2",boyzoneBlue:"#2d98da",ntscBlue:"#4b7bec",royalBlue:"#3867d6",fusionRed:"#fc5c65",desireRed:"#eb3b5a",hibiscusOrange:"#fd9644",bronzeOrange:"#fa8231",flirtatiousYellow:"#fed330",taxiYellow:"#f7b731",reptileGreen:"#26de81",algalGreen:"#20bf6b",overlay:"rgba(80, 80, 80, 0.7)",transparentGrey:"#9d9d9daa"},v=Object(j.a)(Object(j.a)({},O),{},{informative:O.boyzoneBlue,positive:O.algalGreen,negative:O.desireRed,warning:O.taxiYellow}),k=Object(b.a)("nav")({display:"flex",justifyContent:"space-between",width:"100%",minHeight:"70px",zIndex:10,backgroundColor:v.primary,color:v.white,padding:"15px 0"}),y=b.a.div({marginLeft:x.margin.lg,marginRight:x.margin.md,width:"15%"}),w=b.a.div({display:"flex",alignItems:"center",alignContent:"flex-start"}),S=b.a.div({display:"flex",alignItems:"center",alignContent:"flex-end"}),_=b.a.div({display:"flex",alignItems:"flex-start",height:"100%"}),C=b.a.a({fontSize:x.fontSize.xl,paddingLeft:x.padding.none,paddingRight:x.padding.xl,paddingTop:x.padding.tiny,paddingBottom:x.padding.tiny,color:v.white,transition:"0.4s ease",alignSelf:"center",":hover":{color:v.platinum,transform:"scale(1.1)"}}),L=n(11),R=n(27),I={api:"https://api.fasten-project.eu",apiSuffix:"api",git:"https://github.com/fasten-project/",webpage:"http://fasten-project.eu/"},z=function(e){return Object(a.jsx)(_,{children:Object(a.jsx)(C,Object(j.a)({},e))})},D=function(e){Object(d.a)(n,e);var t=Object(u.a)(n);function n(){return Object(o.a)(this,n),t.apply(this,arguments)}return Object(l.a)(n,[{key:"render",value:function(){return Object(a.jsxs)(k,{children:[Object(a.jsx)(w,{children:Object(a.jsx)(L.b,{to:"/home",children:Object(a.jsx)(y,{children:Object(a.jsx)("img",{width:"100%",src:f,alt:"FASTEN, Developing an intelligent software package management systems."})})})}),Object(a.jsxs)(S,{children:[Object(a.jsx)(z,{href:I.webpage,target:"_blank",children:Object(a.jsx)(R.b,{})}),Object(a.jsx)(z,{href:I.git,target:"_blank",children:Object(a.jsx)(R.a,{})})]})]})}}]),n}(r.Component),q=Object(p.g)(D),A=b.a.div({marginTop:"10%",width:"100%"}),E=b.a.p({width:"45%",margin:"auto",fontSize:x.fontSize.xl,textAlign:"center"}),P=b.a.p({textAlign:"center","& a":{color:v.primary,textDecoration:"none",":hover":{filter:"brightness(85%)"}}}),B=b.a.div({position:"relative",width:"60%",zIndex:1,margin:"50px auto",marginBottom:x.margin.sm,"& input":{boxSizing:"border-box",outline:"none",border:"none",fontSize:x.fontSize.xxl,color:"#666666",display:"block",width:"100%",backgroundColor:"#e6e6e6",height:70,borderRadius:35,padding:"0 30px 0 100px",":focus + span":{color:v.primary,paddingLeft:x.padding.lg}},"& span":{fontSize:x.fontSize.xxl,display:"flex",alignItems:"center",position:"absolute",borderRadius:25,bottom:0,left:0,width:"100%",height:"100%",paddingLeft:x.padding.lg+10,pointerEvents:"none",color:"#666666",transition:"all 0.4s"}}),M=function(e){Object(d.a)(n,e);var t=Object(u.a)(n);function n(e,a){var r;return Object(o.a)(this,n),(r=t.call(this,e,a)).state={searchQuery:""},r.handleSearchQueryChange=r.handleSearchQueryChange.bind(Object(g.a)(r)),r.handleSearch=r.handleSearch.bind(Object(g.a)(r)),r}return Object(l.a)(n,[{key:"handleSearchQueryChange",value:function(e){this.setState({searchQuery:e.target.value})}},{key:"handleSearch",value:function(e){"Enter"==e.key&&this.props.history.push("/packages/".concat(this.state.searchQuery))}},{key:"render",value:function(){return Object(a.jsxs)(a.Fragment,{children:[Object(a.jsx)(q,{}),Object(a.jsxs)(A,{children:[Object(a.jsx)(E,{children:"Learn about robustness and security of the packages in your software ecosystem."}),Object(a.jsxs)(B,{children:[Object(a.jsx)("input",{type:"text",name:"search",placeholder:"Search packages (ex. junit:junit)",value:this.state.searchQuery,onChange:this.handleSearchQueryChange,onKeyDown:this.handleSearch}),Object(a.jsx)("span",{children:Object(a.jsx)(R.c,{})})]}),Object(a.jsxs)(P,{children:["Learn more about"," ",Object(a.jsx)("a",{href:"https://www.fasten-project.eu/view/Main/Overview",children:"concept"})," ","and"," ",Object(a.jsx)("a",{href:"https://www.fasten-project.eu/view/Main/Use-cases",children:"use cases"}),"."]})]})]})}}]),n}(r.Component),U=Object(p.g)(M),V=n(18),F=n.n(V),T=n(23),Q=b.a.div({width:"50%",margin:"5% auto"}),G=b.a.h1({margin:0,marginBottom:15}),W=(b.a.a({marginLeft:x.margin.sm,fontSize:x.fontSize.xl,color:v.primary,textDecoration:"none",":hover":{filter:"brightness(80%)"}}),b.a.h3({display:"inline-block",color:v.grey,margin:0})),J=n(3),Y=J.e().shape({id:J.d().integer().positive().required(),package_name:J.f().required(),forge:J.f().required(),project_name:J.f().required(),repository:J.f().required(),created_at:J.c().max(new Date(Date.now())).nullable(),version:J.f()}).required(),H={id:0,package_name:"",forge:"mvn",project_name:"",repository:"",created_at:null};function N(e){return Y.isValidSync(e)}var K=n(31),$=n(51),X=n.n($),Z=n(52),ee=n(85),te="An unknown error has occurred! Please try again later!",ne=function(e){Object(d.a)(n,e);var t=Object(u.a)(n);function n(e,a){var r;return Object(o.a)(this,n),(r=t.call(this,e)).name="APIResponseError",r.uid=Object(ee.a)(),r.debug=void 0,r.debug=a,r}return n}(Object(Z.a)(Error)),ae=function(e){if(e.response){if(e.response.status<500){var t;try{t=Object.values(e.response.data)[0]}catch(n){t=te}return new ne(t,"Bad Response: "+e.message)}return new ne(te,"Server has failed: "+e.message)}return new ne("Please check your internet connection and try again!","Bad Response: "+e.message)};function re(e,t,n,a,r,i){return ie.apply(this,arguments)}function ie(){return(ie=Object(T.a)(F.a.mark((function e(t,n,a,r,i,c){var s;return F.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,X()(new URL(n,a).href,Object(j.a)({method:t,data:c},i));case 3:if(s=e.sent,!r(s.data)){e.next=8;break}return e.abrupt("return",s.data);case 8:throw new ne("Received malformed API data!","Data received: ".concat(JSON.stringify(s.data)));case 9:e.next=19;break;case 11:if(e.prev=11,e.t0=e.catch(0),console.log(e.t0.toString()),!(e.t0 instanceof ne)){e.next=18;break}throw e.t0;case 18:throw ae(e.t0);case 19:case"end":return e.stop()}}),e,null,[[0,11]])})))).apply(this,arguments)}var ce=J.e().shape({id:J.d().integer().positive().required(),package_version_id:J.d().integer().positive().required(),namespace:J.f().required(),created_at:J.c().max(new Date(Date.now())).nullable(),metadata:J.e().nullable()}).required(),se=Object(J.a)().of(ce);function oe(e){return se.isValidSync(e)}var le=J.e().shape({id:J.d().integer().positive().required(),module_id:J.d().integer().positive().required(),fasten_uri:J.f().required(),is_internal_call:J.b().required(),line_start:J.d().integer().required(),line_end:J.d().integer().required(),created_at:J.c().max(new Date(Date.now())).nullable(),metadata:J.e().nullable()}).required(),de=Object(J.a)().of(le),ue={id:0,module_id:0,fasten_uri:"",is_internal_call:!0,line_start:0,line_end:0,created_at:null,metadata:null};function pe(e){return de.isValidSync(e)}var be=I.apiSuffix+"/mvn/packages/{0}",he=I.apiSuffix+"/mvn/packages/{0}/{1}/modules",ge=I.apiSuffix+"/mvn/packages/{0}/{1}/modules/callables";var je=b.a.div({marginTop:25}),fe=b.a.button((function(e){return{padding:"5px 10px",border:"none",outline:"none",transition:"ease 0.15s",backgroundColor:e.selected?v.primary:"revert",color:e.selected?v.white:"revert",":hover":{backgroundColor:v.primary,transform:"scale(1.05)",color:v.white,cursor:"pointer"}}})),me=function(e){Object(d.a)(n,e);var t=Object(u.a)(n);function n(e,r){var i;return Object(o.a)(this,n),(i=t.call(this,e,r)).TabMenuItem=function(e){return Object(a.jsx)(fe,{selected:i.state.tabIndex==e.index,onClick:function(){return i.setState({tabIndex:e.index})},children:e.label})},i.state={tabIndex:0},i}return Object(l.a)(n,[{key:"render",value:function(){var e=this,t=this.props.tabs.length>this.state.tabIndex?this.props.tabs[this.state.tabIndex].body:null;return Object(a.jsxs)(a.Fragment,{children:[Object(a.jsx)(je,{children:this.props.tabs.map((function(t,n){return Object(a.jsx)(e.TabMenuItem,{index:n,label:t.label},"tab_".concat(n))}))}),t&&Object(a.jsx)(t,{})]})}}]),n}(r.Component),xe=Object(p.g)(me),Oe=b.a.div({margin:"8% auto"}),ve=b.a.p({fontSize:x.fontSize.xl,marginTop:x.margin.lg}),ke=function(e){Object(d.a)(n,e);var t=Object(u.a)(n);function n(e,r){var i;return Object(o.a)(this,n),(i=t.call(this,e,r)).renderModuleRow=function(e){var t=i.props,n=t.pkg,r=t.pkgVersion;return Object(a.jsx)(ve,{children:Object(a.jsx)(L.b,{to:"/packages/".concat(n,"/").concat(r,"/").concat(encodeURIComponent(e.namespace||"...")),children:e.namespace})},"module_".concat(e.id))},i.renderCallableRow=function(e){var t=i.props,n=t.pkg,r=t.pkgVersion,c=t.namespace,s=encodeURIComponent(c||"..."),o=encodeURIComponent(e.fasten_uri);return Object(a.jsx)(ve,{children:Object(a.jsx)(L.b,{to:"/packages/".concat(n,"/").concat(r,"/").concat(s,"/").concat(o),children:e.fasten_uri})},"callable_".concat(e.id))},i.state={isLoading:!0,data:void 0},i}return Object(l.a)(n,[{key:"componentDidMount",value:function(){this.retrieveEntities()}},{key:"retrieveEntities",value:function(){var e=Object(T.a)(F.a.mark((function e(){var t;return F.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return this.setState({isLoading:!0}),e.prev=1,e.t0=this.props.kind,e.next=5,this.props.fetchEntities();case 5:e.t1=e.sent,t={kind:e.t0,entities:e.t1},this.setState({isLoading:!1,data:t}),e.next=13;break;case 10:e.prev=10,e.t2=e.catch(1),this.setState({isLoading:!1});case 13:case"end":return e.stop()}}),e,this,[[1,10]])})));return function(){return e.apply(this,arguments)}}()},{key:"getTitle",value:function(){switch(this.props.kind){case"MODULES":return"Modules";case"CALLABLES":return"Callables";default:return"Unknown"}}},{key:"renderRows",value:function(){var e,t,n,r;switch(null===(e=this.state.data)||void 0===e?void 0:e.kind){case"MODULES":return null===(t=this.state.data)||void 0===t?void 0:t.entities.map(this.renderModuleRow);case"CALLABLES":return null===(n=this.state.data)||void 0===n?void 0:n.entities.map(this.renderCallableRow);default:return Object(a.jsxs)("h1",{children:["Unknown Type ",null===(r=this.state.data)||void 0===r?void 0:r.kind]})}}},{key:"render",value:function(){return this.state.isLoading?Object(a.jsx)(a.Fragment,{}):Object(a.jsxs)(Oe,{children:[Object(a.jsx)("h3",{children:this.getTitle()}),Object(a.jsx)("hr",{}),this.renderRows()]})}}]),n}(r.Component),ye=Object(p.g)(ke),we=function(e){Object(d.a)(n,e);var t=Object(u.a)(n);function n(){return Object(o.a)(this,n),t.apply(this,arguments)}return Object(l.a)(n,[{key:"render",value:function(){var e=this,t=[{label:"Modules",body:function(){return Object(a.jsx)(ye,{kind:"MODULES",pkg:e.props.pkg,pkgVersion:e.props.pkgVer,fetchEntities:function(){return t=e.props.pkg,n=e.props.pkgVer,re("get",K.String.Format(he,t,n),I.api,oe,{});var t,n}})}}];return Object(a.jsx)(xe,{tabs:t})}}]),n}(r.Component),Se=Object(p.g)(we),_e=function(e){Object(d.a)(n,e);var t=Object(u.a)(n);function n(){return Object(o.a)(this,n),t.apply(this,arguments)}return Object(l.a)(n,[{key:"render",value:function(){var e=this.props,t=e.pkg,n=e.pkgVer,r=e.namespace,i=[{label:"Callables",body:function(){return Object(a.jsx)(ye,{kind:"CALLABLES",pkg:t,pkgVersion:n,namespace:r,fetchEntities:function(){return function(e,t,n){return re("post",K.String.Format(ge,e,t),I.api,pe,{headers:{"Content-Type":"text/plain"}},n)}(t,n,r)}})}}];return Object(a.jsx)(xe,{tabs:i})}}]),n}(r.Component),Ce=Object(p.g)(_e),Le=function(e){Object(d.a)(n,e);var t=Object(u.a)(n);function n(){return Object(o.a)(this,n),t.apply(this,arguments)}return Object(l.a)(n,[{key:"render",value:function(){return Object(a.jsx)("h1",{children:"hello"})}}]),n}(r.Component),Re=Object(p.g)(Le),Ie=function(e){Object(d.a)(n,e);var t=Object(u.a)(n);function n(e,a){var r;return Object(o.a)(this,n),(r=t.call(this,e,a)).state={isLoading:!0,pkg:H},r}return Object(l.a)(n,[{key:"componentDidMount",value:function(){this.retrievePackage()}},{key:"retrievePackage",value:function(){var e=Object(T.a)(F.a.mark((function e(){var t,n;return F.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return this.setState({isLoading:!0}),t=this.props.match.params.pkgParam,e.prev=2,e.next=5,a=t,re("get",K.String.Format(be,a),I.api,N,{});case 5:n=e.sent,this.setState({isLoading:!1,pkg:n}),e.next=13;break;case 9:e.prev=9,e.t0=e.catch(2),console.log(e.t0.toString()),this.setState({isLoading:!1});case 13:case"end":return e.stop()}var a}),e,this,[[2,9]])})));return function(){return e.apply(this,arguments)}}()},{key:"renderAbstractionContent",value:function(){var e=this.props.match.params,t=e.verParam,n=e.moduleParam,r=e.callableParam,i=n?decodeURIComponent(n):null;return r?Object(a.jsx)(Re,{callable:ue}):i?Object(a.jsx)(Ce,{pkg:this.state.pkg.package_name,pkgVer:t,namespace:i}):Object(a.jsx)(Se,{pkg:this.state.pkg.package_name,pkgVer:t})}},{key:"render",value:function(){var e=this.state.pkg,t=this.props.match.params,n=t.verParam,r=t.moduleParam,i=t.callableParam,c=r?decodeURIComponent(r):null,s=i?decodeURIComponent(i):null;return c&&"/"==c.charAt(0)&&(c=c.substring(1)),s&&"/"==s.charAt(0)&&(s=s.substring(1)),this.state.isLoading?Object(a.jsx)("h1",{children:"Loading..."}):0==e.id?Object(a.jsx)(p.a,{to:"/"}):void 0==n?Object(a.jsx)(p.a,{to:"/packages/".concat(e.package_name,"/").concat(e.version)}):Object(a.jsxs)(a.Fragment,{children:[Object(a.jsx)(q,{}),Object(a.jsxs)(Q,{children:[Object(a.jsxs)(G,{children:[Object(a.jsxs)(L.b,{to:"/packages/".concat(e.package_name,"/").concat(n),children:[e.project_name," ",n]}),c&&Object(a.jsxs)(a.Fragment,{children:[Object(a.jsx)("span",{children:" / "}),Object(a.jsx)(L.b,{to:"/packages/".concat(e.package_name,"/").concat(n,"/").concat(r),children:c})]}),s&&Object(a.jsxs)(a.Fragment,{children:[Object(a.jsx)("span",{children:" / "}),Object(a.jsx)(L.b,{to:"/packages/".concat(e.package_name,"/").concat(n,"/").concat(r,"/").concat(i),children:s})]})]}),e.created_at&&Object(a.jsxs)(W,{children:["Created ",e.created_at.toLocaleDateString()]}),this.renderAbstractionContent()]})]})}}]),n}(r.Component),ze=Object(p.g)(Ie),De=function(e){Object(d.a)(n,e);var t=Object(u.a)(n);function n(){return Object(o.a)(this,n),t.apply(this,arguments)}return Object(l.a)(n,[{key:"render",value:function(){var e=this.props.location;return Object(a.jsx)(h,{children:Object(a.jsxs)(p.d,{children:[Object(a.jsx)(p.b,{exact:!0,path:"/",render:function(){return Object(a.jsx)(p.a,{to:"/home"})}}),Object(a.jsx)(p.b,{exact:!0,path:"/home",component:U},e.key),Object(a.jsx)(p.b,{exact:!0,path:"/packages/:pkgParam/:verParam?/:moduleParam?/:callableParam?",component:ze},e.key)]})})}}]),n}(r.Component),qe=Object(p.g)(De);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));n(82);s.a.render(Object(a.jsx)(i.a.StrictMode,{children:Object(a.jsx)(L.a,{basename:"/",children:Object(a.jsx)(qe,{})})}),document.getElementById("app")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[83,1,2]]]);
//# sourceMappingURL=main.c33ae381.chunk.js.map