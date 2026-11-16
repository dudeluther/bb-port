window.__require = function e(t, r, o) {
function a(i, c) {
if (!r[i]) {
if (!t[i]) {
var h = i.split("/");
h = h[h.length - 1];
if (!t[h]) {
var l = "function" == typeof __require && __require;
if (!c && l) return l(h, !0);
if (n) return n(h, !0);
throw new Error("Cannot find module '" + i + "'");
}
i = h;
}
var f = r[i] = {
exports: {}
};
t[i][0].call(f.exports, function(e) {
return a(t[i][1][e] || e);
}, f, f.exports, e, t, r, o);
}
return r[i].exports;
}
for (var n = "function" == typeof __require && __require, i = 0; i < o.length; i++) a(o[i]);
return a;
}({
CTRefactorLaneSchemeTrait: [ function(e, t, r) {
"use strict";
cc._RF.push(t, "b5d9fLkajxLjcfh9KLYs8bl", "CTRefactorLaneSchemeTrait");
var o, a = this && this.__extends || (o = function(e, t) {
return (o = Object.setPrototypeOf || {
__proto__: []
} instanceof Array && function(e, t) {
e.__proto__ = t;
} || function(e, t) {
for (var r in t) Object.prototype.hasOwnProperty.call(t, r) && (e[r] = t[r]);
})(e, t);
}, function(e, t) {
o(e, t);
function r() {
this.constructor = e;
}
e.prototype = null === t ? Object.create(t) : (r.prototype = t.prototype, new r());
}), n = this && this.__decorate || function(e, t, r, o) {
var a, n = arguments.length, i = n < 3 ? t : null === o ? o = Object.getOwnPropertyDescriptor(t, r) : o;
if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) i = Reflect.decorate(e, t, r, o); else for (var c = e.length - 1; c >= 0; c--) (a = e[c]) && (i = (n < 3 ? a(i) : n > 3 ? a(t, r, i) : a(t, r)) || i);
return n > 3 && i && Object.defineProperty(t, r, i), i;
}, i = this && this.__values || function(e) {
var t = "function" == typeof Symbol && Symbol.iterator, r = t && e[t], o = 0;
if (r) return r.call(e);
if (e && "number" == typeof e.length) return {
next: function() {
e && o >= e.length && (e = void 0);
return {
value: e && e[o++],
done: !e
};
}
};
throw new TypeError(t ? "Object is not iterable." : "Symbol.iterator is not defined.");
};
Object.defineProperty(r, "__esModule", {
value: !0
});
r.CTRefactorLaneSchemeTrait = void 0;
var c = function(e) {
a(t, e);
function t() {
return null !== e && e.apply(this, arguments) || this;
}
t.prototype.data = function() {
return {
boardScore: 0,
highScore: 0,
ratioDownObj: null,
getWayInfo: null,
weightRatioArr: null
};
};
t.prototype.transformLaneSchemeAlgorithmId = function(e) {
switch (e) {
case hs.ClassAlgorithmStrategyLaneSchemeType.SUI_JI:
return hs.algorithmStrategyIOSRandomRefactoredInfo.laneRandom();

case hs.ClassAlgorithmStrategyLaneSchemeType.SHANG_ZENG_3:
return hs.algorithmStrategyIOSShangRefactoredInfo.offerNoBit();

case hs.ClassAlgorithmStrategyLaneSchemeType.SIWANGNANTI:
return hs.algorithmStrategyIOSDifficultRefactoredInfo.replaceDifficultyOptimise();

case hs.ClassAlgorithmStrategyLaneSchemeType.BLANK:
return hs.algorithmStrategyIOSBlankRefactoredInfo.offerNoBit();

case hs.ClassAlgorithmStrategyLaneSchemeType.DIFFICULTY:
var t = this.getHighRecordScore(hs.scoreInfo.highRecordScore);
return this.shouldUseDifficultyAlgorithmWithBaseplateTrait() ? this.getDifficultyAlgorithmWithBaseplateTrait() : t < 1e3 ? hs.algorithmStrategyIOSRandomRefactoredInfo.offerNoBitRandomNoDie() : t < 3e3 ? hs.algorithmStrategyIOSDifficultRefactoredInfo.replaceDifficultyOptimise() : hs.algorithmStrategyIOSDifficultRefactoredInfo.replaceLess3000ScoreBitZhiJueNanTi();

default:
return [ e ];
}
};
t.prototype.shouldUseDifficultyAlgorithmWithBaseplateTrait = function() {
return !1;
};
t.prototype.getDifficultyAlgorithmWithBaseplateTrait = function() {
var e = this.getHighRecordScore(hs.scoreInfo.highRecordScore);
return e <= 1e3 ? hs.algorithmStrategyIOSRandomRefactoredInfo.offerNoBitRandomNoDie() : e <= 3e3 ? hs.algorithmStrategyIOSDifficultRefactoredInfo.laneNoBitKunNanNanti() : hs.algorithmStrategyIOSDifficultRefactoredInfo.laneBitZhiJueNanTi();
};
t.prototype.onAlgorithmStrategyGameInit = function(e) {
if ("preprocessing_LaneScheme" === e) {
this.state.boardScore = 1440;
this.state.highScore = hs.scoreInfo.highRecordScore;
this.state.ratioDownObj = {};
}
};
t.prototype.onPreprocessConditionContext = function() {
var e = this, t = hs.binarySupport.getWeightValue(hs.boardInfo.faceBlocks), r = 10 * Math.floor(10 * Math.random());
return buildLazyConditionContext({
isPuzzleNoneSource: function() {
return ASContext(hs.algorithmStrategyLevelRefactoredInfo.algorithmSourceLevel1 === hs.ClassAlgorithmSourceType.PuzzleNone, "当前一级出题源是否为底板");
},
getWayInfo: function() {
return ASContext(e.state.getWayInfo, "分数段");
},
laneSchemeInput: function() {
return ASContext({
weightRatioArr: e.state.weightRatioArr,
getWayInfo: e.state.getWayInfo,
boardScore: e.state.boardScore,
highScore: e.state.highScore,
currentScore: hs.classScoreInfo.score,
endWeightValue: t,
randomNum: r,
ratioDownObj: e.state.ratioDownObj
}, "泳道匹配输入");
}
});
};
t.prototype.onPreprocessConditionOperators = function() {
var e = this;
return {
weightMatch: function(t) {
var r, o, a, n = t, c = n.weightRatioArr, h = n.getWayInfo, l = n.boardScore, f = n.highScore, s = n.currentScore, u = n.endWeightValue, p = n.randomNum, g = n.ratioDownObj;
if (null == h) return {
status: !0,
data: {
wayId: hs.OFFER_TYPE.SUI_JI
}
};
var S = 3;
if (null == c) ; else for (var y = 0; y < c.length; y++) if (f <= Math.pow(2, y) * l || y === c.length - 1) {
var d = c[y], m = !1;
try {
for (var I = (r = void 0, i(d)), A = I.next(); !A.done; A = I.next()) {
var _ = A.value;
if (s <= _[0] / 18 * f - 0) {
S = _[1];
m = !0;
break;
}
}
} catch (e) {
r = {
error: e
};
} finally {
try {
A && !A.done && (o = I.return) && o.call(I);
} finally {
if (r) throw r.error;
}
}
m || (S = 3);
break;
}
e.selectWeightRatioWay(S);
if (null === (a = TRAIT("CTRefactorMaturityLaneStrategyTrait")) || void 0 === a ? void 0 : a.active) {
var v = e.state.getWayInfo;
null != v && (h = v);
}
var R = h[S - 1], L = [ hs.ALGO_NAME_TYPE.NAME_RANDOM, hs.ALGO_NAME_TYPE.NAME_SHANG1, hs.ALGO_NAME_TYPE.NAME_SHANG3, hs.ALGO_NAME_TYPE.NAME_SIMPLE_DIFFICULTY, hs.ALGO_NAME_TYPE.NAME_BLANK, hs.ALGO_NAME_TYPE.NAME_SHANGJIAN1, hs.ALGO_NAME_TYPE.NAME_DIFFICULTY ];
for (y = 0; y < R.length; y++) {
var T = R[y], N = parseInt(T[0]);
(null == g ? void 0 : g.ratioDown) && S == g.color && 0 == y && s < g.score && (N = g.ratio);
if (y + 1 == R.length || N >= u) {
for (var O = "", w = 1; w < T.length; w++) {
var b = T[w].split("_");
O = O + b[0] + "===" + L[parseInt(b[1])] + "   ";
}
for (w = 1; w < T.length; w++) {
var M = T[w].split("_");
if (p < parseInt(M[0])) {
return {
status: !0,
data: {
wayId: parseInt(M[1])
}
};
}
}
}
}
return !1;
}
};
};
t.prototype.onPreprocessConditions = function() {
return {
mutex: {
LaneScheme: [ {
conditions: {
and: [ {
fact: "getWayInfo",
operator: "=",
value: null
}, {
fact: "isPuzzleNoneSource",
operator: "=",
value: !0
} ]
},
event: {
type: "markLaneSchemeSource"
},
flow: "noWayInfo"
}, {
conditions: {
and: [ {
fact: "laneSchemeInput",
operator: "weightMatch",
value: !0
}, {
fact: "isPuzzleNoneSource",
operator: "=",
value: !0
} ]
},
event: {
type: "markLaneSchemeSource"
},
flow: "laneMatch"
}, {
conditions: {
and: [ {
fact: "laneSchemeInput",
operator: "weightMatch",
value: !1
}, {
fact: "isPuzzleNoneSource",
operator: "=",
value: !0
} ]
},
flow: "noLaneMatch"
} ]
}
};
};
t.prototype.onPreprocessActions = function() {
return {
mutex: {
LaneScheme: {
noWayInfo: [ {
operator: "AlgorithmStrategyAlgorithmListOperator",
type: "replaceAll",
args: [ hs.OFFER_TYPE.SUI_JI ]
} ],
laneMatch: [ {
operator: "AlgorithmStrategyAlgorithmListOperator",
type: "replaceAll",
args: [ {
fact: "operator.weightMatch.data.wayId"
} ]
} ],
noLaneMatch: [ {
operator: "AlgorithmStrategyReturnOperator",
type: "returnState"
} ]
}
}
};
};
t.prototype.markLaneSchemeSource = function() {
hs.algorithmStrategyLevelRefactoredInfo.setAlgorithmSourceLevel1(hs.ClassAlgorithmSourceType.LaneScheme);
};
t.prototype.changeGetWeightValue = function(e) {
return e;
};
t.prototype.changeTargetScore = function(e) {
return e;
};
t.prototype.getHighRecordScore = function(e) {
return e;
};
t.prototype.selectWeightRatioWay = function() {};
return n([ classId("CTRefactorLaneSchemeTrait"), classMethodWatch() ], t);
}(Trait);
r.CTRefactorLaneSchemeTrait = c;
cc._RF.pop();
}, {} ]
}, {}, [ "CTRefactorLaneSchemeTrait" ]);
//# sourceMappingURL=index.js.map
