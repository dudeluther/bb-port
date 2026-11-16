window.__require = function e(t, r, a) {
function o(n, s) {
if (!r[n]) {
if (!t[n]) {
var l = n.split("/");
l = l[l.length - 1];
if (!t[l]) {
var p = "function" == typeof __require && __require;
if (!s && p) return p(l, !0);
if (i) return i(l, !0);
throw new Error("Cannot find module '" + n + "'");
}
n = l;
}
var u = r[n] = {
exports: {}
};
t[n][0].call(u.exports, function(e) {
return o(t[n][1][e] || e);
}, u, u.exports, e, t, r, a);
}
return r[n].exports;
}
for (var i = "function" == typeof __require && __require, n = 0; n < a.length; n++) o(a[n]);
return o;
}({
SlowPlayerAnimTrait: [ function(e, t, r) {
"use strict";
cc._RF.push(t, "ba6f9I3eG5LN4j9InI/x05V", "SlowPlayerAnimTrait");
var a, o = this && this.__extends || (a = function(e, t) {
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
}), i = this && this.__decorate || function(e, t, r, a) {
var o, i = arguments.length, n = i < 3 ? t : null === a ? a = Object.getOwnPropertyDescriptor(t, r) : a;
if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) n = Reflect.decorate(e, t, r, a); else for (var s = e.length - 1; s >= 0; s--) (o = e[s]) && (n = (i < 3 ? o(n) : i > 3 ? o(t, r, n) : o(t, r)) || n);
return i > 3 && n && Object.defineProperty(t, r, n), n;
}, n = this && this.__read || function(e, t) {
var r = "function" == typeof Symbol && e[Symbol.iterator];
if (!r) return e;
var a, o, i = r.call(e), n = [];
try {
for (;(void 0 === t || t-- > 0) && !(a = i.next()).done; ) n.push(a.value);
} catch (e) {
o = {
error: e
};
} finally {
try {
a && !a.done && (r = i.return) && r.call(i);
} finally {
if (o) throw o.error;
}
}
return n;
}, s = this && this.__spread || function() {
for (var e = [], t = 0; t < arguments.length; t++) e = e.concat(n(arguments[t]));
return e;
};
Object.defineProperty(r, "__esModule", {
value: !0
});
r.SlowPlayerAnimTrait = void 0;
var l = function(e) {
o(t, e);
function t() {
var t = null !== e && e.apply(this, arguments) || this;
t._storageData = null;
t._currentGameDataEndless = null;
t._hasAppliedSpeed = !1;
t._useDirectKSpeed = !1;
t._originalKSpeed = 1;
return t;
}
Object.defineProperty(t.prototype, "slowSpeedThreshold", {
get: function() {
var e, t;
return null !== (t = null === (e = this.props) || void 0 === e ? void 0 : e.slowSpeedThreshold) && void 0 !== t ? t : 2;
},
enumerable: !1,
configurable: !0
});
Object.defineProperty(t.prototype, "weightThreshold", {
get: function() {
var e, t;
return null !== (t = null === (e = this.props) || void 0 === e ? void 0 : e.weightThreshold) && void 0 !== t ? t : 300;
},
enumerable: !1,
configurable: !0
});
Object.defineProperty(t.prototype, "recordGameCount", {
get: function() {
var e, t;
return null !== (t = null === (e = this.props) || void 0 === e ? void 0 : e.recordGameCount) && void 0 !== t ? t : 3;
},
enumerable: !1,
configurable: !0
});
Object.defineProperty(t.prototype, "slowPlayerSpeedMultiplier", {
get: function() {
var e, t;
return null !== (t = null === (e = this.props) || void 0 === e ? void 0 : e.slowPlayerSpeedMultiplier) && void 0 !== t ? t : 1.8;
},
enumerable: !1,
configurable: !0
});
t.prototype.onCreate = function() {
this.loadStorageData();
this.restoreTempData();
};
t.prototype.onActive = function(e) {
var t, r, a, o, i, n;
if (hs.tp.isClassBoardSplashAnimation_ProxyOnGameStart(e) && this.isEndlessMode()) {
(null === (r = null === (t = e.args[0]) || void 0 === t ? void 0 : t.data) || void 0 === r ? void 0 : r.newGame) && this.onGameStart();
this.applySpeedMultiplier();
}
if (hs.tp.isBoardEffect_ProxyOnTouchEnd(e) && this.isEndlessMode()) {
var s = e.args[0], l = null !== (o = null === (a = null == s ? void 0 : s.state) || void 0 === a ? void 0 : a.touchIndex) && void 0 !== o ? o : -1, p = null !== (n = null === (i = null == s ? void 0 : s.state) || void 0 === i ? void 0 : i.touchStartTime) && void 0 !== n ? n : 0;
this.onPutBlock(l, p);
}
hs.tp.isClassAlgorithmLifeCycle_GameOver_ProxyUpdateGameOverPreDataClear(e) && this.isEndlessMode() && this.onGameEnd();
if (hs.tp.isKSpeed_ProxySetKSpeed(e)) {
var u = e.args[1];
u !== hs.EffectAccTraitEventName.ModeChoice_Show && u !== hs.EffectAccTraitEventName.GameOver_GameEnd && (u || this.isEndlessMode()) || this.restoreSpeed();
}
hs.tp.isClassGame_Replay_ProxyOnGameReplay(e) && this.restoreSpeed();
hs.tp.isGameLobby_ProxyOnEnterMiniGameSuccess(e) && this.restoreSpeed();
};
t.prototype.onDisable = function() {
this.restoreSpeed();
};
t.prototype.restoreTempData = function() {
this._storageData && this._storageData.endlessGameTemp && (this._currentGameDataEndless = {
operationTimes: s(this._storageData.endlessGameTemp.operationTimes)
});
};
t.prototype.onGameStart = function() {
this._currentGameDataEndless = {
operationTimes: []
};
this._storageData.endlessGameTemp = {
operationTimes: [],
gameStartTimestamp: this.getCurrentTimestamp()
};
this.saveStorageData();
};
t.prototype.onPutBlock = function(e, t) {
if (this._currentGameDataEndless) {
var r = (Date.now() - t) / 1e3;
this.getWeightValue() < this.weightThreshold && this.checkIsFillAlgorithm(e) && r >= .1 && r <= 60 && this._currentGameDataEndless.operationTimes.push(r);
this.saveTempData();
}
};
t.prototype.checkIsFillAlgorithm = function(e) {
var t;
try {
var r = (null === (t = hs.algorithmName) || void 0 === t ? void 0 : t.algoActualName) || [];
if (!r || 0 === r.length) return !1;
var a = e;
if (a < 0 || a >= r.length) {
var o = r[0] || "";
return "string" == typeof o && this.isFillBlankAlgoName(o);
}
var i = r[a];
return !(!i || "string" != typeof i) && this.isFillBlankAlgoName(i);
} catch (e) {
return !1;
}
};
t.prototype.isFillBlankAlgoName = function(e) {
var t;
return !!e && (e === hs.ALGO_NAME_TYPE.NAME_BLANK || e === (null === (t = hs.OFFER_TYPE_STRINGS) || void 0 === t ? void 0 : t[hs.OFFER_TYPE.ALGO_QUICK]));
};
t.prototype.onGameEnd = function() {
if (this._currentGameDataEndless) if (0 !== this._currentGameDataEndless.operationTimes.length) {
var e = this._currentGameDataEndless.operationTimes.reduce(function(e, t) {
return e + t;
}, 0) / this._currentGameDataEndless.operationTimes.length, t = this._currentGameDataEndless.operationTimes.length, r = {
timestamp: this.getCurrentTimestamp(),
avgTime: e,
count: t
};
this._storageData.recentGames.push(r);
for (;this._storageData.recentGames.length > this.recordGameCount; ) this._storageData.recentGames.shift();
this.clearTempData();
this.saveStorageData();
} else {
this.clearTempData();
this.saveStorageData();
}
};
t.prototype.clearTempData = function() {
this._storageData.endlessGameTemp = void 0;
this._currentGameDataEndless = null;
};
t.prototype.checkIsSlowPlayer = function() {
if (!this._storageData || 0 === this._storageData.recentGames.length) return !1;
if (this._storageData.recentGames.length < this.recordGameCount) return !1;
var e = 0, t = 0;
this._storageData.recentGames.forEach(function(r) {
e += r.avgTime * r.count;
t += r.count;
});
return 0 !== t && e / t > this.slowSpeedThreshold;
};
t.prototype.applySpeedMultiplier = function() {
var e;
if (this.checkIsSlowPlayer()) {
var t = this.slowPlayerSpeedMultiplier, r = TRAIT("EffectAccTrait");
if (r) {
r.setState({
acc: t
});
this._hasAppliedSpeed = !0;
this._useDirectKSpeed = !1;
} else {
this._hasAppliedSpeed || (this._originalKSpeed = null !== (e = cc.director._kSpeed) && void 0 !== e ? e : 1);
cc.director._kSpeed = t;
this._hasAppliedSpeed = !0;
this._useDirectKSpeed = !0;
}
}
};
t.prototype.hasAppliedSpeed = function() {
return this._hasAppliedSpeed;
};
t.prototype.getSpeedMultiplier = function() {
return this.slowPlayerSpeedMultiplier;
};
t.prototype.restoreSpeed = function() {
if (this._hasAppliedSpeed) {
if (this._useDirectKSpeed) cc.director._kSpeed = this._originalKSpeed; else {
var e = TRAIT("EffectAccTrait");
e && e.setState({
acc: 0
});
}
this._hasAppliedSpeed = !1;
}
};
t.prototype.isEndlessMode = function() {
var e;
return (null === (e = hs.gameInfo) || void 0 === e ? void 0 : e.gameMode) === hs.GameMode.Class;
};
t.prototype.getCurrentTimestamp = function() {
return Math.floor(Date.now() / 1e3);
};
t.prototype.getWeightValue = function() {
try {
var e = hs.boardInfo, t = null == e ? void 0 : e.faceBlocks;
return t ? hs.binarySupport.getWeightValue(t) : 0;
} catch (e) {
return 0;
}
};
t.prototype.loadStorageData = function() {
var e = storage.getItem("SlowPlayerAnimTraitData", null);
this._storageData = e || this.createEmptyStorageData();
};
t.prototype.saveStorageData = function() {
this._storageData && storage.setItem("SlowPlayerAnimTraitData", this._storageData);
};
t.prototype.createEmptyStorageData = function() {
return {
recentGames: [],
endlessGameTemp: null
};
};
t.prototype.saveTempData = function() {
if (this._currentGameDataEndless && this._storageData) {
var e = this._storageData.endlessGameTemp;
this._storageData.endlessGameTemp = {
operationTimes: s(this._currentGameDataEndless.operationTimes),
gameStartTimestamp: (null == e ? void 0 : e.gameStartTimestamp) || this.getCurrentTimestamp()
};
this.saveStorageData();
}
};
return i([ classId("SlowPlayerAnimTrait") ], t);
}(Trait);
r.SlowPlayerAnimTrait = l;
cc._RF.pop();
}, {} ]
}, {}, [ "SlowPlayerAnimTrait" ]);
//# sourceMappingURL=index.js.map
