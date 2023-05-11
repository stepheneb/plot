/**
 * Bundled by jsDelivr using Rollup v2.74.1 and Terser v5.15.1.
 * Original file: /npm/robust-predicates@3.0.1/index.js
 *
 * Do NOT use SRI with dynamically generated files! More information: https://www.jsdelivr.com/using-sri-with-dynamic-files
 */
const t=134217729;function n(t,n,r,e,s){let a,o,c,u,f=n[0],i=e[0],b=0,h=0;i>f==i>-f?(a=f,f=n[++b]):(a=i,i=e[++h]);let M=0;if(b<t&&h<r)for(i>f==i>-f?(o=f+a,c=a-(o-f),f=n[++b]):(o=i+a,c=a-(o-i),i=e[++h]),a=o,0!==c&&(s[M++]=c);b<t&&h<r;)i>f==i>-f?(o=a+f,u=o-a,c=a-(o-u)+(f-u),f=n[++b]):(o=a+i,u=o-a,c=a-(o-u)+(i-u),i=e[++h]),a=o,0!==c&&(s[M++]=c);for(;b<t;)o=a+f,u=o-a,c=a-(o-u)+(f-u),f=n[++b],a=o,0!==c&&(s[M++]=c);for(;h<r;)o=a+i,u=o-a,c=a-(o-u)+(i-u),i=e[++h],a=o,0!==c&&(s[M++]=c);return 0===a&&0!==M||(s[M++]=a),M}function r(t,r,e,s,a,o,c,u){return n(n(t,r,e,s,c),c,a,o,u)}function e(n,r,e,s){let a,o,c,u,f,i,b,h,M,l,p;b=t*e,l=b-(b-e),p=e-l;let x=r[0];a=x*e,b=t*x,h=b-(b-x),M=x-h,c=M*p-(a-h*l-M*l-h*p);let d=0;0!==c&&(s[d++]=c);for(let w=1;w<n;w++)x=r[w],u=x*e,b=t*x,h=b-(b-x),M=x-h,f=M*p-(u-h*l-M*l-h*p),o=a+f,i=o-a,c=a-(o-i)+(f-i),0!==c&&(s[d++]=c),a=u+o,c=o-(a-u),0!==c&&(s[d++]=c);return 0===a&&0!==d||(s[d++]=a),d}function s(t,n){for(let r=0;r<t;r++)n[r]=-n[r];return t}function a(t,n){let r=n[0];for(let e=1;e<t;e++)r+=n[e];return r}function o(t){return new Float64Array(t)}const c=o(4),u=o(8),f=o(12),i=o(16),b=o(4);function h(r,e,s,o,h,M){const l=(e-M)*(s-h),p=(r-h)*(o-M),x=l-p;if(0===l||0===p||l>0!=p>0)return x;const d=Math.abs(l+p);return Math.abs(x)>=33306690738754716e-32*d?x:-function(r,e,s,o,h,M,l){let p,x,d,w,y,A,F,g,j,k,m,q,v,z,B,C,D,E;const G=r-h,H=s-h,I=e-M,J=o-M;z=G*J,A=t*G,F=A-(A-G),g=G-F,A=t*J,j=A-(A-J),k=J-j,B=g*k-(z-F*j-g*j-F*k),C=I*H,A=t*I,F=A-(A-I),g=I-F,A=t*H,j=A-(A-H),k=H-j,D=g*k-(C-F*j-g*j-F*k),m=B-D,y=B-m,c[0]=B-(m+y)+(y-D),q=z+m,y=q-z,v=z-(q-y)+(m-y),m=v-C,y=v-m,c[1]=v-(m+y)+(y-C),E=q+m,y=E-q,c[2]=q-(E-y)+(m-y),c[3]=E;let K=a(4,c),L=22204460492503146e-32*l;if(K>=L||-K>=L)return K;if(y=r-G,p=r-(G+y)+(y-h),y=s-H,d=s-(H+y)+(y-h),y=e-I,x=e-(I+y)+(y-M),y=o-J,w=o-(J+y)+(y-M),0===p&&0===x&&0===d&&0===w)return K;if(L=11093356479670487e-47*l+33306690738754706e-32*Math.abs(K),K+=G*w+J*p-(I*d+H*x),K>=L||-K>=L)return K;z=p*J,A=t*p,F=A-(A-p),g=p-F,A=t*J,j=A-(A-J),k=J-j,B=g*k-(z-F*j-g*j-F*k),C=x*H,A=t*x,F=A-(A-x),g=x-F,A=t*H,j=A-(A-H),k=H-j,D=g*k-(C-F*j-g*j-F*k),m=B-D,y=B-m,b[0]=B-(m+y)+(y-D),q=z+m,y=q-z,v=z-(q-y)+(m-y),m=v-C,y=v-m,b[1]=v-(m+y)+(y-C),E=q+m,y=E-q,b[2]=q-(E-y)+(m-y),b[3]=E;const N=n(4,c,4,b,u);z=G*w,A=t*G,F=A-(A-G),g=G-F,A=t*w,j=A-(A-w),k=w-j,B=g*k-(z-F*j-g*j-F*k),C=I*d,A=t*I,F=A-(A-I),g=I-F,A=t*d,j=A-(A-d),k=d-j,D=g*k-(C-F*j-g*j-F*k),m=B-D,y=B-m,b[0]=B-(m+y)+(y-D),q=z+m,y=q-z,v=z-(q-y)+(m-y),m=v-C,y=v-m,b[1]=v-(m+y)+(y-C),E=q+m,y=E-q,b[2]=q-(E-y)+(m-y),b[3]=E;const O=n(N,u,4,b,f);z=p*w,A=t*p,F=A-(A-p),g=p-F,A=t*w,j=A-(A-w),k=w-j,B=g*k-(z-F*j-g*j-F*k),C=x*d,A=t*x,F=A-(A-x),g=x-F,A=t*d,j=A-(A-d),k=d-j,D=g*k-(C-F*j-g*j-F*k),m=B-D,y=B-m,b[0]=B-(m+y)+(y-D),q=z+m,y=q-z,v=z-(q-y)+(m-y),m=v-C,y=v-m,b[1]=v-(m+y)+(y-C),E=q+m,y=E-q,b[2]=q-(E-y)+(m-y),b[3]=E;const P=n(O,f,4,b,i);return i[P-1]}(r,e,s,o,h,M,d)}function M(t,n,r,e,s,a){return(n-a)*(r-s)-(t-s)*(e-a)}const l=o(4),p=o(4),x=o(4),d=o(4),w=o(4),y=o(4),A=o(4),F=o(4),g=o(4),j=o(8),k=o(8),m=o(8),q=o(4),v=o(8),z=o(8),B=o(8),C=o(12);let D=o(192),E=o(192);function G(t,r,e){t=n(t,D,r,e,E);const s=D;return D=E,E=s,t}function H(n,r,e,s,a,o,c,u){let f,i,b,h,M,l,p,x,d,w,y,A,F,g,j;return 0===n?0===r?(c[0]=0,u[0]=0,1):(j=-r,w=j*e,i=t*j,b=i-(i-j),h=j-b,i=t*e,M=i-(i-e),l=e-M,c[0]=h*l-(w-b*M-h*M-b*l),c[1]=w,w=r*a,i=t*r,b=i-(i-r),h=r-b,i=t*a,M=i-(i-a),l=a-M,u[0]=h*l-(w-b*M-h*M-b*l),u[1]=w,2):0===r?(w=n*s,i=t*n,b=i-(i-n),h=n-b,i=t*s,M=i-(i-s),l=s-M,c[0]=h*l-(w-b*M-h*M-b*l),c[1]=w,j=-n,w=j*o,i=t*j,b=i-(i-j),h=j-b,i=t*o,M=i-(i-o),l=o-M,u[0]=h*l-(w-b*M-h*M-b*l),u[1]=w,2):(w=n*s,i=t*n,b=i-(i-n),h=n-b,i=t*s,M=i-(i-s),l=s-M,y=h*l-(w-b*M-h*M-b*l),A=r*e,i=t*r,b=i-(i-r),h=r-b,i=t*e,M=i-(i-e),l=e-M,F=h*l-(A-b*M-h*M-b*l),p=y-F,f=y-p,c[0]=y-(p+f)+(f-F),x=w+p,f=x-w,d=w-(x-f)+(p-f),p=d-A,f=d-p,c[1]=d-(p+f)+(f-A),g=x+p,f=g-x,c[2]=x-(g-f)+(p-f),c[3]=g,w=r*a,i=t*r,b=i-(i-r),h=r-b,i=t*a,M=i-(i-a),l=a-M,y=h*l-(w-b*M-h*M-b*l),A=n*o,i=t*n,b=i-(i-n),h=n-b,i=t*o,M=i-(i-o),l=o-M,F=h*l-(A-b*M-h*M-b*l),p=y-F,f=y-p,u[0]=y-(p+f)+(f-F),x=w+p,f=x-w,d=w-(x-f)+(p-f),p=d-A,f=d-p,u[1]=d-(p+f)+(f-A),g=x+p,f=g-x,u[2]=x-(g-f)+(p-f),u[3]=g,4)}function I(n,r,e,s,a){let o,c,u,f,i,b,h,M,l,p,x,d,w;return x=r*e,c=t*r,u=c-(c-r),f=r-u,c=t*e,i=c-(c-e),b=e-i,d=f*b-(x-u*i-f*i-u*b),c=t*s,i=c-(c-s),b=s-i,h=d*s,c=t*d,u=c-(c-d),f=d-u,q[0]=f*b-(h-u*i-f*i-u*b),M=x*s,c=t*x,u=c-(c-x),f=x-u,p=f*b-(M-u*i-f*i-u*b),l=h+p,o=l-h,q[1]=h-(l-o)+(p-o),w=M+l,q[2]=l-(w-M),q[3]=w,n=G(n,4,q),0!==a&&(c=t*a,i=c-(c-a),b=a-i,h=d*a,c=t*d,u=c-(c-d),f=d-u,q[0]=f*b-(h-u*i-f*i-u*b),M=x*a,c=t*x,u=c-(c-x),f=x-u,p=f*b-(M-u*i-f*i-u*b),l=h+p,o=l-h,q[1]=h-(l-o)+(p-o),w=M+l,q[2]=l-(w-M),q[3]=w,n=G(n,4,q)),n}function J(r,s,o,c,u,f,i,b,h,M,q,E){const J=r-M,K=c-M,L=i-M,N=s-q,O=u-q,P=b-q,Q=o-E,R=f-E,S=h-E,T=K*P,U=L*O,V=L*N,W=J*P,X=J*O,Y=K*N,Z=Q*(T-U)+R*(V-W)+S*(X-Y),$=(Math.abs(T)+Math.abs(U))*Math.abs(Q)+(Math.abs(V)+Math.abs(W))*Math.abs(R)+(Math.abs(X)+Math.abs(Y))*Math.abs(S),_=7771561172376103e-31*$;return Z>_||-Z>_?Z:function(r,s,o,c,u,f,i,b,h,M,q,E,J){let K,L,N,O,P,Q,R,S,T,U,V,W,X,Y,Z,$,_,tt,nt,rt,et,st,at,ot;const ct=r-M,ut=c-M,ft=i-M,it=s-q,bt=u-q,ht=b-q,Mt=o-E,lt=f-E,pt=h-E;rt=ut*ht,W=t*ut,X=W-(W-ut),Y=ut-X,W=t*ht,Z=W-(W-ht),$=ht-Z,et=Y*$-(rt-X*Z-Y*Z-X*$),st=ft*bt,W=t*ft,X=W-(W-ft),Y=ft-X,W=t*bt,Z=W-(W-bt),$=bt-Z,at=Y*$-(st-X*Z-Y*Z-X*$),_=et-at,V=et-_,l[0]=et-(_+V)+(V-at),tt=rt+_,V=tt-rt,nt=rt-(tt-V)+(_-V),_=nt-st,V=nt-_,l[1]=nt-(_+V)+(V-st),ot=tt+_,V=ot-tt,l[2]=tt-(ot-V)+(_-V),l[3]=ot,rt=ft*it,W=t*ft,X=W-(W-ft),Y=ft-X,W=t*it,Z=W-(W-it),$=it-Z,et=Y*$-(rt-X*Z-Y*Z-X*$),st=ct*ht,W=t*ct,X=W-(W-ct),Y=ct-X,W=t*ht,Z=W-(W-ht),$=ht-Z,at=Y*$-(st-X*Z-Y*Z-X*$),_=et-at,V=et-_,p[0]=et-(_+V)+(V-at),tt=rt+_,V=tt-rt,nt=rt-(tt-V)+(_-V),_=nt-st,V=nt-_,p[1]=nt-(_+V)+(V-st),ot=tt+_,V=ot-tt,p[2]=tt-(ot-V)+(_-V),p[3]=ot,rt=ct*bt,W=t*ct,X=W-(W-ct),Y=ct-X,W=t*bt,Z=W-(W-bt),$=bt-Z,et=Y*$-(rt-X*Z-Y*Z-X*$),st=ut*it,W=t*ut,X=W-(W-ut),Y=ut-X,W=t*it,Z=W-(W-it),$=it-Z,at=Y*$-(st-X*Z-Y*Z-X*$),_=et-at,V=et-_,x[0]=et-(_+V)+(V-at),tt=rt+_,V=tt-rt,nt=rt-(tt-V)+(_-V),_=nt-st,V=nt-_,x[1]=nt-(_+V)+(V-st),ot=tt+_,V=ot-tt,x[2]=tt-(ot-V)+(_-V),x[3]=ot,K=n(n(e(4,l,Mt,v),v,e(4,p,lt,z),z,B),B,e(4,x,pt,v),v,D);let xt=a(K,D),dt=3330669073875473e-31*J;if(xt>=dt||-xt>=dt)return xt;if(V=r-ct,L=r-(ct+V)+(V-M),V=c-ut,N=c-(ut+V)+(V-M),V=i-ft,O=i-(ft+V)+(V-M),V=s-it,P=s-(it+V)+(V-q),V=u-bt,Q=u-(bt+V)+(V-q),V=b-ht,R=b-(ht+V)+(V-q),V=o-Mt,S=o-(Mt+V)+(V-E),V=f-lt,T=f-(lt+V)+(V-E),V=h-pt,U=h-(pt+V)+(V-E),0===L&&0===N&&0===O&&0===P&&0===Q&&0===R&&0===S&&0===T&&0===U)return xt;if(dt=32047474274603644e-47*J+33306690738754706e-32*Math.abs(xt),xt+=Mt*(ut*R+ht*N-(bt*O+ft*Q))+S*(ut*ht-bt*ft)+lt*(ft*P+it*O-(ht*L+ct*R))+T*(ft*it-ht*ct)+pt*(ct*Q+bt*L-(it*N+ut*P))+U*(ct*bt-it*ut),xt>=dt||-xt>=dt)return xt;const wt=H(L,P,ut,bt,ft,ht,d,w),yt=H(N,Q,ft,ht,ct,it,y,A),At=H(O,R,ct,it,ut,bt,F,g),Ft=n(yt,y,At,g,j);K=G(K,e(Ft,j,Mt,B),B);const gt=n(At,F,wt,w,k);K=G(K,e(gt,k,lt,B),B);const jt=n(wt,d,yt,A,m);return K=G(K,e(jt,m,pt,B),B),0!==S&&(K=G(K,e(4,l,S,C),C),K=G(K,e(Ft,j,S,B),B)),0!==T&&(K=G(K,e(4,p,T,C),C),K=G(K,e(gt,k,T,B),B)),0!==U&&(K=G(K,e(4,x,U,C),C),K=G(K,e(jt,m,U,B),B)),0!==L&&(0!==Q&&(K=I(K,L,Q,pt,U)),0!==R&&(K=I(K,-L,R,lt,T))),0!==N&&(0!==R&&(K=I(K,N,R,Mt,S)),0!==P&&(K=I(K,-N,P,pt,U))),0!==O&&(0!==P&&(K=I(K,O,P,lt,T)),0!==Q&&(K=I(K,-O,Q,Mt,S))),D[K-1]}(r,s,o,c,u,f,i,b,h,M,q,E,$)}function K(t,n,r,e,s,a,o,c,u,f,i,b){const h=n-i,M=s-i,l=c-i,p=r-b,x=a-b,d=u-b;return(t-f)*(M*d-x*l)+(e-f)*(l*p-d*h)+(o-f)*(h*x-p*M)}const L=o(4),N=o(4),O=o(4),P=o(4),Q=o(4),R=o(4),S=o(4),T=o(4),U=o(8),V=o(8),W=o(8),X=o(8),Y=o(8),Z=o(8),$=o(8),_=o(8),tt=o(8),nt=o(4),rt=o(4),et=o(4),st=o(8),at=o(16),ot=o(16),ct=o(16),ut=o(32),ft=o(32),it=o(48),bt=o(64);let ht=o(1152),Mt=o(1152);function lt(t,r,e){t=n(t,ht,r,e,Mt);const s=ht;return ht=Mt,Mt=s,t}function pt(s,o,c,u,f,i,b,h){const M=s-b,l=c-b,p=f-b,x=o-h,d=u-h,w=i-h,y=l*w,A=p*d,F=M*M+x*x,g=p*x,j=M*w,k=l*l+d*d,m=M*d,q=l*x,v=p*p+w*w,z=F*(y-A)+k*(g-j)+v*(m-q),B=(Math.abs(y)+Math.abs(A))*F+(Math.abs(g)+Math.abs(j))*k+(Math.abs(m)+Math.abs(q))*v,C=11102230246251577e-31*B;return z>C||-z>C?z:function(s,o,c,u,f,i,b,h,M){let l,p,x,d,w,y,A,F,g,j,k,m,q,v,z,B,C,D,E,G,H,I,J,K,Mt,pt,xt,dt,wt,yt,At,Ft,gt,jt,kt;const mt=s-b,qt=c-b,vt=f-b,zt=o-h,Bt=u-h,Ct=i-h;At=qt*Ct,J=t*qt,K=J-(J-qt),Mt=qt-K,J=t*Ct,pt=J-(J-Ct),xt=Ct-pt,Ft=Mt*xt-(At-K*pt-Mt*pt-K*xt),gt=vt*Bt,J=t*vt,K=J-(J-vt),Mt=vt-K,J=t*Bt,pt=J-(J-Bt),xt=Bt-pt,jt=Mt*xt-(gt-K*pt-Mt*pt-K*xt),dt=Ft-jt,I=Ft-dt,L[0]=Ft-(dt+I)+(I-jt),wt=At+dt,I=wt-At,yt=At-(wt-I)+(dt-I),dt=yt-gt,I=yt-dt,L[1]=yt-(dt+I)+(I-gt),kt=wt+dt,I=kt-wt,L[2]=wt-(kt-I)+(dt-I),L[3]=kt,At=vt*zt,J=t*vt,K=J-(J-vt),Mt=vt-K,J=t*zt,pt=J-(J-zt),xt=zt-pt,Ft=Mt*xt-(At-K*pt-Mt*pt-K*xt),gt=mt*Ct,J=t*mt,K=J-(J-mt),Mt=mt-K,J=t*Ct,pt=J-(J-Ct),xt=Ct-pt,jt=Mt*xt-(gt-K*pt-Mt*pt-K*xt),dt=Ft-jt,I=Ft-dt,N[0]=Ft-(dt+I)+(I-jt),wt=At+dt,I=wt-At,yt=At-(wt-I)+(dt-I),dt=yt-gt,I=yt-dt,N[1]=yt-(dt+I)+(I-gt),kt=wt+dt,I=kt-wt,N[2]=wt-(kt-I)+(dt-I),N[3]=kt,At=mt*Bt,J=t*mt,K=J-(J-mt),Mt=mt-K,J=t*Bt,pt=J-(J-Bt),xt=Bt-pt,Ft=Mt*xt-(At-K*pt-Mt*pt-K*xt),gt=qt*zt,J=t*qt,K=J-(J-qt),Mt=qt-K,J=t*zt,pt=J-(J-zt),xt=zt-pt,jt=Mt*xt-(gt-K*pt-Mt*pt-K*xt),dt=Ft-jt,I=Ft-dt,O[0]=Ft-(dt+I)+(I-jt),wt=At+dt,I=wt-At,yt=At-(wt-I)+(dt-I),dt=yt-gt,I=yt-dt,O[1]=yt-(dt+I)+(I-gt),kt=wt+dt,I=kt-wt,O[2]=wt-(kt-I)+(dt-I),O[3]=kt,l=n(n(n(e(e(4,L,mt,st),st,mt,at),at,e(e(4,L,zt,st),st,zt,ot),ot,ut),ut,n(e(e(4,N,qt,st),st,qt,at),at,e(e(4,N,Bt,st),st,Bt,ot),ot,ft),ft,bt),bt,n(e(e(4,O,vt,st),st,vt,at),at,e(e(4,O,Ct,st),st,Ct,ot),ot,ut),ut,ht);let Dt=a(l,ht),Et=4440892098500632e-31*M;if(Dt>=Et||-Dt>=Et)return Dt;if(I=s-mt,p=s-(mt+I)+(I-b),I=o-zt,w=o-(zt+I)+(I-h),I=c-qt,x=c-(qt+I)+(I-b),I=u-Bt,y=u-(Bt+I)+(I-h),I=f-vt,d=f-(vt+I)+(I-b),I=i-Ct,A=i-(Ct+I)+(I-h),0===p&&0===x&&0===d&&0===w&&0===y&&0===A)return Dt;if(Et=5423418723394464e-46*M+33306690738754706e-32*Math.abs(Dt),Dt+=(mt*mt+zt*zt)*(qt*A+Ct*x-(Bt*d+vt*y))+2*(mt*p+zt*w)*(qt*Ct-Bt*vt)+((qt*qt+Bt*Bt)*(vt*w+zt*d-(Ct*p+mt*A))+2*(qt*x+Bt*y)*(vt*zt-Ct*mt))+((vt*vt+Ct*Ct)*(mt*y+Bt*p-(zt*x+qt*w))+2*(vt*d+Ct*A)*(mt*Bt-zt*qt)),Dt>=Et||-Dt>=Et)return Dt;if(0===x&&0===y&&0===d&&0===A||(At=mt*mt,J=t*mt,K=J-(J-mt),Mt=mt-K,Ft=Mt*Mt-(At-K*K-(K+K)*Mt),gt=zt*zt,J=t*zt,K=J-(J-zt),Mt=zt-K,jt=Mt*Mt-(gt-K*K-(K+K)*Mt),dt=Ft+jt,I=dt-Ft,P[0]=Ft-(dt-I)+(jt-I),wt=At+dt,I=wt-At,yt=At-(wt-I)+(dt-I),dt=yt+gt,I=dt-yt,P[1]=yt-(dt-I)+(gt-I),kt=wt+dt,I=kt-wt,P[2]=wt-(kt-I)+(dt-I),P[3]=kt),0===d&&0===A&&0===p&&0===w||(At=qt*qt,J=t*qt,K=J-(J-qt),Mt=qt-K,Ft=Mt*Mt-(At-K*K-(K+K)*Mt),gt=Bt*Bt,J=t*Bt,K=J-(J-Bt),Mt=Bt-K,jt=Mt*Mt-(gt-K*K-(K+K)*Mt),dt=Ft+jt,I=dt-Ft,Q[0]=Ft-(dt-I)+(jt-I),wt=At+dt,I=wt-At,yt=At-(wt-I)+(dt-I),dt=yt+gt,I=dt-yt,Q[1]=yt-(dt-I)+(gt-I),kt=wt+dt,I=kt-wt,Q[2]=wt-(kt-I)+(dt-I),Q[3]=kt),0===p&&0===w&&0===x&&0===y||(At=vt*vt,J=t*vt,K=J-(J-vt),Mt=vt-K,Ft=Mt*Mt-(At-K*K-(K+K)*Mt),gt=Ct*Ct,J=t*Ct,K=J-(J-Ct),Mt=Ct-K,jt=Mt*Mt-(gt-K*K-(K+K)*Mt),dt=Ft+jt,I=dt-Ft,R[0]=Ft-(dt-I)+(jt-I),wt=At+dt,I=wt-At,yt=At-(wt-I)+(dt-I),dt=yt+gt,I=dt-yt,R[1]=yt-(dt-I)+(gt-I),kt=wt+dt,I=kt-wt,R[2]=wt-(kt-I)+(dt-I),R[3]=kt),0!==p&&(F=e(4,L,p,U),l=lt(l,r(e(F,U,2*mt,at),at,e(e(4,R,p,st),st,Bt,ot),ot,e(e(4,Q,p,st),st,-Ct,ct),ct,ut,it),it)),0!==w&&(g=e(4,L,w,V),l=lt(l,r(e(g,V,2*zt,at),at,e(e(4,Q,w,st),st,vt,ot),ot,e(e(4,R,w,st),st,-qt,ct),ct,ut,it),it)),0!==x&&(j=e(4,N,x,W),l=lt(l,r(e(j,W,2*qt,at),at,e(e(4,P,x,st),st,Ct,ot),ot,e(e(4,R,x,st),st,-zt,ct),ct,ut,it),it)),0!==y&&(k=e(4,N,y,X),l=lt(l,r(e(k,X,2*Bt,at),at,e(e(4,R,y,st),st,mt,ot),ot,e(e(4,P,y,st),st,-vt,ct),ct,ut,it),it)),0!==d&&(m=e(4,O,d,Y),l=lt(l,r(e(m,Y,2*vt,at),at,e(e(4,Q,d,st),st,zt,ot),ot,e(e(4,P,d,st),st,-Bt,ct),ct,ut,it),it)),0!==A&&(q=e(4,O,A,Z),l=lt(l,r(e(q,Z,2*Ct,at),at,e(e(4,P,A,st),st,qt,ot),ot,e(e(4,Q,A,st),st,-mt,ct),ct,ut,it),it)),0!==p||0!==w){if(0!==x||0!==y||0!==d||0!==A?(At=x*Ct,J=t*x,K=J-(J-x),Mt=x-K,J=t*Ct,pt=J-(J-Ct),xt=Ct-pt,Ft=Mt*xt-(At-K*pt-Mt*pt-K*xt),gt=qt*A,J=t*qt,K=J-(J-qt),Mt=qt-K,J=t*A,pt=J-(J-A),xt=A-pt,jt=Mt*xt-(gt-K*pt-Mt*pt-K*xt),dt=Ft+jt,I=dt-Ft,S[0]=Ft-(dt-I)+(jt-I),wt=At+dt,I=wt-At,yt=At-(wt-I)+(dt-I),dt=yt+gt,I=dt-yt,S[1]=yt-(dt-I)+(gt-I),kt=wt+dt,I=kt-wt,S[2]=wt-(kt-I)+(dt-I),S[3]=kt,At=d*-Bt,J=t*d,K=J-(J-d),Mt=d-K,J=t*-Bt,pt=J-(J- -Bt),xt=-Bt-pt,Ft=Mt*xt-(At-K*pt-Mt*pt-K*xt),gt=vt*-y,J=t*vt,K=J-(J-vt),Mt=vt-K,J=t*-y,pt=J-(J- -y),xt=-y-pt,jt=Mt*xt-(gt-K*pt-Mt*pt-K*xt),dt=Ft+jt,I=dt-Ft,T[0]=Ft-(dt-I)+(jt-I),wt=At+dt,I=wt-At,yt=At-(wt-I)+(dt-I),dt=yt+gt,I=dt-yt,T[1]=yt-(dt-I)+(gt-I),kt=wt+dt,I=kt-wt,T[2]=wt-(kt-I)+(dt-I),T[3]=kt,z=n(4,S,4,T,_),At=x*A,J=t*x,K=J-(J-x),Mt=x-K,J=t*A,pt=J-(J-A),xt=A-pt,Ft=Mt*xt-(At-K*pt-Mt*pt-K*xt),gt=d*y,J=t*d,K=J-(J-d),Mt=d-K,J=t*y,pt=J-(J-y),xt=y-pt,jt=Mt*xt-(gt-K*pt-Mt*pt-K*xt),dt=Ft-jt,I=Ft-dt,rt[0]=Ft-(dt+I)+(I-jt),wt=At+dt,I=wt-At,yt=At-(wt-I)+(dt-I),dt=yt-gt,I=yt-dt,rt[1]=yt-(dt+I)+(I-gt),kt=wt+dt,I=kt-wt,rt[2]=wt-(kt-I)+(dt-I),rt[3]=kt,D=4):(_[0]=0,z=1,rt[0]=0,D=1),0!==p){const t=e(z,_,p,ct);l=lt(l,n(e(F,U,p,at),at,e(t,ct,2*mt,ut),ut,it),it);const s=e(D,rt,p,st);l=lt(l,r(e(s,st,2*mt,at),at,e(s,st,p,ot),ot,e(t,ct,p,ut),ut,ft,bt),bt),0!==y&&(l=lt(l,e(e(4,R,p,st),st,y,at),at)),0!==A&&(l=lt(l,e(e(4,Q,-p,st),st,A,at),at))}if(0!==w){const t=e(z,_,w,ct);l=lt(l,n(e(g,V,w,at),at,e(t,ct,2*zt,ut),ut,it),it);const s=e(D,rt,w,st);l=lt(l,r(e(s,st,2*zt,at),at,e(s,st,w,ot),ot,e(t,ct,w,ut),ut,ft,bt),bt)}}if(0!==x||0!==y){if(0!==d||0!==A||0!==p||0!==w?(At=d*zt,J=t*d,K=J-(J-d),Mt=d-K,J=t*zt,pt=J-(J-zt),xt=zt-pt,Ft=Mt*xt-(At-K*pt-Mt*pt-K*xt),gt=vt*w,J=t*vt,K=J-(J-vt),Mt=vt-K,J=t*w,pt=J-(J-w),xt=w-pt,jt=Mt*xt-(gt-K*pt-Mt*pt-K*xt),dt=Ft+jt,I=dt-Ft,S[0]=Ft-(dt-I)+(jt-I),wt=At+dt,I=wt-At,yt=At-(wt-I)+(dt-I),dt=yt+gt,I=dt-yt,S[1]=yt-(dt-I)+(gt-I),kt=wt+dt,I=kt-wt,S[2]=wt-(kt-I)+(dt-I),S[3]=kt,G=-Ct,H=-A,At=p*G,J=t*p,K=J-(J-p),Mt=p-K,J=t*G,pt=J-(J-G),xt=G-pt,Ft=Mt*xt-(At-K*pt-Mt*pt-K*xt),gt=mt*H,J=t*mt,K=J-(J-mt),Mt=mt-K,J=t*H,pt=J-(J-H),xt=H-pt,jt=Mt*xt-(gt-K*pt-Mt*pt-K*xt),dt=Ft+jt,I=dt-Ft,T[0]=Ft-(dt-I)+(jt-I),wt=At+dt,I=wt-At,yt=At-(wt-I)+(dt-I),dt=yt+gt,I=dt-yt,T[1]=yt-(dt-I)+(gt-I),kt=wt+dt,I=kt-wt,T[2]=wt-(kt-I)+(dt-I),T[3]=kt,B=n(4,S,4,T,tt),At=d*w,J=t*d,K=J-(J-d),Mt=d-K,J=t*w,pt=J-(J-w),xt=w-pt,Ft=Mt*xt-(At-K*pt-Mt*pt-K*xt),gt=p*A,J=t*p,K=J-(J-p),Mt=p-K,J=t*A,pt=J-(J-A),xt=A-pt,jt=Mt*xt-(gt-K*pt-Mt*pt-K*xt),dt=Ft-jt,I=Ft-dt,et[0]=Ft-(dt+I)+(I-jt),wt=At+dt,I=wt-At,yt=At-(wt-I)+(dt-I),dt=yt-gt,I=yt-dt,et[1]=yt-(dt+I)+(I-gt),kt=wt+dt,I=kt-wt,et[2]=wt-(kt-I)+(dt-I),et[3]=kt,E=4):(tt[0]=0,B=1,et[0]=0,E=1),0!==x){const t=e(B,tt,x,ct);l=lt(l,n(e(j,W,x,at),at,e(t,ct,2*qt,ut),ut,it),it);const s=e(E,et,x,st);l=lt(l,r(e(s,st,2*qt,at),at,e(s,st,x,ot),ot,e(t,ct,x,ut),ut,ft,bt),bt),0!==A&&(l=lt(l,e(e(4,P,x,st),st,A,at),at)),0!==w&&(l=lt(l,e(e(4,R,-x,st),st,w,at),at))}if(0!==y){const t=e(B,tt,y,ct);l=lt(l,n(e(k,X,y,at),at,e(t,ct,2*Bt,ut),ut,it),it);const s=e(E,et,y,st);l=lt(l,r(e(s,st,2*Bt,at),at,e(s,st,y,ot),ot,e(t,ct,y,ut),ut,ft,bt),bt)}}if(0!==d||0!==A){if(0!==p||0!==w||0!==x||0!==y?(At=p*Bt,J=t*p,K=J-(J-p),Mt=p-K,J=t*Bt,pt=J-(J-Bt),xt=Bt-pt,Ft=Mt*xt-(At-K*pt-Mt*pt-K*xt),gt=mt*y,J=t*mt,K=J-(J-mt),Mt=mt-K,J=t*y,pt=J-(J-y),xt=y-pt,jt=Mt*xt-(gt-K*pt-Mt*pt-K*xt),dt=Ft+jt,I=dt-Ft,S[0]=Ft-(dt-I)+(jt-I),wt=At+dt,I=wt-At,yt=At-(wt-I)+(dt-I),dt=yt+gt,I=dt-yt,S[1]=yt-(dt-I)+(gt-I),kt=wt+dt,I=kt-wt,S[2]=wt-(kt-I)+(dt-I),S[3]=kt,G=-zt,H=-w,At=x*G,J=t*x,K=J-(J-x),Mt=x-K,J=t*G,pt=J-(J-G),xt=G-pt,Ft=Mt*xt-(At-K*pt-Mt*pt-K*xt),gt=qt*H,J=t*qt,K=J-(J-qt),Mt=qt-K,J=t*H,pt=J-(J-H),xt=H-pt,jt=Mt*xt-(gt-K*pt-Mt*pt-K*xt),dt=Ft+jt,I=dt-Ft,T[0]=Ft-(dt-I)+(jt-I),wt=At+dt,I=wt-At,yt=At-(wt-I)+(dt-I),dt=yt+gt,I=dt-yt,T[1]=yt-(dt-I)+(gt-I),kt=wt+dt,I=kt-wt,T[2]=wt-(kt-I)+(dt-I),T[3]=kt,v=n(4,S,4,T,$),At=p*y,J=t*p,K=J-(J-p),Mt=p-K,J=t*y,pt=J-(J-y),xt=y-pt,Ft=Mt*xt-(At-K*pt-Mt*pt-K*xt),gt=x*w,J=t*x,K=J-(J-x),Mt=x-K,J=t*w,pt=J-(J-w),xt=w-pt,jt=Mt*xt-(gt-K*pt-Mt*pt-K*xt),dt=Ft-jt,I=Ft-dt,nt[0]=Ft-(dt+I)+(I-jt),wt=At+dt,I=wt-At,yt=At-(wt-I)+(dt-I),dt=yt-gt,I=yt-dt,nt[1]=yt-(dt+I)+(I-gt),kt=wt+dt,I=kt-wt,nt[2]=wt-(kt-I)+(dt-I),nt[3]=kt,C=4):($[0]=0,v=1,nt[0]=0,C=1),0!==d){const t=e(v,$,d,ct);l=lt(l,n(e(m,Y,d,at),at,e(t,ct,2*vt,ut),ut,it),it);const s=e(C,nt,d,st);l=lt(l,r(e(s,st,2*vt,at),at,e(s,st,d,ot),ot,e(t,ct,d,ut),ut,ft,bt),bt),0!==w&&(l=lt(l,e(e(4,Q,d,st),st,w,at),at)),0!==y&&(l=lt(l,e(e(4,P,-d,st),st,y,at),at))}if(0!==A){const t=e(v,$,A,ct);l=lt(l,n(e(q,Z,A,at),at,e(t,ct,2*Ct,ut),ut,it),it);const s=e(C,nt,A,st);l=lt(l,r(e(s,st,2*Ct,at),at,e(s,st,A,ot),ot,e(t,ct,A,ut),ut,ft,bt),bt)}}return ht[l-1]}(s,o,c,u,f,i,b,h,B)}function xt(t,n,r,e,s,a,o,c){const u=t-o,f=n-c,i=r-o,b=e-c,h=s-o,M=a-c;return(u*u+f*f)*(i*M-h*b)+(i*i+b*b)*(h*f-u*M)+(h*h+M*M)*(u*b-i*f)}const dt=o(4),wt=o(4),yt=o(4),At=o(4),Ft=o(4),gt=o(4),jt=o(4),kt=o(4),mt=o(4),qt=o(4),vt=o(24),zt=o(24),Bt=o(24),Ct=o(24),Dt=o(24),Et=o(24),Gt=o(24),Ht=o(24),It=o(24),Jt=o(24),Kt=o(1152),Lt=o(1152),Nt=o(1152),Ot=o(1152),Pt=o(1152),Qt=o(2304),Rt=o(2304),St=o(3456),Tt=o(5760),Ut=o(8),Vt=o(8),Wt=o(8),Xt=o(16),Yt=o(24),Zt=o(48),$t=o(48),_t=o(96),tn=o(192),nn=o(384),rn=o(384),en=o(384),sn=o(768);function an(t,n,s,a,o,c,u){return r(e(4,t,a,Ut),Ut,e(4,n,o,Vt),Vt,e(4,s,c,Wt),Wt,Xt,u)}function on(t,a,o,c,u,f,i,b,h,M,l,p){const x=n(n(t,a,o,c,Zt),Zt,s(n(u,f,i,b,$t),$t),$t,_t);return r(e(e(x,_t,h,tn),tn,h,nn),nn,e(e(x,_t,M,tn),tn,M,rn),rn,e(e(x,_t,l,tn),tn,l,en),en,sn,p)}const cn=o(96),un=o(96),fn=o(96),bn=o(1152);function hn(t,n,s,a,o,c,u,f,i,b){const h=an(t,n,s,a,o,c,Yt);return r(e(e(h,Yt,u,Zt),Zt,u,cn),cn,e(e(h,Yt,f,Zt),Zt,f,un),un,e(e(h,Yt,i,Zt),Zt,i,fn),fn,tn,b)}function Mn(e,o,c,u,f,i,b,h,M,l,p,x,d,w,y,A){let F,g,j,k,m,q,v,z,B,C,D,E,G,H,I,J,K,L,N,O,P,Q,R,S,T,U,V,W,X,Y,Z;const $=e-d,_=u-d,tt=b-d,nt=l-d,rt=o-w,et=f-w,st=h-w,at=p-w,ot=c-y,ct=i-y,ut=M-y,ft=x-y;W=$*et,O=t*$,P=O-(O-$),Q=$-P,O=t*et,R=O-(O-et),S=et-R,X=Q*S-(W-P*R-Q*R-P*S),Y=_*rt,O=t*_,P=O-(O-_),Q=_-P,O=t*rt,R=O-(O-rt),S=rt-R,Z=Q*S-(Y-P*R-Q*R-P*S),T=X-Z,N=X-T,dt[0]=X-(T+N)+(N-Z),U=W+T,N=U-W,V=W-(U-N)+(T-N),T=V-Y,N=V-T,dt[1]=V-(T+N)+(N-Y),F=U+T,N=F-U,dt[2]=U-(F-N)+(T-N),dt[3]=F,W=_*st,O=t*_,P=O-(O-_),Q=_-P,O=t*st,R=O-(O-st),S=st-R,X=Q*S-(W-P*R-Q*R-P*S),Y=tt*et,O=t*tt,P=O-(O-tt),Q=tt-P,O=t*et,R=O-(O-et),S=et-R,Z=Q*S-(Y-P*R-Q*R-P*S),T=X-Z,N=X-T,wt[0]=X-(T+N)+(N-Z),U=W+T,N=U-W,V=W-(U-N)+(T-N),T=V-Y,N=V-T,wt[1]=V-(T+N)+(N-Y),g=U+T,N=g-U,wt[2]=U-(g-N)+(T-N),wt[3]=g,W=tt*at,O=t*tt,P=O-(O-tt),Q=tt-P,O=t*at,R=O-(O-at),S=at-R,X=Q*S-(W-P*R-Q*R-P*S),Y=nt*st,O=t*nt,P=O-(O-nt),Q=nt-P,O=t*st,R=O-(O-st),S=st-R,Z=Q*S-(Y-P*R-Q*R-P*S),T=X-Z,N=X-T,yt[0]=X-(T+N)+(N-Z),U=W+T,N=U-W,V=W-(U-N)+(T-N),T=V-Y,N=V-T,yt[1]=V-(T+N)+(N-Y),j=U+T,N=j-U,yt[2]=U-(j-N)+(T-N),yt[3]=j,W=nt*rt,O=t*nt,P=O-(O-nt),Q=nt-P,O=t*rt,R=O-(O-rt),S=rt-R,X=Q*S-(W-P*R-Q*R-P*S),Y=$*at,O=t*$,P=O-(O-$),Q=$-P,O=t*at,R=O-(O-at),S=at-R,Z=Q*S-(Y-P*R-Q*R-P*S),T=X-Z,N=X-T,mt[0]=X-(T+N)+(N-Z),U=W+T,N=U-W,V=W-(U-N)+(T-N),T=V-Y,N=V-T,mt[1]=V-(T+N)+(N-Y),k=U+T,N=k-U,mt[2]=U-(k-N)+(T-N),mt[3]=k,W=$*st,O=t*$,P=O-(O-$),Q=$-P,O=t*st,R=O-(O-st),S=st-R,X=Q*S-(W-P*R-Q*R-P*S),Y=tt*rt,O=t*tt,P=O-(O-tt),Q=tt-P,O=t*rt,R=O-(O-rt),S=rt-R,Z=Q*S-(Y-P*R-Q*R-P*S),T=X-Z,N=X-T,gt[0]=X-(T+N)+(N-Z),U=W+T,N=U-W,V=W-(U-N)+(T-N),T=V-Y,N=V-T,gt[1]=V-(T+N)+(N-Y),m=U+T,N=m-U,gt[2]=U-(m-N)+(T-N),gt[3]=m,W=_*at,O=t*_,P=O-(O-_),Q=_-P,O=t*at,R=O-(O-at),S=at-R,X=Q*S-(W-P*R-Q*R-P*S),Y=nt*et,O=t*nt,P=O-(O-nt),Q=nt-P,O=t*et,R=O-(O-et),S=et-R,Z=Q*S-(Y-P*R-Q*R-P*S),T=X-Z,N=X-T,jt[0]=X-(T+N)+(N-Z),U=W+T,N=U-W,V=W-(U-N)+(T-N),T=V-Y,N=V-T,jt[1]=V-(T+N)+(N-Y),q=U+T,N=q-U,jt[2]=U-(q-N)+(T-N),jt[3]=q;let it=a(n(n(s(hn(wt,yt,jt,ft,ct,-ut,$,rt,ot,Kt),Kt),Kt,hn(yt,mt,gt,ot,ut,ft,_,et,ct,Lt),Lt,Qt),Qt,n(s(hn(mt,dt,jt,ct,ft,ot,tt,st,ut,Nt),Nt),Nt,hn(dt,wt,gt,ut,ot,-ct,nt,at,ft,Ot),Ot,Rt),Rt,bn),bn),bt=5551115123125792e-31*A;if(it>=bt||-it>=bt)return it;if(N=e-$,v=e-($+N)+(N-d),N=o-rt,D=o-(rt+N)+(N-w),N=c-ot,I=c-(ot+N)+(N-y),N=u-_,z=u-(_+N)+(N-d),N=f-et,E=f-(et+N)+(N-w),N=i-ct,J=i-(ct+N)+(N-y),N=b-tt,B=b-(tt+N)+(N-d),N=h-st,G=h-(st+N)+(N-w),N=M-ut,K=M-(ut+N)+(N-y),N=l-nt,C=l-(nt+N)+(N-d),N=p-at,H=p-(at+N)+(N-w),N=x-ft,L=x-(ft+N)+(N-y),0===v&&0===D&&0===I&&0===z&&0===E&&0===J&&0===B&&0===G&&0===K&&0===C&&0===H&&0===L)return it;bt=8751425667295619e-46*A+33306690738754706e-32*Math.abs(it);const ht=$*E+et*v-(rt*z+_*D),Mt=_*G+st*z-(et*B+tt*E),lt=tt*H+at*B-(st*C+nt*G),pt=nt*D+rt*C-(at*v+$*H),xt=$*G+st*v-(rt*B+tt*D),Ut=_*H+at*z-(et*C+nt*E);return it+=(_*_+et*et+ct*ct)*(ut*pt+ft*xt+ot*lt+(K*k+L*m+I*j))+(nt*nt+at*at+ft*ft)*(ot*Mt-ct*xt+ut*ht+(I*g-J*m+K*F))-(($*$+rt*rt+ot*ot)*(ct*lt-ut*Ut+ft*Mt+(J*j-K*q+L*g))+(tt*tt+st*st+ut*ut)*(ft*ht+ot*Ut+ct*pt+(L*F+I*q+J*k)))+2*((_*z+et*E+ct*J)*(ut*k+ft*m+ot*j)+(nt*C+at*H+ft*L)*(ot*g-ct*m+ut*F)-(($*v+rt*D+ot*I)*(ct*j-ut*q+ft*g)+(tt*B+st*G+ut*K)*(ft*F+ot*q+ct*k))),it>=bt||-it>=bt?it:function(n,e,s,a,o,c,u,f,i,b,h,M,l,p,x){let d,w,y,A,F,g,j,k,m,q,v,z,B,C;q=n*o,w=t*n,y=w-(w-n),A=n-y,w=t*o,F=w-(w-o),g=o-F,v=A*g-(q-y*F-A*F-y*g),z=a*e,w=t*a,y=w-(w-a),A=a-y,w=t*e,F=w-(w-e),g=e-F,B=A*g-(z-y*F-A*F-y*g),j=v-B,d=v-j,dt[0]=v-(j+d)+(d-B),k=q+j,d=k-q,m=q-(k-d)+(j-d),j=m-z,d=m-j,dt[1]=m-(j+d)+(d-z),C=k+j,d=C-k,dt[2]=k-(C-d)+(j-d),dt[3]=C,q=a*f,w=t*a,y=w-(w-a),A=a-y,w=t*f,F=w-(w-f),g=f-F,v=A*g-(q-y*F-A*F-y*g),z=u*o,w=t*u,y=w-(w-u),A=u-y,w=t*o,F=w-(w-o),g=o-F,B=A*g-(z-y*F-A*F-y*g),j=v-B,d=v-j,wt[0]=v-(j+d)+(d-B),k=q+j,d=k-q,m=q-(k-d)+(j-d),j=m-z,d=m-j,wt[1]=m-(j+d)+(d-z),C=k+j,d=C-k,wt[2]=k-(C-d)+(j-d),wt[3]=C,q=u*h,w=t*u,y=w-(w-u),A=u-y,w=t*h,F=w-(w-h),g=h-F,v=A*g-(q-y*F-A*F-y*g),z=b*f,w=t*b,y=w-(w-b),A=b-y,w=t*f,F=w-(w-f),g=f-F,B=A*g-(z-y*F-A*F-y*g),j=v-B,d=v-j,yt[0]=v-(j+d)+(d-B),k=q+j,d=k-q,m=q-(k-d)+(j-d),j=m-z,d=m-j,yt[1]=m-(j+d)+(d-z),C=k+j,d=C-k,yt[2]=k-(C-d)+(j-d),yt[3]=C,q=b*p,w=t*b,y=w-(w-b),A=b-y,w=t*p,F=w-(w-p),g=p-F,v=A*g-(q-y*F-A*F-y*g),z=l*h,w=t*l,y=w-(w-l),A=l-y,w=t*h,F=w-(w-h),g=h-F,B=A*g-(z-y*F-A*F-y*g),j=v-B,d=v-j,At[0]=v-(j+d)+(d-B),k=q+j,d=k-q,m=q-(k-d)+(j-d),j=m-z,d=m-j,At[1]=m-(j+d)+(d-z),C=k+j,d=C-k,At[2]=k-(C-d)+(j-d),At[3]=C,q=l*e,w=t*l,y=w-(w-l),A=l-y,w=t*e,F=w-(w-e),g=e-F,v=A*g-(q-y*F-A*F-y*g),z=n*p,w=t*n,y=w-(w-n),A=n-y,w=t*p,F=w-(w-p),g=p-F,B=A*g-(z-y*F-A*F-y*g),j=v-B,d=v-j,Ft[0]=v-(j+d)+(d-B),k=q+j,d=k-q,m=q-(k-d)+(j-d),j=m-z,d=m-j,Ft[1]=m-(j+d)+(d-z),C=k+j,d=C-k,Ft[2]=k-(C-d)+(j-d),Ft[3]=C,q=n*f,w=t*n,y=w-(w-n),A=n-y,w=t*f,F=w-(w-f),g=f-F,v=A*g-(q-y*F-A*F-y*g),z=u*e,w=t*u,y=w-(w-u),A=u-y,w=t*e,F=w-(w-e),g=e-F,B=A*g-(z-y*F-A*F-y*g),j=v-B,d=v-j,gt[0]=v-(j+d)+(d-B),k=q+j,d=k-q,m=q-(k-d)+(j-d),j=m-z,d=m-j,gt[1]=m-(j+d)+(d-z),C=k+j,d=C-k,gt[2]=k-(C-d)+(j-d),gt[3]=C,q=a*h,w=t*a,y=w-(w-a),A=a-y,w=t*h,F=w-(w-h),g=h-F,v=A*g-(q-y*F-A*F-y*g),z=b*o,w=t*b,y=w-(w-b),A=b-y,w=t*o,F=w-(w-o),g=o-F,B=A*g-(z-y*F-A*F-y*g),j=v-B,d=v-j,jt[0]=v-(j+d)+(d-B),k=q+j,d=k-q,m=q-(k-d)+(j-d),j=m-z,d=m-j,jt[1]=m-(j+d)+(d-z),C=k+j,d=C-k,jt[2]=k-(C-d)+(j-d),jt[3]=C,q=u*p,w=t*u,y=w-(w-u),A=u-y,w=t*p,F=w-(w-p),g=p-F,v=A*g-(q-y*F-A*F-y*g),z=l*f,w=t*l,y=w-(w-l),A=l-y,w=t*f,F=w-(w-f),g=f-F,B=A*g-(z-y*F-A*F-y*g),j=v-B,d=v-j,kt[0]=v-(j+d)+(d-B),k=q+j,d=k-q,m=q-(k-d)+(j-d),j=m-z,d=m-j,kt[1]=m-(j+d)+(d-z),C=k+j,d=C-k,kt[2]=k-(C-d)+(j-d),kt[3]=C,q=b*e,w=t*b,y=w-(w-b),A=b-y,w=t*e,F=w-(w-e),g=e-F,v=A*g-(q-y*F-A*F-y*g),z=n*h,w=t*n,y=w-(w-n),A=n-y,w=t*h,F=w-(w-h),g=h-F,B=A*g-(z-y*F-A*F-y*g),j=v-B,d=v-j,mt[0]=v-(j+d)+(d-B),k=q+j,d=k-q,m=q-(k-d)+(j-d),j=m-z,d=m-j,mt[1]=m-(j+d)+(d-z),C=k+j,d=C-k,mt[2]=k-(C-d)+(j-d),mt[3]=C,q=l*o,w=t*l,y=w-(w-l),A=l-y,w=t*o,F=w-(w-o),g=o-F,v=A*g-(q-y*F-A*F-y*g),z=a*p,w=t*a,y=w-(w-a),A=a-y,w=t*p,F=w-(w-p),g=p-F,B=A*g-(z-y*F-A*F-y*g),j=v-B,d=v-j,qt[0]=v-(j+d)+(d-B),k=q+j,d=k-q,m=q-(k-d)+(j-d),j=m-z,d=m-j,qt[1]=m-(j+d)+(d-z),C=k+j,d=C-k,qt[2]=k-(C-d)+(j-d),qt[3]=C;const D=an(dt,wt,gt,i,s,-c,vt),E=an(wt,yt,jt,M,c,-i,zt),G=an(yt,At,kt,x,i,-M,Bt),H=an(At,Ft,mt,s,M,-x,Ct),I=an(Ft,dt,qt,c,x,-s,Dt),J=an(dt,jt,mt,M,s,c,Et),K=an(wt,kt,qt,x,c,i,Gt),L=an(yt,mt,gt,s,i,M,Ht),N=an(At,qt,jt,c,M,x,It),O=an(Ft,gt,kt,i,x,s,Jt),P=r(on(G,Bt,K,Gt,N,It,E,zt,n,e,s,Kt),Kt,on(H,Ct,L,Ht,O,Jt,G,Bt,a,o,c,Lt),Lt,r(on(I,Dt,N,It,J,Et,H,Ct,u,f,i,Nt),Nt,on(D,vt,O,Jt,K,Gt,I,Dt,b,h,M,Ot),Ot,on(E,zt,J,Et,L,Ht,D,vt,l,p,x,Pt),Pt,Rt,St),St,Qt,Tt);return Tt[P-1]}(e,o,c,u,f,i,b,h,M,l,p,x,d,w,y)}function ln(t,n,r,e,s,a,o,c,u,f,i,b,h,M,l){const p=t-h,x=e-h,d=o-h,w=f-h,y=n-M,A=s-M,F=c-M,g=i-M,j=r-l,k=a-l,m=u-l,q=b-l,v=p*A,z=x*y,B=v-z,C=x*F,D=d*A,E=C-D,G=d*g,H=w*F,I=G-H,J=w*y,K=p*g,L=J-K,N=p*F,O=d*y,P=N-O,Q=x*g,R=w*A,S=Q-R,T=p*p+y*y+j*j,U=x*x+A*A+k*k,V=d*d+F*F+m*m,W=w*w+g*g+q*q,X=V*(q*B+j*S+k*L)-W*(j*E-k*P+m*B)+(T*(k*I-m*S+q*E)-U*(m*L+q*P+j*I)),Y=Math.abs(j),Z=Math.abs(k),$=Math.abs(m),_=Math.abs(q),tt=Math.abs(v),nt=Math.abs(z),rt=Math.abs(C),et=Math.abs(D),st=Math.abs(G),at=Math.abs(H),ot=Math.abs(J),ct=Math.abs(K),ut=Math.abs(N),ft=Math.abs(O),it=Math.abs(Q),bt=Math.abs(R),ht=((st+at)*Z+(bt+it)*$+(rt+et)*_)*T+((ot+ct)*$+(ut+ft)*_+(st+at)*Y)*U+((tt+nt)*_+(it+bt)*Y+(ot+ct)*Z)*V+((rt+et)*Y+(ft+ut)*Z+(tt+nt)*$)*W,Mt=17763568394002532e-31*ht;return X>Mt||-X>Mt?X:-Mn(t,n,r,e,s,a,o,c,u,f,i,b,h,M,l,ht)}function pn(t,n,r,e,s,a,o,c,u,f,i,b,h,M,l){const p=t-h,x=e-h,d=o-h,w=f-h,y=n-M,A=s-M,F=c-M,g=i-M,j=r-l,k=a-l,m=u-l,q=b-l,v=p*A-x*y,z=x*F-d*A,B=d*g-w*F,C=w*y-p*g,D=p*F-d*y,E=x*g-w*A;return(d*d+F*F+m*m)*(q*v+j*E+k*C)-(w*w+g*g+q*q)*(j*z-k*D+m*v)+((p*p+y*y+j*j)*(k*B-m*E+q*z)-(x*x+A*A+k*k)*(m*C+q*D+j*B))}export{pt as incircle,xt as incirclefast,ln as insphere,pn as inspherefast,h as orient2d,M as orient2dfast,J as orient3d,K as orient3dfast};export default null;
