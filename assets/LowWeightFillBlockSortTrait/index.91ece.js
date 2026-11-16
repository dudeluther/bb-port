window.__require = function t(o, e, r) {
function i(n, c) {
if (!e[n]) {
if (!o[n]) {
var s = n.split("/");
s = s[s.length - 1];
if (!o[s]) {
var a = "function" == typeof __require && __require;
if (!c && a) return a(s, !0);
if (l) return l(s, !0);
throw new Error("Cannot find module '" + n + "'");
}
n = s;
}
var u = e[n] = {
exports: {}
};
o[n][0].call(u.exports, function(t) {
return i(o[n][1][t] || t);
}, u, u.exports, t, o, e, r);
}
return e[n].exports;
}
for (var l = "function" == typeof __require && __require, n = 0; n < r.length; n++) i(r[n]);
return i;
}({
LowWeightFillBlockSortTrait: [ function(t, o, e) {
"use strict";
cc._RF.push(o, "7da885a/MNGcbMEN9TJNB8b", "LowWeightFillBlockSortTrait");
var r, i = this && this.__extends || (r = function(t, o) {
return (r = Object.setPrototypeOf || {
__proto__: []
} instanceof Array && function(t, o) {
t.__proto__ = o;
} || function(t, o) {
for (var e in o) Object.prototype.hasOwnProperty.call(o, e) && (t[e] = o[e]);
})(t, o);
}, function(t, o) {
r(t, o);
function e() {
this.constructor = t;
}
t.prototype = null === o ? Object.create(o) : (e.prototype = o.prototype, new e());
}), l = this && this.__decorate || function(t, o, e, r) {
var i, l = arguments.length, n = l < 3 ? o : null === r ? r = Object.getOwnPropertyDescriptor(o, e) : r;
if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) n = Reflect.decorate(t, o, e, r); else for (var c = t.length - 1; c >= 0; c--) (i = t[c]) && (n = (l < 3 ? i(n) : l > 3 ? i(o, e, n) : i(o, e)) || n);
return l > 3 && n && Object.defineProperty(o, e, n), n;
};
Object.defineProperty(e, "__esModule", {
value: !0
});
e.LowWeightFillBlockSortTrait = void 0;
var n = function(t) {
i(o, t);
function o() {
return null !== t && t.apply(this, arguments) || this;
}
o.prototype.registerTraitEventsMethods = function() {
return [ {
className: "AlgorithmProcessInfo",
methodName: "handleArgs"
} ];
};
o.prototype.isFillBlankAlgorithm = function() {
return (hs.OFFER_TYPE_STRINGS[hs.algorithmName.algoActualId] || "").includes("填空");
};
o.prototype.getBoardWeight = function() {
var t = new hs.BinaryBoard();
t.convertToBinaryBoard(hs.boardInfo.faceBlocks);
return t.getWeightValueObj();
};
o.prototype.shouldUseLargeBlockFirst = function() {
var t = this.getBoardWeight(), o = this.props.weightValue || 300, e = this.isFillBlankAlgorithm();
e = this.updateIsFillBlank(e);
return t < o && e;
};
o.prototype.onActive = function(t) {
if (hs.tp.isAlgorithmProcessInfoHandleArgs(t)) {
if (hs.gameInfo.gameMode != hs.GameMode.Class) return;
if (this.shouldUseLargeBlockFirst()) {
var o = t.args[0];
o.extra || (o.extra = {});
o.extra.isSortFillBlock = !0;
(null == o ? void 0 : o.filterWeightBlocks) || (o.filterWeightBlocks = []);
(null == o ? void 0 : o.filterBlocks) || (o.filterBlocks = []);
[ 1, 2, 3 ].forEach(function(t) {
o.filterWeightBlocks.includes(t) || o.filterWeightBlocks.push(t);
o.filterBlocks.includes(t) || o.filterBlocks.push(t);
});
}
}
};
o.prototype.updateIsFillBlank = function(t) {
return t;
};
l([ hs.Algorithm() ], o.prototype, "onActive", null);
return l([ classId("LowWeightFillBlockSortTrait"), classMethodWatch() ], o);
}(Trait);
e.LowWeightFillBlockSortTrait = n;
cc._RF.pop();
}, {} ],
LowWeightFillBlockSort_ios_Trait: [ function(t, o, e) {
"use strict";
cc._RF.push(o, "b784avP0ipNf5n7DZH3DkfR", "LowWeightFillBlockSort_ios_Trait");
var r, i = this && this.__extends || (r = function(t, o) {
return (r = Object.setPrototypeOf || {
__proto__: []
} instanceof Array && function(t, o) {
t.__proto__ = o;
} || function(t, o) {
for (var e in o) Object.prototype.hasOwnProperty.call(o, e) && (t[e] = o[e]);
})(t, o);
}, function(t, o) {
r(t, o);
function e() {
this.constructor = t;
}
t.prototype = null === o ? Object.create(o) : (e.prototype = o.prototype, new e());
}), l = this && this.__decorate || function(t, o, e, r) {
var i, l = arguments.length, n = l < 3 ? o : null === r ? r = Object.getOwnPropertyDescriptor(o, e) : r;
if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) n = Reflect.decorate(t, o, e, r); else for (var c = t.length - 1; c >= 0; c--) (i = t[c]) && (n = (l < 3 ? i(n) : l > 3 ? i(o, e, n) : i(o, e)) || n);
return l > 3 && n && Object.defineProperty(o, e, n), n;
};
Object.defineProperty(e, "__esModule", {
value: !0
});
e.LowWeightFillBlockSort_ios_Trait = void 0;
var n = function(t) {
i(o, t);
function o() {
return null !== t && t.apply(this, arguments) || this;
}
o.prototype.onActive = function(o) {
t.prototype.onActive.call(this, o);
};
l([ hs.Algorithm() ], o.prototype, "onActive", null);
return l([ classId("LowWeightFillBlockSortTrait", "ios"), classMethodWatch() ], o);
}(t("./LowWeightFillBlockSortTrait").LowWeightFillBlockSortTrait);
e.LowWeightFillBlockSort_ios_Trait = n;
cc._RF.pop();
}, {
"./LowWeightFillBlockSortTrait": "LowWeightFillBlockSortTrait"
} ]
}, {}, [ "LowWeightFillBlockSortTrait", "LowWeightFillBlockSort_ios_Trait" ]);
//# sourceMappingURL=index.js.map
