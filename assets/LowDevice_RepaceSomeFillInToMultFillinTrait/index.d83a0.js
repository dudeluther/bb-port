window.__require = function t(e, o, i) {
function r(l, s) {
if (!o[l]) {
if (!e[l]) {
var a = l.split("/");
a = a[a.length - 1];
if (!e[a]) {
var c = "function" == typeof __require && __require;
if (!s && c) return c(a, !0);
if (n) return n(a, !0);
throw new Error("Cannot find module '" + l + "'");
}
l = a;
}
var u = o[l] = {
exports: {}
};
e[l][0].call(u.exports, function(t) {
return r(e[l][1][t] || t);
}, u, u.exports, t, e, o, i);
}
return o[l].exports;
}
for (var n = "function" == typeof __require && __require, l = 0; l < i.length; l++) r(i[l]);
return r;
}({
LowDevice_RepaceSomeFillInToMultFillinTrait: [ function(t, e, o) {
"use strict";
cc._RF.push(e, "aa0c1DmnUVLgbK7Jqj/EQXq", "LowDevice_RepaceSomeFillInToMultFillinTrait");
var i, r = this && this.__extends || (i = function(t, e) {
return (i = Object.setPrototypeOf || {
__proto__: []
} instanceof Array && function(t, e) {
t.__proto__ = e;
} || function(t, e) {
for (var o in e) Object.prototype.hasOwnProperty.call(e, o) && (t[o] = e[o]);
})(t, e);
}, function(t, e) {
i(t, e);
function o() {
this.constructor = t;
}
t.prototype = null === e ? Object.create(e) : (o.prototype = e.prototype, new o());
}), n = this && this.__decorate || function(t, e, o, i) {
var r, n = arguments.length, l = n < 3 ? e : null === i ? i = Object.getOwnPropertyDescriptor(e, o) : i;
if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) l = Reflect.decorate(t, e, o, i); else for (var s = t.length - 1; s >= 0; s--) (r = t[s]) && (l = (n < 3 ? r(l) : n > 3 ? r(e, o, l) : r(e, o)) || l);
return n > 3 && l && Object.defineProperty(e, o, l), l;
};
Object.defineProperty(o, "__esModule", {
value: !0
});
o.LowDevice_RepaceSomeFillInToMultFillinTrait = void 0;
var l = [ hs.OFFER_TYPE.TIAN_KONG_XIAO_CHU, hs.OFFER_TYPE.TRAVEL_TIAN_KONG_XIAO_CHU, hs.OFFER_TYPE.EMPTYDONGFILL ], s = function(t) {
r(e, t);
function e() {
return null !== t && t.apply(this, arguments) || this;
}
e.prototype.onActive = function(t) {
if (hs.gameInfo.gameMode == hs.GameMode.Class) {
hs.tp.isClassAlgorithmStrategy_Replace_ProxyPreprocessingAlgorithm(t) && this._tryInsertMultiClearAlgorithm();
if (hs.tp.isClassAlgorithmProcessInfoBottomOffer(t) && l.includes(hs.algorithmName.algoActualIdByPos)) {
t.args[0] = [ hs.OFFER_TYPE.DUO_XIAO ];
t.returnState = !0;
}
}
};
e.prototype.isClassAlgorithmBottomSequenceGPInfoTriggerBottomOfferAlgo = function() {
var t = TRAIT("NewBottomOfferReverseModifyTrait");
if (null != t && t.active && 1 === t.version && l.includes(hs.algorithmName.algoActualIdByPos)) {
hs.algorithmBottomSequenceInfo.setAlgorithmBottomList([ hs.OFFER_TYPE.DUO_XIAO ]);
hs.algorithmBottomSequenceInfo.setIsTriggerBottomAlgo(!1);
}
};
e.prototype._tryInsertMultiClearAlgorithm = function() {
var t = hs.algorithmStrategyInfo;
this._insertInList(t.algorithmList, "algorithmList");
this._insertInList(t.algorithmFailList, "algorithmFailList");
this._insertInList(t.algorithmSuccessList, "algorithmSuccessList");
this._insertInList(t.algorithmPriorityList, "algorithmPriorityList");
};
e.prototype._insertInList = function(t) {
if (t && 0 !== t.length) for (var e = t.length - 1; e >= 0; e--) {
var o = t[e];
l.includes(o) && t.splice(e, 0, hs.OFFER_TYPE.DUO_XIAO);
}
};
return n([ classId("LowDevice_RepaceSomeFillInToMultFillinTrait"), classMethodWatch() ], e);
}(Trait);
o.LowDevice_RepaceSomeFillInToMultFillinTrait = s;
cc._RF.pop();
}, {} ]
}, {}, [ "LowDevice_RepaceSomeFillInToMultFillinTrait" ]);
//# sourceMappingURL=index.js.map
