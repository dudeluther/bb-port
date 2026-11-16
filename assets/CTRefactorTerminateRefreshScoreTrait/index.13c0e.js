window.__require = function e(t, r, o) {
function a(s, i) {
if (!r[s]) {
if (!t[s]) {
var c = s.split("/");
c = c[c.length - 1];
if (!t[c]) {
var l = "function" == typeof __require && __require;
if (!i && l) return l(c, !0);
if (n) return n(c, !0);
throw new Error("Cannot find module '" + s + "'");
}
s = c;
}
var u = r[s] = {
exports: {}
};
t[s][0].call(u.exports, function(e) {
return a(t[s][1][e] || e);
}, u, u.exports, e, t, r, o);
}
return r[s].exports;
}
for (var n = "function" == typeof __require && __require, s = 0; s < o.length; s++) a(o[s]);
return a;
}({
CTRefactorTerminateRefreshScoreTrait: [ function(e, t, r) {
"use strict";
cc._RF.push(t, "dc78bF3ophBeLfQgefmJ9v2", "CTRefactorTerminateRefreshScoreTrait");
var o, a = this && this.__extends || (o = function(e, t) {
return (o = Object.setPrototypeOf || {
__proto__: []
} instanceof Array && function(e, t) {
e.__proto__ = t;
} || function(e, t) {
for (var r in t) Object.prototype.hasOwnProperty.call(t, r) && (e[r] = t[r]);
})(e, t);
}, function(e, t) {
o(e, t);
function r() {
this.constructor = e;
}
e.prototype = null === t ? Object.create(t) : (r.prototype = t.prototype, new r());
}), n = this && this.__decorate || function(e, t, r, o) {
var a, n = arguments.length, s = n < 3 ? t : null === o ? o = Object.getOwnPropertyDescriptor(t, r) : o;
if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) s = Reflect.decorate(e, t, r, o); else for (var i = e.length - 1; i >= 0; i--) (a = e[i]) && (s = (n < 3 ? a(s) : n > 3 ? a(t, r, s) : a(t, r)) || s);
return n > 3 && s && Object.defineProperty(t, r, s), s;
}, s = this && this.__awaiter || function(e, t, r, o) {
return new (r || (r = Promise))(function(a, n) {
function s(e) {
try {
c(o.next(e));
} catch (e) {
n(e);
}
}
function i(e) {
try {
c(o.throw(e));
} catch (e) {
n(e);
}
}
function c(e) {
e.done ? a(e.value) : (t = e.value, t instanceof r ? t : new r(function(e) {
e(t);
})).then(s, i);
var t;
}
c((o = o.apply(e, t || [])).next());
});
}, i = this && this.__generator || function(e, t) {
var r, o, a, n, s = {
label: 0,
sent: function() {
if (1 & a[0]) throw a[1];
return a[1];
},
trys: [],
ops: []
};
return n = {
next: i(0),
throw: i(1),
return: i(2)
}, "function" == typeof Symbol && (n[Symbol.iterator] = function() {
return this;
}), n;
function i(e) {
return function(t) {
return c([ e, t ]);
};
}
function c(n) {
if (r) throw new TypeError("Generator is already executing.");
for (;s; ) try {
if (r = 1, o && (a = 2 & n[0] ? o.return : n[0] ? o.throw || ((a = o.return) && a.call(o), 
0) : o.next) && !(a = a.call(o, n[1])).done) return a;
(o = 0, a) && (n = [ 2 & n[0], a.value ]);
switch (n[0]) {
case 0:
case 1:
a = n;
break;

case 4:
s.label++;
return {
value: n[1],
done: !1
};

case 5:
s.label++;
o = n[1];
n = [ 0 ];
continue;

case 7:
n = s.ops.pop();
s.trys.pop();
continue;

default:
if (!(a = s.trys, a = a.length > 0 && a[a.length - 1]) && (6 === n[0] || 2 === n[0])) {
s = 0;
continue;
}
if (3 === n[0] && (!a || n[1] > a[0] && n[1] < a[3])) {
s.label = n[1];
break;
}
if (6 === n[0] && s.label < a[1]) {
s.label = a[1];
a = n;
break;
}
if (a && s.label < a[2]) {
s.label = a[2];
s.ops.push(n);
break;
}
a[2] && s.ops.pop();
s.trys.pop();
continue;
}
n = t.call(e, s);
} catch (e) {
n = [ 6, e ];
o = 0;
} finally {
r = a = 0;
}
if (5 & n[0]) throw n[1];
return {
value: n[0] ? n[1] : void 0,
done: !0
};
}
}, c = this && this.__read || function(e, t) {
var r = "function" == typeof Symbol && e[Symbol.iterator];
if (!r) return e;
var o, a, n = r.call(e), s = [];
try {
for (;(void 0 === t || t-- > 0) && !(o = n.next()).done; ) s.push(o.value);
} catch (e) {
a = {
error: e
};
} finally {
try {
o && !o.done && (r = n.return) && r.call(n);
} finally {
if (a) throw a.error;
}
}
return s;
}, l = this && this.__spread || function() {
for (var e = [], t = 0; t < arguments.length; t++) e = e.concat(c(arguments[t]));
return e;
};
Object.defineProperty(r, "__esModule", {
value: !0
});
r.CTRefactorTerminateRefreshScoreTrait = void 0;
var u = function(e) {
a(t, e);
function t() {
var t = null !== e && e.apply(this, arguments) || this;
t.usePosTypeConf = {
default: 0,
bottom: 1
};
return t;
}
t.prototype.classCheckCanOut = function() {
var e, t = storage.getItem("classTerminateRefreshScoreData", null);
return !!t && !((e = new p(t, this.props)).length < 4) && e.checkData();
};
t.prototype.chapterCheckCanOut = function() {
var e, t = storage.getItem("chapterTerminateRefreshScoreData", null);
return !!t && !((e = new p(t, this.props)).length < 4) && e.checkData();
};
Object.defineProperty(t.prototype, "usePosTypes", {
get: function() {
var e;
return (null === (e = this.props) || void 0 === e ? void 0 : e.use_pos_type) || this.usePosTypeConf.default;
},
enumerable: !1,
configurable: !0
});
t.prototype.updateAlgorithmType = function(e) {
return e;
};
t.prototype.updateIosAlgorithmType = function(e) {
return e;
};
t.prototype.canExecuteClassTerminatePriority = function(e) {
if (hs.gameInfo.gameMode !== hs.GameMode.Class) return !1;
var t = this.getCurrentSource(e);
return null == t || ![ hs.ClassAlgorithmSourceType.AlgoGuide, hs.ClassAlgorithmSourceType.AlgoRevive, hs.ClassAlgorithmSourceType.AlgoReviveTrait ].includes(t);
};
t.prototype.getCurrentSource = function() {
return hs.algorithmStrategyLevelRefactoredInfo.algorithmSourceLevel1;
};
t.prototype.isClassGameDataClear_Disk_ProxyResetAlgorithmData = function() {
storage.setItem("classTerminateRefreshScoreData", null);
};
t.prototype.isChapterGameDataClear_Disk_ProxyResetAlgorithm = function() {
storage.setItem("chapterTerminateRefreshScoreData", null);
};
t.prototype.onAlgorithmStrategyPostprocessComplete = function(e) {
return s(this, void 0, Promise, function() {
var t;
return i(this, function(r) {
switch (r.label) {
case 0:
return [ 4, this.handleTerminateRefreshScoreOnPostComplete(e) ];

case 1:
r.sent();
t = hs.algorithmInfo.blockIdList;
if (!Array.isArray(t) || 3 !== t.length) return [ 2 ];
if (hs.gameInfo.gameMode === hs.GameMode.Chapter) {
this.recordChapterBlockIds(t);
return [ 2 ];
}
this.recordClassBlockIds(t);
return [ 2 ];
}
});
});
};
t.prototype.handleTerminateRefreshScoreOnPostComplete = function(e) {
var t, r, o;
return s(this, void 0, Promise, function() {
var a, n, s;
return i(this, function(i) {
switch (i.label) {
case 0:
if (hs.gameInfo.gameMode !== hs.GameMode.Class) return [ 2 ];
if (this.usePosTypes !== this.usePosTypeConf.bottom) return [ 2 ];
if (null === (t = this.props) || void 0 === t ? void 0 : t.fallback_isCloseTerminate) return [ 2 ];
if (!this.classCheckCanOut()) return [ 2 ];
a = storage.getItem("classTerminateRefreshScoreDataTimes", 0);
storage.setItem("classTerminateRefreshScoreDataTimes", a + 1);
n = this.updateAlgorithmType(hs.OFFER_TYPE_BASE.CLASSTERMINATE_CYCLE);
s = {
algorithmId: n,
source: null !== (o = null === (r = null == e ? void 0 : e.sdk) || void 0 === r ? void 0 : r.source) && void 0 !== o ? o : hs.ClassAlgorithmSourceType.AlgoTrait,
traitSource: this.traitName,
algorithmListSource: "fallback"
};
return [ 4, as.AlgorithmStrategyAlgoItemSdkRequestPatch.patch(s, [], this) ];

case 1:
i.sent();
return [ 2 ];
}
});
});
};
t.prototype.recordClassBlockIds = function(e) {
1 == storage.getItem("classRoundNum", 0) && storage.setItem("classTerminateRefreshScoreDataTimes", 0);
var t, r = storage.getItem("classTerminateRefreshScoreData", null);
(t = new p(r || void 0, this.props)).push(l(e));
storage.setItem("classTerminateRefreshScoreData", t);
};
t.prototype.recordChapterBlockIds = function(e) {
1 == storage.getItem("chapterRoundNum", 0) && storage.setItem("chapterTerminateRefreshScoreDataTimes", 0);
var t, r = storage.getItem("chapterTerminateRefreshScoreData", null);
(t = new p(r || void 0, this.props)).push(l(e));
storage.setItem("chapterTerminateRefreshScoreData", t);
};
t.prototype.classTerminateSuccess = function() {
hs.algorithmStrategyLevelRefactoredInfo.setAlgorithmSourceLevel1(hs.ClassAlgorithmSourceType.AlgoTrait);
hs.algorithmStrategyLevelRefactoredInfo.setAlgorithmSourceLevel2(this.traitName);
var e = storage.getItem("classTerminateRefreshScoreDataTimes", 0);
storage.setItem("classTerminateRefreshScoreDataTimes", e + 1);
};
t.prototype.chapterTerminateSuccess = function() {
hs.algorithmStrategyLevelRefactoredInfo.setAlgorithmSourceLevel1(hs.ChapterAlgorithmSourceType.TravelTrait);
hs.algorithmStrategyLevelRefactoredInfo.setAlgorithmSourceLevel2(this.traitName);
var e = storage.getItem("chapterTerminateRefreshScoreDataTimes", 0);
storage.setItem("chapterTerminateRefreshScoreDataTimes", e + 1);
};
t.prototype.classTerminateBottomSuccess = function() {
var e = storage.getItem("classTerminateRefreshScoreDataTimes", 0);
storage.setItem("classTerminateRefreshScoreDataTimes", e + 1);
};
t.prototype.chapterTerminateBottomSuccess = function() {
var e = storage.getItem("chapterTerminateRefreshScoreDataTimes", 0);
storage.setItem("chapterTerminateRefreshScoreDataTimes", e + 1);
};
t.prototype.onPreprocessConditionOperators = function() {
var e = this;
return {
classAlgorithmOperate: function() {
if (e.classCheckCanOut() && e.usePosTypes != e.usePosTypeConf.bottom) {
var t = e.updateIosAlgorithmType(hs.OFFER_TYPE.CLASSTERMINATE_CYCLE);
return {
status: !0,
data: {
algorithmIds: l([ t ], hs.algorithmStrategyIOSRandomRefactoredInfo.offerNoBitRandomNoDieClass())
}
};
}
return !1;
},
chapterAlgorithmOperate: function() {
if (e.chapterCheckCanOut() && e.usePosTypes != e.usePosTypeConf.bottom) {
var t = TRAIT("CTRefactorAlgorithmStrategyIOSNameInfoTrait");
if (null == t ? void 0 : t.active) {
t.addAlgorithmNameMapping(hs.OFFER_TYPE.CHAPTERTERMINATE_CYCLE, "CTRefactorTerminateRefreshScoreTrait", null, null, hs.OFFER_TYPE.CHAPTERTERMINATE_CYCLE);
t.addAlgorithmNameMapping(hs.OFFER_TYPE.SUI_JI_WU_SI, "CTRefactorTerminateRefreshScoreTrait", null, null, hs.OFFER_TYPE.SUI_JI_WU_SI);
}
return {
status: !0,
data: {
algorithmIds: l([ hs.OFFER_TYPE.CHAPTERTERMINATE_CYCLE ], hs.algorithmStrategyIOSRandomRefactoredInfo.offerNoBitRandomNoDieChapter())
}
};
}
return !1;
}
};
};
t.prototype.onPreprocessConditionContext = function(e) {
var t = this, r = storage.getItem("classTerminateRefreshScoreData", null), o = 0, a = !1;
if (r) {
var n = new p(r, this.props);
(o = n.length) >= 4 && (a = n.checkData());
}
var s = hs.gameInfo.gameMode === hs.GameMode.Chapter ? storage.getItem("chapterTerminateRefreshScoreData", null) : null, i = 0, c = !1;
if (s) {
n = new p(s, this.props);
(i = n.length) >= 4 && (c = n.checkData());
}
return buildLazyConditionContext({
isDefaultPosType: function() {
return ASContext(t.usePosTypes === t.usePosTypeConf.default, "use_pos_type为默认模式(非兜底)");
},
canExecuteClassTerminatePriority: function() {
return ASContext(t.canExecuteClassTerminatePriority(e), "无尽模式允许走Priority终止刷分(非首局/引导/复活等)");
},
hasClassData: function() {
return ASContext(!!r, "无尽模式有历史出块数据");
},
classDataEnough: function() {
return ASContext(o >= 4, "无尽模式出块数据足够(>=4轮)");
},
classHasRepeatCycle: function() {
return ASContext(a, "无尽模式检测到重复出块循环");
},
usePosTypes: function() {
return ASContext(t.usePosTypes, "use_pos_type");
},
classTerminateAlgoId: function() {
return ASContext(t.updateAlgorithmType(hs.OFFER_TYPE_BASE.CLASSTERMINATE_CYCLE), "终止刷分循环算法ID（经 updateAlgorithmType 钩子）");
},
hasChapterData: function() {
return ASContext(!!s, "旅行模式有历史出块数据");
},
chapterDataEnough: function() {
return ASContext(i >= 4, "旅行模式出块数据足够(>=4轮)");
},
chapterHasRepeatCycle: function() {
return ASContext(c, "旅行模式检测到重复出块循环");
},
chapterTerminateAlgoId: function() {
return ASContext(t.updateAlgorithmType(hs.OFFER_TYPE_BASE.CHAPTERTERMINATE_CYCLE), "旅行终止刷分循环算法ID（经 updateAlgorithmType 钩子）");
}
});
};
t.prototype.onPreprocessConditions = function() {
return {
mutex: {
AlgoTrait: [ {
conditions: {
and: [ {
fact: "isDefaultPosType",
operator: "=",
value: !0
}, {
fact: "hasClassData",
operator: "=",
value: !0
}, {
fact: "classDataEnough",
operator: "=",
value: !0
}, {
fact: "classHasRepeatCycle",
operator: "=",
value: !0
} ]
},
event: {
type: "classTerminateSuccess"
},
flow: "classTerminate",
platform: "gp",
gameMode: "class"
} ],
TravelTrait: [ {
conditions: {
and: [ {
fact: "isDefaultPosType",
operator: "=",
value: !0
}, {
fact: "hasChapterData",
operator: "=",
value: !0
}, {
fact: "chapterDataEnough",
operator: "=",
value: !0
}, {
fact: "chapterHasRepeatCycle",
operator: "=",
value: !0
} ]
},
event: {
type: "chapterTerminateSuccess"
},
flow: "chapterTerminate",
platform: "gp"
} ]
},
priority: [ {
conditions: {
and: [ {
fact: "canExecuteClassTerminatePriority",
operator: "=",
value: !0
}, {
fact: "usePosTypes",
operator: "classAlgorithmOperate",
value: !0
} ]
},
event: {
type: "classTerminateSuccess"
},
flow: "classTerminateIOS",
platform: "ios",
gameMode: "class"
}, {
conditions: {
and: [ {
fact: "usePosTypes",
operator: "chapterAlgorithmOperate",
value: !0
} ]
},
event: {
type: "chapterTerminateSuccess"
},
flow: "chapterTerminateIOS",
platform: "ios",
gameMode: "journey"
} ]
};
};
t.prototype.onPreprocessActions = function() {
return {
mutex: {
AlgoTrait: {
classTerminate: [ {
operator: "AlgorithmStrategyAlgorithmListOperator",
type: "replaceAll",
args: [ {
fact: "classTerminateAlgoId"
} ]
}, {
operator: "AlgorithmStrategyAlgorithmFallbackListOperator",
type: "replaceAll",
args: [ hs.OFFER_TYPE_BASE.SUI_JI_WU_SI ]
}, {
operator: "AlgorithmStrategyReturnOperator",
type: "returnState"
} ]
},
TravelTrait: {
chapterTerminate: [ {
operator: "AlgorithmStrategyAlgorithmListOperator",
type: "replaceAll",
args: [ {
fact: "chapterTerminateAlgoId"
} ]
}, {
operator: "AlgorithmStrategyAlgorithmFallbackListOperator",
type: "replaceAll",
args: [ hs.OFFER_TYPE_BASE.SUI_JI_WU_SI ]
}, {
operator: "AlgorithmStrategyReturnOperator",
type: "returnState"
} ]
}
},
priority: {
classTerminateIOS: [ {
operator: "AlgorithmStrategyAlgorithmPriorityListOperator",
type: "unshift",
args: [ {
fact: "operator.classAlgorithmOperate.data.algorithmIds"
} ]
} ],
chapterTerminateIOS: [ {
operator: "AlgorithmStrategyAlgorithmPriorityListOperator",
type: "unshift",
args: [ {
fact: "operator.chapterAlgorithmOperate.data.algorithmIds"
} ]
} ]
}
};
};
t.prototype.onPostprocessConditionContext = function(e) {
var t = this;
return buildLazyConditionContext({
canRunAfterOffer: function() {
return ASContext(t.canRunAfterOffer(e), "是否可运行 After 后置段");
},
isBottomPosType: function() {
return ASContext(t.usePosTypes === t.usePosTypeConf.bottom, "use_pos_type为兜底模式");
},
classCanOut: function() {
return ASContext(t.classCheckCanOut(), "无尽模式检测到重复出块循环");
},
classTerminateAlgoId: function() {
return ASContext(t.updateAlgorithmType(hs.OFFER_TYPE_BASE.CLASSTERMINATE_CYCLE), "终止刷分循环算法ID（经 updateAlgorithmType 钩子）");
},
chapterCanOut: function() {
return ASContext(t.chapterCheckCanOut(), "旅行模式检测到重复出块循环");
},
chapterTerminateAlgoId: function() {
return ASContext(t.updateAlgorithmType(hs.OFFER_TYPE_BASE.CHAPTERTERMINATE_CYCLE), "旅行终止刷分循环算法ID（经 updateAlgorithmType 钩子）");
}
});
};
t.prototype.onPostprocessConditions = function() {
return [ {
conditions: {
and: [ {
fact: "canRunAfterOffer",
operator: "=",
value: !0
}, {
fact: "isBottomPosType",
operator: "=",
value: !0
}, {
fact: "classCanOut",
operator: "=",
value: !0
} ]
},
event: {
type: "classTerminateBottomSuccess"
},
flow: "classTerminateBottom",
gameMode: "class"
}, {
conditions: {
and: [ {
fact: "isBottomPosType",
operator: "=",
value: !0
}, {
fact: "chapterCanOut",
operator: "=",
value: !0
} ]
},
event: {
type: "chapterTerminateBottomSuccess"
},
flow: "chapterTerminateBottom",
gameMode: "journey"
} ];
};
t.prototype.onPostprocessActions = function() {
return {
classTerminateBottom: [ {
operator: "AlgorithmStrategyAlgorithmListOperator",
type: "replaceAll",
args: [ {
fact: "classTerminateAlgoId"
} ]
} ],
chapterTerminateBottom: [ {
operator: "AlgorithmStrategyAlgorithmListOperator",
type: "replaceAll",
args: [ {
fact: "chapterTerminateAlgoId"
} ]
} ]
};
};
t.prototype.canRunAfterOffer = function() {
return this.isTriggerClassNewBottom();
};
t.prototype.isTriggerClassNewBottom = function() {
var e;
return null === (e = this.props) || void 0 === e ? void 0 : e.fallback_isCloseTerminate;
};
return n([ classId("CTRefactorTerminateRefreshScoreTrait"), classMethodWatch() ], t);
}(Trait);
r.CTRefactorTerminateRefreshScoreTrait = u;
var p = function() {
function e(e, t) {
var r;
this.stack = [];
this.maxSize = 10;
this.consecutiveRoundLimit = 5;
this.props = t;
var o = this.latestRound, a = this.consecutiveRound;
if (e) {
this.stack = null !== (r = e.stack) && void 0 !== r ? r : [];
"number" == typeof o ? this.maxSize = Math.max(2, Math.floor(o)) : "number" == typeof e.maxSize && (this.maxSize = Math.max(2, Math.floor(e.maxSize)));
} else {
this.stack = [];
this.maxSize = Math.max(2, Math.floor(o) || 10);
}
this.consecutiveRoundLimit = Math.max(2, Math.floor("number" == typeof a ? a : 5));
}
Object.defineProperty(e.prototype, "latestRound", {
get: function() {
return hs.traitConfigSafePropsInfo.getSafePropValueByKey("TerminateRefreshScoreTrait", "latestRound", this.props, 10);
},
enumerable: !1,
configurable: !0
});
Object.defineProperty(e.prototype, "consecutiveRound", {
get: function() {
return hs.traitConfigSafePropsInfo.getSafePropValueByKey("TerminateRefreshScoreTrait", "consecutiveRound", this.props, 5);
},
enumerable: !1,
configurable: !0
});
e.prototype.push = function(e) {
this.stack.push(e);
this.stack.length > this.maxSize && this.stack.shift();
};
Object.defineProperty(e.prototype, "length", {
get: function() {
return this.stack.length;
},
enumerable: !1,
configurable: !0
});
e.prototype.checkDataNew = function() {
for (var e = 2; e <= this.consecutiveRoundLimit; e++) {
var t = 2 * e;
if (!(this.stack.length < t)) {
var r = this.getLastN(t), o = c(this.splitArrayEvenly(r), 2), a = o[0], n = o[1];
if (this.checkSame(a, n)) return !0;
}
}
return !1;
};
e.prototype.checkData = function() {
var e = hs.traitConfigSafePropsInfo.getSafePropValueByKey("TerminateRefreshScoreTrait", "latestRound", this.props, null), t = hs.traitConfigSafePropsInfo.getSafePropValueByKey("TerminateRefreshScoreTrait", "consecutiveRound", this.props, null);
if ("number" == typeof e && "number" == typeof t) return this.checkDataNew();
if (this.stack.length >= 4) {
var r = this.getLastN(4), o = c(this.splitArrayEvenly(r), 2), a = o[0], n = o[1];
if (this.checkSame(a, n)) return !0;
}
if (this.stack.length >= 6) {
r = this.getLastN(6);
var s = c(this.splitArrayEvenly(r), 2);
a = s[0], n = s[1];
if (this.checkSame(a, n)) return !0;
}
if (this.stack.length >= 8) {
r = this.getLastN(8);
var i = c(this.splitArrayEvenly(r), 2);
a = i[0], n = i[1];
if (this.checkSame(a, n)) return !0;
}
if (this.stack.length >= 10) {
r = this.getLastN(10);
var l = c(this.splitArrayEvenly(r), 2);
a = l[0], n = l[1];
if (this.checkSame(a, n)) return !0;
}
return !1;
};
e.prototype.splitArrayEvenly = function(e) {
var t = Math.floor(e.length / 2);
return [ e.slice(0, t), e.slice(t) ];
};
e.prototype.checkSame = function(e, t) {
for (var r = 0; r < e.length; r++) {
var o = e[r], a = t[r];
if (!this.areArraysEqual(o, a)) return !1;
}
return !0;
};
e.prototype.areArraysEqual = function(e, t) {
if (e.length !== t.length) return !1;
for (var r = e.slice().sort(function(e, t) {
return e - t;
}), o = t.slice().sort(function(e, t) {
return e - t;
}), a = 0; a < r.length; a++) if (r[a] !== o[a]) return !1;
return !0;
};
e.prototype.getLastN = function(e) {
var t = Math.min(e, this.stack.length);
return this.stack.slice(-t);
};
e.prototype.pop = function() {
return this.stack.pop();
};
e.prototype.peek = function() {
return this.stack[this.stack.length - 1];
};
e.prototype.getAll = function() {
return this.stack;
};
return e;
}();
cc._RF.pop();
}, {} ]
}, {}, [ "CTRefactorTerminateRefreshScoreTrait" ]);
//# sourceMappingURL=index.js.map
