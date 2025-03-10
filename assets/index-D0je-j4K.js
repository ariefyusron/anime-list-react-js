import{d as n,j as e}from"./index-CPyUWSOg.js";import{u as o}from"./useAnime-BTtJBO_4.js";import{C as r}from"./index-BMQwmTOw.js";import"./index-C-8SxZbq.js";const a=n.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex: 1;

  div {
    color: ${({theme:t})=>t.color.smokeWhite};
    font-weight: 500;
    font-size: 18px;
  }
`,h=()=>{const{data:t,isFetching:i,valueSearch:s}=o();return e.jsx(e.Fragment,{children:i||((t==null?void 0:t.data)??[]).length>1?e.jsx(r,{isLoading:i,data:{pages:[t]}}):e.jsx(a,{children:e.jsxs("div",{children:['"',s,'" tidak ditemukan']})})})};export{h as default};
