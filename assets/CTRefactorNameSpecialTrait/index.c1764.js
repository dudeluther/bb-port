window.__require = function t(e, r, o) {
function n(a, c) {
if (!r[a]) {
if (!e[a]) {
var f = a.split("/");
f = f[f.length - 1];
if (!e[f]) {
var u = "function" == typeof __require && __require;
if (!c && u) return u(f, !0);
if (i) return i(f, !0);
throw new Error("Cannot find module '" + a + "'");
}
a = f;
}
var l = r[a] = {
exports: {}
};
e[a][0].call(l.exports, function(t) {
return n(e[a][1][t] || t);
}, l, l.exports, t, e, r, o);
}
return r[a].exports;
}
for (var i = "function" == typeof __require && __require, a = 0; a < o.length; a++) n(o[a]);
return n;
}({
CTRefactorNameSpecialTrait: [ function(t, e, r) {
"use strict";
cc._RF.push(e, "469387I1UVHbbazCJz93MHr", "CTRefactorNameSpecialTrait");
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
var n, i = arguments.length, a = i < 3 ? e : null === o ? o = Object.getOwnPropertyDescriptor(e, r) : o;
if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) a = Reflect.decorate(t, e, r, o); else for (var c = t.length - 1; c >= 0; c--) (n = t[c]) && (a = (i < 3 ? n(a) : i > 3 ? n(e, r, a) : n(e, r)) || a);
return i > 3 && a && Object.defineProperty(e, r, a), a;
};
Object.defineProperty(r, "__esModule", {
value: !0
});
r.CTRefactorNameSpecialTrait = void 0;
var a = function(t) {
n(e, t);
function e() {
return null !== t && t.apply(this, arguments) || this;
}
e.prototype.data = function() {
return {
flow: null
};
};
e.prototype.onAlgorithmStrategySDKBetween = function(t) {
var e;
3 == t.sdk.blockIds.length && (null === (e = t.sdk) || void 0 === e ? void 0 : e.actualAlgorithmId_SDK_REQUEST_BEFORE_Patch) == hs.OFFER_TYPE_DIE.ZHI_SI_TI && as.AlgorithmStrategyAlgoActualNamePatch.patch([ hs.ALGO_NAME_TYPE.NAME_DIE, hs.ALGO_NAME_TYPE.NAME_DIE, hs.ALGO_NAME_TYPE.NAME_DIE ], this);
};
return i([ classId("CTRefactorNameSpecialTrait") ], e);
}(Trait);
r.CTRefactorNameSpecialTrait = a;
cc._RF.pop();
}, {} ]
}, {}, [ "CTRefactorNameSpecialTrait" ]);
//# sourceMappingURL=index.js.map
