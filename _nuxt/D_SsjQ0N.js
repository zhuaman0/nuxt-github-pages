import{_ as p,f as r,t as u,v as m,x as t,O as n,P as i,L as v,y as f,K as b}from"./Bt-1E1cX.js";const c={class:"form-container"},y={class:"form-group"},g={class:"form-group"},S={class:"form-group"},w={class:"form-group"},_={key:0},x={__name:"contact",setup(N){const o=r({access_key:"61c468e8-7780-4813-a691-5efab6852ebd",subject:"New Submission from Web3Forms",name:"",email:"",phone:"",desc:""}),s=r(""),d=async()=>{s.value="Please wait...";try{console.log("Sending data:",JSON.stringify(o.value));const l=await $fetch("https://api.web3forms.com/submit",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(o.value)});console.log(l),s.value=l.message,l.status===200||(s.value="Error in submission")}catch(l){console.log(l),s.value="Something went wrong!"}finally{o.value.name="",o.value.email="",o.value.phone="",o.value.desc="",setTimeout(()=>{s.value=""},5e3)}};return(l,e)=>(u(),m("div",c,[t("form",{class:"form",onSubmit:v(d,["prevent"])},[t("div",y,[e[4]||(e[4]=t("label",{for:"name"},"Name",-1)),n(t("input",{type:"text",id:"name","onUpdate:modelValue":e[0]||(e[0]=a=>o.value.name=a),required:""},null,512),[[i,o.value.name]])]),t("div",g,[e[5]||(e[5]=t("label",{for:"email"},"Email",-1)),n(t("input",{type:"email",id:"email","onUpdate:modelValue":e[1]||(e[1]=a=>o.value.email=a),required:""},null,512),[[i,o.value.email]])]),t("div",S,[e[6]||(e[6]=t("label",{for:"phone"},"Phone",-1)),n(t("input",{type:"tel",id:"phone","onUpdate:modelValue":e[2]||(e[2]=a=>o.value.phone=a),required:""},null,512),[[i,o.value.phone]])]),t("div",w,[e[7]||(e[7]=t("label",{for:"desc"},"Description",-1)),n(t("textarea",{id:"desc","onUpdate:modelValue":e[3]||(e[3]=a=>o.value.desc=a),required:""},null,512),[[i,o.value.desc]])]),e[8]||(e[8]=t("button",{type:"submit",class:"submit-btn"},"Submit",-1))],32),s.value?(u(),m("p",_,f(s.value),1)):b("",!0)]))}},h=p(x,[["__scopeId","data-v-c904f97b"]]);export{h as default};
