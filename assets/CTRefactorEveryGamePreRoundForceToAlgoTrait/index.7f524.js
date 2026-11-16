window.__require = function e(t, r, o) {
function n(i, u) {
if (!r[i]) {
if (!t[i]) {
var c = i.split("/");
c = c[c.length - 1];
if (!t[c]) {
var l = "function" == typeof __require && __require;
if (!u && l) return l(c, !0);
if (a) return a(c, !0);
throw new Error("Cannot find module '" + i + "'");
}
i = c;
}
var p = r[i] = {
exports: {}
};
t[i][0].call(p.exports, function(e) {
return n(t[i][1][e] || e);
}, p, p.exports, e, t, r, o);
}
return r[i].exports;
}
for (var a = "function" == typeof __require && __require, i = 0; i < o.length; i++) n(o[i]);
return n;
}({
CTRefactorEveryGamePreRoundForceToAlgoTrait: [ function(e, t, r) {
"use strict";
cc._RF.push(t, "432ddW+TtVKOrJj/WWvis7k", "CTRefactorEveryGamePreRoundForceToAlgoTrait");
var o, n = this && this.__extends || (o = function(e, t) {
return (o = Object.setPrototypeOf || {
__proto__: []
} instanceof Array && function(e, t) {
e.__proto__ = t;
} || function(e, t) {
for (var r in t) Object.prototype.hasOwnProperty.call(t, r) && (e[r] = t[r]);
})(e, t);
}, function(e, t) {
o(e, t);
function r() {
this.constructor = e;
}
e.prototype = null === t ? Object.create(t) : (r.prototype = t.prototype, new r());
}), a = this && this.__decorate || function(e, t, r, o) {
var n, a = arguments.length, i = a < 3 ? t : null === o ? o = Object.getOwnPropertyDescriptor(t, r) : o;
if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) i = Reflect.decorate(e, t, r, o); else for (var u = e.length - 1; u >= 0; u--) (n = e[u]) && (i = (a < 3 ? n(i) : a > 3 ? n(t, r, i) : n(t, r)) || i);
return a > 3 && i && Object.defineProperty(t, r, i), i;
}, i = this && this.__read || function(e, t) {
var r = "function" == typeof Symbol && e[Symbol.iterator];
if (!r) return e;
var o, n, a = r.call(e), i = [];
try {
for (;(void 0 === t || t-- > 0) && !(o = a.next()).done; ) i.push(o.value);
} catch (e) {
n = {
error: e
};
} finally {
try {
o && !o.done && (r = a.return) && r.call(a);
} finally {
if (n) throw n.error;
}
}
return i;
}, u = this && this.__spread || function() {
for (var e = [], t = 0; t < arguments.length; t++) e = e.concat(i(arguments[t]));
return e;
};
Object.defineProperty(r, "__esModule", {
value: !0
});
r.CTRefactorEveryGamePreRoundForceToAlgoTrait = void 0;
var c = function(e) {
n(t, e);
function t() {
return null !== e && e.apply(this, arguments) || this;
}
Object.defineProperty(t.prototype, "startRound", {
get: function() {
return hs.traitConfigSafePropsInfo.getSafePropValueByKey("EveryGamePreRoundForceToAlgoTrait", "StartRound", this.props, 0);
},
enumerable: !1,
configurable: !0
});
Object.defineProperty(t.prototype, "endRound", {
get: function() {
return hs.traitConfigSafePropsInfo.getSafePropValueByKey("EveryGamePreRoundForceToAlgoTrait", "EndRound", this.props, 3);
},
enumerable: !1,
configurable: !0
});
Object.defineProperty(t.prototype, "algo", {
get: function() {
return hs.traitConfigSafePropsInfo.getSafePropValueByKey("EveryGamePreRoundForceToAlgoTrait", "Algo", this.props, 1);
},
enumerable: !1,
configurable: !0
});
Object.defineProperty(t.prototype, "replaceAlgoId", {
get: function() {
return hs.traitConfigSafePropsInfo.getSafePropValueByKey("EveryGamePreRoundForceToAlgoTrait", "replaceAlgoId", this.props, null);
},
enumerable: !1,
configurable: !0
});
t.prototype.getAlgoMappingList = function() {
var e = [];
switch (this.algo) {
case 1:
e = [ hs.OFFER_TYPE_BLANK.TIAN_KONG_XIAO_CHU ];
break;

case 2:
e = [ hs.OFFER_TYPE_BLANK.TRAVEL_TIAN_KONG_XIAO_CHU ];
break;

case 3:
e = [ hs.OFFER_TYPE_BLANK.ALGO_FILL_MORE_AREA ];
break;

case 4:
e = [ hs.OFFER_TYPE_BLANK.ALGO_QUICK, hs.OFFER_TYPE_BLANK.ALGO_QUICK, hs.OFFER_TYPE_BLANK.ALGO_QUICK ];
break;

case 5:
e = [ hs.OFFER_TYPE_BLANK.ALGO_MIX_TKXC ];
break;

case 6:
e = [ hs.OFFER_TYPE_BLANK.TIAN_KONG_XIAO_CHU ];
}
this.replaceAlgoId && (e = u(this.replaceAlgoId));
return e;
};
t.prototype.targetReturnFalse = function() {
return 6 === this.algo;
};
t.prototype.onPreprocessConditionContext = function() {
var e = this, t = !this.targetReturnFalse();
return buildLazyConditionContext({
roundNumContext: function() {
return ASContext(hs.classGameInfo.roundNum, "当前轮次");
},
startRoundContext: function() {
return ASContext(e.startRound, "开始轮次");
},
endRoundContext: function() {
return ASContext(e.endRound, "结束轮次");
},
algoMappingListContext: function() {
return ASContext(e.getAlgoMappingList(), "需要替换的算法列表");
},
isReturnStateContext: function() {
return ASContext(t, "是否屏蔽后续特性");
}
});
};
t.prototype.onPreprocessConditions = function() {
return {
mutex: {
AlgoTrait: [ {
conditions: {
and: [ {
fact: "roundNumContext",
operator: ">=",
value: {
fact: "startRoundContext"
}
}, {
fact: "roundNumContext",
operator: "<=",
value: {
fact: "endRoundContext"
}
}, {
fact: "isReturnStateContext",
operator: "=",
value: !0
} ]
},
event: {
type: "markEveryGamePreRoundForceToAlgoSource"
},
flow: "forceAlgorithmAndReplace1",
platform: "gp"
}, {
conditions: {
and: [ {
fact: "roundNumContext",
operator: ">=",
value: {
fact: "startRoundContext"
}
}, {
fact: "roundNumContext",
operator: "<=",
value: {
fact: "endRoundContext"
}
}, {
fact: "isReturnStateContext",
operator: "=",
value: !1
} ]
},
event: {
type: "markEveryGamePreRoundForceToAlgoSource"
},
flow: "forceAlgorithmAndReplace2",
platform: "gp"
} ]
}
};
};
t.prototype.onPreprocessActions = function() {
return {
mutex: {
AlgoTrait: {
forceAlgorithmAndReplace1: [ {
operator: "AlgorithmStrategyAlgorithmListOperator",
type: "replaceAll",
args: [ {
fact: "algoMappingListContext"
} ]
}, {
operator: "AlgorithmStrategyReturnOperator",
type: "returnState"
} ],
forceAlgorithmAndReplace2: [ {
operator: "AlgorithmStrategyAlgorithmListOperator",
type: "replaceAll",
args: [ {
fact: "algoMappingListContext"
} ]
} ]
}
}
};
};
t.prototype.markEveryGamePreRoundForceToAlgoSource = function() {
hs.algorithmStrategyLevelRefactoredInfo.setAlgorithmSourceLevel1(hs.ClassAlgorithmSourceType.AlgoTrait);
};
return a([ classId("CTRefactorEveryGamePreRoundForceToAlgoTrait") ], t);
}(Trait);
r.CTRefactorEveryGamePreRoundForceToAlgoTrait = c;
cc._RF.pop();
}, {} ]
}, {}, [ "CTRefactorEveryGamePreRoundForceToAlgoTrait" ]);
//# sourceMappingURL=index.js.map
