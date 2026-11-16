window.__require = function t(r, e, o) {
function i(f, a) {
if (!e[f]) {
if (!r[f]) {
var c = f.split("/");
c = c[c.length - 1];
if (!r[c]) {
var l = "function" == typeof __require && __require;
if (!a && l) return l(c, !0);
if (n) return n(c, !0);
throw new Error("Cannot find module '" + f + "'");
}
f = c;
}
var u = e[f] = {
exports: {}
};
r[f][0].call(u.exports, function(t) {
return i(r[f][1][t] || t);
}, u, u.exports, t, r, e, o);
}
return e[f].exports;
}
for (var n = "function" == typeof __require && __require, f = 0; f < o.length; f++) i(o[f]);
return i;
}({
CTRefactorSolidColorAfterTrait: [ function(t, r, e) {
"use strict";
cc._RF.push(r, "f3e4dXGe4pPHg2ci3pvXk08", "CTRefactorSolidColorAfterTrait");
var o, i = this && this.__extends || (o = function(t, r) {
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
}), n = this && this.__decorate || function(t, r, e, o) {
var i, n = arguments.length, f = n < 3 ? r : null === o ? o = Object.getOwnPropertyDescriptor(r, e) : o;
if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) f = Reflect.decorate(t, r, e, o); else for (var a = t.length - 1; a >= 0; a--) (i = t[a]) && (f = (n < 3 ? i(f) : n > 3 ? i(r, e, f) : i(r, e)) || f);
return n > 3 && f && Object.defineProperty(r, e, f), f;
}, f = this && this.__read || function(t, r) {
var e = "function" == typeof Symbol && t[Symbol.iterator];
if (!e) return t;
var o, i, n = e.call(t), f = [];
try {
for (;(void 0 === r || r-- > 0) && !(o = n.next()).done; ) f.push(o.value);
} catch (t) {
i = {
error: t
};
} finally {
try {
o && !o.done && (e = n.return) && e.call(n);
} finally {
if (i) throw i.error;
}
}
return f;
}, a = this && this.__spread || function() {
for (var t = [], r = 0; r < arguments.length; r++) t = t.concat(f(arguments[r]));
return t;
};
Object.defineProperty(e, "__esModule", {
value: !0
});
e.CTRefactorSolidColorAfterTrait = void 0;
var c = function(t) {
i(r, t);
function r() {
return null !== t && t.apply(this, arguments) || this;
}
r.prototype.onAlgorithmStrategyColorAdjust = function() {
var t = TRAIT("CTRefactorSolidColorTrait");
if ((null == t ? void 0 : t.active) && !(t.getSolidColor() <= 0)) {
var r = t.getColorList();
if (r && 0 !== r.length) return {
data: a(r),
disableTraits: [ "CTRefactorIsUseInitialColorAfterTrait" ]
};
}
};
return n([ classId("CTRefactorSolidColorAfterTrait"), classMethodWatch() ], r);
}(Trait);
e.CTRefactorSolidColorAfterTrait = c;
cc._RF.pop();
}, {} ]
}, {}, [ "CTRefactorSolidColorAfterTrait" ]);
//# sourceMappingURL=index.js.map
