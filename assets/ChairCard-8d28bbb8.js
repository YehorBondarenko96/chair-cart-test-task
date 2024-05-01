import{s as c,u as a,a as u,r as d,j as e,b as p,c as g,d as f}from"./index-75a1d04e.js";import{C as m}from"./Card-63c7d32b.js";const v=c.div`
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
`,I=({photo:t,alt:i})=>{const n=a(u),r=d.useRef(null),s=d.useRef(null);return d.useEffect(()=>{if(s.current&&r.current){const o=n>1e3?1e3:n,l=2,h=s.current;h.style.width=o/(l*7)+"px",h.style.height=o/(l*7)+"px",h.style.borderRadius=o/(l*70)+"px"}},[n]),e.jsx(R,{ref:s,children:e.jsx(b,{ref:r,children:e.jsx(w,{src:t,alt:i})})})},W=({photos:t,title:i})=>{const n=a(u),r=d.useRef(null);return d.useEffect(()=>{if(r.current){const s=n>1e3?1e3:n,o=2,l=r.current;l.style.gap=s/(o*50)+"px"}},[n]),e.jsx(v,{children:e.jsx(y,{ref:r,children:t&&t.map(s=>e.jsx(I,{photo:s,alt:i},s))})})},C=c.div`

`,$=c.div`
display: flex;
flex-direction: column;
justify-content: center;
height: 100%;
`,x=c.button`
background-color: transparent;
`,j=c.svg`
  width: ${t=>t.size||"36px"};
  height: ${t=>t.size||"36px"};
  fill: ${t=>t.color||"#000"};
  display: inline-block;
`,B=()=>{const{id:t}=p(),i=a(g).find(s=>s.id===t),n=a(u),r=d.useRef(null);return d.useEffect(()=>{if(r.current){const s=n>1e3?1e3:n,o=2,l=r.current;l.style.height=s/(o*2)+"px"}},[n]),e.jsx(m,{children:i&&e.jsx(C,{ref:r,children:e.jsxs($,{children:[e.jsx(x,{children:e.jsx(j,{children:e.jsx("use",{href:`${f}#arrow-up`})})}),e.jsx(W,{photos:i.images,title:i.title}),e.jsx(x,{children:e.jsx(j,{children:e.jsx("use",{href:`${f}#arrow-down`})})})]})})})};export{B as default};
