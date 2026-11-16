window.__require = function t(e, r, o) {
function n(a, s) {
if (!r[a]) {
if (!e[a]) {
var l = a.split("/");
l = l[l.length - 1];
if (!e[l]) {
var c = "function" == typeof __require && __require;
if (!s && c) return c(l, !0);
if (i) return i(l, !0);
throw new Error("Cannot find module '" + a + "'");
}
a = l;
}
var u = r[a] = {
exports: {}
};
e[a][0].call(u.exports, function(t) {
return n(e[a][1][t] || t);
}, u, u.exports, t, e, r, o);
}
return r[a].exports;
}
for (var i = "function" == typeof __require && __require, a = 0; a < o.length; a++) n(o[a]);
return n;
}({
CTRefactorContinueSameMoreRoundLimitReplaceTrait: [ function(t, e, r) {
"use strict";
cc._RF.push(e, "2d0e5MaCt5PprnflmP75cDD", "CTRefactorContinueSameMoreRoundLimitReplaceTrait");
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
var n, i = arguments.length, a = i < 3 ? e : null === o ? o = Object.getOwnPropertyDescriptor(e, r) : o;
if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) a = Reflect.decorate(t, e, r, o); else for (var s = t.length - 1; s >= 0; s--) (n = t[s]) && (a = (i < 3 ? n(a) : i > 3 ? n(e, r, a) : n(e, r)) || a);
return i > 3 && a && Object.defineProperty(e, r, a), a;
}, a = this && this.__awaiter || function(t, e, r, o) {
return new (r || (r = Promise))(function(n, i) {
function a(t) {
try {
l(o.next(t));
} catch (t) {
i(t);
}
}
function s(t) {
try {
l(o.throw(t));
} catch (t) {
i(t);
}
}
function l(t) {
t.done ? n(t.value) : (e = t.value, e instanceof r ? e : new r(function(t) {
t(e);
})).then(a, s);
var e;
}
l((o = o.apply(t, e || [])).next());
});
}, s = this && this.__generator || function(t, e) {
var r, o, n, i, a = {
label: 0,
sent: function() {
if (1 & n[0]) throw n[1];
return n[1];
},
trys: [],
ops: []
};
return i = {
next: s(0),
throw: s(1),
return: s(2)
}, "function" == typeof Symbol && (i[Symbol.iterator] = function() {
return this;
}), i;
function s(t) {
return function(e) {
return l([ t, e ]);
};
}
function l(i) {
if (r) throw new TypeError("Generator is already executing.");
for (;a; ) try {
if (r = 1, o && (n = 2 & i[0] ? o.return : i[0] ? o.throw || ((n = o.return) && n.call(o), 
0) : o.next) && !(n = n.call(o, i[1])).done) return n;
(o = 0, n) && (i = [ 2 & i[0], n.value ]);
switch (i[0]) {
case 0:
case 1:
n = i;
break;

case 4:
a.label++;
return {
value: i[1],
done: !1
};

case 5:
a.label++;
o = i[1];
i = [ 0 ];
continue;

case 7:
i = a.ops.pop();
a.trys.pop();
continue;

default:
if (!(n = a.trys, n = n.length > 0 && n[n.length - 1]) && (6 === i[0] || 2 === i[0])) {
a = 0;
continue;
}
if (3 === i[0] && (!n || i[1] > n[0] && i[1] < n[3])) {
a.label = i[1];
break;
}
if (6 === i[0] && a.label < n[1]) {
a.label = n[1];
n = i;
break;
}
if (n && a.label < n[2]) {
a.label = n[2];
a.ops.push(i);
break;
}
n[2] && a.ops.pop();
a.trys.pop();
continue;
}
i = e.call(t, a);
} catch (t) {
i = [ 6, t ];
o = 0;
} finally {
r = n = 0;
}
if (5 & i[0]) throw i[1];
return {
value: i[0] ? i[1] : void 0,
done: !0
};
}
}, l = this && this.__values || function(t) {
var e = "function" == typeof Symbol && Symbol.iterator, r = e && t[e], o = 0;
if (r) return r.call(t);
if (t && "number" == typeof t.length) return {
next: function() {
t && o >= t.length && (t = void 0);
return {
value: t && t[o++],
done: !t
};
}
};
throw new TypeError(e ? "Object is not iterable." : "Symbol.iterator is not defined.");
};
Object.defineProperty(r, "__esModule", {
value: !0
});
r.CTRefactorContinueSameMoreRoundLimitReplaceTrait = void 0;
function c() {
var t;
return !!(null === (t = TRAIT("FixContinueSameMoreRoundLimitTrait")) || void 0 === t ? void 0 : t.active);
}
var u = function(t) {
n(e, t);
function e() {
return null !== t && t.apply(this, arguments) || this;
}
e.prototype.data = function() {
return {
round: 2,
canRunReplace: !1,
newBlockIds: [],
replacePosIndex: -1,
filterBlockIds: []
};
};
e.prototype.onAlgorithmStrategyRoundInit = function() {
this.resetReplaceState();
};
e.prototype.onAlgorithmStrategyPostprocessComplete = function(t) {
return a(this, void 0, Promise, function() {
var e;
return s(this, function(r) {
switch (r.label) {
case 0:
e = this.prepareReplace();
this.restoreBlockSort();
return e && this.isTriggerReplace() ? [ 4, this.runReplaceRoundLimit(null != t ? t : {}) ] : [ 2 ];

case 1:
r.sent();
return [ 2 ];
}
});
});
};
e.prototype.isTriggerReplace = function() {
return !0;
};
e.prototype.runReplaceRoundLimit = function(t) {
var e, r;
return a(this, void 0, Promise, function() {
var o;
return s(this, function(n) {
switch (n.label) {
case 0:
if (hs.algorithmStrategyRefactoredInfo.isSpecialStrategy()) return [ 2 ];
hs.algorithmProcessInfo.logAlgorithmInfo(hs.OFFER_TYPE.REPLACE_ROUNDLIMIT, "平替检测正常");
o = {
algorithmId: hs.OFFER_TYPE.REPLACE_ROUNDLIMIT,
source: hs.ClassAlgorithmSourceType.AlgoTrait,
traitSource: this.traitName,
algorithmListSource: null !== (r = null === (e = t.sdk) || void 0 === e ? void 0 : e.algorithmListSource) && void 0 !== r ? r : "normal"
};
return [ 4, as.AlgorithmStrategyAlgoItemSdkRequestPatch.patch(o, [], this) ];

case 1:
n.sent();
return [ 2 ];
}
});
});
};
e.prototype.prepareReplace = function() {
var t, e;
this.resetReplaceState();
if (!this.isClassMode()) return !1;
if (hs.algorithmInfo.blockIdList.length < 3) return !1;
var r = hs.algorithmName.algoActualId;
if (r === hs.OFFER_TYPE.INVALID_REMOVE_LOOP_OUT_BLOCK) return !1;
if (!c() && r === hs.OFFER_TYPE.ZIMU_SHANGZENG) return !1;
if (hs.isValueInEnum(r, hs.OFFER_TYPE_DIFFICULTY) || r === hs.OFFER_TYPE.CLEAR_BOARD || r === hs.OFFER_TYPE.REVIVE_CLEAR) return !1;
if (this.getIgnoreList().includes(r)) return !1;
var o = TRAIT("CTRefactorIsOpenMoreCleanTrait");
if ((null == o ? void 0 : o.active) && "function" == typeof o.isUsedAndSuccess && o.isUsedAndSuccess()) return !1;
var n = this.comparePreOut();
if (n.length < 2) return !1;
var i = null;
this.state.replacePosIndex = -1;
2 === n.length && (i = n[0]);
this.state.newBlockIds = hs.algorithmInfo.blockIdList;
this.state.replacePosIndex = this.state.newBlockIds.indexOf(i);
this.state.newBlockIds.splice(this.state.newBlockIds.indexOf(i), 1);
this.state.filterBlockIds = [];
try {
for (var a = l(n), s = a.next(); !s.done; s = a.next()) {
var u = s.value;
this.state.filterBlockIds.push(u);
}
} catch (e) {
t = {
error: e
};
} finally {
try {
s && !s.done && (e = a.return) && e.call(a);
} finally {
if (t) throw t.error;
}
}
this.state.canRunReplace = !0;
return !0;
};
e.prototype.getIgnoreList = function() {
return [ hs.OFFER_TYPE.ALGO_FILL_MORE_AREA ];
};
e.prototype.onSimulateMiddleSort = function() {};
e.prototype.isClassMode = function() {
return hs.gameInfo.gameMode === hs.GameMode.Class;
};
e.prototype.resetReplaceState = function() {
this.state.canRunReplace = !1;
this.state.newBlockIds = [];
this.state.replacePosIndex = -1;
this.state.filterBlockIds = [];
};
e.prototype.restoreBlockSort = function() {
if (c() && hs.algorithmStrategyBlocksPosRefactoredInfo.blocksPosList === hs.OPERA_POS_TYPE.MIDDLE) {
hs.algorithmStrategyBlocksPosRefactoredInfo.adjustBlocksPosList(hs.operaReversePosMidele);
hs.algorithmStrategyBlocksPosRefactoredInfo.setBlocksPosList(hs.OPERA_POS_TYPE.LEFT);
}
};
e.prototype.comparePreOut = function() {
c() && this.onSimulateMiddleSort();
var t = hs.algorithmDataStatistics.algorithmDataStatistics, e = hs.algorithmInfo.blockIdList, r = t.length >= 1 ? t[t.length - 1].blocksList : [], o = t.length >= 2 ? t[t.length - 2].blocksList : [], n = t.length >= 3 ? t[t.length - 3].blocksList : [];
switch (this.state.round) {
case 2:
if (0 === r.length) return [];
break;

case 3:
if (0 === r.length || 0 === o.length) return [];
break;

case 4:
if (0 === r.length || 0 === o.length || 0 === n.length) return [];
}
var i = function(t, e) {
var r, o, n, i, a = {}, s = [];
try {
for (var c = l(t), u = c.next(); !u.done; u = c.next()) a[p = u.value] = (a[p] || 0) + 1;
} catch (t) {
r = {
error: t
};
} finally {
try {
u && !u.done && (o = c.return) && o.call(c);
} finally {
if (r) throw r.error;
}
}
try {
for (var f = l(e), h = f.next(); !h.done; h = f.next()) {
var p;
if (a[p = h.value] > 0) {
s.push(p);
a[p]--;
}
}
} catch (t) {
n = {
error: t
};
} finally {
try {
h && !h.done && (i = f.return) && i.call(f);
} finally {
if (n) throw n.error;
}
}
return s;
}, a = i(e, r);
if (a.length >= 2) return a.slice(0, 2);
if ((3 === this.state.round || 4 === this.state.round) && (s = i(e, o)).length >= 2) return s.slice(0, 2);
if (4 === this.state.round) {
var s;
if ((s = i(e, n)).length >= 2) return s.slice(0, 2);
}
return [];
};
e.prototype.onSDKArgsConditionContext = function(t, e, r) {
var o = (null == r ? void 0 : r.algorithmId) === hs.OFFER_TYPE.REPLACE_ROUNDLIMIT, n = !!this.state.canRunReplace && o && hs.algorithmInfo.blockIdList.length >= 3;
return buildLazyConditionContext({
canInjectReplaceRoundLimitArgs: function() {
return ASContext(n, "两轮相似块平替 REPLACE_ROUNDLIMIT 入参注入");
}
});
};
e.prototype.onSDKArgsConditions = function() {
return [ {
conditions: {
fact: "canInjectReplaceRoundLimitArgs",
operator: "=",
value: !0
},
flow: "patchReplaceRoundLimitInfo"
} ];
};
e.prototype.onSDKArgsActions = function() {
var t = this;
return {
patchReplaceRoundLimitInfo: function() {
var e = {
blockIds: t.state.newBlockIds,
blockNames: hs.algorithmName.algoActualName
};
c() && (e.filterBlocks = t.state.filterBlockIds);
3 === hs.algorithmInfo.blockPosList.length && -1 !== t.state.replacePosIndex && (e.blockPoses = hs.algorithmInfo.blockPosList.filter(function(e, r) {
return r !== t.state.replacePosIndex;
}));
return e;
}
};
};
return i([ classId("CTRefactorContinueSameMoreRoundLimitReplaceTrait"), classMethodWatch() ], e);
}(Trait);
r.CTRefactorContinueSameMoreRoundLimitReplaceTrait = u;
cc._RF.pop();
}, {} ]
}, {}, [ "CTRefactorContinueSameMoreRoundLimitReplaceTrait" ]);
//# sourceMappingURL=index.js.map
