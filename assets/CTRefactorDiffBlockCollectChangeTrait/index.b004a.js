window.__require = function t(e, r, o) {
function n(l, a) {
if (!r[l]) {
if (!e[l]) {
var c = l.split("/");
c = c[c.length - 1];
if (!e[c]) {
var f = "function" == typeof __require && __require;
if (!a && f) return f(c, !0);
if (i) return i(c, !0);
throw new Error("Cannot find module '" + l + "'");
}
l = c;
}
var s = r[l] = {
exports: {}
};
e[l][0].call(s.exports, function(t) {
return n(e[l][1][t] || t);
}, s, s.exports, t, e, r, o);
}
return r[l].exports;
}
for (var i = "function" == typeof __require && __require, l = 0; l < o.length; l++) n(o[l]);
return n;
}({
CTRefactorDiffBlockCollectChangeTrait: [ function(t, e, r) {
"use strict";
cc._RF.push(e, "1cd390gI1tB54KH9wt6GF5G", "CTRefactorDiffBlockCollectChangeTrait");
var o, n = this && this.__extends || (o = function(t, e) {
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
}), i = this && this.__decorate || function(t, e, r, o) {
var n, i = arguments.length, l = i < 3 ? e : null === o ? o = Object.getOwnPropertyDescriptor(e, r) : o;
if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) l = Reflect.decorate(t, e, r, o); else for (var a = t.length - 1; a >= 0; a--) (n = t[a]) && (l = (i < 3 ? n(l) : i > 3 ? n(e, r, l) : n(e, r)) || l);
return i > 3 && l && Object.defineProperty(e, r, l), l;
}, l = this && this.__values || function(t) {
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
r.CTRefactorDiffBlockCollectChangeTrait = void 0;
var a = function(t) {
n(e, t);
function e() {
var e = null !== t && t.apply(this, arguments) || this;
e.TAG = "CTRefactorDiffBlockCollectChangeTrait";
e.CFG_POS = new Map([ [ 7, [ 0, 1, 2, 3 ] ], [ 9, [ 0, 1, 2, 3 ] ], [ 14, [ 0, 1, 2, 3 ] ], [ 16, [ 0, 1, 2, 3 ] ], [ 17, [ 0, 1, 2, 3 ] ], [ 18, [ 0, 1, 2, 3 ] ], [ 19, [ 0, 1, 2, 3 ] ], [ 10, [ 0, 1, 3 ] ], [ 20, [ 0, 2, 3 ] ], [ 25, [ 0, 1, 3 ] ], [ 26, [ 0, 2, 3 ] ], [ 8, [ 1, 2, 3 ] ], [ 29, [ 0, 1, 3 ] ], [ 30, [ 0, 1, 2 ] ], [ 31, [ 0, 2, 3 ] ], [ 32, [ 1, 2, 3 ] ], [ 33, [ 1, 2, 3 ] ], [ 34, [ 0, 1, 2 ] ], [ 42, [ 0, 1, 2 ] ], [ 11, [ 0, 2, 4 ] ], [ 22, [ 0, 2, 4 ] ], [ 12, [ 0, 2, 4 ] ], [ 21, [ 0, 2, 4 ] ], [ 23, [ 0, 2, 4 ] ], [ 24, [ 0, 2, 4 ] ], [ 35, [ 0, 2, 4 ] ], [ 36, [ 0, 3, 4 ] ], [ 13, [ 0, 2, 4, 6, 8 ] ] ]);
return e;
}
Object.defineProperty(e.prototype, "collectionLists", {
get: function() {
return hs.storage.getItem("chapterCollectionLists", []);
},
set: function(t) {
hs.storage.setItem("chapterCollectionLists", t);
},
enumerable: !1,
configurable: !0
});
e.prototype.onAlgorithmStrategyCollectionAdjust = function() {
var t, e, r = TRAIT("CTRefactorDiffBlockCollectTrait");
if ((null == r ? void 0 : r.active) && (null == r ? void 0 : r.isValidate)) {
r.isValidate = !1;
if (this.isCollectionChapter()) {
var o = hs.chapterAlgorithmInfo.blockIdList;
if (o && 3 === o.length) {
for (var n = new Map(), i = -1, a = 0; a < o.length; a++) {
var c = o[a], f = hs.BinaryClip.countBlockCells(c);
if (!f) return;
i = Math.max(f, i);
var s = n.has(f) ? n.get(f) : [];
s.push({
block: c,
idx: a
});
n.set(f, s);
}
var u = n.get(i);
try {
for (var h = l(u), p = h.next(); !p.done; p = h.next()) {
var v = p.value, C = v.idx;
if (this.hasFullBlock(v.block, C)) return;
}
} catch (e) {
t = {
error: e
};
} finally {
try {
p && !p.done && (e = h.return) && e.call(h);
} finally {
if (t) throw t.error;
}
}
var y = -1;
if (n.has(i) && 1 === u.length) {
var d = u[0];
d && (y = d.idx);
} else y = this.clearMax(u);
if (-1 !== y) {
this.modifyCollect(y, o);
return {
data: this.collectionLists
};
}
}
}
}
};
e.prototype.isCollectionChapter = function() {
var t, e, r = hs.storage.getItem("chapterNum", 0);
return 1 === (null === (e = null === (t = hs.chapterConfigInfo.chapterDatasCfg[r]) || void 0 === t ? void 0 : t.Condition) || void 0 === e ? void 0 : e.Way);
};
e.prototype.hasFullBlock = function(t, e) {
var r = this.collectionLists[e];
if (!r) return !1;
var o = hs.BinaryClip.countBlockCells(t);
return Object.keys(r).length >= o;
};
e.prototype.modifyCollect = function(t, e) {
for (var r = this.hasFullBlock(e[t], t), o = [], n = this.collectNum(), i = 0; i < e.length; i++) {
var l = e[i], a = this.collectionLists[i];
if (r) this.CFG_POS.has(l) && t === i && n ? o.push(a) : o.push([]); else if (this.CFG_POS.has(l) && t === i) {
for (var c = {}, f = this.CFG_POS.get(l), s = 0; s < f.length; s++) {
var u = f[s];
c[u] = {
Key: n,
pos: u
};
}
o.push(c);
} else o.push(a);
}
this.collectionLists = o;
};
e.prototype.clearMax = function(t) {
var e, r, o = new hs.BinaryBoard();
o.convertToBinaryBoard(hs.boardInfo.faceBlocks);
o.record();
for (var n = null, i = -1, a = 0; a < t.length; a++) {
var c = t[a], f = o.getCanPutPoss(c.block);
try {
for (var s = (e = void 0, l(f)), u = s.next(); !u.done; u = s.next()) {
var h = u.value;
o.putBlock(c.block, h);
var p = o.getClearCount();
o.revert();
if (p > i) {
i = p;
n = c;
}
}
} catch (t) {
e = {
error: t
};
} finally {
try {
u && !u.done && (r = s.return) && r.call(s);
} finally {
if (e) throw e.error;
}
}
}
return n ? n.idx : -1;
};
e.prototype.collectNum = function() {
var t = 0, e = 0, r = hs.chapterCollectInfo.collectRemainCollectItems;
for (var o in r) {
var n = r[o] || 0;
if (n > t) {
t = n;
e = parseInt(o);
}
}
return e;
};
return i([ classId("CTRefactorDiffBlockCollectChangeTrait") ], e);
}(Trait);
r.CTRefactorDiffBlockCollectChangeTrait = a;
cc._RF.pop();
}, {} ]
}, {}, [ "CTRefactorDiffBlockCollectChangeTrait" ]);
//# sourceMappingURL=index.js.map
