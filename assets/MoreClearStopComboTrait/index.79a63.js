window.__require = function t(e, o, i) {
function r(s, a) {
if (!o[s]) {
if (!e[s]) {
var u = s.split("/");
u = u[u.length - 1];
if (!e[u]) {
var l = "function" == typeof __require && __require;
if (!a && l) return l(u, !0);
if (n) return n(u, !0);
throw new Error("Cannot find module '" + s + "'");
}
s = u;
}
var c = o[s] = {
exports: {}
};
e[s][0].call(c.exports, function(t) {
return r(e[s][1][t] || t);
}, c, c.exports, t, e, o, i);
}
return o[s].exports;
}
for (var n = "function" == typeof __require && __require, s = 0; s < i.length; s++) r(i[s]);
return r;
}({
MoreClearStopComboTrait: [ function(t, e, o) {
"use strict";
cc._RF.push(e, "c8111iuFw1KLZytklKIKWvr", "MoreClearStopComboTrait");
var i, r, n = this && this.__extends || (i = function(t, e) {
return (i = Object.setPrototypeOf || {
__proto__: []
} instanceof Array && function(t, e) {
t.__proto__ = e;
} || function(t, e) {
for (var o in e) Object.prototype.hasOwnProperty.call(e, o) && (t[o] = e[o]);
})(t, e);
}, function(t, e) {
i(t, e);
function o() {
this.constructor = t;
}
t.prototype = null === e ? Object.create(e) : (o.prototype = e.prototype, new o());
}), s = this && this.__decorate || function(t, e, o, i) {
var r, n = arguments.length, s = n < 3 ? e : null === i ? i = Object.getOwnPropertyDescriptor(e, o) : i;
if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) s = Reflect.decorate(t, e, o, i); else for (var a = t.length - 1; a >= 0; a--) (r = t[a]) && (s = (n < 3 ? r(s) : n > 3 ? r(e, o, s) : r(e, o)) || s);
return n > 3 && s && Object.defineProperty(e, o, s), s;
};
Object.defineProperty(o, "__esModule", {
value: !0
});
o.MoreClearStopComboTrait = void 0;
(function(t) {
t[t.None = 0] = "None";
t[t.FirstRound = 1] = "FirstRound";
t[t.SecondRound = 2] = "SecondRound";
})(r || (r = {}));
var a = function(t) {
n(e, t);
function e() {
var e = null !== t && t.apply(this, arguments) || this;
e.STORAGE_KEY = "MoreClearStopComboTrait_GameState";
e.DEFAULT_COMBO_NUM = 5;
e.DEFAULT_MIN_MULTI_CLEAR = 3;
e.debugComboNum = null;
return e;
}
e.prototype.getQuestionStateName = function(t) {
return t === r.None ? "None" : t === r.FirstRound ? "FirstRound" : "SecondRound";
};
e.prototype.getQuestionStateText = function(t) {
return t === r.None ? "未触发" : t === r.FirstRound ? "第一轮(A题)" : "第二轮(B题)";
};
e.prototype.stateSnapshot = function(t) {
return "局数=" + t.gameNum + ", 达到阈值次数=" + t.combo5ReachCount + ", 状态=" + this.getQuestionStateText(t.questionState) + ", 第一轮多消达标=" + t.firstRoundMultiClear + ", 已完成=" + t.questionSuccess + ", 最近combo=" + t.lastCheckedCombo + ", pendingFirstRound=" + t.pendingFirstRound;
};
e.prototype.resetRoundState = function(t) {
t.questionState = r.None;
t.firstRoundMultiClear = !1;
t.pendingFirstRound = !1;
};
Object.defineProperty(e.prototype, "comboNum", {
get: function() {
return null !== this.debugComboNum ? this.debugComboNum : hs.traitConfigSafePropsInfo.getSafePropValueByKey("MoreClearStopComboTrait", "comboNum", this.props, this.DEFAULT_COMBO_NUM);
},
enumerable: !1,
configurable: !0
});
Object.defineProperty(e.prototype, "minMultiClear", {
get: function() {
return hs.traitConfigSafePropsInfo.getSafePropValueByKey("MoreClearStopComboTrait", "minMultiClear", this.props, this.DEFAULT_MIN_MULTI_CLEAR);
},
enumerable: !1,
configurable: !0
});
Object.defineProperty(e.prototype, "questionTypeA", {
get: function() {
return hs.OFFER_TYPE.CLEAR_MORE_BLOCK;
},
enumerable: !1,
configurable: !0
});
Object.defineProperty(e.prototype, "questionTypeB", {
get: function() {
return hs.OFFER_TYPE.SHANG_ZENG_3;
},
enumerable: !1,
configurable: !0
});
Object.defineProperty(e.prototype, "gameState", {
get: function() {
var t = hs.classGameInfo.gameNum, e = hs.storage.getItem(this.STORAGE_KEY, null);
if (!e || e.gameNum !== t) {
var o = {
gameNum: t,
combo5ReachCount: 0,
questionState: r.None,
firstRoundMultiClear: !1,
questionSuccess: !1,
lastCheckedCombo: -1,
pendingFirstRound: !1
};
this.saveGameState(o);
return o;
}
return e;
},
enumerable: !1,
configurable: !0
});
e.prototype.saveGameState = function(t) {
hs.storage.setItem(this.STORAGE_KEY, t);
};
e.prototype.onCreate = function() {};
e.prototype.onActive = function(t) {
if (hs.gameInfo.gameMode === hs.GameMode.Class) if (hs.classScoreInfo.score <= 1e3) ; else if (this.questionTypeA !== hs.OFFER_TYPE.NONE && this.questionTypeB !== hs.OFFER_TYPE.NONE) {
var e = hs.tp.isClassGame_ProxyNewGameInit(t), o = hs.tp.isClassGame_ProxyOnGameStart(t);
e || o ? this.gameState : hs.tp.isBlocksProducerTouchFollowUpEliminateTimes(t) ? this.onComboUpdate(t) : hs.tp.isBlocksProducer_ProxyOnTouchEnd(t) ? this.onTouchEnd(t) : hs.tp.isClassAlgorithmStrategy_Priority_ProxyOnAlgorithmStrategyPriority(t) && this.onAlgorithmStrategyPriority(t);
} else [ this.questionTypeA === hs.OFFER_TYPE.NONE ? "A题" : "", this.questionTypeB === hs.OFFER_TYPE.NONE ? "B题" : "" ].filter(Boolean).join("、");
};
e.prototype.onComboUpdate = function(t) {
var e = t.args[0].continuousEliminateTimes - 1, o = this.gameState, i = o.lastCheckedCombo;
if (e >= this.comboNum && i < this.comboNum) {
o.combo5ReachCount++;
if (1 === o.combo5ReachCount || 3 === o.combo5ReachCount) if (o.questionState !== r.None || o.pendingFirstRound) ; else {
o.pendingFirstRound = !0;
o.firstRoundMultiClear = !1;
o.questionSuccess = !1;
} else o.combo5ReachCount;
}
if (e < this.comboNum) if (o.questionState === r.SecondRound) {
o.questionSuccess = !0;
this.resetRoundState(o);
} else if (o.questionState === r.FirstRound || o.pendingFirstRound) {
o.questionSuccess = !1;
this.resetRoundState(o);
}
o.lastCheckedCombo = e;
this.saveGameState(o);
};
e.prototype.onTouchEnd = function(t) {
var e = t.args[0];
if (e) {
var o = e.state, i = o.eliminateCount, n = o.continuousEliminateTimes - 1, s = this.gameState;
s.lastCheckedCombo = n;
if (s.questionState !== r.FirstRound) s.questionState !== r.SecondRound ? (s.pendingFirstRound && (s.questionState, 
r.None), this.saveGameState(s)) : this.saveGameState(s); else {
if (i >= this.minMultiClear) {
if (!s.firstRoundMultiClear) {
s.firstRoundMultiClear = !0;
s.questionState = r.SecondRound;
}
} else s.firstRoundMultiClear;
this.saveGameState(s);
}
}
};
e.prototype.onAlgorithmStrategyPriority = function() {
var t = this.gameState;
if (t.pendingFirstRound && t.questionState === r.None && t.lastCheckedCombo >= this.comboNum) {
t.questionState = r.FirstRound;
t.firstRoundMultiClear = !1;
t.pendingFirstRound = !1;
}
this.saveGameState(t);
t.questionState !== r.None && (t.questionState !== r.FirstRound ? t.questionState === r.SecondRound && this.setQuestionB() : this.setQuestionA());
};
e.prototype.setQuestionA = function() {
var t = this.questionTypeA;
hs.algorithmStrategyInfo.setAlgorithmSourceLevel1(hs.ClassAlgorithmSourceType.AlgoTrait);
hs.algorithmStrategyInfo.setAlgorithmSourceLevel2(this.traitName);
var e = hs.algorithmStrategyInfo.algorithmPriorityList || [];
if (e.includes(t)) ; else {
for (var o = [ hs.OFFER_TYPE.ORDER_CHIOCE, hs.OFFER_TYPE.ORDER_FILL_ELIM, hs.OFFER_TYPE.HIGH_NEAR ], i = e.length, r = 0; r < e.length; r++) if (o.includes(e[r])) {
i = r + 1;
break;
}
e.splice(i, 0, t);
hs.algorithmStrategyInfo.setAlgorithmPriorityList(e);
}
};
e.prototype.setQuestionB = function() {
var t = this.questionTypeB;
hs.algorithmStrategyInfo.setAlgorithmSourceLevel1(hs.ClassAlgorithmSourceType.AlgoTrait);
hs.algorithmStrategyInfo.setAlgorithmSourceLevel2(this.traitName);
var e = hs.algorithmStrategyInfo.algorithmPriorityList || [];
if (e.includes(t)) ; else {
for (var o = [ hs.OFFER_TYPE.ORDER_CHIOCE, hs.OFFER_TYPE.ORDER_FILL_ELIM, hs.OFFER_TYPE.HIGH_NEAR ], i = e.length, r = 0; r < e.length; r++) if (o.includes(e[r])) {
i = r + 1;
break;
}
e.splice(i, 0, t);
hs.algorithmStrategyInfo.setAlgorithmPriorityList(e);
}
};
s([ hs.Algorithm() ], e.prototype, "onActive", null);
return s([ classId("MoreClearStopComboTrait") ], e);
}(Trait);
o.MoreClearStopComboTrait = a;
cc._RF.pop();
}, {} ]
}, {}, [ "MoreClearStopComboTrait" ]);
//# sourceMappingURL=index.js.map
