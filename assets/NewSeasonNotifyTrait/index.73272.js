window.__require = function e(t, i, r) {
function n(o, s) {
if (!i[o]) {
if (!t[o]) {
var l = o.split("/");
l = l[l.length - 1];
if (!t[l]) {
var c = "function" == typeof __require && __require;
if (!s && c) return c(l, !0);
if (a) return a(l, !0);
throw new Error("Cannot find module '" + o + "'");
}
o = l;
}
var u = i[o] = {
exports: {}
};
t[o][0].call(u.exports, function(e) {
return n(t[o][1][e] || e);
}, u, u.exports, e, t, i, r);
}
return i[o].exports;
}
for (var a = "function" == typeof __require && __require, o = 0; o < r.length; o++) n(r[o]);
return n;
}({
CloneNodeSanitizer: [ function(e, t, i) {
"use strict";
cc._RF.push(t, "19254j4CmdCZYK6RVW/GkwP", "CloneNodeSanitizer");
var r = this && this.__values || function(e) {
var t = "function" == typeof Symbol && Symbol.iterator, i = t && e[t], r = 0;
if (i) return i.call(e);
if (e && "number" == typeof e.length) return {
next: function() {
e && r >= e.length && (e = void 0);
return {
value: e && e[r++],
done: !e
};
}
};
throw new TypeError(t ? "Object is not iterable." : "Symbol.iterator is not defined.");
};
Object.defineProperty(i, "__esModule", {
value: !0
});
var n = function() {
function e() {}
e.isRenderWhitelisted = function(e) {
return e instanceof cc.Sprite || e instanceof cc.Label || e instanceof cc.RichText;
};
e.isEmptyRenderComponent = function(e) {
if (e instanceof cc.Sprite) {
var t = e.spriteFrame;
if (!cc.isValid(t)) return !0;
var i = t;
return "function" == typeof i.textureLoaded && !i.textureLoaded() || !i._texture;
}
if (e instanceof cc.Label) return null == (r = e.string) || "" === r;
if (e instanceof cc.RichText) {
var r;
return null == (r = e.string) || "" === r;
}
return !1;
};
e.stripNonRenderComponents = function(t) {
for (var i, n, a, o, s = [ t ]; s.length > 0; ) {
var l = s.pop();
if (cc.isValid(l)) {
var c = l.getComponents(cc.Component);
try {
for (var u = (i = void 0, r(c)), p = u.next(); !p.done; p = u.next()) {
var d = p.value;
e.isRenderWhitelisted(d) || (d.enabled = !1);
}
} catch (e) {
i = {
error: e
};
} finally {
try {
p && !p.done && (n = u.return) && n.call(u);
} finally {
if (i) throw i.error;
}
}
try {
for (var h = (a = void 0, r(l.children)), f = h.next(); !f.done; f = h.next()) {
var _ = f.value;
s.push(_);
}
} catch (e) {
a = {
error: e
};
} finally {
try {
f && !f.done && (o = h.return) && o.call(h);
} finally {
if (a) throw a.error;
}
}
}
}
};
e.disableEmptyRenderComponents = function(t) {
for (var i, n, a, o, s = [ t ]; s.length > 0; ) {
var l = s.pop();
if (cc.isValid(l)) {
var c = l.getComponents(cc.Component);
try {
for (var u = (i = void 0, r(c)), p = u.next(); !p.done; p = u.next()) {
var d = p.value;
e.isEmptyRenderComponent(d) && (d.enabled = !1);
}
} catch (e) {
i = {
error: e
};
} finally {
try {
p && !p.done && (n = u.return) && n.call(u);
} finally {
if (i) throw i.error;
}
}
try {
for (var h = (a = void 0, r(l.children)), f = h.next(); !f.done; f = h.next()) {
var _ = f.value;
s.push(_);
}
} catch (e) {
a = {
error: e
};
} finally {
try {
f && !f.done && (o = h.return) && o.call(h);
} finally {
if (a) throw a.error;
}
}
}
}
};
e.sanitizeRenderFlags = function(e) {
cc.RenderComponent;
var t = cc.RenderFlow, i = t && null != t.FLAG_RENDER ? t.FLAG_RENDER : 8, n = t && null != t.FLAG_UPDATE_RENDER_DATA ? t.FLAG_UPDATE_RENDER_DATA : 16, a = t && null != t.FLAG_COLOR ? t.FLAG_COLOR : 4, o = t && null != t.FLAG_OPACITY ? t.FLAG_OPACITY : 2, s = i | n | a | o, l = [], c = function(e, t) {
var n, a, o;
if (cc.isValid(e)) {
var u = t + "/" + e.name, p = e, d = p._renderComponent, h = p._renderFlag || 0, f = !1, _ = "";
if (0 != (h & i)) if (d) {
var y = d;
if (!1 === y.enabled) {
f = !0;
_ = "renderFlag set but _renderComponent disabled";
} else if (!y._assembler) {
f = !0;
_ = ((null === (o = d.constructor) || void 0 === o ? void 0 : o.name) || "RenderComponent") + " _assembler=null (skip 1 frame, will self-heal)";
}
} else {
f = !0;
_ = "renderFlag set but _renderComponent=null";
}
if (f) {
p._renderFlag = h & ~s;
l.push({
path: u,
reason: _
});
}
try {
for (var g = r(e.children), v = g.next(); !v.done; v = g.next()) {
var b = v.value;
c(b, u);
}
} catch (e) {
n = {
error: e
};
} finally {
try {
v && !v.done && (a = g.return) && a.call(g);
} finally {
if (n) throw n.error;
}
}
}
};
c(e, "");
l.length;
};
e.dumpDiagnostics = function() {};
return e;
}();
i.default = n;
cc._RF.pop();
}, {} ],
MosaicData: [ function(e, t, i) {
"use strict";
cc._RF.push(t, "39f13Eb8CRCMpszZ6HMqzzB", "MosaicData");
Object.defineProperty(i, "__esModule", {
value: !0
});
i.loadNextMosaicData = i.clearNextMosaicData = i.getNextMosaicData = i.getCurrentMosaicData = void 0;
i.getCurrentMosaicData = function() {
return {
stage: hs.storage.getItem("chapterPeriodsIndex", 1),
themeName: hs.themeInfo.currentThemeName,
listCfg: hs.chapterConfigInfo.chapterListCfg,
way: hs.chapterConfigInfo.way,
order: hs.chapterConfigInfo.order
};
};
var r = null;
i.getNextMosaicData = function() {
return r;
};
i.clearNextMosaicData = function() {
r = null;
};
i.loadNextMosaicData = function() {
return new Promise(function(e) {
var t = hs.storage.getItem("chapterPeriodsIndex", 1) + 1, i = hs.themeInfo.getThemeConfig();
if (!Array.isArray(i) || t < 1 || t > i.length) {
r = null;
e(null);
} else {
var n = i[t - 1];
if (n) {
var a = "" + hs.chapterListDataUrl + n + "NoTheme";
hs.ResLoader.load(a, cc.JsonAsset, function(i, a) {
if (!i && a && a.json) {
var o = a.json, s = {
stage: t,
themeName: n,
listCfg: Array.isArray(o.arr) ? o.arr : [],
way: Array.isArray(o.way) ? o.way : [],
order: Array.isArray(o.order) ? o.order : []
};
r = s;
e(s);
} else {
r = null;
e(null);
}
});
} else {
r = null;
e(null);
}
}
});
};
cc._RF.pop();
}, {} ],
NewSeasonNodeMathUtil: [ function(e, t, i) {
"use strict";
cc._RF.push(t, "63d652kQkBGH5lh88obgCfZ", "NewSeasonNodeMathUtil");
var r = this && this.__values || function(e) {
var t = "function" == typeof Symbol && Symbol.iterator, i = t && e[t], r = 0;
if (i) return i.call(e);
if (e && "number" == typeof e.length) return {
next: function() {
e && r >= e.length && (e = void 0);
return {
value: e && e[r++],
done: !e
};
}
};
throw new TypeError(t ? "Object is not iterable." : "Symbol.iterator is not defined.");
};
Object.defineProperty(i, "__esModule", {
value: !0
});
var n = function() {
function e() {}
e.bounceOutCustom = function(e, t) {
if (e <= 0) return 0;
if (e >= 1) return 1;
var i = 10 - 9 * Math.max(0, Math.min(1, t));
return 1 - Math.exp(-i * e) * Math.cos(1.5 * Math.PI * e);
};
e.bounceInCustom = function(t, i) {
return 1 - e.bounceOutCustom(1 - t, i);
};
e.getWorldScale = function(e) {
for (var t = 1, i = 1, r = e, n = cc.director.getScene(); cc.isValid(r, !0) && r !== n; ) {
t *= r.scaleX;
i *= r.scaleY;
r = r.parent;
}
return {
x: t,
y: i
};
};
e.getWorldAngle = function(e) {
for (var t = 0, i = e, r = cc.director.getScene(); cc.isValid(i, !0) && i !== r; ) {
t += i.angle;
i = i.parent;
}
return t;
};
e.alignNodeWorldTransformTo = function(t, i) {
if (cc.isValid(t, !0) && cc.isValid(i, !0)) {
var r = t.parent, n = i.parent;
if (cc.isValid(r, !0) && cc.isValid(n, !0)) {
var a = n.convertToWorldSpaceAR(i.position), o = r.convertToNodeSpaceAR(a);
t.setPosition(o);
var s = e.getWorldScale(i), l = e.getWorldScale(r);
t.scaleX = 0 !== l.x ? s.x / l.x : s.x;
t.scaleY = 0 !== l.y ? s.y / l.y : s.y;
t.angle = e.getWorldAngle(i) - e.getWorldAngle(r);
}
}
};
e.findAttachedNodeByBone = function(e, t) {
var i = "ATTACHED_NODE:" + t, r = function(e) {
if (!cc.isValid(e, !0)) return null;
if (e.name === i) return e;
for (var t = 0; t < e.children.length; t++) {
var n = r(e.children[t]);
if (n) return n;
}
return null;
};
return r(e);
};
e.getSpSkeleton = function(e) {
return cc.isValid(e, !0) ? e.getComponent(sp.Skeleton) : null;
};
e.clearAllBoneAttachments = function(e) {
if (cc.isValid(e)) {
var t = function(e) {
var i, n, a, o;
if (cc.isValid(e)) if (e.name && 0 === e.name.indexOf("ATTACHED_NODE:")) {
var s = e.children.slice();
try {
for (var l = r(s), c = l.next(); !c.done; c = l.next()) {
var u = c.value;
if (cc.isValid(u)) {
cc.Tween.stopAllByTarget(u);
u.parent = null;
u.destroy();
}
}
} catch (e) {
i = {
error: e
};
} finally {
try {
c && !c.done && (n = l.return) && n.call(l);
} finally {
if (i) throw i.error;
}
}
} else try {
for (var p = r(e.children), d = p.next(); !d.done; d = p.next()) {
u = d.value;
t(u);
}
} catch (e) {
a = {
error: e
};
} finally {
try {
d && !d.done && (o = p.return) && o.call(p);
} finally {
if (a) throw a.error;
}
}
};
t(e);
}
};
return e;
}();
i.default = n;
cc._RF.pop();
}, {} ],
NewSeasonNotifyTrait: [ function(e, t, i) {
"use strict";
cc._RF.push(t, "b12dbsotcNDzq055KQyhTfl", "NewSeasonNotifyTrait");
var r, n = this && this.__extends || (r = function(e, t) {
return (r = Object.setPrototypeOf || {
__proto__: []
} instanceof Array && function(e, t) {
e.__proto__ = t;
} || function(e, t) {
for (var i in t) Object.prototype.hasOwnProperty.call(t, i) && (e[i] = t[i]);
})(e, t);
}, function(e, t) {
r(e, t);
function i() {
this.constructor = e;
}
e.prototype = null === t ? Object.create(t) : (i.prototype = t.prototype, new i());
}), a = this && this.__decorate || function(e, t, i, r) {
var n, a = arguments.length, o = a < 3 ? t : null === r ? r = Object.getOwnPropertyDescriptor(t, i) : r;
if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) o = Reflect.decorate(e, t, i, r); else for (var s = e.length - 1; s >= 0; s--) (n = e[s]) && (o = (a < 3 ? n(o) : a > 3 ? n(t, i, o) : n(t, i)) || o);
return a > 3 && o && Object.defineProperty(t, i, o), o;
}, o = this && this.__awaiter || function(e, t, i, r) {
return new (i || (i = Promise))(function(n, a) {
function o(e) {
try {
l(r.next(e));
} catch (e) {
a(e);
}
}
function s(e) {
try {
l(r.throw(e));
} catch (e) {
a(e);
}
}
function l(e) {
e.done ? n(e.value) : (t = e.value, t instanceof i ? t : new i(function(e) {
e(t);
})).then(o, s);
var t;
}
l((r = r.apply(e, t || [])).next());
});
}, s = this && this.__generator || function(e, t) {
var i, r, n, a, o = {
label: 0,
sent: function() {
if (1 & n[0]) throw n[1];
return n[1];
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
function s(e) {
return function(t) {
return l([ e, t ]);
};
}
function l(a) {
if (i) throw new TypeError("Generator is already executing.");
for (;o; ) try {
if (i = 1, r && (n = 2 & a[0] ? r.return : a[0] ? r.throw || ((n = r.return) && n.call(r), 
0) : r.next) && !(n = n.call(r, a[1])).done) return n;
(r = 0, n) && (a = [ 2 & a[0], n.value ]);
switch (a[0]) {
case 0:
case 1:
n = a;
break;

case 4:
o.label++;
return {
value: a[1],
done: !1
};

case 5:
o.label++;
r = a[1];
a = [ 0 ];
continue;

case 7:
a = o.ops.pop();
o.trys.pop();
continue;

default:
if (!(n = o.trys, n = n.length > 0 && n[n.length - 1]) && (6 === a[0] || 2 === a[0])) {
o = 0;
continue;
}
if (3 === a[0] && (!n || a[1] > n[0] && a[1] < n[3])) {
o.label = a[1];
break;
}
if (6 === a[0] && o.label < n[1]) {
o.label = n[1];
n = a;
break;
}
if (n && o.label < n[2]) {
o.label = n[2];
o.ops.push(a);
break;
}
n[2] && o.ops.pop();
o.trys.pop();
continue;
}
a = t.call(e, o);
} catch (e) {
a = [ 6, e ];
r = 0;
} finally {
i = n = 0;
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
i.NewSeasonNotifyTrait = void 0;
var l = e("./NewSeasonNotifyView"), c = e("./vo/MosaicData"), u = function(e) {
n(t, e);
function t() {
var t = null !== e && e.apply(this, arguments) || this;
t.BUNDLE_NAME = "NewSeasonNotifyTrait";
t.PREFAB_PATH = "prefabs/NewSeasonNotifyView";
t.LEVEL0_BASE_FALLBACK_SEC = 2.5;
t.FLIP_START_AFTER_REPLAY_SEC = 2;
t.DEBUG_ALWAYS_TRIGGER = !1;
t._bubblePrefab = null;
t._bubbleNode = null;
t._bubbleView = null;
t._isAnimating = !1;
t._inputBlockerNode = null;
t._pendingLevel0WaitMosaicBase = !1;
t._level0FallbackCoId = null;
t._resourcesReady = !1;
t._resourcesFailed = !1;
t._pendingLoadCount = 0;
return t;
}
t.prototype._sleep = function(e) {
var t = this, i = Math.max(0, e);
return new Promise(function(e) {
hs.CoroutineManager.startCoroutine(function() {
return s(this, function(t) {
switch (t.label) {
case 0:
return [ 4, hs.waitForSeconds(i) ];

case 1:
t.sent();
e();
return [ 2 ];
}
});
}(), t);
});
};
Object.defineProperty(t.prototype, "onActiveCondition", {
get: function() {
return this.isActiveCondition();
},
enumerable: !1,
configurable: !0
});
t.prototype.isActiveCondition = function() {
return !0;
};
t.prototype.onCreate = function() {
this.DEBUG_ALWAYS_TRIGGER && hs.storage.getItem("newSeasonNotify_triggered", !1) && hs.storage.setItem("newSeasonNotify_triggered", !1);
this._preloadTraitResources();
};
t.prototype.onActive = function(e) {
hs.tp.isChapterListChapterListShowAfter(e) && this._onChapterListShowAfter();
if (hs.tp.isChapterContentCurChapterPosComplete(e)) {
var t = e.target;
this._onMosaicBaseLayoutReady(t);
}
(hs.tp.isChapterListOnClickBack(e) || hs.tp.isChapterListOnClickStartGame(e)) && this._onChapterListLeaving(hs.tp.isChapterListOnClickBack(e) ? "onClickBack" : "onClickStartGame");
};
t.prototype._onChapterListLeaving = function() {
(this._isAnimating || this._pendingLevel0WaitMosaicBase || cc.isValid(this._bubbleNode, !0) || null != this._level0FallbackCoId) && this._cleanup();
};
t.prototype._preloadTraitResources = function() {
var e = this;
this._resourcesReady = !1;
this._resourcesFailed = !1;
var t = [];
t.push(function(t) {
hs.ResLoader.loadByBundle(e.BUNDLE_NAME, e.PREFAB_PATH, cc.Prefab, function(i, r) {
if (i) t(i); else {
cc.isValid(r) && (e._bubblePrefab = r);
t();
}
});
});
Array.from(new Set([ l.NewSeasonPageFlipSfx.travel_page_pop, l.NewSeasonPageFlipSfx.travel_page_rotate, l.NewSeasonPageFlipSfx.travel_page_1_2, l.NewSeasonPageFlipSfx.travel_page_3 ])).forEach(function(i) {
t.push(function(t) {
hs.ResLoader.loadByBundle(e.BUNDLE_NAME, i, cc.AudioClip, function(e) {
t(e);
});
});
});
this._pendingLoadCount = t.length;
0 !== this._pendingLoadCount ? t.forEach(function(t) {
t(function(t) {
return e._onSingleResourceDone(t);
});
}) : this._resourcesReady = !0;
};
t.prototype._onSingleResourceDone = function(e) {
e && (this._resourcesFailed = !0);
this._pendingLoadCount = Math.max(0, this._pendingLoadCount - 1);
0 === this._pendingLoadCount && (this._resourcesReady = !this._resourcesFailed);
};
t.prototype._isResourcesReady = function() {
return !this._resourcesFailed && !!this._resourcesReady && !!cc.isValid(this._bubblePrefab);
};
t.prototype._onChapterListShowAfter = function() {
var e;
if (this._isResourcesReady()) if (this._isAnimating) ; else if (this.DEBUG_ALWAYS_TRIGGER || !hs.storage.getItem("newSeasonNotify_triggered", !1)) {
var t = null !== (e = this.props.triggerLevel) && void 0 !== e ? e : 0;
if (0 !== t) {
this._resetLevel0PendingOnly();
if (this._meetsPositiveTriggerLevel(t)) {
var i = Cinst(hs.ChapterContent);
if (cc.isValid(i) && cc.isValid(i.node, !0)) {
this.startPlayAni();
this._startGuideReplayBubbleThenFlip(i);
}
}
} else this._armLevel0WaitForMosaicBase();
}
};
t.prototype.startPlayAni = function() {};
t.prototype._onMosaicBaseLayoutReady = function(e) {
var t;
if (this._pendingLevel0WaitMosaicBase && !this._isAnimating && this._isResourcesReady() && cc.isValid(e) && cc.isValid(e.node, !0)) {
this._cancelLevel0Fallback();
this._pendingLevel0WaitMosaicBase = !1;
if (!hs.storage.getItem("newSeasonNotify_triggered", !1) && 0 === (null !== (t = this.props.triggerLevel) && void 0 !== t ? t : 0)) {
this.startPlayAni();
this._startGuideReplayBubbleThenFlip(e);
}
}
};
t.prototype._meetsPositiveTriggerLevel = function(e) {
return !!this.DEBUG_ALWAYS_TRIGGER || hs.chapterGameInfo.chapterNum >= e;
};
t.prototype._armLevel0WaitForMosaicBase = function() {
this._pendingLevel0WaitMosaicBase = !0;
this._scheduleLevel0Fallback();
};
t.prototype._scheduleLevel0Fallback = function() {
this._cancelLevel0Fallback();
var e = Cinst(hs.ChapterContent);
cc.isValid(e) && cc.isValid(e.node, !0) && (this._level0FallbackCoId = hs.CoroutineManager.startCoroutine(this._coScheduleLevel0Fallback(), this));
};
t.prototype._coScheduleLevel0Fallback = function() {
var e;
return s(this, function(t) {
switch (t.label) {
case 0:
return [ 4, hs.waitForSeconds(this.LEVEL0_BASE_FALLBACK_SEC) ];

case 1:
t.sent();
this._level0FallbackCoId = null;
if (!this._pendingLevel0WaitMosaicBase || this._isAnimating) return [ 2 ];
if (!this._isResourcesReady()) {
this._pendingLevel0WaitMosaicBase = !1;
return [ 2 ];
}
if (hs.storage.getItem("newSeasonNotify_triggered", !1)) {
this._pendingLevel0WaitMosaicBase = !1;
return [ 2 ];
}
e = Cinst(hs.ChapterContent);
if (!cc.isValid(e) || !cc.isValid(e.node, !0)) {
this._pendingLevel0WaitMosaicBase = !1;
return [ 2 ];
}
this._pendingLevel0WaitMosaicBase = !1;
this.startPlayAni();
this._startGuideReplayBubbleThenFlip(e);
return [ 2 ];
}
});
};
t.prototype._cancelLevel0Fallback = function() {
if (null != this._level0FallbackCoId) {
hs.CoroutineManager.stopCoroutine(this._level0FallbackCoId);
this._level0FallbackCoId = null;
}
};
t.prototype._resetLevel0PendingOnly = function() {
this._pendingLevel0WaitMosaicBase = !1;
this._cancelLevel0Fallback();
};
t.prototype._markTriggered = function() {
this.DEBUG_ALWAYS_TRIGGER || hs.storage.setItem("newSeasonNotify_triggered", !0);
};
t.prototype._replayMosaicBaseScroll = function(e) {
var t = e;
if (t && "function" == typeof t.setState) {
t.state && t.state.isPreviewAllThrough && t.setState({
isPreviewAllThrough: !1
});
t.setState({
isPreviewAllThrough: !0
});
}
};
t.prototype._startGuideReplayBubbleThenFlip = function(e) {
return o(this, void 0, Promise, function() {
return s(this, function(t) {
switch (t.label) {
case 0:
if (this._isAnimating) return [ 2 ];
this._isAnimating = !0;
this._createInputBlocker();
return [ 4, this._sleep(0) ];

case 1:
t.sent();
if (!this._isAnimating) return [ 2 ];
if (!cc.isValid(e) || !cc.isValid(e.node, !0)) {
this._cleanup();
return [ 2 ];
}
this._replayMosaicBaseScroll(e);
this._showBubbleThenFlip(e);
return [ 2 ];
}
});
});
};
t.prototype._collectViewParams = function() {
var e, t = this;
return {
triggerLevel: null !== (e = this.props.triggerLevel) && void 0 !== e ? e : 0,
pageEffectType: this._getPageEffectType(),
playPageFlipSfx: function(e) {
hs.audioInfo.play({
url: e,
type: hs.AudioType.EFFECT,
volume: 1,
bundleName: t.BUNDLE_NAME
});
}
};
};
t.prototype._showBubbleThenFlip = function(e) {
return o(this, void 0, Promise, function() {
var t, i, r, n, a, o, u, p, d = this;
return s(this, function(s) {
switch (s.label) {
case 0:
if (!cc.isValid(this._bubblePrefab)) {
this._cleanup();
return [ 2 ];
}
t = e.node;
if (!cc.isValid(t, !0)) {
this._cleanup();
return [ 2 ];
}
i = e.itemContainer;
if (!cc.isValid(i, !0)) {
this._cleanup();
return [ 2 ];
}
r = Cinst(hs.ChapterList);
n = null;
n = cc.isValid(r) && cc.isValid(r.node, !0) ? r.node : t.parent;
if (!cc.isValid(n, !0)) {
this._cleanup();
return [ 2 ];
}
this._bubbleNode = cc.instantiate(this._bubblePrefab);
this._bubbleNode.name = "NewSeasonNotifyBubble";
n.addChild(this._bubbleNode);
this._bubbleNode.setSiblingIndex(-1);
this._bubbleView = this._bubbleNode.getComponent(l.default);
if (!this._bubbleView) {
this._cleanup();
return [ 2 ];
}
this._markTriggered();
a = this._collectViewParams();
this._bubbleView.init(a);
o = this._bubbleNode;
c.loadNextMosaicData().then(function() {
if (cc.isValid(o, !0) && d._bubbleNode === o && d._bubbleView) {
var e = c.getNextMosaicData();
e && d.changeData(e);
d._bubbleView.onNextMosaicDataReady();
}
});
this._bubbleView.prepareNextMosaic(i, a.pageEffectType);
u = 2 === a.pageEffectType;
p = u ? 0 : this.FLIP_START_AFTER_REPLAY_SEC;
this._bubbleView.playEnter(function() {});
return p > 0 ? [ 4, this._sleep(p) ] : [ 3, 2 ];

case 1:
s.sent();
if (!this._isAnimating) return [ 2 ];
this._playPageFlipThenExit(e);
return [ 3, 3 ];

case 2:
this._playPageFlipThenExit(e);
s.label = 3;

case 3:
return [ 2 ];
}
});
});
};
t.prototype.changeData = function() {};
t.prototype._getPageEffectType = function() {
var e;
return 2 === (null !== (e = this.props.pageEffectType) && void 0 !== e ? e : 1) ? 2 : 1;
};
t.prototype._playPageFlipThenExit = function(e) {
var t = this;
if (cc.isValid(e) && cc.isValid(e.node, !0)) {
var i = e.itemContainer;
if (cc.isValid(i, !0)) if (this._bubbleView) {
this._bubbleView.setPageFlipCompanions([ e.curChapterBtn ]);
this._bubbleView.playPageFlip(i, function() {
t._exitBubbleThenCleanup();
});
} else this._cleanup(); else this._exitBubbleThenCleanup();
} else this._exitBubbleThenCleanup();
};
t.prototype._exitBubbleThenCleanup = function() {
var e = this;
this._bubbleView ? this._bubbleView.playExit(function() {
return e._cleanup();
}) : this._cleanup();
};
t.prototype._destroyBubble = function() {
if (this._bubbleView) {
this._bubbleView.stopAnim();
this._bubbleView = null;
}
if (cc.isValid(this._bubbleNode, !0)) {
cc.Tween.stopAllByTarget(this._bubbleNode);
this._bubbleNode.destroy();
this._bubbleNode = null;
}
};
t.prototype._cleanup = function() {
this._bubbleView && this._bubbleView.abortPageFlip();
this._resetLevel0PendingOnly();
c.clearNextMosaicData();
this._destroyBubble();
this._destroyInputBlocker();
this._isAnimating = !1;
this.playAniEnd();
};
t.prototype.playAniEnd = function() {};
t.prototype._createInputBlocker = function() {
this._destroyInputBlocker();
var e = null, t = cc.Canvas.instance;
if (t && cc.isValid(t.node, !0)) e = t.node; else {
var i = Cinst(hs.ChapterList);
if (cc.isValid(i) && cc.isValid(i.node, !0)) e = i.node.parent; else {
var r = Cinst(hs.ChapterContent);
cc.isValid(r) && cc.isValid(r.node, !0) && cc.isValid(r.node.parent, !0) && (e = r.node.parent);
}
}
if (cc.isValid(e, !0)) {
var n = new cc.Node("NewSeasonNotifyInputBlocker"), a = cc.view.getVisibleSize();
n.setContentSize(a.width, a.height);
n.setAnchorPoint(.5, .5);
var o = n.addComponent(cc.Widget);
o.isAlignTop = !0;
o.isAlignBottom = !0;
o.isAlignLeft = !0;
o.isAlignRight = !0;
o.top = 0;
o.bottom = 0;
o.left = 0;
o.right = 0;
n.addComponent(cc.BlockInputEvents);
e.addChild(n);
n.setSiblingIndex(e.childrenCount - 1);
this._inputBlockerNode = n;
}
};
t.prototype._destroyInputBlocker = function() {
cc.isValid(this._inputBlockerNode, !0) && this._inputBlockerNode.destroy();
this._inputBlockerNode = null;
};
return a([ classId("NewSeasonNotifyTrait"), classMethodWatch() ], t);
}(Trait);
i.NewSeasonNotifyTrait = u;
cc._RF.pop();
}, {
"./NewSeasonNotifyView": "NewSeasonNotifyView",
"./vo/MosaicData": "MosaicData"
} ],
NewSeasonNotifyView: [ function(e, t, i) {
"use strict";
cc._RF.push(t, "460d5z+NjVJMK2PcBD1rY5i", "NewSeasonNotifyView");
var r, n = this && this.__extends || (r = function(e, t) {
return (r = Object.setPrototypeOf || {
__proto__: []
} instanceof Array && function(e, t) {
e.__proto__ = t;
} || function(e, t) {
for (var i in t) Object.prototype.hasOwnProperty.call(t, i) && (e[i] = t[i]);
})(e, t);
}, function(e, t) {
r(e, t);
function i() {
this.constructor = e;
}
e.prototype = null === t ? Object.create(t) : (i.prototype = t.prototype, new i());
}), a = this && this.__decorate || function(e, t, i, r) {
var n, a = arguments.length, o = a < 3 ? t : null === r ? r = Object.getOwnPropertyDescriptor(t, i) : r;
if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) o = Reflect.decorate(e, t, i, r); else for (var s = e.length - 1; s >= 0; s--) (n = e[s]) && (o = (a < 3 ? n(o) : a > 3 ? n(t, i, o) : n(t, i)) || o);
return a > 3 && o && Object.defineProperty(t, i, o), o;
}, o = this && this.__awaiter || function(e, t, i, r) {
return new (i || (i = Promise))(function(n, a) {
function o(e) {
try {
l(r.next(e));
} catch (e) {
a(e);
}
}
function s(e) {
try {
l(r.throw(e));
} catch (e) {
a(e);
}
}
function l(e) {
e.done ? n(e.value) : (t = e.value, t instanceof i ? t : new i(function(e) {
e(t);
})).then(o, s);
var t;
}
l((r = r.apply(e, t || [])).next());
});
}, s = this && this.__generator || function(e, t) {
var i, r, n, a, o = {
label: 0,
sent: function() {
if (1 & n[0]) throw n[1];
return n[1];
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
function s(e) {
return function(t) {
return l([ e, t ]);
};
}
function l(a) {
if (i) throw new TypeError("Generator is already executing.");
for (;o; ) try {
if (i = 1, r && (n = 2 & a[0] ? r.return : a[0] ? r.throw || ((n = r.return) && n.call(r), 
0) : r.next) && !(n = n.call(r, a[1])).done) return n;
(r = 0, n) && (a = [ 2 & a[0], n.value ]);
switch (a[0]) {
case 0:
case 1:
n = a;
break;

case 4:
o.label++;
return {
value: a[1],
done: !1
};

case 5:
o.label++;
r = a[1];
a = [ 0 ];
continue;

case 7:
a = o.ops.pop();
o.trys.pop();
continue;

default:
if (!(n = o.trys, n = n.length > 0 && n[n.length - 1]) && (6 === a[0] || 2 === a[0])) {
o = 0;
continue;
}
if (3 === a[0] && (!n || a[1] > n[0] && a[1] < n[3])) {
o.label = a[1];
break;
}
if (6 === a[0] && o.label < n[1]) {
o.label = n[1];
n = a;
break;
}
if (n && o.label < n[2]) {
o.label = n[2];
o.ops.push(a);
break;
}
n[2] && o.ops.pop();
o.trys.pop();
continue;
}
a = t.call(e, o);
} catch (e) {
a = [ 6, e ];
r = 0;
} finally {
i = n = 0;
}
if (5 & a[0]) throw a[1];
return {
value: a[0] ? a[1] : void 0,
done: !0
};
}
}, l = this && this.__values || function(e) {
var t = "function" == typeof Symbol && Symbol.iterator, i = t && e[t], r = 0;
if (i) return i.call(e);
if (e && "number" == typeof e.length) return {
next: function() {
e && r >= e.length && (e = void 0);
return {
value: e && e[r++],
done: !e
};
}
};
throw new TypeError(t ? "Object is not iterable." : "Symbol.iterator is not defined.");
}, c = this && this.__read || function(e, t) {
var i = "function" == typeof Symbol && e[Symbol.iterator];
if (!i) return e;
var r, n, a = i.call(e), o = [];
try {
for (;(void 0 === t || t-- > 0) && !(r = a.next()).done; ) o.push(r.value);
} catch (e) {
n = {
error: e
};
} finally {
try {
r && !r.done && (i = a.return) && i.call(a);
} finally {
if (n) throw n.error;
}
}
return o;
}, u = this && this.__spread || function() {
for (var e = [], t = 0; t < arguments.length; t++) e = e.concat(c(arguments[t]));
return e;
};
Object.defineProperty(i, "__esModule", {
value: !0
});
i.NewSeasonPageFlipSfx = void 0;
var p = e("./vo/MosaicData"), d = e("./CloneNodeSanitizer"), h = e("./NewSeasonNodeMathUtil"), f = e("./pageflip/Style2PageFlipController"), _ = cc._decorator, y = _.ccclass, g = _.property;
i.NewSeasonPageFlipSfx = {
travel_page_pop: "audios/travel_page_pop",
travel_page_rotate: "audios/travel_page_rotate",
travel_page_1_2: "audios/travel_page_1_2",
travel_page_3: "audios/travel_page_3"
};
var v = function(e) {
n(t, e);
function t() {
var t = null !== e && e.apply(this, arguments) || this;
t.adventure_bg_tips_node = null;
t.mosaic_roll = null;
t._style2PageFlipController = null;
t.slideInDuration = .5;
t.slideOutDuration = .5;
t.offscreenPadding = 20;
t.bounceAmplitude = .5;
t._bubbleOriginX = 0;
t._offscreenOffsetX = 0;
t.STYLE1_PRE_DELAY_SEC = 0;
t.STYLE1_ROTATE_DURATION_SEC = .5;
t.STYLE1_CLONE_PREVIEW_GROUP_STEP_SEC = .03;
t.STYLE1_CLONE_PREVIEW_FADE_SEC = .2;
t.STYLE1_CLONE_PREVIEW_DIAGONAL_STEP_SEC = .03;
t.STYLE1_CLONE_PREVIEW_WAVE_RATIO = .2;
t.STYLE1_CLONE_PREVIEW_WAVE_SCALE = 1.1;
t.STYLE1_CLONE_PREVIEW_WAVE_OFFSET_Y = 10;
t.STYLE1_PHASE_OFFSET_SEC = 0;
t.style1ClonePreviewPreStartSec = 1;
t.style2ClonePreviewPreStartSec = 1;
t.nextMosaicShowLevelNumber = !1;
t.style2SfxDelayPage1 = 0;
t.style2MosaicXRatio = 0;
t.style2MosaicXOffset = 0;
t.style2MosaicYRatio = 0;
t.style2MosaicYOffset = 0;
t.style2MaskExtraAngle = -62;
t.style2MaskRectSideMultiplier = 5;
t.style2MaskCornerOffsetX = 625;
t.style2MaskCornerOffsetY = 625;
t._params = null;
t._nextColorSeq = [];
t._nextColorFrameCache = {};
t._cloneItemComps = [];
t._flowAnimPlayed = !1;
t._pageFlipAbortHandler = null;
t._preparedNextMosaicNode = null;
t._preparedNextMosaicParent = null;
t._preparedNextMosaicSiblingIdx = 0;
t._preparedNextMosaicStyle = 1;
t._activeNextMosaicNode = null;
t._pageFlipCompanions = [];
t._chapterItemPrefab = null;
t._chapterLevelTxtPrefab = null;
t._commonBgFrame = null;
t._hostLayoutRebuilt = !1;
t._hostLayoutRebuilding = !1;
return t;
}
t.prototype.getDefaultState = function() {
return {
isVisible: !0
};
};
t.prototype.onLoad = function() {
this._initBubbleLayout();
cc.isValid(this.mosaic_roll, !0) && (this.mosaic_roll.active = !1);
this.setState(this.getDefaultState());
};
t.prototype.init = function(e) {
if (e) {
this._params = {
triggerLevel: e.triggerLevel,
pageEffectType: 2 === e.pageEffectType ? 2 : 1,
playPageFlipSfx: e.playPageFlipSfx
};
this._applyBubbleTextByParams();
cc.isValid(this.mosaic_roll, !0) && (this.mosaic_roll.active = !1);
}
};
t.prototype.onNextMosaicDataReady = function() {
var e = p.getNextMosaicData();
this._nextColorSeq = this._computeNextColorSeq(e);
this._logNextMosaicData("onNextMosaicDataReady");
this._preloadNextColorFrames(this._nextColorSeq);
this._tryRepaintCloneByNextData("onNextMosaicDataReady");
};
t.prototype._preloadNextColorFrames = function(e) {
var t, i, r, n;
if (Array.isArray(e) && 0 !== e.length) {
var a = new Set();
try {
for (var o = l(e), s = o.next(); !s.done; s = o.next()) "number" != typeof (p = s.value) || isNaN(p) || p <= 0 || a.add(p);
} catch (e) {
t = {
error: e
};
} finally {
try {
s && !s.done && (i = o.return) && i.call(o);
} finally {
if (t) throw t.error;
}
}
try {
for (var c = l(a), u = c.next(); !u.done; u = c.next()) {
var p = u.value;
this._nextColorFrameCache[p] || this._loadNextColorFrame(p, function() {});
}
} catch (e) {
r = {
error: e
};
} finally {
try {
u && !u.done && (n = c.return) && n.call(c);
} finally {
if (r) throw r.error;
}
}
}
};
t.prototype._computeNextColorSeq = function(e) {
if (!e || !Array.isArray(e.listCfg) || 0 === e.listCfg.length) return [];
for (var t = [], i = e.listCfg.length - 1; i >= 0; i--) {
var r = e.listCfg[i];
if (Array.isArray(r)) for (var n = 0; n < r.length; n++) -1 !== r[n] && t.push(r[n]);
}
if (2 === (Array.isArray(e.way) && e.way.length > 0 ? e.way[0] : 0) && Array.isArray(e.order) && e.order.length === t.length) {
var a = new Array(t.length);
for (i = 0; i < e.order.length; i++) {
var o = e.order[i];
o >= 0 && o < t.length && (a[i] = t[o]);
}
return a;
}
return t;
};
t.prototype._tryRepaintCloneByNextData = function(e) {
var t = p.getNextMosaicData();
if (t && 0 !== this._nextColorSeq.length) {
var i = cc.isValid(this._preparedNextMosaicNode, !0) ? this._preparedNextMosaicNode : cc.isValid(this._activeNextMosaicNode, !0) ? this._activeNextMosaicNode : null;
i && (this._hostLayoutRebuilt || this._hostLayoutRebuilding ? this._repaintCloneByNextData(i, e) : this._rebuildHostToNextLayout(i, t, e));
}
};
t.prototype._repaintCloneByNextData = function(e) {
var t, i;
if (cc.isValid(e, !0)) {
var r = e.getComponentsInChildren(hs.ChapterItem), n = [];
try {
for (var a = l(r), o = a.next(); !o.done; o = a.next()) {
var s = o.value;
s && cc.isValid(s, !0) && cc.isValid(s.node, !0) && n.push(s);
}
} catch (e) {
t = {
error: e
};
} finally {
try {
o && !o.done && (i = a.return) && i.call(a);
} finally {
if (t) throw t.error;
}
}
this._cloneItemComps = n;
for (var c = this._nextColorSeq, u = function(e) {
var t = n[e], i = t.colorImg, r = i ? i.node : null;
if (!cc.isValid(r, !0)) return "continue";
if (e >= c.length) {
r.active = !1;
return "continue";
}
var a = c[e];
if (isNaN(a) || a <= 0) {
r.active = !1;
return "continue";
}
r.active = !0;
r.opacity = 255;
r.scale = 1;
i.enabled = !0;
var o = p._nextColorFrameCache[a];
o ? i.spriteFrame = o : p._loadNextColorFrame(a, function(e) {
if (e && cc.isValid(t, !0) && cc.isValid(t.node, !0) && cc.isValid(i, !0) && cc.isValid(r, !0)) {
i.enabled = !0;
i.spriteFrame = e;
}
});
}, p = this, d = 0; d < n.length; d++) u(d);
}
};
t.prototype._loadNextColorFrame = function(e, t) {
var i = this, r = hs.chapterItemBlockColorResMap && hs.chapterItemBlockColorResMap[e] || e;
if (r && !isNaN(r)) {
var n = "textures/chapterList/periods/block/" + r, a = this._nextColorFrameCache[e];
a ? t(a) : hs.ResLoader.loadByBundle("chapter", n, cc.SpriteFrame, function(r, n) {
if (!r && n) {
i._nextColorFrameCache[e] = n;
t(n);
} else t(null);
});
} else t(null);
};
t.prototype._playCloneFlowAnim = function(e) {
if (!this._flowAnimPlayed) {
this._flowAnimPlayed = !0;
if (cc.isValid(e, !0)) {
var t = this._cloneItemComps;
t && 0 !== t.length || (t = e.getComponentsInChildren(hs.ChapterItem));
for (var i = 0; i < t.length; i++) {
var r = t[i];
if (r && cc.isValid(r.node, !0)) {
var n = r.colorImg ? r.colorImg.node : null, a = r.light, o = .02 * i;
if (cc.isValid(n, !0)) {
cc.Tween.stopAllByTarget(n);
n.scale = .2;
n.opacity = 255;
cc.tween(n).delay(o).to(.1, {
scale: 1.05
}).to(.7, {
scale: 1
}).start();
}
if (cc.isValid(a, !0)) {
cc.Tween.stopAllByTarget(a);
a.opacity = 0;
cc.tween(a).delay(o).to(.1, {
opacity: 255
}).to(.17, {
opacity: 0
}).start();
}
}
}
}
}
};
t.prototype._logNextMosaicData = function() {};
t.prototype._applyBubbleTextByParams = function() {
if (this._params) {
var e = 0 === this._params.triggerLevel ? 1 : 2;
this._setBubbleTextInternal(e);
}
};
t.prototype._sleep = function(e) {
var t = this, i = Math.max(0, e);
return new Promise(function(e) {
hs.CoroutineManager.startCoroutine(function() {
return s(this, function(t) {
switch (t.label) {
case 0:
return [ 4, hs.waitForSeconds(i) ];

case 1:
t.sent();
e();
return [ 2 ];
}
});
}(), t);
});
};
t.prototype._tweenToAsync = function(e, t, i, r) {
var n = this, a = Math.max(0, t);
return new Promise(function(t) {
if (cc.isValid(e, !0)) {
var o = !1, l = function() {
if (!o) {
o = !0;
t();
}
}, c = r ? {
easing: r
} : void 0;
cc.tween(e).to(a, i, c).call(l).start();
hs.CoroutineManager.startCoroutine(function() {
return s(this, function(e) {
switch (e.label) {
case 0:
return [ 4, hs.waitForSeconds(a + .05) ];

case 1:
e.sent();
l();
return [ 2 ];
}
});
}(), n);
} else t();
});
};
t.prototype._initBubbleLayout = function() {
if (cc.isValid(this.adventure_bg_tips_node, !0)) {
this._bubbleOriginX = this.adventure_bg_tips_node.x;
var e = cc.view.getVisibleSize().width, t = this.adventure_bg_tips_node.width > 0 ? this.adventure_bg_tips_node.width : e;
this._offscreenOffsetX = e / 2 + t / 2 + this.offscreenPadding;
}
};
t.prototype.render = function() {
var e = this.state.isVisible;
this.node.active = !1 !== e;
};
t.prototype.playEnterStayExit = function(e, t) {
return o(this, void 0, Promise, function() {
var r, n, a, o = this;
return s(this, function(s) {
switch (s.label) {
case 0:
if (!cc.isValid(this.adventure_bg_tips_node, !0)) {
t && t();
return [ 2 ];
}
r = this.adventure_bg_tips_node;
cc.Tween.stopAllByTarget(r);
r.active = !0;
r.x = this._bubbleOriginX - this._offscreenOffsetX;
r.opacity = 255;
n = function(e) {
return h.default.bounceOutCustom(e, o.bounceAmplitude);
};
a = function(e) {
return h.default.bounceInCustom(e, o.bounceAmplitude);
};
return [ 4, this._tweenToAsync(r, this.slideInDuration, {
x: this._bubbleOriginX
}, n) ];

case 1:
s.sent();
if (!cc.isValid(r, !0)) {
t && t();
return [ 2 ];
}
return [ 4, this._sleep(Math.max(0, e)) ];

case 2:
s.sent();
if (!cc.isValid(r, !0)) {
t && t();
return [ 2 ];
}
this._emitPageFlipSfx(i.NewSeasonPageFlipSfx.travel_page_pop);
return [ 4, this._tweenToAsync(r, this.slideOutDuration, {
x: this._bubbleOriginX + this._offscreenOffsetX
}, a) ];

case 3:
s.sent();
if (!cc.isValid(r, !0)) {
t && t();
return [ 2 ];
}
r.active = !1;
t && t();
return [ 2 ];
}
});
});
};
t.prototype.playEnter = function(e) {
return o(this, void 0, Promise, function() {
var t, i = this;
return s(this, function(r) {
switch (r.label) {
case 0:
if (!cc.isValid(this.adventure_bg_tips_node, !0)) {
e && e();
return [ 2 ];
}
t = this.adventure_bg_tips_node;
cc.Tween.stopAllByTarget(t);
t.active = !0;
t.x = this._bubbleOriginX - this._offscreenOffsetX;
return [ 4, this._tweenToAsync(t, this.slideInDuration, {
x: this._bubbleOriginX
}, function(e) {
return h.default.bounceOutCustom(e, i.bounceAmplitude);
}) ];

case 1:
r.sent();
if (!cc.isValid(t, !0)) {
e && e();
return [ 2 ];
}
e && e();
return [ 2 ];
}
});
});
};
t.prototype.playExit = function(e) {
return o(this, void 0, Promise, function() {
var t, r = this;
return s(this, function(n) {
switch (n.label) {
case 0:
if (!cc.isValid(this.adventure_bg_tips_node, !0)) {
e && e();
return [ 2 ];
}
t = this.adventure_bg_tips_node;
cc.Tween.stopAllByTarget(t);
this._emitPageFlipSfx(i.NewSeasonPageFlipSfx.travel_page_pop);
return [ 4, this._tweenToAsync(t, this.slideOutDuration, {
x: this._bubbleOriginX + this._offscreenOffsetX
}, function(e) {
return h.default.bounceInCustom(e, r.bounceAmplitude);
}) ];

case 1:
n.sent();
if (!cc.isValid(t, !0)) {
e && e();
return [ 2 ];
}
t.active = !1;
e && e();
return [ 2 ];
}
});
});
};
t.prototype.stopAnim = function() {
if (cc.isValid(this.adventure_bg_tips_node, !0)) {
cc.Tween.stopAllByTarget(this.adventure_bg_tips_node);
this.adventure_bg_tips_node.active = !1;
}
};
t.prototype._setBubbleTextInternal = function(e) {
if (cc.isValid(this.adventure_bg_tips_node, !0)) {
var t = this.adventure_bg_tips_node.getChildByName("txt_1"), i = this.adventure_bg_tips_node.getChildByName("txt_2");
if (cc.isValid(t) && cc.isValid(i)) if (1 === e) {
t.active = !0;
i.active = !1;
} else {
t.active = !1;
i.active = !0;
}
}
};
t.prototype._emitPageFlipSfx = function(e) {
var t = this._params && this._params.playPageFlipSfx;
t && t(e);
};
t.prototype._armStyle2PageSfxTrioAtAnimStart = function(e) {
return o(this, void 0, Promise, function() {
var t;
return s(this, function(r) {
switch (r.label) {
case 0:
return (t = Math.max(0, this.style2SfxDelayPage1)) > 0 ? [ 4, this._sleep(t) ] : [ 3, 2 ];

case 1:
r.sent();
if (!cc.isValid(e, !0)) return [ 2 ];
r.label = 2;

case 2:
this._emitPageFlipSfx(i.NewSeasonPageFlipSfx.travel_page_1_2);
return [ 2 ];
}
});
});
};
t.prototype._emitStyle2OutStartSfx = function() {
this._emitPageFlipSfx(i.NewSeasonPageFlipSfx.travel_page_3);
};
t.prototype.setPageFlipCompanions = function(e) {
e && 0 !== e.length ? this._pageFlipCompanions = e.slice() : this._pageFlipCompanions = [];
};
t.prototype.getPageFlipCompanions = function() {
return this._pageFlipCompanions.slice();
};
t.prototype.playPageFlip = function(e, t) {
if (this._params) if (2 === this._params.pageEffectType) {
this._style2PageFlipController || (this._style2PageFlipController = new f.default(this));
this._style2PageFlipController.play(e, t);
} else this._playPageFlipStyle1(e, t); else t && t();
};
Object.defineProperty(t.prototype, "spineRoot", {
get: function() {
return this.mosaic_roll;
},
enumerable: !1,
configurable: !0
});
Object.defineProperty(t.prototype, "legacyMaskOffsetSnapshot", {
get: function() {
return {
xRatio: this.style2MosaicXRatio,
xOffset: this.style2MosaicXOffset,
yRatio: this.style2MosaicYRatio,
yOffset: this.style2MosaicYOffset
};
},
enumerable: !1,
configurable: !0
});
t.prototype.setPageFlipAbortHandler = function(e) {
this._pageFlipAbortHandler = e;
};
t.prototype.clearActiveNextMosaicIfMatches = function(e) {
e && this._activeNextMosaicNode === e && (this._activeNextMosaicNode = null);
};
Object.defineProperty(t.prototype, "style2MaskAngleDeg", {
get: function() {
return this.style2MaskExtraAngle;
},
enumerable: !1,
configurable: !0
});
Object.defineProperty(t.prototype, "style2MaskRectSideMultiplierValue", {
get: function() {
return this.style2MaskRectSideMultiplier;
},
enumerable: !1,
configurable: !0
});
Object.defineProperty(t.prototype, "style2MaskCornerOffsetXY", {
get: function() {
return {
x: this.style2MaskCornerOffsetX,
y: this.style2MaskCornerOffsetY
};
},
enumerable: !1,
configurable: !0
});
Object.defineProperty(t.prototype, "style2ClonePreviewPreStartSecValue", {
get: function() {
return Math.max(0, this.style2ClonePreviewPreStartSec);
},
enumerable: !1,
configurable: !0
});
t.prototype.prepareNextMosaic = function(e, t) {
this._destroyPreparedNextMosaic();
if (cc.isValid(e, !0)) {
var i = e.parent;
if (cc.isValid(i, !0) && cc.isValid(this.node, !0)) {
var r = new cc.Node("NewSeasonCloneHost");
r.setAnchorPoint(0, 0);
r.setContentSize(0, 0);
r.opacity = 0;
var n = this._createNextMosaicClone(e);
n.setPosition(0, 0);
n.angle = 0;
r.addChild(n);
this.node.addChild(r);
h.default.alignNodeWorldTransformTo(r, e);
d.default.sanitizeRenderFlags(r);
this._preparedNextMosaicNode = r;
this._preparedNextMosaicParent = i;
this._preparedNextMosaicSiblingIdx = e.getSiblingIndex();
this._preparedNextMosaicStyle = t;
this._flowAnimPlayed = !1;
this._cloneItemComps = [];
d.default.dumpDiagnostics("prepareNextMosaic.done(host)", r);
this._tryRepaintCloneByNextData("prepareNextMosaic");
}
}
};
t.prototype._attachPageFlipCompanionsToPivot = function(e) {
var t, i, r = [];
if (!cc.isValid(e, !0)) return r;
if (!this._pageFlipCompanions || 0 === this._pageFlipCompanions.length) return r;
var n = h.default.getWorldScale(e), a = h.default.getWorldAngle(e);
try {
for (var o = l(this._pageFlipCompanions), s = o.next(); !s.done; s = o.next()) {
var c = s.value;
if (cc.isValid(c, !0)) {
var u = c.parent;
if (cc.isValid(u, !0) && c !== e && u !== e) {
var p = {
node: c,
parent: u,
siblingIdx: c.getSiblingIndex(),
position: c.position.clone(),
angle: c.angle,
opacity: c.opacity,
scaleX: c.scaleX,
scaleY: c.scaleY
}, d = u.convertToWorldSpaceAR(c.position), f = h.default.getWorldAngle(c), _ = h.default.getWorldScale(c);
c.parent = e;
c.setPosition(e.convertToNodeSpaceAR(d));
c.angle = f - a;
c.scaleX = 0 !== n.x ? _.x / n.x : _.x;
c.scaleY = 0 !== n.y ? _.y / n.y : _.y;
r.push(p);
}
}
}
} catch (e) {
t = {
error: e
};
} finally {
try {
s && !s.done && (i = o.return) && i.call(o);
} finally {
if (t) throw t.error;
}
}
return r;
};
t.prototype._restorePageFlipCompanions = function(e) {
if (e && 0 !== e.length) for (var t = e.length - 1; t >= 0; t--) {
var i = e[t];
if (cc.isValid(i.node, !0) && cc.isValid(i.parent, !0)) {
i.node.parent = i.parent;
i.node.setSiblingIndex(i.siblingIdx);
i.node.setPosition(i.position);
i.node.angle = i.angle;
i.node.opacity = i.opacity;
i.node.scaleX = i.scaleX;
i.node.scaleY = i.scaleY;
}
}
};
t.prototype._destroyPreparedNextMosaic = function() {
if (cc.isValid(this._preparedNextMosaicNode, !0)) {
cc.Tween.stopAllByTarget(this._preparedNextMosaicNode);
this._preparedNextMosaicNode.destroy();
}
this._preparedNextMosaicNode = null;
this._preparedNextMosaicParent = null;
this._preparedNextMosaicSiblingIdx = 0;
this._cloneItemComps = [];
this._flowAnimPlayed = !1;
this._hostLayoutRebuilt = !1;
this._hostLayoutRebuilding = !1;
};
t.prototype._acquireNextMosaicForStyle = function(e, t) {
this._preparedNextMosaicStyle !== t && this._destroyPreparedNextMosaic();
var i;
if (cc.isValid(this._preparedNextMosaicNode, !0)) {
i = this._preparedNextMosaicNode;
this._preparedNextMosaicNode = null;
this._preparedNextMosaicParent = null;
} else i = this._createNextMosaicClone(e);
this._activeNextMosaicNode = i;
return i;
};
t.prototype._playPageFlipStyle1 = function(e, t) {
var r = this, n = function() {
t && t();
};
if (cc.isValid(e, !0)) {
var a = e.parent;
if (cc.isValid(a, !0)) {
var l = e.getSiblingIndex(), c = e.anchorX, u = e.anchorY, p = e.position.clone(), f = e.angle, _ = e.opacity, y = e.scaleX, g = e.scaleY, v = e.getBoundingBoxToWorld(), b = v.width, S = v.height;
b <= 0 && (b = Math.max(1, e.width));
S <= 0 && (S = Math.max(1, e.height));
var m = cc.v2(v.x + b / 2, v.y), x = a.convertToNodeSpaceAR(m), C = this._acquireNextMosaicForStyle(e, 1), N = (C && C.uuid, 
function(e) {
var t = new cc.Node(e);
t.setContentSize(b, S);
t.anchorX = .5;
t.anchorY = 0;
t.setPosition(x);
a.addChild(t);
return t;
}), w = N("NewSeasonFlipClonePivot"), A = N("NewSeasonFlipMosaicPivot");
w.setSiblingIndex(l);
A.setSiblingIndex(l + 1);
var E = a.convertToWorldSpaceAR(p);
e.parent = A;
var P = A.convertToNodeSpaceAR(E);
e.setPosition(P);
e.angle = 0;
e.opacity = 255;
var M = this._attachPageFlipCompanionsToPivot(A);
if (cc.isValid(C, !0)) {
d.default.dumpDiagnostics("style1.beforeReparentToClonePivot(nextNode)", C);
C.parent = w;
C.setPosition(P);
C.angle = 0;
C.opacity = 0;
}
w.angle = -180;
if (cc.isValid(C, !0)) {
this._preparePreviewInitialState(C);
d.default.dumpDiagnostics("style1.afterPivotAngle-180(nextNode)", C);
}
var T = function() {
if (cc.isValid(e, !0) && cc.isValid(a, !0)) {
e.parent = a;
e.setSiblingIndex(l);
e.anchorX = c;
e.anchorY = u;
e.setPosition(p);
e.angle = f;
e.opacity = _;
e.scaleX = y;
e.scaleY = g;
}
r._restorePageFlipCompanions(M);
if (cc.isValid(A, !0)) {
cc.Tween.stopAllByTarget(A);
A.destroy();
}
if (cc.isValid(w, !0)) {
cc.Tween.stopAllByTarget(w);
w.destroy();
}
r._activeNextMosaicNode === C && (r._activeNextMosaicNode = null);
};
this._pageFlipAbortHandler = T;
var L = this.STYLE1_ROTATE_DURATION_SEC, V = .5 * L, R = Math.max(0, Math.min(L - .01, this.STYLE1_PHASE_OFFSET_SEC)), F = function(e) {
return h.default.bounceInCustom(e, r.bounceAmplitude);
}, I = function(e) {
return h.default.bounceOutCustom(e, r.bounceAmplitude);
}, k = Math.max(0, Math.min(L, this.style1ClonePreviewPreStartSec)), O = L - k, B = !1, Y = 0, D = function() {
if (!B) {
B = !0;
if (cc.isValid(C, !0)) {
d.default.dumpDiagnostics("style1.previewLaunch(nextNode)", C);
Y = r._playClonePreviewAllThrough(C);
}
}
}, X = function(e) {
return new Promise(function(t) {
e <= 0 ? t() : cc.tween(w).delay(e).call(t).start();
});
}, W = function() {
cc.tween(A).delay(R).call(function() {
r._emitPageFlipSfx(i.NewSeasonPageFlipSfx.travel_page_rotate);
}).to(V, {
angle: 90
}, {
easing: F
}).call(function() {
cc.isValid(e, !0) && (e.opacity = 0);
}).to(V, {
angle: 180
}, {
easing: I
}).start();
cc.tween(w).to(V, {
angle: -90
}, {
easing: F
}).call(function() {
cc.isValid(C, !0) && (C.opacity = 255);
}).to(V, {
angle: 0
}, {
easing: I
}).start();
}, G = function() {
cc.tween(A).call(function() {
r._emitPageFlipSfx(i.NewSeasonPageFlipSfx.travel_page_rotate);
}).to(V, {
angle: 90
}, {
easing: F
}).call(function() {
cc.isValid(e, !0) && (e.opacity = 255);
}).to(V, {
angle: 0
}, {
easing: I
}).start();
cc.tween(w).delay(R).to(V, {
angle: -90
}, {
easing: F
}).call(function() {
cc.isValid(C, !0) && (C.opacity = 0);
}).to(V, {
angle: -180
}, {
easing: I
}).call(function() {
T();
r._pageFlipAbortHandler = null;
n();
}).start();
};
o(r, void 0, void 0, function() {
var e;
return s(this, function(t) {
switch (t.label) {
case 0:
return [ 4, X(this.STYLE1_PRE_DELAY_SEC) ];

case 1:
t.sent();
if (!cc.isValid(w, !0)) return [ 2 ];
W();
return [ 4, X(O) ];

case 2:
t.sent();
if (!cc.isValid(w, !0)) return [ 2 ];
D(k.toFixed(2));
!B && cc.isValid(C, !0) && D();
return Y > 0 ? [ 4, X(Y) ] : [ 3, 4 ];

case 3:
t.sent();
if (!cc.isValid(w, !0)) return [ 2 ];
t.label = 4;

case 4:
return (e = R + L - (O + Y)) > 0 ? [ 4, X(e) ] : [ 3, 6 ];

case 5:
t.sent();
if (!cc.isValid(w, !0)) return [ 2 ];
t.label = 6;

case 6:
G();
return [ 2 ];
}
});
});
} else n();
} else n();
};
t.prototype._preparePreviewInitialState = function(e) {
var t, i;
if (cc.isValid(e, !0)) {
var r = e.getComponentsInChildren(hs.ChapterItem);
try {
for (var n = l(r), a = n.next(); !a.done; a = n.next()) {
var o = a.value;
if (o && cc.isValid(o.node, !0)) {
var s = o.colorImg;
if (s && cc.isValid(s.node, !0)) {
cc.Tween.stopAllByTarget(s.node);
s.node.opacity = 0;
s.node.scale = 1;
}
}
}
} catch (e) {
t = {
error: e
};
} finally {
try {
a && !a.done && (i = n.return) && i.call(n);
} finally {
if (t) throw t.error;
}
}
}
};
t.prototype._restorePreviewInitialState = function(e) {
var t, i;
if (cc.isValid(e, !0)) {
var r = e.getComponentsInChildren(hs.ChapterItem);
try {
for (var n = l(r), a = n.next(); !a.done; a = n.next()) {
var o = a.value;
if (o && cc.isValid(o.node, !0)) {
var s = o.colorImg;
if (s && cc.isValid(s.node, !0) && s.node.active) {
cc.Tween.stopAllByTarget(s.node);
s.node.opacity = 255;
s.node.scale = 1;
}
}
}
} catch (e) {
t = {
error: e
};
} finally {
try {
a && !a.done && (i = n.return) && i.call(n);
} finally {
if (t) throw t.error;
}
}
}
};
t.prototype._playClonePreviewAllThrough = function(e) {
var t, i, r, n, a, o, s, c, p, d, h, f;
if (!cc.isValid(e, !0)) return 0;
var _ = e.getComponentsInChildren(hs.ChapterItem);
if (!_ || 0 === _.length) {
this._restorePreviewInitialState(e);
return 0;
}
var y = [];
try {
for (var g = l(_), v = g.next(); !v.done; v = g.next()) {
var b;
if ((b = v.value) && cc.isValid(b.node, !0)) {
var S;
(S = b.colorImg) && cc.isValid(S.node, !0) && (S.node.active && y.push({
itemNode: b.node,
colorNode: S.node,
originY: S.node.y
}));
}
}
} catch (e) {
t = {
error: e
};
} finally {
try {
v && !v.done && (i = g.return) && i.call(g);
} finally {
if (t) throw t.error;
}
}
if (0 === y.length) {
this._restorePreviewInitialState(e);
return 0;
}
var m = u(y).sort(function(e, t) {
return e.itemNode.y - t.itemNode.y;
}), x = [], C = [];
try {
for (var N = l(m), w = N.next(); !w.done; w = N.next()) {
var A = w.value;
if (0 === C.length || Math.abs(A.itemNode.y - C[0].itemNode.y) <= 5) C.push(A); else {
x.push(C);
C = [ A ];
}
}
} catch (e) {
r = {
error: e
};
} finally {
try {
w && !w.done && (n = N.return) && n.call(N);
} finally {
if (r) throw r.error;
}
}
C.length > 0 && x.push(C);
var E = {};
try {
for (var P = l(y), M = P.next(); !M.done; M = P.next()) {
var T = (A = M.value).itemNode.position, L = Math.floor(.0125 * (T.y + T.x)), V = String(L);
(E[V] = E[V] || []).push(A);
}
} catch (e) {
a = {
error: e
};
} finally {
try {
M && !M.done && (o = P.return) && o.call(P);
} finally {
if (a) throw a.error;
}
}
var R = Object.keys(E).sort(function(e, t) {
return parseInt(e) - parseInt(t);
}), F = [], I = e.getComponentsInChildren(cc.Label);
try {
for (var k = l(I), O = k.next(); !O.done; O = k.next()) {
var B = O.value;
cc.isValid(B) && cc.isValid(B.node, !0) && B.node.activeInHierarchy && F.push(B.node);
}
} catch (e) {
s = {
error: e
};
} finally {
try {
O && !O.done && (c = k.return) && c.call(k);
} finally {
if (s) throw s.error;
}
}
var Y = this.STYLE1_CLONE_PREVIEW_GROUP_STEP_SEC, D = this.STYLE1_CLONE_PREVIEW_FADE_SEC, X = this.STYLE1_CLONE_PREVIEW_DIAGONAL_STEP_SEC, W = this.STYLE1_CLONE_PREVIEW_WAVE_RATIO, G = .13 * W, H = .3 * W, j = this.STYLE1_CLONE_PREVIEW_WAVE_SCALE, U = this.STYLE1_CLONE_PREVIEW_WAVE_OFFSET_Y;
try {
for (var K = l(y), z = K.next(); !z.done; z = K.next()) {
A = z.value;
cc.Tween.stopAllByTarget(A.colorNode);
A.colorNode.opacity = 0;
A.colorNode.scale = 1;
A.colorNode.y = A.originY;
}
} catch (e) {
p = {
error: e
};
} finally {
try {
z && !z.done && (d = K.return) && d.call(K);
} finally {
if (p) throw p.error;
}
}
for (var q = 0; q < x.length; q++) {
var Q = x[q], Z = Y * q;
try {
for (var J = (h = void 0, l(Q)), $ = J.next(); !$.done; $ = J.next()) {
A = $.value;
cc.tween(A.colorNode).delay(Z).to(D, {
opacity: 255
}).start();
}
} catch (e) {
h = {
error: e
};
} finally {
try {
$ && !$.done && (f = J.return) && f.call(J);
} finally {
if (h) throw h.error;
}
}
}
var ee = Y * x.length + D;
cc.tween(e).delay(ee).call(function() {
for (var e, t, i = 0; i < R.length; i++) {
var r = E[R[i]], n = X * (i + 1);
try {
for (var a = (e = void 0, l(r)), o = a.next(); !o.done; o = a.next()) {
var s = o.value;
if (cc.isValid(s.colorNode, !0)) {
cc.Tween.stopAllByTarget(s.colorNode);
s.colorNode.opacity = 255;
cc.tween(s.colorNode).delay(n).to(G, {
scale: j,
y: s.originY + U
}).to(H, {
scale: 1,
y: s.originY
}).start();
}
}
} catch (t) {
e = {
error: t
};
} finally {
try {
o && !o.done && (t = a.return) && t.call(a);
} finally {
if (e) throw e.error;
}
}
}
}).start();
var te = ee + X * R.length + G + H;
cc.tween(e).delay(te).call(function() {
for (var e, t, i = x.length - 1, r = 0; i >= 0; i--, r++) {
var n = x[i], a = Y * r;
try {
for (var o = (e = void 0, l(n)), s = o.next(); !s.done; s = o.next()) {
var c = s.value;
if (cc.isValid(c.colorNode, !0)) {
cc.Tween.stopAllByTarget(c.colorNode);
cc.tween(c.colorNode).delay(a).to(D, {
opacity: 0
}).start();
}
}
} catch (t) {
e = {
error: t
};
} finally {
try {
s && !s.done && (t = o.return) && t.call(o);
} finally {
if (e) throw e.error;
}
}
}
}).start();
return te + Y * x.length + D;
};
t.prototype._createNextMosaicClone = function(e) {
var t = cc.instantiate(e);
t.name = "NewSeasonNextMosaicClone";
t.active = !1;
d.default.stripNonRenderComponents(t);
d.default.disableEmptyRenderComponents(t);
t.active = !0;
return t;
};
t.prototype._ensureChapterItemPrefab = function() {
return o(this, void 0, Promise, function() {
var e;
return s(this, function(t) {
switch (t.label) {
case 0:
if (cc.isValid(this._chapterItemPrefab)) return [ 2, this._chapterItemPrefab ];
t.label = 1;

case 1:
t.trys.push([ 1, 3, , 4 ]);
return [ 4, hs.ResLoader.asyncLoadByBundle("chapter", hs.PrefabConfig.ChapterItem.url, cc.Prefab) ];

case 2:
e = t.sent();
if (cc.isValid(e)) {
this._chapterItemPrefab = e;
return [ 2, e ];
}
return [ 3, 4 ];

case 3:
t.sent();
return [ 3, 4 ];

case 4:
return [ 2, null ];
}
});
});
};
t.prototype._ensureChapterLevelTxtPrefab = function() {
return o(this, void 0, Promise, function() {
var e;
return s(this, function(t) {
switch (t.label) {
case 0:
if (cc.isValid(this._chapterLevelTxtPrefab)) return [ 2, this._chapterLevelTxtPrefab ];
t.label = 1;

case 1:
t.trys.push([ 1, 3, , 4 ]);
return [ 4, hs.ResLoader.asyncLoadByBundle("chapter", hs.PrefabConfig.ChapterLevelTxt.url, cc.Prefab) ];

case 2:
e = t.sent();
if (cc.isValid(e)) {
this._chapterLevelTxtPrefab = e;
return [ 2, e ];
}
return [ 3, 4 ];

case 3:
t.sent();
return [ 3, 4 ];

case 4:
return [ 2, null ];
}
});
});
};
t.prototype._ensureCommonBgFrame = function() {
return o(this, void 0, Promise, function() {
var e;
return s(this, function(t) {
switch (t.label) {
case 0:
if (cc.isValid(this._commonBgFrame)) return [ 2, this._commonBgFrame ];
t.label = 1;

case 1:
t.trys.push([ 1, 3, , 4 ]);
return [ 4, hs.ResLoader.asyncLoadByBundle("chapter", hs.ChapterResPathConfig_Config.commonBgPath, cc.SpriteFrame) ];

case 2:
e = t.sent();
if (cc.isValid(e)) {
this._commonBgFrame = e;
return [ 2, e ];
}
return [ 3, 4 ];

case 3:
t.sent();
return [ 3, 4 ];

case 4:
return [ 2, null ];
}
});
});
};
t.prototype._rebuildHostToNextLayout = function(e, t, i) {
return o(this, void 0, Promise, function() {
var r, n, a, o, u, p, h, f, _, y, g, v, b, S, m, x, C, N, w, A, E, P, M, T, L, V, R, F;
return s(this, function(s) {
switch (s.label) {
case 0:
if (this._hostLayoutRebuilt || this._hostLayoutRebuilding) return [ 2 ];
if (!cc.isValid(e, !0)) return [ 2 ];
if (!t || !Array.isArray(t.listCfg) || 0 === t.listCfg.length) return [ 2 ];
this._hostLayoutRebuilding = !0;
return [ 4, Promise.all([ this._ensureChapterItemPrefab(), this._ensureChapterLevelTxtPrefab(), this._ensureCommonBgFrame() ]) ];

case 1:
r = c.apply(void 0, [ s.sent(), 3 ]), n = r[0], a = r[1], o = r[2];
if (!cc.isValid(e, !0)) {
this._hostLayoutRebuilding = !1;
return [ 2 ];
}
u = this.nextMosaicShowLevelNumber;
if (!n || u && !a) {
this._hostLayoutRebuilding = !1;
return [ 2 ];
}
try {
for (p = l(e.children.slice()), h = p.next(); !h.done; h = p.next()) if (f = h.value) {
f.parent = null;
f.destroy();
}
} catch (e) {
R = {
error: e
};
} finally {
try {
h && !h.done && (F = p.return) && F.call(p);
} finally {
if (R) throw R.error;
}
}
_ = t.listCfg;
y = _.length;
g = Array.isArray(_[0]) ? _[0].length : 0;
if (0 === y || 0 === g) {
this._hostLayoutRebuilding = !1;
return [ 2 ];
}
v = hs.ChapterListConfig.itemHeight;
b = y % 2;
S = 0;
for (N = 0; N < y; N++) {
w = _[N];
if (Array.isArray(w)) for (A = 0; A < w.length; A++) -1 !== w[A] && S++;
}
if (0 === S) {
this._hostLayoutRebuilding = !1;
return [ 2 ];
}
m = e;
(x = u ? new cc.Node("NewSeasonNextLevelTxtParent") : null) && x.setPosition(0, 0);
C = 0;
for (N = y - 1; N >= 0; N--) {
w = _[N];
if (Array.isArray(w)) for (A = 0; A < w.length; A++) if (-1 !== w[A]) {
E = 0 !== b ? -Math.floor(g / 2) * v + v * A : -g / 2 * v + v / 2 + v * A;
P = 250 + (y - N) * v;
(M = cc.instantiate(n)).active = !1;
if ((T = M.getComponent(hs.ChapterItem)) && cc.isValid(T.bg) && o) {
T.bg.spriteFrame = o;
T.bg.enabled = !0;
}
d.default.stripNonRenderComponents(M);
d.default.disableEmptyRenderComponents(M);
M.setPosition(E, P);
M.active = !0;
m && m.addChild(M);
if (x && a) {
(L = cc.instantiate(a)).active = !1;
d.default.stripNonRenderComponents(L);
d.default.disableEmptyRenderComponents(L);
L.setPosition(E, P);
if (V = L.getComponent(cc.Label)) {
V.string = String(C + 1);
V.node.opacity = 255;
V.enabled = !0;
}
L.name = "NextLevelTxt_" + (C + 1);
L.active = !0;
x.addChild(L);
}
C++;
}
}
x && e.addChild(x);
this._cloneItemComps = [];
this._hostLayoutRebuilt = !0;
this._hostLayoutRebuilding = !1;
d.default.sanitizeRenderFlags(e);
this._repaintCloneByNextData(e, i + "→rebuild");
return [ 2 ];
}
});
});
};
t.prototype.abortPageFlip = function() {
this._destroyPreparedNextMosaic();
if (this._pageFlipAbortHandler) {
var e = this._pageFlipAbortHandler;
this._pageFlipAbortHandler = null;
e();
}
};
t.prototype.onDestroy = function() {
this.abortPageFlip();
this.stopAnim();
this.node.stopAllActions();
};
a([ g({
type: cc.Node,
tooltip: "吊顶气泡节点（执行左滑入/右滑出动画的目标节点）"
}) ], t.prototype, "adventure_bg_tips_node", void 0);
a([ g({
type: cc.Node,
tooltip: "翻页效果2：mosaic_roll 骨骼节点（sp.Skeleton 宿主）"
}) ], t.prototype, "mosaic_roll", void 0);
a([ g({
type: cc.Float,
tooltip: "翻页1：preview 提前秒数（默认 1，运行时夹到 [0, STYLE1_ROTATE_DURATION_SEC=0.5]，最早=翻页同帧）"
}) ], t.prototype, "style1ClonePreviewPreStartSec", void 0);
a([ g({
type: cc.Float,
tooltip: "翻页2：preview 提前秒数（>0=与 in 段尾部并行涌起，默认 1）"
}) ], t.prototype, "style2ClonePreviewPreStartSec", void 0);
a([ g({
tooltip: "下期 mosaic 是否显示关卡数字 Label（默认关闭：仅色块，与当前期视觉区分）"
}) ], t.prototype, "nextMosaicShowLevelNumber", void 0);
a([ g({
type: cc.Float,
tooltip: "翻页2：遮罩相对 mosaic 宽度的水平偏移比例（正=右移 / 负=左移）"
}) ], t.prototype, "style2MosaicXRatio", void 0);
a([ g({
type: cc.Float,
tooltip: "翻页2：遮罩叠加在 XRatio 之上的绝对像素水平偏移（正=右 / 负=左）"
}) ], t.prototype, "style2MosaicXOffset", void 0);
a([ g({
type: cc.Float,
tooltip: "翻页2：遮罩相对 mosaic 高度的垂直偏移比例（负=下移 / 正=上移）"
}) ], t.prototype, "style2MosaicYRatio", void 0);
a([ g({
type: cc.Float,
tooltip: "翻页2：遮罩叠加在 YRatio 之上的绝对像素垂直偏移（正=上 / 负=下）"
}) ], t.prototype, "style2MosaicYOffset", void 0);
a([ g({
type: cc.Float,
tooltip: "翻页2：mask A/B 共享的最终旋转角（度，正=逆时针，默认 -62°；切边视觉倾斜 = 90°-|此值|）"
}) ], t.prototype, "style2MaskExtraAngle", void 0);
a([ g({
type: cc.Float,
tooltip: "翻页2：mask 边长相对屏幕对角线倍率，默认 5.0（绝对大，矩形对角顶点远在屏幕外不穿帮）"
}) ], t.prototype, "style2MaskRectSideMultiplier", void 0);
a([ g({
type: cc.Float,
tooltip: "翻页2：切边铰点相对屏幕右下角朝左偏 X 像素（设计分辨率 960×1707.5；运行时按对角线自动缩放到当前设备）"
}) ], t.prototype, "style2MaskCornerOffsetX", void 0);
a([ g({
type: cc.Float,
tooltip: "翻页2：切边铰点相对屏幕右下角朝上偏 Y 像素（设计分辨率 960×1707.5；运行时按对角线自动缩放到当前设备）"
}) ], t.prototype, "style2MaskCornerOffsetY", void 0);
return a([ y ], t);
}(hs.Component);
i.default = v;
cc._RF.pop();
}, {
"./CloneNodeSanitizer": "CloneNodeSanitizer",
"./NewSeasonNodeMathUtil": "NewSeasonNodeMathUtil",
"./pageflip/Style2PageFlipController": "Style2PageFlipController",
"./vo/MosaicData": "MosaicData"
} ],
NewSeasonNotify_IOS_Trait: [ function(e, t, i) {
"use strict";
cc._RF.push(t, "2cf5aKjk2VN2q4fe6Tl4NfC", "NewSeasonNotify_IOS_Trait");
var r, n = this && this.__extends || (r = function(e, t) {
return (r = Object.setPrototypeOf || {
__proto__: []
} instanceof Array && function(e, t) {
e.__proto__ = t;
} || function(e, t) {
for (var i in t) Object.prototype.hasOwnProperty.call(t, i) && (e[i] = t[i]);
})(e, t);
}, function(e, t) {
r(e, t);
function i() {
this.constructor = e;
}
e.prototype = null === t ? Object.create(t) : (i.prototype = t.prototype, new i());
}), a = this && this.__decorate || function(e, t, i, r) {
var n, a = arguments.length, o = a < 3 ? t : null === r ? r = Object.getOwnPropertyDescriptor(t, i) : r;
if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) o = Reflect.decorate(e, t, i, r); else for (var s = e.length - 1; s >= 0; s--) (n = e[s]) && (o = (a < 3 ? n(o) : a > 3 ? n(t, i, o) : n(t, i)) || o);
return a > 3 && o && Object.defineProperty(t, i, o), o;
};
Object.defineProperty(i, "__esModule", {
value: !0
});
i.NewSeasonNotify_IOS_Trait = void 0;
var o = function(e) {
n(t, e);
function t() {
return null !== e && e.apply(this, arguments) || this;
}
t.prototype._onChapterListShowAfter = function() {
var e;
if (this._isAnimating) ; else if (this._isResourcesReady() && (this.DEBUG_ALWAYS_TRIGGER || !hs.storage.getItem("newSeasonNotify_triggered", !1))) {
var t = null !== (e = this.props.triggerLevel) && void 0 !== e ? e : 0;
this._resetLevel0PendingOnly();
if (this._meetsPositiveTriggerLevel(t)) {
var i = Cinst(hs.ChapterContent);
if (cc.isValid(i) && cc.isValid(i.node, !0)) {
this.startPlayAni();
this._startGuideReplayBubbleThenFlip(i);
}
}
}
};
t.prototype._onMosaicBaseLayoutReady = function(e) {
var t;
if (this._pendingLevel0WaitMosaicBase && !this._isAnimating && this._isResourcesReady() && cc.isValid(e) && cc.isValid(e.node, !0)) {
this._cancelLevel0Fallback();
this._pendingLevel0WaitMosaicBase = !1;
if (!hs.storage.getItem("newSeasonNotify_triggered", !1) && 0 === (null !== (t = this.props.triggerLevel) && void 0 !== t ? t : 0)) {
this.startPlayAni();
this._startGuideReplayBubbleThenFlip(e);
}
}
};
return a([ classId("NewSeasonNotifyTrait", "IOS") ], t);
}(e("./NewSeasonNotifyTrait").NewSeasonNotifyTrait);
i.NewSeasonNotify_IOS_Trait = o;
cc._RF.pop();
}, {
"./NewSeasonNotifyTrait": "NewSeasonNotifyTrait"
} ],
Style2PageFlipController: [ function(e, t, i) {
"use strict";
cc._RF.push(t, "d42b0hqzo1OQL1tVdrT8i1L", "Style2PageFlipController");
var r = this && this.__awaiter || function(e, t, i, r) {
return new (i || (i = Promise))(function(n, a) {
function o(e) {
try {
l(r.next(e));
} catch (e) {
a(e);
}
}
function s(e) {
try {
l(r.throw(e));
} catch (e) {
a(e);
}
}
function l(e) {
e.done ? n(e.value) : (t = e.value, t instanceof i ? t : new i(function(e) {
e(t);
})).then(o, s);
var t;
}
l((r = r.apply(e, t || [])).next());
});
}, n = this && this.__generator || function(e, t) {
var i, r, n, a, o = {
label: 0,
sent: function() {
if (1 & n[0]) throw n[1];
return n[1];
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
function s(e) {
return function(t) {
return l([ e, t ]);
};
}
function l(a) {
if (i) throw new TypeError("Generator is already executing.");
for (;o; ) try {
if (i = 1, r && (n = 2 & a[0] ? r.return : a[0] ? r.throw || ((n = r.return) && n.call(r), 
0) : r.next) && !(n = n.call(r, a[1])).done) return n;
(r = 0, n) && (a = [ 2 & a[0], n.value ]);
switch (a[0]) {
case 0:
case 1:
n = a;
break;

case 4:
o.label++;
return {
value: a[1],
done: !1
};

case 5:
o.label++;
r = a[1];
a = [ 0 ];
continue;

case 7:
a = o.ops.pop();
o.trys.pop();
continue;

default:
if (!(n = o.trys, n = n.length > 0 && n[n.length - 1]) && (6 === a[0] || 2 === a[0])) {
o = 0;
continue;
}
if (3 === a[0] && (!n || a[1] > n[0] && a[1] < n[3])) {
o.label = a[1];
break;
}
if (6 === a[0] && o.label < n[1]) {
o.label = n[1];
n = a;
break;
}
if (n && o.label < n[2]) {
o.label = n[2];
o.ops.push(a);
break;
}
n[2] && o.ops.pop();
o.trys.pop();
continue;
}
a = t.call(e, o);
} catch (e) {
a = [ 6, e ];
r = 0;
} finally {
i = n = 0;
}
if (5 & a[0]) throw a[1];
return {
value: a[0] ? a[1] : void 0,
done: !0
};
}
}, a = this && this.__values || function(e) {
var t = "function" == typeof Symbol && Symbol.iterator, i = t && e[t], r = 0;
if (i) return i.call(e);
if (e && "number" == typeof e.length) return {
next: function() {
e && r >= e.length && (e = void 0);
return {
value: e && e[r++],
done: !e
};
}
};
throw new TypeError(t ? "Object is not iterable." : "Symbol.iterator is not defined.");
};
Object.defineProperty(i, "__esModule", {
value: !0
});
var o = e("../NewSeasonNodeMathUtil"), s = function() {
function e(e) {
this.BASE_DESIGN_W = 960;
this.BASE_DESIGN_H = 1707.5;
this.STYLE2_PRE_STAY_SEC = 0;
this.STYLE2_IN_ANIM_NAME = "in";
this.STYLE2_IDLE_ANIM_NAME = "idle";
this.STYLE2_OUT_ANIM_NAME = "out";
this.STYLE2_IN_DURATION_SEC = 2;
this.STYLE2_OUT_DURATION_SEC = 1;
this.STYLE2_FALLBACK_IDLE_DURATION_SEC = .5;
this.STYLE2_MASK_KEYFRAMES_IN = [ {
time: 0,
dx: 0,
dy: 0
}, {
time: .46,
dx: -248,
dy: 195
}, {
time: .86,
dx: 0,
dy: 0
}, {
time: 1.9,
dx: -818,
dy: 761
}, {
time: 2,
dx: -821,
dy: 765
} ];
this.STYLE2_MASK_KEYFRAMES_OUT = [ {
time: 0,
dx: -821,
dy: 765
}, {
time: .2,
dx: -827,
dy: 770
}, {
time: 1,
dx: 0,
dy: 0
} ];
this._view = e;
}
Object.defineProperty(e.prototype, "BASE_DESIGN_DIAG", {
get: function() {
return Math.hypot(this.BASE_DESIGN_W, this.BASE_DESIGN_H);
},
enumerable: !1,
configurable: !0
});
e.prototype._getResolutionScale = function(e) {
var t = Math.hypot(e.width, e.height), i = this.BASE_DESIGN_DIAG;
return i > 0 ? t / i : 1;
};
Object.defineProperty(e.prototype, "STYLE2_MASK_KEYFRAMES_ALL", {
get: function() {
return this.STYLE2_MASK_KEYFRAMES_IN.concat(this.STYLE2_MASK_KEYFRAMES_OUT);
},
enumerable: !1,
configurable: !0
});
Object.defineProperty(e.prototype, "STYLE2_PHASE_IN", {
get: function() {
return {
id: "in",
durationSec: this.STYLE2_IN_DURATION_SEC,
spineAnim: this.STYLE2_IN_ANIM_NAME,
spineLoop: !1,
maskKeyframes: this.STYLE2_MASK_KEYFRAMES_IN,
expectedStartKf: {
dx: 0,
dy: 0
},
expectedEndKf: {
dx: -821,
dy: 765
}
};
},
enumerable: !1,
configurable: !0
});
Object.defineProperty(e.prototype, "STYLE2_PHASE_IDLE", {
get: function() {
return {
id: "idle",
durationSec: 0,
spineAnim: this.STYLE2_IDLE_ANIM_NAME,
spineLoop: !0,
maskKeyframes: null,
expectedStartKf: {
dx: -821,
dy: 765
},
expectedEndKf: {
dx: -821,
dy: 765
}
};
},
enumerable: !1,
configurable: !0
});
Object.defineProperty(e.prototype, "STYLE2_PHASE_OUT", {
get: function() {
return {
id: "out",
durationSec: this.STYLE2_OUT_DURATION_SEC,
spineAnim: this.STYLE2_OUT_ANIM_NAME,
spineLoop: !1,
maskKeyframes: this.STYLE2_MASK_KEYFRAMES_OUT,
expectedStartKf: {
dx: -821,
dy: 765
},
expectedEndKf: {
dx: 0,
dy: 0
}
};
},
enumerable: !1,
configurable: !0
});
Object.defineProperty(e.prototype, "STYLE2_MASK_ANGLE_DEG", {
get: function() {
return this._view.style2MaskAngleDeg;
},
enumerable: !1,
configurable: !0
});
e.prototype._pickEdgeForMask = function(e, t) {
var i, r, n = t * Math.PI / 180, o = Math.cos(n), s = Math.sin(n), l = "rightEdge", c = -Infinity;
try {
for (var u = a([ {
name: "rightEdge",
extentX: -1,
extentY: 0
}, {
name: "leftEdge",
extentX: 1,
extentY: 0
} ]), p = u.next(); !p.done; p = u.next()) {
var d = p.value, h = d.extentX * o - d.extentY * s, f = d.extentX * s + d.extentY * o, _ = "A" === e ? -h + f : h + -f;
if (_ > c) {
c = _;
l = d.name;
}
}
} catch (e) {
i = {
error: e
};
} finally {
try {
p && !p.done && (r = u.return) && r.call(u);
} finally {
if (i) throw i.error;
}
}
return l;
};
e.prototype.play = function(e, t) {
var i = this, a = function() {
t && t();
}, s = this._view.spineRoot;
if (cc.isValid(e, !0) && cc.isValid(s, !0)) {
o.default.clearAllBoneAttachments(s);
var l = e.parent, c = e.position.clone(), u = e.anchorX, p = e.anchorY, d = e.angle, h = e.scaleX, f = e.scaleY, _ = e.getSiblingIndex(), y = null;
cc.isValid(l, !0) && (y = this._view._acquireNextMosaicForStyle(e, 2));
var g = e.width, v = e.height;
if (g <= 0 || v <= 0) {
var b = e.getBoundingBox();
if (b && b.width > 0 && b.height > 0) {
g = b.width;
v = b.height;
}
}
var S = this.STYLE2_MASK_ANGLE_DEG, m = this._pickEdgeForMask("A", S), x = this._pickEdgeForMask("B", S), C = null;
if (cc.isValid(y, !0)) {
y.opacity = 255;
this._view._preparePreviewInitialState(y);
C = this._buildStyle2MaskHolder(y, {
origParent: l,
origPos: c,
origAnchorX: u,
origAnchorY: p,
origAngle: d,
origScaleX: h,
origScaleY: f,
siblingIdx: _,
mosaicW: g,
mosaicH: v
}, x, "NewSeasonNotify_Style2MaskB");
}
var N = this._buildStyle2MaskHolder(e, {
origParent: l,
origPos: c,
origAnchorX: u,
origAnchorY: p,
origAngle: d,
origScaleX: h,
origScaleY: f,
siblingIdx: _ + 1,
mosaicW: g,
mosaicH: v
}, m, "NewSeasonNotify_Style2MaskA"), w = N.maskHolder, A = C ? C.maskHolder : null, E = this._attachCompanionsToMaskA(w, l, this.STYLE2_MASK_ANGLE_DEG, N.maskCenterX, N.maskCenterY, N.kfScale);
s.active = !0;
var P = o.default.getSpSkeleton(s), M = function() {
cc.Tween.stopAllByTarget(w);
cc.Tween.stopAllByTarget(e);
A && cc.Tween.stopAllByTarget(A);
cc.isValid(y, !0) && cc.Tween.stopAllByTarget(y);
if (cc.isValid(e, !0) && cc.isValid(l, !0)) {
e.parent = l;
e.setSiblingIndex(_);
e.setPosition(c);
e.anchorX = u;
e.anchorY = p;
e.angle = d;
e.scaleX = h;
e.scaleY = f;
}
i._restoreCompanionsFromMaskA(E);
cc.isValid(w, !0) && w.destroy();
cc.isValid(A, !0) && A.destroy();
cc.isValid(y, !0) && y.destroy();
i._view.clearActiveNextMosaicIfMatches(y);
cc.isValid(s, !0) && (s.active = !1);
}, T = new cc.Node("NewSeasonNotify_Style2Holder");
this._view.node.addChild(T);
this._view.setPageFlipAbortHandler(function() {
cc.isValid(T, !0) && T.destroy();
M();
});
var L = [ {
name: "A",
maskHolder: w,
target: e,
maskCenterX: N.maskCenterX,
maskCenterY: N.maskCenterY,
toMaskLocal: N.toMaskLocal,
kfScale: N.kfScale,
companions: E
} ];
C && cc.isValid(A, !0) && cc.isValid(y, !0) && L.push({
name: "B",
maskHolder: A,
target: y,
maskCenterX: C.maskCenterX,
maskCenterY: C.maskCenterY,
toMaskLocal: C.toMaskLocal,
kfScale: C.kfScale,
companions: []
});
this._assertStyle2PhaseAlignment();
r(i, void 0, void 0, function() {
var e, t, i, o, s, l, c, u, p = this;
return n(this, function(d) {
switch (d.label) {
case 0:
return [ 4, this._view._sleep(this.STYLE2_PRE_STAY_SEC) ];

case 1:
d.sent();
if (!cc.isValid(T, !0)) return [ 2 ];
if (!cc.isValid(P, !0)) return [ 2 ];
e = this._runStyle2Phase(this.STYLE2_PHASE_IN, P, L);
this._view._armStyle2PageSfxTrioAtAnimStart(T);
t = Math.max(0, Math.min(e, this._view.style2ClonePreviewPreStartSecValue));
i = e - t;
o = 0;
s = !1;
l = function() {
if (!s && cc.isValid(y, !0)) {
s = !0;
o = p._view._playClonePreviewAllThrough(y);
}
};
t > 0 && r(p, void 0, void 0, function() {
return n(this, function(e) {
switch (e.label) {
case 0:
return i > 0 ? [ 4, this._view._sleep(i) ] : [ 3, 2 ];

case 1:
e.sent();
e.label = 2;

case 2:
if (!cc.isValid(T, !0)) return [ 2 ];
l("scheduledPreLaunch(preStart=" + t.toFixed(2) + "s)");
return [ 2 ];
}
});
});
return [ 4, this._view._sleep(e) ];

case 2:
d.sent();
if (!cc.isValid(T, !0)) return [ 2 ];
if (!cc.isValid(P, !0)) return [ 2 ];
this._runStyle2Phase(this.STYLE2_PHASE_IDLE, P, L);
s || l("idleFallbackLaunch");
return o > 0 && (c = Math.max(0, o - t)) > 0 ? [ 4, this._view._sleep(c) ] : [ 3, 4 ];

case 3:
d.sent();
if (!cc.isValid(T, !0)) return [ 2 ];
d.label = 4;

case 4:
if (!cc.isValid(P, !0)) return [ 2 ];
u = this._runStyle2Phase(this.STYLE2_PHASE_OUT, P, L);
this._view._emitStyle2OutStartSfx();
return [ 4, this._view._sleep(u) ];

case 5:
d.sent();
if (!cc.isValid(T, !0)) return [ 2 ];
M();
T.destroy();
this._view.setPageFlipAbortHandler(null);
a();
return [ 2 ];
}
});
});
} else a();
};
e.prototype.playFallback = function(e) {
var t = this._view.spineRoot;
cc.isValid(t, !0) && (t.active = !0);
var i = o.default.getSpSkeleton(t), a = new cc.Node("NewSeasonNotify_Style2Fallback");
this._view.node.addChild(a);
this._view.setPageFlipAbortHandler(function() {
cc.isValid(a, !0) && a.destroy();
cc.isValid(t, !0) && (t.active = !1);
});
r(this, void 0, void 0, function() {
var r, o, s, l;
return n(this, function(n) {
switch (n.label) {
case 0:
return [ 4, this._view._sleep(this.STYLE2_PRE_STAY_SEC) ];

case 1:
n.sent();
if (!cc.isValid(a, !0)) return [ 2 ];
r = [];
if (!cc.isValid(i, !0)) return [ 2 ];
o = this._runStyle2Phase(this.STYLE2_PHASE_IN, i, r);
this._view._armStyle2PageSfxTrioAtAnimStart(a);
return [ 4, this._view._sleep(o) ];

case 2:
n.sent();
if (!cc.isValid(a, !0)) return [ 2 ];
if (!cc.isValid(i, !0)) return [ 2 ];
s = this._runStyle2Phase(this.STYLE2_PHASE_IDLE, i, r, this.STYLE2_FALLBACK_IDLE_DURATION_SEC);
return [ 4, this._view._sleep(s) ];

case 3:
n.sent();
if (!cc.isValid(a, !0)) return [ 2 ];
if (!cc.isValid(i, !0)) return [ 2 ];
l = this._runStyle2Phase(this.STYLE2_PHASE_OUT, i, r);
this._view._emitStyle2OutStartSfx();
return [ 4, this._view._sleep(l) ];

case 4:
n.sent();
if (!cc.isValid(a, !0)) return [ 2 ];
cc.isValid(t, !0) && (t.active = !1);
a.destroy();
this._view.setPageFlipAbortHandler(null);
e && e();
return [ 2 ];
}
});
});
};
e.prototype._startStyle2MaskTween = function(e, t) {
var i, r;
if (cc.isValid(e.maskHolder, !0) && cc.isValid(e.target, !0) && t && !(t.length < 2)) {
var n = cc.tween(e.maskHolder), o = cc.tween(e.target), s = [], l = [];
try {
for (var c = a(e.companions), u = c.next(); !u.done; u = c.next()) {
var p = u.value;
if (cc.isValid(p.target, !0)) {
s.push(cc.tween(p.target));
l.push(p);
}
}
} catch (e) {
i = {
error: e
};
} finally {
try {
u && !u.done && (r = c.return) && r.call(c);
} finally {
if (i) throw i.error;
}
}
for (var d = 1; d < t.length; d++) {
var h = t[d - 1], f = t[d], _ = Math.max(0, f.time - h.time), y = f.dx * e.kfScale, g = f.dy * e.kfScale;
n = n.to(_, {
position: cc.v3(e.maskCenterX + y, e.maskCenterY + g, 0)
});
o = o.to(_, {
position: e.toMaskLocal(f.dx, f.dy)
});
for (var v = 0; v < l.length; v++) s[v] = s[v].to(_, {
position: l[v].toMaskLocal(f.dx, f.dy)
});
}
n.start();
o.start();
s.forEach(function(e) {
return e.start();
});
}
};
e.prototype._runStyle2Phase = function(e, t, i, r) {
var n, o;
if (t) {
t.loop = e.spineLoop;
t.setAnimation(0, e.spineAnim, e.spineLoop);
}
if (e.maskKeyframes) try {
for (var s = a(i), l = s.next(); !l.done; l = s.next()) {
var c = l.value;
this._startStyle2MaskTween(c, e.maskKeyframes);
}
} catch (e) {
n = {
error: e
};
} finally {
try {
l && !l.done && (o = s.return) && o.call(s);
} finally {
if (n) throw n.error;
}
}
return void 0 !== r ? r : e.durationSec;
};
e.prototype._assertStyle2PhaseAlignment = function() {};
e.prototype._buildStyle2MaskHolder = function(e, t, i, r) {
for (var n, a, o = t.origParent, s = t.origPos, l = t.origAnchorX, c = t.origAnchorY, u = t.origAngle, p = t.origScaleX, d = t.origScaleY, h = t.siblingIdx, f = t.mosaicW, _ = t.mosaicH, y = s.x + (1 - l) * f * Math.abs(p), g = s.y - c * _ * Math.abs(d), v = cc.view.getVisibleSize(), b = o; cc.isValid(b, !0) && !b.getComponent(cc.Canvas); ) b = b.parent;
if (cc.isValid(b, !0)) {
var S = cc.v2(v.width / 2, -v.height / 2), m = b.convertToWorldSpaceAR(S), x = o.convertToNodeSpaceAR(m);
n = x.x;
a = x.y;
} else {
n = v.width / 2;
a = -v.height / 2;
}
var C = this._getResolutionScale(v), N = this._view.style2MaskCornerOffsetXY;
n -= N.x * C;
a += N.y * C;
var w = Math.hypot(v.width, v.height) * this._view.style2MaskRectSideMultiplierValue, A = w / 2, E = this.STYLE2_MASK_ANGLE_DEG, P = E * Math.PI / 180, M = "rightEdge" === i ? +A : -A, T = n - M * Math.cos(P), L = a - M * Math.sin(P), V = new cc.Node(r);
V.setAnchorPoint(.5, .5);
V.setContentSize(w, w);
V.parent = o;
V.setSiblingIndex(h);
V.setPosition(T, L);
V.angle = E;
V.scale = 1;
V.addComponent(cc.Mask).type = cc.Mask.Type.RECT;
var R = -P, F = Math.cos(R), I = Math.sin(R), k = s.x - T, O = s.y - L, B = function(e, t) {
var i = k - e * C, r = O - t * C;
return cc.v3(i * F - r * I, i * I + r * F, 0);
};
e.parent = V;
var Y = B(0, 0);
e.setPosition(Y.x, Y.y);
e.angle = u - E;
e.scaleX = p;
e.scaleY = d;
return {
maskHolder: V,
maskCenterX: T,
maskCenterY: L,
toMaskLocal: B,
maskRectSide: w,
mosaicRBLocalX: y,
mosaicRBLocalY: g,
screenRBLocalX: n,
screenRBLocalY: a,
kfScale: C
};
};
e.prototype._attachCompanionsToMaskA = function(e, t, i, r, n, s) {
var l, c, u = [], p = this._view.getPageFlipCompanions();
if (!p || 0 === p.length) return u;
if (!cc.isValid(e, !0) || !cc.isValid(t, !0)) return u;
var d = i * Math.PI / 180, h = Math.cos(-d), f = Math.sin(-d), _ = o.default.getWorldAngle(e), y = o.default.getWorldScale(e), g = function(i) {
if (!cc.isValid(i, !0)) return "continue";
var a = i.parent;
if (!cc.isValid(a, !0)) return "continue";
if (i === e || a === e) return "continue";
var l = {
node: i,
parent: a,
siblingIdx: i.getSiblingIndex(),
position: i.position.clone(),
angle: i.angle,
opacity: i.opacity,
scaleX: i.scaleX,
scaleY: i.scaleY
}, c = a.convertToWorldSpaceAR(i.position), p = o.default.getWorldAngle(i), d = o.default.getWorldScale(i), g = t.convertToNodeSpaceAR(c), v = g.x - r, b = g.y - n, S = function(e, t) {
var i = v - e * s, r = b - t * s;
return cc.v3(i * h - r * f, i * f + r * h, 0);
};
i.parent = e;
var m = S(0, 0);
i.setPosition(m.x, m.y);
i.angle = p - _;
i.scaleX = 0 !== y.x ? d.x / y.x : d.x;
i.scaleY = 0 !== y.y ? d.y / y.y : d.y;
u.push({
target: i,
toMaskLocal: S,
snapshot: l
});
};
try {
for (var v = a(p), b = v.next(); !b.done; b = v.next()) g(b.value);
} catch (e) {
l = {
error: e
};
} finally {
try {
b && !b.done && (c = v.return) && c.call(v);
} finally {
if (l) throw l.error;
}
}
return u;
};
e.prototype._restoreCompanionsFromMaskA = function(e) {
if (e && 0 !== e.length) for (var t = e.length - 1; t >= 0; t--) {
var i = e[t].snapshot;
if (cc.isValid(i.node, !0) && cc.isValid(i.parent, !0)) {
cc.Tween.stopAllByTarget(i.node);
i.node.parent = i.parent;
i.node.setSiblingIndex(i.siblingIdx);
i.node.setPosition(i.position);
i.node.angle = i.angle;
i.node.opacity = i.opacity;
i.node.scaleX = i.scaleX;
i.node.scaleY = i.scaleY;
}
}
};
e.prototype._warnLegacyStyle2MaskOffset = function() {
var e = this._view.legacyMaskOffsetSnapshot;
e.xRatio, e.xOffset, e.yRatio, e.yOffset;
};
e.prototype._logStyle2Diagnostics = function(e, t, i, r, n) {
var o = this, s = n.maskRectSide / 2, l = -this.STYLE2_MASK_ANGLE_DEG * Math.PI / 180, c = Math.cos(l), u = Math.sin(l), p = function(e, t, i, r, n, a) {
var o = n - (e + i), s = a - (t + r);
return {
lx: o * c - s * u,
ly: o * u + s * c
};
}, d = this.STYLE2_MASK_ANGLE_DEG * Math.PI / 180, h = n.mosaicW * Math.abs(n.origScaleX) * .5, f = n.mosaicH * Math.abs(n.origScaleY) * .5, _ = h * Math.abs(Math.cos(d)) + f * Math.abs(Math.sin(d)), y = h * Math.abs(Math.sin(d)) + f * Math.abs(Math.cos(d)), g = function(e, t, i) {
var r = Math.min(e + t, i), n = Math.max(e - t, -i);
return Math.max(0, r - n);
}, v = function(e, t) {
var i = _ > 0 ? g(e, _, s) / (2 * _) : 1, r = y > 0 ? g(t, y, s) / (2 * y) : 1;
return Math.max(0, Math.min(1, i * r));
}, b = function(e, t) {
var i, r, l = p(e, t, 0, 0, n.origPos.x, n.origPos.y), c = v(l.lx, l.ly), u = null, d = !1;
try {
for (var h = a(o.STYLE2_MASK_KEYFRAMES_ALL), f = h.next(); !f.done; f = h.next()) {
var _ = f.value, y = _.dx * n.kfScale, g = _.dy * n.kfScale, b = p(e, t, y, g, n.origPos.x, n.origPos.y);
(Math.abs(b.lx) > s || Math.abs(b.ly) > s) && (d = !0);
(!u || Math.abs(b.lx) + Math.abs(b.ly) > Math.abs(u.lx) + Math.abs(u.ly)) && (u = {
time: _.time,
dx: y,
dy: g,
lx: b.lx,
ly: b.ly
});
}
} catch (e) {
i = {
error: e
};
} finally {
try {
f && !f.done && (r = h.return) && r.call(h);
} finally {
if (i) throw i.error;
}
}
return {
initLocal: l,
initVisible: c,
peakKf: u,
peakOutside: d,
peakVisible: u ? v(u.lx, u.ly) : 1
};
}, S = (b(n.maskCenterAX, n.maskCenterAY), n.hasMaskB && b(n.maskCenterBX, n.maskCenterBY), 
cc.view.getVisibleSize().width), m = cc.view.getVisibleSize().height, x = {
x: n.screenRBLocalX,
y: n.screenRBLocalY
}, C = x.x - S / 2, N = x.y + m / 2, w = {
x: C - S / 2,
y: N + m / 2
}, A = {
x: C - S / 2,
y: N - m / 2
}, E = {
x: C + S / 2,
y: N + m / 2
};
p(n.maskCenterAX, n.maskCenterAY, 0, 0, w.x, w.y), p(n.maskCenterAX, n.maskCenterAY, 0, 0, A.x, A.y), 
p(n.maskCenterAX, n.maskCenterAY, 0, 0, x.x, x.y), p(n.maskCenterAX, n.maskCenterAY, 0, 0, E.x, E.y);
};
return e;
}();
i.default = s;
cc._RF.pop();
}, {
"../NewSeasonNodeMathUtil": "NewSeasonNodeMathUtil"
} ]
}, {}, [ "CloneNodeSanitizer", "NewSeasonNodeMathUtil", "NewSeasonNotifyTrait", "NewSeasonNotifyView", "NewSeasonNotify_IOS_Trait", "Style2PageFlipController", "MosaicData" ]);
//# sourceMappingURL=index.js.map
