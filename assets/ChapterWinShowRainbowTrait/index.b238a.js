window.__require = function e(t, r, n) {
function o(i, s) {
if (!r[i]) {
if (!t[i]) {
var l = i.split("/");
l = l[l.length - 1];
if (!t[l]) {
var c = "function" == typeof __require && __require;
if (!s && c) return c(l, !0);
if (a) return a(l, !0);
throw new Error("Cannot find module '" + i + "'");
}
i = l;
}
var f = r[i] = {
exports: {}
};
t[i][0].call(f.exports, function(e) {
return o(t[i][1][e] || e);
}, f, f.exports, e, t, r, n);
}
return r[i].exports;
}
for (var a = "function" == typeof __require && __require, i = 0; i < n.length; i++) o(n[i]);
return o;
}({
ChapterWinShowRainbowTrait: [ function(e, t, r) {
"use strict";
cc._RF.push(t, "b60e8E2pLJE1YJ4zoabDydr", "ChapterWinShowRainbowTrait");
var n, o = this && this.__extends || (n = function(e, t) {
return (n = Object.setPrototypeOf || {
__proto__: []
} instanceof Array && function(e, t) {
e.__proto__ = t;
} || function(e, t) {
for (var r in t) Object.prototype.hasOwnProperty.call(t, r) && (e[r] = t[r]);
})(e, t);
}, function(e, t) {
n(e, t);
function r() {
this.constructor = e;
}
e.prototype = null === t ? Object.create(t) : (r.prototype = t.prototype, new r());
}), a = this && this.__decorate || function(e, t, r, n) {
var o, a = arguments.length, i = a < 3 ? t : null === n ? n = Object.getOwnPropertyDescriptor(t, r) : n;
if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) i = Reflect.decorate(e, t, r, n); else for (var s = e.length - 1; s >= 0; s--) (o = e[s]) && (i = (a < 3 ? o(i) : a > 3 ? o(t, r, i) : o(t, r)) || i);
return a > 3 && i && Object.defineProperty(t, r, i), i;
}, i = this && this.__read || function(e, t) {
var r = "function" == typeof Symbol && e[Symbol.iterator];
if (!r) return e;
var n, o, a = r.call(e), i = [];
try {
for (;(void 0 === t || t-- > 0) && !(n = a.next()).done; ) i.push(n.value);
} catch (e) {
o = {
error: e
};
} finally {
try {
n && !n.done && (r = a.return) && r.call(a);
} finally {
if (o) throw o.error;
}
}
return i;
}, s = this && this.__values || function(e) {
var t = "function" == typeof Symbol && Symbol.iterator, r = t && e[t], n = 0;
if (r) return r.call(e);
if (e && "number" == typeof e.length) return {
next: function() {
e && n >= e.length && (e = void 0);
return {
value: e && e[n++],
done: !e
};
}
};
throw new TypeError(t ? "Object is not iterable." : "Symbol.iterator is not defined.");
};
Object.defineProperty(r, "__esModule", {
value: !0
});
r.ChapterWinShowRainbowTrait = void 0;
var l = function(e) {
o(t, e);
function t() {
var t = null !== e && e.apply(this, arguments) || this;
t._effectParent = null;
t._dragonBonesAsset = null;
t._dragonBonesAtlasAsset = null;
t._isResourceLoaded = !1;
t._clearEffectPool = [];
return t;
}
t.prototype.onActive = function(e) {
hs.tp.isChapterGame_ProxyOnStartGame(e) && this._initResources();
hs.tp.isChapterGameOver_GameEndPre_ProxyOnGameEndPre(e) && e.args[0].option.win && this._isResourceLoaded && this._playRainbowClearEffect(e) && (e.replace = !0);
hs.tp.isLevelSucClearTraitPlayEliminateEffects(e) && this._isResourceLoaded && (e.replace = !0);
};
t.prototype._initResources = function() {
var e = this;
if (!this._isResourceLoaded) {
var t = hs.MainDragonBonesConfig.comboRainbowEffectEliminate1;
Promise.all([ hs.ResLoader.asyncLoadByBundle(t.bundleName, t.dragonAssetUrl, dragonBones.DragonBonesAsset), hs.ResLoader.asyncLoadByBundle(t.bundleName, t.dragonAtlasAssetUrl, dragonBones.DragonBonesAtlasAsset) ]).then(function(t) {
var r = i(t, 2), n = r[0], o = r[1];
if (n && o) {
e._dragonBonesAsset = n;
e._dragonBonesAtlasAsset = o;
e._isResourceLoaded = !0;
}
}).catch(function() {});
}
};
t.prototype._createClearEffect = function() {
var e = new cc.Node("RainbowClearEffect").addComponent(dragonBones.ArmatureDisplay);
e.dragonAsset = this._dragonBonesAsset;
e.dragonAtlasAsset = this._dragonBonesAtlasAsset;
e.armatureName = "Armature";
return e;
};
t.prototype._getClearEffect = function() {
var e, t;
try {
for (var r = s(this._clearEffectPool), n = r.next(); !n.done; n = r.next()) {
var o = n.value;
if (cc.isValid(o.node) && 0 === o.node.opacity) return o;
}
} catch (t) {
e = {
error: t
};
} finally {
try {
n && !n.done && (t = r.return) && t.call(r);
} finally {
if (e) throw e.error;
}
}
var a = this._createClearEffect();
this._clearEffectPool.push(a);
return a;
};
t.prototype._playRainbowClearEffect = function(e) {
if (!this._isResourceLoaded) return !1;
var t = Cinst(hs.Board);
if (!t || !cc.isValid(t.node) || !t.node.activeInHierarchy) return !1;
this._effectParent = t.blockOverPreEliminate;
if (!cc.isValid(this._effectParent)) return !1;
t.setState({
boards: new Array(hs.ROW).fill(-1).map(function() {
return new Array(hs.COL).fill(-1);
})
});
this._effectParent && cc.isValid(this._effectParent) && (this._effectParent.opacity = 255);
for (var r = 0; r < hs.COL; r++) 0 === r ? this._playColumnRainbowEffect(r, e) : this._playColumnRainbowEffect(r);
this.needPlay();
return !0;
};
t.prototype.needPlay = function() {};
t.prototype._playColumnRainbowEffect = function(e, t) {
var r, n, o = this._getClearEffect();
if (o && cc.isValid(o.node)) if (cc.isValid(this._effectParent)) {
cc.isValid(o.node.parent) || this._effectParent.addChild(o.node, 100);
var a = hs.OFFSETX - hs.BOARD_CONTAINER_HALF_WIDTH + hs.BLOCK_HALF_SIZE + hs.BLOCK_SIZE * e;
o.node.x = a;
o.node.y = 0;
o.node.angle = 90;
o.node.scale = 1;
o.node.opacity = 255;
var i = "colour_elimination" + (e % 2 == 0 ? "_A" : "_B");
o.timeScale = 1.5;
o.removeEventListener(dragonBones.EventObject.COMPLETE);
o.playAnimation(i, 1);
o.once(dragonBones.EventObject.COMPLETE, function() {
var e;
o.node.opacity = 0;
t && (null === (e = null == t ? void 0 : t.originalCaller) || void 0 === e || e.call(t));
}, this);
} else t && (null === (n = null == t ? void 0 : t.originalCaller) || void 0 === n || n.call(t)); else t && (null === (r = null == t ? void 0 : t.originalCaller) || void 0 === r || r.call(t));
};
return a([ classId("ChapterWinShowRainbowTrait"), classMethodWatch() ], t);
}(Trait);
r.ChapterWinShowRainbowTrait = l;
cc._RF.pop();
}, {} ]
}, {}, [ "ChapterWinShowRainbowTrait" ]);
//# sourceMappingURL=index.js.map
