(() => {
"use strict";
var t = {
42: function(t, r, e) {
var o = this && this.__values || function(t) {
var r = "function" == typeof Symbol && Symbol.iterator, e = r && t[r], o = 0;
if (e) return e.call(t);
if (t && "number" == typeof t.length) return {
next: function() {
return t && o >= t.length && (t = void 0), {
value: t && t[o++],
done: !t
};
}
};
throw new TypeError(r ? "Object is not iterable." : "Symbol.iterator is not defined.");
};
Object.defineProperty(r, "__esModule", {
value: !0
}), r.ensureTargetReturnStateWatched = function() {
if (!f) {
var t = window.onDidTraitOnActiveEmitter;
t && "function" == typeof t.event && (f = !0, t.event(function(t) {
var r = t.trait, e = t.shareTraitTarget;
n = r, function(t) {
t && "object" == typeof t && (c.has(t) || (c.add(t), u.set(t, t.returnValue), Object.defineProperty(t, "returnValue", {
configurable: !0,
enumerable: !0,
get: function() {
return u.get(t);
},
set: function(r) {
var e = u.get(t), o = n;
o && r !== l && !y(e, r) && o.traitName.startsWith("CTRefactor") && i.roundStats.recordTraitSharedTargetChange(o.traitName, "returnValue", r, e === l ? void 0 : e, a.gameStats.gameIndex, S()), 
u.set(t, r);
}
})));
}(e), function(t) {
t && "object" == typeof t && (s.has(t) || (s.add(t), g.set(t, d(t.args)), Object.defineProperty(t, "args", {
configurable: !0,
enumerable: !0,
get: function() {
return g.get(t);
},
set: function(r) {
g.set(t, d(r));
}
})));
}(e);
}));
}
};
var n, a = e(2574), i = e(2940), l = "##undefined##", c = new WeakSet(), s = new WeakSet(), u = new WeakMap(), g = new WeakMap(), h = new WeakSet(), f = !1;
function d(t) {
return Array.isArray(t) ? h.has(t) ? t : function(t) {
return h.add(t), new Proxy(t, {
set: function(t, r, e, o) {
var l = n, c = "string" == typeof r && /^\d+$/.test(r) ? Number(r) : void 0, s = void 0 !== c ? t[c] : void 0;
return l && void 0 !== c && !y(s, e) && l.traitName.startsWith("CTRefactor") && i.roundStats.recordTraitSharedTargetChange(l.traitName, "args", e, s, a.gameStats.gameIndex, S(), c), 
Reflect.set(t, r, e, o);
},
deleteProperty: function(t, r) {
var e = n, o = "string" == typeof r && /^\d+$/.test(r) ? Number(r) : void 0, l = void 0 !== o ? t[o] : void 0;
return e && void 0 !== o && void 0 !== l && e.traitName.startsWith("CTRefactor") && i.roundStats.recordTraitSharedTargetChange(e.traitName, "args", void 0, l, a.gameStats.gameIndex, S(), o), 
Reflect.deleteProperty(t, r);
}
});
}(t) : t;
}
function y(t, r) {
var e, n;
if (Object.is(t, r)) return !0;
if (Array.isArray(t) && Array.isArray(r)) {
if (t.length !== r.length) return !1;
for (var a = 0; a < t.length; a++) if (!y(t[a], r[a])) return !1;
return !0;
}
if (p(t) && p(r)) {
var i = Object.keys(t), l = Object.keys(r);
if (i.length !== l.length) return !1;
try {
for (var c = o(l), s = c.next(); !s.done; s = c.next()) {
var u = s.value;
if (!Object.prototype.hasOwnProperty.call(t, u) || !y(t[u], r[u])) return !1;
}
} catch (t) {
e = {
error: t
};
} finally {
try {
s && !s.done && (n = c.return) && n.call(c);
} finally {
if (e) throw e.error;
}
}
return !0;
}
return !1;
}
function p(t) {
if (null === t || "object" != typeof t) return !1;
var r = Object.getPrototypeOf(t);
return r === Object.prototype || null === r;
}
function S() {
var t, r = Error.stackTraceLimit;
Error.stackTraceLimit = 30;
try {
var e = new Error().stack;
if (!e) return [];
for (var o = [], n = new Set(), a = e.split("\n").map(function(t) {
return t.trim();
}), i = 1; i < a.length; i++) {
var l = null === (t = a[i].replace(/^at\s+/, "").match(/^([^\s([]+)/)) || void 0 === t ? void 0 : t[1];
if (l && -1 !== l.indexOf("CTRefactor") && -1 !== l.indexOf("Trait") && !l.endsWith("Trait.f")) {
var c = l.slice(0, l.lastIndexOf("Trait") + 5);
n.has(c) || (n.add(c), o.push(l));
}
}
return o;
} finally {
Error.stackTraceLimit = r;
}
}
},
261: function(t, r, e) {
var o = this && this.__assign || function() {
return (o = Object.assign || function(t) {
for (var r, e = 1, o = arguments.length; e < o; e++) for (var n in r = arguments[e]) Object.prototype.hasOwnProperty.call(r, n) && (t[n] = r[n]);
return t;
}).apply(this, arguments);
}, n = this && this.__read || function(t, r) {
var e = "function" == typeof Symbol && t[Symbol.iterator];
if (!e) return t;
var o, n, a = e.call(t), i = [];
try {
for (;(void 0 === r || r-- > 0) && !(o = a.next()).done; ) i.push(o.value);
} catch (t) {
n = {
error: t
};
} finally {
try {
o && !o.done && (e = a.return) && e.call(a);
} finally {
if (n) throw n.error;
}
}
return i;
}, a = this && this.__spreadArray || function(t, r, e) {
if (e || 2 === arguments.length) for (var o, n = 0, a = r.length; n < a; n++) !o && n in r || (o || (o = Array.prototype.slice.call(r, 0, n)), 
o[n] = r[n]);
return t.concat(o || Array.prototype.slice.call(r));
}, i = this && this.__values || function(t) {
var r = "function" == typeof Symbol && Symbol.iterator, e = r && t[r], o = 0;
if (e) return e.call(t);
if (t && "number" == typeof t.length) return {
next: function() {
return t && o >= t.length && (t = void 0), {
value: t && t[o++],
done: !t
};
}
};
throw new TypeError(r ? "Object is not iterable." : "Symbol.iterator is not defined.");
};
Object.defineProperty(r, "__esModule", {
value: !0
}), r.AlgorithmStrategyAlgorithmListOperator = r._algorithmList = void 0;
var l = e(4246);
function c(t) {
return t.dynamicSource === algorithmStrategy.context.ClassAlgorithmSourceType.Priority || t.dynamicSource === algorithmStrategy.context.ChapterAlgorithmSourceType.Priority;
}
r._algorithmList = {
pre: [],
post: []
};
var s = function() {
function t() {}
return Object.defineProperty(t, "curAlgorithmList", {
get: function() {
return r._algorithmList[this._process].sort(function(t, r) {
var e = c(t);
return e === c(r) ? 0 : e ? -1 : 1;
}), r._algorithmList[this._process];
},
enumerable: !1,
configurable: !0
}), Object.defineProperty(t, "algorithmList", {
get: function() {
return Object.freeze(a([], n(this.curAlgorithmList), !1));
},
enumerable: !1,
configurable: !0
}), t.unshift = function(r) {
var e;
return !(0, l.isAbsentAlgorithmIdArg)(r) && ((e = this.curAlgorithmList).unshift.apply(e, a([], n((0, 
l.transformAlgorithmId)(r, t.unshift.options)), !1)), !0);
}, t.unshiftFilterPriority = function(e) {
if ((0, l.isAbsentAlgorithmIdArg)(e)) return !1;
var o = this.curAlgorithmList, i = o.filter(function(t) {
return c(t);
}), s = o.filter(function(t) {
return !c(t);
});
return r._algorithmList[this._process] = a(a(a([], n(i), !1), n((0, l.transformAlgorithmId)(e, t.unshiftFilterPriority.options)), !1), n(s), !1), 
!0;
}, t.push = function(r) {
var e;
return !(0, l.isAbsentAlgorithmIdArg)(r) && ((e = this.curAlgorithmList).push.apply(e, a([], n((0, 
l.transformAlgorithmId)(r, t.push.options)), !1)), !0);
}, t.pushFilterPriority = function(e) {
if ((0, l.isAbsentAlgorithmIdArg)(e)) return !1;
var o = this.curAlgorithmList, i = o.filter(function(t) {
return c(t);
}), s = o.filter(function(t) {
return !c(t);
});
return r._algorithmList[this._process] = a(a(a([], n(i), !1), n(s), !1), n((0, l.transformAlgorithmId)(e, t.pushFilterPriority.options)), !1), 
!0;
}, t.insertBefore = function(r, e) {
var o;
if (null == r || (0, l.isAbsentAlgorithmIdArg)(e)) return !1;
var i = this.curAlgorithmList.findIndex(function(t) {
return t.algorithmId === r;
});
return -1 !== i && ((o = this.curAlgorithmList).splice.apply(o, a([ i, 0 ], n((0, 
l.transformAlgorithmId)(e, t.insertBefore.options)), !1)), !0);
}, t.insertBeforeFilterPriority = function(r, e) {
var o;
if (null == r || (0, l.isAbsentAlgorithmIdArg)(e)) return !1;
var i = this.curAlgorithmList.findIndex(function(t) {
return !c(t) && t.algorithmId === r;
});
return -1 !== i && ((o = this.curAlgorithmList).splice.apply(o, a([ i, 0 ], n((0, 
l.transformAlgorithmId)(e, t.insertBeforeFilterPriority.options)), !1)), !0);
}, t.insertAfter = function(r, e) {
var o;
if (null == r || (0, l.isAbsentAlgorithmIdArg)(e)) return !1;
var i = this.curAlgorithmList.findIndex(function(t) {
return t.algorithmId === r;
});
return -1 !== i && ((o = this.curAlgorithmList).splice.apply(o, a([ i + 1, 0 ], n((0, 
l.transformAlgorithmId)(e, t.insertAfter.options)), !1)), !0);
}, t.insertAfterFilterPriority = function(r, e) {
var o;
if (null == r || (0, l.isAbsentAlgorithmIdArg)(e)) return !1;
var i = this.curAlgorithmList.findIndex(function(t) {
return !c(t) && t.algorithmId === r;
});
return -1 !== i && ((o = this.curAlgorithmList).splice.apply(o, a([ i + 1, 0 ], n((0, 
l.transformAlgorithmId)(e, t.insertAfterFilterPriority.options)), !1)), !0);
}, t.remove = function(t) {
if ((0, l.isAbsentAlgorithmIdArg)(t)) return !1;
var e = (0, l.toArray)(t), o = new Set(e), n = this.curAlgorithmList.filter(function(t) {
return !o.has(t.algorithmId);
}), a = n.length !== this.curAlgorithmList.length;
return a && (r._algorithmList[this._process] = n), a;
}, t.removeFilterPriority = function(t) {
if ((0, l.isAbsentAlgorithmIdArg)(t)) return !1;
var e = (0, l.toArray)(t), o = new Set(e), n = this.curAlgorithmList.filter(function(t) {
return c(t) || !o.has(t.algorithmId);
}), a = n.length !== this.curAlgorithmList.length;
return a && (r._algorithmList[this._process] = n), a;
}, t.removeCategory = function(t) {
if (null == t) return !1;
var e = (0, l.CATEGORY_TO_ENUM)()[t], o = this.curAlgorithmList.filter(function(t) {
return !Object.values(e).includes(t.algorithmId);
}), n = o.length !== this.curAlgorithmList.length;
return n && (r._algorithmList[this._process] = o), n;
}, t.replaceFirst = function(e, o) {
if ((0, l.isAbsentAlgorithmIdArg)(e) || (0, l.isAbsentAlgorithmIdArg)(o)) return !1;
var i = (0, l.toArray)(e), c = new Set(i), s = (0, l.transformAlgorithmId)(o, t.replaceFirst.options), u = this.curAlgorithmList, g = u.findIndex(function(t) {
return c.has(t.algorithmId);
});
if (-1 === g) return !1;
var h = a([], n(u), !1);
return h.splice.apply(h, a([ g, 1 ], n(s), !1)), r._algorithmList[this._process] = h, 
!0;
}, t.replace = function(e, o) {
var c, s;
if ((0, l.isAbsentAlgorithmIdArg)(e) || (0, l.isAbsentAlgorithmIdArg)(o)) return !1;
var u = (0, l.toArray)(e), g = new Set(u), h = (0, l.transformAlgorithmId)(o, t.replace.options), f = !1, d = [], y = this.curAlgorithmList;
try {
for (var p = i(y), S = p.next(); !S.done; S = p.next()) {
var m = S.value;
g.has(m.algorithmId) ? (d.push.apply(d, a([], n(h), !1)), f = !0) : d.push(m);
}
} catch (t) {
c = {
error: t
};
} finally {
try {
S && !S.done && (s = p.return) && s.call(p);
} finally {
if (c) throw c.error;
}
}
return f && (r._algorithmList[this._process] = d), f;
}, t.replaceFilterPriority = function(e, o) {
var s, u;
if ((0, l.isAbsentAlgorithmIdArg)(e) || (0, l.isAbsentAlgorithmIdArg)(o)) return !1;
var g = (0, l.toArray)(e), h = new Set(g), f = (0, l.transformAlgorithmId)(o, t.replaceFilterPriority.options), d = !1, y = [], p = this.curAlgorithmList;
try {
for (var S = i(p), m = S.next(); !m.done; m = S.next()) {
var A = m.value;
!c(A) && h.has(A.algorithmId) ? (y.push.apply(y, a([], n(f), !1)), d = !0) : y.push(A);
}
} catch (t) {
s = {
error: t
};
} finally {
try {
m && !m.done && (u = S.return) && u.call(S);
} finally {
if (s) throw s.error;
}
}
return d && (r._algorithmList[this._process] = y), d;
}, t.replaceCategory = function(t, e) {
var o, c;
if (null == t || (0, l.isAbsentAlgorithmIdArg)(e)) return !1;
var s = (0, l.CATEGORY_TO_ENUM)()[t], u = !1, g = [], h = this.curAlgorithmList;
try {
for (var f = i(h), d = f.next(); !d.done; d = f.next()) {
var y = d.value;
Object.values(s).includes(y.algorithmId) ? (g.push.apply(g, a([], n((0, l.transformAlgorithmId)(e, this.replaceCategory.options)), !1)), 
u = !0) : g.push(y);
}
} catch (t) {
o = {
error: t
};
} finally {
try {
d && !d.done && (c = f.return) && c.call(f);
} finally {
if (o) throw o.error;
}
}
return u && (r._algorithmList[this._process] = g), u;
}, t.replaceCategoryFilterPriority = function(t, e) {
var o, s;
if (null == t || (0, l.isAbsentAlgorithmIdArg)(e)) return !1;
var u = (0, l.CATEGORY_TO_ENUM)()[t], g = !1, h = [], f = this.curAlgorithmList;
try {
for (var d = i(f), y = d.next(); !y.done; y = d.next()) {
var p = y.value;
!c(p) && Object.values(u).includes(p.algorithmId) ? (h.push.apply(h, a([], n((0, 
l.transformAlgorithmId)(e, this.replaceCategoryFilterPriority.options)), !1)), g = !0) : h.push(p);
}
} catch (t) {
o = {
error: t
};
} finally {
try {
y && !y.done && (s = d.return) && s.call(d);
} finally {
if (o) throw o.error;
}
}
return g && (r._algorithmList[this._process] = h), g;
}, t.replaceAll = function(t) {
return !(0, l.isAbsentReplaceAllAlgorithmIdArg)(t) && (r._algorithmList[this._process] = (0, 
l.transformAlgorithmId)(t, this.replaceAll.options), !0);
}, t.replaceAllFilterPriority = function(t) {
if ((0, l.isAbsentReplaceAllAlgorithmIdArg)(t)) return !1;
var e = this.curAlgorithmList.filter(function(t) {
return c(t);
});
return r._algorithmList[this._process] = a(a([], n(e), !1), n((0, l.transformAlgorithmId)(t, this.replaceAllFilterPriority.options)), !1), 
!0;
}, t.replaceAllPrioritySpecialPatch = function(e) {
if ((0, l.isAbsentReplaceAllAlgorithmIdArg)(e)) return !1;
var i = this.curAlgorithmList.find(function(t) {
return c(t);
}), s = (0, l.transformAlgorithmId)(e, t.replaceAllPrioritySpecialPatch.options);
if (i && s.length > 0) {
var u = s.map(function(t) {
return o(o({}, t), {
dynamicSource: i.dynamicSource
});
});
r._algorithmList[this._process] = a(a([], n(u), !1), n(s), !1);
} else r._algorithmList[this._process] = s;
return !0;
}, t.clear = function() {
r._algorithmList.pre.length = 0, r._algorithmList.post.length = 0;
}, t.clearPostprocess = function() {
r._algorithmList.post.length = 0;
}, t._process = "pre", t;
}();
r.AlgorithmStrategyAlgorithmListOperator = s;
},
304: function(t, r, e) {
var o = this && this.__decorate || function(t, r, e, o) {
var n, a = arguments.length, i = a < 3 ? r : null === o ? o = Object.getOwnPropertyDescriptor(r, e) : o;
if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) i = Reflect.decorate(t, r, e, o); else for (var l = t.length - 1; l >= 0; l--) (n = t[l]) && (i = (a < 3 ? n(i) : a > 3 ? n(r, e, i) : n(r, e)) || i);
return a > 3 && i && Object.defineProperty(r, e, i), i;
};
Object.defineProperty(r, "__esModule", {
value: !0
}), r.AlgorithmStrategyPreprocessShareSequenceSourcePatch = void 0;
var n, a = e(5213), i = e(7594);
function l(t, r) {
if (null == t) return !1;
for (var e = !1, o = 0; o < t.length; o++) t[o].source !== r && (a.flow.source = r, 
e = !0);
return a.flow.__patch_source_ = r, e;
}
var c = function() {
function t() {}
return t.patch = function(t) {
var r = function(t, r) {
return null != t && t.source !== r && (a.flow.source = r, !0);
}(null === a.flow || void 0 === a.flow ? void 0 : a.flow.sdk, t), e = l(null === a.flow || void 0 === a.flow ? void 0 : a.flow.algorithmList, t), o = l(null === a.flow || void 0 === a.flow ? void 0 : a.flow.algorithmPriorityList, t), i = l(null === a.flow || void 0 === a.flow ? void 0 : a.flow.algorithmFallbackList, t), c = l(null === a.flow || void 0 === a.flow ? void 0 : a.flow.postAlgorithmList, t);
return !!(n !== t || r || e || o || i || c) && (n = t, !0);
}, o([ (0, i.patch)({
patchKey: "preprocessShareSequenceDynamicSource",
getStored: function() {
return n;
}
}) ], t, "patch", null), t;
}();
r.AlgorithmStrategyPreprocessShareSequenceSourcePatch = c;
},
573: function(t, r, e) {
var o = this && this.__assign || function() {
return (o = Object.assign || function(t) {
for (var r, e = 1, o = arguments.length; e < o; e++) for (var n in r = arguments[e]) Object.prototype.hasOwnProperty.call(r, n) && (t[n] = r[n]);
return t;
}).apply(this, arguments);
}, n = this && this.__read || function(t, r) {
var e = "function" == typeof Symbol && t[Symbol.iterator];
if (!e) return t;
var o, n, a = e.call(t), i = [];
try {
for (;(void 0 === r || r-- > 0) && !(o = a.next()).done; ) i.push(o.value);
} catch (t) {
n = {
error: t
};
} finally {
try {
o && !o.done && (e = a.return) && e.call(a);
} finally {
if (n) throw n.error;
}
}
return i;
}, a = this && this.__spreadArray || function(t, r, e) {
if (e || 2 === arguments.length) for (var o, n = 0, a = r.length; n < a; n++) !o && n in r || (o || (o = Array.prototype.slice.call(r, 0, n)), 
o[n] = r[n]);
return t.concat(o || Array.prototype.slice.call(r));
};
Object.defineProperty(r, "__esModule", {
value: !0
}), r.recordPatchUpdate = function(t) {
var r, e, n, a, y, p, m, A, v, b, _ = d.gameStats.nextOperationOrderValue(), T = null === (r = t.includeListSnapshots) || void 0 === r || r, C = T ? null !== (e = t.beforeList) && void 0 !== e ? e : (0, 
f.createAlgorithmListSnapshot)(c.AlgorithmStrategyAlgorithmListOperator.algorithmList) : void 0, O = T ? null !== (n = t.afterList) && void 0 !== n ? n : (0, 
f.createAlgorithmListSnapshot)(c.AlgorithmStrategyAlgorithmListOperator.algorithmList) : void 0, P = T ? null !== (a = t.beforeFallbackList) && void 0 !== a ? a : (0, 
f.createAlgorithmListSnapshot)(l.AlgorithmStrategyAlgorithmFallbackListOperator.algorithmFallbackList) : void 0, R = T ? null !== (y = t.afterFallbackList) && void 0 !== y ? y : (0, 
f.createAlgorithmListSnapshot)(l.AlgorithmStrategyAlgorithmFallbackListOperator.algorithmFallbackList) : void 0, L = T ? null !== (p = t.beforePriorityList) && void 0 !== p ? p : (0, 
f.createAlgorithmListSnapshot)(u.AlgorithmStrategyAlgorithmPriorityListOperator.algorithmPriorityList) : void 0, E = T ? null !== (m = t.afterPriorityList) && void 0 !== m ? m : (0, 
f.createAlgorithmListSnapshot)(u.AlgorithmStrategyAlgorithmPriorityListOperator.algorithmPriorityList) : void 0, I = T ? null !== (A = t.beforePostList) && void 0 !== A ? A : (0, 
f.createAlgorithmListSnapshot)(s.AlgorithmStrategyAlgorithmPostListPatchOperator.algorithmPostList) : void 0, x = T ? null !== (v = t.afterPostList) && void 0 !== v ? v : (0, 
f.createAlgorithmListSnapshot)(s.AlgorithmStrategyAlgorithmPostListPatchOperator.algorithmPostList) : void 0, k = !!T && !(0, 
f.isSameAlgorithmList)(null != C ? C : [], null != O ? O : []), D = !!T && !(0, 
f.isSameAlgorithmList)(null != P ? P : [], null != R ? R : []);
(0, h.addEvent)(o({
type: g.AlgorithmStrategyConflictType.ALGORITHM_LIST_CHANGED,
severity: "info",
process: null !== (b = t.process) && void 0 !== b ? b : "preprocess",
algorithmListSource: k ? "normal" : D ? "fallback" : void 0,
reason: "外部补丁修改了算法策略数据",
patch: {
patchKey: t.patchKey,
prev: (0, i.cloneValue)(t.prev),
next: (0, i.cloneValue)(t.next),
target: S(t.target)
},
operationOrder: _
}, T ? {
beforeAlgorithmList: C,
afterAlgorithmList: O,
beforeAlgorithmFallbackList: P,
afterAlgorithmFallbackList: R,
beforeAlgorithmPriorityList: L,
afterAlgorithmPriorityList: E,
beforeAlgorithmPostList: I,
afterAlgorithmPostList: x
} : {}));
}, r.recordBlockListFinalCheck = function(t) {
var r = p(t.beforeBlockIds), e = p(t.afterBlockIds);
if (r && e && !function(t, r) {
if (t.length !== r.length) return !1;
for (var e = 0; e < t.length; e++) if (t[e] !== r[e]) return !1;
return !0;
}(r, e)) {
var i = d.gameStats.nextOperationOrderValue(), l = {
beforeBlockIds: r,
afterBlockIds: e,
blockPatchApplied: !0
};
(function(t, r) {
var e = d.gameStats.roundFinalResults.get(y.roundStats.roundIndex);
e && d.gameStats.roundFinalResults.set(y.roundStats.roundIndex, o(o({}, e), {
operationOrder: r,
sdkData: null == e.sdkData ? e.sdkData : o(o({}, e.sdkData), {
blockIds: null == t.afterBlockIds ? e.sdkData.blockIds : a([], n(t.afterBlockIds), !1)
}),
finalBlockListPatch: t
}));
})(l, i), (0, h.addEvent)({
type: g.AlgorithmStrategyConflictType.ALGORITHM_LIST_CHANGED,
severity: "info",
process: t.process,
reason: "保命大兜底修改了最终出块列表",
patch: {
patchKey: "blockIdList",
prev: r,
next: e,
target: S(t.target)
},
blockListPatch: l,
operationOrder: i
});
}
};
var i = e(8085), l = e(9423), c = e(261), s = e(8281), u = e(3325), g = e(4727), h = e(4501), f = e(7193), d = e(2574), y = e(2940);
function p(t) {
if (Array.isArray(t)) return t.filter(function(t) {
return "number" == typeof t;
});
}
function S(t) {
if (t) {
var r = window.getClassName;
if ("function" == typeof r) {
if ("function" == typeof t) return r(t);
if ("object" == typeof t && t.constructor) return r(t.constructor);
}
return String(t);
}
}
},
578: function(t, r, e) {
var o = this && this.__assign || function() {
return (o = Object.assign || function(t) {
for (var r, e = 1, o = arguments.length; e < o; e++) for (var n in r = arguments[e]) Object.prototype.hasOwnProperty.call(r, n) && (t[n] = r[n]);
return t;
}).apply(this, arguments);
}, n = this && this.__awaiter || function(t, r, e, o) {
return new (e || (e = Promise))(function(n, a) {
function i(t) {
try {
c(o.next(t));
} catch (t) {
a(t);
}
}
function l(t) {
try {
c(o.throw(t));
} catch (t) {
a(t);
}
}
function c(t) {
var r;
t.done ? n(t.value) : (r = t.value, r instanceof e ? r : new e(function(t) {
t(r);
})).then(i, l);
}
c((o = o.apply(t, r || [])).next());
});
}, a = this && this.__generator || function(t, r) {
var e, o, n, a = {
label: 0,
sent: function() {
if (1 & n[0]) throw n[1];
return n[1];
},
trys: [],
ops: []
}, i = Object.create(("function" == typeof Iterator ? Iterator : Object).prototype);
return i.next = l(0), i.throw = l(1), i.return = l(2), "function" == typeof Symbol && (i[Symbol.iterator] = function() {
return this;
}), i;
function l(l) {
return function(c) {
return function(l) {
if (e) throw new TypeError("Generator is already executing.");
for (;i && (i = 0, l[0] && (a = 0)), a; ) try {
if (e = 1, o && (n = 2 & l[0] ? o.return : l[0] ? o.throw || ((n = o.return) && n.call(o), 
0) : o.next) && !(n = n.call(o, l[1])).done) return n;
switch (o = 0, n && (l = [ 2 & l[0], n.value ]), l[0]) {
case 0:
case 1:
n = l;
break;

case 4:
return a.label++, {
value: l[1],
done: !1
};

case 5:
a.label++, o = l[1], l = [ 0 ];
continue;

case 7:
l = a.ops.pop(), a.trys.pop();
continue;

default:
if (!((n = (n = a.trys).length > 0 && n[n.length - 1]) || 6 !== l[0] && 2 !== l[0])) {
a = 0;
continue;
}
if (3 === l[0] && (!n || l[1] > n[0] && l[1] < n[3])) {
a.label = l[1];
break;
}
if (6 === l[0] && a.label < n[1]) {
a.label = n[1], n = l;
break;
}
if (n && a.label < n[2]) {
a.label = n[2], a.ops.push(l);
break;
}
n[2] && a.ops.pop(), a.trys.pop();
continue;
}
l = r.call(t, a);
} catch (t) {
l = [ 6, t ], o = 0;
} finally {
e = n = 0;
}
if (5 & l[0]) throw l[1];
return {
value: l[0] ? l[1] : void 0,
done: !0
};
}([ l, c ]);
};
}
};
Object.defineProperty(r, "__esModule", {
value: !0
}), r.PostprocessEvaluatorType = void 0, r.runPostprocess = function(t, r, e) {
return n(this, void 0, Promise, function() {
var n, d, y, p, S, m, A, v, b, _, T, C, O, P, R, L, E, I, x, k;
return a(this, function(a) {
switch (a.label) {
case 0:
return r.process = l.AlgorithmStrategyProcessType.POSTPROCESS, n = (0, u.shallowMergePreservingAccessors)(g.algorithmStrategy.context.globalContext(), (0, 
u.mergeConditionContextFromPrototypeChain)(t, "onPostprocessConditionContext", r), {
flow: r
}), d = (0, u.mergePostprocessOrSDKConditionsFromPrototypeChain)(t, "onPostprocessConditions"), 
[ 4, rulesEngine.getFactValueAsync(n, "platform") ];

case 1:
return y = a.sent(), [ 4, rulesEngine.getFactValueAsync(n, "gameMode") ];

case 2:
return p = a.sent(), S = (0, s.filterRules)(d, {
platform: y,
gameMode: p
}), m = {
operators: (0, u.mergeConditionOperatorsFromPrototypeChain)(t, "onPostprocessConditionOperators"),
target: t
}, (A = g.algorithmStrategy.context.CC_DEBUG ? (0, f.createPostprocessConditionTraceLogger)(e, S.length) : void 0) && (m.debug = {
onTrace: A.onTrace
}), [ 4, rulesEngine.evaluateRulesConditionsFirstMatch(S, n, m) ];

case 3:
return v = a.sent(), b = v.matched, _ = v.matchedFlows, T = b && _.length > 0 ? _[0] : void 0, 
C = v.resolvedContext, O = C, P = b && (null == O ? void 0 : O[rulesEngine.RULE_RESOLVED_OPERATOR_CONTEXT_KEY]) ? o(o({}, null != e ? e : {}), ((k = {})[rulesEngine.RULE_RESOLVED_OPERATOR_CONTEXT_KEY] = O[rulesEngine.RULE_RESOLVED_OPERATOR_CONTEXT_KEY], 
k)) : e, R = (0, u.mergeActionsFromPrototypeChain)(t, "onPostprocessActions", r), 
(L = (0, c.resolvePendingActions)("postprocess", R, b ? _ : [], e)).length > 0 ? [ 4, (0, 
c.executeActions)("postprocess", L, _, t, r, P, n) ] : [ 3, 5 ];

case 4:
return E = a.sent(), g.algorithmStrategy.context.CONFLICT_DEBUG && (I = (0, c.resolveUnmatchedRuleFlows)("postprocess", R, b ? _ : [], e), 
h.AlgorithmStrategyConflictRecorder.recordPartialActionSuccess({
process: "postprocess",
traitSource: e.traitSource,
matchedRuleFlow: T,
unmatchedRuleFlows: I,
tag: e.tag,
results: E
})), x = E.some(function(t) {
return ("AlgorithmStrategyAlgorithmListOperator" === t.operator || "AlgorithmStrategyAlgorithmFallbackListOperator" === t.operator) && t.status;
}), null == A || A.logResult((0, f.formatPostprocessActionMessages)(E), x), [ 2, {
status: x,
conditionMatched: b,
type: i.PostprocessActionEvaluatorSuccess,
matchedRuleFlow: T
} ];

case 5:
return null == A || A.logResult(b ? "\n命中规则但无对应动作" : "\n条件未命中，动作未执行", !1), [ 2, {
status: !1,
conditionMatched: b,
type: i.PostprocessActionEvaluatorFail,
matchedRuleFlow: T
} ];
}
});
});
};
var i, l = e(7880), c = e(6074), s = e(2848), u = e(2436), g = e(5800), h = e(8011), f = e(2771);
!function(t) {
t[t.PostprocessActionEvaluatorSuccess = 0] = "PostprocessActionEvaluatorSuccess", 
t[t.PostprocessActionEvaluatorFail = 1] = "PostprocessActionEvaluatorFail";
}(i || (r.PostprocessEvaluatorType = i = {}));
},
777: (t, r) => {
var e;
Object.defineProperty(r, "__esModule", {
value: !0
}), r.AlgorithmStrategyWarnType = void 0, function(t) {
t.PREPROCESS_MUTEX_ALGORITHM_LIST_EMPTY = "预处理-互斥-算法列表为空", t.PREPROCESS_SHARE_SEQUENCE_ALGORITHM_LIST_EMPTY = "预处理-共享-算法列表为空";
}(e || (r.AlgorithmStrategyWarnType = e = {}));
},
801: function(t, r, e) {
var o = this && this.__decorate || function(t, r, e, o) {
var n, a = arguments.length, i = a < 3 ? r : null === o ? o = Object.getOwnPropertyDescriptor(r, e) : o;
if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) i = Reflect.decorate(t, r, e, o); else for (var l = t.length - 1; l >= 0; l--) (n = t[l]) && (i = (a < 3 ? n(i) : a > 3 ? n(r, e, i) : n(r, e)) || i);
return a > 3 && i && Object.defineProperty(r, e, i), i;
};
Object.defineProperty(r, "__esModule", {
value: !0
}), r.AlgorithmStrategyAlgoActualNamePatch = void 0;
var n, a = e(5213), i = e(7594), l = function() {
function t() {}
return t.patch = function(t) {
if (n === t) return !1;
var r = a.flow.sdk;
return r && (r.blockNames = t), n = t, !0;
}, o([ (0, i.patch)({
patchKey: "algoActualName",
getStored: function() {
return n;
}
}) ], t, "patch", null), t;
}();
r.AlgorithmStrategyAlgoActualNamePatch = l;
},
1174: function(t, r, e) {
var o = this && this.__decorate || function(t, r, e, o) {
var n, a = arguments.length, i = a < 3 ? r : null === o ? o = Object.getOwnPropertyDescriptor(r, e) : o;
if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) i = Reflect.decorate(t, r, e, o); else for (var l = t.length - 1; l >= 0; l--) (n = t[l]) && (i = (a < 3 ? n(i) : a > 3 ? n(r, e, i) : n(r, e)) || i);
return a > 3 && i && Object.defineProperty(r, e, i), i;
};
Object.defineProperty(r, "__esModule", {
value: !0
}), r.AlgorithmStrategyAlgorithmFallbackListPatch = void 0;
var n, a = e(9423), i = e(4246), l = e(7594), c = function() {
function t() {}
return t.patch = function(t) {
if (function(t, r) {
return void 0 !== t && t === r && t.length === r.length && JSON.stringify(t) === JSON.stringify(r);
}(n, t)) return !1;
for (var r = 0; r < t.length; r++) {
var e = t[r];
e.category = (0, i.getCategoryForAlgorithm)(e.algorithmId), e.algorithmListSource = "fallback";
}
return n = t, !0;
}, Object.defineProperty(t, "algorithmFallbackList", {
get: function() {
return a.AlgorithmStrategyAlgorithmFallbackListOperator.algorithmFallbackList;
},
enumerable: !1,
configurable: !0
}), o([ (0, l.patch)({
patchKey: "algorithmFallbackList",
getStored: function() {
return n;
}
}) ], t, "patch", null), t;
}();
r.AlgorithmStrategyAlgorithmFallbackListPatch = c;
},
1688: function(t, r, e) {
var o = this && this.__awaiter || function(t, r, e, o) {
return new (e || (e = Promise))(function(n, a) {
function i(t) {
try {
c(o.next(t));
} catch (t) {
a(t);
}
}
function l(t) {
try {
c(o.throw(t));
} catch (t) {
a(t);
}
}
function c(t) {
var r;
t.done ? n(t.value) : (r = t.value, r instanceof e ? r : new e(function(t) {
t(r);
})).then(i, l);
}
c((o = o.apply(t, r || [])).next());
});
}, n = this && this.__generator || function(t, r) {
var e, o, n, a = {
label: 0,
sent: function() {
if (1 & n[0]) throw n[1];
return n[1];
},
trys: [],
ops: []
}, i = Object.create(("function" == typeof Iterator ? Iterator : Object).prototype);
return i.next = l(0), i.throw = l(1), i.return = l(2), "function" == typeof Symbol && (i[Symbol.iterator] = function() {
return this;
}), i;
function l(l) {
return function(c) {
return function(l) {
if (e) throw new TypeError("Generator is already executing.");
for (;i && (i = 0, l[0] && (a = 0)), a; ) try {
if (e = 1, o && (n = 2 & l[0] ? o.return : l[0] ? o.throw || ((n = o.return) && n.call(o), 
0) : o.next) && !(n = n.call(o, l[1])).done) return n;
switch (o = 0, n && (l = [ 2 & l[0], n.value ]), l[0]) {
case 0:
case 1:
n = l;
break;

case 4:
return a.label++, {
value: l[1],
done: !1
};

case 5:
a.label++, o = l[1], l = [ 0 ];
continue;

case 7:
l = a.ops.pop(), a.trys.pop();
continue;

default:
if (!((n = (n = a.trys).length > 0 && n[n.length - 1]) || 6 !== l[0] && 2 !== l[0])) {
a = 0;
continue;
}
if (3 === l[0] && (!n || l[1] > n[0] && l[1] < n[3])) {
a.label = l[1];
break;
}
if (6 === l[0] && a.label < n[1]) {
a.label = n[1], n = l;
break;
}
if (n && a.label < n[2]) {
a.label = n[2], a.ops.push(l);
break;
}
n[2] && a.ops.pop(), a.trys.pop();
continue;
}
l = r.call(t, a);
} catch (t) {
l = [ 6, t ], o = 0;
} finally {
e = n = 0;
}
if (5 & l[0]) throw l[1];
return {
value: l[0] ? l[1] : void 0,
done: !0
};
}([ l, c ]);
};
}
}, a = this && this.__values || function(t) {
var r = "function" == typeof Symbol && Symbol.iterator, e = r && t[r], o = 0;
if (e) return e.call(t);
if (t && "number" == typeof t.length) return {
next: function() {
return t && o >= t.length && (t = void 0), {
value: t && t[o++],
done: !t
};
}
};
throw new TypeError(r ? "Object is not iterable." : "Symbol.iterator is not defined.");
}, i = this && this.__read || function(t, r) {
var e = "function" == typeof Symbol && t[Symbol.iterator];
if (!e) return t;
var o, n, a = e.call(t), i = [];
try {
for (;(void 0 === r || r-- > 0) && !(o = a.next()).done; ) i.push(o.value);
} catch (t) {
n = {
error: t
};
} finally {
try {
o && !o.done && (e = a.return) && e.call(a);
} finally {
if (n) throw n.error;
}
}
return i;
}, l = this && this.__spreadArray || function(t, r, e) {
if (e || 2 === arguments.length) for (var o, n = 0, a = r.length; n < a; n++) !o && n in r || (o || (o = Array.prototype.slice.call(r, 0, n)), 
o[n] = r[n]);
return t.concat(o || Array.prototype.slice.call(r));
};
Object.defineProperty(r, "__esModule", {
value: !0
}), r.priorityRequest = function(t) {
return o(this, void 0, Promise, function() {
var r, e, o, A, v, b, _, T, C, O, P, R, L, E, I, x, k, D, w, N, j, K, B, M, F, G, U, q, H, Y, J;
return n(this, function(n) {
switch (n.label) {
case 0:
if (t.process = p.AlgorithmStrategyProcessType.PREPROCESS_SDK_PRIORITY, !(r = d.AlgorithmStrategyAlgorithmPriorityListOperator.algorithmPriorityList) || 0 === r.length) return [ 2, !1 ];
e = -1, algorithmStrategy.context.CC_DEBUG && (0, h.logSDKAlgorithmListWithTraits)("preprocess", "SDK 请求-算法优先级列表", r), 
o = algorithmStrategy.context.configs.ALGORITHM_STRATEGY_SDK_ARGS_TRAITS_CONFIG, 
t.algorithmPriorityList = r, t.traits = o, A = Date.now(), v = 0, n.label = 1;

case 1:
return v < r.length ? (b = r[v], _ = b.router, (null === (H = algorithmStrategy.context.preprocess_sdk_strategy) || void 0 === H ? void 0 : H.continue(b.algorithmId)) ? (t.sdk || (t.sdk = {
blockIds: [],
blockNames: [],
actualAlgorithmId_SDK_REQUEST_BEFORE_Patch: e,
actualAlgorithmId_SDK_REQUEST_AFTER_Patch: e,
actualAlgorithmId: e
}), algorithmStrategy.context.CONFLICT_DEBUG && c.AlgorithmStrategyConflictRecorder.recordSDKItemSkipped(b, "预处理 continue 策略【 3X5 或者 5X3 牌面】要求跳过"), 
algorithmStrategy.context.CC_DEBUG && u.AlgorithmStrategyLog.log("✗ ".concat((0, 
g.formatSDKTraceSDKLabel)(b, {
itemIndex: v,
itemTotal: r.length
}), " 跳过：预处理 continue 策略【 3X5 或者 5X3 牌面】要求跳过"), (0, f.getAlgorithmStrategyTraceResultColor)(!1)), 
[ 3, 9 ]) : Date.now() - A > algorithmStrategy.context.timeout.preprocess_normalAlgorithm_sdk ? (algorithmStrategy.context.CONFLICT_DEBUG && c.AlgorithmStrategyConflictRecorder.recordSDKStopReason({
type: "timeout",
algorithmId: b.algorithmId
}), algorithmStrategy.context.CC_DEBUG && u.AlgorithmStrategyLog.log("✗ ".concat((0, 
g.formatSDKTraceSDKLabel)(b, {
itemIndex: v,
itemTotal: r.length
}), " 停止：预处理 SDK 超时策略要求停止"), (0, f.getAlgorithmStrategyTraceResultColor)(!1)), [ 3, 10 ]) : [ 4, (0, 
S.shouldSkipSDKItem)(b, "normal", t, v) ]) : [ 3, 10 ];

case 2:
if (n.sent()) return algorithmStrategy.context.CONFLICT_DEBUG && c.AlgorithmStrategyConflictRecorder.recordSDKItemSkipped(b, "SDK item before 生命周期要求跳过"), 
algorithmStrategy.context.CC_DEBUG && u.AlgorithmStrategyLog.log("✗ ".concat((0, 
g.formatSDKTraceSDKLabel)(b, {
itemIndex: v,
itemTotal: r.length
}), " 跳过：SDK item before 生命周期要求跳过"), (0, f.getAlgorithmStrategyTraceResultColor)(!1)), 
[ 3, 9 ];
algorithmStrategy.context.CONFLICT_DEBUG && c.AlgorithmStrategyConflictRecorder.recordSDKItemRequested("preprocess", b), 
(null === (Y = algorithmStrategy.context.ABTesting) || void 0 === Y ? void 0 : Y.AlgoSdkRequestBeforeActualIdPatch) || m.AlgorithmStrategyAlgoSdkRequestBeforeActualIdPatch.patch(b.algorithmId, this), 
T = y.AlgorithmStrategySDKRequest.createBaseInputArgs(), C = [], O = {}, P = algorithmStrategy.context.CC_DEBUG ? [] : void 0, 
R = 0, n.label = 3;

case 3:
return R < o.length ? (L = o[R], E = {
itemIndex: v,
itemTotal: r.length,
traitIndex: R,
traitTotal: o.length
}, (null == C ? void 0 : C.includes(L)) ? (algorithmStrategy.context.CC_DEBUG && (I = O[L], 
(0, g.logSDKConditionTraceSkipped)(L, I ? "跳过：被前置特性【".concat((0, u.formatTraitNameWithDescription)(I), "】通过 disableTraits 禁用") : "跳过：被前置特性 disableTraits 禁用", b, {
itemIndex: v,
itemTotal: r.length,
traitIndex: R,
traitTotal: o.length
})), [ 3, 6 ]) : (null == (x = TRAIT(L)) ? void 0 : x.onActiveCondition) && (null == x ? void 0 : x.active) ? (0, 
S.isSDKRequestTrait)(x) ? [ 4, (0, s.mergeSDKActionsArgs)(x, t, T, b, E) ] : [ 3, 5 ] : (algorithmStrategy.context.CC_DEBUG && (0, 
g.logSDKConditionTraceSkipped)(L, (0, g.formatSDKArgsTraitInactiveReason)(x), b, E), 
[ 3, 6 ])) : [ 3, 7 ];

case 4:
if (k = n.sent()) {
if (D = k.merged, w = k.args, void 0 !== D.disableTraits) {
if (algorithmStrategy.context.CC_DEBUG) try {
for (U = void 0, N = a(D.disableTraits), j = N.next(); !j.done; j = N.next()) K = j.value, 
C.includes(K) || (O[K] = L);
} catch (t) {
U = {
error: t
};
} finally {
try {
j && !j.done && (q = N.return) && q.call(N);
} finally {
if (U) throw U.error;
}
}
C = l([], i(new Set(l(l([], i(C), !1), i(D.disableTraits), !1))), !1);
}
B = algorithmStrategy.context.CONFLICT_DEBUG ? c.AlgorithmStrategyConflictRecorder.captureSDKArgsBefore(D, T) : void 0, 
y.AlgorithmStrategySDKRequest.mergeToInputArgs(T, D, L), B && c.AlgorithmStrategyConflictRecorder.recordSDKArgsMerge("preprocess", "priority", b, L, B, T), 
algorithmStrategy.context.CC_DEBUG && (null == P || P.push({
traitClassName: (0, u.formatTraitNameWithDescription)(L),
args: w
}));
}
return [ 3, 6 ];

case 5:
algorithmStrategy.context.CC_DEBUG && (0, g.logSDKConditionTraceSkipped)(L, "跳过：不是 SDK 参数特性", b, E), 
n.label = 6;

case 6:
return R++, [ 3, 3 ];

case 7:
return algorithmStrategy.context.CC_DEBUG && (u.AlgorithmStrategyLog.log("SDK 算法列表-请求-合并参数：", u.AlgorithmStrategyLog.NORMAL_COLOR), 
u.AlgorithmStrategyLog.table(null != P ? P : [])), [ 4, y.AlgorithmStrategySDKRequest.request(T, b, t) ];

case 8:
if (M = n.sent(), algorithmStrategy.context.CONFLICT_DEBUG && c.AlgorithmStrategyConflictRecorder.recordSDKItemResult(b, M), 
null == M ? void 0 : M.SDK_SUCCESS) {
if (t.process = p.AlgorithmStrategyProcessType.PREPROCESS_SDK_PRIORITY_SUCCESS, 
algorithmStrategy.context.CONFLICT_DEBUG && c.AlgorithmStrategyConflictRecorder.recordSuccessfulSDKResult("preprocess", M), 
F = null !== (J = b.dynamicSource) && void 0 !== J ? J : "journey" === algorithmStrategy.context.gameMode ? algorithmStrategy.context.ChapterAlgorithmSourceType.Priority : algorithmStrategy.context.ClassAlgorithmSourceType.Priority, 
algorithmStrategy.context.algorithmStrategySourceLevelInfo.setAlgorithmSourceLevel(F), 
!(null == _ ? void 0 : _.type) || "break" === (null == _ ? void 0 : _.type)) return algorithmStrategy.context.CONFLICT_DEBUG && (G = t, 
c.AlgorithmStrategyConflictRecorder.recordSDKStopReason({
type: "break" === (null == _ ? void 0 : _.type) ? "success-router-break" : "success-default-break",
algorithmId: b.algorithmId,
routerType: null == _ ? void 0 : _.type,
returnState: !0 === G.returnState,
returnStateProcessType: null == G.returnStateProcessType ? void 0 : String(G.returnStateProcessType),
detail: "break" === (null == _ ? void 0 : _.type) ? "router.type 为 break，SDK 成功后停止" : !0 === G.returnState ? "returnState 已设置".concat(null == G.returnStateProcessType ? "" : "（".concat(String(G.returnStateProcessType), "）"), "，且未配置 router.next，SDK 成功后停止") : "未配置 router.next，SDK 成功后默认停止"
})), [ 2, !0 ];
if ("next" === _.type) return [ 3, 9 ];
}
n.label = 9;

case 9:
return v++, [ 3, 1 ];

case 10:
return t.process = p.AlgorithmStrategyProcessType.PREPROCESS_SDK_PRIORITY_FAIL, 
[ 2, !1 ];
}
});
});
};
var c = e(8011), s = e(2436), u = e(5815), g = e(3957), h = e(3173), f = e(6582), d = e(3325), y = e(2230), p = e(7880), S = e(3768), m = e(3817);
},
2166: function(t, r) {
var e = this && this.__read || function(t, r) {
var e = "function" == typeof Symbol && t[Symbol.iterator];
if (!e) return t;
var o, n, a = e.call(t), i = [];
try {
for (;(void 0 === r || r-- > 0) && !(o = a.next()).done; ) i.push(o.value);
} catch (t) {
n = {
error: t
};
} finally {
try {
o && !o.done && (e = a.return) && e.call(a);
} finally {
if (n) throw n.error;
}
}
return i;
}, o = this && this.__spreadArray || function(t, r, e) {
if (e || 2 === arguments.length) for (var o, n = 0, a = r.length; n < a; n++) !o && n in r || (o || (o = Array.prototype.slice.call(r, 0, n)), 
o[n] = r[n]);
return t.concat(o || Array.prototype.slice.call(r));
};
Object.defineProperty(r, "__esModule", {
value: !0
}), r.AlgorithmStrategyReturnFilterOperator = void 0;
var n = function() {
function t() {}
return t.returnFilter = function(r) {
var n, a = t.returnFilter.options, i = null == a ? void 0 : a.flow;
if (i) {
var l = Array.isArray(r) ? r : [ r ];
i.returnFilter = o([], e(new Set(o(o([], e(null !== (n = i.returnFilter) && void 0 !== n ? n : []), !1), e(l), !1))), !1);
}
return !0;
}, t;
}();
r.AlgorithmStrategyReturnFilterOperator = n;
},
2196: function(t, r, e) {
var o = this && this.__decorate || function(t, r, e, o) {
var n, a = arguments.length, i = a < 3 ? r : null === o ? o = Object.getOwnPropertyDescriptor(r, e) : o;
if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) i = Reflect.decorate(t, r, e, o); else for (var l = t.length - 1; l >= 0; l--) (n = t[l]) && (i = (a < 3 ? n(i) : a > 3 ? n(r, e, i) : n(r, e)) || i);
return a > 3 && i && Object.defineProperty(r, e, i), i;
}, n = this && this.__awaiter || function(t, r, e, o) {
return new (e || (e = Promise))(function(n, a) {
function i(t) {
try {
c(o.next(t));
} catch (t) {
a(t);
}
}
function l(t) {
try {
c(o.throw(t));
} catch (t) {
a(t);
}
}
function c(t) {
var r;
t.done ? n(t.value) : (r = t.value, r instanceof e ? r : new e(function(t) {
t(r);
})).then(i, l);
}
c((o = o.apply(t, r || [])).next());
});
}, a = this && this.__generator || function(t, r) {
var e, o, n, a = {
label: 0,
sent: function() {
if (1 & n[0]) throw n[1];
return n[1];
},
trys: [],
ops: []
}, i = Object.create(("function" == typeof Iterator ? Iterator : Object).prototype);
return i.next = l(0), i.throw = l(1), i.return = l(2), "function" == typeof Symbol && (i[Symbol.iterator] = function() {
return this;
}), i;
function l(l) {
return function(c) {
return function(l) {
if (e) throw new TypeError("Generator is already executing.");
for (;i && (i = 0, l[0] && (a = 0)), a; ) try {
if (e = 1, o && (n = 2 & l[0] ? o.return : l[0] ? o.throw || ((n = o.return) && n.call(o), 
0) : o.next) && !(n = n.call(o, l[1])).done) return n;
switch (o = 0, n && (l = [ 2 & l[0], n.value ]), l[0]) {
case 0:
case 1:
n = l;
break;

case 4:
return a.label++, {
value: l[1],
done: !1
};

case 5:
a.label++, o = l[1], l = [ 0 ];
continue;

case 7:
l = a.ops.pop(), a.trys.pop();
continue;

default:
if (!((n = (n = a.trys).length > 0 && n[n.length - 1]) || 6 !== l[0] && 2 !== l[0])) {
a = 0;
continue;
}
if (3 === l[0] && (!n || l[1] > n[0] && l[1] < n[3])) {
a.label = l[1];
break;
}
if (6 === l[0] && a.label < n[1]) {
a.label = n[1], n = l;
break;
}
if (n && a.label < n[2]) {
a.label = n[2], a.ops.push(l);
break;
}
n[2] && a.ops.pop(), a.trys.pop();
continue;
}
l = r.call(t, a);
} catch (t) {
l = [ 6, t ], o = 0;
} finally {
e = n = 0;
}
if (5 & l[0]) throw l[1];
return {
value: l[0] ? l[1] : void 0,
done: !0
};
}([ l, c ]);
};
}
}, i = this && this.__values || function(t) {
var r = "function" == typeof Symbol && Symbol.iterator, e = r && t[r], o = 0;
if (e) return e.call(t);
if (t && "number" == typeof t.length) return {
next: function() {
return t && o >= t.length && (t = void 0), {
value: t && t[o++],
done: !t
};
}
};
throw new TypeError(r ? "Object is not iterable." : "Symbol.iterator is not defined.");
}, l = this && this.__read || function(t, r) {
var e = "function" == typeof Symbol && t[Symbol.iterator];
if (!e) return t;
var o, n, a = e.call(t), i = [];
try {
for (;(void 0 === r || r-- > 0) && !(o = a.next()).done; ) i.push(o.value);
} catch (t) {
n = {
error: t
};
} finally {
try {
o && !o.done && (e = a.return) && e.call(a);
} finally {
if (n) throw n.error;
}
}
return i;
}, c = this && this.__spreadArray || function(t, r, e) {
if (e || 2 === arguments.length) for (var o, n = 0, a = r.length; n < a; n++) !o && n in r || (o || (o = Array.prototype.slice.call(r, 0, n)), 
o[n] = r[n]);
return t.concat(o || Array.prototype.slice.call(r));
};
Object.defineProperty(r, "__esModule", {
value: !0
}), r.AlgorithmStrategyAlgoItemSdkRequestPatch = void 0;
var s, u = e(8011), g = e(2436), h = e(5815), f = e(5213), d = e(3768), y = e(2230), p = e(3817), S = e(7594), m = function() {
function t() {}
return t.patch = function(t, r) {
return n(this, void 0, Promise, function() {
var e, o, n, S, m, A, v, b, _, T, C, O, P, R, L, E, I;
return a(this, function(a) {
switch (a.label) {
case 0:
e = algorithmStrategy.context.configs.ALGORITHM_STRATEGY_SDK_ARGS_TRAITS_CONFIG, 
(null == r ? void 0 : r.length) > 0 && (e = e.filter(function(t) {
return !r.includes(t);
})), f.flow.traits = e, (null === (I = algorithmStrategy.context.ABTesting) || void 0 === I ? void 0 : I.AlgoSdkRequestBeforeActualIdPatch) || p.AlgorithmStrategyAlgoSdkRequestBeforeActualIdPatch.patch(t.algorithmId, this), 
o = y.AlgorithmStrategySDKRequest.createBaseInputArgs(), n = [], S = [], a.label = 1;

case 1:
a.trys.push([ 1, 6, 7, 8 ]), m = i(e), A = m.next(), a.label = 2;

case 2:
return A.done ? [ 3, 5 ] : (v = A.value, (null == n ? void 0 : n.includes(v)) ? [ 3, 4 ] : (null == (b = TRAIT(v)) ? void 0 : b.onActiveCondition) && (null == b ? void 0 : b.active) && (0, 
d.isSDKRequestTrait)(b) ? [ 4, (0, g.mergeSDKActionsArgs)(b, f.flow, o, t) ] : [ 3, 4 ]);

case 3:
(_ = a.sent()) && (T = _.merged, C = _.args, void 0 !== T.disableTraits && (n = c([], l(new Set(c(c([], l(n), !1), l(T.disableTraits), !1))), !1)), 
O = algorithmStrategy.context.CONFLICT_DEBUG ? u.AlgorithmStrategyConflictRecorder.captureSDKArgsBefore(T, o) : void 0, 
y.AlgorithmStrategySDKRequest.mergeToInputArgs(o, T, v), O && u.AlgorithmStrategyConflictRecorder.recordSDKArgsMerge(null != (x = f.flow.process) && String(x).startsWith("后处理") ? "postprocess" : "preprocess", t.algorithmListSource, t, v, O, o), 
algorithmStrategy.context.CC_DEBUG && S.push({
traitClassName: (0, h.formatTraitNameWithDescription)(v),
args: C
})), a.label = 4;

case 4:
return A = m.next(), [ 3, 2 ];

case 5:
return [ 3, 8 ];

case 6:
return P = a.sent(), L = {
error: P
}, [ 3, 8 ];

case 7:
try {
A && !A.done && (E = m.return) && E.call(m);
} finally {
if (L) throw L.error;
}
return [ 7 ];

case 8:
return algorithmStrategy.context.CC_DEBUG && (h.AlgorithmStrategyLog.log("SDK 算法列表-请求-合并参数：", h.AlgorithmStrategyLog.NORMAL_COLOR), 
h.AlgorithmStrategyLog.table(S)), [ 4, y.AlgorithmStrategySDKRequest.request(o, t, f.flow) ];

case 9:
return R = a.sent(), s = R, [ 2, R ];
}
var x;
});
});
}, o([ (0, S.patch)({
patchKey: "algoItemSdkRequest",
getStored: function() {
return s;
}
}) ], t, "patch", null), t;
}();
r.AlgorithmStrategyAlgoItemSdkRequestPatch = m;
},
2230: function(t, r, e) {
var o = this && this.__assign || function() {
return (o = Object.assign || function(t) {
for (var r, e = 1, o = arguments.length; e < o; e++) for (var n in r = arguments[e]) Object.prototype.hasOwnProperty.call(r, n) && (t[n] = r[n]);
return t;
}).apply(this, arguments);
}, n = this && this.__decorate || function(t, r, e, o) {
var n, a = arguments.length, i = a < 3 ? r : null === o ? o = Object.getOwnPropertyDescriptor(r, e) : o;
if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) i = Reflect.decorate(t, r, e, o); else for (var l = t.length - 1; l >= 0; l--) (n = t[l]) && (i = (a < 3 ? n(i) : a > 3 ? n(r, e, i) : n(r, e)) || i);
return a > 3 && i && Object.defineProperty(r, e, i), i;
}, a = this && this.__awaiter || function(t, r, e, o) {
return new (e || (e = Promise))(function(n, a) {
function i(t) {
try {
c(o.next(t));
} catch (t) {
a(t);
}
}
function l(t) {
try {
c(o.throw(t));
} catch (t) {
a(t);
}
}
function c(t) {
var r;
t.done ? n(t.value) : (r = t.value, r instanceof e ? r : new e(function(t) {
t(r);
})).then(i, l);
}
c((o = o.apply(t, r || [])).next());
});
}, i = this && this.__generator || function(t, r) {
var e, o, n, a = {
label: 0,
sent: function() {
if (1 & n[0]) throw n[1];
return n[1];
},
trys: [],
ops: []
}, i = Object.create(("function" == typeof Iterator ? Iterator : Object).prototype);
return i.next = l(0), i.throw = l(1), i.return = l(2), "function" == typeof Symbol && (i[Symbol.iterator] = function() {
return this;
}), i;
function l(l) {
return function(c) {
return function(l) {
if (e) throw new TypeError("Generator is already executing.");
for (;i && (i = 0, l[0] && (a = 0)), a; ) try {
if (e = 1, o && (n = 2 & l[0] ? o.return : l[0] ? o.throw || ((n = o.return) && n.call(o), 
0) : o.next) && !(n = n.call(o, l[1])).done) return n;
switch (o = 0, n && (l = [ 2 & l[0], n.value ]), l[0]) {
case 0:
case 1:
n = l;
break;

case 4:
return a.label++, {
value: l[1],
done: !1
};

case 5:
a.label++, o = l[1], l = [ 0 ];
continue;

case 7:
l = a.ops.pop(), a.trys.pop();
continue;

default:
if (!((n = (n = a.trys).length > 0 && n[n.length - 1]) || 6 !== l[0] && 2 !== l[0])) {
a = 0;
continue;
}
if (3 === l[0] && (!n || l[1] > n[0] && l[1] < n[3])) {
a.label = l[1];
break;
}
if (6 === l[0] && a.label < n[1]) {
a.label = n[1], n = l;
break;
}
if (n && a.label < n[2]) {
a.label = n[2], a.ops.push(l);
break;
}
n[2] && a.ops.pop(), a.trys.pop();
continue;
}
l = r.call(t, a);
} catch (t) {
l = [ 6, t ], o = 0;
} finally {
e = n = 0;
}
if (5 & l[0]) throw l[1];
return {
value: l[0] ? l[1] : void 0,
done: !0
};
}([ l, c ]);
};
}
}, l = this && this.__read || function(t, r) {
var e = "function" == typeof Symbol && t[Symbol.iterator];
if (!e) return t;
var o, n, a = e.call(t), i = [];
try {
for (;(void 0 === r || r-- > 0) && !(o = a.next()).done; ) i.push(o.value);
} catch (t) {
n = {
error: t
};
} finally {
try {
o && !o.done && (e = a.return) && e.call(a);
} finally {
if (n) throw n.error;
}
}
return i;
}, c = this && this.__spreadArray || function(t, r, e) {
if (e || 2 === arguments.length) for (var o, n = 0, a = r.length; n < a; n++) !o && n in r || (o || (o = Array.prototype.slice.call(r, 0, n)), 
o[n] = r[n]);
return t.concat(o || Array.prototype.slice.call(r));
};
Object.defineProperty(r, "__esModule", {
value: !0
}), r.AlgorithmStrategySDKRequest = void 0;
var s = e(5800), u = e(9351), g = e(5815), h = e(801), f = e(8088), d = e(7209), y = e(2698), p = e(4046), S = e(3817), m = e(6320), A = e(5531), v = function() {
function t() {}
return t.createBaseInputArgs = function() {
var t = s.algorithmStrategy.context, r = t.blockCenterPos();
return {
highRecordGrade: t.highScore(),
lastBlockIds: [ -1, -1, -1 ],
currRecordGrade: t.score(),
mode: t.gameMode,
chapterNum: storage.getItem("chapterNum", 0),
board: t.faceBlocks(),
idToRemove: new Map(),
device: t.deviceLevel,
extra: {
centerRow: r.x,
centerCol: r.y
}
};
}, t.mergeToInputArgs = function(t, r, e) {
var n, a, i, s, u, g;
for (var h in t.extra || (t.extra = {}), r) if ("disableTraits" !== h) if ("extra" === h) {
var f = r.extra;
if (f) {
if (f.traits) {
var d = o({}, null !== (n = t.extra.traits) && void 0 !== n ? n : {}), y = null !== (a = d[e]) && void 0 !== a ? a : {};
d[e] = o(o({}, y), f.traits), t.extra.traits = d;
}
f.algos && (t.extra.algos = o(o({}, null !== (s = null === (i = t.extra) || void 0 === i ? void 0 : i.algos) && void 0 !== s ? s : {}), f.algos));
}
} else if ("filterBlocks" === h || "filterWeightBlocks" === h) {
var p = null !== (u = t[h]) && void 0 !== u ? u : [], S = null !== (g = r[h]) && void 0 !== g ? g : [];
t[h] = Array.from(new Set(c(c([], l(p), !1), l(S), !1)));
} else t[h] = r[h];
}, t.request = function(t, r, e) {
return a(this, void 0, Promise, function() {
var o, n, a, A, v, _, T, C, O, P, R, L, E, I, x, k, D, w, N, j, K, B, M;
return i(this, function(i) {
switch (i.label) {
case 0:
return t.blockIds = null !== (_ = null == t ? void 0 : t.blockIds) && void 0 !== _ ? _ : [ 0, 0, 0 ], 
t.blockNames = null !== (T = null == t ? void 0 : t.blockNames) && void 0 !== T ? T : [ "", "", "" ], 
t.blockPoses = null !== (C = null == t ? void 0 : t.blockPoses) && void 0 !== C ? C : [ {
row: 0,
col: 0
}, {
row: 0,
col: 0
}, {
row: 0,
col: 0
} ], t.overTime = null !== (O = null == t ? void 0 : t.overTime) && void 0 !== O ? O : 100, 
t.filterBlocks = null !== (P = null == t ? void 0 : t.filterBlocks) && void 0 !== P ? P : [], 
t.addBlocks = null !== (R = null == t ? void 0 : t.addBlocks) && void 0 !== R ? R : [], 
t.blocksGroup = null !== (L = null == t ? void 0 : t.blocksGroup) && void 0 !== L ? L : [], 
t.filterWeightBlocks = null !== (E = null == t ? void 0 : t.filterWeightBlocks) && void 0 !== E ? E : [], 
t = (0, m.patchSdkExtraFromArgs)(t), Object.defineProperty(r, "actualAlgorithmId_SDK_REQUEST_BEFORE_Patch", {
value: r.algorithmId,
writable: !1,
configurable: !1
}), (null === (I = s.algorithmStrategy.context.ABTesting) || void 0 === I ? void 0 : I.AlgoSdkRequestBeforeActualIdPatch) && S.AlgorithmStrategyAlgoSdkRequestBeforeActualIdPatch.patch(r.algorithmId, this), 
(o = s.algorithmStrategy.context).CC_DEBUG && g.AlgorithmStrategyLog.log("SDK 请求：", g.AlgorithmStrategyLog.NORMAL_COLOR, "".concat(o.algorithmInfo.getOfferTypeDisplayName(r.algorithmId), "(").concat(r.algorithmId, ")"), JSON.parse(JSON.stringify(t))), 
o.offerTopicAsync && o.configs.ALGORITHM_STRATEGY_ASYNC_ALGORITHM_CONFIG.has(r.algorithmId) ? [ 4, o.offerTopicAsync(t, r.algorithmId) ] : [ 3, 2 ];

case 1:
return n = i.sent(), [ 3, 3 ];

case 2:
n = o.PuzzleUtil.offerTopic(t, r.algorithmId), i.label = 3;

case 3:
return o.CC_DEBUG && g.AlgorithmStrategyLog.log("SDK 返回：".concat(0 === n.errorCode && 3 === (null === (x = n.blockIds) || void 0 === x ? void 0 : x.length) ? "成功" : "失败"), g.AlgorithmStrategyLog.NORMAL_COLOR, JSON.parse(JSON.stringify(n))), 
[ 4, (0, u.invokeLifeCycle)(s.algorithmStrategy.context.configs.ALGORITHM_STRATEGY_SDK_RESULT_MUTATE_CONFIG, "onAlgorithmStrategySDKResultMutate", n, r, e) ];

case 4:
return i.sent(), (A = 0 === n.errorCode && 3 === (null === (k = n.blockIds) || void 0 === k ? void 0 : k.length)) ? (Object.defineProperty(r, "SDK_SUCCESS", {
value: !0,
writable: !1,
configurable: !1
}), r.SDK_ALGO_TYPE = n.algoType, Object.defineProperty(r, "SDK_Extra", {
value: n.extra,
writable: !1,
configurable: !1
}), Object.defineProperty(r, "actualAlgorithmId", {
value: r.algorithmId,
writable: !1,
configurable: !1
}), Object.defineProperty(r, "actualAlgorithmId_SDK_REQUEST_AFTER_Patch", {
value: r.algorithmId,
writable: !1,
configurable: !1
}), Object.defineProperty(r, "blockIds", {
value: c([], l(n.blockIds), !1),
writable: !1,
configurable: !1
}), Object.defineProperty(r, "blockNames", {
value: c([], l(n.blockNames), !1),
writable: !1,
configurable: !1
}), Object.defineProperty(r, "blockPoses", {
value: c([], l(n.blockPoses), !1),
writable: !1,
configurable: !1
}), Object.defineProperty(r, "betterBlockCount", {
value: null !== (w = null === (D = n.extra) || void 0 === D ? void 0 : D.betterBlockCount) && void 0 !== w ? w : 0,
writable: !1,
configurable: !1
}), Object.defineProperty(r, "betterSpaceCount", {
value: null !== (j = null === (N = n.extra) || void 0 === N ? void 0 : N.betterSpaceCount) && void 0 !== j ? j : 0,
writable: !1,
configurable: !1
}), Object.freeze(r.blockIds), Object.freeze(r.blockNames), Object.freeze(r.blockPoses), 
p.AlgorithmStrategyAlgoSdkRequestAfterActualIdPatch.patch(r.algorithmId, this), 
h.AlgorithmStrategyAlgoActualNamePatch.patch(c([], l(n.blockNames), !1), this), 
d.AlgorithmStrategyAlgoBlockPosListPatch.patch(c([], l(n.blockPoses), !1), this), 
f.AlgorithmStrategyAlgoBlockIdListPatch.patch(c([], l(n.blockIds), !1), this), y.AlgorithmStrategyAlgoExtraPatch.patch({
better_block: r.betterBlockCount,
better_space: r.betterSpaceCount
}, this), b.setActualAlgorithmId(r.algorithmId), a = {
actualAlgorithmId_SDK_REQUEST_BEFORE_Patch: r.actualAlgorithmId_SDK_REQUEST_BEFORE_Patch,
actualAlgorithmId_SDK_REQUEST_AFTER_Patch: r.actualAlgorithmId_SDK_REQUEST_AFTER_Patch,
source: r.source,
traitSource: r.traitSource,
algorithmListSource: r.algorithmListSource,
SDK_SUCCESS: !0,
SDK_ALGO_TYPE: r.SDK_ALGO_TYPE,
SDK_Extra: r.SDK_Extra,
actualAlgorithmId: r.actualAlgorithmId,
blockIds: r.blockIds,
blockNames: r.blockNames,
blockPoses: r.blockPoses,
betterBlockCount: r.betterBlockCount,
betterSpaceCount: r.betterSpaceCount
}, this._lastSuccessSDK = a) : (v = this._lastSuccessSDK, a = {
SDK_SUCCESS: !1,
actualAlgorithmId_SDK_REQUEST_BEFORE_Patch: r.actualAlgorithmId_SDK_REQUEST_BEFORE_Patch,
source: null == v ? void 0 : v.source,
traitSource: null == v ? void 0 : v.traitSource,
algorithmListSource: null == v ? void 0 : v.algorithmListSource,
SDK_ALGO_TYPE: null == v ? void 0 : v.SDK_ALGO_TYPE,
SDK_Extra: null == v ? void 0 : v.SDK_Extra,
actualAlgorithmId: null == v ? void 0 : v.actualAlgorithmId,
blockIds: null !== (K = null == v ? void 0 : v.blockIds) && void 0 !== K ? K : [],
blockNames: null !== (B = null == v ? void 0 : v.blockNames) && void 0 !== B ? B : [],
blockPoses: null !== (M = null == v ? void 0 : v.blockPoses) && void 0 !== M ? M : [ {
row: 0,
col: 0
}, {
row: 0,
col: 0
}, {
row: 0,
col: 0
} ],
betterBlockCount: null == v ? void 0 : v.betterBlockCount,
betterSpaceCount: null == v ? void 0 : v.betterSpaceCount
}), e.sdk = a, [ 4, (0, u.invokeLifeCycle)(s.algorithmStrategy.context.configs.ALGORITHM_STRATEGY_SDK_COMPLETE_TRAITS_CONFIG, "onAlgorithmStrategySDKComplete", A, r) ];

case 5:
return i.sent(), [ 2, a ];
}
});
});
}, t.clear = function() {
this._lastSuccessSDK = void 0;
}, n([ (0, A.className)("AlgorithmStrategySDKRequest") ], t);
}();
r.AlgorithmStrategySDKRequest = v;
var b = new (function() {
function t() {}
return Object.defineProperty(t.prototype, "actualAlgorithmId", {
get: function() {
switch (s.algorithmStrategy.context.gameMode) {
case "class":
return storage.getItem("classActualAlgorithmlId");

case "journey":
return storage.getItem("chapterActualAlgorithmlId");
}
},
enumerable: !1,
configurable: !0
}), t.prototype.setActualAlgorithmId = function(t) {
switch (s.algorithmStrategy.context.gameMode) {
case "class":
storage.setItem("classActualAlgorithmlId", t);
break;

case "journey":
storage.setItem("chapterActualAlgorithmlId", t);
}
}, t;
}())();
},
2436: function(t, r, e) {
var o = this && this.__assign || function() {
return (o = Object.assign || function(t) {
for (var r, e = 1, o = arguments.length; e < o; e++) for (var n in r = arguments[e]) Object.prototype.hasOwnProperty.call(r, n) && (t[n] = r[n]);
return t;
}).apply(this, arguments);
}, n = this && this.__awaiter || function(t, r, e, o) {
return new (e || (e = Promise))(function(n, a) {
function i(t) {
try {
c(o.next(t));
} catch (t) {
a(t);
}
}
function l(t) {
try {
c(o.throw(t));
} catch (t) {
a(t);
}
}
function c(t) {
var r;
t.done ? n(t.value) : (r = t.value, r instanceof e ? r : new e(function(t) {
t(r);
})).then(i, l);
}
c((o = o.apply(t, r || [])).next());
});
}, a = this && this.__generator || function(t, r) {
var e, o, n, a = {
label: 0,
sent: function() {
if (1 & n[0]) throw n[1];
return n[1];
},
trys: [],
ops: []
}, i = Object.create(("function" == typeof Iterator ? Iterator : Object).prototype);
return i.next = l(0), i.throw = l(1), i.return = l(2), "function" == typeof Symbol && (i[Symbol.iterator] = function() {
return this;
}), i;
function l(l) {
return function(c) {
return function(l) {
if (e) throw new TypeError("Generator is already executing.");
for (;i && (i = 0, l[0] && (a = 0)), a; ) try {
if (e = 1, o && (n = 2 & l[0] ? o.return : l[0] ? o.throw || ((n = o.return) && n.call(o), 
0) : o.next) && !(n = n.call(o, l[1])).done) return n;
switch (o = 0, n && (l = [ 2 & l[0], n.value ]), l[0]) {
case 0:
case 1:
n = l;
break;

case 4:
return a.label++, {
value: l[1],
done: !1
};

case 5:
a.label++, o = l[1], l = [ 0 ];
continue;

case 7:
l = a.ops.pop(), a.trys.pop();
continue;

default:
if (!((n = (n = a.trys).length > 0 && n[n.length - 1]) || 6 !== l[0] && 2 !== l[0])) {
a = 0;
continue;
}
if (3 === l[0] && (!n || l[1] > n[0] && l[1] < n[3])) {
a.label = l[1];
break;
}
if (6 === l[0] && a.label < n[1]) {
a.label = n[1], n = l;
break;
}
if (n && a.label < n[2]) {
a.label = n[2], a.ops.push(l);
break;
}
n[2] && a.ops.pop(), a.trys.pop();
continue;
}
l = r.call(t, a);
} catch (t) {
l = [ 6, t ], o = 0;
} finally {
e = n = 0;
}
if (5 & l[0]) throw l[1];
return {
value: l[0] ? l[1] : void 0,
done: !0
};
}([ l, c ]);
};
}
}, i = this && this.__read || function(t, r) {
var e = "function" == typeof Symbol && t[Symbol.iterator];
if (!e) return t;
var o, n, a = e.call(t), i = [];
try {
for (;(void 0 === r || r-- > 0) && !(o = a.next()).done; ) i.push(o.value);
} catch (t) {
n = {
error: t
};
} finally {
try {
o && !o.done && (e = a.return) && e.call(a);
} finally {
if (n) throw n.error;
}
}
return i;
}, l = this && this.__spreadArray || function(t, r, e) {
if (e || 2 === arguments.length) for (var o, n = 0, a = r.length; n < a; n++) !o && n in r || (o || (o = Array.prototype.slice.call(r, 0, n)), 
o[n] = r[n]);
return t.concat(o || Array.prototype.slice.call(r));
}, c = this && this.__values || function(t) {
var r = "function" == typeof Symbol && Symbol.iterator, e = r && t[r], o = 0;
if (e) return e.call(t);
if (t && "number" == typeof t.length) return {
next: function() {
return t && o >= t.length && (t = void 0), {
value: t && t[o++],
done: !t
};
}
};
throw new TypeError(r ? "Object is not iterable." : "Symbol.iterator is not defined.");
};
Object.defineProperty(r, "__esModule", {
value: !0
}), r.mergePreprocessConditionsFromPrototypeChain = function(t) {
for (var r, e, n, a, s, u, g = [], h = Object.getPrototypeOf(t); h && h !== Object.prototype; ) {
var f = h.onPreprocessConditions;
if ("function" == typeof f) {
m(t);
var d = f.call(t);
d && "object" == typeof d && g.push(d);
}
h = Object.getPrototypeOf(h);
}
if (1 === g.length) return g[0];
for (var y = {}, p = g.length - 1; p >= 0; p--) {
var S = g[p], A = {};
try {
for (var v = (r = void 0, c(new Set(l(l([], i(Object.keys(y)), !1), i(Object.keys(S)), !1)))), _ = v.next(); !_.done; _ = v.next()) {
var T = _.value, C = y[T], O = S[T];
if (void 0 !== O) if (void 0 !== C) if (Array.isArray(C) && Array.isArray(O)) {
var P = null === (s = O[0]) || void 0 === s ? void 0 : s.mergeType;
A[T] = b(C, O, P);
} else if ("object" != typeof C || null === C || Array.isArray(C) || "object" != typeof O || null === O || Array.isArray(O)) A[T] = O; else {
var R = o({}, C);
try {
for (var L = (n = void 0, c(Object.keys(O))), E = L.next(); !E.done; E = L.next()) {
var I = E.value, x = C[I], k = O[I];
Array.isArray(x) && Array.isArray(k) ? (P = null === (u = k[0]) || void 0 === u ? void 0 : u.mergeType, 
R[I] = b(x, k, P)) : void 0 !== k && (R[I] = k);
}
} catch (t) {
n = {
error: t
};
} finally {
try {
E && !E.done && (a = L.return) && a.call(L);
} finally {
if (n) throw n.error;
}
}
A[T] = R;
} else A[T] = O; else A[T] = C;
}
} catch (t) {
r = {
error: t
};
} finally {
try {
_ && !_.done && (e = v.return) && e.call(v);
} finally {
if (r) throw r.error;
}
}
y = A;
}
return y;
}, r.mergePostprocessOrSDKConditionsFromPrototypeChain = f, r.mergeActionsFromPrototypeChain = d, 
r.mergeConditionContextFromPrototypeChain = p, r.mergeConditionOperatorsFromPrototypeChain = S, 
r.mergeSDKActionsArgs = function(t, r, e, o, h) {
return n(this, void 0, Promise, function() {
var n, y, m, v, b, T, C, O, P, R, L, E, I, x, k, D, w, N, j;
return a(this, function(a) {
switch (a.label) {
case 0:
return t && t.onSDKArgsConditions && t.onSDKArgsActions ? (n = _.apply(void 0, l([ s.algorithmStrategy.context.globalContext(), p(t, "onSDKArgsConditionContext", r, e, o) ], i(null != r ? [ {
flow: r
} ] : []), !1)), y = f(t, "onSDKArgsConditions"), [ 4, rulesEngine.getFactValueAsync(n, "platform") ]) : [ 2, void 0 ];

case 1:
return m = a.sent(), [ 4, rulesEngine.getFactValueAsync(n, "gameMode") ];

case 2:
return v = a.sent(), b = (0, g.filterRules)(y, {
platform: m,
gameMode: v
}), (T = d(t, "onSDKArgsActions", e)) ? (C = {
operators: S(t, "onSDKArgsConditionOperators"),
target: t
}, s.algorithmStrategy.context.CC_DEBUG && (O = (0, u.createSDKConditionTraceLogger)(t, b.length, o, h), 
C.debug = {
onTrace: O.onTrace
}, y.length > 0 && 0 === b.length && O.logSkipped("条件规则过滤为空：platform=".concat(m, "，gameMode=").concat(v, "，原始规则=").concat(y.length))), 
[ 4, rulesEngine.evaluateRulesConditionsFirstMatch(b, n, C) ]) : [ 2, void 0 ];

case 3:
if (P = a.sent(), R = P.matched, L = P.matchedFlows, E = {}, I = {}, R && L.length > 0) try {
for (x = c(L), k = x.next(); !k.done; k = x.next()) D = k.value, (w = A(T[D], e)) && (I = w, 
Object.assign(E, w), null == O || O.addArgs(D, w));
} catch (t) {
N = {
error: t
};
} finally {
try {
k && !k.done && (j = x.return) && j.call(x);
} finally {
if (N) throw N.error;
}
} else (w = A(T.else, e)) && (I = w, Object.assign(E, w), null == O || O.addArgs("else", w));
return null == O || O.logResult(), [ 2, Object.keys(E).length > 0 ? {
merged: E,
args: I
} : void 0 ];
}
});
});
}, r.deepMergeActions = v, r.mergeRulesArray = b, r.shallowMergePreservingAccessors = _;
var s = e(5800), u = e(3957), g = e(2848), h = e(8011);
function f(t, r) {
for (var e, o = [], n = Object.getPrototypeOf(t); n && n !== Object.prototype; ) {
var a = n[r];
if ("function" == typeof a) {
m(t);
var i = a.call(t);
Array.isArray(i) && o.push(i);
}
n = Object.getPrototypeOf(n);
}
for (var l = [], c = o.length - 1; c >= 0; c--) {
var s = o[c];
l = b(l, s, null === (e = s[0]) || void 0 === e ? void 0 : e.mergeType);
}
return l;
}
function d(t, r, e) {
for (var o, n, a, i, l = [], s = Object.getPrototypeOf(t); s && s !== Object.prototype; ) {
var u = s[r];
if ("function" == typeof u) {
var g;
m(t), null != (g = u.call(t, e)) && l.push(g);
}
s = Object.getPrototypeOf(s);
}
for (var h = void 0, f = l.length - 1; f >= 0; f--) h = v(h, l[f]);
var d = y(h);
if (d) try {
for (var p = c(Object.keys(d)), S = p.next(); !S.done; S = p.next()) {
var A = d[S.value];
if (null === (i = A.extra) || void 0 === i ? void 0 : i.traits) {
var b = A.extra.traits;
A.extra.traits = ((a = {})[t.traitName] = b, a);
}
}
} catch (t) {
o = {
error: t
};
} finally {
try {
S && !S.done && (n = p.return) && n.call(p);
} finally {
if (o) throw o.error;
}
}
return d;
}
function y(t) {
var r, e;
if (Array.isArray(t)) return t.map(y);
if (null != t && "object" == typeof t) {
var o = {};
try {
for (var n = c(Object.keys(t)), a = n.next(); !a.done; a = n.next()) {
var i = a.value;
o[i] = y(t[i]);
}
} catch (t) {
r = {
error: t
};
} finally {
try {
a && !a.done && (e = n.return) && e.call(n);
} finally {
if (r) throw r.error;
}
}
return o;
}
return t;
}
function p(t, r, e, o, n) {
for (var a = [], i = Object.getPrototypeOf(t); i && i !== Object.prototype; ) {
var l = i[r];
if ("function" == typeof l) {
m(t);
var c;
(c = "onSDKArgsConditionContext" === r ? l.call(t, e, o, n) : l.call(t, e)) && "object" == typeof c && a.push(c);
}
i = Object.getPrototypeOf(i);
}
for (var s = {}, u = a.length - 1; u >= 0; u--) s = _(s, a[u]);
return s;
}
function S(t, r) {
for (var e = [], n = Object.getPrototypeOf(t); n && n !== Object.prototype; ) {
var a = n[r];
if ("function" == typeof a) {
var i = a.call(t);
i && "object" == typeof i && !Array.isArray(i) && e.push(i);
}
n = Object.getPrototypeOf(n);
}
for (var l = {}, c = e.length - 1; c >= 0; c--) l = o(o({}, l), e[c]);
return l;
}
function m(t) {
if (s.algorithmStrategy.context.CONFLICT_DEBUG) {
var r = null == t ? void 0 : t.traitName;
h.AlgorithmStrategyConflictRecorder.recordTraitTrigger(r);
}
}
function A(t, r) {
return "function" == typeof t ? t(r) : t;
}
function v(t, r) {
var e, n;
if (null == r) return t;
if (null == t) return r;
if (Array.isArray(r)) return r;
if (Array.isArray(t) && !Array.isArray(r)) return r;
if ("object" == typeof r && null !== r && "object" == typeof t && null !== t && !Array.isArray(t) && !Array.isArray(r)) {
var a = o({}, t);
try {
for (var i = c(Object.keys(r)), l = i.next(); !l.done; l = i.next()) {
var s = l.value;
a[s] = v(t[s], r[s]);
}
} catch (t) {
e = {
error: t
};
} finally {
try {
l && !l.done && (n = i.return) && n.call(i);
} finally {
if (e) throw e.error;
}
}
return a;
}
return r;
}
function b(t, r, e) {
return "prepend" === e ? l(l([], i(r || []), !1), i(t || []), !1) : l("append" === e ? l([], i(t || []), !1) : [], i(r || []), !1);
}
function _() {
for (var t, r, e, o, n = [], a = 0; a < arguments.length; a++) n[a] = arguments[a];
var i = {};
try {
for (var l = c(n), s = l.next(); !s.done; s = l.next()) {
var u = s.value;
if (null != u && "object" == typeof u) try {
for (var g = (e = void 0, c(Reflect.ownKeys(u))), h = g.next(); !h.done; h = g.next()) {
var f = h.value;
if ("__proto__" !== f) {
var d = Object.getOwnPropertyDescriptor(u, f);
d && Object.defineProperty(i, f, d);
}
}
} catch (t) {
e = {
error: t
};
} finally {
try {
h && !h.done && (o = g.return) && o.call(g);
} finally {
if (e) throw e.error;
}
}
}
} catch (r) {
t = {
error: r
};
} finally {
try {
s && !s.done && (r = l.return) && r.call(l);
} finally {
if (t) throw t.error;
}
}
return i;
}
},
2574: (t, r, e) => {
Object.defineProperty(r, "__esModule", {
value: !0
}), r.gameStats = void 0;
var o = e(3003), n = e(2940), a = function() {
function t() {
this.gameIndex = 0, this.nextEventId = 1, this.nextOperationOrder = 1, this.events = [], 
this.traitCallCount = new Map(), this.roundFinalResults = new Map(), this.gameAlgorithmCount = new Map(), 
this.gameAlgorithmTraitCount = new Map(), this.gameAlgorithmLastTraitSource = new Map(), 
this.gameAlgorithmBlockNameCount = new Map(), this.gameAlgorithmBlockNameTraitCount = new Map(), 
this.gameAlgorithmBlockNames = new Map();
}
return t.prototype.resetGame = function(t) {
this.gameIndex = t, n.roundStats.roundIndex = 0, this.nextEventId = 1, this.nextOperationOrder = 1, 
this.events = [], this.roundFinalResults.clear(), this.traitCallCount.clear(), this.ensureGameIndex(this.gameIndex), 
n.roundStats.reset();
}, t.prototype.nextEventID = function() {
return this.nextEventId++;
}, t.prototype.nextOperationOrderValue = function() {
return this.nextOperationOrder++;
}, t.prototype.ensureGameIndex = function(t) {
this.gameAlgorithmCount.has(t) || this.gameAlgorithmCount.set(t, new Map()), this.gameAlgorithmTraitCount.has(t) || this.gameAlgorithmTraitCount.set(t, new Map()), 
this.gameAlgorithmLastTraitSource.has(t) || this.gameAlgorithmLastTraitSource.set(t, new Map()), 
this.gameAlgorithmBlockNameCount.has(t) || this.gameAlgorithmBlockNameCount.set(t, new Map()), 
this.gameAlgorithmBlockNameTraitCount.has(t) || this.gameAlgorithmBlockNameTraitCount.set(t, new Map()), 
this.gameAlgorithmBlockNames.has(t) || this.gameAlgorithmBlockNames.set(t, new Map());
}, t.prototype.getAlgorithmCount = function() {
var t = this.gameAlgorithmCount.get(this.gameIndex);
return t || (t = new Map(), this.gameAlgorithmCount.set(this.gameIndex, t)), t;
}, t.prototype.getAlgorithmTraitCount = function() {
var t = this.gameAlgorithmTraitCount.get(this.gameIndex);
return t || (t = new Map(), this.gameAlgorithmTraitCount.set(this.gameIndex, t)), 
t;
}, t.prototype.getAlgorithmLastTraitSource = function() {
var t = this.gameAlgorithmLastTraitSource.get(this.gameIndex);
return t || (t = new Map(), this.gameAlgorithmLastTraitSource.set(this.gameIndex, t)), 
t;
}, t.prototype.getAlgorithmBlockNameCount = function() {
var t = this.gameAlgorithmBlockNameCount.get(this.gameIndex);
return t || (t = new Map(), this.gameAlgorithmBlockNameCount.set(this.gameIndex, t)), 
t;
}, t.prototype.getAlgorithmBlockNameTraitCount = function() {
var t = this.gameAlgorithmBlockNameTraitCount.get(this.gameIndex);
return t || (t = new Map(), this.gameAlgorithmBlockNameTraitCount.set(this.gameIndex, t)), 
t;
}, t.prototype.getAlgorithmBlockNames = function() {
var t = this.gameAlgorithmBlockNames.get(this.gameIndex);
return t || (t = new Map(), this.gameAlgorithmBlockNames.set(this.gameIndex, t)), 
t;
}, t.prototype.recordAlgorithmResult = function(t, r, e) {
var o, n = this.getAlgorithmCount(), a = this.getAlgorithmLastTraitSource();
n.set(t, (null !== (o = n.get(t)) && void 0 !== o ? o : 0) + 1), this.addAlgorithmTraitCount(t, r), 
a.set(t, r), this.recordAlgorithmBlockNameResult(e, r);
}, t.prototype.addAlgorithmTraitCount = function(t, r) {
var e, o = this.getAlgorithmTraitCount(), n = o.get(t);
n || (n = new Map(), o.set(t, n)), n.set(r, (null !== (e = n.get(r)) && void 0 !== e ? e : 0) + 1);
}, t.prototype.recordAlgorithmBlockNameResult = function(t, r) {
var e, n = (0, o.createAlgorithmBlockNameKey)(t);
if (n) {
var a = this.getAlgorithmBlockNameCount(), i = this.getAlgorithmBlockNames();
a.set(n, (null !== (e = a.get(n)) && void 0 !== e ? e : 0) + 1), r && this.addAlgorithmBlockNameTraitCount(n, r), 
i.set(n, n.split(o.ALGORITHM_BLOCK_NAME_SEPARATOR));
}
}, t.prototype.addAlgorithmBlockNameTraitCount = function(t, r) {
var e, o = this.getAlgorithmBlockNameTraitCount(), n = o.get(t);
n || (n = new Map(), o.set(t, n)), n.set(r, (null !== (e = n.get(r)) && void 0 !== e ? e : 0) + 1);
}, t;
}();
r.gameStats = new a();
},
2616: function(t, r, e) {
var o = this && this.__awaiter || function(t, r, e, o) {
return new (e || (e = Promise))(function(n, a) {
function i(t) {
try {
c(o.next(t));
} catch (t) {
a(t);
}
}
function l(t) {
try {
c(o.throw(t));
} catch (t) {
a(t);
}
}
function c(t) {
var r;
t.done ? n(t.value) : (r = t.value, r instanceof e ? r : new e(function(t) {
t(r);
})).then(i, l);
}
c((o = o.apply(t, r || [])).next());
});
}, n = this && this.__generator || function(t, r) {
var e, o, n, a = {
label: 0,
sent: function() {
if (1 & n[0]) throw n[1];
return n[1];
},
trys: [],
ops: []
}, i = Object.create(("function" == typeof Iterator ? Iterator : Object).prototype);
return i.next = l(0), i.throw = l(1), i.return = l(2), "function" == typeof Symbol && (i[Symbol.iterator] = function() {
return this;
}), i;
function l(l) {
return function(c) {
return function(l) {
if (e) throw new TypeError("Generator is already executing.");
for (;i && (i = 0, l[0] && (a = 0)), a; ) try {
if (e = 1, o && (n = 2 & l[0] ? o.return : l[0] ? o.throw || ((n = o.return) && n.call(o), 
0) : o.next) && !(n = n.call(o, l[1])).done) return n;
switch (o = 0, n && (l = [ 2 & l[0], n.value ]), l[0]) {
case 0:
case 1:
n = l;
break;

case 4:
return a.label++, {
value: l[1],
done: !1
};

case 5:
a.label++, o = l[1], l = [ 0 ];
continue;

case 7:
l = a.ops.pop(), a.trys.pop();
continue;

default:
if (!((n = (n = a.trys).length > 0 && n[n.length - 1]) || 6 !== l[0] && 2 !== l[0])) {
a = 0;
continue;
}
if (3 === l[0] && (!n || l[1] > n[0] && l[1] < n[3])) {
a.label = l[1];
break;
}
if (6 === l[0] && a.label < n[1]) {
a.label = n[1], n = l;
break;
}
if (n && a.label < n[2]) {
a.label = n[2], a.ops.push(l);
break;
}
n[2] && a.ops.pop(), a.trys.pop();
continue;
}
l = r.call(t, a);
} catch (t) {
l = [ 6, t ], o = 0;
} finally {
e = n = 0;
}
if (5 & l[0]) throw l[1];
return {
value: l[0] ? l[1] : void 0,
done: !0
};
}([ l, c ]);
};
}
}, a = this && this.__values || function(t) {
var r = "function" == typeof Symbol && Symbol.iterator, e = r && t[r], o = 0;
if (e) return e.call(t);
if (t && "number" == typeof t.length) return {
next: function() {
return t && o >= t.length && (t = void 0), {
value: t && t[o++],
done: !t
};
}
};
throw new TypeError(r ? "Object is not iterable." : "Symbol.iterator is not defined.");
}, i = this && this.__read || function(t, r) {
var e = "function" == typeof Symbol && t[Symbol.iterator];
if (!e) return t;
var o, n, a = e.call(t), i = [];
try {
for (;(void 0 === r || r-- > 0) && !(o = a.next()).done; ) i.push(o.value);
} catch (t) {
n = {
error: t
};
} finally {
try {
o && !o.done && (e = a.return) && e.call(a);
} finally {
if (n) throw n.error;
}
}
return i;
}, l = this && this.__spreadArray || function(t, r, e) {
if (e || 2 === arguments.length) for (var o, n = 0, a = r.length; n < a; n++) !o && n in r || (o || (o = Array.prototype.slice.call(r, 0, n)), 
o[n] = r[n]);
return t.concat(o || Array.prototype.slice.call(r));
};
Object.defineProperty(r, "__esModule", {
value: !0
}), r.postRequest = function(t) {
return o(this, void 0, Promise, function() {
var r, e, o, v, b, _, T, C, O, P, R, L, E, I, x, k, D, w, N, j, K, B, M, F, G, U, q, H, Y, J, W;
return n(this, function(n) {
switch (n.label) {
case 0:
if (t.process = S.AlgorithmStrategyProcessType.PREPROCESS_SDK_POST, !(r = y.AlgorithmStrategyAlgorithmPostListPatchOperator.algorithmPostList) || 0 === r.length) return [ 2, !1 ];
if (e = algorithmStrategy.context.categoryToOfferEnum[c.AlgorithmStrategyCategoryType.DIFFICULT], 
!Object.values(e).includes(null === (Y = t.sdk) || void 0 === Y ? void 0 : Y.actualAlgorithmId_SDK_REQUEST_BEFORE_Patch)) return [ 2, !1 ];
o = -1, algorithmStrategy.context.CC_DEBUG && (0, f.logSDKAlgorithmListWithTraits)("preprocess", "SDK 请求-算法优先级列表", r), 
v = algorithmStrategy.context.configs.ALGORITHM_STRATEGY_SDK_ARGS_TRAITS_CONFIG, 
t.algorithmPostList = r, t.traits = v, b = Date.now(), _ = 0, n.label = 1;

case 1:
return _ < r.length ? (T = r[_], C = T.router, (null === (J = algorithmStrategy.context.preprocess_sdk_strategy) || void 0 === J ? void 0 : J.continue(T.algorithmId)) ? (t.sdk || (t.sdk = {
blockIds: [],
blockNames: [],
actualAlgorithmId_SDK_REQUEST_BEFORE_Patch: o,
actualAlgorithmId_SDK_REQUEST_AFTER_Patch: o,
actualAlgorithmId: o
}), algorithmStrategy.context.CONFLICT_DEBUG && s.AlgorithmStrategyConflictRecorder.recordSDKItemSkipped(T, "预处理 continue 策略【 3X5 或者 5X3 牌面】要求跳过"), 
algorithmStrategy.context.CC_DEBUG && g.AlgorithmStrategyLog.log("✗ ".concat((0, 
h.formatSDKTraceSDKLabel)(T, {
itemIndex: _,
itemTotal: r.length
}), " 跳过：预处理 continue 策略【 3X5 或者 5X3 牌面】要求跳过"), (0, d.getAlgorithmStrategyTraceResultColor)(!1)), 
[ 3, 9 ]) : Date.now() - b > algorithmStrategy.context.timeout.preprocess_normalAlgorithm_sdk ? (algorithmStrategy.context.CONFLICT_DEBUG && s.AlgorithmStrategyConflictRecorder.recordSDKStopReason({
type: "timeout",
algorithmId: T.algorithmId
}), algorithmStrategy.context.CC_DEBUG && g.AlgorithmStrategyLog.log("✗ ".concat((0, 
h.formatSDKTraceSDKLabel)(T, {
itemIndex: _,
itemTotal: r.length
}), " 停止：预处理 SDK 超时策略要求停止"), (0, d.getAlgorithmStrategyTraceResultColor)(!1)), [ 3, 10 ]) : [ 4, (0, 
m.shouldSkipSDKItem)(T, "normal", t, _) ]) : [ 3, 10 ];

case 2:
if (n.sent()) return algorithmStrategy.context.CONFLICT_DEBUG && s.AlgorithmStrategyConflictRecorder.recordSDKItemSkipped(T, "SDK item before 生命周期要求跳过"), 
algorithmStrategy.context.CC_DEBUG && g.AlgorithmStrategyLog.log("✗ ".concat((0, 
h.formatSDKTraceSDKLabel)(T, {
itemIndex: _,
itemTotal: r.length
}), " 跳过：SDK item before 生命周期要求跳过"), (0, d.getAlgorithmStrategyTraceResultColor)(!1)), 
[ 3, 9 ];
algorithmStrategy.context.CONFLICT_DEBUG && s.AlgorithmStrategyConflictRecorder.recordSDKItemRequested("preprocess", T), 
(null === (W = algorithmStrategy.context.ABTesting) || void 0 === W ? void 0 : W.AlgoSdkRequestBeforeActualIdPatch) || A.AlgorithmStrategyAlgoSdkRequestBeforeActualIdPatch.patch(T.algorithmId, this), 
O = p.AlgorithmStrategySDKRequest.createBaseInputArgs(), P = [], R = {}, L = algorithmStrategy.context.CC_DEBUG ? [] : void 0, 
E = 0, n.label = 3;

case 3:
return E < v.length ? (I = v[E], x = {
itemIndex: _,
itemTotal: r.length,
traitIndex: E,
traitTotal: v.length
}, (null == P ? void 0 : P.includes(I)) ? (algorithmStrategy.context.CC_DEBUG && (k = R[I], 
(0, h.logSDKConditionTraceSkipped)(I, k ? "跳过：被前置特性【".concat((0, g.formatTraitNameWithDescription)(k), "】通过 disableTraits 禁用") : "跳过：被前置特性 disableTraits 禁用", T, x)), 
[ 3, 6 ]) : (null == (D = TRAIT(I)) ? void 0 : D.onActiveCondition) && (null == D ? void 0 : D.active) ? (0, 
m.isSDKRequestTrait)(D) ? [ 4, (0, u.mergeSDKActionsArgs)(D, t, O, T, x) ] : [ 3, 5 ] : (algorithmStrategy.context.CC_DEBUG && (0, 
h.logSDKConditionTraceSkipped)(I, (0, h.formatSDKArgsTraitInactiveReason)(D), T, x), 
[ 3, 6 ])) : [ 3, 7 ];

case 4:
if (w = n.sent()) {
if (N = w.merged, j = w.args, void 0 !== N.disableTraits) {
if (algorithmStrategy.context.CC_DEBUG) try {
for (q = void 0, K = a(N.disableTraits), B = K.next(); !B.done; B = K.next()) M = B.value, 
P.includes(M) || (R[M] = I);
} catch (t) {
q = {
error: t
};
} finally {
try {
B && !B.done && (H = K.return) && H.call(K);
} finally {
if (q) throw q.error;
}
}
P = l([], i(new Set(l(l([], i(P), !1), i(N.disableTraits), !1))), !1);
}
F = algorithmStrategy.context.CONFLICT_DEBUG ? s.AlgorithmStrategyConflictRecorder.captureSDKArgsBefore(N, O) : void 0, 
p.AlgorithmStrategySDKRequest.mergeToInputArgs(O, N, I), F && s.AlgorithmStrategyConflictRecorder.recordSDKArgsMerge("preprocess", "post", T, I, F, O), 
algorithmStrategy.context.CC_DEBUG && (null == L || L.push({
traitClassName: (0, g.formatTraitNameWithDescription)(I),
args: j
}));
}
return [ 3, 6 ];

case 5:
algorithmStrategy.context.CC_DEBUG && (0, h.logSDKConditionTraceSkipped)(I, "跳过：不是 SDK 参数特性", T, x), 
n.label = 6;

case 6:
return E++, [ 3, 3 ];

case 7:
return algorithmStrategy.context.CC_DEBUG && (g.AlgorithmStrategyLog.log("SDK 算法列表-请求-合并参数：", g.AlgorithmStrategyLog.NORMAL_COLOR), 
g.AlgorithmStrategyLog.table(null != L ? L : [])), [ 4, p.AlgorithmStrategySDKRequest.request(O, T, t) ];

case 8:
if (G = n.sent(), algorithmStrategy.context.CONFLICT_DEBUG && s.AlgorithmStrategyConflictRecorder.recordSDKItemResult(T, G), 
null == G ? void 0 : G.SDK_SUCCESS) {
if (t.process = S.AlgorithmStrategyProcessType.PREPROCESS_SDK_POST_SUCCESS, algorithmStrategy.context.CONFLICT_DEBUG && s.AlgorithmStrategyConflictRecorder.recordSuccessfulSDKResult("preprocess", G), 
T.dynamicSource && algorithmStrategy.context.algorithmStrategySourceLevelInfo.setAlgorithmSourceLevel(T.dynamicSource), 
!(null == C ? void 0 : C.type) || "break" === (null == C ? void 0 : C.type)) return algorithmStrategy.context.CONFLICT_DEBUG && (U = t, 
s.AlgorithmStrategyConflictRecorder.recordSDKStopReason({
type: "break" === (null == C ? void 0 : C.type) ? "success-router-break" : "success-default-break",
algorithmId: T.algorithmId,
routerType: null == C ? void 0 : C.type,
returnState: !0 === U.returnState,
returnStateProcessType: null == U.returnStateProcessType ? void 0 : String(U.returnStateProcessType),
detail: "break" === (null == C ? void 0 : C.type) ? "router.type 为 break，SDK 成功后停止" : !0 === U.returnState ? "returnState 已设置".concat(null == U.returnStateProcessType ? "" : "（".concat(String(U.returnStateProcessType), "）"), "，且未配置 router.next，SDK 成功后停止") : "未配置 router.next，SDK 成功后默认停止"
})), [ 2, !0 ];
if ("next" === C.type) return [ 3, 9 ];
}
n.label = 9;

case 9:
return _++, [ 3, 1 ];

case 10:
return t.process = S.AlgorithmStrategyProcessType.PREPROCESS_SDK_POST_FAIL, [ 2, !1 ];
}
});
});
};
var c = e(8978), s = e(8011), u = e(2436), g = e(5815), h = e(3957), f = e(3173), d = e(6582), y = e(8281), p = e(2230), S = e(7880), m = e(3768), A = e(3817);
},
2688: function(t, r) {
var e = this && this.__values || function(t) {
var r = "function" == typeof Symbol && Symbol.iterator, e = r && t[r], o = 0;
if (e) return e.call(t);
if (t && "number" == typeof t.length) return {
next: function() {
return t && o >= t.length && (t = void 0), {
value: t && t[o++],
done: !t
};
}
};
throw new TypeError(r ? "Object is not iterable." : "Symbol.iterator is not defined.");
};
Object.defineProperty(r, "__esModule", {
value: !0
}), r.AlgorithmStrategyDisableOperator = void 0;
var o = function() {
function t() {}
return t.disable = function(r) {
var o, n, a = t.disable.options, i = null == a ? void 0 : a.flow;
if (i) {
Array.isArray(i.disabledTraits) || (i.disabledTraits = []);
var l = Array.isArray(r) ? r : [ r ];
try {
for (var c = e(l), s = c.next(); !s.done; s = c.next()) {
var u = s.value;
i.disabledTraits.includes(u) || i.disabledTraits.push(u);
}
} catch (t) {
o = {
error: t
};
} finally {
try {
s && !s.done && (n = c.return) && n.call(c);
} finally {
if (o) throw o.error;
}
}
}
return !0;
}, t.disableTag = function(r) {
var o, n, a = t.disableTag.options, i = null == a ? void 0 : a.flow;
if (i) {
Array.isArray(i.disabledTags) || (i.disabledTags = []);
var l = Array.isArray(r) ? r : [ r ];
try {
for (var c = e(l), s = c.next(); !s.done; s = c.next()) {
var u = s.value;
i.disabledTags.includes(u) || i.disabledTags.push(u);
}
} catch (t) {
o = {
error: t
};
} finally {
try {
s && !s.done && (n = c.return) && n.call(c);
} finally {
if (o) throw o.error;
}
}
}
return !0;
}, t.disablePostTag = function(r, o) {
var n, a, i = t.disablePostTag.options, l = null == i ? void 0 : i.flow;
if (l) {
o && (l.__traitAlgoSuccess__ = !0), Array.isArray(l.disabledPostTags) || (l.disabledPostTags = []);
var c = Array.isArray(r) ? r : [ r ];
try {
for (var s = e(c), u = s.next(); !u.done; u = s.next()) {
var g = u.value;
l.disabledPostTags.includes(g) || l.disabledPostTags.push(g);
}
} catch (t) {
n = {
error: t
};
} finally {
try {
u && !u.done && (a = s.return) && a.call(s);
} finally {
if (n) throw n.error;
}
}
}
return !0;
}, t.disablePostRestTags = function(r) {
var e = t.disablePostRestTags.options, o = null == e ? void 0 : e.flow;
return o && (r && (o.__traitAlgoSuccess__ = !0), o.disabledPostRestTags = !0), !0;
}, t;
}();
r.AlgorithmStrategyDisableOperator = o;
},
2698: function(t, r, e) {
var o = this && this.__decorate || function(t, r, e, o) {
var n, a = arguments.length, i = a < 3 ? r : null === o ? o = Object.getOwnPropertyDescriptor(r, e) : o;
if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) i = Reflect.decorate(t, r, e, o); else for (var l = t.length - 1; l >= 0; l--) (n = t[l]) && (i = (a < 3 ? n(i) : a > 3 ? n(r, e, i) : n(r, e)) || i);
return a > 3 && i && Object.defineProperty(r, e, i), i;
};
Object.defineProperty(r, "__esModule", {
value: !0
}), r.AlgorithmStrategyAlgoExtraPatch = void 0;
var n, a = e(5213), i = e(7594), l = function() {
function t() {}
return t.patch = function(t) {
return !function(t, r) {
return void 0 !== t && t === r && JSON.stringify(t) === JSON.stringify(r);
}(n, t) && (a.flow.sdk && (a.flow.sdk.betterBlockCount = t.better_block, a.flow.sdk.betterSpaceCount = t.better_space), 
n = t, !0);
}, o([ (0, i.patch)({
patchKey: "blockExtraList",
getStored: function() {
return n;
}
}) ], t, "patch", null), t;
}();
r.AlgorithmStrategyAlgoExtraPatch = l;
},
2771: (t, r, e) => {
Object.defineProperty(r, "__esModule", {
value: !0
}), r.formatPostprocessActionMessages = function(t) {
return (0, o.formatActionExecuteMessages)(t);
}, r.createPostprocessConditionTraceLogger = function(t, r) {
var e, o, a, i, l = null !== (e = null == t ? void 0 : t.traitSource) && void 0 !== e ? e : "UnknownTrait", c = "".concat(l).concat(null !== (i = null === (a = null === (o = window.traitConfigDebugInfo) || void 0 === o ? void 0 : o.getTraitClassNameDes) || void 0 === a ? void 0 : a.call(o, l)) && void 0 !== i ? i : ""), s = "后处理-特性【".concat(null == (null == t ? void 0 : t.traitIndex) ? "?" : t.traitIndex + 1).concat(null == (null == t ? void 0 : t.traitTotal) ? "" : "/".concat(t.traitTotal), "】：").concat(c);
return (0, n.createAlgorithmStrategyRuleTraceLogger)({
rulesCount: r,
buildPrefix: function(t) {
return "".concat(s, "，").concat((0, n.formatRuleProgress)(t, r));
},
color: n.getAlgorithmStrategyTraceResultColor,
fallbackPrefix: "后处理-条件计算-结果",
factWrapper: "plain",
separator: "colon",
unmatchedSuffix: "\n条件未命中，动作未执行"
});
};
var o = e(4542), n = e(6582);
},
2806: function(t, r, e) {
var o = this && this.__assign || function() {
return (o = Object.assign || function(t) {
for (var r, e = 1, o = arguments.length; e < o; e++) for (var n in r = arguments[e]) Object.prototype.hasOwnProperty.call(r, n) && (t[n] = r[n]);
return t;
}).apply(this, arguments);
}, n = this && this.__read || function(t, r) {
var e = "function" == typeof Symbol && t[Symbol.iterator];
if (!e) return t;
var o, n, a = e.call(t), i = [];
try {
for (;(void 0 === r || r-- > 0) && !(o = a.next()).done; ) i.push(o.value);
} catch (t) {
n = {
error: t
};
} finally {
try {
o && !o.done && (e = a.return) && e.call(a);
} finally {
if (n) throw n.error;
}
}
return i;
}, a = this && this.__spreadArray || function(t, r, e) {
if (e || 2 === arguments.length) for (var o, n = 0, a = r.length; n < a; n++) !o && n in r || (o || (o = Array.prototype.slice.call(r, 0, n)), 
o[n] = r[n]);
return t.concat(o || Array.prototype.slice.call(r));
}, i = this && this.__values || function(t) {
var r = "function" == typeof Symbol && Symbol.iterator, e = r && t[r], o = 0;
if (e) return e.call(t);
if (t && "number" == typeof t.length) return {
next: function() {
return t && o >= t.length && (t = void 0), {
value: t && t[o++],
done: !t
};
}
};
throw new TypeError(r ? "Object is not iterable." : "Symbol.iterator is not defined.");
};
Object.defineProperty(r, "__esModule", {
value: !0
}), r.positionAdjust = function(t) {
var r, e, h, f, d, y, p, S, m, A;
t.process = u.AlgorithmStrategyProcessType.POSITION_ADJUST, delete t.returnState, 
delete t.disabledTraits;
var v, b, _, T, C, O = l.algorithmStrategy.context.AlgorithmStrategyPositionType, P = [], R = l.algorithmStrategy.context.CONFLICT_DEBUG && null != (null === (d = t.sdk) || void 0 === d ? void 0 : d.blockIds) ? a([], n(t.sdk.blockIds), !1) : void 0, L = l.algorithmStrategy.context.CONFLICT_DEBUG && null != (null === (y = t.sdk) || void 0 === y ? void 0 : y.blockNames) ? a([], n(t.sdk.blockNames), !1) : void 0, E = l.algorithmStrategy.context.CONFLICT_DEBUG && null != (null === (p = t.sdk) || void 0 === p ? void 0 : p.blockPoses) ? t.sdk.blockPoses.map(function(t) {
return o({}, t);
}) : void 0, I = [ 0, 1, 2 ];
try {
for (var x = i(l.algorithmStrategy.context.configs.ALGORITHM_STRATEGY_POSITION_ADJUST_TRAITS_CONFIG), k = x.next(); !k.done; k = x.next()) {
var D = k.value;
if (t.returnState) break;
if (!(null === (S = t.disabledTraits) || void 0 === S ? void 0 : S.includes(D))) {
var w = TRAIT(D);
if ((null == w ? void 0 : w.onActiveCondition) && (null == w ? void 0 : w.active) && g(w)) {
var N = w.onAlgorithmStrategyPositionAdjust(t);
if (!N) continue;
switch (v = D, b = N.data, l.algorithmStrategy.context.CONFLICT_DEBUG && (s.AlgorithmStrategyConflictRecorder.recordTraitTrigger(v), 
P.push({
traitSource: v,
data: N.data,
returnState: N.returnState,
disableTraits: null == N.disableTraits ? void 0 : a([], n(N.disableTraits), !1)
})), b) {
case O.LEFT:
I = [ 0, 1, 2 ];
break;

case O.MIDDLE:
I = [ 2, 0, 1 ];
break;

case O.RIGHT:
I = [ 2, 1, 0 ];
break;

case O.MIDDLE_LEFT:
I = [ 1, 0, 2 ];
break;

case O.RIGHT_LEFT:
I = [ 1, 2, 0 ];
break;

case O.LEFT_RIGHT:
I = [ 0, 2, 1 ];
break;

default:
void 0 !== b && l.algorithmStrategy.context.CC_DEBUG && c.AlgorithmStrategyLog.error("AlgorithmStrategyPositionOperator.adjust 调整类型：".concat(b, " 传入错误！"));
}
if (null === (m = N.disableTraits) || void 0 === m ? void 0 : m.length) {
Array.isArray(t.disabledTraits) || (t.disabledTraits = []);
try {
for (var j = (h = void 0, i(N.disableTraits)), K = j.next(); !K.done; K = j.next()) {
var B = K.value;
t.disabledTraits.includes(B) || t.disabledTraits.push(B);
}
} catch (t) {
h = {
error: t
};
} finally {
try {
K && !K.done && (f = j.return) && f.call(j);
} finally {
if (h) throw h.error;
}
}
}
N.returnState && (t.returnState = !0), l.algorithmStrategy.context.CC_DEBUG && c.AlgorithmStrategyLog.log("特性：".concat(D, " 位置调整："), c.AlgorithmStrategyLog.NORMAL_COLOR, N);
}
}
}
} catch (t) {
r = {
error: t
};
} finally {
try {
k && !k.done && (e = x.return) && e.call(x);
} finally {
if (r) throw r.error;
}
}
if (I) {
var M = l.algorithmStrategy.context.algorithmInfo, F = l.algorithmStrategy.context.algorithmName, G = t.sdk;
if (3 === (null === (A = null == G ? void 0 : G.blockIds) || void 0 === A ? void 0 : A.length)) {
var U = G.blockIds, q = G.blockNames, H = G.blockPoses;
H && 3 === H.length || (H = M.blockPosList);
var Y = I[0], J = I[1], W = I[2];
_ = [ U[Y], U[J], U[W] ], T = [ q[Y], q[J], q[W] ], C = [ H[Y], H[J], H[W] ], M.setBlockIdList(_), 
F.setAlgoActualChangeName(T), l.algorithmStrategy.context.MACRO_IOS && F.setAlgoActualName(T), 
M.setBlockPosList(C), t.process = u.AlgorithmStrategyProcessType.POSITION_ADJUST_SUCCESS, 
l.algorithmStrategy.context.CC_DEBUG && c.AlgorithmStrategyLog.log("%c【算法策略阶段】 位置调整-后", "color:#fff;background:#ff0000;", {
process: t.process,
order: "[".concat(I.join(","), "]")
});
}
} else t.process = u.AlgorithmStrategyProcessType.POSITION_ADJUST_FAIL, l.algorithmStrategy.context.CC_DEBUG && c.AlgorithmStrategyLog.log("%c【算法策略阶段】 位置调整-失败", "color:#fff;background:#ff0000;", {
process: t.process
});
return l.algorithmStrategy.context.CONFLICT_DEBUG && s.AlgorithmStrategyConflictRecorder.recordAdjustResult({
process: "positionAdjust",
success: t.process === u.AlgorithmStrategyProcessType.POSITION_ADJUST_SUCCESS,
traitSource: v,
traitResults: P,
positionType: b,
order: I,
beforeBlockIds: R,
afterBlockIds: _,
beforeBlockNames: L,
afterBlockNames: T,
beforeBlockPoses: E,
afterBlockPoses: C,
reason: "位置调整阶段记录最终出块顺序"
}), delete t.returnState, delete t.disabledTraits, t;
};
var l = e(5800), c = e(5815), s = e(8011), u = e(7880);
function g(t) {
return t && "function" == typeof t.onAlgorithmStrategyPositionAdjust;
}
},
2848: (t, r) => {
Object.defineProperty(r, "__esModule", {
value: !0
}), r.filterRules = function(t, r) {
return t.filter(function(t) {
return !(null != t.platform && "all" !== t.platform && t.platform !== r.platform || null != t.gameMode && "all" !== t.gameMode && t.gameMode !== r.gameMode);
});
};
},
2940: (t, r) => {
Object.defineProperty(r, "__esModule", {
value: !0
}), r.roundStats = void 0;
var e = function() {
function t() {
this.roundIndex = 0, this.roundEvents = [], this.roundTraitCallCount = new Map(), 
this.roundTraitStateChanges = [], this.nextTraitStateChangeOrder = 1, this.roundTraitSharedTargetChanges = [], 
this.nextTraitSharedTargetChangeOrder = 1, this.roundTriggeredTraits = new Set(), 
this.pendingConsumeItems = new Map(), this.sdkRequestedAlgorithmIds = [], this.sdkTrace = [], 
this.sdkArgsMergeEvents = new Map(), this.actionRecords = [], this.replacedSourceOwner = new Map(), 
this.pendingLineage = new Map(), this.roundFinalResultRecorded = !1;
}
return t.prototype.recordTraitCall = function(t) {
var r;
this.roundTraitCallCount.set(t, (null !== (r = this.roundTraitCallCount.get(t)) && void 0 !== r ? r : 0) + 1);
}, t.prototype.recordTraitTrigger = function(t) {
return !this.roundTriggeredTraits.has(t) && (this.roundTriggeredTraits.add(t), !0);
}, t.prototype.recordTraitStateChange = function(t, r, e, o, n, a) {
this.roundTraitStateChanges.push({
trait: t,
key: r,
gameIndex: n,
roundIndex: this.roundIndex,
order: this.nextTraitStateChangeOrder++,
caller: a,
previousValue: o,
value: e
});
}, t.prototype.recordTraitSharedTargetChange = function(t, r, e, o, n, a, i) {
this.roundTraitSharedTargetChanges.push({
trait: t,
kind: r,
gameIndex: n,
roundIndex: this.roundIndex,
order: this.nextTraitSharedTargetChangeOrder++,
callers: a,
key: i,
previousValue: o,
value: e
});
}, t.prototype.resetSDKRequestState = function() {
this.sdkRequestedAlgorithmIds = [], this.sdkTrace = [], this.sdkStopReason = void 0;
}, t.prototype.reset = function() {
this.roundEvents = [], this.roundTraitCallCount.clear(), this.roundTraitStateChanges = [], 
this.nextTraitStateChangeOrder = 1, this.roundTraitSharedTargetChanges = [], this.nextTraitSharedTargetChangeOrder = 1, 
this.roundTriggeredTraits.clear(), this.pendingConsumeItems.clear(), this.resetSDKRequestState(), 
this.sdkArgsMergeEvents.clear(), this.actionRecords = [], this.replacedSourceOwner.clear(), 
this.pendingLineage.clear(), this.roundFinalResultRecorded = !1;
}, t.prototype.resetRound = function(t) {
this.roundIndex = t, this.reset();
}, t;
}();
r.roundStats = new e();
},
3003: function(t, r) {
var e = this && this.__rest || function(t, r) {
var e = {};
for (var o in t) Object.prototype.hasOwnProperty.call(t, o) && r.indexOf(o) < 0 && (e[o] = t[o]);
if (null != t && "function" == typeof Object.getOwnPropertySymbols) {
var n = 0;
for (o = Object.getOwnPropertySymbols(t); n < o.length; n++) r.indexOf(o[n]) < 0 && Object.prototype.propertyIsEnumerable.call(t, o[n]) && (e[o[n]] = t[o[n]]);
}
return e;
}, o = this && this.__values || function(t) {
var r = "function" == typeof Symbol && Symbol.iterator, e = r && t[r], o = 0;
if (e) return e.call(t);
if (t && "number" == typeof t.length) return {
next: function() {
return t && o >= t.length && (t = void 0), {
value: t && t[o++],
done: !t
};
}
};
throw new TypeError(r ? "Object is not iterable." : "Symbol.iterator is not defined.");
}, n = this && this.__read || function(t, r) {
var e = "function" == typeof Symbol && t[Symbol.iterator];
if (!e) return t;
var o, n, a = e.call(t), i = [];
try {
for (;(void 0 === r || r-- > 0) && !(o = a.next()).done; ) i.push(o.value);
} catch (t) {
n = {
error: t
};
} finally {
try {
o && !o.done && (e = a.return) && e.call(a);
} finally {
if (n) throw n.error;
}
}
return i;
}, a = this && this.__spreadArray || function(t, r, e) {
if (e || 2 === arguments.length) for (var o, n = 0, a = r.length; n < a; n++) !o && n in r || (o || (o = Array.prototype.slice.call(r, 0, n)), 
o[n] = r[n]);
return t.concat(o || Array.prototype.slice.call(r));
};
function i(t) {
if (t && 0 !== t.length) {
var r = t.map(function(t) {
return null == t ? "" : String(t);
});
if (!r.every(function(t) {
return "" === t;
})) return r;
}
}
function l(t) {
var r, e;
return [ t.operator, null !== (r = t.actionType) && void 0 !== r ? r : "", c(null !== (e = t.args) && void 0 !== e ? e : []) ].join("|");
}
function c(t) {
if (null == t || "object" != typeof t) return JSON.stringify(t);
if (Array.isArray(t)) return "[".concat(t.map(c).join(","), "]");
var r = t;
return "{".concat(Object.keys(r).sort().map(function(t) {
return "".concat(JSON.stringify(t), ":").concat(c(r[t]));
}).join(","), "}");
}
Object.defineProperty(r, "__esModule", {
value: !0
}), r.algorithmStrategyRobotAlgorithmStats = r.ALGORITHM_BLOCK_NAME_SEPARATOR = void 0, 
r.createAlgorithmBlockNameKey = function(t) {
var e = i(t);
return e ? e.join(r.ALGORITHM_BLOCK_NAME_SEPARATOR) : void 0;
}, r.ALGORITHM_BLOCK_NAME_SEPARATOR = "#";
var s = function() {
function t() {
this.algorithmCount = {}, this.algorithmLastTraitSource = {}, this.algorithmTraitCount = {}, 
this.algorithmBlockNameCount = {}, this.algorithmBlockNames = {}, this.algorithmBlockNameTraitsCount = {}, 
this.algorithmBlockNameTraitsTotalCount = {}, this.algorithmTraitsAlgorithmNameCount = {}, 
this.finalResultTraitAlgorithmCount = {}, this.finalResultTraitTotalCount = {}, 
this.partialActionSuccessRecordMap = {}, this.nextPartialActionSuccessRecordId = 1;
}
return t.prototype.record = function(t, r, e) {
null != t && r && (this.recordBlockNames(e, r), void 0 === this.algorithmCount[t] && (this.algorithmCount[t] = 0), 
this.algorithmCount[t]++, this.recordAlgorithmTrait(t, r), this.recordFinalResultTraitAlgorithm(t, r), 
this.algorithmLastTraitSource[t] = r);
}, t.prototype.recordAlgorithmTrait = function(t, r) {
var e = String(t);
void 0 === this.algorithmTraitCount[e] && (this.algorithmTraitCount[e] = {}), void 0 === this.algorithmTraitCount[e][r] && (this.algorithmTraitCount[e][r] = 0), 
this.algorithmTraitCount[e][r]++;
}, t.prototype.recordFinalResultTraitAlgorithm = function(t, r) {
this.recordTraitAlgorithmCount(this.finalResultTraitAlgorithmCount, this.finalResultTraitTotalCount, t, r);
}, t.prototype.recordTraitAlgorithmCount = function(t, r, e, o) {
var n = String(o), a = String(e);
void 0 === t[n] && (t[n] = {}), void 0 === t[n][a] && (t[n][a] = 0), void 0 === r[n] && (r[n] = 0), 
t[n][a]++, r[n]++;
}, t.prototype.recordBlockNames = function(t, e) {
var o = i(t);
if (o) {
var n = o.join(r.ALGORITHM_BLOCK_NAME_SEPARATOR);
void 0 === this.algorithmBlockNameCount[n] && (this.algorithmBlockNameCount[n] = 0), 
this.algorithmBlockNameCount[n]++, this.algorithmBlockNames[n] = o, e && (void 0 === this.algorithmBlockNameTraitsCount[n] && (this.algorithmBlockNameTraitsCount[n] = {}), 
void 0 === this.algorithmBlockNameTraitsCount[n][e] && (this.algorithmBlockNameTraitsCount[n][e] = 0), 
void 0 === this.algorithmBlockNameTraitsTotalCount[n] && (this.algorithmBlockNameTraitsTotalCount[n] = 0), 
void 0 === this.algorithmTraitsAlgorithmNameCount[e] && (this.algorithmTraitsAlgorithmNameCount[e] = {}), 
void 0 === this.algorithmTraitsAlgorithmNameCount[e][n] && (this.algorithmTraitsAlgorithmNameCount[e][n] = 0), 
this.algorithmBlockNameTraitsCount[n][e]++, this.algorithmBlockNameTraitsTotalCount[n]++, 
this.algorithmTraitsAlgorithmNameCount[e][n]++);
}
}, t.prototype.recordPartialActionSuccess = function(t) {
var r, e, n, a, i, c, s, u, g, h, f = function(t) {
var r, e, o, n;
return [ t.process, null !== (r = t.traitSource) && void 0 !== r ? r : "", null !== (e = t.tag) && void 0 !== e ? e : "", null !== (o = t.source) && void 0 !== o ? o : "", null !== (n = t.matchedRuleFlow) && void 0 !== n ? n : "" ].join("|");
}(t);
void 0 === this.partialActionSuccessRecordMap[f] && (this.partialActionSuccessRecordMap[f] = {
id: this.nextPartialActionSuccessRecordId++,
gameIndex: null !== (n = t.gameIndex) && void 0 !== n ? n : 0,
roundIndex: null !== (a = t.roundIndex) && void 0 !== a ? a : 0,
process: t.process,
traitSource: t.traitSource,
matchedRuleFlow: t.matchedRuleFlow,
unmatchedRuleFlows: t.unmatchedRuleFlows,
tag: t.tag,
source: t.source,
sourceName: t.sourceName,
actionStats: [],
actionStatsMap: {},
totalCount: 0,
successCount: 0,
failedCount: 0
});
var d = this.partialActionSuccessRecordMap[f];
d.gameIndex = null !== (i = t.gameIndex) && void 0 !== i ? i : d.gameIndex, d.roundIndex = null !== (c = t.roundIndex) && void 0 !== c ? c : d.roundIndex, 
d.matchedRuleFlow = null !== (s = t.matchedRuleFlow) && void 0 !== s ? s : d.matchedRuleFlow, 
d.tag = null !== (u = t.tag) && void 0 !== u ? u : d.tag, d.source = null !== (g = t.source) && void 0 !== g ? g : d.source, 
d.sourceName = null !== (h = t.sourceName) && void 0 !== h ? h : d.sourceName, t.unmatchedRuleFlows && Object.keys(t.unmatchedRuleFlows).length > 0 && (d.unmatchedRuleFlows = t.unmatchedRuleFlows);
try {
for (var y = o(t.results), p = y.next(); !p.done; p = y.next()) {
var S = p.value, m = l({
operator: S.operator,
actionType: S.actionType,
args: S.args
});
void 0 === d.actionStatsMap[m] && (d.actionStatsMap[m] = {
operator: S.operator,
actionType: S.actionType,
args: S.args,
totalCount: 0,
successCount: 0,
failedCount: 0
});
var A = d.actionStatsMap[m];
A.totalCount++, d.totalCount++, S.status ? (A.successCount++, d.successCount++) : (A.failedCount++, 
d.failedCount++);
}
} catch (t) {
r = {
error: t
};
} finally {
try {
p && !p.done && (e = y.return) && e.call(y);
} finally {
if (r) throw r.error;
}
}
d.actionStats = Object.keys(d.actionStatsMap).map(function(t) {
return d.actionStatsMap[t];
}).sort(function(t, r) {
return r.failedCount - t.failedCount || r.successCount - t.successCount || t.operator.localeCompare(r.operator);
});
}, t.prototype.snapshot = function() {
var t = this;
return {
algorithmCounts: Object.keys(this.algorithmCount).map(function(r) {
var e = {
algorithmId: r,
count: t.algorithmCount[r]
}, o = t.algorithmLastTraitSource[r], n = t.createTraitCountStats(t.algorithmTraitCount[r]);
return o && (e.lastTraitSource = o), n.length > 0 && (e.traitsCounts = n), e;
}),
algorithmBlockNameCounts: Object.keys(this.algorithmBlockNameCount).map(function(e) {
var o;
return {
blockNameKey: e,
blockNames: null !== (o = t.algorithmBlockNames[e]) && void 0 !== o ? o : e.split(r.ALGORITHM_BLOCK_NAME_SEPARATOR),
count: t.algorithmBlockNameCount[e]
};
}).sort(function(t, r) {
return r.count - t.count || t.blockNameKey.localeCompare(r.blockNameKey);
}),
algorithmBlockNameTraitsCounts: Object.keys(this.algorithmBlockNameTraitsCount).map(function(r) {
var e;
return {
blockNameKey: r,
traitsCounts: Object.keys(t.algorithmBlockNameTraitsCount[r]).map(function(e) {
var o;
return {
traitClassName: e,
count: null !== (o = t.algorithmBlockNameTraitsCount[r][e]) && void 0 !== o ? o : 0
};
}).sort(function(t, r) {
return r.count - t.count || t.traitClassName.localeCompare(r.traitClassName);
}),
count: null !== (e = t.algorithmBlockNameTraitsTotalCount[r]) && void 0 !== e ? e : 0
};
}).sort(function(t, r) {
return r.count - t.count || t.blockNameKey.localeCompare(r.blockNameKey);
}),
algorithmTraitsAlgorithmNameCounts: this.createAlgorithmTraitsAlgorithmNameCountsSnapshot(),
finalResultTraitAlgorithmCounts: this.createFinalResultTraitAlgorithmCountsSnapshot(),
partialActionSuccessRecords: Object.freeze(Object.keys(this.partialActionSuccessRecordMap).map(function(r) {
var o = t.partialActionSuccessRecordMap[r];
return o.actionStatsMap, e(o, [ "actionStatsMap" ]);
}).sort(function(t, r) {
return r.failedCount - t.failedCount || r.successCount - t.successCount || t.id - r.id;
}))
};
}, t.prototype.createAlgorithmTraitsAlgorithmNameCountsSnapshot = function() {
var t, r, e = {}, n = function(t) {
var r, n, i = a.algorithmTraitsAlgorithmNameCount[t];
e[t] = {};
try {
for (var l = (r = void 0, o(Object.keys(i).sort(function(t, r) {
return i[r] - i[t] || t.localeCompare(r);
}))), c = l.next(); !c.done; c = l.next()) {
var s = c.value;
e[t][s] = i[s];
}
} catch (t) {
r = {
error: t
};
} finally {
try {
c && !c.done && (n = l.return) && n.call(l);
} finally {
if (r) throw r.error;
}
}
}, a = this;
try {
for (var i = o(Object.keys(this.algorithmTraitsAlgorithmNameCount)), l = i.next(); !l.done; l = i.next()) n(l.value);
} catch (r) {
t = {
error: r
};
} finally {
try {
l && !l.done && (r = i.return) && r.call(i);
} finally {
if (t) throw t.error;
}
}
return e;
}, t.prototype.createFinalResultTraitAlgorithmCountsSnapshot = function() {
var t = this;
return a([], n(new Set(a(a([], n(Object.keys(this.finalResultTraitAlgorithmCount)), !1), n(Object.keys(this.algorithmTraitsAlgorithmNameCount)), !1))), !1).map(function(r) {
var e;
return {
traitSource: r,
algorithmCounts: t.createAlgorithmCountStats(t.finalResultTraitAlgorithmCount[r]),
blockNameCounts: t.createBlockNameCountStats(t.algorithmTraitsAlgorithmNameCount[r]),
count: null !== (e = t.finalResultTraitTotalCount[r]) && void 0 !== e ? e : 0
};
}).sort(function(r, e) {
return e.count - r.count || t.sumCountStats(e.blockNameCounts) - t.sumCountStats(r.blockNameCounts) || r.traitSource.localeCompare(e.traitSource);
});
}, t.prototype.createAlgorithmCountStats = function(t) {
return t ? Object.keys(t).map(function(r) {
return {
algorithmId: r,
count: t[r]
};
}).sort(function(t, r) {
return r.count - t.count || String(t.algorithmId).localeCompare(String(r.algorithmId));
}) : [];
}, t.prototype.createTraitCountStats = function(t) {
return t ? Object.keys(t).map(function(r) {
var e;
return {
traitClassName: r,
count: null !== (e = t[r]) && void 0 !== e ? e : 0
};
}).sort(function(t, r) {
return r.count - t.count || t.traitClassName.localeCompare(r.traitClassName);
}) : [];
}, t.prototype.createBlockNameCountStats = function(t) {
return t ? Object.keys(t).map(function(r) {
return {
blockNameKey: r,
count: t[r]
};
}).sort(function(t, r) {
return r.count - t.count || t.blockNameKey.localeCompare(r.blockNameKey);
}) : [];
}, t.prototype.sumCountStats = function(t) {
return t.reduce(function(t, r) {
return t + r.count;
}, 0);
}, t.prototype.reset = function() {
this.algorithmCount = {}, this.algorithmLastTraitSource = {}, this.algorithmTraitCount = {}, 
this.algorithmBlockNameCount = {}, this.algorithmBlockNames = {}, this.algorithmBlockNameTraitsCount = {}, 
this.algorithmBlockNameTraitsTotalCount = {}, this.algorithmTraitsAlgorithmNameCount = {}, 
this.finalResultTraitAlgorithmCount = {}, this.finalResultTraitTotalCount = {}, 
this.partialActionSuccessRecordMap = {}, this.nextPartialActionSuccessRecordId = 1;
}, t;
}();
r.algorithmStrategyRobotAlgorithmStats = new s();
},
3165: function(t, r, e) {
var o = this && this.__decorate || function(t, r, e, o) {
var n, a = arguments.length, i = a < 3 ? r : null === o ? o = Object.getOwnPropertyDescriptor(r, e) : o;
if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) i = Reflect.decorate(t, r, e, o); else for (var l = t.length - 1; l >= 0; l--) (n = t[l]) && (i = (a < 3 ? n(i) : a > 3 ? n(r, e, i) : n(r, e)) || i);
return a > 3 && i && Object.defineProperty(r, e, i), i;
};
Object.defineProperty(r, "__esModule", {
value: !0
}), r.AlgorithmStrategyAlgoExpectedIdPatch = void 0;
var n, a = e(7594), i = function() {
function t() {}
return t.patch = function(t) {
return n !== t && (n = t, !0);
}, o([ (0, a.patch)({
patchKey: "algoExpectedId",
getStored: function() {
return n;
}
}) ], t, "patch", null), t;
}();
r.AlgorithmStrategyAlgoExpectedIdPatch = i;
},
3173: (t, r, e) => {
Object.defineProperty(r, "__esModule", {
value: !0
}), r.logSDKAlgorithmListWithTraits = function(t, r, e, a) {
void 0 === a && (a = "SDK 请求-特性列表"), n.AlgorithmStrategyLog.log(r, n.AlgorithmStrategyLog.NORMAL_COLOR), 
n.AlgorithmStrategyLog.table(function(t) {
return JSON.parse(JSON.stringify(t, function(t, r) {
var e;
if ("trait" !== t && "flow" !== t) return "source" === t ? "".concat(null !== (e = o.algorithmStrategy.context.algorithmSourceType[r]) && void 0 !== e ? e : r, "(").concat(r, ")") : "algorithmId" === t ? "".concat(o.algorithmStrategy.context.algorithmInfo.getOfferTypeDisplayName(r), "(").concat(r, ")") : r;
}));
}(e));
var i = o.algorithmStrategy.context.configs.ALGORITHM_STRATEGY_SDK_ARGS_TRAITS_CONFIG.map(n.formatTraitNameWithDescription);
i.length > 0 && (n.AlgorithmStrategyLog.log("".concat("preprocess" === t ? "预处理" : "后处理").concat(a), n.AlgorithmStrategyLog.NORMAL_COLOR), 
n.AlgorithmStrategyLog.table(i));
};
var o = e(5800), n = e(5815);
},
3187: function(t, r) {
var e = this && this.__read || function(t, r) {
var e = "function" == typeof Symbol && t[Symbol.iterator];
if (!e) return t;
var o, n, a = e.call(t), i = [];
try {
for (;(void 0 === r || r-- > 0) && !(o = a.next()).done; ) i.push(o.value);
} catch (t) {
n = {
error: t
};
} finally {
try {
o && !o.done && (e = a.return) && e.call(a);
} finally {
if (n) throw n.error;
}
}
return i;
};
Object.defineProperty(r, "__esModule", {
value: !0
}), r.BUILTIN_JSON_RULE_OPERATORS = void 0, r.BUILTIN_JSON_RULE_OPERATORS = {
"=": function(t, r) {
return t === r;
},
"!=": function(t, r) {
return t !== r;
},
"<": function(t, r) {
return t < r;
},
"<=": function(t, r) {
return t <= r;
},
">": function(t, r) {
return t > r;
},
">=": function(t, r) {
return t >= r;
},
"∈": function(t, r) {
return Array.isArray(r) && r.includes(t);
},
"∉": function(t, r) {
return !Array.isArray(r) || !r.includes(t);
},
"∋": function(t, r) {
return Array.isArray(t) && t.includes(r);
},
"∌": function(t, r) {
return !Array.isArray(t) || !t.includes(r);
},
"~": function(t, r) {
var o = e(Array.isArray(r) ? r : [], 2), n = o[0], a = o[1];
return "number" == typeof t && t >= n && t <= a;
},
empty: function(t) {
return null == t || "" === t || Array.isArray(t) && 0 === t.length;
},
isDefined: function(t) {
return null != t;
},
startsWith: function(t, r) {
return "string" == typeof t && "string" == typeof r && t.startsWith(r);
},
endsWith: function(t, r) {
return "string" == typeof t && "string" == typeof r && t.endsWith(r);
},
includes: function(t, r) {
return "string" == typeof t && "string" == typeof r && t.includes(r);
},
match: function(t, r) {
return "string" == typeof t && (r instanceof RegExp ? r : new RegExp(String(r))).test(t);
},
isEmpty: function(t) {
return Array.isArray(t) && 0 === t.length;
}
};
},
3193: (t, r, e) => {
Object.defineProperty(r, "__esModule", {
value: !0
}), r.recordTraitCall = function(t) {
t && (i(t), l(o.gameStats.traitCallCount, t), l(a.sessionStats.allTraitCallCount, t), 
n.roundStats.recordTraitCall(t));
}, r.recordTraitTrigger = i, r.increment = l;
var o = e(2574), n = e(2940), a = e(5600);
function i(t) {
t && n.roundStats.recordTraitTrigger(t) && l(a.sessionStats.traitTriggerCount, t);
}
function l(t, r) {
var e;
t.set(r, (null !== (e = t.get(r)) && void 0 !== e ? e : 0) + 1);
}
},
3239: (t, r) => {
Object.defineProperty(r, "__esModule", {
value: !0
}), r.RULE_FACT_COMMENT_CONTEXT_KEY = r.RULE_LOOP_BINDINGS_CONTEXT_KEY = r.RULE_TRAIT_PROPS_CONTEXT_KEY = r.RULE_RESOLVED_OPERATOR_CONTEXT_KEY = void 0, 
r.RULE_RESOLVED_OPERATOR_CONTEXT_KEY = Symbol.for("blockblast.rulesEngine.ruleResolvedOperator"), 
r.RULE_TRAIT_PROPS_CONTEXT_KEY = Symbol.for("blockblast.rulesEngine.traitProps"), 
r.RULE_LOOP_BINDINGS_CONTEXT_KEY = Symbol.for("blockblast.rulesEngine.loopBindings"), 
r.RULE_FACT_COMMENT_CONTEXT_KEY = Symbol.for("blockblast.rulesEngine.factComment");
},
3325: function(t, r, e) {
var o = this && this.__read || function(t, r) {
var e = "function" == typeof Symbol && t[Symbol.iterator];
if (!e) return t;
var o, n, a = e.call(t), i = [];
try {
for (;(void 0 === r || r-- > 0) && !(o = a.next()).done; ) i.push(o.value);
} catch (t) {
n = {
error: t
};
} finally {
try {
o && !o.done && (e = a.return) && e.call(a);
} finally {
if (n) throw n.error;
}
}
return i;
}, n = this && this.__spreadArray || function(t, r, e) {
if (e || 2 === arguments.length) for (var o, n = 0, a = r.length; n < a; n++) !o && n in r || (o || (o = Array.prototype.slice.call(r, 0, n)), 
o[n] = r[n]);
return t.concat(o || Array.prototype.slice.call(r));
}, a = this && this.__values || function(t) {
var r = "function" == typeof Symbol && Symbol.iterator, e = r && t[r], o = 0;
if (e) return e.call(t);
if (t && "number" == typeof t.length) return {
next: function() {
return t && o >= t.length && (t = void 0), {
value: t && t[o++],
done: !t
};
}
};
throw new TypeError(r ? "Object is not iterable." : "Symbol.iterator is not defined.");
};
Object.defineProperty(r, "__esModule", {
value: !0
}), r.AlgorithmStrategyAlgorithmPriorityListOperator = void 0;
var i = e(4246), l = [], c = function() {
function t() {}
return Object.defineProperty(t, "algorithmPriorityList", {
get: function() {
return Object.freeze(n([], o(l), !1));
},
enumerable: !1,
configurable: !0
}), t.unshift = function(r) {
return !(0, i.isAbsentAlgorithmIdArg)(r) && (l.unshift.apply(l, n([], o((0, i.transformAlgorithmId)(r, t.unshift.options)), !1)), 
!0);
}, t.push = function(r) {
return !(0, i.isAbsentAlgorithmIdArg)(r) && (l.push.apply(l, n([], o((0, i.transformAlgorithmId)(r, t.push.options)), !1)), 
!0);
}, t.insertBefore = function(r, e) {
if (null == r || (0, i.isAbsentAlgorithmIdArg)(e)) return !1;
var a = l.findIndex(function(t) {
return t.algorithmId === r;
});
return -1 !== a && (l.splice.apply(l, n([ a, 0 ], o((0, i.transformAlgorithmId)(e, t.insertBefore.options)), !1)), 
!0);
}, t.insertAfter = function(r, e) {
if (null == r || (0, i.isAbsentAlgorithmIdArg)(e)) return !1;
var a = l.findIndex(function(t) {
return t.algorithmId === r;
});
return -1 !== a && (l.splice.apply(l, n([ a + 1, 0 ], o((0, i.transformAlgorithmId)(e, t.insertAfter.options)), !1)), 
!0);
}, t.remove = function(t) {
if ((0, i.isAbsentAlgorithmIdArg)(t)) return !1;
var r = (0, i.toArray)(t), e = new Set(r), o = l.filter(function(t) {
return !e.has(t.algorithmId);
}), n = o.length !== l.length;
return n && (l = o), n;
}, t.removeCategory = function(t) {
if (null == t) return !1;
var r = (0, i.CATEGORY_TO_ENUM)()[t], e = l.filter(function(t) {
return !Object.values(r).includes(t.algorithmId);
}), o = e.length !== l.length;
return o && (l = e), o;
}, t.replaceFirst = function(r, e) {
if ((0, i.isAbsentAlgorithmIdArg)(r) || (0, i.isAbsentAlgorithmIdArg)(e)) return !1;
var a = (0, i.toArray)(r), c = new Set(a), s = (0, i.transformAlgorithmId)(e, t.replaceFirst.options), u = l.findIndex(function(t) {
return c.has(t.algorithmId);
});
if (-1 === u) return !1;
var g = n([], o(l), !1);
return g.splice.apply(g, n([ u, 1 ], o(s), !1)), l = g, !0;
}, t.replace = function(r, e) {
var c, s;
if ((0, i.isAbsentAlgorithmIdArg)(r) || (0, i.isAbsentAlgorithmIdArg)(e)) return !1;
var u = (0, i.toArray)(r), g = new Set(u), h = (0, i.transformAlgorithmId)(e, t.replace.options), f = !1, d = [];
try {
for (var y = a(l), p = y.next(); !p.done; p = y.next()) {
var S = p.value;
g.has(S.algorithmId) ? (d.push.apply(d, n([], o(h), !1)), f = !0) : d.push(S);
}
} catch (t) {
c = {
error: t
};
} finally {
try {
p && !p.done && (s = y.return) && s.call(y);
} finally {
if (c) throw c.error;
}
}
return f && (l = d), f;
}, t.replaceCategory = function(r, e) {
var c, s;
if (null == r || (0, i.isAbsentAlgorithmIdArg)(e)) return !1;
var u = (0, i.CATEGORY_TO_ENUM)()[r], g = !1, h = [];
try {
for (var f = a(l), d = f.next(); !d.done; d = f.next()) {
var y = d.value;
Object.values(u).includes(y.algorithmId) ? (h.push.apply(h, n([], o((0, i.transformAlgorithmId)(e, t.replaceCategory.options)), !1)), 
g = !0) : h.push(y);
}
} catch (t) {
c = {
error: t
};
} finally {
try {
d && !d.done && (s = f.return) && s.call(f);
} finally {
if (c) throw c.error;
}
}
return g && (l = h), g;
}, t.replaceAll = function(r) {
return !(0, i.isAbsentReplaceAllAlgorithmIdArg)(r) && (l = (0, i.transformAlgorithmId)(r, t.replaceAll.options), 
!0);
}, t.clear = function() {
l.length = 0;
}, t;
}();
r.AlgorithmStrategyAlgorithmPriorityListOperator = c;
},
3366: (t, r) => {
Object.defineProperty(r, "__esModule", {
value: !0
}), r.PRODUCE_ITEM_TYPES = r.OPERATION_TARGET_FAILURE_TYPES = void 0, r.OPERATION_TARGET_FAILURE_TYPES = new Set([ "replace", "replaceCategory", "insertBefore", "insertAfter", "remove", "removeCategory" ]), 
r.PRODUCE_ITEM_TYPES = new Set([ "unshift", "push", "insertBefore", "insertAfter", "replace", "replaceCategory", "replaceAll" ]);
},
3374: function(t, r, e) {
var o = this && this.__assign || function() {
return (o = Object.assign || function(t) {
for (var r, e = 1, o = arguments.length; e < o; e++) for (var n in r = arguments[e]) Object.prototype.hasOwnProperty.call(r, n) && (t[n] = r[n]);
return t;
}).apply(this, arguments);
}, n = this && this.__awaiter || function(t, r, e, o) {
return new (e || (e = Promise))(function(n, a) {
function i(t) {
try {
c(o.next(t));
} catch (t) {
a(t);
}
}
function l(t) {
try {
c(o.throw(t));
} catch (t) {
a(t);
}
}
function c(t) {
var r;
t.done ? n(t.value) : (r = t.value, r instanceof e ? r : new e(function(t) {
t(r);
})).then(i, l);
}
c((o = o.apply(t, r || [])).next());
});
}, a = this && this.__generator || function(t, r) {
var e, o, n, a = {
label: 0,
sent: function() {
if (1 & n[0]) throw n[1];
return n[1];
},
trys: [],
ops: []
}, i = Object.create(("function" == typeof Iterator ? Iterator : Object).prototype);
return i.next = l(0), i.throw = l(1), i.return = l(2), "function" == typeof Symbol && (i[Symbol.iterator] = function() {
return this;
}), i;
function l(l) {
return function(c) {
return function(l) {
if (e) throw new TypeError("Generator is already executing.");
for (;i && (i = 0, l[0] && (a = 0)), a; ) try {
if (e = 1, o && (n = 2 & l[0] ? o.return : l[0] ? o.throw || ((n = o.return) && n.call(o), 
0) : o.next) && !(n = n.call(o, l[1])).done) return n;
switch (o = 0, n && (l = [ 2 & l[0], n.value ]), l[0]) {
case 0:
case 1:
n = l;
break;

case 4:
return a.label++, {
value: l[1],
done: !1
};

case 5:
a.label++, o = l[1], l = [ 0 ];
continue;

case 7:
l = a.ops.pop(), a.trys.pop();
continue;

default:
if (!((n = (n = a.trys).length > 0 && n[n.length - 1]) || 6 !== l[0] && 2 !== l[0])) {
a = 0;
continue;
}
if (3 === l[0] && (!n || l[1] > n[0] && l[1] < n[3])) {
a.label = l[1];
break;
}
if (6 === l[0] && a.label < n[1]) {
a.label = n[1], n = l;
break;
}
if (n && a.label < n[2]) {
a.label = n[2], a.ops.push(l);
break;
}
n[2] && a.ops.pop(), a.trys.pop();
continue;
}
l = r.call(t, a);
} catch (t) {
l = [ 6, t ], o = 0;
} finally {
e = n = 0;
}
if (5 & l[0]) throw l[1];
return {
value: l[0] ? l[1] : void 0,
done: !0
};
}([ l, c ]);
};
}
}, i = this && this.__read || function(t, r) {
var e = "function" == typeof Symbol && t[Symbol.iterator];
if (!e) return t;
var o, n, a = e.call(t), i = [];
try {
for (;(void 0 === r || r-- > 0) && !(o = a.next()).done; ) i.push(o.value);
} catch (t) {
n = {
error: t
};
} finally {
try {
o && !o.done && (e = a.return) && e.call(a);
} finally {
if (n) throw n.error;
}
}
return i;
}, l = this && this.__spreadArray || function(t, r, e) {
if (e || 2 === arguments.length) for (var o, n = 0, a = r.length; n < a; n++) !o && n in r || (o || (o = Array.prototype.slice.call(r, 0, n)), 
o[n] = r[n]);
return t.concat(o || Array.prototype.slice.call(r));
};
Object.defineProperty(r, "__esModule", {
value: !0
}), r.preprocess = function(t, r) {
return n(this, void 0, Promise, function() {
var e, n, v, b, _, T, C, O, P, R, L, E, I, x, k, D, w, N, j, K, B, M;
return a(this, function(F) {
switch (F.label) {
case 0:
switch (c.algorithmStrategy.context.CC_DEBUG && s.AlgorithmStrategyLog.log("预处理-互斥-进入：流：".concat(h.AlgorithmStrategyProcessType.PREPROCESS_MUTEX, ", 类型：").concat(r), s.AlgorithmStrategyLog.PREPROCESS_COLOR), 
g.AlgorithmStrategyAlgorithmListOperator._process = "pre", t.process = h.AlgorithmStrategyProcessType.PREPROCESS_MUTEX, 
t.traits = [], t.preprocessType = r, r) {
case d.AlgorithmStrategyPreprocessType.DEFAULT:
e = c.algorithmStrategy.context.configs.ALGORITHM_STRATEGY_MUTEX_PREPROCESS_TRAITS_CONFIG();
break;

case d.AlgorithmStrategyPreprocessType.GUIDE:
e = c.algorithmStrategy.context.configs.ALGORITHM_STRATEGY_GUIDE_MUTEX_PREPROCESS_TRAITS_CONFIG();
break;

case d.AlgorithmStrategyPreprocessType.REVIVE:
e = c.algorithmStrategy.context.configs.ALGORITHM_STRATEGY_REVIVE_MUTEX_PREPROCESS_TRAITS_CONFIG();
break;

default:
return s.AlgorithmStrategyLog.error("预处理-互斥-传入的预处理类型：".concat(r, " 无法处理！"), s.AlgorithmStrategyLog.PREPROCESS_COLOR), 
[ 2, t ];
}
delete t.disableShareSequence, n = Number.MIN_SAFE_INTEGER, v = -1, b = c.algorithmStrategy.context.configs.ALGORITHM_STRATEGY_MUTEX_SOURCE_DISABLE_PREPROCESS_PATCH_CONFIG(), 
_ = b.map(function() {
return !1;
}), T = function(r) {
var o, f, d, T, C, O, P, R, L, E, I, x;
return a(this, function(a) {
switch (a.label) {
case 0:
o = e[r], f = o.source, d = o.list, t.traits = l([], i(d), !1), delete t.returnState, 
delete t.returnFilter, delete t.disabledTraits, delete t.routerTarget, c.algorithmStrategy.context.CC_DEBUG && ((null == d ? void 0 : d.length) > 0 ? (s.AlgorithmStrategyLog.log("预处理-互斥-源【".concat(r + 1, "/").concat(e.length, "】：【源:").concat((0, 
y.preprocessAlgorithmSourceKey)(f), "(").concat(f, ")】执行列表："), y.PREPROCESS_SOURCE_START_COLOR), 
s.AlgorithmStrategyLog.table(d.map(s.formatTraitNameWithDescription))) : s.AlgorithmStrategyLog.log("预处理-互斥-源【".concat(r + 1, "/").concat(e.length, "】：【源:").concat((0, 
y.preprocessAlgorithmSourceKey)(f), "(").concat(f, ")】执行列表为空"), y.PREPROCESS_SOURCE_START_COLOR)), 
T = 0, (0, S.clearPreprocessMutexRouterPatch)(), C = 0, a.label = 1;

case 1:
if (!(C < d.length)) return [ 3, 4 ];
if (O = d[C], m(t, O)) return c.algorithmStrategy.context.CC_DEBUG && (P = t.returnStateSource, 
s.AlgorithmStrategyLog.log("预处理-互斥-【源:".concat((0, y.preprocessAlgorithmSourceKey)(f), "(").concat(f, ")】：执行特性【").concat(C + 1, "/").concat(d.length, "】：").concat(O).concat(window.traitConfigDebugInfo.getTraitClassNameDes(O), " 时 returnState = true，").concat(P ? "被 ".concat(P, " 特性 跳过") : "被跳过"), y.PREPROCESS_SKIP_COLOR)), 
[ 3, 3 ];
if (null === (N = t.disabledTraits) || void 0 === N ? void 0 : N.includes(O)) return c.algorithmStrategy.context.CC_DEBUG && s.AlgorithmStrategyLog.log("预处理-互斥-【源:".concat((0, 
y.preprocessAlgorithmSourceKey)(f), "(").concat(f, ")】：执行特性【").concat(C + 1, "/").concat(d.length, "】：").concat(O).concat(window.traitConfigDebugInfo.getTraitClassNameDes(O), " 时 disabledTraits 为 true 时跳过余下特性"), y.PREPROCESS_SKIP_COLOR), 
[ 3, 3 ];
if (null != (R = t.routerTarget)) {
if (O !== R) return [ 3, 3 ];
delete t.routerTarget;
}
return (null == (L = TRAIT(O)) ? void 0 : L.onActiveCondition) && (null == L ? void 0 : L.active) && A(L) ? (c.algorithmStrategy.context.CONFLICT_DEBUG && p.AlgorithmStrategyConflictRecorder.recordTraitCall(O), 
E = {
tag: "mutex",
source: f,
sourceIndex: r,
sourceTotal: e.length,
traitIndex: C,
traitTotal: d.length,
traitSource: O,
trait: L
}, [ 4, (0, u.runPreprocess)(L, t, E) ]) : [ 3, 3 ];

case 2:
a.sent().status && (c.algorithmStrategy.context.CC_DEBUG && s.AlgorithmStrategyLog.log("预处理-互斥-【源:".concat((0, 
y.preprocessAlgorithmSourceKey)(f), "(").concat(f, ")】：特性【").concat(C + 1, "/").concat(d.length, "】：").concat(O).concat(window.traitConfigDebugInfo.getTraitClassNameDes(O), "-算法列表：").concat(JSON.stringify(g.AlgorithmStrategyAlgorithmListOperator.algorithmList)), (0, 
y.getPreprocessTraitTraceColor)(C)), n = f, v = r, t.process = h.AlgorithmStrategyProcessType.PREPROCESS_MUTEX_SUCCESS, 
S.preprocessMutexRouterPatch[O] || T++), a.label = 3;

case 3:
return C++, [ 3, 1 ];

case 4:
if (I = b.findIndex(function(t) {
return t.includes(f);
}), T > 0) {
if (I < 0) return [ 2, "break" ];
_[I] = !0;
}
return I >= 0 && (x = b[I])[x.length - 1] === f && _[I] ? [ 2, "break" ] : [ 2 ];
}
});
}, C = 0, F.label = 1;

case 1:
return C < e.length ? [ 5, T(C) ] : [ 3, 4 ];

case 2:
if ("break" === F.sent()) return [ 3, 4 ];
F.label = 3;

case 3:
return C++, [ 3, 1 ];

case 4:
if (0 === (null === (j = g.AlgorithmStrategyAlgorithmListOperator.algorithmList) || void 0 === j ? void 0 : j.length) && c.algorithmStrategy.context.CC_DEBUG && s.AlgorithmStrategyLog.warn("【算法策略】- 异常：", f.AlgorithmStrategyWarnType.PREPROCESS_MUTEX_ALGORITHM_LIST_EMPTY), 
t.process !== h.AlgorithmStrategyProcessType.PREPROCESS_MUTEX_SUCCESS && (t.process = h.AlgorithmStrategyProcessType.PREPROCESS_MUTEX_FAIL, 
c.algorithmStrategy.context.CC_DEBUG && s.AlgorithmStrategyLog.log("预处理-互斥-阶段所有特性均未命中，继续共享阶段", s.AlgorithmStrategyLog.FALLBACK_COLOR)), 
t.disableShareSequence) return [ 2, o({}, t) ];
if (r !== d.AlgorithmStrategyPreprocessType.DEFAULT) return [ 2, o({}, t) ];
t.process = h.AlgorithmStrategyProcessType.PREPROCESS_SHARE, t.traits = [], delete t.disabledTags, 
delete t.returnState, delete t.returnFilter, delete t.disabledTraits, delete t.routerTarget, 
O = c.algorithmStrategy.context.configs.ALGORITHM_STRATEGY_SHARE_PREPROCESS_TRAITS_CONFIG, 
P = 0, F.label = 5;

case 5:
if (!(P < O.length)) return [ 3, 10 ];
if (R = O[P], L = (0, y.formatPreprocessTagProgress)(R.tag, P, O.length), t.traits = l([], i(R.list.map(function(t) {
return t.traitClassName;
})), !1), null === (K = t.disabledTags) || void 0 === K ? void 0 : K.includes(R.tag)) return c.algorithmStrategy.context.CC_DEBUG && s.AlgorithmStrategyLog.log("预处理-共享-跳过共享 ".concat(L, " 被 disabledTags 禁用"), s.AlgorithmStrategyLog.PREPROCESS_COLOR), 
[ 3, 9 ];
delete t.returnState, delete t.returnFilter, delete t.disabledTraits, delete t.routerTarget, 
t.__patch_source_ && (n = t.__patch_source_), c.algorithmStrategy.context.CC_DEBUG && R.list.length > 0 && (s.AlgorithmStrategyLog.log("预处理-共享-特性【".concat(L, " - 源：").concat((0, 
y.preprocessAlgorithmSourceKey)(n), "(").concat(n, ")】执行列表："), (0, y.getPreprocessSourceTraceColor)(v)), 
s.AlgorithmStrategyLog.table(R.list.map(function(t) {
return (0, s.formatTraitNameWithDescription)(t.traitClassName);
}))), E = 0, F.label = 6;

case 6:
if (!(E < R.list.length)) return [ 3, 9 ];
if (I = R.list[E], m(t, I.traitClassName)) return c.algorithmStrategy.context.CC_DEBUG && (x = t.returnStateSource, 
s.AlgorithmStrategyLog.log("预处理-共享-特性【".concat(L, "】：执行特性【").concat(E + 1, "/").concat(R.list.length, "】：").concat(I.traitClassName).concat(window.traitConfigDebugInfo.getTraitClassNameDes(I.traitClassName), " returnState 为 true，").concat(x ? "被 ".concat(x, " 特性 跳过") : "被跳过"), y.PREPROCESS_SKIP_COLOR)), 
[ 3, 8 ];
if (null === (B = t.disabledTraits) || void 0 === B ? void 0 : B.includes(I.traitClassName)) return c.algorithmStrategy.context.CC_DEBUG && s.AlgorithmStrategyLog.log("预处理-共享-特性【".concat(L, "】：执行特性【").concat(E + 1, "/").concat(R.list.length, "】：").concat(I.traitClassName).concat(window.traitConfigDebugInfo.getTraitClassNameDes(I.traitClassName), " disabledTraits 为 true 时跳过余下特性"), y.PREPROCESS_SKIP_COLOR), 
[ 3, 8 ];
if (null != (k = t.routerTarget)) {
if (I.traitClassName !== k) return [ 3, 8 ];
delete t.routerTarget;
}
return I.sourceList && !I.sourceList.includes(n) ? (c.algorithmStrategy.context.CC_DEBUG && s.AlgorithmStrategyLog.log("预处理-共享-特性【".concat(L, "】：执行特性【").concat(E + 1, "/").concat(R.list.length, "】：").concat(I.traitClassName).concat(window.traitConfigDebugInfo.getTraitClassNameDes(I.traitClassName), " 互斥胜出源：").concat((0, 
y.formatPreprocessSource)(n), "，允许来源：").concat((0, y.formatPreprocessSourceList)(I.sourceList), "，不匹配，跳过"), y.PREPROCESS_SKIP_COLOR), 
[ 3, 8 ]) : (null == (D = TRAIT(I.traitClassName)) ? void 0 : D.onActiveCondition) && (null == D ? void 0 : D.active) && A(D) ? (c.algorithmStrategy.context.CONFLICT_DEBUG && p.AlgorithmStrategyConflictRecorder.recordTraitCall(I.traitClassName), 
w = {
tag: R.tag,
source: n,
sourceIndex: v,
tagIndex: P,
tagTotal: O.length,
traitIndex: E,
traitTotal: R.list.length,
traitSource: I.traitClassName,
trait: D
}, [ 4, (0, u.runPreprocess)(D, t, w) ]) : [ 3, 8 ];

case 7:
F.sent().status && (t.process = h.AlgorithmStrategyProcessType.PREPROCESS_SHARE_SUCCESS), 
F.label = 8;

case 8:
return E++, [ 3, 6 ];

case 9:
return P++, [ 3, 5 ];

case 10:
return 0 === (null === (M = g.AlgorithmStrategyAlgorithmListOperator.algorithmList) || void 0 === M ? void 0 : M.length) && c.algorithmStrategy.context.CC_DEBUG && s.AlgorithmStrategyLog.warn("【算法策略】- 异常：", f.AlgorithmStrategyWarnType.PREPROCESS_SHARE_SEQUENCE_ALGORITHM_LIST_EMPTY), 
t.process !== h.AlgorithmStrategyProcessType.PREPROCESS_SHARE_SUCCESS && (t.process = h.AlgorithmStrategyProcessType.PREPROCESS_SHARE_FAIL, 
c.algorithmStrategy.context.CC_DEBUG && s.AlgorithmStrategyLog.log("预处理-共享-阶段失败", s.AlgorithmStrategyLog.FALLBACK_COLOR)), 
delete t.disableShareSequence, delete t.disabledTags, delete t.returnState, delete t.returnStateSource, 
delete t.returnFilter, delete t.disabledTraits, delete t.routerTarget, delete t.__patch_source_, 
[ 2, o({}, t) ];
}
});
});
};
var c = e(5800), s = e(5815), u = e(4386), g = e(261), h = e(7880), f = e(777), d = e(7611), y = e(7871), p = e(8011), S = e(7894);
function m(t, r) {
var e = t, o = e.returnState, n = e.returnFilter;
return !0 === o && !(null == n ? void 0 : n.includes(r));
}
function A(t) {
return t && "function" == typeof t.onPreprocessConditions && "function" == typeof t.onPreprocessActions;
}
},
3381: (t, r) => {
var e;
Object.defineProperty(r, "__esModule", {
value: !0
}), r.AlgorithmStrategyReturnStateProcessType = void 0, function(t) {
t.DEFAULT = "默认", t.POST_SDK_REQUEST_SUCCESS = "后处理阶段 SDK 请求成功后";
}(e || (r.AlgorithmStrategyReturnStateProcessType = e = {}));
},
3768: function(t, r, e) {
var o = this && this.__awaiter || function(t, r, e, o) {
return new (e || (e = Promise))(function(n, a) {
function i(t) {
try {
c(o.next(t));
} catch (t) {
a(t);
}
}
function l(t) {
try {
c(o.throw(t));
} catch (t) {
a(t);
}
}
function c(t) {
var r;
t.done ? n(t.value) : (r = t.value, r instanceof e ? r : new e(function(t) {
t(r);
})).then(i, l);
}
c((o = o.apply(t, r || [])).next());
});
}, n = this && this.__generator || function(t, r) {
var e, o, n, a = {
label: 0,
sent: function() {
if (1 & n[0]) throw n[1];
return n[1];
},
trys: [],
ops: []
}, i = Object.create(("function" == typeof Iterator ? Iterator : Object).prototype);
return i.next = l(0), i.throw = l(1), i.return = l(2), "function" == typeof Symbol && (i[Symbol.iterator] = function() {
return this;
}), i;
function l(l) {
return function(c) {
return function(l) {
if (e) throw new TypeError("Generator is already executing.");
for (;i && (i = 0, l[0] && (a = 0)), a; ) try {
if (e = 1, o && (n = 2 & l[0] ? o.return : l[0] ? o.throw || ((n = o.return) && n.call(o), 
0) : o.next) && !(n = n.call(o, l[1])).done) return n;
switch (o = 0, n && (l = [ 2 & l[0], n.value ]), l[0]) {
case 0:
case 1:
n = l;
break;

case 4:
return a.label++, {
value: l[1],
done: !1
};

case 5:
a.label++, o = l[1], l = [ 0 ];
continue;

case 7:
l = a.ops.pop(), a.trys.pop();
continue;

default:
if (!((n = (n = a.trys).length > 0 && n[n.length - 1]) || 6 !== l[0] && 2 !== l[0])) {
a = 0;
continue;
}
if (3 === l[0] && (!n || l[1] > n[0] && l[1] < n[3])) {
a.label = l[1];
break;
}
if (6 === l[0] && a.label < n[1]) {
a.label = n[1], n = l;
break;
}
if (n && a.label < n[2]) {
a.label = n[2], a.ops.push(l);
break;
}
n[2] && a.ops.pop(), a.trys.pop();
continue;
}
l = r.call(t, a);
} catch (t) {
l = [ 6, t ], o = 0;
} finally {
e = n = 0;
}
if (5 & l[0]) throw l[1];
return {
value: l[0] ? l[1] : void 0,
done: !0
};
}([ l, c ]);
};
}
};
Object.defineProperty(r, "__esModule", {
value: !0
}), r.sdkRequest = function(t, r) {
return o(this, void 0, Promise, function() {
return n(this, function() {
return t.process = "preprocess" === r ? c.AlgorithmStrategyProcessType.PREPROCESS_SDK : c.AlgorithmStrategyProcessType.POSTPROCESS_SDK, 
t.traits = [], a.algorithmStrategy.context.CONFLICT_DEBUG && i.AlgorithmStrategyConflictRecorder.beginSDKRequest(), 
"preprocess" === r ? [ 2, f(t) ] : [ 2, d(t) ];
});
});
}, r.isSDKRequestTrait = function(t) {
return t && "function" == typeof t.onSDKArgsConditions && "function" == typeof t.onSDKArgsActions;
}, r.shouldSkipSDKItem = function(t, r, e, i) {
return o(this, void 0, Promise, function() {
return n(this, function(o) {
switch (o.label) {
case 0:
return [ 4, (0, l.invokeLifeCycle)(a.algorithmStrategy.context.configs.ALGORITHM_STRATEGY_SDK_ITEM_BEFORE_CONFIG, "onAlgorithmStrategySDKItemBefore", t, r, e, i) ];

case 1:
return [ 2, o.sent().some(function(t) {
return "object" == typeof t && null !== t && !1 === t.isRun;
}) ];
}
});
});
};
var a = e(5800), i = e(8011), l = e(9351), c = e(7880), s = e(4600), u = e(4568), g = e(2616), h = e(1688);
function f(t) {
return o(this, void 0, Promise, function() {
var r;
return n(this, function(e) {
switch (e.label) {
case 0:
return r = a.algorithmStrategy.context.configs.ALGORITHM_STRATEGY_SDK_PREPROCESS_BETWEEN_NORMAL_AND_FALLBACK_TRAITS_CONFIG, 
[ 4, (0, l.invokeLifeCycle)(a.algorithmStrategy.context.configs.ALGORITHM_STRATEGY_SDK_BEFORE_TRAITS_CONFIG, "onAlgorithmStrategySDKBefore") ];

case 1:
return e.sent(), [ 4, (0, h.priorityRequest)(t) ];

case 2:
return e.sent() ? [ 4, (0, l.invokeLifeCycle)(r, "onAlgorithmStrategySDKBetween", t) ] : [ 3, 5 ];

case 3:
case 7:
return e.sent(), [ 4, (0, g.postRequest)(t) ];

case 4:
case 8:
case 11:
return e.sent(), [ 2, t ];

case 5:
return [ 4, (0, u.normalRequest)(t, "preprocess") ];

case 6:
return e.sent() ? [ 4, (0, l.invokeLifeCycle)(r, "onAlgorithmStrategySDKBetween", t) ] : [ 3, 9 ];

case 9:
return [ 4, (0, l.invokeLifeCycle)(r, "onAlgorithmStrategySDKBetween", t) ];

case 10:
return e.sent(), [ 4, (0, s.fallbackRequest)(t) ];
}
});
});
}
function d(t) {
return o(this, void 0, Promise, function() {
return n(this, function(r) {
switch (r.label) {
case 0:
return [ 4, (0, u.normalRequest)(t, "postprocess") ];

case 1:
return r.sent(), [ 2, t ];
}
});
});
}
},
3817: function(t, r, e) {
var o = this && this.__decorate || function(t, r, e, o) {
var n, a = arguments.length, i = a < 3 ? r : null === o ? o = Object.getOwnPropertyDescriptor(r, e) : o;
if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) i = Reflect.decorate(t, r, e, o); else for (var l = t.length - 1; l >= 0; l--) (n = t[l]) && (i = (a < 3 ? n(i) : a > 3 ? n(r, e, i) : n(r, e)) || i);
return a > 3 && i && Object.defineProperty(r, e, i), i;
};
Object.defineProperty(r, "__esModule", {
value: !0
}), r.AlgorithmStrategyAlgoSdkRequestBeforeActualIdPatch = void 0;
var n, a = e(5213), i = e(7594), l = function() {
function t() {}
return t.patch = function(t) {
if (n === t) return !1;
var r = a.flow.sdk;
return r && (r.actualAlgorithmId_SDK_REQUEST_BEFORE_Patch = t), n = t, !0;
}, o([ (0, i.patch)({
patchKey: "algoActualId",
getStored: function() {
return n;
}
}) ], t, "patch", null), t;
}();
r.AlgorithmStrategyAlgoSdkRequestBeforeActualIdPatch = l;
},
3957: (t, r, e) => {
Object.defineProperty(r, "__esModule", {
value: !0
}), r.createSDKConditionTraceLogger = function(t, r, e, o) {
var c, s, u, g, h = null == t ? void 0 : t.traitName, f = "".concat(null != h ? h : "UnknownTrait").concat(h && null !== (u = null === (s = null === (c = window.traitConfigDebugInfo) || void 0 === c ? void 0 : c.getTraitClassNameDes) || void 0 === s ? void 0 : s.call(c, h)) && void 0 !== u ? u : ""), d = l(o), y = i(e, o), p = {}, S = (0, 
a.createAlgorithmStrategyRuleTraceLogger)({
rulesCount: r,
buildPrefix: function(t) {
return g = t, function(t, r, e, o, n) {
return "".concat(y, "：").concat(o, "：").concat(n, "，").concat((0, a.formatRuleProgress)(t, r));
}(t, r, 0, d, f);
},
color: a.getAlgorithmStrategyTraceResultColor,
fallbackPrefix: "条件计算-结果",
factWrapper: "paren",
separator: "comma"
});
return {
onTrace: function(t) {
"ruleEnd" === t.type && (g = t), S.onTrace(t);
},
addArgs: function(t, r) {
p[t] = r;
},
logResult: function() {
var t, r = null !== (t = null == g ? void 0 : g.flow) && void 0 !== t ? t : "default", e = p[r];
S.logResult(e ? "\n参数：".concat((0, a.formatTraceValue)(e)) : void 0);
},
logSkipped: function(t) {
n.AlgorithmStrategyLog.log("✗ ".concat(y, "：").concat(d, "：").concat(f, "，规则【0/").concat(r, "】，").concat(t), (0, 
a.getAlgorithmStrategyTraceResultColor)(!1));
}
};
}, r.logSDKConditionTraceSkipped = function(t, r, e, o) {
var c, s, u, g = "".concat(t).concat(null !== (u = null === (s = null === (c = window.traitConfigDebugInfo) || void 0 === c ? void 0 : c.getTraitClassNameDes) || void 0 === s ? void 0 : s.call(c, t)) && void 0 !== u ? u : ""), h = l(o), f = i(e, o);
n.AlgorithmStrategyLog.log("✗ ".concat(f, "：").concat(h, "：").concat(g, "，规则【0/0】，").concat(r), (0, 
a.getAlgorithmStrategyTraceResultColor)(!1));
}, r.formatSDKTraceSDKLabel = i, r.formatSDKArgsTraitInactiveReason = function(t) {
return t ? "跳过：特性未激活（staticActive=".concat(String(t.staticActive), "，dynamicActive=").concat(String(t.dynamicActive), "）") : "跳过：Trait 实例不存在";
};
var o = e(5800), n = e(5815), a = e(6582);
function i(t, r) {
if (null == (null == t ? void 0 : t.algorithmId)) return "SDK";
var e = null == (null == r ? void 0 : r.itemIndex) ? "" : "【".concat(r.itemIndex + 1).concat(null == r.itemTotal ? "" : "/".concat(r.itemTotal), "】"), n = o.algorithmStrategy.context.algorithmInfo.getOfferTypeDisplayName(t.algorithmId);
return "SDK【算法".concat(e, "：").concat(n, "(").concat(t.algorithmId, ")】");
}
function l(t) {
return null == (null == t ? void 0 : t.traitIndex) ? "特性" : "特性【".concat(t.traitIndex + 1).concat(null == t.traitTotal ? "" : "/".concat(t.traitTotal), "】");
}
},
4046: function(t, r, e) {
var o = this && this.__decorate || function(t, r, e, o) {
var n, a = arguments.length, i = a < 3 ? r : null === o ? o = Object.getOwnPropertyDescriptor(r, e) : o;
if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) i = Reflect.decorate(t, r, e, o); else for (var l = t.length - 1; l >= 0; l--) (n = t[l]) && (i = (a < 3 ? n(i) : a > 3 ? n(r, e, i) : n(r, e)) || i);
return a > 3 && i && Object.defineProperty(r, e, i), i;
};
Object.defineProperty(r, "__esModule", {
value: !0
}), r.AlgorithmStrategyAlgoSdkRequestAfterActualIdPatch = void 0;
var n, a = e(5213), i = e(7594), l = function() {
function t() {}
return t.patch = function(t) {
if (n === t) return !1;
var r = a.flow.sdk;
return r && (r.actualAlgorithmId_SDK_REQUEST_AFTER_Patch = t), n = t, !0;
}, o([ (0, i.patch)({
patchKey: "algoActualIdByPos",
getStored: function() {
return n;
}
}) ], t, "patch", null), t;
}();
r.AlgorithmStrategyAlgoSdkRequestAfterActualIdPatch = l;
},
4050: function(t, r, e) {
var o = this && this.__decorate || function(t, r, e, o) {
var n, a = arguments.length, i = a < 3 ? r : null === o ? o = Object.getOwnPropertyDescriptor(r, e) : o;
if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) i = Reflect.decorate(t, r, e, o); else for (var l = t.length - 1; l >= 0; l--) (n = t[l]) && (i = (a < 3 ? n(i) : a > 3 ? n(r, e, i) : n(r, e)) || i);
return a > 3 && i && Object.defineProperty(r, e, i), i;
};
Object.defineProperty(r, "__esModule", {
value: !0
}), r.AlgorithmStrategyAlgorithmPostListPatch = void 0;
var n, a = e(8281), i = e(4246), l = e(7594), c = function() {
function t() {}
return t.patch = function(t) {
if (function(t, r) {
return void 0 !== t && t === r && t.length === r.length && JSON.stringify(t) === JSON.stringify(r);
}(n, t)) return !1;
for (var r = 0; r < t.length; r++) {
var e = t[r];
e.category = (0, i.getCategoryForAlgorithm)(e.algorithmId), e.algorithmListSource = "post";
}
return n = t, !0;
}, Object.defineProperty(t, "algorithmPostList", {
get: function() {
return a.AlgorithmStrategyAlgorithmPostListPatchOperator.algorithmPostList;
},
enumerable: !1,
configurable: !0
}), o([ (0, l.patch)({
patchKey: "algorithmPostList",
getStored: function() {
return n;
}
}) ], t, "patch", null), t;
}();
r.AlgorithmStrategyAlgorithmPostListPatch = c;
},
4057: (t, r, e) => {
Object.defineProperty(r, "__esModule", {
value: !0
});
var o = e(5800), n = e(8011), a = e(7193), i = e(5815), l = e(9423), c = e(261), s = e(8281), u = e(3325), g = e(5213), h = e(7594), f = e(2230);
(0, h.patchWatch)(function(t, r) {
r.target !== f.AlgorithmStrategySDKRequest && o.algorithmStrategy.context.CC_DEBUG && i.AlgorithmStrategyLog.log("补丁：".concat(t.patchKey), i.AlgorithmStrategyLog.PATCH_COLOR, r.target, "旧值：", r.prev, "，更新值：", r.next);
var e = o.algorithmStrategy.context.CONFLICT_DEBUG, h = o.algorithmStrategy.context.algorithmName, d = o.algorithmStrategy.context.algorithmInfo, y = e ? (0, 
a.createAlgorithmListSnapshot)(c.AlgorithmStrategyAlgorithmListOperator.algorithmList) : void 0, p = e ? (0, 
a.createAlgorithmListSnapshot)(l.AlgorithmStrategyAlgorithmFallbackListOperator.algorithmFallbackList) : void 0, S = e ? (0, 
a.createAlgorithmListSnapshot)(u.AlgorithmStrategyAlgorithmPriorityListOperator.algorithmPriorityList) : void 0, m = e ? (0, 
a.createAlgorithmListSnapshot)(s.AlgorithmStrategyAlgorithmPostListPatchOperator.algorithmPostList) : void 0;
switch (t.patchKey) {
case "algorithmPriorityList":
r.next && u.AlgorithmStrategyAlgorithmPriorityListOperator.replaceAll(r.next.map(function(t) {
return t.algorithmId;
}));
break;

case "algorithmList":
r.next && c.AlgorithmStrategyAlgorithmListOperator.replaceAll(r.next.map(function(t) {
return t.algorithmId;
}));
break;

case "algorithmPostList":
r.next && s.AlgorithmStrategyAlgorithmPostListPatchOperator.replaceAll(r.next.map(function(t) {
return t.algorithmId;
}));
break;

case "algorithmFallbackList":
r.next && l.AlgorithmStrategyAlgorithmFallbackListOperator.replaceAll(r.next.map(function(t) {
return t.algorithmId;
}));
break;

case "algoActualId":
h.setAlgoActualId(r.next);
break;

case "algoActualIdByPos":
h.setAlgoActualIdByPos(r.next);
break;

case "algoExpectedId":
h.setAlgoExpectedId(r.next);
break;

case "algoActualName":
h.setAlgoActualName(r.next), h.setAlgoActualChangeName(r.next);
break;

case "blockIdList":
d.setBlockIdList(r.next);
break;

case "blockPosList":
d.setBlockPosList(r.next);
break;

case "blockExtraList":
d.setBlockExtraList(r.next);
break;

case "positionAdjust":
var A = d.blockIdList, v = d.blockPosList, b = h.algoActualName, _ = [ 0, 1, 2 ], T = r.next;
switch (T) {
case hs.AlgorithmStrategyPositionType.LEFT:
_ = [ 0, 1, 2 ];
break;

case hs.AlgorithmStrategyPositionType.MIDDLE:
_ = [ 2, 0, 1 ];
break;

case hs.AlgorithmStrategyPositionType.RIGHT:
_ = [ 2, 1, 0 ];
break;

case hs.AlgorithmStrategyPositionType.MIDDLE_LEFT:
_ = [ 1, 0, 2 ];
break;

case hs.AlgorithmStrategyPositionType.RIGHT_LEFT:
_ = [ 1, 2, 0 ];
break;

case hs.AlgorithmStrategyPositionType.LEFT_RIGHT:
_ = [ 0, 2, 1 ];
break;

default:
o.algorithmStrategy.context.CC_DEBUG && i.AlgorithmStrategyLog.error("AlgorithmStrategyPositionOperator.adjust 调整类型：".concat(T, " 传入错误！"));
}
d.setBlockIdList([ A[_[0]], A[_[1]], A[_[2]] ]), h.setAlgoActualChangeName([ b[_[0]], b[_[1]], b[_[2]] ]), 
d.setBlockPosList([ v[_[0]], v[_[1]], v[_[2]] ]);
}
if (e) {
if (r.target === f.AlgorithmStrategySDKRequest) return;
var C = "positionAdjust" === t.patchKey ? "positionAdjust" : function(t) {
return null != t && t.startsWith("后处理");
}(g.flow.process) ? "postprocess" : "preprocess";
"blockIdList" === t.patchKey && "postprocess" === C ? n.AlgorithmStrategyConflictRecorder.recordBlockListFinalCheck({
process: C,
beforeBlockIds: r.prev,
afterBlockIds: r.next,
target: r.target
}) : n.AlgorithmStrategyConflictRecorder.recordPatchUpdate({
process: C,
patchKey: t.patchKey,
prev: r.prev,
next: r.next,
target: r.target,
beforeList: y,
afterList: (0, a.createAlgorithmListSnapshot)(c.AlgorithmStrategyAlgorithmListOperator.algorithmList),
beforeFallbackList: p,
afterFallbackList: (0, a.createAlgorithmListSnapshot)(l.AlgorithmStrategyAlgorithmFallbackListOperator.algorithmFallbackList),
beforePriorityList: S,
afterPriorityList: (0, a.createAlgorithmListSnapshot)(u.AlgorithmStrategyAlgorithmPriorityListOperator.algorithmPriorityList),
beforePostList: m,
afterPostList: (0, a.createAlgorithmListSnapshot)(s.AlgorithmStrategyAlgorithmPostListPatchOperator.algorithmPostList),
includeListSnapshots: !0
});
}
});
},
4179: function(t, r, e) {
var o = this && this.__assign || function() {
return (o = Object.assign || function(t) {
for (var r, e = 1, o = arguments.length; e < o; e++) for (var n in r = arguments[e]) Object.prototype.hasOwnProperty.call(r, n) && (t[n] = r[n]);
return t;
}).apply(this, arguments);
}, n = this && this.__read || function(t, r) {
var e = "function" == typeof Symbol && t[Symbol.iterator];
if (!e) return t;
var o, n, a = e.call(t), i = [];
try {
for (;(void 0 === r || r-- > 0) && !(o = a.next()).done; ) i.push(o.value);
} catch (t) {
n = {
error: t
};
} finally {
try {
o && !o.done && (e = a.return) && e.call(a);
} finally {
if (n) throw n.error;
}
}
return i;
}, a = this && this.__spreadArray || function(t, r, e) {
if (e || 2 === arguments.length) for (var o, n = 0, a = r.length; n < a; n++) !o && n in r || (o || (o = Array.prototype.slice.call(r, 0, n)), 
o[n] = r[n]);
return t.concat(o || Array.prototype.slice.call(r));
};
Object.defineProperty(r, "__esModule", {
value: !0
}), r.recordAdjustResult = function(t) {
var r, e, g, h = s.gameStats.nextOperationOrderValue(), f = function(t) {
var r = {
success: t.success,
traitSource: t.traitSource,
traitResults: null == t.traitResults ? void 0 : t.traitResults.map(function(t) {
return {
traitSource: t.traitSource,
data: (0, i.cloneValue)(t.data),
returnState: t.returnState,
disableTraits: null == t.disableTraits ? void 0 : a([], n(t.disableTraits), !1)
};
})
};
switch (t.process) {
case "positionAdjust":
return o(o({
process: t.process
}, r), {
positionType: (0, i.cloneValue)(t.positionType),
order: null == t.order ? void 0 : a([], n(t.order), !1),
beforeBlockIds: null == t.beforeBlockIds ? void 0 : a([], n(t.beforeBlockIds), !1),
afterBlockIds: null == t.afterBlockIds ? void 0 : a([], n(t.afterBlockIds), !1),
beforeBlockNames: null == t.beforeBlockNames ? void 0 : a([], n(t.beforeBlockNames), !1),
afterBlockNames: null == t.afterBlockNames ? void 0 : a([], n(t.afterBlockNames), !1),
beforeBlockPoses: null == t.beforeBlockPoses ? void 0 : t.beforeBlockPoses.map(function(t) {
return o({}, t);
}),
afterBlockPoses: null == t.afterBlockPoses ? void 0 : t.afterBlockPoses.map(function(t) {
return o({}, t);
})
});

case "colorAdjust":
return o(o({
process: t.process
}, r), {
beforeColorList: null == t.beforeColorList ? void 0 : t.beforeColorList.map(function(t) {
return (0, i.cloneValue)(t);
}),
colorList: null == t.colorList ? void 0 : t.colorList.map(function(t) {
return (0, i.cloneValue)(t);
})
});

case "collectionAdjust":
return o(o({
process: t.process
}, r), {
beforeCollectionList: null == t.beforeCollectionList ? void 0 : t.beforeCollectionList.map(function(t) {
return (0, i.cloneValue)(t);
}),
collectionList: null == t.collectionList ? void 0 : t.collectionList.map(function(t) {
return (0, i.cloneValue)(t);
})
});
}
}(t);
(function(t, r) {
var e = s.gameStats.roundFinalResults.get(u.roundStats.roundIndex);
if (e) {
var n = o(o(o(o({}, e.finalAdjust), "positionAdjust" === t.process ? {
position: t
} : {}), "colorAdjust" === t.process ? {
color: t
} : {}), "collectionAdjust" === t.process ? {
collection: t
} : {});
s.gameStats.roundFinalResults.set(u.roundStats.roundIndex, o(o({}, e), {
operationOrder: r,
finalAdjust: n
}));
}
})(f, h), (0, c.addEvent)({
type: l.AlgorithmStrategyConflictType.ALGORITHM_ADJUST_RESULT,
severity: "info",
process: t.process,
triggerTrait: t.traitSource,
reason: null !== (r = t.reason) && void 0 !== r ? r : (e = t.process, g = t.success, 
"".concat({
positionAdjust: "位置调整",
colorAdjust: "颜色调整",
collectionAdjust: "收集物调整"
}[e]).concat(g ? "成功" : "失败或无结果")),
operationOrder: h,
adjust: f
});
};
var i = e(8085), l = e(4727), c = e(4501), s = e(2574), u = e(2940);
},
4246: function(t, r, e) {
var o = this && this.__values || function(t) {
var r = "function" == typeof Symbol && Symbol.iterator, e = r && t[r], o = 0;
if (e) return e.call(t);
if (t && "number" == typeof t.length) return {
next: function() {
return t && o >= t.length && (t = void 0), {
value: t && t[o++],
done: !t
};
}
};
throw new TypeError(r ? "Object is not iterable." : "Symbol.iterator is not defined.");
}, n = this && this.__read || function(t, r) {
var e = "function" == typeof Symbol && t[Symbol.iterator];
if (!e) return t;
var o, n, a = e.call(t), i = [];
try {
for (;(void 0 === r || r-- > 0) && !(o = a.next()).done; ) i.push(o.value);
} catch (t) {
n = {
error: t
};
} finally {
try {
o && !o.done && (e = a.return) && e.call(a);
} finally {
if (n) throw n.error;
}
}
return i;
};
Object.defineProperty(r, "__esModule", {
value: !0
}), r.CATEGORY_TO_ENUM = void 0, r.toArray = function(t) {
return Array.isArray(t) ? t : [ t ];
}, r.isAbsentAlgorithmIdArg = function(t) {
return null == t || !!Array.isArray(t) && (0 === t.length || t.some(function(t) {
return null == t;
}));
}, r.isAbsentReplaceAllAlgorithmIdArg = function(t) {
return null == t || !!Array.isArray(t) && t.some(function(t) {
return null == t;
});
}, r.transformAlgorithmId = function(t, r) {
return Array.isArray(t) ? t.map(function(t) {
return i(t, r);
}) : [ i(t, r) ];
}, r.getCategoryForAlgorithm = l;
var a = e(5800);
function i(t, r) {
var e, o, n, a, i, c;
return {
algorithmId: t,
tag: null === (e = null == r ? void 0 : r.context) || void 0 === e ? void 0 : e.tag,
category: l(t),
source: null === (o = null == r ? void 0 : r.context) || void 0 === o ? void 0 : o.source,
dynamicSource: null === (n = null == r ? void 0 : r.context) || void 0 === n ? void 0 : n.dynamicSource,
traitSource: null === (a = null == r ? void 0 : r.context) || void 0 === a ? void 0 : a.traitSource,
algorithmListSource: null === (i = null == r ? void 0 : r.context) || void 0 === i ? void 0 : i.algorithmListSource,
router: null === (c = null == r ? void 0 : r.context) || void 0 === c ? void 0 : c.router
};
}
function l(t) {
var e, i;
try {
for (var l = o(Object.entries((0, r.CATEGORY_TO_ENUM)())), c = l.next(); !c.done; c = l.next()) {
var s = n(c.value, 2), u = s[0], g = s[1];
if (Object.values(g).includes(t)) return u;
}
} catch (t) {
e = {
error: t
};
} finally {
try {
c && !c.done && (i = l.return) && i.call(l);
} finally {
if (e) throw e.error;
}
}
return a.algorithmStrategy.context.AlgorithmStrategyCategoryType.BASE;
}
r.CATEGORY_TO_ENUM = function() {
return a.algorithmStrategy.context.categoryToOfferEnum;
};
},
4312: function(t, r, e) {
var o = this && this.__values || function(t) {
var r = "function" == typeof Symbol && Symbol.iterator, e = r && t[r], o = 0;
if (e) return e.call(t);
if (t && "number" == typeof t.length) return {
next: function() {
return t && o >= t.length && (t = void 0), {
value: t && t[o++],
done: !t
};
}
};
throw new TypeError(r ? "Object is not iterable." : "Symbol.iterator is not defined.");
};
Object.defineProperty(r, "__esModule", {
value: !0
}), r.ASContext = l, r.buildLazyConditionContext = c;
var n, a = e(3239), i = Object.create(null);
function l(t, r) {
return algorithmStrategy.context.CC_DEBUG && (n = r), t;
}
function c(t) {
var r, e, l = {}, c = function(r) {
Object.defineProperty(l, r, {
get: function() {
if (!algorithmStrategy.context.CC_DEBUG) return t[r]();
n = void 0;
var e = t[r]();
return void 0 !== n && (i[r] = n, n = void 0), e;
},
enumerable: !0,
configurable: !0
});
};
try {
for (var s = o(Object.keys(t)), u = s.next(); !u.done; u = s.next()) c(u.value);
} catch (t) {
r = {
error: t
};
} finally {
try {
u && !u.done && (e = s.return) && e.call(s);
} finally {
if (r) throw r.error;
}
}
return algorithmStrategy.context.CC_DEBUG && Object.defineProperty(l, a.RULE_FACT_COMMENT_CONTEXT_KEY, {
value: i,
enumerable: !1,
configurable: !0,
writable: !0
}), l;
}
Object.assign(window, {
ASContext: l,
buildLazyConditionContext: c
});
},
4386: function(t, r, e) {
var o = this && this.__assign || function() {
return (o = Object.assign || function(t) {
for (var r, e = 1, o = arguments.length; e < o; e++) for (var n in r = arguments[e]) Object.prototype.hasOwnProperty.call(r, n) && (t[n] = r[n]);
return t;
}).apply(this, arguments);
}, n = this && this.__awaiter || function(t, r, e, o) {
return new (e || (e = Promise))(function(n, a) {
function i(t) {
try {
c(o.next(t));
} catch (t) {
a(t);
}
}
function l(t) {
try {
c(o.throw(t));
} catch (t) {
a(t);
}
}
function c(t) {
var r;
t.done ? n(t.value) : (r = t.value, r instanceof e ? r : new e(function(t) {
t(r);
})).then(i, l);
}
c((o = o.apply(t, r || [])).next());
});
}, a = this && this.__generator || function(t, r) {
var e, o, n, a = {
label: 0,
sent: function() {
if (1 & n[0]) throw n[1];
return n[1];
},
trys: [],
ops: []
}, i = Object.create(("function" == typeof Iterator ? Iterator : Object).prototype);
return i.next = l(0), i.throw = l(1), i.return = l(2), "function" == typeof Symbol && (i[Symbol.iterator] = function() {
return this;
}), i;
function l(l) {
return function(c) {
return function(l) {
if (e) throw new TypeError("Generator is already executing.");
for (;i && (i = 0, l[0] && (a = 0)), a; ) try {
if (e = 1, o && (n = 2 & l[0] ? o.return : l[0] ? o.throw || ((n = o.return) && n.call(o), 
0) : o.next) && !(n = n.call(o, l[1])).done) return n;
switch (o = 0, n && (l = [ 2 & l[0], n.value ]), l[0]) {
case 0:
case 1:
n = l;
break;

case 4:
return a.label++, {
value: l[1],
done: !1
};

case 5:
a.label++, o = l[1], l = [ 0 ];
continue;

case 7:
l = a.ops.pop(), a.trys.pop();
continue;

default:
if (!((n = (n = a.trys).length > 0 && n[n.length - 1]) || 6 !== l[0] && 2 !== l[0])) {
a = 0;
continue;
}
if (3 === l[0] && (!n || l[1] > n[0] && l[1] < n[3])) {
a.label = l[1];
break;
}
if (6 === l[0] && a.label < n[1]) {
a.label = n[1], n = l;
break;
}
if (n && a.label < n[2]) {
a.label = n[2], a.ops.push(l);
break;
}
n[2] && a.ops.pop(), a.trys.pop();
continue;
}
l = r.call(t, a);
} catch (t) {
l = [ 6, t ], o = 0;
} finally {
e = n = 0;
}
if (5 & l[0]) throw l[1];
return {
value: l[0] ? l[1] : void 0,
done: !0
};
}([ l, c ]);
};
}
};
Object.defineProperty(r, "__esModule", {
value: !0
}), r.PreprocessEvaluatorType = void 0, r.runPreprocess = function(t, r, e) {
return n(this, void 0, Promise, function() {
var n, f, d, y, p, S, m, A, v, b, _, T, C, O, P, R, L, E, I, x, k, D, w, N, j, K, B, M, F, G, U, q;
return a(this, function(a) {
switch (a.label) {
case 0:
return n = (0, h.shallowMergePreservingAccessors)(l.algorithmStrategy.context.globalContext(), (0, 
h.mergeConditionContextFromPrototypeChain)(t, "onPreprocessConditionContext", r), {
flow: r
}), f = (0, h.mergePreprocessConditionsFromPrototypeChain)(t), d = f, y = null !== (B = null == e ? void 0 : e.tag) && void 0 !== B ? B : "mutex", 
p = null !== (F = null !== (M = d[y]) && void 0 !== M ? M : d.mutex) && void 0 !== F ? F : [], 
S = l.algorithmStrategy.context.algorithmSourceType, m = Array.isArray(p) ? p : null !== (G = p[S[e.source]]) && void 0 !== G ? G : [], 
[ 4, rulesEngine.getFactValueAsync(n, "platform") ];

case 1:
return A = a.sent(), [ 4, rulesEngine.getFactValueAsync(n, "gameMode") ];

case 2:
return v = a.sent(), b = (0, g.filterRules)(m, {
platform: A,
gameMode: v
}), _ = {
operators: (0, h.mergeConditionOperatorsFromPrototypeChain)(t, "onPreprocessConditionOperators"),
target: t
}, (T = l.algorithmStrategy.context.CC_DEBUG ? (0, s.createPreprocessConditionTraceLogger)(e, b.length) : void 0) && (_.debug = {
onTrace: T.onTrace
}), [ 4, rulesEngine.evaluateRulesConditionsFirstMatch(b, n, _) ];

case 3:
return C = a.sent(), O = C.matched, P = null !== (U = C.matchedFlows) && void 0 !== U ? U : [], 
R = O && P.length > 0 ? P[0] : void 0, L = C.resolvedContext, null != (E = null == r ? void 0 : r.__patch_source_) && e.source !== E && (e.source = E), 
I = O && (null == L ? void 0 : L[rulesEngine.RULE_RESOLVED_OPERATOR_CONTEXT_KEY]) ? o(o({}, null != e ? e : {}), ((K = {})[rulesEngine.RULE_RESOLVED_OPERATOR_CONTEXT_KEY] = L[rulesEngine.RULE_RESOLVED_OPERATOR_CONTEXT_KEY], 
K)) : e, x = (0, h.mergeActionsFromPrototypeChain)(t, "onPreprocessActions", r), 
(k = (0, u.resolvePendingActions)("preprocess", x, O ? P : [], e)).length > 0 ? [ 4, (0, 
u.executeActions)("preprocess", k, P, t, r, I, n) ] : [ 3, 5 ];

case 4:
return D = a.sent(), l.algorithmStrategy.context.CONFLICT_DEBUG && (w = (0, u.resolveUnmatchedRuleFlows)("preprocess", x, P, e), 
N = null == e.source ? void 0 : String(null !== (q = l.algorithmStrategy.context.algorithmSourceType[e.source]) && void 0 !== q ? q : e.source), 
c.AlgorithmStrategyConflictRecorder.recordPartialActionSuccess({
process: "preprocess",
traitSource: e.traitSource,
matchedRuleFlow: R,
unmatchedRuleFlows: w,
tag: e.tag,
source: e.source,
sourceName: N,
results: D
})), j = D.some(function(t) {
return ("AlgorithmStrategyAlgorithmPriorityListOperator" === t.operator || "AlgorithmStrategyAlgorithmListOperator" === t.operator || "AlgorithmStrategyAlgorithmPostListPatchOperator" === t.operator || "AlgorithmStrategyAlgorithmFallbackListOperator" === t.operator) && t.status;
}), null == T || T.logResult((0, s.formatPreprocessActionMessages)(D), j), [ 2, {
status: j,
conditionMatched: O,
type: i.PreprocessActionEvaluatorSuccess,
matchedRuleFlow: R
} ];

case 5:
return null == T || T.logResult(O ? "\n命中规则但无对应动作" : "\n条件未命中，动作未执行", !1), [ 2, {
status: !1,
conditionMatched: O,
type: i.PreprocessActionEvaluatorFail,
matchedRuleFlow: R
} ];
}
});
});
};
var i, l = e(5800), c = e(8011), s = e(6242), u = e(6074), g = e(2848), h = e(2436);
!function(t) {
t[t.PreprocessActionEvaluatorSuccess = 0] = "PreprocessActionEvaluatorSuccess", 
t[t.PreprocessActionEvaluatorFail = 1] = "PreprocessActionEvaluatorFail";
}(i || (r.PreprocessEvaluatorType = i = {}));
},
4481: function(t, r, e) {
var o = this && this.__values || function(t) {
var r = "function" == typeof Symbol && Symbol.iterator, e = r && t[r], o = 0;
if (e) return e.call(t);
if (t && "number" == typeof t.length) return {
next: function() {
return t && o >= t.length && (t = void 0), {
value: t && t[o++],
done: !t
};
}
};
throw new TypeError(r ? "Object is not iterable." : "Symbol.iterator is not defined.");
};
Object.defineProperty(r, "__esModule", {
value: !0
}), r.ensureTraitStateWatched = function(t) {
if (t && !i.has(t)) {
var r = TRAIT(t);
if (r) {
var e = r._state;
!e || "object" != typeof e && "function" != typeof e ? i.add(t) : (i.add(t), r._state = function(t) {
return new Proxy(e, {
set: function(r, e, o, i) {
if ("string" != typeof e) return Reflect.set(r, e, o, i);
var c = r[e], s = Reflect.set(r, e, o, i);
return s && !l(c, o) && t.traitName.startsWith("CTRefactor") && a.roundStats.recordTraitStateChange(t.traitName, e, o, c, n.gameStats.gameIndex, function() {
var t, r = Error.stackTraceLimit;
Error.stackTraceLimit = 30;
try {
var e = new Error().stack;
if (!e) return;
for (var o = e.split("\n").map(function(t) {
return t.trim();
}), n = 1; n < o.length; n++) {
var a = null === (t = o[n].replace(/^at\s+/, "").match(/^([^\s([]+)/)) || void 0 === t ? void 0 : t[1];
if (a && -1 !== a.indexOf("CTRefactor") && -1 !== a.indexOf("Trait")) return a;
}
return;
} finally {
Error.stackTraceLimit = r;
}
}()), s;
}
});
}(r));
}
}
};
var n = e(2574), a = e(2940), i = new Set();
function l(t, r) {
var e, n;
if (Object.is(t, r)) return !0;
if (Array.isArray(t) && Array.isArray(r)) {
if (t.length !== r.length) return !1;
for (var a = 0; a < t.length; a++) if (!l(t[a], r[a])) return !1;
return !0;
}
if (c(t) && c(r)) {
var i = Object.keys(t), s = Object.keys(r);
if (i.length !== s.length) return !1;
try {
for (var u = o(s), g = u.next(); !g.done; g = u.next()) {
var h = g.value;
if (!Object.prototype.hasOwnProperty.call(t, h) || !l(t[h], r[h])) return !1;
}
} catch (t) {
e = {
error: t
};
} finally {
try {
g && !g.done && (n = u.return) && n.call(u);
} finally {
if (e) throw e.error;
}
}
return !0;
}
return !1;
}
function c(t) {
if (null === t || "object" != typeof t) return !1;
var r = Object.getPrototypeOf(t);
return r === Object.prototype || null === r;
}
},
4501: function(t, r, e) {
var o = this && this.__assign || function() {
return (o = Object.assign || function(t) {
for (var r, e = 1, o = arguments.length; e < o; e++) for (var n in r = arguments[e]) Object.prototype.hasOwnProperty.call(r, n) && (t[n] = r[n]);
return t;
}).apply(this, arguments);
};
Object.defineProperty(r, "__esModule", {
value: !0
}), r.addEvent = function(t) {
var r, e, l, c = "affectedTrait" in t ? t.affectedTrait : void 0, s = o(o({
id: n.gameStats.nextEventID(),
gameIndex: n.gameStats.gameIndex,
roundIndex: a.roundStats.roundIndex,
operationOrder: null !== (r = t.operationOrder) && void 0 !== r ? r : n.gameStats.nextOperationOrderValue()
}, t), {
affectedTraitCallIndex: c ? null !== (e = n.gameStats.traitCallCount.get(c)) && void 0 !== e ? e : 0 : void 0,
roundAffectedTraitCallIndex: c ? null !== (l = a.roundStats.roundTraitCallCount.get(c)) && void 0 !== l ? l : 0 : void 0
});
return n.gameStats.events.push(s), i.sessionStats.allEvents.push(s), a.roundStats.roundEvents.push(s), 
s;
};
var n = e(2574), a = e(2940), i = e(5600);
},
4542: (t, r, e) => {
Object.defineProperty(r, "__esModule", {
value: !0
}), r.formatActionExecuteMessages = function(t) {
var r = t.map(c).filter(function(t) {
return Boolean(t);
});
if (0 !== r.length) return 1 === r.length ? "\n动作：".concat(r[0]) : "\n动作：\n\t".concat(r.join("\n\t"));
};
var o = e(5800), n = e(9423), a = e(261), i = e(8281), l = e(3325);
function c(t) {
var r, e, o, c, h;
if (t.actionType) return t.status ? function(t, r, e, o) {
if ("AlgorithmStrategyAlgorithmPriorityListOperator" === t) return s("算法优先级列表", r, e, o, l.AlgorithmStrategyAlgorithmPriorityListOperator.algorithmPriorityList);
if ("AlgorithmStrategyAlgorithmListOperator" === t) return s("算法列表", r, e, o, a.AlgorithmStrategyAlgorithmListOperator.algorithmList);
if ("AlgorithmStrategyAlgorithmPostListPatchOperator" === t) return s("算法Post列表", r, e, o, i.AlgorithmStrategyAlgorithmPostListPatchOperator.algorithmPostList);
if ("AlgorithmStrategyAlgorithmFallbackListOperator" === t) return s("算法降级列表", r, e, o, n.AlgorithmStrategyAlgorithmFallbackListOperator.algorithmFallbackList);
if ("AlgorithmStrategyReturnOperator" === t) return "执行 ".concat(r, " 成功，跳过其它特性");
if ("AlgorithmStrategyReturnFilterOperator" === t) return "执行 ".concat(r, " 成功，过滤后续特性");
if ("AlgorithmStrategyDisableShareSequenceOperator" === t) return "执行 ".concat(r, " 成功，跳过整个共享串行阶段");
if ("AlgorithmStrategyDisableOperator" === t) {
if ("disable" === r) return "执行 ".concat(r, " 成功，特性：").concat(g(e[0]), " 被禁用");
if ("disableTag" === r) return "执行 ".concat(r, " 成功，tag：").concat(g(e[0]), " 被禁用");
}
return "执行 ".concat(t, ".").concat(r, " 成功").concat(e.length > 0 ? "，参数：".concat(u(e)) : "");
}(t.operator, t.actionType, null !== (r = t.args) && void 0 !== r ? r : [], t.beforeList) : (o = t.operator, 
c = t.actionType, h = null !== (e = t.args) && void 0 !== e ? e : [], "AlgorithmStrategyAlgorithmPriorityListOperator" === o ? "✗ 算法优先级列表：".concat(f(l.AlgorithmStrategyAlgorithmPriorityListOperator.algorithmPriorityList), " 执行 ").concat(c).concat(u(h), " 时未生效") : "AlgorithmStrategyAlgorithmListOperator" === o ? "✗ 算法列表：".concat(f(a.AlgorithmStrategyAlgorithmListOperator.algorithmList), " 执行 ").concat(c).concat(u(h), " 时未生效") : "AlgorithmStrategyAlgorithmPostListPatchOperator" === o ? "✗ 算法Post列表：".concat(f(i.AlgorithmStrategyAlgorithmPostListPatchOperator.algorithmPostList), " 执行 ").concat(c).concat(u(h), " 时未生效") : "AlgorithmStrategyAlgorithmFallbackListOperator" === o ? "✗ 算法降级列表：".concat(f(n.AlgorithmStrategyAlgorithmFallbackListOperator.algorithmFallbackList), " 执行 ").concat(c).concat(u(h), " 时未生效") : void 0);
}
function s(t, r, e, o, n) {
var a = o ? "，执行前列表：".concat(f(o)) : "";
return "✓ ".concat(t, "执行 ").concat(r).concat(u(e), " 成功").concat(a, "，执行后列表：").concat(f(n));
}
function u(t) {
return "[".concat(t.map(g).join("、"), "]");
}
function g(t) {
if (Array.isArray(t)) return "[".concat(t.map(g).join("、"), "]");
if ("number" == typeof t) return h(t);
if ("string" == typeof t || "boolean" == typeof t) return String(t);
try {
return JSON.stringify(t);
} catch (r) {
return String(t);
}
}
function h(t) {
var r = o.algorithmStrategy.context.algorithmInfo.getOfferTypeDisplayName(t);
return r ? "".concat(r, "(").concat(t, ")") : String(t);
}
function f(t) {
return 0 === t.length ? "[]" : "[".concat(t.map(function(t) {
return h(t.algorithmId);
}).join("、"), "]");
}
},
4568: function(t, r, e) {
var o = this && this.__awaiter || function(t, r, e, o) {
return new (e || (e = Promise))(function(n, a) {
function i(t) {
try {
c(o.next(t));
} catch (t) {
a(t);
}
}
function l(t) {
try {
c(o.throw(t));
} catch (t) {
a(t);
}
}
function c(t) {
var r;
t.done ? n(t.value) : (r = t.value, r instanceof e ? r : new e(function(t) {
t(r);
})).then(i, l);
}
c((o = o.apply(t, r || [])).next());
});
}, n = this && this.__generator || function(t, r) {
var e, o, n, a = {
label: 0,
sent: function() {
if (1 & n[0]) throw n[1];
return n[1];
},
trys: [],
ops: []
}, i = Object.create(("function" == typeof Iterator ? Iterator : Object).prototype);
return i.next = l(0), i.throw = l(1), i.return = l(2), "function" == typeof Symbol && (i[Symbol.iterator] = function() {
return this;
}), i;
function l(l) {
return function(c) {
return function(l) {
if (e) throw new TypeError("Generator is already executing.");
for (;i && (i = 0, l[0] && (a = 0)), a; ) try {
if (e = 1, o && (n = 2 & l[0] ? o.return : l[0] ? o.throw || ((n = o.return) && n.call(o), 
0) : o.next) && !(n = n.call(o, l[1])).done) return n;
switch (o = 0, n && (l = [ 2 & l[0], n.value ]), l[0]) {
case 0:
case 1:
n = l;
break;

case 4:
return a.label++, {
value: l[1],
done: !1
};

case 5:
a.label++, o = l[1], l = [ 0 ];
continue;

case 7:
l = a.ops.pop(), a.trys.pop();
continue;

default:
if (!((n = (n = a.trys).length > 0 && n[n.length - 1]) || 6 !== l[0] && 2 !== l[0])) {
a = 0;
continue;
}
if (3 === l[0] && (!n || l[1] > n[0] && l[1] < n[3])) {
a.label = l[1];
break;
}
if (6 === l[0] && a.label < n[1]) {
a.label = n[1], n = l;
break;
}
if (n && a.label < n[2]) {
a.label = n[2], a.ops.push(l);
break;
}
n[2] && a.ops.pop(), a.trys.pop();
continue;
}
l = r.call(t, a);
} catch (t) {
l = [ 6, t ], o = 0;
} finally {
e = n = 0;
}
if (5 & l[0]) throw l[1];
return {
value: l[0] ? l[1] : void 0,
done: !0
};
}([ l, c ]);
};
}
}, a = this && this.__values || function(t) {
var r = "function" == typeof Symbol && Symbol.iterator, e = r && t[r], o = 0;
if (e) return e.call(t);
if (t && "number" == typeof t.length) return {
next: function() {
return t && o >= t.length && (t = void 0), {
value: t && t[o++],
done: !t
};
}
};
throw new TypeError(r ? "Object is not iterable." : "Symbol.iterator is not defined.");
}, i = this && this.__read || function(t, r) {
var e = "function" == typeof Symbol && t[Symbol.iterator];
if (!e) return t;
var o, n, a = e.call(t), i = [];
try {
for (;(void 0 === r || r-- > 0) && !(o = a.next()).done; ) i.push(o.value);
} catch (t) {
n = {
error: t
};
} finally {
try {
o && !o.done && (e = a.return) && e.call(a);
} finally {
if (n) throw n.error;
}
}
return i;
}, l = this && this.__spreadArray || function(t, r, e) {
if (e || 2 === arguments.length) for (var o, n = 0, a = r.length; n < a; n++) !o && n in r || (o || (o = Array.prototype.slice.call(r, 0, n)), 
o[n] = r[n]);
return t.concat(o || Array.prototype.slice.call(r));
};
Object.defineProperty(r, "__esModule", {
value: !0
}), r.normalRequest = function(t, r) {
return o(this, void 0, Promise, function() {
var e, o, v, b, _, T, C, O, P, R, L, E, I, x, k, D, w, N, j, K, B, M, F, G, U, q, H, Y, J, W, X;
return n(this, function(n) {
switch (n.label) {
case 0:
if (t.process = "preprocess" === r ? S.AlgorithmStrategyProcessType.PREPROCESS_SDK_NORMAL : S.AlgorithmStrategyProcessType.POSTPROCESS_SDK_NORMAL, 
e = -1, o = y.AlgorithmStrategyAlgorithmListOperator.algorithmList, algorithmStrategy.context.CC_DEBUG && (0, 
f.logSDKAlgorithmListWithTraits)(r, "SDK 请求-算法列表", o), v = algorithmStrategy.context.configs.ALGORITHM_STRATEGY_SDK_ARGS_TRAITS_CONFIG, 
t.traits = v, "preprocess" === r && s.algorithmStrategyDot.preprocessNormalPush(o.map(s.toAlgorithmStrategyDotItem)), 
!(o.length > 0)) return [ 3, 11 ];
for ("preprocess" === r ? t.algorithmList = o : t.postAlgorithmList = o, "preprocess" === r && algorithmStrategy.context.algorithmStrategySourceLevelInfo.setAlgorithmSourceLevel(o[0].source), 
b = function(t) {
var r = o[t].router;
if (!(r && "adjust" in r)) return "continue";
var e = r.adjust, n = o.find(function(t) {
return t.algorithmId === e.algorithmId;
});
n && ("next" === e.type ? n.router = {
type: "next"
} : delete n.router);
}, T = 0; T < o.length; T++) b(T);
_ = Date.now(), T = 0, n.label = 1;

case 1:
if (!(T < o.length)) return [ 3, 10 ];
if (C = o[T], O = C.router, "preprocess" === r) {
if (null === (J = algorithmStrategy.context.preprocess_sdk_strategy) || void 0 === J ? void 0 : J.continue(C.algorithmId)) return t.sdk || (t.sdk = {
blockIds: [],
blockNames: [],
actualAlgorithmId_SDK_REQUEST_BEFORE_Patch: e,
actualAlgorithmId_SDK_REQUEST_AFTER_Patch: e,
actualAlgorithmId: e
}), algorithmStrategy.context.CONFLICT_DEBUG && c.AlgorithmStrategyConflictRecorder.recordSDKItemSkipped(C, "预处理 continue 策略【 3X5 或者 5X3 牌面】要求跳过"), 
algorithmStrategy.context.CC_DEBUG && g.AlgorithmStrategyLog.log("✗ ".concat((0, 
h.formatSDKTraceSDKLabel)(C, {
itemIndex: T,
itemTotal: o.length
}), " 跳过：预处理 continue 策略【 3X5 或者 5X3 牌面】要求跳过"), (0, d.getAlgorithmStrategyTraceResultColor)(!1)), 
[ 3, 9 ];
if (Date.now() - _ > algorithmStrategy.context.timeout.preprocess_normalAlgorithm_sdk) return algorithmStrategy.context.CONFLICT_DEBUG && c.AlgorithmStrategyConflictRecorder.recordSDKStopReason({
type: "timeout",
algorithmId: C.algorithmId
}), algorithmStrategy.context.CC_DEBUG && g.AlgorithmStrategyLog.log("✗ ".concat((0, 
h.formatSDKTraceSDKLabel)(C, {
itemIndex: T,
itemTotal: o.length
}), " 停止：预处理 SDK 超时策略要求停止"), (0, d.getAlgorithmStrategyTraceResultColor)(!1)), [ 3, 10 ];
}
return [ 4, (0, m.shouldSkipSDKItem)(C, "normal", t, T) ];

case 2:
if (n.sent()) return algorithmStrategy.context.CONFLICT_DEBUG && c.AlgorithmStrategyConflictRecorder.recordSDKItemSkipped(C, "SDK item before 生命周期要求跳过"), 
algorithmStrategy.context.CC_DEBUG && g.AlgorithmStrategyLog.log("✗ ".concat((0, 
h.formatSDKTraceSDKLabel)(C, {
itemIndex: T,
itemTotal: o.length
}), " 跳过：SDK item before 生命周期要求跳过"), (0, d.getAlgorithmStrategyTraceResultColor)(!1)), 
[ 3, 9 ];
algorithmStrategy.context.CONFLICT_DEBUG && c.AlgorithmStrategyConflictRecorder.recordSDKItemRequested(r, C), 
(null === (W = algorithmStrategy.context.ABTesting) || void 0 === W ? void 0 : W.AlgoSdkRequestBeforeActualIdPatch) || A.AlgorithmStrategyAlgoSdkRequestBeforeActualIdPatch.patch(C.algorithmId, this), 
P = p.AlgorithmStrategySDKRequest.createBaseInputArgs(), R = [], L = {}, E = algorithmStrategy.context.CC_DEBUG ? [] : void 0, 
I = 0, n.label = 3;

case 3:
return I < v.length ? (x = v[I], k = {
itemIndex: T,
itemTotal: o.length,
traitIndex: I,
traitTotal: algorithmStrategy.context.configs.ALGORITHM_STRATEGY_SDK_ARGS_TRAITS_CONFIG.length
}, (null == R ? void 0 : R.includes(x)) ? (algorithmStrategy.context.CC_DEBUG && (D = L[x], 
(0, h.logSDKConditionTraceSkipped)(x, D ? "跳过：被前置特性【".concat((0, g.formatTraitNameWithDescription)(D), "】通过 disableTraits 禁用") : "跳过：被前置特性 disableTraits 禁用", C, k)), 
[ 3, 6 ]) : (null == (w = TRAIT(x)) ? void 0 : w.onActiveCondition) && (null == w ? void 0 : w.active) ? (0, 
m.isSDKRequestTrait)(w) ? [ 4, (0, u.mergeSDKActionsArgs)(w, t, P, C, k) ] : [ 3, 5 ] : (algorithmStrategy.context.CC_DEBUG && (0, 
h.logSDKConditionTraceSkipped)(x, (0, h.formatSDKArgsTraitInactiveReason)(w), C, k), 
[ 3, 6 ])) : [ 3, 7 ];

case 4:
if (N = n.sent()) {
if (j = N.merged, K = N.args, void 0 !== j.disableTraits) {
if (algorithmStrategy.context.CC_DEBUG) try {
for (H = void 0, B = a(j.disableTraits), M = B.next(); !M.done; M = B.next()) F = M.value, 
R.includes(F) || (L[F] = x);
} catch (t) {
H = {
error: t
};
} finally {
try {
M && !M.done && (Y = B.return) && Y.call(B);
} finally {
if (H) throw H.error;
}
}
R = l([], i(new Set(l(l([], i(R), !1), i(j.disableTraits), !1))), !1);
}
G = algorithmStrategy.context.CONFLICT_DEBUG ? c.AlgorithmStrategyConflictRecorder.captureSDKArgsBefore(j, P) : void 0, 
p.AlgorithmStrategySDKRequest.mergeToInputArgs(P, j, x), G && c.AlgorithmStrategyConflictRecorder.recordSDKArgsMerge(r, "normal", C, x, G, P), 
algorithmStrategy.context.CC_DEBUG && (null == E || E.push({
traitClassName: (0, g.formatTraitNameWithDescription)(x),
args: K
}));
}
return [ 3, 6 ];

case 5:
algorithmStrategy.context.CC_DEBUG && (0, h.logSDKConditionTraceSkipped)(x, "跳过：不是 SDK 参数特性", C, k), 
n.label = 6;

case 6:
return I++, [ 3, 3 ];

case 7:
return algorithmStrategy.context.CC_DEBUG && (g.AlgorithmStrategyLog.log("SDK 算法列表-请求-合并参数：", g.AlgorithmStrategyLog.NORMAL_COLOR), 
g.AlgorithmStrategyLog.table(null != E ? E : [])), [ 4, p.AlgorithmStrategySDKRequest.request(P, C, t) ];

case 8:
if (U = n.sent(), algorithmStrategy.context.CONFLICT_DEBUG && c.AlgorithmStrategyConflictRecorder.recordSDKItemResult(C, U), 
null == U ? void 0 : U.SDK_SUCCESS) {
if ("postprocess" === r && s.algorithmStrategyDot.postprocessSuccessNormalPush([ (0, 
s.toAlgorithmStrategyDotItem)(C) ]), algorithmStrategy.context.CONFLICT_DEBUG && c.AlgorithmStrategyConflictRecorder.recordSuccessfulSDKResult(r, U), 
t.process = "preprocess" === r ? S.AlgorithmStrategyProcessType.PREPROCESS_SDK_NORMAL_SUCCESS : S.AlgorithmStrategyProcessType.POSTPROCESS_SDK_NORMAL_SUCCESS, 
"preprocess" === r && C.dynamicSource && algorithmStrategy.context.algorithmStrategySourceLevelInfo.setAlgorithmSourceLevel(C.dynamicSource), 
!(null == O ? void 0 : O.type) || "break" === (null == O ? void 0 : O.type)) return algorithmStrategy.context.CONFLICT_DEBUG && (q = t, 
c.AlgorithmStrategyConflictRecorder.recordSDKStopReason({
type: "break" === (null == O ? void 0 : O.type) ? "success-router-break" : "success-default-break",
algorithmId: C.algorithmId,
routerType: null == O ? void 0 : O.type,
returnState: !0 === q.returnState,
returnStateProcessType: null == q.returnStateProcessType ? void 0 : String(q.returnStateProcessType),
detail: "break" === (null == O ? void 0 : O.type) ? "router.type 为 break，SDK 成功后停止" : !0 === q.returnState ? "returnState 已设置".concat(null == q.returnStateProcessType ? "" : "（".concat(String(q.returnStateProcessType), "）"), "，且未配置 router.next，SDK 成功后停止") : "未配置 router.next，SDK 成功后默认停止"
})), [ 3, 10 ];
if ("next" === O.type) return [ 3, 9 ];
}
if ((null === (X = algorithmStrategy.context.ABTesting) || void 0 === X ? void 0 : X.postGroupPatch) && "postprocess" === r && (null == U ? void 0 : U.SDK_SUCCESS) && "skipOnFirstSuccess" === t.currentExecuteGroupType) return [ 3, 10 ];
n.label = 9;

case 9:
return T++, [ 3, 1 ];

case 10:
return [ 3, 12 ];

case 11:
t.sdk || (t.sdk = {
blockIds: [],
blockNames: [],
SDK_SUCCESS: !1,
actualAlgorithmId_SDK_REQUEST_BEFORE_Patch: e,
actualAlgorithmId_SDK_REQUEST_AFTER_Patch: e,
actualAlgorithmId: e
}), t.process = "preprocess" === r ? S.AlgorithmStrategyProcessType.PREPROCESS_SDK_NORMAL_FAIL : S.AlgorithmStrategyProcessType.POSTPROCESS_SDK_NORMAL_FAIL, 
n.label = 12;

case 12:
return algorithmStrategy.context.CONFLICT_DEBUG && c.AlgorithmStrategyConflictRecorder.completeSDK(r), 
"preprocess" === r ? (t.process !== S.AlgorithmStrategyProcessType.PREPROCESS_SDK_NORMAL_SUCCESS && (t.process = S.AlgorithmStrategyProcessType.PREPROCESS_SDK_NORMAL_FAIL), 
[ 2, t.process == S.AlgorithmStrategyProcessType.PREPROCESS_SDK_NORMAL_SUCCESS ]) : (t.process !== S.AlgorithmStrategyProcessType.POSTPROCESS_SDK_NORMAL_SUCCESS && (t.process = S.AlgorithmStrategyProcessType.POSTPROCESS_SDK_NORMAL_FAIL), 
[ 2, t.process == S.AlgorithmStrategyProcessType.POSTPROCESS_SDK_NORMAL_SUCCESS ]);
}
});
});
};
var c = e(8011), s = e(8637), u = e(2436), g = e(5815), h = e(3957), f = e(3173), d = e(6582), y = e(261), p = e(2230), S = e(7880), m = e(3768), A = e(3817);
},
4600: function(t, r, e) {
var o = this && this.__awaiter || function(t, r, e, o) {
return new (e || (e = Promise))(function(n, a) {
function i(t) {
try {
c(o.next(t));
} catch (t) {
a(t);
}
}
function l(t) {
try {
c(o.throw(t));
} catch (t) {
a(t);
}
}
function c(t) {
var r;
t.done ? n(t.value) : (r = t.value, r instanceof e ? r : new e(function(t) {
t(r);
})).then(i, l);
}
c((o = o.apply(t, r || [])).next());
});
}, n = this && this.__generator || function(t, r) {
var e, o, n, a = {
label: 0,
sent: function() {
if (1 & n[0]) throw n[1];
return n[1];
},
trys: [],
ops: []
}, i = Object.create(("function" == typeof Iterator ? Iterator : Object).prototype);
return i.next = l(0), i.throw = l(1), i.return = l(2), "function" == typeof Symbol && (i[Symbol.iterator] = function() {
return this;
}), i;
function l(l) {
return function(c) {
return function(l) {
if (e) throw new TypeError("Generator is already executing.");
for (;i && (i = 0, l[0] && (a = 0)), a; ) try {
if (e = 1, o && (n = 2 & l[0] ? o.return : l[0] ? o.throw || ((n = o.return) && n.call(o), 
0) : o.next) && !(n = n.call(o, l[1])).done) return n;
switch (o = 0, n && (l = [ 2 & l[0], n.value ]), l[0]) {
case 0:
case 1:
n = l;
break;

case 4:
return a.label++, {
value: l[1],
done: !1
};

case 5:
a.label++, o = l[1], l = [ 0 ];
continue;

case 7:
l = a.ops.pop(), a.trys.pop();
continue;

default:
if (!((n = (n = a.trys).length > 0 && n[n.length - 1]) || 6 !== l[0] && 2 !== l[0])) {
a = 0;
continue;
}
if (3 === l[0] && (!n || l[1] > n[0] && l[1] < n[3])) {
a.label = l[1];
break;
}
if (6 === l[0] && a.label < n[1]) {
a.label = n[1], n = l;
break;
}
if (n && a.label < n[2]) {
a.label = n[2], a.ops.push(l);
break;
}
n[2] && a.ops.pop(), a.trys.pop();
continue;
}
l = r.call(t, a);
} catch (t) {
l = [ 6, t ], o = 0;
} finally {
e = n = 0;
}
if (5 & l[0]) throw l[1];
return {
value: l[0] ? l[1] : void 0,
done: !0
};
}([ l, c ]);
};
}
}, a = this && this.__values || function(t) {
var r = "function" == typeof Symbol && Symbol.iterator, e = r && t[r], o = 0;
if (e) return e.call(t);
if (t && "number" == typeof t.length) return {
next: function() {
return t && o >= t.length && (t = void 0), {
value: t && t[o++],
done: !t
};
}
};
throw new TypeError(r ? "Object is not iterable." : "Symbol.iterator is not defined.");
}, i = this && this.__read || function(t, r) {
var e = "function" == typeof Symbol && t[Symbol.iterator];
if (!e) return t;
var o, n, a = e.call(t), i = [];
try {
for (;(void 0 === r || r-- > 0) && !(o = a.next()).done; ) i.push(o.value);
} catch (t) {
n = {
error: t
};
} finally {
try {
o && !o.done && (e = a.return) && e.call(a);
} finally {
if (n) throw n.error;
}
}
return i;
}, l = this && this.__spreadArray || function(t, r, e) {
if (e || 2 === arguments.length) for (var o, n = 0, a = r.length; n < a; n++) !o && n in r || (o || (o = Array.prototype.slice.call(r, 0, n)), 
o[n] = r[n]);
return t.concat(o || Array.prototype.slice.call(r));
};
Object.defineProperty(r, "__esModule", {
value: !0
}), r.fallbackRequest = function(t) {
return o(this, void 0, Promise, function() {
var r, e, o, b, _, T, C, O, P, R, L, E, I, x, k, D, w, N, j, K, B, M, F, G, U, q, H, Y;
return n(this, function(n) {
switch (n.label) {
case 0:
if (t.process = m.AlgorithmStrategyProcessType.PREPROCESS_SDK_FALLBACK, r = -1, 
e = p.AlgorithmStrategyAlgorithmListOperator.algorithmList, o = y.AlgorithmStrategyAlgorithmFallbackListOperator.algorithmFallbackList, 
s.algorithmStrategyDot.preprocessFallbackPush(o.map(s.toAlgorithmStrategyDotItem)), 
!(o.length > 0)) return [ 3, 11 ];
0 == e.length && algorithmStrategy.context.algorithmStrategySourceLevelInfo.setAlgorithmSourceLevel(o[0].source), 
algorithmStrategy.context.CC_DEBUG && (0, f.logSDKAlgorithmListWithTraits)("preprocess", "SDK 请求-算法降级列表", o, "SDK 请求-算法降级特性列表"), 
b = algorithmStrategy.context.configs.ALGORITHM_STRATEGY_SDK_ARGS_TRAITS_CONFIG, 
t.algorithmFallbackList = o, t.traits = b, _ = 0, n.label = 1;

case 1:
return _ < o.length ? (T = o[_], (null === (H = algorithmStrategy.context.preprocess_sdk_strategy) || void 0 === H ? void 0 : H.continue(T.algorithmId)) ? (algorithmStrategy.context.CONFLICT_DEBUG && c.AlgorithmStrategyConflictRecorder.recordSDKItemSkipped(T, "预处理 continue 策略【 3X5 或者 5X3 牌面】要求跳过"), 
algorithmStrategy.context.CC_DEBUG && g.AlgorithmStrategyLog.log("✗ ".concat((0, 
h.formatSDKTraceSDKLabel)(T, {
itemIndex: _,
itemTotal: o.length
}), " 跳过：预处理 continue 策略【 3X5 或者 5X3 牌面】要求跳过"), (0, d.getAlgorithmStrategyTraceResultColor)(!1)), 
[ 3, 9 ]) : [ 4, (0, A.shouldSkipSDKItem)(T, "fallback", t, _) ]) : [ 3, 10 ];

case 2:
if (n.sent()) return algorithmStrategy.context.CONFLICT_DEBUG && c.AlgorithmStrategyConflictRecorder.recordSDKItemSkipped(T, "SDK item before 生命周期要求跳过"), 
algorithmStrategy.context.CC_DEBUG && g.AlgorithmStrategyLog.log("✗ ".concat((0, 
h.formatSDKTraceSDKLabel)(T, {
itemIndex: _,
itemTotal: o.length
}), " 跳过：SDK item before 生命周期要求跳过"), (0, d.getAlgorithmStrategyTraceResultColor)(!1)), 
[ 3, 9 ];
algorithmStrategy.context.CONFLICT_DEBUG && c.AlgorithmStrategyConflictRecorder.recordSDKItemRequested("preprocess", T), 
(null === (Y = algorithmStrategy.context.ABTesting) || void 0 === Y ? void 0 : Y.AlgoSdkRequestBeforeActualIdPatch) || v.AlgorithmStrategyAlgoSdkRequestBeforeActualIdPatch.patch(T.algorithmId, this), 
C = S.AlgorithmStrategySDKRequest.createBaseInputArgs(), O = [], P = {}, R = algorithmStrategy.context.CC_DEBUG ? [] : void 0, 
L = 0, n.label = 3;

case 3:
return L < b.length ? (E = b[L], I = {
itemIndex: _,
itemTotal: o.length,
traitIndex: L,
traitTotal: b.length
}, (null == O ? void 0 : O.includes(E)) ? (algorithmStrategy.context.CC_DEBUG && (x = P[E], 
(0, h.logSDKConditionTraceSkipped)(E, x ? "跳过：被前置特性【".concat((0, g.formatTraitNameWithDescription)(x), "】通过 disableTraits 禁用") : "跳过：被前置特性 disableTraits 禁用", T, I)), 
[ 3, 6 ]) : (null == (k = TRAIT(E)) ? void 0 : k.onActiveCondition) && !(null == k ? void 0 : k.active) ? (algorithmStrategy.context.CC_DEBUG && (0, 
h.logSDKConditionTraceSkipped)(E, (0, h.formatSDKArgsTraitInactiveReason)(k), T, I), 
[ 3, 6 ]) : (0, A.isSDKRequestTrait)(k) ? [ 4, (0, u.mergeSDKActionsArgs)(k, t, C, T, I) ] : [ 3, 5 ]) : [ 3, 7 ];

case 4:
if (D = n.sent()) {
if (w = D.merged, N = D.args, void 0 !== w.disableTraits) {
if (algorithmStrategy.context.CC_DEBUG) try {
for (U = void 0, j = a(w.disableTraits), K = j.next(); !K.done; K = j.next()) B = K.value, 
O.includes(B) || (P[B] = E);
} catch (t) {
U = {
error: t
};
} finally {
try {
K && !K.done && (q = j.return) && q.call(j);
} finally {
if (U) throw U.error;
}
}
O = l([], i(new Set(l(l([], i(O), !1), i(w.disableTraits), !1))), !1);
}
M = algorithmStrategy.context.CONFLICT_DEBUG ? c.AlgorithmStrategyConflictRecorder.captureSDKArgsBefore(w, C) : void 0, 
S.AlgorithmStrategySDKRequest.mergeToInputArgs(C, w, E), M && c.AlgorithmStrategyConflictRecorder.recordSDKArgsMerge("preprocess", "fallback", T, E, M, C), 
algorithmStrategy.context.CC_DEBUG && (null == R || R.push({
traitClassName: (0, g.formatTraitNameWithDescription)(E),
args: N
}));
}
return [ 3, 6 ];

case 5:
algorithmStrategy.context.CC_DEBUG && (0, h.logSDKConditionTraceSkipped)(E, "跳过：不是 SDK 参数特性", T, I), 
n.label = 6;

case 6:
return L++, [ 3, 3 ];

case 7:
return algorithmStrategy.context.CC_DEBUG && (g.AlgorithmStrategyLog.log("SDK 算法降级列表-请求-合并参数：", g.AlgorithmStrategyLog.NORMAL_COLOR), 
g.AlgorithmStrategyLog.table(null != R ? R : [])), [ 4, S.AlgorithmStrategySDKRequest.request(C, T, t) ];

case 8:
if (F = n.sent(), algorithmStrategy.context.CONFLICT_DEBUG && c.AlgorithmStrategyConflictRecorder.recordSDKItemResult(T, F), 
null == F ? void 0 : F.SDK_SUCCESS) return algorithmStrategy.context.CONFLICT_DEBUG && (G = t, 
c.AlgorithmStrategyConflictRecorder.recordSuccessfulSDKResult("preprocess", F), 
c.AlgorithmStrategyConflictRecorder.recordSDKStopReason({
type: "success-default-break",
algorithmId: T.algorithmId,
returnState: !0 === G.returnState,
returnStateProcessType: null == G.returnStateProcessType ? void 0 : String(G.returnStateProcessType),
detail: !0 === G.returnState ? "returnState 已设置".concat(null == G.returnStateProcessType ? "" : "（".concat(String(G.returnStateProcessType), "）"), "，降级列表 SDK 成功后停止") : "算法降级列表 SDK 成功后固定停止"
})), t.process = m.AlgorithmStrategyProcessType.PREPROCESS_SDK_FALLBACK_SUCCESS, 
[ 3, 10 ];
n.label = 9;

case 9:
return _++, [ 3, 1 ];

case 10:
return [ 3, 12 ];

case 11:
t.sdk || (t.sdk = {
SDK_SUCCESS: !1,
actualAlgorithmId_SDK_REQUEST_BEFORE_Patch: r,
actualAlgorithmId_SDK_REQUEST_AFTER_Patch: r,
actualAlgorithmId: r
}), t.process = m.AlgorithmStrategyProcessType.PREPROCESS_SDK_FALLBACK_FAIL, n.label = 12;

case 12:
return algorithmStrategy.context.CONFLICT_DEBUG && c.AlgorithmStrategyConflictRecorder.completeFallbackSDK("preprocess"), 
t.process !== m.AlgorithmStrategyProcessType.PREPROCESS_SDK_FALLBACK_SUCCESS && (t.process = m.AlgorithmStrategyProcessType.PREPROCESS_SDK_FALLBACK_FAIL), 
[ 2, t.process === m.AlgorithmStrategyProcessType.PREPROCESS_SDK_FALLBACK_SUCCESS ];
}
});
});
};
var c = e(8011), s = e(8637), u = e(2436), g = e(5815), h = e(3957), f = e(3173), d = e(6582), y = e(9423), p = e(261), S = e(2230), m = e(7880), A = e(3768), v = e(3817);
},
4727: (t, r) => {
var e;
Object.defineProperty(r, "__esModule", {
value: !0
}), r.AlgorithmStrategyConflictType = void 0, function(t) {
t[t.ALGORITHM_OPERATOR_UNSUCCESS = 0] = "ALGORITHM_OPERATOR_UNSUCCESS", t[t.ALGORITHM_OPERATOR_REPLACE_ALL_SUCCESS = 1] = "ALGORITHM_OPERATOR_REPLACE_ALL_SUCCESS", 
t[t.ALGORITHM_OPERATOR_SAME_SOURCE_SDK_FAIL = 2] = "ALGORITHM_OPERATOR_SAME_SOURCE_SDK_FAIL", 
t[t.ALGORITHM_PRE_PROCESS_SDK_SUCCESS_BUT_POST_PROCESS_REPLACE = 3] = "ALGORITHM_PRE_PROCESS_SDK_SUCCESS_BUT_POST_PROCESS_REPLACE", 
t[t.ALGORITHM_OPERATOR_SUCCESS_BUT_NOT_CONSUME = 4] = "ALGORITHM_OPERATOR_SUCCESS_BUT_NOT_CONSUME", 
t[t.ALGORITHM_LIST_CHANGED = 5] = "ALGORITHM_LIST_CHANGED", t[t.ALGORITHM_ADJUST_RESULT = 6] = "ALGORITHM_ADJUST_RESULT", 
t[t.ALGORITHM_SDK_ARGS_MERGE = 7] = "ALGORITHM_SDK_ARGS_MERGE";
}(e || (r.AlgorithmStrategyConflictType = e = {}));
},
4846: function(t, r, e) {
var o = this && this.__values || function(t) {
var r = "function" == typeof Symbol && Symbol.iterator, e = r && t[r], o = 0;
if (e) return e.call(t);
if (t && "number" == typeof t.length) return {
next: function() {
return t && o >= t.length && (t = void 0), {
value: t && t[o++],
done: !t
};
}
};
throw new TypeError(r ? "Object is not iterable." : "Symbol.iterator is not defined.");
}, n = this && this.__read || function(t, r) {
var e = "function" == typeof Symbol && t[Symbol.iterator];
if (!e) return t;
var o, n, a = e.call(t), i = [];
try {
for (;(void 0 === r || r-- > 0) && !(o = a.next()).done; ) i.push(o.value);
} catch (t) {
n = {
error: t
};
} finally {
try {
o && !o.done && (e = a.return) && e.call(a);
} finally {
if (n) throw n.error;
}
}
return i;
}, a = this && this.__spreadArray || function(t, r, e) {
if (e || 2 === arguments.length) for (var o, n = 0, a = r.length; n < a; n++) !o && n in r || (o || (o = Array.prototype.slice.call(r, 0, n)), 
o[n] = r[n]);
return t.concat(o || Array.prototype.slice.call(r));
};
Object.defineProperty(r, "__esModule", {
value: !0
}), r.collectionAdjust = function(t) {
var r, e, g, h, f, d;
t.process = s.AlgorithmStrategyProcessType.COLLECTION_ADJUST, delete t.returnState, 
delete t.disabledTraits;
var y, p, S = i.algorithmStrategy.context.CONFLICT_DEBUG && "journey" === i.algorithmStrategy.context.gameMode ? storage.getItem("chapterCollectionLists") : void 0, m = [];
try {
for (var A = o(i.algorithmStrategy.context.configs.ALGORITHM_STRATEGY_COLLECTION_ADJUST_TRAITS_CONFIG), v = A.next(); !v.done; v = A.next()) {
var b = v.value;
if (t.returnState) break;
if (!(null === (f = t.disabledTraits) || void 0 === f ? void 0 : f.includes(b))) {
var _ = TRAIT(b);
if ((null == _ ? void 0 : _.onActiveCondition) && (null == _ ? void 0 : _.active) && u(_)) {
var T = _.onAlgorithmStrategyCollectionAdjust(t);
if (!T) continue;
if (y = b, p = T.data, i.algorithmStrategy.context.CONFLICT_DEBUG && (l.AlgorithmStrategyConflictRecorder.recordTraitTrigger(y), 
m.push({
traitSource: y,
data: T.data,
returnState: T.returnState,
disableTraits: null == T.disableTraits ? void 0 : a([], n(T.disableTraits), !1)
})), null === (d = T.disableTraits) || void 0 === d ? void 0 : d.length) {
var C = t;
Array.isArray(C.disabledTraits) || (C.disabledTraits = []);
try {
for (var O = (g = void 0, o(T.disableTraits)), P = O.next(); !P.done; P = O.next()) {
var R = P.value;
C.disabledTraits.includes(R) || C.disabledTraits.push(R);
}
} catch (t) {
g = {
error: t
};
} finally {
try {
P && !P.done && (h = O.return) && h.call(O);
} finally {
if (g) throw g.error;
}
}
}
T.returnState && (t.returnState = !0), i.algorithmStrategy.context.CC_DEBUG && c.AlgorithmStrategyLog.log("特性：".concat(b, " 收集物调整："), c.AlgorithmStrategyLog.NORMAL_COLOR, T);
}
}
}
} catch (t) {
r = {
error: t
};
} finally {
try {
v && !v.done && (e = A.return) && e.call(A);
} finally {
if (r) throw r.error;
}
}
return Array.isArray(p) && p.length >= 0 ? ("journey" === i.algorithmStrategy.context.gameMode && storage.setItem("chapterCollectionLists", p), 
t.process = s.AlgorithmStrategyProcessType.COLLECTION_ADJUST_SUCCESS) : t.process = s.AlgorithmStrategyProcessType.COLLECTION_ADJUST_FAIL, 
i.algorithmStrategy.context.CONFLICT_DEBUG && l.AlgorithmStrategyConflictRecorder.recordAdjustResult({
process: "collectionAdjust",
success: t.process === s.AlgorithmStrategyProcessType.COLLECTION_ADJUST_SUCCESS,
traitSource: y,
traitResults: m,
beforeCollectionList: S,
collectionList: p,
reason: "收集物调整阶段记录最终收集物列表"
}), delete t.returnState, delete t.disabledTraits, t;
};
var i = e(5800), l = e(8011), c = e(5815), s = e(7880);
function u(t) {
return t && "function" == typeof t.onAlgorithmStrategyCollectionAdjust;
}
},
4985: function(t, r, e) {
var o = this && this.__assign || function() {
return (o = Object.assign || function(t) {
for (var r, e = 1, o = arguments.length; e < o; e++) for (var n in r = arguments[e]) Object.prototype.hasOwnProperty.call(r, n) && (t[n] = r[n]);
return t;
}).apply(this, arguments);
}, n = this && this.__read || function(t, r) {
var e = "function" == typeof Symbol && t[Symbol.iterator];
if (!e) return t;
var o, n, a = e.call(t), i = [];
try {
for (;(void 0 === r || r-- > 0) && !(o = a.next()).done; ) i.push(o.value);
} catch (t) {
n = {
error: t
};
} finally {
try {
o && !o.done && (e = a.return) && e.call(a);
} finally {
if (n) throw n.error;
}
}
return i;
}, a = this && this.__spreadArray || function(t, r, e) {
if (e || 2 === arguments.length) for (var o, n = 0, a = r.length; n < a; n++) !o && n in r || (o || (o = Array.prototype.slice.call(r, 0, n)), 
o[n] = r[n]);
return t.concat(o || Array.prototype.slice.call(r));
}, i = this && this.__values || function(t) {
var r = "function" == typeof Symbol && Symbol.iterator, e = r && t[r], o = 0;
if (e) return e.call(t);
if (t && "number" == typeof t.length) return {
next: function() {
return t && o >= t.length && (t = void 0), {
value: t && t[o++],
done: !t
};
}
};
throw new TypeError(r ? "Object is not iterable." : "Symbol.iterator is not defined.");
};
Object.defineProperty(r, "__esModule", {
value: !0
}), r.beginSDKRequest = function() {
p.roundStats.resetSDKRequestState();
}, r.recordSDKItemRequested = function(t, r) {
var e = (0, d.createItemKey)(t, r);
p.roundStats.sdkRequestedAlgorithmIds.push(r.algorithmId), p.roundStats.sdkTrace.push({
algorithmId: r.algorithmId,
source: r.source,
dynamicSource: r.dynamicSource,
traitSource: r.traitSource,
status: "requested"
}), p.roundStats.pendingConsumeItems.delete(e), (0, h.recordLineageConflict)(t, r, e);
}, r.recordSDKItemSkipped = function(t, r) {
p.roundStats.sdkTrace.push({
algorithmId: t.algorithmId,
source: t.source,
dynamicSource: t.dynamicSource,
traitSource: t.traitSource,
status: "skipped",
reason: r
});
}, r.recordSDKItemResult = function(t, r) {
var e, i = a([], n(p.roundStats.sdkTrace), !1).reverse().find(function(r) {
return r.algorithmId === t.algorithmId && r.traitSource === t.traitSource && "requested" === r.status;
});
i && (i.sdkSuccess = !0 === (null == r ? void 0 : r.SDK_SUCCESS), i.sdkSuccess || (i.status = "request-failed"), 
i.errorCode = r.SDK_SUCCESS ? 0 : void 0, i.sdkAlgorithmType = null == r ? void 0 : r.SDK_ALGO_TYPE, 
i.source = null !== (e = null == r ? void 0 : r.source) && void 0 !== e ? e : i.source, 
i.actualAlgorithmId = null == r ? void 0 : r.actualAlgorithmId, i.blockIds = a([], n(r.blockIds), !1), 
i.blockNames = a([], n(r.blockNames), !1), i.blockPoses = r.blockPoses.map(function(t) {
return o({}, t);
}), i.betterBlockCount = null == r ? void 0 : r.betterBlockCount, i.betterSpaceCount = null == r ? void 0 : r.betterSpaceCount, 
i.sdkExtra = r.SDK_Extra ? JSON.parse(JSON.stringify(r.SDK_Extra)) : void 0);
}, r.recordSDKStopReason = function(t) {
p.roundStats.sdkStopReason = t;
var r = a([], n(p.roundStats.sdkTrace), !1).reverse().find(function(r) {
return r.algorithmId === t.algorithmId && "requested" === r.status;
});
r && (r.status = "success-stop");
}, r.captureSDKArgsBefore = function(t, r) {
var e, o, n = {};
try {
for (var a = i(Object.keys(t)), l = a.next(); !l.done; l = a.next()) {
var c = l.value;
"disableTraits" !== c && (n[c] = v(r[c]));
}
} catch (t) {
e = {
error: t
};
} finally {
try {
l && !l.done && (o = a.return) && o.call(a);
} finally {
if (e) throw e.error;
}
}
return n;
}, r.recordSDKArgsMerge = function(t, r, e, o, l, c) {
var s, u, h = [], d = {};
try {
for (var y = i(Object.keys(l)), A = y.next(); !A.done; A = y.next()) {
var b = A.value, _ = l[b], T = v(c[b]);
S(_, T) || (h.push(b), d[b] = m(_, T));
}
} catch (t) {
s = {
error: t
};
} finally {
try {
A && !A.done && (u = y.return) && u.call(y);
} finally {
if (s) throw s.error;
}
}
if (0 !== h.length) {
var C, O, P = function(t, r, e) {
var o;
return [ t, r, e.algorithmId, null !== (o = e.traitSource) && void 0 !== o ? o : "" ].join("|");
}(t, r, e), R = {
traitClassName: o,
changed: d,
changedKeys: h
}, L = p.roundStats.sdkArgsMergeEvents.get(P);
if (L) return L.traitMerges = Object.freeze(a(a([], n(L.traitMerges), !1), [ R ], !1)), 
void (L.reason = (C = L.traitMerges, O = C.map(function(t) {
return "【".concat(t.traitClassName, "】改写了 ").concat(t.changedKeys.join("、"));
}), "合并 SDK 入参：".concat(O.join("；"))));
var E = (0, f.addEvent)({
type: g.AlgorithmStrategyConflictType.ALGORITHM_SDK_ARGS_MERGE,
severity: "info",
process: t,
triggerTrait: o,
algorithmId: e.algorithmId,
algorithmTraitSource: e.traitSource,
stage: r,
traitMerges: Object.freeze([ R ]),
reason: "【".concat(o, "】合并 SDK 入参，改写了 ").concat(h.join("、"))
});
p.roundStats.sdkArgsMergeEvents.set(P, E);
}
}, r.completeSDK = function(t) {
var r, e, y, S = (0, d.createAlgorithmListSnapshot)(c.AlgorithmStrategyAlgorithmListOperator.algorithmList), m = (0, 
d.createAlgorithmListSnapshot)(l.AlgorithmStrategyAlgorithmFallbackListOperator.algorithmFallbackList), A = (0, 
d.createAlgorithmListSnapshot)(s.AlgorithmStrategyAlgorithmPriorityListOperator.algorithmPriorityList), v = (0, 
d.createAlgorithmListSnapshot)(u.AlgorithmStrategyAlgorithmPostListPatchOperator.algorithmPostList), T = _(S);
b(t, T, S, m, A, v, !1);
try {
for (var C = i(a([], n(p.roundStats.pendingConsumeItems.values()), !1)), O = C.next(); !O.done; O = C.next()) {
var P = O.value;
if (P.process === t) {
var R = P.item.traitSource;
if (R) {
var L = (0, h.findRemovedByAction)(P.item.algorithmId, null !== (y = P.snapshots.operationOrder) && void 0 !== y ? y : 0);
(0, f.addEvent)(o({
type: g.AlgorithmStrategyConflictType.ALGORITHM_OPERATOR_SUCCESS_BUT_NOT_CONSUME,
severity: "conflict",
process: t,
algorithmListSource: P.item.algorithmListSource,
affectedTrait: R,
triggerTrait: R,
actionType: P.actionType,
args: P.args,
algorithmId: P.item.algorithmId,
reason: "算法列表操作成功，但 SDK 阶段未请求该算法项",
sdkCompleteAlgorithmList: S,
sdkCompleteAlgorithmFallbackList: m,
sdkCompleteAlgorithmPriorityList: A,
sdkCompleteAlgorithmPostList: v,
sdkRequestedAlgorithmIds: a([], n(p.roundStats.sdkRequestedAlgorithmIds), !1),
sdkTrace: T,
sdkStopReason: p.roundStats.sdkStopReason,
removedByTrait: null == L ? void 0 : L.traitSource,
removedByActionType: null == L ? void 0 : L.actionType
}, P.snapshots));
}
p.roundStats.pendingConsumeItems.delete(P.key);
}
}
} catch (t) {
r = {
error: t
};
} finally {
try {
O && !O.done && (e = C.return) && e.call(C);
} finally {
if (r) throw r.error;
}
}
}, r.completeFallbackSDK = function(t) {
var r = (0, d.createAlgorithmListSnapshot)(c.AlgorithmStrategyAlgorithmListOperator.algorithmList), e = (0, 
d.createAlgorithmListSnapshot)(l.AlgorithmStrategyAlgorithmFallbackListOperator.algorithmFallbackList), o = (0, 
d.createAlgorithmListSnapshot)(s.AlgorithmStrategyAlgorithmPriorityListOperator.algorithmPriorityList), n = (0, 
d.createAlgorithmListSnapshot)(u.AlgorithmStrategyAlgorithmPostListPatchOperator.algorithmPostList);
b(t, _(e), r, e, o, n, !0);
}, r.recordSuccessfulSDKResult = function(t, r) {
(0, y.recordSuccessfulSDKResult)(t, r);
};
var l = e(9423), c = e(261), s = e(3325), u = e(8281), g = e(4727), h = e(5507), f = e(4501), d = e(7193), y = e(8459), p = e(2940);
function S(t, r) {
var e, o;
if (Array.isArray(t) && Array.isArray(r)) {
if (t.length !== r.length) return !1;
for (var n = 0; n < t.length; n++) if (!S(t[n], r[n])) return !1;
return !0;
}
if (A(t) && A(r)) {
var a = Object.keys(t), l = Object.keys(r);
if (a.length !== l.length) return !1;
try {
for (var c = i(a), s = c.next(); !s.done; s = c.next()) {
var u = s.value;
if (!Object.prototype.hasOwnProperty.call(r, u) || !S(t[u], r[u])) return !1;
}
} catch (t) {
e = {
error: t
};
} finally {
try {
s && !s.done && (o = c.return) && o.call(c);
} finally {
if (e) throw e.error;
}
}
return !0;
}
return Object.is(t, r);
}
function m(t, r) {
var e, o;
if (Array.isArray(r) && Array.isArray(t)) {
for (var n = [], a = 0; a < r.length; a++) a < t.length && S(t[a], r[a]) || n.push(m(t[a], r[a]));
return n;
}
if (A(r) && A(t)) {
n = {};
try {
for (var l = i(Object.keys(r)), c = l.next(); !c.done; c = l.next()) {
var s = c.value;
Object.prototype.hasOwnProperty.call(t, s) ? S(t[s], r[s]) || (n[s] = m(t[s], r[s])) : n[s] = v(r[s]);
}
} catch (t) {
e = {
error: t
};
} finally {
try {
c && !c.done && (o = l.return) && o.call(l);
} finally {
if (e) throw e.error;
}
}
return n;
}
return r;
}
function A(t) {
return null != t && "object" == typeof t && !Array.isArray(t);
}
function v(t) {
return null == t || "object" != typeof t ? t : JSON.parse(JSON.stringify(t));
}
function b(t, r, e, o, l, c, s) {
var u, h;
try {
for (var f = i(p.roundStats.roundEvents), d = f.next(); !d.done; d = f.next()) {
var y = d.value;
y.type !== g.AlgorithmStrategyConflictType.ALGORITHM_ADJUST_RESULT && y.type !== g.AlgorithmStrategyConflictType.ALGORITHM_SDK_ARGS_MERGE && y.process === t && "fallback" !== y.algorithmListSource && (s || null == y.sdkTrace) && (y.sdkTrace = r, 
y.sdkCompleteAlgorithmList = e, y.sdkCompleteAlgorithmFallbackList = o, y.sdkCompleteAlgorithmPriorityList = l, 
y.sdkCompleteAlgorithmPostList = c, y.sdkRequestedAlgorithmIds = a([], n(p.roundStats.sdkRequestedAlgorithmIds), !1), 
y.sdkStopReason = p.roundStats.sdkStopReason);
}
} catch (t) {
u = {
error: t
};
} finally {
try {
d && !d.done && (h = f.return) && h.call(f);
} finally {
if (u) throw u.error;
}
}
}
function _(t) {
var r = new Set(p.roundStats.sdkTrace.map(function(t) {
var r;
return "".concat(t.algorithmId, "|").concat(null !== (r = t.traitSource) && void 0 !== r ? r : "");
})), e = t.filter(function(t) {
var e;
return !r.has("".concat(t.algorithmId, "|").concat(null !== (e = t.traitSource) && void 0 !== e ? e : ""));
}).map(function(t) {
return {
algorithmId: t.algorithmId,
source: t.source,
dynamicSource: t.dynamicSource,
traitSource: t.traitSource,
status: "not-reached"
};
});
return Object.freeze(a(a([], n(p.roundStats.sdkTrace), !1), n(e), !1));
}
},
5213: function(t, r, e) {
var o = this && this.__awaiter || function(t, r, e, o) {
return new (e || (e = Promise))(function(n, a) {
function i(t) {
try {
c(o.next(t));
} catch (t) {
a(t);
}
}
function l(t) {
try {
c(o.throw(t));
} catch (t) {
a(t);
}
}
function c(t) {
var r;
t.done ? n(t.value) : (r = t.value, r instanceof e ? r : new e(function(t) {
t(r);
})).then(i, l);
}
c((o = o.apply(t, r || [])).next());
});
}, n = this && this.__generator || function(t, r) {
var e, o, n, a = {
label: 0,
sent: function() {
if (1 & n[0]) throw n[1];
return n[1];
},
trys: [],
ops: []
}, i = Object.create(("function" == typeof Iterator ? Iterator : Object).prototype);
return i.next = l(0), i.throw = l(1), i.return = l(2), "function" == typeof Symbol && (i[Symbol.iterator] = function() {
return this;
}), i;
function l(l) {
return function(c) {
return function(l) {
if (e) throw new TypeError("Generator is already executing.");
for (;i && (i = 0, l[0] && (a = 0)), a; ) try {
if (e = 1, o && (n = 2 & l[0] ? o.return : l[0] ? o.throw || ((n = o.return) && n.call(o), 
0) : o.next) && !(n = n.call(o, l[1])).done) return n;
switch (o = 0, n && (l = [ 2 & l[0], n.value ]), l[0]) {
case 0:
case 1:
n = l;
break;

case 4:
return a.label++, {
value: l[1],
done: !1
};

case 5:
a.label++, o = l[1], l = [ 0 ];
continue;

case 7:
l = a.ops.pop(), a.trys.pop();
continue;

default:
if (!((n = (n = a.trys).length > 0 && n[n.length - 1]) || 6 !== l[0] && 2 !== l[0])) {
a = 0;
continue;
}
if (3 === l[0] && (!n || l[1] > n[0] && l[1] < n[3])) {
a.label = l[1];
break;
}
if (6 === l[0] && a.label < n[1]) {
a.label = n[1], n = l;
break;
}
if (n && a.label < n[2]) {
a.label = n[2], a.ops.push(l);
break;
}
n[2] && a.ops.pop(), a.trys.pop();
continue;
}
l = r.call(t, a);
} catch (t) {
l = [ 6, t ], o = 0;
} finally {
e = n = 0;
}
if (5 & l[0]) throw l[1];
return {
value: l[0] ? l[1] : void 0,
done: !0
};
}([ l, c ]);
};
}
};
Object.defineProperty(r, "__esModule", {
value: !0
}), r.algorithmStrategyPipeline = r.flow = void 0;
var a = e(261), i = e(7880), l = e(9423), c = e(3374), s = e(8350), u = e(3768), g = e(9351), h = e(2806), f = e(4846), d = e(6024), y = e(5800), p = e(2230), S = e(5815), m = e(9223), A = e(8011), v = e(8281), b = e(3325), _ = e(8637);
r.flow = {};
var T = function() {
function t() {
this._sessionInit = !1;
}
return t.prototype.sessionInit = function() {
return o(this, void 0, void 0, function() {
return n(this, function(t) {
switch (t.label) {
case 0:
return this._sessionInit ? [ 2 ] : (y.algorithmStrategy.context.CC_DEBUG && S.AlgorithmStrategyLog.log("========================== session 开始==========================", S.AlgorithmStrategyLog.NORMAL_COLOR, i.AlgorithmStrategyProcessType.SESSION_INIT), 
this._sessionInit = !0, r.flow = {
process: i.AlgorithmStrategyProcessType.SESSION_INIT
}, y.algorithmStrategy.context.CONFLICT_WATCH_STACK_DEBUG && y.algorithmStrategy.context.CONFLICT_DEBUG && A.AlgorithmStrategyConflictRecorder.stateWatch(), 
[ 4, (0, g.invokeLifeCycle)(y.algorithmStrategy.context.configs.ALGORITHM_STRATEGY_SESSION_INIT_CONFIG, "onAlgorithmStrategySessionInit") ]);

case 1:
return t.sent(), [ 2 ];
}
});
});
}, t.prototype.roundInit = function() {
return o(this, void 0, void 0, function() {
var t;
return n(this, function(e) {
switch (e.label) {
case 0:
return t = y.algorithmStrategy.context.gameMode === m.GameMode.Class ? storage.getItem("classRoundNum", 0) : storage.getItem("chapterRoundNum", 0), 
y.algorithmStrategy.context.CC_DEBUG && (S.AlgorithmStrategyLog.log("========================== 每轮开始【第".concat(t, "轮】 =========================="), S.AlgorithmStrategyLog.ROUND_COLOR, i.AlgorithmStrategyProcessType.ROUND_INIT), 
S.AlgorithmStrategyLog.log("全局上下文：", S.AlgorithmStrategyLog.NORMAL_COLOR), S.AlgorithmStrategyLog.table(y.algorithmStrategy.context.globalContext())), 
r.flow = {
process: i.AlgorithmStrategyProcessType.ROUND_INIT,
algorithmList: [],
algorithmFallbackList: [],
postAlgorithmList: []
}, _.algorithmStrategyDot.clear(), p.AlgorithmStrategySDKRequest.clear(), b.AlgorithmStrategyAlgorithmPriorityListOperator.clear(), 
a.AlgorithmStrategyAlgorithmListOperator.clear(), v.AlgorithmStrategyAlgorithmPostListPatchOperator.clear(), 
l.AlgorithmStrategyAlgorithmFallbackListOperator.clear(), y.algorithmStrategy.context.CONFLICT_DEBUG && A.AlgorithmStrategyConflictRecorder.resetRound(t), 
[ 4, (0, g.invokeLifeCycle)(y.algorithmStrategy.context.configs.ALGORITHM_STRATEGY_ROUNDS_INIT_CONFIG, "onAlgorithmStrategyRoundInit") ];

case 1:
return e.sent(), [ 2 ];
}
});
});
}, t.prototype.gameInit = function() {
return o(this, void 0, void 0, function() {
var t;
return n(this, function(e) {
switch (e.label) {
case 0:
return y.algorithmStrategy.context.CC_DEBUG && (t = y.algorithmStrategy.context.gameMode === m.GameMode.Class ? storage.getItem("classGameNum", 0) : storage.getItem("chapterGameNum", 0), 
S.AlgorithmStrategyLog.log("========================== 每局开始【第".concat(t, "局】=========================="), S.AlgorithmStrategyLog.NORMAL_COLOR, i.AlgorithmStrategyProcessType.GAMES_INIT)), 
r.flow.process = i.AlgorithmStrategyProcessType.GAMES_INIT, [ 4, (0, g.invokeTaggedLifeCycle)(y.algorithmStrategy.context.configs.ALGORITHM_STRATEGY_GAMES_INIT_CONFIG, "onAlgorithmStrategyGameInit") ];

case 1:
return e.sent(), [ 2 ];
}
});
});
}, t.prototype.gameNewInit = function() {
return o(this, void 0, void 0, function() {
var t;
return n(this, function(e) {
switch (e.label) {
case 0:
return t = y.algorithmStrategy.context.gameMode === m.GameMode.Class ? storage.getItem("classGameNum", 0) : storage.getItem("chapterGameNum", 0), 
y.algorithmStrategy.context.CC_DEBUG && S.AlgorithmStrategyLog.log("========================== 每局（新）开始【第".concat(t, "局】 =========================="), S.AlgorithmStrategyLog.NORMAL_COLOR, i.AlgorithmStrategyProcessType.GAMES_NEW_INIT), 
r.flow.process = i.AlgorithmStrategyProcessType.GAMES_NEW_INIT, [ 4, (0, g.invokeTaggedLifeCycle)(y.algorithmStrategy.context.configs.ALGORITHM_STRATEGY_GAMES_INIT_CONFIG, "onAlgorithmStrategyGameNewInit") ];

case 1:
return e.sent(), y.algorithmStrategy.context.CONFLICT_DEBUG && A.AlgorithmStrategyConflictRecorder.resetGame(t), 
[ 2 ];
}
});
});
}, t.prototype.preprocess = function(t) {
return o(this, void 0, void 0, function() {
return n(this, function(e) {
switch (e.label) {
case 0:
return y.algorithmStrategy.context.CC_DEBUG && S.AlgorithmStrategyLog.log("========================== 预处理开始 ==========================", S.AlgorithmStrategyLog.PREPROCESS_COLOR, i.AlgorithmStrategyProcessType.PREPROCESS_MUTEX, t), 
[ 4, (0, c.preprocess)(r.flow, t) ];

case 1:
return e.sent(), [ 2 ];
}
});
});
}, t.prototype.sdkRequest = function(t) {
return o(this, void 0, void 0, function() {
return n(this, function(e) {
switch (e.label) {
case 0:
return y.algorithmStrategy.context.CC_DEBUG && S.AlgorithmStrategyLog.log("========================== SDK 开始 ==========================", S.AlgorithmStrategyLog.SDK_COLOR, i.AlgorithmStrategyProcessType.PREPROCESS_SDK, t), 
[ 4, (0, u.sdkRequest)(r.flow, t) ];

case 1:
return e.sent(), [ 4, (0, g.invokeLifeCycle)(y.algorithmStrategy.context.configs.ALGORITHM_STRATEGY_PREPROCESS_COMPLETE_TRAITS_CONFIG, "onAlgorithmStrategyPreprocessComplete", r.flow) ];

case 2:
return e.sent(), [ 2 ];
}
});
});
}, t.prototype.postprocess = function() {
return o(this, void 0, void 0, function() {
return n(this, function(t) {
switch (t.label) {
case 0:
return y.algorithmStrategy.context.CC_DEBUG && S.AlgorithmStrategyLog.log("========================== 后处理开始 ==========================", S.AlgorithmStrategyLog.POSTPROCESS_COLOR, i.AlgorithmStrategyProcessType.POSTPROCESS), 
[ 4, (0, s.postprocess)(r.flow) ];

case 1:
return t.sent(), [ 4, (0, g.invokeLifeCycle)(y.algorithmStrategy.context.configs.ALGORITHM_STRATEGY_POSTPROCESS_COMPLETE_TRAITS_CONFIG, "onAlgorithmStrategyPostprocessComplete", r.flow) ];

case 2:
return t.sent(), [ 2 ];
}
});
});
}, t.prototype.positionAdjust = function() {
y.algorithmStrategy.context.CC_DEBUG && S.AlgorithmStrategyLog.log("========================== 位置调整开始 ==========================", S.AlgorithmStrategyLog.NORMAL_COLOR, i.AlgorithmStrategyProcessType.POSITION_ADJUST), 
(0, h.positionAdjust)(r.flow);
}, t.prototype.colorAdjust = function() {
y.algorithmStrategy.context.CC_DEBUG && S.AlgorithmStrategyLog.log("========================== 颜色调整开始 ==========================", S.AlgorithmStrategyLog.NORMAL_COLOR, i.AlgorithmStrategyProcessType.COLOR_ADJUST), 
(0, d.colorAdjust)(r.flow);
}, t.prototype.collectionAdjust = function() {
y.algorithmStrategy.context.CC_DEBUG && S.AlgorithmStrategyLog.log("========================== 收集物调整开始 ==========================", S.AlgorithmStrategyLog.NORMAL_COLOR, i.AlgorithmStrategyProcessType.COLLECTION_ADJUST), 
(0, f.collectionAdjust)(r.flow);
}, t.prototype.complete = function() {
y.algorithmStrategy.context.CONFLICT_DEBUG && A.AlgorithmStrategyConflictRecorder.finalizeRoundResult(r.flow);
}, t;
}();
r.algorithmStrategyPipeline = new T();
},
5492: function(t, r, e) {
var o = this && this.__decorate || function(t, r, e, o) {
var n, a = arguments.length, i = a < 3 ? r : null === o ? o = Object.getOwnPropertyDescriptor(r, e) : o;
if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) i = Reflect.decorate(t, r, e, o); else for (var l = t.length - 1; l >= 0; l--) (n = t[l]) && (i = (a < 3 ? n(i) : a > 3 ? n(r, e, i) : n(r, e)) || i);
return a > 3 && i && Object.defineProperty(r, e, i), i;
};
Object.defineProperty(r, "__esModule", {
value: !0
}), r.AlgorithmStrategyAlgorithmListPatch = void 0;
var n, a = e(261), i = e(4246), l = e(7594), c = function() {
function t() {}
return t.patch = function(t) {
if (function(t, r) {
return void 0 !== t && t === r && t.length === r.length && JSON.stringify(t) === JSON.stringify(r);
}(n, t)) return !1;
for (var r = 0; r < t.length; r++) {
var e = t[r];
e.category = (0, i.getCategoryForAlgorithm)(e.algorithmId), e.algorithmListSource = "normal";
}
return n = t, !0;
}, Object.defineProperty(t, "curAlgorithmList", {
get: function() {
return a.AlgorithmStrategyAlgorithmListOperator.curAlgorithmList;
},
enumerable: !1,
configurable: !0
}), Object.defineProperty(t, "preprocessAlgorithmList", {
get: function() {
return a._algorithmList.pre;
},
enumerable: !1,
configurable: !0
}), o([ (0, l.patch)({
patchKey: "algorithmList",
getStored: function() {
return n;
}
}) ], t, "patch", null), t;
}();
r.AlgorithmStrategyAlgorithmListPatch = c;
},
5507: function(t, r, e) {
var o = this && this.__assign || function() {
return (o = Object.assign || function(t) {
for (var r, e = 1, o = arguments.length; e < o; e++) for (var n in r = arguments[e]) Object.prototype.hasOwnProperty.call(r, n) && (t[n] = r[n]);
return t;
}).apply(this, arguments);
}, n = this && this.__values || function(t) {
var r = "function" == typeof Symbol && Symbol.iterator, e = r && t[r], o = 0;
if (e) return e.call(t);
if (t && "number" == typeof t.length) return {
next: function() {
return t && o >= t.length && (t = void 0), {
value: t && t[o++],
done: !t
};
}
};
throw new TypeError(r ? "Object is not iterable." : "Symbol.iterator is not defined.");
}, a = this && this.__read || function(t, r) {
var e = "function" == typeof Symbol && t[Symbol.iterator];
if (!e) return t;
var o, n, a = e.call(t), i = [];
try {
for (;(void 0 === r || r-- > 0) && !(o = a.next()).done; ) i.push(o.value);
} catch (t) {
n = {
error: t
};
} finally {
try {
o && !o.done && (e = a.return) && e.call(a);
} finally {
if (n) throw n.error;
}
}
return i;
}, i = this && this.__spreadArray || function(t, r, e) {
if (e || 2 === arguments.length) for (var o, n = 0, a = r.length; n < a; n++) !o && n in r || (o || (o = Array.prototype.slice.call(r, 0, n)), 
o[n] = r[n]);
return t.concat(o || Array.prototype.slice.call(r));
};
Object.defineProperty(r, "__esModule", {
value: !0
}), r.recordAlgorithmListActionResult = function(t) {
var r = t.actionType, e = t.traitSource, a = t.args, i = t.beforeList, l = t.afterList, d = t.success, y = t.process, p = t.algorithmListSource;
if (e) {
var S = g.gameStats.nextOperationOrderValue(), m = (0, u.createAlgorithmListEventSnapshots)(t, S);
(function(t, r) {
t.traitSource && h.roundStats.actionRecords.push({
process: t.process,
actionType: t.actionType,
traitSource: t.traitSource,
beforeList: t.beforeList,
afterList: t.afterList,
operationOrder: r
});
})(t, S), d ? ("fallback" !== p && "replaceAll" === r && function(t, r, e, a, i, l) {
var u, g, h = new Set(i.map(function(t) {
return t.traitSource;
}).filter(function(t) {
return !!t && t !== e;
})), f = function(n) {
(0, s.addEvent)(o({
type: c.AlgorithmStrategyConflictType.ALGORITHM_OPERATOR_REPLACE_ALL_SUCCESS,
severity: "conflict",
process: t,
triggerTrait: e,
affectedTrait: n,
actionType: r,
args: a,
algorithmIds: i.filter(function(t) {
return t.traitSource === n;
}).map(function(t) {
return t.algorithmId;
}),
reason: "后置特性 replaceAll 覆盖了前置特性的算法列表项"
}, l));
};
try {
for (var d = n(h), y = d.next(); !y.done; y = d.next()) f(y.value);
} catch (t) {
u = {
error: t
};
} finally {
try {
y && !y.done && (g = d.return) && g.call(d);
} finally {
if (u) throw u.error;
}
}
}(y, r, e, a, i, m), "fallback" !== p && (function(t, r, e, o, a, i) {
var l, c, s, g;
if ("replace" === t || "replaceCategory" === t) {
var f = function(t, r, e, o) {
var n = new Set();
if ("replace" === t) {
var a = new Set((0, u.extractAlgorithmIds)(null == r ? void 0 : r[0]));
e.forEach(function(t) {
a.has(t.algorithmId) && t.traitSource && t.traitSource !== o && n.add(t.traitSource);
});
} else if ("replaceCategory" === t) {
var i = null == r ? void 0 : r[0];
e.forEach(function(t) {
t.category === i && t.traitSource && t.traitSource !== o && n.add(t.traitSource);
});
}
return n;
}(t, e, o, r);
if (0 !== f.size) {
try {
for (var d = n((0, u.extractAlgorithmIds)(null == e ? void 0 : e[0])), y = d.next(); !y.done; y = d.next()) {
var p = y.value;
h.roundStats.replacedSourceOwner.set(p, r);
}
} catch (t) {
l = {
error: t
};
} finally {
try {
y && !y.done && (c = d.return) && c.call(d);
} finally {
if (l) throw l.error;
}
}
try {
for (var S = n(a), m = S.next(); !m.done; m = S.next()) {
var A = m.value;
if (A.traitSource === r) {
var v = {
affectedTraits: new Set(f),
affectedAlgorithmIds: (0, u.extractAlgorithmIds)(null == e ? void 0 : e[0]),
actionType: t,
args: e,
snapshots: i
};
h.roundStats.pendingLineage.set((0, u.createItemKey)("preprocess", A), v), h.roundStats.pendingLineage.set((0, 
u.createItemKey)("postprocess", A), v);
}
}
} catch (t) {
s = {
error: t
};
} finally {
try {
m && !m.done && (g = S.return) && g.call(S);
} finally {
if (s) throw s.error;
}
}
}
}
}(r, e, a, i, l, m), function(t, r, e, o, a, i) {
var l, c;
if (f.PRODUCE_ITEM_TYPES.has(r)) try {
for (var s = n(a), g = s.next(); !g.done; g = s.next()) {
var d = g.value;
if (d.traitSource === e && "normal" === d.algorithmListSource) {
var y = (0, u.createItemKey)(t, d);
h.roundStats.pendingConsumeItems.set(y, {
process: t,
key: y,
item: d,
actionType: r,
args: o,
snapshots: i
});
}
}
} catch (t) {
l = {
error: t
};
} finally {
try {
g && !g.done && (c = s.return) && c.call(s);
} finally {
if (l) throw l.error;
}
}
}(y, r, e, a, l, m)), function(t, r, e, n, a, i, l, g, h, f) {
var d = !(0, u.isSameAlgorithmList)(i, l), y = !(0, u.isSameAlgorithmList)(g, h), p = !(0, 
u.isSameAlgorithmList)(f.beforeAlgorithmPriorityList, f.afterAlgorithmPriorityList), S = !(0, 
u.isSameAlgorithmList)(f.beforeAlgorithmPostList, f.afterAlgorithmPostList);
(d || y || p || S) && (0, s.addEvent)(o({
type: c.AlgorithmStrategyConflictType.ALGORITHM_LIST_CHANGED,
severity: "info",
process: t,
algorithmListSource: a,
triggerTrait: e,
actionType: r,
args: n,
reason: "算法列表操作成功，前后列表发生变化"
}, f));
}(y, r, e, a, p, i, l, t.beforeFallbackList, t.afterFallbackList, m)) : function(t, r, e, n, a, i) {
var l;
if (f.OPERATION_TARGET_FAILURE_TYPES.has(e)) {
var g = (0, u.extractAlgorithmIds)(null == a ? void 0 : a[0]), d = null !== (l = g.map(function(t) {
return h.roundStats.replacedSourceOwner.get(t);
}).find(Boolean)) && void 0 !== l ? l : n;
(0, s.addEvent)(o({
type: c.AlgorithmStrategyConflictType.ALGORITHM_OPERATOR_UNSUCCESS,
severity: "conflict",
process: t,
algorithmListSource: r,
triggerTrait: d,
affectedTrait: n,
actionType: e,
args: a,
algorithmIds: g,
reason: "算法列表操作目标不存在或无法命中"
}, i));
}
}(y, p, r, e, a, m);
}
}, r.recordPartialActionSuccess = function(t) {
l.algorithmStrategyRobotAlgorithmStats.recordPartialActionSuccess(o({
gameIndex: g.gameStats.gameIndex,
roundIndex: h.roundStats.roundIndex
}, t));
}, r.recordLineageConflict = function(t, r, e) {
var a, i, l = h.roundStats.pendingLineage.get(e);
if (l && 0 !== l.affectedTraits.size && r.traitSource) {
try {
for (var u = n(l.affectedTraits), g = u.next(); !g.done; g = u.next()) {
var f = g.value;
(0, s.addEvent)(o({
type: c.AlgorithmStrategyConflictType.ALGORITHM_OPERATOR_SAME_SOURCE_SDK_FAIL,
severity: "conflict",
process: t,
triggerTrait: r.traitSource,
affectedTrait: f,
actionType: l.actionType,
args: l.args,
algorithmId: r.algorithmId,
affectedAlgorithmIds: l.affectedAlgorithmIds,
reason: "多个特性影响同一算法链路，且最终算法被 SDK 请求"
}, l.snapshots));
}
} catch (t) {
a = {
error: t
};
} finally {
try {
g && !g.done && (i = u.return) && i.call(u);
} finally {
if (a) throw a.error;
}
}
h.roundStats.pendingLineage.delete(e);
}
}, r.findRemovedByAction = function(t, r) {
return i([], a(h.roundStats.actionRecords), !1).filter(function(t) {
return t.operationOrder > r;
}).filter(function(r) {
return d(r.beforeList, t);
}).filter(function(r) {
return !d(r.afterList, t);
}).sort(function(t, r) {
return t.operationOrder - r.operationOrder;
})[0];
};
var l = e(3003), c = e(4727), s = e(4501), u = e(7193), g = e(2574), h = e(2940), f = e(3366);
function d(t, r) {
return t.some(function(t) {
return t.algorithmId === r;
});
}
},
5531: (t, r) => {
Object.defineProperty(r, "__esModule", {
value: !0
}), r.className = function(t) {
return function(r) {
r.prototype.__classname__ || (r.prototype.__classname__ = t);
};
};
},
5600: (t, r) => {
Object.defineProperty(r, "__esModule", {
value: !0
}), r.sessionStats = r.AlgorithmStrategySessionStats = void 0;
var e = function() {
this.allEvents = [], this.allTraitCallCount = new Map(), this.traitTriggerCount = new Map();
};
r.AlgorithmStrategySessionStats = e, r.sessionStats = new e();
},
5706: function(t, r, e) {
var o = this && this.__decorate || function(t, r, e, o) {
var n, a = arguments.length, i = a < 3 ? r : null === o ? o = Object.getOwnPropertyDescriptor(r, e) : o;
if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) i = Reflect.decorate(t, r, e, o); else for (var l = t.length - 1; l >= 0; l--) (n = t[l]) && (i = (a < 3 ? n(i) : a > 3 ? n(r, e, i) : n(r, e)) || i);
return a > 3 && i && Object.defineProperty(r, e, i), i;
};
Object.defineProperty(r, "__esModule", {
value: !0
}), r.AlgorithmStrategyAlgorithmIdModifyPatch = void 0;
var n, a = e(7594), i = function() {
function t() {}
return t.patch = function(t, r) {
if (t.algorithmId !== r) return n = t.algorithmId = r, !0;
}, o([ (0, a.patch)({
patchKey: "algorithmIdModify",
getStored: function() {
return n;
}
}) ], t, "patch", null), t;
}();
r.AlgorithmStrategyAlgorithmIdModifyPatch = i;
},
5800: (t, r) => {
Object.defineProperty(r, "__esModule", {
value: !0
}), r.algorithmStrategy = void 0;
var e = function() {
function t() {}
return Object.defineProperty(t.prototype, "context", {
get: function() {
return this._context;
},
enumerable: !1,
configurable: !0
}), t.prototype.init = function(t) {
this._context = t;
}, t.prototype.updateContext = function(t) {
this._context.timeout.preprocess_normalAlgorithm_sdk = t.timeout.preprocess_normalAlgorithm_sdk, 
this._context.preprocess_sdk_strategy = t.preprocess_sdk_strategy;
}, t;
}();
r.algorithmStrategy = new e();
},
5815: function(t, r) {
var e = this && this.__assign || function() {
return (e = Object.assign || function(t) {
for (var r, e = 1, o = arguments.length; e < o; e++) for (var n in r = arguments[e]) Object.prototype.hasOwnProperty.call(r, n) && (t[n] = r[n]);
return t;
}).apply(this, arguments);
}, o = this && this.__rest || function(t, r) {
var e = {};
for (var o in t) Object.prototype.hasOwnProperty.call(t, o) && r.indexOf(o) < 0 && (e[o] = t[o]);
if (null != t && "function" == typeof Object.getOwnPropertySymbols) {
var n = 0;
for (o = Object.getOwnPropertySymbols(t); n < o.length; n++) r.indexOf(o[n]) < 0 && Object.prototype.propertyIsEnumerable.call(t, o[n]) && (e[o[n]] = t[o[n]]);
}
return e;
}, n = this && this.__read || function(t, r) {
var e = "function" == typeof Symbol && t[Symbol.iterator];
if (!e) return t;
var o, n, a = e.call(t), i = [];
try {
for (;(void 0 === r || r-- > 0) && !(o = a.next()).done; ) i.push(o.value);
} catch (t) {
n = {
error: t
};
} finally {
try {
o && !o.done && (e = a.return) && e.call(a);
} finally {
if (n) throw n.error;
}
}
return i;
}, a = this && this.__spreadArray || function(t, r, e) {
if (e || 2 === arguments.length) for (var o, n = 0, a = r.length; n < a; n++) !o && n in r || (o || (o = Array.prototype.slice.call(r, 0, n)), 
o[n] = r[n]);
return t.concat(o || Array.prototype.slice.call(r));
};
Object.defineProperty(r, "__esModule", {
value: !0
}), r.AlgorithmStrategyLog = void 0, r.formatTraitNameWithDescription = function(t) {
var r, e, o;
return "".concat(t).concat(null !== (o = null === (e = null === (r = window.traitConfigDebugInfo) || void 0 === r ? void 0 : r.getTraitClassNameDes) || void 0 === e ? void 0 : e.call(r, t)) && void 0 !== o ? o : "");
};
var i = "[算法策略]";
function l(t) {
return void 0 === t ? void 0 : a([], n(t), !1);
}
function c(t) {
if (null == t) return t;
if ("object" == typeof t) try {
return JSON.stringify(t);
} catch (r) {
return String(t);
}
return t;
}
var s = function() {
function t() {}
return t.log = function() {
for (var t = [], r = 0; r < arguments.length; r++) t[r] = arguments[r];
if (t.length >= 2 && "string" == typeof t[0] && "string" == typeof t[1] && t[1].includes("color:")) {
var e = n(t);
e[0], e[1], e.slice(2);
}
}, t.info = function() {
for (var t = [], r = 0; r < arguments.length; r++) t[r] = arguments[r];
}, t.warn = function() {
for (var t = [], r = 0; r < arguments.length; r++) t[r] = arguments[r];
}, t.error = function() {
for (var t = [], r = 0; r < arguments.length; r++) t[r] = arguments[r];
}, t.debug = function() {
for (var t = [], r = 0; r < arguments.length; r++) t[r] = arguments[r];
}, t.table = function() {
for (var t = [], r = 0; r < arguments.length; r++) t[r] = arguments[r];
var s = n(t, 2), u = s[0], g = s[1], h = function(t) {
if (Array.isArray(t)) return t.map(function(t) {
if (null === t || "object" != typeof t || Array.isArray(t)) return t;
var r = t;
return Object.fromEntries(Object.entries(r).map(function(t) {
var r = n(t, 2);
return [ r[0], c(r[1]) ];
}));
});
if (null !== t && "object" == typeof t && !Array.isArray(t)) {
var r = t;
return Object.fromEntries(Object.entries(r).map(function(t) {
var r = n(t, 2);
return [ r[0], c(r[1]) ];
}));
}
return t;
}(u), f = function(t, r) {
var c;
if (Array.isArray(t)) {
if (0 === t.length) return {
data: t,
properties: l(r)
};
var s = t.map(function(t) {
var r, n, a;
if (null === t || "object" != typeof t || Array.isArray(t)) return (r = {})["".concat(i, " #")] = t, 
r;
var l = t, c = Object.keys(l);
if (0 === c.length) return (n = {})[i] = "", n;
var s = c[0], u = l, g = s, h = u[g], f = o(u, [ "symbol" == typeof g ? g : g + "" ]);
return e(((a = {})["".concat(i, " ").concat(s)] = h, a), f);
});
if (null == (d = void 0 !== r ? a([], n(r), !1) : void 0) ? void 0 : d.length) {
var u = t[0];
if (null !== u && "object" == typeof u && !Array.isArray(u)) {
var g = Object.keys(u)[0];
void 0 !== g && d[0] === g && (d = a([ "".concat(i, " ").concat(g) ], n(d.slice(1)), !1));
}
}
return {
data: s,
properties: d
};
}
if (null !== t && "object" == typeof t) {
var h = t, f = Object.keys(h);
if (0 === f.length) return {
data: t,
properties: l(r)
};
var d, y = f[0], p = h, S = y, m = p[S], A = o(p, [ "symbol" == typeof S ? S : S + "" ]), v = e(((c = {})["".concat(i, " ").concat(y)] = m, 
c), A);
return (null == (d = void 0 !== r ? a([], n(r), !1) : void 0) ? void 0 : d.length) && d[0] === y && (d = a([ "".concat(i, " ").concat(y) ], n(d.slice(1)), !1)), 
{
data: v,
properties: d
};
}
return {
data: t,
properties: l(r)
};
}(h, g), d = f.data;
f.properties;
if ("function" == typeof console.table) try {
return;
} catch (t) {}
null != d && "object" == typeof d ? JSON.stringify(d, null, 2) : String(d);
}, t.ROUND_COLOR = "color:#3E2723;background:#00ff00;font-weight:600;padding:2px 8px;border-radius:2px;border:1px solid #C62828;", 
t.PATCH_COLOR = "color:#ffffff;background:#0000ff;font-weight:600;padding:2px 8px;border-radius:2px;border:1px solid #C62828;", 
t.NORMAL_COLOR = "color:#3E2723;background:#FFCDD2;font-weight:600;padding:2px 8px;border-radius:2px;border:1px solid #C62828;", 
t.FALLBACK_COLOR = "color:#BF360C;background:#EEEEEE;font-weight:600;padding:2px 8px;border-radius:2px;border:1px solid #E65100;", 
t.PREPROCESS_COLOR = "color:#004D40;background:#B2DFDB;font-weight:600;padding:2px 8px;border-radius:2px;border:1px solid #00897B;", 
t.PREPROCESS_FAIL_COLOR = "color:#004D40;background:#80CBC4;font-weight:600;padding:2px 8px;border-radius:2px;border:1px solid #00695C;", 
t.POSTPROCESS_COLOR = "color:#1A237E;background:#C5CAE9;font-weight:600;padding:2px 8px;border-radius:2px;border:1px solid #3949AB;", 
t.POSTPROCESS_FAIL_COLOR = "color:#1A237E;background:#C5CAE9;font-weight:600;padding:2px 8px;border-radius:2px;border:1px solid #3949AB;", 
t.SDK_COLOR = "color:#616161;background:#F5F5F5;padding:0 4px;border-radius:2px;", 
t.SDK_FAIL_COLOR = "color:#616161;background:#F5F5F5;padding:0 4px;border-radius:2px;", 
t;
}();
r.AlgorithmStrategyLog = s, window.AlgorithmStrategyLog = s;
},
5931: (t, r, e) => {
Object.defineProperty(r, "__esModule", {
value: !0
}), r.algorithmStrategyRobot = void 0;
var o = e(3003);
r.algorithmStrategyRobot = {
algorithmStats: o.algorithmStrategyRobotAlgorithmStats
};
},
6024: function(t, r, e) {
var o = this && this.__values || function(t) {
var r = "function" == typeof Symbol && Symbol.iterator, e = r && t[r], o = 0;
if (e) return e.call(t);
if (t && "number" == typeof t.length) return {
next: function() {
return t && o >= t.length && (t = void 0), {
value: t && t[o++],
done: !t
};
}
};
throw new TypeError(r ? "Object is not iterable." : "Symbol.iterator is not defined.");
}, n = this && this.__read || function(t, r) {
var e = "function" == typeof Symbol && t[Symbol.iterator];
if (!e) return t;
var o, n, a = e.call(t), i = [];
try {
for (;(void 0 === r || r-- > 0) && !(o = a.next()).done; ) i.push(o.value);
} catch (t) {
n = {
error: t
};
} finally {
try {
o && !o.done && (e = a.return) && e.call(a);
} finally {
if (n) throw n.error;
}
}
return i;
}, a = this && this.__spreadArray || function(t, r, e) {
if (e || 2 === arguments.length) for (var o, n = 0, a = r.length; n < a; n++) !o && n in r || (o || (o = Array.prototype.slice.call(r, 0, n)), 
o[n] = r[n]);
return t.concat(o || Array.prototype.slice.call(r));
};
Object.defineProperty(r, "__esModule", {
value: !0
}), r.colorAdjust = function(t) {
var r, e, g, h, f, d;
t.process = s.AlgorithmStrategyProcessType.COLOR_ADJUST, delete t.returnState, delete t.disabledTraits;
var y, p = [ 1, 4, 2 ], S = i.algorithmStrategy.context.CONFLICT_DEBUG ? "class" === i.algorithmStrategy.context.gameMode ? storage.getItem("classColorLists", p) : storage.getItem("chapterColorLists", p) : void 0, m = [], A = p;
try {
for (var v = o(i.algorithmStrategy.context.configs.ALGORITHM_STRATEGY_COLOR_ADJUST_TRAITS_CONFIG), b = v.next(); !b.done; b = v.next()) {
var _ = b.value;
if (t.returnState) break;
if (!(null === (f = t.disabledTraits) || void 0 === f ? void 0 : f.includes(_))) {
var T = TRAIT(_);
if ((null == T ? void 0 : T.onActiveCondition) && (null == T ? void 0 : T.active) && u(T)) {
var C = T.onAlgorithmStrategyColorAdjust(t);
if (!C) continue;
if (y = _, A = C.data, i.algorithmStrategy.context.CONFLICT_DEBUG && (l.AlgorithmStrategyConflictRecorder.recordTraitTrigger(y), 
m.push({
traitSource: y,
data: C.data,
returnState: C.returnState,
disableTraits: null == C.disableTraits ? void 0 : a([], n(C.disableTraits), !1)
})), null === (d = C.disableTraits) || void 0 === d ? void 0 : d.length) {
Array.isArray(t.disabledTraits) || (t.disabledTraits = []);
try {
for (var O = (g = void 0, o(C.disableTraits)), P = O.next(); !P.done; P = O.next()) {
var R = P.value;
t.disabledTraits.includes(R) || t.disabledTraits.push(R);
}
} catch (t) {
g = {
error: t
};
} finally {
try {
P && !P.done && (h = O.return) && h.call(O);
} finally {
if (g) throw g.error;
}
}
}
C.returnState && (t.returnState = !0), i.algorithmStrategy.context.CC_DEBUG && c.AlgorithmStrategyLog.log("特性：".concat(_, " 颜色调整："), c.AlgorithmStrategyLog.NORMAL_COLOR, C);
}
}
}
} catch (t) {
r = {
error: t
};
} finally {
try {
b && !b.done && (e = v.return) && e.call(v);
} finally {
if (r) throw r.error;
}
}
return A && ("class" === i.algorithmStrategy.context.gameMode ? storage.setItem("classColorLists", A) : storage.setItem("chapterColorLists", A), 
t.process = s.AlgorithmStrategyProcessType.COLOR_ADJUST_SUCCESS), i.algorithmStrategy.context.CONFLICT_DEBUG && l.AlgorithmStrategyConflictRecorder.recordAdjustResult({
process: "colorAdjust",
success: t.process === s.AlgorithmStrategyProcessType.COLOR_ADJUST_SUCCESS,
traitSource: y,
traitResults: m,
beforeColorList: S,
colorList: A,
reason: "颜色调整阶段记录颜色列表变化"
}), delete t.returnState, delete t.disabledTraits, t;
};
var i = e(5800), l = e(8011), c = e(5815), s = e(7880);
function u(t) {
return t && "function" == typeof t.onAlgorithmStrategyColorAdjust;
}
},
6074: function(t, r, e) {
var o = this && this.__awaiter || function(t, r, e, o) {
return new (e || (e = Promise))(function(n, a) {
function i(t) {
try {
c(o.next(t));
} catch (t) {
a(t);
}
}
function l(t) {
try {
c(o.throw(t));
} catch (t) {
a(t);
}
}
function c(t) {
var r;
t.done ? n(t.value) : (r = t.value, r instanceof e ? r : new e(function(t) {
t(r);
})).then(i, l);
}
c((o = o.apply(t, r || [])).next());
});
}, n = this && this.__generator || function(t, r) {
var e, o, n, a = {
label: 0,
sent: function() {
if (1 & n[0]) throw n[1];
return n[1];
},
trys: [],
ops: []
}, i = Object.create(("function" == typeof Iterator ? Iterator : Object).prototype);
return i.next = l(0), i.throw = l(1), i.return = l(2), "function" == typeof Symbol && (i[Symbol.iterator] = function() {
return this;
}), i;
function l(l) {
return function(c) {
return function(l) {
if (e) throw new TypeError("Generator is already executing.");
for (;i && (i = 0, l[0] && (a = 0)), a; ) try {
if (e = 1, o && (n = 2 & l[0] ? o.return : l[0] ? o.throw || ((n = o.return) && n.call(o), 
0) : o.next) && !(n = n.call(o, l[1])).done) return n;
switch (o = 0, n && (l = [ 2 & l[0], n.value ]), l[0]) {
case 0:
case 1:
n = l;
break;

case 4:
return a.label++, {
value: l[1],
done: !1
};

case 5:
a.label++, o = l[1], l = [ 0 ];
continue;

case 7:
l = a.ops.pop(), a.trys.pop();
continue;

default:
if (!((n = (n = a.trys).length > 0 && n[n.length - 1]) || 6 !== l[0] && 2 !== l[0])) {
a = 0;
continue;
}
if (3 === l[0] && (!n || l[1] > n[0] && l[1] < n[3])) {
a.label = l[1];
break;
}
if (6 === l[0] && a.label < n[1]) {
a.label = n[1], n = l;
break;
}
if (n && a.label < n[2]) {
a.label = n[2], a.ops.push(l);
break;
}
n[2] && a.ops.pop(), a.trys.pop();
continue;
}
l = r.call(t, a);
} catch (t) {
l = [ 6, t ], o = 0;
} finally {
e = n = 0;
}
if (5 & l[0]) throw l[1];
return {
value: l[0] ? l[1] : void 0,
done: !0
};
}([ l, c ]);
};
}
}, a = this && this.__read || function(t, r) {
var e = "function" == typeof Symbol && t[Symbol.iterator];
if (!e) return t;
var o, n, a = e.call(t), i = [];
try {
for (;(void 0 === r || r-- > 0) && !(o = a.next()).done; ) i.push(o.value);
} catch (t) {
n = {
error: t
};
} finally {
try {
o && !o.done && (e = a.return) && e.call(a);
} finally {
if (n) throw n.error;
}
}
return i;
}, i = this && this.__values || function(t) {
var r = "function" == typeof Symbol && Symbol.iterator, e = r && t[r], o = 0;
if (e) return e.call(t);
if (t && "number" == typeof t.length) return {
next: function() {
return t && o >= t.length && (t = void 0), {
value: t && t[o++],
done: !t
};
}
};
throw new TypeError(r ? "Object is not iterable." : "Symbol.iterator is not defined.");
}, l = this && this.__spreadArray || function(t, r, e) {
if (e || 2 === arguments.length) for (var o, n = 0, a = r.length; n < a; n++) !o && n in r || (o || (o = Array.prototype.slice.call(r, 0, n)), 
o[n] = r[n]);
return t.concat(o || Array.prototype.slice.call(r));
};
Object.defineProperty(r, "__esModule", {
value: !0
}), r.resolveUnmatchedRuleFlows = function(t, r, e, o) {
var n, l, s, u, g, h = null == o ? void 0 : o.tag;
g = "preprocess" === t ? h && h in r ? r[h] : r.mutex : r;
var f, d = new Set(null != e ? e : []);
if ("mutex" === h && g && "object" == typeof g && !Array.isArray(g)) {
var y = Object.entries(g);
if (y.length > 0 && y.every(function(t) {
var r = a(t, 2)[1];
return null != r && "object" == typeof r && !Array.isArray(r);
})) {
var p = {};
try {
for (var S = i(y), m = S.next(); !m.done; m = S.next()) {
var A = a(m.value, 2), v = A[0], b = A[1];
p[v] = Object.keys(b).filter(function(t) {
return "else" !== t && !d.has(t);
}).sort();
}
} catch (t) {
n = {
error: t
};
} finally {
try {
m && !m.done && (l = S.return) && l.call(S);
} finally {
if (n) throw n.error;
}
}
return p;
}
}
return (f = "mutex" === h && null != (null == o ? void 0 : o.source) && g && "object" == typeof g && !Array.isArray(g) ? g[v = null !== (u = c.algorithmStrategy.context.algorithmSourceType[o.source]) && void 0 !== u ? u : o.source] : Array.isArray(g) ? void 0 : g) ? ((s = {})[null != h ? h : "default"] = Object.keys(f).filter(function(t) {
return "else" !== t && !d.has(t);
}).sort(), s) : {};
}, r.resolvePendingActions = function(t, r, e, o) {
var n, s, u;
if (Array.isArray(r)) return r;
var g, h, f = null == o ? void 0 : o.tag;
if (h = "preprocess" === t ? f && f in r ? r[f] : r.mutex : r, "mutex" === f && null != (null == o ? void 0 : o.source) && h && "object" == typeof h && !Array.isArray(g)) {
var d = null !== (u = c.algorithmStrategy.context.algorithmSourceType[o.source]) && void 0 !== u ? u : o.source;
h[d] && (g = h[d]);
} else g = h;
var y = [];
if (g) if (e.length > 0) try {
for (var p = i(e), S = p.next(); !S.done; S = p.next()) {
var m = g[S.value];
m && y.push.apply(y, l([], a(m), !1));
}
} catch (t) {
n = {
error: t
};
} finally {
try {
S && !S.done && (s = p.return) && s.call(p);
} finally {
if (n) throw n.error;
}
} else {
var A = g.else;
A && y.push.apply(y, l([], a(A), !1));
}
return y;
}, r.executeActions = function(t, r, e, a, l, c, s) {
return o(this, void 0, Promise, function() {
var e, o, u, g, h, f, d, y, p;
return n(this, function(n) {
switch (n.label) {
case 0:
e = [], n.label = 1;

case 1:
n.trys.push([ 1, 6, 7, 8 ]), o = i(r), u = o.next(), n.label = 2;

case 2:
return u.done ? [ 3, 5 ] : (g = u.value, f = (h = e).push, [ 4, m(t, g, a, l, c, s) ]);

case 3:
f.apply(h, [ n.sent() ]), n.label = 4;

case 4:
return u = o.next(), [ 3, 2 ];

case 5:
return [ 3, 8 ];

case 6:
return d = n.sent(), y = {
error: d
}, [ 3, 8 ];

case 7:
try {
u && !u.done && (p = o.return) && p.call(o);
} finally {
if (y) throw y.error;
}
return [ 7 ];

case 8:
return [ 2, e ];
}
});
});
};
var c = e(5800), s = e(5815), u = e(9351), g = e(9423), h = e(261), f = e(8742), d = e(8011), y = e(3325), p = e(8281), S = e(2436);
function m(t, r, e, m, A, v) {
return o(this, void 0, Promise, function() {
var o, b, _, T, C, O, P, R, L, E, I, x, k, D, w, N, j, K, B, M, F, G, U, q, H, Y, J, W;
return n(this, function(n) {
switch (n.label) {
case 0:
if (!(o = f.ALGORITHM_STRATEGY_OPERATOR_MAP[r.operator])) return c.algorithmStrategy.context.CC_DEBUG && s.AlgorithmStrategyLog.error("特性：".concat(null == e ? void 0 : e.traitName).concat(window.traitConfigDebugInfo.getTraitClassNameDes(null == e ? void 0 : e.traitName), "调用操作器不存在")), 
[ 2, {
status: !1,
operator: r.operator,
actionType: r.type
} ];
if ("function" != typeof (b = o[r.type])) return [ 3, 26 ];
switch (c.algorithmStrategy.context.CONFLICT_DEBUG && d.AlgorithmStrategyConflictRecorder.recordTraitTrigger(null == e ? void 0 : e.traitName), 
_ = (0, S.shallowMergePreservingAccessors)(v, A), null != (T = null == e ? void 0 : e.props) && "object" == typeof T && (_[rulesEngine.RULE_TRAIT_PROPS_CONTEXT_KEY] = T), 
void 0 !== r.dynamicSource && null !== r.dynamicSource && (_.dynamicSource = r.dynamicSource), 
r.operator) {
case "AlgorithmStrategyAlgorithmPriorityListOperator":
_.algorithmListSource = "priority";
break;

case "AlgorithmStrategyAlgorithmListOperator":
_.algorithmListSource = "normal";
break;

case "AlgorithmStrategyAlgorithmPostListPatchOperator":
_.algorithmListSource = "post";
break;

case "AlgorithmStrategyAlgorithmFallbackListOperator":
_.algorithmListSource = "fallback";
}
r.router && (_.router = r.router), b.options = {
context: _,
flow: m
}, C = [], n.label = 1;

case 1:
n.trys.push([ 1, 6, 7, 8 ]), O = i(null !== (F = r.args) && void 0 !== F ? F : []), 
P = O.next(), n.label = 2;

case 2:
return P.done ? [ 3, 5 ] : (R = P.value, E = (L = C).push, [ 4, rulesEngine.resolveValueAsync(_, R) ]);

case 3:
E.apply(L, [ n.sent() ]), n.label = 4;

case 4:
return P = O.next(), [ 3, 2 ];

case 5:
return [ 3, 8 ];

case 6:
return I = n.sent(), B = {
error: I
}, [ 3, 8 ];

case 7:
try {
P && !P.done && (M = O.return) && M.call(O);
} finally {
if (B) throw B.error;
}
return [ 7 ];

case 8:
return x = c.algorithmStrategy.context.CONFLICT_DEBUG && ("AlgorithmStrategyAlgorithmListOperator" === r.operator || "AlgorithmStrategyAlgorithmFallbackListOperator" === r.operator || "AlgorithmStrategyAlgorithmPriorityListOperator" === r.operator || "AlgorithmStrategyAlgorithmPostListPatchOperator" === r.operator), 
k = x ? d.AlgorithmStrategyConflictRecorder.createListSnapshot(h.AlgorithmStrategyAlgorithmListOperator.algorithmList) : [], 
D = x ? d.AlgorithmStrategyConflictRecorder.createListSnapshot(g.AlgorithmStrategyAlgorithmFallbackListOperator.algorithmFallbackList) : [], 
w = x ? d.AlgorithmStrategyConflictRecorder.createListSnapshot(y.AlgorithmStrategyAlgorithmPriorityListOperator.algorithmPriorityList) : [], 
N = x ? d.AlgorithmStrategyConflictRecorder.createListSnapshot(p.AlgorithmStrategyAlgorithmPostListPatchOperator.algorithmPostList) : [], 
j = c.algorithmStrategy.context.CC_DEBUG ? function() {
switch (r.operator) {
case "AlgorithmStrategyAlgorithmPriorityListOperator":
return l([], a(y.AlgorithmStrategyAlgorithmPriorityListOperator.algorithmPriorityList), !1);

case "AlgorithmStrategyAlgorithmListOperator":
return l([], a(h.AlgorithmStrategyAlgorithmListOperator.algorithmList), !1);

case "AlgorithmStrategyAlgorithmPostListPatchOperator":
return l([], a(p.AlgorithmStrategyAlgorithmPostListPatchOperator.algorithmPostList), !1);

case "AlgorithmStrategyAlgorithmFallbackListOperator":
return l([], a(g.AlgorithmStrategyAlgorithmFallbackListOperator.algorithmFallbackList), !1);

default:
return;
}
}() : [], [ 4, b.apply(o, C) ];

case 9:
if (K = n.sent(), x && d.AlgorithmStrategyConflictRecorder.recordAlgorithmListActionResult({
success: K,
process: t,
algorithmListSource: _.algorithmListSource,
actionType: r.type,
traitSource: _.traitSource,
args: C,
beforePriorityList: w,
afterPriorityList: d.AlgorithmStrategyConflictRecorder.createListSnapshot(y.AlgorithmStrategyAlgorithmPriorityListOperator.algorithmPriorityList),
beforeList: k,
afterList: d.AlgorithmStrategyConflictRecorder.createListSnapshot(h.AlgorithmStrategyAlgorithmListOperator.algorithmList),
beforePostList: N,
afterPostList: d.AlgorithmStrategyConflictRecorder.createListSnapshot(p.AlgorithmStrategyAlgorithmPostListPatchOperator.algorithmPostList),
beforeFallbackList: D,
afterFallbackList: d.AlgorithmStrategyConflictRecorder.createListSnapshot(g.AlgorithmStrategyAlgorithmFallbackListOperator.algorithmFallbackList)
}), !K) return [ 3, 25 ];
switch (r.operator) {
case "AlgorithmStrategyAlgorithmPriorityListOperator":
return [ 3, 10 ];

case "AlgorithmStrategyAlgorithmListOperator":
return [ 3, 14 ];

case "AlgorithmStrategyAlgorithmPostListPatchOperator":
return [ 3, 17 ];

case "AlgorithmStrategyAlgorithmFallbackListOperator":
return [ 3, 20 ];
}
return [ 3, 24 ];

case 10:
return "preprocess" !== t ? [ 3, 13 ] : (m.algorithmPriorityList = y.AlgorithmStrategyAlgorithmPriorityListOperator.algorithmPriorityList, 
[ 4, (0, u.invokeSelfLifeCycle)(null !== (G = null == e ? void 0 : e.traitName) && void 0 !== G ? G : _.traitSource, "onAlgorithmStrategyAlgorithmPriorityListSelfChanged", r.type, o.algorithmPriorityList) ]);

case 11:
return n.sent(), [ 4, (0, u.invokeLifeCycle)(c.algorithmStrategy.context.configs.ALGORITHM_STRATEGY_ALGORITHM_PRIORITY_LIST_CHANGED_CONFIG, "onAlgorithmStrategyAlgorithmPriorityListChanged", r.type, o.algorithmPriorityList, null !== (U = null == e ? void 0 : e.traitName) && void 0 !== U ? U : _.traitSource) ];

case 12:
n.sent(), n.label = 13;

case 13:
return [ 3, 24 ];

case 14:
switch (t) {
case "preprocess":
m.algorithmList = h.AlgorithmStrategyAlgorithmListOperator.algorithmList;
break;

case "postprocess":
m.postAlgorithmList = h.AlgorithmStrategyAlgorithmListOperator.algorithmList;
}
return [ 4, (0, u.invokeSelfLifeCycle)(null !== (q = null == e ? void 0 : e.traitName) && void 0 !== q ? q : _.traitSource, "onAlgorithmStrategyAlgorithmListSelfChanged", t, r.type, o.algorithmList) ];

case 15:
return n.sent(), [ 4, (0, u.invokeLifeCycle)(c.algorithmStrategy.context.configs.ALGORITHM_STRATEGY_ALGORITHM_LIST_CHANGED_CONFIG, "onAlgorithmStrategyAlgorithmListChanged", t, r.type, o.algorithmList, null !== (H = null == e ? void 0 : e.traitName) && void 0 !== H ? H : _.traitSource) ];

case 16:
return n.sent(), [ 3, 24 ];

case 17:
return "preprocess" !== t ? [ 3, 19 ] : (m.algorithmPostList = p.AlgorithmStrategyAlgorithmPostListPatchOperator.algorithmPostList, 
[ 4, (0, u.invokeLifeCycle)(c.algorithmStrategy.context.configs.ALGORITHM_STRATEGY_ALGORITHM_POST_LIST_CHANGED_CONFIG, "onAlgorithmStrategyAlgorithmPostListChanged", r.type, o.algorithmPostList, null !== (Y = null == e ? void 0 : e.traitName) && void 0 !== Y ? Y : _.traitSource) ]);

case 18:
n.sent(), n.label = 19;

case 19:
return [ 3, 24 ];

case 20:
return "preprocess" !== t ? [ 3, 23 ] : (m.algorithmFallbackList = g.AlgorithmStrategyAlgorithmFallbackListOperator.algorithmFallbackList, 
[ 4, (0, u.invokeSelfLifeCycle)(null !== (J = null == e ? void 0 : e.traitName) && void 0 !== J ? J : _.traitSource, "onAlgorithmStrategyAlgorithmFallbackListSelfChanged", r.type, o.algorithmFallbackList) ]);

case 21:
return n.sent(), [ 4, (0, u.invokeLifeCycle)(c.algorithmStrategy.context.configs.ALGORITHM_STRATEGY_ALGORITHM_FALLBACK_LIST_CHANGED_CONFIG, "onAlgorithmStrategyAlgorithmFallbackListChanged", r.type, o.algorithmFallbackList, null !== (W = null == e ? void 0 : e.traitName) && void 0 !== W ? W : _.traitSource) ];

case 22:
n.sent(), n.label = 23;

case 23:
return [ 3, 24 ];

case 24:
return [ 2, {
status: !0,
operator: r.operator,
actionType: r.type,
args: C,
beforeList: j
} ];

case 25:
return [ 2, {
status: !1,
operator: r.operator,
actionType: r.type,
args: C,
beforeList: j
} ];

case 26:
c.algorithmStrategy.context.CC_DEBUG && s.AlgorithmStrategyLog.error("特性：".concat(null == e ? void 0 : e.traitName).concat(window.traitConfigDebugInfo.getTraitClassNameDes(null == e ? void 0 : e.traitName), "调用方法：").concat(r.type, " 失败！")), 
n.label = 27;

case 27:
return [ 2, {
status: !1,
operator: r.operator,
actionType: r.type
} ];
}
});
});
}
},
6136: (t, r) => {
Object.defineProperty(r, "__esModule", {
value: !0
});
},
6242: (t, r, e) => {
Object.defineProperty(r, "__esModule", {
value: !0
}), r.formatPreprocessActionMessages = function(t) {
return (0, n.formatActionExecuteMessages)(t);
}, r.createPreprocessConditionTraceLogger = function(t, r) {
var e, n, i, l, c, s = null !== (e = null == t ? void 0 : t.traitSource) && void 0 !== e ? e : "UnknownTrait", u = null !== (n = null == t ? void 0 : t.tag) && void 0 !== n ? n : "mutex", g = null == (null == t ? void 0 : t.source) ? "" : "".concat(o.algorithmStrategy.context.algorithmSourceType[t.source], "(").concat(t.source, ")"), h = "".concat(s).concat(null !== (c = null === (l = null === (i = window.traitConfigDebugInfo) || void 0 === i ? void 0 : i.getTraitClassNameDes) || void 0 === l ? void 0 : l.call(i, s)) && void 0 !== c ? c : ""), f = "".concat(function(t, r, e, o) {
if ("mutex" === t) return "预处理-互斥-【源:".concat(r, "】");
var n = null == e ? "tag:".concat(t) : "tag【".concat(e + 1).concat(null == o ? "" : "/".concat(o), ":").concat(t, "】");
return "预处理-共享-【".concat(n).concat(r ? " 源:".concat(r) : "", "】");
}(u, g, null == t ? void 0 : t.tagIndex, null == t ? void 0 : t.tagTotal), "：执行特性【").concat(null == (null == t ? void 0 : t.traitIndex) ? "?" : t.traitIndex + 1).concat(null == (null == t ? void 0 : t.traitTotal) ? "" : "/".concat(t.traitTotal), "】：").concat(h);
return (0, a.createAlgorithmStrategyRuleTraceLogger)({
rulesCount: r,
buildPrefix: function(t) {
return "".concat(f, "，").concat((0, a.formatRuleProgress)(t, r));
},
color: a.getAlgorithmStrategyTraceResultColor,
fallbackPrefix: "预处理-条件计算-结果",
factWrapper: "paren",
separator: "colon",
unmatchedSuffix: "\n条件未命中，动作未执行"
});
};
var o = e(5800), n = e(4542), a = e(6582);
},
6320: function(t, r, e) {
var o = this && this.__assign || function() {
return (o = Object.assign || function(t) {
for (var r, e = 1, o = arguments.length; e < o; e++) for (var n in r = arguments[e]) Object.prototype.hasOwnProperty.call(r, n) && (t[n] = r[n]);
return t;
}).apply(this, arguments);
}, n = this && this.__rest || function(t, r) {
var e = {};
for (var o in t) Object.prototype.hasOwnProperty.call(t, o) && r.indexOf(o) < 0 && (e[o] = t[o]);
if (null != t && "function" == typeof Object.getOwnPropertySymbols) {
var n = 0;
for (o = Object.getOwnPropertySymbols(t); n < o.length; n++) r.indexOf(o[n]) < 0 && Object.prototype.propertyIsEnumerable.call(t, o[n]) && (e[o[n]] = t[o[n]]);
}
return e;
}, a = this && this.__values || function(t) {
var r = "function" == typeof Symbol && Symbol.iterator, e = r && t[r], o = 0;
if (e) return e.call(t);
if (t && "number" == typeof t.length) return {
next: function() {
return t && o >= t.length && (t = void 0), {
value: t && t[o++],
done: !t
};
}
};
throw new TypeError(r ? "Object is not iterable." : "Symbol.iterator is not defined.");
}, i = this && this.__read || function(t, r) {
var e = "function" == typeof Symbol && t[Symbol.iterator];
if (!e) return t;
var o, n, a = e.call(t), i = [];
try {
for (;(void 0 === r || r-- > 0) && !(o = a.next()).done; ) i.push(o.value);
} catch (t) {
n = {
error: t
};
} finally {
try {
o && !o.done && (e = a.return) && e.call(a);
} finally {
if (n) throw n.error;
}
}
return i;
};
Object.defineProperty(r, "__esModule", {
value: !0
}), r.sdkExtraPatchParser = u, r.patchSdkExtraFromArgs = function(t) {
return t.extra = u(t.extra), t.extra = function(t) {
var r, e, o, n, i = t;
(null == i.feature || "object" != typeof i.feature || Array.isArray(i.feature)) && (i.feature = {});
var c = i.feature;
Array.isArray(c.fixFea) || (c.fixFea = []);
var s = c.fixFea;
try {
for (var u = a(l.algorithmStrategy.context.configs.SDK_FIX_FEA_EXTERNAL_CONFIG_NAMES), g = u.next(); !g.done; g = u.next()) {
var h = g.value;
traitExternalConfigInfo.isActiveSync(h) && s.push(h);
}
} catch (t) {
r = {
error: t
};
} finally {
try {
g && !g.done && (e = u.return) && e.call(u);
} finally {
if (r) throw r.error;
}
}
try {
for (var f = a(l.algorithmStrategy.context.configs.SDK_FIX_FEA_TRAIT_NAMES), d = f.next(); !d.done; d = f.next()) {
var y = d.value, p = TRAIT("CTRefactor" + y);
(null == p ? void 0 : p.onActiveCondition) && (null == p ? void 0 : p.active) && s.push(y);
}
} catch (t) {
o = {
error: t
};
} finally {
try {
d && !d.done && (n = f.return) && n.call(f);
} finally {
if (o) throw o.error;
}
}
return i;
}(t.extra), function(t) {
var r, e;
try {
for (var o = a(Object.entries(l.algorithmStrategy.context.configs.SDK_OPTIONS_EXTRA_PATH_CONFIG)), n = o.next(); !n.done; n = o.next()) {
var c = i(n.value, 2), u = c[0], g = c[1], h = t[u];
void 0 !== h && s(t.extra, g, h), delete t[u];
}
} catch (t) {
r = {
error: t
};
} finally {
try {
n && !n.done && (e = o.return) && e.call(o);
} finally {
if (r) throw r.error;
}
}
return s(t.extra, "feature.pos", !0), t;
}(t);
};
var l = e(5800);
function c(t, r) {
var e, o, n = r.split(".").filter(Boolean), i = t;
try {
for (var l = a(n), c = l.next(); !c.done; c = l.next()) {
var s = c.value;
if (null == i || "object" != typeof i) return;
i = i[s];
}
} catch (t) {
e = {
error: t
};
} finally {
try {
c && !c.done && (o = l.return) && o.call(l);
} finally {
if (e) throw e.error;
}
}
return i;
}
function s(t, r, e) {
var o = r.split(".").filter(Boolean);
if (0 !== o.length) {
for (var n = t, a = 0; a < o.length - 1; a++) {
var i = o[a], l = n[i];
(null == l || "object" != typeof l || Array.isArray(l)) && (n[i] = {}), n = n[i];
}
n[o[o.length - 1]] = e;
}
}
function u(t) {
var r, e, i, u, g, h, f = null != t ? t : {}, d = f.traits, y = f.algos, p = (f.traits, 
f.algos, n(f, [ "traits", "algos" ])), S = o({}, p), m = l.algorithmStrategy.context.configs.ALGORITHM_STRATEGY_SDK_ARGS_PATCH_CONFIG;
if (m.traits) try {
for (var A = a(Object.keys(m.traits)), v = A.next(); !v.done; v = A.next()) {
var b = v.value, _ = m.traits[b];
if (_) {
var T = null == d ? void 0 : d[b];
if (null != T && "object" == typeof T && !Array.isArray(T)) {
var C = T;
try {
for (var O = (i = void 0, a(Object.keys(_))), P = O.next(); !P.done; P = O.next()) {
var R = P.value, L = _[R];
if ("string" == typeof L && 0 !== L.length) {
var E = C[R];
void 0 !== E && s(S, L, E);
}
}
} catch (t) {
i = {
error: t
};
} finally {
try {
P && !P.done && (u = O.return) && u.call(O);
} finally {
if (i) throw i.error;
}
}
}
}
}
} catch (t) {
r = {
error: t
};
} finally {
try {
v && !v.done && (e = A.return) && e.call(A);
} finally {
if (r) throw r.error;
}
}
if (m.algos) try {
for (var I = a(Object.keys(m.algos)), x = I.next(); !x.done; x = I.next()) {
var k = x.value, D = m.algos[k];
if ("string" == typeof D && 0 !== D.length) {
var w = null == y ? void 0 : y[k];
if (void 0 !== w) {
var N = c(S, D);
null == N || "object" != typeof N || Array.isArray(N) || "object" != typeof w || Array.isArray(w) ? s(S, D, w) : s(S, D, o(o({}, N), w));
}
}
}
} catch (t) {
g = {
error: t
};
} finally {
try {
x && !x.done && (h = I.return) && h.call(I);
} finally {
if (g) throw g.error;
}
}
return (null == S.feature || "object" != typeof S.feature || Array.isArray(S.feature)) && (S.feature = {}), 
S;
}
},
6507: (t, r) => {
Object.defineProperty(r, "__esModule", {
value: !0
}), r.AlgorithmStrategyRouterOperator = void 0;
var e = function() {
function t() {}
return t.router = function(r) {
var e = t.router.options, o = null == e ? void 0 : e.context;
if (o) {
var n = o.traits;
return !!(null == n ? void 0 : n.includes(r)) && (o.routerTarget = r, (null == e ? void 0 : e.flow).routerTarget = r, 
!0);
}
return !1;
}, t;
}();
r.AlgorithmStrategyRouterOperator = e;
},
6573: function(t, r, e) {
var o = this && this.__decorate || function(t, r, e, o) {
var n, a = arguments.length, i = a < 3 ? r : null === o ? o = Object.getOwnPropertyDescriptor(r, e) : o;
if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) i = Reflect.decorate(t, r, e, o); else for (var l = t.length - 1; l >= 0; l--) (n = t[l]) && (i = (a < 3 ? n(i) : a > 3 ? n(r, e, i) : n(r, e)) || i);
return a > 3 && i && Object.defineProperty(r, e, i), i;
};
Object.defineProperty(r, "__esModule", {
value: !0
}), r.AlgorithmStrategyReturnPatch = void 0;
var n = e(5213), a = e(3381), i = e(7594), l = function() {
function t() {}
return t.postReturnPatch = function() {
var t = n.flow;
return t.returnStateProcessType = a.AlgorithmStrategyReturnStateProcessType.DEFAULT, 
t.returnState = !0, !0;
}, o([ (0, i.patch)({
patchKey: "returnState",
getStored: function() {
return !0;
}
}) ], t, "postReturnPatch", null), t;
}();
r.AlgorithmStrategyReturnPatch = l;
},
6582: function(t, r, e) {
var o = this && this.__assign || function() {
return (o = Object.assign || function(t) {
for (var r, e = 1, o = arguments.length; e < o; e++) for (var n in r = arguments[e]) Object.prototype.hasOwnProperty.call(r, n) && (t[n] = r[n]);
return t;
}).apply(this, arguments);
}, n = this && this.__values || function(t) {
var r = "function" == typeof Symbol && Symbol.iterator, e = r && t[r], o = 0;
if (e) return e.call(t);
if (t && "number" == typeof t.length) return {
next: function() {
return t && o >= t.length && (t = void 0), {
value: t && t[o++],
done: !t
};
}
};
throw new TypeError(r ? "Object is not iterable." : "Symbol.iterator is not defined.");
};
Object.defineProperty(r, "__esModule", {
value: !0
}), r.createAlgorithmStrategyRuleTraceLogger = function(t) {
var r, e = {}, o = function(r, o, a) {
var l, c = null != a ? a : r.matched, u = t.buildPrefix(r), g = function(t, r, e, o, a) {
return void 0 === r && (r = []), function(t, r, e, o, a) {
var i, l, c, u = function(t) {
var r, e, o, a;
if (0 !== t.length) {
var i, l, c, s = new Map();
try {
for (var u = n(t), g = u.next(); !g.done; g = u.next()) {
var h = g.value;
s.set(h.path, {
kind: h.kind,
event: h,
children: []
});
}
} catch (t) {
r = {
error: t
};
} finally {
try {
g && !g.done && (e = u.return) && e.call(u);
} finally {
if (r) throw r.error;
}
}
try {
for (var f = n(t), d = f.next(); !d.done; d = f.next()) {
h = d.value;
var y = s.get(h.path);
if (y) {
var p = -1 === (c = (l = h.path).lastIndexOf(".")) ? void 0 : l.slice(0, c);
if (void 0 !== p) {
var S = s.get(p);
S ? S.children.push(y) : i || (i = y);
} else i = y;
}
}
} catch (t) {
o = {
error: t
};
} finally {
try {
d && !d.done && (a = f.return) && a.call(f);
} finally {
if (o) throw o.error;
}
}
return i;
}
}(r), g = "".concat(o ? "✓" : "✗", " ").concat(null != e ? e : "".concat(null !== (i = a.fallbackPrefix) && void 0 !== i ? i : "条件计算-".concat(null !== (l = null == u ? void 0 : u.kind) && void 0 !== l ? l : "结果"), "：规则【").concat(null !== (c = t.flow) && void 0 !== c ? c : t.ruleIndex + 1, "】"));
return u ? "".concat(g, "：\n条件：").concat(s(u, a, !0)) : g;
}(t, r, u, c, a);
}(r, null !== (l = e[r.ruleIndex]) && void 0 !== l ? l : [], 0, 0, t);
i.AlgorithmStrategyLog.log("".concat(g).concat(null != o ? o : ""), t.color(c));
};
return {
onTrace: function(n) {
var a, i;
switch (n.type) {
case "ruleStart":
r && (o(r, r.matched ? void 0 : t.unmatchedSuffix), r = void 0);
break;

case "ruleEnd":
r = n;
break;

case "condition":
(null !== (a = e[i = n.ruleIndex]) && void 0 !== a ? a : e[i] = []).push(n);
break;

default:
return n;
}
},
logResult: function(t, e) {
r && (o(r, t, e), r = void 0);
}
};
}, r.getAlgorithmStrategyTraceResultColor = function(t) {
return t ? "color:#1B5E20;background:#C8E6C9;font-weight:600;padding:2px 8px;border-radius:2px;border:1px solid #43A047;" : "color:#546E7A;background:#ECEFF1;font-weight:500;padding:2px 8px;border-radius:2px;border:1px solid #B0BEC5;";
}, r.formatRuleProgress = function(t, r) {
return "规则【".concat(t.ruleIndex + 1, "/").concat(r).concat(t.flow ? " ".concat(t.flow) : "", "】");
}, r.formatTraceValue = l;
var a = e(3187), i = e(5815);
function l(t) {
if ("string" == typeof t) return '"'.concat(t, '"');
if (void 0 === t) return "undefined";
try {
var r = JSON.stringify(t);
return null == r ? String(t) : r;
} catch (r) {
return String(t);
}
}
function c(t) {
return "and" === t.kind || "or" === t.kind;
}
function s(t, r, e) {
var n;
switch (t.kind) {
case "leaf":
return "【".concat(t.event.matched ? "✓" : "✗", " ").concat(function(t, r) {
var e, n = null !== (e = t.operator) && void 0 !== e ? e : "";
if (function(t) {
return Object.prototype.hasOwnProperty.call(a.BUILTIN_JSON_RULE_OPERATORS, t);
}(n)) {
var i = u(t.fact, t.factValue, r, t.factComment), c = u(t.valueFact, t.value, r, t.valueFactComment);
return "".concat(i, " ").concat(n, " ").concat(c);
}
var s = u(t.fact, t.factValue, o(o({}, r), {
factWrapper: "plain"
}), t.factComment);
return "".concat(n, "(").concat(s, ") → ").concat(l(t.matched), " = ").concat(l(t.value));
}(t.event, r), "】");

case "boolean":
return "conditions=".concat(String(t.event.matched));

case "not":
var i = t.children[0];
if (!i) return "!";
var g = s(i, r, !1);
return "!".concat(c(i) ? "(".concat(g, ")") : g);

case "and":
case "or":
var h = "and" === t.kind ? "&&" : "||", f = t.children.map(function(t) {
var e = s(t, r, !1);
return c(t) ? "(".concat(e, ")") : e;
});
return 0 === f.length ? "" : 1 === f.length ? f[0] : e ? "\n\t".concat(f.join("".concat(h, "\n\t"))) : f.join(" ".concat(h, " "));

case "for":
return "each：".concat(null !== (n = t.event.fact) && void 0 !== n ? n : "");

default:
return "";
}
}
function u(t, r, e, o) {
if (!t) return l(r);
var n = "".concat(t).concat(o ? "【".concat(o, "】") : "", ":").concat(l(r));
return "plain" === e.factWrapper ? n : "(".concat(n, ")");
}
},
7044: (t, r) => {
Object.defineProperty(r, "__esModule", {
value: !0
}), r.AlgorithmStrategyDisablePostprocessSequenceOperator = void 0;
var e = function() {
function t() {}
return t.disable = function() {
var r = t.disable.options, e = null == r ? void 0 : r.flow;
return e && (e.disablePostprocessSequence = !0), !0;
}, t;
}();
r.AlgorithmStrategyDisablePostprocessSequenceOperator = e;
},
7176: (t, r) => {
Object.defineProperty(r, "__esModule", {
value: !0
}), r.AlgorithmStrategyDisableShareSequenceOperator = void 0;
var e = function() {
function t() {}
return t.disable = function() {
var r = t.disable.options, e = null == r ? void 0 : r.flow;
return e && (e.disableShareSequence = !0), !0;
}, t;
}();
r.AlgorithmStrategyDisableShareSequenceOperator = e;
},
7193: (t, r) => {
Object.defineProperty(r, "__esModule", {
value: !0
}), r.createAlgorithmListSnapshot = function(t) {
return t.map(function(t) {
return {
algorithmId: t.algorithmId,
traitSource: t.traitSource,
source: t.source,
dynamicSource: t.dynamicSource,
tag: t.tag,
algorithmListSource: t.algorithmListSource,
category: t.category,
router: null == t.router ? void 0 : JSON.parse(JSON.stringify(t.router))
};
});
}, r.createAlgorithmListEventSnapshots = function(t, r) {
return {
operationOrder: r,
beforeAlgorithmList: t.beforeList,
afterAlgorithmList: t.afterList,
beforeAlgorithmFallbackList: t.beforeFallbackList,
afterAlgorithmFallbackList: t.afterFallbackList,
beforeAlgorithmPriorityList: t.beforePriorityList,
afterAlgorithmPriorityList: t.afterPriorityList,
beforeAlgorithmPostList: t.beforePostList,
afterAlgorithmPostList: t.afterPostList
};
}, r.createItemKey = function(t, r) {
var e, o, n, a, i;
return [ t, null !== (e = r.algorithmListSource) && void 0 !== e ? e : "normal", r.algorithmId, null !== (o = r.traitSource) && void 0 !== o ? o : "", null !== (n = r.source) && void 0 !== n ? n : "", null !== (a = r.dynamicSource) && void 0 !== a ? a : "", null !== (i = r.tag) && void 0 !== i ? i : "", r.router ? JSON.stringify(r.router) : "" ].join("|");
}, r.extractAlgorithmIds = function(t) {
return Array.isArray(t) ? t.filter(function(t) {
return null != t;
}) : null == t ? [] : [ t ];
}, r.isSameAlgorithmList = function(t, r) {
return JSON.stringify(t) === JSON.stringify(r);
};
},
7209: function(t, r, e) {
var o = this && this.__decorate || function(t, r, e, o) {
var n, a = arguments.length, i = a < 3 ? r : null === o ? o = Object.getOwnPropertyDescriptor(r, e) : o;
if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) i = Reflect.decorate(t, r, e, o); else for (var l = t.length - 1; l >= 0; l--) (n = t[l]) && (i = (a < 3 ? n(i) : a > 3 ? n(r, e, i) : n(r, e)) || i);
return a > 3 && i && Object.defineProperty(r, e, i), i;
};
Object.defineProperty(r, "__esModule", {
value: !0
}), r.AlgorithmStrategyAlgoBlockPosListPatch = void 0;
var n, a = e(5213), i = e(7594), l = function() {
function t() {}
return t.patch = function(t) {
if (function(t, r) {
if (!Array.isArray(t) || !Array.isArray(r) || t.length !== r.length) return !1;
for (var e = 0; e < t.length; e++) {
var o = t[e], n = r[e];
if (o.row !== n.row || o.col !== n.col) return !1;
}
return !0;
}(n, t)) return !1;
var r = a.flow.sdk;
return r && (r.blockPoses = t), n = t, !0;
}, o([ (0, i.patch)({
patchKey: "blockPosList",
getStored: function() {
return n;
}
}) ], t, "patch", null), t;
}();
r.AlgorithmStrategyAlgoBlockPosListPatch = l;
},
7388: (t, r, e) => {
Object.defineProperty(r, "__esModule", {
value: !0
}), r.AlgorithmStrategyReturnOperator = void 0;
var o = e(3381), n = function() {
function t() {}
return t.returnState = function(r) {
var e;
void 0 === r && (r = o.AlgorithmStrategyReturnStateProcessType.DEFAULT);
var n = t.returnState.options, a = null == n ? void 0 : n.flow;
return a && (a.returnStateProcessType = r, r === o.AlgorithmStrategyReturnStateProcessType.POST_SDK_REQUEST_SUCCESS || (a.returnState = !0, 
a.returnStateSource = null === (e = null == n ? void 0 : n.context) || void 0 === e ? void 0 : e.traitSource)), 
!0;
}, t;
}();
r.AlgorithmStrategyReturnOperator = n;
},
7594: (t, r) => {
Object.defineProperty(r, "__esModule", {
value: !0
}), r.ALGORITHM_STRATEGY_PATCH_KEYS = void 0, r.patchWatch = function(t) {
e.push(t);
}, r.patch = function(t) {
return function(r, e, n) {
var a = n.value;
"function" == typeof a && (n.value = function() {
for (var r = [], e = 0; e < arguments.length; e++) r[e] = arguments[e];
var n = t.getStored(), i = a.apply(this, r);
if (i && "function" == typeof i.then) return i.then(function(e) {
var a = r.length >= 2 ? r[1] : void 0, i = {
prev: n,
next: t.getStored(),
target: a
};
return o(t, i), e;
});
if (!0 === i) {
var l = r.length >= 2 ? r[1] : void 0, c = {
prev: n,
next: t.getStored(),
target: l
};
o(t, c);
}
return i;
});
};
}, r.ALGORITHM_STRATEGY_PATCH_KEYS = [ "algoActualId", "algoActualIdByPos", "algoActualName", "blockIdList", "blockPosList", "algoExpectedId", "blockExtraList", "positionAdjust", "algorithmPriorityList", "algorithmList", "algorithmPostList", "algorithmFallbackList", "preprocessShareSequenceDynamicSource", "preprocessMutexRouter", "algorithmIdModify", "disablePostRestTags", "returnState", "algoItemSdkRequest", "algoItemSdkArgs", "algoSdkRequest" ];
var e = [];
function o(t, r) {
if (0 !== e.length) for (var o = {
patchKey: t.patchKey
}, n = 0; n < e.length; n++) e[n](o, r);
}
},
7611: (t, r) => {
var e;
Object.defineProperty(r, "__esModule", {
value: !0
}), r.AlgorithmStrategyPreprocessType = void 0, function(t) {
t.DEFAULT = "默认", t.REVIVE = "复活", t.GUIDE = "引导";
}(e || (r.AlgorithmStrategyPreprocessType = e = {}));
},
7728: function(t, r, e) {
var o = this && this.__decorate || function(t, r, e, o) {
var n, a = arguments.length, i = a < 3 ? r : null === o ? o = Object.getOwnPropertyDescriptor(r, e) : o;
if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) i = Reflect.decorate(t, r, e, o); else for (var l = t.length - 1; l >= 0; l--) (n = t[l]) && (i = (a < 3 ? n(i) : a > 3 ? n(r, e, i) : n(r, e)) || i);
return a > 3 && i && Object.defineProperty(r, e, i), i;
}, n = this && this.__awaiter || function(t, r, e, o) {
return new (e || (e = Promise))(function(n, a) {
function i(t) {
try {
c(o.next(t));
} catch (t) {
a(t);
}
}
function l(t) {
try {
c(o.throw(t));
} catch (t) {
a(t);
}
}
function c(t) {
var r;
t.done ? n(t.value) : (r = t.value, r instanceof e ? r : new e(function(t) {
t(r);
})).then(i, l);
}
c((o = o.apply(t, r || [])).next());
});
}, a = this && this.__generator || function(t, r) {
var e, o, n, a = {
label: 0,
sent: function() {
if (1 & n[0]) throw n[1];
return n[1];
},
trys: [],
ops: []
}, i = Object.create(("function" == typeof Iterator ? Iterator : Object).prototype);
return i.next = l(0), i.throw = l(1), i.return = l(2), "function" == typeof Symbol && (i[Symbol.iterator] = function() {
return this;
}), i;
function l(l) {
return function(c) {
return function(l) {
if (e) throw new TypeError("Generator is already executing.");
for (;i && (i = 0, l[0] && (a = 0)), a; ) try {
if (e = 1, o && (n = 2 & l[0] ? o.return : l[0] ? o.throw || ((n = o.return) && n.call(o), 
0) : o.next) && !(n = n.call(o, l[1])).done) return n;
switch (o = 0, n && (l = [ 2 & l[0], n.value ]), l[0]) {
case 0:
case 1:
n = l;
break;

case 4:
return a.label++, {
value: l[1],
done: !1
};

case 5:
a.label++, o = l[1], l = [ 0 ];
continue;

case 7:
l = a.ops.pop(), a.trys.pop();
continue;

default:
if (!((n = (n = a.trys).length > 0 && n[n.length - 1]) || 6 !== l[0] && 2 !== l[0])) {
a = 0;
continue;
}
if (3 === l[0] && (!n || l[1] > n[0] && l[1] < n[3])) {
a.label = l[1];
break;
}
if (6 === l[0] && a.label < n[1]) {
a.label = n[1], n = l;
break;
}
if (n && a.label < n[2]) {
a.label = n[2], a.ops.push(l);
break;
}
n[2] && a.ops.pop(), a.trys.pop();
continue;
}
l = r.call(t, a);
} catch (t) {
l = [ 6, t ], o = 0;
} finally {
e = n = 0;
}
if (5 & l[0]) throw l[1];
return {
value: l[0] ? l[1] : void 0,
done: !0
};
}([ l, c ]);
};
}
}, i = this && this.__values || function(t) {
var r = "function" == typeof Symbol && Symbol.iterator, e = r && t[r], o = 0;
if (e) return e.call(t);
if (t && "number" == typeof t.length) return {
next: function() {
return t && o >= t.length && (t = void 0), {
value: t && t[o++],
done: !t
};
}
};
throw new TypeError(r ? "Object is not iterable." : "Symbol.iterator is not defined.");
}, l = this && this.__read || function(t, r) {
var e = "function" == typeof Symbol && t[Symbol.iterator];
if (!e) return t;
var o, n, a = e.call(t), i = [];
try {
for (;(void 0 === r || r-- > 0) && !(o = a.next()).done; ) i.push(o.value);
} catch (t) {
n = {
error: t
};
} finally {
try {
o && !o.done && (e = a.return) && e.call(a);
} finally {
if (n) throw n.error;
}
}
return i;
}, c = this && this.__spreadArray || function(t, r, e) {
if (e || 2 === arguments.length) for (var o, n = 0, a = r.length; n < a; n++) !o && n in r || (o || (o = Array.prototype.slice.call(r, 0, n)), 
o[n] = r[n]);
return t.concat(o || Array.prototype.slice.call(r));
};
Object.defineProperty(r, "__esModule", {
value: !0
}), r.AlgorithmStrategyAlgoItemSdkArgsPatch = void 0;
var s, u = e(8011), g = e(2436), h = e(5815), f = e(5213), d = e(3768), y = e(2230), p = e(7594), S = function() {
function t() {}
return t.patch = function(t, r) {
return n(this, void 0, Promise, function() {
var e, o, n, p, S, m, A, v, b, _, T, C, O, P, R;
return a(this, function(a) {
switch (a.label) {
case 0:
e = algorithmStrategy.context.configs.ALGORITHM_STRATEGY_SDK_ARGS_TRAITS_CONFIG, 
(null == r ? void 0 : r.length) > 0 && (e = e.filter(function(t) {
return !r.includes(t);
})), f.flow.traits = e, o = y.AlgorithmStrategySDKRequest.createBaseInputArgs(), 
n = [], p = [], a.label = 1;

case 1:
a.trys.push([ 1, 6, 7, 8 ]), S = i(e), m = S.next(), a.label = 2;

case 2:
return m.done ? [ 3, 5 ] : (A = m.value, (null == n ? void 0 : n.includes(A)) ? [ 3, 4 ] : (null == (v = TRAIT(A)) ? void 0 : v.onActiveCondition) && (null == v ? void 0 : v.active) && (0, 
d.isSDKRequestTrait)(v) ? [ 4, (0, g.mergeSDKActionsArgs)(v, f.flow, o, t) ] : [ 3, 4 ]);

case 3:
(b = a.sent()) && (_ = b.merged, T = b.args, void 0 !== _.disableTraits && (n = c([], l(new Set(c(c([], l(n), !1), l(_.disableTraits), !1))), !1)), 
C = algorithmStrategy.context.CONFLICT_DEBUG ? u.AlgorithmStrategyConflictRecorder.captureSDKArgsBefore(_, o) : void 0, 
y.AlgorithmStrategySDKRequest.mergeToInputArgs(o, _, A), C && u.AlgorithmStrategyConflictRecorder.recordSDKArgsMerge(null != (L = f.flow.process) && String(L).startsWith("后处理") ? "postprocess" : "preprocess", t.algorithmListSource, t, A, C, o), 
algorithmStrategy.context.CC_DEBUG && p.push({
traitClassName: (0, h.formatTraitNameWithDescription)(A),
args: T
})), a.label = 4;

case 4:
return m = S.next(), [ 3, 2 ];

case 5:
return [ 3, 8 ];

case 6:
return O = a.sent(), P = {
error: O
}, [ 3, 8 ];

case 7:
try {
m && !m.done && (R = S.return) && R.call(S);
} finally {
if (P) throw P.error;
}
return [ 7 ];

case 8:
return algorithmStrategy.context.CC_DEBUG && (h.AlgorithmStrategyLog.log("SDK 算法列表-请求-合并参数：", h.AlgorithmStrategyLog.NORMAL_COLOR), 
h.AlgorithmStrategyLog.table(p)), s = o, [ 2, o ];
}
var L;
});
});
}, o([ (0, p.patch)({
patchKey: "algoItemSdkArgs",
getStored: function() {
return s;
}
}) ], t, "patch", null), t;
}();
r.AlgorithmStrategyAlgoItemSdkArgsPatch = S;
},
7871: (t, r, e) => {
Object.defineProperty(r, "__esModule", {
value: !0
}), r.PREPROCESS_SKIP_COLOR = r.PREPROCESS_SOURCE_START_COLOR = void 0, r.preprocessAlgorithmSourceKey = a, 
r.formatPreprocessSource = i, r.formatPreprocessSourceList = function(t) {
return "[".concat(t.map(i).join("、"), "]");
}, r.formatPreprocessTagProgress = function(t, r, e) {
return "tag【".concat(r + 1, "/").concat(e, ":").concat(t, "】");
}, r.getPreprocessSourceTraceColor = function(t) {
return !Number.isFinite(t) || t < 0 ? n.AlgorithmStrategyLog.PREPROCESS_COLOR : l[t % l.length];
}, r.getPreprocessTraitTraceColor = function(t) {
return !Number.isFinite(t) || t < 0 ? n.AlgorithmStrategyLog.PREPROCESS_COLOR : c[t % c.length];
};
var o = e(5800), n = e(5815);
function a(t) {
var r;
return String(null !== (r = o.algorithmStrategy.context.algorithmSourceType[t]) && void 0 !== r ? r : t);
}
function i(t) {
return t === Number.MIN_SAFE_INTEGER ? "无互斥胜出源" : "".concat(a(t), "(").concat(t, ")");
}
r.PREPROCESS_SOURCE_START_COLOR = "color:#FFFFFF;background:#D32F2F;font-weight:700;padding:2px 8px;border-radius:2px;border:1px solid #B71C1C;", 
r.PREPROCESS_SKIP_COLOR = "color:#546E7A;background:#ECEFF1;font-weight:500;padding:2px 8px;border-radius:2px;border:1px solid #B0BEC5;";
var l = [ "color:#004D40;background:#B2DFDB;font-weight:600;padding:2px 8px;border-radius:2px;border:1px solid #00897B;", "color:#1A237E;background:#C5CAE9;font-weight:600;padding:2px 8px;border-radius:2px;border:1px solid #3949AB;", "color:#4A148C;background:#E1BEE7;font-weight:600;padding:2px 8px;border-radius:2px;border:1px solid #8E24AA;", "color:#3E2723;background:#FFE0B2;font-weight:600;padding:2px 8px;border-radius:2px;border:1px solid #FB8C00;", "color:#263238;background:#CFD8DC;font-weight:600;padding:2px 8px;border-radius:2px;border:1px solid #607D8B;", "color:#0D47A1;background:#BBDEFB;font-weight:600;padding:2px 8px;border-radius:2px;border:1px solid #1E88E5;" ], c = [ "color:#004D40;background:#E0F2F1;font-weight:600;padding:2px 8px;border-radius:2px;border:1px solid #26A69A;", "color:#1A237E;background:#E8EAF6;font-weight:600;padding:2px 8px;border-radius:2px;border:1px solid #5C6BC0;", "color:#4A148C;background:#F3E5F5;font-weight:600;padding:2px 8px;border-radius:2px;border:1px solid #AB47BC;", "color:#3E2723;background:#FFF3E0;font-weight:600;padding:2px 8px;border-radius:2px;border:1px solid #FB8C00;", "color:#263238;background:#ECEFF1;font-weight:600;padding:2px 8px;border-radius:2px;border:1px solid #78909C;", "color:#0D47A1;background:#E3F2FD;font-weight:600;padding:2px 8px;border-radius:2px;border:1px solid #42A5F5;" ];
},
7880: (t, r) => {
var e;
Object.defineProperty(r, "__esModule", {
value: !0
}), r.AlgorithmStrategyProcessType = void 0, function(t) {
t.SESSION_INIT = "游戏 Session 初始化（每次启动后）", t.ROUND_INIT = "每轮初始化", t.GAMES_INIT = "每局初始化", 
t.GAMES_NEW_INIT = "每局初始化（新的一局）", t.PREPROCESS_MUTEX = "预处理-互斥-进入", t.PREPROCESS_MUTEX_SUCCESS = "预处理-互斥-成功", 
t.PREPROCESS_MUTEX_FAIL = "预处理-互斥-失败", t.PREPROCESS_SHARE = "预处理-共享-进入", t.PREPROCESS_SHARE_SUCCESS = "预处理-共享-成功", 
t.PREPROCESS_SHARE_FAIL = "预处理-共享-失败", t.PREPROCESS_SDK = "预处理-SDK-进入", t.PREPROCESS_SDK_PRIORITY = "预处理-SDK-算法优先级列表-进入", 
t.PREPROCESS_SDK_PRIORITY_SUCCESS = "预处理-SDK-算法优先级列表-请求成功", t.PREPROCESS_SDK_PRIORITY_FAIL = "预处理-SDK-算法优先级列表-请求失败", 
t.PREPROCESS_SDK_NORMAL = "预处理-SDK-算法列表-进入", t.PREPROCESS_SDK_NORMAL_SUCCESS = "预处理-SDK-算法列表-请求成功", 
t.PREPROCESS_SDK_NORMAL_FAIL = "预处理-SDK-算法列表-请求失败", t.PREPROCESS_SDK_POST = "预处理-SDK-算法POST列表-进入", 
t.PREPROCESS_SDK_POST_SUCCESS = "预处理-SDK-算法POST列表-请求成功", t.PREPROCESS_SDK_POST_FAIL = "预处理-SDK-算法POST列表-请求失败", 
t.PREPROCESS_SDK_FALLBACK = "预处理-SDK-算法降级列表-进入", t.PREPROCESS_SDK_FALLBACK_SUCCESS = "预处理-SDK-算法降级列表-请求成功", 
t.PREPROCESS_SDK_FALLBACK_FAIL = "预处理-SDK-算法降级列表-请求失败", t.POSTPROCESS = "后处理-进入", 
t.POSTPROCESS_SDK = "后处理-SDK-进入", t.POSTPROCESS_SDK_NORMAL = "后处理-SDK-算法列表-进入", 
t.POSTPROCESS_SDK_NORMAL_SUCCESS = "后处理-SDK-算法列表-请求成功", t.POSTPROCESS_SDK_NORMAL_FAIL = "后处理-SDK-算法列表-请求失败", 
t.POSTPROCESS_SUCCESS = "后处理-成功", t.POSTPROCESS_SDK_SUCCESS = "后处理-SDK-成功", t.POSTPROCESS_SDK_FAIL = "后处理-SDK-失败", 
t.POSTPROCESS_FAIL = "后处理-失败", t.POSITION_ADJUST = "位置调整-进入", t.POSITION_ADJUST_SUCCESS = "位置调整-成功", 
t.POSITION_ADJUST_FAIL = "位置调整-失败", t.COLOR_ADJUST = "颜色调整", t.COLOR_ADJUST_SUCCESS = "颜色调整-成功", 
t.COLLECTION_ADJUST = "收集物调整", t.COLLECTION_ADJUST_SUCCESS = "收集物调整-成功", t.COLLECTION_ADJUST_FAIL = "收集物调整-失败", 
t.COMPLETE_PRE = "完成前", t.COMPLETE = "完成";
}(e || (r.AlgorithmStrategyProcessType = e = {}));
},
7894: function(t, r, e) {
var o = this && this.__decorate || function(t, r, e, o) {
var n, a = arguments.length, i = a < 3 ? r : null === o ? o = Object.getOwnPropertyDescriptor(r, e) : o;
if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) i = Reflect.decorate(t, r, e, o); else for (var l = t.length - 1; l >= 0; l--) (n = t[l]) && (i = (a < 3 ? n(i) : a > 3 ? n(r, e, i) : n(r, e)) || i);
return a > 3 && i && Object.defineProperty(r, e, i), i;
};
Object.defineProperty(r, "__esModule", {
value: !0
}), r.AlgorithmStrategyAlgoPreprocessMutexRouterChangedPatch = r.preprocessMutexRouterPatch = void 0, 
r.clearPreprocessMutexRouterPatch = function() {
r.preprocessMutexRouterPatch = {};
};
var n = e(7594);
r.preprocessMutexRouterPatch = {};
var a = function() {
function t() {}
return t.patch = function(t) {
return r.preprocessMutexRouterPatch[t] = !0, !0;
}, o([ (0, n.patch)({
patchKey: "preprocessMutexRouter",
getStored: function() {
return r.preprocessMutexRouterPatch;
}
}) ], t, "patch", null), t;
}();
r.AlgorithmStrategyAlgoPreprocessMutexRouterChangedPatch = a;
},
8011: (t, r, e) => {
Object.defineProperty(r, "__esModule", {
value: !0
}), r.AlgorithmStrategyConflictRecorder = void 0;
var o = e(2574), n = e(2940), a = e(7193), i = e(9876), l = e(3193), c = e(5507), s = e(4179), u = e(573), g = e(8459), h = e(4985), f = e(4481), d = e(42), y = function() {
function t() {}
return t.stateWatch = function() {
var t = hs.traitConfigInfo.traitsClassNameMap;
for (var r in t) (0, f.ensureTraitStateWatched)(r);
(0, d.ensureTargetReturnStateWatched)();
}, t.resetGame = function(t) {
o.gameStats.resetGame(t);
}, t.resetRound = function(t) {
n.roundStats.resetRound(t);
}, t.beginSDKRequest = function() {
(0, h.beginSDKRequest)();
}, t.recordTraitCall = function(t) {
(0, l.recordTraitCall)(t);
}, t.recordTraitTrigger = function(t) {
(0, l.recordTraitTrigger)(t);
}, t.createListSnapshot = function(t) {
return (0, a.createAlgorithmListSnapshot)(t);
}, t.recordAlgorithmListActionResult = function(t) {
(0, c.recordAlgorithmListActionResult)(t);
}, t.recordPartialActionSuccess = function(t) {
(0, c.recordPartialActionSuccess)(t);
}, t.recordAdjustResult = function(t) {
(0, s.recordAdjustResult)(t);
}, t.recordPatchUpdate = function(t) {
(0, u.recordPatchUpdate)(t);
}, t.recordBlockListFinalCheck = function(t) {
(0, u.recordBlockListFinalCheck)(t);
}, t.recordSDKItemRequested = function(t, r) {
(0, h.recordSDKItemRequested)(t, r);
}, t.recordSDKItemSkipped = function(t, r) {
(0, h.recordSDKItemSkipped)(t, r);
}, t.recordSDKItemResult = function(t, r) {
(0, h.recordSDKItemResult)(t, r);
}, t.captureSDKArgsBefore = function(t, r) {
return (0, h.captureSDKArgsBefore)(t, r);
}, t.recordSDKArgsMerge = function(t, r, e, o, n, a) {
(0, h.recordSDKArgsMerge)(t, r, e, o, n, a);
}, t.recordSDKStopReason = function(t) {
(0, h.recordSDKStopReason)(t);
}, t.completeSDK = function(t) {
(0, h.completeSDK)(t);
}, t.completeFallbackSDK = function(t) {
(0, h.completeFallbackSDK)(t);
}, t.recordSuccessfulSDKResult = function(t, r) {
(0, h.recordSuccessfulSDKResult)(t, r);
}, t.finalizeRoundResult = function(t) {
(0, g.finalizeRoundResult)(t);
}, t.snapshot = function() {
return (0, i.snapshot)();
}, t;
}();
r.AlgorithmStrategyConflictRecorder = y;
},
8085: function(t, r) {
var e = this && this.__values || function(t) {
var r = "function" == typeof Symbol && Symbol.iterator, e = r && t[r], o = 0;
if (e) return e.call(t);
if (t && "number" == typeof t.length) return {
next: function() {
return t && o >= t.length && (t = void 0), {
value: t && t[o++],
done: !t
};
}
};
throw new TypeError(r ? "Object is not iterable." : "Symbol.iterator is not defined.");
}, o = this && this.__read || function(t, r) {
var e = "function" == typeof Symbol && t[Symbol.iterator];
if (!e) return t;
var o, n, a = e.call(t), i = [];
try {
for (;(void 0 === r || r-- > 0) && !(o = a.next()).done; ) i.push(o.value);
} catch (t) {
n = {
error: t
};
} finally {
try {
o && !o.done && (e = a.return) && e.call(a);
} finally {
if (n) throw n.error;
}
}
return i;
};
Object.defineProperty(r, "__esModule", {
value: !0
}), r.cloneValue = function t(r, n, a) {
var i, l, c;
if (void 0 === n && (n = 0), void 0 === a && (a = new WeakSet()), null == r || "string" == typeof r || "number" == typeof r || "boolean" == typeof r) return r;
if ("bigint" == typeof r) return r.toString();
if ("function" == typeof r) return "[Function ".concat(null !== (c = r.name) && void 0 !== c ? c : "anonymous", "]");
if ("object" != typeof r) return String(r);
if (a.has(r)) return "[Circular]";
if (n >= 5) return "[Object]";
if (a.add(r), Array.isArray(r)) return r.map(function(r) {
return t(r, n + 1, a);
});
var s = {};
try {
for (var u = e(Object.entries(r)), g = u.next(); !g.done; g = u.next()) {
var h = o(g.value, 2), f = h[0], d = h[1];
s[f] = t(d, n + 1, a);
}
} catch (t) {
i = {
error: t
};
} finally {
try {
g && !g.done && (l = u.return) && l.call(u);
} finally {
if (i) throw i.error;
}
}
return s;
};
},
8088: function(t, r, e) {
var o = this && this.__decorate || function(t, r, e, o) {
var n, a = arguments.length, i = a < 3 ? r : null === o ? o = Object.getOwnPropertyDescriptor(r, e) : o;
if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) i = Reflect.decorate(t, r, e, o); else for (var l = t.length - 1; l >= 0; l--) (n = t[l]) && (i = (a < 3 ? n(i) : a > 3 ? n(r, e, i) : n(r, e)) || i);
return a > 3 && i && Object.defineProperty(r, e, i), i;
};
Object.defineProperty(r, "__esModule", {
value: !0
}), r.AlgorithmStrategyAlgoBlockIdListPatch = void 0;
var n, a = e(5213), i = e(7594), l = function() {
function t() {}
return t.patch = function(t) {
if (function(t, r) {
if (!Array.isArray(t) || !Array.isArray(r) || t.length !== r.length) return !1;
if (5 === r[0] && (4 === r[1] || 5 === r[1]) && 5 === r[2]) return !1;
for (var e = 0; e < t.length; e++) if (t[e] !== r[e]) return !1;
return !0;
}(n, t)) return !1;
var r = a.flow.sdk;
return r && (r.blockIds = t), n = t, !0;
}, o([ (0, i.patch)({
patchKey: "blockIdList",
getStored: function() {
return n;
}
}) ], t, "patch", null), t;
}();
r.AlgorithmStrategyAlgoBlockIdListPatch = l;
},
8243: function(t, r, e) {
var o = this && this.__decorate || function(t, r, e, o) {
var n, a = arguments.length, i = a < 3 ? r : null === o ? o = Object.getOwnPropertyDescriptor(r, e) : o;
if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) i = Reflect.decorate(t, r, e, o); else for (var l = t.length - 1; l >= 0; l--) (n = t[l]) && (i = (a < 3 ? n(i) : a > 3 ? n(r, e, i) : n(r, e)) || i);
return a > 3 && i && Object.defineProperty(r, e, i), i;
};
Object.defineProperty(r, "__esModule", {
value: !0
}), r.AlgorithmStrategyDisablePatch = void 0;
var n = e(5213), a = e(7594), i = function() {
function t() {}
return t.disablePostRestTagsPatch = function() {
return n.flow.disabledPostRestTags = !0, !0;
}, o([ (0, a.patch)({
patchKey: "disablePostRestTags",
getStored: function() {
return !0;
}
}) ], t, "disablePostRestTagsPatch", null), t;
}();
r.AlgorithmStrategyDisablePatch = i;
},
8281: function(t, r, e) {
var o = this && this.__read || function(t, r) {
var e = "function" == typeof Symbol && t[Symbol.iterator];
if (!e) return t;
var o, n, a = e.call(t), i = [];
try {
for (;(void 0 === r || r-- > 0) && !(o = a.next()).done; ) i.push(o.value);
} catch (t) {
n = {
error: t
};
} finally {
try {
o && !o.done && (e = a.return) && e.call(a);
} finally {
if (n) throw n.error;
}
}
return i;
}, n = this && this.__spreadArray || function(t, r, e) {
if (e || 2 === arguments.length) for (var o, n = 0, a = r.length; n < a; n++) !o && n in r || (o || (o = Array.prototype.slice.call(r, 0, n)), 
o[n] = r[n]);
return t.concat(o || Array.prototype.slice.call(r));
}, a = this && this.__values || function(t) {
var r = "function" == typeof Symbol && Symbol.iterator, e = r && t[r], o = 0;
if (e) return e.call(t);
if (t && "number" == typeof t.length) return {
next: function() {
return t && o >= t.length && (t = void 0), {
value: t && t[o++],
done: !t
};
}
};
throw new TypeError(r ? "Object is not iterable." : "Symbol.iterator is not defined.");
};
Object.defineProperty(r, "__esModule", {
value: !0
}), r.AlgorithmStrategyAlgorithmPostListPatchOperator = void 0;
var i = e(4246), l = [], c = function() {
function t() {}
return Object.defineProperty(t, "algorithmPostList", {
get: function() {
return Object.freeze(n([], o(l), !1));
},
enumerable: !1,
configurable: !0
}), t.unshift = function(r) {
return !(0, i.isAbsentAlgorithmIdArg)(r) && (l.unshift.apply(l, n([], o((0, i.transformAlgorithmId)(r, t.unshift.options)), !1)), 
!0);
}, t.push = function(r) {
return !(0, i.isAbsentAlgorithmIdArg)(r) && (l.push.apply(l, n([], o((0, i.transformAlgorithmId)(r, t.push.options)), !1)), 
!0);
}, t.insertBefore = function(r, e) {
if (null == r || (0, i.isAbsentAlgorithmIdArg)(e)) return !1;
var a = l.findIndex(function(t) {
return t.algorithmId === r;
});
return -1 !== a && (l.splice.apply(l, n([ a, 0 ], o((0, i.transformAlgorithmId)(e, t.insertBefore.options)), !1)), 
!0);
}, t.insertAfter = function(r, e) {
if (null == r || (0, i.isAbsentAlgorithmIdArg)(e)) return !1;
var a = l.findIndex(function(t) {
return t.algorithmId === r;
});
return -1 !== a && (l.splice.apply(l, n([ a + 1, 0 ], o((0, i.transformAlgorithmId)(e, t.insertAfter.options)), !1)), 
!0);
}, t.remove = function(t) {
if ((0, i.isAbsentAlgorithmIdArg)(t)) return !1;
var r = (0, i.toArray)(t), e = new Set(r), o = l.filter(function(t) {
return !e.has(t.algorithmId);
}), n = o.length !== l.length;
return n && (l = o), n;
}, t.removeCategory = function(t) {
if (null == t) return !1;
var r = (0, i.CATEGORY_TO_ENUM)()[t], e = l.filter(function(t) {
return !Object.values(r).includes(t.algorithmId);
}), o = e.length !== l.length;
return o && (l = e), o;
}, t.replace = function(r, e) {
var c, s;
if ((0, i.isAbsentAlgorithmIdArg)(r) || (0, i.isAbsentAlgorithmIdArg)(e)) return !1;
var u = (0, i.toArray)(r), g = new Set(u), h = (0, i.transformAlgorithmId)(e, t.replace.options), f = !1, d = [];
try {
for (var y = a(l), p = y.next(); !p.done; p = y.next()) {
var S = p.value;
g.has(S.algorithmId) ? (d.push.apply(d, n([], o(h), !1)), f = !0) : d.push(S);
}
} catch (t) {
c = {
error: t
};
} finally {
try {
p && !p.done && (s = y.return) && s.call(y);
} finally {
if (c) throw c.error;
}
}
return f && (l = d), f;
}, t.replaceCategory = function(r, e) {
var c, s;
if (null == r || (0, i.isAbsentAlgorithmIdArg)(e)) return !1;
var u = (0, i.CATEGORY_TO_ENUM)()[r], g = !1, h = [];
try {
for (var f = a(l), d = f.next(); !d.done; d = f.next()) {
var y = d.value;
Object.values(u).includes(y.algorithmId) ? (h.push.apply(h, n([], o((0, i.transformAlgorithmId)(e, t.replaceCategory.options)), !1)), 
g = !0) : h.push(y);
}
} catch (t) {
c = {
error: t
};
} finally {
try {
d && !d.done && (s = f.return) && s.call(f);
} finally {
if (c) throw c.error;
}
}
return g && (l = h), g;
}, t.replaceAll = function(r) {
return !(0, i.isAbsentReplaceAllAlgorithmIdArg)(r) && (l = (0, i.transformAlgorithmId)(r, t.replaceAll.options), 
!0);
}, t.clear = function() {
l.length = 0;
}, t;
}();
r.AlgorithmStrategyAlgorithmPostListPatchOperator = c;
},
8329: function(t, r, e) {
var o = this && this.__decorate || function(t, r, e, o) {
var n, a = arguments.length, i = a < 3 ? r : null === o ? o = Object.getOwnPropertyDescriptor(r, e) : o;
if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) i = Reflect.decorate(t, r, e, o); else for (var l = t.length - 1; l >= 0; l--) (n = t[l]) && (i = (a < 3 ? n(i) : a > 3 ? n(r, e, i) : n(r, e)) || i);
return a > 3 && i && Object.defineProperty(r, e, i), i;
}, n = this && this.__awaiter || function(t, r, e, o) {
return new (e || (e = Promise))(function(n, a) {
function i(t) {
try {
c(o.next(t));
} catch (t) {
a(t);
}
}
function l(t) {
try {
c(o.throw(t));
} catch (t) {
a(t);
}
}
function c(t) {
var r;
t.done ? n(t.value) : (r = t.value, r instanceof e ? r : new e(function(t) {
t(r);
})).then(i, l);
}
c((o = o.apply(t, r || [])).next());
});
}, a = this && this.__generator || function(t, r) {
var e, o, n, a = {
label: 0,
sent: function() {
if (1 & n[0]) throw n[1];
return n[1];
},
trys: [],
ops: []
}, i = Object.create(("function" == typeof Iterator ? Iterator : Object).prototype);
return i.next = l(0), i.throw = l(1), i.return = l(2), "function" == typeof Symbol && (i[Symbol.iterator] = function() {
return this;
}), i;
function l(l) {
return function(c) {
return function(l) {
if (e) throw new TypeError("Generator is already executing.");
for (;i && (i = 0, l[0] && (a = 0)), a; ) try {
if (e = 1, o && (n = 2 & l[0] ? o.return : l[0] ? o.throw || ((n = o.return) && n.call(o), 
0) : o.next) && !(n = n.call(o, l[1])).done) return n;
switch (o = 0, n && (l = [ 2 & l[0], n.value ]), l[0]) {
case 0:
case 1:
n = l;
break;

case 4:
return a.label++, {
value: l[1],
done: !1
};

case 5:
a.label++, o = l[1], l = [ 0 ];
continue;

case 7:
l = a.ops.pop(), a.trys.pop();
continue;

default:
if (!((n = (n = a.trys).length > 0 && n[n.length - 1]) || 6 !== l[0] && 2 !== l[0])) {
a = 0;
continue;
}
if (3 === l[0] && (!n || l[1] > n[0] && l[1] < n[3])) {
a.label = l[1];
break;
}
if (6 === l[0] && a.label < n[1]) {
a.label = n[1], n = l;
break;
}
if (n && a.label < n[2]) {
a.label = n[2], a.ops.push(l);
break;
}
n[2] && a.ops.pop(), a.trys.pop();
continue;
}
l = r.call(t, a);
} catch (t) {
l = [ 6, t ], o = 0;
} finally {
e = n = 0;
}
if (5 & l[0]) throw l[1];
return {
value: l[0] ? l[1] : void 0,
done: !0
};
}([ l, c ]);
};
}
};
Object.defineProperty(r, "__esModule", {
value: !0
}), r.AlgorithmStrategyAlgoSdkRequestPatch = void 0;
var i, l = e(5815), c = e(5213), s = e(2230), u = e(7594), g = function() {
function t() {}
return t.patch = function(t, r) {
return n(this, void 0, Promise, function() {
return a(this, function(e) {
switch (e.label) {
case 0:
return [ 4, s.AlgorithmStrategySDKRequest.request(t, r, c.flow) ];

case 1:
return i = e.sent(), algorithmStrategy.context.CC_DEBUG && l.AlgorithmStrategyLog.log("补丁：sdkRequest", l.AlgorithmStrategyLog.PATCH_COLOR), 
[ 2, i ];
}
});
});
}, o([ (0, u.patch)({
patchKey: "algoSdkRequest",
getStored: function() {
return i;
}
}) ], t, "patch", null), t;
}();
r.AlgorithmStrategyAlgoSdkRequestPatch = g;
},
8350: function(t, r, e) {
var o = this && this.__assign || function() {
return (o = Object.assign || function(t) {
for (var r, e = 1, o = arguments.length; e < o; e++) for (var n in r = arguments[e]) Object.prototype.hasOwnProperty.call(r, n) && (t[n] = r[n]);
return t;
}).apply(this, arguments);
}, n = this && this.__awaiter || function(t, r, e, o) {
return new (e || (e = Promise))(function(n, a) {
function i(t) {
try {
c(o.next(t));
} catch (t) {
a(t);
}
}
function l(t) {
try {
c(o.throw(t));
} catch (t) {
a(t);
}
}
function c(t) {
var r;
t.done ? n(t.value) : (r = t.value, r instanceof e ? r : new e(function(t) {
t(r);
})).then(i, l);
}
c((o = o.apply(t, r || [])).next());
});
}, a = this && this.__generator || function(t, r) {
var e, o, n, a = {
label: 0,
sent: function() {
if (1 & n[0]) throw n[1];
return n[1];
},
trys: [],
ops: []
}, i = Object.create(("function" == typeof Iterator ? Iterator : Object).prototype);
return i.next = l(0), i.throw = l(1), i.return = l(2), "function" == typeof Symbol && (i[Symbol.iterator] = function() {
return this;
}), i;
function l(l) {
return function(c) {
return function(l) {
if (e) throw new TypeError("Generator is already executing.");
for (;i && (i = 0, l[0] && (a = 0)), a; ) try {
if (e = 1, o && (n = 2 & l[0] ? o.return : l[0] ? o.throw || ((n = o.return) && n.call(o), 
0) : o.next) && !(n = n.call(o, l[1])).done) return n;
switch (o = 0, n && (l = [ 2 & l[0], n.value ]), l[0]) {
case 0:
case 1:
n = l;
break;

case 4:
return a.label++, {
value: l[1],
done: !1
};

case 5:
a.label++, o = l[1], l = [ 0 ];
continue;

case 7:
l = a.ops.pop(), a.trys.pop();
continue;

default:
if (!((n = (n = a.trys).length > 0 && n[n.length - 1]) || 6 !== l[0] && 2 !== l[0])) {
a = 0;
continue;
}
if (3 === l[0] && (!n || l[1] > n[0] && l[1] < n[3])) {
a.label = l[1];
break;
}
if (6 === l[0] && a.label < n[1]) {
a.label = n[1], n = l;
break;
}
if (n && a.label < n[2]) {
a.label = n[2], a.ops.push(l);
break;
}
n[2] && a.ops.pop(), a.trys.pop();
continue;
}
l = r.call(t, a);
} catch (t) {
l = [ 6, t ], o = 0;
} finally {
e = n = 0;
}
if (5 & l[0]) throw l[1];
return {
value: l[0] ? l[1] : void 0,
done: !0
};
}([ l, c ]);
};
}
}, i = this && this.__read || function(t, r) {
var e = "function" == typeof Symbol && t[Symbol.iterator];
if (!e) return t;
var o, n, a = e.call(t), i = [];
try {
for (;(void 0 === r || r-- > 0) && !(o = a.next()).done; ) i.push(o.value);
} catch (t) {
n = {
error: t
};
} finally {
try {
o && !o.done && (e = a.return) && e.call(a);
} finally {
if (n) throw n.error;
}
}
return i;
}, l = this && this.__spreadArray || function(t, r, e) {
if (e || 2 === arguments.length) for (var o, n = 0, a = r.length; n < a; n++) !o && n in r || (o || (o = Array.prototype.slice.call(r, 0, n)), 
o[n] = r[n]);
return t.concat(o || Array.prototype.slice.call(r));
};
Object.defineProperty(r, "__esModule", {
value: !0
}), r.postprocess = function(t) {
return n(this, void 0, Promise, function() {
var r, e, n, b, _, T, C, O, P, R, L, E, I, x, k, D, w, N, j;
return a(this, function(a) {
switch (a.label) {
case 0:
if (h.AlgorithmStrategyAlgorithmListOperator._process = "post", t.process = f.AlgorithmStrategyProcessType.POSTPROCESS, 
delete t.returnState, delete t.returnStateProcessType, delete t.disabledTraits, 
delete t.disabledTags, delete t.disabledPostTags, delete t.disabledPostRestTags, 
delete t.routerTarget, delete t.currentExecuteGroupType, t.__traitAlgoSuccess__ = void 0, 
S.clear(), t.disablePostprocessSequence) return t.process = f.AlgorithmStrategyProcessType.POSTPROCESS_FAIL, 
c.algorithmStrategy.context.CC_DEBUG && g.AlgorithmStrategyLog.log("后处理阶段被禁用，无特性 runPostprocess 成功，标记失败", g.AlgorithmStrategyLog.POSTPROCESS_COLOR), 
delete t.disablePostprocessSequence, delete t.returnState, delete t.returnStateProcessType, 
delete t.disabledTraits, delete t.disabledTags, delete t.disabledPostTags, delete t.disabledPostRestTags, 
delete t.routerTarget, [ 2, o({}, t) ];
Object.defineProperty(t, "currentPostTag", {
get: function() {
return S.get(this);
},
enumerable: !0,
configurable: !0
}), r = c.algorithmStrategy.context.configs.ALGORITHM_STRATEGY_POSTPROCESS_TRAITS_CONFIG, 
e = 0, a.label = 1;

case 1:
if (!(e < r.length)) return [ 3, 13 ];
if (n = r[e], S.set(t, n.tag), b = "tag【".concat(e + 1, "/").concat(r.length, ":").concat(n.tag, "】"), 
!t.__traitAlgoSuccess__ && (null === (k = t.disabledPostTags) || void 0 === k ? void 0 : k.includes(n.tag))) return c.algorithmStrategy.context.CC_DEBUG && g.AlgorithmStrategyLog.log("后处理-跳过 ".concat(b, " 被 disabledPostTags 禁用"), g.AlgorithmStrategyLog.PREPROCESS_COLOR), 
[ 3, 12 ];
if (!t.__traitAlgoSuccess__ && t.disabledPostRestTags) return [ 2 ];
t.traits = l([], i(n.list.map(m)), !1), (null === (D = t.traits) || void 0 === D ? void 0 : D.length) > 0 && c.algorithmStrategy.context.CC_DEBUG && (g.AlgorithmStrategyLog.log("后处理-特性【".concat(b, "】执行列表："), g.AlgorithmStrategyLog.POSTPROCESS_COLOR), 
g.AlgorithmStrategyLog.table(t.traits.map(g.formatTraitNameWithDescription))), delete t.returnState, 
delete t.returnStateProcessType, delete t.disabledTraits, delete t.routerTarget, 
_ = 0, a.label = 2;

case 2:
if (!(_ < n.list.length)) return [ 3, 12 ];
if (T = n.list[_], C = m(T), !(O = "string" == typeof (K = T) ? {} : K).returnStateDisable && function(t) {
var r, e = t, o = e.returnState, n = e.returnStateProcessType;
return !!o && (!n || n === d.AlgorithmStrategyReturnStateProcessType.DEFAULT || n === d.AlgorithmStrategyReturnStateProcessType.POST_SDK_REQUEST_SUCCESS && !0 === (null === (r = t.sdk) || void 0 === r ? void 0 : r.SDK_SUCCESS));
}(t)) return [ 3, 11 ];
if (!O.disabledTraitsDisable && (null === (w = t.disabledTraits) || void 0 === w ? void 0 : w.includes(C))) return [ 3, 11 ];
if (null != (P = t.routerTarget)) {
if (C !== P) return [ 3, 11 ];
delete t.routerTarget;
}
return (null == (R = TRAIT(C)) ? void 0 : R.onActiveCondition) && (null == R ? void 0 : R.active) && function(t) {
return t && "function" == typeof t.onPostprocessConditions && "function" == typeof t.onPostprocessActions;
}(R) ? (c.algorithmStrategy.context.CONFLICT_DEBUG && p.AlgorithmStrategyConflictRecorder.recordTraitCall(C), 
function(t, r, e) {
var o;
if (!(null === (o = c.algorithmStrategy.context.ABTesting) || void 0 === o ? void 0 : o.postGroupPatch)) return !1;
var n = r.group, a = e > 0 ? t.list[e - 1] : void 0, i = a ? a.group : void 0;
return !(!n || n !== i);
}(n, T, _) || (h.AlgorithmStrategyAlgorithmListOperator.clearPostprocess(), Object.defineProperty(t, "postAlgorithmList", {
value: []
})), L = {
traitSource: C,
tag: n.tag,
traitIndex: _,
traitTotal: n.list.length,
trait: R
}, [ 4, (0, s.runPostprocess)(R, t, L) ]) : [ 3, 11 ];

case 3:
return a.sent().status ? (t.process = f.AlgorithmStrategyProcessType.POSTPROCESS_SUCCESS, 
[ 4, (0, u.invokeLifeCycle)(c.algorithmStrategy.context.configs.ALGORITHM_STRATEGY_POSTPROCESS_SDK_REQUEST_BEFORE_TRAITS_CONFIG, "onAfterOfferBefore", t) ]) : [ 3, 8 ];

case 4:
return a.sent(), A(n, T, _) ? [ 3, 7 ] : [ 4, (0, y.sdkRequest)(t, "postprocess") ];

case 5:
return E = a.sent(), [ 4, (0, u.invokeLifeCycle)(c.algorithmStrategy.context.configs.ALGORITHM_STRATEGY_POSTPROCESS_SDK_REQUEST_AFTER_TRAITS_CONFIG, "onPostSdkResult", E, C) ];

case 6:
a.sent(), a.label = 7;

case 7:
return (I = !0 === (null === (N = t.sdk) || void 0 === N ? void 0 : N.SDK_SUCCESS)) && t.__traitAlgoSuccess__ && (t.__traitAlgoSuccess__ = void 0), 
(x = t).returnStateProcessType === d.AlgorithmStrategyReturnStateProcessType.POST_SDK_REQUEST_SUCCESS && (I ? x.returnState = !0 : delete x.returnStateProcessType), 
t.process = I ? f.AlgorithmStrategyProcessType.POSTPROCESS_SDK_SUCCESS : f.AlgorithmStrategyProcessType.POSTPROCESS_SDK_FAIL, 
c.algorithmStrategy.context.CC_DEBUG && (I ? g.AlgorithmStrategyLog.log("✓ 后处理-特性：".concat(C).concat(window.traitConfigDebugInfo.getTraitClassNameDes(C), " 请求 SDK 执行成功!"), g.AlgorithmStrategyLog.SDK_COLOR) : g.AlgorithmStrategyLog.log("✗ 后处理-特性：".concat(C).concat(window.traitConfigDebugInfo.getTraitClassNameDes(C), " 请求 SDK 执行失败!"), g.AlgorithmStrategyLog.SDK_FAIL_COLOR)), 
[ 3, 9 ];

case 8:
(x = t).returnStateProcessType === d.AlgorithmStrategyReturnStateProcessType.POST_SDK_REQUEST_SUCCESS && delete x.returnStateProcessType, 
a.label = 9;

case 9:
return (null === (j = c.algorithmStrategy.context.ABTesting) || void 0 === j ? void 0 : j.postGroupPatch) ? [ 4, v(t, C, n, _, T) ] : [ 3, 11 ];

case 10:
a.sent(), a.label = 11;

case 11:
return _++, [ 3, 2 ];

case 12:
return e++, [ 3, 1 ];

case 13:
return t.process === f.AlgorithmStrategyProcessType.POSTPROCESS && (t.process = f.AlgorithmStrategyProcessType.POSTPROCESS_FAIL), 
delete t.returnState, delete t.returnStateProcessType, delete t.disabledTraits, 
delete t.disabledTags, delete t.disabledPostTags, delete t.disabledPostRestTags, 
delete t.routerTarget, [ 2 ];
}
var K;
});
});
};
var c = e(5800), s = e(578), u = e(9351), g = e(5815), h = e(261), f = e(7880), d = e(3381), y = e(3768), p = e(8011), S = new Map();
function m(t) {
return "string" == typeof t ? t : t.name;
}
function A(t, r, e) {
var o;
if (!(null === (o = c.algorithmStrategy.context.ABTesting) || void 0 === o ? void 0 : o.postGroupPatch)) return !1;
var n = r.group, a = e > 0 ? t.list[e - 1] : void 0, i = a ? a.group : void 0, l = e < t.list.length - 1 ? t.list[e + 1] : void 0, s = l ? l.group : void 0;
return !(!n || n !== s) || !(!n || n !== i);
}
function v(t, r, e, o, i) {
return n(this, void 0, void 0, function() {
var n, l, s;
return a(this, function(a) {
switch (a.label) {
case 0:
return n = "string" == typeof (g = i) ? void 0 : g.executeGroupType, l = o < e.list.length - 1 ? e.list[o + 1] : void 0, 
"string" != typeof i && n && i && i.group && (!(null == l ? void 0 : l.group) || i.group !== (null == l ? void 0 : l.group)) && A(e, i, o) ? (t.currentExecuteGroupType = n, 
[ 4, (0, y.sdkRequest)(t, "postprocess") ]) : [ 3, 3 ];

case 1:
return s = a.sent(), [ 4, (0, u.invokeLifeCycle)(c.algorithmStrategy.context.configs.ALGORITHM_STRATEGY_POSTPROCESS_SDK_REQUEST_AFTER_TRAITS_CONFIG, "onPostSdkResult", s, r) ];

case 2:
a.sent(), a.label = 3;

case 3:
return [ 2 ];
}
var g;
});
});
}
},
8459: function(t, r, e) {
var o = this && this.__assign || function() {
return (o = Object.assign || function(t) {
for (var r, e = 1, o = arguments.length; e < o; e++) for (var n in r = arguments[e]) Object.prototype.hasOwnProperty.call(r, n) && (t[n] = r[n]);
return t;
}).apply(this, arguments);
}, n = this && this.__read || function(t, r) {
var e = "function" == typeof Symbol && t[Symbol.iterator];
if (!e) return t;
var o, n, a = e.call(t), i = [];
try {
for (;(void 0 === r || r-- > 0) && !(o = a.next()).done; ) i.push(o.value);
} catch (t) {
n = {
error: t
};
} finally {
try {
o && !o.done && (e = a.return) && e.call(a);
} finally {
if (n) throw n.error;
}
}
return i;
}, a = this && this.__spreadArray || function(t, r, e) {
if (e || 2 === arguments.length) for (var o, n = 0, a = r.length; n < a; n++) !o && n in r || (o || (o = Array.prototype.slice.call(r, 0, n)), 
o[n] = r[n]);
return t.concat(o || Array.prototype.slice.call(r));
};
Object.defineProperty(r, "__esModule", {
value: !0
}), r.recordSuccessfulSDKResult = function(t, r) {
var e = null == r ? void 0 : r.traitSource, o = null == r ? void 0 : r.actualAlgorithmId;
(null == r ? void 0 : r.SDK_SUCCESS) && e && null != o && g(o, e, r.algorithmListSource, r, t);
}, r.finalizeRoundResult = function(t) {
var r;
if (!u.roundStats.roundFinalResultRecorded) {
var e, o, n, a = (null === (r = t.sdk) || void 0 === r ? void 0 : r.SDK_SUCCESS) ? t.sdk : void 0, l = s.gameStats.roundFinalResults.get(u.roundStats.roundIndex), c = null == a ? void 0 : a.traitSource, h = null == a ? void 0 : a.actualAlgorithmId, f = null == a ? void 0 : a.algorithmListSource, d = null != c ? c : null == l ? void 0 : l.traitSource, y = null != h ? h : null == l ? void 0 : l.algorithmId, p = null != f ? f : null == l ? void 0 : l.algorithmListSource;
d && null != y && (u.roundStats.roundFinalResultRecorded = !0, (null == a ? void 0 : a.SDK_SUCCESS) && g(y, d, p, a), 
i.algorithmStrategyRobotAlgorithmStats.record(y, d, null == a ? void 0 : a.blockNames), 
e = y, o = d, n = null == a ? void 0 : a.blockNames, s.gameStats.recordAlgorithmResult(e, o, n));
}
}, r.recordRoundFinalResult = g;
var i = e(3003), l = e(4727), c = e(4501), s = e(2574), u = e(2940);
function g(t, r, e, o, i) {
var g, f = s.gameStats.roundFinalResults.get(u.roundStats.roundIndex), d = u.roundStats.roundEvents.length > 0 ? Math.max.apply(Math, a([], n(u.roundStats.roundEvents.map(function(t) {
var r;
return null !== (r = t.operationOrder) && void 0 !== r ? r : t.id;
})), !1)) : void 0;
"postprocess" === i && f && "preprocess" === f.process && f.algorithmId !== t && (0, 
c.addEvent)({
type: l.AlgorithmStrategyConflictType.ALGORITHM_PRE_PROCESS_SDK_SUCCESS_BUT_POST_PROCESS_REPLACE,
severity: "warn",
process: "postprocess",
triggerTrait: r,
affectedTrait: f.traitSource,
algorithmId: f.algorithmId,
algorithmIds: [ f.algorithmId, t ],
reason: "预处理 SDK 成功后，后处理 SDK 替换了最终算法"
}), s.gameStats.roundFinalResults.set(u.roundStats.roundIndex, {
roundIndex: u.roundStats.roundIndex,
operationOrder: i ? d : null !== (g = null == f ? void 0 : f.operationOrder) && void 0 !== g ? g : d,
process: null != i ? i : null == f ? void 0 : f.process,
traitSource: r,
algorithmId: t,
algorithmListSource: e,
sdkData: h(o),
finalBlockListPatch: null == f ? void 0 : f.finalBlockListPatch,
finalAdjust: null == f ? void 0 : f.finalAdjust
});
}
function h(t) {
if (t) return {
source: t.source,
SDK_ALGO_TYPE: t.SDK_ALGO_TYPE,
SDK_Extra: null == t.SDK_Extra ? void 0 : JSON.parse(JSON.stringify(t.SDK_Extra)),
SDK_SUCCESS: t.SDK_SUCCESS,
actualAlgorithmId: t.actualAlgorithmId,
blockIds: null == t.blockIds ? void 0 : a([], n(t.blockIds), !1),
blockNames: null == t.blockNames ? void 0 : a([], n(t.blockNames), !1),
blockPoses: null == t.blockPoses ? void 0 : t.blockPoses.map(function(t) {
return o({}, t);
}),
betterBlockCount: t.betterBlockCount,
betterSpaceCount: t.betterSpaceCount
};
}
},
8637: function(t, r) {
var e = this && this.__read || function(t, r) {
var e = "function" == typeof Symbol && t[Symbol.iterator];
if (!e) return t;
var o, n, a = e.call(t), i = [];
try {
for (;(void 0 === r || r-- > 0) && !(o = a.next()).done; ) i.push(o.value);
} catch (t) {
n = {
error: t
};
} finally {
try {
o && !o.done && (e = a.return) && e.call(a);
} finally {
if (n) throw n.error;
}
}
return i;
}, o = this && this.__spreadArray || function(t, r, e) {
if (e || 2 === arguments.length) for (var o, n = 0, a = r.length; n < a; n++) !o && n in r || (o || (o = Array.prototype.slice.call(r, 0, n)), 
o[n] = r[n]);
return t.concat(o || Array.prototype.slice.call(r));
};
Object.defineProperty(r, "__esModule", {
value: !0
}), r.algorithmStrategyDot = void 0, r.toAlgorithmStrategyDotItem = function(t) {
return {
algorithmId: t.algorithmId,
source: t.source,
traitSource: t.traitSource
};
};
var n = function() {
function t() {
this._preprocessPriorityList = [], this._preprocessNormalList = [], this._preprocessFallbackList = [], 
this._postprocessSuccessNormalList = [], this._snapshotCache = null;
}
return t.prototype.clear = function() {
this._snapshotCache = null, this._preprocessPriorityList.length = 0, this._preprocessNormalList.length = 0, 
this._preprocessFallbackList.length = 0, this._postprocessSuccessNormalList.length = 0;
}, Object.defineProperty(t.prototype, "preprocessPriorityList", {
get: function() {
return this._preprocessPriorityList;
},
enumerable: !1,
configurable: !0
}), Object.defineProperty(t.prototype, "preprocessNormalList", {
get: function() {
return this._preprocessNormalList.concat();
},
enumerable: !1,
configurable: !0
}), Object.defineProperty(t.prototype, "preprocessFallbackList", {
get: function() {
return this._preprocessFallbackList.concat();
},
enumerable: !1,
configurable: !0
}), Object.defineProperty(t.prototype, "postprocessSuccessNormalList", {
get: function() {
return this._postprocessSuccessNormalList.concat();
},
enumerable: !1,
configurable: !0
}), t.prototype.getSnapshot = function() {
return this._snapshotCache || (this._snapshotCache = {
preprocessPriorityList: this.preprocessPriorityList,
preprocessNormalList: this.preprocessNormalList,
preprocessFallbackList: this.preprocessFallbackList,
postprocessSuccessNormalList: this.postprocessSuccessNormalList
}), this._snapshotCache;
}, t.prototype.preprocessPriorityPush = function(t) {
var r;
this._snapshotCache = null, (r = this._preprocessPriorityList).push.apply(r, o([], e(t), !1));
}, t.prototype.preprocessNormalPush = function(t) {
var r;
this._snapshotCache = null, (r = this._preprocessNormalList).push.apply(r, o([], e(t), !1));
}, t.prototype.preprocessFallbackPush = function(t) {
var r;
this._snapshotCache = null, (r = this._preprocessFallbackList).push.apply(r, o([], e(t), !1));
}, t.prototype.postprocessSuccessNormalPush = function(t) {
var r;
this._snapshotCache = null, (r = this._postprocessSuccessNormalList).push.apply(r, o([], e(t), !1));
}, t;
}();
r.algorithmStrategyDot = new n();
},
8742: (t, r, e) => {
Object.defineProperty(r, "__esModule", {
value: !0
}), r.ALGORITHM_STRATEGY_OPERATOR_MAP = void 0;
var o = e(9423), n = e(261), a = e(8281), i = e(3325), l = e(2688), c = e(7044), s = e(7176), u = e(2166), g = e(7388), h = e(6507);
r.ALGORITHM_STRATEGY_OPERATOR_MAP = {
AlgorithmStrategyAlgorithmPriorityListOperator: i.AlgorithmStrategyAlgorithmPriorityListOperator,
AlgorithmStrategyAlgorithmListOperator: n.AlgorithmStrategyAlgorithmListOperator,
AlgorithmStrategyAlgorithmPostListPatchOperator: a.AlgorithmStrategyAlgorithmPostListPatchOperator,
AlgorithmStrategyAlgorithmFallbackListOperator: o.AlgorithmStrategyAlgorithmFallbackListOperator,
AlgorithmStrategyDisableOperator: l.AlgorithmStrategyDisableOperator,
AlgorithmStrategyDisableShareSequenceOperator: s.AlgorithmStrategyDisableShareSequenceOperator,
AlgorithmStrategyDisablePostprocessSequenceOperator: c.AlgorithmStrategyDisablePostprocessSequenceOperator,
AlgorithmStrategyReturnOperator: g.AlgorithmStrategyReturnOperator,
AlgorithmStrategyReturnFilterOperator: u.AlgorithmStrategyReturnFilterOperator,
AlgorithmStrategyRouterOperator: h.AlgorithmStrategyRouterOperator
};
},
8978: (t, r) => {
var e;
Object.defineProperty(r, "__esModule", {
value: !0
}), r.AlgorithmStrategyCategoryType = void 0, function(t) {
t.BASE = "基础类", t.SHANG = "熵增类", t.BLACK = "填空消除类", t.DIFFICULT = "困难难题类", t.DIE = "死亡难题类";
}(e || (r.AlgorithmStrategyCategoryType = e = {}));
},
9016: function(t, r, e) {
var o = this && this.__decorate || function(t, r, e, o) {
var n, a = arguments.length, i = a < 3 ? r : null === o ? o = Object.getOwnPropertyDescriptor(r, e) : o;
if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) i = Reflect.decorate(t, r, e, o); else for (var l = t.length - 1; l >= 0; l--) (n = t[l]) && (i = (a < 3 ? n(i) : a > 3 ? n(r, e, i) : n(r, e)) || i);
return a > 3 && i && Object.defineProperty(r, e, i), i;
};
Object.defineProperty(r, "__esModule", {
value: !0
}), r.AlgorithmStrategyAlgorithmPriorityListPatch = void 0;
var n, a = e(3325), i = e(4246), l = e(7594), c = function() {
function t() {}
return t.patch = function(t) {
if (function(t, r) {
return void 0 !== t && t === r && t.length === r.length && JSON.stringify(t) === JSON.stringify(r);
}(n, t)) return !1;
for (var r = 0; r < t.length; r++) {
var e = t[r];
e.category = (0, i.getCategoryForAlgorithm)(e.algorithmId), e.algorithmListSource = "priority";
}
return n = t, !0;
}, Object.defineProperty(t, "algorithmPriorityList", {
get: function() {
return a.AlgorithmStrategyAlgorithmPriorityListOperator.algorithmPriorityList;
},
enumerable: !1,
configurable: !0
}), o([ (0, l.patch)({
patchKey: "algorithmPriorityList",
getStored: function() {
return n;
}
}) ], t, "patch", null), t;
}();
r.AlgorithmStrategyAlgorithmPriorityListPatch = c;
},
9223: (t, r) => {
var e, o;
Object.defineProperty(r, "__esModule", {
value: !0
}), r.GameType = r.GameMode = void 0, function(t) {
t.Class = "class", t.Chapter = "journey", t.Jewel = "jewel", t.StarMiniGame = "starMiniGame", 
t.AdventureGame = "adventureGame", t.MergeBlocks = "mergeBlocks", t.RoyalMatchStory = "royalMatchStory";
}(e || (r.GameMode = e = {})), function(t) {
t[t.Class = 0] = "Class", t[t.Chapter = 2] = "Chapter", t[t.Jewel = 6] = "Jewel", 
t[t.StarMiniGame = 15] = "StarMiniGame", t[t.AdventureGame = 12] = "AdventureGame", 
t[t.MergeBlocks = 16] = "MergeBlocks", t[t.RoyalMatchStory = 18] = "RoyalMatchStory";
}(o || (r.GameType = o = {}));
},
9351: function(t, r, e) {
var o = this && this.__awaiter || function(t, r, e, o) {
return new (e || (e = Promise))(function(n, a) {
function i(t) {
try {
c(o.next(t));
} catch (t) {
a(t);
}
}
function l(t) {
try {
c(o.throw(t));
} catch (t) {
a(t);
}
}
function c(t) {
var r;
t.done ? n(t.value) : (r = t.value, r instanceof e ? r : new e(function(t) {
t(r);
})).then(i, l);
}
c((o = o.apply(t, r || [])).next());
});
}, n = this && this.__generator || function(t, r) {
var e, o, n, a = {
label: 0,
sent: function() {
if (1 & n[0]) throw n[1];
return n[1];
},
trys: [],
ops: []
}, i = Object.create(("function" == typeof Iterator ? Iterator : Object).prototype);
return i.next = l(0), i.throw = l(1), i.return = l(2), "function" == typeof Symbol && (i[Symbol.iterator] = function() {
return this;
}), i;
function l(l) {
return function(c) {
return function(l) {
if (e) throw new TypeError("Generator is already executing.");
for (;i && (i = 0, l[0] && (a = 0)), a; ) try {
if (e = 1, o && (n = 2 & l[0] ? o.return : l[0] ? o.throw || ((n = o.return) && n.call(o), 
0) : o.next) && !(n = n.call(o, l[1])).done) return n;
switch (o = 0, n && (l = [ 2 & l[0], n.value ]), l[0]) {
case 0:
case 1:
n = l;
break;

case 4:
return a.label++, {
value: l[1],
done: !1
};

case 5:
a.label++, o = l[1], l = [ 0 ];
continue;

case 7:
l = a.ops.pop(), a.trys.pop();
continue;

default:
if (!((n = (n = a.trys).length > 0 && n[n.length - 1]) || 6 !== l[0] && 2 !== l[0])) {
a = 0;
continue;
}
if (3 === l[0] && (!n || l[1] > n[0] && l[1] < n[3])) {
a.label = l[1];
break;
}
if (6 === l[0] && a.label < n[1]) {
a.label = n[1], n = l;
break;
}
if (n && a.label < n[2]) {
a.label = n[2], a.ops.push(l);
break;
}
n[2] && a.ops.pop(), a.trys.pop();
continue;
}
l = r.call(t, a);
} catch (t) {
l = [ 6, t ], o = 0;
} finally {
e = n = 0;
}
if (5 & l[0]) throw l[1];
return {
value: l[0] ? l[1] : void 0,
done: !0
};
}([ l, c ]);
};
}
}, a = this && this.__values || function(t) {
var r = "function" == typeof Symbol && Symbol.iterator, e = r && t[r], o = 0;
if (e) return e.call(t);
if (t && "number" == typeof t.length) return {
next: function() {
return t && o >= t.length && (t = void 0), {
value: t && t[o++],
done: !t
};
}
};
throw new TypeError(r ? "Object is not iterable." : "Symbol.iterator is not defined.");
}, i = this && this.__read || function(t, r) {
var e = "function" == typeof Symbol && t[Symbol.iterator];
if (!e) return t;
var o, n, a = e.call(t), i = [];
try {
for (;(void 0 === r || r-- > 0) && !(o = a.next()).done; ) i.push(o.value);
} catch (t) {
n = {
error: t
};
} finally {
try {
o && !o.done && (e = a.return) && e.call(a);
} finally {
if (n) throw n.error;
}
}
return i;
}, l = this && this.__spreadArray || function(t, r, e) {
if (e || 2 === arguments.length) for (var o, n = 0, a = r.length; n < a; n++) !o && n in r || (o || (o = Array.prototype.slice.call(r, 0, n)), 
o[n] = r[n]);
return t.concat(o || Array.prototype.slice.call(r));
};
Object.defineProperty(r, "__esModule", {
value: !0
}), r.invokeLifeCycle = function(t, r) {
for (var e = [], g = 2; g < arguments.length; g++) e[g - 2] = arguments[g];
return o(this, void 0, Promise, function() {
var o, g, h, f, d, y, p, S, m, A, v, b;
return n(this, function(n) {
switch (n.label) {
case 0:
o = Array.from(new Set(t)), g = [], h = [], n.label = 1;

case 1:
n.trys.push([ 1, 6, 7, 8 ]), f = a(o), d = f.next(), n.label = 2;

case 2:
return d.done ? [ 3, 5 ] : (y = d.value, (null == g ? void 0 : g.includes(y)) ? [ 3, 4 ] : (null == (p = TRAIT(y)) ? void 0 : p.onActiveCondition) && (null == p ? void 0 : p.active) && "function" == typeof p[r] ? (u.algorithmStrategy.context.CC_DEBUG && s.AlgorithmStrategyLog.log("".concat((0, 
s.formatTraitNameWithDescription)(y), " 执行了生命周期【").concat(r, "】方法"), s.AlgorithmStrategyLog.SDK_COLOR), 
u.algorithmStrategy.context.CONFLICT_DEBUG && c.AlgorithmStrategyConflictRecorder.recordTraitTrigger(y), 
[ 4, p[r].apply(p, l([], i(e), !1)) ]) : [ 3, 4 ]);

case 3:
S = n.sent(), h.push(S), "object" == typeof S && null !== S && void 0 !== S.disableTraits && (m = S.disableTraits, 
g = l([], i(new Set(l(l([], i(g), !1), i(m), !1))), !1)), n.label = 4;

case 4:
return d = f.next(), [ 3, 2 ];

case 5:
return [ 3, 8 ];

case 6:
return A = n.sent(), v = {
error: A
}, [ 3, 8 ];

case 7:
try {
d && !d.done && (b = f.return) && b.call(f);
} finally {
if (v) throw v.error;
}
return [ 7 ];

case 8:
return [ 2, h ];
}
});
});
}, r.invokeSelfLifeCycle = function(t, r) {
for (var e = [], a = 2; a < arguments.length; a++) e[a - 2] = arguments[a];
return o(this, void 0, Promise, function() {
var o;
return n(this, function(n) {
switch (n.label) {
case 0:
return (null == (o = TRAIT(t)) ? void 0 : o.onActiveCondition) && (null == o ? void 0 : o.active) && "function" == typeof o[r] ? [ 4, o[r].apply(o, l([], i(e), !1)) ] : [ 3, 2 ];

case 1:
n.sent(), n.label = 2;

case 2:
return [ 2 ];
}
});
});
}, r.invokeTaggedLifeCycle = function(t, r) {
for (var e = [], g = 2; g < arguments.length; g++) e[g - 2] = arguments[g];
return o(this, void 0, Promise, function() {
var o, g, h, f, d, y, p, S, m, A, v, b, _, T, C, O, P, R, L, E;
return n(this, function(n) {
switch (n.label) {
case 0:
o = [], g = [], n.label = 1;

case 1:
n.trys.push([ 1, 12, 13, 14 ]), h = a(t), f = h.next(), n.label = 2;

case 2:
if (f.done) return [ 3, 11 ];
d = f.value, y = !1, n.label = 3;

case 3:
n.trys.push([ 3, 8, 9, 10 ]), L = void 0, p = a(d.list), S = p.next(), n.label = 4;

case 4:
return S.done ? [ 3, 7 ] : (m = S.value, A = "string" == typeof m ? m : m.name, 
("string" == typeof m || !m.returnStateDisable) && y || (null == o ? void 0 : o.includes(A)) ? [ 3, 6 ] : (null == (v = TRAIT(A)) ? void 0 : v.onActiveCondition) && (null == v ? void 0 : v.active) && "function" == typeof v[r] ? (u.algorithmStrategy.context.CC_DEBUG && s.AlgorithmStrategyLog.log("".concat((0, 
s.formatTraitNameWithDescription)(A), " 执行了生命周期【").concat(r, "·tag:").concat(d.tag, "】方法"), s.AlgorithmStrategyLog.SDK_COLOR), 
u.algorithmStrategy.context.CONFLICT_DEBUG && c.AlgorithmStrategyConflictRecorder.recordTraitTrigger(A), 
[ 4, v[r].apply(v, l([ d.tag ], i(e), !1)) ]) : [ 3, 6 ]);

case 5:
b = n.sent(), g.push(b), "object" == typeof b && null !== b && (void 0 !== (_ = b).disableTraits && (T = _.disableTraits, 
o = l([], i(new Set(l(l([], i(o), !1), i(T), !1))), !1)), _.returnState && (y = !0)), 
n.label = 6;

case 6:
return S = p.next(), [ 3, 4 ];

case 7:
return [ 3, 10 ];

case 8:
return C = n.sent(), L = {
error: C
}, [ 3, 10 ];

case 9:
try {
S && !S.done && (E = p.return) && E.call(p);
} finally {
if (L) throw L.error;
}
return [ 7 ];

case 10:
return f = h.next(), [ 3, 2 ];

case 11:
return [ 3, 14 ];

case 12:
return O = n.sent(), P = {
error: O
}, [ 3, 14 ];

case 13:
try {
f && !f.done && (R = h.return) && R.call(h);
} finally {
if (P) throw P.error;
}
return [ 7 ];

case 14:
return [ 2, g ];
}
});
});
};
var c = e(8011), s = e(5815), u = e(5800);
},
9423: function(t, r, e) {
var o = this && this.__read || function(t, r) {
var e = "function" == typeof Symbol && t[Symbol.iterator];
if (!e) return t;
var o, n, a = e.call(t), i = [];
try {
for (;(void 0 === r || r-- > 0) && !(o = a.next()).done; ) i.push(o.value);
} catch (t) {
n = {
error: t
};
} finally {
try {
o && !o.done && (e = a.return) && e.call(a);
} finally {
if (n) throw n.error;
}
}
return i;
}, n = this && this.__spreadArray || function(t, r, e) {
if (e || 2 === arguments.length) for (var o, n = 0, a = r.length; n < a; n++) !o && n in r || (o || (o = Array.prototype.slice.call(r, 0, n)), 
o[n] = r[n]);
return t.concat(o || Array.prototype.slice.call(r));
}, a = this && this.__values || function(t) {
var r = "function" == typeof Symbol && Symbol.iterator, e = r && t[r], o = 0;
if (e) return e.call(t);
if (t && "number" == typeof t.length) return {
next: function() {
return t && o >= t.length && (t = void 0), {
value: t && t[o++],
done: !t
};
}
};
throw new TypeError(r ? "Object is not iterable." : "Symbol.iterator is not defined.");
};
Object.defineProperty(r, "__esModule", {
value: !0
}), r.AlgorithmStrategyAlgorithmFallbackListOperator = void 0;
var i = e(4246), l = [], c = function() {
function t() {}
return Object.defineProperty(t, "algorithmFallbackList", {
get: function() {
return Object.freeze(n([], o(l), !1));
},
enumerable: !1,
configurable: !0
}), t.unshift = function(r) {
return !(0, i.isAbsentAlgorithmIdArg)(r) && (l.unshift.apply(l, n([], o((0, i.transformAlgorithmId)(r, t.unshift.options)), !1)), 
!0);
}, t.push = function(r) {
return !(0, i.isAbsentAlgorithmIdArg)(r) && (l.push.apply(l, n([], o((0, i.transformAlgorithmId)(r, t.push.options)), !1)), 
!0);
}, t.insertBefore = function(r, e) {
if (null == r || (0, i.isAbsentAlgorithmIdArg)(e)) return !1;
var a = l.findIndex(function(t) {
return t.algorithmId === r;
});
return -1 !== a && (l.splice.apply(l, n([ a, 0 ], o((0, i.transformAlgorithmId)(e, t.insertBefore.options)), !1)), 
!0);
}, t.insertAfter = function(r, e) {
if (null == r || (0, i.isAbsentAlgorithmIdArg)(e)) return !1;
var a = l.findIndex(function(t) {
return t.algorithmId === r;
});
return -1 !== a && (l.splice.apply(l, n([ a + 1, 0 ], o((0, i.transformAlgorithmId)(e, t.insertAfter.options)), !1)), 
!0);
}, t.remove = function(t) {
if ((0, i.isAbsentAlgorithmIdArg)(t)) return !1;
var r = (0, i.toArray)(t), e = new Set(r), o = l.filter(function(t) {
return !e.has(t.algorithmId);
}), n = o.length !== l.length;
return n && (l = o), n;
}, t.removeCategory = function(t) {
if (null == t) return !1;
var r = (0, i.CATEGORY_TO_ENUM)()[t], e = l.filter(function(t) {
return !Object.values(r).includes(t.algorithmId);
}), o = e.length !== l.length;
return o && (l = e), o;
}, t.replaceFirst = function(r, e) {
if ((0, i.isAbsentAlgorithmIdArg)(r) || (0, i.isAbsentAlgorithmIdArg)(e)) return !1;
var a = (0, i.toArray)(r), c = new Set(a), s = (0, i.transformAlgorithmId)(e, t.replaceFirst.options), u = l.findIndex(function(t) {
return c.has(t.algorithmId);
});
if (-1 === u) return !1;
var g = n([], o(l), !1);
return g.splice.apply(g, n([ u, 1 ], o(s), !1)), l = g, !0;
}, t.replace = function(r, e) {
var c, s;
if ((0, i.isAbsentAlgorithmIdArg)(r) || (0, i.isAbsentAlgorithmIdArg)(e)) return !1;
var u = (0, i.toArray)(r), g = new Set(u), h = (0, i.transformAlgorithmId)(e, t.replace.options), f = !1, d = [];
try {
for (var y = a(l), p = y.next(); !p.done; p = y.next()) {
var S = p.value;
g.has(S.algorithmId) ? (d.push.apply(d, n([], o(h), !1)), f = !0) : d.push(S);
}
} catch (t) {
c = {
error: t
};
} finally {
try {
p && !p.done && (s = y.return) && s.call(y);
} finally {
if (c) throw c.error;
}
}
return f && (l = d), f;
}, t.replaceCategory = function(r, e) {
var c, s;
if (null == r || (0, i.isAbsentAlgorithmIdArg)(e)) return !1;
var u = (0, i.CATEGORY_TO_ENUM)()[r], g = !1, h = [];
try {
for (var f = a(l), d = f.next(); !d.done; d = f.next()) {
var y = d.value;
Object.values(u).includes(y.algorithmId) ? (h.push.apply(h, n([], o((0, i.transformAlgorithmId)(e, t.replaceCategory.options)), !1)), 
g = !0) : h.push(y);
}
} catch (t) {
c = {
error: t
};
} finally {
try {
d && !d.done && (s = f.return) && s.call(f);
} finally {
if (c) throw c.error;
}
}
return g && (l = h), g;
}, t.replaceAll = function(r) {
return !(0, i.isAbsentReplaceAllAlgorithmIdArg)(r) && (l = (0, i.transformAlgorithmId)(r, t.replaceAll.options), 
!0);
}, t.clear = function() {
l.length = 0;
}, t;
}();
r.AlgorithmStrategyAlgorithmFallbackListOperator = c;
},
9747: function(t, r, e) {
var o = this && this.__decorate || function(t, r, e, o) {
var n, a = arguments.length, i = a < 3 ? r : null === o ? o = Object.getOwnPropertyDescriptor(r, e) : o;
if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) i = Reflect.decorate(t, r, e, o); else for (var l = t.length - 1; l >= 0; l--) (n = t[l]) && (i = (a < 3 ? n(i) : a > 3 ? n(r, e, i) : n(r, e)) || i);
return a > 3 && i && Object.defineProperty(r, e, i), i;
};
Object.defineProperty(r, "__esModule", {
value: !0
}), r.AlgorithmStrategyPositionAdjustPatch = void 0;
var n, a = e(7594), i = function() {
function t() {}
return t.patch = function(t) {
return n !== t && (n = t, !0);
}, o([ (0, a.patch)({
patchKey: "positionAdjust",
getStored: function() {
return n;
}
}) ], t, "patch", null), t;
}();
r.AlgorithmStrategyPositionAdjustPatch = i;
},
9876: function(t, r, e) {
var o = this && this.__read || function(t, r) {
var e = "function" == typeof Symbol && t[Symbol.iterator];
if (!e) return t;
var o, n, a = e.call(t), i = [];
try {
for (;(void 0 === r || r-- > 0) && !(o = a.next()).done; ) i.push(o.value);
} catch (t) {
n = {
error: t
};
} finally {
try {
o && !o.done && (e = a.return) && e.call(a);
} finally {
if (n) throw n.error;
}
}
return i;
}, n = this && this.__spreadArray || function(t, r, e) {
if (e || 2 === arguments.length) for (var o, n = 0, a = r.length; n < a; n++) !o && n in r || (o || (o = Array.prototype.slice.call(r, 0, n)), 
o[n] = r[n]);
return t.concat(o || Array.prototype.slice.call(r));
}, a = this && this.__values || function(t) {
var r = "function" == typeof Symbol && Symbol.iterator, e = r && t[r], o = 0;
if (e) return e.call(t);
if (t && "number" == typeof t.length) return {
next: function() {
return t && o >= t.length && (t = void 0), {
value: t && t[o++],
done: !t
};
}
};
throw new TypeError(r ? "Object is not iterable." : "Symbol.iterator is not defined.");
};
Object.defineProperty(r, "__esModule", {
value: !0
}), r.snapshot = function() {
var t, r, e = l.algorithmStrategyRobotAlgorithmStats.snapshot(), a = e.algorithmCounts, i = e.algorithmBlockNameCounts, h = e.algorithmBlockNameTraitsCounts, p = e.algorithmTraitsAlgorithmNameCounts, S = e.finalResultTraitAlgorithmCounts, m = e.partialActionSuccessRecords;
return {
gameIndex: s.gameStats.gameIndex,
roundIndex: u.roundStats.roundIndex,
events: Object.freeze(n([], o(s.gameStats.events), !1)),
roundEvents: Object.freeze(n([], o(u.roundStats.roundEvents), !1)),
roundTraitStateChanges: Object.freeze(n([], o(u.roundStats.roundTraitStateChanges), !1)),
roundTraitSharedTargetChanges: Object.freeze(n([], o(u.roundStats.roundTraitSharedTargetChanges), !1)),
roundTraitStats: g(u.roundStats.roundTraitCallCount, u.roundStats.roundEvents, !0),
gameTraitStats: g(s.gameStats.traitCallCount, s.gameStats.events, !1),
sessionTraitStats: g(c.sessionStats.allTraitCallCount, c.sessionStats.allEvents, !1, !0),
traitTriggerStats: Object.freeze(n([], o(c.sessionStats.traitTriggerCount.entries()), !1).map(function(t) {
var r = o(t, 2);
return {
trait: r[0],
triggerCount: r[1]
};
}).sort(function(t, r) {
return r.triggerCount - t.triggerCount;
})),
algorithmStats: a,
algorithmBlockNameStats: i,
algorithmBlockNameTraitsCounts: h,
algorithmTraitsAlgorithmNameCounts: p,
finalResultTraitAlgorithmCounts: S,
gameAlgorithmStats: y(s.gameStats.getAlgorithmCount(), s.gameStats.getAlgorithmLastTraitSource(), s.gameStats.getAlgorithmTraitCount()),
gameAlgorithmBlockNameStats: f(null !== (t = s.gameStats.gameAlgorithmBlockNameCount.get(s.gameStats.gameIndex)) && void 0 !== t ? t : new Map(), null !== (r = s.gameStats.gameAlgorithmBlockNames.get(s.gameStats.gameIndex)) && void 0 !== r ? r : new Map()),
algorithmGameStats: Object.freeze(n([], o(s.gameStats.gameAlgorithmCount.keys()), !1).filter(function(t) {
var r, e;
return (null !== (e = null === (r = s.gameStats.gameAlgorithmCount.get(t)) || void 0 === r ? void 0 : r.size) && void 0 !== e ? e : 0) > 0;
}).sort(function(t, r) {
return t - r;
}).map(function(t) {
var r, e, a, i, l, c, u, g, h;
return {
gameIndex: t,
stats: y(null !== (r = s.gameStats.gameAlgorithmCount.get(t)) && void 0 !== r ? r : new Map(), null !== (e = s.gameStats.gameAlgorithmLastTraitSource.get(t)) && void 0 !== e ? e : new Map(), null !== (a = s.gameStats.gameAlgorithmTraitCount.get(t)) && void 0 !== a ? a : new Map()),
blockNameStats: f(null !== (i = s.gameStats.gameAlgorithmBlockNameCount.get(t)) && void 0 !== i ? i : new Map(), null !== (l = s.gameStats.gameAlgorithmBlockNames.get(t)) && void 0 !== l ? l : new Map()),
blockNameTraitsStats: (g = null !== (c = s.gameStats.gameAlgorithmBlockNameCount.get(t)) && void 0 !== c ? c : new Map(), 
h = null !== (u = s.gameStats.gameAlgorithmBlockNameTraitCount.get(t)) && void 0 !== u ? u : new Map(), 
Object.freeze(n([], o(g.entries()), !1).map(function(t) {
var r = o(t, 2), e = r[0], n = r[1];
return {
blockNameKey: e,
traitsCounts: d(h.get(e)),
count: n
};
}).filter(function(t) {
return t.count > 0 && t.traitsCounts.length > 0;
}).sort(function(t, r) {
return r.count - t.count || t.blockNameKey.localeCompare(r.blockNameKey);
})))
};
})),
roundFinalResults: Object.freeze(n([], o(s.gameStats.roundFinalResults.values()), !1).sort(function(t, r) {
return t.roundIndex - r.roundIndex;
})),
partialActionSuccessRecords: m
};
};
var i = e(4727), l = e(3003), c = e(5600), s = e(2574), u = e(2940);
function g(t, r, e, l) {
var c, s;
void 0 === l && (l = !1);
var u = new Map(), g = new Map(), f = new Map();
try {
for (var d = a(r), y = d.next(); !y.done; y = d.next()) {
var p = y.value, S = "affectedTrait" in p ? p.affectedTrait : void 0;
if (S) {
var m = e ? p.roundAffectedTraitCallIndex : p.affectedTraitCallIndex, A = l ? "".concat(p.gameIndex, ":") : "", v = m && m > 0 ? "".concat(A).concat(m) : "".concat(A, "event:").concat(p.id);
"warn" === p.severity ? h(f, S, v) : "conflict" === p.severity && (h(u, S, v), p.type === i.AlgorithmStrategyConflictType.ALGORITHM_OPERATOR_UNSUCCESS && h(g, S, v));
}
}
} catch (t) {
c = {
error: t
};
} finally {
try {
y && !y.done && (s = d.return) && s.call(d);
} finally {
if (c) throw c.error;
}
}
var b = new Set(n(n(n(n([], o(t.keys()), !1), o(u.keys()), !1), o(g.keys()), !1), o(f.keys()), !1));
return Object.freeze(n([], o(b), !1).map(function(r) {
var e, o, n, a, i, l, c, s = null !== (e = t.get(r)) && void 0 !== e ? e : 0, h = null !== (n = null === (o = u.get(r)) || void 0 === o ? void 0 : o.size) && void 0 !== n ? n : 0, d = null !== (i = null === (a = g.get(r)) || void 0 === a ? void 0 : a.size) && void 0 !== i ? i : 0;
return {
trait: r,
callCount: s,
conflictCount: h,
ineffectiveCount: d,
warnCount: null !== (c = null === (l = f.get(r)) || void 0 === l ? void 0 : l.size) && void 0 !== c ? c : 0,
probability: s > 0 ? h / s : 0,
ineffectiveProbability: s > 0 ? d / s : 0
};
}));
}
function h(t, r, e) {
var o = t.get(r);
o || (o = new Set(), t.set(r, o)), o.add(e);
}
function f(t, r) {
return Object.freeze(n([], o(t.entries()), !1).map(function(t) {
var e, n = o(t, 2), a = n[0], i = n[1];
return {
blockNameKey: a,
blockNames: null !== (e = r.get(a)) && void 0 !== e ? e : a.split(l.ALGORITHM_BLOCK_NAME_SEPARATOR),
count: i
};
}).sort(function(t, r) {
return r.count - t.count || t.blockNameKey.localeCompare(r.blockNameKey);
}));
}
function d(t) {
return t ? n([], o(t.entries()), !1).map(function(t) {
var r = o(t, 2);
return {
traitClassName: r[0],
count: r[1]
};
}).sort(function(t, r) {
return r.count - t.count || t.traitClassName.localeCompare(r.traitClassName);
}) : [];
}
function y(t, r, e) {
return void 0 === e && (e = new Map()), Object.freeze(n([], o(t.entries()), !1).map(function(t) {
var n = o(t, 2), a = n[0], i = {
algorithmId: a,
count: n[1]
}, l = r.get(a), c = d(e.get(a));
return l && (i.lastTraitSource = l), c.length > 0 && (i.traitsCounts = c), i;
}).sort(function(t, r) {
return r.count - t.count;
}));
}
}
}, r = {};
function e(o) {
var n = r[o];
if (void 0 !== n) return n.exports;
var a = r[o] = {
exports: {}
};
return t[o].call(a.exports, a, a.exports, e), a.exports;
}
(() => {
var t = e(5800), r = e(5213), o = e(5931), n = e(7209), a = e(2698), i = e(4046), l = e(3817), c = e(3165), s = e(9747), u = e(801), g = e(8088), h = e(7894), f = e(9016), d = e(5492), y = e(4050), p = e(1174), S = e(8329), m = e(7728), A = e(2196), v = e(304), b = e(5706), _ = e(8243), T = e(6573), C = e(7611), O = e(3381), P = e(7880), R = e(8011), L = e(4727), E = e(8637);
e(4312), e(8011), e(6074), e(2848), e(2436), e(4386), e(578), e(9351), e(2688), 
e(7176), e(4246), e(8742), e(2166), e(7388), e(6507), e(7594), e(4846), e(6024), 
e(2806), e(3374), e(8350), e(3768), e(6320), e(4057), e(2230), e(6136), e(7880), 
e(4727), e(777);
var I = {
AlgorithmStrategyAlgoBlockPosListPatch: n.AlgorithmStrategyAlgoBlockPosListPatch,
AlgorithmStrategyAlgoExtraPatch: a.AlgorithmStrategyAlgoExtraPatch,
AlgorithmStrategyAlgoSdkRequestAfterActualIdPatch: i.AlgorithmStrategyAlgoSdkRequestAfterActualIdPatch,
AlgorithmStrategyAlgoSdkRequestBeforeActualIdPatch: l.AlgorithmStrategyAlgoSdkRequestBeforeActualIdPatch,
AlgorithmStrategyAlgoExpectedIdPatch: c.AlgorithmStrategyAlgoExpectedIdPatch,
AlgorithmStrategyPositionAdjustPatch: s.AlgorithmStrategyPositionAdjustPatch,
AlgorithmStrategyAlgoActualNamePatch: u.AlgorithmStrategyAlgoActualNamePatch,
AlgorithmStrategyAlgoBlockIdListPatch: g.AlgorithmStrategyAlgoBlockIdListPatch,
AlgorithmStrategyAlgorithmPriorityListPatch: f.AlgorithmStrategyAlgorithmPriorityListPatch,
AlgorithmStrategyAlgorithmListPatch: d.AlgorithmStrategyAlgorithmListPatch,
AlgorithmStrategyAlgorithmPostListPatch: y.AlgorithmStrategyAlgorithmPostListPatch,
AlgorithmStrategyAlgorithmFallbackListPatch: p.AlgorithmStrategyAlgorithmFallbackListPatch,
AlgorithmStrategyAlgoSdkRequestPatch: S.AlgorithmStrategyAlgoSdkRequestPatch,
AlgorithmStrategyAlgoItemSdkArgsPatch: m.AlgorithmStrategyAlgoItemSdkArgsPatch,
AlgorithmStrategyAlgoItemSdkRequestPatch: A.AlgorithmStrategyAlgoItemSdkRequestPatch,
AlgorithmStrategyPreprocessShareSequenceSourcePatch: v.AlgorithmStrategyPreprocessShareSequenceSourcePatch,
AlgorithmStrategyAlgoPreprocessMutexRouterChangedPatch: h.AlgorithmStrategyAlgoPreprocessMutexRouterChangedPatch,
AlgorithmStrategyAlgorithmIdModifyPatch: b.AlgorithmStrategyAlgorithmIdModifyPatch,
AlgorithmStrategyDisablePatch: _.AlgorithmStrategyDisablePatch,
AlgorithmStrategyReturnPatch: T.AlgorithmStrategyReturnPatch,
AlgorithmStrategyPreprocessType: C.AlgorithmStrategyPreprocessType,
AlgorithmStrategyReturnStateProcessType: O.AlgorithmStrategyReturnStateProcessType,
AlgorithmStrategyProcessType: P.AlgorithmStrategyProcessType,
AlgorithmStrategyConflictRecorder: R.AlgorithmStrategyConflictRecorder,
AlgorithmStrategyConflictType: L.AlgorithmStrategyConflictType,
get dot() {
return E.algorithmStrategyDot.getSnapshot();
},
get SDK_SUCCESS() {
var t, e, o, n;
return 3 === (null === (e = null === (t = r.flow.sdk) || void 0 === t ? void 0 : t.blockIds) || void 0 === e ? void 0 : e.length) && (null === (n = null === (o = r.flow.sdk) || void 0 === o ? void 0 : o.blockIds) || void 0 === n ? void 0 : n.every(function(t) {
return t > 0;
}));
}
};
window.as || (window.as = I), Object.assign(window, {
algorithmStrategy: t.algorithmStrategy,
algorithmStrategyPipeline: r.algorithmStrategyPipeline,
algorithmStrategyRobot: o.algorithmStrategyRobot
});
})();
})();