(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[931],{193:(e,t,s)=>{Promise.resolve().then(s.bind(s,8927))},8927:(e,t,s)=>{"use strict";s.r(t),s.d(t,{default:()=>C});var a=s(7437),i=s(2265),l=s(8606),r=s(4446),n=s(2218),o=s(1764),d=s(1935),c=s(3231),m=s(2974),x=s(4839),u=s(6164);function g(){for(var e=arguments.length,t=Array(e),s=0;s<e;s++)t[s]=arguments[s];return(0,u.m6)((0,x.W)(t))}i.forwardRef((e,t)=>{let{className:s,asChild:i=!1,...l}=e,r=i?m.g7:"button";return(0,a.jsx)(r,{className:g("inline-flex items-center justify-center rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none ring-offset-background",s),ref:t,...l})}).displayName="Button";let h=(0,n.j)("relative w-full rounded-lg border px-4 py-3 text-sm [&>svg+div]:translate-y-[-3px] [&>svg]:absolute [&>svg]:left-4 [&>svg]:top-4 [&>svg]:text-foreground [&>svg~*]:pl-7",{variants:{variant:{default:"bg-background text-foreground",destructive:"border-destructive/50 text-destructive dark:border-destructive [&>svg]:text-destructive",success:"border-green-500/50 text-green-600 dark:text-green-500 [&>svg]:text-green-600",warning:"border-yellow-500/50 text-yellow-600 dark:text-yellow-500 [&>svg]:text-yellow-600"}},defaultVariants:{variant:"default"}}),f={default:o.Z,destructive:d.Z,success:c.Z,warning:o.Z},p=i.forwardRef((e,t)=>{let{className:s,variant:i="default",icon:l,children:r,onClose:n,...o}=e,c=l||f[i||"default"];return(0,a.jsxs)("div",{ref:t,role:"alert",className:g(h({variant:i}),"flex items-start gap-4",s),...o,children:[c&&(0,a.jsx)(c,{className:"h-4 w-4 shrink-0"}),(0,a.jsx)("div",{className:"flex-1",children:r}),n&&(0,a.jsx)("button",{onClick:n,className:"ml-auto -mr-2 h-6 w-6 rounded-md p-1 hover:bg-gray-100 dark:hover:bg-gray-800","aria-label":"Close alert",children:(0,a.jsx)(d.Z,{className:"h-4 w-4"})})]})});p.displayName="Alert",i.forwardRef((e,t)=>{let{className:s,...i}=e;return(0,a.jsx)("h5",{ref:t,className:g("mb-1 font-medium leading-none tracking-tight",s),...i})}).displayName="AlertTitle";let w=i.forwardRef((e,t)=>{let{className:s,...i}=e;return(0,a.jsx)("div",{ref:t,className:g("text-sm [&_p]:leading-relaxed",s),...i})});w.displayName="AlertDescription";var v=s(1077),b=s(933),j=s(7592);let y=["Ava R.","Ethan T.","Luna W.","Caleb R.","Aria K.","Julian P.","Piper S.","Gabriel L.","Sofia G.","Alexander T.","Mia M.","Logan D.","Isabella W.","Benjamin R.","Charlotte K.","Oliver P.","Abigail S.","Elijah L.","Emily G.","William T.","Harper M.","Lucas D.","Amelia W.","Mason R.","Evelyn K.","Liam P.","Hannah S.","Noah L.","Abigail G.","Ethan T."],N=e=>{let{onComplete:t}=e;return(0,a.jsx)(l.E.div,{className:"fixed inset-0 bg-gradient-to-b from-green-300 to-green-500 flex items-center justify-center",initial:{opacity:0},animate:{opacity:1},exit:{opacity:0},transition:{duration:.6,ease:"easeInOut"},children:(0,a.jsx)(l.E.img,{src:"/c2.png",alt:"Cash Logo",className:"w-32 h-32",initial:{opacity:0},animate:{opacity:1},exit:{opacity:0},transition:{duration:.8,ease:"easeInOut"},onAnimationComplete:()=>setTimeout(t,800)})})},k=()=>{let[e,t]=(0,i.useState)(!0),[s,n]=(0,i.useState)(y[0]),[o,d]=(0,i.useState)(!0);return((0,i.useEffect)(()=>{let e=()=>{console.log("Window resized, showAlert:",window.innerHeight>600),d(window.innerHeight>600)};return e(),window.addEventListener("resize",e),()=>window.removeEventListener("resize",e)},[]),(0,i.useEffect)(()=>{let e=setInterval(()=>{t(!1),setTimeout(()=>{n(y[Math.floor(Math.random()*y.length)]),t(!0)},400)},5e3);return()=>clearInterval(e)},[]),o)?(0,a.jsx)(r.M,{children:e&&(0,a.jsx)(l.E.div,{initial:{opacity:0,y:-30},animate:{opacity:1,y:0},exit:{opacity:0,y:-30},transition:{duration:.5,ease:"easeInOut"},className:"fixed top-4 inset-x-0 mx-auto max-w-xs text-black",children:(0,a.jsx)(p,{className:"w-full max-w-xs bg-white shadow-md text-sm sm:text-base p-4 rounded-lg backdrop-blur text-black",children:(0,a.jsxs)("div",{className:"flex items-center gap-3",children:[(0,a.jsx)(v.Z,{className:"w-6 h-6 text-[#00D72E]"}),(0,a.jsxs)(w,{className:"font-medium",children:[(0,a.jsx)("span",{className:"text-[#00D72E] font-semibold",children:s})," just received $750!"]})]})})})}):(console.log("showAlert is false, alert will not be rendered."),null)},E=()=>{let[e,t]=(0,i.useState)({minutes:29,seconds:59});(0,i.useEffect)(()=>{let e=setInterval(()=>{t(e=>0===e.seconds?0===e.minutes?e:{minutes:e.minutes-1,seconds:59}:{...e,seconds:e.seconds-1})},1e3);return()=>clearInterval(e)},[]);let s=async()=>{await new Promise(e=>setTimeout(e,800)),window.open("https://www.google.com","_self")};return(0,a.jsxs)("div",{className:"min-h-screen bg-gradient-to-b from-white to-gray-50 flex flex-col items-center justify-center font-sans",children:[(0,a.jsx)(k,{}),(0,a.jsxs)("div",{className:"w-full max-w-md space-y-4 px-4 mb-20",children:[(0,a.jsx)("br",{}),(0,a.jsx)("br",{}),(0,a.jsxs)("div",{className:"text-center space-y-2",children:[(0,a.jsx)(l.E.div,{onClick:s,whileHover:{scale:1.02},children:(0,a.jsx)("img",{src:"/cash4.png",alt:"Cash Rewards",className:"w-full rounded-lg shadow-lg"})}),(0,a.jsxs)("div",{className:"flex items-center justify-center gap-2 bg-green-500 text-white py-2 px-4 rounded-lg",children:[(0,a.jsx)(b.Z,{className:"w-4 h-4 sm:w-5 sm:h-5"}),(0,a.jsxs)("span",{className:"font-semibold",children:[String(e.minutes).padStart(2,"0"),":",String(e.seconds).padStart(2,"0")]})]})]}),(0,a.jsxs)(l.E.div,{className:"p-4 bg-white shadow-lg rounded-lg space-y-3",onClick:s,whileHover:{scale:1.01},children:[(0,a.jsxs)("h2",{className:"font-bold text-gray-800 text-lg flex items-center",children:["Quick Start Guide ",(0,a.jsx)(j.Z,{className:"ml-2 w-4 h-4 text-green-500"})]}),(0,a.jsx)("ul",{className:"space-y-2",children:[{text:"Complete 2-3 required deals",highlight:"Earn up to $750"},{text:"Provide a valid email address",highlight:"For instant notification"},{text:"Ensure you are 18 years or older",highlight:"Required"}].map((e,t)=>(0,a.jsxs)("li",{className:"flex items-center bg-gray-50 p-2 rounded-lg",children:[(0,a.jsx)("div",{className:"h-6 w-6 bg-green-500 rounded-full flex items-center justify-center text-white text-sm font-bold mr-2",children:"✓"}),(0,a.jsxs)("div",{children:[(0,a.jsx)("div",{className:"font-medium text-gray-800 text-sm",children:e.text}),(0,a.jsx)("div",{className:"text-xs text-green-600",children:e.highlight})]})]},t))})]}),(0,a.jsx)("div",{className:"fixed bottom-4 left-0 right-0 px-4 flex justify-center z-50",children:(0,a.jsxs)(l.E.button,{onClick:s,className:"w-full max-w-md bg-green-500 text-white py-3 rounded-full text-lg font-bold relative overflow-hidden flex items-center justify-center",whileHover:{scale:1.02},whileTap:{scale:.98},children:[(0,a.jsx)(l.E.div,{className:"absolute inset-0",initial:{scale:.5,opacity:0},animate:{scale:2,opacity:[0,.2,0]},transition:{duration:2,repeat:1/0,ease:"easeOut"},style:{background:"radial-gradient(circle, rgba(255,255,255,0.8) 0%, rgba(255,255,255,0) 70%)"}}),(0,a.jsx)("span",{className:"mr-2",children:"Start Earning Now"})," ",(0,a.jsx)(j.Z,{className:"w-6 h-6 text-white"})," "]})}),(0,a.jsxs)(l.E.div,{className:"p-4 bg-white shadow-lg rounded-lg space-y-3 mb-16",onClick:s,whileHover:{scale:1.01},children:[(0,a.jsxs)("h2",{className:"font-bold text-gray-800 text-lg flex items-center",children:["Common Questions ",(0,a.jsx)(j.Z,{className:"ml-2 w-4 h-4 text-green-500"})]}),[{q:"How long do the deals take?",a:"Quick 10-20 minute completion time per deal"},{q:"What are deals?",a:"Simple tasks like app downloads, surveys, or trial subscriptions with specific reward goals"},{q:"How many deals do I need?",a:"Complete as many as you want - rewards sent upon completion"}].map((e,t)=>(0,a.jsxs)("div",{className:"p-3 bg-gray-50 rounded-lg",children:[(0,a.jsx)("h3",{className:"font-semibold text-green-600 text-sm",children:e.q}),(0,a.jsx)("p",{className:"text-gray-700 mt-1 text-xs sm:text-sm",children:e.a})]},t))]})]})]})},C=()=>{let[e,t]=(0,i.useState)(!0);return(0,a.jsx)(r.M,{children:e?(0,a.jsx)(N,{onComplete:()=>t(!1)}):(0,a.jsx)(E,{})})}}},e=>{var t=t=>e(e.s=t);e.O(0,[60,130,215,744],()=>t(193)),_N_E=e.O()}]);
