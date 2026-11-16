window.__require = function e(t, r, i) {
function o(a, s) {
if (!r[a]) {
if (!t[a]) {
var u = a.split("/");
u = u[u.length - 1];
if (!t[u]) {
var l = "function" == typeof __require && __require;
if (!s && l) return l(u, !0);
if (n) return n(u, !0);
throw new Error("Cannot find module '" + a + "'");
}
a = u;
}
var d = r[a] = {
exports: {}
};
t[a][0].call(d.exports, function(e) {
return o(t[a][1][e] || e);
}, d, d.exports, e, t, r, i);
}
return r[a].exports;
}
for (var n = "function" == typeof __require && __require, a = 0; a < i.length; a++) o(i[a]);
return o;
}({
AdPlusMinusStrategyTrait: [ function(e, t, r) {
"use strict";
cc._RF.push(t, "4ce4df4IutBm59z/9M/mN04", "AdPlusMinusStrategyTrait");
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
}), n = this && this.__assign || function() {
return (n = Object.assign || function(e) {
for (var t, r = 1, i = arguments.length; r < i; r++) {
t = arguments[r];
for (var o in t) Object.prototype.hasOwnProperty.call(t, o) && (e[o] = t[o]);
}
return e;
}).apply(this, arguments);
}, a = this && this.__decorate || function(e, t, r, i) {
var o, n = arguments.length, a = n < 3 ? t : null === i ? i = Object.getOwnPropertyDescriptor(t, r) : i;
if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) a = Reflect.decorate(e, t, r, i); else for (var s = e.length - 1; s >= 0; s--) (o = e[s]) && (a = (n < 3 ? o(a) : n > 3 ? o(t, r, a) : o(t, r)) || a);
return n > 3 && a && Object.defineProperty(t, r, a), a;
}, s = this && this.__read || function(e, t) {
var r = "function" == typeof Symbol && e[Symbol.iterator];
if (!r) return e;
var i, o, n = r.call(e), a = [];
try {
for (;(void 0 === t || t-- > 0) && !(i = n.next()).done; ) a.push(i.value);
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
return a;
}, u = this && this.__spread || function() {
for (var e = [], t = 0; t < arguments.length; t++) e = e.concat(s(arguments[t]));
return e;
}, l = this && this.__values || function(e) {
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
r.AdPlusMinusStrategyTrait = void 0;
var d = [ [ 43e4, -1, 5e4, 8e3, 10 ], [ 37e4, 43e4, 4e4, 6e3, 10 ], [ 3e5, 37e4, 3e4, 5e3, 9 ], [ 25e4, 3e5, 24e3, 4e3, 9 ], [ 2e5, 25e4, 18e3, 3e3, 8 ], [ 16e4, 2e5, 16e3, 2400, 8 ], [ 12e4, 16e4, 12e3, 2e3, 8 ], [ 8e4, 12e4, 9400, 1600, 7 ], [ 5e4, 8e4, 8600, 1400, 6 ], [ 25e3, 5e4, 6700, 1200, 5 ], [ 16e3, 25e3, 5600, 1e3, 4 ], [ 8e3, 16e3, 3400, 600, 3 ], [ 0, 8e3, 1400, 400, 2 ] ], c = function(e) {
o(t, e);
function t() {
var t = null !== e && e.apply(this, arguments) || this;
t._popupScores = [];
t._hadBrokenHighScore = !1;
t._reviveUsedBeforeBreak = !1;
t._revivePopupCountAfterBreak = 0;
t._sub2Blocked = !1;
t._reviveHardBlockSource = null;
t._addition2ArmedHardCap = -1;
t._add1ReviveTriggered = !1;
t._add1PostReviveActive = !1;
t._hasEliminatedInGame = !1;
t._bannerPendingFirstEliminate = !1;
t._sessionGameCount = 0;
t._isColdStartFirstGame = !0;
t._isReplayStartPending = !1;
return t;
}
Object.defineProperty(t.prototype, "_persistData", {
get: function() {
return hs.storage.getItem("adPlusMinusStrategy_persistData", {
lastGameBrokeRecord: !1,
consecutiveNonBreakingGames: 0
});
},
set: function(e) {
hs.storage.setItem("adPlusMinusStrategy_persistData", e);
},
enumerable: !1,
configurable: !0
});
t.prototype.getDefaultReviveState = function() {
return {
popupScores: [],
hadBrokenHighScore: !1,
reviveUsedBeforeBreak: !1,
revivePopupCountAfterBreak: 0,
sub2Blocked: !1,
reviveHardBlockSource: null,
addition2ArmedHardCap: -1,
add1ReviveTriggered: !1,
add1PostReviveActive: !1
};
};
t.prototype.restoreReviveState = function() {
var e, t = hs.storage.getItem("adPlusMinusStrategy_reviveState", this.getDefaultReviveState());
this._popupScores = Array.isArray(t.popupScores) ? u(t.popupScores) : [];
this._hadBrokenHighScore = !!t.hadBrokenHighScore;
this._reviveUsedBeforeBreak = !!t.reviveUsedBeforeBreak;
this._revivePopupCountAfterBreak = Number.isFinite(t.revivePopupCountAfterBreak) ? t.revivePopupCountAfterBreak : 0;
this._sub2Blocked = !!t.sub2Blocked;
this._reviveHardBlockSource = null !== (e = t.reviveHardBlockSource) && void 0 !== e ? e : null;
this._addition2ArmedHardCap = Number.isFinite(t.addition2ArmedHardCap) ? t.addition2ArmedHardCap : -1;
this._add1ReviveTriggered = !!t.add1ReviveTriggered;
this._add1PostReviveActive = !!t.add1PostReviveActive;
};
t.prototype.cacheReviveState = function() {
hs.storage.setItem("adPlusMinusStrategy_reviveState", {
popupScores: u(this._popupScores),
hadBrokenHighScore: this._hadBrokenHighScore,
reviveUsedBeforeBreak: this._reviveUsedBeforeBreak,
revivePopupCountAfterBreak: this._revivePopupCountAfterBreak,
sub2Blocked: this._sub2Blocked,
reviveHardBlockSource: this._reviveHardBlockSource,
addition2ArmedHardCap: this._addition2ArmedHardCap,
add1ReviveTriggered: this._add1ReviveTriggered,
add1PostReviveActive: this._add1PostReviveActive
});
};
t.prototype.getDefaultGameCountState = function() {
return {
totalGameCount: 1,
sessionGameCount: 1,
lastRestartNum: -1,
isColdStartSession: !1
};
};
t.prototype.getGameCountState = function() {
var e = hs.storage.getItem("adPlusMinusStrategy_gameCountState", this.getDefaultGameCountState());
return {
totalGameCount: Number.isFinite(null == e ? void 0 : e.totalGameCount) ? Math.max(0, Math.floor(e.totalGameCount)) : 1,
sessionGameCount: Number.isFinite(null == e ? void 0 : e.sessionGameCount) ? Math.max(0, Math.floor(e.sessionGameCount)) : 1,
lastRestartNum: Number.isFinite(null == e ? void 0 : e.lastRestartNum) ? Math.floor(e.lastRestartNum) : -1,
isColdStartSession: !!(null == e ? void 0 : e.isColdStartSession)
};
};
t.prototype.saveGameCountState = function(e) {
hs.storage.setItem("adPlusMinusStrategy_gameCountState", e);
};
t.prototype.getCurrentRestartNum = function() {
var e = hs.storage.getItem("loginServerRestartNum", -1);
return Number.isFinite(e) ? Math.floor(e) : -1;
};
t.prototype.getSyncedGameCountState = function() {
var e = this.getGameCountState(), t = this.getCurrentRestartNum();
if (e.lastRestartNum === t) return e;
var r = n(n({}, e), {
sessionGameCount: 0,
lastRestartNum: t,
isColdStartSession: e.lastRestartNum >= 0
});
this.saveGameCountState(r);
return r;
};
Object.defineProperty(t.prototype, "strategyGameCount", {
get: function() {
return this.getSyncedGameCountState().totalGameCount;
},
enumerable: !1,
configurable: !0
});
Object.defineProperty(t.prototype, "coldStartSessionGameCount", {
get: function() {
return this.getSyncedGameCountState().sessionGameCount;
},
enumerable: !1,
configurable: !0
});
Object.defineProperty(t.prototype, "isColdStartSession", {
get: function() {
return this.getSyncedGameCountState().isColdStartSession;
},
enumerable: !1,
configurable: !0
});
t.prototype.getCurrentGameDurationSeconds = function() {
var e, t, r = null !== (t = null === (e = hs.classTimerInfo) || void 0 === e ? void 0 : e.timeSinceGameReady) && void 0 !== t ? t : 0;
return !Number.isFinite(r) || r <= 0 ? 0 : Math.max(0, Math.floor((Date.now() - r) / 1e3));
};
Object.defineProperty(t.prototype, "strategyEnableStr", {
get: function() {
var e, t = null === (e = this.props) || void 0 === e ? void 0 : e.strategyEnable;
if (!t) return "111111";
var r = String(t).trim();
return /^[01]+$/.test(r) ? r.length >= 6 ? r.slice(-6) : r.padStart(6, "0") : "111111";
},
enumerable: !1,
configurable: !0
});
t.prototype.isEnabled = function(e) {
return "1" === this.strategyEnableStr[e];
};
Object.defineProperty(t.prototype, "params", {
get: function() {
var e;
return null === (e = this.props) || void 0 === e ? void 0 : e.adStrategyParams;
},
enumerable: !1,
configurable: !0
});
Object.defineProperty(t.prototype, "onActiveCondition", {
get: function() {
return hs.gameInfo.gameMode === hs.GameMode.Class && this.isCanActive();
},
enumerable: !1,
configurable: !0
});
t.prototype.isCanActive = function() {
return !0;
};
t.prototype.onActive = function(e) {
hs.tp.isClassGame_ProxyNewGameInit(e) && this.onNewGameInit();
hs.tp.isClassGame_Replay_ProxyOnGameReplay(e) && this.onGameReplay();
hs.tp.isClassRevive_ProxyChangeLastReviveResult(e) && this.onReviveCheck(e);
hs.tp.isClassRevive_ProxyOnShowReviveView(e) && this.onRevivePopupShow(e);
hs.tp.isClassGameOver_GameEnd_ProxyOnGameEnd(e) && this.onGameEnd();
hs.tp.isClassAdvertisement_FullScreenProxyShieldPlayAdvertisement(e) && this.onInterstitialShield(e);
hs.tp.isAdvertisement_Banner_ProxyOnBannerShow(e) && this.onBannerShow(e);
hs.tp.isClassRevive_ProxyOnRevive_Success(e) && this.onAdd1ReviveSuccess();
hs.tp.isClassAlgorithmStrategy_Replace_ProxyPreprocessingAlgorithm(e) && this.onAdd1AlgorithmPreprocess();
hs.tp.isClassAdvertisement_FullScreenProxyOnBlocksTouchEnd(e) && this.onBlocksTouchEndForBanner(e);
};
t.prototype.onGameReplay = function() {
this._isReplayStartPending = !0;
};
t.prototype.onNewGameInit = function() {
this._popupScores = [];
this._hadBrokenHighScore = !1;
this._reviveUsedBeforeBreak = !1;
this._revivePopupCountAfterBreak = 0;
this._sub2Blocked = !1;
this._reviveHardBlockSource = null;
this._addition2ArmedHardCap = -1;
this._add1ReviveTriggered = !1;
this._add1PostReviveActive = !1;
this._hasEliminatedInGame = !1;
this._bannerPendingFirstEliminate = !1;
this._sessionGameCount++;
var e = this.getSyncedGameCountState();
this._isReplayStartPending || this.saveGameCountState(n(n({}, e), {
totalGameCount: e.totalGameCount + 1,
sessionGameCount: e.sessionGameCount + 1
}));
this._isReplayStartPending = !1;
this.cacheReviveState();
};
t.prototype.onRevivePopupShow = function() {
this.restoreReviveState();
var e = hs.classScoreInfo.score;
this._popupScores.push(e);
this._hadBrokenHighScore && this._revivePopupCountAfterBreak++;
this.cacheReviveState();
};
Object.defineProperty(t.prototype, "firstDeathScore", {
get: function() {
return this._popupScores.length > 0 ? this._popupScores[0] : hs.classScoreInfo.score;
},
enumerable: !1,
configurable: !0
});
t.prototype.getCurrentHardCap = function() {
return this.getAddition1HardCap() || (this.isEnabled(3) && this._addition2ArmedHardCap > 0 ? {
source: "addition2",
maxReviveNum: this._addition2ArmedHardCap
} : null);
};
t.prototype.getAddition1HardCap = function() {
var e, t, r, i;
if (!this.isEnabled(2)) return null;
var o = null === (e = this.params) || void 0 === e ? void 0 : e.addition1;
if (!o) return null;
var n = this.strategyGameCount, a = hs.classScoreInfo.highScore;
if (a < 4e3) return null;
if (2 === n) {
var s = null !== (t = o.game2Enable) && void 0 !== t ? t : 1, u = (null !== (r = o.game2ScoreRatio) && void 0 !== r ? r : 60) / 100;
if (1 === s && this.firstDeathScore >= a * u) return {
source: "addition1",
maxReviveNum: 2
};
}
if (3 === n) {
u = (null !== (i = o.game3ScoreRatio) && void 0 !== i ? i : 40) / 100;
if (this.firstDeathScore >= a * u) return {
source: "addition1",
maxReviveNum: 2
};
}
return null;
};
t.prototype.getAddition2CapInfo = function() {
var e, t, r, i, o = null === (r = this.params) || void 0 === r ? void 0 : r.addition2;
if (!o || this._isColdStartFirstGame) return null;
var n = null !== (i = o.startGame) && void 0 !== i ? i : 6, a = this.strategyGameCount;
if (a < n || a % 2 != 0) return null;
var s = hs.classScoreInfo.highScore;
if (s <= 0 || this.firstDeathScore < .16 * s || hs.classScoreInfo.recordHigh) return null;
var u = s - hs.classScoreInfo.score, c = this.getAddition2NValue();
try {
for (var h = l(d), v = h.next(); !v.done; v = h.next()) {
var p = v.value, f = p[0], m = p[1], S = p[2], g = p[3], _ = p[4];
if (s >= f && (-1 === m || s < m)) {
var y = S + g * c;
return u > y ? {
source: "addition2",
maxReviveNum: _,
requiredGap: y,
scoreGap: u
} : null;
}
}
} catch (t) {
e = {
error: t
};
} finally {
try {
v && !v.done && (t = h.return) && t.call(h);
} finally {
if (e) throw e.error;
}
}
return null;
};
t.prototype.onGameEnd = function() {
var e = hs.classScoreInfo.recordHigh, t = this._persistData;
this._persistData = e ? {
lastGameBrokeRecord: !0,
consecutiveNonBreakingGames: 0
} : {
lastGameBrokeRecord: !1,
consecutiveNonBreakingGames: t.consecutiveNonBreakingGames + 1
};
this._isColdStartFirstGame = !1;
};
t.prototype.onReviveCheck = function(e) {
var t;
this.restoreReviveState();
var r = null === (t = e.args) || void 0 === t ? void 0 : t[0];
this._reviveHardBlockSource = null;
var i = this.getAddition2CapInfo();
i && (this._addition2ArmedHardCap = i.maxReviveNum);
if (!this._hadBrokenHighScore && hs.classScoreInfo.recordHigh) {
this._hadBrokenHighScore = !0;
this._reviveUsedBeforeBreak = hs.classReviveGameInfo.actualReviveNum > 0;
this._revivePopupCountAfterBreak = 0;
}
var o = r, n = !1;
if (o && this.isEnabled(0) && this.shouldSub1Block()) {
o = !1;
n = !0;
this._reviveHardBlockSource = "subtraction1";
}
if (!n && o && this.isEnabled(1) && this.shouldSub2Block()) {
o = !1;
n = !0;
this._reviveHardBlockSource = "subtraction2";
}
var a = this.getCurrentHardCap();
if (!n && o && a && hs.classReviveGameInfo.actualReviveNum >= a.maxReviveNum) {
o = !1;
n = !0;
this._reviveHardBlockSource = a.source;
}
if (!n && !o && this.isEnabled(2) && this.shouldAdd1Allow()) {
o = !0;
this._add1ReviveTriggered = !0;
}
!n && !o && this.isEnabled(3) && this.shouldAdd2Allow() && (o = !0);
if (o !== r) {
e.args[0] = o;
e.returnState = !0;
}
this.cacheReviveState();
};
t.prototype.shouldSub1Block = function() {
var e, t, r, i, o = null === (e = this.params) || void 0 === e ? void 0 : e.subtraction1;
if (!o) return !1;
var n = hs.classScoreInfo.highScore, a = hs.classScoreInfo.score;
if (this._persistData.lastGameBrokeRecord) {
var s = a >= n * (null !== (t = o.nextGameScoreRatio) && void 0 !== t ? t : .8), u = hs.classReviveGameInfo.actualReviveNum > 0;
if (s && u) return !0;
}
if (this._hadBrokenHighScore) {
var l = this._reviveUsedBeforeBreak ? null !== (r = o.maxReviveWhenUsed) && void 0 !== r ? r : 1 : null !== (i = o.maxReviveWhenNoUse) && void 0 !== i ? i : 1;
if (this._revivePopupCountAfterBreak >= l) return !0;
}
return !1;
};
t.prototype.shouldSub2Block = function() {
var e, t, r, i;
if (this._sub2Blocked) return !0;
var o = null === (e = this.params) || void 0 === e ? void 0 : e.subtraction2;
if (!o) return !1;
var n = this._popupScores;
if (n.length < 1) return !1;
var a = n[0], s = hs.classScoreInfo.highScore;
if (s <= 0) return !1;
var u = a / s;
if (u <= 0 || u > .6) return !1;
var l, d = null !== (t = o.n1) && void 0 !== t ? t : 0, c = null !== (r = o.n2) && void 0 !== r ? r : 4, h = null !== (i = o.n3) && void 0 !== i ? i : 8;
l = u <= .2 ? d : u <= .4 ? c : h;
var v = hs.classScoreInfo.score, p = n.length, f = function(e) {
return (e < p ? n[e] : v) - a;
};
if (p >= 2) {
var m = f(2), S = (20 - l) / 100, g = n[1] - a, _ = (2 < p ? n[2] : v) - n[1];
if (m / s <= S && _ < g) {
this._sub2Blocked = !0;
return !0;
}
}
if (p >= 3 && (m = f(3)) / s <= (S = (30 - 2 * l) / 100)) {
this._sub2Blocked = !0;
return !0;
}
if (p >= 4 && (m = f(4)) / s <= (S = (40 - 3 * l) / 100)) {
this._sub2Blocked = !0;
return !0;
}
if (p >= 5 && (m = f(5)) / s <= (S = (50 - 4 * l) / 100)) {
this._sub2Blocked = !0;
return !0;
}
return !1;
};
t.prototype.shouldAdd1Allow = function() {
var e, t, r, i, o = null === (e = this.params) || void 0 === e ? void 0 : e.addition1;
if (!o) return !1;
var n = this.strategyGameCount, a = hs.classScoreInfo.highScore;
if (a < 4e3) return !1;
if (hs.classReviveGameInfo.actualReviveNum >= 2) return !1;
this._popupScores.length;
var s = this.firstDeathScore;
if (2 === n) {
var u = null !== (t = o.game2Enable) && void 0 !== t ? t : 1, l = (null !== (r = o.game2ScoreRatio) && void 0 !== r ? r : 60) / 100;
if (1 !== u) return !1;
if (s >= a * l) return !0;
}
return 3 === n && s >= a * (l = (null !== (i = o.game3ScoreRatio) && void 0 !== i ? i : 40) / 100);
};
t.prototype.shouldAdd2Allow = function() {
var e = this.getAddition2CapInfo();
if (!e) return !1;
var t = hs.classReviveGameInfo.actualReviveNum;
this._addition2ArmedHardCap = e.maxReviveNum;
return !(e.maxReviveNum > 0 && t >= e.maxReviveNum);
};
t.prototype.getAddition2NValue = function() {
var e = this._persistData, t = e.consecutiveNonBreakingGames, r = this.strategyGameCount, i = 0;
r >= 61 ? i = 2 : r >= 21 && (i = 1);
return t >= 6 + i ? -1 : t >= 4 + i ? 0 : e.lastGameBrokeRecord || t < 2 + i ? 2 : 1;
};
t.prototype.onAdd1ReviveSuccess = function() {
this.restoreReviveState();
if (this._add1ReviveTriggered) {
this._add1ReviveTriggered = !1;
this._add1PostReviveActive = !0;
var e = hs.classScoreInfo.highScore, t = Math.floor(.1 * e), r = t > 0 ? Math.floor(Math.random() * (t + 1)) : 0;
if (r > 0) {
var i = hs.classScoreInfo.score;
hs.storage.setItem("classScore", i + r);
}
this.cacheReviveState();
}
};
t.prototype.onAdd1AlgorithmPreprocess = function() {
var e = this;
this.restoreReviveState();
if (this._add1PostReviveActive) if (this.getAdd1BoardWeight() < 340) ; else {
var t = hs.algorithmStrategyInfo.algorithmList || [], r = hs.OFFER_TYPE.TIAN_KONG_XIAO_CHU, i = !1, o = t.map(function(t) {
if (e.isAdd1EntropyOrHardPuzzle(t)) {
i = !0;
return r;
}
return t;
});
if (i) {
hs.algorithmStrategyInfo.setAlgorithmList(o);
var n = (hs.algorithmStrategyInfo.algorithmFailList || []).map(function(t) {
return e.isAdd1EntropyOrHardPuzzle(t) ? r : t;
});
hs.algorithmStrategyInfo.setAlgorithmFailList(n);
var a = (hs.algorithmStrategyInfo.algorithmSuccessList || []).map(function(t) {
return e.isAdd1EntropyOrHardPuzzle(t) ? r : t;
});
hs.algorithmStrategyInfo.setAlgorithmSuccessList(a);
}
}
};
t.prototype.getAdd1BoardWeight = function() {
var e = new hs.BinaryBoard();
e.convertToBinaryBoard(hs.boardInfo.faceBlocks);
return e.getWeightValueObj();
};
t.prototype.isAdd1EntropyOrHardPuzzle = function(e) {
return !(!e || e === hs.OFFER_TYPE.NONE || !hs.isValueInEnum(e, hs.OFFER_TYPE_SHANG) && !hs.isValueInEnum(e, hs.OFFER_TYPE_DIFFICULTY));
};
t.prototype.onInterstitialShield = function(e) {
var t;
if (this.isEnabled(4) && (null === (t = e.args) || void 0 === t ? void 0 : t[1]) === hs.FullScreenAdvertisePosState.FullScreen_GameOver) {
var r = this.checkInterstitialShield();
if ("shield" === r) {
e.args[0] = !0;
e.returnState = !0;
} else if ("show" === r) {
e.args[0] = !1;
e.returnState = !0;
}
}
};
t.prototype.checkInterstitialShield = function() {
var e, t, r = null === (e = this.params) || void 0 === e ? void 0 : e.interstitial;
if (!r) return "skip";
var i = hs.classScoreInfo.highScore, o = hs.classScoreInfo.lastScore, n = this.strategyGameCount, a = this.coldStartSessionGameCount, s = this.isColdStartSession, u = null !== (t = r.coldStartN) && void 0 !== t ? t : 3;
return s ? this.checkColdStartInterstitial(n, a, u, o) : this.handleNonColdStartInterstitial(r, n, o, i);
};
t.prototype.handleNonColdStartInterstitial = function(e, t, r, i) {
return t >= 4 && t <= 8 ? this.checkGpSessionInterstitial(e, t, r, i) : "skip";
};
t.prototype.checkGpSessionInterstitial = function(e, t, r, i) {
var o, n, a, s;
if (4 === t) {
var u = 4e3;
return r < i * ((null !== (o = e.game4ScoreRatio) && void 0 !== o ? o : 60) / 100) || r < u ? "shield" : "show";
}
if (5 === t) {
u = 2e3;
return r < i * ((null !== (n = e.game5ScoreRatio) && void 0 !== n ? n : 40) / 100) || r < u ? "shield" : "show";
}
return 6 === t ? r < i * ((null !== (a = e.exemptGame6Ratio) && void 0 !== a ? a : 20) / 100) ? "shield" : "show" : 7 === t || 8 === t ? r < i * ((null !== (s = e.exemptGame78Ratio) && void 0 !== s ? s : 10) / 100) ? "shield" : "show" : "skip";
};
t.prototype.checkColdStartInterstitial = function(e, t, r, i) {
if (1 == t) {
var o = this.getCurrentGameDurationSeconds();
return i >= 1e3 && o >= 20 ? "show" : "shield";
}
return e < 3 ? "shield" : "skip";
};
t.prototype.isSkip = function() {
return !1;
};
t.prototype.onBannerShow = function(e) {
var t, r;
if (!this.isSkip() && this.isEnabled(5)) {
var i = null === (t = this.params) || void 0 === t ? void 0 : t.banner;
if (i) {
var o = null !== (r = i.firstNGames) && void 0 !== r ? r : 100;
if (hs.classGameInfo.gameNum + 1 <= o || this._isColdStartFirstGame) if (this._hasEliminatedInGame) ; else {
hs.NativeAd.callNativeBannerGone("0");
e.replace = !0;
e.returnState = !0;
this._bannerPendingFirstEliminate = !0;
}
}
}
};
t.prototype.onBlocksTouchEndForBanner = function(e) {
var t, r, i, o;
if (!this._hasEliminatedInGame) {
var n = null === (t = e.args) || void 0 === t ? void 0 : t[0];
if (null === (r = null == n ? void 0 : n.state) || void 0 === r ? void 0 : r.eliminateCount) {
this._hasEliminatedInGame = !0;
if (this._bannerPendingFirstEliminate) {
this._bannerPendingFirstEliminate = !1;
null === (o = null === (i = hs.EventManager) || void 0 === i ? void 0 : i.dispatchModuleEvent) || void 0 === o || o.call(i, new hs.E_Advertisement_BannerShow());
}
}
}
};
return a([ classId("AdPlusMinusStrategyTrait"), classMethodWatch() ], t);
}(Trait);
r.AdPlusMinusStrategyTrait = c;
cc._RF.pop();
}, {} ],
AdPlusMinusStrategy_ios_Trait: [ function(e, t, r) {
"use strict";
cc._RF.push(t, "6a9e4kFxkpCxoc46ZRafSi1", "AdPlusMinusStrategy_ios_Trait");
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
var o, n = arguments.length, a = n < 3 ? t : null === i ? i = Object.getOwnPropertyDescriptor(t, r) : i;
if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) a = Reflect.decorate(e, t, r, i); else for (var s = e.length - 1; s >= 0; s--) (o = e[s]) && (a = (n < 3 ? o(a) : n > 3 ? o(t, r, a) : o(t, r)) || a);
return n > 3 && a && Object.defineProperty(t, r, a), a;
};
Object.defineProperty(r, "__esModule", {
value: !0
});
r.AdPlusMinusStrategy_ios_Trait = void 0;
var a = function(e) {
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
t.prototype.isClassAdvertisement_FullScreenProxyReShieldPlayAdvertisement = function(e) {
this.onInterstitialShield(e);
};
t.prototype.isClassAlgorithmStrategyIOS_Replace_ProxyPreprocessingAlgorithm = function() {
this.onAdd1AlgorithmPreprocess();
};
return n([ classId("AdPlusMinusStrategyTrait", "ios") ], t);
}(e("./AdPlusMinusStrategyTrait").AdPlusMinusStrategyTrait);
r.AdPlusMinusStrategy_ios_Trait = a;
cc._RF.pop();
}, {
"./AdPlusMinusStrategyTrait": "AdPlusMinusStrategyTrait"
} ]
}, {}, [ "AdPlusMinusStrategyTrait", "AdPlusMinusStrategy_ios_Trait" ]);
//# sourceMappingURL=index.js.map
