window.__require = function t(e, r, o) {
function n(u, a) {
if (!r[u]) {
if (!e[u]) {
var c = u.split("/");
c = c[c.length - 1];
if (!e[c]) {
var f = "function" == typeof __require && __require;
if (!a && f) return f(c, !0);
if (i) return i(c, !0);
throw new Error("Cannot find module '" + u + "'");
}
u = c;
}
var s = r[u] = {
exports: {}
};
e[u][0].call(s.exports, function(t) {
return n(e[u][1][t] || t);
}, s, s.exports, t, e, r, o);
}
return r[u].exports;
}
for (var i = "function" == typeof __require && __require, u = 0; u < o.length; u++) n(o[u]);
return n;
}({
CTRefactorRepateCPlusPlusRandomNoDeathTrait: [ function(t, e, r) {
"use strict";
cc._RF.push(e, "f2000HwBEdBt5qBsEuDYWSL", "CTRefactorRepateCPlusPlusRandomNoDeathTrait");
var o, n = this && this.__extends || (o = function(t, e) {
return (o = Object.setPrototypeOf || {
__proto__: []
} instanceof Array && function(t, e) {
t.__proto__ = e;
} || function(t, e) {
for (var r in e) Object.prototype.hasOwnProperty.call(e, r) && (t[r] = e[r]);
})(t, e);
}, function(t, e) {
o(t, e);
function r() {
this.constructor = t;
}
t.prototype = null === e ? Object.create(e) : (r.prototype = e.prototype, new r());
}), i = this && this.__decorate || function(t, e, r, o) {
var n, i = arguments.length, u = i < 3 ? e : null === o ? o = Object.getOwnPropertyDescriptor(e, r) : o;
if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) u = Reflect.decorate(t, e, r, o); else for (var a = t.length - 1; a >= 0; a--) (n = t[a]) && (u = (i < 3 ? n(u) : i > 3 ? n(e, r, u) : n(e, r)) || u);
return i > 3 && u && Object.defineProperty(e, r, u), u;
};
Object.defineProperty(r, "__esModule", {
value: !0
});
r.CTRefactorRepateCPlusPlusRandomNoDeathTrait = void 0;
var u = function(t) {
n(e, t);
function e() {
return null !== t && t.apply(this, arguments) || this;
}
e.prototype.onSDKArgsConditions = function() {
return [ {
conditions: !0,
flow: "flow1"
} ];
};
e.prototype.onSDKArgsActions = function() {
return {
flow1: function() {
return {
repeatRandomNoDie: 1
};
}
};
};
return i([ classId("CTRefactorRepateCPlusPlusRandomNoDeathTrait") ], e);
}(Trait);
r.CTRefactorRepateCPlusPlusRandomNoDeathTrait = u;
cc._RF.pop();
}, {} ]
}, {}, [ "CTRefactorRepateCPlusPlusRandomNoDeathTrait" ]);
//# sourceMappingURL=index.js.map
