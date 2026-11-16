window.__require = function t(e, r, a) {
function o(n, i) {
if (!r[n]) {
if (!e[n]) {
var l = n.split("/");
l = l[l.length - 1];
if (!e[l]) {
var u = "function" == typeof __require && __require;
if (!i && u) return u(l, !0);
if (s) return s(l, !0);
throw new Error("Cannot find module '" + n + "'");
}
n = l;
}
var h = r[n] = {
exports: {}
};
e[n][0].call(h.exports, function(t) {
return o(e[n][1][t] || t);
}, h, h.exports, t, e, r, a);
}
return r[n].exports;
}
for (var s = "function" == typeof __require && __require, n = 0; n < a.length; n++) o(a[n]);
return o;
}({
EndlessDeathBoardTrait: [ function(t, e, r) {
"use strict";
cc._RF.push(e, "3fa36wXfa5GvY74/3IKEG9h", "EndlessDeathBoardTrait");
var a, o = this && this.__extends || (a = function(t, e) {
return (a = Object.setPrototypeOf || {
__proto__: []
} instanceof Array && function(t, e) {
t.__proto__ = e;
} || function(t, e) {
for (var r in e) Object.prototype.hasOwnProperty.call(e, r) && (t[r] = e[r]);
})(t, e);
}, function(t, e) {
a(t, e);
function r() {
this.constructor = t;
}
t.prototype = null === e ? Object.create(e) : (r.prototype = e.prototype, new r());
}), s = this && this.__decorate || function(t, e, r, a) {
var o, s = arguments.length, n = s < 3 ? e : null === a ? a = Object.getOwnPropertyDescriptor(e, r) : a;
if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) n = Reflect.decorate(t, e, r, a); else for (var i = t.length - 1; i >= 0; i--) (o = t[i]) && (n = (s < 3 ? o(n) : s > 3 ? o(e, r, n) : o(e, r)) || n);
return s > 3 && n && Object.defineProperty(e, r, n), n;
}, n = this && this.__read || function(t, e) {
var r = "function" == typeof Symbol && t[Symbol.iterator];
if (!r) return t;
var a, o, s = r.call(t), n = [];
try {
for (;(void 0 === e || e-- > 0) && !(a = s.next()).done; ) n.push(a.value);
} catch (t) {
o = {
error: t
};
} finally {
try {
a && !a.done && (r = s.return) && r.call(s);
} finally {
if (o) throw o.error;
}
}
return n;
}, i = this && this.__spread || function() {
for (var t = [], e = 0; e < arguments.length; e++) t = t.concat(n(arguments[e]));
return t;
};
Object.defineProperty(r, "__esModule", {
value: !0
});
r.EndlessDeathBoardTrait = void 0;
var l = function(t) {
o(e, t);
function e() {
var e = null !== t && t.apply(this, arguments) || this;
e.logKey = "EndlessDeathBoardTrait";
e.STORAGE_KEY = "classEndlessDeathBoardData";
e.DEFAULT_DATA = {
deathFaceBlocks: [],
deathGameNum: 0,
isValid: !1
};
e._useDeathBoard = !1;
return e;
}
Object.defineProperty(e.prototype, "onActiveCondition", {
get: function() {
return this.isCanActive();
},
enumerable: !1,
configurable: !0
});
e.prototype.isCanActive = function() {
return !0;
};
e.prototype.registerTraitEventsMethods = function() {
return [ {
className: "ClassDefaultBoard_Proxy",
methodName: "onGameOverPre"
}, {
className: "ClassDefaultBoard_Proxy",
methodName: "produceDefaultBoard"
}, {
className: "ClassDefaultBoard_Proxy",
methodName: "produceDefaultBoardTurnAround"
}, {
className: "ClassDefaultBoard_Proxy",
methodName: "onGameReplay"
} ];
};
e.prototype.onActive = function(t) {
hs.tp.isClassDefaultBoard_ProxyOnGameOverPre(t) && this.saveDeathBoard();
hs.tp.isClassDefaultBoard_ProxyProduceDefaultBoard(t) && this.produceDefaultBoard(t);
hs.tp.isClassDefaultBoard_ProxyProduceDefaultBoardTurnAround(t) && this._useDeathBoard && (t.returnState = !0);
if (hs.tp.isClassDefaultBoard_ProxyOnGameReplay(t)) {
this._useDeathBoard = !1;
this.clearDeathBoardData();
}
if (hs.tp.isAlgorithmIOSProcessInfoIosChangeResult(t)) {
var e = t.args[1], r = t.args[0];
if (1 === hs.classGameInfo.roundNum && e === hs.algorithmSource.NORMAL && 3 == r.blockIds.length) {
var a = r.blockNames;
if (a && 3 === a.length && "随机" === a[0] && "随机" === a[1] && "随机" === a[2]) {
r.blockIds = [];
r.blockNames = [];
r.blockPoses = [];
hs.algorithmStrategyInfo.setAlgorithmFailList(i(hs.algorithmStrategyIOSRandomInfo.offerBitRandomNoDieBit(), hs.algorithmStrategyInfo.algorithmFailList));
}
}
}
};
e.prototype.produceDefaultBoard = function(t) {
this._useDeathBoard = !1;
var e = this.useDeathBoardAsInitial(t);
if (e) {
t.args[0] = e;
t.returnState = !0;
this._useDeathBoard = !0;
}
};
e.prototype.saveDeathBoard = function() {
var t = hs.classBoardInfo.faceBlocks, e = hs.classGameInfo.gameNum;
if (t && Array.isArray(t) && 0 !== t.length) if (t.every(function(t) {
return t.every(function(t) {
return -1 === t;
});
})) ; else {
var r = {
deathFaceBlocks: JSON.parse(JSON.stringify(t)),
deathGameNum: e,
isValid: !0
};
hs.storage.setItem(this.STORAGE_KEY, r);
}
};
e.prototype.useDeathBoardAsInitial = function() {
var t = this.getDeathBoardData();
if (!t.isValid) return null;
if (hs.classGameInfo.gameNum !== t.deathGameNum + 1) {
this.clearDeathBoardData();
return null;
}
if (!t.deathFaceBlocks || 0 === t.deathFaceBlocks.length) return null;
this.markDataUsed();
return JSON.parse(JSON.stringify(t.deathFaceBlocks));
};
e.prototype.getDeathBoardData = function() {
return hs.storage.getItem(this.STORAGE_KEY, this.DEFAULT_DATA);
};
e.prototype.markDataUsed = function() {
var t = this.getDeathBoardData();
t.isValid = !1;
hs.storage.setItem(this.STORAGE_KEY, t);
};
e.prototype.clearDeathBoardData = function() {
hs.storage.setItem(this.STORAGE_KEY, this.DEFAULT_DATA);
};
return s([ classId("EndlessDeathBoardTrait"), classMethodWatch() ], e);
}(Trait);
r.EndlessDeathBoardTrait = l;
cc._RF.pop();
}, {} ]
}, {}, [ "EndlessDeathBoardTrait" ]);
//# sourceMappingURL=index.js.map
