(function(e){function t(t){for(var o,r,s=t[0],i=t[1],l=t[2],d=0,m=[];d<s.length;d++)r=s[d],Object.prototype.hasOwnProperty.call(a,r)&&a[r]&&m.push(a[r][0]),a[r]=0;for(o in i)Object.prototype.hasOwnProperty.call(i,o)&&(e[o]=i[o]);u&&u(t);while(m.length)m.shift()();return c.push.apply(c,l||[]),n()}function n(){for(var e,t=0;t<c.length;t++){for(var n=c[t],o=!0,s=1;s<n.length;s++){var i=n[s];0!==a[i]&&(o=!1)}o&&(c.splice(t--,1),e=r(r.s=n[0]))}return e}var o={},a={app:0},c=[];function r(t){if(o[t])return o[t].exports;var n=o[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,r),n.l=!0,n.exports}r.m=e,r.c=o,r.d=function(e,t,n){r.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},r.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},r.t=function(e,t){if(1&t&&(e=r(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(r.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)r.d(n,o,function(t){return e[t]}.bind(null,o));return n},r.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return r.d(t,"a",t),t},r.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},r.p="/vue_peerjs_live/";var s=window["webpackJsonp"]=window["webpackJsonp"]||[],i=s.push.bind(s);s.push=t,s=s.slice();for(var l=0;l<s.length;l++)t(s[l]);var u=i;c.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("56d7")},2997:function(e,t,n){"use strict";n("ac50")},"2e06":function(e,t,n){"use strict";n("b46e")},"43cc":function(e,t,n){},"54bd":function(e,t,n){},"56d7":function(e,t,n){"use strict";n.r(t);n("e260"),n("e6cf"),n("cca6"),n("a79d");var o=n("7a23"),a={id:"nav"},c=Object(o["h"])("div",{class:"fixed-top text-secondary bg-transparent text-center text-monospace py-1 m-0"},[Object(o["h"])("h3",null,"Gowtham")],-1),r={id:"router_content ",class:"mx-5"};function s(e,t,n,s,i,l){var u=Object(o["x"])("Navigation"),d=Object(o["x"])("router-view");return Object(o["q"])(),Object(o["d"])("div",a,[c,Object(o["h"])(u),Object(o["h"])("div",r,[Object(o["h"])(d)])])}var i=n("1da1"),l=(n("96cf"),n("5319"),n("ac1f"),Object(o["H"])("data-v-266b88da"));Object(o["t"])("data-v-266b88da");var u={id:"navigation",class:""},d={class:"navbar navbar-expand-lg navbar-light text-monospace font-weight-bold fixed-bottom mb-2 bg-transparent"},m=Object(o["h"])("button",{class:"navbar-toggler  ",type:"button","data-toggle":"collapse","data-target":"#navbarSupportedContent","aria-controls":"navbarSupportedContent","aria-expanded":"false","aria-label":"Toggle navigation"},[Object(o["h"])("span",{class:"navbar-toggler-icon"})],-1),h={class:"w-100 collapse navbar-collapse",id:"navbarSupportedContent"},b={class:"navbar-nav"},p={class:" nav-item   bg-primary-opacity text-center py-1 mt-1"},f=Object(o["g"])("Home"),g={key:0,class:" nav-item   bg-primary-opacity text-center py-1 mt-1"},v=Object(o["g"])("Chat"),O={key:1,class:" nav-item   bg-primary-opacity text-center py-1 mt-1"},j=Object(o["g"])("Call"),y={key:2,class:" nav-item   bg-primary-opacity text-center py-1 mt-1"},w=Object(o["g"])("Video"),x={key:3,class:" nav-item   bg-primary-opacity text-center py-1 mt-1 float-right"},U=Object(o["g"])("Login"),C={key:4,class:" nav-item   bg-primary-opacity text-center py-1 mt-1 float-right"},N=Object(o["g"])("Register"),_={key:5,class:" nav-item   bg-primary-opacity text-center py-1 mt-1 float-right"};Object(o["r"])();var k=l((function(e,t,n,a,c,r){var s=Object(o["x"])("router-link");return Object(o["q"])(),Object(o["d"])("div",u,[Object(o["h"])("nav",d,[m,Object(o["h"])("div",h,[Object(o["h"])("ul",b,[Object(o["h"])("li",p,[Object(o["h"])(s,{to:"home",class:"nav-link"},{default:l((function(){return[f]})),_:1})]),r.isAuth?(Object(o["q"])(),Object(o["d"])("li",g,[Object(o["h"])(s,{to:"chat",class:"nav-link"},{default:l((function(){return[v]})),_:1})])):Object(o["e"])("",!0),r.isAuth?(Object(o["q"])(),Object(o["d"])("li",O,[Object(o["h"])(s,{to:"call",class:"nav-link"},{default:l((function(){return[j]})),_:1})])):Object(o["e"])("",!0),r.isAuth?(Object(o["q"])(),Object(o["d"])("li",y,[Object(o["h"])(s,{to:"video",class:"nav-link"},{default:l((function(){return[w]})),_:1})])):Object(o["e"])("",!0),r.isAuth?Object(o["e"])("",!0):(Object(o["q"])(),Object(o["d"])("li",x,[Object(o["h"])(s,{to:"login",class:"nav-link"},{default:l((function(){return[U]})),_:1})])),r.isAuth?Object(o["e"])("",!0):(Object(o["q"])(),Object(o["d"])("li",C,[Object(o["h"])(s,{to:"register",class:"nav-link"},{default:l((function(){return[N]})),_:1})])),r.isAuth?(Object(o["q"])(),Object(o["d"])("li",_,[Object(o["h"])("a",{href:"",class:"nav-link",onClick:t[1]||(t[1]=Object(o["G"])((function(e){return r.logout()}),["prevent"]))},"Logout")])):Object(o["e"])("",!0)])])])])})),A=n("2591"),S={apiKey:"AIzaSyCfMH0GdAwy1xZkABmvv-gK8P8TSRfbWho",authDomain:"vue-webrtc-chat.firebaseapp.com",projectId:"vue-webrtc-chat",storageBucket:"vue-webrtc-chat.appspot.com",messagingSenderId:"772500951736",appId:"1:772500951736:web:cac2c82c150fb018e25a4d"},T=A["a"].initializeApp(S),R=T.firestore(),E={name:"Navigation",computed:{isAuth:function(){return console.log("NNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNn1111",this.$store.getters.getIsAuth),this.$store.getters.getIsAuth}},methods:{logout:function(){var e=this;A["a"].auth().signOut().then((function(){e.$store.commit("setName",null),e.auth_user=null,console.log("Logged out.."),e.$store.commit("setUser",null),e.$store.commit("setIsAuth",!1),e.$router.replace("login")})).catch((function(e){Swal.fire({title:"Error!",text:e.message,type:"error"})}))}}};n("c050");E.render=k,E.__scopeId="data-v-266b88da";var $=E,I=n("a0bc"),q=n.n(I),L=n("3d20"),M=n.n(L),P={data:function(){return{name:"Gowtham",uuid:null,peer:null,auth_user:null}},components:{Navigation:$},beforeCreate:function(){var e=this;A["a"].auth().onAuthStateChanged(function(){var t=Object(i["a"])(regeneratorRuntime.mark((function t(n){var o,a;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:if(!n){t.next=13;break}return n.uid,e.auth_user=n,console.log("USER IS ",n),t.next=6,R.collection("users").doc(n.uid).get();case 6:o=t.sent,a={displayName:o.data().displayName,email:o.data().email,uid:o.data().uid,uuid:o.data().uuid},e.$store.commit("setUser",a),e.$store.commit("setIsAuth",!0),e.$router.replace("/home"),t.next=14;break;case 13:e.$router.push("login");case 14:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}())}};n("d26f");P.render=s;var V=P,H=(n("b0c0"),n("d81d"),n("4de4"),n("5502")),D=n("6c02"),z=Object(o["H"])("data-v-c4ea735a");Object(o["t"])("data-v-c4ea735a");var B={class:"home",id:"home"},W={class:"text-primary"},F=Object(o["h"])("br",null,null,-1),G={class:"row height-half"},K={class:"col-md-5 col-sm-12 rounded ml-3 "},J={class:"row my-5"},Y={class:"col-md-6 col-sm-12 text-center mb-3"},Z=Object(o["h"])("div",{class:"col-md-6 col-sm-12 text-center mb-3"},[Object(o["h"])("button",{type:"button",class:"btn btn-outline-secondary text-bold-800 text-danger","data-toggle":"modal","data-target":"#connectUsingLink"}," Connect Using Link ")],-1),Q={class:" col-md-5 height-half col-md-6 col-sm-12 rounded mr-1 my-5 "},X={class:" opacity-half px-3  rounded  "},ee=Object(o["h"])("h2",{class:"text-monospace pt-2 text-primary text-center"},"Connections",-1),te={key:0,class:" pb-2 h-75 pr-3 users"},ne={class:"modal fade",id:"connectUsingLink",tabindex:"-1","aria-labelledby":"connectUsingLink2","aria-hidden":"true"},oe={class:"modal-dialog"},ae={class:"modal-content"},ce=Object(o["h"])("div",{class:"modal-header"},[Object(o["h"])("h5",{class:"modal-title",id:"connectUsingLink2"},"Connect Via Link"),Object(o["h"])("button",{type:"button",class:"close","data-dismiss":"modal","aria-label":"Close"},[Object(o["h"])("span",{"aria-hidden":"true"},"×")])],-1),re={class:"modal-body"},se={class:"form-group"},ie=Object(o["h"])("label",{for:"exampleInputText"},"Connection link",-1),le=Object(o["h"])("small",{id:"urlHelp",class:"form-text text-muted"},"We'll never share your url with anyone else.",-1),ue={class:"modal-footer"},de=Object(o["h"])("button",{type:"button",class:"btn btn-secondary","data-dismiss":"modal"},"Close",-1);Object(o["r"])();var me=z((function(e,t,n,a,c,r){return Object(o["q"])(),Object(o["d"])("div",B,[Object(o["h"])("small",W,"Welcome Home "+Object(o["z"])(r.authUser.displayName)+"..",1),F,Object(o["h"])("div",G,[Object(o["h"])("div",K,[Object(o["h"])("div",J,[Object(o["h"])("div",Y,[Object(o["h"])("button",{class:"btn btn-outline-secondary text-bold-800 text-danger",onClick:t[1]||(t[1]=function(e){return r.generateConnectionLink()})}," Generate Connection Link ")]),Z])]),Object(o["h"])("div",Q,[Object(o["h"])("div",X,[ee,r.allUsers?(Object(o["q"])(),Object(o["d"])("div",te,[(Object(o["q"])(!0),Object(o["d"])(o["a"],null,Object(o["w"])(r.allUsers,(function(e){return Object(o["q"])(),Object(o["d"])("div",{key:e.id,class:"zoom-hover bold-hover rounded p-2 m-1 opacity-75 text-primary"},Object(o["z"])(e.displayName),1)})),128))])):Object(o["e"])("",!0)])])]),Object(o["h"])("div",ne,[Object(o["h"])("div",oe,[Object(o["h"])("div",ae,[ce,Object(o["h"])("div",re,[Object(o["h"])("form",null,[Object(o["h"])("div",se,[ie,Object(o["E"])(Object(o["h"])("input",{type:"url",class:"form-control",id:"exampleInputText","onUpdate:modelValue":t[2]||(t[2]=function(e){return c.addConnectionLink=e}),"aria-describedby":"urlHelp"},null,512),[[o["C"],c.addConnectionLink]]),le])])]),Object(o["h"])("div",ue,[de,Object(o["h"])("button",{type:"button",class:"btn btn-primary",onClick:t[3]||(t[3]=function(e){return r.connectUsingLink()})},"Save changes")])])])])])})),he=(n("2b3d"),n("d3b7"),n("3ca3"),n("ddb0"),{name:"Home",data:function(){return{name:"",message:null,user:null,addConnectionLink:null}},computed:{displayName:function(){return this.$store.getters.getDisplayName},authUser:function(){return this.$store.getters.getUser},isAuth:function(){return this.$store.getters.getIsAuth},allUsers:function(){var e=this.$store.getters.getAllUsers;return e}},created:function(){console.log("My Peer id is: \n",this.authUser.uuid),console.log("Home page is Created"),this.$store.dispatch("allUsers",this.authUser.uid)},components:{},methods:{changeName:function(){this.$store.commit("changeName",this.name)},generateConnectionLink:function(){M.a.fire({title:"Connection Link",text:window.location.href+"?c=".concat(this.authUser.uid),type:"success",confirmButtonText:"Cool"})},connectUsingLink:function(){console.log("connectUsingLink "),console.log(this.addConnectionLink);var e=this.addConnectionLink,t=new URL(e).searchParams,n=t.get("c");console.log("sender_uid ",n),document.querySelector(".close").click();var o={authUser:this.authUser.uid,sender_uid:n};console.log(o),console.log(")))))))))))))))))))))))))))))))"),console.log(this.authUser.uid,"(((((((((((((((((((((((((((((((((",n),this.$store.dispatch("createConnection",o)}}});n("5a4b");he.render=me,he.__scopeId="data-v-c4ea735a";var be=he,pe=Object(o["H"])("data-v-36438950");Object(o["t"])("data-v-36438950");var fe={class:"chat",id:"chat"},ge={class:"text-primary"},ve={class:"row d-none"},Oe={class:"col-lg-4 col-md-6 col-sm-12 border border-white pt-4 "},je={class:"form-group "},ye=Object(o["h"])("label",{for:"name"},"Name",-1),we={class:"form-group"},xe={class:"row text-primary "},Ue={class:"rounded col-lg-4 col-md-6 col-sm-12 shadow-sm pt-4 opacity-half float-right "},Ce={class:"form-group "},Ne={for:"connect_to"},_e=Object(o["h"])("option",{value:"none"},"Select any user",-1),ke={class:"form-group mt-2"},Ae=Object(o["h"])("label",{for:"message"},"Message",-1),Se={class:"form-group"},Te={class:"form-group "};Object(o["r"])();var Re=pe((function(e,t,n,a,c,r){return Object(o["q"])(),Object(o["d"])("div",fe,[Object(o["h"])("div",ge,[Object(o["h"])("small",null,"Welcome "+Object(o["z"])(r.authUser.displayName)+" to Chat place..",1)]),Object(o["h"])("div",ve,[Object(o["h"])("div",Oe,[Object(o["h"])("div",je,[ye,Object(o["E"])(Object(o["h"])("input",{type:"text",class:"form-control",name:"displayName","onUpdate:modelValue":t[1]||(t[1]=function(e){return c.displayName=e})},null,512),[[o["C"],c.displayName]])]),Object(o["h"])("div",we,[Object(o["h"])("button",{class:"rounded btn btn-danger",onClick:t[2]||(t[2]=function(e){return r.changeName()})},"CHnage")])])]),Object(o["h"])("div",xe,[Object(o["h"])("div",Ue,[Object(o["h"])("div",Ce,[Object(o["h"])("label",Ne,"Connect to "+Object(o["z"])(c.connectTo),1),Object(o["E"])(Object(o["h"])("select",{id:"selectUser","onUpdate:modelValue":t[3]||(t[3]=function(e){return c.connectTo=e}),class:"form-control"},[_e,(Object(o["q"])(!0),Object(o["d"])(o["a"],null,Object(o["w"])(r.allUsers,(function(e){return Object(o["q"])(),Object(o["d"])("option",{key:e.uid,value:e.uuid},Object(o["z"])(e.displayName),9,["value"])})),128))],512),[[o["B"],c.connectTo]])]),Object(o["h"])("div",ke,[Ae,Object(o["E"])(Object(o["h"])("textarea",{class:"float-right form-control mb-2","onUpdate:modelValue":t[4]||(t[4]=function(e){return c.message=e}),name:"message",cols:"30",rows:"3",placeholder:"Send some message",onKeyup:t[5]||(t[5]=Object(o["F"])((function(e){return r.connectSendMessage()}),["enter"]))},null,544),[[o["C"],c.message,void 0,{trim:!0}]])]),Object(o["h"])("div",Se,[Object(o["h"])("div",Te,[Object(o["h"])("button",{class:"rounded btn btn-primary",onClick:t[6]||(t[6]=function(e){return r.connectSendMessage()})},"Send Message")])])])])])})),Ee={name:"Chat",data:function(){return{displayName:"",peer:null,connectTo:null,message:null,selectedUser:null}},computed:{authUser:function(){return this.$store.getters.getUser},isAuth:function(){return this.$store.getters.getIsAuth},allUsers:function(){var e=this.$store.getters.getAllUsers;return e}},created:function(){var e=this.authUser;console.log("My Peer id is: \n",e.uuid),this.name=this.$store.getters.getName,this.peer=new q.a(this.authUser.uuid),this.peer.on("connection",(function(e){M.a.fire({title:"Connected successfully",type:"success",confirmButtonText:"Cool"}),e.on("data",(function(e){M.a.fire({title:"Received Message",text:e,type:"success",confirmButtonText:"Cool"}),console.log("Received this message: ".concat(e))}))}))},components:{},methods:{changeName:function(){this.$store.commit("changeName",this.displayName)},connectSendMessage:function(){var e=this,t=this.peer.connect(this.connectTo);t.on("open",(function(){t.send(e.message),console.log("hi Connection opened  and Message Sent!"),e.message=""}))}}};n("61b8");Ee.render=Re,Ee.__scopeId="data-v-36438950";var $e=Ee,Ie=Object(o["H"])("data-v-5997878f");Object(o["t"])("data-v-5997878f");var qe={class:"call",id:"call"},Le={class:"text-primary"},Me=Object(o["g"])("Welcome to "),Pe=Object(o["h"])("i",null,"Audio Call",-1),Ve={class:"row text-primary "},He={class:"rounded col-lg-4 col-md-6 col-sm-12 shadow-sm pt-4 opacity-half float-right"},De={class:"form-group "},ze={for:"connect_to"},Be=Object(o["h"])("option",{value:"none"},"Select any user",-1),We={class:"form-group d-none"},Fe=Object(o["h"])("label",{for:"message"},"Message",-1),Ge={class:"row"},Ke={class:"form-group col-6"},Je={class:"form-group col-6"},Ye=Object(o["f"])('<div class="row" data-v-5997878f><div class="call-area opacity-half mt-4 p-4 text-primary rounded col-lg-4 col-md-6 col-sm-12 shadow-sm pt-4 opacity-half float-right" data-v-5997878f><div class="" data-v-5997878f><h4 class=" text-monospace" data-v-5997878f>Incoming Voice here</h4></div><div class="" data-v-5997878f><audio src="" id="other_stream" controls data-v-5997878f></audio></div><div class=" mt-4" data-v-5997878f><h4 class=" text-monospace" data-v-5997878f>My Stream here</h4></div><div class="" data-v-5997878f><audio src="" id="my_stream" controls data-v-5997878f></audio></div></div></div>',1);Object(o["r"])();var Ze=Ie((function(e,t,n,a,c,r){return Object(o["q"])(),Object(o["d"])("div",qe,[Object(o["h"])("div",null,[Object(o["h"])("small",Le,[Me,Pe,Object(o["g"])(" "+Object(o["z"])(r.authUser.displayName)+"..",1)])]),Object(o["h"])("div",Ve,[Object(o["h"])("div",He,[Object(o["h"])("div",De,[Object(o["h"])("label",ze,"Connect to "+Object(o["z"])(c.connectTo),1),Object(o["E"])(Object(o["h"])("select",{id:"selectUser","onUpdate:modelValue":t[1]||(t[1]=function(e){return c.connectTo=e}),class:"form-control"},[Be,(Object(o["q"])(!0),Object(o["d"])(o["a"],null,Object(o["w"])(r.allUsers,(function(e){return Object(o["q"])(),Object(o["d"])("option",{key:e.uid,value:e.uuid},Object(o["z"])(e.displayName),9,["value"])})),128))],512),[[o["B"],c.connectTo]])]),Object(o["h"])("div",We,[Fe,Object(o["E"])(Object(o["h"])("textarea",{class:"float-right form-control mb-2","onUpdate:modelValue":t[2]||(t[2]=function(e){return c.message=e}),name:"message",cols:"30",rows:"3",placeholder:"Send some message",onKeyup:t[3]||(t[3]=Object(o["F"])((function(e){return r.connectCall()}),["enter"]))},null,544),[[o["C"],c.message]])]),Object(o["h"])("div",Ge,[Object(o["h"])("div",Ke,[Object(o["h"])("button",{class:"rounded btn btn-primary",onClick:t[4]||(t[4]=function(e){return r.connectCall()})},"Audio Call")]),Object(o["h"])("div",Je,[Object(o["h"])("button",{class:"rounded btn btn-danger float-right",onClick:t[5]||(t[5]=function(e){return r.disconnectCall()})},"Disconnect Call")])])])]),Ye])})),Qe={name:"Call",data:function(){return{name:"",peer:null,connectTo:null,message:null,strm:null,my_stream:null}},computed:{authUser:function(){return this.$store.getters.getUser},isAuth:function(){return this.$store.getters.getIsAuth},allUsers:function(){var e=this.$store.getters.getAllUsers;return e}},created:function(){var e=this,t=this.$store.getters.getUser;console.log("My Peer id is: \n",t.uuid),this.peer=new q.a(this.authUser.uuid),this.peer.on("call",function(){var t=Object(i["a"])(regeneratorRuntime.mark((function t(n){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,navigator.mediaDevices.getUserMedia({video:!1,audio:!0});case 2:e.my_stream=t.sent,console.log("this.my_stream"),console.log(e.my_stream),n.answer(e.my_stream),n.on("stream",(function(e){console.log("RemoteStream is"),console.log(e),document.querySelector("#other_stream").srcObject=e}));case 7:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()),this.peer.on("close",(function(){M.a.fire({title:"Connection status",text:"Peer connection is closed",type:"success",confirmButtonText:"Okay"})}))},methods:{connectCall:function(){var e=this;return Object(i["a"])(regeneratorRuntime.mark((function t(){var n;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return console.log("connectCall ()",e.connectTo),t.prev=1,e.peer||(e.peer=new q.a(e.authUser.uuid)),console.log("stream connectCall()"),t.next=6,navigator.mediaDevices.getUserMedia({video:!1,audio:!0});case 6:e.my_stream=t.sent,console.log(e.my_stream),document.querySelector("#my_stream").srcObject=e.my_stream,n=e.peer.call(e.connectTo,e.my_stream),n.on("stream",(function(e){console.log("remoteStream connectCall()"),console.log(e),document.querySelector("#other_stream").srcObject=e})),t.next=17;break;case 13:t.prev=13,t.t0=t["catch"](1),console.log("ERROR connectCall()"),console.log(t.t0.message);case 17:console.log("end");case 18:case"end":return t.stop()}}),t,null,[[1,13]])})))()},disconnectCall:function(){this.peer.destroy(),this.connectTo="none",document.querySelector("#other_stream").srcObject="",document.querySelector("#my_stream").srcObject="",console.log("this.peer is ",this.peer),console.log("this.connectTo is ",this.connectTo)}}};n("83ec");Qe.render=Ze,Qe.__scopeId="data-v-5997878f";var Xe=Qe,et=Object(o["H"])("data-v-6f8bba8a");Object(o["t"])("data-v-6f8bba8a");var tt={class:"video",id:"video"},nt={class:"text-primary"},ot=Object(o["g"])("Welcome to "),at=Object(o["h"])("i",null,"Video Call",-1),ct={class:"row mx-auto text-primary"},rt={class:"col-lg-4 col-md-6 col-sm-12 shadow-sm opacity-half pt-4 float-right"},st={class:"form-group "},it={for:"connect_to"},lt=Object(o["h"])("option",{value:"none"},"Select any user",-1),ut={class:"form-group d-none "},dt=Object(o["h"])("label",{for:"message"},"Message",-1),mt={class:"row"},ht={class:"form-group"},bt={class:"form-group col-6"},pt=Object(o["f"])('<div class="row rounded my-4" data-v-6f8bba8a><div class="call-area opacity-half mt-4 p-4 text-primary text-center col-lg-4 col-md-6 col-sm-12 shadow-sm pt-4 opacity-half float-right" data-v-6f8bba8a><div class="" data-v-6f8bba8a><h4 class=" text-monospace" data-v-6f8bba8a>Incoming Video here</h4></div><div class="" data-v-6f8bba8a><video id="other_stream" src="" width="300" height="200" controls data-v-6f8bba8a></video></div></div><hr data-v-6f8bba8a><div class="call-area opacity-half mt-4 p-4 text-primary text-center col-lg-4 col-md-6 col-sm-12 shadow-sm pt-4 opacity-half float-right" data-v-6f8bba8a><div class=" " data-v-6f8bba8a><h4 class=" text-monospace" data-v-6f8bba8a>My Stream here</h4></div><div class="" data-v-6f8bba8a><video id="my_stream" src="" width="300" height="200" controls data-v-6f8bba8a></video></div></div></div>',1);Object(o["r"])();var ft=et((function(e,t,n,a,c,r){return Object(o["q"])(),Object(o["d"])("div",tt,[Object(o["h"])("div",null,[Object(o["h"])("small",nt,[ot,at,Object(o["g"])(" "+Object(o["z"])(r.authUser.displayName)+"..",1)])]),Object(o["h"])("div",ct,[Object(o["h"])("div",rt,[Object(o["h"])("div",st,[Object(o["h"])("label",it,"Connect to "+Object(o["z"])(c.connectTo),1),Object(o["E"])(Object(o["h"])("select",{id:"selectUser","onUpdate:modelValue":t[1]||(t[1]=function(e){return c.connectTo=e}),class:"form-control"},[lt,(Object(o["q"])(!0),Object(o["d"])(o["a"],null,Object(o["w"])(r.allUsers,(function(e){return Object(o["q"])(),Object(o["d"])("option",{key:e.uid,value:e.uuid},Object(o["z"])(e.displayName),9,["value"])})),128))],512),[[o["B"],c.connectTo]])]),Object(o["h"])("div",ut,[dt,Object(o["E"])(Object(o["h"])("textarea",{class:"float-right","onUpdate:modelValue":t[2]||(t[2]=function(e){return c.message=e}),name:"message",cols:"30",rows:"3",placeholder:"Send some message",onKeyup:t[3]||(t[3]=Object(o["F"])((function(e){return r.connectCall()}),["enter"]))},null,544),[[o["C"],c.message]])]),Object(o["h"])("div",mt,[Object(o["h"])("div",ht,[Object(o["h"])("button",{class:"rounded btn btn-primary",onClick:t[4]||(t[4]=function(e){return r.connectCall()})},"Video Call")]),Object(o["h"])("div",bt,[Object(o["h"])("button",{class:"rounded btn btn-danger float-right",onClick:t[5]||(t[5]=function(e){return r.disconnectCall()})},"Disconnect Call")])])])]),pt])})),gt={name:"Video",data:function(){return{name:"",peer:null,connectTo:null,message:null,strm:null,my_stream:null}},computed:{authUser:function(){return this.$store.getters.getUser},isAuth:function(){return this.$store.getters.getIsAuth},allUsers:function(){var e=this.$store.getters.getAllUsers;return e}},created:function(){var e=this,t=this.$store.getters.getUser;console.log("My Peer id is: \n",t.uuid),this.peer=new q.a(this.authUser.uuid),this.peer.on("call",function(){var t=Object(i["a"])(regeneratorRuntime.mark((function t(n){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,navigator.mediaDevices.getUserMedia({video:!0,audio:!0});case 2:e.my_stream=t.sent,console.log("this.my_stream"),console.log(e.my_stream),n.answer(e.my_stream),n.on("stream",(function(e){console.log("RemoteStream is"),console.log(e),document.querySelector("#other_stream").srcObject=e}));case 7:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()),this.peer.on("close",(function(){M.a.fire({title:"Connection status",text:"Peer connection is closed",type:"success",confirmButtonText:"Okay"})}))},methods:{connectCall:function(){var e=this;return Object(i["a"])(regeneratorRuntime.mark((function t(){var n;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return console.log("connectCall ()",e.connectTo),t.prev=1,e.peer||(e.peer=new q.a(e.authUser.uuid)),console.log("stream connectCall()"),t.next=6,navigator.mediaDevices.getUserMedia({video:!0,audio:!0});case 6:e.my_stream=t.sent,console.log(e.my_stream),document.querySelector("#my_stream").srcObject=e.my_stream,n=e.peer.call(e.connectTo,e.my_stream),n.on("stream",(function(e){console.log("remoteStream connectCall()"),console.log(e),document.querySelector("#other_stream").srcObject=e})),t.next=17;break;case 13:t.prev=13,t.t0=t["catch"](1),console.log("ERROR"),console.log(t.t0.message);case 17:console.log("end");case 18:case"end":return t.stop()}}),t,null,[[1,13]])})))()},disconnectCall:function(){this.peer.destroy(),this.connectTo="none",document.querySelector("#other_stream").srcObject="",document.querySelector("#my_stream").srcObject="",console.log("this.peer is ",this.peer),console.log("this.connectTo is ",this.connectTo)}}};n("2997");gt.render=ft,gt.__scopeId="data-v-6f8bba8a";var vt=gt,Ot=Object(o["H"])("data-v-e7ff6574");Object(o["t"])("data-v-e7ff6574");var jt={class:"chat",id:"chat"},yt=Object(o["h"])("div",{class:"text-primary"},[Object(o["h"])("small",null,"Welcome to Login place..")],-1),wt={class:"row text-primary "},xt={class:"rounded col-lg-4 col-md-6 col-sm-12 shadow-sm pt-4 opacity-half float-right "},Ut={class:"form-group "},Ct=Object(o["h"])("label",{for:"email"},"Email",-1),Nt={class:"form-group "},_t=Object(o["h"])("label",{for:"password"},"Password",-1),kt={class:"form-group"},At=Object(o["g"])("Create an account");Object(o["r"])();var St=Ot((function(e,t,n,a,c,r){var s=Object(o["x"])("router-link");return Object(o["q"])(),Object(o["d"])("div",jt,[yt,Object(o["h"])("div",wt,[Object(o["h"])("div",xt,[Object(o["h"])("div",Ut,[Ct,Object(o["E"])(Object(o["h"])("input",{type:"email",class:"form-control",name:"email","onUpdate:modelValue":t[1]||(t[1]=function(e){return c.email=e}),placeholder:"Enter email address"},null,512),[[o["C"],c.email]])]),Object(o["h"])("div",Nt,[_t,Object(o["E"])(Object(o["h"])("input",{type:"password",class:"form-control",name:"password","onUpdate:modelValue":t[2]||(t[2]=function(e){return c.password=e}),placeholder:"Enter password "},null,512),[[o["C"],c.password]])]),Object(o["h"])("div",kt,[Object(o["h"])("button",{class:"rounded btn btn-primary",onClick:t[3]||(t[3]=function(e){return r.login()})},"Login"),Object(o["h"])(s,{to:"/register",class:"rounded btn btn-primary float-right"},{default:Ot((function(){return[At]})),_:1})])])])])})),Tt={name:"login",data:function(){return{name:"",email:"",password:""}},created:function(){},components:{},methods:{login:function(){var e=this,t=this.email,n=this.password;A["a"].auth().signInWithEmailAndPassword(t,n).then(function(){var t=Object(i["a"])(regeneratorRuntime.mark((function t(n){var o,a,c;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return o=n.user,M.a.fire({title:"Logged in",text:"Welcome to CHat room",type:"success"}),console.log("Login user",o),t.next=5,R.collection("users").doc(o.uid).get();case 5:a=t.sent,c={displayName:a.data().displayName,email:a.data().email,uid:a.data().uid,uuid:a.data().uuid},e.$store.commit("setUser",c),e.$store.commit("setIsAuth",!0),e.$router.replace("/home");case 10:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()).catch((function(e){e.code;var t=e.message;M.a.fire({title:"Error",text:t,type:"error"})}))},changeName:function(){this.$store.commit("changeName",this.name)}}};n("c6f1");Tt.render=St,Tt.__scopeId="data-v-e7ff6574";var Rt=Tt,Et=Object(o["H"])("data-v-230cba2b");Object(o["t"])("data-v-230cba2b");var $t={class:"chat",id:"chat"},It=Object(o["h"])("div",{class:"text-primary"},[Object(o["h"])("small",null,"Welcome to Register place..")],-1),qt={class:"row text-primary "},Lt={class:"rounded col-lg-4 col-md-6 col-sm-12 shadow-sm pt-4 opacity-half float-right "},Mt={class:"form-group "},Pt=Object(o["h"])("label",{for:"name"},"UserName",-1),Vt={class:"form-group "},Ht=Object(o["h"])("label",{for:"email"},"Email",-1),Dt={class:"form-group "},zt=Object(o["h"])("label",{for:"password"},"Password",-1),Bt={class:"form-group"},Wt=Object(o["g"])("Already have account");Object(o["r"])();var Ft=Et((function(e,t,n,a,c,r){var s=Object(o["x"])("router-link");return Object(o["q"])(),Object(o["d"])("div",$t,[It,Object(o["h"])("div",qt,[Object(o["h"])("div",Lt,[Object(o["h"])("div",Mt,[Pt,Object(o["E"])(Object(o["h"])("input",{type:"name",class:"form-control",name:"displayName","onUpdate:modelValue":t[1]||(t[1]=function(e){return c.displayName=e}),placeholder:"Enter Username"},null,512),[[o["C"],c.displayName]])]),Object(o["h"])("div",Vt,[Ht,Object(o["E"])(Object(o["h"])("input",{type:"email",class:"form-control",name:"email","onUpdate:modelValue":t[2]||(t[2]=function(e){return c.email=e}),placeholder:"Enter email address"},null,512),[[o["C"],c.email]])]),Object(o["h"])("div",Dt,[zt,Object(o["E"])(Object(o["h"])("input",{type:"password",class:"form-control",name:"password","onUpdate:modelValue":t[3]||(t[3]=function(e){return c.password=e}),placeholder:"Enter password "},null,512),[[o["C"],c.password]])]),Object(o["h"])("div",Bt,[Object(o["h"])("button",{class:"rounded btn btn-primary",onClick:t[4]||(t[4]=function(e){return r.register()})},"Register"),Object(o["h"])(s,{to:"/login",class:"rounded btn btn-primary float-right"},{default:Et((function(){return[Wt]})),_:1})])])])])})),Gt=n("ec26"),Kt={name:"register",data:function(){return{displayName:"",email:"",password:"",uuid:null}},created:function(){},components:{},methods:{register:function(){var e=this,t=this.email,n=this.password;try{A["a"].auth().createUserWithEmailAndPassword(t,n).then((function(t){var n=t.user;e.uuid=Object(Gt["a"])(),n.updateProfile({displayName:e.displayName,uuid:e.uuid}).then((function(){console.log("then");var t={displayName:e.displayName,email:n.email,uid:n.uid,uuid:e.uuid};console.log(t),R.collection("users").doc(n.uid).set(t).then((function(){console.log("Users added in Then")})).catch((function(e){console.log("err.message",e.message)})),e.$store.commit("setUser",t),e.$store.commit("setIsAuth",!0)})).catch((function(e){console.log("catch",e.message),M.a.fire({title:"Error",text:e.message,type:"error"})})),console.log("Register create*** THEN"),e.$router.replace("/")})).catch((function(e){e.code;var t=e.message;console.log("Register create*** cat"),M.a.fire({title:"Error",text:t,type:"error"})}))}catch(o){console.log("db err",o.message)}},changeName:function(){this.$store.commit("changeName",this.name)}}};n("2e06");Kt.render=Ft,Kt.__scopeId="data-v-230cba2b";var Jt=Kt,Yt=Object(o["h"])("h1",{class:"text-center text-danger"},"Page Not Found",-1);function Zt(e,t,n,a,c,r){return Object(o["q"])(),Object(o["d"])("div",null,[Yt])}var Qt={name:"NotFound"};Qt.render=Zt;var Xt=Qt,en=[{path:"/",name:"h",component:V},{path:"/home",name:"home",component:be,meta:{}},{path:"/chat",name:"chat",component:$e,meta:{}},{path:"/call",name:"call",component:Xe,meta:{}},{path:"/video",name:"video",component:vt,meta:{}},{path:"/login",name:"login",component:Rt},{path:"/register",name:"register",component:Jt},{path:"/:catchAll(.*)",name:"not_found",component:Xt}],tn=Object(D["a"])({history:Object(D["b"])(),routes:en});tn.beforeEach((function(e,t,n){on.getters.getIsAuth?n():("login"==e.name||"register"==e.name?n():(console.log("11111111111111111111111111111111111111111111111111"),on.dispatch("dbAuthUser"),console.log("22222222222222222222222222222222222222222222222222")),console.log("Dispatched dbAuthUser from router else",e.name))}));var nn=tn,on=Object(H["a"])({state:{auth_displayName:"Chataroo",auth_email:"",uuid:"",authUser:null,isAuth:!1},getters:{getDisplayName:function(e){return console.log("getName"),e.isAuth?e.authUser.displayName:""},getUser:function(e){return console.log("get User()",e.authUser),e.authUser},getIsAuth:function(e){return console.log("get IsAuth()",e.isAuth),e.isAuth},getAllUsers:function(e){return console.log("get getAllUsers()",e.allUsers),e.allUsers}},mutations:{changeName:function(e,t){console.log("Change name",t),e.name=t},setUser:function(e,t){console.log("set User ",t),e.authUser=t},setUuid:function(e,t){e.uuid=t},setIsAuth:function(e,t){e.isAuth=t},setAllUsers:function(e,t){console.log("mutation ",t),e.allUsers=t}},actions:{allUsers:function(e,t){return Object(i["a"])(regeneratorRuntime.mark((function n(){var o;return regeneratorRuntime.wrap((function(n){while(1)switch(n.prev=n.next){case 0:return n.next=2,R.collection("users").doc(t).collection("connections").get();case 2:return n.sent,n.next=5,R.collection("users").doc(t).collection("connections").get().then((function(e){var t=e.docs.map((function(e){return e.data().newConnection}));return console.log("ACTION DOCUMENTS ",t),t}));case 5:return o=n.sent,o=o.filter((function(e){return void 0!==e})),console.log("___________ACTION DOCUMENTS___________ ",o),void 0==o&&null==o||(console.log("000000000000000000000000000000000000000",o),e.commit("setAllUsers",o)),n.abrupt("return",o);case 10:case"end":return n.stop()}}),n)})))()},createConnection:function(e,t){try{console.log("trytrytrytrytrytrytrytrytrytrytrytry",t);var n=null;R.collection("users").doc(t.sender_uid).get().then((function(o){var a=o.data(),c={displayName:a.displayName,email:a.email,uid:a.uid,uuid:a.uuid};console.log("SENDER IS ",a),n=a.displayName;R.collection("users").doc(t.authUser).collection("connections").doc(t.sender_uid).set({newConnection:c}).then((function(){return console.log("then createConnection Connection Created!!!")})).catch((function(e){return console.log("err is ",e.message)})),a=e.getters.getUser,c={displayName:a.displayName,email:a.email,uid:a.uid,uuid:a.uuid},R.collection("users").doc(t.sender_uid).collection("connections").doc(t.authUser).set({newConnection:c}).then((function(){return console.log("then createConnection Connection Created!!!")})).catch((function(e){return console.log("err is ",e.message)}));M.a.fire({title:"Connection created",text:"You can now contact ".concat(n," securely.."),type:"success",confirmButtonText:"Okay"})})).catch((function(e){return console.log(e.message)}))}catch(o){console.log("CATCH ERROR createCOnnection ||||| ",o.message)}},dbAuthUser:function(e){var t=this;return Object(i["a"])(regeneratorRuntime.mark((function n(){var o;return regeneratorRuntime.wrap((function(n){while(1)switch(n.prev=n.next){case 0:o=e.getters.getIsAuth,o||A["a"].auth().onAuthStateChanged(function(){var n=Object(i["a"])(regeneratorRuntime.mark((function n(o){var a,c;return regeneratorRuntime.wrap((function(n){while(1)switch(n.prev=n.next){case 0:if(!o){n.next=13;break}return o.uid,t.auth_user=o,console.log("USER IS ",o),n.next=6,R.collection("users").doc(o.uid).get();case 6:a=n.sent,c={displayName:a.data().displayName,email:a.data().email,uid:a.data().uid,uuid:a.data().uuid},e.commit("setUser",c),e.commit("setIsAuth",!0),nn.replace("/home"),n.next=13;break;case 13:case"end":return n.stop()}}),n)})));return function(e){return n.apply(this,arguments)}}());case 2:case"end":return n.stop()}}),n)})))()}},modules:{}});n("4989");n("1157");Object(o["c"])(V).use(on).use(nn).mount("#app")},"5a4b":function(e,t,n){"use strict";n("ee37")},"5e11":function(e,t){function n(e){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}n.keys=function(){return[]},n.resolve=n,e.exports=n,n.id="5e11"},"5e69":function(e,t,n){},"61b8":function(e,t,n){"use strict";n("5e69")},"83ec":function(e,t,n){"use strict";n("fae7")},ac50:function(e,t,n){},b3a2:function(e,t,n){},b46e:function(e,t,n){},c050:function(e,t,n){"use strict";n("54bd")},c6f1:function(e,t,n){"use strict";n("43cc")},d26f:function(e,t,n){"use strict";n("b3a2")},ee37:function(e,t,n){},fae7:function(e,t,n){}});
//# sourceMappingURL=app.caf2f776.js.map