window.__require = function t(e, r, n) {
function i(o, p) {
if (!r[o]) {
if (!e[o]) {
var u = o.split("/");
u = u[u.length - 1];
if (!e[u]) {
var c = "function" == typeof __require && __require;
if (!p && c) return c(u, !0);
if (a) return a(u, !0);
throw new Error("Cannot find module '" + o + "'");
}
o = u;
}
var s = r[o] = {
exports: {}
};
e[o][0].call(s.exports, function(t) {
return i(e[o][1][t] || t);
}, s, s.exports, t, e, r, n);
}
return r[o].exports;
}
for (var a = "function" == typeof __require && __require, o = 0; o < n.length; o++) i(n[o]);
return i;
}({
ZX_CampaignAdStrategy2Trait: [ function(t, e, r) {
"use strict";
cc._RF.push(e, "2739dGWzrhHDYvePhwnNXID", "ZX_CampaignAdStrategy2Trait");
var n, i = this && this.__extends || (n = function(t, e) {
return (n = Object.setPrototypeOf || {
__proto__: []
} instanceof Array && function(t, e) {
t.__proto__ = e;
} || function(t, e) {
for (var r in e) Object.prototype.hasOwnProperty.call(e, r) && (t[r] = e[r]);
})(t, e);
}, function(t, e) {
n(t, e);
function r() {
this.constructor = t;
}
t.prototype = null === e ? Object.create(e) : (r.prototype = e.prototype, new r());
}), a = this && this.__decorate || function(t, e, r, n) {
var i, a = arguments.length, o = a < 3 ? e : null === n ? n = Object.getOwnPropertyDescriptor(e, r) : n;
if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) o = Reflect.decorate(t, e, r, n); else for (var p = t.length - 1; p >= 0; p--) (i = t[p]) && (o = (a < 3 ? i(o) : a > 3 ? i(e, r, o) : i(e, r)) || o);
return a > 3 && o && Object.defineProperty(e, r, o), o;
};
Object.defineProperty(r, "__esModule", {
value: !0
});
r.ZX_CampaignAdStrategy2Trait = void 0;
var o = function(t) {
i(e, t);
function e() {
return null !== t && t.apply(this, arguments) || this;
}
r = e;
Object.defineProperty(e.prototype, "onActiveCondition", {
get: function() {
return hs.gameInfo.gameMode === hs.GameMode.Class || hs.gameInfo.gameMode === hs.GameMode.Chapter;
},
enumerable: !1,
configurable: !0
});
e.prototype.onCreate = function() {
this.isTargetCampaign();
};
e.prototype.getTargetCampaign = function() {
var t, e;
return null !== (e = null === (t = hs.attributionInfo) || void 0 === t ? void 0 : t.campaign) && void 0 !== e ? e : "";
};
e.prototype.isTargetCampaign = function() {
var t, e = this.getTargetCampaign();
return -1 !== ((null === (t = this.props) || void 0 === t ? void 0 : t.campaigns) || []).indexOf(e);
};
e.prototype.registerGmMenu = function() {
var t = this;
if (!r._gmRegistered) {
r._gmRegistered = !0;
var e = {
title: "专项BB Camp2-修改campaign",
argName: "设置值",
explainStr: [ "改写归因 campaign", "c 或 r：清除覆盖" ].join("\n"),
action: function(e) {
return t.applyGmCampaign(e);
}
};
hs.classGmCfgMenuTrait.push(e);
hs.chapterGmCfgMenuTrait.push(e);
}
};
e.prototype.applyGmCampaign = function(t) {
(null != t ? t : "").trim();
};
e.prototype.diagnostics = function() {
return "campaign=" + this.getTargetCampaign() + " day=" + this.getInstallDay() + " ";
};
e.prototype.getInstallDay = function() {
var t, e, r = null !== (e = null === (t = hs.gameInfo) || void 0 === t ? void 0 : t.installTime) && void 0 !== e ? e : 0;
return !r || r <= 0 ? 0 : hs.getDiffDays(r, Date.now());
};
var r;
e._gmRegistered = !1;
return r = a([ classId("ZX_CampaignAdStrategy2Trait") ], e);
}(Trait);
r.ZX_CampaignAdStrategy2Trait = o;
cc._RF.pop();
}, {} ]
}, {}, [ "ZX_CampaignAdStrategy2Trait" ]);
//# sourceMappingURL=index.js.map
