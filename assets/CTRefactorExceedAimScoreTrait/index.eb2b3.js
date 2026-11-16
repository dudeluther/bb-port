window.__require = function e(t, r, o) {
function c(i, a) {
if (!r[i]) {
if (!t[i]) {
var f = i.split("/");
f = f[f.length - 1];
if (!t[f]) {
var u = "function" == typeof __require && __require;
if (!a && u) return u(f, !0);
if (n) return n(f, !0);
throw new Error("Cannot find module '" + i + "'");
}
i = f;
}
var p = r[i] = {
exports: {}
};
t[i][0].call(p.exports, function(e) {
return c(t[i][1][e] || e);
}, p, p.exports, e, t, r, o);
}
return r[i].exports;
}
for (var n = "function" == typeof __require && __require, i = 0; i < o.length; i++) c(o[i]);
return c;
}({
CTRefactorExceedAimScoreTrait: [ function(e, t, r) {
"use strict";
cc._RF.push(t, "f6a7bjJDR5PKjtM1eb3qLnA", "CTRefactorExceedAimScoreTrait");
var o, c = this && this.__extends || (o = function(e, t) {
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
var c, n = arguments.length, i = n < 3 ? t : null === o ? o = Object.getOwnPropertyDescriptor(t, r) : o;
if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) i = Reflect.decorate(e, t, r, o); else for (var a = e.length - 1; a >= 0; a--) (c = e[a]) && (i = (n < 3 ? c(i) : n > 3 ? c(t, r, i) : c(t, r)) || i);
return n > 3 && i && Object.defineProperty(t, r, i), i;
};
Object.defineProperty(r, "__esModule", {
value: !0
});
r.CTRefactorExceedAimScoreTrait = void 0;
var i = function(e) {
c(t, e);
function t() {
return null !== e && e.apply(this, arguments) || this;
}
t.prototype.injectExceedAimScore = function() {
var e = TRAIT("CTRefactorLaneSchemeTrait");
(null == e ? void 0 : e.active) && e.state.highScore < this.props.score && e.setState({
highScore: this.props.score
});
};
t.prototype.onAlgorithmStrategyGameInit = function(e) {
"preprocessing_LaneScheme" === e && this.injectExceedAimScore();
};
return n([ classId("CTRefactorExceedAimScoreTrait") ], t);
}(Trait);
r.CTRefactorExceedAimScoreTrait = i;
cc._RF.pop();
}, {} ]
}, {}, [ "CTRefactorExceedAimScoreTrait" ]);
//# sourceMappingURL=index.js.map
