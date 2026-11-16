window.__require = function e(t, r, a) {
function o(n, s) {
if (!r[n]) {
if (!t[n]) {
var d = n.split("/");
d = d[d.length - 1];
if (!t[d]) {
var l = "function" == typeof __require && __require;
if (!s && l) return l(d, !0);
if (i) return i(d, !0);
throw new Error("Cannot find module '" + n + "'");
}
n = d;
}
var u = r[n] = {
exports: {}
};
t[n][0].call(u.exports, function(e) {
return o(t[n][1][e] || e);
}, u, u.exports, e, t, r, a);
}
return r[n].exports;
}
for (var i = "function" == typeof __require && __require, n = 0; n < a.length; n++) o(a[n]);
return o;
}({
RewardHighValueAdHarvestTrait: [ function(e, t, r) {
"use strict";
cc._RF.push(t, "67e7b8eCQ9HQ4QdYYbT8epN", "RewardHighValueAdHarvestTrait");
var a, o = this && this.__extends || (a = function(e, t) {
return (a = Object.setPrototypeOf || {
__proto__: []
} instanceof Array && function(e, t) {
e.__proto__ = t;
} || function(e, t) {
for (var r in t) Object.prototype.hasOwnProperty.call(t, r) && (e[r] = t[r]);
})(e, t);
}, function(e, t) {
a(e, t);
function r() {
this.constructor = e;
}
e.prototype = null === t ? Object.create(t) : (r.prototype = t.prototype, new r());
}), i = this && this.__decorate || function(e, t, r, a) {
var o, i = arguments.length, n = i < 3 ? t : null === a ? a = Object.getOwnPropertyDescriptor(t, r) : a;
if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) n = Reflect.decorate(e, t, r, a); else for (var s = e.length - 1; s >= 0; s--) (o = e[s]) && (n = (i < 3 ? o(n) : i > 3 ? o(t, r, n) : o(t, r)) || n);
return i > 3 && n && Object.defineProperty(t, r, n), n;
};
Object.defineProperty(r, "__esModule", {
value: !0
});
r.RewardHighValueAdHarvestTrait = void 0;
var n = function(e) {
o(t, e);
function t() {
var t = null !== e && e.apply(this, arguments) || this;
t._storageData = null;
t._lastNewGame = !1;
t._currentRewardShowRecorded = !1;
t._gmLoadEcpm = -1;
t._gmForceTrigger = !1;
t._gmSpendTimeOffset = 0;
t.HIGH_PRICE_MULTIPLIER = 3.5;
t.MEDIUM_PRICE_MULTIPLIER = 1.5;
t.MIN_HISTORY_AD_WATCH_COUNT = 3;
t.RECENT_AD_NO_ESCAPE_COUNT = 3;
t.TARGET_AD_LEVEL = "high";
return t;
}
Object.defineProperty(t.prototype, "onActiveCondition", {
get: function() {
return this.isCanActive();
},
enumerable: !1,
configurable: !0
});
t.prototype.isCanActive = function() {
return !0;
};
t.prototype.onCreate = function() {
this.registerWindowDebug();
};
t.prototype.registerWindowDebug = function() {};
Object.defineProperty(t.prototype, "minGameDurationSeconds", {
get: function() {
var e, t;
return null !== (t = null === (e = this.props) || void 0 === e ? void 0 : e.minGameDurationSeconds) && void 0 !== t ? t : 420;
},
enumerable: !1,
configurable: !0
});
Object.defineProperty(t.prototype, "scoreDeltaStep", {
get: function() {
var e, t;
return null !== (t = null === (e = this.props) || void 0 === e ? void 0 : e.scoreDeltaStep) && void 0 !== t ? t : 500;
},
enumerable: !1,
configurable: !0
});
Object.defineProperty(t.prototype, "deathAlgorithm", {
get: function() {
return hs.OFFER_TYPE.ZHI_SI_TI;
},
enumerable: !1,
configurable: !0
});
Object.defineProperty(t.prototype, "currentScoreThreshold", {
get: function() {
var e = this.storageData, t = e.currentGameTriggerCount;
return e.currentGameHistoryHighScore + this.scoreDeltaStep * (t + 1);
},
enumerable: !1,
configurable: !0
});
t.prototype.onActive = function(e) {
var t, r, a, o, i, n, s, d, l, u, c, h, m, g, v, p, f, w;
if (hs.tp.isAdvertisement_Native_ProxyOnNativeRewardCallback(e)) "reward" === (null === (r = null === (t = e.args) || void 0 === t ? void 0 : t[0]) || void 0 === r ? void 0 : r.param) && this.onRewardLoad(); else if (hs.tp.isClassAdvertisement_RewardProxyShowFullSuccess(e)) (null === (a = hs.gameInfo) || void 0 === a ? void 0 : a.gameMode) === hs.GameMode.Class && this.onRewardPlaybackStart(); else if (hs.tp.isEcpmInfoSetLastAdEcpm(e)) {
var R = e;
(null === (o = hs.gameInfo) || void 0 === o ? void 0 : o.gameMode) === hs.GameMode.Class && (null === (i = R.args) || void 0 === i ? void 0 : i[0]) === hs.AdvertiseType.reward && this.backfillRewardShowEcpm(this.normalizeGpAdEcpm(null === (n = R.args) || void 0 === n ? void 0 : n[1]), "EcpmInfo.setLastAdEcpm");
} else if (hs.tp.isAdvertisement_ProxyOnRewardOver(e)) {
var y = null === (s = null == (D = e.args[0]) ? void 0 : D.data) || void 0 === s ? void 0 : s.state, S = y === hs.AdvertiseCallBackState.Advertise_Success, _ = y === hs.AdvertiseCallBackState.Advertise_Fail || y === hs.AdvertiseCallBackState.Advertise_TimeOut;
(null === (d = hs.gameInfo) || void 0 === d ? void 0 : d.gameMode) === hs.GameMode.Class && (S || _) && (S ? this.onRewardComplete() : this.onRewardEscape());
} else if (hs.tp.isClassDefaultBoard_ProxyOnGetAdStatusInfo(e)) {
var G = null === (l = e.args) || void 0 === l ? void 0 : l[0], E = null !== (u = null == G ? void 0 : G.data) && void 0 !== u ? u : G;
(null === (c = hs.gameInfo) || void 0 === c ? void 0 : c.gameMode) === hs.GameMode.Class && "reward" === (null == E ? void 0 : E.adtype) && "show_success" === (null == E ? void 0 : E.adstatus) && this.recordRewardShowWithEcpm(Number(null == E ? void 0 : E.adecpm) || 0, "getAdStatusInfo");
} else if (hs.tp.isClassGame_ProxyOnGameStart(e)) {
if ((null === (h = hs.gameInfo) || void 0 === h ? void 0 : h.gameMode) === hs.GameMode.Class) {
var D = null === (m = e.args) || void 0 === m ? void 0 : m[0];
this._lastNewGame = !!(null === (g = null == D ? void 0 : D.data) || void 0 === g ? void 0 : g.newGame);
}
} else if (hs.tp.isClassGame_ProxyOnClassGameStart(e)) (null === (v = hs.gameInfo) || void 0 === v ? void 0 : v.gameMode) === hs.GameMode.Class && this.handleClassGameStart(); else if (hs.tp.isClassRevive_ProxyOnRevive_Success(e)) (null === (p = hs.gameInfo) || void 0 === p ? void 0 : p.gameMode) === hs.GameMode.Class && this.onReviveSuccess(); else {
(hs.tpManual.isClassAlgorithmBottomSequenceInfoTriggerBottomOfferAlgo(e) || hs.tpManual.isClassAlgorithmBottomSequenceGPInfoTriggerBottomOfferAlgo(e)) && (null === (f = hs.gameInfo) || void 0 === f ? void 0 : f.gameMode) === hs.GameMode.Class && this.onBottomOfferAlgo();
(hs.tpManual.isClassAlgorithmBottomSequenceInfoOnDisableBottomAlgo(e) || hs.tpManual.isClassAlgorithmBottomSequenceGPInfoOnDisableBottomAlgo(e)) && (null === (w = hs.gameInfo) || void 0 === w ? void 0 : w.gameMode) === hs.GameMode.Class && this.onDisableBottomAlgo(e);
}
};
t.prototype.handleClassGameStart = function() {
this.reconcilePendingRewardEscape("onClassGameStart");
this._lastNewGame ? this.startNewGame() : this.restoreResumeGame();
this.tryResolveCurrentReadyReward();
};
t.prototype.startNewGame = function() {
var e, t, r, a, o = this.storageData;
o.currentGameNum = null !== (t = null === (e = hs.classGameInfo) || void 0 === e ? void 0 : e.gameNum) && void 0 !== t ? t : -1;
o.currentGameTriggerCount = 0;
o.currentGameHistoryHighScore = null !== (a = null === (r = hs.classScoreInfo) || void 0 === r ? void 0 : r.highScore) && void 0 !== a ? a : 0;
o.currentGameHasTriggeredDeath = !1;
o.currentGameQualifiedLoadLevel = "none";
this.saveStorageData();
};
t.prototype.restoreResumeGame = function() {
var e, t, r, a, o = this.storageData, i = null !== (t = null === (e = hs.classGameInfo) || void 0 === e ? void 0 : e.gameNum) && void 0 !== t ? t : -1;
if (o.currentGameNum !== i) {
o.currentGameNum = i;
o.currentGameTriggerCount = 0;
o.currentGameHistoryHighScore = null !== (a = null === (r = hs.classScoreInfo) || void 0 === r ? void 0 : r.highScore) && void 0 !== a ? a : 0;
o.currentGameHasTriggeredDeath = !1;
o.currentGameQualifiedLoadLevel = "none";
this.saveStorageData();
}
};
t.prototype.onRewardLoad = function() {
this.resolveLoadedRewardLevel(this.currentLoadedRewardEcpm);
};
t.prototype.onRewardPlaybackStart = function() {
var e = this.fallbackRewardShowEcpm, t = hs.NativeAd.getReadyByAdType("reward");
if (this._currentRewardShowRecorded) ; else {
this.storageData.pendingRewardEscape && this.reconcilePendingRewardEscape("showFullSuccess");
t && this.onRewardShow(e);
}
};
t.prototype.recordRewardShowWithEcpm = function(e, t) {
this.storageData.pendingRewardEscape ? this.backfillRewardShowEcpm(e, t) : this.onRewardShow(e);
};
t.prototype.onRewardShow = function(e) {
var t = this.storageData;
t.totalRewardShowCount += 1;
Number.isFinite(e) && e > 0 && (t.lastRewardShowEcpm = e);
this._currentRewardShowRecorded = !0;
t.pendingRewardEscape = !0;
t.currentGameQualifiedLoadLevel = "none";
t.recentRewardResults.unshift(!1);
t.recentRewardResults = t.recentRewardResults.slice(0, this.RECENT_AD_NO_ESCAPE_COUNT);
this.saveStorageData();
};
t.prototype.backfillRewardShowEcpm = function(e) {
if (Number.isFinite(e) && !(e <= 0)) {
this.storageData.lastRewardShowEcpm = e;
this.saveStorageData();
}
};
t.prototype.onRewardComplete = function() {
var e = this.storageData;
if (e.pendingRewardEscape) {
this._currentRewardShowRecorded = !1;
e.pendingRewardEscape = !1;
e.recentRewardResults.length > 0 && (e.recentRewardResults[0] = !0);
this.saveStorageData();
}
};
t.prototype.onRewardEscape = function(e) {
void 0 === e && (e = "callback");
var t = this.storageData;
if (t.pendingRewardEscape) {
this._currentRewardShowRecorded = !1;
t.pendingRewardEscape = !1;
this.saveStorageData();
}
};
t.prototype.reconcilePendingRewardEscape = function(e) {
if (this.storageData.pendingRewardEscape) {
this.backfillRewardShowEcpm(this.fallbackRewardShowEcpm, e);
this.onRewardEscape(e);
}
};
t.prototype.onReviveSuccess = function() {
var e, t, r = this.storageData;
if (r.currentGameNum === (null !== (t = null === (e = hs.classGameInfo) || void 0 === e ? void 0 : e.gameNum) && void 0 !== t ? t : -1) && r.currentGameHasTriggeredDeath) {
r.currentGameTriggerCount += 1;
r.currentGameHasTriggeredDeath = !1;
r.currentGameQualifiedLoadLevel = "none";
this.saveStorageData();
}
};
t.prototype.resolveLoadedRewardLevel = function(e) {
var t, r, a = this.storageData;
if (a.currentGameNum === (null !== (r = null === (t = hs.classGameInfo) || void 0 === t ? void 0 : t.gameNum) && void 0 !== r ? r : -1)) {
var o = "none";
if (!Number.isFinite(e) || e <= 0) {
if (a.currentGameQualifiedLoadLevel !== o) {
a.currentGameQualifiedLoadLevel = o;
this.saveStorageData();
}
} else {
o = this.classifyLoadedRewardLevel(e);
if (a.currentGameQualifiedLoadLevel !== o) {
a.currentGameQualifiedLoadLevel = o;
this.saveStorageData();
}
}
}
};
t.prototype.tryResolveCurrentReadyReward = function() {
hs.NativeAd.getReadyByAdType("reward") && this.resolveLoadedRewardLevel(this.currentLoadedRewardEcpm);
};
t.prototype.onBottomOfferAlgo = function() {
if (this.shouldTriggerDeath()) {
hs.algorithmBottomSequenceInfo.setAlgorithmBottomList([ this.deathAlgorithm ]);
this.storageData.currentGameHasTriggeredDeath = !0;
this.saveStorageData();
}
};
t.prototype.onDisableBottomAlgo = function(e) {
var t, r, a = e.args, o = null == a ? void 0 : a[0];
if (null != o && o.callReturnValue && (null === (t = null == o ? void 0 : o.traitInst) || void 0 === t ? void 0 : t.traitName) === this.traitName) hs.algorithmBottomSequenceInfo.setIsTriggerBottomAlgo(!1); else if ((null === (r = null == o ? void 0 : o.traitInst) || void 0 === r ? void 0 : r.traitName) === this.traitName) {
var i = this.storageData;
if (i.currentGameHasTriggeredDeath) {
i.currentGameHasTriggeredDeath = !1;
this.saveStorageData();
}
}
};
t.prototype.shouldTriggerDeath = function() {
var e, t, r, a;
if (!this.canTrigger()) return !1;
var o = this.storageData, i = null !== (t = null === (e = hs.classGameInfo) || void 0 === e ? void 0 : e.gameNum) && void 0 !== t ? t : -1;
return o.currentGameNum === i && (!o.currentGameHasTriggeredDeath && (!((null !== (a = null === (r = hs.classScoreInfo) || void 0 === r ? void 0 : r.score) && void 0 !== a ? a : 0) < this.currentScoreThreshold) && !!this.isTargetAdReady()));
};
t.prototype.canTrigger = function() {
var e = this.storageData;
if (e.totalRewardShowCount < this.MIN_HISTORY_AD_WATCH_COUNT) return !1;
var t = e.recentRewardResults.slice(0, this.RECENT_AD_NO_ESCAPE_COUNT);
return !(t.length < this.RECENT_AD_NO_ESCAPE_COUNT) && t.every(function(e) {
return !0 === e;
});
};
t.prototype.isTargetAdReady = function() {
if (!hs.NativeAd.getReadyByAdType("reward")) {
var e = this.storageData;
if ("none" !== e.currentGameQualifiedLoadLevel) {
e.currentGameQualifiedLoadLevel = "none";
this.saveStorageData();
}
return !1;
}
var t = this.currentLoadedRewardEcpm;
this.resolveLoadedRewardLevel(t);
var r = this.storageData.currentGameQualifiedLoadLevel, a = this.TARGET_AD_LEVEL;
return "high" === a ? "high" === r : "medium" === a && ("high" === r || "medium" === r);
};
t.prototype.classifyLoadedRewardLevel = function(e) {
var t = this.storageData.lastRewardShowEcpm;
return !Number.isFinite(t) || t <= 0 ? "none" : e >= t * this.HIGH_PRICE_MULTIPLIER ? "high" : e >= t * this.MEDIUM_PRICE_MULTIPLIER ? "medium" : "none";
};
Object.defineProperty(t.prototype, "currentSpendTimeSeconds", {
get: function() {
var e, t;
return Math.floor((null !== (t = null === (e = hs.classTimerInfo) || void 0 === e ? void 0 : e.spendTime) && void 0 !== t ? t : 0) / 1e3);
},
enumerable: !1,
configurable: !0
});
Object.defineProperty(t.prototype, "currentLoadedRewardEcpm", {
get: function() {
return hs.NativeAd.callNativeGetMaxEcpmNumber("2") || 0;
},
enumerable: !1,
configurable: !0
});
t.prototype.normalizeGpAdEcpm = function(e) {
return !Number.isFinite(e) || e <= 0 ? 0 : 1e3 * e;
};
Object.defineProperty(t.prototype, "fallbackRewardShowEcpm", {
get: function() {
var e = this.normalizeGpAdEcpm(hs.ecpmInfo.getLastAdEcpm(hs.AdvertiseType.reward));
if (Number.isFinite(e) && e > 0) return e;
var t = this.currentLoadedRewardEcpm;
if (Number.isFinite(t) && t > 0) return t;
var r = this.storageData.lastRewardShowEcpm;
return Number.isFinite(r) && r > 0 ? r : 0;
},
enumerable: !1,
configurable: !0
});
Object.defineProperty(t.prototype, "storageData", {
get: function() {
if (this._storageData) return this._storageData;
var e = hs.storage.getItem("rewardHighValueAdHarvestTraitData", {
recentRewardResults: [],
totalRewardShowCount: 0,
lastRewardShowEcpm: 0,
pendingRewardEscape: !1,
currentGameNum: -1,
currentGameTriggerCount: 0,
currentGameHistoryHighScore: 0,
currentGameHasTriggeredDeath: !1,
currentGameQualifiedLoadLevel: "none"
});
this._storageData = {
recentRewardResults: Array.isArray(null == e ? void 0 : e.recentRewardResults) ? e.recentRewardResults : [],
totalRewardShowCount: Number(null == e ? void 0 : e.totalRewardShowCount) || 0,
lastRewardShowEcpm: Number(null == e ? void 0 : e.lastRewardShowEcpm) || 0,
pendingRewardEscape: !!(null == e ? void 0 : e.pendingRewardEscape),
currentGameNum: Number.isFinite(null == e ? void 0 : e.currentGameNum) ? e.currentGameNum : -1,
currentGameTriggerCount: Number(null == e ? void 0 : e.currentGameTriggerCount) || 0,
currentGameHistoryHighScore: Number(null == e ? void 0 : e.currentGameHistoryHighScore) || 0,
currentGameHasTriggeredDeath: !!(null == e ? void 0 : e.currentGameHasTriggeredDeath),
currentGameQualifiedLoadLevel: this.normalizeAdLevel(null == e ? void 0 : e.currentGameQualifiedLoadLevel)
};
return this._storageData;
},
enumerable: !1,
configurable: !0
});
t.prototype.saveStorageData = function() {
this._storageData && hs.storage.setItem("rewardHighValueAdHarvestTraitData", this._storageData);
};
t.prototype.normalizeAdLevel = function(e) {
return "high" === e || "medium" === e ? e : "none";
};
return i([ classId("RewardHighValueAdHarvestTrait"), classMethodWatch() ], t);
}(Trait);
r.RewardHighValueAdHarvestTrait = n;
cc._RF.pop();
}, {} ]
}, {}, [ "RewardHighValueAdHarvestTrait" ]);
//# sourceMappingURL=index.js.map
