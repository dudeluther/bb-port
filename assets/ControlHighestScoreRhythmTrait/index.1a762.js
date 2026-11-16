window.__require = function t(e, i, r) {
function o(a, n) {
if (!i[a]) {
if (!e[a]) {
var l = a.split("/");
l = l[l.length - 1];
if (!e[l]) {
var h = "function" == typeof __require && __require;
if (!n && h) return h(l, !0);
if (s) return s(l, !0);
throw new Error("Cannot find module '" + a + "'");
}
a = l;
}
var c = i[a] = {
exports: {}
};
e[a][0].call(c.exports, function(t) {
return o(e[a][1][t] || t);
}, c, c.exports, t, e, i, r);
}
return i[a].exports;
}
for (var s = "function" == typeof __require && __require, a = 0; a < r.length; a++) o(r[a]);
return o;
}({
ControlHighestScoreRhythmTrait: [ function(t, e, i) {
"use strict";
cc._RF.push(e, "4cb3bZS0olIvrFuGe7e33ox", "ControlHighestScoreRhythmTrait");
var r, o, s = this && this.__extends || (r = function(t, e) {
return (r = Object.setPrototypeOf || {
__proto__: []
} instanceof Array && function(t, e) {
t.__proto__ = e;
} || function(t, e) {
for (var i in e) Object.prototype.hasOwnProperty.call(e, i) && (t[i] = e[i]);
})(t, e);
}, function(t, e) {
r(t, e);
function i() {
this.constructor = t;
}
t.prototype = null === e ? Object.create(e) : (i.prototype = e.prototype, new i());
}), a = this && this.__decorate || function(t, e, i, r) {
var o, s = arguments.length, a = s < 3 ? e : null === r ? r = Object.getOwnPropertyDescriptor(e, i) : r;
if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) a = Reflect.decorate(t, e, i, r); else for (var n = t.length - 1; n >= 0; n--) (o = t[n]) && (a = (s < 3 ? o(a) : s > 3 ? o(e, i, a) : o(e, i)) || a);
return s > 3 && a && Object.defineProperty(e, i, a), a;
}, n = this && this.__values || function(t) {
var e = "function" == typeof Symbol && Symbol.iterator, i = e && t[e], r = 0;
if (i) return i.call(t);
if (t && "number" == typeof t.length) return {
next: function() {
t && r >= t.length && (t = void 0);
return {
value: t && t[r++],
done: !t
};
}
};
throw new TypeError(e ? "Object is not iterable." : "Symbol.iterator is not defined.");
}, l = this && this.__read || function(t, e) {
var i = "function" == typeof Symbol && t[Symbol.iterator];
if (!i) return t;
var r, o, s = i.call(t), a = [];
try {
for (;(void 0 === e || e-- > 0) && !(r = s.next()).done; ) a.push(r.value);
} catch (t) {
o = {
error: t
};
} finally {
try {
r && !r.done && (i = s.return) && i.call(s);
} finally {
if (o) throw o.error;
}
}
return a;
}, h = this && this.__spread || function() {
for (var t = [], e = 0; e < arguments.length; e++) t = t.concat(l(arguments[e]));
return t;
};
Object.defineProperty(i, "__esModule", {
value: !0
});
i.ControlHighestScoreRhythmTrait = i.SelectedStateType = void 0;
(function(t) {
t.NOT_SELECTED = "notSelected";
t.NONE = "none";
t.HIGHEST = "highest";
t.HIGHEST_80 = "highest80";
})(o = i.SelectedStateType || (i.SelectedStateType = {}));
var c = function(t) {
s(e, t);
function e() {
var e = null !== t && t.apply(this, arguments) || this;
e.config = null;
e.hasInit = !1;
e.STORAGE_KEY = "ControlHighestScoreRhythmTraitData";
e._isReplacedThisRound = !1;
return e;
}
e.prototype.registerTraitEventsMethods = function() {
return [ {
className: "ClassDataStatistics_Dot_Proxy",
methodName: "onGameEnd"
}, {
className: "ClassGame_Proxy",
methodName: "onGameStart"
}, {
className: "ClassGame_Replay_Proxy",
methodName: "onGameReplay"
} ];
};
e.prototype.onCreate = function() {
this.initData();
};
e.prototype.onActive = function(t) {
var e, i;
if (hs.tp.isClassGame_ProxyOnGameStart(t)) {
var r = t.args[0];
(null === (e = null == r ? void 0 : r.data) || void 0 === e ? void 0 : e.newGame) && this.onGameStart();
}
(hs.tp.isClassDataStatistics_Dot_ProxyOnGameEnd(t) || hs.tp.isClassGame_Replay_ProxyOnGameReplay(t)) && this.onGameEnd();
if (hs.tp.isClassAlgorithmStrategy_Deal_ProxyTriggerSpecialTrait(t) || hs.tp.isClassAlgorithmStrategyIOS_Deal_ProxyTriggerSpecialTrait(t)) {
if ((null === (i = hs.gameInfo) || void 0 === i ? void 0 : i.gameMode) !== hs.GameMode.Class) return;
this.state.selectedState !== o.NOT_SELECTED && this.speicalAlgorithm();
}
if (hs.tp.isClassAlgorithmStrategy_Replace_ProxyPreprocessingDiffAlgorithm(t) || hs.tp.isClassAlgorithmStrategyIOS_Replace_ProxyPreprocessingDiffAlgorithm(t)) {
this._isReplacedThisRound = !1;
this.state.selectedState !== o.NOT_SELECTED && this.replaceAlgorithm();
}
hs.tp.isAlgorithmProcessInfoAlgorithmSuccess(t) && this.state.selectedState !== o.NOT_SELECTED && this.onAlgorithmSuccess();
hs.tp.isParallelClearHardTraitShouldBlockParallelClearHard(t) && this._isReplacedThisRound && (t.returnValue = !0);
hs.tp.isCrossClearHardTraitIsLockTarit(t) && this._isReplacedThisRound && (t.returnValue = !0);
};
e.prototype.initData = function() {
var t, e, i, r;
if (!this.hasInit) {
try {
var s = storage.getItem(this.STORAGE_KEY, {
lastBreakGameNum: -1,
lastHighScore: 0,
hasTriggeredIntuition: !1,
selectedState: o.NOT_SELECTED
});
if (s) {
this.state.lastBreakGameNum = null !== (t = s.lastBreakGameNum) && void 0 !== t ? t : -1;
this.state.lastHighScore = null !== (e = s.lastHighScore) && void 0 !== e ? e : 0;
this.state.hasTriggeredIntuition = null !== (i = s.hasTriggeredIntuition) && void 0 !== i && i;
this.state.selectedState = null !== (r = s.selectedState) && void 0 !== r ? r : o.NOT_SELECTED;
this.state.pendingIntuitionTrigger = !1;
}
this.loadConfig();
} catch (t) {}
this.hasInit = !0;
}
};
e.prototype.loadConfig = function() {
var t = this;
try {
hs.ResLoader.loadByBundle("ControlHighestScoreRhythmTrait", "configs/scoreRhythmConfig", cc.JsonAsset, function(e, i) {
e || (t.config = i.json);
});
} catch (t) {}
};
e.prototype.save = function() {
storage.setItem(this.STORAGE_KEY, {
lastBreakGameNum: this.state.lastBreakGameNum,
lastHighScore: this.state.lastHighScore,
hasTriggeredIntuition: this.state.hasTriggeredIntuition,
selectedState: this.state.selectedState
});
};
e.prototype.onGameStart = function() {
this.state.hasTriggeredIntuition = !1;
this.state.pendingIntuitionTrigger = !1;
this.calculateSelectedState();
};
e.prototype.calculateSelectedState = function() {
var t, e, i, r;
if (this.config) {
var s = null !== (e = null === (t = hs.scoreInfo) || void 0 === t ? void 0 : t.highRecordScore) && void 0 !== e ? e : 0, a = null !== (r = null === (i = hs.classGameInfo) || void 0 === i ? void 0 : i.gameNum) && void 0 !== r ? r : 0, n = this.getScoreRangeConfig(s);
if (n) if ("range_30000_max" !== n.id) {
var l;
l = this.state.lastBreakGameNum >= 0 ? a - this.state.lastBreakGameNum - 1 : a;
var h = this.getIntervalConfig(n, l);
if (h) if (Math.floor(100 * Math.random()) + 1 <= h.highestProb) {
this.state.selectedState = o.HIGHEST;
this.save();
} else if (Math.floor(100 * Math.random()) + 1 <= h.highest80Prob) {
this.state.selectedState = o.HIGHEST_80;
this.save();
} else {
this.state.selectedState = o.NONE;
this.save();
} else {
this.state.selectedState = o.NONE;
this.save();
}
} else {
this.state.selectedState = o.NONE;
this.save();
} else {
this.state.selectedState = o.NONE;
this.save();
}
} else {
this.state.selectedState = o.NONE;
this.save();
}
};
e.prototype.onGameEnd = function() {
var t, e, i, r, o, s, a = null !== (e = null === (t = hs.scoreInfo) || void 0 === t ? void 0 : t.score) && void 0 !== e ? e : 0, n = null !== (r = null === (i = hs.scoreInfo) || void 0 === i ? void 0 : i.highRecordScore) && void 0 !== r ? r : 0, l = null !== (s = null === (o = hs.classGameInfo) || void 0 === o ? void 0 : o.gameNum) && void 0 !== s ? s : 0;
if (a >= n && a > this.state.lastHighScore) {
this.state.lastBreakGameNum = l;
this.state.lastHighScore = a;
}
this.save();
};
e.prototype.getScoreRangeConfig = function(t) {
var e, i;
if (!this.config) return null;
try {
for (var r = n(this.config.scoreRanges), o = r.next(); !o.done; o = r.next()) {
var s = o.value, a = t >= s.minScore, l = null === s.maxScore || t < s.maxScore;
if (a && l) return s;
}
} catch (t) {
e = {
error: t
};
} finally {
try {
o && !o.done && (i = r.return) && i.call(r);
} finally {
if (e) throw e.error;
}
}
return null;
};
e.prototype.getIntervalConfig = function(t, e) {
var i, r;
try {
for (var o = n(t.intervals), s = o.next(); !s.done; s = o.next()) {
var a = s.value, l = e >= a.min, h = null === a.max || e < a.max;
if (l && h) return a;
}
} catch (t) {
i = {
error: t
};
} finally {
try {
s && !s.done && (r = o.return) && r.call(o);
} finally {
if (i) throw i.error;
}
}
return null;
};
e.prototype.checkTimeLimit = function(t) {
var e, i;
return null === t.timeLimit || (null !== (i = null === (e = hs.classTimerInfo) || void 0 === e ? void 0 : e.spendTime) && void 0 !== i ? i : 0) / 1e3 < t.timeLimit;
};
e.prototype.replaceDifficultyAlgorithm = function(t) {
var e, i, r = null === (e = hs.algorithmStrategyInfo) || void 0 === e ? void 0 : e.algorithmList;
if (Array.isArray(r) && 0 !== r.length) {
var o = Object.values(null !== (i = hs.OFFER_TYPE_DIFFICULTY) && void 0 !== i ? i : {}).filter(function(t) {
return "number" == typeof t;
}), s = r.find(function(t) {
return o.includes(t);
});
if (void 0 !== s) {
var a = hs.algorithmStrategyLogic.replaceAlgorithmType(r, s, t);
hs.algorithmStrategyInfo.setAlgorithmList(a);
hs.algorithmStrategyInfo.setAlgorithmSourceLevel1(hs.ClassAlgorithmSourceType.AlgoTrait);
hs.algorithmStrategyInfo.setAlgorithmSourceLevel2(this.traitName);
this._isReplacedThisRound = !0;
}
}
};
e.prototype.setAlgorithmPriority = function(t, e) {
var i;
void 0 === e && (e = !1);
var r = Array.isArray(null === (i = hs.algorithmStrategyInfo) || void 0 === i ? void 0 : i.algorithmPriorityList) ? h(hs.algorithmStrategyInfo.algorithmPriorityList) : [];
r.unshift(t);
hs.algorithmStrategyInfo.setAlgorithmPriorityList(r);
hs.algorithmStrategyInfo.setAlgorithmSourceLevel1(hs.ClassAlgorithmSourceType.Priority);
hs.algorithmStrategyInfo.setAlgorithmSourceLevel2(this.traitName);
e && hs.algorithmStrategyInfo.setAlgorithmFailList([ hs.OFFER_TYPE.SHANG_ZENG_3 ]);
this._isReplacedThisRound = !0;
};
e.prototype.speicalAlgorithm = function() {
var t, e;
if (this.config && this.state.selectedState === o.NONE) {
var i = null !== (e = null === (t = hs.scoreInfo) || void 0 === t ? void 0 : t.highRecordScore) && void 0 !== e ? e : 0, r = this.getScoreRangeConfig(i);
r && "range_30000_max" !== r.id && this.executeUnselectedStrategy(r);
}
};
e.prototype.executeUnselectedStrategy = function(t) {
var e, i, r, o, s, a, n = t.unselectedStrategy;
if ("BOARD" !== n.type && "BOARD_WITH_CONDITION" === n.type && n.condition) {
var l = (null !== (i = null === (e = hs.classTimerInfo) || void 0 === e ? void 0 : e.spendTime) && void 0 !== i ? i : 0) / 1e3, h = null !== (o = null === (r = hs.scoreInfo) || void 0 === r ? void 0 : r.score) && void 0 !== o ? o : 0, c = (null !== (a = null === (s = hs.scoreInfo) || void 0 === s ? void 0 : s.highRecordScore) && void 0 !== a ? a : 0) * n.condition.scoreRatio;
if (l > n.condition.minTime && h > c) if (this.state.hasTriggeredIntuition) ; else {
this.setAlgorithmPriority(hs.OFFER_TYPE.ZHI_JUE_NAN_TI, !0);
this.state.pendingIntuitionTrigger = !0;
}
}
};
e.prototype.replaceAlgorithm = function() {
var t, e;
if (this.config) {
var i = null !== (e = null === (t = hs.scoreInfo) || void 0 === t ? void 0 : t.highRecordScore) && void 0 !== e ? e : 0, r = this.getScoreRangeConfig(i);
r && "range_30000_max" !== r.id && this.checkTimeLimit(r) && (this.state.selectedState !== o.HIGHEST && this.state.selectedState !== o.HIGHEST_80 || this.executeSelectedStrategy(r));
}
};
e.prototype.executeSelectedStrategy = function(t) {
var e, i, r, s, a, n = t.strategy, l = null === (e = hs.boardInfo) || void 0 === e ? void 0 : e.faceBlocks, h = l ? hs.binarySupport.getWeightValue(l) : 0, c = null !== (r = null === (i = hs.scoreInfo) || void 0 === i ? void 0 : i.score) && void 0 !== r ? r : 0, u = null !== (a = null === (s = hs.scoreInfo) || void 0 === s ? void 0 : s.highRecordScore) && void 0 !== a ? a : 0;
if ("BOARD" !== n.type) if ((u > 0 ? c / u : 0) >= (this.state.selectedState === o.HIGHEST ? 1 : .8)) {
if ("INTUITION_DIFFICULTY_THEN_BOARD" === n.afterProgress || "INTUITION_DIFFICULTY_ONCE_THEN_BOARD" === n.afterProgress) if (this.state.hasTriggeredIntuition) ; else {
this.setAlgorithmPriority(hs.OFFER_TYPE.ZHI_JUE_NAN_TI);
this.state.pendingIntuitionTrigger = !0;
}
} else "EMPTYDONGFILL" === n.beforeProgress || "EMPTYDONGFILL_NO_DIFFICULTY" === n.beforeProgress ? h < 300 && n.weightLt300 ? this.replaceDifficultyAlgorithm(hs.OFFER_TYPE.EMPTYDONGFILL) : h >= 300 && n.weightGte300 ? this.replaceDifficultyAlgorithm(hs.OFFER_TYPE.DUO_XIAO) : this.replaceDifficultyAlgorithm(hs.OFFER_TYPE.EMPTYDONGFILL) : n.beforeProgress;
};
e.prototype.onAlgorithmSuccess = function() {
var t, e, i;
if ((null === (t = hs.gameInfo) || void 0 === t ? void 0 : t.gameMode) === hs.GameMode.Class && this.state.pendingIntuitionTrigger && (null === (e = hs.algorithmStrategyInfo) || void 0 === e ? void 0 : e.algorithmSourceLevel2) === this.traitName) {
var r = null === (i = hs.classAlgorithmName) || void 0 === i ? void 0 : i.algoActualId;
if (null != r) if (r === hs.OFFER_TYPE.ZHI_JUE_NAN_TI) {
this.state.hasTriggeredIntuition = !0;
this.state.pendingIntuitionTrigger = !1;
this.save();
} else this.state.pendingIntuitionTrigger = !1;
}
};
e.prototype.getIsReplacedThisRound = function() {
return this._isReplacedThisRound;
};
return a([ classId("ControlHighestScoreRhythmTrait") ], e);
}(Trait);
i.ControlHighestScoreRhythmTrait = c;
cc._RF.pop();
}, {} ]
}, {}, [ "ControlHighestScoreRhythmTrait" ]);
//# sourceMappingURL=index.js.map
