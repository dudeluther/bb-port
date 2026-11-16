window.__require = function e(t, r, o) {
function i(a, f) {
if (!r[a]) {
if (!t[a]) {
var l = a.split("/");
l = l[l.length - 1];
if (!t[l]) {
var c = "function" == typeof __require && __require;
if (!f && c) return c(l, !0);
if (n) return n(l, !0);
throw new Error("Cannot find module '" + a + "'");
}
a = l;
}
var p = r[a] = {
exports: {}
};
t[a][0].call(p.exports, function(e) {
return i(t[a][1][e] || e);
}, p, p.exports, e, t, r, o);
}
return r[a].exports;
}
for (var n = "function" == typeof __require && __require, a = 0; a < o.length; a++) i(o[a]);
return i;
}({
CTRefactorLevelWayHelpConfigTrait: [ function(e, t, r) {
"use strict";
cc._RF.push(t, "caae1yV+cdCa7wRNLeb3rYN", "CTRefactorLevelWayHelpConfigTrait");
var o, i = this && this.__extends || (o = function(e, t) {
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
}), n = this && this.__decorate || function(e, t, r, o) {
var i, n = arguments.length, a = n < 3 ? t : null === o ? o = Object.getOwnPropertyDescriptor(t, r) : o;
if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) a = Reflect.decorate(e, t, r, o); else for (var f = e.length - 1; f >= 0; f--) (i = e[f]) && (a = (n < 3 ? i(a) : n > 3 ? i(t, r, a) : i(t, r)) || a);
return n > 3 && a && Object.defineProperty(t, r, a), a;
};
Object.defineProperty(r, "__esModule", {
value: !0
});
r.CTRefactorLevelWayHelpConfigTrait = void 0;
var a = function(e) {
i(t, e);
function t() {
return null !== e && e.apply(this, arguments) || this;
}
t.prototype.onAlgorithmStrategySessionInit = function() {
var e, t = TRAIT("CTRefactorChapterAlgoStrategyTrait"), r = ((e = {}).trytimes = hs.tryTimeConfig, 
e)[this.props.fileCfg];
(null == t ? void 0 : t.active) && t.setState({
tryTimesJsonData: r
});
};
t.prototype.logLevelWayHelpConfig = function(e) {
var t, r = hs.chapterGameInfo.chapterNum;
if (!this.isLevelWayHelpClosed()) {
var o = null === (t = null == e ? void 0 : e[0]) || void 0 === t ? void 0 : t.tryTimes, i = Array.isArray(o) && o.length > r;
i && (i && o[r], hs.chapterGameInfo.tryTimes);
}
};
t.prototype.isLevelWayHelpClosed = function() {
var e, t = TRAIT("CTRefactorLevelWayHelpTrait");
return !0 === (null == t ? void 0 : t.active) && 0 == (null === (e = t.props) || void 0 === e ? void 0 : e.firing);
};
return n([ classId("CTRefactorLevelWayHelpConfigTrait") ], t);
}(Trait);
r.CTRefactorLevelWayHelpConfigTrait = a;
cc._RF.pop();
}, {} ]
}, {}, [ "CTRefactorLevelWayHelpConfigTrait" ]);
//# sourceMappingURL=index.js.map
