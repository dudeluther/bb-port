window.__require = function e(t, n, r) {
function i(o, s) {
if (!n[o]) {
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
var u = n[o] = {
exports: {}
};
t[o][0].call(u.exports, function(e) {
return i(t[o][1][e] || e);
}, u, u.exports, e, t, n, r);
}
return n[o].exports;
}
for (var a = "function" == typeof __require && __require, o = 0; o < r.length; o++) i(r[o]);
return i;
}({
ShowTravellClearAnimaTrait: [ function(e, t, n) {
"use strict";
cc._RF.push(t, "75e7c5Eh7NNpak9WSQKiHsT", "ShowTravellClearAnimaTrait");
var r, i = this && this.__extends || (r = function(e, t) {
return (r = Object.setPrototypeOf || {
__proto__: []
} instanceof Array && function(e, t) {
e.__proto__ = t;
} || function(e, t) {
for (var n in t) Object.prototype.hasOwnProperty.call(t, n) && (e[n] = t[n]);
})(e, t);
}, function(e, t) {
r(e, t);
function n() {
this.constructor = e;
}
e.prototype = null === t ? Object.create(t) : (n.prototype = t.prototype, new n());
}), a = this && this.__assign || function() {
return (a = Object.assign || function(e) {
for (var t, n = 1, r = arguments.length; n < r; n++) {
t = arguments[n];
for (var i in t) Object.prototype.hasOwnProperty.call(t, i) && (e[i] = t[i]);
}
return e;
}).apply(this, arguments);
}, o = this && this.__decorate || function(e, t, n, r) {
var i, a = arguments.length, o = a < 3 ? t : null === r ? r = Object.getOwnPropertyDescriptor(t, n) : r;
if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) o = Reflect.decorate(e, t, n, r); else for (var s = e.length - 1; s >= 0; s--) (i = e[s]) && (o = (a < 3 ? i(o) : a > 3 ? i(t, n, o) : i(t, n)) || o);
return a > 3 && o && Object.defineProperty(t, n, o), o;
}, s = this && this.__awaiter || function(e, t, n, r) {
return new (n || (n = Promise))(function(i, a) {
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
e.done ? i(e.value) : (t = e.value, t instanceof n ? t : new n(function(e) {
e(t);
})).then(o, s);
var t;
}
l((r = r.apply(e, t || [])).next());
});
}, l = this && this.__generator || function(e, t) {
var n, r, i, a, o = {
label: 0,
sent: function() {
if (1 & i[0]) throw i[1];
return i[1];
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
if (n) throw new TypeError("Generator is already executing.");
for (;o; ) try {
if (n = 1, r && (i = 2 & a[0] ? r.return : a[0] ? r.throw || ((i = r.return) && i.call(r), 
0) : r.next) && !(i = i.call(r, a[1])).done) return i;
(r = 0, i) && (a = [ 2 & a[0], i.value ]);
switch (a[0]) {
case 0:
case 1:
i = a;
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
if (!(i = o.trys, i = i.length > 0 && i[i.length - 1]) && (6 === a[0] || 2 === a[0])) {
o = 0;
continue;
}
if (3 === a[0] && (!i || a[1] > i[0] && a[1] < i[3])) {
o.label = a[1];
break;
}
if (6 === a[0] && o.label < i[1]) {
o.label = i[1];
i = a;
break;
}
if (i && o.label < i[2]) {
o.label = i[2];
o.ops.push(a);
break;
}
i[2] && o.ops.pop();
o.trys.pop();
continue;
}
a = t.call(e, o);
} catch (e) {
a = [ 6, e ];
r = 0;
} finally {
n = i = 0;
}
if (5 & a[0]) throw a[1];
return {
value: a[0] ? a[1] : void 0,
done: !0
};
}
}, c = this && this.__read || function(e, t) {
var n = "function" == typeof Symbol && e[Symbol.iterator];
if (!n) return e;
var r, i, a = n.call(e), o = [];
try {
for (;(void 0 === t || t-- > 0) && !(r = a.next()).done; ) o.push(r.value);
} catch (e) {
i = {
error: e
};
} finally {
try {
r && !r.done && (n = a.return) && n.call(a);
} finally {
if (i) throw i.error;
}
}
return o;
};
Object.defineProperty(n, "__esModule", {
value: !0
});
n.ShowTravellClearAnimaTrait = void 0;
var u = "ShowTravellClearAnimaTrait", h = {
clearAnim: {
bundleName: u,
dragonAssetUrl: "dragonbones/gameplay_qinping_ske",
dragonAtlasAssetUrl: "dragonbones/gameplay_qinping_tex",
frameSplitting: !1
}
}, f = function(e) {
i(t, e);
function t() {
var t = null !== e && e.apply(this, arguments) || this;
t._isAnimPlaying = !1;
t._animNode = null;
t._animationWaitResolvers = [];
t._parentNode = null;
t._cachedEncourageEvent = null;
t._unbelievablePrefab = null;
t._unbelievableEffectNode = null;
t._isAllResourceReady = !1;
return t;
}
t.prototype.onCreate = function() {
this.preloadResources();
};
t.prototype.preloadResources = function() {
return s(this, void 0, Promise, function() {
var e, t, n, r;
return l(this, function(i) {
switch (i.label) {
case 0:
i.trys.push([ 0, 2, , 3 ]);
return [ 4, Promise.all([ hs.ResLoader.asyncLoadByBundle(u, h.clearAnim.dragonAssetUrl, dragonBones.DragonBonesAsset), hs.ResLoader.asyncLoadByBundle(u, h.clearAnim.dragonAtlasAssetUrl, dragonBones.DragonBonesAtlasAsset), hs.ResLoader.asyncLoadByBundle(u, "unbelievable_prefabs/unbelievable", cc.Prefab) ]) ];

case 1:
e = c.apply(void 0, [ i.sent(), 3 ]), t = e[0], n = e[1], r = e[2];
if (t && n && r) {
this._unbelievablePrefab = r;
this._isAllResourceReady = !0;
}
return [ 3, 3 ];

case 2:
i.sent();
return [ 3, 3 ];

case 3:
return [ 2 ];
}
});
});
};
t.prototype._isCan = function() {
return hs.gameInfo.gameMode === hs.GameMode.Chapter && !!this.isAllResourceReady();
};
t.prototype.isAllResourceReady = function() {
return this._isAllResourceReady;
};
t.prototype.onActive = function(e) {
var t, n;
if (hs.tp.isChapterBoardSplashAnimation_ProxyPlayBoardSplashAnimationForTraitOnly(e)) {
if (!this._isCan()) return;
e.disable([ "FeatclearscreenbombTrait" ]);
this.playClearScreenAnimation();
e.replace = !0;
e.returnState = !0;
}
if (hs.tp.isBoardEffect_CloseGame_ProxyCloseChapter(e) || hs.tp.isBoardEffect_EnterGame_ProxyOnGameStart(e)) {
this.stopAnimation();
this._cachedEncourageEvent = null;
}
hs.tp.isChapterEncourage_ProxyOnTouchEnd(e) && this.handleEncourageOnTouchEnd(e);
if (hs.tp.isChapterEncourage_ProxyOnEncourageSoundPlay(e)) {
if (!this._isCan()) return;
var r = null === (t = null == (i = e.args[0]) ? void 0 : i.state) || void 0 === t ? void 0 : t.touchEndState;
(null == r ? void 0 : r.clearScreen) && (e.replace = !0);
}
if (hs.tp.isChapterEncourage_ProxyPlayEncourageUnbelievable(e)) {
if (!this._isCan()) return;
e.replace = !0;
}
if (hs.tp.isChapterEncourage_ProxyPlayEncourageUnbelievableAudio(e)) {
if (!this._isCan()) return;
e.replace = !0;
}
if (hs.tp.isChapterGameOver_ProxyGetGameEndDelayTime(e)) {
if (!this._isCan()) return;
var i;
if (!(null === (n = null == (i = e.args[0]) ? void 0 : i.state) || void 0 === n ? void 0 : n.clearScreen)) return;
e.disable([ "FeatclearscreenbombTrait" ]);
e.replace = !0;
e.returnState = !0;
this._isAnimPlaying ? e.returnValue = this.createAnimationWaitPromise() : e.returnValue = Promise.resolve();
}
};
t.prototype.handleEncourageOnTouchEnd = function(e) {
if (this._isCan()) {
var t = e.args[0], n = null == t ? void 0 : t.state, r = null == n ? void 0 : n.touchEndState;
if (null == r ? void 0 : r.clearScreen) {
this._cachedEncourageEvent = t;
n.promptType = hs.EncouragePromptType.PROMPT_NONE;
e.disable([ "FeatclearscreenbombTrait" ]);
e.replace = !0;
}
}
};
t.prototype.isScoreLevel = function() {
var e, t;
return (null === (t = null === (e = hs.chapterGameInfo) || void 0 === e ? void 0 : e.chapterCondition) || void 0 === t ? void 0 : t.Way) === hs.ChapterType.score;
};
t.prototype.playClearScreenAnimation = function() {
var e = this;
if (this._isAnimPlaying) ; else {
this._isAnimPlaying = !0;
this.getParentNode();
setTimeoutSafe(function() {
e.playDragonBonesAnimation();
}, 300);
}
};
t.prototype.playDragonBonesAnimation = function() {
var e = this, t = this.getParentNode();
if (t && cc.isValid(t)) {
var n = this.getBoardGridCenterPosition(t);
if (n) {
var r = {
armatureName: "armatureName",
animationName: this.isScoreLevel() ? "fengshu_qinping" : "shouji_qinping",
playTimes: 1,
completeRemove: !0,
timeScale: 1 / (cc.director._kSpeed || 1)
};
this._animNode = hs.dragonbonesAnim.play(t, r, a(a({}, h.clearAnim), {
completeBack: function() {
e.onAnimationFinished();
},
completeBackObj: this
}));
if (this._animNode && cc.isValid(this._animNode)) {
this._animNode.setPosition(n);
this.playUnbelievableEncourage();
} else this.onAnimationComplete();
} else this.onAnimationComplete();
} else this.onAnimationComplete();
};
t.prototype.getParentNode = function() {
if (!this._parentNode || !cc.isValid(this._parentNode)) {
var e = Cinst(hs.ChapterGame), t = null == e ? void 0 : e.topContainer;
if (t && cc.isValid(t)) {
this._parentNode = new cc.Node("ClearAnimParentNode");
this._parentNode.parent = t;
} else {
this._parentNode = new cc.Node("ClearAnimParentNode");
this._parentNode.parent = hs.gameUiLayer;
}
this._parentNode.zIndex = -10;
}
return this._parentNode;
};
t.prototype.getBoardGridCenterPosition = function(e) {
var t = Cinst(hs.Board);
if (!t || !cc.isValid(t.boardGrid)) return null;
var n = cc.v2(0, 0), r = t.boardGrid.convertToWorldSpaceAR(n);
return e.convertToNodeSpaceAR(r);
};
t.prototype.playUnbelievableEncourage = function() {
var e, t, n = this, r = null === (t = null === (e = this._cachedEncourageEvent) || void 0 === e ? void 0 : e.state) || void 0 === t ? void 0 : t.touchEndState, i = (null == r ? void 0 : r.continuousEliminateTimes) > 1 ? 1e3 : 30;
cc.tween(new cc.Node()).delay(i / 1e3).call(function() {
n.playUnbelievableDragonBonesEffect();
n.playUnbelievableAudio();
}).start();
};
t.prototype.playUnbelievableDragonBonesEffect = function() {
var e = this;
if (this._unbelievablePrefab) {
var t = this.getUnbelievableCenterPosition();
if (t && hs.gameEffectLayer && cc.isValid(hs.gameEffectLayer)) {
if (this._unbelievableEffectNode && cc.isValid(this._unbelievableEffectNode)) {
this._unbelievableEffectNode.destroy();
this._unbelievableEffectNode = null;
}
var n = cc.instantiate(this._unbelievablePrefab);
hs.gameEffectLayer.addChild(n);
n.setPosition(t);
n.zIndex = 100;
this._unbelievableEffectNode = n;
this.playForOtherTrait(n);
var r = n.getComponent(dragonBones.ArmatureDisplay);
if (r) {
r.removeEventListener(dragonBones.EventObject.COMPLETE);
r.playAnimation("Unbelievable", 1);
r.once(dragonBones.EventObject.COMPLETE, function() {
if (e._unbelievableEffectNode && cc.isValid(e._unbelievableEffectNode)) {
e._unbelievableEffectNode.destroy();
e._unbelievableEffectNode = null;
}
}, this);
} else cc.tween(n).delay(2).call(function() {
cc.isValid(n) && n.destroy();
e._unbelievableEffectNode = null;
}).start();
}
}
};
t.prototype.playForOtherTrait = function() {};
t.prototype.getUnbelievableCenterPosition = function() {
var e = Cinst(hs.Board);
if (!e || !cc.isValid(e.boardGrid)) return null;
var t = cc.v2(0, 0), n = e.boardGrid.convertToWorldSpaceAR(t);
if (!hs.gameEffectLayer || !cc.isValid(hs.gameEffectLayer)) return null;
var r = hs.gameEffectLayer.convertToNodeSpaceAR(n);
return cc.v2(r.x, r.y - 20);
};
t.prototype.playUnbelievableAudio = function() {
var e = hs.EncourageSoundType.SOUND5;
hs.audioInfo.play(hs.AudioConfig[e]);
};
t.prototype.onAnimationFinished = function() {
if (this._animNode && cc.isValid(this._animNode)) {
this._animNode.destroy();
this._animNode = null;
}
if (this._parentNode && cc.isValid(this._parentNode)) {
this._parentNode.destroy();
this._parentNode = null;
}
this.onAnimationComplete();
};
t.prototype.stopAnimation = function() {
if (this._isAnimPlaying) {
this._isAnimPlaying = !1;
if (this._animNode && cc.isValid(this._animNode)) {
this._animNode.destroy();
this._animNode = null;
}
if (this._parentNode && cc.isValid(this._parentNode)) {
this._parentNode.destroy();
this._parentNode = null;
}
this._animationWaitResolvers.forEach(function(e) {
return e();
});
this._animationWaitResolvers = [];
}
};
t.prototype.createAnimationWaitPromise = function() {
var e = this;
return new Promise(function(t) {
e._animationWaitResolvers.push(t);
setTimeoutSafe(function() {
if (!e._isAnimPlaying) {
var n = e._animationWaitResolvers.indexOf(t);
if (-1 !== n) {
e._animationWaitResolvers.splice(n, 1);
t();
}
}
}, 500);
});
};
t.prototype.onAnimationComplete = function() {
if (this._isAnimPlaying) {
this._isAnimPlaying = !1;
this._animationWaitResolvers.forEach(function(e) {
return e();
});
this._animationWaitResolvers = [];
}
};
return o([ classId("ShowTravellClearAnimaTrait"), classMethodWatch() ], t);
}(Trait);
n.ShowTravellClearAnimaTrait = f;
cc._RF.pop();
}, {} ],
ShowTravellClearAnima_comparisonNew_Trait: [ function(e, t, n) {
"use strict";
cc._RF.push(t, "057776top1BO4G9JMAmwTgL", "ShowTravellClearAnima_comparisonNew_Trait");
var r, i = this && this.__extends || (r = function(e, t) {
return (r = Object.setPrototypeOf || {
__proto__: []
} instanceof Array && function(e, t) {
e.__proto__ = t;
} || function(e, t) {
for (var n in t) Object.prototype.hasOwnProperty.call(t, n) && (e[n] = t[n]);
})(e, t);
}, function(e, t) {
r(e, t);
function n() {
this.constructor = e;
}
e.prototype = null === t ? Object.create(t) : (n.prototype = t.prototype, new n());
}), a = this && this.__decorate || function(e, t, n, r) {
var i, a = arguments.length, o = a < 3 ? t : null === r ? r = Object.getOwnPropertyDescriptor(t, n) : r;
if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) o = Reflect.decorate(e, t, n, r); else for (var s = e.length - 1; s >= 0; s--) (i = e[s]) && (o = (a < 3 ? i(o) : a > 3 ? i(t, n, o) : i(t, n)) || o);
return a > 3 && o && Object.defineProperty(t, n, o), o;
}, o = this && this.__awaiter || function(e, t, n, r) {
return new (n || (n = Promise))(function(i, a) {
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
e.done ? i(e.value) : (t = e.value, t instanceof n ? t : new n(function(e) {
e(t);
})).then(o, s);
var t;
}
l((r = r.apply(e, t || [])).next());
});
}, s = this && this.__generator || function(e, t) {
var n, r, i, a, o = {
label: 0,
sent: function() {
if (1 & i[0]) throw i[1];
return i[1];
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
if (n) throw new TypeError("Generator is already executing.");
for (;o; ) try {
if (n = 1, r && (i = 2 & a[0] ? r.return : a[0] ? r.throw || ((i = r.return) && i.call(r), 
0) : r.next) && !(i = i.call(r, a[1])).done) return i;
(r = 0, i) && (a = [ 2 & a[0], i.value ]);
switch (a[0]) {
case 0:
case 1:
i = a;
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
if (!(i = o.trys, i = i.length > 0 && i[i.length - 1]) && (6 === a[0] || 2 === a[0])) {
o = 0;
continue;
}
if (3 === a[0] && (!i || a[1] > i[0] && a[1] < i[3])) {
o.label = a[1];
break;
}
if (6 === a[0] && o.label < i[1]) {
o.label = i[1];
i = a;
break;
}
if (i && o.label < i[2]) {
o.label = i[2];
o.ops.push(a);
break;
}
i[2] && o.ops.pop();
o.trys.pop();
continue;
}
a = t.call(e, o);
} catch (e) {
a = [ 6, e ];
r = 0;
} finally {
n = i = 0;
}
if (5 & a[0]) throw a[1];
return {
value: a[0] ? a[1] : void 0,
done: !0
};
}
}, l = this && this.__read || function(e, t) {
var n = "function" == typeof Symbol && e[Symbol.iterator];
if (!n) return e;
var r, i, a = n.call(e), o = [];
try {
for (;(void 0 === t || t-- > 0) && !(r = a.next()).done; ) o.push(r.value);
} catch (e) {
i = {
error: e
};
} finally {
try {
r && !r.done && (n = a.return) && n.call(a);
} finally {
if (i) throw i.error;
}
}
return o;
};
Object.defineProperty(n, "__esModule", {
value: !0
});
n.ShowTravellClearAnima_comparisonNew_Trait = void 0;
var c = e("./ShowTravellClearAnimaTrait"), u = "ShowTravellClearAnimaTrait", h = function(e) {
i(t, e);
function t() {
return null !== e && e.apply(this, arguments) || this;
}
t.prototype.preloadResources = function() {
return o(this, void 0, Promise, function() {
var e, t, n;
return s(this, function(r) {
switch (r.label) {
case 0:
r.trys.push([ 0, 2, , 3 ]);
return [ 4, Promise.all([ hs.ResLoader.asyncLoadByBundle(u, "spines/gameplay_qinping", sp.SkeletonData), hs.ResLoader.asyncLoadByBundle(u, "unbelievable_prefabs/unbelievable_comparisonNew", cc.Prefab) ]) ];

case 1:
e = l.apply(void 0, [ r.sent(), 2 ]), t = e[0], n = e[1];
if (t && n) {
this._unbelievablePrefab = n;
this._isAllResourceReady = !0;
}
return [ 3, 3 ];

case 2:
r.sent();
return [ 3, 3 ];

case 3:
return [ 2 ];
}
});
});
};
t.prototype.playDragonBonesAnimation = function() {
var e = this, t = this.getParentNode();
if (t && cc.isValid(t)) {
var n = this.getBoardGridCenterPosition(t);
if (n) {
var r = this.isScoreLevel() ? "fengshu_qinping" : "shouji_qinping", i = cc.director._kSpeed || 1, a = {
bundleName: u,
skeletonDataUrl: "spines/gameplay_qinping",
animationName: r,
premultipliedAlpha: !1,
completeRemove: !1,
loop: !1,
timeScale: 1 / i
};
this._animNode = hs.spineAnim.play(t, a, {
completeBack: function() {
e.onAnimationFinished();
}.bind(this)
});
if (this._animNode && cc.isValid(this._animNode)) {
this._animNode.setPosition(n);
this.playUnbelievableEncourage();
} else this.onAnimationComplete();
} else this.onAnimationComplete();
} else this.onAnimationComplete();
};
t.prototype.playUnbelievableDragonBonesEffect = function() {
var e = this;
if (this._unbelievablePrefab) {
var t = this.getUnbelievableCenterPosition();
if (t && hs.gameEffectLayer && cc.isValid(hs.gameEffectLayer)) {
if (this._unbelievableEffectNode && cc.isValid(this._unbelievableEffectNode)) {
this._unbelievableEffectNode.destroy();
this._unbelievableEffectNode = null;
}
var n = cc.instantiate(this._unbelievablePrefab);
hs.gameEffectLayer.addChild(n);
n.setPosition(t);
n.zIndex = 100;
this._unbelievableEffectNode = n;
this.playForOtherTrait(n);
var r = n.getComponent(sp.Skeleton);
if (r) {
r.setCompleteListener(function() {
if (e._unbelievableEffectNode && cc.isValid(e._unbelievableEffectNode)) {
e._unbelievableEffectNode.destroy();
e._unbelievableEffectNode = null;
}
}.bind(this));
r.setAnimation(0, "Unbelievable", !1);
} else cc.tween(n).delay(2).call(function() {
cc.isValid(n) && n.destroy();
e._unbelievableEffectNode = null;
}).start();
}
}
};
return a([ classId("ShowTravellClearAnimaTrait", "comparisonNew") ], t);
}(c.ShowTravellClearAnimaTrait);
n.ShowTravellClearAnima_comparisonNew_Trait = h;
cc._RF.pop();
}, {
"./ShowTravellClearAnimaTrait": "ShowTravellClearAnimaTrait"
} ],
ShowTravellClearAnima_isOptimization_Trait: [ function(e, t, n) {
"use strict";
cc._RF.push(t, "e3ee4qbz4RHkYjPaF56ehp7", "ShowTravellClearAnima_isOptimization_Trait");
var r, i = this && this.__extends || (r = function(e, t) {
return (r = Object.setPrototypeOf || {
__proto__: []
} instanceof Array && function(e, t) {
e.__proto__ = t;
} || function(e, t) {
for (var n in t) Object.prototype.hasOwnProperty.call(t, n) && (e[n] = t[n]);
})(e, t);
}, function(e, t) {
r(e, t);
function n() {
this.constructor = e;
}
e.prototype = null === t ? Object.create(t) : (n.prototype = t.prototype, new n());
}), a = this && this.__assign || function() {
return (a = Object.assign || function(e) {
for (var t, n = 1, r = arguments.length; n < r; n++) {
t = arguments[n];
for (var i in t) Object.prototype.hasOwnProperty.call(t, i) && (e[i] = t[i]);
}
return e;
}).apply(this, arguments);
}, o = this && this.__decorate || function(e, t, n, r) {
var i, a = arguments.length, o = a < 3 ? t : null === r ? r = Object.getOwnPropertyDescriptor(t, n) : r;
if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) o = Reflect.decorate(e, t, n, r); else for (var s = e.length - 1; s >= 0; s--) (i = e[s]) && (o = (a < 3 ? i(o) : a > 3 ? i(t, n, o) : i(t, n)) || o);
return a > 3 && o && Object.defineProperty(t, n, o), o;
}, s = this && this.__awaiter || function(e, t, n, r) {
return new (n || (n = Promise))(function(i, a) {
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
e.done ? i(e.value) : (t = e.value, t instanceof n ? t : new n(function(e) {
e(t);
})).then(o, s);
var t;
}
l((r = r.apply(e, t || [])).next());
});
}, l = this && this.__generator || function(e, t) {
var n, r, i, a, o = {
label: 0,
sent: function() {
if (1 & i[0]) throw i[1];
return i[1];
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
if (n) throw new TypeError("Generator is already executing.");
for (;o; ) try {
if (n = 1, r && (i = 2 & a[0] ? r.return : a[0] ? r.throw || ((i = r.return) && i.call(r), 
0) : r.next) && !(i = i.call(r, a[1])).done) return i;
(r = 0, i) && (a = [ 2 & a[0], i.value ]);
switch (a[0]) {
case 0:
case 1:
i = a;
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
if (!(i = o.trys, i = i.length > 0 && i[i.length - 1]) && (6 === a[0] || 2 === a[0])) {
o = 0;
continue;
}
if (3 === a[0] && (!i || a[1] > i[0] && a[1] < i[3])) {
o.label = a[1];
break;
}
if (6 === a[0] && o.label < i[1]) {
o.label = i[1];
i = a;
break;
}
if (i && o.label < i[2]) {
o.label = i[2];
o.ops.push(a);
break;
}
i[2] && o.ops.pop();
o.trys.pop();
continue;
}
a = t.call(e, o);
} catch (e) {
a = [ 6, e ];
r = 0;
} finally {
n = i = 0;
}
if (5 & a[0]) throw a[1];
return {
value: a[0] ? a[1] : void 0,
done: !0
};
}
}, c = this && this.__read || function(e, t) {
var n = "function" == typeof Symbol && e[Symbol.iterator];
if (!n) return e;
var r, i, a = n.call(e), o = [];
try {
for (;(void 0 === t || t-- > 0) && !(r = a.next()).done; ) o.push(r.value);
} catch (e) {
i = {
error: e
};
} finally {
try {
r && !r.done && (n = a.return) && n.call(a);
} finally {
if (i) throw i.error;
}
}
return o;
};
Object.defineProperty(n, "__esModule", {
value: !0
});
n.ShowTravellClearAnima_isOptimization_Trait = void 0;
var u = e("./ShowTravellClearAnimaTrait"), h = "ShowTravellClearAnimaTrait", f = {
clearAnim: {
bundleName: h,
dragonAssetUrl: "dragonbones/gameplay_qinping_ske",
dragonAtlasAssetUrl: "dragonbones/gameplay_qinping_tex",
frameSplitting: !1
},
clearAnim_new: {
bundleName: h,
dragonAssetUrl: "dragonbones_new/gameplay_qinping_ske",
dragonAtlasAssetUrl: "dragonbones_new/gameplay_qinping_tex",
frameSplitting: !1
}
}, p = "unbelievable_prefabs/unbelievable", d = function(e) {
i(t, e);
function t() {
var t = null !== e && e.apply(this, arguments) || this;
t._dragonAssetUrl = f.clearAnim.dragonAssetUrl;
t._dragonAtlasAssetUrl = f.clearAnim.dragonAtlasAssetUrl;
t._prefabUrl = p;
return t;
}
t.prototype.getIsOptimization = function() {
var e, t;
return null !== (t = null === (e = this.props) || void 0 === e ? void 0 : e.isOptimization) && void 0 !== t && t;
};
t.prototype.preloadResources = function() {
return s(this, void 0, Promise, function() {
var e, t, n, r;
return l(this, function(i) {
switch (i.label) {
case 0:
i.trys.push([ 0, 3, , 4 ]);
return [ 4, this.getResUrl() ];

case 1:
i.sent();
return [ 4, Promise.all([ hs.ResLoader.asyncLoadByBundle(h, this._dragonAssetUrl, dragonBones.DragonBonesAsset), hs.ResLoader.asyncLoadByBundle(h, this._dragonAtlasAssetUrl, dragonBones.DragonBonesAtlasAsset), hs.ResLoader.asyncLoadByBundle(h, this._prefabUrl, cc.Prefab) ]) ];

case 2:
e = c.apply(void 0, [ i.sent(), 3 ]), t = e[0], n = e[1], r = e[2];
if (t && n && r) {
this._unbelievablePrefab = r;
this._isAllResourceReady = !0;
}
return [ 3, 4 ];

case 3:
i.sent();
return [ 3, 4 ];

case 4:
return [ 2 ];
}
});
});
};
t.prototype.getResUrl = function() {
return s(this, void 0, void 0, function() {
return l(this, function(e) {
switch (e.label) {
case 0:
if (!this.getIsOptimization()) {
this._dragonAssetUrl = f.clearAnim.dragonAssetUrl;
this._dragonAtlasAssetUrl = f.clearAnim.dragonAtlasAssetUrl;
this._prefabUrl = p;
return [ 2 ];
}
return [ 4, this.judgmentPrefab() ];

case 1:
e.sent();
return [ 4, this.judgmentDragonBones() ];

case 2:
e.sent();
return [ 2 ];
}
});
});
};
t.prototype.judgmentPrefab = function() {
return s(this, void 0, void 0, function() {
return l(this, function(e) {
switch (e.label) {
case 0:
return [ 4, hs.ResLoader.asyncIsBundleAssetDownloaded(this.traitName, p, {
type: cc.Prefab
}) ];

case 1:
if (!e.sent()) {
this._prefabUrl = "unbelievable_prefabs/unbelievable_new";
return [ 2 ];
}
return [ 4, hs.ResLoader.asyncIsBundleAssetDownloaded(this.traitName, "unbelievable_prefabs/unbelievable_new", {
type: cc.Prefab
}) ];

case 2:
e.sent() && (this._prefabUrl = "unbelievable_prefabs/unbelievable_new");
return [ 2 ];
}
});
});
};
t.prototype.judgmentDragonBones = function() {
return s(this, void 0, void 0, function() {
var e, t, n;
return l(this, function(r) {
switch (r.label) {
case 0:
return [ 4, hs.ResLoader.asyncIsBundleAssetDownloaded(this.traitName, f.clearAnim.dragonAssetUrl, {
type: dragonBones.DragonBonesAsset
}) ];

case 1:
e = r.sent();
return [ 4, hs.ResLoader.asyncIsBundleAssetDownloaded(this.traitName, f.clearAnim.dragonAtlasAssetUrl, {
type: dragonBones.DragonBonesAtlasAsset
}) ];

case 2:
t = r.sent();
if (!e && !t) {
this._dragonAssetUrl = f.clearAnim_new.dragonAssetUrl;
this._dragonAtlasAssetUrl = f.clearAnim_new.dragonAtlasAssetUrl;
return [ 2 ];
}
return [ 4, hs.ResLoader.asyncIsBundleAssetDownloaded(this.traitName, f.clearAnim_new.dragonAssetUrl, {
type: dragonBones.DragonBonesAsset
}) ];

case 3:
n = r.sent();
return [ 4, hs.ResLoader.asyncIsBundleAssetDownloaded(this.traitName, f.clearAnim_new.dragonAtlasAssetUrl, {
type: dragonBones.DragonBonesAtlasAsset
}) ];

case 4:
if (r.sent() && n) {
this._dragonAssetUrl = f.clearAnim_new.dragonAssetUrl;
this._dragonAtlasAssetUrl = f.clearAnim_new.dragonAtlasAssetUrl;
}
return [ 2 ];
}
});
});
};
t.prototype.playDragonBonesAnimation = function() {
var e = this, t = this.getParentNode();
if (t && cc.isValid(t)) {
var n = this.getBoardGridCenterPosition(t);
if (n) {
var r = {
armatureName: "armatureName",
animationName: this.isScoreLevel() ? "fengshu_qinping" : "shouji_qinping",
playTimes: 1,
completeRemove: !0,
timeScale: 1 / (cc.director._kSpeed || 1)
};
this._animNode = hs.dragonbonesAnim.play(t, r, a(a({}, this.getDragonBonesConfig()), {
completeBack: function() {
e.onAnimationFinished();
},
completeBackObj: this
}));
if (this._animNode && cc.isValid(this._animNode)) {
this._animNode.setPosition(n);
this.playUnbelievableEncourage();
} else this.onAnimationComplete();
} else this.onAnimationComplete();
} else this.onAnimationComplete();
};
t.prototype.getDragonBonesConfig = function() {
return this._dragonAssetUrl == f.clearAnim_new.dragonAssetUrl && this._dragonAtlasAssetUrl == f.clearAnim_new.dragonAtlasAssetUrl && this.getIsOptimization() ? f.clearAnim_new : f.clearAnim;
};
return o([ classId("ShowTravellClearAnimaTrait", "isOptimization") ], t);
}(u.ShowTravellClearAnimaTrait);
n.ShowTravellClearAnima_isOptimization_Trait = d;
cc._RF.pop();
}, {
"./ShowTravellClearAnimaTrait": "ShowTravellClearAnimaTrait"
} ]
}, {}, [ "ShowTravellClearAnimaTrait", "ShowTravellClearAnima_comparisonNew_Trait", "ShowTravellClearAnima_isOptimization_Trait" ]);
//# sourceMappingURL=index.js.map
