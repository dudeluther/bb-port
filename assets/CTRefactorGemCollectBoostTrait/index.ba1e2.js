window.__require = function t(e, r, o) {
function i(a, s) {
if (!r[a]) {
if (!e[a]) {
var l = a.split("/");
l = l[l.length - 1];
if (!e[l]) {
var h = "function" == typeof __require && __require;
if (!s && h) return h(l, !0);
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
CTRefactorGemCollectBoostTrait: [ function(t, e, r) {
"use strict";
cc._RF.push(e, "140dbLXS5hJsqhPhu7e9pKt", "CTRefactorGemCollectBoostTrait");
var o, i = this && this.__extends || (o = function(t, e) {
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
}), n = this && this.__decorate || function(t, e, r, o) {
var i, n = arguments.length, a = n < 3 ? e : null === o ? o = Object.getOwnPropertyDescriptor(e, r) : o;
if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) a = Reflect.decorate(t, e, r, o); else for (var s = t.length - 1; s >= 0; s--) (i = t[s]) && (a = (n < 3 ? i(a) : n > 3 ? i(e, r, a) : i(e, r)) || a);
return n > 3 && a && Object.defineProperty(e, r, a), a;
}, a = this && this.__read || function(t, e) {
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
};
Object.defineProperty(r, "__esModule", {
value: !0
});
r.CTRefactorGemCollectBoostTrait = void 0;
var s = function(t) {
i(e, t);
function e() {
var e = null !== t && t.apply(this, arguments) || this;
e._isTriggered = !1;
e._targetGemTypes = [];
e._isNewGame = !1;
e.persistentData = {
cachedOriginalCondition: null
};
return e;
}
Object.defineProperty(e.prototype, "onActiveCondition", {
get: function() {
return hs.gameInfo.gameMode === hs.GameMode.Chapter;
},
enumerable: !1,
configurable: !0
});
e.prototype.isChapterDefaultBoard_ProxyOnProduceChapterDefaultBoard = function(t) {
this._isNewGame = t.args[0].data.newGame;
};
e.prototype.isChapterDefaultBoard_ProxyCreateChapterCondition = function(t) {
this._isNewGame && this.onCreateChapterCondition(t);
};
e.prototype.isChapterDefaultBoard_ProxyTraitSetChapterBoard = function() {
this._isTriggered && this.modifyBoardGems();
};
e.prototype.isChapterGameOver_GameEnd_ProxyOnGameOver = function() {
this.resetState();
};
e.prototype.onAlgorithmStrategyCollectionAdjust = function() {
if (this._isTriggered) {
var t = this.buildFullGemCollectionList();
if (t) return {
data: t,
returnState: !0
};
}
};
e.prototype.onCreateChapterCondition = function(t) {
var e;
this.restoreOriginalCondition();
this._isTriggered = !1;
this._targetGemTypes = [];
var r = hs.chapterConfigInfo.chapterNum, o = null === (e = hs.chapterConfigInfo.getChapterCurData()) || void 0 === e ? void 0 : e.Condition;
if (hs.chapterDifficultyInfo.getChapterDifficultyByChapterNum(r) === hs.CHAPTER_DIFF_TYPE.MEDIUM && o && o.Way === hs.ChapterType.collect) {
var i = o.RequiredCollections;
if (i && Array.isArray(i) && 0 !== i.length) {
var n = i.filter(function(t) {
return t.Key >= 100;
}).map(function(t) {
return t.Key;
});
if (0 !== n.length && n.length === i.length) {
this._isTriggered = !0;
this._targetGemTypes = n;
var a = this.adjustChapterCondition(o);
if (a) {
t.returnValue = a;
t.returnState = !0;
t.replace = !0;
}
}
}
}
};
e.prototype.restoreOriginalCondition = function() {
var t, e = this.persistentData.cachedOriginalCondition;
if (e) {
var r = hs.chapterGameInfo.stage;
if (e.stage === r) {
var o = null === (t = hs.chapterConfigInfo.chapterDatasCfg[e.chapterNum]) || void 0 === t ? void 0 : t.Condition;
if (o) {
o.RequiredCollections = e.requiredCollections;
this.persistentData.cachedOriginalCondition = null;
} else this.persistentData.cachedOriginalCondition = null;
} else this.persistentData.cachedOriginalCondition = null;
}
};
e.prototype.adjustChapterCondition = function(t) {
var e = hs.chapterConfigInfo.chapterNum, r = hs.chapterGameInfo.stage, o = this.props.targetMultiplier || 3, i = t.RequiredCollections;
if (!i || !Array.isArray(i)) return null;
this.persistentData.cachedOriginalCondition = {
stage: r,
chapterNum: e,
requiredCollections: hs.deepClone(i)
};
t.RequiredCollections = i.map(function(t) {
return {
Key: t.Key,
Value: t.Value * o
};
});
return t;
};
e.prototype.modifyBoardGems = function() {
var t, e = hs.chapterBoardInfo.faceBlocks;
if (e) {
for (var r = [], o = 0; o < 8; o++) for (var i = 0; i < 8; i++) {
var n = e[o][i];
n > 0 && n < 100 && 10 !== n && r.push({
row: o,
col: i
});
}
if (0 !== r.length) {
var s = this._targetGemTypes;
if (0 !== s.length) {
for (var l = r.length, h = Math.floor(l / s.length), c = l % s.length, p = [], f = 0; f < s.length; f++) p.push(f);
for (f = p.length - 1; f > 0; f--) {
var u = Math.floor(Math.random() * (f + 1));
t = a([ p[u], p[f] ], 2), p[f] = t[0], p[u] = t[1];
}
var d = new Set(p.slice(0, c)), g = [];
for (f = 0; f < s.length; f++) {
var y = s[f], C = h + (d.has(f) ? 1 : 0);
for (u = 0; u < C; u++) g.push(y);
}
for (f = 0; f < r.length; f++) {
var v = r[f];
e[v.row][v.col] = g[f];
}
hs.storage.setItem("chapterFaceBlocks", e);
var m = Cinst(hs.Board);
m && m.setState({
boards: e
});
}
}
}
};
e.prototype.buildFullGemCollectionList = function() {
var t, e = null === (t = hs.chapterAlgorithmInfo) || void 0 === t ? void 0 : t.blockIdList;
if (e && 0 !== e.length) {
var r = this._targetGemTypes;
if (0 !== r.length) {
for (var o = this.getRemainGemTypes(), i = o.length > 0 ? o : r, n = [], a = 0; a < e.length; a++) {
var s = e[a], l = hs.AlgorithmPosType[s];
if (l && 0 !== l.length) {
for (var h = {}, c = 0; c < l.length; c++) {
var p = i[c % i.length];
h[c] = {
Key: p,
pos: c
};
}
n.push(h);
} else n.push({});
}
return n;
}
}
};
e.prototype.getRemainGemTypes = function() {
var t, e = (null === (t = hs.chapterCollectInfo) || void 0 === t ? void 0 : t.collectRemainCollectItems) || {}, r = [];
for (var o in e) {
var i = Number(o);
e[i] > 0 && i >= 100 && r.push(i);
}
return r;
};
e.prototype.resetState = function() {
this._isTriggered = !1;
this._targetGemTypes = [];
};
n([ hs.storageProperty({
key: "GemCollectBoostTrait"
}) ], e.prototype, "persistentData", void 0);
return n([ classId("CTRefactorGemCollectBoostTrait") ], e);
}(Trait);
r.CTRefactorGemCollectBoostTrait = s;
cc._RF.pop();
}, {} ]
}, {}, [ "CTRefactorGemCollectBoostTrait" ]);
//# sourceMappingURL=index.js.map
