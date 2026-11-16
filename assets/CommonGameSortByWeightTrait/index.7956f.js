window.__require = function t(e, r, o) {
function n(a, u) {
if (!r[a]) {
if (!e[a]) {
var c = a.split("/");
c = c[c.length - 1];
if (!e[c]) {
var p = "function" == typeof __require && __require;
if (!u && p) return p(c, !0);
if (i) return i(c, !0);
throw new Error("Cannot find module '" + a + "'");
}
a = c;
}
var s = r[a] = {
exports: {}
};
e[a][0].call(s.exports, function(t) {
return n(e[a][1][t] || t);
}, s, s.exports, t, e, r, o);
}
return r[a].exports;
}
for (var i = "function" == typeof __require && __require, a = 0; a < o.length; a++) n(o[a]);
return n;
}({
CommonGameSortByWeightTrait: [ function(t, e, r) {
"use strict";
cc._RF.push(e, "e93063wsF9K7InDKJA22IF3", "CommonGameSortByWeightTrait");
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
var n, i = arguments.length, a = i < 3 ? e : null === o ? o = Object.getOwnPropertyDescriptor(e, r) : o;
if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) a = Reflect.decorate(t, e, r, o); else for (var u = t.length - 1; u >= 0; u--) (n = t[u]) && (a = (i < 3 ? n(a) : i > 3 ? n(e, r, a) : n(e, r)) || a);
return i > 3 && a && Object.defineProperty(e, r, a), a;
};
Object.defineProperty(r, "__esModule", {
value: !0
});
r.CommonGameSortByWeightTrait = void 0;
var a = function(t) {
n(e, t);
function e() {
return null !== t && t.apply(this, arguments) || this;
}
Object.defineProperty(e.prototype, "interval", {
get: function() {
var t, e;
return null !== (e = null === (t = this.props) || void 0 === t ? void 0 : t.interval) && void 0 !== e ? e : 0;
},
enumerable: !1,
configurable: !0
});
Object.defineProperty(e.prototype, "toHead", {
get: function() {
var t, e;
return null !== (e = null === (t = this.props) || void 0 === t ? void 0 : t.toHead) && void 0 !== e && e;
},
enumerable: !1,
configurable: !0
});
e.prototype.onActive = function(t) {
if (hs.tp.isCommonGameListTraitExecuteFilters(t)) {
var e = t.args[0];
e.newGames = this.sortNewGamesByWeight(e.newGames);
}
};
e.prototype.sortNewGamesByWeight = function(t) {
var e = this;
return t.map(function(t, e) {
return {
game: t,
index: e
};
}).sort(function(t, r) {
var o = t.game.sort || 0, n = r.game.sort || 0;
return Math.abs(t.game.timestamp - r.game.timestamp) < e.interval && (0 !== o || 0 !== n) ? e.toHead ? o - n : -o + n : 0;
}).map(function(t) {
return t.game;
});
};
return i([ classId("CommonGameSortByWeightTrait") ], e);
}(Trait);
r.CommonGameSortByWeightTrait = a;
cc._RF.pop();
}, {} ]
}, {}, [ "CommonGameSortByWeightTrait" ]);
//# sourceMappingURL=index.js.map
