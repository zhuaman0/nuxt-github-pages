import B from"./BbpvAUzC.js";import{_ as r,f as v,o as C,c as p,t as o,v as c,x as s,K as A,Q as _,Y as i,z as u,a0 as g}from"./Bt-1E1cX.js";import{u as b}from"./CGzIBdTl.js";import"./BX4p_2E3.js";const f="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEgAAABICAYAAABV7bNHAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAANJSURBVHgB7ZtdTlpBFIDPDJfLUw07KO5AV1BIq0mf6g6sK6jYtIkxptdYS9LGmiZ9166g8tSkxkBXIDsoS+BV8M50jmKihGYG7nBGrucz1x8Yksvnmb9zBgCGYRiGYRiGGYNwbdho/KroUulYg14yf5ZhThEaTvv9fj3Zftl1au/SCOWoUnwBcyxmhN7gsr/sIkmCAyqOjyA/cpBybHqDS0MnQSbO1iBnDIcKK26C8olTj3jMgpxgQRZYkAUWZCG4IDObtM23DbMuWdzZei7wgqt0GR8z1ykEJoJwdFWqNnbfrbRHn9h5v9oxP/A6aRy1Kkqrlvm9AgEIFEG6MxByeZycUbbrtS62NYuxDgQghCDzhgu1pF7rub4A2w6EqOFrgRhyQSYaJpJzC74GuyQQQyxIN80b7cKUYJcUINpACK0gLTLPSlrrH0AIrSCZZh5opZRtIIRU0E59NbOg7QxddBp4JW2BVNDH7+dPISMHn3875XF8QSpIXaY1yEqhkF9BkYjWITuvgBBSQWZjWt3/claFKcHiAXX6l3yQlgV5nBy1Ji4AJMnPsqmstICYELNYpah1axJJKKe48CTIjj7Ubn6pqNVFgl3GAnbJ4sKCqckJ0sH5lpD5oEqxFP/9dHh+qgGakKadYR4IUFwxjqtCiHUctyAgIQVdo28G3TWICnDw9fz+c+YrNLyStsCCLLAgCyzIQvBBekhXg+jef0iVRaCp/S7kgszM1DFz0x+pRWfQ77dtZ3Rw966krJhYrwqAZ9TSSATdFAdF80rKk0kT9ndqZNfp2us6mVJVLfQbClkzFYRidKr3XOpfrgwziid4YXTpSG4aUT6yBGOZiaBZiBnHMLpem6hKZlV99S5Igf62u/ViEwgZRtXi/uFZIoX8AB7xOs2b/+IetZy77L5dwUjaA494E4TdCm8QAoP34LO46E+QGXPggZCmqbd78SZo1gPyJKRR5O0kSC63GtMcjvgfvBez4E2QS/qUiobHe/G2DsL06WhGMBQK/MFdzAILssCCLLAgC66CvK0r5g0nQSLQGeXZopsurdwECYHHb/MURb2BKDhlHZwEYb5F4mn3B/DZiYz0MOuAJ/cT4rOODMMwDMMwTM74B/CPKW6tU9jGAAAAAElFTkSuQmCC",x={key:0,class:"item-con"},y={key:1,class:"item-con"},I={key:2,class:"item-empty"},h={__name:"BoxesItems",setup(l){const n=b(),t=v(0);C(async()=>{await n.fetchFinanceData(),t.value=n.finances.reduce((a,e)=>a+(e.money?parseFloat(e.money):0),0)});const d=p(()=>t.value>52e5),m=p(()=>t.value>16652e4);return(a,e)=>(o(),c("div",null,[d.value?(o(),c("div",x,e[0]||(e[0]=[s("p",null,"Your money is more than 5200000. Consider doing some financial planning, like investing or controlling your expenses.",-1)]))):A("",!0),m.value?(o(),c("div",y,e[1]||(e[1]=[s("p",null,"Your money is more than 166520000. Consider doing some financial planning, like investing or controlling your expenses.",-1)]))):(o(),c("div",I,e[2]||(e[2]=[s("div",{class:"empty-"},[s("img",{src:f,alt:""})],-1),s("h1",null,"There is no messages",-1)])))]))}},k=r(h,[["__scopeId","data-v-830df25b"]]),S={};function Y(l,n){return o(),c("div",null," Second Tab ")}const w=r(S,[["render",Y]]),Q={class:"boxes-container"},Z={class:"boxes-header"},M={class:"boxes-first"},G={class:"boxes-second"},K={class:"i"},N={class:"i"},T={__name:"BoxesContainer",setup(l){const n=v(1),t=()=>{n.value=2},d=()=>{n.value=1};return(m,a)=>{const e=B;return o(),c("div",null,[s("div",Q,[s("div",Z,[s("div",M,[s("h1",{onClick:d,class:_({active:i(n)===1})},"All",2),s("div",{onClick:t,class:"news"},[s("h1",{class:_({active:i(n)===2})},"News",2),a[0]||(a[0]=s("p",null,"4 New",-1))]),a[1]||(a[1]=s("div",{class:"promotions"},[s("h1",null,"Promotions"),s("p",null,"12 New")],-1))]),s("div",G,[s("div",K,[u(e,{class:"bolt",name:"lucide:bolt"})]),s("div",N,[u(e,{class:"bolt",name:"lucide:refresh-ccw"})])])]),i(n)===1?(o(),g(k,{key:0,class:"ch"})):A("",!0),i(n)===2?(o(),g(w,{key:1,class:"ch"})):A("",!0)])])}}},E=r(T,[["__scopeId","data-v-85462f4d"]]),F={__name:"inbox",setup(l){return(n,t)=>(o(),c("div",null,[t[0]||(t[0]=s("div",{class:"header-container"},[s("div",{class:"header-title"},[s("h1",null,"customers")]),s("div",{class:"user-add"},[s("button",{class:"export"},"Export")])],-1)),u(E,{class:"con"})]))}},J=r(F,[["__scopeId","data-v-bc00555c"]]);export{J as default};