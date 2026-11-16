window.__require = function e(t, o, n) {
function r(i, s) {
if (!o[i]) {
if (!t[i]) {
var u = i.split("/");
u = u[u.length - 1];
if (!t[u]) {
var c = "function" == typeof __require && __require;
if (!s && c) return c(u, !0);
if (a) return a(u, !0);
throw new Error("Cannot find module '" + i + "'");
}
i = u;
}
var f = o[i] = {
exports: {}
};
t[i][0].call(f.exports, function(e) {
return r(t[i][1][e] || e);
}, f, f.exports, e, t, o, n);
}
return o[i].exports;
}
for (var a = "function" == typeof __require && __require, i = 0; i < n.length; i++) r(n[i]);
return r;
}({
CTRefactorOpenChangeContinueHardTrait: [ function(e, t, o) {
"use strict";
cc._RF.push(t, "e3f1ed7wSlFkZZD9lNy2aQT", "CTRefactorOpenChangeContinueHardTrait");
var n, r = this && this.__extends || (n = function(e, t) {
return (n = Object.setPrototypeOf || {
__proto__: []
} instanceof Array && function(e, t) {
e.__proto__ = t;
} || function(e, t) {
for (var o in t) Object.prototype.hasOwnProperty.call(t, o) && (e[o] = t[o]);
})(e, t);
}, function(e, t) {
n(e, t);
function o() {
this.constructor = e;
}
e.prototype = null === t ? Object.create(t) : (o.prototype = t.prototype, new o());
}), a = this && this.__decorate || function(e, t, o, n) {
var r, a = arguments.length, i = a < 3 ? t : null === n ? n = Object.getOwnPropertyDescriptor(t, o) : n;
if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) i = Reflect.decorate(e, t, o, n); else for (var s = e.length - 1; s >= 0; s--) (r = e[s]) && (i = (a < 3 ? r(i) : a > 3 ? r(t, o, i) : r(t, o)) || i);
return a > 3 && i && Object.defineProperty(t, o, i), i;
};
Object.defineProperty(o, "__esModule", {
value: !0
});
o.CTRefactorOpenChangeContinueHardTrait = void 0;
var i = function(e) {
r(t, e);
function t() {
var t = null !== e && e.apply(this, arguments) || this;
t.isTkXiaoChuSuccess = !1;
return t;
}
Object.defineProperty(t.prototype, "consecutiveTimes", {
get: function() {
return hs.traitConfigSafePropsInfo.getSafePropValueByKey("OpenChangeContinueHardTrait", "consecutiveTimes", this.props, 2);
},
enumerable: !1,
configurable: !0
});
Object.defineProperty(t.prototype, "replaceAlgorithm", {
get: function() {
return hs.traitConfigSafePropsInfo.getSafePropValueByKey("OpenChangeContinueHardTrait", "replaceAlgorithm", this.props, hs.OFFER_TYPE.TRAVEL_TIAN_KONG_XIAO_CHU);
},
enumerable: !1,
configurable: !0
});
t.prototype.loadState = function() {
return hs.storage.getItem("OpenChangeContinueHardTraitState", {}) || {};
};
t.prototype.saveState = function(e) {
hs.storage.setItem("OpenChangeContinueHardTraitState", e);
};
t.prototype.isCountReached = function() {
return (this.loadState().hardSuccessContinueNum || 0) == this.consecutiveTimes;
};
t.prototype.isCountExceeded = function() {
return (this.loadState().hardSuccessContinueNum || 0) == this.consecutiveTimes + 1;
};
t.prototype.isCurrentAlgoRandomOrShang3 = function() {
var e = hs.algorithmName.algoActualName;
return e.every(function(e) {
return e == hs.ALGO_NAME_TYPE.NAME_RANDOM;
}) || e.every(function(e) {
return e == hs.ALGO_NAME_TYPE.NAME_SHANG3;
});
};
t.prototype.onAlgorithmStrategyGameNewInit = function() {
if (hs.gameInfo.gameMode == hs.GameMode.Class) {
var e = hs.storage.getItem("classGameNum", 0), t = this.loadState();
t.gameNum = e;
t.lastRoundNum = null;
t.hardSuccessContinueNum = 0;
this.saveState(t);
}
};
t.prototype.onAlgorithmStrategySDKComplete = function(e) {
var t;
if (hs.gameInfo.gameMode == hs.GameMode.Class && e) {
var o = hs.storage.getItem("classGameNum", 0), n = hs.storage.getItem("classRoundNum", 0), r = this.loadState(), a = !1;
if (r.gameNum != o) {
r.gameNum = o;
r.lastRoundNum = null;
r.hardSuccessContinueNum = 0;
a = !0;
}
if (r.lastRoundNum != n && (null === (t = hs.algorithmName.algoActualName[0]) || void 0 === t ? void 0 : t.includes("难题"))) {
r.hardSuccessContinueNum = (r.hardSuccessContinueNum || 0) + 1;
r.lastRoundNum = n;
a = !0;
}
a && this.saveState(r);
}
};
t.prototype.onPostSdkResult = function() {
hs.gameInfo.gameMode, hs.GameMode.Class;
};
t.prototype.onAlgorithmStrategyPostprocessComplete = function() {
hs.gameInfo.gameMode, hs.GameMode.Class;
};
t.prototype.isSkipAlgorithm = function() {
return !1;
};
t.prototype.onPostprocessConditionContext = function(e) {
var t = this;
if (hs.gameInfo.gameMode != hs.GameMode.Class) return buildLazyConditionContext({});
var o = this.isCountReached(), n = this.isCountExceeded(), r = this.isCurrentAlgoRandomOrShang3(), a = o && r || n, i = !this.isSkipAlgorithm() && a ? [ this.replaceAlgorithm ] : [];
if (a) {
var s;
(s = this.loadState()).hardSuccessContinueNum = 0;
this.saveState(s);
if (!this.isSkipAlgorithm()) {
as.AlgorithmStrategyAlgoExpectedIdPatch.patch(hs.OFFER_TYPE_BASE.NONE, this);
as.AlgorithmStrategyAlgoExpectedIdPatch.patch(hs.OFFER_TYPE_BLANK.TIAN_KONG_XIAO_CHU, this);
this.isTkXiaoChuSuccess = !0;
}
}
return buildLazyConditionContext({
canRunAfterOffer: function() {
return ASContext(t.canRunAfterOffer(e), "是否可运行 After 后置段");
},
isCountReached: function() {
return ASContext(o, "连续难题次数==阈值N");
},
isCountExceeded: function() {
return ASContext(n, "连续难题次数==N+1（兜底）");
},
isAlgoRandomOrShang3: function() {
return ASContext(r, "当前算法全部为随机或上3");
},
replaceAlgo: function() {
return ASContext(i, "替换算法ID");
}
});
};
t.prototype.onPostprocessConditions = function() {
return [ {
conditions: {
and: [ {
fact: "canRunAfterOffer",
operator: "=",
value: !0
}, {
fact: "isCountReached",
operator: "=",
value: !0
}, {
fact: "isAlgoRandomOrShang3",
operator: "=",
value: !0
} ]
},
gameMode: "class",
flow: "replaceWithTravel"
}, {
conditions: {
and: [ {
fact: "canRunAfterOffer",
operator: "=",
value: !0
}, {
fact: "isCountExceeded",
operator: "=",
value: !0
} ]
},
gameMode: "class",
flow: "replaceWithTravel"
} ];
};
t.prototype.onPostprocessActions = function() {
return {
replaceWithTravel: [ {
operator: "AlgorithmStrategyAlgorithmListOperator",
type: "push",
args: [ {
fact: "replaceAlgo"
} ]
} ]
};
};
t.prototype.canRunAfterOffer = function() {
return !0;
};
t.TAG = "[CTRefactorOpenChangeContinueHardTrait][连续难题替换]";
return a([ classId("CTRefactorOpenChangeContinueHardTrait"), classMethodWatch() ], t);
}(Trait);
o.CTRefactorOpenChangeContinueHardTrait = i;
cc._RF.pop();
}, {} ]
}, {}, [ "CTRefactorOpenChangeContinueHardTrait" ]);
//# sourceMappingURL=index.js.map
