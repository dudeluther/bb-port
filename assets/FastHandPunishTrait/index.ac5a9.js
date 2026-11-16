window.__require = function e(t, i, n) {
function r(s, d) {
if (!i[s]) {
if (!t[s]) {
var a = s.split("/");
a = a[a.length - 1];
if (!t[a]) {
var u = "function" == typeof __require && __require;
if (!d && u) return u(a, !0);
if (o) return o(a, !0);
throw new Error("Cannot find module '" + s + "'");
}
s = a;
}
var h = i[s] = {
exports: {}
};
t[s][0].call(h.exports, function(e) {
return r(t[s][1][e] || e);
}, h, h.exports, e, t, i, n);
}
return i[s].exports;
}
for (var o = "function" == typeof __require && __require, s = 0; s < n.length; s++) r(n[s]);
return r;
}({
FastHandPunishTrait: [ function(e, t, i) {
"use strict";
cc._RF.push(t, "0d66bgW5JlKu5DtTOV15aQR", "FastHandPunishTrait");
var n, r = this && this.__extends || (n = function(e, t) {
return (n = Object.setPrototypeOf || {
__proto__: []
} instanceof Array && function(e, t) {
e.__proto__ = t;
} || function(e, t) {
for (var i in t) Object.prototype.hasOwnProperty.call(t, i) && (e[i] = t[i]);
})(e, t);
}, function(e, t) {
n(e, t);
function i() {
this.constructor = e;
}
e.prototype = null === t ? Object.create(t) : (i.prototype = t.prototype, new i());
}), o = this && this.__decorate || function(e, t, i, n) {
var r, o = arguments.length, s = o < 3 ? t : null === n ? n = Object.getOwnPropertyDescriptor(t, i) : n;
if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) s = Reflect.decorate(e, t, i, n); else for (var d = e.length - 1; d >= 0; d--) (r = e[d]) && (s = (o < 3 ? r(s) : o > 3 ? r(t, i, s) : r(t, i)) || s);
return o > 3 && s && Object.defineProperty(t, i, s), s;
};
Object.defineProperty(i, "__esModule", {
value: !0
});
i.FastHandPunishTrait = void 0;
var s = function(e) {
r(t, e);
function t() {
var t = null !== e && e.apply(this, arguments) || this;
t._strategyEnded = !1;
t._recentRoundDurations = [];
t._roundStartSpendTime = 0;
t._roundHiddenDurationMs = 0;
t._hideStartSpendTime = 0;
t._isHidden = !1;
t._pendingCheck = !1;
t._skipNextGenerateEndAfterResume = !1;
return t;
}
Object.defineProperty(t.prototype, "avgRoundPlaceTimeThreshold", {
get: function() {
var e, t;
return 1e3 * (null !== (t = null === (e = this.props) || void 0 === e ? void 0 : e.avgRoundPlaceTimeThreshold) && void 0 !== t ? t : 4.5);
},
enumerable: !1,
configurable: !0
});
Object.defineProperty(t.prototype, "highScoreRatioThreshold", {
get: function() {
var e, t;
return null !== (t = null === (e = this.props) || void 0 === e ? void 0 : e.highScoreRatioThreshold) && void 0 !== t ? t : 90;
},
enumerable: !1,
configurable: !0
});
Object.defineProperty(t.prototype, "roundWindow", {
get: function() {
var e, t;
return null !== (t = null === (e = this.props) || void 0 === e ? void 0 : e.roundWindow) && void 0 !== t ? t : 5;
},
enumerable: !1,
configurable: !0
});
Object.defineProperty(t.prototype, "onActiveCondition", {
get: function() {
var e;
return (null === (e = hs.gameInfo) || void 0 === e ? void 0 : e.gameMode) === hs.GameMode.Class;
},
enumerable: !1,
configurable: !0
});
t.prototype.onActive = function(e) {
hs.tp.isClassGame_ProxyOnGameStart(e) && this._onGameStart(e);
hs.tp.isClassTimer_ProxyOnGameHide(e) && this._onGameHide();
hs.tp.isClassTimer_ProxyOnGameShow(e) && this._onGameShow();
hs.tp.isClassBlocksProducer_ProxyOnGenerateEnd(e) && this._onGenerateEnd();
hs.tp.isClassBlocksProducer_ProxyOnTouchEnd(e) && this._onTouchEnd(e);
hs.tp.isClassAlgorithmStrategy_Condition_ProxyOnAlgorithmStrategyCondition(e) && this._onTriggerSpecialTrait(e);
};
t.prototype._onGameStart = function(e) {
var t, i, n = e.args[0];
if (null == n ? void 0 : n.data) if (n.data.newGame) {
this._strategyEnded = !1;
this._recentRoundDurations = [];
this._pendingCheck = !1;
this._skipNextGenerateEndAfterResume = !1;
this._roundStartSpendTime = 0;
this._roundHiddenDurationMs = 0;
this._hideStartSpendTime = 0;
this._isHidden = !1;
hs.storage.setItem("FastHandPunishTrait_T", {
strategyEnded: !1,
recentRoundDurations: []
});
} else {
var r = hs.storage.getItem("FastHandPunishTrait_T");
this._strategyEnded = null !== (t = null == r ? void 0 : r.strategyEnded) && void 0 !== t && t;
this._recentRoundDurations = null !== (i = null == r ? void 0 : r.recentRoundDurations) && void 0 !== i ? i : [];
this._skipNextGenerateEndAfterResume = !0;
this._pendingCheck = !1;
this._roundStartSpendTime = 0;
this._roundHiddenDurationMs = 0;
this._hideStartSpendTime = 0;
this._isHidden = !1;
}
};
t.prototype._onGameHide = function() {
var e, t;
if (!this._isHidden) {
this._hideStartSpendTime = null !== (t = null === (e = hs.classTimerInfo) || void 0 === e ? void 0 : e.spendTime) && void 0 !== t ? t : 0;
this._isHidden = !0;
}
};
t.prototype._onGameShow = function() {
var e, t;
if (this._isHidden) {
var i = (null !== (t = null === (e = hs.classTimerInfo) || void 0 === e ? void 0 : e.spendTime) && void 0 !== t ? t : 0) - this._hideStartSpendTime;
this._roundHiddenDurationMs += Math.max(0, i);
this._isHidden = !1;
}
};
t.prototype._onGenerateEnd = function() {
var e, t, i, n, r;
if (this._pendingCheck) {
var o = null === (e = hs.classAlgorithmName) || void 0 === e ? void 0 : e.algoActualId;
if (hs.isValueInEnum(o, hs.OFFER_TYPE_DIFFICULTY)) {
this._strategyEnded = !0;
hs.storage.setItem("FastHandPunishTrait_T", {
strategyEnded: !0,
recentRoundDurations: this._recentRoundDurations
});
}
this._pendingCheck = !1;
}
if (this._skipNextGenerateEndAfterResume) {
this._skipNextGenerateEndAfterResume = !1;
this._roundStartSpendTime = null !== (i = null === (t = hs.classTimerInfo) || void 0 === t ? void 0 : t.spendTime) && void 0 !== i ? i : 0;
this._roundHiddenDurationMs = 0;
} else {
this._roundStartSpendTime = null !== (r = null === (n = hs.classTimerInfo) || void 0 === n ? void 0 : n.spendTime) && void 0 !== r ? r : 0;
this._roundHiddenDurationMs = 0;
}
};
t.prototype._onTouchEnd = function(e) {
var t, i, n, r = e.args[0];
if (null === (t = null == r ? void 0 : r.state) || void 0 === t ? void 0 : t.clearProducer) {
var o = (null !== (n = null === (i = hs.classTimerInfo) || void 0 === i ? void 0 : i.spendTime) && void 0 !== n ? n : 0) - this._roundStartSpendTime - this._roundHiddenDurationMs;
if (o > 0) {
this._recentRoundDurations.push(o);
this._recentRoundDurations.length > this.roundWindow && this._recentRoundDurations.shift();
hs.storage.setItem("FastHandPunishTrait_T", {
strategyEnded: this._strategyEnded,
recentRoundDurations: this._recentRoundDurations
});
}
}
};
t.prototype._onTriggerSpecialTrait = function(e) {
var t, i, n, r, o;
if (this._strategyEnded) this.onTriggerFailed(); else if (null === (t = hs.classGuideInfo) || void 0 === t ? void 0 : t.isFinishedGuide) if (this._recentRoundDurations.length < this.roundWindow) this.onTriggerFailed(); else if (this._recentRoundDurations.slice(-this.roundWindow).reduce(function(e, t) {
return e + t;
}, 0) / this.roundWindow >= this.avgRoundPlaceTimeThreshold) this.onTriggerFailed(); else {
var s = null !== (n = null === (i = hs.scoreInfo) || void 0 === i ? void 0 : i.highRecordScore) && void 0 !== n ? n : 0;
if (s <= 0) this.onTriggerFailed(); else {
var d = null !== (o = null === (r = hs.classScoreInfo) || void 0 === r ? void 0 : r.score) && void 0 !== o ? o : 0, a = s * (this.highScoreRatioThreshold / 100);
if (this.checkScoreCondition(d, a)) this.onTriggerFailed(); else {
hs.algorithmStrategyInfo.setAlgorithmSourceLevel1(hs.ClassAlgorithmSourceType.AlgoTrait);
hs.algorithmStrategyInfo.setAlgorithmSourceLevel2(this.traitName);
hs.algorithmStrategyInfo.setAlgorithmList([ hs.OFFER_TYPE.KUN_NAN_TI ]);
e.returnState = !0;
this.onTriggerSuccess(e);
this._pendingCheck = !0;
}
}
} else this.onTriggerFailed();
};
t.prototype.checkScoreCondition = function(e, t) {
return e <= t;
};
t.prototype.onTriggerSuccess = function() {};
t.prototype.onTriggerFailed = function() {};
return o([ classId("FastHandPunishTrait"), classMethodWatch() ], t);
}(Trait);
i.FastHandPunishTrait = s;
cc._RF.pop();
}, {} ]
}, {}, [ "FastHandPunishTrait" ]);
//# sourceMappingURL=index.js.map
