import{_ as w,J as _,f as i,t as d,v as c,x as t,L as h,O as v,P as p,K as C,B as A}from"./Bt-1E1cX.js";import{_ as U}from"./HN1e2tPr.js";import{u as b}from"./CQ8wRIkw.js";import"./BX4p_2E3.js";const x={class:"layout-register"},R={class:"layout-registerg"},S={class:"register-container"},k={class:"email"},B={class:"password"},E={class:"avatar"},N={key:0,class:"avatar-preview"},T=["src"],V={__name:"register",setup(L){const n=_(),m=b(),o=i(""),r=i(""),s=i(null),g=l=>{const e=l.target.files[0];if(e){const a=new FileReader;a.onloadend=()=>{s.value=a.result},a.readAsDataURL(e)}},f=()=>{n.push("/login")},u=Math.floor(Math.random()*9e5)+1e5,y=async()=>{const l={email:o.value,password:r.value,code:u,avatar:s.value};await m.registerUser(l)?(alert("Account created successfully!"),localStorage.setItem("registerUserCode",u),localStorage.setItem("avatar",s.value),o.value="",r.value="",s.value=null):alert("Error creating account, please try again."),n.push("/check")};return(l,e)=>(d(),c("div",null,[t("div",x,[e[8]||(e[8]=t("div",{class:"layout-image"},[t("img",{src:U,alt:""})],-1)),t("div",R,[t("div",S,[e[7]||(e[7]=t("div",{class:"header-register"},[t("h1",null,"CREATE AN ACCOUNT"),t("p",null,"Create your account to start managing your wealth.")],-1)),t("form",{onSubmit:h(y,["prevent"]),action:""},[t("div",k,[e[2]||(e[2]=t("label",{for:"email"},"Email",-1)),v(t("input",{"onUpdate:modelValue":e[0]||(e[0]=a=>o.value=a),id:"email",placeholder:"Sample@gmail.com",type:"text"},null,512),[[p,o.value]])]),t("div",B,[e[3]||(e[3]=t("label",{for:""},"Password",-1)),v(t("input",{"onUpdate:modelValue":e[1]||(e[1]=a=>r.value=a),placeholder:"Password",type:"password"},null,512),[[p,r.value]])]),t("div",E,[e[4]||(e[4]=t("label",{for:"avatar"},"Avatar",-1)),t("input",{type:"file",onChange:g,accept:"image/*"},null,32)]),s.value?(d(),c("div",N,[t("img",{src:s.value,alt:"Avatar Preview",width:"100",height:"100"},null,8,T)])):C("",!0),t("h1",{class:"h"},[e[5]||(e[5]=A("By creating an account, you agree to our ")),t("span",{onClick:f,class:"register-bold"},"Login")]),e[6]||(e[6]=t("button",{type:"submit",class:"sign"},"Create an account",-1))],32)])])])]))}},O=w(V,[["__scopeId","data-v-ac30cf5f"]]);export{O as default};
