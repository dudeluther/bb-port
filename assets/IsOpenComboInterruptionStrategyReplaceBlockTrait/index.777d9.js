window.__require = function t(r, e, o) {
function n(l, a) {
if (!e[l]) {
if (!r[l]) {
var c = l.split("/");
c = c[c.length - 1];
if (!r[c]) {
var u = "function" == typeof __require && __require;
if (!a && u) return u(c, !0);
if (i) return i(c, !0);
throw new Error("Cannot find module '" + l + "'");
}
l = c;
}
var s = e[l] = {
exports: {}
};
r[l][0].call(s.exports, function(t) {
return n(r[l][1][t] || t);
}, s, s.exports, t, r, e, o);
}
return e[l].exports;
}
for (var i = "function" == typeof __require && __require, l = 0; l < o.length; l++) n(o[l]);
return n;
}({
IsOpenComboInterruptionStrategyReplaceBlockTrait: [ function(t, r, e) {
"use strict";
cc._RF.push(r, "b3f04+2FvtHub5jzR5qZqAz", "IsOpenComboInterruptionStrategyReplaceBlockTrait");
var o, n = this && this.__extends || (o = function(t, r) {
return (o = Object.setPrototypeOf || {
__proto__: []
} instanceof Array && function(t, r) {
t.__proto__ = r;
} || function(t, r) {
for (var e in r) Object.prototype.hasOwnProperty.call(r, e) && (t[e] = r[e]);
})(t, r);
}, function(t, r) {
o(t, r);
function e() {
this.constructor = t;
}
t.prototype = null === r ? Object.create(r) : (e.prototype = r.prototype, new e());
}), i = this && this.__decorate || function(t, r, e, o) {
var n, i = arguments.length, l = i < 3 ? r : null === o ? o = Object.getOwnPropertyDescriptor(r, e) : o;
if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) l = Reflect.decorate(t, r, e, o); else for (var a = t.length - 1; a >= 0; a--) (n = t[a]) && (l = (i < 3 ? n(l) : i > 3 ? n(r, e, l) : n(r, e)) || l);
return i > 3 && l && Object.defineProperty(r, e, l), l;
}, l = this && this.__values || function(t) {
var r = "function" == typeof Symbol && Symbol.iterator, e = r && t[r], o = 0;
if (e) return e.call(t);
if (t && "number" == typeof t.length) return {
next: function() {
t && o >= t.length && (t = void 0);
return {
value: t && t[o++],
done: !t
};
}
};
throw new TypeError(r ? "Object is not iterable." : "Symbol.iterator is not defined.");
}, a = this && this.__read || function(t, r) {
var e = "function" == typeof Symbol && t[Symbol.iterator];
if (!e) return t;
var o, n, i = e.call(t), l = [];
try {
for (;(void 0 === r || r-- > 0) && !(o = i.next()).done; ) l.push(o.value);
} catch (t) {
n = {
error: t
};
} finally {
try {
o && !o.done && (e = i.return) && e.call(i);
} finally {
if (n) throw n.error;
}
}
return l;
}, c = this && this.__spread || function() {
for (var t = [], r = 0; r < arguments.length; r++) t = t.concat(a(arguments[r]));
return t;
};
Object.defineProperty(e, "__esModule", {
value: !0
});
e.IsOpenComboInterruptionStrategyReplaceBlockTrait = void 0;
var u = function(t) {
n(r, t);
function r() {
return null !== t && t.apply(this, arguments) || this;
}
Object.defineProperty(r.prototype, "onActiveCondition", {
get: function() {
return this.isCanActive();
},
enumerable: !1,
configurable: !0
});
r.prototype.isCanActive = function() {
return !0;
};
Object.defineProperty(r.prototype, "TARGET_ALGO_TYPES", {
get: function() {
var t;
return null === (t = this.props) || void 0 === t ? void 0 : t.algoActualIds;
},
enumerable: !1,
configurable: !0
});
Object.defineProperty(r.prototype, "comboThreshold", {
get: function() {
var t;
return null === (t = this.props) || void 0 === t ? void 0 : t.comboCount;
},
enumerable: !1,
configurable: !0
});
r.prototype.onActive = function(t) {
hs.tp.isAlgorithmStrategyInfoAlgorithmComplete(t) && hs.gameInfo.gameMode === hs.GameMode.Class && this.checkAndReplaceBlocks();
};
r.prototype.checkAndReplaceBlocks = function() {
var t, r;
if (this.checkTriggerConditions()) {
var e = hs.algorithmInfo.blockIdList;
if (e && 3 === e.length) {
var o = hs.boardInfo.faceBlocks, n = new hs.BinaryBoard();
n.convertToBinaryBoard(o);
for (var i = [], a = [], c = 0; c < e.length; c++) -1 !== (y = e[c]) && (this.isBlockCanClear(n, y) ? i.push(c) : this.isBlockCanPut(n, y) && a.push(c));
var u = i.length;
if (a.length <= 0) ; else if (0 !== u) {
var s, f = n.clone();
try {
for (var h = l(a), p = h.next(); !p.done; p = h.next()) {
var y = e[p.value], d = this.findBestPosition(f, y);
d && f.putBlock(y, d);
}
} catch (r) {
t = {
error: r
};
} finally {
try {
p && !p.done && (r = h.return) && r.call(h);
} finally {
if (t) throw t.error;
}
}
(s = f.canClearBlockArr(!1) ? this.findThreeNonClearableBlocks(n) : this.findNonClearableBlocksForBoard(f, u, e, i)) && 3 === s.length && !s.includes(-1) && hs.algorithmInfo.setBlockIdList(s);
}
}
}
};
r.prototype.checkTriggerConditions = function() {
if (this.getCurrentCombo() < this.comboThreshold) return !1;
var t = hs.algorithmName.algoActualIdByPos;
return !!this.TARGET_ALGO_TYPES.includes(t);
};
r.prototype.getCurrentCombo = function() {
var t, r = null === (t = hs.classDataStatisticsInfo) || void 0 === t ? void 0 : t.dataStatisticsInfo;
return r && r.comboTouchNum || 0;
};
r.prototype.isBlockCanClear = function(t, r) {
var e, o, n = t.getCanPutPoss(r);
if (!n || 0 === n.length) return !1;
try {
for (var i = l(n), a = i.next(); !a.done; a = i.next()) {
var c = a.value, u = t.clone();
u.putBlock(r, c);
if (u.canClearBlockArr(!1)) return !0;
}
} catch (t) {
e = {
error: t
};
} finally {
try {
a && !a.done && (o = i.return) && o.call(i);
} finally {
if (e) throw e.error;
}
}
return !1;
};
r.prototype.isBlockCanPut = function(t, r) {
var e = t.getCanPutPoss(r);
return e && e.length > 0;
};
r.prototype.findBestPosition = function(t, r) {
var e, o, n = t.getCanPutPoss(r);
if (!n || 0 === n.length) return null;
var i = null, a = Infinity;
try {
for (var c = l(n), u = c.next(); !u.done; u = c.next()) {
var s = u.value, f = t.clone();
f.putBlock(r, s);
var h = f.getEdgeGameNum();
if (h < a) {
a = h;
i = s;
}
}
} catch (t) {
e = {
error: t
};
} finally {
try {
u && !u.done && (o = c.return) && o.call(c);
} finally {
if (e) throw e.error;
}
}
return i;
};
r.prototype.findNonClearableBlocksForBoard = function(t, r, e, o) {
for (var n = this, i = c(e), l = this.getAllBlockIds(), a = this.shuffleArray(c(l)).filter(function(r) {
return n.isBlockCanPut(t, r);
}), u = Math.min(100, a.length * a.length), s = 0; s < u; s++) {
var f = this.selectRandomBlocksWithDuplicate(a, r);
if (!(f.length < r) && this.checkBlocksNonClearable(t, f)) {
for (var h = 0; h < r; h++) i[o[h]] = f[h];
return i;
}
}
return e;
};
r.prototype.findThreeNonClearableBlocks = function(t) {
for (var r = this, e = this.getAllBlockIds(), o = this.shuffleArray(c(e)).filter(function(e) {
return r.isBlockCanPut(t, e);
}), n = Math.min(200, o.length * o.length), i = 0; i < n; i++) {
var l = this.selectRandomBlocksWithDuplicate(o, 3);
if (!(l.length < 3) && this.checkBlocksNonClearable(t, l)) return l;
}
return null;
};
r.prototype.checkBlocksNonClearable = function(t, r) {
return this.checkAllCombinationsRecursive(t.clone(), r, 0);
};
r.prototype.checkAllCombinationsRecursive = function(t, r, e) {
var o, n;
if (e === r.length) return !0;
var i = r[e], a = t.getCanPutPoss(i);
if (!a || 0 === a.length) return !1;
try {
for (var c = l(a), u = c.next(); !u.done; u = c.next()) {
var s = u.value, f = t.clone();
f.putBlock(i, s);
if (f.canClearBlockArr(!1)) return !1;
if (!this.checkAllCombinationsRecursive(f, r, e + 1)) return !1;
}
} catch (t) {
o = {
error: t
};
} finally {
try {
u && !u.done && (n = c.return) && n.call(c);
} finally {
if (o) throw o.error;
}
}
return !0;
};
r.prototype.selectRandomBlocksWithDuplicate = function(t, r) {
if (0 === t.length) return [];
for (var e = [], o = 0; o < r; o++) {
var n = Math.floor(Math.random() * t.length);
e.push(t[n]);
}
return e;
};
r.prototype.getAllBlockIds = function() {
return Array.from({
length: 42
}, function(t, r) {
return r + 1;
});
};
r.prototype.shuffleArray = function(t) {
for (var r, e = t.length - 1; e > 0; e--) {
var o = Math.floor(Math.random() * (e + 1));
r = a([ t[o], t[e] ], 2), t[e] = r[0], t[o] = r[1];
}
return t;
};
return i([ classId("IsOpenComboInterruptionStrategyReplaceBlockTrait"), classMethodWatch() ], r);
}(Trait);
e.IsOpenComboInterruptionStrategyReplaceBlockTrait = u;
cc._RF.pop();
}, {} ]
}, {}, [ "IsOpenComboInterruptionStrategyReplaceBlockTrait" ]);
//# sourceMappingURL=index.js.map
