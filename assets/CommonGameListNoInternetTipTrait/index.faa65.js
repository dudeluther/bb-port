window.__require = function t(e, i, o) {
function n(s, a) {
if (!i[s]) {
if (!e[s]) {
var p = s.split("/");
p = p[p.length - 1];
if (!e[p]) {
var c = "function" == typeof __require && __require;
if (!a && c) return c(p, !0);
if (r) return r(p, !0);
throw new Error("Cannot find module '" + s + "'");
}
s = p;
}
var l = i[s] = {
exports: {}
};
e[s][0].call(l.exports, function(t) {
return n(e[s][1][t] || t);
}, l, l.exports, t, e, i, o);
}
return i[s].exports;
}
for (var r = "function" == typeof __require && __require, s = 0; s < o.length; s++) n(o[s]);
return n;
}({
CommonGameListNoInternetTipTrait: [ function(t, e, i) {
"use strict";
cc._RF.push(e, "077dcwV1ZpGMI4MwIty1zs+", "CommonGameListNoInternetTipTrait");
var o, n = this && this.__extends || (o = function(t, e) {
return (o = Object.setPrototypeOf || {
__proto__: []
} instanceof Array && function(t, e) {
t.__proto__ = e;
} || function(t, e) {
for (var i in e) Object.prototype.hasOwnProperty.call(e, i) && (t[i] = e[i]);
})(t, e);
}, function(t, e) {
o(t, e);
function i() {
this.constructor = t;
}
t.prototype = null === e ? Object.create(e) : (i.prototype = e.prototype, new i());
}), r = this && this.__decorate || function(t, e, i, o) {
var n, r = arguments.length, s = r < 3 ? e : null === o ? o = Object.getOwnPropertyDescriptor(e, i) : o;
if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) s = Reflect.decorate(t, e, i, o); else for (var a = t.length - 1; a >= 0; a--) (n = t[a]) && (s = (r < 3 ? n(s) : r > 3 ? n(e, i, s) : n(e, i)) || s);
return r > 3 && s && Object.defineProperty(e, i, s), s;
};
Object.defineProperty(i, "__esModule", {
value: !0
});
i.CommonGameListNoInternetTipTrait = void 0;
var s = function(t) {
n(e, t);
function e() {
var e = null !== t && t.apply(this, arguments) || this;
e._tipsPrefab = null;
e._tipsNode = null;
e._isShowing = !1;
return e;
}
e.prototype.onCreate = function() {
this.preloadTipsPrefab();
};
e.prototype.onActive = function(t) {
hs.tp.isCommonGameListTraitIsDownloadEnabled(t) && this.handleIsDownloadEnabled(t);
};
e.prototype.preloadTipsPrefab = function() {
var t = this;
hs.ResLoader.loadByBundle("CommonGameListNoInternetTipTrait", "prefabs/tips", cc.Prefab, function(e, i) {
!e && cc.isValid(i) && (t._tipsPrefab = i);
});
};
e.prototype.handleIsDownloadEnabled = function(t) {
if (!this.isNetworkAvailable()) {
this.showNoInternetTip();
t.returnValue = !1;
t.returnState = !0;
}
};
e.prototype.isNetworkAvailable = function() {
var t;
try {
if (null === (t = hs.NativeNetwork) || void 0 === t ? void 0 : t.getNetWorkState) return hs.NativeNetwork.getNetWorkState();
if (cc.sys.getNetworkType) return cc.sys.getNetworkType() !== cc.sys.NetworkType.NONE;
if ("undefined" != typeof navigator && "onLine" in navigator) return navigator.onLine;
} catch (t) {}
return !0;
};
e.prototype.showNoInternetTip = function() {
var t = this;
if (this._isShowing) ; else {
var e = hs.tipLayer;
e && cc.isValid(e) && (this._tipsPrefab ? this.createAndShowTips(e) : hs.ResLoader.loadByBundle("CommonGameListNoInternetTipTrait", "prefabs/tips", cc.Prefab, function(i, o) {
if (!i && cc.isValid(o) && cc.isValid(e)) {
t._tipsPrefab = o;
t.createAndShowTips(e);
}
}));
}
};
e.prototype.createAndShowTips = function(t) {
var e = this;
if (!this._isShowing && cc.isValid(t)) {
this._isShowing = !0;
this._tipsNode = cc.instantiate(this._tipsPrefab);
this.applyCustomTipContent(this._tipsNode);
t.addChild(this._tipsNode, 1e3);
this._tipsNode.setPosition(t.width / 2, t.height / 2);
this._tipsNode.opacity = 255;
cc.tween(this._tipsNode).delay(1).to(.2, {
opacity: 0
}).call(function() {
e.cleanupTips();
}).start();
}
};
e.prototype.applyCustomTipContent = function(t) {
var e, i, o = null === (i = null === (e = this.props) || void 0 === e ? void 0 : e.tipContent) || void 0 === i ? void 0 : i.trim();
if (o && cc.isValid(t)) {
var n = t.getComponentsInChildren(cc.Label);
n && 0 !== n.length && (n[0].string = o);
}
};
e.prototype.cleanupTips = function() {
cc.isValid(this._tipsNode) && this._tipsNode.destroy();
this._tipsNode = null;
this._isShowing = !1;
};
return r([ classId("CommonGameListNoInternetTipTrait") ], e);
}(Trait);
i.CommonGameListNoInternetTipTrait = s;
cc._RF.pop();
}, {} ]
}, {}, [ "CommonGameListNoInternetTipTrait" ]);
//# sourceMappingURL=index.js.map
