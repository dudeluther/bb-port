window.__require = function t(e, a, r) {
function o(p, l) {
if (!a[p]) {
if (!e[p]) {
var n = p.split("/");
n = n[n.length - 1];
if (!e[n]) {
var s = "function" == typeof __require && __require;
if (!l && s) return s(n, !0);
if (i) return i(n, !0);
throw new Error("Cannot find module '" + p + "'");
}
p = n;
}
var c = a[p] = {
exports: {}
};
e[p][0].call(c.exports, function(t) {
return o(e[p][1][t] || t);
}, c, c.exports, t, e, a, r);
}
return a[p].exports;
}
for (var i = "function" == typeof __require && __require, p = 0; p < r.length; p++) o(r[p]);
return o;
}({
CTRefactorChapterAlgoStrategyTrait: [ function(t, e, a) {
"use strict";
cc._RF.push(e, "d017bbfwuBNyKRodYTaZYM4", "CTRefactorChapterAlgoStrategyTrait");
var r, o = this && this.__extends || (r = function(t, e) {
return (r = Object.setPrototypeOf || {
__proto__: []
} instanceof Array && function(t, e) {
t.__proto__ = e;
} || function(t, e) {
for (var a in e) Object.prototype.hasOwnProperty.call(e, a) && (t[a] = e[a]);
})(t, e);
}, function(t, e) {
r(t, e);
function a() {
this.constructor = t;
}
t.prototype = null === e ? Object.create(e) : (a.prototype = e.prototype, new a());
}), i = this && this.__decorate || function(t, e, a, r) {
var o, i = arguments.length, p = i < 3 ? e : null === r ? r = Object.getOwnPropertyDescriptor(e, a) : r;
if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) p = Reflect.decorate(t, e, a, r); else for (var l = t.length - 1; l >= 0; l--) (o = t[l]) && (p = (i < 3 ? o(p) : i > 3 ? o(e, a, p) : o(e, a)) || p);
return i > 3 && p && Object.defineProperty(e, a, p), p;
}, p = this && this.__read || function(t, e) {
var a = "function" == typeof Symbol && t[Symbol.iterator];
if (!a) return t;
var r, o, i = a.call(t), p = [];
try {
for (;(void 0 === e || e-- > 0) && !(r = i.next()).done; ) p.push(r.value);
} catch (t) {
o = {
error: t
};
} finally {
try {
r && !r.done && (a = i.return) && a.call(i);
} finally {
if (o) throw o.error;
}
}
return p;
}, l = this && this.__spread || function() {
for (var t = [], e = 0; e < arguments.length; e++) t = t.concat(p(arguments[e]));
return t;
};
Object.defineProperty(a, "__esModule", {
value: !0
});
a.CTRefactorChapterAlgoStrategyTrait = void 0;
var n = [ {
tryTimes: [ 3, 3, 3, 3, 3, 4, 4, 4, 5, 5, 6, 7, 3, 3, 3, 4, 4, 4, 4, 4, 10, 11, 12, 18, 3, 4, 4, 5, 6, 6, 7, 9, 13, 20, 22, 20, 5, 4, 4, 5, 7, 7, 3, 4, 7, 10, 13, 25, 1, 1 ],
id: 1
} ], s = function(t) {
o(e, t);
function e() {
var e = null !== t && t.apply(this, arguments) || this;
e.ratio = 0;
return e;
}
e.prototype.data = function() {
return {
isChapterFirstHardState: !1,
ratioArr: [],
isOpenLevelHelp: !1,
tryTimesJsonData: n
};
};
Object.defineProperty(e.prototype, "canLevelHelpState", {
get: function() {
var t = this.state.tryTimesJsonData && this.state.tryTimesJsonData[0], e = t && t.tryTimes;
return !!Array.isArray(e) && (e.length > hs.chapterGameInfo.chapterNum && hs.chapterGameInfo.tryTimes >= e[hs.chapterGameInfo.chapterNum]);
},
enumerable: !1,
configurable: !0
});
e.prototype.updateTryTimesConfig = function(t) {
this.state.tryTimesJsonData != t && (this.state.tryTimesJsonData = t);
};
e.prototype.changeRatioArr = function(t) {
void 0 === t && (t = null);
t && t.length > 0 && (this.state.ratioArr = t);
};
e.prototype.onAlgorithmStrategyGameInit = function(t) {
var e;
if ("preprocessAlgorithmData" === t) {
hs.algorithmStrategyChapterAlgoRatioInfo.setRatioArr([ .4, .8 ]);
hs.algorithmStrategyChapterAlgoRatioInfo.setIsOpenLevelHelp(this.canLevelHelpState);
storage.setItem("chapterFirstHardState_base", !1);
this.state.ratioArr = [ .4, .8 ];
var a = TRAIT("CTRefactorLevelWayHelpTrait"), r = !a || 1 == (null === (e = null == a ? void 0 : a.props) || void 0 === e ? void 0 : e.firing);
this.state.isOpenLevelHelp = !!r && this.canLevelHelpState;
hs.algorithmStrategyChapterAlgoRatioInfo.setIsOpenLevelHelp(this.state.isOpenLevelHelp);
}
};
e.prototype.updateLevelHelpState = function(t) {
hs.algorithmStrategyChapterAlgoRatioInfo.setIsOpenLevelHelp(t);
this.state.isOpenLevelHelp = t;
};
e.prototype.manyTopicSimpleIos = function() {
var t = hs.chapterGameInfo.chapterNum, e = hs.chapterDifficultyInfo.getChapterDifficultyByChapterNum(hs.chapterGameInfo.chapterNum);
return e == hs.CHAPTER_DIFF_TYPE.SIMPLE || t % 12 < 2 ? hs.algorithmStrategyIOSBlankRefactoredInfo.offerBitTravelTianKongXiaoChu() : e == hs.CHAPTER_DIFF_TYPE.MEDIUM || t % 12 < 10 ? hs.algorithmStrategyIOSBlankRefactoredInfo.offerBitTravelTianKongXiaoChu() : e == hs.CHAPTER_DIFF_TYPE.DIFFICULT ? hs.algorithmStrategyIOSRandomRefactoredInfo.offerTravelSuiJi() : [];
};
e.prototype.helpStage2 = function() {
return this.manyTopicSimpleIos();
};
e.prototype.noHelpStage2 = function() {
return [];
};
e.prototype.onPreprocessConditionContext = function() {
var t = this;
this.updateLevelHelpState(this.state.isOpenLevelHelp);
return buildLazyConditionContext({
chapterIsOpenLevelHelp: function() {
return ASContext(t.state.isOpenLevelHelp, "旅行帮扶开关");
},
chapterRatioStage1: function() {
return ASContext(t.state.ratioArr[0], "旅行第一段阈值");
},
chapterRatioStage2: function() {
return ASContext(t.state.ratioArr[1], "旅行第二段阈值");
},
chapterNumMod12: function() {
return ASContext(hs.chapterGameInfo.chapterNum % 12, "关卡数取模12");
},
iosAlgorithmList: function() {
return ASContext(!0, "ios出题列表");
},
isAlgo: function() {
return ASContext(!0, "ios出题列表");
}
});
};
e.prototype.onPreprocessConditionOperators = function() {
return {
manyTopicSimple: function() {
var t = hs.chapterGameInfo.chapterNum;
return t % 12 < 2 ? {
status: !0,
data: {
algorithmId: hs.OFFER_TYPE_BLANK.TRAVEL_TIAN_KONG_XIAO_CHU
}
} : t % 12 < 10 ? {
status: !0,
data: {
algorithmId: hs.OFFER_TYPE_BLANK.TRAVEL_TIAN_KONG_XIAO_CHU
}
} : {
status: !0,
data: {
algorithmId: hs.OFFER_TYPE_BASE.SUI_JI
}
};
},
manyTopicHard: function() {
var t = hs.chapterGameInfo.chapterNum;
if (t % 12 < 2) return {
status: !0,
data: {
algorithmId: hs.algorithmStrategyIOSBlankRefactoredInfo.offerBitTravelTianKongXiaoChu()
}
};
if (t % 12 < 10) return Math.floor(10 * Math.random()) < 5 ? {
status: !0,
data: {
algorithmId: hs.algorithmStrategyIOSRandomRefactoredInfo.offerTravelSuiJi()
}
} : {
status: !0,
data: {
algorithmId: hs.algorithmStrategyIOSShangRefactoredInfo.offerShangZeng3()
}
};
if (0 == storage.getItem("chapterFirstHardState_base")) {
storage.setItem("chapterFirstHardState_base", !0);
var e = hs.algorithmStrategyIOSDifficultRefactoredInfo.offerNoBitKunNanNanTi();
e.map(function(t) {
var e;
hs.isValueInEnum(t, hs.OFFER_TYPE_DIFFICULTY) && (null === (e = TRAIT("CTRefactorAlgorithmStrategyIOSNameInfoTrait")) || void 0 === e || e.addAlgorithmNameMapping(t, "CTRefactorChapterAlgoStrategyTrait", null, null, hs.OFFER_TYPE.KUN_NAN_TI));
});
var a = hs.algorithmStrategyIOSRandomRefactoredInfo.offerTravelSuiJi();
return {
status: !0,
data: {
algorithmId: l(e, a)
}
};
}
return {
status: !0,
data: {
algorithmId: hs.algorithmStrategyIOSRandomRefactoredInfo.offerTravelSuiJi()
}
};
},
setIosAlgorithmList: function(t, e) {
return "stage1HelpIos" == e ? {
status: !0,
data: {
algorithmId: hs.algorithmStrategyIOSBlankRefactoredInfo.offerBitTravelTianKongXiaoChu()
}
} : "stage1NoHelpIos" == e ? {
status: !0,
data: {
algorithmId: hs.algorithmStrategyIOSBlankRefactoredInfo.offerBitTravelTianKongXiaoChu()
}
} : "TravelStage3Ios" == e ? {
status: !0,
data: {
algorithmId: hs.algorithmStrategyIOSBlankRefactoredInfo.offerBitTravelTianKongXiaoChu()
}
} : void 0;
}
};
};
e.prototype.claimTravelStage = function(t) {
hs.algorithmStrategyLevelRefactoredInfo.setAlgorithmSourceLevel1(t);
};
e.prototype.onPreprocessConditions = function() {
return {
mutex: {
TravelStage1: [ {
conditions: {
and: [ {
fact: "chapterRatio",
operator: ">",
value: {
fact: "chapterRatioStage1"
}
} ]
},
flow: "stage1HelpReturn"
}, {
conditions: {
and: [ {
fact: "chapterRatio",
operator: "<=",
value: {
fact: "chapterRatioStage1"
}
}, {
fact: "chapterIsOpenLevelHelp",
operator: "=",
value: !0
} ]
},
flow: "stage1Help",
event: {
type: "claimTravelStage",
args: [ hs.ChapterAlgorithmSourceType.TravelStage1 ]
},
platform: "gp"
}, {
conditions: {
and: [ {
fact: "chapterRatio",
operator: "<=",
value: {
fact: "chapterRatioStage1"
}
}, {
fact: "chapterIsOpenLevelHelp",
operator: "=",
value: !1
} ]
},
flow: "stage1Normal",
event: {
type: "claimTravelStage",
args: [ hs.ChapterAlgorithmSourceType.TravelStage1 ]
},
platform: "gp"
}, {
conditions: {
and: [ {
fact: "chapterRatio",
operator: "<=",
value: {
fact: "chapterRatioStage1"
}
}, {
fact: "chapterIsOpenLevelHelp",
operator: "=",
value: !0
}, {
fact: "iosAlgorithmList",
operator: "setIosAlgorithmList",
value: "stage1HelpIos"
} ]
},
flow: "stage1HelpIos",
event: {
type: "claimTravelStage",
args: [ hs.ChapterAlgorithmSourceType.TravelStage1 ]
},
platform: "ios"
}, {
conditions: {
and: [ {
fact: "chapterRatio",
operator: "<=",
value: {
fact: "chapterRatioStage1"
}
}, {
fact: "chapterIsOpenLevelHelp",
operator: "=",
value: !1
}, {
fact: "iosAlgorithmList",
operator: "setIosAlgorithmList",
value: "stage1NoHelpIos"
} ]
},
flow: "stage1NoHelpIos",
event: {
type: "claimTravelStage",
args: [ hs.ChapterAlgorithmSourceType.TravelStage1 ]
},
platform: "ios"
} ],
TravelStage2_simple: [ {
conditions: {
and: [ {
or: [ {
fact: "chapterRatio",
operator: "<=",
value: {
fact: "chapterRatioStage1"
}
}, {
fact: "chapterRatio",
operator: ">",
value: {
fact: "chapterRatioStage2"
}
} ]
} ]
},
flow: "stage2SimpleReturn"
}, {
conditions: {
and: [ {
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
fact: "chapterIsOpenLevelHelp",
operator: "=",
value: !1
} ]
},
flow: "stage2SimpleReturn"
}, {
conditions: {
and: [ {
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
fact: "chapterIsOpenLevelHelp",
operator: "=",
value: !0
}, {
fact: "isAlgo",
operator: "manyTopicSimple",
value: !0
} ]
},
event: {
type: "claimTravelStage",
args: [ hs.ChapterAlgorithmSourceType.TravelStage2_simple ]
},
flow: "stage2SimpleHelp",
platform: "gp"
}, {
conditions: {
and: [ {
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
fact: "chapterIsOpenLevelHelp",
operator: "=",
value: !0
}, {
fact: "isAlgo",
operator: "manyTopicSimple",
value: !0
} ]
},
event: {
type: "claimTravelStage",
args: [ hs.ChapterAlgorithmSourceType.TravelStage2_simple ]
},
flow: "stage2SimpleHelpIos",
platform: "ios"
}, {
conditions: {
and: [ {
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
fact: "chapterIsOpenLevelHelp",
operator: "=",
value: !0
} ]
},
event: {
type: "claimTravelStage",
args: [ hs.ChapterAlgorithmSourceType.TravelStage2_simple ]
},
flow: "stage2SimpleLevel"
} ],
TravelStage2_hard: [ {
conditions: {
and: [ {
or: [ {
fact: "chapterRatio",
operator: "<=",
value: {
fact: "chapterRatioStage1"
}
}, {
fact: "chapterRatio",
operator: ">",
value: {
fact: "chapterRatioStage2"
}
} ]
} ]
},
flow: "stage2HardReturn"
}, {
conditions: {
and: [ {
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
fact: "chapterIsOpenLevelHelp",
operator: "=",
value: !0
} ]
},
flow: "stage2HardReturn"
}, {
conditions: {
and: [ {
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
fact: "chapterIsOpenLevelHelp",
operator: "=",
value: !1
} ]
},
event: {
type: "claimTravelStage",
args: [ hs.ChapterAlgorithmSourceType.TravelStage2_hard ]
},
flow: "stage2HardLevel"
}, {
conditions: {
and: [ {
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
fact: "chapterIsOpenLevelHelp",
operator: "=",
value: !1
} ]
},
platform: "gp"
}, {
conditions: {
and: [ {
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
fact: "chapterIsOpenLevelHelp",
operator: "=",
value: !1
}, {
fact: "isAlgo",
operator: "manyTopicHard",
value: !0
} ]
},
flow: "stage2HardNoHelpIos",
platform: "ios"
} ],
TravelStage3: [ {
conditions: {
and: [ {
fact: "chapterRatio",
operator: ">",
value: {
fact: "chapterRatioStage2"
}
} ]
},
event: {
type: "claimTravelStage",
args: [ hs.ChapterAlgorithmSourceType.TravelStage3 ]
},
platform: "gp"
}, {
conditions: {
and: [ {
fact: "chapterRatio",
operator: ">",
value: {
fact: "chapterRatioStage2"
}
}, {
fact: "iosAlgorithmList",
operator: "setIosAlgorithmList",
value: "TravelStage3Ios"
} ]
},
flow: "stage3Ios",
event: {
type: "claimTravelStage",
args: [ hs.ChapterAlgorithmSourceType.TravelStage3 ]
},
platform: "ios"
} ]
}
};
};
e.prototype.onPreprocessActions = function() {
return {
mutex: {
TravelStage1: {
stage1HelpReturn: [ {
operator: "AlgorithmStrategyReturnOperator",
type: "returnState"
} ],
stage1Help: [ {
operator: "AlgorithmStrategyAlgorithmListOperator",
type: "replaceAll",
args: [ hs.OFFER_TYPE_BLANK.TRAVEL_TIAN_KONG_XIAO_CHU ]
}, {
operator: "AlgorithmStrategyReturnOperator",
type: "returnState"
} ],
stage1Normal: [ {
operator: "AlgorithmStrategyAlgorithmListOperator",
type: "replaceAll",
args: [ hs.OFFER_TYPE_BLANK.TRAVEL_TIAN_KONG_XIAO_CHU ]
} ],
stage1HelpIos: [ {
operator: "AlgorithmStrategyAlgorithmListOperator",
type: "replaceAll",
args: [ {
fact: "operator.setIosAlgorithmList.data.algorithmId"
} ]
} ],
stage1NoHelpIos: [ {
operator: "AlgorithmStrategyAlgorithmListOperator",
type: "replaceAll",
args: [ {
fact: "operator.setIosAlgorithmList.data.algorithmId"
} ]
} ]
},
TravelStage2_simple: {
stage2SimpleReturn: [ {
operator: "AlgorithmStrategyReturnOperator",
type: "returnState"
} ],
stage2SimpleHelp: [ {
operator: "AlgorithmStrategyAlgorithmListOperator",
type: "push",
args: [ {
fact: "operator.manyTopicSimple.data.algorithmId"
} ]
}, {
operator: "AlgorithmStrategyReturnOperator",
type: "returnState"
} ],
stage2SimpleHelpIos: [ {
operator: "AlgorithmStrategyAlgorithmListOperator",
type: "replaceAll",
args: [ {
fact: "operator.manyTopicSimple.data.algorithmId"
} ]
} ],
stage2SimpleLevel: []
},
TravelStage2_hard: {
stage2HardReturn: [ {
operator: "AlgorithmStrategyReturnOperator",
type: "returnState"
} ],
stage2HardNoHelpIos: [ {
operator: "AlgorithmStrategyAlgorithmListOperator",
type: "replaceAll",
args: [ {
fact: "operator.manyTopicHard.data.algorithmId"
} ]
} ],
stage2HardLevel: []
},
TravelStage3: {
stage3Ios: [ {
operator: "AlgorithmStrategyAlgorithmListOperator",
type: "replaceAll",
args: [ {
fact: "operator.setIosAlgorithmList.data.algorithmId"
} ]
} ]
}
}
};
};
return i([ classId("CTRefactorChapterAlgoStrategyTrait"), classMethodWatch() ], e);
}(Trait);
a.CTRefactorChapterAlgoStrategyTrait = s;
cc._RF.pop();
}, {} ]
}, {}, [ "CTRefactorChapterAlgoStrategyTrait" ]);
//# sourceMappingURL=index.js.map
