window.__require = function r(e, t, o) {
function i(a, s) {
if (!t[a]) {
if (!e[a]) {
var c = a.split("/");
c = c[c.length - 1];
if (!e[c]) {
var u = "function" == typeof __require && __require;
if (!s && u) return u(c, !0);
if (n) return n(c, !0);
throw new Error("Cannot find module '" + a + "'");
}
a = c;
}
var l = t[a] = {
exports: {}
};
e[a][0].call(l.exports, function(r) {
return i(e[a][1][r] || r);
}, l, l.exports, r, e, t, o);
}
return t[a].exports;
}
for (var n = "function" == typeof __require && __require, a = 0; a < o.length; a++) i(o[a]);
return i;
}({
CTRefactorMoreAreaTKXCTrait: [ function(r, e, t) {
"use strict";
cc._RF.push(e, "29ca2lj0B9N9ov/rPmbYxM8", "CTRefactorMoreAreaTKXCTrait");
var o, i = this && this.__extends || (o = function(r, e) {
return (o = Object.setPrototypeOf || {
__proto__: []
} instanceof Array && function(r, e) {
r.__proto__ = e;
} || function(r, e) {
for (var t in e) Object.prototype.hasOwnProperty.call(e, t) && (r[t] = e[t]);
})(r, e);
}, function(r, e) {
o(r, e);
function t() {
this.constructor = r;
}
r.prototype = null === e ? Object.create(e) : (t.prototype = e.prototype, new t());
}), n = this && this.__assign || function() {
return (n = Object.assign || function(r) {
for (var e, t = 1, o = arguments.length; t < o; t++) {
e = arguments[t];
for (var i in e) Object.prototype.hasOwnProperty.call(e, i) && (r[i] = e[i]);
}
return r;
}).apply(this, arguments);
}, a = this && this.__decorate || function(r, e, t, o) {
var i, n = arguments.length, a = n < 3 ? e : null === o ? o = Object.getOwnPropertyDescriptor(e, t) : o;
if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) a = Reflect.decorate(r, e, t, o); else for (var s = r.length - 1; s >= 0; s--) (i = r[s]) && (a = (n < 3 ? i(a) : n > 3 ? i(e, t, a) : i(e, t)) || a);
return n > 3 && a && Object.defineProperty(e, t, a), a;
}, s = this && this.__read || function(r, e) {
var t = "function" == typeof Symbol && r[Symbol.iterator];
if (!t) return r;
var o, i, n = t.call(r), a = [];
try {
for (;(void 0 === e || e-- > 0) && !(o = n.next()).done; ) a.push(o.value);
} catch (r) {
i = {
error: r
};
} finally {
try {
o && !o.done && (t = n.return) && t.call(n);
} finally {
if (i) throw i.error;
}
}
return a;
}, c = this && this.__spread || function() {
for (var r = [], e = 0; e < arguments.length; e++) r = r.concat(s(arguments[e]));
return r;
}, u = this && this.__values || function(r) {
var e = "function" == typeof Symbol && Symbol.iterator, t = e && r[e], o = 0;
if (t) return t.call(r);
if (r && "number" == typeof r.length) return {
next: function() {
r && o >= r.length && (r = void 0);
return {
value: r && r[o++],
done: !r
};
}
};
throw new TypeError(e ? "Object is not iterable." : "Symbol.iterator is not defined.");
};
Object.defineProperty(t, "__esModule", {
value: !0
});
t.CTRefactorMoreAreaTKXCTrait = void 0;
var l = function(r) {
i(e, r);
function e() {
var e = null !== r && r.apply(this, arguments) || this;
e.continuousThreshold = 4;
e.curScore = 0;
e.isShieldMore = !1;
return e;
}
t = e;
e.prototype.log = function() {};
Object.defineProperty(e.prototype, "triggerRoundNum", {
get: function() {
return hs.traitConfigSafePropsInfo.getSafePropValueByKey("MoreAreaTKXCTrait", "triggerRoundNum", this.props, null);
},
enumerable: !1,
configurable: !0
});
Object.defineProperty(e.prototype, "continueLowScoreRoundThreshold", {
get: function() {
return hs.traitConfigSafePropsInfo.getSafePropValueByKey("MoreAreaTKXCTrait", "continueLowScoreRoundThreshold", this.props, 4);
},
enumerable: !1,
configurable: !0
});
Object.defineProperty(e.prototype, "gameWayType", {
get: function() {
return hs.traitConfigSafePropsInfo.getSafePropValueByKey("MoreAreaTKXCTrait", "gameWayType", this.props, 1);
},
enumerable: !1,
configurable: !0
});
Object.defineProperty(e.prototype, "offerType", {
get: function() {
return hs.traitConfigSafePropsInfo.getSafePropValueByKey("MoreAreaTKXCTrait", "offerType", this.props, 3);
},
enumerable: !1,
configurable: !0
});
Object.defineProperty(e.prototype, "newPlayerRoundAvgScores", {
get: function() {
return hs.traitConfigSafePropsInfo.getSafePropValueByKey("MoreAreaTKXCTrait", "newPlayerRoundAvgScores", this.props, t.DEFAULT_NEW_PLAYER_ROUND_AVG_SCORES);
},
enumerable: !1,
configurable: !0
});
Object.defineProperty(e.prototype, "activePlayerRoundAvgScores", {
get: function() {
return hs.traitConfigSafePropsInfo.getSafePropValueByKey("MoreAreaTKXCTrait", "activePlayerRoundAvgScores", this.props, t.DEFAULT_ACTIVE_PLAYER_ROUND_AVG_SCORES);
},
enumerable: !1,
configurable: !0
});
e.prototype.onAlgorithmStrategySessionInit = function() {
var r = TRAIT("ShieldMoreAreaTKXCTrait");
(null == r ? void 0 : r.active) && (this.isShieldMore = r.state.isShieldMoreAreaTKXC);
};
e.prototype.onAlgorithmStrategySDKBetween = function(r) {
if (hs.gameInfo.gameMode !== hs.GameMode.Chapter && !this.isShieldMore) {
var e = storage.getItem("MoreAreaTKXC", 0), t = as.AlgorithmStrategyAlgorithmFallbackListPatch.algorithmFallbackList;
if (3 == this.offerType && e >= this.continueLowScoreRoundThreshold) for (var o = r.algorithmFallbackList || [], i = 0; i < o.length; i++) if (!this.checkNameNanTi(o[i].algorithmId)) {
if (t.length <= 0) break;
var a = c([ n(n({}, t[0]), {
algorithmId: hs.OFFER_TYPE_BLANK.ALGO_FILL_MORE_AREA
}) ], t);
as.AlgorithmStrategyAlgorithmFallbackListPatch.patch(a, this);
break;
}
}
};
e.prototype.getRoundAverage = function(r) {
if (null != this.triggerRoundNum && r > this.triggerRoundNum) return -1;
var e = 1 === this.gameWayType ? this.activePlayerRoundAvgScores : this.newPlayerRoundAvgScores;
return r > e.length ? -1 : e[r > 1 ? r - 2 : 0] || 0;
};
e.prototype.calcClassLowEfficiencyNextTimes = function() {
if (hs.gameInfo.gameMode !== hs.GameMode.Class) return {
valid: !1,
nextTimes: 0,
round: 0,
average: 0,
score: 0,
currentTimes: 0
};
var r = Math.max(0, storage.getItem("classRoundNum", 0) - 1);
if (r <= 0) return {
valid: !1,
nextTimes: 0,
round: r,
average: 0,
score: 0,
currentTimes: 0
};
var e = this.curScore, t = this.getRoundAverage(r);
if (t < 0) return {
valid: !1,
nextTimes: 0,
round: r,
average: t,
score: e,
currentTimes: 0
};
var o = storage.getItem("MoreAreaTKXC", 0);
return {
valid: !0,
nextTimes: e < t ? o + 1 : 0,
round: r,
average: t,
score: e,
currentTimes: o
};
};
e.prototype.findPostFillSourceAlgoId = function(r) {
var e, t;
if (!r) return null;
try {
for (var o = u(r), i = o.next(); !i.done; i = o.next()) {
var n = i.value;
if (n.algorithmId == hs.OFFER_TYPE_BLANK.TIAN_KONG_XIAO_CHU || n.algorithmId == hs.OFFER_TYPE_BLANK.TRAVEL_TIAN_KONG_XIAO_CHU) return n.algorithmId;
}
} catch (r) {
e = {
error: r
};
} finally {
try {
i && !i.done && (t = o.return) && t.call(o);
} finally {
if (e) throw e.error;
}
}
return null;
};
e.prototype.checkNameNanTi = function(r) {
return r == hs.OFFER_TYPE.KUN_NAN_TI || r == hs.OFFER_TYPE.ZHI_JUE_NAN_TI || r == hs.OFFER_TYPE.DIFFICULTY_GAOHUIBAO || r == hs.OFFER_TYPE.LINK_SMALL_BORDER || r == hs.OFFER_TYPE.OPTIMAL_FILL_CLEAR || r == hs.OFFER_TYPE.CLEAR_BOARD || r == hs.OFFER_TYPE.ALL_CLEARABLE_HARD;
};
e.prototype.isClassScore_ProxyComputeScoreAddOption = function(r) {
this.curScore = this.getLowEfficiencyScore(r.args[0]);
};
e.prototype.isClassGame_ProxyOnGameStart = function(r) {
var e = r.args ? r.args[0] : null;
if (e && e.data && e.data.newGame) {
storage.setItem("MoreAreaTKXC", 0);
this.curScore = 0;
}
};
e.prototype.getLowEfficiencyScore = function(r) {
return r.curScore + r.baseScore;
};
e.prototype.checkNoReplace = function(r) {
for (var e = r.algorithmList || [], t = 0; t < e.length; t++) if (e[t].algorithmId == hs.OFFER_TYPE_BASE.CLASSTERMINATE_CYCLE || e[t].algorithmId == hs.OFFER_TYPE_BASE.TERMINATE_REFRESH_SCORE_FIX) return !0;
return !!this.shouldSkipMoreAreaFill(!1);
};
e.prototype.shouldSkipMoreAreaFill = function(r) {
return r;
};
e.prototype.onPreprocessConditionContext = function(r) {
return buildLazyConditionContext({
isTriggerCondition: function() {
return ASContext(r, "是否触发特性");
}
});
};
e.prototype.onPreprocessConditionOperators = function() {
var r = this;
return {
checkTriggerTraitCondition: function(e) {
var t = e;
if (r.isShieldMore) return !1;
var o = storage.getItem("classRoundNum", 0);
if (o <= 1) {
var i = TRAIT("CTRefactorIsTurnAroundSurfaceTrait");
if ((null == i ? void 0 : i.active) && storage.getItem("classTurnAroundSurfaceInfo", {
beTurn: !1,
curStep: 0,
randomColor: 1,
turnAround: !1
}).turnAround) return !1;
}
if (r.checkNoReplace(t)) return !1;
var n = r.getRoundAverage(o), a = storage.getItem("MoreAreaTKXC", 0);
if (n <= 0) {
a = 0;
storage.setItem("MoreAreaTKXC", a);
} else if (r.curScore < n) {
a++;
storage.setItem("MoreAreaTKXC", a);
} else {
a = 0;
storage.setItem("MoreAreaTKXC", a);
}
if (a >= r.continueLowScoreRoundThreshold) {
for (var s = t.algorithmList || [], c = 0; c < s.length; c++) if (s[c].dynamicSource !== hs.ClassAlgorithmSourceType.Priority && s[c].dynamicSource !== hs.ChapterAlgorithmSourceType.Priority && !r.checkNameNanTi(s[c].algorithmId)) return {
status: !0,
data: {
algorithmId: r.unshiftAlgorithmList(hs.OFFER_TYPE_BLANK.ALGO_FILL_MORE_AREA)
}
};
return !1;
}
},
checkTriggerTraitReplace: function(e) {
var t = e;
if (Math.random() < .5) {
for (var o = 0; o < t.algorithmList.length; o++) {
var i = t.algorithmList[o];
if ("priority" !== i.algorithmListSource && (i.algorithmId == hs.OFFER_TYPE_BLANK.TIAN_KONG_XIAO_CHU || i.algorithmId == hs.OFFER_TYPE_BLANK.TRAVEL_TIAN_KONG_XIAO_CHU)) return {
status: !0,
data: {
algorithmId: hs.OFFER_TYPE_BLANK.ALGO_FILL_MORE_AREA,
sourceAlgorithmId: i.algorithmId
}
};
}
var n = r.findPostFillSourceAlgoId(t.algorithmPostList);
return null != n && {
status: !0,
data: {
algorithmId: hs.OFFER_TYPE_BLANK.ALGO_FILL_MORE_AREA,
sourceAlgorithmId: n
}
};
}
}
};
};
e.prototype.onPreprocessConditions = function() {
return {
conditionAlgorithm: [ {
conditions: {
and: [ {
fact: "isTriggerCondition",
operator: "checkTriggerTraitCondition",
value: !0
} ]
},
gameMode: "class",
flow: "flowClass"
} ],
blankAlgorithm: [ {
conditions: {
and: [ {
fact: "isTriggerCondition",
operator: "checkTriggerTraitReplace",
value: !0
} ]
},
gameMode: "journey",
flow: "flowChapter"
} ]
};
};
e.prototype.onPreprocessActions = function() {
return {
conditionAlgorithm: {
flowClass: [ {
operator: "AlgorithmStrategyAlgorithmListOperator",
type: "unshift",
args: [ {
fact: "operator.checkTriggerTraitCondition.data.algorithmId"
} ]
} ]
},
blankAlgorithm: {
flowChapter: [ {
operator: "AlgorithmStrategyAlgorithmListOperator",
type: "insertBefore",
args: [ {
fact: "operator.checkTriggerTraitReplace.data.sourceAlgorithmId"
}, {
fact: "operator.checkTriggerTraitReplace.data.algorithmId"
} ]
}, {
operator: "AlgorithmStrategyAlgorithmPostListPatchOperator",
type: "insertBefore",
args: [ {
fact: "operator.checkTriggerTraitReplace.data.sourceAlgorithmId"
}, {
fact: "operator.checkTriggerTraitReplace.data.algorithmId"
} ]
} ]
}
};
};
e.prototype.isTriggerSDK = function(r) {
if (r.algorithmId == hs.OFFER_TYPE_BASE.CLEAR_BOARD) {
var e = this.calcClassLowEfficiencyNextTimes();
if (e.valid && e.nextTimes >= this.continueLowScoreRoundThreshold) return !0;
}
return !1;
};
e.prototype.onSDKArgsConditionContext = function(r, e, t) {
var o = this;
return buildLazyConditionContext({
isTriggerSDK: function() {
return ASContext(o.isTriggerSDK(t), "清盘plus满足条件");
}
});
};
e.prototype.onSDKArgsConditions = function() {
return [ {
conditions: {
and: [ {
fact: "isTriggerSDK",
operator: "=",
value: !0
} ]
},
gameMode: "class",
flow: "flow1"
} ];
};
e.prototype.onSDKArgsActions = function() {
return {
flow1: function() {
return {
extra: {
traits: {
moreAreaFill: !0
}
}
};
}
};
};
e.prototype.unshiftAlgorithmList = function(r) {
return r;
};
var t;
e.DEFAULT_NEW_PLAYER_ROUND_AVG_SCORES = [ 38.8, 119.42, 277.22, 535.29, 917.94, 1453.22, 2102.52, 2840.54, 3630.66, 4457.54, 5301.4, 6145.31, 6996.73, 7831.55, 8653.27, 9454.57, 10229.07, 10980.83, 11703.94, 12406.62, 13085.65, 13752.23, 14388.48, 15009.41, 15605.82, 16196.66, 16771.54, 17335.41, 17902.95, 18442.7, 18988.84, 19525.74, 20059.67, 20573.16, 21089.93, 21578.43, 22115.86, 22606.72, 23114.66, 23614.35, 24135.78, 24666.36, 25160.91, 25653.25, 26067.62, 26578.39, 27090.16, 27550.54, 28048.15, 28637.33, 29122.47, 29605.34, 30025.25, 30447.97, 30913.83, 31308.02, 31772.2, 32217.48, 32681.56, 33166.66, 33691.49, 34283.48, 34871.03, 35287.52, 35818.27, 36202.96, 36622.35, 36954.63, 37337.89, 37877.75, 38359.79, 38665.7, 39111.13, 39301.61, 40024.24, 40565.82, 41113.43, 41629.23, 42386.45, 42470.86, 42880.58, 43443.86, 44174.93, 44557.48, 45192.32, 45284.05, 46092.99, 46791.04, 47568.7, 47869.04, 48759.1, 49577.54, 49699.02, 49795.67, 50813.35, 52259.89, 53030.52, 54085.88, 54435.59, 55466.98 ];
e.DEFAULT_ACTIVE_PLAYER_ROUND_AVG_SCORES = [ 31.99, 95.92, 203.34, 384.42, 662.9, 1036.57, 1521.19, 2131.49, 2842.77, 3613.21, 4409.53, 5204.1, 5984.74, 6749.72, 7496.22, 8221.75, 8927.82, 9611.23, 10271.25, 10911.04, 11529.2, 12127.44, 12709.23, 13276.46, 13829.03, 14374.38, 14911.45, 15439.91, 15966.86, 16490.03, 17012.11, 17531.88, 18045.39, 18563.67, 19078.18, 19597.03, 20109.64, 20615.91, 21119.69, 21615.24, 22109.8, 22597.75, 23085.31, 23554.46, 24018.97, 24487.9, 24952.08, 25416.04, 25870.42, 26326.94, 26777.58, 27221.58, 27665.36, 28107.83, 28541.88, 28984.72, 29411.66, 29838.1, 30270.33, 30715.32, 31134.04, 31577.08, 31998.77, 32437.05, 32872.84, 33321.43, 33729.04, 34175.28, 34597.16, 35034.94, 35459.24, 35894.26, 36325.42, 36740.49, 37163.14, 37594.69, 38035.16, 38496.01, 38932.37, 39389.05, 39860.76, 40358.07, 40803.97, 41293.8, 41728.22, 42155.06, 42638.53, 43094.91, 43621.18, 44057.18, 44506.58, 44979.79, 45515, 45940.26, 46420.43, 46940.03, 47402.79, 47839.3, 48364.63, 48883.74 ];
return t = a([ classId("CTRefactorMoreAreaTKXCTrait"), classMethodWatch() ], e);
}(Trait);
t.CTRefactorMoreAreaTKXCTrait = l;
cc._RF.pop();
}, {} ]
}, {}, [ "CTRefactorMoreAreaTKXCTrait" ]);
//# sourceMappingURL=index.js.map
