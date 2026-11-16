window.__require = function t(e, r, o) {
function a(n, l) {
if (!r[n]) {
if (!e[n]) {
var s = n.split("/");
s = s[s.length - 1];
if (!e[s]) {
var c = "function" == typeof __require && __require;
if (!l && c) return c(s, !0);
if (i) return i(s, !0);
throw new Error("Cannot find module '" + n + "'");
}
n = s;
}
var p = r[n] = {
exports: {}
};
e[n][0].call(p.exports, function(t) {
return a(e[n][1][t] || t);
}, p, p.exports, t, e, r, o);
}
return r[n].exports;
}
for (var i = "function" == typeof __require && __require, n = 0; n < o.length; n++) a(o[n]);
return a;
}({
CTRefactorClassicsRandomReplaceTrait: [ function(t, e, r) {
"use strict";
cc._RF.push(e, "e0f4cXWf4prnA0eLzpLXG1+", "CTRefactorClassicsRandomReplaceTrait");
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
if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) n = Reflect.decorate(t, e, r, o); else for (var l = t.length - 1; l >= 0; l--) (a = t[l]) && (n = (i < 3 ? a(n) : i > 3 ? a(e, r, n) : a(e, r)) || n);
return i > 3 && n && Object.defineProperty(e, r, n), n;
}, n = this && this.__read || function(t, e) {
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
};
Object.defineProperty(r, "__esModule", {
value: !0
});
r.CTRefactorClassicsRandomReplaceTrait = void 0;
var l = function(t) {
a(e, t);
function e() {
return null !== t && t.apply(this, arguments) || this;
}
Object.defineProperty(e.prototype, "algorithm1", {
get: function() {
return hs.traitConfigSafePropsInfo.getSafePropValueByKey("ClassicsRandomReplaceTrait", "algorithm1", this.props, hs.OFFER_TYPE.SUI_JI_WU_SI);
},
enumerable: !1,
configurable: !0
});
Object.defineProperty(e.prototype, "algorithm2", {
get: function() {
return hs.traitConfigSafePropsInfo.getSafePropValueByKey("ClassicsRandomReplaceTrait", "algorithm2", this.props, hs.OFFER_TYPE.SHANG_ZENG_3);
},
enumerable: !1,
configurable: !0
});
Object.defineProperty(e.prototype, "replaceAlgorithm", {
get: function() {
return hs.traitConfigSafePropsInfo.getSafePropValueByKey("ClassicsRandomReplaceTrait", "replaceAlgorithm", this.props, hs.OFFER_TYPE.SUI_JI);
},
enumerable: !1,
configurable: !0
});
Object.defineProperty(e.prototype, "rate1", {
get: function() {
return hs.traitConfigSafePropsInfo.getSafePropValueByKey("ClassicsRandomReplaceTrait", "rate1", this.props, .5);
},
enumerable: !1,
configurable: !0
});
Object.defineProperty(e.prototype, "rate2", {
get: function() {
return hs.traitConfigSafePropsInfo.getSafePropValueByKey("ClassicsRandomReplaceTrait", "rate2", this.props, .5);
},
enumerable: !1,
configurable: !0
});
Object.defineProperty(e.prototype, "boardWeight", {
get: function() {
return hs.traitConfigSafePropsInfo.getSafePropValueByKey("ClassicsRandomReplaceTrait", "boardWeight", this.props, null);
},
enumerable: !1,
configurable: !0
});
e.prototype.isBoardWeightInRange = function() {
var t = this.boardWeight;
if (!t || !t.length || t.length < 2) return !0;
var e = hs.binarySupport.getWeightValue(hs.boardInfo.faceBlocks), r = n(t, 2), o = r[0], a = r[1];
return e >= o && e <= a;
};
e.prototype.getOfferType = function() {
var t = Math.floor(this.rate1 / (this.rate1 + this.rate2) * 10);
return this.algorithm1 !== hs.OFFER_TYPE.SUI_JI_WU_SI || this.algorithm2 !== hs.OFFER_TYPE.SHANG_ZENG_3 || this.rate1 != this.rate2 ? this.getAlgorithm1AndAlgorithm2(t, !1, this.algorithm1, this.algorithm2) : hs.algorithmStrategyLogic.getShangZengAndSuiJi();
};
e.prototype.getAlgorithm1AndAlgorithm2 = function(t, e, r, o) {
void 0 === t && (t = 5);
void 0 === e && (e = !1);
void 0 === r && (r = hs.OFFER_TYPE.SUI_JI_WU_SI);
void 0 === o && (o = hs.OFFER_TYPE.SHANG_ZENG_3);
return Math.floor(10 * Math.random()) < t ? r : e ? r : o;
};
e.prototype.onPreprocessConditionContext = function(t) {
var e = this, r = this.isBoardWeightInRange(), o = this.replaceAlgorithm, a = !1, i = !1, n = [], l = [];
if (r) {
n = ((null == t ? void 0 : t.algorithmList) || []).map(function(t) {
if (t.algorithmId === o) {
a = !0;
return e.getOfferType();
}
return t.algorithmId;
});
l = ((null == t ? void 0 : t.algorithmFallbackList) || []).map(function(t) {
if (t.algorithmId === o) {
i = !0;
return e.getOfferType();
}
return t.algorithmId;
});
}
return buildLazyConditionContext({
isInRange: function() {
return ASContext(r, "盘面权重是否在范围内");
},
isReplaceAlgorithm: function() {
return ASContext(a, "是否替换了正常算法");
},
isReplaceFailAlgorithm: function() {
return ASContext(i, "是否替换了降级算法");
},
normalList: function() {
return ASContext(n, "正常算法列表");
},
failList: function() {
return ASContext(l, "降级算法列表");
}
});
};
e.prototype.onPreprocessConditions = function() {
return {
base: [ {
conditions: {
and: [ {
fact: "isInRange",
operator: "=",
value: !0
}, {
fact: "isReplaceAlgorithm",
operator: "=",
value: !0
}, {
fact: "isReplaceFailAlgorithm",
operator: "=",
value: !0
} ]
},
flow: "replaceAllAlgorithm"
}, {
conditions: {
and: [ {
fact: "isInRange",
operator: "=",
value: !0
}, {
fact: "isReplaceAlgorithm",
operator: "=",
value: !0
} ]
},
flow: "replaceAlgorithm"
}, {
conditions: {
and: [ {
fact: "isInRange",
operator: "=",
value: !0
}, {
fact: "isReplaceFailAlgorithm",
operator: "=",
value: !0
} ]
},
flow: "replaceFailAlgorithm"
} ]
};
};
e.prototype.onPreprocessActions = function() {
return {
base: {
replaceAllAlgorithm: [ {
operator: "AlgorithmStrategyAlgorithmListOperator",
type: "replaceAll",
args: [ {
fact: "normalList"
} ]
}, {
operator: "AlgorithmStrategyAlgorithmFallbackListOperator",
type: "replaceAll",
args: [ {
fact: "failList"
} ]
} ],
replaceAlgorithm: [ {
operator: "AlgorithmStrategyAlgorithmListOperator",
type: "replaceAll",
args: [ {
fact: "normalList"
} ]
} ],
replaceFailAlgorithm: [ {
operator: "AlgorithmStrategyAlgorithmFallbackListOperator",
type: "replaceAll",
args: [ {
fact: "failList"
} ]
} ]
}
};
};
return i([ classId("CTRefactorClassicsRandomReplaceTrait") ], e);
}(Trait);
r.CTRefactorClassicsRandomReplaceTrait = l;
cc._RF.pop();
}, {} ]
}, {}, [ "CTRefactorClassicsRandomReplaceTrait" ]);
//# sourceMappingURL=index.js.map
