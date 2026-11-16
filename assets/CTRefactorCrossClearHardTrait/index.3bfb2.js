window.__require = function t(r, e, o) {
function a(n, s) {
if (!e[n]) {
if (!r[n]) {
var u = n.split("/");
u = u[u.length - 1];
if (!r[u]) {
var c = "function" == typeof __require && __require;
if (!s && c) return c(u, !0);
if (i) return i(u, !0);
throw new Error("Cannot find module '" + n + "'");
}
n = u;
}
var p = e[n] = {
exports: {}
};
r[n][0].call(p.exports, function(t) {
return a(r[n][1][t] || t);
}, p, p.exports, t, r, e, o);
}
return e[n].exports;
}
for (var i = "function" == typeof __require && __require, n = 0; n < o.length; n++) a(o[n]);
return a;
}({
CTRefactorCrossClearHardTrait: [ function(t, r, e) {
"use strict";
cc._RF.push(r, "5ae26NRHbhC3bCvq4RcA88l", "CTRefactorCrossClearHardTrait");
var o, a = this && this.__extends || (o = function(t, r) {
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
}), i = this && this.__decorate || function(t, r, e, o) {
var a, i = arguments.length, n = i < 3 ? r : null === o ? o = Object.getOwnPropertyDescriptor(r, e) : o;
if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) n = Reflect.decorate(t, r, e, o); else for (var s = t.length - 1; s >= 0; s--) (a = t[s]) && (n = (i < 3 ? a(n) : i > 3 ? a(r, e, n) : a(r, e)) || n);
return i > 3 && n && Object.defineProperty(r, e, n), n;
};
Object.defineProperty(e, "__esModule", {
value: !0
});
e.CTRefactorCrossClearHardTrait = void 0;
var n = function(t) {
a(r, t);
function r() {
return null !== t && t.apply(this, arguments) || this;
}
r.prototype.ensureFirstTime = function(t) {
if (!t.firstTime || t.firstTime <= 0) {
t.firstTime = hs.algorithmBetaRandomInfo.samplePuzzleFirstTimeSeconds(128, .8, 2.4);
storage.setItem("CrossClearHard", t);
}
};
r.prototype.ensureInitTime = function(t) {
if (!t.initTime || t.initTime <= 0) {
t.initTime = Date.now();
storage.setItem("CrossClearHard", t);
}
};
r.prototype.isHardOfferNow = function() {
try {
var t = hs.algorithmName.algoExpectedId, r = (hs.algorithmName.algoActualName || [])[0] || "";
if (r.includes("复活")) return !1;
if (Object.values(hs.OFFER_TYPE_DIFFICULTY).includes(t)) return !0;
if ("string" == typeof r && -1 !== r.indexOf("难题")) return !0;
} catch (t) {}
return !1;
};
r.prototype.isHardActualNow = function() {
try {
var t = (hs.algorithmName.algoActualName || [])[0] || "";
return !t.includes("复活") && (!t.includes("消两次") && ("string" == typeof t && -1 !== t.indexOf("难题")));
} catch (t) {
return !1;
}
};
r.prototype.computeReplaceProb = function(t) {
var r = 1 - Math.exp(-.11 * (t + 3));
return Math.max(0, Math.min(1, r));
};
Object.defineProperty(r.prototype, "algo_id", {
get: function() {
return this.props.algo_id ? this.props.algo_id : hs.OFFER_TYPE.CROSS_CLEAR_HARD;
},
enumerable: !1,
configurable: !0
});
r.prototype.isReplaceVaildate = function() {
var t = storage.getItem("CrossClearHard", {
hardCount: 0,
firstTime: 0,
pendingMinus: !1
});
if (!this.isHardOfferNow()) return !1;
var r = this.computeReplaceProb(t.hardCount);
return !(Math.random() >= r);
};
r.prototype.isLockTarit = function() {
return !1;
};
r.prototype.breakTrait = function() {
return !1;
};
r.prototype.hasCrossClearHardInPostprocessList = function(t) {
var r, e = this.algo_id;
return (null !== (r = null == t ? void 0 : t.postAlgorithmList) && void 0 !== r ? r : []).some(function(t) {
return t.algorithmId === e;
});
};
r.prototype.isClassRevive_ProxyOnRevive_Success = function() {
var t = storage.getItem("CrossClearHard", {
hardCount: 0,
firstTime: 0,
pendingMinus: !1
});
if (t.pendingMinus && t.hardCount > 0) {
t.hardCount = t.hardCount - 1;
t.pendingMinus = !1;
storage.setItem("CrossClearHard", t);
}
};
r.prototype.onPostprocessConditionContext = function(t) {
var r = this, e = this.isReplaceVaildate(), o = this.hasCrossClearHardInPostprocessList(t);
return buildLazyConditionContext({
breakTrait: function() {
return ASContext(r.breakTrait(), "外部 Trait 是否拦截十字消除难题");
},
canPushCrossClearHard: function() {
return ASContext(e, "是否推送十字消除难题");
},
hasCrossClearHard: function() {
return ASContext(o, "当前列表是否已包含十字消除难题");
},
crossClearHardId: function() {
return ASContext(r.shouldReplaceAlgorithm(r.algo_id), "十字消除难题算法ID");
}
});
};
r.prototype.onPostprocessConditions = function() {
return [ {
conditions: {
and: [ {
fact: "breakTrait",
operator: "=",
value: !1
}, {
fact: "canPushCrossClearHard",
operator: "=",
value: !0
}, {
fact: "hasCrossClearHard",
operator: "=",
value: !1
} ]
},
flow: "pushCrossClearHard",
gameMode: "class",
platform: "gp"
} ];
};
r.prototype.onPostprocessActions = function() {
return {
pushCrossClearHard: [ {
operator: "AlgorithmStrategyAlgorithmListOperator",
type: "replaceAll",
args: [ {
fact: "crossClearHardId"
} ]
}, {
operator: "AlgorithmStrategyReturnOperator",
type: "returnState",
args: [ as.AlgorithmStrategyReturnStateProcessType.POST_SDK_REQUEST_SUCCESS ]
}, {
operator: "AlgorithmStrategyDisableOperator",
type: "disablePostRestTags",
args: [ !0 ]
} ]
};
};
r.prototype.onAlgorithmStrategyPostprocessComplete = function() {
var t = storage.getItem("CrossClearHard", {
hardCount: 0,
firstTime: 0,
pendingMinus: !1
});
if (this.isHardActualNow()) {
t.hardCount = (t.hardCount || 0) + 1;
t.pendingMinus = !0;
storage.setItem("CrossClearHard", t);
}
};
r.prototype.onAlgorithmStrategyGameNewInit = function(t) {
if ("preprocessing_PuzzleTime" === t) {
var r = storage.getItem("CrossClearHard", {
hardCount: 0,
firstTime: 0,
pendingMinus: !1
});
r.hardCount = 0;
r.pendingMinus = !1;
r.initTime = Date.now();
r.firstTime = 0;
this.ensureFirstTime(r);
storage.setItem("CrossClearHard", r);
}
};
r.prototype.onAlgorithmStrategyGameInit = function(t) {
if ("preprocessing_PuzzleTime" === t) {
var r = storage.getItem("CrossClearHard", {
hardCount: 0,
firstTime: 0,
pendingMinus: !1
});
this.ensureInitTime(r);
var e = TRAIT("CTRefactorIsPuzzleTimeTrait");
if (null == e ? void 0 : e.active) {
this.ensureFirstTime(r);
e.state.puzzleTimeFirst = Math.round(r.firstTime);
}
}
};
r.prototype.shouldReplaceAlgorithm = function(t) {
return t;
};
return i([ classId("CTRefactorCrossClearHardTrait"), classMethodWatch() ], r);
}(Trait);
e.CTRefactorCrossClearHardTrait = n;
cc._RF.pop();
}, {} ]
}, {}, [ "CTRefactorCrossClearHardTrait" ]);
//# sourceMappingURL=index.js.map
