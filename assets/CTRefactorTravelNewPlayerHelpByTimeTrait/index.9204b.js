window.__require = function t(e, r, a) {
function o(n, l) {
if (!r[n]) {
if (!e[n]) {
var s = n.split("/");
s = s[s.length - 1];
if (!e[s]) {
var c = "function" == typeof __require && __require;
if (!l && c) return c(s, !0);
if (i) return i(s, !0);
throw new Error("Cannot find module '" + n + "'");
}
n = s;
}
var u = r[n] = {
exports: {}
};
e[n][0].call(u.exports, function(t) {
return o(e[n][1][t] || t);
}, u, u.exports, t, e, r, a);
}
return r[n].exports;
}
for (var i = "function" == typeof __require && __require, n = 0; n < a.length; n++) o(a[n]);
return o;
}({
CTRefactorTravelNewPlayerHelpByTimeTrait: [ function(t, e, r) {
"use strict";
cc._RF.push(e, "7ab6fB6KmRNyp7S43jUjzhw", "CTRefactorTravelNewPlayerHelpByTimeTrait");
var a, o = this && this.__extends || (a = function(t, e) {
return (a = Object.setPrototypeOf || {
__proto__: []
} instanceof Array && function(t, e) {
t.__proto__ = e;
} || function(t, e) {
for (var r in e) Object.prototype.hasOwnProperty.call(e, r) && (t[r] = e[r]);
})(t, e);
}, function(t, e) {
a(t, e);
function r() {
this.constructor = t;
}
t.prototype = null === e ? Object.create(e) : (r.prototype = e.prototype, new r());
}), i = this && this.__decorate || function(t, e, r, a) {
var o, i = arguments.length, n = i < 3 ? e : null === a ? a = Object.getOwnPropertyDescriptor(e, r) : a;
if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) n = Reflect.decorate(t, e, r, a); else for (var l = t.length - 1; l >= 0; l--) (o = t[l]) && (n = (i < 3 ? o(n) : i > 3 ? o(e, r, n) : o(e, r)) || n);
return i > 3 && n && Object.defineProperty(e, r, n), n;
}, n = this && this.__awaiter || function(t, e, r, a) {
return new (r || (r = Promise))(function(o, i) {
function n(t) {
try {
s(a.next(t));
} catch (t) {
i(t);
}
}
function l(t) {
try {
s(a.throw(t));
} catch (t) {
i(t);
}
}
function s(t) {
t.done ? o(t.value) : (e = t.value, e instanceof r ? e : new r(function(t) {
t(e);
})).then(n, l);
var e;
}
s((a = a.apply(t, e || [])).next());
});
}, l = this && this.__generator || function(t, e) {
var r, a, o, i, n = {
label: 0,
sent: function() {
if (1 & o[0]) throw o[1];
return o[1];
},
trys: [],
ops: []
};
return i = {
next: l(0),
throw: l(1),
return: l(2)
}, "function" == typeof Symbol && (i[Symbol.iterator] = function() {
return this;
}), i;
function l(t) {
return function(e) {
return s([ t, e ]);
};
}
function s(i) {
if (r) throw new TypeError("Generator is already executing.");
for (;n; ) try {
if (r = 1, a && (o = 2 & i[0] ? a.return : i[0] ? a.throw || ((o = a.return) && o.call(a), 
0) : a.next) && !(o = o.call(a, i[1])).done) return o;
(a = 0, o) && (i = [ 2 & i[0], o.value ]);
switch (i[0]) {
case 0:
case 1:
o = i;
break;

case 4:
n.label++;
return {
value: i[1],
done: !1
};

case 5:
n.label++;
a = i[1];
i = [ 0 ];
continue;

case 7:
i = n.ops.pop();
n.trys.pop();
continue;

default:
if (!(o = n.trys, o = o.length > 0 && o[o.length - 1]) && (6 === i[0] || 2 === i[0])) {
n = 0;
continue;
}
if (3 === i[0] && (!o || i[1] > o[0] && i[1] < o[3])) {
n.label = i[1];
break;
}
if (6 === i[0] && n.label < o[1]) {
n.label = o[1];
o = i;
break;
}
if (o && n.label < o[2]) {
n.label = o[2];
n.ops.push(i);
break;
}
o[2] && n.ops.pop();
n.trys.pop();
continue;
}
i = e.call(t, n);
} catch (t) {
i = [ 6, t ];
a = 0;
} finally {
r = o = 0;
}
if (5 & i[0]) throw i[1];
return {
value: i[0] ? i[1] : void 0,
done: !0
};
}
}, s = this && this.__values || function(t) {
var e = "function" == typeof Symbol && Symbol.iterator, r = e && t[e], a = 0;
if (r) return r.call(t);
if (t && "number" == typeof t.length) return {
next: function() {
t && a >= t.length && (t = void 0);
return {
value: t && t[a++],
done: !t
};
}
};
throw new TypeError(e ? "Object is not iterable." : "Symbol.iterator is not defined.");
};
Object.defineProperty(r, "__esModule", {
value: !0
});
r.CTRefactorTravelNewPlayerHelpByTimeTrait = void 0;
var c = function(t) {
o(e, t);
function e() {
return null !== t && t.apply(this, arguments) || this;
}
e.prototype.data = function() {
return {
chapterFailMap: this.createChapterFailMapFromStorage(),
chapter: 0
};
};
e.prototype.isChapterGame_ProxyOnStartGame = function() {
this.recordCurrentChapter();
};
e.prototype.isChapterGame_ProxyOnGameOver = function() {
this.recordChapterFailTimes();
};
e.prototype.limitDay = function() {
return 2;
};
e.prototype.onAlgorithmStrategyPostprocessComplete = function(t) {
var e, r;
return n(this, void 0, Promise, function() {
var a, o, i;
return l(this, function(n) {
switch (n.label) {
case 0:
if (!this.isTrigger() || !this.isTargetAlgorithmNames(hs.algorithmName.algoActualName)) return [ 2 ];
a = hs.OFFER_TYPE.SI_WANG;
this.state.chapter <= 30 && (a = hs.OFFER_TYPE.SUI_JI_WU_SI);
o = {
algorithmId: a,
source: null === (e = null == t ? void 0 : t.sdk) || void 0 === e ? void 0 : e.source,
traitSource: null === (r = null == t ? void 0 : t.sdk) || void 0 === r ? void 0 : r.traitSource,
algorithmListSource: "fallback"
};
return [ 4, as.AlgorithmStrategyAlgoItemSdkRequestPatch.patch(o, [], this) ];

case 1:
if (!(null == (i = n.sent()) ? void 0 : i.SDK_SUCCESS) || !i.blockIds || 3 !== i.blockIds.length) return [ 2 ];
as.AlgorithmStrategyAlgoExpectedIdPatch.patch(hs.OFFER_TYPE.NONE, this);
as.AlgorithmStrategyAlgoExpectedIdPatch.patch(a, this);
return [ 2 ];
}
});
});
};
e.prototype.recordCurrentChapter = function() {
this.state.chapter = hs.chapterGameInfo.chapterNum + 1;
};
e.prototype.recordChapterFailTimes = function() {
hs.gameOverGameInfo.isChapterWin || this.setFailData();
};
e.prototype.isTargetAlgorithmNames = function(t) {
return !(!Array.isArray(t) || 3 !== t.length) && (t.every(function(t) {
return t === hs.ALGO_NAME_TYPE.NAME_KUN_NAN_TI;
}) || t.every(function(t) {
return t === hs.ALGO_NAME_TYPE.NAME_DIFFICULTY;
}));
};
e.prototype.isTrigger = function() {
if (Date.now() - hs.gameInfo.installTime <= 0) return !1;
var t = Math.ceil((Date.now() - hs.gameInfo.installTime) / 864e5);
if (t > this.limitDay()) return !1;
var e = t <= 1 ? 2 : 5;
this.state.chapterFailMap = this.createChapterFailMapFromStorage();
return this.getFailTimes(this.state.chapter) >= e;
};
e.prototype.getFailTimes = function(t) {
return this.state.chapterFailMap.get(t) || 0;
};
e.prototype.isReplaceAlgorithm = function(t) {
return t === hs.OFFER_TYPE_BASE.SUI_JI_WU_SI || t === hs.OFFER_TYPE_DIE.SI_WANG;
};
e.prototype.setFailData = function() {
if (!(Date.now() - hs.gameInfo.installTime <= 0 || Math.ceil((Date.now() - hs.gameInfo.installTime) / 864e5) > 2)) {
this.state.chapterFailMap = this.createChapterFailMapFromStorage();
this.state.chapterFailMap.set(this.state.chapter, this.getFailTimes(this.state.chapter) + 1);
storage.setItem("localstorage_travelNewPlayerHelpByTime", Array.from(this.state.chapterFailMap.entries()));
}
};
e.prototype.createChapterFailMapFromStorage = function() {
var t, e, r = storage.getItem("localstorage_travelNewPlayerHelpByTime", []), a = new Map();
if (Array.isArray(r)) try {
for (var o = s(r), i = o.next(); !i.done; i = o.next()) {
var n = i.value;
Array.isArray(n) && "number" == typeof n[0] && "number" == typeof n[1] && a.set(n[0], n[1]);
}
} catch (e) {
t = {
error: e
};
} finally {
try {
i && !i.done && (e = o.return) && e.call(o);
} finally {
if (t) throw t.error;
}
}
return a;
};
return i([ classId("CTRefactorTravelNewPlayerHelpByTimeTrait"), classMethodWatch() ], e);
}(Trait);
r.CTRefactorTravelNewPlayerHelpByTimeTrait = c;
cc._RF.pop();
}, {} ]
}, {}, [ "CTRefactorTravelNewPlayerHelpByTimeTrait" ]);
//# sourceMappingURL=index.js.map
