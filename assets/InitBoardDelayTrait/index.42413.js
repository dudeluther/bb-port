window.__require = function t(r, e, o) {
function n(i, u) {
if (!e[i]) {
if (!r[i]) {
var c = i.split("/");
c = c[c.length - 1];
if (!r[c]) {
var f = "function" == typeof __require && __require;
if (!u && f) return f(c, !0);
if (a) return a(c, !0);
throw new Error("Cannot find module '" + i + "'");
}
i = c;
}
var p = e[i] = {
exports: {}
};
r[i][0].call(p.exports, function(t) {
return n(r[i][1][t] || t);
}, p, p.exports, t, r, e, o);
}
return e[i].exports;
}
for (var a = "function" == typeof __require && __require, i = 0; i < o.length; i++) n(o[i]);
return n;
}({
InitBoardDelayTrait: [ function(t, r, e) {
"use strict";
cc._RF.push(r, "ca54b1uv0pKDZsU7haQjXrZ", "InitBoardDelayTrait");
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
}), a = this && this.__decorate || function(t, r, e, o) {
var n, a = arguments.length, i = a < 3 ? r : null === o ? o = Object.getOwnPropertyDescriptor(r, e) : o;
if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) i = Reflect.decorate(t, r, e, o); else for (var u = t.length - 1; u >= 0; u--) (n = t[u]) && (i = (a < 3 ? n(i) : a > 3 ? n(r, e, i) : n(r, e)) || i);
return a > 3 && i && Object.defineProperty(r, e, i), i;
};
Object.defineProperty(e, "__esModule", {
value: !0
});
e.InitBoardDelayTrait = void 0;
var i = function(t) {
n(r, t);
function r() {
var r = null !== t && t.apply(this, arguments) || this;
r.LOG_TAG = "[InitBoardDelayTrait]";
return r;
}
r.prototype.onActive = function(t) {
hs.tp.isClassDefaultBoard_ProxyProduceDefaultBoardFinal(t) && this.handleProduceDefaultBoard(t);
};
r.prototype.handleProduceDefaultBoard = function(t) {
var r = this.props.delayDays;
if (hs.gameInfo.getLifeTime() <= r) {
t.args[0] = hs.boardInfo.NULL;
t.returnState = !0;
this.returnEmptyBoard(t);
}
};
r.prototype.returnEmptyBoard = function() {};
return a([ classId("InitBoardDelayTrait"), classMethodWatch() ], r);
}(Trait);
e.InitBoardDelayTrait = i;
cc._RF.pop();
}, {} ]
}, {}, [ "InitBoardDelayTrait" ]);
//# sourceMappingURL=index.js.map
