window.__require = function e(t, r, o) {
function n(s, u) {
if (!r[s]) {
if (!t[s]) {
var l = s.split("/");
l = l[l.length - 1];
if (!t[l]) {
var a = "function" == typeof __require && __require;
if (!u && a) return a(l, !0);
if (i) return i(l, !0);
throw new Error("Cannot find module '" + s + "'");
}
s = l;
}
var h = r[s] = {
exports: {}
};
t[s][0].call(h.exports, function(e) {
return n(t[s][1][e] || e);
}, h, h.exports, e, t, r, o);
}
return r[s].exports;
}
for (var i = "function" == typeof __require && __require, s = 0; s < o.length; s++) n(o[s]);
return n;
}({
BlockPoolRoundAdjustV2Trait: [ function(e, t, r) {
"use strict";
cc._RF.push(t, "10c69/c/7VHr6bpkcjJGXva", "BlockPoolRoundAdjustV2Trait");
var o, n = this && this.__extends || (o = function(e, t) {
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
}), i = this && this.__decorate || function(e, t, r, o) {
var n, i = arguments.length, s = i < 3 ? t : null === o ? o = Object.getOwnPropertyDescriptor(t, r) : o;
if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) s = Reflect.decorate(e, t, r, o); else for (var u = e.length - 1; u >= 0; u--) (n = e[u]) && (s = (i < 3 ? n(s) : i > 3 ? n(t, r, s) : n(t, r)) || s);
return i > 3 && s && Object.defineProperty(t, r, s), s;
};
Object.defineProperty(r, "__esModule", {
value: !0
});
r.BlockPoolRoundAdjustV2Trait = void 0;
var s = [ 12, 13, 21, 23, 24, 37, 38, 39, 40, 41 ], u = [ 12, 14, 16, 18, 19, 21, 23, 24, 39, 40, 41 ], l = new Set(), a = function(e) {
n(t, e);
function t() {
return null !== e && e.apply(this, arguments) || this;
}
r = t;
t.prototype.data = function() {
return {
sessionTriggerCount: 0
};
};
Object.defineProperty(t.prototype, "onActiveCondition", {
get: function() {
return hs.gameInfo.gameMode === hs.GameMode.Class;
},
enumerable: !1,
configurable: !0
});
t.prototype.onActive = function(e) {
hs.tp.isClassGameOver_GameEnd_ProxyOnGameEnd(e) && hs.storage.setItem(r.SK_PREV_ROUND, hs.classGameInfo.roundNum);
hs.tp.isAlgorithmProcessInfoHandleArgs(e) && this.handleAlgorithmArgs(e);
};
t.prototype.requestYield = function() {
return !1;
};
t.prototype.handleAlgorithmArgs = function(e) {
var t;
if (this.requestYield()) return !1;
var r = this.getPlanConfig();
if (null == r) return !1;
if (hs.classGameInfo.roundNum > r.roundThreshold) return !1;
if (!this.checkExtraConditions(r)) return !1;
var o = e.args[1];
if (!this.isSupportedAlgorithm(o)) return !1;
var n = e.args[0], i = Array.from(new Set(r.blockPool));
n.filterBlocks = i;
n.filterWeightBlocks = i;
(null === (t = n.extra) || void 0 === t ? void 0 : t.isSortFillBlock) && (n.extra.isSortFillBlock = !1);
if (!this.isCurrentGameTriggered()) {
this.markCurrentGameTriggered();
this.incrementDailyTriggerCount();
this.state.sessionTriggerCount++;
}
return !0;
};
t.prototype.checkExtraConditions = function(e) {
var t, o;
return !(null != e.dailyGameLimit && this.getDailyTriggerCount() >= e.dailyGameLimit) && (!(null != e.sessionGameLimit && this.state.sessionTriggerCount >= e.sessionGameLimit) && (!(null != e.previousRoundThreshold && hs.storage.getItem(r.SK_PREV_ROUND, 0) > e.previousRoundThreshold) && !(null != e.previousScoreThreshold && (null !== (o = null === (t = hs.classScoreInfo) || void 0 === t ? void 0 : t.lastScore) && void 0 !== o ? o : 0) > e.previousScoreThreshold)));
};
t.prototype.isSupportedAlgorithm = function(e) {
return !this.isExcludedAlgorithm(e) && (!!hs.isValueInEnum(e, hs.OFFER_TYPE_SHANG) || e === hs.OFFER_TYPE.ALGO_SAME_BLOCK_SHANG || this.hasAlgorithmKeyword(e, "全组合填空消除_id70") || this.hasAlgorithmKeyword(e, "致死题") || this.hasAlgorithmKeyword(e, "困难难题") || this.hasAlgorithmKeyword(e, "填空消除") || this.hasAlgorithmKeyword(e, "随机无死"));
};
t.prototype.isExcludedAlgorithm = function(e) {
if (0 === l.size) {
l.add(hs.OFFER_TYPE.ZIMU_SHANGZENG);
l.add(hs.OFFER_TYPE.REVIVE);
l.add(hs.OFFER_TYPE.REVIVE_CLEAR);
l.add(hs.OFFER_TYPE.BEST_BLOCK_FOR_REVIVE);
l.add(hs.OFFER_TYPE.ALGO_REVIVE_BOUNDARY);
l.add(hs.OFFER_TYPE.REVIVE_PROTECT);
}
return l.has(e);
};
t.prototype.hasAlgorithmKeyword = function(e, t) {
var r, o;
return [ null === (r = hs.OFFER_TYPE_STRINGS) || void 0 === r ? void 0 : r[e], null === (o = hs.OFFER_TYPE_REAL_STRINGS) || void 0 === o ? void 0 : o[e] ].filter(function(e) {
return "string" == typeof e && e.length > 0;
}).some(function(e) {
return e.includes(t);
});
};
Object.defineProperty(t.prototype, "currentGameNum", {
get: function() {
var e, t;
return (null !== (t = null === (e = hs.classGameInfo) || void 0 === e ? void 0 : e.gameNum) && void 0 !== t ? t : 0) + 1;
},
enumerable: !1,
configurable: !0
});
t.prototype.isCurrentGameTriggered = function() {
return hs.storage.getItem(r.SK_TRIG_GAME_NUM, -1) === this.currentGameNum;
};
t.prototype.markCurrentGameTriggered = function() {
hs.storage.setItem(r.SK_TRIG_GAME_NUM, this.currentGameNum);
};
t.prototype.getDailyTriggerCount = function() {
var e = this.getTodayStr();
return hs.storage.getItem(r.SK_DAILY_DATE, "") !== e ? 0 : hs.storage.getItem(r.SK_DAILY_COUNT, 0);
};
t.prototype.incrementDailyTriggerCount = function() {
var e = this.getTodayStr(), t = 0;
hs.storage.getItem(r.SK_DAILY_DATE, "") === e && (t = hs.storage.getItem(r.SK_DAILY_COUNT, 0));
hs.storage.setItem(r.SK_DAILY_DATE, e);
hs.storage.setItem(r.SK_DAILY_COUNT, t + 1);
};
t.prototype.getTodayStr = function() {
var e = new Date();
return e.getFullYear() + "-" + (e.getMonth() + 1) + "-" + e.getDate();
};
t.prototype.getPlanConfig = function() {
switch (this.plan) {
case 1:
return {
blockPool: u,
roundThreshold: 5
};

case 2:
return {
blockPool: u,
roundThreshold: 10
};

case 3:
return {
blockPool: u,
roundThreshold: 15
};

case 4:
return {
blockPool: s,
roundThreshold: 10
};

case 5:
return {
blockPool: u,
roundThreshold: 10,
dailyGameLimit: 5
};

case 6:
return {
blockPool: u,
roundThreshold: 10,
dailyGameLimit: 6,
sessionGameLimit: 2
};

case 7:
return {
blockPool: u,
roundThreshold: 10,
previousRoundThreshold: 20
};

case 8:
return {
blockPool: u,
roundThreshold: 10,
previousScoreThreshold: 1e3
};

case 9:
return {
blockPool: u,
roundThreshold: 10,
previousScoreThreshold: 1500
};

case 10:
return {
blockPool: u,
roundThreshold: 10,
previousScoreThreshold: 2e3
};

default:
return null;
}
};
Object.defineProperty(t.prototype, "plan", {
get: function() {
var e, t;
return null !== (t = null === (e = this.props) || void 0 === e ? void 0 : e.plan) && void 0 !== t ? t : 0;
},
enumerable: !1,
configurable: !0
});
var r;
t.SK_PREV_ROUND = "BPRAv2_prevRound";
t.SK_DAILY_COUNT = "BPRAv2_dailyTrigCnt";
t.SK_DAILY_DATE = "BPRAv2_dailyDate";
t.SK_TRIG_GAME_NUM = "BPRAv2_trigGameNum";
return r = i([ classId("BlockPoolRoundAdjustV2Trait"), classMethodWatch() ], t);
}(Trait);
r.BlockPoolRoundAdjustV2Trait = a;
cc._RF.pop();
}, {} ]
}, {}, [ "BlockPoolRoundAdjustV2Trait" ]);
//# sourceMappingURL=index.js.map
