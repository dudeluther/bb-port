window.__require = function e(t, r, i) {
function o(c, s) {
if (!r[c]) {
if (!t[c]) {
var a = c.split("/");
a = a[a.length - 1];
if (!t[a]) {
var l = "function" == typeof __require && __require;
if (!s && l) return l(a, !0);
if (n) return n(a, !0);
throw new Error("Cannot find module '" + c + "'");
}
c = a;
}
var h = r[c] = {
exports: {}
};
t[c][0].call(h.exports, function(e) {
return o(t[c][1][e] || e);
}, h, h.exports, e, t, r, i);
}
return r[c].exports;
}
for (var n = "function" == typeof __require && __require, c = 0; c < i.length; c++) o(i[c]);
return o;
}({
InactiveIconBreakTrait: [ function(e, t, r) {
"use strict";
cc._RF.push(t, "84f513gAE1F05C7BSFiVCd3", "InactiveIconBreakTrait");
var i, o = this && this.__extends || (i = function(e, t) {
return (i = Object.setPrototypeOf || {
__proto__: []
} instanceof Array && function(e, t) {
e.__proto__ = t;
} || function(e, t) {
for (var r in t) Object.prototype.hasOwnProperty.call(t, r) && (e[r] = t[r]);
})(e, t);
}, function(e, t) {
i(e, t);
function r() {
this.constructor = e;
}
e.prototype = null === t ? Object.create(t) : (r.prototype = t.prototype, new r());
}), n = this && this.__decorate || function(e, t, r, i) {
var o, n = arguments.length, c = n < 3 ? t : null === i ? i = Object.getOwnPropertyDescriptor(t, r) : i;
if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) c = Reflect.decorate(e, t, r, i); else for (var s = e.length - 1; s >= 0; s--) (o = e[s]) && (c = (n < 3 ? o(c) : n > 3 ? o(t, r, c) : o(t, r)) || c);
return n > 3 && c && Object.defineProperty(t, r, c), c;
};
Object.defineProperty(r, "__esModule", {
value: !0
});
r.InactiveIconBreakTrait = void 0;
var c = function(e) {
o(t, e);
function t() {
var t = null !== e && e.apply(this, arguments) || this;
t._hasRefreshedActive = !1;
t._schemeDelivered = !1;
t._refreshTimer = null;
return t;
}
t.prototype.onCreate = function() {
var e = this, t = hs.storage.getItem("InactiveIconBreakTrait_T", {
schemeDelivered: !1
});
this._schemeDelivered = t.schemeDelivered;
this._refreshTimer = setInterval(function() {
e._hasRefreshedActive && e.callSetUserActiveForInactiveIcon();
}, 36e5);
};
t.prototype.onDisable = function() {
this.stopRefreshTimer();
};
t.prototype.stopRefreshTimer = function() {
if (null !== this._refreshTimer) {
clearInterval(this._refreshTimer);
this._refreshTimer = null;
}
};
t.prototype.onActive = function(e) {
var t, r, i, o, n, c, s, a, l, h, v;
if (hs.tp.isHomePage_ProxyShowHomePage(e)) {
if (1 !== (null === (t = this.props) || void 0 === t ? void 0 : t.restoreCondition)) return;
var p = null !== (i = null === (r = this.props) || void 0 === r ? void 0 : r.ICONType) && void 0 !== i ? i : "brokena";
this.deliverSchemeOnce(p);
this.callSetUserActiveForInactiveIcon();
this._hasRefreshedActive = !0;
} else if (hs.tp.isClassSkin_ProxyOnGameStart(e)) {
p = null !== (n = null === (o = this.props) || void 0 === o ? void 0 : o.ICONType) && void 0 !== n ? n : "brokena";
this.deliverSchemeOnce(p);
this.callSetUserActiveForInactiveIcon();
this._hasRefreshedActive = !0;
} else if (hs.tp.isChapterSkin_ProxyOnGameStart(e)) {
p = null !== (s = null === (c = this.props) || void 0 === c ? void 0 : c.ICONType) && void 0 !== s ? s : "brokena";
this.deliverSchemeOnce(p);
this.callSetUserActiveForInactiveIcon();
this._hasRefreshedActive = !0;
} else if (hs.tp.isClassSkin_ProxyOnGameHide(e)) {
if (!this._hasRefreshedActive) return;
p = null !== (l = null === (a = this.props) || void 0 === a ? void 0 : a.ICONType) && void 0 !== l ? l : "brokena";
this.callSetUserActiveForInactiveIcon();
} else if (hs.tp.isClassSkin_ProxyOnGameClose(e)) {
if (!this._hasRefreshedActive) return;
p = null !== (v = null === (h = this.props) || void 0 === h ? void 0 : h.ICONType) && void 0 !== v ? v : "brokena";
this.callSetUserActiveForInactiveIcon();
}
};
t.prototype.isIcon_ProxyOnGameInitComplete = function(e) {
e.replace = !0;
e.returnState = !0;
};
t.prototype.deliverSchemeOnce = function(e) {
if (!this._schemeDelivered) {
this.callSetInactiveIconScheme(e);
this._schemeDelivered = !0;
hs.storage.setItem("InactiveIconBreakTrait_T", {
schemeDelivered: !0
});
}
};
t.prototype.callSetInactiveIconScheme = function(e) {
cc.sys.isNative && hs.iconInfo.setIconScheme(e);
};
t.prototype.callSetUserActiveForInactiveIcon = function() {
cc.sys.isNative && hs.NativeIcon.setUserActiveForInactiveIcon();
};
return n([ classId("InactiveIconBreakTrait") ], t);
}(Trait);
r.InactiveIconBreakTrait = c;
cc._RF.pop();
}, {} ]
}, {}, [ "InactiveIconBreakTrait" ]);
//# sourceMappingURL=index.js.map
