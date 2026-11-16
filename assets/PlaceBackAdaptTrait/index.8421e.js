window.__require = function t(e, a, o) {
function r(s, n) {
if (!a[s]) {
if (!e[s]) {
var c = s.split("/");
c = c[c.length - 1];
if (!e[c]) {
var u = "function" == typeof __require && __require;
if (!n && u) return u(c, !0);
if (i) return i(c, !0);
throw new Error("Cannot find module '" + s + "'");
}
s = c;
}
var h = a[s] = {
exports: {}
};
e[s][0].call(h.exports, function(t) {
return r(e[s][1][t] || t);
}, h, h.exports, t, e, a, o);
}
return a[s].exports;
}
for (var i = "function" == typeof __require && __require, s = 0; s < o.length; s++) r(o[s]);
return r;
}({
PlaceBackAdaptTrait: [ function(t, e, a) {
"use strict";
cc._RF.push(e, "8db3bHUcHNKkpLIwlMw/cVp", "PlaceBackAdaptTrait");
var o, r = this && this.__extends || (o = function(t, e) {
return (o = Object.setPrototypeOf || {
__proto__: []
} instanceof Array && function(t, e) {
t.__proto__ = e;
} || function(t, e) {
for (var a in e) Object.prototype.hasOwnProperty.call(e, a) && (t[a] = e[a]);
})(t, e);
}, function(t, e) {
o(t, e);
function a() {
this.constructor = t;
}
t.prototype = null === e ? Object.create(e) : (a.prototype = e.prototype, new a());
}), i = this && this.__decorate || function(t, e, a, o) {
var r, i = arguments.length, s = i < 3 ? e : null === o ? o = Object.getOwnPropertyDescriptor(e, a) : o;
if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) s = Reflect.decorate(t, e, a, o); else for (var n = t.length - 1; n >= 0; n--) (r = t[n]) && (s = (i < 3 ? r(s) : i > 3 ? r(e, a, s) : r(e, a)) || s);
return i > 3 && s && Object.defineProperty(e, a, s), s;
};
Object.defineProperty(a, "__esModule", {
value: !0
});
a.PlaceBackAdaptTrait = void 0;
var s = function(t) {
r(e, t);
function e() {
var e = null !== t && t.apply(this, arguments) || this;
e.lastTouchTimeStamp = 0;
e.placeBackAdaptState = {
startRoundNum: -1,
endRoundNum: -1
};
e.algorithmOfferStage = "";
return e;
}
e.prototype.registerTraitEventsMethods = function() {
return [ {
className: "ClassTimer_Proxy",
methodName: "onGameShow"
}, {
className: "BlocksProducer_Proxy",
methodName: "onTouchEnd"
}, {
className: "ClassGame_Proxy",
methodName: "onClassGameStart"
} ];
};
e.prototype.onActive = function(t) {
var e, a;
if (hs.gameInfo.gameMode === hs.GameMode.Class) {
if (hs.tp.isUiChange_ProxyHandleUI(t) && "ClassGame" === (null === (a = null === (e = t.args) || void 0 === e ? void 0 : e[0]) || void 0 === a ? void 0 : a.name)) {
this.setLastTouchTimeStamp();
this.resetPlaceBackAdaptState();
this.recordAlgorithmOfferStage();
}
if (hs.tp.isClassGame_ProxyOnClassGameStart(t)) {
this.setLastTouchTimeStamp();
this.resetPlaceBackAdaptState();
this.recordAlgorithmOfferStage();
}
hs.tp.isClassTimer_ProxyOnGameShow(t) && this.resetPlaceBackAdaptState();
hs.tp.isBlocksProducer_ProxyOnTouchEnd(t) && this.setLastTouchTimeStamp();
if (hs.tp.isBlocksProducerTouchOnTouchStart(t)) {
this.checkAfter60Seconds();
this.setLastTouchTimeStamp();
}
hs.tp.isAlgorithmProcessInfoAlgorithmSuccess(t) && this.recordAlgorithmOfferStage();
if (hs.tp.isClassAlgorithmStrategy_Deal_ProxyTriggerSpecialTrait(t) && this.isEffectRound()) {
hs.algorithmStrategyInfo.setAlgorithmSourceLevel1(hs.ClassAlgorithmSourceType.AlgoTrait);
hs.algorithmStrategyInfo.setAlgorithmSourceLevel2(this.traitName);
hs.algorithmStrategyInfo.setAlgorithmList([ hs.OFFER_TYPE.TRAVEL_TIAN_KONG_XIAO_CHU ]);
t.returnState = !0;
}
}
};
e.prototype.isEffectRound = function() {
var t = this.getRoundNum();
return t >= this.placeBackAdaptState.startRoundNum && t <= this.placeBackAdaptState.endRoundNum;
};
e.prototype.checkAfter60Seconds = function() {
if (this.lastTouchTimeStamp && Date.now() - this.lastTouchTimeStamp > 6e4) {
var t = this.algorithmOfferStage;
if ("" !== t) {
var e = this.getRoundNum();
this.placeBackAdaptState.startRoundNum = e + 1;
this.placeBackAdaptState.endRoundNum = e + this.getEffectRounds(t);
}
}
};
e.prototype.setLastTouchTimeStamp = function() {
this.lastTouchTimeStamp = Date.now();
};
e.prototype.resetPlaceBackAdaptState = function() {
this.placeBackAdaptState.startRoundNum = -1;
this.placeBackAdaptState.endRoundNum = -1;
};
e.prototype.getRoundNum = function() {
return hs.gameInfo.gameMode === hs.GameMode.Class ? hs.classGameInfo.roundNum : hs.gameInfo.gameMode === hs.GameMode.Chapter ? hs.chapterGameInfo.roundNum : 0;
};
e.prototype.getAlgorithmOfferStage = function() {
var t, e, a = TRAIT("IsPuzzleTimeTrait"), o = TRAIT("Puzzle100Trait");
return !0 === (null === (t = null == o ? void 0 : o.state) || void 0 === t ? void 0 : t.isHard) ? "after100" : (null === (e = null == a ? void 0 : a.state) || void 0 === e ? void 0 : e.initTime) && 0 !== a.state.initTime && !1 === a.state.isHardFirst ? "betweenTimingAnd100" : "beforeTiming";
};
e.prototype.getEffectRounds = function(t) {
return "beforeTiming" === t ? 5 : "betweenTimingAnd100" === t ? 3 : "after100" === t ? 1 : 0;
};
e.prototype.recordAlgorithmOfferStage = function() {
this.algorithmOfferStage = this.getAlgorithmOfferStage();
};
return i([ classId("PlaceBackAdaptTrait"), classMethodWatch() ], e);
}(Trait);
a.PlaceBackAdaptTrait = s;
cc._RF.pop();
}, {} ]
}, {}, [ "PlaceBackAdaptTrait" ]);
//# sourceMappingURL=index.js.map
