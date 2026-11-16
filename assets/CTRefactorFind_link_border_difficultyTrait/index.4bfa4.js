window.__require = function t(r, e, i) {
function o(a, f) {
if (!e[a]) {
if (!r[a]) {
var s = a.split("/");
s = s[s.length - 1];
if (!r[s]) {
var c = "function" == typeof __require && __require;
if (!f && c) return c(s, !0);
if (n) return n(s, !0);
throw new Error("Cannot find module '" + a + "'");
}
a = s;
}
var l = e[a] = {
exports: {}
};
r[a][0].call(l.exports, function(t) {
return o(r[a][1][t] || t);
}, l, l.exports, t, r, e, i);
}
return e[a].exports;
}
for (var n = "function" == typeof __require && __require, a = 0; a < i.length; a++) o(i[a]);
return o;
}({
CTRefactorFind_link_border_difficultyTrait: [ function(t, r, e) {
"use strict";
cc._RF.push(r, "9afa8gxNkNLf72Lzhqi2+aN", "CTRefactorFind_link_border_difficultyTrait");
var i, o = this && this.__extends || (i = function(t, r) {
return (i = Object.setPrototypeOf || {
__proto__: []
} instanceof Array && function(t, r) {
t.__proto__ = r;
} || function(t, r) {
for (var e in r) Object.prototype.hasOwnProperty.call(r, e) && (t[e] = r[e]);
})(t, r);
}, function(t, r) {
i(t, r);
function e() {
this.constructor = t;
}
t.prototype = null === r ? Object.create(r) : (e.prototype = r.prototype, new e());
}), n = this && this.__decorate || function(t, r, e, i) {
var o, n = arguments.length, a = n < 3 ? r : null === i ? i = Object.getOwnPropertyDescriptor(r, e) : i;
if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) a = Reflect.decorate(t, r, e, i); else for (var f = t.length - 1; f >= 0; f--) (o = t[f]) && (a = (n < 3 ? o(a) : n > 3 ? o(r, e, a) : o(r, e)) || a);
return n > 3 && a && Object.defineProperty(r, e, a), a;
};
Object.defineProperty(e, "__esModule", {
value: !0
});
e.CTRefactorFind_link_border_difficultyTrait = void 0;
var a = function(t) {
o(r, t);
function r() {
var r = null !== t && t.apply(this, arguments) || this;
r._resetData = {
effectTimes: 0,
randomNum: 0,
preBlockId: 0
};
r._randomMax = 12;
r._randomMin = 2;
return r;
}
r.prototype.onCreate = function() {
this._randomMax = this.randomMax;
this._randomMin = this.randomMin;
};
Object.defineProperty(r.prototype, "randomMax", {
get: function() {
return hs.traitConfigSafePropsInfo.getSafePropValueByKey("Find_link_border_difficultyTrait", "randomMax", this.props, 12);
},
enumerable: !1,
configurable: !0
});
Object.defineProperty(r.prototype, "randomMin", {
get: function() {
return hs.traitConfigSafePropsInfo.getSafePropValueByKey("Find_link_border_difficultyTrait", "randomMin", this.props, 2);
},
enumerable: !1,
configurable: !0
});
r.prototype.getDowngradeAlgoId = function(t) {
return hs.traitConfigSafePropsInfo.getSafePropValueByKey("Find_link_border_difficultyTrait", "downgradeAlgoId", this.props, t);
};
r.prototype.onAlgorithmStrategyGameInit = function(t) {
"initCommonData" === t ? this.initData() : "preprocessing_PuzzleTime" === t && this.changeDifficultTime();
};
r.prototype.isClassAlgorithmStrategy_GameOver_ProxyUpdateGameOverPreDataClear = function() {
this.resetData();
};
r.prototype.resetData = function() {
this._resetData.effectTimes = 0;
this._resetData.randomNum = 0;
this._resetData.preBlockId = 0;
hs.storage.setItem("find_link_border_difficulty", this._resetData);
};
r.prototype.initData = function() {
var t = this.getStoredData();
if (0 === t.randomNum) {
t.randomNum = hs.randomIntInclusive(this._randomMin, this._randomMax);
hs.storage.setItem("find_link_border_difficulty", t);
}
};
r.prototype.changeDifficultTime = function() {
var t = TRAIT("CTRefactorIsPuzzleTimeTrait");
if (null == t ? void 0 : t.active) {
var r = this.getStoredData(), e = t.state.puzzleTimeFirst - 5 * r.randomNum;
t.state.puzzleTimeFirst = e;
}
};
r.prototype.onPreprocessConditionContext = function(t) {
var r, e = this, i = this.getFirstDifficultyAlgorithmId(null !== (r = null == t ? void 0 : t.algorithmList) && void 0 !== r ? r : as.AlgorithmStrategyAlgorithmListPatch.curAlgorithmList);
return buildLazyConditionContext({
isClassMode: function() {
return ASContext(hs.gameInfo.gameMode === hs.GameMode.Class, "是否无尽模式");
},
canOfferLinkBorderDifficultyBlocks: function() {
return ASContext(e.canOfferLinkBorderDifficultyBlocks(i), "是否可插入连续边数少难题");
},
firstDifficultyAlgorithmId: function() {
return ASContext(i, "当前算法列表第一个困难难题算法");
},
downgradeAlgorithmId: function() {
return ASContext(e.getDowngradeAlgoId(i), "连续边数少难题后的降级算法");
}
});
};
r.prototype.onPreprocessConditions = function() {
return {
conditionAlgorithm: [ {
conditions: {
and: [ {
fact: "isClassMode",
operator: "=",
value: !0
}, {
fact: "canOfferLinkBorderDifficultyBlocks",
operator: "=",
value: !0
}, {
fact: "firstDifficultyAlgorithmId",
operator: "!=",
value: hs.OFFER_TYPE_BASE.NONE
} ]
},
flow: "insertLinkBorderDifficulty"
} ]
};
};
r.prototype.onPreprocessActions = function() {
return {
conditionAlgorithm: {
insertLinkBorderDifficulty: [ {
operator: "AlgorithmStrategyAlgorithmListOperator",
type: "replaceFirst",
args: [ {
fact: "firstDifficultyAlgorithmId"
}, [ hs.OFFER_TYPE_DIFFICULTY.LINK_SMALL_BORDER, {
fact: "downgradeAlgorithmId"
} ] ]
} ]
}
};
};
r.prototype.onAlgorithmStrategyPostprocessComplete = function() {
var t = hs.algorithmName.algoActualName, r = hs.OFFER_TYPE_STRINGS[hs.OFFER_TYPE.LINK_SMALL_BORDER];
if (t.includes(r)) {
var e = this.getStoredData();
e.effectTimes++;
hs.storage.setItem("find_link_border_difficulty", e);
}
};
r.prototype.canOfferLinkBorderDifficultyBlocks = function(t) {
var r = this.getStoredData();
return !(r.effectTimes >= r.randomNum) && t !== hs.OFFER_TYPE_BASE.NONE;
};
r.prototype.getFirstDifficultyAlgorithmId = function(t) {
var r, e = this, i = null == t ? void 0 : t.find(function(t) {
return e.isDifficultyAlgorithm(t.algorithmId);
});
return null !== (r = null == i ? void 0 : i.algorithmId) && void 0 !== r ? r : hs.OFFER_TYPE_BASE.NONE;
};
r.prototype.isDifficultyAlgorithm = function(t) {
return hs.isValueInEnum(t, hs.OFFER_TYPE_DIFFICULTY);
};
r.prototype.getStoredData = function() {
return hs.storage.getItem("find_link_border_difficulty", this._resetData);
};
return n([ classId("CTRefactorFind_link_border_difficultyTrait") ], r);
}(Trait);
e.CTRefactorFind_link_border_difficultyTrait = a;
cc._RF.pop();
}, {} ]
}, {}, [ "CTRefactorFind_link_border_difficultyTrait" ]);
//# sourceMappingURL=index.js.map
