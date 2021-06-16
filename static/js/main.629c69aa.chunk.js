(this["webpackJsonpfrontend-challenge"]=this["webpackJsonpfrontend-challenge"]||[]).push([[0],{60:function(n,t,e){},62:function(n,t,e){},68:function(n,t,e){"use strict";e.r(t);var i,a,o,r,c,l,p,s,x,d,b,h,g,j,m,f,u,O,A,w,v,y,F,C,k,D,B,z,E,S,I,M,N,R,U,L,T,Q,X,G,V,q,J=e(1),P=e.n(J),Y=e(32),H=e.n(Y),K=(e(60),function(n){n&&n instanceof Function&&e.e(3).then(e.bind(null,87)).then((function(t){var e=t.getCLS,i=t.getFID,a=t.getFCP,o=t.getLCP,r=t.getTTFB;e(n),i(n),a(n),o(n),r(n)}))}),W=e(81),Z=e(82),$=e(84),_=new Z.a({uri:"https://rickandmortyapi.com/graphql",cache:new $.a,connectToDevTools:!0}),nn=(e(62),e(23)),tn=e(85),en=e(49),an=e(10),on=P.a.createContext(new function n(){var t=this;Object(en.a)(this,n),this.page=1,this.term="",this.updatePage=Object(an.b)((function(n){t.page=n})),this.changeTerm=Object(an.b)((function(n){t.term=n})),Object(an.e)(this)}),rn=function(){return P.a.useContext(on)},cn=e(4),ln=e(83),pn=e(5),sn=pn.b.img(r||(r=Object(cn.a)(["\n    width: 240px;\n    height: 102px;\n    margin: 0 auto;\n\n    @media (min-width: 1024px) {\n        width: 502px;\n        height: 214px;\n    }\n"]))),xn=e.p+"static/media/rickmortylogo.66cb6353.png",dn=e(2),bn=function(){return Object(dn.jsx)(sn,{src:xn,alt:"Rick and Morty Logo"})},hn=e.p+"static/media/loading.1a60ec50.png",gn=pn.b.div(c||(c=Object(cn.a)(["\n    top: 0;\n    left: 0;\n    position: fixed;\n\n    width: 100vw;\n    height: 100vh;\n\n    z-index: 1;\n"]))),jn=Object(pn.b)(gn)(l||(l=Object(cn.a)(["\n    background: rgba(0, 0, 0, 0.8);\n    backdrop-filter: blur(5px);\n"]))),mn=pn.b.div(p||(p=Object(cn.a)(["\n    height: fit-content;\n    margin: auto;\n\n    top: 0;\n    left: 0;\n    right: 0;\n    bottom: 0;\n    position: absolute;\n"]))),fn=pn.b.img(s||(s=Object(cn.a)(["\n    display: block;\n    margin-left: auto;\n    margin-right: auto;\n    border: 2px solid #606060;\n    box-sizing: border-box;\n    border-radius: 8px;\n"]))),un=pn.b.div(x||(x=Object(cn.a)(["\n    font-family: Nunito;\n    font-style: normal;\n    font-weight: normal;\n    font-size: 18px;\n    line-height: 25px;\n\n    text-align: center;\n    margin: 40px auto;\n\n    color: #FFFFFF;\n"]))),On=function(){return Object(dn.jsx)(jn,{children:Object(dn.jsxs)(mn,{children:[Object(dn.jsx)(fn,{src:hn,alt:"Loading"}),Object(dn.jsx)(un,{children:"Loading"})]})})},An=e(54),wn=e(14),vn=e(55),yn=pn.b.button(d||(d=Object(cn.a)(["\n    width: 84px;\n    height: 42px;\n\n    margin-left: 8px;\n    vertical-align: middle;\n\n    border: 2px solid #FFFFFF;\n    box-sizing: border-box;\n    border-radius: 8px;\n    background: transparent;\n\n    font-family: Nunito;\n    font-style: normal;\n    font-weight: bold;\n    font-size: 16px;\n    line-height: 22px;\n\n    color: #FFFFFF;\n    padding: 10px 16px;\n    cursor: pointer;\n\n    ","\n"])),(function(n){return n.newStyle})),Fn=["children"],Cn=function(n){var t=n.children,e=Object(vn.a)(n,Fn);return Object(dn.jsx)(yn,Object(wn.a)(Object(wn.a)({},e),{},{children:t}))},kn=pn.b.div(b||(b=Object(cn.a)(["\n    margin-top: 47px;\n    position: relative;\n    text-align: center;\n"]))),Dn=pn.b.input(h||(h=Object(cn.a)(["\n    max-width: 164px;\n    height: 42px;\n\n    border: 2px solid #FFFFFF;\n    box-sizing: border-box;\n    border-radius: 8px;\n    background: transparent;\n\n    color: #FFFFFF;\n    font-weight: bold;\n    padding: 10px;\n\n    &::placeholder {\n        font-family: Nunito;\n        font-style: normal;\n        font-weight: bold;\n        font-size: 16px;\n        line-height: 22px;\n\n        color: #9F9F9F;\n        padding: 10px;\n    }\n\n    @media (min-width: 1024px) {\n        max-width: 196px;\n    }\n"]))),Bn=Object(nn.a)((function(){var n=rn(),t=Object(J.useState)(n.term),e=Object(An.a)(t,2),i=e[0],a=e[1];return Object(dn.jsxs)(kn,{children:[Object(dn.jsx)(Dn,{type:"text",name:"search",value:i,placeholder:"Search characters",onChange:function(n){return a(n.target.value)}}),Object(dn.jsx)(Cn,{onClick:function(){return n.changeTerm(i)},children:"Search"})]})})),zn=pn.b.section(g||(g=Object(cn.a)(["\n    display: block;\n    margin: 60px auto;\n"]))),En=pn.b.div(j||(j=Object(cn.a)(["\n    cursor: pointer;\n    display: inline-block;\n\n    font-family: Nunito;\n    font-style: normal;\n    font-weight: normal;\n    font-size: 16px;\n    font-size: 20px;\n    line-height: 27px;\n\n    color: ",";\n"])),(function(n){return n.available?"#FFFFFF":"#3E3E3E"})),Sn=pn.b.div(m||(m=Object(cn.a)(["\n    display: inline-block;\n    margin: 0 52px;\n    text-align: center;\n"]))),In=pn.b.span(f||(f=Object(cn.a)(["\n    font-family: Nunito;\n    font-style: normal;\n    font-weight: normal;\n    font-size: 20px;\n    line-height: 27px;\n\n    color: #CBD736;\n    margin: 0 auto;\n\n    @media(min-width: 1024px) {\n        visibility: hidden;\n        display: none;\n    }\n"]))),Mn=Object(pn.b)(In)(u||(u=Object(cn.a)(["\n    visibility: hidden;\n    cursor: pointer;\n    display: none;\n    color: ",";\n\n    @media(min-width: 1024px) {\n        visibility: inherit;\n        margin: 0 15px;\n        display: inline-block;\n    }\n"])),(function(n){return n.active?"#CBD736":"#3E3E3E"})),Nn=Object(nn.a)((function(n){var t=n.pages,e=void 0===t?0:t,i=rn();if(e<=0)return"";var a=function(){return i.page>1},o=function(){return i.page<e},r=function(n){i.updatePage(n)},c=Array(e).fill(0);return console.log(c),Object(dn.jsxs)(zn,{children:[Object(dn.jsx)(En,{available:a(),onClick:function(){a()&&r(Math.max(0,i.page-1))},children:"<"}),Object(dn.jsxs)(Sn,{children:[Object(dn.jsx)(In,{children:i.page}),c.map((function(n,t){return Object(dn.jsx)(Mn,{active:t+1===i.page,onClick:function(){return r(t+1)},children:t+1})}))]}),Object(dn.jsx)(En,{available:o(),onClick:function(){o()&&r(Math.min(i.page+1,e))},children:">"})]})})),Rn=pn.b.div(O||(O=Object(cn.a)(["\n    position: relative;\n    width: fill-available;\n    margin-top: 24px;\n\n    display: flex;\n    flex-flow: wrap;\n    flex-direction: row;\n\n    align-content: flex-start;\n    justify-content: space-around;\n"]))),Un=Object(pn.a)(A||(A=Object(cn.a)(["\n    position: relative;\n\n    width: 254px;\n    height: 223px;\n    margin-top: 24px;\n\n    &:hover {\n        border: 2px solid #CBD736;\n        box-shadow: 0px 0px 0px 3px #C9D636, 0px 0px 5px 4px #C9D636, inset 0px 0px 0px 1px rgba(0, 0, 0, 0.6);\n    }\n\n    &:selected {\n        border: 2px solid #CBD736;\n        box-shadow: 0px 0px 0px 3px #C9D636, 0px 0px 5px 4px #C9D636, inset 0px 0px 0px 1px rgba(0, 0, 0, 0.6);\n    }\n\n    &:focus {\n        border: 2px solid #CBD736;\n        box-shadow: 0px 0px 0px 3px #C9D636, 0px 0px 5px 4px #C9D636, inset 0px 0px 0px 1px rgba(0, 0, 0, 0.6);\n    }\n"]))),Ln=e(28),Tn=e(9),Qn=pn.b.div(w||(w=Object(cn.a)(["\n    position: relative;\n\n    background: #1B1B1B;\n    border: 2px solid #606060;\n    box-sizing: border-box;\n    border-radius: 8px;\n\n    width: 100%;\n    height: 100%;\n    margin: 0 auto;\n\n    @media (min-width: 540px) {\n        margin-left: unset;\n        margin-right: unset;\n    }\n\n    ","\n"])),(function(n){return n.newStyle})),Xn=pn.b.img(v||(v=Object(cn.a)(["\n    position: absolute;\n    top: 0;\n    left: 0;\n    width: 100%;\n    height: 100%;\n    border-radius: 6px;\n    filter: ",";\n"])),(function(n){return n.dead?"grayscale(100%)":""})),Gn=pn.b.div(y||(y=Object(cn.a)(["\n    position: absolute;\n    width: 100%;\n    bottom: 0;\n    height: 55px;\n\n    border-radius: 0 0 6px 6px;\n\n    background: rgba(0, 0, 0, 0.5);\n    backdrop-filter: blur(23px);\n"]))),Vn=pn.b.h3(F||(F=Object(cn.a)(["\n    display: block;\n    margin-top: 7px;\n    margin-left: 13px;\n    margin-bottom: 0px;\n\n    font-family: Seravek;\n    font-style: normal;\n    font-weight: bold;\n    font-size: 20px;\n    line-height: 25px;\n\n    color: #FFFFFF;\n\n    overflow-x: hidden;\n    white-space: nowrap;\n    text-overflow: ellipsis;\n"]))),qn=pn.b.h4(C||(C=Object(cn.a)(["\n    display: block;\n    margin-top: 0px;\n    margin-left: 13px;\n\n    font-family: Seravek;\n    font-style: normal;\n    font-weight: normal;\n    font-size: 12px;\n    line-height: 15px;\n\n    color: #FFFFFF;\n"]))),Jn=function(n){var t=n.image,e=n.name,i=n.species,a=n.status,o=n.style;return Object(dn.jsxs)(Qn,{newStyle:o||"",children:[Object(dn.jsx)(Xn,{src:t,dead:"Dead"===a}),Object(dn.jsxs)(Gn,{children:[Object(dn.jsx)(Vn,{children:e}),Object(dn.jsx)(qn,{children:i})]})]})},Pn=Object(pn.b)(Ln.b)(k||(k=Object(cn.a)(["\n    text-decoration: none;\n    display: inline-block;\n    cursor: pointer;\n\n    &:focus {\n        outline: none;\n\n        & > div {\n            border: 2px solid #CBD736;\n            box-shadow: 0px 0px 0px 3px #C9D636, 0px 0px 5px 4px #C9D636, inset 0px 0px 0px 1px rgba(0, 0, 0, 0.6);\n        }\n    }\n"]))),Yn=function(n){var t=n.id,e=n.children,i=Object(Tn.g)(),a="/character/".concat(t);return Object(dn.jsx)(Pn,{to:{pathname:a,state:{background:i}},children:e})},Hn=function(n){var t=n.characters;return Object(dn.jsx)(Rn,{children:t.map((function(n,t){return Object(dn.jsx)(Yn,{id:n.id,children:Object(dn.jsx)(Jn,Object(wn.a)(Object(wn.a)({},n),{},{style:Un}))},t)}))})},Kn=pn.b.div(D||(D=Object(cn.a)(["\n    position: relative;\n    display: flex;\n    margin: 10px 32px;\n    width: fill-available;\n    flex-flow: column wrap;\n"]))),Wn=Object(nn.a)((function(){var n,t,e=rn(),a=Object(tn.a)((n=e.page,t=e.term,Object(ln.a)(i||(i=Object(cn.a)(["\n        query {\n            characters(page: ",', filter: { name: "','" }) {\n                results {\n                    id\n                    name\n                    image\n                    status\n                    species\n                }\n                info {\n                    pages\n                    count\n                }\n            }\n        }\n    '])),n,t)),{skip:!e.term}),o=a.loading,r=a.error,c=a.data;if(r)return"Error! ".concat(r.message);var l=(c||{}).characters,p=void 0===l?{}:l,s=p.info,x=void 0===s?{}:s,d=p.results,b=void 0===d?[]:d;return Object(dn.jsxs)(Kn,{children:[o&&Object(dn.jsx)(On,{}),Object(dn.jsx)(bn,{}),Object(dn.jsx)(Bn,{}),Object(dn.jsx)(Hn,{characters:b,pages:x.pages}),Object(dn.jsx)(Nn,{pages:x.pages})]})})),Zn=pn.b.h3(B||(B=Object(cn.a)(["\n    font-family: Nunito;\n    font-style: normal;\n    font-weight: normal;\n    font-size: 13px;\n    line-height: 18px;\n\n    letter-spacing: 0.65em;\n    color: #CBD736;\n    margin: 0px;\n    text-transform: uppercase;\n"]))),$n=pn.b.div(z||(z=Object(cn.a)(["\n    margin-top: 41px;\n"]))),_n=pn.b.h4(E||(E=Object(cn.a)(["\n    font-family: Nunito;\n    font-style: normal;\n    font-weight: normal;\n    font-size: 12px;\n    line-height: 16px;\n\n    color: #8C8C8C;\n    margin-top: 17px;\n    margin-bottom: 0px;\n\n    @media(min-width: 1024px) {\n        font-size: 14px;\n        line-height: 19px;\n    }\n"]))),nt=pn.b.h1(S||(S=Object(cn.a)(["\n    font-family: Nunito;\n    font-style: normal;\n    font-weight: normal;\n    font-size: 20px;\n    line-height: 20px;\n\n    color: #FFFFFF;\n    margin: 0px;\n\n    @media(min-width: 1024px) {\n        font-size: 28px;\n        line-height: 26px;\n    }\n"]))),tt=pn.b.h2(I||(I=Object(cn.a)(["\n    font-family: Nunito;\n    font-style: normal;\n    font-weight: normal;\n    font-size: 16px;\n    line-height: 22px;\n\n    color: #D3D3D3;\n    margin-top: 3px;\n    margin-bottom: 0px;\n\n    @media(min-width: 1024px) {\n        font-size: 18px;\n        line-height: 25px;\n        margin: 0px;\n    }\n"]))),et=pn.b.div(M||(M=Object(cn.a)(["\n    position: relative;\n    margin-top: 7px;\n"]))),it=pn.b.img(N||(N=Object(cn.a)(["\n    width: 12px;\n    height: 10px;\n    display: inline-block;\n    vertical-align: middle;\n"]))),at=pn.b.span(R||(R=Object(cn.a)(["\n    margin-left: 11px;\n    display: inline-block;\n    vertical-align: middle;\n\n    font-family: Nunito;\n    font-style: normal;\n    font-weight: normal;\n    font-size: 14px;\n    line-height: 19px;\n\n    color: #8C8C8C;\n\n    // @media(min-width: 1024px) {\n    //     font-size: 18px;\n    //     line-height: 25px;\n    // }\n"]))),ot=function(n){var t=n.id,e=n.title,i=n.name,a=n.type,o=n.dimension,r=n.residents,c=void 0===r?[]:r;return Object(dn.jsxs)($n,{children:[Object(dn.jsx)(Zn,{children:e}),Object(dn.jsx)(_n,{children:a||"Unknown Planet"}),Object(dn.jsx)(nt,{children:i||"Unknown"}),Object(dn.jsx)(tt,{children:o||"Unknown dimension"}),null!==t&&Object(dn.jsxs)(et,{children:[Object(dn.jsx)(it,{src:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAA0AAAAMCAYAAAC5tzfZAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAEmSURBVHgBnVHLbYNAEGUXEIiTS9gSnA5cQlKBRQXYByR+Unzgd0tcgXEFcSowqSB04HQQDsCFX95GEK0SK5Ey0u7M25k3vyWSIK7r3hJClsMw5Gma5o7jMI6TJDmJcWQ2PM87IICN4/gCvQZxD/sky/IT3EUURaZIlJBx5fv+RcAM+H3GsF9t217OmPJLUZQF1Nv8iNa4vRDylpqmfWFlIuVt2z5gps3UkoXnjPuCILDwxqqqKn7MxFtC8IEHAD43TbMzDINRSu+7rttO1f8vBEOukX3HN3fFn/d9b+q6XqL9M+L2cRxnnHQBwQzDMP/OgG8DZdV1fTO1ega+o2AfrxG44G8eoUpVVRkqFPi7I86KSn+LuO6SXwqY2W8MdLJFxc91z7EffIySDVGTpXoAAAAASUVORK5CYII=",alt:"Resident count icon"}),Object(dn.jsxs)(at,{children:[c.length," residents"]})]})]})},rt=function(n){var t=n.id,e=n.title,i=Object(tn.a)(function(n){return Object(ln.a)(o||(o=Object(cn.a)(["\n        query {\n            location(id: ",") {\n                name\n                type\n                dimension\n                residents {\n                    id\n                }\n            }\n        }\n    "])),n)}(t),{skip:null===t}),a=i.loading,r=i.error,c=i.data;if(a||r)return"";var l=(c||{}).location,p=void 0===l?{}:l;return Object(dn.jsx)(ot,Object(wn.a)({title:e},p))},ct=pn.b.p(U||(U=Object(cn.a)(["\n    margin-top: 8px;\n    margin-bottom: 0px;\n\n    font-family: Nunito;\n    font-style: normal;\n    font-weight: normal;\n    font-size: 16px;\n    line-height: 22px;\n\n    color: #D3D3D3;\n"]))),lt=function(n){var t=n.name,e=n.gender,i=void 0===e?"":e,a=n.species,o=n.status,r="Dead"===o?"was":"is",c=function(n,t){return"Dead"===t?"".concat(n," is dead"):"Alive"===t?"".concat(n," is alive and well"):"It can't be told if ".concat(n.toLowerCase()," is alive or dead")}("male"===i.toLowerCase()?"He":"She",o);return Object(dn.jsxs)(dn.Fragment,{children:[Object(dn.jsx)(Zn,{children:"About"}),Object(dn.jsxs)(ct,{children:[t," ",r," a ",i," ",a,". ",c,". Last seen in ."]})]})},pt=e.p+"static/media/filter.77b78e28.png",st=Object(pn.b)(gn)(L||(L=Object(cn.a)(["\n    position: fixed;\n    top: 0;\n    left: 0;\n    right: 0;\n    bottom: 0;\n\n    background: rgba(0, 0, 0, 0.8);\n"]))),xt=pn.b.div(T||(T=Object(cn.a)(["\n    position: fixed;\n\n    top: 110px;\n    left: 12px;\n    right: 12px;\n    bottom: 16px;\n\n    border: 1px solid rgba(96, 96, 96, 0.3);\n    background: rgba(0, 0, 0, 0.8);\n    border-radius: 16px;\n\n    @media(min-width: 1024px) {\n        max-width: 1034px;\n        margin: 0 auto;\n    }\n\n    @media(min-width: 1440px) {\n        top: 50px;\n        left: 165px;\n        right: 165px;\n        bottom: 50px;\n    }\n"]))),dt=pn.b.img(Q||(Q=Object(cn.a)(["\n    position: absolute;\n    top: 0;\n    left: 0;\n    right: 0;\n\n    width: 100%;\n    height: 65px;\n\n    filter: blur(5px);\n\n    @media(min-width: 1024px) {\n        height: fill-available;\n        rotate: 90deg;\n        width: 441px;\n    }\n"]))),bt=pn.b.div(X||(X=Object(cn.a)(["\n    position: absolute;\n    top: -70px;\n    bottom: -30px;\n    left: 0;\n    right: 0;\n\n    width: 178px;\n    height: 182px;\n\n    margin-left: auto;\n    margin-right: auto;\n\n    @media(min-width: 1024px) {\n        margin: 0;\n        top: 50%;\n        transform: translateY(-50%);\n\n        left: 25px;\n        width: 350px;\n        height: 500px;\n    }\n\n    @media(min-width: 1440px) {\n        left: -50px;\n        width: 401px;\n        height: 653px;\n    }\n"]))),ht=pn.b.section(G||(G=Object(cn.a)(["\n    display: block;\n    position: relative;\n\n    margin-top: 140px;\n    margin-left: 21px;\n    padding-right: 21px;\n    padding-bottom: 40px;\n\n    height: fill-available;\n    overflow-y: scroll;\n\n    @media(min-width: 1024px) {\n        margin-top: 72px;\n        margin-left: 500px;\n    }\n"]))),gt=pn.b.img(V||(V=Object(cn.a)(["\n    position: absolute;\n    top: -90px;\n    left: 7px;\n    z-index: 1;\n\n    width: 17px;\n    height: 17px;\n\n    @media(min-width: 1024px) {\n        visibility: hidden;\n    }\n"]))),jt=Object(pn.a)(q||(q=Object(cn.a)(["\n    visibility: hidden;\n    position: absolute;\n    z-index: 2;\n\n    @media(min-width: 1024px) {\n        visibility: inherit;\n        top: 20px;\n        left: 25px;\n    }\n\n    // @media(min-width: 1440px) {\n    //     top: 20px;\n    // }\n"]))),mt=function(){var n=Object(Tn.h)().id,t=Object(Tn.f)(),e=function(n){n.stopPropagation(),t.goBack()},i=Object(J.useCallback)((function(n){"Backspace"===n.key&&(n.stopPropagation(),t.goBack())}),[t]);Object(J.useEffect)((function(){return window.addEventListener("keydown",i),function(){window.removeEventListener("keydown",i)}}),[i]);var o=Object(tn.a)(function(n){return Object(ln.a)(a||(a=Object(cn.a)(["\n        query {\n            character(id: ",") {\n                name\n                species\n                status\n                gender\n                image\n                location {\n                    id\n                }\n                origin {\n                    id\n                }\n            }\n        }\n    "])),n)}(n)),r=o.loading,c=o.error,l=o.data;if(r||c)return"";var p=(l||{}).character,s=void 0===p?{}:p;return Object(dn.jsx)(st,{children:Object(dn.jsxs)(xt,{children:[Object(dn.jsx)(gt,{src:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABMAAAATCAYAAAByUDbMAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAACMSURBVHgBpdTBDcAgCAVQ7KJ1Ex2lG3SEjmI3+W0iB2MVgXITwwsRIgGIqLGTI966xPWRGswMNlDFOJmtYAfl/lINipAFVEEa0ARJoAuagKcbmoBLaFt53bmQs6vUdHT1b+iFMufMiy1OzQRCMX4VCMMeiSAcCzkE8WOzP6AXGoAlgD+1EMJBzmDjfgCZ7ONisNknaAAAAABJRU5ErkJggg==",alt:"Close Character Details",onClick:e}),Object(dn.jsx)(Cn,{alt:"Close Character Details",onClick:e,newStyle:jt,children:"Close"}),Object(dn.jsx)(dt,{src:pt,alt:"Header Character Image"}),Object(dn.jsx)(bt,{children:Object(dn.jsx)(Jn,Object(wn.a)({},s))}),Object(dn.jsxs)(ht,{children:[Object(dn.jsx)(lt,Object(wn.a)({},s)),Object(dn.jsx)(rt,Object(wn.a)({title:"Origin"},s.origin||{})),Object(dn.jsx)(rt,Object(wn.a)({title:"Location"},s.location||{}))]})]})})},ft=function(){var n=Object(Tn.g)(),t=n.state&&n.state.background;return Object(dn.jsxs)(dn.Fragment,{children:[Object(dn.jsx)(Tn.c,{location:t||n,children:Object(dn.jsx)(Tn.a,{exact:!0,path:"/",component:Wn})}),t&&Object(dn.jsx)(Tn.a,{path:"/character/:id",component:mt})]})};H.a.render(Object(dn.jsx)(P.a.StrictMode,{children:Object(dn.jsx)(W.a,{client:_,children:Object(dn.jsx)(Ln.a,{basename:"/frontend-challenge-ingaia",children:Object(dn.jsx)(ft,{})})})}),document.getElementById("root")),K()}},[[68,1,2]]]);
//# sourceMappingURL=main.629c69aa.chunk.js.map