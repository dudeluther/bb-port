window.__require = function e(t, o, r) {
function n(i, l) {
if (!o[i]) {
if (!t[i]) {
var c = i.split("/");
c = c[c.length - 1];
if (!t[c]) {
var s = "function" == typeof __require && __require;
if (!l && s) return s(c, !0);
if (a) return a(c, !0);
throw new Error("Cannot find module '" + i + "'");
}
i = c;
}
var h = o[i] = {
exports: {}
};
t[i][0].call(h.exports, function(e) {
return n(t[i][1][e] || e);
}, h, h.exports, e, t, o, r);
}
return o[i].exports;
}
for (var a = "function" == typeof __require && __require, i = 0; i < r.length; i++) n(r[i]);
return n;
}({
CTRefactorIsOpenCollectLevelOfferNormalAndGemTrait: [ function(e, t, o) {
"use strict";
cc._RF.push(t, "c1b8bW0setOm7a3CWxSsPjj", "CTRefactorIsOpenCollectLevelOfferNormalAndGemTrait");
var r, n = this && this.__extends || (r = function(e, t) {
return (r = Object.setPrototypeOf || {
__proto__: []
} instanceof Array && function(e, t) {
e.__proto__ = t;
} || function(e, t) {
for (var o in t) Object.prototype.hasOwnProperty.call(t, o) && (e[o] = t[o]);
})(e, t);
}, function(e, t) {
r(e, t);
function o() {
this.constructor = e;
}
e.prototype = null === t ? Object.create(t) : (o.prototype = t.prototype, new o());
}), a = this && this.__decorate || function(e, t, o, r) {
var n, a = arguments.length, i = a < 3 ? t : null === r ? r = Object.getOwnPropertyDescriptor(t, o) : r;
if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) i = Reflect.decorate(e, t, o, r); else for (var l = e.length - 1; l >= 0; l--) (n = e[l]) && (i = (a < 3 ? n(i) : a > 3 ? n(t, o, i) : n(t, o)) || i);
return a > 3 && i && Object.defineProperty(t, o, i), i;
}, i = this && this.__read || function(e, t) {
var o = "function" == typeof Symbol && e[Symbol.iterator];
if (!o) return e;
var r, n, a = o.call(e), i = [];
try {
for (;(void 0 === t || t-- > 0) && !(r = a.next()).done; ) i.push(r.value);
} catch (e) {
n = {
error: e
};
} finally {
try {
r && !r.done && (o = a.return) && o.call(a);
} finally {
if (n) throw n.error;
}
}
return i;
};
Object.defineProperty(o, "__esModule", {
value: !0
});
o.CTRefactorIsOpenCollectLevelOfferNormalAndGemTrait = void 0;
var l = function(e) {
n(t, e);
function t() {
return null !== e && e.apply(this, arguments) || this;
}
Object.defineProperty(t.prototype, "pure_collection_block_probability", {
get: function() {
return hs.traitConfigSafePropsInfo.getSafePropValueByKey("IsOpenCollectLevelOfferNormalAndGemTrait", "pure_collection_block_probability", this.props, .6);
},
enumerable: !1,
configurable: !0
});
Object.defineProperty(t.prototype, "areaType", {
get: function() {
return hs.traitConfigSafePropsInfo.getSafePropValueByKey("IsOpenCollectLevelOfferNormalAndGemTrait", "areaType", this.props, 0);
},
enumerable: !1,
configurable: !0
});
t.prototype.data = function() {
return {
pure_collection_block_probability: this.pure_collection_block_probability,
isCanChange: !1,
needChangeIndex: -1,
has_increase_enjoy_collection: !1,
has_travel_happy_over: !1
};
};
t.prototype.onAlgorithmStrategyCollectionAdjust = function() {
this.isCanChangeColor();
if (this.state.isCanChange && -1 !== this.state.needChangeIndex) {
var e = hs.chapterAlgorithmInfo.blockIdList, t = hs.chapterCollectInfo.collectRemainCollectItems, o = this.getValidCollectionItems(t);
if (0 !== o.length) {
var r = o[Math.floor(Math.random() * o.length)].Key, n = this.updateBlockToCollection(e[this.state.needChangeIndex], r);
this.changeCollectionITMDAFix();
return {
data: n
};
}
this.resetState();
}
};
t.prototype.isCanChangeColor = function() {
var e = hs.chapterConfigInfo.chapterDatasCfg[hs.chapterGameInfo.chapterNum].Condition;
if (e && 1 === e.Way && e.RequiredCollections) if (this.state.has_increase_enjoy_collection) this.resetState(); else if (this.state.has_travel_happy_over) this.resetState(); else if (Math.random() >= this.state.pure_collection_block_probability) this.resetState(); else {
var t = hs.chapterAlgorithmInfo.blockIdList;
if (t && 0 !== t.length) {
var o = this.getChangeIndex(t);
this.state.needChangeIndex = o;
this.state.isCanChange = !0;
} else this.resetState();
} else this.resetState();
};
t.prototype.resetState = function() {
this.state.isCanChange = !1;
this.state.needChangeIndex = -1;
this.state.has_increase_enjoy_collection = !1;
this.state.has_travel_happy_over = !1;
};
t.prototype.tryChangeLevelOnlyNormalAndGem = function() {};
t.prototype.updateBlockToCollection = function(e, t) {
for (var o = hs.AlgorithmPosType[e], r = {}, n = storage.getItem("chapterCollectionLists", []), a = 0; a < o.length; a++) r["" + a] = {
Key: t,
pos: a
};
for (var i = 0; i < n.length; i++) n[i] = {};
n[this.state.needChangeIndex] = r;
return n;
};
t.prototype.getValidCollectionItems = function(e) {
var t = [];
Object.entries(e).forEach(function(e) {
var o = i(e, 2), r = o[0], n = o[1], a = Number(r);
n > 0 && t.push({
Key: a,
Value: n
});
});
return t;
};
t.prototype.changeCollectionITMDAFix = function() {};
t.prototype.recordIncreaseEnjoyCollection = function() {
this.state.has_increase_enjoy_collection = !0;
};
t.prototype.recordTravelHappyOver = function() {
this.state.has_travel_happy_over = !0;
};
t.prototype.getChangeIndex = function(e) {
if (!this.areaType) return Math.floor(Math.random() * e.length);
for (var t, o = [], r = 0; r < e.length; r++) {
for (var n = hs.blockPosInfo[e[r] - 1], a = 0, i = 0; i < n.length; i++) for (var l = 0; l < n[i].length; l++) 1 === n[i][l] && a++;
o.push({
index: r,
count: a
});
}
o.sort(function(e, t) {
return e.count - t.count;
});
if (1 === this.areaType) t = o[0].count; else if (2 === this.areaType) {
var c = Math.floor(o.length / 2);
t = o[c].count;
} else {
if (3 !== this.areaType) return Math.floor(Math.random() * e.length);
t = o[o.length - 1].count;
}
var s = o.filter(function(e) {
return e.count === t;
});
return s[Math.floor(Math.random() * s.length)].index;
};
return a([ classId("CTRefactorIsOpenCollectLevelOfferNormalAndGemTrait") ], t);
}(Trait);
o.CTRefactorIsOpenCollectLevelOfferNormalAndGemTrait = l;
cc._RF.pop();
}, {} ]
}, {}, [ "CTRefactorIsOpenCollectLevelOfferNormalAndGemTrait" ]);
//# sourceMappingURL=index.js.map
