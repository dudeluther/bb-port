window.__require = function t(e, r, o) {
function i(l, u) {
if (!r[l]) {
if (!e[l]) {
var c = l.split("/");
c = c[c.length - 1];
if (!e[c]) {
var s = "function" == typeof __require && __require;
if (!u && s) return s(c, !0);
if (n) return n(c, !0);
throw new Error("Cannot find module '" + l + "'");
}
l = c;
}
var a = r[l] = {
exports: {}
};
e[l][0].call(a.exports, function(t) {
return i(e[l][1][t] || t);
}, a, a.exports, t, e, r, o);
}
return r[l].exports;
}
for (var n = "function" == typeof __require && __require, l = 0; l < o.length; l++) i(o[l]);
return i;
}({
Puzzle100WeightConditionTrait: [ function(t, e, r) {
"use strict";
cc._RF.push(e, "ce975QP5E9AC4KH03q6V47O", "Puzzle100WeightConditionTrait");
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
var i, n = arguments.length, l = n < 3 ? e : null === o ? o = Object.getOwnPropertyDescriptor(e, r) : o;
if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) l = Reflect.decorate(t, e, r, o); else for (var u = t.length - 1; u >= 0; u--) (i = t[u]) && (l = (n < 3 ? i(l) : n > 3 ? i(e, r, l) : i(e, r)) || l);
return n > 3 && l && Object.defineProperty(e, r, l), l;
};
Object.defineProperty(r, "__esModule", {
value: !0
});
r.Puzzle100WeightConditionTrait = void 0;
var l = function(t) {
i(e, t);
function e() {
return null !== t && t.apply(this, arguments) || this;
}
e.prototype.onActive = function(t) {
if (hs.tp.isClassAlgorithmStrategy_Deal_ProxyTriggerAlgorithm_Puzzle100(t)) {
if (this.shouldBlockEffect()) return;
if (hs.algorithmStrategyInfo.algorithmSourceLevel1 == hs.ClassAlgorithmSourceType.Puzzle100 && hs.BinaryBoard.getWeightValue() < this.props.weight) {
hs.algorithmStrategyInfo.setAlgorithmList([ hs.OFFER_TYPE.KUN_NAN_NAN_TI ]);
hs.algorithmStrategyInfo.setAlgorithmFailList([ hs.OFFER_TYPE.SHANG_ZENG_3 ]);
hs.algorithmStrategyInfo.setAlgorithmSourceLevel2(this.traitName);
t.returnState = !0;
}
}
};
e.prototype.shouldBlockEffect = function() {
return !1;
};
n([ hs.Algorithm() ], e.prototype, "onActive", null);
return n([ classId("Puzzle100WeightConditionTrait"), classMethodWatch() ], e);
}(Trait);
r.Puzzle100WeightConditionTrait = l;
cc._RF.pop();
}, {} ]
}, {}, [ "Puzzle100WeightConditionTrait" ]);
//# sourceMappingURL=index.js.map
