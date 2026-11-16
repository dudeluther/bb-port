window.__require = function t(r, e, o) {
function n(a, f) {
if (!e[a]) {
if (!r[a]) {
var c = a.split("/");
c = c[c.length - 1];
if (!r[c]) {
var l = "function" == typeof __require && __require;
if (!f && l) return l(c, !0);
if (i) return i(c, !0);
throw new Error("Cannot find module '" + a + "'");
}
a = c;
}
var s = e[a] = {
exports: {}
};
r[a][0].call(s.exports, function(t) {
return n(r[a][1][t] || t);
}, s, s.exports, t, r, e, o);
}
return e[a].exports;
}
for (var i = "function" == typeof __require && __require, a = 0; a < o.length; a++) n(o[a]);
return n;
}({
CTRefactorIsUseInitialColorAfterTrait: [ function(t, r, e) {
"use strict";
cc._RF.push(r, "c9f5dHkrmNPhLXHSgGPjWwT", "CTRefactorIsUseInitialColorAfterTrait");
var o, n = this && this.__extends || (o = function(t, r) {
return (o = Object.setPrototypeOf || {
__proto__: []
} instanceof Array && function(t, r) {
t.__proto__ = r;
} || function(t, r) {
for (var e in r) Object.prototype.hasOwnProperty.call(r, e) && (t[e] = r[e]);
})(t, r);
}, function(t, r) {
o(t, r);
function e() {
this.constructor = t;
}
t.prototype = null === r ? Object.create(r) : (e.prototype = r.prototype, new e());
}), i = this && this.__decorate || function(t, r, e, o) {
var n, i = arguments.length, a = i < 3 ? r : null === o ? o = Object.getOwnPropertyDescriptor(r, e) : o;
if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) a = Reflect.decorate(t, r, e, o); else for (var f = t.length - 1; f >= 0; f--) (n = t[f]) && (a = (i < 3 ? n(a) : i > 3 ? n(r, e, a) : n(r, e)) || a);
return i > 3 && a && Object.defineProperty(r, e, a), a;
}, a = this && this.__read || function(t, r) {
var e = "function" == typeof Symbol && t[Symbol.iterator];
if (!e) return t;
var o, n, i = e.call(t), a = [];
try {
for (;(void 0 === r || r-- > 0) && !(o = i.next()).done; ) a.push(o.value);
} catch (t) {
n = {
error: t
};
} finally {
try {
o && !o.done && (e = i.return) && e.call(i);
} finally {
if (n) throw n.error;
}
}
return a;
}, f = this && this.__spread || function() {
for (var t = [], r = 0; r < arguments.length; r++) t = t.concat(a(arguments[r]));
return t;
};
Object.defineProperty(e, "__esModule", {
value: !0
});
e.CTRefactorIsUseInitialColorAfterTrait = void 0;
var c = function(t) {
n(r, t);
function r() {
return null !== t && t.apply(this, arguments) || this;
}
r.prototype.onAlgorithmStrategyColorAdjust = function() {
var t = TRAIT("CTRefactorIsUseInitialColorTrait");
if (null == t ? void 0 : t.active) if (!0 !== t.state.isUseProcessing) {
var r = t.getInitialColorArr();
if (r && 0 !== r.length) {
var e = t.getColorList();
if (e && 0 !== e.length) {
for (var o = f(e), n = 0; n < o.length; n++) -1 === r.indexOf(o[n]) && (o[n] = r[Math.floor(Math.random() * r.length)]);
return {
data: o
};
}
}
} else t.setState({
isUseProcessing: !1
});
};
return i([ classId("CTRefactorIsUseInitialColorAfterTrait"), classMethodWatch() ], r);
}(Trait);
e.CTRefactorIsUseInitialColorAfterTrait = c;
cc._RF.pop();
}, {} ]
}, {}, [ "CTRefactorIsUseInitialColorAfterTrait" ]);
//# sourceMappingURL=index.js.map
