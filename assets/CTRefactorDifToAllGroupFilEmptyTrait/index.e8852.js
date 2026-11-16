window.__require = function r(t, e, o) {
function i(p, a) {
if (!e[p]) {
if (!t[p]) {
var c = p.split("/");
c = c[c.length - 1];
if (!t[c]) {
var l = "function" == typeof __require && __require;
if (!a && l) return l(c, !0);
if (n) return n(c, !0);
throw new Error("Cannot find module '" + p + "'");
}
p = c;
}
var u = e[p] = {
exports: {}
};
t[p][0].call(u.exports, function(r) {
return i(t[p][1][r] || r);
}, u, u.exports, r, t, e, o);
}
return e[p].exports;
}
for (var n = "function" == typeof __require && __require, p = 0; p < o.length; p++) i(o[p]);
return i;
}({
CTRefactorDifToAllGroupFilEmptyTrait: [ function(r, t, e) {
"use strict";
cc._RF.push(t, "3bea6x3VLRE9owUFAvouR9e", "CTRefactorDifToAllGroupFilEmptyTrait");
var o, i = this && this.__extends || (o = function(r, t) {
return (o = Object.setPrototypeOf || {
__proto__: []
} instanceof Array && function(r, t) {
r.__proto__ = t;
} || function(r, t) {
for (var e in t) Object.prototype.hasOwnProperty.call(t, e) && (r[e] = t[e]);
})(r, t);
}, function(r, t) {
o(r, t);
function e() {
this.constructor = r;
}
r.prototype = null === t ? Object.create(t) : (e.prototype = t.prototype, new e());
}), n = this && this.__decorate || function(r, t, e, o) {
var i, n = arguments.length, p = n < 3 ? t : null === o ? o = Object.getOwnPropertyDescriptor(t, e) : o;
if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) p = Reflect.decorate(r, t, e, o); else for (var a = r.length - 1; a >= 0; a--) (i = r[a]) && (p = (n < 3 ? i(p) : n > 3 ? i(t, e, p) : i(t, e)) || p);
return n > 3 && p && Object.defineProperty(t, e, p), p;
};
Object.defineProperty(e, "__esModule", {
value: !0
});
e.CTRefactorDifToAllGroupFilEmptyTrait = void 0;
var p = function(r) {
i(t, r);
function t() {
return null !== r && r.apply(this, arguments) || this;
}
Object.defineProperty(t.prototype, "propRate", {
get: function() {
return hs.traitConfigSafePropsInfo.getSafePropValueByKey("DifToAllGroupFilEmptyTrait", "rate", this.props, .03);
},
enumerable: !1,
configurable: !0
});
Object.defineProperty(t.prototype, "propTargetId", {
get: function() {
return hs.traitConfigSafePropsInfo.getSafePropValueByKey("DifToAllGroupFilEmptyTrait", "targetId", this.props, hs.OFFER_TYPE_BLANK.ALL_COMBINATION_ID9);
},
enumerable: !1,
configurable: !0
});
Object.defineProperty(t.prototype, "propReplaceArray", {
get: function() {
var r = hs.traitConfigSafePropsInfo.getSafePropValueByKey("DifToAllGroupFilEmptyTrait", "replaceArray", this.props, null);
null != r && 0 !== r.length || (r = Object.values(hs.OFFER_TYPE_DIFFICULTY));
return r;
},
enumerable: !1,
configurable: !0
});
t.prototype.onPreprocessConditionContext = function(r) {
return buildLazyConditionContext({
isTrigger: function() {
return ASContext(r, "是否触发特性");
}
});
};
t.prototype.onPreprocessConditionOperators = function() {
var r = this;
return {
checkTriggerTrait: function(t) {
var e, o = t;
if (Math.random() <= r.propRate) {
var i = (null !== (e = o.algorithmList) && void 0 !== e ? e : []).filter(function(r) {
return r.dynamicSource !== hs.ClassAlgorithmSourceType.Priority && r.dynamicSource !== hs.ChapterAlgorithmSourceType.Priority;
}), n = r.propReplaceArray;
if (i.some(function(r) {
return n.includes(r.algorithmId);
})) return {
status: !0,
data: {
algorithmId: r.propTargetId
}
};
}
return !1;
}
};
};
t.prototype.onPreprocessConditions = function() {
return {
preprocessingAlgorithm: [ {
conditions: {
and: [ {
fact: "isTrigger",
operator: "checkTriggerTrait",
value: !0
} ]
},
flow: "flow1"
} ]
};
};
t.prototype.onPreprocessActions = function() {
return {
preprocessingAlgorithm: {
flow1: [ {
operator: "AlgorithmStrategyAlgorithmListOperator",
type: "replaceAll",
args: [ {
fact: "operator.checkTriggerTrait.data.algorithmId"
} ]
} ]
}
};
};
return n([ classId("CTRefactorDifToAllGroupFilEmptyTrait") ], t);
}(Trait);
e.CTRefactorDifToAllGroupFilEmptyTrait = p;
cc._RF.pop();
}, {} ]
}, {}, [ "CTRefactorDifToAllGroupFilEmptyTrait" ]);
//# sourceMappingURL=index.js.map
