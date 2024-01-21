"use strict";(self.webpackChunkgoit_react_hw_08_phonebook=self.webpackChunkgoit_react_hw_08_phonebook||[]).push([[993],{9993:function(n,e,t){t.r(e),t.d(e,{default:function(){return Z}});var r,i,a,o=t(9439),l=t(168),u=t(2791),d=t(4420),p=t(5162),c=t(7924),s=t(184),x=c.ZP.form(r||(r=(0,l.Z)(["\n  display: flex;\n  flex-direction: column;\n  border: 1px solid rgb(0, 0, 0);\n  border-radius: 5px;\n  padding: 20px;\n  background-color: #addeeb;\n\n  label {\n    display: flex;\n    flex-direction: column;\n    margin-bottom: 10px;\n  }\n\n  input {\n    padding: 10px;\n    margin-top: 5px;\n  }\n\n  button {\n    padding: 8px;\n    margin-top: 10px;\n    cursor: pointer;\n  }\n"]))),b=function(){var n=(0,d.I0)(),e=(0,u.useState)(""),t=(0,o.Z)(e,2),r=t[0],i=t[1],a=(0,u.useState)(""),l=(0,o.Z)(a,2),c=l[0],b=l[1];return(0,s.jsxs)(x,{onSubmit:function(e){e.preventDefault(),r&&c?(n((0,p.el)({name:r,number:c})),i(""),b("")):alert("Please fill in all fields")},children:[(0,s.jsxs)("label",{children:["Name:",(0,s.jsx)("input",{type:"text",name:"name",value:r,onChange:function(n){i(n.target.value)},required:!0,placeholder:"Name"})]}),(0,s.jsxs)("label",{children:["Number:",(0,s.jsx)("input",{type:"tel",name:"number",value:c,onChange:function(n){b(n.target.value)},required:!0,placeholder:"0123456789"})]}),(0,s.jsx)("button",{type:"submit",children:"Add contact"})]})},g=c.ZP.ul(i||(i=(0,l.Z)(["\n  list-style-type: none;\n  padding: 0;\n\n  li {\n    display: flex;\n    justify-content: space-between;\n    align-items: center;\n    gap: 10px;\n    padding: 10px 0;\n    border-bottom: 1px solid #ccc;\n\n    button {\n      padding: 5px;\n      border-radius: 5px;\n      cursor: pointer;\n    }\n  }\n"]))),m=function(n){var e=n.contacts,t=n.onDeleteContact;return e&&Array.isArray(e)?(0,s.jsx)(g,{children:e.map((function(n){return(0,s.jsxs)("li",{children:[n.name,": ",n.number,(0,s.jsx)("button",{type:"button",onClick:function(){return t(n.id)},children:"Delete"})]},n.id)}))}):null},f=c.ZP.label(a||(a=(0,l.Z)(["\ndisplay: flex;\nflex-direction: column;\nrow-gap: 10px;\ntext-align: center;\n\ninput {\n  padding: 8px;\n  margin-bottom: 10px;\n  margin-left: 10px;\n};\n  \n"]))),h=function(n){var e=n.value,t=n.onChange;return(0,s.jsxs)(f,{children:["Find contacts by name:",(0,s.jsx)("input",{type:"text",placeholder:"Search contacts",value:e,onChange:t})]})},j=t(833),y=t(7548),v=t(8813);function Z(){return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(j.ZP,{}),(0,s.jsx)(y.Z,{fixed:!0,children:(0,s.jsxs)(v.Z,{sx:{bgcolor:"#ECC424",color:"#314448",width:"50vw",marginTop:"20px",marginLeft:"auto",marginRight:"auto",padding:"16px",borderRadius:"12px"},children:[(0,s.jsx)(b,{}),(0,s.jsx)(h,{}),(0,s.jsx)(m,{})]})})]})}}}]);
//# sourceMappingURL=993.d8e03bbd.chunk.js.map