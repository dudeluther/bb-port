window.__require = function t(e, r, a) {
function i(n, s) {
if (!r[n]) {
if (!e[n]) {
var c = n.split("/");
c = c[c.length - 1];
if (!e[c]) {
var h = "function" == typeof __require && __require;
if (!s && h) return h(c, !0);
if (o) return o(c, !0);
throw new Error("Cannot find module '" + n + "'");
}
n = c;
}
var l = r[n] = {
exports: {}
};
e[n][0].call(l.exports, function(t) {
return i(e[n][1][t] || t);
}, l, l.exports, t, e, r, a);
}
return r[n].exports;
}
for (var o = "function" == typeof __require && __require, n = 0; n < a.length; n++) i(a[n]);
return i;
}({
IsOpenMoreCleanChangeTrait: [ function(t, e, r) {
"use strict";
cc._RF.push(e, "f472b8VEepKFoMKxEqcn3m7", "IsOpenMoreCleanChangeTrait");
var a, i = this && this.__extends || (a = function(t, e) {
return (a = Object.setPrototypeOf || {
__proto__: []
} instanceof Array && function(t, e) {
t.__proto__ = e;
} || function(t, e) {
for (var r in e) Object.prototype.hasOwnProperty.call(e, r) && (t[r] = e[r]);
})(t, e);
}, function(t, e) {
a(t, e);
function r() {
this.constructor = t;
}
t.prototype = null === e ? Object.create(e) : (r.prototype = e.prototype, new r());
}), o = this && this.__decorate || function(t, e, r, a) {
var i, o = arguments.length, n = o < 3 ? e : null === a ? a = Object.getOwnPropertyDescriptor(e, r) : a;
if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) n = Reflect.decorate(t, e, r, a); else for (var s = t.length - 1; s >= 0; s--) (i = t[s]) && (n = (o < 3 ? i(n) : o > 3 ? i(e, r, n) : i(e, r)) || n);
return o > 3 && n && Object.defineProperty(e, r, n), n;
}, n = this && this.__read || function(t, e) {
var r = "function" == typeof Symbol && t[Symbol.iterator];
if (!r) return t;
var a, i, o = r.call(t), n = [];
try {
for (;(void 0 === e || e-- > 0) && !(a = o.next()).done; ) n.push(a.value);
} catch (t) {
i = {
error: t
};
} finally {
try {
a && !a.done && (r = o.return) && r.call(o);
} finally {
if (i) throw i.error;
}
}
return n;
}, s = this && this.__spread || function() {
for (var t = [], e = 0; e < arguments.length; e++) t = t.concat(n(arguments[e]));
return t;
};
Object.defineProperty(r, "__esModule", {
value: !0
});
r.IsOpenMoreCleanChangeTrait = void 0;
var c = function(t) {
i(e, t);
function e() {
var e = null !== t && t.apply(this, arguments) || this;
e.traitData = {
breackHighScoreDate: "",
currentGameClearScreenCount: 0,
breackHighScoreRecords: [],
isCurRoundClearScreen: {
roundNum: 0,
isClearScreen: !1
},
isCurGameBreakHighScore: !1,
isBangClearScreen: !1
};
e.TRAIT_NAME = "IsOpenMoreCleanChangeTrait";
e.HIGH_SCORE_THRESHOLD = 3e3;
e.MIN_ROUND_FOR_EFFECT = 5;
e.SCORE_RATIO_THRESHOLD_1 = .8;
e.SCORE_RATIO_THRESHOLD_2 = .9;
return e;
}
e.prototype.saveState = function() {
storage.setItem("IsOpenMoreCleanChangeTraitData", this.traitData);
};
e.prototype.getTraitData = function() {
return this.traitData;
};
Object.defineProperty(e.prototype, "CLEAR_SCREEN_HELP_LIMIT", {
get: function() {
return this.props.clearLimit;
},
enumerable: !1,
configurable: !0
});
e.prototype.registerTraitEventsMethods = function() {
return [ {
className: "ClassGame_Proxy",
methodName: "onGameStart"
}, {
className: "ClassGameOver_GameEnd_Proxy",
methodName: "onGameEnd"
}, {
className: "Encourage_Proxy",
methodName: "onTouchEnd"
}, {
className: "ClassAlgorithmStrategy_Replace_Proxy",
methodName: "preprocessingBaseAlgorithm"
} ];
};
e.prototype.onActive = function(t) {
var e, r;
if (hs.gameInfo.gameMode === hs.GameMode.Class) {
hs.tp.isClassGame_ProxyOnGameStart(t) && t.args[0].data.newGame && this.onGameStart();
hs.tp.isClassGameOver_GameEnd_ProxyOnGameEnd(t) && this.onGameEnd();
if (hs.tp.isEncourage_ProxyOnTouchEnd(t)) {
var a = t.args[0].state.clearScreen, i = null !== (r = null === (e = hs.classGameInfo) || void 0 === e ? void 0 : e.roundNum) && void 0 !== r ? r : 0;
if (this.traitData.isCurRoundClearScreen.roundNum !== i || !this.traitData.isCurRoundClearScreen.isClearScreen) {
this.traitData.isCurRoundClearScreen.isClearScreen = a;
this.traitData.isCurRoundClearScreen.roundNum = i;
if (a) {
var o = hs.algorithmName.algoActualId, n = (hs.algorithmName.algoActualName, [ hs.OFFER_TYPE.CLEAR_BOARD, hs.OFFER_TYPE.CLEAR_BOARD_BLANK ].includes(o));
this.traitData.isBangClearScreen && n && this.traitData.currentGameClearScreenCount++;
}
var s = hs.scoreInfo.score, c = hs.scoreInfo.highRecordScore;
this.breackHighScoreRecord(s > c);
}
}
hs.tp.isClassAlgorithmStrategy_Replace_ProxyPreprocessingBaseAlgorithm(t) && this.handleAlgorithmStrategy();
}
};
e.prototype.onGameStart = function() {
var t = hs.getTodayDate();
t !== this.traitData.breackHighScoreDate && (this.traitData.breackHighScoreRecords = []);
this.traitData.breackHighScoreDate = t;
this.traitData.currentGameClearScreenCount = 0;
this.traitData.isCurRoundClearScreen = {
roundNum: 0,
isClearScreen: !1
};
this.traitData.isCurGameBreakHighScore = !1;
this.traitData.isBangClearScreen = !1;
this.saveState();
};
e.prototype.onGameEnd = function() {
this.traitData.breackHighScoreRecords.push(this.traitData.isCurGameBreakHighScore);
this.traitData.breackHighScoreRecords = this.traitData.breackHighScoreRecords.slice(-10);
this.traitData.currentGameClearScreenCount = 0;
this.traitData.isCurRoundClearScreen = {
roundNum: 0,
isClearScreen: !1
};
this.traitData.isCurGameBreakHighScore = !1;
this.saveState();
};
e.prototype.breackHighScoreRecord = function(t) {
t && !this.traitData.isCurGameBreakHighScore && (this.traitData.isCurGameBreakHighScore = !0);
};
e.prototype.handleAlgorithmStrategy = function() {
var t, e, r = null !== (e = null === (t = hs.classGameInfo) || void 0 === t ? void 0 : t.roundNum) && void 0 !== e ? e : 0, a = hs.scoreInfo.score, i = hs.scoreInfo.highRecordScore;
this.traitData.isBangClearScreen = !1;
if (!(r <= this.MIN_ROUND_FOR_EFFECT)) {
var o = this.updateClearScreenHelpLimit(this.CLEAR_SCREEN_HELP_LIMIT);
if (!(this.traitData.currentGameClearScreenCount >= o) && this.canTriggerOtherCondition()) {
var n = this.traitData.isCurRoundClearScreen.isClearScreen;
if (this.traitData.isCurGameBreakHighScore) this.setBottomStrategy(); else if (i < this.HIGH_SCORE_THRESHOLD) this.setClearBoardAlgorithm(); else if (-1 !== this.traitData.breackHighScoreRecords.indexOf(!0)) {
var s = i > 0 ? a / i : 0;
s <= this.SCORE_RATIO_THRESHOLD_1 ? this.setClearBoardAlgorithm() : s > this.SCORE_RATIO_THRESHOLD_1 && s < this.SCORE_RATIO_THRESHOLD_2 ? n ? this.setClearBoardAlgorithm() : this.setBottomStrategy() : this.setIntuitionDifficultyWithBottom();
} else this.setClearBoardAlgorithm();
}
}
};
e.prototype.setClearBoardAlgorithm = function() {
var t = [ hs.OFFER_TYPE.CLEAR_BOARD, hs.OFFER_TYPE.CLEAR_BOARD_BLANK ];
this.getAlgorithmListByPriority(t);
var e = hs.algorithmStrategyInfo.algorithmList.filter(function(e) {
return !t.includes(e);
}), r = s(t, e);
hs.algorithmStrategyInfo.setAlgorithmList(r);
this.traitData.isBangClearScreen = !0;
};
e.prototype.setIntuitionDifficultyWithBottom = function() {
var t = hs.OFFER_TYPE.ZHI_JUE_NAN_TI, e = hs.algorithmStrategyInfo.algorithmList.filter(function(e) {
return e !== t;
}), r = s([ t ], e);
hs.algorithmStrategyInfo.setAlgorithmList(r);
this.setBottomStrategy();
};
e.prototype.setBottomStrategy = function() {};
e.prototype.getAlgorithmListByPriority = function() {};
e.prototype.updateClearScreenHelpLimit = function(t) {
return t;
};
e.prototype.canTriggerOtherCondition = function() {
return !0;
};
o([ hs.storageProperty({
key: "IsOpenMoreCleanChangeTraitData"
}) ], e.prototype, "traitData", void 0);
o([ hs.Algorithm() ], e.prototype, "handleAlgorithmStrategy", null);
return o([ classId("IsOpenMoreCleanChangeTrait"), classMethodWatch() ], e);
}(Trait);
r.IsOpenMoreCleanChangeTrait = c;
cc._RF.pop();
}, {} ]
}, {}, [ "IsOpenMoreCleanChangeTrait" ]);
//# sourceMappingURL=index.js.map
