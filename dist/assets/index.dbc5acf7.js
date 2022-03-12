import{s as i,j as c,C as h,A as p,a as f,W as g,B as m,R as x,b,c as v,d as y}from"./vendor.4832e08e.js";const w=function(){const n=document.createElement("link").relList;if(n&&n.supports&&n.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))s(t);new MutationObserver(t=>{for(const r of t)if(r.type==="childList")for(const a of r.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&s(a)}).observe(document,{childList:!0,subtree:!0});function u(t){const r={};return t.integrity&&(r.integrity=t.integrity),t.referrerpolicy&&(r.referrerPolicy=t.referrerpolicy),t.crossorigin==="use-credentials"?r.credentials="include":t.crossorigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function s(t){if(t.ep)return;t.ep=!0;const r=u(t);fetch(t.href,r)}};w();const k=i.div`
    --size-avatar: 300px;

    > figure, img {
        width: var(--size-avatar);
        height: var(--size-avatar);
        
        border: 1px solid var(--blue);
        border-radius: 50%;
    }
`,e=c.exports.jsx,o=c.exports.jsxs,E=({path:l,name:n})=>e(k,{children:e("figure",{children:e("img",{src:l,alt:n})})}),A=i.div`
    --horizontalPadding: 16px;
    --verticalPadding: 24px;
`,P=i.div`
    padding: var(--verticalPadding) var(--horizontalPadding);

    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;

    max-width: 100vw;
    height: 100vh;
`,R=i.div`
    width: 600px;
    display: flex;
    flex-direction: column;

    margin-right: 150px;
    
    > li {
        display: flex;
        align-items: center;
        margin-bottom: 4px;
        
        h1 {
            font-size: 42px;
            font-weight: bold;
        }
        
        h1 + h1 {
            font-weight: 300;
            margin-left: 16px;
        }
    }

    h2 {
        font-weight: bold;
        font-size: 28px;
        color: var(--blue);
    }

    p {
        max-width: 500px;
        margin-top: 16px;
        margin-bottom: 18px;
        
        font-weight: 300;
        font-size: 16px;
    }
`,j=i.div`
    display: flex;
    flex-direction: row;
    
    margin: 0 auto;
    max-width: 100vw;
    height: 100vh;
    
    background: #000000;
`,d=h`
    width: 32px;
    height: 32px;
    fill: black;
    flex-shrink: 0;
    margin-right: 8px;
`,z=i(p)`${d}`,F=i(f)`${d}`,L=()=>o(A,{children:[o(P,{children:[o(R,{children:[o("li",{children:[e("h1",{children:"Ol\xE1, eu sou"}),e("h1",{children:"Andevaldo Vit\xF3rio"})]}),e("h2",{children:"Estudante de Engenharia da Computa\xE7\xE3o"}),e("h2",{children:"T\xE9cnico em Mecatr\xF4nica"}),e("p",{children:"Eu tenho, experi\xEAncias como professor tutor nas disciplinas de Matem\xE1tica, L\xEDngua Portuguesa e Inglesa; Aptid\xE3o com softwares; Participa\xE7\xE3o com projetos tecno-cient\xEDfico."}),o("li",{children:[e(z,{}),e(F,{})]})]}),e(E,{path:"./src/assets/avatar.jpg",name:"Andevaldo"})]}),e(j,{children:e("p",{children:"Resumo"})})]});var O=g`
   
    
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;

        scrollbar-width: thin;
        scrollbar-color: blue orange;
    }

    *::-webkit-scrollbar {
        width: 12px;
    }

    *::-webkit-scrollbar-thumb {
        background: black;
    }

    *::-webkit-scrollbar-thumb {
        border-radius: 20px;       /* roundness of the scroll thumb */
    }

    html {
        min-height: 100%;
        background: var(--background);
    } 

    *, button, input {
        border: 0;
        background: none;
        /* font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif; */
        font-family: 'inter', sans-serif;
        color: var(--black);
    }

    ul {
        list-style: none;
    };

    :root {
        --background: #E8F1F2;
        --black: #000000;
        --red: #A4262C;
        --blue: #13293D;
    }
`;function C(){return o(m,{children:[e(O,{}),e(x,{children:e(b,{path:"/",element:e(L,{})})})]})}v.render(e(y.StrictMode,{children:e(C,{})}),document.getElementById("root"));
