window.__require = function e(t, i, o) {
function r(s, a) {
if (!i[s]) {
if (!t[s]) {
var u = s.split("/");
u = u[u.length - 1];
if (!t[u]) {
var c = "function" == typeof __require && __require;
if (!a && c) return c(u, !0);
if (n) return n(u, !0);
throw new Error("Cannot find module '" + s + "'");
}
s = u;
}
var l = i[s] = {
exports: {}
};
t[s][0].call(l.exports, function(e) {
return r(t[s][1][e] || e);
}, l, l.exports, e, t, i, o);
}
return i[s].exports;
}
for (var n = "function" == typeof __require && __require, s = 0; s < o.length; s++) r(o[s]);
return r;
}({
HighWeightSessionQuestionReplacerTrait_ios_Trait: [ function(e, t, i) {
"use strict";
cc._RF.push(t, "cd063njRBBOkITo48QiMIo/", "HighWeightSessionQuestionReplacerTrait_ios_Trait");
var o, r = this && this.__extends || (o = function(e, t) {
return (o = Object.setPrototypeOf || {
__proto__: []
} instanceof Array && function(e, t) {
e.__proto__ = t;
} || function(e, t) {
for (var i in t) Object.prototype.hasOwnProperty.call(t, i) && (e[i] = t[i]);
})(e, t);
}, function(e, t) {
o(e, t);
function i() {
this.constructor = e;
}
e.prototype = null === t ? Object.create(t) : (i.prototype = t.prototype, new i());
}), n = this && this.__decorate || function(e, t, i, o) {
var r, n = arguments.length, s = n < 3 ? t : null === o ? o = Object.getOwnPropertyDescriptor(t, i) : o;
if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) s = Reflect.decorate(e, t, i, o); else for (var a = e.length - 1; a >= 0; a--) (r = e[a]) && (s = (n < 3 ? r(s) : n > 3 ? r(t, i, s) : r(t, i)) || s);
return n > 3 && s && Object.defineProperty(t, i, s), s;
};
Object.defineProperty(i, "__esModule", {
value: !0
});
i.HighWeightSessionQuestionReplacerTrait_ios_Trait = void 0;
var s = function(e) {
r(t, e);
function t() {
return null !== e && e.apply(this, arguments) || this;
}
t.prototype.isClassAlgorithmBottomSequenceInfoTriggerBottomOfferAlgo = function() {
this.onBottomOffer();
};
return n([ classId("HighWeightSessionQuestionReplacerTrait", "ios") ], t);
}(e("./HighWeightSessionQuestionReplacerTrait").HighWeightSessionQuestionReplacerTrait);
i.HighWeightSessionQuestionReplacerTrait_ios_Trait = s;
cc._RF.pop();
}, {
"./HighWeightSessionQuestionReplacerTrait": "HighWeightSessionQuestionReplacerTrait"
} ],
HighWeightSessionQuestionReplacerTrait: [ function(e, t, i) {
"use strict";
cc._RF.push(t, "c048931GWxE95Tm3ZBWqBm+", "HighWeightSessionQuestionReplacerTrait");
var o, r = this && this.__extends || (o = function(e, t) {
return (o = Object.setPrototypeOf || {
__proto__: []
} instanceof Array && function(e, t) {
e.__proto__ = t;
} || function(e, t) {
for (var i in t) Object.prototype.hasOwnProperty.call(t, i) && (e[i] = t[i]);
})(e, t);
}, function(e, t) {
o(e, t);
function i() {
this.constructor = e;
}
e.prototype = null === t ? Object.create(t) : (i.prototype = t.prototype, new i());
}), n = this && this.__decorate || function(e, t, i, o) {
var r, n = arguments.length, s = n < 3 ? t : null === o ? o = Object.getOwnPropertyDescriptor(t, i) : o;
if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) s = Reflect.decorate(e, t, i, o); else for (var a = e.length - 1; a >= 0; a--) (r = e[a]) && (s = (n < 3 ? r(s) : n > 3 ? r(t, i, s) : r(t, i)) || s);
return n > 3 && s && Object.defineProperty(t, i, s), s;
};
Object.defineProperty(i, "__esModule", {
value: !0
});
i.HighWeightSessionQuestionReplacerTrait = void 0;
var s = function(e) {
r(t, e);
function t() {
var t = null !== e && e.apply(this, arguments) || this;
t._lastObservedNetworkState = !0;
t._hasOfflineToOnlineSwitched = !1;
t._attemptedReplaceThisRound = !1;
t._gmNetworkState = null;
return t;
}
Object.defineProperty(t.prototype, "replaceProbability", {
get: function() {
var e, t, i = null !== (t = null === (e = this.props) || void 0 === e ? void 0 : e.replaceProbability) && void 0 !== t ? t : .5;
return Math.max(0, Math.min(1, i));
},
enumerable: !1,
configurable: !0
});
Object.defineProperty(t.prototype, "minGameTime", {
get: function() {
var e, t;
return null !== (t = null === (e = this.props) || void 0 === e ? void 0 : e.minGameTime) && void 0 !== t ? t : 300;
},
enumerable: !1,
configurable: !0
});
Object.defineProperty(t.prototype, "maxGameTime", {
get: function() {
var e, t;
return null !== (t = null === (e = this.props) || void 0 === e ? void 0 : e.maxGameTime) && void 0 !== t ? t : 360;
},
enumerable: !1,
configurable: !0
});
Object.defineProperty(t.prototype, "currentNetworkState", {
get: function() {
return null !== this._gmNetworkState ? this._gmNetworkState : hs.NativeNetwork.getNetWorkState();
},
enumerable: !1,
configurable: !0
});
t.prototype.onCreate = function() {
this.registerGM();
};
t.prototype.onActive = function(e) {
hs.tp.isHomePage_Game_ProxyOnEnterClass(e) && this.onEnterEndless();
hs.tp.isClassAlgorithmStrategy_Run_ProxyResetAlgorithmData(e) && this.onRoundStart();
hs.tpManual.isClassAlgorithmBottomSequenceGPInfoTriggerBottomOfferAlgo(e) && this.onBottomOffer();
};
t.prototype.onEnterEndless = function() {
this._hasOfflineToOnlineSwitched || (this._lastObservedNetworkState = this.currentNetworkState);
};
t.prototype.onRoundStart = function() {
if (!this._hasOfflineToOnlineSwitched) {
var e = this.currentNetworkState;
!this._lastObservedNetworkState && e && (this._hasOfflineToOnlineSwitched = !0);
}
};
Object.defineProperty(t.prototype, "puzzle100ElapsedSeconds", {
get: function() {
var e, t = TRAIT("Puzzle100Trait"), i = (null == t ? void 0 : t.active) ? null === (e = t.state) || void 0 === e ? void 0 : e.initTime : 0;
return !Number.isFinite(i) || i <= 0 ? -1 : (Date.now() - i) / 1e3;
},
enumerable: !1,
configurable: !0
});
t.prototype.isInGameTimeRange = function() {
var e = this.puzzle100ElapsedSeconds;
return Number.isFinite(e) && e >= this.minGameTime && e <= this.maxGameTime;
};
t.prototype.isCurrentDeathPuzzle = function() {
var e = hs.algorithmName.algoActualIdByPos;
return hs.isValueInEnum(e, hs.OFFER_TYPE_DIE);
};
t.prototype.onBottomOffer = function() {
this._attemptedReplaceThisRound = !1;
if (this._hasOfflineToOnlineSwitched && this.isCurrentDeathPuzzle()) if (Math.random() >= this.replaceProbability) ; else {
hs.algorithmBottomSequenceInfo.setAlgorithmBottomList([ hs.OFFER_TYPE.KUN_NAN_TI ]);
this._attemptedReplaceThisRound = !0;
}
};
t.prototype.registerGM = function() {};
t.prototype.onDestroy = function() {};
return n([ classId("HighWeightSessionQuestionReplacerTrait") ], t);
}(Trait);
i.HighWeightSessionQuestionReplacerTrait = s;
cc._RF.pop();
}, {} ]
}, {}, [ "HighWeightSessionQuestionReplacerTrait", "HighWeightSessionQuestionReplacerTrait_ios_Trait" ]);
//# sourceMappingURL=index.js.map
