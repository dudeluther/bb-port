window.__require = function t(e, r, a) {
function o(i, p) {
if (!r[i]) {
if (!e[i]) {
var c = i.split("/");
c = c[c.length - 1];
if (!e[c]) {
var n = "function" == typeof __require && __require;
if (!p && n) return n(c, !0);
if (l) return l(c, !0);
throw new Error("Cannot find module '" + i + "'");
}
i = c;
}
var g = r[i] = {
exports: {}
};
e[i][0].call(g.exports, function(t) {
return o(e[i][1][t] || t);
}, g, g.exports, t, e, r, a);
}
return r[i].exports;
}
for (var l = "function" == typeof __require && __require, i = 0; i < a.length; i++) o(a[i]);
return o;
}({
CTRefactorRatioAdjustTrait: [ function(t, e, r) {
"use strict";
cc._RF.push(e, "c9cecnls4VIloC8eKNiX8Yx", "CTRefactorRatioAdjustTrait");
var a, o = this && this.__extends || (a = function(t, e) {
return (a = Object.setPrototypeOf || {
__proto__: []
} instanceof Array && function(t, e) {
t.__proto__ = e;
} || function(t, e) {
for (var r in e) Object.prototype.hasOwnProperty.call(e, r) && (t[r] = e[r]);
})(t, e);
}, function(t, e) {
a(t, e);
function r() {
this.constructor = t;
}
t.prototype = null === e ? Object.create(e) : (r.prototype = e.prototype, new r());
}), l = this && this.__decorate || function(t, e, r, a) {
var o, l = arguments.length, i = l < 3 ? e : null === a ? a = Object.getOwnPropertyDescriptor(e, r) : a;
if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) i = Reflect.decorate(t, e, r, a); else for (var p = t.length - 1; p >= 0; p--) (o = t[p]) && (i = (l < 3 ? o(i) : l > 3 ? o(e, r, i) : o(e, r)) || i);
return l > 3 && i && Object.defineProperty(e, r, i), i;
};
Object.defineProperty(r, "__esModule", {
value: !0
});
r.CTRefactorRatioAdjustTrait = void 0;
var i = function(t) {
o(e, t);
function e() {
var e = null !== t && t.apply(this, arguments) || this;
e.randomNum = 0;
return e;
}
e.prototype.onAlgorithmStrategyGameInit = function(t) {
if ("preprocessAlgorithmData" === t) {
var e = TRAIT("CTRefactorChapterAlgoStrategyTrait");
(null == e ? void 0 : e.active) && e.setState({
ratioArr: [ .5, .75 ]
});
}
};
e.prototype.onAlgorithmStrategyRoundInit = function() {
this.randomNum = Math.floor(10 * Math.random());
};
e.prototype.logRandomNum = function() {
var t, e, r, a, o = hs.chapterGameInfo.chapterNum, l = (hs.chapterDifficultyInfo.getChapterDifficultyByChapterNum(o), 
TRAIT("CTRefactorChapterAlgoStrategyTrait"));
hs.chapterConfigInfo.getChapterProgress(), null === (e = null === (t = null == l ? void 0 : l.state) || void 0 === t ? void 0 : t.ratioArr) || void 0 === e ? void 0 : e[0], 
null === (a = null === (r = null == l ? void 0 : l.state) || void 0 === r ? void 0 : r.ratioArr) || void 0 === a ? void 0 : a[1];
};
e.prototype.getDifficultyName = function(t) {
return hs.chapterDifficultyInfo.isChapterSimple(t) ? "简单" : hs.chapterDifficultyInfo.isChapterMedium(t) ? "中等" : "困难";
};
e.prototype.getStageName = function(t, e, r) {
return t <= e ? "1段（第一段）" : t <= r ? "2段（第二段）" : "3段（第三段）";
};
e.prototype.onAlgorithmStrategySDKBetween = function() {
if (hs.algorithmStrategyLevelRefactoredInfo.algorithmSourceLevel1 === hs.ChapterAlgorithmSourceType.RatoChapter) {
as.AlgorithmStrategyAlgoExpectedIdPatch.patch(hs.OFFER_TYPE_BASE.NONE, this);
as.AlgorithmStrategyAlgoExpectedIdPatch.patch(hs.OFFER_TYPE_BASE.SUI_JI_WU_SI, this);
}
};
e.prototype.hasRatoChapterInList = function(t) {
return t.some(function(t) {
return t.dynamicSource === hs.ChapterAlgorithmSourceType.RatoChapter;
});
};
e.prototype.onPreprocessConditionContext = function() {
var t = this, e = hs.chapterDifficultyInfo.getChapterDifficultyByChapterNum(hs.chapterGameInfo.chapterNum), r = TRAIT("CTRefactorChapterAlgoStrategyTrait");
return buildLazyConditionContext({
isTravelStage2HardSource: function() {
return ASContext(hs.algorithmStrategyLevelRefactoredInfo.algorithmSourceLevel1 === hs.ChapterAlgorithmSourceType.TravelStage2_hard, "当前一级出题源是否为旅行中段困难");
},
isTravelStage3Source: function() {
return ASContext(hs.algorithmStrategyLevelRefactoredInfo.algorithmSourceLevel1 === hs.ChapterAlgorithmSourceType.TravelStage3, "当前一级出题源是否为旅行末段");
},
chapterIsOpenLevelHelp: function() {
var t, e;
return ASContext(null !== (e = null === (t = null == r ? void 0 : r.state) || void 0 === t ? void 0 : t.isOpenLevelHelp) && void 0 !== e && e, "旅行帮扶开关");
},
isChapterSimple: function() {
return ASContext(hs.chapterDifficultyInfo.isChapterSimple(e), "是否简单关");
},
isChapterMedium: function() {
return ASContext(hs.chapterDifficultyInfo.isChapterMedium(e), "是否中等关");
},
randomNum: function() {
return ASContext(t.randomNum, "随机数0-9");
},
chapterRatioStage1: function() {
var t, e, a;
return ASContext(null !== (a = null === (e = null === (t = null == r ? void 0 : r.state) || void 0 === t ? void 0 : t.ratioArr) || void 0 === e ? void 0 : e[0]) && void 0 !== a ? a : .5, "旅行第一段阈值");
},
chapterRatioStage2: function() {
var t, e, a;
return ASContext(null !== (a = null === (e = null === (t = null == r ? void 0 : r.state) || void 0 === t ? void 0 : t.ratioArr) || void 0 === e ? void 0 : e[1]) && void 0 !== a ? a : .75, "旅行第二段阈值");
}
});
};
e.prototype.changeAlgoListTravelStage2HardCallback = function(t) {
hs.algorithmStrategyLevelRefactoredInfo.setAlgorithmSourceLevel2(this.traitName);
2 != t && 4 != t || hs.algorithmStrategyLevelRefactoredInfo.setAlgorithmSourceLevel1(hs.ChapterAlgorithmSourceType.RatoChapter);
};
e.prototype.changeAlgoListTravelStage3Callback = function(t) {
hs.algorithmStrategyLevelRefactoredInfo.setAlgorithmSourceLevel2(this.traitName);
1 != t && 3 != t && 5 != t || hs.algorithmStrategyLevelRefactoredInfo.setAlgorithmSourceLevel1(hs.ChapterAlgorithmSourceType.RatoChapter);
};
e.prototype.onPreprocessConditions = function() {
return {
mutex: {
TravelStage2_hard: [ {
conditions: {
and: [ {
fact: "isTravelStage2HardSource",
operator: "=",
value: !0
}, {
fact: "chapterRatio",
operator: ">",
value: {
fact: "chapterRatioStage1"
}
}, {
fact: "chapterRatio",
operator: "<=",
value: {
fact: "chapterRatioStage2"
}
}, {
fact: "isChapterSimple",
operator: "=",
value: !0
} ]
},
flow: "stage2HardSimple",
event: {
type: "changeAlgoListTravelStage2HardCallback",
args: [ 0 ]
},
platform: "gp"
}, {
conditions: {
and: [ {
fact: "isTravelStage2HardSource",
operator: "=",
value: !0
}, {
fact: "chapterRatio",
operator: ">",
value: {
fact: "chapterRatioStage1"
}
}, {
fact: "chapterRatio",
operator: "<=",
value: {
fact: "chapterRatioStage2"
}
}, {
fact: "isChapterMedium",
operator: "=",
value: !0
}, {
fact: "randomNum",
operator: "<",
value: 7
} ]
},
flow: "stage2HardMediumTkxc",
event: {
type: "changeAlgoListTravelStage2HardCallback",
args: [ 1 ]
},
platform: "gp"
}, {
conditions: {
and: [ {
fact: "isTravelStage2HardSource",
operator: "=",
value: !0
}, {
fact: "chapterRatio",
operator: ">",
value: {
fact: "chapterRatioStage1"
}
}, {
fact: "chapterRatio",
operator: "<=",
value: {
fact: "chapterRatioStage2"
}
}, {
fact: "isChapterMedium",
operator: "=",
value: !0
}, {
fact: "randomNum",
operator: ">=",
value: 7
} ]
},
flow: "stage2HardMediumDeath",
event: {
type: "changeAlgoListTravelStage2HardCallback",
args: [ 2 ]
},
platform: "gp"
}, {
conditions: {
and: [ {
fact: "isTravelStage2HardSource",
operator: "=",
value: !0
}, {
fact: "chapterRatio",
operator: ">",
value: {
fact: "chapterRatioStage1"
}
}, {
fact: "chapterRatio",
operator: "<=",
value: {
fact: "chapterRatioStage2"
}
}, {
fact: "isChapterSimple",
operator: "=",
value: !1
}, {
fact: "isChapterMedium",
operator: "=",
value: !1
}, {
fact: "randomNum",
operator: "<",
value: 5
} ]
},
flow: "stage2HardHardTkxc",
event: {
type: "changeAlgoListTravelStage2HardCallback",
args: [ 3 ]
},
platform: "gp"
}, {
conditions: {
and: [ {
fact: "isTravelStage2HardSource",
operator: "=",
value: !0
}, {
fact: "chapterRatio",
operator: ">",
value: {
fact: "chapterRatioStage1"
}
}, {
fact: "chapterRatio",
operator: "<=",
value: {
fact: "chapterRatioStage2"
}
}, {
fact: "isChapterSimple",
operator: "=",
value: !1
}, {
fact: "isChapterMedium",
operator: "=",
value: !1
}, {
fact: "randomNum",
operator: ">=",
value: 5
} ]
},
flow: "stage2HardHardDeath",
event: {
type: "changeAlgoListTravelStage2HardCallback",
args: [ 4 ]
},
platform: "gp"
} ],
TravelStage3: [ {
conditions: {
and: [ {
fact: "isTravelStage3Source",
operator: "=",
value: !0
}, {
fact: "chapterIsOpenLevelHelp",
operator: "=",
value: !1
}, {
fact: "isChapterSimple",
operator: "=",
value: !0
}, {
fact: "randomNum",
operator: "<",
value: 7
} ]
},
flow: "stage3SimpleTkxc",
event: {
type: "changeAlgoListTravelStage3Callback",
args: [ 0 ]
},
platform: "gp"
}, {
conditions: {
and: [ {
fact: "isTravelStage3Source",
operator: "=",
value: !0
}, {
fact: "chapterIsOpenLevelHelp",
operator: "=",
value: !1
}, {
fact: "isChapterSimple",
operator: "=",
value: !0
}, {
fact: "randomNum",
operator: ">=",
value: 7
} ]
},
flow: "stage3SimpleDeath",
event: {
type: "changeAlgoListTravelStage3Callback",
args: [ 1 ]
},
platform: "gp"
}, {
conditions: {
and: [ {
fact: "isTravelStage3Source",
operator: "=",
value: !0
}, {
fact: "chapterIsOpenLevelHelp",
operator: "=",
value: !1
}, {
fact: "isChapterMedium",
operator: "=",
value: !0
}, {
fact: "randomNum",
operator: "<",
value: 5
} ]
},
flow: "stage3MediumTkxc",
event: {
type: "changeAlgoListTravelStage3Callback",
args: [ 2 ]
},
platform: "gp"
}, {
conditions: {
and: [ {
fact: "isTravelStage3Source",
operator: "=",
value: !0
}, {
fact: "chapterIsOpenLevelHelp",
operator: "=",
value: !1
}, {
fact: "isChapterMedium",
operator: "=",
value: !0
}, {
fact: "randomNum",
operator: ">=",
value: 5
} ]
},
flow: "stage3MediumDeath",
event: {
type: "changeAlgoListTravelStage3Callback",
args: [ 3 ]
},
platform: "gp"
}, {
conditions: {
and: [ {
fact: "isTravelStage3Source",
operator: "=",
value: !0
}, {
fact: "chapterIsOpenLevelHelp",
operator: "=",
value: !1
}, {
fact: "isChapterSimple",
operator: "=",
value: !1
}, {
fact: "isChapterMedium",
operator: "=",
value: !1
}, {
fact: "randomNum",
operator: "<",
value: 7
} ]
},
flow: "stage3HardTkxc",
event: {
type: "changeAlgoListTravelStage3Callback",
args: [ 4 ]
},
platform: "gp"
}, {
conditions: {
and: [ {
fact: "isTravelStage3Source",
operator: "=",
value: !0
}, {
fact: "chapterIsOpenLevelHelp",
operator: "=",
value: !1
}, {
fact: "isChapterSimple",
operator: "=",
value: !1
}, {
fact: "isChapterMedium",
operator: "=",
value: !1
}, {
fact: "randomNum",
operator: ">=",
value: 7
} ]
},
flow: "stage3HardDeath",
event: {
type: "changeAlgoListTravelStage3Callback",
args: [ 5 ]
},
platform: "gp"
} ]
}
};
};
e.prototype.onPreprocessActions = function() {
return {
mutex: {
TravelStage2_hard: {
stage2HardSimple: [ {
operator: "AlgorithmStrategyAlgorithmListOperator",
type: "replaceAll",
args: [ hs.OFFER_TYPE_BLANK.TRAVEL_TIAN_KONG_XIAO_CHU ]
}, {
operator: "AlgorithmStrategyReturnOperator",
type: "returnState"
} ],
stage2HardMediumTkxc: [ {
operator: "AlgorithmStrategyAlgorithmListOperator",
type: "replaceAll",
args: [ hs.OFFER_TYPE_BLANK.TRAVEL_TIAN_KONG_XIAO_CHU ]
}, {
operator: "AlgorithmStrategyReturnOperator",
type: "returnState"
} ],
stage2HardMediumDeath: [ {
operator: "AlgorithmStrategyAlgorithmListOperator",
type: "replaceAll",
args: [ hs.OFFER_TYPE_DIE.SI_WANG ]
}, {
operator: "AlgorithmStrategyAlgorithmFallbackListOperator",
type: "replaceAll",
args: [ hs.OFFER_TYPE_BASE.SUI_JI ]
}, {
operator: "AlgorithmStrategyReturnOperator",
type: "returnState"
} ],
stage2HardHardTkxc: [ {
operator: "AlgorithmStrategyAlgorithmListOperator",
type: "replaceAll",
args: [ hs.OFFER_TYPE_BLANK.TRAVEL_TIAN_KONG_XIAO_CHU ]
}, {
operator: "AlgorithmStrategyReturnOperator",
type: "returnState"
} ],
stage2HardHardDeath: [ {
operator: "AlgorithmStrategyAlgorithmListOperator",
type: "replaceAll",
args: [ hs.OFFER_TYPE_DIE.SI_WANG ]
}, {
operator: "AlgorithmStrategyAlgorithmFallbackListOperator",
type: "replaceAll",
args: [ hs.OFFER_TYPE_BASE.SUI_JI ]
}, {
operator: "AlgorithmStrategyReturnOperator",
type: "returnState"
} ]
},
TravelStage3: {
stage3SimpleTkxc: [ {
operator: "AlgorithmStrategyAlgorithmListOperator",
type: "replaceAll",
args: [ hs.OFFER_TYPE_BLANK.TRAVEL_TIAN_KONG_XIAO_CHU ]
}, {
operator: "AlgorithmStrategyReturnOperator",
type: "returnState"
} ],
stage3SimpleDeath: [ {
operator: "AlgorithmStrategyAlgorithmListOperator",
type: "replaceAll",
args: [ hs.OFFER_TYPE_DIE.SI_WANG ]
}, {
operator: "AlgorithmStrategyAlgorithmFallbackListOperator",
type: "replaceAll",
args: [ hs.OFFER_TYPE_BASE.SUI_JI ]
}, {
operator: "AlgorithmStrategyReturnOperator",
type: "returnState"
} ],
stage3MediumTkxc: [ {
operator: "AlgorithmStrategyAlgorithmListOperator",
type: "replaceAll",
args: [ hs.OFFER_TYPE_BLANK.TRAVEL_TIAN_KONG_XIAO_CHU ]
}, {
operator: "AlgorithmStrategyReturnOperator",
type: "returnState"
} ],
stage3MediumDeath: [ {
operator: "AlgorithmStrategyAlgorithmListOperator",
type: "replaceAll",
args: [ hs.OFFER_TYPE_DIE.SI_WANG ]
}, {
operator: "AlgorithmStrategyAlgorithmFallbackListOperator",
type: "replaceAll",
args: [ hs.OFFER_TYPE_BASE.SUI_JI ]
}, {
operator: "AlgorithmStrategyReturnOperator",
type: "returnState"
} ],
stage3HardTkxc: [ {
operator: "AlgorithmStrategyAlgorithmListOperator",
type: "replaceAll",
args: [ hs.OFFER_TYPE_BLANK.TRAVEL_TIAN_KONG_XIAO_CHU ]
}, {
operator: "AlgorithmStrategyReturnOperator",
type: "returnState"
} ],
stage3HardDeath: [ {
operator: "AlgorithmStrategyAlgorithmListOperator",
type: "replaceAll",
args: [ hs.OFFER_TYPE_DIFFICULTY.KUN_NAN_TI ]
}, {
operator: "AlgorithmStrategyAlgorithmFallbackListOperator",
type: "replaceAll",
args: [ hs.OFFER_TYPE_BASE.SUI_JI ]
}, {
operator: "AlgorithmStrategyReturnOperator",
type: "returnState"
} ]
}
}
};
};
return l([ classId("CTRefactorRatioAdjustTrait") ], e);
}(Trait);
r.CTRefactorRatioAdjustTrait = i;
cc._RF.pop();
}, {} ]
}, {}, [ "CTRefactorRatioAdjustTrait" ]);
//# sourceMappingURL=index.js.map
