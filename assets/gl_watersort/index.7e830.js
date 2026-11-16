window.__require = function t(e, i, n) {
function a(o, s) {
if (!i[o]) {
if (!e[o]) {
var l = o.split("/");
l = l[l.length - 1];
if (!e[l]) {
var c = "function" == typeof __require && __require;
if (!s && c) return c(l, !0);
if (r) return r(l, !0);
throw new Error("Cannot find module '" + o + "'");
}
o = l;
}
var u = i[o] = {
exports: {}
};
e[o][0].call(u.exports, function(t) {
return a(e[o][1][t] || t);
}, u, u.exports, t, e, i, n);
}
return i[o].exports;
}
for (var r = "function" == typeof __require && __require, o = 0; o < n.length; o++) a(n[o]);
return a;
}({
GLWaterCanPutTips: [ function(t, e, i) {
"use strict";
cc._RF.push(e, "36930UvlylJY4fmoW5Sp3gJ", "GLWaterCanPutTips");
var n, a = this && this.__extends || (n = function(t, e) {
return (n = Object.setPrototypeOf || {
__proto__: []
} instanceof Array && function(t, e) {
t.__proto__ = e;
} || function(t, e) {
for (var i in e) Object.prototype.hasOwnProperty.call(e, i) && (t[i] = e[i]);
})(t, e);
}, function(t, e) {
n(t, e);
function i() {
this.constructor = t;
}
t.prototype = null === e ? Object.create(e) : (i.prototype = e.prototype, new i());
}), r = this && this.__decorate || function(t, e, i, n) {
var a, r = arguments.length, o = r < 3 ? e : null === n ? n = Object.getOwnPropertyDescriptor(e, i) : n;
if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) o = Reflect.decorate(t, e, i, n); else for (var s = t.length - 1; s >= 0; s--) (a = t[s]) && (o = (r < 3 ? a(o) : r > 3 ? a(e, i, o) : a(e, i)) || o);
return r > 3 && o && Object.defineProperty(e, i, o), o;
};
Object.defineProperty(i, "__esModule", {
value: !0
});
var o = t("./GLWaterSortFeat"), s = t("./GlWaterMain"), l = t("./GLWaterItem"), c = t("./GLWaterSortScene"), u = t("./GlWaterGuildeView"), h = cc._decorator, d = h.ccclass, p = h.property, f = function(t) {
a(e, t);
function e() {
var e = null !== t && t.apply(this, arguments) || this;
e.txtLevel = null;
e.txtLeft = null;
e._updateTimer = 0;
e.UPDATE_INTERVAL = .5;
return e;
}
e.prototype.onLoad = function() {
o.GLWaterSortFeature.isOpen(o.GLWaterSortFeat2.GLWaterCanPutTips) ? this.updateDisplay() : this.node.active = !1;
};
e.prototype.update = function(t) {
if (o.GLWaterSortFeature.isOpen(o.GLWaterSortFeat2.GLWaterCanPutTips)) {
this._updateTimer += t;
if (this._updateTimer >= this.UPDATE_INTERVAL) {
this._updateTimer = 0;
this.updateDisplay();
}
}
};
e.prototype.updateDisplay = function() {
this.updateLevel();
this.updateCanPutNum();
};
e.prototype.updateLevel = function() {
if (this.txtLevel) {
var t = s.GlWaterMain.Instance;
if (t) {
var e = t._levelID;
void 0 !== e && (this.txtLevel.string = "" + e);
}
}
};
e.prototype.updateCanPutNum = function() {
if (this.txtLeft) {
var t = this.getCanPutInNum();
this.txtLeft.string = "" + t;
}
};
e.prototype.getCanPutInNum = function() {
var t = null;
if (c.GlWaterSortScene.getInGuilde()) u.GuideView.Instance && u.GuideView.Instance.itemArr && u.GuideView.Instance.itemArr.length > 0 && (t = u.GuideView.Instance.itemArr); else {
var e = s.GlWaterMain.Instance;
e && (t = e.itemArr);
}
if (!t || 0 === t.length) return 0;
for (var i = 0, n = "", a = 0; a < t.length; a++) {
var r = t[a];
if (r && cc.isValid(r)) {
var o = r.getComponent(l.GLWaterItem);
if (o) {
var h = o.getData();
if (h && h.waterData) {
var d = h.waterData.filter(function(t) {
return -1 !== t;
});
if (0 !== d.length && !h.isLock && !o.checkIsFinish()) {
for (var p = d[0], f = !1, g = 0; g < t.length; g++) if (g !== a) {
var v = t[g];
if (v && cc.isValid(v)) {
var m = v.getComponent(l.GLWaterItem);
if (m) {
var _ = m.getData();
if (_ && _.waterData && !_.isLock) {
var y = _.waterData.filter(function(t) {
return -1 !== t;
});
if (!(y.length >= _.tubeLen)) {
if (0 === y.length) {
f = !0;
n += a + 1 + "->" + (g + 1) + ",";
break;
}
if (y[0] === p) {
f = !0;
n += a + 1 + "->" + (g + 1) + ",";
break;
}
}
}
}
}
}
f && i++;
}
}
}
}
}
console.log("str:", n);
return i;
};
r([ p(cc.Label) ], e.prototype, "txtLevel", void 0);
r([ p(cc.Label) ], e.prototype, "txtLeft", void 0);
return r([ d ], e);
}(cc.Component);
i.default = f;
cc._RF.pop();
}, {
"./GLWaterItem": "GLWaterItem",
"./GLWaterSortFeat": "GLWaterSortFeat",
"./GLWaterSortScene": "GLWaterSortScene",
"./GlWaterGuildeView": "GlWaterGuildeView",
"./GlWaterMain": "GlWaterMain"
} ],
GLWaterClickEmptyFastTraitCtrl: [ function(t, e, i) {
"use strict";
cc._RF.push(e, "5ff0ex9p/lKxaPgxOePz2+y", "GLWaterClickEmptyFastTraitCtrl");
Object.defineProperty(i, "__esModule", {
value: !0
});
var n = function() {
function t() {
this._featureName = "GLWaterClickEmptyFast";
this._sourceItem = null;
this._targetItem = null;
this._isFastMode = !1;
this.FAST_SPEED = 3;
this._onNativeTouchBound = null;
}
t.getInstance = function() {
null == this._instance && (this._instance = new t());
return this._instance;
};
t.prototype.isOpen = function() {
return GL.Game.IsFeatureOpen(this._featureName);
};
t.prototype.setPourPair = function(t, e) {
this._sourceItem = t;
this._targetItem = e;
this._isFastMode = !1;
};
t.prototype.clearPourPair = function() {
this._sourceItem = null;
this._targetItem = null;
this._isFastMode = !1;
};
t.prototype.isAnimationPlaying = function() {
return !!this._sourceItem && (this._sourceItem.isPlay || this._targetItem && this._targetItem.isPlayUp);
};
t.prototype.tryEnableFastMode = function() {
if (!this.isOpen()) return !1;
if (!this.isAnimationPlaying()) return !1;
if (this._isFastMode) return !0;
this.enableFastMode();
return !0;
};
t.prototype.enableFastMode = function() {
this._isFastMode = !0;
this._sourceItem && this._sourceItem.isPlay && this.speedUpSourceAnimation(this._sourceItem);
this._targetItem && this._targetItem.isPlayUp && this.speedUpTargetAnimation(this._targetItem);
};
t.prototype.onWaterUpStart = function(t) {
this.isOpen() && this._isFastMode && this._targetItem === t && this.speedUpTargetAnimation(t);
};
t.prototype.speedUpSourceAnimation = function(t) {
var e = t.getSpineParent(), i = null == e ? void 0 : e.getComponent(sp.Skeleton);
i && i.timeScale > 0 && (i.timeScale = this.FAST_SPEED);
};
t.prototype.speedUpTargetAnimation = function(t) {
var e = t.getSpineParent(), i = null == e ? void 0 : e.getComponent(sp.Skeleton);
i && i.timeScale > 0 && (i.timeScale = this.FAST_SPEED);
};
t.prototype.init = function() {
if (this.isOpen()) {
this._onNativeTouchBound = this.onTouchEmptyArea.bind(this);
var t = cc.game.canvas;
if (t) {
t.addEventListener("touchstart", this._onNativeTouchBound);
t.addEventListener("mousedown", this._onNativeTouchBound);
}
}
};
t.prototype.destroy = function() {
if (this._onNativeTouchBound) {
var t = cc.game.canvas;
if (t) {
t.removeEventListener("touchstart", this._onNativeTouchBound);
t.removeEventListener("mousedown", this._onNativeTouchBound);
}
this._onNativeTouchBound = null;
}
this.clearPourPair();
};
t.prototype.onTouchEmptyArea = function() {
this.isOpen() && this.isAnimationPlaying() && this.tryEnableFastMode();
};
t._instance = null;
return t;
}();
i.default = n;
cc._RF.pop();
}, {} ],
GLWaterColor: [ function(t, e, i) {
"use strict";
cc._RF.push(e, "51b10uJrkdO1ZBTy1NLTm34", "GLWaterColor");
Object.defineProperty(i, "__esModule", {
value: !0
});
i.getWaterColorConfig = i.GLWaterNewColor = i.GLWaterColor = i.GlWaterConstColor = void 0;
var n = t("../GLWaterSortFeat");
i.GlWaterConstColor = [ 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12 ];
i.GLWaterColor = [ {
string: "red_0",
waterColor: [ 229, 50, 64, 255 ],
waterTop: [ 252, 90, 102, 255 ],
imgFinishIndex: 14
}, {
string: "yellow_0",
waterColor: [ 255, 225, 0, 255 ],
waterTop: [ 255, 239, 121, 255 ],
imgFinishIndex: 10
}, {
string: "green_0",
waterColor: [ 115, 231, 0, 255 ],
waterTop: [ 161, 255, 68, 255 ],
imgFinishIndex: 12
}, {
string: "blue_1",
waterColor: [ 43, 114, 255, 255 ],
waterTop: [ 91, 146, 255, 255 ],
imgFinishIndex: 13
}, {
string: "pink_1",
waterColor: [ 255, 98, 190, 255 ],
waterTop: [ 255, 137, 215, 255 ],
imgFinishIndex: 0
}, {
string: "purple_0",
waterColor: [ 134, 47, 255, 255 ],
waterTop: [ 159, 89, 255, 255 ],
imgFinishIndex: 3
}, {
string: "pink_0",
waterColor: [ 143, 0, 110, 255 ],
waterTop: [ 175, 7, 136, 255 ],
imgFinishIndex: 5
}, {
string: "orange_0",
waterColor: [ 255, 128, 0, 255 ],
waterTop: [ 255, 156, 58, 255 ],
imgFinishIndex: 9
}, {
string: "green_1",
waterColor: [ 0, 147, 12, 255 ],
waterTop: [ 15, 181, 29, 255 ],
imgFinishIndex: 11
}, {
string: "blue_2",
waterColor: [ 54, 36, 255, 255 ],
waterTop: [ 83, 83, 255, 255 ],
imgFinishIndex: 6
}, {
string: "brown_1",
waterColor: [ 255, 193, 161, 255 ],
waterTop: [ 255, 221, 204, 255 ],
imgFinishIndex: 7
}, {
string: "green_2",
waterColor: [ 30, 182, 126, 255 ],
waterTop: [ 45, 212, 151, 255 ],
imgFinishIndex: 1
}, {
string: "blue_0",
waterColor: [ 71, 212, 255, 255 ],
waterTop: [ 130, 226, 255, 255 ],
imgFinishIndex: 4
}, {
string: "black_0",
waterColor: [ 23, 18, 56, 255 ],
waterTop: [ 46, 37, 102, 255 ],
imgFinishIndex: 2
} ];
i.GLWaterNewColor = [ {
string: "red_0",
waterColor: [ 196, 6, 2, 255 ],
waterTop: [ 232, 31, 32, 255 ],
imgFinishIndex: 14
}, {
string: "yellow_0",
waterColor: [ 252, 192, 6, 255 ],
waterTop: [ 249, 209, 38, 255 ],
imgFinishIndex: 10
}, {
string: "green_0",
waterColor: [ 112, 165, 2, 255 ],
waterTop: [ 151, 200, 18, 255 ],
imgFinishIndex: 12
}, {
string: "blue_1",
waterColor: [ 93, 100, 166, 255 ],
waterTop: [ 126, 135, 208, 255 ],
imgFinishIndex: 13
}, {
string: "pink_1",
waterColor: [ 254, 111, 215, 255 ],
waterTop: [ 247, 131, 227, 255 ],
imgFinishIndex: 0
}, {
string: "purple_0",
waterColor: [ 95, 30, 142, 255 ],
waterTop: [ 153, 52, 229, 255 ],
imgFinishIndex: 3
}, {
string: "pink_0",
waterColor: [ 143, 0, 110, 255 ],
waterTop: [ 170, 3, 131, 255 ],
imgFinishIndex: 5
}, {
string: "orange_0",
waterColor: [ 228, 89, 0, 255 ],
waterTop: [ 244, 128, 21, 255 ],
imgFinishIndex: 9
}, {
string: "green_1",
waterColor: [ 25, 117, 0, 255 ],
waterTop: [ 31, 135, 2, 255 ],
imgFinishIndex: 11
}, {
string: "blue_2",
waterColor: [ 22, 22, 191, 255 ],
waterTop: [ 44, 71, 187, 255 ],
imgFinishIndex: 6
}, {
string: "brown_1",
waterColor: [ 212, 159, 132, 255 ],
waterTop: [ 212, 159, 132, 255 ],
imgFinishIndex: 7
}, {
string: "green_2",
waterColor: [ 1, 206, 184, 255 ],
waterTop: [ 10, 217, 195, 255 ],
imgFinishIndex: 1
}, {
string: "blue_0",
waterColor: [ 1, 152, 216, 255 ],
waterTop: [ 30, 178, 243, 255 ],
imgFinishIndex: 4
}, {
string: "black_0",
waterColor: [ 5, 2, 14, 255 ],
waterTop: [ 5, 2, 14, 255 ],
imgFinishIndex: 2
} ];
i.getWaterColorConfig = function() {
return n.default.isOpenNewSkin() ? i.GLWaterNewColor : i.GLWaterColor;
};
cc._RF.pop();
}, {
"../GLWaterSortFeat": "GLWaterSortFeat"
} ],
GLWaterDeadCheck: [ function(t, e, i) {
"use strict";
cc._RF.push(e, "a2f0ax5e65KaaJjR4QoIYfp", "GLWaterDeadCheck");
Object.defineProperty(i, "__esModule", {
value: !0
});
i.GLWaterDeadCheck = void 0;
var n = t("./GLWaterItem"), a = function() {
function t() {}
t.collectTubes = function(t) {
var e = null == t ? void 0 : t.itemArr;
if (!e || !Array.isArray(e) || 0 === e.length) return [];
for (var i = [], a = 0; a < e.length; a++) {
var r = e[a];
if (r && cc.isValid(r)) {
var o = r.getComponent(n.GLWaterItem);
if (o) {
var s = o.getData();
if (s) {
for (var l = Array.isArray(s.waterData) ? s.waterData : [], c = [], u = 0; u < l.length; u++) -1 !== l[u] && c.push(l[u]);
var h = "number" == typeof s.tubeLen ? s.tubeLen : 4;
i.push({
tubeLen: h,
water: c,
isLock: !!s.isLock
});
}
}
}
}
return i;
};
t.isTubeDone = function(t) {
if (t.isLock) return !0;
if (0 === t.water.length) return !0;
if (t.water.length !== t.tubeLen) return !1;
for (var e = t.water[0], i = 1; i < t.water.length; i++) if (t.water[i] !== e) return !1;
return !0;
};
t.isSolved = function(t) {
for (var e = 0; e < t.length; e++) if (!this.isTubeDone(t[e])) return !1;
return !0;
};
t.hasAnyMove = function(t) {
for (var e = 0; e < t.length; e++) {
var i = t[e];
if (!i.isLock && 0 !== i.water.length && !this.isTubeDone(i)) for (var n = 0; n < t.length; n++) if (e !== n) {
var a = t[n];
if (!(a.isLock || a.tubeLen - a.water.length <= 0)) {
if (0 === a.water.length) return !0;
if (a.water[0] === i.water[0]) return !0;
}
}
}
return !1;
};
t.isDead = function(t) {
var e = this.describeTubes(t);
if (this.isSolved(t)) {
console.log("[GLWaterDeadCheck] 已完成，非死局 " + e);
return !1;
}
if (!this.hasAnyMove(t)) {
console.log("[GLWaterDeadCheck] 无合法倒水 → 死局（情况1） " + e);
return !0;
}
var i = this.findCyclePairs(t);
if (1 === i.length || 2 === i.length) {
for (var n = [], a = 0; a < i.length; a++) {
n[i[a][0]] = !0;
n[i[a][1]] = !0;
}
for (var r = !0, o = 0; o < t.length; o++) if (!n[o] && this.isOperable(t, o)) {
r = !1;
break;
}
if (r) {
console.log("[GLWaterDeadCheck] 仅 " + i.length + " 对来回倒、其余管皆不可操作 → 死局（情况2） " + e);
return !0;
}
}
console.log("[GLWaterDeadCheck] 非死局 " + e);
return !1;
};
t.describeTubes = function(t) {
var e = t.map(function(t) {
return (t.isLock ? "L" : "") + t.tubeLen + ":[" + t.water.join(",") + "]";
}), i = this.countPourableBottles(t);
return "(共" + t.length + "管/可倒水" + i + "管) " + e.join(" ");
};
t.canPourFrom = function(t, e) {
var i = t[e];
if (!i || i.isLock || 0 === i.water.length) return !1;
if (this.isTubeDone(i)) return !1;
for (var n = i.water[0], a = 0; a < t.length; a++) if (a !== e) {
var r = t[a];
if (!r.isLock && !(r.tubeLen - r.water.length <= 0 || 0 !== r.water.length && r.water[0] !== n)) return !0;
}
return !1;
};
t.countPourableBottles = function(t) {
for (var e = 0, i = 0; i < t.length; i++) this.canPourFrom(t, i) && e++;
return e;
};
t.findCyclePairs = function(t) {
for (var e = this, i = new Map(), n = 0; n < t.length; n++) {
var a = t[n];
if (a && !a.isLock && 0 !== a.water.length && !this.isTubeDone(a)) {
var r = a.water[0], o = i.get(r);
o ? o.push(n) : i.set(r, [ n ]);
}
}
var s = [];
i.forEach(function(i) {
2 === i.length && e.isCleanTwoCycle(t, i[0], i[1]) && s.push([ i[0], i[1] ]);
});
return s;
};
t.canBePouredInto = function(t, e) {
var i = t[e];
if (!i || i.isLock) return !1;
if (i.tubeLen - i.water.length <= 0) return !1;
for (var n = 0; n < t.length; n++) if (n !== e) {
var a = t[n];
if (a && !a.isLock && 0 !== a.water.length && !this.isTubeDone(a) && (0 === i.water.length || a.water[0] === i.water[0])) return !0;
}
return !1;
};
t.isOperable = function(t, e) {
return this.canPourFrom(t, e) || this.canBePouredInto(t, e);
};
t.topRunLen = function(t) {
for (var e = t.water[0], i = 1; i < t.water.length && t.water[i] === e; ) i++;
return i;
};
t.spaceOf = function(t) {
return t.tubeLen - t.water.length;
};
t.isCleanTwoCycle = function(t, e, i) {
var n = t[e], a = t[i];
if (!n || !a) return !1;
var r = this.topRunLen(n), o = this.topRunLen(a), s = this.spaceOf(n), l = this.spaceOf(a);
return 0 === s && l > 0 && r > l || 0 === l && s > 0 && o > s;
};
return t;
}();
i.GLWaterDeadCheck = a;
cc._RF.pop();
}, {
"./GLWaterItem": "GLWaterItem"
} ],
GLWaterDianzanEffectTraitCtrl: [ function(t, e, i) {
"use strict";
cc._RF.push(e, "9a1dew/2hlL2awt8jmPUf1a", "GLWaterDianzanEffectTraitCtrl");
var n = this && this.__values || function(t) {
var e = "function" == typeof Symbol && Symbol.iterator, i = e && t[e], n = 0;
if (i) return i.call(t);
if (t && "number" == typeof t.length) return {
next: function() {
t && n >= t.length && (t = void 0);
return {
value: t && t[n++],
done: !t
};
}
};
throw new TypeError(e ? "Object is not iterable." : "Symbol.iterator is not defined.");
};
Object.defineProperty(i, "__esModule", {
value: !0
});
i.GLWaterDianzanEffectTraitCtrl = void 0;
var a = t("../GLWaterItem"), r = t("../GLWaterSortFeat"), o = function() {
function t() {
this._colorSegmentsMap = new Map();
this._lastCompletedColor = -1;
this._dianzanNode = null;
this._parentNode = null;
this._lastCompletedTube = null;
this._hasCalculated = !1;
}
t.getInstance = function() {
this._instance || (this._instance = new t());
return this._instance;
};
t.prototype.isOpen = function() {
return r.GLWaterSortFeature.isOpen(r.GLWaterSortFeat2.GLWaterDianzanEffect);
};
t.prototype.init = function(t) {
this._parentNode = t;
this._colorSegmentsMap.clear();
this._lastCompletedColor = -1;
this._lastCompletedTube = null;
this._hasCalculated = !1;
this.loadSegmentData();
};
t.prototype.destroy = function() {
if (this._dianzanNode && cc.isValid(this._dianzanNode)) {
this._dianzanNode.destroy();
this._dianzanNode = null;
}
this._colorSegmentsMap.clear();
this._lastCompletedColor = -1;
this._lastCompletedTube = null;
this._parentNode = null;
this._hasCalculated = !1;
};
t.prototype.calculateColorSegments = function(t) {
var e, i, r, o, s;
if (this.isOpen()) if (this._hasCalculated && this._colorSegmentsMap.size > 0) console.log("[GLWaterDianzanEffectTraitCtrl] 使用已有的颜色分段数据:", this.getSegmentsInfo()); else if (this.loadSegmentData()) console.log("[GLWaterDianzanEffectTraitCtrl] 从持久化存储加载颜色分段数据:", this.getSegmentsInfo()); else {
this._colorSegmentsMap.clear();
if (t && 0 !== t.length) {
try {
for (var l = n(t), c = l.next(); !c.done; c = l.next()) {
var u = c.value;
if (u && cc.isValid(u)) {
var h = u.getComponent(a.GLWaterItem);
if (h && (null === (s = h.getData()) || void 0 === s || !s.isLock)) {
var d = h.getWaterData();
if (d && 0 !== d.length) {
var p = -1;
try {
for (var f = (r = void 0, n(d)), g = f.next(); !g.done; g = f.next()) {
var v = g.value;
if (-1 !== v) {
if (v !== p) {
var m = this._colorSegmentsMap.get(v) || 0;
this._colorSegmentsMap.set(v, m + 1);
}
p = v;
} else p = -1;
}
} catch (t) {
r = {
error: t
};
} finally {
try {
g && !g.done && (o = f.return) && o.call(f);
} finally {
if (r) throw r.error;
}
}
}
}
}
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
this._hasCalculated = !0;
this.saveSegmentData();
console.log("[GLWaterDianzanEffectTraitCtrl] 颜色分段统计:", this.getSegmentsInfo());
}
}
};
t.prototype.saveSegmentData = function() {
try {
var e = {};
this._colorSegmentsMap.forEach(function(t, i) {
e[i] = t;
});
cc.sys.localStorage.setItem(t.STORAGE_KEY, JSON.stringify(e));
console.log("[GLWaterDianzanEffectTraitCtrl] 分段数据已持久化");
} catch (t) {
console.error("[GLWaterDianzanEffectTraitCtrl] 持久化分段数据失败:", t);
}
};
t.prototype.loadSegmentData = function() {
try {
var e = cc.sys.localStorage.getItem(t.STORAGE_KEY);
if (!e) return !1;
var i = JSON.parse(e);
if (!i || "object" != typeof i) return !1;
this._colorSegmentsMap.clear();
for (var n in i) {
var a = parseInt(n);
isNaN(a) || this._colorSegmentsMap.set(a, i[n]);
}
this._hasCalculated = !0;
return this._colorSegmentsMap.size > 0;
} catch (t) {
console.error("[GLWaterDianzanEffectTraitCtrl] 加载持久化分段数据失败:", t);
return !1;
}
};
t.prototype.clearSegmentData = function() {
this._colorSegmentsMap.clear();
this._hasCalculated = !1;
try {
cc.sys.localStorage.removeItem(t.STORAGE_KEY);
console.log("[GLWaterDianzanEffectTraitCtrl] 分段数据已清除");
} catch (t) {
console.error("[GLWaterDianzanEffectTraitCtrl] 清除分段数据失败:", t);
}
};
t.prototype.getColorName = function(e) {
return t.COLOR_NAMES[e] || "未知颜色(" + e + ")";
};
t.prototype.getSegmentsInfo = function() {
var t = this, e = [];
this._colorSegmentsMap.forEach(function(i, n) {
e.push(t.getColorName(n) + ": " + i + "段");
});
return e.join(", ");
};
t.prototype.setLastCompletedTube = function(t) {
if (this.isOpen()) {
this._lastCompletedTube = t;
var e = t.getReallyWaterData();
e && e.length > 0 && (this._lastCompletedColor = e[0]);
}
};
t.prototype.checkAndPlayDianzanEffect = function() {
if (this.isOpen()) if (-1 !== this._lastCompletedColor) {
var t = this._colorSegmentsMap.get(this._lastCompletedColor) || 0;
console.log("[GLWaterDianzanEffectTraitCtrl] 完成颜色" + this._lastCompletedColor + "，原始分段数: " + t);
t >= 3 && this.playDianzanAnimation();
this._lastCompletedColor = -1;
} else console.log("[GLWaterDianzanEffectTraitCtrl] 没有记录到完成的颜色");
};
t.prototype.playDianzanAnimation = function() {
if (this._parentNode && cc.isValid(this._parentNode)) {
var t = cc.v2(0, 0);
if (this._lastCompletedTube && cc.isValid(this._lastCompletedTube.node)) {
var e = this._lastCompletedTube.node.convertToWorldSpaceAR(cc.v2(0, 0));
t = this._parentNode.convertToNodeSpaceAR(e);
}
this.loadAndPlayDianzan(t);
} else console.warn("[GLWaterDianzanEffectTraitCtrl] 父节点无效，无法播放点赞动画");
};
t.prototype.loadAndPlayDianzan = function(t) {
var e, i = this, n = cc.assetManager.getBundle("gl_watersort");
if (n) this.instantiateDianzan(n, t); else {
console.warn("[GLWaterDianzanEffectTraitCtrl] gl_watersort bundle未加载");
var a = window.GL, r = "gl_watersort";
(null === (e = null == a ? void 0 : a.gamelobby) || void 0 === e ? void 0 : e.getRemoteBundleBaseUrl) && (r = a.gamelobby.getRemoteBundleBaseUrl(r));
cc.assetManager.loadBundle(r, function(e, n) {
e ? console.error("[GLWaterDianzanEffectTraitCtrl] 加载bundle失败:", e) : i.instantiateDianzan(n, t);
});
}
};
t.prototype.instantiateDianzan = function(t, e) {
var i = this;
t.load("prefabs/GLWaterItemDianzan", cc.Prefab, function(t, n) {
if (t) console.error("[GLWaterDianzanEffectTraitCtrl] 加载点赞预制体失败:", t); else if (i._parentNode && cc.isValid(i._parentNode)) {
var a = cc.instantiate(n);
a.parent = i._parentNode;
a.setPosition(e.x, e.y + 100);
a.active = !0;
var r = a.getComponent(sp.Skeleton);
if (r) {
r.setAnimation(0, "in", !1);
r.setCompleteListener(function() {
r.setCompleteListener(null);
cc.isValid(a) && a.destroy();
});
} else a.runAction(cc.sequence(cc.delayTime(1), cc.callFunc(function() {
cc.isValid(a) && a.destroy();
})));
console.log("[GLWaterDianzanEffectTraitCtrl] 播放点赞动画，位置:", e);
} else console.warn("[GLWaterDianzanEffectTraitCtrl] 父节点已失效");
});
};
t.prototype.findCompletedColor = function(t) {
var e, i;
if (!t || 0 === t.length) return -1;
try {
for (var r = n(t), o = r.next(); !o.done; o = r.next()) {
var s = o.value;
if (s && cc.isValid(s)) {
var l = s.getComponent(a.GLWaterItem);
if (l && l.checkIsFinish() && !l.isPlayUp) {
var c = l.getReallyWaterData();
if (c && c.length > 0) {
this._lastCompletedTube = l;
return c[0];
}
}
}
}
} catch (t) {
e = {
error: t
};
} finally {
try {
o && !o.done && (i = r.return) && i.call(r);
} finally {
if (e) throw e.error;
}
}
return -1;
};
t._instance = null;
t.STORAGE_KEY = "GLWaterDianzanSegmentData";
t.COLOR_NAMES = {
0: "红色",
1: "黄色",
2: "浅绿色",
3: "蓝色",
4: "粉色",
5: "紫色",
6: "玫红色",
7: "橙色",
8: "深绿色",
9: "深蓝色",
10: "肤色",
11: "青绿色",
12: "天蓝色",
13: "黑色"
};
return t;
}();
i.GLWaterDianzanEffectTraitCtrl = o;
cc._RF.pop();
}, {
"../GLWaterItem": "GLWaterItem",
"../GLWaterSortFeat": "GLWaterSortFeat"
} ],
GLWaterDieFirstUnlockAndTishiTraitCtrl: [ function(t, e, i) {
"use strict";
cc._RF.push(e, "a7c3eiRTytNbpwYLl+LDTpk", "GLWaterDieFirstUnlockAndTishiTraitCtrl");
Object.defineProperty(i, "__esModule", {
value: !0
});
var n = t("../GLWaterSortFeat"), a = function() {
function t() {
this._featureName = "GLWaterDieFirstUnlockAndTishi";
}
t.getInstance = function() {
null == this._instance && (this._instance = new t());
return this._instance;
};
t.prototype.isOpen = function() {
return n.GLWaterSortFeature.isOpen(n.GLWaterSortFeat2.GLWaterDieFirstUnlockAndTishi);
};
t._instance = null;
return t;
}();
i.default = a;
cc._RF.pop();
}, {
"../GLWaterSortFeat": "GLWaterSortFeat"
} ],
GLWaterFinishTipsCtrl: [ function(t, e, i) {
"use strict";
cc._RF.push(e, "c4e8fGiaz1Mfp8BorPE1eb3", "GLWaterFinishTipsCtrl");
var n = this && this.__values || function(t) {
var e = "function" == typeof Symbol && Symbol.iterator, i = e && t[e], n = 0;
if (i) return i.call(t);
if (t && "number" == typeof t.length) return {
next: function() {
t && n >= t.length && (t = void 0);
return {
value: t && t[n++],
done: !t
};
}
};
throw new TypeError(e ? "Object is not iterable." : "Symbol.iterator is not defined.");
};
Object.defineProperty(i, "__esModule", {
value: !0
});
var a = t("./GlWaterMain"), r = t("./GLWaterItem"), o = t("./GLWaterSortEventTool"), s = t("./GLWaterSortFeat"), l = function() {
function t() {
this._awaitingLayoutBaseline = !1;
this._baselineStabilizerTid = null;
this._stabilizerTubePeak = 0;
this._stabilizerSamePeakFrames = 0;
this._stabilizerTicks = 0;
this._lastFinishCount = 0;
this._tubeFinishCache = null;
this._lastNewlyCompletedTubeIndices = [];
this._finishTipsNode = null;
this._finishAnimPrefab = null;
this._bottleShakeTimerByBottle = new Map();
this._bottleLayoutScaleBeforeFinishAnim = new Map();
this._finishAnimNodeByBottle = new Map();
}
t.prototype.hasWaterFinishTipsShake = function() {
return !!this.isOpen() && this._bottleShakeTimerByBottle.size > 0;
};
t.getInstance = function() {
null == this._instance && (this._instance = new t());
return this._instance;
};
t.prototype.isOpen = function() {
return s.default.isOpenFinishTips();
};
t.prototype.getCompletedCount = function(t) {
return t && cc.isValid(t.node) ? t.countCompletedTubes() : 0;
};
t.prototype.resetTubeFinishCache = function() {
if (this.isOpen()) {
this._cancelBaselineStabilizer();
this._awaitingLayoutBaseline = !1;
this._awaitingLayoutBaseline = !0;
this._stabilizerTubePeak = 0;
this._stabilizerSamePeakFrames = 0;
this._stabilizerTicks = 0;
this._tubeFinishCache = null;
this._lastFinishCount = 0;
this._lastNewlyCompletedTubeIndices = [];
this._clearBottleShakePending();
} else {
this._cancelBaselineStabilizer();
this._awaitingLayoutBaseline = !1;
this._tubeFinishCache = null;
this._lastFinishCount = 0;
this._lastNewlyCompletedTubeIndices = [];
this._clearBottleShakePending();
}
};
t.prototype.syncBaselineAndRefresh = function(t) {
this.isOpen() && t && cc.isValid(t.node) && (this._awaitingLayoutBaseline ? this._startBaselineStabilizer(t) : this._applyBaselineSnapshot(t));
};
t.prototype.notifyAfterPourSaved = function(t) {
if (this.isOpen() && t && cc.isValid(t.node)) {
var e = t.snapshotTubesCheckIsFinish();
this._lastNewlyCompletedTubeIndices = [];
if (null != this._tubeFinishCache) {
for (var i = [], n = 0; n < e.length; n++) e[n] && !this._tubeFinishCache[n] && i.push(n);
this._lastNewlyCompletedTubeIndices = i.slice();
var a = this.getCompletedCount(t);
if (i.length > 0 || a > this._lastFinishCount) {
if (i.length > 0) for (n = 0; n < i.length; n++) {
var r = t.getTubeNodeByIndex(i[n]);
r && this._scheduleBottleShakeDelayed(r);
} else o.GLWaterSortEvent.dispatchEvent(o.GlWaterSortEventName.FINISH_TIPS_REFRESH, !0);
this._lastFinishCount = a;
} else o.GLWaterSortEvent.dispatchEvent(o.GlWaterSortEventName.FINISH_TIPS_REFRESH, !1);
this._tubeFinishCache = e.slice();
} else this.syncBaselineAndRefresh(t);
}
};
t.prototype.getLastNewlyCompletedTubeIndices = function() {
return this._lastNewlyCompletedTubeIndices.slice();
};
t.prototype.stopAllBottleFinishTipsEffects = function(e) {
if (this.isOpen() && e && cc.isValid(e.node)) for (var i = 0; ;i++) {
var n = e.getTubeNodeByIndex(i);
if (!n) break;
if (cc.isValid(n)) {
var a = this._bottleShakeTimerByBottle.get(n), r = this._bottleLayoutScaleBeforeFinishAnim.has(n), o = this._finishAnimNodeByBottle.has(n), s = null != a || r || o;
if (null != a) {
clearTimeout(a);
this._bottleShakeTimerByBottle.delete(n);
}
if (s) {
cc.Tween.stopAllByTarget(n);
this._stopFinishAnimForBottle(n);
var l = this._bottleLayoutScaleBeforeFinishAnim.get(n), c = t._layoutScaleForFinishEffectCleanup(e, i, l);
n.scale = c;
n.angle = 0;
this._bottleLayoutScaleBeforeFinishAnim.delete(n);
}
}
}
};
t.prototype.ensureLoaded = function(t) {
var e, i = this;
if (this.isOpen() && (!this._finishTipsNode || !cc.isValid(this._finishTipsNode)) && t && cc.isValid(t.node)) {
var n = "gl_watersort", a = window.GL;
(null === (e = null == a ? void 0 : a.gamelobby) || void 0 === e ? void 0 : e.getRemoteBundleBaseUrl) && (n = a.gamelobby.getRemoteBundleBaseUrl(n));
cc.assetManager.loadBundle(n, function(e, n) {
i.isOpen() && (e ? console.error("[GLWaterFinishTipsCtrl] Failed to load bundle [gl_watersort]:", e) : n.load("prefabs/GLWaterFinishTips", function(e, n) {
var a, r;
if (i.isOpen()) if (e) console.error("[GLWaterFinishTipsCtrl] Failed to load GLWaterFinishTips prefab:", e); else if (n instanceof cc.Prefab) {
if (t && cc.isValid(t.node)) {
i._finishTipsNode = cc.instantiate(n);
var s = null === (r = null === (a = t.node) || void 0 === a ? void 0 : a.getChildByName("UIPanel")) || void 0 === r ? void 0 : r.getChildByName("Content");
if (cc.isValid(i._finishTipsNode) && cc.isValid(s)) {
i._finishTipsNode.parent = s;
i._finishTipsNode.active = !0;
i._finishTipsNode.setSiblingIndex(s.children.length - 1);
console.log("[GLWaterFinishTipsCtrl] GLWaterFinishTips prefab加载完成");
t.scheduleOnce(function() {
o.GLWaterSortEvent.dispatchEvent(o.GlWaterSortEventName.FINISH_TIPS_REFRESH, !1);
}, 0);
}
}
} else console.error("[GLWaterFinishTipsCtrl] Loaded resource is not a Prefab");
}));
});
}
};
t.prototype._clearBottleShakePending = function() {
var t, e;
this._bottleShakeTimerByBottle.forEach(function(t) {
clearTimeout(t);
});
this._bottleShakeTimerByBottle.clear();
this._bottleLayoutScaleBeforeFinishAnim.clear();
try {
for (var i = n(Array.from(this._finishAnimNodeByBottle.keys())), a = i.next(); !a.done; a = i.next()) {
var r = a.value;
this._stopFinishAnimForBottle(r);
}
} catch (e) {
t = {
error: e
};
} finally {
try {
a && !a.done && (e = i.return) && e.call(i);
} finally {
if (t) throw t.error;
}
}
};
t.prototype._stopFinishAnimForBottle = function(t) {
if (t) {
var e = this._finishAnimNodeByBottle.get(t);
this._finishAnimNodeByBottle.delete(t);
if (e && cc.isValid(e)) {
cc.Tween.stopAllByTarget(e);
var i = e.getComponent(sp.Skeleton);
if (i && cc.isValid(i)) {
i.setCompleteListener(null);
i.clearTracks();
}
e.destroy();
}
}
};
t.prototype._cancelBaselineStabilizer = function() {
if (null != this._baselineStabilizerTid) {
clearTimeout(this._baselineStabilizerTid);
this._baselineStabilizerTid = null;
}
};
t.prototype._startBaselineStabilizer = function(e) {
var i = this;
if (e && cc.isValid(e.node)) {
this._cancelBaselineStabilizer();
this._stabilizerTubePeak = 0;
this._stabilizerSamePeakFrames = 0;
this._stabilizerTicks = 0;
var n = t._STABILIZER_FRAME_MS, a = t._STABILIZER_STABLE_FRAMES, r = t._STABILIZER_MAX_TICKS, o = function() {
i._baselineStabilizerTid = null;
if (i.isOpen() && e && cc.isValid(e.node)) {
var t = e.snapshotTubesCheckIsFinish().length;
i._stabilizerTicks++;
if (t > i._stabilizerTubePeak) {
i._stabilizerTubePeak = t;
i._stabilizerSamePeakFrames = 0;
} else t === i._stabilizerTubePeak && t > 0 ? i._stabilizerSamePeakFrames++ : i._stabilizerSamePeakFrames = 0;
if (i._stabilizerSamePeakFrames >= a || i._stabilizerTicks >= r) {
i._awaitingLayoutBaseline = !1;
i._applyBaselineSnapshot(e);
} else i._baselineStabilizerTid = setTimeout(o, n);
} else i._awaitingLayoutBaseline = !1;
};
this._baselineStabilizerTid = setTimeout(o, n);
} else this._awaitingLayoutBaseline = !1;
};
t.prototype._applyBaselineSnapshot = function(t) {
var e = t.snapshotTubesCheckIsFinish();
this.handleFinishRevert(t, e, this._tubeFinishCache);
this._tubeFinishCache = e.slice();
this._lastFinishCount = this.getCompletedCount(t);
this._lastNewlyCompletedTubeIndices = [];
o.GLWaterSortEvent.dispatchEvent(o.GlWaterSortEventName.FINISH_TIPS_REFRESH, !1);
};
t.prototype.handleFinishRevert = function(e, i, n) {
if (i && n) for (var a = 0; a < i.length; a++) if (!i[a] && n[a]) {
var r = e.getTubeNodeByIndex(a);
if (!r || !cc.isValid(r)) continue;
var o = this._bottleShakeTimerByBottle.get(r);
if (null != o) {
clearTimeout(o);
this._bottleShakeTimerByBottle.delete(r);
}
cc.Tween.stopAllByTarget(r);
this._stopFinishAnimForBottle(r);
var s = this._bottleLayoutScaleBeforeFinishAnim.get(r), l = t._layoutScaleForFinishEffectCleanup(e, a, s);
r.scale = l;
r.angle = 0;
this._bottleLayoutScaleBeforeFinishAnim.delete(r);
}
};
t._layoutScaleForFinishEffectCleanup = function(e, i, n) {
var a = t._readPeerLayoutScale(e, i);
return null != a ? a : null != n && n > .05 ? n : .89;
};
t._readPeerLayoutScale = function(t, e) {
for (var i = 0; ;i++) {
var n = t.getTubeNodeByIndex(i);
if (!n) break;
if (i !== e && cc.isValid(n) && n.scale > .15) return n.scale;
}
return null;
};
t.prototype._scheduleBottleShakeDelayed = function(e) {
var i = this;
if (e && cc.isValid(e)) {
var n = this._bottleShakeTimerByBottle, a = n.get(e);
a && clearTimeout(a);
var o = e.scale;
o > .05 && this._bottleLayoutScaleBeforeFinishAnim.set(e, o);
var s = 1e3 * t._BOTTLE_SHAKE_DELAY_SEC, l = setTimeout(function() {
n.delete(e);
if (i.isOpen()) {
if (e && cc.isValid(e)) {
var t = e.getComponent(r.GLWaterItem);
if (!t || !t.checkIsFinish()) {
i._bottleLayoutScaleBeforeFinishAnim.delete(e);
return;
}
i.playBottleShakeScaleEffect(e);
}
} else i._bottleLayoutScaleBeforeFinishAnim.delete(e);
}, s);
n.set(e, l);
}
};
t._playBezierToParentOrigin = function(e, i) {
if (e && cc.isValid(e)) {
cc.Tween.stopAllByTarget(e);
var n = e.x, a = e.y, r = cc.v2(0, 0), o = r.x - n, s = r.y - a, l = Math.sqrt(o * o + s * s);
if (l < 1) {
e.setPosition(r);
null == i || i();
} else {
var c = 1 / l, u = s * c, h = -o * c;
if (h > 0) {
u = -u;
h = -h;
}
if (Math.abs(h) < 1e-5) {
u = 0;
h = -1;
}
var d = l * t._FINISH_BEZIER_BULGE, p = cc.v2(n + .28 * o + u * d, a + .28 * s + h * d), f = cc.v2(n + .72 * o + u * d, a + .72 * s + h * d), g = l * t._FINISH_BEZIER_LEN_SCALE, v = Math.min(t._FINISH_BEZIER_DUR_MAX, Math.max(t._FINISH_BEZIER_DUR_MIN, g));
cc.tween(e).bezierTo(v, p, f, r).call(function() {
return null == i ? void 0 : i();
}).start();
}
} else null == i || i();
};
t._playGameplayIconArrivePulse = function(e) {
if (s.default.isOpenFinishTips() && e && cc.isValid(e)) {
var i = e.getChildByName("content"), n = i && i.getChildByName("gameplay_icon");
if (n && cc.isValid(n)) {
var a = t._GAMEPLAY_ICON_PULSE_DT;
cc.Tween.stopAllByTarget(n);
n.scale = 1;
cc.tween(n).to(a, {
scale: 1.3
}).to(a, {
scale: 1
}).start();
}
}
};
t.prototype.playBottleShakeScaleEffect = function(e, i) {
if (e && cc.isValid(e)) {
e.scale = 1;
cc.Tween.stopAllByTarget(e);
for (var n = e.angle, a = e.scale, r = t._BOTTLE_SHAKE_STEP, o = [ 2, -2, 2, -2, 2, -2, 2, -2 ], s = n + o[o.length - 1], l = cc.tween(e), c = 0; c < o.length; c++) l = l.to(r, {
angle: n + o[c],
scale: a
});
(l = l.to(r, {
angle: s,
scale: 1.3 * a
}).to(r, {
angle: s,
scale: 0 * a
})).start();
this.playFinishAnimOnBottle(e, i);
} else null == i || i();
};
t.prototype.playFinishAnimOnBottle = function(e, i) {
var n = this;
if (e && cc.isValid(e)) {
var r = function(r) {
if (n.isOpen()) {
var s = a.GlWaterMain.Instance;
if (s && s.isGuoGUan) null == i || i(); else if (e && cc.isValid(e)) {
n._stopFinishAnimForBottle(e);
var l = cc.instantiate(r), c = n._finishTipsNode;
if (c && cc.isValid(c)) {
var u = e.convertToWorldSpaceAR(cc.v2(0, 0)), h = c.convertToNodeSpaceAR(u);
l.parent = c;
l.setPosition(h);
l.setSiblingIndex(c.children.length - 1);
}
var d = l.getComponent(sp.Skeleton);
if (d) {
n._finishAnimNodeByBottle.set(e, l);
d.clearTracks();
d.setAnimation(0, "in_1", !1);
d.addAnimation(0, "in_2", !1, 0);
var p = !1;
d.setCompleteListener(function(a) {
var r, s = null === (r = null == a ? void 0 : a.animation) || void 0 === r ? void 0 : r.name;
if ("in_2" !== s) {
if ("in_3" === s) if (n.isOpen()) {
d.setCompleteListener(null);
n._finishAnimNodeByBottle.delete(e);
cc.isValid(l) && l.destroy();
null == i || i();
} else {
d.setCompleteListener(null);
n._finishAnimNodeByBottle.delete(e);
cc.isValid(l) && l.destroy();
null == i || i();
}
} else if (!p && cc.isValid(l)) {
p = !0;
if (!n.isOpen()) {
d.setCompleteListener(null);
n._finishAnimNodeByBottle.delete(e);
cc.isValid(l) && l.destroy();
null == i || i();
return;
}
t._playBezierToParentOrigin(l, function() {
if (n.isOpen() && cc.isValid(l) && d && cc.isValid(d)) {
var e = n._finishTipsNode;
e && cc.isValid(e) && t._playGameplayIconArrivePulse(e);
d.setAnimation(0, "in_3", !1);
o.GLWaterSortEvent.dispatchEvent(o.GlWaterSortEventName.FINISH_TIPS_REFRESH, !0);
}
});
}
});
} else {
console.error("[GLWaterFinishTipsCtrl] GLWaterFinishAnim 缺少 sp.Skeleton");
l.destroy();
null == i || i();
}
} else null == i || i();
} else null == i || i();
};
this._finishAnimPrefab && cc.isValid(this._finishAnimPrefab) ? r(this._finishAnimPrefab) : cc.assetManager.loadBundle("gl_watersort", function(t, e) {
if (n.isOpen()) if (t) {
console.error("[GLWaterFinishTipsCtrl] playFinishAnimOnBottle 加载 bundle 失败:", t);
null == i || i();
} else e.load("prefabs/GLWaterFinishAnim", function(t, e) {
if (n.isOpen()) if (!t && e instanceof cc.Prefab) {
var o = a.GlWaterMain.Instance;
if (o && o.isGuoGUan) null == i || i(); else {
n._finishAnimPrefab = e;
r(e);
}
} else {
console.error("[GLWaterFinishTipsCtrl] playFinishAnimOnBottle 加载预制失败:", t);
null == i || i();
} else null == i || i();
}); else null == i || i();
});
} else null == i || i();
};
t._instance = null;
t._STABILIZER_FRAME_MS = 33;
t._STABILIZER_STABLE_FRAMES = 5;
t._STABILIZER_MAX_TICKS = 200;
t._BOTTLE_SHAKE_DELAY_SEC = 1.25;
t._BOTTLE_SHAKE_STEP = .07;
t._FINISH_BEZIER_LEN_SCALE = .001;
t._FINISH_BEZIER_DUR_MIN = .28;
t._FINISH_BEZIER_DUR_MAX = .62;
t._FINISH_BEZIER_BULGE = .32;
t._GAMEPLAY_ICON_PULSE_DT = .1;
return t;
}();
i.default = l;
cc._RF.pop();
}, {
"./GLWaterItem": "GLWaterItem",
"./GLWaterSortEventTool": "GLWaterSortEventTool",
"./GLWaterSortFeat": "GLWaterSortFeat",
"./GlWaterMain": "GlWaterMain"
} ],
GLWaterFinishTips: [ function(t, e, i) {
"use strict";
cc._RF.push(e, "ee09aSdg6tNnqBjXigmH+X9", "GLWaterFinishTips");
var n, a = this && this.__extends || (n = function(t, e) {
return (n = Object.setPrototypeOf || {
__proto__: []
} instanceof Array && function(t, e) {
t.__proto__ = e;
} || function(t, e) {
for (var i in e) Object.prototype.hasOwnProperty.call(e, i) && (t[i] = e[i]);
})(t, e);
}, function(t, e) {
n(t, e);
function i() {
this.constructor = t;
}
t.prototype = null === e ? Object.create(e) : (i.prototype = e.prototype, new i());
}), r = this && this.__decorate || function(t, e, i, n) {
var a, r = arguments.length, o = r < 3 ? e : null === n ? n = Object.getOwnPropertyDescriptor(e, i) : n;
if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) o = Reflect.decorate(t, e, i, n); else for (var s = t.length - 1; s >= 0; s--) (a = t[s]) && (o = (r < 3 ? a(o) : r > 3 ? a(e, i, o) : a(e, i)) || o);
return r > 3 && o && Object.defineProperty(e, i, o), o;
};
Object.defineProperty(i, "__esModule", {
value: !0
});
var o = t("./GlWaterMain"), s = t("./GLWaterFinishTipsCtrl"), l = t("./GLWaterSortEventTool"), c = t("./GLWaterSortScene"), u = cc._decorator, h = u.ccclass, d = u.property, p = function(t) {
a(e, t);
function e() {
var e = null !== t && t.apply(this, arguments) || this;
e.content = null;
e.imgGouzi = null;
e.lblNum = null;
return e;
}
e.prototype.onLoad = function() {
var t = this;
l.GLWaterSortEvent.addListener(l.GlWaterSortEventName.FINISH_TIPS_REFRESH, this.onFinishTipsRefresh, this);
if (s.default.getInstance().isOpen() && !c.GlWaterSortScene.getInGuilde()) {
this.content.active = !0;
this.scheduleOnce(function() {
o.GlWaterMain.Instance ? t.lblNum.string = s.default.getInstance().getCompletedCount(o.GlWaterMain.Instance) + "" : t.lblNum.string = "0";
t.imgGouzi.active = !1;
}, 0);
} else this.content.active = !1;
};
e.prototype.onDestroy = function() {
l.GLWaterSortEvent.removeListener(l.GlWaterSortEventName.FINISH_TIPS_REFRESH, this.onFinishTipsRefresh, this);
};
e.prototype.onFinishTipsRefresh = function(t) {
var e = this;
void 0 === t && (t = !1);
if (s.default.getInstance().isOpen() && !c.GlWaterSortScene.getInGuilde()) {
this.content.active = !0;
if (t) {
this.lblNum.node.active = !1;
this.imgGouzi.active = !0;
cc.tween(this.node).delay(1).call(function() {
e.imgGouzi.active = !1;
e.lblNum.node.active = !0;
o.GlWaterMain.Instance && (e.lblNum.string = s.default.getInstance().getCompletedCount(o.GlWaterMain.Instance) + "");
}).start();
} else {
cc.tween(this.node).stop();
o.GlWaterMain.Instance && (this.lblNum.string = s.default.getInstance().getCompletedCount(o.GlWaterMain.Instance) + "");
this.imgGouzi.active = !1;
}
}
};
r([ d(cc.Node) ], e.prototype, "content", void 0);
r([ d(cc.Node) ], e.prototype, "imgGouzi", void 0);
r([ d(cc.Label) ], e.prototype, "lblNum", void 0);
return r([ h ], e);
}(cc.Component);
i.default = p;
cc._RF.pop();
}, {
"./GLWaterFinishTipsCtrl": "GLWaterFinishTipsCtrl",
"./GLWaterSortEventTool": "GLWaterSortEventTool",
"./GLWaterSortScene": "GLWaterSortScene",
"./GlWaterMain": "GlWaterMain"
} ],
GLWaterHighLightTips: [ function(t, e, i) {
"use strict";
cc._RF.push(e, "ae89bpjV6RCVquNV0nLKxO5", "GLWaterHighLightTips");
var n, a = this && this.__extends || (n = function(t, e) {
return (n = Object.setPrototypeOf || {
__proto__: []
} instanceof Array && function(t, e) {
t.__proto__ = e;
} || function(t, e) {
for (var i in e) Object.prototype.hasOwnProperty.call(e, i) && (t[i] = e[i]);
})(t, e);
}, function(t, e) {
n(t, e);
function i() {
this.constructor = t;
}
t.prototype = null === e ? Object.create(e) : (i.prototype = e.prototype, new i());
}), r = this && this.__decorate || function(t, e, i, n) {
var a, r = arguments.length, o = r < 3 ? e : null === n ? n = Object.getOwnPropertyDescriptor(e, i) : n;
if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) o = Reflect.decorate(t, e, i, n); else for (var s = t.length - 1; s >= 0; s--) (a = t[s]) && (o = (r < 3 ? a(o) : r > 3 ? a(e, i, o) : a(e, i)) || o);
return r > 3 && o && Object.defineProperty(e, i, o), o;
};
Object.defineProperty(i, "__esModule", {
value: !0
});
var o = t("./GLWaterSortEventTool"), s = t("./GLWaterSortFeat"), l = cc._decorator, c = l.ccclass, u = l.property, h = function(t) {
a(e, t);
function e() {
var e = null !== t && t.apply(this, arguments) || this;
e.skeleton = null;
return e;
}
e.prototype.onLoad = function() {
this.skeleton.node.active = !1;
o.GLWaterSortEvent.addListener(o.GlWaterSortEventName.HIGHLIGHT_TIPS, this.onHighLightTips, this);
};
e.prototype.onDestroy = function() {
o.GLWaterSortEvent.removeListener(o.GlWaterSortEventName.HIGHLIGHT_TIPS, this.onHighLightTips, this);
};
e.prototype.onHighLightTips = function() {
var t = this;
if (s.default.isOpenHighlightTipsEffect()) {
this.skeleton.node.active = !0;
this.skeleton.setAnimation(0, "in", !1);
this.skeleton.setCompleteListener(function() {
t.skeleton.setCompleteListener(null);
t.skeleton.clearTracks();
t.skeleton.node.active = !1;
});
}
};
r([ u(sp.Skeleton) ], e.prototype, "skeleton", void 0);
return r([ c ], e);
}(cc.Component);
i.default = h;
cc._RF.pop();
}, {
"./GLWaterSortEventTool": "GLWaterSortEventTool",
"./GLWaterSortFeat": "GLWaterSortFeat"
} ],
GLWaterHighlightAllPipetteableTubesTrait: [ function(t, e, i) {
"use strict";
cc._RF.push(e, "a5d1a/xup1C6YaoCXlVjvRX", "GLWaterHighlightAllPipetteableTubesTrait");
var n = this && this.__values || function(t) {
var e = "function" == typeof Symbol && Symbol.iterator, i = e && t[e], n = 0;
if (i) return i.call(t);
if (t && "number" == typeof t.length) return {
next: function() {
t && n >= t.length && (t = void 0);
return {
value: t && t[n++],
done: !t
};
}
};
throw new TypeError(e ? "Object is not iterable." : "Symbol.iterator is not defined.");
};
Object.defineProperty(i, "__esModule", {
value: !0
});
i.GLWaterHighlightAllPipetteableTubesTrait = void 0;
var a = t("../GLWaterItem"), r = function() {
function t() {
this._isTestMode = !1;
this._featureName = "gl_watersort_highlightAllPipetteableTubes";
this._highlightedTubeIndexes = [];
this.liziTimeScale = .2;
}
Object.defineProperty(t, "Instance", {
get: function() {
this._instance || (this._instance = new t());
return this._instance;
},
enumerable: !1,
configurable: !0
});
t.prototype.isOpen = function() {
return !!this._isTestMode || GL.Game.IsFeatureOpen(this._featureName);
};
t.prototype.highlightAllPipetteableTubes = function(t) {
var e, i;
if (this.isOpen()) {
this.clearAllHighlights(t);
var r = t.getAllCanCrashTubes();
if (r && 0 !== r.length) {
var o = t.getAllItems();
if (o && 0 !== o.length) {
var s = t.getReallyWaterData(), l = s.length > 0 ? s[0] : null;
try {
for (var c = n(r), u = c.next(); !u.done; u = c.next()) {
var h = u.value;
if (!(h < 0 || h >= o.length)) {
var d = o[h];
if (d && cc.isValid(d)) {
var p = d.getComponent(a.GLWaterItem);
if (p) {
p.lightPlay();
p.liZiPlay(this.liziTimeScale);
null !== l && p.changeLiziColor(l);
this._highlightedTubeIndexes.push(h);
}
}
}
}
} catch (t) {
e = {
error: t
};
} finally {
try {
u && !u.done && (i = c.return) && i.call(c);
} finally {
if (e) throw e.error;
}
}
}
}
}
};
t.prototype.clearAllHighlights = function(t) {
var e, i;
if (t) {
var r = t.getAllItems();
if (r && 0 !== r.length) {
try {
for (var o = n(this._highlightedTubeIndexes), s = o.next(); !s.done; s = o.next()) {
var l = s.value;
if (!(l < 0 || l >= r.length)) {
var c = r[l];
if (c && cc.isValid(c)) {
var u = c.getComponent(a.GLWaterItem);
if (u) {
u.hideLight();
u.hideLizi();
}
}
}
}
} catch (t) {
e = {
error: t
};
} finally {
try {
s && !s.done && (i = o.return) && i.call(o);
} finally {
if (e) throw e.error;
}
}
this._highlightedTubeIndexes = [];
} else this._highlightedTubeIndexes = [];
} else this._highlightedTubeIndexes = [];
};
t.prototype.checkCanHighlight = function(t) {
var e = t.getAllItems();
if (e && 0 !== e.length) {
for (var i = 0; i < e.length; i++) {
var n = e[i];
if (n && cc.isValid(n)) {
var r = n.getComponent(a.GLWaterItem);
if (r && r.isClick) {
this.highlightAllPipetteableTubes(r);
return !0;
}
}
}
this.clearAllHighlights(t);
return !1;
}
};
t._instance = null;
return t;
}();
i.GLWaterHighlightAllPipetteableTubesTrait = r;
cc._RF.pop();
}, {
"../GLWaterItem": "GLWaterItem"
} ],
GLWaterHighlightTipsEffectCtrl: [ function(t, e, i) {
"use strict";
cc._RF.push(e, "1af6c3yoi5LSJDGykYvV74d", "GLWaterHighlightTipsEffectCtrl");
Object.defineProperty(i, "__esModule", {
value: !0
});
var n = t("./GLWaterSortFeat"), a = function() {
function t() {
this._highlightTipsNode = null;
}
t.getInstance = function() {
null == this._instance && (this._instance = new t());
return this._instance;
};
t.prototype.isOpen = function() {
return n.default.isOpenHighlightTipsEffect();
};
t.prototype._resolveAttachAnchor = function(t) {
var e = null == t ? void 0 : t.btnLight;
if (!e || !cc.isValid(e)) return null;
var i = e.getChildByName("IconButtonHint"), n = null == i ? void 0 : i.getChildByName("Background"), a = null == n ? void 0 : n.getChildByName("Icon");
if (!a || !cc.isValid(a)) return null;
var r = a.getChildByName("ItemCornerPrefab");
return r && cc.isValid(r) ? {
parent: a,
itemCornerPrefab: r
} : null;
};
t.prototype.ensureLoaded = function(t) {
var e, i = this;
if (this.isOpen() && (!this._highlightTipsNode || !cc.isValid(this._highlightTipsNode)) && t && cc.isValid(t.node)) if (this._resolveAttachAnchor(t)) {
var n = "gl_watersort", a = window.GL;
(null === (e = null == a ? void 0 : a.gamelobby) || void 0 === e ? void 0 : e.getRemoteBundleBaseUrl) && (n = a.gamelobby.getRemoteBundleBaseUrl(n));
cc.assetManager.loadBundle(n, function(e, n) {
i.isOpen() && (e ? console.error("[GLWaterHighlightTipsEffectCtrl] 加载 bundle 失败:", e) : n.load("prefabs/GLWaterHighLightTips", cc.Prefab, function(e, n) {
if (i.isOpen()) if (e) console.error("[GLWaterHighlightTipsEffectCtrl] 加载预制体失败:", e); else if (n instanceof cc.Prefab) {
if (t && cc.isValid(t.node) && (!i._highlightTipsNode || !cc.isValid(i._highlightTipsNode))) {
var a = i._resolveAttachAnchor(t);
if (a) {
var r = a.parent, o = a.itemCornerPrefab;
if (cc.isValid(r) && cc.isValid(o)) {
i._highlightTipsNode = cc.instantiate(n);
i._highlightTipsNode.parent = r;
i._highlightTipsNode.setPosition(0, 0, 0);
i._highlightTipsNode.active = !0;
i._highlightTipsNode.setSiblingIndex(o.getSiblingIndex());
console.log("[GLWaterHighlightTipsEffectCtrl] GLWaterHighLightTips prefab 加载完成");
}
}
}
} else console.error("[GLWaterHighlightTipsEffectCtrl] 资源不是 Prefab");
}));
});
} else console.error("[GLWaterHighlightTipsEffectCtrl] 未找到 Icon/ItemCornerPrefab 挂载点");
};
t.prototype.destroyEffect = function() {
this._highlightTipsNode && cc.isValid(this._highlightTipsNode) && this._highlightTipsNode.destroy();
this._highlightTipsNode = null;
};
t._instance = null;
return t;
}();
i.default = a;
cc._RF.pop();
}, {
"./GLWaterSortFeat": "GLWaterSortFeat"
} ],
GLWaterItemCorner: [ function(t, e, i) {
"use strict";
cc._RF.push(e, "7a62bnlX09M6KBzxry9hY6g", "GLWaterItemCorner");
var n, a = this && this.__extends || (n = function(t, e) {
return (n = Object.setPrototypeOf || {
__proto__: []
} instanceof Array && function(t, e) {
t.__proto__ = e;
} || function(t, e) {
for (var i in e) Object.prototype.hasOwnProperty.call(e, i) && (t[i] = e[i]);
})(t, e);
}, function(t, e) {
n(t, e);
function i() {
this.constructor = t;
}
t.prototype = null === e ? Object.create(e) : (i.prototype = e.prototype, new i());
}), r = this && this.__decorate || function(t, e, i, n) {
var a, r = arguments.length, o = r < 3 ? e : null === n ? n = Object.getOwnPropertyDescriptor(e, i) : n;
if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) o = Reflect.decorate(t, e, i, n); else for (var s = t.length - 1; s >= 0; s--) (a = t[s]) && (o = (r < 3 ? a(o) : r > 3 ? a(e, i, o) : a(e, i)) || o);
return r > 3 && o && Object.defineProperty(e, i, o), o;
};
Object.defineProperty(i, "__esModule", {
value: !0
});
i.HsItemCornerVideoStyle = void 0;
var o, s = cc._decorator, l = s.ccclass, c = s.property;
(function(t) {
t[t.None = 0] = "None";
t[t.DEFAULT = 1] = "DEFAULT";
t[t.RED = 2] = "RED";
t[t.GREEN = 3] = "GREEN";
})(o = i.HsItemCornerVideoStyle || (i.HsItemCornerVideoStyle = {}));
var u = function(t) {
a(e, t);
function e() {
var e = null !== t && t.apply(this, arguments) || this;
e.imgVideo1 = null;
e.imgVideo2 = null;
e.txtNum2 = null;
e.imgVideo3 = null;
e.txtNum3 = null;
e.itemCornerVideoStyle = o.DEFAULT;
e.rewardNumber = 0;
return e;
}
e.prototype.initStyle = function(t, e) {
this.itemCornerVideoStyle = t;
this.rewardNumber = e;
this.showVideoRewardStyle();
};
e.prototype.showVideoReward = function() {
this.showVideoRewardStyle();
};
e.prototype.hideVideoReward = function() {
this.reset();
};
e.prototype.showVideoRewardStyle = function() {
switch (this.itemCornerVideoStyle) {
case o.DEFAULT:
this.setVideoRewardNumberDefault();
break;

case o.RED:
this.setVideoRewardNumberRed(this.rewardNumber);
break;

case o.GREEN:
this.setVideoRewardNumberGreen(this.rewardNumber);
break;

default:
this.setVideoRewardNumberDefault();
}
};
e.prototype.setVideoRewardNumberDefault = function() {
this.reset();
this.imgVideo1 && (this.imgVideo1.active = !0);
};
e.prototype.setVideoRewardNumberRed = function(t) {
var e = this;
this.reset();
this.imgVideo2 && (this.imgVideo2.active = !0);
this.txtNum2 && (this.txtNum2.string = "+" + t);
this.scheduleOnce(function() {
e._updateLayout();
});
};
e.prototype.setVideoRewardNumberGreen = function(t) {
var e = this;
this.reset();
this.imgVideo3 && (this.imgVideo3.active = !0);
this.txtNum3 && (this.txtNum3.string = "+" + t);
this.scheduleOnce(function() {
e._updateLayout();
});
};
e.prototype.reset = function() {
this.imgVideo1 && (this.imgVideo1.active = !1);
this.imgVideo2 && (this.imgVideo2.active = !1);
this.imgVideo3 && (this.imgVideo3.active = !1);
};
e.prototype._updateLayout = function() {
var t = this.getComponent(cc.Widget);
t && t.updateAlignment();
var e = this.getComponent(cc.Layout);
e && e.updateLayout();
};
r([ c(cc.Node) ], e.prototype, "imgVideo1", void 0);
r([ c(cc.Node) ], e.prototype, "imgVideo2", void 0);
r([ c(cc.Label) ], e.prototype, "txtNum2", void 0);
r([ c(cc.Node) ], e.prototype, "imgVideo3", void 0);
r([ c(cc.Label) ], e.prototype, "txtNum3", void 0);
return r([ l ], e);
}(cc.Component);
i.default = u;
cc._RF.pop();
}, {} ],
GLWaterItemGouziCtrl: [ function(t, e, i) {
"use strict";
cc._RF.push(e, "f358032q3FNtK9Q44edv1XE", "GLWaterItemGouziCtrl");
Object.defineProperty(i, "__esModule", {
value: !0
});
var n = t("./GLWaterItemGouzi"), a = t("./GLWaterSortFeat"), r = function() {
function t() {
this._gouziPrefab = null;
this._loading = !1;
this._pendingItems = [];
}
t.getInstance = function() {
null == this._instance && (this._instance = new t());
return this._instance;
};
t.prototype.isOpen = function() {
return a.default.isOpenGouzi();
};
t.prototype.ensureAttached = function(t) {
var e = this;
if (this.isOpen() && t && cc.isValid(t.node) && !this._findGouziNode(t)) if (this._gouziPrefab && cc.isValid(this._gouziPrefab)) this._instantiateOnItem(t); else {
this._pendingItems.push(t);
if (!this._loading) {
this._loading = !0;
this._loadPrefab(function() {
e._loading = !1;
for (var t = e._pendingItems.splice(0), i = 0; i < t.length; i++) {
var n = t[i];
n && cc.isValid(n.node) && !e._findGouziNode(n) && e._instantiateOnItem(n);
}
});
}
}
};
t.prototype.updateFinishIcon = function(t) {
if (this.isOpen() && t && cc.isValid(t.node)) {
var e = this._findGouziNode(t);
if (e) {
var i = e.getComponent(n.GLWaterItemGouzi);
null == i || i.onUpdateFinishIcon(t);
} else this.ensureAttached(t);
}
};
t.prototype._findGouziNode = function(t) {
return t.node.getChildByName("GLWaterItemGouzi");
};
t.prototype._instantiateOnItem = function(t) {
if (this._gouziPrefab && cc.isValid(this._gouziPrefab) && t && cc.isValid(t.node) && !this._findGouziNode(t)) {
var e = cc.instantiate(this._gouziPrefab);
e.name = "GLWaterItemGouzi";
e.parent = t.node;
e.setPosition(0, 0, 0);
e.active = !0;
var i = e.getComponent(n.GLWaterItemGouzi);
null == i || i.onUpdateFinishIcon(t);
}
};
t.prototype._loadPrefab = function(t) {
var e, i = this, n = "gl_watersort", a = window.GL;
(null === (e = null == a ? void 0 : a.gamelobby) || void 0 === e ? void 0 : e.getRemoteBundleBaseUrl) && (n = a.gamelobby.getRemoteBundleBaseUrl(n));
cc.assetManager.loadBundle(n, function(e, n) {
if (i.isOpen()) if (e) {
console.error("[GLWaterItemGouziCtrl] 加载 bundle 失败:", e);
t();
} else n.load("prefabs/GLWaterItemGouzi", cc.Prefab, function(e, n) {
if (i.isOpen()) if (!e && n instanceof cc.Prefab) {
i._gouziPrefab = n;
console.log("[GLWaterItemGouziCtrl] GLWaterItemGouzi prefab 加载完成");
t();
} else {
console.error("[GLWaterItemGouziCtrl] 加载预制体失败:", e);
t();
} else t();
}); else t();
});
};
t._instance = null;
return t;
}();
i.default = r;
cc._RF.pop();
}, {
"./GLWaterItemGouzi": "GLWaterItemGouzi",
"./GLWaterSortFeat": "GLWaterSortFeat"
} ],
GLWaterItemGouzi: [ function(t, e, i) {
"use strict";
cc._RF.push(e, "a26f4M8DYZEkbcOJLf3YQCb", "GLWaterItemGouzi");
var n, a = this && this.__extends || (n = function(t, e) {
return (n = Object.setPrototypeOf || {
__proto__: []
} instanceof Array && function(t, e) {
t.__proto__ = e;
} || function(t, e) {
for (var i in e) Object.prototype.hasOwnProperty.call(e, i) && (t[i] = e[i]);
})(t, e);
}, function(t, e) {
n(t, e);
function i() {
this.constructor = t;
}
t.prototype = null === e ? Object.create(e) : (i.prototype = e.prototype, new i());
}), r = this && this.__decorate || function(t, e, i, n) {
var a, r = arguments.length, o = r < 3 ? e : null === n ? n = Object.getOwnPropertyDescriptor(e, i) : n;
if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) o = Reflect.decorate(t, e, i, n); else for (var s = t.length - 1; s >= 0; s--) (a = t[s]) && (o = (r < 3 ? a(o) : r > 3 ? a(e, i, o) : a(e, i)) || o);
return r > 3 && o && Object.defineProperty(e, i, o), o;
};
Object.defineProperty(i, "__esModule", {
value: !0
});
i.GLWaterItemGouzi = void 0;
var o = t("./dynamicData/GLWaterColor"), s = t("./GlWaterModel"), l = cc._decorator, c = l.ccclass, u = l.property, h = function(t) {
a(e, t);
function e() {
var e = null !== t && t.apply(this, arguments) || this;
e.imgFinishArr = [];
return e;
}
e.prototype.onUpdateFinishIcon = function(t) {
var e;
if (t && cc.isValid(t.node)) {
var i = this.node.getChildByName("imgFinish");
if (i) if (t.checkIsFinish()) {
var n = t.getWaterData();
if (!n || 0 === n.length) {
i.active = !1;
return;
}
var a = n[0], r = o.getWaterColorConfig()[s.GlWaterModel.getStringData(a)], l = null !== (e = null == r ? void 0 : r.imgFinishIndex) && void 0 !== e ? e : 0, c = this.imgFinishArr[l];
i.active = !0;
var u = i.getComponent(cc.Sprite);
u && c && (u.spriteFrame = c);
} else i.active = !1;
}
};
r([ u([ cc.SpriteFrame ]) ], e.prototype, "imgFinishArr", void 0);
return r([ c ], e);
}(cc.Component);
i.GLWaterItemGouzi = h;
cc._RF.pop();
}, {
"./GlWaterModel": "GlWaterModel",
"./dynamicData/GLWaterColor": "GLWaterColor"
} ],
GLWaterItem: [ function(t, e, i) {
"use strict";
cc._RF.push(e, "6bdaf0SKQJOXpsHvp1uxG/Z", "GLWaterItem");
var n, a = this && this.__extends || (n = function(t, e) {
return (n = Object.setPrototypeOf || {
__proto__: []
} instanceof Array && function(t, e) {
t.__proto__ = e;
} || function(t, e) {
for (var i in e) Object.prototype.hasOwnProperty.call(e, i) && (t[i] = e[i]);
})(t, e);
}, function(t, e) {
n(t, e);
function i() {
this.constructor = t;
}
t.prototype = null === e ? Object.create(e) : (i.prototype = e.prototype, new i());
}), r = this && this.__decorate || function(t, e, i, n) {
var a, r = arguments.length, o = r < 3 ? e : null === n ? n = Object.getOwnPropertyDescriptor(e, i) : n;
if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) o = Reflect.decorate(t, e, i, n); else for (var s = t.length - 1; s >= 0; s--) (a = t[s]) && (o = (r < 3 ? a(o) : r > 3 ? a(e, i, o) : a(e, i)) || o);
return r > 3 && o && Object.defineProperty(e, i, o), o;
};
Object.defineProperty(i, "__esModule", {
value: !0
});
i.GLWaterItem = void 0;
var o, s = t("./dynamicData/GLWaterColor"), l = t("./GlWaterModel"), c = t("./GLWaterRoundLogEventCtr"), u = t("./GLWaterSortEventTool"), h = t("./GLWaterSortFeat"), d = t("./traits/GLWaterDianzanEffectTraitCtrl"), p = t("./traits/GLWaterHighlightAllPipetteableTubesTrait"), f = t("./traits/GLWaterSortClickAgainSkipAnimationTraitCtrl"), g = t("./traits/GLWaterSortNextSkipLastAnimationTraitCtrl"), v = t("./GLWaterSortClickSameOther"), m = t("./traits/GLWaterClickEmptyFastTraitCtrl"), _ = t("./traits/GLWaterSortAddDragRadio"), y = t("./traits/GLWaterSortChangeRegionAfterPutTraitCtrl"), L = t("./GLWaterItemGouziCtrl");
(function(t) {
t[t.kongIdle = 0] = "kongIdle";
t[t.waterIdle = 0] = "waterIdle";
t[t.lock = 0] = "lock";
t[t.waterDao = 0] = "waterDao";
t[t.manping = 0] = "manping";
t[t.bowenHide = 1] = "bowenHide";
t[t.waterHuang = 1] = "waterHuang";
t[t.waterUp = 2] = "waterUp";
t[t.qipaoHide = 2] = "qipaoHide";
t[t.waterLiu = 3] = "waterLiu";
t[t.waterLiu2 = 3] = "waterLiu2";
t[t.pingsai = 3] = "pingsai";
t[t.liZI = 4] = "liZI";
t[t.markEff = 4] = "markEff";
t[t.lightIdle = 5] = "lightIdle";
t[t.enter = 99] = "enter";
t[t.click = 99] = "click";
})(o || (o = {}));
var G = cc._decorator, T = G.ccclass, S = G.property, b = function(t) {
a(e, t);
function e() {
var e = null !== t && t.apply(this, arguments) || this;
e.isGuilde = !1;
e._dragThreshold = 5;
e.markEffArr = [];
e.spineParent = null;
e.markArr = [];
e._data = null;
e.layoutParent = null;
e.layoutMoveparent = null;
e._isFirstInit = !1;
e._isInitData = !1;
e._pos = null;
e._isClick = !1;
e._isPlay = !1;
e._isPlayUp = !1;
e._isLockTube = !0;
e._index = null;
e._crashIndex = null;
e._isDrag = !1;
e._startPos = null;
e._frameTimes = {
"0_1": [ 0, 8 / 30 ],
"0_2": [ 0, 16 / 30 ],
"0_3": [ 0, .8 ],
"0_4": [ 0, 32 / 30 ],
"1_2": [ 8 / 30, 16 / 30 ],
"1_3": [ 8 / 30, .8 ],
"1_4": [ 8 / 30, 32 / 30 ],
"2_3": [ 16 / 30, .8 ],
"2_4": [ 16 / 30, 32 / 30 ],
"3_4": [ .8, 32 / 30 ]
};
e._itemArr = [];
e._canCrashBox = [];
e._canCrashBoxIndexArr = [];
e.itemMaxColorNum = 0;
return e;
}
i = e;
e.prototype.getData = function() {
return this._data;
};
e.prototype.getSpineParent = function() {
return this.spineParent;
};
e.prototype.getIndex = function() {
return this._index;
};
e.prototype.setIndex = function(t) {
this._index = t;
};
e.prototype.getIsLockTube = function() {
return this._isLockTube;
};
e.prototype.setIsPlay = function(t) {
this._isPlay = t;
};
e.prototype.setIsPlayUp = function(t) {
this._isPlayUp = t;
};
e.prototype.setWaterData = function(t) {
this._data || (this._data = {});
this._data.waterData = t;
};
e.prototype.getPos = function() {
return this._pos;
};
Object.defineProperty(e.prototype, "isClick", {
get: function() {
return this._isClick;
},
set: function(t) {
this._isClick = t;
},
enumerable: !1,
configurable: !0
});
Object.defineProperty(e.prototype, "isPlay", {
get: function() {
return this._isPlay;
},
set: function(t) {
this._isPlay = t;
},
enumerable: !1,
configurable: !0
});
Object.defineProperty(e.prototype, "isPlayUp", {
get: function() {
return this._isPlayUp;
},
set: function(t) {
this._isPlayUp = t;
},
enumerable: !1,
configurable: !0
});
e.prototype.onLoad = function() {
var t;
this.addClickEvent();
this._pos = this.node.position;
this.layoutParent = this.node.parent;
this.layoutMoveparent = null === (t = this.layoutParent.parent.parent.getChildByName("tubeLayoutMove")) || void 0 === t ? void 0 : t.getChildByName(this.layoutParent.name);
};
e.prototype.onDisable = function() {
this.spineParent && this.spineParent.getComponent(sp.Skeleton).clearTracks();
};
e.prototype.onDestroy = function() {
this.offClickEvent();
this._itemArr = [];
};
e.prototype.addClickEvent = function() {
this.node.on(cc.Node.EventType.TOUCH_START, this.onTouchStart, this);
this.node.on(cc.Node.EventType.TOUCH_MOVE, this.onTouchMove, this);
this.node.on(cc.Node.EventType.TOUCH_END, this.onTouchEnd, this);
this.node.on(cc.Node.EventType.TOUCH_CANCEL, this.onTouchCancel, this);
};
e.prototype.offClickEvent = function() {
this.node.off(cc.Node.EventType.TOUCH_START, this.onTouchStart, this);
this.node.off(cc.Node.EventType.TOUCH_MOVE, this.onTouchMove, this);
this.node.off(cc.Node.EventType.TOUCH_END, this.onTouchEnd, this);
this.node.off(cc.Node.EventType.TOUCH_CANCEL, this.onTouchCancel, this);
};
e.prototype.setData = function(t, e, i, n, a, r, o, s) {
void 0 === i && (i = !1);
void 0 === n && (n = !1);
void 0 === a && (a = !1);
this._data = {};
this.isGuilde = n;
this._isLockTube = i;
if (i) {
this.updateLockData(t);
a ? h.default.isEffectiveNewTube() ? this._data.isLock = !1 : this._data.isLock = !0 : this._data.isLock = !1;
} else {
this._data.isLock = !1;
this._data.waterData = t;
this._data.tubeLen = 4;
this._data.markData = {
markData: s,
hasMark: o
};
}
this._index = e;
this._isInitData = !0;
this._isInitData && this._isFirstInit && this.initIdle(r);
};
e.prototype.onEnable = function() {
this._isFirstInit = !0;
this._isInitData && this._isFirstInit && this.initIdle();
};
e.prototype.reset = function() {
this.hideQiPao(!0);
this.hideBowen(!0);
this.hideMarkEff(!0);
this.hideNewSkin();
};
e.prototype.onTouchCancel = function(t) {
if (_.GLWaterSortAddDragRadio.Instance.shouldTreatCancelAsEnd(this._isDrag)) this.onTouchEnd(t); else {
if (this._isDrag) {
console.log("取消释放");
this._isDrag = !1;
this.node.x = this._pos.x;
this.node.y = this._pos.y;
if (this.isGuilde) for (var e = 0; e < this._itemArr.length; ++e) if (this._itemArr[e] && cc.isValid(this._itemArr[e])) {
this._itemArr[e].getChildByName("check").active = !1;
this._itemArr[e].getChildByName("close").active = !1;
}
u.GLWaterSortEvent.dispatchEvent(u.GlWaterSortEventName.CHANGE_ORDER, {
index: this._index,
isMove: !1,
addClick: !0
});
p.GLWaterHighlightAllPipetteableTubesTrait.Instance.isOpen() && p.GLWaterHighlightAllPipetteableTubesTrait.Instance.clearAllHighlights(this);
}
this.clearCrashData();
this._isClick = !1;
_.GLWaterSortAddDragRadio.Instance.handleTouchEnd();
}
};
e.prototype.onTouchMove = function(t) {
var e;
if (!this.isPlay && !this.isPlayUp && !((null === (e = this._data) || void 0 === e ? void 0 : e.isLock) && h.default.isOpenAdUnlockEmptyTube() || this.checkIsFinish())) if (this._isDrag) {
u.GLWaterSortEvent.dispatchEvent(u.GlWaterSortEventName.CHANGE_ORDER, {
index: this._index,
isMove: !0,
addClick: !0
});
var n = t.getLocation(), a = _.GLWaterSortAddDragRadio.Instance.computeDragPosition(n, this.node.position, this._startPos);
if (a) this.node.position = a.newPosition; else {
d = n.sub(this._startPos);
this.node.position = this.node.position.add(cc.v3(d));
this._startPos = n;
}
var r = this.getBoundingBoxToWorld(), o = !1;
for (g = 0; g < this._canCrashBox.length; ++g) {
var s = this._canCrashBox[g];
if (r.intersects(s)) {
o = !0;
if (null != this._crashIndex && this._crashIndex == this._canCrashBoxIndexArr[g]) break;
if (this._itemArr[this._crashIndex]) if (p.GLWaterHighlightAllPipetteableTubesTrait.Instance.isOpen()) this._itemArr[this._crashIndex].getComponent(i).liZiPlay(p.GLWaterHighlightAllPipetteableTubesTrait.Instance.liziTimeScale); else {
this._itemArr[this._crashIndex].getComponent(i).hideLight();
this._itemArr[this._crashIndex].getComponent(i).hideLizi();
}
GL.Audio.playEffect("resources/audio/water_crash1", "gl_watersort");
console.log("播放碰撞音效");
this._crashIndex = this._canCrashBoxIndexArr[g];
if (this._itemArr[this._crashIndex]) {
var l = this._itemArr[this._crashIndex].getComponent(i);
l.hideMarkEff(!0);
l.lightPlay();
l.liZiPlay();
var c = this.getWaterData().filter(function(t) {
return -1 != t;
});
c.length && l.changeLiziColor(c[0]);
}
break;
}
}
if (!o) {
if (this._itemArr[this._crashIndex]) if (p.GLWaterHighlightAllPipetteableTubesTrait.Instance.isOpen()) this._itemArr[this._crashIndex].getComponent(i).liZiPlay(.1); else {
this._itemArr[this._crashIndex].getComponent(i).hideLight();
this._itemArr[this._crashIndex].getComponent(i).hideLizi();
}
this._crashIndex = null;
}
} else {
var d = t.getLocation().sub(this._startPos), f = h.default.getTouchMoveThreshold(this._dragThreshold);
console.log("【水排序】拖拽偏移阈值：", f);
if (d.mag() > f) {
this._isDrag = !0;
p.GLWaterHighlightAllPipetteableTubesTrait.Instance.isOpen() && p.GLWaterHighlightAllPipetteableTubesTrait.Instance.highlightAllPipetteableTubes(this);
_.GLWaterSortAddDragRadio.Instance.handleDragStart(this._startPos);
this.getCanCrashBox();
for (var g = 0; g < this._itemArr.length; ++g) if (this._itemArr[g] && cc.isValid(this._itemArr[g])) {
g !== this._index && this._itemArr[g].getComponent(i).isClick && !this._itemArr[g].getComponent(i).isPlay && this._itemArr[g].getComponent(i).downHuang();
if (this.isGuilde && g !== this._index) {
var v = this.getReallyWaterData()[0] == this._itemArr[g].getComponent(i).getReallyWaterData()[0];
this._itemArr[g].getChildByName("check").active = v;
this._itemArr[g].getChildByName("close").active = !v;
}
}
if (this.isGuilde) {
this.node.getChildByName("check").active = !1;
this.node.getChildByName("check").active = !1;
u.GLWaterSortEvent.dispatchEvent(u.GlWaterSortEventName.GUILDE_MOVE_TUBE, {
show: !1
});
}
}
}
};
e.prototype.onTouchStart = function(t) {
this._startPos = t.getLocation();
_.GLWaterSortAddDragRadio.Instance.handleTouchStart(this._startPos);
};
e.prototype.onTouchEnd = function() {
if (this._isDrag) {
this._isDrag = !1;
this.node.x = this._pos.x;
this.node.y = this._pos.y;
if (null != this._crashIndex && this._crashIndex >= 0) this.crashDaoPlay(); else {
this.isGuilde && u.GLWaterSortEvent.dispatchEvent(u.GlWaterSortEventName.GUILDE_MOVE_TUBE, {
show: !0
});
u.GLWaterSortEvent.dispatchEvent(u.GlWaterSortEventName.CHANGE_ORDER, {
index: this._index,
isMove: !1,
addClick: !0
});
}
this.clearCrashData();
this._isClick = !1;
_.GLWaterSortAddDragRadio.Instance.handleTouchEnd();
c.default.getInstance().step();
p.GLWaterHighlightAllPipetteableTubesTrait.Instance.isOpen() && p.GLWaterHighlightAllPipetteableTubesTrait.Instance.checkCanHighlight(this);
} else this.clickHuangPlay();
};
e.prototype.initPos = function() {
this._isClick = !1;
if (cc.isValid(this.node)) {
this.node.x = this._pos.x;
this.node.y = this._pos.y;
}
};
e.prototype.setPosAndInitParent = function(t) {
var e;
this._pos = t;
this.layoutParent = this.node.parent;
this.layoutMoveparent = null === (e = this.layoutParent.parent.parent.getChildByName("tubeLayoutMove")) || void 0 === e ? void 0 : e.getChildByName(this.layoutParent.name);
};
e.prototype.changeWaterData = function(t, e, i) {
var n, a = this.getWaterData(), r = e;
if (t) for (var o = a.length - 1; o >= 0; o--) {
if (-1 == a[o]) {
r--;
a[o] = i;
}
if (r <= 0) break;
} else for (o = 0; o < a.length; o++) {
if (a[o] == i) {
r--;
a[o] = -1;
}
if (r <= 0) break;
}
this._data || (this._data = {});
this._data.waterData = a;
if (null === (n = this._data.markData) || void 0 === n ? void 0 : n.hasMark) {
var s = this._data.markData.markData;
if (s) {
var l = s[this._index], c = this.findFirstBreakIndex(a);
if (null != c && c >= 0 && c > l) {
u.GLWaterSortEvent.dispatchEvent(u.GlWaterSortEventName.DRAW_MARK, {
index: this._index,
markIndex: c
});
for (o = l; o < c; o++) this.markEffArr.push(o);
s[this._index] = c;
this._data.markData.markData = s;
console.log("更新问号数据");
} else if (null == c) {
for (o = l; o < 4; o++) this.markEffArr.push(o);
u.GLWaterSortEvent.dispatchEvent(u.GlWaterSortEventName.DRAW_MARK, {
index: this._index,
markIndex: 4
});
this._data.markData.markData = {};
console.log("更新问号数据");
}
}
}
};
e.prototype.addSpine = function(t) {
t();
};
e.prototype.drawTube = function() {
var t;
this.reset();
if (null === (t = this._data) || void 0 === t ? void 0 : t.isLock) {
if (this.spineParent && cc.isValid(this.spineParent)) {
var e = h.default.isOpenAdUnlockEmptyTube() ? "boliping_" + this.getWaterData().length + "_kong" : "xg_boliping_jieshuo1";
this.spineParent.getComponent(sp.Skeleton).setAnimation(o.lock, e, !1);
}
this.changeAllWater(null, !0);
} else {
var i = this.getWaterData().concat();
(i = i.filter(function(t) {
return -1 != t;
})).length ? this.spineParent && cc.isValid(this.spineParent) && this.spineParent.getComponent(sp.Skeleton).setAnimation(o.waterIdle, "water_" + this.getWaterData().length + "_idle", !1) : this.spineParent && cc.isValid(this.spineParent) && this.spineParent.getComponent(sp.Skeleton).setAnimation(o.kongIdle, "boliping_" + this.getWaterData().length + "_kong", !1);
this.changeAllWater(null, !0);
if (this.checkIsFinish()) {
this.spineParent && cc.isValid(this.spineParent) && this.spineParent.getComponent(sp.Skeleton).setAnimation(o.pingsai, "pinggai", !1);
if (h.default.isOpenNewSkin()) {
this.changeSoltColor("cover_extra_large_bottom", null, 1);
this.changeSoltColor("cover_extra_large_top", null, 1);
} else this.changeSoltColor("pinggai", null, 1);
} else {
this.spineParent && cc.isValid(this.spineParent) && this.spineParent.getComponent(sp.Skeleton).clearTrack(o.pingsai);
if (h.default.isOpenNewSkin()) {
this.changeSoltColor("cover_extra_large_bottom", null, 0);
this.changeSoltColor("cover_extra_large_top", null, 0);
} else this.changeSoltColor("pinggai", null, 0);
}
this.onUpdateFinishIcon();
}
};
e.prototype.initIdle = function(t) {
var e = this;
(function() {
e.drawTube();
e.applyGlWaterFinishTipsFullTubeHide();
e.drawMark(!0);
h.default.isOpenGouzi() && L.default.getInstance().ensureAttached(e);
e.enterPlay(t);
})();
};
e.prototype.hideAllMark = function() {
var t, e;
if (h.default.isOpenQuestion() && (null === (e = null === (t = this._data) || void 0 === t ? void 0 : t.markData) || void 0 === e ? void 0 : e.hasMark)) for (var i = this.markArr || [], n = 0; n < i.length; n++) i[n] && (i[n].active = !1);
};
e.prototype.showMark = function() {
var t, e, i, n;
if (h.default.isOpenQuestion()) {
var a = this.getWaterData(), r = null === (e = null === (t = this._data) || void 0 === t ? void 0 : t.markData) || void 0 === e ? void 0 : e.markData;
if (r && (null === (n = null === (i = this.markArr) || void 0 === i ? void 0 : i[0]) || void 0 === n ? void 0 : n.parent)) {
this.markArr[0].parent.active = !0;
var o = r[this._index];
if (null != o && o >= 0) for (var s = o; s < a.length; s++) {
var l = this.markArr[s - 1];
l && (l.active = !0);
}
}
var c = this.markEffArr || [];
if (c.length > 0) {
if (!this.spineParent || !cc.isValid(this.spineParent)) {
this.markEffArr = [];
return;
}
var u = this.spineParent.getComponent(sp.Skeleton);
if (!u) {
this.markEffArr = [];
return;
}
for (s = 0; s < c.length; s++) {
u.setAnimation(4 + s, "xg_water_W_" + c[s], !1);
this.hideMarkEff(!1, c[s]);
}
}
this.markEffArr = [];
}
};
e.prototype.drawMark = function(t) {
var e, i, n, a, r;
void 0 === t && (t = !1);
if (h.default.isOpenQuestion() && (null === (e = this._data) || void 0 === e ? void 0 : e.markData) && (null === (n = null === (i = this._data) || void 0 === i ? void 0 : i.markData) || void 0 === n ? void 0 : n.hasMark)) {
this.markArr[0].parent.active = !0;
var o = null === (r = null === (a = this._data) || void 0 === a ? void 0 : a.markData) || void 0 === r ? void 0 : r.markData;
if (o) {
console.log("老试管 更新问号");
if (null != (p = o[this._index]) && p >= 0) for (var l = p; l < this.getWaterData().length; l++) {
var c = s.getWaterColorConfig()[13], d = -1 == this.getWaterData()[l] ? 0 : 1;
this.changeSoltColor("water" + (this._data.tubeLen - l), c.waterColor, d);
this.changeSoltColor("water" + (this._data.tubeLen - l) + "_top", c.waterTop, d);
t && this.markArr[l - 1] && (this.markArr[l - 1].active = !0);
}
} else {
var p, f = this.getWaterData();
if (null != (p = this.findFirstBreakIndex(f)) && p >= 0) {
console.log("新试管 初始化问号");
u.GLWaterSortEvent.dispatchEvent(u.GlWaterSortEventName.DRAW_MARK, {
index: this._index,
markIndex: p
});
this._data.markData.markData = {};
this._data.markData.markData[this._index] = p;
for (l = p; l < this.getWaterData().length; l++) {
c = s.getWaterColorConfig()[13], d = -1 == this.getWaterData()[l] ? 0 : 1;
this.changeSoltColor("water" + (this._data.tubeLen - l), c.waterColor, d);
this.changeSoltColor("water" + (this._data.tubeLen - l) + "_top", c.waterTop, d);
t && this.markArr[l - 1] && (this.markArr[l - 1].active = !0);
}
}
}
}
};
e.prototype.findFirstBreakIndex = function(t) {
if (!t || 0 === t.length) return null;
for (var e = null, i = 0; i < t.length; i++) {
var n = t[i];
if (-1 !== n) if (null !== e) {
if (n !== e) return i;
} else e = n;
}
return null;
};
e.prototype.changeAllWater = function(t, e) {
void 0 === e && (e = !1);
for (var i = 0; i < this.getWaterData().length; i++) {
var n = l.GlWaterModel.getStringData(this.getWaterData()[i]), a = s.getWaterColorConfig(), r = a[n] || a[0], o = -1 == this.getWaterData()[i] ? 0 : 1;
this._data.isLock && (o = 0);
t && this._data.tubeLen - i > t && (o = 0);
this.changeSoltColor("water" + (this._data.tubeLen - i), r.waterColor, o);
this.changeSoltColor("water" + (this._data.tubeLen - i) + "_top", r.waterTop, o);
h.default.isOpenNewSkin() && this.changeSoltColor("water" + (this._data.tubeLen - i) + "_top2", null, o);
}
this.drawMark();
};
e.prototype.enterPlay = function(t) {
var e = this;
this.isPlay = !0;
if (this.node && cc.isValid(this.node)) {
this.node.opacity = 255;
if (!this._data.isLock) {
var i = this.getWaterData().filter(function(t) {
return -1 != t;
}).length;
if (i > 0) {
this.spineParent.getComponent(sp.Skeleton).setAnimation(o.kongIdle, "boliping_" + this._data.tubeLen + "_kong", !1);
this.spineParent.getComponent(sp.Skeleton).setAnimation(o.enter, "water_" + i + "_in_huang", !1);
}
this.spineParent.getComponent(sp.Skeleton).setCompleteListener(function(t) {
var n, a, r;
(null === (n = t.animation) || void 0 === n ? void 0 : n.name) == "water_" + i + "_in_huang" && e.spineParent.getComponent(sp.Skeleton).clearTrack(o.enter);
null === (r = null === (a = e.spineParent) || void 0 === a ? void 0 : a.getComponent(sp.Skeleton)) || void 0 === r || r.setCompleteListener(null);
});
}
this.node.x += 1e3;
this.node.y = this._pos.y;
cc.tween(this.node).to(5 / 30, {
x: this.node.x - 1160
}).to(.1, {
x: this._pos.x + 30
}).to(1 / 30, {
x: this._pos.x
}).call(function() {
e.isPlay = !1;
t && t();
}).start();
}
};
e.prototype.clickHuangPlay = function() {
if (!(f.default.getInstance().isOpen() && f.default.getInstance().trySkipAnimation(this) || this.checkIsFinish())) if (this.isPlay) console.log("当前试管正在播放spine，无法点击"); else {
console.log("点击第" + (this._index + 1) + "个试管");
null == this._data && (this._data = {});
if (!v.GLWaterSortClickSameOther.Instance.isOpen() || !v.GLWaterSortClickSameOther.Instance.handleClick(this)) {
h.tryShakeVibrationWaterSort("clickBottle");
this.getWaterData().filter(function(t) {
return -1 != t;
}).length;
c.default.getInstance().step();
if (this._isClick) {
GL.Audio.playEffect("resources/audio/water_undo_new", "gl_watersort");
console.log("播放水瓶下降音效");
this.downHuang();
p.GLWaterHighlightAllPipetteableTubesTrait.Instance.isOpen() && p.GLWaterHighlightAllPipetteableTubesTrait.Instance.clearAllHighlights(this);
y.default.getInstance().isOpen() && y.default.getInstance().onTubeDeselected();
this.isGuilde && u.GLWaterSortEvent.dispatchEvent(u.GlWaterSortEventName.GUILDE_CLICK_DOWN, {
index: this._index,
waterData: this.getWaterData()
});
} else this.isGuilde ? u.GLWaterSortEvent.dispatchEvent(u.GlWaterSortEventName.GUILDE_CLICK_UP, {
index: this._index,
waterData: this.getWaterData()
}) : u.GLWaterSortEvent.dispatchEvent(u.GlWaterSortEventName.CLICK_TUBE_END, {
index: this._index,
waterData: this.getWaterData()
});
}
}
};
e.prototype.upHuang = function() {
var t = this;
GL.Audio.playEffect("resources/audio/water_click_1", "gl_watersort");
console.log("播放试管上升音效");
this._isClick = !0;
var e = this.getWaterData().filter(function(t) {
return -1 != t;
}).length;
if (_.GLWaterSortAddDragRadio.Instance.isOpen()) {
if (!this._data.isLock && e > 0) {
var i = this.spineParent.getComponent(sp.Skeleton);
_.GLWaterSortAddDragRadio.Instance.playHuangAnimation(i, e, o.waterHuang);
}
} else !this._data.isLock && e > 0 && this.spineParent.getComponent(sp.Skeleton).setAnimation(o.waterHuang, "water_" + e + "_huang", !1);
cc.tween(this.node).to(5 / 30, {
y: this._pos.y + 50
}).call(function() {
p.GLWaterHighlightAllPipetteableTubesTrait.Instance.isOpen() && p.GLWaterHighlightAllPipetteableTubesTrait.Instance.highlightAllPipetteableTubes(t);
}).start();
};
e.prototype.downHuang = function() {
this._isClick = !1;
var t = this.getWaterData().filter(function(t) {
return -1 != t;
}).length, e = 5 / 30;
if (_.GLWaterSortAddDragRadio.Instance.isOpen()) {
if (!this._data.isLock && t > 0) {
var i = this.spineParent.getComponent(sp.Skeleton);
e = _.GLWaterSortAddDragRadio.Instance.playHuangAnimation(i, t, o.waterHuang);
}
} else !this._data.isLock && t > 0 && this.spineParent.getComponent(sp.Skeleton).setAnimation(o.waterHuang, "water_" + t + "_huang", !1);
cc.tween(this.node).to(e, {
y: this._pos.y
}).start();
};
e.prototype.lightPlay = function() {
this.changeSoltColor("bottle_extra_large3", null, 1);
this.changeSoltColor("bottle_extra_large4", null, 1);
this.spineParent.getComponent(sp.Skeleton).setAnimation(o.lightIdle, "xg_boliping_liang" + this.getWaterData().length, !1);
};
e.prototype.hideLight = function() {
this.changeSoltColor("bottle_extra_large3", null, 0);
this.changeSoltColor("bottle_extra_large4", null, 0);
cc.isValid(this.spineParent) && this.spineParent.getComponent(sp.Skeleton).clearTrack(o.lightIdle);
};
e.prototype.changeLiziColor = function(t) {
for (var e = s.getWaterColorConfig()[l.GlWaterModel.getStringData(t)], i = 1; i <= 8; ++i) {
var n = "waterLiZi_" + i;
this.changeSoltColor(n, e.waterTop);
}
};
e.prototype.liZiPlay = function(t) {
void 0 === t && (t = 1);
this.hideLizi(!1);
var e = this.getWaterData().filter(function(t) {
return -1 != t;
}).length, i = this.spineParent.getComponent(sp.Skeleton);
if (null != i) {
var n = this._data.tubeLen < 4 && 0 == e ? "xg_water_xuanzhe_" + e : "xg_water_xuanzhe_" + (e + 1), a = i.setAnimation(o.liZI, n, !0);
null != a && (a.timeScale = t);
}
};
e.prototype.liZiUpPlay = function(t) {
this.hideLizi(!1);
var e = this.getWaterData().filter(function(t) {
return -1 != t;
}).length;
this.spineParent && cc.isValid(this.spineParent) && (this._data.tubeLen < 4 && 0 == e ? this.spineParent.getComponent(sp.Skeleton).setAnimation(o.liZI, "xg_water_xuanzhe_" + t + "up", !1) : this.spineParent.getComponent(sp.Skeleton).setAnimation(o.liZI, "xg_water_xuanzhe_" + (t + 1) + "up", !1));
};
e.prototype.hideLizi = function(t) {
void 0 === t && (t = !0);
this.spineParent && cc.isValid(this.spineParent) && this.spineParent.getComponent(sp.Skeleton).clearTrack(o.liZI);
for (var e = 1; e <= 8; ++e) {
var i = "waterLiZi_" + e;
this.changeSoltColor(i, null, t ? 0 : 1);
}
};
e.prototype.playBowen = function() {
this.hideBowen(!1);
var t = this.getWaterData().filter(function(t) {
return -1 != t;
}).length;
this.spineParent && cc.isValid(this.spineParent) && this.spineParent.getComponent(sp.Skeleton).setAnimation(5, "water_bowen_out" + t, !1);
};
e.prototype.hideBowen = function(t) {
if (cc.isValid(this.spineParent)) {
this.spineParent.getComponent(sp.Skeleton).clearTrack(o.bowenHide);
for (var e = 1; e <= 4; ++e) {
var i = "bowen" + e;
this.changeSoltColor(i, null, t ? 0 : 1);
}
}
};
e.prototype.hideQiPao = function(t) {
cc.isValid(this.spineParent) && this.spineParent.getComponent(sp.Skeleton).clearTrack(o.bowenHide);
for (var e = 1; e <= 7; ++e) {
var i = "qipao" + e;
this.changeSoltColor(i, null, t ? 0 : 1);
}
};
e.prototype.hideMarkEff = function(t, e) {
void 0 === e && (e = 0);
if (t) {
this.spineParent && cc.isValid(this.spineParent) && this.spineParent.getComponent(sp.Skeleton).clearTrack(o.markEff);
for (var i = 2; i <= 19; ++i) {
var n = "wenhao" + i;
this.changeSoltColor(n, null, 0);
}
} else for (var a = 2 + 6 * e, r = a + 5, s = a; s <= r; ++s) {
n = "wenhao" + s;
this.changeSoltColor(n, null, 1);
}
};
e.prototype.waterUpPlay = function(t, e) {
var i = this;
this._isPlayUp = !0;
var n = !1, a = !1, r = cc.director.getDeltaTime();
console.log("第" + (this._index + 1) + "个试管播放" + t + "上升动画");
if (this._frameTimes[t]) {
c.default.getInstance().forwardStep();
var p = s.getWaterColorConfig()[l.GlWaterModel.getStringData(e)];
this.changeSoltColor("water_dan", p.waterColor);
this.changeSoltColor("water_dan_top", p.waterTop);
this.changeSoltColor("shuiliu", p.waterTop);
if (h.default.isOpenNewSkin()) for (var f = 1; f <= this._data.tubeLen; ++f) this.changeSoltColor("water" + f + "_top2", null, 0);
var g = this.spineParent.getComponent(sp.Skeleton);
g.clearTracks();
g.setAnimation(o.kongIdle, "boliping_" + this._data.tubeLen + "_kong", !1);
this.hideMarkEff(!0);
g.timeScale = 1.8;
g.paused = !1;
var v = t.split("_");
this.shuiLiuPlay();
var _ = this._data.tubeLen - Number(v[0]);
cc.tween(g).delay(3 * _ * r / g.timeScale).call(function() {
if (g && g.node && cc.isValid(g.node)) {
g.timeScale = 1;
GL.Audio.playEffect("resources/audio/water_pour_" + (Number(v[1]) - Number(v[0])), "gl_watersort");
console.log("播放倒水音效", Number(v[1]) - Number(v[0]));
i.liZiUpPlay(Number(v[0]));
Number(v[0]) > 0 && i.changeSoltColor("water" + v[0] + "_top", s.getWaterColorConfig()[l.GlWaterModel.getStringData(e)].waterColor);
var r = g.setAnimation(o.waterUp, "xg_water_up1234", !1);
if (r) {
r.trackTime = i._frameTimes[t][0];
m.default.getInstance().isOpen() && m.default.getInstance().onWaterUpStart(i);
g.setEventListener(function(t, e) {
if (e.data && e.data.name) {
var r = "up" + v[1];
if (e.data.name == r) {
g.setEndListener(null);
i.hideBowen(!1);
i.hideQiPao(!1);
g.setAnimation(o.waterIdle, "water_" + i._data.tubeLen + "_idle", !1);
g.setAnimation(2, "xg_water_qipao" + Number(v[1]), !1);
g.setAnimation(5, "water_bowen_out" + Number(v[1]), !1);
i.hideLiushui();
i.hideLight();
i.hideLizi();
i.changeAllWater(Number(v[1]));
if (!n) {
n = !0;
h.tryShakeVibrationWaterSort("dropSuccess");
}
if ("4" == v[1] && i.checkIsFinish()) {
GL.Audio.playEffect("resources/audio/water_pour_4", "gl_watersort");
console.log("播放倒满音效");
g.clearTracks();
i.reset();
if (h.default.isOpenNewSkin()) {
i.changeSoltColor("cover_extra_large_bottom", null, 1);
i.changeSoltColor("cover_extra_large_top", null, 1);
} else i.changeSoltColor("pinggai", null, 1);
g.setAnimation(o.manping, "xg_water_manping", !1);
g.setCompleteListener(function() {
if (!a) {
a = !0;
i.scheduleOnce(function() {
h.tryShakeVibrationWaterSort("finishOneBottleGaizi");
}, .2);
}
g.setCompleteListener(null);
i._isPlayUp = !1;
h.GLWaterSortFeature.isOpen(h.GLWaterSortFeat2.GLWaterDianzanEffect) && d.GLWaterDianzanEffectTraitCtrl.getInstance().setLastCompletedTube(i);
i.isGuilde ? u.GLWaterSortEvent.dispatchEvent(u.GlWaterSortEventName.GUILDE_MAN_PING) : u.GLWaterSortEvent.dispatchEvent(u.GlWaterSortEventName.MAN_PING);
});
i.onUpdateFinishIcon();
} else i._isPlayUp = !1;
}
} else console.log("检测到Spine帧事件没有对应的数据:", e);
});
} else {
console.warn("[GLWaterItem] waterUp setAnimation failed: xg_water_up1234, tubeLen=" + i._data.tubeLen);
i._isPlayUp = !1;
}
} else i._isPlayUp = !1;
}).start();
}
};
e.prototype.hideLiushui = function() {
this.changeSoltColor("shuiliu", s.getWaterColorConfig()[0].waterColor, 0);
};
e.prototype.shuiLiuPlay = function() {
this.spineParent.getComponent(sp.Skeleton).setAnimation(o.waterLiu, "xg_water_daoru1", !1);
};
e.prototype.shuiLiuEndPlay = function() {
this.spineParent.getComponent(sp.Skeleton).setAnimation(o.waterLiu2, "xg_water_daoru2", !1);
};
e.prototype.hideNewSkin = function() {
if (h.default.isOpenNewSkin()) {
this.changeSoltColor("yeti3", null, 0);
this.changeSoltColor("yeti4", null, 0);
}
};
e.prototype.daoShuiPlay = function(t, e, i, n, a, r) {
var c = this;
console.log("第" + (this._index + 1) + "个试管播放倒水动画");
this.reset();
this.hideAllMark();
p.GLWaterHighlightAllPipetteableTubesTrait.Instance.isOpen() && p.GLWaterHighlightAllPipetteableTubesTrait.Instance.clearAllHighlights(this);
u.GLWaterSortEvent.dispatchEvent(u.GlWaterSortEventName.CHANGE_ORDER, {
index: this._index,
isMove: !0
});
this.isPlay = !0;
cc.tween(this.node).to(.2171, {
x: i.x,
y: i.y
}).start();
var d = t ? "right" : "left", f = this.spineParent.getComponent(sp.Skeleton);
f.clearTracks();
f.setAnimation(o.waterDao, "y_" + d + "_" + this._data.tubeLen + "_boliping", !1);
var g = this.getWaterData().filter(function(t) {
return -1 != t;
}).length, v = "dao" + (this._data.tubeLen - g + 1), m = "dao" + (this._data.tubeLen - g + 1 + e), _ = new Date().getTime(), y = this._data.tubeLen - g + 1;
f.timeScale = y;
f.setEventListener(function(t, e) {
if (e.data.name == v) {
if (h.default.isOpenNewSkin() && r >= 0) {
c.changeSoltColor("yeti3", s.getWaterColorConfig()[l.GlWaterModel.getStringData(r)].waterTop);
c.changeSoltColor("yeti4", s.getWaterColorConfig()[l.GlWaterModel.getStringData(r)].waterTop);
}
f.timeScale = 1;
n();
}
if (e.data.name == m) {
f.setEventListener(null);
a();
c.changeAllWater();
f.timeScale = -5;
var i = new Date().getTime();
if (h.default.isOpenNewSkin() && r >= 0) {
c.changeSoltColor("yeti3", null, 0);
c.changeSoltColor("yeti4", null, 0);
}
cc.tween(c.node).to((i - _) / 5e3, {
x: c._pos.x,
y: c._pos.y
}).call(function() {
console.log("反方向动画播放结束");
c.isPlay = !1;
c.isClick = !1;
f.timeScale = 1;
f.setAnimation(o.waterDao, "water_" + c._data.tubeLen + "_idle", !1);
u.GLWaterSortEvent.dispatchEvent(u.GlWaterSortEventName.CHANGE_ORDER, {
index: c._index,
isMove: !1,
daoShuiEnd: !0
});
c.isGuilde && u.GLWaterSortEvent.dispatchEvent(u.GlWaterSortEventName.GUILE_MOVE_DAO_END, {
index: c._index,
isMove: !1
});
c.showMark();
}).start();
}
});
};
e.prototype.changeSoltColor = function(t, e, i) {
void 0 === i && (i = 1);
if (this.spineParent && this.spineParent.isValid && this.spineParent.getComponent(sp.Skeleton)) {
var n = this.spineParent.getComponent(sp.Skeleton).findSlot(t);
if (n && n.color) try {
if (e) this._setSlotColor(n, e[0] / 255, e[1] / 255, e[2] / 255, i); else {
var a = n.color;
this._setSlotColor(n, a.r, a.g, a.b, i);
}
} catch (t) {
console.log("changeSoltColor error:", t);
}
}
};
e.prototype._setSlotColor = function(t, e, i, n, a) {
if (t) if (t.setColor) t.setColor(e, i, n, a); else if (t.color) {
var r = t.color;
r.g = i;
r.b = n;
r.a = a;
r.r = e;
}
};
e.prototype.getBoundingBoxToWorld = function() {
var t, e, i = this.node.getBoundingBoxToWorld();
if (_.GLWaterSortAddDragRadio.Instance.isOpen()) {
var n = !this.checkIsFinish() && !(null === (t = this._data) || void 0 === t ? void 0 : t.isLock) && this._itemArr && this._itemArr.length > 0 && (null === (e = this.getCanCrashTube()) || void 0 === e ? void 0 : e.length) > 0;
return _.GLWaterSortAddDragRadio.Instance.expandBoundingBox(i, n);
}
return i;
};
e.prototype.setAllItem = function(t) {
this._itemArr = t;
};
e.prototype.getAllItems = function() {
return this._itemArr;
};
e.prototype.getCanCrashBox = function() {
var t;
this._canCrashBox = [];
this._canCrashBoxIndexArr = [];
if (this._data && !this._data.isLock) for (var e = this.getData().waterData.filter(function(t) {
return -1 != t;
}), n = 0; n < this._itemArr.length; ++n) if (n != this._index && this._itemArr[n] && cc.isValid(this._itemArr[n])) {
var a = this._itemArr[n].getComponent(i);
if (!a.isPlay && (null === (t = a._data) || void 0 === t || !t.isLock) && a.getData()) {
var r = a.getData().waterData.filter(function(t) {
return -1 != t;
}), o = r.length < a.getData().tubeLen, s = e.length > 0;
if (o && s && (0 == r.length || e[0] == r[0])) {
this._canCrashBox.push(a.getBoundingBoxToWorld());
this._canCrashBoxIndexArr.push(a._index);
}
}
}
};
e.prototype.getCanCrashTube = function() {
if (this._data.isLock) return [];
for (var t = this.getData().waterData.filter(function(t) {
return -1 != t;
}), e = [], n = 0; n < this._itemArr.length; ++n) if (n != this._index && this._itemArr[n] && cc.isValid(this._itemArr[n])) {
var a = this._itemArr[n].getComponent(i);
if (a && a.getData() && !a.isPlay && !a._data.isLock && !this.isClick) {
var r = a.getData().waterData.filter(function(t) {
return -1 != t;
}), o = r.length < a.getData().tubeLen, s = t.length > 0;
o && s && (0 == r.length || t[0] == r[0]) && e.push(a._index);
}
}
return e;
};
e.prototype.getAllCanCrashTubes = function() {
if (this._data.isLock) return [];
for (var t = this.getData().waterData.filter(function(t) {
return -1 != t;
}), e = [], n = 0; n < this._itemArr.length; ++n) if (n != this._index && this._itemArr[n] && cc.isValid(this._itemArr[n])) {
var a = this._itemArr[n].getComponent(i);
if (a && a.getData() && !a.isPlay && !a._data.isLock) {
var r = a.getData().waterData.filter(function(t) {
return -1 != t;
}), o = r.length < a.getData().tubeLen, s = t.length > 0;
o && s && (0 == r.length || t[0] == r[0]) && e.push(a._index);
}
}
return e;
};
e.prototype.clearCrashData = function() {
this._canCrashBox = [];
this._crashIndex = null;
this._canCrashBoxIndexArr = null;
};
e.prototype.crashDaoPlay = function() {
console.log("开始碰撞倒水");
if (cc.isValid(this._itemArr) && cc.isValid(this._itemArr[this._crashIndex])) {
var t = this._itemArr[this._crashIndex].getComponent(i);
if (g.default.getInstance().isOpen()) {
g.default.getInstance().trySkipLastAnimation();
g.default.getInstance().setPourPair(this, t);
}
f.default.getInstance().isOpen() && f.default.getInstance().setPourPair(this, t);
var e = this.getData().waterData.filter(function(t) {
return -1 != t;
}), n = t.getData().waterData.filter(function(t) {
return -1 != t;
}), a = e[0], r = Math.min(t.getData().tubeLen, 4) - n.length, o = e.findIndex(function(t, i) {
return i > 0 && t !== e[0];
}), s = e.slice(0, -1 !== o ? o : e.length).length, l = Math.min(r, s), c = n.length + "_" + (n.length + l), h = null == t ? void 0 : t.getPos();
if (null != h) {
var d = !0;
d = !(this.getPos().x > h.x || this.getPos().x == h.x && this.getPos().x <= 0);
var p = .75 * this.node.scale * this.node.height;
h.x - p < -540 ? d = !1 : h.x + p > 540 && (d = !0);
m.default.getInstance().isOpen() && m.default.getInstance().setPourPair(this, t);
this.daoShuiPlay(d, l, cc.v2(h.x, t.node.parent.y - this.node.parent.y), function() {
null == t || t.waterUpPlay(c, a);
}, function() {
t.hideLiushui();
}, a);
t.liZiPlay();
t.hideMarkEff(!0);
t.changeWaterData(!0, l, e[0]);
this.changeWaterData(!1, l, e[0]);
u.GLWaterSortEvent.dispatchEvent(u.GlWaterSortEventName.DAO_SHUI);
this.isGuilde && u.GLWaterSortEvent.dispatchEvent(u.GlWaterSortEventName.GUILE_MOVE_DAO);
}
}
};
e.prototype.checkIsFinish = function() {
if (!this._data) {
console.log("wztest checkIsFinish 数据为空 _data 数据异常");
return !1;
}
return 1 == new Set(this.getWaterData()).size && 4 == this.getReallyWaterData().length;
};
e.prototype.applyGlWaterFinishTipsFullTubeHide = function() {
this.node && cc.isValid(this.node) && h.default.isOpenFinishTips() && this.checkIsFinish() && (this.node.scale = 0);
};
e.prototype.checkIsEmpty = function() {
return 0 == this.getReallyWaterData().length;
};
e.prototype.getReallyWaterData = function() {
return !this._data || this._data.isLock ? [] : this.getWaterData().filter(function(t) {
return -1 != t;
});
};
e.prototype.getWaterData = function() {
return this._data && Array.isArray(this._data.waterData) ? this._data.waterData : [];
};
e.prototype.updateLockData = function(t) {
this._data || (this._data = {});
1 == t.length && 0 == t[0] ? this._data.isLock = !0 : this._data.isLock = !1;
this._data.tubeLen = t.length;
this._data.waterData = t;
};
e.prototype.setLock = function(t) {
this._data && (this._data.isLock = t);
};
e.prototype.playUnlock = function(t) {
var e = this;
this._data.isLock = !1;
this._isPlay = !0;
this.spineParent.getComponent(sp.Skeleton).setAnimation(o.lock, "xg_boliping_jieshuo2", !1);
this.spineParent.getComponent(sp.Skeleton).setCompleteListener(function() {
e.spineParent.getComponent(sp.Skeleton).setCompleteListener(null);
e._isPlay = !1;
t && t();
});
};
e.prototype.changeUnlock = function() {
this.spineParent.getComponent(sp.Skeleton).setAnimation(o.kongIdle, "boliping_" + this.getWaterData().length + "_kong", !1);
};
e.prototype.onUpdateFinishIcon = function() {
h.default.isOpenGouzi() && L.default.getInstance().updateFinishIcon(this);
};
var i;
r([ S(cc.Node) ], e.prototype, "spineParent", void 0);
r([ S([ cc.Node ]) ], e.prototype, "markArr", void 0);
return i = r([ T ], e);
}(cc.Component);
i.GLWaterItem = b;
cc._RF.pop();
}, {
"./GLWaterItemGouziCtrl": "GLWaterItemGouziCtrl",
"./GLWaterRoundLogEventCtr": "GLWaterRoundLogEventCtr",
"./GLWaterSortClickSameOther": "GLWaterSortClickSameOther",
"./GLWaterSortEventTool": "GLWaterSortEventTool",
"./GLWaterSortFeat": "GLWaterSortFeat",
"./GlWaterModel": "GlWaterModel",
"./dynamicData/GLWaterColor": "GLWaterColor",
"./traits/GLWaterClickEmptyFastTraitCtrl": "GLWaterClickEmptyFastTraitCtrl",
"./traits/GLWaterDianzanEffectTraitCtrl": "GLWaterDianzanEffectTraitCtrl",
"./traits/GLWaterHighlightAllPipetteableTubesTrait": "GLWaterHighlightAllPipetteableTubesTrait",
"./traits/GLWaterSortAddDragRadio": "GLWaterSortAddDragRadio",
"./traits/GLWaterSortChangeRegionAfterPutTraitCtrl": "GLWaterSortChangeRegionAfterPutTraitCtrl",
"./traits/GLWaterSortClickAgainSkipAnimationTraitCtrl": "GLWaterSortClickAgainSkipAnimationTraitCtrl",
"./traits/GLWaterSortNextSkipLastAnimationTraitCtrl": "GLWaterSortNextSkipLastAnimationTraitCtrl"
} ],
GLWaterLayout: [ function(t, e, i) {
"use strict";
cc._RF.push(e, "6e89cVTkV1GeI+07A8id66m", "GLWaterLayout");
Object.defineProperty(i, "__esModule", {
value: !0
});
i.GLTubesPos = i.GlTubesLayout = void 0;
i.GlTubesLayout = {
1: [ 1 ],
2: [ 2 ],
3: [ 3 ],
4: [ 2, 2 ],
5: [ 2, 3 ],
6: [ 3, 3 ],
7: [ 3, 4 ],
8: [ 4, 4 ],
9: [ 4, 5 ],
10: [ 5, 5 ],
11: [ 3, 4, 4 ],
12: [ 4, 4, 4 ],
13: [ 4, 4, 5 ],
14: [ 4, 5, 5 ],
15: [ 5, 5, 5 ],
16: [ 5, 5, 6 ],
17: [ 5, 6, 6 ],
18: [ 6, 6, 6 ],
19: [ 6, 6, 7 ],
20: [ 6, 7, 7 ],
21: [ 7, 7, 7 ]
};
i.GLTubesPos = {
2: [ -144, 144 ],
3: [ -252, 0, 252 ],
4: [ -351, -117, 117, 351 ],
5: [ -378, -189, 0, 189, 378 ],
6: [ -378, -225, -76, 76, 225, 378 ],
7: [ -405, -270, -135, 0, 135, 270, 405 ],
8: [ -409, -292, -175, -58, 58, 175, 292, 409 ]
};
cc._RF.pop();
}, {} ],
GLWaterRestartKeepExtraTubeCtrl: [ function(t, e, i) {
"use strict";
cc._RF.push(e, "c8e4aKxnT9OLIp7H25dTDsq", "GLWaterRestartKeepExtraTubeCtrl");
Object.defineProperty(i, "__esModule", {
value: !0
});
var n = t("./GLWaterSortFeat"), a = "GLWaterExtraTubeUnlockLength", r = "[GLWaterRestartKeepExtraTubeReward]", o = function() {
function t() {}
t.getInstance = function() {
null == this._instance && (this._instance = new t());
return this._instance;
};
t.prototype.isRestartKeepExtraTubeRewardOpen = function() {
return n.GLWaterSortFeature.isOpen(n.GLWaterSortFeat2.GLWaterRestartKeepExtraTubeReward);
};
t.prototype.saveExtraTubeUnlockLength = function(t) {
if (this.isRestartKeepExtraTubeRewardOpen() && t > 0) {
cc.sys.localStorage.setItem(a, JSON.stringify(t));
console.log(r + " 保存额外试管解锁长度: " + t);
} else console.log(r + " 特性未开启或长度为0，不保存。特性开启: " + this.isRestartKeepExtraTubeRewardOpen() + ", 长度: " + t);
};
t.prototype.getExtraTubeUnlockLength = function() {
if (!this.isRestartKeepExtraTubeRewardOpen()) {
console.log(r + " 特性未开启，返回0");
return 0;
}
var t = cc.sys.localStorage.getItem(a);
if (t) try {
var e = JSON.parse(t);
console.log(r + " 获取额外试管解锁长度: " + e);
return e;
} catch (t) {
console.log(r + " 解析数据失败: " + t + ", 返回0");
return 0;
}
console.log(r + " 本地存储无数据，返回0");
return 0;
};
t.prototype.clearExtraTubeUnlockLength = function() {
var t = null != cc.sys.localStorage.getItem(a);
cc.sys.localStorage.removeItem(a);
console.log(r + " 清除额外试管解锁长度数据，之前是否有数据: " + t);
};
t.prototype.restoreStackLockAfterReplay = function(t) {
var e = t.saveLockData, i = t.saveStackLockData;
if (this.isRestartKeepExtraTubeRewardOpen() && !n.default.isOpenAdUnlockEmptyTube()) {
var a = this.getExtraTubeUnlockLength();
console.log(r + " 重玩关卡，特性已开启，恢复额外试管解锁长度: " + a);
if (a > 0 && a <= 4) {
for (var o = [], s = 0; s < a; s++) o.push(-1);
e({
data: o,
isLock: !1
});
console.log(r + " 恢复锁数据: " + JSON.stringify(o));
var l = [];
for (s = 0; s < a; s++) l.push(-1);
i([ {
data: l,
isLock: !1
} ]);
console.log(r + " 恢复栈锁数据: " + JSON.stringify(l));
} else {
console.log(r + " 没有保存的解锁进度，使用默认初始化");
this.applyDefaultStackLock(i);
}
} else {
console.log(r + " 特性未开启，使用默认初始化");
this.applyDefaultStackLock(i);
}
};
t.prototype.applyDefaultStackLock = function(t) {
n.default.isOpenAdUnlockEmptyTube() ? t([ {
data: [ -1, -1, -1, -1 ],
isLock: !0
} ]) : n.default.isEffectiveNewTube() ? t([ {
data: [ -1, -1, -1, -1 ],
isLock: !1
} ]) : t([ {
data: [ 0 ],
isLock: !0
} ]);
};
t._instance = null;
return t;
}();
i.default = o;
cc._RF.pop();
}, {
"./GLWaterSortFeat": "GLWaterSortFeat"
} ],
GLWaterRoundLogEventCtr: [ function(t, e, i) {
"use strict";
cc._RF.push(e, "5f749scIQpILrIaMHLMbXig", "GLWaterRoundLogEventCtr");
var n;
Object.defineProperty(i, "__esModule", {
value: !0
});
var a = null === (n = null === window || void 0 === window ? void 0 : window._GLHallClassMap_) || void 0 === n ? void 0 : n.GLHallController, r = t("./GlWaterModel"), o = function() {
function t() {
this.free_revive = 0;
this.ad_revive = 0;
this.free_item = [];
this.ad_item = [];
this.step = 0;
this.forward_step = 0;
this.undo_step = 0;
}
t.prototype.reset = function() {
this.free_revive = 0;
this.ad_revive = 0;
this.free_item = [];
this.ad_item = [];
this.step = 0;
this.forward_step = 0;
this.undo_step = 0;
};
return t;
}(), s = function() {
function t() {
this._dataVo = new o();
this._roundDataPreClear = null;
}
t.getInstance = function() {
null == this._instance && (this._instance = new t());
return this._instance;
};
t.assignData = function(t, e) {
var i = new e();
Object.assign(i, t);
return i;
};
t.prototype.loadData = function() {
var e = cc.sys.localStorage.getItem(t.SaveKey);
if (e && "" != e) {
var i = JSON.parse(e);
this._dataVo = t.assignData(i, o);
} else this._dataVo = new o();
};
t.prototype.saveData = function() {
this._dataVo && cc.sys.localStorage.setItem(t.SaveKey, JSON.stringify(this._dataVo));
};
t.prototype.resetData = function() {
if (this._dataVo) {
this._dataVo.reset();
this.saveData();
}
};
t.prototype.clear = function() {
cc.sys.localStorage.removeItem(t.SaveKey);
};
t.prototype.freeRevive = function() {
if (this._dataVo) {
this._dataVo.free_revive++;
this.saveData();
}
};
t.prototype.adRevive = function() {
if (this._dataVo) {
this._dataVo.ad_revive++;
this.saveData();
}
};
t.prototype.useItem = function(e, i) {
void 0 === i && (i = !1);
if (t.AllPropMap[e]) {
var n = t.AllPropMap[e];
i ? this.adItem(n) : this.freeItem(n);
} else i ? this.adItem(e) : this.freeItem(e);
};
t.prototype.freeItem = function(t) {
if (this._dataVo) {
var e = this._dataVo.free_item.find(function(e) {
return e.id == t;
});
if (e) e.num++; else {
e = {
id: Number(t),
num: 1
};
this._dataVo.free_item.push(e);
}
this.saveData();
}
};
t.prototype.adItem = function(t) {
if (this._dataVo) {
var e = this._dataVo.ad_item.find(function(e) {
return e.id == t;
});
if (e) e.num++; else {
e = {
id: Number(t),
num: 1
};
this._dataVo.ad_item.push(e);
}
this.saveData();
}
};
t.prototype.step = function() {};
t.prototype.forwardStep = function() {
if (this._dataVo) {
this._dataVo.step++;
this._dataVo.forward_step++;
console.log("GLWaterRoundLogEventCtr forwardStep", this._dataVo.forward_step);
console.log("GLWaterRoundLogEventCtr step", this._dataVo.step);
this.saveData();
this.addSavedOperationSteps();
}
};
t.prototype.undoStep = function() {
if (this._dataVo) {
this._dataVo.undo_step++;
this.saveData();
}
};
t.prototype.getLogEventData = function() {
return {
free_revive: this._dataVo.free_revive,
ad_revive: this._dataVo.ad_revive,
free_item: this.parseItemArr(this._dataVo.free_item),
ad_item: this.parseItemArr(this._dataVo.ad_item),
step: this._dataVo.step,
forward_step: this._dataVo.forward_step,
undo_step: this._dataVo.undo_step
};
};
t.prototype.parseItemArr = function(e) {
var i = new Map();
e.forEach(function(t) {
var e = t.id, n = t.num;
return i.set(e, n);
});
return "[" + Object.keys(t.AllPropMap).map(function(e) {
return t.AllPropMap[e];
}).map(function(t) {
return t + ":" + (i.get(t) || 0);
}).join(",") + "]";
};
t.prototype.getOperationStepEventData = function() {
return this._dataVo ? {
step: this._dataVo.step,
forward_step: this._dataVo.forward_step,
undo_step: this._dataVo.undo_step
} : null;
};
t.prototype.getSomeGamedata = function() {
var t, e = null == a ? void 0 : a.data;
return {
GameTime: Math.ceil((null === (t = null == e ? void 0 : e.totalTime) || void 0 === t ? void 0 : t.gl_watersort) || 0),
RealTime: r.GlWaterModel.getElapsedSeconds()
};
};
t.prototype.recordRoundDataPreClear = function(t, e, i) {
this._roundDataPreClear = {};
t && Object.assign(this._roundDataPreClear, t);
e && Object.assign(this._roundDataPreClear, e);
i && Object.assign(this._roundDataPreClear, i);
};
t.prototype.getRoundDataPreClear = function() {
return this._roundDataPreClear;
};
t.prototype.readSavedOperationSteps = function() {
var t = cc.sys.localStorage.getItem("gl_watersort_cached_saved_op_steps");
if (null == t || "" === t) return 0;
var e = Number(t);
return Math.max(0, Math.floor(e));
};
t.prototype.writeSavedOperationSteps = function(t) {
var e = Math.max(0, Math.floor(t));
cc.sys.localStorage.setItem("gl_watersort_cached_saved_op_steps", String(e));
};
t.prototype.resetSavedOperationSteps = function() {
this.writeSavedOperationSteps(0);
};
t.prototype.addSavedOperationSteps = function() {
var t = this.readSavedOperationSteps();
this.writeSavedOperationSteps(t + 1);
};
t._instance = null;
t.AllPropMap = {
1001: 7,
1002: 9,
1003: 8
};
t.SaveKey = "gl_water_user_round_log_event";
return t;
}();
i.default = s;
cc._RF.pop();
}, {
"./GlWaterModel": "GlWaterModel"
} ],
GLWaterSkipLastStepTraitCtrl: [ function(t, e, i) {
"use strict";
cc._RF.push(e, "52199QpniNE1YsnW6XiE4ns", "GLWaterSkipLastStepTraitCtrl");
Object.defineProperty(i, "__esModule", {
value: !0
});
var n = t("../GLWaterItem"), a = function() {
function t() {
this._featureName = "GLWaterSkipLastStep";
}
t.getInstance = function() {
null == this._instance && (this._instance = new t());
return this._instance;
};
t.prototype.isOpen = function() {
return GL.Game.IsFeatureOpen(this._featureName);
};
t.prototype.checkCondition = function(t) {
var e;
if (null == t || 0 == t.length) return !1;
for (var i = 0, a = 0, r = 0, o = [], s = 0; s < t.length; s++) {
var l = null === (e = t[s]) || void 0 === e ? void 0 : e.getComponent(n.GLWaterItem);
if (null != l) if (l.checkIsFinish()) i++; else if (l.checkIsEmpty()) a++; else {
var c = l.getReallyWaterData();
if (1 != new Set(c).size) return !1;
r++;
o.push(c[0]);
}
}
return 2 == r && 1 == new Set(o).size && i + a + r == t.length;
};
t._instance = null;
return t;
}();
i.default = a;
cc._RF.pop();
}, {
"../GLWaterItem": "GLWaterItem"
} ],
GLWaterSortAddDragRadio: [ function(t, e, i) {
"use strict";
cc._RF.push(e, "8a4c9o32W5PzZhxVbm/dSLI", "GLWaterSortAddDragRadio");
Object.defineProperty(i, "__esModule", {
value: !0
});
i.GLWaterSortAddDragRadio = void 0;
var n = function() {
function t() {
this._lastPos = null;
}
Object.defineProperty(t, "Instance", {
get: function() {
this._instance || (this._instance = new t());
return this._instance;
},
enumerable: !1,
configurable: !0
});
t.prototype.isOpen = function() {
var t = GL.Game.IsFeatureOpen("GLWaterSortAddDragRadio");
console.log("GLWaterSortAddDragRadio:拖动试管倍率150%特性是否开启:" + t);
return t;
};
t.prototype.getDragMultiplier = function() {
return 1.5;
};
t.prototype.getAnimSpeed = function() {
return this.isOpen() ? this.getDragMultiplier() : 1;
};
t.prototype.handleTouchStart = function(t) {
this.isOpen() && (this._lastPos = t ? t.clone() : null);
};
t.prototype.handleDragStart = function(t) {
this.isOpen() && (this._lastPos || (this._lastPos = t ? t.clone() : null));
};
t.prototype.computeDragPosition = function(t, e, i) {
if (!this.isOpen()) return null;
var n = this.getDragMultiplier(), a = this._lastPos || i, r = t.sub(a).mul(n), o = e.add(cc.v3(r));
this._lastPos = t.clone();
return {
newPosition: o,
newStartPos: t
};
};
t.prototype.handleTouchEnd = function() {
this.isOpen() && (this._lastPos = null);
};
t.prototype.shouldTreatCancelAsEnd = function(t) {
if (this.isOpen() && t) {
console.log("拖动倍率特性：将TOUCH_CANCEL当作TOUCH_END处理");
return !0;
}
return !1;
};
t.prototype.expandBoundingBox = function(t, e) {
if (!e) return t;
var i = t.x + t.width / 2, n = t.y + t.height / 2, a = 1.2 * t.width, r = 1.2 * t.height;
return cc.rect(i - a / 2, n - r / 2, a, r);
};
t.prototype.playHuangAnimation = function(t, e, i) {
var n = this.getDragMultiplier(), a = 5 / 30 / n;
t.timeScale = n;
t.setAnimation(i, "water_" + e + "_huang", !1) && t.setCompleteListener(function(i) {
if (i && i.animation && i.animation.name === "water_" + e + "_huang") {
t.timeScale = 1;
t.setCompleteListener(null);
}
});
return a;
};
t.prototype.setLastPos = function(t) {
this._lastPos = t ? t.clone() : null;
};
t.prototype.getLastPos = function() {
return this._lastPos;
};
t._instance = null;
return t;
}();
i.GLWaterSortAddDragRadio = n;
cc._RF.pop();
}, {} ],
GLWaterSortChangeRegionAfterPutTraitCtrl: [ function(t, e, i) {
"use strict";
cc._RF.push(e, "330113001-a1b2-c3d4-e5f6-abcdef123456", "GLWaterSortChangeRegionAfterPutTraitCtrl");
var n = this && this.__values || function(t) {
var e = "function" == typeof Symbol && Symbol.iterator, i = e && t[e], n = 0;
if (i) return i.call(t);
if (t && "number" == typeof t.length) return {
next: function() {
t && n >= t.length && (t = void 0);
return {
value: t && t[n++],
done: !t
};
}
};
throw new TypeError(e ? "Object is not iterable." : "Symbol.iterator is not defined.");
}, a = this && this.__read || function(t, e) {
var i = "function" == typeof Symbol && t[Symbol.iterator];
if (!i) return t;
var n, a, r = i.call(t), o = [];
try {
for (;(void 0 === e || e-- > 0) && !(n = r.next()).done; ) o.push(n.value);
} catch (t) {
a = {
error: t
};
} finally {
try {
n && !n.done && (i = r.return) && i.call(r);
} finally {
if (a) throw a.error;
}
}
return o;
};
Object.defineProperty(i, "__esModule", {
value: !0
});
var r = t("../GLWaterItem"), o = function() {
function t() {
this._featureName = "GLWaterSortChangeRegionAfterPut";
this._featureId = 330113001;
this._selectedTubeIndex = -1;
this._itemArr = [];
this._extendedHitAreas = new Map();
this._mainNode = null;
this._boundTouchHandler = null;
this._eventDispatcher = null;
}
t.getInstance = function() {
null == this._instance && (this._instance = new t());
return this._instance;
};
t.prototype.isOpen = function() {
return GL.Game.IsFeatureOpen(this._featureName);
};
t.prototype.getFeatureId = function() {
return this._featureId;
};
t.prototype.setItemArr = function(t) {
this._itemArr = t;
};
t.prototype.onTubeSelected = function(t, e) {
var i, a, o;
this._selectedTubeIndex = t;
this._itemArr = e;
this._extendedHitAreas.clear();
if (e && 0 !== e.length && !(t < 0)) {
var s = e[t];
if (s && cc.isValid(s)) {
var l = s.getComponent(r.GLWaterItem);
if (l && l.getData()) {
var c = (null === (o = l.getData().waterData) || void 0 === o ? void 0 : o.filter(function(t) {
return -1 !== t;
})) || [];
if (0 !== c.length) {
var u = c[0], h = this._findCanPourIntoTubes(e, t, u);
try {
for (var d = n(h), p = d.next(); !p.done; p = d.next()) {
var f = p.value;
this._calculateExtendedHitArea(e, f);
}
} catch (t) {
i = {
error: t
};
} finally {
try {
p && !p.done && (a = d.return) && a.call(d);
} finally {
if (i) throw i.error;
}
}
}
}
}
}
};
t.prototype.onTubeDeselected = function() {
this._selectedTubeIndex = -1;
this._extendedHitAreas.clear();
};
t.prototype.checkExtendedHitArea = function(t) {
var e, i, r, o;
if (this._selectedTubeIndex < 0 || 0 === this._extendedHitAreas.size) return -1;
var s = t, l = cc.Camera.main;
if (l) {
var c = l.getScreenToWorldPoint(t);
s = cc.v2(c.x, c.y);
}
var u = -1, h = Infinity;
try {
for (var d = n(this._extendedHitAreas), p = d.next(); !p.done; p = d.next()) {
var f = a(p.value, 2), g = f[0], v = f[1];
try {
for (var m = (r = void 0, n(v)), _ = m.next(); !_.done; _ = m.next()) {
var y = _.value;
if (this._rectContainsPoint(y, s)) {
var L = this._itemArr[g];
if (L && cc.isValid(L)) {
var G = L.getBoundingBoxToWorld(), T = G.x + G.width / 2, S = G.y + G.height / 2, b = Math.abs(s.x - T) + Math.abs(s.y - S);
if (b < h) {
h = b;
u = g;
}
} else u < 0 && (u = g);
}
}
} catch (t) {
r = {
error: t
};
} finally {
try {
_ && !_.done && (o = m.return) && o.call(m);
} finally {
if (r) throw r.error;
}
}
}
} catch (t) {
e = {
error: t
};
} finally {
try {
p && !p.done && (i = d.return) && i.call(d);
} finally {
if (e) throw e.error;
}
}
return u;
};
t.prototype._rectContainsPoint = function(t, e) {
return e.x >= t.x && e.x <= t.x + t.width && e.y >= t.y && e.y <= t.y + t.height;
};
t.prototype.getSelectedTubeIndex = function() {
return this._selectedTubeIndex;
};
t.prototype.getExtendedHitAreas = function() {
return this._extendedHitAreas;
};
t.prototype._findCanPourIntoTubes = function(t, e, i) {
for (var n, a = [], o = 0; o < t.length; o++) if (o !== e) {
var s = t[o];
if (s && cc.isValid(s)) {
var l = s.getComponent(r.GLWaterItem);
if (l && l.getData() && !l.getData().isLock && !l.isPlay) {
var c = (null === (n = l.getData().waterData) || void 0 === n ? void 0 : n.filter(function(t) {
return -1 !== t;
})) || [], u = l.getData().tubeLen || 4;
c.length < u && (0 === c.length || c[0] === i) && a.push(o);
}
}
}
return a;
};
t.prototype._calculateExtendedHitArea = function(t, e) {
var i = t[e];
if (i && cc.isValid(i)) {
var n = [], a = this._getSameLevelTubes(t, e), r = this._findAdjacentFinishedTubes(t, e, a), o = r.leftFinishedTubes, s = r.rightFinishedTubes;
if (o.length > 0) {
var l = o[o.length - 1], c = this._hasCanPourTubeOnOtherSide(t, l, a, "left"), u = this._calculateLeftExtendedArea(t, e, o, c);
u && n.push(u);
}
if (s.length > 0) {
var h = s[s.length - 1], d = (c = this._hasCanPourTubeOnOtherSide(t, h, a, "right"), 
this._calculateRightExtendedArea(t, e, s, c));
d && n.push(d);
}
n.length > 0 && this._extendedHitAreas.set(e, n);
}
};
t.prototype._getSameLevelTubes = function(t, e) {
var i = [], n = t[e];
if (!n || !cc.isValid(n)) return i;
for (var a = n.parent, r = 0; r < t.length; r++) {
var o = t[r];
o && cc.isValid(o) && o.parent === a && i.push(r);
}
i.sort(function(e, i) {
var n, a;
return ((null === (n = t[e]) || void 0 === n ? void 0 : n.x) || 0) - ((null === (a = t[i]) || void 0 === a ? void 0 : a.x) || 0);
});
return i;
};
t.prototype._findAdjacentFinishedTubes = function(t, e, i) {
var n = [], a = [], o = i.indexOf(e);
if (-1 === o) return {
leftFinishedTubes: n,
rightFinishedTubes: a
};
for (var s = o - 1; s >= 0; s--) {
var l = i[s], c = t[l];
if (c && cc.isValid(c)) {
var u = c.getComponent(r.GLWaterItem);
if (u) {
if (!u.checkIsFinish()) break;
n.push(l);
}
}
}
for (s = o + 1; s < i.length; s++) {
var h = i[s], d = t[h];
if (d && cc.isValid(d)) {
var p = d.getComponent(r.GLWaterItem);
if (p) {
if (!p.checkIsFinish()) break;
a.push(h);
}
}
}
return {
leftFinishedTubes: n,
rightFinishedTubes: a
};
};
t.prototype._hasCanPourTubeOnOtherSide = function(t, e, i, n) {
var a, o = i.indexOf(e);
if (-1 === o) return !1;
var s = t[this._selectedTubeIndex];
if (!s || !cc.isValid(s)) return !1;
var l = s.getComponent(r.GLWaterItem);
if (!l || !l.getData()) return !1;
var c = (null === (a = l.getData().waterData) || void 0 === a ? void 0 : a.filter(function(t) {
return -1 !== t;
})) || [];
if (0 === c.length) return !1;
var u = c[0];
if ("left" === n) {
for (var h = o - 1; h >= 0; h--) if ((d = i[h]) !== this._selectedTubeIndex && (p = t[d]) && cc.isValid(p) && (f = p.getComponent(r.GLWaterItem)) && f.getData() && !f.checkIsFinish()) {
if (this._canPourInto(f, u)) return !0;
break;
}
} else for (h = o + 1; h < i.length; h++) {
var d;
if ((d = i[h]) !== this._selectedTubeIndex) {
var p;
if ((p = t[d]) && cc.isValid(p)) {
var f;
if ((f = p.getComponent(r.GLWaterItem)) && f.getData() && !f.checkIsFinish()) {
if (this._canPourInto(f, u)) return !0;
break;
}
}
}
}
return !1;
};
t.prototype._canPourInto = function(t, e) {
var i;
if (!t.getData()) return !1;
if (t.getData().isLock) return !1;
if (t.isPlay) return !1;
var n = (null === (i = t.getData().waterData) || void 0 === i ? void 0 : i.filter(function(t) {
return -1 !== t;
})) || [], a = t.getData().tubeLen || 4;
return n.length < a && (0 === n.length || n[0] === e);
};
t.prototype._calculateLeftExtendedArea = function(t, e, i, n) {
if (0 === i.length) return null;
var a = t[e];
if (!a || !cc.isValid(a)) return null;
var r = t[i[i.length - 1]];
if (!r || !cc.isValid(r)) return null;
var o, s = a.getBoundingBoxToWorld(), l = r.getBoundingBoxToWorld(), c = s.xMin;
o = n ? l.xMin + l.width / 2 : l.xMin;
var u = s.yMin, h = s.height;
return c <= o ? null : new cc.Rect(o, u, c - o, h);
};
t.prototype._calculateRightExtendedArea = function(t, e, i, n) {
if (0 === i.length) return null;
var a = t[e];
if (!a || !cc.isValid(a)) return null;
var r = t[i[i.length - 1]];
if (!r || !cc.isValid(r)) return null;
var o, s = a.getBoundingBoxToWorld(), l = r.getBoundingBoxToWorld(), c = s.xMax;
o = n ? l.xMin + l.width / 2 : l.xMax;
var u = s.yMin, h = s.height;
return o <= c ? null : new cc.Rect(c, u, o - c, h);
};
t.prototype.reset = function() {
this._selectedTubeIndex = -1;
this._itemArr = [];
this._extendedHitAreas.clear();
};
t.prototype.registerToMain = function(t, e) {
if (this.isOpen()) {
this._mainNode = t;
this._eventDispatcher = e;
this._boundTouchHandler = this._onExtendedAreaTouchStart.bind(this);
t.on(cc.Node.EventType.TOUCH_START, this._boundTouchHandler, this, !0);
}
};
t.prototype.unregisterFromMain = function() {
if (this.isOpen()) {
this._mainNode && cc.isValid(this._mainNode) && this._boundTouchHandler && this._mainNode.off(cc.Node.EventType.TOUCH_START, this._boundTouchHandler, this, !0);
this.reset();
this._mainNode = null;
this._boundTouchHandler = null;
this._eventDispatcher = null;
}
};
t.prototype._onExtendedAreaTouchStart = function(t) {
var e;
if (this.isOpen() && !(this._selectedTubeIndex < 0)) {
var i = t.getLocation(), n = this.checkExtendedHitArea(i);
if (n >= 0 && n < this._itemArr.length) {
var a = this._itemArr[n];
if (a && cc.isValid(a)) {
console.log("【GLWaterSortChangeRegionAfterPut】扩展热区点击，转发到试管 " + n);
if (this._eventDispatcher) {
var o = a.getComponent(r.GLWaterItem);
this._eventDispatcher("CLICK_TUBE_END", {
index: n,
waterData: (null === (e = null == o ? void 0 : o.getData()) || void 0 === e ? void 0 : e.waterData) || []
});
}
}
}
}
};
t.prototype.handleTubeUpWithSwitch = function(t, e) {
if (this.isOpen()) {
this.onTubeDeselected();
this.onTubeSelected(t, e);
}
};
t.prototype.handleTubeUp = function(t, e) {
this.isOpen() && this.onTubeSelected(t, e);
};
t.prototype.handleTubeDown = function() {
this.isOpen() && this.onTubeDeselected();
};
t._instance = null;
return t;
}();
i.default = o;
cc._RF.pop();
}, {
"../GLWaterItem": "GLWaterItem"
} ],
GLWaterSortClickAgainSkipAnimationTraitCtrl: [ function(t, e, i) {
"use strict";
cc._RF.push(e, "d0e3b9enUhGy6uZcXedw610", "GLWaterSortClickAgainSkipAnimationTraitCtrl");
Object.defineProperty(i, "__esModule", {
value: !0
});
var n = t("../GLWaterSortEventTool"), a = function() {
function t() {
this._featureName = "GLWaterSortClickAgainSkipAnimation";
this._sourceItem = null;
this._targetItem = null;
}
t.getInstance = function() {
null == this._instance && (this._instance = new t());
return this._instance;
};
t.prototype.isOpen = function() {
return GL.Game.IsFeatureOpen(this._featureName);
};
t.prototype.setPourPair = function(t, e) {
this._sourceItem = t;
this._targetItem = e;
};
t.prototype.clearPourPair = function() {
this._sourceItem = null;
this._targetItem = null;
};
t.prototype.isAnimationPlaying = function() {
return !!this._sourceItem && (this._sourceItem.isPlay || this._targetItem && this._targetItem.isPlayUp);
};
t.prototype.trySkipAnimation = function() {
if (!this.isAnimationPlaying()) return !1;
this.doSkipAnimation();
return !0;
};
t.prototype.doSkipAnimation = function() {
this._sourceItem && this._sourceItem.isPlay && this.skipSourceAnimation(this._sourceItem);
this._targetItem && this.skipTargetAnimation(this._targetItem);
this.clearPourPair();
};
t.prototype.skipSourceAnimation = function(t) {
if (t.isPlay) {
cc.Tween.stopAllByTarget(t.node);
var e = t.getSpineParent(), i = null == e ? void 0 : e.getComponent(sp.Skeleton);
if (i) {
i.setEventListener(null);
i.timeScale = 1;
i.clearTracks();
i._skeleton && i._skeleton.setToSetupPose && i._skeleton.setToSetupPose();
}
t.setIsPlay(!1);
t.isClick = !1;
t.layoutParent && cc.isValid(t.layoutParent) && (t.node.parent = t.layoutParent);
var a = t.getPos();
if (a) {
t.node.x = a.x;
t.node.y = a.y;
}
t.drawTube();
t.showMark();
n.GLWaterSortEvent.dispatchEvent(n.GlWaterSortEventName.CHANGE_ORDER, {
index: t.getIndex(),
isMove: !1,
daoShuiEnd: !0
});
}
};
t.prototype.skipTargetAnimation = function(t) {
var e = t.getSpineParent(), i = null == e ? void 0 : e.getComponent(sp.Skeleton);
if (t.isPlayUp) {
if (i) {
cc.Tween.stopAllByTarget(i);
i.clearTracks();
i.setEventListener(null);
i.setEndListener(null);
i.setCompleteListener(null);
i.timeScale = 1;
}
t.setIsPlayUp(!1);
t.hideLiushui();
t.hideBowen(!0);
t.hideQiPao(!0);
}
t.hideLight();
t.hideLizi();
t.drawTube();
t.checkIsFinish() && n.GLWaterSortEvent.dispatchEvent(n.GlWaterSortEventName.MAN_PING);
};
t._instance = null;
return t;
}();
i.default = a;
cc._RF.pop();
}, {
"../GLWaterSortEventTool": "GLWaterSortEventTool"
} ],
GLWaterSortClickSameOther: [ function(t, e, i) {
"use strict";
cc._RF.push(e, "b8277p9Te9LIK0DQz2WXMQF", "GLWaterSortClickSameOther");
Object.defineProperty(i, "__esModule", {
value: !0
});
i.GLWaterSortClickSameOther = void 0;
var n = t("./GLWaterSortEventTool"), a = function() {
function t() {}
Object.defineProperty(t, "Instance", {
get: function() {
null == t._instance && (t._instance = new t());
return t._instance;
},
enumerable: !1,
configurable: !0
});
t.prototype.isOpen = function() {
return GL.Game.IsFeatureOpen("GLWaterSortClickSameOther");
};
t.prototype.handleClick = function(t) {
var e = this.getSelectedItem(t._itemArr);
if (!e && this.isEmpty(t)) {
console.log("空瓶子不可被选中");
return !0;
}
if (e) {
var i = e.getComponent("GLWaterItem");
if (i && i._index === t._index) {
this.doDownHuang(t);
return !0;
}
if (!this.canPourWater(t, i)) {
console.log("不能倒水，还原选中瓶子");
this.doDownHuang(i);
return !0;
}
console.log("可以倒水，继续执行后续逻辑");
}
return !1;
};
t.prototype.doDownHuang = function(t) {
if (t) {
GL.Audio.playEffect("resources/audio/water_undo_new", "gl_watersort");
console.log("播放水瓶下降音效");
t.downHuang();
t.isGuilde && n.GLWaterSortEvent.dispatchEvent(n.GlWaterSortEventName.GUILDE_CLICK_DOWN, {
index: t._index,
waterData: t.getWaterData()
});
}
};
t.prototype.canPourWater = function(t, e) {
if (!t || !e) return !1;
if (!e._data || !t._data) return !1;
if (e._data.isLock || t._data.isLock) return !1;
if (t.isPlay || e.isPlay) return !1;
var i = e.getData().waterData.filter(function(t) {
return -1 != t;
}), n = t.getData().waterData.filter(function(t) {
return -1 != t;
}), a = n.length < t.getData().tubeLen, r = i.length > 0;
return !(!a || !r || 0 != n.length && i[0] != n[0]);
};
t.prototype.isEmpty = function(t) {
if (!t || !t.getComponent) return !1;
var e = t.getComponent("GLWaterItem");
return !!e && e.checkIsEmpty();
};
t.prototype.getSelectedItem = function(t) {
if (!t || 0 === t.length) return null;
for (var e = 0; e < t.length; e++) if (t[e] && cc.isValid(t[e])) {
var i = t[e].getComponent("GLWaterItem");
if (i && i.isClick && !i.isPlay) return t[e];
}
return null;
};
t._instance = null;
return t;
}();
i.GLWaterSortClickSameOther = a;
cc._RF.pop();
}, {
"./GLWaterSortEventTool": "GLWaterSortEventTool"
} ],
GLWaterSortEventTool: [ function(t, e, i) {
"use strict";
cc._RF.push(e, "e18faHIi1dL2b4H0TO91lik", "GLWaterSortEventTool");
Object.defineProperty(i, "__esModule", {
value: !0
});
i.GlWaterSortEventName = i.GLWaterSortEvent = void 0;
var n = function() {
function t() {}
t.addListener = function(t, e, i) {
null == this.event[t] && (this.event[t] = []);
for (var n = 0; n < this.event[t].length; n++) {
var a = this.event[t][n];
if (i == a.target && e.toString() == a.callback.toString()) return;
}
this.event[t].push({
callback: e,
target: i
});
};
t.removeListener = function(t, e, i) {
var n = this.event[t];
if (n) for (var a = n.length - 1; a >= 0; a--) {
var r = n[a];
i == r.target && e.toString() == r.callback.toString() && this.event[t].splice(a, 1);
}
};
t.removeListenerByTarget = function(t) {
for (var e in this.event) if (this.event.hasOwnProperty(e)) for (var i = this.event[e], n = 0; n < i.length; n++) i[n].target == t && i.splice(n, 1);
};
t.removeAllListener = function(t) {
if (null != this.event[t]) {
var e = this.event[t];
if (e) for (var i = 0; i < e.length; i++) e[i] = null;
}
};
t.resetAllListener = function() {
for (var t in this.event) this.event.hasOwnProperty(t) && delete this.event[t];
};
t.dispatchEvent = function(t, e) {
void 0 === e && (e = null);
if (null != this.event[t]) {
var i = this.event[t];
if (i) for (var n = 0; n < i.length; n++) {
var a = i[n];
a.callback.call(a.target, e);
}
}
};
t.event = {};
return t;
}();
i.GLWaterSortEvent = n;
(function(t) {
t.CLICK_TUBE_END = "CLICK_TUBE_END";
t.CHANGE_ORDER = "CHANGE_ORDER";
t.MAN_PING = "MAN_PING";
t.DAO_SHUI = "DAO_SHUI";
t.GUO_GUAN = "GUO_GUAN";
t.ON_INIT = "ON_INIT";
t.ON_INIT_FINISH = "ON_INIT_FINISH";
t.GUILDE_CLICK_DOWN = "GUILDE_CLICK_DOWN";
t.GUILDE_CLICK_UP = "GUILDE_CLICK_UP";
t.GUILDE_MAN_PING = "GUILDE_MAN_PING";
t.GUILDE_MOVE_TUBE = "GUILDE_MOVE_TUBE";
t.GUILE_MOVE_DAO = "GUILE_MOVE_DAO";
t.GUILE_MOVE_DAO_END = "GUILE_MOVE_DAO_END";
t.GUILE_END = "GUILE_END";
t.DRAW_MARK = "DRAW_MARK";
t.FINISH_TIPS_REFRESH = "FINISH_TIPS_REFRESH";
t.HIGHLIGHT_TIPS = "HIGHLIGHT_TIPS";
t.WATER_DEAD = "WATER_DEAD";
})(i.GlWaterSortEventName || (i.GlWaterSortEventName = {}));
cc._RF.pop();
}, {} ],
GLWaterSortFailUi: [ function(t, e, i) {
"use strict";
cc._RF.push(e, "f308dGN+xVOwLo7p7EGa/W+", "GLWaterSortFailUi");
var n, a, r = this && this.__extends || (n = function(t, e) {
return (n = Object.setPrototypeOf || {
__proto__: []
} instanceof Array && function(t, e) {
t.__proto__ = e;
} || function(t, e) {
for (var i in e) Object.prototype.hasOwnProperty.call(e, i) && (t[i] = e[i]);
})(t, e);
}, function(t, e) {
n(t, e);
function i() {
this.constructor = t;
}
t.prototype = null === e ? Object.create(e) : (i.prototype = e.prototype, new i());
}), o = this && this.__decorate || function(t, e, i, n) {
var a, r = arguments.length, o = r < 3 ? e : null === n ? n = Object.getOwnPropertyDescriptor(e, i) : n;
if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) o = Reflect.decorate(t, e, i, n); else for (var s = t.length - 1; s >= 0; s--) (a = t[s]) && (o = (r < 3 ? a(o) : r > 3 ? a(e, i, o) : a(e, i)) || o);
return r > 3 && o && Object.defineProperty(e, i, o), o;
}, s = this && this.__awaiter || function(t, e, i, n) {
return new (i || (i = Promise))(function(a, r) {
function o(t) {
try {
l(n.next(t));
} catch (t) {
r(t);
}
}
function s(t) {
try {
l(n.throw(t));
} catch (t) {
r(t);
}
}
function l(t) {
t.done ? a(t.value) : (e = t.value, e instanceof i ? e : new i(function(t) {
t(e);
})).then(o, s);
var e;
}
l((n = n.apply(t, e || [])).next());
});
}, l = this && this.__generator || function(t, e) {
var i, n, a, r, o = {
label: 0,
sent: function() {
if (1 & a[0]) throw a[1];
return a[1];
},
trys: [],
ops: []
};
return r = {
next: s(0),
throw: s(1),
return: s(2)
}, "function" == typeof Symbol && (r[Symbol.iterator] = function() {
return this;
}), r;
function s(t) {
return function(e) {
return l([ t, e ]);
};
}
function l(r) {
if (i) throw new TypeError("Generator is already executing.");
for (;o; ) try {
if (i = 1, n && (a = 2 & r[0] ? n.return : r[0] ? n.throw || ((a = n.return) && a.call(n), 
0) : n.next) && !(a = a.call(n, r[1])).done) return a;
(n = 0, a) && (r = [ 2 & r[0], a.value ]);
switch (r[0]) {
case 0:
case 1:
a = r;
break;

case 4:
o.label++;
return {
value: r[1],
done: !1
};

case 5:
o.label++;
n = r[1];
r = [ 0 ];
continue;

case 7:
r = o.ops.pop();
o.trys.pop();
continue;

default:
if (!(a = o.trys, a = a.length > 0 && a[a.length - 1]) && (6 === r[0] || 2 === r[0])) {
o = 0;
continue;
}
if (3 === r[0] && (!a || r[1] > a[0] && r[1] < a[3])) {
o.label = r[1];
break;
}
if (6 === r[0] && o.label < a[1]) {
o.label = a[1];
a = r;
break;
}
if (a && o.label < a[2]) {
o.label = a[2];
o.ops.push(r);
break;
}
a[2] && o.ops.pop();
o.trys.pop();
continue;
}
r = e.call(t, o);
} catch (t) {
r = [ 6, t ];
n = 0;
} finally {
i = a = 0;
}
if (5 & r[0]) throw r[1];
return {
value: r[0] ? r[1] : void 0,
done: !0
};
}
};
Object.defineProperty(i, "__esModule", {
value: !0
});
i.GLWaterSortFailUi = void 0;
var c = t("./GlWaterMain"), u = t("./GLWaterSortFeat"), h = null === (a = null === window || void 0 === window ? void 0 : window._GLHallClassMap_) || void 0 === a ? void 0 : a.GLHallControllerClass, d = cc._decorator.ccclass, p = function(t) {
r(e, t);
function e() {
var e = null !== t && t.apply(this, arguments) || this;
e._btnClose = null;
e._btnOk = null;
e._btnRestart = null;
e._isWired = !1;
return e;
}
i = e;
e.prototype.onLoad = function() {
this.wireButtons();
};
e.prototype.onDestroy = function() {
this.offButtons();
i._current === this && (i._current = null);
};
e.show = function(t) {
return s(this, void 0, Promise, function() {
var e, n, a, r, o, s;
return l(this, function(l) {
switch (l.label) {
case 0:
if (!u.default.isOpenRevive()) {
console.log("[GLWaterFailUi] 复活特性未开启，不显示面板");
return [ 2 ];
}
if (this._current && cc.isValid(this._current.node)) {
console.log("[GLWaterFailUi] 复活面板已存在，不重复创建");
return [ 2 ];
}
e = null;
l.label = 1;

case 1:
l.trys.push([ 1, 3, , 4 ]);
return [ 4, GL.Game.resLoaderLoadBundle(i.BundleName, !0) ];

case 2:
e = l.sent();
return [ 3, 4 ];

case 3:
n = l.sent();
console.error("[GLWaterFailUi] 加载 bundle 失败:", n);
return [ 2 ];

case 4:
if (!e) {
console.error("[GLWaterFailUi] bundle 加载失败: " + i.BundleName);
return [ 2 ];
}
return [ 4, new Promise(function(t) {
e.load(i.PrefabPath, cc.Prefab, function(e, i) {
if (!e && i instanceof cc.Prefab) t(i); else {
console.error("[GLWaterFailUi] 加载 FailUi.prefab 失败:", e);
t(null);
}
});
}) ];

case 5:
if (!(a = l.sent())) return [ 2 ];
if (!(r = i.resolveParent(t)) || !cc.isValid(r)) {
console.warn("[GLWaterFailUi] 复活面板父节点无效，无法创建");
return [ 2 ];
}
(o = cc.instantiate(a)).name = "GLWaterSortFailUi";
o.parent = r;
o.setSiblingIndex(r.children.length - 1);
(s = o.getComponent(i)) || (s = o.addComponent(i));
s.wireButtons();
i._current = s;
console.log("[GLWaterFailUi] 复活面板创建完成");
return [ 2 ];
}
});
});
};
e.prototype.close = function() {
i._current === this && (i._current = null);
this.node && cc.isValid(this.node) && this.node.destroy();
var t = c.GlWaterMain.Instance;
t && t.resetDeadNotified();
console.log("[GLWaterFailUi] 复活面板已关闭");
};
e.prototype.wireButtons = function() {
if (!this._isWired) {
this._btnClose = this.node.getChildByName("btn_close");
this._btnOk = this.node.getChildByName("btn_ok");
this._btnRestart = this.node.getChildByName("btn_restart");
this.offButtons();
this._btnClose && this._btnClose.on(cc.Node.EventType.TOUCH_END, this.onClickClose, this);
this._btnOk && this._btnOk.on(cc.Node.EventType.TOUCH_END, this.onClickOk, this);
this._btnRestart && this._btnRestart.on(cc.Node.EventType.TOUCH_END, this.onClickRestart, this);
this._isWired = !0;
this._btnClose && this._btnOk && this._btnRestart || console.warn("[GLWaterFailUi] 按钮缺失 btn_close=" + !!this._btnClose + " btn_ok=" + !!this._btnOk + " btn_restart=" + !!this._btnRestart);
}
};
e.prototype.offButtons = function() {
this._btnClose && this._btnClose.off(cc.Node.EventType.TOUCH_END, this.onClickClose, this);
this._btnOk && this._btnOk.off(cc.Node.EventType.TOUCH_END, this.onClickOk, this);
this._btnRestart && this._btnRestart.off(cc.Node.EventType.TOUCH_END, this.onClickRestart, this);
this._isWired = !1;
};
e.prototype.onClickClose = function() {
this.close();
console.log("[GLWaterFailUi] 点击关闭：关闭复活面板并退出游戏");
null == h || h.Exit(GL.Const.ExitGameType.FromGameMain);
};
e.prototype.onClickOk = function() {
console.log("[GLWaterFailUi] 点击确定：关闭面板并看广告复活");
this.close();
this.watchAdAndRevive();
};
e.prototype.onClickRestart = function() {
console.log("[GLWaterFailUi] 点击重开：关闭面板并执行重开");
this.close();
var t = c.GlWaterMain.Instance;
t ? t.on_click_replay_direct() : console.warn("[GLWaterFailUi] GlWaterMain 实例不存在，无法重开");
};
e.prototype.watchAdAndRevive = function() {
var t = c.GlWaterMain.Instance;
t ? t.showRewardAds(function() {
console.log("[GLWaterFailUi] 广告观看成功，新增空试管复活");
t.reviveAddEmptyTube();
}) : console.warn("[GLWaterFailUi] GlWaterMain 实例不存在，无法复活");
};
e.resolveParent = function(t) {
if (t && cc.isValid(t)) return t;
var e = cc.director.getScene();
if (e && cc.isValid(e) && (n = e.getChildByName("UIPanel")) && cc.isValid(n)) return n;
var i = cc.find("Canvas");
if (i && cc.isValid(i)) {
var n;
return (n = i.getChildByName("UIPanel")) && cc.isValid(n) ? n : i;
}
return e;
};
var i;
e.BundleName = "Remote_gl_watersort_failUi";
e.PrefabPath = "prefabs/FailUi";
e._current = null;
return i = o([ d ], e);
}(cc.Component);
i.GLWaterSortFailUi = p;
cc._RF.pop();
}, {
"./GLWaterSortFeat": "GLWaterSortFeat",
"./GlWaterMain": "GlWaterMain"
} ],
GLWaterSortFeat: [ function(t, e, i) {
"use strict";
cc._RF.push(e, "0ebabCZ9+VMBpH73ZR/nTtr", "GLWaterSortFeat");
Object.defineProperty(i, "__esModule", {
value: !0
});
i.GLWaterSortFeature = i.tryShakeVibrationWaterSort = i.GLWaterSortFeat2 = void 0;
var n;
(function(t) {
t.GLWaterCanPutTips = "GLWaterCanPutTips";
t.GLWaterSingleAutoMove = "GLWaterSingleAutoMove";
t.GLWaterDianzanEffect = "GLWaterDianzanEffect";
t.GLWaterFinishTips = "GLWaterFinishTips";
t.GLWaterRestartKeepExtraTubeReward = "GLWaterRestartKeepExtraTubeReward";
t.GLWaterRevertNumNew = "GLWaterRevertNumNew";
t.GLWaterGouzi = "GLWaterGouzi";
t.GLUseRandomReplaceLight = "GLUseRandomReplaceLight";
t.GLWaterHighlightTipsEffect = "GLWaterHighlightTipsEffect";
t.GLWaterHightLightSelectCup = "GLWaterHightLightSelectCup";
t.GLWaterRevertBtnStyle = "GLWaterRevertBtnStyle";
t.GLWaterDieFirstUnlockAndTishi = "GLWaterDieFirstUnlockAndTishi";
t.GLWaterNewDragThreshold = "GLWaterNewDragThreshold";
t.GLWaterShowGMButton = "GLWaterShowGMButton";
t.GLWaterAdPassRewardNewTube = "GLWaterAdPassRewardNewTube";
t.GLWaterRevive = "GLWaterRevive";
t.GLWaterAdUnlockEmptyTube = "GLWaterAdUnlockEmptyTube";
})(n = i.GLWaterSortFeat2 || (i.GLWaterSortFeat2 = {}));
i.tryShakeVibrationWaterSort = function(t) {
var e, i, n = window.GL;
if ((null === (e = null == n ? void 0 : n.Game) || void 0 === e ? void 0 : e.isTraitActive("VibrationProjectWaterSortGp")) && cc.sys.os != cc.sys.OS_IOS) {
console.log("[VibrationProjectWaterSortGp] 触发震动 " + t);
null === (i = null == n ? void 0 : n.Game) || void 0 === i || i.shakeByProp("VibrationProjectWaterSortGp", t);
}
};
var a = function() {
function t() {}
t.isOpen = function(t) {
return GL.Game.IsFeatureOpen(t);
};
return t;
}();
i.GLWaterSortFeature = a;
var r = function() {
function t() {}
t.isRevertNum = function() {
return GL.Game.IsFeatureOpen("gl_revertNum_waterSort") || a.isOpen(n.GLWaterRevertNumNew);
};
t.isNoGuide = function() {
return GL.Game.IsFeatureOpen("gl_noGuide_waterSort");
};
t.getGuideConfig = function() {
return [ "3|4|0|0|121112220000", "5|4|0|0|13232211331200000000", "5|4|0|0|11322313321200000000" ];
};
t.isOpenQuestion = function() {
return GL.Game.IsFeatureOpen("gl_question_waterSort");
};
t.isOpenNewSkin = function() {
return GL.Game.IsFeatureOpen("gl_newSkin_waterSort");
};
t.isOpenNewTube = function() {
return GL.Game.IsFeatureOpen("gl_newTube_waterSort");
};
t.isOpenAdUnlockEmptyTube = function() {
return a.isOpen(n.GLWaterAdUnlockEmptyTube);
};
t.isEffectiveNewTube = function() {
return t.isOpenNewTube() && !t.isOpenAdUnlockEmptyTube();
};
t.isOpenAdPassRewardEmptyTube = function() {
return a.isOpen(n.GLWaterAdPassRewardNewTube);
};
t.isOpenFinishTips = function() {
return a.isOpen(n.GLWaterFinishTips);
};
t.isOpenHighlightTipsEffect = function() {
return a.isOpen(n.GLWaterHighlightTipsEffect);
};
t.isOpenGouzi = function() {
return a.isOpen(n.GLWaterGouzi);
};
t.getTouchMoveThreshold = function(t) {
void 0 === t && (t = 5);
if (!a.isOpen(n.GLWaterNewDragThreshold)) return t;
var e = Number(GL.Game.getFeatureKeyParam(n.GLWaterNewDragThreshold, "offsetDistance"));
if (isNaN(e) || e < 0) {
console.log("【水排序】新拖拽偏移：特性参数：offsetDistance 未配置或无效，使用默认值：" + t);
return t;
}
console.log("【水排序】新拖拽偏移：特性参数：offsetDistance = " + e);
return e;
};
t.isOpenGMButton = function() {
return a.isOpen(n.GLWaterShowGMButton);
};
t.isOpenRevive = function() {
return a.isOpen(n.GLWaterRevive);
};
return t;
}();
i.default = r;
cc._RF.pop();
}, {} ],
GLWaterSortGMView: [ function(t, e, i) {
"use strict";
cc._RF.push(e, "eb68907jgpPA5izg5nrK8kU", "GLWaterSortGMView");
Object.defineProperty(i, "__esModule", {
value: !0
});
i.GLWaterSortGMView = void 0;
var n = t("../GlWaterMain"), a = t("../GLWaterSortFeat"), r = cc.color(20, 20, 20), o = cc.color(100, 100, 100);
function s(t) {
var e = t;
"undefined" != typeof e.enableBold && (e.enableBold = !0);
}
function l(t, e, i, n, a, r) {
void 0 === a && (a = 255);
void 0 === r && (r = 0);
var o = new cc.Node("Bg");
o.setAnchorPoint(.5, .5);
o.setContentSize(e, i);
o.opacity = a;
var s = o.addComponent(cc.Graphics);
s.fillColor = n;
r > 0 ? s.roundRect(-e / 2, -i / 2, e, i, r) : s.rect(-e / 2, -i / 2, e, i);
s.fill();
t.addChild(o);
return o;
}
function c(t, e, i, n) {
var a = new cc.Node("Label");
a.setAnchorPoint(.5, .5);
a.setContentSize(t.width || 100, t.height || i + 8);
var r = a.addComponent(cc.Label);
r.string = e;
r.fontSize = i;
r.lineHeight = i + 6;
r.overflow = cc.Label.Overflow.SHRINK;
r.horizontalAlign = cc.Label.HorizontalAlign.CENTER;
r.verticalAlign = cc.Label.VerticalAlign.CENTER;
s(r);
a.color = n;
t.addChild(a);
a.setPosition(0, 0);
return r;
}
function u(t, e, i, n, a, r, o, s) {
var l = new cc.Node("Btn");
l.setAnchorPoint(.5, .5);
l.setContentSize(i, n);
var u = l.addComponent(cc.Graphics);
u.fillColor = a;
u.roundRect(-i / 2, -n / 2, i, n, 12);
u.fill();
var h = l.addComponent(cc.Button);
h.transition = cc.Button.Transition.SCALE;
h.zoomScale = 1.05;
h.target = l;
l.on("click", o, s);
c(l, e, r, cc.Color.WHITE);
t.addChild(l);
return l;
}
function h(t, e, i, n, a) {
var r = new cc.Node(t);
r.setAnchorPoint(.5, .5);
r.setContentSize(e, i);
r.setPosition(0, 0);
r.color = a;
var o = r.addComponent(cc.Label);
o.fontSize = n;
o.lineHeight = n + 6;
o.overflow = cc.Label.Overflow.SHRINK;
o.horizontalAlign = cc.Label.HorizontalAlign.CENTER;
o.verticalAlign = cc.Label.VerticalAlign.CENTER;
s(o);
return o;
}
function d(t, e, i) {
for (var n = [ t.textLabel, t.placeholderLabel ], a = 0; a < n.length; a++) {
var r = n[a];
if (r && r.node && cc.isValid(r.node)) {
r.node.setAnchorPoint(.5, .5);
r.node.setContentSize(e, i);
r.node.setPosition(0, 0);
r.horizontalAlign = cc.Label.HorizontalAlign.CENTER;
r.verticalAlign = cc.Label.VerticalAlign.CENTER;
}
}
}
function p(t, e, i, n) {
t.string = e;
if (t.textLabel) {
t.textLabel.string = e;
t.textLabel.node.color = r;
t.textLabel.node.active = !!e;
}
t.placeholderLabel && (t.placeholderLabel.node.active = !e);
d(t, i, n);
}
function f(t, e, i, n, a, c) {
void 0 === c && (c = "");
var u = l(t, e, i, cc.color(255, 255, 255), 255, 8);
u.name = "EditBox";
var f = h("TEXT_LABEL", e, i, a, r), v = h("PLACEHOLDER_LABEL", e, i, a, o);
u.addChild(f.node);
u.addChild(v.node);
v.string = n;
var m = u.addComponent(cc.EditBox);
m.background = null;
m.textLabel = f;
m.placeholderLabel = v;
m.placeholder = n;
m.fontSize = a;
m.fontColor = r;
m.placeholderFontSize = a;
m.placeholderFontColor = o;
m.inputMode = cc.EditBox.InputMode.NUMERIC;
m.inputFlag = cc.EditBox.InputFlag.SENSITIVE;
m.maxLength = 8;
m.stayOnTop = !1;
s(f);
s(v);
p(m, c, e, i);
var _ = function() {
return d(m, e, i);
};
u.on("text-changed", _, g);
u.on("editing-did-ended", _, g);
u.on("editing-did-began", _, g);
return m;
}
var g = function() {
function t() {}
t.attach = function(e) {
if (a.default.isOpenGMButton() && e && cc.isValid(e) && !e.getChildByName("WaterSortGMButton")) {
0 === e.zIndex && (e.zIndex = 100);
var i = t.BTN_WIDTH, n = t.BTN_HEIGHT, r = t.PANEL_WIDTH, o = t.ROW_HEIGHT, s = t.PANEL_FONT_SIZE, c = t.INPUT_FONT_SIZE, h = t.ROW_COUNT, d = 10 * (h + 1) + o * h, p = r - 20, g = o - 8, v = r - 30 - 130, m = null, _ = null, y = (e.width || 960) / 2 - i / 2 - 8, L = -10, G = e.getChildByName("FlatButtonRestart");
G && (L = G.y - G.height / 2 - n / 2 - 10);
var T = u(e, "GM", i, n, cc.color(60, 120, 220), t.BTN_FONT_SIZE, function() {
_.active = !_.active;
}, t);
T.name = "WaterSortGMButton";
T.setPosition(y, L);
T.zIndex = 1e3;
(_ = new cc.Node("WaterSortGMPanel")).setAnchorPoint(.5, .5);
_.setContentSize(r, d);
_.setPosition(i / 2 - r / 2, -(n / 2 + 10 + d / 2));
_.active = !1;
T.addChild(_);
l(_, r, d, cc.color(20, 20, 20), 215, 12);
var S, b = function(t) {
var e = new cc.Node("Row" + t);
e.setAnchorPoint(.5, .5);
e.setContentSize(r, o);
e.setPosition(0, d / 2 - 10 - o / 2 - t * (o + 10));
_.addChild(e);
return e;
}, W = function() {
_.active = !1;
};
u(b(0), "通 关", p, o - 4, cc.color(40, 170, 90), s, function() {
t.gmPass();
W();
}, t).setPosition(0, 0);
u(S = b(1), "前往指定关", v, o - 4, cc.color(120, 80, 200), s, function() {
var e = t.parseLevel(m);
if (e > 0) {
t.gmGoToLevel(e);
W();
}
}, t).setPosition(-r / 2 + 10 + v / 2, 0);
(m = f(S, 130, g, "关数", c)).node.setPosition(r / 2 - 10 - 65, 0);
m.node.on("text-changed", function() {
var t = m.string, e = t.replace(/\D/g, "");
e !== t && (m.string = e);
}, t);
}
};
t.canOperate = function() {
var t = n.GlWaterMain.Instance;
return !!(t && cc.isValid(t.node) && t.node.activeInHierarchy) && !t.isGuoGUan;
};
t.gmPass = function() {
t.canOperate() && n.GlWaterMain.Instance.changeLevelID();
};
t.gmGoToLevel = function(e) {
if (t.canOperate()) {
var i = n.GlWaterMain.Instance;
i._levelID = e - 1;
i.changeLevelID();
}
};
t.parseLevel = function(t) {
if (!t) return -1;
var e = t.string;
if (!e || 0 === e.length) return -1;
var i = parseInt(e, 10);
return isNaN(i) || i <= 0 ? -1 : i;
};
t.BTN_WIDTH = 120;
t.BTN_HEIGHT = 60;
t.BTN_FONT_SIZE = 30;
t.PANEL_WIDTH = 400;
t.ROW_HEIGHT = 60;
t.PANEL_FONT_SIZE = 28;
t.INPUT_FONT_SIZE = 26;
t.ROW_COUNT = 2;
return t;
}();
i.GLWaterSortGMView = g;
cc._RF.pop();
}, {
"../GLWaterSortFeat": "GLWaterSortFeat",
"../GlWaterMain": "GlWaterMain"
} ],
GLWaterSortNextSkipLastAnimationTraitCtrl: [ function(t, e, i) {
"use strict";
cc._RF.push(e, "3a19b14cIRPAJH6oZayqgxg", "GLWaterSortNextSkipLastAnimationTraitCtrl");
Object.defineProperty(i, "__esModule", {
value: !0
});
var n = t("../GLWaterSortEventTool"), a = function() {
function t() {
this._featureName = "GLWaterSortNextSkipLastAnimation";
this._sourceItem = null;
this._targetItem = null;
}
t.getInstance = function() {
null == this._instance && (this._instance = new t());
return this._instance;
};
t.prototype.isOpen = function() {
return GL.Game.IsFeatureOpen(this._featureName);
};
t.prototype.setPourPair = function(t, e) {
this._sourceItem = t;
this._targetItem = e;
};
t.prototype.clearPourPair = function() {
this._sourceItem = null;
this._targetItem = null;
};
t.prototype.isAnimationPlaying = function() {
return !!this._sourceItem && (this._sourceItem.isPlay || this._targetItem && this._targetItem.isPlayUp);
};
t.prototype.trySkipLastAnimation = function() {
if (!this.isAnimationPlaying()) return !1;
this.doSkipAnimation();
return !0;
};
t.prototype.doSkipAnimation = function() {
this._sourceItem && this._sourceItem.isPlay && this.skipSourceAnimation(this._sourceItem);
this._targetItem && this.skipTargetAnimation(this._targetItem);
this.clearPourPair();
};
t.prototype.skipSourceAnimation = function(t) {
if (t.isPlay) {
cc.Tween.stopAllByTarget(t.node);
var e = t.getSpineParent(), i = null == e ? void 0 : e.getComponent(sp.Skeleton);
if (i) {
i.setEventListener(null);
i.timeScale = 1;
i.clearTracks();
i._skeleton && i._skeleton.setToSetupPose && i._skeleton.setToSetupPose();
}
t.setIsPlay(!1);
t.isClick = !1;
t.layoutParent && cc.isValid(t.layoutParent) && (t.node.parent = t.layoutParent);
var a = t.getPos();
if (a) {
t.node.x = a.x;
t.node.y = a.y;
}
t.drawTube();
t.showMark();
n.GLWaterSortEvent.dispatchEvent(n.GlWaterSortEventName.CHANGE_ORDER, {
index: t.getIndex(),
isMove: !1,
daoShuiEnd: !0
});
}
};
t.prototype.skipTargetAnimation = function(t) {
var e = t.getSpineParent(), i = null == e ? void 0 : e.getComponent(sp.Skeleton);
if (t.isPlayUp) {
if (i) {
cc.Tween.stopAllByTarget(i);
i.clearTracks();
i.setEventListener(null);
i.setEndListener(null);
i.setCompleteListener(null);
i.timeScale = 1;
}
t.setIsPlayUp(!1);
t.hideLiushui();
t.hideBowen(!0);
t.hideQiPao(!0);
}
t.hideLight();
t.hideLizi();
t.drawTube();
t.checkIsFinish() && n.GLWaterSortEvent.dispatchEvent(n.GlWaterSortEventName.MAN_PING);
};
t._instance = null;
return t;
}();
i.default = a;
cc._RF.pop();
}, {
"../GLWaterSortEventTool": "GLWaterSortEventTool"
} ],
GLWaterSortScene: [ function(t, e, i) {
"use strict";
cc._RF.push(e, "5b9c79z/7hFJZVwea9bVsj5", "GLWaterSortScene");
var n, a, r, o, s = this && this.__extends || (n = function(t, e) {
return (n = Object.setPrototypeOf || {
__proto__: []
} instanceof Array && function(t, e) {
t.__proto__ = e;
} || function(t, e) {
for (var i in e) Object.prototype.hasOwnProperty.call(e, i) && (t[i] = e[i]);
})(t, e);
}, function(t, e) {
n(t, e);
function i() {
this.constructor = t;
}
t.prototype = null === e ? Object.create(e) : (i.prototype = e.prototype, new i());
}), l = this && this.__decorate || function(t, e, i, n) {
var a, r = arguments.length, o = r < 3 ? e : null === n ? n = Object.getOwnPropertyDescriptor(e, i) : n;
if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) o = Reflect.decorate(t, e, i, n); else for (var s = t.length - 1; s >= 0; s--) (a = t[s]) && (o = (r < 3 ? a(o) : r > 3 ? a(e, i, o) : a(e, i)) || o);
return r > 3 && o && Object.defineProperty(e, i, o), o;
}, c = this && this.__awaiter || function(t, e, i, n) {
return new (i || (i = Promise))(function(a, r) {
function o(t) {
try {
l(n.next(t));
} catch (t) {
r(t);
}
}
function s(t) {
try {
l(n.throw(t));
} catch (t) {
r(t);
}
}
function l(t) {
t.done ? a(t.value) : (e = t.value, e instanceof i ? e : new i(function(t) {
t(e);
})).then(o, s);
var e;
}
l((n = n.apply(t, e || [])).next());
});
}, u = this && this.__generator || function(t, e) {
var i, n, a, r, o = {
label: 0,
sent: function() {
if (1 & a[0]) throw a[1];
return a[1];
},
trys: [],
ops: []
};
return r = {
next: s(0),
throw: s(1),
return: s(2)
}, "function" == typeof Symbol && (r[Symbol.iterator] = function() {
return this;
}), r;
function s(t) {
return function(e) {
return l([ t, e ]);
};
}
function l(r) {
if (i) throw new TypeError("Generator is already executing.");
for (;o; ) try {
if (i = 1, n && (a = 2 & r[0] ? n.return : r[0] ? n.throw || ((a = n.return) && a.call(n), 
0) : n.next) && !(a = a.call(n, r[1])).done) return a;
(n = 0, a) && (r = [ 2 & r[0], a.value ]);
switch (r[0]) {
case 0:
case 1:
a = r;
break;

case 4:
o.label++;
return {
value: r[1],
done: !1
};

case 5:
o.label++;
n = r[1];
r = [ 0 ];
continue;

case 7:
r = o.ops.pop();
o.trys.pop();
continue;

default:
if (!(a = o.trys, a = a.length > 0 && a[a.length - 1]) && (6 === r[0] || 2 === r[0])) {
o = 0;
continue;
}
if (3 === r[0] && (!a || r[1] > a[0] && r[1] < a[3])) {
o.label = r[1];
break;
}
if (6 === r[0] && o.label < a[1]) {
o.label = a[1];
a = r;
break;
}
if (a && o.label < a[2]) {
o.label = a[2];
o.ops.push(r);
break;
}
a[2] && o.ops.pop();
o.trys.pop();
continue;
}
r = e.call(t, o);
} catch (t) {
r = [ 6, t ];
n = 0;
} finally {
i = a = 0;
}
if (5 & r[0]) throw r[1];
return {
value: r[0] ? r[1] : void 0,
done: !0
};
}
};
Object.defineProperty(i, "__esModule", {
value: !0
});
i.GlWaterSortScene = void 0;
var h = t("../../gl_hall/gl_extractDimension/scripts/GL_ExtractFeature"), d = t("../../gl_hall/script/hall/GlBaseScene"), p = (null === (a = null === window || void 0 === window ? void 0 : window._GLHallClassMap_) || void 0 === a || a.GLHallController, 
null === (r = null === window || void 0 === window ? void 0 : window._GLHallClassMap_) || void 0 === r ? void 0 : r.GLHallControllerClass), f = t("../../gl_hall/script/HallFeature"), g = t("./GlWaterMain"), v = t("./GlWaterModel"), m = t("./GLWaterRoundLogEventCtr"), _ = t("./GLWaterFinishTipsCtrl"), y = t("./GLWaterHighlightTipsEffectCtrl"), L = t("./GLWaterSortEventTool"), G = t("./GLWaterSortFeat"), T = t("./GM/GLWaterSortGMView"), S = t("./GLWaterSortFailUi"), b = null === (o = null === window || void 0 === window ? void 0 : window._GLHallClassMap_) || void 0 === o ? void 0 : o.GLMultiLangLabel, W = t("../../gl_hall/gl_lang/config/GLLangKeyDefine"), E = t("../../gl_hall/script/traits/GLGameAdStrategyOptimizeTraitCtrl"), C = t("../../gl_hall/script/func/MiniGameDeliveryUndertakeCtrl"), I = t("../../gl_hall/script/func/CampaignGuideMiniGameCtrl"), A = cc._decorator, k = A.ccclass, w = A.property, D = function(t) {
s(e, t);
function e() {
var e = null !== t && t.apply(this, arguments) || this;
e.btnBack = null;
e.btnReplay = null;
e.btnSkip = null;
e.skipLabel = null;
e.GlWaterMain = null;
e.guideView = null;
e.btnRevert = null;
e.btnLight = null;
e.btnNewTube = null;
e.levelDesc = null;
e.spLevel = null;
e.loseTipsBg = null;
e.loseTipsLabel = null;
e.keyDelayTime = 1e3;
e.gameStartTime = 0;
e.isKeyEnabled = !1;
e._canPutTipsNode = null;
e.isFinishGuideCur = !1;
e._btnLocked = !1;
return e;
}
i = e;
e.prototype.onLoad = function() {
var e, n, a, r = this;
i.instance = this;
t.prototype.onLoad.call(this);
this.gameStartTime = Date.now();
this.isKeyEnabled = !1;
GL.Game.AdpterCanvas();
var o = null === (n = null === (e = this.node) || void 0 === e ? void 0 : e.getChildByName("UIPanel")) || void 0 === n ? void 0 : n.getChildByName("Top");
null != o && GL.Game.AdpterBangleScreen(o);
m.default.getInstance().loadData();
this.preLoad();
v.GlWaterModel.initAdTime();
var s = cc.view.getVisibleSize().width;
this.loseTipsLabel.node.setContentSize(s - 120 - 50, 0);
this.loseTipsLabel.string = W.default.WATERSORT_LOSE_TIPS;
null === (a = this.loseTipsLabel.node.getComponent(typeof b)) || void 0 === a || a.updateString();
this.loseTipsLabel._forceUpdateRenderData();
setTimeout(function() {
r.loseTipsBg.setContentSize(s - 120, r.loseTipsLabel.node.height + 70);
}, 100);
E.default.getInstance().isOpen() && E.default.getInstance().onEnterGame("gl_watersort");
G.default.isOpenGMButton() && T.GLWaterSortGMView.attach(o);
};
e.prototype.preLoad = function() {
return c(this, void 0, void 0, function() {
return u(this, function(t) {
switch (t.label) {
case 0:
console.log("preLoad");
L.GLWaterSortEvent.addListener(L.GlWaterSortEventName.GUO_GUAN, this.ON_GUOGUAN, this);
L.GLWaterSortEvent.addListener(L.GlWaterSortEventName.ON_INIT, this.ON_INIT, this);
L.GLWaterSortEvent.addListener(L.GlWaterSortEventName.GUILE_END, this.on_GUILE_END, this);
L.GLWaterSortEvent.addListener(L.GlWaterSortEventName.WATER_DEAD, this.onWaterDead, this);
return [ 4, GL.ExtractTool.initData(GL.ExtractTool.configNumberKey.HsWaterSort) ];

case 1:
t.sent();
if (!this.node || !cc.isValid(this.node)) return [ 2 ];
h.GLExtractFeature.initGLExtractFeature("HsWaterSort");
this.addListen();
cc.systemEvent.on(cc.SystemEvent.EventType.KEY_DOWN, this.onKeyDown, this);
console.log("数据初始化完成，监听添加完成");
this.drawView();
console.log("绘制界面完成");
_.default.getInstance().ensureLoaded(this);
G.default.isOpenHighlightTipsEffect() && y.default.getInstance().ensureLoaded(this);
this.btnSkip.setContentSize(cc.size(2 * this.skipLabel.node.getContentSize().width, this.btnSkip.getContentSize().height));
this.loadGLWaterCanPutTips();
this.usrStartSubmit(g.GlWaterMain.Instance.getGameNum(), GL.ExtractTool.configKey.HsWaterSort || 1);
this.onSendGGameStartEvent();
return [ 2 ];
}
});
});
};
e.prototype.addListen = function() {
cc.isValid(this.btnBack) && this.btnBack.on(cc.Node.EventType.TOUCH_END, this.on_btnBack.bind(this));
cc.isValid(this.btnReplay) && this.btnReplay.on(cc.Node.EventType.TOUCH_END, this.on_btnReplay.bind(this));
cc.isValid(this.btnSkip) && this.btnSkip.on(cc.Node.EventType.TOUCH_END, this.on_btnSkip.bind(this));
cc.isValid(this.btnRevert) && this.btnRevert.on(cc.Node.EventType.TOUCH_END, this.on_btnRevert.bind(this));
cc.isValid(this.btnLight) && this.btnLight.on(cc.Node.EventType.TOUCH_END, this.on_btnLight.bind(this));
cc.isValid(this.btnNewTube) && this.btnNewTube.on(cc.Node.EventType.TOUCH_END, this.on_btnNewTube.bind(this));
};
e.prototype.onDestroy = function() {
t.prototype.onDestroy.call(this);
cc.isValid(this.btnBack) && this.btnBack.off(cc.Node.EventType.TOUCH_END, this.on_btnBack.bind(this));
cc.isValid(this.btnReplay) && this.btnReplay.off(cc.Node.EventType.TOUCH_END, this.on_btnReplay.bind(this));
cc.isValid(this.btnSkip) && this.btnSkip.off(cc.Node.EventType.TOUCH_END, this.on_btnSkip.bind(this));
cc.isValid(this.btnRevert) && this.btnRevert.off(cc.Node.EventType.TOUCH_END, this.on_btnRevert.bind(this));
cc.isValid(this.btnLight) && this.btnLight.off(cc.Node.EventType.TOUCH_END, this.on_btnLight.bind(this));
cc.isValid(this.btnNewTube) && this.btnNewTube.off(cc.Node.EventType.TOUCH_END, this.on_btnNewTube.bind(this));
L.GLWaterSortEvent.removeListener(L.GlWaterSortEventName.GUO_GUAN, this.ON_GUOGUAN, this);
L.GLWaterSortEvent.removeListener(L.GlWaterSortEventName.ON_INIT, this.ON_INIT, this);
L.GLWaterSortEvent.removeListener(L.GlWaterSortEventName.GUILE_END, this.on_GUILE_END, this);
L.GLWaterSortEvent.removeListener(L.GlWaterSortEventName.WATER_DEAD, this.onWaterDead, this);
cc.systemEvent.off(cc.SystemEvent.EventType.KEY_DOWN, this.onKeyDown, this);
};
e.prototype.onKeyDown = function(t) {
var e, i = this;
if (!this.isKeyEnabled) {
if (!(Date.now() - this.gameStartTime >= this.keyDelayTime)) return;
this.isKeyEnabled = !0;
}
switch (t.keyCode) {
case cc.macro.KEY.back:
case cc.macro.KEY.left:
var n = function() {
null == p || p.Exit(GL.Const.ExitGameType.FromGameMain);
}, a = function() {
var t;
f.default.isOpen(f.HallFeat.HallNotShowResultView) ? n() : (null === (t = i.GlWaterMain) || void 0 === t ? void 0 : t.isGuoGUan) || n();
};
(null === (e = null === GL || void 0 === GL ? void 0 : GL.gamelobby) || void 0 === e ? void 0 : e.isTraitActive("MiniGamePhysicsBackUnifiedTrait")) || cc.sys.os == cc.sys.OS_IOS ? a() : GL.Game.openMiniGameQuitGameConfirm(null, a);
}
};
e.prototype.drawView = function() {
var t = i.getInGuilde();
this.guideView.active = t;
this.btnSkip.active = t;
this.GlWaterMain.node.active = !t;
this.btnReplay.active = !t;
this.levelDesc.node.active = !t;
this.btnLight.active = !t;
this.btnRevert.active = !t;
this.btnNewTube.active = !t && G.default.isEffectiveNewTube();
t && this.usrGuideStartSubmit(g.GlWaterMain.Instance.getGameNum(), GL.ExtractTool.configKey.HsWaterSort || 1);
};
e.getInGuilde = function() {
if (cc.sys.localStorage.getItem("GlWaterGuilde")) return !1;
if (G.default.isNoGuide()) {
cc.sys.localStorage.setItem("GlWaterGuilde", 1);
return !1;
}
return !0;
};
e.prototype.ON_INIT = function(t) {
var e = this, n = this.levelDesc.node.getComponent(typeof b);
null != n ? n.updateStringExt([ W.default.WATERSORT_TITLE_LEVEL, " " + t ]) : this.levelDesc.string = "Level " + t;
this.spLevel.node.active = !0;
this.spLevel.setAnimation(0, "in", !1);
this.spLevel.setCompleteListener(function() {
e.spLevel.setCompleteListener(null);
e.spLevel.node.active = !1;
});
if (!i.getInGuilde()) {
this.showDeliveryUndertakeFingerGuide();
this.showCampaignGuideMiniGameFingerGuide();
}
};
e.prototype.ON_GUOGUAN = function(t) {
var e, i, n = this, a = null === (i = null === (e = this.levelDesc) || void 0 === e ? void 0 : e.node) || void 0 === i ? void 0 : i.getComponent(typeof b);
null != a ? a.updateStringExt([ W.default.WATERSORT_TITLE_LEVEL, " " + t ]) : this.levelDesc.string = "Level " + t;
this.spLevel.node.active = !0;
this.spLevel.setAnimation(0, "in", !1);
this.spLevel.setCompleteListener(function() {
n.spLevel.setCompleteListener(null);
n.spLevel.node.active = !1;
});
t >= 2 && v.GlWaterModel.showInstertAd("end", 1);
this.tryAddTraitMiniGameNum();
this.showDeliveryUndertakeFingerGuide();
this.showCampaignGuideMiniGameFingerGuide();
};
e.prototype.tryAddTraitMiniGameNum = function() {
C.default.isOpen() && C.default.getInstance().addTraitMiniGameNum();
};
e.prototype.showDeliveryUndertakeFingerGuide = function() {
return c(this, void 0, Promise, function() {
var t;
return u(this, function() {
if (!C.default.isOpen() || !cc.isValid(this.btnBack) || !this.btnBack.active) return [ 2 ];
(t = this.btnBack.getChildByName("finger")) && t.destroy();
C.default.getInstance().createFingerAnimation(this.btnBack);
return [ 2 ];
});
});
};
e.prototype.showCampaignGuideMiniGameFingerGuide = function() {
var t, e;
return c(this, void 0, Promise, function() {
var i;
return u(this, function() {
if (!I.default.isOpen() || !cc.isValid(this.btnBack) || !this.btnBack.active) return [ 2 ];
(i = null === (e = null === (t = this.btnBack) || void 0 === t ? void 0 : t.parent) || void 0 === e ? void 0 : e.getChildByName("finger")) && i.destroy();
I.default.getInstance().createFingerAnimation(this.btnBack.parent, new cc.Vec2(this.btnBack.position.x, this.btnBack.position.y));
return [ 2 ];
});
});
};
e.prototype.on_btnBack = function() {
var t;
if (this._btnLocked) ; else if (null !== (t = this.GlWaterMain) && void 0 !== t && t.isGuoGUan) ; else {
this._btnLocked = !0;
console.log("退出游戏~");
GL.Audio.playNormal2();
null == p || p.Exit(GL.Const.ExitGameType.FromGameMain);
}
};
e.prototype.onEnable = function() {
t.prototype.onEnable.call(this);
this._btnLocked = !1;
};
e.prototype.on_btnReplay = function() {
var t;
if (null === (t = this.GlWaterMain) || void 0 === t || !t.isGuoGUan) {
GL.Audio.playNormal1();
this.GlWaterMain.on_click_replay();
this.gameStartTime = Date.now();
this.isKeyEnabled = !1;
}
};
e.prototype.on_btnSkip = function() {
this.on_GUILE_END();
};
e.prototype.on_btnRevert = function() {
this.GlWaterMain.on_click_revert();
};
e.prototype.on_btnLight = function() {
this.GlWaterMain.on_click_tip();
};
e.prototype.on_btnNewTube = function() {
G.default.isEffectiveNewTube() && this.GlWaterMain.on_click_addNewTube();
};
e.prototype.on_GUILE_END = function() {
var t, e;
cc.sys.localStorage.setItem("GlWaterGuilde", 1);
var n = i.getInGuilde();
this.guideView.active = n;
this.btnSkip.active = n;
this.GlWaterMain.node.active = !n;
this.btnReplay.active = !n;
this.levelDesc.node.active = !n;
this.btnLight.active = !n;
this.btnRevert.active = !n;
this.GlWaterMain.initLevelData();
var a = null === (e = null === (t = this.levelDesc) || void 0 === t ? void 0 : t.node) || void 0 === e ? void 0 : e.getComponent(typeof b);
null != a ? a.updateStringExt([ W.default.WATERSORT_TITLE_LEVEL, " 1" ]) : this.levelDesc.string = "Level 1";
this.usrGuideEndSubmit(g.GlWaterMain.Instance.getGameNum(), GL.ExtractTool.configKey.HsWaterSort || 1);
if (C.default.isOpen() && !this.isFinishGuideCur) {
this.isFinishGuideCur = !0;
this.tryAddTraitMiniGameNum();
this.showDeliveryUndertakeFingerGuide();
}
};
e.prototype.onWaterDead = function() {
var t;
null === (t = this.node) || void 0 === t || t.getChildByName("UIPanel");
S.GLWaterSortFailUi.show(this.node);
};
e.prototype.loadGLWaterCanPutTips = function() {
var t, e, i, n = this;
if (G.GLWaterSortFeature.isOpen(G.GLWaterSortFeat2.GLWaterCanPutTips) && (!this._canPutTipsNode || !cc.isValid(this._canPutTipsNode))) {
var a = null === (e = null === (t = this.node) || void 0 === t ? void 0 : t.getChildByName("UIPanel")) || void 0 === e ? void 0 : e.getChildByName("Top");
if (a && cc.isValid(a)) {
var r = "gl_watersort", o = window.GL;
(null === (i = null == o ? void 0 : o.gamelobby) || void 0 === i ? void 0 : i.getRemoteBundleBaseUrl) && (r = o.gamelobby.getRemoteBundleBaseUrl("gl_watersort"));
cc.assetManager.loadBundle(r, function(t, e) {
t ? console.error("[GLWaterSortScene] Failed to load bundle [gl_watersort]:", t) : e.load("prefabs/GLWaterCanPutTips", function(t, e) {
if (t) console.error("[GLWaterSortScene] Failed to load GLWaterCanPutTips prefab:", t); else if (e instanceof cc.Prefab) {
n._canPutTipsNode = cc.instantiate(e);
if (cc.isValid(n._canPutTipsNode) && cc.isValid(a)) {
n._canPutTipsNode.parent = a;
n._canPutTipsNode.active = !0;
var i = a.getChildByName("FlatButtonSkip");
if (i && cc.isValid(i)) {
var r = i.getSiblingIndex();
n._canPutTipsNode.setSiblingIndex(r + 1);
}
console.log("[GLWaterSortScene] GLWaterCanPutTips prefab加载完成");
}
} else console.error("[GLWaterSortScene] Loaded resource is not a Prefab");
});
});
} else console.error("[GLWaterSortScene] Top节点未找到");
}
};
e.prototype.onSendGGameStartEvent = function() {
var t = String(GL.ExtractTool.configKey.HsWaterSort || 1), e = v.GlWaterModel.getElapsedSeconds(), i = m.default.getInstance().getLogEventData(), n = e > 0, a = (null == i ? void 0 : i.step) || 0;
n && (a = m.default.getInstance().readSavedOperationSteps());
this.sendGGameStartEvent(g.GlWaterMain.Instance.getGameNum(), t, n, n ? {
saved_operation_steps: a
} : void 0);
};
e.prototype.getSavedOperationDurationGameSubtype = function() {
return String(GL.ExtractTool.configKey.HsWaterSort || 1);
};
var i;
e.instance = null;
l([ w(cc.Node) ], e.prototype, "btnBack", void 0);
l([ w(cc.Node) ], e.prototype, "btnReplay", void 0);
l([ w(cc.Node) ], e.prototype, "btnSkip", void 0);
l([ w(cc.Label) ], e.prototype, "skipLabel", void 0);
l([ w(g.GlWaterMain) ], e.prototype, "GlWaterMain", void 0);
l([ w(cc.Node) ], e.prototype, "guideView", void 0);
l([ w(cc.Node) ], e.prototype, "btnRevert", void 0);
l([ w(cc.Node) ], e.prototype, "btnLight", void 0);
l([ w(cc.Node) ], e.prototype, "btnNewTube", void 0);
l([ w(cc.Label) ], e.prototype, "levelDesc", void 0);
l([ w(sp.Skeleton) ], e.prototype, "spLevel", void 0);
l([ w(cc.Node) ], e.prototype, "loseTipsBg", void 0);
l([ w(cc.Label) ], e.prototype, "loseTipsLabel", void 0);
return i = l([ k ], e);
}(d.default);
i.GlWaterSortScene = D;
cc._RF.pop();
}, {
"../../gl_hall/gl_extractDimension/scripts/GL_ExtractFeature": void 0,
"../../gl_hall/gl_lang/config/GLLangKeyDefine": void 0,
"../../gl_hall/script/HallFeature": void 0,
"../../gl_hall/script/func/CampaignGuideMiniGameCtrl": void 0,
"../../gl_hall/script/func/MiniGameDeliveryUndertakeCtrl": void 0,
"../../gl_hall/script/hall/GlBaseScene": void 0,
"../../gl_hall/script/traits/GLGameAdStrategyOptimizeTraitCtrl": void 0,
"./GLWaterFinishTipsCtrl": "GLWaterFinishTipsCtrl",
"./GLWaterHighlightTipsEffectCtrl": "GLWaterHighlightTipsEffectCtrl",
"./GLWaterRoundLogEventCtr": "GLWaterRoundLogEventCtr",
"./GLWaterSortEventTool": "GLWaterSortEventTool",
"./GLWaterSortFailUi": "GLWaterSortFailUi",
"./GLWaterSortFeat": "GLWaterSortFeat",
"./GM/GLWaterSortGMView": "GLWaterSortGMView",
"./GlWaterMain": "GlWaterMain",
"./GlWaterModel": "GlWaterModel"
} ],
GLWaterSortTool: [ function(t, e, i) {
"use strict";
cc._RF.push(e, "f9417qtod1FyLr77QpDjCLP", "GLWaterSortTool");
Object.defineProperty(i, "__esModule", {
value: !0
});
i.GLWaterSortTool = void 0;
var n = t("./GlWaterMain"), a = t("./GLWaterItem"), r = function() {
function t() {}
t.canPutInTargetItem = function(t) {
var e = n.GlWaterMain.Instance;
if (!e) {
console.warn("[GLWaterSortTool] GlWaterMain 实例不存在");
return null;
}
var i = e.itemArr;
if (!i || t < 0 || t >= i.length) {
console.warn("[GLWaterSortTool] 无效的试管索引:", t);
return null;
}
var r = i[t];
if (!r || !cc.isValid(r)) return null;
var o = r.getComponent(a.GLWaterItem);
if (!o) return null;
if (o.isPlay || o.isPlayUp) {
console.log("跳过正在播放动画或被选中的试管 - 源试管", o.getIndex(), o.isPlay, o.isPlayUp);
return null;
}
var s = o.getData();
if (!s || !s.waterData) return null;
var l = s.waterData.filter(function(t) {
return -1 !== t;
});
if (0 === l.length || o.checkIsFinish()) return null;
for (var c = l[0], u = 0, h = null, d = 0; d < i.length; d++) if (d !== t) {
var p = i[d];
if (p && cc.isValid(p)) {
var f = p.getComponent(a.GLWaterItem);
if (f) {
var g = f.getData();
if (g && g.waterData && !g.isLock) if (f.isPlay || f.isPlayUp || f.isClick) console.log("跳过正在播放动画或被选中的试管", f.getIndex(), f.isPlay, f.isPlayUp, f.isClick); else {
var v = g.waterData.filter(function(t) {
return -1 !== t;
});
if (!(v.length >= g.tubeLen)) if (0 !== v.length) if (v[0] !== c) ; else {
u++;
h = p;
} else {
u++;
h = p;
}
}
}
}
}
return 1 == u ? h : null;
};
t.pourWater = function(t, e) {
var i, r, o, s, l = n.GlWaterMain.Instance;
if (!l) {
console.warn("[GLWaterSortTool] GlWaterMain 实例不存在");
return !1;
}
if (!(t && cc.isValid(t) && e && cc.isValid(e))) {
console.warn("[GLWaterSortTool] 试管节点无效");
return !1;
}
var c = t.getComponent(a.GLWaterItem), u = e.getComponent(a.GLWaterItem);
if (!c || !u) {
console.warn("[GLWaterSortTool] 无法获取试管组件");
return !1;
}
var h = c.getData(), d = u.getData();
if (!(h && d && h.waterData && d.waterData)) {
console.warn("[GLWaterSortTool] 试管数据无效");
return !1;
}
var p = h.waterData.filter(function(t) {
return -1 !== t;
}), f = d.waterData.filter(function(t) {
return -1 !== t;
}), g = f.length < (d.tubeLen || 4), v = p.length > 0;
if (!g || !v) {
console.warn("[GLWaterSortTool] 不满足倒水条件");
return !1;
}
if (f.length > 0 && f[0] !== p[0]) {
console.warn("[GLWaterSortTool] 颜色不匹配");
return !1;
}
var m = Math.min(d.tubeLen || 4, 4) - f.length, _ = p.findIndex(function(t, e) {
return e > 0 && t !== p[0];
}), y = p.slice(0, -1 !== _ ? _ : p.length).length, L = Math.min(m, y);
console.log("[GLWaterSortTool] 倒水: 数量=" + L);
var G = c.getPos(), T = u.getPos(), S = p[0], b = f.length + "_" + (f.length + L), W = !0;
G.x > T.x ? W = !1 : G.x === T.x && (W = G.x > 0);
var E = .75 * ((null === (i = c.node) || void 0 === i ? void 0 : i.scale) || 1) * ((null === (r = c.node) || void 0 === r ? void 0 : r.height) || 474);
T.x - E < -540 ? W = !1 : T.x + E > 540 && (W = !0);
u.lightPlay();
u.liZiPlay();
p.length && u.changeLiziColor && u.changeLiziColor(p[0]);
c.daoShuiPlay && (null === (o = u.node) || void 0 === o ? void 0 : o.parent) && (null === (s = c.node) || void 0 === s ? void 0 : s.parent) && c.daoShuiPlay(W, L, cc.v2(T.x, u.node.parent.y - c.node.parent.y), function() {
(null == u ? void 0 : u.waterUpPlay) && u.waterUpPlay(b, S);
}, function() {
(null == u ? void 0 : u.hideLiushui) && u.hideLiushui();
}, S);
u.hideMarkEff(!0);
u.changeWaterData && u.changeWaterData(!0, L, p[0]);
c.changeWaterData && c.changeWaterData(!1, L, p[0]);
l.on_saveOnceData && l.on_saveOnceData();
c.downHuang && c.downHuang();
return !0;
};
return t;
}();
i.GLWaterSortTool = r;
cc._RF.pop();
}, {
"./GLWaterItem": "GLWaterItem",
"./GlWaterMain": "GlWaterMain"
} ],
GlWaterGuildeView: [ function(t, e, i) {
"use strict";
cc._RF.push(e, "b8ac6Um6QVOm4dqXyxygMsB", "GlWaterGuildeView");
var n, a = this && this.__extends || (n = function(t, e) {
return (n = Object.setPrototypeOf || {
__proto__: []
} instanceof Array && function(t, e) {
t.__proto__ = e;
} || function(t, e) {
for (var i in e) Object.prototype.hasOwnProperty.call(e, i) && (t[i] = e[i]);
})(t, e);
}, function(t, e) {
n(t, e);
function i() {
this.constructor = t;
}
t.prototype = null === e ? Object.create(e) : (i.prototype = e.prototype, new i());
}), r = this && this.__decorate || function(t, e, i, n) {
var a, r = arguments.length, o = r < 3 ? e : null === n ? n = Object.getOwnPropertyDescriptor(e, i) : n;
if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) o = Reflect.decorate(t, e, i, n); else for (var s = t.length - 1; s >= 0; s--) (a = t[s]) && (o = (r < 3 ? a(o) : r > 3 ? a(e, i, o) : a(e, i)) || o);
return r > 3 && o && Object.defineProperty(e, i, o), o;
}, o = this && this.__awaiter || function(t, e, i, n) {
return new (i || (i = Promise))(function(a, r) {
function o(t) {
try {
l(n.next(t));
} catch (t) {
r(t);
}
}
function s(t) {
try {
l(n.throw(t));
} catch (t) {
r(t);
}
}
function l(t) {
t.done ? a(t.value) : (e = t.value, e instanceof i ? e : new i(function(t) {
t(e);
})).then(o, s);
var e;
}
l((n = n.apply(t, e || [])).next());
});
}, s = this && this.__generator || function(t, e) {
var i, n, a, r, o = {
label: 0,
sent: function() {
if (1 & a[0]) throw a[1];
return a[1];
},
trys: [],
ops: []
};
return r = {
next: s(0),
throw: s(1),
return: s(2)
}, "function" == typeof Symbol && (r[Symbol.iterator] = function() {
return this;
}), r;
function s(t) {
return function(e) {
return l([ t, e ]);
};
}
function l(r) {
if (i) throw new TypeError("Generator is already executing.");
for (;o; ) try {
if (i = 1, n && (a = 2 & r[0] ? n.return : r[0] ? n.throw || ((a = n.return) && a.call(n), 
0) : n.next) && !(a = a.call(n, r[1])).done) return a;
(n = 0, a) && (r = [ 2 & r[0], a.value ]);
switch (r[0]) {
case 0:
case 1:
a = r;
break;

case 4:
o.label++;
return {
value: r[1],
done: !1
};

case 5:
o.label++;
n = r[1];
r = [ 0 ];
continue;

case 7:
r = o.ops.pop();
o.trys.pop();
continue;

default:
if (!(a = o.trys, a = a.length > 0 && a[a.length - 1]) && (6 === r[0] || 2 === r[0])) {
o = 0;
continue;
}
if (3 === r[0] && (!a || r[1] > a[0] && r[1] < a[3])) {
o.label = r[1];
break;
}
if (6 === r[0] && o.label < a[1]) {
o.label = a[1];
a = r;
break;
}
if (a && o.label < a[2]) {
o.label = a[2];
o.ops.push(r);
break;
}
a[2] && o.ops.pop();
o.trys.pop();
continue;
}
r = e.call(t, o);
} catch (t) {
r = [ 6, t ];
n = 0;
} finally {
i = a = 0;
}
if (5 & r[0]) throw r[1];
return {
value: r[0] ? r[1] : void 0,
done: !0
};
}
};
Object.defineProperty(i, "__esModule", {
value: !0
});
i.GuideView = void 0;
var l = t("./GLWaterItem"), c = t("./GLWaterRoundLogEventCtr"), u = t("./GLWaterSortEventTool"), h = t("./GLWaterSortFeat"), d = cc._decorator, p = d.ccclass, f = d.property, g = function(t) {
a(e, t);
function e() {
var e = null !== t && t.apply(this, arguments) || this;
e.finger = null;
e.itemArr = [];
e.labelClick = null;
e.labelDesc = null;
e.itemParent = null;
e.allWaterData = [ [ -1, -1, 0, 0 ], [ 1, 1, 0, 0 ], [ -1, -1, 1, 1 ] ];
e._guidlenum = 0;
return e;
}
i = e;
e.prototype.onEnable = function() {
i.Instance = this;
this._guidlenum = 0;
this.initView();
u.GLWaterSortEvent.addListener(u.GlWaterSortEventName.GUILDE_CLICK_DOWN, this.on_GUILDE_CLICK_DOWN, this);
u.GLWaterSortEvent.addListener(u.GlWaterSortEventName.GUILDE_CLICK_UP, this.on_GUILDE_CLICK_UP, this);
u.GLWaterSortEvent.addListener(u.GlWaterSortEventName.GUILDE_MAN_PING, this.on_GUILDE_MAN_PING, this);
u.GLWaterSortEvent.addListener(u.GlWaterSortEventName.GUILDE_MOVE_TUBE, this.on_GUILDE_MOVE_TUBE, this);
u.GLWaterSortEvent.addListener(u.GlWaterSortEventName.GUILE_MOVE_DAO, this.on_GUILE_MOVE_DAO, this);
u.GLWaterSortEvent.addListener(u.GlWaterSortEventName.GUILE_MOVE_DAO_END, this.on_GUILE_MOVE_DAO_END, this);
this.labelClick.active = !0;
this.labelDesc.active = !1;
};
e.prototype.onDisable = function() {
i.Instance === this && (i.Instance = null);
c.default.getInstance().resetData();
u.GLWaterSortEvent.removeListener(u.GlWaterSortEventName.GUILDE_CLICK_DOWN, this.on_GUILDE_CLICK_DOWN, this);
u.GLWaterSortEvent.removeListener(u.GlWaterSortEventName.GUILDE_CLICK_UP, this.on_GUILDE_CLICK_UP, this);
u.GLWaterSortEvent.removeListener(u.GlWaterSortEventName.GUILDE_MAN_PING, this.on_GUILDE_MAN_PING, this);
u.GLWaterSortEvent.removeListener(u.GlWaterSortEventName.GUILDE_MOVE_TUBE, this.on_GUILDE_MOVE_TUBE, this);
u.GLWaterSortEvent.removeListener(u.GlWaterSortEventName.GUILE_MOVE_DAO, this.on_GUILE_MOVE_DAO, this);
u.GLWaterSortEvent.removeListener(u.GlWaterSortEventName.GUILE_MOVE_DAO_END, this.on_GUILE_MOVE_DAO_END, this);
};
e.prototype.createItem = function() {
return o(this, void 0, Promise, function() {
var t, e = this;
return s(this, function() {
t = this;
return [ 2, new Promise(function(i) {
return o(e, void 0, void 0, function() {
return s(this, function(e) {
switch (e.label) {
case 0:
return [ 4, new Promise(function() {
var e, n = function(e) {
var n = h.default.isOpenNewSkin() ? "GLWaterItemNewGuide" : "GLWaterItemGuide";
e.load("prefabs/" + n, function(e, n) {
!e && n instanceof cc.Prefab ? t.node && cc.isValid(t.node) && i(cc.instantiate(n)) : cc.error("Prefab load failed", e);
});
}, a = cc.assetManager.getBundle("gl_watersort");
if (a) n(a); else {
var r = "gl_watersort", o = window.GL;
(null === (e = null == o ? void 0 : o.gamelobby) || void 0 === e ? void 0 : e.getRemoteBundleBaseUrl) && (r = o.gamelobby.getRemoteBundleBaseUrl(r));
cc.assetManager.loadBundle(r, function(t, e) {
t ? cc.error(t) : n(e);
});
}
}) ];

case 1:
e.sent();
return [ 2 ];
}
});
});
}) ];
});
});
};
e.prototype.initView = function() {
return o(this, void 0, void 0, function() {
var t, e, i, n;
return s(this, function(a) {
switch (a.label) {
case 0:
this.itemArr = [];
t = [ -300, 0, 300 ];
n = 0;
a.label = 1;

case 1:
return n < 3 ? [ 4, this.createItem() ] : [ 3, 4 ];

case 2:
e = a.sent();
i = e.getComponent(l.GLWaterItem);
this.itemArr && this.itemArr.push(e);
e.x = t[n];
e.y = 0;
if (cc.isValid(this.itemParent) && this.allWaterData && this.allWaterData[n]) {
e.parent = this.itemParent;
i.setData(this.allWaterData[n], n, !1, !0);
}
a.label = 3;

case 3:
++n;
return [ 3, 1 ];

case 4:
if (this.itemArr) for (n = 0; n < this.itemArr.length; ++n) this.itemArr[n].getComponent(l.GLWaterItem).setAllItem(this.itemArr);
this.showFinger();
return [ 2 ];
}
});
});
};
e.prototype.showFinger = function() {
switch (this._guidlenum) {
case 0:
if (cc.isValid(this.finger)) {
this.finger.active = !0;
this.finger.x = 0;
}
cc.isValid(this.labelClick) && (this.labelClick.active = !0);
cc.isValid(this.labelDesc) && (this.labelDesc.active = !1);
break;

default:
if (cc.isValid(this.finger)) {
this.finger.active = !0;
this.finger.x = this.itemArr[0].x;
}
cc.isValid(this.labelClick) && (this.labelClick.active = !1);
cc.isValid(this.labelDesc) && (this.labelDesc.active = !0);
}
};
e.prototype.on_GUILE_MOVE_DAO_END = function() {
for (var t = 0; t < this.itemArr.length; ++t) if (!this.itemArr[t].getComponent(l.GLWaterItem).checkIsFinish() && !this.itemArr[t].getComponent(l.GLWaterItem).checkIsEmpty()) {
this.showFinger();
return;
}
};
e.prototype.on_GUILE_MOVE_DAO = function() {
this._guidlenum++;
for (var t = 0; t < this.itemArr.length; ++t) {
this.itemArr[t].getChildByName("check").active = !1;
this.itemArr[t].getChildByName("close").active = !1;
}
};
e.prototype.on_GUILDE_MOVE_TUBE = function(t) {
if (t.show) {
this.showFinger();
for (var e = 0; e < this.itemArr.length; ++e) {
this.itemArr[e].getChildByName("check").active = !1;
this.itemArr[e].getChildByName("close").active = !1;
}
} else {
this.finger.active = !1;
this.labelClick.active = !1;
this.labelDesc.active = !0;
}
};
e.prototype.on_GUILDE_MAN_PING = function() {
var t = this, e = this.node.getChildByName("winSpine").getComponent(sp.Skeleton);
e.node.active = !0;
e.setAnimation(0, "xg_beijing_win", !1);
e.setCompleteListener(function() {
e.setCompleteListener(null);
e.clearTracks();
e.node.active = !1;
});
for (var i = 0; i < this.itemArr.length; ++i) if (!this.itemArr[i].getComponent(l.GLWaterItem).checkIsFinish() && !this.itemArr[i].getComponent(l.GLWaterItem).checkIsEmpty()) {
this.showFinger();
return;
}
this.scheduleOnce(function() {
var e;
if (null === (e = t.node) || void 0 === e ? void 0 : e.isValid) {
GL.Audio.playEffect("resources/audio/water_success", "gl_watersort");
console.log("播放关卡完成音效");
GL.ResultTool.createResultView(null, 5, null, null, function() {
cc.isValid(t.node) && u.GLWaterSortEvent.dispatchEvent(u.GlWaterSortEventName.GUILE_END);
}, null, null, 2);
}
}, 2);
};
e.prototype.on_GUILDE_CLICK_DOWN = function(t) {
for (var e = 0; e < this.itemArr.length; ++e) if (e != t.index) {
var i = this.itemArr[e].getComponent(l.GLWaterItem);
i.node.getChildByName("check").active = !1;
i.node.getChildByName("close").active = !1;
}
this.showFinger();
};
e.prototype.on_GUILDE_CLICK_UP = function(t) {
this.labelClick.active = !1;
this.labelDesc.active = !0;
for (var e = 0; e < this.itemArr.length; ++e) {
this.itemArr[e].getChildByName("check").active = !1;
this.itemArr[e].getChildByName("close").active = !1;
}
this.finger.active = !1;
var i = !1, n = this.itemArr[t.index].getComponent(l.GLWaterItem), a = function(e) {
if (e == t.index) return "continue";
var a = r.itemArr[e].getComponent(l.GLWaterItem);
if (a.isClick && !a.isPlay) {
if (a.getData().isLock) {
a.downHuang();
return "break";
}
i = !0;
cc.Tween.stopAllByTarget(n.node);
n.initPos();
var o = n.getData().waterData.filter(function(t) {
return t > -1;
}), s = a.getData().waterData.filter(function(t) {
return t > -1;
}), c = o.length < 4, u = s.length > 0;
if (c && u && (0 == o.length || o[0] == s[0])) {
var h = Math.min(a.getData().tubeLen, 4) - o.length, d = s.findIndex(function(t, e) {
return e > 0 && t !== s[0];
}), p = s.slice(0, -1 !== d ? d : s.length).length, f = Math.min(h, p);
console.log("当前可以倒入，", f);
var g, v = n.getPos(), m = o.length + "_" + (o.length + f), _ = s[0];
g = !(a.getPos().x > v.x || a.getPos().x == v.x && a.getPos().x <= 0);
n.lightPlay();
n.liZiPlay();
s.length && n.changeLiziColor(s[0]);
a.daoShuiPlay(g, f, cc.v2(v.x, n.node.parent.y - a.node.parent.y), function() {
null == n || n.waterUpPlay(m, _);
}, function() {
n.hideLiushui();
}, _);
n.changeWaterData(!0, f, s[0]);
a.changeWaterData(!1, f, s[0]);
r._guidlenum++;
return "break";
}
n.upHuang();
a.downHuang();
return "break";
}
}, r = this;
for (e = 0; e < this.itemArr.length && "break" !== a(e); ++e) ;
if (!i) {
cc.Tween.stopAllByTarget(n.node);
n.initPos();
n.upHuang();
var o = n.getData().waterData.filter(function(t) {
return t > -1;
});
for (e = 0; e < this.itemArr.length; ++e) if (e != t.index) {
var s = this.itemArr[e].getComponent(l.GLWaterItem).getData().waterData.filter(function(t) {
return t > -1;
}), c = o[0] == s[0];
this.itemArr[e].getChildByName("check").active = c;
this.itemArr[e].getChildByName("close").active = !c;
}
}
};
var i;
e.Instance = null;
r([ f(cc.Node) ], e.prototype, "finger", void 0);
r([ f([ cc.Node ]) ], e.prototype, "itemArr", void 0);
r([ f(cc.Node) ], e.prototype, "labelClick", void 0);
r([ f(cc.Node) ], e.prototype, "labelDesc", void 0);
r([ f(cc.Node) ], e.prototype, "itemParent", void 0);
return i = r([ p ], e);
}(cc.Component);
i.GuideView = g;
cc._RF.pop();
}, {
"./GLWaterItem": "GLWaterItem",
"./GLWaterRoundLogEventCtr": "GLWaterRoundLogEventCtr",
"./GLWaterSortEventTool": "GLWaterSortEventTool",
"./GLWaterSortFeat": "GLWaterSortFeat"
} ],
GlWaterMain: [ function(t, e, i) {
"use strict";
cc._RF.push(e, "9d51dxOAEZDUZc6LI0BwHoC", "GlWaterMain");
var n, a, r, o, s = this && this.__extends || (n = function(t, e) {
return (n = Object.setPrototypeOf || {
__proto__: []
} instanceof Array && function(t, e) {
t.__proto__ = e;
} || function(t, e) {
for (var i in e) Object.prototype.hasOwnProperty.call(e, i) && (t[i] = e[i]);
})(t, e);
}, function(t, e) {
n(t, e);
function i() {
this.constructor = t;
}
t.prototype = null === e ? Object.create(e) : (i.prototype = e.prototype, new i());
}), l = this && this.__assign || function() {
return (l = Object.assign || function(t) {
for (var e, i = 1, n = arguments.length; i < n; i++) {
e = arguments[i];
for (var a in e) Object.prototype.hasOwnProperty.call(e, a) && (t[a] = e[a]);
}
return t;
}).apply(this, arguments);
}, c = this && this.__decorate || function(t, e, i, n) {
var a, r = arguments.length, o = r < 3 ? e : null === n ? n = Object.getOwnPropertyDescriptor(e, i) : n;
if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) o = Reflect.decorate(t, e, i, n); else for (var s = t.length - 1; s >= 0; s--) (a = t[s]) && (o = (r < 3 ? a(o) : r > 3 ? a(e, i, o) : a(e, i)) || o);
return r > 3 && o && Object.defineProperty(e, i, o), o;
}, u = this && this.__awaiter || function(t, e, i, n) {
return new (i || (i = Promise))(function(a, r) {
function o(t) {
try {
l(n.next(t));
} catch (t) {
r(t);
}
}
function s(t) {
try {
l(n.throw(t));
} catch (t) {
r(t);
}
}
function l(t) {
t.done ? a(t.value) : (e = t.value, e instanceof i ? e : new i(function(t) {
t(e);
})).then(o, s);
var e;
}
l((n = n.apply(t, e || [])).next());
});
}, h = this && this.__generator || function(t, e) {
var i, n, a, r, o = {
label: 0,
sent: function() {
if (1 & a[0]) throw a[1];
return a[1];
},
trys: [],
ops: []
};
return r = {
next: s(0),
throw: s(1),
return: s(2)
}, "function" == typeof Symbol && (r[Symbol.iterator] = function() {
return this;
}), r;
function s(t) {
return function(e) {
return l([ t, e ]);
};
}
function l(r) {
if (i) throw new TypeError("Generator is already executing.");
for (;o; ) try {
if (i = 1, n && (a = 2 & r[0] ? n.return : r[0] ? n.throw || ((a = n.return) && a.call(n), 
0) : n.next) && !(a = a.call(n, r[1])).done) return a;
(n = 0, a) && (r = [ 2 & r[0], a.value ]);
switch (r[0]) {
case 0:
case 1:
a = r;
break;

case 4:
o.label++;
return {
value: r[1],
done: !1
};

case 5:
o.label++;
n = r[1];
r = [ 0 ];
continue;

case 7:
r = o.ops.pop();
o.trys.pop();
continue;

default:
if (!(a = o.trys, a = a.length > 0 && a[a.length - 1]) && (6 === r[0] || 2 === r[0])) {
o = 0;
continue;
}
if (3 === r[0] && (!a || r[1] > a[0] && r[1] < a[3])) {
o.label = r[1];
break;
}
if (6 === r[0] && o.label < a[1]) {
o.label = a[1];
a = r;
break;
}
if (a && o.label < a[2]) {
o.label = a[2];
o.ops.push(r);
break;
}
a[2] && o.ops.pop();
o.trys.pop();
continue;
}
r = e.call(t, o);
} catch (t) {
r = [ 6, t ];
n = 0;
} finally {
i = a = 0;
}
if (5 & r[0]) throw r[1];
return {
value: r[0] ? r[1] : void 0,
done: !0
};
}
}, d = this && this.__values || function(t) {
var e = "function" == typeof Symbol && Symbol.iterator, i = e && t[e], n = 0;
if (i) return i.call(t);
if (t && "number" == typeof t.length) return {
next: function() {
t && n >= t.length && (t = void 0);
return {
value: t && t[n++],
done: !t
};
}
};
throw new TypeError(e ? "Object is not iterable." : "Symbol.iterator is not defined.");
};
Object.defineProperty(i, "__esModule", {
value: !0
});
i.GlWaterMain = void 0;
var p = null === (a = null === window || void 0 === window ? void 0 : window._GLHallClassMap_) || void 0 === a ? void 0 : a.GLShowAdsPopupByCountCtrl, f = null === (r = null === window || void 0 === window ? void 0 : window._GLHallClassMap_) || void 0 === r ? void 0 : r.GLHallController, g = null === (o = null === window || void 0 === window ? void 0 : window._GLHallClassMap_) || void 0 === o ? void 0 : o.GLHallControllerClass, v = t("./dynamicData/GLWaterLayout"), m = t("./GLWaterItem"), _ = t("./GlWaterModel"), y = t("./GLWaterRoundLogEventCtr"), L = t("./GLWaterFinishTipsCtrl"), G = t("./GLWaterSortEventTool"), T = t("./GLWaterSortFeat"), S = t("./GLWaterSortTool"), b = t("./GLWaterDeadCheck"), W = t("./GLWaterRestartKeepExtraTubeCtrl"), E = t("../../gl_hall/gl_lang/config/GLLangKeyDefine"), C = t("./GLWaterSortScene"), I = t("./traits/GLWaterSkipLastStepTraitCtrl"), A = t("./traits/GLWaterSortClickAgainSkipAnimationTraitCtrl"), k = t("./traits/GLWaterSortNextSkipLastAnimationTraitCtrl"), w = t("./traits/GLWaterClickEmptyFastTraitCtrl"), D = t("../../gl_hall/script/traits/GLGameAdStrategyOptimizeTraitCtrl"), N = t("./traits/GLWaterSortChangeRegionAfterPutTraitCtrl"), P = t("./traits/GLWaterDianzanEffectTraitCtrl"), O = cc.Vec3, R = t("../../gl_hall/script/func/CampaignGuideMiniGameCtrl"), x = cc._decorator, F = x.ccclass, U = x.property, B = function(t) {
s(e, t);
function e() {
var e = null !== t && t.apply(this, arguments) || this;
e.layoutArr = [];
e.layoutMove = [];
e.moveParent = null;
e.btnUnlock = null;
e.spTube = null;
e.skeleton = null;
e.lightConner = null;
e.revertConner = null;
e.newTubeConner = null;
e.revertTips = null;
e.loseTips = null;
e.itemArr = [];
e.lockTube = null;
e._adUnlockVideoIcon = null;
e._adUnlockSkeletonDataMap = new Map();
e._levelData = "5|4|0|0|11122223333100000000";
e._levelID = 1;
e._testData = [ "5|4|0|0|11122223333100000000", "5|4|0|0|31122233321100000000", "6|4|0|0|111222213334444300000000", "6|4|0|0|111423123342432400000000", "6|4|0|0|132421243143432100000000" ];
e._lockPos = cc.v3(0, 0);
e._isRestart = !1;
e._lockTimes = 0;
e._lightTimes = 0;
e._revertNum = 0;
e._newTubeAddNum = 0;
e._kuCun = 0;
e._LightKuCun = 0;
e._gameNum = 0;
e._watchedAdThisLevel = !1;
e.isGuoGUan = !1;
e._isAutoMoving = !1;
e._autoMoveSourceIndex = -1;
e._autoMoveTargetIndex = -1;
e._deadNotified = !1;
e.bundleName = "Remote_gl_watersort_adUnlock";
e.texturePath = "texture/icon_ads";
e._hasLihuaShaked = !1;
return e;
}
i = e;
e.prototype.initLevelData = function(t) {
t || (t = this._levelData);
if (T.default.isOpenAdUnlockEmptyTube()) {
console.log("[GLWaterAdUnlockEmptyTube] initLevelData 初始化栈锁数据：锁定空瓶");
this.saveStackLockData([ {
data: [ -1, -1, -1, -1 ],
isLock: !0
} ]);
} else T.default.isEffectiveNewTube() ? this.saveStackLockData([ {
data: [ -1, -1, -1, -1 ],
isLock: !1
} ]) : this.saveStackLockData([ {
data: [ 0 ],
isLock: !0
} ]);
this.saveFirstLevelData(t);
T.tryShakeVibrationWaterSort("newGame");
this.usrStartSubmit(i.Instance.getGameNum(), GL.ExtractTool.configKey.HsWaterSort + "");
this.sendGGameStartEvent(i.Instance.getGameNum(), GL.ExtractTool.configKey.HsWaterSort || 1, !1);
};
e.prototype.saveFirstLevelData = function(t) {
t && cc.sys.localStorage.setItem("GLWaterFirstData", t);
};
e.prototype.getFirstLevelData = function() {
if (T.default.isNoGuide()) {
this._testData = T.default.getGuideConfig();
this._levelData = this._testData[0];
console.log("3 个固定关 ", this._testData);
}
var t = cc.sys.localStorage.getItem("GLWaterFirstData");
if (t) {
this._levelData = t;
return t || this._levelData;
}
return this._levelData;
};
e.prototype.saveStackData = function(t) {
t && cc.sys.localStorage.setItem("GLWaterStackData", JSON.stringify(t));
};
e.prototype.saveQuestionData = function(t) {
t && cc.sys.localStorage.setItem("GLWaterQuestionData", JSON.stringify(t));
};
e.prototype.getQuestionData = function() {
var t = cc.sys.localStorage.getItem("GLWaterQuestionData");
return t ? JSON.parse(t) : {};
};
e.prototype.clearQuestionData = function() {
cc.sys.localStorage.removeItem("GLWaterQuestionData");
};
e.prototype.getStackData = function() {
var t = cc.sys.localStorage.getItem("GLWaterStackData");
return t && JSON.parse(t) || [];
};
e.prototype.clearStackData = function() {
cc.sys.localStorage.removeItem("GLWaterStackData");
};
e.prototype.saveLockData = function(t) {
t && cc.sys.localStorage.setItem("GLWaterLockData", JSON.stringify(t));
};
e.prototype.getLockData = function() {
var t = cc.sys.localStorage.getItem("GLWaterLockData");
if (t) try {
return JSON.parse(t);
} catch (t) {
return this.getDefaultLockData();
}
return this.getDefaultLockData();
};
e.prototype.getDefaultLockData = function() {
return T.default.isOpenAdUnlockEmptyTube() ? {
data: [ -1, -1, -1, -1 ],
isLock: !0
} : {
data: [ 0 ],
isLock: !0
};
};
e.prototype.clearLockData = function() {
cc.sys.localStorage.removeItem("GLWaterLockData");
};
e.prototype.saveStackLockData = function(t) {
t && cc.sys.localStorage.setItem("GlWaterStackLockData", JSON.stringify(t));
};
e.prototype.getStackLockData = function() {
var t = cc.sys.localStorage.getItem("GlWaterStackLockData");
if (t) try {
return JSON.parse(t);
} catch (t) {
return [];
}
return [];
};
e.prototype.saveData = function(t) {
if (t) {
cc.sys.localStorage.setItem("GLWaterMainData", JSON.stringify(t));
this.syncGameData();
}
};
e.prototype.getData = function() {
var t = cc.sys.localStorage.getItem("GLWaterMainData");
if (t) try {
return JSON.parse(t);
} catch (t) {
return this._levelData;
}
return this._levelData;
};
e.prototype.saveNewTubeData = function(t) {
t && cc.sys.localStorage.setItem("GLWaterNewTubeData", JSON.stringify(t));
};
e.prototype.getNewTubeData = function() {
var t = cc.sys.localStorage.getItem("GLWaterNewTubeData");
return !!t && JSON.parse(t);
};
e.prototype.clearNewTubeData = function() {
cc.sys.localStorage.removeItem("GLWaterNewTubeData");
};
e.prototype.saveAdRewardEmptyTube = function(t) {
t && cc.sys.localStorage.setItem("GLWaterAdRewardEmptyTube", JSON.stringify(t));
};
e.prototype.getAdRewardEmptyTube = function() {
var t = cc.sys.localStorage.getItem("GLWaterAdRewardEmptyTube");
if (t) try {
return JSON.parse(t);
} catch (t) {
return !1;
}
return !1;
};
e.prototype.clearAdRewardEmptyTube = function() {
cc.sys.localStorage.removeItem("GLWaterAdRewardEmptyTube");
};
e.prototype.getNewTubeAddNum = function() {
var t = cc.sys.localStorage.getItem("GLWaterNewTubeAddNum");
if (!t && 0 != t) {
this._newTubeAddNum = 3;
return 3;
}
try {
return JSON.parse(t);
} catch (t) {
return 0;
}
};
e.prototype.updateNewTubeAddNum = function(t) {
this._newTubeAddNum += t || -1;
cc.sys.localStorage.setItem("GLWaterNewTubeAddNum", JSON.stringify(this._newTubeAddNum));
this.syncGameData();
};
e.prototype.getRevertNum = function() {
var t = cc.sys.localStorage.getItem("GLWaterRevertNum");
if (!t && 0 != t) {
this._revertNum = this.getDefaultRevertNum();
return this._revertNum;
}
try {
return JSON.parse(t);
} catch (t) {
return 0;
}
};
e.prototype.getDefaultRevertNum = function() {
return T.GLWaterSortFeature.isOpen(T.GLWaterSortFeat2.GLWaterRevertNumNew) ? 5 : 3;
};
e.prototype.updateRevertNum = function(t) {
this._revertNum += t || -1;
cc.sys.localStorage.setItem("GLWaterRevertNum", JSON.stringify(this._revertNum));
this.syncGameData();
};
e.prototype.getCanUnlockNum = function() {
var t = cc.sys.localStorage.getItem("GLWaterUnlockNum");
if (!t && 0 != t) {
this._kuCun = 3;
return 3;
}
try {
return JSON.parse(t);
} catch (t) {
return 0;
}
};
e.prototype.updateUnLockNum = function() {
this._kuCun--;
cc.sys.localStorage.setItem("GLWaterUnlockNum", JSON.stringify(this._kuCun));
this.syncGameData();
};
e.prototype.getLightNum = function() {
var t = cc.sys.localStorage.getItem("GLWaterLightNum");
if (!t && 0 != t) {
this._LightKuCun = 3;
return 3;
}
try {
return JSON.parse(t);
} catch (t) {
return 0;
}
};
e.prototype.updateLightNum = function() {
this._LightKuCun--;
cc.sys.localStorage.setItem("GLWaterLightNum", JSON.stringify(this._LightKuCun));
this.syncGameData();
};
e.prototype.getLeveID = function() {
var t = cc.sys.localStorage.getItem("GLWaterLevelId");
if (!t) return 1;
try {
return JSON.parse(t);
} catch (t) {
return 1;
}
};
e.prototype.updateLeveId = function() {
this._levelID++;
cc.sys.localStorage.setItem("GLWaterLevelId", JSON.stringify(this._levelID));
this.syncGameData();
_.GlWaterModel.resetTimer();
this.addGameNum();
};
e.prototype.onLoad = function() {
var t, e, n;
i.Instance = this;
G.GLWaterSortEvent.addListener(G.GlWaterSortEventName.CLICK_TUBE_END, this.on_click_up_tube, this);
G.GLWaterSortEvent.addListener(G.GlWaterSortEventName.CHANGE_ORDER, this.on_change_order, this);
G.GLWaterSortEvent.addListener(G.GlWaterSortEventName.MAN_PING, this.on_check_finish, this);
G.GLWaterSortEvent.addListener(G.GlWaterSortEventName.DAO_SHUI, this.on_saveOnceData, this);
G.GLWaterSortEvent.addListener(G.GlWaterSortEventName.DRAW_MARK, this.on_saveMarkData, this);
this.btnUnlock.on(cc.Node.EventType.TOUCH_END, this.onCLickUnlock, this);
null === (e = null === (t = this.loseTips) || void 0 === t ? void 0 : t.getChildByName("mask")) || void 0 === e || e.on(cc.Node.EventType.TOUCH_END, this.onLoseTips, this);
w.default.getInstance().isOpen() && w.default.getInstance().init(this.node);
if (N.default.getInstance().isOpen()) {
var a = (null === (n = this.layoutArr[0]) || void 0 === n ? void 0 : n.parent) || this.node;
N.default.getInstance().registerToMain(a, function(t, e) {
"CLICK_TUBE_END" === t && G.GLWaterSortEvent.dispatchEvent(G.GlWaterSortEventName.CLICK_TUBE_END, e);
});
}
P.GLWaterDianzanEffectTraitCtrl.getInstance().isOpen() && P.GLWaterDianzanEffectTraitCtrl.getInstance().init(this.node);
try {
_.GlWaterModel.isRunning() || _.GlWaterModel.startTimer();
} catch (t) {
console.error("Failed to start timer in onLoad:", t);
}
R.default.isOpen() && R.default.getInstance();
};
e.prototype.onEnable = function() {
this._kuCun = this.getCanUnlockNum();
this._LightKuCun = this.getLightNum();
this._levelID = this.getLeveID();
G.GLWaterSortEvent.dispatchEvent(G.GlWaterSortEventName.ON_INIT, this._levelID);
this.initViewByLevelData(!0);
this.drawBlockBtn();
this.drawLightBtn();
if (T.default.isRevertNum()) {
this._revertNum = this.getRevertNum();
this.drawRevertBtn();
}
if (T.default.isEffectiveNewTube()) {
this._newTubeAddNum = this.getNewTubeAddNum();
this.drawNewTubeBtn();
}
};
e.prototype.checkIsErrorLevelData = function(t, e) {
var i, n = T.default.isOpenAdPassRewardEmptyTube() && this.getAdRewardEmptyTube() ? 1 : 0;
if (T.default.isEffectiveNewTube()) {
var a = this.getNewTubeData();
this.getStackData();
a && (t += 1);
if (e.length != t) return !0;
if (e.some(function(t) {
return 4 != t.length;
})) return !0;
} else {
var r = t + n, o = cc.sys.localStorage.getItem("GLWaterLockData");
if (o) {
o = this.getLockData();
var s = 4 * r;
this.getStackData().length > 1 && (s = 4 * r + (null === (i = null == o ? void 0 : o.data) || void 0 === i ? void 0 : i.length) || 0);
var l = 0;
e.forEach(function(t) {
l += t.length;
});
if (l != s) return !0;
} else if (e.length != r) return !0;
}
return !1;
};
e.prototype.onDestroy = function() {
var t, e;
try {
_.GlWaterModel.dispose();
} catch (t) {
console.error("Failed to dispose timer in onDestroy:", t);
}
this.itemArr = [];
G.GLWaterSortEvent.removeListener(G.GlWaterSortEventName.CLICK_TUBE_END, this.on_click_up_tube, this);
G.GLWaterSortEvent.removeListener(G.GlWaterSortEventName.CHANGE_ORDER, this.on_change_order, this);
G.GLWaterSortEvent.removeListener(G.GlWaterSortEventName.MAN_PING, this.on_check_finish, this);
G.GLWaterSortEvent.removeListener(G.GlWaterSortEventName.DAO_SHUI, this.on_saveOnceData, this);
G.GLWaterSortEvent.removeListener(G.GlWaterSortEventName.DRAW_MARK, this.on_saveMarkData, this);
this.btnUnlock.off(cc.Node.EventType.TOUCH_END, this.onCLickUnlock, this);
this.loseTips && this.loseTips.isValid && (null === (e = null === (t = this.loseTips) || void 0 === t ? void 0 : t.getChildByName("mask")) || void 0 === e || e.off(cc.Node.EventType.TOUCH_END, this.onLoseTips, this));
w.default.getInstance().isOpen() && w.default.getInstance().destroy();
N.default.getInstance().isOpen() && N.default.getInstance().unregisterFromMain();
P.GLWaterDianzanEffectTraitCtrl.getInstance().isOpen() && P.GLWaterDianzanEffectTraitCtrl.getInstance().destroy();
};
e.prototype.initViewByLevelData = function(t) {
this._deadNotified = !1;
L.default.getInstance().resetTubeFinishCache();
this._levelData = this.getFirstLevelData();
var e = this.getData().split("|"), i = Number(_.GlWaterModel.getStringData(e[0])), n = e[4], a = this._levelID % 5 == 0 && this._levelID > this._testData.length, r = a ? this.getQuestionData() : {};
if (n.includes("-1")) {
var o = (n.match(/[ABCDEF]|-1|\d/g) || []).map(function(t) {
switch (t) {
case "A":
return 10;

case "B":
return 11;

case "C":
return 12;

case "D":
return 13;

case "E":
return 14;

default:
return Number(t);
}
});
l = this.splitArrayIntoChunks(o, 4);
if (this.checkIsErrorLevelData(i, l)) {
console.log("关卡数据异常，强制replay恢复数据");
this.replayGame();
return !1;
}
this.initLayout(i, l, t, a, r);
} else {
var s = this.transformDigits(n), l = this.splitArrayIntoChunks(s, 4);
if (this.checkIsErrorLevelData(i, l)) {
console.log("关卡数据异常，强制replay恢复数据");
this.replayGame();
return !1;
}
this.initLayout(i, l, t, a);
}
if (!this.itemArr) return !0;
for (var c = 0; c < this.itemArr.length; ++c) this.itemArr[c] && cc.isValid(this.itemArr[c]) && this.itemArr[c].getComponent(m.GLWaterItem).setAllItem(this.itemArr);
L.default.getInstance().syncBaselineAndRefresh(this);
return !0;
};
e.prototype.createItem = function() {
return u(this, void 0, Promise, function() {
var t, e = this;
return h(this, function() {
t = this;
return [ 2, new Promise(function(i) {
return u(e, void 0, void 0, function() {
return h(this, function(e) {
switch (e.label) {
case 0:
return [ 4, new Promise(function() {
var e, n = function(e) {
var n = T.default.isOpenNewSkin() ? "GLWaterItemNew" : "GLWaterItem";
e.load("prefabs/" + n, function(e, n) {
!e && n instanceof cc.Prefab ? t.node && cc.isValid(t.node) && i(cc.instantiate(n)) : cc.error("Prefab load failed", e);
});
}, a = cc.assetManager.getBundle("gl_watersort");
if (a) n(a); else {
var r = "gl_watersort", o = window.GL;
(null === (e = null == o ? void 0 : o.gamelobby) || void 0 === e ? void 0 : e.getRemoteBundleBaseUrl) && (r = o.gamelobby.getRemoteBundleBaseUrl(r));
cc.assetManager.loadBundle(r, function(t, e) {
t ? cc.error(t) : n(e);
});
}
}) ];

case 1:
e.sent();
return [ 2 ];
}
});
});
}) ];
});
});
};
e.prototype.initLayout = function(t, e, i, n, a) {
return u(this, void 0, void 0, function() {
var r, o, s, l, c, u, d, p, f, g, y, L, S, b, W = this;
return h(this, function(E) {
switch (E.label) {
case 0:
if (!this.node || !cc.isValid(this.node)) return [ 2 ];
if (!this.layoutArr) return [ 2 ];
for (y = 0; y < this.layoutArr.length; ++y) this.layoutArr[y] && this.layoutArr[y].destroyAllChildren();
for (y = 0; y < this.layoutMove.length; ++y) this.layoutMove[y] && this.layoutMove[y].destroyAllChildren();
this._adUnlockVideoIcon = null;
this.layoutArr[1] && (this.layoutArr[1].active = !1);
this.layoutArr[2] && (this.layoutArr[2].active = !1);
this.layoutMove[1] && (this.layoutMove[1].active = !1);
this.layoutMove[2] && (this.layoutMove[2].active = !1);
r = v.GlTubesLayout[t + 1];
if (T.default.isEffectiveNewTube()) if (this.getNewTubeData()) r = v.GlTubesLayout[t + 1]; else if (this.isNeedCompatOldUser()) {
console.log("新瓶兼容老瓶数据展示");
r = v.GlTubesLayout[t + 1];
this.saveNewTubeData(!0);
} else r = v.GlTubesLayout[t]; else T.default.isOpenAdPassRewardEmptyTube() && this.getAdRewardEmptyTube() && v.GlTubesLayout[t + 2] && (r = v.GlTubesLayout[t + 2]);
o = 0;
this.itemArr = [];
if (s = 3 == r.length) {
this.layoutArr[0] && this.layoutArr[0].parent && (this.layoutArr[0].parent.getComponent(cc.Layout).spacingY = 105);
this.layoutMove[0] && this.layoutMove[0].parent && (this.layoutMove[0].parent.getComponent(cc.Layout).spacingY = 105);
} else {
this.layoutArr[0] && this.layoutArr[0].parent && (this.layoutArr[0].parent.getComponent(cc.Layout).spacingY = 150);
this.layoutMove[0] && this.layoutMove[0].parent && (this.layoutMove[0].parent.getComponent(cc.Layout).spacingY = 150);
}
for (y = 0; y < r.length; ++y) {
l = r[y];
for (c = 0; c < l; ++c) ;
}
u = this;
d = .89;
s && (d = T.default.isOpenNewSkin() ? .63 : .72);
p = function(t) {
var l, c, p, g;
return h(this, function(_) {
switch (_.label) {
case 0:
if (!f.layoutArr || !f.layoutArr[t] || !cc.isValid(f.layoutArr[t])) return [ 2, "continue" ];
if (!f.layoutMove || !f.layoutMove[t] || !cc.isValid(f.layoutMove[t])) return [ 2, "continue" ];
if (!f.node || !cc.isValid(f.node)) return [ 2, {
value: void 0
} ];
f.layoutArr[t] && (f.layoutArr[t].active = !0);
f.layoutMove[t] && (f.layoutMove[t].active = !0);
if (s) {
f.layoutArr[t] && (f.layoutArr[t].height = 500 * d);
f.layoutMove[t] && (f.layoutMove[t].height = 500 * d);
} else {
f.layoutArr[t] && (f.layoutArr[t].height = 470);
f.layoutMove[t] && (f.layoutMove[t].height = 470);
}
l = r[t];
c = v.GLTubesPos[l];
p = function(p) {
var g, v, _, y, L, S, b, E;
return h(this, function(h) {
switch (h.label) {
case 0:
g = c[p] * (s ? .78 : .98);
console.log("开始创建试管", o);
return [ 4, f.createItem() ];

case 1:
if (!(v = h.sent())) {
cc.error("创建试管失败，item为null");
return [ 2, "continue" ];
}
v.opacity = 0;
console.log("创建试管完成", o);
v.scale = d;
v.x = g;
v.y = 0;
if (!f.layoutArr || !f.layoutArr[t] || !cc.isValid(f.layoutArr[t])) return [ 2, "continue" ];
v.parent = f.layoutArr[t];
_ = v.getComponent(m.GLWaterItem);
y = t === r.length - 1 && p === l - 1;
if (T.default.isEffectiveNewTube() || t != r.length - 1 || p != l - 1) if (f.getNewTubeData() && t == r.length - 1 && p == l - 1) {
S = f.getLockData();
b = S.data;
E = S.isLock;
_.setData(b, o, !0, !1, E, function() {
if (i) {
cc.tween(W.node).delay(.5).call(function() {
G.GLWaterSortEvent.dispatchEvent(G.GlWaterSortEventName.ON_INIT_FINISH);
}).start();
W.checkDeadAfterEnter();
}
});
} else e[o] && _.setData(e[o], o, !1, !1, !1, i && y ? function() {
return W.checkDeadAfterEnter();
} : null, n, a); else {
S = f.getLockData();
b = S.data;
E = S.isLock;
_.setData(b, o, !0, !1, E, function() {
if (i) {
cc.tween(W.node).delay(.5).call(function() {
G.GLWaterSortEvent.dispatchEvent(G.GlWaterSortEventName.ON_INIT_FINISH);
}).start();
W.checkDeadAfterEnter();
}
});
f.lockTube = v;
if (T.default.isOpenAdUnlockEmptyTube()) {
console.log("[GLWaterAdUnlockEmptyTube] initLayout 创建广告锁瓶 index=" + o + ", lockData=" + JSON.stringify(b) + ", isLock=" + E);
f.addAdUnlockTubeIcon(v);
f.applyAdUnlockTubeSkeleton(v);
} else {
f.btnUnlock.x = g;
L = v.height;
f.scheduleOnce(function() {
u.btnUnlock.y = u.layoutArr[t].y - L / 2 * d - 20;
u._lockPos = u.btnUnlock.position;
});
}
}
o++;
f.itemArr.push(v);
return [ 2 ];
}
});
};
g = 0;
_.label = 1;

case 1:
return g < l ? [ 5, p(g) ] : [ 3, 4 ];

case 2:
_.sent();
_.label = 3;

case 3:
++g;
return [ 3, 1 ];

case 4:
return [ 2 ];
}
});
};
f = this;
y = 0;
E.label = 1;

case 1:
return y < r.length ? [ 5, p(y) ] : [ 3, 4 ];

case 2:
if ("object" == typeof (g = E.sent())) return [ 2, g.value ];
E.label = 3;

case 3:
++y;
return [ 3, 1 ];

case 4:
if (!this.node || !cc.isValid(this.node)) return [ 2 ];
if (!this.itemArr) return [ 2 ];
for (y = 0; y < this.itemArr.length; ++y) this.itemArr[y] && cc.isValid(this.itemArr[y]) && this.itemArr[y].getComponent(m.GLWaterItem).setAllItem(this.itemArr);
P.GLWaterDianzanEffectTraitCtrl.getInstance().isOpen() && P.GLWaterDianzanEffectTraitCtrl.getInstance().calculateColorSegments(this.itemArr);
T.default.isOpenAdUnlockEmptyTube() ? this.refreshAdUnlockTubeIcon() : this.btnUnlockPlay();
if (i) {
if (!this.checkIsFinish()) return [ 2 ];
if (this._levelID >= this._testData.length + 1) {
L = _.GlWaterModel.getElapsedSeconds();
S = this.getExtractData();
b = 15;
S && S.contentDiff && (b = S.contentDiff);
GL.ExtractTool.UpdateCapability("HsWaterSort", b, L, this._levelID - this._testData.length, this._levelID);
}
this.changeLevelID();
}
return [ 2 ];
}
});
});
};
e.prototype.isNeedCompatOldUser = function() {
if (T.default.isOpenNewTube()) {
var t = this.getLockData();
if (t && !t.isLock && t.data && t.data.length) return -1 != t.data[t.data.length - 1] && !this.getNewTubeData();
}
return !1;
};
e.prototype.btnUnlockPlay = function() {
var t = this;
this.scheduleOnce(function() {
t._lockPos.x > 1e3 && (t._lockPos.x -= 1e3);
t.btnUnlock.x = t._lockPos.x + 1e3;
t.btnUnlock.opacity = 255;
cc.tween(t.btnUnlock).to(5 / 30, {
x: t.btnUnlock.x - 1160
}).to(.1, {
x: t._lockPos.x + 30
}).to(1 / 30, {
x: t._lockPos.x
}).start();
});
};
e.prototype.addAdUnlockTubeIcon = function(t) {
return u(this, void 0, void 0, function() {
var e, i, n;
return h(this, function(a) {
switch (a.label) {
case 0:
if (!t || !cc.isValid(t)) {
console.log("[GLWaterAdUnlockEmptyTube] addAdUnlockTubeIcon 传入节点无效，跳过视频图标创建");
return [ 2 ];
}
if ((e = t.getChildByName("icon_ads")) && cc.isValid(e)) {
this._adUnlockVideoIcon = e;
console.log("[GLWaterAdUnlockEmptyTube] addAdUnlockTubeIcon 视频图标节点已存在，直接复用");
return [ 2 ];
}
(e = new cc.Node("icon_ads")).parent = t;
e.setPosition(10, 50);
e.scale = 1;
i = e.addComponent(cc.Sprite);
this._adUnlockVideoIcon = e;
console.log("[GLWaterAdUnlockEmptyTube] addAdUnlockTubeIcon 已创建视频图标节点，开始加载 prop_video");
return [ 4, this.loadBundle() ];

case 1:
(n = a.sent()) && n.load(this.texturePath, cc.SpriteFrame, function(t, n) {
if (t) console.log("[GLWaterAdUnlockEmptyTube] addAdUnlockTubeIcon loadSpriteFrame 失败", t); else if (i && cc.isValid(i)) {
i.spriteFrame = n;
var a = n.getOriginalSize();
a && e.setContentSize(a.width, a.height);
console.log("[GLWaterAdUnlockEmptyTube] addAdUnlockTubeIcon 视频图标 SpriteFrame 加载成功");
}
});
return [ 2 ];
}
});
});
};
e.prototype.loadBundle = function() {
return u(this, void 0, Promise, function() {
var t;
return h(this, function(e) {
switch (e.label) {
case 0:
return [ 4, GL.Game.resLoaderLoadBundle(this.bundleName, !0) ];

case 1:
(t = e.sent()) || console.error("[GLWaterAdUnlockEmptyTube] Failed to load bundle " + this.bundleName);
return [ 2, t ];
}
});
});
};
e.prototype.applyAdUnlockTubeSkeleton = function(t) {
if (t && cc.isValid(t)) {
var e = t.getComponent(m.GLWaterItem);
if (e) {
var i = e.getSpineParent();
if (i && cc.isValid(i)) {
var n = i.getComponent(sp.Skeleton);
n ? this.loadAdUnlockTubeSkeletonData(function(t) {
if (t && n && cc.isValid(n)) {
n.skeletonData = t;
n.premultipliedAlpha = !1;
e.drawTube();
console.log("[GLWaterAdUnlockEmptyTube] applyAdUnlockTubeSkeleton 已切换为共用瓶子骨架并播放 boliping_4_kong");
} else console.log("[GLWaterAdUnlockEmptyTube] applyAdUnlockTubeSkeleton 加载共用瓶子骨架失败，跳过");
}) : console.log("[GLWaterAdUnlockEmptyTube] applyAdUnlockTubeSkeleton 未找到 sp.Skeleton，跳过");
} else console.log("[GLWaterAdUnlockEmptyTube] applyAdUnlockTubeSkeleton 未找到 spineParent，跳过");
} else console.log("[GLWaterAdUnlockEmptyTube] applyAdUnlockTubeSkeleton 未找到 GLWaterItem 组件，跳过");
} else console.log("[GLWaterAdUnlockEmptyTube] applyAdUnlockTubeSkeleton 传入节点无效，跳过空瓶骨架替换");
};
e.prototype.getAdUnlockTubeSkeletonPath = function() {
return T.default.isOpenNewSkin() ? "resources/spine/spineNew" : "resources/spine/skeleton";
};
e.prototype.loadAdUnlockTubeSkeletonData = function(t) {
var e, i = this, n = this.getAdUnlockTubeSkeletonPath(), a = this._adUnlockSkeletonDataMap.get(n);
if (a && cc.isValid(a)) t(a); else {
var r = function(e) {
if (e) e.load(n, sp.SkeletonData, function(e, a) {
if (!e && a) {
i._adUnlockSkeletonDataMap.set(n, a);
t(a);
} else {
console.log("[GLWaterAdUnlockEmptyTube] loadAdUnlockTubeSkeletonData 加载 " + n + " 失败", e);
t(null);
}
}); else {
console.log("[GLWaterAdUnlockEmptyTube] loadAdUnlockTubeSkeletonData 加载 bundle 失败: gl_watersort");
t(null);
}
}, o = cc.assetManager.getBundle("gl_watersort");
if (o) r(o); else {
var s = null === (e = GL.Game) || void 0 === e ? void 0 : e.resLoaderLoadBundle;
s ? s("gl_watersort", !0).then(r).catch(function(e) {
console.log("[GLWaterAdUnlockEmptyTube] loadAdUnlockTubeSkeletonData 加载 bundle 异常", e);
t(null);
}) : cc.assetManager.loadBundle("gl_watersort", function(t, e) {
r(t ? null : e);
});
}
}
};
e.prototype.refreshAdUnlockTubeIcon = function() {
var t;
if (T.default.isOpenAdUnlockEmptyTube()) {
var e = this.getAdUnlockTubeCom(), i = !!(e && (null === (t = e.getData()) || void 0 === t ? void 0 : t.isLock));
this._adUnlockVideoIcon && cc.isValid(this._adUnlockVideoIcon) && (this._adUnlockVideoIcon.active = i);
console.log("[GLWaterAdUnlockEmptyTube] refreshAdUnlockTubeIcon 视频图标 active=" + i + ", 锁瓶组件存在=" + !!e);
} else this._adUnlockVideoIcon && cc.isValid(this._adUnlockVideoIcon) && (this._adUnlockVideoIcon.active = !1);
};
e.prototype.getAdUnlockTubeCom = function() {
if (!this.itemArr || !this.itemArr.length) return null;
var t = this.itemArr[this.itemArr.length - 1];
return t && cc.isValid(t) ? t.getComponent(m.GLWaterItem) : null;
};
e.prototype.onClickAdUnlockTube = function() {
var t, e = this;
console.log("[GLWaterAdUnlockEmptyTube] onClickAdUnlockTube 点击锁定广告瓶，准备看广告解锁");
this.onLoseTips();
if (this.isGuoGUan) console.log("[GLWaterAdUnlockEmptyTube] onClickAdUnlockTube 过关状态，忽略"); else {
var i = this.getAdUnlockTubeCom();
if (i && (null === (t = i.getData()) || void 0 === t ? void 0 : t.isLock)) if (i.isPlay || i.isPlayUp) console.log("[GLWaterAdUnlockEmptyTube] onClickAdUnlockTube 广告瓶正在动画中，忽略"); else {
if (null == p ? void 0 : p.isOpen()) {
if (p.checkNoNeedPopup()) {
console.log("[GLWaterAdUnlockEmptyTube] onClickAdUnlockTube 无需弹窗，直接看广告");
this.showRewardAds(function() {
e.unlockAdUnlockTube();
});
return;
}
p.recordPopUpNumber();
}
console.log("[GLWaterAdUnlockEmptyTube] onClickAdUnlockTube 弹出看广告确认框");
GL.Game.GameEmit(GL.Game.GameEventType.ShowPopup, {
icon: 1,
title: E.default.WATERSORT_POPUP_SEEAD_UNLOCK_TUBE_TITLE,
content: "",
buttons: [ {
label: E.default.WATERSORT_POPUP_SEEAD_UNLOCK_TUBE_BUTTON_YES,
style: GL.Popup.ButtonStyle.Blue,
effect: GL.Popup.ButtonEffectStyle.playNormal1,
adNum: 0,
action: function() {
e.showRewardAds(function() {
e.unlockAdUnlockTube();
});
GL.Game.GameEmit(GL.Game.GameEventType.HidePopup);
}
}, {
label: E.default.WATERSORT_POPUP_SEEAD_UNLOCK_TUBE_BUTTON_NO,
style: GL.Popup.ButtonStyle.White,
effect: GL.Popup.ButtonEffectStyle.playNormal2,
action: function() {
GL.Game.GameEmit(GL.Game.GameEventType.HidePopup);
}
} ]
});
} else console.log("[GLWaterAdUnlockEmptyTube] onClickAdUnlockTube 广告瓶不存在或已解锁，忽略");
}
};
e.prototype.unlockAdUnlockTube = function() {
var t, e = this.getAdUnlockTubeCom();
if (e && (null === (t = e.getData()) || void 0 === t ? void 0 : t.isLock)) {
console.log("[GLWaterAdUnlockEmptyTube] unlockAdUnlockTube 广告看完，开始解锁空瓶");
e.setLock(!1);
e.drawTube();
this.refreshAdUnlockTubeIcon();
this.saveLockData({
data: [ -1, -1, -1, -1 ],
isLock: !1
});
for (var i = this.getStackLockData(), n = 0; n < i.length; ++n) i[n] = {
data: [ -1, -1, -1, -1 ],
isLock: !1
};
this.saveStackLockData(i);
GL.Audio.playEffect("resources/audio/water_unlock", "gl_watersort");
console.log("[GLWaterAdUnlockEmptyTube] unlockAdUnlockTube 解锁完成：空瓶数据 [-1,-1,-1,-1]，isLock=false，播放解锁音效");
y.default.getInstance().useItem(1002, !0);
GL.Game.GameEmit(GL.Game.GameEventType.HidePopup);
} else {
console.log("[GLWaterAdUnlockEmptyTube] unlockAdUnlockTube 广告瓶不存在或已解锁，忽略");
GL.Game.GameEmit(GL.Game.GameEventType.HidePopup);
}
};
e.prototype.splitArrayIntoChunks = function(t, e) {
for (var i = [], n = t.length, a = 0; a < n; a += e) {
var r = t.slice(a, a + e);
i.push(r);
}
return i;
};
e.prototype.formatTubesData = function(t) {
return t && t.length ? this.splitArrayIntoChunks(t, 4).map(function(t) {
return "[" + t.join(",") + "]";
}).join(" ") : "[]";
};
e.prototype.transformDigits = function(t) {
var e, i, n = new Map(), a = 0, r = [];
try {
for (var o = d(t), s = o.next(); !s.done; s = o.next()) {
var l = s.value;
if ("0" !== l) {
if (!n.has(l)) {
n.set(l, a);
a++;
}
r.push(n.get(l));
} else r.push(-1);
}
} catch (t) {
e = {
error: t
};
} finally {
try {
s && !s.done && (i = o.return) && i.call(o);
} finally {
if (e) throw e.error;
}
}
return r;
};
e.prototype.onCLickUnlock = function() {
var t = this, e = this.getLockData(), i = e.data, n = e.isLock;
if (!(i.length >= 4)) {
var a = function() {
if (cc.isValid(t.lockTube)) {
if (n) {
i[0] = -1;
t.lockTube.getComponent(m.GLWaterItem).playUnlock();
t.lockTube.getComponent(m.GLWaterItem).updateLockData(i);
GL.Audio.playEffect("resources/audio/water_unlock", "gl_watersort");
console.log("播放水瓶解锁音效");
} else {
i.unshift(-1);
t.lockTube.getComponent(m.GLWaterItem).updateLockData(i);
t.lockTube.getComponent(m.GLWaterItem).drawTube();
if (4 == i.length) {
GL.Audio.playEffect("resources/audio/2048_new_1", "gl_watersort");
console.log("播放水瓶解锁完成音效");
}
}
t.lockTube.getComponent(m.GLWaterItem).setLock(!1);
t.saveLockData({
data: i,
isLock: !1
});
t.drawBlockBtn();
var e = i.length;
console.log("[GLWaterRestartKeepExtraTubeReward] 解锁额外试管，当前解锁长度: " + e);
W.default.getInstance().saveExtraTubeUnlockLength(e);
for (var a = t.getStackLockData(), r = 0; r < a.length; ++r) {
var o = a[r].data, s = o.length;
if (e > s) for (var l = 0; l < e - s; l++) o.unshift(-1);
1 == o.length && 0 == o[0] && (o = [ -1 ]);
a[r].data = o;
a[r].isLock = !1;
}
t.saveStackLockData(a);
}
};
if (this._kuCun > 0) {
var r = function() {
t.updateUnLockNum();
a();
y.default.getInstance().useItem(1002, !1);
GL.Game.GameEmit(GL.Game.GameEventType.HidePopup);
}, o = {
label: E.default.WATERSORT_POPUP_USEITEM_BUTTON_YES,
style: GL.Popup.ButtonStyle.Blue,
effect: GL.Popup.ButtonEffectStyle.playNormal1,
adNum: this._kuCun,
action: function() {
r();
}
}, s = {
label: E.default.WATERSORT_POPUP_USEITEM_BUTTON_NO,
style: GL.Popup.ButtonStyle.White,
effect: GL.Popup.ButtonEffectStyle.playNormal2,
action: function() {
GL.Game.GameEmit(GL.Game.GameEventType.HidePopup);
}
};
(l = []).push(o);
if (GL.Game.IsPopupTwiceCheckOpen()) {
if (GL.Game.GetPopupTwiceCheck()) {
r();
return;
}
l.push({
label: "Never Ask Again",
style: GL.Popup.ButtonStyle.White,
effect: GL.Popup.ButtonEffectStyle.playNormal2,
action: function() {
GL.Game.SetPopupTwiceCheck(!0);
GL.Game.GameEmit(GL.Game.GameEventType.HidePopup);
}
});
} else l.push(s);
GL.Game.GameEmit(GL.Game.GameEventType.ShowPopup, {
icon: GL.Popup.Icon.waterSort,
title: E.default.WATERSORT_POPUP_USEITEM_TITLE,
content: "",
buttons: l
});
} else {
if (null == p ? void 0 : p.isOpen()) {
if (p.checkNoNeedPopup()) {
this.showRewardAds(function() {
if (a) {
a();
y.default.getInstance().useItem(1002, !0);
}
});
return;
}
p.recordPopUpNumber();
}
var l;
r = function() {
t.showRewardAds(function() {
a();
y.default.getInstance().useItem(1002, !0);
});
GL.Game.GameEmit(GL.Game.GameEventType.HidePopup);
}, o = {
label: E.default.WATERSORT_POPUP_UNLOCK_BUTTON_YES,
style: GL.Popup.ButtonStyle.Blue,
effect: GL.Popup.ButtonEffectStyle.playNormal1,
adNum: 0,
action: function() {
r();
}
}, s = {
label: E.default.WATERSORT_POPUP_UNLOCK_BUTTON_NO,
style: GL.Popup.ButtonStyle.White,
effect: GL.Popup.ButtonEffectStyle.playNormal2,
action: function() {
GL.Game.GameEmit(GL.Game.GameEventType.HidePopup);
}
};
(l = []).push(o);
if (GL.Game.IsPopupTwiceCheckOpen()) {
if (GL.Game.GetPopupTwiceCheck()) {
r();
return;
}
l.push({
label: "Never Ask Again",
style: GL.Popup.ButtonStyle.White,
effect: GL.Popup.ButtonEffectStyle.playNormal2,
action: function() {
GL.Game.SetPopupTwiceCheck(!0);
GL.Game.GameEmit(GL.Game.GameEventType.HidePopup);
}
});
} else l.push(s);
GL.Game.GameEmit(GL.Game.GameEventType.ShowPopup, {
icon: GL.Popup.Icon.waterSort,
title: E.default.WATERSORT_POPUP_UNLOCK_TITLE,
content: "",
buttons: l
});
}
}
};
e.prototype.showRewardAds = function(t) {
var e = this, i = _.GlWaterSortModel.getAdSubmitdata("激励", "REWARDED", 6);
GL.Ad.showRewardsAd(function(i) {
if (i && 1 === (null == i ? void 0 : i.state)) {
e._watchedAdThisLevel = !0;
console.log("【水排序】[showRewardAds] 观看激励广告，记录本关看过激励广告，过关后下一关奖励一个空瓶子");
t();
}
GL.Game.GameEmit(GL.Game.GameEventType.HidePopup);
}, this, "", i);
};
e.prototype.drawBlockBtn = function() {
var t = this;
if (T.default.isOpenNewTube() || T.default.isOpenAdUnlockEmptyTube()) {
T.default.isOpenAdUnlockEmptyTube() && console.log("【水排序】[GLWaterAdUnlockEmptyTube] drawBlockBtn 广告解锁方案下隐藏老方案解锁按钮");
this.btnUnlock.active = !1;
} else {
var e = this.getLockData().data, i = this.btnUnlock.getChildByName("btn_round10");
if (4 == e.length) this.btnUnlock.active = !1; else {
this.btnUnlock.active = !0;
i.getChildByName("prop_video").active = this._kuCun <= 0;
i.getChildByName("prop_count_bg").active = this._kuCun > 0;
if (this._kuCun > 0) {
var n = i.getChildByName("prop_count_bg");
n.active = !0;
n.getComponentInChildren(cc.Label).string = this._kuCun.toString();
}
cc.assetManager.loadBundle("gl_watersort", function(i, n) {
if (i) cc.error(i); else {
var a = "icon_bottle_" + (e.length + 1);
"0" == e && (a = "icon_bottle_1");
n.load("resources/images/" + a, cc.SpriteFrame, function(e, i) {
if (!e && i instanceof cc.SpriteFrame) {
if (t.spTube && t.spTube.isValid) try {
t.spTube.spriteFrame = i;
} catch (t) {
console.log("SpriteFrame load failed", t);
}
} else console.log("SpriteFrame load failed", e);
});
}
});
}
}
};
e.prototype.drawLightBtn = function() {
if (this.lightConner) {
this.lightConner.getChildByName("imgVideo").active = this._LightKuCun <= 0;
this.lightConner.getChildByName("cornerBg").active = this._LightKuCun > 0;
if (this._LightKuCun > 0) {
var t = this.lightConner.getChildByName("cornerBg");
t.active = !0;
t.getComponentInChildren(cc.Label).string = this._LightKuCun.toString();
}
}
};
e.prototype.drawRevertBtn = function() {
if (this.revertConner) {
this.revertConner.getChildByName("imgVideo").active = this._revertNum <= 0;
this.revertConner.getChildByName("cornerBg").active = this._revertNum > 0;
if (this._revertNum > 0) {
var t = this.revertConner.getChildByName("cornerBg");
t.active = !0;
t.getComponentInChildren(cc.Label).string = this._revertNum.toString();
}
}
};
e.prototype.drawNewTubeBtn = function() {
if (cc.isValid(this.newTubeConner)) {
var t = this.newTubeConner.getChildByName("imgVideo"), e = this.newTubeConner.getChildByName("cornerBg");
t && (t.active = this._newTubeAddNum <= 0);
e && (e.active = this._newTubeAddNum > 0);
if (this._newTubeAddNum > 0) {
var i = this.newTubeConner.getChildByName("cornerBg");
if (i) {
i.active = !0;
i.getComponentInChildren(cc.Label).string = this._newTubeAddNum.toString();
}
}
}
};
e.prototype.onLoseTips = function() {
this.loseTips.active = !1;
};
e.prototype.checkTipIsUse = function() {
for (var t, e = function(e) {
if (!i.itemArr[e] || !cc.isValid(i.itemArr[e])) return "continue";
var n = i.itemArr[e].getComponent(m.GLWaterItem);
if (!n) return "continue";
var a = n.getData();
if (!a || !a.waterData) return "continue";
var r = a.waterData.filter(function(t) {
return -1 != t;
});
if (r.length && !n.checkIsFinish()) for (var o = n.getCanCrashTube(), s = 0; s < o.length; ++s) if (i.itemArr[o[s]]) {
var l = null === (t = i.itemArr[o[s]]) || void 0 === t ? void 0 : t.getComponent(m.GLWaterItem);
if (l) {
var c = l.getData();
if (c && c.waterData) {
var u = c.waterData.filter(function(t) {
return -1 != t;
});
if (u.length) {
var h = c.tubeLen - u.length, d = r.findIndex(function(t, e) {
return e > 0 && t !== r[0];
});
if (r.slice(0, -1 !== d ? d : r.length).length <= h) return {
value: !0
};
}
}
}
}
}, i = this, n = 0; n < this.itemArr.length; ++n) {
var a = e(n);
if ("object" == typeof a) return a.value;
}
var r = function(t) {
if (!o.itemArr[t] || !cc.isValid(o.itemArr[t])) return "continue";
var e = o.itemArr[t].getComponent(m.GLWaterItem);
if (!e) return "continue";
var i = e.getData();
if (!i || !i.waterData) return "continue";
var n = i.waterData.filter(function(t) {
return -1 != t;
});
if (n.length && !e.checkIsFinish()) for (var a = e.getCanCrashTube(), r = 0; r < a.length; ++r) {
var s = o.itemArr[a[r]].getComponent(m.GLWaterItem);
if (s) {
var l = s.getData();
if (l && l.waterData && 0 == l.waterData.filter(function(t) {
return -1 != t;
}).length) {
var c = n.findIndex(function(t, e) {
return e > 0 && t !== n[0];
});
if (n.slice(0, -1 !== c ? c : n.length).length != n.length) return {
value: !0
};
}
}
}
}, o = this;
for (n = 0; n < this.itemArr.length; ++n) {
var s = r(n);
if ("object" == typeof s) return s.value;
}
return !1;
};
e.prototype.on_click_tip = function() {
var t, e = this;
if (this.isGuoGUan) return !1;
if (this.itemArr && (null === (t = this.itemArr) || void 0 === t ? void 0 : t.length)) {
for (var i = 0; i < this.itemArr.length; ++i) if (this.itemArr[i] && cc.isValid(this.itemArr[i])) {
var n = this.itemArr[i].getComponent(m.GLWaterItem);
if (n.isPlay || n.isPlayUp) return !1;
}
console.log("this._LightKuCun: ", this._LightKuCun, " this.checkTipIsUse(): ", this.checkTipIsUse(), " GLWaterSortFeat.isOpenNewTube(): ", T.default.isOpenNewTube(), " this.getNewTubeData(): ", this.getNewTubeData());
if (T.GLWaterSortFeature.isOpen(T.GLWaterSortFeat2.GLWaterDieFirstUnlockAndTishi) && 0 == this._LightKuCun && !this.checkTipIsUse() && T.default.isEffectiveNewTube() && !this.getNewTubeData()) console.log("走下面看广告送一个瓶子逻辑"); else if (!this.checkTipIsUse()) {
this.loseTips.active = !0;
return;
}
var a = function() {
var t, i, n, a, r, o = null, s = null, l = 0, c = null, u = null, h = null;
if (e.itemArr && (null === (t = e.itemArr) || void 0 === t ? void 0 : t.length)) {
var d = function(t) {
if (!e.itemArr[t] || !cc.isValid(e.itemArr[t])) return "continue";
var a = null === (i = e.itemArr[t]) || void 0 === i ? void 0 : i.getComponent(m.GLWaterItem);
if (!a) return "continue";
var r = a.getData();
if (!r || !r.waterData) return "continue";
var s = r.waterData.filter(function(t) {
return -1 != t;
});
if (s.length && !a.checkIsFinish()) for (var d = a.getCanCrashTube(), p = 0; p < d.length; ++p) {
var f = null === (n = e.itemArr[d[p]]) || void 0 === n ? void 0 : n.getComponent(m.GLWaterItem);
if (f) {
var g = f.getData();
if (g && g.waterData) {
var v = g.waterData.filter(function(t) {
return -1 != t;
});
if (v.length) {
var _ = g.tubeLen - v.length, y = s.findIndex(function(t, e) {
return e > 0 && t !== s[0];
}), L = s.slice(0, -1 !== y ? y : s.length).length;
if (L > _) continue;
var G = L;
if (G > l) {
u = f;
h = a;
l = G;
o = t + "_" + d[p];
c = s[0];
if (3 == G) return "break-br";
break;
}
}
}
}
}
};
t: for (var p = 0; p < e.itemArr.length; ++p) switch (d(p)) {
case "break-br":
break t;
}
var f = function() {
T.default.isOpenHighlightTipsEffect() && G.GLWaterSortEvent.dispatchEvent(G.GlWaterSortEventName.HIGHLIGHT_TIPS);
e._lightTimes++;
if (u && h) {
var t = u.getData();
if (t && t.waterData) {
var i = t.waterData.filter(function(t) {
return -1 != t;
}).length, n = i + "_" + (i + l), a = !0, r = u.getPos() || O.ZERO, o = h.getPos() || O.ZERO;
a = !(o.x > r.x || o.x == r.x && o.x <= 0);
var s = .75 * h.node.scale * h.node.height;
r.x - s < -540 ? a = !1 : r.x + s > 540 && (a = !0);
u.lightPlay();
u.liZiPlay();
if (h) {
var d = h.getData();
if (d && d.waterData) {
var p = d.waterData.filter(function(t) {
return -1 != t;
});
p.length && u.changeLiziColor(p[0]);
if (k.default.getInstance().isOpen()) {
k.default.getInstance().trySkipLastAnimation();
k.default.getInstance().setPourPair(h, u);
}
w.default.getInstance().isOpen() && w.default.getInstance().setPourPair(h, u);
h.daoShuiPlay(a, l, cc.v2(r.x, u.node.parent.y - h.node.parent.y), function() {
null == u || u.waterUpPlay(n, c);
}, function() {
u.hideLiushui();
}, c);
u.hideMarkEff(!0);
u.changeWaterData(!0, l, p[0]);
h.changeWaterData(!1, l, p[0]);
e.on_saveOnceData();
e.drawLightBtn();
}
}
}
}
};
if (o) f(); else {
var g = function(t) {
if (!e.itemArr[t] || !cc.isValid(e.itemArr[t])) return "continue";
var i = null === (a = e.itemArr[t]) || void 0 === a ? void 0 : a.getComponent(m.GLWaterItem);
if (!i) return "continue";
var n = i.getData();
if (!n || !n.waterData) return "continue";
var o = n.waterData.filter(function(t) {
return -1 != t;
});
if (o.length && !i.checkIsFinish()) {
var d = i.getCanCrashTube();
t: for (var p = 0; p < d.length; ++p) {
var f = null === (r = e.itemArr[d[p]]) || void 0 === r ? void 0 : r.getComponent(m.GLWaterItem);
if (f) {
var g = f.getData();
if (g && g.waterData) {
var v = g.waterData.filter(function(t) {
return -1 != t;
});
if (0 == v.length) {
var _ = g.tubeLen - v.length, y = o.findIndex(function(t, e) {
return e > 0 && t !== o[0];
}), L = o.slice(0, -1 !== y ? y : o.length).length;
if (L == o.length) {
console.log(t, "单色水管不倒入空管");
break t;
}
var G = Math.min(_, L);
if (G > l) {
u = f;
h = i;
l = G;
s = t + "_" + d[p];
c = o[0];
if (3 == G) return "break-br";
break;
}
}
}
}
}
}
};
t: for (p = 0; p < e.itemArr.length; ++p) switch (g(p)) {
case "break-br":
break t;
}
s && f();
}
}
};
if (this._LightKuCun > 0) {
this.updateLightNum();
a();
y.default.getInstance().useItem(1001, !1);
} else {
if (null == p ? void 0 : p.isOpen()) {
if (p.checkNoNeedPopup()) {
this.showRewardAds(function() {
if (a) {
a();
y.default.getInstance().useItem(1001, !0);
}
});
return;
}
p.recordPopUpNumber();
}
var r = function() {
e.showRewardAds(function() {
if (T.GLWaterSortFeature.isOpen(T.GLWaterSortFeat2.GLWaterDieFirstUnlockAndTishi) && 0 == e._LightKuCun && !e.checkTipIsUse() && T.default.isEffectiveNewTube() && !e.getNewTubeData()) {
e.saveNewTubeData(!0);
e.addNewTube();
} else {
a();
y.default.getInstance().useItem(1001, !0);
}
GL.Game.GameEmit(GL.Game.GameEventType.HidePopup);
});
}, o = {
label: E.default.WATERSORT_POPUP_SEEAD_BUTTON_YES,
style: GL.Popup.ButtonStyle.Blue,
effect: GL.Popup.ButtonEffectStyle.playNormal1,
adNum: 0,
action: function() {
r();
}
}, s = {
label: E.default.WATERSORT_POPUP_SEEAD_BUTTON_NO,
style: GL.Popup.ButtonStyle.White,
effect: GL.Popup.ButtonEffectStyle.playNormal2,
action: function() {
GL.Game.GameEmit(GL.Game.GameEventType.HidePopup);
}
}, l = [];
l.push(o);
if (GL.Game.IsPopupTwiceCheckOpen()) {
if (GL.Game.GetPopupTwiceCheck()) {
r();
return;
}
l.push({
label: "Never Ask Again",
style: GL.Popup.ButtonStyle.White,
effect: GL.Popup.ButtonEffectStyle.playNormal2,
action: function() {
GL.Game.SetPopupTwiceCheck(!0);
GL.Game.GameEmit(GL.Game.GameEventType.HidePopup);
}
});
} else l.push(s);
GL.Game.GameEmit(GL.Game.GameEventType.ShowPopup, {
icon: 1,
title: E.default.WATERSORT_POPUP_SEEAD_TITLE,
content: "",
buttons: l
});
}
}
};
e.prototype.on_click_revert = function() {
var t, e, i = this;
this.onLoseTips();
if (!this.isGuoGUan && !L.default.getInstance().hasWaterFinishTipsShake()) {
for (var n = 0; n < this.itemArr.length; ++n) if (this.itemArr[n] && cc.isValid(this.itemArr[n]) && ((G = this.itemArr[n].getComponent(m.GLWaterItem)).isPlay || G.isPlayUp)) return !1;
if (T.default.isRevertNum() && this._revertNum <= 0) {
if (null == p ? void 0 : p.isOpen()) {
if (p.checkNoNeedPopup()) {
this.showRewardAds(function() {
i.updateRevertNum(i.getDefaultRevertNum());
i.drawRevertBtn();
y.default.getInstance().useItem(1003, !0);
});
return;
}
p.recordPopUpNumber();
}
var a = function() {
i.showRewardAds(function() {
i.updateRevertNum(i.getDefaultRevertNum());
i.drawRevertBtn();
y.default.getInstance().useItem(1003, !0);
});
GL.Game.GameEmit(GL.Game.GameEventType.HidePopup);
}, r = {
label: E.default.WATERSORT_POPUP_SEEAD_REVERT_BUTTON_YES,
style: GL.Popup.ButtonStyle.Blue,
effect: GL.Popup.ButtonEffectStyle.playNormal1,
adNum: 0,
action: function() {
a();
}
}, o = {
label: E.default.WATERSORT_POPUP_SEEAD_REVERT_BUTTON_NO,
style: GL.Popup.ButtonStyle.White,
effect: GL.Popup.ButtonEffectStyle.playNormal2,
action: function() {
GL.Game.GameEmit(GL.Game.GameEventType.HidePopup);
}
}, s = [];
s.push(r);
if (GL.Game.IsPopupTwiceCheckOpen()) {
if (GL.Game.GetPopupTwiceCheck()) {
a();
return;
}
s.push({
label: "Never Ask Again",
style: GL.Popup.ButtonStyle.White,
effect: GL.Popup.ButtonEffectStyle.playNormal2,
action: function() {
GL.Game.SetPopupTwiceCheck(!0);
GL.Game.GameEmit(GL.Game.GameEventType.HidePopup);
}
});
} else s.push(o);
GL.Game.GameEmit(GL.Game.GameEventType.ShowPopup, {
icon: 1,
title: E.default.WATERSORT_POPUP_SEEAD_REVERT_TITLE,
content: "",
buttons: s
});
} else {
for (n = 0; n < this.itemArr.length; ++n) if (this.itemArr[n] && cc.isValid(this.itemArr[n]) && ((G = this.itemArr[n].getComponent(m.GLWaterItem)).isPlay || G.isPlayUp)) return;
var l = this.getStackData(), c = this.getStackLockData();
if (!(l.length <= 1 || c.length <= 1)) {
if (T.default.isRevertNum()) {
this.updateRevertNum();
this.drawRevertBtn();
y.default.getInstance().useItem(1003, !1);
}
y.default.getInstance().undoStep();
GL.Audio.playEffect("resources/audio/fruit_item_clean", "gl_watersort");
console.log("播放撤回音效");
var u = l[l.length - 1];
l.splice(l.length - 1, 1);
c.splice(c.length - 1, 1);
var h = c[c.length - 1], d = l[l.length - 1], f = (d.match(/[ABCDEF]|-1|\d/g) || []).map(function(t) {
switch (t) {
case "A":
return 10;

case "B":
return 11;

case "C":
return 12;

case "D":
return 13;

case "E":
return 14;

default:
return Number(t);
}
}), g = T.default.isEffectiveNewTube(), v = this.getNewTubeData();
for (n = 0; n < this.itemArr.length; ++n) if (this.itemArr[n] && cc.isValid(this.itemArr[n])) {
var G = this.itemArr[n].getComponent(m.GLWaterItem);
if (g) if (v && n == this.itemArr.length - 1) {
h && h.data && G.updateLockData(h.data);
h && null != h.isLock && "boolean" == typeof h.isLock ? G.setLock(h.isLock) : G.setLock(!0);
} else {
S = f.slice(4 * n, 4 * n + 4);
G.updateLockData(S);
} else if (n == this.itemArr.length - 1) {
h && h.data && G.updateLockData(h.data);
h && null != h.isLock && "boolean" == typeof h.isLock ? G.setLock(h.isLock) : G.setLock(!0);
} else {
var S = f.slice(4 * n, 4 * n + 4);
G.updateLockData(S);
}
G.drawTube();
G.hideBowen(!0);
G.hideQiPao(!0);
}
u = (u.match(/[ABCDEF]|-1|\d/g) || []).map(function(t) {
switch (t) {
case "A":
return 10;

case "B":
return 11;

case "C":
return 12;

case "D":
return 13;

case "E":
return 14;

default:
return Number(t);
}
});
var b = (d.match(/[ABCDEF]|-1|\d/g) || []).map(function(t) {
switch (t) {
case "A":
return 10;

case "B":
return 11;

case "C":
return 12;

case "D":
return 13;

case "E":
return 14;

default:
return Number(t);
}
}), W = null;
for (n = 0; n < b.length; ++n) if ((null != b[n] || null != u[n]) && b[n] != u[n] && -1 != b[n] && -1 == u[n]) {
W = Math.floor(n / 4);
break;
}
null !== W && W >= 0 && this.itemArr[W] && this.itemArr[W].getComponent(m.GLWaterItem).playBowen();
var C = 2;
g && (C = 1);
var I = _.GlWaterModel.changeNumberByWaterData(f.slice(0, 4 * (this.itemArr.length - C) + 4)), A = this.getFirstElemt() + I.join("");
this.saveData(A);
if (this.itemArr[this.itemArr.length - 1] && cc.isValid(this.itemArr[this.itemArr.length - 1])) {
var k = this.itemArr[this.itemArr.length - 1].getComponent(m.GLWaterItem);
if (k) {
var w = null === (t = k.getData()) || void 0 === t ? void 0 : t.waterData, D = null === (e = k.getData()) || void 0 === e ? void 0 : e.isLock;
if (T.default.isEffectiveNewTube() && !this.getNewTubeData()) {
D = !1;
w = [ -1, -1, -1, -1 ];
}
this.saveLockData({
data: w,
isLock: D
});
this.saveStackData(l);
this.saveStackLockData(c);
this.refreshAdUnlockTubeIcon();
L.default.getInstance().syncBaselineAndRefresh(this);
this.checkDeadAndNotify();
}
}
}
}
}
};
e.prototype.on_click_addNewTube = function() {
var t = this;
this.onLoseTips();
if (!this.isGuoGUan) {
for (var e = 0; e < this.itemArr.length; ++e) if (this.itemArr[e] && cc.isValid(this.itemArr[e]) && ((i = this.itemArr[e].getComponent(m.GLWaterItem)).isPlay || i.isPlayUp)) return !1;
if (this._newTubeAddNum <= 0) {
if (null == p ? void 0 : p.isOpen()) {
if (p.checkNoNeedPopup()) {
this.showRewardAds(function() {
if (t.getNewTubeData()) t.updateNewTubeAddNum(1); else {
t.saveNewTubeData(!0);
t.addNewTube();
}
t.drawNewTubeBtn();
y.default.getInstance().useItem(1002, !0);
});
return;
}
p.recordPopUpNumber();
}
GL.Game.GameEmit(GL.Game.GameEventType.ShowPopup, {
icon: 1,
title: E.default.WATERSORT_POPUP_SEEAD_NEW_TUBE_TITLE,
content: "",
buttons: [ {
label: E.default.WATERSORT_POPUP_SEEAD_NEW_TUBE_BUTTON_YES,
style: GL.Popup.ButtonStyle.Blue,
effect: GL.Popup.ButtonEffectStyle.playNormal1,
adNum: 0,
action: function() {
t.showRewardAds(function() {
if (t.getNewTubeData()) t.updateNewTubeAddNum(1); else {
t.saveNewTubeData(!0);
t.addNewTube();
}
t.drawNewTubeBtn();
y.default.getInstance().useItem(1002, !0);
});
GL.Game.GameEmit(GL.Game.GameEventType.HidePopup);
}
}, {
label: E.default.WATERSORT_POPUP_SEEAD_NEW_TUBE_BUTTON_NO,
style: GL.Popup.ButtonStyle.White,
effect: GL.Popup.ButtonEffectStyle.playNormal2,
action: function() {
GL.Game.GameEmit(GL.Game.GameEventType.HidePopup);
}
} ]
});
} else {
for (e = 0; e < this.itemArr.length; ++e) if (this.itemArr[e] && cc.isValid(this.itemArr[e])) {
var i;
if ((i = this.itemArr[e].getComponent(m.GLWaterItem)).isPlay || i.isPlayUp) return;
}
if (this.getNewTubeData()) {
this.revertTips.active = !0;
this.revertTips.y = -150;
this.revertTips.opacity = 255;
cc.Tween.stopAllByTarget(this.revertTips);
cc.tween(this.revertTips).to(.5, {
y: 0
}).to(.5, {
opacity: 0
}).call(function() {
t.revertTips.active = !1;
}).start();
} else {
this.updateNewTubeAddNum();
this.drawNewTubeBtn();
this.saveNewTubeData(!0);
this.addNewTube();
y.default.getInstance().useItem(1002, !1);
}
}
}
};
e.prototype.reviveAddEmptyTube = function() {
return u(this, void 0, void 0, function() {
var t = this;
return h(this, function(e) {
switch (e.label) {
case 0:
return [ 4, this.addReviveEmptyTube() ];

case 1:
e.sent();
y.default.getInstance().useItem(1002, !0);
this._deadNotified = !1;
this.scheduleOnce(function() {
t.checkDeadAndNotify();
}, .5);
return [ 2 ];
}
});
});
};
e.prototype.addReviveEmptyTube = function() {
return u(this, void 0, void 0, function() {
var t, e, i, n, a, r, o, s, l;
return h(this, function(c) {
switch (c.label) {
case 0:
if (!this.layoutArr || !this.itemArr || !this.itemArr.length) {
console.warn("[GLWaterFailUi] 试管布局或数据不存在，无法新增空试管");
return [ 2 ];
}
t = this.itemArr[this.itemArr.length - 1];
e = t && cc.isValid(t) ? t.getComponent(m.GLWaterItem) : null;
i = !!(e && e.getIsLockTube && e.getIsLockTube());
n = i ? Math.max(0, this.itemArr.length - 1) : this.itemArr.length;
return [ 4, this.createItem() ];

case 1:
if (!(a = c.sent()) || !cc.isValid(a)) {
console.warn("[GLWaterFailUi] 创建空试管失败");
return [ 2 ];
}
a.opacity = 0;
this.itemArr.splice(n, 0, a);
r = v.GlTubesLayout[this.itemArr.length] || [ this.itemArr.length ];
this.relayoutAllTubes(r);
a.getComponent(m.GLWaterItem).setData([ -1, -1, -1, -1 ], n, !1, !1);
for (o = 0; o < this.itemArr.length; ++o) if ((s = this.itemArr[o]) && cc.isValid(s)) {
(l = s.getComponent(m.GLWaterItem)).setIndex(o);
l.setAllItem(this.itemArr);
}
console.log("[GLWaterFailUi] 已在水瓶区新增空试管，当前试管数=" + this.itemArr.length);
return [ 2 ];
}
});
});
};
e.prototype.relayoutAllTubes = function(t) {
if (this.layoutArr && this.layoutMove && this.itemArr) {
var e = 3 === t.length, i = e ? T.default.isOpenNewSkin() ? .63 : .72 : .89, n = e ? 105 : 150;
this.layoutArr[0] && this.layoutArr[0].parent && (this.layoutArr[0].parent.getComponent(cc.Layout).spacingY = n);
this.layoutMove[0] && this.layoutMove[0].parent && (this.layoutMove[0].parent.getComponent(cc.Layout).spacingY = n);
for (var a = 0, r = 0; r < t.length; ++r) {
if (this.layoutArr[r]) {
this.layoutArr[r].active = !0;
this.layoutArr[r].height = e ? 500 * i : 470;
}
if (this.layoutMove[r]) {
this.layoutMove[r].active = !0;
this.layoutMove[r].height = e ? 500 * i : 470;
}
var o = t[r], s = v.GLTubesPos[o];
if (s) for (var l = 0; l < o && !(a >= this.itemArr.length); ++l) {
var c = this.itemArr[a];
if (c && cc.isValid(c)) {
var u = c.getComponent(m.GLWaterItem), h = s[l] * (e ? .78 : .98), d = T.default.isOpenFinishTips() && 0 === c.scale ? 0 : i;
c.scale = d;
c.parent = this.layoutArr[r];
c.x = h;
c.y = 0;
u.setPosAndInitParent(cc.v3(h, 0, 0));
a++;
} else a++;
}
}
for (r = t.length; r < this.layoutArr.length; ++r) {
this.layoutArr[r] && (this.layoutArr[r].active = !1);
this.layoutMove[r] && (this.layoutMove[r].active = !1);
}
}
};
e.prototype.addNewTube = function() {
return u(this, void 0, void 0, function() {
var t, e, i, n, a, r, o, s, l, c, u, d, p, f, g, y, L = this;
return h(this, function(h) {
switch (h.label) {
case 0:
if (!this.layoutArr) return [ 2 ];
t = [];
e = this._levelData;
i = e.split("|");
n = Number(_.GlWaterModel.getStringData(i[0]));
t = v.GlTubesLayout[n + 1];
a = 0;
if (r = 3 == t.length) {
this.layoutArr[0] && this.layoutArr[0].parent && (this.layoutArr[0].parent.getComponent(cc.Layout).spacingY = 105);
this.layoutMove[0] && this.layoutMove[0].parent && (this.layoutMove[0].parent.getComponent(cc.Layout).spacingY = 105);
} else {
this.layoutArr[0] && this.layoutArr[0].parent && (this.layoutArr[0].parent.getComponent(cc.Layout).spacingY = 150);
this.layoutMove[0] && this.layoutMove[0].parent && (this.layoutMove[0].parent.getComponent(cc.Layout).spacingY = 150);
}
o = .89;
r && (o = T.default.isOpenNewSkin() ? .63 : .72);
s = [];
y = 0;
h.label = 1;

case 1:
if (!(y < t.length)) return [ 3, 8 ];
if (!this.layoutArr || !this.layoutMove) return [ 2 ];
this.layoutArr[y] && (this.layoutArr[y].active = !0);
this.layoutMove[y] && (this.layoutMove[y].active = !0);
if (r) {
this.layoutArr[y] && (this.layoutArr[y].height = 500 * o);
this.layoutMove[y] && (this.layoutMove[y].height = 500 * o);
} else {
this.layoutArr[y] && (this.layoutArr[y].height = 470);
this.layoutMove[y] && (this.layoutMove[y].height = 470);
}
l = t[y];
c = v.GLTubesPos[l];
u = 0;
h.label = 2;

case 2:
if (!(u < l)) return [ 3, 7 ];
d = c[u] * (r ? .78 : .98);
return y != t.length - 1 || u != l - 1 ? [ 3, 4 ] : [ 4, this.createItem() ];

case 3:
if (!(p = h.sent())) {
cc.error("创建锁试管失败，item为null");
return [ 3, 6 ];
}
p.x = d;
p.y = 0;
p.scale = o;
if (!this.layoutArr || !this.layoutArr[y] || !cc.isValid(this.layoutArr[y])) return [ 3, 6 ];
p.parent = this.layoutArr[y];
p.opacity = 0;
p.scale = o;
f = p.getComponent(m.GLWaterItem);
console.log("创建试管", p);
this.saveLockData({
data: [ -1, -1, -1, -1 ],
isLock: !0
});
f.setData([ -1, -1, -1, -1 ], a, !0, !1);
this.itemArr.push(p);
s.push({
item: p,
targetParent: this.layoutArr[y],
targetPos: cc.v3(d, 0, 0),
targetScale: o,
index: a
});
return [ 3, 5 ];

case 4:
if ((p = this.itemArr[a]) && p.isValid) {
f = p.getComponent(m.GLWaterItem);
g = o;
T.default.isOpenFinishTips() && 0 == p.scale ? g = 0 : p.scale = g;
p.parent = this.layoutArr[y];
p.x = d;
p.y = 0;
f.setPosAndInitParent(cc.v3(d, 0, 0));
s.push({
item: p,
targetParent: this.layoutArr[y],
targetPos: cc.v3(d, 0, 0),
targetScale: g,
index: a
});
}
h.label = 5;

case 5:
a++;
h.label = 6;

case 6:
++u;
return [ 3, 2 ];

case 7:
++y;
return [ 3, 1 ];

case 8:
this.scheduleOnce(function() {
L.ensureTubeLayout(s);
}, .1);
if (!this.itemArr) return [ 2 ];
for (y = 0; y < this.itemArr.length; ++y) this.itemArr[y] && cc.isValid(this.itemArr[y]) && this.itemArr[y].getComponent(m.GLWaterItem).setAllItem(this.itemArr);
console.log("添加试管后适配完成");
this.addNewTubeData();
return [ 2 ];
}
});
});
};
e.prototype.addNewTubeData = function() {
var t = [];
if (this.itemArr && 0 != this.itemArr.length) {
for (var e = 0; e < this.itemArr.length; ++e) if (this.itemArr[e]) {
var i = this.itemArr[e].getComponent(m.GLWaterItem);
if (i) {
var n = i.getData();
if (n && n.waterData) {
var a = _.GlWaterModel.changeNumberByWaterData(n.waterData);
t.push(a.join(""));
}
}
}
var r = t.join(""), o = this.getFirstElemt() + r;
this.saveData(o);
}
};
e.prototype.addNewTubeSaveData = function() {
var t, e, i = this.getStackData(), n = [];
if (this.itemArr && 0 != this.itemArr.length && this.itemArr[this.itemArr.length - 1] && cc.isValid(this.itemArr[this.itemArr.length - 1])) {
var a = this.itemArr[this.itemArr.length - 1].getComponent(m.GLWaterItem);
if (a && i[i.length - 1]) {
for (var r = 0; r < this.itemArr.length; ++r) if (this.itemArr[r]) {
var o = this.itemArr[r].getComponent(m.GLWaterItem);
if (o) {
var s = o.getData();
if (s && s.waterData) {
var l = _.GlWaterModel.changeNumberByWaterData(s.waterData);
n.push(l.join(""));
}
}
}
var c = n.join("");
i[i.length - 1] = c;
this.saveStackData(i);
console.log("操作的数据为", i);
var u = this.getFirstElemt() + i[i.length - 1];
this.saveData(u);
var h = null === (t = a.getData()) || void 0 === t ? void 0 : t.waterData, d = null === (e = a.getData()) || void 0 === e ? void 0 : e.isLock;
if (T.default.isOpenNewTube() && !this.getNewTubeData()) {
d = !1;
h = [ -1, -1, -1, -1 ];
}
this.saveLockData({
data: h,
isLock: d
});
var p = this.getStackLockData();
if (p[p.length - 1]) {
p[p.length - 1] = {
data: h,
isLock: d
};
this.saveStackLockData(p);
console.log("操作的锁试管数据为", JSON.stringify(p));
}
}
}
};
e.prototype.ensureTubeLayout = function(t) {
var e, i, n = this;
if (t && 0 !== t.length) {
console.log("开始兜底处理试管布局，试管数量:", t.length);
try {
for (var a = d(t), r = a.next(); !r.done; r = a.next()) {
var o = r.value;
if (o.item && o.item.isValid && o.index != this.itemArr.length - 1) {
var s = o.item, l = o.targetParent, c = o.targetPos, u = o.targetScale, h = s.parent, p = s.position, f = s.scale, g = !1;
if (h !== l) {
console.log("试管" + o.index + " 父节点不正确，正在修复");
g = !0;
}
if (cc.Vec3.distance(p, c) > 5) {
console.log("试管" + o.index + " 位置不正确，当前位置:", p, "目标位置:", c);
g = !0;
}
if (Math.abs(f - u) > .01) {
console.log("试管" + o.index + " 缩放不正确，当前缩放:", f, "目标缩放:", u);
g = !0;
}
if (g) try {
h !== l && (s.parent = l);
s.position = c;
s.scale = u;
var v = s.getComponent(m.GLWaterItem);
v && v.setPosAndInitParent && v.setPosAndInitParent(c);
console.log("试管" + o.index + " 修复完成");
} catch (t) {
console.error("修复试管" + o.index + "时出错:", t);
}
}
}
} catch (t) {
e = {
error: t
};
} finally {
try {
r && !r.done && (i = a.return) && i.call(a);
} finally {
if (e) throw e.error;
}
}
this.scheduleOnce(function() {
if (null != n.itemArr) {
for (var t = 0; t < n.itemArr.length; ++t) {
var e = n.itemArr[t];
if (e && e.isValid) {
var i = e.getComponent(m.GLWaterItem);
i && i.setAllItem && i.setAllItem(n.itemArr);
}
}
console.log("兜底处理完成，所有试管引用已更新");
}
}, .05);
}
};
e.prototype.replayGame = function() {
var t = this;
this.sendGameEndData(4);
y.default.getInstance().resetData();
y.default.getInstance().resetSavedOperationSteps();
var e = this._levelData.split("|")[4], n = this.transformDigits(e);
this.saveData(this._levelData);
this.clearLockData();
this.clearNewTubeData();
this.clearAdRewardEmptyTube();
P.GLWaterDianzanEffectTraitCtrl.getInstance().isOpen() && P.GLWaterDianzanEffectTraitCtrl.getInstance().clearSegmentData();
var a = [], r = _.GlWaterModel.changeNumberByWaterData(this.splitArrayIntoChunks(n, n.length)[0]);
a.push(r.join(""));
this.saveStackData(a);
W.default.getInstance().restoreStackLockAfterReplay({
saveLockData: function(e) {
return t.saveLockData(e);
},
saveStackLockData: function(e) {
return t.saveStackLockData(e);
}
});
this.drawBlockBtn();
this.clearQuestionData();
this.initViewByLevelData();
GL.Game.GameEmit(GL.Game.GameEventType.HidePopup);
D.default.getInstance().isOpen() ? _.GlWaterModel.showInstertAd("end", 1, !0) : _.GlWaterModel.showInstertAd("frontInsert", 4);
try {
_.GlWaterModel.resetTimer();
} catch (t) {
console.error("Failed to reset timer in replay:", t);
}
this._isRestart = !0;
this._lockTimes = 0;
this._lightTimes = 0;
this.addGameNum();
T.tryShakeVibrationWaterSort("newGame");
this.usrStartSubmit(i.Instance.getGameNum(), GL.ExtractTool.configKey.HsWaterSort + "");
this.sendGGameStartEvent(i.Instance.getGameNum(), GL.ExtractTool.configKey.HsWaterSort || 1, !1);
};
e.prototype.getFirstElemt = function() {
for (var t = "", e = 0; e < 8; ++e) t += this._levelData[e];
return t;
};
e.prototype.on_click_replay = function() {
var t = this;
this.onLoseTips();
for (var e = 0; e < this.itemArr.length; ++e) if (this.itemArr[e] && cc.isValid(this.itemArr[e])) {
var i = this.itemArr[e].getComponent(m.GLWaterItem);
if (i.isPlay || i.isPlayUp) return;
}
var n = function() {
t.replayGame();
}, a = {
label: E.default.WATERSORT_POPUP_RESTART_BUTTON_YES,
style: GL.Popup.ButtonStyle.Blue,
effect: GL.Popup.ButtonEffectStyle.playNormal1,
adNum: null,
action: function() {
n();
}
}, r = {
label: E.default.WATERSORT_POPUP_RESTART_BUTTON_NO,
style: GL.Popup.ButtonStyle.White,
effect: GL.Popup.ButtonEffectStyle.playNormal2,
action: function() {
GL.Game.GameEmit(GL.Game.GameEventType.HidePopup);
}
}, o = [];
o.push(a);
if (GL.Game.IsPopupTwiceCheckOpen()) {
if (GL.Game.GetPopupTwiceCheck()) {
n();
return;
}
o.push({
label: "Never Ask Again",
style: GL.Popup.ButtonStyle.White,
effect: GL.Popup.ButtonEffectStyle.playNormal2,
action: function() {
GL.Game.SetPopupTwiceCheck(!0);
GL.Game.GameEmit(GL.Game.GameEventType.HidePopup);
}
});
} else o.push(r);
var s = {
icon: GL.Popup.Icon.Restart,
title: E.default.WATERSORT_POPUP_RESTART_TITLE,
content: E.default.WATERSORT_POPUP_RESTART_DESC,
buttons: o
};
GL.Game.GameEmit(GL.Game.GameEventType.ShowPopup, s);
};
e.prototype.on_click_replay_direct = function() {
this.onLoseTips();
for (var t = 0; t < this.itemArr.length; ++t) if (this.itemArr[t] && cc.isValid(this.itemArr[t])) {
var e = this.itemArr[t].getComponent(m.GLWaterItem);
if (e.isPlay || e.isPlayUp) return;
}
this.replayGame();
};
e.prototype.checkIsFinish = function() {
if (I.default.getInstance().isOpen() && I.default.getInstance().checkCondition(this.itemArr)) return !0;
for (var t = 0; t < this.itemArr.length; ++t) if (this.itemArr[t] && cc.isValid(this.itemArr[t]) && !this.itemArr[t].getComponent(m.GLWaterItem).checkIsFinish() && !this.itemArr[t].getComponent(m.GLWaterItem).checkIsEmpty()) return !1;
return !0;
};
e.prototype.checkDeadAfterEnter = function() {
this.checkIsFinish() || this.checkDeadAndNotify();
};
e.prototype.checkDeadAndNotify = function() {
if (this.isGuoGUan) console.log("[GLWaterDeadCheck] 过关中，跳过死局检测"); else if (T.default.isOpenRevive()) if (C.GlWaterSortScene.getInGuilde()) console.log("[GLWaterDeadCheck] 引导中，跳过死局检测"); else if (this.itemArr && this.itemArr.length) {
for (var t = 0; t < this.itemArr.length; ++t) if (this.itemArr[t] && cc.isValid(this.itemArr[t])) {
var e = this.itemArr[t].getComponent(m.GLWaterItem);
if (e && (e.isPlay || e.isPlayUp)) {
console.log("[GLWaterDeadCheck] 试管" + t + "动画中，跳过死局检测");
return;
}
}
var i = b.GLWaterDeadCheck.collectTubes(this);
if (i.length) if (b.GLWaterDeadCheck.isDead(i)) if (this._deadNotified) console.log("[GLWaterDeadCheck] 死局已派发过，不重复派发"); else {
this._deadNotified = !0;
console.log("[GLWaterDeadCheck] 检测到死局，派发 WATER_DEAD 复活事件");
G.GLWaterSortEvent.dispatchEvent(G.GlWaterSortEventName.WATER_DEAD, {
tubes: i
});
} else {
this._deadNotified && console.log("[GLWaterDeadCheck] 死局解除，重置标记");
this._deadNotified = !1;
} else console.log("[GLWaterDeadCheck] 未读取到试管数据，跳过死局检测");
} else console.log("[GLWaterDeadCheck] 试管数组为空，跳过死局检测"); else console.log("[GLWaterDeadCheck] 复活特性未开启，跳过死局检测");
};
e.prototype.resetDeadNotified = function() {
this._deadNotified = !1;
};
e.prototype.saveExtractData = function(t) {
cc.sys.localStorage.setItem("GlWaterExtractData", JSON.stringify(t));
};
e.prototype.getExtractData = function() {
var t = cc.sys.localStorage.getItem("GlWaterExtractData");
return t && JSON.parse(t) || null;
};
e.prototype.changeLevelID = function() {
return u(this, void 0, void 0, function() {
var t, e, i, n, a, r, o, s, l, c;
return h(this, function(u) {
switch (u.label) {
case 0:
if (!this.node || !cc.isValid(this.node)) return [ 2 ];
this.isGuoGUan = !1;
this.sendGameEndData(1);
this.updateLeveId();
if (!(this._levelID <= this._testData.length)) return [ 3, 1 ];
this._levelData = this._testData[(this._levelID - 1) % this._testData.length];
return [ 3, 3 ];

case 1:
return [ 4, GL.ExtractTool.getByteContent({
type: "HsWaterSort",
levelID: this._levelID - 6,
isRestrat: this._isRestart,
dieResult: 1,
maxNotDieLevel: 5,
reallyLevelID: this._levelID
}) ];

case 2:
(null == (t = u.sent()) || t && (null == t.contentByteData || null == t.index)) && (t = {
contentByteData: "7|4|0|0|1112235233344442555100000000",
contentDiff: 15.841,
fileName: "03_02_02",
index: 93130782
});
this._levelData = t.contentByteData;
this.saveExtractData(t);
u.label = 3;

case 3:
this.saveData(this._levelData);
if (!this.btnUnlock) return [ 2 ];
this.btnUnlock.opacity = 0;
this.clearStackData();
this.clearLockData();
this.clearNewTubeData();
P.GLWaterDianzanEffectTraitCtrl.getInstance().isOpen() && P.GLWaterDianzanEffectTraitCtrl.getInstance().clearSegmentData();
console.log("[GLWaterRestartKeepExtraTubeReward] 进入下一关，清除额外试管解锁长度数据");
W.default.getInstance().clearExtraTubeUnlockLength();
e = this._levelData;
i = e.split("|");
n = i[4];
a = this.transformDigits(n);
this.saveData(this._levelData);
this.clearLockData();
this.clearNewTubeData();
this.clearAdRewardEmptyTube();
r = [];
o = _.GlWaterModel.changeNumberByWaterData(this.splitArrayIntoChunks(a, a.length)[0]);
s = this._watchedAdThisLevel;
l = T.default.isOpenAdPassRewardEmptyTube() && s;
console.log("【水排序】[GLWaterAdRewardEmptyTube] 加瓶子前盘面数据 试管数:", o.length / 4, "数据:", this.formatTubesData(o));
if (l) {
o.push(-1, -1, -1, -1);
if (T.default.isEffectiveNewTube()) {
this.saveNewTubeData(!0);
this.saveLockData({
data: [ -1, -1, -1, -1 ],
isLock: !1
});
console.log("【水排序】[GLWaterAdRewardEmptyTube] 方案:+1瓶, 加瓶子后盘面数据 试管数:", o.length / 4, "数据:", this.formatTubesData(o));
} else {
this.saveAdRewardEmptyTube(!0);
console.log("【水排序】[GLWaterAdRewardEmptyTube] 方案:+1/4瓶, 加瓶子后盘面数据 试管数:", o.length / 4, "数据:", this.formatTubesData(o));
}
}
r.push(o.join(""));
this.saveStackData(r);
if (l) {
c = this.getFirstElemt() + o.join("");
this.saveData(c);
console.log("【水排序】[GLWaterAdRewardEmptyTube] 保存的完整关卡数据 表头:", this.getFirstElemt(), "盘面:", this.formatTubesData(o));
}
if (T.default.isOpenAdUnlockEmptyTube()) {
console.log("【水排序】[GLWaterAdUnlockEmptyTube] changeLevelID 进入下一关，重新锁定广告空瓶");
this.saveStackLockData([ {
data: [ -1, -1, -1, -1 ],
isLock: !0
} ]);
} else T.default.isEffectiveNewTube() ? this.saveStackLockData([ {
data: [ -1, -1, -1, -1 ],
isLock: !1
} ]) : this.saveStackLockData([ {
data: [ 0 ],
isLock: !0
} ]);
this.initLevelData();
this.initViewByLevelData();
this.drawBlockBtn();
G.GLWaterSortEvent.dispatchEvent(G.GlWaterSortEventName.GUO_GUAN, this._levelID);
this._isRestart = !1;
this._lockTimes = 0;
this._lightTimes = 0;
this._watchedAdThisLevel = !1;
return [ 2 ];
}
});
});
};
e.prototype.usrStartSubmit = function(t, e) {
var i = {
game_type: "15",
game_subtype: e,
game_id: t
}, n = "glUsrStartSubmit" + e, a = cc.sys.localStorage.getItem(n);
if (a) {
if (Number(a) != t) {
cc.sys.localStorage.setItem(n, t);
GL.Submit.sendGameData("usr_data_game_start", i);
}
} else {
cc.sys.localStorage.setItem(n, t);
GL.Submit.sendGameData("usr_data_game_start", i);
}
};
e.prototype.on_check_finish = function() {
var t = this;
T.GLWaterSortFeature.isOpen(T.GLWaterSortFeat2.GLWaterSingleAutoMove) && this._isAutoMoving && this.checkAutoMoveComplete();
if (!this._hasLihuaShaked) {
this._hasLihuaShaked = !0;
T.tryShakeVibrationWaterSort("finishOneBottleLihua");
}
this.skeleton.node.active = !0;
this.skeleton.setAnimation(0, "xg_beijing_win", !1);
this.skeleton.setCompleteListener(function() {
t.skeleton.setCompleteListener(null);
t.skeleton.clearTracks();
t.skeleton.node.active = !1;
t._hasLihuaShaked = !1;
});
P.GLWaterDianzanEffectTraitCtrl.getInstance().isOpen() && this.scheduleOnce(function() {
P.GLWaterDianzanEffectTraitCtrl.getInstance().checkAndPlayDianzanEffect();
}, .03);
};
e.prototype.on_change_order = function(t) {
var e = this;
if (this.itemArr[null == t ? void 0 : t.index]) {
var i = t.isMove, n = this.itemArr[null == t ? void 0 : t.index];
if (i) {
n.parent = n.getComponent(m.GLWaterItem).layoutMoveparent;
t.addClick || n.getComponent(m.GLWaterItem).offClickEvent();
} else {
n.parent = n.getComponent(m.GLWaterItem).layoutParent;
t.addClick || n.getComponent(m.GLWaterItem).addClickEvent();
if (!t.daoShuiEnd) return;
T.GLWaterSortFeature.isOpen(T.GLWaterSortFeat2.GLWaterSingleAutoMove) && this._isAutoMoving && t.index === this._autoMoveSourceIndex && this.checkAutoMoveComplete();
w.default.getInstance().isOpen() && w.default.getInstance().clearPourPair();
if (!this.checkIsFinish()) {
this.checkDeadAndNotify();
return;
}
for (var a = 0; a < this.itemArr.length; ++a) if (this.itemArr[a] && cc.isValid(this.itemArr[a]) && this.itemArr[a].getComponent(m.GLWaterItem).isPlay) return;
this.isGuoGUan = !0;
this.scheduleOnce(function() {
var t, i, n;
GL.Game.GameEmit(GL.Game.GameEventType.HidePopup);
if (null === (t = e.node) || void 0 === t ? void 0 : t.isValid) {
L.default.getInstance().stopAllBottleFinishTipsEffects(e);
if (e._levelID >= e._testData.length + 1) {
var a = _.GlWaterModel.getElapsedSeconds(), r = e.getExtractData(), o = 15;
r && r.contentDiff && (o = r.contentDiff);
GL.ExtractTool.UpdateCapability("HsWaterSort", o, a, e._levelID - e._testData.length, e._levelID);
}
GL.Audio.playEffect("resources/audio/water_success", "gl_watersort");
console.log("播放关卡完成音效");
var s = window.GL;
if (null === (i = null == s ? void 0 : s.gamelobby) || void 0 === i ? void 0 : i.isChapterFusionMode()) {
null === (n = s.gamelobby) || void 0 === n || n.openResultView(1, null, null);
g.Exit(GL.Const.ExitGameType.FromGameResult);
return;
}
GL.ResultTool.createResultView(null, 5, null, null, e.changeLevelID.bind(e), null, null, 2);
}
}, .2);
}
}
};
e.prototype.on_click_up_tube = function(t) {
var e, i, n, a, r, o, s = this;
this.onLoseTips();
if (!this.isGuoGUan) if (T.GLWaterSortFeature.isOpen(T.GLWaterSortFeat2.GLWaterSingleAutoMove) && this._isAutoMoving) console.log("正在自动倒入，禁止用户点击"); else try {
if (!t || "number" != typeof t.index) return;
if (!this.itemArr || !Array.isArray(this.itemArr) || t.index < 0 || t.index >= this.itemArr.length) return;
if (T.default.isOpenAdUnlockEmptyTube() && t.index === this.itemArr.length - 1) {
var l = this.itemArr[t.index];
if (l && cc.isValid(l)) {
var c = l.getComponent(m.GLWaterItem);
if (c && (null === (e = c.getData()) || void 0 === e ? void 0 : e.isLock)) {
console.log("[GLWaterAdUnlockEmptyTube] on_click_up_tube 命中末尾锁定广告瓶 index=" + t.index + "，拦截点击走广告解锁");
c.isPlay || c.isPlayUp || this.onClickAdUnlockTube();
return;
}
}
}
var u = this.itemArr[t.index];
if (!u || !u.isValid) return;
var h = !1, d = u.getComponent(m.GLWaterItem);
if (!d) return;
for (var p = d.isPlayUp, f = function(e) {
if (e == t.index) return "continue";
var o = g.itemArr[e];
if (!o || !o.isValid) return "continue";
var s = o.getComponent(m.GLWaterItem);
if (!s) return "continue";
if (s.isClick && !s.isPlay) {
if (s.getData && s.getData().isLock) {
s.downHuang && s.downHuang();
N.default.getInstance().isOpen() && N.default.getInstance().handleTubeDown();
return "break";
}
h = !0;
cc.Tween.stopAllByTarget(d.node);
d.initPos && d.initPos();
var l = d.getData && d.getData(), c = s.getData && s.getData();
if (!l || !c) return "break";
var u = l.waterData ? l.waterData.filter(function(t) {
return -1 != t;
}) : [], f = c.waterData ? c.waterData.filter(function(t) {
return -1 != t;
}) : [], v = u.length < (l.tubeLen || 4), _ = f.length > 0;
if (v && _ && (0 == u.length || u[0] == f[0])) {
N.default.getInstance().isOpen() && N.default.getInstance().handleTubeDown();
var y = Math.min(l.tubeLen || 4, 4) - u.length, L = f.findIndex(function(t, e) {
return e > 0 && t !== f[0];
}), G = f.slice(0, -1 !== L ? L : f.length).length, T = Math.min(y, G);
console.log("当前可以倒入，", T);
var S = d.getPos(), b = u.length + "_" + (u.length + T), W = f[0], E = !0, C = s.getPos();
E = !(C.x > S.x || C.x == S.x && C.x <= 0);
var I = .75 * ((null === (i = s.node) || void 0 === i ? void 0 : i.scale) || 1) * ((null === (n = s.node) || void 0 === n ? void 0 : n.height) || 474);
S.x - I < -540 ? E = !1 : S.x + I > 540 && (E = !0);
d.lightPlay();
d.liZiPlay();
f.length && d.changeLiziColor && d.changeLiziColor(f[0]);
if (s.daoShuiPlay && (null === (a = d.node) || void 0 === a ? void 0 : a.parent) && (null === (r = s.node) || void 0 === r ? void 0 : r.parent)) {
A.default.getInstance().isOpen() && A.default.getInstance().setPourPair(s, d);
if (k.default.getInstance().isOpen()) {
k.default.getInstance().setPourPair(s, d);
k.default.getInstance().trySkipLastAnimation();
}
w.default.getInstance().isOpen() && w.default.getInstance().setPourPair(s, d);
s.daoShuiPlay(E, T, cc.v2(S.x, d.node.parent.y - s.node.parent.y), function() {
(null == d ? void 0 : d.waterUpPlay) && d.waterUpPlay(b, W);
}, function() {
(null == d ? void 0 : d.hideLiushui) && d.hideLiushui();
}, W);
}
d.hideMarkEff(!0);
d.changeWaterData && d.changeWaterData(!0, T, f[0]);
s.changeWaterData && s.changeWaterData(!1, T, f[0]);
g.on_saveOnceData();
return "break";
}
if (p) N.default.getInstance().isOpen() && N.default.getInstance().handleTubeDown(); else {
d.upHuang && d.upHuang();
N.default.getInstance().isOpen() && N.default.getInstance().handleTubeUpWithSwitch(t.index, g.itemArr);
}
s.downHuang && s.downHuang();
return "break";
}
}, g = this, v = 0; v < this.itemArr.length && "break" !== f(v); ++v) ;
if (!h) {
cc.Tween.stopAllByTarget(d.node);
d.initPos && d.initPos();
if (!p) {
d.upHuang && d.upHuang();
N.default.getInstance().isOpen() && N.default.getInstance().handleTubeUp(t.index, this.itemArr);
}
if (T.GLWaterSortFeature.isOpen(T.GLWaterSortFeat2.GLWaterSingleAutoMove)) {
if (null === (o = d.getData()) || void 0 === o ? void 0 : o.isLock) return;
cc.tween(this.node).delay(5 / 30).call(function() {
var e = S.GLWaterSortTool.canPutInTargetItem(t.index);
if (null != e) {
s._isAutoMoving = !0;
s._autoMoveSourceIndex = t.index;
s._autoMoveTargetIndex = e.getComponent(m.GLWaterItem).getIndex();
s.on_single_auto_move(d, e.getComponent(m.GLWaterItem));
}
}).start();
}
}
this._lockTimes++;
} catch (t) {
console.log("on_click_up_tube error:", t);
}
};
e.prototype.on_single_auto_move = function(t, e) {
S.GLWaterSortTool.pourWater(t.node, e.node);
};
e.prototype.checkAutoMoveComplete = function() {
if (!T.GLWaterSortFeature.isOpen(T.GLWaterSortFeat2.GLWaterSingleAutoMove) || !this._isAutoMoving) return !1;
this._isAutoMoving = !1;
this._autoMoveSourceIndex = -1;
this._autoMoveTargetIndex = -1;
console.log("自动倒入完成，恢复用户点击");
return !0;
};
e.prototype.on_saveMarkData = function(t) {
var e = this.getQuestionData();
e[t.index] = t.markIndex;
this.saveQuestionData(e);
console.log("保存问号数据", e);
};
e.prototype.on_saveOnceData = function() {
var t, e, i = this.getStackData(), n = [];
if (this.itemArr && 0 != this.itemArr.length && this.itemArr[this.itemArr.length - 1] && cc.isValid(this.itemArr[this.itemArr.length - 1])) {
var a = this.itemArr[this.itemArr.length - 1].getComponent(m.GLWaterItem);
if (a) {
for (var r = 0; r < this.itemArr.length; ++r) if (this.itemArr[r]) {
var o = this.itemArr[r].getComponent(m.GLWaterItem);
if (o) {
var s = o.getData();
if (s && s.waterData) {
var l = _.GlWaterModel.changeNumberByWaterData(s.waterData);
n.push(l.join(""));
}
}
}
var c = n.join("");
i.push(c);
this.saveStackData(i);
console.log("操作的数据为", i);
var u = this.getFirstElemt() + i[i.length - 1];
this.saveData(u);
var h = null === (t = a.getData()) || void 0 === t ? void 0 : t.waterData, d = null === (e = a.getData()) || void 0 === e ? void 0 : e.isLock;
if (T.default.isEffectiveNewTube() && !this.getNewTubeData()) {
d = !1;
h = [ -1, -1, -1, -1 ];
}
this.saveLockData({
data: h,
isLock: d
});
var p = this.getStackLockData();
p.push({
data: h,
isLock: d
});
this.saveStackLockData(p);
console.log("操作的锁试管数据为", JSON.stringify(p));
L.default.getInstance().notifyAfterPourSaved(this);
}
}
};
e.prototype.getGameNum = function() {
var t = cc.sys.localStorage.getItem("gl_GLWaterGameNum");
if (!t) return 0;
try {
return Number(JSON.parse(t));
} catch (t) {
return 0;
}
};
e.prototype.addGameNum = function() {
this._gameNum = this.getGameNum() + 1;
cc.sys.localStorage.setItem("gl_GLWaterGameNum", JSON.stringify(this._gameNum));
this.syncGameData();
};
e.prototype.test_guoGuan = function() {
GL.ResultTool.createResultView(null, 5, null, null, this.changeLevelID.bind(this), null, null, 2);
};
e.prototype.sendGameEndData = function(t) {
var e, n = this.getExtractData(), a = n ? n.fileName : "固定关", r = null == f ? void 0 : f.data, o = {
GameType: "15",
game_subtype: GL.ExtractTool.configKey.HsWaterSort + "" || "1",
gameid: i.Instance.getGameNum(),
ResultType: t,
level: this._levelID,
puzzle_name: a,
GameTime: (null === (e = null == r ? void 0 : r.totalTime) || void 0 === e ? void 0 : e.gl_watersort) || 0,
RealTime: _.GlWaterModel.getElapsedSeconds(),
free_hint: this._kuCun || 0,
ad_hit: this._LightKuCun,
hint_info: {
0: this._lockTimes,
1: this._lightTimes
}
}, s = GL.ExtractTool.getEndData("HsWaterSort", !0);
s && (o = l(l({}, o), s));
var c = y.default.getInstance().getLogEventData();
c && (o = l(l({}, o), c));
y.default.getInstance().recordRoundDataPreClear(s, y.default.getInstance().getOperationStepEventData(), y.default.getInstance().getSomeGamedata());
GL.Submit.sendGameEndData(o);
y.default.getInstance().resetData();
y.default.getInstance().resetSavedOperationSteps();
};
e.prototype.syncGameData = function() {
GL.Submit.sendGameDataChanged("gl_watersort", [ {
key: "GlWaterGuilde",
data: C.GlWaterSortScene.getInGuilde() ? 1 : 0
}, {
key: "GLWaterLevelId",
data: this.getLeveID()
}, {
key: "gl_GLWaterGameNum",
data: this.getGameNum()
}, {
key: "GLWaterUnlockNum",
data: this.getCanUnlockNum()
}, {
key: "GLWaterLightNum",
data: this.getLightNum()
}, {
key: "GLWaterRevertNum",
data: this.getRevertNum()
}, {
key: "GLWaterNewTubeAddNum",
data: this.getNewTubeAddNum()
}, {
key: "GLWaterMainData",
data: this.getData()
} ]);
};
e.prototype.sendGGameStartEvent = function(t, e, i, n) {
var a = {
game_type: "15",
game_subtype: String(e),
game_id: t,
resume_from_progress: i ? 1 : 0,
saved_operation_duration: i ? null == f ? void 0 : f.readCachedSavedOperationSeconds(String(e)) : 0,
saved_operation_steps: i && (null == n ? void 0 : n.saved_operation_steps) || 0,
saved_minigame_progress: i ? "half_complete" : ""
};
GL.Submit.sendGameData("g_game_usr_data_game_start", a);
};
e.prototype.countCompletedTubes = function() {
var t = 0;
this.itemArr.forEach(function(e) {
if (e && cc.isValid(e)) {
var i = e.getComponent(m.GLWaterItem);
i && i.checkIsFinish() && t++;
}
});
return t;
};
e.prototype.snapshotTubesCheckIsFinish = function() {
var t = [];
if (!this.itemArr) return t;
for (var e = 0; e < this.itemArr.length; e++) {
var i = this.itemArr[e];
if (i && cc.isValid(i)) {
var n = i.getComponent(m.GLWaterItem);
t.push(!(!n || !n.checkIsFinish()));
} else t.push(!1);
}
return t;
};
e.prototype.getTubeNodeByIndex = function(t) {
if (!this.itemArr || t < 0 || t >= this.itemArr.length) return null;
var e = this.itemArr[t];
return e && cc.isValid(e) ? e : null;
};
var i;
e.Instance = null;
c([ U([ cc.Node ]) ], e.prototype, "layoutArr", void 0);
c([ U([ cc.Node ]) ], e.prototype, "layoutMove", void 0);
c([ U(cc.Node) ], e.prototype, "moveParent", void 0);
c([ U(cc.Node) ], e.prototype, "btnUnlock", void 0);
c([ U(cc.Sprite) ], e.prototype, "spTube", void 0);
c([ U(sp.Skeleton) ], e.prototype, "skeleton", void 0);
c([ U(cc.Node) ], e.prototype, "lightConner", void 0);
c([ U(cc.Node) ], e.prototype, "revertConner", void 0);
c([ U(cc.Node) ], e.prototype, "newTubeConner", void 0);
c([ U(cc.Node) ], e.prototype, "revertTips", void 0);
c([ U(cc.Node) ], e.prototype, "loseTips", void 0);
return i = c([ F ], e);
}(cc.Component);
i.GlWaterMain = B;
window.test_guoGuan = function() {
B.Instance.test_guoGuan();
};
cc._RF.pop();
}, {
"../../gl_hall/gl_lang/config/GLLangKeyDefine": void 0,
"../../gl_hall/script/func/CampaignGuideMiniGameCtrl": void 0,
"../../gl_hall/script/traits/GLGameAdStrategyOptimizeTraitCtrl": void 0,
"./GLWaterDeadCheck": "GLWaterDeadCheck",
"./GLWaterFinishTipsCtrl": "GLWaterFinishTipsCtrl",
"./GLWaterItem": "GLWaterItem",
"./GLWaterRestartKeepExtraTubeCtrl": "GLWaterRestartKeepExtraTubeCtrl",
"./GLWaterRoundLogEventCtr": "GLWaterRoundLogEventCtr",
"./GLWaterSortEventTool": "GLWaterSortEventTool",
"./GLWaterSortFeat": "GLWaterSortFeat",
"./GLWaterSortScene": "GLWaterSortScene",
"./GLWaterSortTool": "GLWaterSortTool",
"./GlWaterModel": "GlWaterModel",
"./dynamicData/GLWaterLayout": "GLWaterLayout",
"./traits/GLWaterClickEmptyFastTraitCtrl": "GLWaterClickEmptyFastTraitCtrl",
"./traits/GLWaterDianzanEffectTraitCtrl": "GLWaterDianzanEffectTraitCtrl",
"./traits/GLWaterSkipLastStepTraitCtrl": "GLWaterSkipLastStepTraitCtrl",
"./traits/GLWaterSortChangeRegionAfterPutTraitCtrl": "GLWaterSortChangeRegionAfterPutTraitCtrl",
"./traits/GLWaterSortClickAgainSkipAnimationTraitCtrl": "GLWaterSortClickAgainSkipAnimationTraitCtrl",
"./traits/GLWaterSortNextSkipLastAnimationTraitCtrl": "GLWaterSortNextSkipLastAnimationTraitCtrl"
} ],
GlWaterModel: [ function(t, e, i) {
"use strict";
cc._RF.push(e, "01bfcglDDNE07lTZZ0D7dIq", "GlWaterModel");
var n;
Object.defineProperty(i, "__esModule", {
value: !0
});
i.GlWaterModel = i.GlWaterSortModel = void 0;
var a = t("../../gl_hall/script/func/experiment/GLShowInsertAdsBySecondsCtrl"), r = t("../../gl_hall/script/func/GLAdjustInsertByPlayTimeCtrl"), o = t("../../gl_hall/script/func/GLAdjustInsertShowTimesCtrl"), s = null === (n = null === window || void 0 === window ? void 0 : window._GLHallClassMap_) || void 0 === n ? void 0 : n.GLHallController, l = t("./GLWaterRoundLogEventCtr"), c = t("../../gl_hall/script/traits/GLGameAdStrategyOptimizeTraitCtrl"), u = t("./GlWaterMain"), h = function() {
function t() {
this.TIMER_STORAGE_KEY = "gl_water_sort_elapsed_time";
this._insertAdTime = null;
this._elapsedSeconds = 0;
this._timerInterval = null;
this._isTimerRunning = !1;
try {
this._elapsedSeconds = this.loadElapsedTime();
} catch (t) {
console.error("Failed to load elapsed time:", t);
this._elapsedSeconds = 0;
}
}
t.prototype.startTimer = function() {
var t = this;
try {
if (this._isTimerRunning) {
console.warn("Timer is already running, stopping previous timer first");
this.stopTimer();
}
this._elapsedSeconds = this.loadElapsedTime();
this._timerInterval = setInterval(function() {
try {
t._elapsedSeconds++;
t.saveElapsedTime();
} catch (t) {
console.error("Error in timer interval:", t);
}
}, 1e3);
this._isTimerRunning = !0;
} catch (t) {
console.error("Failed to start timer:", t);
this._isTimerRunning = !1;
}
};
t.prototype.stopTimer = function() {
try {
if (this._timerInterval) {
clearInterval(this._timerInterval);
this._timerInterval = null;
this.saveElapsedTime();
}
this._isTimerRunning = !1;
} catch (t) {
console.error("Failed to stop timer:", t);
}
};
t.prototype.getElapsedSeconds = function() {
try {
return this._elapsedSeconds || 0;
} catch (t) {
console.error("Failed to get elapsed seconds:", t);
return 0;
}
};
t.prototype.resetTimer = function() {
try {
this._elapsedSeconds = 0;
this.saveElapsedTime();
if (this._isTimerRunning) {
this.stopTimer();
this.startTimer();
}
} catch (t) {
console.error("Failed to reset timer:", t);
}
};
t.prototype.saveElapsedTime = function() {
try {
cc.sys.localStorage.setItem(this.TIMER_STORAGE_KEY, this._elapsedSeconds.toString());
} catch (t) {
console.error("Failed to save elapsed time:", t);
}
};
t.prototype.loadElapsedTime = function() {
try {
var t = cc.sys.localStorage.getItem(this.TIMER_STORAGE_KEY), e = t ? parseInt(t) : 0;
return isNaN(e) ? 0 : e;
} catch (t) {
console.error("Failed to load elapsed time:", t);
return 0;
}
};
t.prototype.dispose = function() {
try {
this.stopTimer();
this._elapsedSeconds = 0;
this._isTimerRunning = !1;
} catch (t) {
console.error("Failed to dispose timer:", t);
}
};
t.prototype.isRunning = function() {
return this._isTimerRunning;
};
t.prototype.showInstertAd = function(e, i, n) {
var l, h, d = this;
void 0 === e && (e = "");
void 0 === i && (i = -1);
void 0 === n && (n = !1);
if (c.default.getInstance().isOpen()) {
var p = n ? .5 : 1;
if ("end" != e || !c.default.getInstance().checkCanPlayAd(u.GlWaterMain.Instance.getLeveID() - p)) return;
}
var f = "前插屏";
"end" == e ? f = "后插屏" : "frontInsert" == e && (f = "前插屏");
var g = t.getAdSubmitdata(f, "INTER", i);
if (r.default.getInstance().isOpen()) "end" == e && r.default.getInstance().showInsertAds(g); else if (o.default.getInstance().isOpen()) {
if ("end" == e) {
o.default.getInstance().updateMiniGameSum();
o.default.getInstance().showInsertAds(g);
}
} else {
if (!this._insertAdTime) {
this._insertAdTime = null === (l = null == s ? void 0 : s.data) || void 0 === l ? void 0 : l.totalTime.gl_watersort;
return;
}
var v = 60;
a.default.getInstance().isOpen() && (v = 50);
if ((!c.default.getInstance().isOpen() || !c.default.getInstance().checkSkipGameOrigAdCD("gl_watersort")) && this._insertAdTime && (null === (h = null == s ? void 0 : s.data) || void 0 === h ? void 0 : h.totalTime.gl_watersort) - this._insertAdTime < v) return;
if (!cc.sys.localStorage.getItem("GlWaterGuilde")) return !1;
console.log("播放插屏广告");
GL.Ad.showInsertAd(function(t) {
t && 1 === (null == t ? void 0 : t.state) && d.initAdTime();
}, this, g);
}
};
t.prototype.initAdTime = function() {
var t;
this._insertAdTime && (this._insertAdTime = null === (t = null == s ? void 0 : s.data) || void 0 === t ? void 0 : t.totalTime.gl_watersort);
};
t.prototype.getStringData = function(t) {
switch (t) {
case "A":
return 10;

case "B":
return 11;

case "C":
return 12;

case "D":
return 13;

case "E":
return 14;

case "F":
return 15;
}
return t;
};
t.prototype.getABCStringByData = function(t) {
for (var e = 0; e < t.length; ++e) switch (t[e]) {
case "A":
t[e] = 10;

case "B":
t[e] = 11;

case "C":
t[e] = 12;

case "D":
t[e] = 13;

case "E":
t[e] = 14;

case "F":
t[e] = 15;
}
return t;
};
t.prototype.changeNumberByWaterData = function(t) {
for (var e = 0; e < t.length; ++e) switch (t[e]) {
case 10:
t[e] = "A";
break;

case 11:
t[e] = "B";
break;

case 12:
t[e] = "C";
break;

case 13:
t[e] = "D";
break;

case 14:
t[e] = "E";
break;

case 15:
t[e] = "F";
}
return t;
};
t.getAdSubmitdata = function(e, i, n) {
var a = {
game_subtype: t.game_subtype,
ad_position: e,
adFormat: i,
ResultType: n
};
if ("后插屏" == e && "INTER" == i) {
var r = l.default.getInstance().getRoundDataPreClear();
r && Object.assign(a, r);
return a;
}
var o = GL.ExtractTool.getEndData("HsWaterSort", !0);
o && Object.assign(a, o);
var s = l.default.getInstance().getOperationStepEventData();
s && Object.assign(a, s);
var c = l.default.getInstance().getSomeGamedata();
c && Object.assign(a, c);
return a;
};
t.game_subtype = 1;
return t;
}();
i.GlWaterSortModel = h;
i.GlWaterModel = new h();
cc._RF.pop();
}, {
"../../gl_hall/script/func/GLAdjustInsertByPlayTimeCtrl": void 0,
"../../gl_hall/script/func/GLAdjustInsertShowTimesCtrl": void 0,
"../../gl_hall/script/func/experiment/GLShowInsertAdsBySecondsCtrl": void 0,
"../../gl_hall/script/traits/GLGameAdStrategyOptimizeTraitCtrl": void 0,
"./GLWaterRoundLogEventCtr": "GLWaterRoundLogEventCtr",
"./GlWaterMain": "GlWaterMain"
} ]
}, {}, [ "GLWaterCanPutTips", "GLWaterDeadCheck", "GLWaterFinishTips", "GLWaterFinishTipsCtrl", "GLWaterHighLightTips", "GLWaterHighlightTipsEffectCtrl", "GLWaterItem", "GLWaterItemCorner", "GLWaterItemGouzi", "GLWaterItemGouziCtrl", "GLWaterRestartKeepExtraTubeCtrl", "GLWaterRoundLogEventCtr", "GLWaterSortClickSameOther", "GLWaterSortEventTool", "GLWaterSortFailUi", "GLWaterSortFeat", "GLWaterSortScene", "GLWaterSortTool", "GLWaterSortGMView", "GlWaterGuildeView", "GlWaterMain", "GlWaterModel", "GLWaterColor", "GLWaterLayout", "GLWaterClickEmptyFastTraitCtrl", "GLWaterDianzanEffectTraitCtrl", "GLWaterDieFirstUnlockAndTishiTraitCtrl", "GLWaterHighlightAllPipetteableTubesTrait", "GLWaterSkipLastStepTraitCtrl", "GLWaterSortAddDragRadio", "GLWaterSortChangeRegionAfterPutTraitCtrl", "GLWaterSortClickAgainSkipAnimationTraitCtrl", "GLWaterSortNextSkipLastAnimationTraitCtrl" ]);