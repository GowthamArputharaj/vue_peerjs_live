(function(e){function t(t){for(var o,a,s=t[0],i=t[1],l=t[2],d=0,h=[];d<s.length;d++)a=s[d],Object.prototype.hasOwnProperty.call(c,a)&&c[a]&&h.push(c[a][0]),c[a]=0;for(o in i)Object.prototype.hasOwnProperty.call(i,o)&&(e[o]=i[o]);u&&u(t);while(h.length)h.shift()();return r.push.apply(r,l||[]),n()}function n(){for(var e,t=0;t<r.length;t++){for(var n=r[t],o=!0,s=1;s<n.length;s++){var i=n[s];0!==c[i]&&(o=!1)}o&&(r.splice(t--,1),e=a(a.s=n[0]))}return e}var o={},c={app:0},r=[];function a(t){if(o[t])return o[t].exports;var n=o[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,a),n.l=!0,n.exports}a.m=e,a.c=o,a.d=function(e,t,n){a.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},a.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},a.t=function(e,t){if(1&t&&(e=a(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(a.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)a.d(n,o,function(t){return e[t]}.bind(null,o));return n},a.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return a.d(t,"a",t),t},a.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},a.p="/vue_peerjs_live/";var s=window["webpackJsonp"]=window["webpackJsonp"]||[],i=s.push.bind(s);s.push=t,s=s.slice();for(var l=0;l<s.length;l++)t(s[l]);var u=i;r.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("56d7")},"0429":function(e,t,n){"use strict";n("4406")},2336:function(e,t,n){"use strict";n("f767")},"35d4":function(e,t,n){},4406:function(e,t,n){},"534f":function(e,t,n){"use strict";n("8039")},"56d7":function(e,t,n){"use strict";n.r(t);n("e260"),n("e6cf"),n("cca6"),n("a79d");var o=n("7a23"),c={id:"nav"},r=Object(o["h"])("div",{class:"fixed-top text-secondary bg-transparent text-center text-monospace py-1 m-0"},[Object(o["h"])("h3",null,"Gowtham")],-1),a={id:"router_content ",class:"mx-5"};function s(e,t,n,s,i,l){var u=Object(o["x"])("Navigation"),d=Object(o["x"])("router-view");return Object(o["q"])(),Object(o["d"])("div",c,[r,Object(o["h"])(u),Object(o["h"])("div",a,[Object(o["h"])(d)])])}var i=n("1da1"),l=(n("96cf"),Object(o["H"])("data-v-7f27e29c"));Object(o["t"])("data-v-7f27e29c");var u={id:"navigation",class:""},d={class:"navbar navbar-expand-lg navbar-light text-monospace font-weight-bold fixed-bottom mb-2 bg-transparent"},h=Object(o["h"])("button",{class:"navbar-toggler  ",type:"button",id:"nav-tgl","data-toggle":"collapse","data-target":"#navbarSupportedContent","aria-controls":"navbarSupportedContent","aria-expanded":"false","aria-label":"Toggle navigation"},[Object(o["h"])("span",{class:"navbar-toggler-icon"})],-1),m={class:"w-75 collapse navbar-collapse",id:"navbarSupportedContent"},b={class:"navbar-nav"},p={class:" nav-item   bg-primary-opacity text-center py-1 mt-1"},g=Object(o["g"])("Home"),f={key:0,class:" nav-item   bg-primary-opacity text-center py-1 mt-1"},v=Object(o["g"])("Chat"),O={key:1,class:" nav-item   bg-primary-opacity text-center py-1 mt-1"},j=Object(o["g"])("Call"),y={key:2,class:" nav-item   bg-primary-opacity text-center py-1 mt-1"},C=Object(o["g"])("Video"),w={key:3,class:" nav-item   bg-primary-opacity text-center py-1 mt-1 float-right"},U=Object(o["g"])("Login"),x={key:4,class:" nav-item   bg-primary-opacity text-center py-1 mt-1 float-right"},_=Object(o["g"])("Register"),N={key:5,class:" nav-item   bg-primary-opacity text-center py-1 mt-1 float-right"};Object(o["r"])();var k=l((function(e,t,n,c,r,a){var s=Object(o["x"])("router-link");return Object(o["q"])(),Object(o["d"])("div",u,[Object(o["h"])("nav",d,[h,Object(o["h"])("div",m,[Object(o["h"])("ul",b,[Object(o["h"])("li",p,[Object(o["h"])(s,{to:"home",class:"nav-link"},{default:l((function(){return[g]})),_:1})]),a.isAuth?(Object(o["q"])(),Object(o["d"])("li",f,[Object(o["h"])(s,{to:"chat",class:"nav-link"},{default:l((function(){return[v]})),_:1})])):Object(o["e"])("",!0),a.isAuth?(Object(o["q"])(),Object(o["d"])("li",O,[Object(o["h"])(s,{to:"call",class:"nav-link"},{default:l((function(){return[j]})),_:1})])):Object(o["e"])("",!0),a.isAuth?(Object(o["q"])(),Object(o["d"])("li",y,[Object(o["h"])(s,{to:"video",class:"nav-link"},{default:l((function(){return[C]})),_:1})])):Object(o["e"])("",!0),a.isAuth?Object(o["e"])("",!0):(Object(o["q"])(),Object(o["d"])("li",w,[Object(o["h"])(s,{to:"login",class:"nav-link"},{default:l((function(){return[U]})),_:1})])),a.isAuth?Object(o["e"])("",!0):(Object(o["q"])(),Object(o["d"])("li",x,[Object(o["h"])(s,{to:"register",class:"nav-link"},{default:l((function(){return[_]})),_:1})])),a.isAuth?(Object(o["q"])(),Object(o["d"])("li",N,[Object(o["h"])("a",{href:"",class:"nav-link",onClick:t[1]||(t[1]=Object(o["G"])((function(e){return a.logout()}),["prevent"]))},"Logout")])):Object(o["e"])("",!0)])])])])})),S=n("2591"),A={apiKey:"AIzaSyCfMH0GdAwy1xZkABmvv-gK8P8TSRfbWho",authDomain:"vue-webrtc-chat.firebaseapp.com",projectId:"vue-webrtc-chat",storageBucket:"vue-webrtc-chat.appspot.com",messagingSenderId:"772500951736",appId:"1:772500951736:web:cac2c82c150fb018e25a4d"},E=S["a"].initializeApp(A),T=E.firestore(),q={name:"Navigation",computed:{isAuth:function(){return console.log("NNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNn1111",this.$store.getters.getIsAuth),this.$store.getters.getIsAuth}},methods:{logout:function(){var e=this;S["a"].auth().signOut().then((function(){e.$store.commit("changeName",null),e.auth_user=null,console.log("Logged out.."),e.$store.commit("setUser",null),e.$store.commit("setIsAuth",!1),e.$router.push("login")})).catch((function(e){Swal.fire({title:"Error!",text:e.message,type:"error"})}))}}};n("0429");q.render=k,q.__scopeId="data-v-7f27e29c";var $=q,R=n("a0bc"),I=n.n(R),M=n("3d20"),L=n.n(M),P={data:function(){return{name:"Gowtham",uuid:null,peer:null,auth_user:null}},components:{Navigation:$},beforeCreate:function(){var e=this;S["a"].auth().onAuthStateChanged(function(){var t=Object(i["a"])(regeneratorRuntime.mark((function t(n){var o,c;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:if(!n){t.next=13;break}return n.uid,e.auth_user=n,console.log("USER IS ",n),t.next=6,T.collection("users").doc(n.uid).get();case 6:o=t.sent,c={displayName:o.data().displayName,email:o.data().email,uid:o.data().uid,uuid:o.data().uuid},e.$store.commit("setUser",c),e.$store.commit("setIsAuth",!0),e.$store.dispatch("dbAuthUser"),t.next=14;break;case 13:e.$router.push("login");case 14:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}())}};n("8621");P.render=s;var H=P,V=(n("b0c0"),n("d81d"),n("4de4"),n("5502")),z=(n("5319"),n("ac1f"),n("6c02")),D=Object(o["H"])("data-v-bfdea440");Object(o["t"])("data-v-bfdea440");var W={class:"home",id:"home"},B={key:0,class:"text-primary"},G=Object(o["h"])("br",null,null,-1),F={class:"row height-half"},K={class:"col-md-5 col-sm-12 rounded ml-3 "},J={class:"row my-5"},Y={class:"col-md-6 col-sm-12 text-center mb-3"},Z=Object(o["h"])("div",{class:"col-md-6 col-sm-12 text-center mb-3"},[Object(o["h"])("button",{type:"button",class:"btn btn-outline-secondary text-bold-800 text-danger","data-toggle":"modal","data-target":"#connectUsingLink"}," Connect Using Link ")],-1),Q={class:" col-md-5 height-half col-md-6 col-sm-12 rounded mr-1 my-5 "},X={class:" opacity-half px-3  rounded  "},ee=Object(o["h"])("h2",{class:"text-monospace pt-2 text-primary text-center"},"Connections",-1),te={key:0,class:" pb-2 h-75 pr-3 users"},ne={class:"ml-2"},oe={class:"modal fade",id:"connectUsingLink",tabindex:"-1","aria-labelledby":"connectUsingLink2","aria-hidden":"true"},ce={class:"modal-dialog"},re={class:"modal-content"},ae=Object(o["h"])("div",{class:"modal-header"},[Object(o["h"])("h5",{class:"modal-title",id:"connectUsingLink2"},"Connect Via Link"),Object(o["h"])("button",{type:"button",class:"close","data-dismiss":"modal","aria-label":"Close"},[Object(o["h"])("span",{"aria-hidden":"true"},"×")])],-1),se={class:"modal-body"},ie={class:"form-group"},le=Object(o["h"])("label",{for:"exampleInputText"},"Connection link",-1),ue=Object(o["h"])("small",{id:"urlHelp",class:"form-text text-muted"},"We'll never share your url with anyone else.",-1),de={class:"modal-footer"},he=Object(o["h"])("button",{type:"button",class:"btn btn-secondary","data-dismiss":"modal"},"Close",-1);Object(o["r"])();var me=D((function(e,t,n,c,r,a){return Object(o["q"])(),Object(o["d"])("div",W,[a.authUser.displayName?(Object(o["q"])(),Object(o["d"])("small",B,"Welcome to Home "+Object(o["z"])(a.authUser.displayName)+" ..",1)):Object(o["e"])("",!0),G,Object(o["h"])("div",F,[Object(o["h"])("div",K,[Object(o["h"])("div",J,[Object(o["h"])("div",Y,[Object(o["h"])("button",{class:"btn btn-outline-secondary text-bold-800 text-danger",onClick:t[1]||(t[1]=function(e){return a.generateConnectionLink()})}," Get Connection Link ")]),Z])]),Object(o["h"])("div",Q,[Object(o["h"])("div",X,[ee,a.allUsers?(Object(o["q"])(),Object(o["d"])("div",te,[(Object(o["q"])(!0),Object(o["d"])(o["a"],null,Object(o["w"])(a.allUsers,(function(e){return Object(o["q"])(),Object(o["d"])("div",{key:e.id,class:"zoom-hover bold-hover rounded p-2 m-1 opacity-75 text-primary"},[Object(o["h"])("span",ne,Object(o["z"])(e.displayName),1)])})),128))])):Object(o["e"])("",!0)])])]),Object(o["h"])("div",oe,[Object(o["h"])("div",ce,[Object(o["h"])("div",re,[ae,Object(o["h"])("div",se,[Object(o["h"])("form",null,[Object(o["h"])("div",ie,[le,Object(o["E"])(Object(o["h"])("input",{type:"url",class:"form-control",id:"exampleInputText","onUpdate:modelValue":t[2]||(t[2]=function(e){return r.addConnectionLink=e}),"aria-describedby":"urlHelp"},null,512),[[o["C"],r.addConnectionLink]]),ue])])]),Object(o["h"])("div",de,[he,Object(o["h"])("button",{type:"button",class:"btn btn-primary",onClick:t[3]||(t[3]=function(e){return a.connectUsingLink()})},"Save changes")])])])])])})),be=(n("2b3d"),n("d3b7"),n("3ca3"),n("ddb0"),{name:"Home",data:function(){return{name:"",message:null,user:null,addConnectionLink:null}},computed:{displayName:function(){return this.$store.getters.getDisplayName},authUser:function(){return this.$store.getters.getUser},isAuth:function(){return this.$store.getters.getIsAuth},allUsers:function(){var e=this.$store.getters.getAllUsers;return e}},created:function(){console.log("My Peer id is: \n",this.authUser.uuid),console.log("Home page is Created"),this.$store.dispatch("allUsers",this.authUser.uid)},components:{},methods:{changeName:function(){this.$store.commit("changeName",this.name)},generateConnectionLink:function(){L.a.fire({title:"Connection Link",text:window.location.href+"?c=".concat(this.authUser.uid),type:"success",confirmButtonText:"Cool"})},connectUsingLink:function(){console.log("connectUsingLink "),console.log(this.addConnectionLink);var e=this.addConnectionLink,t=new URL(e).searchParams,n=t.get("c");console.log("sender_uid ",n),document.querySelector(".close").click();var o={authUser:this.authUser.uid,sender_uid:n};console.log(o),console.log(")))))))))))))))))))))))))))))))"),console.log(this.authUser.uid,"(((((((((((((((((((((((((((((((((",n),this.$store.dispatch("createConnection",o)}}});n("2336");be.render=me,be.__scopeId="data-v-bfdea440";var pe=be,ge=Object(o["H"])("data-v-77792af6");Object(o["t"])("data-v-77792af6");var fe={class:"chat",id:"chat"},ve={class:"text-primary"},Oe={key:0,class:"text-primary"},je={class:"row d-none"},ye={class:"col-lg-4 col-md-6 col-sm-12 border border-white pt-4 "},Ce={class:"form-group "},we=Object(o["h"])("label",{for:"name"},"Name",-1),Ue={class:"form-group"},xe={class:"row text-primary "},_e={class:"rounded col-lg-4 col-md-6 col-sm-12 shadow-sm pt-4 opacity-half float-right "},Ne={class:"form-group "},ke={for:"connect_to"},Se={key:0,class:"text-danger"},Ae=Object(o["h"])("option",{value:"unknown"},"Select any user",-1),Ee={class:"form-group mt-2"},Te={for:"message"},qe=Object(o["g"])("Message "),$e={key:0,class:"text-danger"},Re={class:"form-group"},Ie={class:"form-group "};Object(o["r"])();var Me=ge((function(e,t,n,c,r,a){return Object(o["q"])(),Object(o["d"])("div",fe,[Object(o["h"])("div",ve,[a.authUser?(Object(o["q"])(),Object(o["d"])("small",Oe,"Welcome to Chat place "+Object(o["z"])(a.authUser.displayName)+"..",1)):Object(o["e"])("",!0)]),Object(o["h"])("div",je,[Object(o["h"])("div",ye,[Object(o["h"])("div",Ce,[we,Object(o["E"])(Object(o["h"])("input",{type:"text",class:"form-control",name:"displayName","onUpdate:modelValue":t[1]||(t[1]=function(e){return r.displayName=e})},null,512),[[o["C"],r.displayName]])]),Object(o["h"])("div",Ue,[Object(o["h"])("button",{class:"rounded btn btn-danger",onClick:t[2]||(t[2]=function(e){return a.changeName()})},"CHnage")])])]),Object(o["h"])("div",xe,[Object(o["h"])("div",_e,[Object(o["h"])("div",Ne,[Object(o["h"])("label",ke,[Object(o["g"])("Send to "+Object(o["z"])(r.connectTo)+" ",1),r.showSelectUserError?(Object(o["q"])(),Object(o["d"])("span",Se,"( Please Select Any User )")):Object(o["e"])("",!0)]),Object(o["E"])(Object(o["h"])("select",{id:"selectUser","onUpdate:modelValue":t[3]||(t[3]=function(e){return r.connectTo=e}),class:"form-control"},[Ae,(Object(o["q"])(!0),Object(o["d"])(o["a"],null,Object(o["w"])(a.allUsers,(function(e){return Object(o["q"])(),Object(o["d"])("option",{key:e.uid,value:e.uuid},Object(o["z"])(e.displayName),9,["value"])})),128))],512),[[o["B"],r.connectTo]])]),Object(o["h"])("div",Ee,[Object(o["h"])("label",Te,[qe,r.showMessageError?(Object(o["q"])(),Object(o["d"])("span",$e,"( Please Enter Valid Message )")):Object(o["e"])("",!0)]),Object(o["E"])(Object(o["h"])("textarea",{class:"float-right form-control mb-2","onUpdate:modelValue":t[4]||(t[4]=function(e){return r.message=e}),name:"message",cols:"30",rows:"3",placeholder:"Send some message",onKeyup:t[5]||(t[5]=Object(o["F"])((function(e){return a.connectSendMessage()}),["enter"]))},null,544),[[o["C"],r.message,void 0,{trim:!0}]])]),Object(o["h"])("div",Re,[Object(o["h"])("div",Ie,[Object(o["h"])("button",{class:"rounded btn btn-primary",onClick:t[6]||(t[6]=function(e){return a.connectSendMessage()})},"Send Message")])])])])])})),Le=(n("498a"),function(){var e="%cRefreshed Peer Connection",t="background: #05b2dd; color: white; font-size: 1.3rem; font-weight: 700; letter-spacing: 0.2rem; padding: 1rem; border-radius: 1rem;";console.log(e,t)}),Pe={name:"Chat",data:function(){return{displayName:"",peer:null,connectTo:"unknown",message:"",selectedUser:null,showMessageError:!1,showSelectUserError:!1}},computed:{authUser:function(){return this.$store.getters.getUser},isAuth:function(){return this.$store.getters.getIsAuth},allUsers:function(){var e=this.$store.getters.getAllUsers;return e}},created:function(){console.log("CCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCC");var e=this.authUser;this.$store.dispatch("allUsers",e.uid),console.log("My Peer id is: \n",e.uuid),this.name=this.$store.getters.getName,this.peer=new I.a(this.authUser.uuid),console.log(this.peer,this.authUser.uuid),console.log("this.peer, this.authUser.uuid"),this.peer.on("connection",(function(e){console.log("********************************************************************************"),e.on("data",(function(e){L.a.fire({title:"Received Message",text:e,type:"success",confirmButtonText:"Cool"}),console.log("Received this message: ".concat(e))}))})),this.peer.on("close",(function(){Le()}))},components:{},methods:{changeName:function(){this.$store.commit("changeName",this.displayName)},connectSendMessage:function(){var e=this;if(this.message=this.message.trim(),"unknown"==this.connectTo?this.showSelectUserError=!0:this.showSelectUserError=!1,this.message.length){if(this.showMessageError=!1,"unknown"!==this.connectTo){var t=this.peer.connect(this.connectTo);t.on("open",(function(){t.send(e.message),console.log("hi Connection opened  and Message Sent!"),e.message=""}))}}else this.showMessageError=!0}}};n("988e");Pe.render=Me,Pe.__scopeId="data-v-77792af6";var He=Pe,Ve=Object(o["H"])("data-v-19e086c9");Object(o["t"])("data-v-19e086c9");var ze={class:"call",id:"call"},De={key:0,class:"text-primary"},We=Object(o["g"])("Welcome to "),Be=Object(o["h"])("i",null,"Audio Call",-1),Ge={class:"row text-primary "},Fe={class:"rounded col-lg-4 col-md-6 col-sm-12 shadow-sm pt-4 opacity-half float-right"},Ke={class:"form-group "},Je={for:"connect_to"},Ye={key:0,class:"text-danger"},Ze=Object(o["h"])("option",{value:"unknown"},"Select any user",-1),Qe={class:"form-group d-none"},Xe=Object(o["h"])("label",{for:"message"},"Message",-1),et={class:"row"},tt={class:"form-group col-6"},nt=Object(o["h"])("div",{class:"form-group col-6"},[Object(o["h"])("a",{href:"",class:"rounded btn btn-danger float-right"},"Disconnect Call")],-1),ot=Object(o["f"])('<div class="row" data-v-19e086c9><div class="call-area opacity-half mt-4 p-4 text-primary rounded col-lg-4 col-md-6 col-sm-12 shadow-sm pt-4 opacity-half float-right" data-v-19e086c9><div class="" data-v-19e086c9><h4 class=" text-monospace" data-v-19e086c9>Incoming Voice here</h4></div><div class="" data-v-19e086c9><audio src="" id="other_stream" controls data-v-19e086c9></audio></div><div class=" mt-4" data-v-19e086c9><h4 class=" text-monospace" data-v-19e086c9>My Stream here</h4></div><div class="" data-v-19e086c9><audio src="" id="my_stream" controls data-v-19e086c9></audio></div></div></div>',1);Object(o["r"])();var ct=Ve((function(e,t,n,c,r,a){return Object(o["q"])(),Object(o["d"])("div",ze,[Object(o["h"])("div",null,[a.authUser?(Object(o["q"])(),Object(o["d"])("small",De,[We,Be,Object(o["g"])(" "+Object(o["z"])(a.authUser.displayName)+"..",1)])):Object(o["e"])("",!0)]),Object(o["h"])("div",Ge,[Object(o["h"])("div",Fe,[Object(o["h"])("div",Ke,[Object(o["h"])("label",Je,[Object(o["g"])("Connect to "+Object(o["z"])(r.connectTo)+" ",1),r.showSelectUserError?(Object(o["q"])(),Object(o["d"])("span",Ye,"( Please Select Any User )")):Object(o["e"])("",!0)]),Object(o["E"])(Object(o["h"])("select",{id:"selectUser","onUpdate:modelValue":t[1]||(t[1]=function(e){return r.connectTo=e}),class:"form-control"},[Ze,(Object(o["q"])(!0),Object(o["d"])(o["a"],null,Object(o["w"])(a.allUsers,(function(e){return Object(o["q"])(),Object(o["d"])("option",{key:e.uid,value:e.uuid},Object(o["z"])(e.displayName),9,["value"])})),128))],512),[[o["B"],r.connectTo]])]),Object(o["h"])("div",Qe,[Xe,Object(o["E"])(Object(o["h"])("textarea",{class:"float-right form-control mb-2","onUpdate:modelValue":t[2]||(t[2]=function(e){return r.message=e}),name:"message",cols:"30",rows:"3",placeholder:"Send some message",onKeyup:t[3]||(t[3]=Object(o["F"])((function(e){return a.connectCall()}),["enter"]))},null,544),[[o["C"],r.message]])]),Object(o["h"])("div",et,[Object(o["h"])("div",tt,[Object(o["h"])("button",{class:"rounded btn btn-primary",onClick:t[4]||(t[4]=function(e){return a.connectCall()})},"Audio Call")]),nt])])]),ot])})),rt={name:"Call",data:function(){return{name:"",peer:null,connectTo:"unknown",message:null,strm:null,my_stream:null,showSelectUserError:!1}},computed:{authUser:function(){return this.$store.getters.getUser},isAuth:function(){return this.$store.getters.getIsAuth},allUsers:function(){var e=this.$store.getters.getAllUsers;return e}},created:function(){var e=this.$store.getters.getUser;this.$store.dispatch("allUsers",e.uid),console.log("My Peer id is: \n",e.uuid),this.peer=new I.a(this.authUser.uuid),this.peer.on("call",function(){var e=Object(i["a"])(regeneratorRuntime.mark((function e(t){var n;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,navigator.mediaDevices.getUserMedia({video:!1,audio:!0});case 2:n=e.sent,t.answer(n),document.querySelector("#my_stream").srcObject=n,t.on("stream",(function(e){document.querySelector("#other_stream").srcObject=e}));case 6:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()),this.peer.on("close",(function(){Le()})),this.peer.on("error",(function(e){console.error(e)}))},methods:{connectCall:function(){var e=this;return Object(i["a"])(regeneratorRuntime.mark((function t(){var n;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:if(console.log("connectCall ()",e.connectTo),"unknown"==e.connectTo?e.showSelectUserError=!0:e.showSelectUserError=!1,"unknown"==e.connectTo){t.next=16;break}return t.prev=3,t.next=6,navigator.mediaDevices.getUserMedia({video:!1,audio:!0});case 6:e.my_stream=t.sent,document.querySelector("#my_stream").srcObject=e.my_stream,n=e.peer.call(e.connectTo,e.my_stream),n.on("stream",(function(e){document.querySelector("#other_stream").srcObject=e})),t.next=16;break;case 12:t.prev=12,t.t0=t["catch"](3),console.log("ERROR connectCall()"),console.log(t.t0.message);case 16:console.log("end");case 17:case"end":return t.stop()}}),t,null,[[3,12]])})))()},disconnectCall:function(){this.peer.destroy(),this.connectTo="none",document.querySelector("#other_stream").srcObject="",document.querySelector("#my_stream").srcObject="",console.log("this.peer is ",this.peer),console.log("this.connectTo is ",this.connectTo)}}};n("874d");rt.render=ct,rt.__scopeId="data-v-19e086c9";var at=rt,st=Object(o["H"])("data-v-555df2f8");Object(o["t"])("data-v-555df2f8");var it={class:"video",id:"video"},lt={key:0,class:"text-primary"},ut=Object(o["g"])("Welcome to "),dt=Object(o["h"])("i",null,"Video Call",-1),ht={class:"row mx-auto text-primary"},mt={class:"col-lg-4 col-md-6 col-sm-12 shadow-sm opacity-half pt-4 float-right"},bt={class:"form-group "},pt={for:"connect_to"},gt={key:0,class:"text-danger"},ft=Object(o["h"])("option",{value:"unknown"},"Select any user",-1),vt={class:"row"},Ot={class:"form-group"},jt=Object(o["h"])("div",{class:"form-group col-6"},[Object(o["h"])("a",{href:"",class:"rounded btn btn-danger float-right"},"Disconnect Call")],-1),yt=Object(o["f"])('<div class="row rounded my-4" data-v-555df2f8><div class="call-area opacity-half mt-4 p-4 text-primary text-center col-lg-4 col-md-6 col-sm-12 shadow-sm pt-4 opacity-half float-right" data-v-555df2f8><div class="" data-v-555df2f8><h4 class=" text-monospace" data-v-555df2f8>Incoming Video here</h4></div><div class="" data-v-555df2f8><video id="other_stream" src="" width="300" height="200" controls data-v-555df2f8></video></div></div><hr data-v-555df2f8><div class="call-area opacity-half mt-4 p-4 text-primary text-center col-lg-4 col-md-6 col-sm-12 shadow-sm pt-4 opacity-half float-right" data-v-555df2f8><div class=" " data-v-555df2f8><h4 class=" text-monospace" data-v-555df2f8>My Stream here</h4></div><div class="" data-v-555df2f8><video id="my_stream" src="" width="300" height="200" controls data-v-555df2f8></video></div></div></div>',1);Object(o["r"])();var Ct=st((function(e,t,n,c,r,a){return Object(o["q"])(),Object(o["d"])("div",it,[Object(o["h"])("div",null,[a.authUser?(Object(o["q"])(),Object(o["d"])("small",lt,[ut,dt,Object(o["g"])(" "+Object(o["z"])(a.authUser.displayName)+"..",1)])):Object(o["e"])("",!0)]),Object(o["h"])("div",ht,[Object(o["h"])("div",mt,[Object(o["h"])("div",bt,[Object(o["h"])("label",pt,[Object(o["g"])("Connect to "+Object(o["z"])(r.connectTo)+" ",1),r.showSelectUserError?(Object(o["q"])(),Object(o["d"])("span",gt,"( Please Select Any User )")):Object(o["e"])("",!0)]),Object(o["E"])(Object(o["h"])("select",{id:"selectUser","onUpdate:modelValue":t[1]||(t[1]=function(e){return r.connectTo=e}),class:"form-control"},[ft,(Object(o["q"])(!0),Object(o["d"])(o["a"],null,Object(o["w"])(a.allUsers,(function(e){return Object(o["q"])(),Object(o["d"])("option",{key:e.uid,value:e.uuid},Object(o["z"])(e.displayName),9,["value"])})),128))],512),[[o["B"],r.connectTo]])]),Object(o["h"])("div",vt,[Object(o["h"])("div",Ot,[Object(o["h"])("button",{class:"rounded btn btn-primary",onClick:t[2]||(t[2]=function(e){return a.connectCall()})},"Video Call")]),jt])])]),yt])})),wt={name:"Video",data:function(){return{name:"",peer:null,connectTo:"unknown",message:null,strm:null,my_stream:null,showSelectUserError:!1}},computed:{authUser:function(){return this.$store.getters.getUser},isAuth:function(){return this.$store.getters.getIsAuth},allUsers:function(){var e=this.$store.getters.getAllUsers;return e}},created:function(){var e=this.$store.getters.getUser;console.log("My Peer id is: \n",e.uuid),this.$store.dispatch("allUsers",e.uid),this.peer=new I.a(this.authUser.uuid),this.peer.on("call",function(){var e=Object(i["a"])(regeneratorRuntime.mark((function e(t){var n;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,navigator.mediaDevices.getUserMedia({video:!0,audio:!0});case 2:n=e.sent,document.querySelector("#my_stream").srcObject=n,t.answer(n),t.on("stream",(function(e){document.querySelector("#other_stream").srcObject=e}));case 6:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()),this.peer.on("close",(function(){Le()}))},methods:{connectCall:function(){var e=this;return Object(i["a"])(regeneratorRuntime.mark((function t(){var n;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:if(console.log("connectCall ()",e.connectTo),"unknown"==e.connectTo?e.showSelectUserError=!0:e.showSelectUserError=!1,"unknown"==e.connectTo){t.next=16;break}return t.prev=3,t.next=6,navigator.mediaDevices.getUserMedia({video:!0,audio:!0});case 6:e.my_stream=t.sent,document.querySelector("#my_stream").srcObject=e.my_stream,n=e.peer.call(e.connectTo,e.my_stream),n.on("stream",(function(e){document.querySelector("#other_stream").srcObject=e})),t.next=16;break;case 12:t.prev=12,t.t0=t["catch"](3),console.log("ERROR"),console.log(t.t0.message);case 16:console.log("end");case 17:case"end":return t.stop()}}),t,null,[[3,12]])})))()},disconnectCall:function(){this.peer.destroy(),this.connectTo="none",document.querySelector("#other_stream").srcObject="",document.querySelector("#my_stream").srcObject="",console.log("this.peer is ",this.peer),console.log("this.connectTo is ",this.connectTo)}}};n("5da4");wt.render=Ct,wt.__scopeId="data-v-555df2f8";var Ut=wt,xt=Object(o["H"])("data-v-289b54ec");Object(o["t"])("data-v-289b54ec");var _t={class:"chat",id:"chat"},Nt=Object(o["h"])("div",{class:"text-primary"},[Object(o["h"])("small",null,"Welcome to Login place..")],-1),kt={class:"row text-primary "},St={class:"rounded col-lg-4 col-md-6 col-sm-12 shadow-sm pt-4 opacity-half float-right "},At={class:"form-group "},Et=Object(o["h"])("label",{for:"email"},"Email",-1),Tt={class:"form-group "},qt=Object(o["h"])("label",{for:"password"},"Password",-1),$t={class:"form-group"},Rt=Object(o["g"])("Create an account");Object(o["r"])();var It=xt((function(e,t,n,c,r,a){var s=Object(o["x"])("router-link");return Object(o["q"])(),Object(o["d"])("div",_t,[Nt,Object(o["h"])("div",kt,[Object(o["h"])("div",St,[Object(o["h"])("div",At,[Et,Object(o["E"])(Object(o["h"])("input",{type:"email",class:"form-control",name:"email","onUpdate:modelValue":t[1]||(t[1]=function(e){return r.email=e}),placeholder:"Enter email address"},null,512),[[o["C"],r.email]])]),Object(o["h"])("div",Tt,[qt,Object(o["E"])(Object(o["h"])("input",{type:"password",class:"form-control",name:"password","onUpdate:modelValue":t[2]||(t[2]=function(e){return r.password=e}),placeholder:"Enter password "},null,512),[[o["C"],r.password]])]),Object(o["h"])("div",$t,[Object(o["h"])("button",{class:"rounded btn btn-primary",onClick:t[3]||(t[3]=function(e){return a.login()})},"Login"),Object(o["h"])(s,{to:"/register",class:"rounded btn btn-primary float-right"},{default:xt((function(){return[Rt]})),_:1})])])])])})),Mt={name:"login",data:function(){return{name:"",email:"",password:""}},created:function(){},components:{},methods:{login:function(){var e=this,t=this.email,n=this.password;S["a"].auth().signInWithEmailAndPassword(t,n).then(function(){var t=Object(i["a"])(regeneratorRuntime.mark((function t(n){var o,c,r;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return o=n.user,L.a.fire({title:"Logged in",text:"Welcome to CHat room",type:"success"}),console.log("Login user",o),t.next=5,T.collection("users").doc(o.uid).get();case 5:c=t.sent,r={displayName:c.data().displayName,email:c.data().email,uid:c.data().uid,uuid:c.data().uuid},e.$store.commit("setUser",r),e.$store.commit("setIsAuth",!0),e.$store.dispatch("dbAuthUser","home"),e.$router.push("home");case 11:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()).catch((function(e){e.code;var t=e.message;L.a.fire({title:"Error",text:t,type:"error"})}))},changeName:function(){this.$store.commit("changeName",this.name)}}};n("b33a");Mt.render=It,Mt.__scopeId="data-v-289b54ec";var Lt=Mt,Pt=Object(o["H"])("data-v-323a4287");Object(o["t"])("data-v-323a4287");var Ht={class:"chat",id:"chat"},Vt=Object(o["h"])("div",{class:"text-primary"},[Object(o["h"])("small",null,"Welcome to Register place..")],-1),zt={class:"row text-primary "},Dt={class:"rounded col-lg-4 col-md-6 col-sm-12 shadow-sm pt-4 opacity-half float-right "},Wt={class:"form-group "},Bt=Object(o["h"])("label",{for:"name"},"UserName",-1),Gt={class:"form-group "},Ft=Object(o["h"])("label",{for:"email"},"Email",-1),Kt={class:"form-group "},Jt=Object(o["h"])("label",{for:"password"},"Password",-1),Yt={class:"form-group"},Zt=Object(o["g"])("Already have account");Object(o["r"])();var Qt=Pt((function(e,t,n,c,r,a){var s=Object(o["x"])("router-link");return Object(o["q"])(),Object(o["d"])("div",Ht,[Vt,Object(o["h"])("div",zt,[Object(o["h"])("div",Dt,[Object(o["h"])("div",Wt,[Bt,Object(o["E"])(Object(o["h"])("input",{type:"name",class:"form-control",name:"displayName","onUpdate:modelValue":t[1]||(t[1]=function(e){return r.displayName=e}),placeholder:"Enter Username"},null,512),[[o["C"],r.displayName]])]),Object(o["h"])("div",Gt,[Ft,Object(o["E"])(Object(o["h"])("input",{type:"email",class:"form-control",name:"email","onUpdate:modelValue":t[2]||(t[2]=function(e){return r.email=e}),placeholder:"Enter email address"},null,512),[[o["C"],r.email]])]),Object(o["h"])("div",Kt,[Jt,Object(o["E"])(Object(o["h"])("input",{type:"password",class:"form-control",name:"password","onUpdate:modelValue":t[3]||(t[3]=function(e){return r.password=e}),placeholder:"Enter password "},null,512),[[o["C"],r.password]])]),Object(o["h"])("div",Yt,[Object(o["h"])("button",{class:"rounded btn btn-primary",onClick:t[4]||(t[4]=function(e){return a.register()})},"Register"),Object(o["h"])(s,{to:"/login",class:"rounded btn btn-primary float-right"},{default:Pt((function(){return[Zt]})),_:1})])])])])})),Xt=n("ec26"),en={name:"register",data:function(){return{displayName:"",email:"",password:"",uuid:null}},created:function(){},components:{},methods:{register:function(){var e=this,t=this.email,n=this.password;try{S["a"].auth().createUserWithEmailAndPassword(t,n).then((function(t){var n=t.user;e.uuid=Object(Xt["a"])(),n.updateProfile({displayName:e.displayName,uuid:e.uuid}).then((function(){console.log("then");var t={displayName:e.displayName,email:n.email,uid:n.uid,uuid:e.uuid};console.log(t),T.collection("users").doc(n.uid).set(t).then((function(){console.log("Users added in Then")})).catch((function(e){console.log("err.message",e.message)})),e.$store.commit("setUser",t),e.$store.commit("setIsAuth",!0)})).catch((function(e){console.log("catch",e.message),L.a.fire({title:"Error",text:e.message,type:"error"})})),console.log("Register create*** THEN"),e.$router.push("/")})).catch((function(e){e.code;var t=e.message;console.log("Register create*** cat"),L.a.fire({title:"Error",text:t,type:"error"})}))}catch(o){console.log("db err",o.message)}},changeName:function(){this.$store.commit("changeName",this.name)}}};n("534f");en.render=Qt,en.__scopeId="data-v-323a4287";var tn=en,nn=Object(o["H"])("data-v-2d145068");Object(o["t"])("data-v-2d145068");var on=Object(o["h"])("h1",{class:"text-center text-danger mt-3"},"Page Not Found",-1),cn={class:"w-100"},rn=Object(o["g"])("Go to Home");Object(o["r"])();var an=nn((function(e,t,n,c,r,a){var s=Object(o["x"])("router-link");return Object(o["q"])(),Object(o["d"])("div",null,[on,Object(o["h"])("div",cn,[Object(o["h"])(s,{to:"home",class:"btn btn-primary",id:"go_home"},{default:nn((function(){return[rn]})),_:1})])])})),sn={name:"NotFound"};n("abe5");sn.render=an,sn.__scopeId="data-v-2d145068";var ln=sn,un=[{path:"/vue_peerjs_live/",name:"",component:pe},{path:"/vue_peerjs_live/home",name:"home",component:pe,meta:{}},{path:"/vue_peerjs_live/chat",name:"chat",component:He,meta:{}},{path:"/vue_peerjs_live/call",name:"call",component:at,meta:{}},{path:"/vue_peerjs_live/video",name:"video",component:Ut,meta:{}},{path:"/vue_peerjs_live/login",name:"login",component:Lt},{path:"/vue_peerjs_live/register",name:"register",component:tn},{path:"/vue_peerjs_live/:catchAll(.*)*",name:"not_found",component:ln}],dn=Object(z["a"])({history:Object(z["b"])(),routes:un});dn.beforeEach((function(e,t,n){var o="home";mn.getters.getIsAuth?"login"==e.name||"register"==e.name?dn.replace(o):n():("login"==e.name||"register"==e.name?n():(console.log("11111111111111111111111111111111111111111111111111"),mn.dispatch("dbAuthUser",e.name),console.log("22222222222222222222222222222222222222222222222222")),console.log("Dispatched dbAuthUser from router else",e.name))}));var hn=dn,mn=Object(V["a"])({state:{auth_displayName:"Chataroo",auth_email:"",uuid:"",authUser:null,isAuth:!1},getters:{getDisplayName:function(e){return console.log("getName"),e.isAuth?e.authUser.displayName:""},getUser:function(e){return console.log("get User()",e.authUser),e.authUser},getIsAuth:function(e){return console.log("get IsAuth()",e.isAuth),e.isAuth},getAllUsers:function(e){return console.log("get getAllUsers()",e.allUsers),e.allUsers}},mutations:{changeName:function(e,t){console.log("Change name",t),e.name=t},setUser:function(e,t){console.log("set User ",t),e.authUser=t},setUuid:function(e,t){e.uuid=t},setIsAuth:function(e,t){e.isAuth=t},setAllUsers:function(e,t){console.log("mutation ",t),e.allUsers=t}},actions:{allUsers:function(e,t){return Object(i["a"])(regeneratorRuntime.mark((function n(){var o;return regeneratorRuntime.wrap((function(n){while(1)switch(n.prev=n.next){case 0:return n.next=2,T.collection("users").doc(t).collection("connections").get();case 2:return n.sent,n.next=5,T.collection("users").doc(t).collection("connections").get().then((function(e){var t=e.docs.map((function(e){return e.data().newConnection}));return console.log("ACTION DOCUMENTS ",t),t}));case 5:return o=n.sent,o=o.filter((function(e){return void 0!==e})),console.log("___________ACTION DOCUMENTS___________ ",o),void 0==o&&null==o||(console.log("000000000000000000000000000000000000000",o),e.commit("setAllUsers",o)),n.abrupt("return",o);case 10:case"end":return n.stop()}}),n)})))()},createConnection:function(e,t){try{console.log("trytrytrytrytrytrytrytrytrytrytrytry",t);var n=null;T.collection("users").doc(t.sender_uid).get().then((function(o){var c=o.data(),r={displayName:c.displayName,email:c.email,uid:c.uid,uuid:c.uuid};console.log("SENDER IS ",c),n=c.displayName;T.collection("users").doc(t.authUser).collection("connections").doc(t.sender_uid).set({newConnection:r}).then((function(){return console.log("then createConnection Connection Created!!!")})).catch((function(e){return console.log("err is ",e.message)})),c=e.getters.getUser,r={displayName:c.displayName,email:c.email,uid:c.uid,uuid:c.uuid},T.collection("users").doc(t.sender_uid).collection("connections").doc(t.authUser).set({newConnection:r}).then((function(){return console.log("then createConnection Connection Created!!!")})).catch((function(e){return console.log("err is ",e.message)}));L.a.fire({title:"Connection created",text:"You can now contact ".concat(n," securely.."),type:"success",confirmButtonText:"Okay"})})).catch((function(e){return console.log(e.message)}))}catch(o){console.log("CATCH ERROR createCOnnection ||||| ",o.message)}},dbAuthUser:function(e){var t=arguments,n=this;return Object(i["a"])(regeneratorRuntime.mark((function o(){var c,r;return regeneratorRuntime.wrap((function(o){while(1)switch(o.prev=o.next){case 0:c=t.length>1&&void 0!==t[1]?t[1]:null,r=e.getters.getIsAuth,r||S["a"].auth().onAuthStateChanged(function(){var t=Object(i["a"])(regeneratorRuntime.mark((function t(o){var a,s;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:if(!o){t.next=20;break}return console.log("1",c,r),o.uid,n.auth_user=o,console.log("USER IS ",o),console.log("2",c,r),t.next=8,T.collection("users").doc(o.uid).get();case 8:a=t.sent,s={displayName:a.data().displayName,email:a.data().email,uid:a.data().uid,uuid:a.data().uuid},console.log("3",c,r),e.commit("setUser",s),console.log("4",c,r),e.commit("setIsAuth",!0),console.log("5",c,r),null!=c&&void 0!=c||(c="home"),console.log("Router goes to ".concat(c," from Store Action")),hn.push(c),t.next=21;break;case 20:console.log("6",c,r);case 21:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}());case 3:case"end":return o.stop()}}),o)})))()}},modules:{}});n("4989");n("1157");Object(o["c"])(H).use(mn).use(hn).mount("#app")},"5da4":function(e,t,n){"use strict";n("eb8d")},"5e11":function(e,t){function n(e){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}n.keys=function(){return[]},n.resolve=n,e.exports=n,n.id="5e11"},7703:function(e,t,n){},"7bb1":function(e,t,n){},8039:function(e,t,n){},8209:function(e,t,n){},8621:function(e,t,n){"use strict";n("8209")},"874d":function(e,t,n){"use strict";n("35d4")},"988e":function(e,t,n){"use strict";n("7bb1")},abe5:function(e,t,n){"use strict";n("7703")},b33a:function(e,t,n){"use strict";n("ea4e")},ea4e:function(e,t,n){},eb8d:function(e,t,n){},f767:function(e,t,n){}});
//# sourceMappingURL=app.32fcd108.js.map