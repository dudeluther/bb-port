window.__require = function r(t, e, o) {
function n(i, f) {
if (!e[i]) {
if (!t[i]) {
var u = i.split("/");
u = u[u.length - 1];
if (!t[u]) {
var p = "function" == typeof __require && __require;
if (!f && p) return p(u, !0);
if (c) return c(u, !0);
throw new Error("Cannot find module '" + i + "'");
}
i = u;
}
var s = e[i] = {
exports: {}
};
t[i][0].call(s.exports, function(r) {
return n(t[i][1][r] || r);
}, s, s.exports, r, t, e, o);
}
return e[i].exports;
}
for (var c = "function" == typeof __require && __require, i = 0; i < o.length; i++) n(o[i]);
return n;
}({
TravelScoreCutoffByProgressTrait: [ function(r, t, e) {
"use strict";
cc._RF.push(t, "04ddcHLPTBKyIOi3KtQ3NQQ", "TravelScoreCutoffByProgressTrait");
var o, n = this && this.__extends || (o = function(r, t) {
return (o = Object.setPrototypeOf || {
__proto__: []
} instanceof Array && function(r, t) {
r.__proto__ = t;
} || function(r, t) {
for (var e in t) Object.prototype.hasOwnProperty.call(t, e) && (r[e] = t[e]);
})(r, t);
}, function(r, t) {
o(r, t);
function e() {
this.constructor = r;
}
r.prototype = null === t ? Object.create(t) : (e.prototype = t.prototype, new e());
}), c = this && this.__decorate || function(r, t, e, o) {
var n, c = arguments.length, i = c < 3 ? t : null === o ? o = Object.getOwnPropertyDescriptor(t, e) : o;
if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) i = Reflect.decorate(r, t, e, o); else for (var f = r.length - 1; f >= 0; f--) (n = r[f]) && (i = (c < 3 ? n(i) : c > 3 ? n(t, e, i) : n(t, e)) || i);
return c > 3 && i && Object.defineProperty(t, e, i), i;
};
Object.defineProperty(e, "__esModule", {
value: !0
});
e.TravelScoreCutoffByProgressTrait = void 0;
var i = function(r) {
n(t, r);
function t() {
return null !== r && r.apply(this, arguments) || this;
}
t.prototype.onActive = function(r) {
hs.tp.isChapterScoreInfoComputeAddScore(r) && this.onComputeAddScore(r);
};
t.prototype.onComputeAddScore = function(r) {
var t, e, o = null === (t = hs.chapterGameInfo) || void 0 === t ? void 0 : t.chapterCondition;
if (o && o.Way === hs.ChapterType.score) {
var n = null === (e = this.props) || void 0 === e ? void 0 : e.per;
if (null != n) {
var c = hs.chapterCollectInfo.collectTotalScore;
c <= 0 || hs.chapterScoreInfo.score / c >= n && (r.args[0].putCount = 0);
}
}
};
return c([ classId("TravelScoreCutoffByProgressTrait") ], t);
}(Trait);
e.TravelScoreCutoffByProgressTrait = i;
cc._RF.pop();
}, {} ]
}, {}, [ "TravelScoreCutoffByProgressTrait" ]);
//# sourceMappingURL=index.js.map
