window.__require = function t(e, i, n) {
function a(o, s) {
if (!i[o]) {
if (!e[o]) {
var h = o.split("/");
h = h[h.length - 1];
if (!e[h]) {
var c = "function" == typeof __require && __require;
if (!s && c) return c(h, !0);
if (r) return r(h, !0);
throw new Error("Cannot find module '" + o + "'");
}
o = h;
}
var l = i[o] = {
exports: {}
};
e[o][0].call(l.exports, function(t) {
return a(e[o][1][t] || t);
}, l, l.exports, t, e, i, n);
}
return i[o].exports;
}
for (var r = "function" == typeof __require && __require, o = 0; o < n.length; o++) a(n[o]);
return a;
}({
ButtonClickAddShakeTrait: [ function(t, e, i) {
"use strict";
cc._RF.push(e, "4d515onyO5LS5wunKE4GZNz", "ButtonClickAddShakeTrait");
var n, a = this && this.__extends || (n = function(t, e) {
return (n = Object.setPrototypeOf || {
__proto__: []
} instanceof Array && function(t, e) {
t.__proto__ = e;
} || function(t, e) {
for (var i in e) Object.prototype.hasOwnProperty.call(e, i) && (t[i] = e[i]);
})(t, e);
}, function(t, e) {
n(t, e);
function i() {
this.constructor = t;
}
t.prototype = null === e ? Object.create(e) : (i.prototype = e.prototype, new i());
}), r = this && this.__decorate || function(t, e, i, n) {
var a, r = arguments.length, o = r < 3 ? e : null === n ? n = Object.getOwnPropertyDescriptor(e, i) : n;
if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) o = Reflect.decorate(t, e, i, n); else for (var s = t.length - 1; s >= 0; s--) (a = t[s]) && (o = (r < 3 ? a(o) : r > 3 ? a(e, i, o) : a(e, i)) || o);
return r > 3 && o && Object.defineProperty(e, i, o), o;
};
Object.defineProperty(i, "__esModule", {
value: !0
});
i.ButtonClickAddShakeTrait = void 0;
var o = function(t) {
a(e, t);
function e() {
var e = null !== t && t.apply(this, arguments) || this;
e.boardOpShake = !1;
e.buttonClickGPShakeTimesParams = [];
e.buttonClickGPShakeStrengthParams = [];
e.buttonClickIosShakeLevel = [];
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
e.prototype.onCreate = function() {
var t, e, i;
this.boardOpShake = !!(null === (t = this.props) || void 0 === t ? void 0 : t.boardOpShake);
this.buttonClickGPShakeTimesParams = (null === (e = this.props) || void 0 === e ? void 0 : e.shakeTimes) || [];
var n = this.buttonClickGPShakeTimesParams.length;
if (n > 0) {
for (var a = 0; a < n; a++) this.buttonClickGPShakeTimesParams[a] = Math.max(this.buttonClickGPShakeTimesParams[a], 0);
for (a = n; a < 4; a++) this.buttonClickGPShakeTimesParams.push(0);
}
this.buttonClickGPShakeStrengthParams = (null === (i = this.props) || void 0 === i ? void 0 : i.shakeStrength) || [];
var r = this.buttonClickGPShakeStrengthParams.length;
if (r > 0) {
for (a = 0; a < r; a++) {
this.buttonClickGPShakeStrengthParams[a] = Math.max(this.buttonClickGPShakeStrengthParams[a], 0);
this.buttonClickGPShakeStrengthParams[a] = Math.min(this.buttonClickGPShakeStrengthParams[a], 255);
}
for (a = r; a < 4; a++) this.buttonClickGPShakeStrengthParams.push(0);
}
};
e.prototype.onActive = function(t) {
if (hs.tp.isHomePageSectionClassBtnDefaultOnClick(t) || hs.tp.isHomePageSectionChapterBtnDefaultOnClick(t) || hs.tp.isClassTopInfo_ProxyOnSetupClick(t) || hs.tp.isClassFailOnClickPlay(t) || hs.tp.isClassWinOnClickPlay(t) || hs.tp.isJewelTopInfo_ProxyOnSetupClick(t) || hs.tp.isChapterListOnClickBack(t) || hs.tp.isChapterListOnClickStartGame(t) || hs.tp.isIsOPenLevelSceneEffectTraitOnClickMagnifierEvent(t) || hs.tp.isChapterTopInfoBtnOnClickSetup(t) || hs.tp.isChapterTopInfoBtnOnClickBack(t) || hs.tp.isChapterScoreFailOnClickPlay(t) || hs.tp.isChapterCollectFailOnClickPlay(t) || hs.tp.isChapterScoreWinOnClickPlay(t) || hs.tp.isChapterCollectWinOnClickPlay(t)) {
if (!hs.shakeInfo.shakeSwitch) return;
this.shake();
}
if (hs.tp.isSetup_ProxyHandlerShake(t)) {
if (!hs.shakeInfo.shakeSwitch) return;
this.shake();
t.returnState = !0;
t.replace = !0;
}
if (hs.tp.isShake_ProxyOnTouchEnd(t)) {
if (!hs.shakeInfo.shakeSwitch) return;
this.boardOpShake && this.shake();
}
};
e.prototype.checkAfterIPhone13 = function() {
return !1;
};
e.prototype.shake = function() {
cc.sys.isNative && this.shakeGP();
};
e.prototype.shakeGP = function() {
if (null != this.buttonClickGPShakeStrengthParams && 0 != this.buttonClickGPShakeStrengthParams.length && null != this.buttonClickGPShakeTimesParams && 0 != this.buttonClickGPShakeTimesParams.length) for (var t = this.buttonClickGPShakeTimesParams.length, e = 0, i = function(i) {
for (var a = [], r = [], o = 0; o < 4; o++) {
var s = i + o;
a.push(s < t ? n.buttonClickGPShakeTimesParams[s] : 0);
r.push(s < t ? n.buttonClickGPShakeStrengthParams[s] : 0);
}
var h = a[0] + a[1] + a[2] + a[3], c = {
method: "vibrateRepeat26",
param: "{timings:[" + a[0] + "," + a[1] + "," + a[2] + "," + a[3] + "],amplitudes:[" + r[0] + "," + r[1] + "," + r[2] + "," + r[3] + "]}"
};
0 === e ? hs.NativeBridge.callNativeCommonInfo(c) : setTimeoutSafe(function() {
hs.NativeBridge.callNativeCommonInfo(c);
}, e);
e += h;
}, n = this, a = 0; a < t; a += 4) i(a);
};
e.prototype.shakeIOS = function() {
if (null != this.buttonClickIosShakeLevel && 2 == this.buttonClickIosShakeLevel.length) {
var t = this.checkAfterIPhone13() ? this.buttonClickIosShakeLevel[1] : this.buttonClickIosShakeLevel[0];
t > 0 && hs.NativeVibrator.shakeOnceIOS(t);
}
};
return r([ classId("ButtonClickAddShakeTrait"), classMethodWatch() ], e);
}(Trait);
i.ButtonClickAddShakeTrait = o;
cc._RF.pop();
}, {} ]
}, {}, [ "ButtonClickAddShakeTrait" ]);
//# sourceMappingURL=index.js.map
