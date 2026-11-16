window.__require = function e(t, r, i) {
function n(o, a) {
if (!r[o]) {
if (!t[o]) {
var l = o.split("/");
l = l[l.length - 1];
if (!t[l]) {
var u = "function" == typeof __require && __require;
if (!a && u) return u(l, !0);
if (s) return s(l, !0);
throw new Error("Cannot find module '" + o + "'");
}
o = l;
}
var d = r[o] = {
exports: {}
};
t[o][0].call(d.exports, function(e) {
return n(t[o][1][e] || e);
}, d, d.exports, e, t, r, i);
}
return r[o].exports;
}
for (var s = "function" == typeof __require && __require, o = 0; o < i.length; o++) n(i[o]);
return n;
}({
NewGuideBoardArrangeTrait: [ function(e, t, r) {
"use strict";
cc._RF.push(t, "3b40388JQRJBIznrZJHyIve", "NewGuideBoardArrangeTrait");
var i, n = this && this.__extends || (i = function(e, t) {
return (i = Object.setPrototypeOf || {
__proto__: []
} instanceof Array && function(e, t) {
e.__proto__ = t;
} || function(e, t) {
for (var r in t) Object.prototype.hasOwnProperty.call(t, r) && (e[r] = t[r]);
})(e, t);
}, function(e, t) {
i(e, t);
function r() {
this.constructor = e;
}
e.prototype = null === t ? Object.create(t) : (r.prototype = t.prototype, new r());
}), s = this && this.__decorate || function(e, t, r, i) {
var n, s = arguments.length, o = s < 3 ? t : null === i ? i = Object.getOwnPropertyDescriptor(t, r) : i;
if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) o = Reflect.decorate(e, t, r, i); else for (var a = e.length - 1; a >= 0; a--) (n = e[a]) && (o = (s < 3 ? n(o) : s > 3 ? n(t, r, o) : n(t, r)) || o);
return s > 3 && o && Object.defineProperty(t, r, o), o;
}, o = this && this.__awaiter || function(e, t, r, i) {
return new (r || (r = Promise))(function(n, s) {
function o(e) {
try {
l(i.next(e));
} catch (e) {
s(e);
}
}
function a(e) {
try {
l(i.throw(e));
} catch (e) {
s(e);
}
}
function l(e) {
e.done ? n(e.value) : (t = e.value, t instanceof r ? t : new r(function(e) {
e(t);
})).then(o, a);
var t;
}
l((i = i.apply(e, t || [])).next());
});
}, a = this && this.__generator || function(e, t) {
var r, i, n, s, o = {
label: 0,
sent: function() {
if (1 & n[0]) throw n[1];
return n[1];
},
trys: [],
ops: []
};
return s = {
next: a(0),
throw: a(1),
return: a(2)
}, "function" == typeof Symbol && (s[Symbol.iterator] = function() {
return this;
}), s;
function a(e) {
return function(t) {
return l([ e, t ]);
};
}
function l(s) {
if (r) throw new TypeError("Generator is already executing.");
for (;o; ) try {
if (r = 1, i && (n = 2 & s[0] ? i.return : s[0] ? i.throw || ((n = i.return) && n.call(i), 
0) : i.next) && !(n = n.call(i, s[1])).done) return n;
(i = 0, n) && (s = [ 2 & s[0], n.value ]);
switch (s[0]) {
case 0:
case 1:
n = s;
break;

case 4:
o.label++;
return {
value: s[1],
done: !1
};

case 5:
o.label++;
i = s[1];
s = [ 0 ];
continue;

case 7:
s = o.ops.pop();
o.trys.pop();
continue;

default:
if (!(n = o.trys, n = n.length > 0 && n[n.length - 1]) && (6 === s[0] || 2 === s[0])) {
o = 0;
continue;
}
if (3 === s[0] && (!n || s[1] > n[0] && s[1] < n[3])) {
o.label = s[1];
break;
}
if (6 === s[0] && o.label < n[1]) {
o.label = n[1];
n = s;
break;
}
if (n && o.label < n[2]) {
o.label = n[2];
o.ops.push(s);
break;
}
n[2] && o.ops.pop();
o.trys.pop();
continue;
}
s = t.call(e, o);
} catch (e) {
s = [ 6, e ];
i = 0;
} finally {
r = n = 0;
}
if (5 & s[0]) throw s[1];
return {
value: s[0] ? s[1] : void 0,
done: !0
};
}
}, l = this && this.__values || function(e) {
var t = "function" == typeof Symbol && Symbol.iterator, r = t && e[t], i = 0;
if (r) return r.call(e);
if (e && "number" == typeof e.length) return {
next: function() {
e && i >= e.length && (e = void 0);
return {
value: e && e[i++],
done: !e
};
}
};
throw new TypeError(t ? "Object is not iterable." : "Symbol.iterator is not defined.");
}, u = this && this.__read || function(e, t) {
var r = "function" == typeof Symbol && e[Symbol.iterator];
if (!r) return e;
var i, n, s = r.call(e), o = [];
try {
for (;(void 0 === t || t-- > 0) && !(i = s.next()).done; ) o.push(i.value);
} catch (e) {
n = {
error: e
};
} finally {
try {
i && !i.done && (r = s.return) && r.call(s);
} finally {
if (n) throw n.error;
}
}
return o;
}, d = this && this.__spread || function() {
for (var e = [], t = 0; t < arguments.length; t++) e = e.concat(u(arguments[t]));
return e;
};
Object.defineProperty(r, "__esModule", {
value: !0
});
r.NewGuideBoardArrangeTrait = void 0;
var c = [ -1, 13, -1 ], h = [ 1, 7, 1 ], f = [ {
x: 53,
y: -653.75
}, {
x: -265,
y: -138.75
} ], p = [ 11, 22, 13 ], k = [ 2, 2, 2 ], y = [ {
x: 53,
y: -653.75
}, {
x: 371,
y: 179.25
} ], S = [ -1, 13, -1 ], g = [ 1, 3, 1 ], v = [ 9, 42, 29 ], m = [ 3, 3, 3 ], b = [ {
x: 53,
y: -653.75
}, {
x: -318,
y: 73.25
} ], I = [ -1, 16, -1 ], B = [ 1, 2, 1 ], G = [ {
x: 53,
y: -653.75
}, {
x: 0,
y: -138.75
} ], P = [ 1, 1, 1, -1, -1, -1, -1, -1, 1, 1, 1, -1, -1, -1, -1, -1, 1, 1, 1, -1, -1, -1, -1, -1, 1, 1, 1, -1, -1, -1, -1, -1, 1, 1, 1, -1, -1, -1, -1, -1, -1, -1, -1, 2, 2, 2, 2, 2, -1, -1, -1, 2, 2, 2, 2, 2, -1, -1, -1, 2, 2, 2, 2, 2 ], _ = [ 1, 1, 1, 1, 1, 1, 1, -1, 1, 1, 1, 1, 1, 1, 1, -1, 1, 1, 1, 1, 1, 1, 1, -1, 1, 1, 1, 1, 1, 1, 1, -1, 1, 1, 1, 1, 1, 1, 1, -1, 1, 1, 1, 1, 1, 1, 1, -1, 1, 1, 1, 1, 1, 1, 1, -1, -1, -1, -1, -1, -1, -1, -1, -1 ], C = [ 5, 4, 2, -1, -1, -1, -1, -1, 5, 4, 2, -1, -1, -1, -1, -1, 5, 4, 2, -1, -1, -1, -1, -1, 5, 4, 2, -1, -1, -1, -1, -1, 5, 4, 2, -1, -1, -1, -1, -1, -1, -1, -1, 6, 6, 6, 6, 6, -1, -1, -1, 7, 7, 7, 7, 7, -1, -1, -1, 1, 1, 1, 1, 1 ], w = [ -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, 5, 4, 2, 6, 7, 1, -1, -1, 5, 4, 2, 6, 7, 1, -1, -1, -1, 4, 2, 6, 7, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1 ], x = [ -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, 5, 4, 2, -1, 6, 7, 1, 3, 5, 4, 2, -1, -1, 7, 1, 3, 5, 4, 2, 6, -1, 7, 1, 3 ], R = function(e) {
n(t, e);
function t() {
var t = null !== e && e.apply(this, arguments) || this;
t._skinResPreloadStarted = !1;
t._hasPlayerInteracted = !1;
t._guideEnded = !1;
t._skinBoardCleaned = !1;
return t;
}
t.prototype.isLaunch_ProxyOnTraitConfigInitComplete = function() {
this.handleGuideConfigInit();
};
t.prototype.isClassGuide_ProxyInitTraits = function() {
this.handleGuideConfigInit();
};
t.prototype.isClassGuide_ProxyRenderGuideState = function(e) {
this.handleRenderGuideState(e);
};
t.prototype.isClassBlocksProducer_ProxyBeforeBlocksProducerUpdate = function(e) {
this.handleBeforeBlocksProducerUpdate(e);
};
t.prototype.isClassBlocksProducer_ProxyAfterBlocksProducerUpdate = function(e) {
this.handleAfterBlocksProducerUpdate(e);
};
t.prototype.isClassBlocksProducer_ProxyGuideRequestBlocksProducer = function(e) {
this.handleGuideRequestBlocksProducer(e);
};
t.prototype.isBoardOnBoardRenderOver = function(e) {
this.handleBoardRenderOver(e);
};
t.prototype.isBoardSplashAnimationDoAnimation = function(e) {
this.handleBoardSplashAnimation(e);
};
t.prototype.isSkinInfoSkipFinishGuide = function(e) {
this.handleSkipFinishGuide(e);
};
t.prototype.isSkinTraitInfoGetTraitSkinId = function(e) {
this.handleGetTraitSkinId(e);
};
t.prototype.isSkin_ProxyOnSkinUpdate = function(e) {
this.handleSkinUpdate(e);
};
t.prototype.isSkinTraitInfoChangeSkinComplete = function(e) {
this.handleChangeSkinComplete(e);
};
t.prototype.isClassSkin_ProxyUpdateSkinGameBg = function(e) {
this.handleClassSkinUpdateSkinGameBg(e);
};
t.prototype.isSkinGameBgComponentSetGameBg = function(e) {
this.handleSkinGameBgComponentSetGameBg(e);
};
t.prototype.isClassGuide_ProxyGuideEndDot = function(e) {
this.handleGuideEndDot(e);
};
t.prototype.isClassGuide_ProxyOnAnyTouchEnd = function(e) {
this.handleAnyTouchEnd(e);
};
t.prototype.isClassGuide_ProxyOnTouchEnd = function(e) {
this.handleBlockPlaced(e);
};
t.prototype.isClassGuideLoadBlockSpriteFrame = function(e) {
this.handleClassGuideLoadBlockSpriteFrame(e);
};
t.prototype.isNewPlayerGuideSkipTraitDoShowUI = function(e) {
this.handleDoShowUI(e);
};
t.prototype.isColorPreferenceSurveyTrait_tryShowSurvey = function(e) {
var t;
if (!(null === (t = hs.classGuideInfo) || void 0 === t ? void 0 : t.isFinishedGuide)) {
e.replace = !0;
e.returnState = !0;
storage.setItem("ColorPreferenceSurveyTrait_pendingAfterGuide", !0);
}
};
t.prototype.isClassGuide_ProxyOnGuideChange = function() {
var e;
if (hs.classGuideInfo.isFinishedGuide && storage.getItem("ColorPreferenceSurveyTrait_pendingAfterGuide", !1)) {
var t = TRAIT("ColorPreferenceSurveyTrait");
if (t && t.active) {
null === (e = t.retryShowSurvey) || void 0 === e || e.call(t);
storage.setItem("ColorPreferenceSurveyTrait_pendingAfterGuide", !1);
}
}
};
t.prototype.handleGuideConfigInit = function() {
if (!storage.getItem("isFinishedGuide", !1)) {
var e = storage.getItem("classGuideStep", 0), t = storage.getItem("classGuideTotalStep", 3);
if (e >= t) hs.UI.hideUI({
name: "NewPlayerGuideSkip",
url: "prefabs/LayerNewPlayerGuideSkipCom",
bundleName: "NewPlayerGuideSkipTrait"
}); else {
var r = "guideStepInteracted_" + e;
if (storage.getItem(r, !1)) storage.setItem("classGuideStep", t); else if (hs.classGuideInfo) {
this.applyGuideConfig();
this.tryUseSkinPhaseOne();
}
}
}
};
t.prototype.handleRenderGuideState = function(e) {
var t, r;
if (!hs.classGuideInfo.isFinishedGuide) {
this.applyGuideConfig();
this.tryUseSkinPhaseOne();
if (this._hasPlayerInteracted) {
var i = Cinst(hs.ClassGuide);
i && i.setState({
step: this.guideStep,
showHand: !1,
showDarkMask: !1
});
e.replace = !0;
e.returnState = !0;
} else {
var n = Cinst(hs.ClassGuide);
if (n) {
var s = 200;
2 !== this.traitType && 4 !== this.traitType || (s = 400);
var o = e.args[0], a = null === (t = null == o ? void 0 : o.showDarkMask) || void 0 === t || t, l = null === (r = null == o ? void 0 : o.showHand) || void 0 === r || r;
n.setState({
step: this.guideStep,
showDarkMask: a,
showHand: l,
color: this.guideColor,
speed: s
});
this.fixGuideLayerOrder(n);
e.replace = !0;
e.returnState = !0;
}
}
}
};
t.prototype.handleGuideRequestBlocksProducer = function(e) {
hs.boardInfo.isNullBoard() || e.disable([ "FirstEightGamesFixedBoardTrait" ]);
};
t.prototype.fixGuideLayerOrder = function(e) {
var t = e.node;
if (cc.isValid(t)) {
var r = t.parent;
if (cc.isValid(r)) {
var i = Cinst(hs.ClassGame);
if (i && cc.isValid(i.blocksProducerContainer)) {
var n = i.blocksProducerContainer.getSiblingIndex();
r.getSiblingIndex() < n && r.setSiblingIndex(n);
}
}
e.moveContainer && cc.isValid(e.moveContainer) && e.moveContainer.setSiblingIndex(t.childrenCount - 1);
e.blocks && cc.isValid(e.blocks) && e.blocks.setSiblingIndex(0);
}
};
t.prototype.handleSkipFinishGuide = function(e) {
if (this.shouldRefreshSkin) {
e.returnValue = !0;
e.replace = !0;
}
};
t.prototype.handleGetTraitSkinId = function(e) {
if (this.shouldRefreshSkin) {
e.returnValue = Number(this.targetSkinId);
e.replace = !0;
e.returnState = !0;
}
};
t.prototype.handleSkinUpdate = function(e) {
if (this.shouldUseSkinPhaseOne) {
var t = e.args[0];
if (t && t.skinId !== this.targetSkinId) {
t.skinId = this.targetSkinId;
this.revertSkinSequenceIndex();
}
} else if (1 === this.traitType && this._guideEnded && !this._skinBoardCleaned) {
this._skinBoardCleaned = !0;
this.cleanupSkinBoard();
}
};
t.prototype.revertSkinSequenceIndex = function() {
var e = storage.getItem("CleanSceneUseSequenceSkin_index", 0);
if (e > 0) {
storage.setItem("CleanSceneUseSequenceSkin_index", e - 1);
var t = Cinst("CleanSceneUseSequenceSkinTrait");
t && void 0 !== t.skinIndex && (t.skinIndex = e - 1);
}
};
t.prototype.handleChangeSkinComplete = function() {
return o(this, void 0, Promise, function() {
return a(this, function(e) {
switch (e.label) {
case 0:
return [ 4, this.refreshSkinGameBgWithRetry() ];

case 1:
e.sent();
return [ 4, this.refreshSkinBoardAndBlocksWithRetry() ];

case 2:
e.sent();
return [ 2 ];
}
});
});
};
t.prototype.handleAfterBlocksProducerUpdate = function() {
return o(this, void 0, Promise, function() {
return a(this, function(e) {
switch (e.label) {
case 0:
return [ 4, this.refreshSkinBlocksWithRetry() ];

case 1:
e.sent();
return [ 2 ];
}
});
});
};
t.prototype.handleBoardRenderOver = function() {
return o(this, void 0, Promise, function() {
return a(this, function(e) {
switch (e.label) {
case 0:
return [ 4, this.refreshSkinBoardAndBlocksWithRetry() ];

case 1:
e.sent();
return [ 2 ];
}
});
});
};
t.prototype.handleClassSkinUpdateSkinGameBg = function(e) {
return o(this, void 0, Promise, function() {
var t;
return a(this, function(r) {
switch (r.label) {
case 0:
if (!this.shouldUseSkinPhaseOne) return [ 2 ];
t = e.args[0];
return [ 4, this.refreshSkinGameBg(t) ];

case 1:
if (r.sent()) {
e.replace = !0;
e.returnState = !0;
}
return [ 2 ];
}
});
});
};
t.prototype.handleSkinGameBgComponentSetGameBg = function(e) {
if (this.shouldUseSkinPhaseOne) {
this.fitGameBgNode(e.args[0]);
this.fitGameBgNode(e.args[1]);
}
};
t.prototype.handleClassGuideLoadBlockSpriteFrame = function(e) {
return o(this, void 0, Promise, function() {
var t, r, i;
return a(this, function(n) {
switch (n.label) {
case 0:
if (!this.shouldUseSkinPhaseOne) return [ 2 ];
t = e.args[0];
r = e.args[1];
if (!t || !cc.isValid(t.node) || r <= 0 || r > 100) return [ 2 ];
e.replace = !0;
return [ 4, this.resolveGuideBlockSpriteFrame(this.targetSkinId, r) ];

case 1:
if ((i = n.sent()) && cc.isValid(t.node)) {
t.spriteFrame = i;
return [ 2 ];
}
e.originalCaller();
return [ 2 ];
}
});
});
};
t.prototype.handleDoShowUI = function(e) {
this._hasPlayerInteracted && (e.replace = !0);
};
t.prototype.tryUseSkinPhaseOne = function() {
return o(this, void 0, Promise, function() {
return a(this, function(e) {
switch (e.label) {
case 0:
return this.shouldUseSkinPhaseOne && this.targetSkinId && hs.skinInfo.currentSkinId !== this.targetSkinId ? [ 4, hs.nextFrame() ] : [ 2 ];

case 1:
e.sent();
if (!this.shouldUseSkinPhaseOne) return [ 2 ];
this.preloadSkinRes();
return [ 4, this.setSkinInfo(this.targetSkinId) ];

case 2:
if (!e.sent()) return [ 2 ];
this.preloadRealSkin();
return hs.skinLoadInfo.skinResLoadedBarrier.isOpen ? [ 3, 4 ] : [ 4, hs.skinLoadInfo.skinResLoadedBarrier.wait() ];

case 3:
e.sent();
e.label = 4;

case 4:
hs.skinTraitInfo.changeSkin(this.targetSkinId);
return [ 4, this.refreshSkinBoardAndBlocksWithRetry() ];

case 5:
e.sent();
return [ 4, this.refreshSkinBlocksWithRetry() ];

case 6:
e.sent();
return [ 2 ];
}
});
});
};
t.prototype.preloadRealSkin = function() {
return o(this, void 0, Promise, function() {
var e, t;
return a(this, function(r) {
switch (r.label) {
case 0:
e = -1;
hs.skinUseSequenceInfo.skinPool.length > 0 ? e = hs.skinUseSequenceInfo.getSkinNextId() : hs.skinRandomInfo.randomSkinPool.length > 0 && (t = hs.skinRandomInfo.getRandomSkin()) && t[0] && (e = t[0].ID);
return e > 0 ? [ 4, this.setSkinInfo("" + e) ] : [ 3, 2 ];

case 1:
r.sent();
r.label = 2;

case 2:
return [ 2 ];
}
});
});
};
t.prototype.preloadSkinRes = function() {
if (!this._skinResPreloadStarted && !hs.skinLoadInfo.skinResLoadedBarrier.isOpen) {
this._skinResPreloadStarted = !0;
hs.skinLoadInfo.loadSkinRes();
}
};
t.prototype.refreshSkinBoardAndBlocksWithRetry = function() {
return o(this, void 0, Promise, function() {
var e, t, r;
return a(this, function(i) {
switch (i.label) {
case 0:
if (!this.shouldRefreshSkin) return [ 2 ];
e = 0;
i.label = 1;

case 1:
return e < 6 ? [ 4, hs.nextFrame() ] : [ 3, 6 ];

case 2:
i.sent();
return this.shouldRefreshSkin ? [ 4, this.refreshSkinBoard() ] : [ 2 ];

case 3:
t = i.sent();
return [ 4, this.refreshSkinBlocks() ];

case 4:
r = i.sent();
if (t && r) return [ 2 ];
i.label = 5;

case 5:
e++;
return [ 3, 1 ];

case 6:
return [ 2 ];
}
});
});
};
t.prototype.refreshSkinBlocksWithRetry = function() {
return o(this, void 0, Promise, function() {
var e;
return a(this, function(t) {
switch (t.label) {
case 0:
if (!this.shouldRefreshSkin) return [ 2 ];
e = 0;
t.label = 1;

case 1:
return e < 6 ? [ 4, hs.nextFrame() ] : [ 3, 5 ];

case 2:
t.sent();
return this.shouldRefreshSkin ? [ 4, this.refreshSkinBlocks() ] : [ 2 ];

case 3:
if (t.sent()) return [ 2 ];
t.label = 4;

case 4:
e++;
return [ 3, 1 ];

case 5:
return [ 2 ];
}
});
});
};
t.prototype.refreshSkinBoard = function() {
var e;
return o(this, void 0, Promise, function() {
var t, r, i, n, s, o, l, u, d;
return a(this, function(a) {
switch (a.label) {
case 0:
return this.shouldRefreshSkin && (t = Cinst(hs.Board)) && cc.isValid(t.boardGrid) ? [ 4, this.setSkinInfo(this.targetSkinId) ] : [ 2, !1 ];

case 1:
return a.sent() && cc.isValid(t) && cc.isValid(t.boardGrid) ? hs.skinLoadInfo.skinResLoadedBarrier.isOpen ? [ 3, 3 ] : [ 4, hs.skinLoadInfo.skinResLoadedBarrier.wait() ] : [ 2, !1 ];

case 2:
a.sent();
if (!cc.isValid(t) || !cc.isValid(t.boardGrid)) return [ 2, !1 ];
a.label = 3;

case 3:
if (!(r = (null === (e = hs.skinInfo.getSkinInfoBySkinId(this.targetSkinId)) || void 0 === e || e.board_bg, 
hs.skinInfo.boardSkinInfo))) return [ 2, !1 ];
if (hs.skinLoadInfo.skinResList.board.asset) return [ 3, 5 ];
i = hs.skinLoadInfo.skinResList.board;
return [ 4, hs.ResLoader.asyncLoad("prefabs/skin/board/SkinBoardPrefab", cc.Prefab) ];

case 4:
i.asset = a.sent();
a.label = 5;

case 5:
if (!(n = hs.skinLoadInfo.skinResList.board.asset)) return [ 2, !1 ];
s = t.boardGrid;
if (!(o = s.getChildByName("SkinBoardGuide"))) {
(o = cc.instantiate(n)).name = "SkinBoardGuide";
s.addChild(o);
o.x = 0;
o.y = 0;
o.zIndex = -100;
}
o.active = !0;
(l = s.getComponent(cc.Sprite)) && (l.enabled = !1);
(u = o.getComponent(hs.SkinBoardComponent)) && ((d = hs.skinAtlas.getBoardInfoSpriteFrame(this.targetSkinId, r.board_bg.color.colorParam)) ? u.setState({
colorData: null,
spriteFrame: d
}, !0) : u.setState({
colorData: r,
spriteFrame: null
}, !0));
hs.skinAtlas.createBoardAtlas(o);
return [ 2, !0 ];
}
});
});
};
t.prototype.refreshSkinBlocks = function() {
return o(this, void 0, Promise, function() {
var e, t, r, i, n, s, o, u, d, c, h, f, p, k, y, S, g;
return a(this, function(a) {
switch (a.label) {
case 0:
return this.shouldRefreshSkin ? [ 4, this.setSkinInfo(this.targetSkinId) ] : [ 2, !1 ];

case 1:
return a.sent() ? hs.skinLoadInfo.skinResLoadedBarrier.isOpen ? [ 3, 3 ] : [ 4, hs.skinLoadInfo.skinResLoadedBarrier.wait() ] : [ 2, !1 ];

case 2:
a.sent();
a.label = 3;

case 3:
hs.skinInfo.upDataBlockColorValueMap();
hs.skinAtlas.createBlockAtlas();
e = !1;
if ((t = Cinst(hs.BlocksProducer)) && cc.isValid(t.blocksContainer)) try {
for (r = l(t.blocksContainer.children), i = r.next(); !i.done; i = r.next()) {
n = i.value;
if (cc.isValid(n)) try {
for (s = (k = void 0, l(n.children)), o = s.next(); !o.done; o = s.next()) {
h = o.value;
e = this.refreshBlockNode(h) || e;
}
} catch (e) {
k = {
error: e
};
} finally {
try {
o && !o.done && (y = s.return) && y.call(s);
} finally {
if (k) throw k.error;
}
}
}
} catch (e) {
f = {
error: e
};
} finally {
try {
i && !i.done && (p = r.return) && p.call(r);
} finally {
if (f) throw f.error;
}
}
if ((u = Cinst(hs.Board)) && cc.isValid(u.blocks)) try {
for (d = l(u.blocks.children), c = d.next(); !c.done; c = d.next()) {
h = c.value;
e = this.refreshBlockNode(h) || e;
}
} catch (e) {
S = {
error: e
};
} finally {
try {
c && !c.done && (g = d.return) && g.call(d);
} finally {
if (S) throw S.error;
}
}
return [ 2, e ];
}
});
});
};
t.prototype.refreshBlockNode = function(e) {
if (!cc.isValid(e) || 255 !== e.opacity) return !1;
var t = e.getComponent(hs.Block);
if (!t || !t.state) return !1;
t.setState({
color: t.state.color,
sourceColor: t.state.sourceColor
});
return !0;
};
t.prototype.refreshSkinGameBgWithRetry = function() {
return o(this, void 0, Promise, function() {
var e;
return a(this, function(t) {
switch (t.label) {
case 0:
if (!this.shouldRefreshSkin) return [ 2 ];
e = 0;
t.label = 1;

case 1:
return e < 6 ? [ 4, hs.nextFrame() ] : [ 3, 5 ];

case 2:
t.sent();
return this.shouldRefreshSkin ? [ 4, this.refreshSkinGameBg() ] : [ 2 ];

case 3:
if (t.sent()) return [ 2 ];
t.label = 4;

case 4:
e++;
return [ 3, 1 ];

case 5:
return [ 2 ];
}
});
});
};
t.prototype.refreshSkinGameBg = function(e) {
var t, r;
return o(this, void 0, Promise, function() {
var i, n, s, o, l, u, d, c;
return a(this, function(a) {
switch (a.label) {
case 0:
if (!this.shouldRefreshSkin) return [ 2, !1 ];
i = e || (null === (t = Cinst(hs.ClassGame)) || void 0 === t ? void 0 : t.bgContainer);
return cc.isValid(i) ? [ 4, this.setSkinInfo(this.targetSkinId) ] : [ 2, !1 ];

case 1:
if (!a.sent()) return [ 2, !1 ];
if (!cc.isValid(i)) return [ 2, !1 ];
if (!(n = (null === (r = hs.skinInfo.getSkinInfoBySkinId(this.targetSkinId)) || void 0 === r ? void 0 : r.game_bg) || hs.skinInfo.gameBgSkinInfo)) return [ 2, !1 ];
if (hs.skinLoadInfo.skinResList.gameBg.asset) return [ 3, 3 ];
s = hs.skinLoadInfo.skinResList.gameBg;
return [ 4, hs.ResLoader.asyncLoad("prefabs/skin/GameBg/SkinGameBgPrefab", cc.Prefab) ];

case 2:
s.asset = a.sent();
a.label = 3;

case 3:
if (!(o = hs.skinLoadInfo.skinResList.gameBg.asset)) return [ 2, !1 ];
if (!(l = i.getChildByName("SkinGameBg"))) {
(l = cc.instantiate(o)).name = "SkinGameBg";
i.addChild(l);
}
this.fitGameBgNode(l);
(u = i.getComponent(cc.Sprite)) && (u.enabled = !1);
(d = l.getComponent(hs.SkinGameBgComponent)) && ((c = hs.skinAtlas.getBgSpriteFrame(this.targetSkinId, n.color.colorParam)) ? d.setState({
colorData: null,
spriteFrame: c
}, !0) : d.setState({
colorData: n,
spriteFrame: null
}, !0));
hs.skinAtlas.createBgAtlas(l);
return [ 2, !0 ];
}
});
});
};
t.prototype.fitGameBgNode = function(e) {
if (cc.isValid(e)) {
e.active = !0;
e.opacity = 255;
e.x = 0;
e.y = 0;
e.width = cc.winSize.width;
e.height = cc.winSize.height;
}
};
t.prototype.setSkinInfo = function(e) {
return o(this, void 0, Promise, function() {
var t;
return a(this, function(r) {
switch (r.label) {
case 0:
return !e || hs.skinInfo.hasSkin(e) ? [ 2, !0 ] : [ 4, hs.ResLoader.asyncLoad("configs/skin/default/skin_" + e, cc.JsonAsset) ];

case 1:
t = r.sent();
if (!cc.isValid(t) || !t.json) return [ 2, !1 ];
hs.skinInfo.setSkinMap(e, t.json);
return [ 2, !0 ];
}
});
});
};
t.prototype.resolveGuideBlockSpriteFrame = function(e, t) {
return o(this, void 0, Promise, function() {
var r, i;
return a(this, function(n) {
switch (n.label) {
case 0:
return [ 4, this.setSkinInfo(e) ];

case 1:
return n.sent() && (r = this.getSkinCenterColorParam(e, t)) ? hs.skinLoadInfo.skinResLoadedBarrier.isOpen ? [ 3, 3 ] : [ 4, hs.skinLoadInfo.skinResLoadedBarrier.wait() ] : [ 2, null ];

case 2:
n.sent();
n.label = 3;

case 3:
hs.skinInfo.currentSkinId !== e && hs.skinInfo.setCurrentSkinIdTemporary(e);
return (i = hs.skinAtlas.getBlockSpriteFrame(r, t)) ? [ 3, 5 ] : [ 4, hs.skinAtlas.createBlockAtlas() ];

case 4:
n.sent();
i = hs.skinAtlas.getBlockSpriteFrame(r, t);
n.label = 5;

case 5:
return [ 2, null != i ? i : null ];
}
});
});
};
t.prototype.getSkinCenterColorParam = function(e, t) {
var r, i, n, s = hs.skinInfo.getSkinInfoBySkinId(e);
if (!s) return "";
var o = s["block" + t];
return null !== (n = null === (i = null === (r = null == o ? void 0 : o.colorList) || void 0 === r ? void 0 : r[4]) || void 0 === i ? void 0 : i.colorParam) && void 0 !== n ? n : "";
};
t.prototype.handleBlockPlaced = function() {
if (!this._hasPlayerInteracted && !hs.classGuideInfo.isFinishedGuide && hs.classGuideInfo.step === this.guideStep) {
this._hasPlayerInteracted = !0;
storage.setItem("classGuideStep", hs.classGuideInfo.totalStep);
storage.setItem("guideStepInteracted_" + this.guideStep, !0);
}
};
t.prototype.handleGuideEndDot = function(e) {
var t;
if (!hs.classGuideInfo.isFinishedGuide && !this._guideEnded) if (this._hasPlayerInteracted) {
e.replace = !0;
DS(null === (t = hs.classGuideInfo.steps[this.guideStep]) || void 0 === t ? void 0 : t.dotEnd);
this.endGuide();
} else e.replace = !0;
};
t.prototype.handleAnyTouchEnd = function(e) {
hs.classGuideInfo.isFinishedGuide || this._guideEnded || hs.classGuideInfo.step === this.guideStep && this._hasPlayerInteracted && (e.replace = !0);
};
t.prototype.endGuide = function() {
storage.setItem("classGuideStep", hs.classGuideInfo.totalStep);
this._guideEnded = !0;
1 === this.traitType && this.skipSameSkinInSequence();
var e = Cinst(hs.ClassGuide);
e && e.setState({
showHand: !1,
showDarkMask: !1
});
var t = Cinst(hs.ClassTopInfo);
t && t.updateSetBtnState && t.updateSetBtnState();
hs.UI.hideUI({
name: "NewPlayerGuideSkip",
url: "prefabs/LayerNewPlayerGuideSkipCom",
bundleName: "NewPlayerGuideSkipTrait"
});
};
t.prototype.skipSameSkinInSequence = function() {
var e = hs.skinInfo.currentSkinId, t = hs.skinUseSequenceInfo.skinPool;
if (t && 0 !== t.length) {
var r = storage.getItem("CleanSceneUseSequenceSkin_index", 0);
(r < 0 || r >= t.length) && (r = 0);
if ("" + t[r].ID === e) {
(r += 1) >= t.length && (r = 0);
storage.setItem("CleanSceneUseSequenceSkin_index", r);
var i = Cinst("CleanSceneUseSequenceSkinTrait");
i && void 0 !== i.skinIndex && (i.skinIndex = r);
}
}
};
t.prototype.cleanupSkinBoard = function() {
var e = Cinst(hs.Board);
if (e && cc.isValid(e.boardGrid)) {
var t = e.boardGrid.getChildByName("SkinBoardGuide");
cc.isValid(t) && t.destroy();
var r = e.boardGrid.getComponent(cc.Sprite);
r && (r.enabled = !0);
}
};
t.prototype.handleBeforeBlocksProducerUpdate = function(e) {
if (hs.classGuideInfo.step === this.guideStep) {
var t = e.args[0], r = e.args[1], i = this.blockList, n = this.colorList;
storage.setItem("classProducerBlocks", i);
storage.setItem("classColorLists", n);
Array.isArray(t) && t.splice.apply(t, d([ 0, t.length ], i));
Array.isArray(r) && r.splice.apply(r, d([ 0, r.length ], n));
e.returnState = !0;
}
};
t.prototype.handleBoardSplashAnimation = function() {};
t.prototype.applyGuideConfig = function() {
var e = hs.classGuideInfo.steps, t = Math.max(0, Math.min(this.guideStep, e.length - 1)), r = e[t];
if (r) {
var i = this.board, n = this.blockList, s = this.colorList;
storage.getItem("classGuideStep", 0) <= t && storage.setItem("classGuideStep", t);
storage.setItem("classFaceBlocks", i);
storage.setItem("classProducerBlocks", n);
storage.setItem("classColorLists", s);
Object.assign(r, {
save_arr: i,
producerBlocks: n,
blocksColors: s,
color: this.guideColor,
move: this.move
});
}
};
Object.defineProperty(t.prototype, "board", {
get: function() {
var e;
if (this.isValidBoard(null === (e = this.props) || void 0 === e ? void 0 : e.board)) return this.props.board.map(function(e) {
return e.slice();
});
for (var t = this.boardData, r = [], i = 0; i < 8; i++) r.push(t.slice(8 * i, 8 * (i + 1)));
return r;
},
enumerable: !1,
configurable: !0
});
Object.defineProperty(t.prototype, "boardData", {
get: function() {
var e, t = null === (e = this.props) || void 0 === e ? void 0 : e.boardData;
return Array.isArray(t) && 64 === t.length ? t : 2 === this.traitType ? _ : 3 === this.traitType ? C : 4 === this.traitType ? w : 5 === this.traitType ? x : P;
},
enumerable: !1,
configurable: !0
});
Object.defineProperty(t.prototype, "blockList", {
get: function() {
var e, t = null === (e = this.props) || void 0 === e ? void 0 : e.blockList;
return Array.isArray(t) && t.length > 0 ? t.slice() : 2 === this.traitType ? p.slice() : 3 === this.traitType ? S.slice() : 4 === this.traitType ? v.slice() : 5 === this.traitType ? I.slice() : c.slice();
},
enumerable: !1,
configurable: !0
});
Object.defineProperty(t.prototype, "colorList", {
get: function() {
var e, t = null === (e = this.props) || void 0 === e ? void 0 : e.colorList;
return Array.isArray(t) && t.length > 0 ? t.slice() : 2 === this.traitType ? k.slice() : 3 === this.traitType ? g.slice() : 4 === this.traitType ? m.slice() : 5 === this.traitType ? B.slice() : h.slice();
},
enumerable: !1,
configurable: !0
});
Object.defineProperty(t.prototype, "guideColor", {
get: function() {
var e;
if ("number" == typeof (null === (e = this.props) || void 0 === e ? void 0 : e.guideColor)) return this.props.guideColor;
var t = this.colorList[1];
return "number" == typeof t ? t : h[1];
},
enumerable: !1,
configurable: !0
});
Object.defineProperty(t.prototype, "guideStep", {
get: function() {
var e;
return "number" == typeof (null === (e = this.props) || void 0 === e ? void 0 : e.guideStep) ? this.props.guideStep : 2;
},
enumerable: !1,
configurable: !0
});
Object.defineProperty(t.prototype, "traitType", {
get: function() {
var e;
return "number" == typeof (null === (e = this.props) || void 0 === e ? void 0 : e.traitTyp) ? this.props.traitTyp : 0;
},
enumerable: !1,
configurable: !0
});
Object.defineProperty(t.prototype, "shouldUseSkinPhaseOne", {
get: function() {
return 1 === this.traitType && !storage.getItem("isFinishedGuide", !1) && !this._guideEnded;
},
enumerable: !1,
configurable: !0
});
Object.defineProperty(t.prototype, "shouldRefreshSkin", {
get: function() {
return 1 === this.traitType && !this._skinBoardCleaned;
},
enumerable: !1,
configurable: !0
});
Object.defineProperty(t.prototype, "targetSkinId", {
get: function() {
var e, t;
return "" + (null !== (t = null === (e = this.props) || void 0 === e ? void 0 : e.targetSkinId) && void 0 !== t ? t : "1001");
},
enumerable: !1,
configurable: !0
});
Object.defineProperty(t.prototype, "move", {
get: function() {
var e, t = null === (e = this.props) || void 0 === e ? void 0 : e.move;
return Array.isArray(t) && t.length >= 2 ? t.map(function(e) {
return {
x: e.x,
y: e.y
};
}) : 2 === this.traitType ? y.map(function(e) {
return {
x: e.x,
y: e.y
};
}) : 4 === this.traitType ? b.map(function(e) {
return {
x: e.x,
y: e.y
};
}) : 5 === this.traitType ? G.map(function(e) {
return {
x: e.x,
y: e.y
};
}) : f.map(function(e) {
return {
x: e.x,
y: e.y
};
});
},
enumerable: !1,
configurable: !0
});
t.prototype.isValidBoard = function(e) {
return Array.isArray(e) && 8 === e.length && e.every(function(e) {
return Array.isArray(e) && 8 === e.length;
});
};
return s([ classId("NewGuideBoardArrangeTrait") ], t);
}(Trait);
r.NewGuideBoardArrangeTrait = R;
cc._RF.pop();
}, {} ],
NewGuideBoardArrange_gpz1_Trait: [ function(e, t, r) {
"use strict";
cc._RF.push(t, "4a163FQKRBGfakmKuk/d8MU", "NewGuideBoardArrange_gpz1_Trait");
var i, n = this && this.__extends || (i = function(e, t) {
return (i = Object.setPrototypeOf || {
__proto__: []
} instanceof Array && function(e, t) {
e.__proto__ = t;
} || function(e, t) {
for (var r in t) Object.prototype.hasOwnProperty.call(t, r) && (e[r] = t[r]);
})(e, t);
}, function(e, t) {
i(e, t);
function r() {
this.constructor = e;
}
e.prototype = null === t ? Object.create(t) : (r.prototype = t.prototype, new r());
}), s = this && this.__decorate || function(e, t, r, i) {
var n, s = arguments.length, o = s < 3 ? t : null === i ? i = Object.getOwnPropertyDescriptor(t, r) : i;
if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) o = Reflect.decorate(e, t, r, i); else for (var a = e.length - 1; a >= 0; a--) (n = e[a]) && (o = (s < 3 ? n(o) : s > 3 ? n(t, r, o) : n(t, r)) || o);
return s > 3 && o && Object.defineProperty(t, r, o), o;
};
Object.defineProperty(r, "__esModule", {
value: !0
});
r.NewGuideBoardArrange_gpz1_Trait = void 0;
var o = function(e) {
n(t, e);
function t() {
var t = null !== e && e.apply(this, arguments) || this;
t._usePreInstallGuide = !1;
return t;
}
t.prototype.onCreate = function() {
e.prototype.onCreate.call(this);
this._usePreInstallGuide = hs.attributionInfo.isPreInstall;
};
Object.defineProperty(t.prototype, "onActiveCondition", {
get: function() {
return this._usePreInstallGuide;
},
enumerable: !1,
configurable: !0
});
return s([ classId("NewGuideBoardArrangeTrait", "gpz1") ], t);
}(e("./NewGuideBoardArrangeTrait").NewGuideBoardArrangeTrait);
r.NewGuideBoardArrange_gpz1_Trait = o;
cc._RF.pop();
}, {
"./NewGuideBoardArrangeTrait": "NewGuideBoardArrangeTrait"
} ]
}, {}, [ "NewGuideBoardArrangeTrait", "NewGuideBoardArrange_gpz1_Trait" ]);
//# sourceMappingURL=index.js.map
