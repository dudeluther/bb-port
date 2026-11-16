window.__require = function t(o, r, e) {
function i(n, s) {
if (!r[n]) {
if (!o[n]) {
var l = n.split("/");
l = l[l.length - 1];
if (!o[l]) {
var c = "function" == typeof __require && __require;
if (!s && c) return c(l, !0);
if (a) return a(l, !0);
throw new Error("Cannot find module '" + n + "'");
}
n = l;
}
var u = r[n] = {
exports: {}
};
o[n][0].call(u.exports, function(t) {
return i(o[n][1][t] || t);
}, u, u.exports, t, o, r, e);
}
return r[n].exports;
}
for (var a = "function" == typeof __require && __require, n = 0; n < e.length; n++) i(e[n]);
return i;
}({
CTRefactorSolidColorTrait: [ function(t, o, r) {
"use strict";
cc._RF.push(o, "e3f4aW2fI1OnwobLD1OX2p9", "CTRefactorSolidColorTrait");
var e, i = this && this.__extends || (e = function(t, o) {
return (e = Object.setPrototypeOf || {
__proto__: []
} instanceof Array && function(t, o) {
t.__proto__ = o;
} || function(t, o) {
for (var r in o) Object.prototype.hasOwnProperty.call(o, r) && (t[r] = o[r]);
})(t, o);
}, function(t, o) {
e(t, o);
function r() {
this.constructor = t;
}
t.prototype = null === o ? Object.create(o) : (r.prototype = o.prototype, new r());
}), a = this && this.__decorate || function(t, o, r, e) {
var i, a = arguments.length, n = a < 3 ? o : null === e ? e = Object.getOwnPropertyDescriptor(o, r) : e;
if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) n = Reflect.decorate(t, o, r, e); else for (var s = t.length - 1; s >= 0; s--) (i = t[s]) && (n = (a < 3 ? i(n) : a > 3 ? i(o, r, n) : i(o, r)) || n);
return a > 3 && n && Object.defineProperty(o, r, n), n;
};
Object.defineProperty(r, "__esModule", {
value: !0
});
r.CTRefactorSolidColorTrait = void 0;
var n = function(t) {
i(o, t);
function o() {
return null !== t && t.apply(this, arguments) || this;
}
o.prototype.data = function() {
return {
colorList: []
};
};
Object.defineProperty(o.prototype, "triggerRoundNum", {
get: function() {
return hs.traitConfigSafePropsInfo.getSafePropValueByKey("SolidColorTrait", "triggerRoundNum", this.props, 10);
},
enumerable: !1,
configurable: !0
});
Object.defineProperty(o.prototype, "triggerRadio", {
get: function() {
return hs.traitConfigSafePropsInfo.getSafePropValueByKey("SolidColorTrait", "triggerRadio", this.props, 1);
},
enumerable: !1,
configurable: !0
});
o.prototype.isClassDefaultBoard_ProxyProduceDefaultColor = function(t) {
var o = hs.storage.getItem("classGameNum", 0), r = Math.random();
if (o > 0 && o % this.triggerRoundNum == 0 && r < this.triggerRadio) {
if (0 == hs.storage.getItem("classSolidColor", 0)) {
var e = Math.floor(7 * Math.random() + 1);
hs.storage.setItem("classSolidColor", e);
}
this.checkSolidColor();
var i = t.args[0];
i.forEach(function(t) {
t.forEach(function(o, r) {
-1 !== o && (t[r] = hs.storage.getItem("classSolidColor", 0));
});
});
t.args[0] = i;
t.returnState = !0;
} else {
hs.storage.setItem("classSolidColor", 0);
t.returnState = !1;
}
};
o.prototype.isGameOver_Splash_ProxyGetBoardSplashAnimationColor = function(t) {
var o = hs.storage.getItem("classSolidColor", 0);
t.args[0] = o;
};
o.prototype.isClassBoardSplashAnimation_ProxyGetBoardSplashAnimationColor = function(t) {
var o = hs.storage.getItem("classSolidColor", 0);
t.args[0] = o;
};
o.prototype.isClassBlocksProducerInfoComputeEliminateColor = function(t) {
var o = hs.storage.getItem("classSolidColor", 0);
if (o > 0) {
t.args[0] = o;
t.returnState = !0;
} else t.returnState = !1;
};
o.prototype.checkSolidColor = function() {};
o.prototype.getSolidColor = function() {
return hs.storage.getItem("classSolidColor", 0);
};
o.prototype.getColorList = function() {
var t;
return null !== (t = this.state.colorList) && void 0 !== t ? t : [];
};
o.prototype.onAlgorithmStrategyColorAdjust = function() {
var t = hs.storage.getItem("classSolidColor", 0);
if (!(t <= 0)) {
var o = [ t, t, t ];
hs.storage.setItem("classColorLists", o);
this.setState({
colorList: o
});
return {
data: o,
disableTraits: [ "CTRefactorBaseColorAdjustTrait", "CTRefactorIsUseInitialColorTrait" ]
};
}
};
return a([ classId("CTRefactorSolidColorTrait"), classMethodWatch() ], o);
}(Trait);
r.CTRefactorSolidColorTrait = n;
cc._RF.pop();
}, {} ]
}, {}, [ "CTRefactorSolidColorTrait" ]);
//# sourceMappingURL=index.js.map
