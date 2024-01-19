"use strict";(self.webpackChunkgoit_react_hw_08_phonebook=self.webpackChunkgoit_react_hw_08_phonebook||[]).push([[541],{2541:function(n,t,e){e.r(t),e.d(t,{default:function(){return G}});var r,a,s,u,c,i,o,p,l,d,f=e(168),x=e(2791),h=e(4420),v=e(4270),g=e(5861),b=e(4687),m=e.n(b),k=e(2091),Z=e(5294),j=(0,k.hg)("tasks/fetchAll",function(){var n=(0,g.Z)(m().mark((function n(t,e){var r;return m().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,n.next=3,Z.Z.get("/tasks");case 3:return r=n.sent,n.abrupt("return",r.data);case 7:return n.prev=7,n.t0=n.catch(0),n.abrupt("return",e.rejectWithValue(n.t0.message));case 10:case"end":return n.stop()}}),n,null,[[0,7]])})));return function(t,e){return n.apply(this,arguments)}}()),w=(0,k.hg)("tasks/addTask",function(){var n=(0,g.Z)(m().mark((function n(t,e){var r;return m().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,n.next=3,Z.Z.post("/tasks",{text:t});case 3:return r=n.sent,n.abrupt("return",r.data);case 7:return n.prev=7,n.t0=n.catch(0),n.abrupt("return",e.rejectWithValue(n.t0.message));case 10:case"end":return n.stop()}}),n,null,[[0,7]])})));return function(t,e){return n.apply(this,arguments)}}()),y=(0,k.hg)("tasks/deleteTask",function(){var n=(0,g.Z)(m().mark((function n(t,e){var r;return m().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,n.next=3,Z.Z.delete("/tasks/".concat(t));case 3:return r=n.sent,n.abrupt("return",r.data);case 7:return n.prev=7,n.t0=n.catch(0),n.abrupt("return",e.rejectWithValue(n.t0.message));case 10:case"end":return n.stop()}}),n,null,[[0,7]])})));return function(t,e){return n.apply(this,arguments)}}()),P=e(7924),_=e(184),T=P.ZP.div(r||(r=(0,f.Z)(["\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  border: 1px solid #ccc;\n  padding: 8px;\n  margin-bottom: 8px;\n"]))),C=P.ZP.p(a||(a=(0,f.Z)(["\n  margin: 0;\n"]))),E=P.ZP.button(s||(s=(0,f.Z)(["\n  padding: 8px;\n  cursor: pointer;\n  background-color: #ff5757;\n  color: #fff;\n  border: none;\n  border-radius: 4px;\n"]))),I=function(n){var t=n.id,e=n.text,r=(0,h.I0)();return(0,_.jsxs)(T,{children:[(0,_.jsx)(C,{children:e}),(0,_.jsx)(E,{type:"button",onClick:function(){return r(y(t))},children:"Delete"})]})},V=function(n){return n.tasks.loading},W=function(n){return n.tasks.items},q=P.ZP.ul(u||(u=(0,f.Z)(["\n  list-style: none;\n  padding: 0;\n"]))),A=P.ZP.li(c||(c=(0,f.Z)(["\n  margin-bottom: 10px;\n"]))),D=function(){var n=(0,h.v9)(W);return(0,_.jsx)(q,{children:n.map((function(n){var t=n.id,e=n.text;return(0,_.jsx)(A,{children:(0,_.jsx)(I,{id:t,text:e})},t)}))})},F=P.ZP.form(i||(i=(0,f.Z)(["\n  display: flex;\n  margin-bottom: 16px;\n"]))),R=P.ZP.input(o||(o=(0,f.Z)(["\n  flex: 1;\n  padding: 8px;\n"]))),S=P.ZP.button(p||(p=(0,f.Z)(["\n  padding: 8px;\n  background-color: #4caf50;\n  color: #fff;\n  border: none;\n  cursor: pointer;\n"]))),Y=function(){var n=(0,h.I0)();return(0,_.jsxs)(F,{onSubmit:function(t){t.preventDefault();var e=t.currentTarget,r=e.elements.text.value;""!==r.trim()?(n(w(r)),e.reset()):alert("Task cannot be empty. Enter some text!")},children:[(0,_.jsx)(R,{name:"text",placeholder:"Enter your task"}),(0,_.jsx)(S,{type:"submit",children:"Add task"})]})},z=P.ZP.div(l||(l=(0,f.Z)(["\n  margin-top: 10px;\n  font-weight: bold;\n"]))),B=P.ZP.div(d||(d=(0,f.Z)(["\n  margin-top: 20px;\n"]))),G=function(){var n=(0,h.I0)(),t=(0,h.v9)(V);return(0,x.useEffect)((function(){n(j())}),[n]),(0,_.jsxs)(_.Fragment,{children:[(0,_.jsx)(v.q,{children:(0,_.jsx)("title",{children:"Your tasks"})}),(0,_.jsx)(Y,{}),(0,_.jsx)(B,{children:t&&(0,_.jsx)(z,{children:"Request in progress..."})}),(0,_.jsx)(D,{})]})}}}]);
//# sourceMappingURL=541.b7f5ff67.chunk.js.map