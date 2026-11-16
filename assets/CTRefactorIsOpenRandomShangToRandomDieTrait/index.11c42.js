window.__require = function e(t, o, r) {
function n(a, c) {
if (!o[a]) {
if (!t[a]) {
var u = a.split("/");
u = u[u.length - 1];
if (!t[u]) {
var f = "function" == typeof __require && __require;
if (!c && f) return f(u, !0);
if (i) return i(u, !0);
throw new Error("Cannot find module '" + a + "'");
}
a = u;
}
var p = o[a] = {
exports: {}
};
t[a][0].call(p.exports, function(e) {
return n(t[a][1][e] || e);
}, p, p.exports, e, t, o, r);
}
return o[a].exports;
}
for (var i = "function" == typeof __require && __require, a = 0; a < r.length; a++) n(r[a]);
return n;
}({
CTRefactorIsOpenRandomShangToRandomDieTrait: [ function(e, t, o) {
"use strict";
cc._RF.push(t, "d70441WtKhNKouoWZ80DXwh", "CTRefactorIsOpenRandomShangToRandomDieTrait");
var r, n = this && this.__extends || (r = function(e, t) {
return (r = Object.setPrototypeOf || {
__proto__: []
} instanceof Array && function(e, t) {
e.__proto__ = t;
} || function(e, t) {
for (var o in t) Object.prototype.hasOwnProperty.call(t, o) && (e[o] = t[o]);
})(e, t);
}, function(e, t) {
r(e, t);
function o() {
this.constructor = e;
}
e.prototype = null === t ? Object.create(t) : (o.prototype = t.prototype, new o());
}), i = this && this.__decorate || function(e, t, o, r) {
var n, i = arguments.length, a = i < 3 ? t : null === r ? r = Object.getOwnPropertyDescriptor(t, o) : r;
if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) a = Reflect.decorate(e, t, o, r); else for (var c = e.length - 1; c >= 0; c--) (n = e[c]) && (a = (i < 3 ? n(a) : i > 3 ? n(t, o, a) : n(t, o)) || a);
return i > 3 && a && Object.defineProperty(t, o, a), a;
};
Object.defineProperty(o, "__esModule", {
value: !0
});
o.CTRefactorIsOpenRandomShangToRandomDieTrait = void 0;
var a = function(e) {
n(t, e);
function t() {
return null !== e && e.apply(this, arguments) || this;
}
Object.defineProperty(t.prototype, "replacedSuiJiWuSiAlgoId", {
get: function() {
return hs.traitConfigSafePropsInfo.getSafePropValueByKey("IsOpenRandomShangToRandomDieTrait", "replacedSuiJiWuSiAlgoId", this.props, hs.OFFER_TYPE.SUI_JI_WU_SI);
},
enumerable: !1,
configurable: !0
});
t.prototype.isAlgorithmStrategyLogicGetShangZengAndSuiJi = function(e) {
e.args[1] = !0;
e.args[2] = this.replacedSuiJiWuSiAlgoId;
};
return i([ classId("CTRefactorIsOpenRandomShangToRandomDieTrait") ], t);
}(Trait);
o.CTRefactorIsOpenRandomShangToRandomDieTrait = a;
cc._RF.pop();
}, {} ]
}, {}, [ "CTRefactorIsOpenRandomShangToRandomDieTrait" ]);
//# sourceMappingURL=index.js.map
