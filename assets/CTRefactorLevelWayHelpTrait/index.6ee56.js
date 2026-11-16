window.__require = function e(t, r, o) {
function n(a, c) {
if (!r[a]) {
if (!t[a]) {
var p = a.split("/");
p = p[p.length - 1];
if (!t[p]) {
var l = "function" == typeof __require && __require;
if (!c && l) return l(p, !0);
if (i) return i(p, !0);
throw new Error("Cannot find module '" + a + "'");
}
a = p;
}
var f = r[a] = {
exports: {}
};
t[a][0].call(f.exports, function(e) {
return n(t[a][1][e] || e);
}, f, f.exports, e, t, r, o);
}
return r[a].exports;
}
for (var i = "function" == typeof __require && __require, a = 0; a < o.length; a++) n(o[a]);
return n;
}({
CTRefactorLevelWayHelpTrait: [ function(e, t, r) {
"use strict";
cc._RF.push(t, "5d0a2EklX5Kir2FmBl38AO6", "CTRefactorLevelWayHelpTrait");
var o, n = this && this.__extends || (o = function(e, t) {
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
}), i = this && this.__decorate || function(e, t, r, o) {
var n, i = arguments.length, a = i < 3 ? t : null === o ? o = Object.getOwnPropertyDescriptor(t, r) : o;
if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) a = Reflect.decorate(e, t, r, o); else for (var c = e.length - 1; c >= 0; c--) (n = e[c]) && (a = (i < 3 ? n(a) : i > 3 ? n(t, r, a) : n(t, r)) || a);
return i > 3 && a && Object.defineProperty(t, r, a), a;
};
Object.defineProperty(r, "__esModule", {
value: !0
});
r.CTRefactorLevelWayHelpTrait = void 0;
var a = function(e) {
n(t, e);
function t() {
return null !== e && e.apply(this, arguments) || this;
}
t.prototype.onAlgorithmStrategyGameInit = function(e) {
if ("preprocessAlgorithmData" === e) {
var t = TRAIT("CTRefactorChapterAlgoStrategyTrait");
(null == t ? void 0 : t.active) && 0 == t.state.isOpenLevelHelp && t.setState({
isOpenLevelHelp: 1 == this.props.firing
});
}
};
t.prototype.logCloseLevelWayHelp = function() {
this.props.firing;
};
return i([ classId("CTRefactorLevelWayHelpTrait") ], t);
}(Trait);
r.CTRefactorLevelWayHelpTrait = a;
cc._RF.pop();
}, {} ]
}, {}, [ "CTRefactorLevelWayHelpTrait" ]);
//# sourceMappingURL=index.js.map
