window.__require = function e(t, r, i) {
function o(c, s) {
if (!r[c]) {
if (!t[c]) {
var a = c.split("/");
a = a[a.length - 1];
if (!t[a]) {
var h = "function" == typeof __require && __require;
if (!s && h) return h(a, !0);
if (n) return n(a, !0);
throw new Error("Cannot find module '" + c + "'");
}
c = a;
}
var u = r[c] = {
exports: {}
};
t[c][0].call(u.exports, function(e) {
return o(t[c][1][e] || e);
}, u, u.exports, e, t, r, i);
}
return r[c].exports;
}
for (var n = "function" == typeof __require && __require, c = 0; c < i.length; c++) o(i[c]);
return o;
}({
DecreaseReviveUIShowByLimitHighScoreTrait: [ function(e, t, r) {
"use strict";
cc._RF.push(t, "27badvQtAZKWZbFXm0wQC+5", "DecreaseReviveUIShowByLimitHighScoreTrait");
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
r.DecreaseReviveUIShowByLimitHighScoreTrait = void 0;
var c = function(e) {
o(t, e);
function t() {
return null !== e && e.apply(this, arguments) || this;
}
t.prototype.onActive = function(e) {
if (hs.tp.isClassRevive_ProxyChangeLastReviveResult(e)) {
if (!this.isOpen()) return;
this.handleReviveLimit(e);
}
};
t.prototype.handleReviveLimit = function(e) {
var t = hs.classScoreInfo.score, r = hs.scoreInfo.highRecordScore;
if (!(r <= 0)) {
var i = this.props, o = i.highScoreThreshold, n = i.threshold1, c = i.threshold2, s = i.threshold3, a = this.isFirstGameToday();
t > r * ((r >= o ? a ? n : c : s) / 100) && (e.args[0] = !1);
}
};
t.prototype.isFirstGameToday = function() {
var e = hs.classDataStatisticsInfo.todayGameNum;
return hs.classGameInfo.gameNum === e;
};
t.prototype.isOpen = function() {
return !0;
};
return n([ classId("DecreaseReviveUIShowByLimitHighScoreTrait"), classMethodWatch() ], t);
}(Trait);
r.DecreaseReviveUIShowByLimitHighScoreTrait = c;
cc._RF.pop();
}, {} ]
}, {}, [ "DecreaseReviveUIShowByLimitHighScoreTrait" ]);
//# sourceMappingURL=index.js.map
