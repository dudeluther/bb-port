window.__require = function e(t, r, i) {
function o(s, n) {
if (!r[s]) {
if (!t[s]) {
var h = s.split("/");
h = h[h.length - 1];
if (!t[h]) {
var u = "function" == typeof __require && __require;
if (!n && u) return u(h, !0);
if (a) return a(h, !0);
throw new Error("Cannot find module '" + s + "'");
}
s = h;
}
var d = r[s] = {
exports: {}
};
t[s][0].call(d.exports, function(e) {
return o(t[s][1][e] || e);
}, d, d.exports, e, t, r, i);
}
return r[s].exports;
}
for (var a = "function" == typeof __require && __require, s = 0; s < i.length; s++) o(i[s]);
return o;
}({
HighScoreBreakthroughBoostTrait: [ function(e, t, r) {
"use strict";
cc._RF.push(t, "04bfbpc57lFc5UK/hHhlk7Y", "HighScoreBreakthroughBoostTrait");
var i, o = this && this.__extends || (i = function(e, t) {
return (i = Object.setPrototypeOf || {
__proto__: []
} instanceof Array && function(e, t) {
e.__proto__ = t;
} || function(e, t) {
for (var r in t) Object.prototype.hasOwnProperty.call(t, r) && (e[r] = t[r]);
})(e, t);
}, function(e, t) {
i(e, t);
function r() {
this.constructor = e;
}
e.prototype = null === t ? Object.create(t) : (r.prototype = t.prototype, new r());
}), a = this && this.__assign || function() {
return (a = Object.assign || function(e) {
for (var t, r = 1, i = arguments.length; r < i; r++) {
t = arguments[r];
for (var o in t) Object.prototype.hasOwnProperty.call(t, o) && (e[o] = t[o]);
}
return e;
}).apply(this, arguments);
}, s = this && this.__decorate || function(e, t, r, i) {
var o, a = arguments.length, s = a < 3 ? t : null === i ? i = Object.getOwnPropertyDescriptor(t, r) : i;
if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) s = Reflect.decorate(e, t, r, i); else for (var n = e.length - 1; n >= 0; n--) (o = e[n]) && (s = (a < 3 ? o(s) : a > 3 ? o(t, r, s) : o(t, r)) || s);
return a > 3 && s && Object.defineProperty(t, r, s), s;
}, n = this && this.__read || function(e, t) {
var r = "function" == typeof Symbol && e[Symbol.iterator];
if (!r) return e;
var i, o, a = r.call(e), s = [];
try {
for (;(void 0 === t || t-- > 0) && !(i = a.next()).done; ) s.push(i.value);
} catch (e) {
o = {
error: e
};
} finally {
try {
i && !i.done && (r = a.return) && r.call(a);
} finally {
if (o) throw o.error;
}
}
return s;
}, h = this && this.__spread || function() {
for (var e = [], t = 0; t < arguments.length; t++) e = e.concat(n(arguments[t]));
return e;
};
Object.defineProperty(r, "__esModule", {
value: !0
});
r.HighScoreBreakthroughBoostTrait = void 0;
var u = "HighScoreBreakthroughBoostTraitData", d = {
firstHighScore: 0,
lastHighScore: 0,
hasBreakthroughOnce: !1,
pendingHardRounds: 0,
activeHardRounds: 0,
totalHardRounds: 0,
triggerBaseScore: 0,
consecutiveDeathCount: 0,
revivalSuddenDeathCount: 0,
isShielded: !1,
lastHighScoreUpdateTime: 0,
activeRevived: !1,
activeReviveRoundNum: 0,
activeHardPuzzleAfterRevive: !1,
activeTriggered: !1
}, c = function(e) {
o(t, e);
function t() {
var t = null !== e && e.apply(this, arguments) || this;
t._storageData = null;
return t;
}
t.prototype.log = function() {};
t.prototype.registerTraitEventsMethods = function() {
return [ {
className: "ClassAlgorithmLifeCycle_GameStart_Proxy",
methodName: "onGameStart"
}, {
className: "ClassAlgorithmLifeCycle_GameEnd_Proxy",
methodName: "onGameEnd"
}, {
className: "ClassAlgorithmLifeCycle_Revive_Proxy",
methodName: "onRevive_Success"
}, {
className: "ClassAlgorithmLifeCycle_Replay_Proxy",
methodName: "onGameReplay"
} ];
};
t.prototype.data = function() {
return {
remainingHardRounds: 0,
isTriggeredThisGame: !1,
triggerScoreThisGame: 0,
hasRevivedThisGame: !1,
hasHardPuzzleThisGame: !1,
isCurrentRoundSuccess: !1,
currentAlgoSource: 0,
hasBreakthroughThisGame: !1,
previousHighScoreThisGame: 0,
reviveRoundNum: 0,
hasHardPuzzleAfterRevive: !1,
lastHardPuzzleRound: 0
};
};
t.prototype.onCreate = function() {
this.initStorageData();
};
t.prototype.onActive = function(e) {
hs.tp.isClassAlgorithmLifeCycle_GameStart_ProxyOnGameStart(e) && this.onGameStart(e);
hs.tp.isClassAlgorithmLifeCycle_GameEnd_ProxyOnGameEnd(e) && this.onGameEnd();
hs.tp.isClassAlgorithmLifeCycle_Replay_ProxyOnGameReplay(e) && this.onGameEnd();
hs.tp.isClassAlgorithmLifeCycle_Revive_ProxyOnRevive_Success(e) && this.onReviveSuccess();
hs.tp.isClassScoreTip_ProxyPlayHighScoreEffects(e) && this.onBreakHighScore();
hs.tp.isAlgorithmProcessInfoAlgorithmSuccess(e) && this.onAlgorithmSuccess();
hs.tp.isClassAlgorithmStrategy_Condition_ProxyOnAlgorithmStrategyCondition(e) && this.onAlgorithmStrategyCondition();
hs.tp.isCrossClearHardTraitIsLockTarit(e) && this.state.hasHardPuzzleThisGame && this.state.remainingHardRounds > 0 && (e.returnValue = !0);
hs.tp.isCrossClearHardTraitIsHardOfferNow(e) && this.state.hasHardPuzzleThisGame && this.state.remainingHardRounds > 0 && (e.returnValue = !1);
hs.tp.isParallelClearHardTraitShouldBlockParallelClearHard(e) && this.state.hasHardPuzzleThisGame && this.state.remainingHardRounds > 0 && (e.returnValue = !0);
};
t.prototype.onGameStart = function(e) {
var t, r, i = e.args[0], o = null !== (r = null === (t = null == i ? void 0 : i.data) || void 0 === t ? void 0 : t.newGame) && void 0 !== r && r, a = this.storageData;
this.setState({
remainingHardRounds: 0,
isTriggeredThisGame: !1,
triggerScoreThisGame: 0,
hasRevivedThisGame: !1,
hasHardPuzzleThisGame: !1,
isCurrentRoundSuccess: !1,
currentAlgoSource: 0,
hasBreakthroughThisGame: !1,
previousHighScoreThisGame: 0,
reviveRoundNum: 0,
hasHardPuzzleAfterRevive: !1,
lastHardPuzzleRound: 0
});
if (a.isShielded) {
this.setState({
remainingHardRounds: 0
});
this.syncActiveHardRounds(0);
} else if (o) {
a.activeRevived = !1;
a.activeReviveRoundNum = 0;
a.activeHardPuzzleAfterRevive = !1;
a.activeTriggered = !1;
this.saveStorageData();
if (a.pendingHardRounds > 0) {
this.setState({
remainingHardRounds: a.pendingHardRounds,
isTriggeredThisGame: !0
});
a.pendingHardRounds = 0;
a.activeHardRounds = this.state.remainingHardRounds;
a.activeTriggered = !0;
this.saveStorageData();
} else if (a.totalHardRounds > 0) {
this.setState({
remainingHardRounds: a.totalHardRounds,
isTriggeredThisGame: !0
});
a.activeHardRounds = a.totalHardRounds;
a.activeTriggered = !0;
this.saveStorageData();
}
} else {
a.activeTriggered && this.setState({
isTriggeredThisGame: !0
});
a.activeHardRounds > 0 && 0 === this.state.remainingHardRounds && this.setState({
remainingHardRounds: a.activeHardRounds,
isTriggeredThisGame: !0
});
a.activeRevived && this.setState({
hasRevivedThisGame: !0,
reviveRoundNum: a.activeReviveRoundNum,
hasHardPuzzleAfterRevive: a.activeHardPuzzleAfterRevive
});
}
};
t.prototype.onGameEnd = function() {
var e, t, r = null !== (t = null === (e = hs.classScoreInfo) || void 0 === e ? void 0 : e.score) && void 0 !== t ? t : 0, i = this.storageData;
!this.state.hasBreakthroughThisGame && i.lastHighScore > 0 && r > i.lastHighScore && this.setState({
hasBreakthroughThisGame: !0,
previousHighScoreThisGame: i.lastHighScore
});
this.state.hasBreakthroughThisGame ? this.handleBreakthroughSettlement(r) : this.notifyBreakthroughSettlement(r, !1, 0, i.lastHighScore);
this.checkShieldCondition();
this.syncActiveHardRounds(this.state.remainingHardRounds);
};
t.prototype.handleBreakthroughSettlement = function(e) {
var t = this.storageData, r = this.state.previousHighScoreThisGame;
if (0 !== t.firstHighScore) {
var i = e - r, o = i > this.props.scoreDiffThreshold;
t.lastHighScore = e;
t.hasBreakthroughOnce = !0;
t.lastHighScoreUpdateTime = Date.now();
if (t.isShielded) {
t.isShielded = !1;
t.consecutiveDeathCount = 0;
t.revivalSuddenDeathCount = 0;
}
var a = this.dynamicAdjustHighScoreProgressPercent();
if (this.shouldTrigger() && o) {
var s = Math.ceil(i / this.props.scoreDiffThreshold);
t.pendingHardRounds = s;
t.totalHardRounds = s;
t.triggerBaseScore = e;
Math.floor(e * a / 100);
} else if (!o) {
t.totalHardRounds = 0;
t.pendingHardRounds = 0;
t.activeHardRounds = 0;
this.setState({
remainingHardRounds: 0
});
}
this.saveStorageData();
this.notifyBreakthroughSettlement(e, !0, i, r);
} else {
t.firstHighScore = e;
t.lastHighScore = e;
t.lastHighScoreUpdateTime = Date.now();
this.saveStorageData();
this.notifyBreakthroughSettlement(e, !1, 0, r);
}
};
t.prototype.onReviveSuccess = function() {
var e, t, r = null !== (t = null === (e = hs.classGameInfo) || void 0 === e ? void 0 : e.roundNum) && void 0 !== t ? t : 0, i = this.dynamicAdjustRevivalInterruptsPuzzle();
this.setState({
hasRevivedThisGame: !0,
reviveRoundNum: r
});
var o = this.storageData;
o.activeRevived = !0;
o.activeReviveRoundNum = r;
this.saveStorageData();
if (i) if (this.state.hasHardPuzzleThisGame && this.state.remainingHardRounds > 0) {
this.setState({
remainingHardRounds: 0
});
this.syncActiveHardRounds(0);
} else this.state.hasHardPuzzleThisGame;
"revivalSuddenDeath" === this.props.shieldType && this.state.isTriggeredThisGame;
};
t.prototype.onBreakHighScore = function() {
if (!hs.classScoreInfo.highScoreEncourageEffectsSate && !this.state.hasBreakthroughThisGame) {
var e = this.storageData.lastHighScore;
this.setState({
hasBreakthroughThisGame: !0,
previousHighScoreThisGame: e
});
}
};
t.prototype.onAlgorithmSuccess = function() {
var e, t, r, i, o, a, s, n, h = null !== (t = null === (e = hs.algorithmName) || void 0 === e ? void 0 : e.algoActualId) && void 0 !== t ? t : 0, u = null !== (i = null === (r = hs.algorithmName) || void 0 === r ? void 0 : r.algoExpectedId) && void 0 !== i ? i : 0;
(null === (o = hs.OFFER_TYPE_REAL_STRINGS) || void 0 === o ? void 0 : o[h]) || null === (a = hs.OFFER_TYPE_STRINGS) || void 0 === a || a[h], 
(null === (s = hs.OFFER_TYPE_REAL_STRINGS) || void 0 === s ? void 0 : s[u]) || null === (n = hs.OFFER_TYPE_STRINGS) || void 0 === n || n[u];
this.setState({
isCurrentRoundSuccess: !0
});
if (this.state.remainingHardRounds > 0 && this.state.hasHardPuzzleThisGame) {
var d = hs.algorithmStrategyInfo.algorithmSourceLevel2 === this.traitName, c = h == hs.OFFER_TYPE.REVIVE || h == hs.OFFER_TYPE.REVIVE_CLEAR, l = !hs.isValueInEnum(h, hs.OFFER_TYPE_DIFFICULTY);
if (!this.dynamicCheckHardPuzzleSuccess(d, c, l)) return;
var g = Math.max(0, this.state.remainingHardRounds - 1);
this.setState({
remainingHardRounds: g
});
this.syncActiveHardRounds(g);
}
};
t.prototype.getCurrentTriggerScore = function() {
var e = this.storageData.triggerBaseScore;
return Math.floor(e * (this.dynamicAdjustHighScoreProgressPercent() / 100));
};
t.prototype.dynamicAdjustHighScoreProgressPercent = function() {
return this.props.highScoreProgressPercent;
};
t.prototype.dynamicAdjustRevivalInterruptsPuzzle = function() {
return this.props.revivalInterruptsPuzzle;
};
t.prototype.dynamicCheckCanTrigger = function() {
return !0;
};
t.prototype.dynamicCheckHardPuzzleSuccess = function(e, t, r) {
return !(t || !e) && (!r || this.props.degradeCountsAsRound);
};
t.prototype.notifyBreakthroughSettlement = function() {};
t.prototype.onAlgorithmStrategyCondition = function() {
var e, t, r = hs.classScoreInfo.score, i = this.storageData.triggerBaseScore, o = this.getCurrentTriggerScore();
i > 0 && Math.floor(r / i * 100);
if (this.canTriggerHardPuzzle()) {
if (!(r < o)) {
var a = this.state.hasRevivedThisGame, s = null !== (t = null === (e = hs.classGameInfo) || void 0 === e ? void 0 : e.roundNum) && void 0 !== t ? t : 0;
this.setState({
hasHardPuzzleThisGame: !0,
hasHardPuzzleAfterRevive: a || this.state.hasHardPuzzleAfterRevive,
lastHardPuzzleRound: s
});
if (a && !this.storageData.activeHardPuzzleAfterRevive) {
this.storageData.activeHardPuzzleAfterRevive = !0;
this.saveStorageData();
}
this.setHardPuzzleAlgorithm();
}
} else this.state.remainingHardRounds;
};
t.prototype.shouldTrigger = function() {
var e = this.storageData;
return !(e.lastHighScore < this.props.minHistoryHighScore || !e.hasBreakthroughOnce || e.isShielded || !this.dynamicCheckCanTrigger());
};
t.prototype.canTriggerHardPuzzle = function() {
return !(this.state.remainingHardRounds <= 0 || !this.shouldTrigger());
};
t.prototype.setHardPuzzleAlgorithm = function() {
var e, t, r = hs.OFFER_TYPE.KUN_NAN_TI, i = ((null === (e = hs.OFFER_TYPE_REAL_STRINGS) || void 0 === e ? void 0 : e[r]) || null === (t = hs.OFFER_TYPE_STRINGS) || void 0 === t || t[r], 
hs.algorithmStrategyInfo.algorithmList), o = h([ r ], i);
hs.algorithmStrategyInfo.setAlgorithmList(o);
hs.algorithmStrategyInfo.setAlgorithmSourceLevel1(hs.ClassAlgorithmSourceType.AlgoTrait);
hs.algorithmStrategyInfo.setAlgorithmSourceLevel2(this.traitName);
};
t.prototype.checkShieldCondition = function() {
"deathScore" === this.props.shieldType ? this.checkDeathScoreShieldCondition() : "revivalSuddenDeath" === this.props.shieldType && this.checkRevivalSuddenDeathShieldCondition();
this.saveStorageData();
};
t.prototype.checkDeathScoreShieldCondition = function() {
var e, t, r = this.storageData, i = null !== (t = null === (e = hs.classScoreInfo) || void 0 === e ? void 0 : e.score) && void 0 !== t ? t : 0, o = this.getCurrentTriggerScore();
if (this.state.isTriggeredThisGame) {
var a = this.props.shieldDeathScoreRange || 500;
if (i >= o && i < o + a) {
r.consecutiveDeathCount++;
r.consecutiveDeathCount >= 2 && (r.isShielded = !0);
} else {
r.consecutiveDeathCount;
r.consecutiveDeathCount = 0;
}
}
};
t.prototype.checkRevivalSuddenDeathShieldCondition = function() {
var e, t, r, i = this.storageData, o = (null === (e = hs.classScoreInfo) || void 0 === e ? void 0 : e.score, 
this.getCurrentTriggerScore(), this.props.shieldRevivalSuddenDeathCount || 2);
if (this.state.hasRevivedThisGame) {
var a = null !== (r = null === (t = hs.classGameInfo) || void 0 === t ? void 0 : t.roundNum) && void 0 !== r ? r : 0, s = a - this.state.reviveRoundNum <= 5, n = this.state.hasHardPuzzleAfterRevive, h = a === this.state.lastHardPuzzleRound, u = this.state.remainingHardRounds > 0 || h;
if (s && n && u) {
i.revivalSuddenDeathCount++;
i.revivalSuddenDeathCount >= o && (i.isShielded = !0);
}
}
};
Object.defineProperty(t.prototype, "storageData", {
get: function() {
this._storageData || this.initStorageData();
return this._storageData;
},
enumerable: !1,
configurable: !0
});
t.prototype.initStorageData = function() {
this._storageData = hs.storage.getItem(u, a({}, d));
};
t.prototype.saveStorageData = function() {
hs.storage.setItem(u, this._storageData);
};
t.prototype.syncActiveHardRounds = function(e) {
this.storageData.activeHardRounds = e;
this.saveStorageData();
};
s([ hs.Algorithm() ], t.prototype, "onActive", null);
return s([ classId("HighScoreBreakthroughBoostTrait"), classMethodWatch() ], t);
}(Trait);
r.HighScoreBreakthroughBoostTrait = c;
cc._RF.pop();
}, {} ],
HighScoreBreakthroughBoost_Round1_Trait: [ function(e, t, r) {
"use strict";
cc._RF.push(t, "b7f1cTSijZMG59Xbi0Kg7xB", "HighScoreBreakthroughBoost_Round1_Trait");
var i, o = this && this.__extends || (i = function(e, t) {
return (i = Object.setPrototypeOf || {
__proto__: []
} instanceof Array && function(e, t) {
e.__proto__ = t;
} || function(e, t) {
for (var r in t) Object.prototype.hasOwnProperty.call(t, r) && (e[r] = t[r]);
})(e, t);
}, function(e, t) {
i(e, t);
function r() {
this.constructor = e;
}
e.prototype = null === t ? Object.create(t) : (r.prototype = t.prototype, new r());
}), a = this && this.__decorate || function(e, t, r, i) {
var o, a = arguments.length, s = a < 3 ? t : null === i ? i = Object.getOwnPropertyDescriptor(t, r) : i;
if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) s = Reflect.decorate(e, t, r, i); else for (var n = e.length - 1; n >= 0; n--) (o = e[n]) && (s = (a < 3 ? o(s) : a > 3 ? o(t, r, s) : o(t, r)) || s);
return a > 3 && s && Object.defineProperty(t, r, s), s;
};
Object.defineProperty(r, "__esModule", {
value: !0
});
r.HighScoreBreakthroughBoost_Round1_Trait = void 0;
var s = function(e) {
o(t, e);
function t() {
return null !== e && e.apply(this, arguments) || this;
}
Object.defineProperty(t.prototype, "onActiveCondition", {
get: function() {
return !1;
},
enumerable: !1,
configurable: !0
});
t.prototype.isClassAlgorithmStrategyIOS_Condition_ProxyOnAlgorithmStrategyCondition = function() {
this.onAlgorithmStrategyCondition();
};
return a([ classId("HighScoreBreakthroughBoostTrait", "Round1") ], t);
}(e("./HighScoreBreakthroughBoostTrait").HighScoreBreakthroughBoostTrait);
r.HighScoreBreakthroughBoost_Round1_Trait = s;
cc._RF.pop();
}, {
"./HighScoreBreakthroughBoostTrait": "HighScoreBreakthroughBoostTrait"
} ]
}, {}, [ "HighScoreBreakthroughBoostTrait", "HighScoreBreakthroughBoost_Round1_Trait" ]);
//# sourceMappingURL=index.js.map
