window.__require = function e(n, t, r) {
function i(s, a) {
if (!t[s]) {
if (!n[s]) {
var h = s.split("/");
h = h[h.length - 1];
if (!n[h]) {
var l = "function" == typeof __require && __require;
if (!a && l) return l(h, !0);
if (o) return o(h, !0);
throw new Error("Cannot find module '" + s + "'");
}
s = h;
}
var c = t[s] = {
exports: {}
};
n[s][0].call(c.exports, function(e) {
return i(n[s][1][e] || e);
}, c, c.exports, e, n, t, r);
}
return t[s].exports;
}
for (var o = "function" == typeof __require && __require, s = 0; s < r.length; s++) i(r[s]);
return i;
}({
HighProgressShowBannerTrait: [ function(e, n, t) {
"use strict";
cc._RF.push(n, "7c27cVNDcZEkIfMt2YcIn9h", "HighProgressShowBannerTrait");
var r, i = this && this.__extends || (r = function(e, n) {
return (r = Object.setPrototypeOf || {
__proto__: []
} instanceof Array && function(e, n) {
e.__proto__ = n;
} || function(e, n) {
for (var t in n) Object.prototype.hasOwnProperty.call(n, t) && (e[t] = n[t]);
})(e, n);
}, function(e, n) {
r(e, n);
function t() {
this.constructor = e;
}
e.prototype = null === n ? Object.create(n) : (t.prototype = n.prototype, new t());
}), o = this && this.__decorate || function(e, n, t, r) {
var i, o = arguments.length, s = o < 3 ? n : null === r ? r = Object.getOwnPropertyDescriptor(n, t) : r;
if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) s = Reflect.decorate(e, n, t, r); else for (var a = e.length - 1; a >= 0; a--) (i = e[a]) && (s = (o < 3 ? i(s) : o > 3 ? i(n, t, s) : i(n, t)) || s);
return o > 3 && s && Object.defineProperty(n, t, s), s;
};
Object.defineProperty(t, "__esModule", {
value: !0
});
t.HighProgressShowBannerTrait = void 0;
var s = function(e) {
i(n, e);
function n() {
var n = null !== e && e.apply(this, arguments) || this;
n.HIGH_PROGRESS_THRESHOLD = .8;
n._bannerShowing = !1;
return n;
}
Object.defineProperty(n.prototype, "onActiveCondition", {
get: function() {
return this.isCanActive() && this.otherTraitActiveCondition();
},
enumerable: !1,
configurable: !0
});
n.prototype.isCanActive = function() {
return !0;
};
n.prototype.otherTraitActiveCondition = function() {
return !0;
};
n.prototype.isSkip = function() {
return !1;
};
n.prototype.onActive = function(e) {
var n, t, r, i, o, s, a, h, l, c, u, v;
if (hs.tp.isAdvertisement_Banner_ProxyOnBannerShow(e)) {
if (this.isSkip()) return;
if (hs.UI.activeState(hs.PrefabConfig.GameLobbyMainView.url)) {
hs.NativeAd.callNativeBannerGone("0");
this._bannerShowing = !1;
e.replace = !0;
null === (t = null === (n = hs.EventManager) || void 0 === n ? void 0 : n.dispatchModuleEvent) || void 0 === t || t.call(n, new hs.E_Advertisement_BannerHide());
} else if ((null === (r = hs.gameInfo) || void 0 === r ? void 0 : r.gameType) === hs.GameType.Class && this.isEndlessHighProgress() && hs.classGameInfo.gameNum > 0 || (null === (i = hs.gameInfo) || void 0 === i ? void 0 : i.gameType) === hs.GameType.Chapter && this.isTravelHighProgress()) {
hs.NativeAd.callNativeBannerGone("1");
this._bannerShowing = !0;
} else {
hs.NativeAd.callNativeBannerGone("0");
this._bannerShowing = !1;
e.replace = !0;
null === (s = null === (o = hs.EventManager) || void 0 === o ? void 0 : o.dispatchModuleEvent) || void 0 === s || s.call(o, new hs.E_Advertisement_BannerHide());
}
}
if (hs.tp.isJewelGame_ProxyOnJewelGameStart(e)) {
this._bannerShowing = !1;
null === (h = null === (a = hs.EventManager) || void 0 === a ? void 0 : a.dispatchModuleEvent) || void 0 === h || h.call(a, new hs.E_Advertisement_BannerHide());
}
if (hs.tp.isClassScore_ProxyComputeScoreAddOption(e) && !this._bannerShowing && this.isEndlessHighProgress() && hs.classGameInfo.gameNum > 0) {
this._bannerShowing = !0;
null === (c = null === (l = hs.EventManager) || void 0 === l ? void 0 : l.dispatchModuleEvent) || void 0 === c || c.call(l, new hs.E_Advertisement_BannerShow());
}
if (hs.tp.isChapterScore_ProxyOnTouchEnd(e) && !this._bannerShowing && this.isTravelHighProgress()) {
this._bannerShowing = !0;
null === (v = null === (u = hs.EventManager) || void 0 === u ? void 0 : u.dispatchModuleEvent) || void 0 === v || v.call(u, new hs.E_Advertisement_BannerShow());
}
};
n.prototype.isEndlessHighProgress = function() {
var e, n, t, r, i = null !== (n = null === (e = hs.classScoreInfo) || void 0 === e ? void 0 : e.score) && void 0 !== n ? n : 0, o = null !== (r = null === (t = hs.classScoreInfo) || void 0 === t ? void 0 : t.highScore) && void 0 !== r ? r : 0;
return !(o <= 0) && i >= o * this.HIGH_PROGRESS_THRESHOLD;
};
n.prototype.isTravelHighProgress = function() {
var e, n, t;
return (null !== (t = null === (n = null === (e = hs.chapterConfigInfo) || void 0 === e ? void 0 : e.getChapterProgress) || void 0 === n ? void 0 : n.call(e)) && void 0 !== t ? t : 0) >= this.HIGH_PROGRESS_THRESHOLD;
};
n.prototype.resetBannerNativeSwitch = function() {
hs.NativeAd.callNativeBannerGone("1");
this._bannerShowing = !0;
};
return o([ classId("HighProgressShowBannerTrait"), classMethodWatch() ], n);
}(Trait);
t.HighProgressShowBannerTrait = s;
cc._RF.pop();
}, {} ]
}, {}, [ "HighProgressShowBannerTrait" ]);
//# sourceMappingURL=index.js.map
