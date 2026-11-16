window.__require = function t(e, o, r) {
function i(c, f) {
if (!o[c]) {
if (!e[c]) {
var l = c.split("/");
l = l[l.length - 1];
if (!e[l]) {
var a = "function" == typeof __require && __require;
if (!f && a) return a(l, !0);
if (n) return n(l, !0);
throw new Error("Cannot find module '" + c + "'");
}
c = l;
}
var u = o[c] = {
exports: {}
};
e[c][0].call(u.exports, function(t) {
return i(e[c][1][t] || t);
}, u, u.exports, t, e, o, r);
}
return o[c].exports;
}
for (var n = "function" == typeof __require && __require, c = 0; c < r.length; c++) i(r[c]);
return i;
}({
CTRefactorDiffBlockCollectTrait: [ function(t, e, o) {
"use strict";
cc._RF.push(e, "df70dppSXpNCqlpQNCWklNf", "CTRefactorDiffBlockCollectTrait");
var r, i = this && this.__extends || (r = function(t, e) {
return (r = Object.setPrototypeOf || {
__proto__: []
} instanceof Array && function(t, e) {
t.__proto__ = e;
} || function(t, e) {
for (var o in e) Object.prototype.hasOwnProperty.call(e, o) && (t[o] = e[o]);
})(t, e);
}, function(t, e) {
r(t, e);
function o() {
this.constructor = t;
}
t.prototype = null === e ? Object.create(e) : (o.prototype = e.prototype, new o());
}), n = this && this.__decorate || function(t, e, o, r) {
var i, n = arguments.length, c = n < 3 ? e : null === r ? r = Object.getOwnPropertyDescriptor(e, o) : r;
if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) c = Reflect.decorate(t, e, o, r); else for (var f = t.length - 1; f >= 0; f--) (i = t[f]) && (c = (n < 3 ? i(c) : n > 3 ? i(e, o, c) : i(e, o)) || c);
return n > 3 && c && Object.defineProperty(e, o, c), c;
};
Object.defineProperty(o, "__esModule", {
value: !0
});
o.CTRefactorDiffBlockCollectTrait = void 0;
var c = function(t) {
i(e, t);
function e() {
var e = null !== t && t.apply(this, arguments) || this;
e.TAG = "CTRefactorDiffBlockCollectTrait";
e.isValidate = !1;
return e;
}
e.prototype.onAlgorithmStrategyCollectionAdjust = function() {
this.isCollectionChapter() && (this.isValidate = !0);
};
e.prototype.isCollectionChapter = function() {
var t, e, o = hs.storage.getItem("chapterNum", 0);
return 1 === (null === (e = null === (t = hs.chapterConfigInfo.chapterDatasCfg[o]) || void 0 === t ? void 0 : t.Condition) || void 0 === e ? void 0 : e.Way);
};
return n([ classId("CTRefactorDiffBlockCollectTrait") ], e);
}(Trait);
o.CTRefactorDiffBlockCollectTrait = c;
cc._RF.pop();
}, {} ]
}, {}, [ "CTRefactorDiffBlockCollectTrait" ]);
//# sourceMappingURL=index.js.map
