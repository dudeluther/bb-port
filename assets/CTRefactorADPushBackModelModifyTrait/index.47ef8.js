window.__require = function t(e, r, o) {
function a(n, s) {
if (!r[n]) {
if (!e[n]) {
var u = n.split("/");
u = u[u.length - 1];
if (!e[u]) {
var p = "function" == typeof __require && __require;
if (!s && p) return p(u, !0);
if (i) return i(u, !0);
throw new Error("Cannot find module '" + n + "'");
}
n = u;
}
var c = r[n] = {
exports: {}
};
e[n][0].call(c.exports, function(t) {
return a(e[n][1][t] || t);
}, c, c.exports, t, e, r, o);
}
return r[n].exports;
}
for (var i = "function" == typeof __require && __require, n = 0; n < o.length; n++) a(o[n]);
return a;
}({
CTRefactorADPushBackModelModifyTrait: [ function(t, e, r) {
"use strict";
cc._RF.push(e, "ff689sqywxOwpniL7/SqfDC", "CTRefactorADPushBackModelModifyTrait");
var o, a = this && this.__extends || (o = function(t, e) {
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
}), i = this && this.__assign || function() {
return (i = Object.assign || function(t) {
for (var e, r = 1, o = arguments.length; r < o; r++) {
e = arguments[r];
for (var a in e) Object.prototype.hasOwnProperty.call(e, a) && (t[a] = e[a]);
}
return t;
}).apply(this, arguments);
}, n = this && this.__decorate || function(t, e, r, o) {
var a, i = arguments.length, n = i < 3 ? e : null === o ? o = Object.getOwnPropertyDescriptor(e, r) : o;
if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) n = Reflect.decorate(t, e, r, o); else for (var s = t.length - 1; s >= 0; s--) (a = t[s]) && (n = (i < 3 ? a(n) : i > 3 ? a(e, r, n) : a(e, r)) || n);
return i > 3 && n && Object.defineProperty(e, r, n), n;
};
Object.defineProperty(r, "__esModule", {
value: !0
});
r.CTRefactorADPushBackModelModifyTrait = void 0;
var s = function(t) {
a(e, t);
function e() {
var e = null !== t && t.apply(this, arguments) || this;
e._data = null;
return e;
}
e.prototype.data = function() {
return {
plusTime: 0,
multiple: 1,
delayTIme: 120,
roundPlus: 0,
isHard: !0,
isHighest: !0
};
};
Object.defineProperty(e.prototype, "multiple", {
get: function() {
return hs.traitConfigSafePropsInfo.getSafePropValueByKey("ADPushBackModelModifyTrait", "multiple", this.props, 1);
},
enumerable: !1,
configurable: !0
});
Object.defineProperty(e.prototype, "delayTime", {
get: function() {
return hs.traitConfigSafePropsInfo.getSafePropValueByKey("ADPushBackModelModifyTrait", "dealyTIme", this.props, 120);
},
enumerable: !1,
configurable: !0
});
Object.defineProperty(e.prototype, "roundPlus", {
get: function() {
return hs.traitConfigSafePropsInfo.getSafePropValueByKey("ADPushBackModelModifyTrait", "roundPlus", this.props, 0);
},
enumerable: !1,
configurable: !0
});
Object.defineProperty(e.prototype, "hardPer", {
get: function() {
return hs.traitConfigSafePropsInfo.getSafePropValueByKey("ADPushBackModelModifyTrait", "hardPer", this.props, 0);
},
enumerable: !1,
configurable: !0
});
e.prototype.onCreate = function() {
this._data = storage.getItem("ADPushBackModelTraitKey", {
maxEcpm: 0
});
this.state.multiple = this.multiple;
this.state.delayTIme = this.delayTime;
this.state.roundPlus = this.roundPlus;
};
e.prototype.onAlgorithmStrategyGameInit = function() {
this.state.plusTime = 0;
};
e.prototype.onPreprocessConditionContext = function() {
var t = this.doCheck(), e = this.state.plusTime < this.roundPlus, r = this.state.isHard, o = this.checkHardPer();
return buildLazyConditionContext({
canOffer: function() {
return ASContext(t, "是否通过广告反推ECPM校验");
},
isPlusRound: function() {
return ASContext(e, "是否仍处于清盘Plus轮数内");
},
hitHardPer: function() {
return ASContext(o, "是否命中困难难题概率");
},
isHard: function() {
return ASContext(r, "是否为困难难题");
}
});
};
e.prototype.onPreprocessConditions = function() {
return {
priority: [ {
conditions: {
and: [ {
fact: "canOffer",
operator: "=",
value: !0
}, {
fact: "isPlusRound",
operator: "=",
value: !0
} ]
},
event: {
type: "recordClearBoardPlus"
},
flow: "clearBoardPlus",
gameMode: "class",
platform: "gp"
}, {
conditions: {
and: [ {
fact: "canOffer",
operator: "=",
value: !0
}, {
fact: "isPlusRound",
operator: "=",
value: !1
}, {
fact: "hitHardPer",
operator: "=",
value: !0
}, {
fact: "isHard",
operator: "=",
value: !0
} ]
},
flow: "hardPuzzle",
gameMode: "class",
platform: "gp"
}, {
conditions: {
and: [ {
fact: "canOffer",
operator: "=",
value: !0
}, {
fact: "isPlusRound",
operator: "=",
value: !1
}, {
fact: "hitHardPer",
operator: "=",
value: !0
}, {
fact: "isHard",
operator: "=",
value: !1
} ]
},
flow: "notHardPuzzle",
gameMode: "class",
platform: "gp"
} ]
};
};
e.prototype.onPreprocessActions = function() {
return {
priority: {
clearBoardPlus: [ {
operator: "AlgorithmStrategyAlgorithmPriorityListOperator",
type: "unshift",
args: [ [ hs.OFFER_TYPE_BASE.CLEAR_BOARD, hs.OFFER_TYPE_BLANK.TIAN_KONG_XIAO_CHU ] ]
} ],
hardPuzzle: [ {
operator: "AlgorithmStrategyAlgorithmPriorityListOperator",
type: "unshift",
args: [ hs.OFFER_TYPE_DIFFICULTY.KUN_NAN_TI ]
} ],
notHardPuzzle: [ {
operator: "AlgorithmStrategyAlgorithmPriorityListOperator",
type: "unshift",
args: [ hs.OFFER_TYPE_DIE.ZHI_SI_TI ]
} ]
}
};
};
e.prototype.recordClearBoardPlus = function() {
this.state.plusTime++;
this.saveData();
};
e.prototype.doCheck = function() {
var t = this.state.delayTIme;
if (hs.classGameInfo.gameTime / 1e3 < t) return !1;
var e = this._data.maxEcpm, r = hs.ecpmInfo.getLastAdEcpm(hs.AdvertiseType.interstitial), o = hs.ecpmInfo.getMaxEcpm(hs.AdvertiseType.interstitial) / 1e3 || 0, a = this.state.multiple;
this.updateCacheMaxEcpm();
return r > 0 ? o > r * a : e > 0 && o > e * a;
};
e.prototype.updateCacheMaxEcpm = function() {
var t = this._data.maxEcpm, e = hs.ecpmInfo.getMaxEcpm(hs.AdvertiseType.interstitial) / 1e3 || 0;
if (e > t * this.state.multiple) {
this._data.maxEcpm = e;
storage.setItem("ADPushBackModelTraitKey", this._data);
}
};
e.prototype.saveData = function() {
hs.storage.setItem("ADPushBackModelTraitKey", i({}, this._data));
};
e.prototype.checkHardPer = function() {
return Math.random() <= this.hardPer;
};
return n([ classId("CTRefactorADPushBackModelModifyTrait") ], e);
}(Trait);
r.CTRefactorADPushBackModelModifyTrait = s;
cc._RF.pop();
}, {} ]
}, {}, [ "CTRefactorADPushBackModelModifyTrait" ]);
//# sourceMappingURL=index.js.map
