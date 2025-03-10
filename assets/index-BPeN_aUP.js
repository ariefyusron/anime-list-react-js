import{d as a,u as i,j as t,O as c}from"./index-CPyUWSOg.js";import{u as l}from"./useAnime-BTtJBO_4.js";const d=a.div`
  background-color: ${({theme:e})=>e.color.background};
  height: 90px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 32px;
  position: sticky;
  top: 0;
`,p=a.h1`
  margin: 0;
  color: ${({theme:e})=>e.color.white};
  font-size: 40px;
`,h=a.input`
  padding: 8px 16px;
  border-radius: 8px;
  width: 300px;
`,u=a.button`
  margin-left: 8px;
  padding: 4px;
  color: ${({theme:e})=>e.color.background};
`,m=()=>{const e=i(),{handleSearch:o,valueSearch:s}=l();return t.jsxs(t.Fragment,{children:[t.jsxs(d,{children:[t.jsx(p,{children:"Anime"}),t.jsxs("div",{children:[t.jsx(h,{placeholder:"search",value:s,onChange:r=>{const n=r.target.value;o(n),n.length===1?e(`/search?q=${n}`):n.length<1&&e("/")}}),t.jsx(u,{disabled:!s,onClick:()=>{o(""),e("/")},children:"clear"})]})]}),t.jsx(c,{})]})};export{m as default};
