(this["webpackJsonpmy-app"]=this["webpackJsonpmy-app"]||[]).push([[3],{296:function(e,s,a){e.exports={dialogs:"Dialogs_dialogs__32WiS",dialogsItems:"Dialogs_dialogsItems__3syMS",active:"Dialogs_active__32UR5",messages:"Dialogs_messages__2zyRe",message:"Dialogs_message__18YdI"}},297:function(e,s,a){e.exports={dialogsItems:"DialogItem_dialogsItems__2XlRe",active:"DialogItem_active__2h4oQ"}},298:function(e,s,a){e.exports={messages:"Message_messages__1dxv2"}},307:function(e,s,a){"use strict";a.r(s);a(0);var t=a(296),i=a.n(t),n=a(297),c=a.n(n),d=a(23),o=a(1),g=function(e){var s="/dialogs/"+e.id;return Object(o.jsx)("div",{className:c.a.dialog+" "+c.a.active,children:Object(o.jsxs)(d.b,{to:s,children:[" ",e.name," "]})})},m=a(298),l=a.n(m),r=function(e){return Object(o.jsx)("div",{className:l.a.message,children:e.message})},j=a(130),b=a(119),u=a(96),_=a(55),x=Object(_.a)(30),O=Object(u.a)("textarea"),v=function(e){return Object(o.jsxs)("form",{onSubmit:e.handleSubmit,children:[Object(o.jsxs)("div",{children:[" ",Object(o.jsx)(j.a,{component:O,name:"messageBody",placeholder:"Enter your message",validate:[_.b,x]})]}),Object(o.jsxs)("div",{children:[" ",Object(o.jsx)("button",{children:"Send Message"})," "]})]})};v=Object(b.a)(v,"dialog");var h=function(e){var s=e.messagePage.dialogs.map((function(e){return Object(o.jsx)(g,{name:e.name,id:e.id},e.id)})),a=e.messagePage.messages.map((function(e){return Object(o.jsx)(r,{message:e.message},e.id)}));return Object(o.jsxs)("div",{className:i.a.dialogs,children:[Object(o.jsx)("div",{className:i.a.dialogsItems,children:s}),Object(o.jsxs)("div",{className:i.a.messages,children:[Object(o.jsxs)("div",{children:[" ",a," "]}),Object(o.jsx)(v,{onSubmit:function(s){e.sendMessage(s.messageBody)}})]})]})},p=a(14),f=a(139),I=a(11),y=a(107);s.default=Object(I.d)(Object(p.b)((function(e){return{messagePage:e.messagePage}}),{sendMessage:y.b}),f.a)(h)}}]);
//# sourceMappingURL=3.1a958d6d.chunk.js.map