window.__require = function t(e, r, o) {
function n(a, s) {
if (!r[a]) {
if (!e[a]) {
var h = a.split("/");
h = h[h.length - 1];
if (!e[h]) {
var c = "function" == typeof __require && __require;
if (!s && c) return c(h, !0);
if (i) return i(h, !0);
throw new Error("Cannot find module '" + a + "'");
}
a = h;
}
var g = r[a] = {
exports: {}
};
e[a][0].call(g.exports, function(t) {
return n(e[a][1][t] || t);
}, g, g.exports, t, e, r, o);
}
return r[a].exports;
}
for (var i = "function" == typeof __require && __require, a = 0; a < o.length; a++) n(o[a]);
return n;
}({
Shangzeng3ReplaceZimushangzengTrait: [ function(t, e, r) {
"use strict";
cc._RF.push(e, "a7817GUWOBPFr1q8L4z4QKF", "Shangzeng3ReplaceZimushangzengTrait");
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
if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) a = Reflect.decorate(t, e, r, o); else for (var s = t.length - 1; s >= 0; s--) (n = t[s]) && (a = (i < 3 ? n(a) : i > 3 ? n(e, r, a) : n(e, r)) || a);
return i > 3 && a && Object.defineProperty(e, r, a), a;
};
Object.defineProperty(r, "__esModule", {
value: !0
});
r.Shangzeng3ReplaceZimushangzengTrait = void 0;
var a = function(t) {
n(e, t);
function e() {
return null !== t && t.apply(this, arguments) || this;
}
e.prototype.onActive = function(t) {
(hs.tp.isClassAlgorithmStrategy_Replace_ProxyPreprocessingShangAlgorithm(t) || hs.tp.isClassAlgorithmStrategyIOS_Replace_ProxyPreprocessingShangAlgorithm(t)) && this.handleReplace(t);
if (hs.tp.isIsOpenZiMuShangZengTraitGetCount(t)) {
var e = this.getZiMuShangZengMaxCount();
-1 !== e && (t.returnValue = e);
}
};
e.prototype.handleReplace = function() {
var t = hs.algorithmStrategyInfo.algorithmList, e = hs.algorithmStrategyInfo.algorithmFailList || [], r = hs.algorithmStrategyInfo.algorithmSuccessList || [];
if (t.includes(hs.OFFER_TYPE.ZIMU_SHANGZENG) || e.includes(hs.OFFER_TYPE.ZIMU_SHANGZENG) || r.includes(hs.OFFER_TYPE.ZIMU_SHANGZENG)) {
var o = this.getReplaceAlgorithm();
if (-1 !== o) {
hs.algorithmStrategyInfo.setAlgorithmList(hs.algorithmStrategyLogic.replaceAlgorithmType(t, hs.OFFER_TYPE.ZIMU_SHANGZENG, o));
hs.algorithmStrategyInfo.setAlgorithmFailList(hs.algorithmStrategyLogic.replaceAlgorithmType(e, hs.OFFER_TYPE.ZIMU_SHANGZENG, o));
hs.algorithmStrategyInfo.setAlgorithmSuccessList(hs.algorithmStrategyLogic.replaceAlgorithmType(r, hs.OFFER_TYPE.ZIMU_SHANGZENG, o));
}
}
};
e.prototype.getReplaceAlgorithm = function() {
switch (this.props.type) {
case 1:
return this.getBoardBlockCount() > 20 ? hs.OFFER_TYPE.SHANG_ZENG_3 : -1;

case 2:
return this.getBoardBlockCount() > 30 ? hs.OFFER_TYPE.SHANG_ZENG_3 : -1;

case 3:
return this.getBoardBlockCount() > 40 ? hs.OFFER_TYPE.SHANG_ZENG_3 : -1;

case 4:
case 9:
return hs.OFFER_TYPE.ZIMU_SHANGZENG_REMOVE13;

case 5:
return hs.classScoreInfo.highScore <= 3e4 ? hs.OFFER_TYPE.ZIMU_SHANGZENG_REMOVE13 : -1;

case 6:
return hs.classScoreInfo.highScore <= 3e4 ? hs.OFFER_TYPE.SHANG_ZENG_3 : -1;

case 7:
return hs.OFFER_TYPE.ZIMU_SHANGZENG_REPLACE13;

default:
return -1;
}
};
e.prototype.getZiMuShangZengMaxCount = function() {
switch (this.props.type) {
case 8:
case 9:
return 5;

default:
return -1;
}
};
e.prototype.getBoardBlockCount = function() {
for (var t = 0, e = 0; e < hs.ROW; e++) for (var r = 0; r < hs.COL; r++) -1 != hs.boardInfo.faceBlocks[e][r] && t++;
return t;
};
return i([ classId("Shangzeng3ReplaceZimushangzengTrait") ], e);
}(Trait);
r.Shangzeng3ReplaceZimushangzengTrait = a;
cc._RF.pop();
}, {} ]
}, {}, [ "Shangzeng3ReplaceZimushangzengTrait" ]);
//# sourceMappingURL=index.js.map
