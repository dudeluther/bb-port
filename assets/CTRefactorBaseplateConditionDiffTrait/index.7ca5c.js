window.__require = function t(e, o, r) {
function n(l, a) {
if (!o[l]) {
if (!e[l]) {
var c = l.split("/");
c = c[c.length - 1];
if (!e[c]) {
var u = "function" == typeof __require && __require;
if (!a && u) return u(c, !0);
if (i) return i(c, !0);
throw new Error("Cannot find module '" + l + "'");
}
l = c;
}
var f = o[l] = {
exports: {}
};
e[l][0].call(f.exports, function(t) {
return n(e[l][1][t] || t);
}, f, f.exports, t, e, o, r);
}
return o[l].exports;
}
for (var i = "function" == typeof __require && __require, l = 0; l < r.length; l++) n(r[l]);
return n;
}({
CTRefactorBaseplateConditionDiffTrait: [ function(t, e, o) {
"use strict";
cc._RF.push(e, "cb4e0gVX3ZFKJg7OHzUtGEd", "CTRefactorBaseplateConditionDiffTrait");
var r, n = this && this.__extends || (r = function(t, e) {
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
}), i = this && this.__decorate || function(t, e, o, r) {
var n, i = arguments.length, l = i < 3 ? e : null === r ? r = Object.getOwnPropertyDescriptor(e, o) : r;
if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) l = Reflect.decorate(t, e, o, r); else for (var a = t.length - 1; a >= 0; a--) (n = t[a]) && (l = (i < 3 ? n(l) : i > 3 ? n(e, o, l) : n(e, o)) || l);
return i > 3 && l && Object.defineProperty(e, o, l), l;
};
Object.defineProperty(o, "__esModule", {
value: !0
});
o.CTRefactorBaseplateConditionDiffTrait = void 0;
var l = function(t) {
n(e, t);
function e() {
return null !== t && t.apply(this, arguments) || this;
}
e.prototype.getHighRecordScore = function(t) {
return t;
};
e.prototype.isDifficulty = function(t) {
return this.props.algo == t;
};
e.prototype.getMatchedLayerIndex = function(t) {
var e;
if (null == t) return null;
if (!this.isDifficulty(t)) return null;
var o = null === (e = this.props) || void 0 === e ? void 0 : e.layer;
if (!o) return null;
for (var r = this.getHighRecordScore(hs.scoreInfo.highRecordScore), n = 0; n < o.length + 1; n++) {
if (n == o.length) return n;
if (r < o[n]) return n;
}
return null;
};
e.prototype.resetExpectedAlgoIdIfNeeded = function(t) {
if (t) {
as.AlgorithmStrategyAlgoExpectedIdPatch.patch(hs.OFFER_TYPE_BASE.NONE, this);
as.AlgorithmStrategyAlgoExpectedIdPatch.patch(hs.OFFER_TYPE_BASE.SUI_JI_WU_SI, this);
hs.algorithmStrategyLevelRefactoredInfo.setAlgorithmSourceLevel2(this.traitName);
}
};
e.prototype.onPreprocessConditionContext = function(t) {
var e, o, r, n, i, l, a = null !== (r = null === (o = null === (e = null == t ? void 0 : t.algorithmList) || void 0 === e ? void 0 : e[0]) || void 0 === o ? void 0 : o.algorithmId) && void 0 !== r ? r : null, c = null != a && this.isDifficulty(a), u = this.getMatchedLayerIndex(a), f = null === (n = this.props) || void 0 === n ? void 0 : n.layer, s = null === (i = this.props) || void 0 === i ? void 0 : i.winalgos, p = null === (l = this.props) || void 0 === l ? void 0 : l.failalgos;
return buildLazyConditionContext({
isLaneSchemeSource: function() {
return ASContext(hs.algorithmStrategyLevelRefactoredInfo.algorithmSourceLevel1 === hs.ClassAlgorithmSourceType.LaneScheme, "当前一级出题源是否为泳道");
},
currentAlgorithmId: function() {
return ASContext(a, "当前算法列表首项 ID");
},
isTargetDifficulty: function() {
return ASContext(c, "当前首项是否命中目标难题");
},
matchedLayerIndex: function() {
return ASContext(u, "命中的分数段索引");
},
nextWinAlgo: function() {
return ASContext(null == u ? null : null == s ? void 0 : s[u], "目标正常算法");
},
nextFailAlgo: function() {
return ASContext(null == u ? null : null == p ? void 0 : p[u], "目标降级算法");
},
shouldResetExpectedAlgoId: function() {
return ASContext(0 === u, "是否需要重置预期算法名");
},
canReplace: function() {
return ASContext(!!f && !!s && !!p && null != u, "是否满足替换条件");
}
});
};
e.prototype.onPreprocessConditions = function() {
return {
mutex: {
LaneScheme: [ {
conditions: {
and: [ {
fact: "isLaneSchemeSource",
operator: "=",
value: !0
}, {
fact: "canReplace",
operator: "=",
value: !0
} ]
},
event: {
type: "resetExpectedAlgoIdIfNeeded",
args: [ {
fact: "shouldResetExpectedAlgoId"
} ]
},
flow: "replaceConditionDiff"
} ]
}
};
};
e.prototype.onPreprocessActions = function() {
return {
mutex: {
LaneScheme: {
replaceConditionDiff: [ {
operator: "AlgorithmStrategyAlgorithmListOperator",
type: "replaceAll",
args: [ {
fact: "nextWinAlgo"
} ]
}, {
operator: "AlgorithmStrategyAlgorithmFallbackListOperator",
type: "replaceAll",
args: [ {
fact: "nextFailAlgo"
} ]
} ]
}
}
};
};
return i([ classId("CTRefactorBaseplateConditionDiffTrait"), classMethodWatch() ], e);
}(Trait);
o.CTRefactorBaseplateConditionDiffTrait = l;
cc._RF.pop();
}, {} ]
}, {}, [ "CTRefactorBaseplateConditionDiffTrait" ]);
//# sourceMappingURL=index.js.map
