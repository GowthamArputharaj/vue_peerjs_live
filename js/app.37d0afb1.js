(function(e){function t(t){for(var n,r,s=t[0],l=t[1],i=t[2],u=0,m=[];u<s.length;u++)r=s[u],Object.prototype.hasOwnProperty.call(o,r)&&o[r]&&m.push(o[r][0]),o[r]=0;for(n in l)Object.prototype.hasOwnProperty.call(l,n)&&(e[n]=l[n]);d&&d(t);while(m.length)m.shift()();return c.push.apply(c,i||[]),a()}function a(){for(var e,t=0;t<c.length;t++){for(var a=c[t],n=!0,s=1;s<a.length;s++){var l=a[s];0!==o[l]&&(n=!1)}n&&(c.splice(t--,1),e=r(r.s=a[0]))}return e}var n={},o={app:0},c=[];function r(t){if(n[t])return n[t].exports;var a=n[t]={i:t,l:!1,exports:{}};return e[t].call(a.exports,a,a.exports,r),a.l=!0,a.exports}r.m=e,r.c=n,r.d=function(e,t,a){r.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:a})},r.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},r.t=function(e,t){if(1&t&&(e=r(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var a=Object.create(null);if(r.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var n in e)r.d(a,n,function(t){return e[t]}.bind(null,n));return a},r.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return r.d(t,"a",t),t},r.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},r.p="/";var s=window["webpackJsonp"]=window["webpackJsonp"]||[],l=s.push.bind(s);s.push=t,s=s.slice();for(var i=0;i<s.length;i++)t(s[i]);var d=l;c.push([0,"chunk-vendors"]),a()})({0:function(e,t,a){e.exports=a("56d7")},"0655":function(e,t,a){"use strict";a("cf77")},"07ab":function(e,t,a){},"0826":function(e,t,a){"use strict";a("447a")},2251:function(e,t,a){},"447a":function(e,t,a){},"4c7b":function(e,t,a){"use strict";a("91f5")},"56d7":function(e,t,a){"use strict";a.r(t);a("e260"),a("e6cf"),a("cca6"),a("a79d");var n=a("7a23"),o={id:"nav"},c=Object(n["f"])("div",{class:"fixed-top text-secondary bg-transparent text-center text-monospace py-1 m-0"},[Object(n["f"])("h3",null,"Gowtham")],-1),r={id:"router_content ",class:"mx-5"};function s(e,t,a,s,l,i){var d=Object(n["u"])("Navigation"),u=Object(n["u"])("router-view");return Object(n["o"])(),Object(n["c"])("div",o,[c,Object(n["f"])(d),Object(n["f"])("div",r,[Object(n["f"])(u,{peer:l.peer,uuid:l.uuid},null,8,["peer","uuid"])])])}var l=Object(n["C"])("data-v-50246f8b");Object(n["r"])("data-v-50246f8b");var i={id:"navigation",class:""},d={class:"navbar navbar-expand-lg navbar-light text-monospace font-weight-bold fixed-bottom mb-2 bg-transparent"},u=Object(n["f"])("button",{class:"navbar-toggler border border-danger ",type:"button","data-toggle":"collapse","data-target":"#navbarSupportedContent","aria-controls":"navbarSupportedContent","aria-expanded":"false","aria-label":"Toggle navigation"},[Object(n["f"])("span",{class:"navbar-toggler-icon"})],-1),m={class:"w-100 collapse navbar-collapse",id:"navbarSupportedContent"},f={class:"navbar-nav"},b={class:" nav-item   bg-primary-opacity text-center py-1 mt-1"},p=Object(n["e"])("Home"),v={class:" nav-item   bg-primary-opacity text-center py-1 mt-1"},g=Object(n["e"])("Chat"),h={class:" nav-item   bg-primary-opacity text-center py-1 mt-1"},O=Object(n["e"])("Call"),j={class:" nav-item   bg-primary-opacity text-center py-1 mt-1"},y=Object(n["e"])("Video");Object(n["p"])();var x=l((function(e,t,a,o,c,r){var s=Object(n["u"])("router-link");return Object(n["o"])(),Object(n["c"])("div",i,[Object(n["f"])("nav",d,[u,Object(n["f"])("div",m,[Object(n["f"])("ul",f,[Object(n["f"])("li",b,[Object(n["f"])(s,{to:"/",class:"nav-link"},{default:l((function(){return[p]})),_:1})]),Object(n["f"])("li",v,[Object(n["f"])(s,{to:"chat",class:"nav-link"},{default:l((function(){return[g]})),_:1})]),Object(n["f"])("li",h,[Object(n["f"])(s,{to:"call",class:"nav-link"},{default:l((function(){return[O]})),_:1})]),Object(n["f"])("li",j,[Object(n["f"])(s,{to:"video",class:"nav-link"},{default:l((function(){return[y]})),_:1})])])])])])})),w={name:"Navigation"};a("4c7b");w.render=x,w.__scopeId="data-v-50246f8b";var _=w,C=a("a0bc"),S=a.n(C),M=a("ec26"),T=a("3d20"),k=a.n(T),R={data:function(){return{name:"Gowtham",uuid:null,peer:null}},components:{Navigation:_},created:function(){this.uuid=Object(M["a"])(),this.peer=new S.a(this.uuid),k.a.fire({title:"Created UUID..",text:this.uuid,type:"success",confirmButtonText:"Cool"})}};a("0826");R.render=s;var N=R,U=a("6c02"),V=(a("b0c0"),Object(n["C"])("data-v-15bf6515"));Object(n["r"])("data-v-15bf6515");var P={class:"home",id:"home"},A={class:"text-primary"};Object(n["p"])();var I=V((function(e,t,a,o,c,r){return Object(n["o"])(),Object(n["c"])("div",P,[Object(n["f"])("div",null,[Object(n["f"])("small",A,"Welcome Home "+Object(n["w"])(e.$store.state.name)+"..",1)])])})),$=a("5502"),D=Object($["a"])({state:{name:"Chataroo"},getters:{getName:function(e){return console.log("getName",e.name),e.name}},mutations:{changeName:function(e,t){console.log("Change name",t),e.name=t}},actions:{},modules:{}}),E={name:"Home",data:function(){return{name:"",message:null}},props:["peer","uuid"],created:function(){console.log("My Peer id is: \n",this.uuid),this.name=this.$store.getters.getName},components:{},methods:{changeName:function(){this.$store.commit("changeName",this.name)},connectSendMessage:function(){}}};a("981f");E.render=I,E.__scopeId="data-v-15bf6515";var q=E,B=Object(n["C"])("data-v-15260474");Object(n["r"])("data-v-15260474");var H={class:"chat",id:"chat"},W={class:"text-primary"},K={class:"row d-none"},G={class:"col-lg-4 col-md-6 col-sm-12 border border-white pt-4 "},J={class:"form-group "},F=Object(n["f"])("label",{for:"name"},"Name",-1),L={class:"form-group"},z={class:"row text-primary "},Q={class:"rounded col-lg-4 col-md-6 col-sm-12 shadow-sm pt-4 opacity-half float-right "},X={class:"form-group "},Y=Object(n["f"])("label",{for:"connect_to"},"Connect to",-1),Z={class:"form-group mt-2"},ee=Object(n["f"])("label",{for:"message"},"Message",-1),te={class:"form-group"};Object(n["p"])();var ae=B((function(e,t,a,o,c,r){return Object(n["o"])(),Object(n["c"])("div",H,[Object(n["f"])("div",W,[Object(n["f"])("small",null,"Welcome "+Object(n["w"])(e.$store.state.name)+" to Chat place..",1)]),Object(n["f"])("div",K,[Object(n["f"])("div",G,[Object(n["f"])("div",J,[F,Object(n["A"])(Object(n["f"])("input",{type:"text",class:"form-control",name:"name","onUpdate:modelValue":t[1]||(t[1]=function(e){return c.name=e})},null,512),[[n["y"],c.name]])]),Object(n["f"])("div",L,[Object(n["f"])("button",{class:"rounded btn btn-danger",onClick:t[2]||(t[2]=function(e){return r.changeName()})},"CHnage")])])]),Object(n["f"])("div",z,[Object(n["f"])("div",Q,[Object(n["f"])("div",X,[Y,Object(n["A"])(Object(n["f"])("input",{type:"text",class:"form-control",name:"connect_to","onUpdate:modelValue":t[3]||(t[3]=function(e){return c.connectTo=e}),placeholder:"Enter peer id"},null,512),[[n["y"],c.connectTo]])]),Object(n["f"])("div",Z,[ee,Object(n["A"])(Object(n["f"])("textarea",{class:"float-right form-control mb-2","onUpdate:modelValue":t[4]||(t[4]=function(e){return c.message=e}),name:"message",cols:"30",rows:"3",placeholder:"Send some message",onKeyup:t[5]||(t[5]=Object(n["B"])((function(e){return r.connectSendMessage()}),["enter"]))},null,544),[[n["y"],c.message]])]),Object(n["f"])("div",te,[Object(n["f"])("button",{class:"rounded btn btn-primary",onClick:t[6]||(t[6]=function(e){return r.connectSendMessage()})},"Send Message")])])])])})),ne={name:"Chat",data:function(){return{name:"",connectTo:null,message:null}},props:["peer","uuid"],created:function(){console.log("My Peer id is: \n",this.uuid),this.name=this.$store.getters.getName;var e=this.peer;e.on("connection",(function(e){e.on("data",(function(e){k.a.fire({title:"Received Message",text:e,type:"success",confirmButtonText:"Cool"}),console.log("Received this message: ".concat(e))}))}))},components:{Navigation:_},methods:{changeName:function(){this.$store.commit("changeName",this.name)},connectSendMessage:function(){var e=this,t=this.peer.connect(this.connectTo);t.on("open",(function(){t.send(e.message),console.log("hi Connection opened  and Message Sent!")}))}}};a("98ed");ne.render=ae,ne.__scopeId="data-v-15260474";var oe=ne,ce=Object(n["C"])("data-v-3a62a71f");Object(n["r"])("data-v-3a62a71f");var re={class:"call",id:"call"},se={class:"text-primary"},le=Object(n["e"])("Welcome to "),ie=Object(n["f"])("i",null,"Audio Call",-1),de={class:"row text-primary "},ue={class:"rounded col-lg-4 col-md-6 col-sm-12 shadow-sm pt-4 opacity-half float-right"},me={class:"form-group "},fe=Object(n["f"])("label",{for:"connect_to"},"Connect to",-1),be={class:"form-group d-none"},pe=Object(n["f"])("label",{for:"message"},"Message",-1),ve={class:"form-group"},ge=Object(n["d"])('<div class="row" data-v-3a62a71f><div class="call-area opacity-half mt-4 p-4 text-primary rounded col-lg-4 col-md-6 col-sm-12 shadow-sm pt-4 opacity-half float-right" data-v-3a62a71f><div class="" data-v-3a62a71f><h4 class=" text-monospace" data-v-3a62a71f>Incoming Voice here</h4></div><div class="" data-v-3a62a71f><audio src="" controls id="other_stream" data-v-3a62a71f></audio></div><div class=" mt-4" data-v-3a62a71f><h4 class=" text-monospace" data-v-3a62a71f>My Stream here</h4></div><div class="" data-v-3a62a71f><audio src="" controls id="my_stream" data-v-3a62a71f></audio></div></div></div>',1);Object(n["p"])();var he=ce((function(e,t,a,o,c,r){return Object(n["o"])(),Object(n["c"])("div",re,[Object(n["f"])("div",null,[Object(n["f"])("small",se,[le,ie,Object(n["e"])(" "+Object(n["w"])(e.$store.state.name)+"..",1)])]),Object(n["f"])("div",de,[Object(n["f"])("div",ue,[Object(n["f"])("div",me,[fe,Object(n["A"])(Object(n["f"])("input",{type:"text",class:"form-control",name:"connect_to","onUpdate:modelValue":t[1]||(t[1]=function(e){return c.connectTo=e}),placeholder:"Enter peer id"},null,512),[[n["y"],c.connectTo]])]),Object(n["f"])("div",be,[pe,Object(n["A"])(Object(n["f"])("textarea",{class:"float-right form-control mb-2","onUpdate:modelValue":t[2]||(t[2]=function(e){return c.message=e}),name:"message",cols:"30",rows:"3",placeholder:"Send some message",onKeyup:t[3]||(t[3]=Object(n["B"])((function(e){return r.connectCall()}),["enter"]))},null,544),[[n["y"],c.message]])]),Object(n["f"])("div",ve,[Object(n["f"])("button",{class:"rounded btn btn-primary",onClick:t[4]||(t[4]=function(e){return r.connectCall()})},"Audio Call")])])]),ge])})),Oe=a("1da1"),je=(a("96cf"),{name:"Call",data:function(){return{name:"",connectTo:null,message:null,strm:null,my_stream:null}},props:["peer","uuid"],created:function(){var e=this;console.log("My Peer id is: \n",this.uuid);var t=this.peer;t.on("call",function(){var t=Object(Oe["a"])(regeneratorRuntime.mark((function t(a){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,navigator.mediaDevices.getUserMedia({video:!1,audio:!0});case 2:e.my_stream=t.sent,console.log("this.my_stream"),console.log(e.my_stream),a.answer(e.my_stream),a.on("stream",(function(e){console.log("RemoteStream is"),console.log(e),document.querySelector("#other_stream").srcObject=e}));case 7:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}())},methods:{connectCall:function(){var e=this;return Object(Oe["a"])(regeneratorRuntime.mark((function t(){var a;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return console.log("connectCall ()",e.connectTo),t.prev=1,console.log("stream connectCall()"),t.next=5,navigator.mediaDevices.getUserMedia({video:!1,audio:!0});case 5:e.my_stream=t.sent,console.log(e.my_stream),document.querySelector("#my_stream").srcObject=e.my_stream,a=e.peer.call(e.connectTo,e.my_stream),a.on("stream",(function(e){console.log("remoteStream connectCall()"),console.log(e),document.querySelector("#other_stream").srcObject=e})),t.next=16;break;case 12:t.prev=12,t.t0=t["catch"](1),console.log("ERROR"),console.log(t.t0.message);case 16:console.log("end");case 17:case"end":return t.stop()}}),t,null,[[1,12]])})))()}}});a("91a7");je.render=he,je.__scopeId="data-v-3a62a71f";var ye=je,xe=Object(n["C"])("data-v-6f4f19bb");Object(n["r"])("data-v-6f4f19bb");var we={class:"video",id:"video"},_e={class:"text-primary"},Ce=Object(n["e"])("Welcome to "),Se=Object(n["f"])("i",null,"Video Call",-1),Me={class:"row mx-auto text-primary"},Te={class:"col-lg-4 col-md-6 col-sm-12 shadow-sm opacity-half pt-4 float-right"},ke={class:"form-group "},Re=Object(n["f"])("label",{for:"connect_to"},"Connect to",-1),Ne={class:"form-group d-none "},Ue=Object(n["f"])("label",{for:"message"},"Message",-1),Ve={class:"form-group"},Pe=Object(n["d"])('<div class="row mx-auto d-none" data-v-6f4f19bb><h2 class="text-center text-monospace" data-v-6f4f19bb>Video here</h2><video id="other_stream" src="" width="300" height="200" controls data-v-6f4f19bb></video></div><div class="row mx-auto d-none" data-v-6f4f19bb><h2 class="text-center text-monospace" data-v-6f4f19bb>My Stream here</h2><video id="my_stream" src="" width="300" height="200" controls data-v-6f4f19bb></video></div><div class="row rounded my-4" data-v-6f4f19bb><div class="call-area opacity-half mt-4 p-4 text-primary text-center col-lg-4 col-md-6 col-sm-12 shadow-sm pt-4 opacity-half float-right" data-v-6f4f19bb><div class="" data-v-6f4f19bb><h4 class=" text-monospace" data-v-6f4f19bb>Incoming Video here</h4></div><div class="" data-v-6f4f19bb><video id="other_stream" src="" width="300" height="200" controls data-v-6f4f19bb></video></div></div><hr data-v-6f4f19bb><div class="call-area opacity-half mt-4 p-4 text-primary text-center col-lg-4 col-md-6 col-sm-12 shadow-sm pt-4 opacity-half float-right" data-v-6f4f19bb><div class=" " data-v-6f4f19bb><h4 class=" text-monospace" data-v-6f4f19bb>My Stream here</h4></div><div class="" data-v-6f4f19bb><video id="my_stream" src="" width="300" height="200" controls data-v-6f4f19bb></video></div></div></div>',3);Object(n["p"])();var Ae=xe((function(e,t,a,o,c,r){return Object(n["o"])(),Object(n["c"])("div",we,[Object(n["f"])("div",null,[Object(n["f"])("small",_e,[Ce,Se,Object(n["e"])(" "+Object(n["w"])(e.$store.state.name)+"..",1)])]),Object(n["f"])("div",Me,[Object(n["f"])("div",Te,[Object(n["f"])("div",ke,[Re,Object(n["A"])(Object(n["f"])("input",{type:"text",class:"form-control",name:"connect_to","onUpdate:modelValue":t[1]||(t[1]=function(e){return c.connectTo=e}),placeholder:"Enter peer id"},null,512),[[n["y"],c.connectTo]])]),Object(n["f"])("div",Ne,[Ue,Object(n["A"])(Object(n["f"])("textarea",{class:"float-right","onUpdate:modelValue":t[2]||(t[2]=function(e){return c.message=e}),name:"message",cols:"30",rows:"3",placeholder:"Send some message",onKeyup:t[3]||(t[3]=Object(n["B"])((function(e){return r.connectCall()}),["enter"]))},null,544),[[n["y"],c.message]])]),Object(n["f"])("div",Ve,[Object(n["f"])("button",{class:"rounded btn btn-primary",onClick:t[4]||(t[4]=function(e){return r.connectCall()})},"Video Call")])])]),Pe])})),Ie={name:"Video",data:function(){return{name:"",connectTo:null,message:null,strm:null,my_stream:null}},props:["peer","uuid"],created:function(){var e=this;console.log("My Peer id is: \n",this.uuid);var t=this.peer;t.on("call",function(){var t=Object(Oe["a"])(regeneratorRuntime.mark((function t(a){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,navigator.mediaDevices.getUserMedia({video:!0,audio:!0});case 2:e.my_stream=t.sent,console.log("this.my_stream"),console.log(e.my_stream),a.answer(e.my_stream),a.on("stream",(function(e){console.log("RemoteStream is"),console.log(e),document.querySelector("#other_stream").srcObject=e}));case 7:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}())},methods:{connectCall:function(){var e=this;return Object(Oe["a"])(regeneratorRuntime.mark((function t(){var a;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return console.log("connectCall ()",e.connectTo),t.prev=1,console.log("stream connectCall()"),t.next=5,navigator.mediaDevices.getUserMedia({video:!0,audio:!0});case 5:e.my_stream=t.sent,console.log(e.my_stream),document.querySelector("#my_stream").srcObject=e.my_stream,a=e.peer.call(e.connectTo,e.my_stream),a.on("stream",(function(e){console.log("remoteStream connectCall()"),console.log(e),document.querySelector("#other_stream").srcObject=e})),t.next=16;break;case 12:t.prev=12,t.t0=t["catch"](1),console.log("ERROR"),console.log(t.t0.message);case 16:console.log("end");case 17:case"end":return t.stop()}}),t,null,[[1,12]])})))()}}};a("0655");Ie.render=Ae,Ie.__scopeId="data-v-6f4f19bb";var $e=Ie,De=[{path:"/",name:"Home",component:q},{path:"/chat",name:"Chat",component:oe},{path:"/call",name:"Call",component:ye},{path:"/video",name:"Video",component:$e}],Ee=Object(U["a"])({history:Object(U["b"])(),routes:De}),qe=Ee,Be=a("1157"),He=a.n(Be);a("4989"),Object(n["b"])(N).use(D).use(qe).mount("#app"),He()("#myModal").on("shown.bs.modal",(function(){He()("#myInput").trigger("focus")}))},"5e11":function(e,t){function a(e){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}a.keys=function(){return[]},a.resolve=a,e.exports=a,a.id="5e11"},"6c90":function(e,t,a){},"91a7":function(e,t,a){"use strict";a("07ab")},"91f5":function(e,t,a){},"981f":function(e,t,a){"use strict";a("6c90")},"98ed":function(e,t,a){"use strict";a("2251")},cf77:function(e,t,a){}});
//# sourceMappingURL=app.37d0afb1.js.map