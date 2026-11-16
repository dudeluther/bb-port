window.__require = function t(e, o, r) {
function i(n, a) {
if (!o[n]) {
if (!e[n]) {
var h = n.split("/");
h = h[h.length - 1];
if (!e[h]) {
var l = "function" == typeof __require && __require;
if (!a && l) return l(h, !0);
if (s) return s(h, !0);
throw new Error("Cannot find module '" + n + "'");
}
n = h;
}
var c = o[n] = {
exports: {}
};
e[n][0].call(c.exports, function(t) {
return i(e[n][1][t] || t);
}, c, c.exports, t, e, o, r);
}
return o[n].exports;
}
for (var s = "function" == typeof __require && __require, n = 0; n < r.length; n++) i(r[n]);
return i;
}({
LimitHighComboTrait: [ function(t, e, o) {
"use strict";
cc._RF.push(e, "ba876lQjbpD36ds2r0FmH4L", "LimitHighComboTrait");
var r, i = this && this.__extends || (r = function(t, e) {
return (r = Object.setPrototypeOf || {
__proto__: []
} instanceof Array && function(t, e) {
t.__proto__ = e;
} || function(t, e) {
for (var o in e) Object.prototype.hasOwnProperty.call(e, o) && (t[o] = e[o]);
})(t, e);
}, function(t, e) {
r(t, e);
function o() {
this.constructor = t;
}
t.prototype = null === e ? Object.create(e) : (o.prototype = e.prototype, new o());
}), s = this && this.__decorate || function(t, e, o, r) {
var i, s = arguments.length, n = s < 3 ? e : null === r ? r = Object.getOwnPropertyDescriptor(e, o) : r;
if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) n = Reflect.decorate(t, e, o, r); else for (var a = t.length - 1; a >= 0; a--) (i = t[a]) && (n = (s < 3 ? i(n) : s > 3 ? i(e, o, n) : i(e, o)) || n);
return s > 3 && n && Object.defineProperty(e, o, n), n;
};
Object.defineProperty(o, "__esModule", {
value: !0
});
o.LimitHighComboTrait = void 0;
var n = function(t) {
i(e, t);
function e() {
var e = null !== t && t.apply(this, arguments) || this;
e.notOverHighestScoreGameNum = 0;
e.shouldReplaceBlankAndHard = !1;
e.shouldReplaceBlankAndShang = !1;
e.useLimitHigh = !1;
return e;
}
e.prototype.registerTraitEventsMethods = function() {
return [ {
className: "ClassGameOver_GameEnd_Proxy",
methodName: "onGameEnd"
}, {
className: "ClassGame_Replay_Proxy",
methodName: "onGameReplay"
}, {
className: "ClassCombo_Proxy",
methodName: "onTouchEnd"
} ];
};
e.prototype.onActive = function(t) {
(hs.tp.isClassGameOver_GameEnd_ProxyOnGameEnd(t) || hs.tp.isClassGame_Replay_ProxyOnGameReplay(t)) && this.recordNotOverHighestScoreGameNum();
if (hs.tp.isClassCombo_ProxyOnTouchEnd(t)) {
var e = t.args[0].state, o = e.continuousEliminateTimes;
3 === e.remainBlockProducerCount && this.calcIsTrigger(o);
}
hs.tp.isClassAlgorithmStrategy_Replace_ProxyPreprocessingBlankAlgorithm(t) && (this.shouldReplaceBlankAndHard || this.shouldReplaceBlankAndShang) && this.replaceBlankAlgorithm();
hs.tp.isClassAlgorithmStrategy_Replace_ProxyPreprocessingShangAlgorithm(t) && this.shouldReplaceBlankAndShang && this.replaceShangAlgorithm();
hs.tp.isClassAlgorithmStrategy_Replace_ProxyPreprocessingDiffAlgorithm(t) && this.shouldReplaceBlankAndHard && this.replaceDiffAlgorithm();
};
e.prototype.recordNotOverHighestScoreGameNum = function() {
var t = hs.scoreInfo, e = t.highScore;
t.score < e ? this.notOverHighestScoreGameNum++ : this.notOverHighestScoreGameNum = 0;
};
e.prototype.calcIsTrigger = function(t) {
this.shouldReplaceBlankAndHard = !1;
this.shouldReplaceBlankAndShang = !1;
this.useLimitHigh = !1;
if (t <= this.props.comboCount) ; else {
var e = hs.scoreInfo, o = e.highScore, r = e.score;
if (this.props.gameRound <= this.notOverHighestScoreGameNum && r < .8 * o) this.shouldReplaceBlankAndHard = !0; else if (Math.random() < this.props.probability) {
this.shouldReplaceBlankAndShang = !0;
this.useLimitHigh = this.shouldUseLimitHighCombo();
}
}
};
e.prototype.shouldUseLimitHighCombo = function() {
var t = new hs.BinaryBoard(), e = t.getWeightValueObj(hs.boardInfo.faceBlocks);
return 64 - t.getEmptyNumObj() < 18 || e < 280;
};
e.prototype.replaceBlankAlgorithm = function() {
this.replaceAlgorithmByTypes([ hs.OFFER_TYPE.TIAN_KONG_XIAO_CHU, hs.OFFER_TYPE.ALGO_QUICK, hs.OFFER_TYPE.ALGO_FILL_MORE_AREA, hs.OFFER_TYPE.ALGO_MIX_TKXC ]);
};
e.prototype.replaceShangAlgorithm = function() {
this.replaceAlgorithmByTypes([ hs.OFFER_TYPE.SHANG_ZENG_3, hs.OFFER_TYPE.SHANG_ZENG_4 ]);
};
e.prototype.replaceDiffAlgorithm = function() {
var t = hs.algorithmStrategyInfo.algorithmList.filter(function(t) {
return hs.isValueInEnum(t, hs.OFFER_TYPE_DIFFICULTY);
});
this.replaceAlgorithmByTypes(t);
};
e.prototype.replaceAlgorithmByTypes = function(t) {
var e = hs.algorithmStrategyInfo.algorithmList.concat(), o = hs.OFFER_TYPE.ALGO_MANY_CLEAR_TKXC, r = hs.algorithmStrategyLogic.replaceAlgorithms(e, t, o);
this.useLimitHigh && (r = hs.algorithmStrategyLogic.insertAlgorithms(r, [ o ], hs.OFFER_TYPE.ALGO_LIMIT_HIGH_COMBO));
hs.algorithmStrategyInfo.setAlgorithmList(r);
(e.length !== r.length || e.some(function(t, e) {
return t !== r[e];
})) && hs.algorithmStrategyInfo.setAlgorithmSourceLevel2(this.traitName);
};
s([ hs.storageProperty({
key: "LimitHighComboTrait_notOverHighestScoreGameNum"
}) ], e.prototype, "notOverHighestScoreGameNum", void 0);
s([ hs.Algorithm() ], e.prototype, "onActive", null);
return s([ classId("LimitHighComboTrait") ], e);
}(Trait);
o.LimitHighComboTrait = n;
cc._RF.pop();
}, {} ],
LimitHighCombo_Ios_Trait: [ function(t, e, o) {
"use strict";
cc._RF.push(e, "6d0f0QhztFCabiiTOg3uOHb", "LimitHighCombo_Ios_Trait");
var r, i = this && this.__extends || (r = function(t, e) {
return (r = Object.setPrototypeOf || {
__proto__: []
} instanceof Array && function(t, e) {
t.__proto__ = e;
} || function(t, e) {
for (var o in e) Object.prototype.hasOwnProperty.call(e, o) && (t[o] = e[o]);
})(t, e);
}, function(t, e) {
r(t, e);
function o() {
this.constructor = t;
}
t.prototype = null === e ? Object.create(e) : (o.prototype = e.prototype, new o());
}), s = this && this.__decorate || function(t, e, o, r) {
var i, s = arguments.length, n = s < 3 ? e : null === r ? r = Object.getOwnPropertyDescriptor(e, o) : r;
if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) n = Reflect.decorate(t, e, o, r); else for (var a = t.length - 1; a >= 0; a--) (i = t[a]) && (n = (s < 3 ? i(n) : s > 3 ? i(e, o, n) : i(e, o)) || n);
return s > 3 && n && Object.defineProperty(e, o, n), n;
};
Object.defineProperty(o, "__esModule", {
value: !0
});
o.LimitHighCombo_Ios_Trait = void 0;
var n = function(t) {
i(e, t);
function e() {
return null !== t && t.apply(this, arguments) || this;
}
e.prototype.isClassAlgorithmStrategyIOS_Replace_ProxyPreprocessingBlankAlgorithm = function() {
(this.shouldReplaceBlankAndHard || this.shouldReplaceBlankAndShang) && this.replaceBlankAlgorithm();
};
e.prototype.isClassAlgorithmStrategyIOS_Replace_ProxyPreprocessingShangAlgorithm = function() {
this.shouldReplaceBlankAndShang && this.replaceShangAlgorithm();
};
e.prototype.isClassAlgorithmStrategyIOS_Replace_ProxyPreprocessingDiffAlgorithm = function() {
this.shouldReplaceBlankAndHard && this.replaceDiffAlgorithm();
};
e.prototype.replaceShangAlgorithm = function() {
this.replaceAlgorithmByTypes([ hs.OFFER_TYPE.SHANG_ZENG_3, hs.OFFER_TYPE.SHANG_ZENG_4, hs.OFFER_TYPE.INCREASE_ENTROPY_NEBULA, hs.OFFER_TYPE.SHANG_ZENG_4_IOS, hs.OFFER_TYPE.SHANG_ZENG_3_NO_BIT ]);
};
e.prototype.replaceBlankAlgorithm = function() {
this.replaceAlgorithmByTypes([ hs.OFFER_TYPE.TIAN_KONG_XIAO_CHU, hs.OFFER_TYPE.ALGO_QUICK, hs.OFFER_TYPE.ALGO_FILL_MORE_AREA, hs.OFFER_TYPE.TIAN_KONG_XIAO_CHU_NO_BIT ]);
};
e.prototype.replaceAlgorithmByTypes = function(e) {
t.prototype.replaceAlgorithmByTypes.call(this, e);
};
return s([ classId("LimitHighComboTrait", "ios") ], e);
}(t("./LimitHighComboTrait").LimitHighComboTrait);
o.LimitHighCombo_Ios_Trait = n;
cc._RF.pop();
}, {
"./LimitHighComboTrait": "LimitHighComboTrait"
} ]
}, {}, [ "LimitHighComboTrait", "LimitHighCombo_Ios_Trait" ]);
//# sourceMappingURL=index.js.map
