window.__require = function e(t, r, o) {
function n(l, a) {
if (!r[l]) {
if (!t[l]) {
var c = l.split("/");
c = c[c.length - 1];
if (!t[c]) {
var s = "function" == typeof __require && __require;
if (!a && s) return s(c, !0);
if (i) return i(c, !0);
throw new Error("Cannot find module '" + l + "'");
}
l = c;
}
var u = r[l] = {
exports: {}
};
t[l][0].call(u.exports, function(e) {
return n(t[l][1][e] || e);
}, u, u.exports, e, t, r, o);
}
return r[l].exports;
}
for (var i = "function" == typeof __require && __require, l = 0; l < o.length; l++) n(o[l]);
return n;
}({
PixelBitControllerTrait: [ function(e, t, r) {
"use strict";
cc._RF.push(t, "864c9SWzepLGJ4OXkI4G+OM", "PixelBitControllerTrait");
var o, n = this && this.__extends || (o = function(e, t) {
return (o = Object.setPrototypeOf || {
__proto__: []
} instanceof Array && function(e, t) {
e.__proto__ = t;
} || function(e, t) {
for (var r in t) Object.prototype.hasOwnProperty.call(t, r) && (e[r] = t[r]);
})(e, t);
}, function(e, t) {
o(e, t);
function r() {
this.constructor = e;
}
e.prototype = null === t ? Object.create(t) : (r.prototype = t.prototype, new r());
}), i = this && this.__decorate || function(e, t, r, o) {
var n, i = arguments.length, l = i < 3 ? t : null === o ? o = Object.getOwnPropertyDescriptor(t, r) : o;
if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) l = Reflect.decorate(e, t, r, o); else for (var a = e.length - 1; a >= 0; a--) (n = e[a]) && (l = (i < 3 ? n(l) : i > 3 ? n(t, r, l) : n(t, r)) || l);
return i > 3 && l && Object.defineProperty(t, r, l), l;
};
Object.defineProperty(r, "__esModule", {
value: !0
});
r.PixelBitControllerTrait = void 0;
var l = function(e) {
n(t, e);
function t() {
var t = null !== e && e.apply(this, arguments) || this;
t.pixelModeJustEnabled = !1;
return t;
}
t.prototype.onCreate = function() {
this.checkAndTogglePixelMode();
};
t.prototype.onActive = function() {};
t.prototype.checkAndTogglePixelMode = function() {
var e = !!hs.traitConfigInfo.useTraits[330788001] || !!hs.traitConfigInfo.useTraits[330788003], t = hs.storage.getItem("PixelBitController_pixelEnabled", !1);
if (e && !t) {
var r = hs.NativeApp.enableGameBGTrans("0");
if ("0" === String(null != r ? r : "1")) {
hs.storage.setItem("PixelBitController_pixelEnabled", !0);
this.pixelModeJustEnabled = !0;
}
} else if (!e && t) {
r = hs.NativeApp.enableGameBGTrans("1");
"0" === String(null != r ? r : "1") && hs.storage.setItem("PixelBitController_pixelEnabled", !1);
}
};
return i([ classId("PixelBitControllerTrait") ], t);
}(Trait);
r.PixelBitControllerTrait = l;
cc._RF.pop();
}, {} ]
}, {}, [ "PixelBitControllerTrait" ]);
//# sourceMappingURL=index.js.map
