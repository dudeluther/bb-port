window.__require = function e(t, r, n) {
function o(c, p) {
if (!r[c]) {
if (!t[c]) {
var a = c.split("/");
a = a[a.length - 1];
if (!t[a]) {
var u = "function" == typeof __require && __require;
if (!p && u) return u(a, !0);
if (i) return i(a, !0);
throw new Error("Cannot find module '" + c + "'");
}
c = a;
}
var f = r[c] = {
exports: {}
};
t[c][0].call(f.exports, function(e) {
return o(t[c][1][e] || e);
}, f, f.exports, e, t, r, n);
}
return r[c].exports;
}
for (var i = "function" == typeof __require && __require, c = 0; c < n.length; c++) o(n[c]);
return o;
}({
CTRefactorIsOpenZiMuShangZengChapterOpenTrait: [ function(e, t, r) {
"use strict";
cc._RF.push(t, "9c18beddBRPHqcv5Q+bC4tK", "CTRefactorIsOpenZiMuShangZengChapterOpenTrait");
var n, o = this && this.__extends || (n = function(e, t) {
return (n = Object.setPrototypeOf || {
__proto__: []
} instanceof Array && function(e, t) {
e.__proto__ = t;
} || function(e, t) {
for (var r in t) Object.prototype.hasOwnProperty.call(t, r) && (e[r] = t[r]);
})(e, t);
}, function(e, t) {
n(e, t);
function r() {
this.constructor = e;
}
e.prototype = null === t ? Object.create(t) : (r.prototype = t.prototype, new r());
}), i = this && this.__decorate || function(e, t, r, n) {
var o, i = arguments.length, c = i < 3 ? t : null === n ? n = Object.getOwnPropertyDescriptor(t, r) : n;
if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) c = Reflect.decorate(e, t, r, n); else for (var p = e.length - 1; p >= 0; p--) (o = e[p]) && (c = (i < 3 ? o(c) : i > 3 ? o(t, r, c) : o(t, r)) || c);
return i > 3 && c && Object.defineProperty(t, r, c), c;
};
Object.defineProperty(r, "__esModule", {
value: !0
});
r.CTRefactorIsOpenZiMuShangZengChapterOpenTrait = void 0;
var c = function(e) {
o(t, e);
function t() {
return null !== e && e.apply(this, arguments) || this;
}
return i([ classId("CTRefactorIsOpenZiMuShangZengChapterOpenTrait") ], t);
}(Trait);
r.CTRefactorIsOpenZiMuShangZengChapterOpenTrait = c;
cc._RF.pop();
}, {} ]
}, {}, [ "CTRefactorIsOpenZiMuShangZengChapterOpenTrait" ]);
//# sourceMappingURL=index.js.map
