window.__require = function t(e, r, i) {
function o(a, s) {
if (!r[a]) {
if (!e[a]) {
var l = a.split("/");
l = l[l.length - 1];
if (!e[l]) {
var u = "function" == typeof __require && __require;
if (!s && u) return u(l, !0);
if (n) return n(l, !0);
throw new Error("Cannot find module '" + a + "'");
}
a = l;
}
var c = r[a] = {
exports: {}
};
e[a][0].call(c.exports, function(t) {
return o(e[a][1][t] || t);
}, c, c.exports, t, e, r, i);
}
return r[a].exports;
}
for (var n = "function" == typeof __require && __require, a = 0; a < i.length; a++) o(i[a]);
return o;
}({
InitialBoardDisableTrait: [ function(t, e, r) {
"use strict";
cc._RF.push(e, "1cde8wlWa1CaKXgdYV6C1jX", "InitialBoardDisableTrait");
var i, o = this && this.__extends || (i = function(t, e) {
return (i = Object.setPrototypeOf || {
__proto__: []
} instanceof Array && function(t, e) {
t.__proto__ = e;
} || function(t, e) {
for (var r in e) Object.prototype.hasOwnProperty.call(e, r) && (t[r] = e[r]);
})(t, e);
}, function(t, e) {
i(t, e);
function r() {
this.constructor = t;
}
t.prototype = null === e ? Object.create(e) : (r.prototype = e.prototype, new r());
}), n = this && this.__decorate || function(t, e, r, i) {
var o, n = arguments.length, a = n < 3 ? e : null === i ? i = Object.getOwnPropertyDescriptor(e, r) : i;
if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) a = Reflect.decorate(t, e, r, i); else for (var s = t.length - 1; s >= 0; s--) (o = t[s]) && (a = (n < 3 ? o(a) : n > 3 ? o(e, r, a) : o(e, r)) || a);
return n > 3 && a && Object.defineProperty(e, r, a), a;
};
Object.defineProperty(r, "__esModule", {
value: !0
});
r.InitialBoardDisableTrait = void 0;
var a = function(t) {
o(e, t);
function e() {
return null !== t && t.apply(this, arguments) || this;
}
Object.defineProperty(e.prototype, "onActiveCondition", {
get: function() {
return hs.gameInfo.gameMode === hs.GameMode.Class;
},
enumerable: !1,
configurable: !0
});
e.prototype.onActive = function(t) {
var e, r;
if (hs.tp.isClassDefaultBoard_ProxyTriggerSpecialTrait(t)) {
var i = null !== (e = this.props.disableInitialBoardRounds) && void 0 !== e ? e : 10;
if (0 === (o = hs.classGameInfo.gameNum)) return;
if (o < i) {
t.args[0] = hs.boardInfo.NULL;
t.returnState = !0;
}
}
if (hs.tp.isIsOpenFirstDayReplayGuideBoardTraitDiableThisTrait(t) || hs.tp.isCTRefactorIsOpenFirstDayReplayGuideBoardTraitDiableThisTrait(t)) {
var o;
i = null !== (r = this.props.disableInitialBoardRounds) && void 0 !== r ? r : 10;
(o = hs.classGameInfo.gameNum) < i && (t.returnValue = !0);
}
};
return n([ classId("InitialBoardDisableTrait") ], e);
}(Trait);
r.InitialBoardDisableTrait = a;
cc._RF.pop();
}, {} ]
}, {}, [ "InitialBoardDisableTrait" ]);
//# sourceMappingURL=index.js.map
