window.__require = function t(r, e, o) {
function i(a, c) {
if (!e[a]) {
if (!r[a]) {
var l = a.split("/");
l = l[l.length - 1];
if (!r[l]) {
var s = "function" == typeof __require && __require;
if (!c && s) return s(l, !0);
if (n) return n(l, !0);
throw new Error("Cannot find module '" + a + "'");
}
a = l;
}
var u = e[a] = {
exports: {}
};
r[a][0].call(u.exports, function(t) {
return i(r[a][1][t] || t);
}, u, u.exports, t, r, e, o);
}
return e[a].exports;
}
for (var n = "function" == typeof __require && __require, a = 0; a < o.length; a++) i(o[a]);
return i;
}({
CTRefactorAlgoPriorityTrait: [ function(t, r, e) {
"use strict";
cc._RF.push(r, "27e1eDSdu5HpaEeNGMKGJdE", "CTRefactorAlgoPriorityTrait");
var o, i = this && this.__extends || (o = function(t, r) {
return (o = Object.setPrototypeOf || {
__proto__: []
} instanceof Array && function(t, r) {
t.__proto__ = r;
} || function(t, r) {
for (var e in r) Object.prototype.hasOwnProperty.call(r, e) && (t[e] = r[e]);
})(t, r);
}, function(t, r) {
o(t, r);
function e() {
this.constructor = t;
}
t.prototype = null === r ? Object.create(r) : (e.prototype = r.prototype, new e());
}), n = this && this.__decorate || function(t, r, e, o) {
var i, n = arguments.length, a = n < 3 ? r : null === o ? o = Object.getOwnPropertyDescriptor(r, e) : o;
if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) a = Reflect.decorate(t, r, e, o); else for (var c = t.length - 1; c >= 0; c--) (i = t[c]) && (a = (n < 3 ? i(a) : n > 3 ? i(r, e, a) : i(r, e)) || a);
return n > 3 && a && Object.defineProperty(r, e, a), a;
};
Object.defineProperty(e, "__esModule", {
value: !0
});
e.CTRefactorAlgoPriorityTrait = void 0;
var a = function(t) {
i(r, t);
function r() {
return null !== t && t.apply(this, arguments) || this;
}
r.prototype.onAlgorithmStrategySDKBetween = function(t) {
var r, e, o, i = (null === (r = t.sdk) || void 0 === r ? void 0 : r.SDK_SUCCESS) || !1, n = "priority" === (null === (e = t.sdk) || void 0 === e ? void 0 : e.algorithmListSource), a = null === (o = t.sdk) || void 0 === o ? void 0 : o.actualAlgorithmId_SDK_REQUEST_BEFORE_Patch;
if (i && n && a !== hs.OFFER_TYPE_BASE.NONE) {
as.AlgorithmStrategyAlgoExpectedIdPatch.patch(hs.OFFER_TYPE_BASE.NONE, this);
as.AlgorithmStrategyAlgoExpectedIdPatch.patch(a, this);
hs.algorithmStrategyRefactoredInfo.setPriorityStrategySuccessed(!0);
var c = hs.gameInfo.gameMode === hs.GameMode.Chapter ? hs.ChapterAlgorithmSourceType.Priority : hs.ClassAlgorithmSourceType.Priority;
hs.algorithmStrategyLevelRefactoredInfo.setAlgorithmSourceLevel1(c);
as.AlgorithmStrategyPreprocessShareSequenceSourcePatch.patch(c, this);
}
};
return n([ classId("CTRefactorAlgoPriorityTrait") ], r);
}(Trait);
e.CTRefactorAlgoPriorityTrait = a;
cc._RF.pop();
}, {} ]
}, {}, [ "CTRefactorAlgoPriorityTrait" ]);
//# sourceMappingURL=index.js.map
