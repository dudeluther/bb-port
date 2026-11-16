window.__require = function t(e, r, o) {
function n(a, l) {
if (!r[a]) {
if (!e[a]) {
var u = a.split("/");
u = u[u.length - 1];
if (!e[u]) {
var c = "function" == typeof __require && __require;
if (!l && c) return c(u, !0);
if (i) return i(u, !0);
throw new Error("Cannot find module '" + a + "'");
}
a = u;
}
var s = r[a] = {
exports: {}
};
e[a][0].call(s.exports, function(t) {
return n(e[a][1][t] || t);
}, s, s.exports, t, e, r, o);
}
return r[a].exports;
}
for (var i = "function" == typeof __require && __require, a = 0; a < o.length; a++) n(o[a]);
return n;
}({
CTRefactorAlgoFillSortEdgeTrait: [ function(t, e, r) {
"use strict";
cc._RF.push(e, "8e8f23zWmRMTK4N4IsFwHaE", "CTRefactorAlgoFillSortEdgeTrait");
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
}, a = this && this.__read || function(t, e) {
var r = "function" == typeof Symbol && t[Symbol.iterator];
if (!r) return t;
var o, n, i = r.call(t), a = [];
try {
for (;(void 0 === e || e-- > 0) && !(o = i.next()).done; ) a.push(o.value);
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
return a;
};
Object.defineProperty(r, "__esModule", {
value: !0
});
r.CTRefactorAlgoFillSortEdgeTrait = void 0;
var l = function(t) {
n(e, t);
function e() {
return null !== t && t.apply(this, arguments) || this;
}
Object.defineProperty(e.prototype, "old", {
get: function() {
return hs.traitConfigSafePropsInfo.getSafePropValueByKey("AlgoFillSortEdgeTrait", "old", this.props, [ hs.OFFER_TYPE.SUI_JI, hs.OFFER_TYPE.SUI_JI_WU_SI ]);
},
enumerable: !1,
configurable: !0
});
Object.defineProperty(e.prototype, "new", {
get: function() {
return hs.traitConfigSafePropsInfo.getSafePropValueByKey("AlgoFillSortEdgeTrait", "new", this.props, hs.OFFER_TYPE.ALL_COMBINATION_ID70);
},
enumerable: !1,
configurable: !0
});
Object.defineProperty(e.prototype, "random", {
get: function() {
return hs.traitConfigSafePropsInfo.getSafePropValueByKey("AlgoFillSortEdgeTrait", "random", this.props, .9);
},
enumerable: !1,
configurable: !0
});
Object.defineProperty(e.prototype, "scoreRange", {
get: function() {
return hs.traitConfigSafePropsInfo.getSafePropValueByKey("AlgoFillSortEdgeTrait", "scoreRange", this.props, null);
},
enumerable: !1,
configurable: !0
});
Object.defineProperty(e.prototype, "algoArray", {
get: function() {
return hs.traitConfigSafePropsInfo.getSafePropValueByKey("AlgoFillSortEdgeTrait", "algoArray", this.props, null);
},
enumerable: !1,
configurable: !0
});
Object.defineProperty(e.prototype, "weightArray", {
get: function() {
return hs.traitConfigSafePropsInfo.getSafePropValueByKey("AlgoFillSortEdgeTrait", "weightArray", this.props, null);
},
enumerable: !1,
configurable: !0
});
e.prototype.isScoreInRange = function() {
var t = this.scoreRange;
if (null === t) return !0;
var e = hs.scoreInfo.score, r = a(t, 2), o = r[0], n = r[1];
return e >= o && e <= n;
};
e.prototype.getRandomAlgoByWeight = function(t, e) {
var r = null != t ? t : this.algoArray, o = null != e ? e : this.weightArray;
if (!r || !Array.isArray(r) || 0 === r.length) return null;
if (!o || !Array.isArray(o) || 0 === o.length) return null;
if (r.length !== o.length) return null;
var n = o.reduce(function(t, e) {
return t + e;
}, 0);
if (n <= 0) return null;
for (var i = Math.random() * n, a = 0, l = 0; l < r.length; l++) if (i < (a += o[l])) return r[l];
return r[r.length - 1];
};
e.prototype.isCanReplace = function(t) {
var e;
void 0 === t && (t = !0);
return (null === (e = TRAIT("AlgoFillSortEdgeNoUseTrait")) || void 0 === e || !e.active) && t;
};
e.prototype.isCanReplaceNewBottomAlgo = function() {
return !0;
};
e.prototype.checkBottomCondition = function() {
var t = TRAIT("CTRefactorContinueSameMoreRoundLimitTrait"), e = !1;
(null == t ? void 0 : t.active) && (e = t.state.isDealID70);
if (hs.storage.getItem("classRoundNum", 0) <= 1 || e) return !1;
var r = hs.algorithmName.algoActualId;
return 98 == this.props.way && r != hs.OFFER_TYPE.SUI_JI_GUIDE && hs.algorithmName.algoActualName.every(function(t) {
return t === hs.ALGO_NAME_TYPE.NAME_RANDOM || t === hs.ALGO_NAME_TYPE.NAME_NODIE;
});
};
e.prototype.getNewBottomAlgo = function() {
return hs.OFFER_TYPE.ALL_COMBINATION_ID70;
};
e.prototype.handleNewBottomAlgo = function() {
var t = TRAIT("CTRefactorContinueSameMoreRoundLimitTrait"), e = !1;
(null == t ? void 0 : t.active) && (e = t.state.isDealID70);
return hs.storage.getItem("classRoundNum", 0) > 1 && !e && 98 == this.props.way && hs.algorithmName.algoActualId != hs.OFFER_TYPE.SUI_JI_GUIDE && hs.algorithmName.algoActualName.every(function(t) {
return t === hs.ALGO_NAME_TYPE.NAME_RANDOM || t === hs.ALGO_NAME_TYPE.NAME_NODIE;
}) ? [ this.getNewBottomAlgo() ] : [];
};
e.prototype.resolveTargetAlgorithm = function() {
var t = this.getRandomAlgoByWeight();
return null !== t ? t : this.new;
};
e.prototype.checkCanReplace = function() {
return !this.random || Math.random() < this.random;
};
e.prototype.onPreprocessConditionContext = function() {
var t = this, e = hs.storage.getItem("classRoundNum", 0), r = this.isCanReplace(), o = this.isScoreInRange(), n = this.checkCanReplace(), i = n ? this.resolveTargetAlgorithm() : null;
return buildLazyConditionContext({
roundNum: function() {
return ASContext(e, "当前轮数");
},
isCanReplace: function() {
return ASContext(r, "是否可以替换");
},
isScoreInRange: function() {
return ASContext(o, "分数是否在区间内");
},
canReplace: function() {
return ASContext(n, "是否满足替换概率");
},
targetAlgo: function() {
return ASContext(i, "目标算法");
},
oldAlgoList: function() {
return ASContext(t.old, "需要被替换的旧算法列表");
}
});
};
e.prototype.onPreprocessConditions = function() {
return {
preprocessingAlgorithm: [ {
conditions: {
and: [ {
fact: "isCanReplace",
operator: "=",
value: !0
}, {
fact: "roundNum",
operator: ">",
value: 1
}, {
fact: "isScoreInRange",
operator: "=",
value: !0
}, {
fact: "canReplace",
operator: "=",
value: !0
} ]
},
flow: "replaceAlgorithm"
} ]
};
};
e.prototype.onPreprocessActions = function() {
return {
preprocessingAlgorithm: {
replaceAlgorithm: [ {
operator: "AlgorithmStrategyAlgorithmListOperator",
type: "replace",
args: [ {
fact: "oldAlgoList"
}, {
fact: "targetAlgo"
} ]
}, {
operator: "AlgorithmStrategyAlgorithmFallbackListOperator",
type: "replace",
args: [ {
fact: "oldAlgoList"
}, {
fact: "targetAlgo"
} ]
}, {
operator: "AlgorithmStrategyAlgorithmPostListPatchOperator",
type: "replace",
args: [ {
fact: "oldAlgoList"
}, {
fact: "targetAlgo"
} ]
} ]
}
};
};
e.prototype.onPostprocessConditionContext = function(t) {
var e = this, r = this.isCanReplaceNewBottomAlgo() && this.checkBottomCondition(t);
return buildLazyConditionContext({
shouldTriggerBottom: function() {
return ASContext(r, "是否触发兜底替换");
},
bottomList: function() {
return ASContext(e.handleNewBottomAlgo(), "兜底算法列表");
}
});
};
e.prototype.onPostprocessConditions = function() {
return [ {
conditions: {
and: [ {
fact: "shouldTriggerBottom",
operator: "=",
value: !0
} ]
},
flow: "bottomReplace"
} ];
};
e.prototype.onPostprocessActions = function() {
return {
bottomReplace: [ {
operator: "AlgorithmStrategyAlgorithmListOperator",
type: "push",
args: [ {
fact: "bottomList"
} ]
} ]
};
};
return i([ classId("CTRefactorAlgoFillSortEdgeTrait"), classMethodWatch() ], e);
}(Trait);
r.CTRefactorAlgoFillSortEdgeTrait = l;
cc._RF.pop();
}, {} ]
}, {}, [ "CTRefactorAlgoFillSortEdgeTrait" ]);
//# sourceMappingURL=index.js.map
