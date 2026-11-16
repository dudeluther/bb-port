window.__require = function e(t, r, i) {
function o(s, a) {
if (!r[s]) {
if (!t[s]) {
var c = s.split("/");
c = c[c.length - 1];
if (!t[c]) {
var u = "function" == typeof __require && __require;
if (!a && u) return u(c, !0);
if (n) return n(c, !0);
throw new Error("Cannot find module '" + s + "'");
}
s = c;
}
var h = r[s] = {
exports: {}
};
t[s][0].call(h.exports, function(e) {
return o(t[s][1][e] || e);
}, h, h.exports, e, t, r, i);
}
return r[s].exports;
}
for (var n = "function" == typeof __require && __require, s = 0; s < i.length; s++) o(i[s]);
return o;
}({
ConsecutiveLossRecoveryTrait: [ function(e, t, r) {
"use strict";
cc._RF.push(t, "6c890r4rTJCQbBSJzsGb5+M", "ConsecutiveLossRecoveryTrait");
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
}), n = this && this.__decorate || function(e, t, r, i) {
var o, n = arguments.length, s = n < 3 ? t : null === i ? i = Object.getOwnPropertyDescriptor(t, r) : i;
if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) s = Reflect.decorate(e, t, r, i); else for (var a = e.length - 1; a >= 0; a--) (o = e[a]) && (s = (n < 3 ? o(s) : n > 3 ? o(t, r, s) : o(t, r)) || s);
return n > 3 && s && Object.defineProperty(t, r, s), s;
}, s = this && this.__read || function(e, t) {
var r = "function" == typeof Symbol && e[Symbol.iterator];
if (!r) return e;
var i, o, n = r.call(e), s = [];
try {
for (;(void 0 === t || t-- > 0) && !(i = n.next()).done; ) s.push(i.value);
} catch (e) {
o = {
error: e
};
} finally {
try {
i && !i.done && (r = n.return) && r.call(n);
} finally {
if (o) throw o.error;
}
}
return s;
}, a = this && this.__spread || function() {
for (var e = [], t = 0; t < arguments.length; t++) e = e.concat(s(arguments[t]));
return e;
}, c = this && this.__values || function(e) {
var t = "function" == typeof Symbol && Symbol.iterator, r = t && e[t], i = 0;
if (r) return r.call(e);
if (e && "number" == typeof e.length) return {
next: function() {
e && i >= e.length && (e = void 0);
return {
value: e && e[i++],
done: !e
};
}
};
throw new TypeError(t ? "Object is not iterable." : "Symbol.iterator is not defined.");
};
Object.defineProperty(r, "__esModule", {
value: !0
});
r.ConsecutiveLossRecoveryTrait = void 0;
var u = function(e) {
o(t, e);
function t() {
var t = null !== e && e.apply(this, arguments) || this;
t.DEFAULT_EARLY_FAIL_GAME_COUNT = 2;
t.DEFAULT_EARLY_FAIL_ROUND_THRESHOLD = 6;
t.DEFAULT_PROTECT_ROUNDS = 3;
t.DEFAULT_SESSION_TRIGGER_LIMIT = 1;
t.DEFAULT_REVIVE_RESET_MODE = 0;
t.DEFAULT_PROTECT_ROUND_PATTERN = 0;
t._consecutiveEarlyDeaths = 0;
t._hasRecoveryQualification = !1;
t._sessionTriggerCount = 0;
t._isInRecoveryMode = !1;
t._hasRevivedThisGame = !1;
return t;
}
Object.defineProperty(t.prototype, "onActiveCondition", {
get: function() {
return hs.gameInfo.gameMode === hs.GameMode.Class;
},
enumerable: !1,
configurable: !0
});
t.prototype.onActive = function(e) {
hs.tp.isClassGameOver_GameEnd_ProxyOnGameEnd(e) && this.handleGameEnd("gameEnd");
hs.tp.isClassGame_Replay_ProxyOnGameReplay(e) && this.handleGameEnd("replay");
hs.tp.isClassRevive_ProxyOnRevive_Success(e) && this.handleReviveSuccess();
hs.tp.isClassGame_ProxyNewGameInit(e) && this.handleNewGameInit();
hs.tp.isClassAlgorithmStrategy_Condition_ProxyOnAlgorithmStrategyCondition(e) && this.injectRecoveryPriority();
hs.tp.isAlgorithmProcessInfoAlgorithmSuccess(e) && this.logAlgorithmResult();
hs.tp.isIsOpenFirstDayReplayGuideBoardTraitDiableThisTrait(e) && this.disableFirstDayReplayGuideBoard(e);
};
t.prototype.handleGameEnd = function() {
if (hs.classGuideInfo.isFinishedGuide) {
var e = hs.classGameInfo.roundNum, t = this._hasRevivedThisGame, r = this.earlyFailRoundThreshold, i = this.reviveResetMode;
!t && e <= r ? this._consecutiveEarlyDeaths++ : t && 1 === i || (this._consecutiveEarlyDeaths = 0);
var o = this.earlyFailGameCount, n = this.sessionTriggerLimit;
if (this._consecutiveEarlyDeaths >= o && this._sessionTriggerCount < n) {
this._hasRecoveryQualification = !0;
this._consecutiveEarlyDeaths = 0;
} else this._consecutiveEarlyDeaths;
}
};
t.prototype.handleReviveSuccess = function() {
this._hasRevivedThisGame = !0;
};
t.prototype.handleNewGameInit = function() {
this._hasRevivedThisGame = !1;
this._isInRecoveryMode = !1;
};
t.prototype.injectRecoveryPriority = function() {
if (hs.classGuideInfo.isFinishedGuide) {
var e = hs.classGameInfo.roundNum, t = this.sessionTriggerLimit;
if (1 === e) if (this._hasRecoveryQualification && this._sessionTriggerCount < t) {
this._isInRecoveryMode = !0;
this._hasRecoveryQualification = !1;
this._sessionTriggerCount++;
} else this._hasRecoveryQualification, this._isInRecoveryMode = !1;
var r = this.protectRounds;
if (this._isInRecoveryMode) if (e > r) this._isInRecoveryMode = !1; else {
var i = this.protectRoundPattern, o = this.getRecoveryPriorityList(i, e, r), n = hs.algorithmStrategyInfo.algorithmPriorityList || [], s = this.mergePriorityList(o, n);
hs.algorithmStrategyInfo.setAlgorithmPriorityList(s);
}
}
};
t.prototype.getRecoveryPriorityList = function(e, t, r) {
var i = hs.OFFER_TYPE.SUI_JI_WU_SI, o = hs.OFFER_TYPE.TIAN_KONG_XIAO_CHU;
return 1 === e ? t < r ? [ i ] : [ o, i ] : 2 === e ? 1 === t ? [ i ] : 2 === t ? [ i, o ] : [ o, i ] : 1 === t ? [ i ] : [ o, i ];
};
t.prototype.mergePriorityList = function(e, t) {
var r, i, o = a(e);
try {
for (var n = c(t), s = n.next(); !s.done; s = n.next()) {
var u = s.value;
o.includes(u) || o.push(u);
}
} catch (e) {
r = {
error: e
};
} finally {
try {
s && !s.done && (i = n.return) && i.call(n);
} finally {
if (r) throw r.error;
}
}
return o;
};
t.prototype.isRecoveryEffective = function() {
return !!this._isInRecoveryMode || this._hasRecoveryQualification && this._sessionTriggerCount < this.sessionTriggerLimit && hs.classGuideInfo.isFinishedGuide;
};
t.prototype.disableFirstDayReplayGuideBoard = function(e) {
if (this.isRecoveryEffective()) {
e.replace = !0;
e.returnValue = !0;
}
};
t.prototype.logAlgorithmResult = function() {
!this._isInRecoveryMode || (hs.classGameInfo.roundNum, this.protectRounds);
};
Object.defineProperty(t.prototype, "earlyFailGameCount", {
get: function() {
var e = this.props.earlyFailGameCount;
return "number" == typeof e && e > 0 ? Math.floor(e) : this.DEFAULT_EARLY_FAIL_GAME_COUNT;
},
enumerable: !1,
configurable: !0
});
Object.defineProperty(t.prototype, "earlyFailRoundThreshold", {
get: function() {
var e = this.props.earlyFailRoundThreshold;
return "number" == typeof e && e > 0 ? Math.floor(e) : this.DEFAULT_EARLY_FAIL_ROUND_THRESHOLD;
},
enumerable: !1,
configurable: !0
});
Object.defineProperty(t.prototype, "protectRounds", {
get: function() {
var e = this.props.protectRounds;
return "number" == typeof e && e > 0 ? Math.floor(e) : this.DEFAULT_PROTECT_ROUNDS;
},
enumerable: !1,
configurable: !0
});
Object.defineProperty(t.prototype, "sessionTriggerLimit", {
get: function() {
var e = this.props.sessionTriggerLimit;
return "number" == typeof e && e > 0 ? Math.floor(e) : this.DEFAULT_SESSION_TRIGGER_LIMIT;
},
enumerable: !1,
configurable: !0
});
Object.defineProperty(t.prototype, "reviveResetMode", {
get: function() {
var e = this.props.reviveResetMode;
return "number" != typeof e || 0 !== e && 1 !== e ? this.DEFAULT_REVIVE_RESET_MODE : e;
},
enumerable: !1,
configurable: !0
});
Object.defineProperty(t.prototype, "protectRoundPattern", {
get: function() {
var e = this.props.protectRoundPattern;
return "number" != typeof e || 0 !== e && 1 !== e && 2 !== e ? this.DEFAULT_PROTECT_ROUND_PATTERN : e;
},
enumerable: !1,
configurable: !0
});
n([ hs.Algorithm() ], t.prototype, "onActive", null);
return n([ classId("ConsecutiveLossRecoveryTrait") ], t);
}(Trait);
r.ConsecutiveLossRecoveryTrait = u;
cc._RF.pop();
}, {} ]
}, {}, [ "ConsecutiveLossRecoveryTrait" ]);
//# sourceMappingURL=index.js.map
