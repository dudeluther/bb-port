window.__require = function t(e, i, o) {
function r(n, s) {
if (!i[n]) {
if (!e[n]) {
var c = n.split("/");
c = c[c.length - 1];
if (!e[c]) {
var l = "function" == typeof __require && __require;
if (!s && l) return l(c, !0);
if (a) return a(c, !0);
throw new Error("Cannot find module '" + n + "'");
}
n = c;
}
var h = i[n] = {
exports: {}
};
e[n][0].call(h.exports, function(t) {
return r(e[n][1][t] || t);
}, h, h.exports, t, e, i, o);
}
return i[n].exports;
}
for (var a = "function" == typeof __require && __require, n = 0; n < o.length; n++) r(o[n]);
return r;
}({
$28510_f_TravelPassTipsTrait: [ function(t, e, i) {
"use strict";
cc._RF.push(e, "7edcb6Li3BP86O59tSns4y3", "$28510_f_TravelPassTipsTrait");
var o, r = this && this.__extends || (o = function(t, e) {
return (o = Object.setPrototypeOf || {
__proto__: []
} instanceof Array && function(t, e) {
t.__proto__ = e;
} || function(t, e) {
for (var i in e) Object.prototype.hasOwnProperty.call(e, i) && (t[i] = e[i]);
})(t, e);
}, function(t, e) {
o(t, e);
function i() {
this.constructor = t;
}
t.prototype = null === e ? Object.create(e) : (i.prototype = e.prototype, new i());
}), a = this && this.__assign || function() {
return (a = Object.assign || function(t) {
for (var e, i = 1, o = arguments.length; i < o; i++) {
e = arguments[i];
for (var r in e) Object.prototype.hasOwnProperty.call(e, r) && (t[r] = e[r]);
}
return t;
}).apply(this, arguments);
}, n = this && this.__decorate || function(t, e, i, o) {
var r, a = arguments.length, n = a < 3 ? e : null === o ? o = Object.getOwnPropertyDescriptor(e, i) : o;
if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) n = Reflect.decorate(t, e, i, o); else for (var s = t.length - 1; s >= 0; s--) (r = t[s]) && (n = (a < 3 ? r(n) : a > 3 ? r(e, i, n) : r(e, i)) || n);
return a > 3 && n && Object.defineProperty(e, i, n), n;
}, s = this && this.__awaiter || function(t, e, i, o) {
return new (i || (i = Promise))(function(r, a) {
function n(t) {
try {
c(o.next(t));
} catch (t) {
a(t);
}
}
function s(t) {
try {
c(o.throw(t));
} catch (t) {
a(t);
}
}
function c(t) {
t.done ? r(t.value) : (e = t.value, e instanceof i ? e : new i(function(t) {
t(e);
})).then(n, s);
var e;
}
c((o = o.apply(t, e || [])).next());
});
}, c = this && this.__generator || function(t, e) {
var i, o, r, a, n = {
label: 0,
sent: function() {
if (1 & r[0]) throw r[1];
return r[1];
},
trys: [],
ops: []
};
return a = {
next: s(0),
throw: s(1),
return: s(2)
}, "function" == typeof Symbol && (a[Symbol.iterator] = function() {
return this;
}), a;
function s(t) {
return function(e) {
return c([ t, e ]);
};
}
function c(a) {
if (i) throw new TypeError("Generator is already executing.");
for (;n; ) try {
if (i = 1, o && (r = 2 & a[0] ? o.return : a[0] ? o.throw || ((r = o.return) && r.call(o), 
0) : o.next) && !(r = r.call(o, a[1])).done) return r;
(o = 0, r) && (a = [ 2 & a[0], r.value ]);
switch (a[0]) {
case 0:
case 1:
r = a;
break;

case 4:
n.label++;
return {
value: a[1],
done: !1
};

case 5:
n.label++;
o = a[1];
a = [ 0 ];
continue;

case 7:
a = n.ops.pop();
n.trys.pop();
continue;

default:
if (!(r = n.trys, r = r.length > 0 && r[r.length - 1]) && (6 === a[0] || 2 === a[0])) {
n = 0;
continue;
}
if (3 === a[0] && (!r || a[1] > r[0] && a[1] < r[3])) {
n.label = a[1];
break;
}
if (6 === a[0] && n.label < r[1]) {
n.label = r[1];
r = a;
break;
}
if (r && n.label < r[2]) {
n.label = r[2];
n.ops.push(a);
break;
}
r[2] && n.ops.pop();
n.trys.pop();
continue;
}
a = e.call(t, n);
} catch (t) {
a = [ 6, t ];
o = 0;
} finally {
i = r = 0;
}
if (5 & a[0]) throw a[1];
return {
value: a[0] ? a[1] : void 0,
done: !0
};
}
}, l = this && this.__values || function(t) {
var e = "function" == typeof Symbol && Symbol.iterator, i = e && t[e], o = 0;
if (i) return i.call(t);
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
Object.defineProperty(i, "__esModule", {
value: !0
});
i.$28510_f_TravelPassTipsTrait = void 0;
var h = t("../components/TravelPassLevelTipComponent"), p = function(t) {
r(e, t);
function e() {
var e = null !== t && t.apply(this, arguments) || this;
e.storeKey = "28510_f_TravelPassTips";
e.tipPrefab = null;
e.tipNode = null;
e.tipComp = null;
e.mosaicNodeRef = null;
e.mosaicRowTween = null;
e.mosaicDistanceTween = null;
e.PREFAB_BUNDLE = "$28510_f_TravelPassTipsTrait";
e.PREFAB_PATH = "prefab/gpTravelPassLevelTip";
e.PREFAB_PATH_NEW = "prefab/gpTravelPassLevelTipNew";
e.prefabPath = e.PREFAB_PATH;
e.curBundle = null;
e.initPromise = null;
return e;
}
e.prototype.getFixedPassTarget = function() {
return 0;
};
e.prototype.loadData = function() {
var t = {
refreshTime: Date.now(),
passTimes: 0,
currentPassNum: hs.chapterGameInfo.chapterNum,
recordPassNum: 0,
gp_dem: 10,
gp_stage: 0,
gp_dem_ori: 0
}, e = storage.getItem(this.storeKey, t);
if (e.gp_stage !== hs.chapterGameInfo.stage) {
e.gp_stage = hs.chapterGameInfo.stage;
e.gp_dem = 10;
e.gp_dem_ori = 10;
e.refreshTime = Date.now();
e.passTimes = 0;
e.recordPassNum = 0;
e.gp_dem_ori = e.gp_dem;
e.currentPassNum = hs.chapterGameInfo.chapterNum;
this.saveData(e);
}
return a(a({}, t), e);
};
e.prototype.saveData = function(t) {
storage.setItem(this.storeKey, t);
};
e.prototype.onCreate = function() {
var t = this;
if (this.getIsUseNewArt()) {
this.initPromise = this.initUseNewArt();
this.initPromise.then(function() {
return t.ensureTipInstance();
}).catch(function() {});
} else this.ensureTipInstance().catch(function() {});
};
e.prototype.initUseNewArt = function() {
return s(this, void 0, void 0, function() {
var t;
return c(this, function(e) {
switch (e.label) {
case 0:
t = this;
return [ 4, hs.ResLoader.asyncLoadBundle(this.PREFAB_BUNDLE) ];

case 1:
t.curBundle = e.sent();
if (!this.curBundle || !cc.isValid(this.curBundle)) return [ 2 ];
if (hs.ResLoader.isBundleAssetDownloaded(this.curBundle, this.PREFAB_PATH_NEW, {
type: cc.Prefab,
target: "import"
})) {
this.prefabPath = this.PREFAB_PATH_NEW;
return [ 2 ];
}
if (!hs.ResLoader.isBundleAssetDownloaded(this.curBundle, this.PREFAB_PATH, {
type: cc.Prefab,
target: "import"
})) {
this.prefabPath = this.PREFAB_PATH_NEW;
return [ 2 ];
}
hs.ResLoader.loadByBundle(this.PREFAB_BUNDLE, this.PREFAB_PATH_NEW, cc.Prefab, function() {});
return [ 2 ];
}
});
});
};
e.prototype.ensureTipInstance = function() {
return s(this, void 0, Promise, function() {
var t;
return c(this, function(e) {
switch (e.label) {
case 0:
e.trys.push([ 0, 5, , 6 ]);
return this.getIsUseNewArt() && this.initPromise ? [ 4, this.initPromise ] : [ 3, 2 ];

case 1:
e.sent();
e.label = 2;

case 2:
if (this.tipPrefab && cc.isValid(this.tipPrefab)) return [ 3, 4 ];
t = this;
return [ 4, hs.ResLoader.asyncLoadByBundle(this.PREFAB_BUNDLE, this.prefabPath, cc.Prefab) ];

case 3:
t.tipPrefab = e.sent();
e.label = 4;

case 4:
if (!this.tipNode || !cc.isValid(this.tipNode)) {
this.tipNode = cc.instantiate(this.tipPrefab);
this.tipComp = this.tipNode.getComponent(h.default);
}
return [ 2, this.tipComp ];

case 5:
throw e.sent();

case 6:
return [ 2 ];
}
});
});
};
e.prototype.getIsUseNewArt = function() {
var t, e;
return null !== (e = null === (t = this.props) || void 0 === t ? void 0 : t.useNewArt) && void 0 !== e && e;
};
e.prototype.isSameDay = function(t, e) {
var i = new Date(t), o = new Date(e);
return i.getFullYear() === o.getFullYear() && i.getMonth() === o.getMonth() && i.getDate() === o.getDate();
};
e.prototype.getRemainSecondsToNextMondayZero = function(t) {
void 0 === t && (t = Date.now());
var e = new Date(t), i = e.getDay(), o = 1 === i ? 7 : 0 === i ? 1 : 8 - i, r = new Date(e);
r.setHours(0, 0, 0, 0);
r.setDate(r.getDate() + o);
return Math.max(0, Math.floor((r.getTime() - t) / 1e3));
};
e.prototype.getRemainRefreshTime = function() {
var t = Date.now(), e = storage.getItem("chapterPeriodsBeginTime", t), i = 604800 - Math.floor((t - e) / 1e3);
i < 0 && (i = 0);
return i;
};
e.prototype.calcPassTarget = function(t, e) {
var i = this.getFixedPassTarget();
if (i > 0) return i;
var o = Math.max(0, e - t), r = this.loadData();
return Math.max(1, Math.ceil(o / (r.gp_dem_ori || 10)));
};
e.prototype.computeTipState = function(t, e, i, o) {
var r = Math.floor(t / Math.max(1, o + 1)), a = this.loadData(), n = {
state: "NO_SHOW",
nextRecord: e
};
(r = Math.floor(t / Math.max(1, a.gp_dem || 10))) > 0 && r > e && (n = {
state: "NO_SHOW",
nextRecord: r
});
t >= i && (n = {
state: t === i ? "BE_LIKE" : "NO_SHOW",
nextRecord: e
});
1 === t && 1 !== i && (n = {
state: "NOT_PASS",
nextRecord: e
});
var s = hs.chapterGameInfo.chapterAllNum || 96;
hs.chapterGameInfo.chapterNum >= s && (n = {
state: "BE_LIKE",
nextRecord: e
});
return n;
};
e.prototype.mapToPassState = function(t) {
switch (t) {
case "BE_LIKE":
return h.PASS_STATE.BE_LIKE;

case "NOT_PASS":
return h.PASS_STATE.NOT_PASS;

default:
return h.PASS_STATE.NO_SHOW;
}
};
e.prototype.showTipWhenUiReady = function(t) {
return s(this, void 0, void 0, function() {
var e, i, o;
return c(this, function(r) {
switch (r.label) {
case 0:
return [ 4, this.waitForWinRootNode(2e3) ];

case 1:
return (e = r.sent()) && cc.isValid(e) ? [ 4, this.waitForOptimizingOrHardNode(e, 500) ] : [ 2 ];

case 2:
r.sent();
return [ 4, this.ensureTipInstance() ];

case 3:
i = r.sent();
this.tipNode && this.tipNode.parent !== e && (this.tipNode.parent = e);
this.tipNode.active = !1;
o = this.mapToPassState(t);
i.init(o, e, this);
return [ 2 ];
}
});
});
};
e.prototype.waitForOptimizingOrHardNode = function(t, e) {
void 0 === e && (e = 2e3);
return s(this, void 0, Promise, function() {
var i;
return c(this, function() {
i = Date.now();
return [ 2, new Promise(function(o) {
var r = function() {
if (cc.isValid(t)) {
var a = !!t.getChildByName("ResultOptimizing_UI"), n = !!t.getChildByName("hardLevelDefeat");
a || n ? o() : Date.now() - i >= e ? o() : setTimeoutSafe(r, 50);
} else o();
};
r();
}) ];
});
});
};
e.prototype.waitForWinRootNode = function(t) {
void 0 === t && (t = 2e3);
return s(this, void 0, Promise, function() {
var e;
return c(this, function() {
e = Date.now();
return [ 2, new Promise(function(i) {
var o = function() {
var r, a, n = "undefined" != typeof hs.ChapterScoreWin ? Cinst(hs.ChapterScoreWin) : null, s = "undefined" != typeof hs.ChapterCollectWin ? Cinst(hs.ChapterCollectWin) : null, c = null;
(null === (r = null == n ? void 0 : n.node) || void 0 === r ? void 0 : r.active) && cc.isValid(n.node) ? c = n.node : (null === (a = null == s ? void 0 : s.node) || void 0 === a ? void 0 : a.active) && cc.isValid(s.node) && (c = s.node);
c ? i(c) : Date.now() - e >= t ? i(null) : setTimeoutSafe(o, 50);
};
o();
}) ];
});
});
};
e.prototype.showCompletedLevelsInstantlyForMosaic = function(t) {
for (var e = hs.chapterGameInfo, i = e.chapterNum, o = e.lastChapterNum, r = 0; r < t.itemList.length; r++) {
var a = t.itemList[r];
r < i && a.setState({
isStopAllAction: !0,
isShowAnimation: !1,
showColor: !0,
isOpacityAni: !1,
opacity: 255
});
}
i <= o && !hs.chapterGameInfo.isThroughAll && storage.setItem("lastChapterNum", i);
};
e.prototype.playGlowEffect = function(t) {
if (t) {
var e = null, i = t.colorImg;
i && (i instanceof cc.Node ? e = i : i.node && i.node instanceof cc.Node && (e = i.node));
var o = null, r = t.light;
r && (r instanceof cc.Node ? o = r : r.node && r.node instanceof cc.Node && (o = r.node));
if (e && cc.isValid(e)) {
var a = cc.instantiate(e);
a.parent = e.parent;
a.position = e.position;
var n = a.getComponent(cc.Sprite);
if (n) {
n.srcBlendFactor = cc.macro.BlendFactor.SRC_ALPHA;
n.dstBlendFactor = cc.macro.BlendFactor.ONE;
}
a.opacity = 0;
cc.Tween.stopAllByTarget(a);
cc.tween(a).to(.1, {
opacity: 255
}).to(.3, {
opacity: 0
}).call(function() {
cc.Tween.stopAllByTarget(a);
cc.isValid(a) && a.destroy();
}).start();
}
if (o && cc.isValid(o)) {
o.opacity = 0;
cc.Tween.stopAllByTarget(o);
cc.tween(o).to(.1, {
opacity: 255
}).to(.17, {
opacity: 0
}).call(function() {
cc.Tween.stopAllByTarget(o);
}).start();
}
}
};
e.prototype.showRowByRowAnimation = function(t) {
var e = this, i = t.target, o = t.args[0];
if (o && cc.isValid(o) && i._rowItems && 0 !== i._rowItems.length) {
this.mosaicNodeRef = o;
if (this.mosaicRowTween) {
this.mosaicRowTween.stop();
this.mosaicRowTween = null;
}
cc.Tween.stopAllByTarget(o);
var r = 0;
this.showCompletedLevelsInstantlyForMosaic(i);
var a = function() {
if (o && cc.isValid(o)) if (r > i._heightLength - 1) {
if (e.mosaicRowTween) {
e.mosaicRowTween.stop();
e.mosaicRowTween = null;
}
e.playDistanceBasedAnimation(t);
} else {
var n = i._rowItems[r];
n && n.length > 0 && n.forEach(function(t) {
t && cc.isValid(t) && (t.node.active = !0);
});
r++;
if (o && cc.isValid(o)) {
cc.Tween.stopAllByTarget(o);
e.mosaicRowTween = cc.tween(o).delay(.03).call(a);
e.mosaicRowTween.start();
}
} else if (e.mosaicRowTween) {
e.mosaicRowTween.stop();
e.mosaicRowTween = null;
}
};
a();
}
};
e.prototype.playDistanceBasedAnimation = function(t) {
var e, i, o, r, a = this, n = t.target, s = t.args[0];
if (n._itemPositions && 0 !== n._itemPositions.length) {
this.mosaicNodeRef = s;
if (this.mosaicDistanceTween) {
this.mosaicDistanceTween.stop();
this.mosaicDistanceTween = null;
}
s && cc.isValid(s) && cc.Tween.stopAllByTarget(s);
var c = hs.chapterGameInfo;
if (!(c.chapterNum - c.lastChapterNum <= 0)) {
var h = Infinity;
try {
for (var p = l(n._itemPositions), u = p.next(); !u.done; u = p.next()) (v = u.value).col < h && (h = v.col);
} catch (t) {
e = {
error: t
};
} finally {
try {
u && !u.done && (i = p.return) && i.call(p);
} finally {
if (e) throw e.error;
}
}
var f = new Map();
try {
for (var d = l(n._itemPositions), m = d.next(); !m.done; m = d.next()) {
var v = m.value, _ = Math.abs(v.row - 0) + Math.abs(v.col - h);
f.has(_) || f.set(_, []);
f.get(_).push(v.item);
}
} catch (t) {
o = {
error: t
};
} finally {
try {
m && !m.done && (r = d.return) && r.call(d);
} finally {
if (o) throw o.error;
}
}
var y = Array.from(f.keys()).sort(function(t, e) {
return t - e;
}), T = 0, g = function() {
if (T >= y.length) {
if (a.mosaicDistanceTween) {
a.mosaicDistanceTween.stop();
a.mosaicDistanceTween = null;
}
} else {
var t = y[T];
f.get(t).forEach(function(t) {
t && t.state && t.state.showColor && a.playGlowEffect(t);
});
T++;
if (s && cc.isValid(s)) {
cc.Tween.stopAllByTarget(s);
a.mosaicDistanceTween = cc.tween(s).delay(.08).call(function() {
g();
});
a.mosaicDistanceTween.start();
}
}
};
g();
}
}
};
e.prototype.stopMosaicAnimations = function() {
if (this.mosaicRowTween) {
this.mosaicRowTween.stop();
this.mosaicRowTween = null;
}
if (this.mosaicDistanceTween) {
this.mosaicDistanceTween.stop();
this.mosaicDistanceTween = null;
}
this.mosaicNodeRef && cc.isValid(this.mosaicNodeRef) && cc.Tween.stopAllByTarget(this.mosaicNodeRef);
this.mosaicNodeRef = null;
};
e.prototype.addPassTimes = function() {
var t = this.loadData();
t.passTimes = Math.max(0, t.passTimes || 0) + 1;
this.saveData(t);
};
e.prototype.getLeftPassTimes = function() {
var t = this.getFixedPassTarget();
if (t > 0) return t;
var e = this.loadData(), i = hs.chapterGameInfo.chapterAllNum || 96;
return Math.max(1, Math.ceil((i - hs.chapterGameInfo.chapterNum) / (e.gp_dem || 10)));
};
e.prototype.getGpDem = function() {
var t = this.loadData();
return t.gp_dem_ori || t.gp_dem || 10;
};
e.prototype.onActive = function(t) {
var e, i;
if (hs.tp.isChapterGame_ProxyOnStartGame(t)) {
var o = this.loadData();
if (!this.isSameDay(o.refreshTime, Date.now())) {
o.refreshTime = Date.now();
o.passTimes = 0;
o.recordPassNum = 0;
o.gp_dem_ori = o.gp_dem;
o.currentPassNum = hs.chapterGameInfo.chapterNum;
}
this.saveData(o);
} else if (hs.tp.isChapterGame_ProxyOnGameOver(t)) {
if (!hs.gameOverGameInfo.isChapterWin) return;
o = this.loadData();
if (!this.isSameDay(o.refreshTime, Date.now())) {
o.refreshTime = Date.now();
o.passTimes = 0;
o.recordPassNum = 0;
o.gp_dem_ori = o.gp_dem;
o.currentPassNum = hs.chapterGameInfo.chapterNum;
}
o.passTimes = Math.max(0, o.passTimes || 0) + 1;
this.saveData(o);
} else if (hs.tp.isChapterCollectWinShowOtherTraitAnim(t) || hs.tp.isChapterScoreWinShowOtherTraitAnim(t)) this.tryShowTravelPassTips(); else if (hs.tp.isChapterCollectWinOnDisable(t) || hs.tp.isChapterScoreWinOnDisable(t)) {
var r = t.target.node.getChildByName("TravelPassLevelTip");
r && (r.active = !1);
this.stopMosaicAnimations();
} else if (hs.tp.isTravelResultOptimizingTraitShowMosaicNode(t)) {
(n = t.args[0]).active = !1;
t.replace = !0;
} else if (hs.tp.isTravelResultOptimizingTraitMoveChapter(t)) {
t.replace = !0;
var a = t.target, n = t.args[0];
a._rowItems = [];
a._itemPositions = [];
if (!a._rowItems || 0 === a._rowItems.length) {
for (var s = Array.isArray(a.itemList) ? a.itemList : [], c = [], h = new Map(), p = 0; p < s.length; p++) {
var u = s[p], f = u && u.node;
if (f && cc.isValid(f)) {
var d = Math.round(f.y), m = void 0;
try {
for (var v = (e = void 0, l(c)), _ = v.next(); !_.done; _ = v.next()) {
var y = _.value;
if (Math.abs(y - d) <= 1) {
m = y;
break;
}
}
} catch (t) {
e = {
error: t
};
} finally {
try {
_ && !_.done && (i = v.return) && i.call(v);
} finally {
if (e) throw e.error;
}
}
if (void 0 === m) {
m = d;
c.push(m);
}
h.has(m) || h.set(m, []);
h.get(m).push(u);
u.setState({
isStopAllAction: !0,
isShowAnimation: !1,
showColor: !1,
isOpacityAni: !1,
opacity: 0
});
u.node.active = !1;
}
}
n.active = !0;
c.sort(function(t, e) {
return t - e;
});
a._rowItems = c.map(function(t) {
var e = h.get(t) || [];
e.sort(function(t, e) {
return t.node.x - e.node.x;
});
return e;
});
a._rowItems.forEach(function(t, e) {
t.forEach(function(t, i) {
a._itemPositions.push({
item: t,
row: e,
col: i
});
});
});
"number" == typeof a._heightLength && a._heightLength === a._rowItems.length || (a._heightLength = a._rowItems.length);
}
var T = hs.chapterGameInfo;
if (T.chapterNum - T.lastChapterNum <= 0) {
n.active = !0;
this.showCompletedLevelsInstantlyForMosaic(a);
return;
}
this.showRowByRowAnimation(t);
}
};
e.prototype.tryShowTravelPassTips = function() {
var t = this.loadData(), e = this.getRemainRefreshTime(), i = hs.chapterGameInfo.chapterAllNum || 96, o = Math.floor(e / 86400), r = this.calcPassTarget("number" == typeof t.currentPassNum ? t.currentPassNum : hs.chapterGameInfo.chapterNum, i, e), a = this.computeTipState(Math.max(0, t.passTimes || 0), Math.max(0, t.recordPassNum || 0), r, o), n = a.state, s = a.nextRecord;
t.recordPassNum = s;
if ("NO_SHOW" !== n) {
this.showTipWhenUiReady(n);
"BE_LIKE" === n && (t.gp_dem = Math.max(1, t.gp_dem - 1));
this.saveData(t);
} else this.saveData(t);
};
return n([ classId("$28510_f_TravelPassTipsTrait"), classMethodWatch() ], e);
}(Trait);
i.$28510_f_TravelPassTipsTrait = p;
cc._RF.pop();
}, {
"../components/TravelPassLevelTipComponent": "TravelPassLevelTipComponent"
} ],
$28510_f_TravelPassTips_isOptimization_Trait: [ function(t, e, i) {
"use strict";
cc._RF.push(e, "d1f6bAjflpMna8ui3w9bp8Y", "$28510_f_TravelPassTips_isOptimization_Trait");
var o, r = this && this.__extends || (o = function(t, e) {
return (o = Object.setPrototypeOf || {
__proto__: []
} instanceof Array && function(t, e) {
t.__proto__ = e;
} || function(t, e) {
for (var i in e) Object.prototype.hasOwnProperty.call(e, i) && (t[i] = e[i]);
})(t, e);
}, function(t, e) {
o(t, e);
function i() {
this.constructor = t;
}
t.prototype = null === e ? Object.create(e) : (i.prototype = e.prototype, new i());
}), a = this && this.__decorate || function(t, e, i, o) {
var r, a = arguments.length, n = a < 3 ? e : null === o ? o = Object.getOwnPropertyDescriptor(e, i) : o;
if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) n = Reflect.decorate(t, e, i, o); else for (var s = t.length - 1; s >= 0; s--) (r = t[s]) && (n = (a < 3 ? r(n) : a > 3 ? r(e, i, n) : r(e, i)) || n);
return a > 3 && n && Object.defineProperty(e, i, n), n;
}, n = this && this.__awaiter || function(t, e, i, o) {
return new (i || (i = Promise))(function(r, a) {
function n(t) {
try {
c(o.next(t));
} catch (t) {
a(t);
}
}
function s(t) {
try {
c(o.throw(t));
} catch (t) {
a(t);
}
}
function c(t) {
t.done ? r(t.value) : (e = t.value, e instanceof i ? e : new i(function(t) {
t(e);
})).then(n, s);
var e;
}
c((o = o.apply(t, e || [])).next());
});
}, s = this && this.__generator || function(t, e) {
var i, o, r, a, n = {
label: 0,
sent: function() {
if (1 & r[0]) throw r[1];
return r[1];
},
trys: [],
ops: []
};
return a = {
next: s(0),
throw: s(1),
return: s(2)
}, "function" == typeof Symbol && (a[Symbol.iterator] = function() {
return this;
}), a;
function s(t) {
return function(e) {
return c([ t, e ]);
};
}
function c(a) {
if (i) throw new TypeError("Generator is already executing.");
for (;n; ) try {
if (i = 1, o && (r = 2 & a[0] ? o.return : a[0] ? o.throw || ((r = o.return) && r.call(o), 
0) : o.next) && !(r = r.call(o, a[1])).done) return r;
(o = 0, r) && (a = [ 2 & a[0], r.value ]);
switch (a[0]) {
case 0:
case 1:
r = a;
break;

case 4:
n.label++;
return {
value: a[1],
done: !1
};

case 5:
n.label++;
o = a[1];
a = [ 0 ];
continue;

case 7:
a = n.ops.pop();
n.trys.pop();
continue;

default:
if (!(r = n.trys, r = r.length > 0 && r[r.length - 1]) && (6 === a[0] || 2 === a[0])) {
n = 0;
continue;
}
if (3 === a[0] && (!r || a[1] > r[0] && a[1] < r[3])) {
n.label = a[1];
break;
}
if (6 === a[0] && n.label < r[1]) {
n.label = r[1];
r = a;
break;
}
if (r && n.label < r[2]) {
n.label = r[2];
n.ops.push(a);
break;
}
r[2] && n.ops.pop();
n.trys.pop();
continue;
}
a = e.call(t, n);
} catch (t) {
a = [ 6, t ];
o = 0;
} finally {
i = r = 0;
}
if (5 & a[0]) throw a[1];
return {
value: a[0] ? a[1] : void 0,
done: !0
};
}
};
Object.defineProperty(i, "__esModule", {
value: !0
});
i.$28510_f_TravelPassTips_isOptimization_Trait = void 0;
var c = t("../components/TravelPassLevelTipComponent"), l = t("./$28510_f_TravelPassTipsTrait"), h = "prefab/gpTravelPassLevelTipOptimization", p = "prefab/gpTravelPassLevelTipNewOptimization", u = function(t) {
r(e, t);
function e() {
var e = null !== t && t.apply(this, arguments) || this;
e.PREFAB_PATH_OPTIMIZATION = h;
e.PREFAB_PATH_NEW_OPTIMIZATION = p;
return e;
}
e.prototype.getIsOptimization = function() {
var t, e;
return null !== (e = null === (t = this.props) || void 0 === t ? void 0 : t.isOptimization) && void 0 !== e && e;
};
e.prototype.getResUrl = function() {
return n(this, void 0, void 0, function() {
return s(this, function(t) {
switch (t.label) {
case 0:
return this.getIsOptimization() ? [ 4, hs.ResLoader.asyncIsBundleAssetDownloaded(this.traitName, this.PREFAB_PATH, {
type: cc.Prefab
}) ] : [ 2 ];

case 1:
if (!t.sent()) {
this.prefabPath = this.PREFAB_PATH_NEW_OPTIMIZATION;
return [ 2 ];
}
return [ 4, hs.ResLoader.asyncIsBundleAssetDownloaded(this.traitName, this.PREFAB_PATH_NEW_OPTIMIZATION, {
type: cc.Prefab
}) ];

case 2:
if (t.sent()) {
this.prefabPath = this.PREFAB_PATH_NEW_OPTIMIZATION;
return [ 2 ];
}
return [ 4, hs.ResLoader.asyncIsBundleAssetDownloaded(this.traitName, this.PREFAB_PATH_OPTIMIZATION, {
type: cc.Prefab
}) ];

case 3:
t.sent() && (this.prefabPath = this.PREFAB_PATH_OPTIMIZATION);
return [ 2 ];
}
});
});
};
e.prototype.ensureTipInstance = function() {
return n(this, void 0, Promise, function() {
var t;
return s(this, function(e) {
switch (e.label) {
case 0:
e.trys.push([ 0, 6, , 7 ]);
return this.getIsUseNewArt() && this.initPromise ? [ 4, this.initPromise ] : [ 3, 2 ];

case 1:
e.sent();
e.label = 2;

case 2:
return [ 4, this.getResUrl() ];

case 3:
e.sent();
if (this.tipPrefab && cc.isValid(this.tipPrefab)) return [ 3, 5 ];
t = this;
return [ 4, hs.ResLoader.asyncLoadByBundle(this.PREFAB_BUNDLE, this.prefabPath, cc.Prefab) ];

case 4:
t.tipPrefab = e.sent();
e.label = 5;

case 5:
if (!this.tipNode || !cc.isValid(this.tipNode)) {
this.tipNode = cc.instantiate(this.tipPrefab);
this.tipComp = this.tipNode.getComponent(c.default);
}
return [ 2, this.tipComp ];

case 6:
throw e.sent();

case 7:
return [ 2 ];
}
});
});
};
return a([ classId("$28510_f_TravelPassTipsTrait", "isOptimization") ], e);
}(l.$28510_f_TravelPassTipsTrait);
i.$28510_f_TravelPassTips_isOptimization_Trait = u;
cc._RF.pop();
}, {
"../components/TravelPassLevelTipComponent": "TravelPassLevelTipComponent",
"./$28510_f_TravelPassTipsTrait": "$28510_f_TravelPassTipsTrait"
} ],
TravelPassLevelTipComponent: [ function(t, e, i) {
"use strict";
cc._RF.push(e, "77a55MKF9RPlI1RE1dT1y4A", "TravelPassLevelTipComponent");
var o, r = this && this.__extends || (o = function(t, e) {
return (o = Object.setPrototypeOf || {
__proto__: []
} instanceof Array && function(t, e) {
t.__proto__ = e;
} || function(t, e) {
for (var i in e) Object.prototype.hasOwnProperty.call(e, i) && (t[i] = e[i]);
})(t, e);
}, function(t, e) {
o(t, e);
function i() {
this.constructor = t;
}
t.prototype = null === e ? Object.create(e) : (i.prototype = e.prototype, new i());
}), a = this && this.__decorate || function(t, e, i, o) {
var r, a = arguments.length, n = a < 3 ? e : null === o ? o = Object.getOwnPropertyDescriptor(e, i) : o;
if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) n = Reflect.decorate(t, e, i, o); else for (var s = t.length - 1; s >= 0; s--) (r = t[s]) && (n = (a < 3 ? r(n) : a > 3 ? r(e, i, n) : r(e, i)) || n);
return a > 3 && n && Object.defineProperty(e, i, n), n;
}, n = this && this.__values || function(t) {
var e = "function" == typeof Symbol && Symbol.iterator, i = e && t[e], o = 0;
if (i) return i.call(t);
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
Object.defineProperty(i, "__esModule", {
value: !0
});
i.PASS_STATE = void 0;
var s, c = cc._decorator, l = c.ccclass, h = c.property;
(function(t) {
t[t.NO_SHOW = 0] = "NO_SHOW";
t[t.PASS = 1] = "PASS";
t[t.NOT_PASS = 2] = "NOT_PASS";
t[t.BE_LIKE = 3] = "BE_LIKE";
})(s = i.PASS_STATE || (i.PASS_STATE = {}));
var p = function(t) {
r(e, t);
function e() {
var e = null !== t && t.apply(this, arguments) || this;
e.dragonBones = null;
e.word_1 = null;
e.word_2 = null;
e.rootNode = null;
e.tipsTrait = null;
return e;
}
e.prototype.init = function(t, e, i) {
var o = this;
this.__state = t;
this.rootNode = e;
this.tipsTrait = i;
this.changeSkin();
setTimeout(function() {
if (cc.isValid(o.node)) {
o.node.active = !0;
o.updateTipsView();
}
}, 100);
if (hs.multiLangInfo.checkLangIsKorean()) {
null != this.word_1 && (this.word_1.font = null);
null != this.word_2 && (this.word_2.font = null);
}
};
e.prototype.changeSkin = function() {};
e.prototype.updateTipsView = function() {
var t, e = "gold1";
this.word_2.string = "Finish the season and full mosaic!";
var i = null, o = null;
if (cc.isValid(this.word_1) && (i = this.word_1.node.parent.getChildByName("gpLayout"))) {
o = null === (t = i.children[1]) || void 0 === t ? void 0 : t.getComponent(cc.Label);
i.active = !1;
}
switch (this.__state) {
case s.PASS:
e = "gold3";
this.word_1.string = "";
break;

case s.NOT_PASS:
e = "gold1";
if (this.tipsTrait.getFixedPassTarget() > 0) {
this.word_1.node.active = !0;
this.word_1.string = "Daily Goal: {0} levels";
var r = this.word_1.string;
r = hs.multiLangInfo.replaceString(r, [ this.tipsTrait.getLeftPassTimes() + "" ]);
this.word_1.string = r;
} else {
this.word_1.node.active = !0;
var a = (hs.chapterGameInfo.chapterAllNum || 96) - hs.chapterGameInfo.chapterNum;
this.word_1.string = "{0} Levels! Finish the season.";
r = this.word_1.string;
r = hs.multiLangInfo.replaceString(r, [ a + "" ]);
this.word_1.string = r;
}
break;

case s.BE_LIKE:
e = "gold2";
if (this.tipsTrait.getFixedPassTarget() > 0) {
this.word_1.node.active = !0;
this.word_1.string = "Daily Goal Complete!";
} else if (cc.isValid(i) && cc.isValid(o)) {
this.word_1.node.active = !1;
if (0 == (a = (hs.chapterGameInfo.chapterAllNum || 96) - hs.chapterGameInfo.chapterNum)) {
this.word_1.node.active = !0;
this.word_1.string = "Daily Goal Complete!";
} else {
i.active = !0;
var n = this.tipsTrait.getGpDem(), c = a < n ? 1 : n;
o.string = "" + c;
}
} else {
this.word_1.node.active = !0;
this.word_1.string = "Daily Goal Complete!";
}
}
if (this.__state !== s.NO_SHOW) {
this.dragonBones.playAnimation(e, 1);
this.autoAdapt();
} else this.node.active = !1;
};
e.prototype.autoAdapt = function() {
var t, e, i, o, r, a, n, s, c;
(null === (t = this.rootNode.getChildByName("ResultOptimizing_UI")) || void 0 === t ? void 0 : t.active) ? c = this.rootNode.getChildByName("ResultOptimizing_UI") : (null === (e = this.rootNode.getChildByName("scoreBoneAni")) || void 0 === e ? void 0 : e.active) ? c = this.rootNode.getChildByName("scoreBoneAni") : (null === (i = this.rootNode.getChildByName("scoreEffect")) || void 0 === i ? void 0 : i.active) ? c = this.rootNode.getChildByName("scoreEffect") : (null === (o = this.rootNode.getChildByName("Collect")) || void 0 === o ? void 0 : o.active) ? c = this.rootNode.getChildByName("Collect") : (null === (r = this.rootNode.getChildByName("collectItemNode")) || void 0 === r ? void 0 : r.active) ? c = this.rootNode.getChildByName("collectItemNode") : (null === (a = this.rootNode.getChildByName("Score")) || void 0 === a ? void 0 : a.active) && (c = this.rootNode.getChildByName("Score"));
(null === (n = this.rootNode.getChildByName("hardLevelDefeat")) || void 0 === n ? void 0 : n.active) && (c = this.rootNode.getChildByName("hardLevelDefeat"));
if (cc.isValid(c)) {
var l = this.rootNode.getChildByName("playBtn"), h = this.rootNode.getChildByName("playBtnIOS"), p = c.y, u = "ResultOptimizing_UI" === c.name ? -220 : this.getNodeBoundingBox(c).height, f = null === (s = this.rootNode) || void 0 === s ? void 0 : s.getChildByName("PassLevelReward"), d = 0;
if ("collectItemNode" === c.name) {
d = 40;
f && f.active && (f.y -= 20);
}
var m = 0;
if (f && f.active && "ResultOptimizing_UI" === c.name) f.y -= f.height + 40 + 150; else if (f && f.active && "scoreBoneAni" === c.name) {
m += 20;
f.y -= 50;
}
this.node.y = p - u / 2 - 40 - 42 - d;
var v = this.rootNode.name;
"scoreEffect" === c.name && "ChapterReduceScoreWin" == v ? this.node.y = this.node.y - 50 : "Score" === c.name ? this.node.y = this.node.y - 200 : "Collect" === c.name && (this.node.y = this.node.y + 80);
if ("hardLevelDefeat" === c.name) {
this.node.y = c.y - 513;
f && f.active && (f.y -= 50);
}
l && (l.y = this.node.y - 84 - 66 - l.height / 2 + m);
h && (h.y = this.node.y - 84 - 66 - h.height / 2 + m);
this.afterAutoAdapt();
} else this.node.active = !1;
};
e.prototype.afterAutoAdapt = function() {};
e.prototype.getNodeBoundingBox = function(t) {
var e = t || this.node, i = e.getBoundingBox();
if (0 === e.children.length) return i;
var o = i.x, r = i.y, a = i.x + i.width, s = i.y + i.height, c = function(t) {
var e, i;
try {
for (var l = n(t.children), h = l.next(); !h.done; h = l.next()) {
var p = h.value, u = p.getBoundingBox();
o = Math.min(o, u.x);
r = Math.min(r, u.y);
a = Math.max(a, u.x + u.width);
s = Math.max(s, u.y + u.height);
c(p);
}
} catch (t) {
e = {
error: t
};
} finally {
try {
h && !h.done && (i = l.return) && i.call(l);
} finally {
if (e) throw e.error;
}
}
};
c(e);
return cc.rect(o, r, a - o, s - r);
};
a([ h(dragonBones.ArmatureDisplay) ], e.prototype, "dragonBones", void 0);
a([ h(cc.Label) ], e.prototype, "word_1", void 0);
a([ h(cc.Label) ], e.prototype, "word_2", void 0);
return a([ classId("TravelPassLevelTipComponent"), l, classMethodWatch() ], e);
}(hs.Component);
i.default = p;
cc._RF.pop();
}, {} ]
}, {}, [ "TravelPassLevelTipComponent", "$28510_f_TravelPassTipsTrait", "$28510_f_TravelPassTips_isOptimization_Trait" ]);
//# sourceMappingURL=index.js.map
