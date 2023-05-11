/**
 * Bundled by jsDelivr using Rollup v2.74.1 and Terser v5.15.1.
 * Original file: /npm/d3-hierarchy@3.1.2/src/index.js
 *
 * Do NOT use SRI with dynamically generated files! More information: https://www.jsdelivr.com/using-sri-with-dynamic-files
 */
function n(n,r){return n.parent===r.parent?1:2}function r(n,r){return n+r.x}function t(n,r){return Math.max(n,r.y)}function e(){var e=n,u=1,i=1,o=!1;function a(n){var a,f=0;n.eachAfter((function(n){var u=n.children;u?(n.x=function(n){return n.reduce(r,0)/n.length}(u),n.y=function(n){return 1+n.reduce(t,0)}(u)):(n.x=a?f+=e(n,a):0,n.y=0,a=n)}));var c=function(n){for(var r;r=n.children;)n=r[0];return n}(n),h=function(n){for(var r;r=n.children;)n=r[r.length-1];return n}(n),l=c.x-e(c,h)/2,p=h.x+e(h,c)/2;return n.eachAfter(o?function(r){r.x=(r.x-n.x)*u,r.y=(n.y-r.y)*i}:function(r){r.x=(r.x-l)/(p-l)*u,r.y=(1-(n.y?r.y/n.y:1))*i})}return a.separation=function(n){return arguments.length?(e=n,a):e},a.size=function(n){return arguments.length?(o=!1,u=+n[0],i=+n[1],a):o?null:[u,i]},a.nodeSize=function(n){return arguments.length?(o=!0,u=+n[0],i=+n[1],a):o?[u,i]:null},a}function u(n){var r=0,t=n.children,e=t&&t.length;if(e)for(;--e>=0;)r+=t[e].value;else r=1;n.value=r}function i(n,r){n instanceof Map?(n=[void 0,n],void 0===r&&(r=a)):void 0===r&&(r=o);for(var t,e,u,i,f,l=new h(n),p=[l];t=p.pop();)if((u=r(t.data))&&(f=(u=Array.from(u)).length))for(t.children=u,i=f-1;i>=0;--i)p.push(e=u[i]=new h(u[i])),e.parent=t,e.depth=t.depth+1;return l.eachBefore(c)}function o(n){return n.children}function a(n){return Array.isArray(n)?n[1]:null}function f(n){void 0!==n.data.value&&(n.value=n.data.value),n.data=n.data.data}function c(n){var r=0;do{n.height=r}while((n=n.parent)&&n.height<++r)}function h(n){this.data=n,this.depth=this.height=0,this.parent=null}function l(n){return null==n?null:p(n)}function p(n){if("function"!=typeof n)throw new Error;return n}function s(){return 0}function d(n){return function(){return n}}h.prototype=i.prototype={constructor:h,count:function(){return this.eachAfter(u)},each:function(n,r){let t=-1;for(const e of this)n.call(r,e,++t,this);return this},eachAfter:function(n,r){for(var t,e,u,i=this,o=[i],a=[],f=-1;i=o.pop();)if(a.push(i),t=i.children)for(e=0,u=t.length;e<u;++e)o.push(t[e]);for(;i=a.pop();)n.call(r,i,++f,this);return this},eachBefore:function(n,r){for(var t,e,u=this,i=[u],o=-1;u=i.pop();)if(n.call(r,u,++o,this),t=u.children)for(e=t.length-1;e>=0;--e)i.push(t[e]);return this},find:function(n,r){let t=-1;for(const e of this)if(n.call(r,e,++t,this))return e},sum:function(n){return this.eachAfter((function(r){for(var t=+n(r.data)||0,e=r.children,u=e&&e.length;--u>=0;)t+=e[u].value;r.value=t}))},sort:function(n){return this.eachBefore((function(r){r.children&&r.children.sort(n)}))},path:function(n){for(var r=this,t=function(n,r){if(n===r)return n;var t=n.ancestors(),e=r.ancestors(),u=null;n=t.pop(),r=e.pop();for(;n===r;)u=n,n=t.pop(),r=e.pop();return u}(r,n),e=[r];r!==t;)r=r.parent,e.push(r);for(var u=e.length;n!==t;)e.splice(u,0,n),n=n.parent;return e},ancestors:function(){for(var n=this,r=[n];n=n.parent;)r.push(n);return r},descendants:function(){return Array.from(this)},leaves:function(){var n=[];return this.eachBefore((function(r){r.children||n.push(r)})),n},links:function(){var n=this,r=[];return n.each((function(t){t!==n&&r.push({source:t.parent,target:t})})),r},copy:function(){return i(this).eachBefore(f)},[Symbol.iterator]:function*(){var n,r,t,e,u=this,i=[u];do{for(n=i.reverse(),i=[];u=n.pop();)if(yield u,r=u.children)for(t=0,e=r.length;t<e;++t)i.push(r[t])}while(i.length)}};const v=4294967296;function x(){let n=1;return()=>(n=(1664525*n+1013904223)%v)/v}function y(n){return g(n,x())}function g(n,r){for(var t,e,u=0,i=(n=function(n,r){let t,e,u=n.length;for(;u;)e=r()*u--|0,t=n[u],n[u]=n[e],n[e]=t;return n}(Array.from(n),r)).length,o=[];u<i;)t=n[u],e&&_(e,t)?++u:(e=z(o=m(o,t)),u=0);return e}function m(n,r){var t,e;if(M(r,n))return[r];for(t=0;t<n.length;++t)if(w(r,n[t])&&M(B(n[t],r),n))return[n[t],r];for(t=0;t<n.length-1;++t)for(e=t+1;e<n.length;++e)if(w(B(n[t],n[e]),r)&&w(B(n[t],r),n[e])&&w(B(n[e],r),n[t])&&M(A(n[t],n[e],r),n))return[n[t],n[e],r];throw new Error}function w(n,r){var t=n.r-r.r,e=r.x-n.x,u=r.y-n.y;return t<0||t*t<e*e+u*u}function _(n,r){var t=n.r-r.r+1e-9*Math.max(n.r,r.r,1),e=r.x-n.x,u=r.y-n.y;return t>0&&t*t>e*e+u*u}function M(n,r){for(var t=0;t<r.length;++t)if(!_(n,r[t]))return!1;return!0}function z(n){switch(n.length){case 1:return function(n){return{x:n.x,y:n.y,r:n.r}}(n[0]);case 2:return B(n[0],n[1]);case 3:return A(n[0],n[1],n[2])}}function B(n,r){var t=n.x,e=n.y,u=n.r,i=r.x,o=r.y,a=r.r,f=i-t,c=o-e,h=a-u,l=Math.sqrt(f*f+c*c);return{x:(t+i+f/l*h)/2,y:(e+o+c/l*h)/2,r:(l+u+a)/2}}function A(n,r,t){var e=n.x,u=n.y,i=n.r,o=r.x,a=r.y,f=r.r,c=t.x,h=t.y,l=t.r,p=e-o,s=e-c,d=u-a,v=u-h,x=f-i,y=l-i,g=e*e+u*u-i*i,m=g-o*o-a*a+f*f,w=g-c*c-h*h+l*l,_=s*d-p*v,M=(d*w-v*m)/(2*_)-e,z=(v*x-d*y)/_,B=(s*m-p*w)/(2*_)-u,A=(p*y-s*x)/_,q=z*z+A*A-1,E=2*(i+M*z+B*A),b=M*M+B*B-i*i,S=-(Math.abs(q)>1e-6?(E+Math.sqrt(E*E-4*q*b))/(2*q):b/E);return{x:e+M+z*S,y:u+B+A*S,r:S}}function q(n,r,t){var e,u,i,o,a=n.x-r.x,f=n.y-r.y,c=a*a+f*f;c?(u=r.r+t.r,u*=u,o=n.r+t.r,u>(o*=o)?(e=(c+o-u)/(2*c),i=Math.sqrt(Math.max(0,o/c-e*e)),t.x=n.x-e*a-i*f,t.y=n.y-e*f+i*a):(e=(c+u-o)/(2*c),i=Math.sqrt(Math.max(0,u/c-e*e)),t.x=r.x+e*a-i*f,t.y=r.y+e*f+i*a)):(t.x=r.x+t.r,t.y=r.y)}function E(n,r){var t=n.r+r.r-1e-6,e=r.x-n.x,u=r.y-n.y;return t>0&&t*t>e*e+u*u}function b(n){var r=n._,t=n.next._,e=r.r+t.r,u=(r.x*t.r+t.x*r.r)/e,i=(r.y*t.r+t.y*r.r)/e;return u*u+i*i}function S(n){this._=n,this.next=null,this.previous=null}function k(n,r){if(!(o=(t=n,n="object"==typeof t&&"length"in t?t:Array.from(t)).length))return 0;var t,e,u,i,o,a,f,c,h,l,p,s;if((e=n[0]).x=0,e.y=0,!(o>1))return e.r;if(u=n[1],e.x=-u.r,u.x=e.r,u.y=0,!(o>2))return e.r+u.r;q(u,e,i=n[2]),e=new S(e),u=new S(u),i=new S(i),e.next=i.previous=u,u.next=e.previous=i,i.next=u.previous=e;n:for(c=3;c<o;++c){q(e._,u._,i=n[c]),i=new S(i),h=u.next,l=e.previous,p=u._.r,s=e._.r;do{if(p<=s){if(E(h._,i._)){u=h,e.next=u,u.previous=e,--c;continue n}p+=h._.r,h=h.next}else{if(E(l._,i._)){(e=l).next=u,u.previous=e,--c;continue n}s+=l._.r,l=l.previous}}while(h!==l.next);for(i.previous=e,i.next=u,e.next=u.previous=u=i,a=b(e);(i=i.next)!==u;)(f=b(i))<a&&(e=i,a=f);u=e.next}for(e=[u._],i=u;(i=i.next)!==u;)e.push(i._);for(i=g(e,r),c=0;c<o;++c)(e=n[c]).x-=i.x,e.y-=i.y;return i.r}function I(n){return k(n,x()),n}function O(n){return Math.sqrt(n.value)}function R(){var n=null,r=1,t=1,e=s;function u(u){const i=x();return u.x=r/2,u.y=t/2,n?u.eachBefore(T(n)).eachAfter(j(e,.5,i)).eachBefore(L(1)):u.eachBefore(T(O)).eachAfter(j(s,1,i)).eachAfter(j(e,u.r/Math.min(r,t),i)).eachBefore(L(Math.min(r,t)/(2*u.r))),u}return u.radius=function(r){return arguments.length?(n=l(r),u):n},u.size=function(n){return arguments.length?(r=+n[0],t=+n[1],u):[r,t]},u.padding=function(n){return arguments.length?(e="function"==typeof n?n:d(+n),u):e},u}function T(n){return function(r){r.children||(r.r=Math.max(0,+n(r)||0))}}function j(n,r,t){return function(e){if(u=e.children){var u,i,o,a=u.length,f=n(e)*r||0;if(f)for(i=0;i<a;++i)u[i].r+=f;if(o=k(u,t),f)for(i=0;i<a;++i)u[i].r-=f;e.r=o+f}}}function L(n){return function(r){var t=r.parent;r.r*=n,t&&(r.x=t.x+n*r.x,r.y=t.y+n*r.y)}}function $(n){n.x0=Math.round(n.x0),n.y0=Math.round(n.y0),n.x1=Math.round(n.x1),n.y1=Math.round(n.y1)}function D(n,r,t,e,u){for(var i,o=n.children,a=-1,f=o.length,c=n.value&&(e-r)/n.value;++a<f;)(i=o[a]).y0=t,i.y1=u,i.x0=r,i.x1=r+=i.value*c}function N(){var n=1,r=1,t=0,e=!1;function u(u){var i=u.height+1;return u.x0=u.y0=t,u.x1=n,u.y1=r/i,u.eachBefore(function(n,r){return function(e){e.children&&D(e,e.x0,n*(e.depth+1)/r,e.x1,n*(e.depth+2)/r);var u=e.x0,i=e.y0,o=e.x1-t,a=e.y1-t;o<u&&(u=o=(u+o)/2),a<i&&(i=a=(i+a)/2),e.x0=u,e.y0=i,e.x1=o,e.y1=a}}(r,i)),e&&u.eachBefore($),u}return u.round=function(n){return arguments.length?(e=!!n,u):e},u.size=function(t){return arguments.length?(n=+t[0],r=+t[1],u):[n,r]},u.padding=function(n){return arguments.length?(t=+n,u):t},u}var C={depth:-1},F={},G={};function H(n){return n.id}function J(n){return n.parentId}function K(){var n,r=H,t=J;function e(e){var u,i,o,a,f,l,p,s,d=Array.from(e),v=r,x=t,y=new Map;if(null!=n){const r=d.map(((r,t)=>function(n){let r=(n=`${n}`).length;Q(n,r-1)&&!Q(n,r-2)&&(n=n.slice(0,-1));return"/"===n[0]?n:`/${n}`}(n(r,t,e)))),t=r.map(P),u=new Set(r).add("");for(const n of t)u.has(n)||(u.add(n),r.push(n),t.push(P(n)),d.push(G));v=(n,t)=>r[t],x=(n,r)=>t[r]}for(o=0,u=d.length;o<u;++o)i=d[o],l=d[o]=new h(i),null!=(p=v(i,o,e))&&(p+="")&&(s=l.id=p,y.set(s,y.has(s)?F:l)),null!=(p=x(i,o,e))&&(p+="")&&(l.parent=p);for(o=0;o<u;++o)if(p=(l=d[o]).parent){if(!(f=y.get(p)))throw new Error("missing: "+p);if(f===F)throw new Error("ambiguous: "+p);f.children?f.children.push(l):f.children=[l],l.parent=f}else{if(a)throw new Error("multiple roots");a=l}if(!a)throw new Error("no root");if(null!=n){for(;a.data===G&&1===a.children.length;)a=a.children[0],--u;for(let n=d.length-1;n>=0&&(l=d[n],l.data===G);--n)l.data=null}if(a.parent=C,a.eachBefore((function(n){n.depth=n.parent.depth+1,--u})).eachBefore(c),a.parent=null,u>0)throw new Error("cycle");return a}return e.id=function(n){return arguments.length?(r=l(n),e):r},e.parentId=function(n){return arguments.length?(t=l(n),e):t},e.path=function(r){return arguments.length?(n=l(r),e):n},e}function P(n){let r=n.length;if(r<2)return"";for(;--r>1&&!Q(n,r););return n.slice(0,r)}function Q(n,r){if("/"===n[r]){let t=0;for(;r>0&&"\\"===n[--r];)++t;if(0==(1&t))return!0}return!1}function U(n,r){return n.parent===r.parent?1:2}function V(n){var r=n.children;return r?r[0]:n.t}function W(n){var r=n.children;return r?r[r.length-1]:n.t}function X(n,r,t){var e=t/(r.i-n.i);r.c-=e,r.s+=t,n.c+=e,r.z+=t,r.m+=t}function Y(n,r,t){return n.a.parent===r.parent?n.a:t}function Z(n,r){this._=n,this.parent=null,this.children=null,this.A=null,this.a=this,this.z=0,this.m=0,this.c=0,this.s=0,this.t=null,this.i=r}function nn(){var n=U,r=1,t=1,e=null;function u(u){var f=function(n){for(var r,t,e,u,i,o=new Z(n,0),a=[o];r=a.pop();)if(e=r._.children)for(r.children=new Array(i=e.length),u=i-1;u>=0;--u)a.push(t=r.children[u]=new Z(e[u],u)),t.parent=r;return(o.parent=new Z(null,0)).children=[o],o}(u);if(f.eachAfter(i),f.parent.m=-f.z,f.eachBefore(o),e)u.eachBefore(a);else{var c=u,h=u,l=u;u.eachBefore((function(n){n.x<c.x&&(c=n),n.x>h.x&&(h=n),n.depth>l.depth&&(l=n)}));var p=c===h?1:n(c,h)/2,s=p-c.x,d=r/(h.x+p+s),v=t/(l.depth||1);u.eachBefore((function(n){n.x=(n.x+s)*d,n.y=n.depth*v}))}return u}function i(r){var t=r.children,e=r.parent.children,u=r.i?e[r.i-1]:null;if(t){!function(n){for(var r,t=0,e=0,u=n.children,i=u.length;--i>=0;)(r=u[i]).z+=t,r.m+=t,t+=r.s+(e+=r.c)}(r);var i=(t[0].z+t[t.length-1].z)/2;u?(r.z=u.z+n(r._,u._),r.m=r.z-i):r.z=i}else u&&(r.z=u.z+n(r._,u._));r.parent.A=function(r,t,e){if(t){for(var u,i=r,o=r,a=t,f=i.parent.children[0],c=i.m,h=o.m,l=a.m,p=f.m;a=W(a),i=V(i),a&&i;)f=V(f),(o=W(o)).a=r,(u=a.z+l-i.z-c+n(a._,i._))>0&&(X(Y(a,r,e),r,u),c+=u,h+=u),l+=a.m,c+=i.m,p+=f.m,h+=o.m;a&&!W(o)&&(o.t=a,o.m+=l-h),i&&!V(f)&&(f.t=i,f.m+=c-p,e=r)}return e}(r,u,r.parent.A||e[0])}function o(n){n._.x=n.z+n.parent.m,n.m+=n.parent.m}function a(n){n.x*=r,n.y=n.depth*t}return u.separation=function(r){return arguments.length?(n=r,u):n},u.size=function(n){return arguments.length?(e=!1,r=+n[0],t=+n[1],u):e?null:[r,t]},u.nodeSize=function(n){return arguments.length?(e=!0,r=+n[0],t=+n[1],u):e?[r,t]:null},u}function rn(n,r,t,e,u){for(var i,o=n.children,a=-1,f=o.length,c=n.value&&(u-t)/n.value;++a<f;)(i=o[a]).x0=r,i.x1=e,i.y0=t,i.y1=t+=i.value*c}Z.prototype=Object.create(h.prototype);var tn=(1+Math.sqrt(5))/2;function en(n,r,t,e,u,i){for(var o,a,f,c,h,l,p,s,d,v,x,y=[],g=r.children,m=0,w=0,_=g.length,M=r.value;m<_;){f=u-t,c=i-e;do{h=g[w++].value}while(!h&&w<_);for(l=p=h,x=h*h*(v=Math.max(c/f,f/c)/(M*n)),d=Math.max(p/x,x/l);w<_;++w){if(h+=a=g[w].value,a<l&&(l=a),a>p&&(p=a),x=h*h*v,(s=Math.max(p/x,x/l))>d){h-=a;break}d=s}y.push(o={value:h,dice:f<c,children:g.slice(m,w)}),o.dice?D(o,t,e,u,M?e+=c*h/M:i):rn(o,t,e,M?t+=f*h/M:u,i),M-=h,m=w}return y}var un=function n(r){function t(n,t,e,u,i){en(r,n,t,e,u,i)}return t.ratio=function(r){return n((r=+r)>1?r:1)},t}(tn);function on(){var n=un,r=!1,t=1,e=1,u=[0],i=s,o=s,a=s,f=s,c=s;function h(n){return n.x0=n.y0=0,n.x1=t,n.y1=e,n.eachBefore(l),u=[0],r&&n.eachBefore($),n}function l(r){var t=u[r.depth],e=r.x0+t,h=r.y0+t,l=r.x1-t,p=r.y1-t;l<e&&(e=l=(e+l)/2),p<h&&(h=p=(h+p)/2),r.x0=e,r.y0=h,r.x1=l,r.y1=p,r.children&&(t=u[r.depth+1]=i(r)/2,e+=c(r)-t,h+=o(r)-t,(l-=a(r)-t)<e&&(e=l=(e+l)/2),(p-=f(r)-t)<h&&(h=p=(h+p)/2),n(r,e,h,l,p))}return h.round=function(n){return arguments.length?(r=!!n,h):r},h.size=function(n){return arguments.length?(t=+n[0],e=+n[1],h):[t,e]},h.tile=function(r){return arguments.length?(n=p(r),h):n},h.padding=function(n){return arguments.length?h.paddingInner(n).paddingOuter(n):h.paddingInner()},h.paddingInner=function(n){return arguments.length?(i="function"==typeof n?n:d(+n),h):i},h.paddingOuter=function(n){return arguments.length?h.paddingTop(n).paddingRight(n).paddingBottom(n).paddingLeft(n):h.paddingTop()},h.paddingTop=function(n){return arguments.length?(o="function"==typeof n?n:d(+n),h):o},h.paddingRight=function(n){return arguments.length?(a="function"==typeof n?n:d(+n),h):a},h.paddingBottom=function(n){return arguments.length?(f="function"==typeof n?n:d(+n),h):f},h.paddingLeft=function(n){return arguments.length?(c="function"==typeof n?n:d(+n),h):c},h}function an(n,r,t,e,u){var i,o,a=n.children,f=a.length,c=new Array(f+1);for(c[0]=o=i=0;i<f;++i)c[i+1]=o+=a[i].value;!function n(r,t,e,u,i,o,f){if(r>=t-1){var h=a[r];return h.x0=u,h.y0=i,h.x1=o,void(h.y1=f)}var l=c[r],p=e/2+l,s=r+1,d=t-1;for(;s<d;){var v=s+d>>>1;c[v]<p?s=v+1:d=v}p-c[s-1]<c[s]-p&&r+1<s&&--s;var x=c[s]-l,y=e-x;if(o-u>f-i){var g=e?(u*y+o*x)/e:o;n(r,s,x,u,i,g,f),n(s,t,y,g,i,o,f)}else{var m=e?(i*y+f*x)/e:f;n(r,s,x,u,i,o,m),n(s,t,y,u,m,o,f)}}(0,f,n.value,r,t,e,u)}function fn(n,r,t,e,u){(1&n.depth?rn:D)(n,r,t,e,u)}var cn=function n(r){function t(n,t,e,u,i){if((o=n._squarify)&&o.ratio===r)for(var o,a,f,c,h,l=-1,p=o.length,s=n.value;++l<p;){for(f=(a=o[l]).children,c=a.value=0,h=f.length;c<h;++c)a.value+=f[c].value;a.dice?D(a,t,e,u,s?e+=(i-e)*a.value/s:i):rn(a,t,e,s?t+=(u-t)*a.value/s:u,i),s-=a.value}else n._squarify=o=en(r,n,t,e,u,i),o.ratio=r}return t.ratio=function(r){return n((r=+r)>1?r:1)},t}(tn);export{h as Node,e as cluster,i as hierarchy,R as pack,y as packEnclose,I as packSiblings,N as partition,K as stratify,nn as tree,on as treemap,an as treemapBinary,D as treemapDice,cn as treemapResquarify,rn as treemapSlice,fn as treemapSliceDice,un as treemapSquarify};export default null;