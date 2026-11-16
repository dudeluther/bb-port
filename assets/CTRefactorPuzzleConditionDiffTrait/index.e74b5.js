window.__require = function t(e, r, o) {
function i(a, n) {
if (!r[a]) {
if (!e[a]) {
var c = a.split("/");
c = c[c.length - 1];
if (!e[c]) {
var f = "function" == typeof __require && __require;
if (!n && f) return f(c, !0);
if (l) return l(c, !0);
throw new Error("Cannot find module '" + a + "'");
}
a = c;
}
var u = r[a] = {
exports: {}
};
e[a][0].call(u.exports, function(t) {
return i(e[a][1][t] || t);
}, u, u.exports, t, e, r, o);
}
return r[a].exports;
}
for (var l = "function" == typeof __require && __require, a = 0; a < o.length; a++) i(o[a]);
return i;
}({
CTRefactorPuzzleConditionDiffTrait: [ function(t, e, r) {
"use strict";
cc._RF.push(e, "fba544fVN5PkKfAtiHYJhDV", "CTRefactorPuzzleConditionDiffTrait");
var o, i = this && this.__extends || (o = function(t, e) {
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
}), l = this && this.__decorate || function(t, e, r, o) {
var i, l = arguments.length, a = l < 3 ? e : null === o ? o = Object.getOwnPropertyDescriptor(e, r) : o;
if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) a = Reflect.decorate(t, e, r, o); else for (var n = t.length - 1; n >= 0; n--) (i = t[n]) && (a = (l < 3 ? i(a) : l > 3 ? i(e, r, a) : i(e, r)) || a);
return l > 3 && a && Object.defineProperty(e, r, a), a;
};
Object.defineProperty(r, "__esModule", {
value: !0
});
r.CTRefactorPuzzleConditionDiffTrait = void 0;
var a = function(t) {
i(e, t);
function e() {
return null !== t && t.apply(this, arguments) || this;
}
e.prototype.getHighRecordScore = function(t) {
return t;
};
e.prototype.onPreprocessConditionContext = function() {
return buildLazyConditionContext({
isPuzzleTimeFirstSource: function() {
return ASContext(hs.algorithmStrategyLevelRefactoredInfo.algorithmSourceLevel1 === hs.ClassAlgorithmSourceType.PuzzleTimeFirst, "当前是否为定时难题出题源");
},
isPuzzleTimeOtherSource: function() {
return ASContext(hs.algorithmStrategyLevelRefactoredInfo.algorithmSourceLevel1 === hs.ClassAlgorithmSourceType.PuzzleTimeOther, "当前是否为定时难题Other出题源");
},
replaceAllAlgorithmTrigger: function() {
return ASContext(!0, "当前流程触发入口（值未被消费，占位触发）");
}
});
};
e.prototype.onPreprocessConditionOperators = function() {
var t = this;
return {
replaceAllAlgorithm: function() {
var e, r, o, i = null === (e = t.props) || void 0 === e ? void 0 : e.layer, l = null === (r = t.props) || void 0 === r ? void 0 : r.winalgos, a = null === (o = t.props) || void 0 === o ? void 0 : o.failalgos;
if (i && l && a) for (var n = 0; n < i.length + 1; n++) {
if (n == i.length) {
hs.algorithmStrategyLevelRefactoredInfo.setAlgorithmSourceLevel2(t.traitName);
return {
status: !0,
data: {
winAlgo: l[n],
failAlgo: a[n]
}
};
}
if (t.getHighRecordScore(hs.scoreInfo.highRecordScore) < i[n]) {
if (0 == n) {
as.AlgorithmStrategyAlgoExpectedIdPatch.patch(hs.OFFER_TYPE_BASE.NONE, t);
as.AlgorithmStrategyAlgoExpectedIdPatch.patch(hs.OFFER_TYPE_BASE.SUI_JI_WU_SI, t);
}
hs.algorithmStrategyLevelRefactoredInfo.setAlgorithmSourceLevel2(t.traitName);
return {
status: !0,
data: {
winAlgo: l[n],
failAlgo: a[n]
}
};
}
}
return !1;
}
};
};
e.prototype.onPreprocessConditions = function() {
return {
mutex: {
PuzzleTimeFirst: [ {
conditions: {
and: [ {
fact: "isPuzzleTimeFirstSource",
operator: "=",
value: !0
}, {
fact: "replaceAllAlgorithmTrigger",
operator: "replaceAllAlgorithm",
value: "true"
} ]
},
platform: "gp",
gameMode: "class",
flow: "firstFlow"
} ],
PuzzleTimeOther: [ {
conditions: {
and: [ {
fact: "isPuzzleTimeOtherSource",
operator: "=",
value: !0
}, {
fact: "replaceAllAlgorithmTrigger",
operator: "replaceAllAlgorithm",
value: "true"
} ]
},
platform: "gp",
gameMode: "class",
flow: "otherFlow"
} ]
}
};
};
e.prototype.onPreprocessActions = function() {
return {
mutex: {
PuzzleTimeFirst: {
firstFlow: [ {
operator: "AlgorithmStrategyAlgorithmListOperator",
type: "replaceAll",
args: [ {
fact: "operator.replaceAllAlgorithm.data.winAlgo"
} ]
}, {
operator: "AlgorithmStrategyAlgorithmFallbackListOperator",
type: "replaceAll",
args: [ {
fact: "operator.replaceAllAlgorithm.data.failAlgo"
} ]
} ]
},
PuzzleTimeOther: {
otherFlow: [ {
operator: "AlgorithmStrategyAlgorithmListOperator",
type: "replaceAll",
args: [ {
fact: "operator.replaceAllAlgorithm.data.winAlgo"
} ]
}, {
operator: "AlgorithmStrategyAlgorithmFallbackListOperator",
type: "replaceAll",
args: [ {
fact: "operator.replaceAllAlgorithm.data.failAlgo"
} ]
} ]
}
}
};
};
return l([ classId("CTRefactorPuzzleConditionDiffTrait"), classMethodWatch() ], e);
}(Trait);
r.CTRefactorPuzzleConditionDiffTrait = a;
cc._RF.pop();
}, {} ]
}, {}, [ "CTRefactorPuzzleConditionDiffTrait" ]);
//# sourceMappingURL=index.js.map
