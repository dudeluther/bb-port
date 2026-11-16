window.__require = function t(e, o, n) {
function i(a, l) {
if (!o[a]) {
if (!e[a]) {
var c = a.split("/");
c = c[c.length - 1];
if (!e[c]) {
var u = "function" == typeof __require && __require;
if (!l && u) return u(c, !0);
if (r) return r(c, !0);
throw new Error("Cannot find module '" + a + "'");
}
a = c;
}
var s = o[a] = {
exports: {}
};
e[a][0].call(s.exports, function(t) {
return i(e[a][1][t] || t);
}, s, s.exports, t, e, o, n);
}
return o[a].exports;
}
for (var r = "function" == typeof __require && __require, a = 0; a < n.length; a++) i(n[a]);
return i;
}({
CommonGameListDownloadWayEx2Trait: [ function(t, e, o) {
"use strict";
cc._RF.push(e, "beea06js/tIfIAoTmWWMvLh", "CommonGameListDownloadWayEx2Trait");
var n, i = this && this.__extends || (n = function(t, e) {
return (n = Object.setPrototypeOf || {
__proto__: []
} instanceof Array && function(t, e) {
t.__proto__ = e;
} || function(t, e) {
for (var o in e) Object.prototype.hasOwnProperty.call(e, o) && (t[o] = e[o]);
})(t, e);
}, function(t, e) {
n(t, e);
function o() {
this.constructor = t;
}
t.prototype = null === e ? Object.create(e) : (o.prototype = e.prototype, new o());
}), r = this && this.__decorate || function(t, e, o, n) {
var i, r = arguments.length, a = r < 3 ? e : null === n ? n = Object.getOwnPropertyDescriptor(e, o) : n;
if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) a = Reflect.decorate(t, e, o, n); else for (var l = t.length - 1; l >= 0; l--) (i = t[l]) && (a = (r < 3 ? i(a) : r > 3 ? i(e, o, a) : i(e, o)) || a);
return r > 3 && a && Object.defineProperty(e, o, a), a;
};
Object.defineProperty(o, "__esModule", {
value: !0
});
o.CommonGameListDownloadWayEx2Trait = void 0;
var a = function(t) {
i(e, t);
function e() {
var e = null !== t && t.apply(this, arguments) || this;
e._downloadWakeupTimer = null;
return e;
}
Object.defineProperty(e.prototype, "localInfo", {
get: function() {
return hs.storage.getItem("CommonGameListDownloadWayEx2Trait_T", null);
},
set: function(t) {
hs.storage.setItem("CommonGameListDownloadWayEx2Trait_T", t);
},
enumerable: !1,
configurable: !0
});
e.prototype.onCreate = function() {
this.initLocalInfo();
};
e.prototype.initLocalInfo = function() {
if (!this.localInfo) {
var t = {
hitTimestamp: hs.gameInfo.firstEntryTime,
active: !1
}, e = hs.getDiffDays(t.hitTimestamp, Date.now());
t.active = e <= 1;
this.localInfo = t;
}
};
Object.defineProperty(e.prototype, "hitTimestamp", {
get: function() {
return this.localInfo.hitTimestamp;
},
enumerable: !1,
configurable: !0
});
Object.defineProperty(e.prototype, "onActiveCondition", {
get: function() {
return this.localInfo.active;
},
enumerable: !1,
configurable: !0
});
e.prototype.isCommonGameListTraitCheckDefaultDownload = function(t) {
var e = this, o = Math.max(0, hs.getDiffDays(this.hitTimestamp, Date.now()));
if (this.props.xDays <= 0 || o >= this.props.xDays) this.clearDownloadWakeupTimer(); else {
t.replace = !0;
if (null === this._downloadWakeupTimer) {
var n = new Date();
n.setHours(24, 0, 0, 0);
this._downloadWakeupTimer = setTimeout(function() {
e._downloadWakeupTimer = null;
e.recheckDefaultDownload();
}, Math.max(1, n.getTime() - Date.now()));
}
}
};
e.prototype.onLifecycleGameEventShow = function() {
this.recheckDefaultDownload();
};
e.prototype.recheckDefaultDownload = function() {
if (this.active && this.localInfo.active) {
var t = TRAIT("CommonGameListTrait");
(null == t ? void 0 : t.active) && t.checkDefaultDownload();
}
};
e.prototype.clearDownloadWakeupTimer = function() {
if (null !== this._downloadWakeupTimer) {
clearTimeout(this._downloadWakeupTimer);
this._downloadWakeupTimer = null;
}
};
e.prototype.onDisable = function() {
this.clearDownloadWakeupTimer();
};
return r([ classId("CommonGameListDownloadWayEx2Trait") ], e);
}(Trait);
o.CommonGameListDownloadWayEx2Trait = a;
cc._RF.pop();
}, {} ]
}, {}, [ "CommonGameListDownloadWayEx2Trait" ]);
//# sourceMappingURL=index.js.map
