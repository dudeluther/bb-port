window.__require = function t(e, o, l) {
function r(u, n) {
if (!o[u]) {
if (!e[u]) {
var c = u.split("/");
c = c[c.length - 1];
if (!e[c]) {
var s = "function" == typeof __require && __require;
if (!n && s) return s(c, !0);
if (i) return i(c, !0);
throw new Error("Cannot find module '" + u + "'");
}
u = c;
}
var a = o[u] = {
exports: {}
};
e[u][0].call(a.exports, function(t) {
return r(e[u][1][t] || t);
}, a, a.exports, t, e, o, l);
}
return o[u].exports;
}
for (var i = "function" == typeof __require && __require, u = 0; u < l.length; u++) r(l[u]);
return r;
}({
LowWeightFillBlockSortAdjustAlgoTrait: [ function(t, e, o) {
"use strict";
cc._RF.push(e, "dcd7eGKkz5GIpFvFy1Vx4/0", "LowWeightFillBlockSortAdjustAlgoTrait");
var l, r = this && this.__extends || (l = function(t, e) {
return (l = Object.setPrototypeOf || {
__proto__: []
} instanceof Array && function(t, e) {
t.__proto__ = e;
} || function(t, e) {
for (var o in e) Object.prototype.hasOwnProperty.call(e, o) && (t[o] = e[o]);
})(t, e);
}, function(t, e) {
l(t, e);
function o() {
this.constructor = t;
}
t.prototype = null === e ? Object.create(e) : (o.prototype = e.prototype, new o());
}), i = this && this.__decorate || function(t, e, o, l) {
var r, i = arguments.length, u = i < 3 ? e : null === l ? l = Object.getOwnPropertyDescriptor(e, o) : l;
if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) u = Reflect.decorate(t, e, o, l); else for (var n = t.length - 1; n >= 0; n--) (r = t[n]) && (u = (i < 3 ? r(u) : i > 3 ? r(e, o, u) : r(e, o)) || u);
return i > 3 && u && Object.defineProperty(e, o, u), u;
};
Object.defineProperty(o, "__esModule", {
value: !0
});
o.LowWeightFillBlockSortAdjustAlgoTrait = void 0;
var u = function(t) {
r(e, t);
function e() {
var e = null !== t && t.apply(this, arguments) || this;
e.excludeblurAlgoNameList = [];
e.excludeFullAlgoNameList = [];
return e;
}
e.prototype.onCreate = function() {
var t, e, o, l;
this.excludeblurAlgoNameList = null !== (e = null === (t = this.props) || void 0 === t ? void 0 : t.excludeblurAlgoNameList) && void 0 !== e ? e : [];
this.excludeFullAlgoNameList = null !== (l = null === (o = this.props) || void 0 === o ? void 0 : o.excludeFullAlgoNameList) && void 0 !== l ? l : [];
};
e.prototype.onActive = function(t) {
hs.tp.isLowWeightFillBlockSortTraitUpdateIsFillBlank(t) && this.startCheckAlgoName(t);
};
e.prototype.startCheckAlgoName = function(t) {
var e = hs.OFFER_TYPE_STRINGS[hs.algorithmName.algoActualId] || "", o = this.checkExcludeBlurAlgoName(e), l = this.checkExcludeFullAlgoName(e), r = o || l;
(null == t ? void 0 : t.args) && (t.args[0] = !r);
};
e.prototype.checkExcludeBlurAlgoName = function(t) {
return 0 !== this.excludeblurAlgoNameList.length && this.excludeblurAlgoNameList.some(function(e) {
return t.includes(e);
});
};
e.prototype.checkExcludeFullAlgoName = function(t) {
return 0 !== this.excludeFullAlgoNameList.length && this.excludeFullAlgoNameList.includes(t);
};
return i([ classId("LowWeightFillBlockSortAdjustAlgoTrait") ], e);
}(Trait);
o.LowWeightFillBlockSortAdjustAlgoTrait = u;
cc._RF.pop();
}, {} ]
}, {}, [ "LowWeightFillBlockSortAdjustAlgoTrait" ]);
//# sourceMappingURL=index.js.map
