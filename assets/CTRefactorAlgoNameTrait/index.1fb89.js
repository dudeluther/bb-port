window.__require = function t(e, o, r) {
function a(s, i) {
if (!o[s]) {
if (!e[s]) {
var _ = s.split("/");
_ = _[_.length - 1];
if (!e[_]) {
var h = "function" == typeof __require && __require;
if (!i && h) return h(_, !0);
if (E) return E(_, !0);
throw new Error("Cannot find module '" + s + "'");
}
s = _;
}
var n = o[s] = {
exports: {}
};
e[s][0].call(n.exports, function(t) {
return a(e[s][1][t] || t);
}, n, n.exports, t, e, o, r);
}
return o[s].exports;
}
for (var E = "function" == typeof __require && __require, s = 0; s < r.length; s++) a(r[s]);
return a;
}({
CTRefactorAlgoNameTrait: [ function(t, e, o) {
"use strict";
cc._RF.push(e, "6f2eaWzrA1CzqdWNuWdoWXt", "CTRefactorAlgoNameTrait");
var r, a = this && this.__extends || (r = function(t, e) {
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
}), E = this && this.__decorate || function(t, e, o, r) {
var a, E = arguments.length, s = E < 3 ? e : null === r ? r = Object.getOwnPropertyDescriptor(e, o) : r;
if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) s = Reflect.decorate(t, e, o, r); else for (var i = t.length - 1; i >= 0; i--) (a = t[i]) && (s = (E < 3 ? a(s) : E > 3 ? a(e, o, s) : a(e, o)) || s);
return E > 3 && s && Object.defineProperty(e, o, s), s;
};
Object.defineProperty(o, "__esModule", {
value: !0
});
o.CTRefactorAlgoNameTrait = void 0;
var s = function(t) {
a(e, t);
function e() {
var e = null !== t && t.apply(this, arguments) || this;
e.TERMINATE_ALGORITHMS = [ hs.OFFER_TYPE_BASE.CLASSTERMINATE_CYCLE, hs.OFFER_TYPE_BASE.CHAPTERTERMINATE_CYCLE, hs.OFFER_TYPE_BASE.TERMINATE_REFRESH_SCORE_FIX ];
e.PRIORITY_ALGORITHMS = [ {
type: hs.OFFER_TYPE_BLANK.ALGO_MIX_TKXC,
name: "混合填空2"
}, {
type: hs.OFFER_TYPE_BLANK.ALGO_QUICK,
name: "快速填空"
}, {
type: hs.OFFER_TYPE_BLANK.ALGO_FILL_MORE_AREA,
name: "大面积填空"
}, {
type: hs.OFFER_TYPE_BASE.CLEAR_BOARD,
name: "清屏plus"
}, {
type: hs.OFFER_TYPE_DIFFICULTY.SIMPLE_ZHIJUE,
name: "简单直觉题"
}, {
type: hs.OFFER_TYPE_BASE.CLASSTERMINATE_CYCLE,
name: "终止刷分"
}, {
type: hs.OFFER_TYPE_BASE.TERMINATE_REFRESH_SCORE_FIX,
name: "终止刷分"
}, {
type: hs.OFFER_TYPE_BASE.INVALID_REMOVE_FIXED_GROUP,
name: "无效消除1"
}, {
type: hs.OFFER_TYPE_BASE.INVALID_REMOVE_LOOP_OUT_BLOCK,
name: "无效消除2"
}, {
type: hs.OFFER_TYPE_BASE.CHAPTERTERMINATE_CYCLE,
name: "终止刷分"
}, {
type: hs.OFFER_TYPE_DIFFICULTY.KUN_NAN_TI_HELP,
name: "死亡难题"
}, {
type: hs.OFFER_TYPE_DIFFICULTY.LINK_SMALL_BORDER_HELP,
name: "连续边数少难题"
}, {
type: hs.OFFER_TYPE_BASE.ELIMINTE_PLEASURE,
name: "消除爽"
}, {
type: hs.OFFER_TYPE_BLANK.STAY_IN_BLANK_FILL,
name: "滞留清除填空"
} ];
e.ALGORITHM_MAPPINGS = [ {
from: hs.OFFER_TYPE_BASE.SUI_JI,
to: hs.OFFER_TYPE_BASE.SUI_JI_WU_SI
}, {
from: hs.OFFER_TYPE_SHANG.SHANG_ZENG_1,
to: hs.OFFER_TYPE_SHANG.SHANG_ZENG_3
}, {
from: hs.OFFER_TYPE_DIFFICULTY.ZHI_JUE_NAN_TI,
to: hs.OFFER_TYPE_DIFFICULTY.KUN_NAN_TI
} ];
e.lastAlgoExpectedId = hs.OFFER_TYPE_BLANK.TIAN_KONG_XIAO_CHU;
return e;
}
e.prototype.data = function() {
return {
flow: null,
algoExpectedId: hs.OFFER_TYPE_BASE.NONE
};
};
e.prototype.onAlgorithmStrategyRoundInit = function() {
this.state.algoExpectedId = hs.OFFER_TYPE_BASE.NONE;
as.AlgorithmStrategyAlgoExpectedIdPatch.patch(hs.OFFER_TYPE_BASE.NONE, this);
};
e.prototype.onAlgorithmStrategyAlgorithmListChanged = function(t, e, o, r) {
var a;
if ("preprocess" == t) {
if (!(null === (a = TRAIT("IsOpenAlgoActualIdPatchTrait")) || void 0 === a ? void 0 : a.active) && "CTRefactorIsPuzzleTimeTrait" == r) return;
var E = o.filter(function(t) {
return "priority" !== t.algorithmListSource && t.dynamicSource !== hs.ClassAlgorithmSourceType.Priority && t.dynamicSource !== hs.ChapterAlgorithmSourceType.Priority;
});
if (E.length > 0 && this.state.algoExpectedId == hs.OFFER_TYPE_BASE.NONE) {
if (hs.gameInfo.gameMode == hs.GameMode.Class) {
var s = E.some(function(t) {
return t.source == hs.ClassAlgorithmSourceType.AlgoRevive || t.source == hs.ClassAlgorithmSourceType.AlgoReviveTrait;
});
this.state.algoExpectedId = s ? this.lastAlgoExpectedId : E[0].algorithmId;
} else if (hs.gameInfo.gameMode == hs.GameMode.Chapter) {
s = E.some(function(t) {
return t.source == hs.ChapterAlgorithmSourceType.TravelRevive || t.source == hs.ChapterAlgorithmSourceType.TravelReviveTrait;
});
var i = E.some(function(t) {
return t.source == hs.ChapterAlgorithmSourceType.TravelStage1 || t.source == hs.ChapterAlgorithmSourceType.TravelStage2_simple || t.source == hs.ChapterAlgorithmSourceType.TravelStage2_hard || t.source == hs.ChapterAlgorithmSourceType.TravelStage3;
}), _ = E.some(function(t) {
return "CTRefactorRatioAdjustTrait" == t.traitSource;
});
this.state.algoExpectedId = _ && i ? E[0].algorithmId : s ? this.lastAlgoExpectedId : E[0].algorithmId;
}
this.onDealCommon();
}
this.onDealTrait(E);
}
};
e.prototype.onAlgorithmStrategySDKBefore = function() {
this.lastAlgoExpectedId = this.state.algoExpectedId;
as.AlgorithmStrategyAlgoExpectedIdPatch.patch(this.state.algoExpectedId, this);
};
e.prototype.onAlgorithmStrategySDKBetween = function(t) {
this.handleAlgorithmDowngrade(t, hs.OFFER_TYPE_BASE.CLEAR_BOARD, "清屏plus");
this.handleAlgorithmDowngrade(t, hs.OFFER_TYPE_BASE.ELIMINTE_PLEASURE, "消除爽");
this.handleSimpleZhiJueDowngrade(t);
};
e.prototype.onPostprocessConditionContext = function(t) {
return buildLazyConditionContext({
currentFlow: function() {
return ASContext(t, "当前流程");
}
});
};
e.prototype.onPostprocessConditionOperators = function() {
var t = this;
return {
rewriteExpectedOnAfterOffer: function(e) {
t.onDealSuccessTraitBefore(e);
return !0;
}
};
};
e.prototype.onPostprocessConditions = function() {
return [ {
conditions: {
fact: "currentFlow",
operator: "rewriteExpectedOnAfterOffer",
value: !0
},
flow: "afterOfferExpectedRewrite",
platform: "gp",
gameMode: "class"
} ];
};
e.prototype.onPostprocessActions = function() {
return {
afterOfferExpectedRewrite: []
};
};
e.prototype.onAlgorithmStrategyPostprocessComplete = function(t) {
this.onDealSuccessTraitBefore(t);
};
e.prototype.handleAlgorithmDowngrade = function(t, e) {
var o = 3 != t.sdk.blockIds.length;
if (storage.getItem("classAlgoExpectedId", hs.OFFER_TYPE_BASE.NONE) == e && o) {
var r = t.algorithmFallbackList;
r.length > 0 ? this.state.algoExpectedId = r[0].algorithmId : this.state.algoExpectedId = hs.OFFER_TYPE_BLANK.TIAN_KONG_XIAO_CHU;
this.lastAlgoExpectedId = this.state.algoExpectedId;
as.AlgorithmStrategyAlgoExpectedIdPatch.patch(hs.OFFER_TYPE_BASE.NONE, this);
as.AlgorithmStrategyAlgoExpectedIdPatch.patch(this.state.algoExpectedId, this);
}
};
e.prototype.handleSimpleZhiJueDowngrade = function(t) {
if (storage.getItem("classAlgoExpectedId", hs.OFFER_TYPE_BASE.NONE) == hs.OFFER_TYPE_DIFFICULTY.SIMPLE_ZHIJUE && 3 == t.sdk.blockIds.length && "normal" == t.sdk.algorithmListSource) {
t.sdk.blockNames.includes(hs.ALGO_NAME_TYPE.NAME_SIMPLE_ZHIJUE) && as.AlgorithmStrategyAlgoActualNamePatch.patch([ hs.ALGO_NAME_TYPE.NAME_DIFFICULTY_GAOHUIBAO, hs.ALGO_NAME_TYPE.NAME_DIFFICULTY_GAOHUIBAO, hs.ALGO_NAME_TYPE.NAME_DIFFICULTY_GAOHUIBAO ], this);
(t.sdk.blockNames.includes("死亡难题") || t.sdk.blockNames.includes("困难难题")) && as.AlgorithmStrategyAlgoActualNamePatch.patch([ hs.ALGO_NAME_TYPE.NAME_SIMPLE_ZHIJUE, hs.ALGO_NAME_TYPE.NAME_SIMPLE_ZHIJUE, hs.ALGO_NAME_TYPE.NAME_SIMPLE_ZHIJUE ], this);
}
};
e.prototype.onDealSuccessTraitBefore = function() {
if (this.isTerminateAlgorithm(hs.algorithmName.algoExpectedId)) as.AlgorithmStrategyAlgoActualNamePatch.patch([ "终止刷分", "终止刷分", "终止刷分" ], this); else if (hs.algorithmName.algoActualId == hs.OFFER_TYPE.LINK_SMALL_BORDER) {
this.lastAlgoExpectedId = hs.OFFER_TYPE_DIFFICULTY.LINK_SMALL_BORDER;
as.AlgorithmStrategyAlgoExpectedIdPatch.patch(hs.OFFER_TYPE_BASE.NONE, this);
as.AlgorithmStrategyAlgoExpectedIdPatch.patch(hs.OFFER_TYPE_DIFFICULTY.LINK_SMALL_BORDER, this);
} else if (hs.algorithmName.algoActualId == hs.OFFER_TYPE.ALGO_FILL_MORE_AREA) {
this.lastAlgoExpectedId = hs.OFFER_TYPE_BLANK.ALGO_FILL_MORE_AREA;
as.AlgorithmStrategyAlgoExpectedIdPatch.patch(hs.OFFER_TYPE_BASE.NONE, this);
as.AlgorithmStrategyAlgoExpectedIdPatch.patch(hs.OFFER_TYPE_BLANK.ALGO_FILL_MORE_AREA, this);
} else if (hs.algorithmName.algoExpectedId == hs.OFFER_TYPE.ZHI_SI_TI || hs.algorithmName.algoActualId == hs.OFFER_TYPE.ZHI_SI_TI) {
this.lastAlgoExpectedId = hs.OFFER_TYPE_DIE.ZHI_SI_TI;
as.AlgorithmStrategyAlgoExpectedIdPatch.patch(hs.OFFER_TYPE_BASE.NONE, this);
as.AlgorithmStrategyAlgoExpectedIdPatch.patch(hs.OFFER_TYPE_DIE.ZHI_SI_TI, this);
}
};
e.prototype.isTerminateAlgorithm = function(t) {
return this.TERMINATE_ALGORITHMS.includes(t);
};
e.prototype.onDealCommon = function() {
var t = this, e = this.ALGORITHM_MAPPINGS.find(function(e) {
return e.from === t.state.algoExpectedId;
});
e && (this.state.algoExpectedId = e.to);
};
e.prototype.onDealTrait = function(t) {
if (t.length > 0 && this.state.algoExpectedId != hs.OFFER_TYPE_BASE.NONE) {
var e = t[0].algorithmId, o = this.PRIORITY_ALGORITHMS.find(function(t) {
return t.type === e;
});
o && (this.state.algoExpectedId = o.type);
}
};
return E([ classId("CTRefactorAlgoNameTrait") ], e);
}(Trait);
o.CTRefactorAlgoNameTrait = s;
cc._RF.pop();
}, {} ]
}, {}, [ "CTRefactorAlgoNameTrait" ]);
//# sourceMappingURL=index.js.map
