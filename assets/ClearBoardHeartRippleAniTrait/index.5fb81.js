window.__require = function e(t, i, n) {
function r(a, l) {
if (!i[a]) {
if (!t[a]) {
var s = a.split("/");
s = s[s.length - 1];
if (!t[s]) {
var c = "function" == typeof __require && __require;
if (!l && c) return c(s, !0);
if (o) return o(s, !0);
throw new Error("Cannot find module '" + a + "'");
}
a = s;
}
var f = i[a] = {
exports: {}
};
t[a][0].call(f.exports, function(e) {
return r(t[a][1][e] || e);
}, f, f.exports, e, t, i, n);
}
return i[a].exports;
}
for (var o = "function" == typeof __require && __require, a = 0; a < n.length; a++) r(n[a]);
return r;
}({
ClearBoardHeartRippleAniTrait: [ function(e, t, i) {
"use strict";
cc._RF.push(t, "21faeJvT0hGCaW5ZwYkYURR", "ClearBoardHeartRippleAniTrait");
var n, r = this && this.__extends || (n = function(e, t) {
return (n = Object.setPrototypeOf || {
__proto__: []
} instanceof Array && function(e, t) {
e.__proto__ = t;
} || function(e, t) {
for (var i in t) Object.prototype.hasOwnProperty.call(t, i) && (e[i] = t[i]);
})(e, t);
}, function(e, t) {
n(e, t);
function i() {
this.constructor = e;
}
e.prototype = null === t ? Object.create(t) : (i.prototype = t.prototype, new i());
}), o = this && this.__decorate || function(e, t, i, n) {
var r, o = arguments.length, a = o < 3 ? t : null === n ? n = Object.getOwnPropertyDescriptor(t, i) : n;
if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) a = Reflect.decorate(e, t, i, n); else for (var l = e.length - 1; l >= 0; l--) (r = e[l]) && (a = (o < 3 ? r(a) : o > 3 ? r(t, i, a) : r(t, i)) || a);
return o > 3 && a && Object.defineProperty(t, i, a), a;
}, a = this && this.__awaiter || function(e, t, i, n) {
return new (i || (i = Promise))(function(r, o) {
function a(e) {
try {
s(n.next(e));
} catch (e) {
o(e);
}
}
function l(e) {
try {
s(n.throw(e));
} catch (e) {
o(e);
}
}
function s(e) {
e.done ? r(e.value) : (t = e.value, t instanceof i ? t : new i(function(e) {
e(t);
})).then(a, l);
var t;
}
s((n = n.apply(e, t || [])).next());
});
}, l = this && this.__generator || function(e, t) {
var i, n, r, o, a = {
label: 0,
sent: function() {
if (1 & r[0]) throw r[1];
return r[1];
},
trys: [],
ops: []
};
return o = {
next: l(0),
throw: l(1),
return: l(2)
}, "function" == typeof Symbol && (o[Symbol.iterator] = function() {
return this;
}), o;
function l(e) {
return function(t) {
return s([ e, t ]);
};
}
function s(o) {
if (i) throw new TypeError("Generator is already executing.");
for (;a; ) try {
if (i = 1, n && (r = 2 & o[0] ? n.return : o[0] ? n.throw || ((r = n.return) && r.call(n), 
0) : n.next) && !(r = r.call(n, o[1])).done) return r;
(n = 0, r) && (o = [ 2 & o[0], r.value ]);
switch (o[0]) {
case 0:
case 1:
r = o;
break;

case 4:
a.label++;
return {
value: o[1],
done: !1
};

case 5:
a.label++;
n = o[1];
o = [ 0 ];
continue;

case 7:
o = a.ops.pop();
a.trys.pop();
continue;

default:
if (!(r = a.trys, r = r.length > 0 && r[r.length - 1]) && (6 === o[0] || 2 === o[0])) {
a = 0;
continue;
}
if (3 === o[0] && (!r || o[1] > r[0] && o[1] < r[3])) {
a.label = o[1];
break;
}
if (6 === o[0] && a.label < r[1]) {
a.label = r[1];
r = o;
break;
}
if (r && a.label < r[2]) {
a.label = r[2];
a.ops.push(o);
break;
}
r[2] && a.ops.pop();
a.trys.pop();
continue;
}
o = t.call(e, a);
} catch (e) {
o = [ 6, e ];
n = 0;
} finally {
i = r = 0;
}
if (5 & o[0]) throw o[1];
return {
value: o[0] ? o[1] : void 0,
done: !0
};
}
};
Object.defineProperty(i, "__esModule", {
value: !0
});
i.ClearBoardHeartRippleAniTrait = void 0;
var s = "ClearBoardHeartRippleAniTrait", c = "prefabs/ClearBoardHeartRipple", f = "prefabs/newArt/ClearBoardHeartRipple", p = [ "1001", "1005", "1019", "1020", "1021", "1025", "1033", "1034", "1035", "1036", "1037", "1039" ], u = {
1001: "f76086",
1005: "a8e655",
1019: "fbb66c",
1020: "f7bc4a",
1021: "6bb5ff",
1025: "43d4be",
1033: "a8e655",
1034: "fc7dfd",
1035: "96e7e4",
1036: "fc7dfd",
1037: "ffdb4f",
1039: "f7bc4a"
}, h = function(e) {
r(t, e);
function t() {
var t = null !== e && e.apply(this, arguments) || this;
t._effectPrefabTop = null;
t._effectPrefabBottom = null;
t._topSkeleton = null;
t._bottomSkeleton = null;
t._isAnimPlaying = !1;
t.completeCb = null;
t._animationWaitResolvers = [];
t._completedCount = 0;
t._lastUsedSkinId = null;
t._heartRippleReady = !1;
t._pendingSplashCompleteCallback = null;
t.isNewArt = !1;
t.isOldArt = !1;
t.isUsed = !1;
t.currentPrefabPath = c;
return t;
}
t.prototype.onCreate = function() {
this.isReuseEffectNode() && this.initUseNewArt();
};
t.prototype.isReuseEffectNode = function() {
return !0;
};
t.prototype.onActive = function(e) {
var t, i = this;
if (hs.tp.isBoardEffect_CloseGame_ProxyCloseClass(e) || hs.tp.isBoardEffect_EnterGame_ProxyOnGameStart(e)) {
this.stopAnim();
this._lastUsedSkinId = null;
}
if (hs.tp.isClassBoardSplashAnimation_ProxyOnBeginClearScreenAnim(e)) {
this._heartRippleReady = !1;
var n = this.getNextSkinId(), r = !!n && p.includes(n);
this._lastUsedSkinId = n;
if (r && n) {
e.disable([ "ReplaceClearnScreenAniTrait" ]);
this._heartRippleReady = this.showSplashAnimation(e, n);
}
}
if (hs.tp.isClassBoardSplashAnimation_ProxySetBoardSplashAnimationState(e) && this._lastUsedSkinId && p.includes(this._lastUsedSkinId) && this._heartRippleReady) {
e.replace = !0;
e.returnState = !0;
this._pendingSplashCompleteCallback = null === (t = e.args) || void 0 === t ? void 0 : t[3];
setTimeoutSafe(function() {
if (i._pendingSplashCompleteCallback) {
var e = i._pendingSplashCompleteCallback;
i._pendingSplashCompleteCallback = null;
null == e || e();
}
}, 2e3);
}
if (hs.tp.isClassEncourage_ProxyPlayEncourageUnbelievable(e)) {
if (!this.isNeedToHide()) return;
e.replace = !0;
}
if (hs.tp.isClassScoreTip_ProxyPlayClearScreenScoreAnim(e)) {
if (!this.isNeedToHide()) return;
e.replace = !0;
}
if (hs.tp.isboardSplashAnimationClearScreenEffectWithPutAddRowEffect(e)) {
if (!this.isNeedToHide()) return;
var o = e.target;
cc.tween(o.node).delay(.2).call(function() {
o.removeBlockHeart(null, !0);
}).start();
}
};
t.prototype.getNextSkinId = function() {
var e = TRAIT("CleanSceneUseSequenceSkinTrait");
if (!e || !e.skinPool || 0 === e.skinPool.length) return null;
var t = e.skinPool, i = hs.storage.getItem("CleanSceneUseSequenceSkin_index", 0);
(i < 0 || i >= t.length) && (i = 0);
return String(t[i].ID);
};
t.prototype.isNeedToHide = function() {
return !!this._lastUsedSkinId && p.includes(this._lastUsedSkinId);
};
t.prototype.resolveAllWaiters = function() {
this._animationWaitResolvers.forEach(function(e) {
return e();
});
this._animationWaitResolvers = [];
};
t.prototype.showSplashAnimation = function(e, t) {
var i = this, n = function() {
var e = i._pendingSplashCompleteCallback;
i._pendingSplashCompleteCallback = null;
null == e || e();
}, r = Cinst(hs.Board);
if (!r || !cc.isValid(r.node) || !cc.isValid(r.node.parent)) {
n();
return !1;
}
var o, a = r.node.parent, l = hs.storage.getItem("clearScreenEffectContext", null);
if (null == l ? void 0 : l.startPos) {
var s = cc.v2(l.startPos.x, l.startPos.y);
o = a.convertToNodeSpaceAR(s);
} else o = r.node.getPosition();
this.showAnim(a, o, t, n).catch(function() {
return n();
});
return !0;
};
t.prototype.getOrCreateEffectNode = function(e, t, i) {
var n = this.isReuseEffectNode() ? i ? this._effectPrefabTop : this._effectPrefabBottom : null;
if (n && cc.isValid(n)) {
if (n.parent !== t) {
n.removeFromParent(!1);
t.addChild(n);
}
n.active = !0;
return n;
}
var r = cc.instantiate(e);
t.addChild(r);
if (i) {
this._effectPrefabTop = r;
this._topSkeleton = r.getComponentInChildren(sp.Skeleton);
this._topSkeleton && this.bindSkeletonCompleteListener(this._topSkeleton, r, !0);
} else {
this._effectPrefabBottom = r;
this._bottomSkeleton = r.getComponentInChildren(sp.Skeleton);
this._bottomSkeleton && this.bindSkeletonCompleteListener(this._bottomSkeleton, r, !1);
}
return r;
};
t.prototype.bindSkeletonCompleteListener = function(e, t, i) {
var n = this;
e.setCompleteListener(function() {
n.recycleEffectNode(t, i);
n.onSingleAnimComplete(n.completeCb);
cc.isValid(t) && (t.active = !1);
});
};
t.prototype.recycleEffectNode = function(e, t) {
if (cc.isValid(e)) if (this.isReuseEffectNode()) e.active = !1; else {
e.destroy();
if (t) {
this._effectPrefabTop = null;
this._topSkeleton = null;
} else {
this._effectPrefabBottom = null;
this._bottomSkeleton = null;
}
}
};
t.prototype.getAnimationSpeed = function() {
return cc.director._kSpeed || 1;
};
t.prototype.showAnim = function(e, t, i, n) {
return a(this, void 0, void 0, function() {
var r, o, a, c = this;
return l(this, function(l) {
switch (l.label) {
case 0:
r = function() {
c.onAnimationComplete();
null == n || n();
};
return [ 4, hs.nextFrame() ];

case 1:
l.sent();
if (this._isAnimPlaying) {
r();
return [ 2 ];
}
if (!e || !cc.isValid(e)) {
r();
return [ 2 ];
}
this.completeCb = n;
this._completedCount = 0;
o = u[i] || "f76086";
a = new cc.Color().fromHEX(o);
this.updateNewArtPath();
return [ 4, hs.ResLoader.asyncLoadByBundle(s, this.currentPrefabPath, cc.Prefab).then(function(i) {
if (e && cc.isValid(e)) {
c._isAnimPlaying = !0;
var o = c.getAnimationSpeed();
if (c.isReuseEffectNode()) {
var l = c.getOrCreateEffectNode(i, e, !1);
l.setPosition(t);
var s = c._bottomSkeleton;
if (s) {
s.timeScale = 1 / o;
s.node.color = a;
s.setAnimation(0, "in2", !1);
} else {
c.recycleEffectNode(l, !1);
c.onSingleAnimComplete(n);
}
var f = c.getOrCreateEffectNode(i, e, !0);
f.setPosition(t);
var p = c._topSkeleton;
if (p) {
p.timeScale = 1 / o;
p.setAnimation(0, "in", !1);
} else {
c.recycleEffectNode(f, !0);
c.onSingleAnimComplete(n);
}
} else {
var u = cc.instantiate(i);
e.addChild(u);
u.setPosition(t);
c._effectPrefabBottom = u;
var h = u.getComponentInChildren(sp.Skeleton);
if (h) {
h.timeScale = 1 / o;
h.node.color = a;
h.setAnimation(0, "in2", !1);
h.setCompleteListener(function() {
c.onSingleAnimComplete(n);
cc.isValid(u) && u.destroy();
c._effectPrefabBottom = null;
});
} else c.onSingleAnimComplete(n);
var d = cc.instantiate(i);
e.addChild(d);
d.setPosition(t);
c._effectPrefabTop = d;
var _ = d.getComponentInChildren(sp.Skeleton);
if (_) {
_.timeScale = 1 / o;
_.setAnimation(0, "in", !1);
_.setCompleteListener(function() {
c.onSingleAnimComplete(n);
cc.isValid(d) && d.destroy();
c._effectPrefabTop = null;
});
} else c.onSingleAnimComplete(n);
}
} else r();
}).catch(function() {
return r();
}) ];

case 2:
l.sent();
return [ 2 ];
}
});
});
};
t.prototype.onSingleAnimComplete = function(e) {
this._completedCount++;
if (this._completedCount >= 2) {
this.onAnimationComplete();
null == e || e();
this.completeCb = null;
}
};
t.prototype.stopAnim = function() {
var e, t;
if (this._isAnimPlaying) if (this.isReuseEffectNode()) {
this._effectPrefabTop && cc.isValid(this._effectPrefabTop) && this.recycleEffectNode(this._effectPrefabTop, !0);
this._effectPrefabBottom && cc.isValid(this._effectPrefabBottom) && this.recycleEffectNode(this._effectPrefabBottom, !1);
this.onAnimationComplete();
null === (t = this.completeCb) || void 0 === t || t.call(this);
this.completeCb = null;
var i = this._pendingSplashCompleteCallback;
this._pendingSplashCompleteCallback = null;
null == i || i();
} else {
this._effectPrefabTop && cc.isValid(this._effectPrefabTop) && this._effectPrefabTop.destroy();
this._effectPrefabBottom && cc.isValid(this._effectPrefabBottom) && this._effectPrefabBottom.destroy();
this.onAnimationComplete();
null === (e = this.completeCb) || void 0 === e || e.call(this);
this._effectPrefabTop = null;
this._effectPrefabBottom = null;
this.completeCb = null;
var n = this._pendingSplashCompleteCallback;
this._pendingSplashCompleteCallback = null;
null == n || n();
}
};
t.prototype.onAnimationComplete = function() {
if (this._isAnimPlaying) {
this._isAnimPlaying = !1;
this.resolveAllWaiters();
}
};
t.prototype.updateNewArtPath = function() {
if (this.getIsUseNewArt()) if (this.isNewArt) this.currentPrefabPath = f; else if (this.isOldArt) {
if (!this.isUsed) {
var e = this.checkEffectPrefab(f);
this.currentPrefabPath = e ? f : c;
this.isUsed = !0;
}
} else {
this.currentPrefabPath = f;
this.isUsed = !0;
} else {
this.currentPrefabPath = c;
this.isUsed = !0;
}
};
t.prototype.checkEffectPrefab = function(e) {
if (!e) return !1;
var t = cc.assetManager.getBundle(this.traitName);
return !!t && hs.ResLoader.isBundleAssetDownloaded(t, e, {
type: cc.Prefab,
target: "import",
bundleOption: {
isRemote: !0
}
});
};
t.prototype.initUseNewArt = function() {
if (this.getIsUseNewArt()) {
if (this.checkEffectPrefab(f)) {
this.isNewArt = !0;
this.currentPrefabPath = f;
} else this.checkEffectPrefab(c) && (this.isOldArt = !0);
this.isNewArt || hs.ResLoader.loadByBundle(s, f, cc.Prefab);
this.isOldArt || (this.currentPrefabPath = f);
} else hs.ResLoader.loadByBundle(s, c, cc.Prefab);
};
t.prototype.getIsUseNewArt = function() {
var e;
return null === (e = this.props) || void 0 === e ? void 0 : e.useNewArt;
};
return o([ classId("ClearBoardHeartRippleAniTrait"), classMethodWatch() ], t);
}(Trait);
i.ClearBoardHeartRippleAniTrait = h;
cc._RF.pop();
}, {} ],
ClearBoardHeartRippleAni_comparisonNew_Trait: [ function(e, t, i) {
"use strict";
cc._RF.push(t, "c8e4aGyfzVNkJwWKluODU9x", "ClearBoardHeartRippleAni_comparisonNew_Trait");
var n, r = this && this.__extends || (n = function(e, t) {
return (n = Object.setPrototypeOf || {
__proto__: []
} instanceof Array && function(e, t) {
e.__proto__ = t;
} || function(e, t) {
for (var i in t) Object.prototype.hasOwnProperty.call(t, i) && (e[i] = t[i]);
})(e, t);
}, function(e, t) {
n(e, t);
function i() {
this.constructor = e;
}
e.prototype = null === t ? Object.create(t) : (i.prototype = t.prototype, new i());
}), o = this && this.__decorate || function(e, t, i, n) {
var r, o = arguments.length, a = o < 3 ? t : null === n ? n = Object.getOwnPropertyDescriptor(t, i) : n;
if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) a = Reflect.decorate(e, t, i, n); else for (var l = e.length - 1; l >= 0; l--) (r = e[l]) && (a = (o < 3 ? r(a) : o > 3 ? r(t, i, a) : r(t, i)) || a);
return o > 3 && a && Object.defineProperty(t, i, a), a;
};
Object.defineProperty(i, "__esModule", {
value: !0
});
i.ClearBoardHeartRippleAni_comparisonNew_Trait = void 0;
var a = function(e) {
r(t, e);
function t() {
return null !== e && e.apply(this, arguments) || this;
}
t.prototype.initUseNewArt = function() {
this.currentPrefabPath = "prefabs/newArt/ClearBoardHeartRipple";
hs.ResLoader.loadByBundle("ClearBoardHeartRippleAniTrait", this.currentPrefabPath, cc.Prefab);
};
t.prototype.updateNewArtPath = function() {
this.currentPrefabPath = "prefabs/newArt/ClearBoardHeartRipple";
};
return o([ classId("ClearBoardHeartRippleAniTrait", "comparisonNew") ], t);
}(e("./ClearBoardHeartRippleAniTrait").ClearBoardHeartRippleAniTrait);
i.ClearBoardHeartRippleAni_comparisonNew_Trait = a;
cc._RF.pop();
}, {
"./ClearBoardHeartRippleAniTrait": "ClearBoardHeartRippleAniTrait"
} ]
}, {}, [ "ClearBoardHeartRippleAniTrait", "ClearBoardHeartRippleAni_comparisonNew_Trait" ]);
//# sourceMappingURL=index.js.map
