window.__require = function e(t, r, o) {
function n(c, a) {
if (!r[c]) {
if (!t[c]) {
var f = c.split("/");
f = f[f.length - 1];
if (!t[f]) {
var u = "function" == typeof __require && __require;
if (!a && u) return u(f, !0);
if (i) return i(f, !0);
throw new Error("Cannot find module '" + c + "'");
}
c = f;
}
var s = r[c] = {
exports: {}
};
t[c][0].call(s.exports, function(e) {
return n(t[c][1][e] || e);
}, s, s.exports, e, t, r, o);
}
return r[c].exports;
}
for (var i = "function" == typeof __require && __require, c = 0; c < o.length; c++) n(o[c]);
return n;
}({
CTRefactorFirstGameScoreTrait: [ function(e, t, r) {
"use strict";
cc._RF.push(t, "c3d4eX2eotMnQ4forPE1eb3", "CTRefactorFirstGameScoreTrait");
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
var n, i = arguments.length, c = i < 3 ? t : null === o ? o = Object.getOwnPropertyDescriptor(t, r) : o;
if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) c = Reflect.decorate(e, t, r, o); else for (var a = e.length - 1; a >= 0; a--) (n = e[a]) && (c = (i < 3 ? n(c) : i > 3 ? n(t, r, c) : n(t, r)) || c);
return i > 3 && c && Object.defineProperty(t, r, c), c;
};
Object.defineProperty(r, "__esModule", {
value: !0
});
r.CTRefactorFirstGameScoreTrait = void 0;
var c = function(e) {
n(t, e);
function t() {
return null !== e && e.apply(this, arguments) || this;
}
t.prototype.injectFirstGameScore = function() {
var e = TRAIT("CTRefactorLaneSchemeTrait");
(null == e ? void 0 : e.active) && 0 == hs.classGameInfo.playCompleteRound && e.setState({
boardScore: 1440,
highScore: e.state.boardScore
});
};
t.prototype.onAlgorithmStrategyGameInit = function(e) {
"preprocessing_LaneScheme" === e && this.injectFirstGameScore();
};
return i([ classId("CTRefactorFirstGameScoreTrait") ], t);
}(Trait);
r.CTRefactorFirstGameScoreTrait = c;
cc._RF.pop();
}, {} ]
}, {}, [ "CTRefactorFirstGameScoreTrait" ]);
//# sourceMappingURL=index.js.map
