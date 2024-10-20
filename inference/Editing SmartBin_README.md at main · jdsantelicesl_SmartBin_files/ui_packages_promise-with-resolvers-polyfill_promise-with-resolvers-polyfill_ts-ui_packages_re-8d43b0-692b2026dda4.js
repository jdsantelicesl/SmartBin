"use strict";(globalThis.webpackChunk=globalThis.webpackChunk||[]).push([["ui_packages_promise-with-resolvers-polyfill_promise-with-resolvers-polyfill_ts-ui_packages_re-8d43b0"],{31481:(e,t,s)=>{s.d(t,{I:()=>a});let a=(0,s(96540).createContext)(null)},51848:(e,t,s)=>{let a;s.d(t,{BI:()=>_,Ti:()=>p,lA:()=>m});var n=s(70837),i=s(18679),r=s(74572),l=s(51528);let{getItem:o}=(0,r.A)("localStorage"),c="dimension_",d=["utm_source","utm_medium","utm_campaign","utm_term","utm_content","scid"];try{let e=(0,n.O)("octolytics");delete e.baseContext,a=new i.s(e)}catch{}function u(e){let t=(0,n.O)("octolytics").baseContext||{};if(t)for(let[e,s]of(delete t.app_id,delete t.event_url,delete t.host,Object.entries(t)))e.startsWith(c)&&(t[e.replace(c,"")]=s,delete t[e]);let s=document.querySelector("meta[name=visitor-payload]");for(let[e,a]of(s&&Object.assign(t,JSON.parse(atob(s.content))),new URLSearchParams(window.location.search)))d.includes(e.toLowerCase())&&(t[e]=a);return t.staff=(0,l.X)().toString(),Object.assign(t,e)}function m(e){a?.sendPageView(u(e))}function _(e,t={}){let s=document.head?.querySelector('meta[name="current-catalog-service"]')?.content,n=s?{service:s}:{};for(let[e,s]of Object.entries(t))null!=s&&(n[e]=`${s}`);a&&(u(n),a.sendEvent(e||"unknown",u(n)))}function p(e){return Object.fromEntries(Object.entries(e).map(([e,t])=>[e,JSON.stringify(t)]))}},67726:(e,t,s)=>{s.d(t,{l:()=>a});let a=()=>void 0},24620:(e,t,s)=>{s.d(t,{Y:()=>a});function a(){let e={};return e.promise=new Promise((t,s)=>{e.resolve=t,e.reject=s}),e}},23581:(e,t,s)=>{s.d(t,{A:()=>l});let{getItem:a,setItem:n,removeItem:i}=(0,s(74572).A)("localStorage"),r="REACT_PROFILING_ENABLED",l={enable:()=>n(r,"true"),disable:()=>i(r),isEnabled:()=>!!a(r)}},71312:(e,t,s)=>{s.d(t,{S:()=>l,s:()=>r});var a=s(96540),n=s(51848),i=s(31481);function r(){let e=(0,a.useContext)(i.I);if(!e)throw Error("useAnalytics must be used within an AnalyticsContext");let{appName:t,category:s,metadata:r}=e;return{sendAnalyticsEvent:(0,a.useCallback)((e,a,i={})=>{let l={react:!0,app_name:t,category:s,...r};(0,n.BI)(e,{...l,...i,target:a})},[t,s,r])}}function l(){let{sendAnalyticsEvent:e}=r();return{sendClickAnalyticsEvent:(0,a.useCallback)((t={})=>{e("analytics.click",void 0,t)},[e])}}},59840:(e,t,s)=>{s.d(t,{m:()=>i});var a=s(96540),n=s(97156);function i(e,t){n.KJ&&(0,a.useLayoutEffect)(e,t)}},73272:(e,t,s)=>{s.d(t,{A:()=>i});var a=s(59840),n=s(96540);function i(){let e=(0,n.useRef)(!1),t=(0,n.useCallback)(()=>e.current,[]);return(0,a.m)(()=>(e.current=!0,()=>{e.current=!1}),[]),t}},83784:(e,t,s)=>{s.d(t,{A:()=>i});var a=s(73272),n=s(96540);let i=function(e){let t=(0,a.A)(),[s,i]=(0,n.useState)(e);return[s,(0,n.useCallback)(e=>{t()&&i(e)},[t])]}},37190:(e,t,s)=>{s.d(t,{y:()=>r});var a=s(74848),n=s(96540),i=s(31481);function r({children:e,appName:t,category:s,metadata:r}){let l=(0,n.useMemo)(()=>({appName:t,category:s,metadata:r}),[t,s,r]);return(0,a.jsx)(i.I.Provider,{value:l,children:e})}try{r.displayName||(r.displayName="AnalyticsProvider")}catch{}},22629:(e,t,s)=>{s.d(t,{O:()=>v,r:()=>f});var a=s(74848),n=s(71312),i=s(16823),r=s(38553),l=s(89323),o=s(80577),c=s(38621),d=s(96540),u=s(75014);let m=(0,d.lazy)(()=>Promise.all([s.e("primer-react"),s.e("react-core"),s.e("react-lib"),s.e("vendors-node_modules_dompurify_dist_purify_js"),s.e("vendors-node_modules_github_relative-time-element_dist_index_js"),s.e("vendors-node_modules_braintree_browser-detection_dist_browser-detection_js-node_modules_githu-bb80ec"),s.e("vendors-node_modules_react-relay_index_js"),s.e("vendors-node_modules_date-fns_format_mjs"),s.e("vendors-node_modules_date-fns_addWeeks_mjs-node_modules_date-fns_addYears_mjs-node_modules_da-827f4f"),s.e("vendors-node_modules_focus-visible_dist_focus-visible_js-node_modules_fzy_js_index_js-node_mo-c4d1d6"),s.e("vendors-node_modules_github_hotkey_dist_index_js-node_modules_date-fns_getDaysInMonth_mjs-nod-70c11b"),s.e("vendors-node_modules_github_combobox-nav_dist_index_js-node_modules_github_g-emoji-element_di-6ce195"),s.e("vendors-node_modules_react-relay_hooks_js-node_modules_github_paste-markdown_dist_index_js-no-da0d56"),s.e("ui_packages_paths_index_ts"),s.e("ui_packages_ui-commands_ui-commands_ts"),s.e("ui_packages_date-picker_date-picker_ts-ui_packages_github-avatar_GitHubAvatar_tsx"),s.e("ui_packages_item-picker_constants_labels_ts-ui_packages_item-picker_constants_values_ts-ui_pa-163a9a"),s.e("ui_packages_item-picker_components_RepositoryPicker_tsx"),s.e("ui_packages_issue-create_dialog_CreateIssueDialogEntry_tsx"),s.e("ui_packages_aria-live_aria-live_ts-ui_packages_test-id-props_test-id-props_ts-ui_packages_use-e287a4")]).then(s.bind(s,36860)));function _({label:e,analyticsLabel:t}){return{category:"SiteHeaderComponent",action:"add_dropdown",label:t||e.toLowerCase()}}function p({label:e,href:t,LeadingVisual:s,analyticsLabel:r}){let{sendClickAnalyticsEvent:l}=(0,n.S)(),o=(0,d.useCallback)(()=>{l(_({label:e,analyticsLabel:r}))},[e,r,l]);return(0,a.jsxs)(i.l.LinkItem,{href:t,onClick:o,children:[(0,a.jsx)(i.l.LeadingVisual,{children:(0,a.jsx)(s,{})}),e]})}function h({label:e,onClick:t,LeadingVisual:s,analyticsLabel:r}){let{sendClickAnalyticsEvent:l}=(0,n.S)(),o=(0,d.useCallback)(()=>{l(_({label:e,analyticsLabel:r})),t()},[e,r,l,t]);return(0,a.jsxs)(i.l.Item,{onSelect:o,children:[(0,a.jsx)(i.l.LeadingVisual,{children:(0,a.jsx)(s,{})}),e]})}function y(){return(0,a.jsx)(r.A,{size:"small"})}function x({side:e="outside-bottom",createRepo:t,importRepo:s,createOrg:n,createProject:r,createProjectUrl:o,createLegacyProject:u,createIssue:_,codespaces:x,gist:j,org:g,owner:f,repo:b,isOpen:v=!1,setIsOpen:C=()=>{},environment:N}){let[k,I]=(0,d.useState)(!1),[w,L]=(0,d.useState)(!1),[P,S]=(0,d.useState)(v);(0,d.useEffect)(()=>{v&&S(!0)},[v]);let O=k&&!w;return(0,a.jsxs)(a.Fragment,{children:[_&&P&&(0,a.jsx)(d.Suspense,{children:(0,a.jsx)(m,{isVisible:k,setIsVisible:I,setIsLoaded:L,setIsParentMenuOpen:C,owner:f,repo:b,environment:N})}),(0,a.jsx)(l.W.Overlay,{side:e,children:(0,a.jsxs)(i.l,{children:[_&&(0,a.jsx)(h,{label:"New issue",onClick:()=>(I(!0),!1),LeadingVisual:O?y:c.IssueOpenedIcon}),!1!==t&&(0,a.jsx)(p,{label:"New repository",href:"/new",LeadingVisual:c.RepoIcon}),s&&(0,a.jsx)(p,{label:"Import repository",href:"/new/import",LeadingVisual:c.RepoPushIcon}),(x||j)&&(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(i.l.Divider,{}),x&&(0,a.jsx)(p,{label:"New codespace",href:"/codespaces/new",LeadingVisual:c.CodespacesIcon}),j&&(0,a.jsx)(p,{label:"New gist",href:"/gist",LeadingVisual:c.CodeIcon})]}),(n||r||u)&&(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(i.l.Divider,{}),n&&(0,a.jsx)(p,{label:"New organization",href:"/account/organizations/new",LeadingVisual:c.OrganizationIcon}),r&&(0,a.jsx)(p,{label:"New project",analyticsLabel:"new project",href:o,LeadingVisual:c.ProjectIcon}),!r&&u&&(0,a.jsx)(p,{label:"New project",analyticsLabel:"new legacy project",href:"/new/project",LeadingVisual:c.ProjectIcon})]}),g&&(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(i.l.Divider,{}),(0,a.jsx)(p,{label:`${g.addWord} someone to ${g.login}`,analyticsLabel:"invite someone",href:`/orgs/${g.login}/people#invite-member`,LeadingVisual:c.PersonAddIcon}),(0,a.jsx)(p,{label:`New team in ${g.login}`,analyticsLabel:"new team",href:`/orgs/${g.login}/new-team`,LeadingVisual:c.PeopleIcon}),(0,a.jsx)(p,{label:`New repository in ${g.login}`,analyticsLabel:"organization - new repository",href:`/organizations/${g.login}/repositories/new`,LeadingVisual:c.RepoIcon})]})]})})]})}function j(e){let{ref:t,open:s,setOpen:n}=(0,u.Mm)(e.reactPartialAnchor);return(0,a.jsx)(l.W,{anchorRef:t,open:s,onOpenChange:n,children:(0,a.jsx)(x,{...e,isOpen:s,setIsOpen:n})})}function g(e){let t=`global-create-menu-tooltip-${(0,d.useId)()}`,[s,n]=(0,d.useState)(!1);return(0,a.jsxs)(l.W,{open:s,onOpenChange:n,children:[(0,a.jsx)(o.m,{text:"Create New...",type:"label",id:t,children:(0,a.jsx)(l.W.Button,{leadingVisual:c.PlusIcon,children:""})}),(0,a.jsx)(x,{...e,isOpen:s,setIsOpen:n})]})}function f(e){return e.reactPartialAnchor?(0,a.jsx)(j,{...e,reactPartialAnchor:e.reactPartialAnchor}):(0,a.jsx)(g,{...e})}let b={"@media (min-width: 48rem)":{display:"none"}};function v(e){let[t,s]=(0,d.useState)(!1);return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsxs)(l.W,{open:t,onOpenChange:s,children:[(0,a.jsx)(l.W.Anchor,{children:(0,a.jsxs)(i.l.Item,{sx:b,onSelect:()=>{s(e=>!e)},children:[(0,a.jsx)(i.l.LeadingVisual,{children:(0,a.jsx)(c.PlusIcon,{})}),"Create new"]})}),(0,a.jsx)(x,{...e,isOpen:t,setIsOpen:s,side:"outside-top"})]}),(0,a.jsx)(i.l.Divider,{sx:b})]})}try{m.displayName||(m.displayName="LazyCreateIssueDialog")}catch{}try{p.displayName||(p.displayName="CreateMenuLinkItem")}catch{}try{h.displayName||(h.displayName="CreateMenuItem")}catch{}try{y.displayName||(y.displayName="MenuItemSpinner")}catch{}try{x.displayName||(x.displayName="GlobalCreateMenuOverlay")}catch{}try{j.displayName||(j.displayName="ExternallyAnchoredGlobalCreateMenu")}catch{}try{g.displayName||(g.displayName="GlobalCreateMenuWithAnchor")}catch{}try{f.displayName||(f.displayName="GlobalCreateMenu")}catch{}try{v.displayName||(v.displayName="GlobalCreateMenuItem")}catch{}},47831:(e,t,s)=>{s.d(t,{BP:()=>d,D3:()=>c,O8:()=>a});var a,n=s(74848),i=s(96540),r=s(97156),l=s(59840);!function(e){e.ServerRender="ServerRender",e.ClientHydrate="ClientHydrate",e.ClientRender="ClientRender"}(a||(a={}));let o=(0,i.createContext)("ClientRender");function c({wasServerRendered:e,children:t}){let[s,a]=(0,i.useState)(()=>r.X3?"ServerRender":e?"ClientHydrate":"ClientRender");return(0,l.m)(()=>{"ClientRender"!==s&&a("ClientRender")},[s]),(0,n.jsx)(o.Provider,{value:s,children:t})}function d(){return(0,i.useContext)(o)}try{o.displayName||(o.displayName="RenderPhaseContext")}catch{}try{c.displayName||(c.displayName="RenderPhaseProvider")}catch{}},54156:(e,t,s)=>{s.d(t,{Qn:()=>o,T8:()=>d,Y6:()=>m,k6:()=>u});var a=s(74848),n=s(65556),i=s(96540),r=s(67726),l=s(83784);let o=5e3,c=(0,i.createContext)({addToast:r.l,addPersistedToast:r.l,clearPersistedToast:r.l}),d=(0,i.createContext)({toasts:[],persistedToast:null});function u({children:e}){let[t,s]=(0,l.A)([]),[r,u]=(0,i.useState)(null),{safeSetTimeout:m}=(0,n.A)(),_=(0,i.useCallback)(function(e){s([...t,e]),m(()=>s(t.slice(1)),o)},[t,m,s]),p=(0,i.useCallback)(function(e){u(e)},[u]),h=(0,i.useCallback)(function(){u(null)},[u]),y=(0,i.useMemo)(()=>({addToast:_,addPersistedToast:p,clearPersistedToast:h}),[p,_,h]),x=(0,i.useMemo)(()=>({toasts:t,persistedToast:r}),[t,r]);return(0,a.jsx)(c.Provider,{value:y,children:(0,a.jsx)(d.Provider,{value:x,children:e})})}function m(){return(0,i.useContext)(c)}try{c.displayName||(c.displayName="ToastContext")}catch{}try{d.displayName||(d.displayName="InternalToastsContext")}catch{}try{u.displayName||(u.displayName="ToastContextProvider")}catch{}},67870:(e,t,s)=>{s.d(t,{V:()=>m});var a=s(74848),n=s(96540),i=s(54156),r=s(38621),l=s(65556),o=s(16255);let c={info:"",success:"Toast--success",error:"Toast--error"},d={info:(0,a.jsx)(r.InfoIcon,{}),success:(0,a.jsx)(r.CheckIcon,{}),error:(0,a.jsx)(r.StopIcon,{})},u=({message:e,timeToLive:t,icon:s,type:i="info",role:r="log"})=>{let[u,m]=n.useState(!0),{safeSetTimeout:_}=(0,l.A)();return(0,n.useEffect)(()=>{t&&_(()=>m(!1),t-300)},[_,t]),(0,a.jsx)(o.Z,{children:(0,a.jsx)("div",{className:"p-1 position-fixed bottom-0 left-0 mb-3 ml-3",children:(0,a.jsxs)("div",{className:`Toast ${c[i]} ${u?"Toast--animateIn":"Toast--animateOut"}`,id:"ui-app-toast","data-testid":`ui-app-toast-${i}`,role:r,children:[(0,a.jsx)("span",{className:"Toast-icon",children:s||d[i]}),(0,a.jsx)("span",{className:"Toast-content",children:e})]})})})};try{u.displayName||(u.displayName="Toast")}catch{}function m(){let{toasts:e,persistedToast:t}=(0,n.useContext)(i.T8);return(0,a.jsxs)(a.Fragment,{children:[e.map((e,t)=>(0,a.jsx)(u,{message:e.message,icon:e.icon,timeToLive:i.Qn,type:e.type,role:e.role},t)),t&&(0,a.jsx)(u,{message:t.message,icon:t.icon,type:t.type,role:t.role})]})}try{m.displayName||(m.displayName="Toasts")}catch{}}}]);
//# sourceMappingURL=ui_packages_promise-with-resolvers-polyfill_promise-with-resolvers-polyfill_ts-ui_packages_re-8d43b0-c42a26381517.js.map