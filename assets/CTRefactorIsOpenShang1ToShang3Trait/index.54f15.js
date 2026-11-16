window.__require = function t(e, r, o) {
function n(i, c) {
if (!r[i]) {
if (!e[i]) {
var p = i.split("/");
p = p[p.length - 1];
if (!e[p]) {
var l = "function" == typeof __require && __require;
if (!c && l) return l(p, !0);
if (a) return a(p, !0);
throw new Error("Cannot find module '" + i + "'");
}
i = p;
}
var f = r[i] = {
exports: {}
};
e[i][0].call(f.exports, function(t) {
return n(e[i][1][t] || t);
}, f, f.exports, t, e, r, o);
}
return r[i].exports;
}
for (var a = "function" == typeof __require && __require, i = 0; i < o.length; i++) n(o[i]);
return n;
}({
CTRefactorIsOpenShang1ToShang3Trait: [ function(t, e, r) {
"use strict";
cc._RF.push(e, "f94cd1C9bZHhZGb1CvNjYJR", "CTRefactorIsOpenShang1ToShang3Trait");
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
}), a = this && this.__decorate || function(t, e, r, o) {
var n, a = arguments.length, i = a < 3 ? e : null === o ? o = Object.getOwnPropertyDescriptor(e, r) : o;
if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) i = Reflect.decorate(t, e, r, o); else for (var c = t.length - 1; c >= 0; c--) (n = t[c]) && (i = (a < 3 ? n(i) : a > 3 ? n(e, r, i) : n(e, r)) || i);
return a > 3 && i && Object.defineProperty(e, r, i), i;
};
Object.defineProperty(r, "__esModule", {
value: !0
});
r.CTRefactorIsOpenShang1ToShang3Trait = void 0;
var i = function(t) {
n(e, t);
function e() {
return null !== t && t.apply(this, arguments) || this;
}
Object.defineProperty(e.prototype, "originalAlgorithm", {
get: function() {
return hs.traitConfigSafePropsInfo.getSafePropValueByKey("IsOpenShang1ToShang3Trait", "originalAlgorithm", this.props, hs.OFFER_TYPE_SHANG.SHANG_ZENG_1);
},
enumerable: !1,
configurable: !0
});
Object.defineProperty(e.prototype, "alternativeAlgorithm", {
get: function() {
return hs.traitConfigSafePropsInfo.getSafePropValueByKey("IsOpenShang1ToShang3Trait", "alternativeAlgorithm", this.props, hs.OFFER_TYPE_SHANG.SHANG_ZENG_3);
},
enumerable: !1,
configurable: !0
});
e.prototype.onPreprocessConditionContext = function() {
var t = this;
return buildLazyConditionContext({
originalAlgo: function() {
return ASContext(t.originalAlgorithm, "被替换的算法");
},
alternativeAlgo: function() {
return ASContext(t.alternativeAlgorithm, "替换为的算法");
}
});
};
e.prototype.onPreprocessConditions = function() {
return {
base: [ {
conditions: !0,
flow: "replaceShang"
} ]
};
};
e.prototype.onPreprocessActions = function() {
return {
base: {
replaceShang: [ {
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
return a([ classId("CTRefactorIsOpenShang1ToShang3Trait") ], e);
}(Trait);
r.CTRefactorIsOpenShang1ToShang3Trait = i;
cc._RF.pop();
}, {} ]
}, {}, [ "CTRefactorIsOpenShang1ToShang3Trait" ]);
//# sourceMappingURL=index.js.map
