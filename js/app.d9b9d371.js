(function(e){function t(t){for(var a,o,s=t[0],i=t[1],l=t[2],d=0,m=[];d<s.length;d++)o=s[d],Object.prototype.hasOwnProperty.call(r,o)&&r[o]&&m.push(r[o][0]),r[o]=0;for(a in i)Object.prototype.hasOwnProperty.call(i,a)&&(e[a]=i[a]);u&&u(t);while(m.length)m.shift()();return c.push.apply(c,l||[]),n()}function n(){for(var e,t=0;t<c.length;t++){for(var n=c[t],a=!0,s=1;s<n.length;s++){var i=n[s];0!==r[i]&&(a=!1)}a&&(c.splice(t--,1),e=o(o.s=n[0]))}return e}var a={},r={app:0},c=[];function o(t){if(a[t])return a[t].exports;var n=a[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,o),n.l=!0,n.exports}o.m=e,o.c=a,o.d=function(e,t,n){o.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},o.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},o.t=function(e,t){if(1&t&&(e=o(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(o.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var a in e)o.d(n,a,function(t){return e[t]}.bind(null,a));return n},o.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return o.d(t,"a",t),t},o.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},o.p="/vue_peerjs_live/";var s=window["webpackJsonp"]=window["webpackJsonp"]||[],i=s.push.bind(s);s.push=t,s=s.slice();for(var l=0;l<s.length;l++)t(s[l]);var u=i;c.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("56d7")},"01ab":function(e,t,n){},1301:function(e,t,n){"use strict";n("01ab")},1906:function(e,t,n){"use strict";n("62a5")},2315:function(e,t,n){"use strict";n("ec39")},"55c4":function(e,t,n){},"56d7":function(e,t,n){"use strict";n.r(t);n("e260"),n("e6cf"),n("cca6"),n("a79d");var a=n("7a23"),r={id:"nav"},c=Object(a["h"])("div",{class:"fixed-top text-secondary bg-transparent text-center text-monospace py-1 m-0"},[Object(a["h"])("h3",null,"Gowtham")],-1),o={id:"router_content ",class:"mx-5"};function s(e,t,n,s,i,l){var u=Object(a["x"])("Navigation"),d=Object(a["x"])("router-view");return Object(a["q"])(),Object(a["d"])("div",r,[c,Object(a["h"])(u),Object(a["h"])("div",o,[Object(a["h"])(d)])])}var i=n("1da1"),l=(n("96cf"),Object(a["H"])("data-v-65068567"));Object(a["t"])("data-v-65068567");var u={id:"navigation",class:""},d={class:"navbar navbar-expand-lg navbar-light text-monospace font-weight-bold fixed-bottom mb-2 bg-transparent"},m=Object(a["h"])("button",{class:"navbar-toggler  ",type:"button",id:"nav-tgl","data-toggle":"collapse","data-target":"#navbarSupportedContent","aria-controls":"navbarSupportedContent","aria-expanded":"false","aria-label":"Toggle navigation"},[Object(a["h"])("span",{class:"navbar-toggler-icon"})],-1),h={class:"w-75 collapse navbar-collapse",id:"navbarSupportedContent"},b={class:"navbar-nav"},p={class:" nav-item   bg-primary-opacity text-center py-1 mt-1"},f=Object(a["g"])("Home"),g={key:0,class:" nav-item   bg-primary-opacity text-center py-1 mt-1"},v=Object(a["g"])("Chat"),O={key:1,class:" nav-item   bg-primary-opacity text-center py-1 mt-1"},j=Object(a["g"])("Call"),y={key:2,class:" nav-item   bg-primary-opacity text-center py-1 mt-1"},w=Object(a["g"])("Video"),U={key:3,class:" nav-item   bg-primary-opacity text-center py-1 mt-1 float-right"},x=Object(a["g"])("Login"),k={key:4,class:" nav-item   bg-primary-opacity text-center py-1 mt-1 float-right"},_=Object(a["g"])("Register"),C={key:5,class:" nav-item   bg-primary-opacity text-center py-1 mt-1 float-right"};Object(a["r"])();var N=l((function(e,t,n,r,c,o){var s=Object(a["x"])("router-link");return Object(a["q"])(),Object(a["d"])("div",u,[Object(a["h"])("nav",d,[m,Object(a["h"])("div",h,[Object(a["h"])("ul",b,[Object(a["h"])("li",p,[Object(a["h"])(s,{to:"home",class:"nav-link"},{default:l((function(){return[f]})),_:1})]),o.isAuth?(Object(a["q"])(),Object(a["d"])("li",g,[Object(a["h"])(s,{to:"chat",class:"nav-link"},{default:l((function(){return[v]})),_:1})])):Object(a["e"])("",!0),o.isAuth?(Object(a["q"])(),Object(a["d"])("li",O,[Object(a["h"])(s,{to:"call",class:"nav-link"},{default:l((function(){return[j]})),_:1})])):Object(a["e"])("",!0),o.isAuth?(Object(a["q"])(),Object(a["d"])("li",y,[Object(a["h"])(s,{to:"video",class:"nav-link"},{default:l((function(){return[w]})),_:1})])):Object(a["e"])("",!0),o.isAuth?Object(a["e"])("",!0):(Object(a["q"])(),Object(a["d"])("li",U,[Object(a["h"])(s,{to:"login",class:"nav-link"},{default:l((function(){return[x]})),_:1})])),o.isAuth?Object(a["e"])("",!0):(Object(a["q"])(),Object(a["d"])("li",k,[Object(a["h"])(s,{to:"register",class:"nav-link"},{default:l((function(){return[_]})),_:1})])),o.isAuth?(Object(a["q"])(),Object(a["d"])("li",C,[Object(a["h"])("a",{href:"",class:"nav-link",onClick:t[1]||(t[1]=Object(a["G"])((function(e){return o.logout()}),["prevent"]))},"Logout")])):Object(a["e"])("",!0)])])])])})),A=n("2591"),S={apiKey:"AIzaSyCfMH0GdAwy1xZkABmvv-gK8P8TSRfbWho",authDomain:"vue-webrtc-chat.firebaseapp.com",projectId:"vue-webrtc-chat",storageBucket:"vue-webrtc-chat.appspot.com",messagingSenderId:"772500951736",appId:"1:772500951736:web:cac2c82c150fb018e25a4d"},q=A["a"].initializeApp(S),E=q.firestore(),$={name:"Navigation",computed:{isAuth:function(){return this.$store.getters.getIsAuth}},methods:{logout:function(){var e=this;A["a"].auth().signOut().then((function(){e.$store.commit("changeName",null),e.auth_user=null,console.log("Logged out.."),e.$store.commit("setUser",null),e.$store.commit("setIsAuth",!1),e.$router.push("login")})).catch((function(e){Swal.fire({title:"Error!",text:e.message,type:"error"})}))}}};n("e83a");$.render=N,$.__scopeId="data-v-65068567";var T=$,I=n("a0bc"),M=n.n(I),L=n("3d20"),R=n.n(L),P={data:function(){return{name:"Gowtham",uuid:null,peer:null,auth_user:null}},components:{Navigation:T},beforeCreate:function(){var e=this;A["a"].auth().onAuthStateChanged(function(){var t=Object(i["a"])(regeneratorRuntime.mark((function t(n){var a,r;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:if(!n){t.next=12;break}return n.uid,e.auth_user=n,t.next=5,E.collection("users").doc(n.uid).get();case 5:a=t.sent,r={displayName:a.data().displayName,email:a.data().email,uid:a.data().uid,uuid:a.data().uuid},e.$store.commit("setUser",r),e.$store.commit("setIsAuth",!0),e.$store.dispatch("dbAuthUser"),t.next=13;break;case 12:e.$router.push("login");case 13:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}())}};n("d2ef");P.render=s;var V=P,H=(n("b0c0"),n("d81d"),n("4de4"),n("5502")),z=(n("5319"),n("ac1f"),n("6c02")),D=Object(a["H"])("data-v-d92f96c8");Object(a["t"])("data-v-d92f96c8");var W={class:"home",id:"home"},B={key:0,class:"text-primary"},G=Object(a["h"])("br",null,null,-1),F={class:"row height-half"},K={class:"col-md-5 col-sm-12 rounded ml-3 "},J={class:"row my-5"},Y={class:"col-md-6 col-sm-12 text-center mb-3"},Z=Object(a["h"])("div",{class:"col-md-6 col-sm-12 text-center mb-3"},[Object(a["h"])("button",{type:"button",class:"btn btn-outline-secondary text-bold-800 text-danger","data-toggle":"modal","data-target":"#connectUsingLink"}," Connect Using Link ")],-1),Q={class:" col-md-5 height-half col-md-6 col-sm-12 rounded mr-1 my-5 "},X={class:" opacity-half px-3  rounded  "},ee=Object(a["h"])("h2",{class:"text-monospace pt-2 text-primary text-center"},"Connections",-1),te={key:0,class:" pb-2 h-75 pr-3 users"},ne={class:"ml-2"},ae={class:"modal fade",id:"connectUsingLink",tabindex:"-1","aria-labelledby":"connectUsingLink2","aria-hidden":"true"},re={class:"modal-dialog"},ce={class:"modal-content"},oe=Object(a["h"])("div",{class:"modal-header"},[Object(a["h"])("h5",{class:"modal-title",id:"connectUsingLink2"},"Connect Via Link"),Object(a["h"])("button",{type:"button",class:"close","data-dismiss":"modal","aria-label":"Close"},[Object(a["h"])("span",{"aria-hidden":"true"},"×")])],-1),se={class:"modal-body"},ie={class:"form-group"},le=Object(a["h"])("label",{for:"exampleInputText"},"Connection link",-1),ue=Object(a["h"])("small",{id:"urlHelp",class:"form-text text-muted"},"We'll never share your url with anyone else.",-1),de={class:"modal-footer"},me=Object(a["h"])("button",{type:"button",class:"btn btn-secondary","data-dismiss":"modal"},"Close",-1);Object(a["r"])();var he=D((function(e,t,n,r,c,o){return Object(a["q"])(),Object(a["d"])("div",W,[o.authUser.displayName?(Object(a["q"])(),Object(a["d"])("small",B,"Welcome to Home "+Object(a["z"])(o.authUser.displayName)+" ..",1)):Object(a["e"])("",!0),G,Object(a["h"])("div",F,[Object(a["h"])("div",K,[Object(a["h"])("div",J,[Object(a["h"])("div",Y,[Object(a["h"])("button",{class:"btn btn-outline-secondary text-bold-800 text-danger",onClick:t[1]||(t[1]=function(e){return o.generateConnectionLink()})}," Get Connection Link ")]),Z])]),Object(a["h"])("div",Q,[Object(a["h"])("div",X,[ee,o.allUsers?(Object(a["q"])(),Object(a["d"])("div",te,[(Object(a["q"])(!0),Object(a["d"])(a["a"],null,Object(a["w"])(o.allUsers,(function(e){return Object(a["q"])(),Object(a["d"])("div",{key:e.id,class:"zoom-hover bold-hover rounded p-2 m-1 opacity-75 text-primary"},[Object(a["h"])("span",ne,Object(a["z"])(e.displayName),1)])})),128))])):Object(a["e"])("",!0)])])]),Object(a["h"])("div",ae,[Object(a["h"])("div",re,[Object(a["h"])("div",ce,[oe,Object(a["h"])("div",se,[Object(a["h"])("form",null,[Object(a["h"])("div",ie,[le,Object(a["E"])(Object(a["h"])("input",{type:"url",class:"form-control",id:"exampleInputText","onUpdate:modelValue":t[2]||(t[2]=function(e){return c.addConnectionLink=e}),"aria-describedby":"urlHelp"},null,512),[[a["C"],c.addConnectionLink]]),ue])])]),Object(a["h"])("div",de,[me,Object(a["h"])("button",{type:"button",class:"btn btn-primary",onClick:t[3]||(t[3]=function(e){return o.connectUsingLink()})},"Save changes")])])])])])})),be=(n("2b3d"),n("d3b7"),n("3ca3"),n("ddb0"),{name:"Home",data:function(){return{name:"",message:null,user:null,addConnectionLink:null}},computed:{displayName:function(){return this.$store.getters.getDisplayName},authUser:function(){return this.$store.getters.getUser},isAuth:function(){return this.$store.getters.getIsAuth},allUsers:function(){var e=this.$store.getters.getAllUsers;return e}},created:function(){console.log("My Peer id is: \n",this.authUser.uuid),this.$store.dispatch("allUsers",this.authUser.uid)},components:{},methods:{changeName:function(){this.$store.commit("changeName",this.name)},generateConnectionLink:function(){R.a.fire({title:"Connection Link",text:window.location.href+"?c=".concat(this.authUser.uid),type:"success",confirmButtonText:"Cool"})},connectUsingLink:function(){var e=this.addConnectionLink,t=new URL(e).searchParams,n=t.get("c");document.querySelector(".close").click();var a={authUser:this.authUser.uid,sender_uid:n};this.$store.dispatch("createConnection",a)}}});n("2315");be.render=he,be.__scopeId="data-v-d92f96c8";var pe=be,fe=Object(a["H"])("data-v-0dc43185");Object(a["t"])("data-v-0dc43185");var ge={class:"chat",id:"chat"},ve={class:"text-primary"},Oe={key:0,class:"text-primary"},je={class:"row d-none"},ye={class:"col-lg-4 col-md-6 col-sm-12 border border-white pt-4 "},we={class:"form-group "},Ue=Object(a["h"])("label",{for:"name"},"Name",-1),xe={class:"form-group"},ke={class:"row text-primary "},_e={class:"rounded col-lg-4 col-md-6 col-sm-12 shadow-sm pt-4 opacity-half float-right "},Ce={class:"form-group "},Ne={for:"connect_to"},Ae={key:0,class:"text-danger"},Se=Object(a["h"])("option",{value:"unknown"},"Select any user",-1),qe={class:"form-group mt-2"},Ee={for:"message"},$e=Object(a["g"])("Message "),Te={key:0,class:"text-danger"},Ie={class:"form-group"},Me={class:"form-group "};Object(a["r"])();var Le=fe((function(e,t,n,r,c,o){return Object(a["q"])(),Object(a["d"])("div",ge,[Object(a["h"])("div",ve,[o.authUser?(Object(a["q"])(),Object(a["d"])("small",Oe,"Welcome to Chat place "+Object(a["z"])(o.authUser.displayName)+"..",1)):Object(a["e"])("",!0)]),Object(a["h"])("div",je,[Object(a["h"])("div",ye,[Object(a["h"])("div",we,[Ue,Object(a["E"])(Object(a["h"])("input",{type:"text",class:"form-control",name:"displayName","onUpdate:modelValue":t[1]||(t[1]=function(e){return c.displayName=e})},null,512),[[a["C"],c.displayName]])]),Object(a["h"])("div",xe,[Object(a["h"])("button",{class:"rounded btn btn-danger",onClick:t[2]||(t[2]=function(e){return o.changeName()})},"CHnage")])])]),Object(a["h"])("div",ke,[Object(a["h"])("div",_e,[Object(a["h"])("div",Ce,[Object(a["h"])("label",Ne,[Object(a["g"])("Send to "+Object(a["z"])(c.connectTo)+" ",1),c.showSelectUserError?(Object(a["q"])(),Object(a["d"])("span",Ae,"( Please Select Any User )")):Object(a["e"])("",!0)]),Object(a["E"])(Object(a["h"])("select",{id:"selectUser","onUpdate:modelValue":t[3]||(t[3]=function(e){return c.connectTo=e}),class:"form-control"},[Se,(Object(a["q"])(!0),Object(a["d"])(a["a"],null,Object(a["w"])(o.allUsers,(function(e){return Object(a["q"])(),Object(a["d"])("option",{key:e.uid,value:e.uuid},Object(a["z"])(e.displayName),9,["value"])})),128))],512),[[a["B"],c.connectTo]])]),Object(a["h"])("div",qe,[Object(a["h"])("label",Ee,[$e,c.showMessageError?(Object(a["q"])(),Object(a["d"])("span",Te,"( Please Enter Valid Message )")):Object(a["e"])("",!0)]),Object(a["E"])(Object(a["h"])("textarea",{class:"float-right form-control mb-2","onUpdate:modelValue":t[4]||(t[4]=function(e){return c.message=e}),name:"message",cols:"30",rows:"3",placeholder:"Send some message",onKeyup:t[5]||(t[5]=Object(a["F"])((function(e){return o.connectSendMessage()}),["enter"]))},null,544),[[a["C"],c.message,void 0,{trim:!0}]])]),Object(a["h"])("div",Ie,[Object(a["h"])("div",Me,[Object(a["h"])("button",{class:"rounded btn btn-primary",onClick:t[6]||(t[6]=function(e){return o.connectSendMessage()})},"Send Message")])])])])])})),Re=(n("498a"),function(){var e="%cRefreshed Peer Connection",t="background: #05b2dd; color: white; font-size: 1.3rem; font-weight: 700; letter-spacing: 0.2rem; padding: 1rem; border-radius: 1rem;";console.log(e,t)}),Pe={name:"Chat",data:function(){return{displayName:"",peer:null,connectTo:"unknown",message:"",selectedUser:null,showMessageError:!1,showSelectUserError:!1}},computed:{authUser:function(){return this.$store.getters.getUser},isAuth:function(){return this.$store.getters.getIsAuth},allUsers:function(){var e=this.$store.getters.getAllUsers;return e}},created:function(){var e=this.authUser;this.$store.dispatch("allUsers",e.uid),console.log("My Peer id is: \n",e.uuid),this.name=this.$store.getters.getName,this.peer=new M.a(this.authUser.uuid),this.peer.on("connection",(function(e){e.on("data",(function(e){R.a.fire({title:"Received Message",text:e,type:"success",confirmButtonText:"Cool"})}))})),this.peer.on("close",(function(){Re()}))},components:{},methods:{changeName:function(){this.$store.commit("changeName",this.displayName)},connectSendMessage:function(){var e=this;if(this.message=this.message.trim(),"unknown"==this.connectTo?this.showSelectUserError=!0:this.showSelectUserError=!1,this.message.length){if(this.showMessageError=!1,"unknown"!==this.connectTo){var t=this.peer.connect(this.connectTo);t.on("open",(function(){t.send(e.message),e.message=""}))}}else this.showMessageError=!0}}};n("1906");Pe.render=Le,Pe.__scopeId="data-v-0dc43185";var Ve=Pe,He=Object(a["H"])("data-v-93d63326");Object(a["t"])("data-v-93d63326");var ze={class:"call",id:"call"},De={key:0,class:"text-primary"},We=Object(a["g"])("Welcome to "),Be=Object(a["h"])("i",null,"Audio Call",-1),Ge={class:"row text-primary "},Fe={class:"rounded col-lg-4 col-md-6 col-sm-12 shadow-sm pt-4 opacity-half float-right"},Ke={class:"form-group "},Je={for:"connect_to"},Ye={key:0,class:"text-danger"},Ze=Object(a["h"])("option",{value:"unknown"},"Select any user",-1),Qe={class:"form-group d-none"},Xe=Object(a["h"])("label",{for:"message"},"Message",-1),et={class:"row"},tt={class:"form-group col-6"},nt=Object(a["h"])("div",{class:"form-group col-6"},[Object(a["h"])("a",{href:"",class:"rounded btn btn-danger float-right"},"Disconnect Call")],-1),at=Object(a["f"])('<div class="row" data-v-93d63326><div class="call-area opacity-half mt-4 p-4 text-primary rounded col-lg-4 col-md-6 col-sm-12 shadow-sm pt-4 opacity-half float-right" data-v-93d63326><div class="" data-v-93d63326><h4 class=" text-monospace" data-v-93d63326>Incoming Voice here</h4></div><div class="" data-v-93d63326><audio src="" id="other_stream" controls data-v-93d63326></audio></div><div class=" mt-4" data-v-93d63326><h4 class=" text-monospace" data-v-93d63326>My Stream here</h4></div><div class="" data-v-93d63326><audio src="" id="my_stream" controls data-v-93d63326></audio></div></div></div>',1);Object(a["r"])();var rt=He((function(e,t,n,r,c,o){return Object(a["q"])(),Object(a["d"])("div",ze,[Object(a["h"])("div",null,[o.authUser?(Object(a["q"])(),Object(a["d"])("small",De,[We,Be,Object(a["g"])(" "+Object(a["z"])(o.authUser.displayName)+"..",1)])):Object(a["e"])("",!0)]),Object(a["h"])("div",Ge,[Object(a["h"])("div",Fe,[Object(a["h"])("div",Ke,[Object(a["h"])("label",Je,[Object(a["g"])("Connect to "+Object(a["z"])(c.connectTo)+" ",1),c.showSelectUserError?(Object(a["q"])(),Object(a["d"])("span",Ye,"( Please Select Any User )")):Object(a["e"])("",!0)]),Object(a["E"])(Object(a["h"])("select",{id:"selectUser","onUpdate:modelValue":t[1]||(t[1]=function(e){return c.connectTo=e}),class:"form-control"},[Ze,(Object(a["q"])(!0),Object(a["d"])(a["a"],null,Object(a["w"])(o.allUsers,(function(e){return Object(a["q"])(),Object(a["d"])("option",{key:e.uid,value:e.uuid},Object(a["z"])(e.displayName),9,["value"])})),128))],512),[[a["B"],c.connectTo]])]),Object(a["h"])("div",Qe,[Xe,Object(a["E"])(Object(a["h"])("textarea",{class:"float-right form-control mb-2","onUpdate:modelValue":t[2]||(t[2]=function(e){return c.message=e}),name:"message",cols:"30",rows:"3",placeholder:"Send some message",onKeyup:t[3]||(t[3]=Object(a["F"])((function(e){return o.connectCall()}),["enter"]))},null,544),[[a["C"],c.message]])]),Object(a["h"])("div",et,[Object(a["h"])("div",tt,[Object(a["h"])("button",{class:"rounded btn btn-primary",onClick:t[4]||(t[4]=function(e){return o.connectCall()})},"Audio Call")]),nt])])]),at])})),ct={name:"Call",data:function(){return{name:"",peer:null,connectTo:"unknown",message:null,strm:null,my_stream:null,showSelectUserError:!1}},computed:{authUser:function(){return this.$store.getters.getUser},isAuth:function(){return this.$store.getters.getIsAuth},allUsers:function(){var e=this.$store.getters.getAllUsers;return e}},created:function(){var e=this.$store.getters.getUser;this.$store.dispatch("allUsers",e.uid),console.log("My Peer id is: \n",e.uuid),this.peer=new M.a(this.authUser.uuid),this.peer.on("call",function(){var e=Object(i["a"])(regeneratorRuntime.mark((function e(t){var n;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,navigator.mediaDevices.getUserMedia({video:!1,audio:!0});case 2:n=e.sent,t.answer(n),document.querySelector("#my_stream").srcObject=n,t.on("stream",(function(e){document.querySelector("#other_stream").srcObject=e}));case 6:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()),this.peer.on("close",(function(){Re()})),this.peer.on("error",(function(e){console.error(e)}))},methods:{connectCall:function(){var e=this;return Object(i["a"])(regeneratorRuntime.mark((function t(){var n;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:if("unknown"==e.connectTo?e.showSelectUserError=!0:e.showSelectUserError=!1,"unknown"==e.connectTo){t.next=14;break}return t.prev=2,t.next=5,navigator.mediaDevices.getUserMedia({video:!1,audio:!0});case 5:e.my_stream=t.sent,document.querySelector("#my_stream").srcObject=e.my_stream,n=e.peer.call(e.connectTo,e.my_stream),n.on("stream",(function(e){document.querySelector("#other_stream").srcObject=e})),t.next=14;break;case 11:t.prev=11,t.t0=t["catch"](2),console.log(t.t0.message);case 14:case"end":return t.stop()}}),t,null,[[2,11]])})))()},disconnectCall:function(){this.peer.destroy(),this.connectTo="none",document.querySelector("#other_stream").srcObject="",document.querySelector("#my_stream").srcObject=""}}};n("1301");ct.render=rt,ct.__scopeId="data-v-93d63326";var ot=ct,st=Object(a["H"])("data-v-236aec56");Object(a["t"])("data-v-236aec56");var it={class:"video",id:"video"},lt={key:0,class:"text-primary"},ut=Object(a["g"])("Welcome to "),dt=Object(a["h"])("i",null,"Video Call",-1),mt={class:"row mx-auto text-primary"},ht={class:"col-lg-4 col-md-6 col-sm-12 shadow-sm opacity-half pt-4 float-right"},bt={class:"form-group "},pt={for:"connect_to"},ft={key:0,class:"text-danger"},gt=Object(a["h"])("option",{value:"unknown"},"Select any user",-1),vt={class:"row"},Ot={class:"form-group"},jt=Object(a["h"])("div",{class:"form-group col-6"},[Object(a["h"])("a",{href:"",class:"rounded btn btn-danger float-right"},"Disconnect Call")],-1),yt=Object(a["f"])('<div class="row rounded my-4" data-v-236aec56><div class="call-area opacity-half mt-4 p-4 text-primary text-center col-lg-4 col-md-6 col-sm-12 shadow-sm pt-4 opacity-half float-right" data-v-236aec56><div class="" data-v-236aec56><h4 class=" text-monospace" data-v-236aec56>Incoming Video here</h4></div><div class="" data-v-236aec56><video id="other_stream" src="" width="300" height="200" controls data-v-236aec56></video></div></div><hr data-v-236aec56><div class="call-area opacity-half mt-4 p-4 text-primary text-center col-lg-4 col-md-6 col-sm-12 shadow-sm pt-4 opacity-half float-right" data-v-236aec56><div class=" " data-v-236aec56><h4 class=" text-monospace" data-v-236aec56>My Stream here</h4></div><div class="" data-v-236aec56><video id="my_stream" src="" width="300" height="200" controls data-v-236aec56></video></div></div></div>',1);Object(a["r"])();var wt=st((function(e,t,n,r,c,o){return Object(a["q"])(),Object(a["d"])("div",it,[Object(a["h"])("div",null,[o.authUser?(Object(a["q"])(),Object(a["d"])("small",lt,[ut,dt,Object(a["g"])(" "+Object(a["z"])(o.authUser.displayName)+"..",1)])):Object(a["e"])("",!0)]),Object(a["h"])("div",mt,[Object(a["h"])("div",ht,[Object(a["h"])("div",bt,[Object(a["h"])("label",pt,[Object(a["g"])("Connect to "+Object(a["z"])(c.connectTo)+" ",1),c.showSelectUserError?(Object(a["q"])(),Object(a["d"])("span",ft,"( Please Select Any User )")):Object(a["e"])("",!0)]),Object(a["E"])(Object(a["h"])("select",{id:"selectUser","onUpdate:modelValue":t[1]||(t[1]=function(e){return c.connectTo=e}),class:"form-control"},[gt,(Object(a["q"])(!0),Object(a["d"])(a["a"],null,Object(a["w"])(o.allUsers,(function(e){return Object(a["q"])(),Object(a["d"])("option",{key:e.uid,value:e.uuid},Object(a["z"])(e.displayName),9,["value"])})),128))],512),[[a["B"],c.connectTo]])]),Object(a["h"])("div",vt,[Object(a["h"])("div",Ot,[Object(a["h"])("button",{class:"rounded btn btn-primary",onClick:t[2]||(t[2]=function(e){return o.connectCall()})},"Video Call")]),jt])])]),yt])})),Ut={name:"Video",data:function(){return{name:"",peer:null,connectTo:"unknown",message:null,strm:null,my_stream:null,showSelectUserError:!1}},computed:{authUser:function(){return this.$store.getters.getUser},isAuth:function(){return this.$store.getters.getIsAuth},allUsers:function(){var e=this.$store.getters.getAllUsers;return e}},created:function(){var e=this.$store.getters.getUser;console.log("My Peer id is: \n",e.uuid),this.$store.dispatch("allUsers",e.uid),this.peer=new M.a(this.authUser.uuid),this.peer.on("call",function(){var e=Object(i["a"])(regeneratorRuntime.mark((function e(t){var n;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,navigator.mediaDevices.getUserMedia({video:!0,audio:!0});case 2:n=e.sent,document.querySelector("#my_stream").srcObject=n,t.answer(n),t.on("stream",(function(e){document.querySelector("#other_stream").srcObject=e}));case 6:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()),this.peer.on("close",(function(){Re()}))},methods:{connectCall:function(){var e=this;return Object(i["a"])(regeneratorRuntime.mark((function t(){var n;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:if("unknown"==e.connectTo?e.showSelectUserError=!0:e.showSelectUserError=!1,"unknown"==e.connectTo){t.next=14;break}return t.prev=2,t.next=5,navigator.mediaDevices.getUserMedia({video:!0,audio:!0});case 5:e.my_stream=t.sent,document.querySelector("#my_stream").srcObject=e.my_stream,n=e.peer.call(e.connectTo,e.my_stream),n.on("stream",(function(e){document.querySelector("#other_stream").srcObject=e})),t.next=14;break;case 11:t.prev=11,t.t0=t["catch"](2),console.log(t.t0.message);case 14:case"end":return t.stop()}}),t,null,[[2,11]])})))()},disconnectCall:function(){this.peer.destroy(),this.connectTo="none",document.querySelector("#other_stream").srcObject="",document.querySelector("#my_stream").srcObject=""}}};n("7236");Ut.render=wt,Ut.__scopeId="data-v-236aec56";var xt=Ut,kt=Object(a["H"])("data-v-289b54ec");Object(a["t"])("data-v-289b54ec");var _t={class:"chat",id:"chat"},Ct=Object(a["h"])("div",{class:"text-primary"},[Object(a["h"])("small",null,"Welcome to Login place..")],-1),Nt={class:"row text-primary "},At={class:"rounded col-lg-4 col-md-6 col-sm-12 shadow-sm pt-4 opacity-half float-right "},St={class:"form-group "},qt=Object(a["h"])("label",{for:"email"},"Email",-1),Et={class:"form-group "},$t=Object(a["h"])("label",{for:"password"},"Password",-1),Tt={class:"form-group"},It=Object(a["g"])("Create an account");Object(a["r"])();var Mt=kt((function(e,t,n,r,c,o){var s=Object(a["x"])("router-link");return Object(a["q"])(),Object(a["d"])("div",_t,[Ct,Object(a["h"])("div",Nt,[Object(a["h"])("div",At,[Object(a["h"])("div",St,[qt,Object(a["E"])(Object(a["h"])("input",{type:"email",class:"form-control",name:"email","onUpdate:modelValue":t[1]||(t[1]=function(e){return c.email=e}),placeholder:"Enter email address"},null,512),[[a["C"],c.email]])]),Object(a["h"])("div",Et,[$t,Object(a["E"])(Object(a["h"])("input",{type:"password",class:"form-control",name:"password","onUpdate:modelValue":t[2]||(t[2]=function(e){return c.password=e}),placeholder:"Enter password "},null,512),[[a["C"],c.password]])]),Object(a["h"])("div",Tt,[Object(a["h"])("button",{class:"rounded btn btn-primary",onClick:t[3]||(t[3]=function(e){return o.login()})},"Login"),Object(a["h"])(s,{to:"/register",class:"rounded btn btn-primary float-right"},{default:kt((function(){return[It]})),_:1})])])])])})),Lt={name:"login",data:function(){return{name:"",email:"",password:""}},created:function(){},components:{},methods:{login:function(){var e=this,t=this.email,n=this.password;A["a"].auth().signInWithEmailAndPassword(t,n).then(function(){var t=Object(i["a"])(regeneratorRuntime.mark((function t(n){var a,r,c;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return a=n.user,R.a.fire({title:"Logged in",text:"Welcome to CHat room",type:"success"}),console.log("Login user",a),t.next=5,E.collection("users").doc(a.uid).get();case 5:r=t.sent,c={displayName:r.data().displayName,email:r.data().email,uid:r.data().uid,uuid:r.data().uuid},e.$store.commit("setUser",c),e.$store.commit("setIsAuth",!0),e.$store.dispatch("dbAuthUser","home"),e.$router.push("home");case 11:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()).catch((function(e){e.code;var t=e.message;R.a.fire({title:"Error",text:t,type:"error"})}))},changeName:function(){this.$store.commit("changeName",this.name)}}};n("b33a");Lt.render=Mt,Lt.__scopeId="data-v-289b54ec";var Rt=Lt,Pt=Object(a["H"])("data-v-6cf6a1d8");Object(a["t"])("data-v-6cf6a1d8");var Vt={class:"chat",id:"chat"},Ht=Object(a["h"])("div",{class:"text-primary"},[Object(a["h"])("small",null,"Welcome to Register place..")],-1),zt={class:"row text-primary "},Dt={class:"rounded col-lg-4 col-md-6 col-sm-12 shadow-sm pt-4 opacity-half float-right "},Wt={class:"form-group "},Bt=Object(a["h"])("label",{for:"name"},"UserName",-1),Gt={class:"form-group "},Ft=Object(a["h"])("label",{for:"email"},"Email",-1),Kt={class:"form-group "},Jt=Object(a["h"])("label",{for:"password"},"Password",-1),Yt={class:"form-group"},Zt=Object(a["g"])("Already have account");Object(a["r"])();var Qt=Pt((function(e,t,n,r,c,o){var s=Object(a["x"])("router-link");return Object(a["q"])(),Object(a["d"])("div",Vt,[Ht,Object(a["h"])("div",zt,[Object(a["h"])("div",Dt,[Object(a["h"])("div",Wt,[Bt,Object(a["E"])(Object(a["h"])("input",{type:"name",class:"form-control",name:"displayName","onUpdate:modelValue":t[1]||(t[1]=function(e){return c.displayName=e}),placeholder:"Enter Username"},null,512),[[a["C"],c.displayName]])]),Object(a["h"])("div",Gt,[Ft,Object(a["E"])(Object(a["h"])("input",{type:"email",class:"form-control",name:"email","onUpdate:modelValue":t[2]||(t[2]=function(e){return c.email=e}),placeholder:"Enter email address"},null,512),[[a["C"],c.email]])]),Object(a["h"])("div",Kt,[Jt,Object(a["E"])(Object(a["h"])("input",{type:"password",class:"form-control",name:"password","onUpdate:modelValue":t[3]||(t[3]=function(e){return c.password=e}),placeholder:"Enter password "},null,512),[[a["C"],c.password]])]),Object(a["h"])("div",Yt,[Object(a["h"])("button",{class:"rounded btn btn-primary",onClick:t[4]||(t[4]=function(e){return o.register()})},"Register"),Object(a["h"])(s,{to:"/login",class:"rounded btn btn-primary float-right"},{default:Pt((function(){return[Zt]})),_:1})])])])])})),Xt=n("ec26"),en={name:"register",data:function(){return{displayName:"",email:"",password:"",uuid:null}},created:function(){},components:{},methods:{register:function(){var e=this,t=this.email,n=this.password;try{A["a"].auth().createUserWithEmailAndPassword(t,n).then((function(t){var n=t.user;e.uuid=Object(Xt["a"])(),n.updateProfile({displayName:e.displayName,uuid:e.uuid}).then((function(){var t={displayName:e.displayName,email:n.email,uid:n.uid,uuid:e.uuid};E.collection("users").doc(n.uid).set(t).then((function(){})).catch((function(e){console.log(e.message)})),e.$store.commit("setUser",t),e.$store.commit("setIsAuth",!0)})).catch((function(e){console.log(e.message),R.a.fire({title:"Error",text:e.message,type:"error"})})),e.$router.push("/")})).catch((function(e){e.code;var t=e.message;R.a.fire({title:"Error",text:t,type:"error"})}))}catch(a){console.log(a.message)}},changeName:function(){this.$store.commit("changeName",this.name)}}};n("70bc");en.render=Qt,en.__scopeId="data-v-6cf6a1d8";var tn=en,nn=Object(a["H"])("data-v-2d145068");Object(a["t"])("data-v-2d145068");var an=Object(a["h"])("h1",{class:"text-center text-danger mt-3"},"Page Not Found",-1),rn={class:"w-100"},cn=Object(a["g"])("Go to Home");Object(a["r"])();var on=nn((function(e,t,n,r,c,o){var s=Object(a["x"])("router-link");return Object(a["q"])(),Object(a["d"])("div",null,[an,Object(a["h"])("div",rn,[Object(a["h"])(s,{to:"home",class:"btn btn-primary",id:"go_home"},{default:nn((function(){return[cn]})),_:1})])])})),sn={name:"NotFound"};n("abe5");sn.render=on,sn.__scopeId="data-v-2d145068";var ln=sn,un=[{path:"/",name:"",component:pe},{path:"/home",name:"home",component:pe,meta:{}},{path:"/chat",name:"chat",component:Ve,meta:{}},{path:"/call",name:"call",component:ot,meta:{}},{path:"/video",name:"video",component:xt,meta:{}},{path:"/login",name:"login",component:Rt},{path:"/register",name:"register",component:tn},{path:"/:catchAll(.*)*",name:"not_found",component:ln}],dn=Object(z["a"])({history:Object(z["b"])(),routes:un});dn.beforeEach((function(e,t,n){var a="home";hn.getters.getIsAuth?"login"==e.name||"register"==e.name?dn.replace(a):n():"login"==e.name||"register"==e.name?n():hn.dispatch("dbAuthUser",e.name)}));var mn=dn,hn=Object(H["a"])({state:{auth_displayName:"Chataroo",auth_email:"",uuid:"",authUser:null,isAuth:!1},getters:{getDisplayName:function(e){return e.isAuth?e.authUser.displayName:""},getUser:function(e){return e.authUser},getIsAuth:function(e){return e.isAuth},getAllUsers:function(e){return e.allUsers}},mutations:{changeName:function(e,t){e.name=t},setUser:function(e,t){e.authUser=t},setUuid:function(e,t){e.uuid=t},setIsAuth:function(e,t){e.isAuth=t},setAllUsers:function(e,t){e.allUsers=t}},actions:{allUsers:function(e,t){return Object(i["a"])(regeneratorRuntime.mark((function n(){var a;return regeneratorRuntime.wrap((function(n){while(1)switch(n.prev=n.next){case 0:return n.next=2,E.collection("users").doc(t).collection("connections").get();case 2:return n.sent,n.next=5,E.collection("users").doc(t).collection("connections").get().then((function(e){var t=e.docs.map((function(e){return e.data().newConnection}));return t}));case 5:return a=n.sent,a=a.filter((function(e){return void 0!==e})),void 0==a&&null==a||e.commit("setAllUsers",a),n.abrupt("return",a);case 9:case"end":return n.stop()}}),n)})))()},createConnection:function(e,t){try{var n=null;E.collection("users").doc(t.sender_uid).get().then((function(a){var r=a.data(),c={displayName:r.displayName,email:r.email,uid:r.uid,uuid:r.uuid};n=r.displayName;E.collection("users").doc(t.authUser).collection("connections").doc(t.sender_uid).set({newConnection:c}).then((function(){return console.log("")})).catch((function(e){return console.log(e.message)})),r=e.getters.getUser,c={displayName:r.displayName,email:r.email,uid:r.uid,uuid:r.uuid},E.collection("users").doc(t.sender_uid).collection("connections").doc(t.authUser).set({newConnection:c}).then((function(){return console.log("")})).catch((function(e){return console.log(e.message)}));R.a.fire({title:"Connection created",text:"You can now contact ".concat(n," securely.."),type:"success",confirmButtonText:"Okay"})})).catch((function(e){return console.log(e.message)}))}catch(a){console.log(a.message)}},dbAuthUser:function(e){var t=arguments,n=this;return Object(i["a"])(regeneratorRuntime.mark((function a(){var r,c;return regeneratorRuntime.wrap((function(a){while(1)switch(a.prev=a.next){case 0:r=t.length>1&&void 0!==t[1]?t[1]:null,c=e.getters.getIsAuth,c||A["a"].auth().onAuthStateChanged(function(){var t=Object(i["a"])(regeneratorRuntime.mark((function t(a){var c,o;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:if(!a){t.next=13;break}return a.uid,n.auth_user=a,t.next=5,E.collection("users").doc(a.uid).get();case 5:c=t.sent,o={displayName:c.data().displayName,email:c.data().email,uid:c.data().uid,uuid:c.data().uuid},e.commit("setUser",o),e.commit("setIsAuth",!0),null!=r&&void 0!=r||(r="home"),mn.push(r),t.next=13;break;case 13:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}());case 3:case"end":return a.stop()}}),a)})))()}},modules:{}});n("4989");n("1157");Object(a["c"])(V).use(hn).use(mn).mount("#app")},"5e11":function(e,t){function n(e){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}n.keys=function(){return[]},n.resolve=n,e.exports=n,n.id="5e11"},"62a5":function(e,t,n){},"70bc":function(e,t,n){"use strict";n("9210")},7236:function(e,t,n){"use strict";n("9fc9")},7703:function(e,t,n){},9210:function(e,t,n){},"9fc9":function(e,t,n){},abe5:function(e,t,n){"use strict";n("7703")},b33a:function(e,t,n){"use strict";n("ea4e")},d2ef:function(e,t,n){"use strict";n("d381")},d381:function(e,t,n){},e83a:function(e,t,n){"use strict";n("55c4")},ea4e:function(e,t,n){},ec39:function(e,t,n){}});
//# sourceMappingURL=app.d9b9d371.js.map