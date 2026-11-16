window.__require = function t(r, e, o) {
function i(s, n) {
if (!e[s]) {
if (!r[s]) {
var l = s.split("/");
l = l[l.length - 1];
if (!r[l]) {
var u = "function" == typeof __require && __require;
if (!n && u) return u(l, !0);
if (a) return a(l, !0);
throw new Error("Cannot find module '" + s + "'");
}
s = l;
}
var d = e[s] = {
exports: {}
};
r[s][0].call(d.exports, function(t) {
return i(r[s][1][t] || t);
}, d, d.exports, t, r, e, o);
}
return e[s].exports;
}
for (var a = "function" == typeof __require && __require, s = 0; s < o.length; s++) i(o[s]);
return i;
}({
FirstHardMoreClearAlgoTrait: [ function(t, r, e) {
"use strict";
cc._RF.push(r, "6a324ZbIrZDOrZWgU3cHS/X", "FirstHardMoreClearAlgoTrait");
var o, i = this && this.__extends || (o = function(t, r) {
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
var i, a = arguments.length, s = a < 3 ? r : null === o ? o = Object.getOwnPropertyDescriptor(r, e) : o;
if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) s = Reflect.decorate(t, r, e, o); else for (var n = t.length - 1; n >= 0; n--) (i = t[n]) && (s = (a < 3 ? i(s) : a > 3 ? i(r, e, s) : i(r, e)) || s);
return a > 3 && s && Object.defineProperty(r, e, s), s;
};
Object.defineProperty(e, "__esModule", {
value: !0
});
e.FirstHardMoreClearAlgoTrait = void 0;
var s = function(t) {
i(r, t);
function r() {
var r = null !== t && t.apply(this, arguments) || this;
r.isClearBranch = !1;
return r;
}
r.prototype.data = function() {
return {
hasSolvedFirstHardPuzzle: !1,
waitingFirstHardSolve: !1,
rewardRounds: 0,
rewardInvalid: !1,
pendingRewardRoundNum: -1,
pendingOutAlgo: !1
};
};
Object.defineProperty(r.prototype, "onActiveCondition", {
get: function() {
return hs.gameInfo.gameMode === hs.GameMode.Class;
},
enumerable: !1,
configurable: !0
});
Object.defineProperty(r.prototype, "maxRewardRounds", {
get: function() {
var t, r;
return Math.max(0, null !== (r = null === (t = this.props) || void 0 === t ? void 0 : t.maxRewardRounds) && void 0 !== r ? r : 3);
},
enumerable: !1,
configurable: !0
});
r.prototype.onActive = function(t) {
hs.tp.isClassAlgorithmLifeCycle_GameStart_ProxyOnGameStart(t) && this.onGameStart(t);
hs.tp.isAlgorithmProcessInfoAlgoSuccessAfter(t) && this.onAlgoSuccessAfter();
hs.tp.isClassAlgorithmStrategy_Priority_ProxyOnAlgorithmStrategyPriority(t) && this.onAlgorithmStrategyPriority(t);
hs.tp.isAlgorithmProcessInfoTriggerAlgorithmResult(t) && this.onTriggerAlgorithmResult(t);
hs.tp.isClassAlgorithmStrategy_Deal_ProxyResetAlgorithmData(t) && (this.isClearBranch = !1);
hs.tp.isClassAlgorithmLifeCycle_TouchEnd_ProxyOnTouchEndDelay(t) && this.onTouchEndDelay(t);
hs.tp.isClassAlgorithmLifeCycle_Revive_ProxyOnRevive_Success(t) && this.resetState();
};
r.prototype.onTouchEndDelay = function(t) {
var r, e, o = null === (r = null == t ? void 0 : t.args) || void 0 === r ? void 0 : r[0];
if ((null === (e = null == o ? void 0 : o.state) || void 0 === e ? void 0 : e.clearProducer) && !this.state.pendingOutAlgo && this.state.waitingFirstHardSolve) {
this.state.hasSolvedFirstHardPuzzle = !0;
this.state.waitingFirstHardSolve = !1;
this.state.rewardRounds = 0;
this.state.rewardInvalid = !1;
this.state.pendingOutAlgo = !0;
}
};
r.prototype.onTriggerAlgorithmResult = function(t) {
var r, e, o;
if (hs.algorithmName.algoActualId === hs.OFFER_TYPE.ALGORITHM_BRANCH_TKXC_MORE_CLEARN) {
var i = null === (r = null == t ? void 0 : t.args) || void 0 === r ? void 0 : r[0], a = null !== (e = null == i ? void 0 : i.extra) && void 0 !== e ? e : {};
this.isClearBranch = null !== (o = a.isClearBranch) && void 0 !== o && o;
if (this.isClearBranch) this.state.rewardInvalid = !0; else {
this.state.rewardRounds += 1;
this.state.rewardRounds >= this.maxRewardRounds && (this.state.rewardInvalid = !0);
}
}
};
r.prototype.onGameStart = function() {
this.resetState();
};
r.prototype.onAlgoSuccessAfter = function() {
if (!this.state.hasSolvedFirstHardPuzzle && !this.state.waitingFirstHardSolve && hs.algorithmStrategyInfo.algorithmSourceLevel1 === hs.ClassAlgorithmSourceType.PuzzleTimeFirst) {
var t = hs.algorithmName.algoActualIdByPos, r = TRAIT("IsPuzzleTimeTrait");
(null == r ? void 0 : r.active) && !r.state.isHardFirst && hs.isValueInEnum(t, hs.OFFER_TYPE_DIFFICULTY) && (this.state.waitingFirstHardSolve = !0);
}
};
r.prototype.onAlgorithmStrategyPriority = function() {
var t, r;
if (this.canTriggerReward()) {
var e = null !== (r = null === (t = hs.classGameInfo) || void 0 === t ? void 0 : t.roundNum) && void 0 !== r ? r : -1;
if (this.state.pendingRewardRoundNum !== e) {
hs.algorithmStrategyInfo.algorithmPriorityList.push(hs.OFFER_TYPE.ALGORITHM_BRANCH_TKXC_MORE_CLEARN);
this.state.pendingRewardRoundNum = e;
}
}
};
r.prototype.canTriggerReward = function() {
return this.maxRewardRounds > 0 && this.state.hasSolvedFirstHardPuzzle && !this.state.rewardInvalid && this.state.rewardRounds <= this.maxRewardRounds;
};
r.prototype.resetState = function() {
this.state.hasSolvedFirstHardPuzzle = !1;
this.state.waitingFirstHardSolve = !1;
this.state.rewardRounds = 0;
this.state.pendingOutAlgo = !1;
this.state.rewardInvalid = !1;
this.state.pendingRewardRoundNum = -1;
};
return a([ classId("FirstHardMoreClearAlgoTrait") ], r);
}(Trait);
e.FirstHardMoreClearAlgoTrait = s;
cc._RF.pop();
}, {} ],
FirstHardMoreClearAlgo_Ios_Trait: [ function(t, r, e) {
"use strict";
cc._RF.push(r, "d68f72Mz/9JU5qFvB4nWkDm", "FirstHardMoreClearAlgo_Ios_Trait");
var o, i = this && this.__extends || (o = function(t, r) {
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
var i, a = arguments.length, s = a < 3 ? r : null === o ? o = Object.getOwnPropertyDescriptor(r, e) : o;
if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) s = Reflect.decorate(t, r, e, o); else for (var n = t.length - 1; n >= 0; n--) (i = t[n]) && (s = (a < 3 ? i(s) : a > 3 ? i(r, e, s) : i(r, e)) || s);
return a > 3 && s && Object.defineProperty(r, e, s), s;
};
Object.defineProperty(e, "__esModule", {
value: !0
});
e.FirstHardMoreClearAlgo_Ios_Trait = void 0;
var s = function(t) {
i(r, t);
function r() {
return null !== t && t.apply(this, arguments) || this;
}
r.prototype.isClassAlgorithmStrategyIOS_Priority_ProxyOnAlgorithmStrategyPriority = function(t) {
this.onAlgorithmStrategyPriority(t);
};
return a([ classId("FirstHardMoreClearAlgoTrait", "ios") ], r);
}(t("./FirstHardMoreClearAlgoTrait").FirstHardMoreClearAlgoTrait);
e.FirstHardMoreClearAlgo_Ios_Trait = s;
cc._RF.pop();
}, {
"./FirstHardMoreClearAlgoTrait": "FirstHardMoreClearAlgoTrait"
} ]
}, {}, [ "FirstHardMoreClearAlgoTrait", "FirstHardMoreClearAlgo_Ios_Trait" ]);
//# sourceMappingURL=index.js.map
