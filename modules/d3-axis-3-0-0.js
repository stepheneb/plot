/**
 * Bundled by jsDelivr using Rollup v2.74.1 and Terser v5.15.1.
 * Original file: /npm/d3-axis@3.0.0/src/index.js
 *
 * Do NOT use SRI with dynamically generated files! More information: https://www.jsdelivr.com/using-sri-with-dynamic-files
 */
function t(t){return t}function n(t){return"translate("+t+",0)"}function r(t){return"translate(0,"+t+")"}function e(t){return n=>+t(n)}function i(t,n){return n=Math.max(0,t.bandwidth()-2*n)/2,t.round()&&(n=Math.round(n)),r=>+t(r)+n}function a(){return!this.__axis}function o(o,u){var c=[],l=null,s=null,f=6,d=6,m=3,h="undefined"!=typeof window&&window.devicePixelRatio>1?0:.5,g=1===o||4===o?-1:1,p=4===o||2===o?"x":"y",k=1===o||3===o?n:r;function x(n){var r=null==l?u.ticks?u.ticks.apply(u,c):u.domain():l,x=null==s?u.tickFormat?u.tickFormat.apply(u,c):t:s,y=Math.max(f,0)+m,A=u.range(),M=+A[0]+h,w=+A[A.length-1]+h,_=(u.bandwidth?i:e)(u.copy(),h),v=n.selection?n.selection():n,F=v.selectAll(".domain").data([null]),V=v.selectAll(".tick").data(r,u).order(),z=V.exit(),H=V.enter().append("g").attr("class","tick"),b=V.select("line"),C=V.select("text");F=F.merge(F.enter().insert("path",".tick").attr("class","domain").attr("stroke","currentColor")),V=V.merge(H),b=b.merge(H.append("line").attr("stroke","currentColor").attr(p+"2",g*f)),C=C.merge(H.append("text").attr("fill","currentColor").attr(p,g*y).attr("dy",1===o?"0em":3===o?"0.71em":"0.32em")),n!==v&&(F=F.transition(n),V=V.transition(n),b=b.transition(n),C=C.transition(n),z=z.transition(n).attr("opacity",1e-6).attr("transform",(function(t){return isFinite(t=_(t))?k(t+h):this.getAttribute("transform")})),H.attr("opacity",1e-6).attr("transform",(function(t){var n=this.parentNode.__axis;return k((n&&isFinite(n=n(t))?n:_(t))+h)}))),z.remove(),F.attr("d",4===o||2===o?d?"M"+g*d+","+M+"H"+h+"V"+w+"H"+g*d:"M"+h+","+M+"V"+w:d?"M"+M+","+g*d+"V"+h+"H"+w+"V"+g*d:"M"+M+","+h+"H"+w),V.attr("opacity",1).attr("transform",(function(t){return k(_(t)+h)})),b.attr(p+"2",g*f),C.attr(p,g*y).text(x),v.filter(a).attr("fill","none").attr("font-size",10).attr("font-family","sans-serif").attr("text-anchor",2===o?"start":4===o?"end":"middle"),v.each((function(){this.__axis=_}))}return x.scale=function(t){return arguments.length?(u=t,x):u},x.ticks=function(){return c=Array.from(arguments),x},x.tickArguments=function(t){return arguments.length?(c=null==t?[]:Array.from(t),x):c.slice()},x.tickValues=function(t){return arguments.length?(l=null==t?null:Array.from(t),x):l&&l.slice()},x.tickFormat=function(t){return arguments.length?(s=t,x):s},x.tickSize=function(t){return arguments.length?(f=d=+t,x):f},x.tickSizeInner=function(t){return arguments.length?(f=+t,x):f},x.tickSizeOuter=function(t){return arguments.length?(d=+t,x):d},x.tickPadding=function(t){return arguments.length?(m=+t,x):m},x.offset=function(t){return arguments.length?(h=+t,x):h},x}function u(t){return o(1,t)}function c(t){return o(2,t)}function l(t){return o(3,t)}function s(t){return o(4,t)}export{l as axisBottom,s as axisLeft,c as axisRight,u as axisTop};export default null;