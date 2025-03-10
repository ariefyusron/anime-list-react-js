import{d as i,r as c,u as d,j as o}from"./index-CPyUWSOg.js";import{L as m}from"./index-C-8SxZbq.js";const s={tv:"tv",movie:"movie",ova:"ova",special:"special",ona:"ona",music:"music",cm:"cm",pv:"pv",tvSpecial:"tv_special"},g=i.div`
  background-color: ${({theme:e})=>e.color.background};
  border: 1px solid #000;
  border-radius: 8px;
  overflow: hidden;
  box-shadow: 0px 0px 23px 1px rgba(0, 0, 0, 0.54);
  -webkit-box-shadow: 0px 0px 23px 1px rgba(0, 0, 0, 0.54);
  -moz-box-shadow: 0px 0px 23px 1px rgba(0, 0, 0, 0.54);

  &:hover {
    cursor: pointer;
    box-shadow: 0 10px 20px rgba(0, 0, 0, 0.5);
    z-index: 10;
    transform: scale(1.2) translateY(-20px);
    transition:
      transform 0.3s ease,
      box-shadow 0.3s ease;
  }
`,v=i.img`
  height: 150px;
  width: 100%;
  object-fit: cover;
  background-color: ${({theme:e})=>e.color.smokeWhite};
`,h=i.div`
  padding: 8px 16px 16px;
`,u=i.h2`
  margin: 0;
  color: ${({theme:e})=>e.color.white};
  font-weight: 600;
  font-size: 20px;
  display: -webkit-box;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 2;
  overflow: hidden;
  text-overflow: ellipsis;
`,b=i.div`
  display: flex;
  margin-top: 8px;
  margin-bottom: 4px;
  align-items: center;
  gap: 8px;
`,f=i.p`
  margin: 0;
  color: ${({theme:e})=>e.color.smokeWhite};
  font-size: 12px;
  border: 1px solid ${({theme:e})=>e.color.smokeWhite};
  padding: 2px;
  border-radius: 4px;
`,x=i.p`
  margin: 0;
  color: ${({theme:e})=>e.color.smokeWhite};
  font-size: 12px;
  font-weight: 600;
`,w=i(x)`
  font-size: 12px;
  font-weight: 500;
`,j=({data:e,"data-testid":a})=>{const[p,n]=c.useState(!1),l=d(),r=()=>{const t=e.type.toLocaleLowerCase();return t===s.tv||t===s.ova||t===s.special||t===s.ona?`${e.episodes??"-"} episodes`:t===s.movie||t===s.music||t===s.cm||t===s.pv||t.replace(" ","_")===s.tvSpecial?`${e.duration??"-"}`:""};return o.jsxs(g,{"data-testid":a,onMouseEnter:()=>n(!0),onMouseLeave:()=>n(!1),onClick:()=>{l(`/detail/${e.mal_id}`)},children:[o.jsx(v,{src:e.images.webp.image_url,alt:"image-anime"}),o.jsxs(h,{children:[o.jsx(u,{style:p?{textOverflow:"unset",WebkitLineClamp:"unset"}:void 0,children:e.title}),p&&o.jsxs(o.Fragment,{children:[o.jsxs(b,{children:[o.jsx(f,{children:e.type}),o.jsx(x,{children:r()})]}),o.jsx(w,{children:e.genres.map(t=>t.name).join(" - ")})]})]})]})},k=i.div`
  display: grid;
  grid-template-columns: repeat(6, 1fr);
  align-items: start;
  gap: 16px;
  padding: 32px;
`,T=({isLoading:e,data:a})=>{var p;return o.jsx(o.Fragment,{children:e?o.jsx(m,{style:{display:"flex",justifyContent:"center",marginTop:"100px"}}):o.jsx(k,{children:(p=a==null?void 0:a.pages)==null?void 0:p.map(n=>{var l;return(l=n==null?void 0:n.data)==null?void 0:l.map(r=>o.jsx(j,{"data-testid":String(r.mal_id),data:r},r==null?void 0:r.mal_id))})})})};export{T as C};
