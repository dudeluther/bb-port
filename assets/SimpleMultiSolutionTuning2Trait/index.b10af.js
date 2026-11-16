window.__require = function t(e, o, i) {
function r(s, l) {
if (!o[s]) {
if (!e[s]) {
var a = s.split("/");
a = a[a.length - 1];
if (!e[a]) {
var u = "function" == typeof __require && __require;
if (!l && u) return u(a, !0);
if (n) return n(a, !0);
throw new Error("Cannot find module '" + s + "'");
}
s = a;
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
SimpleMultiSolutionTuning2Trait: [ function(t, e, o) {
"use strict";
cc._RF.push(e, "7d54eipmCVCE4i1ihhLAoiR", "SimpleMultiSolutionTuning2Trait");
var i, r = this && this.__extends || (i = function(t, e) {
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
}), n = this && this.__decorate || function(t, e, o, i) {
var r, n = arguments.length, s = n < 3 ? e : null === i ? i = Object.getOwnPropertyDescriptor(e, o) : i;
if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) s = Reflect.decorate(t, e, o, i); else for (var l = t.length - 1; l >= 0; l--) (r = t[l]) && (s = (n < 3 ? r(s) : n > 3 ? r(e, o, s) : r(e, o)) || s);
return n > 3 && s && Object.defineProperty(e, o, s), s;
}, s = this && this.__read || function(t, e) {
var o = "function" == typeof Symbol && t[Symbol.iterator];
if (!o) return t;
var i, r, n = o.call(t), s = [];
try {
for (;(void 0 === e || e-- > 0) && !(i = n.next()).done; ) s.push(i.value);
} catch (t) {
r = {
error: t
};
} finally {
try {
i && !i.done && (o = n.return) && o.call(n);
} finally {
if (r) throw r.error;
}
}
return s;
}, l = this && this.__spread || function() {
for (var t = [], e = 0; e < arguments.length; e++) t = t.concat(s(arguments[e]));
return t;
};
Object.defineProperty(o, "__esModule", {
value: !0
});
o.SimpleMultiSolutionTuning2Trait = void 0;
var a = hs.OFFER_TYPE.ALGO_MULTI_SOLUTION_HARD, u = "SimpleMultiSolutionTuning2Trait_state", c = function(t) {
r(e, t);
function e() {
var e = null !== t && t.apply(this, arguments) || this;
e._canStatistics = !1;
return e;
}
e.prototype.onCreate = function() {};
e.prototype.data = function() {
return {
isTrigger: !1
};
};
Object.defineProperty(e.prototype, "onActiveCondition", {
get: function() {
return hs.gameInfo.gameMode === hs.GameMode.Class;
},
enumerable: !1,
configurable: !0
});
e.prototype.onActive = function(t) {
var e, o;
hs.tp.isClassGame_ProxyOnGameStart(t) && this.onClassGameStart(t);
if (hs.tp.isClassAlgorithmStrategy_Reset_ProxyPreprocessing_PuzzleTime(t)) this.onPreprocessingPuzzleTime(); else if (hs.tp.isPuzzle100TraitDynamicAdjustDieDefaultTime(t)) this.onAdjustPuzzle100Time(t); else if (hs.tpManual.isClassAlgorithmBottomSequenceGPInfoTriggerBottomOfferAlgo(t)) this.onTriggerBottomOfferAlgo(t); else if (hs.tpManual.isClassAlgorithmBottomSequenceGPInfoOnDisableBottomAlgo(t)) this.onDisableBottomOfferAlgo(t); else if (hs.tp.isClassAlgorithmProcessInfoBottomOffer(t)) this.onLegacyBottomOffer(t); else if (hs.tp.isAlgorithmProcessInfoHandleArgs(t)) this.onHandleArgs(t); else if (hs.tp.isAlgorithmProcessInfoAlgorithmSuccess(t)) this.onAlgorithmSuccess(); else if (hs.tp.isParallelClearHardTraitShouldBlockParallelClearHard(t)) {
var i = (null !== (o = null === (e = hs.classScoreInfo) || void 0 === e ? void 0 : e.score) && void 0 !== o ? o : 0) >= hs.classScoreInfo.highScore * this.highScoreTriggerRatio;
this.shouldReplaceForSource(!1) && hs.classGameInfo.gameNum > 0 && !i && (t.returnValue = !0);
}
};
e.prototype.onHandleArgs = function(t) {
var e, o, i;
if (hs.gameInfo.gameMode === hs.GameMode.Class && (null === (e = t.args) || void 0 === e ? void 0 : e[1]) === a) {
var r = null === (o = t.args) || void 0 === o ? void 0 : o[0];
if (r) {
r.extra = null !== (i = r.extra) && void 0 !== i ? i : {};
r.extra.multiSolutionDistinctClearPatternCount = this.distinctClearPatternCount;
}
}
};
e.prototype.onClassGameStart = function(t) {
var e;
this._loadFromStorage();
var o = t.args[0];
if (null === (e = null == o ? void 0 : o.data) || void 0 === e ? void 0 : e.newGame) {
hs.classGameInfo.gameNum > 0 && Math.random() <= this.triggerPuzzleRatio ? this.state.isTrigger = !0 : this.state.isTrigger = !1;
this._saveToStorage();
}
};
e.prototype._loadFromStorage = function() {
var t = hs.storage.getItem(u, this.data());
Object.assign(this.state, t);
};
e.prototype._saveToStorage = function() {
hs.storage.setItem(u, this.state);
};
e.prototype.onPreprocessingPuzzleTime = function() {
var t, e;
if (this.state.isTrigger && hs.classGuideInfo.isFinishedGuide) {
var o = TRAIT("IsPuzzleTimeTrait");
if (null == o ? void 0 : o.active) {
var i = Number(null !== (e = null === (t = o.state) || void 0 === t ? void 0 : t.puzzleTimeFirst) && void 0 !== e ? e : 0) || 0;
if (i <= 0) ; else {
var r = Math.max(1, i - this.puzzleTimeAdvanceSec);
o.setState({
puzzleTimeFirst: r
});
}
}
}
};
e.prototype.onAdjustPuzzle100Time = function(t) {
if (this.state.isTrigger && hs.classGuideInfo.isFinishedGuide) {
var e = t.args[0];
if ("number" == typeof e && Number.isFinite(e)) {
var o = Math.max(0, e - this.puzzleTimeAdvanceSec);
t.returnValue = o;
}
}
};
Object.defineProperty(e.prototype, "highScoreTriggerRatio", {
get: function() {
var t, e = null === (t = this.props) || void 0 === t ? void 0 : t.highScoreTriggerRatio;
return "number" == typeof e && Number.isFinite(e) && e > 0 && e < 1 ? e : .75;
},
enumerable: !1,
configurable: !0
});
Object.defineProperty(e.prototype, "puzzleTimeAdvanceSec", {
get: function() {
var t, e = null === (t = this.props) || void 0 === t ? void 0 : t.puzzleTimeAdvanceSec;
return "number" == typeof e && Number.isFinite(e) && e > 0 ? Math.floor(e) : 20;
},
enumerable: !1,
configurable: !0
});
Object.defineProperty(e.prototype, "triggerPuzzleRatio", {
get: function() {
var t, e = null === (t = this.props) || void 0 === t ? void 0 : t.triggerPuzzleRatio;
return "number" == typeof e && Number.isFinite(e) && e > 0 && e < 1 ? e : .2;
},
enumerable: !1,
configurable: !0
});
Object.defineProperty(e.prototype, "distinctClearPatternCount", {
get: function() {
var t, e = null === (t = this.props) || void 0 === t ? void 0 : t.multiSolutionDistinctClearPatternCount;
return "boolean" == typeof e ? e : !("number" != typeof e || !Number.isFinite(e)) && e;
},
enumerable: !1,
configurable: !0
});
e.prototype.onTriggerBottomOfferAlgo = function() {
this._canStatistics = !1;
if (this.shouldReplaceToMultiSolutionHard("new")) {
this._canStatistics = !0;
var t = hs.algorithmBottomSequenceInfo.algorithmBottomList;
hs.algorithmBottomSequenceInfo.setAlgorithmBottomList(l([ a ], t));
hs.algorithmStrategyInfo.setAlgorithmSourceLevel1(hs.ClassAlgorithmSourceType.AlgoTrait);
hs.algorithmStrategyInfo.setAlgorithmSourceLevel2(this.traitName);
}
};
e.prototype.onDisableBottomOfferAlgo = function(t) {
t.args[0] && t.args[0].callReturnValue && hs.algorithmBottomSequenceInfo.setIsTriggerBottomAlgo(!1);
};
e.prototype.onLegacyBottomOffer = function(t) {
this._canStatistics = !1;
if (this.shouldReplaceToMultiSolutionHard("old")) {
var e = t.args[0] || [];
if (e.indexOf(a) < 0) {
e.unshift(a);
t.args[0] = e;
t.returnState = !0;
this._canStatistics = !0;
hs.algorithmStrategyInfo.setAlgorithmSourceLevel1(hs.ClassAlgorithmSourceType.AlgoTrait);
hs.algorithmStrategyInfo.setAlgorithmSourceLevel2(this.traitName);
}
}
};
e.prototype.shouldReplaceForSource = function(t) {
void 0 === t && (t = !0);
var e = hs.ClassAlgorithmSourceType, o = hs.algorithmStrategyInfo.algorithmSourceLevel1;
return o !== e.AlgoRevive && o !== e.AlgoReviveTrait && (o !== e.AlgoGuide && !this.isReviveExpected());
};
e.prototype.isReviveExpected = function() {
var t = hs.algorithmName.algoExpectedId;
return t === hs.OFFER_TYPE.REVIVE || t === hs.OFFER_TYPE.REVIVE_CLEAR || t === hs.OFFER_TYPE.REVIVE_PROTECT;
};
e.prototype.shouldReplaceToMultiSolutionHard = function() {
var t, e, o, i;
if (!this.shouldReplaceForSource()) return !1;
if (hs.classGameInfo.gameNum <= 0) return !1;
var r = null !== (e = null === (t = hs.classScoreInfo) || void 0 === t ? void 0 : t.score) && void 0 !== e ? e : 0, n = hs.classScoreInfo.highScore;
return 0 != n && (!(r >= n * this.highScoreTriggerRatio) && !!(null !== (i = null === (o = hs.algorithmStrategyInfo) || void 0 === o ? void 0 : o.algorithmList) && void 0 !== i ? i : []).some(function(t) {
return hs.isValueInEnum(t, hs.OFFER_TYPE_DIFFICULTY);
}));
};
e.prototype.onAlgorithmSuccess = function() {
this._canStatistics && (this._canStatistics = !1);
};
return n([ classId("SimpleMultiSolutionTuning2Trait") ], e);
}(Trait);
o.SimpleMultiSolutionTuning2Trait = c;
cc._RF.pop();
}, {} ],
SimpleMultiSolutionTuning2_IOS_Trait: [ function(t, e, o) {
"use strict";
cc._RF.push(e, "6ede31+2C9KeakNFAM20swI", "SimpleMultiSolutionTuning2_IOS_Trait");
var i, r = this && this.__extends || (i = function(t, e) {
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
}), n = this && this.__decorate || function(t, e, o, i) {
var r, n = arguments.length, s = n < 3 ? e : null === i ? i = Object.getOwnPropertyDescriptor(e, o) : i;
if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) s = Reflect.decorate(t, e, o, i); else for (var l = t.length - 1; l >= 0; l--) (r = t[l]) && (s = (n < 3 ? r(s) : n > 3 ? r(e, o, s) : r(e, o)) || s);
return n > 3 && s && Object.defineProperty(e, o, s), s;
};
Object.defineProperty(o, "__esModule", {
value: !0
});
o.SimpleMultiSolutionTuning2_IOS_Trait = void 0;
var s = function(t) {
r(e, t);
function e() {
return null !== t && t.apply(this, arguments) || this;
}
e.prototype.isClassAlgorithmBottomSequenceInfoTriggerBottomOfferAlgo = function(t) {
this.onTriggerBottomOfferAlgo(t);
};
e.prototype.isClassAlgorithmBottomSequenceInfoOnDisableBottomAlgo = function(t) {
this.onDisableBottomOfferAlgo(t);
};
return n([ classId("SimpleMultiSolutionTuning2Trait", "IOS") ], e);
}(t("./SimpleMultiSolutionTuning2Trait").SimpleMultiSolutionTuning2Trait);
o.SimpleMultiSolutionTuning2_IOS_Trait = s;
cc._RF.pop();
}, {
"./SimpleMultiSolutionTuning2Trait": "SimpleMultiSolutionTuning2Trait"
} ]
}, {}, [ "SimpleMultiSolutionTuning2Trait", "SimpleMultiSolutionTuning2_IOS_Trait" ]);
//# sourceMappingURL=index.js.map
