window.__require = function t(o, r, e) {
function n(a, c) {
if (!r[a]) {
if (!o[a]) {
var p = a.split("/");
p = p[p.length - 1];
if (!o[p]) {
var s = "function" == typeof __require && __require;
if (!c && s) return s(p, !0);
if (i) return i(p, !0);
throw new Error("Cannot find module '" + a + "'");
}
a = p;
}
var f = r[a] = {
exports: {}
};
o[a][0].call(f.exports, function(t) {
return n(o[a][1][t] || t);
}, f, f.exports, t, o, r, e);
}
return r[a].exports;
}
for (var i = "function" == typeof __require && __require, a = 0; a < e.length; a++) n(e[a]);
return n;
}({
CTRefactorIsOpenRandomToRandomNoDieTrait: [ function(t, o, r) {
"use strict";
cc._RF.push(o, "19491Mw6XpIeqhOyDGM5cNi", "CTRefactorIsOpenRandomToRandomNoDieTrait");
var e, n = this && this.__extends || (e = function(t, o) {
return (e = Object.setPrototypeOf || {
__proto__: []
} instanceof Array && function(t, o) {
t.__proto__ = o;
} || function(t, o) {
for (var r in o) Object.prototype.hasOwnProperty.call(o, r) && (t[r] = o[r]);
})(t, o);
}, function(t, o) {
e(t, o);
function r() {
this.constructor = t;
}
t.prototype = null === o ? Object.create(o) : (r.prototype = o.prototype, new r());
}), i = this && this.__decorate || function(t, o, r, e) {
var n, i = arguments.length, a = i < 3 ? o : null === e ? e = Object.getOwnPropertyDescriptor(o, r) : e;
if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) a = Reflect.decorate(t, o, r, e); else for (var c = t.length - 1; c >= 0; c--) (n = t[c]) && (a = (i < 3 ? n(a) : i > 3 ? n(o, r, a) : n(o, r)) || a);
return i > 3 && a && Object.defineProperty(o, r, a), a;
};
Object.defineProperty(r, "__esModule", {
value: !0
});
r.CTRefactorIsOpenRandomToRandomNoDieTrait = void 0;
var a = function(t) {
n(o, t);
function o() {
return null !== t && t.apply(this, arguments) || this;
}
o.prototype.onPreprocessConditions = function() {
return {
base: [ {
conditions: !0,
flow: "flow1"
} ]
};
};
o.prototype.onPreprocessActions = function() {
return {
base: {
flow1: [ {
operator: "AlgorithmStrategyAlgorithmListOperator",
type: "replace",
args: [ hs.OFFER_TYPE_BASE.SUI_JI, hs.OFFER_TYPE_BASE.SUI_JI_WU_SI ]
}, {
operator: "AlgorithmStrategyAlgorithmFallbackListOperator",
type: "replace",
args: [ hs.OFFER_TYPE_BASE.SUI_JI, hs.OFFER_TYPE_BASE.SUI_JI_WU_SI ]
}, {
operator: "AlgorithmStrategyAlgorithmPostListPatchOperator",
type: "replace",
args: [ hs.OFFER_TYPE_BASE.SUI_JI, hs.OFFER_TYPE_BASE.SUI_JI_WU_SI ]
} ]
}
};
};
o.prototype.onSDKArgsConditions = function() {
return [ {
conditions: !0,
flow: "flow1"
} ];
};
o.prototype.onSDKArgsActions = function() {
return {
flow1: function() {
return {
randomToRandomNoDie: !0
};
}
};
};
return i([ classId("CTRefactorIsOpenRandomToRandomNoDieTrait") ], o);
}(Trait);
r.CTRefactorIsOpenRandomToRandomNoDieTrait = a;
cc._RF.pop();
}, {} ]
}, {}, [ "CTRefactorIsOpenRandomToRandomNoDieTrait" ]);
//# sourceMappingURL=index.js.map
