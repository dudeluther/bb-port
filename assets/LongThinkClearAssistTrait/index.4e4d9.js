window.__require = function t(e, i, n) {
function r(o, a) {
if (!i[o]) {
if (!e[o]) {
var u = o.split("/");
u = u[u.length - 1];
if (!e[u]) {
var l = "function" == typeof __require && __require;
if (!a && l) return l(u, !0);
if (s) return s(u, !0);
throw new Error("Cannot find module '" + o + "'");
}
o = u;
}
var h = i[o] = {
exports: {}
};
e[o][0].call(h.exports, function(t) {
return r(e[o][1][t] || t);
}, h, h.exports, t, e, i, n);
}
return i[o].exports;
}
for (var s = "function" == typeof __require && __require, o = 0; o < n.length; o++) r(n[o]);
return r;
}({
LongThinkClearAssistTrait: [ function(t, e, i) {
"use strict";
cc._RF.push(e, "505d8WDjOFLja8lpfvvEc1s", "LongThinkClearAssistTrait");
var n, r = this && this.__extends || (n = function(t, e) {
return (n = Object.setPrototypeOf || {
__proto__: []
} instanceof Array && function(t, e) {
t.__proto__ = e;
} || function(t, e) {
for (var i in e) Object.prototype.hasOwnProperty.call(e, i) && (t[i] = e[i]);
})(t, e);
}, function(t, e) {
n(t, e);
function i() {
this.constructor = t;
}
t.prototype = null === e ? Object.create(e) : (i.prototype = e.prototype, new i());
}), s = this && this.__decorate || function(t, e, i, n) {
var r, s = arguments.length, o = s < 3 ? e : null === n ? n = Object.getOwnPropertyDescriptor(e, i) : n;
if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) o = Reflect.decorate(t, e, i, n); else for (var a = t.length - 1; a >= 0; a--) (r = t[a]) && (o = (s < 3 ? r(o) : s > 3 ? r(e, i, o) : r(e, i)) || o);
return s > 3 && o && Object.defineProperty(e, i, o), o;
}, o = this && this.__values || function(t) {
var e = "function" == typeof Symbol && Symbol.iterator, i = e && t[e], n = 0;
if (i) return i.call(t);
if (t && "number" == typeof t.length) return {
next: function() {
t && n >= t.length && (t = void 0);
return {
value: t && t[n++],
done: !t
};
}
};
throw new TypeError(e ? "Object is not iterable." : "Symbol.iterator is not defined.");
};
Object.defineProperty(i, "__esModule", {
value: !0
});
i.LongThinkClearAssistTrait = void 0;
var a = function(t) {
r(e, t);
function e() {
var e = null !== t && t.apply(this, arguments) || this;
e.STORAGE_KEY = "LongThinkClearAssistTrait_data";
e._data = e.createDefaultData();
e._pendingStepThinkTime = -1;
e._isAlgoSuccess = !1;
e._traitAlgoId = -1;
return e;
}
e.prototype.onCreate = function() {
this._data = this.loadData();
};
e.prototype.onActive = function(t) {
if (hs.tp.isClassGame_ProxyOnGameStart(t)) this.onGameStart(t); else if (hs.tp.isClassDataStatistics_Dot_ProxyOnTouchEnd(t)) this.onTouchEnd(t); else if (hs.tp.isClassDataStatistics_Dot_ProxyOnTouchStart(t)) this.onTouchStart(); else if (hs.tp.isClassTimer_ProxyOnGameHide(t)) this.onGameInterrupted(); else if (hs.tp.isClassRevive_ProxyOnRevive_Success(t)) this.onReviveSuccessOk(); else if (hs.tp.isClassAlgorithmStrategy_Condition_ProxyOnAlgorithmStrategyCondition(t)) this.onAlgorithmPriority(t); else if (hs.tp.isAlgorithmProcessInfoChangeResult(t)) this.handleAlgoResult(t); else if (hs.tpManual.isClassAlgorithmBottomSequenceGPInfoTriggerAfterOfferAlgo(t) && this._isAlgoSuccess) {
hs.algorithmBottomSequenceInfo.setIsTriggerAfterAlgo(!1);
hs.algorithmBottomSequenceInfo.setIsTriggerBottomAlgo(!1);
}
};
Object.defineProperty(e.prototype, "lookbackStepCount", {
get: function() {
var t;
return null !== (t = this.props.lookbackStepCount) && void 0 !== t ? t : 9;
},
enumerable: !1,
configurable: !0
});
Object.defineProperty(e.prototype, "thinkTimeMultiplier", {
get: function() {
var t;
return null !== (t = this.props.thinkTimeMultiplier) && void 0 !== t ? t : 1.5;
},
enumerable: !1,
configurable: !0
});
Object.defineProperty(e.prototype, "safeStepWindow", {
get: function() {
var t;
return null !== (t = this.props.safeStepWindow) && void 0 !== t ? t : 3;
},
enumerable: !1,
configurable: !0
});
Object.defineProperty(e.prototype, "pendingEventStrategy", {
get: function() {
var t;
return null !== (t = this.props.pendingEventStrategy) && void 0 !== t ? t : 0;
},
enumerable: !1,
configurable: !0
});
Object.defineProperty(e.prototype, "safeBranchAssistAlgorithm", {
get: function() {
var t;
return null !== (t = this.props.safeBranchAssistAlgorithm) && void 0 !== t ? t : 0;
},
enumerable: !1,
configurable: !0
});
Object.defineProperty(e.prototype, "reviveSecondRoundAssistAlgorithm", {
get: function() {
var t;
return null !== (t = this.props.reviveSecondRoundAssistAlgorithm) && void 0 !== t ? t : 0;
},
enumerable: !1,
configurable: !0
});
Object.defineProperty(e.prototype, "onActiveCondition", {
get: function() {
return hs.gameInfo.gameMode === hs.GameMode.Class;
},
enumerable: !1,
configurable: !0
});
e.prototype.onGameStart = function(t) {
var e, i = t.args[0], n = !0 === (null === (e = null == i ? void 0 : i.data) || void 0 === e ? void 0 : e.newGame), r = hs.classGameInfo.gameNum;
this._data = this.loadData();
if (n || this._data.gameNum !== r) {
this._data = this.createDefaultData();
this._data.gameNum = r;
} else this._data.gameNum = r;
this._data.ignoreNextValidPlacement = !0;
this._pendingStepThinkTime = -1;
this._isAlgoSuccess = !1;
this.persist();
};
e.prototype.onTouchStart = function() {
if (hs.classGuideInfo.isFinishedGuide && !hs.classGuideInfo.show) {
var t = this.getCurrentGameTime();
this._pendingStepThinkTime = this.computeCurrentThinkTime(t);
}
};
e.prototype.onTouchEnd = function(t) {
if (hs.classGuideInfo.isFinishedGuide && !hs.classGuideInfo.show) {
var e = t.args[0];
if (this.isValidPlacement(e)) {
var i = this.getCurrentGameTime();
if (this._data.ignoreNextValidPlacement) {
this._data.ignoreNextValidPlacement = !1;
this._data.lastValidPlacementGameTime = i;
this._pendingStepThinkTime = -1;
this.persist();
} else {
var n = this.consumePendingStepThinkTime();
if (n < 0) {
this._data.lastValidPlacementGameTime = i;
this.persist();
} else {
var r = this._data.placementCount + 1;
this._data.placementCount = r;
this.tryCreateLongThinkEvent(n, r);
this.pushThinkTime(n);
this.updateObservationProgress(r);
this._data.lastValidPlacementGameTime = i;
this.persist();
}
}
} else this._pendingStepThinkTime = -1;
}
};
e.prototype.onGameInterrupted = function() {
this._pendingStepThinkTime = -1;
this._data.ignoreNextValidPlacement = !0;
this.persist();
};
e.prototype.onReviveSuccessOk = function() {
var t = this._data.event;
if ("observing" === t.status) {
t.status = "pending_revive_second_round";
t.reviveRoundNum = hs.classGameInfo.roundNum;
this.persist();
}
};
e.prototype.onAlgorithmPriority = function(t) {
var e = this._data.event;
this._isAlgoSuccess = !1;
this._traitAlgoId = -1;
"pending_safe_assist" !== e.status ? "pending_revive_second_round" === e.status && hs.classGameInfo.gameNum === this._data.gameNum && hs.classGameInfo.roundNum > e.reviveRoundNum && this.applyAssist(t, this.reviveSecondRoundAssistAlgorithm) : this.applyAssist(t, this.safeBranchAssistAlgorithm);
};
e.prototype.applyAssist = function(t, e) {
var i = this.getAssistOfferType(e);
this._traitAlgoId = i;
hs.algorithmStrategyInfo.setAlgorithmPriorityList([ i ]);
t.returnState = !0;
this.resetEventOnly();
};
e.prototype.tryCreateLongThinkEvent = function(t, e) {
if (!(this._data.stepThinkTimes.length < this.lookbackStepCount)) {
var i = this._data.stepThinkTimes.slice(-this.lookbackStepCount);
t <= this.computeAverage(i) * this.thinkTimeMultiplier || this.canReplaceCurrentEvent() && (this._data.event = {
status: "observing",
triggerPlacementCount: e,
observingSteps: 0,
reviveRoundNum: -1
});
}
};
e.prototype.updateObservationProgress = function(t) {
var e = this._data.event;
if ("observing" === e.status && !(t <= e.triggerPlacementCount)) {
e.observingSteps += 1;
e.observingSteps >= this.safeStepWindow && (e.status = "pending_safe_assist");
}
};
e.prototype.canReplaceCurrentEvent = function() {
return "idle" === this._data.event.status || 0 === this.pendingEventStrategy;
};
e.prototype.pushThinkTime = function(t) {
this._data.stepThinkTimes.push(t);
var e = Math.max(this.lookbackStepCount + this.safeStepWindow + 3, 20);
this._data.stepThinkTimes.length > e && (this._data.stepThinkTimes = this._data.stepThinkTimes.slice(-e));
};
e.prototype.computeCurrentThinkTime = function(t) {
var e = this._data.lastValidPlacementGameTime;
return !Number.isFinite(e) || e <= 0 ? t : t < e ? t : Math.max(0, t - e);
};
e.prototype.consumePendingStepThinkTime = function() {
var t = this._pendingStepThinkTime;
this._pendingStepThinkTime = -1;
return !Number.isFinite(t) || t < 0 ? -1 : t;
};
e.prototype.getCurrentGameTime = function() {
var t = hs.classGameInfo.gameTime;
return !Number.isFinite(t) || t < 0 ? 0 : t;
};
e.prototype.getAssistOfferType = function(t) {
return 1 === t ? hs.OFFER_TYPE.CLEAR_BOARD : hs.OFFER_TYPE.HISTORY_CLEAR_BOARD;
};
e.prototype.isValidPlacement = function(t) {
var e = null == t ? void 0 : t.state;
if (!e) return !1;
var i = e.putPos;
return !!(Array.isArray(i) && i.length > 0) || "number" == typeof e.touchBlockId && e.touchBlockId > 0;
};
e.prototype.computeAverage = function(t) {
var e, i;
if (!Array.isArray(t) || 0 === t.length) return 0;
var n = 0, r = 0;
try {
for (var s = o(t), a = s.next(); !a.done; a = s.next()) {
var u = a.value;
if (Number.isFinite(u)) {
n += u;
r += 1;
}
}
} catch (t) {
e = {
error: t
};
} finally {
try {
a && !a.done && (i = s.return) && i.call(s);
} finally {
if (e) throw e.error;
}
}
return 0 === r ? 0 : n / r;
};
e.prototype.resetEventOnly = function() {
this._data.event = this.createDefaultData().event;
this.persist();
};
e.prototype.handleAlgoResult = function(t) {
if (hs.gameInfo.gameMode === hs.GameMode.Class) {
var e = t.args[0];
-1 !== this._traitAlgoId && e.algoType === hs.OFFER_ALGORITHM_SDK_TYPE[this._traitAlgoId] && e.blockIds && 3 === e.blockIds.length && (this._isAlgoSuccess = !0);
}
};
e.prototype.createDefaultData = function() {
return {
gameNum: -1,
lastValidPlacementGameTime: 0,
ignoreNextValidPlacement: !1,
placementCount: 0,
stepThinkTimes: [],
event: {
status: "idle",
triggerPlacementCount: 0,
observingSteps: 0,
reviveRoundNum: -1
}
};
};
e.prototype.loadData = function() {
var t = this.createDefaultData(), e = hs.storage.getItem(this.STORAGE_KEY, t);
if (!e || "object" != typeof e) return t;
var i = Array.isArray(e.stepThinkTimes) ? e.stepThinkTimes.filter(function(t) {
return Number.isFinite(t);
}).map(function(t) {
return Number(t);
}) : [];
return {
gameNum: Number.isFinite(e.gameNum) ? e.gameNum : t.gameNum,
lastValidPlacementGameTime: Number.isFinite(e.lastValidPlacementGameTime) ? e.lastValidPlacementGameTime : t.lastValidPlacementGameTime,
ignoreNextValidPlacement: !0 === e.ignoreNextValidPlacement,
placementCount: Number.isFinite(e.placementCount) ? e.placementCount : t.placementCount,
stepThinkTimes: i,
event: this.normalizeEventState(e.event)
};
};
e.prototype.normalizeEventState = function(t) {
var e = this.createDefaultData().event;
if (!t || "object" != typeof t) return e;
var i = t;
return {
status: this.isValidEventStatus(i.status) ? i.status : e.status,
triggerPlacementCount: Number.isFinite(i.triggerPlacementCount) ? i.triggerPlacementCount : e.triggerPlacementCount,
observingSteps: Number.isFinite(i.observingSteps) ? i.observingSteps : e.observingSteps,
reviveRoundNum: Number.isFinite(i.reviveRoundNum) ? i.reviveRoundNum : e.reviveRoundNum
};
};
e.prototype.isValidEventStatus = function(t) {
return "idle" === t || "observing" === t || "waiting_revive" === t || "pending_safe_assist" === t || "pending_revive_second_round" === t;
};
e.prototype.persist = function() {
hs.storage.setItem(this.STORAGE_KEY, this._data);
};
return s([ classId("LongThinkClearAssistTrait") ], e);
}(Trait);
i.LongThinkClearAssistTrait = a;
cc._RF.pop();
}, {} ],
LongThinkClearAssist_Ios_Trait: [ function(t, e, i) {
"use strict";
cc._RF.push(e, "ea64fDtyzxEer60xgZTfXSd", "LongThinkClearAssist_Ios_Trait");
var n, r = this && this.__extends || (n = function(t, e) {
return (n = Object.setPrototypeOf || {
__proto__: []
} instanceof Array && function(t, e) {
t.__proto__ = e;
} || function(t, e) {
for (var i in e) Object.prototype.hasOwnProperty.call(e, i) && (t[i] = e[i]);
})(t, e);
}, function(t, e) {
n(t, e);
function i() {
this.constructor = t;
}
t.prototype = null === e ? Object.create(e) : (i.prototype = e.prototype, new i());
}), s = this && this.__decorate || function(t, e, i, n) {
var r, s = arguments.length, o = s < 3 ? e : null === n ? n = Object.getOwnPropertyDescriptor(e, i) : n;
if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) o = Reflect.decorate(t, e, i, n); else for (var a = t.length - 1; a >= 0; a--) (r = t[a]) && (o = (s < 3 ? r(o) : s > 3 ? r(e, i, o) : r(e, i)) || o);
return s > 3 && o && Object.defineProperty(e, i, o), o;
};
Object.defineProperty(i, "__esModule", {
value: !0
});
i.LongThinkClearAssist_Ios_Trait = void 0;
var o = function(t) {
r(e, t);
function e() {
return null !== t && t.apply(this, arguments) || this;
}
e.prototype.isClassAlgorithmStrategyIOS_Condition_ProxyOnAlgorithmStrategyCondition = function(t) {
this.onAlgorithmPriority(t);
};
e.prototype.isClassAlgorithmBottomSequenceInfoTriggerAfterOfferAlgo = function() {
if (this._isAlgoSuccess) {
hs.algorithmBottomSequenceInfo.setIsTriggerAfterAlgo(!1);
hs.algorithmBottomSequenceInfo.setIsTriggerBottomAlgo(!1);
}
};
return s([ classId("LongThinkClearAssistTrait", "Ios") ], e);
}(t("./LongThinkClearAssistTrait").LongThinkClearAssistTrait);
i.LongThinkClearAssist_Ios_Trait = o;
cc._RF.pop();
}, {
"./LongThinkClearAssistTrait": "LongThinkClearAssistTrait"
} ]
}, {}, [ "LongThinkClearAssistTrait", "LongThinkClearAssist_Ios_Trait" ]);
//# sourceMappingURL=index.js.map
