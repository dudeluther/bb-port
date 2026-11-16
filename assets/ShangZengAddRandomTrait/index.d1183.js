window.__require = function t(e, r, n) {
function o(a, s) {
if (!r[a]) {
if (!e[a]) {
var h = a.split("/");
h = h[h.length - 1];
if (!e[h]) {
var _ = "function" == typeof __require && __require;
if (!s && _) return _(h, !0);
if (i) return i(h, !0);
throw new Error("Cannot find module '" + a + "'");
}
a = h;
}
var c = r[a] = {
exports: {}
};
e[a][0].call(c.exports, function(t) {
return o(e[a][1][t] || t);
}, c, c.exports, t, e, r, n);
}
return r[a].exports;
}
for (var i = "function" == typeof __require && __require, a = 0; a < n.length; a++) o(n[a]);
return o;
}({
ShangZengAddRandomTrait: [ function(t, e, r) {
"use strict";
cc._RF.push(e, "07650zgbQ5JHIrBRRYOf8Cu", "ShangZengAddRandomTrait");
var n, o = this && this.__extends || (n = function(t, e) {
return (n = Object.setPrototypeOf || {
__proto__: []
} instanceof Array && function(t, e) {
t.__proto__ = e;
} || function(t, e) {
for (var r in e) Object.prototype.hasOwnProperty.call(e, r) && (t[r] = e[r]);
})(t, e);
}, function(t, e) {
n(t, e);
function r() {
this.constructor = t;
}
t.prototype = null === e ? Object.create(e) : (r.prototype = e.prototype, new r());
}), i = this && this.__decorate || function(t, e, r, n) {
var o, i = arguments.length, a = i < 3 ? e : null === n ? n = Object.getOwnPropertyDescriptor(e, r) : n;
if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) a = Reflect.decorate(t, e, r, n); else for (var s = t.length - 1; s >= 0; s--) (o = t[s]) && (a = (i < 3 ? o(a) : i > 3 ? o(e, r, a) : o(e, r)) || a);
return i > 3 && a && Object.defineProperty(e, r, a), a;
};
Object.defineProperty(r, "__esModule", {
value: !0
});
r.ShangZengAddRandomTrait = void 0;
var a = [ hs.OFFER_TYPE.SHANG_ZENG_3, hs.OFFER_TYPE.SHANG_ZENG_3_NO_BIT, hs.OFFER_TYPE.SHANG_ZENG_3_NO_DOWN, hs.OFFER_TYPE.IOS_ADD3_NOT_BIT, hs.OFFER_TYPE.IOS_ADD3_BIT, hs.OFFER_TYPE.IOS_SHANG_ZENG_3_ENTRPOY_BIT ], s = function(t) {
o(e, t);
function e() {
return null !== t && t.apply(this, arguments) || this;
}
e.prototype.onActive = function(t) {
(hs.tp.isClassAlgorithmStrategy_Replace_ProxyPreprocessingShangAlgorithm(t) || hs.tp.isClassAlgorithmStrategyIOS_Replace_ProxyPreprocessingShangAlgorithm(t)) && this.handleShangZeng3Replace();
};
e.prototype.hasShangZeng3 = function(t) {
return t.some(function(t) {
return a.includes(t);
});
};
e.prototype.handleShangZeng3Replace = function() {
var t = hs.traitConfigSafePropsInfo.getSafePropValueByKey("ShangZengAddRandom", "rate", this.props, .5), e = hs.traitConfigSafePropsInfo.getSafePropValueByKey("ShangZengAddRandom", "mode", this.props, 1);
if (t <= 0 || t > 1) ; else if (1 === e || 2 === e) {
var r = hs.algorithmStrategyInfo;
if (r) {
var n = this.hasShangZeng3(r.algorithmList), o = this.hasShangZeng3(r.algorithmFailList), i = this.hasShangZeng3(r.algorithmSuccessList);
if (n || o || i) {
var s = 1 === e ? hs.OFFER_TYPE.TIAN_KONG_XIAO_CHU : hs.OFFER_TYPE.SUI_JI_WU_SI;
if (Math.random() > t) ; else {
for (var h = r.algorithmList, _ = 0; _ < h.length; _++) a.includes(h[_]) && (h[_] = s);
var c = r.algorithmFailList;
for (_ = 0; _ < c.length; _++) a.includes(c[_]) && (c[_] = s);
var g = r.algorithmSuccessList;
for (_ = 0; _ < g.length; _++) a.includes(g[_]) && (g[_] = s);
}
}
}
}
};
return i([ classId("ShangZengAddRandomTrait") ], e);
}(Trait);
r.ShangZengAddRandomTrait = s;
cc._RF.pop();
}, {} ]
}, {}, [ "ShangZengAddRandomTrait" ]);
//# sourceMappingURL=index.js.map
