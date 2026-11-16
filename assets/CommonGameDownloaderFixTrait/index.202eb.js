window.__require = function o(e, t, n) {
function r(i, l) {
if (!t[i]) {
if (!e[i]) {
var c = i.split("/");
c = c[c.length - 1];
if (!e[c]) {
var f = "function" == typeof __require && __require;
if (!l && f) return f(c, !0);
if (a) return a(c, !0);
throw new Error("Cannot find module '" + i + "'");
}
i = c;
}
var u = t[i] = {
exports: {}
};
e[i][0].call(u.exports, function(o) {
return r(e[i][1][o] || o);
}, u, u.exports, o, e, t, n);
}
return t[i].exports;
}
for (var a = "function" == typeof __require && __require, i = 0; i < n.length; i++) r(n[i]);
return r;
}({
CommonGameDownloaderFixTrait: [ function(o, e, t) {
"use strict";
cc._RF.push(e, "cec16oMZOpHRKE+ltN26lxs", "CommonGameDownloaderFixTrait");
var n, r, a = this && this.__extends || (n = function(o, e) {
return (n = Object.setPrototypeOf || {
__proto__: []
} instanceof Array && function(o, e) {
o.__proto__ = e;
} || function(o, e) {
for (var t in e) Object.prototype.hasOwnProperty.call(e, t) && (o[t] = e[t]);
})(o, e);
}, function(o, e) {
n(o, e);
function t() {
this.constructor = o;
}
o.prototype = null === e ? Object.create(e) : (t.prototype = e.prototype, new t());
}), i = this && this.__decorate || function(o, e, t, n) {
var r, a = arguments.length, i = a < 3 ? e : null === n ? n = Object.getOwnPropertyDescriptor(e, t) : n;
if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) i = Reflect.decorate(o, e, t, n); else for (var l = o.length - 1; l >= 0; l--) (r = o[l]) && (i = (a < 3 ? r(i) : a > 3 ? r(e, t, i) : r(e, t)) || i);
return a > 3 && i && Object.defineProperty(e, t, i), i;
};
Object.defineProperty(t, "__esModule", {
value: !0
});
t.CommonGameDownloaderFixTrait = void 0;
(function(o) {
(function(o) {
o[o.LEGACY = 1] = "LEGACY";
o[o.SAND = 2] = "SAND";
o[o.ATOM = 3] = "ATOM";
o[o.CHAPTER = 5] = "CHAPTER";
})(o.GameType || (o.GameType = {}));
(function(o) {
o[o.NONE = 0] = "NONE";
o[o.PENDING = 1] = "PENDING";
o[o.SUCCESS = 2] = "SUCCESS";
o[o.FAIL = 3] = "FAIL";
})(o.DownloadState || (o.DownloadState = {}));
(function(o) {
o[o.DEFAULT = 1] = "DEFAULT";
o[o.CLICK = 2] = "CLICK";
})(o.DownloadTrigger || (o.DownloadTrigger = {}));
})(r || (r = {}));
var l = function(o) {
a(e, o);
function e() {
return null !== o && o.apply(this, arguments) || this;
}
e.prototype.onActive = function(o) {
hs.tp.isCommonGameListGamesFixGameInfo(o) && this.fixGameInfo(o);
};
e.prototype.fixGameInfo = function(o) {
var e = TRAIT("CommonGameListTrait");
if (null == e ? void 0 : e.active) {
o.args[0].forEach(function(o) {
var t, n = o;
if (o.type !== r.GameType.ATOM) if (o.type !== r.GameType.LEGACY) o.download = o.download === r.DownloadState.SUCCESS && e.checkGameDownloadState(n) ? r.DownloadState.SUCCESS : r.DownloadState.NONE; else {
if (null === (t = TRAIT("SmallgameLocalResTrait")) || void 0 === t ? void 0 : t.active) {
o.download = r.DownloadState.SUCCESS;
return;
}
o.download = o.download === r.DownloadState.SUCCESS ? r.DownloadState.SUCCESS : r.DownloadState.NONE;
} else {
o.download = r.DownloadState.NONE;
e.checkGameDownloadState(n);
}
});
o.replace = !0;
}
};
return i([ classId("CommonGameDownloaderFixTrait") ], e);
}(Trait);
t.CommonGameDownloaderFixTrait = l;
cc._RF.pop();
}, {} ]
}, {}, [ "CommonGameDownloaderFixTrait" ]);
//# sourceMappingURL=index.js.map
