(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[459],{3700:function(s,e,t){(window.__NEXT_P=window.__NEXT_P||[]).push(["/login",function(){return t(2551)}])},2551:function(s,e,t){"use strict";t.r(e);var a=t(5893),n=t(7294),o=t(1424),c=t.n(o),r=t(8888),l=t(8083),i=t(4280),m=t(5493),u=t(6010),_=t(1163);e.default=function(){let[s,e]=(0,n.useState)(""),[t,o]=(0,n.useState)(""),[d,h]=(0,n.useState)(null),p=(0,_.useRouter)();return(0,u.LP)()?p.push("/dashboard"):(0,a.jsx)("div",{className:c().manidiv,children:(0,a.jsxs)(r.Z,{className:"justify-content-md-center p-0",children:[(0,a.jsxs)(l.Z,{xs:12,md:6,xl:6,className:c().col1,children:[(0,a.jsx)("img",{src:"assets/images/ap4loginImg.png",alt:"Login",className:c().col1Img}),(0,a.jsxs)("div",{className:c().textMainDiv,children:[(0,a.jsxs)("p",{className:c().text,children:["There’s  ",(0,a.jsx)("span",{className:c().nolimits,children:"no limit "})," to ",(0,a.jsx)("br",{})," what you can ",(0,a.jsx)("br",{}),(0,a.jsx)("span",{className:c().nolimits,children:"learn"}),"."]}),(0,a.jsxs)("div",{className:c().imagesDiv,children:[(0,a.jsx)("img",{className:c().arrows,src:"assets\\images\\leftArrow.png",alt:""}),(0,a.jsx)("img",{className:c().arrows,src:"assets\\images\\rightArrow.png",alt:""})]})]})]}),(0,a.jsx)(l.Z,{xs:12,md:6,xl:6,className:"".concat(c().col2,"  d-flex justify-content-start align-items-center flex-row"),children:(0,a.jsxs)(i.Z,{className:c().form,onSubmit:e=>{e.preventDefault(),h(""),(0,m.Z)().post("/auth/login",{email:s,password:t}).then(s=>{if(200==s.status&&s.data.tokens&&s.data.tokens.access.token)return(0,u.bm)(s.data.tokens.access.token,s.data.tokens.refresh.token),p.push("/dashboard")}).catch(s=>{var e,t;(null===(t=s.response)||void 0===t?void 0:null===(e=t.data)||void 0===e?void 0:e.message)&&h(s.response.data.message)})},children:[(0,a.jsx)("img",{src:"assets\\images\\AP4-logo_.png",alt:""}),(0,a.jsx)("h1",{className:c().h1,children:"Log In"}),(0,a.jsxs)("p",{className:c().acc,children:["Don’t have an account?"," ",(0,a.jsx)("span",{className:c().contactUs,children:"Contact Us"})]}),(0,a.jsx)("span",{style:{color:"red"},children:d}),(0,a.jsxs)(i.Z.Group,{className:c().formGroup,children:[(0,a.jsx)(i.Z.Label,{className:c().formLabel,children:"Username"}),(0,a.jsx)("img",{src:"assets\\images\\username1.png",alt:"email icon",className:c().inputIcon}),(0,a.jsx)(i.Z.Control,{className:c().formControl,type:"text",placeholder:"Username",onChange:s=>e(s.target.value)})]}),(0,a.jsxs)(i.Z.Group,{className:c().formGroup,children:[(0,a.jsx)(i.Z.Label,{className:c().formLabel,children:"Password"}),(0,a.jsx)("img",{src:"assets\\images\\password.png",alt:"email icon",className:c().inputIcon}),(0,a.jsx)(i.Z.Control,{className:c().formControl,type:"text",placeholder:"Password",onChange:s=>o(s.target.value)})]}),(0,a.jsxs)("div",{className:c().checkBoxparant,children:[[""].map(s=>(0,a.jsx)("div",{className:c().checkBox,children:(0,a.jsx)(i.Z.Check,{id:"default-".concat(s),label:"Remember me ".concat(s),className:c().checkbx})},"default-".concat(s))),(0,a.jsx)("p",{className:"".concat(c().contactUs," mb-0"),children:"Forgot password?"})]}),(0,a.jsx)("div",{className:c().btn,children:(0,a.jsx)("button",{type:"submit",className:c().submitBtn,children:" Log In "})})]})})]})})}},6010:function(s,e,t){"use strict";t.d(e,{HI:function(){return i},LP:function(){return r},YV:function(){return l},bm:function(){return c}});var a=t(1955);let n="token",o="refresh_token",c=(s,e)=>{a.Z.set(n,s,{expires:7,secure:!0,sameSite:"strict"}),a.Z.set(o,e,{expires:7,secure:!0,sameSite:"strict"})},r=()=>a.Z.get(n),l=()=>a.Z.get(o),i=()=>{a.Z.remove(n),a.Z.remove(o)}},5493:function(s,e,t){"use strict";let a;var n=t(7066),o=t(1955);e.Z=function(s){return a||(a=function(s){let e={baseURL:"https://beta.lms-api.callgtcindia.com/v1",headers:{"Content-Type":"application/json"}};if(s&&s.req){let{headers:t}=s.req;t.cookie&&e.headers&&(e.headers.cookie=t.cookie)}let t=n.Z.create(e);return t.interceptors.request.use(s=>{let e=o.Z.get("token");return e&&(s.headers.Authorization="Bearer ".concat(e)),s},s=>Promise.reject(s)),t.interceptors.response.use(s=>s,s=>Promise.reject(s)),t}(s)),a}},1424:function(s){s.exports={form:"styles_form__BHLEa",manidiv:"styles_manidiv__BRjp9",col1:"styles_col1__d9VQN",col1Img:"styles_col1Img__ewG5Z",col2:"styles_col2__KXDbk",h1:"styles_h1__E05xb",acc:"styles_acc__P8tEa",contactUs:"styles_contactUs__GikG6",formGroup:"styles_formGroup__RpV8P",FormLabel:"styles_FormLabel__r6ZIe",btn:"styles_btn__u_zre",checkBoxparant:"styles_checkBoxparant__jkFlj",checkbx:"styles_checkbx__kroo0",submitBtn:"styles_submitBtn__KoTBS","custom-input":"styles_custom-input__fKOWE",formControl:"styles_formControl__vlIoy",inputIcon:"styles_inputIcon__uPCQG",nolimits:"styles_nolimits__lRs0W",text:"styles_text__XVPSo",imagesDiv:"styles_imagesDiv__HfwaZ",textMainDiv:"styles_textMainDiv__xoyYj",arrows:"styles_arrows__TEMAH","form-control":"styles_form-control__x3kzE"}}},function(s){s.O(0,[66,901,888,774,179],function(){return s(s.s=3700)}),_N_E=s.O()}]);