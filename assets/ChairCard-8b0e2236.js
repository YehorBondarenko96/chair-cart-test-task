import{s as c,u,a as h,r as d,j as e,b as j,c as g,d as f}from"./index-acf92754.js";import{C as m}from"./Card-9f3f2730.js";const v=c.div`
height: 100%;
overflow-y: auto;
`,y=c.ul`
display: flex;
flex-direction: column;
`,R=c.li`
overflow: hidden;
`,b=c.button`
width: 100%;
height: 100%;
padding: 0;
margin: 0;
border: 0;
`,w=c.img`
width: 100%;
height: 100%;
object-fit: cover;
`,W=({photo:t,alt:i})=>{const n=u(h),r=d.useRef(null),s=d.useRef(null);return d.useEffect(()=>{if(s.current&&r.current){const o=n>1e3?1e3:n,l=2,a=s.current;a.style.width=o/(l*7)+"px",a.style.height=o/(l*7)+"px",a.style.borderRadius=o/(l*70)+"px"}},[n]),e.jsx(R,{ref:s,children:e.jsx(b,{ref:r,children:e.jsx(w,{src:t,alt:i})})})},C=({photos:t,title:i})=>{const n=u(h),r=d.useRef(null);return d.useEffect(()=>{if(r.current){const s=n>1e3?1e3:n,o=2,l=r.current;l.style.gap=s/(o*50)+"px"}},[n]),e.jsx(v,{children:e.jsx(y,{ref:r,children:t&&t.map(s=>e.jsx(W,{photo:s,alt:i},s))})})},I=c.div`
display: flex;
flex-direction: column;
justify-content: center;
`,x=c.button`
background-color: transparent;
`,p=c.svg`
  width: ${t=>t.size||"36px"};
  height: ${t=>t.size||"36px"};
  fill: ${t=>t.color||"#000"};
  display: inline-block;
`,S=()=>{const{id:t}=j(),i=u(g).find(s=>s.id===t),n=u(h),r=d.useRef(null);return d.useEffect(()=>{if(r.current){const s=n>1e3?1e3:n,o=2,l=r.current;l.style.height=s/(o*2)+"px"}},[n]),e.jsx(m,{children:i&&e.jsxs(I,{ref:r,children:[e.jsx(x,{children:e.jsx(p,{children:e.jsx("use",{href:`${f}#arrow-up`})})}),e.jsx(C,{photos:i.images,title:i.title}),e.jsx(x,{children:e.jsx(p,{children:e.jsx("use",{href:`${f}#arrow-down`})})})]})})};export{S as default};
