window.__require = function t(e, o, r) {
function i(n, a) {
if (!o[n]) {
if (!e[n]) {
var l = n.split("/");
l = l[l.length - 1];
if (!e[l]) {
var c = "function" == typeof __require && __require;
if (!a && c) return c(l, !0);
if (s) return s(l, !0);
throw new Error("Cannot find module '" + n + "'");
}
n = l;
}
var _ = o[n] = {
exports: {}
};
e[n][0].call(_.exports, function(t) {
return i(e[n][1][t] || t);
}, _, _.exports, t, e, o, r);
}
return o[n].exports;
}
for (var s = "function" == typeof __require && __require, n = 0; n < r.length; n++) i(r[n]);
return i;
}({
CTRefactorFillClearTopicTrait: [ function(t, e, o) {
"use strict";
cc._RF.push(e, "46a62XdPsdJCpF3YIUngDLa", "CTRefactorFillClearTopicTrait");
var r, i = this && this.__extends || (r = function(t, e) {
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
}), s = this && this.__decorate || function(t, e, o, r) {
var i, s = arguments.length, n = s < 3 ? e : null === r ? r = Object.getOwnPropertyDescriptor(e, o) : r;
if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) n = Reflect.decorate(t, e, o, r); else for (var a = t.length - 1; a >= 0; a--) (i = t[a]) && (n = (s < 3 ? i(n) : s > 3 ? i(e, o, n) : i(e, o)) || n);
return s > 3 && n && Object.defineProperty(e, o, n), n;
};
Object.defineProperty(o, "__esModule", {
value: !0
});
o.CTRefactorFillClearTopicTrait = void 0;
var n = function(t) {
i(e, t);
function e() {
return null !== t && t.apply(this, arguments) || this;
}
e.prototype.isCTRefactorContinueSameMoreRoundLimitTraitOnSimulateMiddleSort = function(t) {
this.onMiddleSort(t);
};
e.prototype.onMiddleSort = function(t) {
var e = TRAIT("CTPlacementOrderPredictTrait");
if ((null == e ? void 0 : e.active) && e.isOrderAdjusted) ; else if (3 === hs.algorithmInfo.blockIdList.length) if (this.isRecoverBlockSortActive()) {
if (this.checkRecoverBlockSortConditionOld()) {
hs.algorithmStrategyBlocksPosRefactoredInfo.adjustBlocksPosList(this.order);
hs.algorithmStrategyBlocksPosRefactoredInfo.setBlocksPosList(hs.OPERA_POS_TYPE.MIDDLE);
t.replace = !0;
}
} else if (this.isBlockPosValidOld()) {
hs.algorithmStrategyBlocksPosRefactoredInfo.adjustBlocksPosList(this.order);
hs.algorithmStrategyBlocksPosRefactoredInfo.setBlocksPosList(hs.OPERA_POS_TYPE.MIDDLE);
t.replace = !0;
}
};
e.prototype.checkRecoverBlockSortConditionOld = function() {
var t = [ hs.OFFER_TYPE.TIAN_KONG_XIAO_CHU, hs.OFFER_TYPE.EMPTYDONGFILL, hs.OFFER_TYPE.REVIVE, hs.OFFER_TYPE.CLEAR_BOARD, hs.OFFER_TYPE.CLASSTERMINATE_CYCLE, hs.OFFER_TYPE.ALGO_QUICK, hs.OFFER_TYPE.ALGO_MIX_TKXC, hs.OFFER_TYPE.TERMINATE_REFRESH_SCORE_FIX ], e = TRAIT("Fix129codelostTrait");
(null == e ? void 0 : e.active) && (t = [ hs.OFFER_TYPE.TIAN_KONG_XIAO_CHU, hs.OFFER_TYPE.EMPTYDONGFILL, hs.OFFER_TYPE.ALGO_QUICK, hs.OFFER_TYPE.ALGO_MIX_TKXC ]);
return -1 !== t.indexOf(this.downgradeActualIdByBlockNames(hs.algorithmName.algoActualId));
};
e.prototype.downgradeActualIdByBlockNames = function(t) {
var e = hs.algorithmName.algoActualName;
return e.every(function(t) {
return t === hs.ALGO_NAME_TYPE.NAME_RANDOM;
}) ? hs.OFFER_TYPE.SUI_JI : e.every(function(t) {
return t === hs.ALGO_NAME_TYPE.NAME_NODIE;
}) ? hs.OFFER_TYPE.SUI_JI_WU_SI : t;
};
e.prototype.isBlockPosValidOld = function() {
var t = TRAIT("FixContinueSameMoreRoundLimitTrait"), e = this.downgradeActualIdByBlockNames(hs.algorithmName.algoActualId);
if (null == t ? void 0 : t.active) {
if (hs.isValueInEnum(e, hs.OFFER_TYPE_BLANK) && e !== hs.OFFER_TYPE.TRAVEL_TIAN_KONG_XIAO_CHU && e !== hs.OFFER_TYPE.ALL_COMBINATION_ID9 && e !== hs.OFFER_TYPE.ALL_COMBINATION_ID21 && e !== hs.OFFER_TYPE.ALL_COMBINATION_ID70) return !0;
} else if (hs.isValueInEnum(e, hs.OFFER_TYPE_BLANK) && e !== hs.OFFER_TYPE.TRAVEL_TIAN_KONG_XIAO_CHU) return !0;
return !1;
};
Object.defineProperty(e.prototype, "order", {
get: function() {
return hs.traitConfigSafePropsInfo.getSafePropValueByKey("FillClearTopicTrait", "order", this.props, hs.operaPosMiddle);
},
enumerable: !1,
configurable: !0
});
e.prototype.isRecoverBlockSortActive = function() {
var t, e = TRAIT("RecoverBlockSortTrait");
return null !== (t = null == e ? void 0 : e.active) && void 0 !== t && t;
};
e.prototype.checkRecoverBlockSortCondition = function(t) {
var e, o, r, i = null !== (o = null === (e = null == t ? void 0 : t.sdk) || void 0 === e ? void 0 : e.actualAlgorithmId_SDK_REQUEST_BEFORE_Patch) && void 0 !== o ? o : null === (r = null == t ? void 0 : t.sdk) || void 0 === r ? void 0 : r.actualAlgorithmId;
if (void 0 === i) return !1;
var s = [ hs.OFFER_TYPE.TIAN_KONG_XIAO_CHU, hs.OFFER_TYPE.EMPTYDONGFILL, hs.OFFER_TYPE.REVIVE, hs.OFFER_TYPE.CLEAR_BOARD, hs.OFFER_TYPE.CLASSTERMINATE_CYCLE, hs.OFFER_TYPE.ALGO_QUICK, hs.OFFER_TYPE.ALGO_MIX_TKXC, hs.OFFER_TYPE.TERMINATE_REFRESH_SCORE_FIX ], n = TRAIT("Fix129codelostTrait");
(null == n ? void 0 : n.active) && (s = [ hs.OFFER_TYPE.TIAN_KONG_XIAO_CHU, hs.OFFER_TYPE.EMPTYDONGFILL, hs.OFFER_TYPE.ALGO_QUICK, hs.OFFER_TYPE.ALGO_MIX_TKXC ]);
return -1 !== s.indexOf(this.downgradeActualIdByBlockNames(i));
};
e.prototype.isBlockPosValid = function() {
var t = hs.algorithmName.algoActualId;
if (void 0 === t) return !1;
var e = TRAIT("FixContinueSameMoreRoundLimitTrait"), o = this.downgradeActualIdByBlockNames(t);
if (null == e ? void 0 : e.active) {
if (hs.isValueInEnum(o, hs.OFFER_TYPE_BLANK) && o !== hs.OFFER_TYPE.TRAVEL_TIAN_KONG_XIAO_CHU && o !== hs.OFFER_TYPE.ALL_COMBINATION_ID9 && o !== hs.OFFER_TYPE.ALL_COMBINATION_ID21 && o !== hs.OFFER_TYPE.ALL_COMBINATION_ID70) return !0;
} else if (hs.isValueInEnum(o, hs.OFFER_TYPE_BLANK) && o !== hs.OFFER_TYPE.TRAVEL_TIAN_KONG_XIAO_CHU) return !0;
return !1;
};
e.prototype.getPositionTypeByOrder = function(t) {
switch (t.join(",")) {
case "0,1,2":
return hs.AlgorithmStrategyPositionType.LEFT;

case "2,0,1":
return hs.AlgorithmStrategyPositionType.MIDDLE;

case "2,1,0":
return hs.AlgorithmStrategyPositionType.RIGHT;

case "1,2,0":
return hs.AlgorithmStrategyPositionType.MIDDLE_LEFT;

case "1,0,2":
return hs.AlgorithmStrategyPositionType.RIGHT_LEFT;

case "0,2,1":
return hs.AlgorithmStrategyPositionType.LEFT_RIGHT;

default:
return hs.AlgorithmStrategyPositionType.MIDDLE;
}
};
e.prototype.onAlgorithmStrategyPositionAdjust = function(t) {
var e = TRAIT("CTPlacementOrderPredictTrait");
if ((null == e ? void 0 : e.active) && e.isOrderAdjusted) ; else if (3 === hs.algorithmInfo.blockIdList.length) if (this.isRecoverBlockSortActive()) {
if (this.checkRecoverBlockSortCondition(t)) {
hs.algorithmStrategyBlocksPosRefactoredInfo.setBlocksPosList(hs.OPERA_POS_TYPE.MIDDLE);
return {
data: this.getPositionTypeByOrder(this.order),
disableTraits: [ "CTRefactorBasePositionAdjustTrait" ]
};
}
} else if (this.isBlockPosValid(t)) {
hs.algorithmStrategyBlocksPosRefactoredInfo.setBlocksPosList(hs.OPERA_POS_TYPE.MIDDLE);
return {
data: this.getPositionTypeByOrder(this.order),
disableTraits: [ "CTRefactorBasePositionAdjustTrait" ]
};
}
};
return s([ classId("CTRefactorFillClearTopicTrait") ], e);
}(Trait);
o.CTRefactorFillClearTopicTrait = n;
cc._RF.pop();
}, {} ]
}, {}, [ "CTRefactorFillClearTopicTrait" ]);
//# sourceMappingURL=index.js.map
