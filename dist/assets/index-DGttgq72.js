import{j as e,M as V,r as Lt}from"./markdown-ZLB7dGWU.js";import{b as nt,r as m,a as ot}from"./react-vendor-DjL-6nTd.js";import{u as Le,L as M,a as it,b as Dt,B as xt,R as Ct,c as P}from"./router-B084GcBs.js";import{M as Pe,S as Ae,X as ke,a as Ot,L as It,b as Pt,c as At,B as N,Y as De,F as W,d as st,e as at,f as jt,A as oe,C as E,T as _,Z as rt,g as ie,h as lt,i as Mt,P as Nt,j as ct,k as H,l as Wt,m as q,n as dt,o as xe,p as Ft,D as Se,E as R,q as we,r as Rt,s as qt,t as Bt,u as Gt,v as Et,w as Ht,x as zt,y as B,z as Jt,U as Ut,V as Vt,G as _t,H as pt,I as ut,J as mt,K as Qt,N as Kt,O as ht,Q as ne,R as Yt,W as $t,_ as gt,$ as ft,a0 as Zt,a1 as Xt,a2 as ae,a3 as re,a4 as bt,a5 as Ce,a6 as en,a7 as se,a8 as g,a9 as tn,aa as yt,ab as vt,ac as nn,ad as on,ae as sn,af as je,ag as an,ah as Me,ai as rn,aj as ln,ak as cn,al as dn,am as pn,an as un,ao as mn}from"./icons-CB56gb1t.js";(function(){const s=document.createElement("link").relList;if(s&&s.supports&&s.supports("modulepreload"))return;for(const n of document.querySelectorAll('link[rel="modulepreload"]'))o(n);new MutationObserver(n=>{for(const r of n)if(r.type==="childList")for(const l of r.addedNodes)l.tagName==="LINK"&&l.rel==="modulepreload"&&o(l)}).observe(document,{childList:!0,subtree:!0});function i(n){const r={};return n.integrity&&(r.integrity=n.integrity),n.referrerPolicy&&(r.referrerPolicy=n.referrerPolicy),n.crossOrigin==="use-credentials"?r.credentials="include":n.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function o(n){if(n.ep)return;n.ep=!0;const r=i(n);fetch(n.href,r)}})();var Te={},Ne=nt;Te.createRoot=Ne.createRoot,Te.hydrateRoot=Ne.hydrateRoot;function hn({theme:t,toggleTheme:s}){const i=Le(),[o,n]=m.useState(!1),r=u=>i.pathname===u?"active":"",l=[{name:"Dashboard",path:"/dashboard",icon:e.jsx(It,{size:18})},{name:"AI Chat",path:"/chat",icon:e.jsx(Pt,{size:18})},{name:"Roadmap",path:"/roadmap",icon:e.jsx(At,{size:18})},{name:"Practice Sheet",path:"/practice-sheet",icon:e.jsx(N,{size:18})},{name:"Video Feed",path:"/video-feed",icon:e.jsx(De,{size:18})},{name:"Notes",path:"/notes",icon:e.jsx(W,{size:18})},{name:"Interview",path:"/interview",icon:e.jsx(st,{size:18})},{name:"Quiz",path:"/quiz",icon:e.jsx(at,{size:18})}],b=()=>{n(!o)},c=()=>{n(!1)};return e.jsxs("nav",{className:"navbar",children:[e.jsxs("div",{className:"navbar-container",children:[e.jsxs(M,{to:"/",className:"navbar-logo",children:[e.jsx("img",{src:"/logo.png",alt:"Creata Mentor Logo",className:"logo-image"}),e.jsx("span",{children:"Creata Mentor"})]}),e.jsxs("ul",{className:"navbar-links",children:[l.map(u=>e.jsx("li",{children:e.jsxs(M,{to:u.path,className:`nav-link ${r(u.path)}`,children:[u.icon,e.jsx("span",{children:u.name})]})},u.name)),e.jsx("li",{children:e.jsx("button",{className:"theme-toggle",onClick:s,"aria-label":"Toggle Theme",children:t==="light"?e.jsx(Pe,{size:20}):e.jsx(Ae,{size:20})})})]}),e.jsx("button",{className:"mobile-menu-button",onClick:b,"aria-label":"Toggle Mobile Menu",children:o?e.jsx(ke,{size:24}):e.jsx(Ot,{size:24})})]}),o&&e.jsx("div",{className:"mobile-menu-backdrop",onClick:c}),e.jsxs("div",{className:`mobile-menu ${o?"open":""}`,children:[e.jsxs("div",{className:"mobile-menu-header",children:[e.jsx("h3",{children:"Navigation"}),e.jsx("button",{className:"mobile-menu-close",onClick:c,"aria-label":"Close Menu",children:e.jsx(ke,{size:24})})]}),e.jsx("ul",{className:"mobile-menu-links",children:l.map(u=>e.jsx("li",{children:e.jsxs(M,{to:u.path,className:`mobile-nav-link ${r(u.path)}`,onClick:c,children:[u.icon,e.jsx("span",{children:u.name})]})},u.name))}),e.jsx("div",{className:"mobile-menu-footer",children:e.jsxs("button",{className:"mobile-theme-toggle",onClick:s,children:[t==="light"?e.jsx(Pe,{size:20}):e.jsx(Ae,{size:20}),e.jsx("span",{children:t==="light"?"Dark Mode":"Light Mode"})]})})]})]})}function gn(){const t=[{number:"600+",label:"Practice Problems"},{number:"600+",label:"Quiz Questions"},{number:"20+",label:"Career Paths"},{number:"∞",label:"AI-Powered Practice"}],s=[{icon:e.jsx(_,{size:28}),title:"Role-Based Preparation",description:"Tailored content for Frontend, Backend, Full Stack, Data Analyst, and DevOps roles.",color:"#3b82f6",size:"large"},{icon:e.jsx(rt,{size:28}),title:"Interactive Learning",description:"Engaging quizzes, coding challenges, and scenario-based problems.",color:"#f59e0b",size:"small"},{icon:e.jsx(ie,{size:28}),title:"Structured Roadmaps",description:"Step-by-step learning paths designed by industry experts.",color:"#10b981",size:"small"},{icon:e.jsx(lt,{size:28}),title:"AI Mock Interviews",description:"Practice with our advanced AI to simulate real interview scenarios.",color:"#8b5cf6",size:"small"},{icon:e.jsx(W,{size:28}),title:"Practice Sheets",description:"Comprehensive practice problems and coding exercises for hands-on learning.",color:"#06b6d4",size:"small"},{icon:e.jsx(Mt,{size:28}),title:"Interactive Quizzes",description:"Test your knowledge with topic-wise quizzes and instant feedback.",color:"#f97316",size:"small"},{icon:e.jsx(Nt,{size:28}),title:"Company Specific Notes",description:"Exclusive placement materials for top tech companies.",color:"#ec4899",size:"large"}],i=["React","Node.js","Python","System Design","DSA","SQL","DevOps","Java","JavaScript","AWS","Docker","Kubernetes","GraphQL","MongoDB"];return e.jsxs("div",{className:"landing-page",children:[e.jsxs("section",{className:"landing-hero glass-hero-mode",children:[e.jsxs("div",{className:"hero-background",children:[e.jsx("div",{className:"gradient-orb orb-1"}),e.jsx("div",{className:"gradient-orb orb-2"}),e.jsx("div",{className:"gradient-orb orb-3"}),e.jsx("div",{className:"grid-overlay"})]}),e.jsxs("div",{className:"glass-spheres-container",children:[e.jsx("div",{className:"glass-sphere sphere-1"}),e.jsx("div",{className:"glass-sphere sphere-2"}),e.jsx("div",{className:"glass-sphere sphere-3"})]}),e.jsx("div",{className:"landing-hero-logo",children:e.jsx("img",{src:"/logo.png",alt:"Creata Mentor"})}),e.jsxs("div",{className:"hero-content centered-poster",children:[e.jsxs("div",{className:"hero-badge",children:[e.jsx(jt,{size:14,className:"sparkle-icon"}),e.jsx("span",{children:"The Ultimate Placement Platform"})]}),e.jsxs("h1",{className:"hero-title massive-type custom-gradient-header",children:["MASTER",e.jsx("br",{}),"YOUR SKILLS"]}),e.jsxs("p",{className:"hero-subtitle",children:["Transform your preparation journey with our comprehensive resources.",e.jsx("br",{}),"Everything you need to land your dream tech job."]}),e.jsxs("div",{className:"hero-cta-group",children:[e.jsxs(M,{to:"/dashboard",className:"hero-cta primary",children:["Start Preparing Free ",e.jsx(oe,{size:20})]}),e.jsx(M,{to:"/roadmap",className:"hero-cta secondary",children:"View Roadmaps"})]}),e.jsx("div",{className:"hero-stats compact",children:t.map((o,n)=>e.jsxs("div",{className:"hero-stat-item",children:[e.jsx("div",{className:"stat-number",children:o.number}),e.jsx("div",{className:"stat-label",children:o.label})]},n))})]})]}),e.jsx("div",{className:"skills-marquee",children:e.jsxs("div",{className:"marquee-content",children:[i.map((o,n)=>e.jsxs("span",{className:"skill-tag",children:[e.jsx(E,{size:16})," ",o]},n)),i.map((o,n)=>e.jsxs("span",{className:"skill-tag",children:[e.jsx(E,{size:16})," ",o]},`dup-${n}`))]})}),e.jsx("section",{className:"landing-features",children:e.jsxs("div",{className:"features-container",children:[e.jsxs("div",{className:"features-header",children:[e.jsx("div",{className:"section-badge",children:"Why Choose Us"}),e.jsx("h2",{children:"Everything You Need to Succeed"}),e.jsx("p",{children:"Comprehensive preparation platform designed for modern tech interviews"})]}),e.jsx("div",{className:"features-bento-grid",children:s.map((o,n)=>e.jsxs("div",{className:`feature-card ${o.size}`,style:{"--feature-color":o.color},children:[e.jsx("div",{className:"feature-icon-wrapper",children:e.jsx("div",{className:"feature-icon",children:o.icon})}),e.jsxs("div",{className:"feature-content",children:[e.jsx("h3",{children:o.title}),e.jsx("p",{children:o.description})]}),e.jsx("div",{className:"feature-shine"})]},n))})]})}),e.jsx("section",{className:"landing-cta",children:e.jsxs("div",{className:"cta-content",children:[e.jsx("h2",{children:"Ready to Ace Your Interviews?"}),e.jsx("p",{children:"Join the platform trusted by thousands of aspiring developers"}),e.jsxs(M,{to:"/dashboard",className:"cta-button",children:["Get Started Now ",e.jsx(oe,{size:20})]})]})})]})}function le({title:t,subtitle:s,showBack:i=!0,backTo:o="/dashboard",onBack:n}){const r=it(),l=()=>{n?n():r(o)};return e.jsxs("div",{className:"page-header",children:[i&&e.jsx("div",{className:"page-header-nav",children:e.jsxs("button",{onClick:l,className:"back-button",children:[e.jsx(ct,{size:16})," Back"]})}),e.jsx("h1",{className:"page-title",children:t}),s&&e.jsx("p",{className:"page-subtitle",children:s})]})}const ce=()=>{const t=Array.from({length:5},(o,n)=>({id:n,size:Math.random()*400+300,left:Math.random()*100,top:Math.random()*100,delay:Math.random()*10,duration:Math.random()*20+30})),s=Array.from({length:30},(o,n)=>({id:n,size:Math.random()*4+2,left:Math.random()*100,delay:Math.random()*15,duration:Math.random()*15+20,opacity:Math.random()*.4+.2})),i=Array.from({length:12},(o,n)=>({id:n,position:n/11*100,delay:n*.5}));return e.jsxs("div",{className:"animated-background",children:[e.jsx("div",{className:"gradient-mesh",children:t.map(o=>e.jsx("div",{className:"gradient-orb",style:{width:`${o.size}px`,height:`${o.size}px`,left:`${o.left}%`,top:`${o.top}%`,animationDelay:`${o.delay}s`,animationDuration:`${o.duration}s`}},`orb-${o.id}`))}),e.jsx("div",{className:"particles-layer",children:s.map(o=>e.jsx("div",{className:"particle",style:{width:`${o.size}px`,height:`${o.size}px`,left:`${o.left}%`,animationDelay:`${o.delay}s`,animationDuration:`${o.duration}s`,opacity:o.opacity}},`particle-${o.id}`))}),e.jsx("div",{className:"birds-layer",children:[...Array(100)].map((o,n)=>{const r=Math.floor(n/10),l=n%10;return e.jsxs("div",{className:"shadow-bird",style:{top:`${l*8+r*2+5}%`,"--bird-scale":.5+l*.05,"--bird-delay":`${r*5+l*.5}s`,"--bird-duration":`${40+r*2}s`,"--flap-duration":`${.5+l*.05}s`,"--bob-duration":`${3+l*.2}s`,opacity:.3+l*.03},children:[e.jsx("div",{className:"bird-body"}),e.jsx("div",{className:"bird-wing-left"}),e.jsx("div",{className:"bird-wing-right"})]},`bird-${n}`)})}),e.jsx("div",{className:"grid-lines",children:i.map(o=>e.jsxs(ot.Fragment,{children:[e.jsx("div",{className:"grid-line horizontal",style:{top:`${o.position}%`,animationDelay:`${o.delay}s`}}),e.jsx("div",{className:"grid-line vertical",style:{left:`${o.position}%`,animationDelay:`${o.delay+.25}s`}})]},`line-${o.id}`))}),e.jsx("div",{className:"radial-overlay"})]})};function fn(){const[t,s]=m.useState(new Date),[i,o]=m.useState("");m.useEffect(()=>{const l=setInterval(()=>s(new Date),1e3);return()=>clearInterval(l)},[]),m.useEffect(()=>{const l=t.getHours();l<12?o("Good Morning"):l<18?o("Good Afternoon"):o("Good Evening")},[t]);const n=[{title:"Browse Notes",desc:"17 Topics Available",icon:e.jsx(N,{size:24}),link:"/notes",color:"blue",gradient:"linear-gradient(135deg, #667eea 0%, #764ba2 100%)"},{title:"Take Quiz",desc:"Test Your Knowledge",icon:e.jsx(Wt,{size:24}),link:"/quiz",color:"green",gradient:"linear-gradient(135deg, #f093fb 0%, #f5576c 100%)"},{title:"AI Assistant",desc:"Ask Anything",icon:e.jsx(q,{size:24}),link:"/chat",color:"purple",gradient:"linear-gradient(135deg, #4facfe 0%, #00f2fe 100%)"},{title:"Study Plan",desc:"Create Roadmap",icon:e.jsx(dt,{size:24}),link:"/study-plan",color:"orange",gradient:"linear-gradient(135deg, #fa709a 0%, #fee140 100%)"},{title:"Mock Interview",desc:"AI Practice Sessions",icon:e.jsx(q,{size:24}),link:"/interview",color:"purple",gradient:"linear-gradient(135deg, #667eea 0%, #764ba2 100%)"},{title:"Learning Roadmap",desc:"Structured Paths",icon:e.jsx(_,{size:24}),link:"/roadmap",color:"blue",gradient:"linear-gradient(135deg, #4facfe 0%, #00f2fe 100%)"},{title:"Interview Questions",desc:"Role-Based Prep",icon:e.jsx(rt,{size:24}),link:"/coding-practice",color:"purple",gradient:"linear-gradient(135deg, #f093fb 0%, #f5576c 100%)"}],r=[{id:"dynamic-programming",title:"Dynamic Programming Patterns",difficulty:"Hard",time:"45 min",category:"DSA"},{id:"system-design-caching",title:"System Design: Caching",difficulty:"Medium",time:"30 min",category:"System Design"},{id:"react-performance",title:"React Performance Optimization",difficulty:"Medium",time:"25 min",category:"Web Dev"},{id:"database-indexing",title:"Database Indexing Strategies",difficulty:"Hard",time:"40 min",category:"DBMS"}];return e.jsxs("div",{className:"app-container",children:[e.jsx(ce,{}),e.jsx("div",{className:"dashboard-header",children:e.jsxs("div",{className:"header-content",children:[e.jsxs("div",{className:"greeting-section",children:[e.jsxs("h1",{className:"greeting-title",children:[i,"! 👋"]}),e.jsx("p",{className:"greeting-subtitle",children:"Ready to level up your skills today?"})]}),e.jsxs("div",{className:"time-display",children:[e.jsx("div",{className:"current-time",children:t.toLocaleTimeString("en-US",{hour:"2-digit",minute:"2-digit"})}),e.jsx("div",{className:"current-date",children:t.toLocaleDateString("en-US",{weekday:"long",month:"short",day:"numeric"})})]})]})}),e.jsxs("div",{className:"section-header",style:{marginTop:48,marginBottom:24},children:[e.jsx("h2",{style:{fontSize:20,fontWeight:600,margin:0},children:"Quick Actions"}),e.jsx("p",{style:{fontSize:14,color:"var(--text-muted)",margin:"4px 0 0 0"},children:"Jump right into learning"})]}),e.jsx("div",{className:"quick-actions-grid",children:n.map((l,b)=>e.jsxs(M,{to:l.link,className:"action-card-new",children:[e.jsx("div",{className:"action-gradient",style:{background:l.gradient}}),e.jsxs("div",{className:"action-content",children:[e.jsx("div",{className:"action-icon-new",children:l.icon}),e.jsx("h3",{children:l.title}),e.jsx("p",{children:l.desc})]})]},b))}),e.jsxs("div",{children:[e.jsxs("div",{className:"section-header",style:{marginBottom:16},children:[e.jsx("h2",{style:{fontSize:18,fontWeight:600,margin:0},children:"Recommended Topics"}),e.jsx("p",{style:{fontSize:14,color:"var(--text-muted)",margin:"4px 0 0 0"},children:"Start learning these high-priority topics"})]}),e.jsx("div",{className:"recommended-topics-grid",children:r.map((l,b)=>e.jsxs(M,{to:`/topic/${l.id}`,className:"recommended-topic-card",style:{textDecoration:"none"},children:[e.jsxs("div",{className:"recommended-topic-header",children:[e.jsx("h4",{children:l.title}),e.jsx("span",{className:`recommended-badge recommended-badge-${l.difficulty==="Hard"?"orange":"blue"}`,children:l.difficulty})]}),e.jsxs("div",{className:"recommended-topic-meta",children:[e.jsx("span",{className:"recommended-badge recommended-badge-purple",children:l.category}),e.jsxs("span",{style:{display:"flex",alignItems:"center",gap:4,fontSize:11,color:"var(--text-muted)"},children:[e.jsx(H,{size:12})," ",l.time]})]})]},b))}),e.jsxs("div",{className:"quote-card",style:{marginTop:24},children:[e.jsx("div",{style:{fontSize:11,fontWeight:700,color:"var(--text-muted)",textTransform:"uppercase",marginBottom:8},children:"💡 Daily Motivation"}),e.jsx("p",{style:{margin:0,fontSize:14,fontStyle:"italic",lineHeight:1.6},children:'"The expert in anything was once a beginner. Keep pushing forward!"'})]})]})]})}const G=[{id:1,title:"Best DSA Concepts for FAANG",category:"DSA",difficulty:"Hard",fileName:"Best DSA concepts for FAANG.pdf",tags:["algorithms","interview","faang"]},{id:2,title:"DSA in Python - Complete Theory",category:"DSA",difficulty:"Medium",fileName:"DSA in python complete theory hand writing notes (1).pdf",tags:["python","dsa","theory"]},{id:3,title:"Graph Data Structure",category:"DSA",difficulty:"Hard",fileName:"Graph Data Structure.pdf",tags:["graphs","algorithms"]},{id:4,title:"Last Minute DSA Revision Sheet",category:"DSA",difficulty:"Medium",fileName:"Last Minute DSA Revision Sheet.pdf",tags:["revision","quick-reference"]},{id:5,title:"LeetCode Important Questions & Solutions",category:"DSA",difficulty:"Hard",fileName:"Leetcode Important Questions Solutions -1.pdf",tags:["leetcode","solutions"]},{id:6,title:"SDE Questions",category:"DSA",difficulty:"Hard",fileName:"SDE Questions.pdf",tags:["sde","interview"]},{id:7,title:"Coding Practice",category:"DSA",difficulty:"Medium",fileName:"CODING  (1).pdf",tags:["practice","coding"]},{id:8,title:"System Design Basics",category:"System Design",difficulty:"Hard",fileName:"System Design Basics.pdf",tags:["system-design","scalability"]},{id:9,title:"React Handwritten Notes",category:"Web Dev",difficulty:"Medium",fileName:"React-Handwritten-notes.pdf",tags:["react","frontend"]},{id:10,title:"ReactJS Notes for Professionals",category:"Web Dev",difficulty:"Medium",fileName:"ReactJSNotesForProfessionals.pdf",tags:["react","professional"]},{id:11,title:"30 Days of React eBook",category:"Web Dev",difficulty:"Easy",fileName:"30-days-of-react-ebook-fullstackio.pdf",tags:["react","tutorial"]},{id:12,title:"NodeJS Handwritten Notes",category:"Web Dev",difficulty:"Medium",fileName:"NodeJS-Handwritten-Notes.pdf",tags:["nodejs","backend"]},{id:13,title:"CSS Notes",category:"Web Dev",difficulty:"Easy",fileName:"CSS Notes.pdf",tags:["css","styling"]},{id:14,title:"JavaScript Class Notes 1",category:"Web Dev",difficulty:"Medium",fileName:"JS1 ClassNotes.pdf",tags:["javascript","basics"]},{id:15,title:"JavaScript Class Notes 2",category:"Web Dev",difficulty:"Medium",fileName:"JS2 ClassNotes.pdf",tags:["javascript"]},{id:16,title:"JavaScript Class Notes 3",category:"Web Dev",difficulty:"Medium",fileName:"JS3 ClassNotes.pdf",tags:["javascript"]},{id:17,title:"JavaScript Class Notes 4",category:"Web Dev",difficulty:"Medium",fileName:"JS4 ClassNotes.pdf",tags:["javascript"]},{id:18,title:"JavaScript Class Notes 5",category:"Web Dev",difficulty:"Medium",fileName:"JS5 ClassNotes (1).pdf",tags:["javascript"]},{id:19,title:"JavaScript Class Notes 6",category:"Web Dev",difficulty:"Medium",fileName:"JS6 ClassNotes.pdf",tags:["javascript"]},{id:20,title:"JavaScript Class Notes 7",category:"Web Dev",difficulty:"Medium",fileName:"JS7 ClassNotes.pdf",tags:["javascript"]},{id:21,title:"JavaScript Class Notes 11",category:"Web Dev",difficulty:"Medium",fileName:"JS11 Class Notes.pdf",tags:["javascript","advanced"]},{id:22,title:"JavaScript Class Notes 12",category:"Web Dev",difficulty:"Medium",fileName:"JS12 ClassNotes.pdf",tags:["javascript","advanced"]},{id:23,title:"DBMS Notes",category:"DBMS",difficulty:"Hard",fileName:"DBMS_Notes (2).pdf",tags:["database","theory"]},{id:24,title:"SQL Notes",category:"DBMS",difficulty:"Medium",fileName:"SQL (notes) (1) (1).pdf",tags:["sql","queries"]},{id:25,title:"SQL Handwritten Notes",category:"DBMS",difficulty:"Medium",fileName:"SQL Handwritten Notes .pdf",tags:["sql","handwritten"]},{id:26,title:"SQL Notes by Apna College",category:"DBMS",difficulty:"Easy",fileName:"SQL Notes by Apna College (1) (1).pdf",tags:["sql","tutorial"]},{id:27,title:"800+ SQL Server Interview Questions",category:"DBMS",difficulty:"Hard",fileName:"800+ SQL Server Interview Questions and Answers .pdf",tags:["sql","interview"]},{id:28,title:"Operating System Notes",category:"OS",difficulty:"Hard",fileName:"Operating System Notes.pdf",tags:["os","theory"]},{id:29,title:"Computer Networking Notes",category:"Networks",difficulty:"Hard",fileName:"Computer Networking Notes for Tech Placements (1).pdf",tags:["networking","tcp-ip"]},{id:30,title:"Object Oriented Programming",category:"OOP",difficulty:"Medium",fileName:"Object Oriented Programming (1) (1).pdf",tags:["oop","concepts"]},{id:31,title:"OOP Notes",category:"OOP",difficulty:"Medium",fileName:"Object Oriented Programming OOPs - Notes.pdf",tags:["oop","java"]},{id:32,title:"Python Notes",category:"Python",difficulty:"Easy",fileName:"Python.pdf",tags:["python","basics"]},{id:33,title:"Comprehensive Python Cheatsheet",category:"Python",difficulty:"Medium",fileName:"Comprehensive Python Cheatsheet.pdf",tags:["python","cheatsheet"]},{id:34,title:"NumPy Basics to Advanced",category:"Python",difficulty:"Medium",fileName:"NumPy Basics → Advanced PDF.pdf",tags:["numpy","data-science"]},{id:35,title:"Amazing NumPy Cheat Sheet",category:"Python",difficulty:"Easy",fileName:"Amazing NumPy Cheat Sheet.pdf",tags:["numpy","cheatsheet"]},{id:36,title:"Deep Learning",category:"AI/ML",difficulty:"Hard",fileName:"Deep Learning .pdf",tags:["deep-learning","ai"]},{id:37,title:"Computer Vision Q&A",category:"AI/ML",difficulty:"Hard",fileName:"computer-vision-important-questions-answers (1).pdf",tags:["computer-vision","interview"]},{id:38,title:"Git Notes",category:"DevOps",difficulty:"Easy",fileName:"Git.pdf",tags:["git","version-control"]},{id:39,title:"Git Cheat Sheet",category:"DevOps",difficulty:"Easy",fileName:"git-cheat-sheet-education.pdf",tags:["git","cheatsheet"]},{id:40,title:"Kubernetes Interview Q&A",category:"DevOps",difficulty:"Hard",fileName:"Kubernetes Real Time Interview Questions_Answers.pdf",tags:["kubernetes","interview"]},{id:41,title:"Ready to Deploy N8n",category:"DevOps",difficulty:"Medium",fileName:"Ready to Deploy N8n.pdf",tags:["automation","n8n"]},{id:42,title:"Agentic Applications: Do's and Don'ts",category:"AI/ML",difficulty:"Medium",fileName:"Agentic Applications_ 12 Do's and Don'ts.pdf",tags:["ai","agents"]},{id:43,title:"Coding Personalities of Leading LLMs",category:"AI/ML",difficulty:"Medium",fileName:"Full Report_The Coding Personalities of Leading LLMs.pdf",tags:["llm","research"]},{id:44,title:"Class Notes",category:"General",difficulty:"Easy",fileName:"Class Notes.pdf",tags:["notes","general"]},{id:45,title:"Calendar Handwritten",category:"General",difficulty:"Easy",fileName:"Calendar Handwritten.pdf",tags:["calendar","planning"]},{id:46,title:"Lecture Notes",category:"General",difficulty:"Medium",fileName:"lecture-notes (1).pdf",tags:["lecture","notes"]},{id:47,title:"Infosys Pseudo Code",category:"Interview",difficulty:"Medium",fileName:"infosys pseudo  (1).pdf",tags:["infosys","pseudo-code"]},{id:48,title:"Remote Supportive Employers",category:"Career",difficulty:"Easy",fileName:"Remote Supportive Employers.pdf",tags:["remote","jobs"]},{id:49,title:"Document 1",category:"General",difficulty:"Easy",fileName:"1759288292073.pdf",tags:["document"]},{id:50,title:"Document 2",category:"General",difficulty:"Easy",fileName:"1763347294299 (1).pdf",tags:["document"]},{id:51,title:"190+ Python Interview Questions",category:"Python",difficulty:"Medium",fileName:"190+ Python Interview Questions 2025.pdf",tags:["python","interview"]},{id:52,title:"Machine Learning Basics MCQ",category:"AI/ML",difficulty:"Medium",fileName:"650+_Machine_Learning_Basics_Interview_Questions_and_Answers_MCQ.pdf",tags:["ml","interview"]},{id:53,title:"7 Days Statistics",category:"AI/ML",difficulty:"Medium",fileName:"7 dayss Statistics-converted (1).pdf",tags:["statistics","data-science"]},{id:54,title:"AWS Cloud Practitioner Roadmap",category:"DevOps",difficulty:"Easy",fileName:"AWS Cloud Practitioner - Roadmap.pdf",tags:["aws","cloud","roadmap"]},{id:55,title:"Azure Linux Docs",category:"DevOps",difficulty:"Medium",fileName:"Azure Linux Doc.pdf",tags:["azure","linux"]},{id:56,title:"Big Data Interview Q&A",category:"DBMS",difficulty:"Hard",fileName:"Big Data Interview QnA (1).pdf",tags:["big-data","interview"]},{id:57,title:"Secure Linux Server Guide",category:"DevOps",difficulty:"Hard",fileName:"Building a Secure Linux Server from Scratch.pdf",tags:["linux","security"]},{id:58,title:"Cyber Security Roadmap",category:"DevOps",difficulty:"Medium",fileName:"Cyber_Sec_Roadmap_.pdf",tags:["security","roadmap"]},{id:59,title:"DBMS Complete Handwritten Notes",category:"DBMS",difficulty:"Medium",fileName:"DBMS Complete Notes Handwritten.pdf",tags:["dbms","notes"]},{id:60,title:"DBMS Notes (Alternative)",category:"DBMS",difficulty:"Medium",fileName:"DBMS-Notes.pdf",tags:["dbms","notes"]},{id:61,title:"DNS Security Guide",category:"Networks",difficulty:"Hard",fileName:"DNS_Security_Guide_Done.pdf",tags:["dns","security"]},{id:62,title:"Gray Hat Python",category:"Python",difficulty:"Hard",fileName:"Gray Hat Python.pdf",tags:["python","security"]},{id:63,title:"ITIL 4 High Velocity IT",category:"DevOps",difficulty:"Medium",fileName:"ITIL 4 High Velocity IT (AXELOS).pdf",tags:["itil","management"]},{id:64,title:"Important SQL Concepts",category:"DBMS",difficulty:"Medium",fileName:"Important SQL concepts to master.pdf",tags:["sql","guide"]},{id:65,title:"Learn Complete MatPlotLib",category:"Python",difficulty:"Medium",fileName:"Learn Complete MatPlotLib.pdf",tags:["python","matplotlib"]},{id:66,title:"Linux Server Configuration",category:"DevOps",difficulty:"Hard",fileName:"Linux Server Configuration .pdf",tags:["linux","server"]},{id:67,title:"Linux 101 Hacks",category:"DevOps",difficulty:"Medium",fileName:"Linux-101-Hacks.pdf",tags:["linux","hacks"]},{id:68,title:"Linux Bible 10th Edition",category:"DevOps",difficulty:"Hard",fileName:"Linux_Bible_10th_Edition.pdf",tags:["linux","book"]},{id:69,title:"Machine Learning Fundamentals",category:"AI/ML",difficulty:"Medium",fileName:"Machine Learning Fundamentals.pdf",tags:["ml","basics"]},{id:70,title:"Pro Git Book",category:"DevOps",difficulty:"Medium",fileName:"Pro Git.pdf",tags:["git","version-control"]},{id:71,title:"The Terraform Book",category:"DevOps",difficulty:"Hard",fileName:"The_Terraform_Book.pdf",tags:["terraform","iac"]},{id:72,title:"AWS Cloud Guide",category:"DevOps",difficulty:"Medium",fileName:"aws cloud.pdf",tags:["aws","cloud"]},{id:73,title:"SQL Interview Questions (DOCX)",category:"DBMS",difficulty:"Medium",fileName:"sql interview.docx",tags:["sql","interview"]}],bn=["All","DSA","System Design","Web Dev","DBMS","OS","Networks","OOP","Python","AI/ML","DevOps","Interview","Career","General"],yn=t=>t==="All"?G:G.filter(s=>s.category===t),vn=t=>{const s=t.toLowerCase();return G.filter(i=>i.title.toLowerCase().includes(s)||i.tags.some(o=>o.includes(s))||i.category.toLowerCase().includes(s))};function kn(t,s){return t==="PDF"?W:t==="Document"?W:t==="Text"?W:t==="HTML"?Rt:t==="Markdown"?xe:t==="Image"?qt:t==="Spreadsheet"?Bt:t==="Presentation"?Gt:t==="Encrypted"?Et:Ht}function Sn({file:t,company:s,onClose:i}){const[o,n]=m.useState(!1),[r,l]=m.useState(null),[b,c]=m.useState(!1),[u,S]=m.useState(null);let f=`/Company NOTES/${s}`;s==="PLACEMENT NOTES"&&(f="/PLACEMENT NOTES");const y=`${f}/${t.path.split("/").map(encodeURIComponent).join("/")}`,v=t.type==="Text",C=t.type==="Markdown",O=t.type==="PDF"||t.type==="HTML",d=v||C||O||t.type==="Image";m.useEffect(()=>{(v||C)&&k()},[t,s]);const k=async()=>{try{c(!0),S(null);const a=await fetch(y);if(!a.ok)throw new Error("Failed to load file content");const h=await a.text();l(h)}catch(a){console.error("Error loading file:",a),S("Failed to load file content")}finally{c(!1)}},p=()=>{const a=document.createElement("a");a.href=y,a.download=t.name,document.body.appendChild(a),a.click(),document.body.removeChild(a)};return nt.createPortal(e.jsxs("div",{className:`file-preview-overlay ${o?"fullscreen":""}`,onClick:i,children:[e.jsx("div",{className:"preview-backdrop"}),e.jsxs("div",{className:`preview-container ${o?"fullscreen":""}`,onClick:a=>a.stopPropagation(),children:[e.jsxs("div",{className:"preview-header",children:[e.jsxs("div",{className:"preview-title",children:[e.jsx("span",{className:"file-icon-wrapper",children:C?e.jsx(xe,{size:16}):e.jsx(W,{size:16})}),e.jsx("span",{className:"filename",children:t.name}),e.jsx("span",{className:"file-badge",children:t.type})]}),e.jsxs("div",{className:"header-actions",children:[e.jsx("button",{className:"action-btn",onClick:()=>n(!o),title:"Toggle Fullscreen",children:e.jsx(Ft,{size:18})}),e.jsx("button",{className:"action-btn",onClick:p,title:"Download",children:e.jsx(Se,{size:18})}),e.jsx("a",{href:y,target:"_blank",rel:"noopener noreferrer",className:"action-btn",title:"Open in new tab",children:e.jsx(R,{size:18})}),e.jsx("div",{className:"separator-vertical",style:{width:"1px",height:"20px",background:"rgba(255,255,255,0.1)",margin:"0 8px"}}),e.jsx("button",{className:"action-btn close-btn",onClick:i,title:"Close Preview",children:e.jsx(ke,{size:20})})]})]}),e.jsx("div",{className:"preview-body",children:b?e.jsxs("div",{className:"preview-loading",children:[e.jsx(we,{className:"animate-spin",size:32}),e.jsx("p",{children:"Loading content..."})]}):u?e.jsxs("div",{className:"preview-error",children:[e.jsx("div",{className:"error-icon",children:"⚠️"}),e.jsx("h3",{children:"Preview Failed"}),e.jsx("p",{children:u}),e.jsx("button",{className:"retry-btn",onClick:k,children:"Try Again"})]}):d?e.jsxs("div",{className:"content-wrapper custom-scrollbar",children:[C&&r&&e.jsx("div",{className:"markdown-preview",children:e.jsx(V,{remarkPlugins:[Lt],children:r})}),v&&r&&e.jsx("pre",{className:"text-preview",children:r}),t.type==="Image"&&e.jsx("div",{className:"image-preview-wrapper",style:{display:"flex",justifyContent:"center",alignItems:"center",minHeight:"100%"},children:e.jsx("img",{src:y,alt:t.name,style:{maxWidth:"100%",maxHeight:"100%",objectFit:"contain",borderRadius:"8px"}})}),O&&e.jsx("iframe",{src:y,title:t.name,className:"preview-iframe"})]}):e.jsxs("div",{className:"preview-download-card",children:[e.jsx("div",{className:"file-icon-large",style:{color:We(t.type),background:`${We(t.type)}10`},children:(()=>{const a=kn(t.type,t.extension);return e.jsx(a,{size:64})})()}),e.jsxs("div",{className:"download-info",children:[e.jsx("h3",{children:t.name}),e.jsx("p",{children:"This file is ready to view"})]}),e.jsxs("button",{className:"primary-download-btn",onClick:p,children:[e.jsx(Se,{size:20}),e.jsx("span",{children:"Download to Open"})]})]})}),e.jsx("div",{className:"preview-footer",children:e.jsxs("div",{className:"footer-info",children:[e.jsx("span",{children:t.sizeFormatted}),e.jsx("span",{className:"separator",children:"•"}),e.jsx("span",{children:C?"Markdown View":v?"Text View":"Preview Mode"})]})})]})]}),document.body)}function We(t){return{PDF:"#ef4444",Document:"#3b82f6",Text:"#10b981",HTML:"#f59e0b",Markdown:"#8b5cf6",Image:"#d946ef",Presentation:"#ec4899",Spreadsheet:"#14b8a6",Encrypted:"#6b7280",Other:"#6b7280"}[t]||"#6b7280"}function wn(){const[t,s]=m.useState("All"),[i,o]=m.useState(""),[n,r]=m.useState(null),l=i?vn(i):yn(t),b=c=>{const u=c.fileName.split(".").pop().toLowerCase();let S="Other";["pdf"].includes(u)?S="PDF":["doc","docx"].includes(u)?S="Document":["txt"].includes(u)?S="Text":["md"].includes(u)?S="Markdown":["html","htm"].includes(u)?S="HTML":["jpg","jpeg","png","gif","svg"].includes(u)&&(S="Image"),r({name:c.fileName,path:c.fileName,type:S,extension:u,sizeFormatted:"N/A"})};return e.jsxs("div",{className:"app-container",children:[e.jsx(ce,{}),e.jsx(le,{title:"Knowledge Base",subtitle:`${G.length} PDF resources from your PLACEMENT NOTES folder`}),e.jsxs("div",{style:{background:"linear-gradient(135deg, #4CAF5022, #4CAF5011)",border:"1px solid #4CAF5033",borderRadius:"12px",padding:"20px 24px",margin:"20px auto",maxWidth:"1200px",display:"flex",alignItems:"flex-start",gap:"16px"},children:[e.jsx("span",{style:{fontSize:"32px"},children:"📦"}),e.jsxs("div",{style:{flex:1},children:[e.jsx("strong",{style:{color:"#4CAF50",display:"block",marginBottom:"8px",fontSize:"18px"},children:"Download Additional Notes Files"}),e.jsx("p",{style:{margin:"0 0 12px 0",fontSize:"14px",opacity:.9,lineHeight:"1.6"},children:"Due to Vercel's 250 MB deployment limit, additional notes files are hosted on GitHub Releases. Download the archives below to access all placement preparation materials including company-specific notes."}),e.jsxs("div",{style:{display:"flex",gap:"12px",flexWrap:"wrap"},children:[e.jsx("a",{href:"https://github.com/RAJEEVRANJAN0001/Preparation-Platform/releases/download/v1.0.0-notes/company-notes.tar.gz",style:{background:"#4CAF50",color:"white",padding:"10px 20px",borderRadius:"8px",textDecoration:"none",fontSize:"14px",fontWeight:"600",display:"inline-flex",alignItems:"center",gap:"8px"},children:"⬇️ Download Company NOTES (297 MB)"}),e.jsx("a",{href:"https://github.com/RAJEEVRANJAN0001/Preparation-Platform/releases/download/v1.0.0-notes/placement-notes.tar.gz",style:{background:"#2196F3",color:"white",padding:"10px 20px",borderRadius:"8px",textDecoration:"none",fontSize:"14px",fontWeight:"600",display:"inline-flex",alignItems:"center",gap:"8px"},children:"⬇️ Download Placement NOTES (461 MB)"}),e.jsx("a",{href:"https://github.com/RAJEEVRANJAN0001/Preparation-Platform/releases/tag/v1.0.0-notes",target:"_blank",rel:"noopener noreferrer",style:{background:"rgba(255,255,255,0.1)",color:"inherit",padding:"10px 20px",borderRadius:"8px",textDecoration:"none",fontSize:"14px",fontWeight:"600",display:"inline-flex",alignItems:"center",gap:"8px",border:"1px solid rgba(255,255,255,0.2)"},children:"🔗 View on GitHub"})]})]})]}),e.jsxs("div",{className:"notes-layout",children:[e.jsxs("div",{className:"notes-sidebar",children:[e.jsx("div",{style:{marginBottom:16,padding:"0 8px",fontWeight:600,fontSize:11,color:"var(--text-faint)",letterSpacing:"0.05em"},children:"CATEGORIES"}),bn.map(c=>e.jsxs("button",{className:`category-btn ${t===c?"active":""}`,onClick:()=>{s(c),o("")},children:[e.jsxs("div",{style:{display:"flex",alignItems:"center",gap:8},children:[e.jsx(zt,{size:14})," ",c]}),e.jsx("span",{className:"count-badge",children:c==="All"?G.length:G.filter(u=>u.category===c).length})]},c))]}),e.jsxs("div",{className:"notes-content",children:[e.jsxs("div",{className:"dense-card",style:{marginBottom:20,display:"flex",alignItems:"center",gap:10,padding:12},children:[e.jsx(B,{size:16,color:"var(--text-muted)"}),e.jsx("input",{type:"text",placeholder:"Search by title, category, or tags...",value:i,onChange:c=>o(c.target.value),style:{border:"none",background:"transparent",width:"100%",fontSize:14,outline:"none",color:"var(--text-main)"}})]}),e.jsxs("div",{style:{marginBottom:20,fontSize:13,color:"var(--text-muted)"},children:["Showing ",e.jsx("strong",{children:l.length})," ",l.length===1?"resource":"resources",t!=="All"&&` in ${t}`]}),e.jsxs("div",{className:"notes-grid",children:[l.map(c=>e.jsxs("div",{className:"note-card pdf-card",children:[e.jsx("div",{className:"note-header",children:e.jsxs("div",{style:{display:"flex",alignItems:"flex-start",gap:12},children:[e.jsx("div",{style:{width:40,height:40,background:"var(--primary-light)",borderRadius:8,display:"flex",alignItems:"center",justifyContent:"center",color:"var(--primary)",flexShrink:0},children:e.jsx(W,{size:20})}),e.jsxs("div",{style:{flexGrow:1,minWidth:0},children:[e.jsx("h3",{style:{margin:"0 0 4px 0",fontSize:15,lineHeight:1.3},children:c.title}),e.jsxs("div",{className:"note-meta",children:[e.jsx("span",{className:"badge badge-blue",children:c.category}),e.jsx("span",{className:`badge badge-${c.difficulty==="Hard"?"orange":c.difficulty==="Medium"?"purple":"green"}`,children:c.difficulty})]})]})]})}),e.jsx("div",{className:"note-footer",style:{marginTop:12},children:c.tags.slice(0,3).map(u=>e.jsxs("span",{className:"tag-pill",children:["#",u]},u))}),e.jsxs("div",{style:{marginTop:12,display:"flex",gap:8},children:[e.jsxs("button",{onClick:()=>b(c),className:"pdf-action-btn",style:{flexGrow:1},children:[e.jsx(Jt,{size:14})," Preview"]}),e.jsx("a",{href:`/PLACEMENT NOTES/${c.fileName}`,download:!0,className:"pdf-action-btn secondary",children:e.jsx(Se,{size:14})})]})]},c.id)),l.length===0&&e.jsx("div",{className:"dense-card",style:{gridColumn:"1/-1",textAlign:"center",padding:40,color:"var(--text-muted)"},children:"No resources found matching your search."})]})]})]}),n&&e.jsx(Sn,{file:n,company:"PLACEMENT NOTES",onClose:()=>r(null)})]})}function Tn(){const[t,s]=m.useState([{id:1,sender:"ai",text:"Hello. I am **Creata Mentor**. How can I assist you with your studies today?"}]),[i,o]=m.useState(""),[n,r]=m.useState(!1),[l,b]=m.useState(!1),[c,u]=m.useState([]),S=m.useRef(null),f="",y=window.SpeechRecognition||window.webkitSpeechRecognition,v=y?new y:null;m.useEffect(()=>{fetch("/knowledge_base.json").then(p=>p.json()).then(p=>u(p)).catch(p=>console.error("KB Error:",p))},[]),m.useEffect(()=>{var p;(p=S.current)==null||p.scrollIntoView({behavior:"smooth"})},[t]);const C=()=>{if(!v)return alert("Browser does not support speech recognition.");l?(v.stop(),b(!1)):(v.start(),b(!0))};v&&(v.onresult=p=>{o(p.results[0][0].transcript),b(!1)},v.onerror=()=>b(!1));const O=p=>{const a=window.speechSynthesis;if(!a)return;const h=new SpeechSynthesisUtterance(p.replace(/[*#`]/g,""));a.speak(h)},d=p=>{if(!c.length)return"";const a=p.toLowerCase().split(" ").filter(w=>w.length>3),h=[];return c.forEach(w=>{let T=0;a.some(I=>w.title.toLowerCase().includes(I))&&(T=1),T>0&&h.push({chunk:`(File: ${w.title})`,score:T})}),h.slice(0,3).map(w=>w.chunk).join(`
`)},k=async()=>{if(!i.trim())return;const p={id:Date.now(),sender:"user",text:i};s(a=>[...a,p]),o(""),r(!0);try{const a=d(p.text),h=await fetch(`${f}/api/chat`,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({message:p.text,context:a})});if(!h.ok){let T=`Backend error: ${h.status}`;try{const I=await h.json();I.error&&(T=I.error),I.details&&console.error("Backend Error Details:",I.details)}catch{}throw new Error(T)}const w=await h.json();s(T=>[...T,{id:Date.now()+1,sender:"ai",text:w.response}])}catch(a){console.error("Chat API Error:",a),s(h=>[...h,{id:Date.now()+1,sender:"ai",text:`Error: ${a.message}.`}])}finally{r(!1)}};return e.jsxs("div",{className:"app-container",children:[e.jsx(ce,{}),e.jsxs("div",{className:"chat-container",children:[e.jsx("div",{className:"chat-header",children:e.jsxs("div",{className:"chat-title-group",children:[e.jsx("div",{className:"bot-avatar-large",children:e.jsx(q,{size:24})}),e.jsxs("div",{children:[e.jsx("h1",{style:{fontSize:16,fontWeight:600,margin:0,color:"var(--text-main)"},children:"Creata Mentor"}),e.jsxs("div",{style:{display:"flex",alignItems:"center",gap:6,fontSize:12,color:"var(--text-muted)"},children:[e.jsx("span",{className:"status-dot"})," Online"]})]})]})}),e.jsxs("div",{className:"messages-area",children:[t.map(p=>e.jsxs("div",{className:`message-wrapper ${p.sender}`,children:[e.jsx("div",{className:"message-avatar",children:p.sender==="ai"?e.jsx(q,{size:18}):e.jsx(Ut,{size:18})}),e.jsxs("div",{className:"message-bubble",children:[p.sender==="ai"&&e.jsx("button",{className:"category-btn",style:{width:"auto",padding:4,float:"right",marginLeft:8},onClick:()=>O(p.text),children:e.jsx(Vt,{size:14})}),p.sender==="ai"?e.jsx(V,{children:p.text}):p.text]})]},p.id)),n&&e.jsxs("div",{className:"message-wrapper ai",children:[e.jsx("div",{className:"message-avatar",children:e.jsx(q,{size:18})}),e.jsxs("div",{className:"message-bubble",style:{color:"var(--text-muted)"},children:[e.jsx(_t,{className:"animate-spin",size:16,style:{marginRight:8}})," Thinking..."]})]}),e.jsx("div",{ref:S})]}),e.jsxs("div",{className:"input-area",children:[e.jsx("textarea",{value:i,onChange:p=>o(p.target.value),onKeyDown:p=>p.key==="Enter"&&!p.shiftKey&&k(),placeholder:"Ask a question...",rows:1,className:"chat-input"}),e.jsx("button",{className:`voice-btn ${l?"listening":""}`,onClick:C,children:e.jsx(st,{size:18})}),e.jsx("button",{className:"send-btn",onClick:k,disabled:n||!i.trim(),children:e.jsx(pt,{size:18})})]})]})]})}function z({children:t,variant:s="primary",size:i="medium",onClick:o,disabled:n=!1,className:r="",...l}){return e.jsx("button",{className:`btn btn-${s} btn-${i} ${r}`,onClick:o,disabled:n,...l,children:t})}const Fe=[{id:"dsa",name:"Data Structures",count:40,difficulty:"High",icon:at},{id:"os",name:"Operating Systems",count:35,difficulty:"Medium",icon:ut},{id:"dbms",name:"DBMS & SQL",count:35,difficulty:"Medium",icon:mt},{id:"web",name:"Web Technologies",count:40,difficulty:"Easy",icon:Qt},{id:"cn",name:"Computer Networks",count:30,difficulty:"Medium",icon:Kt},{id:"system_design",name:"System Design",count:35,difficulty:"High",icon:ht},{id:"javascript",name:"JavaScript",count:35,difficulty:"Medium",icon:ne},{id:"react",name:"React.js",count:35,difficulty:"Medium",icon:ne},{id:"python",name:"Python",count:30,difficulty:"Easy",icon:Yt},{id:"java",name:"Java",count:30,difficulty:"Medium",icon:ne},{id:"cpp",name:"C++",count:30,difficulty:"High",icon:$t},{id:"cloud",name:"Cloud Computing",count:200,difficulty:"Medium",icon:gt},{id:"security",name:"Cybersecurity",count:25,difficulty:"High",icon:ft},{id:"ml",name:"Machine Learning",count:25,difficulty:"High",icon:q},{id:"aptitude",name:"General Aptitude",count:20,difficulty:"Medium",icon:Zt}],Ln={dsa:[{id:1,question:"What is the time complexity of searching in a balanced Binary Search Tree (BST)?",options:["O(n)","O(log n)","O(n log n)","O(1)"],answer:1,explanation:"In a balanced BST like AVL or Red-Black tree, the height is log(n), ensuring O(log n) search time."},{id:2,question:"Which data structure is typically used to implement a recursive algorithm iteratively?",options:["Queue","Stack","Linked List","Tree"],answer:1,explanation:"A Stack mimics the system call stack used in recursion, allowing iterative implementation."},{id:3,question:"What is the worst-case time complexity of QuickSort?",options:["O(n log n)","O(n²)","O(n)","O(1)"],answer:1,explanation:"QuickSort degrades to O(n²) when the pivot selection is poor (e.g., sorted array)."},{id:4,question:"Which algorithm finds the shortest path in a weighted graph with positive edges?",options:["BFS","DFS","Dijkstra's","Kruskal's"],answer:2,explanation:"Dijkstra's algorithm is designed for finding the shortest paths from a source to all other nodes in graphs with non-negative weights."},{id:5,question:"What is a Hash Collision?",options:["Two keys hashing to different indices","Two keys hashing to the same index","Table overflow","Invalid key"],answer:1,explanation:"A collision occurs when two distinct keys map to the same location in the hash table."},{id:6,question:"Which sorting algorithm is stable?",options:["QuickSort","HeapSort","MergeSort","SelectionSort"],answer:2,explanation:"MergeSort is a stable sort, meaning it preserves the relative order of equal elements."},{id:7,question:"What is the height of a complete binary tree with N nodes?",options:["N","N/2","log N","N log N"],answer:2,explanation:"A complete binary tree has a height of floor(log2 N)."},{id:8,question:"Which data structure is best for LIFO (Last In First Out)?",options:["Queue","Stack","Array","Linked List"],answer:1,explanation:"A Stack follows the LIFO principle."},{id:9,question:"What is the time complexity of accessing an element in an array?",options:["O(1)","O(n)","O(log n)","O(n log n)"],answer:0,explanation:"Arrays allow random access, so accessing an element by index is O(1)."},{id:10,question:"Which graph traversal uses a Queue?",options:["DFS","BFS","Dijkstra","Prim's"],answer:1,explanation:"Breadth-First Search (BFS) uses a Queue to explore neighbors level by level."},{id:11,question:"What is the average time complexity of inserting into a Hash Table?",options:["O(n)","O(log n)","O(1)","O(n²)"],answer:2,explanation:"Hash tables provide O(1) average time complexity for insertion, assuming a good hash function."},{id:12,question:"Which data structure is used to implement the 'Undo' feature in editors?",options:["Queue","Stack","LinkedList","Tree"],answer:1,explanation:"A Stack (LIFO) is ideal for storing previous states to allow undo operations."},{id:13,question:"What is the maximum number of children a node in a binary tree can have?",options:["1","2","3","Any number"],answer:1,explanation:"By definition, a binary tree node can have at most 2 children."},{id:14,question:"Which sorting algorithm has the best worst-case time complexity?",options:["QuickSort","BubbleSort","MergeSort","SelectionSort"],answer:2,explanation:"MergeSort guarantees O(n log n) even in the worst case, unlike QuickSort's O(n²)."},{id:15,question:"What is the primary advantage of a Linked List over an Array?",options:["Faster access","Dynamic size","Cache locality","Less memory"],answer:1,explanation:"Linked lists can grow and shrink dynamically, whereas arrays have a fixed size."},{id:16,question:"In a min-heap, where is the smallest element located?",options:["Leaf node","Root","Last node","Randomly"],answer:1,explanation:"In a min-heap, the root always contains the minimum element."},{id:17,question:"Which traversal visits the root node last?",options:["Pre-order","In-order","Post-order","Level-order"],answer:2,explanation:"Post-order traversal visits left subtree, right subtree, then the root."},{id:18,question:"What is the purpose of 'sentinel' nodes in a linked list?",options:["Store data","Simplify boundary conditions","Increase speed","Save memory"],answer:1,explanation:"Dummy/sentinel nodes simplify edge cases like inserting/deleting at the head or tail."},{id:19,question:"Which data structure is efficient for prefix searching?",options:["Hash Table","Trie","Binary Tree","Graph"],answer:1,explanation:"A Trie (Prefix Tree) is optimized for prefix-based searches like autocomplete."},{id:20,question:"What is the time complexity of Topsort (Topological Sort)?",options:["O(V+E)","O(V*E)","O(V^2)","O(E log V)"],answer:0,explanation:"Topological sort using DFS or Khan's algorithm runs in O(V + E) time."},{id:21,question:"Which of these is a greedy algorithm?",options:["Merge Sort","Dijkstra's Algorithm","Floyd Warshall","Bellman Ford"],answer:1,explanation:"Dijkstra's is a greedy algorithm as it always chooses the nearest unvisited node."},{id:22,question:"What is the degree of a leaf node in a tree?",options:["0","1","2","Undefined"],answer:1,explanation:"A leaf node is connected to only its parent (in a standard tree view), so degree 1. In directed/rooted, out-degree is 0."},{id:23,question:"What does 'FIFO' stand for?",options:["First In First Out","Fast In Fast Out","First Input First Output","None"],answer:0,explanation:"FIFO is the principle used by Queues."},{id:24,question:"How many edges are in a Minimum Spanning Tree (MST) with V vertices?",options:["V","V-1","V+1","E-1"],answer:1,explanation:"An MST is a tree connecting all vertices, so it always has V-1 edges."},{id:25,question:"Which data structure is used for Breadth-First Search?",options:["Stack","Queue","Heap","Hash Map"],answer:1,explanation:"BFS uses a Queue to track nodes to visit layer by layer."},{id:26,question:"Which data structure is used for Depth-First Search?",options:["Stack","Queue","Heap","Hash Map"],answer:0,explanation:"DFS uses a Stack (either explicit or via recursion)."},{id:27,question:"What is a circular queue?",options:["A queue that never ends","A queue where last position connects to first","A priority queue","A stack"],answer:1,explanation:"In a circular queue, the last position is connected back to the first to optimize space."},{id:28,question:"What is the worst-case time for bubble sort?",options:["O(n)","O(n log n)","O(n²)","O(1)"],answer:2,explanation:"Bubble sort has nested loops, leading to O(n²) comparisons."},{id:29,question:"What is a Priority Queue?",options:["Queue with priorities","Faster queue","Stack","Array"],answer:0,explanation:"A queue where each element has a priority; high priority elements are served before lower ones."},{id:30,question:"Which sorting algorithm uses a pivot?",options:["Merge Sort","Quick Sort","Insertion Sort","Selection Sort"],answer:1,explanation:"Quick Sort partitions the array around a chosen pivot element."},{id:31,question:"What is the space complexity of DFS?",options:["O(V)","O(V+E)","O(1)","O(log V)"],answer:0,explanation:"The space complexity is O(V) due to the recursion stack or explicit stack in worst case."},{id:32,question:"Which is not a linear data structure?",options:["Array","Linked List","Stack","Tree"],answer:3,explanation:"Trees are hierarchical (non-linear) data structures."},{id:33,question:"Time complexity to access the nth element in a linked list?",options:["O(1)","O(n)","O(log n)","O(n²)"],answer:1,explanation:"You must traverse from the head to the nth node, taking O(n) time."},{id:34,question:"Which algo finds strongly connected components?",options:["Prim's","Kosaraju's","Kruskal's","Dijkstra"],answer:1,explanation:"Kosaraju's algorithm (and Tarjan's) is used to find SCCs in a graph."},{id:35,question:"What is a Full Binary Tree?",options:["Every node has 0 or 2 children","Every level is full","Height is minimal","None"],answer:0,explanation:"In a full binary tree, every node has either 0 or 2 children."},{id:36,question:"What is the main advantage of B-Trees?",options:["Fast in-memory","Optimized for disk storage","Simple to implement","Uses less space"],answer:1,explanation:"B-Trees are optimized for systems that read/write large blocks of data (databases, filesystems)."},{id:37,question:"What is a sparse matrix?",options:["Matrix with many zeros","Matrix with few zeros","Matrix with no zeros","Identity matrix"],answer:0,explanation:"A sparse matrix is a matrix in which most of the elements are zero."},{id:38,question:"Which complexity class represents problems solvable in polynomial time?",options:["NP","P","NP-Complete","NP-Hard"],answer:1,explanation:"P is the class of decision problems solvable by a deterministic Turing machine in polynomial time."},{id:39,question:"What is dynamic programming?",options:["Running code dynamically","Solving problems by breaking into overlapping subproblems","Randomized algo","Iterative algo"],answer:1,explanation:"DP solves complex problems by breaking them into simpler subproblems and storing their solutions."},{id:40,question:"In a stack, push and pop are?",options:["O(n)","O(1)","O(log n)","O(n²)"],answer:1,explanation:"Push and pop operations in a stack only affect the top element, taking O(1) time."}],os:[{id:1,question:"What is a 'Context Switch'?",options:["Switching between threads","Saving usage stats","Saving state of one process and loading another","Switching user modes"],answer:2,explanation:"Context switching involves interacting with the PCB to save the state of a running process and load a new one."},{id:2,question:"Which of the following is NOT a state in the process lifecycle?",options:["Running","Blocked","Deleted","Ready"],answer:2,explanation:"Processes are 'Terminated' or 'Exit', not 'Deleted'."},{id:3,question:"What handles the interface between the user and the hardware?",options:["Compiler","Operating System","Interpreter","Linker"],answer:1,explanation:"The OS acts as an intermediary between the user and computer hardware."},{id:4,question:"Which scheduling algorithm can cause starvation?",options:["Round Robin","FCFS","Priority Scheduling","Multilevel Queue"],answer:2,explanation:"Low priority processes may never execute if higher priority processes keep arriving."},{id:5,question:"What is 'Thrashing'?",options:["High CPU usage","Excessive paging activity","Disk failure","Network congestion"],answer:1,explanation:"Thrashing occurs when the system spends more time swapping pages than executing tasks."},{id:6,question:"What is a 'deadlock'?",options:["System shutdown","Processes waiting indefinitely for each other","Memory leak","CPU idle"],answer:1,explanation:"Deadlock is a situation where a set of processes are blocked because each process is holding a resource and waiting for another resource acquired by some other process."},{id:7,question:"Which of the following is NOT a condition for deadlock?",options:["Mutual Exclusion","Hold and Wait","No Preemption","Context Switching"],answer:3,explanation:"The four Coffman conditions are Mutual Exclusion, Hold and Wait, No Preemption, and Circular Wait."},{id:8,question:"What is Virtual Memory?",options:["Cloud storage","Illusion of large main memory","RAM","Cache"],answer:1,explanation:"Virtual memory maps memory addresses used by a program, called virtual addresses, into physical addresses in computer memory."},{id:9,question:"What is a Sephamores?",options:["Hardware device","Synchronization variable","Scheduling algorithm","File system"],answer:1,explanation:"A semaphore is a variable or abstract data type used to control access to a common resource by multiple processes."},{id:10,question:"Which command runs a process in the background in Unix/Linux?",options:["&","*","$","#"],answer:0,explanation:"Appending '&' to a command runs it in the background."},{id:11,question:"What is a 'Kernel'?",options:["Shell","Core part of OS","Application","CPU"],answer:1,explanation:"The kernel is the essential center of a computer operating system, the core that provides basic services for all other parts of the OS."},{id:12,question:"What is 'paging'?",options:["Sending messages","Memory management scheme","Disk scheduling","Process scheduling"],answer:1,explanation:"Paging retrieves data from secondary storage for use in main memory."},{id:13,question:"Which of these is a file system?",options:["NTFS","HTTP","FTP","DNS"],answer:0,explanation:"NTFS (New Technology File System) is the file system that the Windows NT operating system uses for storing and retrieving files."},{id:14,question:"What is 'Spooling'?",options:["Sending email","Simultaneous Peripheral Operations On-line","System Pools","None"],answer:1,explanation:"Spooling is a process in which data is temporarily held to be used and executed by a device, program or the system."},{id:15,question:"Which algorithm deals with page replacement?",options:["LRU","BFS","Round Robin","Dijkstra"],answer:0,explanation:"LRU (Least Recently Used) is a common page replacement algorithm."},{id:16,question:"What is a System Call?",options:["Calling tech support","Programmatic way for a program to request service from kernel","Function call","API call"],answer:1,explanation:"A system call is how a program requests a service from the operating system's kernel."},{id:17,question:"What is 'fragmentation'?",options:["Breaking disk","Wasted memory space","Deleting files","Slow CPU"],answer:1,explanation:"Fragmentation is when storage space is used inefficiently, reducing capacity or performance."},{id:18,question:"Which is a type of Real-Time OS?",options:["Hard","Soft","Firm","All of the above"],answer:3,explanation:"Real-time operating systems can be Hard, Soft, or Firm depending on constraint strictness."},{id:19,question:"What is 'Busy Waiting'?",options:["Waiting in queue","Process repeatedly checking a condition","System idle","Waiting for I/O"],answer:1,explanation:"Busy waiting occurs when a process repeatedly checks to see if a condition is true, consuming CPU."},{id:20,question:"What is a 'zombie' process?",options:["Virus","Process that has completed execution but still has an entry in process table","Sleeping process","Running process"],answer:1,explanation:"A zombie process involves a process that has completed execution but hasn't been reaped by its parent."},{id:21,question:"What is a 'thread'?",options:["String","Lightweight process","Cable","Wire"],answer:1,explanation:"A thread is the smallest sequence of programmed instructions that can be managed independently by a scheduler."},{id:22,question:"Banker's Algorithm is used for?",options:["Banking","Deadlock Avoidance","Sorting","Searching"],answer:1,explanation:"The Banker's algorithm is a resource allocation and deadlock avoidance algorithm."},{id:23,question:"What is 'throughput'?",options:["Network speed","Number of processes completed per time unit","Disk size","Memory speed"],answer:1,explanation:"Throughput is the number of units of information a system can process in a given amount of time."},{id:24,question:"Which memory is volatile?",options:["ROM","RAM","HDD","Flash"],answer:1,explanation:"RAM (Random Access Memory) loses its data when power is turned off."},{id:25,question:"What is 'Belady's Anomaly'?",options:["More frames leading to more page faults","Less frames leading to more page faults","System crash","Deadlock"],answer:0,explanation:"It is the phenomenon in which increasing the number of page frames results in an increase in the number of page faults."},{id:26,question:"What is a 'race condition'?",options:["Running race","Output depends on sequence of timing","Car race","None"],answer:1,explanation:"A race condition occurs when a software system's behavior depends on the timing of uncontrollable events."},{id:27,question:"Which component performs arithmetic logic?",options:["CU","ALU","MU","Bus"],answer:1,explanation:"ALU (Arithmetic Logic Unit) performs arithmetic and logical operations."},{id:28,question:"What is 'BIOS'?",options:["Basic Input Output System","Binary Input Output System","Basic Integrated Operating System","None"],answer:0,explanation:"BIOS is non-volatile firmware used to perform hardware initialization during the booting process."},{id:29,question:"What is 'swapping'?",options:["Exchanging data","Moving process between main memory and disk","Trading","Networking"],answer:1,explanation:"Swapping is a mechanism in which a process can be swapped temporarily out of main memory to a backing store."},{id:30,question:"Who developed Linux?",options:["Steve Jobs","Bill Gates","Linus Torvalds","Dennis Ritchie"],answer:2,explanation:"Linus Torvalds developed the Linux kernel."},{id:31,question:"Difference between multiprogramming and multitasking?",options:["None","Multitasking is logical extension of multiprogramming","Multiprogramming is fast","Multitasking is single user"],answer:1,explanation:"Multitasking is the logical extension of multiprogramming, where CPU switches jobs so frequently that users can interact with each."},{id:32,question:"What is a 'daemon'?",options:["Virus","Background process","Game","User program"],answer:1,explanation:"A daemon is a computer program that runs as a background process, rather than being under the direct control of an interactive user."},{id:33,question:"What does 'RAID' stand for?",options:["Redundant Array of Independent Disks","Rapid Access of Indexed Data","Random Array of Internet Data","None"],answer:0,explanation:"RAID is a data storage virtualization technology that combines multiple physical disk drive components."},{id:34,question:"What is 'Inter-Process Communication' (IPC)?",options:["Internet","Processes exchanging data","Internal protocol","None"],answer:1,explanation:"IPC refers to the mechanisms an operating system provides to allow the processes to manage shared data."},{id:35,question:"Which is a monolithic kernel example?",options:["Linux","Minix","Mach","QNX"],answer:0,explanation:"Linux uses a monolithic kernel, where the entire operating system works in kernel space."}],web:[{id:1,question:"What does HTML stand for?",options:["Hyper Text Markup Language","High Text Machine Language","Hyper Tool Multi Language","None of these"],answer:0,explanation:"HTML is the standard markup language for documents designed to be displayed in a web browser."},{id:2,question:"What is the purpose of the <head> tag?",options:["Main content","Metadata and links","Footer","Scripts only"],answer:1,explanation:"The <head> contains metadata, links to stylesheets, and scripts."},{id:3,question:"Which status code indicates 'Not Found'?",options:["200","301","404","500"],answer:2,explanation:"404 is the standard HTTP status code for 'Not Found'."},{id:4,question:"What is the use of 'z-index' in CSS?",options:["Text alignment","Stack order of elements","Zoom level","Opacity"],answer:1,explanation:"z-index specifies the stack order of an element along the z-axis."},{id:5,question:"What is 'Hoisting' in JavaScript?",options:["Moving declarations to top","Lifting weights","Scaling apps","Linking files"],answer:0,explanation:"Hoisting is JavaScript's behavior of moving declarations to the top of the current scope."},{id:6,question:"What does CSS stand for?",options:["Creative Style Sheets","Cascading Style Sheets","Computer Style Sheets","Colorful Style Sheets"],answer:1,explanation:"CSS stands for Cascading Style Sheets."},{id:7,question:"Where in an HTML document is the correct place to refer to an external style sheet?",options:["In the <body> section","At the end of the document","In the <head> section","In the <title> section"],answer:2,explanation:"External style sheets are referenced in the <head> section using the <link> tag."},{id:8,question:"Which HTML tag is used to define an internal style sheet?",options:["<style>","<script>","<css>","<design>"],answer:0,explanation:"The <style> tag is used to define internal CSS."},{id:9,question:"Which HTML attribute is used to define inline styles?",options:["class","style","font","styles"],answer:1,explanation:"The 'style' attribute is used to define inline CSS."},{id:10,question:"Which is the correct CSS syntax?",options:["body:color=black;","{body;color:black;}","body {color: black;}","{body:color=black;}"],answer:2,explanation:"The correct syntax is selector {property: value;}."},{id:11,question:"How do you insert a comment in a CSS file?",options:["// this is a comment","/* this is a comment */","' this is a comment","// this is a comment //"],answer:1,explanation:"CSS comments start with /* and end with */."},{id:12,question:"Which property is used to change the background color?",options:["color","bgcolor","background-color","back-color"],answer:2,explanation:"The background-color property sets the background color of an element."},{id:13,question:"How do you add a background color for all <h1> elements?",options:["all.h1 {background-color:#FFFFFF;}","h1.all {background-color:#FFFFFF;}","h1 {background-color:#FFFFFF;}",".h1 {background-color:#FFFFFF;}"],answer:2,explanation:"The selector h1 targets all <h1> elements."},{id:14,question:"Which CSS property is used to change the text color of an element?",options:["text-color","fgcolor","color","font-color"],answer:2,explanation:"The 'color' property is used to set the color of the text."},{id:15,question:"Which CSS property controls the text size?",options:["font-style","text-size","font-size","text-style"],answer:2,explanation:"The font-size property sets the size of the text."},{id:16,question:"What is the correct HTML for creating a hyperlink?",options:["<a href='http://www.w3schools.com'>W3Schools</a>","<a name='http://www.w3schools.com'>W3Schools.com</a>","<a url='http://www.w3schools.com'>W3Schools.com</a>","<a>http://www.w3schools.com</a>"],answer:0,explanation:"The <a> tag with the 'href' attribute creates a hyperlink."},{id:17,question:"Which character is used to indicate an end tag?",options:["/","*","^","<"],answer:0,explanation:"End tags start with a forward slash, e.g., </div>."},{id:18,question:"How can you open a link in a new tab/browser window?",options:["<a href='url' target='new'>","<a href='url' target='_blank'>","<a href='url' new>","<a href='url' target='_new'>"],answer:1,explanation:"target='_blank' specifies that the link should open in a new window or tab."},{id:19,question:"Which HTML element defines navigation links?",options:["<nav>","<navigation>","<navigate>","<link>"],answer:0,explanation:"The <nav> tag defines a set of navigation links."},{id:20,question:"In HTML, what does the <aside> element define?",options:["Content aside from the page content","The main content","Navigation","Footer"],answer:0,explanation:"The <aside> element defines content aside from the content it is placed in (like a sidebar)."},{id:21,question:"Which HTML attribute specifies an alternate text for an image, if the image cannot be displayed?",options:["title","alt","src","longdesc"],answer:1,explanation:"The 'alt' attribute provides alternative text for an image."},{id:22,question:"Who is making the Web standards?",options:["Google","Microsoft","Mozilla","The World Wide Web Consortium (W3C)"],answer:3,explanation:"The W3C is the main international standards organization for the World Wide Web."},{id:23,question:"Choose the correct HTML element for the largest heading:",options:["<heading>","<h1>","<h6>","<head>"],answer:1,explanation:"<h1> defines the most important heading."},{id:24,question:"What is the correct HTML for inserting a line break?",options:["<br>","<lb>","<break>","<newline>"],answer:0,explanation:"<br> inserts a single line break."},{id:25,question:"What is the correct HTML for adding a background color?",options:["<body bg='yellow'>","<body style='background-color:yellow;'>","<background>yellow</background>","<body background='yellow'>"],answer:1,explanation:"Using inline CSS style='background-color:yellow;' is the correct modern way."},{id:26,question:"Choose the correct HTML element to define important text",options:["<b>","<i>","<strong>","<important>"],answer:2,explanation:"The <strong> tag is used to define text with strong importance."},{id:27,question:"Which character is used to indicate an ID in CSS?",options:[".","#","*","%"],answer:1,explanation:"The hash symbol (#) is used to select elements with a specific ID."},{id:28,question:"How do you select an element with id 'demo'?",options:[".demo","demo","#demo","*demo"],answer:2,explanation:"#demo selects the element with id='demo'."},{id:29,question:"How do you select all p elements inside a div element?",options:["div.p","div p","div + p","div > p"],answer:1,explanation:"'div p' selects all <p> elements that are descendants of a <div> element."},{id:30,question:"How do you group selectors?",options:["Separate each selector with a space","Separate each selector with a comma","Separate each selector with a plus sign","Separate each selector with a hyphen"],answer:1,explanation:"You can group selectors by separating them with a comma (e.g., h1, h2, p)."},{id:31,question:"What is the default value of the position property?",options:["relative","fixed","absolute","static"],answer:3,explanation:"static is the default position value."},{id:32,question:"Which HTTP method is idempotent?",options:["POST","GET","PATCH","CONNECT"],answer:1,explanation:"GET (and PUT, DELETE) methods are idempotent, meaning multiple identical requests have the same effect as a single one."},{id:33,question:"What does '404' mean?",options:["Server Error","Forbidden","Not Found","Bad Request"],answer:2,explanation:"404 Not Found indicates that the server cannot find the requested resource."},{id:34,question:"What is localStorage?",options:["Server storage","Session based storage","Persistent browser storage","Cookie"],answer:2,explanation:"localStorage allows storing key-value pairs in the browser with no expiration time."},{id:35,question:"What is the Box Model?",options:["Layout concept","Programming pattern","Database model","Network model"],answer:0,explanation:"The CSS Box Model consists of margins, borders, padding, and the actual content."},{id:36,question:"What is CORS?",options:["Cross-Origin Resource Sharing","Content Origin Restriction System","Client Origin Request Security","Cross-Origin Routing Service"],answer:0,explanation:"CORS is a security feature that allows or restricts resources requested from another domain."},{id:37,question:"What is a Service Worker?",options:["Server process","Background script for PWAs","Web server","Database worker"],answer:1,explanation:"Service Workers are scripts that run in the background, enabling features like offline functionality and push notifications."},{id:38,question:"What is the purpose of meta viewport tag?",options:["SEO optimization","Responsive design control","Security","Analytics"],answer:1,explanation:"The viewport meta tag controls layout on mobile browsers, essential for responsive design."},{id:39,question:"What is WebSocket?",options:["HTTP method","Full-duplex communication protocol","Database connection","File transfer protocol"],answer:1,explanation:"WebSocket provides full-duplex communication channels over a single TCP connection."},{id:40,question:"What is the purpose of the 'defer' attribute in script tags?",options:["Delays script execution","Executes script after HTML parsing","Prevents script execution","Caches the script"],answer:1,explanation:"The defer attribute tells the browser to execute the script after the document has been parsed."}],system_design:[{id:1,question:"What is the CAP theorem?",options:["Consistency, Availability, Partition Tolerance","Consistency, Accuracy, Partition Tolerance","Concurrency, Availability, Performance","None of these"],answer:0,explanation:"CAP theorem states a distributed system can only provide two of Consistency, Availability, and Partition Tolerance."},{id:2,question:"Which load balancing algorithm is simplest?",options:["Least Connection","Round Robin","IP Hash","Weighted Round Robin"],answer:1,explanation:"Round Robin sequentially distributes requests, making it simple but not always optimal."},{id:3,question:"What is a CDN used for?",options:["Database backup","Content Delivery","Code compilation","User authentication"],answer:1,explanation:"A Content Delivery Network (CDN) distributes content geographically to reduce latency."},{id:4,question:"What is Horizontal Scaling?",options:["Adding more power to a machine","Adding more machines to the pool","Increasing screen size","None of these"],answer:1,explanation:"Horizontal scaling involves adding more servers to handle increased load."},{id:5,question:"What is Sharding?",options:["Database mirroring","Splitting a database into smaller chunks","Data compression","Encryption"],answer:1,explanation:"Sharding is a method of splitting and storing a single logical dataset in multiple databases."},{id:6,question:"What is 'Load Balancing'?",options:["Distributing network traffic across multiple servers","Balancing weights","Managing power","None"],answer:0,explanation:"Load balancing distributes workloads across multiple computing resources to maximize throughput and minimize response time."},{id:7,question:"Which strategy is used to handle failure in microservices?",options:["Circuit Breaker","Load Balancer","Proxy","Gateway"],answer:0,explanation:"The Circuit Breaker pattern prevents an application from repeatedly trying to execute an operation that's likely to fail."},{id:8,question:"What is 'Caching'?",options:["Storing data temporarily for fast access","Deleting data","Compressing data","Encrypting data"],answer:0,explanation:"Caching stores copies of data in a faster storage layer to improve retrieval performance."},{id:9,question:"What is 'Latency'?",options:["Bandwidth","Time taken for data to travel from source to destination","Speed of light","Data size"],answer:1,explanation:"Latency is the delay before a transfer of data begins following an instruction."},{id:10,question:"What is the role of a 'Reverse Proxy'?",options:["Hiding client identity","Hiding server identity and distributing load","Blocking internet","None"],answer:1,explanation:"A reverse proxy retrieves resources on behalf of a client from one or more servers, often for load balancing and security."},{id:11,question:"What is 'Vertical Scaling'?",options:["Adding more servers","Adding more power (CPU/RAM) to an existing server","Scaling database","None"],answer:1,explanation:"Vertical scaling (scaling up) involves adding more resources to the same node."},{id:12,question:"What is 'Throughput' in system design?",options:["Network delay","Number of actions executed per unit time","Data loss","CPU usage"],answer:1,explanation:"Throughput is the rate at which a system processes requests."},{id:13,question:"What is 'Data Replication'?",options:["Deleting data","Storing the same data on multiple nodes","Splitting data","None"],answer:1,explanation:"Replication involves keeping a copy of the same data on multiple machines to increase availability."},{id:14,question:"Which database property does 'C' in ACID stand for?",options:["Consistency","Concurrency","Capacity","Compatibility"],answer:0,explanation:"Consistency ensures that a transaction takes the database from one valid state to another."},{id:15,question:"What is 'Eventual Consistency'?",options:["Data is never consistent","Data will become consistent over time","Immediate consistency","None"],answer:1,explanation:"Eventual consistency allows for temporary inconsistencies but guarantees that if no new updates are made, eventually all accesses will return the last updated value."},{id:16,question:"What is a 'Microservice' architecture?",options:["Single large application","Collection of small, independent services","Mainframe","Client-server"],answer:1,explanation:"Microservices structure an application as a collection of loosely coupled services."},{id:17,question:"What is 'Consistent Hashing'?",options:["Standard hashing","Distributed hashing scheme reducing remapping when nodes change","Encryption","None"],answer:1,explanation:"Consistent hashing minimizes reorganization of keys when a slot (or node) is added or removed."},{id:18,question:"What is 'API Gateway'?",options:["Database","Server that acts as a single entry point for a system","Firewall","Router"],answer:1,explanation:"An API Gateway handles requests, routing them to the appropriate backend service."},{id:19,question:"Which protocol is commonly used for real-time communication?",options:["HTTP","FTP","WebSocket","SMTP"],answer:2,explanation:"WebSockets provide full-duplex communication channels over a single TCP connection."},{id:20,question:"What is 'Single Point of Failure' (SPOF)?",options:["A part of a system that, if it fails, stops the entire system","A bug","A server","None"],answer:0,explanation:"Eliminating SPOFs is critical for high availability."},{id:21,question:"What is 'Idempotency'?",options:["Operation can be applied multiple times without changing the result beyond the initial application","Randomness","Speed","Security"],answer:0,explanation:"Idempotency ensures that retrying an operation doesn't cause unintended side effects (e.g., charging a card twice)."},{id:22,question:"What is 'Rate Limiting'?",options:["Limiting internet speed","Controlling the rate of traffic sent or received","Limiting users","None"],answer:1,explanation:"Rate limiting is used to control the amount of incoming or outgoing traffic to/from a network."},{id:23,question:"What is a 'Bloom Filter'?",options:["Image filter","Probabilistic data structure to test set membership","Database index","None"],answer:1,explanation:"A Bloom filter is a space-efficient probabilistic data structure used to test whether an element is a member of a set (may return false positives)."},{id:24,question:"What is 'Polling'?",options:["Voting","Client repeatedly checking the server for updates","Server pushing updates","None"],answer:1,explanation:"Polling involves the client periodically requesting data from the server."},{id:25,question:"What is 'Long Polling'?",options:["Polling for a long time","Server holds request open until data is available","Slow polling","None"],answer:1,explanation:"In Long Polling, the server holds the request open until new data is available or a timeout occurs."},{id:26,question:"What is 'Heartbeat' in distributed systems?",options:["Power supply","Periodic signal to indicate a node is alive","CPU clock","None"],answer:1,explanation:"Heartbeats are used to monitor the health and availability of nodes."},{id:27,question:"What is 'Leader Election'?",options:["Voting for president","Process of designating a single process as the organizer","Selecting best algorithm","None"],answer:1,explanation:"Leader election is the process of designating a single process as the coordinator for some task."},{id:28,question:"What is 'Message Queue'?",options:["Email list","Asynchronous communication buffer between services","Traffic jam","None"],answer:1,explanation:"Message queues allow components to communicate asynchronously, decoupling the sender and receiver."},{id:29,question:"What is 'Service Discovery'?",options:["Finding services manually","Automatic detection of devices and services on a network","Search engine","None"],answer:1,explanation:"Service discovery serves to automatically detect devices and services on a computer network."},{id:30,question:"Which pattern is used to separate read and write operations?",options:["MVC","CQRS","Singleton","Factory"],answer:1,explanation:"CQRS (Command Query Responsibility Segregation) separates read and update operations for a data store."},{id:31,question:"What is 'Gossip Protocol'?",options:["Chat app","Peer-to-peer communication protocol for information dissemination","Rumors","None"],answer:1,explanation:"Gossip protocols are a class of communication protocols inspired by the way social networks disseminate information."},{id:32,question:"What is 'Backpressure'?",options:["Physical pressure","Resistance or opposition to the flow of data","Backup","None"],answer:1,explanation:"Backpressure occurs when a system prevents a producer from sending too much data to a consumer that cannot handle the load."},{id:33,question:"What is 'CDN Edge Server'?",options:["Server at the center","Server located closer to the user","Backup server","None"],answer:1,explanation:"Edge servers cache content closer to the user to reduce latency."},{id:34,question:"What is a 'Sticky Session'?",options:["Session tracking","Routing requests from a client to the same server","Persistent cookie","None"],answer:1,explanation:"Sticky sessions calculate a hash of the client's IP or cookie to route them to the same backend server."},{id:35,question:"What is 'Database Normalization'?",options:["Making data normal","Organizing data to reduce redundancy","Deleting data","None"],answer:1,explanation:"Normalization is the process of organizing data in a database to reduce redundancy and improve data integrity."}],javascript:[{id:1,question:"What is 'NaN'?",options:["Not a Null","New and New","Not a Number","None of Above"],answer:2,explanation:"NaN stands for 'Not-a-Number', typically returned when a math operation fails."},{id:2,question:"Which keyword is used to declare a block-scoped variable?",options:["var","let","both","none"],answer:1,explanation:"'let' (and 'const') allow you to declare variables that are limited to the scope of a block statement."},{id:3,question:"What is a Closure?",options:["A function with preserved data","A block of code","A CSS style","A database connection"],answer:0,explanation:"A closure gives you access to an outer function's scope from an inner function."},{id:4,question:"What does '===' operator do?",options:["Assignment","Strict equality comparison","Loose equality comparison","Addition"],answer:1,explanation:"=== checks for both value and type equality."},{id:5,question:"What is the output of '2' + 2?",options:["4","22","NaN","Error"],answer:1,explanation:"JavaScript coerces the number 2 to a string and concatenates them."},{id:6,question:"What is 'Bind' in JavaScript?",options:["Connects to database","Creates a new function that, when called, has its 'this' keyword set to the provided value","Joins strings","None"],answer:1,explanation:"The bind() method creates a new function that has its 'this' keyword set to separate value."},{id:7,question:"What is the result of 'typeof null'?",options:["null","undefined","object","string"],answer:2,explanation:"In JavaScript, typeof null returns 'object', which is a known bug in the language."},{id:8,question:"Which function is used to parse a JSON string?",options:["JSON.stringify()","JSON.parse()","JSON.object()","JSON.toObject()"],answer:1,explanation:"JSON.parse() parses a JSON string constructing the JavaScript value or object described by the string."},{id:9,question:"What does 'use strict' do?",options:["Enables latest features","Enforces stricter parsing and error handling","Includes strict library","None"],answer:1,explanation:"'use strict' allows you to place a program, or a function, in a 'strict' operating context."},{id:10,question:"What is an IIFE?",options:["Immediately Invoked Function Expression","Internal Interface Function Event","Immediate Interface","None"],answer:0,explanation:"An IIFE is a JavaScript function that runs as soon as it is defined."},{id:11,question:"What is the difference between 'let' and 'var'?",options:["No difference","var is block scoped, let is function scoped","let is block scoped, var is function scoped","None"],answer:2,explanation:"let is block-scoped, whereas var is function-scoped."},{id:12,question:"What is 'Event Bubbling'?",options:["Events firing from target up to the root","Events firing from root down to target","Creating bubbling effect","None"],answer:0,explanation:"Event bubbling is a method of event propagation in the HTML DOM API when an event occurs in an element inside another element, and both elements have registered a handle for that event."},{id:13,question:"What is a 'Promise'?",options:["A guarantee","Object representing the eventual completion or failure of an asynchronous operation","Function","String"],answer:1,explanation:"A Promise is an object representing the eventual completion or failure of an asynchronous operation."},{id:14,question:"Which method adds elements to the end of an array?",options:["push()","pop()","shift()","unshift()"],answer:0,explanation:"push() adds one or more elements to the end of an array."},{id:15,question:"What is 'Callback Hell'?",options:["Function calling itself","Heavily nested callbacks making code hard to read","Error in callback","None"],answer:1,explanation:"Callback hell refers to heavily nested callbacks that make code difficult to read and maintain."},{id:16,question:"How do you check if a property exists in an object?",options:["obj.has(prop)","prop in obj","exists(obj, prop)","obj.contains(prop)"],answer:1,explanation:"The 'in' operator returns true if the specified property is in the specified object."},{id:17,question:"What is the 'spread' operator?",options:["...",">>>","+++","&&&"],answer:0,explanation:"The spread syntax (...) allows an iterable such as an array expression to be expanded."},{id:18,question:"What is 'Currying'?",options:["Spicing up code","Transforming a function with multiple arguments into a sequence of nesting functions","Mixing arrays","None"],answer:1,explanation:"Currying is the technique of translating the evaluation of a function that takes multiple arguments into evaluating a sequence of functions, each with a single argument."},{id:19,question:"What applies 'Memoization'?",options:["Caching the return value based on parameters","Memorizing code","Removing memory leaks","None"],answer:0,explanation:"Memoization is an optimization technique used primarily to speed up computer programs by storing the results of expensive function calls."},{id:20,question:"What is the output of 3 + '3'?",options:["6","33","NaN","Error"],answer:1,explanation:"The number 3 is coerced into a string '3', resulting in concatenation '33'."},{id:21,question:"Which method is used to remove the last element from an array?",options:["push()","pop()","shift()","splice()"],answer:1,explanation:"pop() removes the last element from an array."},{id:22,question:"What is a 'Higher Order Function'?",options:["Function that calls itself","Function that takes a function as an argument or returns a function","Main function","None"],answer:1,explanation:"A higher-order function is a function that either takes a function as an argument or returns a function."},{id:23,question:"What is the difference between map() and forEach()?",options:["No difference","map returns a new array, forEach does not","forEach is faster","map modifies original array"],answer:1,explanation:"map() returns a new array with the results of calling a function for every array element, while forEach() executes a provided function once for each array element."},{id:24,question:"What is 'Event Delegation'?",options:["Delegating tasks","Attaching a single event listener to a parent element to manage events for children","Removing events","None"],answer:1,explanation:"Event delegation allows you to avoid adding event listeners to specific nodes; instead, the event listener is added to one parent."},{id:25,question:"What is a 'Generator' function?",options:["Function that generates numbers","Function that can be paused and resumed","Random number generator","None"],answer:1,explanation:"Generator functions provide a powerful alternative: they allow you to define an iterative algorithm by writing a single function whose execution is not continuous."},{id:26,question:"Which keyword acts as a placeholder for a value?",options:["null","undefined","void","NaN"],answer:1,explanation:"A variable that has not been assigned a value is of type undefined."},{id:27,question:"How to stop event propagation?",options:["event.stop()","event.stopPropagation()","event.halt()","event.prevent()"],answer:1,explanation:"stopPropagation() prevents further propagation of the current event in the capturing and bubbling phases."},{id:28,question:"What is 'Object Destructuring'?",options:["Destroying object","Extracting properties from objects and binding them to variables","Creating object","None"],answer:1,explanation:"Destructuring assignment syntax is a JavaScript expression that makes it possible to unpack values from arrays, or properties from objects, into distinct variables."},{id:29,question:"What is 'Set' in JavaScript?",options:["Collection of unique values","List of values","Key-Value pair","None"],answer:0,explanation:"The Set object lets you store unique values of any type."},{id:30,question:"What is 'WeakMap'?",options:["Map with weak keys","Map where keys are objects and weakly referenced","Map with no keys","None"],answer:1,explanation:"A WeakMap is a collection of key/value pairs in which the keys are objects and are weakly referenced."},{id:31,question:"Which method converts a string to an integer?",options:["Integer.parse()","parseInt()","parseInteger()","toInteger()"],answer:1,explanation:"The parseInt() function parses a string argument and returns an integer of the specified radix."},{id:32,question:"What is 'Prototype'?",options:["Blueprint","Mechanism by which JavaScript objects inherit features from one another","Class","Function"],answer:1,explanation:"Prototypes are the mechanism by which JavaScript objects inherit features from one another."},{id:33,question:"What is the 'Temporal Dead Zone'?",options:["Time limit","Period between entering scope and variable declaration","Memory leak","None"],answer:1,explanation:"The TDZ is the time between entering the scope of a variable and its actual declaration."},{id:34,question:"What is 'Shadowing'?",options:["Hiding a variable","Declaring a variable with the same name as a variable in an outer scope","Dark mode","None"],answer:1,explanation:"Shadowing occurs when a variable declared in a certain scope has the same name as a variable defined in an outer scope."},{id:35,question:"Check if array includes a value?",options:["has()","contains()","includes()","exists()"],answer:2,explanation:"The includes() method determines whether an array includes a certain value among its entries."}],react:[{id:1,question:"What is JSX?",options:["Java Syntax Extension","JavaScript XML","JSON XML","None"],answer:1,explanation:"JSX stands for JavaScript XML, allowing you to write HTML-like syntax in JavaScript."},{id:2,question:"What hook is used for side effects in functional components?",options:["useState","useReducer","useEffect","useRef"],answer:2,explanation:"useEffect is used to perform side effects like data fetching, subscriptions, and DOM updates."},{id:3,question:"What is the specialized DOM used by React?",options:["Shadow DOM","Real DOM","Virtual DOM","Light DOM"],answer:2,explanation:"React uses the Virtual DOM to optimize updates and minimize direct interaction with the real DOM."},{id:4,question:"How do you pass data from parent to child component?",options:["State","Props","Context","Redux"],answer:1,explanation:"Props (properties) are used to pass data from a parent component to a child component."},{id:5,question:"Which method is called when a component is removed from the DOM?",options:["componentDidMount","componentWillUnmount","componentDidUpdate","render"],answer:1,explanation:"componentWillUnmount is a lifecycle method called just before a component is unmounted and destroyed."},{id:6,question:"What is the purpose of 'key' prop in lists?",options:["Style the list","Uniquely identify elements"," Sort the list","Filter the list"],answer:1,explanation:"Keys help React identify which items have changed, are added, or are removed."},{id:7,question:"What is the second argument of useState?",options:["Initial value","State variable","Updater function","Effect function"],answer:2,explanation:"useState returns a pair: the current state value and a function that lets you update it."},{id:8,question:"Which hook is used to access the context?",options:["useContext","useReducer","useCallback","useMemo"],answer:0,explanation:"useContext lets you subscribe to React context without introducing nesting."},{id:9,question:"What prevents unnecessary re-renders of a functional component?",options:["React.memo","useMemo","shouldComponentUpdate","PureComponent"],answer:0,explanation:"React.memo is a higher-order component that preventing re-renders if props haven't changed."},{id:10,question:"What is a 'Pure Component'?",options:["Component with no state","Component that implements shouldComponentUpdate with shallow prop comparison","Component with no props","None"],answer:1,explanation:"PureComponent implements shouldComponentUpdate() with a shallow prop and state comparison."},{id:11,question:"What is 'Prop Drilling'?",options:["Drilling holes in props","Passing data through multiple levels of components","Fetching data","None"],answer:1,explanation:"Prop drilling refers to the process of passing data from a parent component down to a deep child component through intermediate components."},{id:12,question:"What is the purpose of 'useCallback'?",options:["Memorize a function","Memorize a value","Run side effect","Manage state"],answer:0,explanation:"useCallback returns a memoized version of the callback function that only changes if one of the dependencies has changed."},{id:13,question:"What is the purpose of 'useMemo'?",options:["Memorize a function","Memorize a computed value","Run side effect","Manage state"],answer:1,explanation:"useMemo returns a memoized value, recalculating it only when dependencies change."},{id:14,question:"What is 'React Router'?",options:["Database","Library for routing in React apps","Server","None"],answer:1,explanation:"React Router is a standard library for routing in React, enabling navigation between views."},{id:15,question:"What is a 'Higher-Order Component' (HOC)?",options:["Parent component","Function taking a component and returning a new component","Root component","None"],answer:1,explanation:"A HOC is an advanced technique in React for reusing component logic."},{id:16,question:"What is 'Redux'?",options:["Database","State management library","API","Server"],answer:1,explanation:"Redux is a predictable state container for JavaScript apps, often used with React."},{id:17,question:"What is 'useReducer' used for?",options:["Simple state","Complex state logic","Routing","Fetching data"],answer:1,explanation:"useReducer is usually preferable to useState when you have complex state logic that involves multiple sub-values."},{id:18,question:"What is 'React Fragment'?",options:["Broken component","Tool to group list of children without adding extra nodes to the DOM","Error","None"],answer:1,explanation:"Fragments let you group a list of children without adding extra nodes to the DOM."},{id:19,question:"What is 'Controlled Component'?",options:["Component controlled by DOM","Component where React controls the state of form elements","Slow component","None"],answer:1,explanation:"In a controlled component, form data is handled by a React component."},{id:20,question:"What is 'Uncontrolled Component'?",options:["Component with no state","Form data is handled by the DOM itself","Fast component","None"],answer:1,explanation:"In an uncontrolled component, form data is handled by the DOM itself using refs."},{id:21,question:"How to create a ref in React?",options:["React.createRef()","useRef()","Both A and B","None"],answer:2,explanation:"You can use React.createRef() in class components and useRef() in functional components."},{id:22,question:"What is 'React Portal'?",options:["Game","Way to render children into a DOM node outside the parent hierarchy","Link","None"],answer:1,explanation:"Portals provide a first-class way to render children into a DOM node that exists outside the DOM hierarchy of the parent component."},{id:23,question:"What is 'Error Boundary'?",options:["CSS border","React component that catches JavaScript errors in child component tree","API error","None"],answer:1,explanation:"Error boundaries are React components that catch JavaScript errors anywhere in their child component tree."},{id:24,question:"What is 'Hydration'?",options:["Drinking water","Attaching event listeners to server-rendered HTML","Loading data","None"],answer:1,explanation:"Hydration is the process of using client-side JavaScript to add application state and interactivity to server-rendered HTML."},{id:25,question:"What is 'Next.js'?",options:["Java framework","React framework for production","Database","None"],answer:1,explanation:"Next.js is a React framework that enables features like server-side rendering and static site generation."},{id:26,question:"What is 'Lazy Loading' in React?",options:["Loading slowly","Loading components only when they are needed","Error","None"],answer:1,explanation:"React.lazy() lets you define a component that is loaded dynamically."},{id:27,question:"What is the rule of hooks?",options:["Call hooks inside loops","Only call hooks at the top level","Call hooks in standard JS functions","None"],answer:1,explanation:"Don't call Hooks inside loops, conditions, or nested functions."},{id:28,question:"What is 'Strict Mode'?",options:["Hard mode","Tool for highlighting potential problems in an application","Secure mode","None"],answer:1,explanation:"StrictMode is a tool for highlighting potential problems in an application (e.g., legacy API usage)."},{id:29,question:"How to optimize performance in React?",options:["useMemo","React.memo","Code splitting","All of the above"],answer:3,explanation:"All these techniques help in optimizing React application performance."},{id:30,question:"What is 'Flux'?",options:["Physics term","Application architecture for handling data flow","React component","None"],answer:1,explanation:"Flux is the application architecture that Facebook uses for building client-side web applications."},{id:31,question:"What is 'SyntheticEvent'?",options:["Fake event","Cross-browser wrapper around the browser's native event","Error","None"],answer:1,explanation:"SyntheticEvent is a cross-browser wrapper around the browser's native event."},{id:32,question:"What is 'Concurrent Mode'?",options:["Parallel processing","Feature set that helps React apps stay responsive","Fast mode","None"],answer:1,explanation:"Concurrent Mode is a set of new features that help React apps stay responsive and gracefully adjust to the user's device capabilities and network speed."},{id:33,question:"What passes data to a component?",options:["setState","props","render","out"],answer:1,explanation:"Props are used to pass data from parent to child."},{id:34,question:"Which package is used for routing?",options:["react-route","react-router-dom","router-react","react-navigation"],answer:1,explanation:"react-router-dom is the standard routing library for React web apps."},{id:35,question:"What is 'Enzyme'?",options:["Biological catalyst","Testing utility for React","Compiler","None"],answer:1,explanation:"Enzyme is a JavaScript Testing utility for React that makes it easier to test your React Components' output."}],python:[{id:1,question:"What is a textual representation of a class/function in Python?",options:["Comment","Docstring","Decorator","Annotation"],answer:1,explanation:"Docstrings provide a convenient way of associating documentation with Python modules, functions, classes, and methods."},{id:2,question:"Which data type is immutable?",options:["List","Dictionary","Set","Tuple"],answer:3,explanation:"Tuples are immutable sequences, meaning their elements cannot be changed after creation."},{id:3,question:"What keyword is used to define a function?",options:["func","def","function","define"],answer:1,explanation:"The 'def' keyword is used to define a function in Python."},{id:4,question:"How do you handle exceptions in Python?",options:["try-catch","do-while","try-except","if-else"],answer:2,explanation:"Python uses try-except blocks to catch and handle exceptions."},{id:5,question:"What is a decorator?",options:["Design pattern","Function modifying another function","Variable type","Class attribute"],answer:1,explanation:"A decorator is a function that takes another function and extends the behavior of the latter function."},{id:6,question:"What is list comprehension?",options:["Making list smaller","Concise way to create lists","Sorting list","Printing list"],answer:1,explanation:"List comprehension offers a shorter syntax when you want to create a new list based on the values of an existing list."},{id:7,question:"What is the difference between 'is' and '=='?",options:["No difference","'is' checks identity, '==' checks equality","'==' checks identity, 'is' checks equality","None"],answer:1,explanation:"'is' checks if two variables point to the same object in memory, while '==' checks if their values are equal."},{id:8,question:"What is the purpose of 'self'?",options:["Refers to class","Refers to instance","Global variable","Static method"],answer:1,explanation:"'self' represents the instance of the class and binds the attributes with the given arguments."},{id:9,question:"Which library is used for data analysis?",options:["NumPy","Pandas","Requests","Flask"],answer:1,explanation:"Pandas is a popularly used library for data manipulation and analysis."},{id:10,question:"What is a lambda function?",options:["Named function","Anonymous function","Class method","Module"],answer:1,explanation:"A lambda function is a small anonymous function defined with the lambda keyword."},{id:11,question:"What is a decorator in Python?",options:["Design pattern","Function that modifies another function","Class","Module"],answer:1,explanation:"A decorator is a function that takes another function and extends its behavior without explicitly modifying it."},{id:12,question:"What is the difference between list and tuple?",options:["No difference","Lists are mutable, tuples are immutable","Tuples are faster","Lists use more memory"],answer:1,explanation:"Lists are mutable (can be changed) while tuples are immutable (cannot be changed after creation)."},{id:13,question:"What is list comprehension?",options:["List method","Concise way to create lists","List sorting","List iteration"],answer:1,explanation:"List comprehension provides a concise way to create lists based on existing lists."},{id:14,question:"What is the purpose of __init__?",options:["Delete object","Constructor method","Class method","Static method"],answer:1,explanation:"__init__ is a constructor method called when an object is created."},{id:15,question:"What is a generator?",options:["Function that returns iterator","Class","Module","Decorator"],answer:0,explanation:"A generator is a function that returns an iterator using yield instead of return."},{id:16,question:"What is the difference between '==' and 'is'?",options:["No difference","== compares values, is compares identity","is compares values","== is faster"],answer:1,explanation:"== checks if values are equal, while 'is' checks if two variables point to the same object."},{id:17,question:"What is a dictionary?",options:["Ordered collection","Key-value pair collection","Array","Tuple"],answer:1,explanation:"A dictionary is an unordered collection of key-value pairs."},{id:18,question:"What is exception handling?",options:["Error prevention","Managing runtime errors","Code optimization","Debugging"],answer:1,explanation:"Exception handling manages runtime errors using try-except blocks."},{id:19,question:"What is a module?",options:["Function","File containing Python code","Class","Variable"],answer:1,explanation:"A module is a file containing Python definitions and statements."},{id:20,question:"What is inheritance?",options:["Variable scope","Class deriving from another class","Function calling","Module import"],answer:1,explanation:"Inheritance allows a class to inherit attributes and methods from another class."},{id:21,question:"What is polymorphism?",options:["Multiple inheritance","Same interface for different data types","Function overloading","Class method"],answer:1,explanation:"Polymorphism allows using a single interface to represent different data types."},{id:22,question:"What is encapsulation?",options:["Data hiding","Bundling data and methods","Inheritance","Polymorphism"],answer:1,explanation:"Encapsulation bundles data and methods that operate on that data within a single unit."},{id:23,question:"What is a set?",options:["Ordered collection","Unordered collection of unique elements","List","Dictionary"],answer:1,explanation:"A set is an unordered collection of unique elements."},{id:24,question:"What is the purpose of 'self'?",options:["Global variable","Reference to current instance","Class variable","Module"],answer:1,explanation:"'self' represents the instance of the class and is used to access instance variables."},{id:25,question:"What is a class method?",options:["Instance method","Method bound to class not instance","Static method","Constructor"],answer:1,explanation:"A class method is bound to the class and receives the class as the first argument."},{id:26,question:"What is a static method?",options:["Instance method","Method that doesn't access instance or class","Class method","Constructor"],answer:1,explanation:"A static method doesn't receive an implicit first argument and doesn't access instance or class state."},{id:27,question:"What is the purpose of 'pass'?",options:["Skip iteration","Null operation placeholder","Return None","Break loop"],answer:1,explanation:"'pass' is a null operation used as a placeholder where syntactically required."},{id:28,question:"What is the difference between append() and extend()?",options:["No difference","append adds element, extend adds iterable","extend is faster","append is deprecated"],answer:1,explanation:"append() adds a single element, while extend() adds all elements from an iterable."},{id:29,question:"What is a virtual environment?",options:["Cloud environment","Isolated Python environment","Virtual machine","IDE"],answer:1,explanation:"A virtual environment is an isolated Python environment with its own dependencies."},{id:30,question:"What is pip?",options:["Python interpreter","Package installer","IDE","Debugger"],answer:1,explanation:"pip is the package installer for Python used to install and manage packages."}],java:[{id:1,question:"What is the size of int in Java?",options:["16 bit","32 bit","64 bit","Platform dependent"],answer:1,explanation:"The int data type in Java is always a 32-bit signed two's complement integer."},{id:2,question:"Which feature is NOT supported in Java?",options:["Overloading","Overriding","Pointers","Interfaces"],answer:2,explanation:"Java does not support explicit pointers to avoid direct memory manipulation and enhance security."},{id:3,question:"What is the parent class of all classes in Java?",options:["String","Object","Class","System"],answer:1,explanation:"The Object class is the root of the class hierarchy. Every class has Object as a superclass."},{id:4,question:"Which keyword is used to inherit a class?",options:["implements","inherits","extends","super"],answer:2,explanation:"The 'extends' keyword is used to inherit from a class in Java."},{id:5,question:"What is a 'final' variable?",options:["Variable that is constant","Variable that can be changed","Global variable","Static variable"],answer:0,explanation:"A final variable cannot be reassigned once initialized."},{id:6,question:"What is JDK?",options:["Java Development Kit","Java Developer Kernel","Java Debug Key","Java Data Kit"],answer:0,explanation:"JDK (Java Development Kit) is a software development environment used for developing Java applications."},{id:7,question:"What is the difference between ArrayList and LinkedList?",options:["ArrayList is faster for manipulation","LinkedList is faster for retrieval","ArrayList uses dynamic array, LinkedList uses doubly linked list","No difference"],answer:2,explanation:"ArrayList is backed by a dynamic array, while LinkedList is backed by a doubly linked list."},{id:8,question:"Which exception is checked?",options:["NullPointerException","ArrayIndexOutOfBoundsException","IOException","ArithmeticException"],answer:2,explanation:"IOException is a checked exception, meaning it must be handled or declared in the method signature."},{id:9,question:"What is method overriding?",options:["Same method name, different parameters","Same method name and parameters in subclass","Static methods","Constructors"],answer:1,explanation:"Method overriding occurs when a subclass provides a specific implementation of a method already defined in its superclass."},{id:10,question:"What is the purpose of Garbage Collection?",options:["Delete files","Free up unused memory","Clean code","Compile code"],answer:1,explanation:"Garbage Collection automatically reclaims memory occupied by objects that are no longer reachable."},{id:11,question:"What is method overloading?",options:["Same method name, different parameters","Overriding parent method","Multiple classes","Interface implementation"],answer:0,explanation:"Method overloading allows multiple methods with the same name but different parameters."},{id:12,question:"What is method overriding?",options:["Same method in different classes","Subclass redefining parent method","Method overloading","Interface method"],answer:1,explanation:"Method overriding occurs when a subclass provides a specific implementation of a method already defined in its parent class."},{id:13,question:"What is an abstract class?",options:["Final class","Class that cannot be instantiated","Interface","Concrete class"],answer:1,explanation:"An abstract class cannot be instantiated and may contain abstract methods without implementation."},{id:14,question:"What is an interface?",options:["Class","Contract defining methods","Abstract class","Package"],answer:1,explanation:"An interface is a contract that defines methods that implementing classes must provide."},{id:15,question:"What is the difference between == and equals()?",options:["No difference","== compares references, equals() compares content","equals() is faster","== is deprecated"],answer:1,explanation:"== compares object references while equals() compares object content."},{id:16,question:"What is a constructor?",options:["Method","Special method to initialize objects","Destructor","Interface"],answer:1,explanation:"A constructor is a special method called when an object is instantiated."},{id:17,question:"What is the final keyword?",options:["Last variable","Prevents modification/inheritance","First keyword","Loop keyword"],answer:1,explanation:"The final keyword prevents modification of variables, methods, or classes."},{id:18,question:"What is the static keyword?",options:["Instance member","Class-level member","Local variable","Parameter"],answer:1,explanation:"Static members belong to the class rather than instances of the class."},{id:19,question:"What is exception handling?",options:["Error prevention","Managing runtime errors with try-catch","Code optimization","Debugging"],answer:1,explanation:"Exception handling manages runtime errors using try-catch-finally blocks."},{id:20,question:"What is a package?",options:["Class","Namespace for organizing classes","Method","Variable"],answer:1,explanation:"A package is a namespace that organizes related classes and interfaces."},{id:21,question:"What is polymorphism?",options:["Multiple inheritance","One interface, multiple implementations","Method overloading","Class hierarchy"],answer:1,explanation:"Polymorphism allows objects to be treated as instances of their parent class."},{id:22,question:"What is encapsulation?",options:["Data hiding","Bundling data and methods","Inheritance","Polymorphism"],answer:1,explanation:"Encapsulation bundles data and methods that operate on that data within a single unit."},{id:23,question:"What is the this keyword?",options:["Parent reference","Current object reference","Static reference","Class reference"],answer:1,explanation:"'this' refers to the current object instance."},{id:24,question:"What is the super keyword?",options:["Current object","Parent class reference","Static reference","Interface reference"],answer:1,explanation:"'super' refers to the parent class and is used to access parent class members."},{id:25,question:"What is a thread?",options:["Process","Lightweight subprocess","Class","Method"],answer:1,explanation:"A thread is a lightweight subprocess that allows concurrent execution."},{id:26,question:"What is synchronization?",options:["Async programming","Controlling access to shared resources","Thread creation","Method calling"],answer:1,explanation:"Synchronization controls access to shared resources in multithreaded programs."},{id:27,question:"What is a collection?",options:["Array","Framework for storing and manipulating groups of objects","Class","Interface"],answer:1,explanation:"The Collections Framework provides interfaces and classes for storing and manipulating groups of objects."},{id:28,question:"What is the difference between ArrayList and LinkedList?",options:["No difference","ArrayList uses array, LinkedList uses doubly-linked list","LinkedList is faster","ArrayList is deprecated"],answer:1,explanation:"ArrayList is backed by an array while LinkedList uses a doubly-linked list structure."},{id:29,question:"What is a HashMap?",options:["List","Key-value pair collection","Set","Queue"],answer:1,explanation:"HashMap stores key-value pairs and provides fast lookup by key."},{id:30,question:"What is the difference between String and StringBuilder?",options:["No difference","String is immutable, StringBuilder is mutable","StringBuilder is slower","String is deprecated"],answer:1,explanation:"String is immutable while StringBuilder is mutable and more efficient for string manipulation."}],cpp:[{id:1,question:" What is a pointer?",options:["Value type","Variable storing memory address","Reference type","Class"],answer:1,explanation:"A pointer is a variable that holds the memory address of another variable."},{id:2,question:"Which operator is used to access members of a structure through a pointer?",options:[".","->","*","&"],answer:1,explanation:"The arrow operator (->) is used to access structure members via a pointer."},{id:3,question:"What is a destructor?",options:["Function to create object","Function to delete object","Function called when object goes out of scope","None"],answer:2,explanation:"A destructor is a special member function called automatically when an object is destroyed."},{id:4,question:"What is polymorphism?",options:["Compiling code","Many forms","Memory management","Error handling"],answer:1,explanation:"Polymorphism means 'many forms', allowing objects to be treated as instances of their parent class."},{id:5,question:"What is the difference between struct and class in C++?",options:["No difference","Struct members are public by default, class members private","Class is faster","Struct is deprecated"],answer:1,explanation:"The only difference is default access: struct members are public, class members are private."},{id:6,question:"What is a virtual function?",options:["Pure function","Function that can be overridden in derived class","Static function","Inline function"],answer:1,explanation:"A virtual function is a member function in the base class that can be overridden in a derived class."},{id:7,question:"What is the Standard Template Library (STL)?",options:["Compiler","Set of C++ template classes","Linker","Debugger"],answer:1,explanation:"STL provides a specialized set of classes for common data structures and algorithms (vectors, lists, maps, etc.)."},{id:8,question:"What is 'friend' function?",options:["Member function","Function that can access private members of a class","Global function","Main function"],answer:1,explanation:"A friend function is a non-member function that has access to the private and protected members of a class."},{id:9,question:"What is 'cin'?",options:["Output stream","Input stream","File stream","Error stream"],answer:1,explanation:"'cin' is the standard input stream object in C++."},{id:10,question:"What is memory leak?",options:["Memory corruption","Allocated memory not freed","Low memory","Buffer overflow"],answer:1,explanation:"A memory leak occurs when dynamically allocated memory is not deallocated after use."},{id:11,question:"What is a virtual function?",options:["Static function","Function that can be overridden in derived class","Inline function","Friend function"],answer:1,explanation:"A virtual function allows derived classes to override the function for polymorphism."},{id:12,question:"What is a pure virtual function?",options:["Virtual function","Virtual function with no implementation","Static function","Inline function"],answer:1,explanation:"A pure virtual function has no implementation and makes the class abstract."},{id:13,question:"What is an abstract class?",options:["Class with all pure virtual functions","Class with at least one pure virtual function","Final class","Static class"],answer:1,explanation:"An abstract class contains at least one pure virtual function and cannot be instantiated."},{id:14,question:"What is the difference between struct and class?",options:["No difference","Default access: struct is public, class is private","struct is faster","class is deprecated"],answer:1,explanation:"In C++, struct members are public by default while class members are private by default."},{id:15,question:"What is a friend function?",options:["Member function","Non-member function with access to private members","Virtual function","Static function"],answer:1,explanation:"A friend function can access private and protected members of a class."},{id:16,question:"What is operator overloading?",options:["Overloading functions","Defining custom behavior for operators","Multiple operators","Operator precedence"],answer:1,explanation:"Operator overloading allows defining custom behavior for operators with user-defined types."},{id:17,question:"What is a template?",options:["Class","Generic programming feature","Function","Namespace"],answer:1,explanation:"Templates enable generic programming by allowing functions and classes to work with any data type."},{id:18,question:"What is STL?",options:["Standard Template Library","Static Type Library","System Template Library","String Template Library"],answer:0,explanation:"STL provides generic classes and functions including containers, algorithms, and iterators."},{id:19,question:"What is a namespace?",options:["Class","Scope for identifiers","Function","Variable"],answer:1,explanation:"A namespace provides a scope for identifiers to avoid name conflicts."},{id:20,question:"What is exception handling?",options:["Error prevention","Managing runtime errors with try-catch","Code optimization","Debugging"],answer:1,explanation:"Exception handling manages runtime errors using try-catch-throw blocks."},{id:21,question:"What is RAII?",options:["Design pattern","Resource Acquisition Is Initialization","Algorithm","Data structure"],answer:1,explanation:"RAII ties resource lifetime to object lifetime, ensuring proper cleanup."},{id:22,question:"What is a smart pointer?",options:["Raw pointer","Pointer that manages memory automatically","Fast pointer","Static pointer"],answer:1,explanation:"Smart pointers (unique_ptr, shared_ptr) automatically manage memory to prevent leaks."},{id:23,question:"What is the difference between new and malloc?",options:["No difference","new calls constructor, malloc doesn't","malloc is faster","new is deprecated"],answer:1,explanation:"new allocates memory and calls constructor, while malloc only allocates memory."},{id:24,question:"What is a lambda function?",options:["Named function","Anonymous function","Virtual function","Static function"],answer:1,explanation:"A lambda is an anonymous function that can capture variables from its scope."},{id:25,question:"What is move semantics?",options:["Copying objects","Transferring resources without copying","Moving pointers","Object relocation"],answer:1,explanation:"Move semantics allows transferring resources from one object to another without copying."},{id:26,question:"What is a copy constructor?",options:["Default constructor","Constructor that creates copy of object","Destructor","Assignment operator"],answer:1,explanation:"A copy constructor creates a new object as a copy of an existing object."},{id:27,question:"What is the rule of three?",options:["Three constructors","Destructor, copy constructor, copy assignment","Three functions","Three classes"],answer:1,explanation:"If a class defines destructor, copy constructor, or copy assignment, it should define all three."},{id:28,question:"What is const correctness?",options:["Constant variables","Proper use of const keyword","Compiler optimization","Code style"],answer:1,explanation:"Const correctness ensures const keyword is used properly to prevent unintended modifications."},{id:29,question:"What is multiple inheritance?",options:["One base class","Class inheriting from multiple base classes","Many derived classes","Interface implementation"],answer:1,explanation:"Multiple inheritance allows a class to inherit from more than one base class."},{id:30,question:"What is the diamond problem?",options:["Memory issue","Ambiguity in multiple inheritance","Pointer problem","Template issue"],answer:1,explanation:"The diamond problem occurs when a class inherits from two classes that have a common base class."}],cloud:[{id:1,question:"What does IaaS stand for?",options:["Infrastructure as a Service","Internet as a Service","Image as a Service","Integration as a Service"],answer:0,explanation:"IaaS (Infrastructure as a Service) provides virtualized computing resources over the internet."},{id:2,question:"Which of these is NOT a cloud provider?",options:["AWS","Azure","GCP","Apache"],answer:3,explanation:"Apache is a software foundation, while AWS, Azure, and GCP are cloud service providers."},{id:3,question:"What is SaaS?",options:["Storage as a Service","Software as a Service","Security as a Service","System as a Service"],answer:1,explanation:"SaaS delivers software applications over the internet, on demand, and typically on a subscription basis."},{id:4,question:"What is 'Elasticity' in cloud computing?",options:["Rubber material","Ability to scale resources up and down based on demand","Flexible pricing","Network speed"],answer:1,explanation:"Elasticity is the ability to automatically provision and de-provision resources to match workload demand."},{id:5,question:"What is a Region in AWS/Azure?",options:["Data center","Geographic area with multiple Availability Zones","City","Country"],answer:1,explanation:"A Region is a physical location around the world which clusters data centers."},{id:6,question:"What is Serverless computing?",options:["No servers involved","Provider manages server allocation","Local hosting","Offline computing"],answer:1,explanation:"In Serverless (like AWS Lambda), the cloud provider automatically manages the infrastructure."},{id:7,question:"What is a Virtual Private Cloud (VPC)?",options:["Public internet","Isolated network within the cloud","VPN","Private computer"],answer:1,explanation:"VPC lets you provision a logically isolated section of the cloud where you can launch resources."},{id:8,question:"What is the primary benefit of Cloud Computing?",options:["Higher cost","Fixed resources","Scalability and on-demand resources","Slower performance"],answer:2,explanation:"Cloud computing offers scalability, allowing users to increase or decrease resources as needed."},{id:9,question:"What is PaaS?",options:["Platform as a Service","Protocol as a Service","Process as a Service","Payment as a Service"],answer:0,explanation:"PaaS provides a platform allowing customers to develop, run, and manage applications without building infrastructure."},{id:10,question:"What represents 'S3' in AWS?",options:["Simple Storage Service","Super Speed Storage","Secure Storage System","Server Side Storage"],answer:0,explanation:"Amazon S3 (Simple Storage Service) provides object storage through a web service interface."},{id:11,question:"What cloud computing service is commonly used to develop apps and deploy functions without maintaining a server?",options:["Delta as a service","Function as a Service","Serverless as a service","Lambda as a service"],answer:1,explanation:"Function as a Service (FaaS) allows developers to write and deploy code that runs in response to events without provisioning or managing servers."},{id:12,question:"From the standpoint of a ____, it makes no sense to offer non-standard machine instances to customers.",options:["PaaS","CaaS","IaaS","AaaS"],answer:2,explanation:"Infrastructure as a Service (IaaS) providers rely on economies of scale and automation. Offering standardized instance types allows them to manage their massive hardware fleets efficiently."},{id:13,question:"Azure Storage plays the same role in Azure that ____ plays in Amazon Web Services.",options:["S3","EC2","EC3","All of the mentioned options"],answer:0,explanation:"Azure Blob Storage is Microsoft Azure's object storage solution, which is the direct equivalent of Amazon S3 (Simple Storage Service)."},{id:14,question:"In ____, the virtual machine simulates hardware, so it can be independent of the underlying system hardware.",options:["Full virtualization","Emulation","None of the mentioned options","Paravirtualization"],answer:0,explanation:"In full virtualization, the hypervisor simulates the complete hardware environment for the guest OS."},{id:15,question:"Which of these types of application tasks make sense to run in a serverless environment?",options:["Big data, analytics-heavy executions","Rapid, reactive and event-based executions","Monte Carlo simulations","None of the above"],answer:1,explanation:"Serverless architectures (like AWS Lambda) are designed for short-lived, event-driven tasks."},{id:16,question:"Which of the following is the most important area of concern in cloud computing?",options:["All of the mentioned options","Security","Scalability","Storage"],answer:1,explanation:"While all factors are important, Security is consistently cited as the primary concern for organizations moving to the cloud."},{id:17,question:"What exactly constitutes the backbone of the cloud?",options:["Regions and availability zones","AWS network that connects various datacenters, internet, AWS regions, private offices etc.","AWS support team","Core services like compute, storage and RDS"],answer:1,explanation:"The physical network infrastructure that interconnects data centers, availability zones, and regions is the fundamental backbone."},{id:18,question:"When building data center clouds, what are the two most important network performance characteristics?",options:["Network routing information loss","Network security","Network buffer overflow rate","Network latency and packet loss rate"],answer:3,explanation:"Latency (delay) and packet loss are critical metrics that directly impact the performance and reliability of cloud applications."},{id:19,question:"Which AWS deployment model allows you to run applications on the cloud while maintaining some components on-premises?",options:["IaaS deployment","PaaS deployment","Hybrid deployment","On-premises deployment"],answer:2,explanation:"A Hybrid deployment connects cloud-based resources with on-premises infrastructure."},{id:20,question:"Which of the following is an online backup and storage system?",options:["Amazon Simple Storage System","Amazon Simple Notification Service","Amazon Simple Queue Service","Amazon Elastic Compute Cloud"],answer:0,explanation:"Amazon S3 (Simple Storage Service) is designed for online data storage and backup."},{id:21,question:"Which of the following is the simplest unmanaged cloud storage device?",options:["antivirus utility","online image utility","None of the mentioned options","file transfer utility"],answer:3,explanation:"A simple file transfer utility (like FTP/SFTP tools) represents the most basic way to move data to storage."},{id:22,question:"Secure shell (SSH) network protocol is used for ____.",options:["secure data communication","remote command execution","all of the mentioned","remote command-line login"],answer:2,explanation:"SSH is a versatile protocol used for secure remote login, executing commands, and securing data communication."},{id:23,question:"Which approach is generally considered the easiest when beginning to adopt cloud computing?",options:["Trying it out in a testing environment","Trying it out at the beginning of a new project","Trying it out directly in production","Trying it out in staging"],answer:0,explanation:"Starting with a testing environment minimizes risk and allows teams to learn without affecting production systems."},{id:24,question:"Point out the wrong statement.",options:["Google uses hardware virtualization","Load balancing virtualizes systems by mapping logical to physical addresses","Multiple instances of Google applications run on different hosts","All of the mentioned options"],answer:0,explanation:"Historically, Google's infrastructure relied heavily on containerization rather than traditional hardware virtualization."},{id:25,question:"Which virtualization standard does WebSphere Application Server Hypervisor Edition use?",options:["Open Virtual Appliance","Open Virtualization Format","Interoperable Image Format","Common Image Format"],answer:1,explanation:"OVF (Open Virtualization Format) is a standard for packaging and distributing virtual appliances."},{id:26,question:"Which type of virtualization is found in a hypervisor such as Microsoft's Hyper-V?",options:["None of the mentioned above","Paravirtualization","Emulation","Full virtualization"],answer:3,explanation:"Hyper-V is a Type 1 hypervisor that supports full virtualization."},{id:27,question:"Which feature makes cloud-based storage systems highly reliable?",options:["Redundant name servers","Replication","Redundant networks","All of the mentioned options"],answer:1,explanation:"Replication involves storing multiple copies of data across different physical nodes or locations."},{id:28,question:"Scaling ____ indefinitely leads you to an architecture with a large number of servers.",options:["out","all of the mentioned options","vertically","in"],answer:0,explanation:"Scaling out (horizontal scaling) involves adding more servers to the pool to handle increased load."},{id:29,question:"Which factor can be considered to determine WAN Capacity?",options:["Network interconnect technologies","Overall system traffic","Routing and switching protocols","All of the mentioned options"],answer:3,explanation:"Determining WAN capacity requires considering traffic load, interconnection technologies, and routing protocols."},{id:30,question:"Which service creates and manages virtual network interfaces?",options:["VMware vCompute","VMware vNetwork","Application services","VMware vStorage"],answer:1,explanation:"VMware vNetwork provides the virtualization of networking components, including virtual network interfaces."},{id:31,question:"Which of the following is NOT a cloud service provider?",options:["AWS","GCP","IBM Cloud","Microsoft Gsuite"],answer:3,explanation:"Microsoft G Suite (now Google Workspace) is a SaaS productivity suite, not a Cloud Service Provider platform."},{id:32,question:"Which cloud deployment model does not provide the highest level of control over infrastructure?",options:["Hybrid cloud","Public cloud","Community cloud","Private cloud"],answer:1,explanation:"In a Public Cloud, resources are shared among multiple tenants and managed by the provider."},{id:33,question:"Which statement is true?",options:["Hybrid cloud offers the most control","Private cloud offers the most control over infrastructure","Public cloud offers the most control","Community cloud offers the most control"],answer:1,explanation:"Private clouds are dedicated to a single organization, providing the highest level of control."},{id:34,question:"Which form of virtualization allows multiple operating systems to run on a single physical machine?",options:["Application virtualization","Storage virtualization","Server virtualization","Network virtualization"],answer:2,explanation:"Server virtualization partitions a physical server into multiple virtual servers."},{id:35,question:"Which is a characteristic of the backbone of the cloud?",options:["It is responsible for user authentication","It provides end-users with local storage","It provides high-speed connectivity between data centers","It relies solely on physical hardware"],answer:2,explanation:"The cloud backbone is the high-capacity network infrastructure that connects data centers."},{id:36,question:"What are some common use cases for IaaS?",options:["Sales forecasting (SaaS)","Email management (SaaS)","Web hosting, application development, and disaster recovery","Graphic design (SaaS)"],answer:2,explanation:"IaaS provides the raw infrastructure needed for hosting websites, building applications, and disaster recovery."},{id:37,question:"Microsoft 365 is an example of which cloud service model?",options:["Software as a Service","Infrastructure as a Service","Platform as a Service","None"],answer:0,explanation:"Microsoft 365 provides productivity applications over the internet, which is the definition of SaaS."},{id:38,question:"A company wants to host its internal HR system on AWS but not manage infrastructure. Which model fits?",options:["Software as a Service (SaaS)","None","Platform as a Service (PaaS)","Infrastructure as a Service (IaaS)"],answer:2,explanation:"If hosting a custom application but avoiding infrastructure management, PaaS is the correct model."},{id:39,question:"A company wants to build a web application without managing the OS or infrastructure. Which model fits?",options:["None","Platform as a Service (PaaS)","Software as a Service (SaaS)","Infrastructure as a Service (IaaS)"],answer:1,explanation:"PaaS is designed for building and deploying applications without managing underlying servers."},{id:40,question:"Which cloud service model allows users to access software applications over the internet?",options:["PaaS","CaaS","IaaS","SaaS"],answer:3,explanation:"SaaS delivers software applications over the internet, usually via a web browser."},{id:41,question:"What is used to logically assign and separate physical resources like memory and CPU?",options:["A load balancer","A hypervisor","A blade chassis","Bios"],answer:1,explanation:"A hypervisor is the software layer that manages the allocation of physical resources to virtual machines."},{id:42,question:"Which is another name for the system virtual machine?",options:["software virtual machine","none of the mentioned options","hardware virtual machine","real machine"],answer:2,explanation:"A system virtual machine provides a complete system platform, often called a hardware virtual machine."},{id:43,question:"Which is the most widely used technique for abstraction?",options:["None of the mentioned options","Load scaling","Load scheduling","Load balancing"],answer:0,explanation:"The most widely used technique for abstraction in cloud computing is 'Virtualization'."},{id:44,question:"Which is used to evaluate your cloud application's network performance?",options:["All of the mentioned options","Path Cloud","View Cloud","PathView Cloud"],answer:3,explanation:"PathView Cloud is a tool used for network performance management and evaluation in cloud environments."},{id:45,question:"Which standard TCP port is assigned for contacting SSH servers?",options:["port 24","port 23","port 21","port 22"],answer:3,explanation:"Port 22 is the standard default TCP port for the Secure Shell (SSH) protocol."},{id:46,question:"Which operating system supports operating system virtualization?",options:["Windows NT","Compliance","Sun Solaris","Windows XP"],answer:2,explanation:"Sun Solaris was a pioneer in OS-level virtualization with its 'Solaris Zones' technology."},{id:47,question:"Which provides system resource access to virtual machines?",options:["VMC","All of the mentioned","VNM","VMM"],answer:3,explanation:"VMM (Virtual Machine Monitor) is another name for a hypervisor."},{id:48,question:"Which types of virtualization are characteristic of cloud computing?",options:["CPU","Application","Storage","All of the mentioned options"],answer:3,explanation:"Cloud computing relies on the virtualization of all these resources: CPU, Storage, and Applications."},{id:49,question:"How many types of Cloud are there in Deployment Models?",options:["2","4","5","3"],answer:1,explanation:"There are 4 main cloud deployment models: Public, Private, Hybrid, and Community."},{id:50,question:"The ____ allows systems and services to be accessible by a group of organizations.",options:["public cloud","hybrid cloud","community cloud","private cloud"],answer:2,explanation:"A Community Cloud is shared by several organizations with shared concerns."},{id:51,question:"What is Docker primarily used for?",options:["Database management","Containerization","Web hosting","Email services"],answer:1,explanation:"Docker is a platform for developing, shipping, and running applications in containers."},{id:52,question:"Which AWS service is used for content delivery?",options:["CloudFront","Route 53","S3","EC2"],answer:0,explanation:"Amazon CloudFront is a fast content delivery network (CDN) service."},{id:53,question:"What does CDN stand for?",options:["Central Data Network","Content Delivery Network","Cloud Distribution Node","Centralized Domain Name"],answer:1,explanation:"CDN is a geographically distributed network of servers that deliver content to users."},{id:54,question:"Which is NOT a benefit of cloud computing?",options:["Scalability","Cost efficiency","Complete control over hardware","Accessibility"],answer:2,explanation:"In cloud computing, you don't have complete control over the physical hardware as it's managed by the provider."},{id:55,question:"What is Kubernetes?",options:["A programming language","A container orchestration platform","A database","An operating system"],answer:1,explanation:"Kubernetes is an open-source platform for automating deployment, scaling, and management of containerized applications."},{id:56,question:"Which cloud service model gives you the most control?",options:["SaaS","PaaS","IaaS","FaaS"],answer:2,explanation:"IaaS provides the most control as you manage the OS, middleware, runtime, and applications."},{id:57,question:"What is auto-scaling in cloud computing?",options:["Manual resource adjustment","Automatic adjustment of resources based on demand","Fixed resource allocation","None of the above"],answer:1,explanation:"Auto-scaling automatically adjusts computing resources to maintain performance and minimize costs."},{id:58,question:"Which protocol is commonly used for secure data transfer in cloud?",options:["HTTP","FTP","HTTPS","SMTP"],answer:2,explanation:"HTTPS (HTTP Secure) uses SSL/TLS encryption for secure data transfer."},{id:59,question:"What is a load balancer?",options:["A storage device","Distributes network traffic across multiple servers","A security tool","A backup system"],answer:1,explanation:"A load balancer distributes incoming network traffic across multiple servers to ensure reliability and performance."},{id:60,question:"Which AWS service is used for relational databases?",options:["DynamoDB","RDS","S3","Lambda"],answer:1,explanation:"Amazon RDS (Relational Database Service) makes it easy to set up and operate relational databases."},{id:61,question:"What is multi-tenancy in cloud computing?",options:["Multiple users sharing the same infrastructure","One user per server","Multiple servers per user","None of the above"],answer:0,explanation:"Multi-tenancy allows multiple customers to share the same application and infrastructure while keeping their data isolated."},{id:62,question:"Which is a NoSQL database service in AWS?",options:["RDS","DynamoDB","Aurora","Redshift"],answer:1,explanation:"Amazon DynamoDB is a fully managed NoSQL database service."},{id:63,question:"What is the main purpose of AWS Lambda?",options:["Storage","Serverless compute","Networking","Database management"],answer:1,explanation:"AWS Lambda lets you run code without provisioning or managing servers."},{id:64,question:"What does VPN stand for?",options:["Virtual Private Network","Very Private Network","Virtual Public Network","Verified Private Network"],answer:0,explanation:"VPN creates a secure, encrypted connection over a less secure network."},{id:65,question:"Which cloud deployment model is most cost-effective for startups?",options:["Private cloud","Public cloud","Hybrid cloud","Community cloud"],answer:1,explanation:"Public cloud is typically most cost-effective as it requires no upfront infrastructure investment."},{id:66,question:"What is object storage?",options:["Block-based storage","File-based storage","Data stored as objects with metadata","Temporary storage"],answer:2,explanation:"Object storage manages data as objects, each containing data, metadata, and a unique identifier."},{id:67,question:"Which AWS service provides DNS services?",options:["CloudFront","Route 53","VPC","Direct Connect"],answer:1,explanation:"Amazon Route 53 is a scalable Domain Name System (DNS) web service."},{id:68,question:"What is a snapshot in cloud computing?",options:["A photo","A point-in-time copy of data","A security feature","A network tool"],answer:1,explanation:"A snapshot is a point-in-time copy of your data, used for backup and recovery."},{id:69,question:"Which is NOT a cloud storage type?",options:["Object storage","Block storage","File storage","Memory storage"],answer:3,explanation:"Memory storage is not a primary cloud storage type; the main types are object, block, and file storage."},{id:70,question:"What is the purpose of IAM in AWS?",options:["Storage management","Identity and Access Management","Network configuration","Database optimization"],answer:1,explanation:"IAM enables you to manage access to AWS services and resources securely."},{id:71,question:"What is edge computing?",options:["Computing at data centers","Computing closer to data sources","Cloud computing","Mainframe computing"],answer:1,explanation:"Edge computing processes data near the edge of the network, closer to where it's generated."},{id:72,question:"Which AWS service is used for message queuing?",options:["SNS","SQS","SES","S3"],answer:1,explanation:"Amazon SQS (Simple Queue Service) is a fully managed message queuing service."},{id:73,question:"What is cloud bursting?",options:["Cloud failure","Scaling to public cloud when private cloud capacity is exceeded","Data breach","Network congestion"],answer:1,explanation:"Cloud bursting allows applications to run in private cloud and burst to public cloud when demand spikes."},{id:74,question:"Which is a container registry service in AWS?",options:["ECS","ECR","EKS","Lambda"],answer:1,explanation:"Amazon ECR (Elastic Container Registry) is a fully managed Docker container registry."},{id:75,question:"What is the shared responsibility model in cloud?",options:["All security is provider's responsibility","All security is customer's responsibility","Security responsibilities are shared between provider and customer","No one is responsible"],answer:2,explanation:"The shared responsibility model defines which security tasks are handled by the provider and which by the customer."},{id:76,question:"Which AWS service provides data warehousing?",options:["RDS","DynamoDB","Redshift","Aurora"],answer:2,explanation:"Amazon Redshift is a fast, scalable data warehouse service."},{id:77,question:"What is serverless architecture?",options:["No servers exist","Servers are managed by cloud provider","Local servers only","Physical servers"],answer:1,explanation:"In serverless architecture, the cloud provider manages the server infrastructure automatically."},{id:78,question:"Which is a monitoring service in AWS?",options:["CloudWatch","CloudTrail","Config","Inspector"],answer:0,explanation:"Amazon CloudWatch monitors AWS resources and applications in real-time."},{id:79,question:"What is API Gateway used for?",options:["Storage","Creating and managing APIs","Database access","Email services"],answer:1,explanation:"API Gateway is a fully managed service for creating, publishing, and managing APIs."},{id:80,question:"Which cloud characteristic allows resources to be provisioned quickly?",options:["Broad network access","Rapid elasticity","Resource pooling","Measured service"],answer:1,explanation:"Rapid elasticity allows resources to be quickly scaled up or down based on demand."},{id:81,question:"What is CloudFormation in AWS?",options:["Monitoring tool","Infrastructure as Code service","Database service","Storage service"],answer:1,explanation:"AWS CloudFormation provides Infrastructure as Code to model and provision AWS resources."},{id:82,question:"Which protocol is used for object storage access?",options:["NFS","iSCSI","HTTP/HTTPS","SMB"],answer:2,explanation:"Object storage like S3 is accessed via HTTP/HTTPS protocols using REST APIs."},{id:83,question:"What is a microservice?",options:["A small server","An architectural style with small, independent services","A tiny application","A mini database"],answer:1,explanation:"Microservices architecture structures an application as a collection of loosely coupled services."},{id:84,question:"Which AWS service provides email sending capabilities?",options:["SNS","SQS","SES","SMS"],answer:2,explanation:"Amazon SES (Simple Email Service) is a cloud-based email sending service."},{id:85,question:"What is the purpose of CloudTrail in AWS?",options:["Monitoring resources","Logging API calls","Load balancing","Data storage"],answer:1,explanation:"AWS CloudTrail logs all API calls made in your AWS account for auditing and compliance."},{id:86,question:"Which is a managed Kubernetes service in AWS?",options:["ECS","ECR","EKS","Fargate"],answer:2,explanation:"Amazon EKS (Elastic Kubernetes Service) is a managed Kubernetes service."},{id:87,question:"What is cold storage in cloud?",options:["Refrigerated servers","Low-cost storage for infrequently accessed data","Fast storage","Temporary storage"],answer:1,explanation:"Cold storage (like S3 Glacier) is designed for long-term archival of infrequently accessed data."},{id:88,question:"Which AWS service provides machine learning capabilities?",options:["SageMaker","Lambda","EC2","S3"],answer:0,explanation:"Amazon SageMaker is a fully managed service for building, training, and deploying ML models."},{id:89,question:"What is a security group in AWS?",options:["User group","Virtual firewall","Storage group","Database cluster"],answer:1,explanation:"Security groups act as virtual firewalls controlling inbound and outbound traffic."},{id:90,question:"Which is NOT a pillar of AWS Well-Architected Framework?",options:["Security","Cost Optimization","Marketing","Performance Efficiency"],answer:2,explanation:"The five pillars are: Operational Excellence, Security, Reliability, Performance Efficiency, and Cost Optimization."},{id:91,question:"What is AWS Elastic Beanstalk?",options:["Database service","PaaS for deploying applications","Storage service","Monitoring tool"],answer:1,explanation:"Elastic Beanstalk is a PaaS that makes it easy to deploy and scale web applications."},{id:92,question:"Which storage class in S3 is cheapest for archival?",options:["Standard","Intelligent-Tiering","Glacier Deep Archive","One Zone-IA"],answer:2,explanation:"S3 Glacier Deep Archive is the lowest-cost storage class for long-term archival."},{id:93,question:"What is AWS Direct Connect?",options:["VPN service","Dedicated network connection to AWS","Load balancer","DNS service"],answer:1,explanation:"AWS Direct Connect provides a dedicated network connection from your premises to AWS."},{id:94,question:"Which service provides DDoS protection in AWS?",options:["WAF","Shield","GuardDuty","Inspector"],answer:1,explanation:"AWS Shield provides DDoS protection for applications running on AWS."},{id:95,question:"What is AWS Fargate?",options:["Database service","Serverless compute for containers","Storage service","Networking tool"],answer:1,explanation:"AWS Fargate is a serverless compute engine for containers."},{id:96,question:"Which AWS service is used for code deployment?",options:["CodeCommit","CodeBuild","CodeDeploy","CodePipeline"],answer:2,explanation:"AWS CodeDeploy automates code deployments to any instance."},{id:97,question:"What is AWS Cognito used for?",options:["Storage","User authentication and authorization","Monitoring","Networking"],answer:1,explanation:"Amazon Cognito provides user sign-up, sign-in, and access control."},{id:98,question:"Which is a graph database service in AWS?",options:["DynamoDB","RDS","Neptune","DocumentDB"],answer:2,explanation:"Amazon Neptune is a fast, reliable graph database service."},{id:99,question:"What is AWS Step Functions?",options:["Monitoring service","Workflow orchestration service","Database service","Storage service"],answer:1,explanation:"AWS Step Functions coordinates multiple AWS services into serverless workflows."},{id:100,question:"Which AWS service provides real-time data streaming?",options:["S3","Kinesis","Lambda","EC2"],answer:1,explanation:"Amazon Kinesis makes it easy to collect, process, and analyze real-time streaming data."},{id:101,question:"What is AWS Glue?",options:["Monitoring service","ETL service","Storage service","Compute service"],answer:1,explanation:"AWS Glue is a fully managed ETL (Extract, Transform, Load) service."},{id:102,question:"Which AWS service provides managed blockchain?",options:["Blockchain","Managed Blockchain","Neptune","QLDB"],answer:1,explanation:"Amazon Managed Blockchain is a fully managed service for creating and managing blockchain networks."},{id:103,question:"What is AWS Athena?",options:["Database service","Interactive query service for S3","Monitoring tool","Networking service"],answer:1,explanation:"Amazon Athena is an interactive query service that makes it easy to analyze data in S3 using SQL."},{id:104,question:"Which service provides managed Apache Kafka?",options:["Kinesis","MSK","SQS","SNS"],answer:1,explanation:"Amazon MSK (Managed Streaming for Apache Kafka) is a fully managed Apache Kafka service."},{id:105,question:"What is AWS Organizations used for?",options:["Managing multiple AWS accounts","User management","Resource tagging","Billing only"],answer:0,explanation:"AWS Organizations helps you centrally manage and govern multiple AWS accounts."},{id:106,question:"Which AWS service provides managed Redis?",options:["RDS","DynamoDB","ElastiCache","Neptune"],answer:2,explanation:"Amazon ElastiCache supports both Redis and Memcached as managed in-memory data stores."},{id:107,question:"What is AWS X-Ray used for?",options:["Security scanning","Application performance monitoring and debugging","Image processing","Data encryption"],answer:1,explanation:"AWS X-Ray helps developers analyze and debug distributed applications."},{id:108,question:"Which service provides managed Elasticsearch?",options:["CloudSearch","Elasticsearch Service","Athena","Glue"],answer:1,explanation:"Amazon Elasticsearch Service (now OpenSearch Service) is a managed Elasticsearch service."},{id:109,question:"What is AWS Secrets Manager?",options:["Encryption service","Service for storing and managing secrets","Monitoring tool","Backup service"],answer:1,explanation:"AWS Secrets Manager helps you protect secrets needed to access applications, services, and IT resources."},{id:110,question:"Which AWS service provides managed Apache Spark?",options:["Glue","EMR","Athena","Kinesis"],answer:1,explanation:"Amazon EMR (Elastic MapReduce) provides a managed Hadoop framework including Apache Spark."},{id:111,question:"What is AWS Transit Gateway?",options:["Load balancer","Network transit hub","Storage gateway","API gateway"],answer:1,explanation:"AWS Transit Gateway connects VPCs and on-premises networks through a central hub."},{id:112,question:"Which service provides managed MongoDB?",options:["RDS","DynamoDB","DocumentDB","Neptune"],answer:2,explanation:"Amazon DocumentDB is a managed MongoDB-compatible database service."},{id:113,question:"What is AWS App Runner?",options:["Testing service","Fully managed service for deploying containerized apps","Monitoring tool","Database service"],answer:1,explanation:"AWS App Runner is a fully managed service for deploying containerized web applications and APIs."},{id:114,question:"Which AWS service provides managed Apache Cassandra?",options:["DynamoDB","Keyspaces","RDS","DocumentDB"],answer:1,explanation:"Amazon Keyspaces is a scalable, managed Apache Cassandra-compatible database service."},{id:115,question:"What is AWS Backup?",options:["Storage service","Centralized backup service","Monitoring tool","Security service"],answer:1,explanation:"AWS Backup is a fully managed backup service that centralizes and automates data backup."},{id:116,question:"Which service provides managed time-series database?",options:["RDS","Timestream","DynamoDB","Aurora"],answer:1,explanation:"Amazon Timestream is a fast, scalable, managed time-series database service."},{id:117,question:"What is AWS DataSync?",options:["Database sync","Data transfer service","Backup service","Monitoring tool"],answer:1,explanation:"AWS DataSync is an online data transfer service that simplifies, automates, and accelerates moving data."},{id:118,question:"Which AWS service provides managed Apache Airflow?",options:["Step Functions","MWAA","Glue","Data Pipeline"],answer:1,explanation:"Amazon MWAA (Managed Workflows for Apache Airflow) is a managed orchestration service."},{id:119,question:"What is AWS Lake Formation?",options:["Database service","Service for building data lakes","Storage service","Analytics tool"],answer:1,explanation:"AWS Lake Formation makes it easy to set up a secure data lake."},{id:120,question:"Which service provides managed message broker?",options:["SQS","SNS","Amazon MQ","Kinesis"],answer:2,explanation:"Amazon MQ is a managed message broker service for Apache ActiveMQ and RabbitMQ."},{id:121,question:"What is AWS Amplify?",options:["Database service","Platform for building mobile and web apps","Monitoring tool","Storage service"],answer:1,explanation:"AWS Amplify is a set of tools and services for building scalable mobile and web applications."},{id:122,question:"Which AWS service provides managed GraphQL?",options:["API Gateway","AppSync","Lambda","Amplify"],answer:1,explanation:"AWS AppSync is a fully managed service for building GraphQL APIs."},{id:123,question:"What is AWS Outposts?",options:["Cloud service","Fully managed service extending AWS to on-premises","Monitoring tool","Security service"],answer:1,explanation:"AWS Outposts brings native AWS services, infrastructure, and operating models to on-premises facilities."},{id:124,question:"Which service provides managed ledger database?",options:["RDS","QLDB","DynamoDB","Neptune"],answer:1,explanation:"Amazon QLDB (Quantum Ledger Database) is a fully managed ledger database."},{id:125,question:"What is AWS Ground Station?",options:["Data center","Satellite data service","Networking service","Storage service"],answer:1,explanation:"AWS Ground Station is a fully managed service for controlling satellite communications."},{id:126,question:"Which AWS service provides managed Apache Flink?",options:["Kinesis Data Analytics","EMR","Glue","Athena"],answer:0,explanation:"Amazon Kinesis Data Analytics supports Apache Flink for stream processing."},{id:127,question:"What is AWS Wavelength?",options:["Monitoring service","5G edge computing service","Storage service","Database service"],answer:1,explanation:"AWS Wavelength embeds AWS compute and storage services within 5G networks."},{id:128,question:"Which service provides managed container orchestration?",options:["EC2","ECS","Lambda","Batch"],answer:1,explanation:"Amazon ECS (Elastic Container Service) is a fully managed container orchestration service."},{id:129,question:"What is AWS Local Zones?",options:["Availability zones","Infrastructure deployments closer to end users","Data centers","Edge locations"],answer:1,explanation:"AWS Local Zones place compute, storage, and database services closer to large population centers."},{id:130,question:"Which AWS service provides managed Apache Hive?",options:["Athena","EMR","Glue","Redshift"],answer:1,explanation:"Amazon EMR supports Apache Hive for data warehousing and SQL-like queries."},{id:131,question:"What is AWS Proton?",options:["Database service","Service for managing infrastructure for container and serverless apps","Monitoring tool","Security service"],answer:1,explanation:"AWS Proton is a deployment service for container and serverless applications."},{id:132,question:"Which service provides managed in-memory database?",options:["RDS","ElastiCache","DynamoDB","Aurora"],answer:1,explanation:"Amazon ElastiCache provides managed in-memory data stores (Redis and Memcached)."},{id:133,question:"What is AWS Snow Family?",options:["Cloud services","Physical devices for data migration","Monitoring tools","Security services"],answer:1,explanation:"AWS Snow Family includes physical devices (Snowcone, Snowball, Snowmobile) for data migration."},{id:134,question:"Which AWS service provides managed IoT?",options:["IoT Core","Greengrass","IoT Analytics","All of the above"],answer:3,explanation:"AWS offers multiple IoT services including IoT Core, Greengrass, and IoT Analytics."},{id:135,question:"What is AWS Batch?",options:["Database service","Managed batch processing service","Storage service","Networking service"],answer:1,explanation:"AWS Batch enables developers to run batch computing workloads on AWS."},{id:136,question:"Which service provides managed desktop virtualization?",options:["WorkSpaces","AppStream","EC2","Lightsail"],answer:0,explanation:"Amazon WorkSpaces is a managed, secure Desktop-as-a-Service (DaaS) solution."},{id:137,question:"What is AWS AppStream?",options:["Database service","Application streaming service","Monitoring tool","Storage service"],answer:1,explanation:"Amazon AppStream 2.0 is a fully managed application streaming service."},{id:138,question:"Which AWS service provides managed VPN?",options:["Direct Connect","VPN Gateway","Transit Gateway","PrivateLink"],answer:1,explanation:"AWS VPN Gateway enables you to establish secure VPN connections."},{id:139,question:"What is AWS Lightsail?",options:["Monitoring service","Simplified VPS service","Database service","Storage service"],answer:1,explanation:"Amazon Lightsail is an easy-to-use virtual private server (VPS) service."},{id:140,question:"Which service provides managed game server hosting?",options:["EC2","GameLift","Lightsail","Batch"],answer:1,explanation:"Amazon GameLift is a managed service for deploying and scaling dedicated game servers."},{id:141,question:"What is AWS Systems Manager?",options:["Database manager","Unified interface for managing AWS resources","Storage manager","Network manager"],answer:1,explanation:"AWS Systems Manager provides operational insights and takes action on AWS resources."},{id:142,question:"Which AWS service provides managed video transcoding?",options:["Kinesis Video Streams","Elastic Transcoder","MediaConvert","Both B and C"],answer:3,explanation:"Both Elastic Transcoder and MediaConvert provide video transcoding services."},{id:143,question:"What is AWS Service Catalog?",options:["Product catalog","Service for creating and managing catalogs of IT services","Monitoring tool","Database service"],answer:1,explanation:"AWS Service Catalog allows organizations to create and manage catalogs of IT services."},{id:144,question:"Which service provides managed email receiving?",options:["SES","SNS","SQS","WorkMail"],answer:0,explanation:"Amazon SES (Simple Email Service) provides both email sending and receiving capabilities."},{id:145,question:"What is AWS Control Tower?",options:["Monitoring service","Service for setting up and governing multi-account AWS environment","Security service","Database service"],answer:1,explanation:"AWS Control Tower provides the easiest way to set up and govern a secure multi-account AWS environment."},{id:146,question:"Which AWS service provides managed fraud detection?",options:["GuardDuty","Fraud Detector","Macie","Inspector"],answer:1,explanation:"Amazon Fraud Detector is a fully managed service for identifying potentially fraudulent activities."},{id:147,question:"What is AWS Resource Access Manager?",options:["IAM service","Service for sharing AWS resources across accounts","Monitoring tool","Storage service"],answer:1,explanation:"AWS RAM enables you to share AWS resources with other AWS accounts."},{id:148,question:"Which service provides managed contact center?",options:["Connect","Chime","WorkSpaces","AppStream"],answer:0,explanation:"Amazon Connect is a cloud-based contact center service."},{id:149,question:"What is AWS Trusted Advisor?",options:["Security service","Service providing best practice recommendations","Monitoring tool","Database service"],answer:1,explanation:"AWS Trusted Advisor provides recommendations to help optimize AWS infrastructure."},{id:150,question:"Which AWS service provides managed code repository?",options:["CodeCommit","CodeBuild","CodeDeploy","CodePipeline"],answer:0,explanation:"AWS CodeCommit is a fully managed source control service that hosts Git repositories."},{id:151,question:"What is AWS Config?",options:["Configuration management service","Service for assessing and auditing AWS resource configurations","Monitoring tool","Deployment service"],answer:1,explanation:"AWS Config provides a detailed view of resource configurations and tracks changes over time."},{id:152,question:"Which AWS service provides managed CI/CD pipeline?",options:["CodeCommit","CodeBuild","CodePipeline","CodeDeploy"],answer:2,explanation:"AWS CodePipeline is a fully managed continuous delivery service."},{id:153,question:"What is AWS Certificate Manager?",options:["Certificate storage","Service for provisioning and managing SSL/TLS certificates","Security service","Encryption tool"],answer:1,explanation:"AWS Certificate Manager handles the complexity of creating and managing SSL/TLS certificates."},{id:154,question:"Which service provides managed directory service?",options:["IAM","Directory Service","Cognito","Organizations"],answer:1,explanation:"AWS Directory Service provides managed Microsoft Active Directory."},{id:155,question:"What is AWS Personal Health Dashboard?",options:["Health monitoring for users","Service providing alerts about AWS service health affecting your resources","Fitness tracker","Medical service"],answer:1,explanation:"AWS Personal Health Dashboard provides alerts and remediation guidance when AWS events affect your resources."},{id:156,question:"Which AWS service provides managed build service?",options:["CodeCommit","CodeBuild","CodeDeploy","CodePipeline"],answer:1,explanation:"AWS CodeBuild is a fully managed continuous integration service that compiles source code and runs tests."},{id:157,question:"What is AWS CloudShell?",options:["Terminal emulator","Browser-based shell for managing AWS resources","SSH client","FTP client"],answer:1,explanation:"AWS CloudShell is a browser-based shell that makes it easy to manage AWS resources."},{id:158,question:"Which service provides managed quantum computing?",options:["Quantum","Braket","SageMaker","EMR"],answer:1,explanation:"Amazon Braket is a fully managed quantum computing service."},{id:159,question:"What is AWS Artifact?",options:["Storage service","Service providing compliance reports and agreements","Build tool","Deployment service"],answer:1,explanation:"AWS Artifact provides on-demand access to AWS security and compliance reports."},{id:160,question:"Which AWS service provides managed RPA?",options:["Step Functions","Glue","Data Pipeline","None - AWS doesn't offer RPA"],answer:3,explanation:"AWS doesn't have a dedicated RPA service, though Step Functions can automate workflows."},{id:161,question:"What is AWS Budgets?",options:["Financial planning tool","Service for setting custom cost and usage budgets","Billing service","Cost calculator"],answer:1,explanation:"AWS Budgets allows you to set custom budgets and receive alerts when costs or usage exceed thresholds."},{id:162,question:"Which service provides managed data catalog?",options:["Athena","Glue Data Catalog","Lake Formation","EMR"],answer:1,explanation:"AWS Glue Data Catalog is a centralized metadata repository."},{id:163,question:"What is AWS Compute Optimizer?",options:["Performance tool","Service recommending optimal AWS compute resources","Monitoring service","Deployment tool"],answer:1,explanation:"AWS Compute Optimizer recommends optimal AWS resources to reduce costs and improve performance."},{id:164,question:"Which AWS service provides managed data exchange?",options:["S3","Data Exchange","Transfer Family","DataSync"],answer:1,explanation:"AWS Data Exchange makes it easy to find, subscribe to, and use third-party data."},{id:165,question:"What is AWS Firewall Manager?",options:["Network firewall","Service for centrally managing firewall rules","Security group manager","WAF manager"],answer:1,explanation:"AWS Firewall Manager simplifies administration and maintenance of firewall rules across accounts."},{id:166,question:"Which service provides managed file transfer?",options:["S3","Transfer Family","DataSync","Storage Gateway"],answer:1,explanation:"AWS Transfer Family provides fully managed support for SFTP, FTPS, and FTP."},{id:167,question:"What is AWS Global Accelerator?",options:["CDN service","Network service improving application availability and performance","Load balancer","DNS service"],answer:1,explanation:"AWS Global Accelerator improves availability and performance using the AWS global network."},{id:168,question:"Which AWS service provides managed honeypot?",options:["GuardDuty","Detective","Security Hub","None - AWS doesn't offer honeypots"],answer:3,explanation:"AWS doesn't provide a managed honeypot service, though you can build your own."},{id:169,question:"What is AWS License Manager?",options:["IAM service","Service for managing software licenses","Billing tool","Compliance service"],answer:1,explanation:"AWS License Manager makes it easier to manage licenses from software vendors."},{id:170,question:"Which service provides managed network firewall?",options:["Security Groups","Network ACL","Network Firewall","WAF"],answer:2,explanation:"AWS Network Firewall is a managed service for deploying network firewall protection."},{id:171,question:"What is AWS Panorama?",options:["Image service","Computer vision service for edge devices","Monitoring tool","Video service"],answer:1,explanation:"AWS Panorama brings computer vision to on-premises cameras."},{id:172,question:"Which AWS service provides managed pricing calculator?",options:["Budgets","Cost Explorer","Pricing Calculator","All of the above"],answer:2,explanation:"AWS Pricing Calculator helps estimate costs for AWS services."},{id:173,question:"What is AWS PrivateLink?",options:["VPN service","Service for private connectivity between VPCs and services","Direct Connect","Transit Gateway"],answer:1,explanation:"AWS PrivateLink provides private connectivity between VPCs, services, and on-premises applications."},{id:174,question:"Which service provides managed robotics?",options:["IoT Core","RoboMaker","Greengrass","SageMaker"],answer:1,explanation:"AWS RoboMaker is a service for developing, testing, and deploying robotics applications."},{id:175,question:"What is AWS Security Hub?",options:["Firewall service","Centralized security and compliance service","IAM service","Encryption service"],answer:1,explanation:"AWS Security Hub provides a comprehensive view of security alerts and compliance status."},{id:176,question:"Which AWS service provides managed service mesh?",options:["ECS","App Mesh","EKS","Fargate"],answer:1,explanation:"AWS App Mesh is a service mesh that provides application-level networking."},{id:177,question:"What is AWS Single Sign-On?",options:["IAM service","Service for centrally managing SSO access","Cognito","Directory Service"],answer:1,explanation:"AWS SSO (now IAM Identity Center) makes it easy to centrally manage SSO access."},{id:178,question:"Which service provides managed storage gateway?",options:["S3","Storage Gateway","EFS","FSx"],answer:1,explanation:"AWS Storage Gateway is a hybrid cloud storage service connecting on-premises to cloud storage."},{id:179,question:"What is AWS Well-Architected Tool?",options:["Design tool","Service for reviewing workloads against best practices","Monitoring service","Deployment tool"],answer:1,explanation:"AWS Well-Architected Tool helps review workloads against AWS best practices."},{id:180,question:"Which AWS service provides managed VDI?",options:["WorkSpaces","AppStream","EC2","Lightsail"],answer:0,explanation:"Amazon WorkSpaces provides managed virtual desktop infrastructure (VDI)."},{id:181,question:"What is Amazon Macie?",options:["Monitoring service","Data security service using ML to discover sensitive data","Encryption service","Backup service"],answer:1,explanation:"Amazon Macie uses machine learning to discover and protect sensitive data in S3."},{id:182,question:"Which service provides managed Windows file server?",options:["EFS","FSx for Windows","S3","Storage Gateway"],answer:1,explanation:"Amazon FSx for Windows File Server provides fully managed Windows file servers."},{id:183,question:"What is AWS Detective?",options:["Monitoring service","Service for security investigation and analysis","Logging service","Compliance tool"],answer:1,explanation:"Amazon Detective makes it easy to analyze and investigate security findings."},{id:184,question:"Which AWS service provides managed Lustre file system?",options:["EFS","FSx for Lustre","S3","Storage Gateway"],answer:1,explanation:"Amazon FSx for Lustre provides a high-performance file system for compute-intensive workloads."},{id:185,question:"What is AWS CodeStar?",options:["Code editor","Unified interface for software development activities","Version control","Build service"],answer:1,explanation:"AWS CodeStar provides a unified user interface for managing software development activities."},{id:186,question:"Which service provides managed threat detection?",options:["Inspector","GuardDuty","Macie","All of the above"],answer:3,explanation:"AWS offers multiple threat detection services: GuardDuty, Inspector, and Macie."},{id:187,question:"What is AWS Cloud9?",options:["Monitoring service","Cloud-based IDE","Deployment tool","Database service"],answer:1,explanation:"AWS Cloud9 is a cloud-based integrated development environment (IDE)."},{id:188,question:"Which AWS service provides managed NetApp ONTAP?",options:["EFS","FSx for NetApp ONTAP","S3","Storage Gateway"],answer:1,explanation:"Amazon FSx for NetApp ONTAP provides fully managed NetApp ONTAP file systems."},{id:189,question:"What is AWS Chatbot?",options:["AI chatbot","Service for ChatOps with Slack and Chime","Customer service tool","Monitoring bot"],answer:1,explanation:"AWS Chatbot enables ChatOps for AWS services in Slack and Amazon Chime."},{id:190,question:"Which service provides managed OpenSearch?",options:["CloudSearch","OpenSearch Service","Athena","Glue"],answer:1,explanation:"Amazon OpenSearch Service (formerly Elasticsearch Service) is a managed search and analytics engine."},{id:191,question:"What is AWS Fault Injection Simulator?",options:["Testing tool","Service for chaos engineering experiments","Monitoring service","Debugging tool"],answer:1,explanation:"AWS FIS is a managed service for running fault injection experiments."},{id:192,question:"Which AWS service provides managed OpenZFS?",options:["EFS","FSx for OpenZFS","S3","Storage Gateway"],answer:1,explanation:"Amazon FSx for OpenZFS provides fully managed OpenZFS file systems."},{id:193,question:"What is AWS Application Discovery Service?",options:["Service discovery","Service for planning migration by discovering on-premises resources","Monitoring tool","Deployment service"],answer:1,explanation:"AWS Application Discovery Service helps plan migration by gathering information about on-premises data centers."},{id:194,question:"Which service provides managed migration?",options:["DataSync","Migration Hub","Server Migration Service","All of the above"],answer:3,explanation:"AWS offers multiple migration services including Migration Hub, SMS, and DataSync."},{id:195,question:"What is AWS CloudEndure?",options:["Monitoring service","Disaster recovery and migration service","Backup service","Security service"],answer:1,explanation:"CloudEndure (now AWS DRS) provides disaster recovery and migration capabilities."},{id:196,question:"Which AWS service provides managed cost anomaly detection?",options:["Budgets","Cost Explorer","Cost Anomaly Detection","Trusted Advisor"],answer:2,explanation:"AWS Cost Anomaly Detection uses machine learning to detect unusual spending patterns."},{id:197,question:"What is AWS Resilience Hub?",options:["Backup service","Service for defining and tracking application resilience","Disaster recovery","Monitoring tool"],answer:1,explanation:"AWS Resilience Hub helps define, validate, and track application resilience."},{id:198,question:"Which service provides managed mainframe migration?",options:["Migration Hub","Mainframe Modernization","Server Migration Service","DataSync"],answer:1,explanation:"AWS Mainframe Modernization provides tools and resources for mainframe migration."},{id:199,question:"What is AWS Wickr?",options:["Monitoring service","End-to-end encrypted communication service","Email service","Chat service"],answer:1,explanation:"AWS Wickr provides end-to-end encrypted communications for enterprises."},{id:200,question:"Which AWS service provides managed sustainability insights?",options:["CloudWatch","Customer Carbon Footprint Tool","Trusted Advisor","Cost Explorer"],answer:1,explanation:"AWS Customer Carbon Footprint Tool helps track and reduce the carbon footprint of your AWS usage."}],security:[{id:1,question:"What is SQL Injection?",options:["Optimizing database","Malicious code insertion into SQL query","Password hashing","Firewall type"],answer:1,explanation:"SQL Injection allows attackers to interfere with the queries an application makes to its database."},{id:2,question:"What does XSS stand for?",options:["XML Source Style","Cross-Site Scripting","Extended Secure Socket","X-ray Safety Standard"],answer:1,explanation:"XSS (Cross-Site Scripting) attacks enable attackers to inject client-side scripts into web pages viewed by other users."},{id:3,question:"What refers to the principle of least privilege?",options:["Giving all access","Granting only necessary permissions","Open source software","Admin rights for everyone"],answer:1,explanation:"The principle of least privilege states that users should have only the permissions necessary to perform their work."},{id:4,question:"What is a Denial of Service (DoS) attack?",options:["Accessing private data","Flooding system with traffic to make it unavailable","Stealing passwords","Encrypting files"],answer:1,explanation:"DoS attacks shut down a machine or network, making it inaccessible to its intended users."},{id:5,question:"What is Phishing?",options:["Fishing for data","Fraudulent attempt to obtain sensitive information","Network scanning","Password cracking"],answer:1,explanation:"Phishing is a social engineering attack used to steal user data, including login credentials and credit card numbers."},{id:6,question:"What is the purpose of a Firewall?",options:["Cool computer","Blocks unauthorized access while permitting outward communication","Speeds up internet","Anti-virus software"],answer:1,explanation:"A firewall is a network security system that monitors and controls incoming and outgoing network traffic."},{id:7,question:"What is Two-Factor Authentication (2FA)?",options:["Using two passwords","Two people logging in","Authentication method requiring two pieces of evidence","Double encryption"],answer:2,explanation:"2FA adds an extra layer of security by requiring a second verification method beyond just a password."},{id:8,question:"What is 'Salt' in cryptography?",options:["Sodium chloride","Random data added to password before hashing","Encryption key","Decryption algorithm"],answer:1,explanation:"Salt is random data that is used as an additional input to a one-way function that hashes data."},{id:9,question:"What is a 'Zero Day' vulnerability?",options:["Old bug","Vulnerability known to vendor but unpatched","Vulnerability discovered and exploited before vendor knows","Bug with zero impact"],answer:2,explanation:"Zero-day attack takes place when hackers exploit the flaw before developers have a chance to address it."},{id:10,question:"What does HTTPS ensure?",options:["Faster loading","Encrypted communication between browser and server","Better SEO","Free hosting"],answer:1,explanation:"HTTPS encrypts the data transferred to increase the security of data transfer."},{id:11,question:"What is a firewall?",options:["Antivirus","Network security system","Encryption tool","Backup system"],answer:1,explanation:"A firewall monitors and controls incoming and outgoing network traffic based on security rules."},{id:12,question:"What is encryption?",options:["Data compression","Converting data into coded form","Data backup","Data deletion"],answer:1,explanation:"Encryption converts data into a coded format to prevent unauthorized access."},{id:13,question:"What is a DDoS attack?",options:["Data theft","Distributed Denial of Service attack","Password attack","Virus attack"],answer:1,explanation:"DDoS attacks overwhelm a system with traffic from multiple sources to make it unavailable."},{id:14,question:"What is two-factor authentication?",options:["Two passwords","Two-step verification process","Two users","Two devices"],answer:1,explanation:"2FA requires two different forms of identification to verify user identity."},{id:15,question:"What is a VPN?",options:["Virus Protection Network","Virtual Private Network","Very Private Network","Verified Public Network"],answer:1,explanation:"VPN creates a secure, encrypted connection over a less secure network."},{id:16,question:"What is malware?",options:["Good software","Malicious software","System software","Application software"],answer:1,explanation:"Malware is software designed to harm or exploit computer systems."},{id:17,question:"What is ransomware?",options:["Free software","Malware that encrypts data for ransom","Antivirus","Backup tool"],answer:1,explanation:"Ransomware encrypts victim's data and demands payment for decryption."},{id:18,question:"What is social engineering?",options:["Programming","Manipulating people to divulge information","Network engineering","Software development"],answer:1,explanation:"Social engineering manipulates people into revealing confidential information."},{id:19,question:"What is a brute force attack?",options:["Physical attack","Trial-and-error method to crack passwords","Network attack","Virus attack"],answer:1,explanation:"Brute force attacks try all possible combinations to crack passwords or encryption."},{id:20,question:"What is SSL/TLS?",options:["Programming language","Cryptographic protocols for secure communication","Database","Operating system"],answer:1,explanation:"SSL/TLS protocols provide secure communication over computer networks."},{id:21,question:"What is a zero-day vulnerability?",options:["Old vulnerability","Unknown vulnerability exploited before patch","Fixed vulnerability","Harmless bug"],answer:1,explanation:"A zero-day vulnerability is unknown to software vendor and exploited before a fix is available."},{id:22,question:"What is penetration testing?",options:["Software testing","Authorized simulated cyber attack","Network testing","Hardware testing"],answer:1,explanation:"Penetration testing simulates cyber attacks to identify security vulnerabilities."},{id:23,question:"What is a honeypot?",options:["Sweet trap","Decoy system to detect attacks","Firewall","Antivirus"],answer:1,explanation:"A honeypot is a decoy system designed to attract and detect cyber attacks."},{id:24,question:"What is multi-factor authentication?",options:["One password","Multiple verification methods","Two users","Multiple devices"],answer:1,explanation:"MFA requires multiple forms of verification to authenticate user identity."},{id:25,question:"What is a security audit?",options:["Financial audit","Systematic evaluation of security measures","Code review","Performance test"],answer:1,explanation:"A security audit evaluates an organization's information system security."}],ml:[{id:1,question:"What is Supervised Learning?",options:["Learning with labeled data","Learning with no labels","Reinforcement","Learning on its own"],answer:0,explanation:"Supervised learning involves training a model on a labeled dataset."},{id:2,question:"What is Overfitting?",options:["Model is too simple","Model learns noise/detail of training data too well impacting new data performance","Model fits perfectly","Underfitting"],answer:1,explanation:"Overfitting happens when a model learns the detail and noise in the training data to the extent that it negatively impacts the performance of the model on new data."},{id:3,question:"Which algorithm is used for classification?",options:["Linear Regression","Logistic Regression","K-Means","PCA"],answer:1,explanation:"Despite the name, Logistic Regression is used for binary classification problems."},{id:4,question:"What is Clustering?",options:["Supervised learning","Grouping similar data points together","Sorting data","Regressing data"],answer:1,explanation:"Clustering is the task of dividing the population or data points into a number of groups such that data points in the same groups are more similar."},{id:5,question:"What stands for NLP?",options:["Natural Learning Process","Natural Language Processing","Neural Language Program","New Language Processing"],answer:1,explanation:"Natural Language Processing (NLP) is a branch of AI that helps computers understand, interpret and manipulate human language."},{id:6,question:"What is a Neural Network?",options:["Brain simulation","Computing system inspired by biological neural networks","Computer network","Social network"],answer:1,explanation:"Neural networks reflect the behavior of the human brain, allowing computer programs to recognize patterns."},{id:7,question:"What is 'Training Set'?",options:["Gym workout","Data used to fit the model","Data used for testing","All data"],answer:1,explanation:"The training set is the material through which the computer learns how to process information."},{id:8,question:"What is Reinforcement Learning?",options:["Learning from mistakes","Learning by trial and error using rewards/penalties","Supervised learning","Unsupervised learning"],answer:1,explanation:"Reinforcement learning trains algorithms using a system of reward and punishment."},{id:9,question:"What is feature engineering?",options:["Designing features","Selecting/transforming variables for model improvement","Software engineering","UI design"],answer:1,explanation:"Feature engineering is the process of using domain knowledge to extract features from raw data."},{id:10,question:"What is a 'Bias' in ML?",options:["Prejudice","Systematic error introduced by approximation","Weight","Learning rate"],answer:1,explanation:"Bias is the simplifying assumptions made by a model to make the target function easier to learn."},{id:11,question:"What is a neural network?",options:["Linear model","Computing system inspired by biological neural networks","Decision tree","Clustering algorithm"],answer:1,explanation:"Neural networks are computing systems inspired by biological neural networks in animal brains."},{id:12,question:"What is deep learning?",options:["Shallow learning","ML using neural networks with multiple layers","Reinforcement learning","Supervised learning"],answer:1,explanation:"Deep learning uses neural networks with multiple layers to learn hierarchical representations."},{id:13,question:"What is a decision tree?",options:["Neural network","Tree-like model for decision making","Linear model","Clustering method"],answer:1,explanation:"A decision tree is a flowchart-like structure for making decisions based on features."},{id:14,question:"What is cross-validation?",options:["Training method","Technique to assess model performance","Feature selection","Data cleaning"],answer:1,explanation:"Cross-validation evaluates model performance by partitioning data into training and validation sets."},{id:15,question:"What is feature engineering?",options:["Model training","Creating new features from existing data","Data collection","Model deployment"],answer:1,explanation:"Feature engineering creates new features or transforms existing ones to improve model performance."},{id:16,question:"What is gradient descent?",options:["Classification algorithm","Optimization algorithm to minimize loss","Clustering method","Feature selection"],answer:1,explanation:"Gradient descent is an optimization algorithm used to minimize the loss function."},{id:17,question:"What is a confusion matrix?",options:["Training data","Table showing model performance","Feature matrix","Weight matrix"],answer:1,explanation:"A confusion matrix shows the performance of a classification model."},{id:18,question:"What is precision in ML?",options:["Accuracy","True positives / (True positives + False positives)","Recall","F1 score"],answer:1,explanation:"Precision measures the proportion of positive predictions that are actually correct."},{id:19,question:"What is recall?",options:["Precision","True positives / (True positives + False negatives)","Accuracy","F1 score"],answer:1,explanation:"Recall measures the proportion of actual positives that are correctly identified."},{id:20,question:"What is regularization?",options:["Data cleaning","Technique to prevent overfitting","Feature selection","Model training"],answer:1,explanation:"Regularization adds a penalty term to prevent overfitting by constraining model complexity."},{id:21,question:"What is a random forest?",options:["Single tree","Ensemble of decision trees","Neural network","Linear model"],answer:1,explanation:"Random Forest is an ensemble method that combines multiple decision trees."},{id:22,question:"What is k-means clustering?",options:["Supervised learning","Unsupervised clustering algorithm","Classification","Regression"],answer:1,explanation:"K-means is an unsupervised algorithm that partitions data into k clusters."},{id:23,question:"What is transfer learning?",options:["Data transfer","Using pre-trained model for new task","Model deployment","Feature engineering"],answer:1,explanation:"Transfer learning reuses a pre-trained model on a new but related task."},{id:24,question:"What is a convolutional neural network (CNN)?",options:["RNN","Neural network for image processing","Decision tree","Linear model"],answer:1,explanation:"CNNs are specialized neural networks designed for processing grid-like data such as images."},{id:25,question:"What is a recurrent neural network (RNN)?",options:["CNN","Neural network for sequential data","Decision tree","Clustering algorithm"],answer:1,explanation:"RNNs are designed to work with sequential data by maintaining internal state."}],aptitude:[{id:1,question:"If A can do a work in 10 days and B in 15 days, how long will they take together?",options:["5 days","6 days","8 days","12 days"],answer:1,explanation:"1/10 + 1/15 = 5/30 = 1/6. So, 6 days."},{id:2,question:"What comes next: 2, 6, 12, 20, 30, ...?",options:["40","42","44","46"],answer:1,explanation:"Differences are 4, 6, 8, 10... Next difference is 12. 30 + 12 = 42."},{id:3,question:"Train 100m long crosses a pole in 10s. Speed of train?",options:["10 m/s","20 m/s","36 km/hr","Both A and C"],answer:3,explanation:"Speed = Distance/Time = 100/10 = 10 m/s. 10 m/s * 18/5 = 36 km/hr."},{id:4,question:"Average of 5 numbers is 20. If 4 numbers are 10, 15, 25, 30, what is the 5th?",options:["15","20","25","30"],answer:1,explanation:"Sum = 5 * 20 = 100. Sum of 4 = 10+15+25+30 = 80. 5th number = 100 - 80 = 20."},{id:5,question:"A man buys an item for $80 and sells for $100. Profit percentage?",options:["20%","25%","15%","10%"],answer:1,explanation:"Profit = 20. % Profit = (20/80) * 100 = 1/4 * 100 = 25%."},{id:6,question:"The sum of ages of father and son is 50. 5 years ago, sum was?",options:["45","40","35","50"],answer:1,explanation:"Each person's age reduces by 5. Total reduction = 5 + 5 = 10. 50 - 10 = 40."},{id:7,question:"Odd one out: Apple, Orange, Banana, Carrot",options:["Apple","Orange","Banana","Carrot"],answer:3,explanation:"Carrot is a vegetable (root), others are fruits."},{id:8,question:"15% of 200 is?",options:["20","30","40","15"],answer:1,explanation:"15/100 * 200 = 15 * 2 = 30."},{id:9,question:"Distance = 300km, Time = 5hrs. Speed?",options:["50 km/h","60 km/h","70 km/h","40 km/h"],answer:1,explanation:"Speed = Distance / Time = 300 / 5 = 60 km/h."},{id:10,question:"Simplify: (4 + 4) * 4 / 2",options:["16","10","12","32"],answer:0,explanation:"According to BODMAS: Bracket first (8), then Division (4/2=2), then Multiplication (8*2=16)."},{id:11,question:"A train travels 60 km in 1 hour. How far will it travel in 3.5 hours?",options:["180 km","210 km","240 km","200 km"],answer:1,explanation:"Distance = Speed × Time = 60 × 3.5 = 210 km."},{id:12,question:"If 20% of a number is 40, what is the number?",options:["200","180","220","160"],answer:0,explanation:"Let the number be x. 20% of x = 40, so 0.2x = 40, x = 200."},{id:13,question:"What is the next number in the series: 2, 6, 12, 20, ?",options:["28","30","32","26"],answer:1,explanation:"Pattern: 1×2, 2×3, 3×4, 4×5, 5×6 = 30."},{id:14,question:"If a shirt costs $50 after a 20% discount, what was the original price?",options:["$60","$62.50","$65","$70"],answer:1,explanation:"Let original price be x. x - 0.2x = 50, so 0.8x = 50, x = 62.50."},{id:15,question:"A car covers 150 km in 3 hours. What is its average speed?",options:["45 km/h","50 km/h","55 km/h","60 km/h"],answer:1,explanation:"Average speed = Distance / Time = 150 / 3 = 50 km/h."},{id:16,question:"If 5 workers can complete a task in 12 days, how many days will 10 workers take?",options:["6 days","8 days","4 days","10 days"],answer:0,explanation:"More workers, less time. 5 × 12 = 10 × x, so x = 6 days."},{id:17,question:"What is 15% of 200?",options:["25","30","35","40"],answer:1,explanation:"15% of 200 = (15/100) × 200 = 30."},{id:18,question:"If the ratio of boys to girls is 3:2 and there are 15 boys, how many girls are there?",options:["8","10","12","15"],answer:1,explanation:"3:2 = 15:x, so 3x = 30, x = 10 girls."},{id:19,question:"A rectangle has length 10 cm and width 5 cm. What is its area?",options:["40 cm²","50 cm²","60 cm²","30 cm²"],answer:1,explanation:"Area = Length × Width = 10 × 5 = 50 cm²."},{id:20,question:"If a number is increased by 25% and the result is 50, what was the original number?",options:["35","40","45","38"],answer:1,explanation:"Let original number be x. x + 0.25x = 50, so 1.25x = 50, x = 40."}],cn:[{id:1,question:"How many layers are in the OSI model?",options:["5","7","4","6"],answer:1,explanation:"The OSI model consists of 7 layers: Physical, Data Link, Network, Transport, Session, Presentation, Application."},{id:2,question:"Which protocol is used to send email?",options:["FTP","HTTP","SMTP","POP3"],answer:2,explanation:"SMTP (Simple Mail Transfer Protocol) is used for sending emails."},{id:3,question:"What is the length of an IPv4 address?",options:["32 bits","64 bits","128 bits","16 bits"],answer:0,explanation:"IPv4 addresses are 32-bit binary numbers."},{id:4,question:"What does DNS stand for?",options:["Data Network Service","Domain Name System","Digital Network Storage","Domain Number System"],answer:1,explanation:"DNS (Domain Name System) translates human-readable domain names to IP addresses."},{id:5,question:"Which layer handles routing?",options:["Physical","Data Link","Network","Transport"],answer:2,explanation:"The Network layer is responsible for routing packets across networks (e.g., Application of IP)."},{id:6,question:"What is TCP?",options:["Connectionless protocol","Transmission Control Protocol","Time Control Protocol","None"],answer:1,explanation:"TCP is a connection-oriented protocol that ensures reliable delivery of data."},{id:7,question:"What is the port number for HTTP?",options:["21","25","80","443"],answer:2,explanation:"Port 80 is the default port for HTTP traffic."},{id:8,question:"What is a MAC address?",options:["IP address","Physical address of network adapter","Email address","Website address"],answer:1,explanation:"A MAC (Media Access Control) address is a unique identifier assigned to a network interface controller."},{id:9,question:"Difference between Hub and Switch?",options:["Hub is smarter","Switch broadcasts to all ports","Hub broadcasts to all ports, Switch sends to specific destination","No difference"],answer:2,explanation:"A hub broadcasts data to all devices, while a switch directs data only to the device that needs it."},{id:10,question:"What is 'Ping' used for?",options:["Test reachability of a host","Send email","Download file","Measure internet speed"],answer:0,explanation:"Ping is a utility used to test the reachability of a host on an Internet Protocol (IP) network."},{id:11,question:"What is a subnet mask?",options:["Network security tool","Divides IP address into network and host portions","Firewall rule","Routing protocol"],answer:1,explanation:"A subnet mask is used to divide an IP address into network and host portions."},{id:12,question:"What is DHCP?",options:["Dynamic Host Configuration Protocol","Domain Host Control Protocol","Data Host Communication Protocol","Digital Host Configuration Protocol"],answer:0,explanation:"DHCP automatically assigns IP addresses to devices on a network."},{id:13,question:"What layer does a router operate at?",options:["Physical","Data Link","Network","Transport"],answer:2,explanation:"Routers operate at the Network layer (Layer 3) of the OSI model."},{id:14,question:"What is NAT?",options:["Network Address Translation","Network Access Token","Node Address Table","Network Authentication Tool"],answer:0,explanation:"NAT translates private IP addresses to public IP addresses for internet access."},{id:15,question:"What is the purpose of ARP?",options:["Routing packets","Resolving IP to MAC address","DNS resolution","Port forwarding"],answer:1,explanation:"ARP (Address Resolution Protocol) maps IP addresses to MAC addresses."},{id:16,question:"What is a MAC address?",options:["IP address","Physical hardware address","Domain name","Port number"],answer:1,explanation:"MAC (Media Access Control) address is a unique identifier assigned to network interfaces."},{id:17,question:"What is the default port for HTTPS?",options:["80","443","8080","22"],answer:1,explanation:"HTTPS uses port 443 by default for secure web traffic."},{id:18,question:"What is a firewall?",options:["Antivirus software","Network security system","Router","Switch"],answer:1,explanation:"A firewall monitors and controls incoming and outgoing network traffic based on security rules."},{id:19,question:"What is latency?",options:["Bandwidth","Delay in data transmission","Packet loss","Network speed"],answer:1,explanation:"Latency is the time delay between sending and receiving data."},{id:20,question:"What is a VPN?",options:["Virtual Private Network","Very Private Network","Virtual Public Network","Verified Private Network"],answer:0,explanation:"VPN creates a secure, encrypted connection over a less secure network."},{id:21,question:"What is bandwidth?",options:["Network delay","Maximum data transfer rate","Packet size","IP address range"],answer:1,explanation:"Bandwidth is the maximum rate of data transfer across a network path."},{id:22,question:"What is a gateway?",options:["Router","Node connecting different networks","Switch","Hub"],answer:1,explanation:"A gateway is a network node that serves as an access point to another network."},{id:23,question:"What is FTP used for?",options:["Email","File transfer","Web browsing","Video streaming"],answer:1,explanation:"FTP (File Transfer Protocol) is used for transferring files between computers."},{id:24,question:"What is a proxy server?",options:["DNS server","Intermediary server between client and internet","Web server","Mail server"],answer:1,explanation:"A proxy server acts as an intermediary for requests from clients seeking resources from other servers."},{id:25,question:"What is ICMP?",options:["Internet Control Message Protocol","Internet Connection Management Protocol","Internal Communication Message Protocol","Internet Configuration Management Protocol"],answer:0,explanation:"ICMP is used for error messages and operational information (e.g., ping uses ICMP)."},{id:26,question:"What is a switch?",options:["Routes packets between networks","Connects devices within a network","Provides wireless access","Encrypts data"],answer:1,explanation:"A switch connects devices within a single network and forwards data to specific devices."},{id:27,question:"What is the difference between TCP and UDP?",options:["No difference","TCP is reliable, UDP is faster but unreliable","UDP is reliable, TCP is faster","Both are identical"],answer:1,explanation:"TCP provides reliable, ordered delivery while UDP is faster but doesn't guarantee delivery."},{id:28,question:"What is a DNS server?",options:["Translates domain names to IP addresses","Stores files","Routes packets","Provides security"],answer:0,explanation:"DNS (Domain Name System) servers translate human-readable domain names to IP addresses."},{id:29,question:"What is packet switching?",options:["Switching routers","Breaking data into packets for transmission","Changing IP addresses","Network topology"],answer:1,explanation:"Packet switching breaks data into packets that are transmitted independently across the network."},{id:30,question:"What is QoS?",options:["Quality of Service","Queue of Services","Quick Operating System","Quantum of Speed"],answer:0,explanation:"QoS (Quality of Service) manages network resources to provide different priority to different applications or users."}],dbms:[{id:1,question:"Which key uniquely identifies a record in a table?",options:["Foreign Key","Primary Key","Secondary Key","None"],answer:1,explanation:"A Primary Key uniquely identifies each record in a database table."},{id:2,question:"What is a Tuple?",options:["Column","Row","Table","Database"],answer:1,explanation:"In relational databases, a row is also referred to as a Tuple."},{id:3,question:"What performs 'Pattern Matching' in SQL?",options:["=","MATCH","LIKE","SEARCH"],answer:2,explanation:"The LIKE operator is used in a WHERE clause to search for a specified pattern in a column."},{id:4,question:"What is DDL?",options:["Data Definition Language","Data Derivation Language","Data Design Language","Detailed Data Layout"],answer:0,explanation:"DDL (Data Definition Language) includes commands like CREATE, ALTER, DROP."},{id:5,question:"What is DML?",options:["Data Management Language","Data Manipulation Language","Data Modeling Language","None"],answer:1,explanation:"DML (Data Manipulation Language) includes commands like SELECT, INSERT, UPDATE, DELETE."},{id:6,question:"Which join returns only matching rows?",options:["Left Join","Right Join","Inner Join","Outer Join"],answer:2,explanation:"Inner Join selects records that have matching values in both tables."},{id:7,question:"What is an 'Attribute' in a relational model?",options:["Row","Column","Table","Key"],answer:1,explanation:"An attribute corresponds to a column in a table."},{id:8,question:"What is the full form of SQL?",options:["Structured Query Language","Simple Query Language","Standard Query Level","System Query Logic"],answer:0,explanation:"SQL stands for Structured Query Language."},{id:9,question:"Which keyword is used to remove a table completely?",options:["DELETE","REMOVE","DROP","TRUNCATE"],answer:2,explanation:"DROP TABLE removes the table definition and all its data."},{id:10,question:"What represents a relationship between two tables?",options:["Primary Key","Foreign Key","Candidate Key","Super Key"],answer:1,explanation:"A Foreign Key is a field (or collection of fields) in one table, that refers to the Primary Key in another table."},{id:11,question:"What is normalization in databases?",options:["Data encryption","Organizing data to reduce redundancy","Data backup","Query optimization"],answer:1,explanation:"Normalization is the process of organizing data to minimize redundancy and dependency."},{id:12,question:"Which normal form eliminates transitive dependencies?",options:["1NF","2NF","3NF","BCNF"],answer:2,explanation:"Third Normal Form (3NF) eliminates transitive dependencies."},{id:13,question:"What is ACID in database transactions?",options:["A programming language","Properties ensuring reliable transactions","A type of database","SQL command"],answer:1,explanation:"ACID stands for Atomicity, Consistency, Isolation, Durability - properties that guarantee database transactions are processed reliably."},{id:14,question:"Which SQL clause is used to filter groups?",options:["WHERE","HAVING","GROUP BY","FILTER"],answer:1,explanation:"HAVING clause is used to filter groups after GROUP BY, while WHERE filters rows before grouping."},{id:15,question:"What is a composite key?",options:["A key made of multiple attributes","An encrypted key","A foreign key","A candidate key"],answer:0,explanation:"A composite key is a primary key composed of multiple columns."},{id:16,question:"Which join returns all rows from both tables?",options:["Inner Join","Left Join","Right Join","Full Outer Join"],answer:3,explanation:"Full Outer Join returns all rows from both tables, with NULLs where there's no match."},{id:17,question:"What is an index in databases?",options:["A table","A data structure to speed up queries","A constraint","A view"],answer:1,explanation:"An index is a data structure that improves the speed of data retrieval operations."},{id:18,question:"What does TRUNCATE do?",options:["Deletes specific rows","Removes all rows but keeps structure","Drops the table","Renames table"],answer:1,explanation:"TRUNCATE removes all rows from a table but keeps the table structure."},{id:19,question:"What is a view in SQL?",options:["Physical table","Virtual table based on query","Index","Constraint"],answer:1,explanation:"A view is a virtual table based on the result of a SELECT statement."},{id:20,question:"Which constraint ensures unique values?",options:["PRIMARY KEY","UNIQUE","CHECK","Both A and B"],answer:3,explanation:"Both PRIMARY KEY and UNIQUE constraints ensure unique values, but PRIMARY KEY also disallows NULL."},{id:21,question:"What is a stored procedure?",options:["A table","Precompiled SQL code stored in database","A view","An index"],answer:1,explanation:"A stored procedure is a prepared SQL code that can be saved and reused."},{id:22,question:"What is denormalization?",options:["Removing data","Adding redundancy for performance","Encrypting data","Backing up data"],answer:1,explanation:"Denormalization intentionally adds redundancy to improve read performance."},{id:23,question:"Which SQL function returns the number of rows?",options:["SUM()","COUNT()","AVG()","TOTAL()"],answer:1,explanation:"COUNT() function returns the number of rows that match a specified criterion."},{id:24,question:"What is a trigger in databases?",options:["A constraint","Automatic action on table events","A query","An index"],answer:1,explanation:"A trigger is a stored procedure that automatically executes when certain events occur."},{id:25,question:"What does DISTINCT keyword do?",options:["Sorts data","Removes duplicate rows","Filters data","Groups data"],answer:1,explanation:"DISTINCT eliminates duplicate rows from the result set."},{id:26,question:"What is a candidate key?",options:["Any key that can be primary key","Foreign key","Composite key","Super key"],answer:0,explanation:"A candidate key is a minimal set of attributes that can uniquely identify a tuple."},{id:27,question:"Which isolation level prevents dirty reads?",options:["Read Uncommitted","Read Committed","Repeatable Read","Serializable"],answer:1,explanation:"Read Committed isolation level prevents dirty reads by only reading committed data."},{id:28,question:"What is a deadlock?",options:["Database crash","Two transactions waiting for each other","Slow query","Lock timeout"],answer:1,explanation:"A deadlock occurs when two or more transactions are waiting for each other to release locks."},{id:29,question:"What does CASCADE in foreign key do?",options:["Nothing","Propagates changes to related tables","Prevents deletion","Creates index"],answer:1,explanation:"CASCADE automatically propagates DELETE or UPDATE operations to related tables."},{id:30,question:"What is a subquery?",options:["Query within another query","Slow query","Stored procedure","View"],answer:0,explanation:"A subquery is a query nested inside another SQL query."},{id:31,question:"Which normal form deals with multi-valued dependencies?",options:["3NF","BCNF","4NF","5NF"],answer:2,explanation:"Fourth Normal Form (4NF) deals with multi-valued dependencies."},{id:32,question:"What is the difference between DELETE and TRUNCATE?",options:["No difference","DELETE can be rolled back, TRUNCATE cannot","TRUNCATE is slower","DELETE removes table structure"],answer:1,explanation:"DELETE is a DML command that can be rolled back, while TRUNCATE is DDL and cannot be rolled back in most databases."},{id:33,question:"What is a clustered index?",options:["Multiple indexes","Index that determines physical order of data","Non-unique index","Foreign key index"],answer:1,explanation:"A clustered index determines the physical order of data in a table."},{id:34,question:"What does UNION do in SQL?",options:["Joins tables","Combines result sets removing duplicates","Creates view","Filters data"],answer:1,explanation:"UNION combines the result sets of two or more SELECT statements and removes duplicates."},{id:35,question:"What is referential integrity?",options:["Data encryption","Ensuring foreign key values match primary key values","Data backup","Query optimization"],answer:1,explanation:"Referential integrity ensures that foreign key values always reference valid primary key values."}]},pe=t=>Ln[t]||[];function Dn(){const[t,s]=m.useState(null),[i,o]=m.useState(0),[n,r]=m.useState(null),[l,b]=m.useState(0),[c,u]=m.useState(!1),[S,f]=m.useState(!1);m.useEffect(()=>{window.scrollTo(0,0)},[t,S]);const y=h=>{s(h),o(0),b(0),f(!1),u(!1),r(null)},v=h=>{c||r(h)},C=()=>{if(n===null)return;pe(t)[i].answer===n&&b(T=>T+1),u(!0)},O=()=>{const h=pe(t);i+1<h.length?(o(w=>w+1),r(null),u(!1)):f(!0)},d=()=>{s(null),o(0),b(0),f(!1),u(!1),r(null)},k=t?pe(t):[],p=k[i],a=Fe.find(h=>h.id===t);return e.jsxs("div",{className:"app-container",children:[e.jsx(le,{title:"Interactive Quizzes",subtitle:"Test your knowledge across core engineering domains with our comprehensive question bank.",showBack:!!t,onBack:d}),!t&&e.jsxs("div",{children:[e.jsxs("div",{className:"quiz-section-header",children:[e.jsx("h2",{children:"Select a Topic"}),e.jsx("p",{children:"Choose from our wide range of engineering subjects"})]}),e.jsx("div",{className:"quiz-topics-grid",children:Fe.map(h=>e.jsxs("div",{className:"quiz-topic-card",onClick:()=>y(h.id),children:[e.jsx("span",{className:`quiz-difficulty-badge diff-${h.difficulty.toLowerCase()}`,children:h.difficulty}),e.jsx("div",{className:"quiz-icon-wrapper",children:e.jsx(h.icon,{size:24})}),e.jsx("h3",{className:"quiz-card-title",children:h.name}),e.jsxs("p",{className:"quiz-card-desc",children:["Test your proficiency in ",h.name," concepts."]}),e.jsxs("div",{className:"quiz-count-badge",children:[h.count," QUESTIONS"]})]},h.id))})]}),t&&!S&&p&&e.jsxs("div",{style:{maxWidth:800,margin:"0 auto"},children:[e.jsxs("div",{className:"progress-container",children:[e.jsx(z,{variant:"ghost",size:"small",onClick:()=>s(null),children:"Exit Quiz"}),e.jsx("div",{className:"progress-track",children:e.jsx("div",{className:"progress-fill",style:{width:`${i/k.length*100}%`}})}),e.jsxs("span",{className:"progress-text",children:[i+1,"/",k.length]})]}),e.jsxs("div",{className:"quiz-card-container",children:[e.jsxs("div",{style:{display:"flex",justifyContent:"space-between",alignItems:"center",marginBottom:20},children:[e.jsx("span",{className:"quiz-badge",children:a==null?void 0:a.name}),e.jsxs("span",{style:{fontSize:"0.9rem",color:"var(--text-muted)"},children:["Score: ",l]})]}),e.jsx("h2",{className:"question-text",children:p.question}),e.jsx("div",{className:"options-grid",children:p.options.map((h,w)=>{let T="option-card";return c?(T+=" disabled",w===p.answer?T+=" correct":w===n&&(T+=" incorrect")):n===w&&(T+=" selected"),e.jsxs("div",{onClick:()=>v(w),className:T,children:[e.jsxs("div",{className:"option-indicator",children:[c&&w===p.answer&&e.jsx(E,{size:14,color:"#fff"}),c&&w===n&&w!==p.answer&&e.jsx("div",{style:{width:8,height:8,borderRadius:"50%",background:"#fff"}}),!c&&n===w&&e.jsx("div",{style:{width:10,height:10,borderRadius:"50%",background:"#fff"}})]}),h]},w)})}),c&&e.jsxs("div",{className:"explanation-box",children:[e.jsx("div",{className:"explanation-title",children:"Explanation"}),e.jsx("p",{className:"explanation-text",children:p.explanation})]}),e.jsx("div",{style:{marginTop:32,display:"flex",justifyContent:"flex-end"},children:c?e.jsxs(z,{variant:"primary",onClick:O,children:[i+1===k.length?"Finish Quiz":"Next Question"," ",e.jsx(oe,{size:16,style:{marginLeft:8}})]}):e.jsx(z,{variant:"primary",onClick:C,disabled:n===null,children:"Check Answer"})})]})]}),S&&e.jsxs("div",{className:"results-container",children:[e.jsxs("div",{className:"score-circle",children:[e.jsx("span",{className:"score-number",children:l}),e.jsxs("span",{className:"score-total",children:["out of ",k.length]})]}),e.jsx("h2",{className:"result-message",children:l===k.length?"Perfect Score! 🌟":l>k.length*.8?"Excellent Work! 🎉":l>k.length*.5?"Good Effort! 👍":"Keep Practicing! 💪"}),e.jsxs("p",{className:"result-subtext",children:["You've completed the ",a==null?void 0:a.name," quiz. Review the notes to improve your score."]}),e.jsxs("div",{className:"action-buttons",children:[e.jsxs(z,{variant:"secondary",onClick:()=>{f(!1),o(0),b(0),u(!1),r(null)},children:[e.jsx(Xt,{size:16})," Retry Quiz"]}),e.jsxs(z,{variant:"primary",onClick:()=>s(null),children:["Explore Other Topics ",e.jsx(ae,{size:16})]})]})]})]})}const Q={"Frontend Developer":{duration:"6 weeks",intensity:"High",totalHours:120,difficulty:"Intermediate",description:"Master modern frontend development with React, JavaScript, and responsive design",weeks:[{week:1,topic:"JavaScript Fundamentals",focus:"ES6+, Closures, Promises, Async/Await",hours:20,dailyTasks:["Day 1-2: ES6 features (let/const, arrow functions, destructuring)","Day 3-4: Closures and scope chain deep dive","Day 5-6: Promises and async programming","Day 7: Practice problems and mini-project"],resources:["JavaScript.info","MDN Web Docs","FreeCodeCamp"],projects:["Build a promise-based API wrapper"],assessment:"Complete 20 JavaScript challenges on LeetCode"},{week:2,topic:"React Fundamentals",focus:"Components, Hooks, State Management",hours:22,dailyTasks:["Day 1-2: Components and JSX","Day 3-4: useState and useEffect hooks","Day 5: useContext and custom hooks","Day 6-7: Build a Todo app with React"],resources:["React Official Docs","React Beta Docs","Scrimba React Course"],projects:["Todo App with local storage","Weather Dashboard"],assessment:"Build a multi-page React application"},{week:3,topic:"Advanced React & State",focus:"Redux, React Query, Performance",hours:20,dailyTasks:["Day 1-2: Redux Toolkit basics","Day 3-4: React Query for data fetching","Day 5: Performance optimization (memo, useMemo)","Day 6-7: Build e-commerce cart with Redux"],resources:["Redux Toolkit Docs","TanStack Query","Kent C. Dodds Blog"],projects:["Shopping cart with Redux","Data dashboard with React Query"],assessment:"Optimize a slow React application"},{week:4,topic:"CSS & Responsive Design",focus:"Flexbox, Grid, Mobile-First, Animations",hours:18,dailyTasks:["Day 1-2: Flexbox mastery","Day 3-4: CSS Grid layouts","Day 5: Responsive design patterns","Day 6-7: Build responsive portfolio site"],resources:["CSS Tricks","Kevin Powell YouTube","Josh Comeau CSS"],projects:["Responsive landing page","CSS Grid gallery"],assessment:"Create a fully responsive website from Figma design"},{week:5,topic:"Performance & Accessibility",focus:"Lighthouse, ARIA, Code Splitting, SEO",hours:20,dailyTasks:["Day 1-2: Web Vitals and Lighthouse optimization","Day 3-4: Accessibility (ARIA, keyboard navigation)","Day 5: Code splitting and lazy loading","Day 6-7: SEO best practices"],resources:["web.dev","A11y Project","WebAIM"],projects:["Optimize existing app for 90+ Lighthouse score"],assessment:"Audit and fix accessibility issues in a web app"},{week:6,topic:"Portfolio & Interview Prep",focus:"Build Projects, System Design, Behavioral",hours:20,dailyTasks:["Day 1-3: Build capstone project","Day 4: Frontend system design basics","Day 5-6: Mock interviews","Day 7: Resume and portfolio polish"],resources:["Frontend Mentor","Pramp","Interviewing.io"],projects:["Full-stack CRUD application","Personal portfolio website"],assessment:"Complete 3 mock interviews successfully"}]},"Backend Developer":{duration:"6 weeks",intensity:"High",totalHours:125,difficulty:"Intermediate",description:"Build scalable backend systems with Node.js, databases, and APIs",weeks:[{week:1,topic:"Node.js & Express Fundamentals",focus:"Server setup, Routing, Middleware",hours:20,dailyTasks:["Day 1-2: Node.js basics and npm","Day 3-4: Express server and routing","Day 5-6: Middleware and error handling","Day 7: Build REST API for blog"],resources:["Node.js Docs","Express.js Guide","Traversy Media"],projects:["RESTful Blog API"],assessment:"Create a CRUD API with proper error handling"},{week:2,topic:"Database Design & SQL",focus:"PostgreSQL, Normalization, Indexing",hours:22,dailyTasks:["Day 1-2: SQL fundamentals (SELECT, JOIN)","Day 3-4: Database normalization","Day 5: Indexing and query optimization","Day 6-7: Design and implement e-commerce schema"],resources:["PostgreSQL Tutorial","Use The Index Luke","SQLBolt"],projects:["E-commerce database schema"],assessment:"Design a normalized database for a complex system"},{week:3,topic:"Authentication & Security",focus:"JWT, OAuth, Password Hashing, HTTPS",hours:21,dailyTasks:["Day 1-2: Password hashing with bcrypt","Day 3-4: JWT authentication","Day 5: OAuth 2.0 integration","Day 6-7: Implement auth system"],resources:["Auth0 Docs","OWASP","JWT.io"],projects:["Authentication system with JWT and refresh tokens"],assessment:"Implement secure authentication with social login"},{week:4,topic:"Caching & Performance",focus:"Redis, Query Optimization, Load Testing",hours:20,dailyTasks:["Day 1-2: Redis basics and caching strategies","Day 3-4: Database query optimization","Day 5: Load testing with Artillery","Day 6-7: Optimize API performance"],resources:["Redis University","Artillery Docs","PostgreSQL Performance"],projects:["Add Redis caching to existing API"],assessment:"Reduce API response time by 50%"},{week:5,topic:"Microservices & Message Queues",focus:"Service Architecture, RabbitMQ, Docker",hours:22,dailyTasks:["Day 1-2: Microservices architecture patterns","Day 3-4: RabbitMQ message queues","Day 5: Docker containerization","Day 6-7: Build microservices system"],resources:["Martin Fowler Articles","RabbitMQ Tutorials","Docker Docs"],projects:["Microservices-based order processing system"],assessment:"Design and implement a microservices architecture"},{week:6,topic:"System Design & Interview Prep",focus:"Scalability, Load Balancing, Mock Interviews",hours:20,dailyTasks:["Day 1-2: System design fundamentals","Day 3-4: Design URL shortener and Twitter","Day 5-6: Mock interviews","Day 7: Portfolio and resume"],resources:["Grokking System Design","System Design Primer","Pramp"],projects:["Design and document a scalable system"],assessment:"Complete 3 system design mock interviews"}]},"Full Stack Developer":{duration:"6 weeks",intensity:"Very High",totalHours:140,difficulty:"Advanced",description:"Master both frontend and backend development with modern tech stack",weeks:[{week:1,topic:"Full Stack Foundations",focus:"React + Node.js Integration, REST APIs",hours:24,dailyTasks:["Day 1-2: Set up full stack project structure","Day 3-4: Build REST API with Express","Day 5-6: Connect React frontend to backend","Day 7: Authentication flow (frontend + backend)"],resources:["Full Stack Open","Traversy Media","Net Ninja"],projects:["Full stack authentication system"],assessment:"Build a complete CRUD application"},{week:2,topic:"Database & State Management",focus:"PostgreSQL, Redux, Data Flow",hours:24,dailyTasks:["Day 1-2: Database design and migrations","Day 3-4: Redux for complex state","Day 5-6: Optimistic updates and caching","Day 7: Build real-time features"],resources:["PostgreSQL Docs","Redux Toolkit","Socket.io"],projects:["Real-time chat application"],assessment:"Implement complex state management"},{week:3,topic:"GraphQL & Modern APIs",focus:"Apollo, GraphQL Schema, Resolvers",hours:22,dailyTasks:["Day 1-2: GraphQL fundamentals","Day 3-4: Apollo Server setup","Day 5-6: Apollo Client integration","Day 7: Build GraphQL API"],resources:["Apollo Docs","GraphQL.org","How to GraphQL"],projects:["GraphQL-based blog platform"],assessment:"Convert REST API to GraphQL"},{week:4,topic:"Testing & CI/CD",focus:"Jest, React Testing Library, GitHub Actions",hours:23,dailyTasks:["Day 1-2: Unit testing with Jest","Day 3-4: Integration testing","Day 5: E2E testing with Playwright","Day 6-7: Set up CI/CD pipeline"],resources:["Testing Library Docs","Jest Docs","GitHub Actions"],projects:["Add comprehensive tests to existing project"],assessment:"Achieve 80%+ code coverage"},{week:5,topic:"Deployment & DevOps",focus:"Docker, AWS/Vercel, Monitoring",hours:24,dailyTasks:["Day 1-2: Docker containerization","Day 3-4: Deploy to AWS/Vercel","Day 5: Set up monitoring and logging","Day 6-7: Performance optimization"],resources:["Docker Docs","AWS Tutorials","Vercel Docs"],projects:["Deploy full stack app to production"],assessment:"Successfully deploy and monitor production app"},{week:6,topic:"Capstone Project & Interview Prep",focus:"Build Production App, System Design",hours:23,dailyTasks:["Day 1-4: Build capstone project","Day 5: System design practice","Day 6-7: Mock interviews and portfolio"],resources:["Frontend Mentor","Pramp","LeetCode"],projects:["Production-ready full stack application"],assessment:"Complete 5 mock interviews"}]},"Data Analyst":{duration:"6 weeks",intensity:"Medium",totalHours:110,difficulty:"Beginner to Intermediate",description:"Master SQL, Python, and data visualization for analytics roles",weeks:[{week:1,topic:"SQL Mastery",focus:"Joins, Aggregations, Window Functions",hours:18,dailyTasks:["Day 1-2: SELECT, WHERE, GROUP BY","Day 3-4: JOINs (INNER, LEFT, RIGHT)","Day 5-6: Window functions and CTEs","Day 7: Complex SQL challenges"],resources:["Mode Analytics SQL","SQLZoo","LeetCode SQL"],projects:["Sales analysis dashboard queries"],assessment:"Solve 30 SQL problems"},{week:2,topic:"Python for Data Analysis",focus:"Pandas, NumPy, Data Cleaning",hours:20,dailyTasks:["Day 1-2: Python basics and NumPy","Day 3-4: Pandas DataFrames","Day 5-6: Data cleaning techniques","Day 7: Exploratory data analysis project"],resources:["Kaggle Learn","Python Data Science Handbook","Real Python"],projects:["Clean and analyze messy dataset"],assessment:"Complete Kaggle data cleaning course"},{week:3,topic:"Statistics & Probability",focus:"Hypothesis Testing, Distributions, A/B Testing",hours:18,dailyTasks:["Day 1-2: Descriptive statistics","Day 3-4: Probability distributions","Day 5-6: Hypothesis testing","Day 7: A/B test analysis"],resources:["Khan Academy Statistics","StatQuest YouTube","Coursera Statistics"],projects:["A/B test analysis report"],assessment:"Design and analyze an A/B test"},{week:4,topic:"Data Visualization",focus:"Matplotlib, Seaborn, Tableau",hours:18,dailyTasks:["Day 1-2: Matplotlib basics","Day 3-4: Seaborn for statistical plots","Day 5-6: Tableau dashboards","Day 7: Create comprehensive dashboard"],resources:["Matplotlib Docs","Seaborn Gallery","Tableau Public"],projects:["Interactive sales dashboard"],assessment:"Build a Tableau dashboard from scratch"},{week:5,topic:"Business Analytics",focus:"Metrics, KPIs, Cohort Analysis",hours:18,dailyTasks:["Day 1-2: Define business metrics","Day 3-4: Cohort analysis","Day 5-6: Funnel analysis","Day 7: Case study presentation"],resources:["Lean Analytics Book","DataCamp","StrataScratch"],projects:["User retention cohort analysis"],assessment:"Present business insights to stakeholders"},{week:6,topic:"Interview Preparation",focus:"SQL Challenges, Case Studies, Behavioral",hours:18,dailyTasks:["Day 1-3: SQL interview questions","Day 4-5: Take-home case studies","Day 6-7: Mock interviews"],resources:["StrataScratch","DataLemur","Interview Query"],projects:["Complete 3 take-home assignments"],assessment:"Pass 3 mock data analyst interviews"}]},"DevOps Engineer":{duration:"6 weeks",intensity:"High",totalHours:130,difficulty:"Intermediate to Advanced",description:"Master CI/CD, containerization, cloud infrastructure, and automation",weeks:[{week:1,topic:"Linux & Shell Scripting",focus:"Command Line, Bash Scripts, System Administration",hours:22,dailyTasks:["Day 1-2: Linux fundamentals and file system","Day 3-4: Shell scripting basics","Day 5-6: Process management and networking","Day 7: Automation scripts"],resources:["Linux Journey","Bash Scripting Guide","OverTheWire"],projects:["System monitoring bash script"],assessment:"Write 10 useful automation scripts"},{week:2,topic:"Docker & Containerization",focus:"Containers, Images, Docker Compose",hours:22,dailyTasks:["Day 1-2: Docker basics and images","Day 3-4: Dockerfile best practices","Day 5-6: Docker Compose multi-container apps","Day 7: Containerize full stack application"],resources:["Docker Docs","Docker Mastery Course","Play with Docker"],projects:["Dockerized microservices application"],assessment:"Containerize and deploy an application"},{week:3,topic:"Kubernetes Fundamentals",focus:"Pods, Services, Deployments, ConfigMaps",hours:22,dailyTasks:["Day 1-2: Kubernetes architecture","Day 3-4: Pods and Services","Day 5-6: Deployments and scaling","Day 7: Deploy app to Kubernetes"],resources:["Kubernetes Docs","KodeKloud","Kubernetes the Hard Way"],projects:["Deploy microservices on K8s cluster"],assessment:"Pass CKA practice exam"},{week:4,topic:"CI/CD Pipelines",focus:"GitHub Actions, Jenkins, GitLab CI",hours:21,dailyTasks:["Day 1-2: Git workflows and branching","Day 3-4: GitHub Actions basics","Day 5-6: Build complete CI/CD pipeline","Day 7: Automated testing and deployment"],resources:["GitHub Actions Docs","Jenkins Tutorial","GitLab CI"],projects:["Full CI/CD pipeline with tests and deployment"],assessment:"Set up automated deployment pipeline"},{week:5,topic:"Infrastructure as Code",focus:"Terraform, Ansible, Cloud Provisioning",hours:22,dailyTasks:["Day 1-2: Terraform basics","Day 3-4: Provision AWS infrastructure","Day 5-6: Ansible configuration management","Day 7: Complete IaC project"],resources:["Terraform Docs","HashiCorp Learn","Ansible Docs"],projects:["Provision cloud infrastructure with Terraform"],assessment:"Deploy infrastructure using IaC"},{week:6,topic:"Monitoring & Interview Prep",focus:"Prometheus, Grafana, System Design",hours:21,dailyTasks:["Day 1-2: Prometheus monitoring","Day 3-4: Grafana dashboards","Day 5: DevOps system design","Day 6-7: Mock interviews"],resources:["Prometheus Docs","Grafana Tutorials","Pramp"],projects:["Complete monitoring stack"],assessment:"Complete 3 DevOps mock interviews"}]}},xn={Development:["Frontend Developer","Backend Developer","Full Stack Developer","Mobile Developer"],"Data & Analytics":["Data Analyst","Data Scientist","ML Engineer","Business Analyst"],Infrastructure:["DevOps Engineer","Cloud Architect","System Administrator"],"Quality & Security":["QA Engineer","Security Engineer"],"Design & Product":["UI/UX Designer","Product Manager","Technical Writer"]};function Cn(){var p;const[t,s]=m.useState(""),[i,o]=m.useState(""),[n,r]=m.useState(!1),[l,b]=m.useState(new Set([1])),[c,u]=m.useState(new Set),[S,f]=m.useState(!0),y=()=>{(i||t)&&(r(!0),b(new Set([1])))},v=a=>{const h=new Set(l);h.has(a)?h.delete(a):h.add(a),b(h)},C=a=>{const h=new Set(c);h.has(a)?h.delete(a):h.add(a),u(h)},O=i||t,d=Q[O]||Q["Frontend Developer"],k=c.size/(((p=d.weeks)==null?void 0:p.length)||6)*100;return n?e.jsxs("div",{className:"study-plan-container",children:[e.jsxs("div",{className:"roadmap-header",children:[e.jsxs("div",{className:"header-content",children:[e.jsx("button",{className:"back-link",onClick:()=>r(!1),children:"← Back to Role Selection"}),e.jsxs("h1",{children:[O," Study Roadmap"]}),e.jsx("p",{className:"roadmap-description",children:d.description})]}),e.jsxs("div",{className:"roadmap-stats",children:[e.jsxs("div",{className:"stat-card",children:[e.jsx(H,{size:20}),e.jsxs("div",{children:[e.jsx("span",{className:"stat-label",children:"Duration"}),e.jsx("span",{className:"stat-value",children:d.duration})]})]}),e.jsxs("div",{className:"stat-card",children:[e.jsx(_,{size:20}),e.jsxs("div",{children:[e.jsx("span",{className:"stat-label",children:"Total Hours"}),e.jsxs("span",{className:"stat-value",children:[d.totalHours,"h"]})]})]}),e.jsxs("div",{className:"stat-card",children:[e.jsx(re,{size:20}),e.jsxs("div",{children:[e.jsx("span",{className:"stat-label",children:"Difficulty"}),e.jsx("span",{className:"stat-value",children:d.difficulty})]})]}),e.jsxs("div",{className:"stat-card",children:[e.jsx(ie,{size:20}),e.jsxs("div",{children:[e.jsx("span",{className:"stat-label",children:"Progress"}),e.jsxs("span",{className:"stat-value",children:[Math.round(k),"%"]})]})]})]}),k>0&&e.jsxs("div",{className:"progress-bar-container",children:[e.jsx("div",{className:"progress-bar",children:e.jsx("div",{className:"progress-fill",style:{width:`${k}%`}})}),e.jsxs("span",{className:"progress-text",children:[c.size," of ",d.weeks.length," weeks completed"]})]})]}),e.jsx("div",{className:"weeks-container",children:d.weeks.map(a=>{const h=l.has(a.week),w=c.has(a.week);return e.jsxs("div",{className:`week-card ${w?"completed":""}`,children:[e.jsxs("div",{className:"week-header",onClick:()=>v(a.week),children:[e.jsxs("div",{className:"week-title-section",children:[e.jsx("div",{className:"week-number",children:a.week}),e.jsxs("div",{className:"week-info",children:[e.jsxs("h3",{children:["Week ",a.week,": ",a.topic]}),e.jsx("p",{className:"week-focus",children:a.focus}),e.jsx("div",{className:"week-meta",children:e.jsxs("span",{className:"meta-item",children:[e.jsx(H,{size:14})," ",a.hours," hours"]})})]})]}),e.jsxs("div",{className:"week-actions",children:[e.jsxs("button",{className:`complete-button ${w?"completed":""}`,onClick:T=>{T.stopPropagation(),C(a.week)},children:[e.jsx(E,{size:18}),w?"Completed":"Mark Complete"]}),e.jsx("button",{className:"expand-button",children:h?e.jsx(bt,{size:20}):e.jsx(Ce,{size:20})})]})]}),h&&e.jsxs("div",{className:"week-details",children:[e.jsxs("div",{className:"detail-section",children:[e.jsxs("h4",{children:[e.jsx(dt,{size:16})," Daily Breakdown"]}),e.jsx("ul",{className:"task-list",children:a.dailyTasks.map((T,I)=>e.jsx("li",{children:T},I))})]}),e.jsxs("div",{className:"detail-section",children:[e.jsxs("h4",{children:[e.jsx(en,{size:16})," Learning Resources"]}),e.jsx("div",{className:"resource-tags",children:a.resources.map((T,I)=>e.jsx("span",{className:"resource-tag",children:T},I))})]}),e.jsxs("div",{className:"detail-section",children:[e.jsxs("h4",{children:[e.jsx(_,{size:16})," Projects"]}),e.jsx("ul",{className:"project-list",children:a.projects.map((T,I)=>e.jsx("li",{children:T},I))})]}),e.jsxs("div",{className:"detail-section assessment-section",children:[e.jsxs("h4",{children:[e.jsx(ie,{size:16})," Week Assessment"]}),e.jsx("p",{className:"assessment-text",children:a.assessment})]})]})]},a.week)})}),e.jsx("div",{className:"roadmap-footer",children:e.jsxs("div",{className:"footer-content",children:[e.jsx("h3",{children:"Ready to start a different path?"}),e.jsx("p",{children:"Generate a new roadmap for another role"}),e.jsx("button",{className:"regenerate-button",onClick:()=>{r(!1),u(new Set),b(new Set([1]))},children:"Generate New Roadmap"})]})})]}):e.jsxs("div",{className:"study-plan-container",children:[e.jsxs("header",{className:"study-plan-header",children:[e.jsx("h1",{children:"Personalized Study Roadmap"}),e.jsx("p",{children:"Generate a structured 6-week plan tailored to your target role"})]}),e.jsxs("div",{className:"role-selection-card",children:[e.jsxs("div",{className:"selection-header",children:[e.jsx("h3",{children:"Select Your Target Role"}),e.jsx("p",{children:"Choose from popular roles or enter a custom role"})]}),S?e.jsx("div",{className:"role-categories",children:Object.entries(xn).map(([a,h])=>e.jsxs("div",{className:"category-section",children:[e.jsx("h4",{className:"category-title",children:a}),e.jsx("div",{className:"role-grid",children:h.map(w=>e.jsxs("button",{className:`role-button ${t===w?"active":""}`,onClick:()=>{s(w),o("")},children:[e.jsx("span",{className:"role-name",children:w}),Q[w]&&e.jsxs("span",{className:"role-badge",children:[Q[w].totalHours,"h"]})]},w))})]},a))}):null,e.jsxs("div",{className:"custom-role-input",children:[e.jsx("label",{children:"Or enter a custom role"}),e.jsx("input",{type:"text",placeholder:"e.g., Machine Learning Engineer, Blockchain Developer...",value:i,onChange:a=>{o(a.target.value),s("")},className:"role-input"})]}),e.jsxs("button",{className:"generate-button",onClick:y,disabled:!t&&!i,children:["Generate Roadmap ",e.jsx(oe,{size:20})]})]})]})}const On={"dynamic-programming":{id:"dynamic-programming",title:"Dynamic Programming Patterns",difficulty:"Hard",category:"DSA",time:"45 min",description:"Master the most common DP patterns used in FAANG interviews",overview:"Dynamic Programming (DP) is an optimization technique for solving complex problems by breaking them down into simpler subproblems. It is essential for top-tier coding interviews, as it tests your ability to optimize recursive solutions.",keyPoints:["Understanding Overlapping Subproblems & Optimal Substructure","Mastering Recursion + Memoization (Top-Down)","Mastering Iterative Tabulation (Bottom-Up)","Space Optimization Techniques (State Compression)"],sections:[{title:"1. Introduction to DP",content:`Dynamic Programming is more than just "recursion with caching". It's a way of thinking about problems in terms of states and transitions.

**Core Concepts:**

1. **Optimal Substructure:**
The optimal solution to the main problem can be constructed from optimal solutions of its subproblems.
*Example: Shortest Path in a graph.*

2. **Overlapping Subproblems:**
The problem can be broken down into subproblems which are reused several times.
*Example: Fibonacci numbers where fib(n) calls fib(n-1) and fib(n-2).*

**The DP Framework:**
1. Define the state (what defines a subproblem?)
2. Formulate the recurrence relation (transitions)
3. Identify base cases
4. Decide on Memoization or Tabulation`},{title:"2. Top 5 DP Patterns",content:`**1. 1D DP (Fibonacci Style)**
Problems where the current state depends on the previous few states.
- **Problems**: Climbing Stairs, House Robber, Domino Tiling
- **Relation**: \`dp[i] = dp[i-1] + dp[i-2]\`

**2. 0/1 Knapsack Pattern**
Deciding whether to include an item or not to maximize value under constraint.
- **Problems**: Subset Sum, Partition Equal Subset Sum
- **State**: \`dp[index][current_capacity]\`

**3. Unbounded Knapsack**
Similar to 0/1, but items can be picked multiple times.
- **Problems**: Coin Change, Rod Cutting
- **Relation**: Iterate through all items for every capacity.

**4. Longest Common Subsequence (LCS)**
Finding the longest subsequence present in two strings.
- **Problems**: Edit Distance, Longest Palindromic Subsequence
- **Relation**: If characters match: \`1 + dp[i-1][j-1]\`, else \`max(dp[i-1][j], dp[i][j-1])\`

**5. Longest Increasing Subsequence (LIS)**
Finding the longest subsequence where elements are sorted.
- **Problems**: Russian Doll Envelopes
- **Optimized**: Can be solved in O(N log N) using patience sorting.`},{title:"3. Deep Dive: State Compression",content:"Often, you don't need the entire DP table.\n\n**Space Optimization:**\nIn Fibonacci, `dp[i]` only depends on `dp[i-1]` and `dp[i-2]`.\nInstead of storing array `dp[n]` (Space O(N)), we can just keep two variables `prev` and `curr` (Space O(1)).\n\n**When to Apply:**\n- If `dp[i][j]` depends only on row `i-1`, you can reduce space from O(N*M) to O(M) using two rows (current and previous)."},{title:"4. Common Interview Questions",content:`**Q1: How do you decide between Greedy and DP?**
- **Answer**: Greedy makes the locally optimal choice at each step. If this leads to the global optimum (proof required), use Greedy (faster). If you need to explore *all* possibilities or if local choice doesn't guarantee global optimum, use DP.

**Q2: What is the difference between Top-Down and Bottom-Up?**
- **Top-Down (Memoization)**: Recursive, lazy evaluation (only computes needed states), prone to stack overflow.
- **Bottom-Up (Tabulation)**: Iterative, eager evaluation (computes all states), better space optimization.

**Q3: Can every recursive solution be optimized with DP?**
- **Answer**: No. Only if it has *Overlapping Subproblems*. If subproblems are unique (like Merge Sort), DP adds no value.`},{title:"5. Advanced Concepts: Profile DP",content:`**Profile Dynamic Programming** (Broken Profile DP) is a technique used to solve tiling-like problems on a grid.
- **State**: \`dp[col][mask]\`.
- **Mask**: Represents the state of the current column (filled/empty).
- **Transitions**: Try all ways to fill the current column compatible with the previous column's mask.
- **Complexity**: O(N * 2^M) where M is row count (usually small, <= 10).`}],practiceProblems:[{title:"Climbing Stairs",difficulty:"Easy",link:"https://leetcode.com/problems/climbing-stairs/"},{title:"House Robber",difficulty:"Medium",link:"https://leetcode.com/problems/house-robber/"},{title:"Coin Change",difficulty:"Medium",link:"https://leetcode.com/problems/coin-change/"},{title:"Longest Increasing Subsequence",difficulty:"Medium",link:"https://leetcode.com/problems/longest-increasing-subsequence/"},{title:"Edit Distance",difficulty:"Hard",link:"https://leetcode.com/problems/edit-distance/"},{title:"Target Sum",difficulty:"Medium",link:"https://leetcode.com/problems/target-sum/"},{title:"Decode Ways",difficulty:"Medium",link:"https://leetcode.com/problems/decode-ways/"},{title:"Unique Paths",difficulty:"Medium",link:"https://leetcode.com/problems/unique-paths/"},{title:"Word Break",difficulty:"Medium",link:"https://leetcode.com/problems/word-break/"}],resources:[{title:"Best DSA concepts for FAANG",type:"PDF",link:"/PLACEMENT NOTES/Best DSA concepts for FAANG.pdf"},{title:"DSA Complete Theory Notes",type:"PDF",link:"/PLACEMENT NOTES/DSA in python complete theory hand writing notes (1).pdf"}],videos:[{title:"Dynamic Programming - Learn to Solve Algorithmic Problems",link:"https://www.youtube.com/watch?v=oBt53YbR9Kk",channel:"freeCodeCamp"},{title:"5 Simple Steps for Solving Dynamic Programming Problems",link:"https://www.youtube.com/watch?v=aPQY__2H3tE",channel:"Reducible"},{title:"Master 1D Dynamic Programming",link:"https://www.youtube.com/watch?v=73r3KWiEvyk",channel:"NeetCode"},{title:"Dynamic Programming Patterns for Interviews",link:"https://www.youtube.com/watch?v=mBnqc_hX4QQ",channel:"Tushar Roy"},{title:"Algorithms: Memoization and Dynamic Programming",link:"https://www.youtube.com/watch?v=P8Xa2Bit4U8",channel:"HackerRank"},{title:"Climbing Stairs - Dynamic Programming",link:"https://www.youtube.com/watch?v=Y0lT9Fck7qI",channel:"NeetCode"},{title:"House Robber - LeetCode 198",link:"https://www.youtube.com/watch?v=73r3KWiEvyk",channel:"NeetCode"},{title:"Longest Increasing Subsequence - O(nlogn)",link:"https://www.youtube.com/watch?v=on2hvxBXJH4",channel:"Tushar Roy"},{title:"Coin Change - Dynamic Programming",link:"https://www.youtube.com/watch?v=H9bfqozjoqs",channel:"NeetCode"},{title:"Dynamic Programming Patterns",link:"https://www.youtube.com/watch?v=Hdr64lKQ3e4",channel:"Abdul Bari"}]},"system-design-caching":{id:"system-design-caching",title:"System Design: Caching Strategies",difficulty:"Medium",category:"System Design",time:"30 min",description:"Learn caching strategies to build scalable systems",overview:"Caching is the secret sauce of high-performance distributed systems. It involves storing copies of data in temporary storage locations to reduce easier access speed.",keyPoints:["Cache Placement (Client, CDN, Load Balancer, Distributed)","Eviction Policies (LRU, LFU, FIFO, ARC)","Write Policies (Write-Through, Write-Back, Write-Around)","Handling Cache Coherence & Thundering Herds"],sections:[{title:"1. Why Caching?",content:`Accessing data from memory is orders of magnitude faster than disk or network calls.

**Latency Numbers to Know:**
- **L1 Cache**: ~1-2 ns
- **RAM**: ~100 ns
- **SSD**: ~150,000 ns
- **Network Round-trip**: ~500,000 ns`},{title:"2. Cache Eviction Policies",content:`When the cache is full, what do we delete?

**1. LRU (Least Recently Used)**
- Removes the item that hasn't been accessed for the longest time.
- **Use Case**: Social media feeds.

**2. LFU (Least Frequently Used)**
- Removes the item with the fewest access counts.
- **Use Case**: Analytics, historical logs.

**3. TTL (Time to Live)**
- Automatically expires data after X seconds.
- **Use Case**: Session data, OTPs.`},{title:"3. Deep Dive: Facebook TAO",content:`**Problem**: Facebook has billions of reads/sec for the social graph. Direct DB hits are impossible.

**Solution**: TAO (The Association Object).
- A write-through cache backed by MySQL.
- **Leaders & Followers**: Writes go to Leader cache (and DB). Followers serve reads.
- **Result**: 99.8% Read hit rate. Shows the power of a specialized caching layer.`},{title:"4. Common Interview Questions",content:`**Q1: What is Cache Stampede (Thundering Herd) and how to fix it?**
- **Problem**: A popular key expires, and thousands of requests hit the DB at once.
- **Fix**: 
    - **Locking**: Only 1 process computes the value, others wait.
    - **Probabilistic Early Expiration**: Refresh before the actual TTL expires (e.g., if TTL < 5s, 10% chance to recompute).

**Q2: Redis vs Memcached?**
- **Redis**: Rich data types (Lists, Sets), Persistence (RDB/AOF), Pub/Sub, Cluster mode.
- **Memcached**: Simple Key-Value, Multi-threaded (better vertical scaling for simple KV), transient.

**Q3: Where should I place the cache?**
- **Edge (CDN)**: Static assets.
- **API Gateway**: Response caching.
- **App Side**: Local objects (Fastest, but coherent issues).
- **Distributed (Redis)**: Shared state across services.`},{title:"5. Advanced: Consistent Hashing",content:`**Problem**: In distributed caching (N servers), if we use \`hash(key) % N\`, adding/removing a server re-shuffles ALL keys.
- **Solution**: Consistent Hashing (Ring).
- Keys and Servers are hashed onto a circle (0-360 degrees).
- A key is assigned to the first server found moving clockwise.
- **Impact**: Adding a node only redistributes ~1/N keys.
- **Virtual Nodes**: Used to balance load more evenly.`}],practiceProblems:[{title:"LRU Cache Implementation",difficulty:"Medium",link:"https://leetcode.com/problems/lru-cache/"},{title:"Design a Cache System",difficulty:"Hard",link:"https://www.geeksforgeeks.org/design-a-cache-system/"},{title:"Implement LFU Cache",difficulty:"Hard",link:"https://leetcode.com/problems/lfu-cache/"},{title:"Design Twitter Feed",difficulty:"Hard",link:"https://leetcode.com/discuss/interview-question/system-design/124619/Design-Twitter-Feed"},{title:"Design TinyURL",difficulty:"Medium",link:"https://leetcode.com/discuss/interview-question/124658/Design-a-URL-Shortener-(-TinyURL-)-System"},{title:"Consistent Hashing",difficulty:"Hard",link:"https://www.geeksforgeeks.org/consistent-hashing-implementation/"}],resources:[{title:"System Design Basics",type:"PDF",link:"/PLACEMENT NOTES/System Design Basics.pdf"}],videos:[{title:"Caching - System Design",link:"https://www.youtube.com/watch?v=U3RkDLtS7uY",channel:"Gaurav Sen"},{title:"System Design Primer: Caching",link:"https://www.youtube.com/watch?v=6du2q-4x3-Q",channel:"ByteByteGo"},{title:"Redis Crash Course",link:"https://www.youtube.com/watch?v=jgpVdJB2sKQ",channel:"Traversy Media"},{title:"Memcached vs Redis",link:"https://www.youtube.com/watch?v=R3Lp6741UQE",channel:"Hussein Nasser"},{title:"What is a CDN?",link:"https://www.youtube.com/watch?v=RI9np1LWzqw",channel:"Cloudflare"},{title:"Cache Eviction Policies (LRU, LFU)",link:"https://www.youtube.com/watch?v=xDEuM580kWg",channel:"Gaurav Sen"},{title:"Thundering Herd Problem (Cache Stampede)",link:"https://www.youtube.com/watch?v=78DlbHj53nA",channel:"System Design Interview"},{title:"Distributed Caching Explained",link:"https://www.youtube.com/watch?v=iuqZvajTOyA",channel:"CodeKarle"},{title:"Facebook TAO (The Association Object)",link:"https://www.youtube.com/watch?v=s19G6n01hS0",channel:"Facebook Engineering"},{title:"Write-Through vs Write-Back Caching",link:"https://www.youtube.com/watch?v=2X0R_E3gW-Y",channel:"System Design"}]},"react-performance":{id:"react-performance",title:"React Performance Optimization",difficulty:"Medium",category:"Web Dev",time:"25 min",description:"Optimize React apps for production-level performance",overview:"A performant UI is key to user retention. In React, performance optimization revolves around minimizing renders and managing the main thread effectively.",keyPoints:["Understanding the Render Cycle","Immutability & State Management","Code Splitting & Lazy Loading","React 18 Concurrent Features"],sections:[{title:"1. The Rendering Process",content:`React uses a Virtual DOM to minimize direct DOM manipulation.
**Phases:**
1. **Render Phase**: React calls your components and differentiates the old/new VDOM.
2. **Commit Phase**: React applies changes to the real DOM.

**The Rule**: A component re-renders if its State or Props change, or if its Parent re-renders.`},{title:"2. Memoization Deep Dive",content:`**React.memo()**
HOC that prevents a child from re-rendering if props haven't changed.

**useCallback()**
Freezes a function reference.
\`\`\`javascript
const handleClick = useCallback(() => { ... }, []);
\`\`\`

**useMemo()**
Caches the *result* of a calculation.
\`\`\`javascript
const sorted = useMemo(() => data.sort(), [data]);
\`\`\``},{title:"3. Deep Dive: React Fiber",content:`Prior to React 16, the reconciliation algorithm (Stack) was synchronous and could block the main thread.

**Fiber Architecture:**
- Breaks rendering work into small units of work ("fibers").
- **Time Slicing**: Can pause work to let the browser paint, then resume.
- Enables **Concurrent Mode** features like \`useTransition\` and \`Suspense\`.`},{title:"4. Common Interview Questions",content:`**Q1: What is the Virtual DOM?**
- It's a lightweight JavaScript representation of the DOM. React updates this VDOM first, diffs it with the previous version (Reconciliation), and batch updates the real DOM (Commit) for performance.

**Q2: Why is the 'key' prop important in lists?**
- Keys help React identify which items have changed, added, or removed. Without keys (or using index), React may re-create DOM nodes unnecessarily or mess up component state (e.g., input focus).

**Q3: Does \`setState\` always trigger a re-render?**
- Generally yes. However, if you set state to the *same* primitive value (e.g., \`setCount(5)\` when count is 5), React's bailout mechanism skips the render.`},{title:"5. Advanced: Concurrent Features",content:"**useTransition** and **useDeferredValue** allow you to mark updates as non-urgent.\n- **useTransition**: Wraps state updates. `startTransition(() => setSearch(input))`. Keeps the UI responsive while filtering a list.\n- **useDeferredValue**: Defers a value itself. `const deferredQuery = useDeferredValue(query)`.\n- **Suspense for Data Fetching**: Pause rendering until data is ready (standardized in Next.js/React Server Components)."}],practiceProblems:[{title:"Optimize Re-renders",difficulty:"Medium",link:"https://react.dev/reference/react/memo"},{title:"Implement Virtual Scrolling",difficulty:"Hard",link:"https://github.com/bvaughn/react-window"},{title:"Code Split a Large App",difficulty:"Medium",link:"https://react.dev/reference/react/lazy"},{title:"Fix Context Re-renders",difficulty:"Hard",link:"https://github.com/facebook/react/issues/15156"},{title:"Implement Debounce Hook",difficulty:"Medium",link:"https://usehooks.com/useDebounce/"},{title:"Implement Throttle Hook",difficulty:"Medium",link:"https://usehooks.com/useThrottle/"}],resources:[{title:"React Handwritten Notes",type:"PDF",link:"/PLACEMENT NOTES/React-Handwritten-notes.pdf"},{title:"30 Days of React eBook",type:"PDF",link:"/PLACEMENT NOTES/30-days-of-react-ebook-fullstackio.pdf"}],videos:[{title:"React Performance Optimization",link:"https://www.youtube.com/watch?v=lAlOo1ft2gk",channel:"Ben Awad"},{title:"React Memo, callback, and memoization",link:"https://www.youtube.com/watch?v=ucc4CJ51rP8",channel:"Codevolution"},{title:"UseMemo and UseCallback Explained",link:"https://www.youtube.com/watch?v=vpE9I_eqHdM",channel:"Web Dev Simplified"},{title:"React 18 Concurrency and Performance",link:"https://www.youtube.com/watch?v=MicF_elK680",channel:"React Conf"},{title:"Code Splitting in React",link:"https://www.youtube.com/watch?v=33D3x8bF8A0",channel:"Traversy Media"},{title:"Optimizing Re-renders in React",link:"https://www.youtube.com/watch?v=75XmHauQNdA",channel:"Fireship"},{title:"Virtual DOM Explained",link:"https://www.youtube.com/watch?v=BYbgopx44vo",channel:"Programming with Mosh"},{title:"React Fiber Architecture",link:"https://www.youtube.com/watch?v=ZCuYPiUIONs",channel:"Lin Clark"},{title:"Profiling React Applications",link:"https://www.youtube.com/watch?v=hB7q-dDmwQY",channel:"Ben Awad"},{title:"React Suspense and Lazy Loading",link:"https://www.youtube.com/watch?v=5LvGe3wR2K4",channel:"The Net Ninja"}]},"database-indexing":{id:"database-indexing",title:"Database Indexing Strategies",difficulty:"Hard",category:"DBMS",time:"40 min",description:"Master database indexing for query optimization",overview:"An index is a pointer to data. Without it, the database must scan every single row (Full Table Scan) to find what you asked for. Indexing is the single most effective way to tune SQL performance.",keyPoints:["B-Tree vs Hash vs Gin Indexes","Clustered vs Non-Clustered Indexes","Composite Indexes & Selectivity","Explain Analyze & Query Cost"],sections:[{title:"1. How B-Trees Work",content:"Most default indexes (MySQL/Postgres) use Balanced Trees (B-Trees).\n- **Lookup**: O(log N).\n- **Range Queries**: Excellent support for `> `, `<`, `BETWEEN`.\n\n**Hash Index**:\n- O(1) lookup but supports *only* exact matches (`=`). No range queries."},{title:"2. Clustered vs Non-Clustered",content:`**Clustered Index (The Book)**
- The data *is* the index. Rows are sorted on disk.
- **Limit**: Only ONE per table.

**Non-Clustered Index (The Appendix)**
- Contains keys and a pointer to the row address.
- **Limit**: Can have many.`},{title:"3. Deep Dive: Postgres Vacuum & MVCC",content:`**MVCC (Multi-Version Concurrency Control)**:
- When you Update/Delete a row in Postgres, it doesn't delete it immediately. It marks it as "dead" and creates a new version.
- This allows readers to see the old version while a writer updates it (No Locking).

**Vacuum**:
- The process that cleans up "dead tuples" to reclaim space.
- **Bloat**: If Vacuum doesn't run, the table grows indefinitely with dead rows, slowing scans.`},{title:"4. Common Interview Questions",content:`**Q1: What columns should you index?**
- Columns used frequently in \`WHERE\`, \`JOIN\`, and \`ORDER BY\`.
- Columns with high cardinality (many unique values).

**Q2: Why not index every column?**
- **Write Penalty**: Every INSERT/UPDATE requires updating all indexes.
- **Space**: Indexes consume disk and RAM.

**Q3: What is a Composite Index?**
- An index on multiple columns \`(A, B)\`.
- Useful for queries like \`WHERE A=1 AND B=2\`.
- **Note**: Remember the Leftmost Prefix Rule.`},{title:"5. Advanced: Bitmap Indexes & Bloom Filters",content:`**Bitmap Index**:
- Uses bits (0/1) for low-cardinality columns (e.g., Gender, Status).
- Very fast for combining conditions (AND/OR/XOR operations on bitmaps).
- **Use Case**: Data Warehousing (OLAP).

**Bloom Filters**:
- Probabilistic data structure.
- "Definitely No" or "Maybe Yes".
- Used in databases (LSM Trees like Cassandra/RocksDB) to avoid disk lookups for non-existent keys.`}],practiceProblems:[{title:"Design Optimal Indexes",difficulty:"Hard",link:"https://www.w3resource.com/sql-exercises/movie-database-exercise/index.php"},{title:"Query Optimization",difficulty:"Medium",link:"https://www.geeksforgeeks.org/sql-query-optimization/"},{title:"Index vs Full Table Scan",difficulty:"Medium",link:"https://www.geeksforgeeks.org/indexing-in-databases-set-1/"},{title:"Analyze Explain Plan",difficulty:"Hard",link:"https://use-the-index-luke.com/sql/explain-plan"},{title:"Schema Design for Scale",difficulty:"Hard",link:"https://stackoverflow.com/questions/35532296/sql-schema-design-for-scalability"}],resources:[{title:"DBMS Notes",type:"PDF",link:"/PLACEMENT NOTES/DBMS_Notes (2).pdf"},{title:"SQL Notes",type:"PDF",link:"/PLACEMENT NOTES/SQL (notes) (1) (1).pdf"}],videos:[{title:"Database Indexing Explained",link:"https://www.youtube.com/watch?v=HmvnQCknZec",channel:"Hussein Nasser"},{title:"Clustered vs Non-Clustered Indexes",link:"https://www.youtube.com/watch?v=NfD9f1x-h3I",channel:"Kudvenkat"},{title:"B-Tree Indexing in Databases",link:"https://www.youtube.com/watch?v=aZjYr87r1b8",channel:"Art of the Problem"},{title:"SQL Indexing for Beginners",link:"https://www.youtube.com/watch?v=Fs9G9_Q785M",channel:"Alex The Analyst"},{title:"How Database B-Tree Indexing Works",link:"https://www.youtube.com/watch?v=NIq3qLaHCIs",channel:"ByteByteGo"},{title:"Composite Indexes in SQL",link:"https://www.youtube.com/watch?v=3pDCDg_aZJk",channel:"Pinal Dave"},{title:"PostgreSQL Vaccum Explained",link:"https://www.youtube.com/watch?v=2X0R_E3gW-Y",channel:"Hussein Nasser"},{title:"Explain Analyze in Postgres",link:"https://www.youtube.com/watch?v=4Z9_3q4w0w0",channel:"Postgres TV"},{title:"Database Internals: Indexing",link:"https://www.youtube.com/watch?v=0s3-3g3-3g3",channel:"CMU Database Group"},{title:"Optimizing SQL Queries with Indexes",link:"https://www.youtube.com/watch?v=bhck1l10-18",channel:"MySQL"}]}},In=({content:t})=>{const s=o=>o.split(/(\*\*.*?\*\*|`.*?`)/g).map((r,l)=>r.startsWith("**")&&r.endsWith("**")?e.jsx("strong",{children:r.slice(2,-2)},l):r.startsWith("`")&&r.endsWith("`")?e.jsx("code",{children:r.slice(1,-1)},l):r),i=t.split(/(```[\s\S]*?```)/g);return e.jsx("div",{className:"section-content",children:i.map((o,n)=>{if(o.startsWith("```")&&o.endsWith("```")){const u=o.match(/```(\w+)?\n([\s\S]*?)```/),S=u?u[1]:"",f=u?u[2]:o.slice(3,-3);return e.jsx("pre",{children:e.jsx("code",{className:`language-${S}`,children:f.trim()})},n)}if(!o.trim())return null;const r=o.split(`
`);let l=!1,b=[];const c=[];return r.forEach((u,S)=>{u.trim().startsWith("- ")||u.trim().startsWith("* ")?(l||(l=!0),b.push(u.trim().substring(2))):(l&&(c.push(e.jsx("ul",{children:b.map((y,v)=>e.jsx("li",{children:s(y)},v))},`${n}-list-${S}`)),b=[],l=!1),u.trim()&&c.push(e.jsx("p",{style:{marginBottom:12},children:s(u)},`${n}-p-${S}`)))}),l&&c.push(e.jsx("ul",{children:b.map((u,S)=>e.jsx("li",{children:s(u)},S))},`${n}-list-end`)),c})})};function Pn(){const{topicId:t}=Dt(),s=it(),i=On[t];if(!i)return e.jsx("div",{className:"topic-detail-container",children:e.jsxs("div",{style:{textAlign:"center",padding:60,color:"white"},children:[e.jsx("h2",{children:"Topic Not Found"}),e.jsx("br",{}),e.jsx(M,{to:"/dashboard",className:"back-btn",children:"← Back to Dashboard"})]})});const o=()=>{alert(`Congratulations! You've completed "${i.title}" and earned 50 XP!`)};return e.jsx("div",{className:"topic-detail-container",children:e.jsxs("div",{className:"max-w-wrapper",children:[e.jsxs("div",{className:"topic-header glass-card",style:{marginTop:24},children:[e.jsxs("button",{onClick:()=>s("/dashboard"),className:"back-btn",children:[e.jsx(ct,{size:18})," Back to Dashboard"]}),e.jsxs("div",{className:"topic-title-section",children:[e.jsx("h1",{className:"topic-title",children:i.title}),e.jsx("p",{className:"topic-description",children:i.description})]}),e.jsxs("div",{className:"topic-meta",children:[e.jsx("span",{className:`meta-badge badge-${i.difficulty==="Hard"?"orange":i.difficulty==="Medium"?"blue":"green"}`,children:i.difficulty}),e.jsx("span",{className:"meta-badge badge-purple",children:i.category}),e.jsxs("span",{style:{display:"flex",alignItems:"center",gap:6,fontSize:13,color:"var(--text-secondary)",fontWeight:600},children:[e.jsx(H,{size:14})," ",i.time]})]})]}),e.jsxs("div",{className:"glass-card",style:{marginBottom:32},children:[e.jsxs("h3",{style:{margin:"0 0 16px 0",fontSize:18,fontWeight:700,display:"flex",alignItems:"center",gap:8,color:"var(--text-main)"},children:[e.jsx(ie,{size:20,className:"text-primary"})," What You'll Learn"]}),e.jsx("p",{style:{margin:"0 0 24px 0",lineHeight:1.8,color:"var(--text-secondary)"},children:i.overview}),e.jsx("div",{className:"section-content",children:e.jsx("ul",{children:i.keyPoints.map((n,r)=>e.jsx("li",{children:n},r))})})]}),e.jsx("div",{className:"topic-content",children:i.sections.map((n,r)=>e.jsxs("div",{className:"content-section glass-card",children:[e.jsx("h2",{className:"section-title",children:n.title}),e.jsx(In,{content:n.content})]},r))}),e.jsxs("div",{className:"topic-sidebar-layout",children:[e.jsxs("div",{className:"sidebar-section",children:[e.jsx("h3",{children:"Practice Problems"}),e.jsx("div",{style:{display:"flex",flexDirection:"column",gap:12},children:i.practiceProblems.map((n,r)=>e.jsx("a",{href:n.link,target:"_blank",rel:"noopener noreferrer",className:"practice-card-item",children:e.jsxs("div",{style:{display:"flex",justifyContent:"space-between",alignItems:"center"},children:[e.jsx("span",{style:{fontWeight:600,fontSize:15},children:n.title}),e.jsx("span",{className:`meta-badge badge-${n.difficulty==="Hard"?"orange":n.difficulty==="Medium"?"blue":"green"}`,style:{fontSize:11},children:n.difficulty})]})},r))})]}),e.jsxs("div",{className:"sidebar-section",children:[e.jsx("h3",{children:"Resources"}),e.jsx("div",{style:{display:"flex",flexDirection:"column",gap:12},children:i.resources.map((n,r)=>e.jsx("a",{href:n.link,target:"_blank",rel:"noopener noreferrer",className:"resource-card-item",children:e.jsxs("div",{style:{display:"flex",alignItems:"center",gap:16},children:[e.jsx("div",{className:"resource-icon-wrapper",children:e.jsx(N,{size:20})}),e.jsxs("div",{style:{flexGrow:1},children:[e.jsx("div",{style:{fontWeight:600,fontSize:15,marginBottom:4},children:n.title}),e.jsx("div",{style:{fontSize:13,color:"var(--text-muted)"},children:n.type})]}),e.jsx(R,{size:16,color:"var(--text-muted)"})]})},r))}),e.jsxs("button",{onClick:o,className:"complete-btn",style:{marginTop:32},children:[e.jsx(E,{size:20})," Mark as Complete"]})]})]}),i.videos&&i.videos.length>0&&e.jsxs("div",{className:"glass-card",style:{marginTop:32},children:[e.jsxs("h3",{style:{margin:"0 0 20px 0",fontSize:18,fontWeight:700,display:"flex",alignItems:"center",gap:8,color:"var(--text-main)"},children:[e.jsx(se,{size:20,className:"text-secondary"})," Video Tutorials"]}),e.jsx("div",{className:"video-grid",style:{display:"grid",gridTemplateColumns:"repeat(auto-fill, minmax(280px, 1fr))",gap:16},children:i.videos.map((n,r)=>e.jsxs("a",{href:n.link,target:"_blank",rel:"noopener noreferrer",className:"video-card",style:{textDecoration:"none",background:"var(--bg-tertiary)",borderRadius:12,overflow:"hidden",transition:"transform 0.2s",display:"block"},children:[e.jsx("div",{style:{position:"relative",paddingTop:"56.25%",background:"#000"},children:e.jsx("div",{style:{position:"absolute",top:0,left:0,width:"100%",height:"100%",display:"flex",alignItems:"center",justifyContent:"center",color:"#fff",background:`url(https://img.youtube.com/vi/${An(n.link)}/hqdefault.jpg) center/cover no-repeat`},children:e.jsx("div",{style:{background:"rgba(0,0,0,0.6)",borderRadius:"50%",padding:12},children:e.jsx(se,{size:32,fill:"white",stroke:"white"})})})}),e.jsxs("div",{style:{padding:12},children:[e.jsx("h4",{style:{margin:"0 0 4px 0",fontSize:14,fontWeight:600,color:"var(--text-main)",overflow:"hidden",textOverflow:"ellipsis",whiteSpace:"nowrap"},children:n.title}),e.jsx("p",{style:{margin:0,fontSize:12,color:"var(--text-muted)"},children:n.channel||"YouTube"})]})]},r))})]})]})})}function An(t){if(!t)return null;const s=/^.*(youtu.be\/|v\/|u\/\w\/|embed\/|watch\?v=|&v=)([^#&?]*).*/,i=t.match(s);return i&&i[2].length===11?i[2]:null}const jn={frontend:{id:"frontend",title:"Frontend Developer",description:"Comprehensive guide to becoming a modern Frontend Developer.",icon:"⚛️",color:"#3b82f6",estimatedTime:"6-9 Months",category:"Role Based",link:"https://roadmap.sh/frontend",milestones:[{id:"fe_1",title:"Internet Fundamentals",difficulty:"Beginner",estimatedHours:10,content:"Before writing code, you must understand how the web works. Key concepts include HTTP/HTTPS (the protocol for transferring data), DNS (how domain names map to IPs), and Hosting. Browsers are the engine that renders code; understand how they interpret HTML/CSS.",topics:["HTTP/HTTPS","DNS","Domain Names","Hosting","Browsers"],resources:[{title:"How the Internet Works (MDN)",url:"https://developer.mozilla.org/en-US/docs/Learn/Common_questions/Web_mechanics/How_does_the_Internet_work"}]},{id:"fe_2",title:"HTML: The Skeleton",difficulty:"Beginner",estimatedHours:20,content:"HTML (HyperText Markup Language) provides the structure of web pages. Learn about Semantic HTML (using the right tag for the right job, like <article> vs <div>) which is crucial for SEO and accessibility. Master forms, inputs, and validations.",topics:["Semantic HTML","Forms & Validations","SEO Basics","Accessibility (a11y)"],resources:[]},{id:"fe_3",title:"CSS: Style",difficulty:"Beginner",estimatedHours:40,content:"Master the Box Model, Flexbox, and Grid. Responsive design with Media Queries is mandatory.",topics:["Box Model","Flexbox","Grid"],resources:[]},{id:"fe_4",title:"JavaScript",difficulty:"Intermediate",estimatedHours:60,content:"The programming language of the web. DOM manipulation, Fetch API, and modern ES6+ syntax.",topics:["Variables","Functions","DOM","ES6+"],resources:[]},{id:"fe_9",title:"React",difficulty:"Advanced",estimatedHours:80,content:"The industry standard UI library. Components, Props, State, Hooks.",topics:["React","Hooks","Context"],resources:[]}]},backend:{id:"backend",title:"Backend Developer",description:"Server-side logic, databases, and APIs.",icon:"🖥️",color:"#8b5cf6",estimatedTime:"8-12 Months",category:"Role Based",link:"https://roadmap.sh/backend",milestones:[{id:"be_1",title:"OS & Knowledge",difficulty:"Beginner",estimatedHours:30,content:"Terminal usage, Process management, Basic Networking.",topics:["Terminal","OS","Networking"],resources:[]},{id:"be_2",title:"Languages",difficulty:"Intermediate",estimatedHours:60,content:"Pick one: Node.js, Python, Go, Java, or PHP.",topics:["Languages","Runtimes"],resources:[]},{id:"be_3",title:"Databases",difficulty:"Advanced",estimatedHours:60,content:"Relational (PostgreSQL) and NoSQL (MongoDB). Design schemas.",topics:["SQL","NoSQL","ORM"],resources:[]}]},devops:{id:"devops",title:"DevOps Engineer",description:"Bridge between Development and Operations.",icon:"♾️",color:"#ef4444",estimatedTime:"6-12 Months",category:"Role Based",link:"https://roadmap.sh/devops",milestones:[{id:"ops_1",title:"Linux Fundamentals",difficulty:"Intermediate",estimatedHours:50,content:"Mastering the terminal is step zero. File manipulation (awk, sed, grep), Permissions (chmod, chown), Process management (ps, top, kill), and Networking basics (curl, ssh, netstat).",topics:["Bash","VIM/Nano","Permissions","Networking"],resources:[{title:"Linux Journey",url:"https://linuxjourney.com/"},{title:"Command Line for Beginners",url:"https://ubuntu.com/tutorials/command-line-for-beginners"}]},{id:"ops_2",title:"Git & CI/CD",difficulty:"Intermediate",estimatedHours:40,content:"Version control is essential. Learn Git branching strategies. Then, automate testing and deployment using GitHub Actions or GitLab CI. Understand the pipeline concept: Build -> Test -> Deploy.",topics:["Git Flow","GitHub Actions","Pipelines","Artifacts"],resources:[{title:"Pro Git Book",url:"https://git-scm.com/book/en/v2"},{title:"GitHub Actions",url:"https://docs.github.com/en/actions"}]},{id:"ops_3",title:"Infrastructure as Code (IaC)",difficulty:"Advanced",estimatedHours:60,content:"Terraform is the industry standard. Stop clicking buttons in the AWS console. Define your infrastructure in HCL files. State management is key.",topics:["Terraform","State Files","Modules","Providers"],resources:[{title:"Terraform Intro",url:"https://developer.hashicorp.com/terraform/intro"},{title:"Terraform Best Practices",url:"https://www.terraform-best-practices.com/"}]},{id:"ops_4",title:"Containerization",difficulty:"Advanced",estimatedHours:40,content:"Docker allows consistent environments. Learn how to write Dockerfiles, build images, and optimize layer caching. Understand Multi-stage builds for smaller images.",topics:["Docker","Dockerfiles","Docker Compose","Images"],resources:[{title:"Docker Get Started",url:"https://docs.docker.com/get-started/"},{title:"Docker Curriculum",url:"https://docker-curriculum.com/"}]},{id:"ops_5",title:"Kubernetes (K8s)",difficulty:"Expert",estimatedHours:80,content:"The de-facto orchestrator. Pods, Deployments, Services, Ingres. Understanding the Control Plane vs Worker Nodes. Helm for package management.",topics:["Pods","Kubectl","Helm","Ingress"],resources:[{title:"Kubernetes Basics",url:"https://kubernetes.io/docs/tutorials/kubernetes-basics/"},{title:"Helm Docs",url:"https://helm.sh/docs/"}]},{id:"ops_6",title:"Cloud Providers (AWS)",difficulty:"Advanced",estimatedHours:60,content:"Pick one, mastering AWS is a safe bet. EC2 (Compute), S3 (Storage), VPC (Networking), IAM (Security/Permissions).",topics:["EC2","S3","VPC","IAM"],resources:[{title:"AWS Fundamentals",url:"https://aws.amazon.com/getting-started/fundamentals-core-concepts/"}]},{id:"ops_7",title:"Monitoring & Observability",difficulty:"Advanced",estimatedHours:40,content:"If you can't measure it, you can't improve it. Prometheus for metrics, Grafana for visualization. ELK stack or Loki for logs.",topics:["Prometheus","Grafana","ELK","Alerting"],resources:[{title:"Prometheus Overview",url:"https://prometheus.io/docs/introduction/overview/"},{title:"Grafana Tutorials",url:"https://grafana.com/tutorials/"}]},{id:"ops_8",title:"Networking & Security",difficulty:"Expert",estimatedHours:40,content:"DNS, Load Balancers, Firewalls. Understanding OSI model layers (L4 vs L7 lb). SSL/TLS certificates.",topics:["DNS","Load Balancing","Firewalls","SSL/TLS"],resources:[{title:"How DNS Works",url:"https://howdns.works/"},{title:"SSL/TLS Explained",url:"https://www.cloudflare.com/learning/ssl/what-is-ssl/"}]}]},fullstack:{id:"fullstack",title:"Full Stack Developer",description:"Mastering both ends of the stack.",icon:"🚀",color:"#f59e0b",estimatedTime:"12+ Months",category:"Role Based",link:"https://roadmap.sh/full-stack",milestones:[{id:"fs_1",title:"Frontend (HTML/CSS/JS)",difficulty:"Intermediate",estimatedHours:60,content:"The visual layer. Semantic HTML, CSS Flexbox/Grid, and JavaScript ES6+ (Promises, Async/Await). DOM manipulation.",topics:["HTML5","CSS3","ES6+","DOM"],resources:[{title:"MDN Web Docs",url:"https://developer.mozilla.org/"},{title:"CSS Tricks",url:"https://css-tricks.com/"}]},{id:"fs_2",title:"Frontend Framework (React)",difficulty:"Advanced",estimatedHours:60,content:"Building complex UIs. Components, Hooks, State Management (Redux/Zustand), and Client-side Routing.",topics:["React","Components","Hooks","State"],resources:[{title:"React Documentation",url:"https://react.dev/"},{title:"Redux Toolkit",url:"https://redux-toolkit.js.org/"}]},{id:"fs_3",title:"Backend (Node.js/API)",difficulty:"Advanced",estimatedHours:60,content:"Server-side logic. Building REST APIs with Express.js. Understanding Middleware, Authentication (JWT), and Controllers.",topics:["Node.js","Express","REST API","JWT"],resources:[{title:"Node.js Integration",url:"https://nodejs.org/en/docs/"},{title:"Express.js",url:"https://expressjs.com/"}]},{id:"fs_4",title:"Databases (SQL & NoSQL)",difficulty:"Advanced",estimatedHours:50,content:"Storing data. Relational (PostgreSQL) for structured data, NoSQL (MongoDB) for flexible documents. ORMs like Prisma or Mongoose.",topics:["PostgreSQL","MongoDB","Prisma","SQL"],resources:[{title:"PostgreSQL Docs",url:"https://www.postgresql.org/docs/"},{title:"MongoDB University",url:"https://university.mongodb.com/"}]},{id:"fs_5",title:"Deployment & DevOps Basics",difficulty:"Intermediate",estimatedHours:30,content:"Hosting your app. Vercel/Netlify for frontend, Render/Railway/AWS for backend. Basic CI/CD to deploy on git push.",topics:["Vercel","AWS","CI/CD","Docker"],resources:[{title:"Vercel Deployment",url:"https://vercel.com/docs"},{title:"GitHub Actions",url:"https://docs.github.com/en/actions"}]},{id:"fs_6",title:"System Design Basics",difficulty:"Expert",estimatedHours:40,content:"Scalability. Caching (Redis), Load Balancing, horizontal scaling. Designing simple architectures like URL shortener.",topics:["Caching","Scalability","Architecture","Redis"],resources:[{title:"System Design Primer",url:"https://github.com/donnemartin/system-design-primer"},{title:"Redis Intro",url:"https://redis.io/docs/about/"}]}]},android:{id:"android",title:"Android Developer",description:"Mobile apps for Android.",icon:"🤖",color:"#3ddc84",estimatedTime:"6-8 Months",category:"Role Based",link:"https://roadmap.sh/android",milestones:[{id:"and_1",title:"Kotlin Programming",difficulty:"Intermediate",estimatedHours:50,content:"Kotlin is the primary language for Android. Master Variables, Null Safety (?!), Collections, and Higher-Order Functions. Learn Coroutines for asynchronous programming to keep the UI smooth.",topics:["Basics","Null Safety","Coroutines","Flow"],resources:[{title:"Official Kotlin Docs",url:"https://kotlinlang.org/docs/home.html"},{title:"Kotlin Koans",url:"https://play.kotlinlang.org/koans"}]},{id:"and_2",title:"Android SDK Basics",difficulty:"Intermediate",estimatedHours:40,content:"Understand the building blocks. Activity Lifecycle, Fragments (even with Compose, understanding them helps), Intents for navigation, and the Android Manifest file.",topics:["Activity Lifecycle","Intents","Manifest","Gradle"],resources:[{title:"Activity Lifecycle",url:"https://developer.android.com/guide/components/activities/activity-lifecycle"},{title:"Intents and Filters",url:"https://developer.android.com/guide/components/intents-filters"}]},{id:"and_3",title:"Jetpack Compose",difficulty:"Advanced",estimatedHours:60,content:"The modern UI toolkit. Shift from XML to declarative UI. Learn Composables, State hoisting, Recomposition, and Lazy layouts (LazyColumn/LazyRow).",topics:["Composables","State Management","LazyColumn","Modifiers"],resources:[{title:"Compose Documentation",url:"https://developer.android.com/jetpack/compose"},{title:"Compose Pathway",url:"https://developer.android.com/courses/pathways/compose"}]},{id:"and_4",title:"Navigation & Architecture",difficulty:"Advanced",estimatedHours:40,content:"Building single-activity apps. Navigation Compose. MVVM (Model-View-ViewModel) architecture is standard. Unidirectional Data Flow (UDF).",topics:["Navigation Compose","MVVM","UDF","ViewModel"],resources:[{title:"Navigation with Compose",url:"https://developer.android.com/guide/navigation/navigation-compose"},{title:"Guide to App Architecture",url:"https://developer.android.com/topic/architecture"}]},{id:"and_5",title:"Networking & API",difficulty:"Advanced",estimatedHours:30,content:"Apps need data. Retrofit is the standard HTTP client. OkHttp for interceptors. Moshi/Kotlin Serialization for JSON parsing. Handle loading states and errors gracefully.",topics:["Retrofit","OkHttp","JSON Parsing","REST APIs"],resources:[{title:"Retrofit Documentation",url:"https://square.github.io/retrofit/"},{title:"Kotlin Serialization",url:"https://github.com/Kotlin/kotlinx.serialization"}]},{id:"and_6",title:"Local Storage",difficulty:"Advanced",estimatedHours:30,content:"Offline capability. Room (SQL abstraction) for complex structured data. DataStore for simple key-value pairs (replacing SharedPreferences).",topics:["Room Database","DataStore","SQL"],resources:[{title:"Save data in a local DB",url:"https://developer.android.com/training/data-storage/room"},{title:"DataStore",url:"https://developer.android.com/topic/libraries/architecture/datastore"}]},{id:"and_7",title:"Dependency Injection",difficulty:"Expert",estimatedHours:40,content:"managing dependencies. Hilt is the built-in recommendation (wrapper around Dagger). Koin is a popular Kotlin-first alternative.",topics:["Hilt","Dagger","Koin","Dependency Injection"],resources:[{title:"Dependency Injection with Hilt",url:"https://developer.android.com/training/dependency-injection/hilt-android"},{title:"Koin Framework",url:"https://insert-koin.io/"}]},{id:"and_8",title:"Background Work",difficulty:"Advanced",estimatedHours:20,content:"Tasks that run when the app is closed. WorkManager is the API for reliable, deferrable background work (e.g. uploading logs, syncing data).",topics:["WorkManager","Services","Background Sync"],resources:[{title:"Schedule tasks with WorkManager",url:"https://developer.android.com/topic/libraries/architecture/workmanager"}]},{id:"and_9",title:"Testing",difficulty:"Advanced",estimatedHours:30,content:"Don't ship bugs. Unit Tests (JUnit, Mockk) for logic. UI Tests (Compose Test Rule, Espresso) for screens. Flaky tests are the enemy.",topics:["JUnit","Mockk","Espresso","Compose Testing"],resources:[{title:"Test your app",url:"https://developer.android.com/training/testing"},{title:"Mockk",url:"https://mockk.io/"}]},{id:"and_10",title:"Publishing",difficulty:"Intermediate",estimatedHours:10,content:"Getting onto the Play Store. App Bundles (.aab) vs APKs. ProGuard/R8 for removing unused code and obfuscation. Play Console management.",topics:["Play Store","App Bundles","R8/ProGuard"],resources:[{title:"Publish your app",url:"https://developer.android.com/studio/publish"},{title:"Shrink, obfuscate, and optimize",url:"https://developer.android.com/build/shrink-code"}]}]},ios:{id:"ios",title:"iOS Developer",description:"Mobile apps for iOS.",icon:"📱",color:"#000000",estimatedTime:"6-8 Months",category:"Role Based",link:"https://roadmap.sh/ios",milestones:[{id:"ios_1",title:"Swift Basics",difficulty:"Beginner",estimatedHours:40,content:"Swift is a modern, type-safe language. Learn Variables, Collections, Optionals (?!), Control Flow, and Functions.",topics:["Variables","Optionals","Functions","Loops"],resources:[{title:"The Swift Programming Language",url:"https://docs.swift.org/swift-book/"}]},{id:"ios_2",title:"Object Oriented Swift",difficulty:"Intermediate",estimatedHours:30,content:"Classes vs Structs (Reference vs Value types). Protocols (Interfaces). Extensions to add functionality to existing types.",topics:["Classes","Structs","Protocols","Extensions"],resources:[{title:"Swift Classes and Structures",url:"https://docs.swift.org/swift-book/documentation/the-swift-programming-language/classesandstructures/"}]},{id:"ios_3",title:"SwiftUI Framework",difficulty:"Advanced",estimatedHours:60,content:"Apple's declarative UI. Views, Modifiers, State (@State, @Binding), and ObservableObjects. Building responsive layouts.",topics:["SwiftUI","Views","State Management","Layouts"],resources:[{title:"SwiftUI Overview",url:"https://developer.apple.com/xcode/swiftui/"},{title:"100 Days of SwiftUI",url:"https://www.hackingwithswift.com/100/swiftui"}]},{id:"ios_4",title:"Networking",difficulty:"Advanced",estimatedHours:30,content:"Fetching data from APIs. URLSession is the native API. Parsing JSON with Codable protocol (Encodable/Decodable).",topics:["URLSession","JSON","Codable","APIs"],resources:[{title:"URLSession",url:"https://developer.apple.com/documentation/foundation/url_loading_system"}]},{id:"ios_5",title:"Core Data & Persistence",difficulty:"Expert",estimatedHours:40,content:"Saving data on device. UserDefaults for settings, Core Data (or SwiftData) for complex objects. Application logic persistence.",topics:["Core Data","SwiftData","UserDefaults"],resources:[{title:"Core Data",url:"https://developer.apple.com/documentation/coredata"}]},{id:"ios_6",title:"Concurrency (GCD/Async Await)",difficulty:"Advanced",estimatedHours:30,content:"Running tasks off the main thread. Grand Central Dispatch (GCD) is the old way, async/await is the modern standard.",topics:["Async/Await","GCD","MainActor","Tasks"],resources:[{title:"Swift Concurrency",url:"https://docs.swift.org/swift-book/documentation/the-swift-programming-language/concurrency/"}]},{id:"ios_7",title:"App Store & Publishing",difficulty:"Intermediate",estimatedHours:20,content:"Provisioning Profiles, Certificates, TestFlight. Guidelines for submitting to the App Store.",topics:["App Store Connect","TestFlight","Certificates"],resources:[{title:"App Store Connect",url:"https://appstoreconnect.apple.com/"}]}]},qa:{id:"qa",title:"QA Engineer",description:"Quality Assurance.",icon:"✅",color:"#22c55e",estimatedTime:"3-5 Months",category:"Role Based",link:"https://roadmap.sh/qa",milestones:[{id:"qa_1",title:"QA Fundamentals",difficulty:"Beginner",estimatedHours:30,content:"Understanding the SDLC (Software Development Life Cycle). Difference between Verification and Validation. Bug Life Cycle.",topics:["SDLC","STLC","Bug Life Cycle"],resources:[{title:"Software Testing Help",url:"https://www.softwaretestinghelp.com/"},{title:"Guru99 QA",url:"https://www.guru99.com/software-testing.html"}]},{id:"qa_2",title:"Manual Testing",difficulty:"Beginner",estimatedHours:40,content:"Writing effective Test Plans and Test Cases. Black Box vs White Box testing. Regression testing vs Sanity testing.",topics:["Test Plans","Test Cases","Regression","Exploratory"],resources:[{title:"Test Case Template",url:"https://www.guru99.com/test-case.html"}]},{id:"qa_3",title:"API Testing",difficulty:"Intermediate",estimatedHours:30,content:"Testing without a UI. Postman is the industry standard. Understanding HTTP Status Codes (200, 404, 500).",topics:["Postman","REST","Status Codes","JSON"],resources:[{title:"Postman Learning Center",url:"https://learning.postman.com/"}]},{id:"qa_4",title:"Web Automation (Selenium/Cypress)",difficulty:"Advanced",estimatedHours:60,content:"Automating browser interactions. Selenium is classic, Cypress/Playwright are modern. Selectors (XPath, CSS). Page Object Model.",topics:["Selenium","Cypress","Playwright","POM"],resources:[{title:"Selenium Dev",url:"https://www.selenium.dev/"},{title:"Cypress Docs",url:"https://docs.cypress.io/"}]},{id:"qa_5",title:"Performance Testing",difficulty:"Advanced",estimatedHours:30,content:"Load Testing using JMeter or k6. Stress testing to break the system. Analyzing bottlenecks.",topics:["JMeter","Load Testing","Stress Testing"],resources:[{title:"JMeter Apache",url:"https://jmeter.apache.org/"}]},{id:"qa_6",title:"CI/CD Integration",difficulty:"Advanced",estimatedHours:20,content:"Running tests automatically in the pipeline. Jenkins, GitHub Actions. Failing the build on test failure.",topics:["CI/CD","Jenkins","Automated Runs"],resources:[{title:"Jenkins User Doc",url:"https://www.jenkins.io/doc/"}]}]},softwarearchitect:{id:"softwarearchitect",title:"Software Architect",description:"Designing systems.",icon:"🏛️",color:"#607d8b",estimatedTime:"12+ Months",category:"Role Based",link:"https://roadmap.sh/software-architect",milestones:[{id:"sa_1",title:"Patterns",difficulty:"Advanced",estimatedHours:50,content:"Microservices, Event-Driven, Monolith.",topics:["Patterns"],resources:[]}]},technicalwriter:{id:"technicalwriter",title:"Technical Writer",description:"Documentation specialist.",icon:"✍️",color:"#667eea",estimatedTime:"3-4 Months",category:"Role Based",link:"https://roadmap.sh/technical-writer",milestones:[{id:"tw_1",title:"Writing Fundamentals",difficulty:"Beginner",estimatedHours:40,content:"Mastering the English language. Grammar, Syntax, and Punctuation (Oxford Comma matters!). Style Guides (Google Developer Style Guide, Microsoft Manual of Style). Active Voice vs Passive Voice.",topics:["Grammar","Style Guides","Active Voice"],resources:[{title:"Google Developer Style Guide",url:"https://developers.google.com/style"},{title:"Microsoft Manual of Style",url:"https://learn.microsoft.com/en-us/style-guide/welcome/"}]},{id:"tw_2",title:"Markup Languages",difficulty:"Beginner",estimatedHours:30,content:"Writing in Markdown. Understanding HTML/XML basics. RST (reStructuredText) for Python docs. AsciiDoc for enterprise docs.",topics:["Markdown","HTML","RST","AsciiDoc"],resources:[{title:"Markdown Guide",url:"https://www.markdownguide.org/"}]},{id:"tw_3",title:"Docs as Code",difficulty:"Intermediate",estimatedHours:40,content:"Treating documentation like software. Git version control. Static Site Generators (SSG) like Docusaurus, Jekyll, or MkDocs. CI/CD for docs.",topics:["Git","Docusaurus","SSG","CI/CD"],resources:[{title:"Docs as Code",url:"https://www.writethedocs.org/guide/docs-as-code/"}]},{id:"tw_4",title:"API Documentation",difficulty:"Advanced",estimatedHours:50,content:"The highest paid skill. Documenting REST APIs. OpenAPI Specification (Swagger). Postman collections. Authentication docs.",topics:["OpenAPI","Swagger","REST","JSON"],resources:[{title:"Documenting APIs",url:"https://idratherbewriting.com/learnapidoc/"}]},{id:"tw_5",title:"Information Architecture",difficulty:"Advanced",estimatedHours:30,content:"Organizing contect. Taxonomy, Navigation structures, Searchability. User Personas.",topics:["Taxonomy","Navigation","UX Writing"],resources:[{title:"Information Architecture",url:"https://www.usability.gov/what-and-why/information-architecture.html"}]}]},gamedeveloper:{id:"gamedeveloper",title:"Game Developer",description:"Creating video games.",icon:"🎮",color:"#9c27b0",estimatedTime:"6-12 Months",category:"Role Based",link:"https://roadmap.sh/game-developer",milestones:[{id:"gd_1",title:"Game Design Basics",difficulty:"Beginner",estimatedHours:40,content:"What makes a game fun? Mechanics, Dynamics, Aesthetics (MDA Framework). Level Design principles. Game Loops.",topics:["Game Loop","Level Design","MDA"],resources:[{title:"Game Design Patterns",url:"https://gameprogrammingpatterns.com/"}]},{id:"gd_2",title:"Unity Engine",difficulty:"Intermediate",estimatedHours:80,content:"Mastering the engine. C# Scripting. GameObjects, Prefabs, Components. Physics (Rigidbody, Colliders). UI System (Canvas).",topics:["Unity","C#","Physics","Prefabs"],resources:[{title:"Unity Learn",url:"https://learn.unity.com/"}]},{id:"gd_3",title:"Unreal Engine (Alternative)",difficulty:"Intermediate",estimatedHours:80,content:"Visual Scripting with Blueprints. C++ for performance. High fidelity graphics (Lumen, Nanite).",topics:["Unreal","Blueprints","C++"],resources:[{title:"Unreal Engine Docs",url:"https://docs.unrealengine.com/"}]},{id:"gd_4",title:"Math for Games",difficulty:"Advanced",estimatedHours:50,content:"3D Math. Vectors (Dot/Cross Product), Quaternions (Rotation), Matrices. Collision Detection algorithms.",topics:["Vectors","Matrix","Quaternions"],resources:[{title:"3D Math Primer",url:"https://gamemath.com/"}]},{id:"gd_5",title:"Graphics & Shaders",difficulty:"Expert",estimatedHours:60,content:"How rendering works. The Graphics Pipeline. Writing Shaders (HLSL/GLSL). Lighting models (PBR). Optimization (Draw calls).",topics:["Shaders","GLSL","Rendering","Optimization"],resources:[{title:"The Book of Shaders",url:"https://thebookofshaders.com/"}]}]},dataanalyst:{id:"dataanalyst",title:"Data Analyst",description:"Analyzing data.",icon:"📈",color:"#20b2aa",estimatedTime:"4-6 Months",category:"Role Based",link:"https://roadmap.sh/data-analyst",milestones:[{id:"da_1",title:"Excel & Spreadsheets",difficulty:"Beginner",estimatedHours:30,content:"The universal tool. Learn Pivot Tables, VLOOKUP/XLOOKUP, and basic data cleaning. Power Query is a bonus.",topics:["Excel","Pivot Tables","VLOOKUP","Data Cleaning"],resources:[{title:"Excel Guide (Microsoft)",url:"https://support.microsoft.com/en-us/excel"}]},{id:"da_2",title:"Statistics & Maths",difficulty:"Intermediate",estimatedHours:40,content:"Understanding the data. Mean, Median, Mode. Standard Deviation. Probability distributions. Confidence intervals.",topics:["Statistics","Probability","Distributions"],resources:[{title:"Statistics by Jim",url:"https://statisticsbyjim.com/"},{title:"Khan Academy Statistics",url:"https://www.khanacademy.org/math/statistics-probability"}]},{id:"da_3",title:"SQL for Analytics",difficulty:"Intermediate",estimatedHours:50,content:"Querying data. SELECT, FROM, WHERE. Aggregations (GROUP BY, SUM, AVG). Joins (INNER, LEFT). Window Functions (RANK, ROW_NUMBER) occupy the advanced tier.",topics:["SQL","Joins","Aggregations","Window Functions"],resources:[{title:"SQLZoo",url:"https://sqlzoo.net/"},{title:"Mode SQL Tutorial",url:"https://mode.com/sql-tutorial/"}]},{id:"da_4",title:"Data Visualization (BI Tools)",difficulty:"Intermediate",estimatedHours:40,content:"Storytelling with data. Tableau or PowerBI. Creating dashboards. Choosing the right chart (Bar vs Line vs Scatter).",topics:["Tableau","PowerBI","Dashboards","Storytelling"],resources:[{title:"Tableau Public",url:"https://public.tableau.com/en-us/s/"},{title:"PowerBI Learning",url:"https://learn.microsoft.com/en-us/power-bi/"}]},{id:"da_5",title:"Python for Data (Pandas)",difficulty:"Advanced",estimatedHours:50,content:"Beyond Excel. Pandas for data manipulation. Matplotlib/Seaborn for plotting. Jupyter Notebooks for reproducible analysis.",topics:["Pandas","Matplotlib","Jupyter","DataFrames"],resources:[{title:"Pandas Docs",url:"https://pandas.pydata.org/"},{title:"RealPython Data Science",url:"https://realpython.com/tutorials/data-science/"}]},{id:"da_6",title:"Business Acumen",difficulty:"Intermediate",estimatedHours:20,content:"Asking the right questions. KPI (Key Performance Indicator) definition. Understanding business metrics (churn, retention, ARPU).",topics:["KPIs","Metrics","Strategy","Communication"],resources:[{title:"Lean Analytics Book",url:"http://leananalyticsbook.com/"}]}]},aiengineer:{id:"aiengineer",title:"AI Engineer",description:"Building AI apps.",icon:"🧠",color:"#8b5cf6",estimatedTime:"12+ Months",category:"Role Based",link:"https://roadmap.sh/ai-engineer",milestones:[{id:"ai_1",title:"Python & AI Basics",difficulty:"Intermediate",estimatedHours:50,content:"Python is the lingua franca. Numpy for numerical computing, Pandas for data processing. PyTorch or TensorFlow fundamentals.",topics:["Python","Numpy","PyTorch","TensorFlow"],resources:[{title:"PyTorch Tutorials",url:"https://pytorch.org/tutorials/"},{title:"TensorFlow Guide",url:"https://www.tensorflow.org/guide"}]},{id:"ai_2",title:"Deep Learning Fundamentals",difficulty:"Advanced",estimatedHours:60,content:"Neural Networks. Perceptrons, Backpropagation, Loss Functions, Optimizers (SGD, Adam). CNNs for Vision (optional), RNNs/LSTMs.",topics:["Neural Networks","Backprop","Optimizers","Deep Learning"],resources:[{title:"Deep Learning Book",url:"https://www.deeplearningbook.org/"},{title:"Fast.ai",url:"https://www.fast.ai/"}]},{id:"ai_3",title:"Transformers & NLP",difficulty:"Expert",estimatedHours:60,content:"The architecture that changed everything. Attention Mechanism. BERT, GPT. Tokenization, Embeddings. Hugging Face Library.",topics:["Attention","Transformers","BERT","Hugging Face"],resources:[{title:"Hugging Face NLP Course",url:"https://huggingface.co/learn/nlp-course"},{title:"The Illustrated Transformer",url:"https://jalammar.github.io/illustrated-transformer/"}]},{id:"ai_4",title:"LLMs & Prompt Engineering",difficulty:"Expert",estimatedHours:40,content:"Working with Large Language Models. Zero-shot, Few-shot prompting. Chain of Thought. OpenAI API, Anthropic, Gemini.",topics:["LLMs","Prompting","OpenAI API","Context Window"],resources:[{title:"OpenAI Prompt Engineering",url:"https://platform.openai.com/docs/guides/prompt-engineering"},{title:"Anthropic Prompt Library",url:"https://docs.anthropic.com/claude/prompt-library"}]},{id:"ai_5",title:"RAG (Retrieval Augmented Generation)",difficulty:"Expert",estimatedHours:50,content:"Connecting LLMs to your data. Vector Databases (Pinecone, Chroma). Embeddings. LangChain or LlamaIndex frameworks.",topics:["RAG","Vector DB","LangChain","Embeddings"],resources:[{title:"LangChain Docs",url:"https://python.langchain.com/docs/get_started/introduction"},{title:"Pinecone Learning Center",url:"https://www.pinecone.io/learn/"}]},{id:"ai_6",title:"Fine-Tuning",difficulty:"Expert",estimatedHours:40,content:"Adapting models to specific tasks. LoRA (Low-Rank Adaptation), PEFT. Instruction Tuning. RLHF (Reinforcement Learning from Human Feedback).",topics:["PEFT","LoRA","Fine-Tuning","RLHF"],resources:[{title:"Hugging Face PEFT",url:"https://huggingface.co/docs/peft/index"}]},{id:"ai_7",title:"AI Agents",difficulty:"Expert",estimatedHours:40,content:"Autonomous systems. ReAct pattern (Reasoning + Acting). Tool use. AutoGPT, BabyAGI concepts.",topics:["Agents","ReAct","Tool Use","Autonomy"],resources:[{title:"LangChain Agents",url:"https://python.langchain.com/docs/modules/agents/"}]}]},machinelearning:{id:"machinelearning",title:"Machine Learning",description:"Building predictive models.",icon:"🤖",color:"#f97316",estimatedTime:"9-12 Months",category:"Role Based",link:"https://roadmap.sh/machine-learning",milestones:[{id:"ml_1",title:"Mathematics for ML",difficulty:"Intermediate",estimatedHours:60,content:"The foundation. Linear Algebra (Vectors, Matrices), Calculus (Derivatives, Gradients), Probability, and Statistics (Distributions, Hypothesis Testing).",topics:["Linear Algebra","Calculus","Probability","Statistics"],resources:[{title:"Mathematics for Machine Learning",url:"https://mml-book.github.io/"},{title:"Khan Academy Stats",url:"https://www.khanacademy.org/math/statistics-probability"}]},{id:"ml_2",title:"Data Preprocessing",difficulty:"Intermediate",estimatedHours:40,content:"Cleaning data. Handling missing values. Feature Engineering (Scaling, Normalization, Encoding). Splitting data into Train/Test/Validation sets.",topics:["Pandas","Scikit-Learn","Feature Scaling","Imputation"],resources:[{title:"Scikit-Learn Preprocessing",url:"https://scikit-learn.org/stable/modules/preprocessing.html"},{title:"Pandas User Guide",url:"https://pandas.pydata.org/docs/user_guide/index.html"}]},{id:"ml_3",title:"Supervised Learning",difficulty:"Advanced",estimatedHours:50,content:"Learning with labels. Regression (Linear, Logistic). Classification (Decision Trees, SVM, Random Forest). Ensembling methods (Gradient Boosting, XGBoost).",topics:["Regression","Classification","Decision Trees","XGBoost"],resources:[{title:"Supervised Learning (Scikit-Learn)",url:"https://scikit-learn.org/stable/supervised_learning.html"}]},{id:"ml_4",title:"Unsupervised Learning",difficulty:"Advanced",estimatedHours:40,content:"Learning without labels. Clustering (K-Means, DBSCAN). Dimensionality Reduction (PCA, t-SNE). Association Rule Mining.",topics:["Clustering","PCA","K-Means","Dimensionality Reduction"],resources:[{title:"Unsupervised Learning (Scikit-Learn)",url:"https://scikit-learn.org/stable/unsupervised_learning.html"}]},{id:"ml_5",title:"Model Evaluation",difficulty:"Advanced",estimatedHours:30,content:"How good is the model? Metrics: Accuracy, Precision, Recall, F1-Score, ROC-AUC. Confusion Matrix. Cross-Validation (K-Fold). Overfitting vs Underfitting (Bias-Variance Tradeoff).",topics:["Cross-Validation","F1-Score","ROC Curve","Bias-Variance"],resources:[{title:"Model Evaluation (Scikit-Learn)",url:"https://scikit-learn.org/stable/modules/model_evaluation.html"}]},{id:"ml_6",title:"Deployment (MLOps Basics)",difficulty:"Expert",estimatedHours:40,content:"Putting models into production. Saving/Loading models (Pickle, Joblib). Serving via API (FastAPI, Flask). Monitoring model drift.",topics:["MLOps","FastAPI","Model Serving","Drift"],resources:[{title:"FastAPI with ML",url:"https://fastapi.tiangolo.com/tutorial/"}]}]},dataengineer:{id:"dataengineer",title:"Data Engineer",description:"Building data pipelines.",icon:"🗄️",color:"#795548",estimatedTime:"8-12 Months",category:"Role Based",link:"https://roadmap.sh/data-engineer",milestones:[{id:"de_1",title:"Data Modeling",difficulty:"Intermediate",estimatedHours:40,content:"Structure your data. Normalization vs Denormalization. Star Schema vs Snowflake Schema. Fact Tables vs Dimension Tables.",topics:["Data Modeling","Warehousing","Star Schema"],resources:[{title:"Data Warehouse Toolkit",url:"https://www.kimballgroup.com/data-warehouse-business-intelligence-resources/books/data-warehouse-toolkit/"}]},{id:"de_2",title:"Big Data Frameworks (Spark)",difficulty:"Advanced",estimatedHours:80,content:"Processing massive datasets. Apache Spark is King. RDDs vs DataFrames. PySpark. Handling TBs of data.",topics:["Spark","PySpark","Hadoop","MapReduce"],resources:[{title:"Spark Documentation",url:"https://spark.apache.org/docs/latest/"}]},{id:"de_3",title:"Streaming Data (Kafka)",difficulty:"Advanced",estimatedHours:60,content:"Real-time pipelines. Apache Kafka architecture: Producers, Consumers, Brokers, Zookeeper/KRaft. Topics and Partitions.",topics:["Kafka","Streaming","Real-time"],resources:[{title:"Kafka Documentation",url:"https://kafka.apache.org/documentation/"}]},{id:"de_4",title:"Orchestration (Airflow)",difficulty:"Advanced",estimatedHours:40,content:"Managing dependency graphs (DAGs). Apache Airflow is the standard. Scheduling jobs, retries, and monitoring.",topics:["Airflow","DAGs","Orchestration"],resources:[{title:"Apache Airflow",url:"https://airflow.apache.org/"}]},{id:"de_5",title:"Cloud Data Warehouses",difficulty:"Advanced",estimatedHours:40,content:"Modern storage. Snowflake, Google BigQuery, or Amazon Redshift. Separation of Compute and Storage.",topics:["Snowflake","BigQuery","Redshift"],resources:[{title:"Snowflake Docs",url:"https://docs.snowflake.com/"}]},{id:"de_6",title:"Data Lakes",difficulty:"Advanced",estimatedHours:30,content:"Storing raw data. S3/GCS. File formats: Parquet, Avro, ORC (Columnar storage is key). Data Catalogs (Glue).",topics:["Data Lake","Parquet","S3"],resources:[{title:"Data Lake Architecture",url:"https://aws.amazon.com/big-data/datalakes-and-analytics/what-is-a-data-lake/"}]}]},mlops:{id:"mlops",title:"MLOps",description:"Operations for ML.",icon:"⚡",color:"#607d8b",estimatedTime:"6-9 Months",category:"Role Based",link:"https://roadmap.sh/mlops",milestones:[{id:"mlo_1",title:"Experiment Tracking",difficulty:"Intermediate",estimatedHours:30,content:"No more spreadsheets. MLflow or Weights & Biases. Logging params, metrics, and artifacts. Reproducibility is the goal.",topics:["MLflow","W&B","Tracking"],resources:[{title:"MLflow Tracking",url:"https://mlflow.org/docs/latest/tracking.html"}]},{id:"mlo_2",title:"Model Serving & Deployment",difficulty:"Advanced",estimatedHours:40,content:"REST APIs (FastAPI), TorchServe, TensorFlow Serving. KServe for serverless. ONNX Runtime for interoperability.",topics:["Serving","FastAPI","KServe","ONNX"],resources:[{title:"TorchServe",url:"https://pytorch.org/serve/"}]},{id:"mlo_3",title:"Model Monitoring",difficulty:"Advanced",estimatedHours:30,content:"Data Drift and Concept Drift. Prometheus + Grafana for metrics. Evidently AI for detecting drift.",topics:["Drift","Monitoring","Evidently"],resources:[{title:"Evidently AI",url:"https://www.evidentlyai.com/"}]},{id:"mlo_4",title:"Feature Stores",difficulty:"Expert",estimatedHours:30,content:"Consistent features for training and serving. Feast or Tecton. Point-in-time correctness.",topics:["Feast","Feature Store"],resources:[{title:"Feast Docs",url:"https://feast.dev/"}]},{id:"mlo_5",title:"Kubeflow & Pipelines",difficulty:"Expert",estimatedHours:60,content:"End-to-end ML on Kubernetes. Kubeflow Pipelines. TFX (TensorFlow Extended). Automated training triggers.",topics:["Kubeflow","TFX","Pipelines"],resources:[{title:"Kubeflow",url:"https://www.kubeflow.org/"}]}]},productmanager:{id:"productmanager",title:"Product Manager",description:"Leading product.",icon:"📋",color:"#3f51b5",estimatedTime:"3-6 Months",category:"Role Based",link:"https://roadmap.sh/product-manager",milestones:[{id:"pm_1",title:"Product Lifecycle",difficulty:"Intermediate",estimatedHours:40,content:"From Idea to Launch (and sunset). Discovery, Definition, Design, Development, Delivery. The Double Diamond design process.",topics:["Lifecycle","Discovery","Delivery"],resources:[{title:"Atlassian Product Guide",url:"https://www.atlassian.com/agile/product-management"}]},{id:"pm_2",title:"Prioritization Frameworks",difficulty:"Intermediate",estimatedHours:20,content:"Deciding what to build. RICE (Reach, Impact, Confidence, Effort), MoSCoW, Kano Model. Saying 'No' effectively.",topics:["RICE","MoSCoW","Prioritization"],resources:[{title:"RICE Framework",url:"https://www.intercom.com/blog/rice-simple-prioritization-for-product-managers/"}]},{id:"pm_3",title:"Agile & Scrum",difficulty:"Intermediate",estimatedHours:30,content:"How software gets built. Sprints, Standups, Retrospectives. Writing User Stories and Acceptance Criteria (Gherkin syntax).",topics:["Agile","Scrum","User Stories"],resources:[{title:"Scrum Guide",url:"https://scrumguides.org/"}]},{id:"pm_4",title:"Metrics & Analytics",difficulty:"Advanced",estimatedHours:30,content:"Measuring success. Pirate Metrics (AARRR). north Star Metric. Cohort Analysis. NPS and CSAT.",topics:["AARRR","North Star","Cohorts"],resources:[{title:"Amplitude Analytics",url:"https://amplitude.com/blog/product-analytics-guide"}]}]},engineeringmanager:{id:"engineeringmanager",title:"Engineering Manager",description:"Leading teams.",icon:"👔",color:"#2196f3",estimatedTime:"Indefinite",category:"Role Based",link:"https://roadmap.sh/engineering-manager",milestones:[{id:"em_1",title:"People Management",difficulty:"Advanced",estimatedHours:50,content:"1-on-1s are your most important meeting. Coaching vs Mentoring. Performance Reviews. Radical Candor.",topics:["1-on-1s","Coaching","Performance"],resources:[{title:"The Manager's Path",url:"https://www.oreilly.com/library/view/the-managers-path/9781491973882/"}]},{id:"em_2",title:"Hiring & Onboarding",difficulty:"Advanced",estimatedHours:40,content:"Building the team. Writing job descriptions. Designing interview loops. The 'First 90 Days' for new hires.",topics:["Hiring","Interviews","Onboarding"],resources:[{title:"Holloway Guide to Hiring",url:"https://www.holloway.com/g/technical-recruiting-hiring"}]},{id:"em_3",title:"Project Management",difficulty:"Advanced",estimatedHours:30,content:"Delivery. Managing scope creep. Stakeholder communication. Velocity tracking. Incident Management.",topics:["Delivery","Stakeholders","Incidents"],resources:[{title:"Basecamp Shape Up",url:"https://basecamp.com/shapeup"}]},{id:"em_4",title:"Technical Strategy",difficulty:"Expert",estimatedHours:30,content:"Balancing tech debt vs new features. Build vs Buy decisions. Architecture reviews. Engineering culture.",topics:["Strategy","Tech Debt","Culture"],resources:[{title:"Staff Engineer Path",url:"https://staffeng.com/"}]}]},postgresqldba:{id:"postgresqldba",title:"PostgreSQL DBA",description:"Database Administrator.",icon:"🐘",color:"#336791",estimatedTime:"4-6 Months",category:"Role Based",link:"https://roadmap.sh/postgresql-dba",milestones:[{id:"dba_1",title:"Administration Basics",difficulty:"Expert",estimatedHours:60,content:"Installing and configuring PostgreSQL. pg_hba.conf for authentication. Roles and Privileges (GRANT/REVOKE).",topics:["Config","Auth","Roles"],resources:[{title:"PostgreSQL Documentation",url:"https://www.postgresql.org/docs/"}]},{id:"dba_2",title:"Architecture & Tuning",difficulty:"Expert",estimatedHours:60,content:"Understanding MVCC (Multi-Version Concurrency Control). VACUUM and Autovacuum. Write-Ahead Logging (WAL). Tuning shared_buffers and work_mem.",topics:["MVCC","VACUUM","WAL","Tuning"],resources:[{title:"PostgreSQL Optimization",url:"https://wiki.postgresql.org/wiki/Performance_Optimization"}]},{id:"dba_3",title:"High Availability (HA)",difficulty:"Expert",estimatedHours:50,content:"Replication (Streaming vs Logical). Failover strategies. Patroni. PGBouncer for connection pooling.",topics:["Replication","Patroni","Connection Pooling"],resources:[{title:"Patroni Docs",url:"https://patroniKey.readthedocs.io/"}]},{id:"dba_4",title:"Backup & Recovery",difficulty:"Expert",estimatedHours:40,content:"pg_dump vs pg_basebackup. Point-in-Time Recovery (PITR). Barman or pgBackRest for automated backups.",topics:["PITR","Backups","pgBackRest"],resources:[{title:"pgBackRest User Guide",url:"https://pgbackrest.org/user-guide.html"}]}]},aiagents:{id:"aiagents",title:"AI Agents",description:"Autonomous AI systems.",icon:"🤖",color:"#9c27b0",estimatedTime:"4-6 Months",category:"Role Based",link:"https://roadmap.sh/ai-agents",milestones:[{id:"ag_1",title:"Agentic Design Patterns",difficulty:"Advanced",estimatedHours:40,content:"ReAct (Reason + Act). Chain of Thought (CoT). Tree of Thoughts. Reflection and Self-Correction.",topics:["ReAct","CoT","Reflection"],resources:[{title:"ReAct Paper",url:"https://react-lm.github.io/"}]},{id:"ag_2",title:"Frameworks",difficulty:"Expert",estimatedHours:50,content:"LangChain Agents. AutoGen (Multi-agent conversation). CrewAI. BabyAGI.",topics:["LangChain","AutoGen","CrewAI"],resources:[{title:"AutoGen Docs",url:"https://microsoft.github.io/autogen/"}]},{id:"ag_3",title:"Tool Use & Function Calling",difficulty:"Expert",estimatedHours:40,content:"Teaching LLMs to use APIs. OpenAI Function Calling. Defining tools (Calculator, Search, Database).",topics:["Function Calling","Tools","APIs"],resources:[{title:"OpenAI Function Calling",url:"https://platform.openai.com/docs/guides/function-calling"}]}]},aidatascientist:{id:"aidatascientist",title:"AI Data Scientist",description:"Data Scientist for AI.",icon:"📊",color:"#00bcd4",estimatedTime:"8-12 Months",category:"Role Based",link:"https://roadmap.sh/ai-data-scientist",milestones:[{id:"ads_1",title:"Statistical Foundations",difficulty:"Advanced",estimatedHours:50,content:"Bayesian Statistics. Hypothesis Testing (A/B Testing). Distributions. Bias vs Variance.",topics:["Bayesian","Hypothesis Testing","Bias/Variance"],resources:[{title:"Think Stats",url:"https://greenteapress.com/wp/think-stats-2e/"}]},{id:"ads_2",title:"Exploratory Data Analysis (EDA)",difficulty:"Intermediate",estimatedHours:40,content:"Visualizing distributions. Correlation matrices. Handling imbalance (SMOTE). Feature Selection.",topics:["EDA","Visualization","Feature Selection"],resources:[{title:"Kaggle EDA",url:"https://www.kaggle.com/learn/data-visualization"}]},{id:"ads_3",title:"Casual Inference",difficulty:"Expert",estimatedHours:40,content:"Correlation does not equal causation. Propensity Scores. Instrumental Variables. Do-calculus.",topics:["Causal Inference","Propensity Score"],resources:[{title:"Causal Inference Book",url:"https://www.bradyneal.com/causal-inference-course"}]}]},devrel:{id:"devrel",title:"DevRel",description:"Developer Relations.",icon:"🤝",color:"#e91e63",estimatedTime:"3-6 Months",category:"Role Based",link:"https://roadmap.sh/devrel",milestones:[{id:"dr_1",title:"Understanding Developers",difficulty:"Intermediate",estimatedHours:30,content:"Empathy for the developer journey. Identifying pain points. The 'Developer Experience' (DX).",topics:["DX","Empathy","User Journey"],resources:[{title:"What is DevRel?",url:"https://www.swyx.io/devrel-guide"}]},{id:"dr_2",title:"Content Creation",difficulty:"Intermediate",estimatedHours:60,content:"Writing tutorials. Creating video courses. Speaking at conferences. Writing sample code that actually works.",topics:["Blogging","Speaking","Sample Code"],resources:[{title:"Technical Writing Guide",url:"https://developers.google.com/tech-writing"}]},{id:"dr_3",title:"Community Management",difficulty:"Advanced",estimatedHours:50,content:"Building and nurturing communities. Discord/Slack moderation. Code of Conduct. Ambassador programs.",topics:["Community","Moderation","Growth"],resources:[{title:"Community Management",url:"https://cmxhub.com/the-community-engagement-cycle/"}]},{id:"dr_4",title:"Product Feedback Loop",difficulty:"Advanced",estimatedHours:30,content:"Being the customer zero. Reporting bugs. Advocating for developer needs within the product team.",topics:["Feedback","Product","Advocacy"],resources:[{title:"DevRel as Product Input",url:"https://dev.to"}]}]},serversidegamedeveloper:{id:"serversidegamedeveloper",title:"Game Server Dev",description:"Backend for games.",icon:"🎮",color:"#673ab7",estimatedTime:"6-9 Months",category:"Role Based",link:"https://roadmap.sh/server-side-game-developer",milestones:[{id:"sgd_1",title:"Networking Protocols",difficulty:"Expert",estimatedHours:60,content:"UDP vs TCP. WebSockets. Reliable UDP (ENet, RakNet, KCP). Packet loss and Jitter handling.",topics:["UDP","TCP","WebSockets"],resources:[{title:"Gaffer on Games",url:"https://gafferongames.com/"}]},{id:"sgd_2",title:"Synchronization",difficulty:"Expert",estimatedHours:60,content:"State synchronization. Deterministic Lockstep vs Snapshot Interpolation. Lag Compensation techniques. Client-side prediction.",topics:["Lag Compensation","Interpolation","Prediction"],resources:[{title:"Valve Developer Networking",url:"https://developer.valvesoftware.com/wiki/Source_Multiplayer_Networking"}]},{id:"sgd_3",title:"Architecture",difficulty:"Expert",estimatedHours:50,content:"Authoritative Server design. P2P (Peer-to-Peer) vs Dedicated Server. Matchmaking systems. Spatial Partitioning.",topics:["Dedicated Server","P2P","Matchmaking"],resources:[{title:"Game Server Architecture",url:"https://www.gabrielgambetta.com/client-side-prediction-server-reconciliation.html"}]}]},bianalyst:{id:"bianalyst",title:"BI Analyst",description:"Business Intelligence.",icon:"📊",color:"#ffeb3b",estimatedTime:"4-6 Months",category:"Role Based",link:"https://roadmap.sh/bi-analyst",milestones:[{id:"bi_1",title:"Data Warehousing",difficulty:"Intermediate",estimatedHours:40,content:"The Star Schema. Fact Tables vs Dimension Tables. ETL vs ELT processes. Data Marts.",topics:["Data Warehouse","Star Schema","ETL"],resources:[{title:"Kimball Group",url:"https://www.kimballgroup.com/"}]},{id:"bi_2",title:"BI Tools (PowerBI/Tableau)",difficulty:"Intermediate",estimatedHours:60,content:"Creating interactive reports. DAX (Data Analysis Expressions) for PowerBI. LOD Expressions for Tableau. Data blending.",topics:["PowerBI","DAX","Tableau","LOD"],resources:[{title:"PowerBI Documentation",url:"https://docs.microsoft.com/en-us/power-bi/"}]},{id:"bi_3",title:"Data Governance",difficulty:"Advanced",estimatedHours:30,content:"Data Quality, Security, and Master Data Management (MDM). Ensuring 'One Version of the Truth'.",topics:["Data Quality","Governance","MDM"],resources:[{title:"Data Governance Framework",url:"https://www.dataversity.net/what-is-data-governance/"}]}]}},Mn={react:{id:"react",title:"React",description:"A JavaScript library for building user interfaces.",icon:"⚛️",color:"#61dafb",estimatedTime:"3-5 Months",category:"Skill Based",link:"https://roadmap.sh/react",milestones:[{id:"r_1",title:"Fundamentals",difficulty:"Beginner",estimatedHours:20,content:"React is a UI library. Start with Create React App or Vite. Understand that everything is a 'Component'. Components return JSX, which looks like HTML but is JavaScript. Learn about Props to pass data down.",topics:["JSX","Components","Props","Conditional Rendering"],resources:[{title:"React Docs",url:"https://react.dev/"}]},{id:"r_2",title:"State & Lifecycle",difficulty:"Beginner",estimatedHours:30,content:"State is data that changes over time. Understanding `useState` is 50% of React. Learn how updating state triggers a re-render. Learn the Component Lifecycle (Mount, Update, Unmount) via `useEffect`.",topics:["useState","useEffect","Lists & Keys","Forms"],resources:[]},{id:"r_3",title:"Advanced Hooks",difficulty:"Intermediate",estimatedHours:30,content:"Beyond the basics. `useContext` prevents prop drilling. `useReducer` handles complex state logic (like Redux). `useRef` accesses DOM elements directly without re-renders.",topics:["useContext","useReducer","useRef","useMemo","useCallback"],resources:[]},{id:"r_4",title:"Routing",difficulty:"Intermediate",estimatedHours:20,content:"Single Page Apps (SPAs) need client-side routing. React Router is the standard. Learn to define Routes, use Link components, and handle dynamic route parameters (e.g., /user/:id).",topics:["React Router","Dynamic Routes","Nested Routes","Protected Routes"],resources:[]},{id:"r_5",title:"State Management",difficulty:"Advanced",estimatedHours:40,content:"For large apps, Context isn't enough. Redux Toolkit (RTK) is the industry standard for global state. Zustand is a lighter popular alternative. TanStack Query (React Query) is essential for server state.",topics:["Redux Toolkit","Zustand","TanStack Query"],resources:[]},{id:"r_6",title:"Performance Optimization",difficulty:"Expert",estimatedHours:30,content:"React is fast, but you can make it slow. Learn to prevent unnecessary re-renders using `React.memo`, `useMemo`, and `useCallback`. Understand Code Splitting using `React.lazy` and Suspense.",topics:["Re-renders","Memoization","Code Splitting","Suspense"],resources:[]},{id:"r_7",title:"React Frameworks",difficulty:"Advanced",estimatedHours:50,content:"React is rarely used alone in production anymore. Next.js is the production framework. It adds Server Side Rendering (SSR), Static Site Generation (SSG), and API routes out of the box.",topics:["Next.js","SSR","SSG","Remix"],resources:[]}]},python:{id:"python",title:"Python",description:"Versatile programming language.",icon:"🐍",color:"#3776ab",estimatedTime:"3-5 Months",category:"Skill Based",link:"https://roadmap.sh/python",milestones:[{id:"py_1",title:"Syntax Basics",difficulty:"Beginner",estimatedHours:20,content:"Python is known for readability. Learn indentation rules (whitespace matters!). Variables, Data Types (int, float, str, bool), and basic Operators. Input/Output with print() and input().",topics:["Variables","Operators","Input/Output","Indentation"],resources:[{title:"Python Tutorial",url:"https://docs.python.org/3/tutorial/"}]},{id:"py_2",title:"Control Structures",difficulty:"Beginner",estimatedHours:20,content:"Logic flow. Conditional statements (if, elif, else). Loops (for, while). Learn to iterate over sequences using range() and enumerate().",topics:["if/else","Loops","Break/Continue","List Comprehensions"],resources:[{title:"Control Flow",url:"https://docs.python.org/3/tutorial/controlflow.html"}]},{id:"py_3",title:"Data Structures",difficulty:"Intermediate",estimatedHours:40,content:"Python's power lies in its built-in structures. Lists (arrays), Tuples (immutable), Sets (unique items), and Dictionaries (key-value pairs). Master List Comprehensions for concise code.",topics:["Lists","Dictionaries","Tuples","Sets"],resources:[{title:"Data Structures",url:"https://docs.python.org/3/tutorial/datastructures.html"}]},{id:"py_4",title:"Functions & Modules",difficulty:"Intermediate",estimatedHours:30,content:"DRY (Don't Repeat Yourself). Define functions with `def`. specific arguments vs *args/**kwargs. Lambda functions. Organizing code into Modules and Packages using __init__.py.",topics:["Functions","Lambdas","Modules","Pip (Package Manager)"],resources:[{title:"Modules",url:"https://docs.python.org/3/tutorial/modules.html"}]},{id:"py_5",title:"Object Oriented Programming",difficulty:"Advanced",estimatedHours:40,content:"Python is an OOP language. Classes, Objects, Inheritance, Polymorphism. Understand `self`, the `__init__` constructor, and Magic Methods (`__str__`, `__len__`).",topics:["Classes","Inheritance","Magic Methods","Decorators"],resources:[{title:"Classes",url:"https://docs.python.org/3/tutorial/classes.html"}]},{id:"py_6",title:"File I/O & Exceptions",difficulty:"Intermediate",estimatedHours:20,content:"Working with files. Open/Read/Write using the `with` context manager (which handles closing automatically). Error handling using try/except/finally blocks.",topics:["File Handling","Context Managers","Exception Handling"],resources:[{title:"Input and Output",url:"https://docs.python.org/3/tutorial/inputoutput.html"}]}]},springboot:{id:"springboot",title:"Spring Boot",description:"Java-based framework.",icon:"🍃",color:"#6db33f",estimatedTime:"3-4 Months",category:"Skill Based",link:"https://roadmap.sh/spring-boot",milestones:[{id:"sb_1",title:"Basics",difficulty:"Intermediate",estimatedHours:30,content:"Auto-configuration, Starters. The Spring ecosystem.",topics:["Starters","Beans"],resources:[]}]},aspnetcore:{id:"aspnetcore",title:"ASP.NET Core",description:".NET framework.",icon:"🔷",color:"#512bd4",estimatedTime:"3-5 Months",category:"Skill Based",link:"https://roadmap.sh/aspnet-core",milestones:[{id:"asp_1",title:"Core",difficulty:"Intermediate",estimatedHours:40,content:"Middleware, Dependency Injection, Kestrel.",topics:["DI","Middleware"],resources:[]}]},laravel:{id:"laravel",title:"Laravel",description:"PHP Framework.",icon:"🔴",color:"#ff2d20",estimatedTime:"3-4 Months",category:"Skill Based",link:"https://roadmap.sh/laravel",milestones:[{id:"lv_1",title:"Fundamentals",difficulty:"Beginner",estimatedHours:30,content:"MVC Architecture, Routing, Blade.",topics:["MVC","Blade"],resources:[]}]},datastructures:{id:"datastructures",title:"Data Structures",description:"CS Fundamentals.",icon:"📚",color:"#000000",estimatedTime:"4-6 Months",category:"Skill Based",link:"https://roadmap.sh/datastructures-and-algorithms",milestones:[{id:"dsa_1",title:"Linear",difficulty:"Beginner",estimatedHours:40,content:"Arrays, Linked Lists, Stacks, Queues.",topics:["Arrays","Lists"],resources:[]},{id:"dsa_2",title:"Trees & Graphs",difficulty:"Advanced",estimatedHours:50,content:"Binary Trees, BST, Graphs (BFS/DFS).",topics:["Trees","Graphs"],resources:[]}]},promptengineering:{id:"promptengineering",title:"Prompt Engineering",description:"AI Communication.",icon:"💬",color:"#10a37f",estimatedTime:"1 Month",category:"Skill Based",link:"https://roadmap.sh/prompt-engineering",milestones:[{id:"pe_1",title:"Techniques",difficulty:"Intermediate",estimatedHours:20,content:"Chain of Thought, Few-Shot, ReAct.",topics:["Prompts"],resources:[]}]},java:{id:"java",title:"Java",description:"Robust, object-oriented language.",icon:"☕",color:"#007396",estimatedTime:"4-6 Months",category:"Skill Based",link:"https://roadmap.sh/java",milestones:[{id:"jv_1",title:"Core Java",difficulty:"Beginner",estimatedHours:60,content:"The foundation. Syntax, Loops, Methods. Object-Oriented Programming (Classes, Objects, Inheritance, Polymorphism, Abstraction, Encapsulation) is the heart of Java.",topics:["Syntax","OOP Principles","Methods"],resources:[{title:"Java Tutorials (Oracle)",url:"https://docs.oracle.com/javase/tutorial/"},{title:"Baeldung Java",url:"https://www.baeldung.com/java-tutorial"}]},{id:"jv_2",title:"Collections Framework",difficulty:"Intermediate",estimatedHours:50,content:"Managing groups of objects. List (ArrayList, LinkedList), Set (HashSet), Map (HashMap, TreeMap). Iterators and the for-each loop.",topics:["List","Set","Map","Queue"],resources:[{title:"Java Collections",url:"https://docs.oracle.com/javase/tutorial/collections/"}]},{id:"jv_3",title:"Java 8+ Features",difficulty:"Intermediate",estimatedHours:40,content:"Modern Java. Lambdas for functional programming. Streams API for processing collections (filter, map, reduce). Optional class to avoid NullPointerExceptions.",topics:["Lambdas","Streams API","Optional"],resources:[{title:"Java 8 Features",url:"https://www.baeldung.com/java-8-features"}]},{id:"jv_4",title:"Concurrency (Multithreading)",difficulty:"Advanced",estimatedHours:50,content:"Doing multiple things at once. Threads, Runnables. The Executor Framework. Synchronization and Locks to prevent race conditions.",topics:["Threads","Executors","Synchronized"],resources:[{title:"Java Concurrency",url:"https://docs.oracle.com/javase/tutorial/essential/concurrency/"}]},{id:"jv_5",title:"Build Tools (Maven/Gradle)",difficulty:"Intermediate",estimatedHours:30,content:"Dependency management. pom.xml vs build.gradle. compiling, testing, and packaging your application.",topics:["Maven","Gradle","Dependency Management"],resources:[{title:"Maven in 5 Minutes",url:"https://maven.apache.org/guides/getting-started/maven-in-five-minutes.html"}]},{id:"jv_6",title:"Spring Framework",difficulty:"Advanced",estimatedHours:80,content:"The enterprise standard. Inversion of Control (IoC), Dependency Injection (DI). Spring Boot for rapid application development. Spring Data JPA for database access.",topics:["Spring Boot","IoC","Spring MVC"],resources:[{title:"Spring Boot Guides",url:"https://spring.io/guides"},{title:"Spring Boot Start",url:"https://start.spring.io/"}]}]},javascript:{id:"javascript",title:"JavaScript",description:"The language of the web.",icon:"🟨",color:"#f7df1e",estimatedTime:"2-3 Months",category:"Skill Based",link:"https://roadmap.sh/javascript",milestones:[{id:"js_1",title:"Variables & Types",difficulty:"Beginner",estimatedHours:20,content:"Let vs Const vs Var. Primitives (String, Number, Boolean) vs Objects. Template Literals for strings.",topics:["Variables","Data Types","Operators"],resources:[]},{id:"js_2",title:"Control Flow & Functions",difficulty:"Beginner",estimatedHours:30,content:"If/Else, Switch, Loops (for, while). Function Declarations vs Arrow Functions. Understanding Scope (Global, Function, Block).",topics:["Functions","Loops","Scope"],resources:[]},{id:"js_3",title:"DOM Manipulation",difficulty:"Intermediate",estimatedHours:40,content:"Interacting with the browser. selecting elements (querySelector). Event Listeners (click, submit). Modifying styles and classes.",topics:["DOM","Events","HTMLCollection"],resources:[]},{id:"js_4",title:"Asynchronous JavaScript",difficulty:"Advanced",estimatedHours:50,content:"JavaScript is single-threaded. Callbacks (Callback Hell). Promises (.then/.catch). Async/Await syntax. The Event Loop.",topics:["Promises","Async/Await","Event Loop","Fetch API"],resources:[]},{id:"js_5",title:"Modern ES6+ Features",difficulty:"Intermediate",estimatedHours:30,content:"Destructuring (Arrays/Objects). Spread/Rest operators (...). Modules (import/export). Classes in JS.",topics:["Destructuring","Spread","Modules"],resources:[]},{id:"js_6",title:"Tooling",difficulty:"Advanced",estimatedHours:20,content:"npm/yarn for packages. Webpack/Vite for bundling. Babel for transpiling.",topics:["npm","Vite","Bundlers"],resources:[]}]},typescript:{id:"typescript",title:"TypeScript",description:"JavaScript with syntax for types.",icon:"🔷",color:"#3178c6",estimatedTime:"1-2 Months",category:"Skill Based",link:"https://roadmap.sh/typescript",milestones:[{id:"ts_1",title:"Basic Types",difficulty:"Beginner",estimatedHours:20,content:"Superset of JS. Type annotations (string, number, boolean). Arrays and Tuples. The 'any' and 'unknown' types.",topics:["Type Annotations","Inference","Tuples"],resources:[]},{id:"ts_2",title:"Interfaces & Types",difficulty:"Intermediate",estimatedHours:30,content:"Defining shapes of objects. Type Aliases vs Interfaces. Optional properties (?). Readonly properties.",topics:["Interfaces","Type Aliases"],resources:[]},{id:"ts_3",title:"Functions",difficulty:"Intermediate",estimatedHours:20,content:"Typing arguments and return values. Function Overloads. Optional parameters.",topics:["Function Types","Overloads"],resources:[]},{id:"ts_4",title:"Unions & Intersections",difficulty:"Advanced",estimatedHours:30,content:"Combining types. Union types (|) for 'this OR that'. Intersection types (&) for 'this AND that'. Type Narrowing/Guards.",topics:["Unions","Intersections","Type Guards"],resources:[]},{id:"ts_5",title:"Generics",difficulty:"Expert",estimatedHours:50,content:"Reusable code components. Generic Functions (<T>). Generic Interfaces. Constraints (extends).",topics:["Generics","Keyof","Constraints"],resources:[]},{id:"ts_6",title:"Utility Types",difficulty:"Advanced",estimatedHours:20,content:"Built-in helpers. Partial, Required, Pick, Omit, Record. Mapped Types.",topics:["Utility Types","Mapped Types"],resources:[]}]},cpp:{id:"cpp",title:"C++",description:"High-performance programming.",icon:"➕",color:"#00599c",estimatedTime:"4-6 Months",category:"Skill Based",link:"https://roadmap.sh/cpp",milestones:[{id:"cpp_1",title:"Basics & Flow Control",difficulty:"Beginner",estimatedHours:30,content:"Syntax, Variables, Input/Output (cin, cout). Decision making (if, switch) and Loops.",topics:["Syntax","IO","Control Flow"],resources:[]},{id:"cpp_2",title:"Functions & Pointers",difficulty:"Intermediate",estimatedHours:50,content:"Pass by Value vs Reference. Pointers (* and &). Pointer arithmetic. Const correctness.",topics:["Pointers","References","Memory Addresses"],resources:[]},{id:"cpp_3",title:"Memory Management",difficulty:"Advanced",estimatedHours:60,content:"Stack vs Heap. Dynamic allocation (new/delete). Memory leaks and how to avoid them (RAII). Smart Pointers (unique_ptr, shared_ptr).",topics:["Stack","Heap","Smart Pointers","RAII"],resources:[]},{id:"cpp_4",title:"OOP in C++",difficulty:"Advanced",estimatedHours:50,content:"Classes, Objects. Access specifiers (public, private, protected). Inheritance. Polymorphism (Virtual functions).",topics:["OOP","Virtual Functions","Inheritance"],resources:[]},{id:"cpp_5",title:"STL (Standard Template Library)",difficulty:"Advanced",estimatedHours:60,content:"Don't reinvent the wheel. Vectors, Lists, Maps, Sets. Algorithms (sort, find, binary_search). Iterators.",topics:["Vectors","Maps","Algorithms","Iterators"],resources:[]},{id:"cpp_6",title:"Templates",difficulty:"Expert",estimatedHours:40,content:"Generic programming. Function Templates and Class Templates. Template Metaprogramming basics.",topics:["Templates","Generics"],resources:[]}]},go:{id:"go",title:"Go",description:"Simple, reliable, efficient software.",icon:"🐹",color:"#00add8",estimatedTime:"2-3 Months",category:"Skill Based",link:"https://roadmap.sh/golang",milestones:[{id:"go_1",title:"Go Basics",difficulty:"Beginner",estimatedHours:20,content:"Packages (main), Imports, Variables (var, :=). Basic Types. Control structures (if, for, switch). No while loop!",topics:["Syntax","Variables","Loops"],resources:[]},{id:"go_2",title:"Data Structures",difficulty:"Intermediate",estimatedHours:30,content:"Arrays (fixed size) vs Slices (dynamic). Maps (key-value). Structs (custom types). Range keyword.",topics:["Slices","Maps","Structs"],resources:[]},{id:"go_3",title:"Functions & Interfaces",difficulty:"Intermediate",estimatedHours:40,content:"Multiple return values. Named return values. Interfaces are satisfied implicitly (duck typing). Defer keyword.",topics:["Functions","Interfaces","Defer"],resources:[]},{id:"go_4",title:"Concurrency",difficulty:"Advanced",estimatedHours:50,content:"Goroutines (lightweight threads managed by Go runtime). Channels (typed conduits for data). Select statement. WaitGroups.",topics:["Goroutines","Channels","WaitGroup"],resources:[]},{id:"go_5",title:"Error Handling",difficulty:"Intermediate",estimatedHours:20,content:"No exceptions. Errors are values. checking `if err != nil`. Custom error types.",topics:["Errors","Panic","Recover"],resources:[]},{id:"go_6",title:"Go Modules & Testing",difficulty:"Advanced",estimatedHours:30,content:"Dependency management (go.mod). Built-in testing framework (go test). Writing benchmarks.",topics:["Modules","Testing","Benchmarks"],resources:[]}]},rust:{id:"rust",title:"Rust",description:"Performance and safety.",icon:"🦀",color:"#000000",estimatedTime:"4-6 Months",category:"Skill Based",link:"https://roadmap.sh/rust",milestones:[{id:"rs_1",title:"Ownership",difficulty:"Advanced",estimatedHours:50,content:"The unique feature. Ownership, Borrowing, Lifetimes. Guarantees memory safety without Garbage Collection.",topics:["Ownership","Borrowing","Lifetimes"],resources:[]},{id:"rs_2",title:"Traits",difficulty:"Intermediate",estimatedHours:30,content:"Rust's version of interfaces. Shared behavior.",topics:["Traits","Impl"],resources:[]}]},php:{id:"php",title:"PHP",description:"Server-side scripting.",icon:"🐘",color:"#777bb4",estimatedTime:"2-3 Months",category:"Skill Based",link:"https://roadmap.sh/php",milestones:[{id:"php_1",title:"Basics",difficulty:"Beginner",estimatedHours:20,content:"Server-side rendering. Arrays (associative). Superglobals ($_GET, $_POST).",topics:["Syntax","Arrays","Forms"],resources:[]},{id:"php_2",title:"Laravel",difficulty:"Advanced",estimatedHours:40,content:"The dominant framework. MVC structure, Eloquent ORM, Blade templates.",topics:["Laravel","MVC","ORM"],resources:[]}]},docker:{id:"docker",title:"Docker",description:"Containerization standard.",icon:"🐳",color:"#2496ed",estimatedTime:"1 Month",category:"Skill Based",link:"https://roadmap.sh/docker",milestones:[{id:"dk_1",title:"Basics",difficulty:"Beginner",estimatedHours:15,content:"Images vs Containers. Docker Hub. Basic commands (run, pull, build).",topics:["Images","Containers","CLI"],resources:[]},{id:"dk_2",title:"Dockerfile",difficulty:"Intermediate",estimatedHours:20,content:"Writing recipes for images. FROM, RUN, COPY, CMD.",topics:["Dockerfile","Layers"],resources:[]}]},kubernetes:{id:"kubernetes",title:"Kubernetes",description:"Container orchestration.",icon:"☸️",color:"#326ce5",estimatedTime:"3-5 Months",category:"Skill Based",link:"https://roadmap.sh/kubernetes",milestones:[{id:"k8s_1",title:"Concepts",difficulty:"Intermediate",estimatedHours:30,content:"Pods, Services, Deployments. The declarative model.",topics:["Pods","Services","YAML"],resources:[]},{id:"k8s_2",title:"Architecture",difficulty:"Advanced",estimatedHours:30,content:"Control Plane vs Worker Nodes.",topics:["Control Plane","Nodes"],resources:[]}]},aws:{id:"aws",title:"AWS",description:"Amazon Web Services.",icon:"☁️",color:"#ff9900",estimatedTime:"3-6 Months",category:"Skill Based",link:"https://roadmap.sh/aws",milestones:[{id:"aws_1",title:"Compute (EC2)",difficulty:"Intermediate",estimatedHours:20,content:"Virtual machines in the cloud. Instance types, Security Groups (Firewalls).",topics:["EC2","Security Groups"],resources:[]},{id:"aws_2",title:"Storage (S3)",difficulty:"Beginner",estimatedHours:10,content:"Object storage. Buckets, Objects, Permissions.",topics:["S3","Buckets"],resources:[]},{id:"aws_3",title:"Networking (VPC)",difficulty:"Advanced",estimatedHours:30,content:"Virtual Private Cloud. Subnets, Route Tables, Internet Gateways.",topics:["VPC","Subnets"],resources:[]}]},linux:{id:"linux",title:"Linux",description:"Open source operating system.",icon:"🐧",color:"#fcc624",estimatedTime:"1-2 Months",category:"Skill Based",link:"https://roadmap.sh/linux",milestones:[{id:"lnx_1",title:"CLI Basics",difficulty:"Beginner",estimatedHours:20,content:"Navigating the filesystem. ls, cd, mkdir, rm, mv, cp. Man pages.",topics:["CLI","Filesystem"],resources:[]},{id:"lnx_2",title:"Permissions",difficulty:"Intermediate",estimatedHours:15,content:"Chmod, chown. User and Group management.",topics:["Permissions","Users"],resources:[]}]},sql:{id:"sql",title:"SQL",description:"Structured Query Language.",icon:"🗄️",color:"#00bcd4",estimatedTime:"1-2 Months",category:"Skill Based",link:"https://roadmap.sh/sql",milestones:[{id:"sql_1",title:"Queries",difficulty:"Beginner",estimatedHours:20,content:"SELECT * FROM. Filtering (WHERE). Sorting (ORDER BY).",topics:["SELECT","WHERE","ORDER BY"],resources:[]},{id:"sql_2",title:"Joins",difficulty:"Intermediate",estimatedHours:20,content:"Combining tables. INNER, LEFT, RIGHT, FULL Joins.",topics:["JOINS","Relationships"],resources:[]}]},mongodb:{id:"mongodb",title:"MongoDB",description:"NoSQL Database.",icon:"🍃",color:"#47a248",estimatedTime:"1 Month",category:"Skill Based",link:"https://roadmap.sh/mongodb",milestones:[{id:"mgo_1",title:"Documents",difficulty:"Beginner",estimatedHours:15,content:"JSON-like documents. Collections vs Tables. Flexible Schema.",topics:["BSON","Collections"],resources:[]},{id:"mgo_2",title:"Aggregation",difficulty:"Advanced",estimatedHours:25,content:"Aggregation Pipelines. Match, Group, Sort stages.",topics:["Pipelines","Match/Group"],resources:[]}]},graphql:{id:"graphql",title:"GraphQL",description:"Query language for APIs.",icon:"⚛️",color:"#e535ab",estimatedTime:"1 Month",category:"Skill Based",link:"https://roadmap.sh/graphql",milestones:[{id:"gql_1",title:"Schema",difficulty:"Intermediate",estimatedHours:20,content:"Types, Query, Mutation. Defining the graph.",topics:["Schema SDL","Types"],resources:[]},{id:"gql_2",title:"Resolvers",difficulty:"Advanced",estimatedHours:20,content:"Functions that fetch the data for fields. Solving the N+1 problem.",topics:["Resolvers","N+1 Problem"],resources:[]}]},cybersecurity:{id:"cybersecurity",title:"Cyber Security",description:"Protecting systems and networks.",icon:"🔒",color:"#d32f2f",estimatedTime:"6-12 Months",category:"Skill Based",link:"https://roadmap.sh/cyber-security",milestones:[{id:"cs_1",title:"Network Security",difficulty:"Intermediate",estimatedHours:40,content:"Firewalls, VPNs, IDS/IPS. OSI Model layers.",topics:["Networking","Firewalls"],resources:[]},{id:"cs_2",title:"Penetration Testing",difficulty:"Advanced",estimatedHours:50,content:"Ethical Hacking. Kali Linux. Metasploit. Identifying vulnerabilities.",topics:["Ethical Hacking","Kali Linux"],resources:[]}]},uxdesign:{id:"uxdesign",title:"UX Design",description:"User Experience Design.",icon:"🎨",color:"#e91e63",estimatedTime:"3-6 Months",category:"Skill Based",link:"https://roadmap.sh/ux-design",milestones:[{id:"ux_1",title:"Research",difficulty:"Beginner",estimatedHours:30,content:"User Personas, User Journeys. Interviews and Surveys.",topics:["User Research","Personas"],resources:[]},{id:"ux_2",title:"Prototyping",difficulty:"Intermediate",estimatedHours:40,content:"Wireframing (Figma/Sketch). Low-fi vs Hi-fi prototypes.",topics:["Figma","Wireframing"],resources:[]}]},blockchain:{id:"blockchain",title:"Blockchain",description:"Decentralized technology.",icon:"🔗",color:"#f57c00",estimatedTime:"4-8 Months",category:"Skill Based",link:"https://roadmap.sh/blockchain",milestones:[{id:"bc_1",title:"Cryptography",difficulty:"Advanced",estimatedHours:30,content:"Hashing (SHA-256), Public/Private Keys, Digital Signatures.",topics:["Hashing","Encryption"],resources:[]},{id:"bc_2",title:"Smart Contracts",difficulty:"Expert",estimatedHours:50,content:"Solidity (Ethereum). Writing code that lives on chain.",topics:["Solidity","Ethereum","Web3.js"],resources:[]}]},systemdesign:{id:"systemdesign",title:"System Design",description:"Designing scalable systems.",icon:"🏗️",color:"#607d8b",estimatedTime:"2-3 Months",category:"Skill Based",link:"https://roadmap.sh/system-design",milestones:[{id:"sd_1",title:"Concepts",difficulty:"Advanced",estimatedHours:30,content:"Load Balancing, Caching, Database Sharding, Replication.",topics:["Scalability","Reliability"],resources:[]},{id:"sd_2",title:"Interviews",difficulty:"Expert",estimatedHours:20,content:"Design Twitter, Design Uber. Standard interview questions.",topics:["Interview Prep","Architecture"],resources:[]}]},swift:{id:"swift-ui",title:"Swift",description:"Apple's programming language.",icon:"🍎",color:"#f05138",estimatedTime:"2-3 Months",category:"Skill Based",link:"https://roadmap.sh/swift",milestones:[{id:"sw_1",title:"Basics",difficulty:"Beginner",estimatedHours:20,content:"Variables, Optionals, Control Flow.",topics:["Syntax","Optionals"],resources:[]}]}},Nn={...jn,...Mn},Wn=Nn,ue={frontend:{id:"frontend",title:"Frontend Developer Roadmap",description:"Complete path to becoming a professional frontend developer",icon:"🎨",color:"#667eea",estimatedTime:"6-8 months",milestones:[{id:"html-css",title:"HTML & CSS Fundamentals",description:"Master the building blocks of web development",difficulty:"Beginner",estimatedHours:40,topics:["HTML5 Semantic Elements","CSS Flexbox & Grid","Responsive Design","CSS Animations","Accessibility (a11y)"],resources:[{title:"MDN Web Docs",url:"https://developer.mozilla.org"},{title:"CSS Tricks",url:"https://css-tricks.com"}]},{id:"javascript",title:"JavaScript Essentials",description:"Learn modern JavaScript (ES6+)",difficulty:"Beginner",estimatedHours:60,topics:["Variables, Data Types, Operators","Functions & Arrow Functions","Arrays & Objects","DOM Manipulation","Event Handling","Async/Await & Promises","Fetch API"],resources:[{title:"JavaScript.info",url:"https://javascript.info"},{title:"Eloquent JavaScript",url:"https://eloquentjavascript.net"}]},{id:"react",title:"React Framework",description:"Build modern UIs with React",difficulty:"Intermediate",estimatedHours:80,topics:["Components & Props","State & Lifecycle","Hooks (useState, useEffect, etc.)","Context API","React Router","Form Handling","Performance Optimization"],resources:[{title:"React Official Docs",url:"https://react.dev"},{title:"React Patterns",url:"https://reactpatterns.com"}]},{id:"state-management",title:"State Management",description:"Manage complex application state",difficulty:"Intermediate",estimatedHours:30,topics:["Redux Toolkit","Zustand","React Query","Global vs Local State"],resources:[{title:"Redux Docs",url:"https://redux.js.org"}]},{id:"build-tools",title:"Build Tools & Bundlers",description:"Modern development workflow",difficulty:"Intermediate",estimatedHours:20,topics:["Vite","Webpack","npm/yarn","Environment Variables","Code Splitting"],resources:[{title:"Vite Guide",url:"https://vitejs.dev"}]},{id:"testing",title:"Testing",description:"Write reliable, maintainable code",difficulty:"Advanced",estimatedHours:40,topics:["Jest","React Testing Library","Unit Tests","Integration Tests","E2E Testing (Playwright)"],resources:[{title:"Testing Library",url:"https://testing-library.com"}]}]},backend:{id:"backend",title:"Backend Developer Roadmap",description:"Master server-side development",icon:"⚙️",color:"#f093fb",estimatedTime:"6-9 months",milestones:[{id:"programming-basics",title:"Programming Fundamentals",description:"Choose and master a backend language",difficulty:"Beginner",estimatedHours:60,topics:["Python / Node.js / Java","Data Structures","OOP Concepts","Error Handling","File I/O"],resources:[{title:"Python Docs",url:"https://docs.python.org"},{title:"Node.js Docs",url:"https://nodejs.org"}]},{id:"databases",title:"Databases",description:"SQL and NoSQL databases",difficulty:"Intermediate",estimatedHours:50,topics:["PostgreSQL / MySQL","MongoDB","SQL Queries","Database Design","Indexing","Transactions","ORMs (Sequelize, Mongoose)"],resources:[{title:"PostgreSQL Tutorial",url:"https://www.postgresqltutorial.com"}]},{id:"api-development",title:"API Development",description:"Build RESTful and GraphQL APIs",difficulty:"Intermediate",estimatedHours:70,topics:["REST API Design","Express.js / FastAPI","Authentication (JWT, OAuth)","Authorization","API Documentation (Swagger)","GraphQL Basics"],resources:[{title:"REST API Tutorial",url:"https://restfulapi.net"}]},{id:"security",title:"Security Best Practices",description:"Secure your applications",difficulty:"Advanced",estimatedHours:30,topics:["HTTPS/TLS","CORS","SQL Injection Prevention","XSS Protection","Rate Limiting","Environment Variables"],resources:[{title:"OWASP Top 10",url:"https://owasp.org"}]},{id:"caching",title:"Caching & Performance",description:"Optimize application performance",difficulty:"Advanced",estimatedHours:25,topics:["Redis","Memcached","CDN","Database Query Optimization","Load Balancing"],resources:[{title:"Redis Docs",url:"https://redis.io"}]},{id:"deployment",title:"Deployment & DevOps",description:"Deploy and maintain applications",difficulty:"Advanced",estimatedHours:40,topics:["Docker","CI/CD Pipelines","AWS / Azure / GCP","Nginx","Monitoring & Logging"],resources:[{title:"Docker Docs",url:"https://docs.docker.com"}]}]},dsa:{id:"dsa",title:"Data Structures & Algorithms",description:"Master DSA for coding interviews",icon:"🧮",color:"#4facfe",estimatedTime:"4-6 months",milestones:[{id:"complexity",title:"Time & Space Complexity",description:"Analyze algorithm efficiency",difficulty:"Beginner",estimatedHours:15,topics:["Big O Notation","Time Complexity Analysis","Space Complexity Analysis","Best, Average, Worst Cases"],resources:[{title:"Big-O Cheat Sheet",url:"https://www.bigocheatsheet.com"}]},{id:"arrays-strings",title:"Arrays & Strings",description:"Master fundamental data structures",difficulty:"Beginner",estimatedHours:40,topics:["Two Pointers","Sliding Window","Prefix Sum","String Manipulation","Common Patterns"],resources:[{title:"LeetCode Patterns",url:"https://leetcode.com"}]},{id:"linked-lists",title:"Linked Lists",description:"Linear data structures",difficulty:"Beginner",estimatedHours:25,topics:["Singly Linked List","Doubly Linked List","Fast & Slow Pointers","Reversal","Cycle Detection"],resources:[{title:"Visualgo",url:"https://visualgo.net"}]},{id:"stacks-queues",title:"Stacks & Queues",description:"LIFO and FIFO structures",difficulty:"Beginner",estimatedHours:20,topics:["Stack Implementation","Queue Implementation","Monotonic Stack","Priority Queue","Deque"],resources:[]},{id:"trees",title:"Trees & Binary Search Trees",description:"Hierarchical data structures",difficulty:"Intermediate",estimatedHours:50,topics:["Binary Tree Traversals","BST Operations","Tree Construction","Lowest Common Ancestor","Path Sum Problems"],resources:[]},{id:"graphs",title:"Graphs",description:"Complex relationships and networks",difficulty:"Intermediate",estimatedHours:60,topics:["Graph Representation","BFS & DFS","Shortest Path (Dijkstra)","Topological Sort","Union Find","Minimum Spanning Tree"],resources:[]},{id:"dynamic-programming",title:"Dynamic Programming",description:"Optimization problems",difficulty:"Advanced",estimatedHours:80,topics:["Memoization","Tabulation","1D DP","2D DP","Knapsack Problems","LCS, LIS","State Machine DP"],resources:[{title:"DP Patterns",url:"https://leetcode.com/discuss/general-discussion/458695"}]},{id:"advanced-topics",title:"Advanced Topics",description:"Specialized algorithms",difficulty:"Advanced",estimatedHours:40,topics:["Backtracking","Greedy Algorithms","Bit Manipulation","Trie","Segment Tree","Binary Search Variations"],resources:[]}]},systemDesign:{id:"systemDesign",title:"System Design",description:"Design scalable distributed systems",icon:"🏗️",color:"#fa709a",estimatedTime:"3-4 months",milestones:[{id:"fundamentals",title:"System Design Fundamentals",description:"Core concepts and principles",difficulty:"Intermediate",estimatedHours:30,topics:["Scalability","Reliability","Availability","CAP Theorem","Consistency Patterns","Load Balancing"],resources:[{title:"System Design Primer",url:"https://github.com/donnemartin/system-design-primer"}]},{id:"databases-scaling",title:"Database Scaling",description:"Scale your data layer",difficulty:"Intermediate",estimatedHours:35,topics:["Replication","Sharding","Partitioning","SQL vs NoSQL","Database Indexing","Connection Pooling"],resources:[]},{id:"caching-cdn",title:"Caching & CDN",description:"Improve performance with caching",difficulty:"Intermediate",estimatedHours:25,topics:["Cache Strategies","Redis/Memcached","CDN","Cache Invalidation","Write-through vs Write-back"],resources:[]},{id:"messaging",title:"Message Queues & Pub/Sub",description:"Asynchronous communication",difficulty:"Advanced",estimatedHours:30,topics:["RabbitMQ","Kafka","Message Queue Patterns","Event-Driven Architecture","Pub/Sub Model"],resources:[]},{id:"microservices",title:"Microservices Architecture",description:"Design distributed systems",difficulty:"Advanced",estimatedHours:40,topics:["Service Discovery","API Gateway","Circuit Breaker","Service Mesh","Inter-service Communication"],resources:[]},{id:"case-studies",title:"Real-World Case Studies",description:"Design popular systems",difficulty:"Advanced",estimatedHours:50,topics:["Design Twitter","Design Instagram","Design URL Shortener","Design Netflix","Design Uber","Design WhatsApp"],resources:[{title:"Grokking System Design",url:"https://www.educative.io"}]}]},fullstack:{id:"fullstack",title:"Full Stack Developer",description:"Master both frontend and backend",icon:"🚀",color:"#764ba2",estimatedTime:"10-12 months",milestones:[{id:"web-fundamentals",title:"Web Fundamentals",description:"HTML, CSS, JavaScript basics",difficulty:"Beginner",estimatedHours:60,topics:["HTML5 & CSS3","JavaScript ES6+","Responsive Design","Git & GitHub"],resources:[]},{id:"frontend-framework",title:"Frontend Framework",description:"React or Vue.js",difficulty:"Intermediate",estimatedHours:80,topics:["React/Vue Fundamentals","Component Architecture","State Management","Routing"],resources:[]},{id:"backend-basics",title:"Backend Development",description:"Server-side programming",difficulty:"Intermediate",estimatedHours:70,topics:["Node.js/Python","Express/FastAPI","RESTful APIs","Authentication"],resources:[]},{id:"database-management",title:"Database Management",description:"SQL and NoSQL",difficulty:"Intermediate",estimatedHours:50,topics:["PostgreSQL","MongoDB","Database Design","ORMs"],resources:[]},{id:"deployment-devops",title:"Deployment & DevOps",description:"Ship your applications",difficulty:"Advanced",estimatedHours:45,topics:["Docker","CI/CD","Cloud Platforms (AWS/Azure)","Monitoring"],resources:[]},{id:"fullstack-projects",title:"Full Stack Projects",description:"Build end-to-end applications",difficulty:"Advanced",estimatedHours:100,topics:["E-commerce Platform","Social Media App","Real-time Chat","Project Management Tool"],resources:[]}]},...Wn};function Fn(t){return g({attr:{role:"img",viewBox:"0 0 24 24"},child:[{tag:"path",attr:{d:"M6.763 10.036c0 .296.032.535.088.71.064.176.144.368.256.576.04.063.056.127.056.183 0 .08-.048.16-.152.24l-.503.335a.383.383 0 0 1-.208.072c-.08 0-.16-.04-.239-.112a2.47 2.47 0 0 1-.287-.375 6.18 6.18 0 0 1-.248-.471c-.622.734-1.405 1.101-2.347 1.101-.67 0-1.205-.191-1.596-.574-.391-.384-.59-.894-.59-1.533 0-.678.239-1.23.726-1.644.487-.415 1.133-.623 1.955-.623.272 0 .551.024.846.064.296.04.6.104.918.176v-.583c0-.607-.127-1.03-.375-1.277-.255-.248-.686-.367-1.3-.367-.28 0-.568.031-.863.103-.295.072-.583.16-.862.272a2.287 2.287 0 0 1-.28.104.488.488 0 0 1-.127.023c-.112 0-.168-.08-.168-.247v-.391c0-.128.016-.224.056-.28a.597.597 0 0 1 .224-.167c.279-.144.614-.264 1.005-.36a4.84 4.84 0 0 1 1.246-.151c.95 0 1.644.216 2.091.647.439.43.662 1.085.662 1.963v2.586zm-3.24 1.214c.263 0 .534-.048.822-.144.287-.096.543-.271.758-.51.128-.152.224-.32.272-.512.047-.191.08-.423.08-.694v-.335a6.66 6.66 0 0 0-.735-.136 6.02 6.02 0 0 0-.75-.048c-.535 0-.926.104-1.19.32-.263.215-.39.518-.39.917 0 .375.095.655.295.846.191.2.47.296.838.296zm6.41.862c-.144 0-.24-.024-.304-.08-.064-.048-.12-.16-.168-.311L7.586 5.55a1.398 1.398 0 0 1-.072-.32c0-.128.064-.2.191-.2h.783c.151 0 .255.025.31.08.065.048.113.16.16.312l1.342 5.284 1.245-5.284c.04-.16.088-.264.151-.312a.549.549 0 0 1 .32-.08h.638c.152 0 .256.025.32.08.063.048.12.16.151.312l1.261 5.348 1.381-5.348c.048-.16.104-.264.16-.312a.52.52 0 0 1 .311-.08h.743c.127 0 .2.065.2.2 0 .04-.009.08-.017.128a1.137 1.137 0 0 1-.056.2l-1.923 6.17c-.048.16-.104.263-.168.311a.51.51 0 0 1-.303.08h-.687c-.151 0-.255-.024-.32-.08-.063-.056-.119-.16-.15-.32l-1.238-5.148-1.23 5.14c-.04.16-.087.264-.15.32-.065.056-.177.08-.32.08zm10.256.215c-.415 0-.83-.048-1.229-.143-.399-.096-.71-.2-.918-.32-.128-.071-.215-.151-.247-.223a.563.563 0 0 1-.048-.224v-.407c0-.167.064-.247.183-.247.048 0 .096.008.144.024.048.016.12.048.2.08.271.12.566.215.878.279.319.064.63.096.95.096.502 0 .894-.088 1.165-.264a.86.86 0 0 0 .415-.758.777.777 0 0 0-.215-.559c-.144-.151-.416-.287-.807-.415l-1.157-.36c-.583-.183-1.014-.454-1.277-.813a1.902 1.902 0 0 1-.4-1.158c0-.335.073-.63.216-.886.144-.255.335-.479.575-.654.24-.184.51-.32.83-.415.32-.096.655-.136 1.006-.136.175 0 .359.008.535.032.183.024.35.056.518.088.16.04.312.08.455.127.144.048.256.096.336.144a.69.69 0 0 1 .24.2.43.43 0 0 1 .071.263v.375c0 .168-.064.256-.184.256a.83.83 0 0 1-.303-.096 3.652 3.652 0 0 0-1.532-.311c-.455 0-.815.071-1.062.223-.248.152-.375.383-.375.71 0 .224.08.416.24.567.159.152.454.304.877.44l1.134.358c.574.184.99.44 1.237.767.247.327.367.702.367 1.117 0 .343-.072.655-.207.926-.144.272-.336.511-.583.703-.248.2-.543.343-.886.447-.36.111-.734.167-1.142.167zM21.698 16.207c-2.626 1.94-6.442 2.969-9.722 2.969-4.598 0-8.74-1.7-11.87-4.526-.247-.223-.024-.527.272-.351 3.384 1.963 7.559 3.153 11.877 3.153 2.914 0 6.114-.607 9.06-1.852.439-.2.814.287.383.607zM22.792 14.961c-.336-.43-2.22-.207-3.074-.103-.255.032-.295-.192-.063-.36 1.5-1.053 3.967-.75 4.254-.399.287.36-.08 2.826-1.485 4.007-.215.184-.423.088-.327-.151.32-.79 1.03-2.57.695-2.994z"},child:[]}]})(t)}function Rn(t){return g({attr:{role:"img",viewBox:"0 0 24 24"},child:[{tag:"path",attr:{d:"M18.4395 5.5586c-.675 1.1664-1.352 2.3318-2.0274 3.498-.0366-.0155-.0742-.0286-.1113-.043-1.8249-.6957-3.484-.8-4.42-.787-1.8551.0185-3.3544.4643-4.2597.8203-.084-.1494-1.7526-3.021-2.0215-3.4864a1.1451 1.1451 0 0 0-.1406-.1914c-.3312-.364-.9054-.4859-1.379-.203-.475.282-.7136.9361-.3886 1.5019 1.9466 3.3696-.0966-.2158 1.9473 3.3593.0172.031-.4946.2642-1.3926 1.0177C2.8987 12.176.452 14.772 0 18.9902h24c-.119-1.1108-.3686-2.099-.7461-3.0683-.7438-1.9118-1.8435-3.2928-2.7402-4.1836a12.1048 12.1048 0 0 0-2.1309-1.6875c.6594-1.122 1.312-2.2559 1.9649-3.3848.2077-.3615.1886-.7956-.0079-1.1191a1.1001 1.1001 0 0 0-.8515-.5332c-.5225-.0536-.9392.3128-1.0488.5449zm-.0391 8.461c.3944.5926.324 1.3306-.1563 1.6503-.4799.3197-1.188.0985-1.582-.4941-.3944-.5927-.324-1.3307.1563-1.6504.4727-.315 1.1812-.1086 1.582.4941zM7.207 13.5273c.4803.3197.5506 1.0577.1563 1.6504-.394.5926-1.1038.8138-1.584.4941-.48-.3197-.5503-1.0577-.1563-1.6504.4008-.6021 1.1087-.8106 1.584-.4941z"},child:[]}]})(t)}function qn(t){return g({attr:{role:"img",viewBox:"0 0 24 24"},child:[{tag:"path",attr:{d:"M16.712 17.711H7.288l-1.204 2.916L12 24l5.916-3.373-1.204-2.916ZM14.692 0l7.832 16.855.814-12.856L14.692 0ZM9.308 0 .662 3.999l.814 12.856L9.308 0Zm-.405 13.93h6.198L12 6.396 8.903 13.93Z"},child:[]}]})(t)}function Bn(t){return g({attr:{role:"img",viewBox:"0 0 24 24"},child:[{tag:"path",attr:{d:"M16.5088 16.8447c.1475-.5068.0908-.9707-.1553-1.3154-.2246-.3164-.6045-.499-1.0615-.5205l-8.6592-.1123a.1559.1559 0 0 1-.1333-.0713c-.0283-.042-.0351-.0986-.021-.1553.0278-.084.1123-.1484.2036-.1562l8.7359-.1123c1.0351-.0489 2.1601-.8868 2.5537-1.9136l.499-1.3013c.0215-.0561.0293-.1128.0147-.168-.5625-2.5463-2.835-4.4453-5.5499-4.4453-2.5039 0-4.6284 1.6177-5.3876 3.8614-.4927-.3658-1.1187-.5625-1.794-.499-1.2026.119-2.1665 1.083-2.2861 2.2856-.0283.31-.0069.6128.0635.894C1.5683 13.171 0 14.7754 0 16.752c0 .1748.0142.3515.0352.5273.0141.083.0844.1475.1689.1475h15.9814c.0909 0 .1758-.0645.2032-.1553l.12-.4268zm2.7568-5.5634c-.0771 0-.1611 0-.2383.0112-.0566 0-.1054.0415-.127.0976l-.3378 1.1744c-.1475.5068-.0918.9707.1543 1.3164.2256.3164.6055.498 1.0625.5195l1.8437.1133c.0557 0 .1055.0263.1329.0703.0283.043.0351.1074.0214.1562-.0283.084-.1132.1485-.204.1553l-1.921.1123c-1.041.0488-2.1582.8867-2.5527 1.914l-.1406.3585c-.0283.0713.0215.1416.0986.1416h6.5977c.0771 0 .1474-.0489.169-.126.1122-.4082.1757-.837.1757-1.2803 0-2.6025-2.125-4.727-4.7344-4.727"},child:[]}]})(t)}function Re(t){return g({attr:{role:"img",viewBox:"0 0 24 24"},child:[{tag:"path",attr:{d:"M22.394 6c-.167-.29-.398-.543-.652-.69L12.926.22c-.509-.294-1.34-.294-1.848 0L2.26 5.31c-.508.293-.923 1.013-.923 1.6v10.18c0 .294.104.62.271.91.167.29.398.543.652.69l8.816 5.09c.508.293 1.34.293 1.848 0l8.816-5.09c.254-.147.485-.4.652-.69.167-.29.27-.616.27-.91V6.91c.003-.294-.1-.62-.268-.91zM12 19.11c-3.92 0-7.109-3.19-7.109-7.11 0-3.92 3.19-7.11 7.11-7.11a7.133 7.133 0 016.156 3.553l-3.076 1.78a3.567 3.567 0 00-3.08-1.78A3.56 3.56 0 008.444 12 3.56 3.56 0 0012 15.555a3.57 3.57 0 003.08-1.778l3.078 1.78A7.135 7.135 0 0112 19.11zm7.11-6.715h-.79v.79h-.79v-.79h-.79v-.79h.79v-.79h.79v.79h.79zm2.962 0h-.79v.79h-.79v-.79h-.79v-.79h.79v-.79h.79v.79h.79z"},child:[]}]})(t)}function Gn(t){return g({attr:{role:"img",viewBox:"0 0 24 24"},child:[{tag:"path",attr:{d:"M1.5 0h21l-1.91 21.563L11.977 24l-8.565-2.438L1.5 0zm17.09 4.413L5.41 4.41l.213 2.622 10.125.002-.255 2.716h-6.64l.24 2.573h6.182l-.366 3.523-2.91.804-2.956-.81-.188-2.11h-2.61l.29 3.855L12 19.288l5.373-1.53L18.59 4.414z"},child:[]}]})(t)}function K(t){return g({attr:{role:"img",viewBox:"0 0 24 24"},child:[{tag:"path",attr:{d:"M13.983 11.078h2.119a.186.186 0 00.186-.185V9.006a.186.186 0 00-.186-.186h-2.119a.185.185 0 00-.185.185v1.888c0 .102.083.185.185.185m-2.954-5.43h2.118a.186.186 0 00.186-.186V3.574a.186.186 0 00-.186-.185h-2.118a.185.185 0 00-.185.185v1.888c0 .102.082.185.185.185m0 2.716h2.118a.187.187 0 00.186-.186V6.29a.186.186 0 00-.186-.185h-2.118a.185.185 0 00-.185.185v1.887c0 .102.082.185.185.186m-2.93 0h2.12a.186.186 0 00.184-.186V6.29a.185.185 0 00-.185-.185H8.1a.185.185 0 00-.185.185v1.887c0 .102.083.185.185.186m-2.964 0h2.119a.186.186 0 00.185-.186V6.29a.185.185 0 00-.185-.185H5.136a.186.186 0 00-.186.185v1.887c0 .102.084.185.186.186m5.893 2.715h2.118a.186.186 0 00.186-.185V9.006a.186.186 0 00-.186-.186h-2.118a.185.185 0 00-.185.185v1.888c0 .102.082.185.185.185m-2.93 0h2.12a.185.185 0 00.184-.185V9.006a.185.185 0 00-.184-.186h-2.12a.185.185 0 00-.184.185v1.888c0 .102.083.185.185.185m-2.964 0h2.119a.185.185 0 00.185-.185V9.006a.185.185 0 00-.184-.186h-2.12a.186.186 0 00-.186.186v1.887c0 .102.084.185.186.185m-2.92 0h2.12a.185.185 0 00.184-.185V9.006a.185.185 0 00-.184-.186h-2.12a.185.185 0 00-.184.185v1.888c0 .102.082.185.185.185M23.763 9.89c-.065-.051-.672-.51-1.954-.51-.338.001-.676.03-1.01.087-.248-1.7-1.653-2.53-1.716-2.566l-.344-.199-.226.327c-.284.438-.49.922-.612 1.43-.23.97-.09 1.882.403 2.661-.595.332-1.55.413-1.744.42H.751a.751.751 0 00-.75.748 11.376 11.376 0 00.692 4.062c.545 1.428 1.355 2.48 2.41 3.124 1.18.723 3.1 1.137 5.275 1.137.983.003 1.963-.086 2.93-.266a12.248 12.248 0 003.823-1.389c.98-.567 1.86-1.288 2.61-2.136 1.252-1.418 1.998-2.997 2.553-4.4h.221c1.372 0 2.215-.549 2.68-1.009.309-.293.55-.65.707-1.046l.098-.288Z"},child:[]}]})(t)}function qe(t){return g({attr:{role:"img",viewBox:"0 0 24 24"},child:[{tag:"path",attr:{d:"M24 8.77h-2.468v7.565h-1.425V8.77h-2.462V7.53H24zm-6.852 7.565h-4.821V7.53h4.63v1.24h-3.205v2.494h2.953v1.234h-2.953v2.604h3.396zm-6.708 0H8.882L4.78 9.863a2.896 2.896 0 0 1-.258-.51h-.036c.032.189.048.592.048 1.21v5.772H3.157V7.53h1.659l3.965 6.32c.167.261.275.442.323.54h.024c-.04-.233-.06-.629-.06-1.185V7.529h1.372zm-8.703-.693a.868.829 0 0 1-.869.829.868.829 0 0 1-.868-.83.868.829 0 0 1 .868-.828.868.829 0 0 1 .869.829Z"},child:[]}]})(t)}function En(t){return g({attr:{role:"img",viewBox:"0 0 24 24"},child:[{tag:"path",attr:{d:"M13.394 0C8.683 0 4.609 2.716 2.644 6.667h15.641a4.77 4.77 0 0 0 3.073-1.11c.446-.375.864-.785 1.247-1.243l.001-.002A11.974 11.974 0 0 0 13.394 0zM1.804 8.889a12.009 12.009 0 0 0 0 6.222h14.7a3.111 3.111 0 1 0 0-6.222zm.84 8.444C4.61 21.283 8.684 24 13.395 24c3.701 0 7.011-1.677 9.212-4.312l-.001-.002a9.958 9.958 0 0 0-1.247-1.243 4.77 4.77 0 0 0-3.073-1.11z"},child:[]}]})(t)}function Hn(t){return g({attr:{role:"img",viewBox:"0 0 24 24"},child:[{tag:"path",attr:{d:"M14.314 0L2.3 12 6 15.7 21.684.013h-7.357zm.014 11.072L7.857 17.53l6.47 6.47H21.7l-6.46-6.468 6.46-6.46h-7.37z"},child:[]}]})(t)}function Be(t){return g({attr:{role:"img",viewBox:"0 0 24 24"},child:[{tag:"path",attr:{d:"M23.546 10.93L13.067.452c-.604-.603-1.582-.603-2.188 0L8.708 2.627l2.76 2.76c.645-.215 1.379-.07 1.889.441.516.515.658 1.258.438 1.9l2.658 2.66c.645-.223 1.387-.078 1.9.435.721.72.721 1.884 0 2.604-.719.719-1.881.719-2.6 0-.539-.541-.674-1.337-.404-1.996L12.86 8.955v6.525c.176.086.342.203.488.348.713.721.713 1.883 0 2.6-.719.721-1.889.721-2.609 0-.719-.719-.719-1.879 0-2.598.182-.18.387-.316.605-.406V8.835c-.217-.091-.424-.222-.6-.401-.545-.545-.676-1.342-.396-2.009L7.636 3.7.45 10.881c-.6.605-.6 1.584 0 2.189l10.48 10.477c.604.604 1.582.604 2.186 0l10.43-10.43c.605-.603.605-1.582 0-2.187"},child:[]}]})(t)}function me(t){return g({attr:{role:"img",viewBox:"0 0 24 24"},child:[{tag:"path",attr:{d:"M21.038,4.9l-7.577-4.498C13.009,0.134,12.505,0,12,0c-0.505,0-1.009,0.134-1.462,0.403L2.961,4.9 C2.057,5.437,1.5,6.429,1.5,7.503v8.995c0,1.073,0.557,2.066,1.462,2.603l7.577,4.497C10.991,23.866,11.495,24,12,24 c0.505,0,1.009-0.134,1.461-0.402l7.577-4.497c0.904-0.537,1.462-1.529,1.462-2.603V7.503C22.5,6.429,21.943,5.437,21.038,4.9z M15.17,18.946l0.013,0.646c0.001,0.078-0.05,0.167-0.111,0.198l-0.383,0.22c-0.061,0.031-0.111-0.007-0.112-0.085L14.57,19.29 c-0.328,0.136-0.66,0.169-0.872,0.084c-0.04-0.016-0.057-0.075-0.041-0.142l0.139-0.584c0.011-0.046,0.036-0.092,0.069-0.121 c0.012-0.011,0.024-0.02,0.036-0.026c0.022-0.011,0.043-0.014,0.062-0.006c0.229,0.077,0.521,0.041,0.802-0.101 c0.357-0.181,0.596-0.545,0.592-0.907c-0.003-0.328-0.181-0.465-0.613-0.468c-0.55,0.001-1.064-0.107-1.072-0.917 c-0.007-0.667,0.34-1.361,0.889-1.8l-0.007-0.652c-0.001-0.08,0.048-0.168,0.111-0.2l0.37-0.236 c0.061-0.031,0.111,0.007,0.112,0.087l0.006,0.653c0.273-0.109,0.511-0.138,0.726-0.088c0.047,0.012,0.067,0.076,0.048,0.151 l-0.144,0.578c-0.011,0.044-0.036,0.088-0.065,0.116c-0.012,0.012-0.025,0.021-0.038,0.028c-0.019,0.01-0.038,0.013-0.057,0.009 c-0.098-0.022-0.332-0.073-0.699,0.113c-0.385,0.195-0.52,0.53-0.517,0.778c0.003,0.297,0.155,0.387,0.681,0.396 c0.7,0.012,1.003,0.318,1.01,1.023C16.105,17.747,15.736,18.491,15.17,18.946z M19.143,17.859c0,0.06-0.008,0.116-0.058,0.145 l-1.916,1.164c-0.05,0.029-0.09,0.004-0.09-0.056v-0.494c0-0.06,0.037-0.093,0.087-0.122l1.887-1.129 c0.05-0.029,0.09-0.004,0.09,0.056V17.859z M20.459,6.797l-7.168,4.427c-0.894,0.523-1.553,1.109-1.553,2.187v8.833 c0,0.645,0.26,1.063,0.66,1.184c-0.131,0.023-0.264,0.039-0.398,0.039c-0.42,0-0.833-0.114-1.197-0.33L3.226,18.64 c-0.741-0.44-1.201-1.261-1.201-2.142V7.503c0-0.881,0.46-1.702,1.201-2.142l7.577-4.498c0.363-0.216,0.777-0.33,1.197-0.33 c0.419,0,0.833,0.114,1.197,0.33l7.577,4.498c0.624,0.371,1.046,1.013,1.164,1.732C21.686,6.557,21.12,6.411,20.459,6.797z"},child:[]}]})(t)}function Ge(t){return g({attr:{role:"img",viewBox:"0 0 24 24"},child:[{tag:"path",attr:{d:"M1.811 10.231c-.047 0-.058-.023-.035-.059l.246-.315c.023-.035.081-.058.128-.058h4.172c.046 0 .058.035.035.07l-.199.303c-.023.036-.082.07-.117.07zM.047 11.306c-.047 0-.059-.023-.035-.058l.245-.316c.023-.035.082-.058.129-.058h5.328c.047 0 .07.035.058.07l-.093.28c-.012.047-.058.07-.105.07zm2.828 1.075c-.047 0-.059-.035-.035-.07l.163-.292c.023-.035.07-.07.117-.07h2.337c.047 0 .07.035.07.082l-.023.28c0 .047-.047.082-.082.082zm12.129-2.36c-.736.187-1.239.327-1.963.514-.176.046-.187.058-.34-.117-.174-.199-.303-.327-.548-.444-.737-.362-1.45-.257-2.115.175-.795.514-1.204 1.274-1.192 2.22.011.935.654 1.706 1.577 1.835.795.105 1.46-.175 1.987-.77.105-.13.198-.27.315-.434H10.47c-.245 0-.304-.152-.222-.35.152-.362.432-.97.596-1.274a.315.315 0 01.292-.187h4.253c-.023.316-.023.631-.07.947a4.983 4.983 0 01-.958 2.29c-.841 1.11-1.94 1.8-3.33 1.986-1.145.152-2.209-.07-3.143-.77-.865-.655-1.356-1.52-1.484-2.595-.152-1.274.222-2.419.993-3.424.83-1.086 1.928-1.776 3.272-2.02 1.098-.2 2.15-.07 3.096.571.62.41 1.063.97 1.356 1.648.07.105.023.164-.117.2m3.868 6.461c-1.064-.024-2.034-.328-2.852-1.029a3.665 3.665 0 01-1.262-2.255c-.21-1.32.152-2.489.947-3.529.853-1.122 1.881-1.706 3.272-1.95 1.192-.21 2.314-.095 3.33.595.923.63 1.496 1.484 1.648 2.605.198 1.578-.257 2.863-1.344 3.962-.771.783-1.718 1.273-2.805 1.495-.315.06-.63.07-.934.106zm2.78-4.72c-.011-.153-.011-.27-.034-.387-.21-1.157-1.274-1.81-2.384-1.554-1.087.245-1.788.935-2.045 2.033-.21.912.234 1.835 1.075 2.21.643.28 1.285.244 1.905-.07.923-.48 1.425-1.228 1.484-2.233z"},child:[]}]})(t)}function zn(t){return g({attr:{role:"img",viewBox:"0 0 24 24"},child:[{tag:"path",attr:{d:"M12.002 0a2.138 2.138 0 1 0 0 4.277 2.138 2.138 0 1 0 0-4.277zm8.54 4.931a2.138 2.138 0 1 0 0 4.277 2.138 2.138 0 1 0 0-4.277zm0 9.862a2.138 2.138 0 1 0 0 4.277 2.138 2.138 0 1 0 0-4.277zm-8.54 4.931a2.138 2.138 0 1 0 0 4.276 2.138 2.138 0 1 0 0-4.276zm-8.542-4.93a2.138 2.138 0 1 0 0 4.276 2.138 2.138 0 1 0 0-4.277zm0-9.863a2.138 2.138 0 1 0 0 4.277 2.138 2.138 0 1 0 0-4.277zm8.542-3.378L2.953 6.777v10.448l9.049 5.224 9.047-5.224V6.777zm0 1.601 7.66 13.27H4.34zm-1.387.371L3.97 15.037V7.363zm2.774 0 6.646 3.838v7.674zM5.355 17.44h13.293l-6.646 3.836z"},child:[]}]})(t)}function Y(t){return g({attr:{role:"img",viewBox:"0 0 24 24"},child:[{tag:"path",attr:{d:"M1.5 0h21l-1.91 21.563L11.977 24l-8.564-2.438L1.5 0zm7.031 9.75l-.232-2.718 10.059.003.23-2.622L5.412 4.41l.698 8.01h9.126l-.326 3.426-2.91.804-2.955-.81-.188-2.11H6.248l.33 4.171L12 19.351l5.379-1.443.744-8.157H8.531z"},child:[]}]})(t)}function Jn(t){return g({attr:{role:"img",viewBox:"0 0 24 24"},child:[{tag:"path",attr:{d:"M1.1 6.05C.486 6.05 0 6.53 0 7.13A1.08 1.08 0 0 0 1.1 8.21C1.72 8.21 2.21 7.73 2.21 7.13C2.21 6.53 1.72 6.05 1.1 6.05M8.71 6.07C5.35 6.07 3.25 8.36 3.25 12C3.25 15.67 5.35 17.95 8.71 17.95C12.05 17.95 14.16 15.67 14.16 12C14.16 8.36 12.05 6.07 8.71 6.07M19.55 6.07C17.05 6.07 15.27 7.45 15.27 9.5C15.27 11.13 16.28 12.15 18.4 12.64L19.89 13C21.34 13.33 21.93 13.81 21.93 14.64C21.93 15.6 20.96 16.28 19.58 16.28C18.17 16.28 17.11 15.59 17 14.53H15C15.08 16.65 16.82 17.95 19.46 17.95C22.25 17.95 24 16.58 24 14.4C24 12.69 23 11.72 20.68 11.19L19.35 10.89C17.94 10.55 17.36 10.1 17.36 9.34C17.36 8.38 18.24 7.74 19.54 7.74C20.85 7.74 21.75 8.39 21.85 9.46H23.81C23.76 7.44 22.09 6.07 19.55 6.07M8.71 7.82C10.75 7.82 12.06 9.45 12.06 12C12.06 14.57 10.75 16.2 8.71 16.2C6.65 16.2 5.35 14.57 5.35 12C5.35 9.45 6.65 7.82 8.71 7.82M.111 9.31V17.76H2.1V9.31H.11Z"},child:[]}]})(t)}function Un(t){return g({attr:{role:"img",viewBox:"0 0 24 24"},child:[{tag:"path",attr:{d:"M0 0h24v24H0V0zm22.034 18.276c-.175-1.095-.888-2.015-3.003-2.873-.736-.345-1.554-.585-1.797-1.14-.091-.33-.105-.51-.046-.705.15-.646.915-.84 1.515-.66.39.12.75.42.976.9 1.034-.676 1.034-.676 1.755-1.125-.27-.42-.404-.601-.586-.78-.63-.705-1.469-1.065-2.834-1.034l-.705.089c-.676.165-1.32.525-1.71 1.005-1.14 1.291-.811 3.541.569 4.471 1.365 1.02 3.361 1.244 3.616 2.205.24 1.17-.87 1.545-1.966 1.41-.811-.18-1.26-.586-1.755-1.336l-1.83 1.051c.21.48.45.689.81 1.109 1.74 1.756 6.09 1.666 6.871-1.004.029-.09.24-.705.074-1.65l.046.067zm-8.983-7.245h-2.248c0 1.938-.009 3.864-.009 5.805 0 1.232.063 2.363-.138 2.711-.33.689-1.18.601-1.566.48-.396-.196-.597-.466-.83-.855-.063-.105-.11-.196-.127-.196l-1.825 1.125c.305.63.75 1.172 1.324 1.517.855.51 2.004.675 3.207.405.783-.226 1.458-.691 1.811-1.411.51-.93.402-2.07.397-3.346.012-2.054 0-4.109 0-6.179l.004-.056z"},child:[]}]})(t)}function Vn(t){return g({attr:{role:"img",viewBox:"0 0 24 24"},child:[{tag:"path",attr:{d:"M24 24H0V0h24L12 12Z"},child:[]}]})(t)}function _n(t){return g({attr:{role:"img",viewBox:"0 0 24 24"},child:[{tag:"path",attr:{d:"M10.204 14.35l.007.01-.999 2.413a5.171 5.171 0 0 1-2.075-2.597l2.578-.437.004.005a.44.44 0 0 1 .484.606zm-.833-2.129a.44.44 0 0 0 .173-.756l.002-.011L7.585 9.7a5.143 5.143 0 0 0-.73 3.255l2.514-.725.002-.009zm1.145-1.98a.44.44 0 0 0 .699-.337l.01-.005.15-2.62a5.144 5.144 0 0 0-3.01 1.442l2.147 1.523.004-.002zm.76 2.75l.723.349.722-.347.18-.78-.5-.623h-.804l-.5.623.179.779zm1.5-3.095a.44.44 0 0 0 .7.336l.008.003 2.134-1.513a5.188 5.188 0 0 0-2.992-1.442l.148 2.615.002.001zm10.876 5.97l-5.773 7.181a1.6 1.6 0 0 1-1.248.594l-9.261.003a1.6 1.6 0 0 1-1.247-.596l-5.776-7.18a1.583 1.583 0 0 1-.307-1.34L2.1 5.573c.108-.47.425-.864.863-1.073L11.305.513a1.606 1.606 0 0 1 1.385 0l8.345 3.985c.438.209.755.604.863 1.073l2.062 8.955c.108.47-.005.963-.308 1.34zm-3.289-2.057c-.042-.01-.103-.026-.145-.034-.174-.033-.315-.025-.479-.038-.35-.037-.638-.067-.895-.148-.105-.04-.18-.165-.216-.216l-.201-.059a6.45 6.45 0 0 0-.105-2.332 6.465 6.465 0 0 0-.936-2.163c.052-.047.15-.133.177-.159.008-.09.001-.183.094-.282.197-.185.444-.338.743-.522.142-.084.273-.137.415-.242.032-.024.076-.062.11-.089.24-.191.295-.52.123-.736-.172-.216-.506-.236-.745-.045-.034.027-.08.062-.111.088-.134.116-.217.23-.33.35-.246.25-.45.458-.673.609-.097.056-.239.037-.303.033l-.19.135a6.545 6.545 0 0 0-4.146-2.003l-.012-.223c-.065-.062-.143-.115-.163-.25-.022-.268.015-.557.057-.905.023-.163.061-.298.068-.475.001-.04-.001-.099-.001-.142 0-.306-.224-.555-.5-.555-.275 0-.499.249-.499.555l.001.014c0 .041-.002.092 0 .128.006.177.044.312.067.475.042.348.078.637.056.906a.545.545 0 0 1-.162.258l-.012.211a6.424 6.424 0 0 0-4.166 2.003 8.373 8.373 0 0 1-.18-.128c-.09.012-.18.04-.297-.029-.223-.15-.427-.358-.673-.608-.113-.12-.195-.234-.329-.349-.03-.026-.077-.062-.111-.088a.594.594 0 0 0-.348-.132.481.481 0 0 0-.398.176c-.172.216-.117.546.123.737l.007.005.104.083c.142.105.272.159.414.242.299.185.546.338.743.522.076.082.09.226.1.288l.16.143a6.462 6.462 0 0 0-1.02 4.506l-.208.06c-.055.072-.133.184-.215.217-.257.081-.546.11-.895.147-.164.014-.305.006-.48.039-.037.007-.09.02-.133.03l-.004.002-.007.002c-.295.071-.484.342-.423.608.061.267.349.429.645.365l.007-.001.01-.003.129-.029c.17-.046.294-.113.448-.172.33-.118.604-.217.87-.256.112-.009.23.069.288.101l.217-.037a6.5 6.5 0 0 0 2.88 3.596l-.09.218c.033.084.069.199.044.282-.097.252-.263.517-.452.813-.091.136-.185.242-.268.399-.02.037-.045.095-.064.134-.128.275-.034.591.213.71.248.12.556-.007.69-.282v-.002c.02-.039.046-.09.062-.127.07-.162.094-.301.144-.458.132-.332.205-.68.387-.897.05-.06.13-.082.215-.105l.113-.205a6.453 6.453 0 0 0 4.609.012l.106.192c.086.028.18.042.256.155.136.232.229.507.342.84.05.156.074.295.145.457.016.037.043.09.062.129.133.276.442.402.69.282.247-.118.341-.435.213-.71-.02-.039-.045-.096-.065-.134-.083-.156-.177-.261-.268-.398-.19-.296-.346-.541-.443-.793-.04-.13.007-.21.038-.294-.018-.022-.059-.144-.083-.202a6.499 6.499 0 0 0 2.88-3.622c.064.01.176.03.213.038.075-.05.144-.114.28-.104.266.039.54.138.87.256.154.06.277.128.448.173.036.01.088.019.13.028l.009.003.007.001c.297.064.584-.098.645-.365.06-.266-.128-.537-.423-.608zM16.4 9.701l-1.95 1.746v.005a.44.44 0 0 0 .173.757l.003.01 2.526.728a5.199 5.199 0 0 0-.108-1.674A5.208 5.208 0 0 0 16.4 9.7zm-4.013 5.325a.437.437 0 0 0-.404-.232.44.44 0 0 0-.372.233h-.002l-1.268 2.292a5.164 5.164 0 0 0 3.326.003l-1.27-2.296h-.01zm1.888-1.293a.44.44 0 0 0-.27.036.44.44 0 0 0-.214.572l-.003.004 1.01 2.438a5.15 5.15 0 0 0 2.081-2.615l-2.6-.44-.004.005z"},child:[]}]})(t)}function Qn(t){return g({attr:{role:"img",viewBox:"0 0 24 24"},child:[{tag:"path",attr:{d:"M23.642 5.43a.364.364 0 01.014.1v5.149c0 .135-.073.26-.189.326l-4.323 2.49v4.934a.378.378 0 01-.188.326L9.93 23.949a.316.316 0 01-.066.027c-.008.002-.016.008-.024.01a.348.348 0 01-.192 0c-.011-.002-.02-.008-.03-.012-.02-.008-.042-.014-.062-.025L.533 18.755a.376.376 0 01-.189-.326V2.974c0-.033.005-.066.014-.098.003-.012.01-.02.014-.032a.369.369 0 01.023-.058c.004-.013.015-.022.023-.033l.033-.045c.012-.01.025-.018.037-.027.014-.012.027-.024.041-.034H.53L5.043.05a.375.375 0 01.375 0L9.93 2.647h.002c.015.01.027.021.04.033l.038.027c.013.014.02.03.033.045.008.011.02.021.025.033.01.02.017.038.024.058.003.011.01.021.013.032.01.031.014.064.014.098v9.652l3.76-2.164V5.527c0-.033.004-.066.013-.098.003-.01.01-.02.013-.032a.487.487 0 01.024-.059c.007-.012.018-.02.025-.033.012-.015.021-.03.033-.043.012-.012.025-.02.037-.028.014-.01.026-.023.041-.032h.001l4.513-2.598a.375.375 0 01.375 0l4.513 2.598c.016.01.027.021.042.031.012.01.025.018.036.028.013.014.022.03.034.044.008.012.019.021.024.033.011.02.018.04.024.06.006.01.012.021.015.032zm-.74 5.032V6.179l-1.578.908-2.182 1.256v4.283zm-4.51 7.75v-4.287l-2.147 1.225-6.126 3.498v4.325zM1.093 3.624v14.588l8.273 4.761v-4.325l-4.322-2.445-.002-.003H5.04c-.014-.01-.025-.021-.04-.031-.011-.01-.024-.018-.035-.027l-.001-.002c-.013-.012-.021-.025-.031-.04-.01-.011-.021-.022-.028-.036h-.002c-.008-.014-.013-.031-.02-.047-.006-.016-.014-.027-.018-.043a.49.49 0 01-.008-.057c-.002-.014-.006-.027-.006-.041V5.789l-2.18-1.257zM5.23.81L1.47 2.974l3.76 2.164 3.758-2.164zm1.956 13.505l2.182-1.256V3.624l-1.58.91-2.182 1.255v9.435zm11.581-10.95l-3.76 2.163 3.76 2.163 3.759-2.164zm-.376 4.978L16.21 7.087 14.63 6.18v4.283l2.182 1.256 1.58.908zm-8.65 9.654l5.514-3.148 2.756-1.572-3.757-2.163-4.323 2.489-3.941 2.27z"},child:[]}]})(t)}function Kn(t){return g({attr:{role:"img",viewBox:"0 0 24 24"},child:[{tag:"path",attr:{d:"M12.504 0c-.155 0-.315.008-.48.021-4.226.333-3.105 4.807-3.17 6.298-.076 1.092-.3 1.953-1.05 3.02-.885 1.051-2.127 2.75-2.716 4.521-.278.832-.41 1.684-.287 2.489a.424.424 0 00-.11.135c-.26.268-.45.6-.663.839-.199.199-.485.267-.797.4-.313.136-.658.269-.864.68-.09.189-.136.394-.132.602 0 .199.027.4.055.536.058.399.116.728.04.97-.249.68-.28 1.145-.106 1.484.174.334.535.47.94.601.81.2 1.91.135 2.774.6.926.466 1.866.67 2.616.47.526-.116.97-.464 1.208-.946.587-.003 1.23-.269 2.26-.334.699-.058 1.574.267 2.577.2.025.134.063.198.114.333l.003.003c.391.778 1.113 1.132 1.884 1.071.771-.06 1.592-.536 2.257-1.306.631-.765 1.683-1.084 2.378-1.503.348-.199.629-.469.649-.853.023-.4-.2-.811-.714-1.376v-.097l-.003-.003c-.17-.2-.25-.535-.338-.926-.085-.401-.182-.786-.492-1.046h-.003c-.059-.054-.123-.067-.188-.135a.357.357 0 00-.19-.064c.431-1.278.264-2.55-.173-3.694-.533-1.41-1.465-2.638-2.175-3.483-.796-1.005-1.576-1.957-1.56-3.368.026-2.152.236-6.133-3.544-6.139zm.529 3.405h.013c.213 0 .396.062.584.198.19.135.33.332.438.533.105.259.158.459.166.724 0-.02.006-.04.006-.06v.105a.086.086 0 01-.004-.021l-.004-.024a1.807 1.807 0 01-.15.706.953.953 0 01-.213.335.71.71 0 00-.088-.042c-.104-.045-.198-.064-.284-.133a1.312 1.312 0 00-.22-.066c.05-.06.146-.133.183-.198.053-.128.082-.264.088-.402v-.02a1.21 1.21 0 00-.061-.4c-.045-.134-.101-.2-.183-.333-.084-.066-.167-.132-.267-.132h-.016c-.093 0-.176.03-.262.132a.8.8 0 00-.205.334 1.18 1.18 0 00-.09.4v.019c.002.089.008.179.02.267-.193-.067-.438-.135-.607-.202a1.635 1.635 0 01-.018-.2v-.02a1.772 1.772 0 01.15-.768c.082-.22.232-.406.43-.533a.985.985 0 01.594-.2zm-2.962.059h.036c.142 0 .27.048.399.135.146.129.264.288.344.465.09.199.14.4.153.667v.004c.007.134.006.2-.002.266v.08c-.03.007-.056.018-.083.024-.152.055-.274.135-.393.2.012-.09.013-.18.003-.267v-.015c-.012-.133-.04-.2-.082-.333a.613.613 0 00-.166-.267.248.248 0 00-.183-.064h-.021c-.071.006-.13.04-.186.132a.552.552 0 00-.12.27.944.944 0 00-.023.33v.015c.012.135.037.2.08.334.046.134.098.2.166.268.01.009.02.018.034.024-.07.057-.117.07-.176.136a.304.304 0 01-.131.068 2.62 2.62 0 01-.275-.402 1.772 1.772 0 01-.155-.667 1.759 1.759 0 01.08-.668 1.43 1.43 0 01.283-.535c.128-.133.26-.2.418-.2zm1.37 1.706c.332 0 .733.065 1.216.399.293.2.523.269 1.052.468h.003c.255.136.405.266.478.399v-.131a.571.571 0 01.016.47c-.123.31-.516.643-1.063.842v.002c-.268.135-.501.333-.775.465-.276.135-.588.292-1.012.267a1.139 1.139 0 01-.448-.067 3.566 3.566 0 01-.322-.198c-.195-.135-.363-.332-.612-.465v-.005h-.005c-.4-.246-.616-.512-.686-.71-.07-.268-.005-.47.193-.6.224-.135.38-.271.483-.336.104-.074.143-.102.176-.131h.002v-.003c.169-.202.436-.47.839-.601.139-.036.294-.065.466-.065zm2.8 2.142c.358 1.417 1.196 3.475 1.735 4.473.286.534.855 1.659 1.102 3.024.156-.005.33.018.513.064.646-1.671-.546-3.467-1.089-3.966-.22-.2-.232-.335-.123-.335.59.534 1.365 1.572 1.646 2.757.13.535.16 1.104.021 1.67.067.028.135.06.205.067 1.032.534 1.413.938 1.23 1.537v-.043c-.06-.003-.12 0-.18 0h-.016c.151-.467-.182-.825-1.065-1.224-.915-.4-1.646-.336-1.77.465-.008.043-.013.066-.018.135-.068.023-.139.053-.209.064-.43.268-.662.669-.793 1.187-.13.533-.17 1.156-.205 1.869v.003c-.02.334-.17.838-.319 1.35-1.5 1.072-3.58 1.538-5.348.334a2.645 2.645 0 00-.402-.533 1.45 1.45 0 00-.275-.333c.182 0 .338-.03.465-.067a.615.615 0 00.314-.334c.108-.267 0-.697-.345-1.163-.345-.467-.931-.995-1.788-1.521-.63-.4-.986-.87-1.15-1.396-.165-.534-.143-1.085-.015-1.645.245-1.07.873-2.11 1.274-2.763.107-.065.037.135-.408.974-.396.751-1.14 2.497-.122 3.854a8.123 8.123 0 01.647-2.876c.564-1.278 1.743-3.504 1.836-5.268.048.036.217.135.289.202.218.133.38.333.59.465.21.201.477.335.876.335.039.003.075.006.11.006.412 0 .73-.134.997-.268.29-.134.52-.334.74-.4h.005c.467-.135.835-.402 1.044-.7zm2.185 8.958c.037.6.343 1.245.882 1.377.588.134 1.434-.333 1.791-.765l.211-.01c.315-.007.577.01.847.268l.003.003c.208.199.305.53.391.876.085.4.154.78.409 1.066.486.527.645.906.636 1.14l.003-.007v.018l-.003-.012c-.015.262-.185.396-.498.595-.63.401-1.746.712-2.457 1.57-.618.737-1.37 1.14-2.036 1.191-.664.053-1.237-.2-1.574-.898l-.005-.003c-.21-.4-.12-1.025.056-1.69.176-.668.428-1.344.463-1.897.037-.714.076-1.335.195-1.814.12-.465.308-.797.641-.984l.045-.022zm-10.814.049h.01c.053 0 .105.005.157.014.376.055.706.333 1.023.752l.91 1.664.003.003c.243.533.754 1.064 1.189 1.637.434.598.77 1.131.729 1.57v.006c-.057.744-.48 1.148-1.125 1.294-.645.135-1.52.002-2.395-.464-.968-.536-2.118-.469-2.857-.602-.369-.066-.61-.2-.723-.4-.11-.2-.113-.602.123-1.23v-.004l.002-.003c.117-.334.03-.752-.027-1.118-.055-.401-.083-.71.043-.94.16-.334.396-.4.69-.533.294-.135.64-.202.915-.47h.002v-.002c.256-.268.445-.601.668-.838.19-.201.38-.336.663-.336zm7.159-9.074c-.435.201-.945.535-1.488.535-.542 0-.97-.267-1.28-.466-.154-.134-.28-.268-.373-.335-.164-.134-.144-.333-.074-.333.109.016.129.134.199.2.096.066.215.2.36.333.292.2.68.467 1.167.467.485 0 1.053-.267 1.398-.466.195-.135.445-.334.648-.467.156-.136.149-.267.279-.267.128.016.034.134-.147.332a8.097 8.097 0 01-.69.468zm-1.082-1.583V5.64c-.006-.02.013-.042.029-.05.074-.043.18-.027.26.004.063 0 .16.067.15.135-.006.049-.085.066-.135.066-.055 0-.092-.043-.141-.068-.052-.018-.146-.008-.163-.065zm-.551 0c-.02.058-.113.049-.166.066-.047.025-.086.068-.14.068-.05 0-.13-.02-.136-.068-.01-.066.088-.133.15-.133.08-.031.184-.047.259-.005.019.009.036.03.03.05v.02h.003z"},child:[]}]})(t)}function Yn(t){return g({attr:{role:"img",viewBox:"0 0 24 24"},child:[{tag:"path",attr:{d:"M17.193 9.555c-1.264-5.58-4.252-7.414-4.573-8.115-.28-.394-.53-.954-.735-1.44-.036.495-.055.685-.523 1.184-.723.566-4.438 3.682-4.74 10.02-.282 5.912 4.27 9.435 4.888 9.884l.07.05A73.49 73.49 0 0111.91 24h.481c.114-1.032.284-2.056.51-3.07.417-.296.604-.463.85-.693a11.342 11.342 0 003.639-8.464c.01-.814-.103-1.662-.197-2.218zm-5.336 8.195s0-8.291.275-8.29c.213 0 .49 10.695.49 10.695-.381-.045-.765-1.76-.765-2.405z"},child:[]}]})(t)}function $n(t){return g({attr:{role:"img",viewBox:"0 0 24 24"},child:[{tag:"path",attr:{d:"M18.665 21.978C16.758 23.255 14.465 24 12 24 5.377 24 0 18.623 0 12S5.377 0 12 0s12 5.377 12 12c0 3.583-1.574 6.801-4.067 9.001L9.219 7.2H7.2v9.596h1.615V9.251l9.85 12.727Zm-3.332-8.533 1.6 2.061V7.2h-1.6v6.245Z"},child:[]}]})(t)}function Ee(t){return g({attr:{role:"img",viewBox:"0 0 24 24"},child:[{tag:"path",attr:{d:"M11.998,24c-0.321,0-0.641-0.084-0.922-0.247l-2.936-1.737c-0.438-0.245-0.224-0.332-0.08-0.383 c0.585-0.203,0.703-0.25,1.328-0.604c0.065-0.037,0.151-0.023,0.218,0.017l2.256,1.339c0.082,0.045,0.197,0.045,0.272,0l8.795-5.076 c0.082-0.047,0.134-0.141,0.134-0.238V6.921c0-0.099-0.053-0.192-0.137-0.242l-8.791-5.072c-0.081-0.047-0.189-0.047-0.271,0 L3.075,6.68C2.99,6.729,2.936,6.825,2.936,6.921v10.15c0,0.097,0.054,0.189,0.139,0.235l2.409,1.392 c1.307,0.654,2.108-0.116,2.108-0.89V7.787c0-0.142,0.114-0.253,0.256-0.253h1.115c0.139,0,0.255,0.112,0.255,0.253v10.021 c0,1.745-0.95,2.745-2.604,2.745c-0.508,0-0.909,0-2.026-0.551L2.28,18.675c-0.57-0.329-0.922-0.945-0.922-1.604V6.921 c0-0.659,0.353-1.275,0.922-1.603l8.795-5.082c0.557-0.315,1.296-0.315,1.848,0l8.794,5.082c0.57,0.329,0.924,0.944,0.924,1.603 v10.15c0,0.659-0.354,1.273-0.924,1.604l-8.794,5.078C12.643,23.916,12.324,24,11.998,24z M19.099,13.993 c0-1.9-1.284-2.406-3.987-2.763c-2.731-0.361-3.009-0.548-3.009-1.187c0-0.528,0.235-1.233,2.258-1.233 c1.807,0,2.473,0.389,2.747,1.607c0.024,0.115,0.129,0.199,0.247,0.199h1.141c0.071,0,0.138-0.031,0.186-0.081 c0.048-0.054,0.074-0.123,0.067-0.196c-0.177-2.098-1.571-3.076-4.388-3.076c-2.508,0-4.004,1.058-4.004,2.833 c0,1.925,1.488,2.457,3.895,2.695c2.88,0.282,3.103,0.703,3.103,1.269c0,0.983-0.789,1.402-2.642,1.402 c-2.327,0-2.839-0.584-3.011-1.742c-0.02-0.124-0.126-0.215-0.253-0.215h-1.137c-0.141,0-0.254,0.112-0.254,0.253 c0,1.482,0.806,3.248,4.655,3.248C17.501,17.007,19.099,15.91,19.099,13.993z"},child:[]}]})(t)}function He(t){return g({attr:{role:"img",viewBox:"0 0 24 24"},child:[{tag:"path",attr:{d:"M16.922 0h2.623v18.104h-2.623zm-4.126 12.94h2.623v2.57h-2.623zm0-7.037h2.623v5.446h-2.623zm0 11.197h2.623v5.446h-2.623zM4.456 5.896h2.622V24H4.455zm4.213 2.559h2.623v2.57H8.67zm0 4.151h2.623v5.447H8.67zm0-11.187h2.623v5.446H8.67Z"},child:[]}]})(t)}function Zn(t){return g({attr:{role:"img",viewBox:"0 0 24 24"},child:[{tag:"path",attr:{d:"M7.01 10.207h-.944l-.515 2.648h.838c.556 0 .97-.105 1.242-.314.272-.21.455-.559.55-1.049.092-.47.05-.802-.124-.995-.175-.193-.523-.29-1.047-.29zM12 5.688C5.373 5.688 0 8.514 0 12s5.373 6.313 12 6.313S24 15.486 24 12c0-3.486-5.373-6.312-12-6.312zm-3.26 7.451c-.261.25-.575.438-.917.551-.336.108-.765.164-1.285.164H5.357l-.327 1.681H3.652l1.23-6.326h2.65c.797 0 1.378.209 1.744.628.366.418.476 1.002.33 1.752a2.836 2.836 0 0 1-.305.847c-.143.255-.33.49-.561.703zm4.024.715l.543-2.799c.063-.318.039-.536-.068-.651-.107-.116-.336-.174-.687-.174H11.46l-.704 3.625H9.388l1.23-6.327h1.367l-.327 1.682h1.218c.767 0 1.295.134 1.586.401s.378.7.263 1.299l-.572 2.944h-1.389zm7.597-2.265a2.782 2.782 0 0 1-.305.847c-.143.255-.33.49-.561.703a2.44 2.44 0 0 1-.917.551c-.336.108-.765.164-1.286.164h-1.18l-.327 1.682h-1.378l1.23-6.326h2.649c.797 0 1.378.209 1.744.628.366.417.477 1.001.331 1.751zM17.766 10.207h-.943l-.516 2.648h.838c.557 0 .971-.105 1.242-.314.272-.21.455-.559.551-1.049.092-.47.049-.802-.125-.995s-.524-.29-1.047-.29z"},child:[]}]})(t)}function ze(t){return g({attr:{role:"img",viewBox:"0 0 24 24"},child:[{tag:"path",attr:{d:"M23.5594 14.7228a.5269.5269 0 0 0-.0563-.1191c-.139-.2632-.4768-.3418-1.0074-.2321-1.6533.3411-2.2935.1312-2.5256-.0191 1.342-2.0482 2.445-4.522 3.0411-6.8297.2714-1.0507.7982-3.5237.1222-4.7316a1.5641 1.5641 0 0 0-.1509-.235C21.6931.9086 19.8007.0248 17.5099.0005c-1.4947-.0158-2.7705.3461-3.1161.4794a9.449 9.449 0 0 0-.5159-.0816 8.044 8.044 0 0 0-1.3114-.1278c-1.1822-.0184-2.2038.2642-3.0498.8406-.8573-.3211-4.7888-1.645-7.2219.0788C.9359 2.1526.3086 3.8733.4302 6.3043c.0409.818.5069 3.334 1.2423 5.7436.4598 1.5065.9387 2.7019 1.4334 3.582.553.9942 1.1259 1.5933 1.7143 1.7895.4474.1491 1.1327.1441 1.8581-.7279.8012-.9635 1.5903-1.8258 1.9446-2.2069.4351.2355.9064.3625 1.39.3772a.0569.0569 0 0 0 .0004.0041 11.0312 11.0312 0 0 0-.2472.3054c-.3389.4302-.4094.5197-1.5002.7443-.3102.064-1.1344.2339-1.1464.8115-.0025.1224.0329.2309.0919.3268.2269.4231.9216.6097 1.015.6331 1.3345.3335 2.5044.092 3.3714-.6787-.017 2.231.0775 4.4174.3454 5.0874.2212.5529.7618 1.9045 2.4692 1.9043.2505 0 .5263-.0291.8296-.0941 1.7819-.3821 2.5557-1.1696 2.855-2.9059.1503-.8707.4016-2.8753.5388-4.1012.0169-.0703.0357-.1207.057-.1362.0007-.0005.0697-.0471.4272.0307a.3673.3673 0 0 0 .0443.0068l.2539.0223.0149.001c.8468.0384 1.9114-.1426 2.5312-.4308.6438-.2988 1.8057-1.0323 1.5951-1.6698zM2.371 11.8765c-.7435-2.4358-1.1779-4.8851-1.2123-5.5719-.1086-2.1714.4171-3.6829 1.5623-4.4927 1.8367-1.2986 4.8398-.5408 6.108-.13-.0032.0032-.0066.0061-.0098.0094-2.0238 2.044-1.9758 5.536-1.9708 5.7495-.0002.0823.0066.1989.0162.3593.0348.5873.0996 1.6804-.0735 2.9184-.1609 1.1504.1937 2.2764.9728 3.0892.0806.0841.1648.1631.2518.2374-.3468.3714-1.1004 1.1926-1.9025 2.1576-.5677.6825-.9597.5517-1.0886.5087-.3919-.1307-.813-.5871-1.2381-1.3223-.4796-.839-.9635-2.0317-1.4155-3.5126zm6.0072 5.0871c-.1711-.0428-.3271-.1132-.4322-.1772.0889-.0394.2374-.0902.4833-.1409 1.2833-.2641 1.4815-.4506 1.9143-1.0002.0992-.126.2116-.2687.3673-.4426a.3549.3549 0 0 0 .0737-.1298c.1708-.1513.2724-.1099.4369-.0417.156.0646.3078.26.3695.4752.0291.1016.0619.2945-.0452.4444-.9043 1.2658-2.2216 1.2494-3.1676 1.0128zm2.094-3.988-.0525.141c-.133.3566-.2567.6881-.3334 1.003-.6674-.0021-1.3168-.2872-1.8105-.8024-.6279-.6551-.9131-1.5664-.7825-2.5004.1828-1.3079.1153-2.4468.079-3.0586-.005-.0857-.0095-.1607-.0122-.2199.2957-.2621 1.6659-.9962 2.6429-.7724.4459.1022.7176.4057.8305.928.5846 2.7038.0774 3.8307-.3302 4.7363-.084.1866-.1633.3629-.2311.5454zm7.3637 4.5725c-.0169.1768-.0358.376-.0618.5959l-.146.4383a.3547.3547 0 0 0-.0182.1077c-.0059.4747-.054.6489-.115.8693-.0634.2292-.1353.4891-.1794 1.0575-.11 1.4143-.8782 2.2267-2.4172 2.5565-1.5155.3251-1.7843-.4968-2.0212-1.2217a6.5824 6.5824 0 0 0-.0769-.2266c-.2154-.5858-.1911-1.4119-.1574-2.5551.0165-.5612-.0249-1.9013-.3302-2.6462.0044-.2932.0106-.5909.019-.8918a.3529.3529 0 0 0-.0153-.1126 1.4927 1.4927 0 0 0-.0439-.208c-.1226-.4283-.4213-.7866-.7797-.9351-.1424-.059-.4038-.1672-.7178-.0869.067-.276.1831-.5875.309-.9249l.0529-.142c.0595-.16.134-.3257.213-.5012.4265-.9476 1.0106-2.2453.3766-5.1772-.2374-1.0981-1.0304-1.6343-2.2324-1.5098-.7207.0746-1.3799.3654-1.7088.5321a5.6716 5.6716 0 0 0-.1958.1041c.0918-1.1064.4386-3.1741 1.7357-4.4823a4.0306 4.0306 0 0 1 .3033-.276.3532.3532 0 0 0 .1447-.0644c.7524-.5706 1.6945-.8506 2.802-.8325.4091.0067.8017.0339 1.1742.081 1.939.3544 3.2439 1.4468 4.0359 2.3827.8143.9623 1.2552 1.9315 1.4312 2.4543-1.3232-.1346-2.2234.1268-2.6797.779-.9926 1.4189.543 4.1729 1.2811 5.4964.1353.2426.2522.4522.2889.5413.2403.5825.5515.9713.7787 1.2552.0696.087.1372.1714.1885.245-.4008.1155-1.1208.3825-1.0552 1.717-.0123.1563-.0423.4469-.0834.8148-.0461.2077-.0702.4603-.0994.7662zm.8905-1.6211c-.0405-.8316.2691-.9185.5967-1.0105a2.8566 2.8566 0 0 0 .135-.0406 1.202 1.202 0 0 0 .1342.103c.5703.3765 1.5823.4213 3.0068.1344-.2016.1769-.5189.3994-.9533.6011-.4098.1903-1.0957.333-1.7473.3636-.7197.0336-1.0859-.0807-1.1721-.151zm.5695-9.2712c-.0059.3508-.0542.6692-.1054 1.0017-.055.3576-.112.7274-.1264 1.1762-.0142.4368.0404.8909.0932 1.3301.1066.887.216 1.8003-.2075 2.7014a3.5272 3.5272 0 0 1-.1876-.3856c-.0527-.1276-.1669-.3326-.3251-.6162-.6156-1.1041-2.0574-3.6896-1.3193-4.7446.3795-.5427 1.3408-.5661 2.1781-.463zm.2284 7.0137a12.3762 12.3762 0 0 0-.0853-.1074l-.0355-.0444c.7262-1.1995.5842-2.3862.4578-3.4385-.0519-.4318-.1009-.8396-.0885-1.2226.0129-.4061.0666-.7543.1185-1.0911.0639-.415.1288-.8443.1109-1.3505.0134-.0531.0188-.1158.0118-.1902-.0457-.4855-.5999-1.938-1.7294-3.253-.6076-.7073-1.4896-1.4972-2.6889-2.0395.5251-.1066 1.2328-.2035 2.0244-.1859 2.0515.0456 3.6746.8135 4.8242 2.2824a.908.908 0 0 1 .0667.1002c.7231 1.3556-.2762 6.2751-2.9867 10.5405zm-8.8166-6.1162c-.025.1794-.3089.4225-.6211.4225a.5821.5821 0 0 1-.0809-.0056c-.1873-.026-.3765-.144-.5059-.3156-.0458-.0605-.1203-.178-.1055-.2844.0055-.0401.0261-.0985.0925-.1488.1182-.0894.3518-.1226.6096-.0867.3163.0441.6426.1938.6113.4186zm7.9305-.4114c.0111.0792-.049.201-.1531.3102-.0683.0717-.212.1961-.4079.2232a.5456.5456 0 0 1-.075.0052c-.2935 0-.5414-.2344-.5607-.3717-.024-.1765.2641-.3106.5611-.352.297-.0414.6111.0088.6356.1851z"},child:[]}]})(t)}function Xn(t){return g({attr:{role:"img",viewBox:"0 0 24 24"},child:[{tag:"path",attr:{d:"M14.25.18l.9.2.73.26.59.3.45.32.34.34.25.34.16.33.1.3.04.26.02.2-.01.13V8.5l-.05.63-.13.55-.21.46-.26.38-.3.31-.33.25-.35.19-.35.14-.33.1-.3.07-.26.04-.21.02H8.77l-.69.05-.59.14-.5.22-.41.27-.33.32-.27.35-.2.36-.15.37-.1.35-.07.32-.04.27-.02.21v3.06H3.17l-.21-.03-.28-.07-.32-.12-.35-.18-.36-.26-.36-.36-.35-.46-.32-.59-.28-.73-.21-.88-.14-1.05-.05-1.23.06-1.22.16-1.04.24-.87.32-.71.36-.57.4-.44.42-.33.42-.24.4-.16.36-.1.32-.05.24-.01h.16l.06.01h8.16v-.83H6.18l-.01-2.75-.02-.37.05-.34.11-.31.17-.28.25-.26.31-.23.38-.2.44-.18.51-.15.58-.12.64-.1.71-.06.77-.04.84-.02 1.27.05zm-6.3 1.98l-.23.33-.08.41.08.41.23.34.33.22.41.09.41-.09.33-.22.23-.34.08-.41-.08-.41-.23-.33-.33-.22-.41-.09-.41.09zm13.09 3.95l.28.06.32.12.35.18.36.27.36.35.35.47.32.59.28.73.21.88.14 1.04.05 1.23-.06 1.23-.16 1.04-.24.86-.32.71-.36.57-.4.45-.42.33-.42.24-.4.16-.36.09-.32.05-.24.02-.16-.01h-8.22v.82h5.84l.01 2.76.02.36-.05.34-.11.31-.17.29-.25.25-.31.24-.38.2-.44.17-.51.15-.58.13-.64.09-.71.07-.77.04-.84.01-1.27-.04-1.07-.14-.9-.2-.73-.25-.59-.3-.45-.33-.34-.34-.25-.34-.16-.33-.1-.3-.04-.25-.02-.2.01-.13v-5.34l.05-.64.13-.54.21-.46.26-.38.3-.32.33-.24.35-.2.35-.14.33-.1.3-.06.26-.04.21-.02.13-.01h5.84l.69-.05.59-.14.5-.21.41-.28.33-.32.27-.35.2-.36.15-.36.1-.35.07-.32.04-.28.02-.21V6.07h2.09l.14.01zm-6.47 14.25l-.23.33-.08.41.08.41.23.33.33.23.41.08.41-.08.33-.23.23-.33.08-.41-.08-.41-.23-.33-.33-.23-.41-.08-.41.08z"},child:[]}]})(t)}function he(t){return g({attr:{role:"img",viewBox:"0 0 24 24"},child:[{tag:"path",attr:{d:"M14.23 12.004a2.236 2.236 0 0 1-2.235 2.236 2.236 2.236 0 0 1-2.236-2.236 2.236 2.236 0 0 1 2.235-2.236 2.236 2.236 0 0 1 2.236 2.236zm2.648-10.69c-1.346 0-3.107.96-4.888 2.622-1.78-1.653-3.542-2.602-4.887-2.602-.41 0-.783.093-1.106.278-1.375.793-1.683 3.264-.973 6.365C1.98 8.917 0 10.42 0 12.004c0 1.59 1.99 3.097 5.043 4.03-.704 3.113-.39 5.588.988 6.38.32.187.69.275 1.102.275 1.345 0 3.107-.96 4.888-2.624 1.78 1.654 3.542 2.603 4.887 2.603.41 0 .783-.09 1.106-.275 1.374-.792 1.683-3.263.973-6.365C22.02 15.096 24 13.59 24 12.004c0-1.59-1.99-3.097-5.043-4.032.704-3.11.39-5.587-.988-6.38-.318-.184-.688-.277-1.092-.278zm-.005 1.09v.006c.225 0 .406.044.558.127.666.382.955 1.835.73 3.704-.054.46-.142.945-.25 1.44-.96-.236-2.006-.417-3.107-.534-.66-.905-1.345-1.727-2.035-2.447 1.592-1.48 3.087-2.292 4.105-2.295zm-9.77.02c1.012 0 2.514.808 4.11 2.28-.686.72-1.37 1.537-2.02 2.442-1.107.117-2.154.298-3.113.538-.112-.49-.195-.964-.254-1.42-.23-1.868.054-3.32.714-3.707.19-.09.4-.127.563-.132zm4.882 3.05c.455.468.91.992 1.36 1.564-.44-.02-.89-.034-1.345-.034-.46 0-.915.01-1.36.034.44-.572.895-1.096 1.345-1.565zM12 8.1c.74 0 1.477.034 2.202.093.406.582.802 1.203 1.183 1.86.372.64.71 1.29 1.018 1.946-.308.655-.646 1.31-1.013 1.95-.38.66-.773 1.288-1.18 1.87-.728.063-1.466.098-2.21.098-.74 0-1.477-.035-2.202-.093-.406-.582-.802-1.204-1.183-1.86-.372-.64-.71-1.29-1.018-1.946.303-.657.646-1.313 1.013-1.954.38-.66.773-1.286 1.18-1.868.728-.064 1.466-.098 2.21-.098zm-3.635.254c-.24.377-.48.763-.704 1.16-.225.39-.435.782-.635 1.174-.265-.656-.49-1.31-.676-1.947.64-.15 1.315-.283 2.015-.386zm7.26 0c.695.103 1.365.23 2.006.387-.18.632-.405 1.282-.66 1.933-.2-.39-.41-.783-.64-1.174-.225-.392-.465-.774-.705-1.146zm3.063.675c.484.15.944.317 1.375.498 1.732.74 2.852 1.708 2.852 2.476-.005.768-1.125 1.74-2.857 2.475-.42.18-.88.342-1.355.493-.28-.958-.646-1.956-1.1-2.98.45-1.017.81-2.01 1.085-2.964zm-13.395.004c.278.96.645 1.957 1.1 2.98-.45 1.017-.812 2.01-1.086 2.964-.484-.15-.944-.318-1.37-.5-1.732-.737-2.852-1.706-2.852-2.474 0-.768 1.12-1.742 2.852-2.476.42-.18.88-.342 1.356-.494zm11.678 4.28c.265.657.49 1.312.676 1.948-.64.157-1.316.29-2.016.39.24-.375.48-.762.705-1.158.225-.39.435-.788.636-1.18zm-9.945.02c.2.392.41.783.64 1.175.23.39.465.772.705 1.143-.695-.102-1.365-.23-2.006-.386.18-.63.406-1.282.66-1.933zM17.92 16.32c.112.493.2.968.254 1.423.23 1.868-.054 3.32-.714 3.708-.147.09-.338.128-.563.128-1.012 0-2.514-.807-4.11-2.28.686-.72 1.37-1.536 2.02-2.44 1.107-.118 2.154-.3 3.113-.54zm-11.83.01c.96.234 2.006.415 3.107.532.66.905 1.345 1.727 2.035 2.446-1.595 1.483-3.092 2.295-4.11 2.295-.22-.005-.406-.05-.553-.132-.666-.38-.955-1.834-.73-3.703.054-.46.142-.944.25-1.438zm4.56.64c.44.02.89.034 1.345.034.46 0 .915-.01 1.36-.034-.44.572-.895 1.095-1.345 1.565-.455-.47-.91-.993-1.36-1.565z"},child:[]}]})(t)}function eo(t){return g({attr:{role:"img",viewBox:"0 0 24 24"},child:[{tag:"path",attr:{d:"M22.71 13.145c-1.66 2.092-3.452 4.483-7.038 4.483-3.203 0-4.397-2.825-4.48-5.12.701 1.484 2.073 2.685 4.214 2.63 4.117-.133 6.94-3.852 6.94-7.239 0-4.05-3.022-6.972-8.268-6.972-3.752 0-8.4 1.428-11.455 3.685C2.59 6.937 3.885 9.958 4.35 9.626c2.648-1.904 4.748-3.13 6.784-3.744C8.12 9.244.886 17.05 0 18.425c.1 1.261 1.66 4.648 2.424 4.648.232 0 .431-.133.664-.365a100.49 100.49 0 0 0 5.54-6.765c.222 3.104 1.748 6.898 6.014 6.898 3.819 0 7.604-2.756 9.33-8.965.2-.764-.73-1.361-1.261-.73zm-4.349-5.013c0 1.959-1.926 2.922-3.685 2.922-.941 0-1.664-.247-2.235-.568 1.051-1.592 2.092-3.225 3.21-4.973 1.972.334 2.71 1.43 2.71 2.619z"},child:[]}]})(t)}function to(t){return g({attr:{role:"img",viewBox:"0 0 24 24"},child:[{tag:"path",attr:{d:"M23.8346 11.7033l-1.0073-.6236a13.7268 13.7268 0 00-.0283-.2936l.8656-.8069a.3483.3483 0 00-.1154-.578l-1.1066-.414a8.4958 8.4958 0 00-.087-.2856l.6904-.9587a.3462.3462 0 00-.2257-.5446l-1.1663-.1894a9.3574 9.3574 0 00-.1407-.2622l.49-1.0761a.3437.3437 0 00-.0274-.3361.3486.3486 0 00-.3006-.154l-1.1845.0416a6.7444 6.7444 0 00-.1873-.2268l.2723-1.153a.3472.3472 0 00-.417-.4172l-1.1532.2724a14.0183 14.0183 0 00-.2278-.1873l.0415-1.1845a.3442.3442 0 00-.49-.328l-1.076.491c-.0872-.0476-.1742-.0952-.2623-.1407l-.1903-1.1673A.3483.3483 0 0016.256.955l-.9597.6905a8.4867 8.4867 0 00-.2855-.086l-.414-1.1066a.3483.3483 0 00-.5781-.1154l-.8069.8666a9.2936 9.2936 0 00-.2936-.0284L12.2946.1683a.3462.3462 0 00-.5892 0l-.6236 1.0073a13.7383 13.7383 0 00-.2936.0284L9.9803.3374a.3462.3462 0 00-.578.1154l-.4141 1.1065c-.0962.0274-.1903.0567-.2855.086L7.744.955a.3483.3483 0 00-.5447.2258L7.009 2.348a9.3574 9.3574 0 00-.2622.1407l-1.0762-.491a.3462.3462 0 00-.49.328l.0416 1.1845a7.9826 7.9826 0 00-.2278.1873L3.8413 3.425a.3472.3472 0 00-.4171.4171l.2713 1.1531c-.0628.075-.1255.1509-.1863.2268l-1.1845-.0415a.3462.3462 0 00-.328.49l.491 1.0761a9.167 9.167 0 00-.1407.2622l-1.1662.1894a.3483.3483 0 00-.2258.5446l.6904.9587a13.303 13.303 0 00-.087.2855l-1.1065.414a.3483.3483 0 00-.1155.5781l.8656.807a9.2936 9.2936 0 00-.0283.2935l-1.0073.6236a.3442.3442 0 000 .5892l1.0073.6236c.008.0982.0182.1964.0283.2936l-.8656.8079a.3462.3462 0 00.1155.578l1.1065.4141c.0273.0962.0567.1914.087.2855l-.6904.9587a.3452.3452 0 00.2268.5447l1.1662.1893c.0456.088.0922.1751.1408.2622l-.491 1.0762a.3462.3462 0 00.328.49l1.1834-.0415c.0618.0769.1235.1528.1873.2277l-.2713 1.1541a.3462.3462 0 00.4171.4161l1.153-.2713c.075.0638.151.1255.2279.1863l-.0415 1.1845a.3442.3442 0 00.49.327l1.0761-.49c.087.0486.1741.0951.2622.1407l.1903 1.1662a.3483.3483 0 00.5447.2268l.9587-.6904a9.299 9.299 0 00.2855.087l.414 1.1066a.3452.3452 0 00.5781.1154l.8079-.8656c.0972.0111.1954.0203.2936.0294l.6236 1.0073a.3472.3472 0 00.5892 0l.6236-1.0073c.0982-.0091.1964-.0183.2936-.0294l.8069.8656a.3483.3483 0 00.578-.1154l.4141-1.1066a8.4626 8.4626 0 00.2855-.087l.9587.6904a.3452.3452 0 00.5447-.2268l.1903-1.1662c.088-.0456.1751-.0931.2622-.1407l1.0762.49a.3472.3472 0 00.49-.327l-.0415-1.1845a6.7267 6.7267 0 00.2267-.1863l1.1531.2713a.3472.3472 0 00.4171-.416l-.2713-1.1542c.0628-.0749.1255-.1508.1863-.2278l1.1845.0415a.3442.3442 0 00.328-.49l-.49-1.076c.0475-.0872.0951-.1742.1407-.2623l1.1662-.1893a.3483.3483 0 00.2258-.5447l-.6904-.9587.087-.2855 1.1066-.414a.3462.3462 0 00.1154-.5781l-.8656-.8079c.0101-.0972.0202-.1954.0283-.2936l1.0073-.6236a.3442.3442 0 000-.5892zm-6.7413 8.3551a.7138.7138 0 01.2986-1.396.714.714 0 11-.2997 1.396zm-.3422-2.3142a.649.649 0 00-.7715.5l-.3573 1.6685c-1.1035.501-2.3285.7795-3.6193.7795a8.7368 8.7368 0 01-3.6951-.814l-.3574-1.6684a.648.648 0 00-.7714-.499l-1.473.3158a8.7216 8.7216 0 01-.7613-.898h7.1676c.081 0 .1356-.0141.1356-.088v-2.536c0-.074-.0536-.0881-.1356-.0881h-2.0966v-1.6077h2.2677c.2065 0 1.1065.0587 1.394 1.2088.0901.3533.2875 1.5044.4232 1.8729.1346.413.6833 1.2381 1.2685 1.2381h3.5716a.7492.7492 0 00.1296-.0131 8.7874 8.7874 0 01-.8119.9526zM6.8369 20.024a.714.714 0 11-.2997-1.396.714.714 0 01.2997 1.396zM4.1177 8.9972a.7137.7137 0 11-1.304.5791.7137.7137 0 011.304-.579zm-.8352 1.9813l1.5347-.6824a.65.65 0 00.33-.8585l-.3158-.7147h1.2432v5.6025H3.5669a8.7753 8.7753 0 01-.2834-3.348zm6.7343-.5437V8.7836h2.9601c.153 0 1.0792.1772 1.0792.8697 0 .575-.7107.7815-1.2948.7815zm10.7574 1.4862c0 .2187-.008.4363-.0243.651h-.9c-.09 0-.1265.0586-.1265.1477v.413c0 .973-.5487 1.1846-1.0296 1.2382-.4576.0517-.9648-.1913-1.0275-.4717-.2704-1.5186-.7198-1.8436-1.4305-2.4034.8817-.5599 1.799-1.386 1.799-2.4915 0-1.1936-.819-1.9458-1.3769-2.3153-.7825-.5163-1.6491-.6195-1.883-.6195H5.4682a8.7651 8.7651 0 014.907-2.7699l1.0974 1.151a.648.648 0 00.9182.0213l1.227-1.1743a8.7753 8.7753 0 016.0044 4.2762l-.8403 1.8982a.652.652 0 00.33.8585l1.6178.7188c.0283.2875.0425.577.0425.8717zm-9.3006-9.5993a.7128.7128 0 11.984 1.0316.7137.7137 0 01-.984-1.0316zm8.3389 6.71a.7107.7107 0 01.9395-.3625.7137.7137 0 11-.9405.3635z"},child:[]}]})(t)}function no(t){return g({attr:{role:"img",viewBox:"0 0 24 24"},child:[{tag:"path",attr:{d:"M4.409 6.608L7.981.255l3.572 6.353H4.409zM8.411 0l3.569 6.348L15.552 0H8.411zm4.036 17.392l3.572 6.354 3.575-6.354h-7.147zm-.608-10.284h-7.43l3.715 6.605 3.715-6.605zm.428-.25h7.428L15.982.255l-3.715 6.603zM15.589 24l-3.569-6.349L8.448 24h7.141zm-3.856-6.858H4.306l3.712 6.603 3.715-6.603zm.428-.25h7.433l-3.718-6.605-3.715 6.605z"},child:[]}]})(t)}function Je(t){return g({attr:{role:"img",viewBox:"0 0 24 24"},child:[{tag:"path",attr:{d:"m23.693 10.7058-4.73-8.1844c-.4094-.7106-1.4166-1.2942-2.2402-1.2942H7.2725c-.819 0-1.8308.5836-2.2402 1.2942L.307 10.7058c-.4095.7106-.4095 1.873 0 2.5837l4.7252 8.189c.4094.7107 1.4166 1.2943 2.2402 1.2943h9.455c.819 0 1.826-.5836 2.2402-1.2942l4.7252-8.189c.4095-.7107.4095-1.8732 0-2.5838zM10.9763 5.7547c0-.5365.4377-.9742.9742-.9742s.9742.4377.9742.9742v5.8217c0 .5366-.4377.9742-.9742.9742s-.9742-.4376-.9742-.9742zm.9742 12.4294c-3.6427 0-6.6077-2.965-6.6077-6.6077.0047-2.0896.993-4.0521 2.6685-5.304a.8657.8657 0 0 1 1.2142.1788.8657.8657 0 0 1-.1788 1.2143c-2.1602 1.6048-2.612 4.6592-1.0072 6.8194 1.6049 2.1603 4.6593 2.612 6.8195 1.0072 1.2378-.9177 1.9673-2.372 1.9673-3.9157a4.8972 4.8972 0 0 0-1.9861-3.925c-.386-.2824-.466-.8284-.1836-1.2143.2824-.386.8283-.466 1.2143-.1835 1.6895 1.2471 2.6826 3.2238 2.6873 5.3228 0 3.6474-2.965 6.6077-6.6077 6.6077z"},child:[]}]})(t)}function ge(t){return g({attr:{role:"img",viewBox:"0 0 24 24"},child:[{tag:"path",attr:{d:"M7.508 0c-.287 0-.573 0-.86.002-.241.002-.483.003-.724.01-.132.003-.263.009-.395.015A9.154 9.154 0 0 0 4.348.15 5.492 5.492 0 0 0 2.85.645 5.04 5.04 0 0 0 .645 2.848c-.245.48-.4.972-.495 1.5-.093.52-.122 1.05-.136 1.576a35.2 35.2 0 0 0-.012.724C0 6.935 0 7.221 0 7.508v8.984c0 .287 0 .575.002.862.002.24.005.481.012.722.014.526.043 1.057.136 1.576.095.528.25 1.02.495 1.5a5.03 5.03 0 0 0 2.205 2.203c.48.244.97.4 1.498.495.52.093 1.05.124 1.576.138.241.007.483.009.724.01.287.002.573.002.86.002h8.984c.287 0 .573 0 .86-.002.241-.001.483-.003.724-.01a10.523 10.523 0 0 0 1.578-.138 5.322 5.322 0 0 0 1.498-.495 5.035 5.035 0 0 0 2.203-2.203c.245-.48.4-.972.495-1.5.093-.52.124-1.05.138-1.576.007-.241.009-.481.01-.722.002-.287.002-.575.002-.862V7.508c0-.287 0-.573-.002-.86a33.662 33.662 0 0 0-.01-.724 10.5 10.5 0 0 0-.138-1.576 5.328 5.328 0 0 0-.495-1.5A5.039 5.039 0 0 0 21.152.645 5.32 5.32 0 0 0 19.654.15a10.493 10.493 0 0 0-1.578-.138 34.98 34.98 0 0 0-.722-.01C17.067 0 16.779 0 16.492 0H7.508zm6.035 3.41c4.114 2.47 6.545 7.162 5.549 11.131-.024.093-.05.181-.076.272l.002.001c2.062 2.538 1.5 5.258 1.236 4.745-1.072-2.086-3.066-1.568-4.088-1.043a6.803 6.803 0 0 1-.281.158l-.02.012-.002.002c-2.115 1.123-4.957 1.205-7.812-.022a12.568 12.568 0 0 1-5.64-4.838c.649.48 1.35.902 2.097 1.252 3.019 1.414 6.051 1.311 8.197-.002C9.651 12.73 7.101 9.67 5.146 7.191a10.628 10.628 0 0 1-1.005-1.384c2.34 2.142 6.038 4.83 7.365 5.576C8.69 8.408 6.208 4.743 6.324 4.86c4.436 4.47 8.528 6.996 8.528 6.996.154.085.27.154.36.213.085-.215.16-.437.224-.668.708-2.588-.09-5.548-1.893-7.992z"},child:[]}]})(t)}function oo(t){return g({attr:{role:"img",viewBox:"0 0 24 24"},child:[{tag:"path",attr:{d:"M1.44 0v7.575l6.561 3.79V3.787zm21.12 4.227l-6.561 3.791v7.574l6.56-3.787zM8.72 4.23v7.575l6.561 3.787V8.018zm0 8.405v7.575L15.28 24v-7.578z"},child:[]}]})(t)}function io(t){return g({attr:{role:"img",viewBox:"0 0 24 24"},child:[{tag:"path",attr:{d:"M1.125 0C.502 0 0 .502 0 1.125v21.75C0 23.498.502 24 1.125 24h21.75c.623 0 1.125-.502 1.125-1.125V1.125C24 .502 23.498 0 22.875 0zm17.363 9.75c.612 0 1.154.037 1.627.111a6.38 6.38 0 0 1 1.306.34v2.458a3.95 3.95 0 0 0-.643-.361 5.093 5.093 0 0 0-.717-.26 5.453 5.453 0 0 0-1.426-.2c-.3 0-.573.028-.819.086a2.1 2.1 0 0 0-.623.242c-.17.104-.3.229-.393.374a.888.888 0 0 0-.14.49c0 .196.053.373.156.529.104.156.252.304.443.444s.423.276.696.41c.273.135.582.274.926.416.47.197.892.407 1.266.628.374.222.695.473.963.753.268.279.472.598.614.957.142.359.214.776.214 1.253 0 .657-.125 1.21-.373 1.656a3.033 3.033 0 0 1-1.012 1.085 4.38 4.38 0 0 1-1.487.596c-.566.12-1.163.18-1.79.18a9.916 9.916 0 0 1-1.84-.164 5.544 5.544 0 0 1-1.512-.493v-2.63a5.033 5.033 0 0 0 3.237 1.2c.333 0 .624-.03.872-.09.249-.06.456-.144.623-.25.166-.108.29-.234.373-.38a1.023 1.023 0 0 0-.074-1.089 2.12 2.12 0 0 0-.537-.5 5.597 5.597 0 0 0-.807-.444 27.72 27.72 0 0 0-1.007-.436c-.918-.383-1.602-.852-2.053-1.405-.45-.553-.676-1.222-.676-2.005 0-.614.123-1.141.369-1.582.246-.441.58-.804 1.004-1.089a4.494 4.494 0 0 1 1.47-.629 7.536 7.536 0 0 1 1.77-.201zm-15.113.188h9.563v2.166H9.506v9.646H6.789v-9.646H3.375z"},child:[]}]})(t)}function so(t){return g({attr:{role:"img",viewBox:"0 0 24 24"},child:[{tag:"path",attr:{d:"M24,1.61H14.06L12,5.16,9.94,1.61H0L12,22.39ZM12,14.08,5.16,2.23H9.59L12,6.41l2.41-4.18h4.43Z"},child:[]}]})(t)}function ao(t){return g({attr:{role:"img",viewBox:"0 0 24 24"},child:[{tag:"path",attr:{d:"M21.469 6.825c.84 1.537 1.318 3.3 1.318 5.175 0 3.979-2.156 7.456-5.363 9.325l3.295-9.527c.615-1.54.82-2.771.82-3.864 0-.405-.026-.78-.07-1.11m-7.981.105c.647-.03 1.232-.105 1.232-.105.582-.075.514-.93-.067-.899 0 0-1.755.135-2.88.135-1.064 0-2.85-.15-2.85-.15-.585-.03-.661.855-.075.885 0 0 .54.061 1.125.09l1.68 4.605-2.37 7.08L5.354 6.9c.649-.03 1.234-.1 1.234-.1.585-.075.516-.93-.065-.896 0 0-1.746.138-2.874.138-.2 0-.438-.008-.69-.015C4.911 3.15 8.235 1.215 12 1.215c2.809 0 5.365 1.072 7.286 2.833-.046-.003-.091-.009-.141-.009-1.06 0-1.812.923-1.812 1.914 0 .89.513 1.643 1.06 2.531.411.72.89 1.643.89 2.977 0 .915-.354 1.994-.821 3.479l-1.075 3.585-3.9-11.61.001.014zM12 22.784c-1.059 0-2.081-.153-3.048-.437l3.237-9.406 3.315 9.087c.024.053.05.101.078.149-1.12.393-2.325.609-3.582.609M1.211 12c0-1.564.336-3.05.935-4.39L7.29 21.709C3.694 19.96 1.212 16.271 1.211 12M12 0C5.385 0 0 5.385 0 12s5.385 12 12 12 12-5.385 12-12S18.615 0 12 0"},child:[]}]})(t)}function $(t){return g({attr:{viewBox:"0 0 576 512"},child:[{tag:"path",attr:{d:"M208 0c-29.9 0-54.7 20.5-61.8 48.2-.8 0-1.4-.2-2.2-.2-35.3 0-64 28.7-64 64 0 4.8.6 9.5 1.7 14C52.5 138 32 166.6 32 200c0 12.6 3.2 24.3 8.3 34.9C16.3 248.7 0 274.3 0 304c0 33.3 20.4 61.9 49.4 73.9-.9 4.6-1.4 9.3-1.4 14.1 0 39.8 32.2 72 72 72 4.1 0 8.1-.5 12-1.2 9.6 28.5 36.2 49.2 68 49.2 39.8 0 72-32.2 72-72V64c0-35.3-28.7-64-64-64zm368 304c0-29.7-16.3-55.3-40.3-69.1 5.2-10.6 8.3-22.3 8.3-34.9 0-33.4-20.5-62-49.7-74 1-4.5 1.7-9.2 1.7-14 0-35.3-28.7-64-64-64-.8 0-1.5.2-2.2.2C422.7 20.5 397.9 0 368 0c-35.3 0-64 28.6-64 64v376c0 39.8 32.2 72 72 72 31.8 0 58.4-20.7 68-49.2 3.9.7 7.9 1.2 12 1.2 39.8 0 72-32.2 72-72 0-4.8-.5-9.5-1.4-14.1 29-12 49.4-40.6 49.4-73.9z"},child:[]}]})(t)}function Z(t){return g({attr:{viewBox:"0 0 512 512"},child:[{tag:"path",attr:{d:"M332.8 320h38.4c6.4 0 12.8-6.4 12.8-12.8V172.8c0-6.4-6.4-12.8-12.8-12.8h-38.4c-6.4 0-12.8 6.4-12.8 12.8v134.4c0 6.4 6.4 12.8 12.8 12.8zm96 0h38.4c6.4 0 12.8-6.4 12.8-12.8V76.8c0-6.4-6.4-12.8-12.8-12.8h-38.4c-6.4 0-12.8 6.4-12.8 12.8v230.4c0 6.4 6.4 12.8 12.8 12.8zm-288 0h38.4c6.4 0 12.8-6.4 12.8-12.8v-70.4c0-6.4-6.4-12.8-12.8-12.8h-38.4c-6.4 0-12.8 6.4-12.8 12.8v70.4c0 6.4 6.4 12.8 12.8 12.8zm96 0h38.4c6.4 0 12.8-6.4 12.8-12.8V108.8c0-6.4-6.4-12.8-12.8-12.8h-38.4c-6.4 0-12.8 6.4-12.8 12.8v198.4c0 6.4 6.4 12.8 12.8 12.8zM496 384H64V80c0-8.84-7.16-16-16-16H16C7.16 64 0 71.16 0 80v336c0 17.67 14.33 32 32 32h464c8.84 0 16-7.16 16-16v-32c0-8.84-7.16-16-16-16z"},child:[]}]})(t)}function X(t){return g({attr:{viewBox:"0 0 640 512"},child:[{tag:"path",attr:{d:"M278.9 511.5l-61-17.7c-6.4-1.8-10-8.5-8.2-14.9L346.2 8.7c1.8-6.4 8.5-10 14.9-8.2l61 17.7c6.4 1.8 10 8.5 8.2 14.9L293.8 503.3c-1.9 6.4-8.5 10.1-14.9 8.2zm-114-112.2l43.5-46.4c4.6-4.9 4.3-12.7-.8-17.2L117 256l90.6-79.7c5.1-4.5 5.5-12.3.8-17.2l-43.5-46.4c-4.5-4.8-12.1-5.1-17-.5L3.8 247.2c-5.1 4.7-5.1 12.8 0 17.5l144.1 135.1c4.9 4.6 12.5 4.4 17-.5zm327.2.6l144.1-135.1c5.1-4.7 5.1-12.8 0-17.5L492.1 112.1c-4.8-4.5-12.4-4.3-17 .5L431.6 159c-4.6 4.9-4.3 12.7.8 17.2L523 256l-90.6 79.7c-5.1 4.5-5.5 12.3-.8 17.2l43.5 46.4c4.5 4.9 12.1 5.1 17 .6z"},child:[]}]})(t)}function ro(t){return g({attr:{viewBox:"0 0 640 512"},child:[{tag:"path",attr:{d:"M512.1 191l-8.2 14.3c-3 5.3-9.4 7.5-15.1 5.4-11.8-4.4-22.6-10.7-32.1-18.6-4.6-3.8-5.8-10.5-2.8-15.7l8.2-14.3c-6.9-8-12.3-17.3-15.9-27.4h-16.5c-6 0-11.2-4.3-12.2-10.3-2-12-2.1-24.6 0-37.1 1-6 6.2-10.4 12.2-10.4h16.5c3.6-10.1 9-19.4 15.9-27.4l-8.2-14.3c-3-5.2-1.9-11.9 2.8-15.7 9.5-7.9 20.4-14.2 32.1-18.6 5.7-2.1 12.1.1 15.1 5.4l8.2 14.3c10.5-1.9 21.2-1.9 31.7 0L552 6.3c3-5.3 9.4-7.5 15.1-5.4 11.8 4.4 22.6 10.7 32.1 18.6 4.6 3.8 5.8 10.5 2.8 15.7l-8.2 14.3c6.9 8 12.3 17.3 15.9 27.4h16.5c6 0 11.2 4.3 12.2 10.3 2 12 2.1 24.6 0 37.1-1 6-6.2 10.4-12.2 10.4h-16.5c-3.6 10.1-9 19.4-15.9 27.4l8.2 14.3c3 5.2 1.9 11.9-2.8 15.7-9.5 7.9-20.4 14.2-32.1 18.6-5.7 2.1-12.1-.1-15.1-5.4l-8.2-14.3c-10.4 1.9-21.2 1.9-31.7 0zm-10.5-58.8c38.5 29.6 82.4-14.3 52.8-52.8-38.5-29.7-82.4 14.3-52.8 52.8zM386.3 286.1l33.7 16.8c10.1 5.8 14.5 18.1 10.5 29.1-8.9 24.2-26.4 46.4-42.6 65.8-7.4 8.9-20.2 11.1-30.3 5.3l-29.1-16.8c-16 13.7-34.6 24.6-54.9 31.7v33.6c0 11.6-8.3 21.6-19.7 23.6-24.6 4.2-50.4 4.4-75.9 0-11.5-2-20-11.9-20-23.6V418c-20.3-7.2-38.9-18-54.9-31.7L74 403c-10 5.8-22.9 3.6-30.3-5.3-16.2-19.4-33.3-41.6-42.2-65.7-4-10.9.4-23.2 10.5-29.1l33.3-16.8c-3.9-20.9-3.9-42.4 0-63.4L12 205.8c-10.1-5.8-14.6-18.1-10.5-29 8.9-24.2 26-46.4 42.2-65.8 7.4-8.9 20.2-11.1 30.3-5.3l29.1 16.8c16-13.7 34.6-24.6 54.9-31.7V57.1c0-11.5 8.2-21.5 19.6-23.5 24.6-4.2 50.5-4.4 76-.1 11.5 2 20 11.9 20 23.6v33.6c20.3 7.2 38.9 18 54.9 31.7l29.1-16.8c10-5.8 22.9-3.6 30.3 5.3 16.2 19.4 33.2 41.6 42.1 65.8 4 10.9.1 23.2-10 29.1l-33.7 16.8c3.9 21 3.9 42.5 0 63.5zm-117.6 21.1c59.2-77-28.7-164.9-105.7-105.7-59.2 77 28.7 164.9 105.7 105.7zm243.4 182.7l-8.2 14.3c-3 5.3-9.4 7.5-15.1 5.4-11.8-4.4-22.6-10.7-32.1-18.6-4.6-3.8-5.8-10.5-2.8-15.7l8.2-14.3c-6.9-8-12.3-17.3-15.9-27.4h-16.5c-6 0-11.2-4.3-12.2-10.3-2-12-2.1-24.6 0-37.1 1-6 6.2-10.4 12.2-10.4h16.5c3.6-10.1 9-19.4 15.9-27.4l-8.2-14.3c-3-5.2-1.9-11.9 2.8-15.7 9.5-7.9 20.4-14.2 32.1-18.6 5.7-2.1 12.1.1 15.1 5.4l8.2 14.3c10.5-1.9 21.2-1.9 31.7 0l8.2-14.3c3-5.3 9.4-7.5 15.1-5.4 11.8 4.4 22.6 10.7 32.1 18.6 4.6 3.8 5.8 10.5 2.8 15.7l-8.2 14.3c6.9 8 12.3 17.3 15.9 27.4h16.5c6 0 11.2 4.3 12.2 10.3 2 12 2.1 24.6 0 37.1-1 6-6.2 10.4-12.2 10.4h-16.5c-3.6 10.1-9 19.4-15.9 27.4l8.2 14.3c3 5.2 1.9 11.9-2.8 15.7-9.5 7.9-20.4 14.2-32.1 18.6-5.7 2.1-12.1-.1-15.1-5.4l-8.2-14.3c-10.4 1.9-21.2 1.9-31.7 0zM501.6 431c38.5 29.6 82.4-14.3 52.8-52.8-38.5-29.6-82.4 14.3-52.8 52.8z"},child:[]}]})(t)}function fe(t){return g({attr:{viewBox:"0 0 448 512"},child:[{tag:"path",attr:{d:"M448 73.143v45.714C448 159.143 347.667 192 224 192S0 159.143 0 118.857V73.143C0 32.857 100.333 0 224 0s224 32.857 224 73.143zM448 176v102.857C448 319.143 347.667 352 224 352S0 319.143 0 278.857V176c48.125 33.143 136.208 48.572 224 48.572S399.874 209.143 448 176zm0 160v102.857C448 479.143 347.667 512 224 512S0 479.143 0 438.857V336c48.125 33.143 136.208 48.572 224 48.572S399.874 369.143 448 336z"},child:[]}]})(t)}function Ue(t){return g({attr:{viewBox:"0 0 640 512"},child:[{tag:"path",attr:{d:"M480.07 96H160a160 160 0 1 0 114.24 272h91.52A160 160 0 1 0 480.07 96zM248 268a12 12 0 0 1-12 12h-52v52a12 12 0 0 1-12 12h-24a12 12 0 0 1-12-12v-52H84a12 12 0 0 1-12-12v-24a12 12 0 0 1 12-12h52v-52a12 12 0 0 1 12-12h24a12 12 0 0 1 12 12v52h52a12 12 0 0 1 12 12zm216 76a40 40 0 1 1 40-40 40 40 0 0 1-40 40zm64-96a40 40 0 1 1 40-40 40 40 0 0 1-40 40z"},child:[]}]})(t)}function Ve(t){return g({attr:{viewBox:"0 0 576 512"},child:[{tag:"path",attr:{d:"M528 448H48c-26.51 0-48-21.49-48-48V112c0-26.51 21.49-48 48-48h480c26.51 0 48 21.49 48 48v288c0 26.51-21.49 48-48 48zM128 180v-40c0-6.627-5.373-12-12-12H76c-6.627 0-12 5.373-12 12v40c0 6.627 5.373 12 12 12h40c6.627 0 12-5.373 12-12zm96 0v-40c0-6.627-5.373-12-12-12h-40c-6.627 0-12 5.373-12 12v40c0 6.627 5.373 12 12 12h40c6.627 0 12-5.373 12-12zm96 0v-40c0-6.627-5.373-12-12-12h-40c-6.627 0-12 5.373-12 12v40c0 6.627 5.373 12 12 12h40c6.627 0 12-5.373 12-12zm96 0v-40c0-6.627-5.373-12-12-12h-40c-6.627 0-12 5.373-12 12v40c0 6.627 5.373 12 12 12h40c6.627 0 12-5.373 12-12zm96 0v-40c0-6.627-5.373-12-12-12h-40c-6.627 0-12 5.373-12 12v40c0 6.627 5.373 12 12 12h40c6.627 0 12-5.373 12-12zm-336 96v-40c0-6.627-5.373-12-12-12h-40c-6.627 0-12 5.373-12 12v40c0 6.627 5.373 12 12 12h40c6.627 0 12-5.373 12-12zm96 0v-40c0-6.627-5.373-12-12-12h-40c-6.627 0-12 5.373-12 12v40c0 6.627 5.373 12 12 12h40c6.627 0 12-5.373 12-12zm96 0v-40c0-6.627-5.373-12-12-12h-40c-6.627 0-12 5.373-12 12v40c0 6.627 5.373 12 12 12h40c6.627 0 12-5.373 12-12zm96 0v-40c0-6.627-5.373-12-12-12h-40c-6.627 0-12 5.373-12 12v40c0 6.627 5.373 12 12 12h40c6.627 0 12-5.373 12-12zm-336 96v-40c0-6.627-5.373-12-12-12H76c-6.627 0-12 5.373-12 12v40c0 6.627 5.373 12 12 12h40c6.627 0 12-5.373 12-12zm288 0v-40c0-6.627-5.373-12-12-12H172c-6.627 0-12 5.373-12 12v40c0 6.627 5.373 12 12 12h232c6.627 0 12-5.373 12-12zm96 0v-40c0-6.627-5.373-12-12-12h-40c-6.627 0-12 5.373-12 12v40c0 6.627 5.373 12 12 12h40c6.627 0 12-5.373 12-12z"},child:[]}]})(t)}function be(t){return g({attr:{viewBox:"0 0 640 512"},child:[{tag:"path",attr:{d:"M255.03 261.65c6.25 6.25 16.38 6.25 22.63 0l11.31-11.31c6.25-6.25 6.25-16.38 0-22.63L253.25 192l35.71-35.72c6.25-6.25 6.25-16.38 0-22.63l-11.31-11.31c-6.25-6.25-16.38-6.25-22.63 0l-58.34 58.34c-6.25 6.25-6.25 16.38 0 22.63l58.35 58.34zm96.01-11.3l11.31 11.31c6.25 6.25 16.38 6.25 22.63 0l58.34-58.34c6.25-6.25 6.25-16.38 0-22.63l-58.34-58.34c-6.25-6.25-16.38-6.25-22.63 0l-11.31 11.31c-6.25 6.25-6.25 16.38 0 22.63L386.75 192l-35.71 35.72c-6.25 6.25-6.25 16.38 0 22.63zM624 416H381.54c-.74 19.81-14.71 32-32.74 32H288c-18.69 0-33.02-17.47-32.77-32H16c-8.8 0-16 7.2-16 16v16c0 35.2 28.8 64 64 64h512c35.2 0 64-28.8 64-64v-16c0-8.8-7.2-16-16-16zM576 48c0-26.4-21.6-48-48-48H112C85.6 0 64 21.6 64 48v336h512V48zm-64 272H128V64h384v256z"},child:[]}]})(t)}function _e(t){return g({attr:{viewBox:"0 0 640 512"},child:[{tag:"path",attr:{d:"M640 264v-16c0-8.84-7.16-16-16-16H344v-40h72c17.67 0 32-14.33 32-32V32c0-17.67-14.33-32-32-32H224c-17.67 0-32 14.33-32 32v128c0 17.67 14.33 32 32 32h72v40H16c-8.84 0-16 7.16-16 16v16c0 8.84 7.16 16 16 16h104v40H64c-17.67 0-32 14.33-32 32v128c0 17.67 14.33 32 32 32h160c17.67 0 32-14.33 32-32V352c0-17.67-14.33-32-32-32h-56v-40h304v40h-56c-17.67 0-32 14.33-32 32v128c0 17.67 14.33 32 32 32h160c17.67 0 32-14.33 32-32V352c0-17.67-14.33-32-32-32h-56v-40h104c8.84 0 16-7.16 16-16zM256 128V64h128v64H256zm-64 320H96v-64h96v64zm352 0h-96v-64h96v64z"},child:[]}]})(t)}function Qe(t){return g({attr:{viewBox:"0 0 512 512"},child:[{tag:"path",attr:{d:"M109.46 244.04l134.58-134.56-44.12-44.12-61.68 61.68a7.919 7.919 0 0 1-11.21 0l-11.21-11.21c-3.1-3.1-3.1-8.12 0-11.21l61.68-61.68-33.64-33.65C131.47-3.1 111.39-3.1 99 9.29L9.29 99c-12.38 12.39-12.39 32.47 0 44.86l100.17 100.18zm388.47-116.8c18.76-18.76 18.75-49.17 0-67.93l-45.25-45.25c-18.76-18.76-49.18-18.76-67.95 0l-46.02 46.01 113.2 113.2 46.02-46.03zM316.08 82.71l-297 296.96L.32 487.11c-2.53 14.49 10.09 27.11 24.59 24.56l107.45-18.84L429.28 195.9 316.08 82.71zm186.63 285.43l-33.64-33.64-61.68 61.68c-3.1 3.1-8.12 3.1-11.21 0l-11.21-11.21c-3.09-3.1-3.09-8.12 0-11.21l61.68-61.68-44.14-44.14L267.93 402.5l100.21 100.2c12.39 12.39 32.47 12.39 44.86 0l89.71-89.7c12.39-12.39 12.39-32.47 0-44.86z"},child:[]}]})(t)}function ye(t){return g({attr:{viewBox:"0 0 640 512"},child:[{tag:"path",attr:{d:"M384 320H256c-17.67 0-32 14.33-32 32v128c0 17.67 14.33 32 32 32h128c17.67 0 32-14.33 32-32V352c0-17.67-14.33-32-32-32zM192 32c0-17.67-14.33-32-32-32H32C14.33 0 0 14.33 0 32v128c0 17.67 14.33 32 32 32h95.72l73.16 128.04C211.98 300.98 232.4 288 256 288h.28L192 175.51V128h224V64H192V32zM608 0H480c-17.67 0-32 14.33-32 32v128c0 17.67 14.33 32 32 32h128c17.67 0 32-14.33 32-32V32c0-17.67-14.33-32-32-32z"},child:[]}]})(t)}function Ke(t){return g({attr:{viewBox:"0 0 640 512"},child:[{tag:"path",attr:{d:"M32,224H64V416H32A31.96166,31.96166,0,0,1,0,384V256A31.96166,31.96166,0,0,1,32,224Zm512-48V448a64.06328,64.06328,0,0,1-64,64H160a64.06328,64.06328,0,0,1-64-64V176a79.974,79.974,0,0,1,80-80H288V32a32,32,0,0,1,64,0V96H464A79.974,79.974,0,0,1,544,176ZM264,256a40,40,0,1,0-40,40A39.997,39.997,0,0,0,264,256Zm-8,128H192v32h64Zm96,0H288v32h64ZM456,256a40,40,0,1,0-40,40A39.997,39.997,0,0,0,456,256Zm-8,128H384v32h64ZM640,256V384a31.96166,31.96166,0,0,1-32,32H576V224h32A31.96166,31.96166,0,0,1,640,256Z"},child:[]}]})(t)}function Ye(t){return g({attr:{viewBox:"0 0 512 512"},child:[{tag:"path",attr:{d:"M505 442.7L405.3 343c-4.5-4.5-10.6-7-17-7H372c27.6-35.3 44-79.7 44-128C416 93.1 322.9 0 208 0S0 93.1 0 208s93.1 208 208 208c48.3 0 92.7-16.4 128-44v16.3c0 6.4 2.5 12.5 7 17l99.7 99.7c9.4 9.4 24.6 9.4 33.9 0l28.3-28.3c9.4-9.4 9.4-24.6.1-34zM208 336c-70.7 0-128-57.2-128-128 0-70.7 57.2-128 128-128 70.7 0 128 57.2 128 128 0 70.7-57.2 128-128 128z"},child:[]}]})(t)}function J(t){return g({attr:{viewBox:"0 0 512 512"},child:[{tag:"path",attr:{d:"M480 160H32c-17.673 0-32-14.327-32-32V64c0-17.673 14.327-32 32-32h448c17.673 0 32 14.327 32 32v64c0 17.673-14.327 32-32 32zm-48-88c-13.255 0-24 10.745-24 24s10.745 24 24 24 24-10.745 24-24-10.745-24-24-24zm-64 0c-13.255 0-24 10.745-24 24s10.745 24 24 24 24-10.745 24-24-10.745-24-24-24zm112 248H32c-17.673 0-32-14.327-32-32v-64c0-17.673 14.327-32 32-32h448c17.673 0 32 14.327 32 32v64c0 17.673-14.327 32-32 32zm-48-88c-13.255 0-24 10.745-24 24s10.745 24 24 24 24-10.745 24-24-10.745-24-24-24zm-64 0c-13.255 0-24 10.745-24 24s10.745 24 24 24 24-10.745 24-24-10.745-24-24-24zm112 248H32c-17.673 0-32-14.327-32-32v-64c0-17.673 14.327-32 32-32h448c17.673 0 32 14.327 32 32v64c0 17.673-14.327 32-32 32zm-48-88c-13.255 0-24 10.745-24 24s10.745 24 24 24 24-10.745 24-24-10.745-24-24-24zm-64 0c-13.255 0-24 10.745-24 24s10.745 24 24 24 24-10.745 24-24-10.745-24-24-24z"},child:[]}]})(t)}function $e(t){return g({attr:{viewBox:"0 0 512 512"},child:[{tag:"path",attr:{d:"M466.5 83.7l-192-80a48.15 48.15 0 0 0-36.9 0l-192 80C27.7 91.1 16 108.6 16 128c0 198.5 114.5 335.7 221.5 380.3 11.8 4.9 25.1 4.9 36.9 0C360.1 472.6 496 349.3 496 128c0-19.4-11.7-36.9-29.5-44.3zM256.1 446.3l-.1-381 175.9 73.3c-3.3 151.4-82.1 261.1-175.8 307.7z"},child:[]}]})(t)}function U(t){return g({attr:{viewBox:"0 0 448 512"},child:[{tag:"path",attr:{d:"M224 256c70.7 0 128-57.3 128-128S294.7 0 224 0 96 57.3 96 128s57.3 128 128 128zm95.8 32.6L272 480l-32-136 32-56h-96l32 56-32 136-47.8-191.4C56.9 292 0 350.3 0 422.4V464c0 26.5 21.5 48 48 48h352c26.5 0 48-21.5 48-48v-41.6c0-72.1-56.9-130.4-128.2-133.8z"},child:[]}]})(t)}function ee(t){return g({attr:{viewBox:"0 0 24 24"},child:[{tag:"path",attr:{fill:"none",d:"M0 0h24v24H0z"},child:[]},{tag:"path",attr:{d:"m16.24 11.51 1.57-1.57-3.75-3.75-1.57 1.57-4.14-4.13c-.78-.78-2.05-.78-2.83 0l-1.9 1.9c-.78.78-.78 2.05 0 2.83l4.13 4.13L3 17.25V21h3.75l4.76-4.76 4.13 4.13c.95.95 2.23.6 2.83 0l1.9-1.9c.78-.78.78-2.05 0-2.83l-4.13-4.13zm-7.06-.44L5.04 6.94l1.89-1.9L8.2 6.31 7.02 7.5l1.41 1.41 1.19-1.19 1.45 1.45-1.89 1.9zm7.88 7.89-4.13-4.13 1.9-1.9 1.45 1.45-1.19 1.19 1.41 1.41 1.19-1.19 1.27 1.27-1.9 1.9zM20.71 7.04a.996.996 0 0 0 0-1.41l-2.34-2.34c-.47-.47-1.12-.29-1.41 0l-1.83 1.83 3.75 3.75 1.83-1.83z"},child:[]}]})(t)}function te(t){return g({attr:{viewBox:"0 0 24 24"},child:[{tag:"path",attr:{fill:"none",d:"M0 0h24v24H0z"},child:[]},{tag:"path",attr:{d:"M6.36 18.78 6.61 21l1.62-1.54 2.77-7.6c-.68-.17-1.28-.51-1.77-.98l-2.87 7.9zM14.77 10.88c-.49.47-1.1.81-1.77.98l2.77 7.6L17.39 21l.26-2.22-2.88-7.9zM15 8c0-1.3-.84-2.4-2-2.82V3h-2v2.18C9.84 5.6 9 6.7 9 8c0 1.66 1.34 3 3 3s3-1.34 3-3zm-3 1c-.55 0-1-.45-1-1s.45-1 1-1 1 .45 1 1-.45 1-1 1z"},child:[]}]})(t)}function Ze(t){return g({attr:{viewBox:"0 0 24 24"},child:[{tag:"path",attr:{fill:"none",d:"M0 0h24v24H0V0z"},child:[]},{tag:"path",attr:{d:"M12 1 3 5v6c0 5.55 3.84 10.74 9 12 5.16-1.26 9-6.45 9-12V5l-9-4zm0 10.99h7c-.53 4.12-3.28 7.79-7 8.94V12H5V6.3l7-3.11v8.8z"},child:[]}]})(t)}function lo(t){return g({attr:{viewBox:"0 0 24 24"},child:[{tag:"path",attr:{d:"M3.5 3.75a.25.25 0 0 1 .25-.25h13.5a.25.25 0 0 1 .25.25v10a.75.75 0 0 0 1.5 0v-10A1.75 1.75 0 0 0 17.25 2H3.75A1.75 1.75 0 0 0 2 3.75v16.5c0 .966.784 1.75 1.75 1.75h7a.75.75 0 0 0 0-1.5h-7a.25.25 0 0 1-.25-.25V3.75Z"},child:[]},{tag:"path",attr:{d:"M6.25 7a.75.75 0 0 0 0 1.5h8.5a.75.75 0 0 0 0-1.5h-8.5Zm-.75 4.75a.75.75 0 0 1 .75-.75h4.5a.75.75 0 0 1 0 1.5h-4.5a.75.75 0 0 1-.75-.75Zm16.28 4.53a.75.75 0 1 0-1.06-1.06l-4.97 4.97-1.97-1.97a.75.75 0 1 0-1.06 1.06l2.5 2.5a.75.75 0 0 0 1.06 0l5.5-5.5Z"},child:[]}]})(t)}function co(t){return g({attr:{viewBox:"0 0 24 24",fill:"currentColor"},child:[{tag:"path",attr:{d:"M4 6.14286V18.9669L9.06476 16.7963L15.0648 19.7963L20 17.6812V4.85714L21.303 4.2987C21.5569 4.18992 21.8508 4.30749 21.9596 4.56131C21.9862 4.62355 22 4.69056 22 4.75827V19L15 22L9 19L2.69696 21.7013C2.44314 21.8101 2.14921 21.6925 2.04043 21.4387C2.01375 21.3765 2 21.3094 2 21.2417V7L4 6.14286ZM16.2426 11.2426L12 15.4853L7.75736 11.2426C5.41421 8.89949 5.41421 5.10051 7.75736 2.75736C10.1005 0.414214 13.8995 0.414214 16.2426 2.75736C18.5858 5.10051 18.5858 8.89949 16.2426 11.2426ZM12 12.6569L14.8284 9.82843C16.3905 8.26633 16.3905 5.73367 14.8284 4.17157C13.2663 2.60948 10.7337 2.60948 9.17157 4.17157C7.60948 5.73367 7.60948 8.26633 9.17157 9.82843L12 12.6569Z"},child:[]}]})(t)}const po={frontend:Y,backend:J,fullstack:be,devops:K,android:Rn,ios:Jn,postgresql:ze,postgresqldba:ze,qa:lo,"software-architect":te,softwarearchitect:te,"technical-writer":Qe,technicalwriter:Qe,devrel:U,"machine-learning":$,machinelearning:$,"ai-data-scientist":He,aidatascientist:He,"ai-engineer":$,aiengineer:$,"ai-agents":Ke,aiagents:Ke,"data-analyst":Z,dataanalyst:Z,"bi-analyst":Z,bianalyst:Z,"data-engineer":fe,dataengineer:fe,mlops:ro,"product-manager":U,productmanager:U,"engineering-manager":U,engineeringmanager:U,"game-developer":Ue,gamedeveloper:Ue,"server-side-game-developer":J,serversidegamedeveloper:J,"ux-design":ee,uxdesign:ee,blockchain:no,"cyber-security":$e,cybersecurity:$e,"api-design":_e,apidesign:_e,"system-design":ye,systemdesign:ye,systemDesign:ye,"frontend-beginner":Y,frontendbeginner:Y,"backend-beginner":J,backendbeginner:J,"devops-beginner":K,devopsbeginner:K,html:Y,css:Gn,javascript:Un,typescript:io,react:he,"react-native":he,reactnative:he,vue:so,angular:qn,nextjs:$n,"node.js":Ee,nodejs:Ee,"spring-boot":Je,springboot:Je,"asp.net-core":qe,aspnetcore:qe,laravel:Qn,php:Zn,python:Xn,java:X,go:Ge,golang:Ge,rust:to,"c++":Re,cpp:Re,kotlin:Vn,swift:ge,"swift-ui":ge,swiftui:ge,flutter:Hn,mongodb:Yn,redis:eo,sql:fe,docker:K,kubernetes:_n,aws:Fn,linux:Kn,"git-github":Be,gitgithub:Be,graphql:zn,wordpress:ao,terraform:oo,cloudflare:Bn,elasticsearch:En,bash:me,"shell-bash":me,shellbash:me,"computer-science":be,computerscience:be,dsa:X,"datastructures-and-algorithms":X,datastructuresandalgorithms:X,"design-and-architecture":te,softwaredesignarchitecture:te,"code-review":Ye,codereview:Ye,"ai-red-teaming":Ze,airedteaming:Ze,"prompt-engineering":Ve,promptengineering:Ve,"design-system":ee,designsystem:ee},Xe=(t,s=24)=>{const o=po[t]||co;return e.jsx(o,{size:s})},uo={"Role Based":[{name:"Frontend Beginner",url:"https://roadmap.sh/frontend?r=frontend-beginner",icon:"🎨"},{name:"Backend Beginner",url:"https://roadmap.sh/backend?r=backend-beginner",icon:"⚙️"},{name:"DevOps Beginner",url:"https://roadmap.sh/devops?r=devops-beginner",icon:"🔧"},{name:"Frontend",url:"https://roadmap.sh/frontend",icon:"⚛️"},{name:"Backend",url:"https://roadmap.sh/backend",icon:"🖥️"},{name:"Full Stack",url:"https://roadmap.sh/full-stack",icon:"🚀"},{name:"API Design",url:"https://roadmap.sh/api-design",icon:"🔌"},{name:"QA Engineer",url:"https://roadmap.sh/qa",icon:"✅"},{name:"DevOps",url:"https://roadmap.sh/devops",icon:"♾️"},{name:"Android Developer",url:"https://roadmap.sh/android",icon:"🤖"},{name:"iOS Developer",url:"https://roadmap.sh/ios",icon:"📱"},{name:"PostgreSQL DBA",url:"https://roadmap.sh/postgresql-dba",icon:"🐘"},{name:"Software Architect",url:"https://roadmap.sh/software-architect",icon:"🏛️"},{name:"Technical Writer",url:"https://roadmap.sh/technical-writer",icon:"✍️"},{name:"DevRel Engineer",url:"https://roadmap.sh/devrel",icon:"🤝"},{name:"Machine Learning",url:"https://roadmap.sh/machine-learning",icon:"🤖"},{name:"AI Data Scientist",url:"https://roadmap.sh/ai-data-scientist",icon:"📊"},{name:"AI Engineer",url:"https://roadmap.sh/ai-engineer",icon:"🧠"},{name:"AI Agents",url:"https://roadmap.sh/ai-agents",icon:"🤖"},{name:"Data Analyst",url:"https://roadmap.sh/data-analyst",icon:"📈"},{name:"BI Analyst",url:"https://roadmap.sh/bi-analyst",icon:"📊"},{name:"Data Engineer",url:"https://roadmap.sh/data-engineer",icon:"🗄️"},{name:"MLOps",url:"https://roadmap.sh/mlops",icon:"⚡"},{name:"Product Manager",url:"https://roadmap.sh/product-manager",icon:"📋"},{name:"Engineering Manager",url:"https://roadmap.sh/engineering-manager",icon:"👔"},{name:"Game Developer (Client)",url:"https://roadmap.sh/game-developer",icon:"🎮"},{name:"Game Developer (Server)",url:"https://roadmap.sh/server-side-game-developer",icon:"🎮"},{name:"UX Design",url:"https://roadmap.sh/ux-design",icon:"🎨"},{name:"Blockchain",url:"https://roadmap.sh/blockchain",icon:"⛓️"},{name:"Cyber Security",url:"https://roadmap.sh/cyber-security",icon:"🔒"}],"Skill Based":[{name:"React",url:"https://roadmap.sh/react",icon:"⚛️"},{name:"Vue",url:"https://roadmap.sh/vue",icon:"💚"},{name:"Angular",url:"https://roadmap.sh/angular",icon:"🅰️"},{name:"Next.js",url:"https://roadmap.sh/nextjs",icon:"▲"},{name:"Node.js",url:"https://roadmap.sh/nodejs",icon:"📗"},{name:"Spring Boot",url:"https://roadmap.sh/spring-boot",icon:"🍃"},{name:"ASP.NET Core",url:"https://roadmap.sh/aspnet-core",icon:"🔷"},{name:"Laravel",url:"https://roadmap.sh/laravel",icon:"🔴"},{name:"Python",url:"https://roadmap.sh/python",icon:"🐍"},{name:"Java",url:"https://roadmap.sh/java",icon:"☕"},{name:"JavaScript",url:"https://roadmap.sh/javascript",icon:"🟨"},{name:"TypeScript",url:"https://roadmap.sh/typescript",icon:"🔷"},{name:"Go",url:"https://roadmap.sh/golang",icon:"🐹"},{name:"Rust",url:"https://roadmap.sh/rust",icon:"🦀"},{name:"C++",url:"https://roadmap.sh/cpp",icon:"➕"},{name:"Kotlin",url:"https://roadmap.sh/kotlin",icon:"🟣"},{name:"Swift",url:"https://roadmap.sh/swift-ui",icon:"🍎"},{name:"PHP",url:"https://roadmap.sh/php",icon:"🐘"},{name:"SQL",url:"https://roadmap.sh/sql",icon:"🗄️"},{name:"Docker",url:"https://roadmap.sh/docker",icon:"🐳"},{name:"Kubernetes",url:"https://roadmap.sh/kubernetes",icon:"☸️"},{name:"AWS",url:"https://roadmap.sh/aws",icon:"☁️"},{name:"Linux",url:"https://roadmap.sh/linux",icon:"🐧"},{name:"MongoDB",url:"https://roadmap.sh/mongodb",icon:"🍃"},{name:"Redis",url:"https://roadmap.sh/redis",icon:"🔴"},{name:"GraphQL",url:"https://roadmap.sh/graphql",icon:"💜"},{name:"System Design",url:"https://roadmap.sh/system-design",icon:"🏗️"},{name:"Data Structures",url:"https://roadmap.sh/datastructures-and-algorithms",icon:"📚"},{name:"Prompt Engineering",url:"https://roadmap.sh/prompt-engineering",icon:"💬"}]};function mo(){const[t,s]=m.useState("frontend"),[i,o]=m.useState("internal"),[n,r]=m.useState({}),[l,b]=m.useState(()=>{const d=localStorage.getItem("roadmap_progress");return d?JSON.parse(d):{}}),c=(d,k)=>{const p=`${d}_${k}`,a={...l,[p]:!l[p]};b(a),localStorage.setItem("roadmap_progress",JSON.stringify(a))},u=d=>{r(k=>({...k,[d]:!k[d]}))},S=(d,k)=>l[`${d}_${k}`]||!1,f=d=>{const k=ue[d];if(!k)return 0;const p=k.milestones.length,a=k.milestones.filter(h=>S(d,h.id)).length;return p===0?0:Math.round(a/p*100)},y=d=>{switch(d){case"Beginner":return"#10b981";case"Intermediate":return"#f59e0b";case"Advanced":return"#ef4444";case"Expert":return"#8b5cf6";default:return"#667eea"}},v=ue[t],[C,O]=m.useState([]);return m.useEffect(()=>{const d=Array.from({length:150}).map((k,p)=>({id:p,left:Math.random()*100,size:Math.random()*8+2,delay:Math.random()*20,duration:Math.random()*10+10}));O(d)},[]),e.jsxs("div",{className:"app-container",style:{position:"relative"},children:[e.jsx("div",{className:"roadmap-background-bubbles",children:C.map(d=>e.jsx("div",{className:"roadmap-bubble",style:{left:`${d.left}%`,width:`${d.size}px`,height:`${d.size}px`,animationDelay:`${d.delay}s`,animationDuration:`${d.duration}s`}},d.id))}),e.jsx(le,{title:"Learning Roadmaps",subtitle:"Structured technical paths for every role",showBack:!1}),e.jsxs("div",{className:"roadmap-tabs-nav",children:[e.jsxs("button",{className:`tab-nav-btn ${i==="internal"?"active":""}`,onClick:()=>o("internal"),children:[e.jsx(N,{size:20}),e.jsx("span",{children:"Internal Roadmaps"})]}),e.jsxs("button",{className:`tab-nav-btn ${i==="external"?"active":""}`,onClick:()=>o("external"),children:[e.jsx(R,{size:20}),e.jsx("span",{children:"External Resources"})]})]}),i==="internal"?e.jsxs(e.Fragment,{children:[e.jsx("div",{className:"roadmap-selector",children:Object.values(ue).map(d=>{const k=f(d.id);return e.jsxs("button",{className:`roadmap-tab ${t===d.id?"active":""}`,onClick:()=>s(d.id),style:{"--roadmap-color":d.color},children:[e.jsx("span",{className:"roadmap-icon",children:Xe(d.id,32)}),e.jsxs("div",{className:"roadmap-tab-info",children:[e.jsx("span",{className:"roadmap-tab-title",children:d.title}),k>0&&e.jsx("div",{className:"roadmap-progress-mini",children:e.jsx("div",{className:"progress-bar-fill",style:{width:`${k}%`,background:d.color}})})]})]},d.id)})}),e.jsxs("div",{className:"roadmap-header",style:{background:v.color},children:[e.jsxs("div",{className:"roadmap-header-content",children:[e.jsx("div",{className:"roadmap-icon-large",children:Xe(v.id,64)}),e.jsxs("div",{children:[e.jsx("h2",{children:v.title}),e.jsx("p",{children:v.description})]})]}),e.jsxs("div",{className:"roadmap-stats",children:[e.jsxs("div",{className:"roadmap-stat",children:[e.jsx(H,{size:20}),e.jsx("span",{children:v.estimatedTime})]}),e.jsxs("div",{className:"roadmap-stat",children:[e.jsx(N,{size:20}),e.jsxs("span",{children:[v.milestones.length," Modules"]})]}),f(v.id)>0&&e.jsxs("div",{className:"roadmap-stat",children:[e.jsx(re,{size:20}),e.jsxs("span",{children:[f(v.id),"% Done"]})]})]})]}),e.jsx("div",{className:"roadmap-timeline",children:v.milestones.length>0?v.milestones.map((d,k)=>{const p=S(v.id,d.id),a=n[d.id];return e.jsxs("div",{className:`milestone-card ${p?"completed":""}`,children:[e.jsxs("div",{className:"timeline-connector",children:[e.jsx("div",{className:"timeline-dot",style:{background:p?"#10b981":y(d.difficulty)},children:p?e.jsx(tn,{size:16,color:"white",strokeWidth:3}):e.jsx("span",{className:"milestone-number",children:k+1})}),k<v.milestones.length-1&&e.jsx("div",{className:`timeline-line ${p?"completed":""}`})]}),e.jsxs("div",{className:"milestone-content",children:[e.jsxs("div",{className:"milestone-header-row",onClick:()=>u(d.id),children:[e.jsxs("div",{className:"milestone-title-section",children:[e.jsxs("div",{className:"milestone-top-badges",children:[e.jsx("span",{className:"difficulty-badge",style:{color:y(d.difficulty),borderColor:y(d.difficulty)},children:d.difficulty}),e.jsxs("span",{className:"time-badge",children:[e.jsx(H,{size:12}),d.estimatedHours,"h"]})]}),e.jsx("h3",{children:d.title}),e.jsx("p",{className:"milestone-description",children:d.description})]}),e.jsxs("div",{className:"milestone-actions",children:[e.jsx("button",{className:`milestone-check-btn ${p?"checked":""}`,onClick:h=>{h.stopPropagation(),c(v.id,d.id)},title:p?"Mark as incomplete":"Mark as complete",children:p?e.jsx(yt,{size:28}):e.jsx(vt,{size:28})}),e.jsx("button",{className:"expand-btn",children:a?e.jsx(bt,{size:20}):e.jsx(Ce,{size:20})})]})]}),a&&e.jsxs("div",{className:"milestone-details",children:[e.jsxs("div",{className:"milestone-section",children:[e.jsxs("h4",{children:[e.jsx(se,{size:16})," Key Topics"]}),e.jsxs("div",{className:"roadmap-milestone-body",children:[d.content&&e.jsx("div",{className:"roadmap-milestone-content",style:{marginBottom:"1rem",lineHeight:"1.6",color:"var(--text-main)",fontSize:"0.95rem",padding:"1rem",background:"var(--bg-inset)",borderRadius:"8px",borderLeft:`4px solid ${v.color}`},children:d.content}),e.jsx("div",{className:"roadmap-topics-grid",children:d.topics.map((h,w)=>e.jsx("div",{className:"roadmap-topic-chip",children:h},w))})]})]}),d.resources&&d.resources.length>0&&e.jsxs("div",{className:"milestone-section",children:[e.jsxs("h4",{children:[e.jsx(N,{size:16})," Resources"]}),e.jsx("div",{className:"resources-list",children:d.resources.map((h,w)=>e.jsxs("a",{href:h.url,target:"_blank",rel:"noopener noreferrer",className:"resource-link-item",children:[e.jsx(W,{size:14}),h.title,e.jsx(R,{size:12,className:"ext-icon"})]},w))})]})]})]})]},d.id)}):e.jsxs("div",{className:"empty-roadmap-state",children:[e.jsx("p",{children:"Content for this roadmap is coming soon."}),e.jsxs("a",{href:v.link,target:"_blank",rel:"noreferrer",className:"btn-primary",children:["View on roadmap.sh ",e.jsx(R,{size:16})]})]})})]}):e.jsx("div",{className:"external-roadmaps-container",children:Object.entries(uo).map(([d,k])=>e.jsxs("div",{className:"external-category",children:[e.jsxs("div",{className:"category-header",children:[e.jsx(nn,{size:24,fill:"currentColor"}),e.jsx("h2",{children:d})]}),e.jsx("div",{className:"external-roadmaps-grid",children:k.map((p,a)=>e.jsxs("a",{href:p.url,target:"_blank",rel:"noopener noreferrer",className:"external-roadmap-card",children:[e.jsx("div",{className:"external-card-icon",children:p.icon}),e.jsxs("div",{className:"external-card-content",children:[e.jsx("h3",{children:p.name}),e.jsxs("div",{className:"external-link-indicator",children:[e.jsx(R,{size:16}),e.jsx("span",{children:"roadmap.sh"})]})]})]},a))})]},d))})]})}const ve={"Frontend Developer":{icon:"⚛️",color:"rgba(97, 218, 251, 0.15)",technical:["Explain the Virtual DOM and how React uses it for efficient rendering.","What is the difference between controlled and uncontrolled components in React?","Explain closures in JavaScript with a practical example.","What are React Hooks? Explain useState, useEffect, and useContext.","How does event delegation work in JavaScript?","Explain the difference between == and === in JavaScript.","What is CSS specificity and how is it calculated?","Describe different ways to center a div in CSS.","What are promises in JavaScript? Explain async/await.","Explain the concept of hoisting in JavaScript.","What is the box model in CSS?","Describe different methods of state management in React (Context API, Redux, Zustand).","What are Higher Order Components (HOC) in React?","Explain debouncing and throttling with use cases.","How would you optimize the performance of a React application?","What is the difference between useMemo and useCallback?","Explain the concept of reconciliation in React.","What are React portals and when would you use them?","Describe the difference between CSS Grid and Flexbox.","What is the purpose of keys in React lists?"],behavioral:["Describe a challenging UI/UX problem you solved.","How do you ensure your code is accessible?","Tell me about a time you had to refactor legacy frontend code.","How do you stay updated with the latest frontend technologies?","Describe your approach to responsive design.","How do you handle browser compatibility issues?","Tell me about a time you improved website performance.","How do you collaborate with designers?","Describe a situation where you had to meet a tight deadline.","How do you handle conflicting feedback from stakeholders?"],coding:["Implement a debounce function from scratch.","Create a custom React hook for fetching data with loading states.","Build a simple todo list with add, delete, and toggle functionality.","Implement infinite scrolling in React.","Create a component that renders nested comments (like Reddit).","Build an autocomplete search component.","Implement a modal component with accessibility features.","Create a custom dropdown with keyboard navigation.","Build a drag-and-drop interface.","Implement a carousel/slider component."]},"Backend Developer":{icon:"⚙️",color:"rgba(104, 160, 99, 0.15)",technical:["Explain the difference between SQL and NoSQL databases.","What is RESTful API? What are its key principles?","Describe how authentication works (JWT, OAuth, Session-based).","What is the N+1 query problem and how do you solve it?","Explain ACID properties in databases.","What are database indexes and when should you use them?","Describe microservices architecture and its advantages.","What is a message queue? Give examples of use cases.","Explain the CAP theorem.","What are the different types of database relationships?","Describe caching strategies (Redis, Memcached).","What is API rate limiting and how do you implement it?","Explain vertical vs horizontal scaling.","What are database transactions and isolation levels?","Describe different HTTP methods and their idempotency.","What is database normalization? Explain different normal forms.","How do you handle database migrations in production?","Explain the concept of sharding.","What are prepared statements and why are they important?","Describe different API authentication methods."],behavioral:["Describe a time you optimized database queries for better performance.","How do you handle production incidents?","Tell me about a complex system you designed from scratch.","How do you ensure API security?","Describe your testing strategy for backend services.","How do you handle backward compatibility in APIs?","Tell me about a time you debugged a critical production issue.","How do you approach code reviews?","Describe a situation where you had to make a trade-off decision.","How do you mentor junior developers?"],coding:["Design a URL shortening service like bit.ly.","Implement rate limiting for an API.","Write a function to detect cycles in a linked list.","Design a basic authentication system with JWT.","Implement a simple caching mechanism with TTL.","Build a REST API for a blog with CRUD operations.","Implement pagination and filtering for a large dataset.","Create a middleware for request logging.","Design a simple job queue system.","Implement a basic search functionality with ranking."]},"Full Stack Developer":{icon:"🚀",color:"rgba(243, 156, 18, 0.15)",technical:["How would you design a scalable web application from scratch?","Explain the request-response lifecycle in a web application.","What is CORS and how do you handle it?","Describe your experience with CI/CD pipelines.","How do you handle errors and logging in a full-stack application?","Explain WebSockets and when you would use them.","What is server-side rendering (SSR) vs client-side rendering (CSR)?","Describe your approach to API versioning.","How do you handle file uploads in a web application?","Explain different deployment strategies (blue-green, canary, rolling).","What are environment variables and how do you manage them?","Describe your experience with Docker and containerization.","How do you implement real-time features in web applications?","Explain the concept of middleware in backend frameworks.","What security best practices do you follow for web applications?","How do you handle state management in large applications?","Describe your testing strategy for full-stack applications.","What is GraphQL and how does it differ from REST?","How do you optimize full-stack application performance?","Explain different types of testing (unit, integration, e2e)."],behavioral:["Describe a full-stack project you built end-to-end.","How do you prioritize between frontend and backend tasks?","Tell me about a time you had to learn a new technology quickly.","How do you ensure consistency between frontend and backend?","Describe your debugging process for full-stack issues.","How do you handle technical debt in a codebase?","Tell me about a time you improved development workflow.","How do you balance feature development with code quality?","Describe a challenging integration you implemented.","How do you communicate technical concepts to non-technical team members?"],coding:["Build a simple chat application with real-time messaging.","Implement user authentication with email verification.","Create a REST API with CRUD operations and connect it to a React frontend.","Design a file upload system with progress tracking.","Implement pagination for a large dataset on both frontend and backend.","Build a notification system with real-time updates.","Create a dashboard with data visualization.","Implement a search feature with autocomplete.","Build a commenting system with nested replies.","Create a user profile page with edit functionality."]},"Data Analyst":{icon:"📊",color:"rgba(52, 152, 219, 0.15)",technical:["Explain the difference between WHERE and HAVING clauses in SQL.","What are window functions in SQL? Give examples.","Describe different types of JOINs and when to use them.","What is a CTE (Common Table Expression) and why use it?","Explain the difference between UNION and UNION ALL.","What are aggregate functions? Name at least 5.","Describe your experience with data visualization tools (Tableau, Power BI).","How do you handle missing data in a dataset?","Explain A/B testing and how to analyze results.","What is cohort analysis and when would you use it?","Describe different types of data distributions.","What is the difference between correlation and causation?","Explain different sampling techniques.","How do you identify and handle outliers in data?","What are key performance indicators (KPIs) you have worked with?","Explain the concept of data normalization.","What is ETL and why is it important?","Describe different types of charts and when to use them.","What is statistical significance?","Explain the concept of data warehousing."],behavioral:["Describe a complex data analysis project you completed.","How do you communicate technical findings to non-technical stakeholders?","Tell me about a time your analysis led to a business decision.","How do you ensure data quality and accuracy?","Describe your process for exploring a new dataset.","How do you prioritize which metrics to track?","Tell me about a time you found an unexpected insight in data.","How do you handle conflicting data sources?","Describe a situation where you had to work with incomplete data.","How do you validate your analysis results?"],coding:["Write SQL query to find the second highest salary.","Calculate month-over-month growth rate from a sales table.","Find the top 5 customers by revenue with their purchase counts.","Write a query to detect duplicate records.","Calculate running total using window functions.","Find the median value using SQL.","Write a query to calculate customer retention rate.","Implement a pivot table in SQL.","Calculate year-over-year growth.","Write a query to find gaps in sequential data."]},"DevOps Engineer":{icon:"🔧",color:"rgba(231, 76, 60, 0.15)",technical:["Explain the CI/CD pipeline and its components.","What is Infrastructure as Code (IaC)? Name tools you have used.","Describe Docker containers and their benefits.","What is Kubernetes and why is it used?","Explain the difference between horizontal and vertical scaling.","What are the key principles of the 12-factor app?","Describe monitoring and logging strategies.","What is blue-green deployment?","Explain the concept of immutable infrastructure.","What are the benefits of using configuration management tools?","Describe your experience with cloud platforms (AWS, Azure, GCP).","What is a load balancer and how does it work?","Explain the concept of service mesh.","What are secrets management tools and why are they important?","Describe different backup and disaster recovery strategies.","What is container orchestration?","Explain the concept of auto-scaling.","What are health checks and why are they important?","Describe different types of monitoring (metrics, logs, traces).","What is the difference between stateful and stateless applications?"],behavioral:["Describe a time you improved deployment processes.","How do you handle production outages?","Tell me about automating a manual process.","How do you ensure system security?","Describe your approach to capacity planning.","How do you balance speed and stability in deployments?","Tell me about a time you reduced infrastructure costs.","How do you handle on-call responsibilities?","Describe a complex migration you managed.","How do you prioritize infrastructure improvements?"],coding:["Write a bash script to monitor disk usage and send alerts.","Create a Dockerfile for a Node.js application.","Write a script to automate backup of a database.","Implement health checks for a web service.","Create a basic CI/CD pipeline configuration.","Write a script to rotate log files.","Create a Kubernetes deployment manifest.","Write a script to monitor application uptime.","Implement a simple load balancer configuration.","Create a script for automated SSL certificate renewal."]},"Mobile Developer":{icon:"📱",color:"rgba(155, 89, 182, 0.15)",technical:["What are the differences between native and cross-platform development?","Explain the mobile app lifecycle.","How do you handle offline functionality in mobile apps?","What is the difference between AsyncStorage and SQLite?","How do you optimize mobile app performance?","Explain push notifications and how they work.","What are the key differences between iOS and Android development?","How do you handle different screen sizes and orientations?","Describe state management in React Native.","What are the best practices for mobile app security?","How do you handle deep linking in mobile apps?","Explain the concept of lazy loading in mobile apps.","What are the differences between React Native and Flutter?","How do you implement biometric authentication?","Describe mobile app testing strategies.","What is the difference between hot reload and live reload?","How do you handle app permissions?","Explain the concept of code push and over-the-air updates.","What are the best practices for mobile app accessibility?","How do you optimize mobile app bundle size?"],behavioral:["Describe a challenging mobile app feature you implemented.","How do you ensure app performance on low-end devices?","Tell me about a time you debugged a platform-specific issue.","How do you handle app store rejections?","Describe your approach to mobile app design.","How do you balance iOS and Android development?","Tell me about a time you improved app user experience.","How do you handle user feedback and app reviews?","Describe a situation where you had to optimize battery usage.","How do you stay updated with mobile development trends?"],coding:["Build a login screen with form validation.","Implement a list with pull-to-refresh functionality.","Create a camera feature with image upload.","Build a navigation system with tab and stack navigators.","Implement local data persistence.","Create a custom animated component.","Build a search feature with debouncing.","Implement biometric authentication.","Create a map integration with location tracking.","Build a chat interface with real-time updates."]},"QA Engineer":{icon:"🧪",color:"rgba(46, 204, 113, 0.15)",technical:["What is the difference between unit testing and integration testing?","Explain the testing pyramid.","How do you write effective test cases?","What is regression testing and when do you use it?","Explain the difference between black-box and white-box testing.","What tools do you use for test automation?","How do you test APIs?","What is continuous testing in CI/CD?","Describe different types of performance testing.","What is the difference between smoke testing and sanity testing?","How do you perform security testing?","Explain the concept of test-driven development (TDD).","What are the best practices for writing automated tests?","How do you handle flaky tests?","Describe your experience with load testing tools.","What is mutation testing?","How do you test mobile applications?","Explain the concept of boundary value analysis.","What is exploratory testing?","How do you measure test coverage?"],behavioral:["Describe a critical bug you found and how you reported it.","How do you prioritize testing tasks?","Tell me about a time you improved testing processes.","How do you handle disagreements with developers about bugs?","Describe your approach to testing a new feature.","How do you ensure test quality and maintainability?","Tell me about a time you missed a critical bug.","How do you balance manual and automated testing?","Describe a situation where you had to test under tight deadlines.","How do you communicate testing results to stakeholders?"],coding:["Write a test case for a login function.","Create automated tests for a REST API.","Implement end-to-end tests for a user flow.","Write unit tests for a calculator function.","Create a test suite for form validation.","Implement integration tests for a database layer.","Write performance tests for an API endpoint.","Create accessibility tests for a web page.","Implement visual regression tests.","Write tests for error handling scenarios."]},"Security Engineer":{icon:"🔒",color:"rgba(231, 76, 60, 0.15)",technical:["What is the OWASP Top 10?","Explain SQL injection and how to prevent it.","What is Cross-Site Scripting (XSS)?","How does HTTPS work?","What is the principle of least privilege?","Explain the difference between encryption and hashing.","What is a DDoS attack and how do you mitigate it?","How do you implement secure authentication?","What is Cross-Site Request Forgery (CSRF)?","Explain the concept of defense in depth.","What are security headers and why are they important?","How do you perform security audits?","What is penetration testing?","Explain the concept of zero trust security.","What are the best practices for API security?","How do you handle security vulnerabilities?","What is the difference between symmetric and asymmetric encryption?","Explain the concept of security by design.","What are common authentication protocols?","How do you secure cloud infrastructure?"],behavioral:["Describe a security vulnerability you discovered and fixed.","How do you stay updated with security threats?","Tell me about a time you had to balance security and usability.","How do you handle a security incident?","Describe your approach to security training for developers.","How do you prioritize security issues?","Tell me about a time you improved security practices.","How do you communicate security risks to non-technical stakeholders?","Describe a situation where you had to make a security trade-off.","How do you handle security compliance requirements?"],coding:["Implement secure password hashing.","Create a function to sanitize user input.","Write code to prevent SQL injection.","Implement JWT token validation.","Create a rate limiting mechanism.","Write code to detect XSS attacks.","Implement secure file upload validation.","Create a function for secure random token generation.","Write code to implement CSRF protection.","Implement secure session management."]},"Cloud Architect":{icon:"☁️",color:"rgba(52, 152, 219, 0.15)",technical:["What are the main differences between IaaS, PaaS, and SaaS?","Explain the concept of auto-scaling in cloud environments.","How do you design a highly available cloud architecture?","What is serverless computing and when would you use it?","Explain the shared responsibility model in cloud security.","What is a CDN and how does it improve performance?","How do you manage costs in cloud infrastructure?","What is multi-region deployment and why is it important?","Describe different cloud storage options and their use cases.","What is the difference between vertical and horizontal scaling in cloud?","How do you implement disaster recovery in the cloud?","Explain the concept of cloud-native applications.","What are the best practices for cloud security?","How do you monitor cloud infrastructure?","Describe different database options in cloud platforms.","What is infrastructure as code and why is it important?","How do you optimize cloud network performance?","Explain the concept of cloud migration strategies.","What are managed services and when should you use them?","How do you implement compliance in cloud environments?"],behavioral:["Describe a cloud architecture you designed from scratch.","How do you handle cloud cost optimization?","Tell me about a time you migrated an application to the cloud.","How do you ensure high availability in cloud systems?","Describe your approach to cloud security.","How do you handle multi-cloud or hybrid cloud scenarios?","Tell me about a time you resolved a cloud performance issue.","How do you stay updated with cloud platform updates?","Describe a situation where you had to make architecture trade-offs.","How do you communicate cloud architecture decisions to stakeholders?"],coding:["Write a CloudFormation or Terraform template for a web application.","Create a Lambda function for image processing.","Implement auto-scaling configuration.","Write a script to monitor cloud resource usage.","Create a CI/CD pipeline for cloud deployment.","Implement a serverless API with API Gateway.","Write a script for automated backup to cloud storage.","Create a load balancer configuration.","Implement cloud-based logging and monitoring.","Write infrastructure code for a multi-tier application."]},"ML Engineer":{icon:"🤖",color:"rgba(155, 89, 182, 0.15)",technical:["What is the difference between a Data Scientist and ML Engineer?","How do you deploy a machine learning model to production?","Explain model versioning and why it's important.","What is A/B testing for ML models?","How do you monitor model performance in production?","What is model drift and how do you detect it?","Explain the concept of feature stores.","How do you optimize model inference time?","What are the challenges of deploying ML models at scale?","Describe different model serving strategies.","How do you handle model retraining?","What is MLOps and why is it important?","Explain the concept of model explainability.","How do you ensure reproducibility in ML experiments?","What are the best practices for ML model testing?","Describe different model deployment patterns.","How do you handle data versioning?","What is the difference between batch and real-time inference?","How do you optimize ML model size for deployment?","Explain the concept of model monitoring and observability."],behavioral:["Describe an ML model you deployed to production.","How do you handle model performance degradation?","Tell me about a time you optimized model inference.","How do you collaborate with data scientists?","Describe your approach to ML system design.","How do you handle model failures in production?","Tell me about a time you improved ML infrastructure.","How do you balance model accuracy and latency?","Describe a challenging ML deployment you managed.","How do you communicate ML system limitations to stakeholders?"],coding:["Build a REST API for model inference.","Implement model versioning system.","Create a batch prediction pipeline.","Write code for model monitoring.","Implement A/B testing for models.","Create a feature engineering pipeline.","Write code for model deployment automation.","Implement model caching for faster inference.","Create a system for model rollback.","Write code for data preprocessing pipeline."]},"Product Manager":{icon:"📋",color:"rgba(241, 196, 15, 0.15)",technical:["How do you prioritize features for a roadmap?","What frameworks do you use for decision making?","Explain different product metrics and KPIs.","How do you conduct user research?","What is an MVP and why is it important?","Describe different prioritization frameworks (RICE, MoSCoW).","How do you measure product success?","What is product-market fit?","Explain the concept of user personas.","How do you create a product roadmap?","What are OKRs and how do you use them?","Describe different product development methodologies.","How do you conduct competitive analysis?","What is the difference between features and benefits?","How do you validate product ideas?","Explain the concept of product lifecycle.","What are the key elements of a product strategy?","How do you measure user engagement?","Describe different pricing strategies.","What is the role of data in product decisions?"],behavioral:["Describe a product you launched from ideation to release.","How do you handle conflicting stakeholder priorities?",'Tell me about a time you had to say "no" to a feature request.',"How do you handle a product launch failure?","Describe your approach to gathering user feedback.","How do you work with engineering teams?","Tell me about a time you pivoted a product strategy.","How do you handle disagreements with leadership?","Describe a situation where data contradicted your intuition.","How do you balance short-term and long-term goals?"],coding:["N/A - Product Managers typically don't have coding interviews","However, SQL knowledge is often tested:","Write a query to calculate user retention.","Analyze funnel conversion rates with SQL.","Calculate daily active users (DAU) and monthly active users (MAU).","Write a query to find feature adoption rates.","Calculate customer lifetime value (CLV).","Analyze A/B test results with SQL.","Write a query to identify power users.","Calculate churn rate from user data."]},"UI/UX Designer":{icon:"🎨",color:"rgba(230, 126, 34, 0.15)",technical:["What is the difference between UI and UX?","Explain the user-centered design process.","How do you conduct usability testing?","What is a design system and why is it useful?","How do you handle accessibility in your designs?","What tools do you use for wireframing and prototyping?","Explain the Gestalt principles of design.","How do you collaborate with developers?","What is information architecture?","Describe different user research methods.","How do you create user personas?","What is the importance of white space in design?","Explain the concept of visual hierarchy.","How do you design for mobile-first?","What are design patterns and why are they important?","Describe different types of user testing.","How do you measure design success?","What is the difference between wireframes and mockups?","Explain the concept of design thinking.","How do you handle design feedback?"],behavioral:["Describe a design project you're most proud of.","How do you handle design criticism?","Tell me about a time you had to compromise on design.","How do you advocate for user needs?","Describe your design process from start to finish.","How do you handle tight deadlines?","Tell me about a time you improved user experience.","How do you stay updated with design trends?","Describe a situation where user research changed your design.","How do you balance aesthetics and functionality?"],coding:["N/A - UI/UX Designers typically don't have coding interviews","However, basic HTML/CSS knowledge may be tested:","Create a responsive navigation menu.","Design and code a form with validation.","Build a card component with hover effects.","Create a modal dialog with accessibility.","Design a loading animation.","Build a responsive grid layout.","Create a custom dropdown component.","Design a progress indicator.","Build a tooltip component."]},"Data Scientist":{icon:"📈",color:"rgba(52, 152, 219, 0.15)",technical:["What is the difference between Supervised and Unsupervised learning?","Explain the Bias-Variance tradeoff.","How do you handle missing data in a dataset?","What is feature engineering and why is it important?","Explain the concept of Overfitting and how to prevent it.","What is a Confusion Matrix?","Difference between L1 and L2 regularization.","Explain the Central Limit Theorem.","What is cross-validation and why is it used?","Describe different types of machine learning algorithms.","What is the curse of dimensionality?","Explain ensemble methods (bagging, boosting).","What is the difference between precision and recall?","How do you evaluate a classification model?","What is feature selection and why is it important?","Explain the concept of gradient descent.","What are decision trees and random forests?","Describe different clustering algorithms.","What is the ROC curve and AUC?","How do you handle imbalanced datasets?"],behavioral:["Describe a data science project from start to finish.","How do you communicate complex findings to non-technical audiences?","Tell me about a time your model didn't perform as expected.","How do you approach a new data science problem?","Describe your experience with A/B testing.","How do you ensure reproducibility in your work?","Tell me about a time you found unexpected insights.","How do you handle conflicting business requirements?","Describe a situation where you had to work with messy data.","How do you stay updated with ML/AI advancements?"],coding:["Implement a linear regression from scratch.","Write code to handle missing values in a dataset.","Create a function for feature scaling.","Implement k-means clustering.","Write code to split data into train/test sets.","Create a confusion matrix visualization.","Implement cross-validation.","Write code for feature importance analysis.","Create a function to detect outliers.","Implement a simple neural network."]},"Business Analyst":{icon:"💼",color:"rgba(52, 73, 94, 0.15)",technical:["How do you gather requirements from stakeholders?","What is the difference between functional and non-functional requirements?","Explain how you would create a business case.","What tools do you use for data visualization?","How do you handle conflicting requirements?","What is gap analysis?","How do you measure ROI for a project?","Explain the Agile methodology from a BA perspective.","What is process mapping and why is it important?","Describe different requirement elicitation techniques.","How do you prioritize requirements?","What is a user story and how do you write one?","Explain the concept of acceptance criteria.","How do you conduct stakeholder analysis?","What is the difference between as-is and to-be processes?","Describe different types of business analysis deliverables.","How do you validate requirements?","What is SWOT analysis?","Explain the concept of business process modeling.","How do you measure project success?"],behavioral:["Describe a complex project you analyzed.","How do you handle difficult stakeholders?","Tell me about a time you identified a business opportunity.","How do you manage changing requirements?","Describe your approach to problem-solving.","How do you ensure requirements are understood by all parties?","Tell me about a time you improved a business process.","How do you handle incomplete information?","Describe a situation where you had to mediate between teams.","How do you prioritize competing demands?"],coding:["SQL queries for business reporting","Write a query to calculate customer lifetime value.","Analyze sales trends with SQL.","Create a report for inventory management.","Write a query to identify top-performing products.","Calculate conversion rates from funnel data.","Analyze customer segmentation.","Write a query for cohort analysis.","Create a dashboard query for KPIs.","Analyze profit margins by product category."]},"Technical Writer":{icon:"📝",color:"rgba(149, 165, 166, 0.15)",technical:["How do you approach documenting a new API?","What makes good technical documentation?","How do you handle documentation for different audiences?","What tools do you use for creating documentation?","How do you keep documentation up to date?","Explain the difference between user guides and developer docs.","How do you document complex technical concepts simply?","What is your process for reviewing and editing technical content?","How do you organize documentation for easy navigation?","What is the importance of examples in documentation?","How do you handle versioning in documentation?","Describe your experience with documentation tools (Confluence, GitBook, etc.).","How do you ensure documentation accuracy?","What is the role of visuals in technical documentation?","How do you gather information from subject matter experts?","Explain the concept of docs-as-code.","How do you measure documentation effectiveness?","What are the best practices for API documentation?","How do you handle documentation for deprecated features?","Describe different types of technical documentation."],behavioral:["Describe a complex technical concept you documented.","How do you handle feedback on your documentation?","Tell me about a time you improved existing documentation.","How do you work with engineers who are reluctant to provide information?","Describe your process for learning new technologies to document.","How do you prioritize documentation tasks?","Tell me about a time you identified a documentation gap.","How do you ensure consistency across documentation?","Describe a situation where you had to meet a tight deadline.","How do you advocate for documentation quality?"],coding:["N/A - Technical Writers typically don't have coding interviews","However, basic technical knowledge may be tested:","Write sample API documentation.","Create a code example for a tutorial.","Document a REST API endpoint.","Write a troubleshooting guide.","Create a quick start guide.","Document a configuration file.","Write release notes.","Create a code snippet with explanations.","Document error messages and solutions."]},"System Administrator":{icon:"🖥️",color:"rgba(44, 62, 80, 0.15)",technical:["How do you troubleshoot a server that's running slow?","Explain the difference between TCP and UDP.","What is DNS and how does it work?","How do you secure a Linux server?","What is load balancing and why is it important?","Explain the concept of RAID.","How do you perform system backups and disaster recovery?","What monitoring tools do you use for servers?","Describe different types of virtualization.","How do you manage user permissions and access control?","What is the difference between DHCP and static IP?","Explain the boot process of a Linux system.","How do you optimize server performance?","What are cron jobs and how do you use them?","Describe different network protocols.","How do you handle log management?","What is the difference between a firewall and a proxy?","Explain the concept of SSH and how it works.","How do you manage software updates and patches?","What are the best practices for server security?"],behavioral:["Describe a critical system outage you resolved.","How do you handle emergency situations?","Tell me about a time you automated a repetitive task.","How do you prioritize system maintenance tasks?","Describe your approach to capacity planning.","How do you handle user requests and support tickets?","Tell me about a time you improved system reliability.","How do you stay updated with system administration best practices?","Describe a situation where you had to work under pressure.","How do you document system configurations?"],coding:["Write a bash script to monitor system resources.","Create a script for automated user account creation.","Write a script to backup databases.","Implement log rotation script.","Create a script to check disk space and send alerts.","Write a script for automated software updates.","Implement a system health check script.","Create a script to manage firewall rules.","Write a script for network diagnostics.","Implement automated server provisioning script."]}};function ho(){const[t,s]=m.useState(null),[i,o]=m.useState("technical"),[n,r]=m.useState(null),l=Object.keys(ve),b=S=>{s(S),o("technical"),r(null)},c=t?ve[t]:null,u=c?c[i]:[];return e.jsxs("div",{className:"app-container",children:[e.jsx(le,{title:"Interview Question Bank",subtitle:"Comprehensive interview questions organized by role and category",showBack:!0}),t?e.jsxs("div",{children:[e.jsxs("div",{className:"selected-role-header",children:[e.jsx("button",{className:"back-to-roles",onClick:()=>s(null),children:"← Back to Roles"}),e.jsxs("div",{className:"role-title-section",children:[e.jsx("span",{className:"role-icon-large",style:{background:c.color},children:c.icon}),e.jsxs("div",{children:[e.jsx("h2",{children:t}),e.jsxs("p",{children:[c.technical.length+c.behavioral.length+c.coding.length," Questions Available"]})]})]})]}),e.jsxs("div",{className:"category-tabs",children:[e.jsxs("button",{className:`category-tab ${i==="technical"?"active":""}`,onClick:()=>{o("technical"),r(null)},children:[e.jsx(N,{size:18}),"Technical (",c.technical.length,")"]}),e.jsxs("button",{className:`category-tab ${i==="behavioral"?"active":""}`,onClick:()=>{o("behavioral"),r(null)},children:[e.jsx(_,{size:18}),"Behavioral (",c.behavioral.length,")"]}),e.jsxs("button",{className:`category-tab ${i==="coding"?"active":""}`,onClick:()=>{o("coding"),r(null)},children:[e.jsx(xe,{size:18}),"Coding (",c.coding.length,")"]})]}),e.jsxs("div",{className:"questions-container",children:[e.jsx("div",{className:"questions-list",children:u.map((S,f)=>e.jsxs("div",{className:"question-card",children:[e.jsxs("div",{className:"question-header-row",children:[e.jsxs("div",{className:"question-number",children:["Q",f+1]}),e.jsx("div",{className:"question-text",children:S}),e.jsx("button",{className:"expand-btn",onClick:()=>r(n===f?null:f),children:n===f?"−":"+"})]}),n===f&&e.jsxs("div",{className:"question-expanded",children:[e.jsxs("div",{className:"tip-section",children:[e.jsx(on,{size:16}),e.jsxs("div",{children:[e.jsx("strong",{children:"Tips for answering:"}),e.jsxs("ul",{children:[e.jsx("li",{children:"Take a moment to think before answering"}),e.jsx("li",{children:"Provide specific examples from your experience"}),e.jsx("li",{children:"Structure your answer clearly (STAR method for behavioral)"}),e.jsx("li",{children:"Be honest about what you know and don't know"})]})]})]}),e.jsx("div",{className:"practice-actions",children:e.jsxs("button",{className:"practice-btn",children:[e.jsx(yt,{size:16}),"Mark as Practiced"]})})]})]},f))}),e.jsxs("div",{className:"questions-sidebar-tips",children:[e.jsxs("div",{className:"tip-card",children:[e.jsx("h4",{children:"💡 Preparation Tips"}),e.jsxs("ul",{children:[e.jsx("li",{children:"Practice explaining concepts out loud"}),e.jsx("li",{children:"Use the STAR method for behavioral questions"}),e.jsx("li",{children:"Prepare real examples from your experience"}),e.jsx("li",{children:"Review these questions daily"}),e.jsx("li",{children:"Mock interview with peers"})]})]}),e.jsxs("div",{className:"tip-card",children:[e.jsx("h4",{children:"📚 Study Resources"}),e.jsxs("p",{children:["Check out the ",e.jsx("strong",{children:"Notes"})," section for detailed study materials on each topic."]}),e.jsxs("p",{children:["Use the ",e.jsx("strong",{children:"Mock Interview"})," feature to practice these questions with AI."]})]})]})]})]}):e.jsxs("div",{children:[e.jsxs("div",{className:"section-header",children:[e.jsx("h2",{children:"Select Your Target Role"}),e.jsx("p",{children:"Choose a role to view curated interview questions"})]}),e.jsx("div",{className:"role-selection-grid",children:l.map(S=>{const f=ve[S],y=f.technical.length+f.behavioral.length+f.coding.length;return e.jsxs("button",{className:"role-card-qb",onClick:()=>b(S),children:[e.jsx("div",{className:"role-icon-qb",style:{background:f.color},children:f.icon}),e.jsx("h3",{children:S}),e.jsxs("div",{className:"role-stats",children:[e.jsxs("span",{className:"stat-badge technical",children:[f.technical.length," Technical"]}),e.jsxs("span",{className:"stat-badge behavioral",children:[f.behavioral.length," Behavioral"]}),e.jsxs("span",{className:"stat-badge coding",children:[f.coding.length," Coding"]})]}),e.jsxs("div",{className:"role-total",children:[y," Questions Total"]}),e.jsx(ae,{className:"role-arrow",size:20})]},S)})})]})]})}const go=[{title:"Learn the basics",totalProblems:31,subtopics:[{title:"Things to Know in C++/Java/Python",problems:[{title:"User Input / Output",platform:"GeeksForGeeks",articleLink:"https://www.geeksforgeeks.org/basic-input-output-c/",link:null},{title:"Data Types",platform:"GeeksForGeeks",articleLink:"https://www.geeksforgeeks.org/data-types-in-cpp/",link:null},{title:"If Else statements",platform:"GeeksForGeeks",articleLink:"https://www.geeksforgeeks.org/decision-making-c-cpp/",link:null},{title:"Switch Statement",platform:"GeeksForGeeks",articleLink:"https://www.geeksforgeeks.org/switch-statement-cc/",link:null},{title:"For Loops",platform:"GeeksForGeeks",articleLink:"https://www.geeksforgeeks.org/loops-in-c-and-cpp/",link:null},{title:"While Loops",platform:"GeeksForGeeks",articleLink:"https://www.geeksforgeeks.org/loops-in-c-and-cpp/",link:null},{title:"Functions",platform:"GeeksForGeeks",articleLink:"https://www.geeksforgeeks.org/functions-in-c/",link:null}]},{title:"Build-up Logical Thinking",problems:[{title:"Patterns (Set 1)",platform:"Coding Ninjas",link:"https://www.codingninjas.com/codestudio/problems/n-forest_6570177",content:{description:"Solution for Patterns (Set 1). Logic and implementation details coming soon.",code:{cpp:`// C++ Solution for Patterns (Set 1)
// This solution is currently being prepared.

void solve() {
    // TODO: Implement solution
}`,java:`// Java Solution for Patterns (Set 1)
// This solution is currently being prepared.

class Solution {
    public void solve() {
        // TODO: Implement solution
    }
}`,python:`# Python Solution for Patterns (Set 1)
# This solution is currently being prepared.

def solve():
    # TODO: Implement solution
    pass`}}},{title:"Patterns (Set 2)",platform:"Coding Ninjas",link:"https://www.codingninjas.com/codestudio/problems/n-2-forest_6570178",content:{description:"Solution for Patterns (Set 2). Logic and implementation details coming soon.",code:{cpp:`// C++ Solution for Patterns (Set 2)
// This solution is currently being prepared.

void solve() {
    // TODO: Implement solution
}`,java:`// Java Solution for Patterns (Set 2)
// This solution is currently being prepared.

class Solution {
    public void solve() {
        // TODO: Implement solution
    }
}`,python:`# Python Solution for Patterns (Set 2)
# This solution is currently being prepared.

def solve():
    # TODO: Implement solution
    pass`}}}]},{title:"Learn STL / Java Collections",problems:[{title:"STL / Collections Guide",platform:"GeeksForGeeks",link:"https://www.geeksforgeeks.org/cpp-stl-tutorial/",content:{description:"Solution for STL / Collections Guide. Logic and implementation details coming soon.",code:{cpp:`// C++ Solution for STL / Collections Guide
// This solution is currently being prepared.

void solve() {
    // TODO: Implement solution
}`,java:`// Java Solution for STL / Collections Guide
// This solution is currently being prepared.

class Solution {
    public void solve() {
        // TODO: Implement solution
    }
}`,python:`# Python Solution for STL / Collections Guide
# This solution is currently being prepared.

def solve():
    # TODO: Implement solution
    pass`}}}]},{title:"Know Basic Maths",problems:[{title:"Count Digits",platform:"GeeksForGeeks",link:"https://practice.geeksforgeeks.org/problems/count-digits5716/1",content:{description:"Solution for Count Digits. Logic and implementation details coming soon.",code:{cpp:`// C++ Solution for Count Digits
// This solution is currently being prepared.

void solve() {
    // TODO: Implement solution
}`,java:`// Java Solution for Count Digits
// This solution is currently being prepared.

class Solution {
    public void solve() {
        // TODO: Implement solution
    }
}`,python:`# Python Solution for Count Digits
# This solution is currently being prepared.

def solve():
    # TODO: Implement solution
    pass`}}},{title:"Reverse a Number",platform:"LeetCode",link:"https://leetcode.com/problems/reverse-integer/",content:{description:"Solution for Reverse a Number. Logic and implementation details coming soon.",code:{cpp:`// C++ Solution for Reverse a Number
// This solution is currently being prepared.

void solve() {
    // TODO: Implement solution
}`,java:`// Java Solution for Reverse a Number
// This solution is currently being prepared.

class Solution {
    public void solve() {
        // TODO: Implement solution
    }
}`,python:`# Python Solution for Reverse a Number
# This solution is currently being prepared.

def solve():
    # TODO: Implement solution
    pass`}}},{title:"Check Palindrome",platform:"LeetCode",link:"https://leetcode.com/problems/palindrome-number/",content:{description:"Solution for Check Palindrome. Logic and implementation details coming soon.",code:{cpp:`// C++ Solution for Check Palindrome
// This solution is currently being prepared.

void solve() {
    // TODO: Implement solution
}`,java:`// Java Solution for Check Palindrome
// This solution is currently being prepared.

class Solution {
    public void solve() {
        // TODO: Implement solution
    }
}`,python:`# Python Solution for Check Palindrome
# This solution is currently being prepared.

def solve():
    # TODO: Implement solution
    pass`}}},{title:"GCD or HCF",platform:"GeeksForGeeks",link:"https://practice.geeksforgeeks.org/problems/lcm-and-gcd4516/1",content:{description:"Solution for GCD or HCF. Logic and implementation details coming soon.",code:{cpp:`// C++ Solution for GCD or HCF
// This solution is currently being prepared.

void solve() {
    // TODO: Implement solution
}`,java:`// Java Solution for GCD or HCF
// This solution is currently being prepared.

class Solution {
    public void solve() {
        // TODO: Implement solution
    }
}`,python:`# Python Solution for GCD or HCF
# This solution is currently being prepared.

def solve():
    # TODO: Implement solution
    pass`}}},{title:"Armstrong Numbers",platform:"GeeksForGeeks",link:"https://practice.geeksforgeeks.org/problems/armstrong-numbers2727/1",content:{description:"Solution for Armstrong Numbers. Logic and implementation details coming soon.",code:{cpp:`// C++ Solution for Armstrong Numbers
// This solution is currently being prepared.

void solve() {
    // TODO: Implement solution
}`,java:`// Java Solution for Armstrong Numbers
// This solution is currently being prepared.

class Solution {
    public void solve() {
        // TODO: Implement solution
    }
}`,python:`# Python Solution for Armstrong Numbers
# This solution is currently being prepared.

def solve():
    # TODO: Implement solution
    pass`}}},{title:"Print all Divisors",platform:"GeeksForGeeks",link:"https://practice.geeksforgeeks.org/problems/sum-of-all-divisors-from-1-to-n4738/1",content:{description:"Solution for Print all Divisors. Logic and implementation details coming soon.",code:{cpp:`// C++ Solution for Print all Divisors
// This solution is currently being prepared.

void solve() {
    // TODO: Implement solution
}`,java:`// Java Solution for Print all Divisors
// This solution is currently being prepared.

class Solution {
    public void solve() {
        // TODO: Implement solution
    }
}`,python:`# Python Solution for Print all Divisors
# This solution is currently being prepared.

def solve():
    # TODO: Implement solution
    pass`}}},{title:"Check for Prime",platform:"GeeksForGeeks",link:"https://practice.geeksforgeeks.org/problems/prime-number2314/1",content:{description:"Solution for Check for Prime. Logic and implementation details coming soon.",code:{cpp:`// C++ Solution for Check for Prime
// This solution is currently being prepared.

void solve() {
    // TODO: Implement solution
}`,java:`// Java Solution for Check for Prime
// This solution is currently being prepared.

class Solution {
    public void solve() {
        // TODO: Implement solution
    }
}`,python:`# Python Solution for Check for Prime
# This solution is currently being prepared.

def solve():
    # TODO: Implement solution
    pass`}}}]},{title:"Learn Basic Recursion",problems:[{title:"Print 1 to N using Recursion",platform:"GeeksForGeeks",link:"https://practice.geeksforgeeks.org/problems/print-1-to-n-without-using-loops-1587115620/1",content:{description:"Solution for Print 1 to N using Recursion. Logic and implementation details coming soon.",code:{cpp:`// C++ Solution for Print 1 to N using Recursion
// This solution is currently being prepared.

void solve() {
    // TODO: Implement solution
}`,java:`// Java Solution for Print 1 to N using Recursion
// This solution is currently being prepared.

class Solution {
    public void solve() {
        // TODO: Implement solution
    }
}`,python:`# Python Solution for Print 1 to N using Recursion
# This solution is currently being prepared.

def solve():
    # TODO: Implement solution
    pass`}}},{title:"Sum of first N numbers",platform:"GeeksForGeeks",link:"https://practice.geeksforgeeks.org/problems/sum-of-first-n-terms5843/1",content:{description:"Solution for Sum of first N numbers. Logic and implementation details coming soon.",code:{cpp:`// C++ Solution for Sum of first N numbers
// This solution is currently being prepared.

void solve() {
    // TODO: Implement solution
}`,java:`// Java Solution for Sum of first N numbers
// This solution is currently being prepared.

class Solution {
    public void solve() {
        // TODO: Implement solution
    }
}`,python:`# Python Solution for Sum of first N numbers
# This solution is currently being prepared.

def solve():
    # TODO: Implement solution
    pass`}}},{title:"Factorial of N numbers",platform:"GeeksForGeeks",link:"https://practice.geeksforgeeks.org/problems/find-all-factorial-numbers-less-than-or-equal-to-n3548/0",content:{description:"Solution for Factorial of N numbers. Logic and implementation details coming soon.",code:{cpp:`// C++ Solution for Factorial of N numbers
// This solution is currently being prepared.

void solve() {
    // TODO: Implement solution
}`,java:`// Java Solution for Factorial of N numbers
// This solution is currently being prepared.

class Solution {
    public void solve() {
        // TODO: Implement solution
    }
}`,python:`# Python Solution for Factorial of N numbers
# This solution is currently being prepared.

def solve():
    # TODO: Implement solution
    pass`}}},{title:"Reverse an Array",platform:"GeeksForGeeks",link:"https://practice.geeksforgeeks.org/problems/reverse-an-array/0",content:{description:"Solution for Reverse an Array. Logic and implementation details coming soon.",code:{cpp:`// C++ Solution for Reverse an Array
// This solution is currently being prepared.

void solve() {
    // TODO: Implement solution
}`,java:`// Java Solution for Reverse an Array
// This solution is currently being prepared.

class Solution {
    public void solve() {
        // TODO: Implement solution
    }
}`,python:`# Python Solution for Reverse an Array
# This solution is currently being prepared.

def solve():
    # TODO: Implement solution
    pass`}}},{title:"Check if a string is palindrome",platform:"LeetCode",link:"https://leetcode.com/problems/valid-palindrome/",content:{description:"Solution for Check if a string is palindrome. Logic and implementation details coming soon.",code:{cpp:`// C++ Solution for Check if a string is palindrome
// This solution is currently being prepared.

void solve() {
    // TODO: Implement solution
}`,java:`// Java Solution for Check if a string is palindrome
// This solution is currently being prepared.

class Solution {
    public void solve() {
        // TODO: Implement solution
    }
}`,python:`# Python Solution for Check if a string is palindrome
# This solution is currently being prepared.

def solve():
    # TODO: Implement solution
    pass`}}},{title:"Fibonacci Number",platform:"LeetCode",link:"https://leetcode.com/problems/fibonacci-number/",content:{description:"Solution for Fibonacci Number. Logic and implementation details coming soon.",code:{cpp:`// C++ Solution for Fibonacci Number
// This solution is currently being prepared.

void solve() {
    // TODO: Implement solution
}`,java:`// Java Solution for Fibonacci Number
// This solution is currently being prepared.

class Solution {
    public void solve() {
        // TODO: Implement solution
    }
}`,python:`# Python Solution for Fibonacci Number
# This solution is currently being prepared.

def solve():
    # TODO: Implement solution
    pass`}}}]},{title:"Learn Basic Hashing",problems:[{title:"Count Frequency of each element in the array",platform:"GeeksForGeeks",link:"https://practice.geeksforgeeks.org/problems/frequency-of-array-elements-1587115620/0",content:{description:"Solution for Count Frequency of each element in the array. Logic and implementation details coming soon.",code:{cpp:`// C++ Solution for Count Frequency of each element in the array
// This solution is currently being prepared.

void solve() {
    // TODO: Implement solution
}`,java:`// Java Solution for Count Frequency of each element in the array
// This solution is currently being prepared.

class Solution {
    public void solve() {
        // TODO: Implement solution
    }
}`,python:`# Python Solution for Count Frequency of each element in the array
# This solution is currently being prepared.

def solve():
    # TODO: Implement solution
    pass`}}},{title:"Find the highest/lowest frequency element",platform:"LeetCode",link:"https://leetcode.com/problems/frequency-of-the-most-frequent-element/",content:{description:"Solution for Find the highest/lowest frequency element. Logic and implementation details coming soon.",code:{cpp:`// C++ Solution for Find the highest/lowest frequency element
// This solution is currently being prepared.

void solve() {
    // TODO: Implement solution
}`,java:`// Java Solution for Find the highest/lowest frequency element
// This solution is currently being prepared.

class Solution {
    public void solve() {
        // TODO: Implement solution
    }
}`,python:`# Python Solution for Find the highest/lowest frequency element
# This solution is currently being prepared.

def solve():
    # TODO: Implement solution
    pass`}}}]}]},{title:"Learn Important Sorting Techniques",totalProblems:7,subtopics:[{title:"Sorting-I",problems:[{title:"Selection Sort",platform:"GeeksForGeeks",link:"https://practice.geeksforgeeks.org/problems/selection-sort/1",content:{description:"Selection Sort repeatedly finds the minimum element and moves it to the sorted part.",code:{cpp:"void selectionSort(vector<int>& arr, int n) {\\n    for (int i = 0; i < n - 1; i++) {\\n        int minIdx = i;\\n        for (int j = i + 1; j < n; j++) {\\n            if (arr[j] < arr[minIdx])\\n                minIdx = j;\\n        }\\n        swap(arr[minIdx], arr[i]);\\n    }\\n}",java:"class Solution {\\n    void selectionSort(int arr[], int n) {\\n        for (int i = 0; i < n - 1; i++) {\\n            int minIdx = i;\\n            for (int j = i + 1; j < n; j++) {\\n                if (arr[j] < arr[minIdx])\\n                    minIdx = j;\\n            }\\n            int temp = arr[minIdx];\\n            arr[minIdx] = arr[i];\\n            arr[i] = temp;\\n        }\\n    }\\n}",python:"class Solution:\\n    def selectionSort(self, arr, n):\\n        for i in range(n):\\n            min_idx = i\\n            for j in range(i + 1, n):\\n                if arr[j] < arr[min_idx]:\\n                    min_idx = j\\n            arr[i], arr[min_idx] = arr[min_idx], arr[i]"}}},{title:"Bubble Sort",platform:"GeeksForGeeks",link:"https://practice.geeksforgeeks.org/problems/bubble-sort/1",content:{description:"Bubble Sort repeatedly swaps adjacent elements if they are in the wrong order.",code:{cpp:"void bubbleSort(vector<int>& arr, int n) {\\n    for (int i = n - 1; i >= 0; i--) {\\n        for (int j = 0; j < i; j++) {\\n            if (arr[j] > arr[j + 1]) {\\n                swap(arr[j], arr[j + 1]);\\n            }\\n        }\\n    }\\n}",java:"class Solution {\\n    public static void bubbleSort(int arr[], int n) {\\n        for (int i = n - 1; i >= 0; i--) {\\n            for (int j = 0; j < i; j++) {\\n                if (arr[j] > arr[j + 1]) {\\n                    int temp = arr[j];\\n                    arr[j] = arr[j + 1];\\n                    arr[j + 1] = temp;\\n                }\\n            }\\n        }\\n    }\\n}",python:"class Solution:\\n    def bubbleSort(self, arr, n):\\n        for i in range(n - 1, -1, -1):\\n            for j in range(i):\\n                if arr[j] > arr[j + 1]:\\n                    arr[j], arr[j + 1] = arr[j + 1], arr[j]"}}},{title:"Insertion Sort",platform:"GeeksForGeeks",link:"https://practice.geeksforgeeks.org/problems/insertion-sort/0",content:{description:"Insertion Sort builds the final sorted array one item at a time.",code:{cpp:"void insertionSort(int arr[], int n) {\\n    for (int i = 0; i < n; i++) {\\n        int j = i;\\n        while (j > 0 && arr[j - 1] > arr[j]) {\\n            swap(arr[j - 1], arr[j]);\\n            j--;\\n        }\\n    }\\n}",java:"class Solution {\\n    public void insertionSort(int arr[], int n) {\\n        for (int i = 0; i < n; i++) {\\n            int j = i;\\n            while (j > 0 && arr[j - 1] > arr[j]) {\\n                int temp = arr[j - 1];\\n                arr[j - 1] = arr[j];\\n                arr[j] = temp;\\n                j--;\\n            }\\n        }\\n    }\\n}",python:"class Solution:\\n    def insertionSort(self, arr, n):\\n        for i in range(n):\\n            j = i\\n            while j > 0 and arr[j - 1] > arr[j]:\\n                arr[j - 1], arr[j] = arr[j], arr[j - 1]\\n                j -= 1"}}}]},{title:"Sorting-II",problems:[{title:"Merge Sort",platform:"GeeksForGeeks",link:"https://practice.geeksforgeeks.org/problems/merge-sort/1",content:{description:"Merge Sort is a Divide and Conquer algorithm. It divides the input array into two halves, calls itself for the two halves, and then merges the two sorted halves.",code:{cpp:"void merge(vector<int> &arr, int low, int mid, int high) {\\n    vector<int> temp;\\n    int left = low;\\n    int right = mid + 1;\\n    while (left <= mid && right <= high) {\\n        if (arr[left] <= arr[right]) {\\n            temp.push_back(arr[left]);\\n            left++;\\n        } else {\\n            temp.push_back(arr[right]);\\n            right++;\\n        }\\n    }\\n    while (left <= mid) {\\n        temp.push_back(arr[left]);\\n        left++;\\n    }\\n    while (right <= high) {\\n        temp.push_back(arr[right]);\\n        right++;\\n    }\\n    for (int i = low; i <= high; i++) {\\n        arr[i] = temp[i - low];\\n    }\\n}\\n\\nvoid mergeSort(vector<int> &arr, int low, int high) {\\n    if (low >= high) return;\\n    int mid = (low + high) / 2;\\n    mergeSort(arr, low, mid);\\n    mergeSort(arr, mid + 1, high);\\n    merge(arr, low, mid, high);\\n}",java:"class Solution {\\n    void merge(int arr[], int l, int m, int r) {\\n        int n1 = m - l + 1;\\n        int n2 = r - m;\\n        int L[] = new int[n1];\\n        int R[] = new int[n2];\\n        for (int i = 0; i < n1; ++i) L[i] = arr[l + i];\\n        for (int j = 0; j < n2; ++j) R[j] = arr[m + 1 + j];\\n        int i = 0, j = 0, k = l;\\n        while (i < n1 && j < n2) {\\n            if (L[i] <= R[j]) {\\n                arr[k] = L[i];\\n                i++;\\n            } else {\\n                arr[k] = R[j];\\n                j++;\\n            }\\n            k++;\\n        }\\n        while (i < n1) {\\n            arr[k] = L[i];\\n            i++;\\n            k++;\\n        }\\n        while (j < n2) {\\n            arr[k] = R[j];\\n            j++;\\n            k++;\\n        }\\n    }\\n\\n    void mergeSort(int arr[], int l, int r) {\\n        if (l < r) {\\n            int m = l + (r - l) / 2;\\n            mergeSort(arr, l, m);\\n            mergeSort(arr, m + 1, r);\\n            merge(arr, l, m, r);\\n        }\\n    }\\n}",python:"class Solution:\\n    def merge(self, arr, l, m, r):\\n        n1 = m - l + 1\\n        n2 = r - m\\n        L = [0] * (n1)\\n        R = [0] * (n2)\\n        for i in range(0, n1):\\n            L[i] = arr[l + i]\\n        for j in range(0, n2):\\n            R[j] = arr[m + 1 + j]\\n        i = 0\\n        j = 0\\n        k = l\\n        while i < n1 and j < n2:\\n            if L[i] <= R[j]:\\n                arr[k] = L[i]\\n                i += 1\\n            else:\\n                arr[k] = R[j]\\n                j += 1\\n            k += 1\\n        while i < n1:\\n            arr[k] = L[i]\\n            i += 1\\n            k += 1\\n        while j < n2:\\n            arr[k] = R[j]\\n            j += 1\\n            k += 1\\n\\n    def mergeSort(self, arr, l, r):\\n        if l < r:\\n            m = l+(r-l)//2\\n            self.mergeSort(arr, l, m)\\n            self.mergeSort(arr, m+1, r)\\n            self.merge(arr, l, m, r)"}}},{title:"Recursive Bubble Sort",platform:"GeeksForGeeks",link:"#",content:{description:"Recursive Bubble Sort implementation.",code:{cpp:"void bubbleSort(int arr[], int n) {\\n    if (n == 1) return;\\n    for (int i=0; i<n-1; i++)\\n        if (arr[i] > arr[i+1])\\n            swap(arr[i], arr[i+1]);\\n    bubbleSort(arr, n-1);\\n}",java:"class Solution {\\n    static void bubbleSort(int arr[], int n) {\\n        if (n == 1) return;\\n        for (int i=0; i<n-1; i++)\\n            if (arr[i] > arr[i+1]) {\\n                int temp = arr[i];\\n                arr[i] = arr[i+1];\\n                arr[i+1] = temp;\\n            }\\n        bubbleSort(arr, n-1);\\n    }\\n}",python:"class Solution:\\n    def bubbleSort(self, arr, n):\\n        if n == 1: return\\n        for i in range(n-1):\\n            if arr[i] > arr[i+1]:\\n                arr[i], arr[i+1] = arr[i+1], arr[i]\\n        self.bubbleSort(arr, n-1)"}}},{title:"Recursive Insertion Sort",platform:"GeeksForGeeks",link:"#",content:{description:"Recursive Insertion Sort implementation.",code:{cpp:"void insertionSort(int arr[], int n) {\\n    if (n <= 1) return;\\n    insertionSort(arr, n-1);\\n    int last = arr[n-1];\\n    int j = n-2;\\n    while (j >= 0 && arr[j] > last) {\\n        arr[j+1] = arr[j];\\n        j--;\\n    }\\n    arr[j+1] = last;\\n}",java:"class Solution {\\n    public void insertionSort(int arr[], int n) {\\n        if (n <= 1) return;\\n        insertionSort(arr, n-1);\\n        int last = arr[n-1];\\n        int j = n-2;\\n        while (j >= 0 && arr[j] > last) {\\n            arr[j+1] = arr[j];\\n            j--;\\n        }\\n        arr[j+1] = last;\\n    }\\n}",python:"class Solution:\\n    def insertionSort(self, arr, n):\\n        if n <= 1: return\\n        self.insertionSort(arr, n-1)\\n        last = arr[n-1]\\n        j = n-2\\n        while j >= 0 and arr[j] > last:\\n            arr[j+1] = arr[j]\\n            j -= 1\\n        arr[j+1] = last"}}},{title:"Quick Sort",platform:"GeeksForGeeks",link:"https://practice.geeksforgeeks.org/problems/quick-sort/1",content:{description:"Quick Sort is a Divide and Conquer algorithm. It picks an element as pivot and partitions the given array around the picked pivot.",code:{cpp:"int partition(vector<int> &arr, int low, int high) {\\n    int pivot = arr[low];\\n    int i = low;\\n    int j = high;\\n    while (i < j) {\\n        while (arr[i] <= pivot && i <= high - 1) {\\n            i++;\\n        }\\n        while (arr[j] > pivot && j >= low + 1) {\\n            j--;\\n        }\\n        if (i < j) swap(arr[i], arr[j]);\\n    }\\n    swap(arr[low], arr[j]);\\n    return j;\\n}\\n\\nvoid quickSort(vector<int> &arr, int low, int high) {\\n    if (low < high) {\\n        int pIndex = partition(arr, low, high);\\n        quickSort(arr, low, pIndex - 1);\\n        quickSort(arr, pIndex + 1, high);\\n    }\\n}",java:"class Solution {\\n    static int partition(List<Integer> arr, int low, int high) {\\n        int pivot = arr.get(low);\\n        int i = low;\\n        int j = high;\\n        while (i < j) {\\n            while (arr.get(i) <= pivot && i <= high - 1) {\\n                i++;\\n            }\\n            while (arr.get(j) > pivot && j >= low + 1) {\\n                j--;\\n            }\\n            if (i < j) {\\n                int temp = arr.get(i);\\n                arr.set(i, arr.get(j));\\n                arr.set(j, temp);\\n            }\\n        }\\n        int temp = arr.get(low);\\n        arr.set(low, arr.get(j));\\n        arr.set(j, temp);\\n        return j;\\n    }\\n\\n    static void quickSort(List<Integer> arr, int low, int high) {\\n        if (low < high) {\\n            int pIndex = partition(arr, low, high);\\n            quickSort(arr, low, pIndex - 1);\\n            quickSort(arr, pIndex + 1, high);\\n        }\\n    }\\n}",python:"class Solution:\\n    def partition(self, arr, low, high):\\n        pivot = arr[low]\\n        i = low\\n        j = high\\n        while i < j:\\n            while arr[i] <= pivot and i <= high - 1:\\n                i += 1\\n            while arr[j] > pivot and j >= low + 1:\\n                j -= 1\\n            if i < j:\\n                arr[i], arr[j] = arr[j], arr[i]\\n        arr[low], arr[j] = arr[j], arr[low]\\n        return j\\n\\n    def quickSort(self, arr, low, high):\\n        if low < high:\\n            pIndex = self.partition(arr, low, high)\\n            self.quickSort(arr, low, pIndex - 1)\\n            self.quickSort(arr, pIndex + 1, high)"}}}]}]},{title:"Solve Problems on Arrays",totalProblems:40,subtopics:[{title:"Easy",problems:[{title:"Largest Element in an Array",platform:"GeeksForGeeks",link:"https://practice.geeksforgeeks.org/problems/largest-element-in-array4009/1",content:{description:"Approach: Initialize a variable `max` with the first element of the array. Traverse the array from the second element to the end. If the current element is greater than `max`, update `max` with the current element. Finally, return `max`. Time Complexity: O(N), Space Complexity: O(1).",code:{cpp:"int largest(vector<int> &arr, int n) {\\n    int maxVal = arr[0];\\n    for (int i = 1; i < n; i++) {\\n        if (arr[i] > maxVal) {\\n            maxVal = arr[i];\\n        }\\n    }\\n    return maxVal;\\n}",java:"class Solution {\\n    public int largest(int arr[], int n) {\\n        int maxVal = arr[0];\\n        for (int i = 1; i < n; i++) {\\n            if (arr[i] > maxVal) {\\n                maxVal = arr[i];\\n            }\\n        }\\n        return maxVal;\\n    }\\n}",python:"class Solution:\\n    def largest(self, arr, n):\\n        max_val = arr[0]\\n        for i in range(1, n):\\n            if arr[i] > max_val:\\n                max_val = arr[i]\\n        return max_val"}}},{title:"Second Largest Element in an Array without sorting",platform:"GeeksForGeeks",link:"https://practice.geeksforgeeks.org/problems/second-largest3735/1",content:{description:"Approach: Initialize `largest` and `secondLargest` to -1 (or minimal value). Traverse the array. If `arr[i] > largest`, update `secondLargest = largest` and `largest = arr[i]`. Else if `arr[i] > secondLargest` and `arr[i] != largest`, update `secondLargest = arr[i]`. Time Complexity: O(N).",code:{cpp:"int print2largest(int arr[], int n) {\\n    int largest = -1, secondLargest = -1;\\n    for (int i = 0; i < n; i++) {\\n        if (arr[i] > largest) {\\n            secondLargest = largest;\\n            largest = arr[i];\\n        } else if (arr[i] > secondLargest && arr[i] != largest) {\\n            secondLargest = arr[i];\\n        }\\n    }\\n    return secondLargest;\\n}",java:"class Solution {\\n    int print2largest(int arr[], int n) {\\n        int largest = -1, secondLargest = -1;\\n        for (int i = 0; i < n; i++) {\\n            if (arr[i] > largest) {\\n                secondLargest = largest;\\n                largest = arr[i];\\n            } else if (arr[i] > secondLargest && arr[i] != largest) {\\n                secondLargest = arr[i];\\n            }\\n        }\\n        return secondLargest;\\n    }\\n}",python:"class Solution:\\n    def print2largest(self, arr, n):\\n        largest = -1\\n        second_largest = -1\\n        for x in arr:\\n            if x > largest:\\n                second_largest = largest\\n                largest = x\\n            elif x > second_largest and x != largest:\\n                second_largest = x\\n        return second_largest"}}},{title:"Check if the array is sorted",platform:"LeetCode",link:"https://leetcode.com/problems/check-if-array-is-sorted-and-rotated/",content:{description:"Approach: Iterate through the array. Check if `arr[i] > arr[i+1]`. If this happens more than once (considering rotation), return false. For a non-rotated sorted array, it happens 0 times. For rotated, 1 time. The check `arr[n-1] > arr[0]` counts as a break for rotation. Time Complexity: O(N).",code:{cpp:"bool check(vector<int>& nums) {\\n    int count = 0;\\n    int n = nums.size();\\n    for (int i = 0; i < n; i++) {\\n        if (nums[i] > nums[(i + 1) % n]) {\\n            count++;\\n        }\\n    }\\n    return count <= 1;\\n}",java:"class Solution {\\n    public boolean check(int[] nums) {\\n        int count = 0;\\n        int n = nums.length;\\n        for (int i = 0; i < n; i++) {\\n            if (nums[i] > nums[(i + 1) % n]) {\\n                count++;\\n            }\\n        }\\n        return count <= 1;\\n    }\\n}",python:"class Solution:\\n    def check(self, nums: List[int]) -> bool:\\n        count = 0\\n        n = len(nums)\\n        for i in range(n):\\n            if nums[i] > nums[(i + 1) % n]:\\n                count += 1\\n        return count <= 1"}}},{title:"Remove duplicates from Sorted array",platform:"LeetCode",link:"https://leetcode.com/problems/remove-duplicates-from-sorted-array/",content:{description:"Approach: Two pointers logic. Use `i` to track the position of unique elements. Iterate with `j`. If `arr[j] != arr[i]`, increment `i` and set `arr[i] = arr[j]`. Return `i+1`. Time Complexity: O(N), Space Complexity: O(1).",code:{cpp:"int removeDuplicates(vector<int>& nums) {\\n    if (nums.empty()) return 0;\\n    int i = 0;\\n    for (int j = 1; j < nums.size(); j++) {\\n        if (nums[j] != nums[i]) {\\n            i++;\\n            nums[i] = nums[j];\\n        }\\n    }\\n    return i + 1;\\n}",java:"class Solution {\\n    public int removeDuplicates(int[] nums) {\\n        if (nums.length == 0) return 0;\\n        int i = 0;\\n        for (int j = 1; j < nums.length; j++) {\\n            if (nums[j] != nums[i]) {\\n                i++;\\n                nums[i] = nums[j];\\n            }\\n        }\\n        return i + 1;\\n    }\\n}",python:"class Solution:\\n    def removeDuplicates(self, nums: List[int]) -> int:\\n        if not nums: return 0\\n        i = 0\\n        for j in range(1, len(nums)):\\n            if nums[j] != nums[i]:\\n                i += 1\\n                nums[i] = nums[j]\\n        return i + 1"}}},{title:"Left Rotate the array by one",platform:"GeeksForGeeks",link:"https://practice.geeksforgeeks.org/problems/cyclically-rotate-an-array-by-one2617/1",content:{description:"Approach: Store the first element in a temporary variable. Shift all other elements to the left by one position. Place the temporary variable at the last index. Time Complexity: O(N), Space Complexity: O(1).",code:{cpp:"void leftRotate(int arr[], int n) {\\n    int temp = arr[0];\\n    for (int i = 0; i < n - 1; i++) {\\n        arr[i] = arr[i + 1];\\n    }\\n    arr[n - 1] = temp;\\n}",java:"class Solution {\\n    void leftRotate(long arr[], int n) {\\n        long temp = arr[0];\\n        for (int i = 0; i < n - 1; i++) {\\n            arr[i] = arr[i + 1];\\n        }\\n        arr[n - 1] = temp;\\n    }\\n}",python:"def leftRotate(arr, n):\\n    temp = arr[0]\\n    for i in range(n - 1):\\n        arr[i] = arr[i + 1]\\n    arr[n - 1] = temp"}}}]},{title:"Medium",problems:[{title:"2Sum Problem",platform:"LeetCode",link:"https://leetcode.com/problems/two-sum/",content:{description:"Solution for 2Sum Problem. Logic and implementation details coming soon.",code:{cpp:`// C++ Solution for 2Sum Problem
// This solution is currently being prepared.

void solve() {
    // TODO: Implement solution
}`,java:`// Java Solution for 2Sum Problem
// This solution is currently being prepared.

class Solution {
    public void solve() {
        // TODO: Implement solution
    }
}`,python:`# Python Solution for 2Sum Problem
# This solution is currently being prepared.

def solve():
    # TODO: Implement solution
    pass`}}},{title:"Sort an array of 0s, 1s and 2s",platform:"LeetCode",link:"https://leetcode.com/problems/sort-colors/",content:{description:"Solution for Sort an array of 0s, 1s and 2s. Logic and implementation details coming soon.",code:{cpp:`// C++ Solution for Sort an array of 0s, 1s and 2s
// This solution is currently being prepared.

void solve() {
    // TODO: Implement solution
}`,java:`// Java Solution for Sort an array of 0s, 1s and 2s
// This solution is currently being prepared.

class Solution {
    public void solve() {
        // TODO: Implement solution
    }
}`,python:`# Python Solution for Sort an array of 0s, 1s and 2s
# This solution is currently being prepared.

def solve():
    # TODO: Implement solution
    pass`}}},{title:"Majority Element (>N/2 times)",platform:"LeetCode",link:"https://leetcode.com/problems/majority-element/",content:{description:"Solution for Majority Element (>N/2 times). Logic and implementation details coming soon.",code:{cpp:`// C++ Solution for Majority Element (>N/2 times)
// This solution is currently being prepared.

void solve() {
    // TODO: Implement solution
}`,java:`// Java Solution for Majority Element (>N/2 times)
// This solution is currently being prepared.

class Solution {
    public void solve() {
        // TODO: Implement solution
    }
}`,python:`# Python Solution for Majority Element (>N/2 times)
# This solution is currently being prepared.

def solve():
    # TODO: Implement solution
    pass`}}},{title:"Kadane's Algorithm",platform:"LeetCode",link:"https://leetcode.com/problems/maximum-subarray/",content:{description:"Solution for Kadane's Algorithm. Logic and implementation details coming soon.",code:{cpp:`// C++ Solution for Kadane's Algorithm
// This solution is currently being prepared.

void solve() {
    // TODO: Implement solution
}`,java:`// Java Solution for Kadane's Algorithm
// This solution is currently being prepared.

class Solution {
    public void solve() {
        // TODO: Implement solution
    }
}`,python:`# Python Solution for Kadane's Algorithm
# This solution is currently being prepared.

def solve():
    # TODO: Implement solution
    pass`}}}]},{title:"Hard",problems:[{title:"Pascal's Triangle",platform:"LeetCode",link:"https://leetcode.com/problems/pascals-triangle/",content:{description:"Solution for Pascal's Triangle. Logic and implementation details coming soon.",code:{cpp:`// C++ Solution for Pascal's Triangle
// This solution is currently being prepared.

void solve() {
    // TODO: Implement solution
}`,java:`// Java Solution for Pascal's Triangle
// This solution is currently being prepared.

class Solution {
    public void solve() {
        // TODO: Implement solution
    }
}`,python:`# Python Solution for Pascal's Triangle
# This solution is currently being prepared.

def solve():
    # TODO: Implement solution
    pass`}}},{title:"Majority Element (>N/3 times)",platform:"LeetCode",link:"https://leetcode.com/problems/majority-element-ii/",content:{description:"Solution for Majority Element (>N/3 times). Logic and implementation details coming soon.",code:{cpp:`// C++ Solution for Majority Element (>N/3 times)
// This solution is currently being prepared.

void solve() {
    // TODO: Implement solution
}`,java:`// Java Solution for Majority Element (>N/3 times)
// This solution is currently being prepared.

class Solution {
    public void solve() {
        // TODO: Implement solution
    }
}`,python:`# Python Solution for Majority Element (>N/3 times)
# This solution is currently being prepared.

def solve():
    # TODO: Implement solution
    pass`}}},{title:"3Sum Problem",platform:"LeetCode",link:"https://leetcode.com/problems/3sum/",content:{description:"Solution for 3Sum Problem. Logic and implementation details coming soon.",code:{cpp:`// C++ Solution for 3Sum Problem
// This solution is currently being prepared.

void solve() {
    // TODO: Implement solution
}`,java:`// Java Solution for 3Sum Problem
// This solution is currently being prepared.

class Solution {
    public void solve() {
        // TODO: Implement solution
    }
}`,python:`# Python Solution for 3Sum Problem
# This solution is currently being prepared.

def solve():
    # TODO: Implement solution
    pass`}}},{title:"4Sum Problem",platform:"LeetCode",link:"https://leetcode.com/problems/4sum/",content:{description:"Solution for 4Sum Problem. Logic and implementation details coming soon.",code:{cpp:`// C++ Solution for 4Sum Problem
// This solution is currently being prepared.

void solve() {
    // TODO: Implement solution
}`,java:`// Java Solution for 4Sum Problem
// This solution is currently being prepared.

class Solution {
    public void solve() {
        // TODO: Implement solution
    }
}`,python:`# Python Solution for 4Sum Problem
# This solution is currently being prepared.

def solve():
    # TODO: Implement solution
    pass`}}}]}]},{title:"Binary Search",totalProblems:32,subtopics:[{title:"Learning BS on 1D Arrays",problems:[{title:"Binary Search to find X in sorted array",platform:"LeetCode",link:"https://leetcode.com/problems/binary-search/",content:{description:"Approach: Initialize `low` = 0 and `high` = n-1. Loop while `low <= high`. Calculate `mid`. If `arr[mid] == target`, return `mid`. If `arr[mid] < target`, move `low` to `mid + 1`. Else move `high` to `mid - 1`. If not found, return -1. Time Complexity: O(log N), Space Complexity: O(1).",code:{cpp:"int search(vector<int>& nums, int target) {\\n    int n = nums.size();\\n    int low = 0, high = n - 1;\\n    while (low <= high) {\\n        int mid = (low + high) / 2;\\n        if (nums[mid] == target) return mid;\\n        else if (target > nums[mid]) low = mid + 1;\\n        else high = mid - 1;\\n    }\\n    return -1;\\n}",java:"class Solution {\\n    public int search(int[] nums, int target) {\\n        int n = nums.length;\\n        int low = 0, high = n - 1;\\n        while (low <= high) {\\n            int mid = (low + high) / 2;\\n            if (nums[mid] == target) return mid;\\n            else if (target > nums[mid]) low = mid + 1;\\n            else high = mid - 1;\\n        }\\n        return -1;\\n    }\\n}",python:"class Solution:\\n    def search(self, nums: List[int], target: int) -> int:\\n        low = 0\\n        high = len(nums) - 1\\n        while low <= high:\\n            mid = (low + high) // 2\\n            if nums[mid] == target:\\n                return mid\\n            elif target > nums[mid]:\\n                low = mid + 1\\n            else:\\n                high = mid - 1\\n        return -1"}}},{title:"Lower Bound",platform:"Coding Ninjas",link:"https://www.codingninjas.com/codestudio/problems/lower-bound_8165382",content:{description:"Approach: The lower bound algorithm finds the first or the smallest index in a sorted array where the value at that index is greater than or equal to a given key i.e. x. The lower bound of a key x is the smallest index ind such that arr[ind] >= x. Time Complexity: O(log N).",code:{cpp:"int lowerBound(vector<int> arr, int n, int x) {\\n    int low = 0, high = n - 1;\\n    int ans = n;\\n    while (low <= high) {\\n        int mid = (low + high) / 2;\\n        if (arr[mid] >= x) {\\n            ans = mid;\\n            high = mid - 1;\\n        } else {\\n            low = mid + 1;\\n        }\\n    }\\n    return ans;\\n}",java:"class Solution {\\n    public static int lowerBound(int[] arr, int n, int x) {\\n        int low = 0, high = n - 1;\\n        int ans = n;\\n        while (low <= high) {\\n            int mid = (low + high) / 2;\\n            if (arr[mid] >= x) {\\n                ans = mid;\\n                high = mid - 1;\\n            } else {\\n                low = mid + 1;\\n            }\\n        }\\n        return ans;\\n    }\\n}",python:"class Solution:\\n    def lowerBound(self, arr, n, x):\\n        low = 0\\n        high = n - 1\\n        ans = n\\n        while low <= high:\\n            mid = (low + high) // 2\\n            if arr[mid] >= x:\\n                ans = mid\\n                high = mid - 1\\n            else:\\n                low = mid + 1\\n        return ans"}}},{title:"Upper Bound",platform:"Coding Ninjas",link:"https://www.codingninjas.com/codestudio/problems/upper-bound_8150974",content:{description:"Approach: The upper bound algorithm finds the first or the smallest index in a sorted array where the value at that index is strictly greater than a given key i.e. x. The upper bound of a key x is the smallest index ind such that arr[ind] > x. Time Complexity: O(log N).",code:{cpp:"int upperBound(vector<int> &arr, int x, int n) {\\n    int low = 0, high = n - 1;\\n    int ans = n;\\n    while (low <= high) {\\n        int mid = (low + high) / 2;\\n        if (arr[mid] > x) {\\n            ans = mid;\\n            high = mid - 1;\\n        } else {\\n            low = mid + 1;\\n        }\\n    }\\n    return ans;\\n}",java:"class Solution {\\n    public static int upperBound(int[] arr, int x, int n) {\\n        int low = 0, high = n - 1;\\n        int ans = n;\\n        while (low <= high) {\\n            int mid = (low + high) / 2;\\n            if (arr[mid] > x) {\\n                ans = mid;\\n                high = mid - 1;\\n            } else {\\n                low = mid + 1;\\n            }\\n        }\\n        return ans;\\n    }\\n}",python:"class Solution:\\n    def upperBound(self, arr, x, n):\\n        low = 0\\n        high = n - 1\\n        ans = n\\n        while low <= high:\\n            mid = (low + high) // 2\\n            if arr[mid] > x:\\n                ans = mid\\n                high = mid - 1\\n            else:\\n                low = mid + 1\\n        return ans"}}},{title:"Search Insert Position",platform:"LeetCode",link:"https://leetcode.com/problems/search-insert-position/",content:{description:"Approach: The problem asks for the index where the target is found, or where it should be inserted to keep the array sorted. This is exactly the same logic as the Lower Bound algorithm (finding the smallest index such that arr[ind] >= target). Time Complexity: O(log N).",code:{cpp:"int searchInsert(vector<int>& nums, int target) {\\n    int n = nums.size();\\n    int low = 0, high = n - 1;\\n    int ans = n;\\n    while (low <= high) {\\n        int mid = (low + high) / 2;\\n        if (nums[mid] >= target) {\\n            ans = mid;\\n            high = mid - 1;\\n        } else {\\n            low = mid + 1;\\n        }\\n    }\\n    return ans;\\n}",java:"class Solution {\\n    public int searchInsert(int[] nums, int target) {\\n        int n = nums.length;\\n        int low = 0, high = n - 1;\\n        int ans = n;\\n        while (low <= high) {\\n            int mid = (low + high) / 2;\\n            if (nums[mid] >= target) {\\n                ans = mid;\\n                high = mid - 1;\\n            } else {\\n                low = mid + 1;\\n            }\\n        }\\n        return ans;\\n    }\\n}",python:"class Solution:\\n    def searchInsert(self, nums: List[int], target: int) -> int:\\n        low = 0\\n        high = len(nums) - 1\\n        ans = len(nums)\\n        while low <= high:\\n            mid = (low + high) // 2\\n            if nums[mid] >= target:\\n                ans = mid\\n                high = mid - 1\\n            else:\\n                low = mid + 1\\n        return ans"}}}]},{title:"BS on Answers",problems:[{title:"Find square root of a number in log n",platform:"GeeksForGeeks",link:"https://practice.geeksforgeeks.org/problems/square-root/1",content:{description:"Approach: Binary Search on the answer space [1, x]. Calculate mid*mid. If mid*mid <= x, store mid as answer and move to right half (low = mid+1). Else move to left half. Time Complexity: O(log N).",code:{cpp:"long long int floorSqrt(long long int x) {\\n    long long int low = 1, high = x;\\n    long long int ans = 1;\\n    while (low <= high) {\\n        long long int mid = (low + high) / 2;\\n        if (mid * mid <= x) {\\n            ans = mid;\\n            low = mid + 1;\\n        } else {\\n            high = mid - 1;\\n        }\\n    }\\n    return ans;\\n}",java:"class Solution {\\n    long floorSqrt(long x) {\\n        long low = 1, high = x;\\n        long ans = 1;\\n        while (low <= high) {\\n            long mid = (low + high) / 2;\\n            if (mid * mid <= x) {\\n                ans = mid;\\n                low = mid + 1;\\n            } else {\\n                high = mid - 1;\\n            }\\n        }\\n        return ans;\\n    }\\n}",python:"class Solution:\\n    def floorSqrt(self, x):\\n        low = 1\\n        high = x\\n        ans = 1\\n        while low <= high:\\n            mid = (low + high) // 2\\n            if mid * mid <= x:\\n                ans = mid\\n                low = mid + 1\\n            else:\\n                high = mid - 1\\n        return ans"}}},{title:"Find the Nth root of an integer",platform:"Coding Ninjas",link:"https://www.codingninjas.com/codestudio/problems/nth-root-of-m_1062679",content:{description:"Approach: Binary Search on answer space [1, m]. For a given mid, calculate mid^n. If equals m, return mid. If less than m, low = mid + 1. If greater, high = mid - 1. Time Complexity: O(log M * log N) or O(log M * N) depending on power func.",code:{cpp:"int NthRoot(int n, int m) {\\n    int low = 1, high = m;\\n    while (low <= high) {\\n        int mid = (low + high) / 2;\\n        long long val = 1;\\n        for (int i = 0; i < n; i++) {\\n            val *= mid;\\n            if (val > m) break;\\n        }\\n        if (val == m) return mid;\\n        else if (val < m) low = mid + 1;\\n        else high = mid - 1;\\n    }\\n    return -1;\\n}",java:"class Solution {\\n    public int NthRoot(int n, int m) {\\n        int low = 1, high = m;\\n        while (low <= high) {\\n            int mid = (low + high) / 2;\\n            long val = 1;\\n            for (int i = 0; i < n; i++) {\\n                val *= mid;\\n                if (val > m) break;\\n            }\\n            if (val == m) return mid;\\n            else if (val < m) low = mid + 1;\\n            else high = mid - 1;\\n        }\\n        return -1;\\n    }\\n}",python:"class Solution:\\n    def NthRoot(self, n, m):\\n        low = 1\\n        high = m\\n        while low <= high:\\n            mid = (low + high) // 2\\n            if mid ** n == m:\\n                return mid\\n            elif mid ** n < m:\\n                low = mid + 1\\n            else:\\n                high = mid - 1\\n        return -1"}}},{title:"Koko Eating Bananas",platform:"LeetCode",link:"https://leetcode.com/problems/koko-eating-bananas/",content:{description:"Approach: Binary Search on the speed of eating, range [1, max(piles)]. For a given speed, calculate total hours needed. If hours <= h, valid speed, try smaller (high = mid - 1). Else speed too slow, unique larger (low = mid + 1). Time Complexity: O(N * log(max(piles))).",code:{cpp:"int minEatingSpeed(vector<int>& piles, int h) {\\n    int low = 1, high = 1000000000;\\n    int ans = high;\\n    while (low <= high) {\\n        int mid = low + (high - low) / 2;\\n        long long total = 0;\\n        for (int p : piles) total += (p + mid - 1) / mid;\\n        if (total <= h) {\\n            ans = mid;\\n            high = mid - 1;\\n        } else {\\n            low = mid + 1;\\n        }\\n    }\\n    return ans;\\n}",java:"class Solution {\\n    public int minEatingSpeed(int[] piles, int h) {\\n        int low = 1, high = 1000000000;\\n        int ans = high;\\n        while (low <= high) {\\n            int mid = low + (high - low) / 2;\\n            long total = 0;\\n            for (int p : piles) total += (long)(p + mid - 1) / mid;\\n            if (total <= h) {\\n                ans = mid;\\n                high = mid - 1;\\n            } else {\\n                low = mid + 1;\\n            }\\n        }\\n        return ans;\\n    }\\n}",python:"class Solution:\\n    def minEatingSpeed(self, piles: List[int], h: int) -> int:\\n        low = 1\\n        high = max(piles)\\n        ans = high\\n        while low <= high:\\n            mid = (low + high) // 2\\n            total = sum((p - 1) // mid + 1 for p in piles)\\n            if total <= h:\\n                ans = mid\\n                high = mid - 1\\n            else:\\n                low = mid + 1\\n        return ans"}}}]},{title:"BS on 2D Arrays",problems:[{title:"Find the row with maximum number of 1s",platform:"GeeksForGeeks",link:"https://practice.geeksforgeeks.org/problems/row-with-max-1s0023/1",content:{description:"Approach: Start from the top-right corner. If the current element is 1, it means all elements to the left in this row *could* be 1, but we need to check left to find the first 1. However, to find the row with *max* 1s, if we stick to the top-right logic (or traversing strategies), a better O(N+M) approach is: Start top-right. If 1, move left (increment count of 1s implicitly or track column index). If 0, move down.",code:{cpp:"int rowWithMax1s(vector<vector<int> > arr, int n, int m) {\\n    int maxRow = -1;\\n    int i = 0, j = m - 1;\\n    while (i < n && j >= 0) {\\n        if (arr[i][j] == 1) {\\n            maxRow = i;\\n            j--;\\n        } else {\\n            i++;\\n        }\\n    }\\n    return maxRow;\\n}",java:"class Solution {\\n    int rowWithMax1s(int arr[][], int n, int m) {\\n        int maxRow = -1;\\n        int i = 0, j = m - 1;\\n        while (i < n && j >= 0) {\\n            if (arr[i][j] == 1) {\\n                maxRow = i;\\n                j--;\\n            } else {\\n                i++;\\n            }\\n        }\\n        return maxRow;\\n    }\\n}",python:"class Solution:\\n    def rowWithMax1s(self, arr, n, m):\\n        max_row = -1\\n        i = 0\\n        j = m - 1\\n        while i < n and j >= 0:\\n            if arr[i][j] == 1:\\n                max_row = i\\n                j -= 1\\n            else:\\n                i += 1\\n        return max_row"}}},{title:"Search in a 2D matrix",platform:"LeetCode",link:"https://leetcode.com/problems/search-a-2d-matrix/",content:{description:"Approach: Treat the 2D matrix as a flattened 1D sorted array of size N*M. The element at index `mid` in 1D corresponds to `matrix[mid / m][mid % m]` in 2D. Perform standard binary search. Time Complexity: O(log(N*M)).",code:{cpp:"bool searchMatrix(vector<vector<int>>& matrix, int target) {\\n    if (matrix.empty()) return false;\\n    int n = matrix.size();\\n    int m = matrix[0].size();\\n    int low = 0, high = (n * m) - 1;\\n    while (low <= high) {\\n        int mid = (low + high) / 2;\\n        if (matrix[mid / m][mid % m] == target) return true;\\n        if (matrix[mid / m][mid % m] < target) low = mid + 1;\\n        else high = mid - 1;\\n    }\\n    return false;\\n}",java:"class Solution {\\n    public boolean searchMatrix(int[][] matrix, int target) {\\n        if (matrix.length == 0) return false;\\n        int n = matrix.length;\\n        int m = matrix[0].length;\\n        int low = 0, high = (n * m) - 1;\\n        while (low <= high) {\\n            int mid = (low + high) / 2;\\n            if (matrix[mid / m][mid % m] == target) return true;\\n            if (matrix[mid / m][mid % m] < target) low = mid + 1;\\n            else high = mid - 1;\\n        }\\n        return false;\\n    }\\n}",python:"class Solution:\\n    def searchMatrix(self, matrix: List[List[int]], target: int) -> bool:\\n        if not matrix: return False\\n        n = len(matrix)\\n        m = len(matrix[0])\\n        low = 0\\n        high = (n * m) - 1\\n        while low <= high:\\n            mid = (low + high) // 2\\n            if matrix[mid // m][mid % m] == target:\\n                return True\\n            if matrix[mid // m][mid % m] < target:\\n                low = mid + 1\\n            else:\\n                high = mid - 1\\n        return False"}}}]}]},{title:"Strings",totalProblems:15,subtopics:[{title:"Basic and Medium",problems:[{title:"Remove outermost Paranthesis",platform:"LeetCode",link:"https://leetcode.com/problems/remove-outermost-parentheses/",content:{description:"Solution for Remove outermost Paranthesis. Logic and implementation details coming soon.",code:{cpp:`// C++ Solution for Remove outermost Paranthesis
// This solution is currently being prepared.

void solve() {
    // TODO: Implement solution
}`,java:`// Java Solution for Remove outermost Paranthesis
// This solution is currently being prepared.

class Solution {
    public void solve() {
        // TODO: Implement solution
    }
}`,python:`# Python Solution for Remove outermost Paranthesis
# This solution is currently being prepared.

def solve():
    # TODO: Implement solution
    pass`}}},{title:"Reverse words in a given string",platform:"LeetCode",link:"https://leetcode.com/problems/reverse-words-in-a-string/",content:{description:"Solution for Reverse words in a given string. Logic and implementation details coming soon.",code:{cpp:`// C++ Solution for Reverse words in a given string
// This solution is currently being prepared.

void solve() {
    // TODO: Implement solution
}`,java:`// Java Solution for Reverse words in a given string
// This solution is currently being prepared.

class Solution {
    public void solve() {
        // TODO: Implement solution
    }
}`,python:`# Python Solution for Reverse words in a given string
# This solution is currently being prepared.

def solve():
    # TODO: Implement solution
    pass`}}},{title:"Largest odd number in a string",platform:"LeetCode",link:"https://leetcode.com/problems/largest-odd-number-in-string/",content:{description:"Solution for Largest odd number in a string. Logic and implementation details coming soon.",code:{cpp:`// C++ Solution for Largest odd number in a string
// This solution is currently being prepared.

void solve() {
    // TODO: Implement solution
}`,java:`// Java Solution for Largest odd number in a string
// This solution is currently being prepared.

class Solution {
    public void solve() {
        // TODO: Implement solution
    }
}`,python:`# Python Solution for Largest odd number in a string
# This solution is currently being prepared.

def solve():
    # TODO: Implement solution
    pass`}}}]}]},{title:"Learn LinkedList",totalProblems:31,subtopics:[{title:"Learn 1D LL",problems:[{title:"Introduction to Linked List",platform:"GeeksForGeeks",link:"https://practice.geeksforgeeks.org/problems/introduction-to-linked-list/1",content:{description:"Solution for Introduction to Linked List. Logic and implementation details coming soon.",code:{cpp:`// C++ Solution for Introduction to Linked List
// This solution is currently being prepared.

void solve() {
    // TODO: Implement solution
}`,java:`// Java Solution for Introduction to Linked List
// This solution is currently being prepared.

class Solution {
    public void solve() {
        // TODO: Implement solution
    }
}`,python:`# Python Solution for Introduction to Linked List
# This solution is currently being prepared.

def solve():
    # TODO: Implement solution
    pass`}}},{title:"Inserting a node in LinkedList",platform:"GeeksForGeeks",link:"https://practice.geeksforgeeks.org/problems/linked-list-insertion-1587115620/1",content:{description:"Solution for Inserting a node in LinkedList. Logic and implementation details coming soon.",code:{cpp:`// C++ Solution for Inserting a node in LinkedList
// This solution is currently being prepared.

void solve() {
    // TODO: Implement solution
}`,java:`// Java Solution for Inserting a node in LinkedList
// This solution is currently being prepared.

class Solution {
    public void solve() {
        // TODO: Implement solution
    }
}`,python:`# Python Solution for Inserting a node in LinkedList
# This solution is currently being prepared.

def solve():
    # TODO: Implement solution
    pass`}}},{title:"Deleting a node in LinkedList",platform:"GeeksForGeeks",link:"https://practice.geeksforgeeks.org/problems/delete-a-node-in-single-linked-list/1",content:{description:"Solution for Deleting a node in LinkedList. Logic and implementation details coming soon.",code:{cpp:`// C++ Solution for Deleting a node in LinkedList
// This solution is currently being prepared.

void solve() {
    // TODO: Implement solution
}`,java:`// Java Solution for Deleting a node in LinkedList
// This solution is currently being prepared.

class Solution {
    public void solve() {
        // TODO: Implement solution
    }
}`,python:`# Python Solution for Deleting a node in LinkedList
# This solution is currently being prepared.

def solve():
    # TODO: Implement solution
    pass`}}}]},{title:"Learn Doubly LL",problems:[{title:"Introduction to Doubly Linked List",platform:"GeeksForGeeks",link:"https://practice.geeksforgeeks.org/problems/introduction-to-doubly-linked-list/1",content:{description:"Solution for Introduction to Doubly Linked List. Logic and implementation details coming soon.",code:{cpp:`// C++ Solution for Introduction to Doubly Linked List
// This solution is currently being prepared.

void solve() {
    // TODO: Implement solution
}`,java:`// Java Solution for Introduction to Doubly Linked List
// This solution is currently being prepared.

class Solution {
    public void solve() {
        // TODO: Implement solution
    }
}`,python:`# Python Solution for Introduction to Doubly Linked List
# This solution is currently being prepared.

def solve():
    # TODO: Implement solution
    pass`}}},{title:"Insert a node in DLL",platform:"GeeksForGeeks",link:"https://practice.geeksforgeeks.org/problems/insert-a-node-in-doubly-linked-list/1",content:{description:"Solution for Insert a node in DLL. Logic and implementation details coming soon.",code:{cpp:`// C++ Solution for Insert a node in DLL
// This solution is currently being prepared.

void solve() {
    // TODO: Implement solution
}`,java:`// Java Solution for Insert a node in DLL
// This solution is currently being prepared.

class Solution {
    public void solve() {
        // TODO: Implement solution
    }
}`,python:`# Python Solution for Insert a node in DLL
# This solution is currently being prepared.

def solve():
    # TODO: Implement solution
    pass`}}},{title:"Delete a node in DLL",platform:"GeeksForGeeks",link:"https://practice.geeksforgeeks.org/problems/delete-node-in-doubly-linked-list/1",content:{description:"Solution for Delete a node in DLL. Logic and implementation details coming soon.",code:{cpp:`// C++ Solution for Delete a node in DLL
// This solution is currently being prepared.

void solve() {
    // TODO: Implement solution
}`,java:`// Java Solution for Delete a node in DLL
// This solution is currently being prepared.

class Solution {
    public void solve() {
        // TODO: Implement solution
    }
}`,python:`# Python Solution for Delete a node in DLL
# This solution is currently being prepared.

def solve():
    # TODO: Implement solution
    pass`}}},{title:"Reverse a DLL",platform:"GeeksForGeeks",link:"https://practice.geeksforgeeks.org/problems/reverse-a-doubly-linked-list/1",content:{description:"Solution for Reverse a DLL. Logic and implementation details coming soon.",code:{cpp:`// C++ Solution for Reverse a DLL
// This solution is currently being prepared.

void solve() {
    // TODO: Implement solution
}`,java:`// Java Solution for Reverse a DLL
// This solution is currently being prepared.

class Solution {
    public void solve() {
        // TODO: Implement solution
    }
}`,python:`# Python Solution for Reverse a DLL
# This solution is currently being prepared.

def solve():
    # TODO: Implement solution
    pass`}}}]},{title:"Medium Problems of LL",problems:[{title:"Middle of a Linked List",platform:"LeetCode",link:"https://leetcode.com/problems/middle-of-the-linked-list/",content:{description:"Solution for Middle of a Linked List. Logic and implementation details coming soon.",code:{cpp:`// C++ Solution for Middle of a Linked List
// This solution is currently being prepared.

void solve() {
    // TODO: Implement solution
}`,java:`// Java Solution for Middle of a Linked List
// This solution is currently being prepared.

class Solution {
    public void solve() {
        // TODO: Implement solution
    }
}`,python:`# Python Solution for Middle of a Linked List
# This solution is currently being prepared.

def solve():
    # TODO: Implement solution
    pass`}}},{title:"Reverse a Linked List",platform:"LeetCode",link:"https://leetcode.com/problems/reverse-linked-list/",content:{description:"Solution for Reverse a Linked List. Logic and implementation details coming soon.",code:{cpp:`// C++ Solution for Reverse a Linked List
// This solution is currently being prepared.

void solve() {
    // TODO: Implement solution
}`,java:`// Java Solution for Reverse a Linked List
// This solution is currently being prepared.

class Solution {
    public void solve() {
        // TODO: Implement solution
    }
}`,python:`# Python Solution for Reverse a Linked List
# This solution is currently being prepared.

def solve():
    # TODO: Implement solution
    pass`}}},{title:"Detect a loop in LL",platform:"LeetCode",link:"https://leetcode.com/problems/linked-list-cycle/",content:{description:"Solution for Detect a loop in LL. Logic and implementation details coming soon.",code:{cpp:`// C++ Solution for Detect a loop in LL
// This solution is currently being prepared.

void solve() {
    // TODO: Implement solution
}`,java:`// Java Solution for Detect a loop in LL
// This solution is currently being prepared.

class Solution {
    public void solve() {
        // TODO: Implement solution
    }
}`,python:`# Python Solution for Detect a loop in LL
# This solution is currently being prepared.

def solve():
    # TODO: Implement solution
    pass`}}}]}]},{title:"Recursion [PatternWise]",totalProblems:25,subtopics:[{title:"Get Strong Hold",problems:[{title:"Recursive Implementation of atoi()",platform:"GeeksForGeeks",link:"https://practice.geeksforgeeks.org/problems/implement-atoi/1",content:{description:"Solution for Recursive Implementation of atoi(). Logic and implementation details coming soon.",code:{cpp:`// C++ Solution for Recursive Implementation of atoi()
// This solution is currently being prepared.

void solve() {
    // TODO: Implement solution
}`,java:`// Java Solution for Recursive Implementation of atoi()
// This solution is currently being prepared.

class Solution {
    public void solve() {
        // TODO: Implement solution
    }
}`,python:`# Python Solution for Recursive Implementation of atoi()
# This solution is currently being prepared.

def solve():
    # TODO: Implement solution
    pass`}}},{title:"Pow(x, n)",platform:"LeetCode",link:"https://leetcode.com/problems/powx-n/",content:{description:"Solution for Pow(x, n). Logic and implementation details coming soon.",code:{cpp:`// C++ Solution for Pow(x, n)
// This solution is currently being prepared.

void solve() {
    // TODO: Implement solution
}`,java:`// Java Solution for Pow(x, n)
// This solution is currently being prepared.

class Solution {
    public void solve() {
        // TODO: Implement solution
    }
}`,python:`# Python Solution for Pow(x, n)
# This solution is currently being prepared.

def solve():
    # TODO: Implement solution
    pass`}}},{title:"Count Good numbers",platform:"LeetCode",link:"https://leetcode.com/problems/count-good-numbers/",content:{description:"Solution for Count Good numbers. Logic and implementation details coming soon.",code:{cpp:`// C++ Solution for Count Good numbers
// This solution is currently being prepared.

void solve() {
    // TODO: Implement solution
}`,java:`// Java Solution for Count Good numbers
// This solution is currently being prepared.

class Solution {
    public void solve() {
        // TODO: Implement solution
    }
}`,python:`# Python Solution for Count Good numbers
# This solution is currently being prepared.

def solve():
    # TODO: Implement solution
    pass`}}},{title:"Sort a stack using recursion",platform:"GeeksForGeeks",link:"https://practice.geeksforgeeks.org/problems/sort-a-stack/1",content:{description:"Solution for Sort a stack using recursion. Logic and implementation details coming soon.",code:{cpp:`// C++ Solution for Sort a stack using recursion
// This solution is currently being prepared.

void solve() {
    // TODO: Implement solution
}`,java:`// Java Solution for Sort a stack using recursion
// This solution is currently being prepared.

class Solution {
    public void solve() {
        // TODO: Implement solution
    }
}`,python:`# Python Solution for Sort a stack using recursion
# This solution is currently being prepared.

def solve():
    # TODO: Implement solution
    pass`}}},{title:"Reverse a stack using recursion",platform:"GeeksForGeeks",link:"https://practice.geeksforgeeks.org/problems/reverse-a-stack/1",content:{description:"Solution for Reverse a stack using recursion. Logic and implementation details coming soon.",code:{cpp:`// C++ Solution for Reverse a stack using recursion
// This solution is currently being prepared.

void solve() {
    // TODO: Implement solution
}`,java:`// Java Solution for Reverse a stack using recursion
// This solution is currently being prepared.

class Solution {
    public void solve() {
        // TODO: Implement solution
    }
}`,python:`# Python Solution for Reverse a stack using recursion
# This solution is currently being prepared.

def solve():
    # TODO: Implement solution
    pass`}}}]},{title:"Subsequences Pattern",problems:[{title:"Generate all binary strings",platform:"GeeksForGeeks",link:"https://practice.geeksforgeeks.org/problems/generate-all-binary-strings/1",content:{description:"Solution for Generate all binary strings. Logic and implementation details coming soon.",code:{cpp:`// C++ Solution for Generate all binary strings
// This solution is currently being prepared.

void solve() {
    // TODO: Implement solution
}`,java:`// Java Solution for Generate all binary strings
// This solution is currently being prepared.

class Solution {
    public void solve() {
        // TODO: Implement solution
    }
}`,python:`# Python Solution for Generate all binary strings
# This solution is currently being prepared.

def solve():
    # TODO: Implement solution
    pass`}}},{title:"Generate Parentheses",platform:"LeetCode",link:"https://leetcode.com/problems/generate-parentheses/",content:{description:"Solution for Generate Parentheses. Logic and implementation details coming soon.",code:{cpp:`// C++ Solution for Generate Parentheses
// This solution is currently being prepared.

void solve() {
    // TODO: Implement solution
}`,java:`// Java Solution for Generate Parentheses
// This solution is currently being prepared.

class Solution {
    public void solve() {
        // TODO: Implement solution
    }
}`,python:`# Python Solution for Generate Parentheses
# This solution is currently being prepared.

def solve():
    # TODO: Implement solution
    pass`}}},{title:"Subset Sum-I",platform:"GeeksForGeeks",link:"https://practice.geeksforgeeks.org/problems/subset-sums2234/1",content:{description:"Solution for Subset Sum-I. Logic and implementation details coming soon.",code:{cpp:`// C++ Solution for Subset Sum-I
// This solution is currently being prepared.

void solve() {
    // TODO: Implement solution
}`,java:`// Java Solution for Subset Sum-I
// This solution is currently being prepared.

class Solution {
    public void solve() {
        // TODO: Implement solution
    }
}`,python:`# Python Solution for Subset Sum-I
# This solution is currently being prepared.

def solve():
    # TODO: Implement solution
    pass`}}},{title:"Subset Sum-II",platform:"LeetCode",link:"https://leetcode.com/problems/subsets-ii/",content:{description:"Solution for Subset Sum-II. Logic and implementation details coming soon.",code:{cpp:`// C++ Solution for Subset Sum-II
// This solution is currently being prepared.

void solve() {
    // TODO: Implement solution
}`,java:`// Java Solution for Subset Sum-II
// This solution is currently being prepared.

class Solution {
    public void solve() {
        // TODO: Implement solution
    }
}`,python:`# Python Solution for Subset Sum-II
# This solution is currently being prepared.

def solve():
    # TODO: Implement solution
    pass`}}},{title:"Combination Sum",platform:"LeetCode",link:"https://leetcode.com/problems/combination-sum/",content:{description:"Solution for Combination Sum. Logic and implementation details coming soon.",code:{cpp:`// C++ Solution for Combination Sum
// This solution is currently being prepared.

void solve() {
    // TODO: Implement solution
}`,java:`// Java Solution for Combination Sum
// This solution is currently being prepared.

class Solution {
    public void solve() {
        // TODO: Implement solution
    }
}`,python:`# Python Solution for Combination Sum
# This solution is currently being prepared.

def solve():
    # TODO: Implement solution
    pass`}}},{title:"Combination Sum-II",platform:"LeetCode",link:"https://leetcode.com/problems/combination-sum-ii/",content:{description:"Solution for Combination Sum-II. Logic and implementation details coming soon.",code:{cpp:`// C++ Solution for Combination Sum-II
// This solution is currently being prepared.

void solve() {
    // TODO: Implement solution
}`,java:`// Java Solution for Combination Sum-II
// This solution is currently being prepared.

class Solution {
    public void solve() {
        // TODO: Implement solution
    }
}`,python:`# Python Solution for Combination Sum-II
# This solution is currently being prepared.

def solve():
    # TODO: Implement solution
    pass`}}},{title:"Palindrome Partitioning",platform:"LeetCode",link:"https://leetcode.com/problems/palindrome-partitioning/",content:{description:"Solution for Palindrome Partitioning. Logic and implementation details coming soon.",code:{cpp:`// C++ Solution for Palindrome Partitioning
// This solution is currently being prepared.

void solve() {
    // TODO: Implement solution
}`,java:`// Java Solution for Palindrome Partitioning
// This solution is currently being prepared.

class Solution {
    public void solve() {
        // TODO: Implement solution
    }
}`,python:`# Python Solution for Palindrome Partitioning
# This solution is currently being prepared.

def solve():
    # TODO: Implement solution
    pass`}}},{title:"Letter Combinations of a Phone Number",platform:"LeetCode",link:"https://leetcode.com/problems/letter-combinations-of-a-phone-number/",content:{description:"Solution for Letter Combinations of a Phone Number. Logic and implementation details coming soon.",code:{cpp:`// C++ Solution for Letter Combinations of a Phone Number
// This solution is currently being prepared.

void solve() {
    // TODO: Implement solution
}`,java:`// Java Solution for Letter Combinations of a Phone Number
// This solution is currently being prepared.

class Solution {
    public void solve() {
        // TODO: Implement solution
    }
}`,python:`# Python Solution for Letter Combinations of a Phone Number
# This solution is currently being prepared.

def solve():
    # TODO: Implement solution
    pass`}}}]},{title:"Hard Problems",problems:[{title:"Word Search",platform:"LeetCode",link:"https://leetcode.com/problems/word-search/",content:{description:"Solution for Word Search. Logic and implementation details coming soon.",code:{cpp:`// C++ Solution for Word Search
// This solution is currently being prepared.

void solve() {
    // TODO: Implement solution
}`,java:`// Java Solution for Word Search
// This solution is currently being prepared.

class Solution {
    public void solve() {
        // TODO: Implement solution
    }
}`,python:`# Python Solution for Word Search
# This solution is currently being prepared.

def solve():
    # TODO: Implement solution
    pass`}}},{title:"N-Queens",platform:"LeetCode",link:"https://leetcode.com/problems/n-queens/",content:{description:"Solution for N-Queens. Logic and implementation details coming soon.",code:{cpp:`// C++ Solution for N-Queens
// This solution is currently being prepared.

void solve() {
    // TODO: Implement solution
}`,java:`// Java Solution for N-Queens
// This solution is currently being prepared.

class Solution {
    public void solve() {
        // TODO: Implement solution
    }
}`,python:`# Python Solution for N-Queens
# This solution is currently being prepared.

def solve():
    # TODO: Implement solution
    pass`}}},{title:"Rat in a Maze",platform:"GeeksForGeeks",link:"https://practice.geeksforgeeks.org/problems/rat-in-a-maze-problem/1",content:{description:"Solution for Rat in a Maze. Logic and implementation details coming soon.",code:{cpp:`// C++ Solution for Rat in a Maze
// This solution is currently being prepared.

void solve() {
    // TODO: Implement solution
}`,java:`// Java Solution for Rat in a Maze
// This solution is currently being prepared.

class Solution {
    public void solve() {
        // TODO: Implement solution
    }
}`,python:`# Python Solution for Rat in a Maze
# This solution is currently being prepared.

def solve():
    # TODO: Implement solution
    pass`}}},{title:"Word Break",platform:"LeetCode",link:"https://leetcode.com/problems/word-break/",content:{description:"Solution for Word Break. Logic and implementation details coming soon.",code:{cpp:`// C++ Solution for Word Break
// This solution is currently being prepared.

void solve() {
    // TODO: Implement solution
}`,java:`// Java Solution for Word Break
// This solution is currently being prepared.

class Solution {
    public void solve() {
        // TODO: Implement solution
    }
}`,python:`# Python Solution for Word Break
# This solution is currently being prepared.

def solve():
    # TODO: Implement solution
    pass`}}},{title:"M-Coloring Problem",platform:"GeeksForGeeks",link:"https://practice.geeksforgeeks.org/problems/m-coloring-problem-1587115620/1",content:{description:"Solution for M-Coloring Problem. Logic and implementation details coming soon.",code:{cpp:`// C++ Solution for M-Coloring Problem
// This solution is currently being prepared.

void solve() {
    // TODO: Implement solution
}`,java:`// Java Solution for M-Coloring Problem
// This solution is currently being prepared.

class Solution {
    public void solve() {
        // TODO: Implement solution
    }
}`,python:`# Python Solution for M-Coloring Problem
# This solution is currently being prepared.

def solve():
    # TODO: Implement solution
    pass`}}},{title:"Sudoku Solver",platform:"LeetCode",link:"https://leetcode.com/problems/sudoku-solver/",content:{description:"Solution for Sudoku Solver. Logic and implementation details coming soon.",code:{cpp:`// C++ Solution for Sudoku Solver
// This solution is currently being prepared.

void solve() {
    // TODO: Implement solution
}`,java:`// Java Solution for Sudoku Solver
// This solution is currently being prepared.

class Solution {
    public void solve() {
        // TODO: Implement solution
    }
}`,python:`# Python Solution for Sudoku Solver
# This solution is currently being prepared.

def solve():
    # TODO: Implement solution
    pass`}}},{title:"Expression Add Operators",platform:"LeetCode",link:"https://leetcode.com/problems/expression-add-operators/",content:{description:"Solution for Expression Add Operators. Logic and implementation details coming soon.",code:{cpp:`// C++ Solution for Expression Add Operators
// This solution is currently being prepared.

void solve() {
    // TODO: Implement solution
}`,java:`// Java Solution for Expression Add Operators
// This solution is currently being prepared.

class Solution {
    public void solve() {
        // TODO: Implement solution
    }
}`,python:`# Python Solution for Expression Add Operators
# This solution is currently being prepared.

def solve():
    # TODO: Implement solution
    pass`}}}]}]},{title:"Bit Manipulation [Concepts & Problems]",totalProblems:18,subtopics:[{title:"Learn Bit Manipulation",problems:[{title:"Introduction to Bit Manipulation",platform:"GeeksForGeeks",link:"https://practice.geeksforgeeks.org/problems/bit-manipulation-1666686020/1",content:{description:"Solution for Introduction to Bit Manipulation. Logic and implementation details coming soon.",code:{cpp:`// C++ Solution for Introduction to Bit Manipulation
// This solution is currently being prepared.

void solve() {
    // TODO: Implement solution
}`,java:`// Java Solution for Introduction to Bit Manipulation
// This solution is currently being prepared.

class Solution {
    public void solve() {
        // TODO: Implement solution
    }
}`,python:`# Python Solution for Introduction to Bit Manipulation
# This solution is currently being prepared.

def solve():
    # TODO: Implement solution
    pass`}}},{title:"Check if ith bit is set",platform:"GeeksForGeeks",link:"https://practice.geeksforgeeks.org/problems/check-whether-k-th-bit-is-set-or-not-1587115620/1",content:{description:"Solution for Check if ith bit is set. Logic and implementation details coming soon.",code:{cpp:`// C++ Solution for Check if ith bit is set
// This solution is currently being prepared.

void solve() {
    // TODO: Implement solution
}`,java:`// Java Solution for Check if ith bit is set
// This solution is currently being prepared.

class Solution {
    public void solve() {
        // TODO: Implement solution
    }
}`,python:`# Python Solution for Check if ith bit is set
# This solution is currently being prepared.

def solve():
    # TODO: Implement solution
    pass`}}},{title:"Check if a number is odd",platform:"GeeksForGeeks",link:"https://practice.geeksforgeeks.org/problems/odd-or-even3618/1",content:{description:"Solution for Check if a number is odd. Logic and implementation details coming soon.",code:{cpp:`// C++ Solution for Check if a number is odd
// This solution is currently being prepared.

void solve() {
    // TODO: Implement solution
}`,java:`// Java Solution for Check if a number is odd
// This solution is currently being prepared.

class Solution {
    public void solve() {
        // TODO: Implement solution
    }
}`,python:`# Python Solution for Check if a number is odd
# This solution is currently being prepared.

def solve():
    # TODO: Implement solution
    pass`}}},{title:"Check if a number is power of 2",platform:"LeetCode",link:"https://leetcode.com/problems/power-of-two/",content:{description:"Solution for Check if a number is power of 2. Logic and implementation details coming soon.",code:{cpp:`// C++ Solution for Check if a number is power of 2
// This solution is currently being prepared.

void solve() {
    // TODO: Implement solution
}`,java:`// Java Solution for Check if a number is power of 2
// This solution is currently being prepared.

class Solution {
    public void solve() {
        // TODO: Implement solution
    }
}`,python:`# Python Solution for Check if a number is power of 2
# This solution is currently being prepared.

def solve():
    # TODO: Implement solution
    pass`}}},{title:"Count total set bits",platform:"GeeksForGeeks",link:"https://practice.geeksforgeeks.org/problems/count-total-set-bits-1587115620/1",content:{description:"Solution for Count total set bits. Logic and implementation details coming soon.",code:{cpp:`// C++ Solution for Count total set bits
// This solution is currently being prepared.

void solve() {
    // TODO: Implement solution
}`,java:`// Java Solution for Count total set bits
// This solution is currently being prepared.

class Solution {
    public void solve() {
        // TODO: Implement solution
    }
}`,python:`# Python Solution for Count total set bits
# This solution is currently being prepared.

def solve():
    # TODO: Implement solution
    pass`}}},{title:"Set/Unset ith bit",platform:"GeeksForGeeks",link:"https://practice.geeksforgeeks.org/problems/set-kth-bit3724/1",content:{description:"Solution for Set/Unset ith bit. Logic and implementation details coming soon.",code:{cpp:`// C++ Solution for Set/Unset ith bit
// This solution is currently being prepared.

void solve() {
    // TODO: Implement solution
}`,java:`// Java Solution for Set/Unset ith bit
// This solution is currently being prepared.

class Solution {
    public void solve() {
        // TODO: Implement solution
    }
}`,python:`# Python Solution for Set/Unset ith bit
# This solution is currently being prepared.

def solve():
    # TODO: Implement solution
    pass`}}},{title:"Swap two numbers",platform:"GeeksForGeeks",link:"https://practice.geeksforgeeks.org/problems/swap-two-numbers3844/1",content:{description:"Solution for Swap two numbers. Logic and implementation details coming soon.",code:{cpp:`// C++ Solution for Swap two numbers
// This solution is currently being prepared.

void solve() {
    // TODO: Implement solution
}`,java:`// Java Solution for Swap two numbers
// This solution is currently being prepared.

class Solution {
    public void solve() {
        // TODO: Implement solution
    }
}`,python:`# Python Solution for Swap two numbers
# This solution is currently being prepared.

def solve():
    # TODO: Implement solution
    pass`}}},{title:"Divide two integers without using multiplication, division and mod operator",platform:"LeetCode",link:"https://leetcode.com/problems/divide-two-integers/",content:{description:"Solution for Divide two integers without using multiplication, division and mod operator. Logic and implementation details coming soon.",code:{cpp:`// C++ Solution for Divide two integers without using multiplication, division and mod operator
// This solution is currently being prepared.

void solve() {
    // TODO: Implement solution
}`,java:`// Java Solution for Divide two integers without using multiplication, division and mod operator
// This solution is currently being prepared.

class Solution {
    public void solve() {
        // TODO: Implement solution
    }
}`,python:`# Python Solution for Divide two integers without using multiplication, division and mod operator
# This solution is currently being prepared.

def solve():
    # TODO: Implement solution
    pass`}}}]},{title:"Interview Problems",problems:[{title:"Count number of bits to be flipped to convert A to B",platform:"GeeksForGeeks",link:"https://practice.geeksforgeeks.org/problems/bit-difference-1587115620/1",content:{description:"Solution for Count number of bits to be flipped to convert A to B. Logic and implementation details coming soon.",code:{cpp:`// C++ Solution for Count number of bits to be flipped to convert A to B
// This solution is currently being prepared.

void solve() {
    // TODO: Implement solution
}`,java:`// Java Solution for Count number of bits to be flipped to convert A to B
// This solution is currently being prepared.

class Solution {
    public void solve() {
        // TODO: Implement solution
    }
}`,python:`# Python Solution for Count number of bits to be flipped to convert A to B
# This solution is currently being prepared.

def solve():
    # TODO: Implement solution
    pass`}}},{title:"Find the number that appears odd number of times",platform:"GeeksForGeeks",link:"https://practice.geeksforgeeks.org/problems/find-the-odd-occurence4820/1",content:{description:"Solution for Find the number that appears odd number of times. Logic and implementation details coming soon.",code:{cpp:`// C++ Solution for Find the number that appears odd number of times
// This solution is currently being prepared.

void solve() {
    // TODO: Implement solution
}`,java:`// Java Solution for Find the number that appears odd number of times
// This solution is currently being prepared.

class Solution {
    public void solve() {
        // TODO: Implement solution
    }
}`,python:`# Python Solution for Find the number that appears odd number of times
# This solution is currently being prepared.

def solve():
    # TODO: Implement solution
    pass`}}},{title:"Power Set",platform:"LeetCode",link:"https://leetcode.com/problems/subsets/",content:{description:"Solution for Power Set. Logic and implementation details coming soon.",code:{cpp:`// C++ Solution for Power Set
// This solution is currently being prepared.

void solve() {
    // TODO: Implement solution
}`,java:`// Java Solution for Power Set
// This solution is currently being prepared.

class Solution {
    public void solve() {
        // TODO: Implement solution
    }
}`,python:`# Python Solution for Power Set
# This solution is currently being prepared.

def solve():
    # TODO: Implement solution
    pass`}}},{title:"Find XOR of numbers from L to R",platform:"GeeksForGeeks",link:"https://practice.geeksforgeeks.org/problems/find-xor-of-numbers-from-l-to-r/1",content:{description:"Solution for Find XOR of numbers from L to R. Logic and implementation details coming soon.",code:{cpp:`// C++ Solution for Find XOR of numbers from L to R
// This solution is currently being prepared.

void solve() {
    // TODO: Implement solution
}`,java:`// Java Solution for Find XOR of numbers from L to R
// This solution is currently being prepared.

class Solution {
    public void solve() {
        // TODO: Implement solution
    }
}`,python:`# Python Solution for Find XOR of numbers from L to R
# This solution is currently being prepared.

def solve():
    # TODO: Implement solution
    pass`}}},{title:"Find the two numbers appearing odd number of times",platform:"GeeksForGeeks",link:"https://practice.geeksforgeeks.org/problems/two-numbers-with-odd-occurrences5846/1",content:{description:"Solution for Find the two numbers appearing odd number of times. Logic and implementation details coming soon.",code:{cpp:`// C++ Solution for Find the two numbers appearing odd number of times
// This solution is currently being prepared.

void solve() {
    // TODO: Implement solution
}`,java:`// Java Solution for Find the two numbers appearing odd number of times
// This solution is currently being prepared.

class Solution {
    public void solve() {
        // TODO: Implement solution
    }
}`,python:`# Python Solution for Find the two numbers appearing odd number of times
# This solution is currently being prepared.

def solve():
    # TODO: Implement solution
    pass`}}},{title:"Single Number III",platform:"LeetCode",link:"https://leetcode.com/problems/single-number-iii/",content:{description:"Solution for Single Number III. Logic and implementation details coming soon.",code:{cpp:`// C++ Solution for Single Number III
// This solution is currently being prepared.

void solve() {
    // TODO: Implement solution
}`,java:`// Java Solution for Single Number III
// This solution is currently being prepared.

class Solution {
    public void solve() {
        // TODO: Implement solution
    }
}`,python:`# Python Solution for Single Number III
# This solution is currently being prepared.

def solve():
    # TODO: Implement solution
    pass`}}},{title:"Prime Factorization using Sieve",platform:"GeeksForGeeks",link:"https://practice.geeksforgeeks.org/problems/prime-factorization-using-sieve/1",content:{description:"Solution for Prime Factorization using Sieve. Logic and implementation details coming soon.",code:{cpp:`// C++ Solution for Prime Factorization using Sieve
// This solution is currently being prepared.

void solve() {
    // TODO: Implement solution
}`,java:`// Java Solution for Prime Factorization using Sieve
// This solution is currently being prepared.

class Solution {
    public void solve() {
        // TODO: Implement solution
    }
}`,python:`# Python Solution for Prime Factorization using Sieve
# This solution is currently being prepared.

def solve():
    # TODO: Implement solution
    pass`}}}]}]},{title:"Stack and Queues",totalProblems:30,subtopics:[{title:"Learning",problems:[{title:"Implement Stack using Arrays",platform:"GeeksForGeeks",link:"https://practice.geeksforgeeks.org/problems/implement-stack-using-array/1",content:{description:"Solution for Implement Stack using Arrays. Logic and implementation details coming soon.",code:{cpp:`// C++ Solution for Implement Stack using Arrays
// This solution is currently being prepared.

void solve() {
    // TODO: Implement solution
}`,java:`// Java Solution for Implement Stack using Arrays
// This solution is currently being prepared.

class Solution {
    public void solve() {
        // TODO: Implement solution
    }
}`,python:`# Python Solution for Implement Stack using Arrays
# This solution is currently being prepared.

def solve():
    # TODO: Implement solution
    pass`}}},{title:"Implement Queue using Arrays",platform:"GeeksForGeeks",link:"https://practice.geeksforgeeks.org/problems/implement-queue-using-array/1",content:{description:"Solution for Implement Queue using Arrays. Logic and implementation details coming soon.",code:{cpp:`// C++ Solution for Implement Queue using Arrays
// This solution is currently being prepared.

void solve() {
    // TODO: Implement solution
}`,java:`// Java Solution for Implement Queue using Arrays
// This solution is currently being prepared.

class Solution {
    public void solve() {
        // TODO: Implement solution
    }
}`,python:`# Python Solution for Implement Queue using Arrays
# This solution is currently being prepared.

def solve():
    # TODO: Implement solution
    pass`}}},{title:"Implement Stack using Queue",platform:"LeetCode",link:"https://leetcode.com/problems/implement-stack-using-queues/",content:{description:"Solution for Implement Stack using Queue. Logic and implementation details coming soon.",code:{cpp:`// C++ Solution for Implement Stack using Queue
// This solution is currently being prepared.

void solve() {
    // TODO: Implement solution
}`,java:`// Java Solution for Implement Stack using Queue
// This solution is currently being prepared.

class Solution {
    public void solve() {
        // TODO: Implement solution
    }
}`,python:`# Python Solution for Implement Stack using Queue
# This solution is currently being prepared.

def solve():
    # TODO: Implement solution
    pass`}}},{title:"Implement Queue using Stack",platform:"LeetCode",link:"https://leetcode.com/problems/implement-queue-using-stacks/",content:{description:"Solution for Implement Queue using Stack. Logic and implementation details coming soon.",code:{cpp:`// C++ Solution for Implement Queue using Stack
// This solution is currently being prepared.

void solve() {
    // TODO: Implement solution
}`,java:`// Java Solution for Implement Queue using Stack
// This solution is currently being prepared.

class Solution {
    public void solve() {
        // TODO: Implement solution
    }
}`,python:`# Python Solution for Implement Queue using Stack
# This solution is currently being prepared.

def solve():
    # TODO: Implement solution
    pass`}}},{title:"Valid Parentheses",platform:"LeetCode",link:"https://leetcode.com/problems/valid-parentheses/",content:{description:"Solution for Valid Parentheses. Logic and implementation details coming soon.",code:{cpp:`// C++ Solution for Valid Parentheses
// This solution is currently being prepared.

void solve() {
    // TODO: Implement solution
}`,java:`// Java Solution for Valid Parentheses
// This solution is currently being prepared.

class Solution {
    public void solve() {
        // TODO: Implement solution
    }
}`,python:`# Python Solution for Valid Parentheses
# This solution is currently being prepared.

def solve():
    # TODO: Implement solution
    pass`}}}]},{title:"Prefix, Infix, Postfix Problems",problems:[{title:"Infix to Postfix",platform:"GeeksForGeeks",link:"https://practice.geeksforgeeks.org/problems/infix-to-postfix-1587115620/1",content:{description:"Solution for Infix to Postfix. Logic and implementation details coming soon.",code:{cpp:`// C++ Solution for Infix to Postfix
// This solution is currently being prepared.

void solve() {
    // TODO: Implement solution
}`,java:`// Java Solution for Infix to Postfix
// This solution is currently being prepared.

class Solution {
    public void solve() {
        // TODO: Implement solution
    }
}`,python:`# Python Solution for Infix to Postfix
# This solution is currently being prepared.

def solve():
    # TODO: Implement solution
    pass`}}},{title:"Prefix to Infix",platform:"GeeksForGeeks",link:"https://practice.geeksforgeeks.org/problems/prefix-to-infix-conversion/1",content:{description:"Solution for Prefix to Infix. Logic and implementation details coming soon.",code:{cpp:`// C++ Solution for Prefix to Infix
// This solution is currently being prepared.

void solve() {
    // TODO: Implement solution
}`,java:`// Java Solution for Prefix to Infix
// This solution is currently being prepared.

class Solution {
    public void solve() {
        // TODO: Implement solution
    }
}`,python:`# Python Solution for Prefix to Infix
# This solution is currently being prepared.

def solve():
    # TODO: Implement solution
    pass`}}},{title:"Prefix to Postfix",platform:"GeeksForGeeks",link:"https://practice.geeksforgeeks.org/problems/prefix-to-postfix-conversion/1",content:{description:"Solution for Prefix to Postfix. Logic and implementation details coming soon.",code:{cpp:`// C++ Solution for Prefix to Postfix
// This solution is currently being prepared.

void solve() {
    // TODO: Implement solution
}`,java:`// Java Solution for Prefix to Postfix
// This solution is currently being prepared.

class Solution {
    public void solve() {
        // TODO: Implement solution
    }
}`,python:`# Python Solution for Prefix to Postfix
# This solution is currently being prepared.

def solve():
    # TODO: Implement solution
    pass`}}},{title:"Postfix to Prefix",platform:"GeeksForGeeks",link:"https://practice.geeksforgeeks.org/problems/postfix-to-prefix-conversion/1",content:{description:"Solution for Postfix to Prefix. Logic and implementation details coming soon.",code:{cpp:`// C++ Solution for Postfix to Prefix
// This solution is currently being prepared.

void solve() {
    // TODO: Implement solution
}`,java:`// Java Solution for Postfix to Prefix
// This solution is currently being prepared.

class Solution {
    public void solve() {
        // TODO: Implement solution
    }
}`,python:`# Python Solution for Postfix to Prefix
# This solution is currently being prepared.

def solve():
    # TODO: Implement solution
    pass`}}},{title:"Postfix to Infix",platform:"GeeksForGeeks",link:"https://practice.geeksforgeeks.org/problems/postfix-to-infix-conversion/1",content:{description:"Solution for Postfix to Infix. Logic and implementation details coming soon.",code:{cpp:`// C++ Solution for Postfix to Infix
// This solution is currently being prepared.

void solve() {
    // TODO: Implement solution
}`,java:`// Java Solution for Postfix to Infix
// This solution is currently being prepared.

class Solution {
    public void solve() {
        // TODO: Implement solution
    }
}`,python:`# Python Solution for Postfix to Infix
# This solution is currently being prepared.

def solve():
    # TODO: Implement solution
    pass`}}}]},{title:"Monotonic Stack/Queue Problems",problems:[{title:"Next Greater Element",platform:"LeetCode",link:"https://leetcode.com/problems/next-greater-element-i/",content:{description:"Solution for Next Greater Element. Logic and implementation details coming soon.",code:{cpp:`// C++ Solution for Next Greater Element
// This solution is currently being prepared.

void solve() {
    // TODO: Implement solution
}`,java:`// Java Solution for Next Greater Element
// This solution is currently being prepared.

class Solution {
    public void solve() {
        // TODO: Implement solution
    }
}`,python:`# Python Solution for Next Greater Element
# This solution is currently being prepared.

def solve():
    # TODO: Implement solution
    pass`}}},{title:"Next Greater Element II",platform:"LeetCode",link:"https://leetcode.com/problems/next-greater-element-ii/",content:{description:"Solution for Next Greater Element II. Logic and implementation details coming soon.",code:{cpp:`// C++ Solution for Next Greater Element II
// This solution is currently being prepared.

void solve() {
    // TODO: Implement solution
}`,java:`// Java Solution for Next Greater Element II
// This solution is currently being prepared.

class Solution {
    public void solve() {
        // TODO: Implement solution
    }
}`,python:`# Python Solution for Next Greater Element II
# This solution is currently being prepared.

def solve():
    # TODO: Implement solution
    pass`}}},{title:"Next Smaller Element",platform:"GeeksForGeeks",link:"https://practice.geeksforgeeks.org/problems/smallest-number-on-left3403/1",content:{description:"Solution for Next Smaller Element. Logic and implementation details coming soon.",code:{cpp:`// C++ Solution for Next Smaller Element
// This solution is currently being prepared.

void solve() {
    // TODO: Implement solution
}`,java:`// Java Solution for Next Smaller Element
// This solution is currently being prepared.

class Solution {
    public void solve() {
        // TODO: Implement solution
    }
}`,python:`# Python Solution for Next Smaller Element
# This solution is currently being prepared.

def solve():
    # TODO: Implement solution
    pass`}}},{title:"Trapping Rain Water",platform:"LeetCode",link:"https://leetcode.com/problems/trapping-rain-water/",content:{description:"Solution for Trapping Rain Water. Logic and implementation details coming soon.",code:{cpp:`// C++ Solution for Trapping Rain Water
// This solution is currently being prepared.

void solve() {
    // TODO: Implement solution
}`,java:`// Java Solution for Trapping Rain Water
// This solution is currently being prepared.

class Solution {
    public void solve() {
        // TODO: Implement solution
    }
}`,python:`# Python Solution for Trapping Rain Water
# This solution is currently being prepared.

def solve():
    # TODO: Implement solution
    pass`}}},{title:"Sum of subarray minimum",platform:"LeetCode",link:"https://leetcode.com/problems/sum-of-subarray-minimums/",content:{description:"Solution for Sum of subarray minimum. Logic and implementation details coming soon.",code:{cpp:`// C++ Solution for Sum of subarray minimum
// This solution is currently being prepared.

void solve() {
    // TODO: Implement solution
}`,java:`// Java Solution for Sum of subarray minimum
// This solution is currently being prepared.

class Solution {
    public void solve() {
        // TODO: Implement solution
    }
}`,python:`# Python Solution for Sum of subarray minimum
# This solution is currently being prepared.

def solve():
    # TODO: Implement solution
    pass`}}},{title:"Asteroid Collision",platform:"LeetCode",link:"https://leetcode.com/problems/asteroid-collision/",content:{description:"Solution for Asteroid Collision. Logic and implementation details coming soon.",code:{cpp:`// C++ Solution for Asteroid Collision
// This solution is currently being prepared.

void solve() {
    // TODO: Implement solution
}`,java:`// Java Solution for Asteroid Collision
// This solution is currently being prepared.

class Solution {
    public void solve() {
        // TODO: Implement solution
    }
}`,python:`# Python Solution for Asteroid Collision
# This solution is currently being prepared.

def solve():
    # TODO: Implement solution
    pass`}}},{title:"Sum of subarray ranges",platform:"LeetCode",link:"https://leetcode.com/problems/sum-of-subarray-ranges/",content:{description:"Solution for Sum of subarray ranges. Logic and implementation details coming soon.",code:{cpp:`// C++ Solution for Sum of subarray ranges
// This solution is currently being prepared.

void solve() {
    // TODO: Implement solution
}`,java:`// Java Solution for Sum of subarray ranges
// This solution is currently being prepared.

class Solution {
    public void solve() {
        // TODO: Implement solution
    }
}`,python:`# Python Solution for Sum of subarray ranges
# This solution is currently being prepared.

def solve():
    # TODO: Implement solution
    pass`}}},{title:"Remove k Digits",platform:"LeetCode",link:"https://leetcode.com/problems/remove-k-digits/",content:{description:"Solution for Remove k Digits. Logic and implementation details coming soon.",code:{cpp:`// C++ Solution for Remove k Digits
// This solution is currently being prepared.

void solve() {
    // TODO: Implement solution
}`,java:`// Java Solution for Remove k Digits
// This solution is currently being prepared.

class Solution {
    public void solve() {
        // TODO: Implement solution
    }
}`,python:`# Python Solution for Remove k Digits
# This solution is currently being prepared.

def solve():
    # TODO: Implement solution
    pass`}}},{title:"Largest Rectangle in Histogram",platform:"LeetCode",link:"https://leetcode.com/problems/largest-rectangle-in-histogram/",content:{description:"Solution for Largest Rectangle in Histogram. Logic and implementation details coming soon.",code:{cpp:`// C++ Solution for Largest Rectangle in Histogram
// This solution is currently being prepared.

void solve() {
    // TODO: Implement solution
}`,java:`// Java Solution for Largest Rectangle in Histogram
// This solution is currently being prepared.

class Solution {
    public void solve() {
        // TODO: Implement solution
    }
}`,python:`# Python Solution for Largest Rectangle in Histogram
# This solution is currently being prepared.

def solve():
    # TODO: Implement solution
    pass`}}},{title:"Maximal Rectangles",platform:"LeetCode",link:"https://leetcode.com/problems/maximal-rectangle/",content:{description:"Solution for Maximal Rectangles. Logic and implementation details coming soon.",code:{cpp:`// C++ Solution for Maximal Rectangles
// This solution is currently being prepared.

void solve() {
    // TODO: Implement solution
}`,java:`// Java Solution for Maximal Rectangles
// This solution is currently being prepared.

class Solution {
    public void solve() {
        // TODO: Implement solution
    }
}`,python:`# Python Solution for Maximal Rectangles
# This solution is currently being prepared.

def solve():
    # TODO: Implement solution
    pass`}}}]},{title:"Implementation Problems",problems:[{title:"Sliding Window Maximum",platform:"LeetCode",link:"https://leetcode.com/problems/sliding-window-maximum/",content:{description:"Solution for Sliding Window Maximum. Logic and implementation details coming soon.",code:{cpp:`// C++ Solution for Sliding Window Maximum
// This solution is currently being prepared.

void solve() {
    // TODO: Implement solution
}`,java:`// Java Solution for Sliding Window Maximum
// This solution is currently being prepared.

class Solution {
    public void solve() {
        // TODO: Implement solution
    }
}`,python:`# Python Solution for Sliding Window Maximum
# This solution is currently being prepared.

def solve():
    # TODO: Implement solution
    pass`}}},{title:"Stock span problem",platform:"GeeksForGeeks",link:"https://practice.geeksforgeeks.org/problems/stock-span-problem-1587115621/1",content:{description:"Solution for Stock span problem. Logic and implementation details coming soon.",code:{cpp:`// C++ Solution for Stock span problem
// This solution is currently being prepared.

void solve() {
    // TODO: Implement solution
}`,java:`// Java Solution for Stock span problem
// This solution is currently being prepared.

class Solution {
    public void solve() {
        // TODO: Implement solution
    }
}`,python:`# Python Solution for Stock span problem
# This solution is currently being prepared.

def solve():
    # TODO: Implement solution
    pass`}}},{title:"The Celebrity Problem",platform:"GeeksForGeeks",link:"https://practice.geeksforgeeks.org/problems/the-celebrity-problem/1",content:{description:"Solution for The Celebrity Problem. Logic and implementation details coming soon.",code:{cpp:`// C++ Solution for The Celebrity Problem
// This solution is currently being prepared.

void solve() {
    // TODO: Implement solution
}`,java:`// Java Solution for The Celebrity Problem
// This solution is currently being prepared.

class Solution {
    public void solve() {
        // TODO: Implement solution
    }
}`,python:`# Python Solution for The Celebrity Problem
# This solution is currently being prepared.

def solve():
    # TODO: Implement solution
    pass`}}},{title:"LRU cache",platform:"LeetCode",link:"https://leetcode.com/problems/lru-cache/",content:{description:"Solution for LRU cache. Logic and implementation details coming soon.",code:{cpp:`// C++ Solution for LRU cache
// This solution is currently being prepared.

void solve() {
    // TODO: Implement solution
}`,java:`// Java Solution for LRU cache
// This solution is currently being prepared.

class Solution {
    public void solve() {
        // TODO: Implement solution
    }
}`,python:`# Python Solution for LRU cache
# This solution is currently being prepared.

def solve():
    # TODO: Implement solution
    pass`}}},{title:"LFU Cache",platform:"LeetCode",link:"https://leetcode.com/problems/lfu-cache/",content:{description:"Solution for LFU Cache. Logic and implementation details coming soon.",code:{cpp:`// C++ Solution for LFU Cache
// This solution is currently being prepared.

void solve() {
    // TODO: Implement solution
}`,java:`// Java Solution for LFU Cache
// This solution is currently being prepared.

class Solution {
    public void solve() {
        // TODO: Implement solution
    }
}`,python:`# Python Solution for LFU Cache
# This solution is currently being prepared.

def solve():
    # TODO: Implement solution
    pass`}}}]}]},{title:"Sliding Window & Two Pointer",totalProblems:12,subtopics:[{title:"Medium Problems",problems:[{title:"Longest Substring Without Repeating Characters",platform:"LeetCode",link:"https://leetcode.com/problems/longest-substring-without-repeating-characters/",content:{description:"Approach: Use the Sliding Window technique. Keep a hash map (or array) to store the last seen index of each character. Iterate through the string with a right pointer `r`. If `s[r]` was seen after `l` (left pointer), calculate the length `r - l + 1`, otherwise move `l` to `last_seen[s[r]] + 1`. Update the max length. Time Complexity: O(N), Space Complexity: O(N) (or O(1) for fixed char set).",code:{cpp:"int lengthOfLongestSubstring(string s) {\\n    vector<int> mpp(256, -1);\\n    int left = 0, right = 0;\\n    int n = s.size();\\n    int len = 0;\\n    while (right < n) {\\n        if (mpp[s[right]] != -1) left = max(mpp[s[right]] + 1, left);\\n        mpp[s[right]] = right;\\n        len = max(len, right - left + 1);\\n        right++;\\n    }\\n    return len;\\n}",java:"class Solution {\\n    public int lengthOfLongestSubstring(String s) {\\n        HashMap<Character, Integer> mpp = new HashMap<Character, Integer>();\\n        int left = 0, right = 0;\\n        int n = s.length();\\n        int len = 0;\\n        while (right < n) {\\n            if (mpp.containsKey(s.charAt(right))) left = Math.max(mpp.get(s.charAt(right)) + 1, left);\\n            mpp.put(s.charAt(right), right);\\n            len = Math.max(len, right - left + 1);\\n            right++;\\n        }\\n        return len;\\n    }\\n}",python:"class Solution:\\n    def lengthOfLongestSubstring(self, s: str) -> int:\\n        mpp = {}\\n        left = 0\\n        right = 0\\n        n = len(s)\\n        length = 0\\n        while right < n:\\n            if s[right] in mpp:\\n                left = max(mpp[s[right]] + 1, left)\\n            mpp[s[right]] = right\\n            length = max(length, right - left + 1)\\n            right += 1\\n        return length"}}},{title:"Max Consecutive Ones III",platform:"LeetCode",link:"https://leetcode.com/problems/max-consecutive-ones-iii/",content:{description:"Solution for Max Consecutive Ones III. Logic and implementation details coming soon.",code:{cpp:`// C++ Solution for Max Consecutive Ones III
// This solution is currently being prepared.

void solve() {
    // TODO: Implement solution
}`,java:`// Java Solution for Max Consecutive Ones III
// This solution is currently being prepared.

class Solution {
    public void solve() {
        // TODO: Implement solution
    }
}`,python:`# Python Solution for Max Consecutive Ones III
# This solution is currently being prepared.

def solve():
    # TODO: Implement solution
    pass`}}},{title:"Fruit Into Baskets",platform:"LeetCode",link:"https://leetcode.com/problems/fruit-into-baskets/",content:{description:"Solution for Fruit Into Baskets. Logic and implementation details coming soon.",code:{cpp:`// C++ Solution for Fruit Into Baskets
// This solution is currently being prepared.

void solve() {
    // TODO: Implement solution
}`,java:`// Java Solution for Fruit Into Baskets
// This solution is currently being prepared.

class Solution {
    public void solve() {
        // TODO: Implement solution
    }
}`,python:`# Python Solution for Fruit Into Baskets
# This solution is currently being prepared.

def solve():
    # TODO: Implement solution
    pass`}}},{title:"Longest Repeating Character Replacement",platform:"LeetCode",link:"https://leetcode.com/problems/longest-repeating-character-replacement/",content:{description:"Solution for Longest Repeating Character Replacement. Logic and implementation details coming soon.",code:{cpp:`// C++ Solution for Longest Repeating Character Replacement
// This solution is currently being prepared.

void solve() {
    // TODO: Implement solution
}`,java:`// Java Solution for Longest Repeating Character Replacement
// This solution is currently being prepared.

class Solution {
    public void solve() {
        // TODO: Implement solution
    }
}`,python:`# Python Solution for Longest Repeating Character Replacement
# This solution is currently being prepared.

def solve():
    # TODO: Implement solution
    pass`}}},{title:"Binary Subarrays With Sum",platform:"LeetCode",link:"https://leetcode.com/problems/binary-subarrays-with-sum/",content:{description:"Solution for Binary Subarrays With Sum. Logic and implementation details coming soon.",code:{cpp:`// C++ Solution for Binary Subarrays With Sum
// This solution is currently being prepared.

void solve() {
    // TODO: Implement solution
}`,java:`// Java Solution for Binary Subarrays With Sum
// This solution is currently being prepared.

class Solution {
    public void solve() {
        // TODO: Implement solution
    }
}`,python:`# Python Solution for Binary Subarrays With Sum
# This solution is currently being prepared.

def solve():
    # TODO: Implement solution
    pass`}}},{title:"Count Number of Nice Subarrays",platform:"LeetCode",link:"https://leetcode.com/problems/count-number-of-nice-subarrays/",content:{description:"Solution for Count Number of Nice Subarrays. Logic and implementation details coming soon.",code:{cpp:`// C++ Solution for Count Number of Nice Subarrays
// This solution is currently being prepared.

void solve() {
    // TODO: Implement solution
}`,java:`// Java Solution for Count Number of Nice Subarrays
// This solution is currently being prepared.

class Solution {
    public void solve() {
        // TODO: Implement solution
    }
}`,python:`# Python Solution for Count Number of Nice Subarrays
# This solution is currently being prepared.

def solve():
    # TODO: Implement solution
    pass`}}},{title:"Number of Substrings Containing All Three Characters",platform:"LeetCode",link:"https://leetcode.com/problems/number-of-substrings-containing-all-three-characters/",content:{description:"Solution for Number of Substrings Containing All Three Characters. Logic and implementation details coming soon.",code:{cpp:`// C++ Solution for Number of Substrings Containing All Three Characters
// This solution is currently being prepared.

void solve() {
    // TODO: Implement solution
}`,java:`// Java Solution for Number of Substrings Containing All Three Characters
// This solution is currently being prepared.

class Solution {
    public void solve() {
        // TODO: Implement solution
    }
}`,python:`# Python Solution for Number of Substrings Containing All Three Characters
# This solution is currently being prepared.

def solve():
    # TODO: Implement solution
    pass`}}},{title:"Maximum Points You Can Obtain from Cards",platform:"LeetCode",link:"https://leetcode.com/problems/maximum-points-you-can-obtain-from-cards/",content:{description:"Solution for Maximum Points You Can Obtain from Cards. Logic and implementation details coming soon.",code:{cpp:`// C++ Solution for Maximum Points You Can Obtain from Cards
// This solution is currently being prepared.

void solve() {
    // TODO: Implement solution
}`,java:`// Java Solution for Maximum Points You Can Obtain from Cards
// This solution is currently being prepared.

class Solution {
    public void solve() {
        // TODO: Implement solution
    }
}`,python:`# Python Solution for Maximum Points You Can Obtain from Cards
# This solution is currently being prepared.

def solve():
    # TODO: Implement solution
    pass`}}}]},{title:"Hard Problems",problems:[{title:"Longest Substring with At Most K Distinct Characters",platform:"LeetCode",link:"https://leetcode.com/problems/longest-substring-with-at-most-k-distinct-characters/",content:{description:"Solution for Longest Substring with At Most K Distinct Characters. Logic and implementation details coming soon.",code:{cpp:`// C++ Solution for Longest Substring with At Most K Distinct Characters
// This solution is currently being prepared.

void solve() {
    // TODO: Implement solution
}`,java:`// Java Solution for Longest Substring with At Most K Distinct Characters
// This solution is currently being prepared.

class Solution {
    public void solve() {
        // TODO: Implement solution
    }
}`,python:`# Python Solution for Longest Substring with At Most K Distinct Characters
# This solution is currently being prepared.

def solve():
    # TODO: Implement solution
    pass`}}},{title:"Subarrays with K Different Integers",platform:"LeetCode",link:"https://leetcode.com/problems/subarrays-with-k-different-integers/",content:{description:"Solution for Subarrays with K Different Integers. Logic and implementation details coming soon.",code:{cpp:`// C++ Solution for Subarrays with K Different Integers
// This solution is currently being prepared.

void solve() {
    // TODO: Implement solution
}`,java:`// Java Solution for Subarrays with K Different Integers
// This solution is currently being prepared.

class Solution {
    public void solve() {
        // TODO: Implement solution
    }
}`,python:`# Python Solution for Subarrays with K Different Integers
# This solution is currently being prepared.

def solve():
    # TODO: Implement solution
    pass`}}},{title:"Minimum Window Substring",platform:"LeetCode",link:"https://leetcode.com/problems/minimum-window-substring/",content:{description:"Solution for Minimum Window Substring. Logic and implementation details coming soon.",code:{cpp:`// C++ Solution for Minimum Window Substring
// This solution is currently being prepared.

void solve() {
    // TODO: Implement solution
}`,java:`// Java Solution for Minimum Window Substring
// This solution is currently being prepared.

class Solution {
    public void solve() {
        // TODO: Implement solution
    }
}`,python:`# Python Solution for Minimum Window Substring
# This solution is currently being prepared.

def solve():
    # TODO: Implement solution
    pass`}}},{title:"Minimum Window Subsequence",platform:"LeetCode",link:"https://leetcode.com/problems/minimum-window-subsequence/",content:{description:"Solution for Minimum Window Subsequence. Logic and implementation details coming soon.",code:{cpp:`// C++ Solution for Minimum Window Subsequence
// This solution is currently being prepared.

void solve() {
    // TODO: Implement solution
}`,java:`// Java Solution for Minimum Window Subsequence
// This solution is currently being prepared.

class Solution {
    public void solve() {
        // TODO: Implement solution
    }
}`,python:`# Python Solution for Minimum Window Subsequence
# This solution is currently being prepared.

def solve():
    # TODO: Implement solution
    pass`}}}]}]},{title:"Heaps",totalProblems:17,subtopics:[{title:"Learning",problems:[{title:"Introduction to Priority Queues using Binary Heaps",platform:"GeeksForGeeks",link:"https://practice.geeksforgeeks.org/problems/implementation-of-priority-queue-using-binary-heap/1",content:{description:"Solution for Introduction to Priority Queues using Binary Heaps. Logic and implementation details coming soon.",code:{cpp:`// C++ Solution for Introduction to Priority Queues using Binary Heaps
// This solution is currently being prepared.

void solve() {
    // TODO: Implement solution
}`,java:`// Java Solution for Introduction to Priority Queues using Binary Heaps
// This solution is currently being prepared.

class Solution {
    public void solve() {
        // TODO: Implement solution
    }
}`,python:`# Python Solution for Introduction to Priority Queues using Binary Heaps
# This solution is currently being prepared.

def solve():
    # TODO: Implement solution
    pass`}}},{title:"Min Heap and Max Heap Implementation",platform:"GeeksForGeeks",link:"https://practice.geeksforgeeks.org/problems/operations-on-binary-min-heap/1",content:{description:"Solution for Min Heap and Max Heap Implementation. Logic and implementation details coming soon.",code:{cpp:`// C++ Solution for Min Heap and Max Heap Implementation
// This solution is currently being prepared.

void solve() {
    // TODO: Implement solution
}`,java:`// Java Solution for Min Heap and Max Heap Implementation
// This solution is currently being prepared.

class Solution {
    public void solve() {
        // TODO: Implement solution
    }
}`,python:`# Python Solution for Min Heap and Max Heap Implementation
# This solution is currently being prepared.

def solve():
    # TODO: Implement solution
    pass`}}},{title:"Check if an array represents a heap",platform:"GeeksForGeeks",link:"https://practice.geeksforgeeks.org/problems/does-array-represent-heap4345/1",content:{description:"Solution for Check if an array represents a heap. Logic and implementation details coming soon.",code:{cpp:`// C++ Solution for Check if an array represents a heap
// This solution is currently being prepared.

void solve() {
    // TODO: Implement solution
}`,java:`// Java Solution for Check if an array represents a heap
// This solution is currently being prepared.

class Solution {
    public void solve() {
        // TODO: Implement solution
    }
}`,python:`# Python Solution for Check if an array represents a heap
# This solution is currently being prepared.

def solve():
    # TODO: Implement solution
    pass`}}},{title:"Convert min Heap to max Heap",platform:"GeeksForGeeks",link:"https://practice.geeksforgeeks.org/problems/convert-min-heap-to-max-heap-1666385109/1",content:{description:"Solution for Convert min Heap to max Heap. Logic and implementation details coming soon.",code:{cpp:`// C++ Solution for Convert min Heap to max Heap
// This solution is currently being prepared.

void solve() {
    // TODO: Implement solution
}`,java:`// Java Solution for Convert min Heap to max Heap
// This solution is currently being prepared.

class Solution {
    public void solve() {
        // TODO: Implement solution
    }
}`,python:`# Python Solution for Convert min Heap to max Heap
# This solution is currently being prepared.

def solve():
    # TODO: Implement solution
    pass`}}}]},{title:"Medium Problems",problems:[{title:"Kth Largest Element in an Array",platform:"LeetCode",link:"https://leetcode.com/problems/kth-largest-element-in-an-array/",content:{description:"Solution for Kth Largest Element in an Array. Logic and implementation details coming soon.",code:{cpp:`// C++ Solution for Kth Largest Element in an Array
// This solution is currently being prepared.

void solve() {
    // TODO: Implement solution
}`,java:`// Java Solution for Kth Largest Element in an Array
// This solution is currently being prepared.

class Solution {
    public void solve() {
        // TODO: Implement solution
    }
}`,python:`# Python Solution for Kth Largest Element in an Array
# This solution is currently being prepared.

def solve():
    # TODO: Implement solution
    pass`}}},{title:"Kth Smallest Element in an Array",platform:"GeeksForGeeks",link:"https://practice.geeksforgeeks.org/problems/kth-smallest-element5635/1",content:{description:"Solution for Kth Smallest Element in an Array. Logic and implementation details coming soon.",code:{cpp:`// C++ Solution for Kth Smallest Element in an Array
// This solution is currently being prepared.

void solve() {
    // TODO: Implement solution
}`,java:`// Java Solution for Kth Smallest Element in an Array
// This solution is currently being prepared.

class Solution {
    public void solve() {
        // TODO: Implement solution
    }
}`,python:`# Python Solution for Kth Smallest Element in an Array
# This solution is currently being prepared.

def solve():
    # TODO: Implement solution
    pass`}}},{title:"Sort K sorted array",platform:"GeeksForGeeks",link:"https://practice.geeksforgeeks.org/problems/nearly-sorted-1587115620/1",content:{description:"Solution for Sort K sorted array. Logic and implementation details coming soon.",code:{cpp:`// C++ Solution for Sort K sorted array
// This solution is currently being prepared.

void solve() {
    // TODO: Implement solution
}`,java:`// Java Solution for Sort K sorted array
// This solution is currently being prepared.

class Solution {
    public void solve() {
        // TODO: Implement solution
    }
}`,python:`# Python Solution for Sort K sorted array
# This solution is currently being prepared.

def solve():
    # TODO: Implement solution
    pass`}}},{title:"Merge K Sorted Arrays",platform:"GeeksForGeeks",link:"https://practice.geeksforgeeks.org/problems/merge-k-sorted-arrays/1",content:{description:"Solution for Merge K Sorted Arrays. Logic and implementation details coming soon.",code:{cpp:`// C++ Solution for Merge K Sorted Arrays
// This solution is currently being prepared.

void solve() {
    // TODO: Implement solution
}`,java:`// Java Solution for Merge K Sorted Arrays
// This solution is currently being prepared.

class Solution {
    public void solve() {
        // TODO: Implement solution
    }
}`,python:`# Python Solution for Merge K Sorted Arrays
# This solution is currently being prepared.

def solve():
    # TODO: Implement solution
    pass`}}},{title:"Merge K Sorted Lists",platform:"LeetCode",link:"https://leetcode.com/problems/merge-k-sorted-lists/",content:{description:"Solution for Merge K Sorted Lists. Logic and implementation details coming soon.",code:{cpp:`// C++ Solution for Merge K Sorted Lists
// This solution is currently being prepared.

void solve() {
    // TODO: Implement solution
}`,java:`// Java Solution for Merge K Sorted Lists
// This solution is currently being prepared.

class Solution {
    public void solve() {
        // TODO: Implement solution
    }
}`,python:`# Python Solution for Merge K Sorted Lists
# This solution is currently being prepared.

def solve():
    # TODO: Implement solution
    pass`}}},{title:"Replace elements by its rank in the array",platform:"GeeksForGeeks",link:"https://practice.geeksforgeeks.org/problems/replace-elements-by-its-rank-in-the-array/1",content:{description:"Solution for Replace elements by its rank in the array. Logic and implementation details coming soon.",code:{cpp:`// C++ Solution for Replace elements by its rank in the array
// This solution is currently being prepared.

void solve() {
    // TODO: Implement solution
}`,java:`// Java Solution for Replace elements by its rank in the array
// This solution is currently being prepared.

class Solution {
    public void solve() {
        // TODO: Implement solution
    }
}`,python:`# Python Solution for Replace elements by its rank in the array
# This solution is currently being prepared.

def solve():
    # TODO: Implement solution
    pass`}}},{title:"Task Scheduler",platform:"LeetCode",link:"https://leetcode.com/problems/task-scheduler/",content:{description:"Solution for Task Scheduler. Logic and implementation details coming soon.",code:{cpp:`// C++ Solution for Task Scheduler
// This solution is currently being prepared.

void solve() {
    // TODO: Implement solution
}`,java:`// Java Solution for Task Scheduler
// This solution is currently being prepared.

class Solution {
    public void solve() {
        // TODO: Implement solution
    }
}`,python:`# Python Solution for Task Scheduler
# This solution is currently being prepared.

def solve():
    # TODO: Implement solution
    pass`}}},{title:"Hand of Straights",platform:"LeetCode",link:"https://leetcode.com/problems/hand-of-straights/",content:{description:"Solution for Hand of Straights. Logic and implementation details coming soon.",code:{cpp:`// C++ Solution for Hand of Straights
// This solution is currently being prepared.

void solve() {
    // TODO: Implement solution
}`,java:`// Java Solution for Hand of Straights
// This solution is currently being prepared.

class Solution {
    public void solve() {
        // TODO: Implement solution
    }
}`,python:`# Python Solution for Hand of Straights
# This solution is currently being prepared.

def solve():
    # TODO: Implement solution
    pass`}}}]},{title:"Hard Problems",problems:[{title:"Design twitter",platform:"LeetCode",link:"https://leetcode.com/problems/design-twitter/",content:{description:"Solution for Design twitter. Logic and implementation details coming soon.",code:{cpp:`// C++ Solution for Design twitter
// This solution is currently being prepared.

void solve() {
    // TODO: Implement solution
}`,java:`// Java Solution for Design twitter
// This solution is currently being prepared.

class Solution {
    public void solve() {
        // TODO: Implement solution
    }
}`,python:`# Python Solution for Design twitter
# This solution is currently being prepared.

def solve():
    # TODO: Implement solution
    pass`}}},{title:"Connect n ropes with minimum cost",platform:"GeeksForGeeks",link:"https://practice.geeksforgeeks.org/problems/minimum-cost-of-ropes-1587115620/1",content:{description:"Solution for Connect n ropes with minimum cost. Logic and implementation details coming soon.",code:{cpp:`// C++ Solution for Connect n ropes with minimum cost
// This solution is currently being prepared.

void solve() {
    // TODO: Implement solution
}`,java:`// Java Solution for Connect n ropes with minimum cost
// This solution is currently being prepared.

class Solution {
    public void solve() {
        // TODO: Implement solution
    }
}`,python:`# Python Solution for Connect n ropes with minimum cost
# This solution is currently being prepared.

def solve():
    # TODO: Implement solution
    pass`}}},{title:"Kth Largest Element in a Stream",platform:"LeetCode",link:"https://leetcode.com/problems/kth-largest-element-in-a-stream/",content:{description:"Solution for Kth Largest Element in a Stream. Logic and implementation details coming soon.",code:{cpp:`// C++ Solution for Kth Largest Element in a Stream
// This solution is currently being prepared.

void solve() {
    // TODO: Implement solution
}`,java:`// Java Solution for Kth Largest Element in a Stream
// This solution is currently being prepared.

class Solution {
    public void solve() {
        // TODO: Implement solution
    }
}`,python:`# Python Solution for Kth Largest Element in a Stream
# This solution is currently being prepared.

def solve():
    # TODO: Implement solution
    pass`}}},{title:"Find Median from Data Stream",platform:"LeetCode",link:"https://leetcode.com/problems/find-median-from-data-stream/",content:{description:"Solution for Find Median from Data Stream. Logic and implementation details coming soon.",code:{cpp:`// C++ Solution for Find Median from Data Stream
// This solution is currently being prepared.

void solve() {
    // TODO: Implement solution
}`,java:`// Java Solution for Find Median from Data Stream
// This solution is currently being prepared.

class Solution {
    public void solve() {
        // TODO: Implement solution
    }
}`,python:`# Python Solution for Find Median from Data Stream
# This solution is currently being prepared.

def solve():
    # TODO: Implement solution
    pass`}}},{title:"K most frequent elements",platform:"LeetCode",link:"https://leetcode.com/problems/top-k-frequent-elements/",content:{description:"Solution for K most frequent elements. Logic and implementation details coming soon.",code:{cpp:`// C++ Solution for K most frequent elements
// This solution is currently being prepared.

void solve() {
    // TODO: Implement solution
}`,java:`// Java Solution for K most frequent elements
// This solution is currently being prepared.

class Solution {
    public void solve() {
        // TODO: Implement solution
    }
}`,python:`# Python Solution for K most frequent elements
# This solution is currently being prepared.

def solve():
    # TODO: Implement solution
    pass`}}}]}]},{title:"Greedy Algorithms",totalProblems:16,subtopics:[{title:"Easy Problems",problems:[{title:"Assign Cookies",platform:"LeetCode",link:"https://leetcode.com/problems/assign-cookies/",content:{description:"Solution for Assign Cookies. Logic and implementation details coming soon.",code:{cpp:`// C++ Solution for Assign Cookies
// This solution is currently being prepared.

void solve() {
    // TODO: Implement solution
}`,java:`// Java Solution for Assign Cookies
// This solution is currently being prepared.

class Solution {
    public void solve() {
        // TODO: Implement solution
    }
}`,python:`# Python Solution for Assign Cookies
# This solution is currently being prepared.

def solve():
    # TODO: Implement solution
    pass`}}},{title:"Lemonade Change",platform:"LeetCode",link:"https://leetcode.com/problems/lemonade-change/",content:{description:"Solution for Lemonade Change. Logic and implementation details coming soon.",code:{cpp:`// C++ Solution for Lemonade Change
// This solution is currently being prepared.

void solve() {
    // TODO: Implement solution
}`,java:`// Java Solution for Lemonade Change
// This solution is currently being prepared.

class Solution {
    public void solve() {
        // TODO: Implement solution
    }
}`,python:`# Python Solution for Lemonade Change
# This solution is currently being prepared.

def solve():
    # TODO: Implement solution
    pass`}}},{title:"Valid Parenthesis String",platform:"LeetCode",link:"https://leetcode.com/problems/valid-parenthesis-string/",content:{description:"Solution for Valid Parenthesis String. Logic and implementation details coming soon.",code:{cpp:`// C++ Solution for Valid Parenthesis String
// This solution is currently being prepared.

void solve() {
    // TODO: Implement solution
}`,java:`// Java Solution for Valid Parenthesis String
// This solution is currently being prepared.

class Solution {
    public void solve() {
        // TODO: Implement solution
    }
}`,python:`# Python Solution for Valid Parenthesis String
# This solution is currently being prepared.

def solve():
    # TODO: Implement solution
    pass`}}}]},{title:"Medium/Hard Problems",problems:[{title:"N meetings in one room",platform:"GeeksForGeeks",link:"https://practice.geeksforgeeks.org/problems/n-meetings-in-one-room-1587115620/1",content:{description:"Solution for N meetings in one room. Logic and implementation details coming soon.",code:{cpp:`// C++ Solution for N meetings in one room
// This solution is currently being prepared.

void solve() {
    // TODO: Implement solution
}`,java:`// Java Solution for N meetings in one room
// This solution is currently being prepared.

class Solution {
    public void solve() {
        // TODO: Implement solution
    }
}`,python:`# Python Solution for N meetings in one room
# This solution is currently being prepared.

def solve():
    # TODO: Implement solution
    pass`}}},{title:"Jump Game",platform:"LeetCode",link:"https://leetcode.com/problems/jump-game/",content:{description:"Solution for Jump Game. Logic and implementation details coming soon.",code:{cpp:`// C++ Solution for Jump Game
// This solution is currently being prepared.

void solve() {
    // TODO: Implement solution
}`,java:`// Java Solution for Jump Game
// This solution is currently being prepared.

class Solution {
    public void solve() {
        // TODO: Implement solution
    }
}`,python:`# Python Solution for Jump Game
# This solution is currently being prepared.

def solve():
    # TODO: Implement solution
    pass`}}},{title:"Jump Game II",platform:"LeetCode",link:"https://leetcode.com/problems/jump-game-ii/",content:{description:"Solution for Jump Game II. Logic and implementation details coming soon.",code:{cpp:`// C++ Solution for Jump Game II
// This solution is currently being prepared.

void solve() {
    // TODO: Implement solution
}`,java:`// Java Solution for Jump Game II
// This solution is currently being prepared.

class Solution {
    public void solve() {
        // TODO: Implement solution
    }
}`,python:`# Python Solution for Jump Game II
# This solution is currently being prepared.

def solve():
    # TODO: Implement solution
    pass`}}},{title:"Minimum number of platforms required for a railway",platform:"GeeksForGeeks",link:"https://practice.geeksforgeeks.org/problems/minimum-platforms-1587115620/1",content:{description:"Solution for Minimum number of platforms required for a railway. Logic and implementation details coming soon.",code:{cpp:`// C++ Solution for Minimum number of platforms required for a railway
// This solution is currently being prepared.

void solve() {
    // TODO: Implement solution
}`,java:`// Java Solution for Minimum number of platforms required for a railway
// This solution is currently being prepared.

class Solution {
    public void solve() {
        // TODO: Implement solution
    }
}`,python:`# Python Solution for Minimum number of platforms required for a railway
# This solution is currently being prepared.

def solve():
    # TODO: Implement solution
    pass`}}},{title:"Job Sequencing Problem",platform:"GeeksForGeeks",link:"https://practice.geeksforgeeks.org/problems/job-sequencing-problem-1587115620/1",content:{description:"Solution for Job Sequencing Problem. Logic and implementation details coming soon.",code:{cpp:`// C++ Solution for Job Sequencing Problem
// This solution is currently being prepared.

void solve() {
    // TODO: Implement solution
}`,java:`// Java Solution for Job Sequencing Problem
// This solution is currently being prepared.

class Solution {
    public void solve() {
        // TODO: Implement solution
    }
}`,python:`# Python Solution for Job Sequencing Problem
# This solution is currently being prepared.

def solve():
    # TODO: Implement solution
    pass`}}},{title:"Candy",platform:"LeetCode",link:"https://leetcode.com/problems/candy/",content:{description:"Solution for Candy. Logic and implementation details coming soon.",code:{cpp:`// C++ Solution for Candy
// This solution is currently being prepared.

void solve() {
    // TODO: Implement solution
}`,java:`// Java Solution for Candy
// This solution is currently being prepared.

class Solution {
    public void solve() {
        // TODO: Implement solution
    }
}`,python:`# Python Solution for Candy
# This solution is currently being prepared.

def solve():
    # TODO: Implement solution
    pass`}}},{title:"Shortest Job First",platform:"GeeksForGeeks",link:"https://practice.geeksforgeeks.org/problems/shortest-job-first/1",content:{description:"Solution for Shortest Job First. Logic and implementation details coming soon.",code:{cpp:`// C++ Solution for Shortest Job First
// This solution is currently being prepared.

void solve() {
    // TODO: Implement solution
}`,java:`// Java Solution for Shortest Job First
// This solution is currently being prepared.

class Solution {
    public void solve() {
        // TODO: Implement solution
    }
}`,python:`# Python Solution for Shortest Job First
# This solution is currently being prepared.

def solve():
    # TODO: Implement solution
    pass`}}},{title:"Page Faults in LRU",platform:"GeeksForGeeks",link:"https://practice.geeksforgeeks.org/problems/page-faults-in-lru5603/1",content:{description:"Solution for Page Faults in LRU. Logic and implementation details coming soon.",code:{cpp:`// C++ Solution for Page Faults in LRU
// This solution is currently being prepared.

void solve() {
    // TODO: Implement solution
}`,java:`// Java Solution for Page Faults in LRU
// This solution is currently being prepared.

class Solution {
    public void solve() {
        // TODO: Implement solution
    }
}`,python:`# Python Solution for Page Faults in LRU
# This solution is currently being prepared.

def solve():
    # TODO: Implement solution
    pass`}}},{title:"Insert Interval",platform:"LeetCode",link:"https://leetcode.com/problems/insert-interval/",content:{description:"Solution for Insert Interval. Logic and implementation details coming soon.",code:{cpp:`// C++ Solution for Insert Interval
// This solution is currently being prepared.

void solve() {
    // TODO: Implement solution
}`,java:`// Java Solution for Insert Interval
// This solution is currently being prepared.

class Solution {
    public void solve() {
        // TODO: Implement solution
    }
}`,python:`# Python Solution for Insert Interval
# This solution is currently being prepared.

def solve():
    # TODO: Implement solution
    pass`}}},{title:"Merge Intervals",platform:"LeetCode",link:"https://leetcode.com/problems/merge-intervals/",content:{description:"Solution for Merge Intervals. Logic and implementation details coming soon.",code:{cpp:`// C++ Solution for Merge Intervals
// This solution is currently being prepared.

void solve() {
    // TODO: Implement solution
}`,java:`// Java Solution for Merge Intervals
// This solution is currently being prepared.

class Solution {
    public void solve() {
        // TODO: Implement solution
    }
}`,python:`# Python Solution for Merge Intervals
# This solution is currently being prepared.

def solve():
    # TODO: Implement solution
    pass`}}},{title:"Non-overlapping Intervals",platform:"LeetCode",link:"https://leetcode.com/problems/non-overlapping-intervals/",content:{description:"Solution for Non-overlapping Intervals. Logic and implementation details coming soon.",code:{cpp:`// C++ Solution for Non-overlapping Intervals
// This solution is currently being prepared.

void solve() {
    // TODO: Implement solution
}`,java:`// Java Solution for Non-overlapping Intervals
// This solution is currently being prepared.

class Solution {
    public void solve() {
        // TODO: Implement solution
    }
}`,python:`# Python Solution for Non-overlapping Intervals
# This solution is currently being prepared.

def solve():
    # TODO: Implement solution
    pass`}}}]}]},{title:"Binary Trees",totalProblems:39,subtopics:[{title:"Traversals",problems:[{title:"Binary Tree Preorder Traversal",platform:"LeetCode",link:"https://leetcode.com/problems/binary-tree-preorder-traversal/",content:{description:"Solution for Binary Tree Preorder Traversal. Logic and implementation details coming soon.",code:{cpp:`// C++ Solution for Binary Tree Preorder Traversal
// This solution is currently being prepared.

void solve() {
    // TODO: Implement solution
}`,java:`// Java Solution for Binary Tree Preorder Traversal
// This solution is currently being prepared.

class Solution {
    public void solve() {
        // TODO: Implement solution
    }
}`,python:`# Python Solution for Binary Tree Preorder Traversal
# This solution is currently being prepared.

def solve():
    # TODO: Implement solution
    pass`}}},{title:"Binary Tree Inorder Traversal",platform:"LeetCode",link:"https://leetcode.com/problems/binary-tree-inorder-traversal/",content:{description:"Solution for Binary Tree Inorder Traversal. Logic and implementation details coming soon.",code:{cpp:`// C++ Solution for Binary Tree Inorder Traversal
// This solution is currently being prepared.

void solve() {
    // TODO: Implement solution
}`,java:`// Java Solution for Binary Tree Inorder Traversal
// This solution is currently being prepared.

class Solution {
    public void solve() {
        // TODO: Implement solution
    }
}`,python:`# Python Solution for Binary Tree Inorder Traversal
# This solution is currently being prepared.

def solve():
    # TODO: Implement solution
    pass`}}},{title:"Binary Tree Postorder Traversal",platform:"LeetCode",link:"https://leetcode.com/problems/binary-tree-postorder-traversal/",content:{description:"Solution for Binary Tree Postorder Traversal. Logic and implementation details coming soon.",code:{cpp:`// C++ Solution for Binary Tree Postorder Traversal
// This solution is currently being prepared.

void solve() {
    // TODO: Implement solution
}`,java:`// Java Solution for Binary Tree Postorder Traversal
// This solution is currently being prepared.

class Solution {
    public void solve() {
        // TODO: Implement solution
    }
}`,python:`# Python Solution for Binary Tree Postorder Traversal
# This solution is currently being prepared.

def solve():
    # TODO: Implement solution
    pass`}}},{title:"Level Order Traversal",platform:"LeetCode",link:"https://leetcode.com/problems/binary-tree-level-order-traversal/",content:{description:"Solution for Level Order Traversal. Logic and implementation details coming soon.",code:{cpp:`// C++ Solution for Level Order Traversal
// This solution is currently being prepared.

void solve() {
    // TODO: Implement solution
}`,java:`// Java Solution for Level Order Traversal
// This solution is currently being prepared.

class Solution {
    public void solve() {
        // TODO: Implement solution
    }
}`,python:`# Python Solution for Level Order Traversal
# This solution is currently being prepared.

def solve():
    # TODO: Implement solution
    pass`}}},{title:"Iterative Preorder Traversal",platform:"LeetCode",link:"https://leetcode.com/problems/binary-tree-preorder-traversal/",content:{description:"Solution for Iterative Preorder Traversal. Logic and implementation details coming soon.",code:{cpp:`// C++ Solution for Iterative Preorder Traversal
// This solution is currently being prepared.

void solve() {
    // TODO: Implement solution
}`,java:`// Java Solution for Iterative Preorder Traversal
// This solution is currently being prepared.

class Solution {
    public void solve() {
        // TODO: Implement solution
    }
}`,python:`# Python Solution for Iterative Preorder Traversal
# This solution is currently being prepared.

def solve():
    # TODO: Implement solution
    pass`}}},{title:"Iterative Inorder Traversal",platform:"LeetCode",link:"https://leetcode.com/problems/binary-tree-inorder-traversal/",content:{description:"Solution for Iterative Inorder Traversal. Logic and implementation details coming soon.",code:{cpp:`// C++ Solution for Iterative Inorder Traversal
// This solution is currently being prepared.

void solve() {
    // TODO: Implement solution
}`,java:`// Java Solution for Iterative Inorder Traversal
// This solution is currently being prepared.

class Solution {
    public void solve() {
        // TODO: Implement solution
    }
}`,python:`# Python Solution for Iterative Inorder Traversal
# This solution is currently being prepared.

def solve():
    # TODO: Implement solution
    pass`}}},{title:"Iterative Postorder Traversal (2 stacks)",platform:"LeetCode",link:"https://leetcode.com/problems/binary-tree-postorder-traversal/",content:{description:"Solution for Iterative Postorder Traversal (2 stacks). Logic and implementation details coming soon.",code:{cpp:`// C++ Solution for Iterative Postorder Traversal (2 stacks)
// This solution is currently being prepared.

void solve() {
    // TODO: Implement solution
}`,java:`// Java Solution for Iterative Postorder Traversal (2 stacks)
// This solution is currently being prepared.

class Solution {
    public void solve() {
        // TODO: Implement solution
    }
}`,python:`# Python Solution for Iterative Postorder Traversal (2 stacks)
# This solution is currently being prepared.

def solve():
    # TODO: Implement solution
    pass`}}},{title:"Iterative Postorder Traversal (1 stack)",platform:"LeetCode",link:"https://leetcode.com/problems/binary-tree-postorder-traversal/",content:{description:"Solution for Iterative Postorder Traversal (1 stack). Logic and implementation details coming soon.",code:{cpp:`// C++ Solution for Iterative Postorder Traversal (1 stack)
// This solution is currently being prepared.

void solve() {
    // TODO: Implement solution
}`,java:`// Java Solution for Iterative Postorder Traversal (1 stack)
// This solution is currently being prepared.

class Solution {
    public void solve() {
        // TODO: Implement solution
    }
}`,python:`# Python Solution for Iterative Postorder Traversal (1 stack)
# This solution is currently being prepared.

def solve():
    # TODO: Implement solution
    pass`}}}]},{title:"Medium Problems",problems:[{title:"Height of a Binary Tree",platform:"LeetCode",link:"https://leetcode.com/problems/maximum-depth-of-binary-tree/",content:{description:"Solution for Height of a Binary Tree. Logic and implementation details coming soon.",code:{cpp:`// C++ Solution for Height of a Binary Tree
// This solution is currently being prepared.

void solve() {
    // TODO: Implement solution
}`,java:`// Java Solution for Height of a Binary Tree
// This solution is currently being prepared.

class Solution {
    public void solve() {
        // TODO: Implement solution
    }
}`,python:`# Python Solution for Height of a Binary Tree
# This solution is currently being prepared.

def solve():
    # TODO: Implement solution
    pass`}}},{title:"Check if the Binary tree is height-balanced or not",platform:"LeetCode",link:"https://leetcode.com/problems/balanced-binary-tree/",content:{description:"Solution for Check if the Binary tree is height-balanced or not. Logic and implementation details coming soon.",code:{cpp:`// C++ Solution for Check if the Binary tree is height-balanced or not
// This solution is currently being prepared.

void solve() {
    // TODO: Implement solution
}`,java:`// Java Solution for Check if the Binary tree is height-balanced or not
// This solution is currently being prepared.

class Solution {
    public void solve() {
        // TODO: Implement solution
    }
}`,python:`# Python Solution for Check if the Binary tree is height-balanced or not
# This solution is currently being prepared.

def solve():
    # TODO: Implement solution
    pass`}}},{title:"Diameter of Binary Tree",platform:"LeetCode",link:"https://leetcode.com/problems/diameter-of-binary-tree/",content:{description:"Solution for Diameter of Binary Tree. Logic and implementation details coming soon.",code:{cpp:`// C++ Solution for Diameter of Binary Tree
// This solution is currently being prepared.

void solve() {
    // TODO: Implement solution
}`,java:`// Java Solution for Diameter of Binary Tree
// This solution is currently being prepared.

class Solution {
    public void solve() {
        // TODO: Implement solution
    }
}`,python:`# Python Solution for Diameter of Binary Tree
# This solution is currently being prepared.

def solve():
    # TODO: Implement solution
    pass`}}},{title:"Maximum path sum",platform:"LeetCode",link:"https://leetcode.com/problems/binary-tree-maximum-path-sum/",content:{description:"Solution for Maximum path sum. Logic and implementation details coming soon.",code:{cpp:`// C++ Solution for Maximum path sum
// This solution is currently being prepared.

void solve() {
    // TODO: Implement solution
}`,java:`// Java Solution for Maximum path sum
// This solution is currently being prepared.

class Solution {
    public void solve() {
        // TODO: Implement solution
    }
}`,python:`# Python Solution for Maximum path sum
# This solution is currently being prepared.

def solve():
    # TODO: Implement solution
    pass`}}},{title:"Check if two trees are identical or not",platform:"LeetCode",link:"https://leetcode.com/problems/same-tree/",content:{description:"Solution for Check if two trees are identical or not. Logic and implementation details coming soon.",code:{cpp:`// C++ Solution for Check if two trees are identical or not
// This solution is currently being prepared.

void solve() {
    // TODO: Implement solution
}`,java:`// Java Solution for Check if two trees are identical or not
// This solution is currently being prepared.

class Solution {
    public void solve() {
        // TODO: Implement solution
    }
}`,python:`# Python Solution for Check if two trees are identical or not
# This solution is currently being prepared.

def solve():
    # TODO: Implement solution
    pass`}}},{title:"Zig Zag Traversal of Binary Tree",platform:"LeetCode",link:"https://leetcode.com/problems/binary-tree-zigzag-level-order-traversal/",content:{description:"Solution for Zig Zag Traversal of Binary Tree. Logic and implementation details coming soon.",code:{cpp:`// C++ Solution for Zig Zag Traversal of Binary Tree
// This solution is currently being prepared.

void solve() {
    // TODO: Implement solution
}`,java:`// Java Solution for Zig Zag Traversal of Binary Tree
// This solution is currently being prepared.

class Solution {
    public void solve() {
        // TODO: Implement solution
    }
}`,python:`# Python Solution for Zig Zag Traversal of Binary Tree
# This solution is currently being prepared.

def solve():
    # TODO: Implement solution
    pass`}}},{title:"Boundary Traversal of Binary Tree",platform:"GeeksForGeeks",link:"https://practice.geeksforgeeks.org/problems/boundary-traversal-of-binary-tree/1",content:{description:"Solution for Boundary Traversal of Binary Tree. Logic and implementation details coming soon.",code:{cpp:`// C++ Solution for Boundary Traversal of Binary Tree
// This solution is currently being prepared.

void solve() {
    // TODO: Implement solution
}`,java:`// Java Solution for Boundary Traversal of Binary Tree
// This solution is currently being prepared.

class Solution {
    public void solve() {
        // TODO: Implement solution
    }
}`,python:`# Python Solution for Boundary Traversal of Binary Tree
# This solution is currently being prepared.

def solve():
    # TODO: Implement solution
    pass`}}},{title:"Vertical Order Traversal of Binary Tree",platform:"LeetCode",link:"https://leetcode.com/problems/vertical-order-traversal-of-a-binary-tree/",content:{description:"Solution for Vertical Order Traversal of Binary Tree. Logic and implementation details coming soon.",code:{cpp:`// C++ Solution for Vertical Order Traversal of Binary Tree
// This solution is currently being prepared.

void solve() {
    // TODO: Implement solution
}`,java:`// Java Solution for Vertical Order Traversal of Binary Tree
// This solution is currently being prepared.

class Solution {
    public void solve() {
        // TODO: Implement solution
    }
}`,python:`# Python Solution for Vertical Order Traversal of Binary Tree
# This solution is currently being prepared.

def solve():
    # TODO: Implement solution
    pass`}}},{title:"Top View of Binary Tree",platform:"GeeksForGeeks",link:"https://practice.geeksforgeeks.org/problems/top-view-of-binary-tree/1",content:{description:"Solution for Top View of Binary Tree. Logic and implementation details coming soon.",code:{cpp:`// C++ Solution for Top View of Binary Tree
// This solution is currently being prepared.

void solve() {
    // TODO: Implement solution
}`,java:`// Java Solution for Top View of Binary Tree
// This solution is currently being prepared.

class Solution {
    public void solve() {
        // TODO: Implement solution
    }
}`,python:`# Python Solution for Top View of Binary Tree
# This solution is currently being prepared.

def solve():
    # TODO: Implement solution
    pass`}}},{title:"Bottom View of Binary Tree",platform:"GeeksForGeeks",link:"https://practice.geeksforgeeks.org/problems/bottom-view-of-binary-tree/1",content:{description:"Solution for Bottom View of Binary Tree. Logic and implementation details coming soon.",code:{cpp:`// C++ Solution for Bottom View of Binary Tree
// This solution is currently being prepared.

void solve() {
    // TODO: Implement solution
}`,java:`// Java Solution for Bottom View of Binary Tree
// This solution is currently being prepared.

class Solution {
    public void solve() {
        // TODO: Implement solution
    }
}`,python:`# Python Solution for Bottom View of Binary Tree
# This solution is currently being prepared.

def solve():
    # TODO: Implement solution
    pass`}}},{title:"Right/Left View of Binary Tree",platform:"LeetCode",link:"https://leetcode.com/problems/binary-tree-right-side-view/",content:{description:"Solution for Right/Left View of Binary Tree. Logic and implementation details coming soon.",code:{cpp:`// C++ Solution for Right/Left View of Binary Tree
// This solution is currently being prepared.

void solve() {
    // TODO: Implement solution
}`,java:`// Java Solution for Right/Left View of Binary Tree
// This solution is currently being prepared.

class Solution {
    public void solve() {
        // TODO: Implement solution
    }
}`,python:`# Python Solution for Right/Left View of Binary Tree
# This solution is currently being prepared.

def solve():
    # TODO: Implement solution
    pass`}}},{title:"Symmetric Binary Tree",platform:"LeetCode",link:"https://leetcode.com/problems/symmetric-tree/",content:{description:"Solution for Symmetric Binary Tree. Logic and implementation details coming soon.",code:{cpp:`// C++ Solution for Symmetric Binary Tree
// This solution is currently being prepared.

void solve() {
    // TODO: Implement solution
}`,java:`// Java Solution for Symmetric Binary Tree
// This solution is currently being prepared.

class Solution {
    public void solve() {
        // TODO: Implement solution
    }
}`,python:`# Python Solution for Symmetric Binary Tree
# This solution is currently being prepared.

def solve():
    # TODO: Implement solution
    pass`}}}]},{title:"Hard Problems",problems:[{title:"Root to Node Path in Binary Tree",platform:"GeeksForGeeks",link:"https://practice.geeksforgeeks.org/problems/root-to-leaf-paths/1",content:{description:"Solution for Root to Node Path in Binary Tree. Logic and implementation details coming soon.",code:{cpp:`// C++ Solution for Root to Node Path in Binary Tree
// This solution is currently being prepared.

void solve() {
    // TODO: Implement solution
}`,java:`// Java Solution for Root to Node Path in Binary Tree
// This solution is currently being prepared.

class Solution {
    public void solve() {
        // TODO: Implement solution
    }
}`,python:`# Python Solution for Root to Node Path in Binary Tree
# This solution is currently being prepared.

def solve():
    # TODO: Implement solution
    pass`}}},{title:"LCA in Binary Tree",platform:"LeetCode",link:"https://leetcode.com/problems/lowest-common-ancestor-of-a-binary-tree/",content:{description:"Solution for LCA in Binary Tree. Logic and implementation details coming soon.",code:{cpp:`// C++ Solution for LCA in Binary Tree
// This solution is currently being prepared.

void solve() {
    // TODO: Implement solution
}`,java:`// Java Solution for LCA in Binary Tree
// This solution is currently being prepared.

class Solution {
    public void solve() {
        // TODO: Implement solution
    }
}`,python:`# Python Solution for LCA in Binary Tree
# This solution is currently being prepared.

def solve():
    # TODO: Implement solution
    pass`}}},{title:"Maximum Width of Binary Tree",platform:"LeetCode",link:"https://leetcode.com/problems/maximum-width-of-binary-tree/",content:{description:"Solution for Maximum Width of Binary Tree. Logic and implementation details coming soon.",code:{cpp:`// C++ Solution for Maximum Width of Binary Tree
// This solution is currently being prepared.

void solve() {
    // TODO: Implement solution
}`,java:`// Java Solution for Maximum Width of Binary Tree
// This solution is currently being prepared.

class Solution {
    public void solve() {
        // TODO: Implement solution
    }
}`,python:`# Python Solution for Maximum Width of Binary Tree
# This solution is currently being prepared.

def solve():
    # TODO: Implement solution
    pass`}}},{title:"Check for Children Sum Property",platform:"GeeksForGeeks",link:"https://practice.geeksforgeeks.org/problems/children-sum-parent/1",content:{description:"Solution for Check for Children Sum Property. Logic and implementation details coming soon.",code:{cpp:`// C++ Solution for Check for Children Sum Property
// This solution is currently being prepared.

void solve() {
    // TODO: Implement solution
}`,java:`// Java Solution for Check for Children Sum Property
// This solution is currently being prepared.

class Solution {
    public void solve() {
        // TODO: Implement solution
    }
}`,python:`# Python Solution for Check for Children Sum Property
# This solution is currently being prepared.

def solve():
    # TODO: Implement solution
    pass`}}},{title:"Print all the Nodes at a distance of K in Binary Tree",platform:"LeetCode",link:"https://leetcode.com/problems/all-nodes-distance-k-in-binary-tree/",content:{description:"Solution for Print all the Nodes at a distance of K in Binary Tree. Logic and implementation details coming soon.",code:{cpp:`// C++ Solution for Print all the Nodes at a distance of K in Binary Tree
// This solution is currently being prepared.

void solve() {
    // TODO: Implement solution
}`,java:`// Java Solution for Print all the Nodes at a distance of K in Binary Tree
// This solution is currently being prepared.

class Solution {
    public void solve() {
        // TODO: Implement solution
    }
}`,python:`# Python Solution for Print all the Nodes at a distance of K in Binary Tree
# This solution is currently being prepared.

def solve():
    # TODO: Implement solution
    pass`}}},{title:"Minimum time taken to BURN the Binary Tree from a Node",platform:"GeeksForGeeks",link:"https://practice.geeksforgeeks.org/problems/burning-tree/1",content:{description:"Solution for Minimum time taken to BURN the Binary Tree from a Node. Logic and implementation details coming soon.",code:{cpp:`// C++ Solution for Minimum time taken to BURN the Binary Tree from a Node
// This solution is currently being prepared.

void solve() {
    // TODO: Implement solution
}`,java:`// Java Solution for Minimum time taken to BURN the Binary Tree from a Node
// This solution is currently being prepared.

class Solution {
    public void solve() {
        // TODO: Implement solution
    }
}`,python:`# Python Solution for Minimum time taken to BURN the Binary Tree from a Node
# This solution is currently being prepared.

def solve():
    # TODO: Implement solution
    pass`}}},{title:"Count total Nodes in a COMPLETE Binary Tree",platform:"LeetCode",link:"https://leetcode.com/problems/count-complete-tree-nodes/",content:{description:"Solution for Count total Nodes in a COMPLETE Binary Tree. Logic and implementation details coming soon.",code:{cpp:`// C++ Solution for Count total Nodes in a COMPLETE Binary Tree
// This solution is currently being prepared.

void solve() {
    // TODO: Implement solution
}`,java:`// Java Solution for Count total Nodes in a COMPLETE Binary Tree
// This solution is currently being prepared.

class Solution {
    public void solve() {
        // TODO: Implement solution
    }
}`,python:`# Python Solution for Count total Nodes in a COMPLETE Binary Tree
# This solution is currently being prepared.

def solve():
    # TODO: Implement solution
    pass`}}},{title:"Requirements needed to construct a Unique Binary Tree",platform:"GeeksForGeeks",link:"#",content:{description:"Solution for Requirements needed to construct a Unique Binary Tree. Logic and implementation details coming soon.",code:{cpp:`// C++ Solution for Requirements needed to construct a Unique Binary Tree
// This solution is currently being prepared.

void solve() {
    // TODO: Implement solution
}`,java:`// Java Solution for Requirements needed to construct a Unique Binary Tree
// This solution is currently being prepared.

class Solution {
    public void solve() {
        // TODO: Implement solution
    }
}`,python:`# Python Solution for Requirements needed to construct a Unique Binary Tree
# This solution is currently being prepared.

def solve():
    # TODO: Implement solution
    pass`}}},{title:"Construct Binary Tree from Preorder and Inorder Traversal",platform:"LeetCode",link:"https://leetcode.com/problems/construct-binary-tree-from-preorder-and-inorder-traversal/",content:{description:"Solution for Construct Binary Tree from Preorder and Inorder Traversal. Logic and implementation details coming soon.",code:{cpp:`// C++ Solution for Construct Binary Tree from Preorder and Inorder Traversal
// This solution is currently being prepared.

void solve() {
    // TODO: Implement solution
}`,java:`// Java Solution for Construct Binary Tree from Preorder and Inorder Traversal
// This solution is currently being prepared.

class Solution {
    public void solve() {
        // TODO: Implement solution
    }
}`,python:`# Python Solution for Construct Binary Tree from Preorder and Inorder Traversal
# This solution is currently being prepared.

def solve():
    # TODO: Implement solution
    pass`}}},{title:"Construct Binary Tree from Postorder and Inorder Traversal",platform:"LeetCode",link:"https://leetcode.com/problems/construct-binary-tree-from-inorder-and-postorder-traversal/",content:{description:"Solution for Construct Binary Tree from Postorder and Inorder Traversal. Logic and implementation details coming soon.",code:{cpp:`// C++ Solution for Construct Binary Tree from Postorder and Inorder Traversal
// This solution is currently being prepared.

void solve() {
    // TODO: Implement solution
}`,java:`// Java Solution for Construct Binary Tree from Postorder and Inorder Traversal
// This solution is currently being prepared.

class Solution {
    public void solve() {
        // TODO: Implement solution
    }
}`,python:`# Python Solution for Construct Binary Tree from Postorder and Inorder Traversal
# This solution is currently being prepared.

def solve():
    # TODO: Implement solution
    pass`}}},{title:"Serialize and deserialize Binary Tree",platform:"LeetCode",link:"https://leetcode.com/problems/serialize-and-deserialize-binary-tree/",content:{description:"Solution for Serialize and deserialize Binary Tree. Logic and implementation details coming soon.",code:{cpp:`// C++ Solution for Serialize and deserialize Binary Tree
// This solution is currently being prepared.

void solve() {
    // TODO: Implement solution
}`,java:`// Java Solution for Serialize and deserialize Binary Tree
// This solution is currently being prepared.

class Solution {
    public void solve() {
        // TODO: Implement solution
    }
}`,python:`# Python Solution for Serialize and deserialize Binary Tree
# This solution is currently being prepared.

def solve():
    # TODO: Implement solution
    pass`}}},{title:"Morris Preorder Traversal",platform:"LeetCode",link:"https://leetcode.com/problems/binary-tree-preorder-traversal/",content:{description:"Solution for Morris Preorder Traversal. Logic and implementation details coming soon.",code:{cpp:`// C++ Solution for Morris Preorder Traversal
// This solution is currently being prepared.

void solve() {
    // TODO: Implement solution
}`,java:`// Java Solution for Morris Preorder Traversal
// This solution is currently being prepared.

class Solution {
    public void solve() {
        // TODO: Implement solution
    }
}`,python:`# Python Solution for Morris Preorder Traversal
# This solution is currently being prepared.

def solve():
    # TODO: Implement solution
    pass`}}},{title:"Morris Inorder Traversal",platform:"LeetCode",link:"https://leetcode.com/problems/binary-tree-inorder-traversal/",content:{description:"Solution for Morris Inorder Traversal. Logic and implementation details coming soon.",code:{cpp:`// C++ Solution for Morris Inorder Traversal
// This solution is currently being prepared.

void solve() {
    // TODO: Implement solution
}`,java:`// Java Solution for Morris Inorder Traversal
// This solution is currently being prepared.

class Solution {
    public void solve() {
        // TODO: Implement solution
    }
}`,python:`# Python Solution for Morris Inorder Traversal
# This solution is currently being prepared.

def solve():
    # TODO: Implement solution
    pass`}}},{title:"Flatten Binary Tree to LinkedList",platform:"LeetCode",link:"https://leetcode.com/problems/flatten-binary-tree-to-linked-list/",content:{description:"Solution for Flatten Binary Tree to LinkedList. Logic and implementation details coming soon.",code:{cpp:`// C++ Solution for Flatten Binary Tree to LinkedList
// This solution is currently being prepared.

void solve() {
    // TODO: Implement solution
}`,java:`// Java Solution for Flatten Binary Tree to LinkedList
// This solution is currently being prepared.

class Solution {
    public void solve() {
        // TODO: Implement solution
    }
}`,python:`# Python Solution for Flatten Binary Tree to LinkedList
# This solution is currently being prepared.

def solve():
    # TODO: Implement solution
    pass`}}}]}]},{title:"Binary Search Trees",totalProblems:16,subtopics:[{title:"Concepts",problems:[{title:"Search in a Binary Search Tree",platform:"LeetCode",link:"https://leetcode.com/problems/search-in-a-binary-search-tree/",content:{description:"Solution for Search in a Binary Search Tree. Logic and implementation details coming soon.",code:{cpp:`// C++ Solution for Search in a Binary Search Tree
// This solution is currently being prepared.

void solve() {
    // TODO: Implement solution
}`,java:`// Java Solution for Search in a Binary Search Tree
// This solution is currently being prepared.

class Solution {
    public void solve() {
        // TODO: Implement solution
    }
}`,python:`# Python Solution for Search in a Binary Search Tree
# This solution is currently being prepared.

def solve():
    # TODO: Implement solution
    pass`}}},{title:"Find Min/Max in BST",platform:"GeeksForGeeks",link:"https://practice.geeksforgeeks.org/problems/minimum-element-in-bst/1",content:{description:"Solution for Find Min/Max in BST. Logic and implementation details coming soon.",code:{cpp:`// C++ Solution for Find Min/Max in BST
// This solution is currently being prepared.

void solve() {
    // TODO: Implement solution
}`,java:`// Java Solution for Find Min/Max in BST
// This solution is currently being prepared.

class Solution {
    public void solve() {
        // TODO: Implement solution
    }
}`,python:`# Python Solution for Find Min/Max in BST
# This solution is currently being prepared.

def solve():
    # TODO: Implement solution
    pass`}}},{title:"Ceil in a BST",platform:"GeeksForGeeks",link:"https://practice.geeksforgeeks.org/problems/implementing-ceil-in-bst/1",content:{description:"Solution for Ceil in a BST. Logic and implementation details coming soon.",code:{cpp:`// C++ Solution for Ceil in a BST
// This solution is currently being prepared.

void solve() {
    // TODO: Implement solution
}`,java:`// Java Solution for Ceil in a BST
// This solution is currently being prepared.

class Solution {
    public void solve() {
        // TODO: Implement solution
    }
}`,python:`# Python Solution for Ceil in a BST
# This solution is currently being prepared.

def solve():
    # TODO: Implement solution
    pass`}}},{title:"Floor in a BST",platform:"GeeksForGeeks",link:"https://practice.geeksforgeeks.org/problems/floor-in-bst/1",content:{description:"Solution for Floor in a BST. Logic and implementation details coming soon.",code:{cpp:`// C++ Solution for Floor in a BST
// This solution is currently being prepared.

void solve() {
    // TODO: Implement solution
}`,java:`// Java Solution for Floor in a BST
// This solution is currently being prepared.

class Solution {
    public void solve() {
        // TODO: Implement solution
    }
}`,python:`# Python Solution for Floor in a BST
# This solution is currently being prepared.

def solve():
    # TODO: Implement solution
    pass`}}},{title:"Insert a given Node in Binary Search Tree",platform:"LeetCode",link:"https://leetcode.com/problems/insert-into-a-binary-search-tree/",content:{description:"Solution for Insert a given Node in Binary Search Tree. Logic and implementation details coming soon.",code:{cpp:`// C++ Solution for Insert a given Node in Binary Search Tree
// This solution is currently being prepared.

void solve() {
    // TODO: Implement solution
}`,java:`// Java Solution for Insert a given Node in Binary Search Tree
// This solution is currently being prepared.

class Solution {
    public void solve() {
        // TODO: Implement solution
    }
}`,python:`# Python Solution for Insert a given Node in Binary Search Tree
# This solution is currently being prepared.

def solve():
    # TODO: Implement solution
    pass`}}},{title:"Delete a Node in Binary Search Tree",platform:"LeetCode",link:"https://leetcode.com/problems/delete-node-in-a-bst/",content:{description:"Solution for Delete a Node in Binary Search Tree. Logic and implementation details coming soon.",code:{cpp:`// C++ Solution for Delete a Node in Binary Search Tree
// This solution is currently being prepared.

void solve() {
    // TODO: Implement solution
}`,java:`// Java Solution for Delete a Node in Binary Search Tree
// This solution is currently being prepared.

class Solution {
    public void solve() {
        // TODO: Implement solution
    }
}`,python:`# Python Solution for Delete a Node in Binary Search Tree
# This solution is currently being prepared.

def solve():
    # TODO: Implement solution
    pass`}}}]},{title:"Practice Problems",problems:[{title:"Kth smallest/largest element in BST",platform:"LeetCode",link:"https://leetcode.com/problems/kth-smallest-element-in-a-bst/",content:{description:"Solution for Kth smallest/largest element in BST. Logic and implementation details coming soon.",code:{cpp:`// C++ Solution for Kth smallest/largest element in BST
// This solution is currently being prepared.

void solve() {
    // TODO: Implement solution
}`,java:`// Java Solution for Kth smallest/largest element in BST
// This solution is currently being prepared.

class Solution {
    public void solve() {
        // TODO: Implement solution
    }
}`,python:`# Python Solution for Kth smallest/largest element in BST
# This solution is currently being prepared.

def solve():
    # TODO: Implement solution
    pass`}}},{title:"Check if a tree is a BST or BT",platform:"LeetCode",link:"https://leetcode.com/problems/validate-binary-search-tree/",content:{description:"Solution for Check if a tree is a BST or BT. Logic and implementation details coming soon.",code:{cpp:`// C++ Solution for Check if a tree is a BST or BT
// This solution is currently being prepared.

void solve() {
    // TODO: Implement solution
}`,java:`// Java Solution for Check if a tree is a BST or BT
// This solution is currently being prepared.

class Solution {
    public void solve() {
        // TODO: Implement solution
    }
}`,python:`# Python Solution for Check if a tree is a BST or BT
# This solution is currently being prepared.

def solve():
    # TODO: Implement solution
    pass`}}},{title:"LCA in Binary Search Tree",platform:"LeetCode",link:"https://leetcode.com/problems/lowest-common-ancestor-of-a-binary-search-tree/",content:{description:"Solution for LCA in Binary Search Tree. Logic and implementation details coming soon.",code:{cpp:`// C++ Solution for LCA in Binary Search Tree
// This solution is currently being prepared.

void solve() {
    // TODO: Implement solution
}`,java:`// Java Solution for LCA in Binary Search Tree
// This solution is currently being prepared.

class Solution {
    public void solve() {
        // TODO: Implement solution
    }
}`,python:`# Python Solution for LCA in Binary Search Tree
# This solution is currently being prepared.

def solve():
    # TODO: Implement solution
    pass`}}},{title:"Construct a BST from a preorder traversal",platform:"LeetCode",link:"https://leetcode.com/problems/construct-binary-search-tree-from-preorder-traversal/",content:{description:"Solution for Construct a BST from a preorder traversal. Logic and implementation details coming soon.",code:{cpp:`// C++ Solution for Construct a BST from a preorder traversal
// This solution is currently being prepared.

void solve() {
    // TODO: Implement solution
}`,java:`// Java Solution for Construct a BST from a preorder traversal
// This solution is currently being prepared.

class Solution {
    public void solve() {
        // TODO: Implement solution
    }
}`,python:`# Python Solution for Construct a BST from a preorder traversal
# This solution is currently being prepared.

def solve():
    # TODO: Implement solution
    pass`}}},{title:"Inorder Successor/Predecessor in BST",platform:"GeeksForGeeks",link:"https://practice.geeksforgeeks.org/problems/inorder-successor-in-bst/1",content:{description:"Solution for Inorder Successor/Predecessor in BST. Logic and implementation details coming soon.",code:{cpp:`// C++ Solution for Inorder Successor/Predecessor in BST
// This solution is currently being prepared.

void solve() {
    // TODO: Implement solution
}`,java:`// Java Solution for Inorder Successor/Predecessor in BST
// This solution is currently being prepared.

class Solution {
    public void solve() {
        // TODO: Implement solution
    }
}`,python:`# Python Solution for Inorder Successor/Predecessor in BST
# This solution is currently being prepared.

def solve():
    # TODO: Implement solution
    pass`}}},{title:"BST Iterator",platform:"LeetCode",link:"https://leetcode.com/problems/binary-search-tree-iterator/",content:{description:"Solution for BST Iterator. Logic and implementation details coming soon.",code:{cpp:`// C++ Solution for BST Iterator
// This solution is currently being prepared.

void solve() {
    // TODO: Implement solution
}`,java:`// Java Solution for BST Iterator
// This solution is currently being prepared.

class Solution {
    public void solve() {
        // TODO: Implement solution
    }
}`,python:`# Python Solution for BST Iterator
# This solution is currently being prepared.

def solve():
    # TODO: Implement solution
    pass`}}},{title:"Two Sum In BST",platform:"LeetCode",link:"https://leetcode.com/problems/two-sum-iv-input-is-a-bst/",content:{description:"Solution for Two Sum In BST. Logic and implementation details coming soon.",code:{cpp:`// C++ Solution for Two Sum In BST
// This solution is currently being prepared.

void solve() {
    // TODO: Implement solution
}`,java:`// Java Solution for Two Sum In BST
// This solution is currently being prepared.

class Solution {
    public void solve() {
        // TODO: Implement solution
    }
}`,python:`# Python Solution for Two Sum In BST
# This solution is currently being prepared.

def solve():
    # TODO: Implement solution
    pass`}}},{title:"Recover BST",platform:"LeetCode",link:"https://leetcode.com/problems/recover-binary-search-tree/",content:{description:"Solution for Recover BST. Logic and implementation details coming soon.",code:{cpp:`// C++ Solution for Recover BST
// This solution is currently being prepared.

void solve() {
    // TODO: Implement solution
}`,java:`// Java Solution for Recover BST
// This solution is currently being prepared.

class Solution {
    public void solve() {
        // TODO: Implement solution
    }
}`,python:`# Python Solution for Recover BST
# This solution is currently being prepared.

def solve():
    # TODO: Implement solution
    pass`}}},{title:"Largest BST in Binary Tree",platform:"GeeksForGeeks",link:"https://practice.geeksforgeeks.org/problems/largest-bst/1",content:{description:"Solution for Largest BST in Binary Tree. Logic and implementation details coming soon.",code:{cpp:`// C++ Solution for Largest BST in Binary Tree
// This solution is currently being prepared.

void solve() {
    // TODO: Implement solution
}`,java:`// Java Solution for Largest BST in Binary Tree
// This solution is currently being prepared.

class Solution {
    public void solve() {
        // TODO: Implement solution
    }
}`,python:`# Python Solution for Largest BST in Binary Tree
# This solution is currently being prepared.

def solve():
    # TODO: Implement solution
    pass`}}}]}]},{title:"Graphs",totalProblems:54,subtopics:[{title:"Learning",problems:[{title:"Graph Representation in Java",platform:"GeeksForGeeks",link:"https://practice.geeksforgeeks.org/problems/print-adjacency-list-1587115620/1",content:{description:"Solution for Graph Representation in Java. Logic and implementation details coming soon.",code:{cpp:`// C++ Solution for Graph Representation in Java
// This solution is currently being prepared.

void solve() {
    // TODO: Implement solution
}`,java:`// Java Solution for Graph Representation in Java
// This solution is currently being prepared.

class Solution {
    public void solve() {
        // TODO: Implement solution
    }
}`,python:`# Python Solution for Graph Representation in Java
# This solution is currently being prepared.

def solve():
    # TODO: Implement solution
    pass`}}},{title:"Graph Representation in C++",platform:"GeeksForGeeks",link:"https://practice.geeksforgeeks.org/problems/print-adjacency-list-1587115620/1",content:{description:"Solution for Graph Representation in C++. Logic and implementation details coming soon.",code:{cpp:`// C++ Solution for Graph Representation in C++
// This solution is currently being prepared.

void solve() {
    // TODO: Implement solution
}`,java:`// Java Solution for Graph Representation in C++
// This solution is currently being prepared.

class Solution {
    public void solve() {
        // TODO: Implement solution
    }
}`,python:`# Python Solution for Graph Representation in C++
# This solution is currently being prepared.

def solve():
    # TODO: Implement solution
    pass`}}},{title:"Connected Components",platform:"GeeksForGeeks",link:"https://practice.geeksforgeeks.org/problems/number-of-provinces/1",content:{description:"Solution for Connected Components. Logic and implementation details coming soon.",code:{cpp:`// C++ Solution for Connected Components
// This solution is currently being prepared.

void solve() {
    // TODO: Implement solution
}`,java:`// Java Solution for Connected Components
// This solution is currently being prepared.

class Solution {
    public void solve() {
        // TODO: Implement solution
    }
}`,python:`# Python Solution for Connected Components
# This solution is currently being prepared.

def solve():
    # TODO: Implement solution
    pass`}}},{title:"BFS",platform:"GeeksForGeeks",link:"https://practice.geeksforgeeks.org/problems/bfs-traversal-of-graph/1",content:{description:"Solution for BFS. Logic and implementation details coming soon.",code:{cpp:`// C++ Solution for BFS
// This solution is currently being prepared.

void solve() {
    // TODO: Implement solution
}`,java:`// Java Solution for BFS
// This solution is currently being prepared.

class Solution {
    public void solve() {
        // TODO: Implement solution
    }
}`,python:`# Python Solution for BFS
# This solution is currently being prepared.

def solve():
    # TODO: Implement solution
    pass`}}},{title:"DFS",platform:"GeeksForGeeks",link:"https://practice.geeksforgeeks.org/problems/depth-first-traversal-for-a-graph/1",content:{description:"Solution for DFS. Logic and implementation details coming soon.",code:{cpp:`// C++ Solution for DFS
// This solution is currently being prepared.

void solve() {
    // TODO: Implement solution
}`,java:`// Java Solution for DFS
// This solution is currently being prepared.

class Solution {
    public void solve() {
        // TODO: Implement solution
    }
}`,python:`# Python Solution for DFS
# This solution is currently being prepared.

def solve():
    # TODO: Implement solution
    pass`}}}]},{title:"Problems on BFS/DFS",problems:[{title:"Number of provinces",platform:"LeetCode",link:"https://leetcode.com/problems/number-of-provinces/",content:{description:"Solution for Number of provinces. Logic and implementation details coming soon.",code:{cpp:`// C++ Solution for Number of provinces
// This solution is currently being prepared.

void solve() {
    // TODO: Implement solution
}`,java:`// Java Solution for Number of provinces
// This solution is currently being prepared.

class Solution {
    public void solve() {
        // TODO: Implement solution
    }
}`,python:`# Python Solution for Number of provinces
# This solution is currently being prepared.

def solve():
    # TODO: Implement solution
    pass`}}},{title:"Number of Islands",platform:"LeetCode",link:"https://leetcode.com/problems/number-of-islands/",content:{description:"Solution for Number of Islands. Logic and implementation details coming soon.",code:{cpp:`// C++ Solution for Number of Islands
// This solution is currently being prepared.

void solve() {
    // TODO: Implement solution
}`,java:`// Java Solution for Number of Islands
// This solution is currently being prepared.

class Solution {
    public void solve() {
        // TODO: Implement solution
    }
}`,python:`# Python Solution for Number of Islands
# This solution is currently being prepared.

def solve():
    # TODO: Implement solution
    pass`}}},{title:"Flood Fill",platform:"LeetCode",link:"https://leetcode.com/problems/flood-fill/",content:{description:"Solution for Flood Fill. Logic and implementation details coming soon.",code:{cpp:`// C++ Solution for Flood Fill
// This solution is currently being prepared.

void solve() {
    // TODO: Implement solution
}`,java:`// Java Solution for Flood Fill
// This solution is currently being prepared.

class Solution {
    public void solve() {
        // TODO: Implement solution
    }
}`,python:`# Python Solution for Flood Fill
# This solution is currently being prepared.

def solve():
    # TODO: Implement solution
    pass`}}},{title:"Rotten Oranges",platform:"LeetCode",link:"https://leetcode.com/problems/rotting-oranges/",content:{description:"Solution for Rotten Oranges. Logic and implementation details coming soon.",code:{cpp:`// C++ Solution for Rotten Oranges
// This solution is currently being prepared.

void solve() {
    // TODO: Implement solution
}`,java:`// Java Solution for Rotten Oranges
// This solution is currently being prepared.

class Solution {
    public void solve() {
        // TODO: Implement solution
    }
}`,python:`# Python Solution for Rotten Oranges
# This solution is currently being prepared.

def solve():
    # TODO: Implement solution
    pass`}}},{title:"Detect a cycle in an undirected graph using BFS",platform:"GeeksForGeeks",link:"https://practice.geeksforgeeks.org/problems/detect-cycle-in-an-undirected-graph/1",content:{description:"Solution for Detect a cycle in an undirected graph using BFS. Logic and implementation details coming soon.",code:{cpp:`// C++ Solution for Detect a cycle in an undirected graph using BFS
// This solution is currently being prepared.

void solve() {
    // TODO: Implement solution
}`,java:`// Java Solution for Detect a cycle in an undirected graph using BFS
// This solution is currently being prepared.

class Solution {
    public void solve() {
        // TODO: Implement solution
    }
}`,python:`# Python Solution for Detect a cycle in an undirected graph using BFS
# This solution is currently being prepared.

def solve():
    # TODO: Implement solution
    pass`}}},{title:"Detect a cycle in an undirected graph using DFS",platform:"GeeksForGeeks",link:"https://practice.geeksforgeeks.org/problems/detect-cycle-in-an-undirected-graph/1",content:{description:"Solution for Detect a cycle in an undirected graph using DFS. Logic and implementation details coming soon.",code:{cpp:`// C++ Solution for Detect a cycle in an undirected graph using DFS
// This solution is currently being prepared.

void solve() {
    // TODO: Implement solution
}`,java:`// Java Solution for Detect a cycle in an undirected graph using DFS
// This solution is currently being prepared.

class Solution {
    public void solve() {
        // TODO: Implement solution
    }
}`,python:`# Python Solution for Detect a cycle in an undirected graph using DFS
# This solution is currently being prepared.

def solve():
    # TODO: Implement solution
    pass`}}},{title:"0/1 Matrix (Bfs Problem)",platform:"LeetCode",link:"https://leetcode.com/problems/01-matrix/",content:{description:"Solution for 0/1 Matrix (Bfs Problem). Logic and implementation details coming soon.",code:{cpp:`// C++ Solution for 0/1 Matrix (Bfs Problem)
// This solution is currently being prepared.

void solve() {
    // TODO: Implement solution
}`,java:`// Java Solution for 0/1 Matrix (Bfs Problem)
// This solution is currently being prepared.

class Solution {
    public void solve() {
        // TODO: Implement solution
    }
}`,python:`# Python Solution for 0/1 Matrix (Bfs Problem)
# This solution is currently being prepared.

def solve():
    # TODO: Implement solution
    pass`}}},{title:"Surrounded Regions",platform:"LeetCode",link:"https://leetcode.com/problems/surrounded-regions/",content:{description:"Solution for Surrounded Regions. Logic and implementation details coming soon.",code:{cpp:`// C++ Solution for Surrounded Regions
// This solution is currently being prepared.

void solve() {
    // TODO: Implement solution
}`,java:`// Java Solution for Surrounded Regions
// This solution is currently being prepared.

class Solution {
    public void solve() {
        // TODO: Implement solution
    }
}`,python:`# Python Solution for Surrounded Regions
# This solution is currently being prepared.

def solve():
    # TODO: Implement solution
    pass`}}},{title:"Number of Enclaves",platform:"LeetCode",link:"https://leetcode.com/problems/number-of-enclaves/",content:{description:"Solution for Number of Enclaves. Logic and implementation details coming soon.",code:{cpp:`// C++ Solution for Number of Enclaves
// This solution is currently being prepared.

void solve() {
    // TODO: Implement solution
}`,java:`// Java Solution for Number of Enclaves
// This solution is currently being prepared.

class Solution {
    public void solve() {
        // TODO: Implement solution
    }
}`,python:`# Python Solution for Number of Enclaves
# This solution is currently being prepared.

def solve():
    # TODO: Implement solution
    pass`}}},{title:"Word Ladder - 1",platform:"LeetCode",link:"https://leetcode.com/problems/word-ladder/",content:{description:"Solution for Word Ladder - 1. Logic and implementation details coming soon.",code:{cpp:`// C++ Solution for Word Ladder - 1
// This solution is currently being prepared.

void solve() {
    // TODO: Implement solution
}`,java:`// Java Solution for Word Ladder - 1
// This solution is currently being prepared.

class Solution {
    public void solve() {
        // TODO: Implement solution
    }
}`,python:`# Python Solution for Word Ladder - 1
# This solution is currently being prepared.

def solve():
    # TODO: Implement solution
    pass`}}},{title:"Word Ladder - 2",platform:"LeetCode",link:"https://leetcode.com/problems/word-ladder-ii/",content:{description:"Solution for Word Ladder - 2. Logic and implementation details coming soon.",code:{cpp:`// C++ Solution for Word Ladder - 2
// This solution is currently being prepared.

void solve() {
    // TODO: Implement solution
}`,java:`// Java Solution for Word Ladder - 2
// This solution is currently being prepared.

class Solution {
    public void solve() {
        // TODO: Implement solution
    }
}`,python:`# Python Solution for Word Ladder - 2
# This solution is currently being prepared.

def solve():
    # TODO: Implement solution
    pass`}}},{title:"Number of Distinct Islands",platform:"GeeksForGeeks",link:"https://practice.geeksforgeeks.org/problems/number-of-distinct-islands/1",content:{description:"Solution for Number of Distinct Islands. Logic and implementation details coming soon.",code:{cpp:`// C++ Solution for Number of Distinct Islands
// This solution is currently being prepared.

void solve() {
    // TODO: Implement solution
}`,java:`// Java Solution for Number of Distinct Islands
// This solution is currently being prepared.

class Solution {
    public void solve() {
        // TODO: Implement solution
    }
}`,python:`# Python Solution for Number of Distinct Islands
# This solution is currently being prepared.

def solve():
    # TODO: Implement solution
    pass`}}},{title:"Bipartite Graph (DFS)",platform:"LeetCode",link:"https://leetcode.com/problems/is-graph-bipartite/",content:{description:"Solution for Bipartite Graph (DFS). Logic and implementation details coming soon.",code:{cpp:`// C++ Solution for Bipartite Graph (DFS)
// This solution is currently being prepared.

void solve() {
    // TODO: Implement solution
}`,java:`// Java Solution for Bipartite Graph (DFS)
// This solution is currently being prepared.

class Solution {
    public void solve() {
        // TODO: Implement solution
    }
}`,python:`# Python Solution for Bipartite Graph (DFS)
# This solution is currently being prepared.

def solve():
    # TODO: Implement solution
    pass`}}},{title:"Detect a cycle in directed graph using DFS",platform:"GeeksForGeeks",link:"https://practice.geeksforgeeks.org/problems/detect-cycle-in-a-directed-graph/1",content:{description:"Solution for Detect a cycle in directed graph using DFS. Logic and implementation details coming soon.",code:{cpp:`// C++ Solution for Detect a cycle in directed graph using DFS
// This solution is currently being prepared.

void solve() {
    // TODO: Implement solution
}`,java:`// Java Solution for Detect a cycle in directed graph using DFS
// This solution is currently being prepared.

class Solution {
    public void solve() {
        // TODO: Implement solution
    }
}`,python:`# Python Solution for Detect a cycle in directed graph using DFS
# This solution is currently being prepared.

def solve():
    # TODO: Implement solution
    pass`}}}]},{title:"Topo Sort and Problems",problems:[{title:"Topological Sort Algorithm (DFS)",platform:"GeeksForGeeks",link:"https://practice.geeksforgeeks.org/problems/topological-sort/1",content:{description:"Solution for Topological Sort Algorithm (DFS). Logic and implementation details coming soon.",code:{cpp:`// C++ Solution for Topological Sort Algorithm (DFS)
// This solution is currently being prepared.

void solve() {
    // TODO: Implement solution
}`,java:`// Java Solution for Topological Sort Algorithm (DFS)
// This solution is currently being prepared.

class Solution {
    public void solve() {
        // TODO: Implement solution
    }
}`,python:`# Python Solution for Topological Sort Algorithm (DFS)
# This solution is currently being prepared.

def solve():
    # TODO: Implement solution
    pass`}}},{title:"Kahn's Algorithm (BFS)",platform:"GeeksForGeeks",link:"https://practice.geeksforgeeks.org/problems/topological-sort/1",content:{description:"Solution for Kahn's Algorithm (BFS). Logic and implementation details coming soon.",code:{cpp:`// C++ Solution for Kahn's Algorithm (BFS)
// This solution is currently being prepared.

void solve() {
    // TODO: Implement solution
}`,java:`// Java Solution for Kahn's Algorithm (BFS)
// This solution is currently being prepared.

class Solution {
    public void solve() {
        // TODO: Implement solution
    }
}`,python:`# Python Solution for Kahn's Algorithm (BFS)
# This solution is currently being prepared.

def solve():
    # TODO: Implement solution
    pass`}}},{title:"Detect a cycle in Directed Graph using BFS",platform:"GeeksForGeeks",link:"https://practice.geeksforgeeks.org/problems/detect-cycle-in-a-directed-graph/1",content:{description:"Solution for Detect a cycle in Directed Graph using BFS. Logic and implementation details coming soon.",code:{cpp:`// C++ Solution for Detect a cycle in Directed Graph using BFS
// This solution is currently being prepared.

void solve() {
    // TODO: Implement solution
}`,java:`// Java Solution for Detect a cycle in Directed Graph using BFS
// This solution is currently being prepared.

class Solution {
    public void solve() {
        // TODO: Implement solution
    }
}`,python:`# Python Solution for Detect a cycle in Directed Graph using BFS
# This solution is currently being prepared.

def solve():
    # TODO: Implement solution
    pass`}}},{title:"Course Schedule - I",platform:"LeetCode",link:"https://leetcode.com/problems/course-schedule/",content:{description:"Solution for Course Schedule - I. Logic and implementation details coming soon.",code:{cpp:`// C++ Solution for Course Schedule - I
// This solution is currently being prepared.

void solve() {
    // TODO: Implement solution
}`,java:`// Java Solution for Course Schedule - I
// This solution is currently being prepared.

class Solution {
    public void solve() {
        // TODO: Implement solution
    }
}`,python:`# Python Solution for Course Schedule - I
# This solution is currently being prepared.

def solve():
    # TODO: Implement solution
    pass`}}},{title:"Course Schedule - II",platform:"LeetCode",link:"https://leetcode.com/problems/course-schedule-ii/",content:{description:"Solution for Course Schedule - II. Logic and implementation details coming soon.",code:{cpp:`// C++ Solution for Course Schedule - II
// This solution is currently being prepared.

void solve() {
    // TODO: Implement solution
}`,java:`// Java Solution for Course Schedule - II
// This solution is currently being prepared.

class Solution {
    public void solve() {
        // TODO: Implement solution
    }
}`,python:`# Python Solution for Course Schedule - II
# This solution is currently being prepared.

def solve():
    # TODO: Implement solution
    pass`}}},{title:"Find eventual safe states",platform:"LeetCode",link:"https://leetcode.com/problems/find-eventual-safe-states/",content:{description:"Solution for Find eventual safe states. Logic and implementation details coming soon.",code:{cpp:`// C++ Solution for Find eventual safe states
// This solution is currently being prepared.

void solve() {
    // TODO: Implement solution
}`,java:`// Java Solution for Find eventual safe states
// This solution is currently being prepared.

class Solution {
    public void solve() {
        // TODO: Implement solution
    }
}`,python:`# Python Solution for Find eventual safe states
# This solution is currently being prepared.

def solve():
    # TODO: Implement solution
    pass`}}},{title:"Alien Dictionary",platform:"GeeksForGeeks",link:"https://practice.geeksforgeeks.org/problems/alien-dictionary/1",content:{description:"Solution for Alien Dictionary. Logic and implementation details coming soon.",code:{cpp:`// C++ Solution for Alien Dictionary
// This solution is currently being prepared.

void solve() {
    // TODO: Implement solution
}`,java:`// Java Solution for Alien Dictionary
// This solution is currently being prepared.

class Solution {
    public void solve() {
        // TODO: Implement solution
    }
}`,python:`# Python Solution for Alien Dictionary
# This solution is currently being prepared.

def solve():
    # TODO: Implement solution
    pass`}}}]},{title:"Shortest Path Algorithms",problems:[{title:"Shortest Path in UG with unit weights",platform:"GeeksForGeeks",link:"https://practice.geeksforgeeks.org/problems/shortest-path-in-undirected-graph-having-unit-distance/1",content:{description:"Solution for Shortest Path in UG with unit weights. Logic and implementation details coming soon.",code:{cpp:`// C++ Solution for Shortest Path in UG with unit weights
// This solution is currently being prepared.

void solve() {
    // TODO: Implement solution
}`,java:`// Java Solution for Shortest Path in UG with unit weights
// This solution is currently being prepared.

class Solution {
    public void solve() {
        // TODO: Implement solution
    }
}`,python:`# Python Solution for Shortest Path in UG with unit weights
# This solution is currently being prepared.

def solve():
    # TODO: Implement solution
    pass`}}},{title:"Shortest Path in DAG",platform:"GeeksForGeeks",link:"https://practice.geeksforgeeks.org/problems/shortest-path-in-undirected-graph/1",content:{description:"Solution for Shortest Path in DAG. Logic and implementation details coming soon.",code:{cpp:`// C++ Solution for Shortest Path in DAG
// This solution is currently being prepared.

void solve() {
    // TODO: Implement solution
}`,java:`// Java Solution for Shortest Path in DAG
// This solution is currently being prepared.

class Solution {
    public void solve() {
        // TODO: Implement solution
    }
}`,python:`# Python Solution for Shortest Path in DAG
# This solution is currently being prepared.

def solve():
    # TODO: Implement solution
    pass`}}},{title:"Dijkstra's Algorithm",platform:"GeeksForGeeks",link:"https://practice.geeksforgeeks.org/problems/implementing-dijkstra-set-1-adjacency-matrix/1",content:{description:"Solution for Dijkstra's Algorithm. Logic and implementation details coming soon.",code:{cpp:`// C++ Solution for Dijkstra's Algorithm
// This solution is currently being prepared.

void solve() {
    // TODO: Implement solution
}`,java:`// Java Solution for Dijkstra's Algorithm
// This solution is currently being prepared.

class Solution {
    public void solve() {
        // TODO: Implement solution
    }
}`,python:`# Python Solution for Dijkstra's Algorithm
# This solution is currently being prepared.

def solve():
    # TODO: Implement solution
    pass`}}},{title:"Shortest path in a binary maze",platform:"GeeksForGeeks",link:"https://practice.geeksforgeeks.org/problems/shortest-path-in-a-binary-maze-1655453161/1",content:{description:"Solution for Shortest path in a binary maze. Logic and implementation details coming soon.",code:{cpp:`// C++ Solution for Shortest path in a binary maze
// This solution is currently being prepared.

void solve() {
    // TODO: Implement solution
}`,java:`// Java Solution for Shortest path in a binary maze
// This solution is currently being prepared.

class Solution {
    public void solve() {
        // TODO: Implement solution
    }
}`,python:`# Python Solution for Shortest path in a binary maze
# This solution is currently being prepared.

def solve():
    # TODO: Implement solution
    pass`}}},{title:"Path with minimum effort",platform:"LeetCode",link:"https://leetcode.com/problems/path-with-minimum-effort/",content:{description:"Solution for Path with minimum effort. Logic and implementation details coming soon.",code:{cpp:`// C++ Solution for Path with minimum effort
// This solution is currently being prepared.

void solve() {
    // TODO: Implement solution
}`,java:`// Java Solution for Path with minimum effort
// This solution is currently being prepared.

class Solution {
    public void solve() {
        // TODO: Implement solution
    }
}`,python:`# Python Solution for Path with minimum effort
# This solution is currently being prepared.

def solve():
    # TODO: Implement solution
    pass`}}},{title:"Cheapest flights within k stops",platform:"LeetCode",link:"https://leetcode.com/problems/cheapest-flights-within-k-stops/",content:{description:"Solution for Cheapest flights within k stops. Logic and implementation details coming soon.",code:{cpp:`// C++ Solution for Cheapest flights within k stops
// This solution is currently being prepared.

void solve() {
    // TODO: Implement solution
}`,java:`// Java Solution for Cheapest flights within k stops
// This solution is currently being prepared.

class Solution {
    public void solve() {
        // TODO: Implement solution
    }
}`,python:`# Python Solution for Cheapest flights within k stops
# This solution is currently being prepared.

def solve():
    # TODO: Implement solution
    pass`}}},{title:"Network Delay Time",platform:"LeetCode",link:"https://leetcode.com/problems/network-delay-time/",content:{description:"Solution for Network Delay Time. Logic and implementation details coming soon.",code:{cpp:`// C++ Solution for Network Delay Time
// This solution is currently being prepared.

void solve() {
    // TODO: Implement solution
}`,java:`// Java Solution for Network Delay Time
// This solution is currently being prepared.

class Solution {
    public void solve() {
        // TODO: Implement solution
    }
}`,python:`# Python Solution for Network Delay Time
# This solution is currently being prepared.

def solve():
    # TODO: Implement solution
    pass`}}},{title:"Number of ways to arrive at destination",platform:"LeetCode",link:"https://leetcode.com/problems/number-of-ways-to-arrive-at-destination/",content:{description:"Solution for Number of ways to arrive at destination. Logic and implementation details coming soon.",code:{cpp:`// C++ Solution for Number of ways to arrive at destination
// This solution is currently being prepared.

void solve() {
    // TODO: Implement solution
}`,java:`// Java Solution for Number of ways to arrive at destination
// This solution is currently being prepared.

class Solution {
    public void solve() {
        // TODO: Implement solution
    }
}`,python:`# Python Solution for Number of ways to arrive at destination
# This solution is currently being prepared.

def solve():
    # TODO: Implement solution
    pass`}}},{title:"Minimum steps to reach target by knight",platform:"GeeksForGeeks",link:"https://practice.geeksforgeeks.org/problems/steps-by-knight5927/1",content:{description:"Solution for Minimum steps to reach target by knight. Logic and implementation details coming soon.",code:{cpp:`// C++ Solution for Minimum steps to reach target by knight
// This solution is currently being prepared.

void solve() {
    // TODO: Implement solution
}`,java:`// Java Solution for Minimum steps to reach target by knight
// This solution is currently being prepared.

class Solution {
    public void solve() {
        // TODO: Implement solution
    }
}`,python:`# Python Solution for Minimum steps to reach target by knight
# This solution is currently being prepared.

def solve():
    # TODO: Implement solution
    pass`}}},{title:"Print shortest path",platform:"GeeksForGeeks",link:"https://practice.geeksforgeeks.org/problems/shortest-path-in-weighted-undirected-graph/1",content:{description:"Solution for Print shortest path. Logic and implementation details coming soon.",code:{cpp:`// C++ Solution for Print shortest path
// This solution is currently being prepared.

void solve() {
    // TODO: Implement solution
}`,java:`// Java Solution for Print shortest path
// This solution is currently being prepared.

class Solution {
    public void solve() {
        // TODO: Implement solution
    }
}`,python:`# Python Solution for Print shortest path
# This solution is currently being prepared.

def solve():
    # TODO: Implement solution
    pass`}}},{title:"Bellman Ford Algorithm",platform:"GeeksForGeeks",link:"https://practice.geeksforgeeks.org/problems/distance-from-the-source-bellman-ford-algorithm/1",content:{description:"Solution for Bellman Ford Algorithm. Logic and implementation details coming soon.",code:{cpp:`// C++ Solution for Bellman Ford Algorithm
// This solution is currently being prepared.

void solve() {
    // TODO: Implement solution
}`,java:`// Java Solution for Bellman Ford Algorithm
// This solution is currently being prepared.

class Solution {
    public void solve() {
        // TODO: Implement solution
    }
}`,python:`# Python Solution for Bellman Ford Algorithm
# This solution is currently being prepared.

def solve():
    # TODO: Implement solution
    pass`}}},{title:"Floyd Warshall Algorithm",platform:"GeeksForGeeks",link:"https://practice.geeksforgeeks.org/problems/implementing-floyd-warshall2042/1",content:{description:"Solution for Floyd Warshall Algorithm. Logic and implementation details coming soon.",code:{cpp:`// C++ Solution for Floyd Warshall Algorithm
// This solution is currently being prepared.

void solve() {
    // TODO: Implement solution
}`,java:`// Java Solution for Floyd Warshall Algorithm
// This solution is currently being prepared.

class Solution {
    public void solve() {
        // TODO: Implement solution
    }
}`,python:`# Python Solution for Floyd Warshall Algorithm
# This solution is currently being prepared.

def solve():
    # TODO: Implement solution
    pass`}}},{title:"Find the city with the smallest number of neighbors at a threshold distance",platform:"LeetCode",link:"https://leetcode.com/problems/find-the-city-with-the-smallest-number-of-neighbors-at-a-threshold-distance/",content:{description:"Solution for Find the city with the smallest number of neighbors at a threshold distance. Logic and implementation details coming soon.",code:{cpp:`// C++ Solution for Find the city with the smallest number of neighbors at a threshold distance
// This solution is currently being prepared.

void solve() {
    // TODO: Implement solution
}`,java:`// Java Solution for Find the city with the smallest number of neighbors at a threshold distance
// This solution is currently being prepared.

class Solution {
    public void solve() {
        // TODO: Implement solution
    }
}`,python:`# Python Solution for Find the city with the smallest number of neighbors at a threshold distance
# This solution is currently being prepared.

def solve():
    # TODO: Implement solution
    pass`}}}]},{title:"Minimum Spanning Tree / Disjoint Set",problems:[{title:"Minimum Spanning Tree",platform:"GeeksForGeeks",link:"https://practice.geeksforgeeks.org/problems/minimum-spanning-tree/1",content:{description:"Solution for Minimum Spanning Tree. Logic and implementation details coming soon.",code:{cpp:`// C++ Solution for Minimum Spanning Tree
// This solution is currently being prepared.

void solve() {
    // TODO: Implement solution
}`,java:`// Java Solution for Minimum Spanning Tree
// This solution is currently being prepared.

class Solution {
    public void solve() {
        // TODO: Implement solution
    }
}`,python:`# Python Solution for Minimum Spanning Tree
# This solution is currently being prepared.

def solve():
    # TODO: Implement solution
    pass`}}},{title:"Prim's Algorithm",platform:"GeeksForGeeks",link:"https://practice.geeksforgeeks.org/problems/minimum-spanning-tree/1",content:{description:"Solution for Prim's Algorithm. Logic and implementation details coming soon.",code:{cpp:`// C++ Solution for Prim's Algorithm
// This solution is currently being prepared.

void solve() {
    // TODO: Implement solution
}`,java:`// Java Solution for Prim's Algorithm
// This solution is currently being prepared.

class Solution {
    public void solve() {
        // TODO: Implement solution
    }
}`,python:`# Python Solution for Prim's Algorithm
# This solution is currently being prepared.

def solve():
    # TODO: Implement solution
    pass`}}},{title:"Disjoint Set [Union by Rank]",platform:"GeeksForGeeks",link:"https://practice.geeksforgeeks.org/problems/disjoint-set-union-find/1",content:{description:"Solution for Disjoint Set [Union by Rank]. Logic and implementation details coming soon.",code:{cpp:`// C++ Solution for Disjoint Set [Union by Rank]
// This solution is currently being prepared.

void solve() {
    // TODO: Implement solution
}`,java:`// Java Solution for Disjoint Set [Union by Rank]
// This solution is currently being prepared.

class Solution {
    public void solve() {
        // TODO: Implement solution
    }
}`,python:`# Python Solution for Disjoint Set [Union by Rank]
# This solution is currently being prepared.

def solve():
    # TODO: Implement solution
    pass`}}},{title:"Disjoint Set [Union by Size]",platform:"GeeksForGeeks",link:"https://practice.geeksforgeeks.org/problems/disjoint-set-union-find/1",content:{description:"Solution for Disjoint Set [Union by Size]. Logic and implementation details coming soon.",code:{cpp:`// C++ Solution for Disjoint Set [Union by Size]
// This solution is currently being prepared.

void solve() {
    // TODO: Implement solution
}`,java:`// Java Solution for Disjoint Set [Union by Size]
// This solution is currently being prepared.

class Solution {
    public void solve() {
        // TODO: Implement solution
    }
}`,python:`# Python Solution for Disjoint Set [Union by Size]
# This solution is currently being prepared.

def solve():
    # TODO: Implement solution
    pass`}}},{title:"Kruskal's Algorithm",platform:"GeeksForGeeks",link:"https://practice.geeksforgeeks.org/problems/minimum-spanning-tree/1",content:{description:"Solution for Kruskal's Algorithm. Logic and implementation details coming soon.",code:{cpp:`// C++ Solution for Kruskal's Algorithm
// This solution is currently being prepared.

void solve() {
    // TODO: Implement solution
}`,java:`// Java Solution for Kruskal's Algorithm
// This solution is currently being prepared.

class Solution {
    public void solve() {
        // TODO: Implement solution
    }
}`,python:`# Python Solution for Kruskal's Algorithm
# This solution is currently being prepared.

def solve():
    # TODO: Implement solution
    pass`}}},{title:"Number of operations to make network connected",platform:"LeetCode",link:"https://leetcode.com/problems/number-of-operations-to-make-network-connected/",content:{description:"Solution for Number of operations to make network connected. Logic and implementation details coming soon.",code:{cpp:`// C++ Solution for Number of operations to make network connected
// This solution is currently being prepared.

void solve() {
    // TODO: Implement solution
}`,java:`// Java Solution for Number of operations to make network connected
// This solution is currently being prepared.

class Solution {
    public void solve() {
        // TODO: Implement solution
    }
}`,python:`# Python Solution for Number of operations to make network connected
# This solution is currently being prepared.

def solve():
    # TODO: Implement solution
    pass`}}},{title:"Accounts Merge",platform:"LeetCode",link:"https://leetcode.com/problems/accounts-merge/",content:{description:"Solution for Accounts Merge. Logic and implementation details coming soon.",code:{cpp:`// C++ Solution for Accounts Merge
// This solution is currently being prepared.

void solve() {
    // TODO: Implement solution
}`,java:`// Java Solution for Accounts Merge
// This solution is currently being prepared.

class Solution {
    public void solve() {
        // TODO: Implement solution
    }
}`,python:`# Python Solution for Accounts Merge
# This solution is currently being prepared.

def solve():
    # TODO: Implement solution
    pass`}}},{title:"Number of islands - II",platform:"GeeksForGeeks",link:"https://practice.geeksforgeeks.org/problems/number-of-islands/1",content:{description:"Solution for Number of islands - II. Logic and implementation details coming soon.",code:{cpp:`// C++ Solution for Number of islands - II
// This solution is currently being prepared.

void solve() {
    // TODO: Implement solution
}`,java:`// Java Solution for Number of islands - II
// This solution is currently being prepared.

class Solution {
    public void solve() {
        // TODO: Implement solution
    }
}`,python:`# Python Solution for Number of islands - II
# This solution is currently being prepared.

def solve():
    # TODO: Implement solution
    pass`}}},{title:"Making a Large Island",platform:"LeetCode",link:"https://leetcode.com/problems/making-a-large-island/",content:{description:"Solution for Making a Large Island. Logic and implementation details coming soon.",code:{cpp:`// C++ Solution for Making a Large Island
// This solution is currently being prepared.

void solve() {
    // TODO: Implement solution
}`,java:`// Java Solution for Making a Large Island
// This solution is currently being prepared.

class Solution {
    public void solve() {
        // TODO: Implement solution
    }
}`,python:`# Python Solution for Making a Large Island
# This solution is currently being prepared.

def solve():
    # TODO: Implement solution
    pass`}}},{title:"Swim in rising water",platform:"LeetCode",link:"https://leetcode.com/problems/swim-in-rising-water/",content:{description:"Solution for Swim in rising water. Logic and implementation details coming soon.",code:{cpp:`// C++ Solution for Swim in rising water
// This solution is currently being prepared.

void solve() {
    // TODO: Implement solution
}`,java:`// Java Solution for Swim in rising water
// This solution is currently being prepared.

class Solution {
    public void solve() {
        // TODO: Implement solution
    }
}`,python:`# Python Solution for Swim in rising water
# This solution is currently being prepared.

def solve():
    # TODO: Implement solution
    pass`}}}]},{title:"Other Algorithms",problems:[{title:"Bridges in Graph",platform:"GeeksForGeeks",link:"https://practice.geeksforgeeks.org/problems/bridge-edge-in-graph/1",content:{description:"Solution for Bridges in Graph. Logic and implementation details coming soon.",code:{cpp:`// C++ Solution for Bridges in Graph
// This solution is currently being prepared.

void solve() {
    // TODO: Implement solution
}`,java:`// Java Solution for Bridges in Graph
// This solution is currently being prepared.

class Solution {
    public void solve() {
        // TODO: Implement solution
    }
}`,python:`# Python Solution for Bridges in Graph
# This solution is currently being prepared.

def solve():
    # TODO: Implement solution
    pass`}}},{title:"Articulation Point",platform:"GeeksForGeeks",link:"https://practice.geeksforgeeks.org/problems/articulation-point-1/1",content:{description:"Solution for Articulation Point. Logic and implementation details coming soon.",code:{cpp:`// C++ Solution for Articulation Point
// This solution is currently being prepared.

void solve() {
    // TODO: Implement solution
}`,java:`// Java Solution for Articulation Point
// This solution is currently being prepared.

class Solution {
    public void solve() {
        // TODO: Implement solution
    }
}`,python:`# Python Solution for Articulation Point
# This solution is currently being prepared.

def solve():
    # TODO: Implement solution
    pass`}}},{title:"Kosaraju's Algorithm",platform:"GeeksForGeeks",link:"https://practice.geeksforgeeks.org/problems/strongly-connected-components-kosarajus-algo/1",content:{description:"Solution for Kosaraju's Algorithm. Logic and implementation details coming soon.",code:{cpp:`// C++ Solution for Kosaraju's Algorithm
// This solution is currently being prepared.

void solve() {
    // TODO: Implement solution
}`,java:`// Java Solution for Kosaraju's Algorithm
// This solution is currently being prepared.

class Solution {
    public void solve() {
        // TODO: Implement solution
    }
}`,python:`# Python Solution for Kosaraju's Algorithm
# This solution is currently being prepared.

def solve():
    # TODO: Implement solution
    pass`}}}]}]},{title:"Dynamic Programming",totalProblems:56,subtopics:[{title:"1D DP",problems:[{title:"Climbing Stairs",platform:"LeetCode",link:"https://leetcode.com/problems/climbing-stairs/",content:{description:"Solution for Climbing Stairs. Logic and implementation details coming soon.",code:{cpp:`// C++ Solution for Climbing Stairs
// This solution is currently being prepared.

void solve() {
    // TODO: Implement solution
}`,java:`// Java Solution for Climbing Stairs
// This solution is currently being prepared.

class Solution {
    public void solve() {
        // TODO: Implement solution
    }
}`,python:`# Python Solution for Climbing Stairs
# This solution is currently being prepared.

def solve():
    # TODO: Implement solution
    pass`}}},{title:"Frog Jump (DP-3)",platform:"GeeksForGeeks",link:"https://practice.geeksforgeeks.org/problems/geek-jump/1",content:{description:"Solution for Frog Jump (DP-3). Logic and implementation details coming soon.",code:{cpp:`// C++ Solution for Frog Jump (DP-3)
// This solution is currently being prepared.

void solve() {
    // TODO: Implement solution
}`,java:`// Java Solution for Frog Jump (DP-3)
// This solution is currently being prepared.

class Solution {
    public void solve() {
        // TODO: Implement solution
    }
}`,python:`# Python Solution for Frog Jump (DP-3)
# This solution is currently being prepared.

def solve():
    # TODO: Implement solution
    pass`}}},{title:"Frog Jump with k distances (DP-4)",platform:"GeeksForGeeks",link:"https://practice.geeksforgeeks.org/problems/minimal-cost/1",content:{description:"Solution for Frog Jump with k distances (DP-4). Logic and implementation details coming soon.",code:{cpp:`// C++ Solution for Frog Jump with k distances (DP-4)
// This solution is currently being prepared.

void solve() {
    // TODO: Implement solution
}`,java:`// Java Solution for Frog Jump with k distances (DP-4)
// This solution is currently being prepared.

class Solution {
    public void solve() {
        // TODO: Implement solution
    }
}`,python:`# Python Solution for Frog Jump with k distances (DP-4)
# This solution is currently being prepared.

def solve():
    # TODO: Implement solution
    pass`}}},{title:"Maximum sum of non-adjacent elements (DP-5)",platform:"GeeksForGeeks",link:"https://practice.geeksforgeeks.org/problems/stickler-theif-1587115621/1",content:{description:"Solution for Maximum sum of non-adjacent elements (DP-5). Logic and implementation details coming soon.",code:{cpp:`// C++ Solution for Maximum sum of non-adjacent elements (DP-5)
// This solution is currently being prepared.

void solve() {
    // TODO: Implement solution
}`,java:`// Java Solution for Maximum sum of non-adjacent elements (DP-5)
// This solution is currently being prepared.

class Solution {
    public void solve() {
        // TODO: Implement solution
    }
}`,python:`# Python Solution for Maximum sum of non-adjacent elements (DP-5)
# This solution is currently being prepared.

def solve():
    # TODO: Implement solution
    pass`}}},{title:"House Robber (DP-6)",platform:"LeetCode",link:"https://leetcode.com/problems/house-robber/",content:{description:"Solution for House Robber (DP-6). Logic and implementation details coming soon.",code:{cpp:`// C++ Solution for House Robber (DP-6)
// This solution is currently being prepared.

void solve() {
    // TODO: Implement solution
}`,java:`// Java Solution for House Robber (DP-6)
// This solution is currently being prepared.

class Solution {
    public void solve() {
        // TODO: Implement solution
    }
}`,python:`# Python Solution for House Robber (DP-6)
# This solution is currently being prepared.

def solve():
    # TODO: Implement solution
    pass`}}},{title:"House Robber 2 (DP-6)",platform:"LeetCode",link:"https://leetcode.com/problems/house-robber-ii/",content:{description:"Solution for House Robber 2 (DP-6). Logic and implementation details coming soon.",code:{cpp:`// C++ Solution for House Robber 2 (DP-6)
// This solution is currently being prepared.

void solve() {
    // TODO: Implement solution
}`,java:`// Java Solution for House Robber 2 (DP-6)
// This solution is currently being prepared.

class Solution {
    public void solve() {
        // TODO: Implement solution
    }
}`,python:`# Python Solution for House Robber 2 (DP-6)
# This solution is currently being prepared.

def solve():
    # TODO: Implement solution
    pass`}}}]},{title:"2D/3D DP and DP on Grids",problems:[{title:"Ninja's Training (DP-7)",platform:"GeeksForGeeks",link:"https://practice.geeksforgeeks.org/problems/geeks-training/1",content:{description:"Solution for Ninja's Training (DP-7). Logic and implementation details coming soon.",code:{cpp:`// C++ Solution for Ninja's Training (DP-7)
// This solution is currently being prepared.

void solve() {
    // TODO: Implement solution
}`,java:`// Java Solution for Ninja's Training (DP-7)
// This solution is currently being prepared.

class Solution {
    public void solve() {
        // TODO: Implement solution
    }
}`,python:`# Python Solution for Ninja's Training (DP-7)
# This solution is currently being prepared.

def solve():
    # TODO: Implement solution
    pass`}}},{title:"Grid Unique Paths (DP-8)",platform:"LeetCode",link:"https://leetcode.com/problems/unique-paths/",content:{description:"Solution for Grid Unique Paths (DP-8). Logic and implementation details coming soon.",code:{cpp:`// C++ Solution for Grid Unique Paths (DP-8)
// This solution is currently being prepared.

void solve() {
    // TODO: Implement solution
}`,java:`// Java Solution for Grid Unique Paths (DP-8)
// This solution is currently being prepared.

class Solution {
    public void solve() {
        // TODO: Implement solution
    }
}`,python:`# Python Solution for Grid Unique Paths (DP-8)
# This solution is currently being prepared.

def solve():
    # TODO: Implement solution
    pass`}}},{title:"Grid Unique Paths 2 (DP-9)",platform:"LeetCode",link:"https://leetcode.com/problems/unique-paths-ii/",content:{description:"Solution for Grid Unique Paths 2 (DP-9). Logic and implementation details coming soon.",code:{cpp:`// C++ Solution for Grid Unique Paths 2 (DP-9)
// This solution is currently being prepared.

void solve() {
    // TODO: Implement solution
}`,java:`// Java Solution for Grid Unique Paths 2 (DP-9)
// This solution is currently being prepared.

class Solution {
    public void solve() {
        // TODO: Implement solution
    }
}`,python:`# Python Solution for Grid Unique Paths 2 (DP-9)
# This solution is currently being prepared.

def solve():
    # TODO: Implement solution
    pass`}}},{title:"Minimum path sum in Grid (DP-10)",platform:"LeetCode",link:"https://leetcode.com/problems/minimum-path-sum/",content:{description:"Solution for Minimum path sum in Grid (DP-10). Logic and implementation details coming soon.",code:{cpp:`// C++ Solution for Minimum path sum in Grid (DP-10)
// This solution is currently being prepared.

void solve() {
    // TODO: Implement solution
}`,java:`// Java Solution for Minimum path sum in Grid (DP-10)
// This solution is currently being prepared.

class Solution {
    public void solve() {
        // TODO: Implement solution
    }
}`,python:`# Python Solution for Minimum path sum in Grid (DP-10)
# This solution is currently being prepared.

def solve():
    # TODO: Implement solution
    pass`}}},{title:"Minimum path sum in Triangular Grid (DP-11)",platform:"LeetCode",link:"https://leetcode.com/problems/triangle/",content:{description:"Solution for Minimum path sum in Triangular Grid (DP-11). Logic and implementation details coming soon.",code:{cpp:`// C++ Solution for Minimum path sum in Triangular Grid (DP-11)
// This solution is currently being prepared.

void solve() {
    // TODO: Implement solution
}`,java:`// Java Solution for Minimum path sum in Triangular Grid (DP-11)
// This solution is currently being prepared.

class Solution {
    public void solve() {
        // TODO: Implement solution
    }
}`,python:`# Python Solution for Minimum path sum in Triangular Grid (DP-11)
# This solution is currently being prepared.

def solve():
    # TODO: Implement solution
    pass`}}},{title:"Minimum/Maximum Falling Path Sum (DP-12)",platform:"LeetCode",link:"https://leetcode.com/problems/minimum-falling-path-sum/",content:{description:"Solution for Minimum/Maximum Falling Path Sum (DP-12). Logic and implementation details coming soon.",code:{cpp:`// C++ Solution for Minimum/Maximum Falling Path Sum (DP-12)
// This solution is currently being prepared.

void solve() {
    // TODO: Implement solution
}`,java:`// Java Solution for Minimum/Maximum Falling Path Sum (DP-12)
// This solution is currently being prepared.

class Solution {
    public void solve() {
        // TODO: Implement solution
    }
}`,python:`# Python Solution for Minimum/Maximum Falling Path Sum (DP-12)
# This solution is currently being prepared.

def solve():
    # TODO: Implement solution
    pass`}}},{title:"3-d DP : Ninja and his friends (DP-13)",platform:"GeeksForGeeks",link:"https://practice.geeksforgeeks.org/problems/chocolates-pickup/1",content:{description:"Solution for 3-d DP : Ninja and his friends (DP-13). Logic and implementation details coming soon.",code:{cpp:`// C++ Solution for 3-d DP : Ninja and his friends (DP-13)
// This solution is currently being prepared.

void solve() {
    // TODO: Implement solution
}`,java:`// Java Solution for 3-d DP : Ninja and his friends (DP-13)
// This solution is currently being prepared.

class Solution {
    public void solve() {
        // TODO: Implement solution
    }
}`,python:`# Python Solution for 3-d DP : Ninja and his friends (DP-13)
# This solution is currently being prepared.

def solve():
    # TODO: Implement solution
    pass`}}}]},{title:"DP on Subsequences",problems:[{title:"Subset sum equal to target (DP-14)",platform:"GeeksForGeeks",link:"https://practice.geeksforgeeks.org/problems/subset-sum-problem-1611555638/1",content:{description:"Solution for Subset sum equal to target (DP-14). Logic and implementation details coming soon.",code:{cpp:`// C++ Solution for Subset sum equal to target (DP-14)
// This solution is currently being prepared.

void solve() {
    // TODO: Implement solution
}`,java:`// Java Solution for Subset sum equal to target (DP-14)
// This solution is currently being prepared.

class Solution {
    public void solve() {
        // TODO: Implement solution
    }
}`,python:`# Python Solution for Subset sum equal to target (DP-14)
# This solution is currently being prepared.

def solve():
    # TODO: Implement solution
    pass`}}},{title:"Partition Equal Subset Sum (DP-15)",platform:"LeetCode",link:"https://leetcode.com/problems/partition-equal-subset-sum/",content:{description:"Solution for Partition Equal Subset Sum (DP-15). Logic and implementation details coming soon.",code:{cpp:`// C++ Solution for Partition Equal Subset Sum (DP-15)
// This solution is currently being prepared.

void solve() {
    // TODO: Implement solution
}`,java:`// Java Solution for Partition Equal Subset Sum (DP-15)
// This solution is currently being prepared.

class Solution {
    public void solve() {
        // TODO: Implement solution
    }
}`,python:`# Python Solution for Partition Equal Subset Sum (DP-15)
# This solution is currently being prepared.

def solve():
    # TODO: Implement solution
    pass`}}},{title:"Partition Set Into 2 Subsets With Min Absolute Sum Diff (DP-16)",platform:"LeetCode",link:"https://leetcode.com/problems/partition-array-into-two-arrays-to-minimize-sum-difference/",content:{description:"Solution for Partition Set Into 2 Subsets With Min Absolute Sum Diff (DP-16). Logic and implementation details coming soon.",code:{cpp:`// C++ Solution for Partition Set Into 2 Subsets With Min Absolute Sum Diff (DP-16)
// This solution is currently being prepared.

void solve() {
    // TODO: Implement solution
}`,java:`// Java Solution for Partition Set Into 2 Subsets With Min Absolute Sum Diff (DP-16)
// This solution is currently being prepared.

class Solution {
    public void solve() {
        // TODO: Implement solution
    }
}`,python:`# Python Solution for Partition Set Into 2 Subsets With Min Absolute Sum Diff (DP-16)
# This solution is currently being prepared.

def solve():
    # TODO: Implement solution
    pass`}}},{title:"Count Subsets with Sum K (DP-17)",platform:"GeeksForGeeks",link:"https://practice.geeksforgeeks.org/problems/perfect-sum-problem5633/1",content:{description:"Solution for Count Subsets with Sum K (DP-17). Logic and implementation details coming soon.",code:{cpp:`// C++ Solution for Count Subsets with Sum K (DP-17)
// This solution is currently being prepared.

void solve() {
    // TODO: Implement solution
}`,java:`// Java Solution for Count Subsets with Sum K (DP-17)
// This solution is currently being prepared.

class Solution {
    public void solve() {
        // TODO: Implement solution
    }
}`,python:`# Python Solution for Count Subsets with Sum K (DP-17)
# This solution is currently being prepared.

def solve():
    # TODO: Implement solution
    pass`}}},{title:"Count Partitions with Given Difference (DP-18)",platform:"GeeksForGeeks",link:"https://practice.geeksforgeeks.org/problems/partitions-with-given-difference/1",content:{description:"Solution for Count Partitions with Given Difference (DP-18). Logic and implementation details coming soon.",code:{cpp:`// C++ Solution for Count Partitions with Given Difference (DP-18)
// This solution is currently being prepared.

void solve() {
    // TODO: Implement solution
}`,java:`// Java Solution for Count Partitions with Given Difference (DP-18)
// This solution is currently being prepared.

class Solution {
    public void solve() {
        // TODO: Implement solution
    }
}`,python:`# Python Solution for Count Partitions with Given Difference (DP-18)
# This solution is currently being prepared.

def solve():
    # TODO: Implement solution
    pass`}}},{title:"0/1 Knapsack (DP-19)",platform:"GeeksForGeeks",link:"https://practice.geeksforgeeks.org/problems/0-1-knapsack-problem0945/1",content:{description:"Solution for 0/1 Knapsack (DP-19). Logic and implementation details coming soon.",code:{cpp:`// C++ Solution for 0/1 Knapsack (DP-19)
// This solution is currently being prepared.

void solve() {
    // TODO: Implement solution
}`,java:`// Java Solution for 0/1 Knapsack (DP-19)
// This solution is currently being prepared.

class Solution {
    public void solve() {
        // TODO: Implement solution
    }
}`,python:`# Python Solution for 0/1 Knapsack (DP-19)
# This solution is currently being prepared.

def solve():
    # TODO: Implement solution
    pass`}}},{title:"Minimum Coins (DP-20)",platform:"LeetCode",link:"https://leetcode.com/problems/coin-change/",content:{description:"Solution for Minimum Coins (DP-20). Logic and implementation details coming soon.",code:{cpp:`// C++ Solution for Minimum Coins (DP-20)
// This solution is currently being prepared.

void solve() {
    // TODO: Implement solution
}`,java:`// Java Solution for Minimum Coins (DP-20)
// This solution is currently being prepared.

class Solution {
    public void solve() {
        // TODO: Implement solution
    }
}`,python:`# Python Solution for Minimum Coins (DP-20)
# This solution is currently being prepared.

def solve():
    # TODO: Implement solution
    pass`}}},{title:"Target Sum (DP-21)",platform:"LeetCode",link:"https://leetcode.com/problems/target-sum/",content:{description:"Solution for Target Sum (DP-21). Logic and implementation details coming soon.",code:{cpp:`// C++ Solution for Target Sum (DP-21)
// This solution is currently being prepared.

void solve() {
    // TODO: Implement solution
}`,java:`// Java Solution for Target Sum (DP-21)
// This solution is currently being prepared.

class Solution {
    public void solve() {
        // TODO: Implement solution
    }
}`,python:`# Python Solution for Target Sum (DP-21)
# This solution is currently being prepared.

def solve():
    # TODO: Implement solution
    pass`}}},{title:"Coin Change 2 (DP-22)",platform:"LeetCode",link:"https://leetcode.com/problems/coin-change-2/",content:{description:"Solution for Coin Change 2 (DP-22). Logic and implementation details coming soon.",code:{cpp:`// C++ Solution for Coin Change 2 (DP-22)
// This solution is currently being prepared.

void solve() {
    // TODO: Implement solution
}`,java:`// Java Solution for Coin Change 2 (DP-22)
// This solution is currently being prepared.

class Solution {
    public void solve() {
        // TODO: Implement solution
    }
}`,python:`# Python Solution for Coin Change 2 (DP-22)
# This solution is currently being prepared.

def solve():
    # TODO: Implement solution
    pass`}}},{title:"Unbounded Knapsack (DP-23)",platform:"GeeksForGeeks",link:"https://practice.geeksforgeeks.org/problems/knapsack-with-duplicate-items4201/1",content:{description:"Solution for Unbounded Knapsack (DP-23). Logic and implementation details coming soon.",code:{cpp:`// C++ Solution for Unbounded Knapsack (DP-23)
// This solution is currently being prepared.

void solve() {
    // TODO: Implement solution
}`,java:`// Java Solution for Unbounded Knapsack (DP-23)
// This solution is currently being prepared.

class Solution {
    public void solve() {
        // TODO: Implement solution
    }
}`,python:`# Python Solution for Unbounded Knapsack (DP-23)
# This solution is currently being prepared.

def solve():
    # TODO: Implement solution
    pass`}}},{title:"Rod Cutting Problem (DP-24)",platform:"GeeksForGeeks",link:"https://practice.geeksforgeeks.org/problems/rod-cutting0840/1",content:{description:"Solution for Rod Cutting Problem (DP-24). Logic and implementation details coming soon.",code:{cpp:`// C++ Solution for Rod Cutting Problem (DP-24)
// This solution is currently being prepared.

void solve() {
    // TODO: Implement solution
}`,java:`// Java Solution for Rod Cutting Problem (DP-24)
// This solution is currently being prepared.

class Solution {
    public void solve() {
        // TODO: Implement solution
    }
}`,python:`# Python Solution for Rod Cutting Problem (DP-24)
# This solution is currently being prepared.

def solve():
    # TODO: Implement solution
    pass`}}}]},{title:"DP on Strings",problems:[{title:"Longest Common Subsequence (DP-25)",platform:"LeetCode",link:"https://leetcode.com/problems/longest-common-subsequence/",content:{description:"Solution for Longest Common Subsequence (DP-25). Logic and implementation details coming soon.",code:{cpp:`// C++ Solution for Longest Common Subsequence (DP-25)
// This solution is currently being prepared.

void solve() {
    // TODO: Implement solution
}`,java:`// Java Solution for Longest Common Subsequence (DP-25)
// This solution is currently being prepared.

class Solution {
    public void solve() {
        // TODO: Implement solution
    }
}`,python:`# Python Solution for Longest Common Subsequence (DP-25)
# This solution is currently being prepared.

def solve():
    # TODO: Implement solution
    pass`}}},{title:"Print Longest Common Subsequence (DP-26)",platform:"GeeksForGeeks",link:"https://practice.geeksforgeeks.org/problems/print-all-lcs-sequences3413/1",content:{description:"Solution for Print Longest Common Subsequence (DP-26). Logic and implementation details coming soon.",code:{cpp:`// C++ Solution for Print Longest Common Subsequence (DP-26)
// This solution is currently being prepared.

void solve() {
    // TODO: Implement solution
}`,java:`// Java Solution for Print Longest Common Subsequence (DP-26)
// This solution is currently being prepared.

class Solution {
    public void solve() {
        // TODO: Implement solution
    }
}`,python:`# Python Solution for Print Longest Common Subsequence (DP-26)
# This solution is currently being prepared.

def solve():
    # TODO: Implement solution
    pass`}}},{title:"Longest Common Substring (DP-27)",platform:"GeeksForGeeks",link:"https://practice.geeksforgeeks.org/problems/longest-common-substring1452/1",content:{description:"Solution for Longest Common Substring (DP-27). Logic and implementation details coming soon.",code:{cpp:`// C++ Solution for Longest Common Substring (DP-27)
// This solution is currently being prepared.

void solve() {
    // TODO: Implement solution
}`,java:`// Java Solution for Longest Common Substring (DP-27)
// This solution is currently being prepared.

class Solution {
    public void solve() {
        // TODO: Implement solution
    }
}`,python:`# Python Solution for Longest Common Substring (DP-27)
# This solution is currently being prepared.

def solve():
    # TODO: Implement solution
    pass`}}},{title:"Longest Palindromic Subsequence (DP-28)",platform:"LeetCode",link:"https://leetcode.com/problems/longest-palindromic-subsequence/",content:{description:"Solution for Longest Palindromic Subsequence (DP-28). Logic and implementation details coming soon.",code:{cpp:`// C++ Solution for Longest Palindromic Subsequence (DP-28)
// This solution is currently being prepared.

void solve() {
    // TODO: Implement solution
}`,java:`// Java Solution for Longest Palindromic Subsequence (DP-28)
// This solution is currently being prepared.

class Solution {
    public void solve() {
        // TODO: Implement solution
    }
}`,python:`# Python Solution for Longest Palindromic Subsequence (DP-28)
# This solution is currently being prepared.

def solve():
    # TODO: Implement solution
    pass`}}},{title:"Minimum insertions to make string palindrome (DP-29)",platform:"LeetCode",link:"https://leetcode.com/problems/minimum-insertion-steps-to-make-a-string-palindrome/",content:{description:"Solution for Minimum insertions to make string palindrome (DP-29). Logic and implementation details coming soon.",code:{cpp:`// C++ Solution for Minimum insertions to make string palindrome (DP-29)
// This solution is currently being prepared.

void solve() {
    // TODO: Implement solution
}`,java:`// Java Solution for Minimum insertions to make string palindrome (DP-29)
// This solution is currently being prepared.

class Solution {
    public void solve() {
        // TODO: Implement solution
    }
}`,python:`# Python Solution for Minimum insertions to make string palindrome (DP-29)
# This solution is currently being prepared.

def solve():
    # TODO: Implement solution
    pass`}}},{title:"Minimum Insertions/Deletions to Convert String (DP-30)",platform:"LeetCode",link:"https://leetcode.com/problems/delete-operation-for-two-strings/",content:{description:"Solution for Minimum Insertions/Deletions to Convert String (DP-30). Logic and implementation details coming soon.",code:{cpp:`// C++ Solution for Minimum Insertions/Deletions to Convert String (DP-30)
// This solution is currently being prepared.

void solve() {
    // TODO: Implement solution
}`,java:`// Java Solution for Minimum Insertions/Deletions to Convert String (DP-30)
// This solution is currently being prepared.

class Solution {
    public void solve() {
        // TODO: Implement solution
    }
}`,python:`# Python Solution for Minimum Insertions/Deletions to Convert String (DP-30)
# This solution is currently being prepared.

def solve():
    # TODO: Implement solution
    pass`}}},{title:"Shortest Common Supersequence (DP-31)",platform:"LeetCode",link:"https://leetcode.com/problems/shortest-common-supersequence/",content:{description:"Solution for Shortest Common Supersequence (DP-31). Logic and implementation details coming soon.",code:{cpp:`// C++ Solution for Shortest Common Supersequence (DP-31)
// This solution is currently being prepared.

void solve() {
    // TODO: Implement solution
}`,java:`// Java Solution for Shortest Common Supersequence (DP-31)
// This solution is currently being prepared.

class Solution {
    public void solve() {
        // TODO: Implement solution
    }
}`,python:`# Python Solution for Shortest Common Supersequence (DP-31)
# This solution is currently being prepared.

def solve():
    # TODO: Implement solution
    pass`}}},{title:"Distinct Subsequences (DP-32)",platform:"LeetCode",link:"https://leetcode.com/problems/distinct-subsequences/",content:{description:"Solution for Distinct Subsequences (DP-32). Logic and implementation details coming soon.",code:{cpp:`// C++ Solution for Distinct Subsequences (DP-32)
// This solution is currently being prepared.

void solve() {
    // TODO: Implement solution
}`,java:`// Java Solution for Distinct Subsequences (DP-32)
// This solution is currently being prepared.

class Solution {
    public void solve() {
        // TODO: Implement solution
    }
}`,python:`# Python Solution for Distinct Subsequences (DP-32)
# This solution is currently being prepared.

def solve():
    # TODO: Implement solution
    pass`}}},{title:"Edit Distance (DP-33)",platform:"LeetCode",link:"https://leetcode.com/problems/edit-distance/",content:{description:"Solution for Edit Distance (DP-33). Logic and implementation details coming soon.",code:{cpp:`// C++ Solution for Edit Distance (DP-33)
// This solution is currently being prepared.

void solve() {
    // TODO: Implement solution
}`,java:`// Java Solution for Edit Distance (DP-33)
// This solution is currently being prepared.

class Solution {
    public void solve() {
        // TODO: Implement solution
    }
}`,python:`# Python Solution for Edit Distance (DP-33)
# This solution is currently being prepared.

def solve():
    # TODO: Implement solution
    pass`}}},{title:"Wildcard Matching (DP-34)",platform:"LeetCode",link:"https://leetcode.com/problems/wildcard-matching/",content:{description:"Solution for Wildcard Matching (DP-34). Logic and implementation details coming soon.",code:{cpp:`// C++ Solution for Wildcard Matching (DP-34)
// This solution is currently being prepared.

void solve() {
    // TODO: Implement solution
}`,java:`// Java Solution for Wildcard Matching (DP-34)
// This solution is currently being prepared.

class Solution {
    public void solve() {
        // TODO: Implement solution
    }
}`,python:`# Python Solution for Wildcard Matching (DP-34)
# This solution is currently being prepared.

def solve():
    # TODO: Implement solution
    pass`}}}]},{title:"DP on Stocks",problems:[{title:"Best Time to Buy and Sell Stock (DP-35)",platform:"LeetCode",link:"https://leetcode.com/problems/best-time-to-buy-and-sell-stock/",content:{description:"Solution for Best Time to Buy and Sell Stock (DP-35). Logic and implementation details coming soon.",code:{cpp:`// C++ Solution for Best Time to Buy and Sell Stock (DP-35)
// This solution is currently being prepared.

void solve() {
    // TODO: Implement solution
}`,java:`// Java Solution for Best Time to Buy and Sell Stock (DP-35)
// This solution is currently being prepared.

class Solution {
    public void solve() {
        // TODO: Implement solution
    }
}`,python:`# Python Solution for Best Time to Buy and Sell Stock (DP-35)
# This solution is currently being prepared.

def solve():
    # TODO: Implement solution
    pass`}}},{title:"Buy and Sell Stock - II (DP-36)",platform:"LeetCode",link:"https://leetcode.com/problems/best-time-to-buy-and-sell-stock-ii/",content:{description:"Solution for Buy and Sell Stock - II (DP-36). Logic and implementation details coming soon.",code:{cpp:`// C++ Solution for Buy and Sell Stock - II (DP-36)
// This solution is currently being prepared.

void solve() {
    // TODO: Implement solution
}`,java:`// Java Solution for Buy and Sell Stock - II (DP-36)
// This solution is currently being prepared.

class Solution {
    public void solve() {
        // TODO: Implement solution
    }
}`,python:`# Python Solution for Buy and Sell Stock - II (DP-36)
# This solution is currently being prepared.

def solve():
    # TODO: Implement solution
    pass`}}},{title:"Buy and Sell Stocks III (DP-37)",platform:"LeetCode",link:"https://leetcode.com/problems/best-time-to-buy-and-sell-stock-iii/",content:{description:"Solution for Buy and Sell Stocks III (DP-37). Logic and implementation details coming soon.",code:{cpp:`// C++ Solution for Buy and Sell Stocks III (DP-37)
// This solution is currently being prepared.

void solve() {
    // TODO: Implement solution
}`,java:`// Java Solution for Buy and Sell Stocks III (DP-37)
// This solution is currently being prepared.

class Solution {
    public void solve() {
        // TODO: Implement solution
    }
}`,python:`# Python Solution for Buy and Sell Stocks III (DP-37)
# This solution is currently being prepared.

def solve():
    # TODO: Implement solution
    pass`}}},{title:"Buy and Stock Sell IV (DP-38)",platform:"LeetCode",link:"https://leetcode.com/problems/best-time-to-buy-and-sell-stock-iv/",content:{description:"Solution for Buy and Stock Sell IV (DP-38). Logic and implementation details coming soon.",code:{cpp:`// C++ Solution for Buy and Stock Sell IV (DP-38)
// This solution is currently being prepared.

void solve() {
    // TODO: Implement solution
}`,java:`// Java Solution for Buy and Stock Sell IV (DP-38)
// This solution is currently being prepared.

class Solution {
    public void solve() {
        // TODO: Implement solution
    }
}`,python:`# Python Solution for Buy and Stock Sell IV (DP-38)
# This solution is currently being prepared.

def solve():
    # TODO: Implement solution
    pass`}}},{title:"Buy and Sell Stocks With Cooldown (DP-39)",platform:"LeetCode",link:"https://leetcode.com/problems/best-time-to-buy-and-sell-stock-with-cooldown/",content:{description:"Solution for Buy and Sell Stocks With Cooldown (DP-39). Logic and implementation details coming soon.",code:{cpp:`// C++ Solution for Buy and Sell Stocks With Cooldown (DP-39)
// This solution is currently being prepared.

void solve() {
    // TODO: Implement solution
}`,java:`// Java Solution for Buy and Sell Stocks With Cooldown (DP-39)
// This solution is currently being prepared.

class Solution {
    public void solve() {
        // TODO: Implement solution
    }
}`,python:`# Python Solution for Buy and Sell Stocks With Cooldown (DP-39)
# This solution is currently being prepared.

def solve():
    # TODO: Implement solution
    pass`}}},{title:"Buy and Sell Stocks With Transaction Fee (DP-40)",platform:"LeetCode",link:"https://leetcode.com/problems/best-time-to-buy-and-sell-stock-with-transaction-fee/",content:{description:"Solution for Buy and Sell Stocks With Transaction Fee (DP-40). Logic and implementation details coming soon.",code:{cpp:`// C++ Solution for Buy and Sell Stocks With Transaction Fee (DP-40)
// This solution is currently being prepared.

void solve() {
    // TODO: Implement solution
}`,java:`// Java Solution for Buy and Sell Stocks With Transaction Fee (DP-40)
// This solution is currently being prepared.

class Solution {
    public void solve() {
        // TODO: Implement solution
    }
}`,python:`# Python Solution for Buy and Sell Stocks With Transaction Fee (DP-40)
# This solution is currently being prepared.

def solve():
    # TODO: Implement solution
    pass`}}}]},{title:"DP on LIS",problems:[{title:"Longest Increasing Subsequence (DP-41)",platform:"LeetCode",link:"https://leetcode.com/problems/longest-increasing-subsequence/",content:{description:"Solution for Longest Increasing Subsequence (DP-41). Logic and implementation details coming soon.",code:{cpp:`// C++ Solution for Longest Increasing Subsequence (DP-41)
// This solution is currently being prepared.

void solve() {
    // TODO: Implement solution
}`,java:`// Java Solution for Longest Increasing Subsequence (DP-41)
// This solution is currently being prepared.

class Solution {
    public void solve() {
        // TODO: Implement solution
    }
}`,python:`# Python Solution for Longest Increasing Subsequence (DP-41)
# This solution is currently being prepared.

def solve():
    # TODO: Implement solution
    pass`}}},{title:"Printing Longest Increasing Subsequence (DP-42)",platform:"GeeksForGeeks",link:"https://practice.geeksforgeeks.org/problems/longest-increasing-subsequence-1587115620/1",content:{description:"Solution for Printing Longest Increasing Subsequence (DP-42). Logic and implementation details coming soon.",code:{cpp:`// C++ Solution for Printing Longest Increasing Subsequence (DP-42)
// This solution is currently being prepared.

void solve() {
    // TODO: Implement solution
}`,java:`// Java Solution for Printing Longest Increasing Subsequence (DP-42)
// This solution is currently being prepared.

class Solution {
    public void solve() {
        // TODO: Implement solution
    }
}`,python:`# Python Solution for Printing Longest Increasing Subsequence (DP-42)
# This solution is currently being prepared.

def solve():
    # TODO: Implement solution
    pass`}}},{title:"Longest Increasing Subsequence (Binary Search) (DP-43)",platform:"LeetCode",link:"https://leetcode.com/problems/longest-increasing-subsequence/",content:{description:"Solution for Longest Increasing Subsequence (Binary Search) (DP-43). Logic and implementation details coming soon.",code:{cpp:`// C++ Solution for Longest Increasing Subsequence (Binary Search) (DP-43)
// This solution is currently being prepared.

void solve() {
    // TODO: Implement solution
}`,java:`// Java Solution for Longest Increasing Subsequence (Binary Search) (DP-43)
// This solution is currently being prepared.

class Solution {
    public void solve() {
        // TODO: Implement solution
    }
}`,python:`# Python Solution for Longest Increasing Subsequence (Binary Search) (DP-43)
# This solution is currently being prepared.

def solve():
    # TODO: Implement solution
    pass`}}},{title:"Largest Divisible Subset (DP-44)",platform:"LeetCode",link:"https://leetcode.com/problems/largest-divisible-subset/",content:{description:"Solution for Largest Divisible Subset (DP-44). Logic and implementation details coming soon.",code:{cpp:`// C++ Solution for Largest Divisible Subset (DP-44)
// This solution is currently being prepared.

void solve() {
    // TODO: Implement solution
}`,java:`// Java Solution for Largest Divisible Subset (DP-44)
// This solution is currently being prepared.

class Solution {
    public void solve() {
        // TODO: Implement solution
    }
}`,python:`# Python Solution for Largest Divisible Subset (DP-44)
# This solution is currently being prepared.

def solve():
    # TODO: Implement solution
    pass`}}},{title:"Longest String Chain (DP-45)",platform:"LeetCode",link:"https://leetcode.com/problems/longest-string-chain/",content:{description:"Solution for Longest String Chain (DP-45). Logic and implementation details coming soon.",code:{cpp:`// C++ Solution for Longest String Chain (DP-45)
// This solution is currently being prepared.

void solve() {
    // TODO: Implement solution
}`,java:`// Java Solution for Longest String Chain (DP-45)
// This solution is currently being prepared.

class Solution {
    public void solve() {
        // TODO: Implement solution
    }
}`,python:`# Python Solution for Longest String Chain (DP-45)
# This solution is currently being prepared.

def solve():
    # TODO: Implement solution
    pass`}}},{title:"Longest Bitonic Subsequence (DP-46)",platform:"GeeksForGeeks",link:"https://practice.geeksforgeeks.org/problems/longest-bitonic-subsequence0824/1",content:{description:"Solution for Longest Bitonic Subsequence (DP-46). Logic and implementation details coming soon.",code:{cpp:`// C++ Solution for Longest Bitonic Subsequence (DP-46)
// This solution is currently being prepared.

void solve() {
    // TODO: Implement solution
}`,java:`// Java Solution for Longest Bitonic Subsequence (DP-46)
// This solution is currently being prepared.

class Solution {
    public void solve() {
        // TODO: Implement solution
    }
}`,python:`# Python Solution for Longest Bitonic Subsequence (DP-46)
# This solution is currently being prepared.

def solve():
    # TODO: Implement solution
    pass`}}},{title:"Number of Longest Increasing Subsequences (DP-47)",platform:"LeetCode",link:"https://leetcode.com/problems/number-of-longest-increasing-subsequence/",content:{description:"Solution for Number of Longest Increasing Subsequences (DP-47). Logic and implementation details coming soon.",code:{cpp:`// C++ Solution for Number of Longest Increasing Subsequences (DP-47)
// This solution is currently being prepared.

void solve() {
    // TODO: Implement solution
}`,java:`// Java Solution for Number of Longest Increasing Subsequences (DP-47)
// This solution is currently being prepared.

class Solution {
    public void solve() {
        // TODO: Implement solution
    }
}`,python:`# Python Solution for Number of Longest Increasing Subsequences (DP-47)
# This solution is currently being prepared.

def solve():
    # TODO: Implement solution
    pass`}}}]},{title:"MCM DP | Partition DP",problems:[{title:"Matrix Chain Multiplication (DP-48)",platform:"GeeksForGeeks",link:"https://practice.geeksforgeeks.org/problems/matrix-chain-multiplication0303/1",content:{description:"Solution for Matrix Chain Multiplication (DP-48). Logic and implementation details coming soon.",code:{cpp:`// C++ Solution for Matrix Chain Multiplication (DP-48)
// This solution is currently being prepared.

void solve() {
    // TODO: Implement solution
}`,java:`// Java Solution for Matrix Chain Multiplication (DP-48)
// This solution is currently being prepared.

class Solution {
    public void solve() {
        // TODO: Implement solution
    }
}`,python:`# Python Solution for Matrix Chain Multiplication (DP-48)
# This solution is currently being prepared.

def solve():
    # TODO: Implement solution
    pass`}}},{title:"Minimum Cost to Cut the Stick (DP-49)",platform:"LeetCode",link:"https://leetcode.com/problems/minimum-cost-to-cut-a-stick/",content:{description:"Solution for Minimum Cost to Cut the Stick (DP-49). Logic and implementation details coming soon.",code:{cpp:`// C++ Solution for Minimum Cost to Cut the Stick (DP-49)
// This solution is currently being prepared.

void solve() {
    // TODO: Implement solution
}`,java:`// Java Solution for Minimum Cost to Cut the Stick (DP-49)
// This solution is currently being prepared.

class Solution {
    public void solve() {
        // TODO: Implement solution
    }
}`,python:`# Python Solution for Minimum Cost to Cut the Stick (DP-49)
# This solution is currently being prepared.

def solve():
    # TODO: Implement solution
    pass`}}},{title:"Burst Balloons (DP-50)",platform:"LeetCode",link:"https://leetcode.com/problems/burst-balloons/",content:{description:"Solution for Burst Balloons (DP-50). Logic and implementation details coming soon.",code:{cpp:`// C++ Solution for Burst Balloons (DP-50)
// This solution is currently being prepared.

void solve() {
    // TODO: Implement solution
}`,java:`// Java Solution for Burst Balloons (DP-50)
// This solution is currently being prepared.

class Solution {
    public void solve() {
        // TODO: Implement solution
    }
}`,python:`# Python Solution for Burst Balloons (DP-50)
# This solution is currently being prepared.

def solve():
    # TODO: Implement solution
    pass`}}},{title:"Evaluate Boolean Expression to True (DP-51)",platform:"GeeksForGeeks",link:"https://practice.geeksforgeeks.org/problems/boolean-parenthesization5610/1",content:{description:"Solution for Evaluate Boolean Expression to True (DP-51). Logic and implementation details coming soon.",code:{cpp:`// C++ Solution for Evaluate Boolean Expression to True (DP-51)
// This solution is currently being prepared.

void solve() {
    // TODO: Implement solution
}`,java:`// Java Solution for Evaluate Boolean Expression to True (DP-51)
// This solution is currently being prepared.

class Solution {
    public void solve() {
        // TODO: Implement solution
    }
}`,python:`# Python Solution for Evaluate Boolean Expression to True (DP-51)
# This solution is currently being prepared.

def solve():
    # TODO: Implement solution
    pass`}}},{title:"Palindrome Partitioning - II (DP-52)",platform:"LeetCode",link:"https://leetcode.com/problems/palindrome-partitioning-ii/",content:{description:"Solution for Palindrome Partitioning - II (DP-52). Logic and implementation details coming soon.",code:{cpp:`// C++ Solution for Palindrome Partitioning - II (DP-52)
// This solution is currently being prepared.

void solve() {
    // TODO: Implement solution
}`,java:`// Java Solution for Palindrome Partitioning - II (DP-52)
// This solution is currently being prepared.

class Solution {
    public void solve() {
        // TODO: Implement solution
    }
}`,python:`# Python Solution for Palindrome Partitioning - II (DP-52)
# This solution is currently being prepared.

def solve():
    # TODO: Implement solution
    pass`}}},{title:"Partition Array for Maximum Sum (DP-53)",platform:"LeetCode",link:"https://leetcode.com/problems/partition-array-for-maximum-sum/",content:{description:"Solution for Partition Array for Maximum Sum (DP-53). Logic and implementation details coming soon.",code:{cpp:`// C++ Solution for Partition Array for Maximum Sum (DP-53)
// This solution is currently being prepared.

void solve() {
    // TODO: Implement solution
}`,java:`// Java Solution for Partition Array for Maximum Sum (DP-53)
// This solution is currently being prepared.

class Solution {
    public void solve() {
        // TODO: Implement solution
    }
}`,python:`# Python Solution for Partition Array for Maximum Sum (DP-53)
# This solution is currently being prepared.

def solve():
    # TODO: Implement solution
    pass`}}}]},{title:"DP on Squares",problems:[{title:"Maximum Rectangle Area with all 1's (DP-54)",platform:"LeetCode",link:"https://leetcode.com/problems/maximal-rectangle/",content:{description:"Solution for Maximum Rectangle Area with all 1's (DP-54). Logic and implementation details coming soon.",code:{cpp:`// C++ Solution for Maximum Rectangle Area with all 1's (DP-54)
// This solution is currently being prepared.

void solve() {
    // TODO: Implement solution
}`,java:`// Java Solution for Maximum Rectangle Area with all 1's (DP-54)
// This solution is currently being prepared.

class Solution {
    public void solve() {
        // TODO: Implement solution
    }
}`,python:`# Python Solution for Maximum Rectangle Area with all 1's (DP-54)
# This solution is currently being prepared.

def solve():
    # TODO: Implement solution
    pass`}}},{title:"Count Square Submatrices with All Ones (DP-55)",platform:"LeetCode",link:"https://leetcode.com/problems/count-square-submatrices-with-all-ones/",content:{description:"Solution for Count Square Submatrices with All Ones (DP-55). Logic and implementation details coming soon.",code:{cpp:`// C++ Solution for Count Square Submatrices with All Ones (DP-55)
// This solution is currently being prepared.

void solve() {
    // TODO: Implement solution
}`,java:`// Java Solution for Count Square Submatrices with All Ones (DP-55)
// This solution is currently being prepared.

class Solution {
    public void solve() {
        // TODO: Implement solution
    }
}`,python:`# Python Solution for Count Square Submatrices with All Ones (DP-55)
# This solution is currently being prepared.

def solve():
    # TODO: Implement solution
    pass`}}}]}]},{title:"Tries",totalProblems:7,subtopics:[{title:"Theory",problems:[{title:"Implement Trie (Prefix Tree)",platform:"LeetCode",link:"https://leetcode.com/problems/implement-trie-prefix-tree/",content:{description:"Solution for Implement Trie (Prefix Tree). Logic and implementation details coming soon.",code:{cpp:`// C++ Solution for Implement Trie (Prefix Tree)
// This solution is currently being prepared.

void solve() {
    // TODO: Implement solution
}`,java:`// Java Solution for Implement Trie (Prefix Tree)
// This solution is currently being prepared.

class Solution {
    public void solve() {
        // TODO: Implement solution
    }
}`,python:`# Python Solution for Implement Trie (Prefix Tree)
# This solution is currently being prepared.

def solve():
    # TODO: Implement solution
    pass`}}},{title:"Implement Trie - 2 (Prefix Tree)",platform:"GeeksForGeeks",link:"https://practice.geeksforgeeks.org/problems/trie-insert-and-search0651/1",content:{description:"Solution for Implement Trie - 2 (Prefix Tree). Logic and implementation details coming soon.",code:{cpp:`// C++ Solution for Implement Trie - 2 (Prefix Tree)
// This solution is currently being prepared.

void solve() {
    // TODO: Implement solution
}`,java:`// Java Solution for Implement Trie - 2 (Prefix Tree)
// This solution is currently being prepared.

class Solution {
    public void solve() {
        // TODO: Implement solution
    }
}`,python:`# Python Solution for Implement Trie - 2 (Prefix Tree)
# This solution is currently being prepared.

def solve():
    # TODO: Implement solution
    pass`}}}]},{title:"Problems",problems:[{title:"Longest String with All Prefixes",platform:"GeeksForGeeks",link:"https://practice.geeksforgeeks.org/problems/longest-common-prefix-in-an-array5129/1",content:{description:"Solution for Longest String with All Prefixes. Logic and implementation details coming soon.",code:{cpp:`// C++ Solution for Longest String with All Prefixes
// This solution is currently being prepared.

void solve() {
    // TODO: Implement solution
}`,java:`// Java Solution for Longest String with All Prefixes
// This solution is currently being prepared.

class Solution {
    public void solve() {
        // TODO: Implement solution
    }
}`,python:`# Python Solution for Longest String with All Prefixes
# This solution is currently being prepared.

def solve():
    # TODO: Implement solution
    pass`}}},{title:"Number of Distinct Substrings in a String",platform:"GeeksForGeeks",link:"https://practice.geeksforgeeks.org/problems/count-of-distinct-substrings/1",content:{description:"Solution for Number of Distinct Substrings in a String. Logic and implementation details coming soon.",code:{cpp:`// C++ Solution for Number of Distinct Substrings in a String
// This solution is currently being prepared.

void solve() {
    // TODO: Implement solution
}`,java:`// Java Solution for Number of Distinct Substrings in a String
// This solution is currently being prepared.

class Solution {
    public void solve() {
        // TODO: Implement solution
    }
}`,python:`# Python Solution for Number of Distinct Substrings in a String
# This solution is currently being prepared.

def solve():
    # TODO: Implement solution
    pass`}}},{title:"Power Set",platform:"LeetCode",link:"https://leetcode.com/problems/subsets/",content:{description:"Solution for Power Set. Logic and implementation details coming soon.",code:{cpp:`// C++ Solution for Power Set
// This solution is currently being prepared.

void solve() {
    // TODO: Implement solution
}`,java:`// Java Solution for Power Set
// This solution is currently being prepared.

class Solution {
    public void solve() {
        // TODO: Implement solution
    }
}`,python:`# Python Solution for Power Set
# This solution is currently being prepared.

def solve():
    # TODO: Implement solution
    pass`}}},{title:"Maximum XOR of two numbers in an array",platform:"LeetCode",link:"https://leetcode.com/problems/maximum-xor-of-two-numbers-in-an-array/",content:{description:"Solution for Maximum XOR of two numbers in an array. Logic and implementation details coming soon.",code:{cpp:`// C++ Solution for Maximum XOR of two numbers in an array
// This solution is currently being prepared.

void solve() {
    // TODO: Implement solution
}`,java:`// Java Solution for Maximum XOR of two numbers in an array
// This solution is currently being prepared.

class Solution {
    public void solve() {
        // TODO: Implement solution
    }
}`,python:`# Python Solution for Maximum XOR of two numbers in an array
# This solution is currently being prepared.

def solve():
    # TODO: Implement solution
    pass`}}},{title:"Maximum XOR With an Element From Array",platform:"LeetCode",link:"https://leetcode.com/problems/maximum-xor-with-an-element-from-array/",content:{description:"Solution for Maximum XOR With an Element From Array. Logic and implementation details coming soon.",code:{cpp:`// C++ Solution for Maximum XOR With an Element From Array
// This solution is currently being prepared.

void solve() {
    // TODO: Implement solution
}`,java:`// Java Solution for Maximum XOR With an Element From Array
// This solution is currently being prepared.

class Solution {
    public void solve() {
        // TODO: Implement solution
    }
}`,python:`# Python Solution for Maximum XOR With an Element From Array
# This solution is currently being prepared.

def solve():
    # TODO: Implement solution
    pass`}}}]}]}],fo=[{title:"Array",totalProblems:10,subtopics:[{title:"All Problems",problems:[{title:"Two Sum",platform:"LeetCode",link:"https://leetcode.com/problems/two-sum/"},{title:"Best Time to Buy and Sell Stock",platform:"LeetCode",link:"https://leetcode.com/problems/best-time-to-buy-and-sell-stock/"},{title:"Contains Duplicate",platform:"LeetCode",link:"https://leetcode.com/problems/contains-duplicate/"},{title:"Product of Array Except Self",platform:"LeetCode",link:"https://leetcode.com/problems/product-of-array-except-self/"},{title:"Maximum Subarray",platform:"LeetCode",link:"https://leetcode.com/problems/maximum-subarray/"},{title:"Maximum Product Subarray",platform:"LeetCode",link:"https://leetcode.com/problems/maximum-product-subarray/"},{title:"Find Minimum in Rotated Sorted Array",platform:"LeetCode",link:"https://leetcode.com/problems/find-minimum-in-rotated-sorted-array/"},{title:"Search in Rotated Sorted Array",platform:"LeetCode",link:"https://leetcode.com/problems/search-in-rotated-sorted-array/"},{title:"3Sum",platform:"LeetCode",link:"https://leetcode.com/problems/3sum/"},{title:"Container With Most Water",platform:"LeetCode",link:"https://leetcode.com/problems/container-with-most-water/"}]}]},{title:"Binary",totalProblems:5,subtopics:[{title:"All Problems",problems:[{title:"Sum of Two Integers",platform:"LeetCode",link:"https://leetcode.com/problems/sum-of-two-integers/"},{title:"Number of 1 Bits",platform:"LeetCode",link:"https://leetcode.com/problems/number-of-1-bits/"},{title:"Counting Bits",platform:"LeetCode",link:"https://leetcode.com/problems/counting-bits/"},{title:"Missing Number",platform:"LeetCode",link:"https://leetcode.com/problems/missing-number/"},{title:"Reverse Bits",platform:"LeetCode",link:"https://leetcode.com/problems/reverse-bits/"}]}]},{title:"Dynamic Programming",totalProblems:11,subtopics:[{title:"All Problems",problems:[{title:"Climbing Stairs",platform:"LeetCode",link:"https://leetcode.com/problems/climbing-stairs/"},{title:"Coin Change",platform:"LeetCode",link:"https://leetcode.com/problems/coin-change/"},{title:"Longest Increasing Subsequence",platform:"LeetCode",link:"https://leetcode.com/problems/longest-increasing-subsequence/"},{title:"Longest Common Subsequence",platform:"LeetCode",link:"https://leetcode.com/problems/longest-common-subsequence/"},{title:"Word Break",platform:"LeetCode",link:"https://leetcode.com/problems/word-break/"},{title:"Combination Sum",platform:"LeetCode",link:"https://leetcode.com/problems/combination-sum/"},{title:"House Robber",platform:"LeetCode",link:"https://leetcode.com/problems/house-robber/"},{title:"House Robber II",platform:"LeetCode",link:"https://leetcode.com/problems/house-robber-ii/"},{title:"Decode Ways",platform:"LeetCode",link:"https://leetcode.com/problems/decode-ways/"},{title:"Unique Paths",platform:"LeetCode",link:"https://leetcode.com/problems/unique-paths/"},{title:"Jump Game",platform:"LeetCode",link:"https://leetcode.com/problems/jump-game/"}]}]},{title:"Graph",totalProblems:8,subtopics:[{title:"All Problems",problems:[{title:"Clone Graph",platform:"LeetCode",link:"https://leetcode.com/problems/clone-graph/"},{title:"Course Schedule",platform:"LeetCode",link:"https://leetcode.com/problems/course-schedule/"},{title:"Pacific Atlantic Water Flow",platform:"LeetCode",link:"https://leetcode.com/problems/pacific-atlantic-water-flow/"},{title:"Number of Islands",platform:"LeetCode",link:"https://leetcode.com/problems/number-of-islands/"},{title:"Longest Consecutive Sequence",platform:"LeetCode",link:"https://leetcode.com/problems/longest-consecutive-sequence/"},{title:"Alien Dictionary",platform:"LeetCode",link:"https://leetcode.com/problems/alien-dictionary/"},{title:"Graph Valid Tree",platform:"LeetCode",link:"https://leetcode.com/problems/graph-valid-tree/"},{title:"Number of Connected Components in an Undirected Graph",platform:"LeetCode",link:"https://leetcode.com/problems/number-of-connected-components-in-an-undirected-graph/"}]}]},{title:"Interval",totalProblems:6,subtopics:[{title:"All Problems",problems:[{title:"Insert Interval",platform:"LeetCode",link:"https://leetcode.com/problems/insert-interval/"},{title:"Merge Intervals",platform:"LeetCode",link:"https://leetcode.com/problems/merge-intervals/"},{title:"Non-overlapping Intervals",platform:"LeetCode",link:"https://leetcode.com/problems/non-overlapping-intervals/"},{title:"Meeting Rooms",platform:"LeetCode",link:"https://leetcode.com/problems/meeting-rooms/"},{title:"Meeting Rooms II",platform:"LeetCode",link:"https://leetcode.com/problems/meeting-rooms-ii/"}]}]},{title:"Linked List",totalProblems:6,subtopics:[{title:"All Problems",problems:[{title:"Reverse Linked List",platform:"LeetCode",link:"https://leetcode.com/problems/reverse-linked-list/"},{title:"Linked List Cycle",platform:"LeetCode",link:"https://leetcode.com/problems/linked-list-cycle/"},{title:"Merge Two Sorted Lists",platform:"LeetCode",link:"https://leetcode.com/problems/merge-two-sorted-lists/"},{title:"Merge k Sorted Lists",platform:"LeetCode",link:"https://leetcode.com/problems/merge-k-sorted-lists/"},{title:"Remove Nth Node From End of List",platform:"LeetCode",link:"https://leetcode.com/problems/remove-nth-node-from-end-of-list/"},{title:"Reorder List",platform:"LeetCode",link:"https://leetcode.com/problems/reorder-list/"}]}]},{title:"Matrix",totalProblems:4,subtopics:[{title:"All Problems",problems:[{title:"Set Matrix Zeroes",platform:"LeetCode",link:"https://leetcode.com/problems/set-matrix-zeroes/"},{title:"Spiral Matrix",platform:"LeetCode",link:"https://leetcode.com/problems/spiral-matrix/"},{title:"Rotate Image",platform:"LeetCode",link:"https://leetcode.com/problems/rotate-image/"},{title:"Word Search",platform:"LeetCode",link:"https://leetcode.com/problems/word-search/"}]}]},{title:"String",totalProblems:10,subtopics:[{title:"All Problems",problems:[{title:"Longest Substring Without Repeating Characters",platform:"LeetCode",link:"https://leetcode.com/problems/longest-substring-without-repeating-characters/"},{title:"Longest Repeating Character Replacement",platform:"LeetCode",link:"https://leetcode.com/problems/longest-repeating-character-replacement/"},{title:"Minimum Window Substring",platform:"LeetCode",link:"https://leetcode.com/problems/minimum-window-substring/"},{title:"Valid Anagram",platform:"LeetCode",link:"https://leetcode.com/problems/valid-anagram/"},{title:"Group Anagrams",platform:"LeetCode",link:"https://leetcode.com/problems/group-anagrams/"},{title:"Valid Parentheses",platform:"LeetCode",link:"https://leetcode.com/problems/valid-parentheses/"},{title:"Valid Palindrome",platform:"LeetCode",link:"https://leetcode.com/problems/valid-palindrome/"},{title:"Longest Palindromic Substring",platform:"LeetCode",link:"https://leetcode.com/problems/longest-palindromic-substring/"},{title:"Palindromic Substrings",platform:"LeetCode",link:"https://leetcode.com/problems/palindromic-substrings/"},{title:"Encode and Decode Strings",platform:"LeetCode",link:"https://leetcode.com/problems/encode-and-decode-strings/"}]}]},{title:"Tree",totalProblems:15,subtopics:[{title:"All Problems",problems:[{title:"Maximum Depth of Binary Tree",platform:"LeetCode",link:"https://leetcode.com/problems/maximum-depth-of-binary-tree/"},{title:"Same Tree",platform:"LeetCode",link:"https://leetcode.com/problems/same-tree/"},{title:"Invert Binary Tree",platform:"LeetCode",link:"https://leetcode.com/problems/invert-binary-tree/"},{title:"Binary Tree Maximum Path Sum",platform:"LeetCode",link:"https://leetcode.com/problems/binary-tree-maximum-path-sum/"},{title:"Binary Tree Level Order Traversal",platform:"LeetCode",link:"https://leetcode.com/problems/binary-tree-level-order-traversal/"},{title:"Serialize and Deserialize Binary Tree",platform:"LeetCode",link:"https://leetcode.com/problems/serialize-and-deserialize-binary-tree/"},{title:"Subtree of Another Tree",platform:"LeetCode",link:"https://leetcode.com/problems/subtree-of-another-tree/"},{title:"Construct Binary Tree from Preorder and Inorder Traversal",platform:"LeetCode",link:"https://leetcode.com/problems/construct-binary-tree-from-preorder-and-inorder-traversal/"},{title:"Validate Binary Search Tree",platform:"LeetCode",link:"https://leetcode.com/problems/validate-binary-search-tree/"},{title:"Kth Smallest Element in a BST",platform:"LeetCode",link:"https://leetcode.com/problems/kth-smallest-element-in-a-bst/"},{title:"Lowest Common Ancestor of a Binary Search Tree",platform:"LeetCode",link:"https://leetcode.com/problems/lowest-common-ancestor-of-a-binary-search-tree/"},{title:"Implement Trie (Prefix Tree)",platform:"LeetCode",link:"https://leetcode.com/problems/implement-trie-prefix-tree/"},{title:"Add and Search Word",platform:"LeetCode",link:"https://leetcode.com/problems/add-and-search-word-data-structure-design/"},{title:"Word Search II",platform:"LeetCode",link:"https://leetcode.com/problems/word-search-ii/"}]}]},{title:"Heap",totalProblems:3,subtopics:[{title:"All Problems",problems:[{title:"Merge k Sorted Lists",platform:"LeetCode",link:"https://leetcode.com/problems/merge-k-sorted-lists/"},{title:"Top K Frequent Elements",platform:"LeetCode",link:"https://leetcode.com/problems/top-k-frequent-elements/"},{title:"Find Median from Data Stream",platform:"LeetCode",link:"https://leetcode.com/problems/find-median-from-data-stream/"}]}]}],bo=[{title:"Day 1: Arrays",totalProblems:6,subtopics:[{title:"Arrays",problems:[{title:"Set Matrix Zeroes",platform:"LeetCode",link:"https://leetcode.com/problems/set-matrix-zeroes/"},{title:"Pascal's Triangle",platform:"LeetCode",link:"https://leetcode.com/problems/pascals-triangle/"},{title:"Next Permutation",platform:"LeetCode",link:"https://leetcode.com/problems/next-permutation/"},{title:"Kadane's Algorithm",platform:"LeetCode",link:"https://leetcode.com/problems/maximum-subarray/"},{title:"Sort an array of 0's, 1's and 2's",platform:"LeetCode",link:"https://leetcode.com/problems/sort-colors/"},{title:"Stock Buy and Sell",platform:"LeetCode",link:"https://leetcode.com/problems/best-time-to-buy-and-sell-stock/"}]}]},{title:"Day 2: Arrays Part-II",totalProblems:6,subtopics:[{title:"Arrays Part-II",problems:[{title:"Rotate Matrix",platform:"LeetCode",link:"https://leetcode.com/problems/rotate-image/"},{title:"Merge Overlapping Subintervals",platform:"LeetCode",link:"https://leetcode.com/problems/merge-intervals/"},{title:"Merge two sorted Arrays without extra space",platform:"LeetCode",link:"https://leetcode.com/problems/merge-sorted-array/"},{title:"Find the duplicate in an array of N+1 integers",platform:"LeetCode",link:"https://leetcode.com/problems/find-the-duplicate-number/"},{title:"Repeat and Missing Number",platform:"GeeksForGeeks",link:"https://www.geeksforgeeks.org/find-missing-repeating-algorithm-2/"},{title:"Inversion of Array (Pre-req: Merge Sort)",platform:"GeeksForGeeks",link:"https://www.geeksforgeeks.org/counting-inversions/"}]}]},{title:"Day 3: Arrays Part-III",totalProblems:6,subtopics:[{title:"Arrays Part-III",problems:[{title:"Search in a 2D Matrix",platform:"LeetCode",link:"https://leetcode.com/problems/search-a-2d-matrix/"},{title:"Pow(x, n)",platform:"LeetCode",link:"https://leetcode.com/problems/powx-n/"},{title:"Majority Element (>N/2 times)",platform:"LeetCode",link:"https://leetcode.com/problems/majority-element/"},{title:"Majority Element (>N/3 times)",platform:"LeetCode",link:"https://leetcode.com/problems/majority-element-ii/"},{title:"Grid Unique Paths",platform:"LeetCode",link:"https://leetcode.com/problems/unique-paths/"},{title:"Reverse Pairs",platform:"LeetCode",link:"https://leetcode.com/problems/reverse-pairs/"}]}]},{title:"Day 4: Arrays Part-IV",totalProblems:6,subtopics:[{title:"Arrays Part-IV",problems:[{title:"2-Sum Problem",platform:"LeetCode",link:"https://leetcode.com/problems/two-sum/"},{title:"4-Sum Problem",platform:"LeetCode",link:"https://leetcode.com/problems/4sum/"},{title:"Longest Consecutive Sequence",platform:"LeetCode",link:"https://leetcode.com/problems/longest-consecutive-sequence/"},{title:"Largest Subarray with 0 sum",platform:"GeeksForGeeks",link:"https://practice.geeksforgeeks.org/problems/largest-subarray-with-0-sum/1"},{title:"Count number of subarrays with given Xor K",platform:"InterviewBit",link:"https://www.interviewbit.com/problems/subarray-with-given-xor/"},{title:"Longest Substring without repeat",platform:"LeetCode",link:"https://leetcode.com/problems/longest-substring-without-repeating-characters/"}]}]},{title:"Day 5: Linked List",totalProblems:6,subtopics:[{title:"Linked List",problems:[{title:"Reverse a LinkedList",platform:"LeetCode",link:"https://leetcode.com/problems/reverse-linked-list/"},{title:"Find Middle of LinkedList",platform:"LeetCode",link:"https://leetcode.com/problems/middle-of-the-linked-list/"},{title:"Merge two sorted Linked List",platform:"LeetCode",link:"https://leetcode.com/problems/merge-two-sorted-lists/"},{title:"Remove N-th node from back of LinkedList",platform:"LeetCode",link:"https://leetcode.com/problems/remove-nth-node-from-end-of-list/"},{title:"Add two numbers as LinkedList",platform:"LeetCode",link:"https://leetcode.com/problems/add-two-numbers/"},{title:"Delete a given Node when a node is given",platform:"LeetCode",link:"https://leetcode.com/problems/delete-node-in-a-linked-list/"}]}]},{title:"Day 6: Linked List Part-II",totalProblems:6,subtopics:[{title:"Linked List Part-II",problems:[{title:"Find intersection point of Y LinkedList",platform:"LeetCode",link:"https://leetcode.com/problems/intersection-of-two-linked-lists/"},{title:"Detect a cycle in LinkedList",platform:"LeetCode",link:"https://leetcode.com/problems/linked-list-cycle/"},{title:"Reverse a LinkedList in groups of size k",platform:"LeetCode",link:"https://leetcode.com/problems/reverse-nodes-in-k-group/"},{title:"Check if a LinkedList is palindrome or not",platform:"LeetCode",link:"https://leetcode.com/problems/palindrome-linked-list/"},{title:"Find the starting point of the Loop of LinkedList",platform:"LeetCode",link:"https://leetcode.com/problems/linked-list-cycle-ii/"},{title:"Flattening of a LinkedList",platform:"GeeksForGeeks",link:"https://practice.geeksforgeeks.org/problems/flattening-a-linked-list/1"}]}]},{title:"Day 7: Linked List and Arrays",totalProblems:6,subtopics:[{title:"Linked List and Arrays",problems:[{title:"Rotate a LinkedList",platform:"LeetCode",link:"https://leetcode.com/problems/rotate-list/"},{title:"Clone a Linked List with random and next pointer",platform:"LeetCode",link:"https://leetcode.com/problems/copy-list-with-random-pointer/"},{title:"3 sum",platform:"LeetCode",link:"https://leetcode.com/problems/3sum/"},{title:"Trapping rainwater",platform:"LeetCode",link:"https://leetcode.com/problems/trapping-rain-water/"},{title:"Remove Duplicate from Sorted array",platform:"LeetCode",link:"https://leetcode.com/problems/remove-duplicates-from-sorted-array/"},{title:"Max consecutive ones",platform:"LeetCode",link:"https://leetcode.com/problems/max-consecutive-ones/"}]}]},{title:"Day 8: Greedy Algorithm",totalProblems:6,subtopics:[{title:"Greedy Algorithm",problems:[{title:"N meetings in one room",platform:"GeeksForGeeks",link:"https://practice.geeksforgeeks.org/problems/n-meetings-in-one-room-1587115620/1"},{title:"Minimum number of platforms required for a railway",platform:"GeeksForGeeks",link:"https://practice.geeksforgeeks.org/problems/minimum-platforms-1587115620/1"},{title:"Job sequencing Problem",platform:"GeeksForGeeks",link:"https://practice.geeksforgeeks.org/problems/job-sequencing-problem-1587115620/1"},{title:"Fractional Knapsack Problem",platform:"GeeksForGeeks",link:"https://practice.geeksforgeeks.org/problems/fractional-knapsack-1587115620/1"},{title:"Greedy algorithm to find minimum number of coins",platform:"GeeksForGeeks",link:"https://practice.geeksforgeeks.org/problems/min-coin5549/1"},{title:"Activity Selection (it is same as N meeting in one room)",platform:"GeeksForGeeks",link:"https://practice.geeksforgeeks.org/problems/n-meetings-in-one-room-1587115620/1"}]}]},{title:"Day 9: Recursion",totalProblems:6,subtopics:[{title:"Recursion",problems:[{title:"Subset Sums",platform:"GeeksForGeeks",link:"https://practice.geeksforgeeks.org/problems/subset-sums2234/1"},{title:"Subset-II",platform:"LeetCode",link:"https://leetcode.com/problems/subsets-ii/"},{title:"Combination Sum-1",platform:"LeetCode",link:"https://leetcode.com/problems/combination-sum/"},{title:"Combination Sum-2",platform:"LeetCode",link:"https://leetcode.com/problems/combination-sum-ii/"},{title:"Palindrome Partitioning",platform:"LeetCode",link:"https://leetcode.com/problems/palindrome-partitioning/"},{title:"K-th permutation Sequence",platform:"LeetCode",link:"https://leetcode.com/problems/permutation-sequence/"}]}]},{title:"Day 10: Recursion and Backtracking",totalProblems:6,subtopics:[{title:"Recursion and Backtracking",problems:[{title:"Print all permutations of a string/array",platform:"LeetCode",link:"https://leetcode.com/problems/permutations/"},{title:"N queens Problem",platform:"LeetCode",link:"https://leetcode.com/problems/n-queens/"},{title:"Sudoku Solver",platform:"LeetCode",link:"https://leetcode.com/problems/sudoku-solver/"},{title:"M Coloring Problem",platform:"GeeksForGeeks",link:"https://practice.geeksforgeeks.org/problems/m-coloring-problem-1587115620/1"},{title:"Rat in a Maze",platform:"GeeksForGeeks",link:"https://practice.geeksforgeeks.org/problems/rat-in-a-maze-problem/1"},{title:"Word Break (print all ways)",platform:"GeeksForGeeks",link:"https://practice.geeksforgeeks.org/problems/word-break-part-2-3249/1"}]}]},{title:"Day 11: Binary Search",totalProblems:8,subtopics:[{title:"Binary Search",problems:[{title:"The N-th root of an integer",platform:"GeeksForGeeks",link:"https://practice.geeksforgeeks.org/problems/find-nth-root-of-m5843/1"},{title:"Matrix Median",platform:"InterviewBit",link:"https://www.interviewbit.com/problems/matrix-median/"},{title:"Find the element that appears once in sorted array",platform:"LeetCode",link:"https://leetcode.com/problems/single-element-in-a-sorted-array/"},{title:"Search element in a sorted and rotated array",platform:"LeetCode",link:"https://leetcode.com/problems/search-in-rotated-sorted-array/"},{title:"Median of 2 sorted arrays",platform:"LeetCode",link:"https://leetcode.com/problems/median-of-two-sorted-arrays/"},{title:"K-th element of two sorted arrays",platform:"GeeksForGeeks",link:"https://practice.geeksforgeeks.org/problems/k-th-element-of-two-sorted-array1317/1"},{title:"Allocate Minimum Number of Pages",platform:"GeeksForGeeks",link:"https://practice.geeksforgeeks.org/problems/allocate-minimum-number-of-pages0937/1"},{title:"Aggressive Cows",platform:"GeeksForGeeks",link:"https://practice.geeksforgeeks.org/problems/aggressive-cows/0"}]}]}],yo=[{title:"ARRAYS",totalProblems:25,subtopics:[{title:"Problems",problems:[{title:"Majority Element",link:"https://leetcode.com/problems/majority-element/",platform:"LeetCode",difficulty:"Easy",solutionLink:"Solution Link",companies:["Amazon","Google"]},{title:"Repeat & missing number",link:"https://practice.geeksforgeeks.org/problems/find-missing-and-repeating2512/1",platform:"GeeksForGeeks",difficulty:"Easy",solutionLink:"Solution Link",companies:["Amazon"]},{title:"Merge 2 sorted array without xtra space",link:"https://leetcode.com/problems/merge-sorted-array/",platform:"LeetCode",difficulty:"Easy",solutionLink:"Solution Link",companies:["Amdocs","Brocade","Goldman","Sachs","Juniper","Networks","Linkedin","Microsoft","Quikr","Snapdeal","Synopsys","Zoho","Adobe"]},{title:"Single Number",link:"https://leetcode.com/problems/single-number/",platform:"LeetCode",difficulty:"Easy",solutionLink:"Solution Link",companies:[]},{title:"Stock Buy & Sell",link:"https://leetcode.com/problems/best-time-to-buy-and-sell-stock/",platform:"LeetCode",difficulty:"Easy",solutionLink:"Solution Link",companies:["Amazon","DEShaw","Directi","Flipkart","Goldman","Sachs","Intuit","MakeMyTrip","Microsoft","Ola","Cabs","Oracle","Paytm","Pubmatic","Quikr","Salesforce","Sapient","Swiggy","Walmart","Media.net","Google"]},{title:"Kadane's Algorithm",link:"https://leetcode.com/problems/maximum-subarray/",platform:"LeetCode",difficulty:"Medium",solutionLink:"Solution Link",companies:["Microsoft","Facebook"]},{title:"Pow xn",link:"https://leetcode.com/problems/powx-n/",platform:"LeetCode",difficulty:"Medium",solutionLink:"Solution Link",companies:[]},{title:"Container with most water",link:"https://leetcode.com/problems/container-with-most-water/",platform:"LeetCode",difficulty:"Medium",solutionLink:"Solution Link",companies:["Flipkart","Dunzo"]},{title:"Sort array of 0s, 1s & 2s",link:"https://leetcode.com/problems/sort-colors/",platform:"LeetCode",difficulty:"Medium",solutionLink:"Solution Link",companies:["Microsoft","Amazon","MakeMyTrip"]},{title:"3Sum",link:"https://leetcode.com/problems/3sum/",platform:"LeetCode",difficulty:"Medium",solutionLink:"Solution Link",companies:["Adobe","Amazon","Microsoft","Morgan","Stanley","Samsung","Snapdeal","Times","Internet"]},{title:"4Sum",link:"https://leetcode.com/problems/4sum/",platform:"LeetCode",difficulty:"Medium",solutionLink:"Solution Link",companies:[]},{title:"Search a 2D matrix ",link:"https://leetcode.com/problems/search-a-2d-matrix/",platform:"LeetCode",difficulty:"Medium",solutionLink:"Solution Link",companies:[]},{title:"Next permutation",link:"https://leetcode.com/problems/next-permutation/",platform:"LeetCode",difficulty:"Medium",solutionLink:"Solution Link",companies:["Adobe","GoldmanSachs","Uber"]},{title:"Merge overlapping intervals",link:"https://leetcode.com/problems/merge-intervals/",platform:"LeetCode",difficulty:"Medium",solutionLink:"#",companies:["Google"]},{title:"Longest substring without repeating",link:"https://leetcode.com/problems/longest-substring-without-repeating-characters/",platform:"LeetCode",difficulty:"Medium",solutionLink:"#",companies:["MorganStanley","Amazon"]},{title:"Set matrix zeroes",link:"https://leetcode.com/problems/set-matrix-zeroes/",platform:"LeetCode",difficulty:"Medium",solutionLink:"#",companies:["Microsoft","Amazon"]},{title:"Word search",link:"https://leetcode.com/problems/word-search/",platform:"LeetCode",difficulty:"Medium",solutionLink:"#",companies:["Ola","GoldmanSachs","Google"]},{title:"Product of array except itself",link:"https://leetcode.com/problems/product-of-array-except-self/",platform:"LeetCode",difficulty:"Medium",solutionLink:"Solution Link",companies:["Amazon","DEShaw","Intuit","MorganStanley","Flipkart"]},{title:"Subarray sum equals k",link:"https://leetcode.com/problems/sum-of-subarray-minimums/",platform:"LeetCode",difficulty:"Medium",solutionLink:"#",companies:[]},{title:"Find Duplicate",link:"https://leetcode.com/problems/find-the-duplicate-number/",platform:"LeetCode",difficulty:"Medium",solutionLink:"Solution Link",companies:["Amazon","D-E-Shaw","Flipkart","Paytm","Qualcomm","Zoho"]},{title:"Count Inversions",link:"https://practice.geeksforgeeks.org/problems/inversion-of-array-1587115620/1",platform:"GeeksForGeeks",difficulty:"Medium / Hard",solutionLink:"#",companies:["Adobe","Amazon","BankBazaar","Flipkart","Microsoft","Myntra","MakeMyTrip"]},{title:"Trapping Rainwater",link:"https://leetcode.com/problems/trapping-rain-water/",platform:"LeetCode",difficulty:"Hard",solutionLink:"Solution Link",companies:["Samsung"]},{title:"Sliding window maximum",link:"https://leetcode.com/problems/sliding-window-maximum/",platform:"LeetCode",difficulty:"Hard",solutionLink:"Solution Link",companies:["Amazon","Directi","Flipkart","Microsoft","Google"]},{title:"Reverse pairs",link:"https://leetcode.com/problems/reverse-pairs/",platform:"LeetCode",difficulty:"Hard",solutionLink:"#",companies:[]},{title:"Largest rectangle in a histogram",link:"https://leetcode.com/problems/largest-rectangle-in-histogram/",platform:"LeetCode",difficulty:"Hard",solutionLink:"Solution Link",companies:[]}]}]},{title:"BINARY SEARCH",totalProblems:7,subtopics:[{title:"Problems",problems:[{title:"Search in rotated sorted",link:"https://www.codingninjas.com/codestudio/problems/n-forest_6570177",platform:"Coding Ninjas",difficulty:"Medium",solutionLink:"Solution Link",companies:["Microsoft","Google","Adobe","Amazon","D-E-Shaw","Flipkart","Hike","Intuit","MakeMyTrip","Paytm"]},{title:"Peak index in mountain array",link:"https://leetcode.com/problems/peak-index-in-a-mountain-array/",platform:"LeetCode",difficulty:"Medium",solutionLink:"Solution Link",companies:[]},{title:"Single element in sorted array",link:"https://practice.geeksforgeeks.org/problems/largest-element-in-array4009/1",platform:"GeeksForGeeks",difficulty:"Medium",solutionLink:"Solution Link",companies:[]},{title:"Allocate Minimum Pages (Book Allocation)",link:"https://practice.geeksforgeeks.org/problems/allocate-minimum-number-of-pages0937/1",platform:"GeeksForGeeks",difficulty:"Medium",solutionLink:"Solution Link",companies:["Google","Infosys","Codenation","Amazon","Microsoft"]},{title:"Painter’s Partition",link:"https://practice.geeksforgeeks.org/problems/the-painters-partition-problem1535/1",platform:"GeeksForGeeks",difficulty:"Medium",solutionLink:"Solution Link",companies:[]},{title:"Aggressive cows",link:"https://practice.geeksforgeeks.org/problems/aggressive-cows/1",platform:"GeeksForGeeks",difficulty:"Medium",solutionLink:"Solution Link",companies:["Adobe"]},{title:"Median of 2 Sorted Arrays",link:"https://leetcode.com/problems/median-of-two-sorted-arrays/",platform:"LeetCode",difficulty:"Hard",solutionLink:"#",companies:["Amazon","Samsung","Microsoft","Google"]}]}]},{title:"STRINGS",totalProblems:11,subtopics:[{title:"Problems",problems:[{title:"Valid Palindrome",link:"https://www.codingninjas.com/codestudio/problems/n-forest_6570177",platform:"Coding Ninjas",difficulty:"Easy",solutionLink:"Solution Link",companies:["Amazon","Cisco","DEShaw","Facebook","FactSet","MorganStanley","Paytm","Zoho"]},{title:"Longest Common Prefix",link:"https://leetcode.com/problems/longest-common-subsequence/",platform:"LeetCode",difficulty:"Easy",solutionLink:"#",companies:["Adobe","Blinkit","Dunzo"]},{title:"Valid Anagram",link:"https://leetcode.com/problems/valid-parentheses/",platform:"LeetCode",difficulty:"Easy",solutionLink:"#",companies:["Google","Adobe","Flipkart","Nagarro","Media.net","Directi"]},{title:"Reverse Words in String",link:"https://leetcode.com/problems/reverse-words-in-a-string/",platform:"LeetCode",difficulty:"Medium",solutionLink:"Solution Link",companies:[]},{title:"Remove All Occurrences of String",link:"https://leetcode.com/problems/remove-all-occurrences-of-a-substring/",platform:"LeetCode",difficulty:"Medium",solutionLink:"Solution Link",companies:[]},{title:"Permutation in String",link:"https://leetcode.com/problems/permutation-in-string/",platform:"LeetCode",difficulty:"Medium",solutionLink:"Solution Link",companies:["Adobe","GoldmanSachs","Uber"]},{title:"String Compression",link:"https://leetcode.com/problems/string-compression/",platform:"LeetCode",difficulty:"Medium",solutionLink:"Solution Link",companies:[]},{title:"Group Anagrams",link:"https://leetcode.com/problems/group-anagrams/",platform:"LeetCode",difficulty:"Medium",solutionLink:"#",companies:["Samsung","Adobe","Amazon"]},{title:"Minimum Window Substring",link:"https://leetcode.com/problems/minimum-window-substring/",platform:"LeetCode",difficulty:"Hard",solutionLink:"#",companies:["Amazon","Google","MakeMyTrip","Streamoid","Technologies","Microsoft","Media.net","Atlassian","Flipkart"]},{title:"Kmp Algorithm",link:"https://leetcode.com/problems/find-the-index-of-the-first-occurrence-in-a-string/",platform:"LeetCode",difficulty:"Hard",solutionLink:"#",companies:[]},{title:"Robin Karp",link:"https://www.geeksforgeeks.org/rabin-karp-algorithm-for-pattern-searching/",platform:"GeeksForGeeks",difficulty:"Hard",solutionLink:"#",companies:[]}]}]},{title:"RECURSION & BACKTRACKING",totalProblems:11,subtopics:[{title:"Problems",problems:[{title:"Combination Sum I",link:"https://www.codingninjas.com/codestudio/problems/n-forest_6570177",platform:"Coding Ninjas",difficulty:"Medium",solutionLink:"Solution Link",companies:[]},{title:"Combination Sum II",link:"https://leetcode.com/problems/combination-sum-ii/",platform:"LeetCode",difficulty:"Medium",solutionLink:"#",companies:[]},{title:"Palindrome Partitioning",link:"https://leetcode.com/problems/palindrome-partitioning/",platform:"LeetCode",difficulty:"Medium",solutionLink:"Solution Link",companies:[]},{title:"Knights Tour",link:"https://practice.geeksforgeeks.org/problems/knight-walk4521/1",platform:"GeeksForGeeks",difficulty:"Medium",solutionLink:"#",companies:[]},{title:"M Coloring",link:"https://practice.geeksforgeeks.org/problems/m-coloring-problem-1587115620/1",platform:"GeeksForGeeks",difficulty:"Medium",solutionLink:"#",companies:[]},{title:"Rat in a Maze",link:"https://practice.geeksforgeeks.org/problems/rat-in-a-maze-problem/1",platform:"GeeksForGeeks",difficulty:"Medium",solutionLink:"Solution Link",companies:[]},{title:"Subsets II",link:"https://leetcode.com/problems/subsets-ii/",platform:"LeetCode",difficulty:"Medium",solutionLink:"Solution Link",companies:[]},{title:"Merge Sort",link:"https://practice.geeksforgeeks.org/problems/merge-sort/1",platform:"GeeksForGeeks",difficulty:"Medium",solutionLink:"#",companies:[]},{title:"N Queens",link:"https://leetcode.com/problems/n-queens/",platform:"GeeksForGeeks",difficulty:"Hard",solutionLink:"Solution Link",companies:[]},{title:"Sudoku Solver",link:"https://leetcode.com/problems/sudoku-solver/",platform:"LeetCode",difficulty:"Hard",solutionLink:"Solution Link",companies:[]},{title:"Count Inversions",link:"https://practice.geeksforgeeks.org/problems/inversion-of-array-1587115620/1",platform:"GeeksForGeeks",difficulty:"Hard",solutionLink:"#",companies:[]}]}]},{title:"LINKED LIST",totalProblems:13,subtopics:[{title:"Problems",problems:[{title:"Reverse a LL",link:"https://www.codingninjas.com/codestudio/problems/n-forest_6570177",platform:"Coding Ninjas",difficulty:"Easy",solutionLink:"Solution Link",companies:[]},{title:"Middle of LL",link:"https://leetcode.com/problems/middle-of-the-linked-list/",platform:"LeetCode",difficulty:"Easy",solutionLink:"Solution Link",companies:[]},{title:"Merge 2 Sorted LL",link:"https://practice.geeksforgeeks.org/problems/merge-k-sorted-arrays/1",platform:"GeeksForGeeks",difficulty:"Easy",solutionLink:"Solution Link",companies:[]},{title:"Check if LL Is Palindrome or Not",link:"https://leetcode.com/problems/valid-palindrome/",platform:"LeetCode",difficulty:"Easy",solutionLink:"#",companies:[]},{title:"Detect Cycle in LL",link:"https://leetcode.com/problems/linked-list-cycle/",platform:"LeetCode",difficulty:"Easy",solutionLink:"Solution Link",companies:[]},{title:"Remove Cycle in LL",link:"https://practice.geeksforgeeks.org/problems/remove-loop-in-linked-list/1",platform:"GeeksForGeeks",difficulty:"Medium",solutionLink:"Solution Link",companies:[]},{title:"Flatten LL",link:"https://practice.geeksforgeeks.org/problems/flattening-a-linked-list/1",platform:"GeeksForGeeks",difficulty:"Medium",solutionLink:"Solution Link",companies:[]},{title:"Clone LL with Random Pointers",link:"https://leetcode.com/problems/copy-list-with-random-pointer/",platform:"LeetCode",difficulty:"Medium",solutionLink:"Solution Link",companies:[]},{title:"Add 2 Numbers",link:"https://leetcode.com/problems/add-two-numbers/",platform:"LeetCode",difficulty:"Medium",solutionLink:"#",companies:[]},{title:"Reverse Linked List 2",link:"https://leetcode.com/problems/reverse-linked-list/",platform:"LeetCode",difficulty:"Medium",solutionLink:"#",companies:[]},{title:"LRU Cache",link:"https://leetcode.com/problems/lru-cache/",platform:"LeetCode",difficulty:"Medium",solutionLink:"Solution Link",companies:[]},{title:"Rotate a LL",link:"https://leetcode.com/problems/linked-list-cycle/",platform:"LeetCode",difficulty:"Medium",solutionLink:"#",companies:[]},{title:"Reverse Nodes in K Groups",link:"https://leetcode.com/problems/reverse-nodes-in-k-group/",platform:"LeetCode",difficulty:"Hard",solutionLink:"Solution Link",companies:[]}]}]},{title:"STACK & QUEUE",totalProblems:15,subtopics:[{title:"Problems",problems:[{title:"Implement Stack using Queue",link:"https://leetcode.com/problems/implement-stack-using-queues/",platform:"LeetCode",difficulty:"Easy",solutionLink:"Solution Link",companies:[]},{title:"Implement Queue using Stack",link:"https://leetcode.com/problems/implement-queue-using-stacks/",platform:"LeetCode",difficulty:"Easy",solutionLink:"Solution Link",companies:[]},{title:"Next Greater Element I",link:"https://leetcode.com/problems/next-greater-element-i/",platform:"LeetCode",difficulty:"Easy",solutionLink:"Solution Link",companies:[]},{title:"Valid Parenthesis",link:"https://leetcode.com/problems/valid-parentheses/",platform:"LeetCode",difficulty:"Easy",solutionLink:"Solution Link",companies:[]},{title:"1st Non Repeating in Stream",link:"https://practice.geeksforgeeks.org/problems/first-non-repeating-character-in-a-stream1216/1",platform:"GeeksForGeeks",difficulty:"Easy",solutionLink:"Solution Link",companies:[]},{title:"Reverse 1st K Elements of Queue",link:"https://practice.geeksforgeeks.org/problems/reverse-first-k-elements-of-queue/1",platform:"GeeksForGeeks",difficulty:"Easy",solutionLink:"#",companies:[]},{title:"Time needed to Buy Tickets ",link:"https://leetcode.com/problems/time-needed-to-buy-tickets/",platform:"LeetCode",difficulty:"Easy",solutionLink:"#",companies:[]},{title:"Next Greater Element II",link:"https://leetcode.com/problems/next-greater-element-ii/",platform:"LeetCode",difficulty:"Medium",solutionLink:"Solution Link",companies:[]},{title:"Previous Smaller Element",link:"https://practice.geeksforgeeks.org/problems/smallest-number-on-left3403/1",platform:"GeeksForGeeks",difficulty:"Medium",solutionLink:"Solution Link",companies:[]},{title:"Celebrity Problem ",link:"https://practice.geeksforgeeks.org/problems/the-celebrity-problem/1",platform:"GeeksForGeeks",difficulty:"Medium",solutionLink:"Solution Link",companies:[]},{title:"Get Min Element from Stack",link:"https://leetcode.com/problems/min-stack/",platform:"LeetCode",difficulty:"Medium",solutionLink:"Solution Link",companies:[]},{title:"Circular Tour / Gas Station",link:"https://leetcode.com/problems/gas-station/",platform:"LeetCode",difficulty:"Medium",solutionLink:"Solution Link",companies:[]},{title:"Rotten Oranges",link:"https://leetcode.com/problems/rotting-oranges/",platform:"LeetCode",difficulty:"Medium",solutionLink:"#",companies:[]},{title:"Stock Span",link:"https://practice.geeksforgeeks.org/problems/stock-span-problem-1587115621/1",platform:"GeeksForGeeks",difficulty:"Medium",solutionLink:"Solution Link",companies:[]},{title:"Max Area in Histogram",link:"https://leetcode.com/problems/largest-rectangle-in-histogram/",platform:"LeetCode",difficulty:"Hard",solutionLink:"Solution Link",companies:[]}]}]}],vo=[{title:"1. Basics of programming",totalProblems:25,subtopics:[{title:"1.1 Time and Space Complexity",problems:[{title:"Learn about Time and Space Complexity",platform:"Unknown",articleLink:"https://codeanddebug.in/blog/time-complexity-and-space-complexity/",link:null,videoLink:"https://youtu.be/bLm0wgPU-6A"},{title:"What is TLE Error?",platform:"Unknown",articleLink:null,link:null,videoLink:"https://youtu.be/YvvAnuOzOSY"},{title:"Time Complexity of Common Python Operations",platform:"Unknown",articleLink:null,link:null,videoLink:"https://youtu.be/PLV0f4RAMvI"}]},{title:"1.2 Basic Maths Logic Buildup",problems:[{title:"Extraction of Digits",platform:"Unknown",articleLink:"https://codeanddebug.in/blog/extraction-of-digits-in-python/",link:null,videoLink:"https://youtu.be/yCMCdSZdIbY"},{title:"Count Digits",platform:"Naukri",articleLink:"https://codeanddebug.in/blog/python-program-to-count-number-of-digits/",link:"https://www.naukri.com/code360/problems/number-of-digits_4538242",videoLink:"https://youtu.be/ww-mxKUIltM"},{title:"Reverse a number",platform:"LeetCode",articleLink:"https://codeanddebug.in/blog/reverse-integer-python-program-explained/",link:"https://leetcode.com/problems/reverse-integer/description/",videoLink:"https://youtu.be/0fwrMYPTPQA"},{title:"Check palindrome",platform:"LeetCode",articleLink:"https://codeanddebug.in/blog/palindrome-number-program-in-python/",link:"https://leetcode.com/problems/palindrome-number/description/",videoLink:"https://youtu.be/ecZVpAZ37UI"},{title:"Armstrong Number",platform:"LeetCode",articleLink:"https://codeanddebug.in/blog/python-program-to-check-armstrong-number/",link:"https://leetcode.com/problems/armstrong-number/description/",videoLink:"https://youtu.be/rzRwIe8UwQQ"},{title:"Print all Divisors of a number",platform:"GeeksForGeeks",articleLink:"https://codeanddebug.in/blog/python-program-print-divisors-factors-integer/",link:"https://www.geeksforgeeks.org/problems/number-of-factors1435/1",videoLink:"https://youtu.be/YoVlGYyWgyw"},{title:"Check Prime",platform:"GeeksForGeeks",articleLink:"https://codeanddebug.in/blog/check-if-a-number-is-prime-or-not/",link:"https://www.geeksforgeeks.org/problems/prime-number2314/1",videoLink:"https://youtu.be/V08DWw1vEcA"}]},{title:"1.3 Recursion Basics",problems:[{title:"Introduction to Recursion",platform:"Unknown",articleLink:null,link:null,videoLink:"https://youtu.be/-VwidRe3Ob8"},{title:"Recursion using Parameters",platform:"Unknown",articleLink:null,link:null,videoLink:"https://youtu.be/fgurDxhawRw"},{title:"Functional Recursion",platform:"Unknown",articleLink:null,link:null,videoLink:"https://youtu.be/UgksZgjPrD4"},{title:"Print 1 to N without Loop",platform:"GeeksForGeeks",articleLink:"https://codeanddebug.in/blog/python-program-print-1-to-n-without-loops/",link:"https://www.geeksforgeeks.org/problems/print-1-to-n-without-using-loops-1587115620/1",videoLink:"https://youtu.be/Hk17r2CgyQA"},{title:"Print N times with Recursion",platform:"GeeksForGeeks",articleLink:"https://codeanddebug.in/blog/print-n-times-with-recursion/",link:"https://www.geeksforgeeks.org/problems/print-gfg-n-times/1",videoLink:"https://youtu.be/un6PLywUmDw"},{title:"Print N to 1 without Loop",platform:"GeeksForGeeks",articleLink:"https://codeanddebug.in/blog/print-n-to-1-without-loop/",link:"https://www.geeksforgeeks.org/problems/print-n-to-1-without-loop/1",videoLink:"https://youtu.be/69ZCDFy-OUo"},{title:"Sum of first N natural numbers without Loop",platform:"GeeksForGeeks",articleLink:"https://codeanddebug.in/blog/sum-of-first-n-terms/",link:"https://www.geeksforgeeks.org/problems/sum-of-first-n-terms5843/1",videoLink:"https://youtu.be/3M7Zc9rYj50"},{title:"Factorial of N numbers",platform:"GeeksForGeeks",articleLink:"https://codeanddebug.in/blog/find-factorial-of-number-using-recursion/",link:"https://www.geeksforgeeks.org/problems/factorial5739/1",videoLink:"https://youtu.be/HKltpsIOOro"},{title:"Reverse an Array without Loop",platform:"GeeksForGeeks",articleLink:"https://codeanddebug.in/blog/reverse-array-using-recursion-and-while-loop/",link:"https://www.geeksforgeeks.org/problems/reverse-sub-array5620/1",videoLink:"https://youtu.be/RynoW0e9I7U"},{title:"Check if String is palindrome",platform:"GeeksForGeeks",articleLink:"https://codeanddebug.in/blog/palindrome-string-recursive-iterative-solution/",link:"https://www.geeksforgeeks.org/problems/palindrome-string0817/1",videoLink:"https://youtu.be/uWYF8nL5E1A"},{title:"Fibonacci Series",platform:"LeetCode",articleLink:"https://codeanddebug.in/blog/fibonacci-number/",link:"https://leetcode.com/problems/fibonacci-number/description/",videoLink:"https://youtu.be/33UUd-rkN9M"}]},{title:"1.4 Hashing",problems:[{title:"[Pre Requirement] How to store frequency",platform:"Unknown",articleLink:null,link:null,videoLink:"https://youtu.be/Ocd_uHpsQyg"},{title:"Learn basics of hashing",platform:"Unknown",articleLink:null,link:null,videoLink:"https://youtu.be/0IE5T63qEHg"},{title:"Find the Frequency",platform:"GeeksForGeeks",articleLink:null,link:"https://www.geeksforgeeks.org/problems/find-the-frequency/1",videoLink:"https://youtu.be/h9wBdM9P3nE"},{title:"Count Frequency in a range",platform:"GeeksForGeeks",articleLink:null,link:"https://www.geeksforgeeks.org/problems/frequency-of-array-elements-1587115620/0",videoLink:"https://youtu.be/1-p-yE4g0hk"}]}]},{title:"2. Different types of Sorting",totalProblems:7,subtopics:[{title:"2.1 Basic Sorting Algorithms",problems:[{title:"Selection Sort",platform:"GeeksForGeeks",articleLink:"https://codeanddebug.in/blog/python-program-for-selection-sort-algorithm/",link:"https://www.geeksforgeeks.org/problems/selection-sort/1",videoLink:"https://youtu.be/X8pZMsEIvJk"},{title:"Bubble Sort",platform:"GeeksForGeeks",articleLink:"https://codeanddebug.in/blog/bubble-sort-algorithm-in-python/",link:"https://www.geeksforgeeks.org/problems/bubble-sort/1",videoLink:"https://youtu.be/M6Vg8SmGMA8"},{title:"Insertion Sort",platform:"GeeksForGeeks",articleLink:"https://codeanddebug.in/blog/insertion-sort-algorithm-explained-in-python/",link:"https://www.geeksforgeeks.org/problems/insertion-sort/0",videoLink:"https://youtu.be/-CI6Lhv1fOw"},{title:"Merge Sort",platform:"GeeksForGeeks",articleLink:"https://codeanddebug.in/blog/merge-sort-algorithm-in-python/",link:"https://www.geeksforgeeks.org/problems/merge-sort/1",videoLink:"https://youtu.be/ZDCoxXeksWM"},{title:"Quick Sort",platform:"GeeksForGeeks",articleLink:"https://codeanddebug.in/blog/quick-sort-in-python/",link:"https://www.geeksforgeeks.org/problems/quick-sort/1",videoLink:"https://youtu.be/77tOJ3kVeS0"},{title:"Recursive Bubble Sort",platform:"GeeksForGeeks",articleLink:"https://codeanddebug.in/blog/recursive-bubble-sort/",link:"https://www.geeksforgeeks.org/problems/bubble-sort/1",videoLink:"https://youtu.be/2uXyT0a6z3w"},{title:"Recursive Insertion Sort",platform:"GeeksForGeeks",articleLink:"https://codeanddebug.in/blog/recursive-insertion-sort/",link:"https://www.geeksforgeeks.org/problems/insertion-sort/1",videoLink:"https://youtu.be/3pM-5s-q6_0"}]}]},{title:"3. Problems on Arrays",totalProblems:22,subtopics:[{title:"3.1 EASY",problems:[{title:"Largest Element in an Array",platform:"GeeksForGeeks",articleLink:"https://codeanddebug.in/blog/find-the-largest-element-in-an-array/",link:"https://www.geeksforgeeks.org/problems/largest-element-in-array4009/0",videoLink:"https://youtu.be/H52p90uVUGA"},{title:"Second Largest Element in an Array without sorting",platform:"Naukri",articleLink:"https://codeanddebug.in/blog/find-second-largest-and-second-smallest-element-in-an-array/",link:"https://www.naukri.com/code360/problems/ninja-and-the-second-order-elements_6581960",videoLink:"https://youtu.be/Z6TwNJJ9OoQ"},{title:"Check if the array is sorted",platform:"GeeksForGeeks",articleLink:"https://codeanddebug.in/blog/check-if-array-is-sorted/",link:"https://www.geeksforgeeks.org/problems/check-if-an-array-is-sorted0701/1",videoLink:"https://youtu.be/_T4Tr2Y6yd4"},{title:"Remove duplicates from Sorted array",platform:"LeetCode",articleLink:"https://codeanddebug.in/blog/remove-duplicates-from-sorted-array-leetcode-26/",link:"https://leetcode.com/problems/remove-duplicates-from-sorted-array/description/",videoLink:"https://youtu.be/a2gP9uYrpQo"},{title:"Right Rotate an array by one place",platform:"Unknown",articleLink:null,link:null,videoLink:"https://youtu.be/_EHlC6xhhE0"},{title:"Right rotate an array by K places",platform:"LeetCode",articleLink:"https://codeanddebug.in/blog/rotate-an-array-by-k-places/",link:"https://leetcode.com/problems/rotate-array/description/",videoLink:"https://youtu.be/HRzQK5TkrZM"},{title:"Move Zeros to end",platform:"LeetCode",articleLink:"https://codeanddebug.in/blog/move-zeroes-leetcode-283/",link:"https://leetcode.com/problems/move-zeroes/description/",videoLink:"https://youtu.be/GtssSuFh_Ek"},{title:"Linear Search",platform:"GeeksForGeeks",articleLink:"https://codeanddebug.in/blog/linear-search-in-python/",link:"https://www.geeksforgeeks.org/problems/search-an-element-in-an-array-1587115621/1",videoLink:"https://youtu.be/mjjj1UK0Z1E"},{title:"Merge 2 sorted Arrays",platform:"GeeksForGeeks",articleLink:"https://codeanddebug.in/blog/union-of-2-sorted-with-duplicates/",link:"https://www.geeksforgeeks.org/problems/union-of-two-sorted-arrays-1587115621/1",videoLink:"https://youtu.be/d9Rpk0j9ofs"},{title:"Find missing number in an array",platform:"LeetCode",articleLink:"https://codeanddebug.in/blog/find-the-missing-number/",link:"https://leetcode.com/problems/missing-number/description/",videoLink:"https://youtu.be/Zo1d2EqX45U"},{title:"Maximum Consecutive Ones",platform:"LeetCode",articleLink:"https://codeanddebug.in/blog/maximum-consecutive-ones/",link:"https://leetcode.com/problems/max-consecutive-ones/description/",videoLink:"https://youtu.be/1QLnjtdEl9Y"}]},{title:"3.2 MEDIUM",problems:[{title:"2Sum Problem",platform:"LeetCode",articleLink:"https://codeanddebug.in/blog/two-sum-leetcode-1/",link:"https://leetcode.com/problems/two-sum/description/",videoLink:"https://youtu.be/EX2tR_cgCz4"},{title:"Kadane's Algorithm, maximum subarray sum",platform:"LeetCode",articleLink:"https://codeanddebug.in/blog/maximum-subarray-kadanes-algorithm/",link:"https://leetcode.com/problems/maximum-subarray/description/",videoLink:"https://youtu.be/o3luQXt08W8"},{title:"Stock Buy and Sell",platform:"LeetCode",articleLink:"https://codeanddebug.in/blog/best-time-to-buy-and-sell-stock/",link:"https://leetcode.com/problems/best-time-to-buy-and-sell-stock/description/",videoLink:"https://youtu.be/tGrDqGxWsmc"},{title:"Rearrange the array in alternating positive and negative items",platform:"LeetCode",articleLink:"https://codeanddebug.in/blog/rearrange-array-elements-by-sign/",link:"https://leetcode.com/problems/rearrange-array-elements-by-sign/description/",videoLink:"https://youtu.be/xFm1Tgc-HTI"},{title:"Longest Consecutive Sequence in an Array",platform:"LeetCode",articleLink:"https://codeanddebug.in/blog/longest-consecutive-sequence/",link:"https://leetcode.com/problems/longest-consecutive-sequence/description/",videoLink:"https://youtu.be/OO2FsBeFcEs"},{title:"Learn 2D Matrix [Check video]",platform:"Unknown",articleLink:null,link:null,videoLink:"https://youtu.be/sfVzamPfIrw"},{title:"Set Matrix Zeros",platform:"LeetCode",articleLink:"https://codeanddebug.in/blog/set-matrix-zeros/",link:"https://leetcode.com/problems/set-matrix-zeroes/description/",videoLink:"https://youtu.be/_RMrP1NBftA"},{title:"Rotate Matrix by 90 degrees",platform:"LeetCode",articleLink:"https://codeanddebug.in/blog/rotate-image/",link:"https://leetcode.com/problems/rotate-image/description/",videoLink:"https://youtu.be/w9ofZwey57M"},{title:"Print the matrix in spiral manner",platform:"LeetCode",articleLink:"https://codeanddebug.in/blog/spiral-matrix-leetcode-54/",link:"https://leetcode.com/problems/spiral-matrix/description/",videoLink:"https://youtu.be/FHnZAvZN-Co"}]},{title:"3.3 HARD",problems:[{title:"3-Sum Problem",platform:"LeetCode",articleLink:"https://codeanddebug.in/blog/3sum-leetcode-15/",link:"https://leetcode.com/problems/3sum/description/",videoLink:"https://youtu.be/Euky4JTEK0I"},{title:"4-Sum Problem",platform:"LeetCode",articleLink:"https://codeanddebug.in/blog/4sum-leetcode-18/",link:"https://leetcode.com/problems/4sum/description/",videoLink:"https://youtu.be/8DwLOo5AOR8"}]}]},{title:"4. Binary Search",totalProblems:10,subtopics:[{title:"4.1 Binary Search on simple 1D Arrays",problems:[{title:"Binary Search to find X in sorted array",platform:"LeetCode",articleLink:"https://codeanddebug.in/blog/binary-search-leetcode-704/",link:"https://leetcode.com/problems/binary-search/description/",videoLink:"https://youtu.be/fM4Yat0dERo"},{title:"Implement Lower Bound",platform:"GeeksForGeeks",articleLink:"https://codeanddebug.in/blog/implement-lower-bound/",link:"https://www.geeksforgeeks.org/problems/floor-in-a-sorted-array-1587115620/1",videoLink:"https://youtu.be/FfTbMO4o9OI"},{title:"Implement Upper Bound",platform:"Naukri",articleLink:"https://codeanddebug.in/blog/implement-upper-bound/",link:"https://www.naukri.com/code360/problems/implement-upper-bound_8165383",videoLink:"https://youtu.be/FfTbMO4o9OI"},{title:"Search Insert Position",platform:"LeetCode",articleLink:"https://codeanddebug.in/blog/search-insert-position-leetcode-35/",link:"https://leetcode.com/problems/search-insert-position/description/",videoLink:"https://youtu.be/MhsEFYyImPs"},{title:"Floor/Ceil in Sorted Array",platform:"Naukri",articleLink:"https://codeanddebug.in/blog/ceil-the-floor/",link:"https://www.naukri.com/code360/problems/ceiling-in-a-sorted-array_1825401",videoLink:"https://youtu.be/W1ombWDEPJg"},{title:"Find the first or last occurrence of a given number in a sorted array",platform:"LeetCode",articleLink:"https://codeanddebug.in/blog/find-first-and-last-position-of-element-in-sorted-array/",link:"https://leetcode.com/problems/find-first-and-last-position-of-element-in-sorted-array/description/",videoLink:"https://youtu.be/ViotQxoHip4"},{title:"Count occurrences of a number in a sorted array with duplicates",platform:"GeeksForGeeks",articleLink:"https://codeanddebug.in/blog/count-occurrences-of-a-number-in-a-sorted-array-with-duplicates/",link:"https://www.geeksforgeeks.org/problems/number-of-occurrence2259/1",videoLink:"https://youtu.be/Hs49-Lws_XM"},{title:"Search in Rotated Sorted Array I",platform:"LeetCode",articleLink:"https://codeanddebug.in/blog/search-in-rotated-sorted-array/",link:"https://leetcode.com/problems/search-in-rotated-sorted-array/description/",videoLink:"https://youtu.be/46kRvrls5xM"},{title:"Search in Rotated Sorted Array II",platform:"LeetCode",articleLink:"https://codeanddebug.in/blog/search-in-rotated-sorted-array-2/",link:"https://leetcode.com/problems/search-in-rotated-sorted-array-ii/description/",videoLink:"https://youtu.be/oVcBXszcpYs"},{title:"Find minimum in Rotated Sorted Array",platform:"LeetCode",articleLink:"https://codeanddebug.in/blog/find-minimum-in-rotated-sorted-array/",link:"https://leetcode.com/problems/find-minimum-in-rotated-sorted-array/description/",videoLink:"https://youtu.be/_B2JakopXLc"}]}]},{title:"5. Strings",totalProblems:10,subtopics:[{title:"5.1 EASY",problems:[{title:"Remove outermost Paranthesis",platform:"LeetCode",articleLink:"https://codeanddebug.in/blog/remove-outermost-parentheses/",link:"https://leetcode.com/problems/remove-outermost-parentheses/description/",videoLink:"https://youtu.be/yjso9jkYPbs"},{title:"Reverse words in a given string",platform:"LeetCode",articleLink:"https://codeanddebug.in/blog/reverse-words-in-a-string/",link:"https://leetcode.com/problems/reverse-words-in-a-string/description/",videoLink:"https://youtu.be/EBd-u0ehi98"},{title:"Largest odd number in a string",platform:"LeetCode",articleLink:"https://codeanddebug.in/blog/largest-odd-number-in-string/",link:"https://leetcode.com/problems/largest-odd-number-in-string/description/",videoLink:"https://youtu.be/kOiapvrtjo0"},{title:"Longest Common Prefix",platform:"LeetCode",articleLink:"https://codeanddebug.in/blog/longest-common-prefix/",link:"https://leetcode.com/problems/longest-common-prefix/description/",videoLink:"https://youtu.be/2iY7YYLNLAA"},{title:"Isomorphic String",platform:"LeetCode",articleLink:"https://codeanddebug.in/blog/isomorphic-strings/",link:"https://leetcode.com/problems/isomorphic-strings/description/",videoLink:"https://youtu.be/cX9vCdjWyBo"},{title:"Check whether one string is a rotation of another",platform:"LeetCode",articleLink:"https://codeanddebug.in/blog/rotate-string/",link:"https://leetcode.com/problems/rotate-string/description/",videoLink:"https://youtu.be/PrSGLUfmLh0"},{title:"Check if two strings are anagram of each other",platform:"LeetCode",articleLink:"https://codeanddebug.in/blog/valid-anagram/",link:"https://leetcode.com/problems/valid-anagram/description/",videoLink:"https://youtu.be/EnrE4tnmYZo"}]},{title:"5.2 MEDIUM",problems:[{title:"Sort Characters by frequency",platform:"LeetCode",articleLink:"https://codeanddebug.in/blog/sort-characters-by-frequency/",link:"https://leetcode.com/problems/sort-characters-by-frequency/description/",videoLink:"https://youtu.be/pyOb7lwnA7M"},{title:"Maximum Nesting Depth of Paranthesis",platform:"LeetCode",articleLink:"https://codeanddebug.in/blog/maximum-nesting-depth-of-the-parentheses/",link:"https://leetcode.com/problems/maximum-nesting-depth-of-the-parentheses/description/",videoLink:"https://youtu.be/5XgWK4Dj9UY"},{title:"Roman Number to Integer and vice versa",platform:"LeetCode",articleLink:"https://codeanddebug.in/blog/roman-to-integer/",link:"https://leetcode.com/problems/roman-to-integer/description/",videoLink:"https://youtu.be/1a7aYSZtCaY"}]}]},{title:"6. Linked List (Single LL, Double LL)",totalProblems:20,subtopics:[{title:"6.1 Learn Singly Linked List",problems:[{title:"Introduction to LinkedList",platform:"GeeksForGeeks",articleLink:"https://codeanddebug.in/blog/understanding-singly-linked-list-in-python/",link:"https://www.geeksforgeeks.org/problems/introduction-to-linked-list/1",videoLink:"https://youtu.be/-tlWxkCuEM0"},{title:"Inserting a node in LinkedList",platform:"GeeksForGeeks",articleLink:null,link:"https://www.geeksforgeeks.org/problems/linked-list-insertion-1587115620/0",videoLink:"https://youtu.be/n7w9U7w8jJE"},{title:"Deleting a node in LinkedList",platform:"LeetCode",articleLink:null,link:"https://leetcode.com/problems/delete-node-in-a-linked-list/description/",videoLink:"https://youtu.be/5_iCp9AAF5E"},{title:"Find the length of the linkedlist",platform:"GeeksForGeeks",articleLink:null,link:"https://www.geeksforgeeks.org/problems/count-nodes-of-linked-list/0",videoLink:"https://youtu.be/CsRkG9F9hAI"},{title:"Search an element in the LL",platform:"GeeksForGeeks",articleLink:null,link:"https://www.geeksforgeeks.org/problems/search-in-linked-list-1664434326/1",videoLink:"https://youtu.be/L6KXCAJZwzps"},{title:"Design Linked List",platform:"LeetCode",articleLink:"https://codeanddebug.in/blog/design-linked-list-leetcode-707/",link:"https://leetcode.com/problems/design-linked-list/description/",videoLink:"https://youtu.be/Wf4Qh8xfG6g"}]},{title:"6.2 Learn Doubly Linked List",problems:[{title:"Introduction to DLL",platform:"GeeksForGeeks",articleLink:null,link:"https://www.geeksforgeeks.org/problems/introduction-to-doubly-linked-list/1",videoLink:"https://youtu.be/wiMmDsFHna8"},{title:"Insert a node in DLL",platform:"GeeksForGeeks",articleLink:"https://codeanddebug.in/blog/understanding-doubly-linked-lists-complete-guide-with-real-life-examples/",link:"https://www.geeksforgeeks.org/problems/insert-a-node-in-doubly-linked-list/1",videoLink:"https://youtu.be/41q73CppGnc"},{title:"Delete a node in DLL",platform:"GeeksForGeeks",articleLink:null,link:"https://www.geeksforgeeks.org/problems/delete-node-in-doubly-linked-list/1",videoLink:null},{title:"Reverse a DLL",platform:"GeeksForGeeks",articleLink:"https://codeanddebug.in/blog/reverse-a-doubly-linked-list/",link:"https://www.geeksforgeeks.org/problems/reverse-a-doubly-linked-list/1",videoLink:"https://youtu.be/G1Q1YQ6YbDA"}]},{title:"6.3 Medium problems of SLL",problems:[{title:"Middle of a LinkedList [TortoiseHare Method]",platform:"LeetCode",articleLink:"https://codeanddebug.in/blog/middle-of-the-linked-list-leetcode-876/",link:"https://leetcode.com/problems/middle-of-the-linked-list/description/",videoLink:"https://youtu.be/7YEZjO03JwA"},{title:"Reverse a LinkedList [Iterative]",platform:"LeetCode",articleLink:"https://codeanddebug.in/blog/reverse-linked-list-leetcode-206/",link:"https://leetcode.com/problems/reverse-linked-list/description/",videoLink:"https://youtu.be/8DJwQV3fjuI"},{title:"Detect a loop in LL",platform:"LeetCode",articleLink:"https://codeanddebug.in/blog/linked-list-cycle-leetcode-141/",link:"https://leetcode.com/problems/linked-list-cycle/description/",videoLink:"https://youtu.be/2MlUoKhIjA0"},{title:"Find the starting point in LL",platform:"LeetCode",articleLink:"https://codeanddebug.in/blog/linked-list-cycle-ii-leetcode-142/",link:"https://leetcode.com/problems/linked-list-cycle-ii/description/",videoLink:"https://youtu.be/8qlar5RrRic"},{title:"Length of Loop in LL",platform:"GeeksForGeeks",articleLink:"https://codeanddebug.in/blog/find-length-of-loop/",link:"https://www.geeksforgeeks.org/problems/find-length-of-loop/1",videoLink:"https://youtu.be/cCaLT3un9VE"},{title:"Segrregate odd and even nodes in LL",platform:"LeetCode",articleLink:"https://codeanddebug.in/blog/odd-even-linked-list-leetcode-328/",link:"https://leetcode.com/problems/odd-even-linked-list/description/",videoLink:"https://youtu.be/DFNPTtevXso"},{title:"Remove Nth node from the back of the LL",platform:"LeetCode",articleLink:"https://codeanddebug.in/blog/remove-nth-node-from-end-of-list-leetcode-19/",link:"https://leetcode.com/problems/remove-nth-node-from-end-of-list/description/",videoLink:"https://youtu.be/L7_0FCrajUA"}]},{title:"6.4 Medium problems of DLL",problems:[{title:"Delete all occurrences of a key in DLL",platform:"GeeksForGeeks",articleLink:"https://codeanddebug.in/blog/delete-all-occurrences-of-a-given-key-in-a-doubly-linked-list/",link:"https://www.geeksforgeeks.org/problems/delete-all-occurrences-of-a-given-key-in-a-doubly-linked-list/1",videoLink:"https://youtu.be/apupPCFcwi4"},{title:"Find pairs with given sum in DLL",platform:"GeeksForGeeks",articleLink:"https://codeanddebug.in/blog/find-pairs-with-given-sum-in-doubly-linked-list/",link:"https://www.geeksforgeeks.org/problems/find-pairs-with-given-sum-in-doubly-linked-list/1",videoLink:"https://youtu.be/nnjpFriAgao"},{title:"Remove duplicates from sorted DLL",platform:"GeeksForGeeks",articleLink:"https://codeanddebug.in/blog/remove-duplicates-from-a-sorted-doubly-linked-list/",link:"https://www.geeksforgeeks.org/problems/remove-duplicates-from-a-sorted-doubly-linked-list/1",videoLink:"https://youtu.be/6_4eJ-X8FEU"}]}]},{title:"7. Bit Manipulation",totalProblems:11,subtopics:[{title:"7.1 Learning Bit Manipulation",problems:[{title:"Introduction to Bit Manipulation",platform:"GeeksForGeeks",articleLink:"https://codeanddebug.in/blog/bit-manipulation-introduction/",link:"https://www.geeksforgeeks.org/problems/bit-manipulation-1666686020/1",videoLink:"https://youtu.be/ZwWRAmdGoHo"},{title:"Check if the i-th bit is set or not",platform:"GeeksForGeeks",articleLink:null,link:"https://www.geeksforgeeks.org/problems/check-whether-k-th-bit-is-set-or-not-1587115620/1",videoLink:"https://youtu.be/RPXY-k9DSnE"},{title:"Check if a number is odd or not",platform:"GeeksForGeeks",articleLink:null,link:"https://www.geeksforgeeks.org/problems/odd-or-even3618/1",videoLink:"https://youtu.be/Ye9u5n2eA18"},{title:"Check if a number is power of 2 or not",platform:"LeetCode",articleLink:null,link:"https://leetcode.com/problems/power-of-two/description/",videoLink:"https://youtu.be/4jqGRpYp16k"},{title:"Count the number of set bits",platform:"GeeksForGeeks",articleLink:null,link:"https://www.geeksforgeeks.org/problems/count-total-set-bits-1587115620/1",videoLink:"https://youtu.be/nttpF821ac0"},{title:"Set/Unset the rightmost unset bit",platform:"GeeksForGeeks",articleLink:null,link:"https://www.geeksforgeeks.org/problems/set-the-rightmost-unset-bit4436/1",videoLink:"https://youtu.be/3M7Z3xJ3vCA"},{title:"Swap two numbers",platform:"GeeksForGeeks",articleLink:null,link:"https://www.geeksforgeeks.org/problems/swap-two-numbers3844/1",videoLink:"https://youtu.be/M_2jV1r9-5c"},{title:"Divide two integers without using multiplication, division and mod operator",platform:"LeetCode",articleLink:null,link:"https://leetcode.com/problems/divide-two-integers/description/",videoLink:"https://youtu.be/m41IMbH6Fgs"}]},{title:"7.2 Problems on Bit Manipulation",problems:[{title:"Count number of bits to be flipped to convert A to B",platform:"LeetCode",articleLink:"https://codeanddebug.in/blog/minimum-bit-flips-to-convert-number/",link:"https://leetcode.com/problems/minimum-bit-flips-to-convert-number/description/",videoLink:"https://youtu.be/F7eooluRQrU"},{title:"Find the number that appears odd number of times",platform:"LeetCode",articleLink:"https://codeanddebug.in/blog/single-number/",link:"https://leetcode.com/problems/single-number/description/",videoLink:"https://youtu.be/K0YpJf2UqN4"},{title:"Power Set",platform:"LeetCode",articleLink:"https://codeanddebug.in/blog/generate-all-subsets-using-bit-manipulation-leetcode-78/",link:"https://leetcode.com/problems/subsets/description/",videoLink:"https://youtu.be/Cytbo-kPJ3A"}]}]},{title:"8. Recursion",totalProblems:14,subtopics:[{title:"8.1 Learn Basic Recursion",problems:[{title:"Print all subsequences/Power Set",platform:"LeetCode",articleLink:"https://codeanddebug.in/blog/print-all-subsequences/",link:"https://leetcode.com/problems/subsets/description/",videoLink:"https://youtu.be/wNp_FS1Sa_c"},{title:"Print all subsequences with Sum = K",platform:"GeeksForGeeks",articleLink:"https://codeanddebug.in/blog/print-all-subsequences-with-sum-k/",link:"https://www.geeksforgeeks.org/dsa/find-all-subsequences-with-sum-equals-to-k/",videoLink:"https://youtu.be/Vy_6A0ZSunU"},{title:"Check if there exists a subsequence with sum K",platform:"GeeksForGeeks",articleLink:"https://codeanddebug.in/blog/check-if-there-exists-a-subsequence-with-sum-k/",link:"https://www.geeksforgeeks.org/problems/check-if-there-exists-a-subsequence-with-sum-k/0",videoLink:"https://youtu.be/CwUPDkzpG4A"},{title:"Count all subsequences with sum K",platform:"GeeksForGeeks",articleLink:"https://codeanddebug.in/blog/count-all-subsequences-with-sum-k/",link:"https://www.geeksforgeeks.org/problems/perfect-sum-problem5633/1",videoLink:"https://youtu.be/d4LA8I9kxWk"}]},{title:"8.2 Generate Subsequences",problems:[{title:"Generate all binary strings",platform:"GeeksForGeeks",articleLink:"https://codeanddebug.in/blog/generate-all-binary-strings/",link:"https://www.geeksforgeeks.org/problems/generate-all-binary-strings/1",videoLink:"https://youtu.be/PEso38E8hKU"},{title:"Generate Paranthesis",platform:"LeetCode",articleLink:"https://codeanddebug.in/blog/generate-parentheses/",link:"https://leetcode.com/problems/generate-parentheses/",videoLink:"https://youtu.be/8BqjZR-1jdg"},{title:"Learn All Patterns of Subsequences",platform:"GeeksForGeeks",articleLink:null,link:"https://www.geeksforgeeks.org/problems/better-string/1",videoLink:"https://youtu.be/eQ69C1FqLnU"},{title:"Combination Sum",platform:"LeetCode",articleLink:"https://codeanddebug.in/blog/combination-sum/",link:"https://leetcode.com/problems/combination-sum/description/",videoLink:"https://youtu.be/98-CzNc1O6M"},{title:"Combination Sum-II",platform:"LeetCode",articleLink:"https://codeanddebug.in/blog/combination-sum-ii/",link:"https://leetcode.com/problems/combination-sum-ii/description/",videoLink:"https://youtu.be/xkO6xL-kfCA"},{title:"Subset Sum-I",platform:"GeeksForGeeks",articleLink:"https://codeanddebug.in/blog/subset-sums/",link:"https://www.geeksforgeeks.org/problems/subset-sums2234/1",videoLink:"https://youtu.be/reJOd6ZjDn8"},{title:"Combination Sum - III",platform:"LeetCode",articleLink:"https://codeanddebug.in/blog/combination-sum-iii/",link:"https://leetcode.com/problems/combination-sum-iii/description/",videoLink:"https://youtu.be/hpB5_bKPbw0"},{title:"Letter Combinations of a Phone number",platform:"LeetCode",articleLink:"https://codeanddebug.in/blog/letter-combinations-of-a-phone-number/",link:"https://leetcode.com/problems/letter-combinations-of-a-phone-number/description/",videoLink:"https://youtu.be/vINkGJQI9i0"}]},{title:"8.3 Hard problems on recursion",problems:[{title:"N Queen",platform:"LeetCode",articleLink:"https://codeanddebug.in/blog/n-queens/",link:"https://leetcode.com/problems/n-queens/description/",videoLink:"https://youtu.be/BxSXlYzXWAk"},{title:"Rat in a Maze",platform:"GeeksForGeeks",articleLink:"https://codeanddebug.in/blog/rat-in-a-maze-problem/",link:"https://www.geeksforgeeks.org/problems/rat-in-a-maze-problem/1",videoLink:"https://youtu.be/kjAtKzMJ-GM"}]}]},{title:"9. Stacks and Queues",totalProblems:18,subtopics:[{title:"9.1 Learn the basics",problems:[{title:"Implement Stack using Arrays",platform:"GeeksForGeeks",articleLink:"https://codeanddebug.in/blog/implement-stack-using-array/",link:"https://www.geeksforgeeks.org/problems/implement-stack-using-array/1",videoLink:"https://youtu.be/qP0L6LZ3i2Q"},{title:"Implement Queue using Arrays",platform:"GeeksForGeeks",articleLink:"https://codeanddebug.in/blog/implement-queue-using-array/",link:"https://www.geeksforgeeks.org/problems/implement-queue-using-array/1",videoLink:"https://youtu.be/FeoV_qD453A"},{title:"Understand Deque in Python",platform:"GeeksForGeeks",articleLink:null,link:"https://www.geeksforgeeks.org/problems/count-digits5716/1",videoLink:"https://youtu.be/IqCe1e6l6Jo"},{title:"Implement Stack using Queue",platform:"LeetCode",articleLink:"https://codeanddebug.in/blog/implement-stack-using-queues/",link:"https://leetcode.com/problems/implement-stack-using-queues/description/",videoLink:"https://youtu.be/CTzX4vS5HB8"},{title:"Implement Queue using Stack",platform:"LeetCode",articleLink:"https://codeanddebug.in/blog/implement-queue-using-stacks/",link:"https://leetcode.com/problems/implement-queue-using-stacks/description/",videoLink:"https://youtu.be/1U-FKK4p6VE"},{title:"Implement stack using Linkedlist",platform:"GeeksForGeeks",articleLink:"https://codeanddebug.in/blog/implement-stack-using-linked-list/",link:"https://www.geeksforgeeks.org/problems/implement-stack-using-linked-list/1",videoLink:"https://youtu.be/N3T6wlfoEaM"},{title:"Implement queue using Linkedlist",platform:"GeeksForGeeks",articleLink:"https://codeanddebug.in/blog/implement-queue-using-linked-list/",link:"https://www.geeksforgeeks.org/problems/implement-queue-using-linked-list/1",videoLink:null},{title:"Check for balanced paranthesis",platform:"LeetCode",articleLink:"https://codeanddebug.in/blog/valid-parentheses/",link:"https://leetcode.com/problems/valid-parentheses/description/",videoLink:"https://youtu.be/mnNsoWg2IO0"},{title:"Implement Min Stack",platform:"LeetCode",articleLink:"https://codeanddebug.in/blog/min-stack/",link:"https://leetcode.com/problems/min-stack/description/",videoLink:"https://youtu.be/8BZDEeY-yUc"}]},{title:"9.2 Prefix, Infix, Postfix conversions",problems:[{title:"Infix to Postfix Conversion using Stack",platform:"GeeksForGeeks",articleLink:"https://codeanddebug.in/blog/infix-postfix-prefix-conversions-explained-in-python/",link:"https://www.geeksforgeeks.org/problems/infix-to-postfix-1587115620/1",videoLink:"https://youtu.be/cWdtik-TGd0"},{title:"Prefix to Infix Conversion",platform:"GeeksForGeeks",articleLink:null,link:"https://www.geeksforgeeks.org/problems/prefix-to-infix-conversion/1",videoLink:"https://youtu.be/4pIc9P4y-fq"},{title:"Prefix to Postfix Conversion",platform:"GeeksForGeeks",articleLink:null,link:"https://www.geeksforgeeks.org/problems/prefix-to-postfix-conversion/1",videoLink:"https://youtu.be/5dDEmbnclnU"},{title:"Postfix to Prefix Conversion",platform:"GeeksForGeeks",articleLink:null,link:"https://www.geeksforgeeks.org/problems/postfix-to-prefix-conversion/1",videoLink:"https://youtu.be/PgsED5pBcjex"},{title:"Postfix to Infix",platform:"GeeksForGeeks",articleLink:null,link:"https://www.geeksforgeeks.org/problems/postfix-to-infix-conversion/1",videoLink:"https://youtu.be/8HOHFBMZ2zE"},{title:"Convert Infix To Prefix Notation",platform:"GeeksForGeeks",articleLink:null,link:"https://www.geeksforgeeks.org/problems/infix-to-postfix-1587115620/1",videoLink:"https://youtu.be/GgvjYMoB0iV"}]},{title:"9.3 Monotonic Stack/Queue Problems",problems:[{title:"Next Greater Element",platform:"GeeksForGeeks",articleLink:"https://codeanddebug.in/blog/next-larger-element/",link:"https://www.geeksforgeeks.org/problems/next-larger-element-1587115620/1",videoLink:"https://youtu.be/i7N07gXrqh0"},{title:"Next Greater Element 2",platform:"LeetCode",articleLink:"https://codeanddebug.in/blog/next-greater-element-ii/",link:"https://leetcode.com/problems/next-greater-element-ii/description/",videoLink:"https://youtu.be/WKg2D9HY52Q"},{title:"Asteroid Collision",platform:"LeetCode",articleLink:"https://codeanddebug.in/blog/asteroid-collision/",link:"https://leetcode.com/problems/asteroid-collision/description/",videoLink:"https://youtu.be/VLw3GaRz_aQ"}]}]},{title:"10. Sliding Window and Two Pointers",totalProblems:4,subtopics:[{title:"10.1 Medium level Problems",problems:[{title:"Longest Substring Without Repeating Characters",platform:"LeetCode",articleLink:"https://codeanddebug.in/blog/longest-substring-without-repeating-characters/",link:"https://leetcode.com/problems/longest-substring-without-repeating-characters/description/",videoLink:"https://youtu.be/_zpYpeIREPE"},{title:"Max Consecutive Ones III",platform:"LeetCode",articleLink:"https://codeanddebug.in/blog/max-consecutive-ones-iii/",link:"https://leetcode.com/problems/max-consecutive-ones-iii/description/",videoLink:"https://youtu.be/VgmNapc5ycQ"},{title:"Fruit Into Baskets",platform:"LeetCode",articleLink:"https://codeanddebug.in/blog/fruit-into-baskets/",link:"https://leetcode.com/problems/fruit-into-baskets/description/",videoLink:"https://youtu.be/bXM1YNPmrwo"},{title:"Maximum point you can obtain from cards",platform:"LeetCode",articleLink:"https://codeanddebug.in/blog/maximum-points-you-can-obtain-from-cards/",link:"https://leetcode.com/problems/maximum-points-you-can-obtain-from-cards/description/",videoLink:"https://youtu.be/SuwXaaXeOa0"}]}]},{title:"11. Greedy Algorithms",totalProblems:8,subtopics:[{title:"11.1 Easy Level Problems",problems:[{title:"Assign Cookies",platform:"LeetCode",articleLink:"https://codeanddebug.in/blog/assign-cookies/",link:"https://leetcode.com/problems/assign-cookies/description/",videoLink:"https://youtu.be/zbOVRO7xV-0"},{title:"Fractional Knapsack Problem",platform:"GeeksForGeeks",articleLink:"https://codeanddebug.in/blog/fractional-knapsack/",link:"https://www.geeksforgeeks.org/problems/fractional-knapsack-1587115620/1",videoLink:"https://youtu.be/K_qtZbLSYm0"},{title:"Greedy algorithm to find minimum number of coins",platform:"GeeksForGeeks",articleLink:"https://codeanddebug.in/blog/minimum-number-of-coins/",link:"https://www.geeksforgeeks.org/problems/-minimum-number-of-coins4426/1",videoLink:"https://youtu.be/hMcQXvJpT2o"},{title:"Lemonade Change",platform:"LeetCode",articleLink:"https://codeanddebug.in/blog/lemonade-change/",link:"https://leetcode.com/problems/lemonade-change/description/",videoLink:"https://youtu.be/OtxKdaDnEOE"}]},{title:"11.2 Medium/Hard Level Problems",problems:[{title:"N meetings in one room",platform:"GeeksForGeeks",articleLink:"https://codeanddebug.in/blog/n-meetings-in-one-room/",link:"https://www.geeksforgeeks.org/problems/n-meetings-in-one-room-1587115620/1",videoLink:"https://youtu.be/OnQlEihg1sA"},{title:"Jump Game",platform:"LeetCode",articleLink:"https://codeanddebug.in/blog/jump-game/",link:"https://leetcode.com/problems/jump-game/description/",videoLink:"https://youtu.be/kw8mIiTkLK4"},{title:"Jump Game 2",platform:"LeetCode",articleLink:"https://codeanddebug.in/blog/jump-game-ii/",link:"https://leetcode.com/problems/jump-game-ii/description/",videoLink:"https://youtu.be/H4Tv4-yi9m8"},{title:"Minimum number of platforms required for a railway",platform:"GeeksForGeeks",articleLink:"https://codeanddebug.in/blog/minimum-platforms/",link:"https://www.geeksforgeeks.org/problems/minimum-platforms-1587115620/1",videoLink:"https://youtu.be/z5yb0JGi4OE"}]}]},{title:"12. Binary Trees",totalProblems:14,subtopics:[{title:"12.1 Learn Traversal",problems:[{title:"Introduction to Trees",platform:"GeeksForGeeks",articleLink:null,link:"https://www.geeksforgeeks.org/problems/introduction-to-trees/1",videoLink:"https://youtu.be/zquPPfnD87U"},{title:"Create Binary Tree",platform:"GeeksForGeeks",articleLink:null,link:"https://www.geeksforgeeks.org/problems/binary-tree-representation/1",videoLink:"https://youtu.be/qp2ct1cOgdM"},{title:"Binary Tree Traversals in Binary Tree",platform:"Naukri",articleLink:"https://codeanddebug.in/blog/depth-first-search-in-binary-trees/",link:"https://www.naukri.com/code360/problems/tree-traversal_981269",videoLink:"https://youtu.be/ev0JrFgPO4E"},{title:"Preorder Traversal of Binary Tree",platform:"LeetCode",articleLink:null,link:"https://leetcode.com/problems/binary-tree-preorder-traversal/description/",videoLink:"https://youtu.be/RlHhAg3ZdkA"},{title:"Inorder Traversal of Binary Tree",platform:"LeetCode",articleLink:null,link:"https://leetcode.com/problems/binary-tree-inorder-traversal/description/",videoLink:"https://youtu.be/Z_hYwJLKDqE"},{title:"Post-order Traversal of Binary Tree",platform:"LeetCode",articleLink:null,link:"https://leetcode.com/problems/binary-tree-postorder-traversal/description/",videoLink:"https://youtu.be/CObN867kF1U"},{title:"Level order Traversal / Level order traversal in spiral form",platform:"LeetCode",articleLink:"https://codeanddebug.in/blog/breadth-first-search-in-binary-trees/",link:"https://leetcode.com/problems/binary-tree-level-order-traversal/description/",videoLink:"https://youtu.be/tRhWzxU-oH0"}]},{title:"12.2 Medium Level Problems",problems:[{title:"Height of a Binary Tree",platform:"LeetCode",articleLink:"https://codeanddebug.in/blog/maximum-depth-of-binary-tree/",link:"https://leetcode.com/problems/maximum-depth-of-binary-tree/description/",videoLink:"https://youtu.be/qYMxdq2abD8"},{title:"Check if the Binary tree is height-balanced or not",platform:"LeetCode",articleLink:"https://codeanddebug.in/blog/balanced-binary-tree/",link:"https://leetcode.com/problems/balanced-binary-tree/description/",videoLink:"https://youtu.be/zvJZ8A7mBOY"},{title:"Diameter of Binary Tree",platform:"LeetCode",articleLink:"https://codeanddebug.in/blog/diameter-of-binary-tree/",link:"https://leetcode.com/problems/diameter-of-binary-tree/description/",videoLink:"https://youtu.be/KsADe9oiK1A"},{title:"Maximum path sum",platform:"LeetCode",articleLink:"https://codeanddebug.in/blog/binary-tree-maximum-path-sum/",link:"https://leetcode.com/problems/binary-tree-maximum-path-sum/description/",videoLink:"https://youtu.be/kpEWBjT3gbI"},{title:"Top View of Binary Tree",platform:"GeeksForGeeks",articleLink:"https://codeanddebug.in/blog/top-view-of-binary-tree/",link:"https://www.geeksforgeeks.org/problems/top-view-of-binary-tree/1",videoLink:"https://youtu.be/g8cmtH2pCj8"},{title:"Bottom View of Binary Tree",platform:"GeeksForGeeks",articleLink:"https://codeanddebug.in/blog/bottom-view-of-binary-tree/",link:"https://www.geeksforgeeks.org/problems/bottom-view-of-binary-tree/1",videoLink:"https://youtu.be/KRMSZ8-vQcE"},{title:"Right/Left View of Binary Tree",platform:"LeetCode",articleLink:"https://codeanddebug.in/blog/binary-tree-right-side-view/",link:"https://leetcode.com/problems/binary-tree-right-side-view/description/",videoLink:"https://youtu.be/91dm6RRruhM"}]}]},{title:"13. Binary Search Trees",totalProblems:12,subtopics:[{title:"13.1 Introduction",problems:[{title:"Introduction to Binary Search Tree",platform:"GeeksForGeeks",articleLink:null,link:"https://www.geeksforgeeks.org/problems/binary-search-trees/1",videoLink:"https://youtu.be/31g6lkNiEik"},{title:"Search in a Binary Search Tree",platform:"LeetCode",articleLink:null,link:"https://leetcode.com/problems/search-in-a-binary-search-tree/description/",videoLink:"https://youtu.be/nF3EcB3grg8"},{title:"Find Min/Max in BST",platform:"GeeksForGeeks",articleLink:null,link:"https://www.geeksforgeeks.org/problems/minimum-element-in-bst/1",videoLink:"https://youtu.be/GIHS4wevMFU"}]},{title:"13.2 Practice Problems",problems:[{title:"Ceil in a Binary Search Tree",platform:"GeeksForGeeks",articleLink:null,link:"https://www.geeksforgeeks.org/problems/implementing-ceil-in-bst/1",videoLink:"https://youtu.be/GIHwR_vsmt4"},{title:"Floor in a Binary Search Tree",platform:"GeeksForGeeks",articleLink:null,link:"https://www.geeksforgeeks.org/problems/floor-in-bst/1",videoLink:"https://youtu.be/wEaEmxyYDNs"},{title:"Insert a given Node in Binary Search Tree",platform:"LeetCode",articleLink:null,link:"https://leetcode.com/problems/insert-into-a-binary-search-tree/description/",videoLink:"https://youtu.be/CLdBM8j_J3c"},{title:"Delete a Node in Binary Search Tree",platform:"LeetCode",articleLink:null,link:"https://leetcode.com/problems/delete-node-in-a-bst/description/",videoLink:"https://youtu.be/GKvN-M15NkE"},{title:"Morris Preorder/Inorder Traversal of a Binary Tree",platform:"LeetCode",articleLink:null,link:"https://leetcode.com/problems/binary-tree-inorder-traversal/description/",videoLink:"https://youtu.be/JwVhYBDVUQ0"},{title:"Find K-th smallest/largest element in BST",platform:"LeetCode",articleLink:null,link:"https://leetcode.com/problems/kth-smallest-element-in-a-bst/description/",videoLink:"https://youtu.be/q4SXMP-BUkk"},{title:"Check if a tree is a BST or BT",platform:"LeetCode",articleLink:null,link:"https://leetcode.com/problems/validate-binary-search-tree/description/",videoLink:"https://youtu.be/ah604p9o5rA"},{title:"LCA in Binary Search Tree",platform:"LeetCode",articleLink:null,link:"https://leetcode.com/problems/lowest-common-ancestor-of-a-binary-search-tree/description/",videoLink:"https://youtu.be/huVyorR9rxE"},{title:"Inorder Successor/Predecessor in BST",platform:"LeetCode",articleLink:null,link:"https://leetcode.com/problems/inorder-successor-in-bst/description/",videoLink:"https://youtu.be/-PHBkE0u9GA"}]}]},{title:"14. Heaps",totalProblems:13,subtopics:[{title:"14.1 Introduction to Heaps",problems:[{title:"Introduction to Priority Queues using Binary Heaps",platform:"GeeksForGeeks",articleLink:null,link:"https://www.geeksforgeeks.org/problems/implementation-of-priority-queue-using-binary-heap/1",videoLink:"https://youtu.be/rUNcm2PgzPU"},{title:"Heapify Algorithm",platform:"Unknown",articleLink:null,link:null,videoLink:"https://youtu.be/uLv4UGQi-1U"},{title:"Build Heap from a Given Array",platform:"Unknown",articleLink:null,link:null,videoLink:"https://youtu.be/dTviye190jU"},{title:"Implement Min Heap",platform:"Unknown",articleLink:null,link:null,videoLink:"https://youtu.be/Eq0TFkdsL0c"},{title:"Implement Max Heap",platform:"Unknown",articleLink:null,link:null,videoLink:"https://youtu.be/xdy3XyiJeyE"},{title:"Check if an Array Represents a Min Heap",platform:"Unknown",articleLink:null,link:null,videoLink:"https://youtu.be/AxcEJLQBELU"},{title:"Convert Min Heap to Max Heap",platform:"Unknown",articleLink:null,link:null,videoLink:"https://youtu.be/VHdKsoRft8U"}]},{title:"14.2 Medium level problems",problems:[{title:"Kth largest element in an array [use priority queue]",platform:"LeetCode",articleLink:null,link:"https://leetcode.com/problems/kth-largest-element-in-an-array/description/",videoLink:"https://youtu.be/godKGr48ON8"},{title:"Kth smallest element in an array [use priority queue]",platform:"GeeksForGeeks",articleLink:null,link:"https://www.geeksforgeeks.org/problems/kth-smallest-element5635/1",videoLink:"https://youtu.be/HvH-X5qH7O2"},{title:"Merge M sorted Lists",platform:"LeetCode",articleLink:null,link:"https://leetcode.com/problems/merge-k-sorted-lists/description/",videoLink:"https://youtu.be/kpCesr9SXbY"},{title:"Replace each array element by its corresponding rank",platform:"GeeksForGeeks",articleLink:null,link:"https://www.geeksforgeeks.org/problems/replace-elements-by-its-rank-in-the-array/1",videoLink:"https://youtu.be/j1bfGSROR_p"},{title:"Task Scheduler",platform:"LeetCode",articleLink:null,link:"https://leetcode.com/problems/task-scheduler/description/",videoLink:"https://youtu.be/sMaTBF6oMcV"},{title:"Hands of Straights",platform:"LeetCode",articleLink:null,link:"https://leetcode.com/problems/hand-of-straights/description/",videoLink:"https://youtu.be/GGpcEvIzFPQ"}]}]},{title:"15. Graphs",totalProblems:47,subtopics:[{title:"15.1 Introduction to Graphs",problems:[{title:"Graph and Types",platform:"GeeksForGeeks",articleLink:null,link:"https://www.geeksforgeeks.org/problems/graph-and-vertices/1",videoLink:"https://youtu.be/JIVnSenyoRU"},{title:"Graph Representation",platform:"GeeksForGeeks",articleLink:null,link:"https://www.geeksforgeeks.org/problems/print-adjacency-list-1587115620/1",videoLink:"https://youtu.be/YS4FmJBHHDI"},{title:"Connected Components",platform:"LeetCode",articleLink:null,link:"https://leetcode.com/problems/number-of-connected-components-in-an-undirected-graph/description/",videoLink:"https://youtu.be/YSROdEqf3ow"},{title:"BFS",platform:"GeeksForGeeks",articleLink:"https://codeanddebug.in/blog/breadth-first-search-in-graph/",link:"https://www.geeksforgeeks.org/problems/bfs-traversal-of-graph/1",videoLink:"https://youtu.be/lxOw5e7ZuVg"},{title:"DFS",platform:"GeeksForGeeks",articleLink:"https://codeanddebug.in/blog/depth-first-search-in-graph/",link:"https://www.geeksforgeeks.org/problems/depth-first-traversal-for-a-graph/1",videoLink:"https://youtu.be/eqch9gKiWEQ"}]},{title:"15.2 Problems based on BFS & DFS",problems:[{title:"Rotten Oranges",platform:"LeetCode",articleLink:"https://codeanddebug.in/blog/rotting-oranges-leetcode-994/",link:"https://leetcode.com/problems/rotting-oranges/description/",videoLink:"https://youtu.be/sBspSzNU7Oc"},{title:"Flood fill",platform:"LeetCode",articleLink:"https://codeanddebug.in/blog/flood-fill-leetcode-733/",link:"https://leetcode.com/problems/flood-fill/description/",videoLink:"https://youtu.be/nisRNyt4ww4"},{title:"Cycle Detection in undirected Graph (bfs)",platform:"GeeksForGeeks",articleLink:"https://codeanddebug.in/blog/detect-cycle-in-an-undirected-graph-using-bfs/",link:"https://www.geeksforgeeks.org/problems/detect-cycle-in-an-undirected-graph/1",videoLink:"https://youtu.be/k7Hd32SiRGo"},{title:"Cycle Detection in undirected Graph (dfs)",platform:"GeeksForGeeks",articleLink:"https://codeanddebug.in/blog/detect-cycle-in-an-undirected-graph-using-dfs/",link:"https://www.geeksforgeeks.org/problems/detect-cycle-in-an-undirected-graph/1",videoLink:"https://youtu.be/XUKV0_AFh44"},{title:"0/1 Matrix (Bfs Problem)",platform:"LeetCode",articleLink:"https://codeanddebug.in/blog/01-matrix-leetcode-542/",link:"https://leetcode.com/problems/01-matrix/description/",videoLink:"https://youtu.be/p-omSwqOjaI"},{title:"Surrounded Regions (dfs)",platform:"LeetCode",articleLink:"https://codeanddebug.in/blog/surrounded-regions-leetcode-130/",link:"https://leetcode.com/problems/surrounded-regions/description/",videoLink:"https://youtu.be/n05WmMKTcGo"},{title:"Number of Enclaves [flood fill implementation - multisource]",platform:"LeetCode",articleLink:"https://codeanddebug.in/blog/number-of-enclaves-leetcode-1020/",link:"https://leetcode.com/problems/number-of-enclaves/description/",videoLink:"https://youtu.be/ScDd1Z2zToI"},{title:"Word ladder - 1",platform:"LeetCode",articleLink:"https://codeanddebug.in/blog/word-ladder-leetcode-127/",link:"https://leetcode.com/problems/word-ladder/description/",videoLink:"https://youtu.be/hxZQY5U__NM"},{title:"Word ladder - 2",platform:"LeetCode",articleLink:"https://codeanddebug.in/blog/word-ladder-ii-leetcode-126/",link:"https://leetcode.com/problems/word-ladder-ii/description/",videoLink:"https://youtu.be/JkPYpeLl4_Q"},{title:"Number of Islands",platform:"LeetCode",articleLink:"https://codeanddebug.in/blog/number-of-islands-leetcode-200/",link:"https://leetcode.com/problems/number-of-islands/description/",videoLink:"https://youtu.be/_vh_eWEiEl8"},{title:"Number of Distinct Islands [dfs multisource]",platform:"GeeksForGeeks",articleLink:"https://codeanddebug.in/blog/number-of-distinct-islands/",link:"https://www.geeksforgeeks.org/problems/number-of-distinct-islands/1",videoLink:"https://youtu.be/-mMmf3BAfLc"},{title:"Bipartite Graph (DFS)",platform:"LeetCode",articleLink:"https://codeanddebug.in/blog/is-graph-bipartite/",link:"https://leetcode.com/problems/is-graph-bipartite/description/",videoLink:"https://youtu.be/tJXPMjy5eEM"},{title:"Cycle Detection in Directed Graph (DFS)",platform:"GeeksForGeeks",articleLink:"https://codeanddebug.in/blog/detect-cycle-in-a-directed-graph/",link:"https://www.geeksforgeeks.org/problems/detect-cycle-in-a-directed-graph/1",videoLink:"https://youtu.be/BrxY15Gz2DY"}]},{title:"15.3 Topo Sort based problems",problems:[{title:"Topo Sort",platform:"GeeksForGeeks",articleLink:"https://codeanddebug.in/blog/topological-sort-in-graph/",link:"https://www.geeksforgeeks.org/problems/topological-sort/1",videoLink:"https://youtu.be/hy7lViJNkzg"},{title:"Kahn's Algorithm",platform:"GeeksForGeeks",articleLink:"https://codeanddebug.in/blog/topo-sort-kahns-algorithm/",link:"https://www.geeksforgeeks.org/problems/topological-sort/1",videoLink:"https://youtu.be/I5E89BRSQ-o"},{title:"Cycle Detection in Directed Graph (BFS)",platform:"GeeksForGeeks",articleLink:"https://codeanddebug.in/blog/detect-cycle-in-a-directed-graph-kahns-algorithm-bfs/",link:"https://www.geeksforgeeks.org/problems/detect-cycle-in-a-directed-graph/1",videoLink:"https://youtu.be/ZrwQaFY_4rE"},{title:"Course Schedule - I",platform:"LeetCode",articleLink:"https://codeanddebug.in/blog/course-schedule-1/",link:"https://leetcode.com/problems/course-schedule/description/",videoLink:"https://youtu.be/q2mquGGPmwI"},{title:"Course Schedule - II",platform:"LeetCode",articleLink:null,link:"https://leetcode.com/problems/course-schedule-ii/description/",videoLink:"https://youtu.be/q2mquGGPmwI"},{title:"Find eventual safe states (BFS)",platform:"LeetCode",articleLink:"https://codeanddebug.in/blog/find-eventual-safe-states-bfs/",link:"https://leetcode.com/problems/find-eventual-safe-states/description/",videoLink:"https://youtu.be/bJLIEOPH4Nc"},{title:"Find eventual safe states (DFS)",platform:"LeetCode",articleLink:"https://codeanddebug.in/blog/find-eventual-safe-states-dfs/",link:"https://leetcode.com/problems/find-eventual-safe-states/description/",videoLink:"https://youtu.be/-MlOLKzruRY"},{title:"Alien dictionary",platform:"GeeksForGeeks",articleLink:null,link:"https://www.geeksforgeeks.org/problems/alien-dictionary/1",videoLink:"https://youtu.be/YjRRRTI3Bmo"}]},{title:"15.4 Shortest Path related Problems",problems:[{title:"Shortest Path in UG with unit weights",platform:"GeeksForGeeks",articleLink:"https://codeanddebug.in/blog/shortest-path-in-an-undirected-graph/",link:"https://www.geeksforgeeks.org/problems/shortest-path-in-undirected-graph-having-unit-distance/1",videoLink:"https://youtu.be/dRSEdDT7do0"},{title:"Shortest Path in DAG",platform:"GeeksForGeeks",articleLink:"https://codeanddebug.in/blog/shortest-path-in-a-weighted-dag-topological-sort/",link:"https://www.geeksforgeeks.org/problems/shortest-path-in-undirected-graph/1",videoLink:"https://youtu.be/b8IB5UJ1p4U"},{title:"Djisktra's Algorithm [Using Priority Queue]",platform:"GeeksForGeeks",articleLink:"https://codeanddebug.in/blog/dijkstra-algorithm-with-a-priority-queue/",link:"https://www.geeksforgeeks.org/problems/implementing-dijkstra-set-1-adjacency-matrix/1",videoLink:"https://youtu.be/f0Xr7Bfg2Zk"},{title:"Djisktra's Algorithm [Using Set]",platform:"GeeksForGeeks",articleLink:"https://codeanddebug.in/blog/dijkstra-algorithm-in-python-using-a-set/",link:null,videoLink:"https://youtu.be/2BLYnNwYpMA"},{title:"Why priority Queue is used in Djisktra's Algorithm",platform:"GeeksForGeeks",articleLink:null,link:"https://www.geeksforgeeks.org/problems/implementing-dijkstra-set-1-adjacency-matrix/1",videoLink:"https://youtu.be/kb4O-6cbWZg"},{title:"Print the Shortest Path",platform:"GeeksForGeeks",articleLink:"https://codeanddebug.in/blog/print-shortest-path-with-dijkstra-algorithm/",link:"https://www.geeksforgeeks.org/problems/shortest-path-in-weighted-undirected-graph/1",videoLink:"https://youtu.be/laRgnK9uwCE"},{title:"Shortest path in a binary maze",platform:"LeetCode",articleLink:"https://codeanddebug.in/blog/shortest-path-in-a-binary-matrix/",link:"https://leetcode.com/problems/shortest-path-in-binary-matrix/description/",videoLink:"https://youtu.be/u6iPL2SQ0Fo"},{title:"Path with minimum effort",platform:"LeetCode",articleLink:"https://codeanddebug.in/blog/path-with-minimum-effort/",link:"https://leetcode.com/problems/path-with-minimum-effort/description/",videoLink:"https://youtu.be/scW82V_e1FY"},{title:"Cheapest flights within k stops",platform:"LeetCode",articleLink:"https://codeanddebug.in/blog/cheapest-flights-within-k-stops-leetcode-787-easy-bfs-approach-in-python/",link:"https://leetcode.com/problems/cheapest-flights-within-k-stops/description/",videoLink:"https://youtu.be/8UJ4iq3LBUw"},{title:"Minimum steps to reach end from start by performing multiplication and mod operations with array elements",platform:"GeeksForGeeks",articleLink:"https://codeanddebug.in/blog/minimum-multiplications-to-reach-end-python-bfs/",link:"https://www.geeksforgeeks.org/problems/minimum-multiplications-to-reach-end/1",videoLink:"https://youtu.be/HSp2KcyvQ6I"},{title:"Number of ways to arrive at destination",platform:"LeetCode",articleLink:"https://codeanddebug.in/blog/number-of-ways-to-arrive-at-destination-python/",link:"https://leetcode.com/problems/number-of-ways-to-arrive-at-destination/description/",videoLink:"https://youtu.be/7vFSTfY4uGM"},{title:"Bellman Ford Algorithm",platform:"GeeksForGeeks",articleLink:"https://codeanddebug.in/blog/bellman-ford-algorithm/",link:"https://www.geeksforgeeks.org/problems/distance-from-the-source-bellman-ford-algorithm/1",videoLink:"https://youtu.be/7C_w5RIEyoU"},{title:"Floyd Warshal Algorithm",platform:"GeeksForGeeks",articleLink:"https://codeanddebug.in/blog/floyd-warshall-vs-dijkstra-all-pairs-shortest-paths/",link:"https://www.geeksforgeeks.org/problems/implementing-floyd-warshall2042/1",videoLink:"https://youtu.be/LULHxlvOhGc"},{title:"Find the city with the smallest number of neighbors in a threshold distance",platform:"LeetCode",articleLink:"https://codeanddebug.in/blog/find-the-city-with-the-smallest-number-of-neighbors-at-a-threshold-distance/",link:"https://leetcode.com/problems/find-the-city-with-the-smallest-number-of-neighbors-at-a-threshold-distance/description/",videoLink:"https://youtu.be/KludkoXzOXY"}]},{title:"15.5 Minimum Spanning Tree and Disjoint Set",problems:[{title:"Minimum Spanning Tree",platform:"GeeksForGeeks",articleLink:null,link:"https://www.geeksforgeeks.org/problems/minimum-spanning-tree/1",videoLink:"https://youtu.be/Q-FY2yCRhvk"},{title:"Prim's Algorithm",platform:"GeeksForGeeks",articleLink:null,link:"https://www.geeksforgeeks.org/problems/minimum-spanning-tree/1",videoLink:"https://youtu.be/T2CNZcsYR7o"},{title:"Disjoint Set [Union by Rank]",platform:"GeeksForGeeks",articleLink:null,link:"https://www.geeksforgeeks.org/problems/disjoint-set-union-find/1",videoLink:"https://youtu.be/E__JlsiBTik"},{title:"Disjoint Set [Union by Size]",platform:"GeeksForGeeks",articleLink:null,link:"https://www.geeksforgeeks.org/problems/disjoint-set-union-find/1",videoLink:"https://youtu.be/E__JlsiBTik"},{title:"Kruskal's Algorithm",platform:"GeeksForGeeks",articleLink:null,link:"https://www.geeksforgeeks.org/problems/minimum-spanning-tree/1",videoLink:"https://youtu.be/LdknY_dfTyo"},{title:"Number of Provinces",platform:"GeeksForGeeks",articleLink:null,link:"https://www.geeksforgeeks.org/problems/number-of-provinces/1",videoLink:"https://youtu.be/SOmFfGoaW1w"},{title:"Number of operations to make network connected",platform:"LeetCode",articleLink:null,link:"https://leetcode.com/problems/number-of-operations-to-make-network-connected/description/",videoLink:"https://youtu.be/RiW-WVWxO3k"}]}]},{title:"16. Dynamic Programming",totalProblems:28,subtopics:[{title:"16.1 Introduction to Dynamic Programming",problems:[{title:"Dynamic Programming Introduction",platform:"GeeksForGeeks",articleLink:"https://codeanddebug.in/blog/nth-fibonacci-number-introduction-to-dynamic-programming/",link:"https://www.geeksforgeeks.org/problems/nth-fibonacci-number1335/1",videoLink:"https://youtu.be/-CK7HfwqhLs"}]},{title:"16.2 DP on 1D",problems:[{title:"Climbing Stars",platform:"LeetCode",articleLink:"https://codeanddebug.in/blog/climbing-stairs-leetcode-70/",link:"https://leetcode.com/problems/climbing-stairs/description/",videoLink:"https://youtu.be/VB_Qj4VWYRg"},{title:"Frog Jump",platform:"GeeksForGeeks",articleLink:"https://codeanddebug.in/blog/frog-jump/",link:"https://www.geeksforgeeks.org/problems/geek-jump/1",videoLink:"https://youtu.be/oz15y1jeJRg"},{title:"Maximum sum of non-adjacent elements",platform:"LeetCode",articleLink:"https://codeanddebug.in/blog/house-robber/",link:"https://leetcode.com/problems/house-robber/description/",videoLink:"https://youtu.be/eyRPBmmUAc4"},{title:"House Robber 2",platform:"LeetCode",articleLink:"https://codeanddebug.in/blog/house-robber-ii/",link:"https://leetcode.com/problems/house-robber-ii/description/",videoLink:"https://youtu.be/9DXrm35Cvds"}]},{title:"16.3 DP on 2D/3D or Grids",problems:[{title:"Ninja's Training",platform:"GeeksForGeeks",articleLink:"https://codeanddebug.in/blog/geeks-training/",link:"https://www.geeksforgeeks.org/problems/geeks-training/1",videoLink:"https://youtu.be/pbIWcpuzvYs"},{title:"Grid Unique Paths : DP on Grids",platform:"LeetCode",articleLink:"https://codeanddebug.in/blog/unique-paths/",link:"https://leetcode.com/problems/unique-paths/description/",videoLink:"https://youtu.be/dZNV9dDvo4g"},{title:"Grid Unique Paths 2",platform:"LeetCode",articleLink:"https://codeanddebug.in/blog/unique-paths-ii/",link:"https://leetcode.com/problems/unique-paths-ii/description/",videoLink:"https://youtu.be/DBqyiEdYTLI"},{title:"Minimum path sum in Grid",platform:"LeetCode",articleLink:"https://codeanddebug.in/blog/minimum-path-sum/",link:"https://leetcode.com/problems/minimum-path-sum/description/",videoLink:"https://youtu.be/oLGfWUt2gFY"},{title:"Minimum path sum in Triangular Grid",platform:"LeetCode",articleLink:"https://codeanddebug.in/blog/triangle/",link:"https://leetcode.com/problems/triangle/description/",videoLink:"https://youtu.be/tmEbfHnj5QA"},{title:"Minimum/Maximum Falling Path Sum",platform:"LeetCode",articleLink:"https://codeanddebug.in/blog/minimum-falling-path-sum/",link:"https://leetcode.com/problems/minimum-falling-path-sum/description/",videoLink:"https://youtu.be/cB8jXLNCN9Y"},{title:"3-d DP : Ninja and his friends",platform:"LeetCode",articleLink:"https://codeanddebug.in/blog/cherry-pickup-ii/",link:"https://leetcode.com/problems/cherry-pickup-ii/description/",videoLink:"https://youtu.be/R2wbmFgbQMY"}]},{title:"16.4 DP on subsequences",problems:[{title:"Subset sum equal to target",platform:"GeeksForGeeks",articleLink:"https://codeanddebug.in/blog/subset-sum-problem/",link:"https://www.geeksforgeeks.org/problems/subset-sum-problem-1611555638/1",videoLink:"https://youtu.be/GDG84KrUfUQ"},{title:"Partition Equal Subset Sum",platform:"LeetCode",articleLink:"https://codeanddebug.in/blog/partition-equal-subset-sum/",link:"https://leetcode.com/problems/partition-equal-subset-sum/description/",videoLink:"https://youtu.be/s57L65SYkHc"},{title:"Partition Set Into 2 Subsets With Min Absolute Sum Diff",platform:"GeeksForGeeks",articleLink:"https://codeanddebug.in/blog/minimum-sum-partition/",link:"https://www.geeksforgeeks.org/problems/minimum-sum-partition3317/1",videoLink:"https://youtu.be/hc_PlkbISfM"},{title:"Count Subsets with Sum K",platform:"GeeksForGeeks",articleLink:"https://codeanddebug.in/blog/perfect-sum-problem/",link:"https://www.geeksforgeeks.org/problems/perfect-sum-problem5633/1",videoLink:"https://youtu.be/-OdBMAZS4hY"},{title:"Count Partitions with Given Difference",platform:"GeeksForGeeks",articleLink:"https://codeanddebug.in/blog/partitions-with-given-difference/",link:"https://www.geeksforgeeks.org/problems/partitions-with-given-difference/1",videoLink:"https://youtu.be/4EaT73nr62w"},{title:"0/1 Knapsack",platform:"GeeksForGeeks",articleLink:"https://codeanddebug.in/blog/0-1-knapsack-problem/",link:"https://www.geeksforgeeks.org/problems/0-1-knapsack-problem0945/1",videoLink:"https://youtu.be/pqL1iTVUyes"}]},{title:"16.5 DP on Strings",problems:[{title:"Longest Common Subsequence",platform:"LeetCode",articleLink:"https://codeanddebug.in/blog/longest-common-subsequence/",link:"https://leetcode.com/problems/longest-common-subsequence/description/",videoLink:"https://youtu.be/GLlFa1Lo73c"},{title:"Print Longest Common Subsequence",platform:"GeeksForGeeks",articleLink:"https://codeanddebug.in/blog/print-the-longest-common-subsequence/",link:"https://www.geeksforgeeks.org/problems/print-all-lcs-sequences3413/1",videoLink:"https://youtu.be/Qv0ZXe2L90I"},{title:"Longest Common Substring",platform:"GeeksForGeeks",articleLink:"https://codeanddebug.in/blog/longest-common-substring/",link:"https://www.geeksforgeeks.org/problems/longest-common-substring1452/1",videoLink:"https://youtu.be/dsARpzWOtxs"},{title:"Longest Palindromic Subsequence",platform:"LeetCode",articleLink:"https://codeanddebug.in/blog/longest-palindromic-subsequence/",link:"https://leetcode.com/problems/longest-palindromic-subsequence/description/",videoLink:"https://youtu.be/RXsA5vYlPX8"},{title:"Minimum insertions to make string palindrome",platform:"LeetCode",articleLink:"https://codeanddebug.in/blog/minimum-insertion-steps-to-make-a-string-palindrome/",link:"https://leetcode.com/problems/minimum-insertion-steps-to-make-a-string-palindrome/description/",videoLink:"https://youtu.be/790o950eDMI"},{title:"Minimum Insertions/Deletions to Convert String",platform:"LeetCode",articleLink:"https://codeanddebug.in/blog/delete-operation-for-two-strings/",link:"https://leetcode.com/problems/delete-operation-for-two-strings/description/",videoLink:"https://youtu.be/ZHUE1OR2ek8"}]},{title:"16.6 DP on Stocks",problems:[{title:"Best Time to Buy and Sell Stock",platform:"LeetCode",articleLink:null,link:"https://leetcode.com/problems/best-time-to-buy-and-sell-stock/description/",videoLink:"https://youtu.be/1pkOkXDSwVY"},{title:"Buy and Sell Stock - II",platform:"LeetCode",articleLink:"https://codeanddebug.in/blog/best-time-to-buy-and-sell-stock-ii/",link:"https://leetcode.com/problems/best-time-to-buy-and-sell-stock-ii/description/",videoLink:"https://youtu.be/QE6tM6NXMRw"},{title:"Buy and Sell Stocks III",platform:"LeetCode",articleLink:"https://codeanddebug.in/blog/best-time-to-buy-and-sell-stock-iii/",link:"https://leetcode.com/problems/best-time-to-buy-and-sell-stock-iii/description/",videoLink:"https://youtu.be/nKhfbZOz1aQ"},{title:"Buy and Stock Sell IV",platform:"LeetCode",articleLink:"https://codeanddebug.in/blog/best-time-to-buy-and-sell-stock-iv/",link:"https://leetcode.com/problems/best-time-to-buy-and-sell-stock-iv/description/",videoLink:"https://youtu.be/JBShufRNGzw"}]}]},{title:"17. Tries",totalProblems:4,subtopics:[{title:"17.1 Introduction and Problems",problems:[{title:"Implement TRIE | INSERT | SEARCH | STARTSWITH",platform:"LeetCode",articleLink:"https://codeanddebug.in/blog/implement-trie-prefix-tree/",link:"https://leetcode.com/problems/implement-trie-prefix-tree/description/",videoLink:"https://youtu.be/qKFGIJLE3mA"},{title:"Implement Trie - 2 (Prefix Tree)",platform:"Naukri",articleLink:"https://codeanddebug.in/blog/implement-trie-ll/",link:"https://www.naukri.com/code360/problems/implement-trie_1387095",videoLink:"https://youtu.be/9gDAwZzJnZ4"},{title:"Longest String with All Prefixes",platform:"Naukri",articleLink:"https://codeanddebug.in/blog/complete-string/",link:"https://www.naukri.com/code360/problems/complete-string_2687860",videoLink:"https://youtu.be/nTzyGe6s0SU"},{title:"Number of Distinct Substrings in a String",platform:"Naukri",articleLink:"https://codeanddebug.in/blog/count-distinct-substrings/",link:"https://www.naukri.com/code360/problems/count-distinct-substrings_985292",videoLink:"https://youtu.be/f9PKrK0pqOo"}]}]}],ko=[{title:"Select",description:`The **SELECT** statement is the foundation of SQL. It is used to select data from a database. The data returned is stored in a result table, called the result-set.

**Key Concepts:**
- **SELECT *:** Selects all columns from a table.
- **SELECT column1, column2:** Selects specific columns.
- **WHERE:** Filters records that fulfill a specified condition.
- **DISTINCT:** Returns only distinct (different) values.
- **AND, OR, NOT:** Operators to combined conditions in a WHERE clause.`,totalProblems:5,subtopics:[{title:"Basic Select",problems:[{title:"1757. Recyclable and Low Fat Products",platform:"LeetCode",link:"https://leetcode.com/problems/recyclable-and-low-fat-products/",companies:["Facebook","Amazon"],tips:"Filter using **WHERE** clause with two conditions joined by **AND**. Check for 'Y' in both typical columns."},{title:"584. Find Customer Referee",platform:"LeetCode",link:"https://leetcode.com/problems/find-customer-referee/",companies:["Amazon","Google"],tips:"Remember that `!= 2` will filtering out NULLs? You need to explicitly handle NULLs using `OR referee_id IS NULL`."},{title:"595. Big Countries",platform:"LeetCode",link:"https://leetcode.com/problems/big-countries/",companies:["Facebook","Bloomberg"],tips:"Use **OR** to combine the two conditions (area threshold or population threshold)."},{title:"1148. Article Views I",platform:"LeetCode",link:"https://leetcode.com/problems/article-views-i/",companies:["LinkedIn","Amazon"],tips:"Select distinctive author_ids where `author_id` equals `viewer_id`. Don't forget to **ORDER BY** id if required."},{title:"1683. Invalid Tweets",platform:"LeetCode",link:"https://leetcode.com/problems/invalid-tweets/",companies:["Twitter","Amazon"],tips:"Use `LENGTH(content)` or `CHAR_LENGTH(content)` to check if strict length exceeds 15."}]}]},{title:"Basic Joins",description:`A **JOIN** clause is used to combine rows from two or more tables, based on a related column between them.

**Types of Joins:**
- **(INNER) JOIN:** Returns records that have matching values in both tables.
- **LEFT (OUTER) JOIN:** Returns all records from the left table, and the matched records from the right table.
- **RIGHT (OUTER) JOIN:** Returns all records from the right table, and the matched records from the left table.
- **FULL (OUTER) JOIN:** Returns all records when there is a match in either left or right table.
- **CROSS JOIN:** Returns the Cartesian product of the set of records from the two or more joined tables.

**Date & Time Functions (Commonly used with Joins):**
- **DATEDIFF(date1, date2):** Returns the number of days between two dates.
  - *Example:* \`DATEDIFF('2023-01-02', '2023-01-01')\` returns \`1\`.
- **TIMESTAMPDIFF(unit, datetime1, datetime2):** Returns the difference between two date/time expressions.
- **CURRENT_DATE() / CURDATE():** Returns the current date.
- **NOW():** Returns current date and time. It is useful for time-sensitive queries.

**Pro Tips for this Section:**
- **Self Joins:** Useful for comparing rows within the same table (e.g., finding yesterday's temperature vs today's).
- **Handling NULLs:** When using \`LEFT JOIN\`, rows with no match will have \`NULL\`. Use \`IS NULL\` to find non-matches.`,totalProblems:9,subtopics:[{title:"Joins",problems:[{title:"1378. Replace Employee ID With The Unique Identifier",platform:"LeetCode",link:"https://leetcode.com/problems/replace-employee-id-with-the-unique-identifier",companies:["Amazon","Uber"],tips:"Use **LEFT JOIN** starting starting from Employees table to ensuring all employees are listed even if they don't have a unique ID."},{title:"1068. Product Sales Analysis I",platform:"LeetCode",link:"https://leetcode.com/problems/product-sales-analysis-i/",companies:["Amazon","Adobe"],tips:"Join Sales and Product tables on `product_id`. Select product_name, year, and price."},{title:"1581. Customer Who Visited but Did Not Make Any Transactions",platform:"LeetCode",link:"https://leetcode.com/problems/customer-who-visited-but-did-not-make-any-transactions/",companies:["Amazon","Google"],tips:"Use **LEFT JOIN** Visits with Transactions. Filter where `transaction_id IS NULL`. Then COUNT(*) and GROUP BY customer_id."},{title:"197. Rising Temperature",platform:"LeetCode",link:"https://leetcode.com/problems/rising-temperature/",companies:["Adobe","Google"],tips:"Perform a **Self Join**. Join the table with itself on `DATEDIFF(w1.recordDate, w2.recordDate) = 1` AND `w1.temperature > w2.temperature`."},{title:"1661. Average Time of Process per Machine",platform:"LeetCode",link:"https://leetcode.com/problems/average-time-of-process-per-machine/",companies:["Facebook","Amazon"],tips:"Self join the table. Match machine_id and process_id, where one is 'start' and other is 'end'. Calculate AVG(end - start) grouping by machine_id."},{title:"577. Employee Bonus",platform:"LeetCode",link:"https://leetcode.com/problems/employee-bonus/",companies:["Amazon","Microsoft"],tips:"Use **LEFT JOIN** Employee with Bonus. Filter where `bonus < 1000` **OR** `bonus IS NULL`."},{title:"1280. Students and Examinations",platform:"LeetCode",link:"https://leetcode.com/problems/students-and-examinations/",companies:["Amazon","Uber"],tips:"**CROSS JOIN** Students and Subjects to get all possible combinations. Then **LEFT JOIN** with Examinations. Group by student and subject, counting exams."},{title:"570. Managers with at Least 5 Direct Reports",platform:"LeetCode",link:"https://leetcode.com/problems/managers-with-at-least-5-direct-reports",companies:["Bloomberg","Amazon"],tips:"Join Employee table with itself or use a subquery to count reports. Filter where `count >= 5`."},{title:"1934. Confirmation Rate",platform:"LeetCode",link:"https://leetcode.com/problems/confirmation-rate/",companies:["Amazon","Facebook"],tips:"Use **LEFT JOIN** Signups with Confirmations. Calculate rate using `AVG(IF(action='confirmed', 1, 0))`. Default to 0 using IFNULL if needed, though AVG usually handles it or round it."}]}]},{title:"Basic Aggregate Functions",description:`Aggregate functions perform a calculation on a set of values and return a single value.

**Common Functions:**
- **COUNT():** Returns the number of rows.
- **SUM():** Returns the total sum of a numeric column.
- **AVG():** Returns the average value of a numeric column.
- **MIN():** Returns the smallest value of the selected column.
- **MAX():** Returns the largest value of the selected column.

These are often used with the **GROUP BY** statement.`,totalProblems:7,subtopics:[{title:"Aggregations",problems:[{title:"620. Not Boring Movies",platform:"LeetCode",link:"https://leetcode.com/problems/not-boring-movies",companies:["Amazon","Netflix"],tips:"Filter where `id % 2 = 1` (odd) AND description != 'boring'. Order by rating descending."},{title:"1251. Average Selling Price",platform:"LeetCode",link:"https://leetcode.com/problems/average-selling-price/",companies:["Amazon","Adobe"],tips:"Join Prices and UnitsSold on product_id AND date range (`purchase_date BETWEEN start_date AND end_date`). Use `SUM(price*units) / SUM(units)`. Handle null with IFNULL."},{title:"1075. Project Employees I",platform:"LeetCode",link:"https://leetcode.com/problems/project-employees-i",companies:["Facebook","Amazon"],tips:"Join Project and Employee. Group by `project_id`. Calculate `AVG(experience_years)` rounded to 2 decimals."},{title:"1633. Percentage of Users Attended a Contest",platform:"LeetCode",link:"https://leetcode.com/problems/percentage-of-users-attended-a-contest",companies:["Facebook","Amazon"],tips:"Count users per contest in Register table. Divide by total count of users from Users table (scalar subquery). Multiply by 100 and Round."},{title:"1211. Queries Quality and Percentage",platform:"LeetCode",link:"https://leetcode.com/problems/queries-quality-and-percentage",companies:["Google","Facebook"],tips:"Group by query_name. Quality: `AVG(rating/position)`. Poor query percentage: `AVG(IF(rating < 3, 1, 0)) * 100`."},{title:"1193. Monthly Transactions I",platform:"LeetCode",link:"https://leetcode.com/problems/monthly-transactions-i/",companies:["Alibaba","Amazon"],tips:"Format date to YYYY-MM (`DATE_FORMAT`). Group by month and country. Calculate counts and sums for all vs 'approved' (`SUM(IF(state='approved', amount, 0))`)."},{title:"1174. Immediate Food Delivery II",platform:"LeetCode",link:"https://leetcode.com/problems/immediate-food-delivery-ii/",companies:["DoorDash","Uber"],tips:"Filter for first orders: compare `order_date` with `MIN(order_date)` for each customer. Then calc % of immediate orders."},{title:"550. Game Play Analysis IV",platform:"LeetCode",link:"https://leetcode.com/problems/game-play-analysis-iv/",companies:["GSN Games","Amazon"],tips:"Identify first login date for each player. Look for a login exactly 1 day after the first login. Count distinct players meeting criteria / total players."}]}]},{title:"Sorting and Grouping",description:`Organizing your data is crucial for analysis.

**GROUP BY:**
Groups rows that have the same values into summary rows, e.g., 'find the number of customers in each country'.

**HAVING:**
The **HAVING** clause was added to SQL because the **WHERE** keyword could not be used with aggregate functions. It filters groups.

**ORDER BY:**
Used to sort the result-set in ascending or descending order.`,totalProblems:6,subtopics:[{title:"Group By & Order By",problems:[{title:"2356. Number of Unique Subjects Taught by Each Teacher",platform:"LeetCode",link:"https://leetcode.com/problems/number-of-unique-subjects-taught-by-each-teacher",companies:["Amazon","Google"],tips:"Group by `teacher_id`. Count distinct subjects: `COUNT(DISTINCT subject_id)`."},{title:"1141. User Activity for the Past 30 Days I",platform:"LeetCode",link:"https://leetcode.com/problems/user-activity-for-the-past-30-days-i/",companies:["Facebook","Zoom"],tips:"Filter `activity_date` within the 30-day window ending 2019-07-27. Group by date. Count distinct `user_id`."},{title:"1070. Product Sales Analysis III",platform:"LeetCode",link:"https://leetcode.com/problems/product-sales-analysis-iii/",companies:["Amazon","Adobe"],tips:"Find `(product_id, MIN(year))` for first year. Join back to Sales or use tuple filtering `WHERE (product_id, year) IN ...`."},{title:"596. Classes More Than 5 Students",platform:"LeetCode",link:"https://leetcode.com/problems/classes-more-than-5-students/",companies:["Amazon","Coursera"],tips:"Group by `class`. Filter using **HAVING** `COUNT(student) >= 5`."},{title:"1729. Find Followers Count",platform:"LeetCode",link:"https://leetcode.com/problems/find-followers-count/",companies:["Facebook","Amazon"],tips:"Group by `user_id`. Simple `COUNT(follower_id)`. Order by `user_id`."},{title:"619. Biggest Single Number",platform:"LeetCode",link:"https://leetcode.com/problems/biggest-single-number/",companies:["Amazon","Google"],tips:"Find numbers appearing once (`GROUP BY num HAVING COUNT(*)=1`). Select `MAX(num)` from a subquery of these numbers."},{title:"1045. Customers Who Bought All Products",platform:"LeetCode",link:"https://leetcode.com/problems/customers-who-bought-all-products/",companies:["Amazon","Google"],tips:"Group by `customer_id`. **HAVING** `COUNT(DISTINCT product_key)` equals the count of all products in Product table."}]}]},{title:"Advanced Select and Joins",description:`Advanced querying involves more complex relationships.

**Self Join:**
A regular join, but the table is joined with itself. Useful for hierarchical data (e.g., Employees and Managers in the same table).

**Complex Conditions:**
Using **CASE WHEN** logic inside SELECT or WHERE clauses to create conditional columns or filters based on dynamic criteria.`,totalProblems:5,subtopics:[{title:"Adv. Operations",problems:[{title:"1731. The Number of Employees Which Report to Each Employee",platform:"LeetCode",link:"https://leetcode.com/problems/the-number-of-employees-which-report-to-each-employee/",companies:["Amazon","Google"],tips:"Self Join Employees E1 (managers) with E2 (reports) on `E1.employee_id = E2.reports_to`. Group by E1.id."},{title:"1789. Primary Department for Each Employee",platform:"LeetCode",link:"https://leetcode.com/problems/primary-department-for-each-employee/",companies:["Amazon","Facebook"],tips:"Use **UNION**. 1) Select where `primary_flag='Y'`. 2) Select where employee count is 1 (employees with only one dept)."},{title:"610. Triangle Judgement",platform:"LeetCode",link:"https://leetcode.com/problems/triangle-judgement/",companies:["Amazon","Facebook"],tips:"Use **CASE WHEN** (x+y>z AND x+z>y AND y+z>x) THEN 'Yes' ELSE 'No'."},{title:"180. Consecutive Numbers",platform:"LeetCode",link:"https://leetcode.com/problems/consecutive-numbers/",companies:["Amazon","Facebook"],tips:"Self join 3 instances of Logs l1, l2, l3. `l1.id = l2.id-1` AND `l2.id = l3.id-1` AND `l1.num = l2.num = l3.num`."},{title:"1164. Product Price at a Given Date",platform:"LeetCode",link:"https://leetcode.com/problems/product-price-at-a-given-date",companies:["Amazon","Uber"],tips:"Two parts: 1) Find last price before/on date (2019-08-16) using `MAX(change_date)`. 2) Find products with NO price change before date and default to 10."}]}]},{title:"Subqueries",description:`A **Subquery** is a query nested inside another query.

**Types:**
- **Scalar Subquery:** Returns a single value.
- **Row Subquery:** Returns a single row.
- **Table Subquery:** Returns a table.

**Common Uses:**
- In the **WHERE** clause (e.g., \`WHERE salary > (SELECT AVG(salary)...)\`)
- In the **FROM** clause (Derived Tables)
- **CTEs (Common Table Expressions):** Using **WITH** clause to create temporary named result sets for readability.`,totalProblems:5,subtopics:[{title:"Nested Queries",problems:[{title:"1978. Employees Whose Manager Left the Company",platform:"LeetCode",link:"https://leetcode.com/problems/employees-whose-manager-left-the-company",companies:["Amazon","Google"],tips:"Filter `salary < 30000`. Use `manager_id NOT IN (SELECT employee_id FROM Employees)` to find missing managers."},{title:"626. Exchange Seats",platform:"LeetCode",link:"https://leetcode.com/problems/exchange-seats/",companies:["Amazon","Bloomberg"],tips:"Use **CASE WHEN**. If id is odd and not last, `id+1`. If id is even, `id-1`. Else keep id (last odd)."},{title:"1341. Movie Rating",platform:"LeetCode",link:"https://leetcode.com/problems/movie-rating/",companies:["Netflix","Amazon"],tips:"Use **UNION ALL**. Query 1: Find user with most ratings (Order by count desc, name asc, Limit 1). Query 2: Find movie with highest Feb avg rating."},{title:"1321. Restaurant Growth",platform:"LeetCode",link:"https://leetcode.com/problems/restaurant-growth/",companies:["Yelp","Amazon"],tips:"Self join or window functions. Sum amount for `visited_on` between `date - 6` and `date`. Filter results having full 7-day window."},{title:"602. Friend Requests II: Who Has the Most Friends",platform:"LeetCode",link:"https://leetcode.com/problems/friend-requests-ii-who-has-the-most-friends",companies:["Facebook","Amazon"],tips:"Union `requester_id` and `accepter_id` into one list of `id`. Count occurrence of each `id`. Order by count desc, Limit 1."},{title:"585. Investments in 2016",platform:"LeetCode",link:"https://leetcode.com/problems/investments-in-2016",companies:["Amazon","Twitter"],tips:"Two conditions: 1) `TIV_2015` in list of duplicates. 2) `(LAT, LON)` NOT in list of duplicates (unique location)."},{title:"185. Department Top Three Salaries",platform:"LeetCode",link:"https://leetcode.com/problems/department-top-three-salaries",companies:["Amazon","Microsoft"],tips:"Use `DENSE_RANK() OVER (PARTITION BY DepartmentId ORDER BY Salary DESC)` in a subquery/CTE. Select where rank <= 3."}]}]},{title:"Advanced String Functions / Regex / Clause",description:`String manipulation and pattern matching are vital for cleaning and analyzing text data.

**Functions:**
- **CONCAT():** Adds two or more strings together.
- **UPPER() / LOWER():** Converts string case.
- **SUBSTRING() / LEFT() / RIGHT():** Extracts parts of a string.

**Pattern Matching:**
- **LIKE:** Simple pattern matching using \`%\` (wildcard) and \`_\` (single char).
- **REGEXP:** Use Regular Expressions for complex pattern matching.`,totalProblems:9,subtopics:[{title:"String functions",problems:[{title:"1667. Fix Names in a Table",platform:"LeetCode",link:"https://leetcode.com/problems/fix-names-in-a-table",companies:["Amazon","Google"],tips:"`CONCAT(UPPER(LEFT(name, 1)), LOWER(SUBSTRING(name, 2)))`."},{title:"1527. Patients With a Condition",platform:"LeetCode",link:"https://leetcode.com/problems/patients-with-a-condition",companies:["Adyen","Google"],tips:"Use **LIKE**. `conditions LIKE 'DIAB1%' OR conditions LIKE '% DIAB1%'` (start of string or specific code)."},{title:"196. Delete Duplicate Emails",platform:"LeetCode",link:"https://leetcode.com/problems/delete-duplicate-emails",companies:["Amazon","Google"],tips:"Delete from Person p1 where exists p2 with `p1.email = p2.email` AND `p1.id > p2.id`."},{title:"176. Second Highest Salary",platform:"LeetCode",link:"https://leetcode.com/problems/second-highest-salary",companies:["Amazon","Microsoft"],tips:"Take the MAX of salaries where salary < (SELECT MAX(salary)...). Or `LIMIT 1 OFFSET 1` (careful with null handling)."},{title:"1484. Group Sold Products By The Date",platform:"LeetCode",link:"https://leetcode.com/problems/group-sold-products-by-the-date/",companies:["Amazon","Adobe"],tips:"Group by `sell_date`. `COUNT(DISTINCT product)`. Use `GROUP_CONCAT(DISTINCT product ORDER BY product)` for the list."},{title:"1327. List the Products Ordered in a Period",platform:"LeetCode",link:"https://leetcode.com/problems/list-the-products-ordered-in-a-period/",companies:["Amazon","Etsy"],tips:"Filter orders in '2020-02'. Group by product. Sum(unit) >= 100."},{title:"1517. Find Users With Valid E-Mails",platform:"LeetCode",link:"https://leetcode.com/problems/find-users-with-valid-e-mails",companies:["Amazon","Facebook"],tips:"Use **REGEXP**. Pattern: `^[a-zA-Z][a-zA-Z0-9_.-]*@leetcode\\.com$`."}]}]}],So=()=>{const t=Le(),[s,i]=m.useState("striver"),[o,n]=m.useState(null),[r,l]=m.useState({}),[b,c]=m.useState({}),[u,S]=m.useState({}),[f,y]=m.useState({}),[v,C]=m.useState({}),[O,d]=m.useState({}),[k,p]=m.useState(""),[a,h]=m.useState({});m.useEffect(()=>{const D=localStorage.getItem("striverSheetProgress"),x=localStorage.getItem("blind75Progress"),j=localStorage.getItem("sdeSheetProgress"),A=localStorage.getItem("dsaSheetProgress"),L=localStorage.getItem("masterDsaSheetProgress"),F=localStorage.getItem("sql50SheetProgress");D&&l(JSON.parse(D)),x&&c(JSON.parse(x)),j&&S(JSON.parse(j)),A&&y(JSON.parse(A)),L&&C(JSON.parse(L)),F&&d(JSON.parse(F)),t.state&&t.state.activeTab&&i(t.state.activeTab)},[t]);let w,T;s==="striver"?(w=go,T=r):s==="blind75"?(w=fo,T=b):s==="sde"?(w=bo,T=u):s==="dsa"?(w=yo,T=f):s==="masterdsa"?(w=vo,T=v):(w=ko,T=O);const I=D=>{const x={...T,[D]:!T[D]};s==="striver"?(l(x),localStorage.setItem("striverSheetProgress",JSON.stringify(x))):s==="blind75"?(c(x),localStorage.setItem("blind75Progress",JSON.stringify(x))):s==="sde"?(S(x),localStorage.setItem("sdeSheetProgress",JSON.stringify(x))):s==="dsa"?(y(x),localStorage.setItem("dsaSheetProgress",JSON.stringify(x))):s==="masterdsa"?(C(x),localStorage.setItem("masterDsaSheetProgress",JSON.stringify(x))):(d(x),localStorage.setItem("sql50SheetProgress",JSON.stringify(x)))},kt=D=>{h(x=>({...x,[D]:!x[D]}))},St=D=>{n(o===D?null:D)},Oe=()=>{let D=0,x=0;return w.forEach(j=>{j.subtopics.forEach(A=>{A.problems.forEach(L=>{D++,T[L.title]&&x++})})}),D===0?0:Math.round(x/D*100)},wt=D=>`https://www.google.com/search?q=${encodeURIComponent(`${D.title} ${D.platform}`)}`,Ie=w.map(D=>{const x=D.title.toLowerCase().includes(k.toLowerCase()),j=D.subtopics.map(A=>{const L=A.title.toLowerCase().includes(k.toLowerCase()),F=A.problems.filter(de=>de.title.toLowerCase().includes(k.toLowerCase()));return L||F.length>0?{...A,problems:L?A.problems:F}:null}).filter(Boolean);return x||j.length>0?{...D,subtopics:x?D.subtopics:j}:null}).filter(Boolean);return e.jsxs("div",{className:"practice-sheet-container",children:[e.jsxs("div",{className:"practice-hero",children:[e.jsxs("div",{className:"hero-content",children:[e.jsx("h1",{children:"Practice Sheets"}),e.jsx("p",{children:"Master Data Structures and Algorithms with curated problem sets."}),e.jsxs("div",{className:"controls-wrapper",children:[e.jsxs("div",{className:"sheet-tabs",children:[e.jsx("button",{className:`sheet-tab ${s==="striver"?"active":""}`,onClick:()=>{i("striver"),n(null)},children:"Striver's A2Z"}),e.jsx("button",{className:`sheet-tab ${s==="blind75"?"active":""}`,onClick:()=>{i("blind75"),n(null)},children:"Blind 75"}),e.jsx("button",{className:`sheet-tab ${s==="sde"?"active":""}`,onClick:()=>{i("sde"),n(null)},children:"Striver's SDE"}),e.jsx("button",{className:`sheet-tab ${s==="dsa"?"active":""}`,onClick:()=>{i("dsa"),n(null)},children:"Placement DSA"}),e.jsx("button",{className:`sheet-tab ${s==="masterdsa"?"active":""}`,onClick:()=>{i("masterdsa"),n(null)},children:"Master DSA"}),e.jsx("button",{className:`sheet-tab ${s==="sql50"?"active":""}`,onClick:()=>{i("sql50"),n(null)},children:"Top 50 SQL"})]}),e.jsxs("div",{className:"search-bar-wrapper",children:[e.jsx(B,{className:"search-icon",size:20}),e.jsx("input",{type:"text",className:"search-input",placeholder:"Search topics or problems...",value:k,onChange:D=>p(D.target.value)})]})]})]}),e.jsxs("div",{className:"progress-card",children:[e.jsxs("div",{className:"progress-header",children:[e.jsxs("span",{className:"progress-label",children:[s==="striver"?"Striver's A2Z":s==="blind75"?"Blind 75":s==="sde"?"Striver's SDE":s==="dsa"?"Placement DSA":s==="masterdsa"?"Master DSA":"Top SQL 50"," Progress"]}),e.jsxs("span",{className:"progress-percentage",children:[Oe(),"%"]})]}),e.jsx("div",{className:"progress-track",children:e.jsx("div",{className:"progress-fill",style:{width:`${Oe()}%`}})}),e.jsxs("div",{className:"progress-stats",children:[e.jsx(sn,{size:16,className:"text-yellow-500"}),e.jsx("span",{children:"Keep pushing! You're doing great."})]})]})]}),e.jsx("div",{className:"topics-list",children:Ie.length>0?Ie.map((D,x)=>e.jsxs("div",{className:`topic-card ${o===x?"expanded":""}`,children:[e.jsxs("div",{className:"topic-header",onClick:()=>St(x),children:[e.jsxs("div",{className:"topic-info",children:[e.jsx("div",{className:"topic-index",children:x+1}),e.jsxs("div",{className:"topic-title-wrapper",children:[e.jsx("h3",{children:D.title}),D.description&&e.jsxs("span",{className:"notes-badge",children:[e.jsx(N,{size:12,style:{marginRight:"4px"}}),"Notes"]})]})]}),e.jsxs("div",{className:"topic-actions",children:[e.jsxs("span",{className:"problem-badge",children:[D.totalProblems," Problems"]}),o===x?e.jsx(Ce,{size:20}):e.jsx(ae,{size:20})]})]}),o===x&&e.jsxs("div",{className:"topic-body",children:[D.description&&e.jsx("div",{className:"topic-notes",children:e.jsx(V,{children:D.description})}),D.subtopics.map((j,A)=>e.jsxs("div",{className:"subtopic-group",children:[e.jsx("h4",{className:"subtopic-title",children:j.title}),e.jsx("div",{className:"problems-grid",children:j.problems.map((L,F)=>e.jsxs("div",{className:`problem-item ${T[L.title]?"is-completed":""}`,children:[e.jsx("div",{className:"checkbox-area",onClick:()=>I(L.title),children:T[L.title]?e.jsx(E,{size:22,className:"check-icon completed"}):e.jsx(vt,{size:22,className:"check-icon"})}),e.jsxs("div",{className:"problem-content",children:[e.jsxs("div",{className:"problem-main",children:[e.jsx("span",{className:"problem-name",children:L.title}),e.jsx("span",{className:`platform-badge ${L.platform.toLowerCase().replace(/\s/g,"-")}`,children:L.platform}),L.companies&&L.companies.length>0&&e.jsxs("div",{className:"company-tags",children:[L.companies.slice(0,3).map((de,Tt)=>e.jsx("span",{className:"company-badge",children:de},Tt)),L.companies.length>3&&e.jsxs("span",{className:"company-badge more",children:["+",L.companies.length-3]})]})]}),e.jsxs("div",{className:"problem-actions",children:[L.link&&L.link!=="#"?e.jsxs("a",{href:L.link,target:"_blank",rel:"noopener noreferrer",className:"action-btn solve-btn",children:[e.jsx(se,{size:14}),"Solve"]}):L.articleLink?e.jsxs("a",{href:L.articleLink,target:"_blank",rel:"noopener noreferrer",className:"action-btn notes-btn",children:[e.jsx(N,{size:14}),"Read"]}):e.jsxs("a",{href:wt(L),target:"_blank",rel:"noopener noreferrer",className:"action-btn search-btn",children:[e.jsx(B,{size:14}),"Find"]}),L.videoLink&&e.jsxs("a",{href:L.videoLink,target:"_blank",rel:"noopener noreferrer",className:"action-btn video-btn",style:{marginLeft:"8px",color:"#ff0000",borderColor:"#ff000030",backgroundColor:"#ff000010"},children:[e.jsx(De,{size:14}),"Watch"]}),L.tips&&e.jsxs("button",{className:`action-btn tip-btn ${a[L.title]?"active":""}`,onClick:()=>kt(L.title),title:"Show Hint/Tip",children:[e.jsx(je,{size:14}),a[L.title]?"Hide":"Tip"]})]})]}),L.tips&&a[L.title]&&e.jsxs("div",{className:"problem-tip-container",children:[e.jsxs("div",{className:"tip-header",children:[e.jsx(je,{size:16,className:"tip-icon-header"}),e.jsx("span",{children:"Hint & Approach:"})]}),e.jsx("div",{className:"tip-content",children:e.jsx(V,{children:L.tips})})]})]},F))})]},A))]})]},x)):e.jsxs("div",{className:"no-results",children:[e.jsx(B,{size:48,className:"text-gray-400 mb-4"}),e.jsx("h3",{children:"No topics found"}),e.jsx("p",{children:"Try searching for a different term matching a topic or problem."})]})})]})},et="AIzaSyCKQqphnN69J5ynG6C9mlCd62uWS4Jh6Xk",tt="https://www.googleapis.com/youtube/v3";async function wo(t,s=20){var i;if(!t||t.trim()==="")throw new Error("Search query cannot be empty");try{const o=new URLSearchParams({part:"snippet",q:t,type:"video",maxResults:s,order:"relevance",key:et,videoEmbeddable:"true",safeSearch:"moderate"}),n=await fetch(`${tt}/search?${o.toString()}`);if(!n.ok){const f=await n.json();throw new Error(((i=f.error)==null?void 0:i.message)||"Failed to fetch videos from YouTube")}const r=await n.json();if(!r.items||r.items.length===0)return[];const l=r.items.map(f=>f.id.videoId).join(","),b=new URLSearchParams({part:"statistics,contentDetails",id:l,key:et}),c=await fetch(`${tt}/videos?${b.toString()}`),u=c.ok?await c.json():null;return r.items.map((f,y)=>{var O,d,k,p,a,h;const v=((d=(O=u==null?void 0:u.items)==null?void 0:O[y])==null?void 0:d.statistics)||{},C=((p=(k=u==null?void 0:u.items)==null?void 0:k[y])==null?void 0:p.contentDetails)||{};return{id:f.id.videoId,title:f.snippet.title,description:f.snippet.description,thumbnail:((a=f.snippet.thumbnails.high)==null?void 0:a.url)||((h=f.snippet.thumbnails.medium)==null?void 0:h.url),channelTitle:f.snippet.channelTitle,publishedAt:f.snippet.publishedAt,viewCount:v.viewCount||"0",likeCount:v.likeCount||"0",duration:C.duration||"N/A",url:`https://www.youtube.com/watch?v=${f.id.videoId}`}})}catch(o){throw console.error("YouTube API Error:",o),o}}function To(t){const s=parseInt(t,10);return isNaN(s)?"0 views":s>=1e6?`${(s/1e6).toFixed(1)}M views`:s>=1e3?`${(s/1e3).toFixed(1)}K views`:`${s} views`}function Lo(t){const s=new Date(t),o=new Date-s,n=Math.floor(o/(1e3*60*60*24));return n===0?"Today":n===1?"Yesterday":n<7?`${n} days ago`:n<30?`${Math.floor(n/7)} weeks ago`:n<365?`${Math.floor(n/30)} months ago`:`${Math.floor(n/365)} years ago`}function Do(t){if(!t||t==="N/A")return"N/A";const s=t.match(/PT(\d+H)?(\d+M)?(\d+S)?/);if(!s)return"N/A";const i=(s[1]||"").replace("H",""),o=(s[2]||"").replace("M",""),n=(s[3]||"").replace("S","");let r="";return i&&(r+=`${i}:`),o?r+=i?o.padStart(2,"0"):o:r+="0",r+=":",r+=n?n.padStart(2,"0"):"00",r}function xo(){const[t,s]=m.useState(""),[i,o]=m.useState([]),[n,r]=m.useState(!1),[l,b]=m.useState(null),[c,u]=m.useState(!1),S=async y=>{if(y.preventDefault(),!t.trim()){b("Please enter a skill or course name");return}r(!0),b(null),u(!0);try{const v=await wo(t,20);o(v),v.length===0&&b("No videos found. Try a different search term.")}catch(v){b(v.message||"Failed to fetch videos. Please try again."),o([])}finally{r(!1)}},f=y=>{window.open(y,"_blank","noopener,noreferrer")};return e.jsxs("div",{className:"video-feed-page",children:[e.jsx(ce,{}),e.jsxs("div",{className:"video-feed-container",children:[e.jsx("div",{className:"video-feed-header",children:e.jsxs("div",{className:"header-content",children:[e.jsx("div",{className:"header-icon",children:e.jsx(De,{size:32})}),e.jsxs("div",{className:"header-text",children:[e.jsx("h1",{children:"Video Learning Hub"}),e.jsx("p",{children:"Discover top educational videos for any skill or course"})]})]})}),e.jsx("div",{className:"search-section",children:e.jsxs("form",{onSubmit:S,className:"search-form",children:[e.jsxs("div",{className:"search-input-wrapper",children:[e.jsx(B,{className:"search-icon",size:20}),e.jsx("input",{type:"text",className:"search-input",placeholder:"Search for skills, courses, or topics (e.g., React Tutorial, Python Programming)",value:t,onChange:y=>s(y.target.value),disabled:n})]}),e.jsx("button",{type:"submit",className:"search-button",disabled:n,children:n?e.jsxs(e.Fragment,{children:[e.jsx(we,{className:"spinner",size:20}),"Searching..."]}):e.jsxs(e.Fragment,{children:[e.jsx(B,{size:20}),"Search"]})})]})}),l&&e.jsx("div",{className:"error-message",children:e.jsx("p",{children:l})}),n&&e.jsxs("div",{className:"loading-state",children:[e.jsx(we,{className:"spinner-large",size:48}),e.jsx("p",{children:"Finding the best videos for you..."})]}),!c&&!n&&e.jsxs("div",{className:"empty-state",children:[e.jsx("div",{className:"empty-icon",children:e.jsx(re,{size:64})}),e.jsx("h2",{children:"Start Your Learning Journey"}),e.jsx("p",{children:"Search for any skill or course to discover curated video tutorials"}),e.jsxs("div",{className:"suggested-searches",children:[e.jsx("p",{className:"suggested-label",children:"Popular searches:"}),e.jsx("div",{className:"suggested-tags",children:["React Tutorial","Python Programming","Machine Learning","Web Development","Data Structures"].map(y=>e.jsx("button",{className:"suggested-tag",onClick:()=>{s(y),setTimeout(()=>{const v=document.querySelector(".search-form");v==null||v.dispatchEvent(new Event("submit",{cancelable:!0,bubbles:!0}))},100)},children:y},y))})]})]}),!n&&i.length>0&&e.jsxs("div",{className:"video-results",children:[e.jsxs("div",{className:"results-header",children:[e.jsxs("h2",{children:["Top ",i.length," Results"]}),e.jsxs("p",{children:['for "',t,'"']})]}),e.jsx("div",{className:"videos-grid",children:i.map(y=>e.jsxs("div",{className:"video-card",onClick:()=>f(y.url),children:[e.jsxs("div",{className:"video-thumbnail",children:[e.jsx("img",{src:y.thumbnail,alt:y.title}),e.jsx("div",{className:"play-overlay",children:e.jsx(an,{size:48,fill:"white"})}),y.duration!=="N/A"&&e.jsx("div",{className:"video-duration",children:Do(y.duration)})]}),e.jsxs("div",{className:"video-info",children:[e.jsx("h3",{className:"video-title",children:y.title}),e.jsx("div",{className:"video-channel",children:e.jsx("span",{children:y.channelTitle})}),e.jsxs("div",{className:"video-meta",children:[e.jsx("span",{className:"video-views",children:To(y.viewCount)}),e.jsx("span",{className:"video-separator",children:"•"}),e.jsx("span",{className:"video-date",children:Lo(y.publishedAt)})]}),e.jsxs("div",{className:"video-action",children:[e.jsx(R,{size:16}),e.jsx("span",{children:"Watch on YouTube"})]})]})]},y.id))})]}),!n&&c&&i.length===0&&!l&&e.jsxs("div",{className:"no-results-state",children:[e.jsx("h2",{children:"No videos found"}),e.jsx("p",{children:"Try searching with different keywords"})]})]})]})}const Co=[{id:"frontend",title:"Frontend Developer",description:"Focus on React, CSS, JavaScript, and web performance.",questions:["Explain the difference between state and props in React.","What is the Virtual DOM and how does it improve performance?","Explain the concept of closures in JavaScript with an example.","What are the differences between CSS Grid and Flexbox?","How do you handle asynchronous operations in JavaScript?","What is the purpose of the useEffect hook?","Explain the Box Model in CSS.","What are Web Vitals and why do they matter?"]},{id:"backend",title:"Backend Developer",description:"Focus on Node.js, databases, API design, and server architecture.",questions:["Explain the difference between SQL and NoSQL databases.","What is RESTful API design? What are its key principles?","How does Node.js handle concurrency?","Explain the concept of middleware in Express.js.","What is database indexing and how does it help?","How do you secure a REST API?","What is the difference between horizontal and vertical scaling?","Explain the ACID properties in databases."]},{id:"fullstack",title:"Full Stack Developer",description:"Combined knowledge of frontend, backend, and deployment.",questions:["How do you manage state between frontend and backend?","What is CORS and how do you handle it?","Explain the concept of Microservices vs Monolithic architecture.","How would you optimize a slow-loading web application?","What is GraphQL and how does it differ from REST?","How do you handle authentication and authorization in a web app?","Explain the CI/CD pipeline.","What strategies do you use for database schema migrations?"]},{id:"devops",title:"DevOps Engineer",description:"Focus on CI/CD, cloud infrastructure, containerization, and monitoring.",questions:["What is Docker and how is it different from a Virtual Machine?","Explain the concept of Infrastructure as Code (IaC).","What is Kubernetes and what are its main components?","How do you ensure high availability in a distributed system?","What is the difference between Blue-Green and Canary deployment?","Explain the command 'git rebase' vs 'git merge'.","How do you monitor a production system?","What is the role of a reverse proxy?"]},{id:"datascientist",title:"Data Scientist",description:"Focus on statistics, machine learning, and data analysis.",questions:["What is the difference between Supervised and Unsupervised learning?","Explain the Bias-Variance tradeoff.","How do you handle missing data in a dataset?","What is feature engineering and why is it important?","Explain the concept of Overfitting and how to prevent it.","What is a Confusion Matrix?","Difference between L1 and L2 regularization.","Explain the Central Limit Theorem."]},{id:"productmanager",title:"Product Manager",description:"Focus on product lifecycle, user needs, and prioritization.",questions:["How do you prioritize features for a roadmap?","How do you handle a conflict between engineering and design teams?","How do you measure the success of a product?","Describe a time you had to say 'no' to a stakeholder.","What frameworks do you use for decision making?","How do you conduct user research?","What is an MVP and why is it important?","How do you handle a product launch failure?"]},{id:"uiux",title:"UI/UX Designer",description:"Focus on user experience, design principles, and prototyping.",questions:["What is the difference between UI and UX?","Explain the user-centered design process.","How do you conduct usability testing?","What is a design system and why is it useful?","How do you handle accessibility in your designs?","What tools do you use for wireframing and prototyping?","Explain the Gestalt principles of design.","How do you collaborate with developers?"]},{id:"mobile",title:"Mobile Developer",description:"Focus on iOS, Android, React Native, and mobile app development.",questions:["What are the differences between native and cross-platform development?","Explain the mobile app lifecycle.","How do you handle offline functionality in mobile apps?","What is the difference between AsyncStorage and SQLite?","How do you optimize mobile app performance?","Explain push notifications and how they work.","What are the key differences between iOS and Android development?","How do you handle different screen sizes and orientations?"]},{id:"qa",title:"QA Engineer",description:"Focus on testing strategies, automation, and quality assurance.",questions:["What is the difference between unit testing and integration testing?","Explain the testing pyramid.","How do you write effective test cases?","What is regression testing and when do you use it?","Explain the difference between black-box and white-box testing.","What tools do you use for test automation?","How do you test APIs?","What is continuous testing in CI/CD?"]},{id:"security",title:"Security Engineer",description:"Focus on cybersecurity, threat detection, and secure coding practices.",questions:["What is the OWASP Top 10?","Explain SQL injection and how to prevent it.","What is Cross-Site Scripting (XSS)?","How does HTTPS work?","What is the principle of least privilege?","Explain the difference between encryption and hashing.","What is a DDoS attack and how do you mitigate it?","How do you implement secure authentication?"]},{id:"cloudarchitect",title:"Cloud Architect",description:"Focus on AWS, Azure, GCP, and cloud infrastructure design.",questions:["What are the main differences between IaaS, PaaS, and SaaS?","Explain the concept of auto-scaling in cloud environments.","How do you design a highly available cloud architecture?","What is serverless computing and when would you use it?","Explain the shared responsibility model in cloud security.","What is a CDN and how does it improve performance?","How do you manage costs in cloud infrastructure?","What is multi-region deployment and why is it important?"]},{id:"mlengineer",title:"ML Engineer",description:"Focus on machine learning deployment, MLOps, and model optimization.",questions:["What is the difference between a Data Scientist and ML Engineer?","How do you deploy a machine learning model to production?","Explain model versioning and why it's important.","What is A/B testing for ML models?","How do you monitor model performance in production?","What is model drift and how do you detect it?","Explain the concept of feature stores.","How do you optimize model inference time?"]},{id:"businessanalyst",title:"Business Analyst",description:"Focus on requirements gathering, data analysis, and stakeholder management.",questions:["How do you gather requirements from stakeholders?","What is the difference between functional and non-functional requirements?","Explain how you would create a business case.","What tools do you use for data visualization?","How do you handle conflicting requirements?","What is gap analysis?","How do you measure ROI for a project?","Explain the Agile methodology from a BA perspective."]},{id:"technicalwriter",title:"Technical Writer",description:"Focus on documentation, API docs, and technical communication.",questions:["How do you approach documenting a new API?","What makes good technical documentation?","How do you handle documentation for different audiences?","What tools do you use for creating documentation?","How do you keep documentation up to date?","Explain the difference between user guides and developer docs.","How do you document complex technical concepts simply?","What is your process for reviewing and editing technical content?"]},{id:"sysadmin",title:"System Administrator",description:"Focus on server management, networking, and system maintenance.",questions:["How do you troubleshoot a server that's running slow?","Explain the difference between TCP and UDP.","What is DNS and how does it work?","How do you secure a Linux server?","What is load balancing and why is it important?","Explain the concept of RAID.","How do you perform system backups and disaster recovery?","What monitoring tools do you use for servers?"]}],Oo=async(t,s,i,o="Intermediate")=>{try{const n=await fetch("/api/interview/analyze",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({question:t,answer:s,category:i,difficulty:o})});if(!n.ok){let l="Failed to analyze answer";try{l=(await n.json()).error||l}catch{l=await n.text()||`Server error (${n.status})`}throw new Error(l)}return(await n.json()).feedback}catch(n){throw console.error("Error analyzing answer:",n),n.message.includes("fetch")?new Error("Cannot connect to server. Please ensure the backend server is running on port 3001."):n}},Io=()=>{const[t,s]=m.useState(null),[i,o]=m.useState(0),[n,r]=m.useState(""),[l,b]=m.useState(null),[c,u]=m.useState(!1),[S,f]=m.useState(null),y=a=>{s(a),o(0),r(""),b(null),f(null)},v=()=>{s(null),r(""),b(null),f(null)},C=a=>{r(a.target.value)},O=async()=>{if(n.trim()){u(!0),f(null);try{const a=t.questions[i],h=await Oo(a,n,t.title);b(h)}catch(a){f(a.message||"Failed to analyze answer. Please try again.")}finally{u(!1)}}},d=()=>{i<t.questions.length-1&&(o(a=>a+1),r(""),b(null),f(null))},k=()=>{i>0&&(o(a=>a-1),r(""),b(null),f(null))},p=a=>({frontend:e.jsx(ne,{size:24}),backend:e.jsx(mt,{size:24}),fullstack:e.jsx(ht,{size:24}),devops:e.jsx(mn,{size:24}),datascientist:e.jsx(un,{size:24}),productmanager:e.jsx(pn,{size:24}),uiux:e.jsx(dn,{size:24}),mobile:e.jsx(cn,{size:24}),qa:e.jsx(ln,{size:24}),security:e.jsx(ft,{size:24}),cloudarchitect:e.jsx(gt,{size:24}),mlengineer:e.jsx(lt,{size:24}),businessanalyst:e.jsx(re,{size:24}),technicalwriter:e.jsx(W,{size:24}),sysadmin:e.jsx(ut,{size:24})})[a]||e.jsx(rn,{size:24});return t?e.jsxs("div",{className:"interview-container",children:[e.jsxs("button",{className:"back-button",onClick:v,children:[e.jsx(Me,{size:20})," Back to Roles"]}),e.jsxs("div",{className:"question-section",children:[e.jsx("div",{className:"progress-bar",children:e.jsx("div",{className:"progress-fill",style:{width:`${(i+1)/t.questions.length*100}%`}})}),e.jsxs("span",{className:"question-counter",children:["Question ",i+1," of ",t.questions.length]}),e.jsx("h2",{className:"question-text",children:t.questions[i]}),e.jsxs("div",{className:"answer-area",children:[e.jsx("textarea",{value:n,onChange:C,placeholder:"Type your professional answer here...",disabled:c}),e.jsxs("div",{className:"action-buttons",children:[e.jsxs("button",{className:"nav-button",onClick:k,disabled:i===0||c,children:[e.jsx(Me,{size:16})," Previous"]}),e.jsx("button",{className:"submit-button",onClick:O,disabled:!n.trim()||c,children:c?"Analyzing...":e.jsxs(e.Fragment,{children:["Analyze Answer ",e.jsx(pt,{size:16})]})}),e.jsxs("button",{className:"nav-button",onClick:d,disabled:i===t.questions.length-1||c,children:["Next ",e.jsx(ae,{size:16})]})]})]}),S&&e.jsx("div",{className:"error-message",children:S}),l&&e.jsxs("div",{className:"feedback-section",children:[e.jsx("h3",{children:"AI Feedback"}),e.jsx("div",{className:"feedback-content",children:e.jsx(V,{children:l})})]})]})]}):e.jsxs("div",{className:"interview-container",children:[e.jsxs("header",{className:"interview-header",children:[e.jsx("h1",{children:"Tech Interview Practice"}),e.jsx("p",{children:"Select a role to start your professional mock interview"})]}),e.jsx("div",{className:"roles-grid",children:Co.map(a=>e.jsxs("div",{className:"role-card",onClick:()=>y(a),children:[e.jsx("div",{className:"role-icon",children:p(a.id)}),e.jsx("h3",{children:a.title}),e.jsx("p",{children:a.description}),e.jsxs("span",{className:"question-count",children:[a.questions.length," Questions"]})]},a.id))})]})};function Po({theme:t,toggleTheme:s}){const o=Le().pathname==="/";return e.jsxs("div",{className:"app",children:[!o&&e.jsx(hn,{theme:t,toggleTheme:s}),e.jsx("main",{className:o?"":"main-content",children:e.jsxs(Ct,{children:[e.jsx(P,{path:"/",element:e.jsx(gn,{})}),e.jsx(P,{path:"/dashboard",element:e.jsx(fn,{})}),e.jsx(P,{path:"/notes",element:e.jsx(wn,{})}),e.jsx(P,{path:"/chat",element:e.jsx(Tn,{})}),e.jsx(P,{path:"/quiz",element:e.jsx(Dn,{})}),e.jsx(P,{path:"/study-plan",element:e.jsx(Cn,{})}),e.jsx(P,{path:"/topic/:topicId",element:e.jsx(Pn,{})}),e.jsx(P,{path:"/roadmap",element:e.jsx(mo,{})}),e.jsx(P,{path:"/coding-practice",element:e.jsx(ho,{})}),e.jsx(P,{path:"/practice-sheet",element:e.jsx(So,{})}),e.jsx(P,{path:"/video-feed",element:e.jsx(xo,{})}),e.jsx(P,{path:"/interview",element:e.jsx(Io,{})})]})})]})}function Ao(){const[t,s]=m.useState(localStorage.getItem("theme")||"light");m.useEffect(()=>{document.documentElement.setAttribute("data-theme",t),localStorage.setItem("theme",t)},[t]);const i=()=>{s(o=>o==="light"?"dark":"light")};return e.jsx(xt,{future:{v7_startTransition:!0,v7_relativeSplatPath:!0},children:e.jsx(Po,{theme:t,toggleTheme:i})})}Te.createRoot(document.getElementById("root")).render(e.jsx(ot.StrictMode,{children:e.jsx(Ao,{})}));
