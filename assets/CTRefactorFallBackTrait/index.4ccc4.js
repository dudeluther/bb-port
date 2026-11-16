window.__require = function t(e, r, o) {
function n(l, i) {
if (!r[l]) {
if (!e[l]) {
var c = l.split("/");
c = c[c.length - 1];
if (!e[c]) {
var u = "function" == typeof __require && __require;
if (!i && u) return u(c, !0);
if (a) return a(c, !0);
throw new Error("Cannot find module '" + l + "'");
}
l = c;
}
var s = r[l] = {
exports: {}
};
e[l][0].call(s.exports, function(t) {
return n(e[l][1][t] || t);
}, s, s.exports, t, e, r, o);
}
return r[l].exports;
}
for (var a = "function" == typeof __require && __require, l = 0; l < o.length; l++) n(o[l]);
return n;
}({
CTRefactorFallBackTrait: [ function(t, e, r) {
"use strict";
cc._RF.push(e, "9d0afNExYxMBobXvNGOl9wm", "CTRefactorFallBackTrait");
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
}), a = this && this.__decorate || function(t, e, r, o) {
var n, a = arguments.length, l = a < 3 ? e : null === o ? o = Object.getOwnPropertyDescriptor(e, r) : o;
if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) l = Reflect.decorate(t, e, r, o); else for (var i = t.length - 1; i >= 0; i--) (n = t[i]) && (l = (a < 3 ? n(l) : a > 3 ? n(e, r, l) : n(e, r)) || l);
return a > 3 && l && Object.defineProperty(e, r, l), l;
}, l = this && this.__awaiter || function(t, e, r, o) {
return new (r || (r = Promise))(function(n, a) {
function l(t) {
try {
c(o.next(t));
} catch (t) {
a(t);
}
}
function i(t) {
try {
c(o.throw(t));
} catch (t) {
a(t);
}
}
function c(t) {
t.done ? n(t.value) : (e = t.value, e instanceof r ? e : new r(function(t) {
t(e);
})).then(l, i);
var e;
}
c((o = o.apply(t, e || [])).next());
});
}, i = this && this.__generator || function(t, e) {
var r, o, n, a, l = {
label: 0,
sent: function() {
if (1 & n[0]) throw n[1];
return n[1];
},
trys: [],
ops: []
};
return a = {
next: i(0),
throw: i(1),
return: i(2)
}, "function" == typeof Symbol && (a[Symbol.iterator] = function() {
return this;
}), a;
function i(t) {
return function(e) {
return c([ t, e ]);
};
}
function c(a) {
if (r) throw new TypeError("Generator is already executing.");
for (;l; ) try {
if (r = 1, o && (n = 2 & a[0] ? o.return : a[0] ? o.throw || ((n = o.return) && n.call(o), 
0) : o.next) && !(n = n.call(o, a[1])).done) return n;
(o = 0, n) && (a = [ 2 & a[0], n.value ]);
switch (a[0]) {
case 0:
case 1:
n = a;
break;

case 4:
l.label++;
return {
value: a[1],
done: !1
};

case 5:
l.label++;
o = a[1];
a = [ 0 ];
continue;

case 7:
a = l.ops.pop();
l.trys.pop();
continue;

default:
if (!(n = l.trys, n = n.length > 0 && n[n.length - 1]) && (6 === a[0] || 2 === a[0])) {
l = 0;
continue;
}
if (3 === a[0] && (!n || a[1] > n[0] && a[1] < n[3])) {
l.label = a[1];
break;
}
if (6 === a[0] && l.label < n[1]) {
l.label = n[1];
n = a;
break;
}
if (n && l.label < n[2]) {
l.label = n[2];
l.ops.push(a);
break;
}
n[2] && l.ops.pop();
l.trys.pop();
continue;
}
a = e.call(t, l);
} catch (t) {
a = [ 6, t ];
o = 0;
} finally {
r = n = 0;
}
if (5 & a[0]) throw a[1];
return {
value: a[0] ? a[1] : void 0,
done: !0
};
}
};
Object.defineProperty(r, "__esModule", {
value: !0
});
r.CTRefactorFallBackTrait = void 0;
var c = function(t) {
n(e, t);
function e() {
return null !== t && t.apply(this, arguments) || this;
}
e.prototype.isValidBlockList = function(t) {
return Array.isArray(t) && 3 === t.length && t.every(function(t) {
return null != t && t > 0;
});
};
e.prototype.onPreprocessConditionContext = function(t) {
return buildLazyConditionContext({
fallBackFlow: function() {
return ASContext(t, "ReviveChangeAllBlockByShakeBlank Condition 阶段 flow 快照");
}
});
};
e.prototype.onPreprocessConditionOperators = function() {
var t = this;
return {
resolveFallBackChangeAllBlock: function(e) {
return t.checkFallBack(e);
}
};
};
e.prototype.onPreprocessConditions = function() {
return {
fallBackPlan: [ {
conditions: {
fact: "fallBackFlow",
operator: "resolveFallBackChangeAllBlock",
value: !0
},
flow: "fallBackApply",
gameMode: "class"
} ]
};
};
e.prototype.onPreprocessActions = function() {
return {
conditionAlgorithm: {
fallBackApply: [ {
operator: "AlgorithmStrategyAlgorithmFallbackListOperator",
type: "replaceAll",
args: [ {
fact: "operator.resolveFallBackChangeAllBlock.data.algorithmId"
} ]
} ]
}
};
};
e.prototype.checkFallBack = function(t) {
var e, r = (null !== (e = null == t ? void 0 : t.algorithmList) && void 0 !== e ? e : []).map(function(t) {
return t.algorithmId;
});
return hs.gameInfo.gameMode === hs.GameMode.Chapter && r.length > 0 && r[r.length - 1] == hs.OFFER_TYPE.TRAVEL_TIAN_KONG_XIAO_CHU ? {
status: !0,
data: {
algorithmId: hs.OFFER_TYPE.SUI_JI_WU_SI
}
} : {
status: !1
};
};
e.prototype.onAlgorithmStrategyPostprocessComplete = function(t) {
var e, r, o, n, a;
return l(this, void 0, Promise, function() {
var l, c, u;
return i(this, function(i) {
switch (i.label) {
case 0:
if (this.isValidBlockList(null === (e = null == t ? void 0 : t.sdk) || void 0 === e ? void 0 : e.blockIds)) return [ 2 ];
l = hs.OFFER_TYPE.SUI_JI;
c = hs.gameInfo.gameMode === hs.GameMode.Class ? hs.ClassAlgorithmSourceType.AlgoTrait : hs.ChapterAlgorithmSourceType.TravelTrait;
u = {
algorithmId: l,
source: null !== (o = null === (r = null == t ? void 0 : t.sdk) || void 0 === r ? void 0 : r.source) && void 0 !== o ? o : c,
traitSource: this.traitName,
algorithmListSource: null !== (a = null === (n = null == t ? void 0 : t.sdk) || void 0 === n ? void 0 : n.algorithmListSource) && void 0 !== a ? a : "fallback"
};
return [ 4, as.AlgorithmStrategyAlgoItemSdkRequestPatch.patch(u, [], this) ];

case 1:
i.sent();
return [ 2 ];
}
});
});
};
return a([ classId("CTRefactorFallBackTrait") ], e);
}(Trait);
r.CTRefactorFallBackTrait = c;
cc._RF.pop();
}, {} ]
}, {}, [ "CTRefactorFallBackTrait" ]);
//# sourceMappingURL=index.js.map
