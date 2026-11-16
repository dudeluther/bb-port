window.__require = function t(e, r, o) {
function n(a, l) {
if (!r[a]) {
if (!e[a]) {
var c = a.split("/");
c = c[c.length - 1];
if (!e[c]) {
var f = "function" == typeof __require && __require;
if (!l && f) return f(c, !0);
if (i) return i(c, !0);
throw new Error("Cannot find module '" + a + "'");
}
a = c;
}
var u = r[a] = {
exports: {}
};
e[a][0].call(u.exports, function(t) {
return n(e[a][1][t] || t);
}, u, u.exports, t, e, r, o);
}
return r[a].exports;
}
for (var i = "function" == typeof __require && __require, a = 0; a < o.length; a++) n(o[a]);
return n;
}({
CTRefactorMultiElementCollectTrait: [ function(t, e, r) {
"use strict";
cc._RF.push(e, "1254awe2PVLUZIsKbf2Tahl", "CTRefactorMultiElementCollectTrait");
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
var n, i = arguments.length, a = i < 3 ? e : null === o ? o = Object.getOwnPropertyDescriptor(e, r) : o;
if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) a = Reflect.decorate(t, e, r, o); else for (var l = t.length - 1; l >= 0; l--) (n = t[l]) && (a = (i < 3 ? n(a) : i > 3 ? n(e, r, a) : n(e, r)) || a);
return i > 3 && a && Object.defineProperty(e, r, a), a;
}, a = this && this.__read || function(t, e) {
var r = "function" == typeof Symbol && t[Symbol.iterator];
if (!r) return t;
var o, n, i = r.call(t), a = [];
try {
for (;(void 0 === e || e-- > 0) && !(o = i.next()).done; ) a.push(o.value);
} catch (t) {
n = {
error: t
};
} finally {
try {
o && !o.done && (r = i.return) && r.call(i);
} finally {
if (n) throw n.error;
}
}
return a;
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
r.CTRefactorMultiElementCollectTrait = void 0;
var c = function(t) {
n(e, t);
function e() {
return null !== t && t.apply(this, arguments) || this;
}
e.prototype.onAlgorithmStrategyCollectionAdjust = function() {
if (-1 == hs.algorithmName.algoActualChangeName.indexOf("消除爽") && 3 == hs.chapterAlgorithmInfo.blockIdList.length) return {
data: this.produceItemsForBlock(),
disableTraits: [ "CTRefactorGemReturnFullGemTrait", "CTRefactorMultiElementCollect_TravelAlgorithmLayerTrait", "CTRefactorMultiElementCollect_TravelConfigLayerTrait", "CTRefactorCollectionOriginTrait" ]
};
};
e.prototype.produceItemsForBlock = function() {
var t = hs.algorithmInfo.blockIdList, e = [ [ [ 1, 1 ], [ 2, 2 ], [ 3, 2 ] ], [ [ 1, 1 ], [ 2, 2 ], [ 3, 2 ] ], [ [ 1, 1 ], [ 2, 2 ], [ 3, 2 ] ] ], r = this.props.segmentCountWeightArr;
this.props.firstPeriodCountWeightArr && 1 == hs.chapterGameInfo.stage && (r = this.props.firstPeriodCountWeightArr);
if (r) {
var o = hs.chapterDifficultyInfo.getChapterDifficultyByChapterNum(hs.chapterGameInfo.chapterNum);
hs.chapterDifficultyInfo.isChapterSimple(o) && (o = 1);
var n = r[o - 1];
if (n) for (var i = 0; i < n.length; i++) {
var a = n[i];
if ("number" == typeof a[0] && .1 <= a[0]) {
e = a[1];
break;
}
}
}
var l = this.getCollectElementsInfo(), c = e[l.length - 1] || e[e.length - 1], f = l.length > 0 ? this.getElementByWeight(c)[0] : 0, u = this.getElementArrayByWeight(l, f), h = this.getElementMapOnBlock(u), s = this.props.fillPathFirst && 3 == hs.algorithmName.algoActualChangeName.filter(function(t) {
return "填空消除" == t;
}).length ? 2 : 1;
return this.generateElementPosOnBlock(t, h, s);
};
e.prototype.getCollectElementsInfo = function() {
for (var t, e = null === (t = hs.chapterConfigInfo.getChapterCurData()) || void 0 === t ? void 0 : t.Condition.RequiredCollections, r = hs.chapterCollectInfo.collectRemainCollectItems, o = e.length, n = [], i = hs.boardInfo.faceBlocks, a = function(t) {
var o = e[t], a = r[o.Key];
if (0 == a) return "continue";
var l = i.reduce(function(t, e) {
return t + e.reduce(function(t, e) {
return t + (e == o.Key ? 1 : 0);
}, 0);
}, 0), c = o.Value, f = l + (c - a), u = Math.ceil(1.25 * c), h = u - f;
h && f < u && n.push([ o.Key, h ]);
}, l = 0; l < o; l++) a(l);
return n;
};
e.prototype.getElementByWeight = function(t) {
var e, r, o = t.reduce(function(t, e) {
var r = a(e, 2);
r[0];
return t + r[1];
}, 0), n = Math.random() * o;
try {
for (var i = l(t), c = i.next(); !c.done; c = i.next()) {
var f = c.value;
if (n < f[1]) return f;
n -= f[1];
}
} catch (t) {
e = {
error: t
};
} finally {
try {
c && !c.done && (r = i.return) && r.call(i);
} finally {
if (e) throw e.error;
}
}
return t[t.length - 1];
};
e.prototype.getElementArrayByWeight = function(t, e, r) {
void 0 === r && (r = {});
if (0 == e) return [];
for (var o = Array.from(Array(t.length), function(e, o) {
var n = t[o];
return [ n[0], r[n[0]] || 1, n[1] ];
}), n = [], i = 0; i < e && o.length > 0; i++) {
var a = this.getElementByWeight(o), l = a[0];
n.push(l);
0 == --a[2] && o.splice(o.indexOf(a), 1);
}
return n;
};
e.prototype.getElementMapOnBlock = function(t) {
var e, r;
if (0 == t.length) return [ [], [], [] ];
for (var o = [], n = [], i = t.length, a = Math.floor(i / 3), c = i % 3, f = 0; f < 3; f++) n.push(a + (f < c ? 1 : 0));
hs.shuffleArray(n);
var u = 0;
try {
for (var h = l(n), s = h.next(); !s.done; s = h.next()) {
var p = s.value;
o.push(t.slice(u, u + p));
u += p;
}
} catch (t) {
e = {
error: t
};
} finally {
try {
s && !s.done && (r = h.return) && r.call(h);
} finally {
if (e) throw e.error;
}
}
return o;
};
e.prototype.getCanClearPosOnBlock = function(t) {
var e = new hs.BinaryBoard();
e.convertToBinaryBoard(hs.boardInfo.faceBlocks);
e.record();
for (var r = e.getEdgeGameNum(), o = [ [], [], [] ], n = 0; n < t.length; n++) {
var i = t[n];
e.revert();
var a = null, l = null, c = void 0, f = void 0, u = r, h = r, s = void 0, p = void 0, g = null;
if (!hs.BlockShapeMap[i]) return o;
for (var y = e.getCanPutPoss(i), v = 0, d = y.length; v < d; v++) {
e.revert();
e.putBlock(i, y[v]);
var m = e.getEdgeGameNum(), C = e.canClearBlockArr();
if (m < u && C) {
c = i;
a = e.rowBinary.concat();
u = m;
s = y[v];
} else if (m < h) {
f = i;
l = e.rowBinary.concat();
h = m;
p = y[v];
}
}
if (c) {
e.setBoard(a);
r = u;
e.record();
g = s;
} else if (f) {
e.setBoard(l);
r = h;
e.record();
g = p;
}
var _ = e.canClearBlockArr(!0);
if (g && _) {
var B = hs.BlockShapeMap[i];
if (!B) return o;
for (var T = 0, b = 0; b < B.height; b++) for (var E = B.shape[b].toString(2).padStart(B.width, "0").split("").map(Number), I = 0; I < B.width; I++) if (E[I]) {
var A = cc.v2(g.x + I, g.y + b);
e.emptyAt(A.x, A.y) && o[n].push(T);
T++;
}
}
}
return o;
};
e.prototype.generateElementPosOnBlock = function(t, e, r) {
void 0 === r && (r = 1);
for (var o = [ [], [], [] ], n = e.reduce(function(t, e) {
return t + e.length;
}, 0), i = 2 == r && n > 0 ? this.getCanClearPosOnBlock(t) : null, a = 0; a < 3; a++) for (var l = hs.AlgorithmPosType[hs.chapterAlgorithmInfo.blockIdList[a]].length, c = e[a], f = Math.min(l, c.length), u = Math.floor(Math.random() * l), h = 0; h < f; h++) {
var s = c[h], p = 0;
i && i[a].length > 0 ? u = p = i[a].shift() : p = (u + h) % l;
o[a].push({
Key: s,
pos: p
});
}
for (var g = [], y = function(t) {
if (o[t].length > 0) {
var e = {};
o[t].forEach(function(t) {
e[t.pos] = t;
});
g.push(e);
} else g.push({});
}, v = 0; v < o.length; v++) y(v);
var d = [].concat(g);
storage.setItem("chapterCollectionLists", d);
return d;
};
return i([ classId("CTRefactorMultiElementCollectTrait"), classMethodWatch() ], e);
}(Trait);
r.CTRefactorMultiElementCollectTrait = c;
cc._RF.pop();
}, {} ]
}, {}, [ "CTRefactorMultiElementCollectTrait" ]);
//# sourceMappingURL=index.js.map
