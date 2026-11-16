window.__require = function e(t, r, o) {
function n(c, i) {
if (!r[c]) {
if (!t[c]) {
var f = c.split("/");
f = f[f.length - 1];
if (!t[f]) {
var l = "function" == typeof __require && __require;
if (!i && l) return l(f, !0);
if (a) return a(f, !0);
throw new Error("Cannot find module '" + c + "'");
}
c = f;
}
var u = r[c] = {
exports: {}
};
t[c][0].call(u.exports, function(e) {
return n(t[c][1][e] || e);
}, u, u.exports, e, t, r, o);
}
return r[c].exports;
}
for (var a = "function" == typeof __require && __require, c = 0; c < o.length; c++) n(o[c]);
return n;
}({
CTRefactorFixthreeblocksRandomReplaceTrait: [ function(e, t, r) {
"use strict";
cc._RF.push(t, "c4e2dHwezpMjqXZ9uOyxKfR", "CTRefactorFixthreeblocksRandomReplaceTrait");
var o, n = this && this.__extends || (o = function(e, t) {
return (o = Object.setPrototypeOf || {
__proto__: []
} instanceof Array && function(e, t) {
e.__proto__ = t;
} || function(e, t) {
for (var r in t) Object.prototype.hasOwnProperty.call(t, r) && (e[r] = t[r]);
})(e, t);
}, function(e, t) {
o(e, t);
function r() {
this.constructor = e;
}
e.prototype = null === t ? Object.create(t) : (r.prototype = t.prototype, new r());
}), a = this && this.__decorate || function(e, t, r, o) {
var n, a = arguments.length, c = a < 3 ? t : null === o ? o = Object.getOwnPropertyDescriptor(t, r) : o;
if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) c = Reflect.decorate(e, t, r, o); else for (var i = e.length - 1; i >= 0; i--) (n = e[i]) && (c = (a < 3 ? n(c) : a > 3 ? n(t, r, c) : n(t, r)) || c);
return a > 3 && c && Object.defineProperty(t, r, c), c;
};
Object.defineProperty(r, "__esModule", {
value: !0
});
r.CTRefactorFixthreeblocksRandomReplaceTrait = void 0;
var c = function(e) {
n(t, e);
function t() {
var t = null !== e && e.apply(this, arguments) || this;
t.TRAIT_NAME = "CTRefactorFixthreeblocksRandomReplaceTrait";
return t;
}
t.prototype.onAlgorithmStrategyRoundInit = function() {
var e = TRAIT("CTRefactorFinalBlockCheckTrait");
(null == e ? void 0 : e.active) && e.setState({
fixProduceRandomId: !0
});
};
t.prototype.isAlgorithmStrategyLogicProduceRandomId = function(e) {
for (var t = e.args[0], r = [], o = 2; o <= 42; o++) if (o !== t) for (var n = 0; n < 8; n++) {
for (var a = !1, c = 0; c < 8; c++) if (hs.algorithmStrategyLogic.canPut(o, n, c, hs.boardInfo.faceBlocks)) {
r.push(o);
a = !0;
break;
}
if (a) break;
}
e.returnState = !0;
e.returnValue = r.length > 0 ? r[Math.floor(r.length * Math.random())] : 1;
e.replace = !0;
};
return a([ classId("CTRefactorFixthreeblocksRandomReplaceTrait") ], t);
}(Trait);
r.CTRefactorFixthreeblocksRandomReplaceTrait = c;
cc._RF.pop();
}, {} ]
}, {}, [ "CTRefactorFixthreeblocksRandomReplaceTrait" ]);
//# sourceMappingURL=index.js.map
