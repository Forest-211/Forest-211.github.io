import{f as e,u as t,g as a,h as s,o as i,c as o,b as l,w as n,a as c,t as r,_ as f,p as v,i as d,F as u,r as m,j as k,k as p}from"./app.4a65f7e1.js";v("data-v-0cb9fda2");const h={key:0,class:"home-hero"},g={key:0,class:"figure"},y={key:1,id:"main-title",class:"title"},x={key:2,class:"description"};d();var _=e({setup(e){const{site:v,frontmatter:d}=t(),u=a((()=>{const{heroImage:e,heroText:t,tagline:a,actionLink:s,actionText:i}=d.value;return e||t||a||s&&i})),m=a((()=>d.value.heroText||v.value.title));return(e,t)=>s(u)?(i(),o("header",h,[s(d).heroImage?(i(),o("figure",g,[l("img",{class:"image",src:s(n)(s(d).heroImage),alt:s(d).heroAlt},null,8,["src","alt"])])):c("v-if",!0),s(m)?(i(),o("h1",y,r(s(m)),1)):c("v-if",!0),s(d).tagline?(i(),o("p",x,r(s(d).tagline),1)):c("v-if",!0),s(d).actionLink&&s(d).actionText?(i(),o(f,{key:3,item:{link:s(d).actionLink,text:s(d).actionText},class:"action"},null,8,["item"])):c("v-if",!0),s(d).altActionLink&&s(d).altActionText?(i(),o(f,{key:4,item:{link:s(d).altActionLink,text:s(d).altActionText},class:"action alt"},null,8,["item"])):c("v-if",!0)])):c("v-if",!0)}});_.__scopeId="data-v-0cb9fda2",v("data-v-e39c13e0");const I={key:0,class:"home-features"},T={class:"wrapper"},b={class:"container"},A={class:"features"},L={key:0,class:"title"},$={key:1,class:"details"};d();var j=e({setup(e){const{frontmatter:n}=t(),f=a((()=>n.value.features&&n.value.features.length>0)),v=a((()=>n.value.features?n.value.features:[]));return(e,t)=>s(f)?(i(),o("div",I,[l("div",T,[l("div",b,[l("div",A,[(i(!0),o(u,null,m(s(v),((e,t)=>(i(),o("section",{key:t,class:"feature"},[e.title?(i(),o("h2",L,r(e.title),1)):c("v-if",!0),e.details?(i(),o("p",$,r(e.details),1)):c("v-if",!0)])))),128))])])])])):c("v-if",!0)}});j.__scopeId="data-v-e39c13e0",v("data-v-30918238");const w={key:0,class:"footer"},C={class:"container"},F={class:"text"};d();var q=e({setup(e){const{frontmatter:a}=t();return(e,t)=>s(a).footer?(i(),o("footer",w,[l("div",C,[l("p",F,r(s(a).footer),1)])])):c("v-if",!0)}});q.__scopeId="data-v-30918238",v("data-v-32eddf2f");const z={class:"home","aria-labelledby":"main-title"},B={class:"home-content"};d();var D=e({setup:e=>(e,t)=>{const a=k("Content");return i(),o("main",z,[l(_),p(e.$slots,"hero",{},void 0,!0),l(j),l("div",B,[l(a)]),p(e.$slots,"features",{},void 0,!0),l(q),p(e.$slots,"footer",{},void 0,!0)])}});D.__scopeId="data-v-32eddf2f";export default D;
