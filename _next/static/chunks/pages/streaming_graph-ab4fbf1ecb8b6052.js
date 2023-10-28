(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[307],{50361:function(e,t,r){var o=r(85990);e.exports=function(e){return o(e,5)}},31351:function(e){var t=Array.prototype.reverse;e.exports=function(e){return null==e?e:t.call(e)}},6165:function(e,t,r){(window.__NEXT_P=window.__NEXT_P||[]).push(["/streaming_graph",function(){return r(11042)}])},67670:function(e,t,r){"use strict";r.d(t,{_P:function(){return generatePointLinks},bK:function(){return layout},o:function(){return generateBoxLinks},rE:function(){return flipLayoutPoint}}),r(50361);var o=r(6162),n=r.n(o);function layout(e,t,r){let o=function(e){let t=new Map;for(let r of e)t.set(r.id,r);let r=new Map,o=new Map,getActorBoxNode=e=>{let n=o.get(e);if(void 0!==n)return n;let i={nextNodes:[]},l=t.get(e);if(void 0===l)throw Error("no such id ".concat(e));for(let e of l.parentIds)getActorBoxNode(e).nextNodes.push(i);return o.set(e,i),r.set(i,e),i};for(let t of e)getActorBoxNode(t.id);let n=new Map,i=[];for(let e of r.keys())i.push(e);for(let e of function(e){let t=[],r=[],o=new Map,visit=e=>{if(e.temp)throw Error("This is not a DAG");if(!e.perm){e.temp=!0;let r=-1;for(let t of e.node.nextNodes){o.get(t).isInput=!1,e.isOutput=!1;let n=visit(o.get(t));n>r&&(r=n)}e.temp=!1,e.perm=!0,e.g=r+1,t.unshift(e.node)}return e.g};for(let t of e){let e={node:t,temp:!1,perm:!1,isInput:!0,isOutput:!0,g:0};o.set(t,e),r.push(e)}let n=0;for(let e of r){let t=visit(e);t>n&&(n=t)}for(let e of r)e.g=n-e.g;let i=[];for(let e=0;e<n+1;++e)i.push({nodes:[],occupyRow:new Set});let l=new Map,a=new Map;for(let e of r)i[e.g].nodes.push(e.node),l.set(e.node,e.g);let putNodeInPosition=(e,t)=>{a.set(e,t),i[l.get(e)].occupyRow.add(t)},occupyLine=(e,t,r)=>{for(let o=e;o<=t;++o)i[o].occupyRow.add(r)},hasOccupied=(e,t)=>i[e].occupyRow.has(t),isStraightLineOccupied=(e,t,r)=>{if(r<0)return!1;for(let o=e;o<=t;++o)if(hasOccupied(o,r))return!0;return!1};for(let t of e)t.nextNodes.sort((e,t)=>l.get(t)-l.get(e));for(let e of i)for(let t of e.nodes){if(!a.has(t)){for(let e of t.nextNodes){if(a.has(e))continue;let r=-1;for(;isStraightLineOccupied(l.get(t),l.get(e),++r););putNodeInPosition(t,r),putNodeInPosition(e,r),occupyLine(l.get(t)+1,l.get(e)-1,r);break}if(!a.has(t)){let e=-1;for(;hasOccupied(l.get(t),++e););putNodeInPosition(t,e)}}for(let e of t.nextNodes){if(a.has(e))continue;let r=a.get(t);if(!isStraightLineOccupied(l.get(t)+1,l.get(e),r)){putNodeInPosition(e,r),occupyLine(l.get(t)+1,l.get(e)-1,r);continue}for(r=-1;isStraightLineOccupied(l.get(t)+1,l.get(e),++r););putNodeInPosition(e,r),occupyLine(l.get(t)+1,l.get(e)-1,r)}}let s=new Map;for(let t of e)s.set(t,[l.get(t),a.get(t)]);return s}(i)){let o=r.get(e[0]);if(!o)throw Error("no corresponding actorboxid of node ".concat(e[0]));let i=t.get(o);if(!i)throw Error("actorbox id ".concat(o," is not present in actorBoxIdToActorBox"));n.set(i,e[1])}return n}(e),i=new Map,l=new Map,a=0,s=0;for(let e of o){let t=e[0],r=e[1][0],o=e[1][1],c=i.get(r)||0;t.width>c&&i.set(r,t.width);let u=l.get(o)||0;t.height>u&&l.set(o,t.height),a=n()([r,a])||0,s=n()([o,s])||0}let c=new Map,u=new Map,getCumulativeMargin=(e,t,r,o)=>{let n=r.get(e);if(n)return n;if(0===e)n=0;else{let i=o.get(e-1);if(!i)throw Error("".concat(e-1," has no result"));n=getCumulativeMargin(e-1,t,r,o)+i+t}return r.set(e,n),n};for(let e=0;e<=a;++e)getCumulativeMargin(e,t,c,i);for(let e=0;e<=s;++e)getCumulativeMargin(e,r,u,l);let d=[];for(let[e,[t,r]]of o){let o=c.get(t),n=u.get(r);if(void 0!==o&&void 0!==n)d.push({id:e.id,x:o,y:n,data:e});else throw Error("x of layer ".concat(t,": ").concat(o,", y of row ").concat(r,": ").concat(n," "))}return d}function flipLayoutPoint(e,t,r,o){let n=function(e,t,r,o){let n=[];for(let{id:t,name:r,order:i,parentIds:l,...a}of e)n.push({id:t,name:r,parentIds:l,width:2*o,height:2*o,order:i,...a});let i=layout(n,t,r);return i.map(e=>{let{id:t,x:r,y:n,data:i}=e;return{id:t,data:i,x:r+o,y:n+o}})}(e,r,t,o);return n.map(e=>{let{id:t,x:r,y:o,data:n}=e;return{id:t,data:n,x:o,y:r}})}function generatePointLinks(e){let t=[],r=new Map;for(let t of e)r.set(t.id,t);for(let o of e)for(let e of o.data.parentIds){let n=r.get(e);t.push({points:[{x:o.x,y:o.y},{x:n.x,y:n.y}],source:o.id,target:e})}return t}function generateBoxLinks(e){let t=[],r=new Map;for(let t of e)r.set(t.id,t);for(let o of e)for(let e of o.data.parentIds){let n=r.get(e);t.push({points:[{x:o.x+o.data.width/2,y:o.y+o.data.height/2},{x:n.x+n.data.width/2,y:n.y+n.data.height/2}],source:o.id,target:e})}return t}},11042:function(e,t,r){"use strict";r.r(t),r.d(t,{default:function(){return StreamingGraph}});var o=r(85893),n=r(66479),i=r(40639),l=r(47741),a=r(31351),s=r.n(a),c=r(89734),u=r.n(c),d=r(9008),f=r.n(d),p=r(41664),g=r.n(p),h=r(11163),x=r(67294),m=r(52189),y=r(79855),w=r(67670);function StreamGraph(e){let{nodes:t,selectedId:r}=e,n=(0,x.useRef)(),i=(0,x.useCallback)(()=>{let e=(0,w.rE)(t,50,200,10).map(e=>{let{x:t,y:r,...o}=e;return{x:t+100,y:r+100,...o}}),r=(0,w._P)(e),{width:o,height:n}=function(e,t){let r=0,o=0;for(let{x:n,y:i,data:l}of e)r=Math.max(r,n+t),o=Math.max(o,i+t);return{width:r,height:o}}(e,10);return{layoutMap:e,links:r,width:o+200+200,height:n+50+200}},[t]),{layoutMap:l,width:a,height:s,links:c}=i();return(0,x.useEffect)(()=>{let e=n.current,t=y.Ys(e),o=y.ak_,i=y.jvg().curve(o).x(e=>{let{x:t}=e;return t}).y(e=>{let{y:t}=e;return t}),a=t.select(".edges").selectAll(".edge").data(c),isSelected=e=>e===r,applyEdge=e=>e.attr("d",e=>{let{points:t}=e;return i(t)}).attr("fill","none").attr("stroke-width",1).attr("stroke-width",e=>isSelected(e.source)||isSelected(e.target)?2:1).attr("opacity",e=>isSelected(e.source)||isSelected(e.target)?1:.5).attr("stroke",e=>isSelected(e.source)||isSelected(e.target)?m.rS.colors.teal["500"]:m.rS.colors.gray["300"]);a.exit().remove(),a.enter().call(e=>e.append("path").attr("class","edge").call(applyEdge)),a.call(applyEdge);let applyNode=e=>{e.attr("transform",e=>{let{x:t,y:r}=e;return"translate(".concat(t,",").concat(r,")")});let t=e.select("circle");t.empty()&&(t=e.append("circle")),t.attr("r",10).style("cursor","pointer").attr("fill",e=>{let{id:t}=e;return isSelected(t)?m.rS.colors.teal["500"]:m.rS.colors.gray["500"]});let r=e.select("text");return r.empty()&&(r=e.append("text")),r.attr("fill","black").text(e=>{let{data:{name:t}}=e;return t}).attr("font-family","inherit").attr("text-anchor","middle").attr("dy",20).attr("fill","black").attr("font-size",12).attr("transform","rotate(-8)"),e},s=t.select(".boxes"),u=s.selectAll(".node").data(l);u.enter().call(e=>e.append("g").attr("class","node").call(applyNode)),u.call(applyNode),u.exit().remove()},[l,c,r]),(0,o.jsx)(o.Fragment,{children:(0,o.jsxs)("svg",{ref:n,width:"".concat(a,"px"),height:"".concat(s,"px"),children:[(0,o.jsx)("g",{className:"edges"}),(0,o.jsx)("g",{className:"boxes"})]})})}var v=r(44527),S=r(35413);function StreamingGraph(){let e=(0,n.pm)(),[t,r]=(0,x.useState)();(0,x.useEffect)(()=>((async function(){try{r(await (0,S.H4)())}catch(t){e({title:"Error Occurred",description:t.toString(),status:"error",duration:5e3,isClosable:!0}),console.error(t)}})(),()=>{}),[e]);let a=(0,x.useCallback)(()=>t?function(e){let t=[],r=new Set(e.map(e=>e.id));for(let o of s()(u()(e,"id")))t.push({id:o.id.toString(),name:o.name,parentIds:(0,S.vx)(o)?o.dependentRelations.filter(e=>r.has(e)).map(e=>e.toString()):[],order:o.id});return t}(t):void 0,[t]),c=a(),d=(0,h.useRouter)(),p=(0,o.jsxs)(i.kC,{p:3,height:"calc(100vh - 20px)",flexDirection:"column",children:[(0,o.jsx)(v.Z,{children:"Streaming Graph"}),(0,o.jsxs)(i.kC,{flexDirection:"row",height:"full",children:[(0,o.jsxs)(i.kC,{width:"200px",height:"full",maxHeight:"full",mr:3,alignItems:"flex-start",flexDirection:"column",children:[(0,o.jsx)(i.xv,{fontWeight:"semibold",mb:3,children:"All Nodes"}),(0,o.jsx)(i.xu,{flex:1,overflowY:"scroll",children:(0,o.jsx)(i.gC,{width:"full",spacing:1,children:null==t?void 0:t.map(e=>{let t=d.query.id===e.id.toString();return(0,o.jsx)(g(),{href:"?id=".concat(e.id),children:(0,o.jsx)(l.zx,{colorScheme:t?"teal":"gray",color:t?"teal.600":"gray.500",variant:t?"outline":"ghost",width:"full",py:0,height:8,justifyContent:"flex-start",children:e.name})},e.id)})})})]}),(0,o.jsxs)(i.xu,{flex:1,height:"full",ml:3,overflowX:"scroll",overflowY:"scroll",children:[(0,o.jsx)(i.xv,{fontWeight:"semibold",children:"Graph"}),c&&(0,o.jsx)(StreamGraph,{nodes:c,selectedId:d.query.id})]})]})]});return(0,o.jsxs)(x.Fragment,{children:[(0,o.jsx)(f(),{children:(0,o.jsx)("title",{children:"Streaming Graph"})}),p]})}}},function(e){e.O(0,[662,184,591,855,340,383,413,774,888,179],function(){return e(e.s=6165)}),_N_E=e.O()}]);