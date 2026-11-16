window.__require = function t(o, r, e) {
function i(a, c) {
if (!r[a]) {
if (!o[a]) {
var u = a.split("/");
u = u[u.length - 1];
if (!o[u]) {
var f = "function" == typeof __require && __require;
if (!c && f) return f(u, !0);
if (n) return n(u, !0);
throw new Error("Cannot find module '" + a + "'");
}
a = u;
}
var p = r[a] = {
exports: {}
};
o[a][0].call(p.exports, function(t) {
return i(o[a][1][t] || t);
}, p, p.exports, t, o, r, e);
}
return r[a].exports;
}
for (var n = "function" == typeof __require && __require, a = 0; a < e.length; a++) i(e[a]);
return i;
}({
CTRefactorBAlgorithmGaohuibaoARGTrait: [ function(t, o, r) {
"use strict";
cc._RF.push(o, "48d3cF707FDC6QwrP5Mtq5S", "CTRefactorBAlgorithmGaohuibaoARGTrait");
var e, i = this && this.__extends || (e = function(t, o) {
return (e = Object.setPrototypeOf || {
__proto__: []
} instanceof Array && function(t, o) {
t.__proto__ = o;
} || function(t, o) {
for (var r in o) Object.prototype.hasOwnProperty.call(o, r) && (t[r] = o[r]);
})(t, o);
}, function(t, o) {
e(t, o);
function r() {
this.constructor = t;
}
t.prototype = null === o ? Object.create(o) : (r.prototype = o.prototype, new r());
}), n = this && this.__decorate || function(t, o, r, e) {
var i, n = arguments.length, a = n < 3 ? o : null === e ? e = Object.getOwnPropertyDescriptor(o, r) : e;
if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) a = Reflect.decorate(t, o, r, e); else for (var c = t.length - 1; c >= 0; c--) (i = t[c]) && (a = (n < 3 ? i(a) : n > 3 ? i(o, r, a) : i(o, r)) || a);
return n > 3 && a && Object.defineProperty(o, r, a), a;
};
Object.defineProperty(r, "__esModule", {
value: !0
});
r.CTRefactorBAlgorithmGaohuibaoARGTrait = void 0;
var a = function(t) {
i(o, t);
function o() {
return null !== t && t.apply(this, arguments) || this;
}
Object.defineProperty(o.prototype, "probability", {
get: function() {
return hs.traitConfigSafePropsInfo.getSafePropValueByKey("BAlgorithmGaohuibaoARGTrait", "probability", this.props, 1);
},
enumerable: !1,
configurable: !0
});
Object.defineProperty(o.prototype, "score", {
get: function() {
return hs.traitConfigSafePropsInfo.getSafePropValueByKey("BAlgorithmGaohuibaoARGTrait", "score", this.props, 3e3);
},
enumerable: !1,
configurable: !0
});
o.prototype.onPreprocessConditionContext = function() {
var t = this;
return buildLazyConditionContext({
traitScore: function() {
return ASContext(t.score, "分数小于3000");
},
mathRandom: function() {
return ASContext(Math.random(), "随机数");
},
probability: function() {
return ASContext(t.probability, "特性随机值");
}
});
};
o.prototype.onPreprocessConditions = function() {
return {
diffAlgorithm: [ {
conditions: {
and: [ {
fact: "classScore",
operator: "<",
value: {
fact: "traitScore"
}
}, {
fact: "mathRandom",
operator: "<=",
value: {
fact: "probability"
}
} ]
},
flow: "flow1"
} ]
};
};
o.prototype.onAlgorithmStrategySDKBetween = function(t) {
var o;
(null === (o = t.sdk) || void 0 === o ? void 0 : o.actualAlgorithmId_SDK_REQUEST_BEFORE_Patch) == hs.OFFER_TYPE_DIFFICULTY.DIFFICULTY_GAOHUIBAO && as.AlgorithmStrategyAlgoActualNamePatch.patch([ hs.ALGO_NAME_TYPE.NAME_DIFFICULTY_GAOHUIBAO, hs.ALGO_NAME_TYPE.NAME_DIFFICULTY_GAOHUIBAO, hs.ALGO_NAME_TYPE.NAME_DIFFICULTY_GAOHUIBAO ], this);
};
o.prototype.onPreprocessActions = function() {
return {
diffAlgorithm: {
flow1: [ {
operator: "AlgorithmStrategyAlgorithmListOperator",
type: "replace",
args: [ [ hs.OFFER_TYPE_DIFFICULTY.KUN_NAN_TI, hs.OFFER_TYPE_DIFFICULTY.ZHI_JUE_NAN_TI, hs.OFFER_TYPE_DIFFICULTY.SIMPLE_ZHIJUE ], hs.OFFER_TYPE_DIFFICULTY.DIFFICULTY_GAOHUIBAO ]
} ]
}
};
};
return n([ classId("CTRefactorBAlgorithmGaohuibaoARGTrait") ], o);
}(Trait);
r.CTRefactorBAlgorithmGaohuibaoARGTrait = a;
cc._RF.pop();
}, {} ]
}, {}, [ "CTRefactorBAlgorithmGaohuibaoARGTrait" ]);
//# sourceMappingURL=index.js.map
