window.__require = function t(e, r, o) {
function n(s, a) {
if (!r[s]) {
if (!e[s]) {
var c = s.split("/");
c = c[c.length - 1];
if (!e[c]) {
var u = "function" == typeof __require && __require;
if (!a && u) return u(c, !0);
if (i) return i(c, !0);
throw new Error("Cannot find module '" + s + "'");
}
s = c;
}
var f = r[s] = {
exports: {}
};
e[s][0].call(f.exports, function(t) {
return n(e[s][1][t] || t);
}, f, f.exports, t, e, r, o);
}
return r[s].exports;
}
for (var i = "function" == typeof __require && __require, s = 0; s < o.length; s++) n(o[s]);
return n;
}({
SequencePredictDynamicDifficultyInfo: [ function(t, e, r) {
"use strict";
cc._RF.push(e, "160f6wJ6QdA8I7NRqz8ylAC", "SequencePredictDynamicDifficultyInfo");
var o = this && this.__read || function(t, e) {
var r = "function" == typeof Symbol && t[Symbol.iterator];
if (!r) return t;
var o, n, i = r.call(t), s = [];
try {
for (;(void 0 === e || e-- > 0) && !(o = i.next()).done; ) s.push(o.value);
} catch (t) {
n = {
error: t
};
} finally {
try {
o && !o.done && (r = i.return) && r.call(i);
} finally {
if (n) throw n.error;
}
}
return s;
}, n = this && this.__values || function(t) {
var e = "function" == typeof Symbol && Symbol.iterator, r = e && t[e], o = 0;
if (r) return r.call(t);
if (t && "number" == typeof t.length) return {
next: function() {
t && o >= t.length && (t = void 0);
return {
value: t && t[o++],
done: !t
};
}
};
throw new TypeError(e ? "Object is not iterable." : "Symbol.iterator is not defined.");
};
Object.defineProperty(r, "__esModule", {
value: !0
});
r.seqPredictDynDiffInfo = void 0;
var i = function() {
function t() {
this.PlacementOrder = {
CENTER_RIGHT_LEFT: 0,
RIGHT_CENTER_LEFT: 1,
CENTER_LEFT_RIGHT: 2,
LEFT_CENTER_RIGHT: 3,
RIGHT_LEFT_CENTER: 4,
LEFT_RIGHT_CENTER: 5
};
this.PLATFORM_DATA_GP = [ .331, .293, .133, .074, .097, .063 ];
this.PLATFORM_DATA_IOS = [ .348, .211, .153, .087, .111, .085 ];
this.STAGE_CONFIG = [ {
maxRound: 10,
personalWeight: 0,
marketWeight: 1
}, {
maxRound: 20,
personalWeight: .3,
marketWeight: .7
}, {
maxRound: 50,
personalWeight: .5,
marketWeight: .5
}, {
maxRound: 80,
personalWeight: .7,
marketWeight: .3
}, {
maxRound: 120,
personalWeight: .8,
marketWeight: .2
}, {
maxRound: Infinity,
personalWeight: .9,
marketWeight: .1
} ];
}
Object.defineProperty(t.prototype, "platformData", {
get: function() {
return this.PLATFORM_DATA_GP;
},
enumerable: !1,
configurable: !0
});
Object.defineProperty(t.prototype, "orderCounts", {
get: function() {
return hs.storage.getItem("seqPredictDynDiff_OrderCounts", [ 0, 0, 0, 0, 0, 0 ]);
},
enumerable: !1,
configurable: !0
});
Object.defineProperty(t.prototype, "totalRounds", {
get: function() {
return hs.storage.getItem("seqPredictDynDiff_TotalRounds", 0);
},
enumerable: !1,
configurable: !0
});
Object.defineProperty(t.prototype, "buryCountThisGame", {
get: function() {
return hs.storage.getItem("seqPredictDynDiff_BuryCountThisGame", 0);
},
enumerable: !1,
configurable: !0
});
t.prototype.setBuryCountThisGame = function(t) {
hs.storage.setItem("seqPredictDynDiff_BuryCountThisGame", t);
};
Object.defineProperty(t.prototype, "lastWasLeft", {
get: function() {
return hs.storage.getItem("seqPredictDynDiff_LastWasLeft", !1);
},
enumerable: !1,
configurable: !0
});
t.prototype.setLastWasLeft = function(t) {
hs.storage.setItem("seqPredictDynDiff_LastWasLeft", t);
};
Object.defineProperty(t.prototype, "personalRatios", {
get: function() {
var t = this.orderCounts, e = this.totalRounds;
return 0 === e ? [ 1 / 6, 1 / 6, 1 / 6, 1 / 6, 1 / 6, 1 / 6 ] : t.map(function(t) {
return t / e;
});
},
enumerable: !1,
configurable: !0
});
t.prototype.recordOrder = function(t) {
if (!(t < 0 || t > 5)) {
var e = this.orderCounts;
e[t]++;
hs.storage.setItem("seqPredictDynDiff_OrderCounts", e);
var r = this.totalRounds + 1;
hs.storage.setItem("seqPredictDynDiff_TotalRounds", r);
}
};
t.prototype.resetGameCounters = function() {
this.setBuryCountThisGame(0);
this.setLastWasLeft(!1);
};
t.prototype.resetStats = function() {
hs.storage.setItem("seqPredictDynDiff_OrderCounts", [ 0, 0, 0, 0, 0, 0 ]);
hs.storage.setItem("seqPredictDynDiff_TotalRounds", 0);
};
t.prototype.getOrderName = function(t) {
return this.getOrderNames()[t] || "未知";
};
t.prototype.getOrderNames = function() {
return [ "中右左", "右中左", "中左右", "左中右", "右左中", "左右中" ];
};
t.prototype.convertPositionsToOrder = function(t) {
if (3 !== t.length) return -1;
var e = o(t, 3), r = e[0], n = e[1], i = e[2];
return 0 === r && 1 === n && 2 === i ? 3 : 0 === r && 2 === n && 1 === i ? 5 : 1 === r && 0 === n && 2 === i ? 2 : 1 === r && 2 === n && 0 === i ? 0 : 2 === r && 0 === n && 1 === i ? 4 : 2 === r && 1 === n && 0 === i ? 1 : -1;
};
t.prototype.getStageConfig = function(t) {
var e, r;
try {
for (var o = n(this.STAGE_CONFIG), i = o.next(); !i.done; i = o.next()) {
var s = i.value;
if (t <= s.maxRound) return {
personalWeight: s.personalWeight,
marketWeight: s.marketWeight
};
}
} catch (t) {
e = {
error: t
};
} finally {
try {
i && !i.done && (r = o.return) && r.call(o);
} finally {
if (e) throw e.error;
}
}
return {
personalWeight: .9,
marketWeight: .1
};
};
t.prototype.calculateWeightedProbabilities = function(t) {
var e = this, r = this.getStageConfig(t), o = r.personalWeight, n = r.marketWeight, i = this.personalRatios.map(function(t, r) {
return t * o + e.platformData[r] * n;
}), s = i.reduce(function(t, e) {
return t + e;
}, 0);
return s > 0 ? i.map(function(t) {
return t / s;
}) : this.platformData.slice();
};
t.prototype.getTop1PreferenceOrder = function(t) {
for (var e = this.calculateWeightedProbabilities(t), r = 0, o = e[0], n = 1; n < e.length; n++) if (e[n] > o) {
o = e[n];
r = n;
}
return r;
};
t.prototype.getThirdPositionFromOrder = function(t) {
var e;
return null !== (e = {
0: 0,
1: 0,
2: 2,
3: 2,
4: 1,
5: 1
}[t]) && void 0 !== e ? e : 2;
};
return t;
}();
r.seqPredictDynDiffInfo = new i();
cc._RF.pop();
}, {} ],
SequencePredictDynamicDifficultyTrait: [ function(t, e, r) {
"use strict";
cc._RF.push(e, "3f9b1O0PItFCIA0PpAFPWm6", "SequencePredictDynamicDifficultyTrait");
var o, n = this && this.__extends || (o = function(t, e) {
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
}), i = this && this.__decorate || function(t, e, r, o) {
var n, i = arguments.length, s = i < 3 ? e : null === o ? o = Object.getOwnPropertyDescriptor(e, r) : o;
if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) s = Reflect.decorate(t, e, r, o); else for (var a = t.length - 1; a >= 0; a--) (n = t[a]) && (s = (i < 3 ? n(s) : i > 3 ? n(e, r, s) : n(e, r)) || s);
return i > 3 && s && Object.defineProperty(e, r, s), s;
}, s = this && this.__read || function(t, e) {
var r = "function" == typeof Symbol && t[Symbol.iterator];
if (!r) return t;
var o, n, i = r.call(t), s = [];
try {
for (;(void 0 === e || e-- > 0) && !(o = i.next()).done; ) s.push(o.value);
} catch (t) {
n = {
error: t
};
} finally {
try {
o && !o.done && (r = i.return) && r.call(i);
} finally {
if (n) throw n.error;
}
}
return s;
};
Object.defineProperty(r, "__esModule", {
value: !0
});
r.SequencePredictDynamicDifficultyTrait = void 0;
var a = t("../vo/SequencePredictDynamicDifficultyInfo"), c = new Set(Object.values(hs.OFFER_TYPE_SHANG).filter(function(t) {
return "number" == typeof t;
})), u = new Set(Object.values(hs.OFFER_TYPE_BLANK).filter(function(t) {
return "number" == typeof t;
})), f = function(t) {
n(e, t);
function e() {
return null !== t && t.apply(this, arguments) || this;
}
e.prototype.registerTraitEventsMethods = function() {
return [ {
className: "ClassGame_Proxy",
methodName: "newGameInit"
}, {
className: "ChapterAlgorithmLifeCycle_GameStart_Proxy",
methodName: "newGameInit"
} ];
};
e.prototype.data = function() {
return {
currentRoundOrder: [],
currentRoundPlacedCount: 0,
currentRoundAlgoId: -1
};
};
e.prototype.onActive = function(t) {
(hs.tp.isClassAlgorithmStrategy_BlocksPos_ProxyTriggerBlocksPosBase(t) || hs.tp.isChapterAlgorithmStrategyIOS_BlocksPos_ProxyTriggerBlocksPosBase(t) || hs.tp.isChapterAlgorithmStrategy_BlocksPos_ProxyTriggerBlocksPosBase(t) || hs.tp.isClassAlgorithmStrategyIOS_BlocksPos_ProxyTriggerBlocksPosBase(t)) && this.resetCurrentRoundOrder();
(hs.tp.isClassAlgorithmStrategy_BlocksPos_ProxyTriggerBlocksPosTrait(t) || hs.tp.isChapterAlgorithmStrategyIOS_BlocksPos_ProxyTriggerBlocksPosTrait(t) || hs.tp.isChapterAlgorithmStrategy_BlocksPos_ProxyTriggerBlocksPosTrait(t) || hs.tp.isClassAlgorithmStrategyIOS_BlocksPos_ProxyTriggerBlocksPosTrait(t)) && this.adjustBlocksPosition();
hs.tp.isAlgorithmStrategy_BlocksPos_ProxyOnTouchEnd(t) && this.collectPlacementOrder(t);
(hs.tp.isClassGame_ProxyNewGameInit(t) || hs.tp.isChapterAlgorithmLifeCycle_GameStart_ProxyNewGameInit(t)) && a.seqPredictDynDiffInfo.resetGameCounters();
};
e.prototype.resetCurrentRoundOrder = function() {
var t, e;
this.state.currentRoundOrder = [];
this.state.currentRoundPlacedCount = 0;
this.state.currentRoundAlgoId = null !== (e = null === (t = hs.algorithmName) || void 0 === t ? void 0 : t.algoExpectedId) && void 0 !== e ? e : -1;
};
e.prototype.isEntropyOrClearStrategy = function(t) {
return c.has(t) || u.has(t);
};
e.prototype.collectPlacementOrder = function(t) {
var e;
if (this.isGuidePassed()) {
var r = this.state.currentRoundAlgoId;
if (this.isEntropyOrClearStrategy(r)) {
var o = t.args[0], n = null === (e = null == o ? void 0 : o.state) || void 0 === e ? void 0 : e.touchIndex;
if (!(null == n || n < 0 || n > 2)) {
this.state.currentRoundOrder.push(n);
this.state.currentRoundPlacedCount++;
3 === this.state.currentRoundPlacedCount && this.recordRoundOrder();
}
}
}
};
e.prototype.recordRoundOrder = function() {
var t = this.state.currentRoundOrder, e = a.seqPredictDynDiffInfo.convertPositionsToOrder(t);
-1 !== e && a.seqPredictDynDiffInfo.recordOrder(e);
};
e.prototype.getPlan = function() {
var t;
return (null === (t = this.props) || void 0 === t ? void 0 : t.plan) || 0;
};
e.prototype.isGuidePassed = function() {
return hs.storage.getItem("classGuideStep", 0) >= 3;
};
e.prototype.isScoreThresholdMet = function() {
var t = hs.scoreInfo.score, e = hs.scoreInfo.highRecordScore;
return e <= 0 || t > .7 * e;
};
e.prototype.isDifficultAlgorithm = function() {
var t, e = null === (t = hs.algorithmName) || void 0 === t ? void 0 : t.algoActualChangeName;
return !(!e || !Array.isArray(e) || 0 === e.length) && e.some(function(t) {
return "string" == typeof t && t.includes("难题") && "难题降级策略" !== t;
});
};
e.prototype.getCurrentRound = function() {
return hs.gameInfo.gameMode === hs.GameMode.Class ? hs.classGameInfo.roundNum : hs.chapterGameInfo.roundNum;
};
e.prototype.adjustBlocksPosition = function() {
var t, e, r = this.getPlan();
if (0 !== r && this.isGuidePassed() && this.isDifficultAlgorithm() && this.isScoreThresholdMet()) {
var o = this.getCurrentRound(), n = null;
switch (r) {
case 1:
n = this.calculateAdaptiveOrder(o);
break;

case 2:
if (!(a.seqPredictDynDiffInfo.buryCountThisGame < 3)) return;
n = this.calculateAdaptiveOrder(o);
a.seqPredictDynDiffInfo.setBuryCountThisGame(a.seqPredictDynDiffInfo.buryCountThisGame + 1);
break;

case 3:
n = this.getOrderForHardBlockPosition(0);
break;

case 4:
n = this.getOrderForHardBlockPosition(2);
break;

case 5:
n = this.getOrderForHardBlockPosition(1);
break;

case 6:
if (a.seqPredictDynDiffInfo.lastWasLeft) {
n = this.getOrderForHardBlockPosition(2);
a.seqPredictDynDiffInfo.setLastWasLeft(!1);
} else {
n = this.getOrderForHardBlockPosition(0);
a.seqPredictDynDiffInfo.setLastWasLeft(!0);
}
break;

default:
return;
}
if (n) {
hs.algorithmInfo.blockIdList.slice(), null === (e = null === (t = hs.algorithmName) || void 0 === t ? void 0 : t.algoActualName) || void 0 === e || e.slice(), 
this.findHardBlockCurrentPosition();
hs.algorithmStrategyBlocksPosInfo.adjustBlocksPosList(n);
hs.algorithmInfo.blockIdList;
}
}
};
e.prototype.findHardBlockCurrentPosition = function() {
var t, e = null === (t = hs.algorithmInfo) || void 0 === t ? void 0 : t.blockIdList;
if (!e || 3 !== e.length) return -1;
var r = new hs.BinaryBoard();
r.convertToBinaryBoard(hs.boardInfo.faceBlocks);
r.record();
for (var o = 0; o < e.length; o++) if (!r.canPut(e[o])) return o;
return -1;
};
e.prototype.calculateAdaptiveOrder = function(t) {
var e = a.seqPredictDynDiffInfo.getTop1PreferenceOrder(t), r = a.seqPredictDynDiffInfo.getThirdPositionFromOrder(e), o = this.findHardBlockCurrentPosition();
return this.getSwapOrder(o, r);
};
e.prototype.getSwapOrder = function(t, e) {
var r;
if (-1 === t || t === e) return [ 0, 1, 2 ];
var o = [ 0, 1, 2 ];
r = s([ o[e], o[t] ], 2), o[t] = r[0], o[e] = r[1];
return o;
};
e.prototype.getOrderForHardBlockPosition = function(t) {
var e = this.findHardBlockCurrentPosition();
return this.getSwapOrder(e, t);
};
e.DIFFICULT_TYPES = new Set(Object.values(hs.OFFER_TYPE_DIFFICULTY).filter(function(t) {
return "number" == typeof t;
}));
return i([ classId("SequencePredictDynamicDifficultyTrait") ], e);
}(Trait);
r.SequencePredictDynamicDifficultyTrait = f;
cc._RF.pop();
}, {
"../vo/SequencePredictDynamicDifficultyInfo": "SequencePredictDynamicDifficultyInfo"
} ]
}, {}, [ "SequencePredictDynamicDifficultyTrait", "SequencePredictDynamicDifficultyInfo" ]);
//# sourceMappingURL=index.js.map
