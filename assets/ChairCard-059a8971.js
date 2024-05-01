import{s as i,u as a,a as u,r as d,j as e,b as p,c as j,d as f}from"./index-c7f5325b.js";import{C as m}from"./Card-6744f125.js";const v=i.div`
height: 100%;
overflow-y: auto;
`,y=i.ul`
display: flex;
flex-direction: column;
`,b=i.li`
overflow: hidden;
`,R=i.button`
width: 100%;
height: 100%;
padding: 0;
margin: 0;
border: 0;
`,w=i.img`
width: 100%;
height: 100%;
object-fit: cover;
`,I=({photo:s,alt:c})=>{const n=a(u),r=d.useRef(null),t=d.useRef(null);return d.useEffect(()=>{if(t.current&&r.current){const o=n>1e3?1e3:n,l=2,h=t.current;h.style.width=o/(l*7)+"px",h.style.height=o/(l*7)+"px",h.style.borderRadius=o/(l*70)+"px"}},[n]),e.jsx(b,{ref:t,children:e.jsx(R,{ref:r,children:e.jsx(w,{src:s,alt:c})})})},W=({photos:s,title:c})=>{const n=a(u),r=d.useRef(null);return d.useEffect(()=>{if(r.current){const t=n>1e3?1e3:n,o=2,l=r.current;l.style.gap=t/(o*50)+"px"}},[n]),e.jsx(v,{children:e.jsx(y,{ref:r,children:s&&s.map(t=>e.jsx(I,{photo:t,alt:c},t))})})},C=i.div`
display: flex;
`,$=i.div`
display: flex;
flex-direction: column;
justify-content: center;
height: 100%;
`,x=i.button`
background-color: transparent;
`,g=i.svg`
  width: ${s=>s.size||"20px"};
  height: ${s=>s.size||"20px"};
  fill: ${s=>s.color||"#000"};
  display: inline-block;
`,E=i.img`
height: 100%;
object-fit: cover;
`,D=()=>{const{id:s}=p(),c=a(j).find(t=>t.id===s),n=a(u),r=d.useRef(null);return d.useEffect(()=>{if(r.current){const t=n>1e3?1e3:n,o=2,l=r.current;l.style.height=t/(o*1.5)+"px",l.style.gap=t/(o*15)+"px"}},[n]),e.jsx(m,{children:c&&e.jsxs(C,{ref:r,children:[e.jsxs($,{children:[e.jsx(x,{children:e.jsx(g,{children:e.jsx("use",{href:`${f}#arrow-up`})})}),e.jsx(W,{photos:c.images,title:c.title}),e.jsx(x,{children:e.jsx(g,{children:e.jsx("use",{href:`${f}#arrow-down`})})})]}),e.jsx(E,{src:c.titleImage,alt:c.title})]})})};export{D as default};
