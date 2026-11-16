window.__require = function e(t, r, n) {
function o(i, s) {
if (!r[i]) {
if (!t[i]) {
var g = i.split("/");
g = g[g.length - 1];
if (!t[g]) {
var c = "function" == typeof __require && __require;
if (!s && c) return c(g, !0);
if (a) return a(g, !0);
throw new Error("Cannot find module '" + i + "'");
}
i = g;
}
var h = r[i] = {
exports: {}
};
t[i][0].call(h.exports, function(e) {
return o(t[i][1][e] || e);
}, h, h.exports, e, t, r, n);
}
return r[i].exports;
}
for (var a = "function" == typeof __require && __require, i = 0; i < n.length; i++) o(n[i]);
return o;
}({
CTRefactorIsOpenZiMuShangZengTrait: [ function(e, t, r) {
"use strict";
cc._RF.push(t, "d0adc76PNlEyIKCVOWx5816", "CTRefactorIsOpenZiMuShangZengTrait");
var n, o = this && this.__extends || (n = function(e, t) {
return (n = Object.setPrototypeOf || {
__proto__: []
} instanceof Array && function(e, t) {
e.__proto__ = t;
} || function(e, t) {
for (var r in t) Object.prototype.hasOwnProperty.call(t, r) && (e[r] = t[r]);
})(e, t);
}, function(e, t) {
n(e, t);
function r() {
this.constructor = e;
}
e.prototype = null === t ? Object.create(t) : (r.prototype = t.prototype, new r());
}), a = this && this.__decorate || function(e, t, r, n) {
var o, a = arguments.length, i = a < 3 ? t : null === n ? n = Object.getOwnPropertyDescriptor(t, r) : n;
if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) i = Reflect.decorate(e, t, r, n); else for (var s = e.length - 1; s >= 0; s--) (o = e[s]) && (i = (a < 3 ? o(i) : a > 3 ? o(t, r, i) : o(t, r)) || i);
return a > 3 && i && Object.defineProperty(t, r, i), i;
};
Object.defineProperty(r, "__esModule", {
value: !0
});
r.CTRefactorIsOpenZiMuShangZengTrait = void 0;
var i = function(e) {
o(t, e);
function t() {
return null !== e && e.apply(this, arguments) || this;
}
Object.defineProperty(t.prototype, "count", {
get: function() {
return hs.traitConfigSafePropsInfo.getSafePropValueByKey("IsOpenZiMuShangZengTrait", "count", this.props, 3);
},
enumerable: !1,
configurable: !0
});
Object.defineProperty(t.prototype, "random", {
get: function() {
return hs.traitConfigSafePropsInfo.getSafePropValueByKey("IsOpenZiMuShangZengTrait", "random", this.props, .3);
},
enumerable: !1,
configurable: !0
});
t.prototype.canTrigger = function() {
var e;
return hs.gameInfo.gameMode === hs.GameMode.Class || hs.gameInfo.gameMode === hs.GameMode.Chapter && !0 === (null === (e = TRAIT("CTRefactorIsOpenZiMuShangZengChapterOpenTrait")) || void 0 === e ? void 0 : e.active);
};
t.prototype.isCTRefactorFinalBlockCheckTraitCheckGuaranteedBlock = function(e) {
this.handleCheckGuaranteedBlock(e);
};
t.prototype.isGameDataClear_Disk_ProxyResetAlgorithmData = function() {
this.handleResetAlgorithmData();
};
t.prototype.handleCheckGuaranteedBlock = function(e) {
this.canTrigger() && -1 !== hs.algorithmName.algoActualName.indexOf(hs.ALGO_NAME_TYPE.NAME_ZIMUSHANG) && 3 === hs.algorithmInfo.blockIdList.length && (e.replace = !0);
};
t.prototype.handleResetAlgorithmData = function() {
this.canTrigger() && (hs.gameInfo.gameMode === hs.GameMode.Class ? hs.storage.setItem("classZiMuShangZengCount", 0) : hs.storage.setItem("chapterZiMuShangZengCount", 0));
};
t.prototype.onAlgorithmStrategyPreprocessComplete = function() {
if (this.canTrigger() && -1 !== hs.algorithmName.algoActualName.indexOf(hs.ALGO_NAME_TYPE.NAME_ZIMUSHANG)) if (hs.gameInfo.gameMode === hs.GameMode.Class) {
var e = hs.storage.getItem("classZiMuShangZengCount", 0);
hs.storage.setItem("classZiMuShangZengCount", e + 1);
} else if (hs.gameInfo.gameMode === hs.GameMode.Chapter) {
e = hs.storage.getItem("chapterZiMuShangZengCount", 0);
hs.storage.setItem("chapterZiMuShangZengCount", e + 1);
}
};
t.prototype.onPreprocessConditionContext = function() {
var e = this, t = hs.gameInfo.gameMode === hs.GameMode.Class ? hs.storage.getItem("classZiMuShangZengCount", 0) : hs.storage.getItem("chapterZiMuShangZengCount", 0), r = Math.random(), n = 0 === t || t < this.getCount() && r < this.random;
return buildLazyConditionContext({
canTrigger: function() {
return ASContext(e.canTrigger(), "是否满足触发前提(无尽模式或旅行开关)");
},
isCanReplaceZiMuShangZeng: function() {
return ASContext(n, "是否满足替换子母熵增条件");
}
});
};
t.prototype.onPreprocessConditions = function() {
return {
shangZheng: [ {
conditions: {
and: [ {
fact: "canTrigger",
operator: "=",
value: !0
}, {
fact: "isCanReplaceZiMuShangZeng",
operator: "=",
value: !0
} ]
},
flow: "ziMuReplace"
} ]
};
};
t.prototype.onPreprocessActions = function() {
return {
shangZheng: {
ziMuReplace: [ {
operator: "AlgorithmStrategyAlgorithmListOperator",
type: "replace",
args: [ hs.OFFER_TYPE_SHANG.SHANG_ZENG_3, hs.OFFER_TYPE_SHANG.ZIMU_SHANGZENG ]
}, {
operator: "AlgorithmStrategyAlgorithmFallbackListOperator",
type: "replace",
args: [ hs.OFFER_TYPE_SHANG.SHANG_ZENG_3, hs.OFFER_TYPE_SHANG.ZIMU_SHANGZENG ]
}, {
operator: "AlgorithmStrategyAlgorithmPostListPatchOperator",
type: "replace",
args: [ hs.OFFER_TYPE_SHANG.SHANG_ZENG_3, hs.OFFER_TYPE_SHANG.ZIMU_SHANGZENG ]
} ]
}
};
};
t.prototype.getCount = function() {
return this.count;
};
t.TAG = "[CTRefactorIsOpenZiMuShangZeng]";
return a([ classId("CTRefactorIsOpenZiMuShangZengTrait"), classMethodWatch() ], t);
}(Trait);
r.CTRefactorIsOpenZiMuShangZengTrait = i;
cc._RF.pop();
}, {} ]
}, {}, [ "CTRefactorIsOpenZiMuShangZengTrait" ]);
//# sourceMappingURL=index.js.map
