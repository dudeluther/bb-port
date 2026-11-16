window.__require = function e(t, a, i) {
function r(n, o) {
if (!a[n]) {
if (!t[n]) {
var c = n.split("/");
c = c[c.length - 1];
if (!t[c]) {
var v = "function" == typeof __require && __require;
if (!o && v) return v(c, !0);
if (s) return s(c, !0);
throw new Error("Cannot find module '" + n + "'");
}
n = c;
}
var f = a[n] = {
exports: {}
};
t[n][0].call(f.exports, function(e) {
return r(t[n][1][e] || e);
}, f, f.exports, e, t, a, i);
}
return a[n].exports;
}
for (var s = "function" == typeof __require && __require, n = 0; n < i.length; n++) r(i[n]);
return r;
}({
IsOpenInAdvanceDeathByLowEfficiencyGiveReviveTrait: [ function(e, t, a) {
"use strict";
cc._RF.push(t, "23bcfwCdlpAXraNWFvvyUcF", "IsOpenInAdvanceDeathByLowEfficiencyGiveReviveTrait");
var i, r = this && this.__extends || (i = function(e, t) {
return (i = Object.setPrototypeOf || {
__proto__: []
} instanceof Array && function(e, t) {
e.__proto__ = t;
} || function(e, t) {
for (var a in t) Object.prototype.hasOwnProperty.call(t, a) && (e[a] = t[a]);
})(e, t);
}, function(e, t) {
i(e, t);
function a() {
this.constructor = e;
}
e.prototype = null === t ? Object.create(t) : (a.prototype = t.prototype, new a());
}), s = this && this.__decorate || function(e, t, a, i) {
var r, s = arguments.length, n = s < 3 ? t : null === i ? i = Object.getOwnPropertyDescriptor(t, a) : i;
if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) n = Reflect.decorate(e, t, a, i); else for (var o = e.length - 1; o >= 0; o--) (r = e[o]) && (n = (s < 3 ? r(n) : s > 3 ? r(t, a, n) : r(t, a)) || n);
return s > 3 && n && Object.defineProperty(t, a, n), n;
};
Object.defineProperty(a, "__esModule", {
value: !0
});
a.IsOpenInAdvanceDeathByLowEfficiencyGiveReviveTrait = void 0;
var n = function(e) {
r(t, e);
function t() {
var t = null !== e && e.apply(this, arguments) || this;
t._saveData = null;
t._saveData2 = null;
t._timer = -1;
t._curGameNot = !1;
t._hasIsNewDayClear = !1;
t.RATIO = .8;
t.INTERVAL = 10;
return t;
}
Object.defineProperty(t.prototype, "saveData", {
get: function() {
this._saveData || (this._saveData = storage.getItem("inAdvanceDeathByLowEfficiencyGiveReviveInfo", {}));
return this._saveData;
},
enumerable: !1,
configurable: !0
});
Object.defineProperty(t.prototype, "saveData2", {
get: function() {
this._saveData2 || (this._saveData2 = storage.getItem("inAdvanceDeathByLowEfficiencyGiveReviveInfo2", {
curGameTigger: !1,
curGameIsTiggerRevive: !1,
reviveCount: -1
}));
return this._saveData2;
},
enumerable: !1,
configurable: !0
});
t.prototype.registerTraitEventsMethods = function() {
return [ {
className: "ClassGameOver_GameEndPre_Proxy",
methodName: "onGameEndPre"
}, {
className: "ClassGame_Replay_Proxy",
methodName: "onGameReplay"
}, {
className: "ClassGame_Proxy",
methodName: "onGameStart"
}, {
className: "ClassGame_Proxy",
methodName: "onGameBackHome"
}, {
className: "ClassGame_Proxy",
methodName: "onClassGameShow"
} ];
};
t.prototype.onActive = function(e) {
var t;
if (hs.tp.isClassGameOver_GameEndPre_ProxyOnGameEndPre(e) || hs.tp.isClassGame_Replay_ProxyOnGameReplay(e)) {
if (!(n = storage.getItem("inAdvanceDeathByLowEfficiencyGiveReviveInfo", {})).curInfo) return;
var a = hs.classScoreInfo.score;
this.saveData.curInfo.isOver = !0;
if (a > ((null === (t = null == n ? void 0 : n.maxInfo) || void 0 === t ? void 0 : t.score) || 0)) {
var i = n.curInfo.scoreList.length, r = Math.floor(i * this.RATIO), s = n.curInfo.scoreList[r] || 0;
this.saveData.maxInfo = {
time: 10 * n.curInfo.scoreList.length,
score: a,
centerScore: s,
cemterTime: 10 * (r + 1)
};
storage.setItem("inAdvanceDeathByLowEfficiencyGiveReviveInfo", this.saveData);
}
this.clearTimer();
}
hs.tp.isClassGame_ProxyOnGameStart(e) && this.gameStart(e);
if (hs.tp.isClassAlgorithmStrategy_Priority_ProxyOnAlgorithmStrategyPriority(e)) {
if (this._curGameNot) return;
var n;
if (!(n = storage.getItem("inAdvanceDeathByLowEfficiencyGiveReviveInfo", {})).curInfo) return;
if (this.saveData2.curGameTigger) return;
var o = this.saveData.maxInfo;
if (o.score < 1e4) return;
if (10 * this.saveData.curInfo.scoreList.length < o.cemterTime) return;
if ((a = hs.classScoreInfo.score) >= o.centerScore) {
this.saveData2.curGameTigger = !0;
this.saveData2.curGameIsTiggerRevive = !0;
storage.setItem("inAdvanceDeathByLowEfficiencyGiveReviveInfo2", this.saveData2);
this._curGameNot = !0;
return;
}
this.saveData2.curGameTigger = !0;
-1 === this.saveData2.reviveCount ? this.saveData2.reviveCount = 1 : this.saveData2.reviveCount += 1;
storage.setItem("inAdvanceDeathByLowEfficiencyGiveReviveInfo2", this.saveData2);
hs.algorithmStrategyInfo.algorithmPriorityList.unshift(hs.OFFER_TYPE.ZHI_SI_TI);
}
hs.tp.isClassGame_ProxyOnGameBackHome(e) && this.clearTimer();
hs.tp.isClassAdvertisement_RewardProxyShowAdvertisement(e) && this.clearTimer();
hs.tp.isBoardEffect_CloseGame_ProxyCloseClass(e) && this.clearTimer();
if (hs.tp.isAdvertisement_ProxyOnRewardOver(e)) {
if (hs.gameInfo.gameMode !== hs.GameMode.Class) return;
this.resetTimer();
}
hs.tp.isClassGame_ProxyOnClassGameShow(e) && this.resetTimer();
hs.tp.isClassRevive_ProxyChangeLastReviveResultAsync(e) && this.checkRevive(e);
};
t.prototype.checkRevive = function(e) {
var t;
if (!(null === (t = e.args) || void 0 === t ? void 0 : t[0]) && this.saveData2.curGameIsTiggerRevive) {
-1 === this.saveData2.reviveCount && (this.saveData2.reviveCount = 1);
if (!(this.saveData2.reviveCount <= 0)) {
this.saveData2.reviveCount -= 1;
storage.setItem("inAdvanceDeathByLowEfficiencyGiveReviveInfo2", this.saveData2);
e.returnValue = !0;
e.replace = !0;
e.returnState = !0;
}
}
};
t.prototype.gameStart = function(e) {
var t, a = hs.gameInfo.entryTimeHistory, i = null == a ? void 0 : a[a.length - 2], r = null == a ? void 0 : a[a.length - 1];
this._curGameNot = !1;
this._hasIsNewDayClear || !i || this.isToday(i, r) || storage.setItem("inAdvanceDeathByLowEfficiencyGiveReviveInfo", {});
this._hasIsNewDayClear = !0;
var s = e.args[0], n = storage.getItem("inAdvanceDeathByLowEfficiencyGiveReviveInfo", {});
if (null === (t = null == s ? void 0 : s.data) || void 0 === t ? void 0 : t.newGame) {
this.saveData.curInfo = {
scoreList: [],
isOver: !1
};
this.saveData2.curGameTigger = !1;
if (this.saveData2.curGameIsTiggerRevive) {
this.saveData2.curGameIsTiggerRevive = !1;
this.saveData2.reviveCount = -1;
storage.setItem("inAdvanceDeathByLowEfficiencyGiveReviveInfo2", this.saveData2);
}
} else {
if (!n.curInfo) return;
this.saveData.curInfo = n.curInfo;
}
this.saveData.maxInfo = n.maxInfo || {
time: 0,
score: 0,
centerScore: 0,
cemterTime: 0
};
storage.setItem("inAdvanceDeathByLowEfficiencyGiveReviveInfo", this.saveData);
this.startTimer();
};
t.prototype.resetTimer = function() {
storage.getItem("inAdvanceDeathByLowEfficiencyGiveReviveInfo", {}).curInfo && this.startTimer();
};
t.prototype.isToday = function(e, t) {
var a = new Date(e), i = new Date(t);
return a.getDate() == i.getDate() && a.getMonth() == i.getMonth() && a.getFullYear() == i.getFullYear();
};
t.prototype.startTimer = function() {
var e = this;
this.clearTimer();
this._timer = setInterval(function() {
var t = Cinst(hs.ClassGame);
if (t && cc.isValid(t.node) && t.node.active) {
e.saveData.curInfo.scoreList.push(hs.classScoreInfo.score);
storage.setItem("inAdvanceDeathByLowEfficiencyGiveReviveInfo", e.saveData);
} else e.clearTimer();
}, 1e3 * this.INTERVAL);
};
t.prototype.clearTimer = function() {
clearInterval(this._timer);
this._timer = -1;
};
return s([ classId("IsOpenInAdvanceDeathByLowEfficiencyGiveReviveTrait") ], t);
}(Trait);
a.IsOpenInAdvanceDeathByLowEfficiencyGiveReviveTrait = n;
cc._RF.pop();
}, {} ],
IsOpenInAdvanceDeathByLowEfficiencyGiveRevive_Ios_Trait: [ function(e, t, a) {
"use strict";
cc._RF.push(t, "a6257utlUBENI31kIG/CeHE", "IsOpenInAdvanceDeathByLowEfficiencyGiveRevive_Ios_Trait");
var i, r = this && this.__extends || (i = function(e, t) {
return (i = Object.setPrototypeOf || {
__proto__: []
} instanceof Array && function(e, t) {
e.__proto__ = t;
} || function(e, t) {
for (var a in t) Object.prototype.hasOwnProperty.call(t, a) && (e[a] = t[a]);
})(e, t);
}, function(e, t) {
i(e, t);
function a() {
this.constructor = e;
}
e.prototype = null === t ? Object.create(t) : (a.prototype = t.prototype, new a());
}), s = this && this.__decorate || function(e, t, a, i) {
var r, s = arguments.length, n = s < 3 ? t : null === i ? i = Object.getOwnPropertyDescriptor(t, a) : i;
if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) n = Reflect.decorate(e, t, a, i); else for (var o = e.length - 1; o >= 0; o--) (r = e[o]) && (n = (s < 3 ? r(n) : s > 3 ? r(t, a, n) : r(t, a)) || n);
return s > 3 && n && Object.defineProperty(t, a, n), n;
};
Object.defineProperty(a, "__esModule", {
value: !0
});
a.IsOpenInAdvanceDeathByLowEfficiencyGiveRevive_Ios_Trait = void 0;
var n = function(e) {
r(t, e);
function t() {
return null !== e && e.apply(this, arguments) || this;
}
t.prototype.isClassAlgorithmStrategyIOS_Priority_ProxyOnAlgorithmStrategyPriority = function() {
if (this._curGameNot) ; else if (storage.getItem("inAdvanceDeathByLowEfficiencyGiveReviveInfo", {}).curInfo && !this.saveData2.curGameTigger) {
var e = this.saveData.maxInfo;
if (e.score < 1e4) ; else if (10 * this.saveData.curInfo.scoreList.length < e.cemterTime) ; else if (hs.classScoreInfo.score >= e.centerScore) {
this.saveData2.curGameTigger = !0;
this.saveData2.curGameIsTiggerRevive = !0;
storage.setItem("inAdvanceDeathByLowEfficiencyGiveReviveInfo2", this.saveData2);
this._curGameNot = !0;
} else {
this.saveData2.curGameTigger = !0;
-1 === this.saveData2.reviveCount ? this.saveData2.reviveCount = 1 : this.saveData2.reviveCount += 1;
storage.setItem("inAdvanceDeathByLowEfficiencyGiveReviveInfo2", this.saveData2);
hs.algorithmStrategyInfo.algorithmPriorityList.unshift(hs.OFFER_TYPE.ZHI_SI_TI);
}
}
};
return s([ classId("IsOpenInAdvanceDeathByLowEfficiencyGiveReviveTrait", "ios") ], t);
}(e("./IsOpenInAdvanceDeathByLowEfficiencyGiveReviveTrait").IsOpenInAdvanceDeathByLowEfficiencyGiveReviveTrait);
a.IsOpenInAdvanceDeathByLowEfficiencyGiveRevive_Ios_Trait = n;
cc._RF.pop();
}, {
"./IsOpenInAdvanceDeathByLowEfficiencyGiveReviveTrait": "IsOpenInAdvanceDeathByLowEfficiencyGiveReviveTrait"
} ]
}, {}, [ "IsOpenInAdvanceDeathByLowEfficiencyGiveReviveTrait", "IsOpenInAdvanceDeathByLowEfficiencyGiveRevive_Ios_Trait" ]);
//# sourceMappingURL=index.js.map
