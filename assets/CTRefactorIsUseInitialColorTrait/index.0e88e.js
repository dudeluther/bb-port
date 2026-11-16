window.__require = function r(t, o, e) {
function a(n, l) {
if (!o[n]) {
if (!t[n]) {
var s = n.split("/");
s = s[s.length - 1];
if (!t[s]) {
var c = "function" == typeof __require && __require;
if (!l && c) return c(s, !0);
if (i) return i(s, !0);
throw new Error("Cannot find module '" + n + "'");
}
n = s;
}
var h = o[n] = {
exports: {}
};
t[n][0].call(h.exports, function(r) {
return a(t[n][1][r] || r);
}, h, h.exports, r, t, o, e);
}
return o[n].exports;
}
for (var i = "function" == typeof __require && __require, n = 0; n < e.length; n++) a(e[n]);
return a;
}({
CTRefactorIsUseInitialColorTrait: [ function(r, t, o) {
"use strict";
cc._RF.push(t, "cbacaLO5fVDDIrcjWBsJ1RU", "CTRefactorIsUseInitialColorTrait");
var e, a = this && this.__extends || (e = function(r, t) {
return (e = Object.setPrototypeOf || {
__proto__: []
} instanceof Array && function(r, t) {
r.__proto__ = t;
} || function(r, t) {
for (var o in t) Object.prototype.hasOwnProperty.call(t, o) && (r[o] = t[o]);
})(r, t);
}, function(r, t) {
e(r, t);
function o() {
this.constructor = r;
}
r.prototype = null === t ? Object.create(t) : (o.prototype = t.prototype, new o());
}), i = this && this.__decorate || function(r, t, o, e) {
var a, i = arguments.length, n = i < 3 ? t : null === e ? e = Object.getOwnPropertyDescriptor(t, o) : e;
if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) n = Reflect.decorate(r, t, o, e); else for (var l = r.length - 1; l >= 0; l--) (a = r[l]) && (n = (i < 3 ? a(n) : i > 3 ? a(t, o, n) : a(t, o)) || n);
return i > 3 && n && Object.defineProperty(t, o, n), n;
}, n = this && this.__read || function(r, t) {
var o = "function" == typeof Symbol && r[Symbol.iterator];
if (!o) return r;
var e, a, i = o.call(r), n = [];
try {
for (;(void 0 === t || t-- > 0) && !(e = i.next()).done; ) n.push(e.value);
} catch (r) {
a = {
error: r
};
} finally {
try {
e && !e.done && (o = i.return) && o.call(i);
} finally {
if (a) throw a.error;
}
}
return n;
}, l = this && this.__spread || function() {
for (var r = [], t = 0; t < arguments.length; t++) r = r.concat(n(arguments[t]));
return r;
}, s = this && this.__values || function(r) {
var t = "function" == typeof Symbol && Symbol.iterator, o = t && r[t], e = 0;
if (o) return o.call(r);
if (r && "number" == typeof r.length) return {
next: function() {
r && e >= r.length && (r = void 0);
return {
value: r && r[e++],
done: !r
};
}
};
throw new TypeError(t ? "Object is not iterable." : "Symbol.iterator is not defined.");
};
Object.defineProperty(o, "__esModule", {
value: !0
});
o.CTRefactorIsUseInitialColorTrait = void 0;
var c = "classUseInitialColor", h = function(r) {
a(t, r);
function t() {
var t = null !== r && r.apply(this, arguments) || this;
t.colorArr = [];
t.colorDict = new Map();
return t;
}
t.prototype.data = function() {
return {
isChangeBlock: !1,
isUseMultiple: !1,
isUseProcessing: !1,
colorList: []
};
};
t.prototype.isClassDefaultBoard_ProxyProduceDefaultColor = function(r) {
this.initColorArr(r);
};
t.prototype.isClassBlocksProducer_BlocksProducerValidate_ProxySetRecordOperationColor = function(r) {
if (!(hs.storage.getItem("classGuideStep", 0) <= 2)) {
this.randomInitColor();
var t = hs.storage.getItem(c, []);
if (t && t.length > 0) {
for (var o = hs.storage.getItem("classColorLists", [ 1, 4, 2 ]), e = 0; e < o.length; e++) o[e] = t[Math.floor(Math.random() * t.length)];
hs.storage.setItem("classColorLists", o);
this.setState({
colorList: o
});
r.replace = !0;
}
}
};
t.prototype.getInitialColorArr = function() {
return hs.storage.getItem(c, []);
};
t.prototype.getColorList = function() {
var r;
return null !== (r = this.state.colorList) && void 0 !== r ? r : [];
};
t.prototype.onAlgorithmStrategyColorAdjust = function() {
this.ensureColorArrReady();
if (0 !== this.colorArr.length) {
var r, t = hs.storage.getItem(c, []), o = TRAIT("CTRefactorBaseColorAdjustTrait");
if (null == o ? void 0 : o.active) {
var e = o.onAlgorithmStrategyColorAdjust();
r = (null == e ? void 0 : e.data) ? l(e.data) : this.generateRandomColorList();
} else r = this.generateRandomColorList();
if (t && t.length > 0) for (var a = 0; a < r.length; a++) -1 === t.indexOf(r[a]) && (r[a] = t[Math.floor(Math.random() * t.length)]);
this.setState({
colorList: r
});
this.setState({
isChangeBlock: !0
});
return {
data: r,
disableTraits: [ "CTRefactorBaseColorAdjustTrait" ]
};
}
};
t.prototype.generateRandomColorList = function() {
var r = this.colorArr.length;
return [ this.colorArr[Math.floor(Math.random() * r)], this.colorArr[Math.floor(Math.random() * r)], this.colorArr[Math.floor(Math.random() * r)] ];
};
t.prototype.localDataColor = function() {
var r = hs.storage.getItem(c, []);
if (r) for (var t = 0; t < r.length; t++) this.addTraitArr(r[t]);
};
t.prototype.initFastData = function() {
for (var r = [], t = 1; t < 8; t++) r.push(t);
r.sort(function() {
return Math.random() - .5;
});
for (t = 0; t < 7; t++) {
this.colorArr.push(r[t]);
this.colorDict.set(r[t], !0);
}
hs.storage.setItem(c, this.colorArr);
};
t.prototype.ensureColorArrReady = function() {
if (!(this.colorArr.length > 0)) {
this.localDataColor();
this.colorArr.length > 0 || this.initFastData();
}
};
t.prototype.initColorArr = function(r) {
var t, o, e, a, i, n;
this.colorArr = hs.storage.getItem(c, []);
var l = r.args[0];
if (hs.boardInfo.isNullBoard(l)) ; else {
this.clearTraitArr();
this.colorArr = hs.storage.getItem(c, []);
try {
for (var h = s(l), f = h.next(); !f.done; f = h.next()) {
var u = f.value;
try {
for (var d = (e = void 0, s(u)), p = d.next(); !p.done; p = d.next()) {
var y = p.value;
-1 !== y && 10 !== y && this.addTraitArr(y);
}
} catch (r) {
e = {
error: r
};
} finally {
try {
p && !p.done && (a = d.return) && a.call(d);
} finally {
if (e) throw e.error;
}
}
}
} catch (r) {
t = {
error: r
};
} finally {
try {
f && !f.done && (o = h.return) && o.call(h);
} finally {
if (t) throw t.error;
}
}
if (1 == this.colorArr.length && (hs.classGameInfo.gameNum % 10 != 0 || this.state.isUseMultiple)) {
this.clearTraitArr();
for (var g = [ 1, 2, 3, 4, 5, 6, 7 ], v = 2 + Math.floor(3 * Math.random()); this.colorArr.length < v; ) {
var A = Math.floor(Math.random() * g.length), m = g[A];
if (!this.colorArr.includes(m)) {
g.splice(A, 1);
this.addTraitArr(m);
}
}
try {
for (var C = s(l), I = C.next(); !I.done; I = C.next()) {
u = I.value;
for (var _ = 0; _ < u.length; _++) -1 !== u[_] && 10 !== u[_] && (u[_] = this.colorArr[Math.floor(Math.random() * this.colorArr.length)]);
}
} catch (r) {
i = {
error: r
};
} finally {
try {
I && !I.done && (n = C.return) && n.call(C);
} finally {
if (i) throw i.error;
}
}
}
r.args[0] = l;
hs.storage.setItem(c, this.colorArr);
}
};
t.prototype.randomInitColor = function() {
var r, t, o, e, a, i;
this.colorArr = hs.storage.getItem(c, []);
var n = hs.classBoardInfo.faceBlocks;
if (hs.boardInfo.isNullBoard(n)) ; else {
this.clearTraitArr();
this.colorArr = hs.storage.getItem(c, []);
try {
for (var l = s(n), h = l.next(); !h.done; h = l.next()) {
var f = h.value;
try {
for (var u = (o = void 0, s(f)), d = u.next(); !d.done; d = u.next()) {
var p = d.value;
-1 !== p && 10 !== p && this.addTraitArr(p);
}
} catch (r) {
o = {
error: r
};
} finally {
try {
d && !d.done && (e = u.return) && e.call(u);
} finally {
if (o) throw o.error;
}
}
}
} catch (t) {
r = {
error: t
};
} finally {
try {
h && !h.done && (t = l.return) && t.call(l);
} finally {
if (r) throw r.error;
}
}
if (1 == this.colorArr.length && (hs.classGameInfo.gameNum % 10 != 0 || this.state.isUseMultiple)) {
this.clearTraitArr();
for (var y = [ 1, 2, 3, 4, 5, 6, 7 ], g = 2 + Math.floor(3 * Math.random()); this.colorArr.length < g; ) {
var v = Math.floor(Math.random() * y.length), A = y[v];
if (!this.colorArr.includes(A)) {
y.splice(v, 1);
this.addTraitArr(A);
}
}
try {
for (var m = s(n), C = m.next(); !C.done; C = m.next()) {
f = C.value;
for (var I = 0; I < f.length; I++) -1 !== f[I] && 10 !== f[I] && (f[I] = this.colorArr[Math.floor(Math.random() * this.colorArr.length)]);
}
} catch (r) {
a = {
error: r
};
} finally {
try {
C && !C.done && (i = m.return) && i.call(m);
} finally {
if (a) throw a.error;
}
}
}
hs.storage.setItem(c, this.colorArr);
}
};
t.prototype.clearTraitArr = function() {
this.colorDict.clear();
hs.storage.setItem(c, []);
};
t.prototype.addTraitArr = function(r) {
if (!this.colorDict.has(r)) {
this.colorArr.push(r);
this.colorDict.set(r, !0);
}
};
return i([ classId("CTRefactorIsUseInitialColorTrait"), classMethodWatch() ], t);
}(Trait);
o.CTRefactorIsUseInitialColorTrait = h;
cc._RF.pop();
}, {} ]
}, {}, [ "CTRefactorIsUseInitialColorTrait" ]);
//# sourceMappingURL=index.js.map
