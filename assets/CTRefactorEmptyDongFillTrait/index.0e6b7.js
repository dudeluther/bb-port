window.__require = function t(e, r, o) {
function n(a, p) {
if (!r[a]) {
if (!e[a]) {
var l = a.split("/");
l = l[l.length - 1];
if (!e[l]) {
var c = "function" == typeof __require && __require;
if (!p && c) return c(l, !0);
if (i) return i(l, !0);
throw new Error("Cannot find module '" + a + "'");
}
a = l;
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
CTRefactorEmptyDongFillTrait: [ function(t, e, r) {
"use strict";
cc._RF.push(e, "c4fcaKh4W1Aq71yyCHOZYP4", "CTRefactorEmptyDongFillTrait");
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
if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) a = Reflect.decorate(t, e, r, o); else for (var p = t.length - 1; p >= 0; p--) (n = t[p]) && (a = (i < 3 ? n(a) : i > 3 ? n(e, r, a) : n(e, r)) || a);
return i > 3 && a && Object.defineProperty(e, r, a), a;
};
Object.defineProperty(r, "__esModule", {
value: !0
});
r.CTRefactorEmptyDongFillTrait = void 0;
var a = function(t) {
n(e, t);
function e() {
return null !== t && t.apply(this, arguments) || this;
}
e.prototype.onPreprocessConditionContext = function() {
var t = this;
return buildLazyConditionContext({
isHitRate: function() {
return ASContext(t.isHitRate(), "EmptyDongFillTrait 概率命中");
},
isWeightExceedThreshold: function() {
return ASContext(t.isWeightExceedThreshold(), "盘面权重大于阈值");
},
downgradeAlgoId: function() {
return ASContext(t.downgradeAlgoId, "降级算法ID");
}
});
};
e.prototype.onPreprocessConditions = function() {
return {
blankAlgorithm: [ {
conditions: {
and: [ {
fact: "gameMode",
operator: "=",
value: hs.GameMode.Class
}, {
fact: "isHitRate",
operator: "=",
value: !0
}, {
fact: "isWeightExceedThreshold",
operator: "=",
value: !0
} ]
},
platform: "gp",
flow: "replaceEmptyDongFill"
} ]
};
};
e.prototype.onPreprocessActions = function() {
return {
blankAlgorithm: {
replaceEmptyDongFill: [ {
operator: "AlgorithmStrategyAlgorithmListOperator",
type: "replaceFilterPriority",
args: [ hs.OFFER_TYPE_BLANK.TIAN_KONG_XIAO_CHU, {
fact: "downgradeAlgoId"
} ]
}, {
operator: "AlgorithmStrategyAlgorithmPriorityListOperator",
type: "replace",
args: [ hs.OFFER_TYPE_BLANK.TIAN_KONG_XIAO_CHU, {
fact: "downgradeAlgoId"
} ]
}, {
operator: "AlgorithmStrategyAlgorithmFallbackListOperator",
type: "replace",
args: [ hs.OFFER_TYPE_BLANK.TIAN_KONG_XIAO_CHU, {
fact: "downgradeAlgoId"
} ]
} ]
}
};
};
Object.defineProperty(e.prototype, "weightThreshold", {
get: function() {
return hs.traitConfigSafePropsInfo.getSafePropValueByKey("EmptyDongFillTrait", "weightThreshold", this.props, 280);
},
enumerable: !1,
configurable: !0
});
Object.defineProperty(e.prototype, "downgradeAlgoId", {
get: function() {
return hs.traitConfigSafePropsInfo.getSafePropValueByKey("EmptyDongFillTrait", "downgradeAlgoId", this.props, hs.OFFER_TYPE.EMPTYDONGFILL);
},
enumerable: !1,
configurable: !0
});
Object.defineProperty(e.prototype, "propRate", {
get: function() {
return hs.traitConfigSafePropsInfo.getSafePropValueByKey("EmptyDongFillTrait", "rate", this.props, 1);
},
enumerable: !1,
configurable: !0
});
Object.defineProperty(e.prototype, "currentWeight", {
get: function() {
return hs.binarySupport.getWeightValue(hs.boardInfo.faceBlocks);
},
enumerable: !1,
configurable: !0
});
e.prototype.isHitRate = function() {
var t = Math.random(), e = this.propRate;
return 1 === e || t <= e;
};
e.prototype.isWeightExceedThreshold = function() {
return this.currentWeight > this.weightThreshold;
};
return i([ classId("CTRefactorEmptyDongFillTrait") ], e);
}(Trait);
r.CTRefactorEmptyDongFillTrait = a;
cc._RF.pop();
}, {} ]
}, {}, [ "CTRefactorEmptyDongFillTrait" ]);
//# sourceMappingURL=index.js.map
