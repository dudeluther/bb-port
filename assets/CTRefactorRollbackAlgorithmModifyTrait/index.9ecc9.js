window.__require = function t(r, e, o) {
function a(l, c) {
if (!e[l]) {
if (!r[l]) {
var n = l.split("/");
n = n[n.length - 1];
if (!r[n]) {
var p = "function" == typeof __require && __require;
if (!c && p) return p(n, !0);
if (i) return i(n, !0);
throw new Error("Cannot find module '" + l + "'");
}
l = n;
}
var h = e[l] = {
exports: {}
};
r[l][0].call(h.exports, function(t) {
return a(r[l][1][t] || t);
}, h, h.exports, t, r, e, o);
}
return e[l].exports;
}
for (var i = "function" == typeof __require && __require, l = 0; l < o.length; l++) a(o[l]);
return a;
}({
CTRefactorRollbackAlgorithmModifyTrait: [ function(t, r, e) {
"use strict";
cc._RF.push(r, "0c2cbU5YQBA67vmuIyWI1Ks", "CTRefactorRollbackAlgorithmModifyTrait");
var o, a = this && this.__extends || (o = function(t, r) {
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
}), i = this && this.__decorate || function(t, r, e, o) {
var a, i = arguments.length, l = i < 3 ? r : null === o ? o = Object.getOwnPropertyDescriptor(r, e) : o;
if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) l = Reflect.decorate(t, r, e, o); else for (var c = t.length - 1; c >= 0; c--) (a = t[c]) && (l = (i < 3 ? a(l) : i > 3 ? a(r, e, l) : a(r, e)) || l);
return i > 3 && l && Object.defineProperty(r, e, l), l;
}, l = this && this.__read || function(t, r) {
var e = "function" == typeof Symbol && t[Symbol.iterator];
if (!e) return t;
var o, a, i = e.call(t), l = [];
try {
for (;(void 0 === r || r-- > 0) && !(o = i.next()).done; ) l.push(o.value);
} catch (t) {
a = {
error: t
};
} finally {
try {
o && !o.done && (e = i.return) && e.call(i);
} finally {
if (a) throw a.error;
}
}
return l;
}, c = this && this.__spread || function() {
for (var t = [], r = 0; r < arguments.length; r++) t = t.concat(l(arguments[r]));
return t;
};
Object.defineProperty(e, "__esModule", {
value: !0
});
e.CTRefactorRollbackAlgorithmModifyTrait = void 0;
var n = function(t) {
a(r, t);
function r() {
var r = null !== t && t.apply(this, arguments) || this;
r._isOfferTravelHappyOver = !1;
return r;
}
e = r;
r.prototype.onAlgorithmStrategyRoundInit = function() {
this._isOfferTravelHappyOver = !1;
};
r.prototype.onAlgorithmStrategyPreprocessComplete = function(t) {
this._isOfferTravelHappyOver = this.detectTravelHappyOverOffer(t);
this.applyRollbackAlgorithmPatch(t);
};
r.prototype.onAlgorithmStrategyPostprocessComplete = function(t) {
this.applyRollbackAlgorithmPatch(t);
this._isOfferTravelHappyOver = !1;
};
r.prototype.applyRollbackAlgorithmPatch = function(t) {
var r, e = t.sdk;
if (3 === (null === (r = e.blockIds) || void 0 === r ? void 0 : r.length)) {
this.patchTravelBlankToNormalBlank(e);
this.patchDeathFallbackExpectedId(t, e);
this.patchTravelHappyOverHardName(e);
}
};
r.prototype.detectTravelHappyOverOffer = function(t) {
for (var r, e, o, a = null !== (r = t.algorithmList) && void 0 !== r ? r : [], i = 0; i < a.length; i++) if (this.isTravelHappyOverTraitSource(null === (e = a[i]) || void 0 === e ? void 0 : e.traitSource)) return !0;
return this.isTravelHappyOverTraitSource(null === (o = t.sdk) || void 0 === o ? void 0 : o.traitSource);
};
r.prototype.isTravelHappyOverTraitSource = function(t) {
return "CTRefactorTravelHappyOverTrait" === t;
};
r.prototype.patchTravelBlankToNormalBlank = function(t) {
if (hs.algorithmName.algoExpectedId === hs.OFFER_TYPE.TRAVEL_TIAN_KONG_XIAO_CHU && this.isNormalOfferSource(t)) {
var r = this.replaceTravelBlankName(t.blockNames);
as.AlgorithmStrategyAlgoActualNamePatch.patch(r, this);
this.patchExpectedId(hs.OFFER_TYPE_BLANK.TIAN_KONG_XIAO_CHU);
as.AlgorithmStrategyAlgoSdkRequestBeforeActualIdPatch.patch(hs.OFFER_TYPE.TIAN_KONG_XIAO_CHU, this);
}
};
r.prototype.isNormalOfferSource = function(t) {
return "normal" === t.algorithmListSource && !this.isPriorityOfferSource(t);
};
r.prototype.isPriorityOfferSource = function(t) {
return t.source === hs.ChapterAlgorithmSourceType.Priority || hs.algorithmStrategyLevelRefactoredInfo.algorithmSourceLevel1 === hs.ChapterAlgorithmSourceType.Priority;
};
r.prototype.patchDeathFallbackExpectedId = function(t, r) {
var e, o, a = (null === (o = null === (e = t.algorithmList) || void 0 === e ? void 0 : e[0]) || void 0 === o ? void 0 : o.algorithmId) === hs.OFFER_TYPE_DIE.SI_WANG, i = "fallback" === r.algorithmListSource;
a && i && this.patchExpectedId(hs.OFFER_TYPE_BASE.SUI_JI_WU_SI);
};
r.prototype.patchTravelHappyOverHardName = function(t) {
var r = this.isTravelHappyOverTraitSource(t.traitSource);
if (this._isOfferTravelHappyOver || r) {
var o = t.actualAlgorithmId;
e.TRAVEL_HAPPY_OVER_HARD_IDS.includes(o) && as.AlgorithmStrategyAlgoActualNamePatch.patch([ hs.ALGO_NAME_TYPE.NAME_KUN_NAN_TI, hs.ALGO_NAME_TYPE.NAME_KUN_NAN_TI, hs.ALGO_NAME_TYPE.NAME_KUN_NAN_TI ], this);
}
};
r.prototype.replaceTravelBlankName = function(t) {
return (Array.isArray(t) && t.length > 0 ? c(t) : c(hs.algorithmName.algoActualName)).map(function(t) {
return t === hs.ALGO_NAME_TYPE.NAME_TRAVEL_BLANK ? hs.ALGO_NAME_TYPE.NAME_BLANK : t;
});
};
r.prototype.patchExpectedId = function(t) {
as.AlgorithmStrategyAlgoExpectedIdPatch.patch(hs.OFFER_TYPE_BASE.NONE, this);
as.AlgorithmStrategyAlgoExpectedIdPatch.patch(t, this);
};
var e;
r.TRAVEL_HAPPY_OVER_HARD_IDS = [ hs.OFFER_TYPE.HEJI_KUN_NAN_TI, hs.OFFER_TYPE.HEJI_ALGORITHMENTROPY, hs.OFFER_TYPE.HEJI_ALGORITHMENTROPYMORECLEAR, hs.OFFER_TYPE.HEJI_ALGODIFFSPREAD1, hs.OFFER_TYPE.HEJI_ALGODIFFSPREAD2 ];
return e = i([ classId("CTRefactorRollbackAlgorithmModifyTrait") ], r);
}(Trait);
e.CTRefactorRollbackAlgorithmModifyTrait = n;
cc._RF.pop();
}, {} ]
}, {}, [ "CTRefactorRollbackAlgorithmModifyTrait" ]);
//# sourceMappingURL=index.js.map
