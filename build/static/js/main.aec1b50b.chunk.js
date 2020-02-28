(this.webpackJsonpwrapsnshakes=this.webpackJsonpwrapsnshakes||[]).push([[0],{13:function(n,e,t){n.exports=t(22)},18:function(n,e,t){},19:function(n,e,t){},22:function(n,e,t){"use strict";t.r(e);var i=t(0),r=t.n(i),o=t(8),a=t.n(o),c=(t(18),t(1)),u=t(4),l=t(2);t(19);function p(){var n=Object(c.a)(["\n  box-shadow: 0 2px 40px 4px rgba(0, 0, 0, 0.5);\n  display: flex;\n  align-items: center;\n  justify-content: ",";\n  /*width: 80%;*/\n  width: 1149px;\n  flex-direction: ",";\n  border-radius: 62px;\n  padding: 20px;\n  background-image: ",";\n  background-color: ",";\n  background-size: 150%;\n  background-position: center;\n  margin: 32px 0;\n  min-height: 400px;\n  color: ",";\n  max-width: 100%;\n  h1 {\n    position: relative;\n    font-size: 280px;\n    font-style: italic;\n    animation: "," 1s ease;\n    width: 60%;\n    margin: 0;\n    font-weight: 100;\n    text-align: center;\n  }\n  h2 {\n    font-size: 124px;\n    font-weight: 100;\n    margin: 0;\n    @media (max-width: 475px) {\n      font-size: 80px;\n    }\n  }\n  h3 {\n    font-weight: 100;\n    font-size: 60px;\n    margin: 40px 0;\n  }\n  @media (max-width: 475px) {\n    flex-direction: column;\n  }\n"]);return p=function(){return n},n}function s(){var n=Object(c.a)(["\nfrom {\n    opacity: 0;\n    top: 10px;\n  }\n  to {\n    opacity: 1;\n    top: 0px;\n  }\n"]);return s=function(){return n},n}var d=Object(l.c)(s()),f=l.b.div(p(),(function(n){return n.spacing?n.spacing:"center"}),(function(n){return n.direction?n.direction:"column"}),(function(n){return"url("+n.bgImage+")"}),(function(n){return n.bgColor?n.bgColor:"#D8D8D8"}),(function(n){return n.color?n.color:"white"}),d),m=function(n){var e=n.title,t=n.bgImage,i=n.children,o=n.color,a=n.bgColor,c=n.direction,u=n.spacing;return r.a.createElement(f,{bgImage:t,bgColor:a,color:o,direction:c,spacing:u},e&&r.a.createElement("h1",null,e),i)};function g(){var n=Object(c.a)(["\n  background-color: white;\n  height: 4px;\n  width: ",";\n  transform: ",";\n  transition: all 0.2s ease;\n  border-radius: 50px;\n\n  &:before {\n    display: block;\n    content: '';\n    position: relative;\n    top: ",";\n    background-color: white;\n    height: 4px;\n    width: 20px;\n    margin: 0 auto;\n    transform: ",";\n    transition: all 0.2s ease;\n    border-radius: 50px;\n  }\n  &:after {\n    display: block;\n    content: '';\n    position: relative;\n    top: 5px;\n    background-color: white;\n    height: 4px;\n    width: 20px;\n    margin: 0 auto;\n    opacity: ",";\n    transition: all 0.2s ease;\n    border-radius: 50px;\n  }\n"]);return g=function(){return n},n}function h(){var n=Object(c.a)(["\n  position: ",";\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  height: 30px;\n  width: 40px;\n  cursor: pointer;\n  background-color: #212121;\n  margin: 10px 16px;\n  border-radius: 50px;\n  height: 50px;\n  width: 50px;\n  box-shadow: 0 2px 4px 0 rgba(0, 0, 0, 0.5);\n  z-index: 101;\n\n  @media (max-width: 475px) {\n    position: fixed;\n    right: 0px;\n  }\n"]);return h=function(){return n},n}var b=function(n){var e=n.setOpen,t=n.open;return r.a.createElement(x,{open:t,onClick:function(){return e(!t)}},r.a.createElement(w,{open:t}))},x=l.b.div(h(),(function(n){return n.open?"fixed":"relative"})),w=l.b.div(g(),(function(n){return n.open?"20px":"28px"}),(function(n){return n.open?"rotate(45deg)":"rotate(0deg)"}),(function(n){return n.open?0:"-10px"}),(function(n){return n.open?"rotate(90deg)":"rotate(0deg)"}),(function(n){return n.open?0:1}));function v(){var n=Object(c.a)(["\n  position: ",";\n  left: ",";\n  right: ",";\n  transition: all 1s ease;\n"]);return v=function(){return n},n}l.b.div(v(),(function(n){return n.active?"relative":"absolute"}),(function(n){return n.left?"-1000px":"initial"}),(function(n){return n.right?"-1000px":"initial"}));function E(){var n=Object(c.a)(["\n  height: 26px;\n  width: 26px;\n  border: 3px solid #292929;\n  border-radius: 50%;\n  background-color: ",";\n"]);return E=function(){return n},n}l.b.div(E(),(function(n){return n.current?"#292929":"transparent"}));function j(){var n=Object(c.a)(["\n  font-size: 16px;\n  color: #292929;\n"]);return j=function(){return n},n}function y(){var n=Object(c.a)(["\n  font-style: italic;\n  font-size: 24px;\n  color: #292929;\n"]);return y=function(){return n},n}function k(){var n=Object(c.a)(["\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  overflow: hidden;\n  flex-direction: row;\n  width: 100%;\n  margin: 40px 0;\n"]);return k=function(){return n},n}function O(){var n=Object(c.a)(["\n  position: relative;\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  overflow: hidden;\n  flex-direction: column;\n  width: 50%;\n"]);return O=function(){return n},n}l.b.div(O()),l.b.div(k()),l.b.p(y()),l.b.p(j());function z(){var n=Object(c.a)(["\n  width: 100%;\n  @media (max-width: 1100px) {\n    padding: 20px;\n  }\n"]);return z=function(){return n},n}function C(){var n=Object(c.a)(["\n  font-size: 159px;\n  font-style: italic;\n  text-align: center;\n  @media (max-width: 475px) {\n    font-size: 100px;\n  }\n"]);return C=function(){return n},n}function I(){var n=Object(c.a)(["width: 100%;"]);return I=function(){return n},n}function S(){var n=Object(c.a)(["\n  font-family: Roboto;\n  font-size: 32px;\n  font-weight: 300;\n  text-align: ",";\n  font-style: ",";\n  @media (max-width: 475px) {\n    font-size: 24px;\n    padding: 24px 0;\n  }\n  "]);return S=function(){return n},n}function R(){var n=Object(c.a)(["\n  ",";\n"]);return R=function(){return n},n}function A(){var n=Object(c.a)(["\n  border-radius: 43.5px;\n  background-color: #212121;\n  box-shadow: 0 2px 4px 0 rgba(0, 0, 0, 0.5);\n  color: #ffffff;\n  font-family: Roboto;\n  font-size: 32px;\n  font-weight: bold;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  padding: 8px 16px;\n  margin: 0 16px;\n"]);return A=function(){return n},n}function D(){var n=Object(c.a)(["\n  @media (max-width: 475px) {\n    width: 30px;\n    padding: 20px 0;\n  }\n"]);return D=function(){return n},n}function T(){var n=Object(c.a)(["\n  display: flex;\n  justify-content: ",";\n\n  align-items: center;\n  width: ",";\n  height: ",";\n  flex-direction: ",";\n  text-align: ",";\n  z-index: ",";\n  position: relative;\n  @media (max-width: 475px) {\n    flex-direction: column;\n    width: 100%;\n    position: relative;\n  }\n"]);return T=function(){return n},n}function L(){var n=Object(c.a)(["\n  display: flex;\n  justify-content: ",";\n  align-items: center;\n  flex-direction: column;\n  width: ",";\n  height: 100%;\n  @media (max-width: 475px) {\n    width: 100%;\n  }\n"]);return L=function(){return n},n}function F(){var n=Object(c.a)(["\n    display: flex;\n    justify-content: ",";\n    align-items: ",";\n    flex-direction: ",";\n    width: ",";\n    max-width: 100%;\n    height: ",";\n    padding: ",";\n    margin: ",";\n    background-color: ",";\n    background-image: url(",");\n    background-position: repeat;\n    color: ",";\n    border-radius: ",";\n    box-shadow: ","\n"]);return F=function(){return n},n}function M(){var n=Object(c.a)(["\n  ",";\n  ",";\n  @media (max-width: 475px) {\n    position: relative;\n    flex-direction: column;\n    height: 100%;\n    margin: 20px 0;\n  }\n"]);return M=function(){return n},n}var N=l.b.div(M(),(function(n){var e=n.spacing,t=n.position,i=n.direction,r=n.width,o=n.height,a=n.padding,c=n.margin,u=n.bgColor,p=n.color,s=n.bgImage,d=n.borderRadius,f=n.boxShadow;return Object(l.a)(F(),e||"center",t||"center",i||"column",r||"100%",o||"100%",a+"px"||!1,c||"0px",u||"#ffffff9e",s||"none",p||"#fff",d||"0",f||"none")}),""),K=l.b.div(L(),(function(n){return n.spacing?n.spacing:"center"}),(function(n){return n.width?n.width+"%":"100%"})),U=l.b.div(T(),(function(n){return n.spacing?n.spacing:" space-between"}),(function(n){return n.width?n.width+"%":"100%"}),(function(n){return n.height?n.height:"100%"}),(function(n){return n.direction?n.direction:"column"}),(function(n){return n.alignText?n.alignText:"left"}),(function(n){return n.index?n.index:"0"})),G=l.b.img(D()),H=(l.b.a(A()),l.b.p(R(),(function(n){var e=n.fontStyle,t=n.textAlign;return Object(l.a)(S(),t||"left",e||"italic")}))),W=(l.b.img(I()),l.b.h1(C())),B=l.b.div(z()),J=t(3);function V(){var n=Object(c.a)(["\n  position: relative;\n  display: flex;\n  justify-content: flex-end;\n  align-items: center;\n  height: 60px;\n  /*width: 80%;*/\n  width: 1149px;\n  max-width: 100%;\n  z-index: 101;\n  margin: 24px 0;\n"]);return V=function(){return n},n}function Y(){var n=Object(c.a)(["\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  width: 100%;\n  @media (max-width: 475px) {\n    position: absolute;\n    bottom: -100px;\n  }\n"]);return Y=function(){return n},n}function q(){var n=Object(c.a)(["\n  position: relative;\n  bottom: ",";\n  left: ",";\n  right: ",";\n  object-fit: cover;\n  width: ",";\n  z-index: 1;\n  @media (max-width: 1300px) {\n    display: ",";\n  }\n  @media (max-width: 475px) {\n    bottom: -125px;\n    width: 300px;\n  }\n"]);return q=function(){return n},n}function P(){var n=Object(c.a)(["\n  font-weight: 200;\n  font-size: 32px;\n  z-index: 1;\n  font-style: italic;\n"]);return P=function(){return n},n}function X(){var n=Object(c.a)(["\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  flex-direction: column;\n  margin-bottom: 100px;\n  text-align: center;\n"]);return X=function(){return n},n}function Z(){var n=Object(c.a)(["\n  font-weight: 100;\n  font-size: 200px;\n  z-index: 1;\n  margin-bottom: 0;\n  @media (max-width: 662px) {\n    font-size: 100px;\n  }\n"]);return Z=function(){return n},n}function _(){var n=Object(c.a)(["\n  position: relative;\n  display: flex;\n  justify-content: space-evenly;\n  align-items: center;\n  flex-direction: column;\n  ",';\n  background-size: cover;\n  background-repeat: no-repeat;\n  background-position: bottom;\n  width: 100%;\n  min-height: 70vh;\n  margin-bottom: 200px;\n  &:before {\n    content: " ";\n    display: flex;\n    position: absolute;\n    width: calc(100% + 1000px);\n    height: 140vh;\n    bottom: 0px;\n    background-color: #dd99bb;\n    border-radius: 50%;\n    background-image: ',';\n    background-size: cover;\n    background-position: center;\n  }\n  &:after {\n    content: " ";\n    display: -webkit-box;\n    display: -webkit-flex;\n    display: -ms-flexbox;\n    display: flex;\n    position: absolute;\n    width: calc(100% + 1000px);\n    height: 140vh;\n    bottom: 0px;\n    background-color: #00000073;\n    border-radius: 50%;\n    background-size: contain;\n    background-position: bottom;\n    z-index: 0;\n  }\n  @media (max-height: 850px) {\n    &:after,\n    &:before {\n      height: 180vh;\n    }\n  }\n  @media (max-height: 670px) {\n    &:after,\n    &:before {\n      height: 230vh;\n    }\n  }\n']);return _=function(){return n},n}var $=function(n){var e=n.openMenu,t=n.setOpenMenu;return r.a.createElement(Q,{bgImage:J.pages.landing.bgImage},r.a.createElement(an,null,r.a.createElement(b,{open:e,setOpen:t})),r.a.createElement(en,null,r.a.createElement(nn,null,J.pages.landing.title),r.a.createElement(tn,null,"Absoluut smakelijke wraps en heerlijke bijgerechten ge\xefnspireerd door het oude Midden-Oosten. Ervaar deze smaakcombo bij Rotterdam Markthal!")),r.a.createElement(on,null,r.a.createElement(rn,{src:J.pages.landing.ingredients[1],left:-60,bottom:-100,width:200}),r.a.createElement(rn,{src:J.pages.landing.ingredients[2],left:-60,bottom:-150,width:250}),r.a.createElement(rn,{src:J.pages.landing.ingredients[0],centerImage:!0}),r.a.createElement(rn,{src:J.pages.landing.ingredients[3],right:-60,bottom:-150,width:250}),r.a.createElement(rn,{src:J.pages.landing.ingredients[4],right:-60,bottom:-100,width:200})))},Q=l.b.div(_(),"",(function(n){return"url(".concat(n.bgImage,")")})),nn=l.b.h1(Z()),en=l.b.div(X()),tn=l.b.p(P()),rn=l.b.img(q(),(function(n){return n.bottom?n.bottom+"px":"-200px"}),(function(n){return n.left?n.left+"px":"initial"}),(function(n){return n.right?n.right+"px":"initial"}),(function(n){return n.width?n.width+"px":"400px"}),(function(n){return n.centerImage?"initial":"none"})),on=l.b.div(Y()),an=l.b.nav(V());function cn(){var n=Object(c.a)(["text-align: center;"]);return cn=function(){return n},n}var un=function(n){var e=n.bgColor,t=n.title,i=n.children,o=n.id;return r.a.createElement(N,{bgColor:"transparent",width:"1149px",height:"80vh",id:o},r.a.createElement(m,{color:"#fff",direction:"row",spacing:"space-between",bgColor:e},r.a.createElement(U,{width:40,spacing:"center"},r.a.createElement(ln,null,t)),r.a.createElement(G,{src:J.general.icons.spacerWhite}),r.a.createElement(U,{width:50,spacing:"center"},r.a.createElement(H,null,'"'.concat(i,'"')))))},ln=l.b.h2(cn());function pn(){var n=Object(c.a)(["width: 200px;"]);return pn=function(){return n},n}function sn(){var n=Object(c.a)(["\n  display: flex;\n  justify-content: ",";\n  align-items: center;\n  width: ",";\n  background-color: white;\n  margin: 32px;\n  padding: 64px;\n  border-radius: 17px;\n"]);return sn=function(){return n},n}function dn(){var n=Object(c.a)(["\n  transform: rotate(-45deg);\n  position: absolute;\n  left: -150px;\n  @media (max-width: 1100px) {\n    opacity: 0.3;\n    left: -200px;\n  }\n"]);return dn=function(){return n},n}function fn(){var n=Object(c.a)(["\n  opacity: 0.51;\n  color: #292929;\n  font-family: Roboto;\n  font-size: 50px;\n  font-style: italic;\n  font-weight: 300;\n  text-align: right;\n  width: 100%;\n  margin-bottom: 0;\n  @media (max-width: 475px) {\n    padding: 20px;\n  }\n"]);return fn=function(){return n},n}function mn(){var n=Object(c.a)(["\n  font-size: 159px;\n  font-style: italic;\n  position: relative;\n  z-index: 2;\n  @media (max-width: 1100px) {\n    width: 100%;\n    text-align: right;\n    padding: 20px;\n  }\n  @media (max-width: 475px) {\n    margin: 0;\n  }\n"]);return mn=function(){return n},n}var gn=function(){return r.a.createElement(N,{bgColor:"rgba(247,244,244,0.49)",height:"100vh",id:"ourFood",padding:"20"},r.a.createElement(xn,null,r.a.createElement(wn,{spacing:"flex-end"},r.a.createElement(vn,{src:J.pages.food.second})),r.a.createElement(U,{direction:"row"},r.a.createElement(wn,null,r.a.createElement(vn,{src:J.pages.food.first})),r.a.createElement(wn,null,r.a.createElement(vn,{src:J.pages.food.third})))),r.a.createElement(N,{bgColor:"transparent",width:"1149px",color:"#292929"},r.a.createElement(hn,null,"Onze Eten"),r.a.createElement(N,{bgColor:"transparent",direction:"row",color:"#292929"},r.a.createElement(U,{width:50,spacing:"flex-end",index:1}),r.a.createElement(U,{width:50,direction:"column",spacing:"flex-start",alignText:"right",index:2},r.a.createElement(B,null,r.a.createElement(bn,null,"Eten met een Twist"),r.a.createElement(H,null,"\u201cDe Libanese keuken is een keuken van de zon en een keuken uit het hart\u201d."),r.a.createElement(H,null,"De kleuren weerspiegelen de 1001 zonnige landschappen en de diversiteit roept de overvloedige Libanese vrijgevigheid en gastvrijheid op."))))))},hn=l.b.h1(mn()),bn=l.b.h4(fn()),xn=l.b.div(dn()),wn=l.b.div(sn(),(function(n){return n.spacing?n.spacing:"center"}),(function(n){return n.width?n.width:"initial"})),vn=l.b.img(pn()),En="nl-NL",jn="EUR",yn=function(n){return new Intl.NumberFormat(En,{style:"currency",currency:jn}).format(n)};function kn(){var n=Object(c.a)(["\n  margin: 150px 0;\n  z-index: 2;\n  @media (max-width: 475px) {\n    display: none;\n  }\n"]);return kn=function(){return n},n}function On(){var n=Object(c.a)(["\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  width: 100%;\n  height: 100%;\n  padding-right: 32px;\n"]);return On=function(){return n},n}function zn(){var n=Object(c.a)(["\n  font-family: Roboto;\n  font-size: 18px;\n  margin: 16px 0;\n"]);return zn=function(){return n},n}function Cn(){var n=Object(c.a)(["\n  position: relative;\n  z-index: 2;\n  border-bottom: 2px solid #424242;\n  width: 100%;\n  margin: 24px 16px;\n  padding: 24px 0;\n"]);return Cn=function(){return n},n}function In(){var n=Object(c.a)(["\n  margin: 16px 0;\n  @media (max-width: 475px) {\n    font-size: 32px;\n  }\n"]);return In=function(){return n},n}function Sn(){var n=Object(c.a)(["\n  font-size: 124px;\n  font-style: italic;\n  width: 100%;\n  text-align: left;\n  margin-bottom: 0;\n  @media (max-width: 475px) {\n    margin: 0;\n  }\n"]);return Sn=function(){return n},n}function Rn(){var n=Object(c.a)(["\n  position: absolute;\n  right: 0;\n  z-index: 1;\n  opacity: 0.2;\n  width: 60%;\n\n  @media (max-width: 1300px) {\n    opacity: 0.3;\n  }\n"]);return Rn=function(){return n},n}var An=function(){return r.a.createElement(N,{color:"#292929",width:"1149px",margin:"300px 0 0 0",id:"ourMenu"},r.a.createElement(B,null,r.a.createElement(Tn,null,J.pages.menu.subTitle),r.a.createElement(N,{color:"#292929",direction:"row",spacing:"space-between",position:"flex-start"},r.a.createElement(K,{width:40},J.pages.menu.menuItems.map((function(n,e){return r.a.createElement(Fn,{key:e},r.a.createElement(Ln,null,n.title.toUpperCase()),n.products.map((function(n,e){return r.a.createElement(Nn,{key:e},r.a.createElement(Mn,null,n.product.toUpperCase()),r.a.createElement(Mn,null,yn(n.price)))})))}))),r.a.createElement(K,{width:40},J.pages.menu.menuItems2.map((function(n,e){return r.a.createElement(Fn,{key:e},r.a.createElement(Ln,null,n.title.toUpperCase()),n.products.map((function(n,e){return r.a.createElement(Nn,{key:e},r.a.createElement(Mn,null,n.product.toUpperCase()),r.a.createElement(Mn,null,yn(n.price)))})))})),r.a.createElement(Kn,{src:"/assets/images/logo512.png"})))),r.a.createElement(Dn,{src:"/assets/images/veggies.png"}))},Dn=l.b.img(Rn()),Tn=l.b.h1(Sn()),Ln=l.b.h3(In()),Fn=l.b.ul(Cn()),Mn=l.b.li(zn()),Nn=l.b.div(On()),Kn=l.b.img(kn());function Un(){var n=Object(c.a)(["\n  margin: 50px 0;\n  @media (max-width: 475px) {\n    margin: 25px 0;\n    width: 100px;\n  }\n"]);return Un=function(){return n},n}function Gn(){var n=Object(c.a)(["\n  display: flex;\n  align-items: center;\n  justify-content: space-around;\n  width: 100%;\n  flex-direction: row;\n"]);return Gn=function(){return n},n}function Hn(){var n=Object(c.a)(["\n  display: flex;\n  justify-content: ",";\n\n  align-items: center;\n  width: ",";\n  height: ",";\n  flex-direction: ",";\n  text-align: ",";\n  z-index: ",";\n  position: relative;\n  @media (max-width: 475px) {\n    width: 100%;\n    position: relative;\n  }\n"]);return Hn=function(){return n},n}l.b.div(Hn(),(function(n){return n.spacing?n.spacing:" space-between"}),(function(n){return n.width?n.width+"%":"100%"}),(function(n){return n.height?n.height:"100%"}),(function(n){return n.direction?n.direction:"column"}),(function(n){return n.alignText?n.alignText:"left"}),(function(n){return n.index?n.index:"0"})),l.b.div(Gn()),l.b.img(Un());function Wn(){var n=Object(c.a)(["\n  font-family: Roboto;\n  font-size: 16px;\n  font-style: italic;\n  font-weight: bold;\n"]);return Wn=function(){return n},n}function Bn(){var n=Object(c.a)(["\n  font-family: Roboto;\n  font-size: 16px;\n  font-style: italic;\n  line-height: 42px;\n  text-align: center;\n  width: 100%;\n"]);return Bn=function(){return n},n}function Jn(){var n=Object(c.a)(["\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  flex-direction: column;\n  width: 33%;\n  @media (max-width: 475px) {\n    width: 100%;\n  }\n"]);return Jn=function(){return n},n}function Vn(){var n=Object(c.a)(["\n  font-family: Roboto;\n  font-size: 24px;\n  font-style: italic;\n  font-weight: 300;\n  a {\n    color: #292929;\n  }\n  @media (max-width: 475px) {\n    display: flex;\n    flex-direction: column;\n  }\n"]);return Vn=function(){return n},n}function Yn(){var n=Object(c.a)(["\n  font-family: Roboto;\n  font-size: 24px;\n  font-style: italic;\n  font-weight: bold;\n"]);return Yn=function(){return n},n}function qn(){var n=Object(c.a)(["\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  width: 100%;\n  margin: 48px 0;\n  @media (max-width: 475px) {\n    display: flex;\n    flex-direction: column;\n  }\n"]);return qn=function(){return n},n}function Pn(){var n=Object(c.a)(["\n  overflow: hidden;\n  background: none !important;\n  height: 500px;\n  width: 600px;\n"]);return Pn=function(){return n},n}function Xn(){var n=Object(c.a)(["\n  position: relative;\n  text-align: right;\n  height: 500px;\n  width: 600px;\n"]);return Xn=function(){return n},n}var Zn=function(){return r.a.createElement(N,{bgColor:"rgba(247,244,244,0.49)",id:"contact"},r.a.createElement(N,{bgColor:"transparent",width:"1149px",color:"#292929"},r.a.createElement(B,null,r.a.createElement(W,null,J.pages.contact.title),r.a.createElement(N,{bgColor:"transparent",color:"#292929",margin:"48px 0"},r.a.createElement(ne,null,J.pages.contact.email.title),r.a.createElement(ee,null,J.pages.contact.email.support.title,r.a.createElement("a",{href:"mailto:"+J.pages.contact.email.support.email},J.pages.contact.email.support.email)),r.a.createElement(ee,null,J.pages.contact.email.work.title,r.a.createElement("a",{href:"mailto:"+J.pages.contact.email.work.email},J.pages.contact.email.work.email)),r.a.createElement(ee,null,J.pages.contact.email.info.title,r.a.createElement("a",{href:"mailto:"+J.pages.contact.email.info.email},J.pages.contact.email.info.email))),r.a.createElement(N,{bgColor:"transparent",color:"#292929",margin:"48px 0"},r.a.createElement(_n,null,r.a.createElement($n,null,r.a.createElement("iframe",{width:"600",height:"500",id:"gmap_canvas",src:"https://maps.google.com/maps?q=Rotterdam%20markthal&t=&z=13&ie=UTF8&iwloc=&output=embed",frameborder:"0",scrolling:"no",marginheight:"0",marginwidth:"0"}),r.a.createElement("a",{href:"https://www.embedgooglemap.net"},"embedgooglemap.net")))),r.a.createElement(Qn,null,r.a.createElement(te,null,J.pages.contact.adres.map((function(n){return r.a.createElement(ie,null,n.content)}))),r.a.createElement(te,null,J.pages.contact.businessInfo.map((function(n){return r.a.createElement(ie,null,n.content)}))),r.a.createElement(te,null,J.pages.contact.social.map((function(n){return r.a.createElement(ie,null,n.content)}))))),r.a.createElement(re,null,J.copywright)))},_n=l.b.div(Xn()),$n=l.b.div(Pn()),Qn=l.b.div(qn()),ne=l.b.p(Yn()),ee=l.b.p(Vn()),te=l.b.ul(Jn()),ie=l.b.li(Bn()),re=l.b.p(Wn());function oe(){var n=Object(c.a)(["\n  display: ",";\n  justify-content: center;\n  align-items: center;\n  flex-direction: column;\n  width: 100%;\n  height: 100%;\n  position: fixed;\n  top: 0;\n  left: 0;\n  background-color: #00000094;\n  z-index: 100;\n"]);return oe=function(){return n},n}function ae(){var n=Object(c.a)(["\n  margin: 32px 0;\n  color: white;\n  text-decoration: none;\n"]);return ae=function(){return n},n}var ce=function(n){var e=n.openMenu,t=n.setOpenMenu;return r.a.createElement(le,{show:e},r.a.createElement(ue,{href:"#aboutUs",onClick:function(){return t(!1)}},"Over ons"),r.a.createElement(ue,{href:"#ourFood",onClick:function(){return t(!1)}},"Onze Eten"),r.a.createElement(ue,{href:"#ourMenu",onClick:function(){return t(!1)}},"Onze Menu"),r.a.createElement(ue,{href:"#contact",onClick:function(){return t(!1)}},"Contact ons"))},ue=l.b.a(ae()),le=l.b.div(oe(),(function(n){return n.show?"flex":"none"}));function pe(){var n=Object(c.a)(["\n  margin: 150px 0;\n  z-index: 2;\n  width: 100%;\n  @media (max-width: 475px) {\n    display: none;\n  }\n"]);return pe=function(){return n},n}function se(){var n=Object(c.a)(["\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  width: 100%;\n  height: 100%;\n  padding-right: 32px;\n"]);return se=function(){return n},n}function de(){var n=Object(c.a)(["\n  font-family: Roboto;\n  font-size: 12px;\n  margin: 16px 0;\n"]);return de=function(){return n},n}function fe(){var n=Object(c.a)(["\n  font-family: Roboto;\n  font-size: 18px;\n  margin: 16px 0;\n"]);return fe=function(){return n},n}function me(){var n=Object(c.a)(["\n  font-family: Roboto;\n  font-size: 18px;\n  margin: 16px 0;\n"]);return me=function(){return n},n}function ge(){var n=Object(c.a)(["\n  position: relative;\n  z-index: 2;\n  border-bottom: 2px solid #424242;\n  width: 100%;\n  margin: 24px 16px;\n  padding: 24px 0;\n"]);return ge=function(){return n},n}function he(){var n=Object(c.a)(["\n  margin: 16px 0;\n  font-size: 36px;\n  @media (max-width: 475px) {\n    font-size: 32px;\n  }\n"]);return he=function(){return n},n}function be(){var n=Object(c.a)(["\n  font-size: 124px;\n  font-style: italic;\n  width: 100%;\n  text-align: center;\n  margin-bottom: 0;\n  @media (max-width: 475px) {\n    margin: 0;\n  }\n"]);return be=function(){return n},n}l.b.h1(be()),l.b.h3(he()),l.b.ul(ge()),l.b.li(me()),l.b.p(fe()),l.b.p(de()),l.b.div(se()),l.b.img(pe());function xe(){var n=Object(c.a)(["\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  flex-direction: column;\n  width: 100%;\n  height: 100%;\n"]);return xe=function(){return n},n}var we=l.b.div(xe()),ve=function(){var n=Object(i.useState)(!1),e=Object(u.a)(n,2),t=e[0],o=e[1];return r.a.createElement("div",{className:"App-body"},r.a.createElement(we,null,r.a.createElement($,{openMenu:t,setOpenMenu:o}),r.a.createElement(un,{bgColor:"#7B506F",title:J.pages.ourKitchen.title,id:"aboutUs"},J.pages.ourKitchen.text),r.a.createElement(gn,null),r.a.createElement(An,null),r.a.createElement(un,{bgColor:"#1F1A38",title:J.pages.aboutUs.title,id:""},J.pages.aboutUs.text),r.a.createElement(Zn,null),r.a.createElement(ce,{openMenu:t,setOpenMenu:o})))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));a.a.render(r.a.createElement(ve,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(n){n.unregister()}))},3:function(n){n.exports=JSON.parse('{"general":{"title":"The Wrap Bar","icons":{"spacerWhite":"/assets/images/icons/wrap-icon-white.png","spacer":"/assets/images/icons/logo.png"}},"pages":{"landing":{"title":"The Wrap Bar","bg":"fff","bgImage":"assets/images/backgrounds/header-background-2.jpg","ingredients":["/assets/images/wrap.png","/assets/images/parsley.png","/assets/images/lemons.png","/assets/images/salsa.png","/assets/images/paprika.png"]},"ourKitchen":{"title":"Onze Keuken","text":"De Libanese keuken is een keuken van de zon en een keuken uit het hart\u201d. De kleuren weerspiegelen de 1001 zonnige landschappen en de diversiteit roept de overvloedige Libanese vrijgevigheid en gastvrijheid op."},"firstImage":{"bgImage":"https://www.lekkerensimpel.com/wp-content/uploads/2016/10/IMG_8036.jpg"},"menu":{"subTitle":"Onze Menu","bgImage":"https://i.pinimg.com/originals/b1/d0/1a/b1d01a377009e0d59fce582b99b60b32.jpg","menuItems":[{"title":"Wraps","products":[{"product":"TENDERY CHICKEN","description":"grilled marinated chicken thighs with lettuce, tomato, red onion & chef\u2019s sauce","price":"6.95"},{"product":"SPICY CHICKEN","description":"grilled marinated chicken thighs with lettuce, tomato, red onion, jalapeno & spicy chef\u2019s sauce","price":"6.95"},{"product":"CHICKEN FAJITA","description":"fajita chicken with tomato, grilled bell pepper, grilled onion & guacamole","price":"6.95"},{"product":"Running Cow","description":"minced beef with spices, lettuce, tomato, red onion, pickles & chef\u2019s sauce","price":"6.95"},{"product":"Spicy Sausage Party","description":"spicy merguez sausage with tomato, red onion, red cabbage, carrot & chef\u2019s sauce","price":"6.95"},{"product":"DELUXE COW","description":"minced beef with spices, tomato, red onion, pickles, fried egg, turkey bacon & chef\u2019s sauce","price":"8.00"}]},{"title":"Wraps (v)","products":[{"product":"OMG IT\u2019S VEGAN (v)","description":"roasted vegetables with avocado, tomato & chef\u2019s vegan sauce","price":"6.95"},{"product":"FALAFEL PARTY (v)","description":"fried crispy falafel with hummus, lettuce, tomato, red onion & chef\u2019s garlic sauce","price":"6.95"},{"product":"CHEESY DREAM (v)","description":"grilled halloumi cheese with red cabbage, carrot, avocado & chef\u2019s sauce","price":"6.95"}]},{"title":"LOADED FRIES","products":[{"product":"LOADED TENDERY FRIES ","description":"fresh cut potato fries with pulled marinated chicken, tomato, red onion & cheese","price":"5.95"},{"product":"LOADED FAJITA FRIES","description":"fresh cut potato fries with fajita chicken, jalapenos, tomato, red onion & cheese","price":"5.95"},{"product":"LOADED RUNNING FRIES","description":"fresh cut potato fries with minced beef, tomato, red onion & cheese","price":"5.95"},{"product":"LOADED SAUSAGE FRIES","description":"fresh cut potato fries with minced beef, tomato, red onion & cheese","price":"5.95"},{"product":"LOADED DELUXE FRIES","description":"fresh cut potato fries with minced beef, fried egg, turkey bacon, red onion & cheese","price":"6.95"},{"product":"LOADED FETA FRIES (v)","description":"fresh cut potato fries with cheese sauce","price":"5.95"},{"product":"LOADED CHEESY FRIES","description":"fresh cut potato fries with cheese sauce","price":"4.00"},{"product":"FRIES","description":"fresh cut potato fries","price":"3.50"}]},{"title":"Bites","products":[{"product":"MOZZARELLA STICKS (v)","description":"5 pieces of fried breaded mozzarella sticks & homemade sauce","price":"3.50"},{"product":"JALAPENO CHEESE BITES (v)","description":"4 pieces of breaded fried jalapeno filled with cheddar & homemade sauce","price":"3.50"},{"product":"CHILI CHEESE NUGGETS","description":"5 pieces of fried nuggets filled with melting cheese & chili","price":"3.50"},{"product":"CHILI CHEESE NUGGETS","description":"6 pieces of fried breaded onion rings & homemade sauce","price":"3.00"}]}],"menuItems2":[{"title":"HOMEMADE DRINKS","products":[{"product":"oreo","description":"","price":"4.50"},{"product":"kitkat","description":"","price":"4.50"},{"product":"kinder bueno","description":"","price":"4.50"},{"product":"dutch cookie","description":"","price":"4.50"},{"product":"caramel goldie","description":"","price":"4.50"},{"product":"healthy fruit","description":"","price":"4.50"}]},{"title":"SOFT DRINKS","products":[{"product":"Soda\'s","description":"coca cola | coca cola zero | coca cola light fanta sprite | cassis ice tea sparkling | ice tea green ginger ale | tonic | bitter lemon chaudfontaine | chaudfontaine sparkling apple juice | fristi | chocomel","price":"2.50"}]},{"title":"HOT DRINKS","products":[{"product":"tea","description":"","price":"2.50"},{"product":"coffee","description":"","price":"2.50"},{"product":"espresso","description":"","price":"2.50"},{"product":"hot coco","description":"","price":"2.50"},{"product":"cappuccino","description":"","price":"2.70"},{"product":"latte macchiato","description":"","price":"2.70"},{"product":"mint tea","description":"","price":"2.70"}]},{"title":"SWEETS","products":[{"product":"CHEESECAKE","description":"","price":"3.50"},{"product":"CARROT CAKE","description":"","price":"2.95"},{"product":"RED VELVET CAKE","description":"","price":"3.50"}]}]},"food":{"first":"/assets/images/gucemoli.png","second":"/assets/images/shake-top.png","third":"/assets/images/wrap-top.png"},"reviews":{"title":"Reviews","reviews":[{"quote":"Great Food!","person":"Alex Maxford"},{"quote":"Great Shakes!","person":"James Maxford"},{"quote":"Great Fries!","person":"Jim Maxford"},{"quote":"Great Service!","person":"Tom Maxford"}],"icons":{"uber":"/assets/images/icons/ue-icon.png","thuisbezorgd":"/assets/images/icons/thuisbezorgd-icon.png","foodora":"/assets/images/icons/foodora-icon.png","google":"/assets/images/icons/google-icon.png"}},"aboutUs":{"title":"Lebanese Keuken","text":"De Libanese gastronomie is een rijke mix van verse ingredi\xebnten zoals olijfolie, specerijen, groenten, zuivelproducten, granen en vlees. Onze chef is uitstekend in staat om een smeltkroes van Libanese, mediterraan ge\xefnspireerde gerechten te combineren met de Europese smaakzin. Smaakvolle kruiden en specerijen combineren texturen om uw smaakpapillen te doen genieten."},"contact":{"title":"Contact","email":{"title":"Email","support":{"title":"Voor hulp:","email":"support@thewrapbar.nl"},"work":{"title":"Om bij ons team te komen:","email":"work@thewrapbar.nl"},"info":{"title":"Voor vragen:","email":"info@thewrapbar.nl"}},"tel":{"title":"Telefoon","text":"tel: ","number":"0620438661"},"adres":[{"content":"Adres: Kruisweg 649"},{"content":"Postcode: 1054JA"},{"content":"Stad: Rotterdam"},{"content":"Land: The Netherlands"}],"businessInfo":[{"content":"The Wrap Bar"},{"content":"KVK: 1234567"}],"social":[{"content":"Instagram: @thewrapbar"},{"content":"Facebook: @thewrapbar"}]}},"copywright":"Copyright The Wrap Bar - 2020"}')}},[[13,1,2]]]);
//# sourceMappingURL=main.aec1b50b.chunk.js.map