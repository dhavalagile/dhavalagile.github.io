self.$__dart_deferred_initializers__=self.$__dart_deferred_initializers__||Object.create(null)
$__dart_deferred_initializers__.current=function(a,b,c,$){var A={
bci(d){return d.VertexMode},
bJp(d){var x,w,v,u=d.length,t=new Float32Array(u*2)
for(x=0;x<u;++x){w=2*x
v=d[x]
t[w]=v.a
t[w+1]=v.b}return t},
bt3(d,e,f,g,h){var x,w,v=null,u=e.length
if(f.length!==u)throw B.i(B.cM('"positions" and "colors" lengths must match.',v))
u=$.bri()[d.a]
x=A.bJp(e)
w=B.box(f)
u=new A.IA(u,x,v,w,v)
u.Am(v,y.U)
return u},
bAL(d){var x,w=d.length,v=new Int32Array(w)
for(x=0;x<w;++x)v[x]=d[x].a
return v},
bIu(d){var x,w,v,u=d.length,t=new Float32Array(u*2)
for(x=0,w=0;x<u;++x,w+=2){v=d[x]
t[w]=v.a
t[w+1]=v.b}return t},
IA:function IA(d,e,f,g,h){var _=this
_.b=d
_.c=e
_.d=f
_.e=g
_.f=h
_.a=null},
a8u:function a8u(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
ayK(d,e,f){var x,w,v=f.a,u=e.a,t=Math.pow(v[0]-u[0],2)+Math.pow(v[1]-u[1],2)
if(t===0)return e
x=d.aq(0,e)
w=f.aq(0,e)
return e.a0(0,w.Ae(B.L(x.EE(w)/t,0,1)))},
by2(d,e){var x,w,v,u,t,s,r,q=e.a,p=d.aq(0,q),o=e.b,n=o.aq(0,q),m=e.d,l=m.aq(0,q),k=p.EE(n),j=n.EE(n),i=p.EE(l),h=l.EE(l)
if(0<=k&&k<=j&&0<=i&&i<=h)return d
x=e.c
w=[A.ayK(d,q,o),A.ayK(d,o,x),A.ayK(d,x,m),A.ayK(d,m,q)]
v=B.bD("closestOverall")
for(q=d.a,u=1/0,t=0;t<4;++t){s=w[t]
o=s.a
r=Math.sqrt(Math.pow(q[0]-o[0],2)+Math.pow(q[1]-o[1],2))
if(r<u){v.b=s
u=r}}return v.b0()},
bBb(){var x=new B.bx(new Float64Array(16))
x.u5()
return new A.a90(x,$.ac())},
bmU(d,e){var x,w,v,u,t,s,r=new B.bx(new Float64Array(16))
r.r1(d)
r.yd(r)
x=e.a
w=e.b
v=new B.cv(new Float64Array(3))
v.tU(x,w,0)
v=r.Aa(v)
u=e.c
t=new B.cv(new Float64Array(3))
t.tU(u,w,0)
t=r.Aa(t)
w=e.d
s=new B.cv(new Float64Array(3))
s.tU(u,w,0)
s=r.Aa(s)
u=new B.cv(new Float64Array(3))
u.tU(x,w,0)
u=r.Aa(u)
x=new B.cv(new Float64Array(3))
x.r1(v)
w=new B.cv(new Float64Array(3))
w.r1(t)
v=new B.cv(new Float64Array(3))
v.r1(s)
t=new B.cv(new Float64Array(3))
t.r1(u)
return new A.a64(x,w,v,t)},
bmh(d,e){var x,w,v,u,t,s,r=[e.a,e.b,e.c,e.d]
for(x=C.o,w=0;w<4;++w){v=r[w]
u=A.by2(v,d).a
t=v.a
s=u[0]-t[0]
t=u[1]-t[1]
if(Math.abs(s)>Math.abs(x.a))x=new B.j(s,x.b)
if(Math.abs(t)>Math.abs(x.b))x=new B.j(x.a,t)}return A.bfe(x)},
bfe(d){return new B.j(B.am3(C.d.oD(d.a,9)),B.am3(C.d.oD(d.b,9)))},
bEv(d,e){if(d.m(0,e))return null
return Math.abs(e.a-d.a)>Math.abs(e.b-d.b)?C.a4:C.x},
KF:function KF(d,e,f,g,h,i){var _=this
_.e=d
_.r=e
_.as=f
_.ax=g
_.ch=h
_.a=i},
RA:function RA(d,e,f,g,h){var _=this
_.d=null
_.e=d
_.f=e
_.r=null
_.w=$
_.z=_.y=_.x=null
_.as=_.Q=0
_.at=null
_.oV$=f
_.a2$=g
_.a=null
_.b=h
_.c=null},
aXD:function aXD(){},
adX:function adX(d,e,f,g,h,i){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.r=h
_.a=i},
a90:function a90(d,e){var _=this
_.a=d
_.x1$=0
_.x2$=e
_.y1$=_.xr$=0
_.y2$=!1},
FL:function FL(d,e){this.a=d
this.b=e},
W5:function W5(){},
bBc(){return new A.tQ(null)},
tQ:function tQ(d){this.a=d},
UM:function UM(d,e,f,g,h,i){var _=this
_.d=d
_.e=e
_.f=f
_.r=null
_.w=$
_.x=null
_.oV$=g
_.a2$=h
_.a=null
_.b=i
_.c=null},
b5s:function b5s(d,e){this.a=d
this.b=e},
b5t:function b5t(d){this.a=d},
b5z:function b5z(d){this.a=d},
b5y:function b5y(d){this.a=d},
b5x:function b5x(d){this.a=d},
b5w:function b5w(d){this.a=d},
b5v:function b5v(d,e){this.a=d
this.b=e},
b5u:function b5u(d,e,f){this.a=d
this.b=e
this.c=f},
aag:function aag(d,e){this.b=d
this.a=e},
aOD:function aOD(d,e){this.a=d
this.b=e},
WM:function WM(){},
bc8(d,e,f,g,h){var x=new A.XS(e,g,f,B.b([],y.g),h,B.b([],y.h))
x.ang(d,e,f,g,h)
return x},
XS:function XS(d,e,f,g,h,i){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i},
anL:function anL(d){this.a=d},
anK:function anK(d){this.a=d},
anJ:function anJ(d){this.a=d},
aOC:function aOC(d){this.a=d
this.c=this.b=null},
b0C:function b0C(d,e){this.a=d
this.b=e},
hj:function hj(d,e,f){this.a=d
this.b=e
this.c=f},
aah:function aah(){},
YY:function YY(d,e,f,g){var _=this
_.c=d
_.d=e
_.e=f
_.a=g},
ap8:function ap8(d){this.a=d},
ap7:function ap7(d,e){this.a=d
this.b=e},
zI:function zI(d,e,f,g){var _=this
_.c=d
_.d=e
_.e=f
_.a=g},
aQp:function aQp(d){this.a=d},
a14:function a14(d,e,f){this.c=d
this.d=e
this.a=f},
a64:function a64(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
bBs(d,e,f){var x,w
if($.aQ())return A.bt3(d,e,f,null,null)
x=A.bAL(f)
w=A.bIu(e)
if($.Hn==null)$.Hn=new B.ajW()
return new A.a8u(d,w,x,null)}},B,C,D,E,J,F
A=a.updateHolder(c[86],A)
B=c[0]
C=c[2]
D=c[126]
E=c[115]
J=c[1]
F=c[98]
A.IA.prototype={
yY(){var x=this
return B.aa($.cJ.rY(),"MakeVertices",[x.b,x.c,x.d,x.e,x.f])},
AX(){return this.yY()},
x8(d){var x=this.a
if(x!=null)x.delete()}}
A.a8u.prototype={}
A.KF.prototype={
F(){var x=null,w=y.z
return new A.RA(new B.ah(x,w),new B.ah(x,w),x,x,C.j)}}
A.RA.prototype={
gMn(){var x=$.R.G$.z.i(0,this.e).gJ()
x.toString
x=y.x.a(x).k3
x.toString
return this.a.e.GQ(new B.x(0,0,0+x.a,0+x.b))},
gOa(){var x=$.R.G$.z.i(0,this.f).gJ()
x.toString
x=y.x.a(x).k3
return new B.x(0,0,0+x.a,0+x.b)},
Nj(a0,a1){var x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d=this
if(a1.m(0,C.o)){x=new B.bx(new Float64Array(16))
x.r1(a0)
return x}d.a.toString
w=new B.bx(new Float64Array(16))
w.r1(a0)
w.pk(0,a1.a,a1.b)
v=A.bmU(w,d.gOa())
x=d.gMn()
if(x.gacU(x))return w
x=d.gMn()
u=d.as
t=new B.bx(new Float64Array(16))
t.u5()
s=x.c
r=x.a
q=s-r
p=x.d
x=x.b
o=p-x
t.pk(0,q/2,o/2)
t.QA(u)
t.pk(0,-q/2,-o/2)
u=new B.cv(new Float64Array(3))
u.tU(r,x,0)
u=t.Aa(u)
q=new B.cv(new Float64Array(3))
q.tU(s,x,0)
q=t.Aa(q)
x=new B.cv(new Float64Array(3))
x.tU(s,p,0)
x=t.Aa(x)
s=new B.cv(new Float64Array(3))
s.tU(r,p,0)
s=t.Aa(s)
r=new Float64Array(3)
new B.cv(r).r1(u)
u=new Float64Array(3)
new B.cv(u).r1(q)
q=new Float64Array(3)
new B.cv(q).r1(x)
x=new Float64Array(3)
new B.cv(x).r1(s)
s=r[0]
p=u[0]
o=q[0]
n=x[0]
m=Math.min(s,Math.min(p,Math.min(o,n)))
r=r[1]
u=u[1]
q=q[1]
x=x[1]
l=Math.min(r,Math.min(u,Math.min(q,x)))
k=Math.max(s,Math.max(p,Math.max(o,n)))
j=Math.max(r,Math.max(u,Math.max(q,x)))
x=new B.cv(new Float64Array(3))
x.tU(m,l,0)
u=new B.cv(new Float64Array(3))
u.tU(k,l,0)
s=new B.cv(new Float64Array(3))
s.tU(k,j,0)
r=new B.cv(new Float64Array(3))
r.tU(m,j,0)
q=new B.cv(new Float64Array(3))
q.r1(x)
x=new B.cv(new Float64Array(3))
x.r1(u)
u=new B.cv(new Float64Array(3))
u.r1(s)
s=new B.cv(new Float64Array(3))
s.r1(r)
i=new A.a64(q,x,u,s)
h=A.bmh(i,v)
if(h.m(0,C.o))return w
x=w.R9().a
u=x[0]
x=x[1]
g=a0.Lw()
u-=h.a*g
x-=h.b*g
f=new B.bx(new Float64Array(16))
f.r1(a0)
s=new B.cv(new Float64Array(3))
s.tU(u,x,0)
f.a0f(s)
e=A.bmh(i,A.bmU(f,d.gOa()))
if(e.m(0,C.o))return f
s=e.a===0
if(!s&&e.b!==0){x=new B.bx(new Float64Array(16))
x.r1(a0)
return x}u=s?u:0
x=e.b===0?x:0
s=new B.bx(new Float64Array(16))
s.r1(a0)
r=new B.cv(new Float64Array(3))
r.tU(u,x,0)
s.a0f(r)
return s},
a5M(d,e){var x,w,v,u,t,s,r=this
if(e===1){x=new B.bx(new Float64Array(16))
x.r1(d)
return x}w=r.d.a.Lw()
x=r.gOa()
v=r.gMn()
u=r.gOa()
t=r.gMn()
s=B.L(Math.max(w*e,Math.max((x.c-x.a)/(v.c-v.a),(u.d-u.b)/(t.d-t.b))),r.a.as,2.5)
x=new B.bx(new Float64Array(16))
x.r1(d)
x.rB(0,s/w)
return x},
aAf(d,e,f){var x,w,v,u
if(e===0){x=new B.bx(new Float64Array(16))
x.r1(d)
return x}w=this.d.A8(f)
x=new B.bx(new Float64Array(16))
x.r1(d)
v=w.a
u=w.b
x.pk(0,v,u)
x.QA(-e)
x.pk(0,-v,-u)
return x},
TF(d){switch(d){case D.az3:return!1
case D.uW:this.a.toString
return!0
case D.mC:case null:this.a.toString
return!0}},
a4d(d){this.a.toString
if(Math.abs(d.d-1)>Math.abs(0))return D.uW
else return D.mC},
azq(d){var x,w,v=this
v.a.ax.$1(d)
x=v.w
x===$&&B.c()
w=x.r
if(w!=null&&w.a!=null){x.tQ(0)
x=v.w
x.sl(0,x.a)
x=v.r
if(x!=null)x.a.B(0,v.gNu())
v.r=null}v.x=v.at=null
v.z=v.d.a.Lw()
v.y=v.d.A8(d.b)
v.Q=v.as},
aBu(d){var x,w,v,u,t,s,r=this,q=r.d.a.Lw(),p=d.c,o=r.d.A8(p),n=r.at
if(n===D.mC)n=r.at=r.a4d(d)
else if(n==null){n=r.a4d(d)
r.at=n}if(!r.TF(n)){r.a.toString
return}switch(r.at.a){case 1:n=r.z
n.toString
x=r.d
x.sl(0,r.a5M(x.a,n*d.d/q))
w=r.d.A8(p)
n=r.d
x=n.a
v=r.y
v.toString
n.sl(0,r.Nj(x,w.aq(0,v)))
u=r.d.A8(p)
p=r.y
p.toString
if(!A.bfe(p).m(0,A.bfe(u)))r.y=u
break
case 2:n=d.r
if(n===0){r.a.toString
return}x=r.Q
x.toString
t=x+n
n=r.d
n.sl(0,r.aAf(n.a,r.as-t,p))
r.as=t
break
case 0:if(d.d!==1){r.a.toString
return}if(r.x==null){n=r.y
n.toString
r.x=A.bEv(n,o)}n=r.y
n.toString
s=o.aq(0,n)
n=r.d
n.sl(0,r.Nj(n.a,s))
r.y=r.d.A8(p)
break}r.a.toString},
aBq(d){var x,w,v,u,t,s,r,q,p=this
p.a.toString
p.y=p.Q=p.z=null
x=p.r
if(x!=null)x.a.B(0,p.gNu())
x=p.w
x===$&&B.c()
x.sl(0,x.a)
if(!p.TF(p.at)){p.x=null
return}if(p.at!==D.mC||d.a.a.gu0()<50){p.x=null
return}x=p.d.a.R9().a
w=x[0]
x=x[1]
v=d.a.a
u=Math.log(0.0000135)
t=Math.log(0.0000135)
s=Math.log(10/v.gu0())
r=Math.log(135e-9)
u=new B.BO(0.0000135,u,w,v.a,C.cB).gJY()
v=new B.BO(0.0000135,t,x,v.b,C.cB).gJY()
t=y.L
q=B.aM(C.e2,p.w,null)
p.r=new B.F(q,new B.a8(new B.j(w,x),new B.j(u,v),t),t.h("F<a0.T>"))
p.w.e=B.du(0,0,0,C.d.dI(s/r*1000),0,0)
q.a6(0,p.gNu())
p.w.oW(0)},
azs(d){var x,w,v,u,t,s,r=this
if(y.C.b(d)){if(d.gHF().b===0)return
x=r.a.ax
w=d.grf(d)
v=d.gvK()
x.$1(new B.Dy(w,v,0))
x=d.gHF()
r.a.toString
u=Math.exp(-x.b/200)
if(!r.TF(D.uW)){r.a.toString
return}x=r.d
x.toString
t=x.A8(d.gvK())
x=r.d
x.sl(0,r.a5M(x.a,u))
x=r.d
x.toString
s=x.A8(d.gvK())
x=r.d
x.sl(0,r.Nj(x.a,s.aq(0,t)))
r.a.toString}},
aAS(){var x,w,v,u,t=this,s=t.w
s===$&&B.c()
s=s.r
if(!(s!=null&&s.a!=null)){t.x=null
s=t.r
if(s!=null)s.a.B(0,t.gNu())
t.r=null
s=t.w
s.sl(0,s.a)
return}s=t.d.a.R9().a
x=s[0]
s=s[1]
w=t.d.A8(new B.j(x,s))
s=t.d
s.toString
x=t.r
v=x.b
x=x.a
u=s.A8(v.M(0,x.gl(x))).aq(0,w)
x=t.d
x.sl(0,t.Nj(x.a,u))},
aBI(){this.D(new A.aXD())},
a3(){var x,w=this,v=null
w.ac()
x=w.a.ch
w.d=x
x.a6(0,w.gUK())
w.w=B.aU(C.u,v,v,v,1,v,w)},
ab(d){var x,w,v=this
v.ao(d)
x=v.a
if(x.ch!==d.ch){x=v.gUK()
v.d.B(0,x)
w=v.a.ch
v.d=w
w.a6(0,x)}},
k(){var x=this,w=x.w
w===$&&B.c()
w.k()
x.d.B(0,x.gUK())
x.a.toString
x.amc()},
n(d){var x,w,v=this,u=null,t=v.a
t.toString
x=v.d.a
w=new A.adX(t.r,v.e,C.q,!0,x,u)
return B.Lc(C.eh,B.cz(C.aN,w,C.y,!1,u,u,u,u,u,u,u,u,u,u,u,u,v.gaBp(),v.gazp(),v.gaBt(),u,u,u,u,u,u,u),v.f,u,u,u,v.gazr(),u)}}
A.adX.prototype={
n(d){var x=this,w=B.mb(null,new B.fV(x.c,x.d),x.r,!0)
return B.j2(w,x.e,null)}}
A.a90.prototype={
A8(d){var x=this.a,w=new B.bx(new Float64Array(16))
if(w.yd(x)===0)B.Q(B.i6(x,"other","Matrix cannot be inverted"))
x=new B.cv(new Float64Array(3))
x.tU(d.a,d.b,0)
x=w.Aa(x).a
return new B.j(x[0],x[1])}}
A.FL.prototype={
j(d){return"_GestureType."+this.b}}
A.W5.prototype={
pt(){this.qr()
this.pU()
this.rZ()},
k(){var x=this,w=x.a2$
if(w!=null)w.B(0,x.grV())
x.a2$=null
x.W()}}
A.tQ.prototype={
F(){var x=null
return new A.UM(new B.ah(x,y.z),A.bc8(x,8,1,16,x),A.bBb(),x,x,C.j)}}
A.UM.prototype={
aAT(){var x=this,w=x.r,v=w.b
w=w.a
x.f.sl(0,v.M(0,w.gl(w)))
w=x.w
w===$&&B.c()
w=w.r
if(!(w!=null&&w.a!=null)){w=x.r
if(w!=null)w.a.B(0,x.gUF())
x.r=null
w=x.w
w.sl(0,w.a)}},
aBs(d){var x,w=this,v=w.w
v===$&&B.c()
x=v.Q
x===$&&B.c()
if(x===C.ak){v.tQ(0)
v=w.r
if(v!=null)v.a.B(0,w.gUF())
w.r=null
v=w.w
v.sl(0,v.a)}},
aBF(d){var x=this,w=x.f.A8(d.a.aq(0,B.dD(y.x.a($.R.G$.z.i(0,x.d).gJ()).rU(0,null),C.o)))
x.D(new A.b5s(x,x.e.aQ4(w)))},
a3(){var x=null
this.ac()
this.w=B.aU(C.u,x,x,x,1,x,this)},
n(d){var x=null,w=B.t(d)
return B.bV(B.cx(x,x,!1,x,x,x,1,x,x,x,!1,x,x,x,x,x,!0,x,x,x,x,x,x,B.r(B.u(d,C.h,y.s).gbe(),x,x,x,x,x,x,x,x),x,x,x,1,x),w.ay.b,B.U(x,new B.d1(new A.b5t(this),x),C.e,D.wy,x,x,x,x,x,x,x,x,x,x),x,x,!1,x,x,x,B.b([this.gaQN(),this.gaLp()],y.p),x)},
gaQN(){var x=null,w=this.c
w.toString
return B.c3(B.t(w).ay.cy,!0,x,D.a57,x,x,new A.b5z(this),C.J,x,"Reset")},
gaLp(){var x=null,w=this.c
w.toString
return B.c3(B.t(w).ay.cy,!0,x,E.oK,x,x,new A.b5x(this),C.J,x,"Edit")},
k(){var x=this.w
x===$&&B.c()
x.k()
this.an7()}}
A.aag.prototype={
aC(d,e){this.b.ad(0,new A.aOD(this,d))},
uD(d){return d.b!==this.b}}
A.WM.prototype={
pt(){this.qr()
this.pU()
this.rZ()},
k(){var x=this,w=x.a2$
if(w!=null)w.B(0,x.grV())
x.a2$=null
x.W()}}
A.XS.prototype={
ang(d,e,f,g,h){var x,w,v,u,t,s=this,r=s.b,q=-r,p=r-s.c,o=Math.sqrt(3)/2*p
r=0+o
x=q+0.5*p
w=q+1.5*p
v=q+2*p
u=0-o
C.b.a5(s.d,B.b([new B.j(0,q),new B.j(r,x),new B.j(r,w),new B.j(r,w),new B.j(0,v),new B.j(0,v),new B.j(u,w),new B.j(u,w),new B.j(u,x)],y.g))
if(d!=null)C.b.a5(s.f,d)
else{t=s.a4i(null)
for(r=s.f;t!=null;){r.push(t)
t=s.a4i(t)}}},
goE(d){return new A.aOC(this.f)},
a4m(d){var x=this.a,w=-x
if(d<=0)w-=d
else x-=d
return new A.b0C(w,x)},
a4i(d){var x,w,v,u=this
if(d==null)return new A.hj(-u.a,0,D.i_)
x=d.a
w=u.a4m(x)
if(x>=u.a&&d.b>=w.b)return null
v=d.b
if(v>=w.b){++x
return new A.hj(x,u.a4m(x).a,D.i_)}return new A.hj(x,v+1,D.i_)},
guE(d){var x=this.b,w=this.a
return new B.K((w*2+1)*(Math.sqrt(3)/2*x)*2,2*(x+w*1.5*x))},
aQ4(d){var x=this,w=x.guE(x),v=d.b-x.guE(x).b/2,u=x.b,t=new A.hj(C.d.dI((Math.sqrt(3)/3*(d.a-w.a/2)-0.3333333333333333*v)/u),C.d.dI(0.6666666666666666*v/u),D.i_)
w=D.Pz.gab5().a
v=t.gab5().a
if(C.d.rt(Math.abs(w[0]-v[0])+Math.abs(w[1]-v[1])+Math.abs(w[2]-v[2]),2)>x.a)return null
return C.b.GK(x.f,new A.anL(t))},
afQ(d,e){var x=this,w=Math.sqrt(3),v=x.b,u=d.a,t=Math.sqrt(3),s=d.b,r=x.d,q=B.aj(r).h("aC<1,j>"),p=B.aB(new B.aC(r,new A.anK(new B.t3(w*v*u+t/2*v*s+x.guE(x).a/2,1.5*v*s+x.guE(x).b/2,y.O)),q),!0,q.h("bP.E"))
return A.bBs(C.NV,p,B.bQ(p.length,e,!1,y.G))},
aKM(d){var x=this
if(J.l(x.e,d))return x
return A.bc8(x.f,x.a,x.c,x.b,d)},
aKL(d,e){var x,w,v=this,u=new A.hj(d.a,d.b,e),t=v.f,s=C.b.PK(t,new A.anJ(d))
if(J.l(v.rp(0,s),d)&&d.c.m(0,e))return v
x=B.hq(t,!0,y.X)
x[s]=u
w=v.e
if(d.m(0,w))w=u
return A.bc8(x,v.a,v.c,v.b,w)},
$iG:1}
A.aOC.prototype={
C(){var x,w=this,v=w.b
v=v==null?w.b=0:w.b=v+1
x=w.a
if(v>=x.length){w.c=null
return!1}w.c=x[v]
return!0},
gV(d){return this.c}}
A.b0C.prototype={}
A.hj.prototype={
j(d){return"BoardPoint("+this.a+", "+this.b+", "+this.c.j(0)+")"},
m(d,e){if(e==null)return!1
if(J.al(e)!==B.Y(this))return!1
return e instanceof A.hj&&e.a===this.a&&e.b===this.b},
gL(d){return B.ad(this.a,this.b,C.a,C.a,C.a,C.a,C.a,C.a,C.a,C.a,C.a,C.a,C.a,C.a,C.a,C.a,C.a,C.a,C.a,C.a)},
gab5(){var x=this.a,w=this.b,v=new B.cv(new Float64Array(3))
v.tU(x,w,-x-w)
return v}}
A.aah.prototype={}
A.YY.prototype={
n(d){var x=this.c,w=B.h(x).h("lC<1,zI>")
return B.aw(B.aB(new B.lC(x,new A.ap8(this),w),!0,w.h("G.E")),C.l,null,C.a0,C.i,null)}}
A.zI.prototype={
n(d){var x=null,w=!this.d?x:D.a4n
return B.U(x,B.bjN(!1,w,C.e,C.Qq,0,2,!0,this.c,x,4,x,8,x,4,x,x,new A.aQp(this),C.dN,x,x),C.e,x,x,x,x,60,x,x,D.a1E,x,x,60)}}
A.a14.prototype={
n(d){var x=null,w=B.dV([C.n,C.jZ,C.ny,C.wF,D.wy],y.G),v=this.c
return B.a9(B.b([B.r(""+v.a+", "+v.b,x,x,x,x,C.mn,C.ud,x,x),new A.YY(w,v.c,this.d,x)],y.p),C.aH,x,C.k,C.i,C.m)}}
A.a64.prototype={}
var z=a.updateTypes(["~()","~(Dy)","M(hj)","~(Np)","~(Dx)","~(kI)","~(jq)","~(hj?)","zI(k)"])
A.aXD.prototype={
$0(){},
$S:0}
A.b5s.prototype={
$0(){var x=this.a
x.e=x.e.aKM(this.b)},
$S:0}
A.b5t.prototype={
$2(d,e){var x,w,v,u=null,t=e.b,s=e.d,r=this.a
if(r.x==null){x=new B.bx(new Float64Array(16))
x.u5()
w=r.e
w=w.guE(w)
v=r.e
x.pk(0,t/2-w.a/2,s/2-v.guE(v).b/2)
r.x=x
r.f.sl(0,x)}x=r.e
x=x.guE(x)
return B.j2(B.dE(B.cz(C.aN,new A.KF(new B.Z(t,s,t,s),B.be0(B.hk(u,u,u,new A.aag(r.e,u),x)),0.01,r.gaBr(),r.f,r.d),C.y,!1,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,r.gaBE(),u,u,u),C.ag,u,u,u,u),C.q,u)},
$S:777}
A.b5z.prototype={
$0(){var x=this.a
x.D(new A.b5y(x))},
$S:0}
A.b5y.prototype={
$0(){var x,w,v=this.a,u=v.w
u===$&&B.c()
u.sl(0,u.a)
u=v.f.a
x=v.x
w=v.w
v.r=new B.F(w,new B.oP(u,x),y.d.h("F<a0.T>"))
w.e=C.i6
w.a6(0,v.gUF())
v.w.oW(0)},
$S:0}
A.b5x.prototype={
$0(){var x,w=this.a
if(w.e.e==null)return
x=w.c
x.toString
F.bfJ(new A.b5w(w),x,y.l)},
$S:0}
A.b5w.prototype={
$1(d){var x=null,w=this.a,v=w.e.e
v.toString
return B.U(x,new A.a14(v,new A.b5v(w,d),x),C.e,x,x,x,x,150,x,x,C.i8,x,x,1/0)},
$S:778}
A.b5v.prototype={
$1(d){var x=this.a
x.D(new A.b5u(x,d,this.b))},
$S:779}
A.b5u.prototype={
$0(){var x=this.a,w=x.e,v=w.e
v.toString
x.e=w.aKL(v,this.b)
B.bA(this.c,!1).tI(null)},
$S:0}
A.aOD.prototype={
$1(d){var x=d.c,w=this.a.b,v=w.afQ(d,B.W(C.d.dI(255*(J.l(w.e,d)?0.7:1)),x.gl(x)>>>16&255,x.gl(x)>>>8&255,x.gl(x)&255))
x=$.aQ()?B.aS():new B.aO(new B.aR())
this.b.BA(v,C.Px,x)},
$S:z+7}
A.anL.prototype={
$1(d){var x=this.a
return d.a===x.a&&d.b===x.b},
$S:z+2}
A.anK.prototype={
$1(d){var x=this.a
return new B.j(d.a+x.a,d.b+x.b)},
$S:237}
A.anJ.prototype={
$1(d){var x=this.a
return d.a===x.a&&d.b===x.b},
$S:z+2}
A.ap8.prototype={
$1(d){var x=this.a
return new A.zI(d,d.m(0,x.d),new A.ap7(x,d),null)},
$S:z+8}
A.ap7.prototype={
$0(){this.a.e.$1(this.b)},
$S:14}
A.aQp.prototype={
$0(){this.a.e.$0()},
$S:0};(function aliases(){var x=A.W5.prototype
x.amc=x.k
x=A.WM.prototype
x.an7=x.k})();(function installTearOffs(){var x=a._instance_1u,w=a._instance_0u
var v
x(v=A.RA.prototype,"gazp","azq",1)
x(v,"gaBt","aBu",3)
x(v,"gaBp","aBq",4)
x(v,"gazr","azs",5)
w(v,"gNu","aAS",0)
w(v,"gUK","aBI",0)
w(v=A.UM.prototype,"gUF","aAT",0)
x(v,"gaBr","aBs",1)
x(v,"gaBE","aBF",6)})();(function inheritance(){var x=a.mixinHard,w=a.mixin,v=a.inherit,u=a.inheritMany
v(A.IA,B.hL)
u(B.a_,[A.a8u,A.aah,A.b0C,A.hj,A.a64])
u(B.y,[A.KF,A.tQ])
u(B.D,[A.W5,A.WM])
v(A.RA,A.W5)
u(B.hC,[A.aXD,A.b5s,A.b5z,A.b5y,A.b5x,A.b5u,A.ap7,A.aQp])
u(B.q,[A.adX,A.YY,A.zI,A.a14])
v(A.a90,B.c0)
v(A.FL,B.pR)
v(A.UM,A.WM)
v(A.b5t,B.ia)
u(B.d4,[A.b5w,A.b5v,A.aOD,A.anL,A.anK,A.anJ,A.ap8])
v(A.aag,B.of)
v(A.XS,A.aah)
v(A.aOC,B.KK)
x(A.W5,B.cu)
x(A.WM,B.cu)
w(A.aah,B.jg)})()
B.b0(b.typeUniverse,JSON.parse('{"IA":{"hL":["tD"],"fu":["tD"]},"KF":{"y":[],"d":[]},"RA":{"D":["KF"]},"adX":{"q":[],"d":[]},"a90":{"c0":["bx"],"ae":[]},"FL":{"V":[]},"tQ":{"y":[],"d":[]},"UM":{"D":["tQ"]},"aag":{"ae":[]},"XS":{"jg":["hj?"],"G":["hj?"],"jg.E":"hj?"},"zI":{"q":[],"d":[]},"YY":{"q":[],"d":[]},"a14":{"q":[],"d":[]}}'))
var y=(function rtii(){var x=B.a5
return{X:x("hj"),G:x("k"),s:x("B"),h:x("v<hj>"),g:x("v<j>"),p:x("v<d>"),z:x("ah<D<y>>"),d:x("oP"),O:x("t3<z>"),C:x("t6"),x:x("A"),U:x("tD"),L:x("a8<j>"),l:x("d")}})();(function constants(){D.i_=new B.k(4291677645)
D.Pz=new A.hj(0,0,D.i_)
D.wy=new B.k(4280756007)
D.a1E=new B.Z(2,0,2,0)
D.a32=new B.aG(57686,"MaterialIcons",null,!1)
D.a4n=new B.bF(D.a32,null,C.n,null,null)
D.a3I=new B.aG(58659,"MaterialIcons",null,!1)
D.a57=new B.bF(D.a3I,null,null,null,null)
D.mC=new A.FL(0,"pan")
D.uW=new A.FL(1,"scale")
D.az3=new A.FL(2,"rotate")})();(function lazyInitializers(){var x=a.lazyFinal
x($,"bOj","bri",()=>B.b([B.b3(A.bci(B.b2()),"Triangles"),B.b3(A.bci(B.b2()),"TrianglesStrip"),B.b3(A.bci(B.b2()),"TriangleFan")],B.a5("v<m>")))})()}
$__dart_deferred_initializers__["N4GpT+EAhJfPp/97KlqbLXTvU7s="] = $__dart_deferred_initializers__.current
