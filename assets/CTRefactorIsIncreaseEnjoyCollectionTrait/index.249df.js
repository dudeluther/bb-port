window.__require = function t(e, r, o) {
function n(a, l) {
if (!r[a]) {
if (!e[a]) {
var c = a.split("/");
c = c[c.length - 1];
if (!e[c]) {
var s = "function" == typeof __require && __require;
if (!l && s) return s(c, !0);
if (i) return i(c, !0);
throw new Error("Cannot find module '" + a + "'");
}
a = c;
}
var f = r[a] = {
exports: {}
};
e[a][0].call(f.exports, function(t) {
return n(e[a][1][t] || t);
}, f, f.exports, t, e, r, o);
}
return r[a].exports;
}
for (var i = "function" == typeof __require && __require, a = 0; a < o.length; a++) n(o[a]);
return n;
}({
CTRefactorIsIncreaseEnjoyCollectionTrait: [ function(t, e, r) {
"use strict";
cc._RF.push(e, "77eabmVeFtKuqdvYAK1sxkw", "CTRefactorIsIncreaseEnjoyCollectionTrait");
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
var n, i = arguments.length, a = i < 3 ? e : null === o ? o = Object.getOwnPropertyDescriptor(e, r) : o;
if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) a = Reflect.decorate(t, e, r, o); else for (var l = t.length - 1; l >= 0; l--) (n = t[l]) && (a = (i < 3 ? n(a) : i > 3 ? n(e, r, a) : n(e, r)) || a);
return i > 3 && a && Object.defineProperty(e, r, a), a;
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
r.CTRefactorIsIncreaseEnjoyCollectionTrait = void 0;
var l = function(t) {
n(e, t);
function e() {
var e = null !== t && t.apply(this, arguments) || this;
e.DISABLE_FOLLOWING_POST_TAGS = [ "updateFirstBottomOfferList", "updateBottomOfferStartList" ];
return e;
}
e.prototype.onAlgorithmStrategyPositionAdjust = function() {
if (hs.algorithmName.algoActualId == hs.OFFER_TYPE.ELIMINTE_PLEASURE) return {
data: hs.AlgorithmStrategyPositionType.LEFT,
returnState: !0
};
};
e.prototype.onAlgorithmStrategyCollectionAdjust = function() {
var t, e;
if (hs.algorithmName.algoActualId == hs.OFFER_TYPE.ELIMINTE_PLEASURE) {
var r = 0, o = 0, n = hs.chapterConfigInfo.chapterDatasCfg[hs.chapterGameInfo.chapterNum].Condition.RequiredCollections, i = hs.chapterCollectInfo.collectRemainCollectItems;
try {
for (var l = a(n), c = l.next(); !c.done; c = l.next()) {
var s = c.value, f = i[s.Key];
if (0 != f) {
if (o < f) {
r = s.Key;
o = f;
}
0;
} else 0;
}
} catch (e) {
t = {
error: e
};
} finally {
try {
c && !c.done && (e = l.return) && e.call(l);
} finally {
if (t) throw t.error;
}
}
if (r < 100) return;
var u = [], p = !1, h = hs.chapterAlgorithmInfo.blockIdList;
if (!Array.isArray(h)) return;
for (var g = 0; g < h.length; g++) {
var v = h[g];
if (hs.algorithmName.algoActualName[g] == hs.OFFER_TYPE_STRINGS[hs.OFFER_TYPE.ELIMINTE_PLEASURE]) {
var y = hs.AlgorithmPosType[v];
if (y) {
for (var d = {}, E = 0; E < y.length; E++) d[E] = {
Key: r,
pos: E
};
p = !0;
u.push(d);
} else u.push({});
} else u.push({});
}
if (p) {
var T = [].concat(u), A = TRAIT("CTRefactorIsOpenCollectLevelOfferNormalAndGemTrait");
(null == A ? void 0 : A.active) && A.recordIncreaseEnjoyCollection();
return {
data: T,
disableTraits: [ "CTRefactorTravelHappyOverTrait", "CTRefactorCollectIncreaseTrait", "CTRefactorMultiElementCollectTrait", "CTRefactorGemReturnFullGemTrait", "CTRefactorMultiElementCollect_TravelAlgorithmLayerTrait", "CTRefactorMultiElementCollect_TravelConfigLayerTrait", "CTRefactorCollectionOriginTrait" ]
};
}
}
};
e.prototype.isOriginRevive = function() {
var t = hs.algorithmStrategyLevelRefactoredInfo.algorithmSourceLevel1;
return t === hs.ChapterAlgorithmSourceType.TravelRevive || t === hs.ChapterAlgorithmSourceType.TravelReviveTrait;
};
e.prototype.isHappyOver = function() {
return "CTRefactorTravelHappyOverTrait" === hs.algorithmStrategyLevelRefactoredInfo.algorithmSourceLevel2;
};
e.prototype.isSpecialAlgo = function(t) {
if (t.algorithmList.length > 0) {
var e = t.algorithmList[t.algorithmList.length - 1].algorithmId;
if (t.sdk.actualAlgorithmId == hs.OFFER_TYPE_DIFFICULTY.KUN_NAN_TI || t.sdk.actualAlgorithmId == hs.OFFER_TYPE_BLANK.ALGO_FILL_MORE_AREA || "fallback" == t.sdk.algorithmListSource && hs.isValueInEnum(e, hs.OFFER_TYPE_DIFFICULTY)) return !0;
}
return !1;
};
e.prototype.isScoreLevel = function() {
return 0 == hs.chapterConfigInfo.chapterDatasCfg[hs.chapterGameInfo.chapterNum].Condition.Way;
};
e.prototype.isIngoreAlgo = function(t) {
var e;
return !![ hs.OFFER_TYPE.KUN_NAN_TI ].includes(hs.algorithmName.algoActualId) || !(null === (e = null == t ? void 0 : t.algorithmList) || void 0 === e || !e.some(function(t) {
return t.algorithmId == hs.OFFER_TYPE_BASE.ELIMINTE_PLEASURE;
}));
};
e.prototype.isFindPileUpPos = function() {
return -1 == this.findPileUpPos();
};
e.prototype.onPostprocessConditionContext = function(t) {
var e = this;
this._lastPostprocessFlow = t;
return buildLazyConditionContext({
handleNewBottomAlgo: function() {
return ASContext(e.handleNewBottomAlgo(), "是否需要处理新底算法");
},
isOriginRevive: function() {
return ASContext(e.isOriginRevive(t), "是否来自复活算法");
},
isHappyOver: function() {
return ASContext(e.isHappyOver(t), "是否来自消除爽算法");
},
isSpecialAlgo: function() {
return ASContext(e.isSpecialAlgo(t), "特殊题型不触发");
},
isScoreLevel: function() {
return ASContext(e.isScoreLevel(t), "是否是分数关");
},
isIngoreAlgo: function() {
return ASContext(e.isIngoreAlgo(t), " 是否是忽略的算法");
},
isFindPileUpPos: function() {
return ASContext(e.isFindPileUpPos(t), " 是否可以凑堆的点");
}
});
};
e.prototype.resetExpectedAlgoIdIfNeeded = function() {
as.AlgorithmStrategyAlgoExpectedIdPatch.patch(hs.OFFER_TYPE_BASE.NONE, this);
as.AlgorithmStrategyAlgoExpectedIdPatch.patch(hs.OFFER_TYPE_BASE.ELIMINTE_PLEASURE, this);
};
e.prototype.onPostprocessConditions = function() {
return [ {
conditions: {
and: [ {
fact: "handleNewBottomAlgo",
operator: "=",
value: !0
}, {
fact: "isOriginRevive",
operator: "=",
value: !1
}, {
fact: "isHappyOver",
operator: "=",
value: !1
}, {
fact: "isSpecialAlgo",
operator: "=",
value: !1
}, {
fact: "isScoreLevel",
operator: "=",
value: !1
}, {
fact: "isIngoreAlgo",
operator: "=",
value: !1
}, {
fact: "isFindPileUpPos",
operator: "=",
value: !1
} ]
},
event: {
type: "resetExpectedAlgoIdIfNeeded"
},
flow: "flow1"
} ];
};
e.prototype.onPostprocessActions = function() {
return {
flow1: [ {
operator: "AlgorithmStrategyAlgorithmListOperator",
type: "push",
args: [ hs.OFFER_TYPE_BASE.ELIMINTE_PLEASURE ]
}, {
operator: "AlgorithmStrategyReturnOperator",
type: "returnState",
args: [ as.AlgorithmStrategyReturnStateProcessType.POST_SDK_REQUEST_SUCCESS ]
} ]
};
};
e.prototype.canCollect = function(t) {
return t > 100 && t < 1e3;
};
e.prototype.findPileUpPos = function() {
for (var t = hs.boardInfo.faceBlocks, e = [ 0, 0, 0, 0, 0, 0, 0, 0 ], r = [ 0, 0, 0, 0, 0, 0, 0, 0 ], o = {}, n = 0; n < 8; n++) {
for (var i = -1, a = 0; a < 8; a++) if (t[n][a] < 0) {
if (-1 != i) {
i = -1;
break;
}
i = a;
} else this.canCollect(t[n][a]) && e[n]++;
-1 != i && e[n] >= 3 && (o[f = 8 * n + i] ? o[f] += e[n] : o[f] = e[n]);
}
for (a = 0; a < 8; a++) {
var l = -1;
for (n = 0; n < 8; n++) if (t[n][a] < 0) {
if (-1 != l) {
l = -1;
break;
}
l = n;
} else this.canCollect(t[n][a]) && r[a]++;
-1 != l && r[a] >= 3 && (o[f = 8 * l + a] ? o[f] += r[a] : o[f] = r[a]);
}
var c = -Infinity, s = -1;
for (var f in o) if (o[f] > c) {
c = o[f];
s = parseInt(f, 10);
} else o[f] == c && Math.random() > .5 && (s = parseInt(f, 10));
return s;
};
e.prototype.handleNewBottomAlgo = function() {
return !0;
};
e.prototype.checkAlgorithm = function() {};
return i([ classId("CTRefactorIsIncreaseEnjoyCollectionTrait"), classMethodWatch() ], e);
}(Trait);
r.CTRefactorIsIncreaseEnjoyCollectionTrait = l;
cc._RF.pop();
}, {} ]
}, {}, [ "CTRefactorIsIncreaseEnjoyCollectionTrait" ]);
//# sourceMappingURL=index.js.map
