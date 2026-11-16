window.__require = function t(e, r, a) {
function o(i, n) {
if (!r[i]) {
if (!e[i]) {
var c = i.split("/");
c = c[c.length - 1];
if (!e[c]) {
var l = "function" == typeof __require && __require;
if (!n && l) return l(c, !0);
if (s) return s(c, !0);
throw new Error("Cannot find module '" + i + "'");
}
i = c;
}
var h = r[i] = {
exports: {}
};
e[i][0].call(h.exports, function(t) {
return o(e[i][1][t] || t);
}, h, h.exports, t, e, r, a);
}
return r[i].exports;
}
for (var s = "function" == typeof __require && __require, i = 0; i < a.length; i++) o(a[i]);
return o;
}({
FastNearTkxcClassTrait: [ function(t, e, r) {
"use strict";
cc._RF.push(e, "ccac4O8j85Ep6cD2W/sYfFL", "FastNearTkxcClassTrait");
var a, o = this && this.__extends || (a = function(t, e) {
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
}), s = this && this.__decorate || function(t, e, r, a) {
var o, s = arguments.length, i = s < 3 ? e : null === a ? a = Object.getOwnPropertyDescriptor(e, r) : a;
if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) i = Reflect.decorate(t, e, r, a); else for (var n = t.length - 1; n >= 0; n--) (o = t[n]) && (i = (s < 3 ? o(i) : s > 3 ? o(e, r, i) : o(e, r)) || i);
return s > 3 && i && Object.defineProperty(e, r, i), i;
}, i = this && this.__read || function(t, e) {
var r = "function" == typeof Symbol && t[Symbol.iterator];
if (!r) return t;
var a, o, s = r.call(t), i = [];
try {
for (;(void 0 === e || e-- > 0) && !(a = s.next()).done; ) i.push(a.value);
} catch (t) {
o = {
error: t
};
} finally {
try {
a && !a.done && (r = s.return) && r.call(s);
} finally {
if (o) throw o.error;
}
}
return i;
}, n = this && this.__spread || function() {
for (var t = [], e = 0; e < arguments.length; e++) t = t.concat(i(arguments[e]));
return t;
};
Object.defineProperty(r, "__esModule", {
value: !0
});
r.FastNearTkxcClassTrait = void 0;
var c = function(t) {
o(e, t);
function e() {
var e = null !== t && t.apply(this, arguments) || this;
e.TAG = "[FastNearTkxcClassTrait]";
e._randomValue = 1;
return e;
}
Object.defineProperty(e.prototype, "memThreshold", {
get: function() {
var t, e;
return null !== (e = null === (t = this.props) || void 0 === t ? void 0 : t.mem) && void 0 !== e ? e : 6;
},
enumerable: !1,
configurable: !0
});
Object.defineProperty(e.prototype, "reviveGameNum", {
get: function() {
var t, e;
return null !== (e = null === (t = this.props) || void 0 === t ? void 0 : t.gameNum) && void 0 !== e ? e : 5;
},
enumerable: !1,
configurable: !0
});
Object.defineProperty(e.prototype, "highScorePercent", {
get: function() {
var t, e;
return null !== (e = null === (t = this.props) || void 0 === t ? void 0 : t.highScorePercent) && void 0 !== e ? e : .8;
},
enumerable: !1,
configurable: !0
});
Object.defineProperty(e.prototype, "interceptRate", {
get: function() {
var t, e;
return null !== (e = null === (t = this.props) || void 0 === t ? void 0 : t.rate) && void 0 !== e ? e : .4;
},
enumerable: !1,
configurable: !0
});
e.prototype.data = function() {
return hs.storage.getItem("329309001_FastNearTkxcClass_state", {
lastTravelDate: "",
recentReviveRecord: [],
hasRevivedThisGame: !1,
nextGameTriggered: !1,
currentGameNum: -1,
highScoreInterceptSuccess: !1
});
};
e.prototype.saveState = function() {
hs.storage.setItem("329309001_FastNearTkxcClass_state", this.state);
};
e.prototype.registerTraitEventsMethods = function() {
return [ {
className: "ClassGame_Proxy",
methodName: "onClassGameShow"
}, {
className: "HomePage_Game_Proxy",
methodName: "onEnterChapter"
}, {
className: "ClassAlgorithmLifeCycle_GameStart_Proxy",
methodName: "onGameStart"
}, {
className: "ClassRevive_Proxy",
methodName: "onRevive_Success"
}, {
className: "ClassAlgorithmLifeCycle_GameOver_Proxy",
methodName: "updateGameOverPreDataClear"
}, {
className: "ClassBlockOutStrategy_Proxy",
methodName: "modifyBlockOutResult"
} ];
};
e.prototype.onActive = function(t) {
hs.tp.isHomePage_Game_ProxyOnEnterChapter(t) && this.onEnterChapter();
if (hs.gameInfo.gameMode === hs.GameMode.Class) {
hs.tp.isClassGame_ProxyOnClassGameShow(t) && this.onEnterClass();
hs.tp.isClassAlgorithmLifeCycle_GameStart_ProxyOnGameStart(t) && this.onGameStart();
hs.tp.isClassRevive_ProxyOnRevive_Success(t) && this.onReviveSuccess();
hs.tp.isClassAlgorithmLifeCycle_GameOver_ProxyUpdateGameOverPreDataClear(t) && this.onGameOver(t);
hs.tp.isClassAlgorithmStrategy_Priority_ProxyOnAlgorithmStrategyPriority(t) && this.checkHighScoreIntercept();
hs.tp.isClassAlgorithmStrategy_Replace_ProxyPreprocessingAlgorithm(t) && this.handleAlgorithmStrategy(t);
hs.tp.isClassAlgorithmProcessInfoBottomOffer(t) && this.handleBottomOffer(t);
hs.tp.isClassBlockOutStrategy_ProxyModifyBlockOutResult(t) && this.onBlockOutResult();
}
};
e.prototype.isClassAlgorithmBottomSequenceGPInfoTriggerBottomOfferAlgo = function(t) {
var e = TRAIT("NewBottomOfferReverseModifyTrait");
null != e && e.active && 1 === e.version && hs.gameInfo.gameMode === hs.GameMode.Class && this.handleBottomOffer(t);
};
e.prototype.onEnterChapter = function() {
var t = this.getTodayDateString();
this.state.lastTravelDate = t;
this.saveState();
};
e.prototype.onEnterClass = function() {
this.state.highScoreInterceptSuccess = !1;
this._randomValue = Math.random();
this.saveState();
};
e.prototype.onGameStart = function() {
var t = hs.classGameInfo.gameNum;
if (t !== this.state.currentGameNum) {
this.state.hasRevivedThisGame ? this.state.nextGameTriggered = !0 : this.state.nextGameTriggered = !1;
this.state.hasRevivedThisGame = !1;
this.state.currentGameNum = t;
this.saveState();
}
};
e.prototype.onReviveSuccess = function() {
this.state.hasRevivedThisGame = !0;
this.saveState();
};
e.prototype.onGameOver = function(t) {
t.args[0];
this.state.recentReviveRecord.push(this.state.hasRevivedThisGame);
this.state.recentReviveRecord.length > this.reviveGameNum && (this.state.recentReviveRecord = this.state.recentReviveRecord.slice(-this.reviveGameNum));
this.saveState();
};
e.prototype.onBlockOutResult = function() {
var t = hs.algorithmName.algoActualName, e = hs.OFFER_TYPE_STRINGS[hs.OFFER_TYPE.HARD_PROBABILITY];
if (t.includes(e)) {
this.state.highScoreInterceptSuccess = !0;
this.saveState();
}
};
e.prototype.handleAlgorithmStrategy = function(t) {
this.canTriggerTraitAlgorithm() || t.disable([ "FastNearTkxcTrait" ]);
};
e.prototype.handleBottomOffer = function(t) {
this.canTriggerTraitAlgorithm() || t.disable([ "FastNearTkxcTrait" ]);
};
e.prototype.canTriggerTraitAlgorithm = function() {
var t = hs.deviceLowInfo.totalRAMGB >= this.memThreshold;
if (this.state.nextGameTriggered) return !0;
if (t) {
if (this.state.hasRevivedThisGame) return !0;
} else {
var e = this.getTodayDateString();
if (this.state.lastTravelDate === e) return !0;
}
return !1;
};
e.prototype.checkHighScoreIntercept = function() {
var t;
if (this.state.highScoreInterceptSuccess) ; else if (this.state.recentReviveRecord.some(function(t) {
return !0 === t;
}) && !(hs.classScoreInfo.score <= hs.scoreInfo.highRecordScore * this.highScorePercent)) if (this._randomValue > this.interceptRate) ; else {
hs.algorithmStrategyInfo.setAlgorithmSourceLevel1(hs.ClassAlgorithmSourceType.AlgoTrait);
hs.algorithmStrategyInfo.setAlgorithmSourceLevel2(this.traitName);
var e = [ hs.OFFER_TYPE.HARD_PROBABILITY, hs.OFFER_TYPE.SUI_JI_WU_SI ];
(t = hs.algorithmStrategyInfo.algorithmPriorityList).unshift.apply(t, n(e));
}
};
e.prototype.getTodayDateString = function() {
var t = new Date();
return t.getFullYear() + "-" + String(t.getMonth() + 1).padStart(2, "0") + "-" + String(t.getDate()).padStart(2, "0");
};
return s([ classId("FastNearTkxcClassTrait") ], e);
}(Trait);
r.FastNearTkxcClassTrait = c;
cc._RF.pop();
}, {} ],
FastNearTkxcClass_ios_Trait: [ function(t, e, r) {
"use strict";
cc._RF.push(e, "1fb6e40oEtNl76QmXrOuYIn", "FastNearTkxcClass_ios_Trait");
var a, o = this && this.__extends || (a = function(t, e) {
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
}), s = this && this.__decorate || function(t, e, r, a) {
var o, s = arguments.length, i = s < 3 ? e : null === a ? a = Object.getOwnPropertyDescriptor(e, r) : a;
if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) i = Reflect.decorate(t, e, r, a); else for (var n = t.length - 1; n >= 0; n--) (o = t[n]) && (i = (s < 3 ? o(i) : s > 3 ? o(e, r, i) : o(e, r)) || i);
return s > 3 && i && Object.defineProperty(e, r, i), i;
};
Object.defineProperty(r, "__esModule", {
value: !0
});
r.FastNearTkxcClass_ios_Trait = void 0;
var i = function(t) {
o(e, t);
function e() {
return null !== t && t.apply(this, arguments) || this;
}
e.prototype.isClassAlgorithmStrategyIOS_Priority_ProxyOnAlgorithmStrategyPriority = function() {
hs.gameInfo.gameMode === hs.GameMode.Class && this.checkHighScoreIntercept();
};
e.prototype.isClassAlgorithmStrategyIOS_Replace_ProxyPreprocessingAlgorithm = function(t) {
hs.gameInfo.gameMode === hs.GameMode.Class && this.handleAlgorithmStrategy(t);
};
e.prototype.getIOSMemoryGB = function() {
try {
var t = hs.NativeDeviceInfo.callNativeDeviceInfoForAI();
if (t && t.memorySize) {
var e = t.memorySize.toString(), r = parseFloat(e.split("G")[0]);
if (!isNaN(r) && r > 0) return r;
}
} catch (t) {}
return 0;
};
e.prototype.canTriggerTraitAlgorithm = function() {
var t, e, r = this.getIOSMemoryGB() >= (null !== (e = null === (t = this.props) || void 0 === t ? void 0 : t.mem) && void 0 !== e ? e : 6);
if (this.state.nextGameTriggered) return !0;
if (r) {
if (this.state.hasRevivedThisGame) return !0;
} else {
var a = this.getTodayDateString();
if (this.state.lastTravelDate === a) return !0;
}
return !1;
};
return s([ classId("FastNearTkxcClassTrait", "ios") ], e);
}(t("./FastNearTkxcClassTrait").FastNearTkxcClassTrait);
r.FastNearTkxcClass_ios_Trait = i;
cc._RF.pop();
}, {
"./FastNearTkxcClassTrait": "FastNearTkxcClassTrait"
} ]
}, {}, [ "FastNearTkxcClassTrait", "FastNearTkxcClass_ios_Trait" ]);
//# sourceMappingURL=index.js.map
