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
var _ = r[a] = {
exports: {}
};
e[a][0].call(_.exports, function(t) {
return i(e[a][1][t] || t);
}, _, _.exports, t, e, r, o);
}
return r[a].exports;
}
for (var n = "function" == typeof __require && __require, a = 0; a < o.length; a++) i(o[a]);
return i;
}({
AlgoSameBlockShangZengTrait: [ function(t, e, r) {
"use strict";
cc._RF.push(e, "5ca0aQ7UrBB7rpnZv+EaF8w", "AlgoSameBlockShangZengTrait");
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
}, a = this && this.__values || function(t) {
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
r.AlgoSameBlockShangZengTrait = void 0;
var s = [ hs.OFFER_TYPE.SHANG_ZENG_3, hs.OFFER_TYPE.ALGORITHM_INCREASE_VARIANCE_ADD3, hs.OFFER_TYPE.SHANG_ZENG_3_X_8, hs.OFFER_TYPE.SHANG_ZENG_3_NO_BIT, hs.OFFER_TYPE.IOS_SHANG_ZENG_3_ENTRPOY_BIT, hs.OFFER_TYPE.SHANG_ZENG_3_NO_DOWN, hs.OFFER_TYPE.INCREASE_ENTROPY3_DIE, hs.OFFER_TYPE.ALGO_ENTROPY3_CLEAR, hs.OFFER_TYPE.INCREASE_ENTROPY_NEBULA, hs.OFFER_TYPE.ALGO_QUICK_FILL_ENTROPY_INCREASE3_2_1, hs.OFFER_TYPE.ALGO_QUICK_FILL_ENTROPY_INCREASE3_1_2, hs.OFFER_TYPE.EFFICIENT_ENTROPY3, hs.OFFER_TYPE.SIMPLE_BLOCK_FALLBACK_ENTROPY3, hs.OFFER_TYPE.SIMPLE_BLOCK_FILTER_ENTROPY3, hs.OFFER_TYPE.ALGO_QUICK_FILL_QUICK_FILL_ENTROPY_INCREASE3, hs.OFFER_TYPE.ALGO_QUICK_FILL_FILL_CLEAR_ENTROPY_INCREASE3, hs.OFFER_TYPE.IOS_ADD3_NOT_BIT, hs.OFFER_TYPE.IOS_ADD3_BIT ], l = function(t) {
i(e, t);
function e() {
var e = null !== t && t.apply(this, arguments) || this;
e.persistentData = {
gameNum: -1,
triggerCount: 0
};
return e;
}
Object.defineProperty(e.prototype, "onActiveCondition", {
get: function() {
return this.isCanActive();
},
enumerable: !1,
configurable: !0
});
e.prototype.isCanActive = function() {
return !0;
};
Object.defineProperty(e.prototype, "currentGameNum", {
get: function() {
return hs.storage.getItem("classGameNum", 0);
},
enumerable: !1,
configurable: !0
});
Object.defineProperty(e.prototype, "times", {
get: function() {
var t, e;
return null !== (e = null === (t = this.props) || void 0 === t ? void 0 : t.times) && void 0 !== e ? e : -1;
},
enumerable: !1,
configurable: !0
});
e.prototype.canTrigger = function() {
return -1 === this.times || this.persistentData.triggerCount < this.times;
};
e.prototype.onActive = function(t) {
var e, r;
if (hs.tp.isClassGame_ProxyOnGameStart(t)) {
var o = null === (e = t.args) || void 0 === e ? void 0 : e[0];
if (null === (r = null == o ? void 0 : o.data) || void 0 === r ? void 0 : r.newGame) {
this.persistentData.gameNum = this.currentGameNum;
this.persistentData.triggerCount = 0;
} else if (this.persistentData.gameNum !== this.currentGameNum) {
this.persistentData.gameNum = this.currentGameNum;
this.persistentData.triggerCount = 0;
}
} else {
hs.tp.isClassAlgorithmStrategy_Replace_ProxyPreprocessingShangAlgorithm(t) && this.handleShangZengReplace(t);
hs.tp.isClassAlgorithmStrategyIOS_Replace_ProxyPreprocessingShangAlgorithm(t) && this.handleShangZengReplace(t);
if (hs.tp.isClassAlgorithmStrategy_Run_ProxyAlgorithmComplete(t) && hs.algorithmName.algoActualIdByPos === hs.OFFER_TYPE.ALGO_SAME_BLOCK_SHANG) {
if (this.persistentData.gameNum !== this.currentGameNum) {
this.persistentData.gameNum = this.currentGameNum;
this.persistentData.triggerCount = 0;
}
this.persistentData.triggerCount++;
}
hs.tp.isAlgorithmBottomInfoReplaceSecondBlock(t) && hs.algorithmName.algoActualIdByPos === hs.OFFER_TYPE.ALGO_SAME_BLOCK_SHANG && (t.replace = !0);
}
};
e.prototype.handleShangZengReplace = function(t) {
var e, r, o, i, n, l;
if (this.persistentData.gameNum !== this.currentGameNum) {
this.persistentData.gameNum = this.currentGameNum;
this.persistentData.triggerCount = 0;
}
if (this.canTrigger()) {
var h = hs.algorithmStrategyInfo.algorithmList, _ = hs.algorithmStrategyInfo.algorithmFailList || [], g = hs.algorithmStrategyInfo.algorithmPriorityList || [], c = function(t) {
return s.some(function(e) {
return -1 !== t.indexOf(e);
});
};
if (c(h) || c(_) || c(g)) {
var u = h;
try {
for (var m = a(s), p = m.next(); !p.done; p = m.next()) {
var E = p.value;
u = hs.algorithmStrategyLogic.replaceAlgorithmType(u, E, hs.OFFER_TYPE.ALGO_SAME_BLOCK_SHANG);
}
} catch (t) {
e = {
error: t
};
} finally {
try {
p && !p.done && (r = m.return) && r.call(m);
} finally {
if (e) throw e.error;
}
}
hs.algorithmStrategyInfo.setAlgorithmList(u);
var f = hs.algorithmStrategyInfo.algorithmSuccessList || [];
try {
for (var O = a(s), A = O.next(); !A.done; A = O.next()) {
E = A.value;
f = hs.algorithmStrategyLogic.replaceAlgorithmType(f, E, hs.OFFER_TYPE.ALGO_SAME_BLOCK_SHANG);
}
} catch (t) {
o = {
error: t
};
} finally {
try {
A && !A.done && (i = O.return) && i.call(O);
} finally {
if (o) throw o.error;
}
}
hs.algorithmStrategyInfo.setAlgorithmSuccessList(f);
var y = hs.algorithmStrategyInfo.algorithmFailList || [];
try {
for (var S = a(s), F = S.next(); !F.done; F = S.next()) {
E = F.value;
y = hs.algorithmStrategyLogic.replaceAlgorithmType(y, E, hs.OFFER_TYPE.ALGO_SAME_BLOCK_SHANG);
}
} catch (t) {
n = {
error: t
};
} finally {
try {
F && !F.done && (l = S.return) && l.call(S);
} finally {
if (n) throw n.error;
}
}
hs.algorithmStrategyInfo.setAlgorithmFailList(y);
t.returnState = !0;
}
}
};
n([ hs.storageProperty({
key: "AlgoSameBlockShangZengTrait"
}) ], e.prototype, "persistentData", void 0);
n([ hs.Algorithm() ], e.prototype, "onActive", null);
return n([ classId("AlgoSameBlockShangZengTrait"), classMethodWatch() ], e);
}(Trait);
r.AlgoSameBlockShangZengTrait = l;
cc._RF.pop();
}, {} ]
}, {}, [ "AlgoSameBlockShangZengTrait" ]);
//# sourceMappingURL=index.js.map
