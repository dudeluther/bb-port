window.__require = function t(r, o, e) {
function n(a, s) {
if (!o[a]) {
if (!r[a]) {
var u = a.split("/");
u = u[u.length - 1];
if (!r[u]) {
var l = "function" == typeof __require && __require;
if (!s && l) return l(u, !0);
if (i) return i(u, !0);
throw new Error("Cannot find module '" + a + "'");
}
a = u;
}
var c = o[a] = {
exports: {}
};
r[a][0].call(c.exports, function(t) {
return n(r[a][1][t] || t);
}, c, c.exports, t, r, o, e);
}
return o[a].exports;
}
for (var i = "function" == typeof __require && __require, a = 0; a < e.length; a++) n(e[a]);
return n;
}({
CTRefactorLightChurnRateParamTrait: [ function(t, r, o) {
"use strict";
cc._RF.push(r, "afa63eAwixEgZrquIkaxzcw", "CTRefactorLightChurnRateParamTrait");
var e, n = this && this.__extends || (e = function(t, r) {
return (e = Object.setPrototypeOf || {
__proto__: []
} instanceof Array && function(t, r) {
t.__proto__ = r;
} || function(t, r) {
for (var o in r) Object.prototype.hasOwnProperty.call(r, o) && (t[o] = r[o]);
})(t, r);
}, function(t, r) {
e(t, r);
function o() {
this.constructor = t;
}
t.prototype = null === r ? Object.create(r) : (o.prototype = r.prototype, new o());
}), i = this && this.__decorate || function(t, r, o, e) {
var n, i = arguments.length, a = i < 3 ? r : null === e ? e = Object.getOwnPropertyDescriptor(r, o) : e;
if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) a = Reflect.decorate(t, r, o, e); else for (var s = t.length - 1; s >= 0; s--) (n = t[s]) && (a = (i < 3 ? n(a) : i > 3 ? n(r, o, a) : n(r, o)) || a);
return i > 3 && a && Object.defineProperty(r, o, a), a;
};
Object.defineProperty(o, "__esModule", {
value: !0
});
o.CTRefactorLightChurnRateParamTrait = void 0;
var a = function(t) {
n(r, t);
function r() {
return null !== t && t.apply(this, arguments) || this;
}
r.prototype.onPreprocessConditionContext = function(t) {
var r = this;
return buildLazyConditionContext({
fallbackAlgorithmList: function() {
return ASContext(r.getCurrentFallbackAlgorithmList(t), "当前失败降级算法列表");
}
});
};
r.prototype.onPreprocessConditionOperators = function() {
var t = this;
return {
buildInsertAlgorithms: function(r) {
var o = t.buildInsertAlgorithms(r);
return 0 !== o.length && {
status: !0,
data: {
insertAlgorithms: o
}
};
}
};
};
r.prototype.onPreprocessConditions = function() {
return {
conditionAlgorithm: [ {
conditions: {
and: [ {
fact: "fallbackAlgorithmList",
operator: "buildInsertAlgorithms",
value: !0
} ]
},
platform: "gp",
flow: "insertAllCombination"
} ]
};
};
r.prototype.onPreprocessActions = function() {
return {
conditionAlgorithm: {
insertAllCombination: [ {
operator: "AlgorithmStrategyAlgorithmFallbackListOperator",
type: "unshift",
args: [ {
fact: "operator.buildInsertAlgorithms.data.insertAlgorithms"
} ]
} ]
}
};
};
r.prototype.getCurrentFallbackAlgorithmList = function(t) {
var r;
return null !== (r = null == t ? void 0 : t.algorithmFallbackList) && void 0 !== r ? r : as.AlgorithmStrategyAlgorithmFallbackListPatch.algorithmFallbackList;
};
r.prototype.hasAlgorithm = function(t, r) {
return t.some(function(t) {
return t.algorithmId === r;
});
};
r.prototype.buildInsertAlgorithms = function(t) {
var r = [];
this.props.random && this.generateRandomWithProbability_Shang() && this.hasAlgorithm(t, hs.OFFER_TYPE.SHANG_ZENG_3) && r.push(hs.OFFER_TYPE.ALL_COMBINATION_ID70);
this.props.zimurandom && this.generateRandomWithProbability_ZiMu() && this.hasAlgorithm(t, hs.OFFER_TYPE.ZIMU_SHANGZENG) && r.push(hs.OFFER_TYPE.ALL_COMBINATION_ID70);
return r;
};
r.prototype.generateRandomWithProbability_Shang = function() {
return Math.random() < this.props.random;
};
r.prototype.generateRandomWithProbability_ZiMu = function() {
return Math.random() < this.props.zimurandom;
};
return i([ classId("CTRefactorLightChurnRateParamTrait") ], r);
}(Trait);
o.CTRefactorLightChurnRateParamTrait = a;
cc._RF.pop();
}, {} ]
}, {}, [ "CTRefactorLightChurnRateParamTrait" ]);
//# sourceMappingURL=index.js.map
