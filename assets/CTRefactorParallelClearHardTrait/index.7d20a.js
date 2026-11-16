window.__require = function t(e, r, a) {
function o(l, n) {
if (!r[l]) {
if (!e[l]) {
var s = l.split("/");
s = s[s.length - 1];
if (!e[s]) {
var p = "function" == typeof __require && __require;
if (!n && p) return p(s, !0);
if (i) return i(s, !0);
throw new Error("Cannot find module '" + l + "'");
}
l = s;
}
var g = r[l] = {
exports: {}
};
e[l][0].call(g.exports, function(t) {
return o(e[l][1][t] || t);
}, g, g.exports, t, e, r, a);
}
return r[l].exports;
}
for (var i = "function" == typeof __require && __require, l = 0; l < a.length; l++) o(a[l]);
return o;
}({
CTRefactorParallelClearHardTrait: [ function(t, e, r) {
"use strict";
cc._RF.push(e, "237e5ly0E9Jj4dCe0eZUJ1Q", "CTRefactorParallelClearHardTrait");
var a, o = this && this.__extends || (a = function(t, e) {
return (a = Object.setPrototypeOf || {
__proto__: []
} instanceof Array && function(t, e) {
t.__proto__ = e;
} || function(t, e) {
for (var r in e) Object.prototype.hasOwnProperty.call(e, r) && (t[r] = e[r]);
})(t, e);
}, function(t, e) {
a(t, e);
function r() {
this.constructor = t;
}
t.prototype = null === e ? Object.create(e) : (r.prototype = e.prototype, new r());
}), i = this && this.__decorate || function(t, e, r, a) {
var o, i = arguments.length, l = i < 3 ? e : null === a ? a = Object.getOwnPropertyDescriptor(e, r) : a;
if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) l = Reflect.decorate(t, e, r, a); else for (var n = t.length - 1; n >= 0; n--) (o = t[n]) && (l = (i < 3 ? o(l) : i > 3 ? o(e, r, l) : o(e, r)) || l);
return i > 3 && l && Object.defineProperty(e, r, l), l;
};
Object.defineProperty(r, "__esModule", {
value: !0
});
r.CTRefactorParallelClearHardTrait = void 0;
var l = function(t) {
o(e, t);
function e() {
var e = null !== t && t.apply(this, arguments) || this;
e.currentAlgoId = hs.OFFER_TYPE.HPARALLELCLEAR_HARD;
return e;
}
r = e;
e.prototype.getAvoidAlgoList = function(t) {
return t;
};
e.prototype.shouldBlockParallelClearHard = function() {
return !1;
};
e.prototype.shouldReplaceAlgorithm = function(t) {
return t;
};
e.prototype.isToday = function(t) {
var e = new Date(t), r = new Date();
return e.getDate() == r.getDate() && e.getMonth() == r.getMonth() && e.getFullYear() == r.getFullYear();
};
e.prototype.curGameActive = function() {
r.TAG;
var t = hs.storage.getItem("classGameNum", 0), e = hs.storage.getItem("parallelClearHardObj", null);
return t < 2 || (!e.todayPlayed || Math.random() < this.replaceRatio);
};
e.prototype.isHardOffer = function() {
r.TAG;
var t = hs.storage.getItem("parallelClearHardObj", null), e = this.algoNameList, a = hs.OFFER_TYPE_STRINGS[hs.algorithmName.algoExpectedId];
if (e.includes(a) && !t.firstChanged) return !0;
var o = hs.algorithmName.algoActualChangeName[0];
return !(!e.includes(o) || t.firstChanged);
};
e.prototype.isHardDown = function() {
r.TAG;
var t = hs.OFFER_TYPE_STRINGS[hs.algorithmName.algoExpectedId];
if (3 != hs.algorithmName.algoActualChangeName.length) return !1;
var e = hs.algorithmName.algoActualChangeName[0];
if (e.includes(hs.ALGO_NAME_TYPE.NAME_REVIVE)) return !1;
var a = this.algoNameList;
return a.includes(t) && !a.includes(e);
};
Object.defineProperty(e.prototype, "failScoreUpperLimit", {
get: function() {
return hs.traitConfigSafePropsInfo.getSafePropValueByKey("ParallelClearHardTrait", "failScoreUpperLimit", this.props, 3e4);
},
enumerable: !1,
configurable: !0
});
Object.defineProperty(e.prototype, "failUsageLimit", {
get: function() {
return hs.traitConfigSafePropsInfo.getSafePropValueByKey("ParallelClearHardTrait", "failUsageLimit", this.props, 5);
},
enumerable: !1,
configurable: !0
});
Object.defineProperty(e.prototype, "failReplaceRatio", {
get: function() {
return hs.traitConfigSafePropsInfo.getSafePropValueByKey("ParallelClearHardTrait", "failReplaceRatio", this.props, 1);
},
enumerable: !1,
configurable: !0
});
Object.defineProperty(e.prototype, "replaceRatio", {
get: function() {
return hs.traitConfigSafePropsInfo.getSafePropValueByKey("ParallelClearHardTrait", "replaceRatio", this.props, .5);
},
enumerable: !1,
configurable: !0
});
Object.defineProperty(e.prototype, "algoNameList", {
get: function() {
return hs.traitConfigSafePropsInfo.getSafePropValueByKey("ParallelClearHardTrait", "algoNameList", this.props, [ "困难难题", "死亡难题", "直觉难题", "简单直觉题" ]);
},
enumerable: !1,
configurable: !0
});
e.prototype.evaluateTriggerBottomOffer = function() {
r.TAG;
if (this.shouldBlockParallelClearHard()) return {
algorithmList: []
};
var t = hs.storage.getItem("parallelClearHardObj", null), e = hs.storage.getItem("classScore", 0);
if (hs.algorithmName.algoActualChangeName[0] == hs.ALGO_NAME_TYPE.NAME_DIFFICULTY_GAOHUIBAO && e <= 3e3) return {
algorithmList: []
};
if (!t.firstChanged && this.curGameActive() && this.isHardOffer()) {
var a = this.shouldReplaceAlgorithm(hs.OFFER_TYPE.HPARALLELCLEAR_HARD);
this.currentAlgoId = a;
return {
algorithmList: [ a ]
};
}
if (e > this.failScoreUpperLimit) return {
algorithmList: []
};
if (!t || t.downChanged >= this.failUsageLimit) return {
algorithmList: []
};
if (!this.isHardDown()) return {
algorithmList: []
};
if (Math.random() < this.failReplaceRatio) {
a = this.shouldReplaceAlgorithm(hs.OFFER_TYPE.HPARALLELCLEAR_HARD);
this.currentAlgoId = a;
return {
algorithmList: [ a ]
};
}
return {
algorithmList: []
};
};
e.prototype.isClassGameDataClear_Disk_ProxyResetAlgorithmData = function() {
var t = hs.storage.getItem("parallelClearHardObj", null), e = !1;
t && t.startTime && this.isToday(t.startTime) && (e = t.todayPlayed);
hs.storage.setItem("parallelClearHardObj", {
startTime: new Date().getTime(),
downChanged: 0,
todayPlayed: e,
firstChanged: !1
});
};
e.prototype.onAlgorithmStrategyGameInit = function(t) {
if ("preprocessing_OtherTrait" === t) {
var e = hs.storage.getItem("parallelClearHardObj", null);
if (null == e) {
var r = !1;
e && e.startTime && this.isToday(e.startTime) && (r = e.todayPlayed);
hs.storage.setItem("parallelClearHardObj", {
startTime: new Date().getTime(),
downChanged: 0,
todayPlayed: r,
firstChanged: !1
});
}
}
};
e.prototype.onAlgorithmStrategyPostprocessComplete = function() {
if ("消两次难题" == hs.algorithmName.algoActualChangeName[0]) {
var t = hs.storage.getItem("parallelClearHardObj", null);
t.firstChanged = !0;
this.isToday(t.startTime) && (t.todayPlayed = !0);
this.isHardDown() && t.downChanged++;
hs.storage.setItem("parallelClearHardObj", t);
as.AlgorithmStrategyAlgoExpectedIdPatch.patch(hs.OFFER_TYPE_BASE.NONE, this);
as.AlgorithmStrategyAlgoExpectedIdPatch.patch(hs.OFFER_TYPE_DIFFICULTY.HPARALLELCLEAR_HARD, this);
}
};
e.prototype.onPostSdkResult = function(t, e) {
var r;
if (e === this.traitName && (null === (r = null == t ? void 0 : t.sdk) || void 0 === r ? void 0 : r.SDK_SUCCESS)) {
as.AlgorithmStrategyAlgoExpectedIdPatch.patch(hs.OFFER_TYPE_BASE.NONE, this);
as.AlgorithmStrategyAlgoExpectedIdPatch.patch(this.currentAlgoId, this);
}
};
e.prototype.onAlgorithmStrategyPositionAdjust = function() {
if ("消两次难题" == hs.algorithmName.algoActualChangeName[0]) return {
data: hs.AlgorithmStrategyPositionType.LEFT,
returnState: !0
};
};
e.prototype.onPostprocessConditionContext = function(t) {
return buildLazyConditionContext({
flow: function() {
return ASContext(t, "当前后处理 flow");
}
});
};
e.prototype.onPostprocessConditionOperators = function() {
var t = this;
return {
postOperator: function(e) {
var r = t.evaluateTriggerBottomOffer(e);
return {
status: r.algorithmList.length > 0,
data: {
algorithmList: r.algorithmList
}
};
}
};
};
e.prototype.onPostprocessConditions = function() {
return [ {
conditions: {
fact: "flow",
operator: "postOperator",
value: !0
},
flow: "replaceParallelClearHard",
platform: "gp",
gameMode: "class"
} ];
};
e.prototype.onPostprocessActions = function() {
return {
replaceParallelClearHard: [ {
operator: "AlgorithmStrategyAlgorithmListOperator",
type: "replaceAll",
args: [ {
fact: "operator.postOperator.data.algorithmList"
} ]
}, {
operator: "AlgorithmStrategyReturnOperator",
type: "returnState",
args: [ as.AlgorithmStrategyReturnStateProcessType.POST_SDK_REQUEST_SUCCESS ]
}, {
operator: "AlgorithmStrategyDisableOperator",
type: "disablePostRestTags",
args: [ !0 ]
} ]
};
};
var r;
e.TAG = "[CTRefactorParallelClearHardTrait][消两次难题]";
return r = i([ classId("CTRefactorParallelClearHardTrait"), classMethodWatch() ], e);
}(Trait);
r.CTRefactorParallelClearHardTrait = l;
cc._RF.pop();
}, {} ]
}, {}, [ "CTRefactorParallelClearHardTrait" ]);
//# sourceMappingURL=index.js.map
