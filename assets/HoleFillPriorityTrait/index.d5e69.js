window.__require = function t(r, e, i) {
function o(l, s) {
if (!e[l]) {
if (!r[l]) {
var a = l.split("/");
a = a[a.length - 1];
if (!r[a]) {
var h = "function" == typeof __require && __require;
if (!s && h) return h(a, !0);
if (n) return n(a, !0);
throw new Error("Cannot find module '" + l + "'");
}
l = a;
}
var u = e[l] = {
exports: {}
};
r[l][0].call(u.exports, function(t) {
return o(r[l][1][t] || t);
}, u, u.exports, t, r, e, i);
}
return e[l].exports;
}
for (var n = "function" == typeof __require && __require, l = 0; l < i.length; l++) o(i[l]);
return o;
}({
HoleFillPriorityTrait: [ function(t, r, e) {
"use strict";
cc._RF.push(r, "ceed42nVIZL/JsYByIF1Kcx", "HoleFillPriorityTrait");
var i, o = this && this.__extends || (i = function(t, r) {
return (i = Object.setPrototypeOf || {
__proto__: []
} instanceof Array && function(t, r) {
t.__proto__ = r;
} || function(t, r) {
for (var e in r) Object.prototype.hasOwnProperty.call(r, e) && (t[e] = r[e]);
})(t, r);
}, function(t, r) {
i(t, r);
function e() {
this.constructor = t;
}
t.prototype = null === r ? Object.create(r) : (e.prototype = r.prototype, new e());
}), n = this && this.__decorate || function(t, r, e, i) {
var o, n = arguments.length, l = n < 3 ? r : null === i ? i = Object.getOwnPropertyDescriptor(r, e) : i;
if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) l = Reflect.decorate(t, r, e, i); else for (var s = t.length - 1; s >= 0; s--) (o = t[s]) && (l = (n < 3 ? o(l) : n > 3 ? o(r, e, l) : o(r, e)) || l);
return n > 3 && l && Object.defineProperty(r, e, l), l;
}, l = this && this.__read || function(t, r) {
var e = "function" == typeof Symbol && t[Symbol.iterator];
if (!e) return t;
var i, o, n = e.call(t), l = [];
try {
for (;(void 0 === r || r-- > 0) && !(i = n.next()).done; ) l.push(i.value);
} catch (t) {
o = {
error: t
};
} finally {
try {
i && !i.done && (e = n.return) && e.call(n);
} finally {
if (o) throw o.error;
}
}
return l;
}, s = this && this.__spread || function() {
for (var t = [], r = 0; r < arguments.length; r++) t = t.concat(l(arguments[r]));
return t;
};
Object.defineProperty(e, "__esModule", {
value: !0
});
e.HoleFillPriorityTrait = void 0;
var a = function(t) {
o(r, t);
function r() {
var r = null !== t && t.apply(this, arguments) || this;
r._isTriggeredThisRound = !1;
return r;
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
Object.defineProperty(r.prototype, "weightThreshold", {
get: function() {
var t, r;
return null !== (r = null === (t = this.props) || void 0 === t ? void 0 : t.weightThreshold) && void 0 !== r ? r : 350;
},
enumerable: !1,
configurable: !0
});
Object.defineProperty(r.prototype, "lowWeightProb", {
get: function() {
var t, r;
return null !== (r = null === (t = this.props) || void 0 === t ? void 0 : t.lowWeightProb) && void 0 !== r ? r : 80;
},
enumerable: !1,
configurable: !0
});
Object.defineProperty(r.prototype, "highWeightProb", {
get: function() {
var t, r;
return null !== (r = null === (t = this.props) || void 0 === t ? void 0 : t.highWeightProb) && void 0 !== r ? r : 40;
},
enumerable: !1,
configurable: !0
});
r.prototype.onActive = function(t) {
hs.tp.isClassAlgorithmStrategy_Replace_ProxyPreprocessingBlankAlgorithm(t) && this._onPreprocessingBlankAlgorithm();
hs.tp.isAlgorithmProcessInfoHandleArgs(t) && this._onHandleArgs(t);
hs.tp.isAlgorithmProcessInfoAfterSetAlgoActualIdByPos(t) && this._onAfterSetAlgoActualIdByPos();
};
r.prototype._onAfterSetAlgoActualIdByPos = function() {
if (this._isTriggeredThisRound) {
hs.algorithmName.algoActualIdByPos === hs.OFFER_TYPE.ALGO_HOLE_FILL_PRIORITY && hs.algorithmName.forceSetAlgoExpectedId(hs.OFFER_TYPE.ALGO_HOLE_FILL_PRIORITY);
this._isTriggeredThisRound = !1;
}
};
r.prototype._onHandleArgs = function(t) {
var r, e, i, o, n, l, s, a, h, u, f, c;
if (t.args[1] === hs.OFFER_TYPE.ALGO_HOLE_FILL_PRIORITY) {
var g = t.args[0];
g.extra || (g.extra = {});
g.extra.feature || (g.extra.feature = {});
g.extra.feature.xEdgeWeight = null !== (e = null === (r = this.props) || void 0 === r ? void 0 : r.xEdgeWeight) && void 0 !== e ? e : .3;
g.extra.feature.xContEdgeWeight = null !== (o = null === (i = this.props) || void 0 === i ? void 0 : i.xContEdgeWeight) && void 0 !== o ? o : .4;
g.extra.feature.xSizeWeight = null !== (l = null === (n = this.props) || void 0 === n ? void 0 : n.xSizeWeight) && void 0 !== l ? l : .3;
g.extra.feature.yEdgeWeight = null !== (a = null === (s = this.props) || void 0 === s ? void 0 : s.yEdgeWeight) && void 0 !== a ? a : .3;
g.extra.feature.yContEdgeWeight = null !== (u = null === (h = this.props) || void 0 === h ? void 0 : h.yContEdgeWeight) && void 0 !== u ? u : .5;
g.extra.feature.ySizeWeight = null !== (c = null === (f = this.props) || void 0 === f ? void 0 : f.ySizeWeight) && void 0 !== c ? c : .2;
}
};
r.prototype._onPreprocessingBlankAlgorithm = function() {
var t = hs.algorithmStrategyInfo;
if (this._hasBlankAlgorithmWithName(t.algorithmList) || this._hasBlankAlgorithmWithName(t.algorithmFailList) || this._hasBlankAlgorithmWithName(t.algorithmPriorityList)) {
var r = hs.BinaryBoard.getWeightValue() < this.weightThreshold ? this.lowWeightProb : this.highWeightProb;
if (100 * Math.random() >= r) ; else {
var e = hs.boardInfo.faceBlocks;
if (this._hasOneByOneHoles(e)) {
this._isTriggeredThisRound = !0;
var i = this._insertBeforeFirstBlankAlgorithm(t.algorithmList);
t.setAlgorithmList(i);
var o = this._insertBeforeFirstBlankAlgorithm(t.algorithmFailList);
t.setAlgorithmFailList(o);
var n = this._insertBeforeFirstBlankAlgorithm(t.algorithmPriorityList);
t.setAlgorithmPriorityList(n);
}
}
}
};
r.prototype._hasBlankAlgorithmWithName = function(t) {
return t.some(function(t) {
if (!hs.isValueInEnum(t, hs.OFFER_TYPE_BLANK)) return !1;
var r = hs.OFFER_TYPE_STRINGS[t];
return r && r.includes("填空");
});
};
r.prototype._insertBeforeFirstBlankAlgorithm = function(t) {
var r = t.findIndex(function(t) {
if (!hs.isValueInEnum(t, hs.OFFER_TYPE_BLANK)) return !1;
var r = hs.OFFER_TYPE_STRINGS[t];
return r && r.includes("填空");
});
if (r < 0) return t;
var e = s(t);
e.splice(r, 0, hs.OFFER_TYPE.ALGO_HOLE_FILL_PRIORITY);
return e;
};
r.prototype._hasOneByOneHoles = function(t) {
for (var r = 0; r < 8; r++) for (var e = 0; e < 8; e++) if (!(t[r][e] > 0)) {
var i = 0 === r || t[r - 1][e] > 0, o = 7 === r || t[r + 1][e] > 0, n = 0 === e || t[r][e - 1] > 0, l = 7 === e || t[r][e + 1] > 0;
if (i && o && n && l) return !0;
}
return !1;
};
return n([ classId("HoleFillPriorityTrait"), classMethodWatch() ], r);
}(Trait);
e.HoleFillPriorityTrait = a;
cc._RF.pop();
}, {} ]
}, {}, [ "HoleFillPriorityTrait" ]);
//# sourceMappingURL=index.js.map
