window.__require = function r(t, e, o) {
function n(l, a) {
if (!e[l]) {
if (!t[l]) {
var s = l.split("/");
s = s[s.length - 1];
if (!t[s]) {
var u = "function" == typeof __require && __require;
if (!a && u) return u(s, !0);
if (i) return i(s, !0);
throw new Error("Cannot find module '" + l + "'");
}
l = s;
}
var c = e[l] = {
exports: {}
};
t[l][0].call(c.exports, function(r) {
return n(t[l][1][r] || r);
}, c, c.exports, r, t, e, o);
}
return e[l].exports;
}
for (var i = "function" == typeof __require && __require, l = 0; l < o.length; l++) n(o[l]);
return n;
}({
ClearBoardPlusBlockPosTrait_ios_Trait: [ function(r, t, e) {
"use strict";
cc._RF.push(t, "c3de7UfZhhBQoWxFOfm9oyw", "ClearBoardPlusBlockPosTrait_ios_Trait");
var o, n = this && this.__extends || (o = function(r, t) {
return (o = Object.setPrototypeOf || {
__proto__: []
} instanceof Array && function(r, t) {
r.__proto__ = t;
} || function(r, t) {
for (var e in t) Object.prototype.hasOwnProperty.call(t, e) && (r[e] = t[e]);
})(r, t);
}, function(r, t) {
o(r, t);
function e() {
this.constructor = r;
}
r.prototype = null === t ? Object.create(t) : (e.prototype = t.prototype, new e());
}), i = this && this.__decorate || function(r, t, e, o) {
var n, i = arguments.length, l = i < 3 ? t : null === o ? o = Object.getOwnPropertyDescriptor(t, e) : o;
if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) l = Reflect.decorate(r, t, e, o); else for (var a = r.length - 1; a >= 0; a--) (n = r[a]) && (l = (i < 3 ? n(l) : i > 3 ? n(t, e, l) : n(t, e)) || l);
return i > 3 && l && Object.defineProperty(t, e, l), l;
};
Object.defineProperty(e, "__esModule", {
value: !0
});
e.ClearBoardPlusBlockPosTrait_ios_Trait = void 0;
var l = function(r) {
n(t, r);
function t() {
return null !== r && r.apply(this, arguments) || this;
}
t.prototype.isClassAlgorithmStrategyIOS_BlocksPos_ProxyTriggerBlocksPosTrait = function(r) {
if (hs.storage.getItem("classGuideStep", 0) < 3) ; else if (this.tryReorderClearBoardPlusBlocks()) {
r.replace = !0;
r.returnState = !0;
}
};
t.prototype.tryReorderClearBoardPlusBlocks = function() {
var r = hs.algorithmInfo.blockIdList, t = hs.algorithmName.algoActualChangeName;
if (!Array.isArray(t) || 3 !== r.length || 3 !== t.length) return !1;
var e = t.map(function(r) {
return r === hs.ALGO_NAME_TYPE.NAME_CLEARPLUS || "清盘算法-星云" === r;
}), o = e.filter(Boolean).length;
if (0 === o) return !1;
var n, i = [ 0, 1, 2 ];
if (!(n = 1 === o ? this.resolveOneClearTwoRandom(e, i) : 2 === o ? this.resolveTwoClearOneRandom(r, e, i) : this.resolveThreeClear(r, i)) || this.samePermutation(i, n)) return !1;
hs.algorithmStrategyBlocksPosInfo.adjustBlocksPosList(n);
return !0;
};
return i([ classId("ClearBoardPlusBlockPosTrait", "ios") ], t);
}(r("./ClearBoardPlusBlockPosTrait").ClearBoardPlusBlockPosTrait);
e.ClearBoardPlusBlockPosTrait_ios_Trait = l;
cc._RF.pop();
}, {
"./ClearBoardPlusBlockPosTrait": "ClearBoardPlusBlockPosTrait"
} ],
ClearBoardPlusBlockPosTrait: [ function(r, t, e) {
"use strict";
cc._RF.push(t, "f5f50HfSd1EQpUAp5LtCQeH", "ClearBoardPlusBlockPosTrait");
var o, n = this && this.__extends || (o = function(r, t) {
return (o = Object.setPrototypeOf || {
__proto__: []
} instanceof Array && function(r, t) {
r.__proto__ = t;
} || function(r, t) {
for (var e in t) Object.prototype.hasOwnProperty.call(t, e) && (r[e] = t[e]);
})(r, t);
}, function(r, t) {
o(r, t);
function e() {
this.constructor = r;
}
r.prototype = null === t ? Object.create(t) : (e.prototype = t.prototype, new e());
}), i = this && this.__decorate || function(r, t, e, o) {
var n, i = arguments.length, l = i < 3 ? t : null === o ? o = Object.getOwnPropertyDescriptor(t, e) : o;
if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) l = Reflect.decorate(r, t, e, o); else for (var a = r.length - 1; a >= 0; a--) (n = r[a]) && (l = (i < 3 ? n(l) : i > 3 ? n(t, e, l) : n(t, e)) || l);
return i > 3 && l && Object.defineProperty(t, e, l), l;
};
Object.defineProperty(e, "__esModule", {
value: !0
});
e.ClearBoardPlusBlockPosTrait = void 0;
var l = function(r) {
n(t, r);
function t() {
return null !== r && r.apply(this, arguments) || this;
}
t.prototype.onCreate = function() {};
Object.defineProperty(t.prototype, "onActiveCondition", {
get: function() {
return hs.gameInfo.gameMode === hs.GameMode.Class;
},
enumerable: !1,
configurable: !0
});
t.prototype.onActive = function(r) {
if (hs.tp.isClassAlgorithmStrategy_BlocksPos_ProxyTriggerBlocksPosTrait(r)) {
if (hs.storage.getItem("classGuideStep", 0) < 3) return;
if (this.tryReorderClearBoardPlusBlocks()) {
r.replace = !0;
r.returnState = !0;
}
}
};
t.prototype.tryReorderClearBoardPlusBlocks = function() {
var r = hs.algorithmInfo.blockIdList, t = hs.algorithmName.algoActualChangeName;
if (3 !== r.length || 3 !== t.length) return !1;
var e = t.map(function(r) {
return r === hs.ALGO_NAME_TYPE.NAME_CLEARPLUS;
}), o = e.filter(Boolean).length;
if (0 === o) return !1;
var n, i = [ 0, 1, 2 ];
if (null === (n = 1 === o ? this.resolveOneClearTwoRandom(e, i) : 2 === o ? this.resolveTwoClearOneRandom(r, e, i) : this.resolveThreeClear(r, i))) return !1;
if (this.samePermutation(i, n)) return !1;
hs.algorithmStrategyBlocksPosInfo.adjustBlocksPosList(n);
return !0;
};
t.prototype.resolveOneClearTwoRandom = function(r, t) {
var e = r.indexOf(!0), o = t.filter(function(t) {
return !r[t];
});
return 2 !== o.length ? null : [ Math.min(o[0], o[1]), e, Math.max(o[0], o[1]) ];
};
t.prototype.resolveTwoClearOneRandom = function(r, t, e) {
var o = e.filter(function(r) {
return t[r];
}), n = e.find(function(r) {
return !t[r];
});
if (2 !== o.length || void 0 === n) return null;
var i = Math.min(o[0], o[1]), l = Math.max(o[0], o[1]), a = this.getMinContinuousEdgeForBlock(r[i]), s = this.getMinContinuousEdgeForBlock(r[l]);
return null === a || null === s ? null : a === s ? [ i, l, n ] : a < s ? [ l, i, n ] : [ i, l, n ];
};
t.prototype.resolveThreeClear = function(r, t) {
var e = this.getMinContinuousEdgeForBlock(r[0]), o = this.getMinContinuousEdgeForBlock(r[1]), n = this.getMinContinuousEdgeForBlock(r[2]);
if (null === e || null === o || null === n) return null;
var i = [ e, o, n ];
if (i[0] === i[1] && i[1] === i[2]) return null;
for (var l = Math.min(e, o, n), a = [], s = 0; s < 3; s++) i[s] === l && a.push(s);
var u = 1 === a.length ? a[0] : Math.min(a[0], a[1]), c = t.filter(function(r) {
return r !== u;
});
if (2 !== c.length) return null;
var f, h, p = c[0], d = c[1], g = i[p], P = i[d];
if (g < P) {
f = p;
h = d;
} else if (P < g) {
f = d;
h = p;
} else if (p < d) {
f = p;
h = d;
} else {
f = d;
h = p;
}
return [ f, u, h ];
};
t.prototype.getMinContinuousEdgeForBlock = function(r) {
var t = hs.storage.getItem("classFaceBlocks", hs.boardInfo.NULL);
if (!t || t === hs.boardInfo.NULL || !this.isFaceBlocksGrid(t)) return null;
var e = new hs.BinaryBoard();
e.convertToBinaryBoard(t);
var o = e.record(), n = e.getCanPutPoss(r);
if (0 === n.length) return null;
for (var i = Number.POSITIVE_INFINITY, l = 0; l < n.length; l++) {
e.reset(o);
e.putBlock(r, n[l]);
var a = e.getEdgeNumBinary();
a < i && (i = a);
}
return i;
};
t.prototype.samePermutation = function(r, t) {
if (r.length !== t.length) return !1;
for (var e = 0; e < r.length; e++) if (r[e] !== t[e]) return !1;
return !0;
};
t.prototype.isFaceBlocksGrid = function(r) {
if (!Array.isArray(r)) return !1;
for (var t = 0; t < r.length; t++) {
var e = r[t];
if (!Array.isArray(e)) return !1;
for (var o = 0; o < e.length; o++) if ("number" != typeof e[o]) return !1;
}
return !0;
};
return i([ classId("ClearBoardPlusBlockPosTrait") ], t);
}(Trait);
e.ClearBoardPlusBlockPosTrait = l;
cc._RF.pop();
}, {} ]
}, {}, [ "ClearBoardPlusBlockPosTrait", "ClearBoardPlusBlockPosTrait_ios_Trait" ]);
//# sourceMappingURL=index.js.map
