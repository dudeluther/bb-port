window.__require = function e(t, a, o) {
function r(l, i) {
if (!a[l]) {
if (!t[l]) {
var s = l.split("/");
s = s[s.length - 1];
if (!t[s]) {
var h = "function" == typeof __require && __require;
if (!i && h) return h(s, !0);
if (n) return n(s, !0);
throw new Error("Cannot find module '" + l + "'");
}
l = s;
}
var c = a[l] = {
exports: {}
};
t[l][0].call(c.exports, function(e) {
return r(t[l][1][e] || e);
}, c, c.exports, e, t, a, o);
}
return a[l].exports;
}
for (var n = "function" == typeof __require && __require, l = 0; l < o.length; l++) r(o[l]);
return r;
}({
InitBoardSnakeProStyleProTrait: [ function(e, t, a) {
"use strict";
cc._RF.push(t, "cc59aYuVLBOVJdJ10q1P1vm", "InitBoardSnakeProStyleProTrait");
var o, r = this && this.__extends || (o = function(e, t) {
return (o = Object.setPrototypeOf || {
__proto__: []
} instanceof Array && function(e, t) {
e.__proto__ = t;
} || function(e, t) {
for (var a in t) Object.prototype.hasOwnProperty.call(t, a) && (e[a] = t[a]);
})(e, t);
}, function(e, t) {
o(e, t);
function a() {
this.constructor = e;
}
e.prototype = null === t ? Object.create(t) : (a.prototype = t.prototype, new a());
}), n = this && this.__assign || function() {
return (n = Object.assign || function(e) {
for (var t, a = 1, o = arguments.length; a < o; a++) {
t = arguments[a];
for (var r in t) Object.prototype.hasOwnProperty.call(t, r) && (e[r] = t[r]);
}
return e;
}).apply(this, arguments);
}, l = this && this.__decorate || function(e, t, a, o) {
var r, n = arguments.length, l = n < 3 ? t : null === o ? o = Object.getOwnPropertyDescriptor(t, a) : o;
if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) l = Reflect.decorate(e, t, a, o); else for (var i = e.length - 1; i >= 0; i--) (r = e[i]) && (l = (n < 3 ? r(l) : n > 3 ? r(t, a, l) : r(t, a)) || l);
return n > 3 && l && Object.defineProperty(t, a, l), l;
}, i = this && this.__awaiter || function(e, t, a, o) {
return new (a || (a = Promise))(function(r, n) {
function l(e) {
try {
s(o.next(e));
} catch (e) {
n(e);
}
}
function i(e) {
try {
s(o.throw(e));
} catch (e) {
n(e);
}
}
function s(e) {
e.done ? r(e.value) : (t = e.value, t instanceof a ? t : new a(function(e) {
e(t);
})).then(l, i);
var t;
}
s((o = o.apply(e, t || [])).next());
});
}, s = this && this.__generator || function(e, t) {
var a, o, r, n, l = {
label: 0,
sent: function() {
if (1 & r[0]) throw r[1];
return r[1];
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
return s([ e, t ]);
};
}
function s(n) {
if (a) throw new TypeError("Generator is already executing.");
for (;l; ) try {
if (a = 1, o && (r = 2 & n[0] ? o.return : n[0] ? o.throw || ((r = o.return) && r.call(o), 
0) : o.next) && !(r = r.call(o, n[1])).done) return r;
(o = 0, r) && (n = [ 2 & n[0], r.value ]);
switch (n[0]) {
case 0:
case 1:
r = n;
break;

case 4:
l.label++;
return {
value: n[1],
done: !1
};

case 5:
l.label++;
o = n[1];
n = [ 0 ];
continue;

case 7:
n = l.ops.pop();
l.trys.pop();
continue;

default:
if (!(r = l.trys, r = r.length > 0 && r[r.length - 1]) && (6 === n[0] || 2 === n[0])) {
l = 0;
continue;
}
if (3 === n[0] && (!r || n[1] > r[0] && n[1] < r[3])) {
l.label = n[1];
break;
}
if (6 === n[0] && l.label < r[1]) {
l.label = r[1];
r = n;
break;
}
if (r && l.label < r[2]) {
l.label = r[2];
l.ops.push(n);
break;
}
r[2] && l.ops.pop();
l.trys.pop();
continue;
}
n = t.call(e, l);
} catch (e) {
n = [ 6, e ];
o = 0;
} finally {
a = r = 0;
}
if (5 & n[0]) throw n[1];
return {
value: n[0] ? n[1] : void 0,
done: !0
};
}
}, h = this && this.__values || function(e) {
var t = "function" == typeof Symbol && Symbol.iterator, a = t && e[t], o = 0;
if (a) return a.call(e);
if (e && "number" == typeof e.length) return {
next: function() {
e && o >= e.length && (e = void 0);
return {
value: e && e[o++],
done: !e
};
}
};
throw new TypeError(t ? "Object is not iterable." : "Symbol.iterator is not defined.");
};
Object.defineProperty(a, "__esModule", {
value: !0
});
a.InitBoardSnakeProStyleProTrait = void 0;
var c = 4, d = 64 / c, p = [ "filterLayer", "kuangLayer", "shadowLayer", "shadowKuangLayer", "AddUploadPicBoardShowLayer", "AddUploadPicBoardShow" ], u = cc.color(255, 255, 255, 255), v = cc.color(255, 255, 255, 255), f = [ {
r: 1,
c: 0
}, {
r: -1,
c: 0
}, {
r: 0,
c: -1
}, {
r: 0,
c: 1
} ], y = {
1: {
endless: !0,
travel: !1,
showHead: !0,
rotation: !1
},
2: {
endless: !1,
travel: !0,
showHead: !0,
rotation: !1
},
3: {
endless: !0,
travel: !0,
showHead: !0,
rotation: !1
},
4: {
endless: !0,
travel: !1,
showHead: !0,
rotation: !0
},
5: {
endless: !0,
travel: !0,
showHead: !1,
rotation: !0
},
6: {
endless: !0,
travel: !0,
showHead: !0,
rotation: !0
}
}, m = [ Array.from({
length: 8
}, function(e, t) {
return {
r: 0,
c: t
};
}), Array.from({
length: 8
}, function(e, t) {
return {
r: t,
c: 7
};
}), Array.from({
length: 8
}, function(e, t) {
return {
r: 7,
c: t
};
}), Array.from({
length: 8
}, function(e, t) {
return {
r: t,
c: 0
};
}) ], k = function(e) {
r(t, e);
function t() {
var t = null !== e && e.apply(this, arguments) || this;
t._snakeHeads = [];
t._snakeHeadStart = new Array(c).fill(null);
t._shownBlocks = new Map();
t._allBlocksToShow = new Map();
t._distanceCache = new Map();
t._faceBlocks = [];
t._isAnimating = !1;
t._shouldTakeOverEndlessSplash = !1;
t._openingSplashComponent = null;
t._snakeCompleteTimeComponent = null;
t._snakeCompleteTime = 1.9;
t._overlayParentCache = null;
t._revealFlashOverlays = {};
t._lastPutAudioTime = 0;
t._uploadPicSnapshots = [];
t._hasPlayedTravelSnake = !1;
t._pendingTravelPlayAfterGoalCollect = !1;
t._isTravelGoalCollectPlaying = !1;
t._travelGoalCollectWaitToken = 0;
t._uiOpenListener = null;
t._lastGameMode = null;
t._modeChanged = !1;
t._forcedShouldUpdateBlocks = new Set();
t._forcedForceRenderBlocks = new Set();
return t;
}
Object.defineProperty(t.prototype, "onActiveCondition", {
get: function() {
return this.isCanActive();
},
enumerable: !1,
configurable: !0
});
t.prototype.isCanActive = function() {
return !0;
};
Object.defineProperty(t.prototype, "config", {
get: function() {
var e;
return null !== (e = y[this.props.plan]) && void 0 !== e ? e : y[1];
},
enumerable: !1,
configurable: !0
});
t.prototype.onCreate = function() {
var e = this, t = TRAIT("InitBoardSnakeStyleTrait");
(null == t ? void 0 : t.active) && t.id && Trait.dynamicDisableTraits([ t.id ]);
this._uiOpenListener = function(t) {
"ChapterGoalCollect" === (null == t ? void 0 : t.name) && e.handleTravelGoalCollectOpen();
};
hs.UI.addEventListener("open", this._uiOpenListener);
};
t.prototype.posToKey = function(e) {
return e.r + "_" + e.c;
};
t.prototype.shouldHandleEndless = function() {
return this.config.endless;
};
t.prototype.shouldHandleTravel = function() {
return this.config.travel;
};
t.prototype.isShowHead = function() {
return this.config.showHead;
};
t.prototype.prepareUploadPicOverlays = function() {
var e, t, a, o;
if (!(this._uploadPicSnapshots.length > 0)) {
var r = TRAIT("AddUploadPicTrait");
if ((null == r ? void 0 : r.active) && r.isTrigger()) {
var n = null === (o = null === (a = Cinst(hs.Board)) || void 0 === a ? void 0 : a.blocks) || void 0 === o ? void 0 : o.parent;
if (cc.isValid(n)) try {
for (var l = h(p), i = l.next(); !i.done; i = l.next()) {
var s = i.value, c = n.getChildByName(s);
if (cc.isValid(c) && !(c.opacity <= 0)) {
this._uploadPicSnapshots.push({
node: c,
active: c.active,
opacity: c.opacity
});
cc.Tween.stopAllByTarget(c);
c.opacity = 0;
}
}
} catch (t) {
e = {
error: t
};
} finally {
try {
i && !i.done && (t = l.return) && t.call(l);
} finally {
if (e) throw e.error;
}
}
}
}
};
t.prototype.restoreUploadPicOverlays = function() {
var e, t;
if (0 !== this._uploadPicSnapshots.length) {
var a = this._uploadPicSnapshots;
this._uploadPicSnapshots = [];
try {
for (var o = h(a), r = o.next(); !r.done; r = o.next()) {
var n = r.value;
if (cc.isValid(n.node)) {
cc.Tween.stopAllByTarget(n.node);
n.node.active = n.active;
n.opacity <= 0 ? n.node.opacity = n.opacity : cc.tween(n.node).to(.3, {
opacity: n.opacity
}, {
easing: "quadOut"
}).start();
}
}
} catch (t) {
e = {
error: t
};
} finally {
try {
r && !r.done && (t = o.return) && t.call(o);
} finally {
if (e) throw e.error;
}
}
}
};
t.prototype.isLowDevice = function() {
return hs.deviceInfo.isLowLevel;
};
t.prototype.getDisplayColorById = function(e) {
var t = hs.blockInfo.getBlockColorValueById(e) || "#FFFFFF";
return new cc.Color().fromHEX(t);
};
t.prototype.mixColor = function(e, t, a) {
var o = Math.max(0, Math.min(1, a));
return cc.color(Math.round(e.r + (t.r - e.r) * o), Math.round(e.g + (t.g - e.g) * o), Math.round(e.b + (t.b - e.b) * o), 255);
};
t.prototype.getHeadHighlightTint = function(e) {
return this.mixColor(this.getDisplayColorById(e), v, .5);
};
t.prototype.getNeckHighlightTint = function(e) {
return this.mixColor(this.getDisplayColorById(e), v, .28);
};
t.prototype.getRevealFlashTint = function(e) {
return this.mixColor(this.getDisplayColorById(e), v, .6);
};
t.prototype.isRotationConditionMet = function() {
var e, t, a = (null !== (e = hs.storage.getItem("classGameNumNoRefresh", 0)) && void 0 !== e ? e : 0) + (null !== (t = hs.storage.getItem("chapterGameNumNoRefresh", 0)) && void 0 !== t ? t : 0) + 1;
return !(a < 6) && Math.floor((a - 6) / 5) % 2 == 0;
};
t.prototype.isPassCondition = function() {
if (this.isLowDevice()) return !1;
var e = this.config, t = e.endless, a = e.travel, o = e.rotation, r = hs.gameInfo.gameMode, n = r === hs.GameMode.Class, l = !1;
r === hs.GameMode.Chapter && a ? l = !o || this.isRotationConditionMet() : n && t && (l = !o || this.isRotationConditionMet());
return l;
};
t.prototype.isColdStartWaitingForAlgorithm = function() {
var e = TRAIT("ColdStartClearBoardTrait");
return Boolean((null == e ? void 0 : e.active) && (null == e ? void 0 : e.shouldCallAlgorithm));
};
t.prototype.getCurrentGameNum = function() {
var e, t, a = hs.gameInfo.gameMode;
return a === hs.GameMode.Class ? null !== (e = hs.storage.getItem("classGameNumNoRefresh", 0)) && void 0 !== e ? e : 0 : a === hs.GameMode.Chapter ? null !== (t = hs.storage.getItem("chapterGameNumNoRefresh", 0)) && void 0 !== t ? t : 0 : -1;
};
t.prototype.markPlayedThisGame = function() {
var e = this.getCurrentGameNum();
if (!(e < 0)) {
var t = hs.gameInfo.gameMode;
t === hs.GameMode.Class ? hs.storage.setItem("initBoardSnakeProStylePro_lastClassGame", e) : t === hs.GameMode.Chapter && hs.storage.setItem("initBoardSnakeProStylePro_lastChapterGame", e);
}
};
t.prototype.handlePhysicalBackDuringSnakeAnimation = function(e, t) {
var a, o = null === (a = e.args) || void 0 === a ? void 0 : a[0];
if ((o === cc.macro.KEY.back || o === cc.macro.KEY.escape) && hs.gameInfo.gameMode === t && this._isAnimating) {
e.replace = !0;
e.returnState = !0;
}
};
t.prototype.resetSnakeTraitStateOnGameEnter = function() {
this._travelGoalCollectWaitToken++;
this._pendingTravelPlayAfterGoalCollect = !1;
this._isTravelGoalCollectPlaying = !1;
this._hasPlayedTravelSnake = !1;
this.clearEndlessSplashTakeOver();
this._snakeCompleteTimeComponent = null;
this._snakeCompleteTime = 1.9;
this._isAnimating && this.finalizeSnakeAnimation();
this.setAnimationState(!1);
this.restoreUploadPicOverlays();
};
t.prototype.updateGameModeForceRenderState = function() {
var e = hs.gameInfo.gameMode;
this._modeChanged = null !== this._lastGameMode && this._lastGameMode !== e;
if (this._modeChanged) {
this._forcedShouldUpdateBlocks.clear();
this._forcedForceRenderBlocks.clear();
}
this._lastGameMode = e;
};
t.prototype.onActive = function(e) {
(hs.tp.isChapterGame_ProxyOnGameStart(e) || hs.tp.isClassGame_ProxyOnGameStart(e)) && this.resetSnakeTraitStateOnGameEnter();
hs.tp.isChapterBackSpace_ProxyOnkeyCode(e) && this.handlePhysicalBackDuringSnakeAnimation(e, hs.GameMode.Chapter);
hs.tp.isClassBackSpace_ProxyOnKeyCode(e) && this.handlePhysicalBackDuringSnakeAnimation(e, hs.GameMode.Class);
hs.tp.isClassBoardSplashAnimation_ProxyOnBoardSplashAnimationPlay(e) && this.handleEndlessSplashAnimation(e);
hs.tp.isClassGame_ProxySetBoardShowFinish(e) && this.handleEndlessBoardShowFinish(e);
hs.tp.isBoardSplashAnimationDoAnimation(e) && this.handleBoardSplashAnimationDoAnimation(e);
hs.tp.isBoardSplashAnimationCompleteTime(e) && this.handleBoardSplashAnimationCompleteTime(e);
hs.tp.isChapterGame_Ready_ProxyResetBoardSplashAnimation(e) && this.shouldHandleTravel() && (this._hasPlayedTravelSnake = !1);
hs.tp.isBoardOnBoardRenderOver(e) && this.handleTravelBoardRenderOver();
hs.tp.isChapterGoalCollectShowAction(e) && this.handleTravelGoalCollectShowAction();
hs.tp.isChapterGoalCollectGoalFlyAnimDone(e) && this.handleTravelGoalCollectDone();
hs.tp.isChapterGoalScoreRender(e) && this.handleTravelGoalScoreRender();
hs.tp.isChapterGoalScoreGoalFlyAnimDone(e) && this.handleTravelGoalScoreDone();
hs.tp.isChapterTopInfoBtnOnClickBack(e) && this.handleChapterTopInfoBackClick(e);
if (hs.tp.isGame_SceneClose_ProxyOnSceneClose(e)) {
this._hasPlayedTravelSnake = !1;
this._pendingTravelPlayAfterGoalCollect = !1;
this._isTravelGoalCollectPlaying = !1;
this._travelGoalCollectWaitToken++;
}
hs.tp.isBlockForceRender(e) && this.handleBlockForceRender(e);
hs.tp.isSkinThree_ProxyOnGameStart(e) && this.updateGameModeForceRenderState();
hs.tp.isBlockShouldComponentUpdate(e) && this.handleBlockShouldComponentUpdate(e);
};
t.prototype.handleBlockShouldComponentUpdate = function(e) {
if (this._modeChanged) {
var t = e.target;
if (t && !this._forcedShouldUpdateBlocks.has(t)) {
e.returnValue = !0;
e.returnState = !0;
e.replace = !0;
this._forcedShouldUpdateBlocks.add(t);
}
}
};
t.prototype.handleBlockForceRender = function(e) {
if (this._modeChanged) {
var t = e.target;
if (t && !this._forcedForceRenderBlocks.has(t)) {
e.returnValue = !0;
e.returnState = !0;
e.replace = !0;
this._forcedForceRenderBlocks.add(t);
}
}
};
t.prototype.handleEndlessSplashAnimation = function(e) {
var t, a;
if (e.replace) ; else if (this._isAnimating) ; else if (this.shouldHandleEndless() && hs.gameInfo.gameMode === hs.GameMode.Class && !(hs.classGuideInfo.step < 3)) if (this.isColdStartWaitingForAlgorithm()) ; else if (this.isPassCondition() && this.hasRenderableBoardBlocks()) if (this.hasFullLineBlocks()) ; else {
var o = null === (t = e.args) || void 0 === t ? void 0 : t[0];
this._openingSplashComponent = null !== (a = null == o ? void 0 : o.getComponent(hs.BoardSplashAnimation)) && void 0 !== a ? a : null;
this._shouldTakeOverEndlessSplash = !0;
}
};
t.prototype.handleEndlessBoardShowFinish = function(e) {
this.shouldHandleEndless() && hs.gameInfo.gameMode === hs.GameMode.Class && !(hs.classGuideInfo.step < 3 || this.isColdStartWaitingForAlgorithm()) && this._isAnimating && this.hideRealBoardBlocks(e.args[0]);
};
t.prototype.handleBoardSplashAnimationDoAnimation = function(e) {
var t;
if (this._shouldTakeOverEndlessSplash) if (e.replace) this.abortEndlessSplashTakeOver(); else if (this._openingSplashComponent && e.target !== this._openingSplashComponent) this.abortEndlessSplashTakeOver(); else if (this.shouldHandleEndless()) if (hs.gameInfo.gameMode === hs.GameMode.Class) if ((null === (t = e.args) || void 0 === t ? void 0 : t[0]) === hs.BoardSplashAnimationPlayType.UP_DOWN) {
this._snakeCompleteTimeComponent = e.target;
this._snakeCompleteTime = this.getEndlessSnakeCompleteTime();
this.clearEndlessSplashTakeOver();
e.replace = !0;
e.returnState = !0;
this.markPlayedThisGame();
this.hideRealBoardBlocks();
this.executeSnakeAnimation(void 0, !0);
} else this.abortEndlessSplashTakeOver(); else this.abortEndlessSplashTakeOver(); else this.abortEndlessSplashTakeOver();
};
t.prototype.handleBoardSplashAnimationCompleteTime = function(e) {
var t;
if (this._snakeCompleteTimeComponent && e.target === this._snakeCompleteTimeComponent && (null === (t = e.args) || void 0 === t ? void 0 : t[0]) === hs.BoardSplashAnimationPlayType.UP_DOWN) {
e.returnValue = this._snakeCompleteTime;
e.replace = !0;
e.returnState = !0;
this._snakeCompleteTimeComponent = null;
this._snakeCompleteTime = 1.9;
}
};
t.prototype.clearEndlessSplashTakeOver = function() {
this._shouldTakeOverEndlessSplash = !1;
this._openingSplashComponent = null;
};
t.prototype.abortEndlessSplashTakeOver = function() {
this.clearEndlessSplashTakeOver();
this._snakeCompleteTimeComponent = null;
this._snakeCompleteTime = 1.9;
if (this._isAnimating) {
this.finalizeSnakeAnimation();
this.setAnimationState(!1);
} else this.restoreUploadPicOverlays();
};
t.prototype.handleTravelBoardRenderOver = function() {
if (this.shouldHandleTravel() && hs.gameInfo.gameMode === hs.GameMode.Chapter && this.isPassCondition()) if (this.isColdStartWaitingForAlgorithm()) ; else if (this._isAnimating) ; else if (this._hasPlayedTravelSnake) ; else if (this.hasRenderableBoardBlocks()) {
this._hasPlayedTravelSnake = !0;
this.waitTravelGoalCollectThenStart();
}
};
t.prototype.waitTravelGoalCollectThenStart = function() {
var e = this;
this._pendingTravelPlayAfterGoalCollect = !0;
var t = ++this._travelGoalCollectWaitToken;
if (this._isTravelGoalCollectPlaying) {
this.hideRealBoardBlocks();
this.scheduleTravelGoalCollectFallback();
}
setTimeoutSafe(function() {
if (t === e._travelGoalCollectWaitToken && e._pendingTravelPlayAfterGoalCollect && !e._isTravelGoalCollectPlaying) {
e._pendingTravelPlayAfterGoalCollect = !1;
e.startTravelSnakeAnimation();
}
}, 1200);
};
t.prototype.handleTravelGoalCollectOpen = function() {
if (hs.gameInfo.gameMode === hs.GameMode.Chapter) {
this._isTravelGoalCollectPlaying = !0;
if (this._pendingTravelPlayAfterGoalCollect) {
this.hideRealBoardBlocks();
this.scheduleTravelGoalCollectFallback();
}
}
};
t.prototype.handleTravelGoalCollectShowAction = function() {
if (hs.gameInfo.gameMode === hs.GameMode.Chapter) {
this._isTravelGoalCollectPlaying = !0;
if (this._pendingTravelPlayAfterGoalCollect) {
this.hideRealBoardBlocks();
this.scheduleTravelGoalCollectFallback();
}
}
};
t.prototype.handleTravelGoalCollectDone = function() {
if (hs.gameInfo.gameMode === hs.GameMode.Chapter) {
this._isTravelGoalCollectPlaying = !1;
if (this._pendingTravelPlayAfterGoalCollect) {
this._pendingTravelPlayAfterGoalCollect = !1;
this._travelGoalCollectWaitToken++;
this.startTravelSnakeAnimation();
}
}
};
t.prototype.handleTravelGoalScoreRender = function() {
if (hs.gameInfo.gameMode === hs.GameMode.Chapter) {
this._isTravelGoalCollectPlaying = !0;
if (this._pendingTravelPlayAfterGoalCollect) {
this.hideRealBoardBlocks();
this.scheduleTravelGoalCollectFallback();
}
}
};
t.prototype.handleTravelGoalScoreDone = function() {
if (hs.gameInfo.gameMode === hs.GameMode.Chapter) {
this._isTravelGoalCollectPlaying = !1;
if (this._pendingTravelPlayAfterGoalCollect) {
this._pendingTravelPlayAfterGoalCollect = !1;
this._travelGoalCollectWaitToken++;
this.startTravelSnakeAnimation();
}
}
};
t.prototype.handleChapterTopInfoBackClick = function(e) {
if (this._isAnimating) {
e.replace = !0;
e.returnState = !0;
}
};
t.prototype.scheduleTravelGoalCollectFallback = function() {
var e = this, t = this._travelGoalCollectWaitToken;
setTimeoutSafe(function() {
if (t === e._travelGoalCollectWaitToken && e._pendingTravelPlayAfterGoalCollect && e._isTravelGoalCollectPlaying) {
e._isTravelGoalCollectPlaying = !1;
e._pendingTravelPlayAfterGoalCollect = !1;
e._travelGoalCollectWaitToken++;
e.startTravelSnakeAnimation();
}
}, 3e3);
};
t.prototype.startTravelSnakeAnimation = function() {
if (this._isAnimating) ; else {
this.markPlayedThisGame();
this.executeSnakeAnimation(void 0, !0);
}
};
t.prototype.executeSnakeAnimation = function(e, t) {
var a = this;
if (this._isAnimating) ; else {
this._isAnimating = !0;
this._lastPutAudioTime = 0;
hs.audioInfo.play(hs.AudioConfig.s_restart);
this.setAnimationState(!0);
this.initAndRunSnakeAnimation(t).then(function() {
a.finalizeSnakeAnimation();
a.setAnimationState(!1);
}).catch(function() {
a.finalizeSnakeAnimation();
a.setAnimationState(!1);
});
}
};
t.prototype.setAnimationState = function(e) {
var t, a;
null === (a = null === (t = hs.setupGameInfo) || void 0 === t ? void 0 : t.setClickSetupBtn) || void 0 === a || a.call(t, !e);
};
t.prototype.initAndRunSnakeAnimation = function(e) {
var t, a;
return i(this, void 0, Promise, function() {
return s(this, function(o) {
switch (o.label) {
case 0:
return (null === (a = null === (t = hs.boardRendererInfo) || void 0 === t ? void 0 : t.splashBoardBarrier) || void 0 === a ? void 0 : a.isOpen) ? [ 3, 2 ] : [ 4, this.waitBarrierWithTimeout(3e3) ];

case 1:
o.sent();
o.label = 2;

case 2:
if (!this._isAnimating) return [ 2 ];
if (!this.prepareBoardDataForSnakeAnimation()) return [ 2 ];
e && this.hideRealBoardBlocks();
this.prepareSplashBlocks();
this.prepareUploadPicOverlays();
this.resetSnakeHeads();
return [ 4, this.runSnakeLoop() ];

case 3:
o.sent();
return [ 2 ];
}
});
});
};
t.prototype.waitBarrierWithTimeout = function(e) {
return new Promise(function(t) {
var a, o, r = !1, n = function() {
if (!r) {
r = !0;
t();
}
}, l = setTimeout(function() {
n();
}, e), i = null === (o = null === (a = hs.boardRendererInfo) || void 0 === a ? void 0 : a.splashBoardBarrier) || void 0 === o ? void 0 : o.wait();
if (i && "function" == typeof i.then) i.then(function() {
clearTimeout(l);
n();
}).catch(function() {
clearTimeout(l);
n();
}); else {
clearTimeout(l);
n();
}
});
};
t.prototype.finalizeSnakeAnimation = function() {
this.clearSnakeOverlayState(!0);
this.finishSplashAnimation();
this._isAnimating = !1;
};
t.prototype.getEndlessSnakeCompleteTime = function() {
var e = this.getRenderableBoardBlockCount();
return e <= 4 ? .45 : e <= 8 ? .65 : e <= 16 ? 1 : 1.9;
};
t.prototype.hasRenderableBoardBlocks = function() {
return this.getRenderableBoardBlockCount() > 0;
};
t.prototype.getRenderableBoardBlockCount = function() {
var e, t, a = null === (e = hs.boardInfo) || void 0 === e ? void 0 : e.faceBlocks;
if (!a || 0 === a.length) return 0;
for (var o = 0, r = 0; r < 8; r++) for (var n = 0; n < 8; n++) this.isRenderableBlockValue(null === (t = a[r]) || void 0 === t ? void 0 : t[n]) && o++;
return o;
};
t.prototype.hasFullLineBlocks = function() {
var e, t, a, o = null === (e = hs.boardInfo) || void 0 === e ? void 0 : e.faceBlocks;
if (!o || 0 === o.length) return !1;
for (var r = 0; r < 8; r++) {
for (var n = !0, l = 0; l < 8; l++) if (!this.isRenderableBlockValue(null === (t = o[r]) || void 0 === t ? void 0 : t[l])) {
n = !1;
break;
}
if (n) return !0;
}
for (l = 0; l < 8; l++) {
var i = !0;
for (r = 0; r < 8; r++) if (!this.isRenderableBlockValue(null === (a = o[r]) || void 0 === a ? void 0 : a[l])) {
i = !1;
break;
}
if (i) return !0;
}
return !1;
};
t.prototype.isRenderableBlockValue = function(e) {
return void 0 !== e && -1 !== e && 10 !== e;
};
t.prototype.prepareBoardDataForSnakeAnimation = function() {
var e, t, a = null === (e = hs.boardInfo) || void 0 === e ? void 0 : e.faceBlocks;
if (!a || 0 === a.length) return !1;
this._faceBlocks = a;
this._allBlocksToShow.clear();
this._shownBlocks.clear();
this._distanceCache.clear();
for (var o = 0; o < 8; o++) for (var r = 0; r < 8; r++) {
var n = null === (t = a[o]) || void 0 === t ? void 0 : t[r];
if (this.isRenderableBlockValue(n)) {
var l = this.posToKey({
r: o,
c: r
});
this._allBlocksToShow.set(l, 1);
this._distanceCache.set(l, this.getDistanceToEdge({
r: o,
c: r
}));
}
}
return 0 !== this._allBlocksToShow.size;
};
t.prototype.resetSnakeHeads = function() {
this.clearSnakeOverlayState(!0);
this._snakeHeads = [];
for (var e = 0; e < c; e++) this._snakeHeads.push({
id: e,
currentPos: {
r: -1,
c: -1
},
lastPos: {
r: -1,
c: -1
},
path: [],
needChangePos: !0,
enable: !0,
headOverlay: null,
neckOverlay: null
});
this._snakeHeadStart = new Array(c).fill(null);
};
t.prototype.clearSnakeOverlayState = function(e) {
var t, a;
void 0 === e && (e = !1);
try {
for (var o = h(this._snakeHeads), r = o.next(); !r.done; r = o.next()) {
var n = r.value;
if (n) {
n.headOverlay = this.clearSingleOverlay(n.headOverlay, e);
n.neckOverlay = this.clearSingleOverlay(n.neckOverlay, e);
}
}
} catch (e) {
t = {
error: e
};
} finally {
try {
r && !r.done && (a = o.return) && a.call(o);
} finally {
if (t) throw t.error;
}
}
e && (this._overlayParentCache = null);
};
t.prototype.clearRevealFlashOverlays = function(e) {
var t, a;
void 0 === e && (e = !1);
var o = Object.keys(this._revealFlashOverlays);
try {
for (var r = h(o), n = r.next(); !n.done; n = r.next()) {
var l = n.value, i = this._revealFlashOverlays[l];
this._revealFlashOverlays[l] = this.clearSingleOverlay(i, e);
this._revealFlashOverlays[l] || delete this._revealFlashOverlays[l];
}
} catch (e) {
t = {
error: e
};
} finally {
try {
n && !n.done && (a = r.return) && a.call(r);
} finally {
if (t) throw t.error;
}
}
};
t.prototype.clearSingleOverlay = function(e, t) {
if (!e || !cc.isValid(e)) return null;
if (t) {
e.destroy();
return null;
}
e.active = !1;
return e;
};
t.prototype.isValidBoardPos = function(e) {
return e.r >= 0 && e.r < 8 && e.c >= 0 && e.c < 8;
};
t.prototype.getOverlayParent = function() {
var e, t;
if (this._overlayParentCache && cc.isValid(this._overlayParentCache)) return this._overlayParentCache;
for (var a = null === (e = hs.boardRendererInfo) || void 0 === e ? void 0 : e.splashBlocks, o = 0; o < 8; o++) for (var r = 0; r < 8; r++) {
var n = null === (t = null == a ? void 0 : a[o]) || void 0 === t ? void 0 : t[r];
if ((null == n ? void 0 : n.parent) && cc.isValid(n.parent)) {
this._overlayParentCache = n.parent;
return this._overlayParentCache;
}
}
return null;
};
t.prototype.getOrCreateHeadOverlay = function(e) {
var t = this.getOverlayParent();
if (!t) return null;
var a = e.headOverlay;
if (a && cc.isValid(a)) a.parent !== t && t.addChild(a); else {
var o = (a = new cc.Node("snakeHeadOverlay_" + e.id)).addComponent(cc.Sprite);
o.srcBlendFactor = cc.macro.BlendFactor.SRC_ALPHA;
o.dstBlendFactor = cc.macro.BlendFactor.ONE;
a.zIndex = 9999;
a.active = !1;
t.addChild(a);
e.headOverlay = a;
}
return a;
};
t.prototype.getOrCreateNeckOverlay = function(e) {
var t = this.getOverlayParent();
if (!t) return null;
var a = e.neckOverlay;
if (a && cc.isValid(a)) a.parent !== t && t.addChild(a); else {
var o = (a = new cc.Node("snakeNeckOverlay_" + e.id)).addComponent(cc.Sprite);
o.srcBlendFactor = cc.macro.BlendFactor.SRC_ALPHA;
o.dstBlendFactor = cc.macro.BlendFactor.ONE;
a.zIndex = 9998;
a.active = !1;
t.addChild(a);
e.neckOverlay = a;
}
return a;
};
t.prototype.syncOverlayWithBlock = function(e, t, a, o, r) {
var n = e.getComponent(cc.Sprite);
if (n) {
n.spriteFrame = a.spriteFrame;
e.position = t.position;
e.width = t.width;
e.height = t.height;
e.scaleX = t.scaleX;
e.scaleY = t.scaleY;
e.color = o;
cc.Tween.stopAllByTarget(e);
e.active = !0;
e.opacity = r;
}
};
t.prototype.getOrCreateRevealFlashOverlay = function(e) {
var t = this.getOverlayParent();
if (!t) return null;
var a = this.posToKey(e), o = this._revealFlashOverlays[a];
if (o && cc.isValid(o)) o.parent !== t && t.addChild(o); else {
var r = (o = new cc.Node("snakeRevealFlash_" + a)).addComponent(cc.Sprite);
r.srcBlendFactor = cc.macro.BlendFactor.SRC_ALPHA;
r.dstBlendFactor = cc.macro.BlendFactor.ONE;
o.zIndex = 9997;
o.active = !1;
t.addChild(o);
this._revealFlashOverlays[a] = o;
}
return o;
};
t.prototype.updateSnakeOverlay = function(e, t) {
var a, o, r, n, l;
void 0 === t && (t = !1);
if (this.isShowHead()) if (this.isValidBoardPos(e.currentPos)) {
var i = null === (a = hs.boardRendererInfo) || void 0 === a ? void 0 : a.splashBlocks, s = null === (o = null == i ? void 0 : i[e.currentPos.r]) || void 0 === o ? void 0 : o[e.currentPos.c], h = null == s ? void 0 : s.getComponent(hs.Block), c = null == h ? void 0 : h.block;
if (s && h && c && c.spriteFrame) {
var d = null === (r = this._faceBlocks[e.currentPos.r]) || void 0 === r ? void 0 : r[e.currentPos.c];
if (void 0 !== d && -1 !== d && 10 !== d) {
var p = this.getOrCreateHeadOverlay(e);
if (p) {
this.syncOverlayWithBlock(p, s, c, this.getHeadHighlightTint(d), t ? 210 : 165);
if (this.isValidBoardPos(e.lastPos)) {
var u = null === (n = null == i ? void 0 : i[e.lastPos.r]) || void 0 === n ? void 0 : n[e.lastPos.c], v = null == u ? void 0 : u.getComponent(hs.Block), f = null == v ? void 0 : v.block, y = null === (l = this._faceBlocks[e.lastPos.r]) || void 0 === l ? void 0 : l[e.lastPos.c];
if (u && v && f && f.spriteFrame && void 0 !== y && -1 !== y && 10 !== y) {
var m = this.getOrCreateNeckOverlay(e);
m && this.syncOverlayWithBlock(m, u, f, this.getNeckHighlightTint(y), 90);
} else e.neckOverlay = this.clearSingleOverlay(e.neckOverlay, !1);
} else e.neckOverlay = this.clearSingleOverlay(e.neckOverlay, !1);
}
} else {
e.headOverlay = this.clearSingleOverlay(e.headOverlay, !1);
e.neckOverlay = this.clearSingleOverlay(e.neckOverlay, !1);
}
} else e.headOverlay = this.clearSingleOverlay(e.headOverlay, !1);
} else {
e.headOverlay = this.clearSingleOverlay(e.headOverlay, !1);
e.neckOverlay = this.clearSingleOverlay(e.neckOverlay, !1);
}
};
t.prototype.runSnakeLoop = function() {
var e = this;
return new Promise(function(t) {
var a;
if (null === (a = hs.boardRendererInfo) || void 0 === a ? void 0 : a.splashBlocks) {
var o = 0, r = function() {
var a, l, i, s;
if (e._isAnimating) if (e._shownBlocks.size >= e._allBlocksToShow.size) t(); else if (o >= d) e.revealRemainingBlocksBatched(t); else {
o++;
null === (s = null === (i = hs.setupGameInfo) || void 0 === i ? void 0 : i.setClickSetupBtn) || void 0 === s || s.call(i, !1);
e.updateSnakeHeads();
try {
for (var c = h(e._snakeHeads), p = c.next(); !p.done; p = c.next()) {
var u = p.value;
if (u && !u.needChangePos && u.enable) {
var v = e.posToKey(u.currentPos);
if (e._allBlocksToShow.has(v) && !e._shownBlocks.has(v)) {
e.showBlockAt(u.currentPos, !0);
e._shownBlocks.set(v, 1);
}
var f = e.findNextPosition(u);
if (f) {
u.lastPos = n({}, u.currentPos);
u.currentPos = f;
u.path.push(f);
e.updateSnakeOverlay(u);
} else {
var y = null;
u.path.length > 0 && u.path.pop();
for (;u.path.length > 0; ) {
var m = u.path[u.path.length - 1];
u.currentPos.r = m.r;
u.currentPos.c = m.c;
if (y = e.findNextPosition(u)) break;
u.path.pop();
}
if (y && u.path.length > 0) {
u.lastPos = n({}, u.currentPos);
u.currentPos = y;
u.path.push(y);
e.updateSnakeOverlay(u, !0);
} else {
u.path = [];
u.currentPos = {
r: -1,
c: -1
};
u.lastPos = {
r: -1,
c: -1
};
u.needChangePos = !0;
u.headOverlay = e.clearSingleOverlay(u.headOverlay, !1);
u.neckOverlay = e.clearSingleOverlay(u.neckOverlay, !1);
}
}
}
}
} catch (e) {
a = {
error: e
};
} finally {
try {
p && !p.done && (l = c.return) && l.call(c);
} finally {
if (a) throw a.error;
}
}
var k = e.getWaitTime(o);
e.playPutAudioThrottled();
setTimeoutSafe(r, 1e3 * k);
} else t();
};
r();
} else t();
});
};
t.prototype.revealRemainingBlocksBatched = function(e) {
var t, a, o = this, r = [];
try {
for (var n = h(this._allBlocksToShow.keys()), l = n.next(); !l.done; l = n.next()) {
var i = l.value;
if (!this._shownBlocks.has(i)) {
var s = this.keyToPos(i);
s && r.push(s);
}
}
} catch (e) {
t = {
error: e
};
} finally {
try {
l && !l.done && (a = n.return) && a.call(n);
} finally {
if (t) throw t.error;
}
}
if (0 !== r.length) {
var c = 0, d = function() {
if (o._isAnimating) {
for (var t = Math.min(c + 4, r.length); c < t; c++) {
var a = r[c];
o.showBlockAt(a, !1);
o._shownBlocks.set(o.posToKey(a), 1);
}
c >= r.length ? setTimeoutSafe(e, 190) : setTimeoutSafe(d, 50);
} else e();
};
d();
} else e();
};
t.prototype.keyToPos = function(e) {
var t = e.split("_");
if (2 !== t.length) return null;
var a = Number(t[0]), o = Number(t[1]);
return isNaN(a) || isNaN(o) ? null : {
r: a,
c: o
};
};
t.prototype.playPutAudioThrottled = function() {
var e = Date.now();
if (!(e - this._lastPutAudioTime < 80)) {
this._lastPutAudioTime = e;
hs.audioInfo.play(hs.AudioConfig.s_put);
}
};
t.prototype.showBlockAt = function(e, t) {
var a, o, r;
void 0 === t && (t = !1);
var n = null === (a = hs.boardRendererInfo) || void 0 === a ? void 0 : a.splashBlocks, l = null === (o = null == n ? void 0 : n[e.r]) || void 0 === o ? void 0 : o[e.c];
if (l) {
var i = l.getComponent(hs.Block), s = null === (r = this._faceBlocks[e.r]) || void 0 === r ? void 0 : r[e.c];
if (i && void 0 !== s && -1 !== s && 10 !== s) {
i.setState({
color: s
});
cc.Tween.stopAllByTarget(l);
l.active = !0;
l.color = u;
l.opacity = 120;
cc.tween(l).to(.1, {
opacity: 255
}, {
easing: "quadOut"
}).to(.09, {
opacity: 255
}, {
easing: "quadIn"
}).start();
t && this.isShowHead() && this.playRevealFlash(e, l, i.block, s);
}
}
};
t.prototype.playRevealFlash = function(e, t, a, o) {
var r = this.getOrCreateRevealFlashOverlay(e);
if (r && (null == a ? void 0 : a.spriteFrame)) {
this.syncOverlayWithBlock(r, t, a, this.getRevealFlashTint(o), 0);
cc.tween(r).to(.06, {
opacity: 150
}, {
easing: "quadOut"
}).to(.16, {
opacity: 0
}, {
easing: "quadIn"
}).call(function() {
r.active = !1;
}).start();
}
};
t.prototype.updateSnakeHeads = function() {
this._snakeHeadStart.fill(null);
for (var e = this.getSnakeHeadStart(), t = 0; t < c; t++) {
var a = e[t], o = this._snakeHeads[t];
if (a) {
if (o.needChangePos) {
o.path = [];
o.currentPos = a;
o.lastPos = {
r: -1,
c: -1
};
o.path.push(a);
o.needChangePos = !1;
o.enable = !0;
this.updateSnakeOverlay(o);
}
} else {
o.enable = !1;
o.headOverlay = this.clearSingleOverlay(o.headOverlay, !1);
o.neckOverlay = this.clearSingleOverlay(o.neckOverlay, !1);
}
}
};
t.prototype.getSnakeHeadStart = function() {
for (var e, t, a = 0; a < c; a++) {
var o = m[a], r = null;
try {
for (var n = (e = void 0, h(o)), l = n.next(); !l.done; l = n.next()) {
var i = l.value, s = this.posToKey(i);
this._allBlocksToShow.has(s) && !this._shownBlocks.has(s) && (r = i);
}
} catch (t) {
e = {
error: t
};
} finally {
try {
l && !l.done && (t = n.return) && t.call(n);
} finally {
if (e) throw e.error;
}
}
this._snakeHeadStart[a] = null != r ? r : this.randomNotEdgeCellPos();
}
return this._snakeHeadStart;
};
t.prototype.isSnakePos = function(e) {
var t, a;
try {
for (var o = h(this._snakeHeadStart), r = o.next(); !r.done; r = o.next()) {
var n = r.value;
if (n && n.r === e.r && n.c === e.c) return !0;
}
} catch (e) {
t = {
error: e
};
} finally {
try {
r && !r.done && (a = o.return) && a.call(o);
} finally {
if (t) throw t.error;
}
}
return !1;
};
t.prototype.randomNotEdgeCellPos = function() {
for (var e = 1; e < 7; e++) for (var t = 1; t < 7; t++) {
var a = {
r: e,
c: t
}, o = this.posToKey(a);
if (this._allBlocksToShow.has(o) && !this._shownBlocks.has(o) && !this.isSnakePos(a)) return a;
}
return null;
};
t.prototype.findNextPosition = function(e) {
var t, a, o = null, r = 16;
try {
for (var n = h(f), l = n.next(); !l.done; l = n.next()) {
var i = l.value, s = e.currentPos.r + i.r, c = e.currentPos.c + i.c;
if (!(s < 0 || s >= 8 || c < 0 || c >= 8)) {
var d = s + "_" + c;
if (this._allBlocksToShow.has(d) && !this._shownBlocks.has(d)) {
var p = this._distanceCache.get(d);
if (void 0 === p) {
p = this.getDistanceToEdgeByRowCol(s, c);
this._distanceCache.set(d, p);
}
if (p < r) {
r = p;
o = {
r: s,
c: c
};
}
}
}
}
} catch (e) {
t = {
error: e
};
} finally {
try {
l && !l.done && (a = n.return) && a.call(n);
} finally {
if (t) throw t.error;
}
}
return o;
};
t.prototype.getDistanceToEdge = function(e) {
return this.getDistanceToEdgeByRowCol(e.r, e.c);
};
t.prototype.getDistanceToEdgeByRowCol = function(e, t) {
var a = e, o = 7 - e, r = t, n = 7 - t;
return Math.min(o, a, r, n);
};
t.prototype.getWaitTime = function(e) {
return e <= 10 ? .1 : e <= 20 ? .07 : .05;
};
t.prototype.prepareSplashBlocks = function() {
var e, t, a, o = null === (e = hs.boardRendererInfo) || void 0 === e ? void 0 : e.splashBlocks;
if (o) {
this.clearRevealFlashOverlays(!1);
for (var r = 0; r < 8; r++) for (var n = 0; n < 8; n++) {
var l = null === (t = o[r]) || void 0 === t ? void 0 : t[n], i = null == l ? void 0 : l.getComponent(hs.Block);
if (l && i) {
cc.Tween.stopAllByTarget(l);
var s = null === (a = this._faceBlocks[r]) || void 0 === a ? void 0 : a[n];
if (void 0 !== s && -1 !== s && 10 !== s) {
i.setState({
color: s
});
l.color = u;
l.opacity = 0;
} else {
l.color = u;
l.opacity = 0;
}
}
}
}
};
t.prototype.hideRealBoardBlocks = function(e) {
var t = (e && cc.isValid(e) ? e.getComponent(hs.Board) : null) || Cinst(hs.Board), a = null == t ? void 0 : t.blocks;
a && cc.isValid(a) && (a.opacity = 0);
};
t.prototype.showRealBoardBlocks = function() {
var e = Cinst(hs.Board), t = null == e ? void 0 : e.blocks;
t && cc.isValid(t) && (t.opacity = 255);
};
t.prototype.hideSplashBlocks = function() {
var e, t, a = null === (e = hs.boardRendererInfo) || void 0 === e ? void 0 : e.splashBlocks;
if (a) {
for (var o = 0; o < 8; o++) for (var r = 0; r < 8; r++) {
var n = null === (t = a[o]) || void 0 === t ? void 0 : t[r];
if (n) {
cc.Tween.stopAllByTarget(n);
n.color = u;
n.opacity = 0;
}
}
this.clearRevealFlashOverlays(!0);
}
};
t.prototype.finishSplashAnimation = function() {
this.showRealBoardBlocks();
this.hideSplashBlocks();
this.restoreUploadPicOverlays();
};
return l([ classId("InitBoardSnakeProStyleProTrait"), classMethodWatch() ], t);
}(Trait);
a.InitBoardSnakeProStyleProTrait = k;
cc._RF.pop();
}, {} ]
}, {}, [ "InitBoardSnakeProStyleProTrait" ]);
//# sourceMappingURL=index.js.map
