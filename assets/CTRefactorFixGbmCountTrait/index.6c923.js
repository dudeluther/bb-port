window.__require = function t(e, r, o) {
function n(a, u) {
if (!r[a]) {
if (!e[a]) {
var c = a.split("/");
c = c[c.length - 1];
if (!e[c]) {
var f = "function" == typeof __require && __require;
if (!u && f) return f(c, !0);
if (i) return i(c, !0);
throw new Error("Cannot find module '" + a + "'");
}
a = c;
}
var p = r[a] = {
exports: {}
};
e[a][0].call(p.exports, function(t) {
return n(e[a][1][t] || t);
}, p, p.exports, t, e, r, o);
}
return r[a].exports;
}
for (var i = "function" == typeof __require && __require, a = 0; a < o.length; a++) n(o[a]);
return n;
}({
CTRefactorFixGbmCountTrait: [ function(t, e, r) {
"use strict";
cc._RF.push(e, "ed4caSDqElJQr40bA0dZl0h", "CTRefactorFixGbmCountTrait");
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
r.CTRefactorFixGbmCountTrait = void 0;
var a = function(t) {
n(e, t);
function e() {
return null !== t && t.apply(this, arguments) || this;
}
e.prototype.isCTRefactorLightChurnRateTraitReplaceAlgo = function(t) {
t.args[0] = this.canReplace();
};
e.prototype.canReplace = function() {
var t, e, r, o;
if (!(null === (t = this.props) || void 0 === t ? void 0 : t.countNum)) return !1;
var n = 0, i = TRAIT("CTRefactorLightChurnRateTrait");
(null == i ? void 0 : i.active) && (n = null !== (r = null === (e = i.state) || void 0 === e ? void 0 : e.sz_rp_prob_v_1_1) && void 0 !== r ? r : 0);
if (n && this.props) {
for (var a = 0; a < (null === (o = this.props) || void 0 === o ? void 0 : o.countNum); a++) if (Math.random() < n) {
var u = TRAIT("RobotModelEventDataTrait");
if (null == u ? void 0 : u.active) {
var c = 0;
hs.gameInfo.gameMode != hs.GameMode.Class && hs.gameInfo.gameMode != hs.GameMode.Chapter || (c = hs.gameInfo.gameNum);
hs.EventManager.dispatchModuleEvent(new hs.E_HttpDot_Game_Model_Applay_Request({
game_id: c,
game_type: hs.gameInfo.gameMode,
feature_id: this.id,
model_output: {
sz_rp_prob_v_1_1: n
}
}));
}
return !0;
}
return !1;
}
return !1;
};
return i([ classId("CTRefactorFixGbmCountTrait") ], e);
}(Trait);
r.CTRefactorFixGbmCountTrait = a;
cc._RF.pop();
}, {} ]
}, {}, [ "CTRefactorFixGbmCountTrait" ]);
//# sourceMappingURL=index.js.map
