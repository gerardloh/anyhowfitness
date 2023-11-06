(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))s(i);new MutationObserver(i=>{for(const r of i)if(r.type==="childList")for(const o of r.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&s(o)}).observe(document,{childList:!0,subtree:!0});function n(i){const r={};return i.integrity&&(r.integrity=i.integrity),i.referrerPolicy&&(r.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?r.credentials="include":i.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function s(i){if(i.ep)return;i.ep=!0;const r=n(i);fetch(i.href,r)}})();var Ct="top",Kt="bottom",zt="right",Rt="left",uc="auto",Rr=[Ct,Kt,zt,Rt],ri="start",sr="end",zy="clippingParents",$f="viewport",ki="popper",Gy="reference",yh=Rr.reduce(function(t,e){return t.concat([e+"-"+ri,e+"-"+sr])},[]),Bf=[].concat(Rr,[uc]).reduce(function(t,e){return t.concat([e,e+"-"+ri,e+"-"+sr])},[]),Yy="beforeRead",Qy="read",Xy="afterRead",Jy="beforeMain",Zy="main",eE="afterMain",tE="beforeWrite",nE="write",sE="afterWrite",iE=[Yy,Qy,Xy,Jy,Zy,eE,tE,nE,sE];function Un(t){return t?(t.nodeName||"").toLowerCase():null}function Gt(t){if(t==null)return window;if(t.toString()!=="[object Window]"){var e=t.ownerDocument;return e&&e.defaultView||window}return t}function oi(t){var e=Gt(t).Element;return t instanceof e||t instanceof Element}function en(t){var e=Gt(t).HTMLElement;return t instanceof e||t instanceof HTMLElement}function Hf(t){if(typeof ShadowRoot>"u")return!1;var e=Gt(t).ShadowRoot;return t instanceof e||t instanceof ShadowRoot}function xb(t){var e=t.state;Object.keys(e.elements).forEach(function(n){var s=e.styles[n]||{},i=e.attributes[n]||{},r=e.elements[n];!en(r)||!Un(r)||(Object.assign(r.style,s),Object.keys(i).forEach(function(o){var a=i[o];a===!1?r.removeAttribute(o):r.setAttribute(o,a===!0?"":a)}))})}function Lb(t){var e=t.state,n={popper:{position:e.options.strategy,left:"0",top:"0",margin:"0"},arrow:{position:"absolute"},reference:{}};return Object.assign(e.elements.popper.style,n.popper),e.styles=n,e.elements.arrow&&Object.assign(e.elements.arrow.style,n.arrow),function(){Object.keys(e.elements).forEach(function(s){var i=e.elements[s],r=e.attributes[s]||{},o=Object.keys(e.styles.hasOwnProperty(s)?e.styles[s]:n[s]),a=o.reduce(function(l,c){return l[c]="",l},{});!en(i)||!Un(i)||(Object.assign(i.style,a),Object.keys(r).forEach(function(l){i.removeAttribute(l)}))})}}const jf={name:"applyStyles",enabled:!0,phase:"write",fn:xb,effect:Lb,requires:["computeStyles"]};function xn(t){return t.split("-")[0]}var Zs=Math.max,Tl=Math.min,ir=Math.round;function Eh(){var t=navigator.userAgentData;return t!=null&&t.brands&&Array.isArray(t.brands)?t.brands.map(function(e){return e.brand+"/"+e.version}).join(" "):navigator.userAgent}function rE(){return!/^((?!chrome|android).)*safari/i.test(Eh())}function rr(t,e,n){e===void 0&&(e=!1),n===void 0&&(n=!1);var s=t.getBoundingClientRect(),i=1,r=1;e&&en(t)&&(i=t.offsetWidth>0&&ir(s.width)/t.offsetWidth||1,r=t.offsetHeight>0&&ir(s.height)/t.offsetHeight||1);var o=oi(t)?Gt(t):window,a=o.visualViewport,l=!rE()&&n,c=(s.left+(l&&a?a.offsetLeft:0))/i,u=(s.top+(l&&a?a.offsetTop:0))/r,h=s.width/i,f=s.height/r;return{width:h,height:f,top:u,right:c+h,bottom:u+f,left:c,x:c,y:u}}function Wf(t){var e=rr(t),n=t.offsetWidth,s=t.offsetHeight;return Math.abs(e.width-n)<=1&&(n=e.width),Math.abs(e.height-s)<=1&&(s=e.height),{x:t.offsetLeft,y:t.offsetTop,width:n,height:s}}function oE(t,e){var n=e.getRootNode&&e.getRootNode();if(t.contains(e))return!0;if(n&&Hf(n)){var s=e;do{if(s&&t.isSameNode(s))return!0;s=s.parentNode||s.host}while(s)}return!1}function is(t){return Gt(t).getComputedStyle(t)}function Mb(t){return["table","td","th"].indexOf(Un(t))>=0}function xs(t){return((oi(t)?t.ownerDocument:t.document)||window.document).documentElement}function hc(t){return Un(t)==="html"?t:t.assignedSlot||t.parentNode||(Hf(t)?t.host:null)||xs(t)}function h_(t){return!en(t)||is(t).position==="fixed"?null:t.offsetParent}function Vb(t){var e=/firefox/i.test(Eh()),n=/Trident/i.test(Eh());if(n&&en(t)){var s=is(t);if(s.position==="fixed")return null}var i=hc(t);for(Hf(i)&&(i=i.host);en(i)&&["html","body"].indexOf(Un(i))<0;){var r=is(i);if(r.transform!=="none"||r.perspective!=="none"||r.contain==="paint"||["transform","perspective"].indexOf(r.willChange)!==-1||e&&r.willChange==="filter"||e&&r.filter&&r.filter!=="none")return i;i=i.parentNode}return null}function oa(t){for(var e=Gt(t),n=h_(t);n&&Mb(n)&&is(n).position==="static";)n=h_(n);return n&&(Un(n)==="html"||Un(n)==="body"&&is(n).position==="static")?e:n||Vb(t)||e}function qf(t){return["top","bottom"].indexOf(t)>=0?"x":"y"}function _o(t,e,n){return Zs(t,Tl(e,n))}function Fb(t,e,n){var s=_o(t,e,n);return s>n?n:s}function aE(){return{top:0,right:0,bottom:0,left:0}}function lE(t){return Object.assign({},aE(),t)}function cE(t,e){return e.reduce(function(n,s){return n[s]=t,n},{})}var Ub=function(e,n){return e=typeof e=="function"?e(Object.assign({},n.rects,{placement:n.placement})):e,lE(typeof e!="number"?e:cE(e,Rr))};function $b(t){var e,n=t.state,s=t.name,i=t.options,r=n.elements.arrow,o=n.modifiersData.popperOffsets,a=xn(n.placement),l=qf(a),c=[Rt,zt].indexOf(a)>=0,u=c?"height":"width";if(!(!r||!o)){var h=Ub(i.padding,n),f=Wf(r),d=l==="y"?Ct:Rt,m=l==="y"?Kt:zt,g=n.rects.reference[u]+n.rects.reference[l]-o[l]-n.rects.popper[u],y=o[l]-n.rects.reference[l],T=oa(r),I=T?l==="y"?T.clientHeight||0:T.clientWidth||0:0,b=g/2-y/2,v=h[d],U=I-f[u]-h[m],$=I/2-f[u]/2+b,Y=_o(v,$,U),te=l;n.modifiersData[s]=(e={},e[te]=Y,e.centerOffset=Y-$,e)}}function Bb(t){var e=t.state,n=t.options,s=n.element,i=s===void 0?"[data-popper-arrow]":s;i!=null&&(typeof i=="string"&&(i=e.elements.popper.querySelector(i),!i)||oE(e.elements.popper,i)&&(e.elements.arrow=i))}const uE={name:"arrow",enabled:!0,phase:"main",fn:$b,effect:Bb,requires:["popperOffsets"],requiresIfExists:["preventOverflow"]};function or(t){return t.split("-")[1]}var Hb={top:"auto",right:"auto",bottom:"auto",left:"auto"};function jb(t,e){var n=t.x,s=t.y,i=e.devicePixelRatio||1;return{x:ir(n*i)/i||0,y:ir(s*i)/i||0}}function f_(t){var e,n=t.popper,s=t.popperRect,i=t.placement,r=t.variation,o=t.offsets,a=t.position,l=t.gpuAcceleration,c=t.adaptive,u=t.roundOffsets,h=t.isFixed,f=o.x,d=f===void 0?0:f,m=o.y,g=m===void 0?0:m,y=typeof u=="function"?u({x:d,y:g}):{x:d,y:g};d=y.x,g=y.y;var T=o.hasOwnProperty("x"),I=o.hasOwnProperty("y"),b=Rt,v=Ct,U=window;if(c){var $=oa(n),Y="clientHeight",te="clientWidth";if($===Gt(n)&&($=xs(n),is($).position!=="static"&&a==="absolute"&&(Y="scrollHeight",te="scrollWidth")),$=$,i===Ct||(i===Rt||i===zt)&&r===sr){v=Kt;var _e=h&&$===U&&U.visualViewport?U.visualViewport.height:$[Y];g-=_e-s.height,g*=l?1:-1}if(i===Rt||(i===Ct||i===Kt)&&r===sr){b=zt;var oe=h&&$===U&&U.visualViewport?U.visualViewport.width:$[te];d-=oe-s.width,d*=l?1:-1}}var Se=Object.assign({position:a},c&&Hb),ze=u===!0?jb({x:d,y:g},Gt(n)):{x:d,y:g};if(d=ze.x,g=ze.y,l){var Re;return Object.assign({},Se,(Re={},Re[v]=I?"0":"",Re[b]=T?"0":"",Re.transform=(U.devicePixelRatio||1)<=1?"translate("+d+"px, "+g+"px)":"translate3d("+d+"px, "+g+"px, 0)",Re))}return Object.assign({},Se,(e={},e[v]=I?g+"px":"",e[b]=T?d+"px":"",e.transform="",e))}function Wb(t){var e=t.state,n=t.options,s=n.gpuAcceleration,i=s===void 0?!0:s,r=n.adaptive,o=r===void 0?!0:r,a=n.roundOffsets,l=a===void 0?!0:a,c={placement:xn(e.placement),variation:or(e.placement),popper:e.elements.popper,popperRect:e.rects.popper,gpuAcceleration:i,isFixed:e.options.strategy==="fixed"};e.modifiersData.popperOffsets!=null&&(e.styles.popper=Object.assign({},e.styles.popper,f_(Object.assign({},c,{offsets:e.modifiersData.popperOffsets,position:e.options.strategy,adaptive:o,roundOffsets:l})))),e.modifiersData.arrow!=null&&(e.styles.arrow=Object.assign({},e.styles.arrow,f_(Object.assign({},c,{offsets:e.modifiersData.arrow,position:"absolute",adaptive:!1,roundOffsets:l})))),e.attributes.popper=Object.assign({},e.attributes.popper,{"data-popper-placement":e.placement})}const Kf={name:"computeStyles",enabled:!0,phase:"beforeWrite",fn:Wb,data:{}};var xa={passive:!0};function qb(t){var e=t.state,n=t.instance,s=t.options,i=s.scroll,r=i===void 0?!0:i,o=s.resize,a=o===void 0?!0:o,l=Gt(e.elements.popper),c=[].concat(e.scrollParents.reference,e.scrollParents.popper);return r&&c.forEach(function(u){u.addEventListener("scroll",n.update,xa)}),a&&l.addEventListener("resize",n.update,xa),function(){r&&c.forEach(function(u){u.removeEventListener("scroll",n.update,xa)}),a&&l.removeEventListener("resize",n.update,xa)}}const zf={name:"eventListeners",enabled:!0,phase:"write",fn:function(){},effect:qb,data:{}};var Kb={left:"right",right:"left",bottom:"top",top:"bottom"};function al(t){return t.replace(/left|right|bottom|top/g,function(e){return Kb[e]})}var zb={start:"end",end:"start"};function d_(t){return t.replace(/start|end/g,function(e){return zb[e]})}function Gf(t){var e=Gt(t),n=e.pageXOffset,s=e.pageYOffset;return{scrollLeft:n,scrollTop:s}}function Yf(t){return rr(xs(t)).left+Gf(t).scrollLeft}function Gb(t,e){var n=Gt(t),s=xs(t),i=n.visualViewport,r=s.clientWidth,o=s.clientHeight,a=0,l=0;if(i){r=i.width,o=i.height;var c=rE();(c||!c&&e==="fixed")&&(a=i.offsetLeft,l=i.offsetTop)}return{width:r,height:o,x:a+Yf(t),y:l}}function Yb(t){var e,n=xs(t),s=Gf(t),i=(e=t.ownerDocument)==null?void 0:e.body,r=Zs(n.scrollWidth,n.clientWidth,i?i.scrollWidth:0,i?i.clientWidth:0),o=Zs(n.scrollHeight,n.clientHeight,i?i.scrollHeight:0,i?i.clientHeight:0),a=-s.scrollLeft+Yf(t),l=-s.scrollTop;return is(i||n).direction==="rtl"&&(a+=Zs(n.clientWidth,i?i.clientWidth:0)-r),{width:r,height:o,x:a,y:l}}function Qf(t){var e=is(t),n=e.overflow,s=e.overflowX,i=e.overflowY;return/auto|scroll|overlay|hidden/.test(n+i+s)}function hE(t){return["html","body","#document"].indexOf(Un(t))>=0?t.ownerDocument.body:en(t)&&Qf(t)?t:hE(hc(t))}function mo(t,e){var n;e===void 0&&(e=[]);var s=hE(t),i=s===((n=t.ownerDocument)==null?void 0:n.body),r=Gt(s),o=i?[r].concat(r.visualViewport||[],Qf(s)?s:[]):s,a=e.concat(o);return i?a:a.concat(mo(hc(o)))}function vh(t){return Object.assign({},t,{left:t.x,top:t.y,right:t.x+t.width,bottom:t.y+t.height})}function Qb(t,e){var n=rr(t,!1,e==="fixed");return n.top=n.top+t.clientTop,n.left=n.left+t.clientLeft,n.bottom=n.top+t.clientHeight,n.right=n.left+t.clientWidth,n.width=t.clientWidth,n.height=t.clientHeight,n.x=n.left,n.y=n.top,n}function p_(t,e,n){return e===$f?vh(Gb(t,n)):oi(e)?Qb(e,n):vh(Yb(xs(t)))}function Xb(t){var e=mo(hc(t)),n=["absolute","fixed"].indexOf(is(t).position)>=0,s=n&&en(t)?oa(t):t;return oi(s)?e.filter(function(i){return oi(i)&&oE(i,s)&&Un(i)!=="body"}):[]}function Jb(t,e,n,s){var i=e==="clippingParents"?Xb(t):[].concat(e),r=[].concat(i,[n]),o=r[0],a=r.reduce(function(l,c){var u=p_(t,c,s);return l.top=Zs(u.top,l.top),l.right=Tl(u.right,l.right),l.bottom=Tl(u.bottom,l.bottom),l.left=Zs(u.left,l.left),l},p_(t,o,s));return a.width=a.right-a.left,a.height=a.bottom-a.top,a.x=a.left,a.y=a.top,a}function fE(t){var e=t.reference,n=t.element,s=t.placement,i=s?xn(s):null,r=s?or(s):null,o=e.x+e.width/2-n.width/2,a=e.y+e.height/2-n.height/2,l;switch(i){case Ct:l={x:o,y:e.y-n.height};break;case Kt:l={x:o,y:e.y+e.height};break;case zt:l={x:e.x+e.width,y:a};break;case Rt:l={x:e.x-n.width,y:a};break;default:l={x:e.x,y:e.y}}var c=i?qf(i):null;if(c!=null){var u=c==="y"?"height":"width";switch(r){case ri:l[c]=l[c]-(e[u]/2-n[u]/2);break;case sr:l[c]=l[c]+(e[u]/2-n[u]/2);break}}return l}function ar(t,e){e===void 0&&(e={});var n=e,s=n.placement,i=s===void 0?t.placement:s,r=n.strategy,o=r===void 0?t.strategy:r,a=n.boundary,l=a===void 0?zy:a,c=n.rootBoundary,u=c===void 0?$f:c,h=n.elementContext,f=h===void 0?ki:h,d=n.altBoundary,m=d===void 0?!1:d,g=n.padding,y=g===void 0?0:g,T=lE(typeof y!="number"?y:cE(y,Rr)),I=f===ki?Gy:ki,b=t.rects.popper,v=t.elements[m?I:f],U=Jb(oi(v)?v:v.contextElement||xs(t.elements.popper),l,u,o),$=rr(t.elements.reference),Y=fE({reference:$,element:b,strategy:"absolute",placement:i}),te=vh(Object.assign({},b,Y)),_e=f===ki?te:$,oe={top:U.top-_e.top+T.top,bottom:_e.bottom-U.bottom+T.bottom,left:U.left-_e.left+T.left,right:_e.right-U.right+T.right},Se=t.modifiersData.offset;if(f===ki&&Se){var ze=Se[i];Object.keys(oe).forEach(function(Re){var Lt=[zt,Kt].indexOf(Re)>=0?1:-1,Pt=[Ct,Kt].indexOf(Re)>=0?"y":"x";oe[Re]+=ze[Pt]*Lt})}return oe}function Zb(t,e){e===void 0&&(e={});var n=e,s=n.placement,i=n.boundary,r=n.rootBoundary,o=n.padding,a=n.flipVariations,l=n.allowedAutoPlacements,c=l===void 0?Bf:l,u=or(s),h=u?a?yh:yh.filter(function(m){return or(m)===u}):Rr,f=h.filter(function(m){return c.indexOf(m)>=0});f.length===0&&(f=h);var d=f.reduce(function(m,g){return m[g]=ar(t,{placement:g,boundary:i,rootBoundary:r,padding:o})[xn(g)],m},{});return Object.keys(d).sort(function(m,g){return d[m]-d[g]})}function eC(t){if(xn(t)===uc)return[];var e=al(t);return[d_(t),e,d_(e)]}function tC(t){var e=t.state,n=t.options,s=t.name;if(!e.modifiersData[s]._skip){for(var i=n.mainAxis,r=i===void 0?!0:i,o=n.altAxis,a=o===void 0?!0:o,l=n.fallbackPlacements,c=n.padding,u=n.boundary,h=n.rootBoundary,f=n.altBoundary,d=n.flipVariations,m=d===void 0?!0:d,g=n.allowedAutoPlacements,y=e.options.placement,T=xn(y),I=T===y,b=l||(I||!m?[al(y)]:eC(y)),v=[y].concat(b).reduce(function(Vt,Ft){return Vt.concat(xn(Ft)===uc?Zb(e,{placement:Ft,boundary:u,rootBoundary:h,padding:c,flipVariations:m,allowedAutoPlacements:g}):Ft)},[]),U=e.rects.reference,$=e.rects.popper,Y=new Map,te=!0,_e=v[0],oe=0;oe<v.length;oe++){var Se=v[oe],ze=xn(Se),Re=or(Se)===ri,Lt=[Ct,Kt].indexOf(ze)>=0,Pt=Lt?"width":"height",ge=ar(e,{placement:Se,boundary:u,rootBoundary:h,altBoundary:f,padding:c}),ie=Lt?Re?zt:Rt:Re?Kt:Ct;U[Pt]>$[Pt]&&(ie=al(ie));var ce=al(ie),st=[];if(r&&st.push(ge[ze]<=0),a&&st.push(ge[ie]<=0,ge[ce]<=0),st.every(function(Vt){return Vt})){_e=Se,te=!1;break}Y.set(Se,st)}if(te)for(var Mt=m?3:1,Nt=function(Ft){var Fe=v.find(function(A){var V=Y.get(A);if(V)return V.slice(0,Ft).every(function(x){return x})});if(Fe)return _e=Fe,"break"},He=Mt;He>0;He--){var an=Nt(He);if(an==="break")break}e.placement!==_e&&(e.modifiersData[s]._skip=!0,e.placement=_e,e.reset=!0)}}const dE={name:"flip",enabled:!0,phase:"main",fn:tC,requiresIfExists:["offset"],data:{_skip:!1}};function __(t,e,n){return n===void 0&&(n={x:0,y:0}),{top:t.top-e.height-n.y,right:t.right-e.width+n.x,bottom:t.bottom-e.height+n.y,left:t.left-e.width-n.x}}function m_(t){return[Ct,zt,Kt,Rt].some(function(e){return t[e]>=0})}function nC(t){var e=t.state,n=t.name,s=e.rects.reference,i=e.rects.popper,r=e.modifiersData.preventOverflow,o=ar(e,{elementContext:"reference"}),a=ar(e,{altBoundary:!0}),l=__(o,s),c=__(a,i,r),u=m_(l),h=m_(c);e.modifiersData[n]={referenceClippingOffsets:l,popperEscapeOffsets:c,isReferenceHidden:u,hasPopperEscaped:h},e.attributes.popper=Object.assign({},e.attributes.popper,{"data-popper-reference-hidden":u,"data-popper-escaped":h})}const pE={name:"hide",enabled:!0,phase:"main",requiresIfExists:["preventOverflow"],fn:nC};function sC(t,e,n){var s=xn(t),i=[Rt,Ct].indexOf(s)>=0?-1:1,r=typeof n=="function"?n(Object.assign({},e,{placement:t})):n,o=r[0],a=r[1];return o=o||0,a=(a||0)*i,[Rt,zt].indexOf(s)>=0?{x:a,y:o}:{x:o,y:a}}function iC(t){var e=t.state,n=t.options,s=t.name,i=n.offset,r=i===void 0?[0,0]:i,o=Bf.reduce(function(u,h){return u[h]=sC(h,e.rects,r),u},{}),a=o[e.placement],l=a.x,c=a.y;e.modifiersData.popperOffsets!=null&&(e.modifiersData.popperOffsets.x+=l,e.modifiersData.popperOffsets.y+=c),e.modifiersData[s]=o}const _E={name:"offset",enabled:!0,phase:"main",requires:["popperOffsets"],fn:iC};function rC(t){var e=t.state,n=t.name;e.modifiersData[n]=fE({reference:e.rects.reference,element:e.rects.popper,strategy:"absolute",placement:e.placement})}const Xf={name:"popperOffsets",enabled:!0,phase:"read",fn:rC,data:{}};function oC(t){return t==="x"?"y":"x"}function aC(t){var e=t.state,n=t.options,s=t.name,i=n.mainAxis,r=i===void 0?!0:i,o=n.altAxis,a=o===void 0?!1:o,l=n.boundary,c=n.rootBoundary,u=n.altBoundary,h=n.padding,f=n.tether,d=f===void 0?!0:f,m=n.tetherOffset,g=m===void 0?0:m,y=ar(e,{boundary:l,rootBoundary:c,padding:h,altBoundary:u}),T=xn(e.placement),I=or(e.placement),b=!I,v=qf(T),U=oC(v),$=e.modifiersData.popperOffsets,Y=e.rects.reference,te=e.rects.popper,_e=typeof g=="function"?g(Object.assign({},e.rects,{placement:e.placement})):g,oe=typeof _e=="number"?{mainAxis:_e,altAxis:_e}:Object.assign({mainAxis:0,altAxis:0},_e),Se=e.modifiersData.offset?e.modifiersData.offset[e.placement]:null,ze={x:0,y:0};if($){if(r){var Re,Lt=v==="y"?Ct:Rt,Pt=v==="y"?Kt:zt,ge=v==="y"?"height":"width",ie=$[v],ce=ie+y[Lt],st=ie-y[Pt],Mt=d?-te[ge]/2:0,Nt=I===ri?Y[ge]:te[ge],He=I===ri?-te[ge]:-Y[ge],an=e.elements.arrow,Vt=d&&an?Wf(an):{width:0,height:0},Ft=e.modifiersData["arrow#persistent"]?e.modifiersData["arrow#persistent"].padding:aE(),Fe=Ft[Lt],A=Ft[Pt],V=_o(0,Y[ge],Vt[ge]),x=b?Y[ge]/2-Mt-V-Fe-oe.mainAxis:Nt-V-Fe-oe.mainAxis,j=b?-Y[ge]/2+Mt+V+A+oe.mainAxis:He+V+A+oe.mainAxis,he=e.elements.arrow&&oa(e.elements.arrow),p=he?v==="y"?he.clientTop||0:he.clientLeft||0:0,_=(Re=Se==null?void 0:Se[v])!=null?Re:0,E=ie+x-_-p,w=ie+j-_,C=_o(d?Tl(ce,E):ce,ie,d?Zs(st,w):st);$[v]=C,ze[v]=C-ie}if(a){var R,F=v==="x"?Ct:Rt,D=v==="x"?Kt:zt,k=$[U],P=U==="y"?"height":"width",q=k+y[F],B=k-y[D],W=[Ct,Rt].indexOf(T)!==-1,Q=(R=Se==null?void 0:Se[U])!=null?R:0,re=W?q:k-Y[P]-te[P]-Q+oe.altAxis,we=W?k+Y[P]+te[P]-Q-oe.altAxis:B,ye=d&&W?Fb(re,k,we):_o(d?re:q,k,d?we:B);$[U]=ye,ze[U]=ye-k}e.modifiersData[s]=ze}}const mE={name:"preventOverflow",enabled:!0,phase:"main",fn:aC,requiresIfExists:["offset"]};function lC(t){return{scrollLeft:t.scrollLeft,scrollTop:t.scrollTop}}function cC(t){return t===Gt(t)||!en(t)?Gf(t):lC(t)}function uC(t){var e=t.getBoundingClientRect(),n=ir(e.width)/t.offsetWidth||1,s=ir(e.height)/t.offsetHeight||1;return n!==1||s!==1}function hC(t,e,n){n===void 0&&(n=!1);var s=en(e),i=en(e)&&uC(e),r=xs(e),o=rr(t,i,n),a={scrollLeft:0,scrollTop:0},l={x:0,y:0};return(s||!s&&!n)&&((Un(e)!=="body"||Qf(r))&&(a=cC(e)),en(e)?(l=rr(e,!0),l.x+=e.clientLeft,l.y+=e.clientTop):r&&(l.x=Yf(r))),{x:o.left+a.scrollLeft-l.x,y:o.top+a.scrollTop-l.y,width:o.width,height:o.height}}function fC(t){var e=new Map,n=new Set,s=[];t.forEach(function(r){e.set(r.name,r)});function i(r){n.add(r.name);var o=[].concat(r.requires||[],r.requiresIfExists||[]);o.forEach(function(a){if(!n.has(a)){var l=e.get(a);l&&i(l)}}),s.push(r)}return t.forEach(function(r){n.has(r.name)||i(r)}),s}function dC(t){var e=fC(t);return iE.reduce(function(n,s){return n.concat(e.filter(function(i){return i.phase===s}))},[])}function pC(t){var e;return function(){return e||(e=new Promise(function(n){Promise.resolve().then(function(){e=void 0,n(t())})})),e}}function _C(t){var e=t.reduce(function(n,s){var i=n[s.name];return n[s.name]=i?Object.assign({},i,s,{options:Object.assign({},i.options,s.options),data:Object.assign({},i.data,s.data)}):s,n},{});return Object.keys(e).map(function(n){return e[n]})}var g_={placement:"bottom",modifiers:[],strategy:"absolute"};function y_(){for(var t=arguments.length,e=new Array(t),n=0;n<t;n++)e[n]=arguments[n];return!e.some(function(s){return!(s&&typeof s.getBoundingClientRect=="function")})}function fc(t){t===void 0&&(t={});var e=t,n=e.defaultModifiers,s=n===void 0?[]:n,i=e.defaultOptions,r=i===void 0?g_:i;return function(a,l,c){c===void 0&&(c=r);var u={placement:"bottom",orderedModifiers:[],options:Object.assign({},g_,r),modifiersData:{},elements:{reference:a,popper:l},attributes:{},styles:{}},h=[],f=!1,d={state:u,setOptions:function(T){var I=typeof T=="function"?T(u.options):T;g(),u.options=Object.assign({},r,u.options,I),u.scrollParents={reference:oi(a)?mo(a):a.contextElement?mo(a.contextElement):[],popper:mo(l)};var b=dC(_C([].concat(s,u.options.modifiers)));return u.orderedModifiers=b.filter(function(v){return v.enabled}),m(),d.update()},forceUpdate:function(){if(!f){var T=u.elements,I=T.reference,b=T.popper;if(y_(I,b)){u.rects={reference:hC(I,oa(b),u.options.strategy==="fixed"),popper:Wf(b)},u.reset=!1,u.placement=u.options.placement,u.orderedModifiers.forEach(function(oe){return u.modifiersData[oe.name]=Object.assign({},oe.data)});for(var v=0;v<u.orderedModifiers.length;v++){if(u.reset===!0){u.reset=!1,v=-1;continue}var U=u.orderedModifiers[v],$=U.fn,Y=U.options,te=Y===void 0?{}:Y,_e=U.name;typeof $=="function"&&(u=$({state:u,options:te,name:_e,instance:d})||u)}}}},update:pC(function(){return new Promise(function(y){d.forceUpdate(),y(u)})}),destroy:function(){g(),f=!0}};if(!y_(a,l))return d;d.setOptions(c).then(function(y){!f&&c.onFirstUpdate&&c.onFirstUpdate(y)});function m(){u.orderedModifiers.forEach(function(y){var T=y.name,I=y.options,b=I===void 0?{}:I,v=y.effect;if(typeof v=="function"){var U=v({state:u,name:T,instance:d,options:b}),$=function(){};h.push(U||$)}})}function g(){h.forEach(function(y){return y()}),h=[]}return d}}var mC=fc(),gC=[zf,Xf,Kf,jf],yC=fc({defaultModifiers:gC}),EC=[zf,Xf,Kf,jf,_E,dE,mE,uE,pE],Jf=fc({defaultModifiers:EC});const gE=Object.freeze(Object.defineProperty({__proto__:null,afterMain:eE,afterRead:Xy,afterWrite:sE,applyStyles:jf,arrow:uE,auto:uc,basePlacements:Rr,beforeMain:Jy,beforeRead:Yy,beforeWrite:tE,bottom:Kt,clippingParents:zy,computeStyles:Kf,createPopper:Jf,createPopperBase:mC,createPopperLite:yC,detectOverflow:ar,end:sr,eventListeners:zf,flip:dE,hide:pE,left:Rt,main:Zy,modifierPhases:iE,offset:_E,placements:Bf,popper:ki,popperGenerator:fc,popperOffsets:Xf,preventOverflow:mE,read:Qy,reference:Gy,right:zt,start:ri,top:Ct,variationPlacements:yh,viewport:$f,write:nE},Symbol.toStringTag,{value:"Module"}));/*!
  * Bootstrap v5.3.2 (https://getbootstrap.com/)
  * Copyright 2011-2023 The Bootstrap Authors (https://github.com/twbs/bootstrap/graphs/contributors)
  * Licensed under MIT (https://github.com/twbs/bootstrap/blob/main/LICENSE)
  */const fs=new Map,gu={set(t,e,n){fs.has(t)||fs.set(t,new Map);const s=fs.get(t);if(!s.has(e)&&s.size!==0){console.error(`Bootstrap doesn't allow more than one instance per element. Bound instance: ${Array.from(s.keys())[0]}.`);return}s.set(e,n)},get(t,e){return fs.has(t)&&fs.get(t).get(e)||null},remove(t,e){if(!fs.has(t))return;const n=fs.get(t);n.delete(e),n.size===0&&fs.delete(t)}},vC=1e6,TC=1e3,Th="transitionend",yE=t=>(t&&window.CSS&&window.CSS.escape&&(t=t.replace(/#([^\s"#']+)/g,(e,n)=>`#${CSS.escape(n)}`)),t),wC=t=>t==null?`${t}`:Object.prototype.toString.call(t).match(/\s([a-z]+)/i)[1].toLowerCase(),AC=t=>{do t+=Math.floor(Math.random()*vC);while(document.getElementById(t));return t},IC=t=>{if(!t)return 0;let{transitionDuration:e,transitionDelay:n}=window.getComputedStyle(t);const s=Number.parseFloat(e),i=Number.parseFloat(n);return!s&&!i?0:(e=e.split(",")[0],n=n.split(",")[0],(Number.parseFloat(e)+Number.parseFloat(n))*TC)},EE=t=>{t.dispatchEvent(new Event(Th))},Qn=t=>!t||typeof t!="object"?!1:(typeof t.jquery<"u"&&(t=t[0]),typeof t.nodeType<"u"),Cs=t=>Qn(t)?t.jquery?t[0]:t:typeof t=="string"&&t.length>0?document.querySelector(yE(t)):null,Sr=t=>{if(!Qn(t)||t.getClientRects().length===0)return!1;const e=getComputedStyle(t).getPropertyValue("visibility")==="visible",n=t.closest("details:not([open])");if(!n)return e;if(n!==t){const s=t.closest("summary");if(s&&s.parentNode!==n||s===null)return!1}return e},Rs=t=>!t||t.nodeType!==Node.ELEMENT_NODE||t.classList.contains("disabled")?!0:typeof t.disabled<"u"?t.disabled:t.hasAttribute("disabled")&&t.getAttribute("disabled")!=="false",vE=t=>{if(!document.documentElement.attachShadow)return null;if(typeof t.getRootNode=="function"){const e=t.getRootNode();return e instanceof ShadowRoot?e:null}return t instanceof ShadowRoot?t:t.parentNode?vE(t.parentNode):null},wl=()=>{},aa=t=>{t.offsetHeight},TE=()=>window.jQuery&&!document.body.hasAttribute("data-bs-no-jquery")?window.jQuery:null,yu=[],bC=t=>{document.readyState==="loading"?(yu.length||document.addEventListener("DOMContentLoaded",()=>{for(const e of yu)e()}),yu.push(t)):t()},nn=()=>document.documentElement.dir==="rtl",on=t=>{bC(()=>{const e=TE();if(e){const n=t.NAME,s=e.fn[n];e.fn[n]=t.jQueryInterface,e.fn[n].Constructor=t,e.fn[n].noConflict=()=>(e.fn[n]=s,t.jQueryInterface)}})},Dt=(t,e=[],n=t)=>typeof t=="function"?t(...e):n,wE=(t,e,n=!0)=>{if(!n){Dt(t);return}const s=5,i=IC(e)+s;let r=!1;const o=({target:a})=>{a===e&&(r=!0,e.removeEventListener(Th,o),Dt(t))};e.addEventListener(Th,o),setTimeout(()=>{r||EE(e)},i)},Zf=(t,e,n,s)=>{const i=t.length;let r=t.indexOf(e);return r===-1?!n&&s?t[i-1]:t[0]:(r+=n?1:-1,s&&(r=(r+i)%i),t[Math.max(0,Math.min(r,i-1))])},CC=/[^.]*(?=\..*)\.|.*/,RC=/\..*/,SC=/::\d+$/,Eu={};let E_=1;const AE={mouseenter:"mouseover",mouseleave:"mouseout"},PC=new Set(["click","dblclick","mouseup","mousedown","contextmenu","mousewheel","DOMMouseScroll","mouseover","mouseout","mousemove","selectstart","selectend","keydown","keypress","keyup","orientationchange","touchstart","touchmove","touchend","touchcancel","pointerdown","pointermove","pointerup","pointerleave","pointercancel","gesturestart","gesturechange","gestureend","focus","blur","change","reset","select","submit","focusin","focusout","load","unload","beforeunload","resize","move","DOMContentLoaded","readystatechange","error","abort","scroll"]);function IE(t,e){return e&&`${e}::${E_++}`||t.uidEvent||E_++}function bE(t){const e=IE(t);return t.uidEvent=e,Eu[e]=Eu[e]||{},Eu[e]}function NC(t,e){return function n(s){return ed(s,{delegateTarget:t}),n.oneOff&&S.off(t,s.type,e),e.apply(t,[s])}}function OC(t,e,n){return function s(i){const r=t.querySelectorAll(e);for(let{target:o}=i;o&&o!==this;o=o.parentNode)for(const a of r)if(a===o)return ed(i,{delegateTarget:o}),s.oneOff&&S.off(t,i.type,e,n),n.apply(o,[i])}}function CE(t,e,n=null){return Object.values(t).find(s=>s.callable===e&&s.delegationSelector===n)}function RE(t,e,n){const s=typeof e=="string",i=s?n:e||n;let r=SE(t);return PC.has(r)||(r=t),[s,i,r]}function v_(t,e,n,s,i){if(typeof e!="string"||!t)return;let[r,o,a]=RE(e,n,s);e in AE&&(o=(m=>function(g){if(!g.relatedTarget||g.relatedTarget!==g.delegateTarget&&!g.delegateTarget.contains(g.relatedTarget))return m.call(this,g)})(o));const l=bE(t),c=l[a]||(l[a]={}),u=CE(c,o,r?n:null);if(u){u.oneOff=u.oneOff&&i;return}const h=IE(o,e.replace(CC,"")),f=r?OC(t,n,o):NC(t,o);f.delegationSelector=r?n:null,f.callable=o,f.oneOff=i,f.uidEvent=h,c[h]=f,t.addEventListener(a,f,r)}function wh(t,e,n,s,i){const r=CE(e[n],s,i);r&&(t.removeEventListener(n,r,!!i),delete e[n][r.uidEvent])}function DC(t,e,n,s){const i=e[n]||{};for(const[r,o]of Object.entries(i))r.includes(s)&&wh(t,e,n,o.callable,o.delegationSelector)}function SE(t){return t=t.replace(RC,""),AE[t]||t}const S={on(t,e,n,s){v_(t,e,n,s,!1)},one(t,e,n,s){v_(t,e,n,s,!0)},off(t,e,n,s){if(typeof e!="string"||!t)return;const[i,r,o]=RE(e,n,s),a=o!==e,l=bE(t),c=l[o]||{},u=e.startsWith(".");if(typeof r<"u"){if(!Object.keys(c).length)return;wh(t,l,o,r,i?n:null);return}if(u)for(const h of Object.keys(l))DC(t,l,h,e.slice(1));for(const[h,f]of Object.entries(c)){const d=h.replace(SC,"");(!a||e.includes(d))&&wh(t,l,o,f.callable,f.delegationSelector)}},trigger(t,e,n){if(typeof e!="string"||!t)return null;const s=TE(),i=SE(e),r=e!==i;let o=null,a=!0,l=!0,c=!1;r&&s&&(o=s.Event(e,n),s(t).trigger(o),a=!o.isPropagationStopped(),l=!o.isImmediatePropagationStopped(),c=o.isDefaultPrevented());const u=ed(new Event(e,{bubbles:a,cancelable:!0}),n);return c&&u.preventDefault(),l&&t.dispatchEvent(u),u.defaultPrevented&&o&&o.preventDefault(),u}};function ed(t,e={}){for(const[n,s]of Object.entries(e))try{t[n]=s}catch{Object.defineProperty(t,n,{configurable:!0,get(){return s}})}return t}function T_(t){if(t==="true")return!0;if(t==="false")return!1;if(t===Number(t).toString())return Number(t);if(t===""||t==="null")return null;if(typeof t!="string")return t;try{return JSON.parse(decodeURIComponent(t))}catch{return t}}function vu(t){return t.replace(/[A-Z]/g,e=>`-${e.toLowerCase()}`)}const Xn={setDataAttribute(t,e,n){t.setAttribute(`data-bs-${vu(e)}`,n)},removeDataAttribute(t,e){t.removeAttribute(`data-bs-${vu(e)}`)},getDataAttributes(t){if(!t)return{};const e={},n=Object.keys(t.dataset).filter(s=>s.startsWith("bs")&&!s.startsWith("bsConfig"));for(const s of n){let i=s.replace(/^bs/,"");i=i.charAt(0).toLowerCase()+i.slice(1,i.length),e[i]=T_(t.dataset[s])}return e},getDataAttribute(t,e){return T_(t.getAttribute(`data-bs-${vu(e)}`))}};class la{static get Default(){return{}}static get DefaultType(){return{}}static get NAME(){throw new Error('You have to implement the static method "NAME", for each component!')}_getConfig(e){return e=this._mergeConfigObj(e),e=this._configAfterMerge(e),this._typeCheckConfig(e),e}_configAfterMerge(e){return e}_mergeConfigObj(e,n){const s=Qn(n)?Xn.getDataAttribute(n,"config"):{};return{...this.constructor.Default,...typeof s=="object"?s:{},...Qn(n)?Xn.getDataAttributes(n):{},...typeof e=="object"?e:{}}}_typeCheckConfig(e,n=this.constructor.DefaultType){for(const[s,i]of Object.entries(n)){const r=e[s],o=Qn(r)?"element":wC(r);if(!new RegExp(i).test(o))throw new TypeError(`${this.constructor.NAME.toUpperCase()}: Option "${s}" provided type "${o}" but expected type "${i}".`)}}}const kC="5.3.2";class wn extends la{constructor(e,n){super(),e=Cs(e),e&&(this._element=e,this._config=this._getConfig(n),gu.set(this._element,this.constructor.DATA_KEY,this))}dispose(){gu.remove(this._element,this.constructor.DATA_KEY),S.off(this._element,this.constructor.EVENT_KEY);for(const e of Object.getOwnPropertyNames(this))this[e]=null}_queueCallback(e,n,s=!0){wE(e,n,s)}_getConfig(e){return e=this._mergeConfigObj(e,this._element),e=this._configAfterMerge(e),this._typeCheckConfig(e),e}static getInstance(e){return gu.get(Cs(e),this.DATA_KEY)}static getOrCreateInstance(e,n={}){return this.getInstance(e)||new this(e,typeof n=="object"?n:null)}static get VERSION(){return kC}static get DATA_KEY(){return`bs.${this.NAME}`}static get EVENT_KEY(){return`.${this.DATA_KEY}`}static eventName(e){return`${e}${this.EVENT_KEY}`}}const Tu=t=>{let e=t.getAttribute("data-bs-target");if(!e||e==="#"){let n=t.getAttribute("href");if(!n||!n.includes("#")&&!n.startsWith("."))return null;n.includes("#")&&!n.startsWith("#")&&(n=`#${n.split("#")[1]}`),e=n&&n!=="#"?yE(n.trim()):null}return e},z={find(t,e=document.documentElement){return[].concat(...Element.prototype.querySelectorAll.call(e,t))},findOne(t,e=document.documentElement){return Element.prototype.querySelector.call(e,t)},children(t,e){return[].concat(...t.children).filter(n=>n.matches(e))},parents(t,e){const n=[];let s=t.parentNode.closest(e);for(;s;)n.push(s),s=s.parentNode.closest(e);return n},prev(t,e){let n=t.previousElementSibling;for(;n;){if(n.matches(e))return[n];n=n.previousElementSibling}return[]},next(t,e){let n=t.nextElementSibling;for(;n;){if(n.matches(e))return[n];n=n.nextElementSibling}return[]},focusableChildren(t){const e=["a","button","input","textarea","select","details","[tabindex]",'[contenteditable="true"]'].map(n=>`${n}:not([tabindex^="-"])`).join(",");return this.find(e,t).filter(n=>!Rs(n)&&Sr(n))},getSelectorFromElement(t){const e=Tu(t);return e&&z.findOne(e)?e:null},getElementFromSelector(t){const e=Tu(t);return e?z.findOne(e):null},getMultipleElementsFromSelector(t){const e=Tu(t);return e?z.find(e):[]}},dc=(t,e="hide")=>{const n=`click.dismiss${t.EVENT_KEY}`,s=t.NAME;S.on(document,n,`[data-bs-dismiss="${s}"]`,function(i){if(["A","AREA"].includes(this.tagName)&&i.preventDefault(),Rs(this))return;const r=z.getElementFromSelector(this)||this.closest(`.${s}`);t.getOrCreateInstance(r)[e]()})},xC="alert",LC="bs.alert",PE=`.${LC}`,MC=`close${PE}`,VC=`closed${PE}`,FC="fade",UC="show";class pc extends wn{static get NAME(){return xC}close(){if(S.trigger(this._element,MC).defaultPrevented)return;this._element.classList.remove(UC);const n=this._element.classList.contains(FC);this._queueCallback(()=>this._destroyElement(),this._element,n)}_destroyElement(){this._element.remove(),S.trigger(this._element,VC),this.dispose()}static jQueryInterface(e){return this.each(function(){const n=pc.getOrCreateInstance(this);if(typeof e=="string"){if(n[e]===void 0||e.startsWith("_")||e==="constructor")throw new TypeError(`No method named "${e}"`);n[e](this)}})}}dc(pc,"close");on(pc);const $C="button",BC="bs.button",HC=`.${BC}`,jC=".data-api",WC="active",w_='[data-bs-toggle="button"]',qC=`click${HC}${jC}`;class _c extends wn{static get NAME(){return $C}toggle(){this._element.setAttribute("aria-pressed",this._element.classList.toggle(WC))}static jQueryInterface(e){return this.each(function(){const n=_c.getOrCreateInstance(this);e==="toggle"&&n[e]()})}}S.on(document,qC,w_,t=>{t.preventDefault();const e=t.target.closest(w_);_c.getOrCreateInstance(e).toggle()});on(_c);const KC="swipe",Pr=".bs.swipe",zC=`touchstart${Pr}`,GC=`touchmove${Pr}`,YC=`touchend${Pr}`,QC=`pointerdown${Pr}`,XC=`pointerup${Pr}`,JC="touch",ZC="pen",eR="pointer-event",tR=40,nR={endCallback:null,leftCallback:null,rightCallback:null},sR={endCallback:"(function|null)",leftCallback:"(function|null)",rightCallback:"(function|null)"};class Al extends la{constructor(e,n){super(),this._element=e,!(!e||!Al.isSupported())&&(this._config=this._getConfig(n),this._deltaX=0,this._supportPointerEvents=!!window.PointerEvent,this._initEvents())}static get Default(){return nR}static get DefaultType(){return sR}static get NAME(){return KC}dispose(){S.off(this._element,Pr)}_start(e){if(!this._supportPointerEvents){this._deltaX=e.touches[0].clientX;return}this._eventIsPointerPenTouch(e)&&(this._deltaX=e.clientX)}_end(e){this._eventIsPointerPenTouch(e)&&(this._deltaX=e.clientX-this._deltaX),this._handleSwipe(),Dt(this._config.endCallback)}_move(e){this._deltaX=e.touches&&e.touches.length>1?0:e.touches[0].clientX-this._deltaX}_handleSwipe(){const e=Math.abs(this._deltaX);if(e<=tR)return;const n=e/this._deltaX;this._deltaX=0,n&&Dt(n>0?this._config.rightCallback:this._config.leftCallback)}_initEvents(){this._supportPointerEvents?(S.on(this._element,QC,e=>this._start(e)),S.on(this._element,XC,e=>this._end(e)),this._element.classList.add(eR)):(S.on(this._element,zC,e=>this._start(e)),S.on(this._element,GC,e=>this._move(e)),S.on(this._element,YC,e=>this._end(e)))}_eventIsPointerPenTouch(e){return this._supportPointerEvents&&(e.pointerType===ZC||e.pointerType===JC)}static isSupported(){return"ontouchstart"in document.documentElement||navigator.maxTouchPoints>0}}const iR="carousel",rR="bs.carousel",Ls=`.${rR}`,NE=".data-api",oR="ArrowLeft",aR="ArrowRight",lR=500,zr="next",Si="prev",xi="left",ll="right",cR=`slide${Ls}`,wu=`slid${Ls}`,uR=`keydown${Ls}`,hR=`mouseenter${Ls}`,fR=`mouseleave${Ls}`,dR=`dragstart${Ls}`,pR=`load${Ls}${NE}`,_R=`click${Ls}${NE}`,OE="carousel",La="active",mR="slide",gR="carousel-item-end",yR="carousel-item-start",ER="carousel-item-next",vR="carousel-item-prev",DE=".active",kE=".carousel-item",TR=DE+kE,wR=".carousel-item img",AR=".carousel-indicators",IR="[data-bs-slide], [data-bs-slide-to]",bR='[data-bs-ride="carousel"]',CR={[oR]:ll,[aR]:xi},RR={interval:5e3,keyboard:!0,pause:"hover",ride:!1,touch:!0,wrap:!0},SR={interval:"(number|boolean)",keyboard:"boolean",pause:"(string|boolean)",ride:"(boolean|string)",touch:"boolean",wrap:"boolean"};class ca extends wn{constructor(e,n){super(e,n),this._interval=null,this._activeElement=null,this._isSliding=!1,this.touchTimeout=null,this._swipeHelper=null,this._indicatorsElement=z.findOne(AR,this._element),this._addEventListeners(),this._config.ride===OE&&this.cycle()}static get Default(){return RR}static get DefaultType(){return SR}static get NAME(){return iR}next(){this._slide(zr)}nextWhenVisible(){!document.hidden&&Sr(this._element)&&this.next()}prev(){this._slide(Si)}pause(){this._isSliding&&EE(this._element),this._clearInterval()}cycle(){this._clearInterval(),this._updateInterval(),this._interval=setInterval(()=>this.nextWhenVisible(),this._config.interval)}_maybeEnableCycle(){if(this._config.ride){if(this._isSliding){S.one(this._element,wu,()=>this.cycle());return}this.cycle()}}to(e){const n=this._getItems();if(e>n.length-1||e<0)return;if(this._isSliding){S.one(this._element,wu,()=>this.to(e));return}const s=this._getItemIndex(this._getActive());if(s===e)return;const i=e>s?zr:Si;this._slide(i,n[e])}dispose(){this._swipeHelper&&this._swipeHelper.dispose(),super.dispose()}_configAfterMerge(e){return e.defaultInterval=e.interval,e}_addEventListeners(){this._config.keyboard&&S.on(this._element,uR,e=>this._keydown(e)),this._config.pause==="hover"&&(S.on(this._element,hR,()=>this.pause()),S.on(this._element,fR,()=>this._maybeEnableCycle())),this._config.touch&&Al.isSupported()&&this._addTouchEventListeners()}_addTouchEventListeners(){for(const s of z.find(wR,this._element))S.on(s,dR,i=>i.preventDefault());const n={leftCallback:()=>this._slide(this._directionToOrder(xi)),rightCallback:()=>this._slide(this._directionToOrder(ll)),endCallback:()=>{this._config.pause==="hover"&&(this.pause(),this.touchTimeout&&clearTimeout(this.touchTimeout),this.touchTimeout=setTimeout(()=>this._maybeEnableCycle(),lR+this._config.interval))}};this._swipeHelper=new Al(this._element,n)}_keydown(e){if(/input|textarea/i.test(e.target.tagName))return;const n=CR[e.key];n&&(e.preventDefault(),this._slide(this._directionToOrder(n)))}_getItemIndex(e){return this._getItems().indexOf(e)}_setActiveIndicatorElement(e){if(!this._indicatorsElement)return;const n=z.findOne(DE,this._indicatorsElement);n.classList.remove(La),n.removeAttribute("aria-current");const s=z.findOne(`[data-bs-slide-to="${e}"]`,this._indicatorsElement);s&&(s.classList.add(La),s.setAttribute("aria-current","true"))}_updateInterval(){const e=this._activeElement||this._getActive();if(!e)return;const n=Number.parseInt(e.getAttribute("data-bs-interval"),10);this._config.interval=n||this._config.defaultInterval}_slide(e,n=null){if(this._isSliding)return;const s=this._getActive(),i=e===zr,r=n||Zf(this._getItems(),s,i,this._config.wrap);if(r===s)return;const o=this._getItemIndex(r),a=d=>S.trigger(this._element,d,{relatedTarget:r,direction:this._orderToDirection(e),from:this._getItemIndex(s),to:o});if(a(cR).defaultPrevented||!s||!r)return;const c=!!this._interval;this.pause(),this._isSliding=!0,this._setActiveIndicatorElement(o),this._activeElement=r;const u=i?yR:gR,h=i?ER:vR;r.classList.add(h),aa(r),s.classList.add(u),r.classList.add(u);const f=()=>{r.classList.remove(u,h),r.classList.add(La),s.classList.remove(La,h,u),this._isSliding=!1,a(wu)};this._queueCallback(f,s,this._isAnimated()),c&&this.cycle()}_isAnimated(){return this._element.classList.contains(mR)}_getActive(){return z.findOne(TR,this._element)}_getItems(){return z.find(kE,this._element)}_clearInterval(){this._interval&&(clearInterval(this._interval),this._interval=null)}_directionToOrder(e){return nn()?e===xi?Si:zr:e===xi?zr:Si}_orderToDirection(e){return nn()?e===Si?xi:ll:e===Si?ll:xi}static jQueryInterface(e){return this.each(function(){const n=ca.getOrCreateInstance(this,e);if(typeof e=="number"){n.to(e);return}if(typeof e=="string"){if(n[e]===void 0||e.startsWith("_")||e==="constructor")throw new TypeError(`No method named "${e}"`);n[e]()}})}}S.on(document,_R,IR,function(t){const e=z.getElementFromSelector(this);if(!e||!e.classList.contains(OE))return;t.preventDefault();const n=ca.getOrCreateInstance(e),s=this.getAttribute("data-bs-slide-to");if(s){n.to(s),n._maybeEnableCycle();return}if(Xn.getDataAttribute(this,"slide")==="next"){n.next(),n._maybeEnableCycle();return}n.prev(),n._maybeEnableCycle()});S.on(window,pR,()=>{const t=z.find(bR);for(const e of t)ca.getOrCreateInstance(e)});on(ca);const PR="collapse",NR="bs.collapse",ua=`.${NR}`,OR=".data-api",DR=`show${ua}`,kR=`shown${ua}`,xR=`hide${ua}`,LR=`hidden${ua}`,MR=`click${ua}${OR}`,Au="show",Bi="collapse",Ma="collapsing",VR="collapsed",FR=`:scope .${Bi} .${Bi}`,UR="collapse-horizontal",$R="width",BR="height",HR=".collapse.show, .collapse.collapsing",Ah='[data-bs-toggle="collapse"]',jR={parent:null,toggle:!0},WR={parent:"(null|element)",toggle:"boolean"};class ko extends wn{constructor(e,n){super(e,n),this._isTransitioning=!1,this._triggerArray=[];const s=z.find(Ah);for(const i of s){const r=z.getSelectorFromElement(i),o=z.find(r).filter(a=>a===this._element);r!==null&&o.length&&this._triggerArray.push(i)}this._initializeChildren(),this._config.parent||this._addAriaAndCollapsedClass(this._triggerArray,this._isShown()),this._config.toggle&&this.toggle()}static get Default(){return jR}static get DefaultType(){return WR}static get NAME(){return PR}toggle(){this._isShown()?this.hide():this.show()}show(){if(this._isTransitioning||this._isShown())return;let e=[];if(this._config.parent&&(e=this._getFirstLevelChildren(HR).filter(a=>a!==this._element).map(a=>ko.getOrCreateInstance(a,{toggle:!1}))),e.length&&e[0]._isTransitioning||S.trigger(this._element,DR).defaultPrevented)return;for(const a of e)a.hide();const s=this._getDimension();this._element.classList.remove(Bi),this._element.classList.add(Ma),this._element.style[s]=0,this._addAriaAndCollapsedClass(this._triggerArray,!0),this._isTransitioning=!0;const i=()=>{this._isTransitioning=!1,this._element.classList.remove(Ma),this._element.classList.add(Bi,Au),this._element.style[s]="",S.trigger(this._element,kR)},o=`scroll${s[0].toUpperCase()+s.slice(1)}`;this._queueCallback(i,this._element,!0),this._element.style[s]=`${this._element[o]}px`}hide(){if(this._isTransitioning||!this._isShown()||S.trigger(this._element,xR).defaultPrevented)return;const n=this._getDimension();this._element.style[n]=`${this._element.getBoundingClientRect()[n]}px`,aa(this._element),this._element.classList.add(Ma),this._element.classList.remove(Bi,Au);for(const i of this._triggerArray){const r=z.getElementFromSelector(i);r&&!this._isShown(r)&&this._addAriaAndCollapsedClass([i],!1)}this._isTransitioning=!0;const s=()=>{this._isTransitioning=!1,this._element.classList.remove(Ma),this._element.classList.add(Bi),S.trigger(this._element,LR)};this._element.style[n]="",this._queueCallback(s,this._element,!0)}_isShown(e=this._element){return e.classList.contains(Au)}_configAfterMerge(e){return e.toggle=!!e.toggle,e.parent=Cs(e.parent),e}_getDimension(){return this._element.classList.contains(UR)?$R:BR}_initializeChildren(){if(!this._config.parent)return;const e=this._getFirstLevelChildren(Ah);for(const n of e){const s=z.getElementFromSelector(n);s&&this._addAriaAndCollapsedClass([n],this._isShown(s))}}_getFirstLevelChildren(e){const n=z.find(FR,this._config.parent);return z.find(e,this._config.parent).filter(s=>!n.includes(s))}_addAriaAndCollapsedClass(e,n){if(e.length)for(const s of e)s.classList.toggle(VR,!n),s.setAttribute("aria-expanded",n)}static jQueryInterface(e){const n={};return typeof e=="string"&&/show|hide/.test(e)&&(n.toggle=!1),this.each(function(){const s=ko.getOrCreateInstance(this,n);if(typeof e=="string"){if(typeof s[e]>"u")throw new TypeError(`No method named "${e}"`);s[e]()}})}}S.on(document,MR,Ah,function(t){(t.target.tagName==="A"||t.delegateTarget&&t.delegateTarget.tagName==="A")&&t.preventDefault();for(const e of z.getMultipleElementsFromSelector(this))ko.getOrCreateInstance(e,{toggle:!1}).toggle()});on(ko);const A_="dropdown",qR="bs.dropdown",Ei=`.${qR}`,td=".data-api",KR="Escape",I_="Tab",zR="ArrowUp",b_="ArrowDown",GR=2,YR=`hide${Ei}`,QR=`hidden${Ei}`,XR=`show${Ei}`,JR=`shown${Ei}`,xE=`click${Ei}${td}`,LE=`keydown${Ei}${td}`,ZR=`keyup${Ei}${td}`,Li="show",eS="dropup",tS="dropend",nS="dropstart",sS="dropup-center",iS="dropdown-center",qs='[data-bs-toggle="dropdown"]:not(.disabled):not(:disabled)',rS=`${qs}.${Li}`,cl=".dropdown-menu",oS=".navbar",aS=".navbar-nav",lS=".dropdown-menu .dropdown-item:not(.disabled):not(:disabled)",cS=nn()?"top-end":"top-start",uS=nn()?"top-start":"top-end",hS=nn()?"bottom-end":"bottom-start",fS=nn()?"bottom-start":"bottom-end",dS=nn()?"left-start":"right-start",pS=nn()?"right-start":"left-start",_S="top",mS="bottom",gS={autoClose:!0,boundary:"clippingParents",display:"dynamic",offset:[0,2],popperConfig:null,reference:"toggle"},yS={autoClose:"(boolean|string)",boundary:"(string|element)",display:"string",offset:"(array|string|function)",popperConfig:"(null|object|function)",reference:"(string|element|object)"};class Ln extends wn{constructor(e,n){super(e,n),this._popper=null,this._parent=this._element.parentNode,this._menu=z.next(this._element,cl)[0]||z.prev(this._element,cl)[0]||z.findOne(cl,this._parent),this._inNavbar=this._detectNavbar()}static get Default(){return gS}static get DefaultType(){return yS}static get NAME(){return A_}toggle(){return this._isShown()?this.hide():this.show()}show(){if(Rs(this._element)||this._isShown())return;const e={relatedTarget:this._element};if(!S.trigger(this._element,XR,e).defaultPrevented){if(this._createPopper(),"ontouchstart"in document.documentElement&&!this._parent.closest(aS))for(const s of[].concat(...document.body.children))S.on(s,"mouseover",wl);this._element.focus(),this._element.setAttribute("aria-expanded",!0),this._menu.classList.add(Li),this._element.classList.add(Li),S.trigger(this._element,JR,e)}}hide(){if(Rs(this._element)||!this._isShown())return;const e={relatedTarget:this._element};this._completeHide(e)}dispose(){this._popper&&this._popper.destroy(),super.dispose()}update(){this._inNavbar=this._detectNavbar(),this._popper&&this._popper.update()}_completeHide(e){if(!S.trigger(this._element,YR,e).defaultPrevented){if("ontouchstart"in document.documentElement)for(const s of[].concat(...document.body.children))S.off(s,"mouseover",wl);this._popper&&this._popper.destroy(),this._menu.classList.remove(Li),this._element.classList.remove(Li),this._element.setAttribute("aria-expanded","false"),Xn.removeDataAttribute(this._menu,"popper"),S.trigger(this._element,QR,e)}}_getConfig(e){if(e=super._getConfig(e),typeof e.reference=="object"&&!Qn(e.reference)&&typeof e.reference.getBoundingClientRect!="function")throw new TypeError(`${A_.toUpperCase()}: Option "reference" provided type "object" without a required "getBoundingClientRect" method.`);return e}_createPopper(){if(typeof gE>"u")throw new TypeError("Bootstrap's dropdowns require Popper (https://popper.js.org)");let e=this._element;this._config.reference==="parent"?e=this._parent:Qn(this._config.reference)?e=Cs(this._config.reference):typeof this._config.reference=="object"&&(e=this._config.reference);const n=this._getPopperConfig();this._popper=Jf(e,this._menu,n)}_isShown(){return this._menu.classList.contains(Li)}_getPlacement(){const e=this._parent;if(e.classList.contains(tS))return dS;if(e.classList.contains(nS))return pS;if(e.classList.contains(sS))return _S;if(e.classList.contains(iS))return mS;const n=getComputedStyle(this._menu).getPropertyValue("--bs-position").trim()==="end";return e.classList.contains(eS)?n?uS:cS:n?fS:hS}_detectNavbar(){return this._element.closest(oS)!==null}_getOffset(){const{offset:e}=this._config;return typeof e=="string"?e.split(",").map(n=>Number.parseInt(n,10)):typeof e=="function"?n=>e(n,this._element):e}_getPopperConfig(){const e={placement:this._getPlacement(),modifiers:[{name:"preventOverflow",options:{boundary:this._config.boundary}},{name:"offset",options:{offset:this._getOffset()}}]};return(this._inNavbar||this._config.display==="static")&&(Xn.setDataAttribute(this._menu,"popper","static"),e.modifiers=[{name:"applyStyles",enabled:!1}]),{...e,...Dt(this._config.popperConfig,[e])}}_selectMenuItem({key:e,target:n}){const s=z.find(lS,this._menu).filter(i=>Sr(i));s.length&&Zf(s,n,e===b_,!s.includes(n)).focus()}static jQueryInterface(e){return this.each(function(){const n=Ln.getOrCreateInstance(this,e);if(typeof e=="string"){if(typeof n[e]>"u")throw new TypeError(`No method named "${e}"`);n[e]()}})}static clearMenus(e){if(e.button===GR||e.type==="keyup"&&e.key!==I_)return;const n=z.find(rS);for(const s of n){const i=Ln.getInstance(s);if(!i||i._config.autoClose===!1)continue;const r=e.composedPath(),o=r.includes(i._menu);if(r.includes(i._element)||i._config.autoClose==="inside"&&!o||i._config.autoClose==="outside"&&o||i._menu.contains(e.target)&&(e.type==="keyup"&&e.key===I_||/input|select|option|textarea|form/i.test(e.target.tagName)))continue;const a={relatedTarget:i._element};e.type==="click"&&(a.clickEvent=e),i._completeHide(a)}}static dataApiKeydownHandler(e){const n=/input|textarea/i.test(e.target.tagName),s=e.key===KR,i=[zR,b_].includes(e.key);if(!i&&!s||n&&!s)return;e.preventDefault();const r=this.matches(qs)?this:z.prev(this,qs)[0]||z.next(this,qs)[0]||z.findOne(qs,e.delegateTarget.parentNode),o=Ln.getOrCreateInstance(r);if(i){e.stopPropagation(),o.show(),o._selectMenuItem(e);return}o._isShown()&&(e.stopPropagation(),o.hide(),r.focus())}}S.on(document,LE,qs,Ln.dataApiKeydownHandler);S.on(document,LE,cl,Ln.dataApiKeydownHandler);S.on(document,xE,Ln.clearMenus);S.on(document,ZR,Ln.clearMenus);S.on(document,xE,qs,function(t){t.preventDefault(),Ln.getOrCreateInstance(this).toggle()});on(Ln);const ME="backdrop",ES="fade",C_="show",R_=`mousedown.bs.${ME}`,vS={className:"modal-backdrop",clickCallback:null,isAnimated:!1,isVisible:!0,rootElement:"body"},TS={className:"string",clickCallback:"(function|null)",isAnimated:"boolean",isVisible:"boolean",rootElement:"(element|string)"};class VE extends la{constructor(e){super(),this._config=this._getConfig(e),this._isAppended=!1,this._element=null}static get Default(){return vS}static get DefaultType(){return TS}static get NAME(){return ME}show(e){if(!this._config.isVisible){Dt(e);return}this._append();const n=this._getElement();this._config.isAnimated&&aa(n),n.classList.add(C_),this._emulateAnimation(()=>{Dt(e)})}hide(e){if(!this._config.isVisible){Dt(e);return}this._getElement().classList.remove(C_),this._emulateAnimation(()=>{this.dispose(),Dt(e)})}dispose(){this._isAppended&&(S.off(this._element,R_),this._element.remove(),this._isAppended=!1)}_getElement(){if(!this._element){const e=document.createElement("div");e.className=this._config.className,this._config.isAnimated&&e.classList.add(ES),this._element=e}return this._element}_configAfterMerge(e){return e.rootElement=Cs(e.rootElement),e}_append(){if(this._isAppended)return;const e=this._getElement();this._config.rootElement.append(e),S.on(e,R_,()=>{Dt(this._config.clickCallback)}),this._isAppended=!0}_emulateAnimation(e){wE(e,this._getElement(),this._config.isAnimated)}}const wS="focustrap",AS="bs.focustrap",Il=`.${AS}`,IS=`focusin${Il}`,bS=`keydown.tab${Il}`,CS="Tab",RS="forward",S_="backward",SS={autofocus:!0,trapElement:null},PS={autofocus:"boolean",trapElement:"element"};class FE extends la{constructor(e){super(),this._config=this._getConfig(e),this._isActive=!1,this._lastTabNavDirection=null}static get Default(){return SS}static get DefaultType(){return PS}static get NAME(){return wS}activate(){this._isActive||(this._config.autofocus&&this._config.trapElement.focus(),S.off(document,Il),S.on(document,IS,e=>this._handleFocusin(e)),S.on(document,bS,e=>this._handleKeydown(e)),this._isActive=!0)}deactivate(){this._isActive&&(this._isActive=!1,S.off(document,Il))}_handleFocusin(e){const{trapElement:n}=this._config;if(e.target===document||e.target===n||n.contains(e.target))return;const s=z.focusableChildren(n);s.length===0?n.focus():this._lastTabNavDirection===S_?s[s.length-1].focus():s[0].focus()}_handleKeydown(e){e.key===CS&&(this._lastTabNavDirection=e.shiftKey?S_:RS)}}const P_=".fixed-top, .fixed-bottom, .is-fixed, .sticky-top",N_=".sticky-top",Va="padding-right",O_="margin-right";class Ih{constructor(){this._element=document.body}getWidth(){const e=document.documentElement.clientWidth;return Math.abs(window.innerWidth-e)}hide(){const e=this.getWidth();this._disableOverFlow(),this._setElementAttributes(this._element,Va,n=>n+e),this._setElementAttributes(P_,Va,n=>n+e),this._setElementAttributes(N_,O_,n=>n-e)}reset(){this._resetElementAttributes(this._element,"overflow"),this._resetElementAttributes(this._element,Va),this._resetElementAttributes(P_,Va),this._resetElementAttributes(N_,O_)}isOverflowing(){return this.getWidth()>0}_disableOverFlow(){this._saveInitialAttribute(this._element,"overflow"),this._element.style.overflow="hidden"}_setElementAttributes(e,n,s){const i=this.getWidth(),r=o=>{if(o!==this._element&&window.innerWidth>o.clientWidth+i)return;this._saveInitialAttribute(o,n);const a=window.getComputedStyle(o).getPropertyValue(n);o.style.setProperty(n,`${s(Number.parseFloat(a))}px`)};this._applyManipulationCallback(e,r)}_saveInitialAttribute(e,n){const s=e.style.getPropertyValue(n);s&&Xn.setDataAttribute(e,n,s)}_resetElementAttributes(e,n){const s=i=>{const r=Xn.getDataAttribute(i,n);if(r===null){i.style.removeProperty(n);return}Xn.removeDataAttribute(i,n),i.style.setProperty(n,r)};this._applyManipulationCallback(e,s)}_applyManipulationCallback(e,n){if(Qn(e)){n(e);return}for(const s of z.find(e,this._element))n(s)}}const NS="modal",OS="bs.modal",sn=`.${OS}`,DS=".data-api",kS="Escape",xS=`hide${sn}`,LS=`hidePrevented${sn}`,UE=`hidden${sn}`,$E=`show${sn}`,MS=`shown${sn}`,VS=`resize${sn}`,FS=`click.dismiss${sn}`,US=`mousedown.dismiss${sn}`,$S=`keydown.dismiss${sn}`,BS=`click${sn}${DS}`,D_="modal-open",HS="fade",k_="show",Iu="modal-static",jS=".modal.show",WS=".modal-dialog",qS=".modal-body",KS='[data-bs-toggle="modal"]',zS={backdrop:!0,focus:!0,keyboard:!0},GS={backdrop:"(boolean|string)",focus:"boolean",keyboard:"boolean"};class lr extends wn{constructor(e,n){super(e,n),this._dialog=z.findOne(WS,this._element),this._backdrop=this._initializeBackDrop(),this._focustrap=this._initializeFocusTrap(),this._isShown=!1,this._isTransitioning=!1,this._scrollBar=new Ih,this._addEventListeners()}static get Default(){return zS}static get DefaultType(){return GS}static get NAME(){return NS}toggle(e){return this._isShown?this.hide():this.show(e)}show(e){this._isShown||this._isTransitioning||S.trigger(this._element,$E,{relatedTarget:e}).defaultPrevented||(this._isShown=!0,this._isTransitioning=!0,this._scrollBar.hide(),document.body.classList.add(D_),this._adjustDialog(),this._backdrop.show(()=>this._showElement(e)))}hide(){!this._isShown||this._isTransitioning||S.trigger(this._element,xS).defaultPrevented||(this._isShown=!1,this._isTransitioning=!0,this._focustrap.deactivate(),this._element.classList.remove(k_),this._queueCallback(()=>this._hideModal(),this._element,this._isAnimated()))}dispose(){S.off(window,sn),S.off(this._dialog,sn),this._backdrop.dispose(),this._focustrap.deactivate(),super.dispose()}handleUpdate(){this._adjustDialog()}_initializeBackDrop(){return new VE({isVisible:!!this._config.backdrop,isAnimated:this._isAnimated()})}_initializeFocusTrap(){return new FE({trapElement:this._element})}_showElement(e){document.body.contains(this._element)||document.body.append(this._element),this._element.style.display="block",this._element.removeAttribute("aria-hidden"),this._element.setAttribute("aria-modal",!0),this._element.setAttribute("role","dialog"),this._element.scrollTop=0;const n=z.findOne(qS,this._dialog);n&&(n.scrollTop=0),aa(this._element),this._element.classList.add(k_);const s=()=>{this._config.focus&&this._focustrap.activate(),this._isTransitioning=!1,S.trigger(this._element,MS,{relatedTarget:e})};this._queueCallback(s,this._dialog,this._isAnimated())}_addEventListeners(){S.on(this._element,$S,e=>{if(e.key===kS){if(this._config.keyboard){this.hide();return}this._triggerBackdropTransition()}}),S.on(window,VS,()=>{this._isShown&&!this._isTransitioning&&this._adjustDialog()}),S.on(this._element,US,e=>{S.one(this._element,FS,n=>{if(!(this._element!==e.target||this._element!==n.target)){if(this._config.backdrop==="static"){this._triggerBackdropTransition();return}this._config.backdrop&&this.hide()}})})}_hideModal(){this._element.style.display="none",this._element.setAttribute("aria-hidden",!0),this._element.removeAttribute("aria-modal"),this._element.removeAttribute("role"),this._isTransitioning=!1,this._backdrop.hide(()=>{document.body.classList.remove(D_),this._resetAdjustments(),this._scrollBar.reset(),S.trigger(this._element,UE)})}_isAnimated(){return this._element.classList.contains(HS)}_triggerBackdropTransition(){if(S.trigger(this._element,LS).defaultPrevented)return;const n=this._element.scrollHeight>document.documentElement.clientHeight,s=this._element.style.overflowY;s==="hidden"||this._element.classList.contains(Iu)||(n||(this._element.style.overflowY="hidden"),this._element.classList.add(Iu),this._queueCallback(()=>{this._element.classList.remove(Iu),this._queueCallback(()=>{this._element.style.overflowY=s},this._dialog)},this._dialog),this._element.focus())}_adjustDialog(){const e=this._element.scrollHeight>document.documentElement.clientHeight,n=this._scrollBar.getWidth(),s=n>0;if(s&&!e){const i=nn()?"paddingLeft":"paddingRight";this._element.style[i]=`${n}px`}if(!s&&e){const i=nn()?"paddingRight":"paddingLeft";this._element.style[i]=`${n}px`}}_resetAdjustments(){this._element.style.paddingLeft="",this._element.style.paddingRight=""}static jQueryInterface(e,n){return this.each(function(){const s=lr.getOrCreateInstance(this,e);if(typeof e=="string"){if(typeof s[e]>"u")throw new TypeError(`No method named "${e}"`);s[e](n)}})}}S.on(document,BS,KS,function(t){const e=z.getElementFromSelector(this);["A","AREA"].includes(this.tagName)&&t.preventDefault(),S.one(e,$E,i=>{i.defaultPrevented||S.one(e,UE,()=>{Sr(this)&&this.focus()})});const n=z.findOne(jS);n&&lr.getInstance(n).hide(),lr.getOrCreateInstance(e).toggle(this)});dc(lr);on(lr);const YS="offcanvas",QS="bs.offcanvas",ls=`.${QS}`,BE=".data-api",XS=`load${ls}${BE}`,JS="Escape",x_="show",L_="showing",M_="hiding",ZS="offcanvas-backdrop",HE=".offcanvas.show",e0=`show${ls}`,t0=`shown${ls}`,n0=`hide${ls}`,V_=`hidePrevented${ls}`,jE=`hidden${ls}`,s0=`resize${ls}`,i0=`click${ls}${BE}`,r0=`keydown.dismiss${ls}`,o0='[data-bs-toggle="offcanvas"]',a0={backdrop:!0,keyboard:!0,scroll:!1},l0={backdrop:"(boolean|string)",keyboard:"boolean",scroll:"boolean"};class Ss extends wn{constructor(e,n){super(e,n),this._isShown=!1,this._backdrop=this._initializeBackDrop(),this._focustrap=this._initializeFocusTrap(),this._addEventListeners()}static get Default(){return a0}static get DefaultType(){return l0}static get NAME(){return YS}toggle(e){return this._isShown?this.hide():this.show(e)}show(e){if(this._isShown||S.trigger(this._element,e0,{relatedTarget:e}).defaultPrevented)return;this._isShown=!0,this._backdrop.show(),this._config.scroll||new Ih().hide(),this._element.setAttribute("aria-modal",!0),this._element.setAttribute("role","dialog"),this._element.classList.add(L_);const s=()=>{(!this._config.scroll||this._config.backdrop)&&this._focustrap.activate(),this._element.classList.add(x_),this._element.classList.remove(L_),S.trigger(this._element,t0,{relatedTarget:e})};this._queueCallback(s,this._element,!0)}hide(){if(!this._isShown||S.trigger(this._element,n0).defaultPrevented)return;this._focustrap.deactivate(),this._element.blur(),this._isShown=!1,this._element.classList.add(M_),this._backdrop.hide();const n=()=>{this._element.classList.remove(x_,M_),this._element.removeAttribute("aria-modal"),this._element.removeAttribute("role"),this._config.scroll||new Ih().reset(),S.trigger(this._element,jE)};this._queueCallback(n,this._element,!0)}dispose(){this._backdrop.dispose(),this._focustrap.deactivate(),super.dispose()}_initializeBackDrop(){const e=()=>{if(this._config.backdrop==="static"){S.trigger(this._element,V_);return}this.hide()},n=!!this._config.backdrop;return new VE({className:ZS,isVisible:n,isAnimated:!0,rootElement:this._element.parentNode,clickCallback:n?e:null})}_initializeFocusTrap(){return new FE({trapElement:this._element})}_addEventListeners(){S.on(this._element,r0,e=>{if(e.key===JS){if(this._config.keyboard){this.hide();return}S.trigger(this._element,V_)}})}static jQueryInterface(e){return this.each(function(){const n=Ss.getOrCreateInstance(this,e);if(typeof e=="string"){if(n[e]===void 0||e.startsWith("_")||e==="constructor")throw new TypeError(`No method named "${e}"`);n[e](this)}})}}S.on(document,i0,o0,function(t){const e=z.getElementFromSelector(this);if(["A","AREA"].includes(this.tagName)&&t.preventDefault(),Rs(this))return;S.one(e,jE,()=>{Sr(this)&&this.focus()});const n=z.findOne(HE);n&&n!==e&&Ss.getInstance(n).hide(),Ss.getOrCreateInstance(e).toggle(this)});S.on(window,XS,()=>{for(const t of z.find(HE))Ss.getOrCreateInstance(t).show()});S.on(window,s0,()=>{for(const t of z.find("[aria-modal][class*=show][class*=offcanvas-]"))getComputedStyle(t).position!=="fixed"&&Ss.getOrCreateInstance(t).hide()});dc(Ss);on(Ss);const c0=/^aria-[\w-]*$/i,WE={"*":["class","dir","id","lang","role",c0],a:["target","href","title","rel"],area:[],b:[],br:[],col:[],code:[],div:[],em:[],hr:[],h1:[],h2:[],h3:[],h4:[],h5:[],h6:[],i:[],img:["src","srcset","alt","title","width","height"],li:[],ol:[],p:[],pre:[],s:[],small:[],span:[],sub:[],sup:[],strong:[],u:[],ul:[]},u0=new Set(["background","cite","href","itemtype","longdesc","poster","src","xlink:href"]),h0=/^(?!javascript:)(?:[a-z0-9+.-]+:|[^&:/?#]*(?:[/?#]|$))/i,f0=(t,e)=>{const n=t.nodeName.toLowerCase();return e.includes(n)?u0.has(n)?!!h0.test(t.nodeValue):!0:e.filter(s=>s instanceof RegExp).some(s=>s.test(n))};function d0(t,e,n){if(!t.length)return t;if(n&&typeof n=="function")return n(t);const i=new window.DOMParser().parseFromString(t,"text/html"),r=[].concat(...i.body.querySelectorAll("*"));for(const o of r){const a=o.nodeName.toLowerCase();if(!Object.keys(e).includes(a)){o.remove();continue}const l=[].concat(...o.attributes),c=[].concat(e["*"]||[],e[a]||[]);for(const u of l)f0(u,c)||o.removeAttribute(u.nodeName)}return i.body.innerHTML}const p0="TemplateFactory",_0={allowList:WE,content:{},extraClass:"",html:!1,sanitize:!0,sanitizeFn:null,template:"<div></div>"},m0={allowList:"object",content:"object",extraClass:"(string|function)",html:"boolean",sanitize:"boolean",sanitizeFn:"(null|function)",template:"string"},g0={entry:"(string|element|function|null)",selector:"(string|element)"};class y0 extends la{constructor(e){super(),this._config=this._getConfig(e)}static get Default(){return _0}static get DefaultType(){return m0}static get NAME(){return p0}getContent(){return Object.values(this._config.content).map(e=>this._resolvePossibleFunction(e)).filter(Boolean)}hasContent(){return this.getContent().length>0}changeContent(e){return this._checkContent(e),this._config.content={...this._config.content,...e},this}toHtml(){const e=document.createElement("div");e.innerHTML=this._maybeSanitize(this._config.template);for(const[i,r]of Object.entries(this._config.content))this._setContent(e,r,i);const n=e.children[0],s=this._resolvePossibleFunction(this._config.extraClass);return s&&n.classList.add(...s.split(" ")),n}_typeCheckConfig(e){super._typeCheckConfig(e),this._checkContent(e.content)}_checkContent(e){for(const[n,s]of Object.entries(e))super._typeCheckConfig({selector:n,entry:s},g0)}_setContent(e,n,s){const i=z.findOne(s,e);if(i){if(n=this._resolvePossibleFunction(n),!n){i.remove();return}if(Qn(n)){this._putElementInTemplate(Cs(n),i);return}if(this._config.html){i.innerHTML=this._maybeSanitize(n);return}i.textContent=n}}_maybeSanitize(e){return this._config.sanitize?d0(e,this._config.allowList,this._config.sanitizeFn):e}_resolvePossibleFunction(e){return Dt(e,[this])}_putElementInTemplate(e,n){if(this._config.html){n.innerHTML="",n.append(e);return}n.textContent=e.textContent}}const E0="tooltip",v0=new Set(["sanitize","allowList","sanitizeFn"]),bu="fade",T0="modal",Fa="show",w0=".tooltip-inner",F_=`.${T0}`,U_="hide.bs.modal",Gr="hover",Cu="focus",A0="click",I0="manual",b0="hide",C0="hidden",R0="show",S0="shown",P0="inserted",N0="click",O0="focusin",D0="focusout",k0="mouseenter",x0="mouseleave",L0={AUTO:"auto",TOP:"top",RIGHT:nn()?"left":"right",BOTTOM:"bottom",LEFT:nn()?"right":"left"},M0={allowList:WE,animation:!0,boundary:"clippingParents",container:!1,customClass:"",delay:0,fallbackPlacements:["top","right","bottom","left"],html:!1,offset:[0,6],placement:"top",popperConfig:null,sanitize:!0,sanitizeFn:null,selector:!1,template:'<div class="tooltip" role="tooltip"><div class="tooltip-arrow"></div><div class="tooltip-inner"></div></div>',title:"",trigger:"hover focus"},V0={allowList:"object",animation:"boolean",boundary:"(string|element)",container:"(string|element|boolean)",customClass:"(string|function)",delay:"(number|object)",fallbackPlacements:"array",html:"boolean",offset:"(array|string|function)",placement:"(string|function)",popperConfig:"(null|object|function)",sanitize:"boolean",sanitizeFn:"(null|function)",selector:"(string|boolean)",template:"string",title:"(string|element|function)",trigger:"string"};class Nr extends wn{constructor(e,n){if(typeof gE>"u")throw new TypeError("Bootstrap's tooltips require Popper (https://popper.js.org)");super(e,n),this._isEnabled=!0,this._timeout=0,this._isHovered=null,this._activeTrigger={},this._popper=null,this._templateFactory=null,this._newContent=null,this.tip=null,this._setListeners(),this._config.selector||this._fixTitle()}static get Default(){return M0}static get DefaultType(){return V0}static get NAME(){return E0}enable(){this._isEnabled=!0}disable(){this._isEnabled=!1}toggleEnabled(){this._isEnabled=!this._isEnabled}toggle(){if(this._isEnabled){if(this._activeTrigger.click=!this._activeTrigger.click,this._isShown()){this._leave();return}this._enter()}}dispose(){clearTimeout(this._timeout),S.off(this._element.closest(F_),U_,this._hideModalHandler),this._element.getAttribute("data-bs-original-title")&&this._element.setAttribute("title",this._element.getAttribute("data-bs-original-title")),this._disposePopper(),super.dispose()}show(){if(this._element.style.display==="none")throw new Error("Please use show on visible elements");if(!(this._isWithContent()&&this._isEnabled))return;const e=S.trigger(this._element,this.constructor.eventName(R0)),s=(vE(this._element)||this._element.ownerDocument.documentElement).contains(this._element);if(e.defaultPrevented||!s)return;this._disposePopper();const i=this._getTipElement();this._element.setAttribute("aria-describedby",i.getAttribute("id"));const{container:r}=this._config;if(this._element.ownerDocument.documentElement.contains(this.tip)||(r.append(i),S.trigger(this._element,this.constructor.eventName(P0))),this._popper=this._createPopper(i),i.classList.add(Fa),"ontouchstart"in document.documentElement)for(const a of[].concat(...document.body.children))S.on(a,"mouseover",wl);const o=()=>{S.trigger(this._element,this.constructor.eventName(S0)),this._isHovered===!1&&this._leave(),this._isHovered=!1};this._queueCallback(o,this.tip,this._isAnimated())}hide(){if(!this._isShown()||S.trigger(this._element,this.constructor.eventName(b0)).defaultPrevented)return;if(this._getTipElement().classList.remove(Fa),"ontouchstart"in document.documentElement)for(const i of[].concat(...document.body.children))S.off(i,"mouseover",wl);this._activeTrigger[A0]=!1,this._activeTrigger[Cu]=!1,this._activeTrigger[Gr]=!1,this._isHovered=null;const s=()=>{this._isWithActiveTrigger()||(this._isHovered||this._disposePopper(),this._element.removeAttribute("aria-describedby"),S.trigger(this._element,this.constructor.eventName(C0)))};this._queueCallback(s,this.tip,this._isAnimated())}update(){this._popper&&this._popper.update()}_isWithContent(){return!!this._getTitle()}_getTipElement(){return this.tip||(this.tip=this._createTipElement(this._newContent||this._getContentForTemplate())),this.tip}_createTipElement(e){const n=this._getTemplateFactory(e).toHtml();if(!n)return null;n.classList.remove(bu,Fa),n.classList.add(`bs-${this.constructor.NAME}-auto`);const s=AC(this.constructor.NAME).toString();return n.setAttribute("id",s),this._isAnimated()&&n.classList.add(bu),n}setContent(e){this._newContent=e,this._isShown()&&(this._disposePopper(),this.show())}_getTemplateFactory(e){return this._templateFactory?this._templateFactory.changeContent(e):this._templateFactory=new y0({...this._config,content:e,extraClass:this._resolvePossibleFunction(this._config.customClass)}),this._templateFactory}_getContentForTemplate(){return{[w0]:this._getTitle()}}_getTitle(){return this._resolvePossibleFunction(this._config.title)||this._element.getAttribute("data-bs-original-title")}_initializeOnDelegatedTarget(e){return this.constructor.getOrCreateInstance(e.delegateTarget,this._getDelegateConfig())}_isAnimated(){return this._config.animation||this.tip&&this.tip.classList.contains(bu)}_isShown(){return this.tip&&this.tip.classList.contains(Fa)}_createPopper(e){const n=Dt(this._config.placement,[this,e,this._element]),s=L0[n.toUpperCase()];return Jf(this._element,e,this._getPopperConfig(s))}_getOffset(){const{offset:e}=this._config;return typeof e=="string"?e.split(",").map(n=>Number.parseInt(n,10)):typeof e=="function"?n=>e(n,this._element):e}_resolvePossibleFunction(e){return Dt(e,[this._element])}_getPopperConfig(e){const n={placement:e,modifiers:[{name:"flip",options:{fallbackPlacements:this._config.fallbackPlacements}},{name:"offset",options:{offset:this._getOffset()}},{name:"preventOverflow",options:{boundary:this._config.boundary}},{name:"arrow",options:{element:`.${this.constructor.NAME}-arrow`}},{name:"preSetPlacement",enabled:!0,phase:"beforeMain",fn:s=>{this._getTipElement().setAttribute("data-popper-placement",s.state.placement)}}]};return{...n,...Dt(this._config.popperConfig,[n])}}_setListeners(){const e=this._config.trigger.split(" ");for(const n of e)if(n==="click")S.on(this._element,this.constructor.eventName(N0),this._config.selector,s=>{this._initializeOnDelegatedTarget(s).toggle()});else if(n!==I0){const s=n===Gr?this.constructor.eventName(k0):this.constructor.eventName(O0),i=n===Gr?this.constructor.eventName(x0):this.constructor.eventName(D0);S.on(this._element,s,this._config.selector,r=>{const o=this._initializeOnDelegatedTarget(r);o._activeTrigger[r.type==="focusin"?Cu:Gr]=!0,o._enter()}),S.on(this._element,i,this._config.selector,r=>{const o=this._initializeOnDelegatedTarget(r);o._activeTrigger[r.type==="focusout"?Cu:Gr]=o._element.contains(r.relatedTarget),o._leave()})}this._hideModalHandler=()=>{this._element&&this.hide()},S.on(this._element.closest(F_),U_,this._hideModalHandler)}_fixTitle(){const e=this._element.getAttribute("title");e&&(!this._element.getAttribute("aria-label")&&!this._element.textContent.trim()&&this._element.setAttribute("aria-label",e),this._element.setAttribute("data-bs-original-title",e),this._element.removeAttribute("title"))}_enter(){if(this._isShown()||this._isHovered){this._isHovered=!0;return}this._isHovered=!0,this._setTimeout(()=>{this._isHovered&&this.show()},this._config.delay.show)}_leave(){this._isWithActiveTrigger()||(this._isHovered=!1,this._setTimeout(()=>{this._isHovered||this.hide()},this._config.delay.hide))}_setTimeout(e,n){clearTimeout(this._timeout),this._timeout=setTimeout(e,n)}_isWithActiveTrigger(){return Object.values(this._activeTrigger).includes(!0)}_getConfig(e){const n=Xn.getDataAttributes(this._element);for(const s of Object.keys(n))v0.has(s)&&delete n[s];return e={...n,...typeof e=="object"&&e?e:{}},e=this._mergeConfigObj(e),e=this._configAfterMerge(e),this._typeCheckConfig(e),e}_configAfterMerge(e){return e.container=e.container===!1?document.body:Cs(e.container),typeof e.delay=="number"&&(e.delay={show:e.delay,hide:e.delay}),typeof e.title=="number"&&(e.title=e.title.toString()),typeof e.content=="number"&&(e.content=e.content.toString()),e}_getDelegateConfig(){const e={};for(const[n,s]of Object.entries(this._config))this.constructor.Default[n]!==s&&(e[n]=s);return e.selector=!1,e.trigger="manual",e}_disposePopper(){this._popper&&(this._popper.destroy(),this._popper=null),this.tip&&(this.tip.remove(),this.tip=null)}static jQueryInterface(e){return this.each(function(){const n=Nr.getOrCreateInstance(this,e);if(typeof e=="string"){if(typeof n[e]>"u")throw new TypeError(`No method named "${e}"`);n[e]()}})}}on(Nr);const F0="popover",U0=".popover-header",$0=".popover-body",B0={...Nr.Default,content:"",offset:[0,8],placement:"right",template:'<div class="popover" role="tooltip"><div class="popover-arrow"></div><h3 class="popover-header"></h3><div class="popover-body"></div></div>',trigger:"click"},H0={...Nr.DefaultType,content:"(null|string|element|function)"};class nd extends Nr{static get Default(){return B0}static get DefaultType(){return H0}static get NAME(){return F0}_isWithContent(){return this._getTitle()||this._getContent()}_getContentForTemplate(){return{[U0]:this._getTitle(),[$0]:this._getContent()}}_getContent(){return this._resolvePossibleFunction(this._config.content)}static jQueryInterface(e){return this.each(function(){const n=nd.getOrCreateInstance(this,e);if(typeof e=="string"){if(typeof n[e]>"u")throw new TypeError(`No method named "${e}"`);n[e]()}})}}on(nd);const j0="scrollspy",W0="bs.scrollspy",sd=`.${W0}`,q0=".data-api",K0=`activate${sd}`,$_=`click${sd}`,z0=`load${sd}${q0}`,G0="dropdown-item",Pi="active",Y0='[data-bs-spy="scroll"]',Ru="[href]",Q0=".nav, .list-group",B_=".nav-link",X0=".nav-item",J0=".list-group-item",Z0=`${B_}, ${X0} > ${B_}, ${J0}`,eP=".dropdown",tP=".dropdown-toggle",nP={offset:null,rootMargin:"0px 0px -25%",smoothScroll:!1,target:null,threshold:[.1,.5,1]},sP={offset:"(number|null)",rootMargin:"string",smoothScroll:"boolean",target:"element",threshold:"array"};class mc extends wn{constructor(e,n){super(e,n),this._targetLinks=new Map,this._observableSections=new Map,this._rootElement=getComputedStyle(this._element).overflowY==="visible"?null:this._element,this._activeTarget=null,this._observer=null,this._previousScrollData={visibleEntryTop:0,parentScrollTop:0},this.refresh()}static get Default(){return nP}static get DefaultType(){return sP}static get NAME(){return j0}refresh(){this._initializeTargetsAndObservables(),this._maybeEnableSmoothScroll(),this._observer?this._observer.disconnect():this._observer=this._getNewObserver();for(const e of this._observableSections.values())this._observer.observe(e)}dispose(){this._observer.disconnect(),super.dispose()}_configAfterMerge(e){return e.target=Cs(e.target)||document.body,e.rootMargin=e.offset?`${e.offset}px 0px -30%`:e.rootMargin,typeof e.threshold=="string"&&(e.threshold=e.threshold.split(",").map(n=>Number.parseFloat(n))),e}_maybeEnableSmoothScroll(){this._config.smoothScroll&&(S.off(this._config.target,$_),S.on(this._config.target,$_,Ru,e=>{const n=this._observableSections.get(e.target.hash);if(n){e.preventDefault();const s=this._rootElement||window,i=n.offsetTop-this._element.offsetTop;if(s.scrollTo){s.scrollTo({top:i,behavior:"smooth"});return}s.scrollTop=i}}))}_getNewObserver(){const e={root:this._rootElement,threshold:this._config.threshold,rootMargin:this._config.rootMargin};return new IntersectionObserver(n=>this._observerCallback(n),e)}_observerCallback(e){const n=o=>this._targetLinks.get(`#${o.target.id}`),s=o=>{this._previousScrollData.visibleEntryTop=o.target.offsetTop,this._process(n(o))},i=(this._rootElement||document.documentElement).scrollTop,r=i>=this._previousScrollData.parentScrollTop;this._previousScrollData.parentScrollTop=i;for(const o of e){if(!o.isIntersecting){this._activeTarget=null,this._clearActiveClass(n(o));continue}const a=o.target.offsetTop>=this._previousScrollData.visibleEntryTop;if(r&&a){if(s(o),!i)return;continue}!r&&!a&&s(o)}}_initializeTargetsAndObservables(){this._targetLinks=new Map,this._observableSections=new Map;const e=z.find(Ru,this._config.target);for(const n of e){if(!n.hash||Rs(n))continue;const s=z.findOne(decodeURI(n.hash),this._element);Sr(s)&&(this._targetLinks.set(decodeURI(n.hash),n),this._observableSections.set(n.hash,s))}}_process(e){this._activeTarget!==e&&(this._clearActiveClass(this._config.target),this._activeTarget=e,e.classList.add(Pi),this._activateParents(e),S.trigger(this._element,K0,{relatedTarget:e}))}_activateParents(e){if(e.classList.contains(G0)){z.findOne(tP,e.closest(eP)).classList.add(Pi);return}for(const n of z.parents(e,Q0))for(const s of z.prev(n,Z0))s.classList.add(Pi)}_clearActiveClass(e){e.classList.remove(Pi);const n=z.find(`${Ru}.${Pi}`,e);for(const s of n)s.classList.remove(Pi)}static jQueryInterface(e){return this.each(function(){const n=mc.getOrCreateInstance(this,e);if(typeof e=="string"){if(n[e]===void 0||e.startsWith("_")||e==="constructor")throw new TypeError(`No method named "${e}"`);n[e]()}})}}S.on(window,z0,()=>{for(const t of z.find(Y0))mc.getOrCreateInstance(t)});on(mc);const iP="tab",rP="bs.tab",vi=`.${rP}`,oP=`hide${vi}`,aP=`hidden${vi}`,lP=`show${vi}`,cP=`shown${vi}`,uP=`click${vi}`,hP=`keydown${vi}`,fP=`load${vi}`,dP="ArrowLeft",H_="ArrowRight",pP="ArrowUp",j_="ArrowDown",Su="Home",W_="End",Ks="active",q_="fade",Pu="show",_P="dropdown",qE=".dropdown-toggle",mP=".dropdown-menu",Nu=`:not(${qE})`,gP='.list-group, .nav, [role="tablist"]',yP=".nav-item, .list-group-item",EP=`.nav-link${Nu}, .list-group-item${Nu}, [role="tab"]${Nu}`,KE='[data-bs-toggle="tab"], [data-bs-toggle="pill"], [data-bs-toggle="list"]',Ou=`${EP}, ${KE}`,vP=`.${Ks}[data-bs-toggle="tab"], .${Ks}[data-bs-toggle="pill"], .${Ks}[data-bs-toggle="list"]`;class cr extends wn{constructor(e){super(e),this._parent=this._element.closest(gP),this._parent&&(this._setInitialAttributes(this._parent,this._getChildren()),S.on(this._element,hP,n=>this._keydown(n)))}static get NAME(){return iP}show(){const e=this._element;if(this._elemIsActive(e))return;const n=this._getActiveElem(),s=n?S.trigger(n,oP,{relatedTarget:e}):null;S.trigger(e,lP,{relatedTarget:n}).defaultPrevented||s&&s.defaultPrevented||(this._deactivate(n,e),this._activate(e,n))}_activate(e,n){if(!e)return;e.classList.add(Ks),this._activate(z.getElementFromSelector(e));const s=()=>{if(e.getAttribute("role")!=="tab"){e.classList.add(Pu);return}e.removeAttribute("tabindex"),e.setAttribute("aria-selected",!0),this._toggleDropDown(e,!0),S.trigger(e,cP,{relatedTarget:n})};this._queueCallback(s,e,e.classList.contains(q_))}_deactivate(e,n){if(!e)return;e.classList.remove(Ks),e.blur(),this._deactivate(z.getElementFromSelector(e));const s=()=>{if(e.getAttribute("role")!=="tab"){e.classList.remove(Pu);return}e.setAttribute("aria-selected",!1),e.setAttribute("tabindex","-1"),this._toggleDropDown(e,!1),S.trigger(e,aP,{relatedTarget:n})};this._queueCallback(s,e,e.classList.contains(q_))}_keydown(e){if(![dP,H_,pP,j_,Su,W_].includes(e.key))return;e.stopPropagation(),e.preventDefault();const n=this._getChildren().filter(i=>!Rs(i));let s;if([Su,W_].includes(e.key))s=n[e.key===Su?0:n.length-1];else{const i=[H_,j_].includes(e.key);s=Zf(n,e.target,i,!0)}s&&(s.focus({preventScroll:!0}),cr.getOrCreateInstance(s).show())}_getChildren(){return z.find(Ou,this._parent)}_getActiveElem(){return this._getChildren().find(e=>this._elemIsActive(e))||null}_setInitialAttributes(e,n){this._setAttributeIfNotExists(e,"role","tablist");for(const s of n)this._setInitialAttributesOnChild(s)}_setInitialAttributesOnChild(e){e=this._getInnerElement(e);const n=this._elemIsActive(e),s=this._getOuterElement(e);e.setAttribute("aria-selected",n),s!==e&&this._setAttributeIfNotExists(s,"role","presentation"),n||e.setAttribute("tabindex","-1"),this._setAttributeIfNotExists(e,"role","tab"),this._setInitialAttributesOnTargetPanel(e)}_setInitialAttributesOnTargetPanel(e){const n=z.getElementFromSelector(e);n&&(this._setAttributeIfNotExists(n,"role","tabpanel"),e.id&&this._setAttributeIfNotExists(n,"aria-labelledby",`${e.id}`))}_toggleDropDown(e,n){const s=this._getOuterElement(e);if(!s.classList.contains(_P))return;const i=(r,o)=>{const a=z.findOne(r,s);a&&a.classList.toggle(o,n)};i(qE,Ks),i(mP,Pu),s.setAttribute("aria-expanded",n)}_setAttributeIfNotExists(e,n,s){e.hasAttribute(n)||e.setAttribute(n,s)}_elemIsActive(e){return e.classList.contains(Ks)}_getInnerElement(e){return e.matches(Ou)?e:z.findOne(Ou,e)}_getOuterElement(e){return e.closest(yP)||e}static jQueryInterface(e){return this.each(function(){const n=cr.getOrCreateInstance(this);if(typeof e=="string"){if(n[e]===void 0||e.startsWith("_")||e==="constructor")throw new TypeError(`No method named "${e}"`);n[e]()}})}}S.on(document,uP,KE,function(t){["A","AREA"].includes(this.tagName)&&t.preventDefault(),!Rs(this)&&cr.getOrCreateInstance(this).show()});S.on(window,fP,()=>{for(const t of z.find(vP))cr.getOrCreateInstance(t)});on(cr);const TP="toast",wP="bs.toast",Ms=`.${wP}`,AP=`mouseover${Ms}`,IP=`mouseout${Ms}`,bP=`focusin${Ms}`,CP=`focusout${Ms}`,RP=`hide${Ms}`,SP=`hidden${Ms}`,PP=`show${Ms}`,NP=`shown${Ms}`,OP="fade",K_="hide",Ua="show",$a="showing",DP={animation:"boolean",autohide:"boolean",delay:"number"},kP={animation:!0,autohide:!0,delay:5e3};class gc extends wn{constructor(e,n){super(e,n),this._timeout=null,this._hasMouseInteraction=!1,this._hasKeyboardInteraction=!1,this._setListeners()}static get Default(){return kP}static get DefaultType(){return DP}static get NAME(){return TP}show(){if(S.trigger(this._element,PP).defaultPrevented)return;this._clearTimeout(),this._config.animation&&this._element.classList.add(OP);const n=()=>{this._element.classList.remove($a),S.trigger(this._element,NP),this._maybeScheduleHide()};this._element.classList.remove(K_),aa(this._element),this._element.classList.add(Ua,$a),this._queueCallback(n,this._element,this._config.animation)}hide(){if(!this.isShown()||S.trigger(this._element,RP).defaultPrevented)return;const n=()=>{this._element.classList.add(K_),this._element.classList.remove($a,Ua),S.trigger(this._element,SP)};this._element.classList.add($a),this._queueCallback(n,this._element,this._config.animation)}dispose(){this._clearTimeout(),this.isShown()&&this._element.classList.remove(Ua),super.dispose()}isShown(){return this._element.classList.contains(Ua)}_maybeScheduleHide(){this._config.autohide&&(this._hasMouseInteraction||this._hasKeyboardInteraction||(this._timeout=setTimeout(()=>{this.hide()},this._config.delay)))}_onInteraction(e,n){switch(e.type){case"mouseover":case"mouseout":{this._hasMouseInteraction=n;break}case"focusin":case"focusout":{this._hasKeyboardInteraction=n;break}}if(n){this._clearTimeout();return}const s=e.relatedTarget;this._element===s||this._element.contains(s)||this._maybeScheduleHide()}_setListeners(){S.on(this._element,AP,e=>this._onInteraction(e,!0)),S.on(this._element,IP,e=>this._onInteraction(e,!1)),S.on(this._element,bP,e=>this._onInteraction(e,!0)),S.on(this._element,CP,e=>this._onInteraction(e,!1))}_clearTimeout(){clearTimeout(this._timeout),this._timeout=null}static jQueryInterface(e){return this.each(function(){const n=gc.getOrCreateInstance(this,e);if(typeof e=="string"){if(typeof n[e]>"u")throw new TypeError(`No method named "${e}"`);n[e](this)}})}}dc(gc);on(gc);function id(t,e){const n=Object.create(null),s=t.split(",");for(let i=0;i<s.length;i++)n[s[i]]=!0;return e?i=>!!n[i.toLowerCase()]:i=>!!n[i]}const Ne={},qi=[],_n=()=>{},xP=()=>!1,LP=/^on[^a-z]/,yc=t=>LP.test(t),rd=t=>t.startsWith("onUpdate:"),ft=Object.assign,od=(t,e)=>{const n=t.indexOf(e);n>-1&&t.splice(n,1)},MP=Object.prototype.hasOwnProperty,me=(t,e)=>MP.call(t,e),J=Array.isArray,Ki=t=>vc(t)==="[object Map]",zE=t=>vc(t)==="[object Set]",ne=t=>typeof t=="function",Qe=t=>typeof t=="string",Ec=t=>typeof t=="symbol",Me=t=>t!==null&&typeof t=="object",GE=t=>(Me(t)||ne(t))&&ne(t.then)&&ne(t.catch),YE=Object.prototype.toString,vc=t=>YE.call(t),VP=t=>vc(t).slice(8,-1),QE=t=>vc(t)==="[object Object]",ad=t=>Qe(t)&&t!=="NaN"&&t[0]!=="-"&&""+parseInt(t,10)===t,ul=id(",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"),Tc=t=>{const e=Object.create(null);return n=>e[n]||(e[n]=t(n))},FP=/-(\w)/g,$n=Tc(t=>t.replace(FP,(e,n)=>n?n.toUpperCase():"")),UP=/\B([A-Z])/g,Or=Tc(t=>t.replace(UP,"-$1").toLowerCase()),wc=Tc(t=>t.charAt(0).toUpperCase()+t.slice(1)),Du=Tc(t=>t?`on${wc(t)}`:""),ai=(t,e)=>!Object.is(t,e),hl=(t,e)=>{for(let n=0;n<t.length;n++)t[n](e)},bl=(t,e,n)=>{Object.defineProperty(t,e,{configurable:!0,enumerable:!1,value:n})},bh=t=>{const e=parseFloat(t);return isNaN(e)?t:e};let z_;const Ch=()=>z_||(z_=typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:typeof global<"u"?global:{});function ld(t){if(J(t)){const e={};for(let n=0;n<t.length;n++){const s=t[n],i=Qe(s)?jP(s):ld(s);if(i)for(const r in i)e[r]=i[r]}return e}else if(Qe(t)||Me(t))return t}const $P=/;(?![^(]*\))/g,BP=/:([^]+)/,HP=/\/\*[^]*?\*\//g;function jP(t){const e={};return t.replace(HP,"").split($P).forEach(n=>{if(n){const s=n.split(BP);s.length>1&&(e[s[0].trim()]=s[1].trim())}}),e}function cd(t){let e="";if(Qe(t))e=t;else if(J(t))for(let n=0;n<t.length;n++){const s=cd(t[n]);s&&(e+=s+" ")}else if(Me(t))for(const n in t)t[n]&&(e+=n+" ");return e.trim()}const WP="itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly",qP=id(WP);function XE(t){return!!t||t===""}const G_=t=>Qe(t)?t:t==null?"":J(t)||Me(t)&&(t.toString===YE||!ne(t.toString))?JSON.stringify(t,JE,2):String(t),JE=(t,e)=>e&&e.__v_isRef?JE(t,e.value):Ki(e)?{[`Map(${e.size})`]:[...e.entries()].reduce((n,[s,i])=>(n[`${s} =>`]=i,n),{})}:zE(e)?{[`Set(${e.size})`]:[...e.values()]}:Me(e)&&!J(e)&&!QE(e)?String(e):e;let $t;class KP{constructor(e=!1){this.detached=e,this._active=!0,this.effects=[],this.cleanups=[],this.parent=$t,!e&&$t&&(this.index=($t.scopes||($t.scopes=[])).push(this)-1)}get active(){return this._active}run(e){if(this._active){const n=$t;try{return $t=this,e()}finally{$t=n}}}on(){$t=this}off(){$t=this.parent}stop(e){if(this._active){let n,s;for(n=0,s=this.effects.length;n<s;n++)this.effects[n].stop();for(n=0,s=this.cleanups.length;n<s;n++)this.cleanups[n]();if(this.scopes)for(n=0,s=this.scopes.length;n<s;n++)this.scopes[n].stop(!0);if(!this.detached&&this.parent&&!e){const i=this.parent.scopes.pop();i&&i!==this&&(this.parent.scopes[this.index]=i,i.index=this.index)}this.parent=void 0,this._active=!1}}}function zP(t,e=$t){e&&e.active&&e.effects.push(t)}function ZE(){return $t}function GP(t){$t&&$t.cleanups.push(t)}const ud=t=>{const e=new Set(t);return e.w=0,e.n=0,e},ev=t=>(t.w&Ps)>0,tv=t=>(t.n&Ps)>0,YP=({deps:t})=>{if(t.length)for(let e=0;e<t.length;e++)t[e].w|=Ps},QP=t=>{const{deps:e}=t;if(e.length){let n=0;for(let s=0;s<e.length;s++){const i=e[s];ev(i)&&!tv(i)?i.delete(t):e[n++]=i,i.w&=~Ps,i.n&=~Ps}e.length=n}},Rh=new WeakMap;let ro=0,Ps=1;const Sh=30;let cn;const ei=Symbol(""),Ph=Symbol("");class hd{constructor(e,n=null,s){this.fn=e,this.scheduler=n,this.active=!0,this.deps=[],this.parent=void 0,zP(this,s)}run(){if(!this.active)return this.fn();let e=cn,n=vs;for(;e;){if(e===this)return;e=e.parent}try{return this.parent=cn,cn=this,vs=!0,Ps=1<<++ro,ro<=Sh?YP(this):Y_(this),this.fn()}finally{ro<=Sh&&QP(this),Ps=1<<--ro,cn=this.parent,vs=n,this.parent=void 0,this.deferStop&&this.stop()}}stop(){cn===this?this.deferStop=!0:this.active&&(Y_(this),this.onStop&&this.onStop(),this.active=!1)}}function Y_(t){const{deps:e}=t;if(e.length){for(let n=0;n<e.length;n++)e[n].delete(t);e.length=0}}let vs=!0;const nv=[];function Dr(){nv.push(vs),vs=!1}function kr(){const t=nv.pop();vs=t===void 0?!0:t}function xt(t,e,n){if(vs&&cn){let s=Rh.get(t);s||Rh.set(t,s=new Map);let i=s.get(n);i||s.set(n,i=ud()),sv(i)}}function sv(t,e){let n=!1;ro<=Sh?tv(t)||(t.n|=Ps,n=!ev(t)):n=!t.has(cn),n&&(t.add(cn),cn.deps.push(t))}function Jn(t,e,n,s,i,r){const o=Rh.get(t);if(!o)return;let a=[];if(e==="clear")a=[...o.values()];else if(n==="length"&&J(t)){const l=Number(s);o.forEach((c,u)=>{(u==="length"||!Ec(u)&&u>=l)&&a.push(c)})}else switch(n!==void 0&&a.push(o.get(n)),e){case"add":J(t)?ad(n)&&a.push(o.get("length")):(a.push(o.get(ei)),Ki(t)&&a.push(o.get(Ph)));break;case"delete":J(t)||(a.push(o.get(ei)),Ki(t)&&a.push(o.get(Ph)));break;case"set":Ki(t)&&a.push(o.get(ei));break}if(a.length===1)a[0]&&Nh(a[0]);else{const l=[];for(const c of a)c&&l.push(...c);Nh(ud(l))}}function Nh(t,e){const n=J(t)?t:[...t];for(const s of n)s.computed&&Q_(s);for(const s of n)s.computed||Q_(s)}function Q_(t,e){(t!==cn||t.allowRecurse)&&(t.scheduler?t.scheduler():t.run())}const XP=id("__proto__,__v_isRef,__isVue"),iv=new Set(Object.getOwnPropertyNames(Symbol).filter(t=>t!=="arguments"&&t!=="caller").map(t=>Symbol[t]).filter(Ec)),X_=JP();function JP(){const t={};return["includes","indexOf","lastIndexOf"].forEach(e=>{t[e]=function(...n){const s=ve(this);for(let r=0,o=this.length;r<o;r++)xt(s,"get",r+"");const i=s[e](...n);return i===-1||i===!1?s[e](...n.map(ve)):i}}),["push","pop","shift","unshift","splice"].forEach(e=>{t[e]=function(...n){Dr();const s=ve(this)[e].apply(this,n);return kr(),s}}),t}function ZP(t){const e=ve(this);return xt(e,"has",t),e.hasOwnProperty(t)}class rv{constructor(e=!1,n=!1){this._isReadonly=e,this._shallow=n}get(e,n,s){const i=this._isReadonly,r=this._shallow;if(n==="__v_isReactive")return!i;if(n==="__v_isReadonly")return i;if(n==="__v_isShallow")return r;if(n==="__v_raw"&&s===(i?r?fN:cv:r?lv:av).get(e))return e;const o=J(e);if(!i){if(o&&me(X_,n))return Reflect.get(X_,n,s);if(n==="hasOwnProperty")return ZP}const a=Reflect.get(e,n,s);return(Ec(n)?iv.has(n):XP(n))||(i||xt(e,"get",n),r)?a:lt(a)?o&&ad(n)?a:a.value:Me(a)?i?hv(a):Ic(a):a}}class ov extends rv{constructor(e=!1){super(!1,e)}set(e,n,s,i){let r=e[n];if(ur(r)&&lt(r)&&!lt(s))return!1;if(!this._shallow&&(!Cl(s)&&!ur(s)&&(r=ve(r),s=ve(s)),!J(e)&&lt(r)&&!lt(s)))return r.value=s,!0;const o=J(e)&&ad(n)?Number(n)<e.length:me(e,n),a=Reflect.set(e,n,s,i);return e===ve(i)&&(o?ai(s,r)&&Jn(e,"set",n,s):Jn(e,"add",n,s)),a}deleteProperty(e,n){const s=me(e,n);e[n];const i=Reflect.deleteProperty(e,n);return i&&s&&Jn(e,"delete",n,void 0),i}has(e,n){const s=Reflect.has(e,n);return(!Ec(n)||!iv.has(n))&&xt(e,"has",n),s}ownKeys(e){return xt(e,"iterate",J(e)?"length":ei),Reflect.ownKeys(e)}}class eN extends rv{constructor(e=!1){super(!0,e)}set(e,n){return!0}deleteProperty(e,n){return!0}}const tN=new ov,nN=new eN,sN=new ov(!0),fd=t=>t,Ac=t=>Reflect.getPrototypeOf(t);function Ba(t,e,n=!1,s=!1){t=t.__v_raw;const i=ve(t),r=ve(e);n||(ai(e,r)&&xt(i,"get",e),xt(i,"get",r));const{has:o}=Ac(i),a=s?fd:n?_d:xo;if(o.call(i,e))return a(t.get(e));if(o.call(i,r))return a(t.get(r));t!==i&&t.get(e)}function Ha(t,e=!1){const n=this.__v_raw,s=ve(n),i=ve(t);return e||(ai(t,i)&&xt(s,"has",t),xt(s,"has",i)),t===i?n.has(t):n.has(t)||n.has(i)}function ja(t,e=!1){return t=t.__v_raw,!e&&xt(ve(t),"iterate",ei),Reflect.get(t,"size",t)}function J_(t){t=ve(t);const e=ve(this);return Ac(e).has.call(e,t)||(e.add(t),Jn(e,"add",t,t)),this}function Z_(t,e){e=ve(e);const n=ve(this),{has:s,get:i}=Ac(n);let r=s.call(n,t);r||(t=ve(t),r=s.call(n,t));const o=i.call(n,t);return n.set(t,e),r?ai(e,o)&&Jn(n,"set",t,e):Jn(n,"add",t,e),this}function em(t){const e=ve(this),{has:n,get:s}=Ac(e);let i=n.call(e,t);i||(t=ve(t),i=n.call(e,t)),s&&s.call(e,t);const r=e.delete(t);return i&&Jn(e,"delete",t,void 0),r}function tm(){const t=ve(this),e=t.size!==0,n=t.clear();return e&&Jn(t,"clear",void 0,void 0),n}function Wa(t,e){return function(s,i){const r=this,o=r.__v_raw,a=ve(o),l=e?fd:t?_d:xo;return!t&&xt(a,"iterate",ei),o.forEach((c,u)=>s.call(i,l(c),l(u),r))}}function qa(t,e,n){return function(...s){const i=this.__v_raw,r=ve(i),o=Ki(r),a=t==="entries"||t===Symbol.iterator&&o,l=t==="keys"&&o,c=i[t](...s),u=n?fd:e?_d:xo;return!e&&xt(r,"iterate",l?Ph:ei),{next(){const{value:h,done:f}=c.next();return f?{value:h,done:f}:{value:a?[u(h[0]),u(h[1])]:u(h),done:f}},[Symbol.iterator](){return this}}}}function ds(t){return function(...e){return t==="delete"?!1:this}}function iN(){const t={get(r){return Ba(this,r)},get size(){return ja(this)},has:Ha,add:J_,set:Z_,delete:em,clear:tm,forEach:Wa(!1,!1)},e={get(r){return Ba(this,r,!1,!0)},get size(){return ja(this)},has:Ha,add:J_,set:Z_,delete:em,clear:tm,forEach:Wa(!1,!0)},n={get(r){return Ba(this,r,!0)},get size(){return ja(this,!0)},has(r){return Ha.call(this,r,!0)},add:ds("add"),set:ds("set"),delete:ds("delete"),clear:ds("clear"),forEach:Wa(!0,!1)},s={get(r){return Ba(this,r,!0,!0)},get size(){return ja(this,!0)},has(r){return Ha.call(this,r,!0)},add:ds("add"),set:ds("set"),delete:ds("delete"),clear:ds("clear"),forEach:Wa(!0,!0)};return["keys","values","entries",Symbol.iterator].forEach(r=>{t[r]=qa(r,!1,!1),n[r]=qa(r,!0,!1),e[r]=qa(r,!1,!0),s[r]=qa(r,!0,!0)}),[t,n,e,s]}const[rN,oN,aN,lN]=iN();function dd(t,e){const n=e?t?lN:aN:t?oN:rN;return(s,i,r)=>i==="__v_isReactive"?!t:i==="__v_isReadonly"?t:i==="__v_raw"?s:Reflect.get(me(n,i)&&i in s?n:s,i,r)}const cN={get:dd(!1,!1)},uN={get:dd(!1,!0)},hN={get:dd(!0,!1)},av=new WeakMap,lv=new WeakMap,cv=new WeakMap,fN=new WeakMap;function dN(t){switch(t){case"Object":case"Array":return 1;case"Map":case"Set":case"WeakMap":case"WeakSet":return 2;default:return 0}}function pN(t){return t.__v_skip||!Object.isExtensible(t)?0:dN(VP(t))}function Ic(t){return ur(t)?t:pd(t,!1,tN,cN,av)}function uv(t){return pd(t,!1,sN,uN,lv)}function hv(t){return pd(t,!0,nN,hN,cv)}function pd(t,e,n,s,i){if(!Me(t)||t.__v_raw&&!(e&&t.__v_isReactive))return t;const r=i.get(t);if(r)return r;const o=pN(t);if(o===0)return t;const a=new Proxy(t,o===2?s:n);return i.set(t,a),a}function zi(t){return ur(t)?zi(t.__v_raw):!!(t&&t.__v_isReactive)}function ur(t){return!!(t&&t.__v_isReadonly)}function Cl(t){return!!(t&&t.__v_isShallow)}function fv(t){return zi(t)||ur(t)}function ve(t){const e=t&&t.__v_raw;return e?ve(e):t}function dv(t){return bl(t,"__v_skip",!0),t}const xo=t=>Me(t)?Ic(t):t,_d=t=>Me(t)?hv(t):t;function pv(t){vs&&cn&&(t=ve(t),sv(t.dep||(t.dep=ud())))}function _v(t,e){t=ve(t);const n=t.dep;n&&Nh(n)}function lt(t){return!!(t&&t.__v_isRef===!0)}function Gi(t){return gv(t,!1)}function mv(t){return gv(t,!0)}function gv(t,e){return lt(t)?t:new _N(t,e)}class _N{constructor(e,n){this.__v_isShallow=n,this.dep=void 0,this.__v_isRef=!0,this._rawValue=n?e:ve(e),this._value=n?e:xo(e)}get value(){return pv(this),this._value}set value(e){const n=this.__v_isShallow||Cl(e)||ur(e);e=n?e:ve(e),ai(e,this._rawValue)&&(this._rawValue=e,this._value=n?e:xo(e),_v(this))}}function Zn(t){return lt(t)?t.value:t}function Kn(t){return ne(t)?t():Zn(t)}const mN={get:(t,e,n)=>Zn(Reflect.get(t,e,n)),set:(t,e,n,s)=>{const i=t[e];return lt(i)&&!lt(n)?(i.value=n,!0):Reflect.set(t,e,n,s)}};function yv(t){return zi(t)?t:new Proxy(t,mN)}class gN{constructor(e,n,s,i){this._setter=n,this.dep=void 0,this.__v_isRef=!0,this.__v_isReadonly=!1,this._dirty=!0,this.effect=new hd(e,()=>{this._dirty||(this._dirty=!0,_v(this))}),this.effect.computed=this,this.effect.active=this._cacheable=!i,this.__v_isReadonly=s}get value(){const e=ve(this);return pv(e),(e._dirty||!e._cacheable)&&(e._dirty=!1,e._value=e.effect.run()),e._value}set value(e){this._setter(e)}}function yN(t,e,n=!1){let s,i;const r=ne(t);return r?(s=t,i=_n):(s=t.get,i=t.set),new gN(s,i,r||!i,n)}function Ts(t,e,n,s){let i;try{i=s?t(...s):t()}catch(r){bc(r,e,n)}return i}function mn(t,e,n,s){if(ne(t)){const r=Ts(t,e,n,s);return r&&GE(r)&&r.catch(o=>{bc(o,e,n)}),r}const i=[];for(let r=0;r<t.length;r++)i.push(mn(t[r],e,n,s));return i}function bc(t,e,n,s=!0){const i=e?e.vnode:null;if(e){let r=e.parent;const o=e.proxy,a=n;for(;r;){const c=r.ec;if(c){for(let u=0;u<c.length;u++)if(c[u](t,o,a)===!1)return}r=r.parent}const l=e.appContext.config.errorHandler;if(l){Ts(l,null,10,[t,o,a]);return}}EN(t,n,i,s)}function EN(t,e,n,s=!0){console.error(t)}let Lo=!1,Oh=!1;const yt=[];let Cn=0;const Yi=[];let zn=null,js=0;const Ev=Promise.resolve();let md=null;function vv(t){const e=md||Ev;return t?e.then(this?t.bind(this):t):e}function vN(t){let e=Cn+1,n=yt.length;for(;e<n;){const s=e+n>>>1,i=yt[s],r=Mo(i);r<t||r===t&&i.pre?e=s+1:n=s}return e}function gd(t){(!yt.length||!yt.includes(t,Lo&&t.allowRecurse?Cn+1:Cn))&&(t.id==null?yt.push(t):yt.splice(vN(t.id),0,t),Tv())}function Tv(){!Lo&&!Oh&&(Oh=!0,md=Ev.then(Av))}function TN(t){const e=yt.indexOf(t);e>Cn&&yt.splice(e,1)}function wN(t){J(t)?Yi.push(...t):(!zn||!zn.includes(t,t.allowRecurse?js+1:js))&&Yi.push(t),Tv()}function nm(t,e=Lo?Cn+1:0){for(;e<yt.length;e++){const n=yt[e];n&&n.pre&&(yt.splice(e,1),e--,n())}}function wv(t){if(Yi.length){const e=[...new Set(Yi)];if(Yi.length=0,zn){zn.push(...e);return}for(zn=e,zn.sort((n,s)=>Mo(n)-Mo(s)),js=0;js<zn.length;js++)zn[js]();zn=null,js=0}}const Mo=t=>t.id==null?1/0:t.id,AN=(t,e)=>{const n=Mo(t)-Mo(e);if(n===0){if(t.pre&&!e.pre)return-1;if(e.pre&&!t.pre)return 1}return n};function Av(t){Oh=!1,Lo=!0,yt.sort(AN);const e=_n;try{for(Cn=0;Cn<yt.length;Cn++){const n=yt[Cn];n&&n.active!==!1&&Ts(n,null,14)}}finally{Cn=0,yt.length=0,wv(),Lo=!1,md=null,(yt.length||Yi.length)&&Av()}}function IN(t,e,...n){if(t.isUnmounted)return;const s=t.vnode.props||Ne;let i=n;const r=e.startsWith("update:"),o=r&&e.slice(7);if(o&&o in s){const u=`${o==="modelValue"?"model":o}Modifiers`,{number:h,trim:f}=s[u]||Ne;f&&(i=n.map(d=>Qe(d)?d.trim():d)),h&&(i=n.map(bh))}let a,l=s[a=Du(e)]||s[a=Du($n(e))];!l&&r&&(l=s[a=Du(Or(e))]),l&&mn(l,t,6,i);const c=s[a+"Once"];if(c){if(!t.emitted)t.emitted={};else if(t.emitted[a])return;t.emitted[a]=!0,mn(c,t,6,i)}}function Iv(t,e,n=!1){const s=e.emitsCache,i=s.get(t);if(i!==void 0)return i;const r=t.emits;let o={},a=!1;if(!ne(t)){const l=c=>{const u=Iv(c,e,!0);u&&(a=!0,ft(o,u))};!n&&e.mixins.length&&e.mixins.forEach(l),t.extends&&l(t.extends),t.mixins&&t.mixins.forEach(l)}return!r&&!a?(Me(t)&&s.set(t,null),null):(J(r)?r.forEach(l=>o[l]=null):ft(o,r),Me(t)&&s.set(t,o),o)}function Cc(t,e){return!t||!yc(e)?!1:(e=e.slice(2).replace(/Once$/,""),me(t,e[0].toLowerCase()+e.slice(1))||me(t,Or(e))||me(t,e))}let Ht=null,Rc=null;function Rl(t){const e=Ht;return Ht=t,Rc=t&&t.type.__scopeId||null,e}function yd(t){Rc=t}function Ed(){Rc=null}function vd(t,e=Ht,n){if(!e||t._n)return t;const s=(...i)=>{s._d&&dm(-1);const r=Rl(e);let o;try{o=t(...i)}finally{Rl(r),s._d&&dm(1)}return o};return s._n=!0,s._c=!0,s._d=!0,s}function ku(t){const{type:e,vnode:n,proxy:s,withProxy:i,props:r,propsOptions:[o],slots:a,attrs:l,emit:c,render:u,renderCache:h,data:f,setupState:d,ctx:m,inheritAttrs:g}=t;let y,T;const I=Rl(t);try{if(n.shapeFlag&4){const v=i||s;y=bn(u.call(v,v,h,r,d,f,m)),T=l}else{const v=e;y=bn(v.length>1?v(r,{attrs:l,slots:a,emit:c}):v(r,null)),T=e.props?l:bN(l)}}catch(v){Eo.length=0,bc(v,t,1),y=Ye(li)}let b=y;if(T&&g!==!1){const v=Object.keys(T),{shapeFlag:U}=b;v.length&&U&7&&(o&&v.some(rd)&&(T=CN(T,o)),b=hr(b,T))}return n.dirs&&(b=hr(b),b.dirs=b.dirs?b.dirs.concat(n.dirs):n.dirs),n.transition&&(b.transition=n.transition),y=b,Rl(I),y}const bN=t=>{let e;for(const n in t)(n==="class"||n==="style"||yc(n))&&((e||(e={}))[n]=t[n]);return e},CN=(t,e)=>{const n={};for(const s in t)(!rd(s)||!(s.slice(9)in e))&&(n[s]=t[s]);return n};function RN(t,e,n){const{props:s,children:i,component:r}=t,{props:o,children:a,patchFlag:l}=e,c=r.emitsOptions;if(e.dirs||e.transition)return!0;if(n&&l>=0){if(l&1024)return!0;if(l&16)return s?sm(s,o,c):!!o;if(l&8){const u=e.dynamicProps;for(let h=0;h<u.length;h++){const f=u[h];if(o[f]!==s[f]&&!Cc(c,f))return!0}}}else return(i||a)&&(!a||!a.$stable)?!0:s===o?!1:s?o?sm(s,o,c):!0:!!o;return!1}function sm(t,e,n){const s=Object.keys(e);if(s.length!==Object.keys(t).length)return!0;for(let i=0;i<s.length;i++){const r=s[i];if(e[r]!==t[r]&&!Cc(n,r))return!0}return!1}function SN({vnode:t,parent:e},n){for(;e&&e.subTree===t;)(t=e.vnode).el=n,e=e.parent}const bv="components";function Cv(t,e){return NN(bv,t,!0,e)||t}const PN=Symbol.for("v-ndc");function NN(t,e,n=!0,s=!1){const i=Ht||Ze;if(i){const r=i.type;if(t===bv){const a=wO(r,!1);if(a&&(a===e||a===$n(e)||a===wc($n(e))))return r}const o=im(i[t]||r[t],e)||im(i.appContext[t],e);return!o&&s?r:o}}function im(t,e){return t&&(t[e]||t[$n(e)]||t[wc($n(e))])}const ON=t=>t.__isSuspense;function DN(t,e){e&&e.pendingBranch?J(t)?e.effects.push(...t):e.effects.push(t):wN(t)}const Ka={};function go(t,e,n){return Rv(t,e,n)}function Rv(t,e,{immediate:n,deep:s,flush:i,onTrack:r,onTrigger:o}=Ne){var a;const l=ZE()===((a=Ze)==null?void 0:a.scope)?Ze:null;let c,u=!1,h=!1;if(lt(t)?(c=()=>t.value,u=Cl(t)):zi(t)?(c=()=>t,s=!0):J(t)?(h=!0,u=t.some(v=>zi(v)||Cl(v)),c=()=>t.map(v=>{if(lt(v))return v.value;if(zi(v))return zs(v);if(ne(v))return Ts(v,l,2)})):ne(t)?e?c=()=>Ts(t,l,2):c=()=>{if(!(l&&l.isUnmounted))return f&&f(),mn(t,l,3,[d])}:c=_n,e&&s){const v=c;c=()=>zs(v())}let f,d=v=>{f=I.onStop=()=>{Ts(v,l,4)}},m;if(Fo)if(d=_n,e?n&&mn(e,l,3,[c(),h?[]:void 0,d]):c(),i==="sync"){const v=bO();m=v.__watcherHandles||(v.__watcherHandles=[])}else return _n;let g=h?new Array(t.length).fill(Ka):Ka;const y=()=>{if(I.active)if(e){const v=I.run();(s||u||(h?v.some((U,$)=>ai(U,g[$])):ai(v,g)))&&(f&&f(),mn(e,l,3,[v,g===Ka?void 0:h&&g[0]===Ka?[]:g,d]),g=v)}else I.run()};y.allowRecurse=!!e;let T;i==="sync"?T=y:i==="post"?T=()=>Ot(y,l&&l.suspense):(y.pre=!0,l&&(y.id=l.uid),T=()=>gd(y));const I=new hd(c,T);e?n?y():g=I.run():i==="post"?Ot(I.run.bind(I),l&&l.suspense):I.run();const b=()=>{I.stop(),l&&l.scope&&od(l.scope.effects,I)};return m&&m.push(b),b}function kN(t,e,n){const s=this.proxy,i=Qe(t)?t.includes(".")?Sv(s,t):()=>s[t]:t.bind(s,s);let r;ne(e)?r=e:(r=e.handler,n=e);const o=Ze;fr(this);const a=Rv(i,r.bind(s),n);return o?fr(o):ti(),a}function Sv(t,e){const n=e.split(".");return()=>{let s=t;for(let i=0;i<n.length&&s;i++)s=s[n[i]];return s}}function zs(t,e){if(!Me(t)||t.__v_skip||(e=e||new Set,e.has(t)))return t;if(e.add(t),lt(t))zs(t.value,e);else if(J(t))for(let n=0;n<t.length;n++)zs(t[n],e);else if(zE(t)||Ki(t))t.forEach(n=>{zs(n,e)});else if(QE(t))for(const n in t)zs(t[n],e);return t}function z4(t,e){const n=Ht;if(n===null)return t;const s=Oc(n)||n.proxy,i=t.dirs||(t.dirs=[]);for(let r=0;r<e.length;r++){let[o,a,l,c=Ne]=e[r];o&&(ne(o)&&(o={mounted:o,updated:o}),o.deep&&zs(a),i.push({dir:o,instance:s,value:a,oldValue:void 0,arg:l,modifiers:c}))}return t}function Us(t,e,n,s){const i=t.dirs,r=e&&e.dirs;for(let o=0;o<i.length;o++){const a=i[o];r&&(a.oldValue=r[o].value);let l=a.dir[s];l&&(Dr(),mn(l,n,8,[t.el,a,t,e]),kr())}}/*! #__NO_SIDE_EFFECTS__ */function Pv(t,e){return ne(t)?(()=>ft({name:t.name},e,{setup:t}))():t}const fl=t=>!!t.type.__asyncLoader,Nv=t=>t.type.__isKeepAlive;function xN(t,e){Ov(t,"a",e)}function LN(t,e){Ov(t,"da",e)}function Ov(t,e,n=Ze){const s=t.__wdc||(t.__wdc=()=>{let i=n;for(;i;){if(i.isDeactivated)return;i=i.parent}return t()});if(Sc(e,s,n),n){let i=n.parent;for(;i&&i.parent;)Nv(i.parent.vnode)&&MN(s,e,n,i),i=i.parent}}function MN(t,e,n,s){const i=Sc(e,t,s,!0);Dv(()=>{od(s[e],i)},n)}function Sc(t,e,n=Ze,s=!1){if(n){const i=n[t]||(n[t]=[]),r=e.__weh||(e.__weh=(...o)=>{if(n.isUnmounted)return;Dr(),fr(n);const a=mn(e,n,t,o);return ti(),kr(),a});return s?i.unshift(r):i.push(r),r}}const cs=t=>(e,n=Ze)=>(!Fo||t==="sp")&&Sc(t,(...s)=>e(...s),n),VN=cs("bm"),FN=cs("m"),UN=cs("bu"),$N=cs("u"),BN=cs("bum"),Dv=cs("um"),kv=cs("sp"),HN=cs("rtg"),jN=cs("rtc");function WN(t,e=Ze){Sc("ec",t,e)}function qN(t,e,n,s){let i;const r=n&&n[s];if(J(t)||Qe(t)){i=new Array(t.length);for(let o=0,a=t.length;o<a;o++)i[o]=e(t[o],o,void 0,r&&r[o])}else if(typeof t=="number"){i=new Array(t);for(let o=0;o<t;o++)i[o]=e(o+1,o,void 0,r&&r[o])}else if(Me(t))if(t[Symbol.iterator])i=Array.from(t,(o,a)=>e(o,a,void 0,r&&r[a]));else{const o=Object.keys(t);i=new Array(o.length);for(let a=0,l=o.length;a<l;a++){const c=o[a];i[a]=e(t[c],c,a,r&&r[a])}}else i=[];return n&&(n[s]=i),i}const Dh=t=>t?Kv(t)?Oc(t)||t.proxy:Dh(t.parent):null,yo=ft(Object.create(null),{$:t=>t,$el:t=>t.vnode.el,$data:t=>t.data,$props:t=>t.props,$attrs:t=>t.attrs,$slots:t=>t.slots,$refs:t=>t.refs,$parent:t=>Dh(t.parent),$root:t=>Dh(t.root),$emit:t=>t.emit,$options:t=>Td(t),$forceUpdate:t=>t.f||(t.f=()=>gd(t.update)),$nextTick:t=>t.n||(t.n=vv.bind(t.proxy)),$watch:t=>kN.bind(t)}),xu=(t,e)=>t!==Ne&&!t.__isScriptSetup&&me(t,e),KN={get({_:t},e){const{ctx:n,setupState:s,data:i,props:r,accessCache:o,type:a,appContext:l}=t;let c;if(e[0]!=="$"){const d=o[e];if(d!==void 0)switch(d){case 1:return s[e];case 2:return i[e];case 4:return n[e];case 3:return r[e]}else{if(xu(s,e))return o[e]=1,s[e];if(i!==Ne&&me(i,e))return o[e]=2,i[e];if((c=t.propsOptions[0])&&me(c,e))return o[e]=3,r[e];if(n!==Ne&&me(n,e))return o[e]=4,n[e];kh&&(o[e]=0)}}const u=yo[e];let h,f;if(u)return e==="$attrs"&&xt(t,"get",e),u(t);if((h=a.__cssModules)&&(h=h[e]))return h;if(n!==Ne&&me(n,e))return o[e]=4,n[e];if(f=l.config.globalProperties,me(f,e))return f[e]},set({_:t},e,n){const{data:s,setupState:i,ctx:r}=t;return xu(i,e)?(i[e]=n,!0):s!==Ne&&me(s,e)?(s[e]=n,!0):me(t.props,e)||e[0]==="$"&&e.slice(1)in t?!1:(r[e]=n,!0)},has({_:{data:t,setupState:e,accessCache:n,ctx:s,appContext:i,propsOptions:r}},o){let a;return!!n[o]||t!==Ne&&me(t,o)||xu(e,o)||(a=r[0])&&me(a,o)||me(s,o)||me(yo,o)||me(i.config.globalProperties,o)},defineProperty(t,e,n){return n.get!=null?t._.accessCache[e]=0:me(n,"value")&&this.set(t,e,n.value,null),Reflect.defineProperty(t,e,n)}};function rm(t){return J(t)?t.reduce((e,n)=>(e[n]=null,e),{}):t}let kh=!0;function zN(t){const e=Td(t),n=t.proxy,s=t.ctx;kh=!1,e.beforeCreate&&om(e.beforeCreate,t,"bc");const{data:i,computed:r,methods:o,watch:a,provide:l,inject:c,created:u,beforeMount:h,mounted:f,beforeUpdate:d,updated:m,activated:g,deactivated:y,beforeDestroy:T,beforeUnmount:I,destroyed:b,unmounted:v,render:U,renderTracked:$,renderTriggered:Y,errorCaptured:te,serverPrefetch:_e,expose:oe,inheritAttrs:Se,components:ze,directives:Re,filters:Lt}=e;if(c&&GN(c,s,null),o)for(const ie in o){const ce=o[ie];ne(ce)&&(s[ie]=ce.bind(n))}if(i){const ie=i.call(n,n);Me(ie)&&(t.data=Ic(ie))}if(kh=!0,r)for(const ie in r){const ce=r[ie],st=ne(ce)?ce.bind(n,n):ne(ce.get)?ce.get.bind(n,n):_n,Mt=!ne(ce)&&ne(ce.set)?ce.set.bind(n):_n,Nt=un({get:st,set:Mt});Object.defineProperty(s,ie,{enumerable:!0,configurable:!0,get:()=>Nt.value,set:He=>Nt.value=He})}if(a)for(const ie in a)xv(a[ie],s,n,ie);if(l){const ie=ne(l)?l.call(n):l;Reflect.ownKeys(ie).forEach(ce=>{dl(ce,ie[ce])})}u&&om(u,t,"c");function ge(ie,ce){J(ce)?ce.forEach(st=>ie(st.bind(n))):ce&&ie(ce.bind(n))}if(ge(VN,h),ge(FN,f),ge(UN,d),ge($N,m),ge(xN,g),ge(LN,y),ge(WN,te),ge(jN,$),ge(HN,Y),ge(BN,I),ge(Dv,v),ge(kv,_e),J(oe))if(oe.length){const ie=t.exposed||(t.exposed={});oe.forEach(ce=>{Object.defineProperty(ie,ce,{get:()=>n[ce],set:st=>n[ce]=st})})}else t.exposed||(t.exposed={});U&&t.render===_n&&(t.render=U),Se!=null&&(t.inheritAttrs=Se),ze&&(t.components=ze),Re&&(t.directives=Re)}function GN(t,e,n=_n){J(t)&&(t=xh(t));for(const s in t){const i=t[s];let r;Me(i)?"default"in i?r=tn(i.from||s,i.default,!0):r=tn(i.from||s):r=tn(i),lt(r)?Object.defineProperty(e,s,{enumerable:!0,configurable:!0,get:()=>r.value,set:o=>r.value=o}):e[s]=r}}function om(t,e,n){mn(J(t)?t.map(s=>s.bind(e.proxy)):t.bind(e.proxy),e,n)}function xv(t,e,n,s){const i=s.includes(".")?Sv(n,s):()=>n[s];if(Qe(t)){const r=e[t];ne(r)&&go(i,r)}else if(ne(t))go(i,t.bind(n));else if(Me(t))if(J(t))t.forEach(r=>xv(r,e,n,s));else{const r=ne(t.handler)?t.handler.bind(n):e[t.handler];ne(r)&&go(i,r,t)}}function Td(t){const e=t.type,{mixins:n,extends:s}=e,{mixins:i,optionsCache:r,config:{optionMergeStrategies:o}}=t.appContext,a=r.get(e);let l;return a?l=a:!i.length&&!n&&!s?l=e:(l={},i.length&&i.forEach(c=>Sl(l,c,o,!0)),Sl(l,e,o)),Me(e)&&r.set(e,l),l}function Sl(t,e,n,s=!1){const{mixins:i,extends:r}=e;r&&Sl(t,r,n,!0),i&&i.forEach(o=>Sl(t,o,n,!0));for(const o in e)if(!(s&&o==="expose")){const a=YN[o]||n&&n[o];t[o]=a?a(t[o],e[o]):e[o]}return t}const YN={data:am,props:lm,emits:lm,methods:oo,computed:oo,beforeCreate:It,created:It,beforeMount:It,mounted:It,beforeUpdate:It,updated:It,beforeDestroy:It,beforeUnmount:It,destroyed:It,unmounted:It,activated:It,deactivated:It,errorCaptured:It,serverPrefetch:It,components:oo,directives:oo,watch:XN,provide:am,inject:QN};function am(t,e){return e?t?function(){return ft(ne(t)?t.call(this,this):t,ne(e)?e.call(this,this):e)}:e:t}function QN(t,e){return oo(xh(t),xh(e))}function xh(t){if(J(t)){const e={};for(let n=0;n<t.length;n++)e[t[n]]=t[n];return e}return t}function It(t,e){return t?[...new Set([].concat(t,e))]:e}function oo(t,e){return t?ft(Object.create(null),t,e):e}function lm(t,e){return t?J(t)&&J(e)?[...new Set([...t,...e])]:ft(Object.create(null),rm(t),rm(e??{})):e}function XN(t,e){if(!t)return e;if(!e)return t;const n=ft(Object.create(null),t);for(const s in e)n[s]=It(t[s],e[s]);return n}function Lv(){return{app:null,config:{isNativeTag:xP,performance:!1,globalProperties:{},optionMergeStrategies:{},errorHandler:void 0,warnHandler:void 0,compilerOptions:{}},mixins:[],components:{},directives:{},provides:Object.create(null),optionsCache:new WeakMap,propsCache:new WeakMap,emitsCache:new WeakMap}}let JN=0;function ZN(t,e){return function(s,i=null){ne(s)||(s=ft({},s)),i!=null&&!Me(i)&&(i=null);const r=Lv(),o=new WeakSet;let a=!1;const l=r.app={_uid:JN++,_component:s,_props:i,_container:null,_context:r,_instance:null,version:CO,get config(){return r.config},set config(c){},use(c,...u){return o.has(c)||(c&&ne(c.install)?(o.add(c),c.install(l,...u)):ne(c)&&(o.add(c),c(l,...u))),l},mixin(c){return r.mixins.includes(c)||r.mixins.push(c),l},component(c,u){return u?(r.components[c]=u,l):r.components[c]},directive(c,u){return u?(r.directives[c]=u,l):r.directives[c]},mount(c,u,h){if(!a){const f=Ye(s,i);return f.appContext=r,u&&e?e(f,c):t(f,c,h),a=!0,l._container=c,c.__vue_app__=l,Oc(f.component)||f.component.proxy}},unmount(){a&&(t(null,l._container),delete l._container.__vue_app__)},provide(c,u){return r.provides[c]=u,l},runWithContext(c){Pl=l;try{return c()}finally{Pl=null}}};return l}}let Pl=null;function dl(t,e){if(Ze){let n=Ze.provides;const s=Ze.parent&&Ze.parent.provides;s===n&&(n=Ze.provides=Object.create(s)),n[t]=e}}function tn(t,e,n=!1){const s=Ze||Ht;if(s||Pl){const i=s?s.parent==null?s.vnode.appContext&&s.vnode.appContext.provides:s.parent.provides:Pl._context.provides;if(i&&t in i)return i[t];if(arguments.length>1)return n&&ne(e)?e.call(s&&s.proxy):e}}function eO(t,e,n,s=!1){const i={},r={};bl(r,Nc,1),t.propsDefaults=Object.create(null),Mv(t,e,i,r);for(const o in t.propsOptions[0])o in i||(i[o]=void 0);n?t.props=s?i:uv(i):t.type.props?t.props=i:t.props=r,t.attrs=r}function tO(t,e,n,s){const{props:i,attrs:r,vnode:{patchFlag:o}}=t,a=ve(i),[l]=t.propsOptions;let c=!1;if((s||o>0)&&!(o&16)){if(o&8){const u=t.vnode.dynamicProps;for(let h=0;h<u.length;h++){let f=u[h];if(Cc(t.emitsOptions,f))continue;const d=e[f];if(l)if(me(r,f))d!==r[f]&&(r[f]=d,c=!0);else{const m=$n(f);i[m]=Lh(l,a,m,d,t,!1)}else d!==r[f]&&(r[f]=d,c=!0)}}}else{Mv(t,e,i,r)&&(c=!0);let u;for(const h in a)(!e||!me(e,h)&&((u=Or(h))===h||!me(e,u)))&&(l?n&&(n[h]!==void 0||n[u]!==void 0)&&(i[h]=Lh(l,a,h,void 0,t,!0)):delete i[h]);if(r!==a)for(const h in r)(!e||!me(e,h))&&(delete r[h],c=!0)}c&&Jn(t,"set","$attrs")}function Mv(t,e,n,s){const[i,r]=t.propsOptions;let o=!1,a;if(e)for(let l in e){if(ul(l))continue;const c=e[l];let u;i&&me(i,u=$n(l))?!r||!r.includes(u)?n[u]=c:(a||(a={}))[u]=c:Cc(t.emitsOptions,l)||(!(l in s)||c!==s[l])&&(s[l]=c,o=!0)}if(r){const l=ve(n),c=a||Ne;for(let u=0;u<r.length;u++){const h=r[u];n[h]=Lh(i,l,h,c[h],t,!me(c,h))}}return o}function Lh(t,e,n,s,i,r){const o=t[n];if(o!=null){const a=me(o,"default");if(a&&s===void 0){const l=o.default;if(o.type!==Function&&!o.skipFactory&&ne(l)){const{propsDefaults:c}=i;n in c?s=c[n]:(fr(i),s=c[n]=l.call(null,e),ti())}else s=l}o[0]&&(r&&!a?s=!1:o[1]&&(s===""||s===Or(n))&&(s=!0))}return s}function Vv(t,e,n=!1){const s=e.propsCache,i=s.get(t);if(i)return i;const r=t.props,o={},a=[];let l=!1;if(!ne(t)){const u=h=>{l=!0;const[f,d]=Vv(h,e,!0);ft(o,f),d&&a.push(...d)};!n&&e.mixins.length&&e.mixins.forEach(u),t.extends&&u(t.extends),t.mixins&&t.mixins.forEach(u)}if(!r&&!l)return Me(t)&&s.set(t,qi),qi;if(J(r))for(let u=0;u<r.length;u++){const h=$n(r[u]);cm(h)&&(o[h]=Ne)}else if(r)for(const u in r){const h=$n(u);if(cm(h)){const f=r[u],d=o[h]=J(f)||ne(f)?{type:f}:ft({},f);if(d){const m=fm(Boolean,d.type),g=fm(String,d.type);d[0]=m>-1,d[1]=g<0||m<g,(m>-1||me(d,"default"))&&a.push(h)}}}const c=[o,a];return Me(t)&&s.set(t,c),c}function cm(t){return t[0]!=="$"}function um(t){const e=t&&t.toString().match(/^\s*(function|class) (\w+)/);return e?e[2]:t===null?"null":""}function hm(t,e){return um(t)===um(e)}function fm(t,e){return J(e)?e.findIndex(n=>hm(n,t)):ne(e)&&hm(e,t)?0:-1}const Fv=t=>t[0]==="_"||t==="$stable",wd=t=>J(t)?t.map(bn):[bn(t)],nO=(t,e,n)=>{if(e._n)return e;const s=vd((...i)=>wd(e(...i)),n);return s._c=!1,s},Uv=(t,e,n)=>{const s=t._ctx;for(const i in t){if(Fv(i))continue;const r=t[i];if(ne(r))e[i]=nO(i,r,s);else if(r!=null){const o=wd(r);e[i]=()=>o}}},$v=(t,e)=>{const n=wd(e);t.slots.default=()=>n},sO=(t,e)=>{if(t.vnode.shapeFlag&32){const n=e._;n?(t.slots=ve(e),bl(e,"_",n)):Uv(e,t.slots={})}else t.slots={},e&&$v(t,e);bl(t.slots,Nc,1)},iO=(t,e,n)=>{const{vnode:s,slots:i}=t;let r=!0,o=Ne;if(s.shapeFlag&32){const a=e._;a?n&&a===1?r=!1:(ft(i,e),!n&&a===1&&delete i._):(r=!e.$stable,Uv(e,i)),o=e}else e&&($v(t,e),o={default:1});if(r)for(const a in i)!Fv(a)&&o[a]==null&&delete i[a]};function Mh(t,e,n,s,i=!1){if(J(t)){t.forEach((f,d)=>Mh(f,e&&(J(e)?e[d]:e),n,s,i));return}if(fl(s)&&!i)return;const r=s.shapeFlag&4?Oc(s.component)||s.component.proxy:s.el,o=i?null:r,{i:a,r:l}=t,c=e&&e.r,u=a.refs===Ne?a.refs={}:a.refs,h=a.setupState;if(c!=null&&c!==l&&(Qe(c)?(u[c]=null,me(h,c)&&(h[c]=null)):lt(c)&&(c.value=null)),ne(l))Ts(l,a,12,[o,u]);else{const f=Qe(l),d=lt(l);if(f||d){const m=()=>{if(t.f){const g=f?me(h,l)?h[l]:u[l]:l.value;i?J(g)&&od(g,r):J(g)?g.includes(r)||g.push(r):f?(u[l]=[r],me(h,l)&&(h[l]=u[l])):(l.value=[r],t.k&&(u[t.k]=l.value))}else f?(u[l]=o,me(h,l)&&(h[l]=o)):d&&(l.value=o,t.k&&(u[t.k]=o))};o?(m.id=-1,Ot(m,n)):m()}}}const Ot=DN;function rO(t){return oO(t)}function oO(t,e){const n=Ch();n.__VUE__=!0;const{insert:s,remove:i,patchProp:r,createElement:o,createText:a,createComment:l,setText:c,setElementText:u,parentNode:h,nextSibling:f,setScopeId:d=_n,insertStaticContent:m}=t,g=(p,_,E,w=null,C=null,R=null,F=!1,D=null,k=!!_.dynamicChildren)=>{if(p===_)return;p&&!Yr(p,_)&&(w=A(p),He(p,C,R,!0),p=null),_.patchFlag===-2&&(k=!1,_.dynamicChildren=null);const{type:P,ref:q,shapeFlag:B}=_;switch(P){case Pc:y(p,_,E,w);break;case li:T(p,_,E,w);break;case Lu:p==null&&I(_,E,w,F);break;case Qt:ze(p,_,E,w,C,R,F,D,k);break;default:B&1?U(p,_,E,w,C,R,F,D,k):B&6?Re(p,_,E,w,C,R,F,D,k):(B&64||B&128)&&P.process(p,_,E,w,C,R,F,D,k,x)}q!=null&&C&&Mh(q,p&&p.ref,R,_||p,!_)},y=(p,_,E,w)=>{if(p==null)s(_.el=a(_.children),E,w);else{const C=_.el=p.el;_.children!==p.children&&c(C,_.children)}},T=(p,_,E,w)=>{p==null?s(_.el=l(_.children||""),E,w):_.el=p.el},I=(p,_,E,w)=>{[p.el,p.anchor]=m(p.children,_,E,w,p.el,p.anchor)},b=({el:p,anchor:_},E,w)=>{let C;for(;p&&p!==_;)C=f(p),s(p,E,w),p=C;s(_,E,w)},v=({el:p,anchor:_})=>{let E;for(;p&&p!==_;)E=f(p),i(p),p=E;i(_)},U=(p,_,E,w,C,R,F,D,k)=>{F=F||_.type==="svg",p==null?$(_,E,w,C,R,F,D,k):_e(p,_,C,R,F,D,k)},$=(p,_,E,w,C,R,F,D)=>{let k,P;const{type:q,props:B,shapeFlag:W,transition:Q,dirs:re}=p;if(k=p.el=o(p.type,R,B&&B.is,B),W&8?u(k,p.children):W&16&&te(p.children,k,null,w,C,R&&q!=="foreignObject",F,D),re&&Us(p,null,w,"created"),Y(k,p,p.scopeId,F,w),B){for(const ye in B)ye!=="value"&&!ul(ye)&&r(k,ye,null,B[ye],R,p.children,w,C,Fe);"value"in B&&r(k,"value",null,B.value),(P=B.onVnodeBeforeMount)&&In(P,w,p)}re&&Us(p,null,w,"beforeMount");const we=aO(C,Q);we&&Q.beforeEnter(k),s(k,_,E),((P=B&&B.onVnodeMounted)||we||re)&&Ot(()=>{P&&In(P,w,p),we&&Q.enter(k),re&&Us(p,null,w,"mounted")},C)},Y=(p,_,E,w,C)=>{if(E&&d(p,E),w)for(let R=0;R<w.length;R++)d(p,w[R]);if(C){let R=C.subTree;if(_===R){const F=C.vnode;Y(p,F,F.scopeId,F.slotScopeIds,C.parent)}}},te=(p,_,E,w,C,R,F,D,k=0)=>{for(let P=k;P<p.length;P++){const q=p[P]=D?ms(p[P]):bn(p[P]);g(null,q,_,E,w,C,R,F,D)}},_e=(p,_,E,w,C,R,F)=>{const D=_.el=p.el;let{patchFlag:k,dynamicChildren:P,dirs:q}=_;k|=p.patchFlag&16;const B=p.props||Ne,W=_.props||Ne;let Q;E&&$s(E,!1),(Q=W.onVnodeBeforeUpdate)&&In(Q,E,_,p),q&&Us(_,p,E,"beforeUpdate"),E&&$s(E,!0);const re=C&&_.type!=="foreignObject";if(P?oe(p.dynamicChildren,P,D,E,w,re,R):F||ce(p,_,D,null,E,w,re,R,!1),k>0){if(k&16)Se(D,_,B,W,E,w,C);else if(k&2&&B.class!==W.class&&r(D,"class",null,W.class,C),k&4&&r(D,"style",B.style,W.style,C),k&8){const we=_.dynamicProps;for(let ye=0;ye<we.length;ye++){const je=we[ye],ln=B[je],Ri=W[je];(Ri!==ln||je==="value")&&r(D,je,ln,Ri,C,p.children,E,w,Fe)}}k&1&&p.children!==_.children&&u(D,_.children)}else!F&&P==null&&Se(D,_,B,W,E,w,C);((Q=W.onVnodeUpdated)||q)&&Ot(()=>{Q&&In(Q,E,_,p),q&&Us(_,p,E,"updated")},w)},oe=(p,_,E,w,C,R,F)=>{for(let D=0;D<_.length;D++){const k=p[D],P=_[D],q=k.el&&(k.type===Qt||!Yr(k,P)||k.shapeFlag&70)?h(k.el):E;g(k,P,q,null,w,C,R,F,!0)}},Se=(p,_,E,w,C,R,F)=>{if(E!==w){if(E!==Ne)for(const D in E)!ul(D)&&!(D in w)&&r(p,D,E[D],null,F,_.children,C,R,Fe);for(const D in w){if(ul(D))continue;const k=w[D],P=E[D];k!==P&&D!=="value"&&r(p,D,P,k,F,_.children,C,R,Fe)}"value"in w&&r(p,"value",E.value,w.value)}},ze=(p,_,E,w,C,R,F,D,k)=>{const P=_.el=p?p.el:a(""),q=_.anchor=p?p.anchor:a("");let{patchFlag:B,dynamicChildren:W,slotScopeIds:Q}=_;Q&&(D=D?D.concat(Q):Q),p==null?(s(P,E,w),s(q,E,w),te(_.children,E,q,C,R,F,D,k)):B>0&&B&64&&W&&p.dynamicChildren?(oe(p.dynamicChildren,W,E,C,R,F,D),(_.key!=null||C&&_===C.subTree)&&Bv(p,_,!0)):ce(p,_,E,q,C,R,F,D,k)},Re=(p,_,E,w,C,R,F,D,k)=>{_.slotScopeIds=D,p==null?_.shapeFlag&512?C.ctx.activate(_,E,w,F,k):Lt(_,E,w,C,R,F,k):Pt(p,_,k)},Lt=(p,_,E,w,C,R,F)=>{const D=p.component=gO(p,w,C);if(Nv(p)&&(D.ctx.renderer=x),yO(D),D.asyncDep){if(C&&C.registerDep(D,ge),!p.el){const k=D.subTree=Ye(li);T(null,k,_,E)}return}ge(D,p,_,E,C,R,F)},Pt=(p,_,E)=>{const w=_.component=p.component;if(RN(p,_,E))if(w.asyncDep&&!w.asyncResolved){ie(w,_,E);return}else w.next=_,TN(w.update),w.update();else _.el=p.el,w.vnode=_},ge=(p,_,E,w,C,R,F)=>{const D=()=>{if(p.isMounted){let{next:q,bu:B,u:W,parent:Q,vnode:re}=p,we=q,ye;$s(p,!1),q?(q.el=re.el,ie(p,q,F)):q=re,B&&hl(B),(ye=q.props&&q.props.onVnodeBeforeUpdate)&&In(ye,Q,q,re),$s(p,!0);const je=ku(p),ln=p.subTree;p.subTree=je,g(ln,je,h(ln.el),A(ln),p,C,R),q.el=je.el,we===null&&SN(p,je.el),W&&Ot(W,C),(ye=q.props&&q.props.onVnodeUpdated)&&Ot(()=>In(ye,Q,q,re),C)}else{let q;const{el:B,props:W}=_,{bm:Q,m:re,parent:we}=p,ye=fl(_);if($s(p,!1),Q&&hl(Q),!ye&&(q=W&&W.onVnodeBeforeMount)&&In(q,we,_),$s(p,!0),B&&he){const je=()=>{p.subTree=ku(p),he(B,p.subTree,p,C,null)};ye?_.type.__asyncLoader().then(()=>!p.isUnmounted&&je()):je()}else{const je=p.subTree=ku(p);g(null,je,E,w,p,C,R),_.el=je.el}if(re&&Ot(re,C),!ye&&(q=W&&W.onVnodeMounted)){const je=_;Ot(()=>In(q,we,je),C)}(_.shapeFlag&256||we&&fl(we.vnode)&&we.vnode.shapeFlag&256)&&p.a&&Ot(p.a,C),p.isMounted=!0,_=E=w=null}},k=p.effect=new hd(D,()=>gd(P),p.scope),P=p.update=()=>k.run();P.id=p.uid,$s(p,!0),P()},ie=(p,_,E)=>{_.component=p;const w=p.vnode.props;p.vnode=_,p.next=null,tO(p,_.props,w,E),iO(p,_.children,E),Dr(),nm(),kr()},ce=(p,_,E,w,C,R,F,D,k=!1)=>{const P=p&&p.children,q=p?p.shapeFlag:0,B=_.children,{patchFlag:W,shapeFlag:Q}=_;if(W>0){if(W&128){Mt(P,B,E,w,C,R,F,D,k);return}else if(W&256){st(P,B,E,w,C,R,F,D,k);return}}Q&8?(q&16&&Fe(P,C,R),B!==P&&u(E,B)):q&16?Q&16?Mt(P,B,E,w,C,R,F,D,k):Fe(P,C,R,!0):(q&8&&u(E,""),Q&16&&te(B,E,w,C,R,F,D,k))},st=(p,_,E,w,C,R,F,D,k)=>{p=p||qi,_=_||qi;const P=p.length,q=_.length,B=Math.min(P,q);let W;for(W=0;W<B;W++){const Q=_[W]=k?ms(_[W]):bn(_[W]);g(p[W],Q,E,null,C,R,F,D,k)}P>q?Fe(p,C,R,!0,!1,B):te(_,E,w,C,R,F,D,k,B)},Mt=(p,_,E,w,C,R,F,D,k)=>{let P=0;const q=_.length;let B=p.length-1,W=q-1;for(;P<=B&&P<=W;){const Q=p[P],re=_[P]=k?ms(_[P]):bn(_[P]);if(Yr(Q,re))g(Q,re,E,null,C,R,F,D,k);else break;P++}for(;P<=B&&P<=W;){const Q=p[B],re=_[W]=k?ms(_[W]):bn(_[W]);if(Yr(Q,re))g(Q,re,E,null,C,R,F,D,k);else break;B--,W--}if(P>B){if(P<=W){const Q=W+1,re=Q<q?_[Q].el:w;for(;P<=W;)g(null,_[P]=k?ms(_[P]):bn(_[P]),E,re,C,R,F,D,k),P++}}else if(P>W)for(;P<=B;)He(p[P],C,R,!0),P++;else{const Q=P,re=P,we=new Map;for(P=re;P<=W;P++){const Ut=_[P]=k?ms(_[P]):bn(_[P]);Ut.key!=null&&we.set(Ut.key,P)}let ye,je=0;const ln=W-re+1;let Ri=!1,l_=0;const Kr=new Array(ln);for(P=0;P<ln;P++)Kr[P]=0;for(P=Q;P<=B;P++){const Ut=p[P];if(je>=ln){He(Ut,C,R,!0);continue}let An;if(Ut.key!=null)An=we.get(Ut.key);else for(ye=re;ye<=W;ye++)if(Kr[ye-re]===0&&Yr(Ut,_[ye])){An=ye;break}An===void 0?He(Ut,C,R,!0):(Kr[An-re]=P+1,An>=l_?l_=An:Ri=!0,g(Ut,_[An],E,null,C,R,F,D,k),je++)}const c_=Ri?lO(Kr):qi;for(ye=c_.length-1,P=ln-1;P>=0;P--){const Ut=re+P,An=_[Ut],u_=Ut+1<q?_[Ut+1].el:w;Kr[P]===0?g(null,An,E,u_,C,R,F,D,k):Ri&&(ye<0||P!==c_[ye]?Nt(An,E,u_,2):ye--)}}},Nt=(p,_,E,w,C=null)=>{const{el:R,type:F,transition:D,children:k,shapeFlag:P}=p;if(P&6){Nt(p.component.subTree,_,E,w);return}if(P&128){p.suspense.move(_,E,w);return}if(P&64){F.move(p,_,E,x);return}if(F===Qt){s(R,_,E);for(let B=0;B<k.length;B++)Nt(k[B],_,E,w);s(p.anchor,_,E);return}if(F===Lu){b(p,_,E);return}if(w!==2&&P&1&&D)if(w===0)D.beforeEnter(R),s(R,_,E),Ot(()=>D.enter(R),C);else{const{leave:B,delayLeave:W,afterLeave:Q}=D,re=()=>s(R,_,E),we=()=>{B(R,()=>{re(),Q&&Q()})};W?W(R,re,we):we()}else s(R,_,E)},He=(p,_,E,w=!1,C=!1)=>{const{type:R,props:F,ref:D,children:k,dynamicChildren:P,shapeFlag:q,patchFlag:B,dirs:W}=p;if(D!=null&&Mh(D,null,E,p,!0),q&256){_.ctx.deactivate(p);return}const Q=q&1&&W,re=!fl(p);let we;if(re&&(we=F&&F.onVnodeBeforeUnmount)&&In(we,_,p),q&6)Ft(p.component,E,w);else{if(q&128){p.suspense.unmount(E,w);return}Q&&Us(p,null,_,"beforeUnmount"),q&64?p.type.remove(p,_,E,C,x,w):P&&(R!==Qt||B>0&&B&64)?Fe(P,_,E,!1,!0):(R===Qt&&B&384||!C&&q&16)&&Fe(k,_,E),w&&an(p)}(re&&(we=F&&F.onVnodeUnmounted)||Q)&&Ot(()=>{we&&In(we,_,p),Q&&Us(p,null,_,"unmounted")},E)},an=p=>{const{type:_,el:E,anchor:w,transition:C}=p;if(_===Qt){Vt(E,w);return}if(_===Lu){v(p);return}const R=()=>{i(E),C&&!C.persisted&&C.afterLeave&&C.afterLeave()};if(p.shapeFlag&1&&C&&!C.persisted){const{leave:F,delayLeave:D}=C,k=()=>F(E,R);D?D(p.el,R,k):k()}else R()},Vt=(p,_)=>{let E;for(;p!==_;)E=f(p),i(p),p=E;i(_)},Ft=(p,_,E)=>{const{bum:w,scope:C,update:R,subTree:F,um:D}=p;w&&hl(w),C.stop(),R&&(R.active=!1,He(F,p,_,E)),D&&Ot(D,_),Ot(()=>{p.isUnmounted=!0},_),_&&_.pendingBranch&&!_.isUnmounted&&p.asyncDep&&!p.asyncResolved&&p.suspenseId===_.pendingId&&(_.deps--,_.deps===0&&_.resolve())},Fe=(p,_,E,w=!1,C=!1,R=0)=>{for(let F=R;F<p.length;F++)He(p[F],_,E,w,C)},A=p=>p.shapeFlag&6?A(p.component.subTree):p.shapeFlag&128?p.suspense.next():f(p.anchor||p.el),V=(p,_,E)=>{p==null?_._vnode&&He(_._vnode,null,null,!0):g(_._vnode||null,p,_,null,null,null,E),nm(),wv(),_._vnode=p},x={p:g,um:He,m:Nt,r:an,mt:Lt,mc:te,pc:ce,pbc:oe,n:A,o:t};let j,he;return e&&([j,he]=e(x)),{render:V,hydrate:j,createApp:ZN(V,j)}}function $s({effect:t,update:e},n){t.allowRecurse=e.allowRecurse=n}function aO(t,e){return(!t||t&&!t.pendingBranch)&&e&&!e.persisted}function Bv(t,e,n=!1){const s=t.children,i=e.children;if(J(s)&&J(i))for(let r=0;r<s.length;r++){const o=s[r];let a=i[r];a.shapeFlag&1&&!a.dynamicChildren&&((a.patchFlag<=0||a.patchFlag===32)&&(a=i[r]=ms(i[r]),a.el=o.el),n||Bv(o,a)),a.type===Pc&&(a.el=o.el)}}function lO(t){const e=t.slice(),n=[0];let s,i,r,o,a;const l=t.length;for(s=0;s<l;s++){const c=t[s];if(c!==0){if(i=n[n.length-1],t[i]<c){e[s]=i,n.push(s);continue}for(r=0,o=n.length-1;r<o;)a=r+o>>1,t[n[a]]<c?r=a+1:o=a;c<t[n[r]]&&(r>0&&(e[s]=n[r-1]),n[r]=s)}}for(r=n.length,o=n[r-1];r-- >0;)n[r]=o,o=e[o];return n}const cO=t=>t.__isTeleport,Qt=Symbol.for("v-fgt"),Pc=Symbol.for("v-txt"),li=Symbol.for("v-cmt"),Lu=Symbol.for("v-stc"),Eo=[];let fn=null;function es(t=!1){Eo.push(fn=t?null:[])}function uO(){Eo.pop(),fn=Eo[Eo.length-1]||null}let Vo=1;function dm(t){Vo+=t}function Hv(t){return t.dynamicChildren=Vo>0?fn||qi:null,uO(),Vo>0&&fn&&fn.push(t),t}function ci(t,e,n,s,i,r){return Hv(ct(t,e,n,s,i,r,!0))}function jv(t,e,n,s,i){return Hv(Ye(t,e,n,s,i,!0))}function Vh(t){return t?t.__v_isVNode===!0:!1}function Yr(t,e){return t.type===e.type&&t.key===e.key}const Nc="__vInternal",Wv=({key:t})=>t??null,pl=({ref:t,ref_key:e,ref_for:n})=>(typeof t=="number"&&(t=""+t),t!=null?Qe(t)||lt(t)||ne(t)?{i:Ht,r:t,k:e,f:!!n}:t:null);function ct(t,e=null,n=null,s=0,i=null,r=t===Qt?0:1,o=!1,a=!1){const l={__v_isVNode:!0,__v_skip:!0,type:t,props:e,key:e&&Wv(e),ref:e&&pl(e),scopeId:Rc,slotScopeIds:null,children:n,component:null,suspense:null,ssContent:null,ssFallback:null,dirs:null,transition:null,el:null,anchor:null,target:null,targetAnchor:null,staticCount:0,shapeFlag:r,patchFlag:s,dynamicProps:i,dynamicChildren:null,appContext:null,ctx:Ht};return a?(Ad(l,n),r&128&&t.normalize(l)):n&&(l.shapeFlag|=Qe(n)?8:16),Vo>0&&!o&&fn&&(l.patchFlag>0||r&6)&&l.patchFlag!==32&&fn.push(l),l}const Ye=hO;function hO(t,e=null,n=null,s=0,i=null,r=!1){if((!t||t===PN)&&(t=li),Vh(t)){const a=hr(t,e,!0);return n&&Ad(a,n),Vo>0&&!r&&fn&&(a.shapeFlag&6?fn[fn.indexOf(t)]=a:fn.push(a)),a.patchFlag|=-2,a}if(AO(t)&&(t=t.__vccOpts),e){e=fO(e);let{class:a,style:l}=e;a&&!Qe(a)&&(e.class=cd(a)),Me(l)&&(fv(l)&&!J(l)&&(l=ft({},l)),e.style=ld(l))}const o=Qe(t)?1:ON(t)?128:cO(t)?64:Me(t)?4:ne(t)?2:0;return ct(t,e,n,s,i,o,r,!0)}function fO(t){return t?fv(t)||Nc in t?ft({},t):t:null}function hr(t,e,n=!1){const{props:s,ref:i,patchFlag:r,children:o}=t,a=e?pO(s||{},e):s;return{__v_isVNode:!0,__v_skip:!0,type:t.type,props:a,key:a&&Wv(a),ref:e&&e.ref?n&&i?J(i)?i.concat(pl(e)):[i,pl(e)]:pl(e):i,scopeId:t.scopeId,slotScopeIds:t.slotScopeIds,children:o,target:t.target,targetAnchor:t.targetAnchor,staticCount:t.staticCount,shapeFlag:t.shapeFlag,patchFlag:e&&t.type!==Qt?r===-1?16:r|16:r,dynamicProps:t.dynamicProps,dynamicChildren:t.dynamicChildren,appContext:t.appContext,dirs:t.dirs,transition:t.transition,component:t.component,suspense:t.suspense,ssContent:t.ssContent&&hr(t.ssContent),ssFallback:t.ssFallback&&hr(t.ssFallback),el:t.el,anchor:t.anchor,ctx:t.ctx,ce:t.ce}}function dO(t=" ",e=0){return Ye(Pc,null,t,e)}function G4(t="",e=!1){return e?(es(),jv(li,null,t)):Ye(li,null,t)}function bn(t){return t==null||typeof t=="boolean"?Ye(li):J(t)?Ye(Qt,null,t.slice()):typeof t=="object"?ms(t):Ye(Pc,null,String(t))}function ms(t){return t.el===null&&t.patchFlag!==-1||t.memo?t:hr(t)}function Ad(t,e){let n=0;const{shapeFlag:s}=t;if(e==null)e=null;else if(J(e))n=16;else if(typeof e=="object")if(s&65){const i=e.default;i&&(i._c&&(i._d=!1),Ad(t,i()),i._c&&(i._d=!0));return}else{n=32;const i=e._;!i&&!(Nc in e)?e._ctx=Ht:i===3&&Ht&&(Ht.slots._===1?e._=1:(e._=2,t.patchFlag|=1024))}else ne(e)?(e={default:e,_ctx:Ht},n=32):(e=String(e),s&64?(n=16,e=[dO(e)]):n=8);t.children=e,t.shapeFlag|=n}function pO(...t){const e={};for(let n=0;n<t.length;n++){const s=t[n];for(const i in s)if(i==="class")e.class!==s.class&&(e.class=cd([e.class,s.class]));else if(i==="style")e.style=ld([e.style,s.style]);else if(yc(i)){const r=e[i],o=s[i];o&&r!==o&&!(J(r)&&r.includes(o))&&(e[i]=r?[].concat(r,o):o)}else i!==""&&(e[i]=s[i])}return e}function In(t,e,n,s=null){mn(t,e,7,[n,s])}const _O=Lv();let mO=0;function gO(t,e,n){const s=t.type,i=(e?e.appContext:t.appContext)||_O,r={uid:mO++,vnode:t,type:s,parent:e,appContext:i,root:null,next:null,subTree:null,effect:null,update:null,scope:new KP(!0),render:null,proxy:null,exposed:null,exposeProxy:null,withProxy:null,provides:e?e.provides:Object.create(i.provides),accessCache:null,renderCache:[],components:null,directives:null,propsOptions:Vv(s,i),emitsOptions:Iv(s,i),emit:null,emitted:null,propsDefaults:Ne,inheritAttrs:s.inheritAttrs,ctx:Ne,data:Ne,props:Ne,attrs:Ne,slots:Ne,refs:Ne,setupState:Ne,setupContext:null,attrsProxy:null,slotsProxy:null,suspense:n,suspenseId:n?n.pendingId:0,asyncDep:null,asyncResolved:!1,isMounted:!1,isUnmounted:!1,isDeactivated:!1,bc:null,c:null,bm:null,m:null,bu:null,u:null,um:null,bum:null,da:null,a:null,rtg:null,rtc:null,ec:null,sp:null};return r.ctx={_:r},r.root=e?e.root:r,r.emit=IN.bind(null,r),t.ce&&t.ce(r),r}let Ze=null;const qv=()=>Ze||Ht;let Id,Ni,pm="__VUE_INSTANCE_SETTERS__";(Ni=Ch()[pm])||(Ni=Ch()[pm]=[]),Ni.push(t=>Ze=t),Id=t=>{Ni.length>1?Ni.forEach(e=>e(t)):Ni[0](t)};const fr=t=>{Id(t),t.scope.on()},ti=()=>{Ze&&Ze.scope.off(),Id(null)};function Kv(t){return t.vnode.shapeFlag&4}let Fo=!1;function yO(t,e=!1){Fo=e;const{props:n,children:s}=t.vnode,i=Kv(t);eO(t,n,i,e),sO(t,s);const r=i?EO(t,e):void 0;return Fo=!1,r}function EO(t,e){const n=t.type;t.accessCache=Object.create(null),t.proxy=dv(new Proxy(t.ctx,KN));const{setup:s}=n;if(s){const i=t.setupContext=s.length>1?TO(t):null;fr(t),Dr();const r=Ts(s,t,0,[t.props,i]);if(kr(),ti(),GE(r)){if(r.then(ti,ti),e)return r.then(o=>{_m(t,o,e)}).catch(o=>{bc(o,t,0)});t.asyncDep=r}else _m(t,r,e)}else zv(t,e)}function _m(t,e,n){ne(e)?t.type.__ssrInlineRender?t.ssrRender=e:t.render=e:Me(e)&&(t.setupState=yv(e)),zv(t,n)}let mm;function zv(t,e,n){const s=t.type;if(!t.render){if(!e&&mm&&!s.render){const i=s.template||Td(t).template;if(i){const{isCustomElement:r,compilerOptions:o}=t.appContext.config,{delimiters:a,compilerOptions:l}=s,c=ft(ft({isCustomElement:r,delimiters:a},o),l);s.render=mm(i,c)}}t.render=s.render||_n}{fr(t),Dr();try{zN(t)}finally{kr(),ti()}}}function vO(t){return t.attrsProxy||(t.attrsProxy=new Proxy(t.attrs,{get(e,n){return xt(t,"get","$attrs"),e[n]}}))}function TO(t){const e=n=>{t.exposed=n||{}};return{get attrs(){return vO(t)},slots:t.slots,emit:t.emit,expose:e}}function Oc(t){if(t.exposed)return t.exposeProxy||(t.exposeProxy=new Proxy(yv(dv(t.exposed)),{get(e,n){if(n in e)return e[n];if(n in yo)return yo[n](t)},has(e,n){return n in e||n in yo}}))}function wO(t,e=!0){return ne(t)?t.displayName||t.name:t.name||e&&t.__name}function AO(t){return ne(t)&&"__vccOpts"in t}const un=(t,e)=>yN(t,e,Fo);function Gv(t,e,n){const s=arguments.length;return s===2?Me(e)&&!J(e)?Vh(e)?Ye(t,null,[e]):Ye(t,e):Ye(t,null,e):(s>3?n=Array.prototype.slice.call(arguments,2):s===3&&Vh(n)&&(n=[n]),Ye(t,e,n))}const IO=Symbol.for("v-scx"),bO=()=>tn(IO),CO="3.3.8",RO="http://www.w3.org/2000/svg",Ws=typeof document<"u"?document:null,gm=Ws&&Ws.createElement("template"),SO={insert:(t,e,n)=>{e.insertBefore(t,n||null)},remove:t=>{const e=t.parentNode;e&&e.removeChild(t)},createElement:(t,e,n,s)=>{const i=e?Ws.createElementNS(RO,t):Ws.createElement(t,n?{is:n}:void 0);return t==="select"&&s&&s.multiple!=null&&i.setAttribute("multiple",s.multiple),i},createText:t=>Ws.createTextNode(t),createComment:t=>Ws.createComment(t),setText:(t,e)=>{t.nodeValue=e},setElementText:(t,e)=>{t.textContent=e},parentNode:t=>t.parentNode,nextSibling:t=>t.nextSibling,querySelector:t=>Ws.querySelector(t),setScopeId(t,e){t.setAttribute(e,"")},insertStaticContent(t,e,n,s,i,r){const o=n?n.previousSibling:e.lastChild;if(i&&(i===r||i.nextSibling))for(;e.insertBefore(i.cloneNode(!0),n),!(i===r||!(i=i.nextSibling)););else{gm.innerHTML=s?`<svg>${t}</svg>`:t;const a=gm.content;if(s){const l=a.firstChild;for(;l.firstChild;)a.appendChild(l.firstChild);a.removeChild(l)}e.insertBefore(a,n)}return[o?o.nextSibling:e.firstChild,n?n.previousSibling:e.lastChild]}},PO=Symbol("_vtc");function NO(t,e,n){const s=t[PO];s&&(e=(e?[e,...s]:[...s]).join(" ")),e==null?t.removeAttribute("class"):n?t.setAttribute("class",e):t.className=e}const OO=Symbol("_vod");function DO(t,e,n){const s=t.style,i=Qe(n);if(n&&!i){if(e&&!Qe(e))for(const r in e)n[r]==null&&Fh(s,r,"");for(const r in n)Fh(s,r,n[r])}else{const r=s.display;i?e!==n&&(s.cssText=n):e&&t.removeAttribute("style"),OO in t&&(s.display=r)}}const ym=/\s*!important$/;function Fh(t,e,n){if(J(n))n.forEach(s=>Fh(t,e,s));else if(n==null&&(n=""),e.startsWith("--"))t.setProperty(e,n);else{const s=kO(t,e);ym.test(n)?t.setProperty(Or(s),n.replace(ym,""),"important"):t[s]=n}}const Em=["Webkit","Moz","ms"],Mu={};function kO(t,e){const n=Mu[e];if(n)return n;let s=$n(e);if(s!=="filter"&&s in t)return Mu[e]=s;s=wc(s);for(let i=0;i<Em.length;i++){const r=Em[i]+s;if(r in t)return Mu[e]=r}return e}const vm="http://www.w3.org/1999/xlink";function xO(t,e,n,s,i){if(s&&e.startsWith("xlink:"))n==null?t.removeAttributeNS(vm,e.slice(6,e.length)):t.setAttributeNS(vm,e,n);else{const r=qP(e);n==null||r&&!XE(n)?t.removeAttribute(e):t.setAttribute(e,r?"":n)}}function LO(t,e,n,s,i,r,o){if(e==="innerHTML"||e==="textContent"){s&&o(s,i,r),t[e]=n??"";return}const a=t.tagName;if(e==="value"&&a!=="PROGRESS"&&!a.includes("-")){t._value=n;const c=a==="OPTION"?t.getAttribute("value"):t.value,u=n??"";c!==u&&(t.value=u),n==null&&t.removeAttribute(e);return}let l=!1;if(n===""||n==null){const c=typeof t[e];c==="boolean"?n=XE(n):n==null&&c==="string"?(n="",l=!0):c==="number"&&(n=0,l=!0)}try{t[e]=n}catch{}l&&t.removeAttribute(e)}function Mi(t,e,n,s){t.addEventListener(e,n,s)}function MO(t,e,n,s){t.removeEventListener(e,n,s)}const Tm=Symbol("_vei");function VO(t,e,n,s,i=null){const r=t[Tm]||(t[Tm]={}),o=r[e];if(s&&o)o.value=s;else{const[a,l]=FO(e);if(s){const c=r[e]=BO(s,i);Mi(t,a,c,l)}else o&&(MO(t,a,o,l),r[e]=void 0)}}const wm=/(?:Once|Passive|Capture)$/;function FO(t){let e;if(wm.test(t)){e={};let s;for(;s=t.match(wm);)t=t.slice(0,t.length-s[0].length),e[s[0].toLowerCase()]=!0}return[t[2]===":"?t.slice(3):Or(t.slice(2)),e]}let Vu=0;const UO=Promise.resolve(),$O=()=>Vu||(UO.then(()=>Vu=0),Vu=Date.now());function BO(t,e){const n=s=>{if(!s._vts)s._vts=Date.now();else if(s._vts<=n.attached)return;mn(HO(s,n.value),e,5,[s])};return n.value=t,n.attached=$O(),n}function HO(t,e){if(J(e)){const n=t.stopImmediatePropagation;return t.stopImmediatePropagation=()=>{n.call(t),t._stopped=!0},e.map(s=>i=>!i._stopped&&s&&s(i))}else return e}const Am=/^on[a-z]/,jO=(t,e,n,s,i=!1,r,o,a,l)=>{e==="class"?NO(t,s,i):e==="style"?DO(t,n,s):yc(e)?rd(e)||VO(t,e,n,s,o):(e[0]==="."?(e=e.slice(1),!0):e[0]==="^"?(e=e.slice(1),!1):WO(t,e,s,i))?LO(t,e,s,r,o,a,l):(e==="true-value"?t._trueValue=s:e==="false-value"&&(t._falseValue=s),xO(t,e,s,i))};function WO(t,e,n,s){return s?!!(e==="innerHTML"||e==="textContent"||e in t&&Am.test(e)&&ne(n)):e==="spellcheck"||e==="draggable"||e==="translate"||e==="form"||e==="list"&&t.tagName==="INPUT"||e==="type"&&t.tagName==="TEXTAREA"||Am.test(e)&&Qe(n)?!1:e in t}const Im=t=>{const e=t.props["onUpdate:modelValue"]||!1;return J(e)?n=>hl(e,n):e};function qO(t){t.target.composing=!0}function bm(t){const e=t.target;e.composing&&(e.composing=!1,e.dispatchEvent(new Event("input")))}const Fu=Symbol("_assign"),Y4={created(t,{modifiers:{lazy:e,trim:n,number:s}},i){t[Fu]=Im(i);const r=s||i.props&&i.props.type==="number";Mi(t,e?"change":"input",o=>{if(o.target.composing)return;let a=t.value;n&&(a=a.trim()),r&&(a=bh(a)),t[Fu](a)}),n&&Mi(t,"change",()=>{t.value=t.value.trim()}),e||(Mi(t,"compositionstart",qO),Mi(t,"compositionend",bm),Mi(t,"change",bm))},mounted(t,{value:e}){t.value=e??""},beforeUpdate(t,{value:e,modifiers:{lazy:n,trim:s,number:i}},r){if(t[Fu]=Im(r),t.composing||document.activeElement===t&&t.type!=="range"&&(n||s&&t.value.trim()===e||(i||t.type==="number")&&bh(t.value)===e))return;const o=e??"";t.value!==o&&(t.value=o)}},KO=ft({patchProp:jO},SO);let Cm;function zO(){return Cm||(Cm=rO(KO))}const GO=(...t)=>{const e=zO().createApp(...t),{mount:n}=e;return e.mount=s=>{const i=YO(s);if(!i)return;const r=e._component;!ne(r)&&!r.render&&!r.template&&(r.template=i.innerHTML),i.innerHTML="";const o=n(i,!1,i instanceof SVGElement);return i instanceof Element&&(i.removeAttribute("v-cloak"),i.setAttribute("data-v-app","")),o},e};function YO(t){return Qe(t)?document.querySelector(t):t}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Yv={NODE_CLIENT:!1,NODE_ADMIN:!1,SDK_VERSION:"${JSCORE_VERSION}"};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const L=function(t,e){if(!t)throw xr(e)},xr=function(t){return new Error("Firebase Database ("+Yv.SDK_VERSION+") INTERNAL ASSERT FAILED: "+t)};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Qv=function(t){const e=[];let n=0;for(let s=0;s<t.length;s++){let i=t.charCodeAt(s);i<128?e[n++]=i:i<2048?(e[n++]=i>>6|192,e[n++]=i&63|128):(i&64512)===55296&&s+1<t.length&&(t.charCodeAt(s+1)&64512)===56320?(i=65536+((i&1023)<<10)+(t.charCodeAt(++s)&1023),e[n++]=i>>18|240,e[n++]=i>>12&63|128,e[n++]=i>>6&63|128,e[n++]=i&63|128):(e[n++]=i>>12|224,e[n++]=i>>6&63|128,e[n++]=i&63|128)}return e},QO=function(t){const e=[];let n=0,s=0;for(;n<t.length;){const i=t[n++];if(i<128)e[s++]=String.fromCharCode(i);else if(i>191&&i<224){const r=t[n++];e[s++]=String.fromCharCode((i&31)<<6|r&63)}else if(i>239&&i<365){const r=t[n++],o=t[n++],a=t[n++],l=((i&7)<<18|(r&63)<<12|(o&63)<<6|a&63)-65536;e[s++]=String.fromCharCode(55296+(l>>10)),e[s++]=String.fromCharCode(56320+(l&1023))}else{const r=t[n++],o=t[n++];e[s++]=String.fromCharCode((i&15)<<12|(r&63)<<6|o&63)}}return e.join("")},Dc={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(t,e){if(!Array.isArray(t))throw Error("encodeByteArray takes an array as a parameter");this.init_();const n=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,s=[];for(let i=0;i<t.length;i+=3){const r=t[i],o=i+1<t.length,a=o?t[i+1]:0,l=i+2<t.length,c=l?t[i+2]:0,u=r>>2,h=(r&3)<<4|a>>4;let f=(a&15)<<2|c>>6,d=c&63;l||(d=64,o||(f=64)),s.push(n[u],n[h],n[f],n[d])}return s.join("")},encodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(t):this.encodeByteArray(Qv(t),e)},decodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(t):QO(this.decodeStringToByteArray(t,e))},decodeStringToByteArray(t,e){this.init_();const n=e?this.charToByteMapWebSafe_:this.charToByteMap_,s=[];for(let i=0;i<t.length;){const r=n[t.charAt(i++)],a=i<t.length?n[t.charAt(i)]:0;++i;const c=i<t.length?n[t.charAt(i)]:64;++i;const h=i<t.length?n[t.charAt(i)]:64;if(++i,r==null||a==null||c==null||h==null)throw new XO;const f=r<<2|a>>4;if(s.push(f),c!==64){const d=a<<4&240|c>>2;if(s.push(d),h!==64){const m=c<<6&192|h;s.push(m)}}}return s},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let t=0;t<this.ENCODED_VALS.length;t++)this.byteToCharMap_[t]=this.ENCODED_VALS.charAt(t),this.charToByteMap_[this.byteToCharMap_[t]]=t,this.byteToCharMapWebSafe_[t]=this.ENCODED_VALS_WEBSAFE.charAt(t),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[t]]=t,t>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(t)]=t,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(t)]=t)}}};class XO extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const Xv=function(t){const e=Qv(t);return Dc.encodeByteArray(e,!0)},Nl=function(t){return Xv(t).replace(/\./g,"")},Ol=function(t){try{return Dc.decodeString(t,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function JO(t){return Jv(void 0,t)}function Jv(t,e){if(!(e instanceof Object))return e;switch(e.constructor){case Date:const n=e;return new Date(n.getTime());case Object:t===void 0&&(t={});break;case Array:t=[];break;default:return e}for(const n in e)!e.hasOwnProperty(n)||!ZO(n)||(t[n]=Jv(t[n],e[n]));return t}function ZO(t){return t!=="__proto__"}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function eD(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const tD=()=>eD().__FIREBASE_DEFAULTS__,nD=()=>{if(typeof process>"u"||typeof process.env>"u")return;const t={}.__FIREBASE_DEFAULTS__;if(t)return JSON.parse(t)},sD=()=>{if(typeof document>"u")return;let t;try{t=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const e=t&&Ol(t[1]);return e&&JSON.parse(e)},kc=()=>{try{return tD()||nD()||sD()}catch(t){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${t}`);return}},iD=t=>{var e,n;return(n=(e=kc())===null||e===void 0?void 0:e.emulatorHosts)===null||n===void 0?void 0:n[t]},Zv=t=>{const e=iD(t);if(!e)return;const n=e.lastIndexOf(":");if(n<=0||n+1===e.length)throw new Error(`Invalid host ${e} with no separate hostname and port!`);const s=parseInt(e.substring(n+1),10);return e[0]==="["?[e.substring(1,n-1),s]:[e.substring(0,n),s]},eT=()=>{var t;return(t=kc())===null||t===void 0?void 0:t.config},rD=t=>{var e;return(e=kc())===null||e===void 0?void 0:e[`_${t}`]};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Uo{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}wrapCallback(e){return(n,s)=>{n?this.reject(n):this.resolve(s),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(n):e(n,s))}}}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function tT(t,e){if(t.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const n={alg:"none",type:"JWT"},s=e||"demo-project",i=t.iat||0,r=t.sub||t.user_id;if(!r)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const o=Object.assign({iss:`https://securetoken.google.com/${s}`,aud:s,iat:i,exp:i+3600,auth_time:i,sub:r,user_id:r,firebase:{sign_in_provider:"custom",identities:{}}},t),a="";return[Nl(JSON.stringify(n)),Nl(JSON.stringify(o)),a].join(".")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Bn(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function bd(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(Bn())}function oD(){var t;const e=(t=kc())===null||t===void 0?void 0:t.forceEnvironment;if(e==="node")return!0;if(e==="browser")return!1;try{return Object.prototype.toString.call(global.process)==="[object process]"}catch{return!1}}function aD(){const t=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof t=="object"&&t.id!==void 0}function nT(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function sT(){return Yv.NODE_ADMIN===!0}function iT(){try{return typeof indexedDB=="object"}catch{return!1}}function lD(){return new Promise((t,e)=>{try{let n=!0;const s="validate-browser-context-for-indexeddb-analytics-module",i=self.indexedDB.open(s);i.onsuccess=()=>{i.result.close(),n||self.indexedDB.deleteDatabase(s),t(!0)},i.onupgradeneeded=()=>{n=!1},i.onerror=()=>{var r;e(((r=i.error)===null||r===void 0?void 0:r.message)||"")}}catch(n){e(n)}})}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const cD="FirebaseError";class us extends Error{constructor(e,n,s){super(n),this.code=e,this.customData=s,this.name=cD,Object.setPrototypeOf(this,us.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,Lr.prototype.create)}}class Lr{constructor(e,n,s){this.service=e,this.serviceName=n,this.errors=s}create(e,...n){const s=n[0]||{},i=`${this.service}/${e}`,r=this.errors[e],o=r?uD(r,s):"Error",a=`${this.serviceName}: ${o} (${i}).`;return new us(i,a,s)}}function uD(t,e){return t.replace(hD,(n,s)=>{const i=e[s];return i!=null?String(i):`<${s}?>`})}const hD=/\{\$([^}]+)}/g;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function $o(t){return JSON.parse(t)}function ot(t){return JSON.stringify(t)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const rT=function(t){let e={},n={},s={},i="";try{const r=t.split(".");e=$o(Ol(r[0])||""),n=$o(Ol(r[1])||""),i=r[2],s=n.d||{},delete n.d}catch{}return{header:e,claims:n,data:s,signature:i}},fD=function(t){const e=rT(t),n=e.claims;return!!n&&typeof n=="object"&&n.hasOwnProperty("iat")},dD=function(t){const e=rT(t).claims;return typeof e=="object"&&e.admin===!0};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function hs(t,e){return Object.prototype.hasOwnProperty.call(t,e)}function dr(t,e){if(Object.prototype.hasOwnProperty.call(t,e))return t[e]}function Rm(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}function Dl(t,e,n){const s={};for(const i in t)Object.prototype.hasOwnProperty.call(t,i)&&(s[i]=e.call(n,t[i],i,t));return s}function Uh(t,e){if(t===e)return!0;const n=Object.keys(t),s=Object.keys(e);for(const i of n){if(!s.includes(i))return!1;const r=t[i],o=e[i];if(Sm(r)&&Sm(o)){if(!Uh(r,o))return!1}else if(r!==o)return!1}for(const i of s)if(!n.includes(i))return!1;return!0}function Sm(t){return t!==null&&typeof t=="object"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Cd(t){const e=[];for(const[n,s]of Object.entries(t))Array.isArray(s)?s.forEach(i=>{e.push(encodeURIComponent(n)+"="+encodeURIComponent(i))}):e.push(encodeURIComponent(n)+"="+encodeURIComponent(s));return e.length?"&"+e.join("&"):""}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class pD{constructor(){this.chain_=[],this.buf_=[],this.W_=[],this.pad_=[],this.inbuf_=0,this.total_=0,this.blockSize=512/8,this.pad_[0]=128;for(let e=1;e<this.blockSize;++e)this.pad_[e]=0;this.reset()}reset(){this.chain_[0]=1732584193,this.chain_[1]=4023233417,this.chain_[2]=2562383102,this.chain_[3]=271733878,this.chain_[4]=3285377520,this.inbuf_=0,this.total_=0}compress_(e,n){n||(n=0);const s=this.W_;if(typeof e=="string")for(let h=0;h<16;h++)s[h]=e.charCodeAt(n)<<24|e.charCodeAt(n+1)<<16|e.charCodeAt(n+2)<<8|e.charCodeAt(n+3),n+=4;else for(let h=0;h<16;h++)s[h]=e[n]<<24|e[n+1]<<16|e[n+2]<<8|e[n+3],n+=4;for(let h=16;h<80;h++){const f=s[h-3]^s[h-8]^s[h-14]^s[h-16];s[h]=(f<<1|f>>>31)&4294967295}let i=this.chain_[0],r=this.chain_[1],o=this.chain_[2],a=this.chain_[3],l=this.chain_[4],c,u;for(let h=0;h<80;h++){h<40?h<20?(c=a^r&(o^a),u=1518500249):(c=r^o^a,u=1859775393):h<60?(c=r&o|a&(r|o),u=2400959708):(c=r^o^a,u=3395469782);const f=(i<<5|i>>>27)+c+l+u+s[h]&4294967295;l=a,a=o,o=(r<<30|r>>>2)&4294967295,r=i,i=f}this.chain_[0]=this.chain_[0]+i&4294967295,this.chain_[1]=this.chain_[1]+r&4294967295,this.chain_[2]=this.chain_[2]+o&4294967295,this.chain_[3]=this.chain_[3]+a&4294967295,this.chain_[4]=this.chain_[4]+l&4294967295}update(e,n){if(e==null)return;n===void 0&&(n=e.length);const s=n-this.blockSize;let i=0;const r=this.buf_;let o=this.inbuf_;for(;i<n;){if(o===0)for(;i<=s;)this.compress_(e,i),i+=this.blockSize;if(typeof e=="string"){for(;i<n;)if(r[o]=e.charCodeAt(i),++o,++i,o===this.blockSize){this.compress_(r),o=0;break}}else for(;i<n;)if(r[o]=e[i],++o,++i,o===this.blockSize){this.compress_(r),o=0;break}}this.inbuf_=o,this.total_+=n}digest(){const e=[];let n=this.total_*8;this.inbuf_<56?this.update(this.pad_,56-this.inbuf_):this.update(this.pad_,this.blockSize-(this.inbuf_-56));for(let i=this.blockSize-1;i>=56;i--)this.buf_[i]=n&255,n/=256;this.compress_(this.buf_);let s=0;for(let i=0;i<5;i++)for(let r=24;r>=0;r-=8)e[s]=this.chain_[i]>>r&255,++s;return e}}function _D(t,e){const n=new mD(t,e);return n.subscribe.bind(n)}class mD{constructor(e,n){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=n,this.task.then(()=>{e(this)}).catch(s=>{this.error(s)})}next(e){this.forEachObserver(n=>{n.next(e)})}error(e){this.forEachObserver(n=>{n.error(e)}),this.close(e)}complete(){this.forEachObserver(e=>{e.complete()}),this.close()}subscribe(e,n,s){let i;if(e===void 0&&n===void 0&&s===void 0)throw new Error("Missing Observer.");gD(e,["next","error","complete"])?i=e:i={next:e,error:n,complete:s},i.next===void 0&&(i.next=Uu),i.error===void 0&&(i.error=Uu),i.complete===void 0&&(i.complete=Uu);const r=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?i.error(this.finalError):i.complete()}catch{}}),this.observers.push(i),r}unsubscribeOne(e){this.observers===void 0||this.observers[e]===void 0||(delete this.observers[e],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let n=0;n<this.observers.length;n++)this.sendOne(n,e)}sendOne(e,n){this.task.then(()=>{if(this.observers!==void 0&&this.observers[e]!==void 0)try{n(this.observers[e])}catch(s){typeof console<"u"&&console.error&&console.error(s)}})}close(e){this.finalized||(this.finalized=!0,e!==void 0&&(this.finalError=e),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function gD(t,e){if(typeof t!="object"||t===null)return!1;for(const n of e)if(n in t&&typeof t[n]=="function")return!0;return!1}function Uu(){}function yD(t,e){return`${t} failed: ${e} argument `}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ED=function(t){const e=[];let n=0;for(let s=0;s<t.length;s++){let i=t.charCodeAt(s);if(i>=55296&&i<=56319){const r=i-55296;s++,L(s<t.length,"Surrogate pair missing trail surrogate.");const o=t.charCodeAt(s)-56320;i=65536+(r<<10)+o}i<128?e[n++]=i:i<2048?(e[n++]=i>>6|192,e[n++]=i&63|128):i<65536?(e[n++]=i>>12|224,e[n++]=i>>6&63|128,e[n++]=i&63|128):(e[n++]=i>>18|240,e[n++]=i>>12&63|128,e[n++]=i>>6&63|128,e[n++]=i&63|128)}return e},xc=function(t){let e=0;for(let n=0;n<t.length;n++){const s=t.charCodeAt(n);s<128?e++:s<2048?e+=2:s>=55296&&s<=56319?(e+=4,n++):e+=3}return e};/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function St(t){return t&&t._delegate?t._delegate:t}class yn{constructor(e,n,s){this.name=e,this.instanceFactory=n,this.type=s,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Bs="[DEFAULT]";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class vD{constructor(e,n){this.name=e,this.container=n,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const n=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(n)){const s=new Uo;if(this.instancesDeferred.set(n,s),this.isInitialized(n)||this.shouldAutoInitialize())try{const i=this.getOrInitializeService({instanceIdentifier:n});i&&s.resolve(i)}catch{}}return this.instancesDeferred.get(n).promise}getImmediate(e){var n;const s=this.normalizeInstanceIdentifier(e==null?void 0:e.identifier),i=(n=e==null?void 0:e.optional)!==null&&n!==void 0?n:!1;if(this.isInitialized(s)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:s})}catch(r){if(i)return null;throw r}else{if(i)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(wD(e))try{this.getOrInitializeService({instanceIdentifier:Bs})}catch{}for(const[n,s]of this.instancesDeferred.entries()){const i=this.normalizeInstanceIdentifier(n);try{const r=this.getOrInitializeService({instanceIdentifier:i});s.resolve(r)}catch{}}}}clearInstance(e=Bs){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(n=>"INTERNAL"in n).map(n=>n.INTERNAL.delete()),...e.filter(n=>"_delete"in n).map(n=>n._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=Bs){return this.instances.has(e)}getOptions(e=Bs){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:n={}}=e,s=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(s))throw Error(`${this.name}(${s}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const i=this.getOrInitializeService({instanceIdentifier:s,options:n});for(const[r,o]of this.instancesDeferred.entries()){const a=this.normalizeInstanceIdentifier(r);s===a&&o.resolve(i)}return i}onInit(e,n){var s;const i=this.normalizeInstanceIdentifier(n),r=(s=this.onInitCallbacks.get(i))!==null&&s!==void 0?s:new Set;r.add(e),this.onInitCallbacks.set(i,r);const o=this.instances.get(i);return o&&e(o,i),()=>{r.delete(e)}}invokeOnInitCallbacks(e,n){const s=this.onInitCallbacks.get(n);if(s)for(const i of s)try{i(e,n)}catch{}}getOrInitializeService({instanceIdentifier:e,options:n={}}){let s=this.instances.get(e);if(!s&&this.component&&(s=this.component.instanceFactory(this.container,{instanceIdentifier:TD(e),options:n}),this.instances.set(e,s),this.instancesOptions.set(e,n),this.invokeOnInitCallbacks(s,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,s)}catch{}return s||null}normalizeInstanceIdentifier(e=Bs){return this.component?this.component.multipleInstances?e:Bs:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function TD(t){return t===Bs?void 0:t}function wD(t){return t.instantiationMode==="EAGER"}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class AD{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const n=this.getProvider(e.name);if(n.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);n.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const n=new vD(e,this);return this.providers.set(e,n),n}getProviders(){return Array.from(this.providers.values())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var ae;(function(t){t[t.DEBUG=0]="DEBUG",t[t.VERBOSE=1]="VERBOSE",t[t.INFO=2]="INFO",t[t.WARN=3]="WARN",t[t.ERROR=4]="ERROR",t[t.SILENT=5]="SILENT"})(ae||(ae={}));const ID={debug:ae.DEBUG,verbose:ae.VERBOSE,info:ae.INFO,warn:ae.WARN,error:ae.ERROR,silent:ae.SILENT},bD=ae.INFO,CD={[ae.DEBUG]:"log",[ae.VERBOSE]:"log",[ae.INFO]:"info",[ae.WARN]:"warn",[ae.ERROR]:"error"},RD=(t,e,...n)=>{if(e<t.logLevel)return;const s=new Date().toISOString(),i=CD[e];if(i)console[i](`[${s}]  ${t.name}:`,...n);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class ha{constructor(e){this.name=e,this._logLevel=bD,this._logHandler=RD,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in ae))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?ID[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,ae.DEBUG,...e),this._logHandler(this,ae.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,ae.VERBOSE,...e),this._logHandler(this,ae.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,ae.INFO,...e),this._logHandler(this,ae.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,ae.WARN,...e),this._logHandler(this,ae.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,ae.ERROR,...e),this._logHandler(this,ae.ERROR,...e)}}const SD=(t,e)=>e.some(n=>t instanceof n);let Pm,Nm;function PD(){return Pm||(Pm=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function ND(){return Nm||(Nm=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const oT=new WeakMap,$h=new WeakMap,aT=new WeakMap,$u=new WeakMap,Rd=new WeakMap;function OD(t){const e=new Promise((n,s)=>{const i=()=>{t.removeEventListener("success",r),t.removeEventListener("error",o)},r=()=>{n(ws(t.result)),i()},o=()=>{s(t.error),i()};t.addEventListener("success",r),t.addEventListener("error",o)});return e.then(n=>{n instanceof IDBCursor&&oT.set(n,t)}).catch(()=>{}),Rd.set(e,t),e}function DD(t){if($h.has(t))return;const e=new Promise((n,s)=>{const i=()=>{t.removeEventListener("complete",r),t.removeEventListener("error",o),t.removeEventListener("abort",o)},r=()=>{n(),i()},o=()=>{s(t.error||new DOMException("AbortError","AbortError")),i()};t.addEventListener("complete",r),t.addEventListener("error",o),t.addEventListener("abort",o)});$h.set(t,e)}let Bh={get(t,e,n){if(t instanceof IDBTransaction){if(e==="done")return $h.get(t);if(e==="objectStoreNames")return t.objectStoreNames||aT.get(t);if(e==="store")return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return ws(t[e])},set(t,e,n){return t[e]=n,!0},has(t,e){return t instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in t}};function kD(t){Bh=t(Bh)}function xD(t){return t===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...n){const s=t.call(Bu(this),e,...n);return aT.set(s,e.sort?e.sort():[e]),ws(s)}:ND().includes(t)?function(...e){return t.apply(Bu(this),e),ws(oT.get(this))}:function(...e){return ws(t.apply(Bu(this),e))}}function LD(t){return typeof t=="function"?xD(t):(t instanceof IDBTransaction&&DD(t),SD(t,PD())?new Proxy(t,Bh):t)}function ws(t){if(t instanceof IDBRequest)return OD(t);if($u.has(t))return $u.get(t);const e=LD(t);return e!==t&&($u.set(t,e),Rd.set(e,t)),e}const Bu=t=>Rd.get(t);function MD(t,e,{blocked:n,upgrade:s,blocking:i,terminated:r}={}){const o=indexedDB.open(t,e),a=ws(o);return s&&o.addEventListener("upgradeneeded",l=>{s(ws(o.result),l.oldVersion,l.newVersion,ws(o.transaction),l)}),n&&o.addEventListener("blocked",l=>n(l.oldVersion,l.newVersion,l)),a.then(l=>{r&&l.addEventListener("close",()=>r()),i&&l.addEventListener("versionchange",c=>i(c.oldVersion,c.newVersion,c))}).catch(()=>{}),a}const VD=["get","getKey","getAll","getAllKeys","count"],FD=["put","add","delete","clear"],Hu=new Map;function Om(t,e){if(!(t instanceof IDBDatabase&&!(e in t)&&typeof e=="string"))return;if(Hu.get(e))return Hu.get(e);const n=e.replace(/FromIndex$/,""),s=e!==n,i=FD.includes(n);if(!(n in(s?IDBIndex:IDBObjectStore).prototype)||!(i||VD.includes(n)))return;const r=async function(o,...a){const l=this.transaction(o,i?"readwrite":"readonly");let c=l.store;return s&&(c=c.index(a.shift())),(await Promise.all([c[n](...a),i&&l.done]))[0]};return Hu.set(e,r),r}kD(t=>({...t,get:(e,n,s)=>Om(e,n)||t.get(e,n,s),has:(e,n)=>!!Om(e,n)||t.has(e,n)}));/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class UD{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(n=>{if($D(n)){const s=n.getImmediate();return`${s.library}/${s.version}`}else return null}).filter(n=>n).join(" ")}}function $D(t){const e=t.getComponent();return(e==null?void 0:e.type)==="VERSION"}const Hh="@firebase/app",Dm="0.9.22";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ui=new ha("@firebase/app"),BD="@firebase/app-compat",HD="@firebase/analytics-compat",jD="@firebase/analytics",WD="@firebase/app-check-compat",qD="@firebase/app-check",KD="@firebase/auth",zD="@firebase/auth-compat",GD="@firebase/database",YD="@firebase/database-compat",QD="@firebase/functions",XD="@firebase/functions-compat",JD="@firebase/installations",ZD="@firebase/installations-compat",ek="@firebase/messaging",tk="@firebase/messaging-compat",nk="@firebase/performance",sk="@firebase/performance-compat",ik="@firebase/remote-config",rk="@firebase/remote-config-compat",ok="@firebase/storage",ak="@firebase/storage-compat",lk="@firebase/firestore",ck="@firebase/firestore-compat",uk="firebase",hk="10.5.2";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const jh="[DEFAULT]",fk={[Hh]:"fire-core",[BD]:"fire-core-compat",[jD]:"fire-analytics",[HD]:"fire-analytics-compat",[qD]:"fire-app-check",[WD]:"fire-app-check-compat",[KD]:"fire-auth",[zD]:"fire-auth-compat",[GD]:"fire-rtdb",[YD]:"fire-rtdb-compat",[QD]:"fire-fn",[XD]:"fire-fn-compat",[JD]:"fire-iid",[ZD]:"fire-iid-compat",[ek]:"fire-fcm",[tk]:"fire-fcm-compat",[nk]:"fire-perf",[sk]:"fire-perf-compat",[ik]:"fire-rc",[rk]:"fire-rc-compat",[ok]:"fire-gcs",[ak]:"fire-gcs-compat",[lk]:"fire-fst",[ck]:"fire-fst-compat","fire-js":"fire-js",[uk]:"fire-js-all"};/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const kl=new Map,Wh=new Map;function dk(t,e){try{t.container.addComponent(e)}catch(n){ui.debug(`Component ${e.name} failed to register with FirebaseApp ${t.name}`,n)}}function Hn(t){const e=t.name;if(Wh.has(e))return ui.debug(`There were multiple attempts to register component ${e}.`),!1;Wh.set(e,t);for(const n of kl.values())dk(n,t);return!0}function lT(t,e){const n=t.container.getProvider("heartbeat").getImmediate({optional:!0});return n&&n.triggerHeartbeat(),t.container.getProvider(e)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const pk={"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}."},As=new Lr("app","Firebase",pk);/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _k{constructor(e,n,s){this._isDeleted=!1,this._options=Object.assign({},e),this._config=Object.assign({},n),this._name=n.name,this._automaticDataCollectionEnabled=n.automaticDataCollectionEnabled,this._container=s,this.container.addComponent(new yn("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw As.create("app-deleted",{appName:this._name})}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Mr=hk;function cT(t,e={}){let n=t;typeof e!="object"&&(e={name:e});const s=Object.assign({name:jh,automaticDataCollectionEnabled:!1},e),i=s.name;if(typeof i!="string"||!i)throw As.create("bad-app-name",{appName:String(i)});if(n||(n=eT()),!n)throw As.create("no-options");const r=kl.get(i);if(r){if(Uh(n,r.options)&&Uh(s,r.config))return r;throw As.create("duplicate-app",{appName:i})}const o=new AD(i);for(const l of Wh.values())o.addComponent(l);const a=new _k(n,s,o);return kl.set(i,a),a}function Sd(t=jh){const e=kl.get(t);if(!e&&t===jh&&eT())return cT();if(!e)throw As.create("no-app",{appName:t});return e}function Wt(t,e,n){var s;let i=(s=fk[t])!==null&&s!==void 0?s:t;n&&(i+=`-${n}`);const r=i.match(/\s|\//),o=e.match(/\s|\//);if(r||o){const a=[`Unable to register library "${i}" with version "${e}":`];r&&a.push(`library name "${i}" contains illegal characters (whitespace or "/")`),r&&o&&a.push("and"),o&&a.push(`version name "${e}" contains illegal characters (whitespace or "/")`),ui.warn(a.join(" "));return}Hn(new yn(`${i}-version`,()=>({library:i,version:e}),"VERSION"))}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const mk="firebase-heartbeat-database",gk=1,Bo="firebase-heartbeat-store";let ju=null;function uT(){return ju||(ju=MD(mk,gk,{upgrade:(t,e)=>{switch(e){case 0:t.createObjectStore(Bo)}}}).catch(t=>{throw As.create("idb-open",{originalErrorMessage:t.message})})),ju}async function yk(t){try{return await(await uT()).transaction(Bo).objectStore(Bo).get(hT(t))}catch(e){if(e instanceof us)ui.warn(e.message);else{const n=As.create("idb-get",{originalErrorMessage:e==null?void 0:e.message});ui.warn(n.message)}}}async function km(t,e){try{const s=(await uT()).transaction(Bo,"readwrite");await s.objectStore(Bo).put(e,hT(t)),await s.done}catch(n){if(n instanceof us)ui.warn(n.message);else{const s=As.create("idb-set",{originalErrorMessage:n==null?void 0:n.message});ui.warn(s.message)}}}function hT(t){return`${t.name}!${t.options.appId}`}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ek=1024,vk=30*24*60*60*1e3;class Tk{constructor(e){this.container=e,this._heartbeatsCache=null;const n=this.container.getProvider("app").getImmediate();this._storage=new Ak(n),this._heartbeatsCachePromise=this._storage.read().then(s=>(this._heartbeatsCache=s,s))}async triggerHeartbeat(){const n=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),s=xm();if(this._heartbeatsCache===null&&(this._heartbeatsCache=await this._heartbeatsCachePromise),!(this._heartbeatsCache.lastSentHeartbeatDate===s||this._heartbeatsCache.heartbeats.some(i=>i.date===s)))return this._heartbeatsCache.heartbeats.push({date:s,agent:n}),this._heartbeatsCache.heartbeats=this._heartbeatsCache.heartbeats.filter(i=>{const r=new Date(i.date).valueOf();return Date.now()-r<=vk}),this._storage.overwrite(this._heartbeatsCache)}async getHeartbeatsHeader(){if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,this._heartbeatsCache===null||this._heartbeatsCache.heartbeats.length===0)return"";const e=xm(),{heartbeatsToSend:n,unsentEntries:s}=wk(this._heartbeatsCache.heartbeats),i=Nl(JSON.stringify({version:2,heartbeats:n}));return this._heartbeatsCache.lastSentHeartbeatDate=e,s.length>0?(this._heartbeatsCache.heartbeats=s,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),i}}function xm(){return new Date().toISOString().substring(0,10)}function wk(t,e=Ek){const n=[];let s=t.slice();for(const i of t){const r=n.find(o=>o.agent===i.agent);if(r){if(r.dates.push(i.date),Lm(n)>e){r.dates.pop();break}}else if(n.push({agent:i.agent,dates:[i.date]}),Lm(n)>e){n.pop();break}s=s.slice(1)}return{heartbeatsToSend:n,unsentEntries:s}}class Ak{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return iT()?lD().then(()=>!0).catch(()=>!1):!1}async read(){return await this._canUseIndexedDBPromise?await yk(this.app)||{heartbeats:[]}:{heartbeats:[]}}async overwrite(e){var n;if(await this._canUseIndexedDBPromise){const i=await this.read();return km(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:i.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){var n;if(await this._canUseIndexedDBPromise){const i=await this.read();return km(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:i.lastSentHeartbeatDate,heartbeats:[...i.heartbeats,...e.heartbeats]})}else return}}function Lm(t){return Nl(JSON.stringify({version:2,heartbeats:t})).length}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ik(t){Hn(new yn("platform-logger",e=>new UD(e),"PRIVATE")),Hn(new yn("heartbeat",e=>new Tk(e),"PRIVATE")),Wt(Hh,Dm,t),Wt(Hh,Dm,"esm2017"),Wt("fire-js","")}Ik("");function fT(t,e){var n={};for(var s in t)Object.prototype.hasOwnProperty.call(t,s)&&e.indexOf(s)<0&&(n[s]=t[s]);if(t!=null&&typeof Object.getOwnPropertySymbols=="function")for(var i=0,s=Object.getOwnPropertySymbols(t);i<s.length;i++)e.indexOf(s[i])<0&&Object.prototype.propertyIsEnumerable.call(t,s[i])&&(n[s[i]]=t[s[i]]);return n}function dT(){return{"dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const bk=dT,pT=new Lr("auth","Firebase",dT());/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const xl=new ha("@firebase/auth");function Ck(t,...e){xl.logLevel<=ae.WARN&&xl.warn(`Auth (${Mr}): ${t}`,...e)}function _l(t,...e){xl.logLevel<=ae.ERROR&&xl.error(`Auth (${Mr}): ${t}`,...e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Mm(t,...e){throw Pd(t,...e)}function _T(t,...e){return Pd(t,...e)}function Rk(t,e,n){const s=Object.assign(Object.assign({},bk()),{[e]:n});return new Lr("auth","Firebase",s).create(e,{appName:t.name})}function Pd(t,...e){if(typeof t!="string"){const n=e[0],s=[...e.slice(1)];return s[0]&&(s[0].appName=t.name),t._errorFactory.create(n,...s)}return pT.create(t,...e)}function Ie(t,e,...n){if(!t)throw Pd(e,...n)}function vo(t){const e="INTERNAL ASSERTION FAILED: "+t;throw _l(e),new Error(e)}function Ll(t,e){t||vo(e)}function Sk(){return Vm()==="http:"||Vm()==="https:"}function Vm(){var t;return typeof self<"u"&&((t=self.location)===null||t===void 0?void 0:t.protocol)||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Pk(){return typeof navigator<"u"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(Sk()||aD()||"connection"in navigator)?navigator.onLine:!0}function Nk(){if(typeof navigator>"u")return null;const t=navigator;return t.languages&&t.languages[0]||t.language||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class fa{constructor(e,n){this.shortDelay=e,this.longDelay=n,Ll(n>e,"Short delay should be less than long delay!"),this.isMobile=bd()||nT()}get(){return Pk()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ok(t,e){Ll(t.emulator,"Emulator should always be set here");const{url:n}=t.emulator;return e?`${n}${e.startsWith("/")?e.slice(1):e}`:n}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class mT{static initialize(e,n,s){this.fetchImpl=e,n&&(this.headersImpl=n),s&&(this.responseImpl=s)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self<"u"&&"fetch"in self)return self.fetch;if(typeof globalThis<"u"&&globalThis.fetch)return globalThis.fetch;if(typeof fetch<"u")return fetch;vo("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self<"u"&&"Headers"in self)return self.Headers;if(typeof globalThis<"u"&&globalThis.Headers)return globalThis.Headers;if(typeof Headers<"u")return Headers;vo("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self<"u"&&"Response"in self)return self.Response;if(typeof globalThis<"u"&&globalThis.Response)return globalThis.Response;if(typeof Response<"u")return Response;vo("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Dk={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"missing-password",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",PASSWORD_DOES_NOT_MEET_REQUIREMENTS:"password-does-not-meet-requirements",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error",RECAPTCHA_NOT_ENABLED:"recaptcha-not-enabled",MISSING_RECAPTCHA_TOKEN:"missing-recaptcha-token",INVALID_RECAPTCHA_TOKEN:"invalid-recaptcha-token",INVALID_RECAPTCHA_ACTION:"invalid-recaptcha-action",MISSING_CLIENT_TYPE:"missing-client-type",MISSING_RECAPTCHA_VERSION:"missing-recaptcha-version",INVALID_RECAPTCHA_VERSION:"invalid-recaptcha-version",INVALID_REQ_TYPE:"invalid-req-type"};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const kk=new fa(3e4,6e4);function xk(t,e){return t.tenantId&&!e.tenantId?Object.assign(Object.assign({},e),{tenantId:t.tenantId}):e}async function Nd(t,e,n,s,i={}){return gT(t,i,async()=>{let r={},o={};s&&(e==="GET"?o=s:r={body:JSON.stringify(s)});const a=Cd(Object.assign({key:t.config.apiKey},o)).slice(1),l=await t._getAdditionalHeaders();return l["Content-Type"]="application/json",t.languageCode&&(l["X-Firebase-Locale"]=t.languageCode),mT.fetch()(yT(t,t.config.apiHost,n,a),Object.assign({method:e,headers:l,referrerPolicy:"no-referrer"},r))})}async function gT(t,e,n){t._canInitEmulator=!1;const s=Object.assign(Object.assign({},Dk),e);try{const i=new Lk(t),r=await Promise.race([n(),i.promise]);i.clearNetworkTimeout();const o=await r.json();if("needConfirmation"in o)throw za(t,"account-exists-with-different-credential",o);if(r.ok&&!("errorMessage"in o))return o;{const a=r.ok?o.errorMessage:o.error.message,[l,c]=a.split(" : ");if(l==="FEDERATED_USER_ID_ALREADY_LINKED")throw za(t,"credential-already-in-use",o);if(l==="EMAIL_EXISTS")throw za(t,"email-already-in-use",o);if(l==="USER_DISABLED")throw za(t,"user-disabled",o);const u=s[l]||l.toLowerCase().replace(/[_\s]+/g,"-");if(c)throw Rk(t,u,c);Mm(t,u)}}catch(i){if(i instanceof us)throw i;Mm(t,"network-request-failed",{message:String(i)})}}function yT(t,e,n,s){const i=`${e}${n}?${s}`;return t.config.emulator?Ok(t.config,i):`${t.config.apiScheme}://${i}`}class Lk{constructor(e){this.auth=e,this.timer=null,this.promise=new Promise((n,s)=>{this.timer=setTimeout(()=>s(_T(this.auth,"network-request-failed")),kk.get())})}clearNetworkTimeout(){clearTimeout(this.timer)}}function za(t,e,n){const s={appName:t.name};n.email&&(s.email=n.email),n.phoneNumber&&(s.phoneNumber=n.phoneNumber);const i=_T(t,e,s);return i.customData._tokenResponse=n,i}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Mk(t,e){return Nd(t,"POST","/v1/accounts:delete",e)}async function Vk(t,e){return Nd(t,"POST","/v1/accounts:lookup",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function To(t){if(t)try{const e=new Date(Number(t));if(!isNaN(e.getTime()))return e.toUTCString()}catch{}}async function Fk(t,e=!1){const n=St(t),s=await n.getIdToken(e),i=ET(s);Ie(i&&i.exp&&i.auth_time&&i.iat,n.auth,"internal-error");const r=typeof i.firebase=="object"?i.firebase:void 0,o=r==null?void 0:r.sign_in_provider;return{claims:i,token:s,authTime:To(Wu(i.auth_time)),issuedAtTime:To(Wu(i.iat)),expirationTime:To(Wu(i.exp)),signInProvider:o||null,signInSecondFactor:(r==null?void 0:r.sign_in_second_factor)||null}}function Wu(t){return Number(t)*1e3}function ET(t){const[e,n,s]=t.split(".");if(e===void 0||n===void 0||s===void 0)return _l("JWT malformed, contained fewer than 3 sections"),null;try{const i=Ol(n);return i?JSON.parse(i):(_l("Failed to decode base64 JWT payload"),null)}catch(i){return _l("Caught error parsing JWT payload as JSON",i==null?void 0:i.toString()),null}}function Uk(t){const e=ET(t);return Ie(e,"internal-error"),Ie(typeof e.exp<"u","internal-error"),Ie(typeof e.iat<"u","internal-error"),Number(e.exp)-Number(e.iat)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function qh(t,e,n=!1){if(n)return e;try{return await e}catch(s){throw s instanceof us&&$k(s)&&t.auth.currentUser===t&&await t.auth.signOut(),s}}function $k({code:t}){return t==="auth/user-disabled"||t==="auth/user-token-expired"}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Bk{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(e){var n;if(e){const s=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),s}else{this.errorBackoff=3e4;const i=((n=this.user.stsTokenManager.expirationTime)!==null&&n!==void 0?n:0)-Date.now()-3e5;return Math.max(0,i)}}schedule(e=!1){if(!this.isRunning)return;const n=this.getInterval(e);this.timerId=setTimeout(async()=>{await this.iteration()},n)}async iteration(){try{await this.user.getIdToken(!0)}catch(e){(e==null?void 0:e.code)==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class vT{constructor(e,n){this.createdAt=e,this.lastLoginAt=n,this._initializeTime()}_initializeTime(){this.lastSignInTime=To(this.lastLoginAt),this.creationTime=To(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Ml(t){var e;const n=t.auth,s=await t.getIdToken(),i=await qh(t,Vk(n,{idToken:s}));Ie(i==null?void 0:i.users.length,n,"internal-error");const r=i.users[0];t._notifyReloadListener(r);const o=!((e=r.providerUserInfo)===null||e===void 0)&&e.length?Wk(r.providerUserInfo):[],a=jk(t.providerData,o),l=t.isAnonymous,c=!(t.email&&r.passwordHash)&&!(a!=null&&a.length),u=l?c:!1,h={uid:r.localId,displayName:r.displayName||null,photoURL:r.photoUrl||null,email:r.email||null,emailVerified:r.emailVerified||!1,phoneNumber:r.phoneNumber||null,tenantId:r.tenantId||null,providerData:a,metadata:new vT(r.createdAt,r.lastLoginAt),isAnonymous:u};Object.assign(t,h)}async function Hk(t){const e=St(t);await Ml(e),await e.auth._persistUserIfCurrent(e),e.auth._notifyListenersIfCurrent(e)}function jk(t,e){return[...t.filter(s=>!e.some(i=>i.providerId===s.providerId)),...e]}function Wk(t){return t.map(e=>{var{providerId:n}=e,s=fT(e,["providerId"]);return{providerId:n,uid:s.rawId||"",displayName:s.displayName||null,email:s.email||null,phoneNumber:s.phoneNumber||null,photoURL:s.photoUrl||null}})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function qk(t,e){const n=await gT(t,{},async()=>{const s=Cd({grant_type:"refresh_token",refresh_token:e}).slice(1),{tokenApiHost:i,apiKey:r}=t.config,o=yT(t,i,"/v1/token",`key=${r}`),a=await t._getAdditionalHeaders();return a["Content-Type"]="application/x-www-form-urlencoded",mT.fetch()(o,{method:"POST",headers:a,body:s})});return{accessToken:n.access_token,expiresIn:n.expires_in,refreshToken:n.refresh_token}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ho{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){Ie(e.idToken,"internal-error"),Ie(typeof e.idToken<"u","internal-error"),Ie(typeof e.refreshToken<"u","internal-error");const n="expiresIn"in e&&typeof e.expiresIn<"u"?Number(e.expiresIn):Uk(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,n)}async getToken(e,n=!1){return Ie(!this.accessToken||this.refreshToken,e,"user-token-expired"),!n&&this.accessToken&&!this.isExpired?this.accessToken:this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null}clearRefreshToken(){this.refreshToken=null}async refresh(e,n){const{accessToken:s,refreshToken:i,expiresIn:r}=await qk(e,n);this.updateTokensAndExpiration(s,i,Number(r))}updateTokensAndExpiration(e,n,s){this.refreshToken=n||null,this.accessToken=e||null,this.expirationTime=Date.now()+s*1e3}static fromJSON(e,n){const{refreshToken:s,accessToken:i,expirationTime:r}=n,o=new Ho;return s&&(Ie(typeof s=="string","internal-error",{appName:e}),o.refreshToken=s),i&&(Ie(typeof i=="string","internal-error",{appName:e}),o.accessToken=i),r&&(Ie(typeof r=="number","internal-error",{appName:e}),o.expirationTime=r),o}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new Ho,this.toJSON())}_performRefresh(){return vo("not implemented")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ps(t,e){Ie(typeof t=="string"||typeof t>"u","internal-error",{appName:e})}class Qi{constructor(e){var{uid:n,auth:s,stsTokenManager:i}=e,r=fT(e,["uid","auth","stsTokenManager"]);this.providerId="firebase",this.proactiveRefresh=new Bk(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=n,this.auth=s,this.stsTokenManager=i,this.accessToken=i.accessToken,this.displayName=r.displayName||null,this.email=r.email||null,this.emailVerified=r.emailVerified||!1,this.phoneNumber=r.phoneNumber||null,this.photoURL=r.photoURL||null,this.isAnonymous=r.isAnonymous||!1,this.tenantId=r.tenantId||null,this.providerData=r.providerData?[...r.providerData]:[],this.metadata=new vT(r.createdAt||void 0,r.lastLoginAt||void 0)}async getIdToken(e){const n=await qh(this,this.stsTokenManager.getToken(this.auth,e));return Ie(n,this.auth,"internal-error"),this.accessToken!==n&&(this.accessToken=n,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),n}getIdTokenResult(e){return Fk(this,e)}reload(){return Hk(this)}_assign(e){this!==e&&(Ie(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map(n=>Object.assign({},n)),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){const n=new Qi(Object.assign(Object.assign({},this),{auth:e,stsTokenManager:this.stsTokenManager._clone()}));return n.metadata._copy(this.metadata),n}_onReload(e){Ie(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,n=!1){let s=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),s=!0),n&&await Ml(this),await this.auth._persistUserIfCurrent(this),s&&this.auth._notifyListenersIfCurrent(this)}async delete(){const e=await this.getIdToken();return await qh(this,Mk(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return Object.assign(Object.assign({uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(e=>Object.assign({},e)),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId},this.metadata.toJSON()),{apiKey:this.auth.config.apiKey,appName:this.auth.name})}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,n){var s,i,r,o,a,l,c,u;const h=(s=n.displayName)!==null&&s!==void 0?s:void 0,f=(i=n.email)!==null&&i!==void 0?i:void 0,d=(r=n.phoneNumber)!==null&&r!==void 0?r:void 0,m=(o=n.photoURL)!==null&&o!==void 0?o:void 0,g=(a=n.tenantId)!==null&&a!==void 0?a:void 0,y=(l=n._redirectEventId)!==null&&l!==void 0?l:void 0,T=(c=n.createdAt)!==null&&c!==void 0?c:void 0,I=(u=n.lastLoginAt)!==null&&u!==void 0?u:void 0,{uid:b,emailVerified:v,isAnonymous:U,providerData:$,stsTokenManager:Y}=n;Ie(b&&Y,e,"internal-error");const te=Ho.fromJSON(this.name,Y);Ie(typeof b=="string",e,"internal-error"),ps(h,e.name),ps(f,e.name),Ie(typeof v=="boolean",e,"internal-error"),Ie(typeof U=="boolean",e,"internal-error"),ps(d,e.name),ps(m,e.name),ps(g,e.name),ps(y,e.name),ps(T,e.name),ps(I,e.name);const _e=new Qi({uid:b,auth:e,email:f,emailVerified:v,displayName:h,isAnonymous:U,photoURL:m,phoneNumber:d,tenantId:g,stsTokenManager:te,createdAt:T,lastLoginAt:I});return $&&Array.isArray($)&&(_e.providerData=$.map(oe=>Object.assign({},oe))),y&&(_e._redirectEventId=y),_e}static async _fromIdTokenResponse(e,n,s=!1){const i=new Ho;i.updateFromServerResponse(n);const r=new Qi({uid:n.localId,auth:e,stsTokenManager:i,isAnonymous:s});return await Ml(r),r}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Fm=new Map;function Gs(t){Ll(t instanceof Function,"Expected a class definition");let e=Fm.get(t);return e?(Ll(e instanceof t,"Instance stored in cache mismatched with class"),e):(e=new t,Fm.set(t,e),e)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class TT{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,n){this.storage[e]=n}async _get(e){const n=this.storage[e];return n===void 0?null:n}async _remove(e){delete this.storage[e]}_addListener(e,n){}_removeListener(e,n){}}TT.type="NONE";const Um=TT;/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function qu(t,e,n){return`firebase:${t}:${e}:${n}`}class Xi{constructor(e,n,s){this.persistence=e,this.auth=n,this.userKey=s;const{config:i,name:r}=this.auth;this.fullUserKey=qu(this.userKey,i.apiKey,r),this.fullPersistenceKey=qu("persistence",i.apiKey,r),this.boundEventHandler=n._onStorageEvent.bind(n),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);return e?Qi._fromJSON(this.auth,e):null}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const n=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=e,n)return this.setCurrentUser(n)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,n,s="authUser"){if(!n.length)return new Xi(Gs(Um),e,s);const i=(await Promise.all(n.map(async c=>{if(await c._isAvailable())return c}))).filter(c=>c);let r=i[0]||Gs(Um);const o=qu(s,e.config.apiKey,e.name);let a=null;for(const c of n)try{const u=await c._get(o);if(u){const h=Qi._fromJSON(e,u);c!==r&&(a=h),r=c;break}}catch{}const l=i.filter(c=>c._shouldAllowMigration);return!r._shouldAllowMigration||!l.length?new Xi(r,e,s):(r=l[0],a&&await r._set(o,a.toJSON()),await Promise.all(n.map(async c=>{if(c!==r)try{await c._remove(o)}catch{}})),new Xi(r,e,s))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function $m(t){const e=t.toLowerCase();if(e.includes("opera/")||e.includes("opr/")||e.includes("opios/"))return"Opera";if(Yk(e))return"IEMobile";if(e.includes("msie")||e.includes("trident/"))return"IE";if(e.includes("edge/"))return"Edge";if(Kk(e))return"Firefox";if(e.includes("silk/"))return"Silk";if(Xk(e))return"Blackberry";if(Jk(e))return"Webos";if(zk(e))return"Safari";if((e.includes("chrome/")||Gk(e))&&!e.includes("edge/"))return"Chrome";if(Qk(e))return"Android";{const n=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,s=t.match(n);if((s==null?void 0:s.length)===2)return s[1]}return"Other"}function Kk(t=Bn()){return/firefox\//i.test(t)}function zk(t=Bn()){const e=t.toLowerCase();return e.includes("safari/")&&!e.includes("chrome/")&&!e.includes("crios/")&&!e.includes("android")}function Gk(t=Bn()){return/crios\//i.test(t)}function Yk(t=Bn()){return/iemobile/i.test(t)}function Qk(t=Bn()){return/android/i.test(t)}function Xk(t=Bn()){return/blackberry/i.test(t)}function Jk(t=Bn()){return/webos/i.test(t)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function wT(t,e=[]){let n;switch(t){case"Browser":n=$m(Bn());break;case"Worker":n=`${$m(Bn())}-${t}`;break;default:n=t}const s=e.length?e.join(","):"FirebaseCore-web";return`${n}/JsCore/${Mr}/${s}`}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Zk{constructor(e){this.auth=e,this.queue=[]}pushCallback(e,n){const s=r=>new Promise((o,a)=>{try{const l=e(r);o(l)}catch(l){a(l)}});s.onAbort=n,this.queue.push(s);const i=this.queue.length-1;return()=>{this.queue[i]=()=>Promise.resolve()}}async runMiddleware(e){if(this.auth.currentUser===e)return;const n=[];try{for(const s of this.queue)await s(e),s.onAbort&&n.push(s.onAbort)}catch(s){n.reverse();for(const i of n)try{i()}catch{}throw this.auth._errorFactory.create("login-blocked",{originalMessage:s==null?void 0:s.message})}}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function ex(t,e={}){return Nd(t,"GET","/v2/passwordPolicy",xk(t,e))}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const tx=6;class nx{constructor(e){var n,s,i,r;const o=e.customStrengthOptions;this.customStrengthOptions={},this.customStrengthOptions.minPasswordLength=(n=o.minPasswordLength)!==null&&n!==void 0?n:tx,o.maxPasswordLength&&(this.customStrengthOptions.maxPasswordLength=o.maxPasswordLength),o.containsLowercaseCharacter!==void 0&&(this.customStrengthOptions.containsLowercaseLetter=o.containsLowercaseCharacter),o.containsUppercaseCharacter!==void 0&&(this.customStrengthOptions.containsUppercaseLetter=o.containsUppercaseCharacter),o.containsNumericCharacter!==void 0&&(this.customStrengthOptions.containsNumericCharacter=o.containsNumericCharacter),o.containsNonAlphanumericCharacter!==void 0&&(this.customStrengthOptions.containsNonAlphanumericCharacter=o.containsNonAlphanumericCharacter),this.enforcementState=e.enforcementState,this.enforcementState==="ENFORCEMENT_STATE_UNSPECIFIED"&&(this.enforcementState="OFF"),this.allowedNonAlphanumericCharacters=(i=(s=e.allowedNonAlphanumericCharacters)===null||s===void 0?void 0:s.join(""))!==null&&i!==void 0?i:"",this.forceUpgradeOnSignin=(r=e.forceUpgradeOnSignin)!==null&&r!==void 0?r:!1,this.schemaVersion=e.schemaVersion}validatePassword(e){var n,s,i,r,o,a;const l={isValid:!0,passwordPolicy:this};return this.validatePasswordLengthOptions(e,l),this.validatePasswordCharacterOptions(e,l),l.isValid&&(l.isValid=(n=l.meetsMinPasswordLength)!==null&&n!==void 0?n:!0),l.isValid&&(l.isValid=(s=l.meetsMaxPasswordLength)!==null&&s!==void 0?s:!0),l.isValid&&(l.isValid=(i=l.containsLowercaseLetter)!==null&&i!==void 0?i:!0),l.isValid&&(l.isValid=(r=l.containsUppercaseLetter)!==null&&r!==void 0?r:!0),l.isValid&&(l.isValid=(o=l.containsNumericCharacter)!==null&&o!==void 0?o:!0),l.isValid&&(l.isValid=(a=l.containsNonAlphanumericCharacter)!==null&&a!==void 0?a:!0),l}validatePasswordLengthOptions(e,n){const s=this.customStrengthOptions.minPasswordLength,i=this.customStrengthOptions.maxPasswordLength;s&&(n.meetsMinPasswordLength=e.length>=s),i&&(n.meetsMaxPasswordLength=e.length<=i)}validatePasswordCharacterOptions(e,n){this.updatePasswordCharacterOptionsStatuses(n,!1,!1,!1,!1);let s;for(let i=0;i<e.length;i++)s=e.charAt(i),this.updatePasswordCharacterOptionsStatuses(n,s>="a"&&s<="z",s>="A"&&s<="Z",s>="0"&&s<="9",this.allowedNonAlphanumericCharacters.includes(s))}updatePasswordCharacterOptionsStatuses(e,n,s,i,r){this.customStrengthOptions.containsLowercaseLetter&&(e.containsLowercaseLetter||(e.containsLowercaseLetter=n)),this.customStrengthOptions.containsUppercaseLetter&&(e.containsUppercaseLetter||(e.containsUppercaseLetter=s)),this.customStrengthOptions.containsNumericCharacter&&(e.containsNumericCharacter||(e.containsNumericCharacter=i)),this.customStrengthOptions.containsNonAlphanumericCharacter&&(e.containsNonAlphanumericCharacter||(e.containsNonAlphanumericCharacter=r))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class sx{constructor(e,n,s,i){this.app=e,this.heartbeatServiceProvider=n,this.appCheckServiceProvider=s,this.config=i,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new Bm(this),this.idTokenSubscription=new Bm(this),this.beforeStateQueue=new Zk(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION=1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=pT,this._agentRecaptchaConfig=null,this._tenantRecaptchaConfigs={},this._projectPasswordPolicy=null,this._tenantPasswordPolicies={},this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=i.sdkClientVersion}_initializeWithPersistence(e,n){return n&&(this._popupRedirectResolver=Gs(n)),this._initializationPromise=this.queue(async()=>{var s,i;if(!this._deleted&&(this.persistenceManager=await Xi.create(this,e),!this._deleted)){if(!((s=this._popupRedirectResolver)===null||s===void 0)&&s._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(n),this.lastNotifiedUid=((i=this.currentUser)===null||i===void 0?void 0:i.uid)||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!e)){if(this.currentUser&&e&&this.currentUser.uid===e.uid){this._currentUser._assign(e),await this.currentUser.getIdToken();return}await this._updateCurrentUser(e,!0)}}async initializeCurrentUser(e){var n;const s=await this.assertedPersistence.getCurrentUser();let i=s,r=!1;if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const o=(n=this.redirectUser)===null||n===void 0?void 0:n._redirectEventId,a=i==null?void 0:i._redirectEventId,l=await this.tryRedirectSignIn(e);(!o||o===a)&&(l!=null&&l.user)&&(i=l.user,r=!0)}if(!i)return this.directlySetCurrentUser(null);if(!i._redirectEventId){if(r)try{await this.beforeStateQueue.runMiddleware(i)}catch(o){i=s,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(o))}return i?this.reloadAndSetCurrentUserOrClear(i):this.directlySetCurrentUser(null)}return Ie(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===i._redirectEventId?this.directlySetCurrentUser(i):this.reloadAndSetCurrentUserOrClear(i)}async tryRedirectSignIn(e){let n=null;try{n=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch{await this._setRedirectUser(null)}return n}async reloadAndSetCurrentUserOrClear(e){try{await Ml(e)}catch(n){if((n==null?void 0:n.code)!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=Nk()}async _delete(){this._deleted=!0}async updateCurrentUser(e){const n=e?St(e):null;return n&&Ie(n.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(n&&n._clone(this))}async _updateCurrentUser(e,n=!1){if(!this._deleted)return e&&Ie(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),n||await this.beforeStateQueue.runMiddleware(e),this.queue(async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()})}async signOut(){return await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0)}setPersistence(e){return this.queue(async()=>{await this.assertedPersistence.setPersistence(Gs(e))})}_getRecaptchaConfig(){return this.tenantId==null?this._agentRecaptchaConfig:this._tenantRecaptchaConfigs[this.tenantId]}async validatePassword(e){this._getPasswordPolicyInternal()||await this._updatePasswordPolicy();const n=this._getPasswordPolicyInternal();return n.schemaVersion!==this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION?Promise.reject(this._errorFactory.create("unsupported-password-policy-schema-version",{})):n.validatePassword(e)}_getPasswordPolicyInternal(){return this.tenantId===null?this._projectPasswordPolicy:this._tenantPasswordPolicies[this.tenantId]}async _updatePasswordPolicy(){const e=await ex(this),n=new nx(e);this.tenantId===null?this._projectPasswordPolicy=n:this._tenantPasswordPolicies[this.tenantId]=n}_getPersistence(){return this.assertedPersistence.persistence.type}_updateErrorMap(e){this._errorFactory=new Lr("auth","Firebase",e())}onAuthStateChanged(e,n,s){return this.registerStateListener(this.authStateSubscription,e,n,s)}beforeAuthStateChanged(e,n){return this.beforeStateQueue.pushCallback(e,n)}onIdTokenChanged(e,n,s){return this.registerStateListener(this.idTokenSubscription,e,n,s)}authStateReady(){return new Promise((e,n)=>{if(this.currentUser)e();else{const s=this.onAuthStateChanged(()=>{s(),e()},n)}})}toJSON(){var e;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:(e=this._currentUser)===null||e===void 0?void 0:e.toJSON()}}async _setRedirectUser(e,n){const s=await this.getOrInitRedirectPersistenceManager(n);return e===null?s.removeCurrentUser():s.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const n=e&&Gs(e)||this._popupRedirectResolver;Ie(n,this,"argument-error"),this.redirectPersistenceManager=await Xi.create(this,[Gs(n._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){var n,s;return this._isInitialized&&await this.queue(async()=>{}),((n=this._currentUser)===null||n===void 0?void 0:n._redirectEventId)===e?this._currentUser:((s=this.redirectUser)===null||s===void 0?void 0:s._redirectEventId)===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(e))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var e,n;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const s=(n=(e=this.currentUser)===null||e===void 0?void 0:e.uid)!==null&&n!==void 0?n:null;this.lastNotifiedUid!==s&&(this.lastNotifiedUid=s,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,n,s,i){if(this._deleted)return()=>{};const r=typeof n=="function"?n:n.next.bind(n);let o=!1;const a=this._isInitialized?Promise.resolve():this._initializationPromise;if(Ie(a,this,"internal-error"),a.then(()=>{o||r(this.currentUser)}),typeof n=="function"){const l=e.addObserver(n,s,i);return()=>{o=!0,l()}}else{const l=e.addObserver(n);return()=>{o=!0,l()}}}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh(),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return Ie(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){!e||this.frameworks.includes(e)||(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=wT(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var e;const n={"X-Client-Version":this.clientVersion};this.app.options.appId&&(n["X-Firebase-gmpid"]=this.app.options.appId);const s=await((e=this.heartbeatServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getHeartbeatsHeader());s&&(n["X-Firebase-Client"]=s);const i=await this._getAppCheckToken();return i&&(n["X-Firebase-AppCheck"]=i),n}async _getAppCheckToken(){var e;const n=await((e=this.appCheckServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getToken());return n!=null&&n.error&&Ck(`Error while retrieving App Check token: ${n.error}`),n==null?void 0:n.token}}function ix(t){return St(t)}class Bm{constructor(e){this.auth=e,this.observer=null,this.addObserver=_D(n=>this.observer=n)}get next(){return Ie(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}function rx(t,e){const n=(e==null?void 0:e.persistence)||[],s=(Array.isArray(n)?n:[n]).map(Gs);e!=null&&e.errorMap&&t._updateErrorMap(e.errorMap),t._initializeWithPersistence(s,e==null?void 0:e.popupRedirectResolver)}new fa(3e4,6e4);/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */new fa(2e3,1e4);/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */new fa(3e4,6e4);/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */new fa(5e3,15e3);var Hm="@firebase/auth",jm="1.3.2";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ox{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){var e;return this.assertAuthConfigured(),((e=this.auth.currentUser)===null||e===void 0?void 0:e.uid)||null}async getToken(e){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(e)}:null}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const n=this.auth.onIdTokenChanged(s=>{e((s==null?void 0:s.stsTokenManager.accessToken)||null)});this.internalListeners.set(e,n),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const n=this.internalListeners.get(e);n&&(this.internalListeners.delete(e),n(),this.updateProactiveRefresh())}assertAuthConfigured(){Ie(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ax(t){switch(t){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";default:return}}function lx(t){Hn(new yn("auth",(e,{options:n})=>{const s=e.getProvider("app").getImmediate(),i=e.getProvider("heartbeat"),r=e.getProvider("app-check-internal"),{apiKey:o,authDomain:a}=s.options;Ie(o&&!o.includes(":"),"invalid-api-key",{appName:s.name});const l={apiKey:o,authDomain:a,clientPlatform:t,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:wT(t)},c=new sx(s,i,r,l);return rx(c,n),c},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((e,n,s)=>{e.getProvider("auth-internal").initialize()})),Hn(new yn("auth-internal",e=>{const n=ix(e.getProvider("auth").getImmediate());return(s=>new ox(s))(n)},"PRIVATE").setInstantiationMode("EXPLICIT")),Wt(Hm,jm,ax(t)),Wt(Hm,jm,"esm2017")}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const cx=5*60;rD("authIdTokenMaxAge");lx("Browser");/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ux=new Map,hx={activated:!1,tokenObservers:[]};function En(t){return ux.get(t)||Object.assign({},hx)}const Wm={OFFSET_DURATION:5*60*1e3,RETRIAL_MIN_WAIT:30*1e3,RETRIAL_MAX_WAIT:16*60*1e3};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class fx{constructor(e,n,s,i,r){if(this.operation=e,this.retryPolicy=n,this.getWaitDuration=s,this.lowerBound=i,this.upperBound=r,this.pending=null,this.nextErrorWaitInterval=i,i>r)throw new Error("Proactive refresh lower bound greater than upper bound!")}start(){this.nextErrorWaitInterval=this.lowerBound,this.process(!0).catch(()=>{})}stop(){this.pending&&(this.pending.reject("cancelled"),this.pending=null)}isRunning(){return!!this.pending}async process(e){this.stop();try{this.pending=new Uo,await dx(this.getNextRun(e)),this.pending.resolve(),await this.pending.promise,this.pending=new Uo,await this.operation(),this.pending.resolve(),await this.pending.promise,this.process(!0).catch(()=>{})}catch(n){this.retryPolicy(n)?this.process(!1).catch(()=>{}):this.stop()}}getNextRun(e){if(e)return this.nextErrorWaitInterval=this.lowerBound,this.getWaitDuration();{const n=this.nextErrorWaitInterval;return this.nextErrorWaitInterval*=2,this.nextErrorWaitInterval>this.upperBound&&(this.nextErrorWaitInterval=this.upperBound),n}}}function dx(t){return new Promise(e=>{setTimeout(e,t)})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const px={"already-initialized":"You have already called initializeAppCheck() for FirebaseApp {$appName} with different options. To avoid this error, call initializeAppCheck() with the same options as when it was originally called. This will return the already initialized instance.","use-before-activation":"App Check is being used before initializeAppCheck() is called for FirebaseApp {$appName}. Call initializeAppCheck() before instantiating other Firebase services.","fetch-network-error":"Fetch failed to connect to a network. Check Internet connection. Original error: {$originalErrorMessage}.","fetch-parse-error":"Fetch client could not parse response. Original error: {$originalErrorMessage}.","fetch-status-error":"Fetch server returned an HTTP error status. HTTP status: {$httpStatus}.","storage-open":"Error thrown when opening storage. Original error: {$originalErrorMessage}.","storage-get":"Error thrown when reading from storage. Original error: {$originalErrorMessage}.","storage-set":"Error thrown when writing to storage. Original error: {$originalErrorMessage}.","recaptcha-error":"ReCAPTCHA error.",throttled:"Requests throttled due to {$httpStatus} error. Attempts allowed again after {$time}"},Vl=new Lr("appCheck","AppCheck",px);function AT(t){if(!En(t).activated)throw Vl.create("use-before-activation",{appName:t.name})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const _x="firebase-app-check-database",mx=1,Kh="firebase-app-check-store";let Ga=null;function gx(){return Ga||(Ga=new Promise((t,e)=>{try{const n=indexedDB.open(_x,mx);n.onsuccess=s=>{t(s.target.result)},n.onerror=s=>{var i;e(Vl.create("storage-open",{originalErrorMessage:(i=s.target.error)===null||i===void 0?void 0:i.message}))},n.onupgradeneeded=s=>{const i=s.target.result;switch(s.oldVersion){case 0:i.createObjectStore(Kh,{keyPath:"compositeKey"})}}}catch(n){e(Vl.create("storage-open",{originalErrorMessage:n==null?void 0:n.message}))}}),Ga)}function yx(t,e){return Ex(vx(t),e)}async function Ex(t,e){const s=(await gx()).transaction(Kh,"readwrite"),r=s.objectStore(Kh).put({compositeKey:t,value:e});return new Promise((o,a)=>{r.onsuccess=l=>{o()},s.onerror=l=>{var c;a(Vl.create("storage-set",{originalErrorMessage:(c=l.target.error)===null||c===void 0?void 0:c.message}))}})}function vx(t){return`${t.options.appId}-${t.name}`}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const zh=new ha("@firebase/app-check");function qm(t,e){return iT()?yx(t,e).catch(n=>{zh.warn(`Failed to write token to IndexedDB. Error: ${n}`)}):Promise.resolve()}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Tx={error:"UNKNOWN_ERROR"};function wx(t){return Dc.encodeString(JSON.stringify(t),!1)}async function Gh(t,e=!1){const n=t.app;AT(n);const s=En(n);let i=s.token,r;if(i&&!ao(i)&&(s.token=void 0,i=void 0),!i){const l=await s.cachedTokenPromise;l&&(ao(l)?i=l:await qm(n,void 0))}if(!e&&i&&ao(i))return{token:i.token};let o=!1;try{s.exchangeTokenPromise||(s.exchangeTokenPromise=s.provider.getToken().finally(()=>{s.exchangeTokenPromise=void 0}),o=!0),i=await En(n).exchangeTokenPromise}catch(l){l.code==="appCheck/throttled"?zh.warn(l.message):zh.error(l),r=l}let a;return i?r?ao(i)?a={token:i.token,internalError:r}:a=zm(r):(a={token:i.token},s.token=i,await qm(n,i)):a=zm(r),o&&Cx(n,a),a}async function Ax(t){const e=t.app;AT(e);const{provider:n}=En(e);{const{token:s}=await n.getToken();return{token:s}}}function Ix(t,e,n,s){const{app:i}=t,r=En(i),o={next:n,error:s,type:e};if(r.tokenObservers=[...r.tokenObservers,o],r.token&&ao(r.token)){const a=r.token;Promise.resolve().then(()=>{n({token:a.token}),Km(t)}).catch(()=>{})}r.cachedTokenPromise.then(()=>Km(t))}function IT(t,e){const n=En(t),s=n.tokenObservers.filter(i=>i.next!==e);s.length===0&&n.tokenRefresher&&n.tokenRefresher.isRunning()&&n.tokenRefresher.stop(),n.tokenObservers=s}function Km(t){const{app:e}=t,n=En(e);let s=n.tokenRefresher;s||(s=bx(t),n.tokenRefresher=s),!s.isRunning()&&n.isTokenAutoRefreshEnabled&&s.start()}function bx(t){const{app:e}=t;return new fx(async()=>{const n=En(e);let s;if(n.token?s=await Gh(t,!0):s=await Gh(t),s.error)throw s.error;if(s.internalError)throw s.internalError},()=>!0,()=>{const n=En(e);if(n.token){let s=n.token.issuedAtTimeMillis+(n.token.expireTimeMillis-n.token.issuedAtTimeMillis)*.5+3e5;const i=n.token.expireTimeMillis-5*60*1e3;return s=Math.min(s,i),Math.max(0,s-Date.now())}else return 0},Wm.RETRIAL_MIN_WAIT,Wm.RETRIAL_MAX_WAIT)}function Cx(t,e){const n=En(t).tokenObservers;for(const s of n)try{s.type==="EXTERNAL"&&e.error!=null?s.error(e.error):s.next(e)}catch{}}function ao(t){return t.expireTimeMillis-Date.now()>0}function zm(t){return{token:wx(Tx),error:t}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Rx{constructor(e,n){this.app=e,this.heartbeatServiceProvider=n}_delete(){const{tokenObservers:e}=En(this.app);for(const n of e)IT(this.app,n.next);return Promise.resolve()}}function Sx(t,e){return new Rx(t,e)}function Px(t){return{getToken:e=>Gh(t,e),getLimitedUseToken:()=>Ax(t),addTokenListener:e=>Ix(t,"INTERNAL",e),removeTokenListener:e=>IT(t.app,e)}}const Nx="@firebase/app-check",Ox="0.8.0",Dx="app-check",Gm="app-check-internal";function kx(){Hn(new yn(Dx,t=>{const e=t.getProvider("app").getImmediate(),n=t.getProvider("heartbeat");return Sx(e,n)},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((t,e,n)=>{t.getProvider(Gm).initialize()})),Hn(new yn(Gm,t=>{const e=t.getProvider("app-check").getImmediate();return Px(e)},"PUBLIC").setInstantiationMode("EXPLICIT")),Wt(Nx,Ox)}kx();var xx="firebase",Lx="10.5.2";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */Wt(xx,Lx,"app");const bT=Symbol("firebaseApp");function CT(t){return qv()&&tn(bT,null)||Sd(t)}const Sn=()=>{};function Od(t,e){return e.split(".").reduce((n,s)=>n&&n[s],t)}function Mx(t,e,n){const s=(""+e).split("."),i=s.pop(),r=s.reduce((o,a)=>o&&o[a],t);if(r!=null)return Array.isArray(r)?r.splice(Number(i),1,n):r[i]=n}function Ti(t){return!!t&&typeof t=="object"}const Vx=Object.prototype;function Fx(t){return Ti(t)&&Object.getPrototypeOf(t)===Vx}function Dd(t){return Ti(t)&&t.type==="document"}function Ux(t){return Ti(t)&&t.type==="collection"}function $x(t){return Dd(t)||Ux(t)}function Bx(t){return Ti(t)&&t.type==="query"}function Hx(t){return Ti(t)&&"ref"in t}function jx(t){return Ti(t)&&typeof t.bucket=="string"}function Wx(t,e){let n;return()=>{if(!n)return n=!0,t(e())}}const qx=Symbol.for("v-scx");function Kx(){return!!tn(qx,0)}const Ym="@firebase/database",Qm="1.0.1";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let RT="";function zx(t){RT=t}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Gx{constructor(e){this.domStorage_=e,this.prefix_="firebase:"}set(e,n){n==null?this.domStorage_.removeItem(this.prefixedName_(e)):this.domStorage_.setItem(this.prefixedName_(e),ot(n))}get(e){const n=this.domStorage_.getItem(this.prefixedName_(e));return n==null?null:$o(n)}remove(e){this.domStorage_.removeItem(this.prefixedName_(e))}prefixedName_(e){return this.prefix_+e}toString(){return this.domStorage_.toString()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Yx{constructor(){this.cache_={},this.isInMemoryStorage=!0}set(e,n){n==null?delete this.cache_[e]:this.cache_[e]=n}get(e){return hs(this.cache_,e)?this.cache_[e]:null}remove(e){delete this.cache_[e]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ST=function(t){try{if(typeof window<"u"&&typeof window[t]<"u"){const e=window[t];return e.setItem("firebase:sentinel","cache"),e.removeItem("firebase:sentinel"),new Gx(e)}}catch{}return new Yx},Ys=ST("localStorage"),Yh=ST("sessionStorage");/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ji=new ha("@firebase/database"),Qx=function(){let t=1;return function(){return t++}}(),PT=function(t){const e=ED(t),n=new pD;n.update(e);const s=n.digest();return Dc.encodeByteArray(s)},da=function(...t){let e="";for(let n=0;n<t.length;n++){const s=t[n];Array.isArray(s)||s&&typeof s=="object"&&typeof s.length=="number"?e+=da.apply(null,s):typeof s=="object"?e+=ot(s):e+=s,e+=" "}return e};let ni=null,Xm=!0;const Xx=function(t,e){L(!e||t===!0||t===!1,"Can't turn on custom loggers persistently."),t===!0?(Ji.logLevel=ae.VERBOSE,ni=Ji.log.bind(Ji),e&&Yh.set("logging_enabled",!0)):typeof t=="function"?ni=t:(ni=null,Yh.remove("logging_enabled"))},_t=function(...t){if(Xm===!0&&(Xm=!1,ni===null&&Yh.get("logging_enabled")===!0&&Xx(!0)),ni){const e=da.apply(null,t);ni(e)}},pa=function(t){return function(...e){_t(t,...e)}},Qh=function(...t){const e="FIREBASE INTERNAL ERROR: "+da(...t);Ji.error(e)},hi=function(...t){const e=`FIREBASE FATAL ERROR: ${da(...t)}`;throw Ji.error(e),new Error(e)},qt=function(...t){const e="FIREBASE WARNING: "+da(...t);Ji.warn(e)},Jx=function(){typeof window<"u"&&window.location&&window.location.protocol&&window.location.protocol.indexOf("https:")!==-1&&qt("Insecure Firebase access from a secure page. Please use https in calls to new Firebase().")},NT=function(t){return typeof t=="number"&&(t!==t||t===Number.POSITIVE_INFINITY||t===Number.NEGATIVE_INFINITY)},Zx=function(t){if(document.readyState==="complete")t();else{let e=!1;const n=function(){if(!document.body){setTimeout(n,Math.floor(10));return}e||(e=!0,t())};document.addEventListener?(document.addEventListener("DOMContentLoaded",n,!1),window.addEventListener("load",n,!1)):document.attachEvent&&(document.attachEvent("onreadystatechange",()=>{document.readyState==="complete"&&n()}),window.attachEvent("onload",n))}},pr="[MIN_NAME]",fi="[MAX_NAME]",Vr=function(t,e){if(t===e)return 0;if(t===pr||e===fi)return-1;if(e===pr||t===fi)return 1;{const n=Jm(t),s=Jm(e);return n!==null?s!==null?n-s===0?t.length-e.length:n-s:-1:s!==null?1:t<e?-1:1}},e1=function(t,e){return t===e?0:t<e?-1:1},Qr=function(t,e){if(e&&t in e)return e[t];throw new Error("Missing required key ("+t+") in object: "+ot(e))},kd=function(t){if(typeof t!="object"||t===null)return ot(t);const e=[];for(const s in t)e.push(s);e.sort();let n="{";for(let s=0;s<e.length;s++)s!==0&&(n+=","),n+=ot(e[s]),n+=":",n+=kd(t[e[s]]);return n+="}",n},OT=function(t,e){const n=t.length;if(n<=e)return[t];const s=[];for(let i=0;i<n;i+=e)i+e>n?s.push(t.substring(i,n)):s.push(t.substring(i,i+e));return s};function rn(t,e){for(const n in t)t.hasOwnProperty(n)&&e(n,t[n])}const DT=function(t){L(!NT(t),"Invalid JSON number");const e=11,n=52,s=(1<<e-1)-1;let i,r,o,a,l;t===0?(r=0,o=0,i=1/t===-1/0?1:0):(i=t<0,t=Math.abs(t),t>=Math.pow(2,1-s)?(a=Math.min(Math.floor(Math.log(t)/Math.LN2),s),r=a+s,o=Math.round(t*Math.pow(2,n-a)-Math.pow(2,n))):(r=0,o=Math.round(t/Math.pow(2,1-s-n))));const c=[];for(l=n;l;l-=1)c.push(o%2?1:0),o=Math.floor(o/2);for(l=e;l;l-=1)c.push(r%2?1:0),r=Math.floor(r/2);c.push(i?1:0),c.reverse();const u=c.join("");let h="";for(l=0;l<64;l+=8){let f=parseInt(u.substr(l,8),2).toString(16);f.length===1&&(f="0"+f),h=h+f}return h.toLowerCase()},t1=function(){return!!(typeof window=="object"&&window.chrome&&window.chrome.extension&&!/^chrome/.test(window.location.href))},n1=function(){return typeof Windows=="object"&&typeof Windows.UI=="object"},s1=new RegExp("^-?(0*)\\d{1,10}$"),i1=-2147483648,r1=2147483647,Jm=function(t){if(s1.test(t)){const e=Number(t);if(e>=i1&&e<=r1)return e}return null},_a=function(t){try{t()}catch(e){setTimeout(()=>{const n=e.stack||"";throw qt("Exception was thrown by user callback.",n),e},Math.floor(0))}},o1=function(){return(typeof window=="object"&&window.navigator&&window.navigator.userAgent||"").search(/googlebot|google webmaster tools|bingbot|yahoo! slurp|baiduspider|yandexbot|duckduckbot/i)>=0},wo=function(t,e){const n=setTimeout(t,e);return typeof n=="number"&&typeof Deno<"u"&&Deno.unrefTimer?Deno.unrefTimer(n):typeof n=="object"&&n.unref&&n.unref(),n};/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class a1{constructor(e,n){this.appName_=e,this.appCheckProvider=n,this.appCheck=n==null?void 0:n.getImmediate({optional:!0}),this.appCheck||n==null||n.get().then(s=>this.appCheck=s)}getToken(e){return this.appCheck?this.appCheck.getToken(e):new Promise((n,s)=>{setTimeout(()=>{this.appCheck?this.getToken(e).then(n,s):n(null)},0)})}addTokenChangeListener(e){var n;(n=this.appCheckProvider)===null||n===void 0||n.get().then(s=>s.addTokenListener(e))}notifyForInvalidToken(){qt(`Provided AppCheck credentials for the app named "${this.appName_}" are invalid. This usually indicates your app was not initialized correctly.`)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class l1{constructor(e,n,s){this.appName_=e,this.firebaseOptions_=n,this.authProvider_=s,this.auth_=null,this.auth_=s.getImmediate({optional:!0}),this.auth_||s.onInit(i=>this.auth_=i)}getToken(e){return this.auth_?this.auth_.getToken(e).catch(n=>n&&n.code==="auth/token-not-initialized"?(_t("Got auth/token-not-initialized error.  Treating as null token."),null):Promise.reject(n)):new Promise((n,s)=>{setTimeout(()=>{this.auth_?this.getToken(e).then(n,s):n(null)},0)})}addTokenChangeListener(e){this.auth_?this.auth_.addAuthTokenListener(e):this.authProvider_.get().then(n=>n.addAuthTokenListener(e))}removeTokenChangeListener(e){this.authProvider_.get().then(n=>n.removeAuthTokenListener(e))}notifyForInvalidToken(){let e='Provided authentication credentials for the app named "'+this.appName_+'" are invalid. This usually indicates your app was not initialized correctly. ';"credential"in this.firebaseOptions_?e+='Make sure the "credential" property provided to initializeApp() is authorized to access the specified "databaseURL" and is from the correct project.':"serviceAccount"in this.firebaseOptions_?e+='Make sure the "serviceAccount" property provided to initializeApp() is authorized to access the specified "databaseURL" and is from the correct project.':e+='Make sure the "apiKey" and "databaseURL" properties provided to initializeApp() match the values provided for your app at https://console.firebase.google.com/.',qt(e)}}class Xh{constructor(e){this.accessToken=e}getToken(e){return Promise.resolve({accessToken:this.accessToken})}addTokenChangeListener(e){e(this.accessToken)}removeTokenChangeListener(e){}notifyForInvalidToken(){}}Xh.OWNER="owner";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const xd="5",kT="v",xT="s",LT="r",MT="f",VT=/(console\.firebase|firebase-console-\w+\.corp|firebase\.corp)\.google\.com/,FT="ls",UT="p",Jh="ac",$T="websocket",BT="long_polling";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class c1{constructor(e,n,s,i,r=!1,o="",a=!1,l=!1){this.secure=n,this.namespace=s,this.webSocketOnly=i,this.nodeAdmin=r,this.persistenceKey=o,this.includeNamespaceInQueryParams=a,this.isUsingEmulator=l,this._host=e.toLowerCase(),this._domain=this._host.substr(this._host.indexOf(".")+1),this.internalHost=Ys.get("host:"+e)||this._host}isCacheableHost(){return this.internalHost.substr(0,2)==="s-"}isCustomHost(){return this._domain!=="firebaseio.com"&&this._domain!=="firebaseio-demo.com"}get host(){return this._host}set host(e){e!==this.internalHost&&(this.internalHost=e,this.isCacheableHost()&&Ys.set("host:"+this._host,this.internalHost))}toString(){let e=this.toURLString();return this.persistenceKey&&(e+="<"+this.persistenceKey+">"),e}toURLString(){const e=this.secure?"https://":"http://",n=this.includeNamespaceInQueryParams?`?ns=${this.namespace}`:"";return`${e}${this.host}/${n}`}}function u1(t){return t.host!==t.internalHost||t.isCustomHost()||t.includeNamespaceInQueryParams}function HT(t,e,n){L(typeof e=="string","typeof type must == string"),L(typeof n=="object","typeof params must == object");let s;if(e===$T)s=(t.secure?"wss://":"ws://")+t.internalHost+"/.ws?";else if(e===BT)s=(t.secure?"https://":"http://")+t.internalHost+"/.lp?";else throw new Error("Unknown connection type: "+e);u1(t)&&(n.ns=t.namespace);const i=[];return rn(n,(r,o)=>{i.push(r+"="+o)}),s+i.join("&")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class h1{constructor(){this.counters_={}}incrementCounter(e,n=1){hs(this.counters_,e)||(this.counters_[e]=0),this.counters_[e]+=n}get(){return JO(this.counters_)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ku={},zu={};function Ld(t){const e=t.toString();return Ku[e]||(Ku[e]=new h1),Ku[e]}function f1(t,e){const n=t.toString();return zu[n]||(zu[n]=e()),zu[n]}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class d1{constructor(e){this.onMessage_=e,this.pendingResponses=[],this.currentResponseNum=0,this.closeAfterResponse=-1,this.onClose=null}closeAfter(e,n){this.closeAfterResponse=e,this.onClose=n,this.closeAfterResponse<this.currentResponseNum&&(this.onClose(),this.onClose=null)}handleResponse(e,n){for(this.pendingResponses[e]=n;this.pendingResponses[this.currentResponseNum];){const s=this.pendingResponses[this.currentResponseNum];delete this.pendingResponses[this.currentResponseNum];for(let i=0;i<s.length;++i)s[i]&&_a(()=>{this.onMessage_(s[i])});if(this.currentResponseNum===this.closeAfterResponse){this.onClose&&(this.onClose(),this.onClose=null);break}this.currentResponseNum++}}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Zm="start",p1="close",_1="pLPCommand",m1="pRTLPCB",jT="id",WT="pw",qT="ser",g1="cb",y1="seg",E1="ts",v1="d",T1="dframe",KT=1870,zT=30,w1=KT-zT,A1=25e3,I1=3e4;class Hi{constructor(e,n,s,i,r,o,a){this.connId=e,this.repoInfo=n,this.applicationId=s,this.appCheckToken=i,this.authToken=r,this.transportSessionId=o,this.lastSessionId=a,this.bytesSent=0,this.bytesReceived=0,this.everConnected_=!1,this.log_=pa(e),this.stats_=Ld(n),this.urlFn=l=>(this.appCheckToken&&(l[Jh]=this.appCheckToken),HT(n,BT,l))}open(e,n){this.curSegmentNum=0,this.onDisconnect_=n,this.myPacketOrderer=new d1(e),this.isClosed_=!1,this.connectTimeoutTimer_=setTimeout(()=>{this.log_("Timed out trying to connect."),this.onClosed_(),this.connectTimeoutTimer_=null},Math.floor(I1)),Zx(()=>{if(this.isClosed_)return;this.scriptTagHolder=new Md((...r)=>{const[o,a,l,c,u]=r;if(this.incrementIncomingBytes_(r),!!this.scriptTagHolder)if(this.connectTimeoutTimer_&&(clearTimeout(this.connectTimeoutTimer_),this.connectTimeoutTimer_=null),this.everConnected_=!0,o===Zm)this.id=a,this.password=l;else if(o===p1)a?(this.scriptTagHolder.sendNewPolls=!1,this.myPacketOrderer.closeAfter(a,()=>{this.onClosed_()})):this.onClosed_();else throw new Error("Unrecognized command received: "+o)},(...r)=>{const[o,a]=r;this.incrementIncomingBytes_(r),this.myPacketOrderer.handleResponse(o,a)},()=>{this.onClosed_()},this.urlFn);const s={};s[Zm]="t",s[qT]=Math.floor(Math.random()*1e8),this.scriptTagHolder.uniqueCallbackIdentifier&&(s[g1]=this.scriptTagHolder.uniqueCallbackIdentifier),s[kT]=xd,this.transportSessionId&&(s[xT]=this.transportSessionId),this.lastSessionId&&(s[FT]=this.lastSessionId),this.applicationId&&(s[UT]=this.applicationId),this.appCheckToken&&(s[Jh]=this.appCheckToken),typeof location<"u"&&location.hostname&&VT.test(location.hostname)&&(s[LT]=MT);const i=this.urlFn(s);this.log_("Connecting via long-poll to "+i),this.scriptTagHolder.addTag(i,()=>{})})}start(){this.scriptTagHolder.startLongPoll(this.id,this.password),this.addDisconnectPingFrame(this.id,this.password)}static forceAllow(){Hi.forceAllow_=!0}static forceDisallow(){Hi.forceDisallow_=!0}static isAvailable(){return Hi.forceAllow_?!0:!Hi.forceDisallow_&&typeof document<"u"&&document.createElement!=null&&!t1()&&!n1()}markConnectionHealthy(){}shutdown_(){this.isClosed_=!0,this.scriptTagHolder&&(this.scriptTagHolder.close(),this.scriptTagHolder=null),this.myDisconnFrame&&(document.body.removeChild(this.myDisconnFrame),this.myDisconnFrame=null),this.connectTimeoutTimer_&&(clearTimeout(this.connectTimeoutTimer_),this.connectTimeoutTimer_=null)}onClosed_(){this.isClosed_||(this.log_("Longpoll is closing itself"),this.shutdown_(),this.onDisconnect_&&(this.onDisconnect_(this.everConnected_),this.onDisconnect_=null))}close(){this.isClosed_||(this.log_("Longpoll is being closed."),this.shutdown_())}send(e){const n=ot(e);this.bytesSent+=n.length,this.stats_.incrementCounter("bytes_sent",n.length);const s=Xv(n),i=OT(s,w1);for(let r=0;r<i.length;r++)this.scriptTagHolder.enqueueSegment(this.curSegmentNum,i.length,i[r]),this.curSegmentNum++}addDisconnectPingFrame(e,n){this.myDisconnFrame=document.createElement("iframe");const s={};s[T1]="t",s[jT]=e,s[WT]=n,this.myDisconnFrame.src=this.urlFn(s),this.myDisconnFrame.style.display="none",document.body.appendChild(this.myDisconnFrame)}incrementIncomingBytes_(e){const n=ot(e).length;this.bytesReceived+=n,this.stats_.incrementCounter("bytes_received",n)}}class Md{constructor(e,n,s,i){this.onDisconnect=s,this.urlFn=i,this.outstandingRequests=new Set,this.pendingSegs=[],this.currentSerial=Math.floor(Math.random()*1e8),this.sendNewPolls=!0;{this.uniqueCallbackIdentifier=Qx(),window[_1+this.uniqueCallbackIdentifier]=e,window[m1+this.uniqueCallbackIdentifier]=n,this.myIFrame=Md.createIFrame_();let r="";this.myIFrame.src&&this.myIFrame.src.substr(0,11)==="javascript:"&&(r='<script>document.domain="'+document.domain+'";<\/script>');const o="<html><body>"+r+"</body></html>";try{this.myIFrame.doc.open(),this.myIFrame.doc.write(o),this.myIFrame.doc.close()}catch(a){_t("frame writing exception"),a.stack&&_t(a.stack),_t(a)}}}static createIFrame_(){const e=document.createElement("iframe");if(e.style.display="none",document.body){document.body.appendChild(e);try{e.contentWindow.document||_t("No IE domain setting required")}catch{const s=document.domain;e.src="javascript:void((function(){document.open();document.domain='"+s+"';document.close();})())"}}else throw"Document body has not initialized. Wait to initialize Firebase until after the document is ready.";return e.contentDocument?e.doc=e.contentDocument:e.contentWindow?e.doc=e.contentWindow.document:e.document&&(e.doc=e.document),e}close(){this.alive=!1,this.myIFrame&&(this.myIFrame.doc.body.textContent="",setTimeout(()=>{this.myIFrame!==null&&(document.body.removeChild(this.myIFrame),this.myIFrame=null)},Math.floor(0)));const e=this.onDisconnect;e&&(this.onDisconnect=null,e())}startLongPoll(e,n){for(this.myID=e,this.myPW=n,this.alive=!0;this.newRequest_(););}newRequest_(){if(this.alive&&this.sendNewPolls&&this.outstandingRequests.size<(this.pendingSegs.length>0?2:1)){this.currentSerial++;const e={};e[jT]=this.myID,e[WT]=this.myPW,e[qT]=this.currentSerial;let n=this.urlFn(e),s="",i=0;for(;this.pendingSegs.length>0&&this.pendingSegs[0].d.length+zT+s.length<=KT;){const o=this.pendingSegs.shift();s=s+"&"+y1+i+"="+o.seg+"&"+E1+i+"="+o.ts+"&"+v1+i+"="+o.d,i++}return n=n+s,this.addLongPollTag_(n,this.currentSerial),!0}else return!1}enqueueSegment(e,n,s){this.pendingSegs.push({seg:e,ts:n,d:s}),this.alive&&this.newRequest_()}addLongPollTag_(e,n){this.outstandingRequests.add(n);const s=()=>{this.outstandingRequests.delete(n),this.newRequest_()},i=setTimeout(s,Math.floor(A1)),r=()=>{clearTimeout(i),s()};this.addTag(e,r)}addTag(e,n){setTimeout(()=>{try{if(!this.sendNewPolls)return;const s=this.myIFrame.doc.createElement("script");s.type="text/javascript",s.async=!0,s.src=e,s.onload=s.onreadystatechange=function(){const i=s.readyState;(!i||i==="loaded"||i==="complete")&&(s.onload=s.onreadystatechange=null,s.parentNode&&s.parentNode.removeChild(s),n())},s.onerror=()=>{_t("Long-poll script failed to load: "+e),this.sendNewPolls=!1,this.close()},this.myIFrame.doc.body.appendChild(s)}catch{}},Math.floor(1))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const b1=16384,C1=45e3;let Fl=null;typeof MozWebSocket<"u"?Fl=MozWebSocket:typeof WebSocket<"u"&&(Fl=WebSocket);class hn{constructor(e,n,s,i,r,o,a){this.connId=e,this.applicationId=s,this.appCheckToken=i,this.authToken=r,this.keepaliveTimer=null,this.frames=null,this.totalFrames=0,this.bytesSent=0,this.bytesReceived=0,this.log_=pa(this.connId),this.stats_=Ld(n),this.connURL=hn.connectionURL_(n,o,a,i,s),this.nodeAdmin=n.nodeAdmin}static connectionURL_(e,n,s,i,r){const o={};return o[kT]=xd,typeof location<"u"&&location.hostname&&VT.test(location.hostname)&&(o[LT]=MT),n&&(o[xT]=n),s&&(o[FT]=s),i&&(o[Jh]=i),r&&(o[UT]=r),HT(e,$T,o)}open(e,n){this.onDisconnect=n,this.onMessage=e,this.log_("Websocket connecting to "+this.connURL),this.everConnected_=!1,Ys.set("previous_websocket_failure",!0);try{let s;sT(),this.mySock=new Fl(this.connURL,[],s)}catch(s){this.log_("Error instantiating WebSocket.");const i=s.message||s.data;i&&this.log_(i),this.onClosed_();return}this.mySock.onopen=()=>{this.log_("Websocket connected."),this.everConnected_=!0},this.mySock.onclose=()=>{this.log_("Websocket connection was disconnected."),this.mySock=null,this.onClosed_()},this.mySock.onmessage=s=>{this.handleIncomingFrame(s)},this.mySock.onerror=s=>{this.log_("WebSocket error.  Closing connection.");const i=s.message||s.data;i&&this.log_(i),this.onClosed_()}}start(){}static forceDisallow(){hn.forceDisallow_=!0}static isAvailable(){let e=!1;if(typeof navigator<"u"&&navigator.userAgent){const n=/Android ([0-9]{0,}\.[0-9]{0,})/,s=navigator.userAgent.match(n);s&&s.length>1&&parseFloat(s[1])<4.4&&(e=!0)}return!e&&Fl!==null&&!hn.forceDisallow_}static previouslyFailed(){return Ys.isInMemoryStorage||Ys.get("previous_websocket_failure")===!0}markConnectionHealthy(){Ys.remove("previous_websocket_failure")}appendFrame_(e){if(this.frames.push(e),this.frames.length===this.totalFrames){const n=this.frames.join("");this.frames=null;const s=$o(n);this.onMessage(s)}}handleNewFrameCount_(e){this.totalFrames=e,this.frames=[]}extractFrameCount_(e){if(L(this.frames===null,"We already have a frame buffer"),e.length<=6){const n=Number(e);if(!isNaN(n))return this.handleNewFrameCount_(n),null}return this.handleNewFrameCount_(1),e}handleIncomingFrame(e){if(this.mySock===null)return;const n=e.data;if(this.bytesReceived+=n.length,this.stats_.incrementCounter("bytes_received",n.length),this.resetKeepAlive(),this.frames!==null)this.appendFrame_(n);else{const s=this.extractFrameCount_(n);s!==null&&this.appendFrame_(s)}}send(e){this.resetKeepAlive();const n=ot(e);this.bytesSent+=n.length,this.stats_.incrementCounter("bytes_sent",n.length);const s=OT(n,b1);s.length>1&&this.sendString_(String(s.length));for(let i=0;i<s.length;i++)this.sendString_(s[i])}shutdown_(){this.isClosed_=!0,this.keepaliveTimer&&(clearInterval(this.keepaliveTimer),this.keepaliveTimer=null),this.mySock&&(this.mySock.close(),this.mySock=null)}onClosed_(){this.isClosed_||(this.log_("WebSocket is closing itself"),this.shutdown_(),this.onDisconnect&&(this.onDisconnect(this.everConnected_),this.onDisconnect=null))}close(){this.isClosed_||(this.log_("WebSocket is being closed"),this.shutdown_())}resetKeepAlive(){clearInterval(this.keepaliveTimer),this.keepaliveTimer=setInterval(()=>{this.mySock&&this.sendString_("0"),this.resetKeepAlive()},Math.floor(C1))}sendString_(e){try{this.mySock.send(e)}catch(n){this.log_("Exception thrown from WebSocket.send():",n.message||n.data,"Closing connection."),setTimeout(this.onClosed_.bind(this),0)}}}hn.responsesRequiredToBeHealthy=2;hn.healthyTimeout=3e4;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class jo{constructor(e){this.initTransports_(e)}static get ALL_TRANSPORTS(){return[Hi,hn]}static get IS_TRANSPORT_INITIALIZED(){return this.globalTransportInitialized_}initTransports_(e){const n=hn&&hn.isAvailable();let s=n&&!hn.previouslyFailed();if(e.webSocketOnly&&(n||qt("wss:// URL used, but browser isn't known to support websockets.  Trying anyway."),s=!0),s)this.transports_=[hn];else{const i=this.transports_=[];for(const r of jo.ALL_TRANSPORTS)r&&r.isAvailable()&&i.push(r);jo.globalTransportInitialized_=!0}}initialTransport(){if(this.transports_.length>0)return this.transports_[0];throw new Error("No transports available")}upgradeTransport(){return this.transports_.length>1?this.transports_[1]:null}}jo.globalTransportInitialized_=!1;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const R1=6e4,S1=5e3,P1=10*1024,N1=100*1024,Gu="t",eg="d",O1="s",tg="r",D1="e",ng="o",sg="a",ig="n",rg="p",k1="h";class x1{constructor(e,n,s,i,r,o,a,l,c,u){this.id=e,this.repoInfo_=n,this.applicationId_=s,this.appCheckToken_=i,this.authToken_=r,this.onMessage_=o,this.onReady_=a,this.onDisconnect_=l,this.onKill_=c,this.lastSessionId=u,this.connectionCount=0,this.pendingDataMessages=[],this.state_=0,this.log_=pa("c:"+this.id+":"),this.transportManager_=new jo(n),this.log_("Connection created"),this.start_()}start_(){const e=this.transportManager_.initialTransport();this.conn_=new e(this.nextTransportId_(),this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,null,this.lastSessionId),this.primaryResponsesRequired_=e.responsesRequiredToBeHealthy||0;const n=this.connReceiver_(this.conn_),s=this.disconnReceiver_(this.conn_);this.tx_=this.conn_,this.rx_=this.conn_,this.secondaryConn_=null,this.isHealthy_=!1,setTimeout(()=>{this.conn_&&this.conn_.open(n,s)},Math.floor(0));const i=e.healthyTimeout||0;i>0&&(this.healthyTimeout_=wo(()=>{this.healthyTimeout_=null,this.isHealthy_||(this.conn_&&this.conn_.bytesReceived>N1?(this.log_("Connection exceeded healthy timeout but has received "+this.conn_.bytesReceived+" bytes.  Marking connection healthy."),this.isHealthy_=!0,this.conn_.markConnectionHealthy()):this.conn_&&this.conn_.bytesSent>P1?this.log_("Connection exceeded healthy timeout but has sent "+this.conn_.bytesSent+" bytes.  Leaving connection alive."):(this.log_("Closing unhealthy connection after timeout."),this.close()))},Math.floor(i)))}nextTransportId_(){return"c:"+this.id+":"+this.connectionCount++}disconnReceiver_(e){return n=>{e===this.conn_?this.onConnectionLost_(n):e===this.secondaryConn_?(this.log_("Secondary connection lost."),this.onSecondaryConnectionLost_()):this.log_("closing an old connection")}}connReceiver_(e){return n=>{this.state_!==2&&(e===this.rx_?this.onPrimaryMessageReceived_(n):e===this.secondaryConn_?this.onSecondaryMessageReceived_(n):this.log_("message on old connection"))}}sendRequest(e){const n={t:"d",d:e};this.sendData_(n)}tryCleanupConnection(){this.tx_===this.secondaryConn_&&this.rx_===this.secondaryConn_&&(this.log_("cleaning up and promoting a connection: "+this.secondaryConn_.connId),this.conn_=this.secondaryConn_,this.secondaryConn_=null)}onSecondaryControl_(e){if(Gu in e){const n=e[Gu];n===sg?this.upgradeIfSecondaryHealthy_():n===tg?(this.log_("Got a reset on secondary, closing it"),this.secondaryConn_.close(),(this.tx_===this.secondaryConn_||this.rx_===this.secondaryConn_)&&this.close()):n===ng&&(this.log_("got pong on secondary."),this.secondaryResponsesRequired_--,this.upgradeIfSecondaryHealthy_())}}onSecondaryMessageReceived_(e){const n=Qr("t",e),s=Qr("d",e);if(n==="c")this.onSecondaryControl_(s);else if(n==="d")this.pendingDataMessages.push(s);else throw new Error("Unknown protocol layer: "+n)}upgradeIfSecondaryHealthy_(){this.secondaryResponsesRequired_<=0?(this.log_("Secondary connection is healthy."),this.isHealthy_=!0,this.secondaryConn_.markConnectionHealthy(),this.proceedWithUpgrade_()):(this.log_("sending ping on secondary."),this.secondaryConn_.send({t:"c",d:{t:rg,d:{}}}))}proceedWithUpgrade_(){this.secondaryConn_.start(),this.log_("sending client ack on secondary"),this.secondaryConn_.send({t:"c",d:{t:sg,d:{}}}),this.log_("Ending transmission on primary"),this.conn_.send({t:"c",d:{t:ig,d:{}}}),this.tx_=this.secondaryConn_,this.tryCleanupConnection()}onPrimaryMessageReceived_(e){const n=Qr("t",e),s=Qr("d",e);n==="c"?this.onControl_(s):n==="d"&&this.onDataMessage_(s)}onDataMessage_(e){this.onPrimaryResponse_(),this.onMessage_(e)}onPrimaryResponse_(){this.isHealthy_||(this.primaryResponsesRequired_--,this.primaryResponsesRequired_<=0&&(this.log_("Primary connection is healthy."),this.isHealthy_=!0,this.conn_.markConnectionHealthy()))}onControl_(e){const n=Qr(Gu,e);if(eg in e){const s=e[eg];if(n===k1){const i=Object.assign({},s);this.repoInfo_.isUsingEmulator&&(i.h=this.repoInfo_.host),this.onHandshake_(i)}else if(n===ig){this.log_("recvd end transmission on primary"),this.rx_=this.secondaryConn_;for(let i=0;i<this.pendingDataMessages.length;++i)this.onDataMessage_(this.pendingDataMessages[i]);this.pendingDataMessages=[],this.tryCleanupConnection()}else n===O1?this.onConnectionShutdown_(s):n===tg?this.onReset_(s):n===D1?Qh("Server Error: "+s):n===ng?(this.log_("got pong on primary."),this.onPrimaryResponse_(),this.sendPingOnPrimaryIfNecessary_()):Qh("Unknown control packet command: "+n)}}onHandshake_(e){const n=e.ts,s=e.v,i=e.h;this.sessionId=e.s,this.repoInfo_.host=i,this.state_===0&&(this.conn_.start(),this.onConnectionEstablished_(this.conn_,n),xd!==s&&qt("Protocol version mismatch detected"),this.tryStartUpgrade_())}tryStartUpgrade_(){const e=this.transportManager_.upgradeTransport();e&&this.startUpgrade_(e)}startUpgrade_(e){this.secondaryConn_=new e(this.nextTransportId_(),this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,this.sessionId),this.secondaryResponsesRequired_=e.responsesRequiredToBeHealthy||0;const n=this.connReceiver_(this.secondaryConn_),s=this.disconnReceiver_(this.secondaryConn_);this.secondaryConn_.open(n,s),wo(()=>{this.secondaryConn_&&(this.log_("Timed out trying to upgrade."),this.secondaryConn_.close())},Math.floor(R1))}onReset_(e){this.log_("Reset packet received.  New host: "+e),this.repoInfo_.host=e,this.state_===1?this.close():(this.closeConnections_(),this.start_())}onConnectionEstablished_(e,n){this.log_("Realtime connection established."),this.conn_=e,this.state_=1,this.onReady_&&(this.onReady_(n,this.sessionId),this.onReady_=null),this.primaryResponsesRequired_===0?(this.log_("Primary connection is healthy."),this.isHealthy_=!0):wo(()=>{this.sendPingOnPrimaryIfNecessary_()},Math.floor(S1))}sendPingOnPrimaryIfNecessary_(){!this.isHealthy_&&this.state_===1&&(this.log_("sending ping on primary."),this.sendData_({t:"c",d:{t:rg,d:{}}}))}onSecondaryConnectionLost_(){const e=this.secondaryConn_;this.secondaryConn_=null,(this.tx_===e||this.rx_===e)&&this.close()}onConnectionLost_(e){this.conn_=null,!e&&this.state_===0?(this.log_("Realtime connection failed."),this.repoInfo_.isCacheableHost()&&(Ys.remove("host:"+this.repoInfo_.host),this.repoInfo_.internalHost=this.repoInfo_.host)):this.state_===1&&this.log_("Realtime connection lost."),this.close()}onConnectionShutdown_(e){this.log_("Connection shutdown command received. Shutting down..."),this.onKill_&&(this.onKill_(e),this.onKill_=null),this.onDisconnect_=null,this.close()}sendData_(e){if(this.state_!==1)throw"Connection is not connected";this.tx_.send(e)}close(){this.state_!==2&&(this.log_("Closing realtime connection."),this.state_=2,this.closeConnections_(),this.onDisconnect_&&(this.onDisconnect_(),this.onDisconnect_=null))}closeConnections_(){this.log_("Shutting down all connections"),this.conn_&&(this.conn_.close(),this.conn_=null),this.secondaryConn_&&(this.secondaryConn_.close(),this.secondaryConn_=null),this.healthyTimeout_&&(clearTimeout(this.healthyTimeout_),this.healthyTimeout_=null)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class GT{put(e,n,s,i){}merge(e,n,s,i){}refreshAuthToken(e){}refreshAppCheckToken(e){}onDisconnectPut(e,n,s){}onDisconnectMerge(e,n,s){}onDisconnectCancel(e,n){}reportStats(e){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class YT{constructor(e){this.allowedEvents_=e,this.listeners_={},L(Array.isArray(e)&&e.length>0,"Requires a non-empty array")}trigger(e,...n){if(Array.isArray(this.listeners_[e])){const s=[...this.listeners_[e]];for(let i=0;i<s.length;i++)s[i].callback.apply(s[i].context,n)}}on(e,n,s){this.validateEventType_(e),this.listeners_[e]=this.listeners_[e]||[],this.listeners_[e].push({callback:n,context:s});const i=this.getInitialEvent(e);i&&n.apply(s,i)}off(e,n,s){this.validateEventType_(e);const i=this.listeners_[e]||[];for(let r=0;r<i.length;r++)if(i[r].callback===n&&(!s||s===i[r].context)){i.splice(r,1);return}}validateEventType_(e){L(this.allowedEvents_.find(n=>n===e),"Unknown event: "+e)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ul extends YT{constructor(){super(["online"]),this.online_=!0,typeof window<"u"&&typeof window.addEventListener<"u"&&!bd()&&(window.addEventListener("online",()=>{this.online_||(this.online_=!0,this.trigger("online",!0))},!1),window.addEventListener("offline",()=>{this.online_&&(this.online_=!1,this.trigger("online",!1))},!1))}static getInstance(){return new Ul}getInitialEvent(e){return L(e==="online","Unknown event type: "+e),[this.online_]}currentlyOnline(){return this.online_}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const og=32,ag=768;class xe{constructor(e,n){if(n===void 0){this.pieces_=e.split("/");let s=0;for(let i=0;i<this.pieces_.length;i++)this.pieces_[i].length>0&&(this.pieces_[s]=this.pieces_[i],s++);this.pieces_.length=s,this.pieceNum_=0}else this.pieces_=e,this.pieceNum_=n}toString(){let e="";for(let n=this.pieceNum_;n<this.pieces_.length;n++)this.pieces_[n]!==""&&(e+="/"+this.pieces_[n]);return e||"/"}}function Ce(){return new xe("")}function de(t){return t.pieceNum_>=t.pieces_.length?null:t.pieces_[t.pieceNum_]}function Ns(t){return t.pieces_.length-t.pieceNum_}function Oe(t){let e=t.pieceNum_;return e<t.pieces_.length&&e++,new xe(t.pieces_,e)}function QT(t){return t.pieceNum_<t.pieces_.length?t.pieces_[t.pieces_.length-1]:null}function L1(t){let e="";for(let n=t.pieceNum_;n<t.pieces_.length;n++)t.pieces_[n]!==""&&(e+="/"+encodeURIComponent(String(t.pieces_[n])));return e||"/"}function XT(t,e=0){return t.pieces_.slice(t.pieceNum_+e)}function JT(t){if(t.pieceNum_>=t.pieces_.length)return null;const e=[];for(let n=t.pieceNum_;n<t.pieces_.length-1;n++)e.push(t.pieces_[n]);return new xe(e,0)}function et(t,e){const n=[];for(let s=t.pieceNum_;s<t.pieces_.length;s++)n.push(t.pieces_[s]);if(e instanceof xe)for(let s=e.pieceNum_;s<e.pieces_.length;s++)n.push(e.pieces_[s]);else{const s=e.split("/");for(let i=0;i<s.length;i++)s[i].length>0&&n.push(s[i])}return new xe(n,0)}function ue(t){return t.pieceNum_>=t.pieces_.length}function Zt(t,e){const n=de(t),s=de(e);if(n===null)return e;if(n===s)return Zt(Oe(t),Oe(e));throw new Error("INTERNAL ERROR: innerPath ("+e+") is not within outerPath ("+t+")")}function ZT(t,e){if(Ns(t)!==Ns(e))return!1;for(let n=t.pieceNum_,s=e.pieceNum_;n<=t.pieces_.length;n++,s++)if(t.pieces_[n]!==e.pieces_[s])return!1;return!0}function dn(t,e){let n=t.pieceNum_,s=e.pieceNum_;if(Ns(t)>Ns(e))return!1;for(;n<t.pieces_.length;){if(t.pieces_[n]!==e.pieces_[s])return!1;++n,++s}return!0}class M1{constructor(e,n){this.errorPrefix_=n,this.parts_=XT(e,0),this.byteLength_=Math.max(1,this.parts_.length);for(let s=0;s<this.parts_.length;s++)this.byteLength_+=xc(this.parts_[s]);ew(this)}}function V1(t,e){t.parts_.length>0&&(t.byteLength_+=1),t.parts_.push(e),t.byteLength_+=xc(e),ew(t)}function F1(t){const e=t.parts_.pop();t.byteLength_-=xc(e),t.parts_.length>0&&(t.byteLength_-=1)}function ew(t){if(t.byteLength_>ag)throw new Error(t.errorPrefix_+"has a key path longer than "+ag+" bytes ("+t.byteLength_+").");if(t.parts_.length>og)throw new Error(t.errorPrefix_+"path specified exceeds the maximum depth that can be written ("+og+") or object contains a cycle "+Hs(t))}function Hs(t){return t.parts_.length===0?"":"in property '"+t.parts_.join(".")+"'"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Vd extends YT{constructor(){super(["visible"]);let e,n;typeof document<"u"&&typeof document.addEventListener<"u"&&(typeof document.hidden<"u"?(n="visibilitychange",e="hidden"):typeof document.mozHidden<"u"?(n="mozvisibilitychange",e="mozHidden"):typeof document.msHidden<"u"?(n="msvisibilitychange",e="msHidden"):typeof document.webkitHidden<"u"&&(n="webkitvisibilitychange",e="webkitHidden")),this.visible_=!0,n&&document.addEventListener(n,()=>{const s=!document[e];s!==this.visible_&&(this.visible_=s,this.trigger("visible",s))},!1)}static getInstance(){return new Vd}getInitialEvent(e){return L(e==="visible","Unknown event type: "+e),[this.visible_]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Xr=1e3,U1=60*5*1e3,lg=30*1e3,$1=1.3,B1=3e4,H1="server_kill",cg=3;class ts extends GT{constructor(e,n,s,i,r,o,a,l){if(super(),this.repoInfo_=e,this.applicationId_=n,this.onDataUpdate_=s,this.onConnectStatus_=i,this.onServerInfoUpdate_=r,this.authTokenProvider_=o,this.appCheckTokenProvider_=a,this.authOverride_=l,this.id=ts.nextPersistentConnectionId_++,this.log_=pa("p:"+this.id+":"),this.interruptReasons_={},this.listens=new Map,this.outstandingPuts_=[],this.outstandingGets_=[],this.outstandingPutCount_=0,this.outstandingGetCount_=0,this.onDisconnectRequestQueue_=[],this.connected_=!1,this.reconnectDelay_=Xr,this.maxReconnectDelay_=U1,this.securityDebugCallback_=null,this.lastSessionId=null,this.establishConnectionTimer_=null,this.visible_=!1,this.requestCBHash_={},this.requestNumber_=0,this.realtime_=null,this.authToken_=null,this.appCheckToken_=null,this.forceTokenRefresh_=!1,this.invalidAuthTokenCount_=0,this.invalidAppCheckTokenCount_=0,this.firstConnection_=!0,this.lastConnectionAttemptTime_=null,this.lastConnectionEstablishedTime_=null,l&&!sT())throw new Error("Auth override specified in options, but not supported on non Node.js platforms");Vd.getInstance().on("visible",this.onVisible_,this),e.host.indexOf("fblocal")===-1&&Ul.getInstance().on("online",this.onOnline_,this)}sendRequest(e,n,s){const i=++this.requestNumber_,r={r:i,a:e,b:n};this.log_(ot(r)),L(this.connected_,"sendRequest call when we're not connected not allowed."),this.realtime_.sendRequest(r),s&&(this.requestCBHash_[i]=s)}get(e){this.initConnection_();const n=new Uo,i={action:"g",request:{p:e._path.toString(),q:e._queryObject},onComplete:o=>{const a=o.d;o.s==="ok"?n.resolve(a):n.reject(a)}};this.outstandingGets_.push(i),this.outstandingGetCount_++;const r=this.outstandingGets_.length-1;return this.connected_&&this.sendGet_(r),n.promise}listen(e,n,s,i){this.initConnection_();const r=e._queryIdentifier,o=e._path.toString();this.log_("Listen called for "+o+" "+r),this.listens.has(o)||this.listens.set(o,new Map),L(e._queryParams.isDefault()||!e._queryParams.loadsAllData(),"listen() called for non-default but complete query"),L(!this.listens.get(o).has(r),"listen() called twice for same path/queryId.");const a={onComplete:i,hashFn:n,query:e,tag:s};this.listens.get(o).set(r,a),this.connected_&&this.sendListen_(a)}sendGet_(e){const n=this.outstandingGets_[e];this.sendRequest("g",n.request,s=>{delete this.outstandingGets_[e],this.outstandingGetCount_--,this.outstandingGetCount_===0&&(this.outstandingGets_=[]),n.onComplete&&n.onComplete(s)})}sendListen_(e){const n=e.query,s=n._path.toString(),i=n._queryIdentifier;this.log_("Listen on "+s+" for "+i);const r={p:s},o="q";e.tag&&(r.q=n._queryObject,r.t=e.tag),r.h=e.hashFn(),this.sendRequest(o,r,a=>{const l=a.d,c=a.s;ts.warnOnListenWarnings_(l,n),(this.listens.get(s)&&this.listens.get(s).get(i))===e&&(this.log_("listen response",a),c!=="ok"&&this.removeListen_(s,i),e.onComplete&&e.onComplete(c,l))})}static warnOnListenWarnings_(e,n){if(e&&typeof e=="object"&&hs(e,"w")){const s=dr(e,"w");if(Array.isArray(s)&&~s.indexOf("no_index")){const i='".indexOn": "'+n._queryParams.getIndex().toString()+'"',r=n._path.toString();qt(`Using an unspecified index. Your data will be downloaded and filtered on the client. Consider adding ${i} at ${r} to your security rules for better performance.`)}}}refreshAuthToken(e){this.authToken_=e,this.log_("Auth token refreshed"),this.authToken_?this.tryAuth():this.connected_&&this.sendRequest("unauth",{},()=>{}),this.reduceReconnectDelayIfAdminCredential_(e)}reduceReconnectDelayIfAdminCredential_(e){(e&&e.length===40||dD(e))&&(this.log_("Admin auth credential detected.  Reducing max reconnect time."),this.maxReconnectDelay_=lg)}refreshAppCheckToken(e){this.appCheckToken_=e,this.log_("App check token refreshed"),this.appCheckToken_?this.tryAppCheck():this.connected_&&this.sendRequest("unappeck",{},()=>{})}tryAuth(){if(this.connected_&&this.authToken_){const e=this.authToken_,n=fD(e)?"auth":"gauth",s={cred:e};this.authOverride_===null?s.noauth=!0:typeof this.authOverride_=="object"&&(s.authvar=this.authOverride_),this.sendRequest(n,s,i=>{const r=i.s,o=i.d||"error";this.authToken_===e&&(r==="ok"?this.invalidAuthTokenCount_=0:this.onAuthRevoked_(r,o))})}}tryAppCheck(){this.connected_&&this.appCheckToken_&&this.sendRequest("appcheck",{token:this.appCheckToken_},e=>{const n=e.s,s=e.d||"error";n==="ok"?this.invalidAppCheckTokenCount_=0:this.onAppCheckRevoked_(n,s)})}unlisten(e,n){const s=e._path.toString(),i=e._queryIdentifier;this.log_("Unlisten called for "+s+" "+i),L(e._queryParams.isDefault()||!e._queryParams.loadsAllData(),"unlisten() called for non-default but complete query"),this.removeListen_(s,i)&&this.connected_&&this.sendUnlisten_(s,i,e._queryObject,n)}sendUnlisten_(e,n,s,i){this.log_("Unlisten on "+e+" for "+n);const r={p:e},o="n";i&&(r.q=s,r.t=i),this.sendRequest(o,r)}onDisconnectPut(e,n,s){this.initConnection_(),this.connected_?this.sendOnDisconnect_("o",e,n,s):this.onDisconnectRequestQueue_.push({pathString:e,action:"o",data:n,onComplete:s})}onDisconnectMerge(e,n,s){this.initConnection_(),this.connected_?this.sendOnDisconnect_("om",e,n,s):this.onDisconnectRequestQueue_.push({pathString:e,action:"om",data:n,onComplete:s})}onDisconnectCancel(e,n){this.initConnection_(),this.connected_?this.sendOnDisconnect_("oc",e,null,n):this.onDisconnectRequestQueue_.push({pathString:e,action:"oc",data:null,onComplete:n})}sendOnDisconnect_(e,n,s,i){const r={p:n,d:s};this.log_("onDisconnect "+e,r),this.sendRequest(e,r,o=>{i&&setTimeout(()=>{i(o.s,o.d)},Math.floor(0))})}put(e,n,s,i){this.putInternal("p",e,n,s,i)}merge(e,n,s,i){this.putInternal("m",e,n,s,i)}putInternal(e,n,s,i,r){this.initConnection_();const o={p:n,d:s};r!==void 0&&(o.h=r),this.outstandingPuts_.push({action:e,request:o,onComplete:i}),this.outstandingPutCount_++;const a=this.outstandingPuts_.length-1;this.connected_?this.sendPut_(a):this.log_("Buffering put: "+n)}sendPut_(e){const n=this.outstandingPuts_[e].action,s=this.outstandingPuts_[e].request,i=this.outstandingPuts_[e].onComplete;this.outstandingPuts_[e].queued=this.connected_,this.sendRequest(n,s,r=>{this.log_(n+" response",r),delete this.outstandingPuts_[e],this.outstandingPutCount_--,this.outstandingPutCount_===0&&(this.outstandingPuts_=[]),i&&i(r.s,r.d)})}reportStats(e){if(this.connected_){const n={c:e};this.log_("reportStats",n),this.sendRequest("s",n,s=>{if(s.s!=="ok"){const r=s.d;this.log_("reportStats","Error sending stats: "+r)}})}}onDataMessage_(e){if("r"in e){this.log_("from server: "+ot(e));const n=e.r,s=this.requestCBHash_[n];s&&(delete this.requestCBHash_[n],s(e.b))}else{if("error"in e)throw"A server-side error has occurred: "+e.error;"a"in e&&this.onDataPush_(e.a,e.b)}}onDataPush_(e,n){this.log_("handleServerMessage",e,n),e==="d"?this.onDataUpdate_(n.p,n.d,!1,n.t):e==="m"?this.onDataUpdate_(n.p,n.d,!0,n.t):e==="c"?this.onListenRevoked_(n.p,n.q):e==="ac"?this.onAuthRevoked_(n.s,n.d):e==="apc"?this.onAppCheckRevoked_(n.s,n.d):e==="sd"?this.onSecurityDebugPacket_(n):Qh("Unrecognized action received from server: "+ot(e)+`
Are you using the latest client?`)}onReady_(e,n){this.log_("connection ready"),this.connected_=!0,this.lastConnectionEstablishedTime_=new Date().getTime(),this.handleTimestamp_(e),this.lastSessionId=n,this.firstConnection_&&this.sendConnectStats_(),this.restoreState_(),this.firstConnection_=!1,this.onConnectStatus_(!0)}scheduleConnect_(e){L(!this.realtime_,"Scheduling a connect when we're already connected/ing?"),this.establishConnectionTimer_&&clearTimeout(this.establishConnectionTimer_),this.establishConnectionTimer_=setTimeout(()=>{this.establishConnectionTimer_=null,this.establishConnection_()},Math.floor(e))}initConnection_(){!this.realtime_&&this.firstConnection_&&this.scheduleConnect_(0)}onVisible_(e){e&&!this.visible_&&this.reconnectDelay_===this.maxReconnectDelay_&&(this.log_("Window became visible.  Reducing delay."),this.reconnectDelay_=Xr,this.realtime_||this.scheduleConnect_(0)),this.visible_=e}onOnline_(e){e?(this.log_("Browser went online."),this.reconnectDelay_=Xr,this.realtime_||this.scheduleConnect_(0)):(this.log_("Browser went offline.  Killing connection."),this.realtime_&&this.realtime_.close())}onRealtimeDisconnect_(){if(this.log_("data client disconnected"),this.connected_=!1,this.realtime_=null,this.cancelSentTransactions_(),this.requestCBHash_={},this.shouldReconnect_()){this.visible_?this.lastConnectionEstablishedTime_&&(new Date().getTime()-this.lastConnectionEstablishedTime_>B1&&(this.reconnectDelay_=Xr),this.lastConnectionEstablishedTime_=null):(this.log_("Window isn't visible.  Delaying reconnect."),this.reconnectDelay_=this.maxReconnectDelay_,this.lastConnectionAttemptTime_=new Date().getTime());const e=new Date().getTime()-this.lastConnectionAttemptTime_;let n=Math.max(0,this.reconnectDelay_-e);n=Math.random()*n,this.log_("Trying to reconnect in "+n+"ms"),this.scheduleConnect_(n),this.reconnectDelay_=Math.min(this.maxReconnectDelay_,this.reconnectDelay_*$1)}this.onConnectStatus_(!1)}async establishConnection_(){if(this.shouldReconnect_()){this.log_("Making a connection attempt"),this.lastConnectionAttemptTime_=new Date().getTime(),this.lastConnectionEstablishedTime_=null;const e=this.onDataMessage_.bind(this),n=this.onReady_.bind(this),s=this.onRealtimeDisconnect_.bind(this),i=this.id+":"+ts.nextConnectionId_++,r=this.lastSessionId;let o=!1,a=null;const l=function(){a?a.close():(o=!0,s())},c=function(h){L(a,"sendRequest call when we're not connected not allowed."),a.sendRequest(h)};this.realtime_={close:l,sendRequest:c};const u=this.forceTokenRefresh_;this.forceTokenRefresh_=!1;try{const[h,f]=await Promise.all([this.authTokenProvider_.getToken(u),this.appCheckTokenProvider_.getToken(u)]);o?_t("getToken() completed but was canceled"):(_t("getToken() completed. Creating connection."),this.authToken_=h&&h.accessToken,this.appCheckToken_=f&&f.token,a=new x1(i,this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,e,n,s,d=>{qt(d+" ("+this.repoInfo_.toString()+")"),this.interrupt(H1)},r))}catch(h){this.log_("Failed to get token: "+h),o||(this.repoInfo_.nodeAdmin&&qt(h),l())}}}interrupt(e){_t("Interrupting connection for reason: "+e),this.interruptReasons_[e]=!0,this.realtime_?this.realtime_.close():(this.establishConnectionTimer_&&(clearTimeout(this.establishConnectionTimer_),this.establishConnectionTimer_=null),this.connected_&&this.onRealtimeDisconnect_())}resume(e){_t("Resuming connection for reason: "+e),delete this.interruptReasons_[e],Rm(this.interruptReasons_)&&(this.reconnectDelay_=Xr,this.realtime_||this.scheduleConnect_(0))}handleTimestamp_(e){const n=e-new Date().getTime();this.onServerInfoUpdate_({serverTimeOffset:n})}cancelSentTransactions_(){for(let e=0;e<this.outstandingPuts_.length;e++){const n=this.outstandingPuts_[e];n&&"h"in n.request&&n.queued&&(n.onComplete&&n.onComplete("disconnect"),delete this.outstandingPuts_[e],this.outstandingPutCount_--)}this.outstandingPutCount_===0&&(this.outstandingPuts_=[])}onListenRevoked_(e,n){let s;n?s=n.map(r=>kd(r)).join("$"):s="default";const i=this.removeListen_(e,s);i&&i.onComplete&&i.onComplete("permission_denied")}removeListen_(e,n){const s=new xe(e).toString();let i;if(this.listens.has(s)){const r=this.listens.get(s);i=r.get(n),r.delete(n),r.size===0&&this.listens.delete(s)}else i=void 0;return i}onAuthRevoked_(e,n){_t("Auth token revoked: "+e+"/"+n),this.authToken_=null,this.forceTokenRefresh_=!0,this.realtime_.close(),(e==="invalid_token"||e==="permission_denied")&&(this.invalidAuthTokenCount_++,this.invalidAuthTokenCount_>=cg&&(this.reconnectDelay_=lg,this.authTokenProvider_.notifyForInvalidToken()))}onAppCheckRevoked_(e,n){_t("App check token revoked: "+e+"/"+n),this.appCheckToken_=null,this.forceTokenRefresh_=!0,(e==="invalid_token"||e==="permission_denied")&&(this.invalidAppCheckTokenCount_++,this.invalidAppCheckTokenCount_>=cg&&this.appCheckTokenProvider_.notifyForInvalidToken())}onSecurityDebugPacket_(e){this.securityDebugCallback_?this.securityDebugCallback_(e):"msg"in e&&console.log("FIREBASE: "+e.msg.replace(`
`,`
FIREBASE: `))}restoreState_(){this.tryAuth(),this.tryAppCheck();for(const e of this.listens.values())for(const n of e.values())this.sendListen_(n);for(let e=0;e<this.outstandingPuts_.length;e++)this.outstandingPuts_[e]&&this.sendPut_(e);for(;this.onDisconnectRequestQueue_.length;){const e=this.onDisconnectRequestQueue_.shift();this.sendOnDisconnect_(e.action,e.pathString,e.data,e.onComplete)}for(let e=0;e<this.outstandingGets_.length;e++)this.outstandingGets_[e]&&this.sendGet_(e)}sendConnectStats_(){const e={};let n="js";e["sdk."+n+"."+RT.replace(/\./g,"-")]=1,bd()?e["framework.cordova"]=1:nT()&&(e["framework.reactnative"]=1),this.reportStats(e)}shouldReconnect_(){const e=Ul.getInstance().currentlyOnline();return Rm(this.interruptReasons_)&&e}}ts.nextPersistentConnectionId_=0;ts.nextConnectionId_=0;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class pe{constructor(e,n){this.name=e,this.node=n}static Wrap(e,n){return new pe(e,n)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Lc{getCompare(){return this.compare.bind(this)}indexedValueChanged(e,n){const s=new pe(pr,e),i=new pe(pr,n);return this.compare(s,i)!==0}minPost(){return pe.MIN}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Ya;class tw extends Lc{static get __EMPTY_NODE(){return Ya}static set __EMPTY_NODE(e){Ya=e}compare(e,n){return Vr(e.name,n.name)}isDefinedOn(e){throw xr("KeyIndex.isDefinedOn not expected to be called.")}indexedValueChanged(e,n){return!1}minPost(){return pe.MIN}maxPost(){return new pe(fi,Ya)}makePost(e,n){return L(typeof e=="string","KeyIndex indexValue must always be a string."),new pe(e,Ya)}toString(){return".key"}}const Zi=new tw;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Qa=class{constructor(e,n,s,i,r=null){this.isReverse_=i,this.resultGenerator_=r,this.nodeStack_=[];let o=1;for(;!e.isEmpty();)if(e=e,o=n?s(e.key,n):1,i&&(o*=-1),o<0)this.isReverse_?e=e.left:e=e.right;else if(o===0){this.nodeStack_.push(e);break}else this.nodeStack_.push(e),this.isReverse_?e=e.right:e=e.left}getNext(){if(this.nodeStack_.length===0)return null;let e=this.nodeStack_.pop(),n;if(this.resultGenerator_?n=this.resultGenerator_(e.key,e.value):n={key:e.key,value:e.value},this.isReverse_)for(e=e.left;!e.isEmpty();)this.nodeStack_.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack_.push(e),e=e.left;return n}hasNext(){return this.nodeStack_.length>0}peek(){if(this.nodeStack_.length===0)return null;const e=this.nodeStack_[this.nodeStack_.length-1];return this.resultGenerator_?this.resultGenerator_(e.key,e.value):{key:e.key,value:e.value}}},Bt=class lo{constructor(e,n,s,i,r){this.key=e,this.value=n,this.color=s??lo.RED,this.left=i??Pn.EMPTY_NODE,this.right=r??Pn.EMPTY_NODE}copy(e,n,s,i,r){return new lo(e??this.key,n??this.value,s??this.color,i??this.left,r??this.right)}count(){return this.left.count()+1+this.right.count()}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||!!e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min_(){return this.left.isEmpty()?this:this.left.min_()}minKey(){return this.min_().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,n,s){let i=this;const r=s(e,i.key);return r<0?i=i.copy(null,null,null,i.left.insert(e,n,s),null):r===0?i=i.copy(null,n,null,null,null):i=i.copy(null,null,null,null,i.right.insert(e,n,s)),i.fixUp_()}removeMin_(){if(this.left.isEmpty())return Pn.EMPTY_NODE;let e=this;return!e.left.isRed_()&&!e.left.left.isRed_()&&(e=e.moveRedLeft_()),e=e.copy(null,null,null,e.left.removeMin_(),null),e.fixUp_()}remove(e,n){let s,i;if(s=this,n(e,s.key)<0)!s.left.isEmpty()&&!s.left.isRed_()&&!s.left.left.isRed_()&&(s=s.moveRedLeft_()),s=s.copy(null,null,null,s.left.remove(e,n),null);else{if(s.left.isRed_()&&(s=s.rotateRight_()),!s.right.isEmpty()&&!s.right.isRed_()&&!s.right.left.isRed_()&&(s=s.moveRedRight_()),n(e,s.key)===0){if(s.right.isEmpty())return Pn.EMPTY_NODE;i=s.right.min_(),s=s.copy(i.key,i.value,null,null,s.right.removeMin_())}s=s.copy(null,null,null,null,s.right.remove(e,n))}return s.fixUp_()}isRed_(){return this.color}fixUp_(){let e=this;return e.right.isRed_()&&!e.left.isRed_()&&(e=e.rotateLeft_()),e.left.isRed_()&&e.left.left.isRed_()&&(e=e.rotateRight_()),e.left.isRed_()&&e.right.isRed_()&&(e=e.colorFlip_()),e}moveRedLeft_(){let e=this.colorFlip_();return e.right.left.isRed_()&&(e=e.copy(null,null,null,null,e.right.rotateRight_()),e=e.rotateLeft_(),e=e.colorFlip_()),e}moveRedRight_(){let e=this.colorFlip_();return e.left.left.isRed_()&&(e=e.rotateRight_(),e=e.colorFlip_()),e}rotateLeft_(){const e=this.copy(null,null,lo.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight_(){const e=this.copy(null,null,lo.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip_(){const e=this.left.copy(null,null,!this.left.color,null,null),n=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,n)}checkMaxDepth_(){const e=this.check_();return Math.pow(2,e)<=this.count()+1}check_(){if(this.isRed_()&&this.left.isRed_())throw new Error("Red node has red child("+this.key+","+this.value+")");if(this.right.isRed_())throw new Error("Right child of ("+this.key+","+this.value+") is red");const e=this.left.check_();if(e!==this.right.check_())throw new Error("Black depths differ");return e+(this.isRed_()?0:1)}};Bt.RED=!0;Bt.BLACK=!1;class j1{copy(e,n,s,i,r){return this}insert(e,n,s){return new Bt(e,n,null)}remove(e,n){return this}count(){return 0}isEmpty(){return!0}inorderTraversal(e){return!1}reverseTraversal(e){return!1}minKey(){return null}maxKey(){return null}check_(){return 0}isRed_(){return!1}}let Pn=class ml{constructor(e,n=ml.EMPTY_NODE){this.comparator_=e,this.root_=n}insert(e,n){return new ml(this.comparator_,this.root_.insert(e,n,this.comparator_).copy(null,null,Bt.BLACK,null,null))}remove(e){return new ml(this.comparator_,this.root_.remove(e,this.comparator_).copy(null,null,Bt.BLACK,null,null))}get(e){let n,s=this.root_;for(;!s.isEmpty();){if(n=this.comparator_(e,s.key),n===0)return s.value;n<0?s=s.left:n>0&&(s=s.right)}return null}getPredecessorKey(e){let n,s=this.root_,i=null;for(;!s.isEmpty();)if(n=this.comparator_(e,s.key),n===0){if(s.left.isEmpty())return i?i.key:null;for(s=s.left;!s.right.isEmpty();)s=s.right;return s.key}else n<0?s=s.left:n>0&&(i=s,s=s.right);throw new Error("Attempted to find predecessor key for a nonexistent key.  What gives?")}isEmpty(){return this.root_.isEmpty()}count(){return this.root_.count()}minKey(){return this.root_.minKey()}maxKey(){return this.root_.maxKey()}inorderTraversal(e){return this.root_.inorderTraversal(e)}reverseTraversal(e){return this.root_.reverseTraversal(e)}getIterator(e){return new Qa(this.root_,null,this.comparator_,!1,e)}getIteratorFrom(e,n){return new Qa(this.root_,e,this.comparator_,!1,n)}getReverseIteratorFrom(e,n){return new Qa(this.root_,e,this.comparator_,!0,n)}getReverseIterator(e){return new Qa(this.root_,null,this.comparator_,!0,e)}};Pn.EMPTY_NODE=new j1;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function W1(t,e){return Vr(t.name,e.name)}function Fd(t,e){return Vr(t,e)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Zh;function q1(t){Zh=t}const nw=function(t){return typeof t=="number"?"number:"+DT(t):"string:"+t},sw=function(t){if(t.isLeafNode()){const e=t.val();L(typeof e=="string"||typeof e=="number"||typeof e=="object"&&hs(e,".sv"),"Priority must be a string or number.")}else L(t===Zh||t.isEmpty(),"priority of unexpected type.");L(t===Zh||t.getPriority().isEmpty(),"Priority nodes can't have a priority of their own.")};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let ug;class Xe{constructor(e,n=Xe.__childrenNodeConstructor.EMPTY_NODE){this.value_=e,this.priorityNode_=n,this.lazyHash_=null,L(this.value_!==void 0&&this.value_!==null,"LeafNode shouldn't be created with null/undefined value."),sw(this.priorityNode_)}static set __childrenNodeConstructor(e){ug=e}static get __childrenNodeConstructor(){return ug}isLeafNode(){return!0}getPriority(){return this.priorityNode_}updatePriority(e){return new Xe(this.value_,e)}getImmediateChild(e){return e===".priority"?this.priorityNode_:Xe.__childrenNodeConstructor.EMPTY_NODE}getChild(e){return ue(e)?this:de(e)===".priority"?this.priorityNode_:Xe.__childrenNodeConstructor.EMPTY_NODE}hasChild(){return!1}getPredecessorChildName(e,n){return null}updateImmediateChild(e,n){return e===".priority"?this.updatePriority(n):n.isEmpty()&&e!==".priority"?this:Xe.__childrenNodeConstructor.EMPTY_NODE.updateImmediateChild(e,n).updatePriority(this.priorityNode_)}updateChild(e,n){const s=de(e);return s===null?n:n.isEmpty()&&s!==".priority"?this:(L(s!==".priority"||Ns(e)===1,".priority must be the last token in a path"),this.updateImmediateChild(s,Xe.__childrenNodeConstructor.EMPTY_NODE.updateChild(Oe(e),n)))}isEmpty(){return!1}numChildren(){return 0}forEachChild(e,n){return!1}val(e){return e&&!this.getPriority().isEmpty()?{".value":this.getValue(),".priority":this.getPriority().val()}:this.getValue()}hash(){if(this.lazyHash_===null){let e="";this.priorityNode_.isEmpty()||(e+="priority:"+nw(this.priorityNode_.val())+":");const n=typeof this.value_;e+=n+":",n==="number"?e+=DT(this.value_):e+=this.value_,this.lazyHash_=PT(e)}return this.lazyHash_}getValue(){return this.value_}compareTo(e){return e===Xe.__childrenNodeConstructor.EMPTY_NODE?1:e instanceof Xe.__childrenNodeConstructor?-1:(L(e.isLeafNode(),"Unknown node type"),this.compareToLeafNode_(e))}compareToLeafNode_(e){const n=typeof e.value_,s=typeof this.value_,i=Xe.VALUE_TYPE_ORDER.indexOf(n),r=Xe.VALUE_TYPE_ORDER.indexOf(s);return L(i>=0,"Unknown leaf type: "+n),L(r>=0,"Unknown leaf type: "+s),i===r?s==="object"?0:this.value_<e.value_?-1:this.value_===e.value_?0:1:r-i}withIndex(){return this}isIndexed(){return!0}equals(e){if(e===this)return!0;if(e.isLeafNode()){const n=e;return this.value_===n.value_&&this.priorityNode_.equals(n.priorityNode_)}else return!1}}Xe.VALUE_TYPE_ORDER=["object","boolean","number","string"];/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let iw,rw;function K1(t){iw=t}function z1(t){rw=t}class G1 extends Lc{compare(e,n){const s=e.node.getPriority(),i=n.node.getPriority(),r=s.compareTo(i);return r===0?Vr(e.name,n.name):r}isDefinedOn(e){return!e.getPriority().isEmpty()}indexedValueChanged(e,n){return!e.getPriority().equals(n.getPriority())}minPost(){return pe.MIN}maxPost(){return new pe(fi,new Xe("[PRIORITY-POST]",rw))}makePost(e,n){const s=iw(e);return new pe(n,new Xe("[PRIORITY-POST]",s))}toString(){return".priority"}}const Et=new G1;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Y1=Math.log(2);class Q1{constructor(e){const n=r=>parseInt(Math.log(r)/Y1,10),s=r=>parseInt(Array(r+1).join("1"),2);this.count=n(e+1),this.current_=this.count-1;const i=s(this.count);this.bits_=e+1&i}nextBitIsOne(){const e=!(this.bits_&1<<this.current_);return this.current_--,e}}const $l=function(t,e,n,s){t.sort(e);const i=function(l,c){const u=c-l;let h,f;if(u===0)return null;if(u===1)return h=t[l],f=n?n(h):h,new Bt(f,h.node,Bt.BLACK,null,null);{const d=parseInt(u/2,10)+l,m=i(l,d),g=i(d+1,c);return h=t[d],f=n?n(h):h,new Bt(f,h.node,Bt.BLACK,m,g)}},r=function(l){let c=null,u=null,h=t.length;const f=function(m,g){const y=h-m,T=h;h-=m;const I=i(y+1,T),b=t[y],v=n?n(b):b;d(new Bt(v,b.node,g,null,I))},d=function(m){c?(c.left=m,c=m):(u=m,c=m)};for(let m=0;m<l.count;++m){const g=l.nextBitIsOne(),y=Math.pow(2,l.count-(m+1));g?f(y,Bt.BLACK):(f(y,Bt.BLACK),f(y,Bt.RED))}return u},o=new Q1(t.length),a=r(o);return new Pn(s||e,a)};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Yu;const Oi={};class Gn{constructor(e,n){this.indexes_=e,this.indexSet_=n}static get Default(){return L(Oi&&Et,"ChildrenNode.ts has not been loaded"),Yu=Yu||new Gn({".priority":Oi},{".priority":Et}),Yu}get(e){const n=dr(this.indexes_,e);if(!n)throw new Error("No index defined for "+e);return n instanceof Pn?n:null}hasIndex(e){return hs(this.indexSet_,e.toString())}addIndex(e,n){L(e!==Zi,"KeyIndex always exists and isn't meant to be added to the IndexMap.");const s=[];let i=!1;const r=n.getIterator(pe.Wrap);let o=r.getNext();for(;o;)i=i||e.isDefinedOn(o.node),s.push(o),o=r.getNext();let a;i?a=$l(s,e.getCompare()):a=Oi;const l=e.toString(),c=Object.assign({},this.indexSet_);c[l]=e;const u=Object.assign({},this.indexes_);return u[l]=a,new Gn(u,c)}addToIndexes(e,n){const s=Dl(this.indexes_,(i,r)=>{const o=dr(this.indexSet_,r);if(L(o,"Missing index implementation for "+r),i===Oi)if(o.isDefinedOn(e.node)){const a=[],l=n.getIterator(pe.Wrap);let c=l.getNext();for(;c;)c.name!==e.name&&a.push(c),c=l.getNext();return a.push(e),$l(a,o.getCompare())}else return Oi;else{const a=n.get(e.name);let l=i;return a&&(l=l.remove(new pe(e.name,a))),l.insert(e,e.node)}});return new Gn(s,this.indexSet_)}removeFromIndexes(e,n){const s=Dl(this.indexes_,i=>{if(i===Oi)return i;{const r=n.get(e.name);return r?i.remove(new pe(e.name,r)):i}});return new Gn(s,this.indexSet_)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Jr;class Te{constructor(e,n,s){this.children_=e,this.priorityNode_=n,this.indexMap_=s,this.lazyHash_=null,this.priorityNode_&&sw(this.priorityNode_),this.children_.isEmpty()&&L(!this.priorityNode_||this.priorityNode_.isEmpty(),"An empty node cannot have a priority")}static get EMPTY_NODE(){return Jr||(Jr=new Te(new Pn(Fd),null,Gn.Default))}isLeafNode(){return!1}getPriority(){return this.priorityNode_||Jr}updatePriority(e){return this.children_.isEmpty()?this:new Te(this.children_,e,this.indexMap_)}getImmediateChild(e){if(e===".priority")return this.getPriority();{const n=this.children_.get(e);return n===null?Jr:n}}getChild(e){const n=de(e);return n===null?this:this.getImmediateChild(n).getChild(Oe(e))}hasChild(e){return this.children_.get(e)!==null}updateImmediateChild(e,n){if(L(n,"We should always be passing snapshot nodes"),e===".priority")return this.updatePriority(n);{const s=new pe(e,n);let i,r;n.isEmpty()?(i=this.children_.remove(e),r=this.indexMap_.removeFromIndexes(s,this.children_)):(i=this.children_.insert(e,n),r=this.indexMap_.addToIndexes(s,this.children_));const o=i.isEmpty()?Jr:this.priorityNode_;return new Te(i,o,r)}}updateChild(e,n){const s=de(e);if(s===null)return n;{L(de(e)!==".priority"||Ns(e)===1,".priority must be the last token in a path");const i=this.getImmediateChild(s).updateChild(Oe(e),n);return this.updateImmediateChild(s,i)}}isEmpty(){return this.children_.isEmpty()}numChildren(){return this.children_.count()}val(e){if(this.isEmpty())return null;const n={};let s=0,i=0,r=!0;if(this.forEachChild(Et,(o,a)=>{n[o]=a.val(e),s++,r&&Te.INTEGER_REGEXP_.test(o)?i=Math.max(i,Number(o)):r=!1}),!e&&r&&i<2*s){const o=[];for(const a in n)o[a]=n[a];return o}else return e&&!this.getPriority().isEmpty()&&(n[".priority"]=this.getPriority().val()),n}hash(){if(this.lazyHash_===null){let e="";this.getPriority().isEmpty()||(e+="priority:"+nw(this.getPriority().val())+":"),this.forEachChild(Et,(n,s)=>{const i=s.hash();i!==""&&(e+=":"+n+":"+i)}),this.lazyHash_=e===""?"":PT(e)}return this.lazyHash_}getPredecessorChildName(e,n,s){const i=this.resolveIndex_(s);if(i){const r=i.getPredecessorKey(new pe(e,n));return r?r.name:null}else return this.children_.getPredecessorKey(e)}getFirstChildName(e){const n=this.resolveIndex_(e);if(n){const s=n.minKey();return s&&s.name}else return this.children_.minKey()}getFirstChild(e){const n=this.getFirstChildName(e);return n?new pe(n,this.children_.get(n)):null}getLastChildName(e){const n=this.resolveIndex_(e);if(n){const s=n.maxKey();return s&&s.name}else return this.children_.maxKey()}getLastChild(e){const n=this.getLastChildName(e);return n?new pe(n,this.children_.get(n)):null}forEachChild(e,n){const s=this.resolveIndex_(e);return s?s.inorderTraversal(i=>n(i.name,i.node)):this.children_.inorderTraversal(n)}getIterator(e){return this.getIteratorFrom(e.minPost(),e)}getIteratorFrom(e,n){const s=this.resolveIndex_(n);if(s)return s.getIteratorFrom(e,i=>i);{const i=this.children_.getIteratorFrom(e.name,pe.Wrap);let r=i.peek();for(;r!=null&&n.compare(r,e)<0;)i.getNext(),r=i.peek();return i}}getReverseIterator(e){return this.getReverseIteratorFrom(e.maxPost(),e)}getReverseIteratorFrom(e,n){const s=this.resolveIndex_(n);if(s)return s.getReverseIteratorFrom(e,i=>i);{const i=this.children_.getReverseIteratorFrom(e.name,pe.Wrap);let r=i.peek();for(;r!=null&&n.compare(r,e)>0;)i.getNext(),r=i.peek();return i}}compareTo(e){return this.isEmpty()?e.isEmpty()?0:-1:e.isLeafNode()||e.isEmpty()?1:e===ma?-1:0}withIndex(e){if(e===Zi||this.indexMap_.hasIndex(e))return this;{const n=this.indexMap_.addIndex(e,this.children_);return new Te(this.children_,this.priorityNode_,n)}}isIndexed(e){return e===Zi||this.indexMap_.hasIndex(e)}equals(e){if(e===this)return!0;if(e.isLeafNode())return!1;{const n=e;if(this.getPriority().equals(n.getPriority()))if(this.children_.count()===n.children_.count()){const s=this.getIterator(Et),i=n.getIterator(Et);let r=s.getNext(),o=i.getNext();for(;r&&o;){if(r.name!==o.name||!r.node.equals(o.node))return!1;r=s.getNext(),o=i.getNext()}return r===null&&o===null}else return!1;else return!1}}resolveIndex_(e){return e===Zi?null:this.indexMap_.get(e.toString())}}Te.INTEGER_REGEXP_=/^(0|[1-9]\d*)$/;class X1 extends Te{constructor(){super(new Pn(Fd),Te.EMPTY_NODE,Gn.Default)}compareTo(e){return e===this?0:1}equals(e){return e===this}getPriority(){return this}getImmediateChild(e){return Te.EMPTY_NODE}isEmpty(){return!1}}const ma=new X1;Object.defineProperties(pe,{MIN:{value:new pe(pr,Te.EMPTY_NODE)},MAX:{value:new pe(fi,ma)}});tw.__EMPTY_NODE=Te.EMPTY_NODE;Xe.__childrenNodeConstructor=Te;q1(ma);z1(ma);/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const J1=!0;function mt(t,e=null){if(t===null)return Te.EMPTY_NODE;if(typeof t=="object"&&".priority"in t&&(e=t[".priority"]),L(e===null||typeof e=="string"||typeof e=="number"||typeof e=="object"&&".sv"in e,"Invalid priority type found: "+typeof e),typeof t=="object"&&".value"in t&&t[".value"]!==null&&(t=t[".value"]),typeof t!="object"||".sv"in t){const n=t;return new Xe(n,mt(e))}if(!(t instanceof Array)&&J1){const n=[];let s=!1;if(rn(t,(o,a)=>{if(o.substring(0,1)!=="."){const l=mt(a);l.isEmpty()||(s=s||!l.getPriority().isEmpty(),n.push(new pe(o,l)))}}),n.length===0)return Te.EMPTY_NODE;const r=$l(n,W1,o=>o.name,Fd);if(s){const o=$l(n,Et.getCompare());return new Te(r,mt(e),new Gn({".priority":o},{".priority":Et}))}else return new Te(r,mt(e),Gn.Default)}else{let n=Te.EMPTY_NODE;return rn(t,(s,i)=>{if(hs(t,s)&&s.substring(0,1)!=="."){const r=mt(i);(r.isLeafNode()||!r.isEmpty())&&(n=n.updateImmediateChild(s,r))}}),n.updatePriority(mt(e))}}K1(mt);/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Z1 extends Lc{constructor(e){super(),this.indexPath_=e,L(!ue(e)&&de(e)!==".priority","Can't create PathIndex with empty path or .priority key")}extractChild(e){return e.getChild(this.indexPath_)}isDefinedOn(e){return!e.getChild(this.indexPath_).isEmpty()}compare(e,n){const s=this.extractChild(e.node),i=this.extractChild(n.node),r=s.compareTo(i);return r===0?Vr(e.name,n.name):r}makePost(e,n){const s=mt(e),i=Te.EMPTY_NODE.updateChild(this.indexPath_,s);return new pe(n,i)}maxPost(){const e=Te.EMPTY_NODE.updateChild(this.indexPath_,ma);return new pe(fi,e)}toString(){return XT(this.indexPath_,0).join("/")}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class eL extends Lc{compare(e,n){const s=e.node.compareTo(n.node);return s===0?Vr(e.name,n.name):s}isDefinedOn(e){return!0}indexedValueChanged(e,n){return!e.equals(n)}minPost(){return pe.MIN}maxPost(){return pe.MAX}makePost(e,n){const s=mt(e);return new pe(n,s)}toString(){return".value"}}const tL=new eL;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function nL(t){return{type:"value",snapshotNode:t}}function sL(t,e){return{type:"child_added",snapshotNode:e,childName:t}}function iL(t,e){return{type:"child_removed",snapshotNode:e,childName:t}}function hg(t,e,n){return{type:"child_changed",snapshotNode:e,childName:t,oldSnap:n}}function rL(t,e){return{type:"child_moved",snapshotNode:e,childName:t}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ud{constructor(){this.limitSet_=!1,this.startSet_=!1,this.startNameSet_=!1,this.startAfterSet_=!1,this.endSet_=!1,this.endNameSet_=!1,this.endBeforeSet_=!1,this.limit_=0,this.viewFrom_="",this.indexStartValue_=null,this.indexStartName_="",this.indexEndValue_=null,this.indexEndName_="",this.index_=Et}hasStart(){return this.startSet_}isViewFromLeft(){return this.viewFrom_===""?this.startSet_:this.viewFrom_==="l"}getIndexStartValue(){return L(this.startSet_,"Only valid if start has been set"),this.indexStartValue_}getIndexStartName(){return L(this.startSet_,"Only valid if start has been set"),this.startNameSet_?this.indexStartName_:pr}hasEnd(){return this.endSet_}getIndexEndValue(){return L(this.endSet_,"Only valid if end has been set"),this.indexEndValue_}getIndexEndName(){return L(this.endSet_,"Only valid if end has been set"),this.endNameSet_?this.indexEndName_:fi}hasLimit(){return this.limitSet_}hasAnchoredLimit(){return this.limitSet_&&this.viewFrom_!==""}getLimit(){return L(this.limitSet_,"Only valid if limit has been set"),this.limit_}getIndex(){return this.index_}loadsAllData(){return!(this.startSet_||this.endSet_||this.limitSet_)}isDefault(){return this.loadsAllData()&&this.index_===Et}copy(){const e=new Ud;return e.limitSet_=this.limitSet_,e.limit_=this.limit_,e.startSet_=this.startSet_,e.startAfterSet_=this.startAfterSet_,e.indexStartValue_=this.indexStartValue_,e.startNameSet_=this.startNameSet_,e.indexStartName_=this.indexStartName_,e.endSet_=this.endSet_,e.endBeforeSet_=this.endBeforeSet_,e.indexEndValue_=this.indexEndValue_,e.endNameSet_=this.endNameSet_,e.indexEndName_=this.indexEndName_,e.index_=this.index_,e.viewFrom_=this.viewFrom_,e}}function fg(t){const e={};if(t.isDefault())return e;let n;if(t.index_===Et?n="$priority":t.index_===tL?n="$value":t.index_===Zi?n="$key":(L(t.index_ instanceof Z1,"Unrecognized index type!"),n=t.index_.toString()),e.orderBy=ot(n),t.startSet_){const s=t.startAfterSet_?"startAfter":"startAt";e[s]=ot(t.indexStartValue_),t.startNameSet_&&(e[s]+=","+ot(t.indexStartName_))}if(t.endSet_){const s=t.endBeforeSet_?"endBefore":"endAt";e[s]=ot(t.indexEndValue_),t.endNameSet_&&(e[s]+=","+ot(t.indexEndName_))}return t.limitSet_&&(t.isViewFromLeft()?e.limitToFirst=t.limit_:e.limitToLast=t.limit_),e}function dg(t){const e={};if(t.startSet_&&(e.sp=t.indexStartValue_,t.startNameSet_&&(e.sn=t.indexStartName_),e.sin=!t.startAfterSet_),t.endSet_&&(e.ep=t.indexEndValue_,t.endNameSet_&&(e.en=t.indexEndName_),e.ein=!t.endBeforeSet_),t.limitSet_){e.l=t.limit_;let n=t.viewFrom_;n===""&&(t.isViewFromLeft()?n="l":n="r"),e.vf=n}return t.index_!==Et&&(e.i=t.index_.toString()),e}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Bl extends GT{constructor(e,n,s,i){super(),this.repoInfo_=e,this.onDataUpdate_=n,this.authTokenProvider_=s,this.appCheckTokenProvider_=i,this.log_=pa("p:rest:"),this.listens_={}}reportStats(e){throw new Error("Method not implemented.")}static getListenId_(e,n){return n!==void 0?"tag$"+n:(L(e._queryParams.isDefault(),"should have a tag if it's not a default query."),e._path.toString())}listen(e,n,s,i){const r=e._path.toString();this.log_("Listen called for "+r+" "+e._queryIdentifier);const o=Bl.getListenId_(e,s),a={};this.listens_[o]=a;const l=fg(e._queryParams);this.restRequest_(r+".json",l,(c,u)=>{let h=u;if(c===404&&(h=null,c=null),c===null&&this.onDataUpdate_(r,h,!1,s),dr(this.listens_,o)===a){let f;c?c===401?f="permission_denied":f="rest_error:"+c:f="ok",i(f,null)}})}unlisten(e,n){const s=Bl.getListenId_(e,n);delete this.listens_[s]}get(e){const n=fg(e._queryParams),s=e._path.toString(),i=new Uo;return this.restRequest_(s+".json",n,(r,o)=>{let a=o;r===404&&(a=null,r=null),r===null?(this.onDataUpdate_(s,a,!1,null),i.resolve(a)):i.reject(new Error(a))}),i.promise}refreshAuthToken(e){}restRequest_(e,n={},s){return n.format="export",Promise.all([this.authTokenProvider_.getToken(!1),this.appCheckTokenProvider_.getToken(!1)]).then(([i,r])=>{i&&i.accessToken&&(n.auth=i.accessToken),r&&r.token&&(n.ac=r.token);const o=(this.repoInfo_.secure?"https://":"http://")+this.repoInfo_.host+e+"?ns="+this.repoInfo_.namespace+Cd(n);this.log_("Sending REST request for "+o);const a=new XMLHttpRequest;a.onreadystatechange=()=>{if(s&&a.readyState===4){this.log_("REST Response for "+o+" received. status:",a.status,"response:",a.responseText);let l=null;if(a.status>=200&&a.status<300){try{l=$o(a.responseText)}catch{qt("Failed to parse JSON response for "+o+": "+a.responseText)}s(null,l)}else a.status!==401&&a.status!==404&&qt("Got unsuccessful REST response for "+o+" Status: "+a.status),s(a.status);s=null}},a.open("GET",o,!0),a.send()})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class oL{constructor(){this.rootNode_=Te.EMPTY_NODE}getNode(e){return this.rootNode_.getChild(e)}updateSnapshot(e,n){this.rootNode_=this.rootNode_.updateChild(e,n)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Hl(){return{value:null,children:new Map}}function ow(t,e,n){if(ue(e))t.value=n,t.children.clear();else if(t.value!==null)t.value=t.value.updateChild(e,n);else{const s=de(e);t.children.has(s)||t.children.set(s,Hl());const i=t.children.get(s);e=Oe(e),ow(i,e,n)}}function ef(t,e,n){t.value!==null?n(e,t.value):aL(t,(s,i)=>{const r=new xe(e.toString()+"/"+s);ef(i,r,n)})}function aL(t,e){t.children.forEach((n,s)=>{e(s,n)})}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class lL{constructor(e){this.collection_=e,this.last_=null}get(){const e=this.collection_.get(),n=Object.assign({},e);return this.last_&&rn(this.last_,(s,i)=>{n[s]=n[s]-i}),this.last_=e,n}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const pg=10*1e3,cL=30*1e3,uL=5*60*1e3;class hL{constructor(e,n){this.server_=n,this.statsToReport_={},this.statsListener_=new lL(e);const s=pg+(cL-pg)*Math.random();wo(this.reportStats_.bind(this),Math.floor(s))}reportStats_(){const e=this.statsListener_.get(),n={};let s=!1;rn(e,(i,r)=>{r>0&&hs(this.statsToReport_,i)&&(n[i]=r,s=!0)}),s&&this.server_.reportStats(n),wo(this.reportStats_.bind(this),Math.floor(Math.random()*2*uL))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var Nn;(function(t){t[t.OVERWRITE=0]="OVERWRITE",t[t.MERGE=1]="MERGE",t[t.ACK_USER_WRITE=2]="ACK_USER_WRITE",t[t.LISTEN_COMPLETE=3]="LISTEN_COMPLETE"})(Nn||(Nn={}));function aw(){return{fromUser:!0,fromServer:!1,queryId:null,tagged:!1}}function lw(){return{fromUser:!1,fromServer:!0,queryId:null,tagged:!1}}function cw(t){return{fromUser:!1,fromServer:!0,queryId:t,tagged:!0}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class jl{constructor(e,n,s){this.path=e,this.affectedTree=n,this.revert=s,this.type=Nn.ACK_USER_WRITE,this.source=aw()}operationForChild(e){if(ue(this.path)){if(this.affectedTree.value!=null)return L(this.affectedTree.children.isEmpty(),"affectedTree should not have overlapping affected paths."),this;{const n=this.affectedTree.subtree(new xe(e));return new jl(Ce(),n,this.revert)}}else return L(de(this.path)===e,"operationForChild called for unrelated child."),new jl(Oe(this.path),this.affectedTree,this.revert)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class di{constructor(e,n,s){this.source=e,this.path=n,this.snap=s,this.type=Nn.OVERWRITE}operationForChild(e){return ue(this.path)?new di(this.source,Ce(),this.snap.getImmediateChild(e)):new di(this.source,Oe(this.path),this.snap)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Wo{constructor(e,n,s){this.source=e,this.path=n,this.children=s,this.type=Nn.MERGE}operationForChild(e){if(ue(this.path)){const n=this.children.subtree(new xe(e));return n.isEmpty()?null:n.value?new di(this.source,Ce(),n.value):new Wo(this.source,Ce(),n)}else return L(de(this.path)===e,"Can't get a merge for a child not on the path of the operation"),new Wo(this.source,Oe(this.path),this.children)}toString(){return"Operation("+this.path+": "+this.source.toString()+" merge: "+this.children.toString()+")"}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $d{constructor(e,n,s){this.node_=e,this.fullyInitialized_=n,this.filtered_=s}isFullyInitialized(){return this.fullyInitialized_}isFiltered(){return this.filtered_}isCompleteForPath(e){if(ue(e))return this.isFullyInitialized()&&!this.filtered_;const n=de(e);return this.isCompleteForChild(n)}isCompleteForChild(e){return this.isFullyInitialized()&&!this.filtered_||this.node_.hasChild(e)}getNode(){return this.node_}}function fL(t,e,n,s){const i=[],r=[];return e.forEach(o=>{o.type==="child_changed"&&t.index_.indexedValueChanged(o.oldSnap,o.snapshotNode)&&r.push(rL(o.childName,o.snapshotNode))}),Zr(t,i,"child_removed",e,s,n),Zr(t,i,"child_added",e,s,n),Zr(t,i,"child_moved",r,s,n),Zr(t,i,"child_changed",e,s,n),Zr(t,i,"value",e,s,n),i}function Zr(t,e,n,s,i,r){const o=s.filter(a=>a.type===n);o.sort((a,l)=>pL(t,a,l)),o.forEach(a=>{const l=dL(t,a,r);i.forEach(c=>{c.respondsTo(a.type)&&e.push(c.createEvent(l,t.query_))})})}function dL(t,e,n){return e.type==="value"||e.type==="child_removed"||(e.prevName=n.getPredecessorChildName(e.childName,e.snapshotNode,t.index_)),e}function pL(t,e,n){if(e.childName==null||n.childName==null)throw xr("Should only compare child_ events.");const s=new pe(e.childName,e.snapshotNode),i=new pe(n.childName,n.snapshotNode);return t.index_.compare(s,i)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function uw(t,e){return{eventCache:t,serverCache:e}}function Ao(t,e,n,s){return uw(new $d(e,n,s),t.serverCache)}function hw(t,e,n,s){return uw(t.eventCache,new $d(e,n,s))}function tf(t){return t.eventCache.isFullyInitialized()?t.eventCache.getNode():null}function pi(t){return t.serverCache.isFullyInitialized()?t.serverCache.getNode():null}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Qu;const _L=()=>(Qu||(Qu=new Pn(e1)),Qu);class Pe{constructor(e,n=_L()){this.value=e,this.children=n}static fromObject(e){let n=new Pe(null);return rn(e,(s,i)=>{n=n.set(new xe(s),i)}),n}isEmpty(){return this.value===null&&this.children.isEmpty()}findRootMostMatchingPathAndValue(e,n){if(this.value!=null&&n(this.value))return{path:Ce(),value:this.value};if(ue(e))return null;{const s=de(e),i=this.children.get(s);if(i!==null){const r=i.findRootMostMatchingPathAndValue(Oe(e),n);return r!=null?{path:et(new xe(s),r.path),value:r.value}:null}else return null}}findRootMostValueAndPath(e){return this.findRootMostMatchingPathAndValue(e,()=>!0)}subtree(e){if(ue(e))return this;{const n=de(e),s=this.children.get(n);return s!==null?s.subtree(Oe(e)):new Pe(null)}}set(e,n){if(ue(e))return new Pe(n,this.children);{const s=de(e),r=(this.children.get(s)||new Pe(null)).set(Oe(e),n),o=this.children.insert(s,r);return new Pe(this.value,o)}}remove(e){if(ue(e))return this.children.isEmpty()?new Pe(null):new Pe(null,this.children);{const n=de(e),s=this.children.get(n);if(s){const i=s.remove(Oe(e));let r;return i.isEmpty()?r=this.children.remove(n):r=this.children.insert(n,i),this.value===null&&r.isEmpty()?new Pe(null):new Pe(this.value,r)}else return this}}get(e){if(ue(e))return this.value;{const n=de(e),s=this.children.get(n);return s?s.get(Oe(e)):null}}setTree(e,n){if(ue(e))return n;{const s=de(e),r=(this.children.get(s)||new Pe(null)).setTree(Oe(e),n);let o;return r.isEmpty()?o=this.children.remove(s):o=this.children.insert(s,r),new Pe(this.value,o)}}fold(e){return this.fold_(Ce(),e)}fold_(e,n){const s={};return this.children.inorderTraversal((i,r)=>{s[i]=r.fold_(et(e,i),n)}),n(e,this.value,s)}findOnPath(e,n){return this.findOnPath_(e,Ce(),n)}findOnPath_(e,n,s){const i=this.value?s(n,this.value):!1;if(i)return i;if(ue(e))return null;{const r=de(e),o=this.children.get(r);return o?o.findOnPath_(Oe(e),et(n,r),s):null}}foreachOnPath(e,n){return this.foreachOnPath_(e,Ce(),n)}foreachOnPath_(e,n,s){if(ue(e))return this;{this.value&&s(n,this.value);const i=de(e),r=this.children.get(i);return r?r.foreachOnPath_(Oe(e),et(n,i),s):new Pe(null)}}foreach(e){this.foreach_(Ce(),e)}foreach_(e,n){this.children.inorderTraversal((s,i)=>{i.foreach_(et(e,s),n)}),this.value&&n(e,this.value)}foreachChild(e){this.children.inorderTraversal((n,s)=>{s.value&&e(n,s.value)})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class gn{constructor(e){this.writeTree_=e}static empty(){return new gn(new Pe(null))}}function Io(t,e,n){if(ue(e))return new gn(new Pe(n));{const s=t.writeTree_.findRootMostValueAndPath(e);if(s!=null){const i=s.path;let r=s.value;const o=Zt(i,e);return r=r.updateChild(o,n),new gn(t.writeTree_.set(i,r))}else{const i=new Pe(n),r=t.writeTree_.setTree(e,i);return new gn(r)}}}function _g(t,e,n){let s=t;return rn(n,(i,r)=>{s=Io(s,et(e,i),r)}),s}function mg(t,e){if(ue(e))return gn.empty();{const n=t.writeTree_.setTree(e,new Pe(null));return new gn(n)}}function nf(t,e){return wi(t,e)!=null}function wi(t,e){const n=t.writeTree_.findRootMostValueAndPath(e);return n!=null?t.writeTree_.get(n.path).getChild(Zt(n.path,e)):null}function gg(t){const e=[],n=t.writeTree_.value;return n!=null?n.isLeafNode()||n.forEachChild(Et,(s,i)=>{e.push(new pe(s,i))}):t.writeTree_.children.inorderTraversal((s,i)=>{i.value!=null&&e.push(new pe(s,i.value))}),e}function Is(t,e){if(ue(e))return t;{const n=wi(t,e);return n!=null?new gn(new Pe(n)):new gn(t.writeTree_.subtree(e))}}function sf(t){return t.writeTree_.isEmpty()}function _r(t,e){return fw(Ce(),t.writeTree_,e)}function fw(t,e,n){if(e.value!=null)return n.updateChild(t,e.value);{let s=null;return e.children.inorderTraversal((i,r)=>{i===".priority"?(L(r.value!==null,"Priority writes must always be leaf nodes"),s=r.value):n=fw(et(t,i),r,n)}),!n.getChild(t).isEmpty()&&s!==null&&(n=n.updateChild(et(t,".priority"),s)),n}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function dw(t,e){return yw(e,t)}function mL(t,e,n,s,i){L(s>t.lastWriteId,"Stacking an older write on top of newer ones"),i===void 0&&(i=!0),t.allWrites.push({path:e,snap:n,writeId:s,visible:i}),i&&(t.visibleWrites=Io(t.visibleWrites,e,n)),t.lastWriteId=s}function gL(t,e){for(let n=0;n<t.allWrites.length;n++){const s=t.allWrites[n];if(s.writeId===e)return s}return null}function yL(t,e){const n=t.allWrites.findIndex(a=>a.writeId===e);L(n>=0,"removeWrite called with nonexistent writeId.");const s=t.allWrites[n];t.allWrites.splice(n,1);let i=s.visible,r=!1,o=t.allWrites.length-1;for(;i&&o>=0;){const a=t.allWrites[o];a.visible&&(o>=n&&EL(a,s.path)?i=!1:dn(s.path,a.path)&&(r=!0)),o--}if(i){if(r)return vL(t),!0;if(s.snap)t.visibleWrites=mg(t.visibleWrites,s.path);else{const a=s.children;rn(a,l=>{t.visibleWrites=mg(t.visibleWrites,et(s.path,l))})}return!0}else return!1}function EL(t,e){if(t.snap)return dn(t.path,e);for(const n in t.children)if(t.children.hasOwnProperty(n)&&dn(et(t.path,n),e))return!0;return!1}function vL(t){t.visibleWrites=pw(t.allWrites,TL,Ce()),t.allWrites.length>0?t.lastWriteId=t.allWrites[t.allWrites.length-1].writeId:t.lastWriteId=-1}function TL(t){return t.visible}function pw(t,e,n){let s=gn.empty();for(let i=0;i<t.length;++i){const r=t[i];if(e(r)){const o=r.path;let a;if(r.snap)dn(n,o)?(a=Zt(n,o),s=Io(s,a,r.snap)):dn(o,n)&&(a=Zt(o,n),s=Io(s,Ce(),r.snap.getChild(a)));else if(r.children){if(dn(n,o))a=Zt(n,o),s=_g(s,a,r.children);else if(dn(o,n))if(a=Zt(o,n),ue(a))s=_g(s,Ce(),r.children);else{const l=dr(r.children,de(a));if(l){const c=l.getChild(Oe(a));s=Io(s,Ce(),c)}}}else throw xr("WriteRecord should have .snap or .children")}}return s}function _w(t,e,n,s,i){if(!s&&!i){const r=wi(t.visibleWrites,e);if(r!=null)return r;{const o=Is(t.visibleWrites,e);if(sf(o))return n;if(n==null&&!nf(o,Ce()))return null;{const a=n||Te.EMPTY_NODE;return _r(o,a)}}}else{const r=Is(t.visibleWrites,e);if(!i&&sf(r))return n;if(!i&&n==null&&!nf(r,Ce()))return null;{const o=function(c){return(c.visible||i)&&(!s||!~s.indexOf(c.writeId))&&(dn(c.path,e)||dn(e,c.path))},a=pw(t.allWrites,o,e),l=n||Te.EMPTY_NODE;return _r(a,l)}}}function wL(t,e,n){let s=Te.EMPTY_NODE;const i=wi(t.visibleWrites,e);if(i)return i.isLeafNode()||i.forEachChild(Et,(r,o)=>{s=s.updateImmediateChild(r,o)}),s;if(n){const r=Is(t.visibleWrites,e);return n.forEachChild(Et,(o,a)=>{const l=_r(Is(r,new xe(o)),a);s=s.updateImmediateChild(o,l)}),gg(r).forEach(o=>{s=s.updateImmediateChild(o.name,o.node)}),s}else{const r=Is(t.visibleWrites,e);return gg(r).forEach(o=>{s=s.updateImmediateChild(o.name,o.node)}),s}}function AL(t,e,n,s,i){L(s||i,"Either existingEventSnap or existingServerSnap must exist");const r=et(e,n);if(nf(t.visibleWrites,r))return null;{const o=Is(t.visibleWrites,r);return sf(o)?i.getChild(n):_r(o,i.getChild(n))}}function IL(t,e,n,s){const i=et(e,n),r=wi(t.visibleWrites,i);if(r!=null)return r;if(s.isCompleteForChild(n)){const o=Is(t.visibleWrites,i);return _r(o,s.getNode().getImmediateChild(n))}else return null}function bL(t,e){return wi(t.visibleWrites,e)}function CL(t,e,n,s,i,r,o){let a;const l=Is(t.visibleWrites,e),c=wi(l,Ce());if(c!=null)a=c;else if(n!=null)a=_r(l,n);else return[];if(a=a.withIndex(o),!a.isEmpty()&&!a.isLeafNode()){const u=[],h=o.getCompare(),f=r?a.getReverseIteratorFrom(s,o):a.getIteratorFrom(s,o);let d=f.getNext();for(;d&&u.length<i;)h(d,s)!==0&&u.push(d),d=f.getNext();return u}else return[]}function RL(){return{visibleWrites:gn.empty(),allWrites:[],lastWriteId:-1}}function rf(t,e,n,s){return _w(t.writeTree,t.treePath,e,n,s)}function mw(t,e){return wL(t.writeTree,t.treePath,e)}function yg(t,e,n,s){return AL(t.writeTree,t.treePath,e,n,s)}function Wl(t,e){return bL(t.writeTree,et(t.treePath,e))}function SL(t,e,n,s,i,r){return CL(t.writeTree,t.treePath,e,n,s,i,r)}function Bd(t,e,n){return IL(t.writeTree,t.treePath,e,n)}function gw(t,e){return yw(et(t.treePath,e),t.writeTree)}function yw(t,e){return{treePath:t,writeTree:e}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class PL{constructor(){this.changeMap=new Map}trackChildChange(e){const n=e.type,s=e.childName;L(n==="child_added"||n==="child_changed"||n==="child_removed","Only child changes supported for tracking"),L(s!==".priority","Only non-priority child changes can be tracked.");const i=this.changeMap.get(s);if(i){const r=i.type;if(n==="child_added"&&r==="child_removed")this.changeMap.set(s,hg(s,e.snapshotNode,i.snapshotNode));else if(n==="child_removed"&&r==="child_added")this.changeMap.delete(s);else if(n==="child_removed"&&r==="child_changed")this.changeMap.set(s,iL(s,i.oldSnap));else if(n==="child_changed"&&r==="child_added")this.changeMap.set(s,sL(s,e.snapshotNode));else if(n==="child_changed"&&r==="child_changed")this.changeMap.set(s,hg(s,e.snapshotNode,i.oldSnap));else throw xr("Illegal combination of changes: "+e+" occurred after "+i)}else this.changeMap.set(s,e)}getChanges(){return Array.from(this.changeMap.values())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class NL{getCompleteChild(e){return null}getChildAfterChild(e,n,s){return null}}const Ew=new NL;class Hd{constructor(e,n,s=null){this.writes_=e,this.viewCache_=n,this.optCompleteServerCache_=s}getCompleteChild(e){const n=this.viewCache_.eventCache;if(n.isCompleteForChild(e))return n.getNode().getImmediateChild(e);{const s=this.optCompleteServerCache_!=null?new $d(this.optCompleteServerCache_,!0,!1):this.viewCache_.serverCache;return Bd(this.writes_,e,s)}}getChildAfterChild(e,n,s){const i=this.optCompleteServerCache_!=null?this.optCompleteServerCache_:pi(this.viewCache_),r=SL(this.writes_,i,n,1,s,e);return r.length===0?null:r[0]}}function OL(t,e){L(e.eventCache.getNode().isIndexed(t.filter.getIndex()),"Event snap not indexed"),L(e.serverCache.getNode().isIndexed(t.filter.getIndex()),"Server snap not indexed")}function DL(t,e,n,s,i){const r=new PL;let o,a;if(n.type===Nn.OVERWRITE){const c=n;c.source.fromUser?o=of(t,e,c.path,c.snap,s,i,r):(L(c.source.fromServer,"Unknown source."),a=c.source.tagged||e.serverCache.isFiltered()&&!ue(c.path),o=ql(t,e,c.path,c.snap,s,i,a,r))}else if(n.type===Nn.MERGE){const c=n;c.source.fromUser?o=xL(t,e,c.path,c.children,s,i,r):(L(c.source.fromServer,"Unknown source."),a=c.source.tagged||e.serverCache.isFiltered(),o=af(t,e,c.path,c.children,s,i,a,r))}else if(n.type===Nn.ACK_USER_WRITE){const c=n;c.revert?o=VL(t,e,c.path,s,i,r):o=LL(t,e,c.path,c.affectedTree,s,i,r)}else if(n.type===Nn.LISTEN_COMPLETE)o=ML(t,e,n.path,s,r);else throw xr("Unknown operation type: "+n.type);const l=r.getChanges();return kL(e,o,l),{viewCache:o,changes:l}}function kL(t,e,n){const s=e.eventCache;if(s.isFullyInitialized()){const i=s.getNode().isLeafNode()||s.getNode().isEmpty(),r=tf(t);(n.length>0||!t.eventCache.isFullyInitialized()||i&&!s.getNode().equals(r)||!s.getNode().getPriority().equals(r.getPriority()))&&n.push(nL(tf(e)))}}function vw(t,e,n,s,i,r){const o=e.eventCache;if(Wl(s,n)!=null)return e;{let a,l;if(ue(n))if(L(e.serverCache.isFullyInitialized(),"If change path is empty, we must have complete server data"),e.serverCache.isFiltered()){const c=pi(e),u=c instanceof Te?c:Te.EMPTY_NODE,h=mw(s,u);a=t.filter.updateFullNode(e.eventCache.getNode(),h,r)}else{const c=rf(s,pi(e));a=t.filter.updateFullNode(e.eventCache.getNode(),c,r)}else{const c=de(n);if(c===".priority"){L(Ns(n)===1,"Can't have a priority with additional path components");const u=o.getNode();l=e.serverCache.getNode();const h=yg(s,n,u,l);h!=null?a=t.filter.updatePriority(u,h):a=o.getNode()}else{const u=Oe(n);let h;if(o.isCompleteForChild(c)){l=e.serverCache.getNode();const f=yg(s,n,o.getNode(),l);f!=null?h=o.getNode().getImmediateChild(c).updateChild(u,f):h=o.getNode().getImmediateChild(c)}else h=Bd(s,c,e.serverCache);h!=null?a=t.filter.updateChild(o.getNode(),c,h,u,i,r):a=o.getNode()}}return Ao(e,a,o.isFullyInitialized()||ue(n),t.filter.filtersNodes())}}function ql(t,e,n,s,i,r,o,a){const l=e.serverCache;let c;const u=o?t.filter:t.filter.getIndexedFilter();if(ue(n))c=u.updateFullNode(l.getNode(),s,null);else if(u.filtersNodes()&&!l.isFiltered()){const d=l.getNode().updateChild(n,s);c=u.updateFullNode(l.getNode(),d,null)}else{const d=de(n);if(!l.isCompleteForPath(n)&&Ns(n)>1)return e;const m=Oe(n),y=l.getNode().getImmediateChild(d).updateChild(m,s);d===".priority"?c=u.updatePriority(l.getNode(),y):c=u.updateChild(l.getNode(),d,y,m,Ew,null)}const h=hw(e,c,l.isFullyInitialized()||ue(n),u.filtersNodes()),f=new Hd(i,h,r);return vw(t,h,n,i,f,a)}function of(t,e,n,s,i,r,o){const a=e.eventCache;let l,c;const u=new Hd(i,e,r);if(ue(n))c=t.filter.updateFullNode(e.eventCache.getNode(),s,o),l=Ao(e,c,!0,t.filter.filtersNodes());else{const h=de(n);if(h===".priority")c=t.filter.updatePriority(e.eventCache.getNode(),s),l=Ao(e,c,a.isFullyInitialized(),a.isFiltered());else{const f=Oe(n),d=a.getNode().getImmediateChild(h);let m;if(ue(f))m=s;else{const g=u.getCompleteChild(h);g!=null?QT(f)===".priority"&&g.getChild(JT(f)).isEmpty()?m=g:m=g.updateChild(f,s):m=Te.EMPTY_NODE}if(d.equals(m))l=e;else{const g=t.filter.updateChild(a.getNode(),h,m,f,u,o);l=Ao(e,g,a.isFullyInitialized(),t.filter.filtersNodes())}}}return l}function Eg(t,e){return t.eventCache.isCompleteForChild(e)}function xL(t,e,n,s,i,r,o){let a=e;return s.foreach((l,c)=>{const u=et(n,l);Eg(e,de(u))&&(a=of(t,a,u,c,i,r,o))}),s.foreach((l,c)=>{const u=et(n,l);Eg(e,de(u))||(a=of(t,a,u,c,i,r,o))}),a}function vg(t,e,n){return n.foreach((s,i)=>{e=e.updateChild(s,i)}),e}function af(t,e,n,s,i,r,o,a){if(e.serverCache.getNode().isEmpty()&&!e.serverCache.isFullyInitialized())return e;let l=e,c;ue(n)?c=s:c=new Pe(null).setTree(n,s);const u=e.serverCache.getNode();return c.children.inorderTraversal((h,f)=>{if(u.hasChild(h)){const d=e.serverCache.getNode().getImmediateChild(h),m=vg(t,d,f);l=ql(t,l,new xe(h),m,i,r,o,a)}}),c.children.inorderTraversal((h,f)=>{const d=!e.serverCache.isCompleteForChild(h)&&f.value===null;if(!u.hasChild(h)&&!d){const m=e.serverCache.getNode().getImmediateChild(h),g=vg(t,m,f);l=ql(t,l,new xe(h),g,i,r,o,a)}}),l}function LL(t,e,n,s,i,r,o){if(Wl(i,n)!=null)return e;const a=e.serverCache.isFiltered(),l=e.serverCache;if(s.value!=null){if(ue(n)&&l.isFullyInitialized()||l.isCompleteForPath(n))return ql(t,e,n,l.getNode().getChild(n),i,r,a,o);if(ue(n)){let c=new Pe(null);return l.getNode().forEachChild(Zi,(u,h)=>{c=c.set(new xe(u),h)}),af(t,e,n,c,i,r,a,o)}else return e}else{let c=new Pe(null);return s.foreach((u,h)=>{const f=et(n,u);l.isCompleteForPath(f)&&(c=c.set(u,l.getNode().getChild(f)))}),af(t,e,n,c,i,r,a,o)}}function ML(t,e,n,s,i){const r=e.serverCache,o=hw(e,r.getNode(),r.isFullyInitialized()||ue(n),r.isFiltered());return vw(t,o,n,s,Ew,i)}function VL(t,e,n,s,i,r){let o;if(Wl(s,n)!=null)return e;{const a=new Hd(s,e,i),l=e.eventCache.getNode();let c;if(ue(n)||de(n)===".priority"){let u;if(e.serverCache.isFullyInitialized())u=rf(s,pi(e));else{const h=e.serverCache.getNode();L(h instanceof Te,"serverChildren would be complete if leaf node"),u=mw(s,h)}u=u,c=t.filter.updateFullNode(l,u,r)}else{const u=de(n);let h=Bd(s,u,e.serverCache);h==null&&e.serverCache.isCompleteForChild(u)&&(h=l.getImmediateChild(u)),h!=null?c=t.filter.updateChild(l,u,h,Oe(n),a,r):e.eventCache.getNode().hasChild(u)?c=t.filter.updateChild(l,u,Te.EMPTY_NODE,Oe(n),a,r):c=l,c.isEmpty()&&e.serverCache.isFullyInitialized()&&(o=rf(s,pi(e)),o.isLeafNode()&&(c=t.filter.updateFullNode(c,o,r)))}return o=e.serverCache.isFullyInitialized()||Wl(s,Ce())!=null,Ao(e,c,o,t.filter.filtersNodes())}}function FL(t,e){const n=pi(t.viewCache_);return n&&(t.query._queryParams.loadsAllData()||!ue(e)&&!n.getImmediateChild(de(e)).isEmpty())?n.getChild(e):null}function Tg(t,e,n,s){e.type===Nn.MERGE&&e.source.queryId!==null&&(L(pi(t.viewCache_),"We should always have a full cache before handling merges"),L(tf(t.viewCache_),"Missing event cache, even though we have a server cache"));const i=t.viewCache_,r=DL(t.processor_,i,e,n,s);return OL(t.processor_,r.viewCache),L(r.viewCache.serverCache.isFullyInitialized()||!i.serverCache.isFullyInitialized(),"Once a server snap is complete, it should never go back"),t.viewCache_=r.viewCache,UL(t,r.changes,r.viewCache.eventCache.getNode(),null)}function UL(t,e,n,s){const i=s?[s]:t.eventRegistrations_;return fL(t.eventGenerator_,e,n,i)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let wg;function $L(t){L(!wg,"__referenceConstructor has already been defined"),wg=t}function jd(t,e,n,s){const i=e.source.queryId;if(i!==null){const r=t.views.get(i);return L(r!=null,"SyncTree gave us an op for an invalid query."),Tg(r,e,n,s)}else{let r=[];for(const o of t.views.values())r=r.concat(Tg(o,e,n,s));return r}}function Wd(t,e){let n=null;for(const s of t.views.values())n=n||FL(s,e);return n}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Ag;function BL(t){L(!Ag,"__referenceConstructor has already been defined"),Ag=t}class Ig{constructor(e){this.listenProvider_=e,this.syncPointTree_=new Pe(null),this.pendingWriteTree_=RL(),this.tagToQueryMap=new Map,this.queryToTagMap=new Map}}function HL(t,e,n,s,i){return mL(t.pendingWriteTree_,e,n,s,i),i?Vc(t,new di(aw(),e,n)):[]}function ji(t,e,n=!1){const s=gL(t.pendingWriteTree_,e);if(yL(t.pendingWriteTree_,e)){let r=new Pe(null);return s.snap!=null?r=r.set(Ce(),!0):rn(s.children,o=>{r=r.set(new xe(o),!0)}),Vc(t,new jl(s.path,r,n))}else return[]}function Mc(t,e,n){return Vc(t,new di(lw(),e,n))}function jL(t,e,n){const s=Pe.fromObject(n);return Vc(t,new Wo(lw(),e,s))}function WL(t,e,n,s){const i=Iw(t,s);if(i!=null){const r=bw(i),o=r.path,a=r.queryId,l=Zt(o,e),c=new di(cw(a),l,n);return Cw(t,o,c)}else return[]}function qL(t,e,n,s){const i=Iw(t,s);if(i){const r=bw(i),o=r.path,a=r.queryId,l=Zt(o,e),c=Pe.fromObject(n),u=new Wo(cw(a),l,c);return Cw(t,o,u)}else return[]}function Tw(t,e,n){const i=t.pendingWriteTree_,r=t.syncPointTree_.findOnPath(e,(o,a)=>{const l=Zt(o,e),c=Wd(a,l);if(c)return c});return _w(i,e,r,n,!0)}function Vc(t,e){return ww(e,t.syncPointTree_,null,dw(t.pendingWriteTree_,Ce()))}function ww(t,e,n,s){if(ue(t.path))return Aw(t,e,n,s);{const i=e.get(Ce());n==null&&i!=null&&(n=Wd(i,Ce()));let r=[];const o=de(t.path),a=t.operationForChild(o),l=e.children.get(o);if(l&&a){const c=n?n.getImmediateChild(o):null,u=gw(s,o);r=r.concat(ww(a,l,c,u))}return i&&(r=r.concat(jd(i,t,s,n))),r}}function Aw(t,e,n,s){const i=e.get(Ce());n==null&&i!=null&&(n=Wd(i,Ce()));let r=[];return e.children.inorderTraversal((o,a)=>{const l=n?n.getImmediateChild(o):null,c=gw(s,o),u=t.operationForChild(o);u&&(r=r.concat(Aw(u,a,l,c)))}),i&&(r=r.concat(jd(i,t,s,n))),r}function Iw(t,e){return t.tagToQueryMap.get(e)}function bw(t){const e=t.indexOf("$");return L(e!==-1&&e<t.length-1,"Bad queryKey."),{queryId:t.substr(e+1),path:new xe(t.substr(0,e))}}function Cw(t,e,n){const s=t.syncPointTree_.get(e);L(s,"Missing sync point for query tag that we're tracking");const i=dw(t.pendingWriteTree_,e);return jd(s,n,i,null)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class qd{constructor(e){this.node_=e}getImmediateChild(e){const n=this.node_.getImmediateChild(e);return new qd(n)}node(){return this.node_}}class Kd{constructor(e,n){this.syncTree_=e,this.path_=n}getImmediateChild(e){const n=et(this.path_,e);return new Kd(this.syncTree_,n)}node(){return Tw(this.syncTree_,this.path_)}}const KL=function(t){return t=t||{},t.timestamp=t.timestamp||new Date().getTime(),t},bg=function(t,e,n){if(!t||typeof t!="object")return t;if(L(".sv"in t,"Unexpected leaf node or priority contents"),typeof t[".sv"]=="string")return zL(t[".sv"],e,n);if(typeof t[".sv"]=="object")return GL(t[".sv"],e);L(!1,"Unexpected server value: "+JSON.stringify(t,null,2))},zL=function(t,e,n){switch(t){case"timestamp":return n.timestamp;default:L(!1,"Unexpected server value: "+t)}},GL=function(t,e,n){t.hasOwnProperty("increment")||L(!1,"Unexpected server value: "+JSON.stringify(t,null,2));const s=t.increment;typeof s!="number"&&L(!1,"Unexpected increment value: "+s);const i=e.node();if(L(i!==null&&typeof i<"u","Expected ChildrenNode.EMPTY_NODE for nulls"),!i.isLeafNode())return s;const o=i.getValue();return typeof o!="number"?s:o+s},YL=function(t,e,n,s){return zd(e,new Kd(n,t),s)},QL=function(t,e,n){return zd(t,new qd(e),n)};function zd(t,e,n){const s=t.getPriority().val(),i=bg(s,e.getImmediateChild(".priority"),n);let r;if(t.isLeafNode()){const o=t,a=bg(o.getValue(),e,n);return a!==o.getValue()||i!==o.getPriority().val()?new Xe(a,mt(i)):t}else{const o=t;return r=o,i!==o.getPriority().val()&&(r=r.updatePriority(new Xe(i))),o.forEachChild(Et,(a,l)=>{const c=zd(l,e.getImmediateChild(a),n);c!==l&&(r=r.updateImmediateChild(a,c))}),r}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Gd{constructor(e="",n=null,s={children:{},childCount:0}){this.name=e,this.parent=n,this.node=s}}function Yd(t,e){let n=e instanceof xe?e:new xe(e),s=t,i=de(n);for(;i!==null;){const r=dr(s.node.children,i)||{children:{},childCount:0};s=new Gd(i,s,r),n=Oe(n),i=de(n)}return s}function Fr(t){return t.node.value}function Rw(t,e){t.node.value=e,lf(t)}function Sw(t){return t.node.childCount>0}function XL(t){return Fr(t)===void 0&&!Sw(t)}function Fc(t,e){rn(t.node.children,(n,s)=>{e(new Gd(n,t,s))})}function Pw(t,e,n,s){n&&!s&&e(t),Fc(t,i=>{Pw(i,e,!0,s)}),n&&s&&e(t)}function JL(t,e,n){let s=n?t:t.parent;for(;s!==null;){if(e(s))return!0;s=s.parent}return!1}function ga(t){return new xe(t.parent===null?t.name:ga(t.parent)+"/"+t.name)}function lf(t){t.parent!==null&&ZL(t.parent,t.name,t)}function ZL(t,e,n){const s=XL(n),i=hs(t.node.children,e);s&&i?(delete t.node.children[e],t.node.childCount--,lf(t)):!s&&!i&&(t.node.children[e]=n.node,t.node.childCount++,lf(t))}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const eM=/[\[\].#$\/\u0000-\u001F\u007F]/,tM=/[\[\].#$\u0000-\u001F\u007F]/,Xu=10*1024*1024,Nw=function(t){return typeof t=="string"&&t.length!==0&&!eM.test(t)},nM=function(t){return typeof t=="string"&&t.length!==0&&!tM.test(t)},sM=function(t){return t&&(t=t.replace(/^\/*\.info(\/|$)/,"/")),nM(t)},Ow=function(t,e,n){const s=n instanceof xe?new M1(n,t):n;if(e===void 0)throw new Error(t+"contains undefined "+Hs(s));if(typeof e=="function")throw new Error(t+"contains a function "+Hs(s)+" with contents = "+e.toString());if(NT(e))throw new Error(t+"contains "+e.toString()+" "+Hs(s));if(typeof e=="string"&&e.length>Xu/3&&xc(e)>Xu)throw new Error(t+"contains a string greater than "+Xu+" utf8 bytes "+Hs(s)+" ('"+e.substring(0,50)+"...')");if(e&&typeof e=="object"){let i=!1,r=!1;if(rn(e,(o,a)=>{if(o===".value")i=!0;else if(o!==".priority"&&o!==".sv"&&(r=!0,!Nw(o)))throw new Error(t+" contains an invalid key ("+o+") "+Hs(s)+`.  Keys must be non-empty strings and can't contain ".", "#", "$", "/", "[", or "]"`);V1(s,o),Ow(t,a,s),F1(s)}),i&&r)throw new Error(t+' contains ".value" child '+Hs(s)+" in addition to actual children.")}},iM=function(t,e){const n=e.path.toString();if(typeof e.repoInfo.host!="string"||e.repoInfo.host.length===0||!Nw(e.repoInfo.namespace)&&e.repoInfo.host.split(":")[0]!=="localhost"||n.length!==0&&!sM(n))throw new Error(yD(t,"url")+`must be a valid firebase URL and the path can't contain ".", "#", "$", "[", or "]".`)};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class rM{constructor(){this.eventLists_=[],this.recursionDepth_=0}}function oM(t,e){let n=null;for(let s=0;s<e.length;s++){const i=e[s],r=i.getPath();n!==null&&!ZT(r,n.path)&&(t.eventLists_.push(n),n=null),n===null&&(n={events:[],path:r}),n.events.push(i)}n&&t.eventLists_.push(n)}function Ai(t,e,n){oM(t,n),aM(t,s=>dn(s,e)||dn(e,s))}function aM(t,e){t.recursionDepth_++;let n=!0;for(let s=0;s<t.eventLists_.length;s++){const i=t.eventLists_[s];if(i){const r=i.path;e(r)?(lM(t.eventLists_[s]),t.eventLists_[s]=null):n=!1}}n&&(t.eventLists_=[]),t.recursionDepth_--}function lM(t){for(let e=0;e<t.events.length;e++){const n=t.events[e];if(n!==null){t.events[e]=null;const s=n.getEventRunner();ni&&_t("event: "+n.toString()),_a(s)}}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const cM="repo_interrupt",uM=25;class hM{constructor(e,n,s,i){this.repoInfo_=e,this.forceRestClient_=n,this.authTokenProvider_=s,this.appCheckProvider_=i,this.dataUpdateCount=0,this.statsListener_=null,this.eventQueue_=new rM,this.nextWriteId_=1,this.interceptServerDataCallback_=null,this.onDisconnect_=Hl(),this.transactionQueueTree_=new Gd,this.persistentConnection_=null,this.key=this.repoInfo_.toURLString()}toString(){return(this.repoInfo_.secure?"https://":"http://")+this.repoInfo_.host}}function fM(t,e,n){if(t.stats_=Ld(t.repoInfo_),t.forceRestClient_||o1())t.server_=new Bl(t.repoInfo_,(s,i,r,o)=>{Cg(t,s,i,r,o)},t.authTokenProvider_,t.appCheckProvider_),setTimeout(()=>Rg(t,!0),0);else{if(typeof n<"u"&&n!==null){if(typeof n!="object")throw new Error("Only objects are supported for option databaseAuthVariableOverride");try{ot(n)}catch(s){throw new Error("Invalid authOverride provided: "+s)}}t.persistentConnection_=new ts(t.repoInfo_,e,(s,i,r,o)=>{Cg(t,s,i,r,o)},s=>{Rg(t,s)},s=>{pM(t,s)},t.authTokenProvider_,t.appCheckProvider_,n),t.server_=t.persistentConnection_}t.authTokenProvider_.addTokenChangeListener(s=>{t.server_.refreshAuthToken(s)}),t.appCheckProvider_.addTokenChangeListener(s=>{t.server_.refreshAppCheckToken(s.token)}),t.statsReporter_=f1(t.repoInfo_,()=>new hL(t.stats_,t.server_)),t.infoData_=new oL,t.infoSyncTree_=new Ig({startListening:(s,i,r,o)=>{let a=[];const l=t.infoData_.getNode(s._path);return l.isEmpty()||(a=Mc(t.infoSyncTree_,s._path,l),setTimeout(()=>{o("ok")},0)),a},stopListening:()=>{}}),Qd(t,"connected",!1),t.serverSyncTree_=new Ig({startListening:(s,i,r,o)=>(t.server_.listen(s,r,i,(a,l)=>{const c=o(a,l);Ai(t.eventQueue_,s._path,c)}),[]),stopListening:(s,i)=>{t.server_.unlisten(s,i)}})}function dM(t){const n=t.infoData_.getNode(new xe(".info/serverTimeOffset")).val()||0;return new Date().getTime()+n}function Dw(t){return KL({timestamp:dM(t)})}function Cg(t,e,n,s,i){t.dataUpdateCount++;const r=new xe(e);n=t.interceptServerDataCallback_?t.interceptServerDataCallback_(e,n):n;let o=[];if(i)if(s){const l=Dl(n,c=>mt(c));o=qL(t.serverSyncTree_,r,l,i)}else{const l=mt(n);o=WL(t.serverSyncTree_,r,l,i)}else if(s){const l=Dl(n,c=>mt(c));o=jL(t.serverSyncTree_,r,l)}else{const l=mt(n);o=Mc(t.serverSyncTree_,r,l)}let a=r;o.length>0&&(a=Jd(t,r)),Ai(t.eventQueue_,a,o)}function Rg(t,e){Qd(t,"connected",e),e===!1&&mM(t)}function pM(t,e){rn(e,(n,s)=>{Qd(t,n,s)})}function Qd(t,e,n){const s=new xe("/.info/"+e),i=mt(n);t.infoData_.updateSnapshot(s,i);const r=Mc(t.infoSyncTree_,s,i);Ai(t.eventQueue_,s,r)}function _M(t){return t.nextWriteId_++}function mM(t){kw(t,"onDisconnectEvents");const e=Dw(t),n=Hl();ef(t.onDisconnect_,Ce(),(i,r)=>{const o=YL(i,r,t.serverSyncTree_,e);ow(n,i,o)});let s=[];ef(n,Ce(),(i,r)=>{s=s.concat(Mc(t.serverSyncTree_,i,r));const o=vM(t,i);Jd(t,o)}),t.onDisconnect_=Hl(),Ai(t.eventQueue_,Ce(),s)}function gM(t){t.persistentConnection_&&t.persistentConnection_.interrupt(cM)}function kw(t,...e){let n="";t.persistentConnection_&&(n=t.persistentConnection_.id+":"),_t(n,...e)}function xw(t,e,n){return Tw(t.serverSyncTree_,e,n)||Te.EMPTY_NODE}function Xd(t,e=t.transactionQueueTree_){if(e||Uc(t,e),Fr(e)){const n=Mw(t,e);L(n.length>0,"Sending zero length transaction queue"),n.every(i=>i.status===0)&&yM(t,ga(e),n)}else Sw(e)&&Fc(e,n=>{Xd(t,n)})}function yM(t,e,n){const s=n.map(c=>c.currentWriteId),i=xw(t,e,s);let r=i;const o=i.hash();for(let c=0;c<n.length;c++){const u=n[c];L(u.status===0,"tryToSendTransactionQueue_: items in queue should all be run."),u.status=1,u.retryCount++;const h=Zt(e,u.path);r=r.updateChild(h,u.currentOutputSnapshotRaw)}const a=r.val(!0),l=e;t.server_.put(l.toString(),a,c=>{kw(t,"transaction put response",{path:l.toString(),status:c});let u=[];if(c==="ok"){const h=[];for(let f=0;f<n.length;f++)n[f].status=2,u=u.concat(ji(t.serverSyncTree_,n[f].currentWriteId)),n[f].onComplete&&h.push(()=>n[f].onComplete(null,!0,n[f].currentOutputSnapshotResolved)),n[f].unwatcher();Uc(t,Yd(t.transactionQueueTree_,e)),Xd(t,t.transactionQueueTree_),Ai(t.eventQueue_,e,u);for(let f=0;f<h.length;f++)_a(h[f])}else{if(c==="datastale")for(let h=0;h<n.length;h++)n[h].status===3?n[h].status=4:n[h].status=0;else{qt("transaction at "+l.toString()+" failed: "+c);for(let h=0;h<n.length;h++)n[h].status=4,n[h].abortReason=c}Jd(t,e)}},o)}function Jd(t,e){const n=Lw(t,e),s=ga(n),i=Mw(t,n);return EM(t,i,s),s}function EM(t,e,n){if(e.length===0)return;const s=[];let i=[];const o=e.filter(a=>a.status===0).map(a=>a.currentWriteId);for(let a=0;a<e.length;a++){const l=e[a],c=Zt(n,l.path);let u=!1,h;if(L(c!==null,"rerunTransactionsUnderNode_: relativePath should not be null."),l.status===4)u=!0,h=l.abortReason,i=i.concat(ji(t.serverSyncTree_,l.currentWriteId,!0));else if(l.status===0)if(l.retryCount>=uM)u=!0,h="maxretry",i=i.concat(ji(t.serverSyncTree_,l.currentWriteId,!0));else{const f=xw(t,l.path,o);l.currentInputSnapshot=f;const d=e[a].update(f.val());if(d!==void 0){Ow("transaction failed: Data returned ",d,l.path);let m=mt(d);typeof d=="object"&&d!=null&&hs(d,".priority")||(m=m.updatePriority(f.getPriority()));const y=l.currentWriteId,T=Dw(t),I=QL(m,f,T);l.currentOutputSnapshotRaw=m,l.currentOutputSnapshotResolved=I,l.currentWriteId=_M(t),o.splice(o.indexOf(y),1),i=i.concat(HL(t.serverSyncTree_,l.path,I,l.currentWriteId,l.applyLocally)),i=i.concat(ji(t.serverSyncTree_,y,!0))}else u=!0,h="nodata",i=i.concat(ji(t.serverSyncTree_,l.currentWriteId,!0))}Ai(t.eventQueue_,n,i),i=[],u&&(e[a].status=2,function(f){setTimeout(f,Math.floor(0))}(e[a].unwatcher),e[a].onComplete&&(h==="nodata"?s.push(()=>e[a].onComplete(null,!1,e[a].currentInputSnapshot)):s.push(()=>e[a].onComplete(new Error(h),!1,null))))}Uc(t,t.transactionQueueTree_);for(let a=0;a<s.length;a++)_a(s[a]);Xd(t,t.transactionQueueTree_)}function Lw(t,e){let n,s=t.transactionQueueTree_;for(n=de(e);n!==null&&Fr(s)===void 0;)s=Yd(s,n),e=Oe(e),n=de(e);return s}function Mw(t,e){const n=[];return Vw(t,e,n),n.sort((s,i)=>s.order-i.order),n}function Vw(t,e,n){const s=Fr(e);if(s)for(let i=0;i<s.length;i++)n.push(s[i]);Fc(e,i=>{Vw(t,i,n)})}function Uc(t,e){const n=Fr(e);if(n){let s=0;for(let i=0;i<n.length;i++)n[i].status!==2&&(n[s]=n[i],s++);n.length=s,Rw(e,n.length>0?n:void 0)}Fc(e,s=>{Uc(t,s)})}function vM(t,e){const n=ga(Lw(t,e)),s=Yd(t.transactionQueueTree_,e);return JL(s,i=>{Ju(t,i)}),Ju(t,s),Pw(s,i=>{Ju(t,i)}),n}function Ju(t,e){const n=Fr(e);if(n){const s=[];let i=[],r=-1;for(let o=0;o<n.length;o++)n[o].status===3||(n[o].status===1?(L(r===o-1,"All SENT items should be at beginning of queue."),r=o,n[o].status=3,n[o].abortReason="set"):(L(n[o].status===0,"Unexpected transaction status in abort"),n[o].unwatcher(),i=i.concat(ji(t.serverSyncTree_,n[o].currentWriteId,!0)),n[o].onComplete&&s.push(n[o].onComplete.bind(null,new Error("set"),!1,null))));r===-1?Rw(e,void 0):n.length=r+1,Ai(t.eventQueue_,ga(e),i);for(let o=0;o<s.length;o++)_a(s[o])}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function TM(t){let e="";const n=t.split("/");for(let s=0;s<n.length;s++)if(n[s].length>0){let i=n[s];try{i=decodeURIComponent(i.replace(/\+/g," "))}catch{}e+="/"+i}return e}function wM(t){const e={};t.charAt(0)==="?"&&(t=t.substring(1));for(const n of t.split("&")){if(n.length===0)continue;const s=n.split("=");s.length===2?e[decodeURIComponent(s[0])]=decodeURIComponent(s[1]):qt(`Invalid query segment '${n}' in query '${t}'`)}return e}const Sg=function(t,e){const n=AM(t),s=n.namespace;n.domain==="firebase.com"&&hi(n.host+" is no longer supported. Please use <YOUR FIREBASE>.firebaseio.com instead"),(!s||s==="undefined")&&n.domain!=="localhost"&&hi("Cannot parse Firebase url. Please use https://<YOUR FIREBASE>.firebaseio.com"),n.secure||Jx();const i=n.scheme==="ws"||n.scheme==="wss";return{repoInfo:new c1(n.host,n.secure,s,i,e,"",s!==n.subdomain),path:new xe(n.pathString)}},AM=function(t){let e="",n="",s="",i="",r="",o=!0,a="https",l=443;if(typeof t=="string"){let c=t.indexOf("//");c>=0&&(a=t.substring(0,c-1),t=t.substring(c+2));let u=t.indexOf("/");u===-1&&(u=t.length);let h=t.indexOf("?");h===-1&&(h=t.length),e=t.substring(0,Math.min(u,h)),u<h&&(i=TM(t.substring(u,h)));const f=wM(t.substring(Math.min(t.length,h)));c=e.indexOf(":"),c>=0?(o=a==="https"||a==="wss",l=parseInt(e.substring(c+1),10)):c=e.length;const d=e.slice(0,c);if(d.toLowerCase()==="localhost")n="localhost";else if(d.split(".").length<=2)n=d;else{const m=e.indexOf(".");s=e.substring(0,m).toLowerCase(),n=e.substring(m+1),r=s}"ns"in f&&(r=f.ns)}return{host:e,port:l,domain:n,subdomain:s,secure:o,scheme:a,pathString:i,namespace:r}};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Zd{constructor(e,n,s,i){this._repo=e,this._path=n,this._queryParams=s,this._orderByCalled=i}get key(){return ue(this._path)?null:QT(this._path)}get ref(){return new Ur(this._repo,this._path)}get _queryIdentifier(){const e=dg(this._queryParams),n=kd(e);return n==="{}"?"default":n}get _queryObject(){return dg(this._queryParams)}isEqual(e){if(e=St(e),!(e instanceof Zd))return!1;const n=this._repo===e._repo,s=ZT(this._path,e._path),i=this._queryIdentifier===e._queryIdentifier;return n&&s&&i}toJSON(){return this.toString()}toString(){return this._repo.toString()+L1(this._path)}}class Ur extends Zd{constructor(e,n){super(e,n,new Ud,!1)}get parent(){const e=JT(this._path);return e===null?null:new Ur(this._repo,e)}get root(){let e=this;for(;e.parent!==null;)e=e.parent;return e}}$L(Ur);BL(Ur);/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const IM="FIREBASE_DATABASE_EMULATOR_HOST",cf={};let bM=!1;function CM(t,e,n,s,i){let r=s||t.options.databaseURL;r===void 0&&(t.options.projectId||hi("Can't determine Firebase Database URL. Be sure to include  a Project ID when calling firebase.initializeApp()."),_t("Using default host for project ",t.options.projectId),r=`${t.options.projectId}-default-rtdb.firebaseio.com`);let o=Sg(r,i),a=o.repoInfo,l,c;typeof process<"u"&&process.env&&(c=process.env[IM]),c?(l=!0,r=`http://${c}?ns=${a.namespace}`,o=Sg(r,i),a=o.repoInfo):l=!o.repoInfo.secure;const u=i&&l?new Xh(Xh.OWNER):new l1(t.name,t.options,e);iM("Invalid Firebase Database URL",o),ue(o.path)||hi("Database URL must point to the root of a Firebase Database (not including a child path).");const h=SM(a,t,u,new a1(t.name,n));return new PM(h,t)}function RM(t,e){const n=cf[e];(!n||n[t.key]!==t)&&hi(`Database ${e}(${t.repoInfo_}) has already been deleted.`),gM(t),delete n[t.key]}function SM(t,e,n,s){let i=cf[e.name];i||(i={},cf[e.name]=i);let r=i[t.toURLString()];return r&&hi("Database initialized multiple times. Please make sure the format of the database URL matches with each database() call."),r=new hM(t,bM,n,s),i[t.toURLString()]=r,r}class PM{constructor(e,n){this._repoInternal=e,this.app=n,this.type="database",this._instanceStarted=!1}get _repo(){return this._instanceStarted||(fM(this._repoInternal,this.app.options.appId,this.app.options.databaseAuthVariableOverride),this._instanceStarted=!0),this._repoInternal}get _root(){return this._rootInternal||(this._rootInternal=new Ur(this._repo,Ce())),this._rootInternal}_delete(){return this._rootInternal!==null&&(RM(this._repo,this.app.name),this._repoInternal=null,this._rootInternal=null),Promise.resolve()}_checkNotDeleted(e){this._rootInternal===null&&hi("Cannot call "+e+" on a deleted database.")}}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function NM(t){zx(Mr),Hn(new yn("database",(e,{instanceIdentifier:n})=>{const s=e.getProvider("app").getImmediate(),i=e.getProvider("auth-internal"),r=e.getProvider("app-check-internal");return CM(s,i,r,n)},"PUBLIC").setMultipleInstances(!0)),Wt(Ym,Qm,t),Wt(Ym,Qm,"esm2017")}ts.prototype.simpleListen=function(t,e){this.sendRequest("q",{p:t},e)};ts.prototype.echo=function(t,e){this.sendRequest("echo",{d:t},e)};NM();var OM=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},M,ep=ep||{},Z=OM||self;function $c(t){var e=typeof t;return e=e!="object"?e:t?Array.isArray(t)?"array":e:"null",e=="array"||e=="object"&&typeof t.length=="number"}function ya(t){var e=typeof t;return e=="object"&&t!=null||e=="function"}function DM(t){return Object.prototype.hasOwnProperty.call(t,Zu)&&t[Zu]||(t[Zu]=++kM)}var Zu="closure_uid_"+(1e9*Math.random()>>>0),kM=0;function xM(t,e,n){return t.call.apply(t.bind,arguments)}function LM(t,e,n){if(!t)throw Error();if(2<arguments.length){var s=Array.prototype.slice.call(arguments,2);return function(){var i=Array.prototype.slice.call(arguments);return Array.prototype.unshift.apply(i,s),t.apply(e,i)}}return function(){return t.apply(e,arguments)}}function vt(t,e,n){return Function.prototype.bind&&Function.prototype.bind.toString().indexOf("native code")!=-1?vt=xM:vt=LM,vt.apply(null,arguments)}function Xa(t,e){var n=Array.prototype.slice.call(arguments,1);return function(){var s=n.slice();return s.push.apply(s,arguments),t.apply(this,s)}}function nt(t,e){function n(){}n.prototype=e.prototype,t.$=e.prototype,t.prototype=new n,t.prototype.constructor=t,t.ac=function(s,i,r){for(var o=Array(arguments.length-2),a=2;a<arguments.length;a++)o[a-2]=arguments[a];return e.prototype[i].apply(s,o)}}function Vs(){this.s=this.s,this.o=this.o}var MM=0;Vs.prototype.s=!1;Vs.prototype.sa=function(){!this.s&&(this.s=!0,this.N(),MM!=0)&&DM(this)};Vs.prototype.N=function(){if(this.o)for(;this.o.length;)this.o.shift()()};const Fw=Array.prototype.indexOf?function(t,e){return Array.prototype.indexOf.call(t,e,void 0)}:function(t,e){if(typeof t=="string")return typeof e!="string"||e.length!=1?-1:t.indexOf(e,0);for(let n=0;n<t.length;n++)if(n in t&&t[n]===e)return n;return-1};function tp(t){const e=t.length;if(0<e){const n=Array(e);for(let s=0;s<e;s++)n[s]=t[s];return n}return[]}function Pg(t,e){for(let n=1;n<arguments.length;n++){const s=arguments[n];if($c(s)){const i=t.length||0,r=s.length||0;t.length=i+r;for(let o=0;o<r;o++)t[i+o]=s[o]}else t.push(s)}}function Tt(t,e){this.type=t,this.g=this.target=e,this.defaultPrevented=!1}Tt.prototype.h=function(){this.defaultPrevented=!0};var VM=function(){if(!Z.addEventListener||!Object.defineProperty)return!1;var t=!1,e=Object.defineProperty({},"passive",{get:function(){t=!0}});try{Z.addEventListener("test",()=>{},e),Z.removeEventListener("test",()=>{},e)}catch{}return t}();function qo(t){return/^[\s\xa0]*$/.test(t)}function Bc(){var t=Z.navigator;return t&&(t=t.userAgent)?t:""}function Rn(t){return Bc().indexOf(t)!=-1}function np(t){return np[" "](t),t}np[" "]=function(){};function FM(t,e){var n=NV;return Object.prototype.hasOwnProperty.call(n,t)?n[t]:n[t]=e(t)}var UM=Rn("Opera"),mr=Rn("Trident")||Rn("MSIE"),Uw=Rn("Edge"),uf=Uw||mr,$w=Rn("Gecko")&&!(Bc().toLowerCase().indexOf("webkit")!=-1&&!Rn("Edge"))&&!(Rn("Trident")||Rn("MSIE"))&&!Rn("Edge"),$M=Bc().toLowerCase().indexOf("webkit")!=-1&&!Rn("Edge");function Bw(){var t=Z.document;return t?t.documentMode:void 0}var hf;e:{var eh="",th=function(){var t=Bc();if($w)return/rv:([^\);]+)(\)|;)/.exec(t);if(Uw)return/Edge\/([\d\.]+)/.exec(t);if(mr)return/\b(?:MSIE|rv)[: ]([^\);]+)(\)|;)/.exec(t);if($M)return/WebKit\/(\S+)/.exec(t);if(UM)return/(?:Version)[ \/]?(\S+)/.exec(t)}();if(th&&(eh=th?th[1]:""),mr){var nh=Bw();if(nh!=null&&nh>parseFloat(eh)){hf=String(nh);break e}}hf=eh}var ff;if(Z.document&&mr){var Ng=Bw();ff=Ng||parseInt(hf,10)||void 0}else ff=void 0;var BM=ff;function Ko(t,e){if(Tt.call(this,t?t.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,t){var n=this.type=t.type,s=t.changedTouches&&t.changedTouches.length?t.changedTouches[0]:null;if(this.target=t.target||t.srcElement,this.g=e,e=t.relatedTarget){if($w){e:{try{np(e.nodeName);var i=!0;break e}catch{}i=!1}i||(e=null)}}else n=="mouseover"?e=t.fromElement:n=="mouseout"&&(e=t.toElement);this.relatedTarget=e,s?(this.clientX=s.clientX!==void 0?s.clientX:s.pageX,this.clientY=s.clientY!==void 0?s.clientY:s.pageY,this.screenX=s.screenX||0,this.screenY=s.screenY||0):(this.clientX=t.clientX!==void 0?t.clientX:t.pageX,this.clientY=t.clientY!==void 0?t.clientY:t.pageY,this.screenX=t.screenX||0,this.screenY=t.screenY||0),this.button=t.button,this.key=t.key||"",this.ctrlKey=t.ctrlKey,this.altKey=t.altKey,this.shiftKey=t.shiftKey,this.metaKey=t.metaKey,this.pointerId=t.pointerId||0,this.pointerType=typeof t.pointerType=="string"?t.pointerType:HM[t.pointerType]||"",this.state=t.state,this.i=t,t.defaultPrevented&&Ko.$.h.call(this)}}nt(Ko,Tt);var HM={2:"touch",3:"pen",4:"mouse"};Ko.prototype.h=function(){Ko.$.h.call(this);var t=this.i;t.preventDefault?t.preventDefault():t.returnValue=!1};var Ea="closure_listenable_"+(1e6*Math.random()|0),jM=0;function WM(t,e,n,s,i){this.listener=t,this.proxy=null,this.src=e,this.type=n,this.capture=!!s,this.la=i,this.key=++jM,this.fa=this.ia=!1}function Hc(t){t.fa=!0,t.listener=null,t.proxy=null,t.src=null,t.la=null}function sp(t,e,n){for(const s in t)e.call(n,t[s],s,t)}function qM(t,e){for(const n in t)e.call(void 0,t[n],n,t)}function Hw(t){const e={};for(const n in t)e[n]=t[n];return e}const Og="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function jw(t,e){let n,s;for(let i=1;i<arguments.length;i++){s=arguments[i];for(n in s)t[n]=s[n];for(let r=0;r<Og.length;r++)n=Og[r],Object.prototype.hasOwnProperty.call(s,n)&&(t[n]=s[n])}}function jc(t){this.src=t,this.g={},this.h=0}jc.prototype.add=function(t,e,n,s,i){var r=t.toString();t=this.g[r],t||(t=this.g[r]=[],this.h++);var o=pf(t,e,s,i);return-1<o?(e=t[o],n||(e.ia=!1)):(e=new WM(e,this.src,r,!!s,i),e.ia=n,t.push(e)),e};function df(t,e){var n=e.type;if(n in t.g){var s=t.g[n],i=Fw(s,e),r;(r=0<=i)&&Array.prototype.splice.call(s,i,1),r&&(Hc(e),t.g[n].length==0&&(delete t.g[n],t.h--))}}function pf(t,e,n,s){for(var i=0;i<t.length;++i){var r=t[i];if(!r.fa&&r.listener==e&&r.capture==!!n&&r.la==s)return i}return-1}var ip="closure_lm_"+(1e6*Math.random()|0),sh={};function Ww(t,e,n,s,i){if(s&&s.once)return Kw(t,e,n,s,i);if(Array.isArray(e)){for(var r=0;r<e.length;r++)Ww(t,e[r],n,s,i);return null}return n=ap(n),t&&t[Ea]?t.O(e,n,ya(s)?!!s.capture:!!s,i):qw(t,e,n,!1,s,i)}function qw(t,e,n,s,i,r){if(!e)throw Error("Invalid event type");var o=ya(i)?!!i.capture:!!i,a=op(t);if(a||(t[ip]=a=new jc(t)),n=a.add(e,n,s,o,r),n.proxy)return n;if(s=KM(),n.proxy=s,s.src=t,s.listener=n,t.addEventListener)VM||(i=o),i===void 0&&(i=!1),t.addEventListener(e.toString(),s,i);else if(t.attachEvent)t.attachEvent(Gw(e.toString()),s);else if(t.addListener&&t.removeListener)t.addListener(s);else throw Error("addEventListener and attachEvent are unavailable.");return n}function KM(){function t(n){return e.call(t.src,t.listener,n)}const e=zM;return t}function Kw(t,e,n,s,i){if(Array.isArray(e)){for(var r=0;r<e.length;r++)Kw(t,e[r],n,s,i);return null}return n=ap(n),t&&t[Ea]?t.P(e,n,ya(s)?!!s.capture:!!s,i):qw(t,e,n,!0,s,i)}function zw(t,e,n,s,i){if(Array.isArray(e))for(var r=0;r<e.length;r++)zw(t,e[r],n,s,i);else s=ya(s)?!!s.capture:!!s,n=ap(n),t&&t[Ea]?(t=t.i,e=String(e).toString(),e in t.g&&(r=t.g[e],n=pf(r,n,s,i),-1<n&&(Hc(r[n]),Array.prototype.splice.call(r,n,1),r.length==0&&(delete t.g[e],t.h--)))):t&&(t=op(t))&&(e=t.g[e.toString()],t=-1,e&&(t=pf(e,n,s,i)),(n=-1<t?e[t]:null)&&rp(n))}function rp(t){if(typeof t!="number"&&t&&!t.fa){var e=t.src;if(e&&e[Ea])df(e.i,t);else{var n=t.type,s=t.proxy;e.removeEventListener?e.removeEventListener(n,s,t.capture):e.detachEvent?e.detachEvent(Gw(n),s):e.addListener&&e.removeListener&&e.removeListener(s),(n=op(e))?(df(n,t),n.h==0&&(n.src=null,e[ip]=null)):Hc(t)}}}function Gw(t){return t in sh?sh[t]:sh[t]="on"+t}function zM(t,e){if(t.fa)t=!0;else{e=new Ko(e,this);var n=t.listener,s=t.la||t.src;t.ia&&rp(t),t=n.call(s,e)}return t}function op(t){return t=t[ip],t instanceof jc?t:null}var ih="__closure_events_fn_"+(1e9*Math.random()>>>0);function ap(t){return typeof t=="function"?t:(t[ih]||(t[ih]=function(e){return t.handleEvent(e)}),t[ih])}function tt(){Vs.call(this),this.i=new jc(this),this.S=this,this.J=null}nt(tt,Vs);tt.prototype[Ea]=!0;tt.prototype.removeEventListener=function(t,e,n,s){zw(this,t,e,n,s)};function ut(t,e){var n,s=t.J;if(s)for(n=[];s;s=s.J)n.push(s);if(t=t.S,s=e.type||e,typeof e=="string")e=new Tt(e,t);else if(e instanceof Tt)e.target=e.target||t;else{var i=e;e=new Tt(s,t),jw(e,i)}if(i=!0,n)for(var r=n.length-1;0<=r;r--){var o=e.g=n[r];i=Ja(o,s,!0,e)&&i}if(o=e.g=t,i=Ja(o,s,!0,e)&&i,i=Ja(o,s,!1,e)&&i,n)for(r=0;r<n.length;r++)o=e.g=n[r],i=Ja(o,s,!1,e)&&i}tt.prototype.N=function(){if(tt.$.N.call(this),this.i){var t=this.i,e;for(e in t.g){for(var n=t.g[e],s=0;s<n.length;s++)Hc(n[s]);delete t.g[e],t.h--}}this.J=null};tt.prototype.O=function(t,e,n,s){return this.i.add(String(t),e,!1,n,s)};tt.prototype.P=function(t,e,n,s){return this.i.add(String(t),e,!0,n,s)};function Ja(t,e,n,s){if(e=t.i.g[String(e)],!e)return!0;e=e.concat();for(var i=!0,r=0;r<e.length;++r){var o=e[r];if(o&&!o.fa&&o.capture==n){var a=o.listener,l=o.la||o.src;o.ia&&df(t.i,o),i=a.call(l,s)!==!1&&i}}return i&&!s.defaultPrevented}var lp=Z.JSON.stringify;class GM{constructor(e,n){this.i=e,this.j=n,this.h=0,this.g=null}get(){let e;return 0<this.h?(this.h--,e=this.g,this.g=e.next,e.next=null):e=this.i(),e}}function YM(){var t=cp;let e=null;return t.g&&(e=t.g,t.g=t.g.next,t.g||(t.h=null),e.next=null),e}class QM{constructor(){this.h=this.g=null}add(e,n){const s=Yw.get();s.set(e,n),this.h?this.h.next=s:this.g=s,this.h=s}}var Yw=new GM(()=>new XM,t=>t.reset());class XM{constructor(){this.next=this.g=this.h=null}set(e,n){this.h=e,this.g=n,this.next=null}reset(){this.next=this.g=this.h=null}}function JM(t){var e=1;t=t.split(":");const n=[];for(;0<e&&t.length;)n.push(t.shift()),e--;return t.length&&n.push(t.join(":")),n}function ZM(t){Z.setTimeout(()=>{throw t},0)}let zo,Go=!1,cp=new QM,Qw=()=>{const t=Z.Promise.resolve(void 0);zo=()=>{t.then(eV)}};var eV=()=>{for(var t;t=YM();){try{t.h.call(t.g)}catch(n){ZM(n)}var e=Yw;e.j(t),100>e.h&&(e.h++,t.next=e.g,e.g=t)}Go=!1};function Wc(t,e){tt.call(this),this.h=t||1,this.g=e||Z,this.j=vt(this.qb,this),this.l=Date.now()}nt(Wc,tt);M=Wc.prototype;M.ga=!1;M.T=null;M.qb=function(){if(this.ga){var t=Date.now()-this.l;0<t&&t<.8*this.h?this.T=this.g.setTimeout(this.j,this.h-t):(this.T&&(this.g.clearTimeout(this.T),this.T=null),ut(this,"tick"),this.ga&&(up(this),this.start()))}};M.start=function(){this.ga=!0,this.T||(this.T=this.g.setTimeout(this.j,this.h),this.l=Date.now())};function up(t){t.ga=!1,t.T&&(t.g.clearTimeout(t.T),t.T=null)}M.N=function(){Wc.$.N.call(this),up(this),delete this.g};function hp(t,e,n){if(typeof t=="function")n&&(t=vt(t,n));else if(t&&typeof t.handleEvent=="function")t=vt(t.handleEvent,t);else throw Error("Invalid listener argument");return 2147483647<Number(e)?-1:Z.setTimeout(t,e||0)}function Xw(t){t.g=hp(()=>{t.g=null,t.i&&(t.i=!1,Xw(t))},t.j);const e=t.h;t.h=null,t.m.apply(null,e)}class tV extends Vs{constructor(e,n){super(),this.m=e,this.j=n,this.h=null,this.i=!1,this.g=null}l(e){this.h=arguments,this.g?this.i=!0:Xw(this)}N(){super.N(),this.g&&(Z.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function Yo(t){Vs.call(this),this.h=t,this.g={}}nt(Yo,Vs);var Dg=[];function Jw(t,e,n,s){Array.isArray(n)||(n&&(Dg[0]=n.toString()),n=Dg);for(var i=0;i<n.length;i++){var r=Ww(e,n[i],s||t.handleEvent,!1,t.h||t);if(!r)break;t.g[r.key]=r}}function Zw(t){sp(t.g,function(e,n){this.g.hasOwnProperty(n)&&rp(e)},t),t.g={}}Yo.prototype.N=function(){Yo.$.N.call(this),Zw(this)};Yo.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")};function qc(){this.g=!0}qc.prototype.Ea=function(){this.g=!1};function nV(t,e,n,s,i,r){t.info(function(){if(t.g)if(r)for(var o="",a=r.split("&"),l=0;l<a.length;l++){var c=a[l].split("=");if(1<c.length){var u=c[0];c=c[1];var h=u.split("_");o=2<=h.length&&h[1]=="type"?o+(u+"="+c+"&"):o+(u+"=redacted&")}}else o=null;else o=r;return"XMLHTTP REQ ("+s+") [attempt "+i+"]: "+e+`
`+n+`
`+o})}function sV(t,e,n,s,i,r,o){t.info(function(){return"XMLHTTP RESP ("+s+") [ attempt "+i+"]: "+e+`
`+n+`
`+r+" "+o})}function Wi(t,e,n,s){t.info(function(){return"XMLHTTP TEXT ("+e+"): "+rV(t,n)+(s?" "+s:"")})}function iV(t,e){t.info(function(){return"TIMEOUT: "+e})}qc.prototype.info=function(){};function rV(t,e){if(!t.g)return e;if(!e)return null;try{var n=JSON.parse(e);if(n){for(t=0;t<n.length;t++)if(Array.isArray(n[t])){var s=n[t];if(!(2>s.length)){var i=s[1];if(Array.isArray(i)&&!(1>i.length)){var r=i[0];if(r!="noop"&&r!="stop"&&r!="close")for(var o=1;o<i.length;o++)i[o]=""}}}}return lp(n)}catch{return e}}var Ii={},kg=null;function Kc(){return kg=kg||new tt}Ii.Ta="serverreachability";function eA(t){Tt.call(this,Ii.Ta,t)}nt(eA,Tt);function Qo(t){const e=Kc();ut(e,new eA(e))}Ii.STAT_EVENT="statevent";function tA(t,e){Tt.call(this,Ii.STAT_EVENT,t),this.stat=e}nt(tA,Tt);function bt(t){const e=Kc();ut(e,new tA(e,t))}Ii.Ua="timingevent";function nA(t,e){Tt.call(this,Ii.Ua,t),this.size=e}nt(nA,Tt);function va(t,e){if(typeof t!="function")throw Error("Fn must not be null and must be a function");return Z.setTimeout(function(){t()},e)}var zc={NO_ERROR:0,rb:1,Eb:2,Db:3,yb:4,Cb:5,Fb:6,Qa:7,TIMEOUT:8,Ib:9},sA={wb:"complete",Sb:"success",Ra:"error",Qa:"abort",Kb:"ready",Lb:"readystatechange",TIMEOUT:"timeout",Gb:"incrementaldata",Jb:"progress",zb:"downloadprogress",$b:"uploadprogress"};function fp(){}fp.prototype.h=null;function xg(t){return t.h||(t.h=t.i())}function iA(){}var Ta={OPEN:"a",vb:"b",Ra:"c",Hb:"d"};function dp(){Tt.call(this,"d")}nt(dp,Tt);function pp(){Tt.call(this,"c")}nt(pp,Tt);var _f;function Gc(){}nt(Gc,fp);Gc.prototype.g=function(){return new XMLHttpRequest};Gc.prototype.i=function(){return{}};_f=new Gc;function wa(t,e,n,s){this.l=t,this.j=e,this.m=n,this.W=s||1,this.U=new Yo(this),this.P=oV,t=uf?125:void 0,this.V=new Wc(t),this.I=null,this.i=!1,this.s=this.A=this.v=this.L=this.G=this.Y=this.B=null,this.F=[],this.g=null,this.C=0,this.o=this.u=null,this.ca=-1,this.J=!1,this.O=0,this.M=null,this.ba=this.K=this.aa=this.S=!1,this.h=new rA}function rA(){this.i=null,this.g="",this.h=!1}var oV=45e3,mf={},Kl={};M=wa.prototype;M.setTimeout=function(t){this.P=t};function gf(t,e,n){t.L=1,t.v=Qc(rs(e)),t.s=n,t.S=!0,oA(t,null)}function oA(t,e){t.G=Date.now(),Aa(t),t.A=rs(t.v);var n=t.A,s=t.W;Array.isArray(s)||(s=[String(s)]),pA(n.i,"t",s),t.C=0,n=t.l.J,t.h=new rA,t.g=LA(t.l,n?e:null,!t.s),0<t.O&&(t.M=new tV(vt(t.Pa,t,t.g),t.O)),Jw(t.U,t.g,"readystatechange",t.nb),e=t.I?Hw(t.I):{},t.s?(t.u||(t.u="POST"),e["Content-Type"]="application/x-www-form-urlencoded",t.g.ha(t.A,t.u,t.s,e)):(t.u="GET",t.g.ha(t.A,t.u,null,e)),Qo(),nV(t.j,t.u,t.A,t.m,t.W,t.s)}M.nb=function(t){t=t.target;const e=this.M;e&&On(t)==3?e.l():this.Pa(t)};M.Pa=function(t){try{if(t==this.g)e:{const u=On(this.g);var e=this.g.Ia();const h=this.g.da();if(!(3>u)&&(u!=3||uf||this.g&&(this.h.h||this.g.ja()||Fg(this.g)))){this.J||u!=4||e==7||(e==8||0>=h?Qo(3):Qo(2)),Yc(this);var n=this.g.da();this.ca=n;t:if(aA(this)){var s=Fg(this.g);t="";var i=s.length,r=On(this.g)==4;if(!this.h.i){if(typeof TextDecoder>"u"){Qs(this),bo(this);var o="";break t}this.h.i=new Z.TextDecoder}for(e=0;e<i;e++)this.h.h=!0,t+=this.h.i.decode(s[e],{stream:r&&e==i-1});s.splice(0,i),this.h.g+=t,this.C=0,o=this.h.g}else o=this.g.ja();if(this.i=n==200,sV(this.j,this.u,this.A,this.m,this.W,u,n),this.i){if(this.aa&&!this.K){t:{if(this.g){var a,l=this.g;if((a=l.g?l.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!qo(a)){var c=a;break t}}c=null}if(n=c)Wi(this.j,this.m,n,"Initial handshake response via X-HTTP-Initial-Response"),this.K=!0,yf(this,n);else{this.i=!1,this.o=3,bt(12),Qs(this),bo(this);break e}}this.S?(lA(this,u,o),uf&&this.i&&u==3&&(Jw(this.U,this.V,"tick",this.mb),this.V.start())):(Wi(this.j,this.m,o,null),yf(this,o)),u==4&&Qs(this),this.i&&!this.J&&(u==4?OA(this.l,this):(this.i=!1,Aa(this)))}else RV(this.g),n==400&&0<o.indexOf("Unknown SID")?(this.o=3,bt(12)):(this.o=0,bt(13)),Qs(this),bo(this)}}}catch{}finally{}};function aA(t){return t.g?t.u=="GET"&&t.L!=2&&t.l.Ha:!1}function lA(t,e,n){let s=!0,i;for(;!t.J&&t.C<n.length;)if(i=aV(t,n),i==Kl){e==4&&(t.o=4,bt(14),s=!1),Wi(t.j,t.m,null,"[Incomplete Response]");break}else if(i==mf){t.o=4,bt(15),Wi(t.j,t.m,n,"[Invalid Chunk]"),s=!1;break}else Wi(t.j,t.m,i,null),yf(t,i);aA(t)&&i!=Kl&&i!=mf&&(t.h.g="",t.C=0),e!=4||n.length!=0||t.h.h||(t.o=1,bt(16),s=!1),t.i=t.i&&s,s?0<n.length&&!t.ba&&(t.ba=!0,e=t.l,e.g==t&&e.ca&&!e.M&&(e.l.info("Great, no buffering proxy detected. Bytes received: "+n.length),vp(e),e.M=!0,bt(11))):(Wi(t.j,t.m,n,"[Invalid Chunked Response]"),Qs(t),bo(t))}M.mb=function(){if(this.g){var t=On(this.g),e=this.g.ja();this.C<e.length&&(Yc(this),lA(this,t,e),this.i&&t!=4&&Aa(this))}};function aV(t,e){var n=t.C,s=e.indexOf(`
`,n);return s==-1?Kl:(n=Number(e.substring(n,s)),isNaN(n)?mf:(s+=1,s+n>e.length?Kl:(e=e.slice(s,s+n),t.C=s+n,e)))}M.cancel=function(){this.J=!0,Qs(this)};function Aa(t){t.Y=Date.now()+t.P,cA(t,t.P)}function cA(t,e){if(t.B!=null)throw Error("WatchDog timer not null");t.B=va(vt(t.lb,t),e)}function Yc(t){t.B&&(Z.clearTimeout(t.B),t.B=null)}M.lb=function(){this.B=null;const t=Date.now();0<=t-this.Y?(iV(this.j,this.A),this.L!=2&&(Qo(),bt(17)),Qs(this),this.o=2,bo(this)):cA(this,this.Y-t)};function bo(t){t.l.H==0||t.J||OA(t.l,t)}function Qs(t){Yc(t);var e=t.M;e&&typeof e.sa=="function"&&e.sa(),t.M=null,up(t.V),Zw(t.U),t.g&&(e=t.g,t.g=null,e.abort(),e.sa())}function yf(t,e){try{var n=t.l;if(n.H!=0&&(n.g==t||Ef(n.i,t))){if(!t.K&&Ef(n.i,t)&&n.H==3){try{var s=n.Ja.g.parse(e)}catch{s=null}if(Array.isArray(s)&&s.length==3){var i=s;if(i[0]==0){e:if(!n.u){if(n.g)if(n.g.G+3e3<t.G)Yl(n),Zc(n);else break e;Ep(n),bt(18)}}else n.Fa=i[1],0<n.Fa-n.V&&37500>i[2]&&n.G&&n.A==0&&!n.v&&(n.v=va(vt(n.ib,n),6e3));if(1>=gA(n.i)&&n.oa){try{n.oa()}catch{}n.oa=void 0}}else Xs(n,11)}else if((t.K||n.g==t)&&Yl(n),!qo(e))for(i=n.Ja.g.parse(e),e=0;e<i.length;e++){let c=i[e];if(n.V=c[0],c=c[1],n.H==2)if(c[0]=="c"){n.K=c[1],n.pa=c[2];const u=c[3];u!=null&&(n.ra=u,n.l.info("VER="+n.ra));const h=c[4];h!=null&&(n.Ga=h,n.l.info("SVER="+n.Ga));const f=c[5];f!=null&&typeof f=="number"&&0<f&&(s=1.5*f,n.L=s,n.l.info("backChannelRequestTimeoutMs_="+s)),s=n;const d=t.g;if(d){const m=d.g?d.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(m){var r=s.i;r.g||m.indexOf("spdy")==-1&&m.indexOf("quic")==-1&&m.indexOf("h2")==-1||(r.j=r.l,r.g=new Set,r.h&&(_p(r,r.h),r.h=null))}if(s.F){const g=d.g?d.g.getResponseHeader("X-HTTP-Session-Id"):null;g&&(s.Da=g,De(s.I,s.F,g))}}n.H=3,n.h&&n.h.Ba(),n.ca&&(n.S=Date.now()-t.G,n.l.info("Handshake RTT: "+n.S+"ms")),s=n;var o=t;if(s.wa=xA(s,s.J?s.pa:null,s.Y),o.K){yA(s.i,o);var a=o,l=s.L;l&&a.setTimeout(l),a.B&&(Yc(a),Aa(a)),s.g=o}else PA(s);0<n.j.length&&eu(n)}else c[0]!="stop"&&c[0]!="close"||Xs(n,7);else n.H==3&&(c[0]=="stop"||c[0]=="close"?c[0]=="stop"?Xs(n,7):yp(n):c[0]!="noop"&&n.h&&n.h.Aa(c),n.A=0)}}Qo(4)}catch{}}function lV(t){if(t.Z&&typeof t.Z=="function")return t.Z();if(typeof Map<"u"&&t instanceof Map||typeof Set<"u"&&t instanceof Set)return Array.from(t.values());if(typeof t=="string")return t.split("");if($c(t)){for(var e=[],n=t.length,s=0;s<n;s++)e.push(t[s]);return e}e=[],n=0;for(s in t)e[n++]=t[s];return e}function cV(t){if(t.ta&&typeof t.ta=="function")return t.ta();if(!t.Z||typeof t.Z!="function"){if(typeof Map<"u"&&t instanceof Map)return Array.from(t.keys());if(!(typeof Set<"u"&&t instanceof Set)){if($c(t)||typeof t=="string"){var e=[];t=t.length;for(var n=0;n<t;n++)e.push(n);return e}e=[],n=0;for(const s in t)e[n++]=s;return e}}}function uA(t,e){if(t.forEach&&typeof t.forEach=="function")t.forEach(e,void 0);else if($c(t)||typeof t=="string")Array.prototype.forEach.call(t,e,void 0);else for(var n=cV(t),s=lV(t),i=s.length,r=0;r<i;r++)e.call(void 0,s[r],n&&n[r],t)}var hA=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function uV(t,e){if(t){t=t.split("&");for(var n=0;n<t.length;n++){var s=t[n].indexOf("="),i=null;if(0<=s){var r=t[n].substring(0,s);i=t[n].substring(s+1)}else r=t[n];e(r,i?decodeURIComponent(i.replace(/\+/g," ")):"")}}}function si(t){if(this.g=this.s=this.j="",this.m=null,this.o=this.l="",this.h=!1,t instanceof si){this.h=t.h,zl(this,t.j),this.s=t.s,this.g=t.g,Gl(this,t.m),this.l=t.l;var e=t.i,n=new Xo;n.i=e.i,e.g&&(n.g=new Map(e.g),n.h=e.h),Lg(this,n),this.o=t.o}else t&&(e=String(t).match(hA))?(this.h=!1,zl(this,e[1]||"",!0),this.s=co(e[2]||""),this.g=co(e[3]||"",!0),Gl(this,e[4]),this.l=co(e[5]||"",!0),Lg(this,e[6]||"",!0),this.o=co(e[7]||"")):(this.h=!1,this.i=new Xo(null,this.h))}si.prototype.toString=function(){var t=[],e=this.j;e&&t.push(uo(e,Mg,!0),":");var n=this.g;return(n||e=="file")&&(t.push("//"),(e=this.s)&&t.push(uo(e,Mg,!0),"@"),t.push(encodeURIComponent(String(n)).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),n=this.m,n!=null&&t.push(":",String(n))),(n=this.l)&&(this.g&&n.charAt(0)!="/"&&t.push("/"),t.push(uo(n,n.charAt(0)=="/"?dV:fV,!0))),(n=this.i.toString())&&t.push("?",n),(n=this.o)&&t.push("#",uo(n,_V)),t.join("")};function rs(t){return new si(t)}function zl(t,e,n){t.j=n?co(e,!0):e,t.j&&(t.j=t.j.replace(/:$/,""))}function Gl(t,e){if(e){if(e=Number(e),isNaN(e)||0>e)throw Error("Bad port number "+e);t.m=e}else t.m=null}function Lg(t,e,n){e instanceof Xo?(t.i=e,mV(t.i,t.h)):(n||(e=uo(e,pV)),t.i=new Xo(e,t.h))}function De(t,e,n){t.i.set(e,n)}function Qc(t){return De(t,"zx",Math.floor(2147483648*Math.random()).toString(36)+Math.abs(Math.floor(2147483648*Math.random())^Date.now()).toString(36)),t}function co(t,e){return t?e?decodeURI(t.replace(/%25/g,"%2525")):decodeURIComponent(t):""}function uo(t,e,n){return typeof t=="string"?(t=encodeURI(t).replace(e,hV),n&&(t=t.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),t):null}function hV(t){return t=t.charCodeAt(0),"%"+(t>>4&15).toString(16)+(t&15).toString(16)}var Mg=/[#\/\?@]/g,fV=/[#\?:]/g,dV=/[#\?]/g,pV=/[#\?@]/g,_V=/#/g;function Xo(t,e){this.h=this.g=null,this.i=t||null,this.j=!!e}function Fs(t){t.g||(t.g=new Map,t.h=0,t.i&&uV(t.i,function(e,n){t.add(decodeURIComponent(e.replace(/\+/g," ")),n)}))}M=Xo.prototype;M.add=function(t,e){Fs(this),this.i=null,t=$r(this,t);var n=this.g.get(t);return n||this.g.set(t,n=[]),n.push(e),this.h+=1,this};function fA(t,e){Fs(t),e=$r(t,e),t.g.has(e)&&(t.i=null,t.h-=t.g.get(e).length,t.g.delete(e))}function dA(t,e){return Fs(t),e=$r(t,e),t.g.has(e)}M.forEach=function(t,e){Fs(this),this.g.forEach(function(n,s){n.forEach(function(i){t.call(e,i,s,this)},this)},this)};M.ta=function(){Fs(this);const t=Array.from(this.g.values()),e=Array.from(this.g.keys()),n=[];for(let s=0;s<e.length;s++){const i=t[s];for(let r=0;r<i.length;r++)n.push(e[s])}return n};M.Z=function(t){Fs(this);let e=[];if(typeof t=="string")dA(this,t)&&(e=e.concat(this.g.get($r(this,t))));else{t=Array.from(this.g.values());for(let n=0;n<t.length;n++)e=e.concat(t[n])}return e};M.set=function(t,e){return Fs(this),this.i=null,t=$r(this,t),dA(this,t)&&(this.h-=this.g.get(t).length),this.g.set(t,[e]),this.h+=1,this};M.get=function(t,e){return t?(t=this.Z(t),0<t.length?String(t[0]):e):e};function pA(t,e,n){fA(t,e),0<n.length&&(t.i=null,t.g.set($r(t,e),tp(n)),t.h+=n.length)}M.toString=function(){if(this.i)return this.i;if(!this.g)return"";const t=[],e=Array.from(this.g.keys());for(var n=0;n<e.length;n++){var s=e[n];const r=encodeURIComponent(String(s)),o=this.Z(s);for(s=0;s<o.length;s++){var i=r;o[s]!==""&&(i+="="+encodeURIComponent(String(o[s]))),t.push(i)}}return this.i=t.join("&")};function $r(t,e){return e=String(e),t.j&&(e=e.toLowerCase()),e}function mV(t,e){e&&!t.j&&(Fs(t),t.i=null,t.g.forEach(function(n,s){var i=s.toLowerCase();s!=i&&(fA(this,s),pA(this,i,n))},t)),t.j=e}var gV=class{constructor(t,e){this.g=t,this.map=e}};function _A(t){this.l=t||yV,Z.PerformanceNavigationTiming?(t=Z.performance.getEntriesByType("navigation"),t=0<t.length&&(t[0].nextHopProtocol=="hq"||t[0].nextHopProtocol=="h2")):t=!!(Z.g&&Z.g.Ka&&Z.g.Ka()&&Z.g.Ka().dc),this.j=t?this.l:1,this.g=null,1<this.j&&(this.g=new Set),this.h=null,this.i=[]}var yV=10;function mA(t){return t.h?!0:t.g?t.g.size>=t.j:!1}function gA(t){return t.h?1:t.g?t.g.size:0}function Ef(t,e){return t.h?t.h==e:t.g?t.g.has(e):!1}function _p(t,e){t.g?t.g.add(e):t.h=e}function yA(t,e){t.h&&t.h==e?t.h=null:t.g&&t.g.has(e)&&t.g.delete(e)}_A.prototype.cancel=function(){if(this.i=EA(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&this.g.size!==0){for(const t of this.g.values())t.cancel();this.g.clear()}};function EA(t){if(t.h!=null)return t.i.concat(t.h.F);if(t.g!=null&&t.g.size!==0){let e=t.i;for(const n of t.g.values())e=e.concat(n.F);return e}return tp(t.i)}var EV=class{stringify(t){return Z.JSON.stringify(t,void 0)}parse(t){return Z.JSON.parse(t,void 0)}};function vV(){this.g=new EV}function TV(t,e,n){const s=n||"";try{uA(t,function(i,r){let o=i;ya(i)&&(o=lp(i)),e.push(s+r+"="+encodeURIComponent(o))})}catch(i){throw e.push(s+"type="+encodeURIComponent("_badmap")),i}}function wV(t,e){const n=new qc;if(Z.Image){const s=new Image;s.onload=Xa(Za,n,s,"TestLoadImage: loaded",!0,e),s.onerror=Xa(Za,n,s,"TestLoadImage: error",!1,e),s.onabort=Xa(Za,n,s,"TestLoadImage: abort",!1,e),s.ontimeout=Xa(Za,n,s,"TestLoadImage: timeout",!1,e),Z.setTimeout(function(){s.ontimeout&&s.ontimeout()},1e4),s.src=t}else e(!1)}function Za(t,e,n,s,i){try{e.onload=null,e.onerror=null,e.onabort=null,e.ontimeout=null,i(s)}catch{}}function Ia(t){this.l=t.ec||null,this.j=t.ob||!1}nt(Ia,fp);Ia.prototype.g=function(){return new Xc(this.l,this.j)};Ia.prototype.i=function(t){return function(){return t}}({});function Xc(t,e){tt.call(this),this.F=t,this.u=e,this.m=void 0,this.readyState=mp,this.status=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.v=new Headers,this.h=null,this.C="GET",this.B="",this.g=!1,this.A=this.j=this.l=null}nt(Xc,tt);var mp=0;M=Xc.prototype;M.open=function(t,e){if(this.readyState!=mp)throw this.abort(),Error("Error reopening a connection");this.C=t,this.B=e,this.readyState=1,Jo(this)};M.send=function(t){if(this.readyState!=1)throw this.abort(),Error("need to call open() first. ");this.g=!0;const e={headers:this.v,method:this.C,credentials:this.m,cache:void 0};t&&(e.body=t),(this.F||Z).fetch(new Request(this.B,e)).then(this.$a.bind(this),this.ka.bind(this))};M.abort=function(){this.response=this.responseText="",this.v=new Headers,this.status=0,this.j&&this.j.cancel("Request was aborted.").catch(()=>{}),1<=this.readyState&&this.g&&this.readyState!=4&&(this.g=!1,ba(this)),this.readyState=mp};M.$a=function(t){if(this.g&&(this.l=t,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=t.headers,this.readyState=2,Jo(this)),this.g&&(this.readyState=3,Jo(this),this.g)))if(this.responseType==="arraybuffer")t.arrayBuffer().then(this.Ya.bind(this),this.ka.bind(this));else if(typeof Z.ReadableStream<"u"&&"body"in t){if(this.j=t.body.getReader(),this.u){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.A=new TextDecoder;vA(this)}else t.text().then(this.Za.bind(this),this.ka.bind(this))};function vA(t){t.j.read().then(t.Xa.bind(t)).catch(t.ka.bind(t))}M.Xa=function(t){if(this.g){if(this.u&&t.value)this.response.push(t.value);else if(!this.u){var e=t.value?t.value:new Uint8Array(0);(e=this.A.decode(e,{stream:!t.done}))&&(this.response=this.responseText+=e)}t.done?ba(this):Jo(this),this.readyState==3&&vA(this)}};M.Za=function(t){this.g&&(this.response=this.responseText=t,ba(this))};M.Ya=function(t){this.g&&(this.response=t,ba(this))};M.ka=function(){this.g&&ba(this)};function ba(t){t.readyState=4,t.l=null,t.j=null,t.A=null,Jo(t)}M.setRequestHeader=function(t,e){this.v.append(t,e)};M.getResponseHeader=function(t){return this.h&&this.h.get(t.toLowerCase())||""};M.getAllResponseHeaders=function(){if(!this.h)return"";const t=[],e=this.h.entries();for(var n=e.next();!n.done;)n=n.value,t.push(n[0]+": "+n[1]),n=e.next();return t.join(`\r
`)};function Jo(t){t.onreadystatechange&&t.onreadystatechange.call(t)}Object.defineProperty(Xc.prototype,"withCredentials",{get:function(){return this.m==="include"},set:function(t){this.m=t?"include":"same-origin"}});var AV=Z.JSON.parse;function Ue(t){tt.call(this),this.headers=new Map,this.u=t||null,this.h=!1,this.C=this.g=null,this.I="",this.m=0,this.j="",this.l=this.G=this.v=this.F=!1,this.B=0,this.A=null,this.K=TA,this.L=this.M=!1}nt(Ue,tt);var TA="",IV=/^https?$/i,bV=["POST","PUT"];M=Ue.prototype;M.Oa=function(t){this.M=t};M.ha=function(t,e,n,s){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.I+"; newUri="+t);e=e?e.toUpperCase():"GET",this.I=t,this.j="",this.m=0,this.F=!1,this.h=!0,this.g=this.u?this.u.g():_f.g(),this.C=this.u?xg(this.u):xg(_f),this.g.onreadystatechange=vt(this.La,this);try{this.G=!0,this.g.open(e,String(t),!0),this.G=!1}catch(r){Vg(this,r);return}if(t=n||"",n=new Map(this.headers),s)if(Object.getPrototypeOf(s)===Object.prototype)for(var i in s)n.set(i,s[i]);else if(typeof s.keys=="function"&&typeof s.get=="function")for(const r of s.keys())n.set(r,s.get(r));else throw Error("Unknown input type for opt_headers: "+String(s));s=Array.from(n.keys()).find(r=>r.toLowerCase()=="content-type"),i=Z.FormData&&t instanceof Z.FormData,!(0<=Fw(bV,e))||s||i||n.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8");for(const[r,o]of n)this.g.setRequestHeader(r,o);this.K&&(this.g.responseType=this.K),"withCredentials"in this.g&&this.g.withCredentials!==this.M&&(this.g.withCredentials=this.M);try{IA(this),0<this.B&&((this.L=CV(this.g))?(this.g.timeout=this.B,this.g.ontimeout=vt(this.ua,this)):this.A=hp(this.ua,this.B,this)),this.v=!0,this.g.send(t),this.v=!1}catch(r){Vg(this,r)}};function CV(t){return mr&&typeof t.timeout=="number"&&t.ontimeout!==void 0}M.ua=function(){typeof ep<"u"&&this.g&&(this.j="Timed out after "+this.B+"ms, aborting",this.m=8,ut(this,"timeout"),this.abort(8))};function Vg(t,e){t.h=!1,t.g&&(t.l=!0,t.g.abort(),t.l=!1),t.j=e,t.m=5,wA(t),Jc(t)}function wA(t){t.F||(t.F=!0,ut(t,"complete"),ut(t,"error"))}M.abort=function(t){this.g&&this.h&&(this.h=!1,this.l=!0,this.g.abort(),this.l=!1,this.m=t||7,ut(this,"complete"),ut(this,"abort"),Jc(this))};M.N=function(){this.g&&(this.h&&(this.h=!1,this.l=!0,this.g.abort(),this.l=!1),Jc(this,!0)),Ue.$.N.call(this)};M.La=function(){this.s||(this.G||this.v||this.l?AA(this):this.kb())};M.kb=function(){AA(this)};function AA(t){if(t.h&&typeof ep<"u"&&(!t.C[1]||On(t)!=4||t.da()!=2)){if(t.v&&On(t)==4)hp(t.La,0,t);else if(ut(t,"readystatechange"),On(t)==4){t.h=!1;try{const o=t.da();e:switch(o){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var e=!0;break e;default:e=!1}var n;if(!(n=e)){var s;if(s=o===0){var i=String(t.I).match(hA)[1]||null;!i&&Z.self&&Z.self.location&&(i=Z.self.location.protocol.slice(0,-1)),s=!IV.test(i?i.toLowerCase():"")}n=s}if(n)ut(t,"complete"),ut(t,"success");else{t.m=6;try{var r=2<On(t)?t.g.statusText:""}catch{r=""}t.j=r+" ["+t.da()+"]",wA(t)}}finally{Jc(t)}}}}function Jc(t,e){if(t.g){IA(t);const n=t.g,s=t.C[0]?()=>{}:null;t.g=null,t.C=null,e||ut(t,"ready");try{n.onreadystatechange=s}catch{}}}function IA(t){t.g&&t.L&&(t.g.ontimeout=null),t.A&&(Z.clearTimeout(t.A),t.A=null)}M.isActive=function(){return!!this.g};function On(t){return t.g?t.g.readyState:0}M.da=function(){try{return 2<On(this)?this.g.status:-1}catch{return-1}};M.ja=function(){try{return this.g?this.g.responseText:""}catch{return""}};M.Wa=function(t){if(this.g){var e=this.g.responseText;return t&&e.indexOf(t)==0&&(e=e.substring(t.length)),AV(e)}};function Fg(t){try{if(!t.g)return null;if("response"in t.g)return t.g.response;switch(t.K){case TA:case"text":return t.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in t.g)return t.g.mozResponseArrayBuffer}return null}catch{return null}}function RV(t){const e={};t=(t.g&&2<=On(t)&&t.g.getAllResponseHeaders()||"").split(`\r
`);for(let s=0;s<t.length;s++){if(qo(t[s]))continue;var n=JM(t[s]);const i=n[0];if(n=n[1],typeof n!="string")continue;n=n.trim();const r=e[i]||[];e[i]=r,r.push(n)}qM(e,function(s){return s.join(", ")})}M.Ia=function(){return this.m};M.Sa=function(){return typeof this.j=="string"?this.j:String(this.j)};function bA(t){let e="";return sp(t,function(n,s){e+=s,e+=":",e+=n,e+=`\r
`}),e}function gp(t,e,n){e:{for(s in n){var s=!1;break e}s=!0}s||(n=bA(n),typeof t=="string"?n!=null&&encodeURIComponent(String(n)):De(t,e,n))}function eo(t,e,n){return n&&n.internalChannelParams&&n.internalChannelParams[t]||e}function CA(t){this.Ga=0,this.j=[],this.l=new qc,this.pa=this.wa=this.I=this.Y=this.g=this.Da=this.F=this.na=this.o=this.U=this.s=null,this.fb=this.W=0,this.cb=eo("failFast",!1,t),this.G=this.v=this.u=this.m=this.h=null,this.aa=!0,this.Fa=this.V=-1,this.ba=this.A=this.C=0,this.ab=eo("baseRetryDelayMs",5e3,t),this.hb=eo("retryDelaySeedMs",1e4,t),this.eb=eo("forwardChannelMaxRetries",2,t),this.xa=eo("forwardChannelRequestTimeoutMs",2e4,t),this.va=t&&t.xmlHttpFactory||void 0,this.Ha=t&&t.useFetchStreams||!1,this.L=void 0,this.J=t&&t.supportsCrossDomainXhr||!1,this.K="",this.i=new _A(t&&t.concurrentRequestLimit),this.Ja=new vV,this.P=t&&t.fastHandshake||!1,this.O=t&&t.encodeInitMessageHeaders||!1,this.P&&this.O&&(this.O=!1),this.bb=t&&t.bc||!1,t&&t.Ea&&this.l.Ea(),t&&t.forceLongPolling&&(this.aa=!1),this.ca=!this.P&&this.aa&&t&&t.detectBufferingProxy||!1,this.qa=void 0,t&&t.longPollingTimeout&&0<t.longPollingTimeout&&(this.qa=t.longPollingTimeout),this.oa=void 0,this.S=0,this.M=!1,this.ma=this.B=null}M=CA.prototype;M.ra=8;M.H=1;function yp(t){if(RA(t),t.H==3){var e=t.W++,n=rs(t.I);if(De(n,"SID",t.K),De(n,"RID",e),De(n,"TYPE","terminate"),Ca(t,n),e=new wa(t,t.l,e),e.L=2,e.v=Qc(rs(n)),n=!1,Z.navigator&&Z.navigator.sendBeacon)try{n=Z.navigator.sendBeacon(e.v.toString(),"")}catch{}!n&&Z.Image&&(new Image().src=e.v,n=!0),n||(e.g=LA(e.l,null),e.g.ha(e.v)),e.G=Date.now(),Aa(e)}kA(t)}function Zc(t){t.g&&(vp(t),t.g.cancel(),t.g=null)}function RA(t){Zc(t),t.u&&(Z.clearTimeout(t.u),t.u=null),Yl(t),t.i.cancel(),t.m&&(typeof t.m=="number"&&Z.clearTimeout(t.m),t.m=null)}function eu(t){if(!mA(t.i)&&!t.m){t.m=!0;var e=t.Na;zo||Qw(),Go||(zo(),Go=!0),cp.add(e,t),t.C=0}}function SV(t,e){return gA(t.i)>=t.i.j-(t.m?1:0)?!1:t.m?(t.j=e.F.concat(t.j),!0):t.H==1||t.H==2||t.C>=(t.cb?0:t.eb)?!1:(t.m=va(vt(t.Na,t,e),DA(t,t.C)),t.C++,!0)}M.Na=function(t){if(this.m)if(this.m=null,this.H==1){if(!t){this.W=Math.floor(1e5*Math.random()),t=this.W++;const i=new wa(this,this.l,t);let r=this.s;if(this.U&&(r?(r=Hw(r),jw(r,this.U)):r=this.U),this.o!==null||this.O||(i.I=r,r=null),this.P)e:{for(var e=0,n=0;n<this.j.length;n++){t:{var s=this.j[n];if("__data__"in s.map&&(s=s.map.__data__,typeof s=="string")){s=s.length;break t}s=void 0}if(s===void 0)break;if(e+=s,4096<e){e=n;break e}if(e===4096||n===this.j.length-1){e=n+1;break e}}e=1e3}else e=1e3;e=SA(this,i,e),n=rs(this.I),De(n,"RID",t),De(n,"CVER",22),this.F&&De(n,"X-HTTP-Session-Id",this.F),Ca(this,n),r&&(this.O?e="headers="+encodeURIComponent(String(bA(r)))+"&"+e:this.o&&gp(n,this.o,r)),_p(this.i,i),this.bb&&De(n,"TYPE","init"),this.P?(De(n,"$req",e),De(n,"SID","null"),i.aa=!0,gf(i,n,null)):gf(i,n,e),this.H=2}}else this.H==3&&(t?Ug(this,t):this.j.length==0||mA(this.i)||Ug(this))};function Ug(t,e){var n;e?n=e.m:n=t.W++;const s=rs(t.I);De(s,"SID",t.K),De(s,"RID",n),De(s,"AID",t.V),Ca(t,s),t.o&&t.s&&gp(s,t.o,t.s),n=new wa(t,t.l,n,t.C+1),t.o===null&&(n.I=t.s),e&&(t.j=e.F.concat(t.j)),e=SA(t,n,1e3),n.setTimeout(Math.round(.5*t.xa)+Math.round(.5*t.xa*Math.random())),_p(t.i,n),gf(n,s,e)}function Ca(t,e){t.na&&sp(t.na,function(n,s){De(e,s,n)}),t.h&&uA({},function(n,s){De(e,s,n)})}function SA(t,e,n){n=Math.min(t.j.length,n);var s=t.h?vt(t.h.Va,t.h,t):null;e:{var i=t.j;let r=-1;for(;;){const o=["count="+n];r==-1?0<n?(r=i[0].g,o.push("ofs="+r)):r=0:o.push("ofs="+r);let a=!0;for(let l=0;l<n;l++){let c=i[l].g;const u=i[l].map;if(c-=r,0>c)r=Math.max(0,i[l].g-100),a=!1;else try{TV(u,o,"req"+c+"_")}catch{s&&s(u)}}if(a){s=o.join("&");break e}}}return t=t.j.splice(0,n),e.F=t,s}function PA(t){if(!t.g&&!t.u){t.ba=1;var e=t.Ma;zo||Qw(),Go||(zo(),Go=!0),cp.add(e,t),t.A=0}}function Ep(t){return t.g||t.u||3<=t.A?!1:(t.ba++,t.u=va(vt(t.Ma,t),DA(t,t.A)),t.A++,!0)}M.Ma=function(){if(this.u=null,NA(this),this.ca&&!(this.M||this.g==null||0>=this.S)){var t=2*this.S;this.l.info("BP detection timer enabled: "+t),this.B=va(vt(this.jb,this),t)}};M.jb=function(){this.B&&(this.B=null,this.l.info("BP detection timeout reached."),this.l.info("Buffering proxy detected and switch to long-polling!"),this.G=!1,this.M=!0,bt(10),Zc(this),NA(this))};function vp(t){t.B!=null&&(Z.clearTimeout(t.B),t.B=null)}function NA(t){t.g=new wa(t,t.l,"rpc",t.ba),t.o===null&&(t.g.I=t.s),t.g.O=0;var e=rs(t.wa);De(e,"RID","rpc"),De(e,"SID",t.K),De(e,"AID",t.V),De(e,"CI",t.G?"0":"1"),!t.G&&t.qa&&De(e,"TO",t.qa),De(e,"TYPE","xmlhttp"),Ca(t,e),t.o&&t.s&&gp(e,t.o,t.s),t.L&&t.g.setTimeout(t.L);var n=t.g;t=t.pa,n.L=1,n.v=Qc(rs(e)),n.s=null,n.S=!0,oA(n,t)}M.ib=function(){this.v!=null&&(this.v=null,Zc(this),Ep(this),bt(19))};function Yl(t){t.v!=null&&(Z.clearTimeout(t.v),t.v=null)}function OA(t,e){var n=null;if(t.g==e){Yl(t),vp(t),t.g=null;var s=2}else if(Ef(t.i,e))n=e.F,yA(t.i,e),s=1;else return;if(t.H!=0){if(e.i)if(s==1){n=e.s?e.s.length:0,e=Date.now()-e.G;var i=t.C;s=Kc(),ut(s,new nA(s,n)),eu(t)}else PA(t);else if(i=e.o,i==3||i==0&&0<e.ca||!(s==1&&SV(t,e)||s==2&&Ep(t)))switch(n&&0<n.length&&(e=t.i,e.i=e.i.concat(n)),i){case 1:Xs(t,5);break;case 4:Xs(t,10);break;case 3:Xs(t,6);break;default:Xs(t,2)}}}function DA(t,e){let n=t.ab+Math.floor(Math.random()*t.hb);return t.isActive()||(n*=2),n*e}function Xs(t,e){if(t.l.info("Error code "+e),e==2){var n=null;t.h&&(n=null);var s=vt(t.pb,t);n||(n=new si("//www.google.com/images/cleardot.gif"),Z.location&&Z.location.protocol=="http"||zl(n,"https"),Qc(n)),wV(n.toString(),s)}else bt(2);t.H=0,t.h&&t.h.za(e),kA(t),RA(t)}M.pb=function(t){t?(this.l.info("Successfully pinged google.com"),bt(2)):(this.l.info("Failed to ping google.com"),bt(1))};function kA(t){if(t.H=0,t.ma=[],t.h){const e=EA(t.i);(e.length!=0||t.j.length!=0)&&(Pg(t.ma,e),Pg(t.ma,t.j),t.i.i.length=0,tp(t.j),t.j.length=0),t.h.ya()}}function xA(t,e,n){var s=n instanceof si?rs(n):new si(n);if(s.g!="")e&&(s.g=e+"."+s.g),Gl(s,s.m);else{var i=Z.location;s=i.protocol,e=e?e+"."+i.hostname:i.hostname,i=+i.port;var r=new si(null);s&&zl(r,s),e&&(r.g=e),i&&Gl(r,i),n&&(r.l=n),s=r}return n=t.F,e=t.Da,n&&e&&De(s,n,e),De(s,"VER",t.ra),Ca(t,s),s}function LA(t,e,n){if(e&&!t.J)throw Error("Can't create secondary domain capable XhrIo object.");return e=n&&t.Ha&&!t.va?new Ue(new Ia({ob:!0})):new Ue(t.va),e.Oa(t.J),e}M.isActive=function(){return!!this.h&&this.h.isActive(this)};function MA(){}M=MA.prototype;M.Ba=function(){};M.Aa=function(){};M.za=function(){};M.ya=function(){};M.isActive=function(){return!0};M.Va=function(){};function Ql(){if(mr&&!(10<=Number(BM)))throw Error("Environmental error: no available transport.")}Ql.prototype.g=function(t,e){return new Yt(t,e)};function Yt(t,e){tt.call(this),this.g=new CA(e),this.l=t,this.h=e&&e.messageUrlParams||null,t=e&&e.messageHeaders||null,e&&e.clientProtocolHeaderRequired&&(t?t["X-Client-Protocol"]="webchannel":t={"X-Client-Protocol":"webchannel"}),this.g.s=t,t=e&&e.initMessageHeaders||null,e&&e.messageContentType&&(t?t["X-WebChannel-Content-Type"]=e.messageContentType:t={"X-WebChannel-Content-Type":e.messageContentType}),e&&e.Ca&&(t?t["X-WebChannel-Client-Profile"]=e.Ca:t={"X-WebChannel-Client-Profile":e.Ca}),this.g.U=t,(t=e&&e.cc)&&!qo(t)&&(this.g.o=t),this.A=e&&e.supportsCrossDomainXhr||!1,this.v=e&&e.sendRawJson||!1,(e=e&&e.httpSessionIdParam)&&!qo(e)&&(this.g.F=e,t=this.h,t!==null&&e in t&&(t=this.h,e in t&&delete t[e])),this.j=new Br(this)}nt(Yt,tt);Yt.prototype.m=function(){this.g.h=this.j,this.A&&(this.g.J=!0);var t=this.g,e=this.l,n=this.h||void 0;bt(0),t.Y=e,t.na=n||{},t.G=t.aa,t.I=xA(t,null,t.Y),eu(t)};Yt.prototype.close=function(){yp(this.g)};Yt.prototype.u=function(t){var e=this.g;if(typeof t=="string"){var n={};n.__data__=t,t=n}else this.v&&(n={},n.__data__=lp(t),t=n);e.j.push(new gV(e.fb++,t)),e.H==3&&eu(e)};Yt.prototype.N=function(){this.g.h=null,delete this.j,yp(this.g),delete this.g,Yt.$.N.call(this)};function VA(t){dp.call(this),t.__headers__&&(this.headers=t.__headers__,this.statusCode=t.__status__,delete t.__headers__,delete t.__status__);var e=t.__sm__;if(e){e:{for(const n in e){t=n;break e}t=void 0}(this.i=t)&&(t=this.i,e=e!==null&&t in e?e[t]:void 0),this.data=e}else this.data=t}nt(VA,dp);function FA(){pp.call(this),this.status=1}nt(FA,pp);function Br(t){this.g=t}nt(Br,MA);Br.prototype.Ba=function(){ut(this.g,"a")};Br.prototype.Aa=function(t){ut(this.g,new VA(t))};Br.prototype.za=function(t){ut(this.g,new FA)};Br.prototype.ya=function(){ut(this.g,"b")};function PV(){this.blockSize=-1}function vn(){this.blockSize=-1,this.blockSize=64,this.g=Array(4),this.m=Array(this.blockSize),this.i=this.h=0,this.reset()}nt(vn,PV);vn.prototype.reset=function(){this.g[0]=1732584193,this.g[1]=4023233417,this.g[2]=2562383102,this.g[3]=271733878,this.i=this.h=0};function rh(t,e,n){n||(n=0);var s=Array(16);if(typeof e=="string")for(var i=0;16>i;++i)s[i]=e.charCodeAt(n++)|e.charCodeAt(n++)<<8|e.charCodeAt(n++)<<16|e.charCodeAt(n++)<<24;else for(i=0;16>i;++i)s[i]=e[n++]|e[n++]<<8|e[n++]<<16|e[n++]<<24;e=t.g[0],n=t.g[1],i=t.g[2];var r=t.g[3],o=e+(r^n&(i^r))+s[0]+3614090360&4294967295;e=n+(o<<7&4294967295|o>>>25),o=r+(i^e&(n^i))+s[1]+3905402710&4294967295,r=e+(o<<12&4294967295|o>>>20),o=i+(n^r&(e^n))+s[2]+606105819&4294967295,i=r+(o<<17&4294967295|o>>>15),o=n+(e^i&(r^e))+s[3]+3250441966&4294967295,n=i+(o<<22&4294967295|o>>>10),o=e+(r^n&(i^r))+s[4]+4118548399&4294967295,e=n+(o<<7&4294967295|o>>>25),o=r+(i^e&(n^i))+s[5]+1200080426&4294967295,r=e+(o<<12&4294967295|o>>>20),o=i+(n^r&(e^n))+s[6]+2821735955&4294967295,i=r+(o<<17&4294967295|o>>>15),o=n+(e^i&(r^e))+s[7]+4249261313&4294967295,n=i+(o<<22&4294967295|o>>>10),o=e+(r^n&(i^r))+s[8]+1770035416&4294967295,e=n+(o<<7&4294967295|o>>>25),o=r+(i^e&(n^i))+s[9]+2336552879&4294967295,r=e+(o<<12&4294967295|o>>>20),o=i+(n^r&(e^n))+s[10]+4294925233&4294967295,i=r+(o<<17&4294967295|o>>>15),o=n+(e^i&(r^e))+s[11]+2304563134&4294967295,n=i+(o<<22&4294967295|o>>>10),o=e+(r^n&(i^r))+s[12]+1804603682&4294967295,e=n+(o<<7&4294967295|o>>>25),o=r+(i^e&(n^i))+s[13]+4254626195&4294967295,r=e+(o<<12&4294967295|o>>>20),o=i+(n^r&(e^n))+s[14]+2792965006&4294967295,i=r+(o<<17&4294967295|o>>>15),o=n+(e^i&(r^e))+s[15]+1236535329&4294967295,n=i+(o<<22&4294967295|o>>>10),o=e+(i^r&(n^i))+s[1]+4129170786&4294967295,e=n+(o<<5&4294967295|o>>>27),o=r+(n^i&(e^n))+s[6]+3225465664&4294967295,r=e+(o<<9&4294967295|o>>>23),o=i+(e^n&(r^e))+s[11]+643717713&4294967295,i=r+(o<<14&4294967295|o>>>18),o=n+(r^e&(i^r))+s[0]+3921069994&4294967295,n=i+(o<<20&4294967295|o>>>12),o=e+(i^r&(n^i))+s[5]+3593408605&4294967295,e=n+(o<<5&4294967295|o>>>27),o=r+(n^i&(e^n))+s[10]+38016083&4294967295,r=e+(o<<9&4294967295|o>>>23),o=i+(e^n&(r^e))+s[15]+3634488961&4294967295,i=r+(o<<14&4294967295|o>>>18),o=n+(r^e&(i^r))+s[4]+3889429448&4294967295,n=i+(o<<20&4294967295|o>>>12),o=e+(i^r&(n^i))+s[9]+568446438&4294967295,e=n+(o<<5&4294967295|o>>>27),o=r+(n^i&(e^n))+s[14]+3275163606&4294967295,r=e+(o<<9&4294967295|o>>>23),o=i+(e^n&(r^e))+s[3]+4107603335&4294967295,i=r+(o<<14&4294967295|o>>>18),o=n+(r^e&(i^r))+s[8]+1163531501&4294967295,n=i+(o<<20&4294967295|o>>>12),o=e+(i^r&(n^i))+s[13]+2850285829&4294967295,e=n+(o<<5&4294967295|o>>>27),o=r+(n^i&(e^n))+s[2]+4243563512&4294967295,r=e+(o<<9&4294967295|o>>>23),o=i+(e^n&(r^e))+s[7]+1735328473&4294967295,i=r+(o<<14&4294967295|o>>>18),o=n+(r^e&(i^r))+s[12]+2368359562&4294967295,n=i+(o<<20&4294967295|o>>>12),o=e+(n^i^r)+s[5]+4294588738&4294967295,e=n+(o<<4&4294967295|o>>>28),o=r+(e^n^i)+s[8]+2272392833&4294967295,r=e+(o<<11&4294967295|o>>>21),o=i+(r^e^n)+s[11]+1839030562&4294967295,i=r+(o<<16&4294967295|o>>>16),o=n+(i^r^e)+s[14]+4259657740&4294967295,n=i+(o<<23&4294967295|o>>>9),o=e+(n^i^r)+s[1]+2763975236&4294967295,e=n+(o<<4&4294967295|o>>>28),o=r+(e^n^i)+s[4]+1272893353&4294967295,r=e+(o<<11&4294967295|o>>>21),o=i+(r^e^n)+s[7]+4139469664&4294967295,i=r+(o<<16&4294967295|o>>>16),o=n+(i^r^e)+s[10]+3200236656&4294967295,n=i+(o<<23&4294967295|o>>>9),o=e+(n^i^r)+s[13]+681279174&4294967295,e=n+(o<<4&4294967295|o>>>28),o=r+(e^n^i)+s[0]+3936430074&4294967295,r=e+(o<<11&4294967295|o>>>21),o=i+(r^e^n)+s[3]+3572445317&4294967295,i=r+(o<<16&4294967295|o>>>16),o=n+(i^r^e)+s[6]+76029189&4294967295,n=i+(o<<23&4294967295|o>>>9),o=e+(n^i^r)+s[9]+3654602809&4294967295,e=n+(o<<4&4294967295|o>>>28),o=r+(e^n^i)+s[12]+3873151461&4294967295,r=e+(o<<11&4294967295|o>>>21),o=i+(r^e^n)+s[15]+530742520&4294967295,i=r+(o<<16&4294967295|o>>>16),o=n+(i^r^e)+s[2]+3299628645&4294967295,n=i+(o<<23&4294967295|o>>>9),o=e+(i^(n|~r))+s[0]+4096336452&4294967295,e=n+(o<<6&4294967295|o>>>26),o=r+(n^(e|~i))+s[7]+1126891415&4294967295,r=e+(o<<10&4294967295|o>>>22),o=i+(e^(r|~n))+s[14]+2878612391&4294967295,i=r+(o<<15&4294967295|o>>>17),o=n+(r^(i|~e))+s[5]+4237533241&4294967295,n=i+(o<<21&4294967295|o>>>11),o=e+(i^(n|~r))+s[12]+1700485571&4294967295,e=n+(o<<6&4294967295|o>>>26),o=r+(n^(e|~i))+s[3]+2399980690&4294967295,r=e+(o<<10&4294967295|o>>>22),o=i+(e^(r|~n))+s[10]+4293915773&4294967295,i=r+(o<<15&4294967295|o>>>17),o=n+(r^(i|~e))+s[1]+2240044497&4294967295,n=i+(o<<21&4294967295|o>>>11),o=e+(i^(n|~r))+s[8]+1873313359&4294967295,e=n+(o<<6&4294967295|o>>>26),o=r+(n^(e|~i))+s[15]+4264355552&4294967295,r=e+(o<<10&4294967295|o>>>22),o=i+(e^(r|~n))+s[6]+2734768916&4294967295,i=r+(o<<15&4294967295|o>>>17),o=n+(r^(i|~e))+s[13]+1309151649&4294967295,n=i+(o<<21&4294967295|o>>>11),o=e+(i^(n|~r))+s[4]+4149444226&4294967295,e=n+(o<<6&4294967295|o>>>26),o=r+(n^(e|~i))+s[11]+3174756917&4294967295,r=e+(o<<10&4294967295|o>>>22),o=i+(e^(r|~n))+s[2]+718787259&4294967295,i=r+(o<<15&4294967295|o>>>17),o=n+(r^(i|~e))+s[9]+3951481745&4294967295,t.g[0]=t.g[0]+e&4294967295,t.g[1]=t.g[1]+(i+(o<<21&4294967295|o>>>11))&4294967295,t.g[2]=t.g[2]+i&4294967295,t.g[3]=t.g[3]+r&4294967295}vn.prototype.j=function(t,e){e===void 0&&(e=t.length);for(var n=e-this.blockSize,s=this.m,i=this.h,r=0;r<e;){if(i==0)for(;r<=n;)rh(this,t,r),r+=this.blockSize;if(typeof t=="string"){for(;r<e;)if(s[i++]=t.charCodeAt(r++),i==this.blockSize){rh(this,s),i=0;break}}else for(;r<e;)if(s[i++]=t[r++],i==this.blockSize){rh(this,s),i=0;break}}this.h=i,this.i+=e};vn.prototype.l=function(){var t=Array((56>this.h?this.blockSize:2*this.blockSize)-this.h);t[0]=128;for(var e=1;e<t.length-8;++e)t[e]=0;var n=8*this.i;for(e=t.length-8;e<t.length;++e)t[e]=n&255,n/=256;for(this.j(t),t=Array(16),e=n=0;4>e;++e)for(var s=0;32>s;s+=8)t[n++]=this.g[e]>>>s&255;return t};function be(t,e){this.h=e;for(var n=[],s=!0,i=t.length-1;0<=i;i--){var r=t[i]|0;s&&r==e||(n[i]=r,s=!1)}this.g=n}var NV={};function Tp(t){return-128<=t&&128>t?FM(t,function(e){return new be([e|0],0>e?-1:0)}):new be([t|0],0>t?-1:0)}function Dn(t){if(isNaN(t)||!isFinite(t))return er;if(0>t)return rt(Dn(-t));for(var e=[],n=1,s=0;t>=n;s++)e[s]=t/n|0,n*=vf;return new be(e,0)}function UA(t,e){if(t.length==0)throw Error("number format error: empty string");if(e=e||10,2>e||36<e)throw Error("radix out of range: "+e);if(t.charAt(0)=="-")return rt(UA(t.substring(1),e));if(0<=t.indexOf("-"))throw Error('number format error: interior "-" character');for(var n=Dn(Math.pow(e,8)),s=er,i=0;i<t.length;i+=8){var r=Math.min(8,t.length-i),o=parseInt(t.substring(i,i+r),e);8>r?(r=Dn(Math.pow(e,r)),s=s.R(r).add(Dn(o))):(s=s.R(n),s=s.add(Dn(o)))}return s}var vf=4294967296,er=Tp(0),Tf=Tp(1),$g=Tp(16777216);M=be.prototype;M.ea=function(){if(Xt(this))return-rt(this).ea();for(var t=0,e=1,n=0;n<this.g.length;n++){var s=this.D(n);t+=(0<=s?s:vf+s)*e,e*=vf}return t};M.toString=function(t){if(t=t||10,2>t||36<t)throw Error("radix out of range: "+t);if(Yn(this))return"0";if(Xt(this))return"-"+rt(this).toString(t);for(var e=Dn(Math.pow(t,6)),n=this,s="";;){var i=Jl(n,e).g;n=Xl(n,i.R(e));var r=((0<n.g.length?n.g[0]:n.h)>>>0).toString(t);if(n=i,Yn(n))return r+s;for(;6>r.length;)r="0"+r;s=r+s}};M.D=function(t){return 0>t?0:t<this.g.length?this.g[t]:this.h};function Yn(t){if(t.h!=0)return!1;for(var e=0;e<t.g.length;e++)if(t.g[e]!=0)return!1;return!0}function Xt(t){return t.h==-1}M.X=function(t){return t=Xl(this,t),Xt(t)?-1:Yn(t)?0:1};function rt(t){for(var e=t.g.length,n=[],s=0;s<e;s++)n[s]=~t.g[s];return new be(n,~t.h).add(Tf)}M.abs=function(){return Xt(this)?rt(this):this};M.add=function(t){for(var e=Math.max(this.g.length,t.g.length),n=[],s=0,i=0;i<=e;i++){var r=s+(this.D(i)&65535)+(t.D(i)&65535),o=(r>>>16)+(this.D(i)>>>16)+(t.D(i)>>>16);s=o>>>16,r&=65535,o&=65535,n[i]=o<<16|r}return new be(n,n[n.length-1]&-2147483648?-1:0)};function Xl(t,e){return t.add(rt(e))}M.R=function(t){if(Yn(this)||Yn(t))return er;if(Xt(this))return Xt(t)?rt(this).R(rt(t)):rt(rt(this).R(t));if(Xt(t))return rt(this.R(rt(t)));if(0>this.X($g)&&0>t.X($g))return Dn(this.ea()*t.ea());for(var e=this.g.length+t.g.length,n=[],s=0;s<2*e;s++)n[s]=0;for(s=0;s<this.g.length;s++)for(var i=0;i<t.g.length;i++){var r=this.D(s)>>>16,o=this.D(s)&65535,a=t.D(i)>>>16,l=t.D(i)&65535;n[2*s+2*i]+=o*l,el(n,2*s+2*i),n[2*s+2*i+1]+=r*l,el(n,2*s+2*i+1),n[2*s+2*i+1]+=o*a,el(n,2*s+2*i+1),n[2*s+2*i+2]+=r*a,el(n,2*s+2*i+2)}for(s=0;s<e;s++)n[s]=n[2*s+1]<<16|n[2*s];for(s=e;s<2*e;s++)n[s]=0;return new be(n,0)};function el(t,e){for(;(t[e]&65535)!=t[e];)t[e+1]+=t[e]>>>16,t[e]&=65535,e++}function to(t,e){this.g=t,this.h=e}function Jl(t,e){if(Yn(e))throw Error("division by zero");if(Yn(t))return new to(er,er);if(Xt(t))return e=Jl(rt(t),e),new to(rt(e.g),rt(e.h));if(Xt(e))return e=Jl(t,rt(e)),new to(rt(e.g),e.h);if(30<t.g.length){if(Xt(t)||Xt(e))throw Error("slowDivide_ only works with positive integers.");for(var n=Tf,s=e;0>=s.X(t);)n=Bg(n),s=Bg(s);var i=Di(n,1),r=Di(s,1);for(s=Di(s,2),n=Di(n,2);!Yn(s);){var o=r.add(s);0>=o.X(t)&&(i=i.add(n),r=o),s=Di(s,1),n=Di(n,1)}return e=Xl(t,i.R(e)),new to(i,e)}for(i=er;0<=t.X(e);){for(n=Math.max(1,Math.floor(t.ea()/e.ea())),s=Math.ceil(Math.log(n)/Math.LN2),s=48>=s?1:Math.pow(2,s-48),r=Dn(n),o=r.R(e);Xt(o)||0<o.X(t);)n-=s,r=Dn(n),o=r.R(e);Yn(r)&&(r=Tf),i=i.add(r),t=Xl(t,o)}return new to(i,t)}M.gb=function(t){return Jl(this,t).h};M.and=function(t){for(var e=Math.max(this.g.length,t.g.length),n=[],s=0;s<e;s++)n[s]=this.D(s)&t.D(s);return new be(n,this.h&t.h)};M.or=function(t){for(var e=Math.max(this.g.length,t.g.length),n=[],s=0;s<e;s++)n[s]=this.D(s)|t.D(s);return new be(n,this.h|t.h)};M.xor=function(t){for(var e=Math.max(this.g.length,t.g.length),n=[],s=0;s<e;s++)n[s]=this.D(s)^t.D(s);return new be(n,this.h^t.h)};function Bg(t){for(var e=t.g.length+1,n=[],s=0;s<e;s++)n[s]=t.D(s)<<1|t.D(s-1)>>>31;return new be(n,t.h)}function Di(t,e){var n=e>>5;e%=32;for(var s=t.g.length-n,i=[],r=0;r<s;r++)i[r]=0<e?t.D(r+n)>>>e|t.D(r+n+1)<<32-e:t.D(r+n);return new be(i,t.h)}Ql.prototype.createWebChannel=Ql.prototype.g;Yt.prototype.send=Yt.prototype.u;Yt.prototype.open=Yt.prototype.m;Yt.prototype.close=Yt.prototype.close;zc.NO_ERROR=0;zc.TIMEOUT=8;zc.HTTP_ERROR=6;sA.COMPLETE="complete";iA.EventType=Ta;Ta.OPEN="a";Ta.CLOSE="b";Ta.ERROR="c";Ta.MESSAGE="d";tt.prototype.listen=tt.prototype.O;Ue.prototype.listenOnce=Ue.prototype.P;Ue.prototype.getLastError=Ue.prototype.Sa;Ue.prototype.getLastErrorCode=Ue.prototype.Ia;Ue.prototype.getStatus=Ue.prototype.da;Ue.prototype.getResponseJson=Ue.prototype.Wa;Ue.prototype.getResponseText=Ue.prototype.ja;Ue.prototype.send=Ue.prototype.ha;Ue.prototype.setWithCredentials=Ue.prototype.Oa;vn.prototype.digest=vn.prototype.l;vn.prototype.reset=vn.prototype.reset;vn.prototype.update=vn.prototype.j;be.prototype.add=be.prototype.add;be.prototype.multiply=be.prototype.R;be.prototype.modulo=be.prototype.gb;be.prototype.compare=be.prototype.X;be.prototype.toNumber=be.prototype.ea;be.prototype.toString=be.prototype.toString;be.prototype.getBits=be.prototype.D;be.fromNumber=Dn;be.fromString=UA;var OV=function(){return new Ql},DV=function(){return Kc()},oh=zc,kV=sA,xV=Ii,Hg={xb:0,Ab:1,Bb:2,Ub:3,Zb:4,Wb:5,Xb:6,Vb:7,Tb:8,Yb:9,PROXY:10,NOPROXY:11,Rb:12,Nb:13,Ob:14,Mb:15,Pb:16,Qb:17,tb:18,sb:19,ub:20},LV=Ia,tl=iA,MV=Ue,VV=vn,tr=be;const jg="@firebase/firestore";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class pt{constructor(e){this.uid=e}isAuthenticated(){return this.uid!=null}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(e){return e.uid===this.uid}}pt.UNAUTHENTICATED=new pt(null),pt.GOOGLE_CREDENTIALS=new pt("google-credentials-uid"),pt.FIRST_PARTY=new pt("first-party-uid"),pt.MOCK_USER=new pt("mock-user");/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Hr="10.5.2";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const _i=new ha("@firebase/firestore");function no(){return _i.logLevel}function H(t,...e){if(_i.logLevel<=ae.DEBUG){const n=e.map(wp);_i.debug(`Firestore (${Hr}): ${t}`,...n)}}function os(t,...e){if(_i.logLevel<=ae.ERROR){const n=e.map(wp);_i.error(`Firestore (${Hr}): ${t}`,...n)}}function gr(t,...e){if(_i.logLevel<=ae.WARN){const n=e.map(wp);_i.warn(`Firestore (${Hr}): ${t}`,...n)}}function wp(t){if(typeof t=="string")return t;try{/**
* @license
* Copyright 2020 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/return function(n){return JSON.stringify(n)}(t)}catch{return t}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function X(t="Unexpected state"){const e=`FIRESTORE (${Hr}) INTERNAL ASSERTION FAILED: `+t;throw os(e),new Error(e)}function ke(t,e){t||X()}function se(t,e){return t}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const N={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class K extends us{constructor(e,n){super(e,n),this.code=e,this.message=n,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ns{constructor(){this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $A{constructor(e,n){this.user=n,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${e}`)}}class FV{getToken(){return Promise.resolve(null)}invalidateToken(){}start(e,n){e.enqueueRetryable(()=>n(pt.UNAUTHENTICATED))}shutdown(){}}class UV{constructor(e){this.token=e,this.changeListener=null}getToken(){return Promise.resolve(this.token)}invalidateToken(){}start(e,n){this.changeListener=n,e.enqueueRetryable(()=>n(this.token.user))}shutdown(){this.changeListener=null}}class $V{constructor(e){this.t=e,this.currentUser=pt.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(e,n){let s=this.i;const i=l=>this.i!==s?(s=this.i,n(l)):Promise.resolve();let r=new ns;this.o=()=>{this.i++,this.currentUser=this.u(),r.resolve(),r=new ns,e.enqueueRetryable(()=>i(this.currentUser))};const o=()=>{const l=r;e.enqueueRetryable(async()=>{await l.promise,await i(this.currentUser)})},a=l=>{H("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=l,this.auth.addAuthTokenListener(this.o),o()};this.t.onInit(l=>a(l)),setTimeout(()=>{if(!this.auth){const l=this.t.getImmediate({optional:!0});l?a(l):(H("FirebaseAuthCredentialsProvider","Auth not yet detected"),r.resolve(),r=new ns)}},0),o()}getToken(){const e=this.i,n=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(n).then(s=>this.i!==e?(H("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):s?(ke(typeof s.accessToken=="string"),new $A(s.accessToken,this.currentUser)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.auth.removeAuthTokenListener(this.o)}u(){const e=this.auth&&this.auth.getUid();return ke(e===null||typeof e=="string"),new pt(e)}}class BV{constructor(e,n,s){this.l=e,this.h=n,this.P=s,this.type="FirstParty",this.user=pt.FIRST_PARTY,this.I=new Map}T(){return this.P?this.P():null}get headers(){this.I.set("X-Goog-AuthUser",this.l);const e=this.T();return e&&this.I.set("Authorization",e),this.h&&this.I.set("X-Goog-Iam-Authorization-Token",this.h),this.I}}class HV{constructor(e,n,s){this.l=e,this.h=n,this.P=s}getToken(){return Promise.resolve(new BV(this.l,this.h,this.P))}start(e,n){e.enqueueRetryable(()=>n(pt.FIRST_PARTY))}shutdown(){}invalidateToken(){}}class jV{constructor(e){this.value=e,this.type="AppCheck",this.headers=new Map,e&&e.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class WV{constructor(e){this.A=e,this.forceRefresh=!1,this.appCheck=null,this.R=null}start(e,n){const s=r=>{r.error!=null&&H("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${r.error.message}`);const o=r.token!==this.R;return this.R=r.token,H("FirebaseAppCheckTokenProvider",`Received ${o?"new":"existing"} token.`),o?n(r.token):Promise.resolve()};this.o=r=>{e.enqueueRetryable(()=>s(r))};const i=r=>{H("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=r,this.appCheck.addTokenListener(this.o)};this.A.onInit(r=>i(r)),setTimeout(()=>{if(!this.appCheck){const r=this.A.getImmediate({optional:!0});r?i(r):H("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}},0)}getToken(){const e=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(e).then(n=>n?(ke(typeof n.token=="string"),this.R=n.token,new jV(n.token)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.appCheck.removeTokenListener(this.o)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function qV(t){const e=typeof self<"u"&&(self.crypto||self.msCrypto),n=new Uint8Array(t);if(e&&typeof e.getRandomValues=="function")e.getRandomValues(n);else for(let s=0;s<t;s++)n[s]=Math.floor(256*Math.random());return n}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class BA{static newId(){const e="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",n=Math.floor(256/e.length)*e.length;let s="";for(;s.length<20;){const i=qV(40);for(let r=0;r<i.length;++r)s.length<20&&i[r]<n&&(s+=e.charAt(i[r]%e.length))}return s}}function Ee(t,e){return t<e?-1:t>e?1:0}function yr(t,e,n){return t.length===e.length&&t.every((s,i)=>n(s,e[i]))}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ke{constructor(e,n){if(this.seconds=e,this.nanoseconds=n,n<0)throw new K(N.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+n);if(n>=1e9)throw new K(N.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+n);if(e<-62135596800)throw new K(N.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e);if(e>=253402300800)throw new K(N.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e)}static now(){return Ke.fromMillis(Date.now())}static fromDate(e){return Ke.fromMillis(e.getTime())}static fromMillis(e){const n=Math.floor(e/1e3),s=Math.floor(1e6*(e-1e3*n));return new Ke(n,s)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/1e6}_compareTo(e){return this.seconds===e.seconds?Ee(this.nanoseconds,e.nanoseconds):Ee(this.seconds,e.seconds)}isEqual(e){return e.seconds===this.seconds&&e.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{seconds:this.seconds,nanoseconds:this.nanoseconds}}valueOf(){const e=this.seconds- -62135596800;return String(e).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ee{constructor(e){this.timestamp=e}static fromTimestamp(e){return new ee(e)}static min(){return new ee(new Ke(0,0))}static max(){return new ee(new Ke(253402300799,999999999))}compareTo(e){return this.timestamp._compareTo(e.timestamp)}isEqual(e){return this.timestamp.isEqual(e.timestamp)}toMicroseconds(){return 1e6*this.timestamp.seconds+this.timestamp.nanoseconds/1e3}toString(){return"SnapshotVersion("+this.timestamp.toString()+")"}toTimestamp(){return this.timestamp}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Zo{constructor(e,n,s){n===void 0?n=0:n>e.length&&X(),s===void 0?s=e.length-n:s>e.length-n&&X(),this.segments=e,this.offset=n,this.len=s}get length(){return this.len}isEqual(e){return Zo.comparator(this,e)===0}child(e){const n=this.segments.slice(this.offset,this.limit());return e instanceof Zo?e.forEach(s=>{n.push(s)}):n.push(e),this.construct(n)}limit(){return this.offset+this.length}popFirst(e){return e=e===void 0?1:e,this.construct(this.segments,this.offset+e,this.length-e)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(e){return this.segments[this.offset+e]}isEmpty(){return this.length===0}isPrefixOf(e){if(e.length<this.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==e.get(n))return!1;return!0}isImmediateParentOf(e){if(this.length+1!==e.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==e.get(n))return!1;return!0}forEach(e){for(let n=this.offset,s=this.limit();n<s;n++)e(this.segments[n])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(e,n){const s=Math.min(e.length,n.length);for(let i=0;i<s;i++){const r=e.get(i),o=n.get(i);if(r<o)return-1;if(r>o)return 1}return e.length<n.length?-1:e.length>n.length?1:0}}class Le extends Zo{construct(e,n,s){return new Le(e,n,s)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}static fromString(...e){const n=[];for(const s of e){if(s.indexOf("//")>=0)throw new K(N.INVALID_ARGUMENT,`Invalid segment (${s}). Paths must not contain // in them.`);n.push(...s.split("/").filter(i=>i.length>0))}return new Le(n)}static emptyPath(){return new Le([])}}const KV=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class at extends Zo{construct(e,n,s){return new at(e,n,s)}static isValidIdentifier(e){return KV.test(e)}canonicalString(){return this.toArray().map(e=>(e=e.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),at.isValidIdentifier(e)||(e="`"+e+"`"),e)).join(".")}toString(){return this.canonicalString()}isKeyField(){return this.length===1&&this.get(0)==="__name__"}static keyField(){return new at(["__name__"])}static fromServerFormat(e){const n=[];let s="",i=0;const r=()=>{if(s.length===0)throw new K(N.INVALID_ARGUMENT,`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);n.push(s),s=""};let o=!1;for(;i<e.length;){const a=e[i];if(a==="\\"){if(i+1===e.length)throw new K(N.INVALID_ARGUMENT,"Path has trailing escape character: "+e);const l=e[i+1];if(l!=="\\"&&l!=="."&&l!=="`")throw new K(N.INVALID_ARGUMENT,"Path has invalid escape sequence: "+e);s+=l,i+=2}else a==="`"?(o=!o,i++):a!=="."||o?(s+=a,i++):(r(),i++)}if(r(),o)throw new K(N.INVALID_ARGUMENT,"Unterminated ` in path: "+e);return new at(n)}static emptyPath(){return new at([])}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class G{constructor(e){this.path=e}static fromPath(e){return new G(Le.fromString(e))}static fromName(e){return new G(Le.fromString(e).popFirst(5))}static empty(){return new G(Le.emptyPath())}get collectionGroup(){return this.path.popLast().lastSegment()}hasCollectionId(e){return this.path.length>=2&&this.path.get(this.path.length-2)===e}getCollectionGroup(){return this.path.get(this.path.length-2)}getCollectionPath(){return this.path.popLast()}isEqual(e){return e!==null&&Le.comparator(this.path,e.path)===0}toString(){return this.path.toString()}static comparator(e,n){return Le.comparator(e.path,n.path)}static isDocumentKey(e){return e.length%2==0}static fromSegments(e){return new G(new Le(e.slice()))}}function zV(t,e){const n=t.toTimestamp().seconds,s=t.toTimestamp().nanoseconds+1,i=ee.fromTimestamp(s===1e9?new Ke(n+1,0):new Ke(n,s));return new Os(i,G.empty(),e)}function GV(t){return new Os(t.readTime,t.key,-1)}class Os{constructor(e,n,s){this.readTime=e,this.documentKey=n,this.largestBatchId=s}static min(){return new Os(ee.min(),G.empty(),-1)}static max(){return new Os(ee.max(),G.empty(),-1)}}function YV(t,e){let n=t.readTime.compareTo(e.readTime);return n!==0?n:(n=G.comparator(t.documentKey,e.documentKey),n!==0?n:Ee(t.largestBatchId,e.largestBatchId))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const QV="The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab.";class XV{constructor(){this.onCommittedListeners=[]}addOnCommittedListener(e){this.onCommittedListeners.push(e)}raiseOnCommittedEvent(){this.onCommittedListeners.forEach(e=>e())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Ra(t){if(t.code!==N.FAILED_PRECONDITION||t.message!==QV)throw t;H("LocalStore","Unexpectedly lost primary lease")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class O{constructor(e){this.nextCallback=null,this.catchCallback=null,this.result=void 0,this.error=void 0,this.isDone=!1,this.callbackAttached=!1,e(n=>{this.isDone=!0,this.result=n,this.nextCallback&&this.nextCallback(n)},n=>{this.isDone=!0,this.error=n,this.catchCallback&&this.catchCallback(n)})}catch(e){return this.next(void 0,e)}next(e,n){return this.callbackAttached&&X(),this.callbackAttached=!0,this.isDone?this.error?this.wrapFailure(n,this.error):this.wrapSuccess(e,this.result):new O((s,i)=>{this.nextCallback=r=>{this.wrapSuccess(e,r).next(s,i)},this.catchCallback=r=>{this.wrapFailure(n,r).next(s,i)}})}toPromise(){return new Promise((e,n)=>{this.next(e,n)})}wrapUserFunction(e){try{const n=e();return n instanceof O?n:O.resolve(n)}catch(n){return O.reject(n)}}wrapSuccess(e,n){return e?this.wrapUserFunction(()=>e(n)):O.resolve(n)}wrapFailure(e,n){return e?this.wrapUserFunction(()=>e(n)):O.reject(n)}static resolve(e){return new O((n,s)=>{n(e)})}static reject(e){return new O((n,s)=>{s(e)})}static waitFor(e){return new O((n,s)=>{let i=0,r=0,o=!1;e.forEach(a=>{++i,a.next(()=>{++r,o&&r===i&&n()},l=>s(l))}),o=!0,r===i&&n()})}static or(e){let n=O.resolve(!1);for(const s of e)n=n.next(i=>i?O.resolve(i):s());return n}static forEach(e,n){const s=[];return e.forEach((i,r)=>{s.push(n.call(this,i,r))}),this.waitFor(s)}static mapArray(e,n){return new O((s,i)=>{const r=e.length,o=new Array(r);let a=0;for(let l=0;l<r;l++){const c=l;n(e[c]).next(u=>{o[c]=u,++a,a===r&&s(o)},u=>i(u))}})}static doWhile(e,n){return new O((s,i)=>{const r=()=>{e()===!0?n().next(()=>{r()},i):s()};r()})}}function Sa(t){return t.name==="IndexedDbTransactionError"}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ap{constructor(e,n){this.previousValue=e,n&&(n.sequenceNumberHandler=s=>this.se(s),this.oe=s=>n.writeSequenceNumber(s))}se(e){return this.previousValue=Math.max(e,this.previousValue),this.previousValue}next(){const e=++this.previousValue;return this.oe&&this.oe(e),e}}Ap._e=-1;function tu(t){return t==null}function Zl(t){return t===0&&1/t==-1/0}function JV(t){return typeof t=="number"&&Number.isInteger(t)&&!Zl(t)&&t<=Number.MAX_SAFE_INTEGER&&t>=Number.MIN_SAFE_INTEGER}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Wg(t){let e=0;for(const n in t)Object.prototype.hasOwnProperty.call(t,n)&&e++;return e}function jr(t,e){for(const n in t)Object.prototype.hasOwnProperty.call(t,n)&&e(n,t[n])}function HA(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ve{constructor(e,n){this.comparator=e,this.root=n||it.EMPTY}insert(e,n){return new Ve(this.comparator,this.root.insert(e,n,this.comparator).copy(null,null,it.BLACK,null,null))}remove(e){return new Ve(this.comparator,this.root.remove(e,this.comparator).copy(null,null,it.BLACK,null,null))}get(e){let n=this.root;for(;!n.isEmpty();){const s=this.comparator(e,n.key);if(s===0)return n.value;s<0?n=n.left:s>0&&(n=n.right)}return null}indexOf(e){let n=0,s=this.root;for(;!s.isEmpty();){const i=this.comparator(e,s.key);if(i===0)return n+s.left.size;i<0?s=s.left:(n+=s.left.size+1,s=s.right)}return-1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(e){return this.root.inorderTraversal(e)}forEach(e){this.inorderTraversal((n,s)=>(e(n,s),!1))}toString(){const e=[];return this.inorderTraversal((n,s)=>(e.push(`${n}:${s}`),!1)),`{${e.join(", ")}}`}reverseTraversal(e){return this.root.reverseTraversal(e)}getIterator(){return new nl(this.root,null,this.comparator,!1)}getIteratorFrom(e){return new nl(this.root,e,this.comparator,!1)}getReverseIterator(){return new nl(this.root,null,this.comparator,!0)}getReverseIteratorFrom(e){return new nl(this.root,e,this.comparator,!0)}}class nl{constructor(e,n,s,i){this.isReverse=i,this.nodeStack=[];let r=1;for(;!e.isEmpty();)if(r=n?s(e.key,n):1,n&&i&&(r*=-1),r<0)e=this.isReverse?e.left:e.right;else{if(r===0){this.nodeStack.push(e);break}this.nodeStack.push(e),e=this.isReverse?e.right:e.left}}getNext(){let e=this.nodeStack.pop();const n={key:e.key,value:e.value};if(this.isReverse)for(e=e.left;!e.isEmpty();)this.nodeStack.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack.push(e),e=e.left;return n}hasNext(){return this.nodeStack.length>0}peek(){if(this.nodeStack.length===0)return null;const e=this.nodeStack[this.nodeStack.length-1];return{key:e.key,value:e.value}}}class it{constructor(e,n,s,i,r){this.key=e,this.value=n,this.color=s??it.RED,this.left=i??it.EMPTY,this.right=r??it.EMPTY,this.size=this.left.size+1+this.right.size}copy(e,n,s,i,r){return new it(e??this.key,n??this.value,s??this.color,i??this.left,r??this.right)}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,n,s){let i=this;const r=s(e,i.key);return i=r<0?i.copy(null,null,null,i.left.insert(e,n,s),null):r===0?i.copy(null,n,null,null,null):i.copy(null,null,null,null,i.right.insert(e,n,s)),i.fixUp()}removeMin(){if(this.left.isEmpty())return it.EMPTY;let e=this;return e.left.isRed()||e.left.left.isRed()||(e=e.moveRedLeft()),e=e.copy(null,null,null,e.left.removeMin(),null),e.fixUp()}remove(e,n){let s,i=this;if(n(e,i.key)<0)i.left.isEmpty()||i.left.isRed()||i.left.left.isRed()||(i=i.moveRedLeft()),i=i.copy(null,null,null,i.left.remove(e,n),null);else{if(i.left.isRed()&&(i=i.rotateRight()),i.right.isEmpty()||i.right.isRed()||i.right.left.isRed()||(i=i.moveRedRight()),n(e,i.key)===0){if(i.right.isEmpty())return it.EMPTY;s=i.right.min(),i=i.copy(s.key,s.value,null,null,i.right.removeMin())}i=i.copy(null,null,null,null,i.right.remove(e,n))}return i.fixUp()}isRed(){return this.color}fixUp(){let e=this;return e.right.isRed()&&!e.left.isRed()&&(e=e.rotateLeft()),e.left.isRed()&&e.left.left.isRed()&&(e=e.rotateRight()),e.left.isRed()&&e.right.isRed()&&(e=e.colorFlip()),e}moveRedLeft(){let e=this.colorFlip();return e.right.left.isRed()&&(e=e.copy(null,null,null,null,e.right.rotateRight()),e=e.rotateLeft(),e=e.colorFlip()),e}moveRedRight(){let e=this.colorFlip();return e.left.left.isRed()&&(e=e.rotateRight(),e=e.colorFlip()),e}rotateLeft(){const e=this.copy(null,null,it.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight(){const e=this.copy(null,null,it.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip(){const e=this.left.copy(null,null,!this.left.color,null,null),n=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,n)}checkMaxDepth(){const e=this.check();return Math.pow(2,e)<=this.size+1}check(){if(this.isRed()&&this.left.isRed()||this.right.isRed())throw X();const e=this.left.check();if(e!==this.right.check())throw X();return e+(this.isRed()?0:1)}}it.EMPTY=null,it.RED=!0,it.BLACK=!1;it.EMPTY=new class{constructor(){this.size=0}get key(){throw X()}get value(){throw X()}get color(){throw X()}get left(){throw X()}get right(){throw X()}copy(e,n,s,i,r){return this}insert(e,n,s){return new it(e,n)}remove(e,n){return this}isEmpty(){return!0}inorderTraversal(e){return!1}reverseTraversal(e){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ht{constructor(e){this.comparator=e,this.data=new Ve(this.comparator)}has(e){return this.data.get(e)!==null}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(e){return this.data.indexOf(e)}forEach(e){this.data.inorderTraversal((n,s)=>(e(n),!1))}forEachInRange(e,n){const s=this.data.getIteratorFrom(e[0]);for(;s.hasNext();){const i=s.getNext();if(this.comparator(i.key,e[1])>=0)return;n(i.key)}}forEachWhile(e,n){let s;for(s=n!==void 0?this.data.getIteratorFrom(n):this.data.getIterator();s.hasNext();)if(!e(s.getNext().key))return}firstAfterOrEqual(e){const n=this.data.getIteratorFrom(e);return n.hasNext()?n.getNext().key:null}getIterator(){return new qg(this.data.getIterator())}getIteratorFrom(e){return new qg(this.data.getIteratorFrom(e))}add(e){return this.copy(this.data.remove(e).insert(e,!0))}delete(e){return this.has(e)?this.copy(this.data.remove(e)):this}isEmpty(){return this.data.isEmpty()}unionWith(e){let n=this;return n.size<e.size&&(n=e,e=this),e.forEach(s=>{n=n.add(s)}),n}isEqual(e){if(!(e instanceof ht)||this.size!==e.size)return!1;const n=this.data.getIterator(),s=e.data.getIterator();for(;n.hasNext();){const i=n.getNext().key,r=s.getNext().key;if(this.comparator(i,r)!==0)return!1}return!0}toArray(){const e=[];return this.forEach(n=>{e.push(n)}),e}toString(){const e=[];return this.forEach(n=>e.push(n)),"SortedSet("+e.toString()+")"}copy(e){const n=new ht(this.comparator);return n.data=e,n}}class qg{constructor(e){this.iter=e}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class pn{constructor(e){this.fields=e,e.sort(at.comparator)}static empty(){return new pn([])}unionWith(e){let n=new ht(at.comparator);for(const s of this.fields)n=n.add(s);for(const s of e)n=n.add(s);return new pn(n.toArray())}covers(e){for(const n of this.fields)if(n.isPrefixOf(e))return!0;return!1}isEqual(e){return yr(this.fields,e.fields,(n,s)=>n.isEqual(s))}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class jA extends Error{constructor(){super(...arguments),this.name="Base64DecodeError"}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class wt{constructor(e){this.binaryString=e}static fromBase64String(e){const n=function(i){try{return atob(i)}catch(r){throw typeof DOMException<"u"&&r instanceof DOMException?new jA("Invalid base64 string: "+r):r}}(e);return new wt(n)}static fromUint8Array(e){const n=function(i){let r="";for(let o=0;o<i.length;++o)r+=String.fromCharCode(i[o]);return r}(e);return new wt(n)}[Symbol.iterator](){let e=0;return{next:()=>e<this.binaryString.length?{value:this.binaryString.charCodeAt(e++),done:!1}:{value:void 0,done:!0}}}toBase64(){return function(n){return btoa(n)}(this.binaryString)}toUint8Array(){return function(n){const s=new Uint8Array(n.length);for(let i=0;i<n.length;i++)s[i]=n.charCodeAt(i);return s}(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(e){return Ee(this.binaryString,e.binaryString)}isEqual(e){return this.binaryString===e.binaryString}}wt.EMPTY_BYTE_STRING=new wt("");const ZV=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function Ds(t){if(ke(!!t),typeof t=="string"){let e=0;const n=ZV.exec(t);if(ke(!!n),n[1]){let i=n[1];i=(i+"000000000").substr(0,9),e=Number(i)}const s=new Date(t);return{seconds:Math.floor(s.getTime()/1e3),nanos:e}}return{seconds:qe(t.seconds),nanos:qe(t.nanos)}}function qe(t){return typeof t=="number"?t:typeof t=="string"?Number(t):0}function mi(t){return typeof t=="string"?wt.fromBase64String(t):wt.fromUint8Array(t)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ip(t){var e,n;return((n=(((e=t==null?void 0:t.mapValue)===null||e===void 0?void 0:e.fields)||{}).__type__)===null||n===void 0?void 0:n.stringValue)==="server_timestamp"}function bp(t){const e=t.mapValue.fields.__previous_value__;return Ip(e)?bp(e):e}function ea(t){const e=Ds(t.mapValue.fields.__local_write_time__.timestampValue);return new Ke(e.seconds,e.nanos)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class eF{constructor(e,n,s,i,r,o,a,l,c){this.databaseId=e,this.appId=n,this.persistenceKey=s,this.host=i,this.ssl=r,this.forceLongPolling=o,this.autoDetectLongPolling=a,this.longPollingOptions=l,this.useFetchStreams=c}}class ta{constructor(e,n){this.projectId=e,this.database=n||"(default)"}static empty(){return new ta("","")}get isDefaultDatabase(){return this.database==="(default)"}isEqual(e){return e instanceof ta&&e.projectId===this.projectId&&e.database===this.database}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const sl={mapValue:{fields:{__type__:{stringValue:"__max__"}}}};function gi(t){return"nullValue"in t?0:"booleanValue"in t?1:"integerValue"in t||"doubleValue"in t?2:"timestampValue"in t?3:"stringValue"in t?5:"bytesValue"in t?6:"referenceValue"in t?7:"geoPointValue"in t?8:"arrayValue"in t?9:"mapValue"in t?Ip(t)?4:tF(t)?9007199254740991:10:X()}function jn(t,e){if(t===e)return!0;const n=gi(t);if(n!==gi(e))return!1;switch(n){case 0:case 9007199254740991:return!0;case 1:return t.booleanValue===e.booleanValue;case 4:return ea(t).isEqual(ea(e));case 3:return function(i,r){if(typeof i.timestampValue=="string"&&typeof r.timestampValue=="string"&&i.timestampValue.length===r.timestampValue.length)return i.timestampValue===r.timestampValue;const o=Ds(i.timestampValue),a=Ds(r.timestampValue);return o.seconds===a.seconds&&o.nanos===a.nanos}(t,e);case 5:return t.stringValue===e.stringValue;case 6:return function(i,r){return mi(i.bytesValue).isEqual(mi(r.bytesValue))}(t,e);case 7:return t.referenceValue===e.referenceValue;case 8:return function(i,r){return qe(i.geoPointValue.latitude)===qe(r.geoPointValue.latitude)&&qe(i.geoPointValue.longitude)===qe(r.geoPointValue.longitude)}(t,e);case 2:return function(i,r){if("integerValue"in i&&"integerValue"in r)return qe(i.integerValue)===qe(r.integerValue);if("doubleValue"in i&&"doubleValue"in r){const o=qe(i.doubleValue),a=qe(r.doubleValue);return o===a?Zl(o)===Zl(a):isNaN(o)&&isNaN(a)}return!1}(t,e);case 9:return yr(t.arrayValue.values||[],e.arrayValue.values||[],jn);case 10:return function(i,r){const o=i.mapValue.fields||{},a=r.mapValue.fields||{};if(Wg(o)!==Wg(a))return!1;for(const l in o)if(o.hasOwnProperty(l)&&(a[l]===void 0||!jn(o[l],a[l])))return!1;return!0}(t,e);default:return X()}}function na(t,e){return(t.values||[]).find(n=>jn(n,e))!==void 0}function Er(t,e){if(t===e)return 0;const n=gi(t),s=gi(e);if(n!==s)return Ee(n,s);switch(n){case 0:case 9007199254740991:return 0;case 1:return Ee(t.booleanValue,e.booleanValue);case 2:return function(r,o){const a=qe(r.integerValue||r.doubleValue),l=qe(o.integerValue||o.doubleValue);return a<l?-1:a>l?1:a===l?0:isNaN(a)?isNaN(l)?0:-1:1}(t,e);case 3:return Kg(t.timestampValue,e.timestampValue);case 4:return Kg(ea(t),ea(e));case 5:return Ee(t.stringValue,e.stringValue);case 6:return function(r,o){const a=mi(r),l=mi(o);return a.compareTo(l)}(t.bytesValue,e.bytesValue);case 7:return function(r,o){const a=r.split("/"),l=o.split("/");for(let c=0;c<a.length&&c<l.length;c++){const u=Ee(a[c],l[c]);if(u!==0)return u}return Ee(a.length,l.length)}(t.referenceValue,e.referenceValue);case 8:return function(r,o){const a=Ee(qe(r.latitude),qe(o.latitude));return a!==0?a:Ee(qe(r.longitude),qe(o.longitude))}(t.geoPointValue,e.geoPointValue);case 9:return function(r,o){const a=r.values||[],l=o.values||[];for(let c=0;c<a.length&&c<l.length;++c){const u=Er(a[c],l[c]);if(u)return u}return Ee(a.length,l.length)}(t.arrayValue,e.arrayValue);case 10:return function(r,o){if(r===sl.mapValue&&o===sl.mapValue)return 0;if(r===sl.mapValue)return 1;if(o===sl.mapValue)return-1;const a=r.fields||{},l=Object.keys(a),c=o.fields||{},u=Object.keys(c);l.sort(),u.sort();for(let h=0;h<l.length&&h<u.length;++h){const f=Ee(l[h],u[h]);if(f!==0)return f;const d=Er(a[l[h]],c[u[h]]);if(d!==0)return d}return Ee(l.length,u.length)}(t.mapValue,e.mapValue);default:throw X()}}function Kg(t,e){if(typeof t=="string"&&typeof e=="string"&&t.length===e.length)return Ee(t,e);const n=Ds(t),s=Ds(e),i=Ee(n.seconds,s.seconds);return i!==0?i:Ee(n.nanos,s.nanos)}function vr(t){return wf(t)}function wf(t){return"nullValue"in t?"null":"booleanValue"in t?""+t.booleanValue:"integerValue"in t?""+t.integerValue:"doubleValue"in t?""+t.doubleValue:"timestampValue"in t?function(n){const s=Ds(n);return`time(${s.seconds},${s.nanos})`}(t.timestampValue):"stringValue"in t?t.stringValue:"bytesValue"in t?function(n){return mi(n).toBase64()}(t.bytesValue):"referenceValue"in t?function(n){return G.fromName(n).toString()}(t.referenceValue):"geoPointValue"in t?function(n){return`geo(${n.latitude},${n.longitude})`}(t.geoPointValue):"arrayValue"in t?function(n){let s="[",i=!0;for(const r of n.values||[])i?i=!1:s+=",",s+=wf(r);return s+"]"}(t.arrayValue):"mapValue"in t?function(n){const s=Object.keys(n.fields||{}).sort();let i="{",r=!0;for(const o of s)r?r=!1:i+=",",i+=`${o}:${wf(n.fields[o])}`;return i+"}"}(t.mapValue):X()}function Af(t){return!!t&&"integerValue"in t}function Cp(t){return!!t&&"arrayValue"in t}function zg(t){return!!t&&"nullValue"in t}function Gg(t){return!!t&&"doubleValue"in t&&isNaN(Number(t.doubleValue))}function gl(t){return!!t&&"mapValue"in t}function Co(t){if(t.geoPointValue)return{geoPointValue:Object.assign({},t.geoPointValue)};if(t.timestampValue&&typeof t.timestampValue=="object")return{timestampValue:Object.assign({},t.timestampValue)};if(t.mapValue){const e={mapValue:{fields:{}}};return jr(t.mapValue.fields,(n,s)=>e.mapValue.fields[n]=Co(s)),e}if(t.arrayValue){const e={arrayValue:{values:[]}};for(let n=0;n<(t.arrayValue.values||[]).length;++n)e.arrayValue.values[n]=Co(t.arrayValue.values[n]);return e}return Object.assign({},t)}function tF(t){return(((t.mapValue||{}).fields||{}).__type__||{}).stringValue==="__max__"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Jt{constructor(e){this.value=e}static empty(){return new Jt({mapValue:{}})}field(e){if(e.isEmpty())return this.value;{let n=this.value;for(let s=0;s<e.length-1;++s)if(n=(n.mapValue.fields||{})[e.get(s)],!gl(n))return null;return n=(n.mapValue.fields||{})[e.lastSegment()],n||null}}set(e,n){this.getFieldsMap(e.popLast())[e.lastSegment()]=Co(n)}setAll(e){let n=at.emptyPath(),s={},i=[];e.forEach((o,a)=>{if(!n.isImmediateParentOf(a)){const l=this.getFieldsMap(n);this.applyChanges(l,s,i),s={},i=[],n=a.popLast()}o?s[a.lastSegment()]=Co(o):i.push(a.lastSegment())});const r=this.getFieldsMap(n);this.applyChanges(r,s,i)}delete(e){const n=this.field(e.popLast());gl(n)&&n.mapValue.fields&&delete n.mapValue.fields[e.lastSegment()]}isEqual(e){return jn(this.value,e.value)}getFieldsMap(e){let n=this.value;n.mapValue.fields||(n.mapValue={fields:{}});for(let s=0;s<e.length;++s){let i=n.mapValue.fields[e.get(s)];gl(i)&&i.mapValue.fields||(i={mapValue:{fields:{}}},n.mapValue.fields[e.get(s)]=i),n=i}return n.mapValue.fields}applyChanges(e,n,s){jr(n,(i,r)=>e[i]=r);for(const i of s)delete e[i]}clone(){return new Jt(Co(this.value))}}function WA(t){const e=[];return jr(t.fields,(n,s)=>{const i=new at([n]);if(gl(s)){const r=WA(s.mapValue).fields;if(r.length===0)e.push(i);else for(const o of r)e.push(i.child(o))}else e.push(i)}),new pn(e)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class gt{constructor(e,n,s,i,r,o,a){this.key=e,this.documentType=n,this.version=s,this.readTime=i,this.createTime=r,this.data=o,this.documentState=a}static newInvalidDocument(e){return new gt(e,0,ee.min(),ee.min(),ee.min(),Jt.empty(),0)}static newFoundDocument(e,n,s,i){return new gt(e,1,n,ee.min(),s,i,0)}static newNoDocument(e,n){return new gt(e,2,n,ee.min(),ee.min(),Jt.empty(),0)}static newUnknownDocument(e,n){return new gt(e,3,n,ee.min(),ee.min(),Jt.empty(),2)}convertToFoundDocument(e,n){return!this.createTime.isEqual(ee.min())||this.documentType!==2&&this.documentType!==0||(this.createTime=e),this.version=e,this.documentType=1,this.data=n,this.documentState=0,this}convertToNoDocument(e){return this.version=e,this.documentType=2,this.data=Jt.empty(),this.documentState=0,this}convertToUnknownDocument(e){return this.version=e,this.documentType=3,this.data=Jt.empty(),this.documentState=2,this}setHasCommittedMutations(){return this.documentState=2,this}setHasLocalMutations(){return this.documentState=1,this.version=ee.min(),this}setReadTime(e){return this.readTime=e,this}get hasLocalMutations(){return this.documentState===1}get hasCommittedMutations(){return this.documentState===2}get hasPendingWrites(){return this.hasLocalMutations||this.hasCommittedMutations}isValidDocument(){return this.documentType!==0}isFoundDocument(){return this.documentType===1}isNoDocument(){return this.documentType===2}isUnknownDocument(){return this.documentType===3}isEqual(e){return e instanceof gt&&this.key.isEqual(e.key)&&this.version.isEqual(e.version)&&this.documentType===e.documentType&&this.documentState===e.documentState&&this.data.isEqual(e.data)}mutableCopy(){return new gt(this.key,this.documentType,this.version,this.readTime,this.createTime,this.data.clone(),this.documentState)}toString(){return`Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {createTime: ${this.createTime}}), {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ec{constructor(e,n){this.position=e,this.inclusive=n}}function Yg(t,e,n){let s=0;for(let i=0;i<t.position.length;i++){const r=e[i],o=t.position[i];if(r.field.isKeyField()?s=G.comparator(G.fromName(o.referenceValue),n.key):s=Er(o,n.data.field(r.field)),r.dir==="desc"&&(s*=-1),s!==0)break}return s}function Qg(t,e){if(t===null)return e===null;if(e===null||t.inclusive!==e.inclusive||t.position.length!==e.position.length)return!1;for(let n=0;n<t.position.length;n++)if(!jn(t.position[n],e.position[n]))return!1;return!0}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class tc{constructor(e,n="asc"){this.field=e,this.dir=n}}function nF(t,e){return t.dir===e.dir&&t.field.isEqual(e.field)}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class qA{}class Ge extends qA{constructor(e,n,s){super(),this.field=e,this.op=n,this.value=s}static create(e,n,s){return e.isKeyField()?n==="in"||n==="not-in"?this.createKeyFieldInFilter(e,n,s):new iF(e,n,s):n==="array-contains"?new aF(e,s):n==="in"?new lF(e,s):n==="not-in"?new cF(e,s):n==="array-contains-any"?new uF(e,s):new Ge(e,n,s)}static createKeyFieldInFilter(e,n,s){return n==="in"?new rF(e,s):new oF(e,s)}matches(e){const n=e.data.field(this.field);return this.op==="!="?n!==null&&this.matchesComparison(Er(n,this.value)):n!==null&&gi(this.value)===gi(n)&&this.matchesComparison(Er(n,this.value))}matchesComparison(e){switch(this.op){case"<":return e<0;case"<=":return e<=0;case"==":return e===0;case"!=":return e!==0;case">":return e>0;case">=":return e>=0;default:return X()}}isInequality(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}getFlattenedFilters(){return[this]}getFilters(){return[this]}}class Wn extends qA{constructor(e,n){super(),this.filters=e,this.op=n,this.ue=null}static create(e,n){return new Wn(e,n)}matches(e){return KA(this)?this.filters.find(n=>!n.matches(e))===void 0:this.filters.find(n=>n.matches(e))!==void 0}getFlattenedFilters(){return this.ue!==null||(this.ue=this.filters.reduce((e,n)=>e.concat(n.getFlattenedFilters()),[])),this.ue}getFilters(){return Object.assign([],this.filters)}}function KA(t){return t.op==="and"}function zA(t){return sF(t)&&KA(t)}function sF(t){for(const e of t.filters)if(e instanceof Wn)return!1;return!0}function If(t){if(t instanceof Ge)return t.field.canonicalString()+t.op.toString()+vr(t.value);if(zA(t))return t.filters.map(e=>If(e)).join(",");{const e=t.filters.map(n=>If(n)).join(",");return`${t.op}(${e})`}}function GA(t,e){return t instanceof Ge?function(s,i){return i instanceof Ge&&s.op===i.op&&s.field.isEqual(i.field)&&jn(s.value,i.value)}(t,e):t instanceof Wn?function(s,i){return i instanceof Wn&&s.op===i.op&&s.filters.length===i.filters.length?s.filters.reduce((r,o,a)=>r&&GA(o,i.filters[a]),!0):!1}(t,e):void X()}function YA(t){return t instanceof Ge?function(n){return`${n.field.canonicalString()} ${n.op} ${vr(n.value)}`}(t):t instanceof Wn?function(n){return n.op.toString()+" {"+n.getFilters().map(YA).join(" ,")+"}"}(t):"Filter"}class iF extends Ge{constructor(e,n,s){super(e,n,s),this.key=G.fromName(s.referenceValue)}matches(e){const n=G.comparator(e.key,this.key);return this.matchesComparison(n)}}class rF extends Ge{constructor(e,n){super(e,"in",n),this.keys=QA("in",n)}matches(e){return this.keys.some(n=>n.isEqual(e.key))}}class oF extends Ge{constructor(e,n){super(e,"not-in",n),this.keys=QA("not-in",n)}matches(e){return!this.keys.some(n=>n.isEqual(e.key))}}function QA(t,e){var n;return(((n=e.arrayValue)===null||n===void 0?void 0:n.values)||[]).map(s=>G.fromName(s.referenceValue))}class aF extends Ge{constructor(e,n){super(e,"array-contains",n)}matches(e){const n=e.data.field(this.field);return Cp(n)&&na(n.arrayValue,this.value)}}class lF extends Ge{constructor(e,n){super(e,"in",n)}matches(e){const n=e.data.field(this.field);return n!==null&&na(this.value.arrayValue,n)}}class cF extends Ge{constructor(e,n){super(e,"not-in",n)}matches(e){if(na(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;const n=e.data.field(this.field);return n!==null&&!na(this.value.arrayValue,n)}}class uF extends Ge{constructor(e,n){super(e,"array-contains-any",n)}matches(e){const n=e.data.field(this.field);return!(!Cp(n)||!n.arrayValue.values)&&n.arrayValue.values.some(s=>na(this.value.arrayValue,s))}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class hF{constructor(e,n=null,s=[],i=[],r=null,o=null,a=null){this.path=e,this.collectionGroup=n,this.orderBy=s,this.filters=i,this.limit=r,this.startAt=o,this.endAt=a,this.ce=null}}function Xg(t,e=null,n=[],s=[],i=null,r=null,o=null){return new hF(t,e,n,s,i,r,o)}function Rp(t){const e=se(t);if(e.ce===null){let n=e.path.canonicalString();e.collectionGroup!==null&&(n+="|cg:"+e.collectionGroup),n+="|f:",n+=e.filters.map(s=>If(s)).join(","),n+="|ob:",n+=e.orderBy.map(s=>function(r){return r.field.canonicalString()+r.dir}(s)).join(","),tu(e.limit)||(n+="|l:",n+=e.limit),e.startAt&&(n+="|lb:",n+=e.startAt.inclusive?"b:":"a:",n+=e.startAt.position.map(s=>vr(s)).join(",")),e.endAt&&(n+="|ub:",n+=e.endAt.inclusive?"a:":"b:",n+=e.endAt.position.map(s=>vr(s)).join(",")),e.ce=n}return e.ce}function Sp(t,e){if(t.limit!==e.limit||t.orderBy.length!==e.orderBy.length)return!1;for(let n=0;n<t.orderBy.length;n++)if(!nF(t.orderBy[n],e.orderBy[n]))return!1;if(t.filters.length!==e.filters.length)return!1;for(let n=0;n<t.filters.length;n++)if(!GA(t.filters[n],e.filters[n]))return!1;return t.collectionGroup===e.collectionGroup&&!!t.path.isEqual(e.path)&&!!Qg(t.startAt,e.startAt)&&Qg(t.endAt,e.endAt)}function bf(t){return G.isDocumentKey(t.path)&&t.collectionGroup===null&&t.filters.length===0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class nu{constructor(e,n=null,s=[],i=[],r=null,o="F",a=null,l=null){this.path=e,this.collectionGroup=n,this.explicitOrderBy=s,this.filters=i,this.limit=r,this.limitType=o,this.startAt=a,this.endAt=l,this.le=null,this.he=null,this.Pe=null,this.startAt,this.endAt}}function fF(t,e,n,s,i,r,o,a){return new nu(t,e,n,s,i,r,o,a)}function su(t){return new nu(t)}function Jg(t){return t.filters.length===0&&t.limit===null&&t.startAt==null&&t.endAt==null&&(t.explicitOrderBy.length===0||t.explicitOrderBy.length===1&&t.explicitOrderBy[0].field.isKeyField())}function dF(t){return t.collectionGroup!==null}function Ro(t){const e=se(t);if(e.le===null){e.le=[];const n=new Set;for(const r of e.explicitOrderBy)e.le.push(r),n.add(r.field.canonicalString());const s=e.explicitOrderBy.length>0?e.explicitOrderBy[e.explicitOrderBy.length-1].dir:"asc";(function(o){let a=new ht(at.comparator);return o.filters.forEach(l=>{l.getFlattenedFilters().forEach(c=>{c.isInequality()&&(a=a.add(c.field))})}),a})(e).forEach(r=>{n.has(r.canonicalString())||r.isKeyField()||e.le.push(new tc(r,s))}),n.has(at.keyField().canonicalString())||e.le.push(new tc(at.keyField(),s))}return e.le}function Mn(t){const e=se(t);return e.he||(e.he=pF(e,Ro(t))),e.he}function pF(t,e){if(t.limitType==="F")return Xg(t.path,t.collectionGroup,e,t.filters,t.limit,t.startAt,t.endAt);{e=e.map(i=>{const r=i.dir==="desc"?"asc":"desc";return new tc(i.field,r)});const n=t.endAt?new ec(t.endAt.position,t.endAt.inclusive):null,s=t.startAt?new ec(t.startAt.position,t.startAt.inclusive):null;return Xg(t.path,t.collectionGroup,e,t.filters,t.limit,n,s)}}function Cf(t,e,n){return new nu(t.path,t.collectionGroup,t.explicitOrderBy.slice(),t.filters.slice(),e,n,t.startAt,t.endAt)}function iu(t,e){return Sp(Mn(t),Mn(e))&&t.limitType===e.limitType}function XA(t){return`${Rp(Mn(t))}|lt:${t.limitType}`}function Vi(t){return`Query(target=${function(n){let s=n.path.canonicalString();return n.collectionGroup!==null&&(s+=" collectionGroup="+n.collectionGroup),n.filters.length>0&&(s+=`, filters: [${n.filters.map(i=>YA(i)).join(", ")}]`),tu(n.limit)||(s+=", limit: "+n.limit),n.orderBy.length>0&&(s+=`, orderBy: [${n.orderBy.map(i=>function(o){return`${o.field.canonicalString()} (${o.dir})`}(i)).join(", ")}]`),n.startAt&&(s+=", startAt: ",s+=n.startAt.inclusive?"b:":"a:",s+=n.startAt.position.map(i=>vr(i)).join(",")),n.endAt&&(s+=", endAt: ",s+=n.endAt.inclusive?"a:":"b:",s+=n.endAt.position.map(i=>vr(i)).join(",")),`Target(${s})`}(Mn(t))}; limitType=${t.limitType})`}function ru(t,e){return e.isFoundDocument()&&function(s,i){const r=i.key.path;return s.collectionGroup!==null?i.key.hasCollectionId(s.collectionGroup)&&s.path.isPrefixOf(r):G.isDocumentKey(s.path)?s.path.isEqual(r):s.path.isImmediateParentOf(r)}(t,e)&&function(s,i){for(const r of Ro(s))if(!r.field.isKeyField()&&i.data.field(r.field)===null)return!1;return!0}(t,e)&&function(s,i){for(const r of s.filters)if(!r.matches(i))return!1;return!0}(t,e)&&function(s,i){return!(s.startAt&&!function(o,a,l){const c=Yg(o,a,l);return o.inclusive?c<=0:c<0}(s.startAt,Ro(s),i)||s.endAt&&!function(o,a,l){const c=Yg(o,a,l);return o.inclusive?c>=0:c>0}(s.endAt,Ro(s),i))}(t,e)}function _F(t){return t.collectionGroup||(t.path.length%2==1?t.path.lastSegment():t.path.get(t.path.length-2))}function JA(t){return(e,n)=>{let s=!1;for(const i of Ro(t)){const r=mF(i,e,n);if(r!==0)return r;s=s||i.field.isKeyField()}return 0}}function mF(t,e,n){const s=t.field.isKeyField()?G.comparator(e.key,n.key):function(r,o,a){const l=o.data.field(r),c=a.data.field(r);return l!==null&&c!==null?Er(l,c):X()}(t.field,e,n);switch(t.dir){case"asc":return s;case"desc":return-1*s;default:return X()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Wr{constructor(e,n){this.mapKeyFn=e,this.equalsFn=n,this.inner={},this.innerSize=0}get(e){const n=this.mapKeyFn(e),s=this.inner[n];if(s!==void 0){for(const[i,r]of s)if(this.equalsFn(i,e))return r}}has(e){return this.get(e)!==void 0}set(e,n){const s=this.mapKeyFn(e),i=this.inner[s];if(i===void 0)return this.inner[s]=[[e,n]],void this.innerSize++;for(let r=0;r<i.length;r++)if(this.equalsFn(i[r][0],e))return void(i[r]=[e,n]);i.push([e,n]),this.innerSize++}delete(e){const n=this.mapKeyFn(e),s=this.inner[n];if(s===void 0)return!1;for(let i=0;i<s.length;i++)if(this.equalsFn(s[i][0],e))return s.length===1?delete this.inner[n]:s.splice(i,1),this.innerSize--,!0;return!1}forEach(e){jr(this.inner,(n,s)=>{for(const[i,r]of s)e(i,r)})}isEmpty(){return HA(this.inner)}size(){return this.innerSize}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const gF=new Ve(G.comparator);function as(){return gF}const ZA=new Ve(G.comparator);function ho(...t){let e=ZA;for(const n of t)e=e.insert(n.key,n);return e}function eI(t){let e=ZA;return t.forEach((n,s)=>e=e.insert(n,s.overlayedDocument)),e}function Js(){return So()}function tI(){return So()}function So(){return new Wr(t=>t.toString(),(t,e)=>t.isEqual(e))}const yF=new Ve(G.comparator),EF=new ht(G.comparator);function le(...t){let e=EF;for(const n of t)e=e.add(n);return e}const vF=new ht(Ee);function TF(){return vF}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function nI(t,e){if(t.useProto3Json){if(isNaN(e))return{doubleValue:"NaN"};if(e===1/0)return{doubleValue:"Infinity"};if(e===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:Zl(e)?"-0":e}}function sI(t){return{integerValue:""+t}}function wF(t,e){return JV(e)?sI(e):nI(t,e)}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ou{constructor(){this._=void 0}}function AF(t,e,n){return t instanceof nc?function(i,r){const o={fields:{__type__:{stringValue:"server_timestamp"},__local_write_time__:{timestampValue:{seconds:i.seconds,nanos:i.nanoseconds}}}};return r&&Ip(r)&&(r=bp(r)),r&&(o.fields.__previous_value__=r),{mapValue:o}}(n,e):t instanceof sa?rI(t,e):t instanceof ia?oI(t,e):function(i,r){const o=iI(i,r),a=Zg(o)+Zg(i.Ie);return Af(o)&&Af(i.Ie)?sI(a):nI(i.serializer,a)}(t,e)}function IF(t,e,n){return t instanceof sa?rI(t,e):t instanceof ia?oI(t,e):n}function iI(t,e){return t instanceof sc?function(s){return Af(s)||function(r){return!!r&&"doubleValue"in r}(s)}(e)?e:{integerValue:0}:null}class nc extends ou{}class sa extends ou{constructor(e){super(),this.elements=e}}function rI(t,e){const n=aI(e);for(const s of t.elements)n.some(i=>jn(i,s))||n.push(s);return{arrayValue:{values:n}}}class ia extends ou{constructor(e){super(),this.elements=e}}function oI(t,e){let n=aI(e);for(const s of t.elements)n=n.filter(i=>!jn(i,s));return{arrayValue:{values:n}}}class sc extends ou{constructor(e,n){super(),this.serializer=e,this.Ie=n}}function Zg(t){return qe(t.integerValue||t.doubleValue)}function aI(t){return Cp(t)&&t.arrayValue.values?t.arrayValue.values.slice():[]}function bF(t,e){return t.field.isEqual(e.field)&&function(s,i){return s instanceof sa&&i instanceof sa||s instanceof ia&&i instanceof ia?yr(s.elements,i.elements,jn):s instanceof sc&&i instanceof sc?jn(s.Ie,i.Ie):s instanceof nc&&i instanceof nc}(t.transform,e.transform)}class CF{constructor(e,n){this.version=e,this.transformResults=n}}class ss{constructor(e,n){this.updateTime=e,this.exists=n}static none(){return new ss}static exists(e){return new ss(void 0,e)}static updateTime(e){return new ss(e)}get isNone(){return this.updateTime===void 0&&this.exists===void 0}isEqual(e){return this.exists===e.exists&&(this.updateTime?!!e.updateTime&&this.updateTime.isEqual(e.updateTime):!e.updateTime)}}function yl(t,e){return t.updateTime!==void 0?e.isFoundDocument()&&e.version.isEqual(t.updateTime):t.exists===void 0||t.exists===e.isFoundDocument()}class au{}function lI(t,e){if(!t.hasLocalMutations||e&&e.fields.length===0)return null;if(e===null)return t.isNoDocument()?new uI(t.key,ss.none()):new Pa(t.key,t.data,ss.none());{const n=t.data,s=Jt.empty();let i=new ht(at.comparator);for(let r of e.fields)if(!i.has(r)){let o=n.field(r);o===null&&r.length>1&&(r=r.popLast(),o=n.field(r)),o===null?s.delete(r):s.set(r,o),i=i.add(r)}return new bi(t.key,s,new pn(i.toArray()),ss.none())}}function RF(t,e,n){t instanceof Pa?function(i,r,o){const a=i.value.clone(),l=ty(i.fieldTransforms,r,o.transformResults);a.setAll(l),r.convertToFoundDocument(o.version,a).setHasCommittedMutations()}(t,e,n):t instanceof bi?function(i,r,o){if(!yl(i.precondition,r))return void r.convertToUnknownDocument(o.version);const a=ty(i.fieldTransforms,r,o.transformResults),l=r.data;l.setAll(cI(i)),l.setAll(a),r.convertToFoundDocument(o.version,l).setHasCommittedMutations()}(t,e,n):function(i,r,o){r.convertToNoDocument(o.version).setHasCommittedMutations()}(0,e,n)}function Po(t,e,n,s){return t instanceof Pa?function(r,o,a,l){if(!yl(r.precondition,o))return a;const c=r.value.clone(),u=ny(r.fieldTransforms,l,o);return c.setAll(u),o.convertToFoundDocument(o.version,c).setHasLocalMutations(),null}(t,e,n,s):t instanceof bi?function(r,o,a,l){if(!yl(r.precondition,o))return a;const c=ny(r.fieldTransforms,l,o),u=o.data;return u.setAll(cI(r)),u.setAll(c),o.convertToFoundDocument(o.version,u).setHasLocalMutations(),a===null?null:a.unionWith(r.fieldMask.fields).unionWith(r.fieldTransforms.map(h=>h.field))}(t,e,n,s):function(r,o,a){return yl(r.precondition,o)?(o.convertToNoDocument(o.version).setHasLocalMutations(),null):a}(t,e,n)}function SF(t,e){let n=null;for(const s of t.fieldTransforms){const i=e.data.field(s.field),r=iI(s.transform,i||null);r!=null&&(n===null&&(n=Jt.empty()),n.set(s.field,r))}return n||null}function ey(t,e){return t.type===e.type&&!!t.key.isEqual(e.key)&&!!t.precondition.isEqual(e.precondition)&&!!function(s,i){return s===void 0&&i===void 0||!(!s||!i)&&yr(s,i,(r,o)=>bF(r,o))}(t.fieldTransforms,e.fieldTransforms)&&(t.type===0?t.value.isEqual(e.value):t.type!==1||t.data.isEqual(e.data)&&t.fieldMask.isEqual(e.fieldMask))}class Pa extends au{constructor(e,n,s,i=[]){super(),this.key=e,this.value=n,this.precondition=s,this.fieldTransforms=i,this.type=0}getFieldMask(){return null}}class bi extends au{constructor(e,n,s,i,r=[]){super(),this.key=e,this.data=n,this.fieldMask=s,this.precondition=i,this.fieldTransforms=r,this.type=1}getFieldMask(){return this.fieldMask}}function cI(t){const e=new Map;return t.fieldMask.fields.forEach(n=>{if(!n.isEmpty()){const s=t.data.field(n);e.set(n,s)}}),e}function ty(t,e,n){const s=new Map;ke(t.length===n.length);for(let i=0;i<n.length;i++){const r=t[i],o=r.transform,a=e.data.field(r.field);s.set(r.field,IF(o,a,n[i]))}return s}function ny(t,e,n){const s=new Map;for(const i of t){const r=i.transform,o=n.data.field(i.field);s.set(i.field,AF(r,o,e))}return s}class uI extends au{constructor(e,n){super(),this.key=e,this.precondition=n,this.type=2,this.fieldTransforms=[]}getFieldMask(){return null}}class PF extends au{constructor(e,n){super(),this.key=e,this.precondition=n,this.type=3,this.fieldTransforms=[]}getFieldMask(){return null}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class NF{constructor(e,n,s,i){this.batchId=e,this.localWriteTime=n,this.baseMutations=s,this.mutations=i}applyToRemoteDocument(e,n){const s=n.mutationResults;for(let i=0;i<this.mutations.length;i++){const r=this.mutations[i];r.key.isEqual(e.key)&&RF(r,e,s[i])}}applyToLocalView(e,n){for(const s of this.baseMutations)s.key.isEqual(e.key)&&(n=Po(s,e,n,this.localWriteTime));for(const s of this.mutations)s.key.isEqual(e.key)&&(n=Po(s,e,n,this.localWriteTime));return n}applyToLocalDocumentSet(e,n){const s=tI();return this.mutations.forEach(i=>{const r=e.get(i.key),o=r.overlayedDocument;let a=this.applyToLocalView(o,r.mutatedFields);a=n.has(i.key)?null:a;const l=lI(o,a);l!==null&&s.set(i.key,l),o.isValidDocument()||o.convertToNoDocument(ee.min())}),s}keys(){return this.mutations.reduce((e,n)=>e.add(n.key),le())}isEqual(e){return this.batchId===e.batchId&&yr(this.mutations,e.mutations,(n,s)=>ey(n,s))&&yr(this.baseMutations,e.baseMutations,(n,s)=>ey(n,s))}}class Pp{constructor(e,n,s,i){this.batch=e,this.commitVersion=n,this.mutationResults=s,this.docVersions=i}static from(e,n,s){ke(e.mutations.length===s.length);let i=function(){return yF}();const r=e.mutations;for(let o=0;o<r.length;o++)i=i.insert(r[o].key,s[o].version);return new Pp(e,n,s,i)}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class OF{constructor(e,n){this.largestBatchId=e,this.mutation=n}getKey(){return this.mutation.key}isEqual(e){return e!==null&&this.mutation===e.mutation}toString(){return`Overlay{
      largestBatchId: ${this.largestBatchId},
      mutation: ${this.mutation.toString()}
    }`}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class DF{constructor(e,n){this.count=e,this.unchangedNames=n}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var We,fe;function kF(t){switch(t){default:return X();case N.CANCELLED:case N.UNKNOWN:case N.DEADLINE_EXCEEDED:case N.RESOURCE_EXHAUSTED:case N.INTERNAL:case N.UNAVAILABLE:case N.UNAUTHENTICATED:return!1;case N.INVALID_ARGUMENT:case N.NOT_FOUND:case N.ALREADY_EXISTS:case N.PERMISSION_DENIED:case N.FAILED_PRECONDITION:case N.ABORTED:case N.OUT_OF_RANGE:case N.UNIMPLEMENTED:case N.DATA_LOSS:return!0}}function hI(t){if(t===void 0)return os("GRPC error has no .code"),N.UNKNOWN;switch(t){case We.OK:return N.OK;case We.CANCELLED:return N.CANCELLED;case We.UNKNOWN:return N.UNKNOWN;case We.DEADLINE_EXCEEDED:return N.DEADLINE_EXCEEDED;case We.RESOURCE_EXHAUSTED:return N.RESOURCE_EXHAUSTED;case We.INTERNAL:return N.INTERNAL;case We.UNAVAILABLE:return N.UNAVAILABLE;case We.UNAUTHENTICATED:return N.UNAUTHENTICATED;case We.INVALID_ARGUMENT:return N.INVALID_ARGUMENT;case We.NOT_FOUND:return N.NOT_FOUND;case We.ALREADY_EXISTS:return N.ALREADY_EXISTS;case We.PERMISSION_DENIED:return N.PERMISSION_DENIED;case We.FAILED_PRECONDITION:return N.FAILED_PRECONDITION;case We.ABORTED:return N.ABORTED;case We.OUT_OF_RANGE:return N.OUT_OF_RANGE;case We.UNIMPLEMENTED:return N.UNIMPLEMENTED;case We.DATA_LOSS:return N.DATA_LOSS;default:return X()}}(fe=We||(We={}))[fe.OK=0]="OK",fe[fe.CANCELLED=1]="CANCELLED",fe[fe.UNKNOWN=2]="UNKNOWN",fe[fe.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",fe[fe.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",fe[fe.NOT_FOUND=5]="NOT_FOUND",fe[fe.ALREADY_EXISTS=6]="ALREADY_EXISTS",fe[fe.PERMISSION_DENIED=7]="PERMISSION_DENIED",fe[fe.UNAUTHENTICATED=16]="UNAUTHENTICATED",fe[fe.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",fe[fe.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",fe[fe.ABORTED=10]="ABORTED",fe[fe.OUT_OF_RANGE=11]="OUT_OF_RANGE",fe[fe.UNIMPLEMENTED=12]="UNIMPLEMENTED",fe[fe.INTERNAL=13]="INTERNAL",fe[fe.UNAVAILABLE=14]="UNAVAILABLE",fe[fe.DATA_LOSS=15]="DATA_LOSS";/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function xF(){return new TextEncoder}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const LF=new tr([4294967295,4294967295],0);function sy(t){const e=xF().encode(t),n=new VV;return n.update(e),new Uint8Array(n.digest())}function iy(t){const e=new DataView(t.buffer),n=e.getUint32(0,!0),s=e.getUint32(4,!0),i=e.getUint32(8,!0),r=e.getUint32(12,!0);return[new tr([n,s],0),new tr([i,r],0)]}class Np{constructor(e,n,s){if(this.bitmap=e,this.padding=n,this.hashCount=s,n<0||n>=8)throw new fo(`Invalid padding: ${n}`);if(s<0)throw new fo(`Invalid hash count: ${s}`);if(e.length>0&&this.hashCount===0)throw new fo(`Invalid hash count: ${s}`);if(e.length===0&&n!==0)throw new fo(`Invalid padding when bitmap length is 0: ${n}`);this.Te=8*e.length-n,this.Ee=tr.fromNumber(this.Te)}de(e,n,s){let i=e.add(n.multiply(tr.fromNumber(s)));return i.compare(LF)===1&&(i=new tr([i.getBits(0),i.getBits(1)],0)),i.modulo(this.Ee).toNumber()}Ae(e){return(this.bitmap[Math.floor(e/8)]&1<<e%8)!=0}mightContain(e){if(this.Te===0)return!1;const n=sy(e),[s,i]=iy(n);for(let r=0;r<this.hashCount;r++){const o=this.de(s,i,r);if(!this.Ae(o))return!1}return!0}static create(e,n,s){const i=e%8==0?0:8-e%8,r=new Uint8Array(Math.ceil(e/8)),o=new Np(r,i,n);return s.forEach(a=>o.insert(a)),o}insert(e){if(this.Te===0)return;const n=sy(e),[s,i]=iy(n);for(let r=0;r<this.hashCount;r++){const o=this.de(s,i,r);this.Re(o)}}Re(e){const n=Math.floor(e/8),s=e%8;this.bitmap[n]|=1<<s}}class fo extends Error{constructor(){super(...arguments),this.name="BloomFilterError"}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class lu{constructor(e,n,s,i,r){this.snapshotVersion=e,this.targetChanges=n,this.targetMismatches=s,this.documentUpdates=i,this.resolvedLimboDocuments=r}static createSynthesizedRemoteEventForCurrentChange(e,n,s){const i=new Map;return i.set(e,Na.createSynthesizedTargetChangeForCurrentChange(e,n,s)),new lu(ee.min(),i,new Ve(Ee),as(),le())}}class Na{constructor(e,n,s,i,r){this.resumeToken=e,this.current=n,this.addedDocuments=s,this.modifiedDocuments=i,this.removedDocuments=r}static createSynthesizedTargetChangeForCurrentChange(e,n,s){return new Na(s,n,le(),le(),le())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class El{constructor(e,n,s,i){this.Ve=e,this.removedTargetIds=n,this.key=s,this.me=i}}class fI{constructor(e,n){this.targetId=e,this.fe=n}}class dI{constructor(e,n,s=wt.EMPTY_BYTE_STRING,i=null){this.state=e,this.targetIds=n,this.resumeToken=s,this.cause=i}}class ry{constructor(){this.ge=0,this.pe=ay(),this.ye=wt.EMPTY_BYTE_STRING,this.we=!1,this.Se=!0}get current(){return this.we}get resumeToken(){return this.ye}get be(){return this.ge!==0}get De(){return this.Se}Ce(e){e.approximateByteSize()>0&&(this.Se=!0,this.ye=e)}ve(){let e=le(),n=le(),s=le();return this.pe.forEach((i,r)=>{switch(r){case 0:e=e.add(i);break;case 2:n=n.add(i);break;case 1:s=s.add(i);break;default:X()}}),new Na(this.ye,this.we,e,n,s)}Fe(){this.Se=!1,this.pe=ay()}Me(e,n){this.Se=!0,this.pe=this.pe.insert(e,n)}xe(e){this.Se=!0,this.pe=this.pe.remove(e)}Oe(){this.ge+=1}Ne(){this.ge-=1}Be(){this.Se=!0,this.we=!0}}class MF{constructor(e){this.Le=e,this.ke=new Map,this.qe=as(),this.Qe=oy(),this.Ke=new Ve(Ee)}$e(e){for(const n of e.Ve)e.me&&e.me.isFoundDocument()?this.Ue(n,e.me):this.We(n,e.key,e.me);for(const n of e.removedTargetIds)this.We(n,e.key,e.me)}Ge(e){this.forEachTarget(e,n=>{const s=this.ze(n);switch(e.state){case 0:this.je(n)&&s.Ce(e.resumeToken);break;case 1:s.Ne(),s.be||s.Fe(),s.Ce(e.resumeToken);break;case 2:s.Ne(),s.be||this.removeTarget(n);break;case 3:this.je(n)&&(s.Be(),s.Ce(e.resumeToken));break;case 4:this.je(n)&&(this.He(n),s.Ce(e.resumeToken));break;default:X()}})}forEachTarget(e,n){e.targetIds.length>0?e.targetIds.forEach(n):this.ke.forEach((s,i)=>{this.je(i)&&n(i)})}Je(e){const n=e.targetId,s=e.fe.count,i=this.Ye(n);if(i){const r=i.target;if(bf(r))if(s===0){const o=new G(r.path);this.We(n,o,gt.newNoDocument(o,ee.min()))}else ke(s===1);else{const o=this.Ze(n);if(o!==s){const a=this.Xe(e),l=a?this.et(a,e,o):1;if(l!==0){this.He(n);const c=l===2?"TargetPurposeExistenceFilterMismatchBloom":"TargetPurposeExistenceFilterMismatch";this.Ke=this.Ke.insert(n,c)}}}}}Xe(e){const n=e.fe.unchangedNames;if(!n||!n.bits)return null;const{bits:{bitmap:s="",padding:i=0},hashCount:r=0}=n;let o,a;try{o=mi(s).toUint8Array()}catch(l){if(l instanceof jA)return gr("Decoding the base64 bloom filter in existence filter failed ("+l.message+"); ignoring the bloom filter and falling back to full re-query."),null;throw l}try{a=new Np(o,i,r)}catch(l){return gr(l instanceof fo?"BloomFilter error: ":"Applying bloom filter failed: ",l),null}return a.Te===0?null:a}et(e,n,s){return n.fe.count===s-this.rt(e,n.targetId)?0:2}rt(e,n){const s=this.Le.getRemoteKeysForTarget(n);let i=0;return s.forEach(r=>{const o=this.Le.nt(),a=`projects/${o.projectId}/databases/${o.database}/documents/${r.path.canonicalString()}`;e.mightContain(a)||(this.We(n,r,null),i++)}),i}it(e){const n=new Map;this.ke.forEach((r,o)=>{const a=this.Ye(o);if(a){if(r.current&&bf(a.target)){const l=new G(a.target.path);this.qe.get(l)!==null||this.st(o,l)||this.We(o,l,gt.newNoDocument(l,e))}r.De&&(n.set(o,r.ve()),r.Fe())}});let s=le();this.Qe.forEach((r,o)=>{let a=!0;o.forEachWhile(l=>{const c=this.Ye(l);return!c||c.purpose==="TargetPurposeLimboResolution"||(a=!1,!1)}),a&&(s=s.add(r))}),this.qe.forEach((r,o)=>o.setReadTime(e));const i=new lu(e,n,this.Ke,this.qe,s);return this.qe=as(),this.Qe=oy(),this.Ke=new Ve(Ee),i}Ue(e,n){if(!this.je(e))return;const s=this.st(e,n.key)?2:0;this.ze(e).Me(n.key,s),this.qe=this.qe.insert(n.key,n),this.Qe=this.Qe.insert(n.key,this.ot(n.key).add(e))}We(e,n,s){if(!this.je(e))return;const i=this.ze(e);this.st(e,n)?i.Me(n,1):i.xe(n),this.Qe=this.Qe.insert(n,this.ot(n).delete(e)),s&&(this.qe=this.qe.insert(n,s))}removeTarget(e){this.ke.delete(e)}Ze(e){const n=this.ze(e).ve();return this.Le.getRemoteKeysForTarget(e).size+n.addedDocuments.size-n.removedDocuments.size}Oe(e){this.ze(e).Oe()}ze(e){let n=this.ke.get(e);return n||(n=new ry,this.ke.set(e,n)),n}ot(e){let n=this.Qe.get(e);return n||(n=new ht(Ee),this.Qe=this.Qe.insert(e,n)),n}je(e){const n=this.Ye(e)!==null;return n||H("WatchChangeAggregator","Detected inactive target",e),n}Ye(e){const n=this.ke.get(e);return n&&n.be?null:this.Le._t(e)}He(e){this.ke.set(e,new ry),this.Le.getRemoteKeysForTarget(e).forEach(n=>{this.We(e,n,null)})}st(e,n){return this.Le.getRemoteKeysForTarget(e).has(n)}}function oy(){return new Ve(G.comparator)}function ay(){return new Ve(G.comparator)}const VF=(()=>({asc:"ASCENDING",desc:"DESCENDING"}))(),FF=(()=>({"<":"LESS_THAN","<=":"LESS_THAN_OR_EQUAL",">":"GREATER_THAN",">=":"GREATER_THAN_OR_EQUAL","==":"EQUAL","!=":"NOT_EQUAL","array-contains":"ARRAY_CONTAINS",in:"IN","not-in":"NOT_IN","array-contains-any":"ARRAY_CONTAINS_ANY"}))(),UF=(()=>({and:"AND",or:"OR"}))();class $F{constructor(e,n){this.databaseId=e,this.useProto3Json=n}}function Rf(t,e){return t.useProto3Json||tu(e)?e:{value:e}}function ic(t,e){return t.useProto3Json?`${new Date(1e3*e.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+e.nanoseconds).slice(-9)}Z`:{seconds:""+e.seconds,nanos:e.nanoseconds}}function pI(t,e){return t.useProto3Json?e.toBase64():e.toUint8Array()}function BF(t,e){return ic(t,e.toTimestamp())}function Vn(t){return ke(!!t),ee.fromTimestamp(function(n){const s=Ds(n);return new Ke(s.seconds,s.nanos)}(t))}function Op(t,e){return function(s){return new Le(["projects",s.projectId,"databases",s.database])}(t).child("documents").child(e).canonicalString()}function _I(t){const e=Le.fromString(t);return ke(EI(e)),e}function Sf(t,e){return Op(t.databaseId,e.path)}function ah(t,e){const n=_I(e);if(n.get(1)!==t.databaseId.projectId)throw new K(N.INVALID_ARGUMENT,"Tried to deserialize key from different project: "+n.get(1)+" vs "+t.databaseId.projectId);if(n.get(3)!==t.databaseId.database)throw new K(N.INVALID_ARGUMENT,"Tried to deserialize key from different database: "+n.get(3)+" vs "+t.databaseId.database);return new G(mI(n))}function Pf(t,e){return Op(t.databaseId,e)}function HF(t){const e=_I(t);return e.length===4?Le.emptyPath():mI(e)}function Nf(t){return new Le(["projects",t.databaseId.projectId,"databases",t.databaseId.database]).canonicalString()}function mI(t){return ke(t.length>4&&t.get(4)==="documents"),t.popFirst(5)}function ly(t,e,n){return{name:Sf(t,e),fields:n.value.mapValue.fields}}function jF(t,e){let n;if("targetChange"in e){e.targetChange;const s=function(c){return c==="NO_CHANGE"?0:c==="ADD"?1:c==="REMOVE"?2:c==="CURRENT"?3:c==="RESET"?4:X()}(e.targetChange.targetChangeType||"NO_CHANGE"),i=e.targetChange.targetIds||[],r=function(c,u){return c.useProto3Json?(ke(u===void 0||typeof u=="string"),wt.fromBase64String(u||"")):(ke(u===void 0||u instanceof Uint8Array),wt.fromUint8Array(u||new Uint8Array))}(t,e.targetChange.resumeToken),o=e.targetChange.cause,a=o&&function(c){const u=c.code===void 0?N.UNKNOWN:hI(c.code);return new K(u,c.message||"")}(o);n=new dI(s,i,r,a||null)}else if("documentChange"in e){e.documentChange;const s=e.documentChange;s.document,s.document.name,s.document.updateTime;const i=ah(t,s.document.name),r=Vn(s.document.updateTime),o=s.document.createTime?Vn(s.document.createTime):ee.min(),a=new Jt({mapValue:{fields:s.document.fields}}),l=gt.newFoundDocument(i,r,o,a),c=s.targetIds||[],u=s.removedTargetIds||[];n=new El(c,u,l.key,l)}else if("documentDelete"in e){e.documentDelete;const s=e.documentDelete;s.document;const i=ah(t,s.document),r=s.readTime?Vn(s.readTime):ee.min(),o=gt.newNoDocument(i,r),a=s.removedTargetIds||[];n=new El([],a,o.key,o)}else if("documentRemove"in e){e.documentRemove;const s=e.documentRemove;s.document;const i=ah(t,s.document),r=s.removedTargetIds||[];n=new El([],r,i,null)}else{if(!("filter"in e))return X();{e.filter;const s=e.filter;s.targetId;const{count:i=0,unchangedNames:r}=s,o=new DF(i,r),a=s.targetId;n=new fI(a,o)}}return n}function WF(t,e){let n;if(e instanceof Pa)n={update:ly(t,e.key,e.value)};else if(e instanceof uI)n={delete:Sf(t,e.key)};else if(e instanceof bi)n={update:ly(t,e.key,e.data),updateMask:ZF(e.fieldMask)};else{if(!(e instanceof PF))return X();n={verify:Sf(t,e.key)}}return e.fieldTransforms.length>0&&(n.updateTransforms=e.fieldTransforms.map(s=>function(r,o){const a=o.transform;if(a instanceof nc)return{fieldPath:o.field.canonicalString(),setToServerValue:"REQUEST_TIME"};if(a instanceof sa)return{fieldPath:o.field.canonicalString(),appendMissingElements:{values:a.elements}};if(a instanceof ia)return{fieldPath:o.field.canonicalString(),removeAllFromArray:{values:a.elements}};if(a instanceof sc)return{fieldPath:o.field.canonicalString(),increment:a.Ie};throw X()}(0,s))),e.precondition.isNone||(n.currentDocument=function(i,r){return r.updateTime!==void 0?{updateTime:BF(i,r.updateTime)}:r.exists!==void 0?{exists:r.exists}:X()}(t,e.precondition)),n}function qF(t,e){return t&&t.length>0?(ke(e!==void 0),t.map(n=>function(i,r){let o=i.updateTime?Vn(i.updateTime):Vn(r);return o.isEqual(ee.min())&&(o=Vn(r)),new CF(o,i.transformResults||[])}(n,e))):[]}function KF(t,e){return{documents:[Pf(t,e.path)]}}function zF(t,e){const n={structuredQuery:{}},s=e.path;e.collectionGroup!==null?(n.parent=Pf(t,s),n.structuredQuery.from=[{collectionId:e.collectionGroup,allDescendants:!0}]):(n.parent=Pf(t,s.popLast()),n.structuredQuery.from=[{collectionId:s.lastSegment()}]);const i=function(l){if(l.length!==0)return yI(Wn.create(l,"and"))}(e.filters);i&&(n.structuredQuery.where=i);const r=function(l){if(l.length!==0)return l.map(c=>function(h){return{field:Fi(h.field),direction:QF(h.dir)}}(c))}(e.orderBy);r&&(n.structuredQuery.orderBy=r);const o=Rf(t,e.limit);return o!==null&&(n.structuredQuery.limit=o),e.startAt&&(n.structuredQuery.startAt=function(l){return{before:l.inclusive,values:l.position}}(e.startAt)),e.endAt&&(n.structuredQuery.endAt=function(l){return{before:!l.inclusive,values:l.position}}(e.endAt)),n}function GF(t){let e=HF(t.parent);const n=t.structuredQuery,s=n.from?n.from.length:0;let i=null;if(s>0){ke(s===1);const u=n.from[0];u.allDescendants?i=u.collectionId:e=e.child(u.collectionId)}let r=[];n.where&&(r=function(h){const f=gI(h);return f instanceof Wn&&zA(f)?f.getFilters():[f]}(n.where));let o=[];n.orderBy&&(o=function(h){return h.map(f=>function(m){return new tc(Ui(m.field),function(y){switch(y){case"ASCENDING":return"asc";case"DESCENDING":return"desc";default:return}}(m.direction))}(f))}(n.orderBy));let a=null;n.limit&&(a=function(h){let f;return f=typeof h=="object"?h.value:h,tu(f)?null:f}(n.limit));let l=null;n.startAt&&(l=function(h){const f=!!h.before,d=h.values||[];return new ec(d,f)}(n.startAt));let c=null;return n.endAt&&(c=function(h){const f=!h.before,d=h.values||[];return new ec(d,f)}(n.endAt)),fF(e,i,o,r,a,"F",l,c)}function YF(t,e){const n=function(i){switch(i){case"TargetPurposeListen":return null;case"TargetPurposeExistenceFilterMismatch":return"existence-filter-mismatch";case"TargetPurposeExistenceFilterMismatchBloom":return"existence-filter-mismatch-bloom";case"TargetPurposeLimboResolution":return"limbo-document";default:return X()}}(e.purpose);return n==null?null:{"goog-listen-tags":n}}function gI(t){return t.unaryFilter!==void 0?function(n){switch(n.unaryFilter.op){case"IS_NAN":const s=Ui(n.unaryFilter.field);return Ge.create(s,"==",{doubleValue:NaN});case"IS_NULL":const i=Ui(n.unaryFilter.field);return Ge.create(i,"==",{nullValue:"NULL_VALUE"});case"IS_NOT_NAN":const r=Ui(n.unaryFilter.field);return Ge.create(r,"!=",{doubleValue:NaN});case"IS_NOT_NULL":const o=Ui(n.unaryFilter.field);return Ge.create(o,"!=",{nullValue:"NULL_VALUE"});default:return X()}}(t):t.fieldFilter!==void 0?function(n){return Ge.create(Ui(n.fieldFilter.field),function(i){switch(i){case"EQUAL":return"==";case"NOT_EQUAL":return"!=";case"GREATER_THAN":return">";case"GREATER_THAN_OR_EQUAL":return">=";case"LESS_THAN":return"<";case"LESS_THAN_OR_EQUAL":return"<=";case"ARRAY_CONTAINS":return"array-contains";case"IN":return"in";case"NOT_IN":return"not-in";case"ARRAY_CONTAINS_ANY":return"array-contains-any";default:return X()}}(n.fieldFilter.op),n.fieldFilter.value)}(t):t.compositeFilter!==void 0?function(n){return Wn.create(n.compositeFilter.filters.map(s=>gI(s)),function(i){switch(i){case"AND":return"and";case"OR":return"or";default:return X()}}(n.compositeFilter.op))}(t):X()}function QF(t){return VF[t]}function XF(t){return FF[t]}function JF(t){return UF[t]}function Fi(t){return{fieldPath:t.canonicalString()}}function Ui(t){return at.fromServerFormat(t.fieldPath)}function yI(t){return t instanceof Ge?function(n){if(n.op==="=="){if(Gg(n.value))return{unaryFilter:{field:Fi(n.field),op:"IS_NAN"}};if(zg(n.value))return{unaryFilter:{field:Fi(n.field),op:"IS_NULL"}}}else if(n.op==="!="){if(Gg(n.value))return{unaryFilter:{field:Fi(n.field),op:"IS_NOT_NAN"}};if(zg(n.value))return{unaryFilter:{field:Fi(n.field),op:"IS_NOT_NULL"}}}return{fieldFilter:{field:Fi(n.field),op:XF(n.op),value:n.value}}}(t):t instanceof Wn?function(n){const s=n.getFilters().map(i=>yI(i));return s.length===1?s[0]:{compositeFilter:{op:JF(n.op),filters:s}}}(t):X()}function ZF(t){const e=[];return t.fields.forEach(n=>e.push(n.canonicalString())),{fieldPaths:e}}function EI(t){return t.length>=4&&t.get(0)==="projects"&&t.get(2)==="databases"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Es{constructor(e,n,s,i,r=ee.min(),o=ee.min(),a=wt.EMPTY_BYTE_STRING,l=null){this.target=e,this.targetId=n,this.purpose=s,this.sequenceNumber=i,this.snapshotVersion=r,this.lastLimboFreeSnapshotVersion=o,this.resumeToken=a,this.expectedCount=l}withSequenceNumber(e){return new Es(this.target,this.targetId,this.purpose,e,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,this.expectedCount)}withResumeToken(e,n){return new Es(this.target,this.targetId,this.purpose,this.sequenceNumber,n,this.lastLimboFreeSnapshotVersion,e,null)}withExpectedCount(e){return new Es(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,e)}withLastLimboFreeSnapshotVersion(e){return new Es(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,e,this.resumeToken,this.expectedCount)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class eU{constructor(e){this.ut=e}}function tU(t){const e=GF({parent:t.parent,structuredQuery:t.structuredQuery});return t.limitType==="LAST"?Cf(e,e.limit,"L"):e}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class nU{constructor(){this.on=new sU}addToCollectionParentIndex(e,n){return this.on.add(n),O.resolve()}getCollectionParents(e,n){return O.resolve(this.on.getEntries(n))}addFieldIndex(e,n){return O.resolve()}deleteFieldIndex(e,n){return O.resolve()}deleteAllFieldIndexes(e){return O.resolve()}createTargetIndexes(e,n){return O.resolve()}getDocumentsMatchingTarget(e,n){return O.resolve(null)}getIndexType(e,n){return O.resolve(0)}getFieldIndexes(e,n){return O.resolve([])}getNextCollectionGroupToUpdate(e){return O.resolve(null)}getMinOffset(e,n){return O.resolve(Os.min())}getMinOffsetFromCollectionGroup(e,n){return O.resolve(Os.min())}updateCollectionGroup(e,n,s){return O.resolve()}updateIndexEntries(e,n){return O.resolve()}}class sU{constructor(){this.index={}}add(e){const n=e.lastSegment(),s=e.popLast(),i=this.index[n]||new ht(Le.comparator),r=!i.has(s);return this.index[n]=i.add(s),r}has(e){const n=e.lastSegment(),s=e.popLast(),i=this.index[n];return i&&i.has(s)}getEntries(e){return(this.index[e]||new ht(Le.comparator)).toArray()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Tr{constructor(e){this.xn=e}next(){return this.xn+=2,this.xn}static On(){return new Tr(0)}static Nn(){return new Tr(-1)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class iU{constructor(){this.changes=new Wr(e=>e.toString(),(e,n)=>e.isEqual(n)),this.changesApplied=!1}addEntry(e){this.assertNotApplied(),this.changes.set(e.key,e)}removeEntry(e,n){this.assertNotApplied(),this.changes.set(e,gt.newInvalidDocument(e).setReadTime(n))}getEntry(e,n){this.assertNotApplied();const s=this.changes.get(n);return s!==void 0?O.resolve(s):this.getFromCache(e,n)}getEntries(e,n){return this.getAllFromCache(e,n)}apply(e){return this.assertNotApplied(),this.changesApplied=!0,this.applyChanges(e)}assertNotApplied(){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class rU{constructor(e,n){this.overlayedDocument=e,this.mutatedFields=n}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class oU{constructor(e,n,s,i){this.remoteDocumentCache=e,this.mutationQueue=n,this.documentOverlayCache=s,this.indexManager=i}getDocument(e,n){let s=null;return this.documentOverlayCache.getOverlay(e,n).next(i=>(s=i,this.remoteDocumentCache.getEntry(e,n))).next(i=>(s!==null&&Po(s.mutation,i,pn.empty(),Ke.now()),i))}getDocuments(e,n){return this.remoteDocumentCache.getEntries(e,n).next(s=>this.getLocalViewOfDocuments(e,s,le()).next(()=>s))}getLocalViewOfDocuments(e,n,s=le()){const i=Js();return this.populateOverlays(e,i,n).next(()=>this.computeViews(e,n,i,s).next(r=>{let o=ho();return r.forEach((a,l)=>{o=o.insert(a,l.overlayedDocument)}),o}))}getOverlayedDocuments(e,n){const s=Js();return this.populateOverlays(e,s,n).next(()=>this.computeViews(e,n,s,le()))}populateOverlays(e,n,s){const i=[];return s.forEach(r=>{n.has(r)||i.push(r)}),this.documentOverlayCache.getOverlays(e,i).next(r=>{r.forEach((o,a)=>{n.set(o,a)})})}computeViews(e,n,s,i){let r=as();const o=So(),a=function(){return So()}();return n.forEach((l,c)=>{const u=s.get(c.key);i.has(c.key)&&(u===void 0||u.mutation instanceof bi)?r=r.insert(c.key,c):u!==void 0?(o.set(c.key,u.mutation.getFieldMask()),Po(u.mutation,c,u.mutation.getFieldMask(),Ke.now())):o.set(c.key,pn.empty())}),this.recalculateAndSaveOverlays(e,r).next(l=>(l.forEach((c,u)=>o.set(c,u)),n.forEach((c,u)=>{var h;return a.set(c,new rU(u,(h=o.get(c))!==null&&h!==void 0?h:null))}),a))}recalculateAndSaveOverlays(e,n){const s=So();let i=new Ve((o,a)=>o-a),r=le();return this.mutationQueue.getAllMutationBatchesAffectingDocumentKeys(e,n).next(o=>{for(const a of o)a.keys().forEach(l=>{const c=n.get(l);if(c===null)return;let u=s.get(l)||pn.empty();u=a.applyToLocalView(c,u),s.set(l,u);const h=(i.get(a.batchId)||le()).add(l);i=i.insert(a.batchId,h)})}).next(()=>{const o=[],a=i.getReverseIterator();for(;a.hasNext();){const l=a.getNext(),c=l.key,u=l.value,h=tI();u.forEach(f=>{if(!r.has(f)){const d=lI(n.get(f),s.get(f));d!==null&&h.set(f,d),r=r.add(f)}}),o.push(this.documentOverlayCache.saveOverlays(e,c,h))}return O.waitFor(o)}).next(()=>s)}recalculateAndSaveOverlaysForDocumentKeys(e,n){return this.remoteDocumentCache.getEntries(e,n).next(s=>this.recalculateAndSaveOverlays(e,s))}getDocumentsMatchingQuery(e,n,s,i){return function(o){return G.isDocumentKey(o.path)&&o.collectionGroup===null&&o.filters.length===0}(n)?this.getDocumentsMatchingDocumentQuery(e,n.path):dF(n)?this.getDocumentsMatchingCollectionGroupQuery(e,n,s,i):this.getDocumentsMatchingCollectionQuery(e,n,s,i)}getNextDocuments(e,n,s,i){return this.remoteDocumentCache.getAllFromCollectionGroup(e,n,s,i).next(r=>{const o=i-r.size>0?this.documentOverlayCache.getOverlaysForCollectionGroup(e,n,s.largestBatchId,i-r.size):O.resolve(Js());let a=-1,l=r;return o.next(c=>O.forEach(c,(u,h)=>(a<h.largestBatchId&&(a=h.largestBatchId),r.get(u)?O.resolve():this.remoteDocumentCache.getEntry(e,u).next(f=>{l=l.insert(u,f)}))).next(()=>this.populateOverlays(e,c,r)).next(()=>this.computeViews(e,l,c,le())).next(u=>({batchId:a,changes:eI(u)})))})}getDocumentsMatchingDocumentQuery(e,n){return this.getDocument(e,new G(n)).next(s=>{let i=ho();return s.isFoundDocument()&&(i=i.insert(s.key,s)),i})}getDocumentsMatchingCollectionGroupQuery(e,n,s,i){const r=n.collectionGroup;let o=ho();return this.indexManager.getCollectionParents(e,r).next(a=>O.forEach(a,l=>{const c=function(h,f){return new nu(f,null,h.explicitOrderBy.slice(),h.filters.slice(),h.limit,h.limitType,h.startAt,h.endAt)}(n,l.child(r));return this.getDocumentsMatchingCollectionQuery(e,c,s,i).next(u=>{u.forEach((h,f)=>{o=o.insert(h,f)})})}).next(()=>o))}getDocumentsMatchingCollectionQuery(e,n,s,i){let r;return this.documentOverlayCache.getOverlaysForCollection(e,n.path,s.largestBatchId).next(o=>(r=o,this.remoteDocumentCache.getDocumentsMatchingQuery(e,n,s,r,i))).next(o=>{r.forEach((l,c)=>{const u=c.getKey();o.get(u)===null&&(o=o.insert(u,gt.newInvalidDocument(u)))});let a=ho();return o.forEach((l,c)=>{const u=r.get(l);u!==void 0&&Po(u.mutation,c,pn.empty(),Ke.now()),ru(n,c)&&(a=a.insert(l,c))}),a})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class aU{constructor(e){this.serializer=e,this.ur=new Map,this.cr=new Map}getBundleMetadata(e,n){return O.resolve(this.ur.get(n))}saveBundleMetadata(e,n){return this.ur.set(n.id,function(i){return{id:i.id,version:i.version,createTime:Vn(i.createTime)}}(n)),O.resolve()}getNamedQuery(e,n){return O.resolve(this.cr.get(n))}saveNamedQuery(e,n){return this.cr.set(n.name,function(i){return{name:i.name,query:tU(i.bundledQuery),readTime:Vn(i.readTime)}}(n)),O.resolve()}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class lU{constructor(){this.overlays=new Ve(G.comparator),this.lr=new Map}getOverlay(e,n){return O.resolve(this.overlays.get(n))}getOverlays(e,n){const s=Js();return O.forEach(n,i=>this.getOverlay(e,i).next(r=>{r!==null&&s.set(i,r)})).next(()=>s)}saveOverlays(e,n,s){return s.forEach((i,r)=>{this.lt(e,n,r)}),O.resolve()}removeOverlaysForBatchId(e,n,s){const i=this.lr.get(s);return i!==void 0&&(i.forEach(r=>this.overlays=this.overlays.remove(r)),this.lr.delete(s)),O.resolve()}getOverlaysForCollection(e,n,s){const i=Js(),r=n.length+1,o=new G(n.child("")),a=this.overlays.getIteratorFrom(o);for(;a.hasNext();){const l=a.getNext().value,c=l.getKey();if(!n.isPrefixOf(c.path))break;c.path.length===r&&l.largestBatchId>s&&i.set(l.getKey(),l)}return O.resolve(i)}getOverlaysForCollectionGroup(e,n,s,i){let r=new Ve((c,u)=>c-u);const o=this.overlays.getIterator();for(;o.hasNext();){const c=o.getNext().value;if(c.getKey().getCollectionGroup()===n&&c.largestBatchId>s){let u=r.get(c.largestBatchId);u===null&&(u=Js(),r=r.insert(c.largestBatchId,u)),u.set(c.getKey(),c)}}const a=Js(),l=r.getIterator();for(;l.hasNext()&&(l.getNext().value.forEach((c,u)=>a.set(c,u)),!(a.size()>=i)););return O.resolve(a)}lt(e,n,s){const i=this.overlays.get(s.key);if(i!==null){const o=this.lr.get(i.largestBatchId).delete(s.key);this.lr.set(i.largestBatchId,o)}this.overlays=this.overlays.insert(s.key,new OF(n,s));let r=this.lr.get(n);r===void 0&&(r=le(),this.lr.set(n,r)),this.lr.set(n,r.add(s.key))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Dp{constructor(){this.hr=new ht(Je.Pr),this.Ir=new ht(Je.Tr)}isEmpty(){return this.hr.isEmpty()}addReference(e,n){const s=new Je(e,n);this.hr=this.hr.add(s),this.Ir=this.Ir.add(s)}Er(e,n){e.forEach(s=>this.addReference(s,n))}removeReference(e,n){this.dr(new Je(e,n))}Ar(e,n){e.forEach(s=>this.removeReference(s,n))}Rr(e){const n=new G(new Le([])),s=new Je(n,e),i=new Je(n,e+1),r=[];return this.Ir.forEachInRange([s,i],o=>{this.dr(o),r.push(o.key)}),r}Vr(){this.hr.forEach(e=>this.dr(e))}dr(e){this.hr=this.hr.delete(e),this.Ir=this.Ir.delete(e)}mr(e){const n=new G(new Le([])),s=new Je(n,e),i=new Je(n,e+1);let r=le();return this.Ir.forEachInRange([s,i],o=>{r=r.add(o.key)}),r}containsKey(e){const n=new Je(e,0),s=this.hr.firstAfterOrEqual(n);return s!==null&&e.isEqual(s.key)}}class Je{constructor(e,n){this.key=e,this.gr=n}static Pr(e,n){return G.comparator(e.key,n.key)||Ee(e.gr,n.gr)}static Tr(e,n){return Ee(e.gr,n.gr)||G.comparator(e.key,n.key)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class cU{constructor(e,n){this.indexManager=e,this.referenceDelegate=n,this.mutationQueue=[],this.pr=1,this.yr=new ht(Je.Pr)}checkEmpty(e){return O.resolve(this.mutationQueue.length===0)}addMutationBatch(e,n,s,i){const r=this.pr;this.pr++,this.mutationQueue.length>0&&this.mutationQueue[this.mutationQueue.length-1];const o=new NF(r,n,s,i);this.mutationQueue.push(o);for(const a of i)this.yr=this.yr.add(new Je(a.key,r)),this.indexManager.addToCollectionParentIndex(e,a.key.path.popLast());return O.resolve(o)}lookupMutationBatch(e,n){return O.resolve(this.wr(n))}getNextMutationBatchAfterBatchId(e,n){const s=n+1,i=this.Sr(s),r=i<0?0:i;return O.resolve(this.mutationQueue.length>r?this.mutationQueue[r]:null)}getHighestUnacknowledgedBatchId(){return O.resolve(this.mutationQueue.length===0?-1:this.pr-1)}getAllMutationBatches(e){return O.resolve(this.mutationQueue.slice())}getAllMutationBatchesAffectingDocumentKey(e,n){const s=new Je(n,0),i=new Je(n,Number.POSITIVE_INFINITY),r=[];return this.yr.forEachInRange([s,i],o=>{const a=this.wr(o.gr);r.push(a)}),O.resolve(r)}getAllMutationBatchesAffectingDocumentKeys(e,n){let s=new ht(Ee);return n.forEach(i=>{const r=new Je(i,0),o=new Je(i,Number.POSITIVE_INFINITY);this.yr.forEachInRange([r,o],a=>{s=s.add(a.gr)})}),O.resolve(this.br(s))}getAllMutationBatchesAffectingQuery(e,n){const s=n.path,i=s.length+1;let r=s;G.isDocumentKey(r)||(r=r.child(""));const o=new Je(new G(r),0);let a=new ht(Ee);return this.yr.forEachWhile(l=>{const c=l.key.path;return!!s.isPrefixOf(c)&&(c.length===i&&(a=a.add(l.gr)),!0)},o),O.resolve(this.br(a))}br(e){const n=[];return e.forEach(s=>{const i=this.wr(s);i!==null&&n.push(i)}),n}removeMutationBatch(e,n){ke(this.Dr(n.batchId,"removed")===0),this.mutationQueue.shift();let s=this.yr;return O.forEach(n.mutations,i=>{const r=new Je(i.key,n.batchId);return s=s.delete(r),this.referenceDelegate.markPotentiallyOrphaned(e,i.key)}).next(()=>{this.yr=s})}Fn(e){}containsKey(e,n){const s=new Je(n,0),i=this.yr.firstAfterOrEqual(s);return O.resolve(n.isEqual(i&&i.key))}performConsistencyCheck(e){return this.mutationQueue.length,O.resolve()}Dr(e,n){return this.Sr(e)}Sr(e){return this.mutationQueue.length===0?0:e-this.mutationQueue[0].batchId}wr(e){const n=this.Sr(e);return n<0||n>=this.mutationQueue.length?null:this.mutationQueue[n]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class uU{constructor(e){this.Cr=e,this.docs=function(){return new Ve(G.comparator)}(),this.size=0}setIndexManager(e){this.indexManager=e}addEntry(e,n){const s=n.key,i=this.docs.get(s),r=i?i.size:0,o=this.Cr(n);return this.docs=this.docs.insert(s,{document:n.mutableCopy(),size:o}),this.size+=o-r,this.indexManager.addToCollectionParentIndex(e,s.path.popLast())}removeEntry(e){const n=this.docs.get(e);n&&(this.docs=this.docs.remove(e),this.size-=n.size)}getEntry(e,n){const s=this.docs.get(n);return O.resolve(s?s.document.mutableCopy():gt.newInvalidDocument(n))}getEntries(e,n){let s=as();return n.forEach(i=>{const r=this.docs.get(i);s=s.insert(i,r?r.document.mutableCopy():gt.newInvalidDocument(i))}),O.resolve(s)}getDocumentsMatchingQuery(e,n,s,i){let r=as();const o=n.path,a=new G(o.child("")),l=this.docs.getIteratorFrom(a);for(;l.hasNext();){const{key:c,value:{document:u}}=l.getNext();if(!o.isPrefixOf(c.path))break;c.path.length>o.length+1||YV(GV(u),s)<=0||(i.has(u.key)||ru(n,u))&&(r=r.insert(u.key,u.mutableCopy()))}return O.resolve(r)}getAllFromCollectionGroup(e,n,s,i){X()}vr(e,n){return O.forEach(this.docs,s=>n(s))}newChangeBuffer(e){return new hU(this)}getSize(e){return O.resolve(this.size)}}class hU extends iU{constructor(e){super(),this._r=e}applyChanges(e){const n=[];return this.changes.forEach((s,i)=>{i.isValidDocument()?n.push(this._r.addEntry(e,i)):this._r.removeEntry(s)}),O.waitFor(n)}getFromCache(e,n){return this._r.getEntry(e,n)}getAllFromCache(e,n){return this._r.getEntries(e,n)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class fU{constructor(e){this.persistence=e,this.Fr=new Wr(n=>Rp(n),Sp),this.lastRemoteSnapshotVersion=ee.min(),this.highestTargetId=0,this.Mr=0,this.Or=new Dp,this.targetCount=0,this.Nr=Tr.On()}forEachTarget(e,n){return this.Fr.forEach((s,i)=>n(i)),O.resolve()}getLastRemoteSnapshotVersion(e){return O.resolve(this.lastRemoteSnapshotVersion)}getHighestSequenceNumber(e){return O.resolve(this.Mr)}allocateTargetId(e){return this.highestTargetId=this.Nr.next(),O.resolve(this.highestTargetId)}setTargetsMetadata(e,n,s){return s&&(this.lastRemoteSnapshotVersion=s),n>this.Mr&&(this.Mr=n),O.resolve()}kn(e){this.Fr.set(e.target,e);const n=e.targetId;n>this.highestTargetId&&(this.Nr=new Tr(n),this.highestTargetId=n),e.sequenceNumber>this.Mr&&(this.Mr=e.sequenceNumber)}addTargetData(e,n){return this.kn(n),this.targetCount+=1,O.resolve()}updateTargetData(e,n){return this.kn(n),O.resolve()}removeTargetData(e,n){return this.Fr.delete(n.target),this.Or.Rr(n.targetId),this.targetCount-=1,O.resolve()}removeTargets(e,n,s){let i=0;const r=[];return this.Fr.forEach((o,a)=>{a.sequenceNumber<=n&&s.get(a.targetId)===null&&(this.Fr.delete(o),r.push(this.removeMatchingKeysForTargetId(e,a.targetId)),i++)}),O.waitFor(r).next(()=>i)}getTargetCount(e){return O.resolve(this.targetCount)}getTargetData(e,n){const s=this.Fr.get(n)||null;return O.resolve(s)}addMatchingKeys(e,n,s){return this.Or.Er(n,s),O.resolve()}removeMatchingKeys(e,n,s){this.Or.Ar(n,s);const i=this.persistence.referenceDelegate,r=[];return i&&n.forEach(o=>{r.push(i.markPotentiallyOrphaned(e,o))}),O.waitFor(r)}removeMatchingKeysForTargetId(e,n){return this.Or.Rr(n),O.resolve()}getMatchingKeysForTargetId(e,n){const s=this.Or.mr(n);return O.resolve(s)}containsKey(e,n){return O.resolve(this.Or.containsKey(n))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class dU{constructor(e,n){this.Br={},this.overlays={},this.Lr=new Ap(0),this.kr=!1,this.kr=!0,this.referenceDelegate=e(this),this.qr=new fU(this),this.indexManager=new nU,this.remoteDocumentCache=function(i){return new uU(i)}(s=>this.referenceDelegate.Qr(s)),this.serializer=new eU(n),this.Kr=new aU(this.serializer)}start(){return Promise.resolve()}shutdown(){return this.kr=!1,Promise.resolve()}get started(){return this.kr}setDatabaseDeletedListener(){}setNetworkEnabled(){}getIndexManager(e){return this.indexManager}getDocumentOverlayCache(e){let n=this.overlays[e.toKey()];return n||(n=new lU,this.overlays[e.toKey()]=n),n}getMutationQueue(e,n){let s=this.Br[e.toKey()];return s||(s=new cU(n,this.referenceDelegate),this.Br[e.toKey()]=s),s}getTargetCache(){return this.qr}getRemoteDocumentCache(){return this.remoteDocumentCache}getBundleCache(){return this.Kr}runTransaction(e,n,s){H("MemoryPersistence","Starting transaction:",e);const i=new pU(this.Lr.next());return this.referenceDelegate.$r(),s(i).next(r=>this.referenceDelegate.Ur(i).next(()=>r)).toPromise().then(r=>(i.raiseOnCommittedEvent(),r))}Wr(e,n){return O.or(Object.values(this.Br).map(s=>()=>s.containsKey(e,n)))}}class pU extends XV{constructor(e){super(),this.currentSequenceNumber=e}}class kp{constructor(e){this.persistence=e,this.Gr=new Dp,this.zr=null}static jr(e){return new kp(e)}get Hr(){if(this.zr)return this.zr;throw X()}addReference(e,n,s){return this.Gr.addReference(s,n),this.Hr.delete(s.toString()),O.resolve()}removeReference(e,n,s){return this.Gr.removeReference(s,n),this.Hr.add(s.toString()),O.resolve()}markPotentiallyOrphaned(e,n){return this.Hr.add(n.toString()),O.resolve()}removeTarget(e,n){this.Gr.Rr(n.targetId).forEach(i=>this.Hr.add(i.toString()));const s=this.persistence.getTargetCache();return s.getMatchingKeysForTargetId(e,n.targetId).next(i=>{i.forEach(r=>this.Hr.add(r.toString()))}).next(()=>s.removeTargetData(e,n))}$r(){this.zr=new Set}Ur(e){const n=this.persistence.getRemoteDocumentCache().newChangeBuffer();return O.forEach(this.Hr,s=>{const i=G.fromPath(s);return this.Jr(e,i).next(r=>{r||n.removeEntry(i,ee.min())})}).next(()=>(this.zr=null,n.apply(e)))}updateLimboDocument(e,n){return this.Jr(e,n).next(s=>{s?this.Hr.delete(n.toString()):this.Hr.add(n.toString())})}Qr(e){return 0}Jr(e,n){return O.or([()=>O.resolve(this.Gr.containsKey(n)),()=>this.persistence.getTargetCache().containsKey(e,n),()=>this.persistence.Wr(e,n)])}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xp{constructor(e,n,s,i){this.targetId=e,this.fromCache=n,this.ki=s,this.qi=i}static Qi(e,n){let s=le(),i=le();for(const r of n.docChanges)switch(r.type){case 0:s=s.add(r.doc.key);break;case 1:i=i.add(r.doc.key)}return new xp(e,n.fromCache,s,i)}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _U{constructor(){this._documentReadCount=0}get documentReadCount(){return this._documentReadCount}incrementDocumentReadCount(e){this._documentReadCount+=e}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class mU{constructor(){this.Ki=!1,this.$i=!1,this.Ui=100,this.Wi=8}initialize(e,n){this.Gi=e,this.indexManager=n,this.Ki=!0}getDocumentsMatchingQuery(e,n,s,i){const r={result:null};return this.zi(e,n).next(o=>{r.result=o}).next(()=>{if(!r.result)return this.ji(e,n,i,s).next(o=>{r.result=o})}).next(()=>{if(r.result)return;const o=new _U;return this.Hi(e,n,o).next(a=>{if(r.result=a,this.$i)return this.Ji(e,n,o,a.size)})}).next(()=>r.result)}Ji(e,n,s,i){return s.documentReadCount<this.Ui?(no()<=ae.DEBUG&&H("QueryEngine","SDK will not create cache indexes for query:",Vi(n),"since it only creates cache indexes for collection contains","more than or equal to",this.Ui,"documents"),O.resolve()):(no()<=ae.DEBUG&&H("QueryEngine","Query:",Vi(n),"scans",s.documentReadCount,"local documents and returns",i,"documents as results."),s.documentReadCount>this.Wi*i?(no()<=ae.DEBUG&&H("QueryEngine","The SDK decides to create cache indexes for query:",Vi(n),"as using cache indexes may help improve performance."),this.indexManager.createTargetIndexes(e,Mn(n))):O.resolve())}zi(e,n){if(Jg(n))return O.resolve(null);let s=Mn(n);return this.indexManager.getIndexType(e,s).next(i=>i===0?null:(n.limit!==null&&i===1&&(n=Cf(n,null,"F"),s=Mn(n)),this.indexManager.getDocumentsMatchingTarget(e,s).next(r=>{const o=le(...r);return this.Gi.getDocuments(e,o).next(a=>this.indexManager.getMinOffset(e,s).next(l=>{const c=this.Yi(n,a);return this.Zi(n,c,o,l.readTime)?this.zi(e,Cf(n,null,"F")):this.Xi(e,c,n,l)}))})))}ji(e,n,s,i){return Jg(n)||i.isEqual(ee.min())?O.resolve(null):this.Gi.getDocuments(e,s).next(r=>{const o=this.Yi(n,r);return this.Zi(n,o,s,i)?O.resolve(null):(no()<=ae.DEBUG&&H("QueryEngine","Re-using previous result from %s to execute query: %s",i.toString(),Vi(n)),this.Xi(e,o,n,zV(i,-1)).next(a=>a))})}Yi(e,n){let s=new ht(JA(e));return n.forEach((i,r)=>{ru(e,r)&&(s=s.add(r))}),s}Zi(e,n,s,i){if(e.limit===null)return!1;if(s.size!==n.size)return!0;const r=e.limitType==="F"?n.last():n.first();return!!r&&(r.hasPendingWrites||r.version.compareTo(i)>0)}Hi(e,n,s){return no()<=ae.DEBUG&&H("QueryEngine","Using full collection scan to execute query:",Vi(n)),this.Gi.getDocumentsMatchingQuery(e,n,Os.min(),s)}Xi(e,n,s,i){return this.Gi.getDocumentsMatchingQuery(e,s,i).next(r=>(n.forEach(o=>{r=r.insert(o.key,o)}),r))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class gU{constructor(e,n,s,i){this.persistence=e,this.es=n,this.serializer=i,this.ts=new Ve(Ee),this.ns=new Wr(r=>Rp(r),Sp),this.rs=new Map,this.ss=e.getRemoteDocumentCache(),this.qr=e.getTargetCache(),this.Kr=e.getBundleCache(),this.os(s)}os(e){this.documentOverlayCache=this.persistence.getDocumentOverlayCache(e),this.indexManager=this.persistence.getIndexManager(e),this.mutationQueue=this.persistence.getMutationQueue(e,this.indexManager),this.localDocuments=new oU(this.ss,this.mutationQueue,this.documentOverlayCache,this.indexManager),this.ss.setIndexManager(this.indexManager),this.es.initialize(this.localDocuments,this.indexManager)}collectGarbage(e){return this.persistence.runTransaction("Collect garbage","readwrite-primary",n=>e.collect(n,this.ts))}}function yU(t,e,n,s){return new gU(t,e,n,s)}async function vI(t,e){const n=se(t);return await n.persistence.runTransaction("Handle user change","readonly",s=>{let i;return n.mutationQueue.getAllMutationBatches(s).next(r=>(i=r,n.os(e),n.mutationQueue.getAllMutationBatches(s))).next(r=>{const o=[],a=[];let l=le();for(const c of i){o.push(c.batchId);for(const u of c.mutations)l=l.add(u.key)}for(const c of r){a.push(c.batchId);for(const u of c.mutations)l=l.add(u.key)}return n.localDocuments.getDocuments(s,l).next(c=>({_s:c,removedBatchIds:o,addedBatchIds:a}))})})}function EU(t,e){const n=se(t);return n.persistence.runTransaction("Acknowledge batch","readwrite-primary",s=>{const i=e.batch.keys(),r=n.ss.newChangeBuffer({trackRemovals:!0});return function(a,l,c,u){const h=c.batch,f=h.keys();let d=O.resolve();return f.forEach(m=>{d=d.next(()=>u.getEntry(l,m)).next(g=>{const y=c.docVersions.get(m);ke(y!==null),g.version.compareTo(y)<0&&(h.applyToRemoteDocument(g,c),g.isValidDocument()&&(g.setReadTime(c.commitVersion),u.addEntry(g)))})}),d.next(()=>a.mutationQueue.removeMutationBatch(l,h))}(n,s,e,r).next(()=>r.apply(s)).next(()=>n.mutationQueue.performConsistencyCheck(s)).next(()=>n.documentOverlayCache.removeOverlaysForBatchId(s,i,e.batch.batchId)).next(()=>n.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(s,function(a){let l=le();for(let c=0;c<a.mutationResults.length;++c)a.mutationResults[c].transformResults.length>0&&(l=l.add(a.batch.mutations[c].key));return l}(e))).next(()=>n.localDocuments.getDocuments(s,i))})}function TI(t){const e=se(t);return e.persistence.runTransaction("Get last remote snapshot version","readonly",n=>e.qr.getLastRemoteSnapshotVersion(n))}function vU(t,e){const n=se(t),s=e.snapshotVersion;let i=n.ts;return n.persistence.runTransaction("Apply remote event","readwrite-primary",r=>{const o=n.ss.newChangeBuffer({trackRemovals:!0});i=n.ts;const a=[];e.targetChanges.forEach((u,h)=>{const f=i.get(h);if(!f)return;a.push(n.qr.removeMatchingKeys(r,u.removedDocuments,h).next(()=>n.qr.addMatchingKeys(r,u.addedDocuments,h)));let d=f.withSequenceNumber(r.currentSequenceNumber);e.targetMismatches.get(h)!==null?d=d.withResumeToken(wt.EMPTY_BYTE_STRING,ee.min()).withLastLimboFreeSnapshotVersion(ee.min()):u.resumeToken.approximateByteSize()>0&&(d=d.withResumeToken(u.resumeToken,s)),i=i.insert(h,d),function(g,y,T){return g.resumeToken.approximateByteSize()===0||y.snapshotVersion.toMicroseconds()-g.snapshotVersion.toMicroseconds()>=3e8?!0:T.addedDocuments.size+T.modifiedDocuments.size+T.removedDocuments.size>0}(f,d,u)&&a.push(n.qr.updateTargetData(r,d))});let l=as(),c=le();if(e.documentUpdates.forEach(u=>{e.resolvedLimboDocuments.has(u)&&a.push(n.persistence.referenceDelegate.updateLimboDocument(r,u))}),a.push(TU(r,o,e.documentUpdates).next(u=>{l=u.us,c=u.cs})),!s.isEqual(ee.min())){const u=n.qr.getLastRemoteSnapshotVersion(r).next(h=>n.qr.setTargetsMetadata(r,r.currentSequenceNumber,s));a.push(u)}return O.waitFor(a).next(()=>o.apply(r)).next(()=>n.localDocuments.getLocalViewOfDocuments(r,l,c)).next(()=>l)}).then(r=>(n.ts=i,r))}function TU(t,e,n){let s=le(),i=le();return n.forEach(r=>s=s.add(r)),e.getEntries(t,s).next(r=>{let o=as();return n.forEach((a,l)=>{const c=r.get(a);l.isFoundDocument()!==c.isFoundDocument()&&(i=i.add(a)),l.isNoDocument()&&l.version.isEqual(ee.min())?(e.removeEntry(a,l.readTime),o=o.insert(a,l)):!c.isValidDocument()||l.version.compareTo(c.version)>0||l.version.compareTo(c.version)===0&&c.hasPendingWrites?(e.addEntry(l),o=o.insert(a,l)):H("LocalStore","Ignoring outdated watch update for ",a,". Current version:",c.version," Watch version:",l.version)}),{us:o,cs:i}})}function wU(t,e){const n=se(t);return n.persistence.runTransaction("Get next mutation batch","readonly",s=>(e===void 0&&(e=-1),n.mutationQueue.getNextMutationBatchAfterBatchId(s,e)))}function AU(t,e){const n=se(t);return n.persistence.runTransaction("Allocate target","readwrite",s=>{let i;return n.qr.getTargetData(s,e).next(r=>r?(i=r,O.resolve(i)):n.qr.allocateTargetId(s).next(o=>(i=new Es(e,o,"TargetPurposeListen",s.currentSequenceNumber),n.qr.addTargetData(s,i).next(()=>i))))}).then(s=>{const i=n.ts.get(s.targetId);return(i===null||s.snapshotVersion.compareTo(i.snapshotVersion)>0)&&(n.ts=n.ts.insert(s.targetId,s),n.ns.set(e,s.targetId)),s})}async function Of(t,e,n){const s=se(t),i=s.ts.get(e),r=n?"readwrite":"readwrite-primary";try{n||await s.persistence.runTransaction("Release target",r,o=>s.persistence.referenceDelegate.removeTarget(o,i))}catch(o){if(!Sa(o))throw o;H("LocalStore",`Failed to update sequence numbers for target ${e}: ${o}`)}s.ts=s.ts.remove(e),s.ns.delete(i.target)}function cy(t,e,n){const s=se(t);let i=ee.min(),r=le();return s.persistence.runTransaction("Execute query","readwrite",o=>function(l,c,u){const h=se(l),f=h.ns.get(u);return f!==void 0?O.resolve(h.ts.get(f)):h.qr.getTargetData(c,u)}(s,o,Mn(e)).next(a=>{if(a)return i=a.lastLimboFreeSnapshotVersion,s.qr.getMatchingKeysForTargetId(o,a.targetId).next(l=>{r=l})}).next(()=>s.es.getDocumentsMatchingQuery(o,e,n?i:ee.min(),n?r:le())).next(a=>(IU(s,_F(e),a),{documents:a,ls:r})))}function IU(t,e,n){let s=t.rs.get(e)||ee.min();n.forEach((i,r)=>{r.readTime.compareTo(s)>0&&(s=r.readTime)}),t.rs.set(e,s)}class uy{constructor(){this.activeTargetIds=TF()}ds(e){this.activeTargetIds=this.activeTargetIds.add(e)}As(e){this.activeTargetIds=this.activeTargetIds.delete(e)}Es(){const e={activeTargetIds:this.activeTargetIds.toArray(),updateTimeMs:Date.now()};return JSON.stringify(e)}}class bU{constructor(){this.eo=new uy,this.no={},this.onlineStateHandler=null,this.sequenceNumberHandler=null}addPendingMutation(e){}updateMutationState(e,n,s){}addLocalQueryTarget(e){return this.eo.ds(e),this.no[e]||"not-current"}updateQueryState(e,n,s){this.no[e]=n}removeLocalQueryTarget(e){this.eo.As(e)}isLocalQueryTarget(e){return this.eo.activeTargetIds.has(e)}clearQueryState(e){delete this.no[e]}getAllActiveQueryTargets(){return this.eo.activeTargetIds}isActiveQueryTarget(e){return this.eo.activeTargetIds.has(e)}start(){return this.eo=new uy,Promise.resolve()}handleUserChange(e,n,s){}setOnlineState(e){}shutdown(){}writeSequenceNumber(e){}notifyBundleLoaded(e){}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class CU{ro(e){}shutdown(){}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class hy{constructor(){this.io=()=>this.so(),this.oo=()=>this._o(),this.ao=[],this.uo()}ro(e){this.ao.push(e)}shutdown(){window.removeEventListener("online",this.io),window.removeEventListener("offline",this.oo)}uo(){window.addEventListener("online",this.io),window.addEventListener("offline",this.oo)}so(){H("ConnectivityMonitor","Network connectivity changed: AVAILABLE");for(const e of this.ao)e(0)}_o(){H("ConnectivityMonitor","Network connectivity changed: UNAVAILABLE");for(const e of this.ao)e(1)}static D(){return typeof window<"u"&&window.addEventListener!==void 0&&window.removeEventListener!==void 0}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let il=null;function lh(){return il===null?il=function(){return 268435456+Math.round(2147483648*Math.random())}():il++,"0x"+il.toString(16)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const RU={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery",RunAggregationQuery:"runAggregationQuery"};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class SU{constructor(e){this.co=e.co,this.lo=e.lo}ho(e){this.Po=e}Io(e){this.To=e}onMessage(e){this.Eo=e}close(){this.lo()}send(e){this.co(e)}Ao(){this.Po()}Ro(e){this.To(e)}Vo(e){this.Eo(e)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const dt="WebChannelConnection";class PU extends class{constructor(n){this.databaseInfo=n,this.databaseId=n.databaseId;const s=n.ssl?"https":"http",i=encodeURIComponent(this.databaseId.projectId),r=encodeURIComponent(this.databaseId.database);this.mo=s+"://"+n.host,this.fo=`projects/${i}/databases/${r}`,this.po=this.databaseId.database==="(default)"?`project_id=${i}`:`project_id=${i}&database_id=${r}`}get yo(){return!1}wo(n,s,i,r,o){const a=lh(),l=this.So(n,s);H("RestConnection",`Sending RPC '${n}' ${a}:`,l,i);const c={"google-cloud-resource-prefix":this.fo,"x-goog-request-params":this.po};return this.bo(c,r,o),this.Do(n,l,c,i).then(u=>(H("RestConnection",`Received RPC '${n}' ${a}: `,u),u),u=>{throw gr("RestConnection",`RPC '${n}' ${a} failed with error: `,u,"url: ",l,"request:",i),u})}Co(n,s,i,r,o,a){return this.wo(n,s,i,r,o)}bo(n,s,i){n["X-Goog-Api-Client"]=function(){return"gl-js/ fire/"+Hr}(),n["Content-Type"]="text/plain",this.databaseInfo.appId&&(n["X-Firebase-GMPID"]=this.databaseInfo.appId),s&&s.headers.forEach((r,o)=>n[o]=r),i&&i.headers.forEach((r,o)=>n[o]=r)}So(n,s){const i=RU[n];return`${this.mo}/v1/${s}:${i}`}}{constructor(e){super(e),this.forceLongPolling=e.forceLongPolling,this.autoDetectLongPolling=e.autoDetectLongPolling,this.useFetchStreams=e.useFetchStreams,this.longPollingOptions=e.longPollingOptions}Do(e,n,s,i){const r=lh();return new Promise((o,a)=>{const l=new MV;l.setWithCredentials(!0),l.listenOnce(kV.COMPLETE,()=>{try{switch(l.getLastErrorCode()){case oh.NO_ERROR:const u=l.getResponseJson();H(dt,`XHR for RPC '${e}' ${r} received:`,JSON.stringify(u)),o(u);break;case oh.TIMEOUT:H(dt,`RPC '${e}' ${r} timed out`),a(new K(N.DEADLINE_EXCEEDED,"Request time out"));break;case oh.HTTP_ERROR:const h=l.getStatus();if(H(dt,`RPC '${e}' ${r} failed with status:`,h,"response text:",l.getResponseText()),h>0){let f=l.getResponseJson();Array.isArray(f)&&(f=f[0]);const d=f==null?void 0:f.error;if(d&&d.status&&d.message){const m=function(y){const T=y.toLowerCase().replace(/_/g,"-");return Object.values(N).indexOf(T)>=0?T:N.UNKNOWN}(d.status);a(new K(m,d.message))}else a(new K(N.UNKNOWN,"Server responded with status "+l.getStatus()))}else a(new K(N.UNAVAILABLE,"Connection failed."));break;default:X()}}finally{H(dt,`RPC '${e}' ${r} completed.`)}});const c=JSON.stringify(i);H(dt,`RPC '${e}' ${r} sending request:`,i),l.send(n,"POST",c,s,15)})}vo(e,n,s){const i=lh(),r=[this.mo,"/","google.firestore.v1.Firestore","/",e,"/channel"],o=OV(),a=DV(),l={httpSessionIdParam:"gsessionid",initMessageHeaders:{},messageUrlParams:{database:`projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`},sendRawJson:!0,supportsCrossDomainXhr:!0,internalChannelParams:{forwardChannelRequestTimeoutMs:6e5},forceLongPolling:this.forceLongPolling,detectBufferingProxy:this.autoDetectLongPolling},c=this.longPollingOptions.timeoutSeconds;c!==void 0&&(l.longPollingTimeout=Math.round(1e3*c)),this.useFetchStreams&&(l.xmlHttpFactory=new LV({})),this.bo(l.initMessageHeaders,n,s),l.encodeInitMessageHeaders=!0;const u=r.join("");H(dt,`Creating RPC '${e}' stream ${i}: ${u}`,l);const h=o.createWebChannel(u,l);let f=!1,d=!1;const m=new SU({co:y=>{d?H(dt,`Not sending because RPC '${e}' stream ${i} is closed:`,y):(f||(H(dt,`Opening RPC '${e}' stream ${i} transport.`),h.open(),f=!0),H(dt,`RPC '${e}' stream ${i} sending:`,y),h.send(y))},lo:()=>h.close()}),g=(y,T,I)=>{y.listen(T,b=>{try{I(b)}catch(v){setTimeout(()=>{throw v},0)}})};return g(h,tl.EventType.OPEN,()=>{d||H(dt,`RPC '${e}' stream ${i} transport opened.`)}),g(h,tl.EventType.CLOSE,()=>{d||(d=!0,H(dt,`RPC '${e}' stream ${i} transport closed`),m.Ro())}),g(h,tl.EventType.ERROR,y=>{d||(d=!0,gr(dt,`RPC '${e}' stream ${i} transport errored:`,y),m.Ro(new K(N.UNAVAILABLE,"The operation could not be completed")))}),g(h,tl.EventType.MESSAGE,y=>{var T;if(!d){const I=y.data[0];ke(!!I);const b=I,v=b.error||((T=b[0])===null||T===void 0?void 0:T.error);if(v){H(dt,`RPC '${e}' stream ${i} received error:`,v);const U=v.status;let $=function(_e){const oe=We[_e];if(oe!==void 0)return hI(oe)}(U),Y=v.message;$===void 0&&($=N.INTERNAL,Y="Unknown error status: "+U+" with message "+v.message),d=!0,m.Ro(new K($,Y)),h.close()}else H(dt,`RPC '${e}' stream ${i} received:`,I),m.Vo(I)}}),g(a,xV.STAT_EVENT,y=>{y.stat===Hg.PROXY?H(dt,`RPC '${e}' stream ${i} detected buffering proxy`):y.stat===Hg.NOPROXY&&H(dt,`RPC '${e}' stream ${i} detected no buffering proxy`)}),setTimeout(()=>{m.Ao()},0),m}}function ch(){return typeof document<"u"?document:null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function cu(t){return new $F(t,!0)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class wI{constructor(e,n,s=1e3,i=1.5,r=6e4){this.si=e,this.timerId=n,this.Fo=s,this.Mo=i,this.xo=r,this.Oo=0,this.No=null,this.Bo=Date.now(),this.reset()}reset(){this.Oo=0}Lo(){this.Oo=this.xo}ko(e){this.cancel();const n=Math.floor(this.Oo+this.qo()),s=Math.max(0,Date.now()-this.Bo),i=Math.max(0,n-s);i>0&&H("ExponentialBackoff",`Backing off for ${i} ms (base delay: ${this.Oo} ms, delay with jitter: ${n} ms, last attempt: ${s} ms ago)`),this.No=this.si.enqueueAfterDelay(this.timerId,i,()=>(this.Bo=Date.now(),e())),this.Oo*=this.Mo,this.Oo<this.Fo&&(this.Oo=this.Fo),this.Oo>this.xo&&(this.Oo=this.xo)}Qo(){this.No!==null&&(this.No.skipDelay(),this.No=null)}cancel(){this.No!==null&&(this.No.cancel(),this.No=null)}qo(){return(Math.random()-.5)*this.Oo}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class AI{constructor(e,n,s,i,r,o,a,l){this.si=e,this.Ko=s,this.$o=i,this.connection=r,this.authCredentialsProvider=o,this.appCheckCredentialsProvider=a,this.listener=l,this.state=0,this.Uo=0,this.Wo=null,this.Go=null,this.stream=null,this.zo=new wI(e,n)}jo(){return this.state===1||this.state===5||this.Ho()}Ho(){return this.state===2||this.state===3}start(){this.state!==4?this.auth():this.Jo()}async stop(){this.jo()&&await this.close(0)}Yo(){this.state=0,this.zo.reset()}Zo(){this.Ho()&&this.Wo===null&&(this.Wo=this.si.enqueueAfterDelay(this.Ko,6e4,()=>this.Xo()))}e_(e){this.t_(),this.stream.send(e)}async Xo(){if(this.Ho())return this.close(0)}t_(){this.Wo&&(this.Wo.cancel(),this.Wo=null)}n_(){this.Go&&(this.Go.cancel(),this.Go=null)}async close(e,n){this.t_(),this.n_(),this.zo.cancel(),this.Uo++,e!==4?this.zo.reset():n&&n.code===N.RESOURCE_EXHAUSTED?(os(n.toString()),os("Using maximum backoff delay to prevent overloading the backend."),this.zo.Lo()):n&&n.code===N.UNAUTHENTICATED&&this.state!==3&&(this.authCredentialsProvider.invalidateToken(),this.appCheckCredentialsProvider.invalidateToken()),this.stream!==null&&(this.r_(),this.stream.close(),this.stream=null),this.state=e,await this.listener.Io(n)}r_(){}auth(){this.state=1;const e=this.i_(this.Uo),n=this.Uo;Promise.all([this.authCredentialsProvider.getToken(),this.appCheckCredentialsProvider.getToken()]).then(([s,i])=>{this.Uo===n&&this.s_(s,i)},s=>{e(()=>{const i=new K(N.UNKNOWN,"Fetching auth token failed: "+s.message);return this.o_(i)})})}s_(e,n){const s=this.i_(this.Uo);this.stream=this.__(e,n),this.stream.ho(()=>{s(()=>(this.state=2,this.Go=this.si.enqueueAfterDelay(this.$o,1e4,()=>(this.Ho()&&(this.state=3),Promise.resolve())),this.listener.ho()))}),this.stream.Io(i=>{s(()=>this.o_(i))}),this.stream.onMessage(i=>{s(()=>this.onMessage(i))})}Jo(){this.state=5,this.zo.ko(async()=>{this.state=0,this.start()})}o_(e){return H("PersistentStream",`close with error: ${e}`),this.stream=null,this.close(4,e)}i_(e){return n=>{this.si.enqueueAndForget(()=>this.Uo===e?n():(H("PersistentStream","stream callback skipped by getCloseGuardedDispatcher."),Promise.resolve()))}}}class NU extends AI{constructor(e,n,s,i,r,o){super(e,"listen_stream_connection_backoff","listen_stream_idle","health_check_timeout",n,s,i,o),this.serializer=r}__(e,n){return this.connection.vo("Listen",e,n)}onMessage(e){this.zo.reset();const n=jF(this.serializer,e),s=function(r){if(!("targetChange"in r))return ee.min();const o=r.targetChange;return o.targetIds&&o.targetIds.length?ee.min():o.readTime?Vn(o.readTime):ee.min()}(e);return this.listener.a_(n,s)}u_(e){const n={};n.database=Nf(this.serializer),n.addTarget=function(r,o){let a;const l=o.target;if(a=bf(l)?{documents:KF(r,l)}:{query:zF(r,l)},a.targetId=o.targetId,o.resumeToken.approximateByteSize()>0){a.resumeToken=pI(r,o.resumeToken);const c=Rf(r,o.expectedCount);c!==null&&(a.expectedCount=c)}else if(o.snapshotVersion.compareTo(ee.min())>0){a.readTime=ic(r,o.snapshotVersion.toTimestamp());const c=Rf(r,o.expectedCount);c!==null&&(a.expectedCount=c)}return a}(this.serializer,e);const s=YF(this.serializer,e);s&&(n.labels=s),this.e_(n)}c_(e){const n={};n.database=Nf(this.serializer),n.removeTarget=e,this.e_(n)}}class OU extends AI{constructor(e,n,s,i,r,o){super(e,"write_stream_connection_backoff","write_stream_idle","health_check_timeout",n,s,i,o),this.serializer=r,this.l_=!1}get h_(){return this.l_}start(){this.l_=!1,this.lastStreamToken=void 0,super.start()}r_(){this.l_&&this.P_([])}__(e,n){return this.connection.vo("Write",e,n)}onMessage(e){if(ke(!!e.streamToken),this.lastStreamToken=e.streamToken,this.l_){this.zo.reset();const n=qF(e.writeResults,e.commitTime),s=Vn(e.commitTime);return this.listener.I_(s,n)}return ke(!e.writeResults||e.writeResults.length===0),this.l_=!0,this.listener.T_()}E_(){const e={};e.database=Nf(this.serializer),this.e_(e)}P_(e){const n={streamToken:this.lastStreamToken,writes:e.map(s=>WF(this.serializer,s))};this.e_(n)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class DU extends class{}{constructor(e,n,s,i){super(),this.authCredentials=e,this.appCheckCredentials=n,this.connection=s,this.serializer=i,this.d_=!1}A_(){if(this.d_)throw new K(N.FAILED_PRECONDITION,"The client has already been terminated.")}wo(e,n,s){return this.A_(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([i,r])=>this.connection.wo(e,n,s,i,r)).catch(i=>{throw i.name==="FirebaseError"?(i.code===N.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),i):new K(N.UNKNOWN,i.toString())})}Co(e,n,s,i){return this.A_(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([r,o])=>this.connection.Co(e,n,s,r,o,i)).catch(r=>{throw r.name==="FirebaseError"?(r.code===N.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),r):new K(N.UNKNOWN,r.toString())})}terminate(){this.d_=!0}}class kU{constructor(e,n){this.asyncQueue=e,this.onlineStateHandler=n,this.state="Unknown",this.V_=0,this.m_=null,this.f_=!0}g_(){this.V_===0&&(this.p_("Unknown"),this.m_=this.asyncQueue.enqueueAfterDelay("online_state_timeout",1e4,()=>(this.m_=null,this.y_("Backend didn't respond within 10 seconds."),this.p_("Offline"),Promise.resolve())))}w_(e){this.state==="Online"?this.p_("Unknown"):(this.V_++,this.V_>=1&&(this.S_(),this.y_(`Connection failed 1 times. Most recent error: ${e.toString()}`),this.p_("Offline")))}set(e){this.S_(),this.V_=0,e==="Online"&&(this.f_=!1),this.p_(e)}p_(e){e!==this.state&&(this.state=e,this.onlineStateHandler(e))}y_(e){const n=`Could not reach Cloud Firestore backend. ${e}
This typically indicates that your device does not have a healthy Internet connection at the moment. The client will operate in offline mode until it is able to successfully connect to the backend.`;this.f_?(os(n),this.f_=!1):H("OnlineStateTracker",n)}S_(){this.m_!==null&&(this.m_.cancel(),this.m_=null)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xU{constructor(e,n,s,i,r){this.localStore=e,this.datastore=n,this.asyncQueue=s,this.remoteSyncer={},this.b_=[],this.D_=new Map,this.C_=new Set,this.v_=[],this.F_=r,this.F_.ro(o=>{s.enqueueAndForget(async()=>{Ci(this)&&(H("RemoteStore","Restarting streams for network reachability change."),await async function(l){const c=se(l);c.C_.add(4),await Oa(c),c.M_.set("Unknown"),c.C_.delete(4),await uu(c)}(this))})}),this.M_=new kU(s,i)}}async function uu(t){if(Ci(t))for(const e of t.v_)await e(!0)}async function Oa(t){for(const e of t.v_)await e(!1)}function II(t,e){const n=se(t);n.D_.has(e.targetId)||(n.D_.set(e.targetId,e),Vp(n)?Mp(n):qr(n).Ho()&&Lp(n,e))}function bI(t,e){const n=se(t),s=qr(n);n.D_.delete(e),s.Ho()&&CI(n,e),n.D_.size===0&&(s.Ho()?s.Zo():Ci(n)&&n.M_.set("Unknown"))}function Lp(t,e){if(t.x_.Oe(e.targetId),e.resumeToken.approximateByteSize()>0||e.snapshotVersion.compareTo(ee.min())>0){const n=t.remoteSyncer.getRemoteKeysForTarget(e.targetId).size;e=e.withExpectedCount(n)}qr(t).u_(e)}function CI(t,e){t.x_.Oe(e),qr(t).c_(e)}function Mp(t){t.x_=new MF({getRemoteKeysForTarget:e=>t.remoteSyncer.getRemoteKeysForTarget(e),_t:e=>t.D_.get(e)||null,nt:()=>t.datastore.serializer.databaseId}),qr(t).start(),t.M_.g_()}function Vp(t){return Ci(t)&&!qr(t).jo()&&t.D_.size>0}function Ci(t){return se(t).C_.size===0}function RI(t){t.x_=void 0}async function LU(t){t.D_.forEach((e,n)=>{Lp(t,e)})}async function MU(t,e){RI(t),Vp(t)?(t.M_.w_(e),Mp(t)):t.M_.set("Unknown")}async function VU(t,e,n){if(t.M_.set("Online"),e instanceof dI&&e.state===2&&e.cause)try{await async function(i,r){const o=r.cause;for(const a of r.targetIds)i.D_.has(a)&&(await i.remoteSyncer.rejectListen(a,o),i.D_.delete(a),i.x_.removeTarget(a))}(t,e)}catch(s){H("RemoteStore","Failed to remove targets %s: %s ",e.targetIds.join(","),s),await rc(t,s)}else if(e instanceof El?t.x_.$e(e):e instanceof fI?t.x_.Je(e):t.x_.Ge(e),!n.isEqual(ee.min()))try{const s=await TI(t.localStore);n.compareTo(s)>=0&&await function(r,o){const a=r.x_.it(o);return a.targetChanges.forEach((l,c)=>{if(l.resumeToken.approximateByteSize()>0){const u=r.D_.get(c);u&&r.D_.set(c,u.withResumeToken(l.resumeToken,o))}}),a.targetMismatches.forEach((l,c)=>{const u=r.D_.get(l);if(!u)return;r.D_.set(l,u.withResumeToken(wt.EMPTY_BYTE_STRING,u.snapshotVersion)),CI(r,l);const h=new Es(u.target,l,c,u.sequenceNumber);Lp(r,h)}),r.remoteSyncer.applyRemoteEvent(a)}(t,n)}catch(s){H("RemoteStore","Failed to raise snapshot:",s),await rc(t,s)}}async function rc(t,e,n){if(!Sa(e))throw e;t.C_.add(1),await Oa(t),t.M_.set("Offline"),n||(n=()=>TI(t.localStore)),t.asyncQueue.enqueueRetryable(async()=>{H("RemoteStore","Retrying IndexedDB access"),await n(),t.C_.delete(1),await uu(t)})}function SI(t,e){return e().catch(n=>rc(t,n,e))}async function hu(t){const e=se(t),n=ks(e);let s=e.b_.length>0?e.b_[e.b_.length-1].batchId:-1;for(;FU(e);)try{const i=await wU(e.localStore,s);if(i===null){e.b_.length===0&&n.Zo();break}s=i.batchId,UU(e,i)}catch(i){await rc(e,i)}PI(e)&&NI(e)}function FU(t){return Ci(t)&&t.b_.length<10}function UU(t,e){t.b_.push(e);const n=ks(t);n.Ho()&&n.h_&&n.P_(e.mutations)}function PI(t){return Ci(t)&&!ks(t).jo()&&t.b_.length>0}function NI(t){ks(t).start()}async function $U(t){ks(t).E_()}async function BU(t){const e=ks(t);for(const n of t.b_)e.P_(n.mutations)}async function HU(t,e,n){const s=t.b_.shift(),i=Pp.from(s,e,n);await SI(t,()=>t.remoteSyncer.applySuccessfulWrite(i)),await hu(t)}async function jU(t,e){e&&ks(t).h_&&await async function(s,i){if(function(o){return kF(o)&&o!==N.ABORTED}(i.code)){const r=s.b_.shift();ks(s).Yo(),await SI(s,()=>s.remoteSyncer.rejectFailedWrite(r.batchId,i)),await hu(s)}}(t,e),PI(t)&&NI(t)}async function fy(t,e){const n=se(t);n.asyncQueue.verifyOperationInProgress(),H("RemoteStore","RemoteStore received new credentials");const s=Ci(n);n.C_.add(3),await Oa(n),s&&n.M_.set("Unknown"),await n.remoteSyncer.handleCredentialChange(e),n.C_.delete(3),await uu(n)}async function WU(t,e){const n=se(t);e?(n.C_.delete(2),await uu(n)):e||(n.C_.add(2),await Oa(n),n.M_.set("Unknown"))}function qr(t){return t.O_||(t.O_=function(n,s,i){const r=se(n);return r.A_(),new NU(s,r.connection,r.authCredentials,r.appCheckCredentials,r.serializer,i)}(t.datastore,t.asyncQueue,{ho:LU.bind(null,t),Io:MU.bind(null,t),a_:VU.bind(null,t)}),t.v_.push(async e=>{e?(t.O_.Yo(),Vp(t)?Mp(t):t.M_.set("Unknown")):(await t.O_.stop(),RI(t))})),t.O_}function ks(t){return t.N_||(t.N_=function(n,s,i){const r=se(n);return r.A_(),new OU(s,r.connection,r.authCredentials,r.appCheckCredentials,r.serializer,i)}(t.datastore,t.asyncQueue,{ho:$U.bind(null,t),Io:jU.bind(null,t),T_:BU.bind(null,t),I_:HU.bind(null,t)}),t.v_.push(async e=>{e?(t.N_.Yo(),await hu(t)):(await t.N_.stop(),t.b_.length>0&&(H("RemoteStore",`Stopping write stream with ${t.b_.length} pending writes`),t.b_=[]))})),t.N_}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Fp{constructor(e,n,s,i,r){this.asyncQueue=e,this.timerId=n,this.targetTimeMs=s,this.op=i,this.removalCallback=r,this.deferred=new ns,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch(o=>{})}get promise(){return this.deferred.promise}static createAndSchedule(e,n,s,i,r){const o=Date.now()+s,a=new Fp(e,n,o,i,r);return a.start(s),a}start(e){this.timerHandle=setTimeout(()=>this.handleDelayElapsed(),e)}skipDelay(){return this.handleDelayElapsed()}cancel(e){this.timerHandle!==null&&(this.clearTimeout(),this.deferred.reject(new K(N.CANCELLED,"Operation cancelled"+(e?": "+e:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget(()=>this.timerHandle!==null?(this.clearTimeout(),this.op().then(e=>this.deferred.resolve(e))):Promise.resolve())}clearTimeout(){this.timerHandle!==null&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}function Up(t,e){if(os("AsyncQueue",`${e}: ${t}`),Sa(t))return new K(N.UNAVAILABLE,`${e}: ${t}`);throw t}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class nr{constructor(e){this.comparator=e?(n,s)=>e(n,s)||G.comparator(n.key,s.key):(n,s)=>G.comparator(n.key,s.key),this.keyedMap=ho(),this.sortedSet=new Ve(this.comparator)}static emptySet(e){return new nr(e.comparator)}has(e){return this.keyedMap.get(e)!=null}get(e){return this.keyedMap.get(e)}first(){return this.sortedSet.minKey()}last(){return this.sortedSet.maxKey()}isEmpty(){return this.sortedSet.isEmpty()}indexOf(e){const n=this.keyedMap.get(e);return n?this.sortedSet.indexOf(n):-1}get size(){return this.sortedSet.size}forEach(e){this.sortedSet.inorderTraversal((n,s)=>(e(n),!1))}add(e){const n=this.delete(e.key);return n.copy(n.keyedMap.insert(e.key,e),n.sortedSet.insert(e,null))}delete(e){const n=this.get(e);return n?this.copy(this.keyedMap.remove(e),this.sortedSet.remove(n)):this}isEqual(e){if(!(e instanceof nr)||this.size!==e.size)return!1;const n=this.sortedSet.getIterator(),s=e.sortedSet.getIterator();for(;n.hasNext();){const i=n.getNext().key,r=s.getNext().key;if(!i.isEqual(r))return!1}return!0}toString(){const e=[];return this.forEach(n=>{e.push(n.toString())}),e.length===0?"DocumentSet ()":`DocumentSet (
  `+e.join(`  
`)+`
)`}copy(e,n){const s=new nr;return s.comparator=this.comparator,s.keyedMap=e,s.sortedSet=n,s}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class dy{constructor(){this.B_=new Ve(G.comparator)}track(e){const n=e.doc.key,s=this.B_.get(n);s?e.type!==0&&s.type===3?this.B_=this.B_.insert(n,e):e.type===3&&s.type!==1?this.B_=this.B_.insert(n,{type:s.type,doc:e.doc}):e.type===2&&s.type===2?this.B_=this.B_.insert(n,{type:2,doc:e.doc}):e.type===2&&s.type===0?this.B_=this.B_.insert(n,{type:0,doc:e.doc}):e.type===1&&s.type===0?this.B_=this.B_.remove(n):e.type===1&&s.type===2?this.B_=this.B_.insert(n,{type:1,doc:s.doc}):e.type===0&&s.type===1?this.B_=this.B_.insert(n,{type:2,doc:e.doc}):X():this.B_=this.B_.insert(n,e)}L_(){const e=[];return this.B_.inorderTraversal((n,s)=>{e.push(s)}),e}}class wr{constructor(e,n,s,i,r,o,a,l,c){this.query=e,this.docs=n,this.oldDocs=s,this.docChanges=i,this.mutatedKeys=r,this.fromCache=o,this.syncStateChanged=a,this.excludesMetadataChanges=l,this.hasCachedResults=c}static fromInitialDocuments(e,n,s,i,r){const o=[];return n.forEach(a=>{o.push({type:0,doc:a})}),new wr(e,n,nr.emptySet(n),o,s,i,!0,!1,r)}get hasPendingWrites(){return!this.mutatedKeys.isEmpty()}isEqual(e){if(!(this.fromCache===e.fromCache&&this.hasCachedResults===e.hasCachedResults&&this.syncStateChanged===e.syncStateChanged&&this.mutatedKeys.isEqual(e.mutatedKeys)&&iu(this.query,e.query)&&this.docs.isEqual(e.docs)&&this.oldDocs.isEqual(e.oldDocs)))return!1;const n=this.docChanges,s=e.docChanges;if(n.length!==s.length)return!1;for(let i=0;i<n.length;i++)if(n[i].type!==s[i].type||!n[i].doc.isEqual(s[i].doc))return!1;return!0}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class qU{constructor(){this.k_=void 0,this.listeners=[]}}class KU{constructor(){this.queries=new Wr(e=>XA(e),iu),this.onlineState="Unknown",this.q_=new Set}}async function $p(t,e){const n=se(t),s=e.query;let i=!1,r=n.queries.get(s);if(r||(i=!0,r=new qU),i)try{r.k_=await n.onListen(s)}catch(o){const a=Up(o,`Initialization of query '${Vi(e.query)}' failed`);return void e.onError(a)}n.queries.set(s,r),r.listeners.push(e),e.Q_(n.onlineState),r.k_&&e.K_(r.k_)&&Hp(n)}async function Bp(t,e){const n=se(t),s=e.query;let i=!1;const r=n.queries.get(s);if(r){const o=r.listeners.indexOf(e);o>=0&&(r.listeners.splice(o,1),i=r.listeners.length===0)}if(i)return n.queries.delete(s),n.onUnlisten(s)}function zU(t,e){const n=se(t);let s=!1;for(const i of e){const r=i.query,o=n.queries.get(r);if(o){for(const a of o.listeners)a.K_(i)&&(s=!0);o.k_=i}}s&&Hp(n)}function GU(t,e,n){const s=se(t),i=s.queries.get(e);if(i)for(const r of i.listeners)r.onError(n);s.queries.delete(e)}function Hp(t){t.q_.forEach(e=>{e.next()})}class jp{constructor(e,n,s){this.query=e,this.U_=n,this.W_=!1,this.G_=null,this.onlineState="Unknown",this.options=s||{}}K_(e){if(!this.options.includeMetadataChanges){const s=[];for(const i of e.docChanges)i.type!==3&&s.push(i);e=new wr(e.query,e.docs,e.oldDocs,s,e.mutatedKeys,e.fromCache,e.syncStateChanged,!0,e.hasCachedResults)}let n=!1;return this.W_?this.z_(e)&&(this.U_.next(e),n=!0):this.j_(e,this.onlineState)&&(this.H_(e),n=!0),this.G_=e,n}onError(e){this.U_.error(e)}Q_(e){this.onlineState=e;let n=!1;return this.G_&&!this.W_&&this.j_(this.G_,e)&&(this.H_(this.G_),n=!0),n}j_(e,n){if(!e.fromCache)return!0;const s=n!=="Offline";return(!this.options.J_||!s)&&(!e.docs.isEmpty()||e.hasCachedResults||n==="Offline")}z_(e){if(e.docChanges.length>0)return!0;const n=this.G_&&this.G_.hasPendingWrites!==e.hasPendingWrites;return!(!e.syncStateChanged&&!n)&&this.options.includeMetadataChanges===!0}H_(e){e=wr.fromInitialDocuments(e.query,e.docs,e.mutatedKeys,e.fromCache,e.hasCachedResults),this.W_=!0,this.U_.next(e)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class OI{constructor(e){this.key=e}}class DI{constructor(e){this.key=e}}class YU{constructor(e,n){this.query=e,this.ia=n,this.sa=null,this.hasCachedResults=!1,this.current=!1,this.oa=le(),this.mutatedKeys=le(),this._a=JA(e),this.aa=new nr(this._a)}get ua(){return this.ia}ca(e,n){const s=n?n.la:new dy,i=n?n.aa:this.aa;let r=n?n.mutatedKeys:this.mutatedKeys,o=i,a=!1;const l=this.query.limitType==="F"&&i.size===this.query.limit?i.last():null,c=this.query.limitType==="L"&&i.size===this.query.limit?i.first():null;if(e.inorderTraversal((u,h)=>{const f=i.get(u),d=ru(this.query,h)?h:null,m=!!f&&this.mutatedKeys.has(f.key),g=!!d&&(d.hasLocalMutations||this.mutatedKeys.has(d.key)&&d.hasCommittedMutations);let y=!1;f&&d?f.data.isEqual(d.data)?m!==g&&(s.track({type:3,doc:d}),y=!0):this.ha(f,d)||(s.track({type:2,doc:d}),y=!0,(l&&this._a(d,l)>0||c&&this._a(d,c)<0)&&(a=!0)):!f&&d?(s.track({type:0,doc:d}),y=!0):f&&!d&&(s.track({type:1,doc:f}),y=!0,(l||c)&&(a=!0)),y&&(d?(o=o.add(d),r=g?r.add(u):r.delete(u)):(o=o.delete(u),r=r.delete(u)))}),this.query.limit!==null)for(;o.size>this.query.limit;){const u=this.query.limitType==="F"?o.last():o.first();o=o.delete(u.key),r=r.delete(u.key),s.track({type:1,doc:u})}return{aa:o,la:s,Zi:a,mutatedKeys:r}}ha(e,n){return e.hasLocalMutations&&n.hasCommittedMutations&&!n.hasLocalMutations}applyChanges(e,n,s){const i=this.aa;this.aa=e.aa,this.mutatedKeys=e.mutatedKeys;const r=e.la.L_();r.sort((c,u)=>function(f,d){const m=g=>{switch(g){case 0:return 1;case 2:case 3:return 2;case 1:return 0;default:return X()}};return m(f)-m(d)}(c.type,u.type)||this._a(c.doc,u.doc)),this.Pa(s);const o=n?this.Ia():[],a=this.oa.size===0&&this.current?1:0,l=a!==this.sa;return this.sa=a,r.length!==0||l?{snapshot:new wr(this.query,e.aa,i,r,e.mutatedKeys,a===0,l,!1,!!s&&s.resumeToken.approximateByteSize()>0),Ta:o}:{Ta:o}}Q_(e){return this.current&&e==="Offline"?(this.current=!1,this.applyChanges({aa:this.aa,la:new dy,mutatedKeys:this.mutatedKeys,Zi:!1},!1)):{Ta:[]}}Ea(e){return!this.ia.has(e)&&!!this.aa.has(e)&&!this.aa.get(e).hasLocalMutations}Pa(e){e&&(e.addedDocuments.forEach(n=>this.ia=this.ia.add(n)),e.modifiedDocuments.forEach(n=>{}),e.removedDocuments.forEach(n=>this.ia=this.ia.delete(n)),this.current=e.current)}Ia(){if(!this.current)return[];const e=this.oa;this.oa=le(),this.aa.forEach(s=>{this.Ea(s.key)&&(this.oa=this.oa.add(s.key))});const n=[];return e.forEach(s=>{this.oa.has(s)||n.push(new DI(s))}),this.oa.forEach(s=>{e.has(s)||n.push(new OI(s))}),n}da(e){this.ia=e.ls,this.oa=le();const n=this.ca(e.documents);return this.applyChanges(n,!0)}Aa(){return wr.fromInitialDocuments(this.query,this.aa,this.mutatedKeys,this.sa===0,this.hasCachedResults)}}class QU{constructor(e,n,s){this.query=e,this.targetId=n,this.view=s}}class XU{constructor(e){this.key=e,this.Ra=!1}}class JU{constructor(e,n,s,i,r,o){this.localStore=e,this.remoteStore=n,this.eventManager=s,this.sharedClientState=i,this.currentUser=r,this.maxConcurrentLimboResolutions=o,this.Va={},this.ma=new Wr(a=>XA(a),iu),this.fa=new Map,this.ga=new Set,this.pa=new Ve(G.comparator),this.ya=new Map,this.wa=new Dp,this.Sa={},this.ba=new Map,this.Da=Tr.Nn(),this.onlineState="Unknown",this.Ca=void 0}get isPrimaryClient(){return this.Ca===!0}}async function ZU(t,e){const n=c$(t);let s,i;const r=n.ma.get(e);if(r)s=r.targetId,n.sharedClientState.addLocalQueryTarget(s),i=r.view.Aa();else{const o=await AU(n.localStore,Mn(e)),a=n.sharedClientState.addLocalQueryTarget(o.targetId);s=o.targetId,i=await e$(n,e,s,a==="current",o.resumeToken),n.isPrimaryClient&&II(n.remoteStore,o)}return i}async function e$(t,e,n,s,i){t.va=(h,f,d)=>async function(g,y,T,I){let b=y.view.ca(T);b.Zi&&(b=await cy(g.localStore,y.query,!1).then(({documents:$})=>y.view.ca($,b)));const v=I&&I.targetChanges.get(y.targetId),U=y.view.applyChanges(b,g.isPrimaryClient,v);return _y(g,y.targetId,U.Ta),U.snapshot}(t,h,f,d);const r=await cy(t.localStore,e,!0),o=new YU(e,r.ls),a=o.ca(r.documents),l=Na.createSynthesizedTargetChangeForCurrentChange(n,s&&t.onlineState!=="Offline",i),c=o.applyChanges(a,t.isPrimaryClient,l);_y(t,n,c.Ta);const u=new QU(e,n,o);return t.ma.set(e,u),t.fa.has(n)?t.fa.get(n).push(e):t.fa.set(n,[e]),c.snapshot}async function t$(t,e){const n=se(t),s=n.ma.get(e),i=n.fa.get(s.targetId);if(i.length>1)return n.fa.set(s.targetId,i.filter(r=>!iu(r,e))),void n.ma.delete(e);n.isPrimaryClient?(n.sharedClientState.removeLocalQueryTarget(s.targetId),n.sharedClientState.isActiveQueryTarget(s.targetId)||await Of(n.localStore,s.targetId,!1).then(()=>{n.sharedClientState.clearQueryState(s.targetId),bI(n.remoteStore,s.targetId),Df(n,s.targetId)}).catch(Ra)):(Df(n,s.targetId),await Of(n.localStore,s.targetId,!0))}async function n$(t,e,n){const s=u$(t);try{const i=await function(o,a){const l=se(o),c=Ke.now(),u=a.reduce((d,m)=>d.add(m.key),le());let h,f;return l.persistence.runTransaction("Locally write mutations","readwrite",d=>{let m=as(),g=le();return l.ss.getEntries(d,u).next(y=>{m=y,m.forEach((T,I)=>{I.isValidDocument()||(g=g.add(T))})}).next(()=>l.localDocuments.getOverlayedDocuments(d,m)).next(y=>{h=y;const T=[];for(const I of a){const b=SF(I,h.get(I.key).overlayedDocument);b!=null&&T.push(new bi(I.key,b,WA(b.value.mapValue),ss.exists(!0)))}return l.mutationQueue.addMutationBatch(d,c,T,a)}).next(y=>{f=y;const T=y.applyToLocalDocumentSet(h,g);return l.documentOverlayCache.saveOverlays(d,y.batchId,T)})}).then(()=>({batchId:f.batchId,changes:eI(h)}))}(s.localStore,e);s.sharedClientState.addPendingMutation(i.batchId),function(o,a,l){let c=o.Sa[o.currentUser.toKey()];c||(c=new Ve(Ee)),c=c.insert(a,l),o.Sa[o.currentUser.toKey()]=c}(s,i.batchId,n),await Da(s,i.changes),await hu(s.remoteStore)}catch(i){const r=Up(i,"Failed to persist write");n.reject(r)}}async function kI(t,e){const n=se(t);try{const s=await vU(n.localStore,e);e.targetChanges.forEach((i,r)=>{const o=n.ya.get(r);o&&(ke(i.addedDocuments.size+i.modifiedDocuments.size+i.removedDocuments.size<=1),i.addedDocuments.size>0?o.Ra=!0:i.modifiedDocuments.size>0?ke(o.Ra):i.removedDocuments.size>0&&(ke(o.Ra),o.Ra=!1))}),await Da(n,s,e)}catch(s){await Ra(s)}}function py(t,e,n){const s=se(t);if(s.isPrimaryClient&&n===0||!s.isPrimaryClient&&n===1){const i=[];s.ma.forEach((r,o)=>{const a=o.view.Q_(e);a.snapshot&&i.push(a.snapshot)}),function(o,a){const l=se(o);l.onlineState=a;let c=!1;l.queries.forEach((u,h)=>{for(const f of h.listeners)f.Q_(a)&&(c=!0)}),c&&Hp(l)}(s.eventManager,e),i.length&&s.Va.a_(i),s.onlineState=e,s.isPrimaryClient&&s.sharedClientState.setOnlineState(e)}}async function s$(t,e,n){const s=se(t);s.sharedClientState.updateQueryState(e,"rejected",n);const i=s.ya.get(e),r=i&&i.key;if(r){let o=new Ve(G.comparator);o=o.insert(r,gt.newNoDocument(r,ee.min()));const a=le().add(r),l=new lu(ee.min(),new Map,new Ve(Ee),o,a);await kI(s,l),s.pa=s.pa.remove(r),s.ya.delete(e),Wp(s)}else await Of(s.localStore,e,!1).then(()=>Df(s,e,n)).catch(Ra)}async function i$(t,e){const n=se(t),s=e.batch.batchId;try{const i=await EU(n.localStore,e);LI(n,s,null),xI(n,s),n.sharedClientState.updateMutationState(s,"acknowledged"),await Da(n,i)}catch(i){await Ra(i)}}async function r$(t,e,n){const s=se(t);try{const i=await function(o,a){const l=se(o);return l.persistence.runTransaction("Reject batch","readwrite-primary",c=>{let u;return l.mutationQueue.lookupMutationBatch(c,a).next(h=>(ke(h!==null),u=h.keys(),l.mutationQueue.removeMutationBatch(c,h))).next(()=>l.mutationQueue.performConsistencyCheck(c)).next(()=>l.documentOverlayCache.removeOverlaysForBatchId(c,u,a)).next(()=>l.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(c,u)).next(()=>l.localDocuments.getDocuments(c,u))})}(s.localStore,e);LI(s,e,n),xI(s,e),s.sharedClientState.updateMutationState(e,"rejected",n),await Da(s,i)}catch(i){await Ra(i)}}function xI(t,e){(t.ba.get(e)||[]).forEach(n=>{n.resolve()}),t.ba.delete(e)}function LI(t,e,n){const s=se(t);let i=s.Sa[s.currentUser.toKey()];if(i){const r=i.get(e);r&&(n?r.reject(n):r.resolve(),i=i.remove(e)),s.Sa[s.currentUser.toKey()]=i}}function Df(t,e,n=null){t.sharedClientState.removeLocalQueryTarget(e);for(const s of t.fa.get(e))t.ma.delete(s),n&&t.Va.Fa(s,n);t.fa.delete(e),t.isPrimaryClient&&t.wa.Rr(e).forEach(s=>{t.wa.containsKey(s)||MI(t,s)})}function MI(t,e){t.ga.delete(e.path.canonicalString());const n=t.pa.get(e);n!==null&&(bI(t.remoteStore,n),t.pa=t.pa.remove(e),t.ya.delete(n),Wp(t))}function _y(t,e,n){for(const s of n)s instanceof OI?(t.wa.addReference(s.key,e),o$(t,s)):s instanceof DI?(H("SyncEngine","Document no longer in limbo: "+s.key),t.wa.removeReference(s.key,e),t.wa.containsKey(s.key)||MI(t,s.key)):X()}function o$(t,e){const n=e.key,s=n.path.canonicalString();t.pa.get(n)||t.ga.has(s)||(H("SyncEngine","New document in limbo: "+n),t.ga.add(s),Wp(t))}function Wp(t){for(;t.ga.size>0&&t.pa.size<t.maxConcurrentLimboResolutions;){const e=t.ga.values().next().value;t.ga.delete(e);const n=new G(Le.fromString(e)),s=t.Da.next();t.ya.set(s,new XU(n)),t.pa=t.pa.insert(n,s),II(t.remoteStore,new Es(Mn(su(n.path)),s,"TargetPurposeLimboResolution",Ap._e))}}async function Da(t,e,n){const s=se(t),i=[],r=[],o=[];s.ma.isEmpty()||(s.ma.forEach((a,l)=>{o.push(s.va(l,e,n).then(c=>{if((c||n)&&s.isPrimaryClient&&s.sharedClientState.updateQueryState(l.targetId,c!=null&&c.fromCache?"not-current":"current"),c){i.push(c);const u=xp.Qi(l.targetId,c);r.push(u)}}))}),await Promise.all(o),s.Va.a_(i),await async function(l,c){const u=se(l);try{await u.persistence.runTransaction("notifyLocalViewChanges","readwrite",h=>O.forEach(c,f=>O.forEach(f.ki,d=>u.persistence.referenceDelegate.addReference(h,f.targetId,d)).next(()=>O.forEach(f.qi,d=>u.persistence.referenceDelegate.removeReference(h,f.targetId,d)))))}catch(h){if(!Sa(h))throw h;H("LocalStore","Failed to update sequence numbers: "+h)}for(const h of c){const f=h.targetId;if(!h.fromCache){const d=u.ts.get(f),m=d.snapshotVersion,g=d.withLastLimboFreeSnapshotVersion(m);u.ts=u.ts.insert(f,g)}}}(s.localStore,r))}async function a$(t,e){const n=se(t);if(!n.currentUser.isEqual(e)){H("SyncEngine","User change. New user:",e.toKey());const s=await vI(n.localStore,e);n.currentUser=e,function(r,o){r.ba.forEach(a=>{a.forEach(l=>{l.reject(new K(N.CANCELLED,o))})}),r.ba.clear()}(n,"'waitForPendingWrites' promise is rejected due to a user change."),n.sharedClientState.handleUserChange(e,s.removedBatchIds,s.addedBatchIds),await Da(n,s._s)}}function l$(t,e){const n=se(t),s=n.ya.get(e);if(s&&s.Ra)return le().add(s.key);{let i=le();const r=n.fa.get(e);if(!r)return i;for(const o of r){const a=n.ma.get(o);i=i.unionWith(a.view.ua)}return i}}function c$(t){const e=se(t);return e.remoteStore.remoteSyncer.applyRemoteEvent=kI.bind(null,e),e.remoteStore.remoteSyncer.getRemoteKeysForTarget=l$.bind(null,e),e.remoteStore.remoteSyncer.rejectListen=s$.bind(null,e),e.Va.a_=zU.bind(null,e.eventManager),e.Va.Fa=GU.bind(null,e.eventManager),e}function u$(t){const e=se(t);return e.remoteStore.remoteSyncer.applySuccessfulWrite=i$.bind(null,e),e.remoteStore.remoteSyncer.rejectFailedWrite=r$.bind(null,e),e}class my{constructor(){this.synchronizeTabs=!1}async initialize(e){this.serializer=cu(e.databaseInfo.databaseId),this.sharedClientState=this.createSharedClientState(e),this.persistence=this.createPersistence(e),await this.persistence.start(),this.localStore=this.createLocalStore(e),this.gcScheduler=this.createGarbageCollectionScheduler(e,this.localStore),this.indexBackfillerScheduler=this.createIndexBackfillerScheduler(e,this.localStore)}createGarbageCollectionScheduler(e,n){return null}createIndexBackfillerScheduler(e,n){return null}createLocalStore(e){return yU(this.persistence,new mU,e.initialUser,this.serializer)}createPersistence(e){return new dU(kp.jr,this.serializer)}createSharedClientState(e){return new bU}async terminate(){this.gcScheduler&&this.gcScheduler.stop(),await this.sharedClientState.shutdown(),await this.persistence.shutdown()}}class h${async initialize(e,n){this.localStore||(this.localStore=e.localStore,this.sharedClientState=e.sharedClientState,this.datastore=this.createDatastore(n),this.remoteStore=this.createRemoteStore(n),this.eventManager=this.createEventManager(n),this.syncEngine=this.createSyncEngine(n,!e.synchronizeTabs),this.sharedClientState.onlineStateHandler=s=>py(this.syncEngine,s,1),this.remoteStore.remoteSyncer.handleCredentialChange=a$.bind(null,this.syncEngine),await WU(this.remoteStore,this.syncEngine.isPrimaryClient))}createEventManager(e){return function(){return new KU}()}createDatastore(e){const n=cu(e.databaseInfo.databaseId),s=function(r){return new PU(r)}(e.databaseInfo);return function(r,o,a,l){return new DU(r,o,a,l)}(e.authCredentials,e.appCheckCredentials,s,n)}createRemoteStore(e){return function(s,i,r,o,a){return new xU(s,i,r,o,a)}(this.localStore,this.datastore,e.asyncQueue,n=>py(this.syncEngine,n,0),function(){return hy.D()?new hy:new CU}())}createSyncEngine(e,n){return function(i,r,o,a,l,c,u){const h=new JU(i,r,o,a,l,c);return u&&(h.Ca=!0),h}(this.localStore,this.remoteStore,this.eventManager,this.sharedClientState,e.initialUser,e.maxConcurrentLimboResolutions,n)}terminate(){return async function(n){const s=se(n);H("RemoteStore","RemoteStore shutting down."),s.C_.add(5),await Oa(s),s.F_.shutdown(),s.M_.set("Unknown")}(this.remoteStore)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class qp{constructor(e){this.observer=e,this.muted=!1}next(e){this.observer.next&&this.Oa(this.observer.next,e)}error(e){this.observer.error?this.Oa(this.observer.error,e):os("Uncaught Error in snapshot listener:",e.toString())}Na(){this.muted=!0}Oa(e,n){this.muted||setTimeout(()=>{this.muted||e(n)},0)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class f${constructor(e,n,s,i){this.authCredentials=e,this.appCheckCredentials=n,this.asyncQueue=s,this.databaseInfo=i,this.user=pt.UNAUTHENTICATED,this.clientId=BA.newId(),this.authCredentialListener=()=>Promise.resolve(),this.appCheckCredentialListener=()=>Promise.resolve(),this.authCredentials.start(s,async r=>{H("FirestoreClient","Received user=",r.uid),await this.authCredentialListener(r),this.user=r}),this.appCheckCredentials.start(s,r=>(H("FirestoreClient","Received new app check token=",r),this.appCheckCredentialListener(r,this.user)))}async getConfiguration(){return{asyncQueue:this.asyncQueue,databaseInfo:this.databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(e){this.authCredentialListener=e}setAppCheckTokenChangeListener(e){this.appCheckCredentialListener=e}verifyNotTerminated(){if(this.asyncQueue.isShuttingDown)throw new K(N.FAILED_PRECONDITION,"The client has already been terminated.")}terminate(){this.asyncQueue.enterRestrictedMode();const e=new ns;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted(async()=>{try{this._onlineComponents&&await this._onlineComponents.terminate(),this._offlineComponents&&await this._offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),e.resolve()}catch(n){const s=Up(n,"Failed to shutdown persistence");e.reject(s)}}),e.promise}}async function uh(t,e){t.asyncQueue.verifyOperationInProgress(),H("FirestoreClient","Initializing OfflineComponentProvider");const n=await t.getConfiguration();await e.initialize(n);let s=n.initialUser;t.setCredentialChangeListener(async i=>{s.isEqual(i)||(await vI(e.localStore,i),s=i)}),e.persistence.setDatabaseDeletedListener(()=>t.terminate()),t._offlineComponents=e}async function gy(t,e){t.asyncQueue.verifyOperationInProgress();const n=await p$(t);H("FirestoreClient","Initializing OnlineComponentProvider");const s=await t.getConfiguration();await e.initialize(n,s),t.setCredentialChangeListener(i=>fy(e.remoteStore,i)),t.setAppCheckTokenChangeListener((i,r)=>fy(e.remoteStore,r)),t._onlineComponents=e}function d$(t){return t.name==="FirebaseError"?t.code===N.FAILED_PRECONDITION||t.code===N.UNIMPLEMENTED:!(typeof DOMException<"u"&&t instanceof DOMException)||t.code===22||t.code===20||t.code===11}async function p$(t){if(!t._offlineComponents)if(t._uninitializedComponentsProvider){H("FirestoreClient","Using user provided OfflineComponentProvider");try{await uh(t,t._uninitializedComponentsProvider._offline)}catch(e){const n=e;if(!d$(n))throw n;gr("Error using user provided cache. Falling back to memory cache: "+n),await uh(t,new my)}}else H("FirestoreClient","Using default OfflineComponentProvider"),await uh(t,new my);return t._offlineComponents}async function VI(t){return t._onlineComponents||(t._uninitializedComponentsProvider?(H("FirestoreClient","Using user provided OnlineComponentProvider"),await gy(t,t._uninitializedComponentsProvider._online)):(H("FirestoreClient","Using default OnlineComponentProvider"),await gy(t,new h$))),t._onlineComponents}function _$(t){return VI(t).then(e=>e.syncEngine)}async function oc(t){const e=await VI(t),n=e.eventManager;return n.onListen=ZU.bind(null,e.syncEngine),n.onUnlisten=t$.bind(null,e.syncEngine),n}function m$(t,e,n={}){const s=new ns;return t.asyncQueue.enqueueAndForget(async()=>function(r,o,a,l,c){const u=new qp({next:f=>{o.enqueueAndForget(()=>Bp(r,h));const d=f.docs.has(a);!d&&f.fromCache?c.reject(new K(N.UNAVAILABLE,"Failed to get document because the client is offline.")):d&&f.fromCache&&l&&l.source==="server"?c.reject(new K(N.UNAVAILABLE,'Failed to get document from server. (However, this document does exist in the local cache. Run again without setting source to "server" to retrieve the cached document.)')):c.resolve(f)},error:f=>c.reject(f)}),h=new jp(su(a.path),u,{includeMetadataChanges:!0,J_:!0});return $p(r,h)}(await oc(t),t.asyncQueue,e,n,s)),s.promise}function g$(t,e,n={}){const s=new ns;return t.asyncQueue.enqueueAndForget(async()=>function(r,o,a,l,c){const u=new qp({next:f=>{o.enqueueAndForget(()=>Bp(r,h)),f.fromCache&&l.source==="server"?c.reject(new K(N.UNAVAILABLE,'Failed to get documents from server. (However, these documents may exist in the local cache. Run again without setting source to "server" to retrieve the cached documents.)')):c.resolve(f)},error:f=>c.reject(f)}),h=new jp(a,u,{includeMetadataChanges:!0,J_:!0});return $p(r,h)}(await oc(t),t.asyncQueue,e,n,s)),s.promise}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function FI(t){const e={};return t.timeoutSeconds!==void 0&&(e.timeoutSeconds=t.timeoutSeconds),e}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const yy=new Map;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function UI(t,e,n){if(!n)throw new K(N.INVALID_ARGUMENT,`Function ${t}() cannot be called with an empty ${e}.`)}function y$(t,e,n,s){if(e===!0&&s===!0)throw new K(N.INVALID_ARGUMENT,`${t} and ${n} cannot be used together.`)}function Ey(t){if(!G.isDocumentKey(t))throw new K(N.INVALID_ARGUMENT,`Invalid document reference. Document references must have an even number of segments, but ${t} has ${t.length}.`)}function vy(t){if(G.isDocumentKey(t))throw new K(N.INVALID_ARGUMENT,`Invalid collection reference. Collection references must have an odd number of segments, but ${t} has ${t.length}.`)}function Kp(t){if(t===void 0)return"undefined";if(t===null)return"null";if(typeof t=="string")return t.length>20&&(t=`${t.substring(0,20)}...`),JSON.stringify(t);if(typeof t=="number"||typeof t=="boolean")return""+t;if(typeof t=="object"){if(t instanceof Array)return"an array";{const e=function(s){return s.constructor?s.constructor.name:null}(t);return e?`a custom ${e} object`:"an object"}}return typeof t=="function"?"a function":X()}function Fn(t,e){if("_delegate"in t&&(t=t._delegate),!(t instanceof e)){if(e.name===t.constructor.name)throw new K(N.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const n=Kp(t);throw new K(N.INVALID_ARGUMENT,`Expected type '${e.name}', but it was: ${n}`)}}return t}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ty{constructor(e){var n,s;if(e.host===void 0){if(e.ssl!==void 0)throw new K(N.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host="firestore.googleapis.com",this.ssl=!0}else this.host=e.host,this.ssl=(n=e.ssl)===null||n===void 0||n;if(this.credentials=e.credentials,this.ignoreUndefinedProperties=!!e.ignoreUndefinedProperties,this.localCache=e.localCache,e.cacheSizeBytes===void 0)this.cacheSizeBytes=41943040;else{if(e.cacheSizeBytes!==-1&&e.cacheSizeBytes<1048576)throw new K(N.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=e.cacheSizeBytes}y$("experimentalForceLongPolling",e.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",e.experimentalAutoDetectLongPolling),this.experimentalForceLongPolling=!!e.experimentalForceLongPolling,this.experimentalForceLongPolling?this.experimentalAutoDetectLongPolling=!1:e.experimentalAutoDetectLongPolling===void 0?this.experimentalAutoDetectLongPolling=!0:this.experimentalAutoDetectLongPolling=!!e.experimentalAutoDetectLongPolling,this.experimentalLongPollingOptions=FI((s=e.experimentalLongPollingOptions)!==null&&s!==void 0?s:{}),function(r){if(r.timeoutSeconds!==void 0){if(isNaN(r.timeoutSeconds))throw new K(N.INVALID_ARGUMENT,`invalid long polling timeout: ${r.timeoutSeconds} (must not be NaN)`);if(r.timeoutSeconds<5)throw new K(N.INVALID_ARGUMENT,`invalid long polling timeout: ${r.timeoutSeconds} (minimum allowed value is 5)`);if(r.timeoutSeconds>30)throw new K(N.INVALID_ARGUMENT,`invalid long polling timeout: ${r.timeoutSeconds} (maximum allowed value is 30)`)}}(this.experimentalLongPollingOptions),this.useFetchStreams=!!e.useFetchStreams}isEqual(e){return this.host===e.host&&this.ssl===e.ssl&&this.credentials===e.credentials&&this.cacheSizeBytes===e.cacheSizeBytes&&this.experimentalForceLongPolling===e.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===e.experimentalAutoDetectLongPolling&&function(s,i){return s.timeoutSeconds===i.timeoutSeconds}(this.experimentalLongPollingOptions,e.experimentalLongPollingOptions)&&this.ignoreUndefinedProperties===e.ignoreUndefinedProperties&&this.useFetchStreams===e.useFetchStreams}}class fu{constructor(e,n,s,i){this._authCredentials=e,this._appCheckCredentials=n,this._databaseId=s,this._app=i,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new Ty({}),this._settingsFrozen=!1}get app(){if(!this._app)throw new K(N.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return this._terminateTask!==void 0}_setSettings(e){if(this._settingsFrozen)throw new K(N.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new Ty(e),e.credentials!==void 0&&(this._authCredentials=function(s){if(!s)return new FV;switch(s.type){case"firstParty":return new HV(s.sessionIndex||"0",s.iamToken||null,s.authTokenFactory||null);case"provider":return s.client;default:throw new K(N.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}}(e.credentials))}_getSettings(){return this._settings}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask||(this._terminateTask=this._terminate()),this._terminateTask}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return function(n){const s=yy.get(n);s&&(H("ComponentProvider","Removing Datastore"),yy.delete(n),s.terminate())}(this),Promise.resolve()}}function E$(t,e,n,s={}){var i;const r=(t=Fn(t,fu))._getSettings(),o=`${e}:${n}`;if(r.host!=="firestore.googleapis.com"&&r.host!==o&&gr("Host has been set in both settings() and connectFirestoreEmulator(), emulator host will be used."),t._setSettings(Object.assign(Object.assign({},r),{host:o,ssl:!1})),s.mockUserToken){let a,l;if(typeof s.mockUserToken=="string")a=s.mockUserToken,l=pt.MOCK_USER;else{a=tT(s.mockUserToken,(i=t._app)===null||i===void 0?void 0:i.options.projectId);const c=s.mockUserToken.sub||s.mockUserToken.user_id;if(!c)throw new K(N.INVALID_ARGUMENT,"mockUserToken must contain 'sub' or 'user_id' field!");l=new pt(c)}t._authCredentials=new UV(new $A(a,l))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ka{constructor(e,n,s){this.converter=n,this._query=s,this.type="query",this.firestore=e}withConverter(e){return new ka(this.firestore,e,this._query)}}class kt{constructor(e,n,s){this.converter=n,this._key=s,this.type="document",this.firestore=e}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new bs(this.firestore,this.converter,this._key.path.popLast())}withConverter(e){return new kt(this.firestore,e,this._key)}}class bs extends ka{constructor(e,n,s){super(e,n,su(s)),this._path=s,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const e=this._path.popLast();return e.isEmpty()?null:new kt(this.firestore,null,new G(e))}withConverter(e){return new bs(this.firestore,e,this._path)}}function v$(t,e,...n){if(t=St(t),UI("collection","path",e),t instanceof fu){const s=Le.fromString(e,...n);return vy(s),new bs(t,null,s)}{if(!(t instanceof kt||t instanceof bs))throw new K(N.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const s=t._path.child(Le.fromString(e,...n));return vy(s),new bs(t.firestore,null,s)}}function eH(t,e,...n){if(t=St(t),arguments.length===1&&(e=BA.newId()),UI("doc","path",e),t instanceof fu){const s=Le.fromString(e,...n);return Ey(s),new kt(t,null,new G(s))}{if(!(t instanceof kt||t instanceof bs))throw new K(N.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const s=t._path.child(Le.fromString(e,...n));return Ey(s),new kt(t.firestore,t instanceof bs?t.converter:null,new G(s))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class T${constructor(){this.Ja=Promise.resolve(),this.Ya=[],this.Za=!1,this.Xa=[],this.eu=null,this.tu=!1,this.nu=!1,this.ru=[],this.zo=new wI(this,"async_queue_retry"),this.iu=()=>{const n=ch();n&&H("AsyncQueue","Visibility state changed to "+n.visibilityState),this.zo.Qo()};const e=ch();e&&typeof e.addEventListener=="function"&&e.addEventListener("visibilitychange",this.iu)}get isShuttingDown(){return this.Za}enqueueAndForget(e){this.enqueue(e)}enqueueAndForgetEvenWhileRestricted(e){this.su(),this.ou(e)}enterRestrictedMode(e){if(!this.Za){this.Za=!0,this.nu=e||!1;const n=ch();n&&typeof n.removeEventListener=="function"&&n.removeEventListener("visibilitychange",this.iu)}}enqueue(e){if(this.su(),this.Za)return new Promise(()=>{});const n=new ns;return this.ou(()=>this.Za&&this.nu?Promise.resolve():(e().then(n.resolve,n.reject),n.promise)).then(()=>n.promise)}enqueueRetryable(e){this.enqueueAndForget(()=>(this.Ya.push(e),this._u()))}async _u(){if(this.Ya.length!==0){try{await this.Ya[0](),this.Ya.shift(),this.zo.reset()}catch(e){if(!Sa(e))throw e;H("AsyncQueue","Operation failed with retryable error: "+e)}this.Ya.length>0&&this.zo.ko(()=>this._u())}}ou(e){const n=this.Ja.then(()=>(this.tu=!0,e().catch(s=>{this.eu=s,this.tu=!1;const i=function(o){let a=o.message||"";return o.stack&&(a=o.stack.includes(o.message)?o.stack:o.message+`
`+o.stack),a}(s);throw os("INTERNAL UNHANDLED ERROR: ",i),s}).then(s=>(this.tu=!1,s))));return this.Ja=n,n}enqueueAfterDelay(e,n,s){this.su(),this.ru.indexOf(e)>-1&&(n=0);const i=Fp.createAndSchedule(this,e,n,s,r=>this.au(r));return this.Xa.push(i),i}su(){this.eu&&X()}verifyOperationInProgress(){}async uu(){let e;do e=this.Ja,await e;while(e!==this.Ja)}cu(e){for(const n of this.Xa)if(n.timerId===e)return!0;return!1}lu(e){return this.uu().then(()=>{this.Xa.sort((n,s)=>n.targetTimeMs-s.targetTimeMs);for(const n of this.Xa)if(n.skipDelay(),e!=="all"&&n.timerId===e)break;return this.uu()})}hu(e){this.ru.push(e)}au(e){const n=this.Xa.indexOf(e);this.Xa.splice(n,1)}}function wy(t){return function(n,s){if(typeof n!="object"||n===null)return!1;const i=n;for(const r of s)if(r in i&&typeof i[r]=="function")return!0;return!1}(t,["next","error","complete"])}class Ar extends fu{constructor(e,n,s,i){super(e,n,s,i),this.type="firestore",this._queue=function(){return new T$}(),this._persistenceKey=(i==null?void 0:i.name)||"[DEFAULT]"}_terminate(){return this._firestoreClient||$I(this),this._firestoreClient.terminate()}}function w$(t,e){const n=typeof t=="object"?t:Sd(),s=typeof t=="string"?t:e||"(default)",i=lT(n,"firestore").getImmediate({identifier:s});if(!i._initialized){const r=Zv("firestore");r&&E$(i,...r)}return i}function du(t){return t._firestoreClient||$I(t),t._firestoreClient.verifyNotTerminated(),t._firestoreClient}function $I(t){var e,n,s;const i=t._freezeSettings(),r=function(a,l,c,u){return new eF(a,l,c,u.host,u.ssl,u.experimentalForceLongPolling,u.experimentalAutoDetectLongPolling,FI(u.experimentalLongPollingOptions),u.useFetchStreams)}(t._databaseId,((e=t._app)===null||e===void 0?void 0:e.options.appId)||"",t._persistenceKey,i);t._firestoreClient=new f$(t._authCredentials,t._appCheckCredentials,t._queue,r),!((n=i.localCache)===null||n===void 0)&&n._offlineComponentProvider&&(!((s=i.localCache)===null||s===void 0)&&s._onlineComponentProvider)&&(t._firestoreClient._uninitializedComponentsProvider={_offlineKind:i.localCache.kind,_offline:i.localCache._offlineComponentProvider,_online:i.localCache._onlineComponentProvider})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ir{constructor(e){this._byteString=e}static fromBase64String(e){try{return new Ir(wt.fromBase64String(e))}catch(n){throw new K(N.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+n)}}static fromUint8Array(e){return new Ir(wt.fromUint8Array(e))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(e){return this._byteString.isEqual(e._byteString)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class zp{constructor(...e){for(let n=0;n<e.length;++n)if(e[n].length===0)throw new K(N.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new at(e)}isEqual(e){return this._internalPath.isEqual(e._internalPath)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class BI{constructor(e){this._methodName=e}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class pu{constructor(e,n){if(!isFinite(e)||e<-90||e>90)throw new K(N.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+e);if(!isFinite(n)||n<-180||n>180)throw new K(N.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+n);this._lat=e,this._long=n}get latitude(){return this._lat}get longitude(){return this._long}isEqual(e){return this._lat===e._lat&&this._long===e._long}toJSON(){return{latitude:this._lat,longitude:this._long}}_compareTo(e){return Ee(this._lat,e._lat)||Ee(this._long,e._long)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const A$=/^__.*__$/;class I${constructor(e,n,s){this.data=e,this.fieldMask=n,this.fieldTransforms=s}toMutation(e,n){return this.fieldMask!==null?new bi(e,this.data,this.fieldMask,n,this.fieldTransforms):new Pa(e,this.data,n,this.fieldTransforms)}}function HI(t){switch(t){case 0:case 2:case 1:return!0;case 3:case 4:return!1;default:throw X()}}class Gp{constructor(e,n,s,i,r,o){this.settings=e,this.databaseId=n,this.serializer=s,this.ignoreUndefinedProperties=i,r===void 0&&this.Pu(),this.fieldTransforms=r||[],this.fieldMask=o||[]}get path(){return this.settings.path}get Iu(){return this.settings.Iu}Tu(e){return new Gp(Object.assign(Object.assign({},this.settings),e),this.databaseId,this.serializer,this.ignoreUndefinedProperties,this.fieldTransforms,this.fieldMask)}Eu(e){var n;const s=(n=this.path)===null||n===void 0?void 0:n.child(e),i=this.Tu({path:s,du:!1});return i.Au(e),i}Ru(e){var n;const s=(n=this.path)===null||n===void 0?void 0:n.child(e),i=this.Tu({path:s,du:!1});return i.Pu(),i}Vu(e){return this.Tu({path:void 0,du:!0})}mu(e){return ac(e,this.settings.methodName,this.settings.fu||!1,this.path,this.settings.gu)}contains(e){return this.fieldMask.find(n=>e.isPrefixOf(n))!==void 0||this.fieldTransforms.find(n=>e.isPrefixOf(n.field))!==void 0}Pu(){if(this.path)for(let e=0;e<this.path.length;e++)this.Au(this.path.get(e))}Au(e){if(e.length===0)throw this.mu("Document fields must not be empty");if(HI(this.Iu)&&A$.test(e))throw this.mu('Document fields cannot begin and end with "__"')}}class b${constructor(e,n,s){this.databaseId=e,this.ignoreUndefinedProperties=n,this.serializer=s||cu(e)}pu(e,n,s,i=!1){return new Gp({Iu:e,methodName:n,gu:s,path:at.emptyPath(),du:!1,fu:i},this.databaseId,this.serializer,this.ignoreUndefinedProperties)}}function C$(t){const e=t._freezeSettings(),n=cu(t._databaseId);return new b$(t._databaseId,!!e.ignoreUndefinedProperties,n)}function R$(t,e,n,s,i,r={}){const o=t.pu(r.merge||r.mergeFields?2:0,e,n,i);KI("Data must be an object, but it was:",o,s);const a=WI(s,o);let l,c;if(r.merge)l=new pn(o.fieldMask),c=o.fieldTransforms;else if(r.mergeFields){const u=[];for(const h of r.mergeFields){const f=S$(e,h,n);if(!o.contains(f))throw new K(N.INVALID_ARGUMENT,`Field '${f}' is specified in your field mask but missing from your input data.`);N$(u,f)||u.push(f)}l=new pn(u),c=o.fieldTransforms.filter(h=>l.covers(h.field))}else l=null,c=o.fieldTransforms;return new I$(new Jt(a),l,c)}function jI(t,e){if(qI(t=St(t)))return KI("Unsupported field value:",e,t),WI(t,e);if(t instanceof BI)return function(s,i){if(!HI(i.Iu))throw i.mu(`${s._methodName}() can only be used with update() and set()`);if(!i.path)throw i.mu(`${s._methodName}() is not currently supported inside arrays`);const r=s._toFieldTransform(i);r&&i.fieldTransforms.push(r)}(t,e),null;if(t===void 0&&e.ignoreUndefinedProperties)return null;if(e.path&&e.fieldMask.push(e.path),t instanceof Array){if(e.settings.du&&e.Iu!==4)throw e.mu("Nested arrays are not supported");return function(s,i){const r=[];let o=0;for(const a of s){let l=jI(a,i.Vu(o));l==null&&(l={nullValue:"NULL_VALUE"}),r.push(l),o++}return{arrayValue:{values:r}}}(t,e)}return function(s,i){if((s=St(s))===null)return{nullValue:"NULL_VALUE"};if(typeof s=="number")return wF(i.serializer,s);if(typeof s=="boolean")return{booleanValue:s};if(typeof s=="string")return{stringValue:s};if(s instanceof Date){const r=Ke.fromDate(s);return{timestampValue:ic(i.serializer,r)}}if(s instanceof Ke){const r=new Ke(s.seconds,1e3*Math.floor(s.nanoseconds/1e3));return{timestampValue:ic(i.serializer,r)}}if(s instanceof pu)return{geoPointValue:{latitude:s.latitude,longitude:s.longitude}};if(s instanceof Ir)return{bytesValue:pI(i.serializer,s._byteString)};if(s instanceof kt){const r=i.databaseId,o=s.firestore._databaseId;if(!o.isEqual(r))throw i.mu(`Document reference is for database ${o.projectId}/${o.database} but should be for database ${r.projectId}/${r.database}`);return{referenceValue:Op(s.firestore._databaseId||i.databaseId,s._key.path)}}throw i.mu(`Unsupported field value: ${Kp(s)}`)}(t,e)}function WI(t,e){const n={};return HA(t)?e.path&&e.path.length>0&&e.fieldMask.push(e.path):jr(t,(s,i)=>{const r=jI(i,e.Eu(s));r!=null&&(n[s]=r)}),{mapValue:{fields:n}}}function qI(t){return!(typeof t!="object"||t===null||t instanceof Array||t instanceof Date||t instanceof Ke||t instanceof pu||t instanceof Ir||t instanceof kt||t instanceof BI)}function KI(t,e,n){if(!qI(n)||!function(i){return typeof i=="object"&&i!==null&&(Object.getPrototypeOf(i)===Object.prototype||Object.getPrototypeOf(i)===null)}(n)){const s=Kp(n);throw s==="an object"?e.mu(t+" a custom object"):e.mu(t+" "+s)}}function S$(t,e,n){if((e=St(e))instanceof zp)return e._internalPath;if(typeof e=="string")return zI(t,e);throw ac("Field path arguments must be of type string or ",t,!1,void 0,n)}const P$=new RegExp("[~\\*/\\[\\]]");function zI(t,e,n){if(e.search(P$)>=0)throw ac(`Invalid field path (${e}). Paths must not contain '~', '*', '/', '[', or ']'`,t,!1,void 0,n);try{return new zp(...e.split("."))._internalPath}catch{throw ac(`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,t,!1,void 0,n)}}function ac(t,e,n,s,i){const r=s&&!s.isEmpty(),o=i!==void 0;let a=`Function ${e}() called with invalid data`;n&&(a+=" (via `toFirestore()`)"),a+=". ";let l="";return(r||o)&&(l+=" (found",r&&(l+=` in field ${s}`),o&&(l+=` in document ${i}`),l+=")"),new K(N.INVALID_ARGUMENT,a+t+l)}function N$(t,e){return t.some(n=>n.isEqual(e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class GI{constructor(e,n,s,i,r){this._firestore=e,this._userDataWriter=n,this._key=s,this._document=i,this._converter=r}get id(){return this._key.path.lastSegment()}get ref(){return new kt(this._firestore,this._converter,this._key)}exists(){return this._document!==null}data(){if(this._document){if(this._converter){const e=new O$(this._firestore,this._userDataWriter,this._key,this._document,null);return this._converter.fromFirestore(e)}return this._userDataWriter.convertValue(this._document.data.value)}}get(e){if(this._document){const n=this._document.data.field(YI("DocumentSnapshot.get",e));if(n!==null)return this._userDataWriter.convertValue(n)}}}class O$ extends GI{data(){return super.data()}}function YI(t,e){return typeof e=="string"?zI(t,e):e instanceof zp?e._internalPath:e._delegate._internalPath}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function QI(t){if(t.limitType==="L"&&t.explicitOrderBy.length===0)throw new K(N.UNIMPLEMENTED,"limitToLast() queries require specifying at least one orderBy() clause")}class D${convertValue(e,n="none"){switch(gi(e)){case 0:return null;case 1:return e.booleanValue;case 2:return qe(e.integerValue||e.doubleValue);case 3:return this.convertTimestamp(e.timestampValue);case 4:return this.convertServerTimestamp(e,n);case 5:return e.stringValue;case 6:return this.convertBytes(mi(e.bytesValue));case 7:return this.convertReference(e.referenceValue);case 8:return this.convertGeoPoint(e.geoPointValue);case 9:return this.convertArray(e.arrayValue,n);case 10:return this.convertObject(e.mapValue,n);default:throw X()}}convertObject(e,n){return this.convertObjectMap(e.fields,n)}convertObjectMap(e,n="none"){const s={};return jr(e,(i,r)=>{s[i]=this.convertValue(r,n)}),s}convertGeoPoint(e){return new pu(qe(e.latitude),qe(e.longitude))}convertArray(e,n){return(e.values||[]).map(s=>this.convertValue(s,n))}convertServerTimestamp(e,n){switch(n){case"previous":const s=bp(e);return s==null?null:this.convertValue(s,n);case"estimate":return this.convertTimestamp(ea(e));default:return null}}convertTimestamp(e){const n=Ds(e);return new Ke(n.seconds,n.nanos)}convertDocumentKey(e,n){const s=Le.fromString(e);ke(EI(s));const i=new ta(s.get(1),s.get(3)),r=new G(s.popFirst(5));return i.isEqual(n)||os(`Document ${r} contains a document reference within a different database (${i.projectId}/${i.database}) which is not supported. It will be treated as a reference in the current database (${n.projectId}/${n.database}) instead.`),r}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function k$(t,e,n){let s;return s=t?n&&(n.merge||n.mergeFields)?t.toFirestore(e,n):t.toFirestore(e):e,s}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class po{constructor(e,n){this.hasPendingWrites=e,this.fromCache=n}isEqual(e){return this.hasPendingWrites===e.hasPendingWrites&&this.fromCache===e.fromCache}}class XI extends GI{constructor(e,n,s,i,r,o){super(e,n,s,i,o),this._firestore=e,this._firestoreImpl=e,this.metadata=r}exists(){return super.exists()}data(e={}){if(this._document){if(this._converter){const n=new vl(this._firestore,this._userDataWriter,this._key,this._document,this.metadata,null);return this._converter.fromFirestore(n,e)}return this._userDataWriter.convertValue(this._document.data.value,e.serverTimestamps)}}get(e,n={}){if(this._document){const s=this._document.data.field(YI("DocumentSnapshot.get",e));if(s!==null)return this._userDataWriter.convertValue(s,n.serverTimestamps)}}}class vl extends XI{data(e={}){return super.data(e)}}class JI{constructor(e,n,s,i){this._firestore=e,this._userDataWriter=n,this._snapshot=i,this.metadata=new po(i.hasPendingWrites,i.fromCache),this.query=s}get docs(){const e=[];return this.forEach(n=>e.push(n)),e}get size(){return this._snapshot.docs.size}get empty(){return this.size===0}forEach(e,n){this._snapshot.docs.forEach(s=>{e.call(n,new vl(this._firestore,this._userDataWriter,s.key,s,new po(this._snapshot.mutatedKeys.has(s.key),this._snapshot.fromCache),this.query.converter))})}docChanges(e={}){const n=!!e.includeMetadataChanges;if(n&&this._snapshot.excludesMetadataChanges)throw new K(N.INVALID_ARGUMENT,"To include metadata changes with your document changes, you must also pass { includeMetadataChanges:true } to onSnapshot().");return this._cachedChanges&&this._cachedChangesIncludeMetadataChanges===n||(this._cachedChanges=function(i,r){if(i._snapshot.oldDocs.isEmpty()){let o=0;return i._snapshot.docChanges.map(a=>{const l=new vl(i._firestore,i._userDataWriter,a.doc.key,a.doc,new po(i._snapshot.mutatedKeys.has(a.doc.key),i._snapshot.fromCache),i.query.converter);return a.doc,{type:"added",doc:l,oldIndex:-1,newIndex:o++}})}{let o=i._snapshot.oldDocs;return i._snapshot.docChanges.filter(a=>r||a.type!==3).map(a=>{const l=new vl(i._firestore,i._userDataWriter,a.doc.key,a.doc,new po(i._snapshot.mutatedKeys.has(a.doc.key),i._snapshot.fromCache),i.query.converter);let c=-1,u=-1;return a.type!==0&&(c=o.indexOf(a.doc.key),o=o.delete(a.doc.key)),a.type!==1&&(o=o.add(a.doc),u=o.indexOf(a.doc.key)),{type:x$(a.type),doc:l,oldIndex:c,newIndex:u}})}}(this,n),this._cachedChangesIncludeMetadataChanges=n),this._cachedChanges}}function x$(t){switch(t){case 0:return"added";case 2:case 3:return"modified";case 1:return"removed";default:return X()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ZI(t){t=Fn(t,kt);const e=Fn(t.firestore,Ar);return m$(du(e),t._key).then(n=>eb(e,t,n))}class Yp extends D${constructor(e){super(),this.firestore=e}convertBytes(e){return new Ir(e)}convertReference(e){const n=this.convertDocumentKey(e,this.firestore._databaseId);return new kt(this.firestore,null,n)}}function L$(t){t=Fn(t,ka);const e=Fn(t.firestore,Ar),n=du(e),s=new Yp(e);return QI(t._query),g$(n,t._query).then(i=>new JI(e,s,t,i))}function tH(t,e,n){t=Fn(t,kt);const s=Fn(t.firestore,Ar),i=k$(t.converter,e,n);return M$(s,[R$(C$(s),"setDoc",t._key,i,t.converter!==null,n).toMutation(t._key,ss.none())])}function Qp(t,...e){var n,s,i;t=St(t);let r={includeMetadataChanges:!1},o=0;typeof e[o]!="object"||wy(e[o])||(r=e[o],o++);const a={includeMetadataChanges:r.includeMetadataChanges};if(wy(e[o])){const h=e[o];e[o]=(n=h.next)===null||n===void 0?void 0:n.bind(h),e[o+1]=(s=h.error)===null||s===void 0?void 0:s.bind(h),e[o+2]=(i=h.complete)===null||i===void 0?void 0:i.bind(h)}let l,c,u;if(t instanceof kt)c=Fn(t.firestore,Ar),u=su(t._key.path),l={next:h=>{e[o]&&e[o](eb(c,t,h))},error:e[o+1],complete:e[o+2]};else{const h=Fn(t,ka);c=Fn(h.firestore,Ar),u=h._query;const f=new Yp(c);l={next:d=>{e[o]&&e[o](new JI(c,f,h,d))},error:e[o+1],complete:e[o+2]},QI(t._query)}return function(f,d,m,g){const y=new qp(g),T=new jp(d,y,m);return f.asyncQueue.enqueueAndForget(async()=>$p(await oc(f),T)),()=>{y.Na(),f.asyncQueue.enqueueAndForget(async()=>Bp(await oc(f),T))}}(du(c),u,a,l)}function M$(t,e){return function(s,i){const r=new ns;return s.asyncQueue.enqueueAndForget(async()=>n$(await _$(s),i,r)),r.promise}(du(t),e)}function eb(t,e,n){const s=n.docs.get(e._key),i=new Yp(t);return new XI(t,i,e._key,s,new po(n.hasPendingWrites,n.fromCache),e.converter)}(function(e,n=!0){(function(i){Hr=i})(Mr),Hn(new yn("firestore",(s,{instanceIdentifier:i,options:r})=>{const o=s.getProvider("app").getImmediate(),a=new Ar(new $V(s.getProvider("auth-internal")),new WV(s.getProvider("app-check-internal")),function(c,u){if(!Object.prototype.hasOwnProperty.apply(c.options,["projectId"]))throw new K(N.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new ta(c.options.projectId,u)}(o,i),o);return r=Object.assign({useFetchStreams:n},r),a._setSettings(r),a},"PUBLIC").setMultipleInstances(!0)),Wt(jg,"4.3.2",e),Wt(jg,"4.3.2","esm2017")})();/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const tb="firebasestorage.googleapis.com",nb="storageBucket",V$=2*60*1e3,F$=10*60*1e3;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Be extends us{constructor(e,n,s=0){super(hh(e),`Firebase Storage: ${n} (${hh(e)})`),this.status_=s,this.customData={serverResponse:null},this._baseMessage=this.message,Object.setPrototypeOf(this,Be.prototype)}get status(){return this.status_}set status(e){this.status_=e}_codeEquals(e){return hh(e)===this.code}get serverResponse(){return this.customData.serverResponse}set serverResponse(e){this.customData.serverResponse=e,this.customData.serverResponse?this.message=`${this._baseMessage}
${this.customData.serverResponse}`:this.message=this._baseMessage}}var $e;(function(t){t.UNKNOWN="unknown",t.OBJECT_NOT_FOUND="object-not-found",t.BUCKET_NOT_FOUND="bucket-not-found",t.PROJECT_NOT_FOUND="project-not-found",t.QUOTA_EXCEEDED="quota-exceeded",t.UNAUTHENTICATED="unauthenticated",t.UNAUTHORIZED="unauthorized",t.UNAUTHORIZED_APP="unauthorized-app",t.RETRY_LIMIT_EXCEEDED="retry-limit-exceeded",t.INVALID_CHECKSUM="invalid-checksum",t.CANCELED="canceled",t.INVALID_EVENT_NAME="invalid-event-name",t.INVALID_URL="invalid-url",t.INVALID_DEFAULT_BUCKET="invalid-default-bucket",t.NO_DEFAULT_BUCKET="no-default-bucket",t.CANNOT_SLICE_BLOB="cannot-slice-blob",t.SERVER_FILE_WRONG_SIZE="server-file-wrong-size",t.NO_DOWNLOAD_URL="no-download-url",t.INVALID_ARGUMENT="invalid-argument",t.INVALID_ARGUMENT_COUNT="invalid-argument-count",t.APP_DELETED="app-deleted",t.INVALID_ROOT_OPERATION="invalid-root-operation",t.INVALID_FORMAT="invalid-format",t.INTERNAL_ERROR="internal-error",t.UNSUPPORTED_ENVIRONMENT="unsupported-environment"})($e||($e={}));function hh(t){return"storage/"+t}function Xp(){const t="An unknown error occurred, please check the error payload for server response.";return new Be($e.UNKNOWN,t)}function U$(t){return new Be($e.OBJECT_NOT_FOUND,"Object '"+t+"' does not exist.")}function $$(t){return new Be($e.QUOTA_EXCEEDED,"Quota for bucket '"+t+"' exceeded, please view quota on https://firebase.google.com/pricing/.")}function B$(){const t="User is not authenticated, please authenticate using Firebase Authentication and try again.";return new Be($e.UNAUTHENTICATED,t)}function H$(){return new Be($e.UNAUTHORIZED_APP,"This app does not have permission to access Firebase Storage on this project.")}function j$(t){return new Be($e.UNAUTHORIZED,"User does not have permission to access '"+t+"'.")}function W$(){return new Be($e.RETRY_LIMIT_EXCEEDED,"Max retry time for operation exceeded, please try again.")}function q$(){return new Be($e.CANCELED,"User canceled the upload/download.")}function K$(t){return new Be($e.INVALID_URL,"Invalid URL '"+t+"'.")}function z$(t){return new Be($e.INVALID_DEFAULT_BUCKET,"Invalid default bucket '"+t+"'.")}function G$(){return new Be($e.NO_DEFAULT_BUCKET,"No default bucket found. Did you set the '"+nb+"' property when initializing the app?")}function Y$(){return new Be($e.CANNOT_SLICE_BLOB,"Cannot slice blob for upload. Please retry the upload.")}function Q$(){return new Be($e.NO_DOWNLOAD_URL,"The given file does not have any download URLs.")}function X$(t){return new Be($e.UNSUPPORTED_ENVIRONMENT,`${t} is missing. Make sure to install the required polyfills. See https://firebase.google.com/docs/web/environments-js-sdk#polyfills for more information.`)}function kf(t){return new Be($e.INVALID_ARGUMENT,t)}function sb(){return new Be($e.APP_DELETED,"The Firebase app was deleted.")}function J$(t){return new Be($e.INVALID_ROOT_OPERATION,"The operation '"+t+"' cannot be performed on a root reference, create a non-root reference using child, such as .child('file.png').")}function No(t,e){return new Be($e.INVALID_FORMAT,"String does not match format '"+t+"': "+e)}function so(t){throw new Be($e.INTERNAL_ERROR,"Internal error: "+t)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class jt{constructor(e,n){this.bucket=e,this.path_=n}get path(){return this.path_}get isRoot(){return this.path.length===0}fullServerUrl(){const e=encodeURIComponent;return"/b/"+e(this.bucket)+"/o/"+e(this.path)}bucketOnlyServerUrl(){return"/b/"+encodeURIComponent(this.bucket)+"/o"}static makeFromBucketSpec(e,n){let s;try{s=jt.makeFromUrl(e,n)}catch{return new jt(e,"")}if(s.path==="")return s;throw z$(e)}static makeFromUrl(e,n){let s=null;const i="([A-Za-z0-9.\\-_]+)";function r(v){v.path.charAt(v.path.length-1)==="/"&&(v.path_=v.path_.slice(0,-1))}const o="(/(.*))?$",a=new RegExp("^gs://"+i+o,"i"),l={bucket:1,path:3};function c(v){v.path_=decodeURIComponent(v.path)}const u="v[A-Za-z0-9_]+",h=n.replace(/[.]/g,"\\."),f="(/([^?#]*).*)?$",d=new RegExp(`^https?://${h}/${u}/b/${i}/o${f}`,"i"),m={bucket:1,path:3},g=n===tb?"(?:storage.googleapis.com|storage.cloud.google.com)":n,y="([^?#]*)",T=new RegExp(`^https?://${g}/${i}/${y}`,"i"),b=[{regex:a,indices:l,postModify:r},{regex:d,indices:m,postModify:c},{regex:T,indices:{bucket:1,path:2},postModify:c}];for(let v=0;v<b.length;v++){const U=b[v],$=U.regex.exec(e);if($){const Y=$[U.indices.bucket];let te=$[U.indices.path];te||(te=""),s=new jt(Y,te),U.postModify(s);break}}if(s==null)throw K$(e);return s}}class Z${constructor(e){this.promise_=Promise.reject(e)}getPromise(){return this.promise_}cancel(e=!1){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function e2(t,e,n){let s=1,i=null,r=null,o=!1,a=0;function l(){return a===2}let c=!1;function u(...y){c||(c=!0,e.apply(null,y))}function h(y){i=setTimeout(()=>{i=null,t(d,l())},y)}function f(){r&&clearTimeout(r)}function d(y,...T){if(c){f();return}if(y){f(),u.call(null,y,...T);return}if(l()||o){f(),u.call(null,y,...T);return}s<64&&(s*=2);let b;a===1?(a=2,b=0):b=(s+Math.random())*1e3,h(b)}let m=!1;function g(y){m||(m=!0,f(),!c&&(i!==null?(y||(a=2),clearTimeout(i),h(0)):y||(a=1)))}return h(0),r=setTimeout(()=>{o=!0,g(!0)},n),g}function t2(t){t(!1)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function n2(t){return t!==void 0}function s2(t){return typeof t=="object"&&!Array.isArray(t)}function Jp(t){return typeof t=="string"||t instanceof String}function Ay(t){return Zp()&&t instanceof Blob}function Zp(){return typeof Blob<"u"&&!oD()}function Iy(t,e,n,s){if(s<e)throw kf(`Invalid value for '${t}'. Expected ${e} or greater.`);if(s>n)throw kf(`Invalid value for '${t}'. Expected ${n} or less.`)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function e_(t,e,n){let s=e;return n==null&&(s=`https://${e}`),`${n}://${s}/v0${t}`}function ib(t){const e=encodeURIComponent;let n="?";for(const s in t)if(t.hasOwnProperty(s)){const i=e(s)+"="+e(t[s]);n=n+i+"&"}return n=n.slice(0,-1),n}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var ii;(function(t){t[t.NO_ERROR=0]="NO_ERROR",t[t.NETWORK_ERROR=1]="NETWORK_ERROR",t[t.ABORT=2]="ABORT"})(ii||(ii={}));/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function i2(t,e){const n=t>=500&&t<600,i=[408,429].indexOf(t)!==-1,r=e.indexOf(t)!==-1;return n||i||r}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class r2{constructor(e,n,s,i,r,o,a,l,c,u,h,f=!0){this.url_=e,this.method_=n,this.headers_=s,this.body_=i,this.successCodes_=r,this.additionalRetryCodes_=o,this.callback_=a,this.errorCallback_=l,this.timeout_=c,this.progressCallback_=u,this.connectionFactory_=h,this.retry=f,this.pendingConnection_=null,this.backoffId_=null,this.canceled_=!1,this.appDelete_=!1,this.promise_=new Promise((d,m)=>{this.resolve_=d,this.reject_=m,this.start_()})}start_(){const e=(s,i)=>{if(i){s(!1,new rl(!1,null,!0));return}const r=this.connectionFactory_();this.pendingConnection_=r;const o=a=>{const l=a.loaded,c=a.lengthComputable?a.total:-1;this.progressCallback_!==null&&this.progressCallback_(l,c)};this.progressCallback_!==null&&r.addUploadProgressListener(o),r.send(this.url_,this.method_,this.body_,this.headers_).then(()=>{this.progressCallback_!==null&&r.removeUploadProgressListener(o),this.pendingConnection_=null;const a=r.getErrorCode()===ii.NO_ERROR,l=r.getStatus();if(!a||i2(l,this.additionalRetryCodes_)&&this.retry){const u=r.getErrorCode()===ii.ABORT;s(!1,new rl(!1,null,u));return}const c=this.successCodes_.indexOf(l)!==-1;s(!0,new rl(c,r))})},n=(s,i)=>{const r=this.resolve_,o=this.reject_,a=i.connection;if(i.wasSuccessCode)try{const l=this.callback_(a,a.getResponse());n2(l)?r(l):r()}catch(l){o(l)}else if(a!==null){const l=Xp();l.serverResponse=a.getErrorText(),this.errorCallback_?o(this.errorCallback_(a,l)):o(l)}else if(i.canceled){const l=this.appDelete_?sb():q$();o(l)}else{const l=W$();o(l)}};this.canceled_?n(!1,new rl(!1,null,!0)):this.backoffId_=e2(e,n,this.timeout_)}getPromise(){return this.promise_}cancel(e){this.canceled_=!0,this.appDelete_=e||!1,this.backoffId_!==null&&t2(this.backoffId_),this.pendingConnection_!==null&&this.pendingConnection_.abort()}}class rl{constructor(e,n,s){this.wasSuccessCode=e,this.connection=n,this.canceled=!!s}}function o2(t,e){e!==null&&e.length>0&&(t.Authorization="Firebase "+e)}function a2(t,e){t["X-Firebase-Storage-Version"]="webjs/"+(e??"AppManager")}function l2(t,e){e&&(t["X-Firebase-GMPID"]=e)}function c2(t,e){e!==null&&(t["X-Firebase-AppCheck"]=e)}function u2(t,e,n,s,i,r,o=!0){const a=ib(t.urlParams),l=t.url+a,c=Object.assign({},t.headers);return l2(c,e),o2(c,n),a2(c,r),c2(c,s),new r2(l,t.method,c,t.body,t.successCodes,t.additionalRetryCodes,t.handler,t.errorHandler,t.timeout,t.progressCallback,i,o)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function h2(){return typeof BlobBuilder<"u"?BlobBuilder:typeof WebKitBlobBuilder<"u"?WebKitBlobBuilder:void 0}function f2(...t){const e=h2();if(e!==void 0){const n=new e;for(let s=0;s<t.length;s++)n.append(t[s]);return n.getBlob()}else{if(Zp())return new Blob(t);throw new Be($e.UNSUPPORTED_ENVIRONMENT,"This browser doesn't seem to support creating Blobs")}}function d2(t,e,n){return t.webkitSlice?t.webkitSlice(e,n):t.mozSlice?t.mozSlice(e,n):t.slice?t.slice(e,n):null}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function p2(t){if(typeof atob>"u")throw X$("base-64");return atob(t)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const kn={RAW:"raw",BASE64:"base64",BASE64URL:"base64url",DATA_URL:"data_url"};class fh{constructor(e,n){this.data=e,this.contentType=n||null}}function _2(t,e){switch(t){case kn.RAW:return new fh(rb(e));case kn.BASE64:case kn.BASE64URL:return new fh(ob(t,e));case kn.DATA_URL:return new fh(g2(e),y2(e))}throw Xp()}function rb(t){const e=[];for(let n=0;n<t.length;n++){let s=t.charCodeAt(n);if(s<=127)e.push(s);else if(s<=2047)e.push(192|s>>6,128|s&63);else if((s&64512)===55296)if(!(n<t.length-1&&(t.charCodeAt(n+1)&64512)===56320))e.push(239,191,189);else{const r=s,o=t.charCodeAt(++n);s=65536|(r&1023)<<10|o&1023,e.push(240|s>>18,128|s>>12&63,128|s>>6&63,128|s&63)}else(s&64512)===56320?e.push(239,191,189):e.push(224|s>>12,128|s>>6&63,128|s&63)}return new Uint8Array(e)}function m2(t){let e;try{e=decodeURIComponent(t)}catch{throw No(kn.DATA_URL,"Malformed data URL.")}return rb(e)}function ob(t,e){switch(t){case kn.BASE64:{const i=e.indexOf("-")!==-1,r=e.indexOf("_")!==-1;if(i||r)throw No(t,"Invalid character '"+(i?"-":"_")+"' found: is it base64url encoded?");break}case kn.BASE64URL:{const i=e.indexOf("+")!==-1,r=e.indexOf("/")!==-1;if(i||r)throw No(t,"Invalid character '"+(i?"+":"/")+"' found: is it base64 encoded?");e=e.replace(/-/g,"+").replace(/_/g,"/");break}}let n;try{n=p2(e)}catch(i){throw i.message.includes("polyfill")?i:No(t,"Invalid character found")}const s=new Uint8Array(n.length);for(let i=0;i<n.length;i++)s[i]=n.charCodeAt(i);return s}class ab{constructor(e){this.base64=!1,this.contentType=null;const n=e.match(/^data:([^,]+)?,/);if(n===null)throw No(kn.DATA_URL,"Must be formatted 'data:[<mediatype>][;base64],<data>");const s=n[1]||null;s!=null&&(this.base64=E2(s,";base64"),this.contentType=this.base64?s.substring(0,s.length-7):s),this.rest=e.substring(e.indexOf(",")+1)}}function g2(t){const e=new ab(t);return e.base64?ob(kn.BASE64,e.rest):m2(e.rest)}function y2(t){return new ab(t).contentType}function E2(t,e){return t.length>=e.length?t.substring(t.length-e.length)===e:!1}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ys{constructor(e,n){let s=0,i="";Ay(e)?(this.data_=e,s=e.size,i=e.type):e instanceof ArrayBuffer?(n?this.data_=new Uint8Array(e):(this.data_=new Uint8Array(e.byteLength),this.data_.set(new Uint8Array(e))),s=this.data_.length):e instanceof Uint8Array&&(n?this.data_=e:(this.data_=new Uint8Array(e.length),this.data_.set(e)),s=e.length),this.size_=s,this.type_=i}size(){return this.size_}type(){return this.type_}slice(e,n){if(Ay(this.data_)){const s=this.data_,i=d2(s,e,n);return i===null?null:new ys(i)}else{const s=new Uint8Array(this.data_.buffer,e,n-e);return new ys(s,!0)}}static getBlob(...e){if(Zp()){const n=e.map(s=>s instanceof ys?s.data_:s);return new ys(f2.apply(null,n))}else{const n=e.map(o=>Jp(o)?_2(kn.RAW,o).data:o.data_);let s=0;n.forEach(o=>{s+=o.byteLength});const i=new Uint8Array(s);let r=0;return n.forEach(o=>{for(let a=0;a<o.length;a++)i[r++]=o[a]}),new ys(i,!0)}}uploadData(){return this.data_}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function lb(t){let e;try{e=JSON.parse(t)}catch{return null}return s2(e)?e:null}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function v2(t){if(t.length===0)return null;const e=t.lastIndexOf("/");return e===-1?"":t.slice(0,e)}function T2(t,e){const n=e.split("/").filter(s=>s.length>0).join("/");return t.length===0?n:t+"/"+n}function cb(t){const e=t.lastIndexOf("/",t.length-2);return e===-1?t:t.slice(e+1)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function w2(t,e){return e}class At{constructor(e,n,s,i){this.server=e,this.local=n||e,this.writable=!!s,this.xform=i||w2}}let ol=null;function A2(t){return!Jp(t)||t.length<2?t:cb(t)}function ub(){if(ol)return ol;const t=[];t.push(new At("bucket")),t.push(new At("generation")),t.push(new At("metageneration")),t.push(new At("name","fullPath",!0));function e(r,o){return A2(o)}const n=new At("name");n.xform=e,t.push(n);function s(r,o){return o!==void 0?Number(o):o}const i=new At("size");return i.xform=s,t.push(i),t.push(new At("timeCreated")),t.push(new At("updated")),t.push(new At("md5Hash",null,!0)),t.push(new At("cacheControl",null,!0)),t.push(new At("contentDisposition",null,!0)),t.push(new At("contentEncoding",null,!0)),t.push(new At("contentLanguage",null,!0)),t.push(new At("contentType",null,!0)),t.push(new At("metadata","customMetadata",!0)),ol=t,ol}function I2(t,e){function n(){const s=t.bucket,i=t.fullPath,r=new jt(s,i);return e._makeStorageReference(r)}Object.defineProperty(t,"ref",{get:n})}function b2(t,e,n){const s={};s.type="file";const i=n.length;for(let r=0;r<i;r++){const o=n[r];s[o.local]=o.xform(s,e[o.server])}return I2(s,t),s}function hb(t,e,n){const s=lb(e);return s===null?null:b2(t,s,n)}function C2(t,e,n,s){const i=lb(e);if(i===null||!Jp(i.downloadTokens))return null;const r=i.downloadTokens;if(r.length===0)return null;const o=encodeURIComponent;return r.split(",").map(c=>{const u=t.bucket,h=t.fullPath,f="/b/"+o(u)+"/o/"+o(h),d=e_(f,n,s),m=ib({alt:"media",token:c});return d+m})[0]}function R2(t,e){const n={},s=e.length;for(let i=0;i<s;i++){const r=e[i];r.writable&&(n[r.server]=t[r.local])}return JSON.stringify(n)}class fb{constructor(e,n,s,i){this.url=e,this.method=n,this.handler=s,this.timeout=i,this.urlParams={},this.headers={},this.body=null,this.errorHandler=null,this.progressCallback=null,this.successCodes=[200],this.additionalRetryCodes=[]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function db(t){if(!t)throw Xp()}function S2(t,e){function n(s,i){const r=hb(t,i,e);return db(r!==null),r}return n}function P2(t,e){function n(s,i){const r=hb(t,i,e);return db(r!==null),C2(r,i,t.host,t._protocol)}return n}function pb(t){function e(n,s){let i;return n.getStatus()===401?n.getErrorText().includes("Firebase App Check token is invalid")?i=H$():i=B$():n.getStatus()===402?i=$$(t.bucket):n.getStatus()===403?i=j$(t.path):i=s,i.status=n.getStatus(),i.serverResponse=s.serverResponse,i}return e}function N2(t){const e=pb(t);function n(s,i){let r=e(s,i);return s.getStatus()===404&&(r=U$(t.path)),r.serverResponse=i.serverResponse,r}return n}function O2(t,e,n){const s=e.fullServerUrl(),i=e_(s,t.host,t._protocol),r="GET",o=t.maxOperationRetryTime,a=new fb(i,r,P2(t,n),o);return a.errorHandler=N2(e),a}function D2(t,e){return t&&t.contentType||e&&e.type()||"application/octet-stream"}function k2(t,e,n){const s=Object.assign({},n);return s.fullPath=t.path,s.size=e.size(),s.contentType||(s.contentType=D2(null,e)),s}function x2(t,e,n,s,i){const r=e.bucketOnlyServerUrl(),o={"X-Goog-Upload-Protocol":"multipart"};function a(){let b="";for(let v=0;v<2;v++)b=b+Math.random().toString().slice(2);return b}const l=a();o["Content-Type"]="multipart/related; boundary="+l;const c=k2(e,s,i),u=R2(c,n),h="--"+l+`\r
Content-Type: application/json; charset=utf-8\r
\r
`+u+`\r
--`+l+`\r
Content-Type: `+c.contentType+`\r
\r
`,f=`\r
--`+l+"--",d=ys.getBlob(h,s,f);if(d===null)throw Y$();const m={name:c.fullPath},g=e_(r,t.host,t._protocol),y="POST",T=t.maxUploadRetryTime,I=new fb(g,y,S2(t,n),T);return I.urlParams=m,I.headers=o,I.body=d.uploadData(),I.errorHandler=pb(e),I}class L2{constructor(){this.sent_=!1,this.xhr_=new XMLHttpRequest,this.initXhr(),this.errorCode_=ii.NO_ERROR,this.sendPromise_=new Promise(e=>{this.xhr_.addEventListener("abort",()=>{this.errorCode_=ii.ABORT,e()}),this.xhr_.addEventListener("error",()=>{this.errorCode_=ii.NETWORK_ERROR,e()}),this.xhr_.addEventListener("load",()=>{e()})})}send(e,n,s,i){if(this.sent_)throw so("cannot .send() more than once");if(this.sent_=!0,this.xhr_.open(n,e,!0),i!==void 0)for(const r in i)i.hasOwnProperty(r)&&this.xhr_.setRequestHeader(r,i[r].toString());return s!==void 0?this.xhr_.send(s):this.xhr_.send(),this.sendPromise_}getErrorCode(){if(!this.sent_)throw so("cannot .getErrorCode() before sending");return this.errorCode_}getStatus(){if(!this.sent_)throw so("cannot .getStatus() before sending");try{return this.xhr_.status}catch{return-1}}getResponse(){if(!this.sent_)throw so("cannot .getResponse() before sending");return this.xhr_.response}getErrorText(){if(!this.sent_)throw so("cannot .getErrorText() before sending");return this.xhr_.statusText}abort(){this.xhr_.abort()}getResponseHeader(e){return this.xhr_.getResponseHeader(e)}addUploadProgressListener(e){this.xhr_.upload!=null&&this.xhr_.upload.addEventListener("progress",e)}removeUploadProgressListener(e){this.xhr_.upload!=null&&this.xhr_.upload.removeEventListener("progress",e)}}class M2 extends L2{initXhr(){this.xhr_.responseType="text"}}function _b(){return new M2}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class yi{constructor(e,n){this._service=e,n instanceof jt?this._location=n:this._location=jt.makeFromUrl(n,e.host)}toString(){return"gs://"+this._location.bucket+"/"+this._location.path}_newRef(e,n){return new yi(e,n)}get root(){const e=new jt(this._location.bucket,"");return this._newRef(this._service,e)}get bucket(){return this._location.bucket}get fullPath(){return this._location.path}get name(){return cb(this._location.path)}get storage(){return this._service}get parent(){const e=v2(this._location.path);if(e===null)return null;const n=new jt(this._location.bucket,e);return new yi(this._service,n)}_throwIfRoot(e){if(this._location.path==="")throw J$(e)}}function V2(t,e,n){t._throwIfRoot("uploadBytes");const s=x2(t.storage,t._location,ub(),new ys(e,!0),n);return t.storage.makeRequestWithTokens(s,_b).then(i=>({metadata:i,ref:t}))}function F2(t){t._throwIfRoot("getDownloadURL");const e=O2(t.storage,t._location,ub());return t.storage.makeRequestWithTokens(e,_b).then(n=>{if(n===null)throw Q$();return n})}function U2(t,e){const n=T2(t._location.path,e),s=new jt(t._location.bucket,n);return new yi(t.storage,s)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function $2(t){return/^[A-Za-z]+:\/\//.test(t)}function B2(t,e){return new yi(t,e)}function mb(t,e){if(t instanceof t_){const n=t;if(n._bucket==null)throw G$();const s=new yi(n,n._bucket);return e!=null?mb(s,e):s}else return e!==void 0?U2(t,e):t}function H2(t,e){if(e&&$2(e)){if(t instanceof t_)return B2(t,e);throw kf("To use ref(service, url), the first argument must be a Storage instance.")}else return mb(t,e)}function by(t,e){const n=e==null?void 0:e[nb];return n==null?null:jt.makeFromBucketSpec(n,t)}function j2(t,e,n,s={}){t.host=`${e}:${n}`,t._protocol="http";const{mockUserToken:i}=s;i&&(t._overrideAuthToken=typeof i=="string"?i:tT(i,t.app.options.projectId))}class t_{constructor(e,n,s,i,r){this.app=e,this._authProvider=n,this._appCheckProvider=s,this._url=i,this._firebaseVersion=r,this._bucket=null,this._host=tb,this._protocol="https",this._appId=null,this._deleted=!1,this._maxOperationRetryTime=V$,this._maxUploadRetryTime=F$,this._requests=new Set,i!=null?this._bucket=jt.makeFromBucketSpec(i,this._host):this._bucket=by(this._host,this.app.options)}get host(){return this._host}set host(e){this._host=e,this._url!=null?this._bucket=jt.makeFromBucketSpec(this._url,e):this._bucket=by(e,this.app.options)}get maxUploadRetryTime(){return this._maxUploadRetryTime}set maxUploadRetryTime(e){Iy("time",0,Number.POSITIVE_INFINITY,e),this._maxUploadRetryTime=e}get maxOperationRetryTime(){return this._maxOperationRetryTime}set maxOperationRetryTime(e){Iy("time",0,Number.POSITIVE_INFINITY,e),this._maxOperationRetryTime=e}async _getAuthToken(){if(this._overrideAuthToken)return this._overrideAuthToken;const e=this._authProvider.getImmediate({optional:!0});if(e){const n=await e.getToken();if(n!==null)return n.accessToken}return null}async _getAppCheckToken(){const e=this._appCheckProvider.getImmediate({optional:!0});return e?(await e.getToken()).token:null}_delete(){return this._deleted||(this._deleted=!0,this._requests.forEach(e=>e.cancel()),this._requests.clear()),Promise.resolve()}_makeStorageReference(e){return new yi(this,e)}_makeRequest(e,n,s,i,r=!0){if(this._deleted)return new Z$(sb());{const o=u2(e,this._appId,s,i,n,this._firebaseVersion,r);return this._requests.add(o),o.getPromise().then(()=>this._requests.delete(o),()=>this._requests.delete(o)),o}}async makeRequestWithTokens(e,n){const[s,i]=await Promise.all([this._getAuthToken(),this._getAppCheckToken()]);return this._makeRequest(e,n,s,i).getPromise()}}const Cy="@firebase/storage",Ry="0.11.2";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const gb="storage";function nH(t,e,n){return t=St(t),V2(t,e,n)}function sH(t){return t=St(t),F2(t)}function W2(t,e){return t=St(t),H2(t,e)}function q2(t=Sd(),e){t=St(t);const s=lT(t,gb).getImmediate({identifier:e}),i=Zv("storage");return i&&K2(s,...i),s}function K2(t,e,n,s={}){j2(t,e,n,s)}function z2(t,{instanceIdentifier:e}){const n=t.getProvider("app").getImmediate(),s=t.getProvider("auth-internal"),i=t.getProvider("app-check-internal");return new t_(n,s,i,e,Mr)}function G2(){Hn(new yn(gb,z2,"PUBLIC").setMultipleInstances(!0)),Wt(Cy,Ry,""),Wt(Cy,Ry,"esm2017")}G2();const dh=new WeakMap;function yb(t,e){return dh.has(e)||dh.set(e,t||{f:{},r:{},s:{},u:{}}),dh.get(e)}function Y2(t,e,n,s){if(!t)return n;const[i,r]=Eb(t);if(!i)return n;const o=yb(void 0,s)[i]||{},a=e||r;return a&&a in o?o[a]:n}function Q2(t,e,n,s){if(!t)return;const[i,r]=Eb(t);if(!i)return;const o=yb(void 0,s)[i],a=e||r;if(a)return n.then(l=>{o[a]=l}).catch(Sn),a}function Eb(t){return $x(t)||Bx(t)?["f",t.path]:Hx(t)?["r",t.toString()]:jx(t)?["s",t.toString()]:[]}const ph=new WeakMap;function X2(t,e,n){const s=CT();ph.has(s)||ph.set(s,new Map);const i=ph.get(s),r=Q2(e,n,t,s);return r&&i.set(r,t),r?()=>i.delete(r):Sn}const J2={toFirestore(t){return t},fromFirestore(t,e){return t.exists()?Object.defineProperties(t.data(e),{id:{value:t.id}}):null}};function xf(t,e,n,s){if(!Fx(t))return[t,{}];const i=[{},{}],r=Object.keys(n).reduce((a,l)=>{const c=n[l];return a[c.path]=c.data(),a},{});function o(a,l,c,u){l=l||{};const[h,f]=u;Object.getOwnPropertyNames(a).forEach(d=>{const m=Object.getOwnPropertyDescriptor(a,d);m&&!m.enumerable&&Object.defineProperty(h,d,m)});for(const d in a){const m=a[d];if(m==null||m instanceof Date||m instanceof Ke||m instanceof pu)h[d]=m;else if(Dd(m)){const g=c+d;h[d]=g in n?l[d]:m.path,f[g]=m.converter?m:m.withConverter(s.converter)}else if(Array.isArray(m)){h[d]=Array(m.length);for(let g=0;g<m.length;g++){const y=m[g];y&&y.path in r&&(h[d][g]=r[y.path])}o(m,l[d]||h[d],c+d+".",[h[d],f])}else Ti(m)?(h[d]={},o(m,l[d],c+d+".",[h[d],f])):h[d]=m}}return o(t,e,"",i),i}const n_={reset:!1,wait:!0,maxRefDepth:2,converter:J2,snapshotOptions:{serverTimestamps:"estimate"}};function lc(t){for(const e in t)t[e].unsub()}function Lf(t,e,n,s,i,r,o,a,l){const[c,u]=xf(s.data(t.snapshotOptions),Od(e,n),i,t);r.set(e,n,c),Mf(t,e,n,i,u,r,o,a,l)}function Z2({ref:t,target:e,path:n,depth:s,resolve:i,reject:r,ops:o},a){const l=Object.create(null);let c=Sn;return a.once?ZI(t).then(u=>{u.exists()?Lf(a,e,n,u,l,o,s,i,r):(o.set(e,n,null),i())}).catch(r):c=Qp(t,u=>{u.exists()?Lf(a,e,n,u,l,o,s,i,r):(o.set(e,n,null),i())},r),()=>{c(),lc(l)}}function Mf(t,e,n,s,i,r,o,a,l){const c=Object.keys(i);if(Object.keys(s).filter(g=>c.indexOf(g)<0).forEach(g=>{s[g].unsub(),delete s[g]}),!c.length||++o>t.maxRefDepth)return a(n);let h=0;const f=c.length,d=Object.create(null);function m(g){g in d&&++h>=f&&a(n)}c.forEach(g=>{const y=s[g],T=i[g],I=`${n}.${g}`;if(d[I]=!0,y)if(y.path!==T.path)y.unsub();else return;s[g]={data:()=>Od(e,I),unsub:Z2({ref:T,target:e,path:I,depth:o,ops:r,resolve:m.bind(null,I),reject:l},t),path:T.path}})}function eB(t,e,n,s,i,r){const o=Object.assign({},n_,r),{snapshotListenOptions:a,snapshotOptions:l,wait:c,once:u}=o,h="value";let f=Gi(c?[]:t.value);c||n.set(t,h,[]);const d=s;let m,g=Sn;const y=[],T={added:({newIndex:b,doc:v})=>{y.splice(b,0,Object.create(null));const U=y[b],[$,Y]=xf(v.data(l),void 0,U,o);n.add(Kn(f),b,$),Mf(o,f,`${h}.${b}`,U,Y,n,0,s.bind(null,v),i)},modified:({oldIndex:b,newIndex:v,doc:U})=>{const $=Kn(f),Y=y[b],te=$[b],[_e,oe]=xf(U.data(l),te,Y,o);y.splice(v,0,Y),n.remove($,b),n.add($,v,_e),Mf(o,f,`${h}.${v}`,Y,oe,n,0,s,i)},removed:({oldIndex:b})=>{const v=Kn(f);n.remove(v,b),lc(y.splice(b,1)[0])}};function I(b){const v=b.docChanges(a);if(!m&&v.length){m=!0;let U=0;const $=v.length,Y=Object.create(null);for(let te=0;te<$;te++)Y[v[te].doc.id]=!0;s=te=>{te&&te.id in Y&&++U>=$&&(c&&(n.set(t,h,Kn(f)),f=t),d(Kn(f)),s=Sn)}}v.forEach(U=>{T[U.type](U)}),v.length||(c&&(n.set(t,h,Kn(f)),f=t),s(Kn(f)))}return u?L$(e).then(I).catch(i):g=Qp(e,I,i),b=>{if(g(),b){const v=typeof b=="function"?b():[];n.set(t,h,v)}y.forEach(lc)}}function tB(t,e,n,s,i,r){const o=Object.assign({},n_,r),a="value",l=Object.create(null);s=Wx(s,()=>Od(t,a));let c=Sn;function u(h){h.exists()?Lf(o,t,a,h,l,n,0,s,i):(n.set(t,a,null),s(null))}return o.once?ZI(e).then(u).catch(i):c=Qp(e,u,i),h=>{if(c(),h){const f=typeof h=="function"?h():null;n.set(t,a,f)}lc(l)}}const Sy=Symbol();function vb(t,e){let n=Sn;const s=Object.assign({},n_,e),i=Kn(t),r=s.target||Gi();Kx()&&(s.once=!0);const o=Y2(i,s.ssrKey,Sy,CT()),a=o!==Sy;a&&(r.value=o);let l=!a;const c=Gi(!1),u=Gi(),h=mv(),f=ZE();let d=Sn;function m(){let T=Kn(t);const I=new Promise((b,v)=>{if(n(s.reset),!T)return n=Sn,b(null);c.value=l,l=!0,T.converter||(T=T.withConverter(s.converter)),n=(Dd(T)?tB:eB)(r,T,nB,b,v,s)}).catch(b=>(h.value===I&&(u.value=b),Promise.reject(b))).finally(()=>{h.value===I&&(c.value=!1)});h.value=I}let g=Sn;lt(t)&&(g=go(t,m)),m(),i&&(d=X2(h.value,i,s.ssrKey)),qv()&&kv(()=>h.value),f&&GP(y);function y(T=s.reset){g(),d(),n(T)}return Object.defineProperties(r,{error:{get:()=>u},data:{get:()=>r},pending:{get:()=>c},promise:{get:()=>h},stop:{get:()=>y}})}const nB={set:(t,e,n)=>Mx(t,e,n),add:(t,e,n)=>t.splice(e,0,n),remove:(t,e)=>t.splice(e,1)};function sB(t,e){return vb(t,{target:Gi([]),...e})}function iH(t,e){return vb(t,e)}function iB(t,{firebaseApp:e,modules:n=[]}){t.provide(bT,e);for(const s of n)s(e,t)}/*!
  * vue-router v4.2.5
  * (c) 2023 Eduardo San Martin Morote
  * @license MIT
  */const $i=typeof window<"u";function rB(t){return t.__esModule||t[Symbol.toStringTag]==="Module"}const Ae=Object.assign;function _h(t,e){const n={};for(const s in e){const i=e[s];n[s]=Tn(i)?i.map(t):t(i)}return n}const Oo=()=>{},Tn=Array.isArray,oB=/\/$/,aB=t=>t.replace(oB,"");function mh(t,e,n="/"){let s,i={},r="",o="";const a=e.indexOf("#");let l=e.indexOf("?");return a<l&&a>=0&&(l=-1),l>-1&&(s=e.slice(0,l),r=e.slice(l+1,a>-1?a:e.length),i=t(r)),a>-1&&(s=s||e.slice(0,a),o=e.slice(a,e.length)),s=hB(s??e,n),{fullPath:s+(r&&"?")+r+o,path:s,query:i,hash:o}}function lB(t,e){const n=e.query?t(e.query):"";return e.path+(n&&"?")+n+(e.hash||"")}function Py(t,e){return!e||!t.toLowerCase().startsWith(e.toLowerCase())?t:t.slice(e.length)||"/"}function cB(t,e,n){const s=e.matched.length-1,i=n.matched.length-1;return s>-1&&s===i&&br(e.matched[s],n.matched[i])&&Tb(e.params,n.params)&&t(e.query)===t(n.query)&&e.hash===n.hash}function br(t,e){return(t.aliasOf||t)===(e.aliasOf||e)}function Tb(t,e){if(Object.keys(t).length!==Object.keys(e).length)return!1;for(const n in t)if(!uB(t[n],e[n]))return!1;return!0}function uB(t,e){return Tn(t)?Ny(t,e):Tn(e)?Ny(e,t):t===e}function Ny(t,e){return Tn(e)?t.length===e.length&&t.every((n,s)=>n===e[s]):t.length===1&&t[0]===e}function hB(t,e){if(t.startsWith("/"))return t;if(!t)return e;const n=e.split("/"),s=t.split("/"),i=s[s.length-1];(i===".."||i===".")&&s.push("");let r=n.length-1,o,a;for(o=0;o<s.length;o++)if(a=s[o],a!==".")if(a==="..")r>1&&r--;else break;return n.slice(0,r).join("/")+"/"+s.slice(o-(o===s.length?1:0)).join("/")}var ra;(function(t){t.pop="pop",t.push="push"})(ra||(ra={}));var Do;(function(t){t.back="back",t.forward="forward",t.unknown=""})(Do||(Do={}));function fB(t){if(!t)if($i){const e=document.querySelector("base");t=e&&e.getAttribute("href")||"/",t=t.replace(/^\w+:\/\/[^\/]+/,"")}else t="/";return t[0]!=="/"&&t[0]!=="#"&&(t="/"+t),aB(t)}const dB=/^[^#]+#/;function pB(t,e){return t.replace(dB,"#")+e}function _B(t,e){const n=document.documentElement.getBoundingClientRect(),s=t.getBoundingClientRect();return{behavior:e.behavior,left:s.left-n.left-(e.left||0),top:s.top-n.top-(e.top||0)}}const _u=()=>({left:window.pageXOffset,top:window.pageYOffset});function mB(t){let e;if("el"in t){const n=t.el,s=typeof n=="string"&&n.startsWith("#"),i=typeof n=="string"?s?document.getElementById(n.slice(1)):document.querySelector(n):n;if(!i)return;e=_B(i,t)}else e=t;"scrollBehavior"in document.documentElement.style?window.scrollTo(e):window.scrollTo(e.left!=null?e.left:window.pageXOffset,e.top!=null?e.top:window.pageYOffset)}function Oy(t,e){return(history.state?history.state.position-e:-1)+t}const Vf=new Map;function gB(t,e){Vf.set(t,e)}function yB(t){const e=Vf.get(t);return Vf.delete(t),e}let EB=()=>location.protocol+"//"+location.host;function wb(t,e){const{pathname:n,search:s,hash:i}=e,r=t.indexOf("#");if(r>-1){let a=i.includes(t.slice(r))?t.slice(r).length:1,l=i.slice(a);return l[0]!=="/"&&(l="/"+l),Py(l,"")}return Py(n,t)+s+i}function vB(t,e,n,s){let i=[],r=[],o=null;const a=({state:f})=>{const d=wb(t,location),m=n.value,g=e.value;let y=0;if(f){if(n.value=d,e.value=f,o&&o===m){o=null;return}y=g?f.position-g.position:0}else s(d);i.forEach(T=>{T(n.value,m,{delta:y,type:ra.pop,direction:y?y>0?Do.forward:Do.back:Do.unknown})})};function l(){o=n.value}function c(f){i.push(f);const d=()=>{const m=i.indexOf(f);m>-1&&i.splice(m,1)};return r.push(d),d}function u(){const{history:f}=window;f.state&&f.replaceState(Ae({},f.state,{scroll:_u()}),"")}function h(){for(const f of r)f();r=[],window.removeEventListener("popstate",a),window.removeEventListener("beforeunload",u)}return window.addEventListener("popstate",a),window.addEventListener("beforeunload",u,{passive:!0}),{pauseListeners:l,listen:c,destroy:h}}function Dy(t,e,n,s=!1,i=!1){return{back:t,current:e,forward:n,replaced:s,position:window.history.length,scroll:i?_u():null}}function TB(t){const{history:e,location:n}=window,s={value:wb(t,n)},i={value:e.state};i.value||r(s.value,{back:null,current:s.value,forward:null,position:e.length-1,replaced:!0,scroll:null},!0);function r(l,c,u){const h=t.indexOf("#"),f=h>-1?(n.host&&document.querySelector("base")?t:t.slice(h))+l:EB()+t+l;try{e[u?"replaceState":"pushState"](c,"",f),i.value=c}catch(d){console.error(d),n[u?"replace":"assign"](f)}}function o(l,c){const u=Ae({},e.state,Dy(i.value.back,l,i.value.forward,!0),c,{position:i.value.position});r(l,u,!0),s.value=l}function a(l,c){const u=Ae({},i.value,e.state,{forward:l,scroll:_u()});r(u.current,u,!0);const h=Ae({},Dy(s.value,l,null),{position:u.position+1},c);r(l,h,!1),s.value=l}return{location:s,state:i,push:a,replace:o}}function wB(t){t=fB(t);const e=TB(t),n=vB(t,e.state,e.location,e.replace);function s(r,o=!0){o||n.pauseListeners(),history.go(r)}const i=Ae({location:"",base:t,go:s,createHref:pB.bind(null,t)},e,n);return Object.defineProperty(i,"location",{enumerable:!0,get:()=>e.location.value}),Object.defineProperty(i,"state",{enumerable:!0,get:()=>e.state.value}),i}function AB(t){return typeof t=="string"||t&&typeof t=="object"}function Ab(t){return typeof t=="string"||typeof t=="symbol"}const _s={path:"/",name:void 0,params:{},query:{},hash:"",fullPath:"/",matched:[],meta:{},redirectedFrom:void 0},Ib=Symbol("");var ky;(function(t){t[t.aborted=4]="aborted",t[t.cancelled=8]="cancelled",t[t.duplicated=16]="duplicated"})(ky||(ky={}));function Cr(t,e){return Ae(new Error,{type:t,[Ib]:!0},e)}function qn(t,e){return t instanceof Error&&Ib in t&&(e==null||!!(t.type&e))}const xy="[^/]+?",IB={sensitive:!1,strict:!1,start:!0,end:!0},bB=/[.+*?^${}()[\]/\\]/g;function CB(t,e){const n=Ae({},IB,e),s=[];let i=n.start?"^":"";const r=[];for(const c of t){const u=c.length?[]:[90];n.strict&&!c.length&&(i+="/");for(let h=0;h<c.length;h++){const f=c[h];let d=40+(n.sensitive?.25:0);if(f.type===0)h||(i+="/"),i+=f.value.replace(bB,"\\$&"),d+=40;else if(f.type===1){const{value:m,repeatable:g,optional:y,regexp:T}=f;r.push({name:m,repeatable:g,optional:y});const I=T||xy;if(I!==xy){d+=10;try{new RegExp(`(${I})`)}catch(v){throw new Error(`Invalid custom RegExp for param "${m}" (${I}): `+v.message)}}let b=g?`((?:${I})(?:/(?:${I}))*)`:`(${I})`;h||(b=y&&c.length<2?`(?:/${b})`:"/"+b),y&&(b+="?"),i+=b,d+=20,y&&(d+=-8),g&&(d+=-20),I===".*"&&(d+=-50)}u.push(d)}s.push(u)}if(n.strict&&n.end){const c=s.length-1;s[c][s[c].length-1]+=.7000000000000001}n.strict||(i+="/?"),n.end?i+="$":n.strict&&(i+="(?:/|$)");const o=new RegExp(i,n.sensitive?"":"i");function a(c){const u=c.match(o),h={};if(!u)return null;for(let f=1;f<u.length;f++){const d=u[f]||"",m=r[f-1];h[m.name]=d&&m.repeatable?d.split("/"):d}return h}function l(c){let u="",h=!1;for(const f of t){(!h||!u.endsWith("/"))&&(u+="/"),h=!1;for(const d of f)if(d.type===0)u+=d.value;else if(d.type===1){const{value:m,repeatable:g,optional:y}=d,T=m in c?c[m]:"";if(Tn(T)&&!g)throw new Error(`Provided param "${m}" is an array but it is not repeatable (* or + modifiers)`);const I=Tn(T)?T.join("/"):T;if(!I)if(y)f.length<2&&(u.endsWith("/")?u=u.slice(0,-1):h=!0);else throw new Error(`Missing required param "${m}"`);u+=I}}return u||"/"}return{re:o,score:s,keys:r,parse:a,stringify:l}}function RB(t,e){let n=0;for(;n<t.length&&n<e.length;){const s=e[n]-t[n];if(s)return s;n++}return t.length<e.length?t.length===1&&t[0]===40+40?-1:1:t.length>e.length?e.length===1&&e[0]===40+40?1:-1:0}function SB(t,e){let n=0;const s=t.score,i=e.score;for(;n<s.length&&n<i.length;){const r=RB(s[n],i[n]);if(r)return r;n++}if(Math.abs(i.length-s.length)===1){if(Ly(s))return 1;if(Ly(i))return-1}return i.length-s.length}function Ly(t){const e=t[t.length-1];return t.length>0&&e[e.length-1]<0}const PB={type:0,value:""},NB=/[a-zA-Z0-9_]/;function OB(t){if(!t)return[[]];if(t==="/")return[[PB]];if(!t.startsWith("/"))throw new Error(`Invalid path "${t}"`);function e(d){throw new Error(`ERR (${n})/"${c}": ${d}`)}let n=0,s=n;const i=[];let r;function o(){r&&i.push(r),r=[]}let a=0,l,c="",u="";function h(){c&&(n===0?r.push({type:0,value:c}):n===1||n===2||n===3?(r.length>1&&(l==="*"||l==="+")&&e(`A repeatable param (${c}) must be alone in its segment. eg: '/:ids+.`),r.push({type:1,value:c,regexp:u,repeatable:l==="*"||l==="+",optional:l==="*"||l==="?"})):e("Invalid state to consume buffer"),c="")}function f(){c+=l}for(;a<t.length;){if(l=t[a++],l==="\\"&&n!==2){s=n,n=4;continue}switch(n){case 0:l==="/"?(c&&h(),o()):l===":"?(h(),n=1):f();break;case 4:f(),n=s;break;case 1:l==="("?n=2:NB.test(l)?f():(h(),n=0,l!=="*"&&l!=="?"&&l!=="+"&&a--);break;case 2:l===")"?u[u.length-1]=="\\"?u=u.slice(0,-1)+l:n=3:u+=l;break;case 3:h(),n=0,l!=="*"&&l!=="?"&&l!=="+"&&a--,u="";break;default:e("Unknown state");break}}return n===2&&e(`Unfinished custom RegExp for param "${c}"`),h(),o(),i}function DB(t,e,n){const s=CB(OB(t.path),n),i=Ae(s,{record:t,parent:e,children:[],alias:[]});return e&&!i.record.aliasOf==!e.record.aliasOf&&e.children.push(i),i}function kB(t,e){const n=[],s=new Map;e=Fy({strict:!1,end:!0,sensitive:!1},e);function i(u){return s.get(u)}function r(u,h,f){const d=!f,m=xB(u);m.aliasOf=f&&f.record;const g=Fy(e,u),y=[m];if("alias"in u){const b=typeof u.alias=="string"?[u.alias]:u.alias;for(const v of b)y.push(Ae({},m,{components:f?f.record.components:m.components,path:v,aliasOf:f?f.record:m}))}let T,I;for(const b of y){const{path:v}=b;if(h&&v[0]!=="/"){const U=h.record.path,$=U[U.length-1]==="/"?"":"/";b.path=h.record.path+(v&&$+v)}if(T=DB(b,h,g),f?f.alias.push(T):(I=I||T,I!==T&&I.alias.push(T),d&&u.name&&!Vy(T)&&o(u.name)),m.children){const U=m.children;for(let $=0;$<U.length;$++)r(U[$],T,f&&f.children[$])}f=f||T,(T.record.components&&Object.keys(T.record.components).length||T.record.name||T.record.redirect)&&l(T)}return I?()=>{o(I)}:Oo}function o(u){if(Ab(u)){const h=s.get(u);h&&(s.delete(u),n.splice(n.indexOf(h),1),h.children.forEach(o),h.alias.forEach(o))}else{const h=n.indexOf(u);h>-1&&(n.splice(h,1),u.record.name&&s.delete(u.record.name),u.children.forEach(o),u.alias.forEach(o))}}function a(){return n}function l(u){let h=0;for(;h<n.length&&SB(u,n[h])>=0&&(u.record.path!==n[h].record.path||!bb(u,n[h]));)h++;n.splice(h,0,u),u.record.name&&!Vy(u)&&s.set(u.record.name,u)}function c(u,h){let f,d={},m,g;if("name"in u&&u.name){if(f=s.get(u.name),!f)throw Cr(1,{location:u});g=f.record.name,d=Ae(My(h.params,f.keys.filter(I=>!I.optional).map(I=>I.name)),u.params&&My(u.params,f.keys.map(I=>I.name))),m=f.stringify(d)}else if("path"in u)m=u.path,f=n.find(I=>I.re.test(m)),f&&(d=f.parse(m),g=f.record.name);else{if(f=h.name?s.get(h.name):n.find(I=>I.re.test(h.path)),!f)throw Cr(1,{location:u,currentLocation:h});g=f.record.name,d=Ae({},h.params,u.params),m=f.stringify(d)}const y=[];let T=f;for(;T;)y.unshift(T.record),T=T.parent;return{name:g,path:m,params:d,matched:y,meta:MB(y)}}return t.forEach(u=>r(u)),{addRoute:r,resolve:c,removeRoute:o,getRoutes:a,getRecordMatcher:i}}function My(t,e){const n={};for(const s of e)s in t&&(n[s]=t[s]);return n}function xB(t){return{path:t.path,redirect:t.redirect,name:t.name,meta:t.meta||{},aliasOf:void 0,beforeEnter:t.beforeEnter,props:LB(t),children:t.children||[],instances:{},leaveGuards:new Set,updateGuards:new Set,enterCallbacks:{},components:"components"in t?t.components||null:t.component&&{default:t.component}}}function LB(t){const e={},n=t.props||!1;if("component"in t)e.default=n;else for(const s in t.components)e[s]=typeof n=="object"?n[s]:n;return e}function Vy(t){for(;t;){if(t.record.aliasOf)return!0;t=t.parent}return!1}function MB(t){return t.reduce((e,n)=>Ae(e,n.meta),{})}function Fy(t,e){const n={};for(const s in t)n[s]=s in e?e[s]:t[s];return n}function bb(t,e){return e.children.some(n=>n===t||bb(t,n))}const Cb=/#/g,VB=/&/g,FB=/\//g,UB=/=/g,$B=/\?/g,Rb=/\+/g,BB=/%5B/g,HB=/%5D/g,Sb=/%5E/g,jB=/%60/g,Pb=/%7B/g,WB=/%7C/g,Nb=/%7D/g,qB=/%20/g;function s_(t){return encodeURI(""+t).replace(WB,"|").replace(BB,"[").replace(HB,"]")}function KB(t){return s_(t).replace(Pb,"{").replace(Nb,"}").replace(Sb,"^")}function Ff(t){return s_(t).replace(Rb,"%2B").replace(qB,"+").replace(Cb,"%23").replace(VB,"%26").replace(jB,"`").replace(Pb,"{").replace(Nb,"}").replace(Sb,"^")}function zB(t){return Ff(t).replace(UB,"%3D")}function GB(t){return s_(t).replace(Cb,"%23").replace($B,"%3F")}function YB(t){return t==null?"":GB(t).replace(FB,"%2F")}function cc(t){try{return decodeURIComponent(""+t)}catch{}return""+t}function QB(t){const e={};if(t===""||t==="?")return e;const s=(t[0]==="?"?t.slice(1):t).split("&");for(let i=0;i<s.length;++i){const r=s[i].replace(Rb," "),o=r.indexOf("="),a=cc(o<0?r:r.slice(0,o)),l=o<0?null:cc(r.slice(o+1));if(a in e){let c=e[a];Tn(c)||(c=e[a]=[c]),c.push(l)}else e[a]=l}return e}function Uy(t){let e="";for(let n in t){const s=t[n];if(n=zB(n),s==null){s!==void 0&&(e+=(e.length?"&":"")+n);continue}(Tn(s)?s.map(r=>r&&Ff(r)):[s&&Ff(s)]).forEach(r=>{r!==void 0&&(e+=(e.length?"&":"")+n,r!=null&&(e+="="+r))})}return e}function XB(t){const e={};for(const n in t){const s=t[n];s!==void 0&&(e[n]=Tn(s)?s.map(i=>i==null?null:""+i):s==null?s:""+s)}return e}const JB=Symbol(""),$y=Symbol(""),i_=Symbol(""),r_=Symbol(""),Uf=Symbol("");function io(){let t=[];function e(s){return t.push(s),()=>{const i=t.indexOf(s);i>-1&&t.splice(i,1)}}function n(){t=[]}return{add:e,list:()=>t.slice(),reset:n}}function gs(t,e,n,s,i){const r=s&&(s.enterCallbacks[i]=s.enterCallbacks[i]||[]);return()=>new Promise((o,a)=>{const l=h=>{h===!1?a(Cr(4,{from:n,to:e})):h instanceof Error?a(h):AB(h)?a(Cr(2,{from:e,to:h})):(r&&s.enterCallbacks[i]===r&&typeof h=="function"&&r.push(h),o())},c=t.call(s&&s.instances[i],e,n,l);let u=Promise.resolve(c);t.length<3&&(u=u.then(l)),u.catch(h=>a(h))})}function gh(t,e,n,s){const i=[];for(const r of t)for(const o in r.components){let a=r.components[o];if(!(e!=="beforeRouteEnter"&&!r.instances[o]))if(ZB(a)){const c=(a.__vccOpts||a)[e];c&&i.push(gs(c,n,s,r,o))}else{let l=a();i.push(()=>l.then(c=>{if(!c)return Promise.reject(new Error(`Couldn't resolve component "${o}" at "${r.path}"`));const u=rB(c)?c.default:c;r.components[o]=u;const f=(u.__vccOpts||u)[e];return f&&gs(f,n,s,r,o)()}))}}return i}function ZB(t){return typeof t=="object"||"displayName"in t||"props"in t||"__vccOpts"in t}function By(t){const e=tn(i_),n=tn(r_),s=un(()=>e.resolve(Zn(t.to))),i=un(()=>{const{matched:l}=s.value,{length:c}=l,u=l[c-1],h=n.matched;if(!u||!h.length)return-1;const f=h.findIndex(br.bind(null,u));if(f>-1)return f;const d=Hy(l[c-2]);return c>1&&Hy(u)===d&&h[h.length-1].path!==d?h.findIndex(br.bind(null,l[c-2])):f}),r=un(()=>i.value>-1&&s4(n.params,s.value.params)),o=un(()=>i.value>-1&&i.value===n.matched.length-1&&Tb(n.params,s.value.params));function a(l={}){return n4(l)?e[Zn(t.replace)?"replace":"push"](Zn(t.to)).catch(Oo):Promise.resolve()}return{route:s,href:un(()=>s.value.href),isActive:r,isExactActive:o,navigate:a}}const e4=Pv({name:"RouterLink",compatConfig:{MODE:3},props:{to:{type:[String,Object],required:!0},replace:Boolean,activeClass:String,exactActiveClass:String,custom:Boolean,ariaCurrentValue:{type:String,default:"page"}},useLink:By,setup(t,{slots:e}){const n=Ic(By(t)),{options:s}=tn(i_),i=un(()=>({[jy(t.activeClass,s.linkActiveClass,"router-link-active")]:n.isActive,[jy(t.exactActiveClass,s.linkExactActiveClass,"router-link-exact-active")]:n.isExactActive}));return()=>{const r=e.default&&e.default(n);return t.custom?r:Gv("a",{"aria-current":n.isExactActive?t.ariaCurrentValue:null,href:n.href,onClick:n.navigate,class:i.value},r)}}}),t4=e4;function n4(t){if(!(t.metaKey||t.altKey||t.ctrlKey||t.shiftKey)&&!t.defaultPrevented&&!(t.button!==void 0&&t.button!==0)){if(t.currentTarget&&t.currentTarget.getAttribute){const e=t.currentTarget.getAttribute("target");if(/\b_blank\b/i.test(e))return}return t.preventDefault&&t.preventDefault(),!0}}function s4(t,e){for(const n in e){const s=e[n],i=t[n];if(typeof s=="string"){if(s!==i)return!1}else if(!Tn(i)||i.length!==s.length||s.some((r,o)=>r!==i[o]))return!1}return!0}function Hy(t){return t?t.aliasOf?t.aliasOf.path:t.path:""}const jy=(t,e,n)=>t??e??n,i4=Pv({name:"RouterView",inheritAttrs:!1,props:{name:{type:String,default:"default"},route:Object},compatConfig:{MODE:3},setup(t,{attrs:e,slots:n}){const s=tn(Uf),i=un(()=>t.route||s.value),r=tn($y,0),o=un(()=>{let c=Zn(r);const{matched:u}=i.value;let h;for(;(h=u[c])&&!h.components;)c++;return c}),a=un(()=>i.value.matched[o.value]);dl($y,un(()=>o.value+1)),dl(JB,a),dl(Uf,i);const l=Gi();return go(()=>[l.value,a.value,t.name],([c,u,h],[f,d,m])=>{u&&(u.instances[h]=c,d&&d!==u&&c&&c===f&&(u.leaveGuards.size||(u.leaveGuards=d.leaveGuards),u.updateGuards.size||(u.updateGuards=d.updateGuards))),c&&u&&(!d||!br(u,d)||!f)&&(u.enterCallbacks[h]||[]).forEach(g=>g(c))},{flush:"post"}),()=>{const c=i.value,u=t.name,h=a.value,f=h&&h.components[u];if(!f)return Wy(n.default,{Component:f,route:c});const d=h.props[u],m=d?d===!0?c.params:typeof d=="function"?d(c):d:null,y=Gv(f,Ae({},m,e,{onVnodeUnmounted:T=>{T.component.isUnmounted&&(h.instances[u]=null)},ref:l}));return Wy(n.default,{Component:y,route:c})||y}}});function Wy(t,e){if(!t)return null;const n=t(e);return n.length===1?n[0]:n}const Ob=i4;function r4(t){const e=kB(t.routes,t),n=t.parseQuery||QB,s=t.stringifyQuery||Uy,i=t.history,r=io(),o=io(),a=io(),l=mv(_s);let c=_s;$i&&t.scrollBehavior&&"scrollRestoration"in history&&(history.scrollRestoration="manual");const u=_h.bind(null,A=>""+A),h=_h.bind(null,YB),f=_h.bind(null,cc);function d(A,V){let x,j;return Ab(A)?(x=e.getRecordMatcher(A),j=V):j=A,e.addRoute(j,x)}function m(A){const V=e.getRecordMatcher(A);V&&e.removeRoute(V)}function g(){return e.getRoutes().map(A=>A.record)}function y(A){return!!e.getRecordMatcher(A)}function T(A,V){if(V=Ae({},V||l.value),typeof A=="string"){const E=mh(n,A,V.path),w=e.resolve({path:E.path},V),C=i.createHref(E.fullPath);return Ae(E,w,{params:f(w.params),hash:cc(E.hash),redirectedFrom:void 0,href:C})}let x;if("path"in A)x=Ae({},A,{path:mh(n,A.path,V.path).path});else{const E=Ae({},A.params);for(const w in E)E[w]==null&&delete E[w];x=Ae({},A,{params:h(E)}),V.params=h(V.params)}const j=e.resolve(x,V),he=A.hash||"";j.params=u(f(j.params));const p=lB(s,Ae({},A,{hash:KB(he),path:j.path})),_=i.createHref(p);return Ae({fullPath:p,hash:he,query:s===Uy?XB(A.query):A.query||{}},j,{redirectedFrom:void 0,href:_})}function I(A){return typeof A=="string"?mh(n,A,l.value.path):Ae({},A)}function b(A,V){if(c!==A)return Cr(8,{from:V,to:A})}function v(A){return Y(A)}function U(A){return v(Ae(I(A),{replace:!0}))}function $(A){const V=A.matched[A.matched.length-1];if(V&&V.redirect){const{redirect:x}=V;let j=typeof x=="function"?x(A):x;return typeof j=="string"&&(j=j.includes("?")||j.includes("#")?j=I(j):{path:j},j.params={}),Ae({query:A.query,hash:A.hash,params:"path"in j?{}:A.params},j)}}function Y(A,V){const x=c=T(A),j=l.value,he=A.state,p=A.force,_=A.replace===!0,E=$(x);if(E)return Y(Ae(I(E),{state:typeof E=="object"?Ae({},he,E.state):he,force:p,replace:_}),V||x);const w=x;w.redirectedFrom=V;let C;return!p&&cB(s,j,x)&&(C=Cr(16,{to:w,from:j}),Nt(j,j,!0,!1)),(C?Promise.resolve(C):oe(w,j)).catch(R=>qn(R)?qn(R,2)?R:Mt(R):ce(R,w,j)).then(R=>{if(R){if(qn(R,2))return Y(Ae({replace:_},I(R.to),{state:typeof R.to=="object"?Ae({},he,R.to.state):he,force:p}),V||w)}else R=ze(w,j,!0,_,he);return Se(w,j,R),R})}function te(A,V){const x=b(A,V);return x?Promise.reject(x):Promise.resolve()}function _e(A){const V=Vt.values().next().value;return V&&typeof V.runWithContext=="function"?V.runWithContext(A):A()}function oe(A,V){let x;const[j,he,p]=o4(A,V);x=gh(j.reverse(),"beforeRouteLeave",A,V);for(const E of j)E.leaveGuards.forEach(w=>{x.push(gs(w,A,V))});const _=te.bind(null,A,V);return x.push(_),Fe(x).then(()=>{x=[];for(const E of r.list())x.push(gs(E,A,V));return x.push(_),Fe(x)}).then(()=>{x=gh(he,"beforeRouteUpdate",A,V);for(const E of he)E.updateGuards.forEach(w=>{x.push(gs(w,A,V))});return x.push(_),Fe(x)}).then(()=>{x=[];for(const E of p)if(E.beforeEnter)if(Tn(E.beforeEnter))for(const w of E.beforeEnter)x.push(gs(w,A,V));else x.push(gs(E.beforeEnter,A,V));return x.push(_),Fe(x)}).then(()=>(A.matched.forEach(E=>E.enterCallbacks={}),x=gh(p,"beforeRouteEnter",A,V),x.push(_),Fe(x))).then(()=>{x=[];for(const E of o.list())x.push(gs(E,A,V));return x.push(_),Fe(x)}).catch(E=>qn(E,8)?E:Promise.reject(E))}function Se(A,V,x){a.list().forEach(j=>_e(()=>j(A,V,x)))}function ze(A,V,x,j,he){const p=b(A,V);if(p)return p;const _=V===_s,E=$i?history.state:{};x&&(j||_?i.replace(A.fullPath,Ae({scroll:_&&E&&E.scroll},he)):i.push(A.fullPath,he)),l.value=A,Nt(A,V,x,_),Mt()}let Re;function Lt(){Re||(Re=i.listen((A,V,x)=>{if(!Ft.listening)return;const j=T(A),he=$(j);if(he){Y(Ae(he,{replace:!0}),j).catch(Oo);return}c=j;const p=l.value;$i&&gB(Oy(p.fullPath,x.delta),_u()),oe(j,p).catch(_=>qn(_,12)?_:qn(_,2)?(Y(_.to,j).then(E=>{qn(E,20)&&!x.delta&&x.type===ra.pop&&i.go(-1,!1)}).catch(Oo),Promise.reject()):(x.delta&&i.go(-x.delta,!1),ce(_,j,p))).then(_=>{_=_||ze(j,p,!1),_&&(x.delta&&!qn(_,8)?i.go(-x.delta,!1):x.type===ra.pop&&qn(_,20)&&i.go(-1,!1)),Se(j,p,_)}).catch(Oo)}))}let Pt=io(),ge=io(),ie;function ce(A,V,x){Mt(A);const j=ge.list();return j.length?j.forEach(he=>he(A,V,x)):console.error(A),Promise.reject(A)}function st(){return ie&&l.value!==_s?Promise.resolve():new Promise((A,V)=>{Pt.add([A,V])})}function Mt(A){return ie||(ie=!A,Lt(),Pt.list().forEach(([V,x])=>A?x(A):V()),Pt.reset()),A}function Nt(A,V,x,j){const{scrollBehavior:he}=t;if(!$i||!he)return Promise.resolve();const p=!x&&yB(Oy(A.fullPath,0))||(j||!x)&&history.state&&history.state.scroll||null;return vv().then(()=>he(A,V,p)).then(_=>_&&mB(_)).catch(_=>ce(_,A,V))}const He=A=>i.go(A);let an;const Vt=new Set,Ft={currentRoute:l,listening:!0,addRoute:d,removeRoute:m,hasRoute:y,getRoutes:g,resolve:T,options:t,push:v,replace:U,go:He,back:()=>He(-1),forward:()=>He(1),beforeEach:r.add,beforeResolve:o.add,afterEach:a.add,onError:ge.add,isReady:st,install(A){const V=this;A.component("RouterLink",t4),A.component("RouterView",Ob),A.config.globalProperties.$router=V,Object.defineProperty(A.config.globalProperties,"$route",{enumerable:!0,get:()=>Zn(l)}),$i&&!an&&l.value===_s&&(an=!0,v(i.location).catch(he=>{}));const x={};for(const he in _s)Object.defineProperty(x,he,{get:()=>l.value[he],enumerable:!0});A.provide(i_,V),A.provide(r_,uv(x)),A.provide(Uf,l);const j=A.unmount;Vt.add(A),A.unmount=function(){Vt.delete(A),Vt.size<1&&(c=_s,Re&&Re(),Re=null,l.value=_s,an=!1,ie=!1),j()}}};function Fe(A){return A.reduce((V,x)=>V.then(()=>_e(x)),Promise.resolve())}return Ft}function o4(t,e){const n=[],s=[],i=[],r=Math.max(e.matched.length,t.matched.length);for(let o=0;o<r;o++){const a=e.matched[o];a&&(t.matched.find(c=>br(c,a))?s.push(a):n.push(a));const l=t.matched[o];l&&(e.matched.find(c=>br(c,l))||i.push(l))}return[n,s,i]}function rH(){return tn(r_)}const mu=(t,e)=>{const n=t.__vccOpts||t;for(const[s,i]of e)n[s]=i;return n},a4={name:"NavBar"},Db=t=>(yd("data-v-fd311cde"),t=t(),Ed(),t),l4={class:"container"},c4=Db(()=>ct("div",{class:"blog-name"}," Anyhow Fitness - Blog ",-1)),u4=Db(()=>ct("div",{class:"blog-links"},[ct("a",{href:"/"},"Back to Site")],-1)),h4=[c4,u4];function f4(t,e,n,s,i,r){return es(),ci("div",l4,h4)}const d4=mu(a4,[["render",f4],["__scopeId","data-v-fd311cde"]]),p4={__name:"App",setup(t){return(e,n)=>(es(),ci(Qt,null,[Ye(d4),Ye(Zn(Ob))],64))}},_4="modulepreload",m4=function(t){return"/"+t},qy={},Ky=function(e,n,s){if(!n||n.length===0)return e();const i=document.getElementsByTagName("link");return Promise.all(n.map(r=>{if(r=m4(r),r in qy)return;qy[r]=!0;const o=r.endsWith(".css"),a=o?'[rel="stylesheet"]':"";if(!!s)for(let u=i.length-1;u>=0;u--){const h=i[u];if(h.href===r&&(!o||h.rel==="stylesheet"))return}else if(document.querySelector(`link[href="${r}"]${a}`))return;const c=document.createElement("link");if(c.rel=o?"stylesheet":_4,o||(c.as="script",c.crossOrigin=""),c.href=r,document.head.appendChild(c),o)return new Promise((u,h)=>{c.addEventListener("load",u),c.addEventListener("error",()=>h(new Error(`Unable to preload CSS for ${r}`)))})})).then(()=>e()).catch(r=>{const o=new Event("vite:preloadError",{cancelable:!0});if(o.payload=r,window.dispatchEvent(o),!o.defaultPrevented)throw r})};const g4={props:["blogPost"]},y4=t=>(yd("data-v-c08c1453"),t=t(),Ed(),t),E4={class:"container"},v4=["src"],T4=["title"],w4={class:"line-clamp line-clamp_2"},A4={class:"overview-paragraph"},I4=y4(()=>ct("a",{class:"btn btn-dark",href:"#"},"Read More",-1));function b4(t,e,n,s,i,r){var a;const o=Cv("router-link");return es(),ci("div",E4,[ct("img",{src:n.blogPost.bannerImage,class:"blog-image",alt:"Blog cover image"},null,8,v4),ct("h2",{title:n.blogPost.title},[ct("span",w4,G_(n.blogPost.title),1)],8,T4),ct("p",A4,G_(((a=n.blogPost.summary)==null?void 0:a.substring(0,200))+" ..."),1),Ye(o,{to:"/blog/"+n.blogPost.id},{default:vd(()=>[I4]),_:1},8,["to"])])}const C4=mu(g4,[["render",b4],["__scopeId","data-v-c08c1453"]]),R4={apiKey:"AIzaSyAuv9pHvIhlo_wNj4tdkzNanWoGtQ-5-t4",authDomain:"is216-g2.firebaseapp.com",databaseURL:"https://is216-g2-default-rtdb.asia-southeast1.firebasedatabase.app",projectId:"is216-g2",storageBucket:"is216-g2.appspot.com",messagingSenderId:"426453655797",appId:"1:426453655797:web:b36588777f86a6d32365bc",measurementId:"G-QXTL2H3M37"},kb=cT(R4),S4=w$(kb),P4=v$(S4,"blogs"),N4=q2(),oH=W2(N4,"banners");const O4={class:"grid-container"},D4={__name:"BlogOverview",setup(t){const e=sB(P4);return(n,s)=>(es(),ci("div",O4,[(es(!0),ci(Qt,null,qN(Zn(e),i=>(es(),jv(C4,{key:i.id,blogPost:i},null,8,["blogPost"]))),128))]))}},k4=mu(D4,[["__scopeId","data-v-0a149715"]]);const x4={},o_=t=>(yd("data-v-229f68fb"),t=t(),Ed(),t),L4={class:"container"},M4={id:"home",class:"parallax-section"},V4={class:"home-title"},F4=o_(()=>ct("h3",{class:"wow bounceIn","data-wow-delay":"0.9s"},"Anyhow Fitness",-1)),U4=o_(()=>ct("h1",{class:"wow fadeInUp","data-wow-delay":"1.6s"},"Community Forum",-1)),$4=o_(()=>ct("button",{class:"btn",id:"editor"}," WRITE A BLOG ",-1));function B4(t,e){const n=Cv("router-link");return es(),ci("div",L4,[ct("section",M4,[ct("div",V4,[F4,U4,Ye(n,{to:"/editor/"},{default:vd(()=>[$4]),_:1})])])])}const H4=mu(x4,[["render",B4],["__scopeId","data-v-229f68fb"]]),j4={id:"home"},W4={id:"blog-overview"},q4={__name:"HomeView",setup(t){return(e,n)=>(es(),ci(Qt,null,[ct("section",j4,[Ye(H4)]),ct("section",W4,[Ye(k4)])],64))}},K4=r4({history:wB("/"),routes:[{path:"/",alias:"/blog",name:"blog",component:q4},{path:"/blog/:id",name:"blogPostView",component:()=>Ky(()=>import("./BlogPostView-731d5085.js"),["assets/BlogPostView-731d5085.js","assets/BlogPostView-9e7d7b0d.css"])},{path:"/editor",name:"blogEditorView",component:()=>Ky(()=>import("./BlogEditorView-b3f7565e.js"),["assets/BlogEditorView-b3f7565e.js","assets/BlogEditorView-b94525e6.css"])}]}),a_=GO(p4);a_.use(K4);a_.use(iB,{firebaseApp:kb,modules:[]});a_.mount("#app");export{tH as A,K4 as B,W2 as C,oH as D,nH as E,Qt as F,sH as G,mu as _,iH as a,ct as b,ci as c,eH as d,Zn as e,Ye as f,dO as g,P4 as h,Ed as i,Pv as j,FN as k,BN as l,Gi as m,ld as n,es as o,yd as p,go as q,Cv as r,Gv as s,G_ as t,rH as u,vv as v,vd as w,G4 as x,z4 as y,Y4 as z};
