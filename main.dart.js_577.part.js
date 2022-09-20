self.$__dart_deferred_initializers__=self.$__dart_deferred_initializers__||Object.create(null)
$__dart_deferred_initializers__.current=function(a,b,c,$){var A={
bc6(d){return d.VertexMode},
bJ6(d){var x,w,v,u=d.length,t=new Float32Array(u*2)
for(x=0;x<u;++x){w=2*x
v=d[x]
t[w]=v.a
t[w+1]=v.b}return t},
bsM(d,e,f,g,h){var x,w,v=null,u=e.length
if(f.length!==u)throw B.i(B.cM('"positions" and "colors" lengths must match.',v))
u=$.br2()[d.a]
x=A.bJ6(e)
w=B.boi(f)
u=new A.Iv(u,x,v,w,v)
u.Al(v,y.U)
return u},
bAt(d){var x,w=d.length,v=new Int32Array(w)
for(x=0;x<w;++x)v[x]=d[x].a
return v},
bIc(d){var x,w,v,u=d.length,t=new Float32Array(u*2)
for(x=0,w=0;x<u;++x,w+=2){v=d[x]
t[w]=v.a
t[w+1]=v.b}return t},
Iv:function Iv(d,e,f,g,h){var _=this
_.b=d
_.c=e
_.d=f
_.e=g
_.f=h
_.a=null},
a8r:function a8r(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
ayC(d,e,f){var x,w,v=f.a,u=e.a,t=Math.pow(v[0]-u[0],2)+Math.pow(v[1]-u[1],2)
if(t===0)return e
x=d.aq(0,e)
w=f.aq(0,e)
return e.a0(0,w.Ad(B.L(x.EB(w)/t,0,1)))},
bxL(d,e){var x,w,v,u,t,s,r,q=e.a,p=d.aq(0,q),o=e.b,n=o.aq(0,q),m=e.d,l=m.aq(0,q),k=p.EB(n),j=n.EB(n),i=p.EB(l),h=l.EB(l)
if(0<=k&&k<=j&&0<=i&&i<=h)return d
x=e.c
w=[A.ayC(d,q,o),A.ayC(d,o,x),A.ayC(d,x,m),A.ayC(d,m,q)]
v=B.bD("closestOverall")
for(q=d.a,u=1/0,t=0;t<4;++t){s=w[t]
o=s.a
r=Math.sqrt(Math.pow(q[0]-o[0],2)+Math.pow(q[1]-o[1],2))
if(r<u){v.b=s
u=r}}return v.bW()},
bAU(){var x=new B.bx(new Float64Array(16))
x.u5()
return new A.a8Y(x,$.ac())},
bmH(d,e){var x,w,v,u,t,s,r=new B.bx(new Float64Array(16))
r.r1(d)
r.yd(r)
x=e.a
w=e.b
v=new B.cv(new Float64Array(3))
v.tU(x,w,0)
v=r.A9(v)
u=e.c
t=new B.cv(new Float64Array(3))
t.tU(u,w,0)
t=r.A9(t)
w=e.d
s=new B.cv(new Float64Array(3))
s.tU(u,w,0)
s=r.A9(s)
u=new B.cv(new Float64Array(3))
u.tU(x,w,0)
u=r.A9(u)
x=new B.cv(new Float64Array(3))
x.r1(v)
w=new B.cv(new Float64Array(3))
w.r1(t)
v=new B.cv(new Float64Array(3))
v.r1(s)
t=new B.cv(new Float64Array(3))
t.r1(u)
return new A.a61(x,w,v,t)},
bm4(d,e){var x,w,v,u,t,s,r=[e.a,e.b,e.c,e.d]
for(x=C.o,w=0;w<4;++w){v=r[w]
u=A.bxL(v,d).a
t=v.a
s=u[0]-t[0]
t=u[1]-t[1]
if(Math.abs(s)>Math.abs(x.a))x=new B.j(s,x.b)
if(Math.abs(t)>Math.abs(x.b))x=new B.j(x.a,t)}return A.bf1(x)},
bf1(d){return new B.j(B.alZ(C.d.oD(d.a,9)),B.alZ(C.d.oD(d.b,9)))},
bEd(d,e){if(d.m(0,e))return null
return Math.abs(e.a-d.a)>Math.abs(e.b-d.b)?C.a4:C.x},
KA:function KA(d,e,f,g,h,i){var _=this
_.e=d
_.r=e
_.as=f
_.ax=g
_.ch=h
_.a=i},
Rx:function Rx(d,e,f,g,h){var _=this
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
aXu:function aXu(){},
adT:function adT(d,e,f,g,h,i){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.r=h
_.a=i},
a8Y:function a8Y(d,e){var _=this
_.a=d
_.x1$=0
_.x2$=e
_.y1$=_.xr$=0
_.y2$=!1},
FH:function FH(d,e){this.a=d
this.b=e},
W2:function W2(){},
bAV(){return new A.tP(null)},
tP:function tP(d){this.a=d},
UJ:function UJ(d,e,f,g,h,i){var _=this
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
b5g:function b5g(d,e){this.a=d
this.b=e},
b5h:function b5h(d){this.a=d},
b5n:function b5n(d){this.a=d},
b5m:function b5m(d){this.a=d},
b5l:function b5l(d){this.a=d},
b5k:function b5k(d){this.a=d},
b5j:function b5j(d,e){this.a=d
this.b=e},
b5i:function b5i(d,e,f){this.a=d
this.b=e
this.c=f},
aac:function aac(d,e){this.b=d
this.a=e},
aOu:function aOu(d,e){this.a=d
this.b=e},
WJ:function WJ(){},
bbX(d,e,f,g,h){var x=new A.XQ(e,g,f,B.b([],y.g),h,B.b([],y.h))
x.anb(d,e,f,g,h)
return x},
XQ:function XQ(d,e,f,g,h,i){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i},
anG:function anG(d){this.a=d},
anF:function anF(d){this.a=d},
anE:function anE(d){this.a=d},
aOt:function aOt(d){this.a=d
this.c=this.b=null},
b0t:function b0t(d,e){this.a=d
this.b=e},
hi:function hi(d,e,f){this.a=d
this.b=e
this.c=f},
aad:function aad(){},
YW:function YW(d,e,f,g){var _=this
_.c=d
_.d=e
_.e=f
_.a=g},
ap2:function ap2(d){this.a=d},
ap1:function ap1(d,e){this.a=d
this.b=e},
zG:function zG(d,e,f,g){var _=this
_.c=d
_.d=e
_.e=f
_.a=g},
aQg:function aQg(d){this.a=d},
a12:function a12(d,e,f){this.c=d
this.d=e
this.a=f},
a61:function a61(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
bBa(d,e,f){var x,w
if($.aQ())return A.bsM(d,e,f,null,null)
x=A.bAt(f)
w=A.bIc(e)
if($.Hi==null)$.Hi=new B.ajR()
return new A.a8r(d,w,x,null)}},B,C,D,E,J,F
A=a.updateHolder(c[86],A)
B=c[0]
C=c[2]
D=c[126]
E=c[115]
J=c[1]
F=c[98]
A.Iv.prototype={
yY(){var x=this
return B.aa($.cJ.rY(),"MakeVertices",[x.b,x.c,x.d,x.e,x.f])},
AW(){return this.yY()},
x7(d){var x=this.a
if(x!=null)x.delete()}}
A.a8r.prototype={}
A.KA.prototype={
F(){var x=null,w=y.z
return new A.Rx(new B.ah(x,w),new B.ah(x,w),x,x,C.j)}}
A.Rx.prototype={
gMg(){var x=$.R.G$.z.i(0,this.e).gJ()
x.toString
x=y.x.a(x).k3
x.toString
return this.a.e.GL(new B.x(0,0,0+x.a,0+x.b))},
gO3(){var x=$.R.G$.z.i(0,this.f).gJ()
x.toString
x=y.x.a(x).k3
return new B.x(0,0,0+x.a,0+x.b)},
Nc(a0,a1){var x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d=this
if(a1.m(0,C.o)){x=new B.bx(new Float64Array(16))
x.r1(a0)
return x}d.a.toString
w=new B.bx(new Float64Array(16))
w.r1(a0)
w.pk(0,a1.a,a1.b)
v=A.bmH(w,d.gO3())
x=d.gMg()
if(x.gacS(x))return w
x=d.gMg()
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
t.Qt(u)
t.pk(0,-q/2,-o/2)
u=new B.cv(new Float64Array(3))
u.tU(r,x,0)
u=t.A9(u)
q=new B.cv(new Float64Array(3))
q.tU(s,x,0)
q=t.A9(q)
x=new B.cv(new Float64Array(3))
x.tU(s,p,0)
x=t.A9(x)
s=new B.cv(new Float64Array(3))
s.tU(r,p,0)
s=t.A9(s)
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
i=new A.a61(q,x,u,s)
h=A.bm4(i,v)
if(h.m(0,C.o))return w
x=w.R2().a
u=x[0]
x=x[1]
g=a0.Lq()
u-=h.a*g
x-=h.b*g
f=new B.bx(new Float64Array(16))
f.r1(a0)
s=new B.cv(new Float64Array(3))
s.tU(u,x,0)
f.a0d(s)
e=A.bm4(i,A.bmH(f,d.gO3()))
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
s.a0d(r)
return s},
a5K(d,e){var x,w,v,u,t,s,r=this
if(e===1){x=new B.bx(new Float64Array(16))
x.r1(d)
return x}w=r.d.a.Lq()
x=r.gO3()
v=r.gMg()
u=r.gO3()
t=r.gMg()
s=B.L(Math.max(w*e,Math.max((x.c-x.a)/(v.c-v.a),(u.d-u.b)/(t.d-t.b))),r.a.as,2.5)
x=new B.bx(new Float64Array(16))
x.r1(d)
x.rB(0,s/w)
return x},
aA9(d,e,f){var x,w,v,u
if(e===0){x=new B.bx(new Float64Array(16))
x.r1(d)
return x}w=this.d.A7(f)
x=new B.bx(new Float64Array(16))
x.r1(d)
v=w.a
u=w.b
x.pk(0,v,u)
x.Qt(-e)
x.pk(0,-v,-u)
return x},
Tz(d){switch(d){case D.az2:return!1
case D.uV:this.a.toString
return!0
case D.mC:case null:this.a.toString
return!0}},
a4b(d){this.a.toString
if(Math.abs(d.d-1)>Math.abs(0))return D.uV
else return D.mC},
azk(d){var x,w,v=this
v.a.ax.$1(d)
x=v.w
x===$&&B.c()
w=x.r
if(w!=null&&w.a!=null){x.tQ(0)
x=v.w
x.sl(0,x.a)
x=v.r
if(x!=null)x.a.B(0,v.gNn())
v.r=null}v.x=v.at=null
v.z=v.d.a.Lq()
v.y=v.d.A7(d.b)
v.Q=v.as},
aBo(d){var x,w,v,u,t,s,r=this,q=r.d.a.Lq(),p=d.c,o=r.d.A7(p),n=r.at
if(n===D.mC)n=r.at=r.a4b(d)
else if(n==null){n=r.a4b(d)
r.at=n}if(!r.Tz(n)){r.a.toString
return}switch(r.at.a){case 1:n=r.z
n.toString
x=r.d
x.sl(0,r.a5K(x.a,n*d.d/q))
w=r.d.A7(p)
n=r.d
x=n.a
v=r.y
v.toString
n.sl(0,r.Nc(x,w.aq(0,v)))
u=r.d.A7(p)
p=r.y
p.toString
if(!A.bf1(p).m(0,A.bf1(u)))r.y=u
break
case 2:n=d.r
if(n===0){r.a.toString
return}x=r.Q
x.toString
t=x+n
n=r.d
n.sl(0,r.aA9(n.a,r.as-t,p))
r.as=t
break
case 0:if(d.d!==1){r.a.toString
return}if(r.x==null){n=r.y
n.toString
r.x=A.bEd(n,o)}n=r.y
n.toString
s=o.aq(0,n)
n=r.d
n.sl(0,r.Nc(n.a,s))
r.y=r.d.A7(p)
break}r.a.toString},
aBk(d){var x,w,v,u,t,s,r,q,p=this
p.a.toString
p.y=p.Q=p.z=null
x=p.r
if(x!=null)x.a.B(0,p.gNn())
x=p.w
x===$&&B.c()
x.sl(0,x.a)
if(!p.Tz(p.at)){p.x=null
return}if(p.at!==D.mC||d.a.a.gu0()<50){p.x=null
return}x=p.d.a.R2().a
w=x[0]
x=x[1]
v=d.a.a
u=Math.log(0.0000135)
t=Math.log(0.0000135)
s=Math.log(10/v.gu0())
r=Math.log(135e-9)
u=new B.BL(0.0000135,u,w,v.a,C.cB).gJT()
v=new B.BL(0.0000135,t,x,v.b,C.cB).gJT()
t=y.L
q=B.aM(C.e2,p.w,null)
p.r=new B.F(q,new B.a8(new B.j(w,x),new B.j(u,v),t),t.h("F<a_.T>"))
p.w.e=B.dt(0,0,0,C.d.dI(s/r*1000),0,0)
q.a6(0,p.gNn())
p.w.oW(0)},
azm(d){var x,w,v,u,t,s,r=this
if(y.C.b(d)){if(d.gHA().b===0)return
x=r.a.ax
w=d.grf(d)
v=d.gvK()
x.$1(new B.Du(w,v,0))
x=d.gHA()
r.a.toString
u=Math.exp(-x.b/200)
if(!r.Tz(D.uV)){r.a.toString
return}x=r.d
x.toString
t=x.A7(d.gvK())
x=r.d
x.sl(0,r.a5K(x.a,u))
x=r.d
x.toString
s=x.A7(d.gvK())
x=r.d
x.sl(0,r.Nc(x.a,s.aq(0,t)))
r.a.toString}},
aAM(){var x,w,v,u,t=this,s=t.w
s===$&&B.c()
s=s.r
if(!(s!=null&&s.a!=null)){t.x=null
s=t.r
if(s!=null)s.a.B(0,t.gNn())
t.r=null
s=t.w
s.sl(0,s.a)
return}s=t.d.a.R2().a
x=s[0]
s=s[1]
w=t.d.A7(new B.j(x,s))
s=t.d
s.toString
x=t.r
v=x.b
x=x.a
u=s.A7(v.M(0,x.gl(x))).aq(0,w)
x=t.d
x.sl(0,t.Nc(x.a,u))},
aBC(){this.D(new A.aXu())},
a3(){var x,w=this,v=null
w.ac()
x=w.a.ch
w.d=x
x.a6(0,w.gUE())
w.w=B.aU(C.u,v,v,v,1,v,w)},
ab(d){var x,w,v=this
v.ao(d)
x=v.a
if(x.ch!==d.ch){x=v.gUE()
v.d.B(0,x)
w=v.a.ch
v.d=w
w.a6(0,x)}},
k(){var x=this,w=x.w
w===$&&B.c()
w.k()
x.d.B(0,x.gUE())
x.a.toString
x.am7()},
n(d){var x,w,v=this,u=null,t=v.a
t.toString
x=v.d.a
w=new A.adT(t.r,v.e,C.q,!0,x,u)
return B.L7(C.eh,B.cz(C.aN,w,C.y,!1,u,u,u,u,u,u,u,u,u,u,u,u,v.gaBj(),v.gazj(),v.gaBn(),u,u,u,u,u,u,u),v.f,u,u,u,v.gazl(),u)}}
A.adT.prototype={
n(d){var x=this,w=B.ma(null,new B.fU(x.c,x.d),x.r,!0)
return B.j1(w,x.e,null)}}
A.a8Y.prototype={
A7(d){var x=this.a,w=new B.bx(new Float64Array(16))
if(w.yd(x)===0)B.Q(B.i5(x,"other","Matrix cannot be inverted"))
x=new B.cv(new Float64Array(3))
x.tU(d.a,d.b,0)
x=w.A9(x).a
return new B.j(x[0],x[1])}}
A.FH.prototype={
j(d){return"_GestureType."+this.b}}
A.W2.prototype={
pt(){this.qr()
this.pU()
this.rZ()},
k(){var x=this,w=x.a2$
if(w!=null)w.B(0,x.grV())
x.a2$=null
x.W()}}
A.tP.prototype={
F(){var x=null
return new A.UJ(new B.ah(x,y.z),A.bbX(x,8,1,16,x),A.bAU(),x,x,C.j)}}
A.UJ.prototype={
aAN(){var x=this,w=x.r,v=w.b
w=w.a
x.f.sl(0,v.M(0,w.gl(w)))
w=x.w
w===$&&B.c()
w=w.r
if(!(w!=null&&w.a!=null)){w=x.r
if(w!=null)w.a.B(0,x.gUz())
x.r=null
w=x.w
w.sl(0,w.a)}},
aBm(d){var x,w=this,v=w.w
v===$&&B.c()
x=v.Q
x===$&&B.c()
if(x===C.ak){v.tQ(0)
v=w.r
if(v!=null)v.a.B(0,w.gUz())
w.r=null
v=w.w
v.sl(0,v.a)}},
aBz(d){var x=this,w=x.f.A7(d.a.aq(0,B.dD(y.x.a($.R.G$.z.i(0,x.d).gJ()).rU(0,null),C.o)))
x.D(new A.b5g(x,x.e.aPW(w)))},
a3(){var x=null
this.ac()
this.w=B.aU(C.u,x,x,x,1,x,this)},
n(d){var x=null,w=B.t(d)
return B.bV(B.cx(x,x,!1,x,x,x,1,x,x,x,!1,x,x,x,x,x,!0,x,x,x,x,x,x,B.r(B.u(d,C.h,y.s).gbd(),x,x,x,x,x,x,x,x),x,x,x,1,x),w.ay.b,B.U(x,new B.d1(new A.b5h(this),x),C.e,D.wx,x,x,x,x,x,x,x,x,x,x),x,x,!1,x,x,x,B.b([this.gaQA(),this.gaLh()],y.p),x)},
gaQA(){var x=null,w=this.c
w.toString
return B.c3(B.t(w).ay.cy,!0,x,D.a55,x,x,new A.b5n(this),C.J,x,"Reset")},
gaLh(){var x=null,w=this.c
w.toString
return B.c3(B.t(w).ay.cy,!0,x,E.oK,x,x,new A.b5l(this),C.J,x,"Edit")},
k(){var x=this.w
x===$&&B.c()
x.k()
this.an2()}}
A.aac.prototype={
aC(d,e){this.b.ad(0,new A.aOu(this,d))},
uD(d){return d.b!==this.b}}
A.WJ.prototype={
pt(){this.qr()
this.pU()
this.rZ()},
k(){var x=this,w=x.a2$
if(w!=null)w.B(0,x.grV())
x.a2$=null
x.W()}}
A.XQ.prototype={
anb(d,e,f,g,h){var x,w,v,u,t,s=this,r=s.b,q=-r,p=r-s.c,o=Math.sqrt(3)/2*p
r=0+o
x=q+0.5*p
w=q+1.5*p
v=q+2*p
u=0-o
C.b.a5(s.d,B.b([new B.j(0,q),new B.j(r,x),new B.j(r,w),new B.j(r,w),new B.j(0,v),new B.j(0,v),new B.j(u,w),new B.j(u,w),new B.j(u,x)],y.g))
if(d!=null)C.b.a5(s.f,d)
else{t=s.a4g(null)
for(r=s.f;t!=null;){r.push(t)
t=s.a4g(t)}}},
goE(d){return new A.aOt(this.f)},
a4k(d){var x=this.a,w=-x
if(d<=0)w-=d
else x-=d
return new A.b0t(w,x)},
a4g(d){var x,w,v,u=this
if(d==null)return new A.hi(-u.a,0,D.i_)
x=d.a
w=u.a4k(x)
if(x>=u.a&&d.b>=w.b)return null
v=d.b
if(v>=w.b){++x
return new A.hi(x,u.a4k(x).a,D.i_)}return new A.hi(x,v+1,D.i_)},
guE(d){var x=this.b,w=this.a
return new B.K((w*2+1)*(Math.sqrt(3)/2*x)*2,2*(x+w*1.5*x))},
aPW(d){var x=this,w=x.guE(x),v=d.b-x.guE(x).b/2,u=x.b,t=new A.hi(C.d.dI((Math.sqrt(3)/3*(d.a-w.a/2)-0.3333333333333333*v)/u),C.d.dI(0.6666666666666666*v/u),D.i_)
w=D.Py.gab2().a
v=t.gab2().a
if(C.d.rt(Math.abs(w[0]-v[0])+Math.abs(w[1]-v[1])+Math.abs(w[2]-v[2]),2)>x.a)return null
return C.b.GF(x.f,new A.anG(t))},
afM(d,e){var x=this,w=Math.sqrt(3),v=x.b,u=d.a,t=Math.sqrt(3),s=d.b,r=x.d,q=B.aj(r).h("aC<1,j>"),p=B.aA(new B.aC(r,new A.anF(new B.t2(w*v*u+t/2*v*s+x.guE(x).a/2,1.5*v*s+x.guE(x).b/2,y.O)),q),!0,q.h("bO.E"))
return A.bBa(C.NU,p,B.bP(p.length,e,!1,y.G))},
aKE(d){var x=this
if(J.l(x.e,d))return x
return A.bbX(x.f,x.a,x.c,x.b,d)},
aKD(d,e){var x,w,v=this,u=new A.hi(d.a,d.b,e),t=v.f,s=C.b.PD(t,new A.anE(d))
if(J.l(v.rp(0,s),d)&&d.c.m(0,e))return v
x=B.hp(t,!0,y.X)
x[s]=u
w=v.e
if(d.m(0,w))w=u
return A.bbX(x,v.a,v.c,v.b,w)},
$iG:1}
A.aOt.prototype={
C(){var x,w=this,v=w.b
v=v==null?w.b=0:w.b=v+1
x=w.a
if(v>=x.length){w.c=null
return!1}w.c=x[v]
return!0},
gV(d){return this.c}}
A.b0t.prototype={}
A.hi.prototype={
j(d){return"BoardPoint("+this.a+", "+this.b+", "+this.c.j(0)+")"},
m(d,e){if(e==null)return!1
if(J.al(e)!==B.Y(this))return!1
return e instanceof A.hi&&e.a===this.a&&e.b===this.b},
gL(d){return B.ad(this.a,this.b,C.a,C.a,C.a,C.a,C.a,C.a,C.a,C.a,C.a,C.a,C.a,C.a,C.a,C.a,C.a,C.a,C.a,C.a)},
gab2(){var x=this.a,w=this.b,v=new B.cv(new Float64Array(3))
v.tU(x,w,-x-w)
return v}}
A.aad.prototype={}
A.YW.prototype={
n(d){var x=this.c,w=B.h(x).h("lB<1,zG>")
return B.aw(B.aA(new B.lB(x,new A.ap2(this),w),!0,w.h("G.E")),C.l,null,C.a0,C.i,null)}}
A.zG.prototype={
n(d){var x=null,w=!this.d?x:D.a4l
return B.U(x,B.bjA(!1,w,C.e,C.Qp,0,2,!0,this.c,x,4,x,8,x,4,x,x,new A.aQg(this),C.dN,x,x),C.e,x,x,x,x,60,x,x,D.a1C,x,x,60)}}
A.a12.prototype={
n(d){var x=null,w=B.dU([C.n,C.jZ,C.ny,C.wE,D.wx],y.G),v=this.c
return B.a9(B.b([B.r(""+v.a+", "+v.b,x,x,x,x,C.mn,C.ud,x,x),new A.YW(w,v.c,this.d,x)],y.p),C.aH,x,C.k,C.i,C.m)}}
A.a61.prototype={}
var z=a.updateTypes(["~()","~(Du)","M(hi)","~(Nm)","~(Dt)","~(kH)","~(jp)","~(hi?)","zG(k)"])
A.aXu.prototype={
$0(){},
$S:0}
A.b5g.prototype={
$0(){var x=this.a
x.e=x.e.aKE(this.b)},
$S:0}
A.b5h.prototype={
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
return B.j1(B.dE(B.cz(C.aN,new A.KA(new B.Z(t,s,t,s),B.bdO(B.hj(u,u,u,new A.aac(r.e,u),x)),0.01,r.gaBl(),r.f,r.d),C.y,!1,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,r.gaBy(),u,u,u),C.ag,u,u,u,u),C.q,u)},
$S:772}
A.b5n.prototype={
$0(){var x=this.a
x.D(new A.b5m(x))},
$S:0}
A.b5m.prototype={
$0(){var x,w,v=this.a,u=v.w
u===$&&B.c()
u.sl(0,u.a)
u=v.f.a
x=v.x
w=v.w
v.r=new B.F(w,new B.oN(u,x),y.d.h("F<a_.T>"))
w.e=C.i6
w.a6(0,v.gUz())
v.w.oW(0)},
$S:0}
A.b5l.prototype={
$0(){var x,w=this.a
if(w.e.e==null)return
x=w.c
x.toString
F.bfw(new A.b5k(w),x,y.l)},
$S:0}
A.b5k.prototype={
$1(d){var x=null,w=this.a,v=w.e.e
v.toString
return B.U(x,new A.a12(v,new A.b5j(w,d),x),C.e,x,x,x,x,150,x,x,C.i8,x,x,1/0)},
$S:773}
A.b5j.prototype={
$1(d){var x=this.a
x.D(new A.b5i(x,d,this.b))},
$S:774}
A.b5i.prototype={
$0(){var x=this.a,w=x.e,v=w.e
v.toString
x.e=w.aKD(v,this.b)
B.bA(this.c,!1).tI(null)},
$S:0}
A.aOu.prototype={
$1(d){var x=d.c,w=this.a.b,v=w.afM(d,B.W(C.d.dI(255*(J.l(w.e,d)?0.7:1)),x.gl(x)>>>16&255,x.gl(x)>>>8&255,x.gl(x)&255))
x=$.aQ()?B.aS():new B.aP(new B.aR())
this.b.Bz(v,C.Pw,x)},
$S:z+7}
A.anG.prototype={
$1(d){var x=this.a
return d.a===x.a&&d.b===x.b},
$S:z+2}
A.anF.prototype={
$1(d){var x=this.a
return new B.j(d.a+x.a,d.b+x.b)},
$S:254}
A.anE.prototype={
$1(d){var x=this.a
return d.a===x.a&&d.b===x.b},
$S:z+2}
A.ap2.prototype={
$1(d){var x=this.a
return new A.zG(d,d.m(0,x.d),new A.ap1(x,d),null)},
$S:z+8}
A.ap1.prototype={
$0(){this.a.e.$1(this.b)},
$S:14}
A.aQg.prototype={
$0(){this.a.e.$0()},
$S:0};(function aliases(){var x=A.W2.prototype
x.am7=x.k
x=A.WJ.prototype
x.an2=x.k})();(function installTearOffs(){var x=a._instance_1u,w=a._instance_0u
var v
x(v=A.Rx.prototype,"gazj","azk",1)
x(v,"gaBn","aBo",3)
x(v,"gaBj","aBk",4)
x(v,"gazl","azm",5)
w(v,"gNn","aAM",0)
w(v,"gUE","aBC",0)
w(v=A.UJ.prototype,"gUz","aAN",0)
x(v,"gaBl","aBm",1)
x(v,"gaBy","aBz",6)})();(function inheritance(){var x=a.mixinHard,w=a.mixin,v=a.inherit,u=a.inheritMany
v(A.Iv,B.hK)
u(B.a2,[A.a8r,A.aad,A.b0t,A.hi,A.a61])
u(B.y,[A.KA,A.tP])
u(B.D,[A.W2,A.WJ])
v(A.Rx,A.W2)
u(B.hB,[A.aXu,A.b5g,A.b5n,A.b5m,A.b5l,A.b5i,A.ap1,A.aQg])
u(B.q,[A.adT,A.YW,A.zG,A.a12])
v(A.a8Y,B.c0)
v(A.FH,B.pP)
v(A.UJ,A.WJ)
v(A.b5h,B.i9)
u(B.d4,[A.b5k,A.b5j,A.aOu,A.anG,A.anF,A.anE,A.ap2])
v(A.aac,B.od)
v(A.XQ,A.aad)
v(A.aOt,B.KF)
x(A.W2,B.cu)
x(A.WJ,B.cu)
w(A.aad,B.jf)})()
B.b0(b.typeUniverse,JSON.parse('{"Iv":{"hK":["tC"],"fu":["tC"]},"KA":{"y":[],"d":[]},"Rx":{"D":["KA"]},"adT":{"q":[],"d":[]},"a8Y":{"c0":["bx"],"ae":[]},"FH":{"V":[]},"tP":{"y":[],"d":[]},"UJ":{"D":["tP"]},"aac":{"ae":[]},"XQ":{"jf":["hi?"],"G":["hi?"],"jf.E":"hi?"},"zG":{"q":[],"d":[]},"YW":{"q":[],"d":[]},"a12":{"q":[],"d":[]}}'))
var y=(function rtii(){var x=B.a5
return{X:x("hi"),G:x("k"),s:x("B"),h:x("v<hi>"),g:x("v<j>"),p:x("v<d>"),z:x("ah<D<y>>"),d:x("oN"),O:x("t2<z>"),C:x("t5"),x:x("A"),U:x("tC"),L:x("a8<j>"),l:x("d")}})();(function constants(){D.i_=new B.k(4291677645)
D.Py=new A.hi(0,0,D.i_)
D.wx=new B.k(4280756007)
D.a1C=new B.Z(2,0,2,0)
D.a30=new B.aG(57686,"MaterialIcons",null,!1)
D.a4l=new B.bF(D.a30,null,C.n,null,null)
D.a3G=new B.aG(58659,"MaterialIcons",null,!1)
D.a55=new B.bF(D.a3G,null,null,null,null)
D.mC=new A.FH(0,"pan")
D.uV=new A.FH(1,"scale")
D.az2=new A.FH(2,"rotate")})();(function lazyInitializers(){var x=a.lazyFinal
x($,"bO0","br2",()=>B.b([B.b3(A.bc6(B.b2()),"Triangles"),B.b3(A.bc6(B.b2()),"TrianglesStrip"),B.b3(A.bc6(B.b2()),"TriangleFan")],B.a5("v<m>")))})()}
$__dart_deferred_initializers__["9XWa8IXzKmQPE0dFwa5HenyuAAM="] = $__dart_deferred_initializers__.current
