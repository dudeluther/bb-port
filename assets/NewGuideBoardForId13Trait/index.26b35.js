window.__require = function e(t, r, i) {
function o(n, l) {
if (!r[n]) {
if (!t[n]) {
var c = n.split("/");
c = c[c.length - 1];
if (!t[c]) {
var s = "function" == typeof __require && __require;
if (!l && s) return s(c, !0);
if (a) return a(c, !0);
throw new Error("Cannot find module '" + n + "'");
}
n = c;
}
var f = r[n] = {
exports: {}
};
t[n][0].call(f.exports, function(e) {
return o(t[n][1][e] || e);
}, f, f.exports, e, t, r, i);
}
return r[n].exports;
}
for (var a = "function" == typeof __require && __require, n = 0; n < i.length; n++) o(i[n]);
return o;
}({
NewGuideBoardForId13Trait: [ function(e, t, r) {
"use strict";
cc._RF.push(t, "16318M7JM9FI6BTJYCY0xBc", "NewGuideBoardForId13Trait");
var i, o = this && this.__extends || (i = function(e, t) {
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
}), a = this && this.__decorate || function(e, t, r, i) {
var o, a = arguments.length, n = a < 3 ? t : null === i ? i = Object.getOwnPropertyDescriptor(t, r) : i;
if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) n = Reflect.decorate(e, t, r, i); else for (var l = e.length - 1; l >= 0; l--) (o = e[l]) && (n = (a < 3 ? o(n) : a > 3 ? o(t, r, n) : o(t, r)) || n);
return a > 3 && n && Object.defineProperty(t, r, n), n;
}, n = this && this.__values || function(e) {
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
};
Object.defineProperty(r, "__esModule", {
value: !0
});
r.NewGuideBoardForId13Trait = void 0;
var l = [ -1, 13, -1 ], c = [ 1, 4, 1 ], s = [ {
x: 53,
y: -653.75
}, {
x: 265,
y: -138.75
} ], f = [ [ -1, -1, -1, -1, -1, 3, 3, 3 ], [ -1, -1, -1, -1, -1, 3, 3, 3 ], [ -1, -1, -1, -1, -1, 3, 3, 3 ], [ -1, -1, -1, -1, -1, 6, 6, 6 ], [ -1, -1, -1, -1, -1, 6, 6, 6 ], [ 6, 6, 6, 1, 1, -1, -1, -1 ], [ 6, 6, 6, 1, 1, -1, -1, -1 ], [ 6, 6, 6, 1, 1, -1, -1, -1 ] ], d = function(e) {
o(t, e);
function t() {
var t = null !== e && e.apply(this, arguments) || this;
t._particlePool = null;
t._particleLoading = !1;
t._particleLoaded = !1;
t._particleContainer = null;
t._activeParticles = [];
t._rowPosCache = {};
t._preElimFingerprint = "";
t._cachedRowLines = [];
t._cachedColLines = [];
t._clearBombPreloadRegistered = !1;
t._clearBombNode = null;
t._isClearBombPlaying = !1;
t._clearBombAnimRound = 0;
t._clearBombFallbackTimer = null;
return t;
}
Object.defineProperty(t.prototype, "methodType", {
get: function() {
var e, t = null === (e = this.props) || void 0 === e ? void 0 : e.methodType, r = "string" == typeof t ? Number(t) : t;
return "number" == typeof r && Number.isFinite(r) && r >= 1 && r <= 4 ? r : 1;
},
enumerable: !1,
configurable: !0
});
Object.defineProperty(t.prototype, "enablePreElimParticle", {
get: function() {
return 1 === this.methodType || 3 === this.methodType;
},
enumerable: !1,
configurable: !0
});
Object.defineProperty(t.prototype, "enableClearBombAnim", {
get: function() {
return 1 === this.methodType || 4 === this.methodType;
},
enumerable: !1,
configurable: !0
});
Object.defineProperty(t.prototype, "isInGuide", {
get: function() {
var e;
return !(null === (e = hs.classGuideInfo) || void 0 === e ? void 0 : e.isFinishedGuide);
},
enumerable: !1,
configurable: !0
});
Object.defineProperty(t.prototype, "isClassMode", {
get: function() {
var e;
return (null === (e = hs.gameInfo) || void 0 === e ? void 0 : e.gameMode) === hs.GameMode.Class;
},
enumerable: !1,
configurable: !0
});
Object.defineProperty(t.prototype, "onActiveCondition", {
get: function() {
return !0;
},
enumerable: !1,
configurable: !0
});
t.prototype.isClassGuide_ProxyInitTraits = function() {
var e;
if (null === (e = hs.classGuideInfo) || void 0 === e || !e.isFinishedGuide) {
storage.setItem("classGuideStep", 2);
this.setupGuideConfig();
}
};
t.prototype.isBoardInitBoard = function(e) {
if (this.isClassMode) {
var t = e.target;
if (t && cc.isValid(t.blockOverPreEliminate) && this._particleContainer !== t.blockOverPreEliminate) {
this._rowPosCache = {};
this._particleContainer = t.blockOverPreEliminate;
}
this.loadParticlePrefab();
this.registerClearBombPreload();
}
};
t.prototype.isBoardEffect_EnterGame_ProxyOnGameStart = function() {
this.clearAllEffects();
};
t.prototype.isClassGame_Replay_ProxyOnGameReplay = function() {
this.clearAllEffects();
};
t.prototype.isBoardEffect_CloseGame_ProxyCloseClass = function() {
this.clearAllEffects();
};
t.prototype.isBoardEffect_CloseGame_ProxyCloseChapter = function() {
this.clearAllEffects();
};
t.prototype.isScene_ProxyOnSceneChange = function() {
this.clearAllEffects();
};
t.prototype.isGameDataClear_Disk_ProxyResetBoardEffectData = function() {
this.clearAllEffects();
};
t.prototype.isClassGame_ProxyOnGameBackHome = function() {
this.clearAllEffects();
};
t.prototype.isEliminate_Effects_ProxyTouchOnMoveCanSnap = function(e) {
this.isClassMode && this.enablePreElimParticle && this.isInGuide && (this._particleLoaded ? this.showParticles(e.args[0]) : this.loadParticlePrefab());
};
t.prototype.isEliminate_Effects_ProxyTouchOnMoveNoCanSnap = function() {
this.recycleAllParticles();
};
t.prototype.isEliminate_Effects_ProxyOnBlockProducerAnyTouchEnd = function() {
this.recycleAllParticles();
};
t.prototype.isBlocksProducerTouchBackBlocks = function() {
this.recycleAllParticles();
};
t.prototype.isClassBoardSplashAnimation_ProxyOnShowClearScreen = function(e) {
var t;
if (this.isClassMode && this.enableClearBombAnim && this.isInGuide) {
var r = e.args[0];
if (!0 === (null === (t = null == r ? void 0 : r.state) || void 0 === t ? void 0 : t.clearScreen) && !this._isClearBombPlaying) {
var i = this.getClearBombPrefab();
i && this.playClearBombAnim(i);
}
}
};
t.prototype.setupGuideConfig = function() {
var e, t;
if (null === (e = hs.classGuideInfo) || void 0 === e || !e.isFinishedGuide) {
var r = null === (t = hs.classGuideInfo) || void 0 === t ? void 0 : t.steps;
if (r && r[2]) {
var i = f.map(function(e) {
return e.slice();
}), o = l.slice(), a = c.slice(), n = s.map(function(e) {
return {
x: e.x,
y: e.y
};
}), d = {
save_arr: i,
producerBlocks: o,
blocksColors: a,
color: 4,
currentScore: r[2].currentScore,
highScore: r[2].highScore,
move: n
};
storage.setItem("guideStepConfigOverride_2", d);
Object.assign(r[2], d);
storage.setItem("classFaceBlocks", i);
storage.setItem("classProducerBlocks", o);
storage.setItem("classColorLists", a);
}
}
};
t.prototype.loadParticlePrefab = function() {
var e = this;
if (!this._particleLoading && !this._particleLoaded) {
this._particleLoading = !0;
this._particlePool = new hs.PrefabPool({
name: "previewcolor",
url: "prefabs/previewcolor",
bundleName: this.traitName
}, 4);
this._particlePool.ready().then(function() {
e._particleLoaded = !0;
e._particleLoading = !1;
}).catch(function() {
e._particleLoading = !1;
});
}
};
t.prototype.showParticles = function(e) {
var t, r, i, o;
if (this._particleLoaded && this._particlePool && this._particleContainer) {
var a, l, c = e.rowCanEliminateShaders, s = e.colCanEliminateShaders, f = this.computePreElimFingerprint(c, s);
if (f !== this._preElimFingerprint) {
this._preElimFingerprint = f;
a = this._cachedRowLines = this.collectRowLines(c);
l = this._cachedColLines = this.collectColLines(s);
} else {
a = this._cachedRowLines;
l = this._cachedColLines;
}
this.recycleAllParticles();
if (0 !== a.length || 0 !== l.length) {
try {
for (var d = n(a), u = d.next(); !u.done; u = d.next()) {
var p = u.value;
this.playRowParticle(p);
}
} catch (e) {
t = {
error: e
};
} finally {
try {
u && !u.done && (r = d.return) && r.call(d);
} finally {
if (t) throw t.error;
}
}
try {
for (var h = n(l), y = h.next(); !y.done; y = h.next()) {
p = y.value;
this.playColParticle(p);
}
} catch (e) {
i = {
error: e
};
} finally {
try {
y && !y.done && (o = h.return) && o.call(h);
} finally {
if (i) throw i.error;
}
}
}
}
};
t.prototype.computePreElimFingerprint = function(e, t) {
var r, i, o, a, l, c, s = "";
if (e) try {
for (var f = n(Object.keys(e)), d = f.next(); !d.done; d = f.next()) {
var u = d.value, p = e[Number(u)];
p && (s += "r" + u + ":" + Object.keys(p).length + ",");
}
} catch (e) {
r = {
error: e
};
} finally {
try {
d && !d.done && (i = f.return) && i.call(f);
} finally {
if (r) throw r.error;
}
}
if (t) try {
for (var h = n(Object.keys(t)), y = h.next(); !y.done; y = h.next()) {
u = y.value;
var m = t[Number(u)];
if (m) {
s += "c" + u + ":";
try {
for (var _ = (l = void 0, n(Object.keys(m))), b = _.next(); !b.done; b = _.next()) s += b.value + ",";
} catch (e) {
l = {
error: e
};
} finally {
try {
b && !b.done && (c = _.return) && c.call(_);
} finally {
if (l) throw l.error;
}
}
s += ";";
}
}
} catch (e) {
o = {
error: e
};
} finally {
try {
y && !y.done && (a = h.return) && a.call(h);
} finally {
if (o) throw o.error;
}
}
return s;
};
t.prototype.collectRowLines = function(e) {
var t, r, i = [];
if (!e) return i;
try {
for (var o = n(Object.keys(e)), a = o.next(); !a.done; a = o.next()) {
var l = a.value, c = parseInt(l), s = e[c];
if (s && 8 === Object.keys(s).length) {
var f = this._rowPosCache[c];
if (void 0 === f) {
var d = Object.values(s)[0];
f = d ? d.y : 374 - 106 * c;
this._rowPosCache[c] = f;
}
i.push({
row: c,
y: f
});
}
}
} catch (e) {
t = {
error: e
};
} finally {
try {
a && !a.done && (r = o.return) && r.call(o);
} finally {
if (t) throw t.error;
}
}
return i;
};
t.prototype.collectColLines = function(e) {
var t, r, i, o, a, l, c = [];
if (!e) return c;
var s = {};
try {
for (var f = n(Object.keys(e)), d = f.next(); !d.done; d = f.next()) {
var u = d.value;
if (v = e[parseInt(u)]) try {
for (var p = (i = void 0, n(Object.keys(v))), h = p.next(); !h.done; h = p.next()) {
var y = h.value, m = parseInt(y);
(s[m] = s[m] || {})[parseInt(u)] = v[parseInt(y)];
}
} catch (e) {
i = {
error: e
};
} finally {
try {
h && !h.done && (o = p.return) && o.call(p);
} finally {
if (i) throw i.error;
}
}
}
} catch (e) {
t = {
error: e
};
} finally {
try {
d && !d.done && (r = f.return) && r.call(f);
} finally {
if (t) throw t.error;
}
}
try {
for (var _ = n(Object.keys(s)), b = _.next(); !b.done; b = _.next()) {
var v;
y = b.value;
if ((v = s[parseInt(y)]) && 8 === Object.keys(v).length) {
var P = Object.values(v)[0];
c.push({
col: parseInt(y),
x: P ? P.x : 106 * parseInt(y) - 371
});
}
}
} catch (e) {
a = {
error: e
};
} finally {
try {
b && !b.done && (l = _.return) && l.call(_);
} finally {
if (a) throw a.error;
}
}
return c;
};
t.prototype.playRowParticle = function(e) {
var t = this._particlePool.get();
if (t) {
t.setPosition(0, e.y);
this.resetParticleNode(t, 0);
this._particleContainer && cc.isValid(this._particleContainer) && this._particleContainer.addChild(t);
this._activeParticles.push(t);
}
};
t.prototype.playColParticle = function(e) {
var t = this._particlePool.get();
if (t) {
t.setPosition(e.x, 3);
this.resetParticleNode(t, 90);
this._particleContainer && cc.isValid(this._particleContainer) && this._particleContainer.addChild(t);
this._activeParticles.push(t);
}
};
t.prototype.resetParticleNode = function(e, t) {
e.angle = t;
e.scaleX = 1;
e.scaleY = 1;
e.color = cc.Color.WHITE;
e.opacity = 255;
var r = e.getComponent(sp.Skeleton);
if (r) {
r.clearTracks();
r.setToSetupPose();
r.setAnimation(0, "in", !0);
}
};
t.prototype.recycleAllParticles = function() {
var e, t;
if (0 !== this._activeParticles.length) {
try {
for (var r = n(this._activeParticles), i = r.next(); !i.done; i = r.next()) {
var o = i.value;
if (cc.isValid(o)) {
var a = o.getComponent(sp.Skeleton);
a && a.clearTracks();
o.removeFromParent();
this._particlePool ? this._particlePool.put(o) : o.destroy();
}
}
} catch (t) {
e = {
error: t
};
} finally {
try {
i && !i.done && (t = r.return) && t.call(r);
} finally {
if (e) throw e.error;
}
}
this._activeParticles.length = 0;
}
};
t.prototype.registerClearBombPreload = function() {
if (!this._clearBombPreloadRegistered) {
this._clearBombPreloadRegistered = !0;
hs.ResLoader.asyncLoadByBundle("Remote_Featclearscreenbomb", "ClearScreenBomb", cc.Prefab).then(function() {}).catch(function() {});
}
};
t.prototype.getClearBombPrefab = function() {
var e = hs.ResLoader.getAsset("Remote_Featclearscreenbomb_ClearScreenBomb");
return e && cc.isValid(e) ? e : null;
};
t.prototype.playClearBombAnim = function(e) {
var t, r, i = this;
if (!e || !cc.isValid(e)) return !1;
var o = storage.getItem("clearScreenEffectContext", null), a = hs.gameEffectLayer;
if (!a || !cc.isValid(a)) return !1;
var n = a.getContentSize(), l = 0, c = cc.v2(n.width / 2, .6 * n.height), s = cc.v2(n.width / 2 + 120, .8 * n.height);
if (o) {
l = null !== (t = o.screenScore) && void 0 !== t ? t : 0;
o.startPos && isFinite(o.startPos.x) && isFinite(o.startPos.y) && (c = cc.v2(o.startPos.x, o.startPos.y));
o.endPos && isFinite(o.endPos.x) && isFinite(o.endPos.y) && (s = cc.v2(o.endPos.x, o.endPos.y));
}
var f = cc.instantiate(e);
a.addChild(f);
f.setPosition(c);
this._clearBombNode = f;
this._isClearBombPlaying = !0;
this.cancelClearBombFallbackTimer();
var d = ++this._clearBombAnimRound, u = (null === (r = hs.kSpeedInfo) || void 0 === r ? void 0 : r.kSpeed) || 1, p = f.getComponentInChildren(dragonBones.ArmatureDisplay);
if (p) {
p.timeScale = 1 / u;
p.playAnimation(l <= 0 ? "in" : "in_word", 1);
}
var h = f.getComponentInChildren(cc.Label);
if (h && l > 0) {
var y = h.node.parent ? h.node.parent.convertToNodeSpaceAR(s) : s;
h.node.opacity = 0;
h.string = "" + l;
cc.tween(h.node).delay(.16 * u).to(.1 * u, {
opacity: 255,
scale: 1.2
}).to(.2 * u, {
scale: 1
}).delay(.34 * u).to(.6 * u, {
scale: 1.4,
y: 150
}).start();
cc.tween(h.node).delay(1.3 * u).to(.16 * u, {
opacity: 0
}).delay(.1).call(function() {
h.node.y = y.y + 120;
h.node.scale = 1.2;
}).to(.1 * u, {
scale: 1.4,
opacity: 255
}).to(.17 * u, {
scale: 1
}).delay(.2 * u).to(.17 * u, {
scale: 1.2
}).to(.17 * u, {
scale: 1,
opacity: 0,
y: y.y
}).call(function() {
i.finishClearBombAnim();
}).start();
} else cc.tween(f).delay(3.3).call(function() {
i.finishClearBombAnim();
}).start();
this._clearBombFallbackTimer = setTimeoutSafe(function() {
i._clearBombFallbackTimer = null;
i._isClearBombPlaying && d === i._clearBombAnimRound && i.finishClearBombAnim();
}, 4e3);
return !0;
};
t.prototype.cancelClearBombFallbackTimer = function() {
if (null !== this._clearBombFallbackTimer) {
clearTimeout(this._clearBombFallbackTimer);
this._clearBombFallbackTimer = null;
}
};
t.prototype.finishClearBombAnim = function() {
this.cancelClearBombFallbackTimer();
if (this._isClearBombPlaying) {
this._isClearBombPlaying = !1;
this._clearBombNode && cc.isValid(this._clearBombNode) && this._clearBombNode.destroy();
this._clearBombNode = null;
}
};
t.prototype.clearAllEffects = function() {
this.recycleAllParticles();
this.finishClearBombAnim();
};
return a([ classId("NewGuideBoardForId13Trait") ], t);
}(Trait);
r.NewGuideBoardForId13Trait = d;
cc._RF.pop();
}, {} ]
}, {}, [ "NewGuideBoardForId13Trait" ]);
//# sourceMappingURL=index.js.map
