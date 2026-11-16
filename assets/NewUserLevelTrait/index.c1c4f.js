window.__require = function e(t, r, s) {
function o(i, n) {
if (!r[i]) {
if (!t[i]) {
var h = i.split("/");
h = h[h.length - 1];
if (!t[h]) {
var l = "function" == typeof __require && __require;
if (!n && l) return l(h, !0);
if (a) return a(h, !0);
throw new Error("Cannot find module '" + i + "'");
}
i = h;
}
var c = r[i] = {
exports: {}
};
t[i][0].call(c.exports, function(e) {
return o(t[i][1][e] || e);
}, c, c.exports, e, t, r, s);
}
return r[i].exports;
}
for (var a = "function" == typeof __require && __require, i = 0; i < s.length; i++) o(s[i]);
return o;
}({
NewUserLevelTrait: [ function(e, t, r) {
"use strict";
cc._RF.push(t, "c9c46swLKlFaqmqJcKRAX5C", "NewUserLevelTrait");
var s, o = this && this.__extends || (s = function(e, t) {
return (s = Object.setPrototypeOf || {
__proto__: []
} instanceof Array && function(e, t) {
e.__proto__ = t;
} || function(e, t) {
for (var r in t) Object.prototype.hasOwnProperty.call(t, r) && (e[r] = t[r]);
})(e, t);
}, function(e, t) {
s(e, t);
function r() {
this.constructor = e;
}
e.prototype = null === t ? Object.create(t) : (r.prototype = t.prototype, new r());
}), a = this && this.__decorate || function(e, t, r, s) {
var o, a = arguments.length, i = a < 3 ? t : null === s ? s = Object.getOwnPropertyDescriptor(t, r) : s;
if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) i = Reflect.decorate(e, t, r, s); else for (var n = e.length - 1; n >= 0; n--) (o = e[n]) && (i = (a < 3 ? o(i) : a > 3 ? o(t, r, i) : o(t, r)) || i);
return a > 3 && i && Object.defineProperty(t, r, i), i;
};
Object.defineProperty(r, "__esModule", {
value: !0
});
r.NewUserLevelTrait = void 0;
var i = function(e) {
o(t, e);
function t() {
var t = null !== e && e.apply(this, arguments) || this;
t.STORAGE_KEY = "NewUserLevelTrait_state";
return t;
}
t.prototype.data = function() {
return {
firstGameScore: -1,
userType: null,
currentGuaranteeScore: 0,
hardPuzzleToggle: !0,
triggered100Percent: !1,
lastGameScore: -1
};
};
t.prototype.registerTraitEventsMethods = function() {
return [ {
className: "ClassAlgorithmLifeCycle_GameOver_Proxy",
methodName: "updateGameOverPreDataClear"
}, {
className: "ClassGame_Proxy",
methodName: "onGameStart"
} ];
};
t.prototype.onCreate = function() {
this._loadFromStorage();
};
t.prototype.onActive = function(e) {
if (hs.tp.isClassGame_ProxyOnGameStart(e)) {
this._initUserType();
this._onGameStart(e);
}
hs.tp.isClassAlgorithmLifeCycle_GameOver_ProxyUpdateGameOverPreDataClear(e) && this._onGameOver(e);
hs.tp.isClassAlgorithmStrategy_Replace_ProxyPreprocessingAlgorithm(e) && this._preprocessingAlgorithm(e);
};
t.prototype._loadFromStorage = function() {
var e = hs.storage.getItem(this.STORAGE_KEY, this.data());
this.setState(e);
};
t.prototype._saveToStorage = function() {
hs.storage.setItem(this.STORAGE_KEY, this.state);
};
t.prototype._initUserType = function() {
hs.storage.getItem("classGameNum", 0) >= 1 && this.state.firstGameScore >= 0 && (this.state.firstGameScore <= this.props.firstGameLowThreshold ? this.state.userType = "low" : this.state.firstGameScore >= this.props.firstGameHighThreshold ? this.state.userType = "high" : this.state.userType = null);
};
t.prototype._onGameStart = function(e) {
var t, r = e.args[0];
if (null === (t = null == r ? void 0 : r.data) || void 0 === t ? void 0 : t.newGame) {
var s = hs.classGameInfo.gameNum;
this.state.hardPuzzleToggle = !0;
this.state.triggered100Percent = !1;
this._calculateGuaranteeScore(s);
this._saveToStorage();
}
};
t.prototype._calculateGuaranteeScore = function(e) {
if ("low" === this.state.userType) if (1 === e) this.state.currentGuaranteeScore = this.props.secondGameGuaranteeScore; else if (2 === e) {
var t = this.props.thirdGameGuaranteeScore, r = this.state.lastGameScore >= 0 ? this.state.lastGameScore : 0;
r >= this.props.thirdGameGuaranteeScore && (t = r + this.props.secondGameBonusScore) > this.props.maxBonusScoreLimit && (t = 0);
this.state.currentGuaranteeScore = t;
} else this.state.currentGuaranteeScore = 0; else "high" === this.state.userType ? this.state.currentGuaranteeScore = 1 === e ? this.props.highUserSuppressScore : 2 === e ? hs.classScoreInfo.highScore : 0 : this.state.currentGuaranteeScore = 0;
};
t.prototype._onGameOver = function() {
var e = hs.classGameInfo.gameNum;
if (0 === e) {
var t = hs.classScoreInfo.score;
this.state.firstGameScore = t;
t <= this.props.firstGameLowThreshold ? this.state.userType = "low" : t >= this.props.firstGameHighThreshold ? this.state.userType = "high" : this.state.userType = null;
this._saveToStorage();
} else if (1 === e) {
this.state.lastGameScore = hs.classScoreInfo.score;
this._saveToStorage();
}
};
t.prototype._preprocessingAlgorithm = function() {
var e = hs.classGameInfo.gameNum, t = hs.classScoreInfo.score;
e < 1 || e > 2 || this.state.userType && (this.state.currentGuaranteeScore <= 0 || ("low" === this.state.userType ? this._handleLowUserAlgorithm(e, t) : "high" === this.state.userType && this._handleHighUserAlgorithm(e, t)));
};
t.prototype._handleLowUserAlgorithm = function(e, t) {
if (t >= this.state.currentGuaranteeScore) ; else {
var r = hs.algorithmStrategyInfo.algorithmList;
if (Array.isArray(r) && 0 !== r.length && r.some(function(e) {
return hs.isValueInEnum(e, hs.OFFER_TYPE_DIFFICULTY) || hs.isValueInEnum(e, hs.OFFER_TYPE_DIE) || e === hs.OFFER_TYPE.KUN_NAN_TI;
})) {
var s = r.map(function(e) {
return hs.isValueInEnum(e, hs.OFFER_TYPE_DIFFICULTY) || hs.isValueInEnum(e, hs.OFFER_TYPE_DIE) || e === hs.OFFER_TYPE.KUN_NAN_TI ? hs.OFFER_TYPE.TIAN_KONG_XIAO_CHU : e;
});
hs.algorithmStrategyInfo.setAlgorithmList(s);
hs.algorithmStrategyInfo.setAlgorithmSourceLevel2(this.traitName);
}
}
};
t.prototype._handleHighUserAlgorithm = function(e, t) {
1 === e ? this._handleHighUserSuppress(t) : 2 === e && this._handleHighUserGuarantee(t);
};
t.prototype._handleHighUserSuppress = function(e) {
if (!(e < this.props.difficultStartScore || this.state.triggered100Percent)) if (hs.algorithmStrategyInfo.algorithmSourceLevel1 !== hs.ClassAlgorithmSourceType.Puzzle100) {
if (this.state.hardPuzzleToggle && !hs.algorithmStrategyInfo.algorithmList.some(function(e) {
return hs.isValueInEnum(e, hs.OFFER_TYPE_DIFFICULTY) || hs.isValueInEnum(e, hs.OFFER_TYPE_DIE);
})) {
hs.algorithmStrategyInfo.setAlgorithmList([ hs.OFFER_TYPE.KUN_NAN_TI ]);
hs.algorithmStrategyInfo.setAlgorithmSourceLevel2(this.traitName);
}
this.state.hardPuzzleToggle = !this.state.hardPuzzleToggle;
this._saveToStorage();
} else {
this.state.triggered100Percent = !0;
this._saveToStorage();
}
};
t.prototype._handleHighUserGuarantee = function(e) {
if (e >= this.state.currentGuaranteeScore) ; else {
var t = hs.algorithmStrategyInfo.algorithmList;
if (Array.isArray(t) && 0 !== t.length && t.some(function(e) {
return hs.isValueInEnum(e, hs.OFFER_TYPE_DIFFICULTY) || hs.isValueInEnum(e, hs.OFFER_TYPE_DIE) || e === hs.OFFER_TYPE.KUN_NAN_TI;
})) {
var r = t.map(function(e) {
return hs.isValueInEnum(e, hs.OFFER_TYPE_DIFFICULTY) || hs.isValueInEnum(e, hs.OFFER_TYPE_DIE) || e === hs.OFFER_TYPE.KUN_NAN_TI ? hs.OFFER_TYPE.TIAN_KONG_XIAO_CHU : e;
});
hs.algorithmStrategyInfo.setAlgorithmList(r);
hs.algorithmStrategyInfo.setAlgorithmSourceLevel2(this.traitName);
}
}
};
a([ hs.Algorithm() ], t.prototype, "onActive", null);
return a([ classId("NewUserLevelTrait") ], t);
}(Trait);
r.NewUserLevelTrait = i;
cc._RF.pop();
}, {} ],
NewUserLevel_ios_Trait: [ function(e, t, r) {
"use strict";
cc._RF.push(t, "dd552uOIjpGjLLxQoW68K9p", "NewUserLevel_ios_Trait");
var s, o = this && this.__extends || (s = function(e, t) {
return (s = Object.setPrototypeOf || {
__proto__: []
} instanceof Array && function(e, t) {
e.__proto__ = t;
} || function(e, t) {
for (var r in t) Object.prototype.hasOwnProperty.call(t, r) && (e[r] = t[r]);
})(e, t);
}, function(e, t) {
s(e, t);
function r() {
this.constructor = e;
}
e.prototype = null === t ? Object.create(t) : (r.prototype = t.prototype, new r());
}), a = this && this.__decorate || function(e, t, r, s) {
var o, a = arguments.length, i = a < 3 ? t : null === s ? s = Object.getOwnPropertyDescriptor(t, r) : s;
if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) i = Reflect.decorate(e, t, r, s); else for (var n = e.length - 1; n >= 0; n--) (o = e[n]) && (i = (a < 3 ? o(i) : a > 3 ? o(t, r, i) : o(t, r)) || i);
return a > 3 && i && Object.defineProperty(t, r, i), i;
};
Object.defineProperty(r, "__esModule", {
value: !0
});
r.NewUserLevel_ios_Trait = void 0;
var i = function(e) {
o(t, e);
function t() {
return null !== e && e.apply(this, arguments) || this;
}
t.prototype.isClassAlgorithmStrategyIOS_Replace_ProxyPreprocessingAlgorithm = function(e) {
this._preprocessingAlgorithm(e);
};
return a([ classId("NewUserLevelTrait", "ios"), classMethodWatch() ], t);
}(e("./NewUserLevelTrait").NewUserLevelTrait);
r.NewUserLevel_ios_Trait = i;
cc._RF.pop();
}, {
"./NewUserLevelTrait": "NewUserLevelTrait"
} ]
}, {}, [ "NewUserLevelTrait", "NewUserLevel_ios_Trait" ]);
//# sourceMappingURL=index.js.map
