(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[540],{60378:function(n,e,i){(window.__NEXT_P=window.__NEXT_P||[]).push(["/data_sources",function(){return i(62181)}])},30287:function(n,e,i){"use strict";i.d(e,{KB:function(){return Relations},Yr:function(){return T},vk:function(){return v},vP:function(){return w},sW:function(){return _}});var r=i(85893),t=i(47741),l=i(66479),o=i(39653),c=i(50471),a=i(40639),s=i(36696),d=i(63679),u=i(9008),h=i.n(u),m=i(41664),x=i.n(m),j=i(67294),f=i(44527);function extractColumnInfo(n){var e,i,r;return"".concat(null===(e=n.columnDesc)||void 0===e?void 0:e.name," (").concat(null===(r=n.columnDesc)||void 0===r?void 0:null===(i=r.columnType)||void 0===i?void 0:i.typeName,")")}let p=(0,d.ZP)(()=>i.e(171).then(i.t.bind(i,55171,23))),v={name:"Depends",width:1,content:n=>(0,r.jsx)(x(),{href:"/streaming_graph/?id=".concat(n.id),children:(0,r.jsx)(t.zx,{size:"sm","aria-label":"view dependents",colorScheme:"teal",variant:"link",children:"D"})})},w={name:"Primary Key",width:1,content:n=>n.pk.map(n=>n.columnIndex).map(e=>n.columns[e]).map(n=>extractColumnInfo(n)).join(", ")},T={name:"Connector",width:3,content:n=>{var e;return null!==(e=n.properties.connector)&&void 0!==e?e:"unknown"}},_=[v,{name:"Fragments",width:1,content:n=>(0,r.jsx)(x(),{href:"/streaming_plan/?id=".concat(n.id),children:(0,r.jsx)(t.zx,{size:"sm","aria-label":"view fragments",colorScheme:"teal",variant:"link",children:"F"})})}];function Relations(n,e,i){let d=(0,l.pm)(),[u,m]=(0,j.useState)([]);(0,j.useEffect)(()=>((async function(){try{m(await e())}catch(n){d({title:"Error Occurred",description:n.toString(),status:"error",duration:5e3,isClosable:!0}),console.error(n)}})(),()=>{}),[d,e]);let{isOpen:x,onOpen:v,onClose:w}=(0,o.qY)(),[T,_]=(0,j.useState)(),openRelationCatalog=n=>{n&&(_(n),v())},C=(0,r.jsxs)(c.u_,{isOpen:x,onClose:w,size:"3xl",children:[(0,r.jsx)(c.ZA,{}),(0,r.jsxs)(c.hz,{children:[(0,r.jsxs)(c.xB,{children:["Catalog of ",null==T?void 0:T.id," - ",null==T?void 0:T.name]}),(0,r.jsx)(c.ol,{}),(0,r.jsx)(c.fe,{children:x&&T&&(0,r.jsx)(p,{src:T,collapsed:1,name:null,displayDataTypes:!1})}),(0,r.jsx)(c.mz,{children:(0,r.jsx)(t.zx,{colorScheme:"blue",mr:3,onClick:w,children:"Close"})})]})]}),k=(0,r.jsxs)(a.xu,{p:3,children:[(0,r.jsx)(f.Z,{children:n}),(0,r.jsx)(s.xJ,{children:(0,r.jsxs)(s.iA,{variant:"simple",size:"sm",maxWidth:"full",children:[(0,r.jsx)(s.hr,{children:(0,r.jsxs)(s.Tr,{children:[(0,r.jsx)(s.Th,{width:3,children:"Id"}),(0,r.jsx)(s.Th,{width:5,children:"Name"}),(0,r.jsx)(s.Th,{width:3,children:"Owner"}),i.map(n=>(0,r.jsx)(s.Th,{width:n.width,children:n.name},n.name)),(0,r.jsx)(s.Th,{children:"Visible Columns"})]})}),(0,r.jsx)(s.p3,{children:u.map(n=>(0,r.jsxs)(s.Tr,{children:[(0,r.jsx)(s.Td,{children:(0,r.jsx)(t.zx,{size:"sm","aria-label":"view catalog",colorScheme:"teal",variant:"link",onClick:()=>openRelationCatalog(n),children:n.id})}),(0,r.jsx)(s.Td,{children:n.name}),(0,r.jsx)(s.Td,{children:n.owner}),i.map(e=>(0,r.jsx)(s.Td,{children:e.content(n)},e.name)),(0,r.jsx)(s.Td,{overflowWrap:"normal",children:n.columns.filter(n=>!n.isHidden).map(n=>extractColumnInfo(n)).join(", ")})]},n.id))})]})})]});return(0,r.jsxs)(j.Fragment,{children:[(0,r.jsx)(h(),{children:(0,r.jsx)("title",{children:n})}),C,k]})}},62181:function(n,e,i){"use strict";i.r(e),i.d(e,{default:function(){return DataSources}});var r=i(30287),t=i(35413);function DataSources(){return(0,r.KB)("Data Sources",t.mt,[r.Yr,{name:"Row Format",width:3,content:n=>{var e,i;return null!==(i=null===(e=n.info)||void 0===e?void 0:e.rowFormat)&&void 0!==i?i:"unknown"}},r.vk])}}},function(n){n.O(0,[662,184,476,155,383,413,774,888,179],function(){return n(n.s=60378)}),_N_E=n.O()}]);