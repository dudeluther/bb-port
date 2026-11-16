window.__require = function t(e, r, o) {
function i(a, s) {
if (!r[a]) {
if (!e[a]) {
var l = a.split("/");
l = l[l.length - 1];
if (!e[l]) {
var u = "function" == typeof __require && __require;
if (!s && u) return u(l, !0);
if (n) return n(l, !0);
throw new Error("Cannot find module '" + a + "'");
}
a = l;
}
var c = r[a] = {
exports: {}
};
e[a][0].call(c.exports, function(t) {
return i(e[a][1][t] || t);
}, c, c.exports, t, e, r, o);
}
return r[a].exports;
}
for (var n = "function" == typeof __require && __require, a = 0; a < o.length; a++) i(o[a]);
return i;
}({
AlgoSymmetryBlockTrait: [ function(t, e, r) {
"use strict";
cc._RF.push(e, "14bf9wfeQNNmKobQjE0zryb", "AlgoSymmetryBlockTrait");
var o, i, n = this && this.__extends || (o = function(t, e) {
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
}), a = this && this.__decorate || function(t, e, r, o) {
var i, n = arguments.length, a = n < 3 ? e : null === o ? o = Object.getOwnPropertyDescriptor(e, r) : o;
if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) a = Reflect.decorate(t, e, r, o); else for (var s = t.length - 1; s >= 0; s--) (i = t[s]) && (a = (n < 3 ? i(a) : n > 3 ? i(e, r, a) : i(e, r)) || a);
return n > 3 && a && Object.defineProperty(e, r, a), a;
}, s = this && this.__read || function(t, e) {
var r = "function" == typeof Symbol && t[Symbol.iterator];
if (!r) return t;
var o, i, n = r.call(t), a = [];
try {
for (;(void 0 === e || e-- > 0) && !(o = n.next()).done; ) a.push(o.value);
} catch (t) {
i = {
error: t
};
} finally {
try {
o && !o.done && (r = n.return) && r.call(n);
} finally {
if (i) throw i.error;
}
}
return a;
}, l = this && this.__spread || function() {
for (var t = [], e = 0; e < arguments.length; e++) t = t.concat(s(arguments[e]));
return t;
}, u = this && this.__values || function(t) {
var e = "function" == typeof Symbol && Symbol.iterator, r = e && t[e], o = 0;
if (r) return r.call(t);
if (t && "number" == typeof t.length) return {
next: function() {
t && o >= t.length && (t = void 0);
return {
value: t && t[o++],
done: !t
};
}
};
throw new TypeError(e ? "Object is not iterable." : "Symbol.iterator is not defined.");
};
Object.defineProperty(r, "__esModule", {
value: !0
});
r.AlgoSymmetryBlockTrait = void 0;
(function(t) {
t[t.NONE = 0] = "NONE";
t[t.LEFT_RIGHT = 1] = "LEFT_RIGHT";
t[t.TOP_BOTTOM = 2] = "TOP_BOTTOM";
t[t.DIAGONAL_LEFT_TOP = 3] = "DIAGONAL_LEFT_TOP";
t[t.DIAGONAL_RIGHT_TOP = 4] = "DIAGONAL_RIGHT_TOP";
})(i || (i = {}));
var c = function(t) {
n(e, t);
function e() {
var e = null !== t && t.apply(this, arguments) || this;
e.LOG_TAG = "[AlgoSymmetryBlockTrait]";
e.detectedSymmetryType = [];
e._pendingSuccess = !1;
e._symmetryAlgoSucceeded = !1;
e.persistentData = {
gameNum: -1,
effectCount: 0
};
return e;
}
Object.defineProperty(e.prototype, "maxTimes", {
get: function() {
var t, e;
return null !== (e = null === (t = this.props) || void 0 === t ? void 0 : t.times) && void 0 !== e ? e : 3;
},
enumerable: !1,
configurable: !0
});
Object.defineProperty(e.prototype, "currentGameNum", {
get: function() {
return hs.storage.getItem("classGameNum", 0);
},
enumerable: !1,
configurable: !0
});
e.prototype.onActive = function(t) {
if (hs.gameInfo.gameMode === hs.GameMode.Class) if (hs.tp.isClassGame_ProxyOnGameStart(t)) this.onGameStart(t); else if (hs.tp.isClassAlgorithmStrategy_Condition_ProxyOnAlgorithmStrategyCondition(t)) {
if (this.onPreprocessingAlgorithm()) {
t.returnState = !0;
this.isMaskReturnState() && (t.returnState = !1);
}
} else hs.tp.isAlgorithmProcessInfoChangeResult(t) ? this.handleAlgorithmResult(t) : hs.tp.isAlgorithmProcessInfoHandleArgs(t) ? this.handleAlgorithmArgs(t) : hs.tp.isAlgorithm_ProxyFailStrategy(t) && this.handleFailStrategyNameFix();
};
e.prototype.isMaskReturnState = function() {
return !1;
};
e.prototype.onGameStart = function(t) {
var e, r, o = null === (e = t.args) || void 0 === e ? void 0 : e[0];
if (null === (r = null == o ? void 0 : o.data) || void 0 === r ? void 0 : r.newGame) {
this.persistentData.gameNum = this.currentGameNum;
this.persistentData.effectCount = 0;
} else if (this.persistentData.gameNum !== this.currentGameNum) {
this.persistentData.gameNum = this.currentGameNum;
this.persistentData.effectCount = 0;
}
};
e.prototype.onPreprocessingAlgorithm = function() {
this.detectedSymmetryType = [];
if (this.persistentData.gameNum !== this.currentGameNum) {
this.persistentData.gameNum = this.currentGameNum;
this.persistentData.effectCount = 0;
}
if (this.persistentData.effectCount >= this.maxTimes) return !1;
var t = this.detectBoardSymmetryType();
if (0 === t.length) return !1;
this.detectedSymmetryType = t;
this.insertSymmetryAlgorithm();
this._pendingSuccess = !0;
return !0;
};
e.prototype.detectBoardSymmetryType = function() {
var t = hs.boardInfo.faceBlocks, e = [];
if (!t || 0 === t.length) return e;
if (this.isEmptyBoard(t)) return e;
var r = new hs.BinaryBoard();
r.convertToBinaryBoard(t);
this.isLeftRightSymmetric(r) && e.push(i.LEFT_RIGHT);
this.isTopBottomSymmetric(r) && e.push(i.TOP_BOTTOM);
this.isMainDiagonalSymmetric(t) && e.push(i.DIAGONAL_LEFT_TOP);
this.isAntiDiagonalSymmetric(t) && e.push(i.DIAGONAL_RIGHT_TOP);
return e;
};
e.prototype.isLeftRightSymmetric = function(t) {
for (var e = t.rowBinary, r = e.length, o = 0; o < r; o++) {
var i = e[o];
if (i !== this.reverseBits(i, r)) return !1;
}
return !0;
};
e.prototype.isTopBottomSymmetric = function(t) {
for (var e = t.rowBinary, r = e.length, o = 0; o < Math.floor(r / 2); o++) if (e[o] !== e[r - 1 - o]) return !1;
return !0;
};
e.prototype.isMainDiagonalSymmetric = function(t) {
var e, r, o = t.length, i = null !== (r = null === (e = t[0]) || void 0 === e ? void 0 : e.length) && void 0 !== r ? r : 0;
if (o !== i) return !1;
for (var n = 0; n < o; n++) for (var a = n + 1; a < i; a++) if (t[n][a] !== t[a][n]) return !1;
return !0;
};
e.prototype.isAntiDiagonalSymmetric = function(t) {
var e, r, o = t.length;
if (o !== (null !== (r = null === (e = t[0]) || void 0 === e ? void 0 : e.length) && void 0 !== r ? r : 0)) return !1;
for (var i = o, n = 0; n < i; n++) for (var a = 0; a < i - 1 - n; a++) if (t[n][a] !== t[i - 1 - a][i - 1 - n]) return !1;
return !0;
};
e.prototype.reverseBits = function(t, e) {
for (var r = 0, o = 0; o < e; o++) {
r <<= 1;
r |= 1 & t;
t >>= 1;
}
return r;
};
e.prototype.isEmptyBoard = function(t) {
var e, r, o, i;
try {
for (var n = u(t), a = n.next(); !a.done; a = n.next()) {
var s = a.value;
try {
for (var l = (o = void 0, u(s)), c = l.next(); !c.done; c = l.next()) if (-1 !== c.value) return !1;
} catch (t) {
o = {
error: t
};
} finally {
try {
c && !c.done && (i = l.return) && i.call(l);
} finally {
if (o) throw o.error;
}
}
}
} catch (t) {
e = {
error: t
};
} finally {
try {
a && !a.done && (r = n.return) && r.call(n);
} finally {
if (e) throw e.error;
}
}
return !0;
};
e.prototype.replaceSymmetryAlgorithm = function(t) {
return t;
};
e.prototype.insertSymmetryAlgorithm = function() {
var t = l(hs.algorithmStrategyInfo.algorithmList), e = l([ hs.OFFER_TYPE.ALGO_SYMMETRY_BLOCK_XY ], t), r = this.replaceSymmetryAlgorithm(e) || e;
hs.algorithmStrategyInfo.setAlgorithmList(r);
};
e.prototype.handleAlgorithmResult = function(t) {
var e, r, o;
if (this._pendingSuccess) {
var i = null === (e = t.args) || void 0 === e ? void 0 : e[0];
if (i) {
var n = null === (r = hs.OFFER_ALGORITHM_SDK_TYPE) || void 0 === r ? void 0 : r[hs.OFFER_TYPE.ALGO_SYMMETRY_BLOCK_XY];
if (i.algoType === n) {
if (i.blockIds && 3 === i.blockIds.length && i.blockIds.every(function(t) {
return t > 0;
})) {
this.persistentData.effectCount++;
this._symmetryAlgoSucceeded = !0;
hs.algorithmName.forceSetAlgoExpectedId(hs.OFFER_TYPE.ALGO_SYMMETRY_BLOCK_XY);
var a = (null === (o = hs.OFFER_TYPE_REAL_STRINGS) || void 0 === o ? void 0 : o[hs.OFFER_TYPE.ALGO_SYMMETRY_BLOCK_XY]) || "对称出块算法";
i.blockNames = [ a, a, a ];
}
this._pendingSuccess = !1;
} else this._pendingSuccess = !1;
} else this._pendingSuccess = !1;
}
};
e.prototype.handleFailStrategyNameFix = function() {
var t;
if (this._symmetryAlgoSucceeded) {
this._symmetryAlgoSucceeded = !1;
if (3 === hs.algorithmInfo.blockIdList.length && hs.algorithmName.algoActualIdByPos === hs.OFFER_TYPE.ALGO_SYMMETRY_BLOCK_XY) {
var e = (null === (t = hs.OFFER_TYPE_REAL_STRINGS) || void 0 === t ? void 0 : t[hs.OFFER_TYPE.ALGO_SYMMETRY_BLOCK_XY]) || "对称出块算法";
hs.algorithmName.setAlgoActualName([ e, e, e ]);
hs.algorithmName.setAlgoActualChangeName([ e, e, e ]);
}
}
};
e.prototype.handleAlgorithmArgs = function(t) {
var e, r;
if (0 !== this.detectedSymmetryType.length) {
var o = null === (e = t.args) || void 0 === e ? void 0 : e[0];
if (o) {
o.extra = null !== (r = o.extra) && void 0 !== r ? r : {};
o.extra.symmetryType = this.detectedSymmetryType;
}
}
};
a([ hs.storageProperty({
key: "AlgoSymmetryBlockTrait"
}) ], e.prototype, "persistentData", void 0);
return a([ classId("AlgoSymmetryBlockTrait"), classMethodWatch() ], e);
}(Trait);
r.AlgoSymmetryBlockTrait = c;
cc._RF.pop();
}, {} ]
}, {}, [ "AlgoSymmetryBlockTrait" ]);
//# sourceMappingURL=index.js.map
