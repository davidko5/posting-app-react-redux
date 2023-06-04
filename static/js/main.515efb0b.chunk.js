(this["webpackJsonpredux-essentials-example"]=this["webpackJsonpredux-essentials-example"]||[]).push([[0],{1323:function(e,t){},1325:function(e,t,n){"use strict";n.r(t);var r=n(8),c=n(20),s=n(4),a=n.n(s),i=n(77),o=n.n(i),u=(n(147),n(21)),d=n(14),j=n(10),l=n(12),b=n(16),p=n(18),O=n(85),f=["body"];function h(e){return m.apply(this,arguments)}function m(){return m=Object(c.a)(Object(r.a)().mark((function e(t){var n,c,s,a,i,o,u,d=arguments;return Object(r.a)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return c=(n=d.length>1&&void 0!==d[1]?d[1]:{}).body,s=Object(O.a)(n,f),a={"Content-Type":"application/json"},i=Object(p.a)(Object(p.a)({method:c?"POST":"GET"},s),{},{headers:Object(p.a)(Object(p.a)({},a),s.headers)}),c&&(i.body=JSON.stringify(c)),e.prev=4,e.next=7,window.fetch(t,i);case 7:return u=e.sent,e.next=10,u.json();case 10:if(o=e.sent,!u.ok){e.next=13;break}return e.abrupt("return",{status:u.status,data:o,headers:u.headers,url:u.url});case 13:throw new Error(u.statusText);case 16:return e.prev=16,e.t0=e.catch(4),e.abrupt("return",Promise.reject(e.t0.message?e.t0.message:o));case 19:case"end":return e.stop()}}),e,null,[[4,16]])}))),m.apply(this,arguments)}h.get=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return h(e,Object(p.a)(Object(p.a)({},t),{},{method:"GET"}))},h.post=function(e,t){var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{};return h(e,Object(p.a)(Object(p.a)({},n),{},{body:t}))};var x=Object(b.b)("notifications/fetchNotifications",function(){var e=Object(c.a)(Object(r.a)().mark((function e(t,n){var c,s,a,i,o,u;return Object(r.a)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return c=n.getState,s=w(c()),a=Object(l.a)(s,1),i=a[0],o=i?i.date:"",e.next=6,h.get("/fakeApi/notifications?since=".concat(o));case 6:return u=e.sent,e.abrupt("return",u.data);case 8:case"end":return e.stop()}}),e)})));return function(t,n){return e.apply(this,arguments)}}()),v=Object(b.c)({sortComparer:function(e,t){return e.date.localeCompare(t.date)}}),g=Object(b.d)({name:"notifications",initialState:v.getInitialState(),reducers:{allNotificationsRead:function(e,t){Object.values(e.entities).forEach((function(e){return e.read=!0}))}},extraReducers:function(e){e.addCase(x.fulfilled,(function(e,t){v.upsertMany(e,t.payload),Object.values(e.entities).forEach((function(e){return e.isNew=!e.read}))}))}}),y=g.reducer,S=g.actions.allNotificationsRead,w=v.getSelectors((function(e){return e.notifications})).selectAll,N=n(3),k=function(){var e,t=Object(j.b)(),n=Object(j.c)(w).filter((function(e){return!e.read})).length;return n>0&&(e=Object(N.jsx)("span",{className:"badge",children:n})),Object(N.jsx)("nav",{children:Object(N.jsxs)("section",{children:[Object(N.jsx)("h1",{children:"React/Redux Pet Project"}),Object(N.jsxs)("div",{className:"navContent",children:[Object(N.jsxs)("div",{className:"navLinks",children:[Object(N.jsx)(u.b,{to:"/",children:"Posts"}),Object(N.jsx)(u.b,{to:"/users",children:"Users"}),Object(N.jsxs)(u.b,{to:"/notifications",children:["Notifications ",e]})]}),Object(N.jsx)("button",{className:"button",onClick:function(){t(x())},children:"Refresh Notifications"})]})]})})},I=Object(b.c)(),C=Object(b.b)("users/fetchUsers",Object(c.a)(Object(r.a)().mark((function e(){var t;return Object(r.a)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,h.get("/fakeApi/users");case 2:return t=e.sent,e.abrupt("return",t.data);case 4:case"end":return e.stop()}}),e)})))),A=Object(b.d)({name:"users",initialState:I.getInitialState(),reducers:{},extraReducers:function(e){e.addCase(C.fulfilled,I.setAll)}}).reducer,P=I.getSelectors((function(e){return e.users})),T=P.selectAll,F=P.selectById,E=function(e){var t=e.userId,n=Object(j.c)((function(e){return F(e,t)}));return Object(N.jsxs)("span",{children:["by ",n?n.name:"Unknown author"]})},U=n(82),R=Object(b.c)({sortComparer:function(e,t){return t.date.localeCompare(e.date)}}),M=R.getInitialState({status:"idle",error:null}),q=Object(b.d)({name:"posts",initialState:M,reducers:{postUpdated:function(e,t){var n=t.payload,r=n.id,c=n.title,s=n.content,a=e.entities[r];a&&(a.title=c,a.content=s)},reactionAdded:function(e,t){var n=t.payload,r=n.postId,c=n.reaction,s=e.entities[r];s&&s.reactions[c]++}},extraReducers:function(e){e.addCase(G.pending,(function(e,t){e.status="loading"})).addCase(G.fulfilled,(function(e,t){e.status="succeeded",R.upsertMany(e,t.payload)})).addCase(G.rejected,(function(e,t){e.status="failed",e.error=t.error.message})).addCase(W.fulfilled,R.addOne)}}),D=R.getSelectors((function(e){return e.posts})),J=D.selectAll,B=D.selectById,K=D.selectIds,L=Object(U.a)([J,function(e,t){return t}],(function(e,t){return e.filter((function(e){return e.user===t}))})),G=Object(b.b)("posts/fetchPosts",Object(c.a)(Object(r.a)().mark((function e(){var t;return Object(r.a)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,h.get("/fakeApi/posts");case 2:return t=e.sent,e.abrupt("return",t.data);case 4:case"end":return e.stop()}}),e)})))),W=Object(b.b)("posts/addNewPost",function(){var e=Object(c.a)(Object(r.a)().mark((function e(t){var n;return Object(r.a)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,h.post("fakeApi/posts",t);case 2:return n=e.sent,e.abrupt("return",n.data);case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()),z=q.actions,V=z.postUpdated,H=z.reactionAdded,Q=q.reducer,X={thumbsUp:"\ud83d\udc4d",hooray:"\ud83c\udf89",heart:"\u2764\ufe0f",rocket:"\ud83d\ude80",eyes:"\ud83d\udc40"},Y=function(e){var t=e.post,n=Object(j.b)(),r=Object.entries(X).map((function(e){var r=Object(l.a)(e,2),c=r[0],s=r[1];return Object(N.jsxs)("button",{type:"button",className:"muted-button reaction-button",onClick:function(){n(H({postId:t.id,reaction:c}))},children:[s," ",t.reactions[c]]},c)}));return Object(N.jsx)("div",{children:r})},Z=n(111),$=n(112),_=function(e){var t=e.timestamp,n="";if(t){var r=Object(Z.a)(t),c=Object($.a)(r);n="".concat(c," ago")}return Object(N.jsxs)("span",{title:t,children:["\xa0 ",Object(N.jsxs)("i",{children:[n," "]})]})},ee=function(e){var t=e.text,n=void 0===t?"":t,r=e.size,c=void 0===r?"5em":r,s=n?Object(N.jsx)("h4",{children:n}):null;return Object(N.jsxs)("div",{className:"spinner",children:[s,Object(N.jsx)("div",{className:"loader",style:{height:c,width:c}})]})},te=function(e){var t=e.postId,n=Object(j.c)((function(e){return B(e,t)}));return Object(N.jsxs)("article",{className:"post-excerpt",children:[Object(N.jsx)("h3",{children:n.title}),Object(N.jsx)("p",{className:"post-content",children:n.content.substring(0,100)}),Object(N.jsxs)("div",{children:[Object(N.jsx)(_,{timestamp:n.date}),Object(N.jsx)(E,{userId:n.user})]}),Object(N.jsx)(Y,{post:n}),Object(N.jsx)(u.b,{to:"/posts/".concat(n.id),className:"button muted-button",children:"View Post"})]},n.id)},ne=function(){var e,t=Object(j.b)(),n=Object(j.c)(K),r=Object(j.c)((function(e){return e.posts.status})),c=Object(j.c)((function(e){return e.posts.error}));return Object(s.useEffect)((function(){"idle"===r&&t(G())}),[r,t]),"loading"===r?e=Object(N.jsx)(ee,{text:"Loading..."}):"succeeded"===r?e=n.map((function(e){return Object(N.jsx)(te,{postId:e},e)})):"failed"===r&&(e=Object(N.jsx)("div",{children:c})),Object(N.jsxs)("section",{className:"posts-list",children:[Object(N.jsx)("h2",{children:"Posts"}),e]})},re=function(){var e=Object(s.useState)(""),t=Object(l.a)(e,2),n=t[0],a=t[1],i=Object(s.useState)(""),o=Object(l.a)(i,2),u=o[0],d=o[1],b=Object(s.useState)(""),p=Object(l.a)(b,2),O=p[0],f=p[1],h=Object(s.useState)("idle"),m=Object(l.a)(h,2),x=m[0],v=m[1],g=Object(j.b)(),y=Object(j.c)(T),S=[n,u,O].every(Boolean)&&"idle"===x,w=function(){var e=Object(c.a)(Object(r.a)().mark((function e(){return Object(r.a)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!S){e.next=16;break}return e.prev=1,v("pending"),e.next=5,g(W({title:n,content:u,user:O})).unwrap();case 5:a(""),d(""),f(""),e.next=13;break;case 10:e.prev=10,e.t0=e.catch(1),console.log("Failed to save the post:",e.t0);case 13:return e.prev=13,v("idle"),e.finish(13);case 16:case"end":return e.stop()}}),e,null,[[1,10,13,16]])})));return function(){return e.apply(this,arguments)}}(),k=y.map((function(e){return Object(N.jsx)("option",{value:e.id,children:e.name},e.id)}));return Object(N.jsxs)("section",{children:[Object(N.jsx)("h2",{children:"Add a New Post"}),Object(N.jsxs)("form",{children:[Object(N.jsx)("label",{htmlFor:"postTitle",children:"Post Title:"}),Object(N.jsx)("input",{type:"text",id:"postTitle",name:"postTitle",value:n,onChange:function(e){return a(e.target.value)}}),Object(N.jsx)("label",{htmlFor:"postAuthor",children:"Author:"}),Object(N.jsxs)("select",{id:"postAuthor",value:O,onChange:function(e){return f(e.target.value)},children:[Object(N.jsx)("option",{value:""}),k]}),Object(N.jsx)("label",{htmlFor:"postContent",children:"Content:"}),Object(N.jsx)("textarea",{id:"postContent",name:"postContent",value:u,onChange:function(e){return d(e.target.value)}}),Object(N.jsx)("button",{type:"button",onClick:w,disabled:!S,children:"Save Post"})]})]})},ce=function(e){var t=e.match.params.postId,n=Object(j.c)((function(e){return B(e,t)}));return n?Object(N.jsx)("section",{children:Object(N.jsxs)("article",{className:"post",children:[Object(N.jsx)("h2",{children:n.title}),Object(N.jsx)("p",{className:"post-content",children:n.content}),Object(N.jsxs)("div",{children:[Object(N.jsx)(_,{timestamp:n.date}),Object(N.jsx)(E,{userId:n.user})]}),Object(N.jsx)(Y,{post:n}),Object(N.jsx)(u.b,{to:"/editPost/".concat(n.id),className:"button",children:"Edit Post"})]})}):Object(N.jsx)("section",{children:Object(N.jsx)("h2",{children:"Post not found!"})})},se=function(e){var t=e.match.params.postId,n=Object(j.c)((function(e){return B(e,t)})),r=Object(s.useState)(n.title),c=Object(l.a)(r,2),a=c[0],i=c[1],o=Object(s.useState)(n.content),u=Object(l.a)(o,2),b=u[0],p=u[1],O=Object(j.b)(),f=Object(d.g)();return Object(N.jsxs)("section",{children:[Object(N.jsx)("h2",{children:"Edit Post"}),Object(N.jsxs)("form",{children:[Object(N.jsx)("label",{htmlFor:"postTitle",children:"Post Title:"}),Object(N.jsx)("input",{type:"text",id:"postTitle",name:"postTitle",placeholder:"What's on your mind?",value:a,onChange:function(e){return i(e.target.value)}}),Object(N.jsx)("label",{htmlFor:"postContent",children:"Content:"}),Object(N.jsx)("textarea",{id:"postContent",name:"postContent",value:b,onChange:function(e){return p(e.target.value)}})]}),Object(N.jsx)("button",{type:"button",onClick:function(){a&&b&&(O(V({id:t,title:a,content:b})),f.push("/posts/".concat(t)))},children:"Save Post"})]})},ae=function(){var e=Object(j.c)(T).map((function(e){return Object(N.jsx)("li",{children:Object(N.jsx)(u.b,{to:"/users/".concat(e.id),children:e.name})},e.id)}));return Object(N.jsxs)("section",{children:[Object(N.jsx)("h2",{children:"Users"}),Object(N.jsx)("ul",{children:e})]})},ie=function(e){var t=e.match.params.userId,n=Object(j.c)((function(e){return F(e,t)})),r=Object(j.c)((function(e){return L(e,t)})).map((function(e){return Object(N.jsx)("li",{children:Object(N.jsx)(u.b,{to:"/posts/".concat(e.id),children:e.title})},e.id)}));return Object(N.jsxs)("section",{children:[Object(N.jsx)("h2",{children:n.name}),Object(N.jsx)("ul",{children:r})]})},oe=n(137),ue=n.n(oe),de=function(){var e=Object(j.b)(),t=Object(j.c)(w),n=Object(j.c)(T);Object(s.useLayoutEffect)((function(){e(S())}));var r=t.map((function(e){var t=Object($.a)(Object(Z.a)(e.date)),r=n.find((function(t){return t.id===e.user}))||{name:"Unknown User"},c=ue()("notification",{new:e.isNew});return Object(N.jsxs)("div",{className:c,children:[Object(N.jsxs)("div",{children:[Object(N.jsx)("b",{children:r.name})," ",e.message]}),Object(N.jsx)("div",{title:e.date,children:Object(N.jsxs)("i",{children:[t," ago"]})})]},e.id)}));return Object(N.jsxs)("section",{className:"notificationsList",children:[Object(N.jsx)("h2",{children:"Notifications"}),r]})};var je,le=function(){return Object(N.jsxs)(u.a,{children:[Object(N.jsx)(k,{}),Object(N.jsx)("div",{className:"App",children:Object(N.jsxs)(d.d,{children:[Object(N.jsx)(d.b,{exact:!0,path:"/",render:function(){return Object(N.jsxs)(a.a.Fragment,{children:[Object(N.jsx)(re,{}),Object(N.jsx)(ne,{})]})}}),Object(N.jsx)(d.b,{exact:!0,path:"/notifications",component:de}),Object(N.jsx)(d.b,{exact:!0,path:"/posts/:postId",component:ce}),Object(N.jsx)(d.b,{exact:!0,path:"/editPost/:postId",component:se}),Object(N.jsx)(d.b,{exact:!0,path:"/users",component:ae}),Object(N.jsx)(d.b,{exact:!0,path:"/users/:userId",component:ie}),Object(N.jsx)(d.a,{to:"/"})]})})]})},be=Object(b.a)({reducer:{posts:Q,users:A,notifications:y}}),pe=n(47),Oe=n(57),fe=n(32),he=n(81),me=n(28),xe=n(40),ve=n.n(xe),ge=n(109),ye=n.n(ge),Se=n(141),we=n(142),Ne=["id"],ke=2e3,Ie=ye()(),Ce=localStorage.getItem("randomTimestampSeed");function Ae(e,t){return e=Math.ceil(e),t=Math.floor(t),Math.floor(Ie()*(t-e+1))+e}Ce?je=new Date(Ce):(Ce=(je=new Date).toISOString(),localStorage.setItem("randomTimestampSeed",Ce)),Ie=ye()(Ce),Object(we.setRandom)(Ie),ve.a.seed(je.getTime());for(var Pe,Te=function(e){return e[Ae(0,e.length-1)]},Fe=Object(me.factory)({user:{id:Object(me.primaryKey)(b.e),firstName:String,lastName:String,name:String,username:String,posts:Object(me.manyOf)("post")},post:{id:Object(me.primaryKey)(b.e),title:String,date:String,content:String,reactions:Object(me.oneOf)("reaction"),comments:Object(me.manyOf)("comment"),user:Object(me.oneOf)("user")},comment:{id:Object(me.primaryKey)(String),date:String,text:String,post:Object(me.oneOf)("post")},reaction:{id:Object(me.primaryKey)(b.e),thumbsUp:Number,hooray:Number,heart:Number,rocket:Number,eyes:Number,post:Object(me.oneOf)("post")}}),Ee=function(){var e=ve.a.name.firstName(),t=ve.a.name.lastName();return{firstName:e,lastName:t,name:"".concat(e," ").concat(t),username:ve.a.internet.userName()}},Ue=0;Ue<3;Ue++)for(var Re=Fe.user.create(Ee()),Me=0;Me<3;Me++){var qe=(Pe=Re,{title:ve.a.lorem.words(),date:ve.a.date.recent(7).toISOString(),user:Pe,content:ve.a.lorem.paragraphs(),reactions:Fe.reaction.create()});Fe.post.create(qe)}var De=function(e){return Object(p.a)(Object(p.a)({},e),{},{user:e.user.id})},Je=[fe.e.get("/fakeApi/posts",(function(e,t,n){var r=Fe.post.getAll().map(De);return t(n.delay(ke),n.json(r))})),fe.e.post("/fakeApi/posts",(function(e,t,n){var r=e.body;if("error"===r.content)return t(n.delay(ke),n.status(500),n.json("Server error saving this post!"));r.date=(new Date).toISOString();var c=Fe.user.findFirst({where:{id:{equals:r.user}}});r.user=c,r.reactions=Fe.reaction.create();var s=Fe.post.create(r);return t(n.delay(ke),n.json(De(s)))})),fe.e.get("/fakeApi/posts/:postId",(function(e,t,n){var r=Fe.post.findFirst({where:{id:{equals:e.params.postId}}});return t(n.delay(ke),n.json(De(r)))})),fe.e.patch("/fakeApi/posts/:postId",(function(e,t,n){var r=e.body,c=(r.id,Object(O.a)(r,Ne)),s=Fe.post.update({where:{id:{equals:e.params.postId}},data:c});return t(n.delay(ke),n.json(De(s)))})),fe.e.get("/fakeApi/posts/:postId/comments",(function(e,t,n){var r=Fe.post.findFirst({where:{id:{equals:e.params.postId}}});return t(n.delay(ke),n.json({comments:r.comments}))})),fe.e.post("/fakeApi/posts/:postId/reactions",(function(e,t,n){var r=e.params.postId,c=e.body.reaction,s=Fe.post.findFirst({where:{id:{equals:r}}}),a=Fe.post.update({where:{id:{equals:r}},data:{reactions:Object(p.a)(Object(p.a)({},s.reactions),{},Object(Oe.a)({},c,s.reactions[c]+=1))}});return t(n.delay(ke),n.json(De(a)))})),fe.e.get("/fakeApi/notifications",(function(e,t,n){var r=Ge(void 0,Ae(1,5),Fe);return t(n.delay(ke),n.json(r))})),fe.e.get("/fakeApi/users",(function(e,t,n){return t(n.delay(ke),n.json(Fe.user.getAll()))}))],Be=(he.setupWorker.apply(void 0,Je),new Se.Server("ws://localhost")),Ke=function(e,t){!function(e,t){e.send(JSON.stringify(t))}(e,{type:"notifications",payload:Ge(t,Ae(1,5),Fe)})};Be.on("connection",(function(e){e,e.on("message",(function(t){var n=JSON.parse(t);if("notifications"===n.type){var r=n.payload;Ke(e,r)}}))}));var Le=["poked you","says hi!","is glad we're friends","sent you a gift"];function Ge(e,t,n){var r,c=new Date;e?r=Object(Z.a)(e):(r=new Date(c.valueOf())).setMinutes(r.getMinutes()-15);var s=Object(pe.a)(Array(t)).map((function(){var e=Te(n.user.getAll()),t=Te(Le);return{id:Object(b.e)(),date:ve.a.date.between(r,c).toISOString(),message:t,user:e.id}}));return s}function We(){return(We=Object(c.a)(Object(r.a)().mark((function e(){return Object(r.a)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:e.next=3;break;case 3:be.dispatch(C()),o.a.render(Object(N.jsx)(a.a.StrictMode,{children:Object(N.jsx)(j.a,{store:be,children:Object(N.jsx)(le,{})})}),document.getElementById("root"));case 5:case"end":return e.stop()}}),e)})))).apply(this,arguments)}!function(){We.apply(this,arguments)}()},147:function(e,t,n){}},[[1325,1,2]]]);
//# sourceMappingURL=main.515efb0b.chunk.js.map