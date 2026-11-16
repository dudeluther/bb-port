window.__require = function t(e, o, r) {
function s(_, n) {
if (!o[_]) {
if (!e[_]) {
var a = _.split("/");
a = a[a.length - 1];
if (!e[a]) {
var R = "function" == typeof __require && __require;
if (!n && R) return R(a, !0);
if (i) return i(a, !0);
throw new Error("Cannot find module '" + _ + "'");
}
_ = a;
}
var E = o[_] = {
exports: {}
};
e[_][0].call(E.exports, function(t) {
return s(e[_][1][t] || t);
}, E, E.exports, t, e, o, r);
}
return o[_].exports;
}
for (var i = "function" == typeof __require && __require, _ = 0; _ < r.length; _++) s(r[_]);
return s;
}({
$5784_f_HistoryBoardOfferBlockTrait: [ function(t, e, o) {
"use strict";
cc._RF.push(e, "774a2onwvlA74E58Wp06BF+", "$5784_f_HistoryBoardOfferBlockTrait");
var r, s = this && this.__extends || (r = function(t, e) {
return (r = Object.setPrototypeOf || {
__proto__: []
} instanceof Array && function(t, e) {
t.__proto__ = e;
} || function(t, e) {
for (var o in e) Object.prototype.hasOwnProperty.call(e, o) && (t[o] = e[o]);
})(t, e);
}, function(t, e) {
r(t, e);
function o() {
this.constructor = t;
}
t.prototype = null === e ? Object.create(e) : (o.prototype = e.prototype, new o());
}), i = this && this.__decorate || function(t, e, o, r) {
var s, i = arguments.length, _ = i < 3 ? e : null === r ? r = Object.getOwnPropertyDescriptor(e, o) : r;
if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) _ = Reflect.decorate(t, e, o, r); else for (var n = t.length - 1; n >= 0; n--) (s = t[n]) && (_ = (i < 3 ? s(_) : i > 3 ? s(e, o, _) : s(e, o)) || _);
return i > 3 && _ && Object.defineProperty(e, o, _), _;
};
Object.defineProperty(o, "__esModule", {
value: !0
});
o.$5784_f_HistoryBoardOfferBlockTrait = void 0;
var _ = function(t) {
s(e, t);
function e() {
var e = null !== t && t.apply(this, arguments) || this;
e.isLoaded = !1;
e.noUseStringsList = [ hs.OFFER_TYPE_STRINGS[hs.OFFER_TYPE.CLEAR_BOARD], hs.OFFER_TYPE_STRINGS[hs.OFFER_TYPE.HISTORY_CLEAR_BOARD], hs.OFFER_TYPE_STRINGS[hs.OFFER_TYPE.CLASSTERMINATE_CYCLE], hs.OFFER_TYPE_STRINGS[hs.OFFER_TYPE.CHAPTERTERMINATE_CYCLE], hs.OFFER_TYPE_STRINGS[hs.OFFER_TYPE.TERMINATE_REFRESH_SCORE_FIX] ];
return e;
}
e.prototype.onCreate = function() {
this.loadConfig();
};
e.prototype.onActive = function(t) {
if (hs.tpManual.isClassAlgorithmBottomSequenceInfoTriggerAfterOfferAlgo(t)) {
if ((e = hs.OFFER_TYPE_STRINGS[hs.algorithmName.algoExpectedId]) === hs.OFFER_TYPE_STRINGS[hs.OFFER_TYPE.HISTORY_CLEAR_BOARD] || e === hs.OFFER_TYPE_STRINGS[hs.OFFER_TYPE.CLEAR_BOARD]) return;
if (!this.isLoaded) return;
hs.algorithmBottomSequenceInfo.setAlgorithmAfterList([ hs.OFFER_TYPE.ALGO_HISTORY_MORE_CLEAR ]);
}
if (hs.tpManual.isChapterAlgorithmBottomSequenceInfoTriggerBottomOfferAlgo(t)) {
var e;
if ((e = hs.OFFER_TYPE_STRINGS[hs.algorithmName.algoExpectedId]) === hs.OFFER_TYPE_STRINGS[hs.OFFER_TYPE.HISTORY_CLEAR_BOARD] || e === hs.OFFER_TYPE_STRINGS[hs.OFFER_TYPE.CLEAR_BOARD]) return;
if (!this.isLoaded) return;
hs.algorithmBottomSequenceInfo.setAlgorithmBottomList([ hs.OFFER_TYPE.ALGO_HISTORY_MORE_CLEAR ]);
}
if (hs.tpManual.isChapterAlgorithmBottomSequenceInfoOnDisableBottomOfferAlgo(t) || hs.tpManual.isClassAlgorithmBottomSequenceInfoOnDisableAfterAlgo(t)) {
var o = t.args[0];
o && o.callReturnValue && hs.algorithmName.forceSetAlgoExpectedId(hs.OFFER_TYPE.ALGO_HISTORY_MORE_CLEAR);
}
if (hs.tp.isClassAlgorithmProcessInfoBottomOffer(t) || hs.tp.isChapterAlgorithmProcessInfoBottomOffer(t)) {
if (!this.isLoaded) return;
var r = hs.OFFER_TYPE_STRINGS[hs.OFFER_TYPE.CLEAR_BOARD], s = hs.OFFER_TYPE_STRINGS[hs.OFFER_TYPE.HISTORY_CLEAR_BOARD];
if (hs.algorithmName.algoActualName.includes(r) || hs.algorithmName.algoActualName.includes(s)) return;
if (this.noUseStringsList.some(function(t) {
return hs.algorithmName.algoActualName.includes(t);
})) return;
var i = t.args[0] || [];
i.push(hs.OFFER_TYPE.ALGO_HISTORY_MORE_CLEAR);
t.args[0] = i;
}
hs.tp.isAlgorithmLifeCycle_GameInit_ProxyOnGameInitComplete(t) && this.loadConfig();
};
e.prototype.isClassAlgorithmBottomSequenceGPInfoTriggerAfterOfferAlgo = function() {
var t = TRAIT("NewBottomOfferReverseModifyTrait");
if (null != t && t.active && 1 === t.version) {
var e = hs.OFFER_TYPE_STRINGS[hs.algorithmName.algoExpectedId];
e !== hs.OFFER_TYPE_STRINGS[hs.OFFER_TYPE.HISTORY_CLEAR_BOARD] && e !== hs.OFFER_TYPE_STRINGS[hs.OFFER_TYPE.CLEAR_BOARD] && this.isLoaded && hs.algorithmBottomSequenceInfo.setAlgorithmAfterList([ hs.OFFER_TYPE.ALGO_HISTORY_MORE_CLEAR ]);
}
};
e.prototype.isChapterAlgorithmBottomSequenceGPInfoTriggerBottomOfferAlgo = function() {
var t = TRAIT("NewBottomOfferReverseModifyTrait");
if (null != t && t.active && 1 === t.version) {
var e = hs.OFFER_TYPE_STRINGS[hs.algorithmName.algoExpectedId];
e !== hs.OFFER_TYPE_STRINGS[hs.OFFER_TYPE.HISTORY_CLEAR_BOARD] && e !== hs.OFFER_TYPE_STRINGS[hs.OFFER_TYPE.CLEAR_BOARD] && this.isLoaded && hs.algorithmBottomSequenceInfo.setAlgorithmBottomList([ hs.OFFER_TYPE.ALGO_HISTORY_MORE_CLEAR ]);
}
};
e.prototype.loadConfig = function() {
var t = this;
this.isLoaded || hs.ResLoader.loadByBundle("$5784_f_HistoryBoardOfferBlockTrait", "config/boardBlock", cc.JsonAsset, function(e, o) {
if (e) ; else {
var r = o.json;
hs.PuzzleUtil.setConfig({
historyMoreClearJson: r
});
t.isLoaded = !0;
}
});
};
i([ hs.Algorithm() ], e.prototype, "onActive", null);
return i([ classId("$5784_f_HistoryBoardOfferBlockTrait") ], e);
}(Trait);
o.$5784_f_HistoryBoardOfferBlockTrait = _;
cc._RF.pop();
}, {} ]
}, {}, [ "$5784_f_HistoryBoardOfferBlockTrait" ]);
//# sourceMappingURL=index.js.map
