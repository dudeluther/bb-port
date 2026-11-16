window.__require = function r(t, e, o) {
function n(c, f) {
if (!e[c]) {
if (!t[c]) {
var u = c.split("/");
u = u[u.length - 1];
if (!t[u]) {
var s = "function" == typeof __require && __require;
if (!f && s) return s(u, !0);
if (i) return i(u, !0);
throw new Error("Cannot find module '" + c + "'");
}
c = u;
}
var a = e[c] = {
exports: {}
};
t[c][0].call(a.exports, function(r) {
return n(t[c][1][r] || r);
}, a, a.exports, r, t, e, o);
}
return e[c].exports;
}
for (var i = "function" == typeof __require && __require, c = 0; c < o.length; c++) n(o[c]);
return n;
}({
CTRefactorFixAlgoVersionTrait: [ function(r, t, e) {
"use strict";
cc._RF.push(t, "e6f53I8Q2lOur+9maeyqR+5", "CTRefactorFixAlgoVersionTrait");
var o, n = this && this.__extends || (o = function(r, t) {
return (o = Object.setPrototypeOf || {
__proto__: []
} instanceof Array && function(r, t) {
r.__proto__ = t;
} || function(r, t) {
for (var e in t) Object.prototype.hasOwnProperty.call(t, e) && (r[e] = t[e]);
})(r, t);
}, function(r, t) {
o(r, t);
function e() {
this.constructor = r;
}
r.prototype = null === t ? Object.create(t) : (e.prototype = t.prototype, new e());
}), i = this && this.__decorate || function(r, t, e, o) {
var n, i = arguments.length, c = i < 3 ? t : null === o ? o = Object.getOwnPropertyDescriptor(t, e) : o;
if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) c = Reflect.decorate(r, t, e, o); else for (var f = r.length - 1; f >= 0; f--) (n = r[f]) && (c = (i < 3 ? n(c) : i > 3 ? n(t, e, c) : n(t, e)) || c);
return i > 3 && c && Object.defineProperty(t, e, c), c;
};
Object.defineProperty(e, "__esModule", {
value: !0
});
e.CTRefactorFixAlgoVersionTrait = void 0;
var c = function(r) {
n(t, r);
function t() {
return null !== r && r.apply(this, arguments) || this;
}
Object.defineProperty(t.prototype, "fixVersion", {
get: function() {
var r;
return Array.isArray(null === (r = this.props) || void 0 === r ? void 0 : r.FixVersion) ? this.props.FixVersion.concat() : [];
},
enumerable: !1,
configurable: !0
});
t.prototype.onSDKArgsConditions = function() {
return [ {
conditions: !0,
flow: "flow1"
} ];
};
t.prototype.onSDKArgsActions = function() {
var r = this;
return {
flow1: function() {
return {
extra: {
traits: {
fixFea: r.fixVersion
}
}
};
}
};
};
return i([ classId("CTRefactorFixAlgoVersionTrait") ], t);
}(Trait);
e.CTRefactorFixAlgoVersionTrait = c;
cc._RF.pop();
}, {} ]
}, {}, [ "CTRefactorFixAlgoVersionTrait" ]);
//# sourceMappingURL=index.js.map
