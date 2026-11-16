window.__require = function t(e, o, r) {
function i(n, s) {
if (!o[n]) {
if (!e[n]) {
var l = n.split("/");
l = l[l.length - 1];
if (!e[l]) {
var c = "function" == typeof __require && __require;
if (!s && c) return c(l, !0);
if (a) return a(l, !0);
throw new Error("Cannot find module '" + n + "'");
}
n = l;
}
var u = o[n] = {
exports: {}
};
e[n][0].call(u.exports, function(t) {
return i(e[n][1][t] || t);
}, u, u.exports, t, e, o, r);
}
return o[n].exports;
}
for (var a = "function" == typeof __require && __require, n = 0; n < r.length; n++) i(r[n]);
return i;
}({
NewbieScoreRegulationTrait: [ function(t, e, o) {
"use strict";
cc._RF.push(e, "d2339sC4VBAbqK+p4jg8Uhk", "NewbieScoreRegulationTrait");
var r, i = this && this.__extends || (r = function(t, e) {
return (r = Object.setPrototypeOf || {
__proto__: []
} instanceof Array && function(t, e) {
t.__proto__ = e;
} || function(t, e) {
for (var o in e) Object.prototype.hasOwnProperty.call(e, o) && (t[o] = e[o]);
})(t, e);
}, function(t, e) {
r(t, e);
function o() {
this.constructor = t;
}
t.prototype = null === e ? Object.create(e) : (o.prototype = e.prototype, new o());
}), a = this && this.__decorate || function(t, e, o, r) {
var i, a = arguments.length, n = a < 3 ? e : null === r ? r = Object.getOwnPropertyDescriptor(e, o) : r;
if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) n = Reflect.decorate(t, e, o, r); else for (var s = t.length - 1; s >= 0; s--) (i = t[s]) && (n = (a < 3 ? i(n) : a > 3 ? i(e, o, n) : i(e, o)) || n);
return a > 3 && n && Object.defineProperty(e, o, n), n;
}, n = this && this.__values || function(t) {
var e = "function" == typeof Symbol && Symbol.iterator, o = e && t[e], r = 0;
if (o) return o.call(t);
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
}, s = this && this.__read || function(t, e) {
var o = "function" == typeof Symbol && t[Symbol.iterator];
if (!o) return t;
var r, i, a = o.call(t), n = [];
try {
for (;(void 0 === e || e-- > 0) && !(r = a.next()).done; ) n.push(r.value);
} catch (t) {
i = {
error: t
};
} finally {
try {
r && !r.done && (o = a.return) && o.call(a);
} finally {
if (i) throw i.error;
}
}
return n;
};
Object.defineProperty(o, "__esModule", {
value: !0
});
o.NewbieScoreRegulationTrait = void 0;
var l = function(t) {
i(e, t);
function e() {
return null !== t && t.apply(this, arguments) || this;
}
o = e;
e.prototype.data = function() {
return {
historyHighScoreAtStart: 0,
hasRecordedThisGame: !1,
isReplacedAlgo: !1
};
};
e.prototype.onCreate = function() {
this._loadStateFromStorage();
};
Object.defineProperty(e.prototype, "onActiveCondition", {
get: function() {
return hs.gameInfo.gameMode === hs.GameMode.Class;
},
enumerable: !1,
configurable: !0
});
e.prototype.onActive = function(t) {
hs.tp.isClassGame_ProxyOnGameStart(t) && this._onGameStart();
(hs.tp.isClassGameOver_GameEnd_ProxyOnGameEnd(t) || hs.tp.isClassGame_Replay_ProxyOnGameReplay(t)) && this._onGameEnd();
hs.tp.isClassRevive_ProxyOnRevive_Success(t) && this._onRevive();
hs.tpManual.isClassAlgorithmBottomSequenceGPInfoTriggerBottomOfferAlgo(t) && this._handleNewbieAlgoReplace(t);
hs.tpManual.isClassAlgorithmBottomSequenceGPInfoOnDisableBottomAlgo(t) && this.handleBottomOfferResult(t);
hs.tp.isClassScoreInfoOnComputeComplete(t) && this._handleComboScoreMultiplier(t);
};
e.prototype._onGameStart = function() {
this._loadStateFromStorage();
this.state.hasRecordedThisGame = !1;
};
e.prototype._onGameEnd = function() {
if (!this.state.hasRecordedThisGame) {
var t = hs.classScoreInfo.score || 0, e = this.state.historyHighScoreAtStart, o = t > e, r = this._getStorageData();
r.lastGameScore = t;
r.recentBreakRecords.unshift(o);
r.recentBreakRecords.length > 10 && (r.recentBreakRecords = r.recentBreakRecords.slice(0, 10));
r.lastHistoryHighScore = Math.max(e, t);
r.isAfterRevive = !1;
this._saveStorageData(r);
this.state.hasRecordedThisGame = !0;
}
};
e.prototype._onRevive = function() {
var t = this._getStorageData();
t.isAfterRevive = !0;
this._saveStorageData(t);
};
e.prototype._handleNewbieAlgoReplace = function() {
this.state.isReplacedAlgo = !1;
if (this._shouldApplyNewbieAlgoReplace()) {
var t = hs.algorithmName.algoActualIdByPos, e = [];
if (this._shouldReplaceAlgo(t)) {
e.push(o.FILL_BLANK_ALGO);
e.push(hs.OFFER_TYPE.SUI_JI_WU_SI);
hs.algorithmBottomSequenceInfo.setAlgorithmBottomList(e);
this.state.isReplacedAlgo = !0;
}
}
};
e.prototype.handleBottomOfferResult = function(t) {
if (this.state.isReplacedAlgo) {
var e = t.args[0];
if (null == e ? void 0 : e.callReturnValue) {
hs.algorithmBottomSequenceInfo.setIsTriggerBottomAlgo(!1);
this.state.isReplacedAlgo = !1;
}
}
};
e.prototype._shouldApplyNewbieAlgoReplace = function() {
if (!this.isHighMaturityStrategyEnabled()) return !1;
var t = this.props.newbieRounds || [ 1, 2, 3, 4, 5, 6, 7, 8 ], e = this.props.newbieScoreWeight || [ 4e3, 300 ], o = e[0] || 4e3, r = e[1] || 300, i = this._getGameNum(), a = hs.classScoreInfo.score || 0, n = this._getBoardWeight();
return !!t.includes(i) && (!(a >= o) && !(n < r));
};
e.prototype._shouldReplaceAlgo = function(t) {
var e, r, i, a = (null === (i = hs.OFFER_TYPE_STRINGS) || void 0 === i ? void 0 : i[t]) || "";
if (o.LARGE_AREA_FILL_ALGOS.includes(t)) return !0;
try {
for (var s = n(o.ENTROPY_HARD_KEYWORDS), l = s.next(); !l.done; l = s.next()) {
var c = l.value;
if (a.includes(c)) return !0;
}
} catch (t) {
e = {
error: t
};
} finally {
try {
l && !l.done && (r = s.return) && r.call(s);
} finally {
if (e) throw e.error;
}
}
return !1;
};
e.prototype._handleComboScoreMultiplier = function(t) {
if (this.isHighMaturityStrategyEnabled()) if (this.state.historyHighScoreAtStart <= 6e3) ; else if (this._getStorageData().isAfterRevive) ; else {
var e = this._getComboMultiplier();
if (1 !== e) {
var o = t.args, r = o[1] || 0, i = Math.max(0, Math.floor(r * e));
o[1] = i;
}
}
};
e.prototype._getComboMultiplier = function() {
var t, e = this._getGameNum(), o = this.state.historyHighScoreAtStart, r = hs.classScoreInfo.score || 0, i = this._getStorageData();
if (e > 100) return 1;
var a = o > 0 ? (r - o) / o : 0;
return null !== (t = (this._shouldAssist(e, i, o) ? this.props.assistComboCoeffs || [ 1.4, 1.2, 1, .8, .6, .6, .6, .4, .4 ] : this.props.suppressComboCoeffs || [ 1, 1, 1, .8, .6, .6, .6, .4, .4 ])[this._getCoeffIndex(a)]) && void 0 !== t ? t : 1;
};
e.prototype._shouldAssist = function(t, e, o) {
var r, i, a = this.props.highScoreRatios || [ 40, 30, 16, 8, 4 ], n = this.props.recentNoBreakCounts || [ 2, 3, 4, 5 ], s = e.lastGameScore || 0, l = e.recentBreakRecords || [];
if (t >= 1 && t <= 5) {
r = a[0] / 100;
i = n[0];
} else if (t >= 6 && t <= 10) {
r = a[1] / 100;
i = n[1];
} else if (t >= 11 && t <= 20) {
r = a[2] / 100;
i = n[2];
} else if (t >= 21 && t <= 40) {
r = a[3] / 100;
i = n[3];
} else {
if (!(t >= 41 && t <= 100)) return !1;
r = a[4] / 100;
i = -1;
}
return o > 0 && s < o * r || !!(i > 0 && l.length >= i && l.slice(0, i).every(function(t) {
return !t;
}));
};
e.prototype._getCoeffIndex = function(t) {
for (var e = 0; e < o.COMBO_RATIO_RANGES.length; e++) {
var r = s(o.COMBO_RATIO_RANGES[e], 2), i = r[0], a = r[1];
if (t >= i && t <= a) return e;
}
return o.COMBO_RATIO_RANGES.length - 1;
};
e.prototype._getGameNum = function() {
var t;
return ((null === (t = hs.classGameInfo) || void 0 === t ? void 0 : t.gameNum) || 0) + 1;
};
e.prototype._getHistoryHighScore = function() {
var t;
return (null === (t = hs.classScoreInfo) || void 0 === t ? void 0 : t.highScore) || 0;
};
e.prototype._getBoardWeight = function() {
var t = new hs.BinaryBoard();
t.convertToBinaryBoard(hs.boardInfo.faceBlocks);
return t.getWeightValueObj();
};
e.prototype._getStorageData = function() {
return hs.storage.getItem("NewbieScoreRegulationTrait", {
lastGameScore: 0,
recentBreakRecords: [],
lastHistoryHighScore: 0,
isAfterRevive: !1
});
};
e.prototype._saveStorageData = function(t) {
hs.storage.setItem("NewbieScoreRegulationTrait", t);
};
e.prototype._loadStateFromStorage = function() {
var t = this._getStorageData();
this.state.historyHighScoreAtStart = t.lastHistoryHighScore;
};
e.prototype.isHighMaturityStrategyEnabled = function() {
return !0;
};
var o;
e.FILL_BLANK_ALGO = 4;
e.LARGE_AREA_FILL_ALGOS = [ 14070 ];
e.ENTROPY_HARD_KEYWORDS = [ "熵增", "难题", "熵熷" ];
e.COMBO_RATIO_RANGES = [ [ -1, -.8 ], [ -.8, -.6 ], [ -.6, -.4 ], [ -.4, -.2 ], [ -.2, .1 ], [ .1, .2 ], [ .2, .3 ], [ .3, .4 ], [ .4, Infinity ] ];
return o = a([ classId("NewbieScoreRegulationTrait"), classMethodWatch() ], e);
}(Trait);
o.NewbieScoreRegulationTrait = l;
cc._RF.pop();
}, {} ],
NewbieScoreRegulation_gp_Trait: [ function(t, e, o) {
"use strict";
cc._RF.push(e, "1630akC2A5F4663iY7qbYvQ", "NewbieScoreRegulation_gp_Trait");
var r, i = this && this.__extends || (r = function(t, e) {
return (r = Object.setPrototypeOf || {
__proto__: []
} instanceof Array && function(t, e) {
t.__proto__ = e;
} || function(t, e) {
for (var o in e) Object.prototype.hasOwnProperty.call(e, o) && (t[o] = e[o]);
})(t, e);
}, function(t, e) {
r(t, e);
function o() {
this.constructor = t;
}
t.prototype = null === e ? Object.create(e) : (o.prototype = e.prototype, new o());
}), a = this && this.__decorate || function(t, e, o, r) {
var i, a = arguments.length, n = a < 3 ? e : null === r ? r = Object.getOwnPropertyDescriptor(e, o) : r;
if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) n = Reflect.decorate(t, e, o, r); else for (var s = t.length - 1; s >= 0; s--) (i = t[s]) && (n = (a < 3 ? i(n) : a > 3 ? i(e, o, n) : i(e, o)) || n);
return a > 3 && n && Object.defineProperty(e, o, n), n;
};
Object.defineProperty(o, "__esModule", {
value: !0
});
o.NewbieScoreRegulation_gp_Trait = void 0;
var n = function(t) {
i(e, t);
function e() {
var e = null !== t && t.apply(this, arguments) || this;
e._activationGateCacheKey = null;
e._activationGateCacheResult = !1;
return e;
}
e.prototype.onCreate = function() {
t.prototype.onCreate.call(this);
this.clearActivationGateCache();
};
e.prototype.isHighMaturityStrategyEnabled = function() {
return this.getHighMaturityActivationGateCached();
};
e.prototype.clearActivationGateCache = function() {
this._activationGateCacheKey = null;
this._activationGateCacheResult = !1;
};
e.prototype.getHighMaturityActivationGateCached = function() {
var t = this.buildActivationGateCacheKey();
if (this._activationGateCacheKey === t) return this._activationGateCacheResult;
var e = this.evaluateHighMaturityActivationGate();
this._activationGateCacheKey = t;
this._activationGateCacheResult = e;
return e;
};
e.prototype.buildActivationGateCacheKey = function() {
var t, e;
return (null !== (e = null === (t = hs.classGameInfo) || void 0 === t ? void 0 : t.gameNum) && void 0 !== e ? e : -1) + "|" + this.getInstallDays() + "|" + (hs.attributionInfo.isPreInstall ? 1 : 0);
};
e.prototype.evaluateHighMaturityActivationGate = function() {
var t, e, o, r, i, a = null !== (t = this.props.maturityType) && void 0 !== t ? t : "game", n = null !== (e = this.props.thresholdSource) && void 0 !== e ? e : 1, s = null !== (o = this.props.dynamicThreshold) && void 0 !== o ? o : "AVG", l = !1 !== this.props.isUseModelV2, c = hs.attributionInfo.isPreInstall, u = this.getInstallDays(), h = c ? (null === (r = this.props) || void 0 === r ? void 0 : r.preinstall) || [] : (null === (i = this.props) || void 0 === i ? void 0 : i.nonPreinstall) || [], p = 2 === (null == h ? void 0 : h.length), f = l ? TRAIT("MaturityModelTrait") : TRAIT("MaturityDevelopmentV2Trait");
if (!(null == f ? void 0 : f.active)) return !1;
if (p) {
var g = this.getWeightedSkillMaturityScore(a, l);
this.getSkillTwoSegmentLifecycleLabel(u);
return !!(g > this.getTwoSegmentJudgmentThreshold(u, h));
}
var _ = this.getMaturityThresholdRangeParam(c);
return !!(l ? f.isHighMaturity(a, _, s, n, this.traitName) : f.isHighMaturity(a, _));
};
e.prototype.getMaturityThresholdRangeParam = function(t) {
return t ? this.props.maturityThresholdRangesPreInstall || [ [ 0, 0, 27 ], [ 1, 3, 47 ], [ 4, 7, 57 ], [ 8, 59 ] ] : this.props.maturityThresholdRanges || [ [ 0, 0, 30 ], [ 1, 3, 50 ], [ 4, 7, 60 ], [ 8, 62 ] ];
};
e.prototype.getWeightedSkillMaturityScore = function(t, e) {
var o, r;
if (e) {
var i = TRAIT("MaturityModelTrait");
return null !== (o = null == i ? void 0 : i.getSkillScore(t)) && void 0 !== o ? o : 0;
}
var a = TRAIT("MaturityDevelopmentV2Trait");
return null !== (r = null == a ? void 0 : a.getSkillScore(null, t)) && void 0 !== r ? r : 0;
};
e.prototype.getSkillTwoSegmentLifecycleLabel = function(t) {
return t <= 0 ? "D0(首日)" : "D1及以后";
};
e.prototype.getTwoSegmentJudgmentThreshold = function(t, e) {
return t <= 0 ? e[0] : e[1];
};
e.prototype.getInstallDays = function() {
var t, e = null === (t = hs.gameInfo) || void 0 === t ? void 0 : t.firstEntryTime;
return e ? Math.max(0, hs.getDiffDays(e, Date.now())) : 0;
};
return a([ classId("NewbieScoreRegulationTrait", "gp") ], e);
}(t("./NewbieScoreRegulationTrait").NewbieScoreRegulationTrait);
o.NewbieScoreRegulation_gp_Trait = n;
cc._RF.pop();
}, {
"./NewbieScoreRegulationTrait": "NewbieScoreRegulationTrait"
} ],
NewbieScoreRegulation_ios_Trait: [ function(t, e, o) {
"use strict";
cc._RF.push(e, "34886uO+otO+p3TD+0J4ngY", "NewbieScoreRegulation_ios_Trait");
var r, i = this && this.__extends || (r = function(t, e) {
return (r = Object.setPrototypeOf || {
__proto__: []
} instanceof Array && function(t, e) {
t.__proto__ = e;
} || function(t, e) {
for (var o in e) Object.prototype.hasOwnProperty.call(e, o) && (t[o] = e[o]);
})(t, e);
}, function(t, e) {
r(t, e);
function o() {
this.constructor = t;
}
t.prototype = null === e ? Object.create(e) : (o.prototype = e.prototype, new o());
}), a = this && this.__decorate || function(t, e, o, r) {
var i, a = arguments.length, n = a < 3 ? e : null === r ? r = Object.getOwnPropertyDescriptor(e, o) : r;
if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) n = Reflect.decorate(t, e, o, r); else for (var s = t.length - 1; s >= 0; s--) (i = t[s]) && (n = (a < 3 ? i(n) : a > 3 ? i(e, o, n) : i(e, o)) || n);
return a > 3 && n && Object.defineProperty(e, o, n), n;
};
Object.defineProperty(o, "__esModule", {
value: !0
});
o.NewbieScoreRegulation_ios_Trait = void 0;
var n = function(t) {
i(e, t);
function e() {
return null !== t && t.apply(this, arguments) || this;
}
e.prototype.isClassAlgorithmBottomSequenceInfoTriggerBottomOfferAlgo = function(t) {
this._handleNewbieAlgoReplace(t);
};
e.prototype.isClassAlgorithmBottomSequenceInfoOnDisableBottomAlgo = function(t) {
this.handleBottomOfferResult(t);
};
return a([ classId("NewbieScoreRegulationTrait", "ios") ], e);
}(t("./NewbieScoreRegulationTrait").NewbieScoreRegulationTrait);
o.NewbieScoreRegulation_ios_Trait = n;
cc._RF.pop();
}, {
"./NewbieScoreRegulationTrait": "NewbieScoreRegulationTrait"
} ]
}, {}, [ "NewbieScoreRegulationTrait", "NewbieScoreRegulation_gp_Trait", "NewbieScoreRegulation_ios_Trait" ]);
//# sourceMappingURL=index.js.map
