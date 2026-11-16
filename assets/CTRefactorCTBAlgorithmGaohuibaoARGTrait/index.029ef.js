window.__require = function t(r, o, e) {
function n(a, c) {
if (!o[a]) {
if (!r[a]) {
var u = a.split("/");
u = u[u.length - 1];
if (!r[u]) {
var f = "function" == typeof __require && __require;
if (!c && f) return f(u, !0);
if (i) return i(u, !0);
throw new Error("Cannot find module '" + a + "'");
}
a = u;
}
var _ = o[a] = {
exports: {}
};
r[a][0].call(_.exports, function(t) {
return n(r[a][1][t] || t);
}, _, _.exports, t, r, o, e);
}
return o[a].exports;
}
for (var i = "function" == typeof __require && __require, a = 0; a < e.length; a++) n(e[a]);
return n;
}({
CTRefactorCTBAlgorithmGaohuibaoARGTrait: [ function(t, r, o) {
"use strict";
cc._RF.push(r, "6af13Aw3+VMQZf8WbO4UFxM", "CTRefactorCTBAlgorithmGaohuibaoARGTrait");
var e, n = this && this.__extends || (e = function(t, r) {
return (e = Object.setPrototypeOf || {
__proto__: []
} instanceof Array && function(t, r) {
t.__proto__ = r;
} || function(t, r) {
for (var o in r) Object.prototype.hasOwnProperty.call(r, o) && (t[o] = r[o]);
})(t, r);
}, function(t, r) {
e(t, r);
function o() {
this.constructor = t;
}
t.prototype = null === r ? Object.create(r) : (o.prototype = r.prototype, new o());
}), i = this && this.__decorate || function(t, r, o, e) {
var n, i = arguments.length, a = i < 3 ? r : null === e ? e = Object.getOwnPropertyDescriptor(r, o) : e;
if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) a = Reflect.decorate(t, r, o, e); else for (var c = t.length - 1; c >= 0; c--) (n = t[c]) && (a = (i < 3 ? n(a) : i > 3 ? n(r, o, a) : n(r, o)) || a);
return i > 3 && a && Object.defineProperty(r, o, a), a;
};
Object.defineProperty(o, "__esModule", {
value: !0
});
o.CTRefactorCTBAlgorithmGaohuibaoARGTrait = void 0;
var a = function(t) {
n(r, t);
function r() {
return null !== t && t.apply(this, arguments) || this;
}
r.prototype.data = function() {
return {
flow: null
};
};
r.prototype.onAlgorithmStrategySDKBetween = function(t) {
t.sdk.actualAlgorithmId == hs.OFFER_TYPE_DIFFICULTY.DIFFICULTY_GAOHUIBAO && as.AlgorithmStrategyAlgoActualNamePatch.patch([ hs.ALGO_NAME_TYPE.NAME_DIFFICULTY_GAOHUIBAO, hs.ALGO_NAME_TYPE.NAME_DIFFICULTY_GAOHUIBAO, hs.ALGO_NAME_TYPE.NAME_DIFFICULTY_GAOHUIBAO ], this);
};
return i([ classId("CTRefactorCTBAlgorithmGaohuibaoARGTrait") ], r);
}(Trait);
o.CTRefactorCTBAlgorithmGaohuibaoARGTrait = a;
cc._RF.pop();
}, {} ]
}, {}, [ "CTRefactorCTBAlgorithmGaohuibaoARGTrait" ]);
//# sourceMappingURL=index.js.map
