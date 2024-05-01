import{s as d,e as l,r as a,j as c}from"./index-eec4d01c.js";const f=d.div`
  display: flex;
  justify-content: center;
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background-color: rgba(0, 0, 0, 0.8);
  overflow-y: auto;
  z-index: 2;
`,v=d.div`
  display: inline-block;
  width: 100%;
  margin: 40px 20px;
  padding: 24px 12px;
  border-radius: 10px;
  background-color: #fff;
  position: relative;
`,u=({children:p})=>{const r=l(),e=a.useRef(null);return a.useEffect(()=>{if(e.current){const t=e.current,i=n=>{n.target.classList.contains("backdropChair")&&s()},s=()=>{window.removeEventListener("keydown",o),t.removeEventListener("click",i),r("/")},o=n=>{n.code==="Escape"&&s()};return window.addEventListener("keydown",o),t.addEventListener("click",i),()=>{window.removeEventListener("keydown",o)}}},[r]),c.jsx(f,{ref:e,className:"backdropChair",children:c.jsx(v,{children:p})})};export{u as C};
