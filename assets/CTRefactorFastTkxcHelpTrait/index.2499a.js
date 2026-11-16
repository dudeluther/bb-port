window.__require = function t(r, e, o) {
function _(A, i) {
if (!e[A]) {
if (!r[A]) {
var s = A.split("/");
s = s[s.length - 1];
if (!r[s]) {
var O = "function" == typeof __require && __require;
if (!i && O) return O(s, !0);
if (a) return a(s, !0);
throw new Error("Cannot find module '" + A + "'");
}
A = s;
}
var n = e[A] = {
exports: {}
};
r[A][0].call(n.exports, function(t) {
return _(r[A][1][t] || t);
}, n, n.exports, t, r, e, o);
}
return e[A].exports;
}
for (var a = "function" == typeof __require && __require, A = 0; A < o.length; A++) _(o[A]);
return _;
}({
CTRefactorFastTkxcHelpTrait: [ function(t, r, e) {
"use strict";
cc._RF.push(r, "f190eVkAoNP7roiFf4bRoFr", "CTRefactorFastTkxcHelpTrait");
var o, _ = this && this.__extends || (o = function(t, r) {
return (o = Object.setPrototypeOf || {
__proto__: []
} instanceof Array && function(t, r) {
t.__proto__ = r;
} || function(t, r) {
for (var e in r) Object.prototype.hasOwnProperty.call(r, e) && (t[e] = r[e]);
})(t, r);
}, function(t, r) {
o(t, r);
function e() {
this.constructor = t;
}
t.prototype = null === r ? Object.create(r) : (e.prototype = r.prototype, new e());
}), a = this && this.__decorate || function(t, r, e, o) {
var _, a = arguments.length, A = a < 3 ? r : null === o ? o = Object.getOwnPropertyDescriptor(r, e) : o;
if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) A = Reflect.decorate(t, r, e, o); else for (var i = t.length - 1; i >= 0; i--) (_ = t[i]) && (A = (a < 3 ? _(A) : a > 3 ? _(r, e, A) : _(r, e)) || A);
return a > 3 && A && Object.defineProperty(r, e, A), A;
};
Object.defineProperty(e, "__esModule", {
value: !0
});
e.CTRefactorFastTkxcHelpTrait = void 0;
var A = function(t) {
_(r, t);
function r() {
var r = null !== t && t.apply(this, arguments) || this;
r._weightAry = [ 300, 400 ];
return r;
}
r.prototype.onPreprocessConditionContext = function() {
var t = this;
return buildLazyConditionContext({
weightAry0: function() {
return ASContext(t._weightAry[0], "第一段权重");
},
weightAry1: function() {
return ASContext(t._weightAry[1], "第二段权重");
}
});
};
r.prototype.onPreprocessConditions = function() {
return {
blankAlgorithm: [ {
conditions: {
and: [ {
fact: "weight",
operator: "<=",
value: {
fact: "weightAry0"
}
} ]
},
gameMode: "class",
flow: "flowClass0"
}, {
conditions: {
and: [ {
fact: "weight",
operator: "~",
value: [ {
fact: "weightAry0"
}, {
fact: "weightAry1"
} ]
} ]
},
gameMode: "class",
flow: "flowClass1"
}, {
conditions: {
and: [ {
fact: "weight",
operator: "<=",
value: {
fact: "weightAry0"
}
} ]
},
gameMode: "journey",
flow: "flowChapter0"
}, {
conditions: {
and: [ {
fact: "weight",
operator: "~",
value: [ {
fact: "weightAry0"
}, {
fact: "weightAry1"
} ]
} ]
},
gameMode: "journey",
flow: "flowChapter1"
} ]
};
};
r.prototype.onPreprocessActions = function() {
return {
blankAlgorithm: {
flowClass0: [ {
operator: "AlgorithmStrategyAlgorithmListOperator",
type: "replace",
args: [ hs.OFFER_TYPE_BLANK.TIAN_KONG_XIAO_CHU, hs.OFFER_TYPE_BLANK.ALGO_QUICK ]
}, {
operator: "AlgorithmStrategyAlgorithmFallbackListOperator",
type: "replace",
args: [ hs.OFFER_TYPE_BLANK.TIAN_KONG_XIAO_CHU, hs.OFFER_TYPE_BLANK.ALGO_QUICK ]
}, {
operator: "AlgorithmStrategyAlgorithmPostListPatchOperator",
type: "replace",
args: [ hs.OFFER_TYPE_BLANK.TIAN_KONG_XIAO_CHU, hs.OFFER_TYPE_BLANK.ALGO_QUICK ]
} ],
flowClass1: [ {
operator: "AlgorithmStrategyAlgorithmListOperator",
type: "replace",
args: [ hs.OFFER_TYPE_BLANK.TIAN_KONG_XIAO_CHU, hs.OFFER_TYPE_BLANK.ALGO_MIX_TKXC ]
}, {
operator: "AlgorithmStrategyAlgorithmFallbackListOperator",
type: "replace",
args: [ hs.OFFER_TYPE_BLANK.TIAN_KONG_XIAO_CHU, hs.OFFER_TYPE_BLANK.ALGO_MIX_TKXC ]
}, {
operator: "AlgorithmStrategyAlgorithmPostListPatchOperator",
type: "replace",
args: [ hs.OFFER_TYPE_BLANK.TIAN_KONG_XIAO_CHU, hs.OFFER_TYPE_BLANK.ALGO_MIX_TKXC ]
} ],
flowChapter0: [ {
operator: "AlgorithmStrategyAlgorithmListOperator",
type: "replace",
args: [ [ hs.OFFER_TYPE_BLANK.TRAVEL_TIAN_KONG_XIAO_CHU, hs.OFFER_TYPE_BLANK.TIAN_KONG_XIAO_CHU, hs.OFFER_TYPE_BLANK.TRAVEL_FILL_FUNCTION_BIT ], hs.OFFER_TYPE_BLANK.ALGO_QUICK ]
}, {
operator: "AlgorithmStrategyAlgorithmFallbackListOperator",
type: "replace",
args: [ [ hs.OFFER_TYPE_BLANK.TRAVEL_TIAN_KONG_XIAO_CHU, hs.OFFER_TYPE_BLANK.TIAN_KONG_XIAO_CHU, hs.OFFER_TYPE_BLANK.TRAVEL_FILL_FUNCTION_BIT ], hs.OFFER_TYPE_BLANK.ALGO_QUICK ]
}, {
operator: "AlgorithmStrategyAlgorithmPostListPatchOperator",
type: "replace",
args: [ [ hs.OFFER_TYPE_BLANK.TRAVEL_TIAN_KONG_XIAO_CHU, hs.OFFER_TYPE_BLANK.TIAN_KONG_XIAO_CHU, hs.OFFER_TYPE_BLANK.TRAVEL_FILL_FUNCTION_BIT ], hs.OFFER_TYPE_BLANK.ALGO_QUICK ]
} ],
flowChapter1: [ {
operator: "AlgorithmStrategyAlgorithmListOperator",
type: "replace",
args: [ [ hs.OFFER_TYPE_BLANK.TRAVEL_TIAN_KONG_XIAO_CHU, hs.OFFER_TYPE_BLANK.TIAN_KONG_XIAO_CHU, hs.OFFER_TYPE_BLANK.TRAVEL_FILL_FUNCTION_BIT ], hs.OFFER_TYPE_BLANK.ALGO_MIX_TKXC ]
}, {
operator: "AlgorithmStrategyAlgorithmFallbackListOperator",
type: "replace",
args: [ [ hs.OFFER_TYPE_BLANK.TRAVEL_TIAN_KONG_XIAO_CHU, hs.OFFER_TYPE_BLANK.TIAN_KONG_XIAO_CHU, hs.OFFER_TYPE_BLANK.TRAVEL_FILL_FUNCTION_BIT ], hs.OFFER_TYPE_BLANK.ALGO_MIX_TKXC ]
}, {
operator: "AlgorithmStrategyAlgorithmPostListPatchOperator",
type: "replace",
args: [ [ hs.OFFER_TYPE_BLANK.TRAVEL_TIAN_KONG_XIAO_CHU, hs.OFFER_TYPE_BLANK.TIAN_KONG_XIAO_CHU, hs.OFFER_TYPE_BLANK.TRAVEL_FILL_FUNCTION_BIT ], hs.OFFER_TYPE_BLANK.ALGO_MIX_TKXC ]
} ]
}
};
};
return a([ classId("CTRefactorFastTkxcHelpTrait") ], r);
}(Trait);
e.CTRefactorFastTkxcHelpTrait = A;
cc._RF.pop();
}, {} ]
}, {}, [ "CTRefactorFastTkxcHelpTrait" ]);
//# sourceMappingURL=index.js.map
