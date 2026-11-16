window.__require = function e(t, r, o) {
function i(a, l) {
if (!r[a]) {
if (!t[a]) {
var c = a.split("/");
c = c[c.length - 1];
if (!t[c]) {
var u = "function" == typeof __require && __require;
if (!l && u) return u(c, !0);
if (n) return n(c, !0);
throw new Error("Cannot find module '" + a + "'");
}
a = c;
}
var f = r[a] = {
exports: {}
};
t[a][0].call(f.exports, function(e) {
return i(t[a][1][e] || e);
}, f, f.exports, e, t, r, o);
}
return r[a].exports;
}
for (var n = "function" == typeof __require && __require, a = 0; a < o.length; a++) i(o[a]);
return i;
}({
CTRefactorPuzzleTimingMaxPriorityTrait: [ function(e, t, r) {
"use strict";
cc._RF.push(t, "06e20i6HxJBRLtY5b6797D2", "CTRefactorPuzzleTimingMaxPriorityTrait");
var o, i = this && this.__extends || (o = function(e, t) {
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
}), n = this && this.__decorate || function(e, t, r, o) {
var i, n = arguments.length, a = n < 3 ? t : null === o ? o = Object.getOwnPropertyDescriptor(t, r) : o;
if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) a = Reflect.decorate(e, t, r, o); else for (var l = e.length - 1; l >= 0; l--) (i = e[l]) && (a = (n < 3 ? i(a) : n > 3 ? i(t, r, a) : i(t, r)) || a);
return n > 3 && a && Object.defineProperty(t, r, a), a;
};
Object.defineProperty(r, "__esModule", {
value: !0
});
r.CTRefactorPuzzleTimingMaxPriorityTrait = void 0;
var a = function(e) {
i(t, e);
function t() {
return null !== e && e.apply(this, arguments) || this;
}
t.prototype.onAlgorithmStrategySDKBetween = function(e) {
var t = hs.algorithmStrategyLevelRefactoredInfo.algorithmSourceLevel2, r = t === this.traitName || "CTRefactorPuzzleSuccess100Trait" === t, o = hs.algorithmStrategyLevelRefactoredInfo.algorithmSourceLevel1;
r && o === hs.ClassAlgorithmSourceType.Puzzle100 && 3 == e.sdk.blockIds.length && as.AlgorithmStrategyAlgoActualNamePatch.patch([ hs.ALGO_NAME_TYPE.NAME_DIFFICULTY, hs.ALGO_NAME_TYPE.NAME_DIFFICULTY, hs.ALGO_NAME_TYPE.NAME_DIFFICULTY ], this);
};
t.prototype.dealLowHardOfferTimes = function() {
var e = TRAIT("CTRefactorLowHardOfferTimesTrait");
(null == e ? void 0 : e.active) && e.setState({
isTrigger: !1
});
};
t.prototype.markPuzzleTimeFollowStrategyTriggered = function() {
hs.algorithmStrategyLevelRefactoredInfo.setAlgorithmSourceLevel2(this.traitName);
};
t.prototype.onPreprocessConditionContext = function() {
var e = "CTRefactorPuzzleSuccess100Trait" != hs.algorithmStrategyLevelRefactoredInfo.algorithmSourceLevel2 && hs.algorithmStrategyLevelRefactoredInfo.algorithmSourceLevel1 == hs.ClassAlgorithmSourceType.Puzzle100, t = "CTRefactorPuzzleSuccess100Trait" == hs.algorithmStrategyLevelRefactoredInfo.algorithmSourceLevel2 || hs.algorithmStrategyLevelRefactoredInfo.algorithmSourceLevel2 == this.traitName;
return buildLazyConditionContext({
isCanOfferHard: function() {
return ASContext(e, "主列表或 Priority 列表是否含 Puzzle100/本特性");
},
isForbidenLowHard: function() {
return ASContext(t, "主列表或 Priority 列表是否含 PuzzleSuccess100");
}
});
};
t.prototype.onPreprocessConditions = function() {
return {
mutex: {
Puzzle100: [ {
conditions: {
fact: "isCanOfferHard",
operator: "=",
value: !0
},
event: {
type: "markPuzzleTimeFollowStrategyTriggered"
},
flow: "flow1"
} ]
},
postPreprocessing: [ {
conditions: {
fact: "isForbidenLowHard",
operator: "=",
value: !0
},
event: {
type: "dealLowHardOfferTimes"
},
flow: "flow2"
} ]
};
};
t.prototype.onPreprocessActions = function() {
return {
mutex: {
Puzzle100: {
flow1: [ {
operator: "AlgorithmStrategyAlgorithmListOperator",
type: "replaceAll",
args: [ hs.OFFER_TYPE_DIFFICULTY.KUN_NAN_TI ]
} ]
}
},
postPreprocessing: {
flow2: []
}
};
};
return n([ classId("CTRefactorPuzzleTimingMaxPriorityTrait") ], t);
}(Trait);
r.CTRefactorPuzzleTimingMaxPriorityTrait = a;
cc._RF.pop();
}, {} ]
}, {}, [ "CTRefactorPuzzleTimingMaxPriorityTrait" ]);
//# sourceMappingURL=index.js.map
