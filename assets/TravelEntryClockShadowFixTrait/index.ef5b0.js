window.__require = function t(e, r, o) {
function n(a, u) {
if (!r[a]) {
if (!e[a]) {
var c = a.split("/");
c = c[c.length - 1];
if (!e[c]) {
var l = "function" == typeof __require && __require;
if (!u && l) return l(c, !0);
if (i) return i(c, !0);
throw new Error("Cannot find module '" + a + "'");
}
a = c;
}
var s = r[a] = {
exports: {}
};
e[a][0].call(s.exports, function(t) {
return n(e[a][1][t] || t);
}, s, s.exports, t, e, r, o);
}
return r[a].exports;
}
for (var i = "function" == typeof __require && __require, a = 0; a < o.length; a++) n(o[a]);
return n;
}({
TravelEntryClockShadowFixTrait: [ function(t, e, r) {
"use strict";
cc._RF.push(e, "1751erUfSpHzaMccLd94BSu", "TravelEntryClockShadowFixTrait");
var o, n = this && this.__extends || (o = function(t, e) {
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
}), i = this && this.__decorate || function(t, e, r, o) {
var n, i = arguments.length, a = i < 3 ? e : null === o ? o = Object.getOwnPropertyDescriptor(e, r) : o;
if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) a = Reflect.decorate(t, e, r, o); else for (var u = t.length - 1; u >= 0; u--) (n = t[u]) && (a = (i < 3 ? n(a) : i > 3 ? n(e, r, a) : n(e, r)) || a);
return i > 3 && a && Object.defineProperty(e, r, a), a;
};
Object.defineProperty(r, "__esModule", {
value: !0
});
r.TravelEntryClockShadowFixTrait = void 0;
var a = function(t) {
n(e, t);
function e() {
var e = null !== t && t.apply(this, arguments) || this;
e._timerCountdownNode = null;
e.countdownTimer = null;
return e;
}
e.prototype.getCurrentTime = function() {
var t = new Date();
return {
hour: t.getHours() % 12,
minute: t.getMinutes(),
second: t.getSeconds()
};
};
e.prototype.onActive = function(t) {
var e = this;
if (hs.tp.isTravelEntryClockShadowTraitSetCurrentTime(t)) {
t.replace = !0;
this._timerCountdownNode = t.args[0];
var r = this._timerCountdownNode.getChildByName("main_time_hour"), o = this._timerCountdownNode.getChildByName("main_time_min_left"), n = this._timerCountdownNode.getChildByName("main_time_hour_light"), i = this._timerCountdownNode.getChildByName("main_time_min_light"), a = this._timerCountdownNode.getChildByName("main_time_hour_shadow"), u = this._timerCountdownNode.getChildByName("main_time_min_left_shadow");
this.disposeTimers();
var c = function() {
if (cc.isValid(e._timerCountdownNode)) {
var t = e.getCurrentTime(), c = t.hour, l = t.minute, s = t.second, d = -360 * (c + l / 60 + s / 3600) / 12, _ = -360 * (l + s / 60) / 60;
r && (r.angle = d);
o && (o.angle = _);
n && (n.angle = d);
i && (i.angle = _);
a && (a.angle = d);
u && (u.angle = _);
} else e.disposeTimers();
};
c();
this.countdownTimer = window.setInterval(c, 5e3);
}
};
e.prototype.disposeTimers = function() {
if (this.countdownTimer) {
clearInterval(this.countdownTimer);
this.countdownTimer = null;
}
};
e.prototype.onDestroy = function() {
this.disposeTimers();
};
return i([ classId("TravelEntryClockShadowFixTrait") ], e);
}(Trait);
r.TravelEntryClockShadowFixTrait = a;
cc._RF.pop();
}, {} ]
}, {}, [ "TravelEntryClockShadowFixTrait" ]);
//# sourceMappingURL=index.js.map
