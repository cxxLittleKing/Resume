webpackJsonp([1],Array(51).concat([function(n,e,t){"use strict";var r=t(17),o=t(166),s=t(150),a=t.n(s),i=t(153),l=t.n(i),c=t(148),u=t.n(c),d=t(147),m=t.n(d),f=t(151),p=t.n(f),v=t(152),h=t.n(v);r.default.use(o.a),e.a=new o.a({routes:[{path:"/",name:"login",component:a.a},{path:"/resume",name:"resume",component:l.a},{path:"/index",name:"index",component:u.a,children:[{path:"email",name:"email",component:m.a},{path:"person",name:"person",component:p.a},{path:"phone",name:"phone",component:h.a}]}]})},,function(n,e){},function(n,e){},function(n,e){},,function(n,e,t){var r=t(1)(t(77),t(165),null,null,null);n.exports=r.exports},,,,,,,,,,,,,,,,,,,function(n,e,t){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var r=t(17),o=t(57),s=t.n(o),a=t(50),i=t.n(a),l=t(51),c=t(56),u=t.n(c),d=t(55),m=(t.n(d),t(54)),f=(t.n(m),t(53)),p=(t.n(f),t(52));t.n(p);r.default.use(u.a),r.default.prototype.$axios=i.a;i.a.create({transformRequest:[function(n){return Qs.stringify(n,{arrayFormat:"brackets"})}]});new r.default({el:"#app",router:l.a,template:"<App/>",render:function(n){return n(s.a)}})},function(n,e,t){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default={name:"app"}},function(n,e,t){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default={name:"EditorStyleContent",template:"",data:function(){return{first:"\n/*\n* Hi 我是Chenxx，是一名数字媒体技术专业即将毕业的大四学生\n* 下面，我来来写一份个人简历！\n*/\n\n/* 首先给所有元素加上过渡效果,让所有的变化都以动画的效果来显示 */\n{\n  -webkit-transition: all .3s;\n  transition: all .3s;\n}\n/**\n* 看起来似乎没什么变化，不要着急\n* 先来改变下背景\n*/\nbody {\n  color: rgb(222,222,222);\n  background: rgb(60, 80, 90);\n}\n.pre{\ncolor: rgb(222,222,222);\nbackground: rgb(48, 48, 48);\n}\n\n/* 文字离边框太近了 */\n.styleEditor {\n  padding: 1em;\n  border: 1px solid;\n  margin: .5em;\n  overflow: auto;\n  width: 45vw;\n  height: 95vh;\n}\n\n/* 代码高亮 */\n.token.comment {color: #857F6B;font-style: italic;}\n.token.selector{ color: rgb(133,153,0); }\n.token.property{ color: rgb(187,137,0); }\n.token.punctuation{ color: yellow; }\n.token.function{ color: rgb(42,161,152); }\n\n/* 加点 3D 效果 */\nhtml{\n  -webkit-perspective: 1000px;\n  perspective: 1000px;\n}\n.styleEditor {\n  position: fixed; left: 0; top: 0;\n  -webkit-transition: none;\n  transition: none;\n  -webkit-transform: rotateY(10deg) translateZ(-100px) ;\n  transform: rotateY(10deg) translateZ(-100px) ;\n}\n\n/* 接下来我给自己准备一个编辑器 */\n.resumeEditor{\n  position: fixed; right: 0; top: 0;\n  padding: .5em;  margin: .5em;\n  width: 50vw; height: 95vh;\n  border: 1px solid;\n  background: white; color: #222;\n  overflow: auto;\n}\n/* 下面开始写简历正文 */\n        ",second:"\n/* 这个简历好像差点什么\n * 对了，这是 Markdown 格式的，需要变成对 HR 更友好的格式\n */\n        ",third:'\n/* 再对 HTML 加点样式 */\n.resumeEditor{\n  padding: 1em 1em 3em 1em;\n}\n.resumeEditor h1{\n  display: inline-block;\n  margin: 1em 0 .5em;\n  font-size: 1.5em;\n  font-style: italic;\n  font-weight: bold;\n}\n.resumeEditor h2{\n  font-size: 1.2em;\n  font-style: italic;\n  font-weight: bold;\n}\n.resumeEditor ul,.resumeEditor ol{\n  list-style: none;\n}\n.resumeEditor ul> li::before{\n  content: \'•\';\n  margin-right: .5em;\n}\n\n.resumeEditor ol {\n  counter-reset: section;\n}\n.resumeEditor ol li::before {\n  counter-increment: section;\n  content: counters(section, ".") " ";\n  margin-right: .5em;\n}\n.resumeEditor blockquote {\n  margin: 1em;\n  padding: .5em;\n  background: #ddd;\n}\n        '}}}},function(n,e,t){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default={data:function(){return{content:"\n# 自我介绍\n\n> 我叫陈新鑫，是一名热爱编程的数字媒体技术专业即将毕业的大四学生。\n\n> 参与过多个项目开发，有比较丰富的项目经验（大部落的前端设计、UI设计、API接口,U3d游戏）\n\n> 作为一名程序员，在项目中可以进行 需求分析、UI设计、接口设计、业务代码开发、项目测试等工作\n\n> 喜欢新技术的尝试和挑战，并且有较强的专业技术，能够与同事和谐相处\n\n> 平时热爱运动，经常和小伙伴约球，放松自己，也避免坐太久的后遗症\n\n---\n\n# 联系方式\n\n- 手机：187508014**\n- Email：954669193@qq.com\n- QQ/微信号：954669193\n\n---\n\n#个人信息\n\n - 男/1995\n - 本科/数学媒体技术专业\n - 工作年限：2017-07 开启工作之旅\n - 技术博客：http://blog.csdn.net/Kingcxx\n - Github：http://github.com/187508014**\n\n - 期望职位：前端开发工程师\n - 期望薪资：6k ~ 10k\n - 期望城市：福州 > 深圳、杭州\n\n---\n\n# 工作经历\n## 福州格雷克兰信息技术有限公司（ 2017年4月 ~ 至今 ）\n\n\n> 我在此项目负责了大部落的前端开发，大部落的需求分析，大部落的UI设计，大部落的HTML/CSS/J。\n当初由于VUE比较轻量化，我们在开发期间开始引用VUE，来做数据的管理和交互，由于大家都没接触，\n我花了一个星期看完vue的官方文档，就直接在项目中开始应用VUE。这个项目中，我最困难的问题是\nUI设计，由于没有UI设计师，就由我负责了大部落的我采取了什么措施，由于审美的原因，确实设计\n不出的好的作品。于是开始在花瓣网，bootstrap之间流浪，花了半个月时间设计完整体的UI框架，\n最后结果如何。这个项目中，我最自豪的技术就是我的UI设计啦，因为就我可以设计UI，同事和领导也很需要我。\n\n\n## 元亨健身 （ 2016年7月 ~ 2016年9月 ）\n\n> 暂时保密...\n\n\n---\n\n# 技能清单\n\n以下均为我熟练使用的技能\n\n- Web开发：Javascript/Node\n- Web框架：ThinkPHP5\n- 前端框架：Bootstrap/HTML5/Vue\n- 前端工具：Webpack\n\n以下我业余使用的技能\n- 数据库相关：MySQL\n- 游戏相关：unity3D/任务建模/C#\n- 媒体相关：摄影/摄像/Photosshop\n- 运动相关：篮球/骑车\n---\n\n# 致谢\n感谢您花时间阅读我的简历，期待能有机会和您共事。\n        "}}}},function(n,e,t){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var r=t(134),o=t.n(r);e.default={props:["currentResumeContent","enableHtml"],name:"ResumeEditor",computed:{result:function(){return this.enableHtml?o()(this.currentResumeContent):this.currentResumeContent}},methods:{scrollTop:function(){var n=this.$refs.container.scrollHeight;this.$refs.container.scrollTop=n+100}}}},function(n,e,t){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var r=t(135),o=t.n(r);e.default={name:"Editor",props:["codeContent"],computed:{highlightedCode:function(){return o.a.highlight(this.codeContent,o.a.languages.css)},codeInStyleTag:function(){return"<style>"+this.codeContent+"</style>"}},methods:{scrollTop:function(){var n=this.$refs.container.scrollHeight;this.$refs.container.scrollTop=n+10}}}},function(n,e,t){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default={data:function(){return{form:{name:"",email:"",subject:"",message:""},modal6:!1,loading:!0}},methods:{send:function(){this.modal6=!0},currentSend:function(){var n=this,e=t(48),r=this.$axios.create({transformRequest:[function(n){return e.stringify(n,{arrayFormat:"brackets"})}]});r.post("http://test.jessechiu.com/email ",this.form).then(function(e){console.log(e.data),console.log(n.form)}).catch(function(n){console.log(n)})},asyncOK:function(){var n=this;setTimeout(function(){n.modal6=!1,n.$Message.success("发送成功")},2e3),this.currentSend()}}}},function(n,e,t){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var r=t(149),o=t.n(r);e.default={components:{leftNav:o.a}}},function(n,e,t){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default={}},function(n,e,t){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default={data:function(){return{form:{userId:window.localStorage.userId||"",password:window.localStorage.password||""},state:!1}},methods:{Login:function(){var n=t(48);console.log(n);var e=this.$axios.create({transformRequest:[function(e){return n.stringify(e,{arrayFormat:"brackets"})}]}),r=this;e.post("http://test.jessechiu.com/login ",this.form).then(function(n){if(console.log(n.data),-1===n.data.errorCode)return void r.$Message.info("请输入正确的密码和账号");r.$router.push({path:"/index/person"})}).catch(function(n){console.log(n)})},remember:function(){if(this.state=!this.state,1==this.state){var n=window.localStorage;n.userId=this.form.userId,n.password=this.form.password,console.log(n.password)}else window.localStorage.userId.clear(),window.localStorage.password.clear()}},mounted:function(){}}},function(n,e,t){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var r=t(31),o=t.n(r),s=t(88),a=t.n(s),i=t(87),l=t.n(i),c=t(146),u=t.n(c),d=t(145),m=t.n(d),f=t(143),p=t.n(f),v=t(144),h=t.n(v),g=t(123);t.n(g);e.default={components:{StyleEditor:u.a,ResumeEditor:m.a,EditorStyleContent:p.a,ResumeContent:h.a},data:function(){return{interval:.1,currentStyle:"",enableHtml:!1,currentResumeMarkdown:"",resumeContent:"",show:!1}},created:function(){this.makeResume()},methods:{makeResume:function(){function n(){return e.apply(this,arguments)}var e=l()(a.a.mark(function n(){var e,t,r;return a.a.wrap(function(n){for(;;)switch(n.prev=n.next){case 0:return e=p.a.data().first,t=p.a.data().second,r=p.a.data().third,n.next=5,this.progressivelyShowStyle(e);case 5:return n.next=7,this.progressivelyShowResume();case 7:return n.next=9,this.progressivelyShowStyle(t);case 9:return n.next=11,this.showHtml();case 11:return n.next=13,this.progressivelyShowStyle(r);case 13:case"end":return n.stop()}},n,this)}));return n}(),showHtml:function(){var n=this;return new o.a(function(e,t){n.enableHtml=!0,e()})},progressivelyShowStyle:function(n){var e=this;return new o.a(function(t,r){var o=e.interval,s=0,i=l()(a.a.mark(function e(){var r,l,c=this;return a.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:if(n){e.next=2;break}return e.abrupt("return");case 2:r=n.length,s<=r?(l=n.substring(s,s+1)||" ",s++,this.currentStyle+=l,"\n"===n.substring(s-1,s)&&this.$refs.styleEditor&&this.$nextTick(function(){c.$refs.styleEditor.scrollTop()}),setTimeout(i,o)):t();case 4:case"end":return e.stop()}},e,this)})).bind(e);i()})},progressivelyShowResume:function(){var n=this,e=h.a.data().content;return new o.a(function(t,r){var o=e.length,s=n.interval;!function r(){if(n.currentResumeMarkdown.length<o){n.currentResumeMarkdown=e.substring(0,n.currentResumeMarkdown.length+1);var a=n.currentResumeMarkdown[n.currentResumeMarkdown.length-1];console.log("lastChar:",a),"\n"===a&&n.$refs.resumeEditor&&n.$nextTick(function(){return n.$refs.resumeEditor.scrollTop()}),setTimeout(r,s),console.log(o)}else n.show=!0,t()}()})}}}},,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,function(n,e){},function(n,e){},function(n,e){},function(n,e){},function(n,e){},function(n,e){},function(n,e){},function(n,e){},function(n,e){},function(n,e){},function(n,e){},,,,,,,,,function(n,e,t){n.exports=t.p+"static/img/person.fb4b74a.jpg"},function(n,e,t){var r=t(1)(t(78),t(162),null,null,null);n.exports=r.exports},function(n,e,t){function r(n){t(131)}var o=t(1)(t(79),t(161),r,null,null);n.exports=o.exports},function(n,e,t){function r(n){t(125)}var o=t(1)(t(80),t(155),r,"data-v-19be16c0",null);n.exports=o.exports},function(n,e,t){function r(n){t(133)}var o=t(1)(t(81),t(164),r,"data-v-808bd1b0",null);n.exports=o.exports},function(n,e,t){function r(n){t(132)}var o=t(1)(t(82),t(163),r,null,null);n.exports=o.exports},function(n,e,t){function r(n){t(126)}var o=t(1)(t(83),t(156),r,null,null);n.exports=o.exports},function(n,e,t){function r(n){t(127)}var o=t(1)(t(84),t(157),r,null,null);n.exports=o.exports},function(n,e,t){function r(n){t(130)}var o=t(1)(t(85),t(160),r,null,null);n.exports=o.exports},function(n,e,t){function r(n){t(128)}var o=t(1)(null,t(158),r,null,null);n.exports=o.exports},function(n,e,t){function r(n){t(124)}var o=t(1)(null,t(154),r,null,null);n.exports=o.exports},function(n,e,t){function r(n){t(129)}var o=t(1)(t(86),t(159),r,"data-v-3599285a",null);n.exports=o.exports},function(n,e){n.exports={render:function(){var n=this,e=n.$createElement;n._self._c;return n._m(0)},staticRenderFns:[function(){var n=this,e=n.$createElement,t=n._self._c||e;return t("div",[t("p"),t("h3",[n._v("Phone:")]),n._v("1875080****"),t("p"),n._v(" "),t("p"),t("h3",[n._v("Adrress:")]),n._v(" "),t("p",[n._v("DaTian")]),n._v(" "),t("p",[n._v("FuJian,SanMing")]),n._v(" "),t("p",[n._v("China")]),n._v(" "),t("p")])}]}},function(n,e){n.exports={render:function(){var n=this,e=n.$createElement,t=n._self._c||e;return t("div",{ref:"container",staticClass:"resumeEditor",class:{htmlModel:n.enableHtml}},[n.enableHtml?t("div",{domProps:{innerHTML:n._s(n.result)}}):t("pre",[n._v(n._s(n.result))])])},staticRenderFns:[]}},function(n,e){n.exports={render:function(){var n=this,e=n.$createElement,t=n._self._c||e;return t("div",{staticClass:"row"},[t("leftNav"),n._v(" "),t("div",{staticClass:"right"},[t("router-view")],1)],1)},staticRenderFns:[]}},function(n,e){n.exports={render:function(){var n=this,e=n.$createElement,t=n._self._c||e;return t("div",{staticClass:"nava"},[t("nav",{staticClass:"navbar navbar-vertical-left"},[t("ul",{staticClass:"nav navbar-nav"},[t("li",[t("router-link",{attrs:{to:{name:"person"}}},[t("Icon",{attrs:{type:"person"}}),n._v(" "),t("span",[n._v("Chenxx")])],1)],1),n._v(" "),t("li",[t("router-link",{attrs:{to:{name:"resume"}}},[t("Icon",{attrs:{type:"map"}}),n._v(" "),t("span",[n._v("Resume")])],1)],1),n._v(" "),t("li",[t("router-link",{attrs:{to:{name:"phone"}}},[t("Icon",{attrs:{type:"android-call"}}),n._v(" "),t("span",[n._v("Phone")])],1)],1),n._v(" "),t("li",[t("router-link",{attrs:{to:{name:"email"}}},[t("Icon",{attrs:{type:"email"}}),n._v(" "),t("span",[n._v("Email")])],1)],1)])])])},staticRenderFns:[]}},function(n,e,t){n.exports={render:function(){var n=this,e=n.$createElement,r=n._self._c||e;return r("div",{staticClass:"person"},[r("h3",[n._v("Person Photo")]),n._v(" "),r("img",{attrs:{src:t(142),alt:""}}),n._v(" "),r("p",[n._v("Hello! My name is chenxx!")]),n._v(" "),r("router-link",{attrs:{to:{name:"email"}}},[r("button",{staticClass:"btn btn-lg btn-primary btn-block",attrs:{type:"button"}},[n._v("Send mail to me ")])])],1)},staticRenderFns:[]}},function(n,e){n.exports={render:function(){var n=this,e=n.$createElement,t=n._self._c||e;return t("div",[t("EditorStyleContent"),n._v(" "),t("StyleEditor",{ref:"styleEditor",attrs:{codeContent:n.currentStyle}}),n._v(" "),t("ResumeEditor",{ref:"resumeEditor",attrs:{currentResumeContent:n.currentResumeMarkdown,enableHtml:n.enableHtml}}),n._v(" "),t("router-link",{attrs:{to:{name:"person"}}},[t("input",{directives:[{name:"show",rawName:"v-show",value:n.show,expression:"show"}],staticStyle:{border:"0",background:"rgb(60, 80, 90)",color:"#f2f2f2",position:"fixed",right:"5%",bottom:"30px",width:"15%",height:"5%"},attrs:{type:"button",value:"返回"}})]),n._v(" "),t("router-link",{attrs:{to:{name:"print"}}},[t("input",{directives:[{name:"show",rawName:"v-show",value:n.show,expression:"show"}],staticStyle:{border:"0",position:"fixed",background:"rgb(60, 80, 90)",color:"#f2f2f2",right:"28%",bottom:"30px",width:"15%",height:"5%"},attrs:{type:"button",value:"打印简历"}})])],1)},staticRenderFns:[]}},function(n,e){n.exports={render:function(){var n=this,e=n.$createElement,t=n._self._c||e;return t("div",{staticClass:"container"},[t("div",{staticClass:"form-signin"},[t("h2",{staticClass:"form-signin-heading"},[n._v("Please login in")]),n._v(" "),t("label",{staticClass:"sr-only",attrs:{for:"inputEmail"}},[n._v("userId")]),n._v(" "),t("input",{directives:[{name:"model",rawName:"v-model",value:n.form.userId,expression:"form.userId"}],staticClass:"form-control",attrs:{type:"text",id:"inputuser",placeholder:"userId"},domProps:{value:n.form.userId},on:{input:function(e){e.target.composing||n.$set(n.form,"userId",e.target.value)}}}),n._v(" "),t("label",{staticClass:"sr-only",attrs:{for:"inputPassword"}},[n._v("Password")]),n._v(" "),t("input",{directives:[{name:"model",rawName:"v-model",value:n.form.password,expression:"form.password"}],staticClass:"form-control",attrs:{type:"password",id:"inputPassword",placeholder:"Password"},domProps:{value:n.form.password},on:{input:function(e){e.target.composing||n.$set(n.form,"password",e.target.value)}}}),n._v(" "),t("div",{staticClass:"checkbox"},[t("label",{staticClass:"rem"},[t("input",{staticClass:"rem",attrs:{type:"checkbox",value:"remember-me"},on:{click:n.remember}}),n._v(" Remember me\n      ")])]),n._v(" "),t("button",{staticClass:"btn btn-lg btn-primary btn-block",on:{click:n.Login}},[n._v("Login in")])])])},staticRenderFns:[]}},function(n,e){n.exports={render:function(){var n=this,e=n.$createElement;return(n._self._c||e)("div")},staticRenderFns:[]}},function(n,e){n.exports={render:function(){var n=this,e=n.$createElement;return(n._self._c||e)("div")},staticRenderFns:[]}},function(n,e){n.exports={render:function(){var n=this,e=n.$createElement,t=n._self._c||e;return t("div",[t("form",{staticClass:"form-signin"},[t("h2",{staticClass:"form-signin-heading"},[n._v("Send me an email")]),n._v(" "),t("Input",{attrs:{icon:"ios-arrow-back",placeholder:"Name"},model:{value:n.form.name,callback:function(e){n.$set(n.form,"name",e)},expression:"form.name"}}),n._v(" "),t("Input",{attrs:{icon:"ios-email",placeholder:"Email"},model:{value:n.form.email,callback:function(e){n.$set(n.form,"email",e)},expression:"form.email"}}),n._v(" "),t("Input",{attrs:{icon:"ios-book",placeholder:"Subject"},model:{value:n.form.subject,callback:function(e){n.$set(n.form,"subject",e)},expression:"form.subject"}}),n._v(" "),t("Input",{attrs:{type:"textarea",autosize:{minRows:4,maxRows:7},placeholder:"Message"},model:{value:n.form.message,callback:function(e){n.$set(n.form,"message",e)},expression:"form.message"}}),n._v(" "),t("button",{staticClass:"btn btn-lg btn-primary btn-block",attrs:{icon:"ios-search"},on:{click:n.send}},[n._v("Send")]),n._v(" "),t("Modal",{attrs:{title:"Send email",loading:n.loading},on:{"on-ok":n.asyncOK},model:{value:n.modal6,callback:function(e){n.modal6=e},expression:"modal6"}},[t("p",[n._v("点击确定后发送邮件")])])],1)])},staticRenderFns:[]}},function(n,e){n.exports={render:function(){var n=this,e=n.$createElement,t=n._self._c||e;return t("div",{ref:"container",staticClass:"styleEditor"},[t("div",{staticClass:"code",domProps:{innerHTML:n._s(n.codeInStyleTag)}}),n._v(" "),t("pre",{staticClass:"pre",domProps:{innerHTML:n._s(n.highlightedCode)}})])},staticRenderFns:[]}},function(n,e){n.exports={render:function(){var n=this,e=n.$createElement,t=n._self._c||e;return t("div",{attrs:{id:"app"}},[t("router-view")],1)},staticRenderFns:[]}}]),[76]);
//# sourceMappingURL=app.c0131b3aea7d305ce82e.js.map