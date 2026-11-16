window.__require = function t(o, e, r) {
function n(l, a) {
if (!e[l]) {
if (!o[l]) {
var s = l.split("/");
s = s[s.length - 1];
if (!o[s]) {
var u = "function" == typeof __require && __require;
if (!a && u) return u(s, !0);
if (i) return i(s, !0);
throw new Error("Cannot find module '" + l + "'");
}
l = s;
}
var c = e[l] = {
exports: {}
};
o[l][0].call(c.exports, function(t) {
return n(o[l][1][t] || t);
}, c, c.exports, t, o, e, r);
}
return e[l].exports;
}
for (var i = "function" == typeof __require && __require, l = 0; l < r.length; l++) n(r[l]);
return n;
}({
CTRefactorContinueSameMoreRoundLimitTrait: [ function(t, o, e) {
"use strict";
cc._RF.push(o, "5a5f0kXal9C67ioETvHvpio", "CTRefactorContinueSameMoreRoundLimitTrait");
var r, n = this && this.__extends || (r = function(t, o) {
return (r = Object.setPrototypeOf || {
__proto__: []
} instanceof Array && function(t, o) {
t.__proto__ = o;
} || function(t, o) {
for (var e in o) Object.prototype.hasOwnProperty.call(o, e) && (t[e] = o[e]);
})(t, o);
}, function(t, o) {
r(t, o);
function e() {
this.constructor = t;
}
t.prototype = null === o ? Object.create(o) : (e.prototype = o.prototype, new e());
}), i = this && this.__decorate || function(t, o, e, r) {
var n, i = arguments.length, l = i < 3 ? o : null === r ? r = Object.getOwnPropertyDescriptor(o, e) : r;
if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) l = Reflect.decorate(t, o, e, r); else for (var a = t.length - 1; a >= 0; a--) (n = t[a]) && (l = (i < 3 ? n(l) : i > 3 ? n(o, e, l) : n(o, e)) || l);
return i > 3 && l && Object.defineProperty(o, e, l), l;
}, l = this && this.__awaiter || function(t, o, e, r) {
return new (e || (e = Promise))(function(n, i) {
function l(t) {
try {
s(r.next(t));
} catch (t) {
i(t);
}
}
function a(t) {
try {
s(r.throw(t));
} catch (t) {
i(t);
}
}
function s(t) {
t.done ? n(t.value) : (o = t.value, o instanceof e ? o : new e(function(t) {
t(o);
})).then(l, a);
var o;
}
s((r = r.apply(t, o || [])).next());
});
}, a = this && this.__generator || function(t, o) {
var e, r, n, i, l = {
label: 0,
sent: function() {
if (1 & n[0]) throw n[1];
return n[1];
},
trys: [],
ops: []
};
return i = {
next: a(0),
throw: a(1),
return: a(2)
}, "function" == typeof Symbol && (i[Symbol.iterator] = function() {
return this;
}), i;
function a(t) {
return function(o) {
return s([ t, o ]);
};
}
function s(i) {
if (e) throw new TypeError("Generator is already executing.");
for (;l; ) try {
if (e = 1, r && (n = 2 & i[0] ? r.return : i[0] ? r.throw || ((n = r.return) && n.call(r), 
0) : r.next) && !(n = n.call(r, i[1])).done) return n;
(r = 0, n) && (i = [ 2 & i[0], n.value ]);
switch (i[0]) {
case 0:
case 1:
n = i;
break;

case 4:
l.label++;
return {
value: i[1],
done: !1
};

case 5:
l.label++;
r = i[1];
i = [ 0 ];
continue;

case 7:
i = l.ops.pop();
l.trys.pop();
continue;

default:
if (!(n = l.trys, n = n.length > 0 && n[n.length - 1]) && (6 === i[0] || 2 === i[0])) {
l = 0;
continue;
}
if (3 === i[0] && (!n || i[1] > n[0] && i[1] < n[3])) {
l.label = i[1];
break;
}
if (6 === i[0] && l.label < n[1]) {
l.label = n[1];
n = i;
break;
}
if (n && l.label < n[2]) {
l.label = n[2];
l.ops.push(i);
break;
}
n[2] && l.ops.pop();
l.trys.pop();
continue;
}
i = o.call(t, l);
} catch (t) {
i = [ 6, t ];
r = 0;
} finally {
e = n = 0;
}
if (5 & i[0]) throw i[1];
return {
value: i[0] ? i[1] : void 0,
done: !0
};
}
}, s = this && this.__read || function(t, o) {
var e = "function" == typeof Symbol && t[Symbol.iterator];
if (!e) return t;
var r, n, i = e.call(t), l = [];
try {
for (;(void 0 === o || o-- > 0) && !(r = i.next()).done; ) l.push(r.value);
} catch (t) {
n = {
error: t
};
} finally {
try {
r && !r.done && (e = i.return) && e.call(i);
} finally {
if (n) throw n.error;
}
}
return l;
}, u = this && this.__spread || function() {
for (var t = [], o = 0; o < arguments.length; o++) t = t.concat(s(arguments[o]));
return t;
}, c = this && this.__values || function(t) {
var o = "function" == typeof Symbol && Symbol.iterator, e = o && t[o], r = 0;
if (e) return e.call(t);
if (t && "number" == typeof t.length) return {
next: function() {
t && r >= t.length && (t = void 0);
return {
value: t && t[r++],
done: !t
};
}
};
throw new TypeError(o ? "Object is not iterable." : "Symbol.iterator is not defined.");
};
Object.defineProperty(e, "__esModule", {
value: !0
});
e.CTRefactorContinueSameMoreRoundLimitTrait = e.EMPTY_ALGORITHM_ID = void 0;
e.EMPTY_ALGORITHM_ID = -1;
function h() {
var t;
return !!(null === (t = TRAIT("FixContinueSameMoreRoundLimitTrait")) || void 0 === t ? void 0 : t.active);
}
var f = function(t) {
n(o, t);
function o() {
return null !== t && t.apply(this, arguments) || this;
}
o.prototype.data = function() {
return {
round: 2,
followUpAlgorithmId: e.EMPTY_ALGORITHM_ID,
followUpFilterBlockIds: [],
followUpOverTime: 0,
isDealID70: !1
};
};
o.prototype.onAlgorithmStrategyRoundInit = function() {
this.resetFollowUpState();
};
o.prototype.onAlgorithmStrategyPostprocessComplete = function() {
this.restoreBlockSort();
};
o.prototype.onPostprocessConditionContext = function(t) {
var o, e, r, n, i, l, a = this, s = null == t ? void 0 : t.currentPostTag, u = !0;
if ("updateBottomOfferList" === s) {
u = !1;
var c = TRAIT("FixContinueSameMoreRoundLimitTrait");
(null == c ? void 0 : c.active) && (null === (e = null === (o = null == t ? void 0 : t.sdk) || void 0 === o ? void 0 : o.blockNames) || void 0 === e ? void 0 : e.includes(hs.OFFER_TYPE_STRINGS[hs.OFFER_TYPE.ALL_COMBINATION_ID70])) && (u = !0);
}
var h = this.prepareFollowUp(null != t ? t : {}), f = this.getFollowUpAlgorithmId(), p = null !== (n = null === (r = null == t ? void 0 : t.sdk) || void 0 === r ? void 0 : r.source) && void 0 !== n ? n : "", d = null !== (l = null === (i = null == t ? void 0 : t.sdk) || void 0 === i ? void 0 : i.algorithmListSource) && void 0 !== l ? l : "";
return buildLazyConditionContext({
isPostWork: function() {
return ASContext(u, "是否进行后续策略");
},
isTriggerFollowUp: function() {
return ASContext(a.isTriggerFollowUp(), "两轮相似块后续策略是否触发");
},
canRunContinueSameFollowUp: function() {
return ASContext(h, "两轮相似块后续策略是否触发");
},
followUpAlgorithmId: function() {
return ASContext(f, "两轮相似块后续策略算法");
},
curSource: function() {
return ASContext(p, "当前源");
},
curAlgorithmListSource: function() {
return ASContext(d, "当前算法列表源");
}
});
};
o.prototype.onPostprocessConditions = function() {
return [ {
conditions: {
and: [ {
fact: "isPostWork",
operator: "=",
value: !0
}, {
fact: "isTriggerFollowUp",
operator: "=",
value: !0
}, {
fact: "canRunContinueSameFollowUp",
operator: "=",
value: !0
} ]
},
event: {
type: "runfollowUpAlgorithmId",
args: [ {
fact: "curSource"
}, {
fact: "curAlgorithmListSource"
} ]
}
} ];
};
o.prototype.onPostprocessActions = function() {
return {};
};
o.prototype.isTriggerFollowUp = function() {
return !0;
};
o.prototype.runfollowUpAlgorithmId = function(t, o) {
var r;
return l(this, void 0, Promise, function() {
var n, i, l, s, c;
return a(this, function(a) {
switch (a.label) {
case 0:
if (!this.isClassMode()) return [ 2 ];
if ((n = this.state.followUpAlgorithmId) === e.EMPTY_ALGORITHM_ID) return [ 2 ];
i = hs.algorithmName.algoActualId;
l = {
algorithmId: i,
source: t,
traitSource: "CTRefactorContinueSameMoreRoundLimitTrait",
algorithmListSource: o
};
return [ 4, as.AlgorithmStrategyAlgoItemSdkArgsPatch.patch(l, [ "CTRefactorContinueSameMoreRoundLimitTrait" ], this) ];

case 1:
s = a.sent();
if (!this.state.isDealID70 && h()) {
s.filterBlocks = Array.from(new Set(u(null !== (r = s.filterBlocks) && void 0 !== r ? r : [], this.state.followUpFilterBlockIds)));
this.state.followUpOverTime > 0 && (s.overTime = this.state.followUpOverTime);
}
c = {
algorithmId: n,
source: t,
traitSource: "CTRefactorContinueSameMoreRoundLimitTrait",
algorithmListSource: o
};
as.AlgorithmStrategyAlgoSdkRequestBeforeActualIdPatch.patch(c.algorithmId, this);
return [ 4, as.AlgorithmStrategyAlgoSdkRequestPatch.patch(s, c, this) ];

case 2:
a.sent();
return [ 2 ];
}
});
});
};
o.prototype.prepareFollowUp = function(t) {
if (!this.isClassMode()) return !1;
if (this.getCurrentBlockIds(t).length < 3) return !1;
if (hs.algorithmName.algoActualId === hs.OFFER_TYPE.INVALID_REMOVE_LOOP_OUT_BLOCK) return !1;
this.state.isDealID70 = !1;
var o = this.getActualAlgorithmId(t);
if (![ hs.OFFER_TYPE.TIAN_KONG_XIAO_CHU, hs.OFFER_TYPE.SHANG_ZENG_3, hs.OFFER_TYPE.EMPTYDONGFILL, hs.OFFER_TYPE.ALL_COMBINATION_ID70 ].includes(o)) return !1;
if (this.getIgnoreList().includes(o)) return !1;
var e = this.comparePreOut(t);
if (e.length < 2) return !1;
this.logSameBlocks();
if (o === hs.OFFER_TYPE.ALL_COMBINATION_ID70) {
if (h() && !this.isAllCombinationActualName(t)) return !1;
this.state.followUpAlgorithmId = hs.OFFER_TYPE.SUI_JI_WU_SI;
this.state.isDealID70 = !0;
return !0;
}
this.state.followUpAlgorithmId = o;
this.state.followUpFilterBlockIds = u(e);
this.state.followUpOverTime = 100;
return !0;
};
o.prototype.getFollowUpAlgorithmId = function() {
return this.state.followUpAlgorithmId;
};
o.prototype.onSimulateMiddleSort = function() {};
o.prototype.isClassMode = function() {
return hs.gameInfo.gameMode === hs.GameMode.Class;
};
o.prototype.resetFollowUpState = function() {
this.state.followUpAlgorithmId = e.EMPTY_ALGORITHM_ID;
this.state.followUpFilterBlockIds = [];
this.state.followUpOverTime = 0;
this.state.isDealID70 = !1;
};
o.prototype.isAllCombinationActualName = function(t) {
var o = this.getCurrentAlgoActualNames(t);
return 3 === o.length && o[0] === o[1] && o[0] === o[2] && -1 !== o[0].indexOf("全组合填空消除");
};
o.prototype.getActualAlgorithmId = function() {
return hs.algorithmName.algoActualId;
};
o.prototype.getCurrentBlockIds = function(t) {
var o, e = null === (o = t.sdk) || void 0 === o ? void 0 : o.blockIds;
return Array.isArray(e) ? u(e) : u(hs.algorithmInfo.blockIdList);
};
o.prototype.getCurrentAlgoActualNames = function(t) {
var o, e = null === (o = t.sdk) || void 0 === o ? void 0 : o.blockNames;
return Array.isArray(e) ? u(e) : u(hs.algorithmName.algoActualName);
};
o.prototype.logSameBlocks = function() {
var t = hs.algorithmDataStatistics.algorithmDataStatistics;
t.length >= 1 && t[t.length - 1].blocksList, t.length >= 2 && t[t.length - 2].blocksList, 
t.length >= 3 && t[t.length - 3].blocksList;
2 === this.state.round || 3 === this.state.round || this.state.round;
};
o.prototype.restoreBlockSort = function() {
if (h() && hs.algorithmStrategyBlocksPosRefactoredInfo.blocksPosList === hs.OPERA_POS_TYPE.MIDDLE) {
hs.algorithmStrategyBlocksPosRefactoredInfo.adjustBlocksPosList(hs.operaReversePosMidele);
hs.algorithmStrategyBlocksPosRefactoredInfo.setBlocksPosList(hs.OPERA_POS_TYPE.LEFT);
}
};
o.prototype.comparePreOut = function(t) {
h() && this.onSimulateMiddleSort();
var o = hs.algorithmDataStatistics.algorithmDataStatistics, e = this.getCurrentBlockIds(t), r = o.length >= 1 ? o[o.length - 1].blocksList : [], n = o.length >= 2 ? o[o.length - 2].blocksList : [], i = o.length >= 3 ? o[o.length - 3].blocksList : [];
switch (this.state.round) {
case 2:
if (0 === r.length) return [];
break;

case 3:
if (0 === r.length || 0 === n.length) return [];
break;

case 4:
if (0 === r.length || 0 === n.length || 0 === i.length) return [];
}
var l = function(t, o) {
var e, r, n, i, l = {}, a = [];
try {
for (var s = c(t), u = s.next(); !u.done; u = s.next()) l[p = u.value] = (l[p] || 0) + 1;
} catch (t) {
e = {
error: t
};
} finally {
try {
u && !u.done && (r = s.return) && r.call(s);
} finally {
if (e) throw e.error;
}
}
try {
for (var h = c(o), f = h.next(); !f.done; f = h.next()) {
var p;
if (l[p = f.value] > 0) {
a.push(p);
l[p]--;
}
}
} catch (t) {
n = {
error: t
};
} finally {
try {
f && !f.done && (i = h.return) && i.call(h);
} finally {
if (n) throw n.error;
}
}
return a;
}, a = l(e, r);
if (a.length >= 2) return a.slice(0, 2);
if ((3 === this.state.round || 4 === this.state.round) && (s = l(e, n)).length >= 2) return s.slice(0, 2);
if (4 === this.state.round) {
var s;
if ((s = l(e, i)).length >= 2) return s.slice(0, 2);
}
return [];
};
o.prototype.getIgnoreList = function() {
return [ hs.OFFER_TYPE.ALGO_FILL_MORE_AREA ];
};
return i([ classId("CTRefactorContinueSameMoreRoundLimitTrait"), classMethodWatch() ], o);
}(Trait);
e.CTRefactorContinueSameMoreRoundLimitTrait = f;
cc._RF.pop();
}, {} ]
}, {}, [ "CTRefactorContinueSameMoreRoundLimitTrait" ]);
//# sourceMappingURL=index.js.map
