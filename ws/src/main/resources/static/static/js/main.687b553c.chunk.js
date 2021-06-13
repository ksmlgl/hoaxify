(this["webpackJsonphoaxify-frontend"]=this["webpackJsonphoaxify-frontend"]||[]).push([[0],{54:function(e,t,a){},55:function(e,t,a){},90:function(e,t,a){},91:function(e,t,a){"use strict";a.r(t);var n=a(1),c=a(23),s=a.n(c),r=(a(54),a(55),a(3)),i=a(7),o=a.n(i),l=function(e,t,a){var c=Object(n.useState)(!1),s=Object(r.a)(c,2),i=s[0],l=s[1];return Object(n.useEffect)((function(){var n,c,s=function(n,c,s){n===e&&(a&&c===t||!a&&c.startsWith(t))&&l(s)};return n=o.a.interceptors.request.use((function(e){var t=e.url,a=e.method;return s(a,t,!0),e})),c=o.a.interceptors.response.use((function(e){var t=e.config,a=t.url,n=t.method;return s(n,a,!1),e}),(function(e){var t=e.config,a=t.url,n=t.method;throw s(n,a,!1),e})),function(){o.a.interceptors.request.eject(n),o.a.interceptors.request.eject(c)}}),[t,e,a]),i},u=a(2),d=a.n(u),j=a(6),b=a(20),p=a(4),m=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:0,t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:3;return o.a.get("/api/1.0/users?page=".concat(e,"&size=").concat(t))},h=function(e){var t=e.isLoggedIn,a=e.token;if(t){var n="Bearer ".concat(a);o.a.defaults.headers.Authorization=n}else delete o.a.defaults.headers.Authorization},O=function(e){return o.a.get("/api/1.0/users/".concat(e))},f=function(e,t){return o.a.put("/api/1.0/users/".concat(e),t)},x=function(e){return o.a.post("/api/1.0/hoaxes",e)},v=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0,a=e?"/api/1.0/users/".concat(e,"/hoaxes?page="):"/api/1.0/hoaxes?page=";return o.a.get(a+t)},g=function(e,t){var a=t?"/api/1.0/users/".concat(t,"/hoaxes/").concat(e):"/api/1.0/hoaxes/"+e;return o.a.get(a)},N=function(e,t){var a=t?"/api/1.0/users/".concat(t,"/hoaxes/").concat(e,"?count=true"):"/api/1.0/hoaxes/".concat(e,"?count=true");return o.a.get(a)},y=function(e,t){var a=t?"/api/1.0/users/".concat(t,"/hoaxes/").concat(e,"?direction=after"):"/api/1.0/hoaxes/".concat(e,"?direction=after");return o.a.get(a)},w=function(e){return o.a.post("/api/1.0/hoax-attachments",e)},k=function(e){return o.a.delete("/api/1.0/hoaxes/".concat(e))},C=function(e){return o.a.delete("/api/1.0/users/".concat(e))},S=a(0),L=function(e){var t=e.label,a=e.error,n=e.name,c=e.onChange,s=e.type,r=e.defaultValue,i="form-control";return"file"===s&&(i+="-file"),void 0!==a&&(i+=" is-invalid"),Object(S.jsxs)("div",{className:"form-group",children:[Object(S.jsx)("label",{children:t}),Object(S.jsx)("input",{className:i,name:n,onChange:c,type:s,defaultValue:r}),Object(S.jsx)("div",{className:"invalid-feedback",children:a})]})},E=a(92),A=function(e){var t=e.onClick,a=e.pendingApiCall,n=e.disabled,c=e.text,s=e.className;return Object(S.jsxs)("button",{className:s||"btn btn-primary",onClick:t,disabled:n,children:[a&&Object(S.jsx)("span",{className:"spinner-border spinner-border-sm"}),c]})},D=a(9),U="logout-success",P="login-success",F="update-success",I=function(){return function(){var e=Object(j.a)(d.a.mark((function e(t){return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,o.a.post("/api/1.0/logout");case 3:e.next=7;break;case 5:e.prev=5,e.t0=e.catch(0);case 7:t({type:U});case 8:case"end":return e.stop()}}),e,null,[[0,5]])})));return function(t){return e.apply(this,arguments)}}()},z=function(e){return{type:P,payload:e}},H=function(e){var t=e.displayName,a=e.image;return{type:F,payload:{displayName:t,image:a}}},T=function(e){return function(){var t=Object(j.a)(d.a.mark((function t(a){var n,c;return d.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,s=e,o.a.post("/api/1.0/auth",s);case 2:return n=t.sent,c=Object(p.a)(Object(p.a)({},n.data.user),{},{password:e.password,token:n.data.token}),a(z(c)),t.abrupt("return",n);case 6:case"end":return t.stop()}var s}),t)})));return function(e){return t.apply(this,arguments)}}()},R=function(e){return function(){var t=Object(j.a)(d.a.mark((function t(a){var n;return d.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,c=e,o.a.post("/api/1.0/users",c);case 2:return n=t.sent,t.next=5,a(T(e));case 5:return t.abrupt("return",n);case 6:case"end":return t.stop()}var c}),t)})));return function(e){return t.apply(this,arguments)}}()},M=function(e){var t,a=Object(n.useState)({username:null,displayName:null,password:null,passwordRepeat:null,errors:{}}),c=Object(r.a)(a,2),s=c[0],i=c[1],o=Object(D.b)(),u=Object(n.useState)({}),m=Object(r.a)(u,2),h=m[0],O=m[1],f=function(e){var t=e.target,a=t.name,n=t.value;Object(p.a)({},h)[a]=void 0,O((function(e){return Object(p.a)(Object(p.a)({},e),{},Object(b.a)({},a,void 0))})),i((function(e){return Object(p.a)(Object(p.a)({},e),{},Object(b.a)({},a,n))}))},x=function(){var t=Object(j.a)(d.a.mark((function t(a){var n,c,r,i,l,u;return d.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return a.preventDefault(),n=e.history,c=n.push,r=s.username,i=s.displayName,l=s.password,u={username:r,displayName:i,password:l},t.prev=5,t.next=8,o(R(u));case 8:c("/"),t.next=14;break;case 11:t.prev=11,t.t0=t.catch(5),t.t0.response.data.validationErrors&&O(t.t0.response.data.validationErrors);case 14:case"end":return t.stop()}}),t,null,[[5,11]])})));return function(e){return t.apply(this,arguments)}}(),v=Object(E.a)().t,g=h.username,N=h.displayName,y=h.password,w=l("post","/api/1.0/users"),k=l("post","/api/1.0/login"),C=w||k;return s.password!==s.passwordRepeat&&(t=v("Password mismatch")),Object(S.jsx)("div",{className:"container",children:Object(S.jsxs)("form",{children:[Object(S.jsx)("h1",{className:"text-center",children:v("Sign Up")}),Object(S.jsx)(L,{name:"username",label:v("User Name"),error:g,onChange:f}),Object(S.jsx)(L,{name:"displayName",label:v("Display Name"),error:N,onChange:f}),Object(S.jsx)(L,{name:"password",label:v("Password"),error:y,onChange:f,type:"password"}),Object(S.jsx)(L,{name:"passwordRepeat",label:v("Password Repeat"),error:t,onChange:f,type:"password"}),Object(S.jsx)("div",{className:"text-center",children:Object(S.jsx)(A,{className:"btn btn-primary",onClick:x,disabled:C||void 0!==t,text:v("Sign Up"),pendingApiCall:C})})]})})},_=function(e){var t=Object(n.useState)(),a=Object(r.a)(t,2),c=a[0],s=a[1],i=Object(n.useState)(),o=Object(r.a)(i,2),u=o[0],b=o[1],p=Object(n.useState)(),m=Object(r.a)(p,2),h=m[0],O=m[1],f=Object(D.b)();Object(n.useEffect)((function(){O(void 0)}),[c,u]);var x=function(){var t=Object(j.a)(d.a.mark((function t(a){var n,s,r;return d.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return a.preventDefault(),n={username:c,password:u},s=e.history,r=s.push,O(void 0),t.prev=5,t.next=8,f(T(n));case 8:r("/"),t.next=14;break;case 11:t.prev=11,t.t0=t.catch(5),O(t.t0.response.data.message);case 14:case"end":return t.stop()}}),t,null,[[5,11]])})));return function(e){return t.apply(this,arguments)}}(),v=l("post","/api/1.0/auth"),g=Object(E.a)().t,N=c&&u&&!h;return Object(S.jsx)("div",{className:"container",children:Object(S.jsxs)("form",{children:[Object(S.jsx)("h1",{className:"text-center",children:g("Login")}),Object(S.jsx)(L,{label:g("User Name"),onChange:function(e){s(e.target.value)}}),Object(S.jsx)(L,{label:g("Password"),type:"password",onChange:function(e){b(e.target.value)}}),h&&Object(S.jsx)("div",{className:"alert alert-danger",children:h}),Object(S.jsx)("div",{className:"text-center",children:Object(S.jsx)(A,{onClick:x,disabled:!N||v,pendingApiCall:v,text:g("Login")})})]})})},B=function(e){var t=Object(E.a)().i18n,a=function(e){t.changeLanguage(e),function(e){o.a.defaults.headers["accept-language"]=e}(e)};return Object(S.jsxs)("div",{className:"container",children:[Object(S.jsx)("span",{className:"pl-2",children:Object(S.jsx)("img",{src:"https://flagcdn.com/16x12/tr.png",alt:"Turkish Flag",onClick:function(){return a("tr")},style:{cursor:"pointer"}})}),Object(S.jsx)("span",{className:"pl-2",children:Object(S.jsx)("img",{src:"https://flagcdn.com/16x12/us.png",alt:"USA Flag",onClick:function(){return a("en")},style:{cursor:"pointer"}})})]})},K=a(17),V=a.p+"static/media/profile.06c30927.png",q=function(e){var t=e.image,a=e.tempimage,n=V;return t&&(n="images/profile/"+t),Object(S.jsx)("img",Object(p.a)(Object(p.a)({alt:"Profile",src:a||n},e),{},{onError:function(e){e.target.src=V}}))},W=a(10),G=a(28),J=function(e){var t=Object(E.a)().t,a=e.visible,n=e.onClickCancel,c=e.onClickOk,s=e.message,r=e.pendingApiCall,i=e.title,o=e.okButton,l="modal fade";return a&&(l+=" show d-block"),Object(S.jsx)("div",{className:l,style:{backgroundColor:"#000000b0"},children:Object(S.jsx)("div",{className:"modal-dialog",children:Object(S.jsxs)("div",{className:"modal-content",children:[Object(S.jsx)("div",{className:"modal-header",children:Object(S.jsx)("h5",{className:"modal-title",children:i})}),Object(S.jsx)("div",{className:"modal-body",children:s}),Object(S.jsxs)("div",{className:"modal-footer",children:[Object(S.jsx)("button",{type:"button",className:"btn btn-secondary",onClick:n,children:t("Cancel")}),Object(S.jsx)(A,{type:"button",className:"btn btn-danger",onClick:c,pendingApiCall:r,disabled:r,text:o})]})]})})})},X=function(e){var t=Object(E.a)().t,a=Object(D.c)((function(e){return e.username})),c=e.hoax,s=e.onDeleteHoax,i=c.user,o=c.content,u=c.timestamp,b=c.fileAttachment,p=c.id,m=i.username,h=i.displayName,O=i.image,f=Object(E.a)().i18n,x=Object(G.a)(u,f.language),v=Object(n.useState)(!1),g=Object(r.a)(v,2),N=g[0],y=g[1],w=a===m,C=l("delete","/api/1.0/hoaxes/".concat(p)),L=function(){var e=Object(j.a)(d.a.mark((function e(){return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,k(p);case 2:s(p);case 3:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return Object(S.jsxs)(S.Fragment,{children:[Object(S.jsxs)("div",{className:"card p-1",children:[Object(S.jsxs)("div",{className:"d-flex m-1",children:[Object(S.jsx)(q,{image:O,width:"32",height:"32",className:"rounded-circle"}),Object(S.jsx)("div",{className:"flex-fill m-auto pl-2",children:Object(S.jsxs)(W.b,{to:"/user/".concat(m),className:"text-dark",children:[Object(S.jsxs)("h6",{className:"d-inline",children:[h,"@",m]}),Object(S.jsx)("span",{children:" - "}),Object(S.jsx)("span",{children:x})]})}),w&&Object(S.jsx)("button",{className:"btn btn-delete-link btn-sm",onClick:function(){return y(!0)},children:Object(S.jsx)("span",{className:"material-icons",children:"delete_outline"})})]}),Object(S.jsx)("div",{className:"pl-5",children:o}),b&&Object(S.jsxs)("div",{className:"pl-5",children:[b.fileType.startsWith("image")&&Object(S.jsx)("img",{className:"img-fluid",src:"images/attachments/"+b.name,alt:o}),!b.fileType.startsWith("image")&&Object(S.jsx)("strong",{children:"Hoax has unknown attachment"})]})]}),Object(S.jsx)(J,{visible:N,onClickCancel:function(){y(!1)},onClickOk:L,title:t("Delete Hoax"),okButton:t("Delete Hoax"),message:Object(S.jsxs)("div",{children:[Object(S.jsx)("div",{children:Object(S.jsx)("strong",{children:t("Are you sure to delete hoax?")})}),Object(S.jsx)("span",{children:o})]}),pendingApiCall:C})]})},Y=function(){return Object(S.jsx)("div",{className:"d-flex justify-content-center",children:Object(S.jsx)("div",{className:"spinner-border text-black-50",children:Object(S.jsx)("span",{className:"sr-only",children:"Loading..."})})})},Q=a(8),Z=function(){var e=Object(E.a)().t,t=Object(n.useState)({content:[],last:!0,number:0}),a=Object(r.a)(t,2),c=a[0],s=a[1],i=Object(n.useState)(0),o=Object(r.a)(i,2),u=o[0],b=o[1],m=Object(Q.h)().username,h=m?"/api/1.0/users/".concat(m,"/hoaxes?page="):"/api/1.0/hoaxes?page=",O=l("get",h),f=0,x=0;if(c.content.length>0){var w=c.content.length-1;f=c.content[w].id,x=c.content[0].id}var k=m?"/api/1.0/users/".concat(m,"/hoaxes/").concat(f):"/api/1.0/hoaxes/"+f,C=l("get",k,!0),L=m?"/api/1.0/users/".concat(m,"/hoaxes/").concat(x,"?direction=after?"):"/api/1.0/hoaxes/".concat(x,"?direction=after"),A=l("get",L,!0);Object(n.useEffect)((function(){var e=setInterval(function(){var e=Object(j.a)(d.a.mark((function e(){var t;return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,N(x,m);case 2:t=e.sent,b(t.data.count);case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),5e3);return function(){clearInterval(e)}}),[x,m]),Object(n.useEffect)((function(){(function(){var e=Object(j.a)(d.a.mark((function e(t){var a;return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,v(m,t);case 3:a=e.sent,s((function(e){return Object(p.a)(Object(p.a)({},a.data),{},{content:[].concat(Object(K.a)(e.content),Object(K.a)(a.data.content))})})),e.next=9;break;case 7:e.prev=7,e.t0=e.catch(0);case 9:case"end":return e.stop()}}),e,null,[[0,7]])})));return function(t){return e.apply(this,arguments)}})()()}),[m]);var D=function(){var e=Object(j.a)(d.a.mark((function e(){var t;return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,g(f,m);case 3:t=e.sent,s((function(e){return Object(p.a)(Object(p.a)({},t.data),{},{content:[].concat(Object(K.a)(e.content),Object(K.a)(t.data.content))})})),e.next=9;break;case 7:e.prev=7,e.t0=e.catch(0);case 9:case"end":return e.stop()}}),e,null,[[0,7]])})));return function(){return e.apply(this,arguments)}}(),U=function(){var e=Object(j.a)(d.a.mark((function e(){var t;return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,y(x,m);case 2:t=e.sent,s((function(e){return Object(p.a)(Object(p.a)({},e),{},{content:[].concat(Object(K.a)(t.data),Object(K.a)(e.content))})}));case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),P=function(e){s((function(t){return Object(p.a)(Object(p.a)({},t),{},{content:t.content.filter((function(t){return t.id!==e}))})}))},F=c.content,I=c.last;return 0===F.length?Object(S.jsx)("div",{className:"alert alert-secondary text-center mb-1",children:O?Object(S.jsx)(Y,{}):e("There are no hoaxes")}):Object(S.jsxs)("div",{children:[u>0&&Object(S.jsx)("div",{className:"alert alert-secondary text-center",style:{cursor:A?"not-allowed":"pointer"},onClick:A?function(){}:U,children:A?Object(S.jsx)(Y,{}):e("There are new hoaxes")}),F.map((function(e){return Object(S.jsx)(X,{hoax:e,onDeleteHoax:P},e.id)})),!I&&Object(S.jsx)("div",{className:"alert alert-secondary text-center mt-1",style:{cursor:C?"not-allowed":"pointer"},onClick:C?function(){}:D,children:C?Object(S.jsx)(Y,{}):e("Load old hoaxes")})]})},$=(a(90),function(e){var t=e.image,a=e.uploading;return Object(S.jsxs)("div",{style:{position:"relative"},children:[Object(S.jsx)("img",{src:t,className:"img-thumbnail",alt:"hoax-attachment"}),Object(S.jsx)("div",{className:"overlay",style:{opacity:a?1:0},children:Object(S.jsx)("div",{className:"d-flex justify-content-center h-100",children:Object(S.jsx)("div",{className:"spinner-border text-light m-auto",children:Object(S.jsx)("span",{className:"sr-only",children:"Loading..."})})})})]})}),ee=function(){var e=Object(D.c)((function(e){return{image:e.image}})).image,t=Object(E.a)().t,a=Object(n.useState)(!1),c=Object(r.a)(a,2),s=c[0],i=c[1],o=Object(n.useState)(""),u=Object(r.a)(o,2),b=u[0],p=u[1],m=Object(n.useState)({}),h=Object(r.a)(m,2),O=h[0],f=h[1],v=Object(n.useState)(),g=Object(r.a)(v,2),N=g[0],y=g[1],k=Object(n.useState)(),C=Object(r.a)(k,2),U=C[0],P=C[1];Object(n.useEffect)((function(){s||(p(""),f({}),y(),P())}),[s]),Object(n.useEffect)((function(){f({})}),[b]);var F=l("post","/api/1.0/hoaxes",!0),I=l("post","/api/1.0/hoax-attachments",!0),z=function(){var e=Object(j.a)(d.a.mark((function e(){var t;return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t={content:b,attachmentId:U},e.prev=1,e.next=4,x(t);case 4:i(!1),e.next=10;break;case 7:e.prev=7,e.t0=e.catch(1),f(e.t0.response.data.validationErrors);case 10:case"end":return e.stop()}}),e,null,[[1,7]])})));return function(){return e.apply(this,arguments)}}(),H=function(){var e=Object(j.a)(d.a.mark((function e(t){var a,n;return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return(a=new FormData).append("image",t),e.next=4,w(a);case 4:n=e.sent,P(n.data.id);case 6:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),T="form-control";return O.content&&(T+=" is-invalid"),Object(S.jsxs)("div",{className:"card p-1 flex-row",children:[Object(S.jsx)(q,{image:e,width:"32",height:"32",className:"rounded-circle mr-1"}),Object(S.jsxs)("div",{className:"flex-fill",children:[Object(S.jsx)("textarea",{className:T,rows:s?"3":"1",onFocus:function(){return i(!0)},onChange:function(e){p(e.target.value)},value:b}),Object(S.jsx)("div",{className:"invalid-feedback",children:O.content}),s&&Object(S.jsxs)(S.Fragment,{children:[!N&&Object(S.jsx)(L,{type:"file",onChange:function(e){if(!(e.target.files.length<1)){var t=e.target.files[0],a=new FileReader;a.onloadend=function(){y(a.result),H(t)},a.readAsDataURL(t)}}}),N&&Object(S.jsx)($,{image:N,uploading:I}),Object(S.jsxs)("div",{className:"text-right mt-1",children:[Object(S.jsx)(A,{className:"btn btn-primary",onClick:z,text:"Hoaxify",pendingApiCall:F,disabled:F||I}),Object(S.jsxs)("button",{className:"btn btn-light d-inline-flex ml-1",onClick:function(){return i(!1)},disabled:F||I,children:[Object(S.jsx)("span",{className:"material-icons",children:"close "}),t("Cancel")]})]})]})]})]})},te=function(e){var t=e.user,a=t.username,n=t.displayName,c=t.image;return Object(S.jsxs)(W.b,{to:"/user/".concat(a),className:"list-group-item list-group-item-action",children:[Object(S.jsx)(q,{className:"rounded-circle",width:"32",height:"32",alt:"".concat(a," profile"),image:c}),Object(S.jsxs)("span",{className:"pl-2",children:[n,"@",a]})]})},ae=function(){var e=Object(n.useState)({content:[],size:3,number:0}),t=Object(r.a)(e,2),a=t[0],c=t[1],s=Object(n.useState)(!1),i=Object(r.a)(s,2),o=i[0],u=i[1],b=l("get","/api/1.0/users?page");Object(n.useEffect)((function(){p()}),[]);var p=function(){var e=Object(j.a)(d.a.mark((function e(t){var a;return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return u(!1),e.prev=1,e.next=4,m(t);case 4:a=e.sent,c(a.data),e.next=11;break;case 8:e.prev=8,e.t0=e.catch(1),u(!0);case 11:case"end":return e.stop()}}),e,null,[[1,8]])})));return function(t){return e.apply(this,arguments)}}(),h=Object(E.a)().t,O=a.content,f=a.last,x=a.first,v=Object(S.jsxs)("div",{children:[!1===x&&Object(S.jsx)("button",{className:"btn btn-sm btn-light",onClick:function(){var e=a.number-1;p(e)},children:h("Previous")}),!1===f&&Object(S.jsx)("button",{className:"btn btn-sm btn-light float-right",onClick:function(){var e=a.number+1;p(e)},children:h("Next")})]});return b&&(v=Object(S.jsx)(Y,{})),Object(S.jsxs)("div",{className:"card",children:[Object(S.jsx)("h3",{className:"card-header text-center",children:h("Users")}),Object(S.jsx)("div",{className:"list-group-flush",children:O.map((function(e){return Object(S.jsx)(te,{user:e},e.username)}))}),v,o&&Object(S.jsx)("div",{className:"text-center text-danger",children:h("Load Failure")})]})},ne=function(){var e=Object(D.c)((function(e){return{isLoggedIn:e.isLoggedIn}})).isLoggedIn;return Object(S.jsx)("div",{className:"container",children:Object(S.jsxs)("div",{className:"row",children:[Object(S.jsxs)("div",{className:"col",children:[e&&Object(S.jsx)("div",{className:"mb-1",children:Object(S.jsx)(ee,{})}),Object(S.jsx)(Z,{})]}),Object(S.jsx)("div",{className:"col",children:Object(S.jsx)(ae,{})})]})})},ce=function(e){var t=Object(n.useState)(!1),a=Object(r.a)(t,2),c=a[0],s=a[1],i=Object(n.useState)(),o=Object(r.a)(i,2),u=o[0],b=o[1],m=Object(D.c)((function(e){return{username:e.username}})).username,h=Object(Q.h)(),O=Object(n.useState)({}),x=Object(r.a)(O,2),v=x[0],g=x[1],N=Object(n.useState)(!1),y=Object(r.a)(N,2),w=y[0],k=y[1],U=Object(n.useState)(),P=Object(r.a)(U,2),F=P[0],z=P[1],T=Object(n.useState)({}),R=Object(r.a)(T,2),M=R[0],_=R[1],B=Object(D.b)(),K=Object(Q.g)(),V=Object(n.useState)(!1),W=Object(r.a)(V,2),G=W[0],X=W[1],Y=h.username;Object(n.useEffect)((function(){g(e.user)}),[e.user]),Object(n.useEffect)((function(){k(Y===m)}),[Y,m]),Object(n.useEffect)((function(){_((function(e){return Object(p.a)(Object(p.a)({},e),{},{displayName:void 0})}))}),[u]),Object(n.useEffect)((function(){_((function(e){return Object(p.a)(Object(p.a)({},e),{},{image:void 0})}))}),[F]);var Z=v.username,$=v.displayName,ee=v.image,te=Object(E.a)().t;Object(n.useEffect)((function(){c?b($):(b(void 0),z(void 0))}),[c,$]);var ae=function(){var e=Object(j.a)(d.a.mark((function e(){var t,a,n;return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return F&&(t=F.split(",")[1]),a={displayName:u,image:t},e.prev=2,e.next=5,f(Z,a);case 5:n=e.sent,s(!1),g(n.data),B(H(n.data)),e.next=14;break;case 11:e.prev=11,e.t0=e.catch(2),_(e.t0.response.data.validationErrors);case 14:case"end":return e.stop()}}),e,null,[[2,11]])})));return function(){return e.apply(this,arguments)}}(),ne=l("put","/api/1.0/users/"+Z),ce=l("delete","/api/1.0/users/".concat(Z),!0),se=M.displayName,re=M.image,ie=function(){var e=Object(j.a)(d.a.mark((function e(){return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,C(Z);case 2:X(!1),B(I()),K.push("/");case 5:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return Object(S.jsxs)("div",{className:"card text-center",children:[Object(S.jsx)("div",{className:"card-header",children:Object(S.jsx)(q,{className:"rounded-circle shadow",width:"200",height:"200",alt:"".concat(Z," profile"),image:ee,tempimage:F})}),Object(S.jsxs)("div",{className:"card-body",children:[!c&&Object(S.jsxs)(S.Fragment,{children:[Object(S.jsxs)("h3",{children:[$,"@",Z]}),w&&Object(S.jsxs)(S.Fragment,{children:[Object(S.jsxs)("button",{className:"btn btn-success d-inline-flex",onClick:function(){return s(!0)},children:[Object(S.jsx)("span",{className:"material-icons",children:"edit"}),te("Edit")]}),Object(S.jsx)("div",{className:"pt-2",children:Object(S.jsxs)("button",{className:"btn btn-danger d-inline-flex",onClick:function(){X(!0)},children:[Object(S.jsx)("span",{className:"material-icons",children:"directions_run"}),te("Delete My Account")]})})]})]}),c&&Object(S.jsxs)("div",{children:[Object(S.jsx)(L,{label:te("Change Display Name"),defaultValue:$,onChange:function(e){b(e.target.value)},error:se}),Object(S.jsx)(L,{type:"file",onChange:function(e){if(!(e.target.files.length<1)){var t=e.target.files[0],a=new FileReader;a.onloadend=function(){z(a.result)},a.readAsDataURL(t)}},error:re}),Object(S.jsxs)("div",{children:[Object(S.jsx)(A,{className:"btn btn-primary d-inline-flex",onClick:ae,disabled:ne,pendingApiCall:ne,text:Object(S.jsxs)(S.Fragment,{children:[Object(S.jsx)("span",{className:"material-icons",children:"save"}),te("Save")]})}),Object(S.jsxs)("button",{className:"btn btn-light d-inline-flex ml-1",onClick:function(){return s(!1)},disabled:ne,children:[Object(S.jsx)("span",{className:"material-icons",children:"close "}),te("Cancel")]})]})]})]}),Object(S.jsx)(J,{visible:G,onClickCancel:function(){X(!1)},onClickOk:ie,message:te("Are you sure to delete your account?"),title:te("Delete My Account"),okButton:te("Delete My Account"),pendingApiCall:ce})]})},se=function(e){var t=Object(n.useState)({}),a=Object(r.a)(t,2),c=a[0],s=a[1],i=Object(n.useState)(!1),o=Object(r.a)(i,2),u=o[0],b=o[1],p=Object(Q.h)().username,m=Object(E.a)().t,h=l("get","/api/1.0/users/"+p,!0);return Object(n.useEffect)((function(){b(!1)}),[c]),Object(n.useEffect)((function(){(function(){var e=Object(j.a)(d.a.mark((function e(){var t;return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,O(p);case 3:t=e.sent,s(t.data),e.next=10;break;case 7:e.prev=7,e.t0=e.catch(0),b(!0);case 10:case"end":return e.stop()}}),e,null,[[0,7]])})));return function(){return e.apply(this,arguments)}})()()}),[p]),u?Object(S.jsx)("div",{className:"container",children:Object(S.jsxs)("div",{className:"alert alert-danger text-center",children:[Object(S.jsx)("div",{children:Object(S.jsx)("span",{className:"material-icons",style:{fontSize:"48px"},children:"error"})}),m("User not found")]})}):h||c.username!==p?Object(S.jsx)(Y,{}):Object(S.jsx)("div",{className:"container",children:Object(S.jsxs)("div",{className:"row",children:[Object(S.jsx)("div",{className:"column",children:Object(S.jsx)(ce,{user:c})}),Object(S.jsx)("div",{className:"column",children:Object(S.jsx)(Z,{})})]})})},re=a.p+"static/media/hoaxify.e76cb420.png",ie=function(e){var t=Object(E.a)().t,a=Object(D.c)((function(e){return{isLoggedIn:e.isLoggedIn,username:e.username,displayName:e.displayName,image:e.image}})),c=a.username,s=a.isLoggedIn,i=a.displayName,o=a.image,l=Object(n.useRef)(),u=Object(n.useState)(!1),d=Object(r.a)(u,2),j=d[0],b=d[1];Object(n.useEffect)((function(){return document.addEventListener("click",p),function(){document.removeEventListener("click",p)}}),[s]);var p=function(e){void 0===l.current||null!==l.current&&l.current.contains(e.target)||b(!1)},m=Object(D.b)(),h=Object(S.jsxs)("ul",{className:"navbar-nav ml-auto",children:[Object(S.jsx)("li",{children:Object(S.jsx)(W.b,{className:"nav-link",to:"/login",children:t("Login")})}),Object(S.jsx)("li",{children:Object(S.jsx)(W.b,{className:"nav-link",to:"/signup",children:t("Sign Up")})})]});if(s){var O="dropdown-menu p-0 shadow";j&&(O="dropdown-menu p-0 shadow show"),h=Object(S.jsx)("ul",{className:"navbar-nav ml-auto",ref:l,children:Object(S.jsxs)("li",{className:"nav-item dropdown",children:[Object(S.jsxs)("div",{className:"d-flex",style:{cursor:"pointer"},onClick:function(){return b(!0)},children:[Object(S.jsx)(q,{image:o,width:"32",height:"32",className:"rounded-circle m-auto"}),Object(S.jsx)("span",{className:"nav-link nav-link dropdown-toggle",children:i})]}),Object(S.jsxs)("div",{className:O,children:[Object(S.jsxs)(W.b,{className:"dropdown-item d-flex p-2",to:"/user/"+c,onClick:function(){return b(!1)},children:[Object(S.jsx)("span",{className:"material-icons text-info mr-2",children:"person"}),t("My Profile")]}),Object(S.jsxs)("span",{className:"dropdown-item d-flex p-2",onClick:function(){m(I())},style:{cursor:"pointer"},children:[Object(S.jsx)("span",{className:"material-icons text-danger mr-2",children:"power_settings_new"}),t("Logout")]})]})]})})}return Object(S.jsx)("div",{className:"shadow-sm bg-light mb-2",children:Object(S.jsxs)("nav",{className:"navbar navbar-light bg-light container navbar-expand",children:[Object(S.jsxs)(W.b,{className:"navbar-brand",to:"/",children:[Object(S.jsx)("img",{src:re,width:"60",alt:"Hoaxify Logo"}),"Hoaxify"]}),h]})})},oe=function(){var e=Object(D.c)((function(e){return{isLoggedIn:e.isLoggedIn}})).isLoggedIn;return Object(S.jsxs)("div",{children:[Object(S.jsxs)(W.a,{children:[Object(S.jsx)(ie,{}),Object(S.jsxs)(Q.d,{children:[Object(S.jsx)(Q.b,{exact:!0,path:"/",component:ne}),!e&&Object(S.jsx)(Q.b,{path:"/login",component:_}),Object(S.jsx)(Q.b,{path:"/signup",component:M}),Object(S.jsx)(Q.b,{path:"/user/:username",component:se}),Object(S.jsx)(Q.a,{to:"/"})]})]}),Object(S.jsx)(B,{})]})},le=function(e){e&&e instanceof Function&&a.e(3).then(a.bind(null,93)).then((function(t){var a=t.getCLS,n=t.getFID,c=t.getFCP,s=t.getLCP,r=t.getTTFB;a(e),n(e),c(e),s(e),r(e)}))},ue=a(34),de=a(22);ue.a.use(de.e).init({resources:{en:{translations:{"Sign Up":"Sign Up","Password mismatch":"Password mismatch","User Name":"User Name","Display Name":"Display Name",Password:"Password","Password Repeat":"Password Repeat",Login:"Login",Unauthorized:"Unauthorized",Logout:"Logout",Users:"Users",Next:"Next >",Previous:"< Previous","Load Failure":"Load Failure","User not found":"User not found",Edit:"Edit",Save:"Save",Cancel:"Cancel","Change Display Name":"Change Display Name","My Profile":"My Profile","There are no hoaxes":"There are no hoaxes","Load old hoaxes":"Load old hoaxes","There are new hoaxes":"There are new hoaxes","Delete Hoax":"Delete Hoax","Are you sure to delete hoax?":"Are you sure to delete hoax?","Are you sure to delete your account?":"Are you sure to delete your account?","Delete My Account":"Delete My Account"}},tr:{translations:{"Sign Up":"Kay\u0131t Ol","Password mismatch":"Ayn\u0131 \u015fifreyi giriniz","User Name":"Kullan\u0131c\u0131 ad\u0131","Display Name":"Tercih edilen isim",Password:"\u015eifre","Password Repeat":"\u015eifre Tekrarla",Login:"Sisteme Gir",Unauthorized:"Yetkisiz",Logout:"\xc7\u0131k",Users:"Kullan\u0131c\u0131lar",Next:"Sonraki >",Previous:"< \xd6nceki","Load Failure":"Liste al\u0131namad\u0131","User not found":"Kullan\u0131c\u0131 bulunamad\u0131",Edit:"D\xfczenle",Save:"Kaydet",Cancel:"\u0130ptal Et","Change Display Name":"G\xf6r\xfcn\xfcr isminizi de\u011fi\u015ftirin","My Profile":"Hesab\u0131m","There are no hoaxes":"Hoax bulunamad\u0131","Load old hoaxes":"Eski hoaxlar\u0131 getir","There are new hoaxes":"Yeni hoaxlar var","Delete Hoax":"Hoax'\u0131 sil","Are you sure to delete hoax?":"Hoax'\u0131 silmek istedi\u011finizden emin misiniz?","Are you sure to delete your account?":"Hesab\u0131n\u0131z\u0131 silmek istedi\u011finizden emin misiniz?","Delete My Account":"Hesab\u0131m\u0131 sil"}}},fallbackLng:"tr",ns:["translations"],defaultNS:"translations",keySeparator:!1,interpolation:{escapeValue:!1,formatSeparator:","},react:{wait:!0}});Object(G.b)("tr",(function(e,t){return[["az \xf6nce","\u015fimdi"],["%s saniye \xf6nce","%s saniye i\xe7inde"],["1 dakika \xf6nce","1 dakika i\xe7inde"],["%s dakika \xf6nce","%s dakika i\xe7inde"],["1 saat \xf6nce","1 saat i\xe7inde"],["%s saat \xf6nce","%s saat i\xe7inde"],["1 g\xfcn \xf6nce","1 g\xfcn i\xe7inde"],["%s g\xfcn \xf6nce","%s g\xfcn i\xe7inde"],["1 hafta \xf6nce","1 hafta i\xe7inde"],["%s hafta \xf6nce","%s hafta i\xe7inde"],["1 ay \xf6nce","1 ay i\xe7inde"],["%s ay \xf6nce","%s ay i\xe7inde"],["1 y\u0131l \xf6nce","1 y\u0131l i\xe7inde"],["%s y\u0131l \xf6nce","%s y\u0131l i\xe7inde"]][t]}));ue.a;var je=a(29),be={isLoggedIn:!1,username:void 0,displayName:void 0,image:null,password:void 0},pe=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:Object(p.a)({},be),t=arguments.length>1?arguments[1]:void 0;return t.type===U?be:t.type===P?Object(p.a)(Object(p.a)({},t.payload),{},{isLoggedIn:!0}):t.type===F?Object(p.a)(Object(p.a)({},e),t.payload):e},me=a(48),he=a.n(me),Oe=a(49),fe=new he.a,xe=function(){var e=fe.get("hoax-auth")||{isLoggedIn:!1,username:void 0,displayName:void 0,image:null,password:void 0};h(e);var t=window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__||je.b,a=Object(je.c)(pe,e,t(Object(je.a)(Oe.a)));return a.subscribe((function(){var e;e=a.getState(),fe.set("hoax-auth",e),h(a.getState())})),a}();s.a.render(Object(S.jsx)(D.a,{store:xe,children:Object(S.jsx)(oe,{})}),document.getElementById("root")),le()}},[[91,1,2]]]);
//# sourceMappingURL=main.687b553c.chunk.js.map