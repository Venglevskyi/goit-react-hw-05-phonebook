(this["webpackJsonpgoit-react-hw-05-phonebook"]=this["webpackJsonpgoit-react-hw-05-phonebook"]||[]).push([[0],{18:function(t,e,n){t.exports={Form:"contactForm_Form__3Oz86",FormLabel:"contactForm_FormLabel__3mtbH",FormInput:"contactForm_FormInput__MSz1w",FormButton:"contactForm_FormButton__1PzY5"}},29:function(t,e,n){t.exports={enter:"contactList_enter__2ri0i",enterActive:"contactList_enterActive__1O64-",exit:"contactList_exit__-3GcH",exitActive:"contactList_exitActive__3CXy2"}},32:function(t,e,n){t.exports={themeSelector:"toggler_themeSelector__6Am-W",switch:"toggler_switch__1Yj4p",slider:"toggler_slider__NxCVr",round:"toggler_round__3rzeJ"}},33:function(t,e,n){t.exports={contactsListItem:"contactList_contactsListItem__SJ3FG",deleteButton:"contactList_deleteButton__3KpyN",contactInfo:"contactList_contactInfo__3h559"}},34:function(t,e,n){t.exports={filterForm:"filter_filterForm__1oqI_",FormLabel:"filter_FormLabel__3ml5u",FormInput:"filter_FormInput__3X-NO",contactsListItem:"filter_contactsListItem__35nKL",deleteButton:"filter_deleteButton__u5Gpn"}},38:function(t,e,n){t.exports={title:"base_title__17w8-"}},39:function(t,e,n){t.exports={appear:"animationTitle_appear__3mNO3",appearActive:"animationTitle_appearActive__2abhL"}},43:function(t,e,n){t.exports={appear:"animationFormContact_appear__2e0fQ",appearActive:"animationFormContact_appearActive__2ulZe"}},44:function(t,e,n){t.exports={Layout:"layout_Layout__1UqyC"}},45:function(t,e,n){t.exports={Spiner:"loader_Spiner__2Y23D"}},48:function(t,e,n){t.exports=n.p+"static/media/server-error.d01e640f.jpg"},53:function(t,e,n){t.exports=n(85)},85:function(t,e,n){"use strict";n.r(e);var a,r,c,o=n(0),u=n.n(o),i=n(12),l=n.n(i),m=n(9),s=n(5),f=n(3),b=n(49),p=n(8),h=Object(s.b)("contact/addRequest"),d=Object(s.b)("contact/addSuccess"),_=Object(s.b)("contact/addError"),O=Object(s.b)("contact/getRequest"),j=Object(s.b)("contact/getSuccess"),v=Object(s.b)("contact/getError"),g=Object(s.b)("contact/removeRequest"),E=Object(s.b)("contact/removeSuccess"),y=Object(s.b)("contact/removeError"),C=Object(s.b)("contact/formFilter"),F=Object(s.c)([],(a={},Object(f.a)(a,j,(function(t,e){return e.payload})),Object(f.a)(a,d,(function(t,e){return[].concat(Object(b.a)(t),[e.payload])})),Object(f.a)(a,E,(function(t,e){return t.filter((function(t){return t.id!==e.payload}))})),a)),N=Object(s.c)("",Object(f.a)({},C,(function(t,e){return e.payload}))),L=Object(s.c)(!1,(r={},Object(f.a)(r,O,(function(){return!0})),Object(f.a)(r,j,(function(){return!1})),Object(f.a)(r,v,(function(){return!1})),Object(f.a)(r,h,(function(){return!0})),Object(f.a)(r,d,(function(){return!1})),Object(f.a)(r,_,(function(){return!1})),Object(f.a)(r,g,(function(){return!0})),Object(f.a)(r,E,(function(){return!1})),Object(f.a)(r,y,(function(){return!1})),r)),I=Object(s.c)(!1,(c={},Object(f.a)(c,O,(function(){return!1})),Object(f.a)(c,j,(function(){return!1})),Object(f.a)(c,v,(function(){return!0})),Object(f.a)(c,h,(function(){return!1})),Object(f.a)(c,d,(function(){return!1})),Object(f.a)(c,_,(function(){return!0})),Object(f.a)(c,g,(function(){return!1})),Object(f.a)(c,E,(function(){return!1})),Object(f.a)(c,y,(function(){return!0})),c)),k=Object(p.c)({items:F,filter:N,loader:L,error:I}),x=Object(s.a)({reducer:{contacts:k}}),S=n(19),w=n(20),A=n(21),T=n(23),D=n(104),J=n(28),B="https://goit-phonebook-api.herokuapp.com/contacts",q=function(t){return Object(J.a)({Authorization:"Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI1ZTg1ZTg0ZjUwYWYwODAwMTc2OTAyMDYiLCJpYXQiOjE1ODU4MzQwNjN9.LPl_lfqqUkcIndFIwI1LyYUIrfprg9_rc4QpED_uivc"},t)},z=n(11),Y=function(t){return t.contacts.loader},G=function(t){return t.contacts.items},U=function(t){return t.contacts.filter},M=function(t){return t.contacts.error},P=Object(z.a)([G,U],(function(t,e){return t.filter((function(t){return t.name.toLowerCase().includes(e.toLowerCase())}))})),Q=Object(z.a)([function(t,e){return e},G],(function(t,e){return e.find((function(e){return e.id===t}))})),R=n(38),X=n.n(R),Z=n(39),W=n.n(Z),H=n(43),K=n.n(H),V={light:{fontColor:"black",bodybg:"#fff"},dark:{fontColor:"white",bodybg:"#333333"}},$=u.a.createContext(),tt=function(t){Object(T.a)(n,t);var e=Object(A.a)(n);function n(){var t;Object(S.a)(this,n);for(var a=arguments.length,r=new Array(a),c=0;c<a;c++)r[c]=arguments[c];return(t=e.call.apply(e,[this].concat(r))).toggleTheme=function(){t.setState((function(t){return{theme:"dark"===t.theme?"light":"dark"}}))},t.state={theme:"light",toggleTheme:t.toggleTheme,config:V},t}return Object(w.a)(n,[{key:"render",value:function(){return u.a.createElement($.Provider,{value:this.state},this.props.children)}}]),n}(o.Component);tt.Consumer=$.Consumer;var et=function(t){return function(e){return u.a.createElement(tt.Consumer,null,(function(n){return u.a.createElement(t,Object.assign({},e,{theme:n}))}))}},nt=n(44),at=n.n(nt),rt=et((function(t){var e=t.children,n=t.theme,a=n.theme,r=n.config;return u.a.createElement("div",{className:at.a.Layout,style:{background:r[a].bodybg,color:r[a].fontColor}},e)})),ct=n(45),ot=n.n(ct),ut=n(46),it=n.n(ut),lt=(n(82),function(){return u.a.createElement("div",{className:ot.a.Spiner},u.a.createElement(it.a,{type:"ThreeDots",color:"#00BFFF",height:80,width:80}))}),mt=n(32),st=n.n(mt),ft=et((function(t){var e=t.theme,n=e.theme,a=e.toggleTheme;return u.a.createElement("div",{className:st.a.themeSelector},u.a.createElement("label",{className:st.a.switch},u.a.createElement("input",{type:"checkbox",checked:"dark"===n,onChange:function(t){var e=t.target;return a(e.value)}}),u.a.createElement("span",{className:st.a.slider})))})),bt=n(18),pt=n.n(bt),ht=function(t){Object(T.a)(n,t);var e=Object(A.a)(n);function n(){var t;Object(S.a)(this,n);for(var a=arguments.length,r=new Array(a),c=0;c<a;c++)r[c]=arguments[c];return(t=e.call.apply(e,[this].concat(r))).state={name:"",number:""},t.handleChange=function(e){var n=e.target,a=n.name,r=n.value;t.setState(Object(f.a)({},a,r))},t.handleSubmit=function(e){e.preventDefault();var n=t.state,a=n.name,r=n.number,c=t.props.contacts.find((function(t){return t.name===a}));c?alert("".concat(c.name," is already consist")):(t.props.onAddContact(a,r),t.setState({name:"",number:""}))},t}return Object(w.a)(n,[{key:"render",value:function(){var t=this.state,e=t.name,n=t.number;return u.a.createElement("form",{className:pt.a.Form,onSubmit:this.handleSubmit},u.a.createElement("label",{className:pt.a.FormLabel},"Name",u.a.createElement("input",{className:pt.a.FormInput,type:"name",value:e,onChange:this.handleChange,name:"name"})),u.a.createElement("label",{className:pt.a.FormLabel},"Number",u.a.createElement("input",{className:pt.a.FormInput,type:"name",value:n,onChange:this.handleChange,name:"number"})),u.a.createElement("button",{className:pt.a.FormButton,type:"submit"},"Add contact"))}}]),n}(o.Component),dt={onAddContact:function(t,e){return function(n){n(h());var a={name:t,number:e},r={method:"POST",headers:q({"Content-Type":"application/json"}),body:JSON.stringify(a)};fetch(B,r).then((function(t){return t.json()})).then((function(t){return n(d(t))})).catch((function(t){return n(_(t))}))}}},_t=Object(m.b)((function(t){return{contacts:G(t)}}),dt)(ht),Ot=n(29),jt=n.n(Ot),vt=n(33),gt=n.n(vt),Et=n(103),yt=n(101),Ct=n(47),Ft=n.n(Ct),Nt=Object(yt.a)((function(t){return{button:{margin:t.spacing(1),transition:"background-color 200ms ease-in-out",cursor:"pointer"}}}));function Lt(t){var e=t.removeContact,n=Nt();return u.a.createElement(Et.a,{variant:"contained",color:"secondary",className:n.button,size:"small",startIcon:u.a.createElement(Ft.a,null),onClick:e},"Delete")}var It=Object(m.b)((function(t,e){var n=Q(t,e.id);return Object(J.a)({},n)}),(function(t,e){return{removeContact:function(){return t((n=e.id,function(t){t(g());var e={method:"DELETE",headers:q()};fetch("".concat(B,"/").concat(n),e).then((function(t){return t.json()})).then((function(){return t(E(n))})).catch((function(e){return t(y(e))}))}));var n}}}))((function(t){var e=t.name,n=t.number,a=t.removeContact;return u.a.createElement("li",{className:gt.a.contactsListItem},u.a.createElement("div",{className:gt.a.contactInfo},e),u.a.createElement("div",{className:gt.a.contactInfo},n),u.a.createElement(Lt,{removeContact:function(){return a()}}))})),kt=Object(m.b)((function(t){return{contacts:P(t)}}))((function(t){var e=t.contacts;return u.a.createElement("ul",null,e.map((function(t){var e=t.id;return u.a.createElement(D.a,{key:e,timeout:250,classNames:jt.a},u.a.createElement(It,{id:e}))})))})),xt=n(105),St=n(34),wt=n.n(St),At={onChange:C},Tt=Object(m.b)((function(t){return{contacts:P(t),value:U(t)}}),At)((function(t){var e=t.value,n=t.onChange,a=t.contacts;return u.a.createElement("div",{className:wt.a.filterForm},u.a.createElement("label",{className:wt.a.FormLabel},"Find contacts by name",u.a.createElement("input",{className:wt.a.FormInput,type:"name",value:e,onChange:function(t){return n(t.target.value)}})),u.a.createElement(xt.a,{component:"ul"},a.map((function(t){var e=t.id;return u.a.createElement(D.a,{key:e,timeout:250,classNames:jt.a},u.a.createElement(It,{id:e}))}))))})),Dt=n(48),Jt=n.n(Dt),Bt={container:{textAlign:"center"},image:{paddingTop:100}},qt=function(){return u.a.createElement("div",{style:Bt.container},u.a.createElement("img",{src:Jt.a,alt:"img",width:"500",style:Bt.image}))},zt=function(t){Object(T.a)(n,t);var e=Object(A.a)(n);function n(){return Object(S.a)(this,n),e.apply(this,arguments)}return Object(w.a)(n,[{key:"componentDidMount",value:function(){this.props.onGetContacts()}},{key:"render",value:function(){var t=this.props,e=t.isLoadingContact,n=t.errorServer,a=t.contacts;return u.a.createElement(tt,null,n&&u.a.createElement(qt,null),!n&&u.a.createElement(rt,null,u.a.createElement(ft,null),u.a.createElement(D.a,{in:!0,appear:!0,timeout:500,classNames:W.a,unmountOnExit:!0},u.a.createElement("h1",{className:X.a.title},"Phonebook")),u.a.createElement(D.a,{in:!0,appear:!0,timeout:500,classNames:K.a,unmountOnExit:!0},u.a.createElement(_t,null)),u.a.createElement(D.a,{in:!0,appear:!0,timeout:500,classNames:W.a,unmountOnExit:!0},u.a.createElement("h2",{className:X.a.title},"Contacts")),a.length>1&&u.a.createElement(Tt,null),1===a.length&&u.a.createElement(kt,null),e&&u.a.createElement(lt,null)))}}]),n}(o.Component),Yt={onGetContacts:function(){return function(t){t(O());var e={method:"GET",headers:q()};fetch(B,e).then((function(t){return t.json()})).then((function(e){return t(j(e))})).catch((function(e){return t(v(e))}))}}},Gt=Object(m.b)((function(t){return{isLoadingContact:Y(t),errorServer:M(t),contacts:G(t)}}),Yt)(zt);l.a.render(u.a.createElement(m.a,{store:x},u.a.createElement(Gt,null)),document.querySelector("#root"))}},[[53,1,2]]]);
//# sourceMappingURL=main.d423d888.chunk.js.map