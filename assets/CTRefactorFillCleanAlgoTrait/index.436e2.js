window.__require = function t(e, o, r) {
function n(a, l) {
if (!o[a]) {
if (!e[a]) {
var c = a.split("/");
c = c[c.length - 1];
if (!e[c]) {
var s = "function" == typeof __require && __require;
if (!l && s) return s(c, !0);
if (i) return i(c, !0);
throw new Error("Cannot find module '" + a + "'");
}
a = c;
}
var u = o[a] = {
exports: {}
};
e[a][0].call(u.exports, function(t) {
return n(e[a][1][t] || t);
}, u, u.exports, t, e, o, r);
}
return o[a].exports;
}
for (var i = "function" == typeof __require && __require, a = 0; a < r.length; a++) n(r[a]);
return n;
}({
CTRefactorFillCleanAlgoTrait: [ function(t, e, o) {
"use strict";
cc._RF.push(e, "cf484JpvHtMzK3qEjwxpwXg", "CTRefactorFillCleanAlgoTrait");
var r, n = this && this.__extends || (r = function(t, e) {
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
}), i = this && this.__decorate || function(t, e, o, r) {
var n, i = arguments.length, a = i < 3 ? e : null === r ? r = Object.getOwnPropertyDescriptor(e, o) : r;
if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) a = Reflect.decorate(t, e, o, r); else for (var l = t.length - 1; l >= 0; l--) (n = t[l]) && (a = (i < 3 ? n(a) : i > 3 ? n(e, o, a) : n(e, o)) || a);
return i > 3 && a && Object.defineProperty(e, o, a), a;
};
Object.defineProperty(o, "__esModule", {
value: !0
});
o.CTRefactorFillCleanAlgoTrait = void 0;
var a = function(t) {
n(e, t);
function e() {
return null !== t && t.apply(this, arguments) || this;
}
e.prototype.isClassGameDataClear_Disk_ProxyResetAlgorithmData = function() {
hs.storage.setItem("classBlockExtraList", {
better_block: 0,
better_space: 0
});
};
e.prototype.isChapterGameDataClear_Disk_ProxyResetAlgorithm = function() {
hs.storage.setItem("chapterBlockExtraList", {
better_block: 0,
better_space: 0
});
};
e.prototype.isFillCleanAlgo = function(t) {
var e = t.algorithmId;
return e === hs.OFFER_TYPE.TIAN_KONG_XIAO_CHU || e === hs.OFFER_TYPE.TRAVEL_TIAN_KONG_XIAO_CHU;
};
e.prototype.onSDKArgsConditionContext = function(t, e, o) {
var r = this;
return buildLazyConditionContext({
isFillCleanAlgo: function() {
return ASContext(r.isFillCleanAlgo(o), "算法是否触发连贯");
},
algoPrama: function() {
return ASContext(r.props.algo, "星链参数控制");
}
});
};
e.prototype.onSDKArgsConditions = function() {
return [ {
conditions: {
and: [ {
fact: "isFillCleanAlgo",
operator: "=",
value: !0
}, {
fact: "algoPrama",
operator: "=",
value: 12
} ]
},
flow: "flow1"
} ];
};
e.prototype.onSDKArgsActions = function() {
return {
flow1: function() {
return {
lianGuan: !0
};
}
};
};
return i([ classId("CTRefactorFillCleanAlgoTrait"), classMethodWatch() ], e);
}(Trait);
o.CTRefactorFillCleanAlgoTrait = a;
cc._RF.pop();
}, {} ]
}, {}, [ "CTRefactorFillCleanAlgoTrait" ]);
//# sourceMappingURL=index.js.map
