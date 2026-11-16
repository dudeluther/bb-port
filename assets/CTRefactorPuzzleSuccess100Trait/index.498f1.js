window.__require = function t(e, r, o) {
function i(a, n) {
if (!r[a]) {
if (!e[a]) {
var l = a.split("/");
l = l[l.length - 1];
if (!e[l]) {
var u = "function" == typeof __require && __require;
if (!n && u) return u(l, !0);
if (c) return c(l, !0);
throw new Error("Cannot find module '" + a + "'");
}
a = l;
}
var s = r[a] = {
exports: {}
};
e[a][0].call(s.exports, function(t) {
return i(e[a][1][t] || t);
}, s, s.exports, t, e, r, o);
}
return r[a].exports;
}
for (var c = "function" == typeof __require && __require, a = 0; a < o.length; a++) i(o[a]);
return i;
}({
CTRefactorPuzzleSuccess100Trait: [ function(t, e, r) {
"use strict";
cc._RF.push(e, "188572w/QZIZYvjOZ6eMtcT", "CTRefactorPuzzleSuccess100Trait");
var o, i = this && this.__extends || (o = function(t, e) {
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
}), c = this && this.__decorate || function(t, e, r, o) {
var i, c = arguments.length, a = c < 3 ? e : null === o ? o = Object.getOwnPropertyDescriptor(e, r) : o;
if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) a = Reflect.decorate(t, e, r, o); else for (var n = t.length - 1; n >= 0; n--) (i = t[n]) && (a = (c < 3 ? i(a) : c > 3 ? i(e, r, a) : i(e, r)) || a);
return c > 3 && a && Object.defineProperty(e, r, a), a;
};
Object.defineProperty(r, "__esModule", {
value: !0
});
r.CTRefactorPuzzleSuccess100Trait = void 0;
var a = function(t) {
i(e, t);
function e() {
return null !== t && t.apply(this, arguments) || this;
}
e.prototype.data = function() {
return {
cloesed: !1
};
};
Object.defineProperty(e.prototype, "highScoreMultiple", {
get: function() {
var t = hs.traitConfigSafePropsInfo.getSafePropValueByKey("PuzzleSuccess100Trait", "highScoreMultiple", this.props, 0);
return Number(t.toFixed(2));
},
enumerable: !1,
configurable: !0
});
e.prototype.getAlgo = function() {
return hs.traitConfigSafePropsInfo.getSafePropValueByKey("PuzzleSuccess100Trait", "algo", this.props, hs.OFFER_TYPE.KUN_NAN_TI);
};
e.prototype.onAlgorithmStrategyRoundInit = function() {
this.highScoreMultiple <= 0 || storage.setItem("puzzleSuccess100Trait_highScore", hs.classScoreInfo.highScore);
};
e.prototype.checkCloseState = function() {
return !1;
};
e.prototype.checkHighScoreMultiple = function() {
if (this.highScoreMultiple <= 0) return !0;
if (hs.classGameInfo.gameNum <= 0) return !0;
try {
var t = TRAIT("CTRefactorPuzzleTiming100Trait"), e = TRAIT("CTRefactorPuzzleFail100Trait"), r = TRAIT("CTRefactorPuzzleTimingMaxPriorityTrait");
if ((null == t ? void 0 : t.active) && (null == e ? void 0 : e.active) && (null == r ? void 0 : r.active)) {
var o = storage.getItem("puzzleSuccess100Trait_highScore", 0) * this.highScoreMultiple;
return hs.classScoreInfo.score >= o;
}
} catch (t) {}
return !0;
};
e.prototype.isTriggerByTrait = function(t) {
return t;
};
e.prototype.isPriority = function(t) {
return t;
};
e.prototype.onPreprocessConditionContext = function() {
var t = this, e = this.isTriggerByTrait(hs.algorithmStrategyLevelRefactoredInfo.algorithmSourceLevel1 === hs.ClassAlgorithmSourceType.Puzzle100), r = e ? this.replaceAlgorithm(this.getAlgo(), this.traitName) : this.getAlgo();
return buildLazyConditionContext({
checkCloseState: function() {
return ASContext(t.checkCloseState(), "检测关闭状态");
},
checkHighScoreMultiple: function() {
return ASContext(t.checkHighScoreMultiple(), "最高分数倍数检测");
},
isTriggerByTrait: function() {
return ASContext(e, "外部 Trait 是否允许触发致死题");
},
algo: function() {
return ASContext(r, "最高分数倍数检测");
},
isReplaceByPriority: function() {
return ASContext(t.isPriority(!1), "MAB老虎机是否走最高优先级");
}
});
};
e.prototype.replaceAlgorithm = function(t, e) {
as.AlgorithmStrategyAlgoExpectedIdPatch.patch(hs.OFFER_TYPE_BASE.NONE, this);
as.AlgorithmStrategyAlgoExpectedIdPatch.patch(t, this);
hs.algorithmStrategyLevelRefactoredInfo.setAlgorithmSourceLevel2(e);
return t;
};
e.prototype.onPreprocessConditions = function() {
return {
mutex: {
Puzzle100: [ {
conditions: {
and: [ {
fact: "checkCloseState",
operator: "=",
value: !1
}, {
fact: "checkHighScoreMultiple",
operator: "=",
value: !0
}, {
fact: "isTriggerByTrait",
operator: "=",
value: !0
}, {
fact: "isReplaceByPriority",
operator: "=",
value: !0
} ]
},
event: {
type: "isReplaceByPriority_MAB"
},
flow: "flowPriority"
}, {
conditions: {
and: [ {
fact: "checkCloseState",
operator: "=",
value: !1
}, {
fact: "checkHighScoreMultiple",
operator: "=",
value: !0
}, {
fact: "isTriggerByTrait",
operator: "=",
value: !0
} ]
},
flow: "flow1"
} ]
}
};
};
e.prototype.onPreprocessActions = function() {
return {
mutex: {
Puzzle100: {
flow1: [ {
operator: "AlgorithmStrategyAlgorithmListOperator",
type: "replaceAll",
args: [ {
fact: "algo"
} ]
} ],
flowPriority: [ {
operator: "AlgorithmStrategyAlgorithmPriorityListOperator",
type: "replaceAll",
args: [ {
fact: "algo"
} ]
} ]
}
}
};
};
e.prototype.isReplaceByPriority_MAB = function() {
hs.algorithmStrategyLevelRefactoredInfo.algorithmSourceLevel1 == hs.ClassAlgorithmSourceType.PuzzleNone && as.AlgorithmStrategyAlgoPreprocessMutexRouterChangedPatch.patch("CTRefactorPuzzleSuccess100Trait", this);
};
return c([ classId("CTRefactorPuzzleSuccess100Trait"), classMethodWatch() ], e);
}(Trait);
r.CTRefactorPuzzleSuccess100Trait = a;
cc._RF.pop();
}, {} ]
}, {}, [ "CTRefactorPuzzleSuccess100Trait" ]);
//# sourceMappingURL=index.js.map
