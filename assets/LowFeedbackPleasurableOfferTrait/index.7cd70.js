window.__require = function t(e, r, o) {
function i(n, a) {
if (!r[n]) {
if (!e[n]) {
var l = n.split("/");
l = l[l.length - 1];
if (!e[l]) {
var u = "function" == typeof __require && __require;
if (!a && u) return u(l, !0);
if (s) return s(l, !0);
throw new Error("Cannot find module '" + n + "'");
}
n = l;
}
var h = r[n] = {
exports: {}
};
e[n][0].call(h.exports, function(t) {
return i(e[n][1][t] || t);
}, h, h.exports, t, e, r, o);
}
return r[n].exports;
}
for (var s = "function" == typeof __require && __require, n = 0; n < o.length; n++) i(o[n]);
return i;
}({
LowFeedbackPleasurableOfferTrait: [ function(t, e, r) {
"use strict";
cc._RF.push(e, "6aa76hYeWJJ5ZvlTjq/UPj5", "LowFeedbackPleasurableOfferTrait");
var o, i = this && this.__extends || (o = function(t, e) {
return (o = Object.setPrototypeOf || {
__proto__: []
} instanceof Array && function(t, e) {
t.__proto__ = e;
} || function(t, e) {
for (var r in e) Object.prototype.hasOwnProperty.call(e, r) && (t[r] = e[r]);
})(t, e);
}, function(t, e) {
o(t, e);
function r() {
this.constructor = t;
}
t.prototype = null === e ? Object.create(e) : (r.prototype = e.prototype, new r());
}), s = this && this.__assign || function() {
return (s = Object.assign || function(t) {
for (var e, r = 1, o = arguments.length; r < o; r++) {
e = arguments[r];
for (var i in e) Object.prototype.hasOwnProperty.call(e, i) && (t[i] = e[i]);
}
return t;
}).apply(this, arguments);
}, n = this && this.__decorate || function(t, e, r, o) {
var i, s = arguments.length, n = s < 3 ? e : null === o ? o = Object.getOwnPropertyDescriptor(e, r) : o;
if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) n = Reflect.decorate(t, e, r, o); else for (var a = t.length - 1; a >= 0; a--) (i = t[a]) && (n = (s < 3 ? i(n) : s > 3 ? i(e, r, n) : i(e, r)) || n);
return s > 3 && n && Object.defineProperty(e, r, n), n;
}, a = this && this.__read || function(t, e) {
var r = "function" == typeof Symbol && t[Symbol.iterator];
if (!r) return t;
var o, i, s = r.call(t), n = [];
try {
for (;(void 0 === e || e-- > 0) && !(o = s.next()).done; ) n.push(o.value);
} catch (t) {
i = {
error: t
};
} finally {
try {
o && !o.done && (r = s.return) && r.call(s);
} finally {
if (i) throw i.error;
}
}
return n;
}, l = this && this.__spread || function() {
for (var t = [], e = 0; e < arguments.length; e++) t = t.concat(a(arguments[e]));
return t;
};
Object.defineProperty(r, "__esModule", {
value: !0
});
r.LowFeedbackPleasurableOfferTrait = void 0;
var u = function(t) {
i(e, t);
function e() {
var e = null !== t && t.apply(this, arguments) || this;
e.OBSERVATION_ROUNDS = 2;
e.STOP_SCORE = 2e4;
e.STOP_TIME_MS = 12e4;
e.EFFECTIVE_ELIM_MIN = 3;
e.MULTI_ELIM_MIN = 4;
e.COMBO_MIN = 2;
e.HIGH_COMBO_CET = 11;
e.CLEAR_LIMIT = 2;
e.MULTI_LIMIT = 2;
return e;
}
e.prototype.registerTraitEventsMethods = function() {
return [];
};
e.prototype.onCreate = function() {
this.loadFromStorage();
};
Object.defineProperty(e.prototype, "onActiveCondition", {
get: function() {
return hs.gameInfo.gameMode === hs.GameMode.Class;
},
enumerable: !1,
configurable: !0
});
e.prototype.data = function() {
return {
gameNum: -1,
stopped: !1,
clearBoardCount: 0,
multiEliminateCount: 0,
recentRoundsPositive: [],
curRoundPositive: !1,
lastCET: 0,
normalTriggered: !1,
lastProcessedRound: -1,
reviveActive: !1,
reviveRoundsSeen: 0
};
};
e.prototype.onActive = function(t) {
hs.tp.isClassAlgorithmLifeCycle_GameStart_ProxyOnGameStart(t) && this.handleGameStart(t);
hs.tp.isClassAlgorithmLifeCycle_Replay_ProxyOnGameReplay(t) && this.handleReplay();
hs.tp.isClassAlgorithmLifeCycle_Revive_ProxyOnRevive_Success(t) && this.handleReviveSuccess();
hs.tp.isClassAlgorithmLifeCycle_TouchEnd_ProxyOnTouchEnd(t) && this.handleTouchEnd(t);
hs.tp.isClassAlgorithmStrategy_Condition_ProxyOnAlgorithmStrategyCondition(t) && this.handleCondition(t);
hs.tp.isAlgorithmProcessInfoAlgorithmSuccess(t) && this.logAlgorithmResult();
};
Object.defineProperty(e.prototype, "enableReviveSupport", {
get: function() {
var t, e;
return null === (e = null === (t = this.props) || void 0 === t ? void 0 : t.enableReviveSupport) || void 0 === e || e;
},
enumerable: !1,
configurable: !0
});
Object.defineProperty(e.prototype, "enableNormalSupport", {
get: function() {
var t, e;
return null === (e = null === (t = this.props) || void 0 === t ? void 0 : t.enableNormalSupport) || void 0 === e || e;
},
enumerable: !1,
configurable: !0
});
Object.defineProperty(e.prototype, "lowFeedbackRounds", {
get: function() {
var t, e;
return null !== (e = null === (t = this.props) || void 0 === t ? void 0 : t.lowFeedbackRounds) && void 0 !== e ? e : 5;
},
enumerable: !1,
configurable: !0
});
Object.defineProperty(e.prototype, "reviveSupportRounds", {
get: function() {
var t, e;
return null !== (e = null === (t = this.props) || void 0 === t ? void 0 : t.reviveSupportRounds) && void 0 !== e ? e : 3;
},
enumerable: !1,
configurable: !0
});
Object.defineProperty(e.prototype, "normalScenePriority", {
get: function() {
var t, e;
return null !== (e = null === (t = this.props) || void 0 === t ? void 0 : t.normalScenePriority) && void 0 !== e ? e : 0;
},
enumerable: !1,
configurable: !0
});
e.prototype.loadFromStorage = function() {
var t = hs.storage.getItem("LowFeedbackPleasurableOfferTrait", this.data());
this.setState(s(s({}, this.data()), t));
};
e.prototype.saveToStorage = function() {
hs.storage.setItem("LowFeedbackPleasurableOfferTrait", this.state);
};
e.prototype.resetGameState = function(t) {
var e = this.data();
e.gameNum = t;
this.setState(e);
this.saveToStorage();
};
e.prototype.syncGameState = function(t) {
var e = hs.classGameInfo.gameNum;
if (t) this.resetGameState(e); else if (this.state.gameNum === e) ; else {
this.state.gameNum;
this.resetGameState(e);
}
};
e.prototype.handleGameStart = function(t) {
var e, r = t.args[0], o = !0 === (null === (e = null == r ? void 0 : r.data) || void 0 === e ? void 0 : e.newGame);
this.syncGameState(o);
};
e.prototype.handleReplay = function() {
var t = hs.classGameInfo.gameNum;
this.resetGameState(t);
};
e.prototype.handleReviveSuccess = function() {
if (this.enableReviveSupport) {
this.state.reviveActive = !0;
this.state.reviveRoundsSeen = 0;
this.saveToStorage();
}
};
e.prototype.handleTouchEnd = function(t) {
var e, r, o = t.args[0], i = o && o.state;
if (i) {
var s = null !== (e = i.eliminateCount) && void 0 !== e ? e : 0, n = null !== (r = i.continuousEliminateTimes) && void 0 !== r ? r : 0, a = !0 === i.clearScreen, l = !0 === i.clearProducer;
this.state.lastCET = n;
a && this.state.clearBoardCount++;
s >= this.MULTI_ELIM_MIN && this.state.multiEliminateCount++;
var u = s >= this.EFFECTIVE_ELIM_MIN || a || n >= this.COMBO_MIN, h = u;
u && (this.state.curRoundPositive = !0);
h && this.state.reviveActive && this.state.reviveRoundsSeen >= 1 && (this.state.reviveActive = !1);
h && this.state.normalTriggered && (this.state.normalTriggered = !1);
if (l) {
this.state.recentRoundsPositive.push(this.state.curRoundPositive);
for (;this.state.recentRoundsPositive.length > this.lowFeedbackRounds; ) this.state.recentRoundsPositive.shift();
this.state.curRoundPositive = !1;
}
this.saveToStorage();
}
};
e.prototype.handleCondition = function(t) {
this.syncGameState(!1);
if (this.state.stopped) ; else if (this.isReviveRound()) ; else if (!this.checkAndApplyPermanentStop()) {
var e = hs.classGameInfo.roundNum;
if (e !== this.state.lastProcessedRound) {
this.state.lastProcessedRound = e;
this.state.reviveActive && this.state.reviveRoundsSeen++;
if (this.state.lastCET >= this.HIGH_COMBO_CET) this.saveToStorage(); else if (this.state.reviveActive) {
this.tryInjectRevive(t);
this.saveToStorage();
} else if (this.enableNormalSupport) {
this.tryInjectNormal(t);
this.saveToStorage();
} else this.saveToStorage();
}
}
};
e.prototype.tryInjectRevive = function(t) {
var e = this.OBSERVATION_ROUNDS + this.reviveSupportRounds, r = this.state.reviveRoundsSeen;
if (r > e) this.state.reviveActive = !1; else if (r <= this.OBSERVATION_ROUNDS) ; else {
var o = this.buildSupportIds(!0);
o ? this.injectSupport(t, o, "复活补爽轮") : this.state.stopped = !0;
}
};
e.prototype.tryInjectNormal = function(t) {
if (this.state.normalTriggered) ; else if (this.state.lastCET >= this.COMBO_MIN) ; else if (this.state.recentRoundsPositive.length < this.lowFeedbackRounds) ; else if (this.state.recentRoundsPositive.some(function(t) {
return t;
})) ; else {
var e = 0 === this.normalScenePriority, r = this.buildSupportIds(e);
if (r) {
this.injectSupport(t, r, e ? "常规补爽轮(清盘优先)" : "常规补爽轮(多消优先)");
this.state.normalTriggered = !0;
} else this.state.stopped = !0;
}
};
e.prototype.buildSupportIds = function(t) {
var e = this.state.clearBoardCount <= this.CLEAR_LIMIT, r = this.state.multiEliminateCount <= this.MULTI_LIMIT;
if (!e && !r) return null;
var o = [];
if (t) {
e && o.push(hs.OFFER_TYPE.CLEAR_BOARD_PRO);
r && o.push(hs.OFFER_TYPE.DUO_XIAO);
} else {
r && o.push(hs.OFFER_TYPE.DUO_XIAO);
e && o.push(hs.OFFER_TYPE.CLEAR_BOARD_PRO);
}
return o;
};
e.prototype.injectSupport = function(t, e) {
var r = hs.algorithmStrategyInfo.algorithmPriorityList || [];
hs.algorithmStrategyInfo.setAlgorithmPriorityList(l(e, r));
hs.algorithmStrategyInfo.setAlgorithmSourceLevel1(hs.ClassAlgorithmSourceType.AlgoTrait);
hs.algorithmStrategyInfo.setAlgorithmSourceLevel2(this.traitName);
t.returnState = !0;
};
e.prototype.checkAndApplyPermanentStop = function() {
var t, e, r = hs.classScoreInfo.score, o = hs.scoreInfo.highRecordScore, i = o > 0 && r > o, s = (null !== (e = null === (t = hs.classTimerInfo) || void 0 === t ? void 0 : t.spendTime) && void 0 !== e ? e : 0) >= this.STOP_TIME_MS, n = r >= this.STOP_SCORE;
if (!i && !s && !n) return !1;
this.state.stopped = !0;
this.saveToStorage();
return !0;
};
e.prototype.isReviveRound = function() {
var t = hs.algorithmStrategyInfo.algorithmSourceLevel1;
if (t === hs.ClassAlgorithmSourceType.AlgoRevive || t === hs.ClassAlgorithmSourceType.AlgoReviveTrait) return !0;
if (this.isReviveAlgo(hs.algorithmName.algoExpectedId)) return !0;
for (var e = hs.algorithmStrategyInfo.algorithmList || [], r = 0; r < e.length; r++) if (this.isReviveAlgo(e[r])) return !0;
return !1;
};
e.prototype.isReviveAlgo = function(t) {
return t === hs.OFFER_TYPE.REVIVE || t === hs.OFFER_TYPE.REVIVE_CLEAR || t === hs.OFFER_TYPE.REVIVE_PROTECT;
};
e.prototype.getAlgoName = function(t) {
var e, r;
return null !== (r = null === (e = hs.OFFER_TYPE_STRINGS) || void 0 === e ? void 0 : e[t]) && void 0 !== r ? r : "未知算法(" + t + ")";
};
e.prototype.logAlgorithmResult = function() {};
n([ hs.Algorithm() ], e.prototype, "onActive", null);
return n([ classId("LowFeedbackPleasurableOfferTrait"), classMethodWatch() ], e);
}(Trait);
r.LowFeedbackPleasurableOfferTrait = u;
cc._RF.pop();
}, {} ]
}, {}, [ "LowFeedbackPleasurableOfferTrait" ]);
//# sourceMappingURL=index.js.map
