import{s as u,u as h,a as x,e as w,r as s,j as f}from"./index-c7f5325b.js";const E=u.div`
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
`,b=u.div`
  display: inline-block;
  width: 100%;
  margin: 40px 20px;
  border-radius: 10px;
  background-color: #fff;
  position: relative;
`,m=({children:v})=>{const e=h(x),c=w(),n=s.useRef(null),t=s.useRef(null);return s.useEffect(()=>{if(n.current&&t.current){const i=e>1e3?1e3:e,a=2,d=n.current,k=t.current;k.style.padding=`${i/(a*21)}px ${i/(a*10)}px`;const l=o=>{o.target.classList.contains("backdropChair")&&p()},p=()=>{window.removeEventListener("keydown",r),d.removeEventListener("click",l),c("/")},r=o=>{o.code==="Escape"&&p()};return window.addEventListener("keydown",r),d.addEventListener("click",l),()=>{window.removeEventListener("keydown",r)}}},[c,e]),f.jsx(E,{ref:n,className:"backdropChair",children:f.jsx(b,{ref:t,children:v})})};export{m as C};
