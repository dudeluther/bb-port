window.__require = function t(r, e, a) {
function o(s, n) {
if (!e[s]) {
if (!r[s]) {
var d = s.split("/");
d = d[d.length - 1];
if (!r[d]) {
var u = "function" == typeof __require && __require;
if (!n && u) return u(d, !0);
if (i) return i(d, !0);
throw new Error("Cannot find module '" + s + "'");
}
s = d;
}
var p = e[s] = {
exports: {}
};
r[s][0].call(p.exports, function(t) {
return o(r[s][1][t] || t);
}, p, p.exports, t, r, e, a);
}
return e[s].exports;
}
for (var i = "function" == typeof __require && __require, s = 0; s < a.length; s++) o(a[s]);
return o;
}({
GpEmptyBoardRatioGuardTrait: [ function(t, r, e) {
"use strict";
cc._RF.push(r, "fbf6cao+rNBfIIcaCM8XZRj", "GpEmptyBoardRatioGuardTrait");
var a, o = this && this.__extends || (a = function(t, r) {
return (a = Object.setPrototypeOf || {
__proto__: []
} instanceof Array && function(t, r) {
t.__proto__ = r;
} || function(t, r) {
for (var e in r) Object.prototype.hasOwnProperty.call(r, e) && (t[e] = r[e]);
})(t, r);
}, function(t, r) {
a(t, r);
function e() {
this.constructor = t;
}
t.prototype = null === r ? Object.create(r) : (e.prototype = r.prototype, new e());
}), i = this && this.__assign || function() {
return (i = Object.assign || function(t) {
for (var r, e = 1, a = arguments.length; e < a; e++) {
r = arguments[e];
for (var o in r) Object.prototype.hasOwnProperty.call(r, o) && (t[o] = r[o]);
}
return t;
}).apply(this, arguments);
}, s = this && this.__decorate || function(t, r, e, a) {
var o, i = arguments.length, s = i < 3 ? r : null === a ? a = Object.getOwnPropertyDescriptor(r, e) : a;
if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) s = Reflect.decorate(t, r, e, a); else for (var n = t.length - 1; n >= 0; n--) (o = t[n]) && (s = (i < 3 ? o(s) : i > 3 ? o(r, e, s) : o(r, e)) || s);
return i > 3 && s && Object.defineProperty(r, e, s), s;
};
Object.defineProperty(e, "__esModule", {
value: !0
});
e.GpEmptyBoardRatioGuardTrait = void 0;
var n = [ "InitBoardDelayTrait" ], d = function(t) {
o(r, t);
function r() {
var r = null !== t && t.apply(this, arguments) || this;
r.STORAGE_KEY = "gpEmptyBoardRatioGuard";
r.DEFAULT_STORAGE_DATA = {
firstEffectDate: "",
dailyDate: "",
dailyCompletedGames: 0,
dailyEmptyBoardGames: 0,
currentBoardEmpty: !1
};
r._cachedData = null;
r._isCurrentGameNew = !1;
r._isCurrentBoardEmpty = !1;
r._forcedEmptyBoard = !1;
r._guardParticipating = !1;
r._shouldForceEmptyByGuard = !1;
return r;
}
Object.defineProperty(r.prototype, "onActiveCondition", {
get: function() {
return hs.gameInfo.gameMode === hs.GameMode.Class && this.isCanActive();
},
enumerable: !1,
configurable: !0
});
r.prototype.isCanActive = function() {
return !0;
};
r.prototype.onActive = function(t) {
hs.tp.isClassDefaultBoard_ProxyOnProduceClassDefaultBoard(t) && this._onGameStart(t);
hs.tp.isClassDefaultBoard_ProxyProduceDefaultBoard(t) && this._onProduceDefaultBoard(t);
hs.tp.isClassDefaultBoard_ProxyProduceDefaultBoardFinal(t) && this._onProduceDefaultBoardFinal(t);
hs.tp.isClassDefaultBoard_ProxyPostPreprocessing(t) && this._onPostPreprocessing(t);
hs.tp.isClassGameOver_GameEnd_ProxyOnGameEnd(t) && this._onGameEnd();
};
r.prototype._onGameStart = function(t) {
var r = t.args[0];
this._isCurrentGameNew = r.data.newGame;
this._isCurrentBoardEmpty = !1;
this._forcedEmptyBoard = !1;
this._guardParticipating = !1;
this._shouldForceEmptyByGuard = !1;
this._cachedData = null;
};
r.prototype._onProduceDefaultBoard = function(t) {
if (this._isCurrentGameNew) {
var r = this._getStorageData(), e = hs.getTodayDateStr();
r.firstEffectDate || (r.firstEffectDate = e);
this._ensureDailyReset(r, e);
this._saveStorageData(r);
if (this._isWithinGuardWindow(r, e)) {
this._guardParticipating = !0;
this._shouldForceEmptyByGuard = this._shouldForceEmptyBoard(r);
if (this._shouldForceEmptyByGuard) {
t.args[0] = hs.boardInfo.NULL;
t.returnState = !0;
this._forcedEmptyBoard = !0;
}
}
}
};
r.prototype._onProduceDefaultBoardFinal = function(t) {
if (this._isCurrentGameNew && this._guardParticipating) {
t.disable(n);
if (this._shouldForceEmptyByGuard) {
t.args[0] = hs.boardInfo.NULL;
t.returnState = !0;
}
}
};
r.prototype._isWithinGuardWindow = function(t, r) {
var e, a, o = null !== (e = this.props.effectDays) && void 0 !== e ? e : 3;
if (this._getDaysDiff(t.firstEffectDate, r) >= o) return !1;
var i = null !== (a = this.props.startGameNum) && void 0 !== a ? a : 2;
return !(t.dailyCompletedGames < i);
};
r.prototype._shouldForceEmptyBoard = function(t) {
var r, e, a = t.dailyCompletedGames > 0 ? t.dailyEmptyBoardGames / t.dailyCompletedGames : 0, o = null !== (r = this.props.emptyBoardRatioMin) && void 0 !== r ? r : .5, i = null !== (e = this.props.emptyBoardRatioMax) && void 0 !== e ? e : .8;
return a < o + Math.random() * (i - o);
};
r.prototype._onPostPreprocessing = function(t) {
if (t.args[0].data.newGame) {
this._isCurrentBoardEmpty = this._forcedEmptyBoard || hs.boardInfo.isNullBoard(hs.boardInfo.faceBlocks);
var r = this._getStorageData();
r.currentBoardEmpty = this._isCurrentBoardEmpty;
this._saveStorageData(r);
}
};
r.prototype._onGameEnd = function() {
var t = this._getStorageData(), r = hs.getTodayDateStr();
this._ensureDailyReset(t, r);
this._isCurrentGameNew || (this._isCurrentBoardEmpty = t.currentBoardEmpty);
t.dailyCompletedGames++;
this._isCurrentBoardEmpty && t.dailyEmptyBoardGames++;
t.currentBoardEmpty = !1;
this._saveStorageData(t);
};
r.prototype._getStorageData = function() {
if (this._cachedData) return this._cachedData;
this._cachedData = hs.storage.getItem("gpEmptyBoardRatioGuard", i({}, this.DEFAULT_STORAGE_DATA));
return this._cachedData;
};
r.prototype._saveStorageData = function(t) {
this._cachedData = t;
hs.storage.setItem("gpEmptyBoardRatioGuard", t);
};
r.prototype._ensureDailyReset = function(t, r) {
if (t.dailyDate !== r) {
t.dailyDate = r;
t.dailyCompletedGames = 0;
t.dailyEmptyBoardGames = 0;
}
};
r.prototype._getDaysDiff = function(t, r) {
var e = new Date(t), a = new Date(r);
e.setHours(0, 0, 0, 0);
a.setHours(0, 0, 0, 0);
return Math.floor((a.getTime() - e.getTime()) / 864e5);
};
return s([ classId("GpEmptyBoardRatioGuardTrait"), classMethodWatch() ], r);
}(Trait);
e.GpEmptyBoardRatioGuardTrait = d;
cc._RF.pop();
}, {} ]
}, {}, [ "GpEmptyBoardRatioGuardTrait" ]);
//# sourceMappingURL=index.js.map
