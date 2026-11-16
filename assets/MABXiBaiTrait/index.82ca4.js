window.__require = function t(e, i, r) {
function a(o, n) {
if (!i[o]) {
if (!e[o]) {
var u = o.split("/");
u = u[u.length - 1];
if (!e[u]) {
var c = "function" == typeof __require && __require;
if (!n && c) return c(u, !0);
if (s) return s(u, !0);
throw new Error("Cannot find module '" + o + "'");
}
o = u;
}
var h = i[o] = {
exports: {}
};
e[o][0].call(h.exports, function(t) {
return a(e[o][1][t] || t);
}, h, h.exports, t, e, i, r);
}
return i[o].exports;
}
for (var s = "function" == typeof __require && __require, o = 0; o < r.length; o++) a(r[o]);
return a;
}({
MABXiBaiInterface: [ function(t, e, i) {
"use strict";
cc._RF.push(e, "43764DfO8pAKq7iaLfqFgga", "MABXiBaiInterface");
Object.defineProperty(i, "__esModule", {
value: !0
});
cc._RF.pop();
}, {} ],
MABXiBaiTrait: [ function(t, e, i) {
"use strict";
cc._RF.push(e, "5f8e4oNGldD8bq/rD7Btqmu", "MABXiBaiTrait");
var r, a = this && this.__extends || (r = function(t, e) {
return (r = Object.setPrototypeOf || {
__proto__: []
} instanceof Array && function(t, e) {
t.__proto__ = e;
} || function(t, e) {
for (var i in e) Object.prototype.hasOwnProperty.call(e, i) && (t[i] = e[i]);
})(t, e);
}, function(t, e) {
r(t, e);
function i() {
this.constructor = t;
}
t.prototype = null === e ? Object.create(e) : (i.prototype = e.prototype, new i());
}), s = this && this.__decorate || function(t, e, i, r) {
var a, s = arguments.length, o = s < 3 ? e : null === r ? r = Object.getOwnPropertyDescriptor(e, i) : r;
if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) o = Reflect.decorate(t, e, i, r); else for (var n = t.length - 1; n >= 0; n--) (a = t[n]) && (o = (s < 3 ? a(o) : s > 3 ? a(e, i, o) : a(e, i)) || o);
return s > 3 && o && Object.defineProperty(e, i, o), o;
}, o = this && this.__values || function(t) {
var e = "function" == typeof Symbol && Symbol.iterator, i = e && t[e], r = 0;
if (i) return i.call(t);
if (t && "number" == typeof t.length) return {
next: function() {
t && r >= t.length && (t = void 0);
return {
value: t && t[r++],
done: !t
};
}
};
throw new TypeError(e ? "Object is not iterable." : "Symbol.iterator is not defined.");
};
Object.defineProperty(i, "__esModule", {
value: !0
});
i.MABXiBaiTrait = void 0;
var n = {
2: 240,
3: 360,
4: 600,
5: 1e3,
6: 1800
}, u = {
1: -1,
2: 1,
3: 1,
4: 2,
5: 2,
6: 3
}, c = {
2: 150,
3: 180,
4: 210,
5: 240,
6: 270,
7: 300,
8: 330
}, h = function(t) {
a(e, t);
function e() {
var e = null !== t && t.apply(this, arguments) || this;
e._data = null;
e._config = null;
e._attemptingDeath = !1;
return e;
}
e.prototype.registerTraitEventsMethods = function() {
return [ {
className: "PuzzleSuccess100Trait",
methodName: "isPriority"
} ];
};
e.prototype.onCreate = function() {
if (this.isDay()) {
var t = this.getData(), e = this.getTodayDate();
if (t.lastColdStartDate !== e) {
if (1 === t.firstOver) {
var i = Date.now() - t.overTime <= 864e5 ? 1 : 0, r = 0;
t.reviveShow > 0 && (r = t.reviveSuccess / t.reviveShow);
this.reportArm(i, r);
}
t.firstOver = 0;
t.arm1Blocked = !1;
if (t.dailyCountDate !== e) {
t.dailySuccessCount = {};
t.dailyCountDate = e;
}
this.resetArm();
this.loadConfig();
this.saveData();
}
}
};
e.prototype.onActive = function(t) {
hs.tp.isClassAlgorithmLifeCycle_GameStart_ProxyNewGameInit(t) && this.onNewGame(hs.GameMode.Class);
hs.tp.isChapterAlgorithmLifeCycle_GameStart_ProxyNewGameInit(t) && this.onNewGame(hs.GameMode.Chapter);
hs.tp.isClassRevive_ProxyOnRevive_Success(t) && this.onReviveSuccess();
hs.tp.isClassRevive_ProxyOnShowReviveView(t) && this.onReviveShow();
hs.tp.isClassGame_Replay_ProxyOnGameReplay(t) && this.onGameEnd(!0);
hs.tp.isClassGameOver_GameEnd_ProxyOnGameEnd(t) && this.onGameEnd(!1);
hs.tp.isAlgorithmProcessInfoAlgorithmSuccess(t) && this.onAlgorithmSuccess();
hs.tp.isPuzzleSuccess100TraitIsTriggerByTrait(t) && this.onIsTriggerByTrait(t);
hs.tp.isPuzzleSuccess100TraitIsPriority(t) && this._attemptingDeath && (t.returnValue = !0);
};
e.prototype.onIsTriggerByTrait = function(t) {
var e, i, r = TRAIT("PuzzleSuccess100Trait");
if ((null === (e = null == r ? void 0 : r.props) || void 0 === e ? void 0 : e.algo) === hs.OFFER_TYPE.ZHI_SI_TI) if (this.getData().reviveSuccess > 0) t.args[0] = !1; else if (this.hasRemainingDailyCount()) {
var a = TRAIT("Puzzle100Trait");
if (null === (i = null == a ? void 0 : a.state) || void 0 === i ? void 0 : i.initTime) {
var s = (Date.now() - a.state.initTime) / 1e3, o = this.getArm();
if (o < 1) ; else {
if (1 == o) {
if (this.isSession()) {
t.args[0] = !1;
return;
}
if (this.isDay()) {
if (!this.hasRemainingDailyCount()) return;
if (!0 === t.args[0]) {
this.getData().arm1Blocked = !0;
this.saveData();
t.args[0] = !1;
}
return;
}
}
if (s < this.getArmTriggerTime(o)) t.args[0] = !1; else {
t.args[0] = !0;
this._attemptingDeath = !0;
}
}
}
}
};
e.prototype.getArmTriggerTime = function(t) {
var e, i;
return 6 === this.armCount ? null !== (e = n[t]) && void 0 !== e ? e : -1 : 8 === this.armCount && null !== (i = c[t]) && void 0 !== i ? i : -1;
};
e.prototype.onNewGame = function(t) {
var e = this.getData();
if (t === hs.GameMode.Class) {
this._attemptingDeath = !1;
e.arm1Blocked = !1;
}
if (this.isSession()) {
if (e.preArm >= 1 && 1 === e.firstOver) {
var i = Date.now() - e.overTime <= 9e5 ? 1 : 0, r = 0;
e.reviveShow > 0 && (r = e.reviveSuccess / e.reviveShow);
this.reportArm(i, r);
e.firstOver = 0;
} else {
e.reviveShow = 0;
e.reviveSuccess = 0;
}
if (t === hs.GameMode.Class) {
this.resetArm();
this.loadConfig();
}
} else if (this.isDay()) {
e.reviveShow = 0;
e.reviveSuccess = 0;
if (t === hs.GameMode.Class && e.pendingDayArm > 0) {
e.dayArm = e.pendingDayArm;
e.pendingDayArm = 0;
e.lastColdStartDate = this.getTodayDate();
}
}
this.saveData();
};
e.prototype.onGameEnd = function(t) {
var e = this.getData(), i = this.getArm();
if (this.isDay() && 1 === i && e.arm1Blocked) {
this.checkAndResetDailyCount();
e.dailySuccessCount || (e.dailySuccessCount = {});
e.dailySuccessCount[0] = (e.dailySuccessCount[0] || 0) + 1;
e.arm1Blocked = !1;
}
if (t) this.saveData(); else {
e.preArm = i;
e.overTime = Date.now();
if (i < 1) this.saveData(); else {
if (this.isSession()) {
e.firstOver = 1;
this.reportExposure();
} else if (this.isDay() && 0 === e.firstOver) {
e.firstOver = 1;
this.reportExposure();
}
this.saveData();
}
}
};
e.prototype.onReviveSuccess = function() {
this.getData().reviveSuccess++;
this.saveData();
};
e.prototype.onReviveShow = function() {
this.getData().reviveShow++;
this.saveData();
};
e.prototype.onAlgorithmSuccess = function() {
if (this._attemptingDeath) {
this._attemptingDeath = !1;
if (hs.algorithmName.algoActualId === hs.OFFER_TYPE.ZHI_SI_TI) {
var t = this.getArm();
if (!(t <= 0)) {
this.checkAndResetDailyCount();
var e = this.getData();
e.dailySuccessCount || (e.dailySuccessCount = {});
if (this.isDay()) {
e.dailySuccessCount[0] = (e.dailySuccessCount[0] || 0) + 1;
this.saveData();
} else {
e.dailySuccessCount[t] = (e.dailySuccessCount[t] || 0) + 1;
this.saveData();
}
}
}
}
};
e.prototype.checkAndResetDailyCount = function() {
var t = this.getData(), e = this.getTodayDate();
if (t.dailyCountDate !== e) {
t.dailySuccessCount = {};
t.dailyCountDate = e;
t.arm1Blocked = !1;
this.saveData();
}
};
e.prototype.getTodayDate = function() {
var t = new Date();
return 1e4 * t.getFullYear() + 100 * (t.getMonth() + 1) + t.getDate();
};
e.prototype.getDailyLimit = function(t) {
var e;
return 6 === this.armCount && null !== (e = u[t]) && void 0 !== e ? e : -1;
};
e.prototype.hasRemainingDailyCount = function() {
var t, e, i = this.getArm();
if (i < 1) return !0;
this.checkAndResetDailyCount();
var r = this.getData();
if (this.isDay()) {
return ((null === (t = r.dailySuccessCount) || void 0 === t ? void 0 : t[0]) || 0) < 3;
}
var a = this.getDailyLimit(i);
return -1 === a || ((null === (e = r.dailySuccessCount) || void 0 === e ? void 0 : e[i]) || 0) < a;
};
e.prototype.isSession = function() {
var t;
return 1 === (null === (t = this.props) || void 0 === t ? void 0 : t.plan);
};
e.prototype.isDay = function() {
var t;
return 2 === (null === (t = this.props) || void 0 === t ? void 0 : t.plan);
};
e.prototype.getId = function() {
var t;
switch (null === (t = this.props) || void 0 === t ? void 0 : t.plan) {
case 1:
return "25727";

case 2:
return "25728";

default:
return "25727";
}
};
Object.defineProperty(e.prototype, "armCount", {
get: function() {
var t;
return (null === (t = this.props) || void 0 === t ? void 0 : t.arm) || 6;
},
enumerable: !1,
configurable: !0
});
Object.defineProperty(e.prototype, "cfgName", {
get: function() {
var t;
return (null === (t = this.props) || void 0 === t ? void 0 : t.cfg) || "";
},
enumerable: !1,
configurable: !0
});
e.prototype.getArm = function() {
var t = this.getData();
return this.isSession() ? t.sessionArm : this.isDay() ? t.dayArm : 0;
};
e.prototype.initArm = function() {
var t = this.getData();
this.isSession() ? t.sessionArm = this.weightArm() : this.isDay() && (t.dayArm = this.weightArm());
this.saveData();
};
e.prototype.resetArm = function() {
var t = this.getData();
if (this.isSession()) t.sessionArm = 0; else if (this.isDay()) {
t.dayArm = 0;
t.pendingDayArm = 0;
}
this.saveData();
};
e.prototype.weightArm = function() {
var t, e;
if (this._config && this._config.init) return Math.floor(Math.random() * this.armCount) + 1;
if (!this._config || !this._config.c_info || 0 === this._config.c_info.length) {
var i = this.getArm();
return i > 0 && i <= this.armCount ? i : Math.floor(Math.random() * this.armCount) + 1;
}
var r = this._config.c_info, a = r.reduce(function(t, e) {
return t + e.ratio;
}, 0), s = Math.random() * a;
try {
for (var n = o(r), u = n.next(); !u.done; u = n.next()) {
var c = u.value;
if ((s -= c.ratio) <= 0) return Number(c.arm_id);
}
} catch (e) {
t = {
error: e
};
} finally {
try {
u && !u.done && (e = n.return) && e.call(n);
} finally {
if (t) throw t.error;
}
}
return Number(r[r.length - 1].arm_id);
};
e.prototype.loadConfig = function() {
var t = this;
this._config = null;
if (this.cfgName) {
var e = "https://ucw.afafb.com/bbios/multi_armed_bandit/" + this.cfgName + ".json?timestamp=" + Date.now();
hs.ResLoader.load(e, cc.JsonAsset, function(e, i) {
if (e) ; else if (null == i ? void 0 : i.json) {
t._config = i.json;
cc.assetManager.releaseAsset(i);
if (t.isDay()) {
var r = t.getData(), a = t.getTodayDate(), s = t.weightArm();
if (0 === storage.getItem("classScore", 0)) {
r.dayArm = s;
r.pendingDayArm = 0;
r.lastColdStartDate = a;
} else r.pendingDayArm = s;
t.saveData();
} else t.initArm();
}
});
}
};
e.prototype.reportExposure = function() {
var t = this.getData();
t.preArm && DS("game_classic_multi_armed_bandit_v2_success", {
mab_id: this.getId(),
arm_id: String(t.preArm),
report_type: 1
});
};
e.prototype.reportArm = function(t, e) {
void 0 === e && (e = null);
var i = this.getData();
if (i.preArm) {
var r = {
mab_id: this.getId(),
arm_id: String(i.preArm),
report_type: 2,
result: t
};
null !== e && (r.result2 = e);
DS("game_classic_multi_armed_bandit_v2_success", r);
i.preArm = 0;
i.overTime = 0;
i.reviveShow = 0;
i.reviveSuccess = 0;
this.saveData();
}
};
e.prototype.getData = function() {
this._data || (this._data = hs.storage.getItem("MABXiBaiTrait_Data", {
dayArm: 0,
sessionArm: 0,
pendingDayArm: 0,
preArm: 0,
overTime: 0,
date: 0,
firstOver: 0,
reviveShow: 0,
reviveSuccess: 0,
dailySuccessCount: {},
dailyCountDate: 0,
arm1Blocked: !1,
lastColdStartDate: 0
}));
return this._data;
};
e.prototype.saveData = function() {
this._data && hs.storage.setItem("MABXiBaiTrait_Data", this._data);
};
return s([ classId("MABXiBaiTrait") ], e);
}(Trait);
i.MABXiBaiTrait = h;
cc._RF.pop();
}, {} ]
}, {}, [ "MABXiBaiTrait", "MABXiBaiInterface" ]);
//# sourceMappingURL=index.js.map
