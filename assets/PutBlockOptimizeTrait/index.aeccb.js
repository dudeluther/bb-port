window.__require = function t(e, r, o) {
function n(c, a) {
if (!r[c]) {
if (!e[c]) {
var u = c.split("/");
u = u[u.length - 1];
if (!e[u]) {
var s = "function" == typeof __require && __require;
if (!a && s) return s(u, !0);
if (i) return i(u, !0);
throw new Error("Cannot find module '" + c + "'");
}
c = u;
}
var p = r[c] = {
exports: {}
};
e[c][0].call(p.exports, function(t) {
return n(e[c][1][t] || t);
}, p, p.exports, t, e, r, o);
}
return r[c].exports;
}
for (var i = "function" == typeof __require && __require, c = 0; c < o.length; c++) n(o[c]);
return n;
}({
PutBlockOptimizeTrait: [ function(t, e, r) {
"use strict";
cc._RF.push(e, "8cec1OxDoBCLJqrG0tu5GEg", "PutBlockOptimizeTrait");
var o, n = this && this.__extends || (o = function(t, e) {
return (o = Object.setPrototypeOf || {
__proto__: []
} instanceof Array && function(t, e) {
t.__proto__ = e;
} || function(t, e) {
for (var r in e) Object.prototype.hasOwnProperty.call(e, r) && (t[r] = e[r]);
})(t, e);
}, function(t, e) {
o(t, e);
function r() {
this.constructor = t;
}
t.prototype = null === e ? Object.create(e) : (r.prototype = e.prototype, new r());
}), i = this && this.__decorate || function(t, e, r, o) {
var n, i = arguments.length, c = i < 3 ? e : null === o ? o = Object.getOwnPropertyDescriptor(e, r) : o;
if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) c = Reflect.decorate(t, e, r, o); else for (var a = t.length - 1; a >= 0; a--) (n = t[a]) && (c = (i < 3 ? n(c) : i > 3 ? n(e, r, c) : n(e, r)) || c);
return i > 3 && c && Object.defineProperty(e, r, c), c;
};
Object.defineProperty(r, "__esModule", {
value: !0
});
r.PutBlockOptimizeTrait = void 0;
var c = function(t) {
n(e, t);
function e() {
return null !== t && t.apply(this, arguments) || this;
}
e.prototype.registerTraitEventsMethods = function() {
return [ {
className: "ClassGame_Proxy",
methodName: "onGameStart"
}, {
className: "ChapterGame_Proxy",
methodName: "onGameStart"
} ];
};
e.prototype.onActive = function(t) {
hs.tp.isClassGame_ProxyOnGameStart(t) && this.changeDelay();
hs.tp.isChapterGame_ProxyOnGameStart(t) && this.changeDelay();
};
e.prototype.changeDelay = function() {
var t;
hs.blocksProducerInfo && null != (null === (t = this.props) || void 0 === t ? void 0 : t.delayTime) && hs.blocksProducerInfo.setTouchEndTime(this.props.delayTime);
};
return i([ classId("PutBlockOptimizeTrait") ], e);
}(Trait);
r.PutBlockOptimizeTrait = c;
cc._RF.pop();
}, {} ]
}, {}, [ "PutBlockOptimizeTrait" ]);
//# sourceMappingURL=index.js.map
