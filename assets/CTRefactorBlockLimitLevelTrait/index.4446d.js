window.__require = function t(e, r, o) {
function n(c, u) {
if (!r[c]) {
if (!e[c]) {
var a = c.split("/");
a = a[a.length - 1];
if (!e[a]) {
var l = "function" == typeof __require && __require;
if (!u && l) return l(a, !0);
if (i) return i(a, !0);
throw new Error("Cannot find module '" + c + "'");
}
c = a;
}
var f = r[c] = {
exports: {}
};
e[c][0].call(f.exports, function(t) {
return n(e[c][1][t] || t);
}, f, f.exports, t, e, r, o);
}
return r[c].exports;
}
for (var i = "function" == typeof __require && __require, c = 0; c < o.length; c++) n(o[c]);
return n;
}({
CTRefactorBlockLimitLevelTrait: [ function(t, e, r) {
"use strict";
cc._RF.push(e, "fed968Snl5PRIQtZ/tpzbZR", "CTRefactorBlockLimitLevelTrait");
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
if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) c = Reflect.decorate(t, e, r, o); else for (var u = t.length - 1; u >= 0; u--) (n = t[u]) && (c = (i < 3 ? n(c) : i > 3 ? n(e, r, c) : n(e, r)) || c);
return i > 3 && c && Object.defineProperty(e, r, c), c;
};
Object.defineProperty(r, "__esModule", {
value: !0
});
r.CTRefactorBlockLimitLevelTrait = void 0;
var c = function(t) {
n(e, t);
function e() {
return null !== t && t.apply(this, arguments) || this;
}
Object.defineProperty(e.prototype, "triggerChapterNum", {
get: function() {
return hs.traitConfigSafePropsInfo.getSafePropValueByKey("BlockLimitLevelTrait", "chapter", this.props, 13);
},
enumerable: !1,
configurable: !0
});
Object.defineProperty(e.prototype, "excludeAlgo", {
get: function() {
return hs.traitConfigSafePropsInfo.getSafePropValueByKey("BlockLimitLevelTrait", "excludeAlgo", this.props, []);
},
enumerable: !1,
configurable: !0
});
e.prototype.triggerChapter = function() {
return this.triggerChapterNum - 1;
};
e.prototype.getLimitSmallBlock = function() {
if (hs.gameInfo.gameMode != hs.GameMode.Chapter) return "ignore";
if (hs.storage.getItem("chapterNum", 0) >= this.triggerChapterNum - 1) {
var t = hs.algorithmName.algoActualId;
if (!this.excludeAlgo.includes(t)) return "limitSmall";
}
return "ignore";
};
e.prototype.onSDKArgsConditionContext = function(t, e, r) {
var o = this;
return buildLazyConditionContext({
minChapterNum: function() {
return ASContext(o.triggerChapter(), "星链本触发限制小块的关卡阈值");
},
isExcluded: function() {
return ASContext(o.excludeAlgo.includes(r.algorithmId), "是否排除当前算法");
}
});
};
e.prototype.onSDKArgsConditions = function() {
return [ {
conditions: {
and: [ {
fact: "chapterNum",
operator: ">=",
value: {
fact: "minChapterNum"
}
}, {
fact: "isExcluded",
operator: "=",
value: !1
} ]
},
gameMode: "journey",
flow: "flow1"
} ];
};
e.prototype.onSDKArgsActions = function() {
return {
flow1: function() {
return {
limitSmall: !0
};
}
};
};
return i([ classId("CTRefactorBlockLimitLevelTrait") ], e);
}(Trait);
r.CTRefactorBlockLimitLevelTrait = c;
cc._RF.pop();
}, {} ]
}, {}, [ "CTRefactorBlockLimitLevelTrait" ]);
//# sourceMappingURL=index.js.map
