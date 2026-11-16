window.__require = function e(t, r, a) {
function i(n, o) {
if (!r[n]) {
if (!t[n]) {
var l = n.split("/");
l = l[l.length - 1];
if (!t[l]) {
var u = "function" == typeof __require && __require;
if (!o && u) return u(l, !0);
if (s) return s(l, !0);
throw new Error("Cannot find module '" + n + "'");
}
n = l;
}
var c = r[n] = {
exports: {}
};
t[n][0].call(c.exports, function(e) {
return i(t[n][1][e] || e);
}, c, c.exports, e, t, r, a);
}
return r[n].exports;
}
for (var s = "function" == typeof __require && __require, n = 0; n < a.length; n++) i(a[n]);
return i;
}({
MultiClearBoostThenKillTrait: [ function(e, t, r) {
"use strict";
cc._RF.push(t, "85473wCnzVDOZHRBGrnxMth", "MultiClearBoostThenKillTrait");
var a, i = this && this.__extends || (a = function(e, t) {
return (a = Object.setPrototypeOf || {
__proto__: []
} instanceof Array && function(e, t) {
e.__proto__ = t;
} || function(e, t) {
for (var r in t) Object.prototype.hasOwnProperty.call(t, r) && (e[r] = t[r]);
})(e, t);
}, function(e, t) {
a(e, t);
function r() {
this.constructor = e;
}
e.prototype = null === t ? Object.create(t) : (r.prototype = t.prototype, new r());
}), s = this && this.__decorate || function(e, t, r, a) {
var i, s = arguments.length, n = s < 3 ? t : null === a ? a = Object.getOwnPropertyDescriptor(t, r) : a;
if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) n = Reflect.decorate(e, t, r, a); else for (var o = e.length - 1; o >= 0; o--) (i = e[o]) && (n = (s < 3 ? i(n) : s > 3 ? i(t, r, n) : i(t, r)) || n);
return s > 3 && n && Object.defineProperty(t, r, n), n;
}, n = this && this.__awaiter || function(e, t, r, a) {
return new (r || (r = Promise))(function(i, s) {
function n(e) {
try {
l(a.next(e));
} catch (e) {
s(e);
}
}
function o(e) {
try {
l(a.throw(e));
} catch (e) {
s(e);
}
}
function l(e) {
e.done ? i(e.value) : (t = e.value, t instanceof r ? t : new r(function(e) {
e(t);
})).then(n, o);
var t;
}
l((a = a.apply(e, t || [])).next());
});
}, o = this && this.__generator || function(e, t) {
var r, a, i, s, n = {
label: 0,
sent: function() {
if (1 & i[0]) throw i[1];
return i[1];
},
trys: [],
ops: []
};
return s = {
next: o(0),
throw: o(1),
return: o(2)
}, "function" == typeof Symbol && (s[Symbol.iterator] = function() {
return this;
}), s;
function o(e) {
return function(t) {
return l([ e, t ]);
};
}
function l(s) {
if (r) throw new TypeError("Generator is already executing.");
for (;n; ) try {
if (r = 1, a && (i = 2 & s[0] ? a.return : s[0] ? a.throw || ((i = a.return) && i.call(a), 
0) : a.next) && !(i = i.call(a, s[1])).done) return i;
(a = 0, i) && (s = [ 2 & s[0], i.value ]);
switch (s[0]) {
case 0:
case 1:
i = s;
break;

case 4:
n.label++;
return {
value: s[1],
done: !1
};

case 5:
n.label++;
a = s[1];
s = [ 0 ];
continue;

case 7:
s = n.ops.pop();
n.trys.pop();
continue;

default:
if (!(i = n.trys, i = i.length > 0 && i[i.length - 1]) && (6 === s[0] || 2 === s[0])) {
n = 0;
continue;
}
if (3 === s[0] && (!i || s[1] > i[0] && s[1] < i[3])) {
n.label = s[1];
break;
}
if (6 === s[0] && n.label < i[1]) {
n.label = i[1];
i = s;
break;
}
if (i && n.label < i[2]) {
n.label = i[2];
n.ops.push(s);
break;
}
i[2] && n.ops.pop();
n.trys.pop();
continue;
}
s = t.call(e, n);
} catch (e) {
s = [ 6, e ];
a = 0;
} finally {
r = i = 0;
}
if (5 & s[0]) throw s[1];
return {
value: s[0] ? s[1] : void 0,
done: !0
};
}
}, l = this && this.__read || function(e, t) {
var r = "function" == typeof Symbol && e[Symbol.iterator];
if (!r) return e;
var a, i, s = r.call(e), n = [];
try {
for (;(void 0 === t || t-- > 0) && !(a = s.next()).done; ) n.push(a.value);
} catch (e) {
i = {
error: e
};
} finally {
try {
a && !a.done && (r = s.return) && r.call(s);
} finally {
if (i) throw i.error;
}
}
return n;
};
Object.defineProperty(r, "__esModule", {
value: !0
});
r.MultiClearBoostThenKillTrait = void 0;
var u = e("./types/MultiClearBoostThenKillTypes"), c = function(e) {
i(t, e);
function t() {
var t = null !== e && e.apply(this, arguments) || this;
t.hasInitData = !1;
t.gameEnterTimestamp = 0;
t.currentGameAccumulatedTime = 0;
return t;
}
r = t;
t.prototype.data = function() {
return {
sessionId: "",
playerTier: u.PlayerTierType.NONE,
hasCalledModel: !1,
lastEffectiveGameNum: 0,
gameDurationRecords: [],
moreCleanSuccessRound: -1,
hasTriggeredDeath: !1,
isEffectiveGame: !1
};
};
t.prototype.onCreate = function() {};
t.prototype.onEnable = function() {
this.initLocalData();
this.registerGmMenu();
};
t.prototype.initLocalData = function() {
if (!this.hasInitData) {
try {
var e = hs.storage.getItem(u.STORAGE_KEY, null);
if (e) {
var t = JSON.parse(e);
this.state.sessionId = t.sessionId || "";
this.state.playerTier = t.playerTier || u.PlayerTierType.NONE;
this.state.hasCalledModel = t.hasCalledModel || !1;
this.state.lastEffectiveGameNum = t.lastEffectiveGameNum || t.lastEffectiveGameCount || 0;
this.state.gameDurationRecords = t.gameDurationRecords || [];
}
} catch (e) {}
this.hasInitData = !0;
}
};
t.prototype.save = function() {
var e = {
sessionId: this.state.sessionId,
playerTier: this.state.playerTier,
hasCalledModel: this.state.hasCalledModel,
lastEffectiveGameNum: this.state.lastEffectiveGameNum,
gameDurationRecords: this.state.gameDurationRecords
};
hs.storage.setItem(u.STORAGE_KEY, JSON.stringify(e));
};
t.prototype.getConfigValue = function(e) {
var t, r = null === (t = this.props) || void 0 === t ? void 0 : t[e];
return null != r ? r : u.DEFAULT_CONFIG[e];
};
t.prototype.getTierConfig = function(e) {
return e === u.PlayerTierType.TIER_ONE ? {
avgGameCount: this.getConfigValue("advancedAvgGameCount"),
killDelaySeconds: this.getConfigValue("advancedKillDelaySeconds"),
minRoundsAfterBoost: this.getConfigValue("advancedMinRoundsAfterBoost"),
triggerIntervalGames: this.getConfigValue("advancedTriggerIntervalGames")
} : e === u.PlayerTierType.TIER_TWO ? {
avgGameCount: this.getConfigValue("earlyAvgGameCount"),
killDelaySeconds: this.getConfigValue("earlyKillDelaySeconds"),
minRoundsAfterBoost: this.getConfigValue("earlyMinRoundsAfterBoost"),
triggerIntervalGames: this.getConfigValue("earlyTriggerIntervalGames")
} : {
avgGameCount: 5,
killDelaySeconds: 0,
minRoundsAfterBoost: 999,
triggerIntervalGames: 999
};
};
t.prototype.registerTraitEventsMethods = function() {
return [ {
className: "ClassTimer_Proxy",
methodName: "onGameHide"
}, {
className: "ClassTimer_Proxy",
methodName: "onGameShow"
}, {
className: "ClassDataStatistics_Dot_Proxy",
methodName: "onGameEnd"
}, {
className: "ClassAlgorithmStrategy_Deal_Proxy",
methodName: "triggerSpecialTrait"
} ];
};
t.prototype.onActive = function(e) {
if (hs.gameInfo.gameMode === hs.GameMode.Class) {
var t = TRAIT("IsOpenMoreCleanTrait");
if (t && t.active) {
hs.tp.isClassGame_Ready_ProxyOnClassGameReadyComplete(e) && this.onGameStart();
hs.tp.isClassDataStatistics_Dot_ProxyOnGameEnd(e) && this.onGameEnd();
hs.tp.isClassTimer_ProxyOnGameHide(e) && this.saveCurrentSessionTime();
hs.tp.isClassTimer_ProxyOnGameShow(e) && (this.gameEnterTimestamp = Date.now());
hs.tp.isClassAlgorithmStrategy_Deal_ProxyTriggerSpecialTrait(e) && this.onTriggerAlgorithm();
}
}
};
t.prototype.onGameStart = function() {
return n(this, void 0, Promise, function() {
var e, t;
return o(this, function(r) {
switch (r.label) {
case 0:
this.initGameTimeRecord();
e = hs.gameInfo.gameNum;
t = hs.classGameInfo.roundNum < 1;
this.checkAndUpdateSession();
return [ 4, this.ensurePlayerTier() ];

case 1:
r.sent();
this.state.isEffectiveGame = this.checkIsEffectiveGame(e);
if (t) {
this.state.moreCleanSuccessRound = -1;
this.state.hasTriggeredDeath = !1;
this.save();
}
return [ 2 ];
}
});
});
};
t.prototype.checkAndUpdateSession = function() {
var e = String(hs.gameInfo.entryTime);
if (this.state.sessionId !== e) {
this.state.sessionId = e;
this.state.hasCalledModel = !1;
this.state.playerTier = u.PlayerTierType.NONE;
}
};
t.prototype.ensurePlayerTier = function() {
return n(this, void 0, Promise, function() {
return o(this, function(e) {
switch (e.label) {
case 0:
if (-1 !== r._gmTierCache) {
this.state.playerTier = r._gmTierCache;
this.state.hasCalledModel = !0;
return [ 2 ];
}
if (this.state.hasCalledModel) return [ 2 ];
this.state.hasCalledModel = !0;
return [ 4, this.requestModels() ];

case 1:
e.sent();
return [ 2 ];
}
});
});
};
t.prototype.requestModels = function() {
return n(this, void 0, Promise, function() {
var e, t, r, a;
return o(this, function(i) {
switch (i.label) {
case 0:
i.trys.push([ 0, 2, , 3 ]);
return [ 4, Promise.all([ this.requestCleanModel(), this.requestDuisiModel() ]) ];

case 1:
e = l.apply(void 0, [ i.sent(), 2 ]), t = e[0], r = e[1];
a = null === r;
if (-1 === t || a) {
this.state.playerTier = u.PlayerTierType.NONE;
this.save();
return [ 2 ];
}
this.state.playerTier = this.calculatePlayerTier(t, r);
this.save();
return [ 3, 3 ];

case 2:
i.sent();
this.state.playerTier = u.PlayerTierType.NONE;
this.save();
return [ 3, 3 ];

case 3:
return [ 2 ];
}
});
});
};
t.prototype.requestCleanModel = function() {
var e;
return n(this, void 0, Promise, function() {
var t, r, a;
return o(this, function(i) {
switch (i.label) {
case 0:
i.trys.push([ 0, 2, , 3 ]);
t = hs.traitServerRequestInfo.uid;
r = {
uid: t,
os: "android",
redis_clu_history_data_keys: [ "clean_uplift_label" ]
};
return [ 4, hs.http.requestAsync("https://hella-game-gateway-server.afafb.com/ug/get_universal_data", r, {
type: hs.HttpType.POST,
contentType: "application/json"
}) ];

case 1:
a = i.sent();
return void 0 !== (null === (e = null == a ? void 0 : a.history_data) || void 0 === e ? void 0 : e.clean_uplift_label) ? [ 2, a.history_data.clean_uplift_label ] : [ 2, -1 ];

case 2:
i.sent();
return [ 2, -1 ];

case 3:
return [ 2 ];
}
});
});
};
t.prototype.requestDuisiModel = function() {
return n(this, void 0, Promise, function() {
var e, t, r;
return o(this, function(a) {
switch (a.label) {
case 0:
a.trys.push([ 0, 2, , 3 ]);
"https://hella-game-gateway-server.afafb.com/v1/maitong_duisi";
e = hs.traitServerRequestInfo.uid;
t = {
os: "android",
uid: e
};
return [ 4, hs.http.requestAsync("https://hella-game-gateway-server.afafb.com/v1/maitong_duisi", t, {
type: hs.HttpType.POST
}) ];

case 1:
return void 0 !== (null == (r = a.sent()) ? void 0 : r.ds_uplift_label) ? [ 2, 0 === r.ds_uplift_label ] : [ 2, null ];

case 2:
a.sent();
return [ 2, null ];

case 3:
return [ 2 ];
}
});
});
};
t.prototype.calculatePlayerTier = function(e, t) {
return t ? 2 === e ? u.PlayerTierType.TIER_ONE : 1 === e ? u.PlayerTierType.TIER_TWO : u.PlayerTierType.NONE : u.PlayerTierType.NONE;
};
t.prototype.checkIsEffectiveGame = function(e) {
if (this.state.playerTier === u.PlayerTierType.NONE) return !1;
var t = this.getTierConfig(this.state.playerTier), r = this.state.lastEffectiveGameNum, a = t.triggerIntervalGames;
if (0 === r) return !0;
var i = e - r;
return 0 === i || i > a;
};
t.prototype.onGameEnd = function() {
var e = this.getCurrentGameDuration();
e > 0 && this.recordGameDuration(e);
this.gameEnterTimestamp = 0;
this.currentGameAccumulatedTime = 0;
this.save();
};
t.prototype.recordGameDuration = function(e) {
var t = this.getTierConfig(this.state.playerTier).avgGameCount;
this.state.gameDurationRecords.push(e);
for (;this.state.gameDurationRecords.length > t; ) this.state.gameDurationRecords.shift();
};
t.prototype.getAverageDuration = function() {
var e = this.state.gameDurationRecords;
return e && 0 !== e.length ? e.reduce(function(e, t) {
return e + t;
}, 0) / e.length : 0;
};
t.prototype.initGameTimeRecord = function() {
hs.gameInfo.gameNum;
hs.classGameInfo.roundNum < 1 && (this.currentGameAccumulatedTime = 0);
this.gameEnterTimestamp = Date.now();
};
t.prototype.saveCurrentSessionTime = function() {
if (this.gameEnterTimestamp > 0) {
var e = Date.now() - this.gameEnterTimestamp;
this.currentGameAccumulatedTime += e;
this.gameEnterTimestamp = Date.now();
}
};
t.prototype.getCurrentGameDuration = function() {
if (this.gameEnterTimestamp <= 0) return this.currentGameAccumulatedTime;
var e = Date.now() - this.gameEnterTimestamp;
return this.currentGameAccumulatedTime + e;
};
t.prototype.onTriggerAlgorithm = function() {
hs.classGameInfo.roundNum;
if (this.state.isEffectiveGame) if (this.state.hasTriggeredDeath) this.setDeathAlgorithm(this.traitName); else {
this.checkMoreCleanStatus();
if (this.tryTriggerDeath()) {
this.state.hasTriggeredDeath = !0;
this.setDeathAlgorithm(this.traitName);
this.state.lastEffectiveGameNum = hs.gameInfo.gameNum;
this.save();
}
}
};
t.prototype.checkMoreCleanStatus = function() {
if (this.state.moreCleanSuccessRound >= 0) ; else try {
var e = hs.storage.getItem("IsOpenMoreCleanTraitData", null);
if (e) {
var t = JSON.parse(e);
t && t.moreCleanSuccess && (this.state.moreCleanSuccessRound = hs.classGameInfo.roundNum);
}
} catch (e) {}
};
t.prototype.tryTriggerDeath = function() {
var e = this.getTierConfig(this.state.playerTier), t = hs.classGameInfo.roundNum, r = this.getCurrentGameDuration(), a = this.getAverageDuration();
if (this.state.moreCleanSuccessRound < 0) return !1;
if (!this.checkRoundCondition(t, e)) return !1;
var i = this.checkTimeCondition(r, a, e);
Math.max(0, a - 1e3 * e.killDelaySeconds);
return !!i;
};
t.prototype.setDeathAlgorithm = function(e) {
hs.algorithmStrategyInfo.setAlgorithmSourceLevel1(hs.ClassAlgorithmSourceType.AlgoTrait);
hs.algorithmStrategyInfo.setAlgorithmList([ hs.OFFER_TYPE.ZHI_SI_TI ]);
hs.algorithmStrategyInfo.setAlgorithmFailList([ hs.OFFER_TYPE.SUI_JI ]);
hs.algorithmStrategyInfo.setAlgorithmSourceLevel2(e);
};
t.prototype.checkRoundCondition = function(e, t) {
return !(this.state.moreCleanSuccessRound < 0) && e - this.state.moreCleanSuccessRound >= t.minRoundsAfterBoost;
};
t.prototype.checkTimeCondition = function(e, t, r) {
return t <= 0 || e >= t - 1e3 * r.killDelaySeconds;
};
t.prototype.getTierName = function(e) {
switch (e) {
case u.PlayerTierType.TIER_ONE:
return "分层一(爽感进阶型+怼死不敏感)";

case u.PlayerTierType.TIER_TWO:
return "分层二(消除萌芽型+怼死不敏感)";

default:
return "无分层";
}
};
t.prototype.registerGmMenu = function() {};
var r;
t._gmRegistered = !1;
t._gmTierCache = -1;
return r = s([ classId("MultiClearBoostThenKillTrait"), classMethodWatch() ], t);
}(Trait);
r.MultiClearBoostThenKillTrait = c;
cc._RF.pop();
}, {
"./types/MultiClearBoostThenKillTypes": "MultiClearBoostThenKillTypes"
} ],
MultiClearBoostThenKillTypes: [ function(e, t, r) {
"use strict";
cc._RF.push(t, "3e1f2AI6VdPa4ulTpPESynR", "MultiClearBoostThenKillTypes");
Object.defineProperty(r, "__esModule", {
value: !0
});
r.DEFAULT_CONFIG = r.STORAGE_KEY = r.PlayerTierType = void 0;
(function(e) {
e[e.NONE = 0] = "NONE";
e[e.TIER_ONE = 1] = "TIER_ONE";
e[e.TIER_TWO = 2] = "TIER_TWO";
})(r.PlayerTierType || (r.PlayerTierType = {}));
r.STORAGE_KEY = "MultiClearBoostThenKillTraitData";
r.DEFAULT_CONFIG = {
advancedAvgGameCount: 5,
advancedKillDelaySeconds: 20,
advancedMinRoundsAfterBoost: 3,
advancedTriggerIntervalGames: 4,
earlyAvgGameCount: 5,
earlyKillDelaySeconds: 0,
earlyMinRoundsAfterBoost: 5,
earlyTriggerIntervalGames: 5
};
cc._RF.pop();
}, {} ]
}, {}, [ "MultiClearBoostThenKillTrait", "MultiClearBoostThenKillTypes" ]);
//# sourceMappingURL=index.js.map
