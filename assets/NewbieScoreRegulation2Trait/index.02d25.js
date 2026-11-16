window.__require = function e(t, o, r) {
function i(s, n) {
if (!o[s]) {
if (!t[s]) {
var l = s.split("/");
l = l[l.length - 1];
if (!t[l]) {
var c = "function" == typeof __require && __require;
if (!n && c) return c(l, !0);
if (a) return a(l, !0);
throw new Error("Cannot find module '" + s + "'");
}
s = l;
}
var h = o[s] = {
exports: {}
};
t[s][0].call(h.exports, function(e) {
return i(t[s][1][e] || e);
}, h, h.exports, e, t, o, r);
}
return o[s].exports;
}
for (var a = "function" == typeof __require && __require, s = 0; s < r.length; s++) i(r[s]);
return i;
}({
NewbieScoreRegulation2Trait: [ function(e, t, o) {
"use strict";
cc._RF.push(t, "d8adakYC/RMU6ITA4x6W7CJ", "NewbieScoreRegulation2Trait");
var r, i = this && this.__extends || (r = function(e, t) {
return (r = Object.setPrototypeOf || {
__proto__: []
} instanceof Array && function(e, t) {
e.__proto__ = t;
} || function(e, t) {
for (var o in t) Object.prototype.hasOwnProperty.call(t, o) && (e[o] = t[o]);
})(e, t);
}, function(e, t) {
r(e, t);
function o() {
this.constructor = e;
}
e.prototype = null === t ? Object.create(t) : (o.prototype = t.prototype, new o());
}), a = this && this.__decorate || function(e, t, o, r) {
var i, a = arguments.length, s = a < 3 ? t : null === r ? r = Object.getOwnPropertyDescriptor(t, o) : r;
if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) s = Reflect.decorate(e, t, o, r); else for (var n = e.length - 1; n >= 0; n--) (i = e[n]) && (s = (a < 3 ? i(s) : a > 3 ? i(t, o, s) : i(t, o)) || s);
return a > 3 && s && Object.defineProperty(t, o, s), s;
}, s = this && this.__read || function(e, t) {
var o = "function" == typeof Symbol && e[Symbol.iterator];
if (!o) return e;
var r, i, a = o.call(e), s = [];
try {
for (;(void 0 === t || t-- > 0) && !(r = a.next()).done; ) s.push(r.value);
} catch (e) {
i = {
error: e
};
} finally {
try {
r && !r.done && (o = a.return) && o.call(a);
} finally {
if (i) throw i.error;
}
}
return s;
}, n = this && this.__values || function(e) {
var t = "function" == typeof Symbol && Symbol.iterator, o = t && e[t], r = 0;
if (o) return o.call(e);
if (e && "number" == typeof e.length) return {
next: function() {
e && r >= e.length && (e = void 0);
return {
value: e && e[r++],
done: !e
};
}
};
throw new TypeError(t ? "Object is not iterable." : "Symbol.iterator is not defined.");
};
Object.defineProperty(o, "__esModule", {
value: !0
});
o.NewbieScoreRegulation2Trait = void 0;
var l = function(e) {
i(t, e);
function t() {
return null !== e && e.apply(this, arguments) || this;
}
o = t;
t.prototype.data = function() {
return {
historyHighScoreAtStart: 0,
hasRecordedThisGame: !1,
isReplacedAlgo: !1
};
};
t.prototype.onCreate = function() {
this._loadStateFromStorage();
};
Object.defineProperty(t.prototype, "onActiveCondition", {
get: function() {
return hs.gameInfo.gameMode === hs.GameMode.Class;
},
enumerable: !1,
configurable: !0
});
t.prototype.onActive = function(e) {
hs.tp.isClassGame_ProxyOnGameStart(e) && this._onGameStart();
(hs.tp.isClassGameOver_GameEnd_ProxyOnGameEnd(e) || hs.tp.isClassGame_Replay_ProxyOnGameReplay(e)) && this._onGameEnd();
hs.tp.isClassRevive_ProxyOnRevive_Success(e) && this._onRevive();
hs.tpManual.isClassAlgorithmBottomSequenceGPInfoTriggerBottomOfferAlgo(e) && this._handleNewbieAlgoReplace();
hs.tpManual.isClassAlgorithmBottomSequenceGPInfoOnDisableBottomAlgo(e) && this._handleBottomOfferResult(e);
hs.tp.isClassScoreInfoOnComputeComplete(e) && this._handleComboScoreMultiplier(e);
hs.tp.isClassDefaultBoard_ProxyIsUseEmptyBoardBeforeInit(e) && this._handleEmptyBoard(e);
hs.tp.isClassAlgorithmStrategy_Condition_ProxyOnAlgorithmStrategyCondition(e) && this._handleHardPuzzleReplace();
};
t.prototype._onGameStart = function() {
this._loadStateFromStorage();
this.state.hasRecordedThisGame = !1;
};
t.prototype._onGameEnd = function() {
if (!this.state.hasRecordedThisGame) {
var e = hs.classScoreInfo.score || 0, t = this.state.historyHighScoreAtStart, o = e > t, r = this._getStorageData();
r.lastGameScore = e;
r.recentBreakRecords.unshift(o);
r.recentBreakRecords.length > 10 && (r.recentBreakRecords = r.recentBreakRecords.slice(0, 10));
r.lastHistoryHighScore = Math.max(t, e);
r.isAfterRevive = !1;
r.scoreAtRevive = 0;
var i = this.props.emptyBoardScoreThreshold;
Number.isFinite(i) && i > 0 && e <= i && (r.shouldUseEmptyBoard = !0);
this._saveStorageData(r);
this.state.hasRecordedThisGame = !0;
}
};
t.prototype._onRevive = function() {
var e = this._getStorageData();
e.isAfterRevive = !0;
e.scoreAtRevive = hs.classScoreInfo.score || 0;
this._saveStorageData(e);
};
t.prototype._handleComboScoreMultiplier = function(e) {
var t = hs.classScoreInfo.score || 0, o = this.props.historyHighScoreCap, r = Number.isFinite(o) && o > 0 && t >= o;
r && this.state.historyHighScoreAtStart < o && (this.state.historyHighScoreAtStart = o);
var i = this.state.historyHighScoreAtStart;
if (!(i < (-1 == o ? 6e3 : o)) || r) {
var a = this._getStorageData(), s = 1;
if (a.isAfterRevive) {
if (!this.props.reviveComboEnabled) return;
s = this._getReviveComboMultiplier(a, i);
} else {
var n = r, l = this._getGameNum(), c = this.props.maxGameNum;
if (Number.isFinite(c) && c > 0 && l > c) return;
s = this._getNormalComboMultiplier(i, n, a);
}
if (1 !== s) {
var h = e.args, u = h[1] || 0;
h[1] = Math.max(0, Math.floor(u * s));
}
}
};
t.prototype._getNormalComboMultiplier = function(e, t, o) {
var r, i = this._getGameNum(), a = hs.classScoreInfo.score || 0, s = e > 0 ? (a - e) / e : 0;
return null !== (r = (t || this._shouldAssist(i, o, e) ? this.props.assistComboCoeffs || [ 1.3, 1, 1, 1, .8, .6, .6, .4, .3 ] : this.props.suppressComboCoeffs || [ 1, 1, 1, 1, .6, .6, .6, .4, .3 ])[this._getCoeffIndex(s)]) && void 0 !== r ? r : 1;
};
t.prototype._getReviveComboMultiplier = function(e, t) {
var o = hs.classScoreInfo.score || 0, r = o - (e.scoreAtRevive || 0), i = (this.props.reviveScoreRatio || 80) / 100;
return t > 0 && o < t * i ? this._getReviveLowScoreMultiplier(r, e) : this._getReviveHighScoreMultiplier(r);
};
t.prototype._getReviveLowScoreMultiplier = function(e, t) {
var o, r;
if (e > (this.props.reviveLowRangeThreshold || 600)) return 1;
var i = this.props.reviveLowRecentGames || 4, a = (t.recentBreakRecords || []).slice(0, i);
return a.length < i || a.some(function(e) {
return e;
}) ? null !== (o = this.props.reviveLowBreakCoeff) && void 0 !== o ? o : 1 : null !== (r = this.props.reviveLowNoBreakCoeff) && void 0 !== r ? r : 1.4;
};
t.prototype._getReviveHighScoreMultiplier = function(e) {
for (var t, o, r = this.props.reviveHighRanges || [ 1e3, 2e3, 4e3 ], i = this.props.reviveHighCoeffs || [ 1, 1, .6, .4 ], a = 0; a < r.length; a++) if (e <= r[a]) return null !== (t = i[a]) && void 0 !== t ? t : 1;
return null !== (o = i[i.length - 1]) && void 0 !== o ? o : 1;
};
t.prototype._shouldAssist = function(e, t, o) {
var r, i, a = this.props.highScoreRatios || [ 40, 30, 16, 10, 8 ], s = this.props.recentNoBreakCounts || [ 2, 3, 4, 5 ], n = t.lastGameScore || 0, l = t.recentBreakRecords || [];
if (e >= 1 && e <= 5) {
r = a[0] / 100;
i = s[0];
} else if (e >= 6 && e <= 10) {
r = a[1] / 100;
i = s[1];
} else if (e >= 11 && e <= 20) {
r = a[2] / 100;
i = s[2];
} else if (e >= 21 && e <= 40) {
r = a[3] / 100;
i = s[3];
} else {
if (!(e >= 41)) return !1;
r = a[4] / 100;
i = -1;
}
return o > 0 && n < o * r || !!(i > 0 && l.length >= i && l.slice(0, i).every(function(e) {
return !e;
}));
};
t.prototype._getCoeffIndex = function(e) {
for (var t = 0; t < o.COMBO_RATIO_RANGES.length; t++) {
var r = s(o.COMBO_RATIO_RANGES[t], 2), i = r[0], a = r[1];
if (e >= i && e <= a) return t;
}
return o.COMBO_RATIO_RANGES.length - 1;
};
t.prototype._handleNewbieAlgoReplace = function() {
this.state.isReplacedAlgo = !1;
if (this._shouldApplyNewbieAlgoReplace()) {
var e = hs.algorithmName.algoActualIdByPos;
if (this._shouldReplaceAlgo(e)) {
hs.algorithmBottomSequenceInfo.setAlgorithmBottomList([ o.FILL_BLANK_ALGO, hs.OFFER_TYPE.SUI_JI_WU_SI ]);
this.state.isReplacedAlgo = !0;
}
}
};
t.prototype._handleBottomOfferResult = function(e) {
if (this.state.isReplacedAlgo) {
var t = e.args[0];
if (null == t ? void 0 : t.callReturnValue) {
hs.algorithmBottomSequenceInfo.setIsTriggerBottomAlgo(!1);
this.state.isReplacedAlgo = !1;
}
}
};
t.prototype._shouldApplyNewbieAlgoReplace = function() {
var e = this.props.newbieRounds || [ 1, 2, 3, 4, 5, 6, 7, 8 ], t = this.props.newbieScoreWeight || [ 4e3, 300 ], o = t[0] || 4e3, r = t[1] || 300, i = this._getGameNum(), a = hs.classScoreInfo.score || 0, s = this._getBoardWeight();
return !!e.includes(i) && (!(a >= o) && !(s < r));
};
t.prototype._shouldReplaceAlgo = function(e) {
var t, r, i;
if (o.LARGE_AREA_FILL_ALGOS.includes(e)) return !0;
var a = (null === (i = hs.OFFER_TYPE_STRINGS) || void 0 === i ? void 0 : i[e]) || "";
try {
for (var s = n(o.ENTROPY_HARD_KEYWORDS), l = s.next(); !l.done; l = s.next()) {
var c = l.value;
if (a.includes(c)) return !0;
}
} catch (e) {
t = {
error: e
};
} finally {
try {
l && !l.done && (r = s.return) && r.call(s);
} finally {
if (t) throw t.error;
}
}
return !1;
};
t.prototype._handleEmptyBoard = function(e) {
var t = this._getStorageData();
if (t.shouldUseEmptyBoard) {
e.args[0] = !0;
e.returnState = !0;
t.shouldUseEmptyBoard = !1;
this._saveStorageData(t);
}
};
t.prototype._handleHardPuzzleReplace = function() {
var e, t, o = this.props.hardPuzzleScoreRanges, r = this.props.hardPuzzleReplaceProbability;
if ((null == o ? void 0 : o.length) && Number.isFinite(r) && !(r <= 0)) {
var i = this.state.historyHighScoreAtStart;
if (!(i <= 0)) {
var a = (hs.classScoreInfo.score || 0) / i * 100, s = !1;
try {
for (var l = n(o), c = l.next(); !c.done; c = l.next()) {
var h = c.value;
if (h.length >= 2 && a >= h[0] && a < h[1]) {
s = !0;
break;
}
}
} catch (t) {
e = {
error: t
};
} finally {
try {
c && !c.done && (t = l.return) && t.call(l);
} finally {
if (e) throw e.error;
}
}
if (s) if (100 * Math.random() >= r) ; else {
var u = hs.algorithmStrategyInfo.algorithmList.concat();
hs.algorithmStrategyInfo.setAlgorithmList([ hs.OFFER_TYPE.KUN_NAN_TI ]);
hs.algorithmStrategyInfo.setAlgorithmFailList(u);
}
}
}
};
t.prototype._getGameNum = function() {
var e;
return ((null === (e = hs.classGameInfo) || void 0 === e ? void 0 : e.gameNum) || 0) + 1;
};
t.prototype._getBoardWeight = function() {
var e = new hs.BinaryBoard();
e.convertToBinaryBoard(hs.boardInfo.faceBlocks);
return e.getWeightValueObj();
};
t.prototype._getStorageData = function() {
return hs.storage.getItem("NewbieScoreRegulation2Trait", {
lastGameScore: 0,
recentBreakRecords: [],
lastHistoryHighScore: 0,
isAfterRevive: !1,
scoreAtRevive: 0,
shouldUseEmptyBoard: !1
});
};
t.prototype._saveStorageData = function(e) {
hs.storage.setItem("NewbieScoreRegulation2Trait", e);
};
t.prototype._loadStateFromStorage = function() {
var e = this._getStorageData();
this.state.historyHighScoreAtStart = e.lastHistoryHighScore;
};
var o;
t.FILL_BLANK_ALGO = 4;
t.LARGE_AREA_FILL_ALGOS = [ 14070 ];
t.ENTROPY_HARD_KEYWORDS = [ "熵增", "难题", "熵熷" ];
t.TAG = "[ScoreReg2]";
t.COMBO_RATIO_RANGES = [ [ -1, -.8 ], [ -.8, -.6 ], [ -.6, -.4 ], [ -.4, -.2 ], [ -.2, .1 ], [ .1, .2 ], [ .2, .3 ], [ .3, .4 ], [ .4, Infinity ] ];
return o = a([ classId("NewbieScoreRegulation2Trait"), classMethodWatch() ], t);
}(Trait);
o.NewbieScoreRegulation2Trait = l;
cc._RF.pop();
}, {} ],
NewbieScoreRegulation2_ios_Trait: [ function(e, t, o) {
"use strict";
cc._RF.push(t, "064caumKIdNGZdd5HqXZ/KR", "NewbieScoreRegulation2_ios_Trait");
var r, i = this && this.__extends || (r = function(e, t) {
return (r = Object.setPrototypeOf || {
__proto__: []
} instanceof Array && function(e, t) {
e.__proto__ = t;
} || function(e, t) {
for (var o in t) Object.prototype.hasOwnProperty.call(t, o) && (e[o] = t[o]);
})(e, t);
}, function(e, t) {
r(e, t);
function o() {
this.constructor = e;
}
e.prototype = null === t ? Object.create(t) : (o.prototype = t.prototype, new o());
}), a = this && this.__decorate || function(e, t, o, r) {
var i, a = arguments.length, s = a < 3 ? t : null === r ? r = Object.getOwnPropertyDescriptor(t, o) : r;
if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) s = Reflect.decorate(e, t, o, r); else for (var n = e.length - 1; n >= 0; n--) (i = e[n]) && (s = (a < 3 ? i(s) : a > 3 ? i(t, o, s) : i(t, o)) || s);
return a > 3 && s && Object.defineProperty(t, o, s), s;
};
Object.defineProperty(o, "__esModule", {
value: !0
});
o.NewbieScoreRegulation2_ios_Trait = void 0;
var s = e("./NewbieScoreRegulation2Trait"), n = [ 14070, 291005, 14019, 14020 ], l = function(e) {
i(t, e);
function t() {
return null !== e && e.apply(this, arguments) || this;
}
t.prototype.isClassAlgorithmBottomSequenceInfoTriggerBottomOfferAlgo = function() {
this._handleNewbieAlgoReplace();
};
t.prototype.isClassAlgorithmBottomSequenceInfoOnDisableBottomAlgo = function(e) {
this._handleBottomOfferResult(e);
};
t.prototype._shouldReplaceAlgo = function(t) {
var o;
null === (o = hs.OFFER_TYPE_STRINGS) || void 0 === o || o[t];
return !!n.includes(t) || e.prototype._shouldReplaceAlgo.call(this, t);
};
return a([ classId("NewbieScoreRegulation2Trait", "ios") ], t);
}(s.NewbieScoreRegulation2Trait);
o.NewbieScoreRegulation2_ios_Trait = l;
cc._RF.pop();
}, {
"./NewbieScoreRegulation2Trait": "NewbieScoreRegulation2Trait"
} ]
}, {}, [ "NewbieScoreRegulation2Trait", "NewbieScoreRegulation2_ios_Trait" ]);
//# sourceMappingURL=index.js.map
