window.__require = function t(e, r, o) {
function n(a, c) {
if (!r[a]) {
if (!e[a]) {
var p = a.split("/");
p = p[p.length - 1];
if (!e[p]) {
var u = "function" == typeof __require && __require;
if (!c && u) return u(p, !0);
if (i) return i(p, !0);
throw new Error("Cannot find module '" + a + "'");
}
a = p;
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
CTRefactorIsOpenZhiJueToKunNanTrait: [ function(t, e, r) {
"use strict";
cc._RF.push(e, "b9574WwfPpC+6v+uM6mINfp", "CTRefactorIsOpenZhiJueToKunNanTrait");
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
if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) a = Reflect.decorate(t, e, r, o); else for (var c = t.length - 1; c >= 0; c--) (n = t[c]) && (a = (i < 3 ? n(a) : i > 3 ? n(e, r, a) : n(e, r)) || a);
return i > 3 && a && Object.defineProperty(e, r, a), a;
};
Object.defineProperty(r, "__esModule", {
value: !0
});
r.CTRefactorIsOpenZhiJueToKunNanTrait = void 0;
var a = function(t) {
n(e, t);
function e() {
return null !== t && t.apply(this, arguments) || this;
}
Object.defineProperty(e.prototype, "originAlgorithm", {
get: function() {
return hs.traitConfigSafePropsInfo.getSafePropValueByKey("IsOpenZhiJueToKunNanTrait", "originAlgorithm", this.props, hs.OFFER_TYPE.ZHI_JUE_NAN_TI);
},
enumerable: !1,
configurable: !0
});
Object.defineProperty(e.prototype, "replaceAlgorithm", {
get: function() {
return hs.traitConfigSafePropsInfo.getSafePropValueByKey("IsOpenZhiJueToKunNanTrait", "replaceAlgorithm", this.props, hs.OFFER_TYPE.KUN_NAN_TI);
},
enumerable: !1,
configurable: !0
});
e.prototype.onPreprocessConditionContext = function() {
var t = this;
return buildLazyConditionContext({
isTrigger: function() {
return ASContext(t.getIsTrigger(), "外部 Trait 是否允许触发");
},
originalAlgo: function() {
return ASContext(t.originAlgorithm, "被替换的算法");
},
alternativeAlgo: function() {
return ASContext(t.replaceAlgorithm, "替换为的算法");
}
});
};
e.prototype.onPreprocessConditions = function() {
return {
base: [ {
conditions: {
and: [ {
fact: "isTrigger",
operator: "=",
value: !0
} ]
},
flow: "replaceZhiJue"
} ]
};
};
e.prototype.onPreprocessActions = function() {
return {
base: {
replaceZhiJue: [ {
operator: "AlgorithmStrategyAlgorithmListOperator",
type: "replace",
args: [ {
fact: "originalAlgo"
}, {
fact: "alternativeAlgo"
} ]
}, {
operator: "AlgorithmStrategyAlgorithmFallbackListOperator",
type: "replace",
args: [ {
fact: "originalAlgo"
}, {
fact: "alternativeAlgo"
} ]
}, {
operator: "AlgorithmStrategyAlgorithmPostListPatchOperator",
type: "replace",
args: [ {
fact: "originalAlgo"
}, {
fact: "alternativeAlgo"
} ]
} ]
}
};
};
e.prototype.getIsTrigger = function() {
return !0;
};
return i([ classId("CTRefactorIsOpenZhiJueToKunNanTrait"), classMethodWatch() ], e);
}(Trait);
r.CTRefactorIsOpenZhiJueToKunNanTrait = a;
cc._RF.pop();
}, {} ]
}, {}, [ "CTRefactorIsOpenZhiJueToKunNanTrait" ]);
//# sourceMappingURL=index.js.map
