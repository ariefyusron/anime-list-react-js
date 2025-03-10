import{d as n,a as m,u as x,j as o}from"./index-CPyUWSOg.js";import{b as d}from"./useAnime-BTtJBO_4.js";import{L as g}from"./index-C-8SxZbq.js";const h=n.div`
  background-color: ${({theme:i})=>i.color.background};
  height: 90px;
  display: flex;
  align-items: center;
  gap: 32px;
  padding: 0 32px;
  position: sticky;
  top: 0;
`,j=n.h1`
  margin: 0;
  color: ${({theme:i})=>i.color.white};
  font-size: 40px;
`,f=n.div`
  color: ${({theme:i})=>i.color.smokeWhite};
  font-size: 20px;
  height: 100%;
  display: flex;
  align-items: center;
  padding: 0 16px;

  &:hover {
    cursor: pointer;
    background-color: rgba(255, 255, 255, 0.2);
  }
`,u=n.div`
  padding: 32px;
  display: flex;
`,y=n.img`
  width: 200px;
  align-self: center;
  margin-bottom: 8px;
`,l=n.div`
  border: 1px solid ${({theme:i})=>i.color.smokeWhite};
  border-radius: 4px;
  padding: 4px;
  display: flex;
  flex-direction: column;
`,r=n.div`
  font-size: 16px;
  color: ${({theme:i})=>i.color.smokeWhite};
  font-weight: 500;
`,T=()=>{const{malId:i}=m(),a=x(),{data:e,isLoading:t}=d(String(i)),p={Type:e==null?void 0:e.data.type,Episodes:e==null?void 0:e.data.episodes,Status:e==null?void 0:e.data.status,Aired:e==null?void 0:e.data.aired.string,Broadcast:e==null?void 0:e.data.broadcast.string,Producers:e==null?void 0:e.data.producers.map(s=>s.name).join(", "),Licensors:e==null?void 0:e.data.licensors.map(s=>s.name).join(", "),Studios:e==null?void 0:e.data.studios.map(s=>s.name).join(", "),Source:e==null?void 0:e.data.source,Genres:e==null?void 0:e.data.genres.map(s=>s.name).join(", "),Themes:e==null?void 0:e.data.themes.map(s=>s.name).join(", "),Demographics:e==null?void 0:e.data.demographics.map(s=>s.name).join(", "),Duration:e==null?void 0:e.data.duration,Rating:e==null?void 0:e.data.rating},c={Score:e==null?void 0:e.data.score,Ranked:e==null?void 0:e.data.rank,Popularity:e==null?void 0:e.data.popularity,Members:e==null?void 0:e.data.members,Favorites:e==null?void 0:e.data.favorites};return o.jsxs(o.Fragment,{children:[o.jsxs(h,{children:[o.jsx(f,{onClick:()=>a(-1),children:"Back"}),o.jsx(j,{children:t?"Loading...":e==null?void 0:e.data.title})]}),t?o.jsx(g,{style:{display:"flex",justifyContent:"center",marginTop:"100px"}}):o.jsxs(u,{children:[o.jsxs(l,{children:[o.jsx(y,{alt:"image-detail",src:e==null?void 0:e.data.images.webp.large_image_url}),o.jsx(r,{children:e==null?void 0:e.data.title_japanese}),o.jsx(r,{style:{marginTop:"8px",borderBottom:"1px solid #fff"},children:"Informasi"}),Object.keys(p).map(s=>o.jsx(r,{style:{marginTop:"4px"},children:`${s}: ${p[s]}`},s))]}),o.jsxs(l,{style:{flex:1},children:[o.jsxs("div",{children:[o.jsx(r,{style:{marginTop:"8px",borderBottom:"1px solid #fff"},children:"Statistic"}),Object.keys(c).map(s=>o.jsx(r,{style:{marginTop:"4px"},children:`${s}: ${c[s]}`},s))]}),o.jsxs("div",{children:[o.jsx(r,{style:{marginTop:"8px",borderBottom:"1px solid #fff",marginBottom:"4px"},children:"Synopsis"}),o.jsx(r,{children:e==null?void 0:e.data.synopsis})]})]})]})]})};export{T as default};
