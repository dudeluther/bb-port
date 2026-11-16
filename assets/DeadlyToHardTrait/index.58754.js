window.__require = function t(e, r, o) {
function i(a, s) {
if (!r[a]) {
if (!e[a]) {
var l = a.split("/");
l = l[l.length - 1];
if (!e[l]) {
var c = "function" == typeof __require && __require;
if (!s && c) return c(l, !0);
if (n) return n(l, !0);
throw new Error("Cannot find module '" + a + "'");
}
a = l;
}
var h = r[a] = {
exports: {}
};
e[a][0].call(h.exports, function(t) {
return i(e[a][1][t] || t);
}, h, h.exports, t, e, r, o);
}
return r[a].exports;
}
for (var n = "function" == typeof __require && __require, a = 0; a < o.length; a++) i(o[a]);
return i;
}({
DeadlyToHardTrait: [ function(t, e, r) {
"use strict";
cc._RF.push(e, "dffffXkO3hMQ5kuyBg6U1tJ", "DeadlyToHardTrait");
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
}), n = this && this.__decorate || function(t, e, r, o) {
var i, n = arguments.length, a = n < 3 ? e : null === o ? o = Object.getOwnPropertyDescriptor(e, r) : o;
if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) a = Reflect.decorate(t, e, r, o); else for (var s = t.length - 1; s >= 0; s--) (i = t[s]) && (a = (n < 3 ? i(a) : n > 3 ? i(e, r, a) : i(e, r)) || a);
return n > 3 && a && Object.defineProperty(e, r, a), a;
};
Object.defineProperty(r, "__esModule", {
value: !0
});
r.DeadlyToHardTrait = void 0;
var a = [ 1, 0, 0 ], s = function(t) {
i(e, t);
function e() {
var e = null !== t && t.apply(this, arguments) || this;
e._curCombo = 0;
return e;
}
Object.defineProperty(e.prototype, "eliminateSteps", {
get: function() {
var t = this.props;
return (null == t ? void 0 : t.eliminateSteps) && Array.isArray(t.eliminateSteps) && 3 === t.eliminateSteps.length ? t.eliminateSteps : a;
},
enumerable: !1,
configurable: !0
});
e.prototype.getCurrentCombo = function() {
return this._curCombo;
};
e.prototype.computeTotalScoreAfterElimination = function(t, e) {
for (var r = 0, o = e, i = hs.storage.getItem("classGuideStep", 0), n = {
state: {
putPos: [],
touchBlockId: -1
}
}, a = 0; a < t.length; a++) {
var s = t[a];
if (!(s <= 0)) {
0 === o ? o = 1 : o += 1;
r += hs.classScoreInfo.computeComboAndEliminateTimesScore(i, s, o, n);
}
}
return r;
};
e.prototype.checkWillNotBreakthrough = function() {
var t = hs.classScoreInfo.score, e = hs.scoreInfo.highRecordScore, r = this.getCurrentCombo();
return t + this.computeTotalScoreAfterElimination(this.eliminateSteps, r) < e;
};
e.prototype.checkTriggerCondition = function() {
return !(hs.classGameInfo.gameNum <= 0 || hs.classScoreInfo.score >= hs.scoreInfo.highRecordScore);
};
e.prototype.hasDeathAlgorithm = function(t) {
return !(!t || 0 === t.length) && t.some(function(t) {
var e, r = (null === (e = hs.OFFER_TYPE_STRINGS) || void 0 === e ? void 0 : e[t]) || "";
return r.includes("怼死") || r.includes("致死");
});
};
e.prototype.replaceDeathAlgorithmWithHard = function(t) {
return t.map(function(t) {
var e, r = (null === (e = hs.OFFER_TYPE_STRINGS) || void 0 === e ? void 0 : e[t]) || "";
return r.includes("怼死") || r.includes("致死") ? hs.OFFER_TYPE.KUN_NAN_NAN_TI : t;
});
};
e.prototype.onActive = function(t) {
hs.gameInfo.gameMode === hs.GameMode.Class && (hs.tp.isBlocksProducerTouchFollowUpEliminateTimes(t) ? this.handleFollowUpEliminateTimes(t) : hs.tp.isClassAlgorithmStrategy_Deal_ProxyPostPreprocessing(t) && this.handleAlgorithmReplacement());
};
e.prototype.handleFollowUpEliminateTimes = function(t) {
var e = t.args[0];
this._curCombo = e.continuousEliminateTimes;
};
e.prototype.handleAlgorithmReplacement = function() {
if (this.checkTriggerCondition() && hs.algorithmStrategyInfo.algorithmSourceLevel1 === hs.ClassAlgorithmSourceType.Puzzle100) {
var t = hs.algorithmStrategyInfo.algorithmList;
if (this.hasDeathAlgorithm(t) && this.checkWillNotBreakthrough()) {
var e = this.replaceDeathAlgorithmWithHard(t);
hs.algorithmStrategyInfo.setAlgorithmList(e);
hs.algorithmStrategyInfo.setAlgorithmSourceLevel1(hs.ClassAlgorithmSourceType.AlgoTrait);
hs.algorithmStrategyInfo.setAlgorithmSourceLevel2(this.traitName);
hs.algorithmStrategyInfo.setAlgorithmFailList([ hs.OFFER_TYPE.SHANG_ZENG_3 ]);
}
}
};
return n([ classId("DeadlyToHardTrait") ], e);
}(Trait);
r.DeadlyToHardTrait = s;
cc._RF.pop();
}, {} ]
}, {}, [ "DeadlyToHardTrait" ]);
//# sourceMappingURL=index.js.map
