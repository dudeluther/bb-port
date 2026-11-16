window.__require = function t(e, o, r) {
function i(s, a) {
if (!o[s]) {
if (!e[s]) {
var c = s.split("/");
c = c[c.length - 1];
if (!e[c]) {
var l = "function" == typeof __require && __require;
if (!a && l) return l(c, !0);
if (n) return n(c, !0);
throw new Error("Cannot find module '" + s + "'");
}
s = c;
}
var u = o[s] = {
exports: {}
};
e[s][0].call(u.exports, function(t) {
return i(e[s][1][t] || t);
}, u, u.exports, t, e, o, r);
}
return o[s].exports;
}
for (var n = "function" == typeof __require && __require, s = 0; s < r.length; s++) i(r[s]);
return i;
}({
BlockPoolStrategyExperimentTrait: [ function(t, e, o) {
"use strict";
cc._RF.push(e, "f59a4MmnRRF27OpMYOtwgwn", "BlockPoolStrategyExperimentTrait");
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
}), n = this && this.__decorate || function(t, e, o, r) {
var i, n = arguments.length, s = n < 3 ? e : null === r ? r = Object.getOwnPropertyDescriptor(e, o) : r;
if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) s = Reflect.decorate(t, e, o, r); else for (var a = t.length - 1; a >= 0; a--) (i = t[a]) && (s = (n < 3 ? i(s) : n > 3 ? i(e, o, s) : i(e, o)) || s);
return n > 3 && s && Object.defineProperty(e, o, s), s;
};
Object.defineProperty(o, "__esModule", {
value: !0
});
o.BlockPoolStrategyExperimentTrait = void 0;
var s = [ 12, 13, 21, 23, 24, 37, 38, 39, 40, 41 ], a = [ 11, 12, 13, 21, 22, 23, 24, 39, 40, 41 ], c = [ 12, 14, 16, 18, 19, 21, 23, 24, 39, 40, 41 ], l = new Set(), u = function(t) {
i(e, t);
function e() {
return null !== t && t.apply(this, arguments) || this;
}
o = e;
e.prototype.data = function() {
return {
historyHighScoreAtGameStart: 0
};
};
e.prototype.onCreate = function() {
this.setState({
historyHighScoreAtGameStart: hs.storage.getItem(o.STORAGE_KEY_HISTORY_HIGH_SCORE, 0)
});
};
e.prototype.setStoredHistoryHighScore = function(t) {
hs.storage.setItem(o.STORAGE_KEY_HISTORY_HIGH_SCORE, t);
};
Object.defineProperty(e.prototype, "onActiveCondition", {
get: function() {
return !!this.isCanActive() && hs.gameInfo.gameMode === hs.GameMode.Class;
},
enumerable: !1,
configurable: !0
});
e.prototype.isCanActive = function() {
return !0;
};
e.prototype.onActive = function(t) {
var e;
if (hs.tp.isClassGame_ProxyNewGameInit(t)) {
var o = null !== (e = hs.scoreInfo.highScore) && void 0 !== e ? e : 0;
this.setState({
historyHighScoreAtGameStart: o
});
this.setStoredHistoryHighScore(o);
}
hs.tp.isClassBlocksProducer_Round_ProxyOnAlgorithmStrategyRequest(t) && this.updateTotalRoundCount();
hs.tp.isAlgorithmProcessInfoHandleArgs(t) && this.handleAlgorithmArgs(t) && (t.returnState = !0);
};
e.prototype.updateTotalRoundCount = function() {
var t = this.getTotalRoundCount() + 1;
hs.storage.setItem(o.STORAGE_KEY_TOTAL_ROUND, t);
};
e.prototype.getTotalRoundCount = function() {
return hs.storage.getItem(o.STORAGE_KEY_TOTAL_ROUND, 0);
};
e.prototype.handleAlgorithmArgs = function(t) {
var e;
if (this.requestYield()) return !1;
var o = this.getPlanConfig();
if (null == o) return !1;
var r = t.args[1];
if (!this.isConditionMatched(o)) return !1;
if (!this.isSupportedAlgorithm(r)) return !1;
var i = t.args[0], n = Array.from(new Set(o.blockPool));
i.filterBlocks = n;
i.filterWeightBlocks = n;
(null === (e = i.extra) || void 0 === e ? void 0 : e.isSortFillBlock) && (i.extra.isSortFillBlock = !1);
return !0;
};
e.prototype.requestYield = function() {
return !1;
};
e.prototype.isConditionMatched = function(t) {
switch (t.conditionType) {
case "gameNum":
return this.gameNum <= t.threshold;

case "historyHighScore":
return this.state.historyHighScoreAtGameStart <= t.threshold;

case "activeDays":
return this.activeDays <= t.threshold;

case "totalRoundCount":
return this.getTotalRoundCount() <= t.threshold;

default:
return !1;
}
};
e.prototype.isSupportedAlgorithm = function(t) {
return !this.isExcludedAlgorithm(t) && (!!hs.isValueInEnum(t, hs.OFFER_TYPE_SHANG) || this.hasAlgorithmKeyword(t, "全组合填空消除_id70") || this.hasAlgorithmKeyword(t, "致死题") || this.hasAlgorithmKeyword(t, "困难难题") || this.hasAlgorithmKeyword(t, "填空消除") || this.hasAlgorithmKeyword(t, "随机无死"));
};
e.prototype.isExcludedAlgorithm = function(t) {
if (0 === l.size) {
l.add(hs.OFFER_TYPE.ZIMU_SHANGZENG);
l.add(hs.OFFER_TYPE.REVIVE);
l.add(hs.OFFER_TYPE.REVIVE_CLEAR);
l.add(hs.OFFER_TYPE.BEST_BLOCK_FOR_REVIVE);
l.add(hs.OFFER_TYPE.ALGO_REVIVE_BOUNDARY);
l.add(hs.OFFER_TYPE.REVIVE_PROTECT);
}
return l.has(t);
};
e.prototype.hasAlgorithmKeyword = function(t, e) {
var o, r;
return [ null === (o = hs.OFFER_TYPE_STRINGS) || void 0 === o ? void 0 : o[t], null === (r = hs.OFFER_TYPE_REAL_STRINGS) || void 0 === r ? void 0 : r[t] ].filter(function(t) {
return "string" == typeof t && t.length > 0;
}).some(function(t) {
return t.includes(e);
});
};
e.prototype.getPlanConfig = function() {
switch (this.plan) {
case 1:
return {
blockPool: s,
conditionType: "gameNum",
threshold: 3,
description: "块池1 + 对局数<=3"
};

case 2:
return {
blockPool: s,
conditionType: "gameNum",
threshold: 5,
description: "块池1 + 对局数<=5"
};

case 3:
return {
blockPool: s,
conditionType: "gameNum",
threshold: 7,
description: "块池1 + 对局数<=7"
};

case 4:
return {
blockPool: s,
conditionType: "historyHighScore",
threshold: 4e3,
description: "块池1 + 历史最高分<=4000"
};

case 5:
return {
blockPool: s,
conditionType: "historyHighScore",
threshold: 6e3,
description: "块池1 + 历史最高分<=6000"
};

case 6:
return {
blockPool: s,
conditionType: "activeDays",
threshold: 1,
description: "块池1 + 活跃天数<=1"
};

case 7:
return {
blockPool: s,
conditionType: "activeDays",
threshold: 2,
description: "块池1 + 活跃天数<=2"
};

case 8:
return {
blockPool: a,
conditionType: "historyHighScore",
threshold: 6e3,
description: "块池2 + 历史最高分<=6000"
};

case 9:
return {
blockPool: c,
conditionType: "historyHighScore",
threshold: 6e3,
description: "块池3 + 历史最高分<=6000"
};

case 10:
return {
blockPool: s,
conditionType: "totalRoundCount",
threshold: 60,
description: "块池1 + 总出块轮数<=60"
};

case 11:
return {
blockPool: s,
conditionType: "totalRoundCount",
threshold: 100,
description: "块池1 + 总出块轮数<=100"
};

default:
return null;
}
};
Object.defineProperty(e.prototype, "plan", {
get: function() {
var t, e;
return null !== (e = null === (t = this.props) || void 0 === t ? void 0 : t.plan) && void 0 !== e ? e : 0;
},
enumerable: !1,
configurable: !0
});
Object.defineProperty(e.prototype, "gameNum", {
get: function() {
var t, e;
return (null !== (e = null === (t = hs.classGameInfo) || void 0 === t ? void 0 : t.gameNum) && void 0 !== e ? e : 0) + 1;
},
enumerable: !1,
configurable: !0
});
Object.defineProperty(e.prototype, "activeDays", {
get: function() {
return Array.isArray(hs.gameInfo.activeDays) ? hs.gameInfo.activeDays.length : 0;
},
enumerable: !1,
configurable: !0
});
var o;
e.STORAGE_KEY_TOTAL_ROUND = "BlockPoolStrategyExperiment_totalRoundCount";
e.STORAGE_KEY_HISTORY_HIGH_SCORE = "BlockPoolStrategyExperiment_historyHighScoreAtGameStart";
return o = n([ classId("BlockPoolStrategyExperimentTrait"), classMethodWatch() ], e);
}(Trait);
o.BlockPoolStrategyExperimentTrait = u;
cc._RF.pop();
}, {} ]
}, {}, [ "BlockPoolStrategyExperimentTrait" ]);
//# sourceMappingURL=index.js.map
