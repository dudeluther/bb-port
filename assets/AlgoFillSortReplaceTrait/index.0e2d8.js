window.__require = function t(r, e, o) {
function i(n, a) {
if (!e[n]) {
if (!r[n]) {
var c = n.split("/");
c = c[c.length - 1];
if (!r[c]) {
var s = "function" == typeof __require && __require;
if (!a && s) return s(c, !0);
if (l) return l(c, !0);
throw new Error("Cannot find module '" + n + "'");
}
n = c;
}
var f = e[n] = {
exports: {}
};
r[n][0].call(f.exports, function(t) {
return i(r[n][1][t] || t);
}, f, f.exports, t, r, e, o);
}
return e[n].exports;
}
for (var l = "function" == typeof __require && __require, n = 0; n < o.length; n++) i(o[n]);
return i;
}({
AlgoFillSortReplaceTraitOfferConfig: [ function(t, r, e) {
"use strict";
cc._RF.push(r, "a51adD7+AZLK4Du0D3A4DC/", "AlgoFillSortReplaceTraitOfferConfig");
Object.defineProperty(e, "__esModule", {
value: !0
});
e.AlgoFillSortReplaceIdConfig = e.AlgoFillSortSourceIdConfig = void 0;
e.AlgoFillSortSourceIdConfig = {
1: hs.OFFER_TYPE.ALL_COMBINATION_ID70,
2: hs.OFFER_TYPE.ALL_COMBINATION_ID9
};
e.AlgoFillSortReplaceIdConfig = {
1: hs.OFFER_TYPE.ALL_COMBINATION_ID70,
2: hs.OFFER_TYPE.ALL_COMBINATION_ID9
};
cc._RF.pop();
}, {} ],
AlgoFillSortReplaceTrait: [ function(t, r, e) {
"use strict";
cc._RF.push(r, "b3297X6zSBJGLnmF4ODz/A8", "AlgoFillSortReplaceTrait");
var o, i = this && this.__extends || (o = function(t, r) {
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
}), l = this && this.__decorate || function(t, r, e, o) {
var i, l = arguments.length, n = l < 3 ? r : null === o ? o = Object.getOwnPropertyDescriptor(r, e) : o;
if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) n = Reflect.decorate(t, r, e, o); else for (var a = t.length - 1; a >= 0; a--) (i = t[a]) && (n = (l < 3 ? i(n) : l > 3 ? i(r, e, n) : i(r, e)) || n);
return l > 3 && n && Object.defineProperty(r, e, n), n;
}, n = this && this.__values || function(t) {
var r = "function" == typeof Symbol && Symbol.iterator, e = r && t[r], o = 0;
if (e) return e.call(t);
if (t && "number" == typeof t.length) return {
next: function() {
t && o >= t.length && (t = void 0);
return {
value: t && t[o++],
done: !t
};
}
};
throw new TypeError(r ? "Object is not iterable." : "Symbol.iterator is not defined.");
};
Object.defineProperty(e, "__esModule", {
value: !0
});
e.AlgoFillSortReplaceTrait = void 0;
var a = t("../config/AlgoFillSortReplaceTraitOfferConfig"), c = function(t) {
i(r, t);
function r() {
var r = null !== t && t.apply(this, arguments) || this;
r.random = -1;
return r;
}
r.prototype.onActive = function(t) {
var r;
if (hs.tp.isClassAlgorithmProcessInfoBottomOfferBefore(t) && (null === (r = t.args[0]) || void 0 === r ? void 0 : r.length) > 0) {
var e = t.args[0], o = this.props.sid, i = a.AlgoFillSortSourceIdConfig[o];
if (!this.checkIsReplace(e)) return;
var l = this.props.replaceIdList || [];
t.args[0] = this.replaceAlgo(e, l, i);
}
if (hs.tp.isClassAlgorithmStrategy_Replace_ProxyPreprocessingAlgorithm(t)) {
var n = hs.algorithmStrategyInfo.algorithmList, c = hs.algorithmStrategyInfo.algorithmFailList, s = hs.algorithmStrategyInfo.algorithmSuccessList, f = hs.algorithmStrategyInfo.algorithmPriorityList;
l = this.props.replaceIdList || [], o = a.AlgoFillSortSourceIdConfig[this.props.sid];
this.replaceAlgo(n, l, o);
this.replaceAlgo(c, l, o);
this.replaceAlgo(f, l, o);
this.replaceAlgo(s, l, o);
}
hs.tp.isClassAlgorithmStrategy_Run_ProxyResetAlgorithmData(t) && (this.random = Math.random());
};
r.prototype.replaceAlgo = function(t, r, e) {
var o, i, l = 0;
r.sort(function(t, r) {
return t.rate - r.rate;
});
try {
for (var c = n(r), s = c.next(); !s.done; s = c.next()) {
var f = s.value, p = f.rate, g = f.rid;
l += p;
var h = a.AlgoFillSortReplaceIdConfig[g];
if (h && this.random <= l) {
t = hs.algorithmStrategyLogic.replaceAlgorithmType(t, e, h);
break;
}
}
} catch (t) {
o = {
error: t
};
} finally {
try {
s && !s.done && (i = c.return) && i.call(c);
} finally {
if (o) throw o.error;
}
}
return t;
};
r.prototype.checkIsReplace = function(t) {
var r = this.props.sid, e = a.AlgoFillSortSourceIdConfig[r];
return !!e && !!t.includes(e);
};
r.prototype.isClassAlgorithmBottomSequenceGPInfoTriggerBottomOfferAlgo = function() {
var t, r = TRAIT("NewBottomOfferReverseModifyTrait");
if (null != r && r.active && 1 === r.version) {
var e = ((null === (t = hs.algorithmBottomSequenceInfo) || void 0 === t ? void 0 : t.algorithmBottomList) || []).slice();
if (e.length > 0) {
var o = this.props.sid, i = a.AlgoFillSortSourceIdConfig[o];
if (this.checkIsReplace(e)) {
var l = this.props.replaceIdList || [], n = this.replaceAlgo(e, l, i);
hs.algorithmBottomSequenceInfo.setAlgorithmBottomList(n);
}
}
}
};
return l([ classId("AlgoFillSortReplaceTrait") ], r);
}(Trait);
e.AlgoFillSortReplaceTrait = c;
cc._RF.pop();
}, {
"../config/AlgoFillSortReplaceTraitOfferConfig": "AlgoFillSortReplaceTraitOfferConfig"
} ]
}, {}, [ "AlgoFillSortReplaceTraitOfferConfig", "AlgoFillSortReplaceTrait" ]);
//# sourceMappingURL=index.js.map
