window.__require = function t(e, r, o) {
function a(n, s) {
if (!r[n]) {
if (!e[n]) {
var l = n.split("/");
l = l[l.length - 1];
if (!e[l]) {
var u = "function" == typeof __require && __require;
if (!s && u) return u(l, !0);
if (i) return i(l, !0);
throw new Error("Cannot find module '" + n + "'");
}
n = l;
}
var h = r[n] = {
exports: {}
};
e[n][0].call(h.exports, function(t) {
return a(e[n][1][t] || t);
}, h, h.exports, t, e, r, o);
}
return r[n].exports;
}
for (var i = "function" == typeof __require && __require, n = 0; n < o.length; n++) a(o[n]);
return a;
}({
PlaceHabitAdaptPathInfo: [ function(t, e, r) {
"use strict";
cc._RF.push(e, "5273eifHHhKv4/WPIZFnJhl", "PlaceHabitAdaptPathInfo");
var o = this && this.__read || function(t, e) {
var r = "function" == typeof Symbol && t[Symbol.iterator];
if (!r) return t;
var o, a, i = r.call(t), n = [];
try {
for (;(void 0 === e || e-- > 0) && !(o = i.next()).done; ) n.push(o.value);
} catch (t) {
a = {
error: t
};
} finally {
try {
o && !o.done && (r = i.return) && r.call(i);
} finally {
if (a) throw a.error;
}
}
return n;
}, a = this && this.__values || function(t) {
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
r.placeHabitAdaptPathInfo = void 0;
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
this.B2_STAGE_CONFIG = [ {
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
this.B3_STAGE_CONFIG = [ {
maxRound: 5,
personalWeight: 0,
marketWeight: 1
}, {
maxRound: 15,
personalWeight: .3,
marketWeight: .7
}, {
maxRound: 30,
personalWeight: .6,
marketWeight: .4
}, {
maxRound: Infinity,
personalWeight: .9,
marketWeight: .1
} ];
this.MIN_PROBABILITY = .01;
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
return hs.storage.getItem("placeHabitAdapt_OrderCounts", [ 0, 0, 0, 0, 0, 0 ]);
},
enumerable: !1,
configurable: !0
});
Object.defineProperty(t.prototype, "totalRounds", {
get: function() {
return hs.storage.getItem("placeHabitAdapt_TotalRounds", 0);
},
enumerable: !1,
configurable: !0
});
Object.defineProperty(t.prototype, "validRoundsThisGame", {
get: function() {
return hs.storage.getItem("placeHabitAdapt_ValidRoundsThisGame", 0);
},
enumerable: !1,
configurable: !0
});
t.prototype.setValidRoundsThisGame = function(t) {
hs.storage.setItem("placeHabitAdapt_ValidRoundsThisGame", t);
};
t.prototype.incrementValidRoundsThisGame = function() {
this.setValidRoundsThisGame(this.validRoundsThisGame + 1);
};
Object.defineProperty(t.prototype, "personalRatios", {
get: function() {
var t = this, e = this.orderCounts, r = this.totalRounds;
if (0 === r) return [ 1 / 6, 1 / 6, 1 / 6, 1 / 6, 1 / 6, 1 / 6 ];
var o = e.map(function(t) {
return t / r;
}).map(function(e) {
return Math.max(e, t.MIN_PROBABILITY);
}), a = o.reduce(function(t, e) {
return t + e;
}, 0);
return o.map(function(t) {
return t / a;
});
},
enumerable: !1,
configurable: !0
});
t.prototype.recordOrder = function(t) {
if (!(t < 0 || t > 5)) {
var e = this.orderCounts;
e[t]++;
hs.storage.setItem("placeHabitAdapt_OrderCounts", e);
var r = this.totalRounds + 1;
hs.storage.setItem("placeHabitAdapt_TotalRounds", r);
}
};
t.prototype.resetGameCounters = function() {
this.setValidRoundsThisGame(0);
};
t.prototype.convertPositionsToOrder = function(t) {
if (3 !== t.length) return -1;
var e = o(t, 3), r = e[0], a = e[1], i = e[2];
return 0 === r && 1 === a && 2 === i ? 3 : 0 === r && 2 === a && 1 === i ? 5 : 1 === r && 0 === a && 2 === i ? 2 : 1 === r && 2 === a && 0 === i ? 0 : 2 === r && 0 === a && 1 === i ? 4 : 2 === r && 1 === a && 0 === i ? 1 : -1;
};
t.prototype.getWeightConfig = function(t, e) {
var r, o, i, n;
switch (t) {
case 1:
return {
personalWeight: 0,
marketWeight: 1
};

case 2:
try {
for (var s = a(this.B2_STAGE_CONFIG), l = s.next(); !l.done; l = s.next()) if (e <= (c = l.value).maxRound) return {
personalWeight: c.personalWeight,
marketWeight: c.marketWeight
};
} catch (t) {
r = {
error: t
};
} finally {
try {
l && !l.done && (o = s.return) && o.call(s);
} finally {
if (r) throw r.error;
}
}
return {
personalWeight: .9,
marketWeight: .1
};

case 3:
try {
for (var u = a(this.B3_STAGE_CONFIG), h = u.next(); !h.done; h = u.next()) {
var c;
if (e <= (c = h.value).maxRound) return {
personalWeight: c.personalWeight,
marketWeight: c.marketWeight
};
}
} catch (t) {
i = {
error: t
};
} finally {
try {
h && !h.done && (n = u.return) && n.call(u);
} finally {
if (i) throw i.error;
}
}
return {
personalWeight: .9,
marketWeight: .1
};

case 4:
var d = Math.min(.01 * (e - 10), .9), p = e <= 10 ? 0 : Math.max(0, d);
return {
personalWeight: p,
marketWeight: 1 - p
};

default:
return {
personalWeight: 0,
marketWeight: 1
};
}
};
t.prototype.calculateWeightedProbabilities = function(t, e) {
var r = this, o = this.getWeightConfig(t, e), a = o.personalWeight, i = o.marketWeight, n = this.personalRatios.map(function(t, e) {
return t * a + r.platformData[e] * i;
}), s = n.reduce(function(t, e) {
return t + e;
}, 0);
return s > 0 ? n.map(function(t) {
return t / s;
}) : this.platformData.slice();
};
t.prototype.getTop1PreferenceOrder = function(t, e) {
for (var r = this.calculateWeightedProbabilities(t, e), o = 0, a = r[0], i = 1; i < r.length; i++) if (r[i] > a) {
a = r[i];
o = i;
}
return o;
};
t.prototype.getOrderName = function(t) {
return [ "中右左", "右中左", "中左右", "左中右", "右左中", "左右中" ][t] || "未知";
};
return t;
}();
r.placeHabitAdaptPathInfo = new i();
cc._RF.pop();
}, {} ],
PlaceHabitAdaptPathTrait: [ function(t, e, r) {
"use strict";
cc._RF.push(e, "5d20bv3A4dEO7xgP2e2Qrk2", "PlaceHabitAdaptPathTrait");
var o, a = this && this.__extends || (o = function(t, e) {
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
var a, i = arguments.length, n = i < 3 ? e : null === o ? o = Object.getOwnPropertyDescriptor(e, r) : o;
if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) n = Reflect.decorate(t, e, r, o); else for (var s = t.length - 1; s >= 0; s--) (a = t[s]) && (n = (i < 3 ? a(n) : i > 3 ? a(e, r, n) : a(e, r)) || n);
return i > 3 && n && Object.defineProperty(e, r, n), n;
};
Object.defineProperty(r, "__esModule", {
value: !0
});
r.PlaceHabitAdaptPathTrait = void 0;
var n = t("../vo/PlaceHabitAdaptPathInfo"), s = [ "熵增", "消除" ], l = function(t) {
a(e, t);
function e() {
return null !== t && t.apply(this, arguments) || this;
}
Object.defineProperty(e.prototype, "onActiveCondition", {
get: function() {
return hs.gameInfo.gameMode === hs.GameMode.Class || hs.gameInfo.gameMode === hs.GameMode.Chapter;
},
enumerable: !1,
configurable: !0
});
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
currentRoundAlgoNames: [],
originalBlockIds: []
};
};
e.prototype.onActive = function(t) {
hs.tp.isAlgorithmProcessInfoTriggerAlgorithmResult(t) && this.captureSdkBlockOrderFromAlgorithmResult(t);
(hs.tp.isClassAlgorithmStrategy_BlocksPos_ProxyTriggerBlocksPosBase(t) || hs.tp.isClassAlgorithmStrategyIOS_BlocksPos_ProxyTriggerBlocksPosBase(t) || hs.tp.isChapterAlgorithmStrategy_BlocksPos_ProxyTriggerBlocksPosBase(t) || hs.tp.isChapterAlgorithmStrategyIOS_BlocksPos_ProxyTriggerBlocksPosBase(t)) && this.resetCurrentRoundOrder();
(hs.tp.isClassAlgorithmStrategy_BlocksPos_ProxyTriggerBlocksPosTrait(t) || hs.tp.isClassAlgorithmStrategyIOS_BlocksPos_ProxyTriggerBlocksPosTrait(t) || hs.tp.isChapterAlgorithmStrategy_BlocksPos_ProxyTriggerBlocksPosTrait(t) || hs.tp.isChapterAlgorithmStrategyIOS_BlocksPos_ProxyTriggerBlocksPosTrait(t)) && this.adjustBlocksPosition();
hs.tp.isAlgorithmStrategy_BlocksPos_ProxyOnTouchEnd(t) && this.collectPlacementOrder(t);
if (hs.tp.isClassGame_ProxyNewGameInit(t) || hs.tp.isChapterAlgorithmLifeCycle_GameStart_ProxyNewGameInit(t)) {
n.placeHabitAdaptPathInfo.resetGameCounters();
this.state.originalBlockIds = [];
this.getPlan();
}
};
e.prototype.resetCurrentRoundOrder = function() {
var t, e;
this.state.currentRoundOrder = [];
this.state.currentRoundPlacedCount = 0;
this.state.currentRoundAlgoNames = (null === (e = null === (t = hs.algorithmName) || void 0 === t ? void 0 : t.algoActualName) || void 0 === e ? void 0 : e.slice()) || [];
this.shouldCollect();
};
e.prototype.captureSdkBlockOrderFromAlgorithmResult = function(t) {
if (hs.gameInfo.gameMode === hs.GameMode.Class || hs.gameInfo.gameMode === hs.GameMode.Chapter) {
var e = t.args;
if (e && !(e.length < 1)) {
var r = e[0], o = null == r ? void 0 : r.blockIds;
o && 3 === o.length && (this.state.originalBlockIds = o.slice());
}
}
};
e.prototype.shouldCollect = function() {
var t = this.state.currentRoundAlgoNames;
return !(!t || 0 === t.length) && t.some(function(t) {
return s.some(function(e) {
return t.includes(e);
});
});
};
e.prototype.collectPlacementOrder = function(t) {
var e;
if (this.isGuidePassed() && this.shouldCollect()) {
var r = t.args[0], o = null === (e = null == r ? void 0 : r.state) || void 0 === e ? void 0 : e.touchIndex;
if (!(null == o || o < 0 || o > 2)) {
this.state.currentRoundOrder.push(o);
this.state.currentRoundPlacedCount++;
3 === this.state.currentRoundPlacedCount && this.recordRoundOrder();
}
}
};
e.prototype.recordRoundOrder = function() {
var t = this.state.currentRoundOrder, e = n.placeHabitAdaptPathInfo.convertPositionsToOrder(t);
if (-1 !== e) {
n.placeHabitAdaptPathInfo.recordOrder(e);
n.placeHabitAdaptPathInfo.incrementValidRoundsThisGame();
}
};
e.prototype.getPlan = function() {
var t;
return (null === (t = this.props) || void 0 === t ? void 0 : t.plan) || 0;
};
e.prototype.isGuidePassed = function() {
return hs.storage.getItem("classGuideStep", 0) >= 3;
};
e.prototype.getCurrentRound = function() {
return hs.gameInfo.gameMode === hs.GameMode.Class ? hs.classGameInfo.roundNum : hs.chapterGameInfo.roundNum;
};
e.prototype.adjustBlocksPosition = function() {
var t, e, r;
if (this.shouldBlockPlaceHabitAdaptPath()) ; else {
var o = this.getPlan();
if (0 !== o && this.isGuidePassed()) {
var a = this.state.originalBlockIds;
if (a && 3 === a.length) {
var i = this.getCurrentRound(), s = n.placeHabitAdaptPathInfo.getWeightConfig(o, i), l = (s.personalWeight, 
s.marketWeight, n.placeHabitAdaptPathInfo.calculateWeightedProbabilities(o, i), 
n.placeHabitAdaptPathInfo.getTop1PreferenceOrder(o, i)), u = hs.algorithmInfo.blockIdList.slice(), h = this.getRestorePermutationToOriginalOrder(u, a);
hs.algorithmStrategyBlocksPosInfo.adjustBlocksPosList(h);
hs.algorithmInfo.blockIdList.slice();
var c = this.getOrderFromPreference(l);
hs.algorithmStrategyBlocksPosInfo.adjustBlocksPosList(c);
hs.algorithmInfo.blockIdList.slice(), null === (t = hs.algorithmInfo.blockPosList) || void 0 === t || t.slice(), 
null === (r = null === (e = hs.algorithmName) || void 0 === e ? void 0 : e.algoActualName) || void 0 === r || r.slice();
}
}
}
};
e.prototype.getRestorePermutationToOriginalOrder = function(t, e) {
if (3 !== t.length || 3 !== e.length) return [ 0, 1, 2 ];
for (var r = new Set(), o = [], a = 0; a < 3; a++) {
for (var i = -1, n = 0; n < 3; n++) if (!r.has(n) && t[n] === e[a]) {
i = n;
break;
}
if (i < 0) return [ 0, 1, 2 ];
r.add(i);
o.push(i);
}
return o;
};
e.prototype.getOrderFromPreference = function(t) {
return ({
0: hs.operaPosMiddle,
1: hs.operaPosRight,
2: hs.operaPosRightLeft,
3: hs.operaPosLeft,
4: hs.operaPosMiddleLeft,
5: hs.operaPosLeftRight
}[t] || hs.operaPosLeft).slice();
};
e.prototype.shouldBlockPlaceHabitAdaptPath = function() {
return !1;
};
return i([ classId("PlaceHabitAdaptPathTrait"), classMethodWatch() ], e);
}(Trait);
r.PlaceHabitAdaptPathTrait = l;
cc._RF.pop();
}, {
"../vo/PlaceHabitAdaptPathInfo": "PlaceHabitAdaptPathInfo"
} ]
}, {}, [ "PlaceHabitAdaptPathTrait", "PlaceHabitAdaptPathInfo" ]);
//# sourceMappingURL=index.js.map
