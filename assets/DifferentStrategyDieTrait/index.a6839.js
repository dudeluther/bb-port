window.__require = function t(e, r, o) {
function n(a, c) {
if (!r[a]) {
if (!e[a]) {
var f = a.split("/");
f = f[f.length - 1];
if (!e[f]) {
var l = "function" == typeof __require && __require;
if (!c && l) return l(f, !0);
if (i) return i(f, !0);
throw new Error("Cannot find module '" + a + "'");
}
a = f;
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
DifferentStrategyDieTrait: [ function(t, e, r) {
"use strict";
cc._RF.push(e, "74d63s7keVNcbvwj4z+tQof", "DifferentStrategyDieTrait");
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
if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) a = Reflect.decorate(t, e, r, o); else for (var c = t.length - 1; c >= 0; c--) (n = t[c]) && (a = (i < 3 ? n(a) : i > 3 ? n(e, r, a) : n(e, r)) || a);
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
}, c = this && this.__spread || function() {
for (var t = [], e = 0; e < arguments.length; e++) t = t.concat(a(arguments[e]));
return t;
};
Object.defineProperty(r, "__esModule", {
value: !0
});
r.DifferentStrategyDieTrait = void 0;
var f = function(t) {
n(e, t);
function e() {
var e = null !== t && t.apply(this, arguments) || this;
e.SMALL_BLOCK_IDS = [ 1 ];
return e;
}
e.prototype.onActive = function(t) {
(hs.tp.isClassBlockOutStrategy_ProxyModifyBlockOutResult(t) || hs.tp.isChapterBlockOutStrategy_ProxyModifyBlockOutResult(t)) && this.checkDifferentStrategyDie();
};
e.prototype.checkDifferentStrategyDie = function() {
if (this.isCanTrigger()) {
var t = hs.algorithmInfo.blockIdList, e = hs.algorithmName.algoActualName;
if (t && 3 === t.length && e && 3 === e.length) {
var r = a(e, 3), o = r[0], n = r[1], i = r[2];
if (o !== n || n !== i || o !== i) {
var f = hs.boardInfo.faceBlocks;
if (hs.binarySupport.hasLiveWay(f, t)) ; else {
var l = c(t), u = this.replaceUnputtableBlocks(t, f, e);
if (u) {
hs.algorithmInfo.setBlockIdList(u);
for (var s = c(e), h = 0; h < l.length; h++) u[h] !== l[h] && (s[h] = "小块替换");
hs.algorithmName.setAlgoActualName(s);
}
}
}
}
}
};
e.prototype.replaceUnputtableBlocks = function(t, e) {
for (var r = c(t), o = !1, n = 0; n < t.length; n++) {
var i = t[n];
if (!this.canPutBlock(i, e)) {
var a = this.getRandomSmallBlock();
r[n] = a;
o = !0;
}
}
if (o) return r;
var f = this.getRandomSmallBlock();
r[2] = f;
return r;
};
e.prototype.canPutBlock = function(t, e) {
return hs.algorithmStrategyLogic.canPutBlock(t, e);
};
e.prototype.getRandomSmallBlock = function() {
var t = Math.floor(Math.random() * this.SMALL_BLOCK_IDS.length);
return this.SMALL_BLOCK_IDS[t];
};
e.prototype.isCanTrigger = function() {
return !0;
};
return i([ classId("DifferentStrategyDieTrait"), classMethodWatch() ], e);
}(Trait);
r.DifferentStrategyDieTrait = f;
cc._RF.pop();
}, {} ]
}, {}, [ "DifferentStrategyDieTrait" ]);
//# sourceMappingURL=index.js.map
