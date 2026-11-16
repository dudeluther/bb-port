window.__require = function r(t, o, e) {
function n(a, c) {
if (!o[a]) {
if (!t[a]) {
var i = a.split("/");
i = i[i.length - 1];
if (!t[i]) {
var s = "function" == typeof __require && __require;
if (!c && s) return s(i, !0);
if (u) return u(i, !0);
throw new Error("Cannot find module '" + a + "'");
}
a = i;
}
var l = o[a] = {
exports: {}
};
t[a][0].call(l.exports, function(r) {
return n(t[a][1][r] || r);
}, l, l.exports, r, t, o, e);
}
return o[a].exports;
}
for (var u = "function" == typeof __require && __require, a = 0; a < e.length; a++) n(e[a]);
return n;
}({
CTRefactorIsTurnAroundSurfaceTrait: [ function(r, t, o) {
"use strict";
cc._RF.push(t, "1c2d35PWmtMfY6fChssPU5f", "CTRefactorIsTurnAroundSurfaceTrait");
var e, n = this && this.__extends || (e = function(r, t) {
return (e = Object.setPrototypeOf || {
__proto__: []
} instanceof Array && function(r, t) {
r.__proto__ = t;
} || function(r, t) {
for (var o in t) Object.prototype.hasOwnProperty.call(t, o) && (r[o] = t[o]);
})(r, t);
}, function(r, t) {
e(r, t);
function o() {
this.constructor = r;
}
r.prototype = null === t ? Object.create(t) : (o.prototype = t.prototype, new o());
}), u = this && this.__decorate || function(r, t, o, e) {
var n, u = arguments.length, a = u < 3 ? t : null === e ? e = Object.getOwnPropertyDescriptor(t, o) : e;
if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) a = Reflect.decorate(r, t, o, e); else for (var c = r.length - 1; c >= 0; c--) (n = r[c]) && (a = (u < 3 ? n(a) : u > 3 ? n(t, o, a) : n(t, o)) || a);
return u > 3 && a && Object.defineProperty(t, o, a), a;
};
Object.defineProperty(o, "__esModule", {
value: !0
});
o.CTRefactorIsTurnAroundSurfaceTrait = void 0;
var a = function(r) {
n(t, r);
function t() {
return null !== r && r.apply(this, arguments) || this;
}
t.prototype.isClassDefaultBoard_ProxyProduceDefaultBoardTurnAround = function(r) {
this.produceDefaultBoardTurnAround(r);
};
t.prototype.isClassBlocksProducerInfoComputeEliminateColor = function(r) {
this.computeEliminateColor(r);
};
t.prototype.isClassGameDataClear_Disk_ProxyResetBoard = function() {
this.resetEndState(!0);
};
t.prototype.produceDefaultBoardTurnAround = function(r) {
var t = r.args[0];
if (!hs.boardInfo.isNullBoard(t)) {
var o = storage.getItem("classTurnAroundSurfaceInfo", {
beTurn: !1,
curStep: 0,
randomColor: 1,
turnAround: !1
}), e = 0;
if (1 !== o.curStep) {
e = Math.floor(7 * Math.random() + 1);
for (;e == o.randomColor; ) e = Math.floor(7 * Math.random() + 1);
} else e = o.randomColor;
for (var n = 0; n < 8; ++n) for (var u = 0; u < 8; ++u) t[n][u] = -1 == t[n][u] ? e : -1;
o.turnAround = !0;
o.curStep = 1;
o.randomColor = e;
r.args[0] = t;
storage.setItem("classTurnAroundSurfaceInfo", o);
}
};
t.prototype.computeEliminateColor = function(r) {
var t = storage.getItem("classTurnAroundSurfaceInfo", {
beTurn: !1,
curStep: 0,
randomColor: 1,
turnAround: !1
});
r.args[0] = t.randomColor;
};
t.prototype.resetEndState = function(r) {
void 0 === r && (r = !1);
var t = storage.getItem("classTurnAroundSurfaceInfo", {
beTurn: !1,
curStep: 0,
randomColor: 1,
turnAround: !1
});
r && (t.turnAround = !1);
t.curStep = 0;
storage.setItem("classTurnAroundSurfaceInfo", t);
};
t.prototype.checkTurnAround = function() {
return 1 == storage.getItem("classTurnAroundSurfaceInfo", {
beTurn: !1,
curStep: 0,
randomColor: 1,
turnAround: !1
}).curStep;
};
t.prototype.onPreprocessConditionContext = function() {
var r = this;
return buildLazyConditionContext({
roundNumContext: function() {
return ASContext(hs.classGameInfo.roundNum, "当前轮数");
},
isNullBoardContext: function() {
return ASContext(hs.boardInfo.isNullBoard(hs.boardInfo.faceBlocks), "是否空盘面");
},
isTurnAroundContext: function() {
return ASContext(r.checkTurnAround(), "是否翻转盘面");
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
operator: "=",
value: 1
}, {
fact: "isNullBoardContext",
operator: "=",
value: !1
}, {
fact: "isTurnAroundContext",
operator: "=",
value: !0
} ]
},
event: {
type: "changeAlgoListCallback"
},
flow: "specialTrait",
platform: "gp"
} ]
}
};
};
t.prototype.onPreprocessActions = function() {
return {
mutex: {
AlgoTrait: {
specialTrait: [ {
operator: "AlgorithmStrategyAlgorithmListOperator",
type: "replaceAll",
args: [ hs.OFFER_TYPE_BLANK.TRAVEL_TIAN_KONG_XIAO_CHU ]
}, {
operator: "AlgorithmStrategyAlgorithmFallbackListOperator",
type: "replaceAll",
args: [ hs.OFFER_TYPE_BASE.SUI_JI_WU_SI ]
} ]
}
}
};
};
t.prototype.changeAlgoListCallback = function() {
this.resetEndState();
hs.algorithmStrategyLevelRefactoredInfo.setAlgorithmSourceLevel1(hs.ClassAlgorithmSourceType.AlgoTrait);
hs.algorithmStrategyLevelRefactoredInfo.setAlgorithmSourceLevel2(this.traitName);
};
return u([ classId("CTRefactorIsTurnAroundSurfaceTrait") ], t);
}(Trait);
o.CTRefactorIsTurnAroundSurfaceTrait = a;
cc._RF.pop();
}, {} ]
}, {}, [ "CTRefactorIsTurnAroundSurfaceTrait" ]);
//# sourceMappingURL=index.js.map
