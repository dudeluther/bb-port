window.__require = function t(e, i, r) {
function n(a, u) {
if (!i[a]) {
if (!e[a]) {
var s = a.split("/");
s = s[s.length - 1];
if (!e[s]) {
var l = "function" == typeof __require && __require;
if (!u && l) return l(s, !0);
if (o) return o(s, !0);
throw new Error("Cannot find module '" + a + "'");
}
a = s;
}
var c = i[a] = {
exports: {}
};
e[a][0].call(c.exports, function(t) {
return n(e[a][1][t] || t);
}, c, c.exports, t, e, i, r);
}
return i[a].exports;
}
for (var o = "function" == typeof __require && __require, a = 0; a < r.length; a++) n(r[a]);
return n;
}({
FruitAcceleratePreviousDropCtrl: [ function(t, e, i) {
"use strict";
cc._RF.push(e, "ee22ayp8HBGvY0nSpE41Tju", "FruitAcceleratePreviousDropCtrl");
Object.defineProperty(i, "__esModule", {
value: !0
});
var r = t("../FruitFeature"), n = function() {
function t() {
this._currentDroppingFruit = null;
}
t.getInstance = function() {
this._instance || (this._instance = new t());
return this._instance;
};
t.prototype.isOpen = function() {
return r.default.isOpen(r.FruitFeat.FruitAcceleratePreviousDrop);
};
t.prototype.getDropInterval = function(t, e) {
void 0 === e && (e = t);
return this.isOpen() ? r.default.getFeatureKeyParam(r.FruitFeat.FruitAcceleratePreviousDrop, "dropInterval", e) : t;
};
t.prototype.onBeforeDrop = function() {
this.isOpen() && this.acceleratePreviousDroppingFruit();
};
t.prototype.recordCurrentDroppingFruit = function(t) {
this.isOpen() ? this._currentDroppingFruit = t : this._currentDroppingFruit = null;
};
t.prototype.onUpdatePerSecond = function() {
this._currentDroppingFruit && (this.isFruitStillFalling(this._currentDroppingFruit) || (this._currentDroppingFruit = null));
};
t.prototype.clear = function() {
this._currentDroppingFruit = null;
};
t.prototype.isFruitStillFalling = function(t) {
if (!t || !t.isActiveState()) return !1;
var e = t.getItem();
if (!cc.isValid(e) || !cc.isValid(e.node)) return !1;
var i = e.getRigidbody();
if (!i || !i.active) return !1;
var r = i.linearVelocity;
return Math.sqrt(r.x * r.x + r.y * r.y) >= 10;
};
t.prototype.acceleratePreviousDroppingFruit = function() {
if (this._currentDroppingFruit) if (this.isFruitStillFalling(this._currentDroppingFruit)) {
var t = this._currentDroppingFruit.getItem();
if (cc.isValid(t) && cc.isValid(t.node)) {
var e = t.getRigidbody();
if (e && e.active) {
var i = r.default.getFeatureKeyParam(r.FruitFeat.FruitAcceleratePreviousDrop, "speedMultiplier", 2), n = e.linearVelocity, o = cc.v2(n.x, n.y * i);
e.linearVelocity = o;
console.log("FruitAcceleratePreviousDrop [加速下落] 加速上一个水果，速度倍数: " + i + ", 原速度: (" + n.x.toFixed(2) + ", " + n.y.toFixed(2) + "), 新速度: (" + o.x.toFixed(2) + ", " + o.y.toFixed(2) + ")");
} else this._currentDroppingFruit = null;
} else this._currentDroppingFruit = null;
} else this._currentDroppingFruit = null;
};
t._instance = null;
return t;
}();
i.default = n;
cc._RF.pop();
}, {
"../FruitFeature": "FruitFeature"
} ],
FruitAutoShakeOnDangerCtrl: [ function(t, e, i) {
"use strict";
cc._RF.push(e, "af358MhMdxAgZpbwk59hPAv", "FruitAutoShakeOnDangerCtrl");
Object.defineProperty(i, "__esModule", {
value: !0
});
var r = t("../FruitFeature"), n = t("../GLFruitApp"), o = function() {
function t() {}
t.getInstance = function() {
this._instance || (this._instance = new t());
return this._instance;
};
t.prototype.isOpen = function() {
return r.default.isOpen(r.FruitFeat.FruitAutoShakeOnDanger);
};
t.prototype.hasTriggered = function() {
var t, e, i, r;
return null !== (r = null === (i = null === (e = null === (t = n.default.user) || void 0 === t ? void 0 : t.getDataVo()) || void 0 === e ? void 0 : e.roundDataVo) || void 0 === i ? void 0 : i.hasTriggeredAutoShakeOnDanger) && void 0 !== r && r;
};
t.prototype.markTriggered = function() {
var t, e, i = null === (e = null === (t = n.default.user) || void 0 === t ? void 0 : t.getDataVo()) || void 0 === e ? void 0 : e.roundDataVo;
if (i) {
i.hasTriggeredAutoShakeOnDanger = !0;
n.default.user.saveData();
}
};
t.prototype.onDangerHint = function() {
if (this.isOpen() && !this.hasTriggered() && n.default.gameStateCtr.isPlaySatte() && !n.default.popupCtr.isShowPopup() && !n.default.propCtr.getIsUseingShakeProp()) {
this.markTriggered();
console.log("[FruitAutoShakeOnDanger] 首次危险提示，自动触发摇一摇（不消耗道具）");
n.default.propCtr.autoShakeWithoutCost();
}
};
t.prototype.clear = function() {};
t._instance = null;
return t;
}();
i.default = o;
cc._RF.pop();
}, {
"../FruitFeature": "FruitFeature",
"../GLFruitApp": "GLFruitApp"
} ],
FruitBigFruitMergeShakeCtrl: [ function(t, e, i) {
"use strict";
cc._RF.push(e, "0475bxRIAZBzqcpBMwZQ7K9", "FruitBigFruitMergeShakeCtrl");
var r = this && this.__values || function(t) {
var e = "function" == typeof Symbol && Symbol.iterator, i = e && t[e], r = 0;
if (i) return i.call(t);
if (t && "number" == typeof t.length) return {
next: function() {
t && r >= t.length && (t = void 0);
return {
value: t && t[r++],
done: !t
};
}
};
throw new TypeError(e ? "Object is not iterable." : "Symbol.iterator is not defined.");
};
Object.defineProperty(i, "__esModule", {
value: !0
});
var n = t("../FruitFeature"), o = t("../GLFruitApp"), a = function() {
function t() {
this._shakeBoxBgUuid = null;
this._shakeBoxBgOriginalPos = null;
this._shakeWallsOriginalPos = new Map();
this._bigFruitProbabilityMap = {
9: .3,
10: .5,
11: .7
};
}
t.getInstance = function() {
this._instance || (this._instance = new t());
return this._instance;
};
t.prototype.isOpen = function() {
return n.default.isOpen(n.FruitFeat.FruitBigFruitMergeShake);
};
t.prototype.tryShakeOnBigFruitMerge = function(t) {
if (this.isOpen()) if (o.default.gameStateCtr.isShakeSatte()) console.log("FruitBigFruitMergeShakeCtrl 使用晃动道具中，不做小幅晃动处理"); else {
var e = this._bigFruitProbabilityMap[t];
if (void 0 !== e) {
var i = Math.random();
console.log("FruitBigFruitMergeShakeCtrl random:" + i + " probability:" + e);
if (!(i >= e)) {
var r = o.default.gameStateCtr.getGameView();
r && cc.isValid(r) && this.shakeScreenSmall(r);
}
}
}
};
t.prototype.shakeScreenSmall = function(t) {
var e, i, n, o, a, u, s = null === (a = t.getNodeBoxBg) || void 0 === a ? void 0 : a.call(t), l = null === (u = t.getNodeWalls) || void 0 === u ? void 0 : u.call(t);
if (s && cc.isValid(s) && l && cc.isValid(l)) {
cc.Tween.stopAllByTarget(s);
try {
for (var c = r(l.children), d = c.next(); !d.done; d = c.next()) {
var p = d.value;
cc.isValid(p) && cc.Tween.stopAllByTarget(p);
}
} catch (t) {
e = {
error: t
};
} finally {
try {
d && !d.done && (i = c.return) && i.call(c);
} finally {
if (e) throw e.error;
}
}
this._ensureShakeLayoutOrigins(s, l);
for (var f = this._shakeBoxBgOriginalPos, h = this._shakeWallsOriginalPos, g = [ 50, 0, -50, 0, 50, 0 ], F = [ 0, 0, 5, -5, 5, 0 ], y = cc.tween(s), v = 0; v < g.length; v++) {
var m = 1 / 60 * (0 === v || v === g.length - 1 ? 20 : 15), _ = f.x + .9 * g[v], L = f.y, C = .9 * F[v];
y = y.to(m, {
position: cc.v3(_, L),
angle: C
});
}
y.to(1 / 60 * 20, {
position: f,
angle: 0
}).start();
try {
for (var S = r(l.children), G = S.next(); !G.done; G = S.next()) {
p = G.value;
if (cc.isValid(p)) {
var w = h.get(p);
if (w) {
var b = cc.tween(p);
for (v = 0; v < g.length; v++) {
m = 1 / 60 * (0 === v || v === g.length - 1 ? 20 : 15), _ = w.x + .9 * g[v], L = w.y, 
C = .9 * F[v];
b = b.to(m, {
position: cc.v3(_, L),
angle: C
});
}
b.to(1 / 60 * 20, {
position: w,
angle: 0
}).start();
}
}
}
} catch (t) {
n = {
error: t
};
} finally {
try {
G && !G.done && (o = S.return) && o.call(S);
} finally {
if (n) throw n.error;
}
}
}
};
t.prototype._ensureShakeLayoutOrigins = function(t, e) {
var i, n;
if (this._shakeBoxBgUuid !== t.uuid) {
this._shakeBoxBgUuid = t.uuid;
this._shakeBoxBgOriginalPos = t.position.clone();
this._shakeWallsOriginalPos.clear();
try {
for (var o = r(e.children), a = o.next(); !a.done; a = o.next()) {
var u = a.value;
cc.isValid(u) && this._shakeWallsOriginalPos.set(u, u.position.clone());
}
} catch (t) {
i = {
error: t
};
} finally {
try {
a && !a.done && (n = o.return) && n.call(o);
} finally {
if (i) throw i.error;
}
}
}
};
t._instance = null;
return t;
}();
i.default = a;
cc._RF.pop();
}, {
"../FruitFeature": "FruitFeature",
"../GLFruitApp": "GLFruitApp"
} ],
FruitComboSmallFruitExplodeCtrl: [ function(t, e, i) {
"use strict";
cc._RF.push(e, "fbf96u2FXFCp68uyx3x2kAk", "FruitComboSmallFruitExplodeCtrl");
var r = this && this.__values || function(t) {
var e = "function" == typeof Symbol && Symbol.iterator, i = e && t[e], r = 0;
if (i) return i.call(t);
if (t && "number" == typeof t.length) return {
next: function() {
t && r >= t.length && (t = void 0);
return {
value: t && t[r++],
done: !t
};
}
};
throw new TypeError(e ? "Object is not iterable." : "Symbol.iterator is not defined.");
};
Object.defineProperty(i, "__esModule", {
value: !0
});
var n = t("../FruitFeature"), o = t("../GLFruitApp"), a = t("../tools/GLFruitTools"), u = function() {
function t() {
this._explodeTimer = null;
this._pendingTurnCount = -1;
this._pendingExplodeCount = 0;
this._pendingNodeFruitRoot = null;
this._pendingFruits = null;
this._pendingRemoveFruit = null;
this._debugDrawNode = null;
this._explodedTurnCountMap = new Map();
}
t.getInstance = function() {
null == this._instance && (this._instance = new t());
return this._instance;
};
t.prototype.isOpen = function() {
return n.default.isOpen(n.FruitFeat.FruitComboSmallFruitExplode);
};
t.prototype.reset = function() {
this.clearExplodeTimer();
this._pendingTurnCount = -1;
this._pendingExplodeCount = 0;
this._pendingNodeFruitRoot = null;
this._pendingFruits = null;
this._pendingRemoveFruit = null;
this._explodedTurnCountMap.clear();
};
t.prototype.tryExplodeSmallFruitsOnCombo = function(t, e, i, r) {
if (this.isOpen()) {
var n = this.getExplodeCountByCombo(t);
console.log("[FruitComboSmallFruitExplodeCtrl] GLFruitMergerCtr的_turnMergerCountMap: " + JSON.stringify(o.default.mergerCtr.getTurnMergerCountMap()));
console.log("[FruitComboSmallFruitExplodeCtrl] GLFruitMergerCtr的_turnCount: " + o.default.mergerCtr.getTurnCount());
console.log("[FruitComboSmallFruitExplodeCtrl] explodeCount: " + n);
if (!(n <= 0)) {
var a = o.default.mergerCtr.getTurnCount();
if (null != this._explodeTimer) if (a === this._pendingTurnCount) {
this._pendingExplodeCount = Math.max(this._pendingExplodeCount, n);
this._pendingNodeFruitRoot = e;
this._pendingFruits = i;
this._pendingRemoveFruit = r;
} else {
this.flushPendingExplode();
this.startPendingTurn(a, n, e, i, r);
} else this.startPendingTurn(a, n, e, i, r);
}
}
};
t.prototype.startPendingTurn = function(e, i, r, n, o) {
var a = this;
this.clearExplodeTimer();
this._pendingTurnCount = e;
this._pendingExplodeCount = i;
this._pendingNodeFruitRoot = r;
this._pendingFruits = n;
this._pendingRemoveFruit = o;
this._explodeTimer = window.setTimeout(function() {
a.flushPendingExplode();
}, t.ExplodeMergeWindowMs);
};
t.prototype.flushPendingExplode = function() {
this.clearExplodeTimer();
this._pendingExplodeCount > 0 && this._pendingNodeFruitRoot && this._pendingFruits && this._pendingRemoveFruit && this.explodeSmallFruits(this._pendingTurnCount, this._pendingExplodeCount, this._pendingNodeFruitRoot, this._pendingFruits, this._pendingRemoveFruit);
this._pendingTurnCount = -1;
this._pendingExplodeCount = 0;
this._pendingNodeFruitRoot = null;
this._pendingFruits = null;
this._pendingRemoveFruit = null;
};
t.prototype.clearExplodeTimer = function() {
if (null != this._explodeTimer) {
window.clearTimeout(this._explodeTimer);
this._explodeTimer = null;
}
};
t.prototype.getExplodeCountByCombo = function(t) {
return t >= 14 ? 4 : t >= 10 ? 3 : t >= 7 ? 2 : t >= 5 ? 1 : 0;
};
t.prototype.explodeSmallFruits = function(t, e, i, n, u) {
var s, l;
if (i && 0 !== n.length) if (this._explodedTurnCountMap.has(t)) console.log("[FruitComboSmallFruitExplodeCtrl] turnCount=" + t + " 已执行过爆炸，跳过"); else {
this._explodedTurnCountMap.set(t, !0);
var c = this.getBottomSmallCandidateFruits(i, n);
console.log("[FruitComboSmallFruitExplodeCtrl] 爆炸数量 count: " + e + ", 候选水果数量: " + c.length);
var d = 0;
try {
for (var p = r(c), f = p.next(); !f.done; f = p.next()) {
var h = f.value;
if (d >= e) break;
var g = h.getItem().node.convertToWorldSpaceAR(cc.Vec3.ZERO), F = h.getId();
o.default.effectCtr.playMergeNewEffect(g, a.default.GetFruitMergerEffectNameById(F));
u(h);
d++;
}
} catch (t) {
s = {
error: t
};
} finally {
try {
f && !f.done && (l = p.return) && l.call(p);
} finally {
if (s) throw s.error;
}
}
}
};
t.prototype.getBottomSmallCandidateFruits = function(e, i) {
var n, o, a = e.parent.getChildByName("nodeBoxBg");
if (!a || !cc.isValid(a)) return [];
var u = a.getBoundingBoxToWorld(), s = u.height, l = u.yMin + s / 3;
this.drawBottomThirdArea(a, u, l);
var c = [];
try {
for (var d = r(i), p = d.next(); !p.done; p = d.next()) {
var f = p.value;
if (f && f.getItem() && cc.isValid(f.getItem().node) && t.SmallFruitIds.includes(f.getId())) {
var h = f.getItem().node.convertToWorldSpaceAR(cc.Vec3.ZERO), g = f.getRadius();
h.y + g < l && c.push(f);
}
}
} catch (t) {
n = {
error: t
};
} finally {
try {
p && !p.done && (o = d.return) && o.call(d);
} finally {
if (n) throw n.error;
}
}
c.sort(function(t, e) {
var i = t.getItem().node.convertToWorldSpaceAR(cc.Vec3.ZERO), r = e.getItem().node.convertToWorldSpaceAR(cc.Vec3.ZERO);
return i.y - r.y;
});
return c;
};
t.prototype.drawBottomThirdArea = function() {};
t._instance = null;
t.SmallFruitIds = [ 1, 2, 3 ];
t.ExplodeMergeWindowMs = 400;
t.DebugDrawNodeName = "FruitComboSmallFruitExplodeDebugArea";
return t;
}();
i.default = u;
cc._RF.pop();
}, {
"../FruitFeature": "FruitFeature",
"../GLFruitApp": "GLFruitApp",
"../tools/GLFruitTools": "GLFruitTools"
} ],
FruitDeadEndShakePopupCtrl: [ function(t, e, i) {
"use strict";
cc._RF.push(e, "9adacRixapJhLMWzcQwW/lb", "FruitDeadEndShakePopupCtrl");
Object.defineProperty(i, "__esModule", {
value: !0
});
var r = t("../defines/GLFruitDefine"), n = t("../FruitFeature"), o = t("../GLFruitApp"), a = t("../GLFruitRoundLogEventCtr"), u = function() {
function t() {
this._shownPopupFruitSet = new Set();
}
t.getInstance = function() {
this._instance || (this._instance = new t());
return this._instance;
};
t.prototype.isOpen = function() {
return n.default.isOpen(n.FruitFeat.FruitDeadEndShakePopup);
};
t.prototype.tryShowDeadEndShakePopup = function(t) {
if (!t || !this.isOpen()) return !1;
if (!o.default.gameStateCtr.isPlaySatte() || o.default.popupCtr.isShowPopup()) return !1;
if (this._shownPopupFruitSet.has(t)) return !1;
this._shownPopupFruitSet.add(t);
this.showDeadEndShakePopup();
return !0;
};
t.prototype.onFruitOutDeadEndZone = function(t) {
t && this._shownPopupFruitSet.delete(t);
};
t.prototype.onFruitRemoved = function(t) {
t && this._shownPopupFruitSet.delete(t);
};
t.prototype.testDeadEndShakePopup = function() {
if (this.isOpen()) if (o.default.gameStateCtr.isPlaySatte()) if (o.default.popupCtr.isShowPopup()) console.log("[测试] 已有弹窗显示中，无法触发死局弹窗"); else {
console.log("[测试] 触发死局弹窗测试");
this.showDeadEndShakePopup();
} else console.log("[测试] 游戏未在游玩状态，无法触发死局弹窗"); else console.log("[测试] 死局弹窗特性未开启，请先开启 FruitDeadEndShakePopup 特性");
};
t.prototype.clear = function() {
this._shownPopupFruitSet.clear();
};
t.prototype.showDeadEndShakePopup = function() {
var t = o.default.propCtr.getProp(r.GLFruitPropIdDefine.Shake), e = t.getNum();
o.default.popupCtr.showShakePop(function() {
var i = e <= 0;
t.addUsageNum(1);
o.default.roundCtr.useProp(t.getId(), i);
a.default.getInstance().useItem(t.getId(), i);
o.default.user.saveData();
o.default.gameStateCtr.runShakeState();
o.default.gameStateCtr.setShakeStateFromAd(i);
}, function() {
o.default.gameStateCtr.runFailState();
}, function() {
o.default.gameStateCtr.runFailState();
});
};
t._instance = null;
return t;
}();
i.default = u;
cc._RF.pop();
}, {
"../FruitFeature": "FruitFeature",
"../GLFruitApp": "GLFruitApp",
"../GLFruitRoundLogEventCtr": "GLFruitRoundLogEventCtr",
"../defines/GLFruitDefine": "GLFruitDefine"
} ],
FruitEventCenter: [ function(t, e, i) {
"use strict";
cc._RF.push(e, "86756PlTKNOr6/ZduxE1PPj", "FruitEventCenter");
Object.defineProperty(i, "__esModule", {
value: !0
});
i.FruitEventCenter = i.FruitEventType = void 0;
(function(t) {
t.ShowSameFruit = "ShowSameFruit";
t.HideSameFruit = "HideSameFruit";
t.ShowSameFruitByMerge = "ShowSameFruitByMerge";
t.FruitSpecialColliderRuleStart = "FruitSpecialColliderRuleStart";
t.FruitSpecialColliderRuleEnd = "FruitSpecialColliderRuleEnd";
})(i.FruitEventType || (i.FruitEventType = {}));
var r = function() {
function t() {}
t.addListener = function(t, e, i) {
null == this.event[t] && (this.event[t] = []);
for (var r = 0; r < this.event[t].length; r++) {
var n = this.event[t][r];
if (i == n.target && e.toString() == n.callback.toString()) return;
}
this.event[t].push({
callback: e,
target: i
});
};
t.removeListener = function(t, e, i) {
var r = this.event[t];
if (r) for (var n = r.length - 1; n >= 0; n--) {
var o = r[n];
i == o.target && e.toString() == o.callback.toString() && this.event[t].splice(n, 1);
}
};
t.removeListenerByTarget = function(t) {
for (var e in this.event) if (this.event.hasOwnProperty(e)) for (var i = this.event[e], r = 0; r < i.length; r++) i[r].target == t && i.splice(r, 1);
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
if (i) for (var r = 0; r < i.length; r++) {
var n = i[r];
n.callback.call(n.target, e);
}
}
};
t.event = {};
return t;
}();
i.FruitEventCenter = r;
cc._RF.pop();
}, {} ],
FruitFeature: [ function(t, e, i) {
"use strict";
cc._RF.push(e, "85121Oig7BFh6BnG0pkbha0", "FruitFeature");
Object.defineProperty(i, "__esModule", {
value: !0
});
i.tryShakeAmplitudeVibrationFruit = i.tryShakeVibrationFruit = i.isOpenVibrationProjectFruit = i.FruitFeat = void 0;
(function(t) {
t.FruitLongPressCancelDrop = "FruitLongPressCancelDrop";
t.FruitGuideKeepFirstFruit = "FruitGuideKeepFirstFruit";
t.FruitDisableClickDropSound = "FruitDisableClickDropSound";
t.FruitFailOnAnyOutBound = "FruitFailOnAnyOutBound";
t.FruitSpecialColliderRule = "FruitSpecialColliderRule";
t.FruitEnhancedCollisionBounce = "FruitEnhancedCollisionBounce";
t.FruitEarlyDropSpeedBoost = "FruitEarlyDropSpeedBoost";
t.FruitNewComboEffect = "FruitNewComboEffect";
t.FruitHideBottomFruit = "FruitHideBottomFruit";
t.FruitSameFruitTips = "FruitSameFruitTips";
t.GLFruitHaveFruitStart = "GLFruitHaveFruitStart";
t.FruitComboSmallFruitExplode = "FruitComboSmallFruitExplode";
t.GLFruitTwoFruitOnce = "GLFruitTwoFruitOnce";
t.FruitPreviewPlace = "FruitPreviewPlace";
t.FruitLongPressQuickStack = "FruitLongPressQuickStack";
t.FruitFullScreenAcc = "FruitFullScreenAcc";
t.FruitShadowTips = "FruitShadowTips";
t.FruitLongPressAcc = "FruitLongPressAcc";
t.FruitBigFruitMergeShake = "FruitBigFruitMergeShake";
t.FruitUsePropNoDie = "FruitUsePropNoDie";
t.FruitDeathReviveShake = "FruitDeathReviveShake";
t.FruitGongzheng = "FruitGongzheng";
t.FruitRelaxedComboBreak = "FruitRelaxedComboBreak";
t.FruitMergeDistanceRelaxed = "FruitMergeDistanceRelaxed";
t.FruitAcceleratePreviousDrop = "FruitAcceleratePreviousDrop";
t.FruitNoDropInterval = "FruitNoDropInterval";
t.FruitSmallToBigReplacement = "FruitSmallToBigReplacement";
t.FruitDeadEndShakePopup = "FruitDeadEndShakePopup";
t.GLFruitDeadCheckOptimize = "GLFruitDeadCheckOptimize";
t.FruitShakeRandomDirection = "FruitShakeRandomDirection";
t.FruitMergeShake = "FruitMergeShake";
t.FruitWannengFruit = "FruitWannengFruit";
t.FruitCanChange = "FruitCanChange";
t.FruitMagneticAttraction = "FruitMagneticAttraction";
t.GLFruitShowShakeResultEncourage = "GLFruitShowShakeResultEncourage";
t.GLFruitGMTool = "GLFruitGMTool";
t.FruitAutoShakeOnWatermelon = "FruitAutoShakeOnWatermelon";
t.FruitAutoShakeOnDanger = "FruitAutoShakeOnDanger";
t.FruitWatermelonAddFruit = "FruitWatermelonAddFruit";
t.FruitBoxHeightAdapt = "FruitBoxHeightAdapt";
t.FruitNewSettleView = "FruitNewSettleView";
t.FruitMergeScoreFly = "FruitMergeScoreFly";
t.FruitFailRevivePopup = "FruitFailRevivePopup";
})(i.FruitFeat || (i.FruitFeat = {}));
var r = "VibrationProjectFruitGp";
function n() {
var t;
return (null === (t = null === GL || void 0 === GL ? void 0 : GL.Game) || void 0 === t ? void 0 : t.isTraitActive(r)) && cc.sys.os != cc.sys.OS_IOS;
}
i.isOpenVibrationProjectFruit = n;
i.tryShakeVibrationFruit = function(t) {
if (n()) {
console.log("[VibrationProjectFruitGp] 触发震动 " + t);
GL.Game.shakeByProp(r, t);
}
};
i.tryShakeAmplitudeVibrationFruit = function(t) {
if (n()) {
console.log("[VibrationProjectFruitGp] 触发振屏 " + t);
GL.Game.shakeAmplitudeByProp(r, t);
}
};
var o = function() {
function t() {}
t.isOpen = function(t) {
return GL.Game.IsFeatureOpen(t);
};
t.getFeatureKeyParam = function(t, e, i) {
void 0 === i && (i = null);
var r = GL.Game.getFeatureKeyParam(t, e);
return null != r ? r : i;
};
return t;
}();
i.default = o;
cc._RF.pop();
}, {} ],
FruitFullScreenAccCtrl: [ function(t, e, i) {
"use strict";
cc._RF.push(e, "f2bf6WINz1PJax71fYJ5n+y", "FruitFullScreenAccCtrl");
Object.defineProperty(i, "__esModule", {
value: !0
});
var r = t("../FruitFeature"), n = "[FruitFullScreenAcc]", o = function() {
function t() {
this._hasAcceleratedBefore = !1;
}
Object.defineProperty(t, "inst", {
get: function() {
this._instance || (this._instance = new t());
return this._instance;
},
enumerable: !1,
configurable: !0
});
t.prototype.isOpen = function() {
return r.default.isOpen(r.FruitFeat.FruitFullScreenAcc);
};
t.prototype.isFullScreenAnimation = function(t) {
return "WatermelonPanel" === t || "BoardFullPanel" === t || "juzhongdianzan" === t;
};
t.prototype.applyInitialSpeed = function(t, e) {
if (this.isOpen()) if (cc.isValid(e)) if (this.isFullScreenAnimation(t)) {
e.timeScale = this._hasAcceleratedBefore ? 2 : 1;
console.log(n + " applyInitialSpeed设置成功", {
effectName: t,
timeScale: e.timeScale,
hasAcceleratedBefore: this._hasAcceleratedBefore
});
} else e.timeScale = 1; else console.warn(n + " applyInitialSpeed跳过：skeleton无效", {
effectName: t
});
};
t.prototype.setupClick = function(t, e) {
var i = this;
if (this.isOpen()) if (cc.isValid(t)) {
var o = t.getComponent(sp.Skeleton);
o || (o = t.getComponentInChildren(sp.Skeleton));
if (cc.isValid(o)) {
var a = r.default.getFeatureKeyParam(r.FruitFeat.FruitFullScreenAcc, "maxSpeedMultiplier", 16), u = r.default.getFeatureKeyParam(r.FruitFeat.FruitFullScreenAcc, "maxClickCount", 4), s = this._hasAcceleratedBefore ? 2 : 1, l = this._hasAcceleratedBefore ? 1 : 0;
o.timeScale = s;
var c = l, d = s, p = !1;
this._hasAcceleratedBefore && console.log(n + " 玩家历史已加速，本次从2倍速开始", {
timestamp: Date.now(),
animationType: e
});
var f = function() {
if (c >= u) console.log(n + " 已达到最大加速倍率，无法继续加速", {
maxSpeedMultiplier: a,
clickCount: c,
animationType: e
}); else {
c++;
d = Math.min(Math.pow(2, c), a);
p = !0;
i._hasAcceleratedBefore = !0;
var r = t._fullScreenAccData;
if (r) {
r.hasTriggeredAcceleration = p;
r.clickCount = c;
r.currentSpeedMultiplier = d;
}
if (cc.isValid(o)) {
o.timeScale = d;
console.log(n + " 全屏动画加速成功", {
timestamp: Date.now(),
animationType: e,
clickCount: c,
currentSpeedMultiplier: d
});
}
}
}, h = function(t) {
t.stopPropagation();
console.log(n + " 全屏动画点击结束", {
timestamp: Date.now(),
animationType: e,
touchPosition: t.getLocation()
});
f();
}, g = t.getComponent(cc.BlockInputEvents);
g || (g = t.addComponent(cc.BlockInputEvents));
t.targetOff(this);
t.on(cc.Node.EventType.TOUCH_START, function(t) {
t.stopPropagation();
console.log(n + " 全屏动画点击开始", {
timestamp: Date.now(),
animationType: e,
touchPosition: t.getLocation()
});
}, this, !0);
t.on(cc.Node.EventType.TOUCH_END, h, this, !0);
t.on(cc.Node.EventType.TOUCH_CANCEL, h, this, !0);
var F = cc.view.getVisibleSize();
if (t.getContentSize().width < F.width || t.getContentSize().height < F.height) {
t.setContentSize(F.width, F.height);
console.log(n + " nodeEffect尺寸扩展到全屏", {
animationType: e,
width: F.width,
height: F.height
});
}
t._fullScreenAccData = {
hasTriggeredAcceleration: !1,
clickCount: l,
currentSpeedMultiplier: s,
initialSpeedMultiplier: s,
initialClickCount: l,
animationType: e
};
console.log(n + " setupClick初始化完成", {
animationType: e,
maxSpeedMultiplier: a,
maxClickCount: u,
initialSpeedMultiplier: s,
initialClickCount: l
});
} else console.warn(n + " setupClick跳过：未找到Spine组件", {
animationType: e
});
} else console.warn(n + " setupClick跳过：nodeEffect无效", {
animationType: e
});
};
t.prototype.reportAndClear = function(t) {
if (this.isOpen()) if (cc.isValid(t)) {
t.targetOff(this);
delete t._fullScreenAccData;
} else console.warn(n + " reportAndClear跳过：effectNode无效");
};
t._instance = null;
return t;
}();
i.default = o;
cc._RF.pop();
}, {
"../FruitFeature": "FruitFeature"
} ],
FruitLongPressAccCtrl: [ function(t, e, i) {
"use strict";
cc._RF.push(e, "78353T9K2tDXZsuNuvTtuNq", "FruitLongPressAccCtrl");
Object.defineProperty(i, "__esModule", {
value: !0
});
var r = t("./FruitFeature"), n = t("./ui/GLFruitLongPressAcc"), o = function() {
function t() {}
t.getInstance = function() {
t._instance || (t._instance = new t());
return t._instance;
};
t.prototype.isOpen = function() {
return r.default.isOpen(r.FruitFeat.FruitLongPressAcc);
};
t.prototype.getConfiguredAccelerationMultiplier = function(t) {
void 0 === t && (t = 2);
return this.isOpen() ? r.default.getFeatureKeyParam(r.FruitFeat.FruitLongPressAcc, "speedMultiplier", t) : 1;
};
t.prototype.isLongPressing = function() {
return !!this.isOpen() && !!(n.default && n.default.isLongPressing && n.default.isLongPressing());
};
t.prototype.getRuntimeAccelerationMultiplier = function(t) {
void 0 === t && (t = 2);
return this.isOpen() ? n.default && n.default.getAccelerationMultiplier ? n.default.getAccelerationMultiplier() : this.getConfiguredAccelerationMultiplier(t) : 1;
};
t.prototype.applyAccelerationToDropVelocity = function(t, e) {
if (!this.isOpen()) return t;
console.log("[FruitLongPressAcc] 特性已开启 - 水果ID: " + e + "，检查长按状态");
if (!this.isLongPressing()) {
console.log("[FruitLongPressAcc] 特性已开启但未在长按状态 - 水果ID: " + e + "，使用正常速度: " + t.toFixed(2));
return t;
}
var i = this.getRuntimeAccelerationMultiplier(), r = t * i;
console.log("[FruitLongPressAcc] 长按加速已应用 - 水果ID: " + e + "，加速倍数: " + i + "，加速前速度: " + t.toFixed(2) + "，加速后速度: " + r.toFixed(2));
return r;
};
t.prototype.initComponent = function(t) {
if (this.isOpen()) if (t && cc.isValid(t)) {
var e = t.getComponent(n.default);
e || (e = t.addComponent(n.default)) || console.error("[FruitLongPressAccCtrl] 添加GLFruitLongPressAcc组件失败");
} else console.warn("[FruitLongPressAccCtrl] hostNode无效，无法初始化GLFruitLongPressAcc组件");
};
t._instance = null;
return t;
}();
i.default = o;
cc._RF.pop();
}, {
"./FruitFeature": "FruitFeature",
"./ui/GLFruitLongPressAcc": "GLFruitLongPressAcc"
} ],
FruitLongPressQuickStackCtrl: [ function(t, e, i) {
"use strict";
cc._RF.push(e, "914135NmZlF76ask4TCQUhf", "FruitLongPressQuickStackCtrl");
Object.defineProperty(i, "__esModule", {
value: !0
});
var r = t("../FruitFeature"), n = t("../GLFruitApp"), o = t("../defines/GLFruitDefine"), a = function() {
function t() {
this._longPressTimer = null;
this._quickStackTimer = null;
this._isQuickStacking = !1;
this._touchStartTime = 0;
this._touchStartPos = null;
this._hasDroppedFirstFruit = !1;
}
t.getInstance = function() {
null == this._instance && (this._instance = new t());
return this._instance;
};
t.prototype.isOpen = function() {
return r.default.isOpen(r.FruitFeat.FruitLongPressQuickStack);
};
t.prototype.isQuickStacking = function() {
return this._isQuickStacking;
};
t.prototype.onPointerDown = function(e, i) {
this._touchStartTime = Date.now();
this._touchStartPos = e.clone();
this._isQuickStacking = !1;
this._hasDroppedFirstFruit = !1;
i();
this._hasDroppedFirstFruit = !0;
console.log(t.LOG_PREFIX + " onPointerDown pos=(" + e.x.toFixed(2) + "," + e.y.toFixed(2) + ") 首颗已掉落 threshold=" + o.GLFruitDefine.LongPressQuickStackThreshold + "ms");
this.startLongPressDetection(i);
};
t.prototype.onPointerUp = function(e) {
var i = this._isQuickStacking, r = this._touchStartTime > 0 ? Date.now() - this._touchStartTime : 0, n = !1;
this.stopQuickStack();
if (!this._hasDroppedFirstFruit) {
n = !0;
e();
}
console.log(t.LOG_PREFIX + " onPointerUp holdMs=" + r + " wasQuickStacking=" + i + " supplementDrop=" + n);
this.resetTouchState();
};
t.prototype.onPointerMove = function(t) {
this._isQuickStacking && this._touchStartPos && (this._touchStartPos = t.clone());
};
t.prototype.clear = function() {
console.log(t.LOG_PREFIX + " clear");
this.stopQuickStack();
this.resetTouchState();
};
t.prototype.startLongPressDetection = function(e) {
var i = this;
if (this._longPressTimer) {
n.default.timeCtr.removeByTimer(this._longPressTimer);
this._longPressTimer = null;
}
var r = o.GLFruitDefine.LongPressQuickStackThreshold;
console.log(t.LOG_PREFIX + " startLongPressDetection delayMs=" + r);
this._longPressTimer = n.default.timeCtr.addOnce(r / 1e3, function() {
if (i._touchStartTime > 0 && !i._isQuickStacking) {
console.log(t.LOG_PREFIX + " longPress 达成，进入连点");
i.startQuickStack(e);
}
i._longPressTimer = null;
});
};
t.prototype.startQuickStack = function(e) {
var i = this;
if (!this._isQuickStacking) {
this._isQuickStacking = !0;
console.log(t.LOG_PREFIX + " startQuickStack intervalMs=" + o.GLFruitDefine.QuickStackDropInterval);
if (this._quickStackTimer) {
n.default.timeCtr.removeByTimer(this._quickStackTimer);
this._quickStackTimer = null;
}
var r = o.GLFruitDefine.QuickStackDropInterval / 1e3;
this._quickStackTimer = n.default.timeCtr.add(r, function() {
i._touchStartTime > 0 && i._isQuickStacking ? e() : i.stopQuickStack();
});
}
};
t.prototype.stopQuickStack = function() {
var e = this._isQuickStacking;
this._isQuickStacking = !1;
if (this._longPressTimer) {
n.default.timeCtr.removeByTimer(this._longPressTimer);
this._longPressTimer = null;
}
if (this._quickStackTimer) {
n.default.timeCtr.removeByTimer(this._quickStackTimer);
this._quickStackTimer = null;
}
e && console.log(t.LOG_PREFIX + " stopQuickStack 连点结束");
};
t.prototype.resetTouchState = function() {
this._touchStartTime = 0;
this._touchStartPos = null;
this._hasDroppedFirstFruit = !1;
};
t.LOG_PREFIX = "[FruitLongPressQuickStack]";
t._instance = null;
return t;
}();
i.default = a;
cc._RF.pop();
}, {
"../FruitFeature": "FruitFeature",
"../GLFruitApp": "GLFruitApp",
"../defines/GLFruitDefine": "GLFruitDefine"
} ],
FruitMergeDistanceRelaxedCtrl: [ function(t, e, i) {
"use strict";
cc._RF.push(e, "2aea31obI5Jvb4ZhqBkDZNa", "FruitMergeDistanceRelaxedCtrl");
Object.defineProperty(i, "__esModule", {
value: !0
});
var r = t("./FruitFeature"), n = function() {
function t() {}
t.getInstance = function() {
null == this._instance && (this._instance = new t());
return this._instance;
};
t.prototype.isOpen = function() {
return r.default.isOpen(r.FruitFeat.FruitMergeDistanceRelaxed);
};
t.prototype.getRelaxedRadius = function(e, i) {
if (!this.isOpen()) return e;
var n = e + r.default.getFeatureKeyParam(r.FruitFeat.FruitMergeDistanceRelaxed, "distanceParam", t.DefaultDistanceParam) * i / 2;
console.log("[FruitMergeDistanceRelaxedCtrl] 原始半径: " + e + ", 修改后半径: " + n);
return n;
};
t.prototype.setupColliders = function(e, i, r, n, o) {
if (!this.isOpen()) {
r && (r.enabled = !1);
return r;
}
i.tag = t.PhysicsColliderTag;
var a = r;
a || (a = e.addComponent(cc.PhysicsCircleCollider));
a.radius = this.getRelaxedRadius(n, o);
a.sensor = !0;
a.enabled = !0;
a.tag = t.DetectColliderTag;
a.apply();
return a;
};
t.prototype.updateColliderEnabled = function(t, e, i) {
if (this.isOpen()) {
t && (t.enabled = i);
e && (e.enabled = i);
} else e && (e.enabled = !1);
};
t.prototype.isRelaxedDetectPair = function(e, i) {
return e.tag == t.DetectColliderTag && i.tag == t.DetectColliderTag;
};
t.prototype.isPhysicsPair = function(e, i) {
return e.tag == t.PhysicsColliderTag && i.tag == t.PhysicsColliderTag;
};
t._instance = null;
t.DefaultDistanceParam = .5;
t.PhysicsColliderTag = 1;
t.DetectColliderTag = 2;
return t;
}();
i.default = n;
cc._RF.pop();
}, {
"./FruitFeature": "FruitFeature"
} ],
FruitMergeShakeCtrl: [ function(t, e, i) {
"use strict";
cc._RF.push(e, "a8f3cLhm01Paox+HS4/Slts", "FruitMergeShakeCtrl");
var r = this && this.__read || function(t, e) {
var i = "function" == typeof Symbol && t[Symbol.iterator];
if (!i) return t;
var r, n, o = i.call(t), a = [];
try {
for (;(void 0 === e || e-- > 0) && !(r = o.next()).done; ) a.push(r.value);
} catch (t) {
n = {
error: t
};
} finally {
try {
r && !r.done && (i = o.return) && i.call(o);
} finally {
if (n) throw n.error;
}
}
return a;
};
Object.defineProperty(i, "__esModule", {
value: !0
});
var n = t("../FruitFeature"), o = t("../GLFruitApp"), a = function() {
function t() {}
t.getInstance = function() {
this._instance || (this._instance = new t());
return this._instance;
};
t.prototype.isOpen = function() {
return n.default.isOpen(n.FruitFeat.FruitMergeShake);
};
t.prototype.tryShakeOnMerge = function(e) {
if (this.isOpen()) {
var i = this.getShakeLevelByFruitId(e);
if (i <= 0) console.log(t.LOG_PREFIX + " 无需震屏 fruitId=" + e + " shakeLevel=" + i); else {
var r = o.default.gameStateCtr.getGameView();
if (r && r.node && cc.isValid(r.node)) {
console.log(t.LOG_PREFIX + " 触发震屏 fruitId=" + e + " shakeLevel=" + i);
this.shakeScreenByLevel(r.node, i);
} else console.log(t.LOG_PREFIX + " gameView 无效，跳过震屏 fruitId=" + e + " shakeLevel=" + i);
}
}
};
t.prototype.getShakeLevelByFruitId = function(t) {
return t >= 2 && t <= 4 ? 1 : t >= 5 && t <= 7 ? 2 : t >= 8 && t <= 9 ? 3 : t >= 10 && t <= 11 ? 4 : 12 === t ? 5 : 0;
};
t.prototype.shakeScreenByLevel = function(e, i) {
if (e && cc.isValid(e)) {
cc.Tween.stopAllByTarget(e);
var n = cc.Vec3.ZERO;
e.position = n;
var o = {
1: [ [ 0, 0, 0 ], [ .033, 4.81, 2.3 ], [ .1, 4.5, 8.3 ], [ .166, 2.7, 3.2 ], [ .266, 0, 0 ] ],
2: [ [ 0, 0, 0 ], [ .033, 12.3, -9.8 ], [ .1, -6.8, 12.9 ], [ .2, 14.4, 3.6 ], [ .3, 0, 0 ] ],
3: [ [ 0, 0, 0 ], [ .033, 13.3, -1.1 ], [ .1, -10, 27 ], [ .166, 24, -8 ], [ .233, -20, -3 ], [ .3, -.29, 12 ], [ .4, 0, 0 ] ],
4: [ [ 0, 0, 0 ], [ .033, 17.3, -1.1 ], [ .066, -14, 30 ], [ .133, 24, -8 ], [ .2, -34, -7 ], [ .266, 16, 28 ], [ .366, -17, -14 ], [ .466, 0, 0 ] ],
5: [ [ 0, 0, 0 ], [ .033, 17.3, -14 ], [ .066, -19, 32 ], [ .133, 32, -.63 ], [ .2, -39, -9 ], [ .266, 26, 38 ], [ .366, -24, -21 ], [ .466, 2, 9.67 ], [ .566, 0, 0 ] ]
}[i];
if (o && 0 !== o.length) {
console.log(t.LOG_PREFIX + " 开始震屏动画 level=" + i + " keyFrameCount=" + o.length);
for (var a = cc.tween(e), u = 1; u < o.length; u++) {
var s = r(o[u], 3), l = s[0], c = s[1], d = s[2], p = l - r(o[u - 1], 1)[0], f = cc.v3(n.x + c, n.y + d, n.z);
a = a.to(p, {
position: f
});
}
a.start();
} else console.log(t.LOG_PREFIX + " 无关键帧配置 level=" + i);
} else console.log(t.LOG_PREFIX + " shakeNode 无效，取消震屏 level=" + i);
};
t.LOG_PREFIX = "[FruitMergeShakeCtrl]";
t._instance = null;
return t;
}();
i.default = a;
cc._RF.pop();
}, {
"../FruitFeature": "FruitFeature",
"../GLFruitApp": "GLFruitApp"
} ],
FruitNoDropIntervalCtrl: [ function(t, e, i) {
"use strict";
cc._RF.push(e, "47cf1j1vI9IXoo96yBOZeyH", "FruitNoDropIntervalCtrl");
Object.defineProperty(i, "__esModule", {
value: !0
});
var r = t("../FruitFeature"), n = function() {
function t() {}
t.ins = function() {
this._instance || (this._instance = new t());
return this._instance;
};
t.prototype.isOpen = function() {
return r.default.isOpen(r.FruitFeat.FruitNoDropInterval);
};
t.prototype.changeInterval = function(t) {
return this.isOpen() ? 0 : t;
};
t._instance = null;
return t;
}();
i.default = n;
cc._RF.pop();
}, {
"../FruitFeature": "FruitFeature"
} ],
FruitRelaxedComboBreakCtrl: [ function(t, e, i) {
"use strict";
cc._RF.push(e, "c4a918ujTBLfpwaL15tiwo8", "FruitRelaxedComboBreakCtrl");
var r = this && this.__values || function(t) {
var e = "function" == typeof Symbol && Symbol.iterator, i = e && t[e], r = 0;
if (i) return i.call(t);
if (t && "number" == typeof t.length) return {
next: function() {
t && r >= t.length && (t = void 0);
return {
value: t && t[r++],
done: !t
};
}
};
throw new TypeError(e ? "Object is not iterable." : "Symbol.iterator is not defined.");
};
Object.defineProperty(i, "__esModule", {
value: !0
});
var n = t("../FruitFeature"), o = function() {
function t() {
this._noMergeDropCount = 0;
}
t.getInstance = function() {
null == t._instance && (t._instance = new t());
return t._instance;
};
t.prototype.isOpen = function() {
return n.default.isOpen(n.FruitFeat.FruitRelaxedComboBreak);
};
t.prototype.onMergeRecorded = function() {
this.isOpen() && (this._noMergeDropCount = 0);
};
t.prototype.afterDropTryBreakCombo = function(e, i) {
var n, o;
if (!this.isOpen()) return !1;
if (i[e - 1]) this._noMergeDropCount = 0; else {
this._noMergeDropCount++;
if (this._noMergeDropCount >= t.CONSECUTIVE_NO_MERGE_TO_BREAK) {
console.log(t.LOG_PREFIX + " 达到阈值，清空 turnMergerCountMap 并触发断连击 turn=" + e);
try {
for (var a = r(Object.keys(i)), u = a.next(); !u.done; u = a.next()) {
var s = u.value;
delete i[Number(s)];
}
} catch (t) {
n = {
error: t
};
} finally {
try {
u && !u.done && (o = a.return) && o.call(a);
} finally {
if (n) throw n.error;
}
}
this._noMergeDropCount = 0;
return !0;
}
}
return !1;
};
t.prototype.reset = function() {
this._noMergeDropCount = 0;
};
t.LOG_PREFIX = "[FruitRelaxedComboBreak]";
t._instance = null;
t.CONSECUTIVE_NO_MERGE_TO_BREAK = 3;
return t;
}();
i.default = o;
cc._RF.pop();
}, {
"../FruitFeature": "FruitFeature"
} ],
FruitShakeRandomDirectionCtrl: [ function(t, e, i) {
"use strict";
cc._RF.push(e, "72960imvzNPZpqqalmnLC82", "FruitShakeRandomDirectionCtrl");
this && this.__read;
this && this.__spread;
Object.defineProperty(i, "__esModule", {
value: !0
});
var r = t("../FruitFeature"), n = function() {
function t() {
this._shakeCount = 0;
this._usedShakeDirections = [];
this._lastShakeDirection = -1;
}
t.getInstance = function() {
null == t._instance && (t._instance = new t());
return t._instance;
};
t.prototype.isOpen = function() {
return r.default.isOpen(r.FruitFeat.FruitShakeRandomDirection);
};
t.prototype.reset = function() {
console.log(t.LOG_TAG + " reset 摇一摇方向状态已重置");
this._shakeCount = 0;
this._usedShakeDirections = [];
this._lastShakeDirection = -1;
};
t.prototype._formatDirection = function(t) {
return t >= 0 ? "A" + (t + 1) : "无";
};
t.prototype._formatDirections = function(t) {
var e = this;
return t.length > 0 ? t.map(function(t) {
return e._formatDirection(t);
}).join(", ") : "无";
};
t.prototype.getNextShakeDirection = function() {
var e = t.LOG_TAG;
if (!this.isOpen()) return 0;
this._shakeCount++;
if (1 === this._shakeCount) {
this._lastShakeDirection = 0;
this._usedShakeDirections.push(0);
console.log(e + " getNextShakeDirection 第" + this._shakeCount + "次，固定方向 " + this._formatDirection(0) + "，已使用: [" + this._formatDirections(this._usedShakeDirections) + "]");
return 0;
}
if (this._usedShakeDirections.length >= 5) {
console.log(e + " getNextShakeDirection 5套方案已用完一轮，重置候选池，上次方向: " + this._formatDirection(this._lastShakeDirection));
this._usedShakeDirections = [];
}
for (var i = [], r = 0; r < 5; r++) r === this._lastShakeDirection || this._usedShakeDirections.includes(r) || i.push(r);
if (0 === i.length) {
console.warn(e + " getNextShakeDirection 无未使用候选，放宽为仅排除上次方向，上次: " + this._formatDirection(this._lastShakeDirection) + "，已使用: [" + this._formatDirections(this._usedShakeDirections) + "]");
for (r = 0; r < 5; r++) r !== this._lastShakeDirection && i.push(r);
}
var n = Math.floor(Math.random() * i.length), o = i[n], a = this._lastShakeDirection;
this._lastShakeDirection = o;
this._usedShakeDirections.push(o);
console.log(e + " getNextShakeDirection 第" + this._shakeCount + "次，选中 " + this._formatDirection(o) + "，候选: [" + this._formatDirections(i) + "]，随机索引: " + n + "，上次: " + this._formatDirection(a) + "，已使用: [" + this._formatDirections(this._usedShakeDirections) + "]");
return o;
};
t.prototype.testShakeRandomDirection = function() {
console.log("[测试] 仅在调试模式下可用");
};
t.prototype.getShakeDirectionStatus = function() {
var t = {
featureEnabled: this.isOpen(),
shakeCount: this._shakeCount,
usedDirections: this._usedShakeDirections.map(function(t) {
return "A" + (t + 1);
}),
lastDirection: this._lastShakeDirection >= 0 ? "A" + (this._lastShakeDirection + 1) : "无",
availableDirections: this._usedShakeDirections.length >= 5 ? "全部可用（已重置）" : 5 - this._usedShakeDirections.length + "个未使用"
};
return JSON.stringify(t, null, 2);
};
t.LOG_TAG = "[FruitShakeRandomDirectionCtrl]";
t._instance = null;
return t;
}();
i.default = n;
cc._RF.pop();
}, {
"../FruitFeature": "FruitFeature"
} ],
FruitSmallToBigReplacementCtrl: [ function(t, e, i) {
"use strict";
cc._RF.push(e, "f72dbm6wW5AmqVRyuce/S5u", "FruitSmallToBigReplacementCtrl");
var r = this && this.__values || function(t) {
var e = "function" == typeof Symbol && Symbol.iterator, i = e && t[e], r = 0;
if (i) return i.call(t);
if (t && "number" == typeof t.length) return {
next: function() {
t && r >= t.length && (t = void 0);
return {
value: t && t[r++],
done: !t
};
}
};
throw new TypeError(e ? "Object is not iterable." : "Symbol.iterator is not defined.");
};
Object.defineProperty(i, "__esModule", {
value: !0
});
var n = t("../FruitFeature"), o = t("../GLFruitApp"), a = t("../play/GLFruitItem"), u = function() {
function t() {
this._remainingInitialSkipCount = t.INITIAL_SKIP_REPLACEMENT_COUNT;
}
t.ins = function() {
this._instance || (this._instance = new t());
return this._instance;
};
t.prototype.isOpen = function() {
return n.default.isOpen(n.FruitFeat.FruitSmallToBigReplacement);
};
t.prototype.clear = function() {
this._remainingInitialSkipCount = t.INITIAL_SKIP_REPLACEMENT_COUNT;
};
t.prototype.hasUsedSmallToBigReplacement = function() {
var t, e, i, r;
return null !== (r = null === (i = null === (e = null === (t = o.default.user) || void 0 === t ? void 0 : t.getDataVo()) || void 0 === e ? void 0 : e.roundDataVo) || void 0 === i ? void 0 : i.hasUsedSmallToBigReplacement) && void 0 !== r && r;
};
t.prototype.markSmallToBigReplacementUsed = function() {
var t, e, i = null === (e = null === (t = o.default.user) || void 0 === t ? void 0 : t.getDataVo()) || void 0 === e ? void 0 : e.roundDataVo;
if (i) {
i.hasUsedSmallToBigReplacement = !0;
o.default.user.saveData();
}
};
t.prototype.replaceFruitIdIfNeeded = function(t, e) {
if (!this.isOpen() || this.hasUsedSmallToBigReplacement()) return t;
if (this._remainingInitialSkipCount > 0) {
this._remainingInitialSkipCount--;
return t;
}
return this.tryReplaceSmallFruitWithBigFruit(t, e);
};
t.prototype.testSmallToBigReplacement = function() {
console.log("[" + t.LOG_KEYWORD + "] [测试] 仅在调试模式下可用");
};
t.prototype.validateUpperFruitDetection = function() {
console.log("[" + t.LOG_KEYWORD + "] [校验] 仅在调试模式下可用");
return !1;
};
t.prototype.getStatus = function(t) {
var e = this.getUpperFruits(t), i = {
featureEnabled: this.isOpen(),
hasUsed: this.hasUsedSmallToBigReplacement(),
remainingInitialSkipCount: this._remainingInitialSkipCount,
totalFruits: t.length,
upperFruitsCount: e.length,
upperFruitIds: e.map(function(t) {
return t.getId();
})
};
return JSON.stringify(i, null, 2);
};
t.prototype.tryReplaceSmallFruitWithBigFruit = function(e, i) {
console.log("[" + t.LOG_KEYWORD + "] [替换小果为大果] 开始处理，原始果子ID: " + e);
if (1 !== e && 2 !== e) {
console.log("[" + t.LOG_KEYWORD + "] [替换小果为大果] 果子ID " + e + " 不是一级或二级，跳过替换");
return e;
}
var r = this.getUpperFruits(i);
console.log("[" + t.LOG_KEYWORD + "] [替换小果为大果] 上层果子数量: " + r.length + "，上层果子ID列表: [" + r.map(function(t) {
return t.getId();
}).join(", ") + "]");
if (r.some(function(t) {
return t.getId() === e;
})) {
console.log("[" + t.LOG_KEYWORD + "] [替换小果为大果] 上层已有对应果子(ID=" + e + ")，不做替换");
return e;
}
var n = Math.random();
console.log("[" + t.LOG_KEYWORD + "] [替换小果为大果] 随机值: " + n.toFixed(3));
if (n >= .5) {
console.log("[" + t.LOG_KEYWORD + "] [替换小果为大果] 随机值 >= 0.5，不进行替换");
return e;
}
this.markSmallToBigReplacementUsed();
console.log("[" + t.LOG_KEYWORD + "] [替换小果为大果] 触发替换逻辑，标记已使用");
var o = this.getMaxLevelFruitFromUpper(r);
if (o) {
var a = o.getId();
console.log("[" + t.LOG_KEYWORD + "] [替换小果为大果] 替换成功！原始ID: " + e + " -> 替换ID: " + a);
return a;
}
console.log("[" + t.LOG_KEYWORD + "] [替换小果为大果] 上层没有合适的果子，返回默认四级果子(ID=4)");
return 4;
};
t.prototype.getUpperFruits = function(t) {
var e = this.getActiveFruits(t);
return this.getUpperFruitsFromActive(e);
};
t.prototype.getActiveFruits = function(t) {
return t.filter(function(t) {
return t && t.getItem() && t.getItem().node && cc.isValid(t.getItem().node) && t.isActiveState();
});
};
t.prototype.getUpperFruitsFromActive = function(t) {
var e, i, n = [];
try {
for (var o = r(t), a = o.next(); !a.done; a = o.next()) {
var u = a.value;
this.isUpperFruit(u, t) && n.push(u);
}
} catch (t) {
e = {
error: t
};
} finally {
try {
a && !a.done && (i = o.return) && i.call(o);
} finally {
if (e) throw e.error;
}
}
return n;
};
t.prototype.isUpperFruit = function(t, e) {
var i, n, o = t.getItem().node, u = o.convertToWorldSpaceAR(cc.Vec2.ZERO), s = a.default.FruitRadius[t.getId() - 1] * o.scale, l = 2 * s, c = u.x - s, d = u.x + s, p = u.y + s + l, f = u.y + s;
try {
for (var h = r(e), g = h.next(); !g.done; g = h.next()) {
var F = g.value;
if (F !== t) {
var y = F.getItem().node, v = y.convertToWorldSpaceAR(cc.Vec2.ZERO), m = a.default.FruitRadius[F.getId() - 1] * y.scale;
if (this.isCircleOverlapRect(v, m, c, d, f, p)) return !1;
}
}
} catch (t) {
i = {
error: t
};
} finally {
try {
g && !g.done && (n = h.return) && n.call(h);
} finally {
if (i) throw i.error;
}
}
return !0;
};
t.prototype.isCircleOverlapRect = function(t, e, i, r, n, o) {
var a = Math.max(i, Math.min(t.x, r)), u = Math.max(n, Math.min(t.y, o)), s = t.x - a, l = t.y - u;
return s * s + l * l <= e * e;
};
t.prototype.getMaxLevelFruitFromUpper = function(t) {
var e, i;
if (0 === t.length) return null;
var n = t.slice().sort(function(t, e) {
return e.getId() - t.getId();
}), o = n[0];
if (o.getId() <= 6) return o;
try {
for (var a = r(n), u = a.next(); !u.done; u = a.next()) {
var s = u.value;
if (s.getId() <= 6) return s;
}
} catch (t) {
e = {
error: t
};
} finally {
try {
u && !u.done && (i = a.return) && i.call(a);
} finally {
if (e) throw e.error;
}
}
return null;
};
t._instance = null;
t.LOG_KEYWORD = "FruitSmallToBigReplacement";
t.INITIAL_SKIP_REPLACEMENT_COUNT = 0;
return t;
}();
i.default = u;
cc._RF.pop();
}, {
"../FruitFeature": "FruitFeature",
"../GLFruitApp": "GLFruitApp",
"../play/GLFruitItem": "GLFruitItem"
} ],
FruitUsePropNoDieCtrl: [ function(t, e, i) {
"use strict";
cc._RF.push(e, "3c3cerdVbpJ9bHA7yB++Gye", "FruitUsePropNoDieCtrl");
var r = this && this.__values || function(t) {
var e = "function" == typeof Symbol && Symbol.iterator, i = e && t[e], r = 0;
if (i) return i.call(t);
if (t && "number" == typeof t.length) return {
next: function() {
t && r >= t.length && (t = void 0);
return {
value: t && t[r++],
done: !t
};
}
};
throw new TypeError(e ? "Object is not iterable." : "Symbol.iterator is not defined.");
};
Object.defineProperty(i, "__esModule", {
value: !0
});
var n = t("../FruitFeature"), o = t("../GLFruitApp"), a = t("../tools/GLFruitBoardStateManager"), u = t("../traits/GLFruitDeadCheckOptimizeTraitCtrl"), s = function() {
function t() {}
t.getInstance = function() {
null == this._instance && (this._instance = new t());
return this._instance;
};
t.prototype.isOpen = function() {
return n.default.isOpen(n.FruitFeat.FruitUsePropNoDie);
};
t.prototype.onBeforeUseShakeProp = function() {
if (this.isOpen()) {
console.log("[FruitUsePropNoDieCtrl] onBeforeUseShakeProp 缓存盘面 (isShakeProp=true)");
a.default.saveBoardState(!0);
}
};
t.prototype.tryRecoverFromFailState = function() {
if (!this.isOpen()) return !1;
console.log("[FruitUsePropNoDieCtrl] tryRecoverFromFailState 命中道具不死，开始恢复盘面");
if (!a.default.restoreBoardState(void 0, !0)) {
console.warn("[FruitUsePropNoDieCtrl] tryRecoverFromFailState 盘面恢复失败，继续失败流程");
return !1;
}
a.default.clearSavedData(!0);
console.log("[FruitUsePropNoDieCtrl] tryRecoverFromFailState 恢复完成，已回到游戏态");
return !0;
};
t.prototype.onExitShakeState = function() {
if (this.isOpen()) if (this.hasFruitOverDeathBoundary()) {
console.log("[FruitUsePropNoDieCtrl] onExitShakeState 有水果超过边界，免死恢复");
this.tryRecoverFromFailState();
} else {
console.log("[FruitUsePropNoDieCtrl] onExitShakeState 没有水果超过边界，清理摇晃前缓存");
a.default.getSavedData() && a.default.clearSavedData(!0);
}
};
t.prototype.hasFruitOverDeathBoundary = function() {
var t, e, i, n, a = null === (i = o.default.gameStateCtr) || void 0 === i ? void 0 : i.getGameView();
if (!a) return !1;
var u = a.getOutBoundBoxMinY(), s = null === (n = o.default.mergerCtr) || void 0 === n ? void 0 : n.getFruits();
if (!s || 0 === s.length) return !1;
try {
for (var l = r(s), c = l.next(); !c.done; c = l.next()) {
var d = c.value;
if (this.isFruitInDeathZone(d, u)) return !0;
}
} catch (e) {
t = {
error: e
};
} finally {
try {
c && !c.done && (e = l.return) && e.call(l);
} finally {
if (t) throw t.error;
}
}
return !1;
};
t.prototype.isFruitInDeathZone = function(t, e) {
var i, r = null == t ? void 0 : t.getItem();
if (!t || !r || !cc.isValid(r.node)) return !1;
if (t.getContactFruitCount() <= 0) return !1;
if (n.default.isOpen(n.FruitFeat.FruitFailOnAnyOutBound)) {
var a = r.node.convertToWorldSpaceAR(cc.Vec3.ZERO), s = r.getPhysicsCircleCollider().radius * r.node.scale;
return a.y - s + 18 >= e;
}
var l = (null === (i = o.default.mergerCtr) || void 0 === i ? void 0 : i.getTurnCount()) || 0, c = t.getRound();
if (u.default.getInstance().isOpen() && l >= (c >= 0 ? c : l)) {
a = r.node.convertToWorldSpaceAR(cc.Vec3.ZERO), s = r.getPhysicsCircleCollider().radius * r.node.scale;
return a.y + s / 2 >= e;
}
return t.isOutBoundBox(e);
};
t._instance = null;
return t;
}();
i.default = s;
cc._RF.pop();
}, {
"../FruitFeature": "FruitFeature",
"../GLFruitApp": "GLFruitApp",
"../tools/GLFruitBoardStateManager": "GLFruitBoardStateManager",
"../traits/GLFruitDeadCheckOptimizeTraitCtrl": "GLFruitDeadCheckOptimizeTraitCtrl"
} ],
FruitWannengFruitCtrl: [ function(t, e, i) {
"use strict";
cc._RF.push(e, "03d42S5N2lFYbyqCTg+0xYW", "FruitWannengFruitCtrl");
var r = this && this.__awaiter || function(t, e, i, r) {
return new (i || (i = Promise))(function(n, o) {
function a(t) {
try {
s(r.next(t));
} catch (t) {
o(t);
}
}
function u(t) {
try {
s(r.throw(t));
} catch (t) {
o(t);
}
}
function s(t) {
t.done ? n(t.value) : (e = t.value, e instanceof i ? e : new i(function(t) {
t(e);
})).then(a, u);
var e;
}
s((r = r.apply(t, e || [])).next());
});
}, n = this && this.__generator || function(t, e) {
var i, r, n, o, a = {
label: 0,
sent: function() {
if (1 & n[0]) throw n[1];
return n[1];
},
trys: [],
ops: []
};
return o = {
next: u(0),
throw: u(1),
return: u(2)
}, "function" == typeof Symbol && (o[Symbol.iterator] = function() {
return this;
}), o;
function u(t) {
return function(e) {
return s([ t, e ]);
};
}
function s(o) {
if (i) throw new TypeError("Generator is already executing.");
for (;a; ) try {
if (i = 1, r && (n = 2 & o[0] ? r.return : o[0] ? r.throw || ((n = r.return) && n.call(r), 
0) : r.next) && !(n = n.call(r, o[1])).done) return n;
(r = 0, n) && (o = [ 2 & o[0], n.value ]);
switch (o[0]) {
case 0:
case 1:
n = o;
break;

case 4:
a.label++;
return {
value: o[1],
done: !1
};

case 5:
a.label++;
r = o[1];
o = [ 0 ];
continue;

case 7:
o = a.ops.pop();
a.trys.pop();
continue;

default:
if (!(n = a.trys, n = n.length > 0 && n[n.length - 1]) && (6 === o[0] || 2 === o[0])) {
a = 0;
continue;
}
if (3 === o[0] && (!n || o[1] > n[0] && o[1] < n[3])) {
a.label = o[1];
break;
}
if (6 === o[0] && a.label < n[1]) {
a.label = n[1];
n = o;
break;
}
if (n && a.label < n[2]) {
a.label = n[2];
a.ops.push(o);
break;
}
n[2] && a.ops.pop();
a.trys.pop();
continue;
}
o = e.call(t, a);
} catch (t) {
o = [ 6, t ];
r = 0;
} finally {
i = n = 0;
}
if (5 & o[0]) throw o[1];
return {
value: o[0] ? o[1] : void 0,
done: !0
};
}
}, o = this && this.__values || function(t) {
var e = "function" == typeof Symbol && Symbol.iterator, i = e && t[e], r = 0;
if (i) return i.call(t);
if (t && "number" == typeof t.length) return {
next: function() {
t && r >= t.length && (t = void 0);
return {
value: t && t[r++],
done: !t
};
}
};
throw new TypeError(e ? "Object is not iterable." : "Symbol.iterator is not defined.");
};
Object.defineProperty(i, "__esModule", {
value: !0
});
var a = t("../GLFruitApp"), u = t("../defines/GLFruitDefine"), s = t("../tools/GLFruitTools"), l = function() {
function t() {
this._bundleName = "Remote_gl_fruit_wanneng";
this.loadComplete = !1;
this.wannengFruitPrefab = null;
this.assetPaths = [ "prefabs/Fruit_13" ];
this.assetMap = new Map();
}
t.getInstance = function() {
null == this._instance && (this._instance = new t());
return this._instance;
};
t.prototype.isWannengFruitId = function(e) {
return e === t.WannengFruitId;
};
t.prototype.getFruitRadius = function(e) {
return this.isWannengFruitId(e) ? t.WannengFruitRadius : null;
};
t.prototype.getAnimationName = function(e, i) {
if (!this.isWannengFruitId(e)) return null;
switch (i) {
case u.GLFruitAnimationDefine.Idle1:
case u.GLFruitAnimationDefine.Idle2:
case u.GLFruitAnimationDefine.Idle3:
case u.GLFruitAnimationDefine.Idle4:
return t.WannengFruitIdle3;

default:
return null;
}
};
t.prototype.loadWannengFruitPrefabPool = function() {
return r(this, void 0, Promise, function() {
var e, i;
return n(this, function(r) {
switch (r.label) {
case 0:
e = s.default.GetFruitNameById(t.WannengFruitId);
return [ 4, this.loadWannengFruitPrefab() ];

case 1:
r.sent();
this.loadComplete = null != this.assetMap && this.assetMap.size === this.assetPaths.length;
if ((i = this.assetMap.get("prefabs/Fruit_13")) && cc.isValid(i)) {
console.log("[" + t.LOG_TAG + "] 万能水果资源加载完成");
this.wannengFruitPrefab = i;
a.default.poolCtr.createObjectPool(e, i, 2);
} else console.error("[" + t.LOG_TAG + "] Failed to load " + e + " prefab");
return [ 2 ];
}
});
});
};
t.prototype.tryGetSpawnFruitId = function() {
if (!this.loadComplete) return null;
if (this.shouldSpawnWannengFruit()) {
console.log("[" + t.LOG_TAG + "] 满足条件，生成万能水果 (id=" + t.WannengFruitId + ")");
return t.WannengFruitId;
}
return null;
};
t.prototype.tryHandleFruitContact = function(t, e) {
if (!this.loadComplete) return !1;
if (this.isWannengFruitId(t.getId()) && !this.hasTriggeredWannengEffect(t) && !this.isWannengFruitId(e.getId())) {
this.markWannengEffectTriggered(t);
this.onWannengFruitContact(t, e);
return !0;
}
if (this.isWannengFruitId(e.getId()) && !this.hasTriggeredWannengEffect(e) && !this.isWannengFruitId(t.getId())) {
this.markWannengEffectTriggered(e);
this.onWannengFruitContact(e, t);
return !0;
}
return !1;
};
t.prototype.onWannengFruitContact = function(e, i) {
var r, n, u, l, c = a.default.mergerCtr, d = i.getId(), p = c.getFruits(), f = [];
try {
for (var h = o(p), g = h.next(); !g.done; g = h.next()) (C = g.value).getId() === d && C !== e && f.push(C);
} catch (t) {
r = {
error: t
};
} finally {
try {
g && !g.done && (n = h.return) && n.call(h);
} finally {
if (r) throw r.error;
}
}
console.log("[" + t.LOG_TAG + "] 万能水果碰到水果 id=" + d + ", 将消除 " + f.length + " 个相同水果");
var F = 0;
if (d === t.BlueberryId) F = 5 * f.length; else {
var y = a.default.user.getDataVo().maxFruitLevel < d, v = s.default.CalcScoreNormal(d, y);
F = f.length * v;
}
console.log("[" + t.LOG_TAG + "] 消除得分: " + F + " (消除" + f.length + "个id=" + d + "的水果)");
var m = e.getItem() && e.getItem().node && cc.isValid(e.getItem().node) ? e.getItem().node.convertToWorldSpaceAR(cc.Vec3.ZERO) : cc.Vec3.ZERO;
try {
for (var _ = o(f), L = _.next(); !L.done; L = _.next()) {
var C;
(C = L.value).runMergeState();
c.removeFruit(C);
}
} catch (t) {
u = {
error: t
};
} finally {
try {
L && !L.done && (l = _.return) && l.call(_);
} finally {
if (u) throw u.error;
}
}
e.runMergeState();
c.removeFruit(e);
F > 0 && a.default.user.addScore(F);
a.default.effectCtr.playMergeNewEffect(m, s.default.GetFruitMergerEffectNameById(d));
a.default.user.saveData();
a.default.failZoneCtr.addExtraTime();
};
t.prototype.hasTriggeredWannengEffect = function(t) {
return !!t._hasTriggeredWannengEffect;
};
t.prototype.markWannengEffectTriggered = function(t) {
t._hasTriggeredWannengEffect = !0;
};
t.prototype.shouldSpawnWannengFruit = function() {
var e, i, r, n;
if (!this.wannengFruitPrefab) {
console.log("[" + t.LOG_TAG + "] 万能水果资源未加载完");
return !1;
}
var u = t.LOG_TAG;
console.log("[" + u + "] ========== 开始检查生成条件 ==========");
console.log("[" + u + "] ✅ 特性已开启");
var s = a.default.mergerCtr, l = s.getFruits();
console.log("[" + u + "] 📊 当前水果总数: " + l.length);
if (0 === l.length) {
console.log("[" + u + "] ❌ 箱子内没有水果，不生成万能水果");
return !1;
}
var c = a.default.gameStateCtr.getGameView().getNodeBoxBg();
if (!c) {
console.warn("[" + u + "] ❌ boxBgNode is null, cannot check spawn condition");
return !1;
}
var d = c.getBoundingBoxToWorld(), p = d.yMax, f = d.yMin, h = p - f;
console.log("[" + u + "] 📦 箱子边界: 顶部Y=" + p.toFixed(2) + ", 底部Y=" + f.toFixed(2) + ", 高度=" + h.toFixed(2));
var g = -Infinity, F = 0, y = [], v = s.getNextFruit(), m = s.getReadyDropFruit();
try {
for (var _ = o(l), L = _.next(); !L.done; L = _.next()) if ((A = L.value) !== v) if (A !== m) if ((R = A.getItem()) && R.node && cc.isValid(R.node)) {
var C = (E = R.getRigidbody()) && E.active, S = A.getContactFruitCount() > 0;
if (C && S) {
var G = R.node.convertToWorldSpaceAR(cc.Vec3.ZERO).y + A.getRadius() * R.node.scale;
G > g && (g = G);
F++;
} else y.push("未在箱子里(id=" + A.getId() + ", physics=" + C + ", contact=" + S + ")");
} else y.push("无效节点(id=" + A.getId() + ")"); else y.push("准备掉落的水果(id=" + A.getId() + ")"); else y.push("下一个水果(id=" + A.getId() + ")");
} catch (t) {
e = {
error: t
};
} finally {
try {
L && !L.done && (i = _.return) && i.call(_);
} finally {
if (e) throw e.error;
}
}
console.log("[" + u + "] 📏 最高峰Y坐标: " + (-Infinity === g ? "无" : g.toFixed(2)));
console.log("[" + u + "] 📦 箱子里的水果数量: " + F);
y.length > 0 && console.log("[" + u + "] 🚫 排除的水果: " + y.join(", "));
var w = -Infinity === g ? 0 : g - f, b = h > 0 ? w / h : 0, P = b >= t.HeightRatioThreshold;
console.log("[" + u + "] 📏 条件1 - 最高峰高度检查:");
console.log("[" + u + "]    最高峰高度: " + w.toFixed(2));
console.log("[" + u + "]    高度占比: " + (100 * b).toFixed(1) + "% (需要 >= 80%)");
console.log("[" + u + "]    条件1结果: " + (P ? "✅ 满足" : "❌ 不满足"));
var D = 0, I = 0, N = 0;
try {
for (var T = o(l), O = T.next(); !O.done; O = T.next()) {
var A;
if ((A = O.value) !== v && A !== m) {
var R;
if ((R = A.getItem()) && R.node && cc.isValid(R.node)) {
var E;
C = (E = R.getRigidbody()) && E.active, S = A.getContactFruitCount() > 0;
if (C || S) {
N++;
var x = A.getId();
x === t.BlueberryId ? D++ : x === t.StrawberryId && I++;
}
}
}
}
} catch (t) {
r = {
error: t
};
} finally {
try {
O && !O.done && (n = T.return) && n.call(T);
} finally {
if (r) throw r.error;
}
}
var M = D + I, k = N > 0 ? M / N : 0, B = k >= t.SmallFruitRatioThreshold;
console.log("[" + u + "] 🍓 条件2 - 蓝莓+树莓占比检查:");
console.log("[" + u + "]    箱子里的水果总数: " + N);
console.log("[" + u + "]    蓝莓数量 (id=1): " + D);
console.log("[" + u + "]    树莓数量 (id=2): " + I);
console.log("[" + u + "]    小水果总数: " + M);
console.log("[" + u + "]    占比: " + (100 * k).toFixed(1) + "% (需要 >= 40%)");
console.log("[" + u + "]    条件2结果: " + (B ? "✅ 满足" : "❌ 不满足"));
var V = P && B;
console.log("[" + u + "] ========== 检查结果 ==========");
if (V) console.log("[" + u + "] ✅✅✅ 满足所有条件，可以生成万能水果！"); else {
console.log("[" + u + "] ❌❌❌ 不满足条件，无法生成万能水果");
P || B ? P ? console.log("[" + u + "]    原因：条件2不满足（蓝莓+树莓占比不足）") : console.log("[" + u + "]    原因：条件1不满足（最高峰高度不足）") : console.log("[" + u + "]    原因：条件1和条件2都不满足");
}
console.log("[" + u + "] ==========================================");
return V;
};
t.prototype.handleWannengFruitRecordFruitId = function(e) {
if (this.isWannengFruitId(e)) {
if (this.loadComplete) return e;
console.log("[" + t.LOG_TAG + "] 记录数据里有万能水果，资源未加载情况，返回默认id: 1");
return 1;
}
return e;
};
t.prototype.loadWannengFruitPrefab = function() {
var t;
return r(this, void 0, Promise, function() {
var e, i, r, o = this;
return n(this, function(n) {
switch (n.label) {
case 0:
if (!(e = null === (t = GL.Game) || void 0 === t ? void 0 : t.resLoaderLoadBundle)) {
console.log("【" + this._bundleName + "】resLoaderLoadBundle 不可用, 中止加载");
return [ 2 ];
}
i = 0;
return [ 4, e(this._bundleName, !0) ];

case 1:
return (r = n.sent()) ? [ 4, new Promise(function(t) {
for (var e = function(e) {
r.load(o.assetPaths[e], function(r, n) {
r ? console.log("【" + o._bundleName + "】加载失败: " + o.assetPaths[e] + ", err=", r) : o.assetMap.set(o.assetPaths[e], n);
++i >= o.assetPaths.length && t(!0);
});
}, n = 0; n < o.assetPaths.length; n++) e(n);
}) ] : [ 3, 3 ];

case 2:
n.sent();
return [ 3, 4 ];

case 3:
console.log("【" + this._bundleName + "】加载 bundle 失败");
n.label = 4;

case 4:
return [ 2 ];
}
});
});
};
t._instance = null;
t.LOG_TAG = "FruitWannengFruit";
t.WannengFruitId = 13;
t.HeightRatioThreshold = .8;
t.SmallFruitRatioThreshold = .4;
t.BlueberryId = 1;
t.StrawberryId = 2;
t.WannengFruitRadius = 77;
t.WannengFruitIdle1 = "1_idle";
t.WannengFruitIdle2 = "0_idle";
t.WannengFruitIdle3 = "idle";
t.WannengFruitInit = "init";
return t;
}();
i.default = l;
cc._RF.pop();
}, {
"../GLFruitApp": "GLFruitApp",
"../defines/GLFruitDefine": "GLFruitDefine",
"../tools/GLFruitTools": "GLFruitTools"
} ],
GFruitUser: [ function(t, e, i) {
"use strict";
cc._RF.push(e, "34ba17FY+5Gi5iA+EQIeWmj", "GFruitUser");
var r, n = this && this.__extends || (r = function(t, e) {
return (r = Object.setPrototypeOf || {
__proto__: []
} instanceof Array && function(t, e) {
t.__proto__ = e;
} || function(t, e) {
for (var i in e) Object.prototype.hasOwnProperty.call(e, i) && (t[i] = e[i]);
})(t, e);
}, function(t, e) {
r(t, e);
function i() {
this.constructor = t;
}
t.prototype = null === e ? Object.create(e) : (i.prototype = e.prototype, new i());
});
Object.defineProperty(i, "__esModule", {
value: !0
});
i.GLFruitUserRoundDataVo = i.GLFruitPairDataVo = void 0;
var o = t("../core/GLFruitModelBase"), a = t("./GLFruitApp"), u = function() {
function t() {
this.score = 0;
this.bestScore = 0;
this.level = 1;
this.props = [];
this.propsUsageDetails = [];
this.recordPlayData = "";
this.guideRecordData = "";
this.hasLost = !1;
this.maxFruitLevel = 0;
this.stepMoves = 0;
this.isBeginner = !0;
this.gameNum = 0;
this.roundDataVo = new l();
}
t.prototype.initNested = function() {
this.roundDataVo = c.assignData(this.roundDataVo, l).initNested();
return this;
};
return t;
}(), s = function() {
this.id = 0;
this.num = 0;
};
i.GLFruitPairDataVo = s;
var l = function() {
function t() {
this.gameRealTime = 0;
this.propFreeCount = 0;
this.propAdCount = 0;
this.mergeCount = 0;
this.propUsageInfo = [];
this.hasRevived = !1;
this.failRevivePopupReviveCount = 0;
this.hasUsedSmallToBigReplacement = !1;
this.hasSynthesizedWatermelon = !1;
this.hasTriggeredAutoShakeOnDanger = !1;
this.roundMaxFruitLevel = 0;
}
t.prototype.initNested = function() {
this.propUsageInfo = this.propUsageInfo.map(function(t) {
return c.assignData(t, s);
});
return this;
};
return t;
}();
i.GLFruitUserRoundDataVo = l;
var c = function(t) {
n(e, t);
function e() {
var e = null !== t && t.apply(this, arguments) || this;
e.dataVo = null;
e.lastLevelScore = 0;
return e;
}
e.assignData = function(t, e) {
var i = new e();
Object.assign(i, t);
return i;
};
e.prototype.getItem = function(t, e) {
void 0 === e && (e = !1);
var i = cc.sys.localStorage.getItem(t);
return null != i && "" != i ? e ? Number(i) : i : e ? 0 : "";
};
e.prototype.getLevel = function() {
return this.dataVo.level;
};
e.prototype.setItem = function(t, e) {
cc.sys.localStorage.setItem(t, e);
};
e.prototype.clearAllDatas = function() {
cc.sys.localStorage.clear();
};
e.prototype.loadData = function() {
var t = this.getItem(e.save_key, !1);
if (null == t || "" == t) {
this.dataVo = new u();
a.default.propCtr.init(this.dataVo.props, !0);
} else {
this.dataVo = JSON.parse(t);
this.dataVo = e.assignData(this.dataVo, u).initNested();
a.default.propCtr.init(this.dataVo.props, !1);
if (this.dataVo.hasLost || this.dataVo.isBeginner) {
this.dataVo.recordPlayData = "";
this.dataVo.hasLost = !1;
this.dataVo.score = 0;
}
}
};
e.prototype.saveData = function(t) {
void 0 === t && (t = !1);
var i = a.default.mergerCtr.getPlayCardRecordContent();
if (i) {
this.dataVo.recordPlayData = t ? "" : i;
this.setItem(e.save_key, JSON.stringify(this.dataVo));
}
};
e.prototype.syncGameData = function() {
GL.Submit.sendGameDataChanged("gl_fruit", [ {
key: e.save_key,
data: {
score: 0,
bestScore: this.dataVo.bestScore,
level: this.dataVo.level,
props: this.dataVo.props,
propsUsageDetails: [],
hasLost: !1,
maxFruitLevel: this.dataVo.maxFruitLevel,
stepMoves: 0,
isBeginner: this.dataVo.isBeginner,
gameNum: this.dataVo.gameNum,
guideRecordData: this.dataVo.guideRecordData,
recordPlayData: ""
}
} ]);
};
e.prototype.getDataVo = function() {
return this.dataVo;
};
e.prototype.addScore = function(t) {
this.setScore(this.getScore() + t);
};
e.prototype.setScore = function(t) {
this.dataVo.score = t;
if (this.dataVo.score >= this.dataVo.bestScore) {
this.dataVo.bestScore = this.dataVo.score;
this.emit(e.Event.BestScoreChanged);
this.syncGameData();
}
this.emit(e.Event.ScoreChanged);
};
e.prototype.getScore = function() {
return this.dataVo.score;
};
e.prototype.getBestScore = function() {
return this.dataVo.bestScore;
};
e.prototype.again = function() {
this.resetLevelData();
};
e.prototype.newGame = function() {
this.resetLevelData();
if (this.dataVo.isBeginner) a.default.Instance.usrStartSubmit(a.default.user.getDataVo().gameNum, GL.ExtractTool.configKey.HsFruit || 1); else {
this.dataVo.gameNum += 1;
a.default.Instance.usrStartSubmit(a.default.user.getDataVo().gameNum, GL.ExtractTool.configKey.HsFruit || 1);
}
};
e.prototype.resetLevelData = function() {
this.clearLastLevelScore();
this.dataVo.recordPlayData = "";
this.dataVo.score = 0;
this.dataVo.hasLost = !1;
this.dataVo.roundDataVo.gameRealTime = 0;
this.dataVo.roundDataVo.propFreeCount = 0;
this.dataVo.roundDataVo.propAdCount = 0;
this.dataVo.roundDataVo.propUsageInfo = [];
this.dataVo.roundDataVo.mergeCount = 0;
this.dataVo.roundDataVo.hasRevived = !1;
this.dataVo.roundDataVo.failRevivePopupReviveCount = 0;
this.dataVo.roundDataVo.hasUsedSmallToBigReplacement = !1;
this.dataVo.roundDataVo.hasSynthesizedWatermelon = !1;
this.dataVo.roundDataVo.hasTriggeredAutoShakeOnDanger = !1;
this.dataVo.roundDataVo.roundMaxFruitLevel = 0;
};
e.prototype.getLastLevelScore = function() {
return this.lastLevelScore;
};
e.prototype.clearLastLevelScore = function() {
this.lastLevelScore = 0;
};
e.Event = {
ScoreChanged: "ScoreChanged",
BestScoreChanged: "BestScoreChanged"
};
e.save_key = "gl_fruit_user";
return e;
}(o.default);
i.default = c;
cc._RF.pop();
}, {
"../core/GLFruitModelBase": "GLFruitModelBase",
"./GLFruitApp": "GLFruitApp"
} ],
GLFruitActiveStateNode: [ function(t, e, i) {
"use strict";
cc._RF.push(e, "dfabctZBKNKmbnRs3V3sVO2", "GLFruitActiveStateNode");
var r, n = this && this.__extends || (r = function(t, e) {
return (r = Object.setPrototypeOf || {
__proto__: []
} instanceof Array && function(t, e) {
t.__proto__ = e;
} || function(t, e) {
for (var i in e) Object.prototype.hasOwnProperty.call(e, i) && (t[i] = e[i]);
})(t, e);
}, function(t, e) {
r(t, e);
function i() {
this.constructor = t;
}
t.prototype = null === e ? Object.create(e) : (i.prototype = e.prototype, new i());
});
Object.defineProperty(i, "__esModule", {
value: !0
});
var o = t("../../../core/fsmNode/GLFruitStateNode"), a = t("../../traits/GLFruitFaceNotRotateTraitCtrl"), u = t("../../defines/GLFruitDefine"), s = function(t) {
n(e, t);
function e() {
return null !== t && t.apply(this, arguments) || this;
}
e.prototype.onEnter = function() {
var t = this.machine.getOwer();
t.activePhysicsState();
GL.Game.IsFeatureOpen("GLFruitFaceNotRotate") && a.default.getInstance().isOpen() && t.getItem().playAnimation(u.GLFruitAnimationDefine.Idle2);
};
e.prototype.onExit = function() {};
return e;
}(o.default);
i.default = s;
cc._RF.pop();
}, {
"../../../core/fsmNode/GLFruitStateNode": "GLFruitStateNode",
"../../defines/GLFruitDefine": "GLFruitDefine",
"../../traits/GLFruitFaceNotRotateTraitCtrl": "GLFruitFaceNotRotateTraitCtrl"
} ],
GLFruitAdCtr: [ function(t, e, i) {
"use strict";
cc._RF.push(e, "7c707lcRFdBFIE8taDdzpRb", "GLFruitAdCtr");
Object.defineProperty(i, "__esModule", {
value: !0
});
var r = t("../../../../gl_hall/script/func/experiment/GLShowInsertAdsBySecondsCtrl"), n = t("../../../../gl_hall/script/func/GLAdjustInsertByPlayTimeCtrl"), o = t("../../../../gl_hall/script/func/GLAdjustInsertShowTimesCtrl"), a = t("../experiment/func/GLFruitMidRollAd/GLFruitMidRollAdCtr"), u = t("../GLFruitApp"), s = t("../GLFruitRoundLogEventCtr"), l = t("../traits/GLFruitTwoFruitOnceTraitCtrl"), c = t("../../../../gl_hall/script/traits/GLGameAdStrategyOptimizeTraitCtrl"), d = function() {
function t() {
this._dropFruitCount = 0;
this._autoShowTimer = null;
this._mergerFruitCount = 0;
this._insertAdCountdown = 0;
}
t.prototype.isChangeinGameAd = function() {
return GL.Game.IsFeatureOpen("GLFruitAdCtr_isChangeinGameAd");
};
t.prototype.midDropFruit = function() {
if (a.default.isOpen()) ; else {
this._dropFruitCount++;
var e = t.MidDropFruitCount;
this.isChangeinGameAd() && (e = 50);
this._dropFruitCount % e == 0 && this.showMidRollAd(!0);
}
};
t.prototype.midAutoShowAdWhenIdle = function() {
var e = this;
a.default.isOpen() || (null == this._autoShowTimer ? this._autoShowTimer = u.default.timeCtr.add(t.MidAutoShowAdWhenIdleInterval, function() {
e.showMidRollAd(!0);
}, this) : this.resetAutoShowTimer());
};
t.prototype.resetAutoShowTimer = function() {
this._autoShowTimer && u.default.timeCtr.resetTimer(this._autoShowTimer);
};
t.prototype.midMergerFruit = function() {
var e, i = window.GL;
if (null === (e = null == i ? void 0 : i.gamelobby) || void 0 === e || !e.isChapterFusionMode()) if (a.default.isOpen()) ; else {
this._mergerFruitCount++;
var r = t.MidMergerFruitCount;
this.isChangeinGameAd() && (r = 40);
this._mergerFruitCount % r == 0 && this.showMidRollAd(!0);
}
};
t.prototype.midMewFruitWatermelon = function() {
a.default.isOpen() ? this.showMidRollAd(!1) : this.showMidRollAd(!0);
};
t.prototype.midMergerWellDone = function() {
a.default.isOpen() ? this.showMidRollAd(!1) : this.showMidRollAd(!0);
};
t.prototype.postResult = function() {
this.showPostRollAd(null, !1, 1);
};
t.prototype.showInsertAd = function(e, i, r) {
var a = this;
void 0 === e && (e = "");
void 0 === i && (i = !1);
void 0 === r && (r = null);
if (!c.default.getInstance().isOpen() || "end" == e && c.default.getInstance().checkCanPlayAd()) if (n.default.getInstance().isOpen()) "end" == e && n.default.getInstance().showInsertAds(r); else if (o.default.getInstance().isOpen()) {
if ("end" == e) {
o.default.getInstance().updateMiniGameSum();
o.default.getInstance().showInsertAds(r);
}
} else {
if (!t.IsOpenInsertAd) return;
if (!(c.default.getInstance().isOpen() && c.default.getInstance().checkSkipGameOrigAdCD("gl_fruit") || this.isCanPlayInsertAd())) return;
i ? this.showInterAdsWaitView(function() {
a.showInsertAdAndResetTime(r);
}) : this.showInsertAdAndResetTime(r);
}
};
t.prototype.showInsertAdAndResetTime = function(t) {
var e = this;
GL.Ad.showInsertAd(function() {
e.setLastShowInsertAdTime();
}, this, t);
};
t.prototype.showPreRollAd = function(e) {
if (t.IsOpenPreRollAd) {
var i = this.getAdSubmitdata("前插屏", "INTER", e);
this.showInsertAd("", !1, i);
}
};
t.prototype.showMidRollAd = function(e) {
void 0 === e && (e = !1);
if (t.IsOpenMidRollAd) {
var i = l.default.getInstance();
if (i.isOpen() && i.isSecondFruitPending()) {
i.setPendingAd(!0, e);
console.log("【GLFruitTwoFruitOnce】广告延迟显示，等待第二个水果下落");
} else this.doShowMidRollAd(e);
}
};
t.prototype.doShowMidRollAd = function(t) {
void 0 === t && (t = !1);
var e = this.getAdSubmitdata("局中插屏", "INTER", 6);
this.showInsertAd("", t, e);
};
t.prototype.showPostRollAd = function(e, i, r) {
var n;
void 0 === i && (i = !1);
void 0 === r && (r = 1);
var o = window.GL;
if ((null === (n = null == o ? void 0 : o.gamelobby) || void 0 === n || !n.isChapterFusionMode()) && t.IsOpenPostRollAd) {
var a = this.getAdSubmitdata("后插屏", "INTER", r);
this.showInsertAd("end", i, a);
}
};
t.prototype.setLastShowInsertAdTime = function() {
r.default.getInstance().isOpen() ? this._insertAdCountdown = 50 : this._insertAdCountdown = t.InsertAdInterval;
};
t.prototype.showRewardsAd = function(t) {
var e = this.getAdSubmitdata("激励", "REWARDED", 6);
GL.Ad.showRewardsAd(function(e) {
e && 1 === (null == e ? void 0 : e.state) && t && t();
u.default.propCtr.clearUseingShakePropState();
}, this, "", e);
};
t.prototype.showInterAdsWaitView = function(t) {
u.default.gameStateCtr.getGameView().getInterAdsWaitView().showView(t);
};
t.prototype.clear = function() {
this._dropFruitCount = 0;
this._mergerFruitCount = 0;
if (this._autoShowTimer) {
u.default.timeCtr.removeByTimer(this._autoShowTimer);
this._autoShowTimer = null;
}
};
t.prototype.isCanPlayInsertAd = function() {
return this._insertAdCountdown <= 0;
};
t.prototype.updatePerSecond = function() {
this._insertAdCountdown--;
};
t.prototype.getAdSubmitdata = function(e, i, r) {
var n = {
game_subtype: t.game_subtype,
ad_position: e,
adFormat: i,
ResultType: r
};
if ("后插屏" == e && "INTER" == i) {
var o = s.default.getInstance().getRoundDataPreClear();
o && Object.assign(n, o);
return n;
}
var a = s.default.getInstance().getOperationStepEventData();
a && Object.assign(n, a);
var u = s.default.getInstance().getSomeGamedata();
u && Object.assign(n, u);
return n;
};
t.IsOpenPreRollAd = !0;
t.IsOpenMidRollAd = !0;
t.IsOpenPostRollAd = !0;
t.IsOpenInsertAd = !0;
t.InsertAdInterval = 60;
t.MidDropFruitCount = 70;
t.MidAutoShowAdWhenIdleInterval = 180;
t.MidMergerFruitCount = 60;
t.game_subtype = 5;
return t;
}();
i.default = d;
cc._RF.pop();
}, {
"../../../../gl_hall/script/func/GLAdjustInsertByPlayTimeCtrl": void 0,
"../../../../gl_hall/script/func/GLAdjustInsertShowTimesCtrl": void 0,
"../../../../gl_hall/script/func/experiment/GLShowInsertAdsBySecondsCtrl": void 0,
"../../../../gl_hall/script/traits/GLGameAdStrategyOptimizeTraitCtrl": void 0,
"../GLFruitApp": "GLFruitApp",
"../GLFruitRoundLogEventCtr": "GLFruitRoundLogEventCtr",
"../experiment/func/GLFruitMidRollAd/GLFruitMidRollAdCtr": "GLFruitMidRollAdCtr",
"../traits/GLFruitTwoFruitOnceTraitCtrl": "GLFruitTwoFruitOnceTraitCtrl"
} ],
GLFruitAddBombAudioTraitCtrl: [ function(t, e, i) {
"use strict";
cc._RF.push(e, "fb5aehBMDhGt5uNHo4G+v4C", "GLFruitAddBombAudioTraitCtrl");
var r = this && this.__awaiter || function(t, e, i, r) {
return new (i || (i = Promise))(function(n, o) {
function a(t) {
try {
s(r.next(t));
} catch (t) {
o(t);
}
}
function u(t) {
try {
s(r.throw(t));
} catch (t) {
o(t);
}
}
function s(t) {
t.done ? n(t.value) : (e = t.value, e instanceof i ? e : new i(function(t) {
t(e);
})).then(a, u);
var e;
}
s((r = r.apply(t, e || [])).next());
});
}, n = this && this.__generator || function(t, e) {
var i, r, n, o, a = {
label: 0,
sent: function() {
if (1 & n[0]) throw n[1];
return n[1];
},
trys: [],
ops: []
};
return o = {
next: u(0),
throw: u(1),
return: u(2)
}, "function" == typeof Symbol && (o[Symbol.iterator] = function() {
return this;
}), o;
function u(t) {
return function(e) {
return s([ t, e ]);
};
}
function s(o) {
if (i) throw new TypeError("Generator is already executing.");
for (;a; ) try {
if (i = 1, r && (n = 2 & o[0] ? r.return : o[0] ? r.throw || ((n = r.return) && n.call(r), 
0) : r.next) && !(n = n.call(r, o[1])).done) return n;
(r = 0, n) && (o = [ 2 & o[0], n.value ]);
switch (o[0]) {
case 0:
case 1:
n = o;
break;

case 4:
a.label++;
return {
value: o[1],
done: !1
};

case 5:
a.label++;
r = o[1];
o = [ 0 ];
continue;

case 7:
o = a.ops.pop();
a.trys.pop();
continue;

default:
if (!(n = a.trys, n = n.length > 0 && n[n.length - 1]) && (6 === o[0] || 2 === o[0])) {
a = 0;
continue;
}
if (3 === o[0] && (!n || o[1] > n[0] && o[1] < n[3])) {
a.label = o[1];
break;
}
if (6 === o[0] && a.label < n[1]) {
a.label = n[1];
n = o;
break;
}
if (n && a.label < n[2]) {
a.label = n[2];
a.ops.push(o);
break;
}
n[2] && a.ops.pop();
a.trys.pop();
continue;
}
o = e.call(t, a);
} catch (t) {
o = [ 6, t ];
r = 0;
} finally {
i = n = 0;
}
if (5 & o[0]) throw o[1];
return {
value: o[0] ? o[1] : void 0,
done: !0
};
}
};
this && this.__read;
this && this.__spread;
Object.defineProperty(i, "__esModule", {
value: !0
});
i.GLFruitAddBombAudioTraitCtrl = void 0;
var o = function() {
function t() {
this._featureName = "gamelobby_fruit_addBombAudio";
this._bundleName = "Remote_gl_fruit_addBombAudio";
this._audioClip = null;
this._isTestMode = !1;
}
Object.defineProperty(t, "Instance", {
get: function() {
this._instance || (this._instance = new t());
return this._instance;
},
enumerable: !1,
configurable: !0
});
t.prototype._safeLog = function(t) {
for (var e = [], i = 1; i < arguments.length; i++) e[i - 1] = arguments[i];
};
t.prototype.isOpen = function() {
var t = !!this._isTestMode || GL.Game.IsFeatureOpen(this._featureName);
this._safeLog("炸弹道具增加音效:是否开启:" + t);
return t;
};
t.prototype.playBombAudio = function() {
return r(this, void 0, void 0, function() {
var t, e = this;
return n(this, function(i) {
switch (i.label) {
case 0:
if (this._audioClip) {
GL.Audio.playEffect(this._audioClip);
return [ 2 ];
}
return [ 4, GL.Game.resLoaderLoadBundle(this._bundleName) ];

case 1:
(t = i.sent()) && t.load("audio/bomb", cc.AudioClip, function(t, i) {
if (t) e._safeLog("炸弹道具增加音效:加载音频失败:" + t); else {
e._audioClip = i;
GL.Audio.playEffect(e._audioClip);
}
});
return [ 2 ];
}
});
});
};
t._instance = null;
return t;
}();
i.GLFruitAddBombAudioTraitCtrl = o;
cc._RF.pop();
}, {} ],
GLFruitAddFruitChoiceListTraitCtrl: [ function(t, e, i) {
"use strict";
cc._RF.push(e, "0140fS21nBP+oTFYlPJ0ux9", "GLFruitAddFruitChoiceListTraitCtrl");
var r = this && this.__awaiter || function(t, e, i, r) {
return new (i || (i = Promise))(function(n, o) {
function a(t) {
try {
s(r.next(t));
} catch (t) {
o(t);
}
}
function u(t) {
try {
s(r.throw(t));
} catch (t) {
o(t);
}
}
function s(t) {
t.done ? n(t.value) : (e = t.value, e instanceof i ? e : new i(function(t) {
t(e);
})).then(a, u);
var e;
}
s((r = r.apply(t, e || [])).next());
});
}, n = this && this.__generator || function(t, e) {
var i, r, n, o, a = {
label: 0,
sent: function() {
if (1 & n[0]) throw n[1];
return n[1];
},
trys: [],
ops: []
};
return o = {
next: u(0),
throw: u(1),
return: u(2)
}, "function" == typeof Symbol && (o[Symbol.iterator] = function() {
return this;
}), o;
function u(t) {
return function(e) {
return s([ t, e ]);
};
}
function s(o) {
if (i) throw new TypeError("Generator is already executing.");
for (;a; ) try {
if (i = 1, r && (n = 2 & o[0] ? r.return : o[0] ? r.throw || ((n = r.return) && n.call(r), 
0) : r.next) && !(n = n.call(r, o[1])).done) return n;
(r = 0, n) && (o = [ 2 & o[0], n.value ]);
switch (o[0]) {
case 0:
case 1:
n = o;
break;

case 4:
a.label++;
return {
value: o[1],
done: !1
};

case 5:
a.label++;
r = o[1];
o = [ 0 ];
continue;

case 7:
o = a.ops.pop();
a.trys.pop();
continue;

default:
if (!(n = a.trys, n = n.length > 0 && n[n.length - 1]) && (6 === o[0] || 2 === o[0])) {
a = 0;
continue;
}
if (3 === o[0] && (!n || o[1] > n[0] && o[1] < n[3])) {
a.label = o[1];
break;
}
if (6 === o[0] && a.label < n[1]) {
a.label = n[1];
n = o;
break;
}
if (n && a.label < n[2]) {
a.label = n[2];
a.ops.push(o);
break;
}
n[2] && a.ops.pop();
a.trys.pop();
continue;
}
o = e.call(t, a);
} catch (t) {
o = [ 6, t ];
r = 0;
} finally {
i = n = 0;
}
if (5 & o[0]) throw o[1];
return {
value: o[0] ? o[1] : void 0,
done: !0
};
}
}, o = this && this.__read || function(t, e) {
var i = "function" == typeof Symbol && t[Symbol.iterator];
if (!i) return t;
var r, n, o = i.call(t), a = [];
try {
for (;(void 0 === e || e-- > 0) && !(r = o.next()).done; ) a.push(r.value);
} catch (t) {
n = {
error: t
};
} finally {
try {
r && !r.done && (i = o.return) && i.call(o);
} finally {
if (n) throw n.error;
}
}
return a;
};
Object.defineProperty(i, "__esModule", {
value: !0
});
i.QUEUE_MAX_LENGTH = void 0;
var a = t("../GLFruitApp");
i.QUEUE_MAX_LENGTH = 6;
var u = function() {
function t() {
this._featureName = "GLFruitAddFruitChoiceList";
this.mainNextNode = null;
this.exchangeNextFruitClickNode = null;
this.nextQueueNodePosList = [];
this.realNextFruitPosList = [];
this.nextFruit = [];
this.hasInit = !1;
this.needInitNextFruits = !1;
this.hasInitNextFruits = !1;
}
t.getInstance = function() {
null == this._instance && (this._instance = new t());
return this._instance;
};
t.prototype.isOpen = function() {
return GL.Game.IsFeatureOpen(this._featureName);
};
t.prototype.init = function(t, e, i) {
return r(this, void 0, void 0, function() {
return n(this, function(r) {
switch (r.label) {
case 0:
return [ 4, this.initNewNextNode(t) ];

case 1:
r.sent();
return [ 4, this.initExchangeClickCapture(i) ];

case 2:
r.sent();
this.initQueueNodeList();
this.preCalcNextFruitPosition(e);
this.hasInit = !0;
this.needInitNextFruits && this.initNextFruits();
return [ 2 ];
}
});
});
};
t.prototype.initNewNextNode = function(t) {
return r(this, void 0, void 0, function() {
var e, i, r;
return n(this, function(n) {
switch (n.label) {
case 0:
if (null == t) return [ 2 ];
t.active = !1;
if (null == (e = t.parent)) return [ 2 ];
if (null != e.getChildByName("nodeNextNew")) {
this.mainNextNode = e.getChildByName("nodeNextNew");
this.initQueueNodeList();
return [ 2 ];
}
this.mainNextNode = null;
return [ 4, a.default.assetCtr.loadPrefab("assets/traits/GLFruitAddFruitChoiceList/prefabs/nodeNextNew") ];

case 1:
if (null == (i = n.sent())) return [ 2 ];
if (null == (r = cc.instantiate(i))) return [ 2 ];
r.name = "nodeNextNew";
r.setPosition(cc.v2(322, -197));
r.setParent(e);
this.mainNextNode = r;
return [ 2 ];
}
});
});
};
t.prototype.initExchangeClickCapture = function(t) {
return r(this, void 0, void 0, function() {
var e, i, r;
return n(this, function(n) {
switch (n.label) {
case 0:
if (null == t) return [ 2 ];
if (null == (e = t.parent)) return [ 2 ];
this.exchangeNextFruitClickNode = e.getChildByName("nodeExchangeNextFruit");
if (null != this.exchangeNextFruitClickNode) return [ 2 ];
this.exchangeNextFruitClickNode = null;
return [ 4, a.default.assetCtr.loadPrefab("assets/traits/GLFruitAddFruitChoiceList/prefabs/nodeExchangeNextFruit") ];

case 1:
if (null == (i = n.sent())) return [ 2 ];
if (null == (r = cc.instantiate(i))) return [ 2 ];
r.name = "nodeExchangeNextFruit";
cc.isValid(this.mainNextNode) && cc.isValid(this.mainNextNode.parent) && r.setPosition(cc.v2(e.getContentSize().width / 2, this.mainNextNode.parent.getPosition().y + this.mainNextNode.getPosition().y));
r.setParent(e);
this.exchangeNextFruitClickNode = r;
return [ 2 ];
}
});
});
};
t.prototype.getExchangeClickNode = function() {
return this.exchangeNextFruitClickNode;
};
t.prototype.showOrHideExchangeClickNode = function(t) {
null != this.exchangeNextFruitClickNode && (this.exchangeNextFruitClickNode.active = t);
};
t.prototype.initQueueNodeList = function() {
if (null != this.mainNextNode && cc.isValid(this.mainNextNode)) {
this.nextQueueNodePosList = [];
for (var t = 0; t < i.QUEUE_MAX_LENGTH; t++) {
var e = this.mainNextNode.getChildByName("pos" + (t + 1));
null != e && cc.isValid(e) && this.nextQueueNodePosList.push(e.getPosition());
}
}
};
t.prototype.preCalcNextFruitPosition = function(t) {
if (null != t && cc.isValid(t) && cc.isValid(this.mainNextNode) && cc.isValid(this.mainNextNode.parent)) {
this.realNextFruitPosList = [];
for (var e = 0 - t.getPosition().x + this.mainNextNode.parent.getPosition().x + this.mainNextNode.getPosition().x, i = 0 - t.getPosition().y + this.mainNextNode.parent.getPosition().y + this.mainNextNode.getPosition().y, r = 0; r < this.nextQueueNodePosList.length; r++) {
var n = this.nextQueueNodePosList[r], o = cc.v3(e + n.x, i + n.y, 0);
this.realNextFruitPosList.push(o);
}
}
};
t.prototype.initNextFruits = function() {
if (!this.hasInitNextFruits) {
this.needInitNextFruits = !0;
if (this.hasInit && null != this.realNextFruitPosList && null != this.nextFruit) {
for (var t = 0; t < i.QUEUE_MAX_LENGTH; t++) {
var e = this.realNextFruitPosList[t], r = this.nextFruit[t];
if (null == e || null == r) return;
if (r.getItem() && r.getItem().node && cc.isValid(r.getItem().node)) {
r.getItem().node.setPosition(e);
this.showUIEnterAnimation(r.getItem().node);
}
}
cc.isValid(this.mainNextNode) && this.showUIEnterAnimation(this.mainNextNode);
this.hasInitNextFruits = !0;
}
}
};
t.prototype.showUIEnterAnimation = function(t) {
if (null != t && cc.isValid(t)) {
var e = t.getPosition();
cc.tween(t).call(function() {
t.setPosition(cc.v2(e.x + 900, e.y));
t.active = !0;
}).to(.333, {
x: e.x,
y: e.y
}, {
easing: "easeOutCubic"
}).start();
}
};
t.prototype.getNextFruits = function() {
return this.nextFruit;
};
t.prototype.getNextFruitByIndex = function(t) {
return this.nextFruit[t];
};
t.prototype.setNextFruits = function(t) {
var e = this;
if (null != t && t.length > 0) {
this.nextFruit = [];
t.forEach(function(t) {
e.nextFruit.push(t);
});
}
};
t.prototype.pushNewNextFruit = function(t) {
null != t && this.nextFruit.push(t);
};
t.prototype.popNextFruit = function() {
return this.nextFruit.shift();
};
t.prototype.clearNextFruit = function() {
this.nextFruit.forEach(function(t) {
t.clear();
});
this.nextFruit = [];
};
t.prototype.playQueueForwardAnimation = function() {
for (var t, e, i = 0; i < this.nextFruit.length; i++) {
var r = this.nextFruit[i];
r && r.getItem() && r.getItem().node && cc.isValid(r.getItem().node) && cc.tween(r.getItem().node).delay(.066 * i).to(.333, {
x: (null === (e = null === (t = this.realNextFruitPosList) || void 0 === t ? void 0 : t[i]) || void 0 === e ? void 0 : e.x) || 0
}, {
easing: "easeOutQuint"
}).start();
}
};
t.prototype.showOrHideNextFruits = function(t) {
null != this.mainNextNode && cc.isValid(this.mainNextNode) && (this.mainNextNode.active = t);
null != this.nextFruit && this.nextFruit.forEach(function(e) {
e && e.getItem() && e.getItem().node && cc.isValid(e.getItem().node) && (e.getItem().node.active = t);
});
};
t.prototype.getNextFruitPositionByIndex = function(t) {
return null == this.realNextFruitPosList || t < 0 ? cc.Vec3.ZERO : this.realNextFruitPosList[t] || cc.Vec3.ZERO;
};
t.prototype.exchangeFruit = function(t) {
var e = this;
if (1 != this.isNodeSwallowEventActive()) {
this.setNodeSwallowEvent(!0);
var i = this.getNextFruitByIndex(t), r = this.getNextFruitByIndex(0);
if (null != i && null != r) if (i.getItem() && i.getItem().node && cc.isValid(i.getItem().node) && r.getItem() && r.getItem().node && cc.isValid(r.getItem().node)) {
var n = i.getItem().node.scale, a = r.getItem().node.scale;
cc.tween(i.getItem().node).to(.1666, {
scale: 1.25 * n
}, {
easing: "easeOutQuad"
}).to(.1666, {
scale: n
}, {
easing: "easeOutQuint"
}).start();
cc.tween(i.getItem().node).bezierTo(.333, cc.v2(this.getNextFruitPositionByIndex(t).x, this.getNextFruitPositionByIndex(t).y + 50), cc.v2(this.getNextFruitPositionByIndex(0).x, this.getNextFruitPositionByIndex(t).y + 50), cc.v2(this.getNextFruitPositionByIndex(0).x, this.getNextFruitPositionByIndex(0).y)).start();
cc.tween(r.getItem().node).delay(.066).to(.1666, {
scale: 1.25 * a
}, {
easing: "easeOutQuad"
}).to(.1666, {
scale: a
}, {
easing: "easeOutQuint"
}).start();
cc.tween(r.getItem().node).delay(.066).bezierTo(.333, cc.v2(this.getNextFruitPositionByIndex(0).x, this.getNextFruitPositionByIndex(0).y - 50), cc.v2(this.getNextFruitPositionByIndex(t).x, this.getNextFruitPositionByIndex(0).y - 50), cc.v2(this.getNextFruitPositionByIndex(t).x, this.getNextFruitPositionByIndex(t).y)).call(function() {
var i;
i = o([ e.nextFruit[t], e.nextFruit[0] ], 2), e.nextFruit[0] = i[0], e.nextFruit[t] = i[1];
e.setNodeSwallowEvent(!1);
}).start();
} else this.setNodeSwallowEvent(!1); else this.setNodeSwallowEvent(!1);
}
};
t.prototype.setNodeSwallowEvent = function(t) {
var e = a.default.gameStateCtr.getGameView();
cc.isValid(e) && cc.isValid(e.getNodeSwallowEvent()) && (e.getNodeSwallowEvent().active = t);
};
t.prototype.isNodeSwallowEventActive = function() {
var t = a.default.gameStateCtr.getGameView();
return !(!cc.isValid(t) || !cc.isValid(t.getNodeSwallowEvent())) && t.getNodeSwallowEvent().active;
};
t._instance = null;
return t;
}();
i.default = u;
cc._RF.pop();
}, {
"../GLFruitApp": "GLFruitApp"
} ],
GLFruitAddShakeItemOnMergeXiguaTraitCtrl: [ function(t, e, i) {
"use strict";
cc._RF.push(e, "76121kKl1tFqKo2H709xZtI", "GLFruitAddShakeItemOnMergeXiguaTraitCtrl");
Object.defineProperty(i, "__esModule", {
value: !0
});
var r = t("../defines/GLFruitDefine"), n = t("../GLFruitApp"), o = function() {
function t() {
this._featureName = "GLFruitAddShakeItemOnMergeXigua";
this.debugParamNum = r.GLFruitDefine.MaxFruitId - 1;
}
t.getInstance = function() {
null == this._instance && (this._instance = new t());
return this._instance;
};
t.prototype.isOpen = function() {
return GL.Game.IsFeatureOpen(this._featureName);
};
t.prototype.getRecordDate = function() {
var t = cc.sys.localStorage.getItem("GLFruitAddShakeItemOnMergeXiguaDate");
return null == t ? "" : t;
};
t.prototype.saveDate = function(t) {
cc.sys.localStorage.setItem("GLFruitAddShakeItemOnMergeXiguaDate", t);
};
t.prototype.getCurDateStr = function() {
var t = new Date();
return null == t ? "" : t.getFullYear() + "-" + (t.getMonth() + 1) + "-" + t.getDate();
};
t.prototype.onMerge = function(t) {
if (t == r.GLFruitDefine.MaxFruitId - 1) {
var e = this.getCurDateStr();
if (e != this.getRecordDate()) {
this.saveDate(e);
this.addShakeItem();
}
}
};
t.prototype.addShakeItem = function() {
var t;
null === (t = null === n.default || void 0 === n.default ? void 0 : n.default.propCtr) || void 0 === t || t.getProp(r.GLFruitPropIdDefine.Shake).add(1);
};
t.prototype.debugParamPlus = function() {};
t.prototype.debugParamDecrease = function() {};
t._instance = null;
return t;
}();
i.default = o;
cc._RF.pop();
}, {
"../GLFruitApp": "GLFruitApp",
"../defines/GLFruitDefine": "GLFruitDefine"
} ],
GLFruitAppAssetsLoader: [ function(t, e, i) {
"use strict";
cc._RF.push(e, "6798dPU3odJkJ+bEhs2mA8h", "GLFruitAppAssetsLoader");
var r, n = this && this.__extends || (r = function(t, e) {
return (r = Object.setPrototypeOf || {
__proto__: []
} instanceof Array && function(t, e) {
t.__proto__ = e;
} || function(t, e) {
for (var i in e) Object.prototype.hasOwnProperty.call(e, i) && (t[i] = e[i]);
})(t, e);
}, function(t, e) {
r(t, e);
function i() {
this.constructor = t;
}
t.prototype = null === e ? Object.create(e) : (i.prototype = e.prototype, new i());
}), o = this && this.__decorate || function(t, e, i, r) {
var n, o = arguments.length, a = o < 3 ? e : null === r ? r = Object.getOwnPropertyDescriptor(e, i) : r;
if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) a = Reflect.decorate(t, e, i, r); else for (var u = t.length - 1; u >= 0; u--) (n = t[u]) && (a = (o < 3 ? n(a) : o > 3 ? n(e, i, a) : n(e, i)) || a);
return o > 3 && a && Object.defineProperty(e, i, a), a;
};
Object.defineProperty(i, "__esModule", {
value: !0
});
var a = cc._decorator, u = a.ccclass, s = a.property, l = function(t) {
n(e, t);
function e() {
var e = null !== t && t.apply(this, arguments) || this;
e.prafabFruits = [];
e.fruitConfig = null;
e.physicsConfig = null;
e.prefabGLFruitDropLineDotItem = null;
e.prefabGLFruitComboItem = null;
e.prefabMergeNew_fx_B = null;
e.prefabHsFruitMerge_Click_fx_01_B = null;
e.prefabLose_hint_fx = null;
e.prefabMiaozhun = null;
e.boardFullPanel = null;
e.magneticAttractionSpine = null;
return e;
}
o([ s(cc.Prefab) ], e.prototype, "prafabFruits", void 0);
o([ s(cc.JsonAsset) ], e.prototype, "fruitConfig", void 0);
o([ s(cc.JsonAsset) ], e.prototype, "physicsConfig", void 0);
o([ s(cc.Prefab) ], e.prototype, "prefabGLFruitDropLineDotItem", void 0);
o([ s(cc.Prefab) ], e.prototype, "prefabGLFruitComboItem", void 0);
o([ s(cc.Prefab) ], e.prototype, "prefabMergeNew_fx_B", void 0);
o([ s(cc.Prefab) ], e.prototype, "prefabHsFruitMerge_Click_fx_01_B", void 0);
o([ s(cc.Prefab) ], e.prototype, "prefabLose_hint_fx", void 0);
o([ s(cc.Prefab) ], e.prototype, "prefabMiaozhun", void 0);
o([ s(cc.Prefab) ], e.prototype, "boardFullPanel", void 0);
return o([ u ], e);
}(cc.Component);
i.default = l;
cc._RF.pop();
}, {} ],
GLFruitApp: [ function(t, e, i) {
"use strict";
cc._RF.push(e, "053c9xoSRtP0KJH4dlL58cX", "GLFruitApp");
var r, n, o = this && this.__extends || (r = function(t, e) {
return (r = Object.setPrototypeOf || {
__proto__: []
} instanceof Array && function(t, e) {
t.__proto__ = e;
} || function(t, e) {
for (var i in e) Object.prototype.hasOwnProperty.call(e, i) && (t[i] = e[i]);
})(t, e);
}, function(t, e) {
r(t, e);
function i() {
this.constructor = t;
}
t.prototype = null === e ? Object.create(e) : (i.prototype = e.prototype, new i());
}), a = this && this.__decorate || function(t, e, i, r) {
var n, o = arguments.length, a = o < 3 ? e : null === r ? r = Object.getOwnPropertyDescriptor(e, i) : r;
if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) a = Reflect.decorate(t, e, i, r); else for (var u = t.length - 1; u >= 0; u--) (n = t[u]) && (a = (o < 3 ? n(a) : o > 3 ? n(e, i, a) : n(e, i)) || a);
return o > 3 && a && Object.defineProperty(e, i, a), a;
}, u = this && this.__awaiter || function(t, e, i, r) {
return new (i || (i = Promise))(function(n, o) {
function a(t) {
try {
s(r.next(t));
} catch (t) {
o(t);
}
}
function u(t) {
try {
s(r.throw(t));
} catch (t) {
o(t);
}
}
function s(t) {
t.done ? n(t.value) : (e = t.value, e instanceof i ? e : new i(function(t) {
t(e);
})).then(a, u);
var e;
}
s((r = r.apply(t, e || [])).next());
});
}, s = this && this.__generator || function(t, e) {
var i, r, n, o, a = {
label: 0,
sent: function() {
if (1 & n[0]) throw n[1];
return n[1];
},
trys: [],
ops: []
};
return o = {
next: u(0),
throw: u(1),
return: u(2)
}, "function" == typeof Symbol && (o[Symbol.iterator] = function() {
return this;
}), o;
function u(t) {
return function(e) {
return s([ t, e ]);
};
}
function s(o) {
if (i) throw new TypeError("Generator is already executing.");
for (;a; ) try {
if (i = 1, r && (n = 2 & o[0] ? r.return : o[0] ? r.throw || ((n = r.return) && n.call(r), 
0) : r.next) && !(n = n.call(r, o[1])).done) return n;
(r = 0, n) && (o = [ 2 & o[0], n.value ]);
switch (o[0]) {
case 0:
case 1:
n = o;
break;

case 4:
a.label++;
return {
value: o[1],
done: !1
};

case 5:
a.label++;
r = o[1];
o = [ 0 ];
continue;

case 7:
o = a.ops.pop();
a.trys.pop();
continue;

default:
if (!(n = a.trys, n = n.length > 0 && n[n.length - 1]) && (6 === o[0] || 2 === o[0])) {
a = 0;
continue;
}
if (3 === o[0] && (!n || o[1] > n[0] && o[1] < n[3])) {
a.label = o[1];
break;
}
if (6 === o[0] && a.label < n[1]) {
a.label = n[1];
n = o;
break;
}
if (n && a.label < n[2]) {
a.label = n[2];
a.ops.push(o);
break;
}
n[2] && a.ops.pop();
a.trys.pop();
continue;
}
o = e.call(t, a);
} catch (t) {
o = [ 6, t ];
r = 0;
} finally {
i = n = 0;
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
var l = t("../../../gl_hall/script/hall/GlBaseScene"), c = null === (n = null === window || void 0 === window ? void 0 : window._GLHallClassMap_) || void 0 === n ? void 0 : n.GLHallControllerClass, d = t("../../../gl_hall/script/HallFeature"), p = t("../core/GLFruitAssetCtr"), f = t("../core/GLFruitAudioMgr"), h = t("../core/GLFruitDynamicAccumCtr"), g = t("../core/GLFruitInstance"), F = t("../core/GLFruitObjectPoolCtr"), y = t("../core/GLFruitTimerMgr"), v = t("./ctrs/GLFruitAdCtr"), m = t("./ctrs/GLFruitComboCtr"), _ = t("./ctrs/GLFruitConfigCtr"), L = t("./ctrs/GLFruitEffectCtr"), C = t("./ctrs/GLFruitFailZoneCtr"), S = t("./ctrs/GLFruitGameStateCtr"), G = t("./ctrs/GLFruitMergerCtr"), w = t("./ctrs/GLFruitMergerWellDoneCtr"), b = t("./ctrs/GLFruitPhysicsConfigCtr"), P = t("./ctrs/GLFruitPlacePreviewCtr"), D = t("./ctrs/GLFruitPopupCtr"), I = t("./ctrs/GLFruitPropCtr"), N = t("./ctrs/GLFruitRoundCtr"), T = t("./experiment/GLFruitExperimentCtr"), O = t("./GFruitUser"), A = t("./GLFruitAppAssetsLoader"), R = t("./GLFruitRoundLogEventCtr"), E = t("./guide/GLFruitGuideCtr"), x = t("./ui/GLFruitSpecialColliderRule"), M = t("./FruitFeature"), k = t("./traits/GLFruitRepeatFruitAwardTraitCtrl"), B = t("./traits/GLFruitAddShakeItemOnMergeXiguaTraitCtrl"), V = t("./traits/GLFruitHaveFruitStartTraitCtrl"), W = t("./traits/GLFruitTwoFruitOnceTraitCtrl"), j = t("../../../gl_hall/script/traits/GLGameAdStrategyOptimizeTraitCtrl"), U = t("./traits/GLFruitGongzhengTraitCtrl"), H = t("./traits/GLFruitFaceNotRotateTraitCtrl"), z = t("./ui/GLFruitShadowTips"), Z = t("./traits/GLFruitChangeScaleTraitCtrl"), K = t("./ctrs/FruitDeadEndShakePopupCtrl"), X = t("./ctrs/FruitAutoShakeOnDangerCtrl"), Y = t("../../../gl_hall/script/func/CampaignGuideMiniGameCtrl"), J = cc._decorator, Q = J.ccclass, q = (J.property, 
function(t) {
o(e, t);
function e() {
return null !== t && t.apply(this, arguments) || this;
}
i = e;
e.prototype.onLoad = function() {
return u(this, void 0, void 0, function() {
return s(this, function(e) {
switch (e.label) {
case 0:
t.prototype.onLoad.call(this);
i.isGameExited = !1;
i.Instance = this;
i.gameStartTime = Date.now();
i.isKeyEnabled = !1;
i.assetCtr = g.default.get(p.default);
i.poolCtr = g.default.get(F.default);
i.timeCtr = g.default.get(y.default);
i.audioMgr = g.default.get(f.default);
i.dynamicAccumCtr = g.default.get(h.default);
i.mergerCtr = g.default.get(G.default);
i.gameStateCtr = g.default.get(S.default);
i.fruitConfigCtr = g.default.get(_.default);
i.physicsConfigCtr = g.default.get(b.default);
i.effectCtr = g.default.get(L.default);
i.failZoneCtr = g.default.get(C.default);
i.propCtr = g.default.get(I.default);
i.comboCtr = g.default.get(m.default);
i.guideCtr = g.default.get(E.default);
i.placePreviewCtr = g.default.get(P.default);
i.user = g.default.get(O.default);
i.popupCtr = g.default.get(D.default);
i.mergerWellDoneCtr = g.default.get(w.default);
i.adCtr = g.default.get(v.default);
i.roundCtr = g.default.get(N.default);
i.experimentCtr = g.default.get(T.default);
cc.systemEvent.on(cc.SystemEvent.EventType.KEY_DOWN, this.onKeyDown, this);
i.assetsLoader = this.node.getComponent(A.default);
i.EnablePhysicsWorld();
i.user.loadData();
R.default.getInstance().loadData();
i.gameStateCtr.init();
i.experimentCtr.init();
this.initFruitSpecialColliderRule();
this.initFruitShadowTips();
W.default.getInstance().isOpen() && W.default.getInstance().init();
return H.default.getInstance().isOpen() ? [ 4, H.default.getInstance().init() ] : [ 3, 2 ];

case 1:
e.sent();
e.label = 2;

case 2:
return [ 4, i.assetCtr.initBundle() ];

case 3:
e.sent();
Z.default.getInstance().isOpen() && Z.default.getInstance().initScaleRateConfig();
return M.default.isOpen(M.FruitFeat.FruitPreviewPlace) ? [ 4, i.placePreviewCtr.init() ] : [ 3, 5 ];

case 4:
e.sent();
e.label = 5;

case 5:
i.gameStateCtr.runLoadState();
cc.game.on(cc.game.EVENT_HIDE, this.onAppHide, this);
i.adCtr.setLastShowInsertAdTime();
i.roundCtr.init(i.user.getDataVo().roundDataVo);
i.timeCtr.add(1, this.updatePerSecond.bind(this));
i.timeCtr.add(2, this.updatePerTwoSeconds.bind(this));
i.isReplay = !1;
j.default.getInstance().isOpen() && j.default.getInstance().onEnterGame("gl_fruit");
U.default.getInstance().isOpen() && U.default.getInstance().init();
Y.default.isOpen() && Y.default.getInstance();
return [ 2 ];
}
});
});
};
e.prototype.onKeyDown = function(t) {
var e;
if (!i.isKeyEnabled) {
if (!(Date.now() - i.gameStartTime >= i.keyDelayTime)) return;
i.isKeyEnabled = !0;
}
switch (t.keyCode) {
case cc.macro.KEY.back:
case cc.macro.KEY.left:
var r = function() {
var t;
null === (t = i.adCtr) || void 0 === t || t.resetAutoShowTimer();
i.ExitGame(GL.Const.ExitGameType.FromGameMain);
}, n = function() {
var t, e, n;
if (d.default.isOpen(d.HallFeat.HallNotShowResultView)) r(); else if (null === (t = i.gameStateCtr) || void 0 === t ? void 0 : t.isFialState()) {
if (!(null === (e = null === GL || void 0 === GL ? void 0 : GL.gamelobby) || void 0 === e ? void 0 : e.isTraitActive("MiniGamePhysicsBackUnifiedTrait")) && cc.sys.os != cc.sys.OS_IOS) {
var o = null === (n = null == c ? void 0 : c.getInstance()) || void 0 === n ? void 0 : n.getSceneParentNode();
cc.isValid(o) && o.children.some(function(t) {
return t.getComponent("UIResultView") || t.getComponent("UIResultView2") || t.getComponent("UIResultView3");
}) && r();
}
} else r();
};
(null === (e = null === GL || void 0 === GL ? void 0 : GL.gamelobby) || void 0 === e ? void 0 : e.isTraitActive("MiniGamePhysicsBackUnifiedTrait")) || cc.sys.os == cc.sys.OS_IOS ? n() : GL.Game.openMiniGameQuitGameConfirm(null, n);
break;

case cc.macro.KEY.up:
B.default.getInstance().isOpen() && B.default.getInstance().debugParamPlus();
break;

case cc.macro.KEY.down:
}
};
e.prototype.autoSave = function() {
i.gameStateCtr.isPlaySatte() && i.user.saveData();
};
e.prototype.update = function(t) {
i.timeCtr.tick(t);
i.dynamicAccumCtr.tick(t);
i.failZoneCtr.tick(t);
i.placePreviewCtr && i.placePreviewCtr.update(t);
};
e.prototype.updatePerSecond = function() {
i.roundCtr.updatePerSecond();
i.mergerCtr.updatePerSecond();
i.adCtr.updatePerSecond();
};
e.prototype.updatePerTwoSeconds = function() {
this.autoSave();
};
e.EnablePhysicsWorld = function() {
var t = cc.director.getPhysicsManager();
t.enabled = !0;
t.gravity = cc.v2(0, -800);
};
e.DisablePhysicsWorld = function() {
var t = cc.director.getPhysicsManager();
t.enabled = !1;
t.debugDrawFlags = 0;
};
e.Restart = function() {
var t = i.isReplay;
i.Clear();
i.user.again();
i.user.saveData(!0);
i.user.syncGameData();
i.gameStateCtr.runPlayState();
R.default.getInstance().resetData();
i.gameStartTime = Date.now();
i.isKeyEnabled = !1;
k.default.getInstance().isOpen() && k.default.getInstance().restart();
t && W.default.getInstance().isOpen() && W.default.getInstance().onRestart();
};
e.NewGame = function() {};
e.Clear = function() {
var t, e, r, n, o, a;
K.default.getInstance().clear();
X.default.getInstance().clear();
null === (t = i.comboCtr) || void 0 === t || t.clear();
null === (e = i.effectCtr) || void 0 === e || e.clear();
null === (r = i.mergerCtr) || void 0 === r || r.clear();
null === (n = i.mergerWellDoneCtr) || void 0 === n || n.clear();
null === (o = i.popupCtr) || void 0 === o || o.clear();
null === (a = i.adCtr) || void 0 === a || a.clear();
V.default.getInstance().isOpen() && V.default.getInstance().clear();
W.default.getInstance().isOpen() && W.default.getInstance().clear();
i.placePreviewCtr && i.placePreviewCtr.cleanup();
};
e.ExitGame = function(t) {
var e, r, n, o, a, u;
i.isGameExited = !0;
null === (e = i.timeCtr) || void 0 === e || e.clear();
null === (r = i.dynamicAccumCtr) || void 0 === r || r.clear();
null === (n = i.audioMgr) || void 0 === n || n.playEffectBtnExit();
i.DisablePhysicsWorld();
i.Clear();
null === (o = i.propCtr) || void 0 === o || o.clear();
null === (a = i.poolCtr) || void 0 === a || a.clearAllPools();
g.default.Clear();
null === (u = i.experimentCtr) || void 0 === u || u.clear();
null == c || c.Exit(t);
};
e.SafeNextFrame = function(t) {
cc.director.once(cc.Director.EVENT_AFTER_UPDATE, function() {
i.isGameExited || t();
});
};
e.prototype.onDestroy = function() {
t.prototype.onDestroy.call(this);
cc.game.off(cc.game.EVENT_HIDE, this.onAppHide, this);
cc.systemEvent.off(cc.SystemEvent.EventType.KEY_DOWN, this.onKeyDown, this);
};
e.prototype.onAppHide = function() {
console.log("应用进入后台");
i.user.saveData();
i.user.syncGameData();
};
e.isExited = function() {
return i.isGameExited;
};
e.setKeyDelayTime = function(t) {
i.keyDelayTime = t;
};
e.isKeyInputEnabled = function() {
return i.isKeyEnabled;
};
e.enableKeyInput = function() {
i.isKeyEnabled = !0;
};
e.prototype.initFruitSpecialColliderRule = function() {
if (M.default.isOpen(M.FruitFeat.FruitSpecialColliderRule)) {
var t = i.gameStateCtr.getGameView();
t && t.node ? t.node.getComponent(x.default) ? console.log("[GLFruitApp] GLFruitSpecialColliderRule component already exists") : t.node.addComponent(x.default) ? console.log("[GLFruitApp] GLFruitSpecialColliderRule component added successfully") : console.error("[GLFruitApp] Failed to add GLFruitSpecialColliderRule component") : console.warn("[GLFruitApp] GLFruitGameView not found, cannot add GLFruitSpecialColliderRule component");
}
};
e.prototype.initFruitShadowTips = function() {
if (M.default.isOpen(M.FruitFeat.FruitShadowTips)) {
var t = i.gameStateCtr.getGameView();
if (t && t.node) {
var e = t.node.getChildByName("nodeDropLine");
e ? e.getComponent(z.default) ? console.log("[GLFruitApp] GLFruitShadowTips component already exists on nodeDropLine") : e.addComponent(z.default) ? console.log("[GLFruitApp] GLFruitShadowTips component added successfully to nodeDropLine") : console.error("[GLFruitApp] Failed to add GLFruitShadowTips component to nodeDropLine") : console.warn("[GLFruitApp] nodeDropLine not found, cannot add GLFruitShadowTips component");
} else console.warn("[GLFruitApp] GLFruitGameView not found, cannot add GLFruitShadowTips component");
}
};
e.prototype.getSavedOperationDurationGameSubtype = function() {
return String(GL.ExtractTool.configKey.HsFruit || 1);
};
e.prototype.onSendGGameStartEvent = function() {
var t, e, r = i.user.getDataVo(), n = null != r.recordPlayData && "" !== r.recordPlayData && !r.hasLost && !r.isBeginner, o = "";
if (n) {
o = "half_complete";
var a = window.GL;
if (null === (t = null == a ? void 0 : a.gamelobby) || void 0 === t ? void 0 : t.isChapterFusionMode()) {
var u = i.user.getScore(), s = (null === (e = a.gamelobby) || void 0 === e ? void 0 : e.getStorageValue("ChapterMiniGameFusionTarget", 0)) || 0;
s > 0 && (o = u >= s ? "1" : (u / s).toFixed(3));
}
}
this.sendGGameStartEvent(r.gameNum, GL.ExtractTool.configKey.HsFruit || 1, n, n ? {
saved_operation_steps: r.stepMoves || 0,
saved_minigame_progress: o
} : void 0);
};
var i;
e.BundleNanme = "gl_fruit";
e.assetCtr = null;
e.poolCtr = null;
e.timeCtr = null;
e.audioMgr = null;
e.dynamicAccumCtr = null;
e.mergerCtr = null;
e.gameStateCtr = null;
e.fruitConfigCtr = null;
e.physicsConfigCtr = null;
e.effectCtr = null;
e.failZoneCtr = null;
e.propCtr = null;
e.placePreviewCtr = null;
e.comboCtr = null;
e.guideCtr = null;
e.user = null;
e.popupCtr = null;
e.mergerWellDoneCtr = null;
e.adCtr = null;
e.roundCtr = null;
e.isGameExited = !1;
e.assetsLoader = null;
e.keyDelayTime = 1e3;
e.gameStartTime = 0;
e.isKeyEnabled = !1;
e.experimentCtr = null;
e.Instance = null;
e.isReplay = !1;
return i = a([ Q ], e);
}(l.default));
i.default = q;
cc._RF.pop();
}, {
"../../../gl_hall/script/HallFeature": void 0,
"../../../gl_hall/script/func/CampaignGuideMiniGameCtrl": void 0,
"../../../gl_hall/script/hall/GlBaseScene": void 0,
"../../../gl_hall/script/traits/GLGameAdStrategyOptimizeTraitCtrl": void 0,
"../core/GLFruitAssetCtr": "GLFruitAssetCtr",
"../core/GLFruitAudioMgr": "GLFruitAudioMgr",
"../core/GLFruitDynamicAccumCtr": "GLFruitDynamicAccumCtr",
"../core/GLFruitInstance": "GLFruitInstance",
"../core/GLFruitObjectPoolCtr": "GLFruitObjectPoolCtr",
"../core/GLFruitTimerMgr": "GLFruitTimerMgr",
"./FruitFeature": "FruitFeature",
"./GFruitUser": "GFruitUser",
"./GLFruitAppAssetsLoader": "GLFruitAppAssetsLoader",
"./GLFruitRoundLogEventCtr": "GLFruitRoundLogEventCtr",
"./ctrs/FruitAutoShakeOnDangerCtrl": "FruitAutoShakeOnDangerCtrl",
"./ctrs/FruitDeadEndShakePopupCtrl": "FruitDeadEndShakePopupCtrl",
"./ctrs/GLFruitAdCtr": "GLFruitAdCtr",
"./ctrs/GLFruitComboCtr": "GLFruitComboCtr",
"./ctrs/GLFruitConfigCtr": "GLFruitConfigCtr",
"./ctrs/GLFruitEffectCtr": "GLFruitEffectCtr",
"./ctrs/GLFruitFailZoneCtr": "GLFruitFailZoneCtr",
"./ctrs/GLFruitGameStateCtr": "GLFruitGameStateCtr",
"./ctrs/GLFruitMergerCtr": "GLFruitMergerCtr",
"./ctrs/GLFruitMergerWellDoneCtr": "GLFruitMergerWellDoneCtr",
"./ctrs/GLFruitPhysicsConfigCtr": "GLFruitPhysicsConfigCtr",
"./ctrs/GLFruitPlacePreviewCtr": "GLFruitPlacePreviewCtr",
"./ctrs/GLFruitPopupCtr": "GLFruitPopupCtr",
"./ctrs/GLFruitPropCtr": "GLFruitPropCtr",
"./ctrs/GLFruitRoundCtr": "GLFruitRoundCtr",
"./experiment/GLFruitExperimentCtr": "GLFruitExperimentCtr",
"./guide/GLFruitGuideCtr": "GLFruitGuideCtr",
"./traits/GLFruitAddShakeItemOnMergeXiguaTraitCtrl": "GLFruitAddShakeItemOnMergeXiguaTraitCtrl",
"./traits/GLFruitChangeScaleTraitCtrl": "GLFruitChangeScaleTraitCtrl",
"./traits/GLFruitFaceNotRotateTraitCtrl": "GLFruitFaceNotRotateTraitCtrl",
"./traits/GLFruitGongzhengTraitCtrl": "GLFruitGongzhengTraitCtrl",
"./traits/GLFruitHaveFruitStartTraitCtrl": "GLFruitHaveFruitStartTraitCtrl",
"./traits/GLFruitRepeatFruitAwardTraitCtrl": "GLFruitRepeatFruitAwardTraitCtrl",
"./traits/GLFruitTwoFruitOnceTraitCtrl": "GLFruitTwoFruitOnceTraitCtrl",
"./ui/GLFruitShadowTips": "GLFruitShadowTips",
"./ui/GLFruitSpecialColliderRule": "GLFruitSpecialColliderRule"
} ],
GLFruitAssetCtr: [ function(t, e, i) {
"use strict";
cc._RF.push(e, "f219fHCHVNCUJ3ZjIxyy8Wh", "GLFruitAssetCtr");
var r = this && this.__awaiter || function(t, e, i, r) {
return new (i || (i = Promise))(function(n, o) {
function a(t) {
try {
s(r.next(t));
} catch (t) {
o(t);
}
}
function u(t) {
try {
s(r.throw(t));
} catch (t) {
o(t);
}
}
function s(t) {
t.done ? n(t.value) : (e = t.value, e instanceof i ? e : new i(function(t) {
t(e);
})).then(a, u);
var e;
}
s((r = r.apply(t, e || [])).next());
});
}, n = this && this.__generator || function(t, e) {
var i, r, n, o, a = {
label: 0,
sent: function() {
if (1 & n[0]) throw n[1];
return n[1];
},
trys: [],
ops: []
};
return o = {
next: u(0),
throw: u(1),
return: u(2)
}, "function" == typeof Symbol && (o[Symbol.iterator] = function() {
return this;
}), o;
function u(t) {
return function(e) {
return s([ t, e ]);
};
}
function s(o) {
if (i) throw new TypeError("Generator is already executing.");
for (;a; ) try {
if (i = 1, r && (n = 2 & o[0] ? r.return : o[0] ? r.throw || ((n = r.return) && n.call(r), 
0) : r.next) && !(n = n.call(r, o[1])).done) return n;
(r = 0, n) && (o = [ 2 & o[0], n.value ]);
switch (o[0]) {
case 0:
case 1:
n = o;
break;

case 4:
a.label++;
return {
value: o[1],
done: !1
};

case 5:
a.label++;
r = o[1];
o = [ 0 ];
continue;

case 7:
o = a.ops.pop();
a.trys.pop();
continue;

default:
if (!(n = a.trys, n = n.length > 0 && n[n.length - 1]) && (6 === o[0] || 2 === o[0])) {
a = 0;
continue;
}
if (3 === o[0] && (!n || o[1] > n[0] && o[1] < n[3])) {
a.label = o[1];
break;
}
if (6 === o[0] && a.label < n[1]) {
a.label = n[1];
n = o;
break;
}
if (n && a.label < n[2]) {
a.label = n[2];
a.ops.push(o);
break;
}
n[2] && a.ops.pop();
a.trys.pop();
continue;
}
o = e.call(t, a);
} catch (t) {
o = [ 6, t ];
r = 0;
} finally {
i = n = 0;
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
var o = t("../logic/GLFruitApp"), a = function() {
function t() {
this.mainBundle = null;
}
t.SplitString = function(t) {
var e = t.indexOf("/");
return -1 === e ? [ t, "" ] : [ t.slice(0, e), t.slice(e + 1) ];
};
t.prototype.load = function(t, e) {
return r(this, void 0, Promise, function() {
var i = this;
return n(this, function() {
return [ 2, new Promise(function(r) {
var n, o = i.mainBundle;
if (null == o) {
var a = window.GL;
if (null === (n = null == a ? void 0 : a.gamelobby) || void 0 === n ? void 0 : n.getRemoteBundleBaseUrl) {
var u = a.gamelobby.getRemoteBundleBaseUrl("gl_fruit");
cc.assetManager.loadBundle(u, function(n, o) {
if (n) r(null); else {
i.mainBundle = o;
o.load(t, e, function(t, e) {
r(t ? null : e);
});
}
});
} else r(null);
} else {
var s = o.get(t, e);
s ? r(s) : o.load(t, e, function(e, i) {
if (e) {
r(null);
console.error("资源加载失败:", e.message, t);
} else r(i);
});
}
}) ];
});
});
};
t.prototype.loadPrefab = function(t) {
return r(this, void 0, Promise, function() {
return n(this, function(e) {
switch (e.label) {
case 0:
return [ 4, this.load(t, cc.Prefab) ];

case 1:
return [ 2, e.sent() ];
}
});
});
};
t.prototype.loadJson = function(t) {
return r(this, void 0, Promise, function() {
return n(this, function(e) {
switch (e.label) {
case 0:
return [ 4, this.load(t, cc.JsonAsset) ];

case 1:
return [ 2, e.sent() ];
}
});
});
};
t.prototype.loadText = function(t) {
return r(this, void 0, Promise, function() {
return n(this, function(e) {
switch (e.label) {
case 0:
return [ 4, this.load(t, cc.TextAsset) ];

case 1:
return [ 2, e.sent() ];
}
});
});
};
t.prototype.loadSpriteFrame = function(t) {
return r(this, void 0, Promise, function() {
return n(this, function(e) {
switch (e.label) {
case 0:
return [ 4, this.load(t, cc.SpriteFrame) ];

case 1:
return [ 2, e.sent() ];
}
});
});
};
t.prototype.loadAudioClip = function(t) {
return r(this, void 0, Promise, function() {
return n(this, function(e) {
switch (e.label) {
case 0:
return [ 4, this.load(t, cc.AudioClip) ];

case 1:
return [ 2, e.sent() ];
}
});
});
};
t.prototype.loadSpriteAtlas = function(t) {
return r(this, void 0, Promise, function() {
return n(this, function(e) {
switch (e.label) {
case 0:
return [ 4, this.load(t, cc.SpriteAtlas) ];

case 1:
return [ 2, e.sent() ];
}
});
});
};
t.prototype.loadBundle = function(t) {
return r(this, void 0, void 0, function() {
var e = this;
return n(this, function() {
return [ 2, new Promise(function(i) {
cc.assetManager.loadBundle(t, function(t, r) {
if (t) i(null); else {
e.mainBundle = r;
i(r);
}
});
}) ];
});
});
};
t.prototype.initBundle = function() {
var t;
return r(this, void 0, void 0, function() {
var e, i;
return n(this, function(r) {
switch (r.label) {
case 0:
this.mainBundle = cc.assetManager.getBundle(o.default.BundleNanme);
if (this.mainBundle) return [ 3, 2 ];
e = o.default.BundleNanme;
i = window.GL;
(null === (t = null == i ? void 0 : i.gamelobby) || void 0 === t ? void 0 : t.getRemoteBundleBaseUrl) && (e = i.gamelobby.getRemoteBundleBaseUrl(e));
return [ 4, o.default.assetCtr.loadBundle(e) ];

case 1:
r.sent();
r.label = 2;

case 2:
return [ 2 ];
}
});
});
};
t.IsBundleMode = !1;
return t;
}();
i.default = a;
cc._RF.pop();
}, {
"../logic/GLFruitApp": "GLFruitApp"
} ],
GLFruitAudioMgr: [ function(t, e, i) {
"use strict";
cc._RF.push(e, "a020eQ1GdtMiaguY9S+IrBW", "GLFruitAudioMgr");
var r = this && this.__awaiter || function(t, e, i, r) {
return new (i || (i = Promise))(function(n, o) {
function a(t) {
try {
s(r.next(t));
} catch (t) {
o(t);
}
}
function u(t) {
try {
s(r.throw(t));
} catch (t) {
o(t);
}
}
function s(t) {
t.done ? n(t.value) : (e = t.value, e instanceof i ? e : new i(function(t) {
t(e);
})).then(a, u);
var e;
}
s((r = r.apply(t, e || [])).next());
});
}, n = this && this.__generator || function(t, e) {
var i, r, n, o, a = {
label: 0,
sent: function() {
if (1 & n[0]) throw n[1];
return n[1];
},
trys: [],
ops: []
};
return o = {
next: u(0),
throw: u(1),
return: u(2)
}, "function" == typeof Symbol && (o[Symbol.iterator] = function() {
return this;
}), o;
function u(t) {
return function(e) {
return s([ t, e ]);
};
}
function s(o) {
if (i) throw new TypeError("Generator is already executing.");
for (;a; ) try {
if (i = 1, r && (n = 2 & o[0] ? r.return : o[0] ? r.throw || ((n = r.return) && n.call(r), 
0) : r.next) && !(n = n.call(r, o[1])).done) return n;
(r = 0, n) && (o = [ 2 & o[0], n.value ]);
switch (o[0]) {
case 0:
case 1:
n = o;
break;

case 4:
a.label++;
return {
value: o[1],
done: !1
};

case 5:
a.label++;
r = o[1];
o = [ 0 ];
continue;

case 7:
o = a.ops.pop();
a.trys.pop();
continue;

default:
if (!(n = a.trys, n = n.length > 0 && n[n.length - 1]) && (6 === o[0] || 2 === o[0])) {
a = 0;
continue;
}
if (3 === o[0] && (!n || o[1] > n[0] && o[1] < n[3])) {
a.label = o[1];
break;
}
if (6 === o[0] && a.label < n[1]) {
a.label = n[1];
n = o;
break;
}
if (n && a.label < n[2]) {
a.label = n[2];
a.ops.push(o);
break;
}
n[2] && a.ops.pop();
a.trys.pop();
continue;
}
o = e.call(t, a);
} catch (t) {
o = [ 6, t ];
r = 0;
} finally {
i = n = 0;
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
var o = t("../logic/GLFruitApp"), a = function() {
function t() {}
t.prototype.playEffectByClip = function(t, e) {
void 0 === e && (e = 0);
return cc.audioEngine.playEffect(t, 1 == e);
};
t.prototype.stopEffect = function(t) {
t && t > 0 && cc.audioEngine.stopEffect(t);
};
t.prototype.playBgByClip = function(t) {
cc.audioEngine.playMusic(t, !0);
};
t.prototype.playEffect = function(t, e) {
void 0 === e && (e = 0);
return r(this, void 0, void 0, function() {
return n(this, function() {
GL.Audio.playEffect("assets/audios/" + t, o.default.BundleNanme);
return [ 2 ];
});
});
};
t.prototype.playBg = function(t) {
return r(this, void 0, void 0, function() {
var e;
return n(this, function(i) {
switch (i.label) {
case 0:
return [ 4, o.default.assetCtr.loadAudioClip(t) ];

case 1:
e = i.sent();
GL.Audio.playMusic(e, !0);
return [ 2 ];
}
});
});
};
t.prototype.playEffectBtnNormal = function() {
return r(this, void 0, void 0, function() {
return n(this, function() {
GL.Audio.playNormal1();
return [ 2 ];
});
});
};
t.prototype.playEffectBtnExit = function() {
return r(this, void 0, void 0, function() {
return n(this, function() {
GL.Audio.playNormal2();
return [ 2 ];
});
});
};
return t;
}();
i.default = a;
cc._RF.pop();
}, {
"../logic/GLFruitApp": "GLFruitApp"
} ],
GLFruitBanner: [ function(t, e, i) {
"use strict";
cc._RF.push(e, "51818Z6/6NHY7JcBD4f+4VE", "GLFruitBanner");
var r, n = this && this.__extends || (r = function(t, e) {
return (r = Object.setPrototypeOf || {
__proto__: []
} instanceof Array && function(t, e) {
t.__proto__ = e;
} || function(t, e) {
for (var i in e) Object.prototype.hasOwnProperty.call(e, i) && (t[i] = e[i]);
})(t, e);
}, function(t, e) {
r(t, e);
function i() {
this.constructor = t;
}
t.prototype = null === e ? Object.create(e) : (i.prototype = e.prototype, new i());
}), o = this && this.__decorate || function(t, e, i, r) {
var n, o = arguments.length, a = o < 3 ? e : null === r ? r = Object.getOwnPropertyDescriptor(e, i) : r;
if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) a = Reflect.decorate(t, e, i, r); else for (var u = t.length - 1; u >= 0; u--) (n = t[u]) && (a = (o < 3 ? n(a) : o > 3 ? n(e, i, a) : n(e, i)) || a);
return o > 3 && a && Object.defineProperty(e, i, a), a;
};
Object.defineProperty(i, "__esModule", {
value: !0
});
var a = t("../play/GLFruit"), u = t("../traits/GLFruitNotDropLittleFruitWhenXiGuaOnShowCtrl"), s = t("../GLFruitApp"), l = cc._decorator.ccclass, c = t("../traits/GLFruitFaceNotRotateTraitCtrl"), d = function(t) {
n(e, t);
function e() {
var e = null !== t && t.apply(this, arguments) || this;
e._initPositionMap = new Map();
e._fruits = [];
return e;
}
i = e;
e.prototype.getFruits = function() {
return this._fruits;
};
e.prototype.onShow = function() {
var t;
if (!(this.node.children.length > 0)) {
for (var e = 1; e <= 12; e++) {
var r = a.default.Create(e), n = r.getItem();
if (cc.isValid(n) && cc.isValid(n.node)) {
var o = n.node.getComponentInChildren(sp.Skeleton);
if (o && cc.isValid(o.skeletonData) && cc.isValid(null === (t = o.skeletonData) || void 0 === t ? void 0 : t.skeletonJson)) {
n.node.active = !1;
n.node.setParent(this.node);
n.node.active = !0;
n.node.setScale(i.ScaleValues[e - 1]);
n.node.setPosition(cc.v3(0, 100 * i.PositionValues[e - 1] - i.OffsetY + 10));
this._fruits.push(r);
GL.Game.IsFeatureOpen("GLFruitFaceNotRotate") && c.default.getInstance().isOpen() ? r.getItem().node.children.forEach(function(t) {
null != t && cc.isValid(t) && (t.y += i.OffsetY);
}) : n.node.children.length > 0 && (n.node.children[0].y += i.OffsetY);
} else {
console.warn("[GLFruitBanner] onShow: invalid spine data for id=" + e + ", skip banner item to avoid crash.");
s.default.poolCtr.push(r.getName(), n.node);
}
} else console.warn("[GLFruitBanner] onShow: fruit item or node is null for id=" + e + ", pool may not ready.");
}
var u = this.node.getComponent(cc.Layout);
u.updateLayout();
u.enabled = !1;
this.node.on(cc.Node.EventType.TOUCH_START, this.onTouchStart, this, !0);
for (var l = 0; l < this._fruits.length; l++) this._initPositionMap.set(this._fruits[l].getItem().node, this._fruits[l].getItem().node.position);
}
};
e.prototype.onHide = function() {};
e.prototype.onTouchStart = function(t) {
var e = t.getLocation(), r = u.default.getInstance().isOpen() && u.default.getInstance().canNotDropLittleFruit(), n = 0;
r && (n = u.default.getInstance().getLimitFruitId());
for (var o = 0; o < this._fruits.length; o++) if (!(r && o < n)) {
var a = this._fruits[o].getItem();
if (cc.isValid(a) && cc.isValid(a.node) && a.node.getBoundingBoxToWorld().contains(e)) {
this.runTweenEffect(a.node, i.ScaleValues[o]);
break;
}
}
};
e.prototype.runTweenEffect = function(t, e) {
cc.Tween.stopAllByTarget(t);
t.position = this._initPositionMap.get(t);
t.scale = e;
t.position;
var i = e, r = e;
cc.tween(t).by(.1, {
position: cc.v3(0, 20)
}).by(.1, {
position: cc.v3(0, -25)
}).by(.1, {
position: cc.v3(0, 18)
}).by(.1, {
position: cc.v3(0, -18)
}).by(.1, {
position: cc.v3(0, 15)
}).by(.1, {
position: cc.v3(0, -15)
}).by(.1, {
position: cc.v3(0, 12)
}).by(.1, {
position: cc.v3(0, -12)
}).start();
cc.tween(t).to(.1, {
scaleX: 1.1 * i,
scaleY: .9 * r
}).to(.1, {
scaleX: .9 * i,
scaleY: 1.1 * r
}).to(.1, {
scaleX: 1.05 * i,
scaleY: .95 * r
}).to(.1, {
scaleX: .95 * i,
scaleY: 1.05 * r
}).to(.1, {
scaleX: 1.1 * i,
scaleY: .9 * r
}).to(.1, {
scaleX: .9 * i,
scaleY: 1.1 * r
}).to(.1, {
scaleX: 1.05 * i,
scaleY: .95 * r
}).to(.1, {
scaleX: .95 * i,
scaleY: 1.05 * r
}).to(.1, {
scaleX: i,
scaleY: r
}).start();
};
var i;
e.ScaleValues = [ .824, .663, .46, .438, .392, .345, .286, .241, .231, .18, .178 ];
e.PositionValues = [ -.215, -.2, -.187, -.176, -.145, -.115, -.095, -.111, -.078, -.06, .008 ];
e.OffsetY = 20;
return i = o([ l ], e);
}(cc.Component);
i.default = d;
cc._RF.pop();
}, {
"../GLFruitApp": "GLFruitApp",
"../play/GLFruit": "GLFruit",
"../traits/GLFruitFaceNotRotateTraitCtrl": "GLFruitFaceNotRotateTraitCtrl",
"../traits/GLFruitNotDropLittleFruitWhenXiGuaOnShowCtrl": "GLFruitNotDropLittleFruitWhenXiGuaOnShowCtrl"
} ],
GLFruitBoardStateManager: [ function(t, e, i) {
"use strict";
cc._RF.push(e, "8a0b6cg8vhPQJZLsfhaAt3m", "GLFruitBoardStateManager");
var r = this && this.__values || function(t) {
var e = "function" == typeof Symbol && Symbol.iterator, i = e && t[e], r = 0;
if (i) return i.call(t);
if (t && "number" == typeof t.length) return {
next: function() {
t && r >= t.length && (t = void 0);
return {
value: t && t[r++],
done: !t
};
}
};
throw new TypeError(e ? "Object is not iterable." : "Symbol.iterator is not defined.");
};
Object.defineProperty(i, "__esModule", {
value: !0
});
var n = t("../GLFruitApp"), o = t("./GLFruitTools"), a = t("../defines/GLFruitDefine"), u = function() {
function t() {}
t.saveBoardState = function(t) {
var e, i;
void 0 === t && (t = !1);
try {
if (!n.default || !n.default.mergerCtr) {
t || console.error("[GLFruitBoardStateManager] 游戏未初始化，无法保存盘面数据");
return null;
}
var a = n.default.mergerCtr.getFruits(), u = [];
try {
for (var s = r(a), l = s.next(); !l.done; l = s.next()) {
var c = l.value;
if (c && c.isActiveState()) {
var d = c.getItem();
if (d && cc.isValid(d.node)) {
var p = {
id: c.getId(),
x: o.default.RoundToTwo(d.node.x),
y: o.default.RoundToTwo(d.node.y),
angle: o.default.RoundToTwo(d.node.angle)
};
u.push(p);
}
}
}
} catch (t) {
e = {
error: t
};
} finally {
try {
l && !l.done && (i = s.return) && i.call(s);
} finally {
if (e) throw e.error;
}
}
var f = {
fruits: u
};
this.savedBoardData = f;
this.savedDataTimestamp = Date.now();
t || console.log("[GLFruitBoardStateManager] 盘面数据已保存，共 " + u.length + " 个水果");
return f;
} catch (e) {
t || console.error("[GLFruitBoardStateManager] 保存盘面数据失败：", e);
return null;
}
};
t.restoreBoardState = function(t, e) {
var i, o, a, u;
void 0 === e && (e = !1);
try {
if (!n.default || !n.default.mergerCtr) {
e || console.error("[GLFruitBoardStateManager] 游戏未初始化，无法恢复盘面数据");
return !1;
}
var s = null;
if (t) if ("string" == typeof t) try {
s = JSON.parse(t);
} catch (t) {
e || console.error("[GLFruitBoardStateManager] JSON解析失败：", t);
return !1;
} else s = t; else s = this.savedBoardData;
if (!s || !s.fruits || !Array.isArray(s.fruits)) {
e || console.error("[GLFruitBoardStateManager] 无效的盘面数据");
return !1;
}
var l = n.default.mergerCtr.getFruits(), c = [];
try {
for (var d = r(l), p = d.next(); !p.done; p = d.next()) (h = p.value) && h.isActiveState() && c.push(h);
} catch (t) {
i = {
error: t
};
} finally {
try {
p && !p.done && (o = d.return) && o.call(d);
} finally {
if (i) throw i.error;
}
}
for (var f = 0; f < c.length; f++) {
var h = c[f];
console.log("[GLFruitBoardStateManager] 移除的水果: " + h.getId());
n.default.mergerCtr.removeFruit(h);
}
try {
for (var g = r(s.fruits), F = g.next(); !F.done; F = g.next()) {
var y = F.value;
if (12 !== y.id) {
var v = n.default.mergerCtr.spawnFruit(y.id);
if (v) {
v.position = new cc.Vec3(y.x, y.y);
v.getItem().node.angle = y.angle;
n.default.mergerCtr.addFruit(v);
v.runActiveState();
}
}
}
} catch (t) {
a = {
error: t
};
} finally {
try {
F && !F.done && (u = g.return) && u.call(g);
} finally {
if (a) throw a.error;
}
}
var m = n.default.mergerCtr.getFruits();
m.sort(function(t, e) {
return t.position.y - e.position.y;
});
console.log("[GLFruitBoardStateManager] 盘面剩余水果 " + m.length + " 个水果");
return !0;
} catch (t) {
e || console.error("[GLFruitBoardStateManager] 恢复盘面数据失败：", t);
return !1;
}
};
t.getSavedData = function() {
return this.savedBoardData;
};
t.clearSavedData = function(t) {
void 0 === t && (t = !1);
this.savedBoardData = null;
this.savedDataTimestamp = 0;
t || console.log("[GLFruitBoardStateManager] 已清除保存的盘面数据");
};
t.calculateMaxTimeWindow = function() {
return 5.1 + a.GLFruitDefine.FailWarnIterval + 2;
};
t.isDeathFromShakeProp = function() {
if (!this.savedBoardData) return !1;
if (this.savedDataTimestamp > 0) {
var t = 1e3 * this.calculateMaxTimeWindow();
if (Date.now() - this.savedDataTimestamp > t) {
this.clearSavedData(!0);
return !1;
}
}
return !0;
};
t.toJSON = function(t) {
var e = t || this.savedBoardData;
return e ? JSON.stringify(e) : null;
};
t.fromJSON = function(t) {
try {
var e = JSON.parse(t);
return e && e.fruits && Array.isArray(e.fruits) ? e : null;
} catch (t) {
console.error("[GLFruitBoardStateManager] JSON解析失败：", t);
return null;
}
};
t.savedBoardData = null;
t.savedDataTimestamp = 0;
return t;
}();
i.default = u;
cc._RF.pop();
}, {
"../GLFruitApp": "GLFruitApp",
"../defines/GLFruitDefine": "GLFruitDefine",
"./GLFruitTools": "GLFruitTools"
} ],
GLFruitBoardTestTool: [ function(t, e, i) {
"use strict";
cc._RF.push(e, "18b44nYhCZAR7Kayavrz/Hq", "GLFruitBoardTestTool");
var r = this && this.__values || function(t) {
var e = "function" == typeof Symbol && Symbol.iterator, i = e && t[e], r = 0;
if (i) return i.call(t);
if (t && "number" == typeof t.length) return {
next: function() {
t && r >= t.length && (t = void 0);
return {
value: t && t[r++],
done: !t
};
}
};
throw new TypeError(e ? "Object is not iterable." : "Symbol.iterator is not defined.");
};
Object.defineProperty(i, "__esModule", {
value: !0
});
var n = t("../GLFruitApp"), o = t("./GLFruitTools"), a = function() {
function t() {}
t.saveBoardState = function(t) {
var e, i;
void 0 === t && (t = !1);
try {
if (!n.default || !n.default.mergerCtr) {
t || console.error("[GLFruitBoardStateManager] 游戏未初始化，无法保存盘面数据");
return null;
}
var a = n.default.mergerCtr.getFruits(), u = [];
try {
for (var s = r(a), l = s.next(); !l.done; l = s.next()) {
var c = l.value;
if (c && c.isActiveState()) {
var d = c.getItem();
if (d && cc.isValid(d.node)) {
var p = {
id: c.getId(),
x: o.default.RoundToTwo(d.node.x),
y: o.default.RoundToTwo(d.node.y),
angle: o.default.RoundToTwo(d.node.angle)
};
u.push(p);
}
}
}
} catch (t) {
e = {
error: t
};
} finally {
try {
l && !l.done && (i = s.return) && i.call(s);
} finally {
if (e) throw e.error;
}
}
var f = {
fruits: u
};
this.savedBoardData = f;
t || console.log("[GLFruitBoardStateManager] 盘面数据已保存，共 " + u.length + " 个水果");
return f;
} catch (e) {
t || console.error("[GLFruitBoardStateManager] 保存盘面数据失败：", e);
return null;
}
};
t.restoreBoardState = function(t, e) {
var i, o, a, u, s, l;
void 0 === e && (e = !1);
try {
if (!n.default || !n.default.mergerCtr) {
e || console.error("[GLFruitBoardStateManager] 游戏未初始化，无法恢复盘面数据");
return !1;
}
var c = null;
if (t) if ("string" == typeof t) try {
c = JSON.parse(t);
} catch (t) {
e || console.error("[GLFruitBoardStateManager] JSON解析失败：", t);
return !1;
} else c = t; else c = this.savedBoardData;
if (!c || !c.fruits || !Array.isArray(c.fruits)) {
e || console.error("[GLFruitBoardStateManager] 无效的盘面数据");
return !1;
}
var d = n.default.mergerCtr.getFruits(), p = [];
try {
for (var f = r(d), h = f.next(); !h.done; h = f.next()) (y = h.value) && y.isActiveState() && p.push(y);
} catch (t) {
i = {
error: t
};
} finally {
try {
h && !h.done && (o = f.return) && o.call(f);
} finally {
if (i) throw i.error;
}
}
try {
for (var g = r(p), F = g.next(); !F.done; F = g.next()) {
var y = F.value;
n.default.mergerCtr.removeFruit(y);
}
} catch (t) {
a = {
error: t
};
} finally {
try {
F && !F.done && (u = g.return) && u.call(g);
} finally {
if (a) throw a.error;
}
}
var v = 0;
try {
for (var m = r(c.fruits), _ = m.next(); !_.done; _ = m.next()) {
var L = _.value;
if (12 !== L.id) {
var C = n.default.mergerCtr.spawnFruit(L.id);
if (C) {
C.position = new cc.Vec3(L.x, L.y);
C.getItem().node.angle = L.angle;
n.default.mergerCtr.addFruit(C);
C.runActiveState();
v++;
}
}
}
} catch (t) {
s = {
error: t
};
} finally {
try {
_ && !_.done && (l = m.return) && l.call(m);
} finally {
if (s) throw s.error;
}
}
n.default.mergerCtr.getFruits().sort(function(t, e) {
return t.position.y - e.position.y;
});
e || console.log("[GLFruitBoardStateManager] 盘面数据已恢复，共恢复 " + v + " 个水果");
return !0;
} catch (t) {
e || console.error("[GLFruitBoardStateManager] 恢复盘面数据失败：", t);
return !1;
}
};
t.getSavedData = function() {
return this.savedBoardData;
};
t.clearSavedData = function(t) {
void 0 === t && (t = !1);
this.savedBoardData = null;
t || console.log("[GLFruitBoardStateManager] 已清除保存的盘面数据");
};
t.toJSON = function(t) {
var e = t || this.savedBoardData;
return e ? JSON.stringify(e) : null;
};
t.fromJSON = function(t) {
try {
var e = JSON.parse(t);
return e && e.fruits && Array.isArray(e.fruits) ? e : null;
} catch (t) {
console.error("[GLFruitBoardStateManager] JSON解析失败：", t);
return null;
}
};
t.savedBoardData = null;
return t;
}();
i.default = a;
cc._RF.pop();
}, {
"../GLFruitApp": "GLFruitApp",
"./GLFruitTools": "GLFruitTools"
} ],
GLFruitBombStateNode: [ function(t, e, i) {
"use strict";
cc._RF.push(e, "e6b076wi7lJ3IcxUUz7sJKT", "GLFruitBombStateNode");
var r, n = this && this.__extends || (r = function(t, e) {
return (r = Object.setPrototypeOf || {
__proto__: []
} instanceof Array && function(t, e) {
t.__proto__ = e;
} || function(t, e) {
for (var i in e) Object.prototype.hasOwnProperty.call(e, i) && (t[i] = e[i]);
})(t, e);
}, function(t, e) {
r(t, e);
function i() {
this.constructor = t;
}
t.prototype = null === e ? Object.create(e) : (i.prototype = e.prototype, new i());
});
Object.defineProperty(i, "__esModule", {
value: !0
});
var o = t("../../core/fsmNode/GLFruitStateNode"), a = t("../GLFruitApp"), u = t("../traits/GLFruitAddBombAudioTraitCtrl"), s = t("../traits/GLFruitAddFruitChoiceListTraitCtrl"), l = t("../traits/GLFruitNotDropLittleFruitWhenXiGuaOnShowCtrl"), c = function(t) {
n(e, t);
function e() {
return null !== t && t.apply(this, arguments) || this;
}
e.prototype.onEnter = function() {
var t, e = a.default.gameStateCtr.getGameView();
a.default.mergerCtr.isBombState = !0;
if (cc.isValid(e.getNodePropBomb())) {
e.getNodePropBomb().active = !0;
s.default.getInstance().isOpen() && s.default.getInstance().showOrHideExchangeClickNode(!e.getNodePropBomb().active);
}
cc.isValid(e.getNodeTop()) && (e.getNodeTop().active = !1);
(null == e ? void 0 : e.getFruitDropLine()) && cc.isValid(null == e ? void 0 : e.getFruitDropLine()) && cc.isValid(null === (t = null == e ? void 0 : e.getFruitDropLine()) || void 0 === t ? void 0 : t.node) && (e.getFruitDropLine().node.active = !1);
a.default.failZoneCtr.removeAllHintEffects();
};
e.prototype.onExit = function() {
var t = a.default.gameStateCtr.getGameView();
a.default.mergerCtr.isBombState = !1;
u.GLFruitAddBombAudioTraitCtrl.Instance.isOpen() && u.GLFruitAddBombAudioTraitCtrl.Instance.playBombAudio();
if (cc.isValid(t.getNodePropBomb())) {
t.getNodePropBomb().active = !1;
s.default.getInstance().isOpen() && s.default.getInstance().showOrHideExchangeClickNode(!t.getNodePropBomb().active);
}
cc.isValid(t.getNodeTop()) && (t.getNodeTop().active = !0);
cc.isValid(t.getFruitDropLine().node) && (t.getFruitDropLine().node.active = !0);
t.getFruitDropLine().node.active = !0;
l.default.getInstance().isOpen() && l.default.getInstance().afterMergeCheck();
};
return e;
}(o.default);
i.default = c;
cc._RF.pop();
}, {
"../../core/fsmNode/GLFruitStateNode": "GLFruitStateNode",
"../GLFruitApp": "GLFruitApp",
"../traits/GLFruitAddBombAudioTraitCtrl": "GLFruitAddBombAudioTraitCtrl",
"../traits/GLFruitAddFruitChoiceListTraitCtrl": "GLFruitAddFruitChoiceListTraitCtrl",
"../traits/GLFruitNotDropLittleFruitWhenXiGuaOnShowCtrl": "GLFruitNotDropLittleFruitWhenXiGuaOnShowCtrl"
} ],
GLFruitButtonScaler: [ function(t, e, i) {
"use strict";
cc._RF.push(e, "927acLx6mZJTKI9rNU3PcCM", "GLFruitButtonScaler");
var r, n = this && this.__extends || (r = function(t, e) {
return (r = Object.setPrototypeOf || {
__proto__: []
} instanceof Array && function(t, e) {
t.__proto__ = e;
} || function(t, e) {
for (var i in e) Object.prototype.hasOwnProperty.call(e, i) && (t[i] = e[i]);
})(t, e);
}, function(t, e) {
r(t, e);
function i() {
this.constructor = t;
}
t.prototype = null === e ? Object.create(e) : (i.prototype = e.prototype, new i());
}), o = this && this.__decorate || function(t, e, i, r) {
var n, o = arguments.length, a = o < 3 ? e : null === r ? r = Object.getOwnPropertyDescriptor(e, i) : r;
if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) a = Reflect.decorate(t, e, i, r); else for (var u = t.length - 1; u >= 0; u--) (n = t[u]) && (a = (o < 3 ? n(a) : o > 3 ? n(e, i, a) : n(e, i)) || a);
return o > 3 && a && Object.defineProperty(e, i, a), a;
};
Object.defineProperty(i, "__esModule", {
value: !0
});
i.GLFruitButtonScaler = i.GLFruitScaleAction = void 0;
var a = cc._decorator, u = a.ccclass, s = a.property;
i.GLFruitScaleAction = cc.Enum({
PressToBig: 0,
PressToSmall: 1
});
var l = function(t) {
n(e, t);
function e() {
var e = null !== t && t.apply(this, arguments) || this;
e.pressAction = i.GLFruitScaleAction.PressToBig;
e.scaleFactor = .1;
e.duration = .05;
e.originalScale = 1;
e.button = null;
return e;
}
e.prototype.onLoad = function() {
this.button || (this.button = this.getComponent(cc.Button));
if (this.button) {
this.originalScale = this.node.scale;
this.node.on(cc.Node.EventType.TOUCH_START, this.onTouchStart, this);
this.node.on(cc.Node.EventType.TOUCH_END, this.onTouchEnd, this);
this.node.on(cc.Node.EventType.TOUCH_CANCEL, this.onTouchEnd, this);
}
};
e.prototype.onDisable = function() {
cc.Tween.stopAllByTarget(this.node);
this.node.scale = this.originalScale;
};
e.prototype.onTouchStart = function() {
if (this.button.interactable) {
var t;
t = this.pressAction === i.GLFruitScaleAction.PressToBig ? this.originalScale * (1 + this.scaleFactor) : this.originalScale * (1 - this.scaleFactor);
cc.tween(this.node).to(this.duration, {
scale: t
}).start();
}
};
e.prototype.onTouchEnd = function() {
cc.Tween.stopAllByTarget(this.node);
this.node.scale = this.originalScale;
};
o([ s({
type: i.GLFruitScaleAction,
displayName: "按下动作类型"
}) ], e.prototype, "pressAction", void 0);
return o([ u ], e);
}(cc.Component);
i.GLFruitButtonScaler = l;
cc._RF.pop();
}, {} ],
GLFruitChangeScaleTraitCtrl: [ function(t, e, i) {
"use strict";
cc._RF.push(e, "57d33yM2rNLmqyObANx0A1A", "GLFruitChangeScaleTraitCtrl");
Object.defineProperty(i, "__esModule", {
value: !0
});
var r = t("../defines/GLFruitDefine"), n = function() {
function t() {
this._featureName = "GLFruitChangeScale";
this.defaultScaleRate = 1;
this.fruitScaleRate = [];
}
t.getInstance = function() {
null == this._instance && (this._instance = new t());
return this._instance;
};
t.prototype.isOpen = function() {
return GL.Game.IsFeatureOpen(this._featureName);
};
t.prototype.initScaleRateConfig = function() {
this.fruitScaleRate = GL.Game.getFeatureKeyParam(this._featureName, "scaleRate") || [];
};
t.prototype.getFruitScaleRate = function(t) {
return t <= 0 || t > r.GLFruitDefine.MaxFruitId ? this.defaultScaleRate : null == this.fruitScaleRate || 0 == this.fruitScaleRate.length ? this.defaultScaleRate : null == this.fruitScaleRate[t - 1] ? this.defaultScaleRate : this.fruitScaleRate[t - 1];
};
t._instance = null;
return t;
}();
i.default = n;
cc._RF.pop();
}, {
"../defines/GLFruitDefine": "GLFruitDefine"
} ],
GLFruitClickCheckEvent: [ function(t, e, i) {
"use strict";
cc._RF.push(e, "28485rhRXVNio0yVYwykq3Y", "GLFruitClickCheckEvent");
var r, n = this && this.__extends || (r = function(t, e) {
return (r = Object.setPrototypeOf || {
__proto__: []
} instanceof Array && function(t, e) {
t.__proto__ = e;
} || function(t, e) {
for (var i in e) Object.prototype.hasOwnProperty.call(e, i) && (t[i] = e[i]);
})(t, e);
}, function(t, e) {
r(t, e);
function i() {
this.constructor = t;
}
t.prototype = null === e ? Object.create(e) : (i.prototype = e.prototype, new i());
}), o = this && this.__decorate || function(t, e, i, r) {
var n, o = arguments.length, a = o < 3 ? e : null === r ? r = Object.getOwnPropertyDescriptor(e, i) : r;
if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) a = Reflect.decorate(t, e, i, r); else for (var u = t.length - 1; u >= 0; u--) (n = t[u]) && (a = (o < 3 ? n(a) : o > 3 ? n(e, i, a) : n(e, i)) || a);
return o > 3 && a && Object.defineProperty(e, i, a), a;
};
Object.defineProperty(i, "__esModule", {
value: !0
});
var a = t("../GLFruitApp"), u = cc._decorator.ccclass, s = function(t) {
n(e, t);
function e() {
var e = null !== t && t.apply(this, arguments) || this;
e._touchStartPos = cc.v2(0, 0);
e._isDragging = !1;
e._dragThreshold = 5;
return e;
}
e.prototype.onLoad = function() {
this.registerTouchEvents();
};
e.prototype.onDestroy = function() {
this.unregisterTouchEvents();
};
e.prototype.registerTouchEvents = function() {
this.node.on(cc.Node.EventType.TOUCH_START, this.onTouchStart, this);
this.node.on(cc.Node.EventType.TOUCH_MOVE, this.onTouchMove, this);
this.node.on(cc.Node.EventType.TOUCH_END, this.onTouchEnd, this);
this.node.on(cc.Node.EventType.TOUCH_CANCEL, this.onTouchCancel, this);
};
e.prototype.unregisterTouchEvents = function() {
this.node.off(cc.Node.EventType.TOUCH_START, this.onTouchStart, this);
this.node.off(cc.Node.EventType.TOUCH_MOVE, this.onTouchMove, this);
this.node.off(cc.Node.EventType.TOUCH_END, this.onTouchEnd, this);
this.node.off(cc.Node.EventType.TOUCH_CANCEL, this.onTouchCancel, this);
};
e.prototype.onTouchStart = function(t) {
this._touchStartPos = t.getLocation();
this._isDragging = !1;
this.onPointerDown(t);
};
e.prototype.onTouchMove = function(t) {
if (!this._isDragging && t.getLocation().sub(this._touchStartPos).mag() > this._dragThreshold) {
this._isDragging = !0;
this.onBeginDrag(t);
}
this._isDragging && this.onDrag(t);
};
e.prototype.onTouchEnd = function(t) {
this._isDragging ? this.onEndDrag(t) : this.onPointerClick(t);
this.onPointerUp(t);
this._isDragging = !1;
};
e.prototype.onTouchCancel = function(t) {
this._isDragging && this.onEndDrag(t);
this.onPointerUp(t);
this._isDragging = !1;
};
e.prototype.onPointerDown = function() {};
e.prototype.onPointerUp = function() {};
e.prototype.onPointerClick = function(t) {
var e = t.getLocation();
a.default.propCtr.onCheckClick(cc.v3(e.x, e.y, 0));
};
e.prototype.onBeginDrag = function() {};
e.prototype.onDrag = function() {};
e.prototype.onEndDrag = function() {};
return o([ u ], e);
}(cc.Component);
i.default = s;
cc._RF.pop();
}, {
"../GLFruitApp": "GLFruitApp"
} ],
GLFruitComboCtr: [ function(t, e, i) {
"use strict";
cc._RF.push(e, "78804L7u/ZLTJBwj9VkpkNh", "GLFruitComboCtr");
Object.defineProperty(i, "__esModule", {
value: !0
});
var r = t("../FruitFeature"), n = t("../defines/GLFruitDefine"), o = t("../GLFruitApp"), a = t("../ui/items/GLFruitComboItem"), u = t("../ui/items/GLFruitComboItemNew"), s = function() {
function t() {
this._comboCount = 0;
this._totalShowCount = 0;
this._showLabelEffectTime = 0;
}
t.prototype.addCombo = function(t) {
var e = Math.min(7, this._comboCount);
o.default.audioMgr.playEffect("" + n.GLFruitAudioDefine.fruit_merge_combo + e);
this._comboCount++;
this.showComboEffect(t);
};
t.prototype.showComboEffect = function(t) {
r.default.isOpen(r.FruitFeat.FruitNewComboEffect) ? this.showComboEffectNew(t) : this.showComboEffectOld(t);
};
t.prototype.showComboEffectOld = function(e) {
var i = this, r = this._comboCount;
if (r > 1) {
var n = o.default.poolCtr.get("GLFruitComboItem");
if (!n) return;
n.setParent(t.NodeComboRoot);
n.active = !0;
n.position = t.NodeComboRoot.convertToNodeSpaceAR(e);
var u = n.getComponent(a.default);
if (!u) return;
r >= 7 && o.default.gameStateCtr.getGameView().shakeScreen();
this._totalShowCount++;
var s = t.ComboColor1[r % t.ComboColor1.length], l = t.ComboColor2[r % t.ComboColor2.length], c = cc.misc.lerp(.38, 1, r / 12);
n.scale = c;
u.setColor(s, l);
u.setNum(r);
u.runAction(function() {
o.default.poolCtr.push("GLFruitComboItem", n);
i._totalShowCount--;
0 == i._totalShowCount && i.tryShowBomboLabelEffect(r);
});
}
};
t.prototype.showComboEffectNew = function(e) {
var i = this, r = this._comboCount;
if (r > 1) {
var n = o.default.poolCtr.get("GLFruitComboItemNew");
if (!n) return;
n.setParent(t.NodeComboRoot);
n.active = !0;
n.position = t.NodeComboRoot.convertToNodeSpaceAR(e);
var a = n.getComponent(u.default);
if (!a) return;
r >= 7 && o.default.gameStateCtr.getGameView().shakeScreen();
this._totalShowCount++;
var s;
s = r <= 5 ? 0 : r <= 10 ? 1 : r <= 15 ? 2 : r <= 20 ? 3 : 4;
var l = t.ComboColor3[s], c = t.ComboColor2[s], d = t.ComboNames[s];
n.scale = 1;
a.setColor(l, c, d);
a.setNum(r);
a.runAction(function() {
o.default.poolCtr.push("GLFruitComboItemNew", n);
i._totalShowCount--;
0 == i._totalShowCount && i.tryShowBomboLabelEffect(r);
});
}
};
t.prototype.tryShowBomboLabelEffect = function(t) {
t >= 3 && (o.default.mergerWellDoneCtr.isShowing ? o.default.mergerWellDoneCtr.addLabelNum(t) : this.showBomboLabelEffect(t, null));
};
t.prototype.clearCombo = function() {
this._comboCount = 0;
};
t.prototype.showBomboLabelEffect = function(e, i) {
if (e >= 3) {
if (Date.now() - this._showLabelEffectTime < 1e3 * t.ShowLabelEffectInterval) return;
this._showLabelEffectTime = Date.now();
o.default.effectCtr.playLikeEffect("dianzhan", this.getBomboLabelIndex(e), i);
}
};
t.prototype.getBomboLabelIndex = function(t) {
return Math.min(4, Math.floor((t - 3) / 3));
};
t.prototype.clear = function() {
this._comboCount = 0;
this._totalShowCount = 0;
};
t.NodeComboRoot = null;
t.ComboColor1 = [ new cc.Color(255, 102, 80), new cc.Color(17, 140, 41), new cc.Color(173, 63, 12), new cc.Color(63, 178, 48), new cc.Color(38, 158, 172), new cc.Color(49, 85, 168), new cc.Color(124, 35, 193), new cc.Color(176, 37, 169) ];
t.ComboColor2 = [ new cc.Color(109, 234, 0), new cc.Color(255, 36, 0), new cc.Color(66, 228, 255), new cc.Color(255, 0, 239), new cc.Color(35, 84, 255), new cc.Color(255, 187, 38), new cc.Color(255, 118, 38), new cc.Color(239, 255, 38) ];
t.ComboColor3 = [ new cc.Color(97, 197, 0), new cc.Color(0, 206, 199), new cc.Color(58, 122, 255), new cc.Color(185, 64, 255), new cc.Color(255, 55, 139) ];
t.ComboNames = [ "green_in", "cyan_in", "blue_in", "purple_in", "pink_in" ];
t.ShowLabelEffectInterval = 5;
return t;
}();
i.default = s;
cc._RF.pop();
}, {
"../FruitFeature": "FruitFeature",
"../GLFruitApp": "GLFruitApp",
"../defines/GLFruitDefine": "GLFruitDefine",
"../ui/items/GLFruitComboItem": "GLFruitComboItem",
"../ui/items/GLFruitComboItemNew": "GLFruitComboItemNew"
} ],
GLFruitComboItemNew: [ function(t, e, i) {
"use strict";
cc._RF.push(e, "852940F/SxBBaqoGyuukrbY", "GLFruitComboItemNew");
var r, n = this && this.__extends || (r = function(t, e) {
return (r = Object.setPrototypeOf || {
__proto__: []
} instanceof Array && function(t, e) {
t.__proto__ = e;
} || function(t, e) {
for (var i in e) Object.prototype.hasOwnProperty.call(e, i) && (t[i] = e[i]);
})(t, e);
}, function(t, e) {
r(t, e);
function i() {
this.constructor = t;
}
t.prototype = null === e ? Object.create(e) : (i.prototype = e.prototype, new i());
}), o = this && this.__decorate || function(t, e, i, r) {
var n, o = arguments.length, a = o < 3 ? e : null === r ? r = Object.getOwnPropertyDescriptor(e, i) : r;
if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) a = Reflect.decorate(t, e, i, r); else for (var u = t.length - 1; u >= 0; u--) (n = t[u]) && (a = (o < 3 ? n(a) : o > 3 ? n(e, i, a) : n(e, i)) || a);
return o > 3 && a && Object.defineProperty(e, i, a), a;
};
Object.defineProperty(i, "__esModule", {
value: !0
});
var a = cc._decorator, u = a.ccclass, s = a.property, l = function(t) {
n(e, t);
function e() {
var e = null !== t && t.apply(this, arguments) || this;
e.comboSpine = null;
e.labelNum1 = null;
e.labelNum2 = null;
e._name = "blue_in";
return e;
}
e.prototype.setNum = function(t) {
if (null != this.labelNum1 && null != this.labelNum2) {
this.labelNum1.string = "" + t;
this.labelNum2.string = this.labelNum1.string;
}
};
e.prototype.setColor = function(t, e, i) {
void 0 === i && (i = "blue_in");
if (null != this.labelNum1 && null != this.labelNum2) {
this.labelNum1.node.color = t;
this._name = i;
}
};
e.prototype.runAction = function(t) {
if (null != this.labelNum1 && null != this.labelNum2) {
this.comboSpine.setAnimation(0, this._name, !1);
this.comboSpine.setCompleteListener(function() {
t && t();
});
}
};
o([ s(sp.Skeleton) ], e.prototype, "comboSpine", void 0);
o([ s(cc.Label) ], e.prototype, "labelNum1", void 0);
o([ s(cc.Label) ], e.prototype, "labelNum2", void 0);
return o([ u ], e);
}(cc.Component);
i.default = l;
cc._RF.pop();
}, {} ],
GLFruitComboItem: [ function(t, e, i) {
"use strict";
cc._RF.push(e, "b652bxTcNVB1aE0l+l5XDKj", "GLFruitComboItem");
var r, n = this && this.__extends || (r = function(t, e) {
return (r = Object.setPrototypeOf || {
__proto__: []
} instanceof Array && function(t, e) {
t.__proto__ = e;
} || function(t, e) {
for (var i in e) Object.prototype.hasOwnProperty.call(e, i) && (t[i] = e[i]);
})(t, e);
}, function(t, e) {
r(t, e);
function i() {
this.constructor = t;
}
t.prototype = null === e ? Object.create(e) : (i.prototype = e.prototype, new i());
}), o = this && this.__decorate || function(t, e, i, r) {
var n, o = arguments.length, a = o < 3 ? e : null === r ? r = Object.getOwnPropertyDescriptor(e, i) : r;
if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) a = Reflect.decorate(t, e, i, r); else for (var u = t.length - 1; u >= 0; u--) (n = t[u]) && (a = (o < 3 ? n(a) : o > 3 ? n(e, i, a) : n(e, i)) || a);
return o > 3 && a && Object.defineProperty(e, i, a), a;
};
Object.defineProperty(i, "__esModule", {
value: !0
});
var a = cc._decorator, u = a.ccclass, s = (a.property, function(t) {
n(e, t);
function e() {
var e = null !== t && t.apply(this, arguments) || this;
e.labelNum1 = null;
e.labelNum2 = null;
return e;
}
e.prototype.onLoad = function() {
this.initLabels();
};
e.prototype.initLabels = function() {
if (null == this.labelNum1 && null == this.labelNum2) {
this.labelNum1 = this.node.getChildByName("labelNum1").getComponent(cc.Label);
this.labelNum2 = this.node.getChildByName("labelNum2").getComponent(cc.Label);
}
};
e.prototype.setNum = function(t) {
if (null != this.labelNum1 && null != this.labelNum2) {
this.labelNum1.string = "x" + t;
this.labelNum2.string = this.labelNum1.string;
}
};
e.prototype.setColor = function(t) {
null != this.labelNum1 && null != this.labelNum2 && (this.labelNum1.node.color = t);
};
e.prototype.runAction = function(t) {
var e = this;
if (null != this.labelNum1 && null != this.labelNum2) {
var i = this.node.scale;
this.node.scale = 0;
this.node.opacity = 255;
cc.tween(this.node).to(.2, {
scale: 1.3 * i
}).to(.2, {
scale: i
}).delay(.5).call(function() {
cc.tween(e.node).parallel(cc.tween(e.node).to(.4, {
position: cc.v3(e.node.x, e.node.y + 150)
}), cc.tween(e.node).to(.5, {
opacity: 0
})).delay(.6).call(function() {
t && t();
}).start();
}).start();
}
};
return o([ u ], e);
}(cc.Component));
i.default = s;
cc._RF.pop();
}, {} ],
GLFruitConfigCtr: [ function(t, e, i) {
"use strict";
cc._RF.push(e, "70571hNJvNFD6t1/R4EtdQ1", "GLFruitConfigCtr");
var r = this && this.__awaiter || function(t, e, i, r) {
return new (i || (i = Promise))(function(n, o) {
function a(t) {
try {
s(r.next(t));
} catch (t) {
o(t);
}
}
function u(t) {
try {
s(r.throw(t));
} catch (t) {
o(t);
}
}
function s(t) {
t.done ? n(t.value) : (e = t.value, e instanceof i ? e : new i(function(t) {
t(e);
})).then(a, u);
var e;
}
s((r = r.apply(t, e || [])).next());
});
}, n = this && this.__generator || function(t, e) {
var i, r, n, o, a = {
label: 0,
sent: function() {
if (1 & n[0]) throw n[1];
return n[1];
},
trys: [],
ops: []
};
return o = {
next: u(0),
throw: u(1),
return: u(2)
}, "function" == typeof Symbol && (o[Symbol.iterator] = function() {
return this;
}), o;
function u(t) {
return function(e) {
return s([ t, e ]);
};
}
function s(o) {
if (i) throw new TypeError("Generator is already executing.");
for (;a; ) try {
if (i = 1, r && (n = 2 & o[0] ? r.return : o[0] ? r.throw || ((n = r.return) && n.call(r), 
0) : r.next) && !(n = n.call(r, o[1])).done) return n;
(r = 0, n) && (o = [ 2 & o[0], n.value ]);
switch (o[0]) {
case 0:
case 1:
n = o;
break;

case 4:
a.label++;
return {
value: o[1],
done: !1
};

case 5:
a.label++;
r = o[1];
o = [ 0 ];
continue;

case 7:
o = a.ops.pop();
a.trys.pop();
continue;

default:
if (!(n = a.trys, n = n.length > 0 && n[n.length - 1]) && (6 === o[0] || 2 === o[0])) {
a = 0;
continue;
}
if (3 === o[0] && (!n || o[1] > n[0] && o[1] < n[3])) {
a.label = o[1];
break;
}
if (6 === o[0] && a.label < n[1]) {
a.label = n[1];
n = o;
break;
}
if (n && a.label < n[2]) {
a.label = n[2];
a.ops.push(o);
break;
}
n[2] && a.ops.pop();
a.trys.pop();
continue;
}
o = e.call(t, a);
} catch (t) {
o = [ 6, t ];
r = 0;
} finally {
i = n = 0;
}
if (5 & o[0]) throw o[1];
return {
value: o[0] ? o[1] : void 0,
done: !0
};
}
}, o = this && this.__values || function(t) {
var e = "function" == typeof Symbol && Symbol.iterator, i = e && t[e], r = 0;
if (i) return i.call(t);
if (t && "number" == typeof t.length) return {
next: function() {
t && r >= t.length && (t = void 0);
return {
value: t && t[r++],
done: !t
};
}
};
throw new TypeError(e ? "Object is not iterable." : "Symbol.iterator is not defined.");
};
Object.defineProperty(i, "__esModule", {
value: !0
});
var a = t("../GLFruitApp"), u = function() {
function t() {
this._fruitMap = {};
}
t.prototype.loadConfig = function() {
return r(this, void 0, void 0, function() {
var t, e, i, r, u, s;
return n(this, function(n) {
switch (n.label) {
case 0:
return [ 4, a.default.assetCtr.loadJson("assets/configs/tbfruitconfig") ];

case 1:
t = n.sent();
try {
for (e = o(t.json), i = e.next(); !i.done; i = e.next()) {
r = i.value;
this._fruitMap[r.id] = r;
}
} catch (t) {
u = {
error: t
};
} finally {
try {
i && !i.done && (s = e.return) && s.call(e);
} finally {
if (u) throw u.error;
}
}
return [ 2 ];
}
});
});
};
t.prototype.initConfig = function(t) {
var e, i;
try {
for (var r = o(t.json), n = r.next(); !n.done; n = r.next()) {
var a = n.value;
this._fruitMap[a.id] = a;
}
} catch (t) {
e = {
error: t
};
} finally {
try {
n && !n.done && (i = r.return) && i.call(r);
} finally {
if (e) throw e.error;
}
}
};
t.prototype.getAll = function() {
return Object.values(this._fruitMap);
};
t.prototype.getById = function(t) {
return this._fruitMap[t];
};
t.prototype.getByName = function(t) {
return Object.values(this._fruitMap).find(function(e) {
return e.name === t;
});
};
t.prototype.getByIcon = function(t) {
return Object.values(this._fruitMap).find(function(e) {
return e.icon === t;
});
};
t.prototype.getSortedBySize = function(t) {
void 0 === t && (t = !0);
return this.getAll().sort(function(e, i) {
return t ? e.size - i.size : i.size - e.size;
});
};
t.prototype.getAllNames = function() {
return this.getAll().map(function(t) {
return t.name;
});
};
return t;
}();
i.default = u;
cc._RF.pop();
}, {
"../GLFruitApp": "GLFruitApp"
} ],
GLFruitDeadCheckOptimizeTraitCtrl: [ function(t, e, i) {
"use strict";
cc._RF.push(e, "d9a1d+AHb5N1ptqkWZkScuv", "GLFruitDeadCheckOptimizeTraitCtrl");
Object.defineProperty(i, "__esModule", {
value: !0
});
var r = t("../FruitFeature"), n = function() {
function t() {
this._featureName = "GLFruitDeadCheckOptimize";
this.useShakeItemFlag = !1;
}
t.getInstance = function() {
null == this._instance && (this._instance = new t());
return this._instance;
};
t.prototype.isOpen = function() {
return r.default.isOpen(r.FruitFeat.GLFruitDeadCheckOptimize);
};
t.prototype.getUseShakeItemFlag = function() {
return this.useShakeItemFlag;
};
t.prototype.setUseShakeItemFlag = function(t) {
console.log("GLFruitDeadCheckOptimizeTraitCtrl setUseShakeItemFlag", t);
this.useShakeItemFlag = t;
};
t._instance = null;
return t;
}();
i.default = n;
cc._RF.pop();
}, {
"../FruitFeature": "FruitFeature"
} ],
GLFruitDefine: [ function(t, e, i) {
"use strict";
cc._RF.push(e, "67eac+t5plCzJEajGh7+TKD", "GLFruitDefine");
Object.defineProperty(i, "__esModule", {
value: !0
});
i.GLFruitAudioDefine = i.GLFruitPropIdDefine = i.GLFruitGroupDefine = i.GLFruitAnimationDefine = i.GLFruitDefine = void 0;
var r = t("../ctrs/FruitWannengFruitCtrl"), n = t("../FruitFeature"), o = function() {
function t() {}
t.FruitScale = .88;
t.MaxFruitId = 12;
t.FruitDropIterval = 600;
t.FruitDropIterval2 = 100;
t.FailWarnIterval = 2.2;
t.FailWarnMergerAddTime = .5;
t.PropFreeCount = 1;
t.EarlyDropSpeedBoostCount = 20;
t.EarlyDropSpeedBoostPercent = .3;
t.BaseDropVelocity = -200;
t.LongPressQuickStackThreshold = 2e3;
t.QuickStackDropInterval = 500;
return t;
}();
i.GLFruitDefine = o;
var a = function() {
function t() {}
t.getAnimationName = function(t, e) {
if (n.default.isOpen(n.FruitFeat.FruitWannengFruit)) {
var i = r.default.getInstance().getAnimationName(t, e);
if (null != i) return i;
}
return e;
};
t.Idle1 = "idle1";
t.Idle2 = "idle2";
t.Idle3 = "idle3";
t.Idle4 = "idle4";
return t;
}();
i.GLFruitAnimationDefine = a;
var u = function() {
function t() {}
t.FruitGroup = "group1";
t.WallGroup = "group2";
return t;
}();
i.GLFruitGroupDefine = u;
var s = function() {
function t() {}
t.Bomb = 1001;
t.Shake = 1002;
return t;
}();
i.GLFruitPropIdDefine = s;
var l = function() {
function t() {}
t.fruit_merge_combo = "fruit_merge_combo_";
t.fruit_streak = "fruit_streak_";
t.fruit_merge = "fruit_merge";
t.fruit_merge_big = "fruit_merge_big";
t.fruit_merge_huge = "fruit_merge_huge";
t.fruit_item_undo = "fruit_item_undo";
t.fruit_merge_congratulations = "fruit_merge_congratulations";
t.fruit_new_game = "fruit_new_game";
t.fruit_fall = "fruit_fall";
t.fruit_merge_great_watermelon_explosion = "fruit_merge_great_watermelon_explosion";
t.fruit_merge_great_watermelon_light = "fruit_merge_great_watermelon_light";
return t;
}();
i.GLFruitAudioDefine = l;
cc._RF.pop();
}, {
"../FruitFeature": "FruitFeature",
"../ctrs/FruitWannengFruitCtrl": "FruitWannengFruitCtrl"
} ],
GLFruitDelayDianZanAniTraitCtrl: [ function(t, e, i) {
"use strict";
cc._RF.push(e, "2abc5Mu8PlFKYHJD4pA6i03", "GLFruitDelayDianZanAniTraitCtrl");
Object.defineProperty(i, "__esModule", {
value: !0
});
i.GLFruitDelayDianZanAniTraitCtrl = void 0;
var r = function() {
function t() {
this._isTestMode = !1;
this._featureName = "gl_fruit_delayDianZanAni";
this._timer = null;
}
Object.defineProperty(t, "Instance", {
get: function() {
null == this._instance && (this._instance = new t());
return this._instance;
},
enumerable: !1,
configurable: !0
});
t.prototype.isOpen = function() {
return !!this._isTestMode || GL.Game.IsFeatureOpen(this._featureName);
};
t.prototype.blockTimeAsync = function(e) {
var i = this;
clearTimeout(this._timer);
this._timer = setTimeout(function() {
e();
i._timer = null;
}, 1e3 * t.DelayShowTime);
};
t._instance = null;
t.DelayShowTime = .8;
return t;
}();
i.GLFruitDelayDianZanAniTraitCtrl = r;
cc._RF.pop();
}, {} ],
GLFruitDragRateConfigCtrl: [ function(t, e, i) {
"use strict";
cc._RF.push(e, "805dfO0CqtJ6aqsLbIJHw1F", "GLFruitDragRateConfigCtrl");
Object.defineProperty(i, "__esModule", {
value: !0
});
var r = cc.Vec2, n = function() {
function t() {
this._featureName = "GLFruitDragRateConfig";
this.dragRate = 1;
this.touchBeganPos = r.ZERO;
}
t.getInstance = function() {
if (null == this._instance) {
this._instance = new t();
this._instance.initDragRate();
}
return this._instance;
};
t.prototype.isOpen = function() {
return GL.Game.IsFeatureOpen(this._featureName);
};
t.prototype.initDragRate = function() {
this.dragRate = GL.Game.getFeatureKeyParam(this._featureName, "dragRate") || 1;
console.log("【" + this._featureName + "】当前游戏拖动倍率：" + this.dragRate);
};
t.prototype.setTouchBeganPos = function(t) {
null != t && (this.touchBeganPos = t);
};
t.prototype.getDeltaX = function(t) {
return null == t || null == this.touchBeganPos ? 0 : this.dragRate < 1 ? 0 : (t.x - this.touchBeganPos.x) * (this.dragRate - 1);
};
t._instance = null;
return t;
}();
i.default = n;
cc._RF.pop();
}, {} ],
GLFruitDropLine: [ function(t, e, i) {
"use strict";
cc._RF.push(e, "62c0dPTBsBPoq6FTvy8L9PJ", "GLFruitDropLine");
var r, n = this && this.__extends || (r = function(t, e) {
return (r = Object.setPrototypeOf || {
__proto__: []
} instanceof Array && function(t, e) {
t.__proto__ = e;
} || function(t, e) {
for (var i in e) Object.prototype.hasOwnProperty.call(e, i) && (t[i] = e[i]);
})(t, e);
}, function(t, e) {
r(t, e);
function i() {
this.constructor = t;
}
t.prototype = null === e ? Object.create(e) : (i.prototype = e.prototype, new i());
}), o = this && this.__decorate || function(t, e, i, r) {
var n, o = arguments.length, a = o < 3 ? e : null === r ? r = Object.getOwnPropertyDescriptor(e, i) : r;
if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) a = Reflect.decorate(t, e, i, r); else for (var u = t.length - 1; u >= 0; u--) (n = t[u]) && (a = (o < 3 ? n(a) : o > 3 ? n(e, i, a) : n(e, i)) || a);
return o > 3 && a && Object.defineProperty(e, i, a), a;
}, a = this && this.__values || function(t) {
var e = "function" == typeof Symbol && Symbol.iterator, i = e && t[e], r = 0;
if (i) return i.call(t);
if (t && "number" == typeof t.length) return {
next: function() {
t && r >= t.length && (t = void 0);
return {
value: t && t[r++],
done: !t
};
}
};
throw new TypeError(e ? "Object is not iterable." : "Symbol.iterator is not defined.");
};
Object.defineProperty(i, "__esModule", {
value: !0
});
var u = t("../GLFruitApp"), s = cc._decorator, l = s.ccclass, c = (s.property, function(t) {
n(e, t);
function e() {
var e = null !== t && t.apply(this, arguments) || this;
e._nodeDotArr = [];
e._lastDetectTime = 0;
e._cachedResult = null;
return e;
}
i = e;
e.prototype.show = function(t) {
var e, i;
try {
for (var r = a(this._nodeDotArr), n = r.next(); !n.done; n = r.next()) n.value.color = t;
} catch (t) {
e = {
error: t
};
} finally {
try {
n && !n.done && (i = r.return) && i.call(r);
} finally {
if (e) throw e.error;
}
}
this.node.active = !0;
this.update(.02);
};
e.prototype.hide = function() {
this.node.active = !1;
};
e.prototype.init = function() {
if (!(this._nodeDotArr.length > 0)) for (var t = 0; t < i.DotCount; t++) {
var e = u.default.poolCtr.get("GLFruitDropLineDotItem");
if (cc.isValid(e)) {
e.parent && e.removeFromParent(!1);
this.node.addChild(e);
this._nodeDotArr.push(e);
e.setPosition(0, t * i.DotDistance);
e.active = !0;
}
}
};
e.prototype.update = function(t) {
if (0 != this._nodeDotArr.length) for (var e = i.DotMovespeed * t, r = 0; r < this._nodeDotArr.length; r++) {
var n = this._nodeDotArr[r];
n.y -= e;
var o = Math.abs(n.y), a = 1, u = this.getOpacityDistance(), s = Math.min(.2 * u, 200), l = u - s;
if (o > l) {
a = 1 - (o - l) / s;
a = Math.max(a, 0);
}
o >= u && (a = 0);
n.opacity = 255 * a;
if (n.y <= i.TotalLength) {
n.opacity = 255;
n.y = 0;
}
}
};
e.prototype.getOpacityDistance = function() {
return this.detectBelowPhysicsObject() || i.DotOpacityDistance;
};
e.prototype.detectBelowPhysicsObject = function() {
var t = this.node.convertToWorldSpaceAR(cc.Vec2.ZERO), e = t.add(cc.v2(0, -1920)), i = cc.director.getPhysicsManager().rayCast(t, e, cc.RayCastType.Closest);
if (i.length > 0) {
var r = i[0], n = (r.collider.node, r.point);
return t.sub(n).mag();
}
return null;
};
var i;
e.DotDistance = -70;
e.DotCount = 17;
e.DotMovespeed = 100;
e.TotalLength = i.DotCount * i.DotDistance;
e.DotOpacityDistance = 450;
return i = o([ l ], e);
}(cc.Component));
i.default = c;
cc._RF.pop();
}, {
"../GLFruitApp": "GLFruitApp"
} ],
GLFruitDynamicAccumCtr: [ function(t, e, i) {
"use strict";
cc._RF.push(e, "6ac56ZmHmFL7Y0hAmpLH5ra", "GLFruitDynamicAccumCtr");
Object.defineProperty(i, "__esModule", {
value: !0
});
i.GLFruitDynamicAccum = void 0;
var r = function() {
function t() {
this.id = 0;
this.fromValue = 0;
this.toValue = 0;
this.duration = 0;
this.totalTime = 0;
this.frameValue = 0;
}
t.prototype.tick = function(t) {
this.totalTime += t;
this.frameValue = this.fromValue + Math.min(this.totalTime / this.duration, 1) * (this.toValue - this.fromValue);
null != this.progressCallBack && this.progressCallBack(this.frameValue);
if (this.isOk() && null != this.finishedCallBack) {
this.finishedCallBack();
this.finishedCallBack = null;
}
};
t.prototype.isOk = function() {
return this.totalTime >= this.duration;
};
t.prototype.updateToValue = function(t) {
this.toValue = t;
this.totalTime = 0;
this.fromValue = this.frameValue;
};
return t;
}();
i.GLFruitDynamicAccum = r;
var n = function() {
function t() {
this.dynamicAccum = [];
}
t.prototype.create = function(e, i, n, o, a) {
void 0 === o && (o = null);
void 0 === a && (a = null);
t.totalId++;
var u = new r();
u.id = t.totalId;
u.fromValue = e;
u.toValue = i;
u.duration = n;
u.progressCallBack = o;
u.finishedCallBack = a;
this.dynamicAccum.push(u);
return u;
};
t.prototype.remove = function(t) {
var e = this.dynamicAccum.findIndex(function(e) {
return e.id == t;
});
e > -1 && this.dynamicAccum.splice(e, 1);
};
t.prototype.removeByDynamicAccum = function(t) {
t && this.remove(t.id);
};
t.prototype.tick = function(t) {
for (var e = this.dynamicAccum.length - 1; e >= 0; e--) {
this.dynamicAccum[e].tick(t);
this.dynamicAccum[e].isOk() && this.dynamicAccum.splice(e, 1);
}
};
t.prototype.clear = function() {
this.dynamicAccum = [];
t.totalId = 0;
};
t.totalId = 0;
return t;
}();
i.default = n;
cc._RF.pop();
}, {} ],
GLFruitEffectCtr: [ function(t, e, i) {
"use strict";
cc._RF.push(e, "9b252hL1oVB7J5zULm45VqQ", "GLFruitEffectCtr");
var r = this && this.__awaiter || function(t, e, i, r) {
return new (i || (i = Promise))(function(n, o) {
function a(t) {
try {
s(r.next(t));
} catch (t) {
o(t);
}
}
function u(t) {
try {
s(r.throw(t));
} catch (t) {
o(t);
}
}
function s(t) {
t.done ? n(t.value) : (e = t.value, e instanceof i ? e : new i(function(t) {
t(e);
})).then(a, u);
var e;
}
s((r = r.apply(t, e || [])).next());
});
}, n = this && this.__generator || function(t, e) {
var i, r, n, o, a = {
label: 0,
sent: function() {
if (1 & n[0]) throw n[1];
return n[1];
},
trys: [],
ops: []
};
return o = {
next: u(0),
throw: u(1),
return: u(2)
}, "function" == typeof Symbol && (o[Symbol.iterator] = function() {
return this;
}), o;
function u(t) {
return function(e) {
return s([ t, e ]);
};
}
function s(o) {
if (i) throw new TypeError("Generator is already executing.");
for (;a; ) try {
if (i = 1, r && (n = 2 & o[0] ? r.return : o[0] ? r.throw || ((n = r.return) && n.call(r), 
0) : r.next) && !(n = n.call(r, o[1])).done) return n;
(r = 0, n) && (o = [ 2 & o[0], n.value ]);
switch (o[0]) {
case 0:
case 1:
n = o;
break;

case 4:
a.label++;
return {
value: o[1],
done: !1
};

case 5:
a.label++;
r = o[1];
o = [ 0 ];
continue;

case 7:
o = a.ops.pop();
a.trys.pop();
continue;

default:
if (!(n = a.trys, n = n.length > 0 && n[n.length - 1]) && (6 === o[0] || 2 === o[0])) {
a = 0;
continue;
}
if (3 === o[0] && (!n || o[1] > n[0] && o[1] < n[3])) {
a.label = o[1];
break;
}
if (6 === o[0] && a.label < n[1]) {
a.label = n[1];
n = o;
break;
}
if (n && a.label < n[2]) {
a.label = n[2];
a.ops.push(o);
break;
}
n[2] && a.ops.pop();
a.trys.pop();
continue;
}
o = e.call(t, a);
} catch (t) {
o = [ 6, t ];
r = 0;
} finally {
i = n = 0;
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
var o = t("../defines/GLFruitDefine"), a = t("../effects/GLFruitLikeEffect"), u = t("../effects/GLFruitPanelLikeEffect"), s = t("../GLFruitApp"), l = t("./FruitFullScreenAccCtrl"), c = t("../ui/GLFruitLongPressAcc"), d = function() {
function t() {
this.playingEffectMap = new Map();
this._showWatermelonPanelTimes = 0;
}
t.prototype.getShowWatermelonPanelTimes = function() {
return this._showWatermelonPanelTimes;
};
t.prototype.preloadEffects = function() {
return r(this, void 0, void 0, function() {
return n(this, function(e) {
switch (e.label) {
case 0:
return [ 4, s.default.poolCtr.loadAndCreateObjectPool(t.MergeNew_fx_B, "assets/prefabs/effects/" + t.MergeNew_fx_B, 1) ];

case 1:
e.sent();
return [ 4, s.default.poolCtr.loadAndCreateObjectPool(t.HsFruitMerge_Click_fx_01_B, "assets/prefabs/effects/" + t.HsFruitMerge_Click_fx_01_B, 1) ];

case 2:
e.sent();
return [ 4, s.default.poolCtr.loadAndCreateObjectPool(t.lose_hint_fx, "assets/prefabs/effects/" + t.lose_hint_fx, 1) ];

case 3:
e.sent();
return [ 4, s.default.poolCtr.loadAndCreateObjectPool(t.miaozhun, "assets/prefabs/effects/" + t.miaozhun, 1) ];

case 4:
e.sent();
return [ 2 ];
}
});
});
};
t.prototype.playJuzhongdianzan = function(e, i) {
return r(this, void 0, Promise, function() {
var r;
return n(this, function(n) {
switch (n.label) {
case 0:
return [ 4, this.playEffectAsync(t.juzhongdianzan, cc.Vec3.ZERO, t.NodeEffectUpperRoot, "idle", !1, i) ];

case 1:
r = n.sent();
if (!cc.isValid(r)) return [ 2, null ];
r.getComponent(u.default).play(e);
r.position = cc.Vec3.ZERO;
l.default.inst.isOpen() && l.default.inst.setupClick(r, "局中点赞动画(juzhongdianzan)");
return [ 2, r ];
}
});
});
};
t.prototype.playLikeEffect = function(e, i, o) {
return r(this, void 0, Promise, function() {
var r;
return n(this, function(n) {
switch (n.label) {
case 0:
return [ 4, this.playEffectAsync(t.dianzan, cc.Vec3.ZERO, null, e, !1, o) ];

case 1:
r = n.sent();
if (!cc.isValid(r)) return [ 2, null ];
r.getComponent(a.default).play(e, i);
r.position = cc.Vec3.ZERO;
return [ 2, r ];
}
});
});
};
t.prototype.playBoardFullPanelEffect = function(e, i) {
return r(this, void 0, Promise, function() {
var r;
return n(this, function() {
r = this.playEffect(t.BoardFullPanel, e, t.NodeEffectUpperRoot, "idle", !1, i);
if (!cc.isValid(r)) {
i && i();
return [ 2, null ];
}
r.position = e;
l.default.inst.isOpen() && l.default.inst.setupClick(r, "结束动画(BoardFullPanel)");
return [ 2, r ];
});
});
};
t.prototype.playGoldWatermelonPanelEffect = function(e, i) {
return r(this, void 0, Promise, function() {
var r;
return n(this, function(n) {
switch (n.label) {
case 0:
return [ 4, this.playEffectAsync(t.GoldWatermelonPanel, e, t.NodeEffectUpperRoot, "idle", !1, i) ];

case 1:
r = n.sent();
if (!cc.isValid(r)) return [ 2, null ];
r.scale = 1.3;
return [ 2, r ];
}
});
});
};
t.prototype.playWatermelonPanelEffect = function(e) {
return r(this, void 0, Promise, function() {
var i;
return n(this, function(r) {
switch (r.label) {
case 0:
this._showWatermelonPanelTimes++;
return [ 4, this.playEffectAsync(t.WatermelonPanel, e, t.NodeEffectUpperRoot, "idle", !1, function() {
s.default.adCtr.midMewFruitWatermelon();
}) ];

case 1:
i = r.sent();
if (!cc.isValid(i)) return [ 2, null ];
s.default.audioMgr.playEffect(o.GLFruitAudioDefine.fruit_merge_congratulations);
i.position = e;
l.default.inst.isOpen() && l.default.inst.setupClick(i, "激励动画(WatermelonPanel)");
return [ 2, i ];
}
});
});
};
t.prototype.playPropBombEffect = function(e, i) {
var r = this.playEffect(t.miaozhun, e, i, "zhunxing", !0);
if (!cc.isValid(r)) return null;
r.position = e;
return r;
};
t.prototype.playLoseEffect = function(e, i) {
var r = this.playEffect(t.lose_hint_fx, e, i, "idle", !0);
if (!cc.isValid(r)) return null;
r.position = e;
return r;
};
t.prototype.playClickEffect = function(e) {
this.playEffectAsync(t.HsFruitMerge_Click_fx_01_B, e, t.NodeClickEffectRoot);
};
t.prototype.playMergeNewEffect = function(e, i) {
return r(this, void 0, void 0, function() {
var r;
return n(this, function(n) {
switch (n.label) {
case 0:
return [ 4, this.playEffectAsync(t.MergeNew_fx_B, e, t.NodeMergeNewEffectRoot, i) ];

case 1:
r = n.sent();
if (!cc.isValid(r)) return [ 2, null ];
r.scale = o.GLFruitDefine.FruitScale;
return [ 2 ];
}
});
});
};
t.prototype.playEffectAsync = function(e, i, o, a, u, l) {
void 0 === o && (o = null);
void 0 === a && (a = "idle");
void 0 === u && (u = !1);
void 0 === l && (l = null);
return r(this, void 0, Promise, function() {
var r;
return n(this, function(n) {
switch (n.label) {
case 0:
o = o || t.NodeEffectRoot;
if (!cc.isValid(o)) return [ 2, null ];
n.label = 1;

case 1:
n.trys.push([ 1, 4, , 5 ]);
return s.default.poolCtr.isHasPool(e) ? [ 3, 3 ] : [ 4, s.default.poolCtr.loadAndCreateObjectPool(e, "assets/prefabs/effects/" + e, 1) ];

case 2:
n.sent();
n.label = 3;

case 3:
return [ 2, this.playEffect(e, i, o, a, u, l) ];

case 4:
r = n.sent();
console.log("Failed to load or play effect " + e + ":", r);
l && l();
return [ 2, null ];

case 5:
return [ 2 ];
}
});
});
};
t.prototype.playEffect = function(e, i, r, n, o, u) {
var d, p, f = this;
void 0 === r && (r = null);
void 0 === n && (n = "idle");
void 0 === o && (o = !1);
void 0 === u && (u = null);
r = r || t.NodeEffectRoot;
if (!cc.isValid(r)) return null;
if (!s.default.poolCtr.isHasPool(e)) return null;
var h = s.default.poolCtr.get(e);
if (!cc.isValid(h)) {
console.log("Effect node for " + e + " is not valid");
return null;
}
h.parent = r;
h.setPosition(h.parent.convertToNodeSpaceAR(i));
h.active = !0;
var g = h.getComponent(sp.Skeleton);
g || (g = h.getComponentInChildren(sp.Skeleton));
if (!cc.isValid(g)) return null;
if (!cc.isValid(g.skeletonData) || !cc.isValid(null === (d = g.skeletonData) || void 0 === d ? void 0 : d.skeletonJson)) {
console.log("Skeleton data for " + e + " is missing or invalid");
return null;
}
l.default.inst.applyInitialSpeed(e, g);
this.playingEffectMap.set(h, 1);
null === (p = c.default.getInstance()) || void 0 === p || p.trackPlayingEffect(h, e);
o ? this.playSkeleton(g, n, o) : this.playSkeleton(g, n, o, function() {
u && u();
if (e == t.dianzan) {
var i = h.getComponent(a.default);
i && i.clearSpriteFrame();
}
f.recycleEffect(h, e);
});
return h;
};
t.prototype.playSkeleton = function(t, e, i, r) {
var n;
void 0 === i && (i = !1);
void 0 === r && (r = null);
if (cc.isValid(t)) if (cc.isValid(t.skeletonData) && cc.isValid(null === (n = t.skeletonData) || void 0 === n ? void 0 : n.skeletonJson)) {
t.node.active = !0;
if (i) t.setAnimation(0, e, i); else {
t.setCompleteListener(function() {
null == t || t.setCompleteListener(null);
t.node.active = !1;
r && r();
});
t.setAnimation(0, e, i);
}
} else {
console.log("Skeleton data is invalid for animation: " + e);
r && r();
}
};
t.prototype.recycleEffect = function(t, e) {
var i;
if (cc.isValid(t) && e) {
l.default.inst.reportAndClear(t);
var r = t.getComponent(sp.Skeleton);
if (r) {
r.setCompleteListener(null);
r.node.active = !1;
r.timeScale = 1;
}
this.playingEffectMap.delete(t);
null === (i = c.default.getInstance()) || void 0 === i || i.untrackPlayingEffect(t);
s.default.poolCtr.push(e, t);
}
};
t.prototype.clear = function() {
var t;
if (null != this.playingEffectMap) {
this.playingEffectMap.forEach(function(t, e) {
if (null != e && cc.isValid(e)) {
var i = e.getComponent(sp.Skeleton);
if (i) {
i.setCompleteListener(null);
i.node.active = !1;
}
s.default.poolCtr.push(e.name, e);
}
});
this.playingEffectMap.clear();
null === (t = c.default.getInstance()) || void 0 === t || t.clearPlayingEffects();
this._showWatermelonPanelTimes = 0;
}
};
t.MergeNew_fx_B = "MergeNew_fx_B";
t.HsFruitMerge_Click_fx_01_B = "HsFruitMerge_Click_fx_01_B";
t.lose_hint_fx = "lose_hint_fx";
t.WatermelonPanel = "WatermelonPanel";
t.GoldWatermelonPanel = "GoldWatermelonPanel";
t.BoardFullPanel = "BoardFullPanel";
t.dianzan = "dianzan";
t.juzhongdianzan = "juzhongdianzan";
t.miaozhun = "miaozhun";
t.NodeEffectRoot = null;
t.NodeEffectUpperRoot = null;
t.NodeClickEffectRoot = null;
t.NodeMergeNewEffectRoot = null;
return t;
}();
i.default = d;
cc._RF.pop();
}, {
"../GLFruitApp": "GLFruitApp",
"../defines/GLFruitDefine": "GLFruitDefine",
"../effects/GLFruitLikeEffect": "GLFruitLikeEffect",
"../effects/GLFruitPanelLikeEffect": "GLFruitPanelLikeEffect",
"../ui/GLFruitLongPressAcc": "GLFruitLongPressAcc",
"./FruitFullScreenAccCtrl": "FruitFullScreenAccCtrl"
} ],
GLFruitEntryStateNode: [ function(t, e, i) {
"use strict";
cc._RF.push(e, "ce666xeSxdHAZkSoYHzL2iU", "GLFruitEntryStateNode");
var r, n = this && this.__extends || (r = function(t, e) {
return (r = Object.setPrototypeOf || {
__proto__: []
} instanceof Array && function(t, e) {
t.__proto__ = e;
} || function(t, e) {
for (var i in e) Object.prototype.hasOwnProperty.call(e, i) && (t[i] = e[i]);
})(t, e);
}, function(t, e) {
r(t, e);
function i() {
this.constructor = t;
}
t.prototype = null === e ? Object.create(e) : (i.prototype = e.prototype, new i());
});
Object.defineProperty(i, "__esModule", {
value: !0
});
var o = function(t) {
n(e, t);
function e() {
return null !== t && t.apply(this, arguments) || this;
}
e.prototype.onEnter = function() {};
e.prototype.onExit = function() {};
return e;
}(t("../../core/fsmNode/GLFruitStateNode").default);
i.default = o;
cc._RF.pop();
}, {
"../../core/fsmNode/GLFruitStateNode": "GLFruitStateNode"
} ],
GLFruitExperimentCtr: [ function(t, e, i) {
"use strict";
cc._RF.push(e, "76aa634Ec9Fe6n4EZb0kLRT", "GLFruitExperimentCtr");
var r = this && this.__awaiter || function(t, e, i, r) {
return new (i || (i = Promise))(function(n, o) {
function a(t) {
try {
s(r.next(t));
} catch (t) {
o(t);
}
}
function u(t) {
try {
s(r.throw(t));
} catch (t) {
o(t);
}
}
function s(t) {
t.done ? n(t.value) : (e = t.value, e instanceof i ? e : new i(function(t) {
t(e);
})).then(a, u);
var e;
}
s((r = r.apply(t, e || [])).next());
});
}, n = this && this.__generator || function(t, e) {
var i, r, n, o, a = {
label: 0,
sent: function() {
if (1 & n[0]) throw n[1];
return n[1];
},
trys: [],
ops: []
};
return o = {
next: u(0),
throw: u(1),
return: u(2)
}, "function" == typeof Symbol && (o[Symbol.iterator] = function() {
return this;
}), o;
function u(t) {
return function(e) {
return s([ t, e ]);
};
}
function s(o) {
if (i) throw new TypeError("Generator is already executing.");
for (;a; ) try {
if (i = 1, r && (n = 2 & o[0] ? r.return : o[0] ? r.throw || ((n = r.return) && n.call(r), 
0) : r.next) && !(n = n.call(r, o[1])).done) return n;
(r = 0, n) && (o = [ 2 & o[0], n.value ]);
switch (o[0]) {
case 0:
case 1:
n = o;
break;

case 4:
a.label++;
return {
value: o[1],
done: !1
};

case 5:
a.label++;
r = o[1];
o = [ 0 ];
continue;

case 7:
o = a.ops.pop();
a.trys.pop();
continue;

default:
if (!(n = a.trys, n = n.length > 0 && n[n.length - 1]) && (6 === o[0] || 2 === o[0])) {
a = 0;
continue;
}
if (3 === o[0] && (!n || o[1] > n[0] && o[1] < n[3])) {
a.label = o[1];
break;
}
if (6 === o[0] && a.label < n[1]) {
a.label = n[1];
n = o;
break;
}
if (n && a.label < n[2]) {
a.label = n[2];
a.ops.push(o);
break;
}
n[2] && a.ops.pop();
a.trys.pop();
continue;
}
o = e.call(t, a);
} catch (t) {
o = [ 6, t ];
r = 0;
} finally {
i = n = 0;
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
var o = t("./func/GLFruitRandomWeight/GLFruitRandomWeightCtr"), a = function() {
function t() {}
t.prototype.init = function() {};
t.prototype.loadAsset = function() {
return r(this, void 0, void 0, function() {
return n(this, function(t) {
switch (t.label) {
case 0:
return o.default.isOpen() ? [ 4, o.default.ins().loadAsset() ] : [ 3, 2 ];

case 1:
t.sent();
t.label = 2;

case 2:
return [ 2 ];
}
});
});
};
t.prototype.clear = function() {
o.default.isOpen() && o.default.ins().clear();
};
return t;
}();
i.default = a;
cc._RF.pop();
}, {
"./func/GLFruitRandomWeight/GLFruitRandomWeightCtr": "GLFruitRandomWeightCtr"
} ],
GLFruitFaceNotRotateTraitCtrl: [ function(t, e, i) {
"use strict";
cc._RF.push(e, "978efwaAkVOa4arq/Ozlru7", "GLFruitFaceNotRotateTraitCtrl");
var r = this && this.__awaiter || function(t, e, i, r) {
return new (i || (i = Promise))(function(n, o) {
function a(t) {
try {
s(r.next(t));
} catch (t) {
o(t);
}
}
function u(t) {
try {
s(r.throw(t));
} catch (t) {
o(t);
}
}
function s(t) {
t.done ? n(t.value) : (e = t.value, e instanceof i ? e : new i(function(t) {
t(e);
})).then(a, u);
var e;
}
s((r = r.apply(t, e || [])).next());
});
}, n = this && this.__generator || function(t, e) {
var i, r, n, o, a = {
label: 0,
sent: function() {
if (1 & n[0]) throw n[1];
return n[1];
},
trys: [],
ops: []
};
return o = {
next: u(0),
throw: u(1),
return: u(2)
}, "function" == typeof Symbol && (o[Symbol.iterator] = function() {
return this;
}), o;
function u(t) {
return function(e) {
return s([ t, e ]);
};
}
function s(o) {
if (i) throw new TypeError("Generator is already executing.");
for (;a; ) try {
if (i = 1, r && (n = 2 & o[0] ? r.return : o[0] ? r.throw || ((n = r.return) && n.call(r), 
0) : r.next) && !(n = n.call(r, o[1])).done) return n;
(r = 0, n) && (o = [ 2 & o[0], n.value ]);
switch (o[0]) {
case 0:
case 1:
n = o;
break;

case 4:
a.label++;
return {
value: o[1],
done: !1
};

case 5:
a.label++;
r = o[1];
o = [ 0 ];
continue;

case 7:
o = a.ops.pop();
a.trys.pop();
continue;

default:
if (!(n = a.trys, n = n.length > 0 && n[n.length - 1]) && (6 === o[0] || 2 === o[0])) {
a = 0;
continue;
}
if (3 === o[0] && (!n || o[1] > n[0] && o[1] < n[3])) {
a.label = o[1];
break;
}
if (6 === o[0] && a.label < n[1]) {
a.label = n[1];
n = o;
break;
}
if (n && a.label < n[2]) {
a.label = n[2];
a.ops.push(o);
break;
}
n[2] && a.ops.pop();
a.trys.pop();
continue;
}
o = e.call(t, a);
} catch (t) {
o = [ 6, t ];
r = 0;
} finally {
i = n = 0;
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
var o = function() {
function t() {
this._featureName = "GLFruitFaceNotRotate";
this.bundleName = "Remote_gl_fruit_faceNotRotate";
this.fruitPrefabName = [ "prefabs/Fruit_01", "prefabs/Fruit_02", "prefabs/Fruit_03", "prefabs/Fruit_04", "prefabs/Fruit_05", "prefabs/Fruit_06", "prefabs/Fruit_07", "prefabs/Fruit_08", "prefabs/Fruit_09", "prefabs/Fruit_10", "prefabs/Fruit_11", "prefabs/Fruit_12" ];
this.resIsLoading = !1;
this.fruitPrefabList = new Map();
this.realOpen = !0;
}
t.getInstance = function() {
null == this._instance && (this._instance = new t());
return this._instance;
};
t.prototype.isOpen = function() {
return this.realOpen && GL.Game.IsFeatureOpen(this._featureName);
};
t.prototype.init = function() {
var t, e;
return r(this, void 0, void 0, function() {
var i;
return n(this, function(r) {
switch (r.label) {
case 0:
console.log("【" + this._featureName + "】init 开始, featureOpen=" + GL.Game.IsFeatureOpen(this._featureName) + ", realOpen=" + this.realOpen);
return [ 4, this.loadRes() ];

case 1:
r.sent();
i = null !== (e = null === (t = this.fruitPrefabList) || void 0 === t ? void 0 : t.size) && void 0 !== e ? e : 0;
if (null == this.fruitPrefabList || i != this.fruitPrefabName.length) {
console.log("【" + this._featureName + "】资源加载不完整, realOpen=false, loaded=" + i + "/" + this.fruitPrefabName.length);
this.realOpen = !1;
} else console.log("【" + this._featureName + "】init 完成, loaded=" + i + ", realOpen=" + this.realOpen);
return [ 2 ];
}
});
});
};
t.prototype.loadRes = function() {
return r(this, void 0, void 0, function() {
var t, e, i = this;
return n(this, function(r) {
switch (r.label) {
case 0:
if (null != this.fruitPrefabList && this.fruitPrefabList.size == this.fruitPrefabName.length) {
console.log("【" + this._featureName + "】资源已就绪, 跳过加载, size=" + this.fruitPrefabList.size);
return [ 2 ];
}
if (1 == this.resIsLoading) {
console.log("【" + this._featureName + "】资源加载中, 跳过重复请求");
return [ 2 ];
}
if (!GL.Game.resLoaderLoadBundle) {
console.log("【" + this._featureName + "】resLoaderLoadBundle 不可用, 中止加载");
return [ 2 ];
}
console.log("【" + this._featureName + "】开始加载 bundle: " + this.bundleName);
this.resIsLoading = !0;
t = 0;
return [ 4, GL.Game.resLoaderLoadBundle(this.bundleName, !0) ];

case 1:
return (e = r.sent()) ? [ 4, new Promise(function(r) {
for (var n = function(n) {
e.load(i.fruitPrefabName[n], function(e, o) {
if (e) console.log("【" + i._featureName + "】加载失败: " + i.fruitPrefabName[n] + ", err=", e); else {
console.log("【" + i._featureName + "】加载成功: " + i.fruitPrefabName[n]);
i.fruitPrefabList.set(n + 1, o);
}
if (++t >= i.fruitPrefabName.length) {
i.resIsLoading = !1;
console.log("【" + i._featureName + "】bundle 内 prefab 加载结束, loaded=" + i.fruitPrefabList.size + "/" + i.fruitPrefabName.length);
r(!0);
}
});
}, o = 0; o < i.fruitPrefabName.length; o++) n(o);
}) ] : [ 3, 3 ];

case 2:
r.sent();
return [ 3, 4 ];

case 3:
console.log("【" + this._featureName + "】加载 bundle 失败: " + this.bundleName);
this.resIsLoading = !1;
r.label = 4;

case 4:
return [ 2 ];
}
});
});
};
t.prototype.getFruitPrefab = function(t) {
var e, i, r, n = null === (e = this.fruitPrefabList) || void 0 === e ? void 0 : e.get(t);
null == n && console.log("【" + this._featureName + "】getFruitPrefab 缺失, id=" + t + ", loaded=" + (null !== (r = null === (i = this.fruitPrefabList) || void 0 === i ? void 0 : i.size) && void 0 !== r ? r : 0));
return n;
};
t._instance = null;
return t;
}();
i.default = o;
cc._RF.pop();
}, {} ],
GLFruitFailStateNode: [ function(t, e, i) {
"use strict";
cc._RF.push(e, "b0b1deUPVRGWYIq/sifh4l/", "GLFruitFailStateNode");
var r, n = this && this.__extends || (r = function(t, e) {
return (r = Object.setPrototypeOf || {
__proto__: []
} instanceof Array && function(t, e) {
t.__proto__ = e;
} || function(t, e) {
for (var i in e) Object.prototype.hasOwnProperty.call(e, i) && (t[i] = e[i]);
})(t, e);
}, function(t, e) {
r(t, e);
function i() {
this.constructor = t;
}
t.prototype = null === e ? Object.create(e) : (i.prototype = e.prototype, new i());
});
Object.defineProperty(i, "__esModule", {
value: !0
});
var o = t("../../core/fsmNode/GLFruitStateNode"), a = t("../GLFruitApp"), u = t("../traits/GLFruitRepeatFruitAwardTraitCtrl"), s = t("../traits/GLFruitTwoFruitOnceTraitCtrl"), l = t("../traits/GLFruitShakeOffsetAddByUseTimesCtrl"), c = t("../FruitFeature"), d = t("../ctrs/GLFruitRevivePopupCtr"), p = function(t) {
n(e, t);
function e() {
return null !== t && t.apply(this, arguments) || this;
}
e.prototype.onEnter = function() {
var t = this;
d.default.getInstance().canRevive() ? d.default.getInstance().show(function() {
t.gameOver();
}) : c.default.isOpen(c.FruitFeat.FruitDeathReviveShake) && !a.default.user.getDataVo().roundDataVo.hasRevived ? a.default.popupCtr.showDeathRevivePop(function() {
a.default.user.getDataVo().roundDataVo.hasRevived = !0;
a.default.user.saveData();
a.default.gameStateCtr.runShakeState();
a.default.gameStateCtr.setShakeStateFromAd(!1);
}, function() {
t.gameOver();
}) : this.gameOver();
};
e.prototype.onExit = function() {};
e.prototype.gameOver = function() {
a.default.mergerCtr.isPause = !1;
a.default.mergerCtr.isOperationFruits = !0;
var t = a.default.user.getScore(), e = a.default.user.getBestScore();
a.default.isReplay = !1;
a.default.popupCtr.hidePopup();
u.default.getInstance().isOpen() && u.default.getInstance().gameOver();
s.default.getInstance().isOpen() && s.default.getInstance().onGameEnd();
a.default.effectCtr.playBoardFullPanelEffect(cc.Vec3.ZERO, function() {
a.default.popupCtr.showGameResult(t, e);
a.default.adCtr.postResult();
});
a.default.user.getDataVo().hasLost = !0;
a.default.failZoneCtr.clear();
a.default.mergerCtr.removePhysicsComponents();
a.default.user.saveData();
a.default.user.syncGameData();
l.default.getInstance().isOpen() && l.default.getInstance().addValue();
};
return e;
}(o.default);
i.default = p;
cc._RF.pop();
}, {
"../../core/fsmNode/GLFruitStateNode": "GLFruitStateNode",
"../FruitFeature": "FruitFeature",
"../GLFruitApp": "GLFruitApp",
"../ctrs/GLFruitRevivePopupCtr": "GLFruitRevivePopupCtr",
"../traits/GLFruitRepeatFruitAwardTraitCtrl": "GLFruitRepeatFruitAwardTraitCtrl",
"../traits/GLFruitShakeOffsetAddByUseTimesCtrl": "GLFruitShakeOffsetAddByUseTimesCtrl",
"../traits/GLFruitTwoFruitOnceTraitCtrl": "GLFruitTwoFruitOnceTraitCtrl"
} ],
GLFruitFailZoneCtr: [ function(t, e, i) {
"use strict";
cc._RF.push(e, "2f679e0OENDTrFXUdJXo07y", "GLFruitFailZoneCtr");
Object.defineProperty(i, "__esModule", {
value: !0
});
var r = t("../defines/GLFruitDefine"), n = t("../FruitFeature"), o = t("../GLFruitApp"), a = t("../traits/GLFruitOnDangerShowDeadLineTraitCtrl"), u = t("./FruitDeadEndShakePopupCtrl"), s = t("./FruitAutoShakeOnDangerCtrl"), l = t("../traits/GLFruitDeadCheckOptimizeTraitCtrl"), c = function() {
function t(t) {
this._fruit = null;
this._time = 0;
this._hintEffect = null;
this._extraTime = 0;
this._round = 0;
this._fruit = t;
this._time = r.GLFruitDefine.FailWarnIterval;
}
t.prototype.tick = function(t) {
var e, i = this._fruit && this._fruit.getItem();
if (this._fruit && i && cc.isValid(i.node)) {
var r = o.default.gameStateCtr.getGameView().getOutBoundBoxMinY(), a = !1;
if (n.default.isOpen(n.FruitFeat.FruitFailOnAnyOutBound)) {
if (this._fruit.getContactFruitCount() > 0) {
var s = i.node.convertToWorldSpaceAR(cc.Vec3.ZERO), c = i.getPhysicsCircleCollider().radius * i.node.scale;
a = s.y - c + 18 >= r;
}
} else {
var d = (null === (e = null === o.default || void 0 === o.default ? void 0 : o.default.mergerCtr) || void 0 === e ? void 0 : e.getTurnCount()) || 0;
if (l.default.getInstance().isOpen() && d >= this._round && this._fruit.getContactFruitCount() > 0) {
s = this._fruit.getItem().node.convertToWorldSpaceAR(cc.Vec3.ZERO), c = this._fruit.getItem().getPhysicsCircleCollider().radius * this._fruit.getItem().node.scale;
a = s.y + c / 2 >= r;
} else a = this._fruit.getContactFruitCount() > 0 && this._fruit.isOutBoundBox(r);
}
l.default.getInstance().getUseShakeItemFlag() && (a = !1);
if (a) {
this._time -= t;
if (this._time <= 0) {
this._extraTime -= t;
this._extraTime <= 0 && o.default.gameStateCtr.isPlaySatte() && (u.default.getInstance().tryShowDeadEndShakePopup(this._fruit) || o.default.gameStateCtr.runFailState());
}
this.addHintEffect();
} else {
this.removeHintEffect();
u.default.getInstance().onFruitOutDeadEndZone(this._fruit);
}
}
};
t.prototype.isPlayingHintEffect = function() {
return !!this._hintEffect;
};
t.prototype.removeHintEffect = function() {
if (this._hintEffect) {
o.default.effectCtr.recycleEffect(this._hintEffect, this._hintEffect.name);
this._hintEffect = null;
}
this._time = r.GLFruitDefine.FailWarnIterval;
this._extraTime = 0;
};
t.prototype.addHintEffect = function() {
var t = this._fruit && this._fruit.getItem();
if (null == this._hintEffect && t && t.node && cc.isValid(t.node)) {
this._hintEffect = o.default.effectCtr.playLoseEffect(cc.Vec3.ZERO, t.node);
this._hintEffect.scale = 2.25;
}
};
t.prototype.addExtraTime = function() {
this._extraTime += r.GLFruitDefine.FailWarnMergerAddTime;
};
t.prototype.setRound = function(t) {
this._round = t;
};
return t;
}(), d = function() {
function t() {
this._failDetectorMap = new Map();
}
t.prototype.addFruit = function(t) {
var e, i = new c(t);
if (l.default.getInstance().isOpen() && null != i) {
var r = t.getRound();
i.setRound(r >= 0 ? r : (null === (e = null === o.default || void 0 === o.default ? void 0 : o.default.mergerCtr) || void 0 === e ? void 0 : e.getTurnCount()) || 0);
}
this._failDetectorMap.set(t, i);
};
t.prototype.removeFruit = function(t) {
if (this._failDetectorMap.has(t)) {
this._failDetectorMap.get(t).removeHintEffect();
this._failDetectorMap.delete(t);
}
u.default.getInstance().onFruitRemoved(t);
};
t.prototype.tick = function(t) {
if (o.default.gameStateCtr.isPlaySatte() && !o.default.mergerCtr.isPause && !o.default.popupCtr.isShowPopup() && !o.default.propCtr.getIsUseingShakeProp()) {
var e = !1;
this._failDetectorMap.forEach(function(i) {
i.tick(t);
e || (e = i.isPlayingHintEffect());
});
e && s.default.getInstance().onDangerHint();
a.default.getInstance().isOpen() && a.default.getInstance().isShowingDeadLine() != e && e && a.default.getInstance().showDeadLine();
}
};
t.prototype.clear = function() {
this.removeAllHintEffects();
this._failDetectorMap.clear();
};
t.prototype.addExtraTime = function() {
this._failDetectorMap.forEach(function(t) {
t.addExtraTime();
});
};
t.prototype.removeAllHintEffects = function() {
this._failDetectorMap.forEach(function(t) {
t.removeHintEffect();
});
};
return t;
}();
i.default = d;
cc._RF.pop();
}, {
"../FruitFeature": "FruitFeature",
"../GLFruitApp": "GLFruitApp",
"../defines/GLFruitDefine": "GLFruitDefine",
"../traits/GLFruitDeadCheckOptimizeTraitCtrl": "GLFruitDeadCheckOptimizeTraitCtrl",
"../traits/GLFruitOnDangerShowDeadLineTraitCtrl": "GLFruitOnDangerShowDeadLineTraitCtrl",
"./FruitAutoShakeOnDangerCtrl": "FruitAutoShakeOnDangerCtrl",
"./FruitDeadEndShakePopupCtrl": "FruitDeadEndShakePopupCtrl"
} ],
GLFruitFuncBase: [ function(t, e, i) {
"use strict";
cc._RF.push(e, "445f82rkF1DRrCc9IC2PxnN", "GLFruitFuncBase");
var r = this && this.__read || function(t, e) {
var i = "function" == typeof Symbol && t[Symbol.iterator];
if (!i) return t;
var r, n, o = i.call(t), a = [];
try {
for (;(void 0 === e || e-- > 0) && !(r = o.next()).done; ) a.push(r.value);
} catch (t) {
n = {
error: t
};
} finally {
try {
r && !r.done && (i = o.return) && i.call(o);
} finally {
if (n) throw n.error;
}
}
return a;
}, n = this && this.__spread || function() {
for (var t = [], e = 0; e < arguments.length; e++) t = t.concat(r(arguments[e]));
return t;
};
Object.defineProperty(i, "__esModule", {
value: !0
});
var o = t("../../core/GLFruitInstance"), a = function() {
function t() {}
t.ins = function() {
for (var t = [], e = 0; e < arguments.length; e++) t[e] = arguments[e];
return o.default.get.apply(o.default, n([ this ], t));
};
t.getInstance = function() {
for (var t = [], e = 0; e < arguments.length; e++) t[e] = arguments[e];
return o.default.get.apply(o.default, n([ this ], t));
};
t.isOpen = function() {
return this.justIsFeatureOpen();
};
t.justIsFeatureOpen = function() {
if (null == this.featureName) throw new Error("FuncBase featureName must be implemented");
return GL.Game.IsFeatureOpen(this.featureName);
};
t.prototype.bindEvent = function() {};
t.prototype.unbindEvent = function() {};
t.prototype.onEventReceived = function(t) {
for (var e = [], i = 1; i < arguments.length; i++) e[i - 1] = arguments[i];
};
t.prototype.getFeatureName = function() {
var t = this.constructor;
if (!t.featureName) throw new Error("FuncBase featureName must be implemented");
return t.featureName;
};
t.prototype.addAutoLog = function() {};
t.featureName = null;
return t;
}();
i.default = a;
cc._RF.pop();
}, {
"../../core/GLFruitInstance": "GLFruitInstance"
} ],
GLFruitGMTool: [ function(t, e, i) {
"use strict";
cc._RF.push(e, "9f3fdvz5epGCpbKDD67t2Z+", "GLFruitGMTool");
Object.defineProperty(i, "__esModule", {
value: !0
});
var r = t("../FruitFeature"), n = function() {
function t() {}
Object.defineProperty(t, "Instance", {
get: function() {
this._instance || (this._instance = new t());
return this._instance;
},
enumerable: !1,
configurable: !0
});
t.prototype.isOpen = function() {
return r.default.isOpen(r.FruitFeat.GLFruitGMTool);
};
t._instance = null;
return t;
}();
i.default = n;
cc._RF.pop();
}, {
"../FruitFeature": "FruitFeature"
} ],
GLFruitGMView: [ function(t, e, i) {
"use strict";
cc._RF.push(e, "c050c9QN2tO449VTNPwhSZw", "GLFruitGMView");
Object.defineProperty(i, "__esModule", {
value: !0
});
var r = t("../traits/GLFruitGMTool"), n = t("../tools/GLFruitGmManager"), o = t("../tools/GLFruitTools"), a = t("../defines/GLFruitDefine"), u = cc.color(20, 20, 20), s = cc.color(100, 100, 100);
function l(t) {
var e = t;
"undefined" != typeof e.enableBold && (e.enableBold = !0);
}
function c(t, e, i, r, n, o) {
void 0 === n && (n = 255);
void 0 === o && (o = 0);
var a = new cc.Node("Bg");
a.setAnchorPoint(.5, .5);
a.setContentSize(e, i);
a.opacity = n;
var u = a.addComponent(cc.Graphics);
u.fillColor = r;
o > 0 ? u.roundRect(-e / 2, -i / 2, e, i, o) : u.rect(-e / 2, -i / 2, e, i);
u.fill();
t.addChild(a);
return a;
}
function d(t, e, i, r) {
var n = new cc.Node("Label");
n.setAnchorPoint(.5, .5);
n.setContentSize(t.width || 100, t.height || i + 8);
var o = n.addComponent(cc.Label);
o.string = e;
o.fontSize = i;
o.lineHeight = i + 6;
o.overflow = cc.Label.Overflow.SHRINK;
o.horizontalAlign = cc.Label.HorizontalAlign.CENTER;
o.verticalAlign = cc.Label.VerticalAlign.CENTER;
l(o);
n.color = r;
t.addChild(n);
n.setPosition(0, 0);
return o;
}
function p(t, e, i, r, n, o, a, u) {
var s = new cc.Node("Btn");
s.setAnchorPoint(.5, .5);
s.setContentSize(i, r);
var l = s.addComponent(cc.Graphics);
l.fillColor = n;
l.roundRect(-i / 2, -r / 2, i, r, 12);
l.fill();
var c = s.addComponent(cc.Button);
c.transition = cc.Button.Transition.SCALE;
c.zoomScale = 1.05;
c.target = s;
s.on("click", a, u);
d(s, e, o, cc.Color.WHITE);
t.addChild(s);
return s;
}
function f(t, e, i, r, n) {
var o = new cc.Node(t);
o.setAnchorPoint(.5, .5);
o.setContentSize(e, i);
o.setPosition(0, 0);
o.color = n;
var a = o.addComponent(cc.Label);
a.fontSize = r;
a.lineHeight = r + 6;
a.overflow = cc.Label.Overflow.SHRINK;
a.horizontalAlign = cc.Label.HorizontalAlign.CENTER;
a.verticalAlign = cc.Label.VerticalAlign.CENTER;
l(a);
return a;
}
function h(t, e, i) {
for (var r = [ t.textLabel, t.placeholderLabel ], n = 0; n < r.length; n++) {
var o = r[n];
if (o && o.node && cc.isValid(o.node)) {
o.node.setAnchorPoint(.5, .5);
o.node.setContentSize(e, i);
o.node.setPosition(0, 0);
o.horizontalAlign = cc.Label.HorizontalAlign.CENTER;
o.verticalAlign = cc.Label.VerticalAlign.CENTER;
}
}
}
function g(t, e, i, r) {
t.string = e;
if (t.textLabel) {
t.textLabel.string = e;
t.textLabel.node.color = u;
t.textLabel.node.active = !!e;
}
t.placeholderLabel && (t.placeholderLabel.node.active = !e);
h(t, i, r);
}
function F(t, e, i, r, n, o) {
void 0 === o && (o = "");
var a = c(t, e, i, cc.color(255, 255, 255), 255, 8);
a.name = "EditBox";
var d = f("TEXT_LABEL", e, i, n, u), p = f("PLACEHOLDER_LABEL", e, i, n, s);
a.addChild(d.node);
a.addChild(p.node);
p.string = r;
var F = a.addComponent(cc.EditBox);
F.background = null;
F.textLabel = d;
F.placeholderLabel = p;
F.placeholder = r;
F.fontSize = n;
F.fontColor = u;
F.placeholderFontSize = n;
F.placeholderFontColor = s;
F.inputMode = cc.EditBox.InputMode.NUMERIC;
F.inputFlag = cc.EditBox.InputFlag.SENSITIVE;
F.maxLength = 6;
F.stayOnTop = !1;
l(d);
l(p);
g(F, o, e, i);
var v = function() {
return h(F, e, i);
};
a.on("text-changed", v, y);
a.on("editing-did-ended", v, y);
a.on("editing-did-began", v, y);
return F;
}
var y = function() {
function t() {}
t.attach = function(e) {
var i = r.default.Instance.isOpen();
console.log("[GLFruitGM] attach called, isOpen=" + i + ", CC_DEBUG=" + !1);
if (i) if (e && e.node && cc.isValid(e.node)) {
var u = null, s = null, l = null, d = null, f = o.default.FindNode(e.node, "nodeTop", "btnBack");
if (f && cc.isValid(f)) {
var h = p(e.node, "GM", 160, 72, cc.color(60, 120, 220), 36, function() {
d.active = !d.active;
}, t);
h.zIndex = 1e3;
var g = f.height / 2, y = f.convertToWorldSpaceAR(cc.Vec3.ZERO), v = cc.v3(y.x, y.y - (g + 16 + 36), 0);
h.setPosition(e.node.convertToNodeSpaceAR(v));
console.log("[GLFruitGM] GM按钮已创建, 锚点=btnBack, 位置=" + h.x + "," + h.y);
(d = new cc.Node("GMPanel")).setAnchorPoint(.5, .5);
d.setContentSize(460, 358);
d.setPosition(150, -231);
d.active = !1;
h.addChild(d);
c(d, 460, 358, cc.color(20, 20, 20), 210, 12);
var m = new cc.Node("Row1");
m.setAnchorPoint(.5, .5);
m.setContentSize(460, 72);
m.setPosition(0, 129);
d.addChild(m);
p(m, "生成水果", 278, 68, cc.color(40, 170, 90), 30, function() {
var t = u.string ? u.string.trim() : "", e = t ? parseInt(t, 10) : NaN;
isNaN(e) || e < 1 || e > 12 ? console.warn("[GLFruitGM] 无效水果id=" + t) : n.default.Instance.gmAddFruit(e);
}, t).setPosition(-77, 0);
(u = F(m, 140, 64, "水果id(1-12)", 30, "10")).node.setPosition(146, 0);
var _ = new cc.Node("Row2");
_.setAnchorPoint(.5, .5);
_.setContentSize(460, 72);
_.setPosition(0, 43);
d.addChild(_);
p(_, "炸弹+", 278, 68, cc.color(220, 80, 80), 30, function() {
var t = s.string ? s.string.trim() : "", e = t ? parseInt(t, 10) : 1;
(isNaN(e) || e <= 0) && (e = 1);
n.default.Instance.gmAddProp(a.GLFruitPropIdDefine.Bomb, e);
}, t).setPosition(-77, 0);
(s = F(_, 140, 64, "数量", 30, "1")).node.setPosition(146, 0);
var L = new cc.Node("Row3");
L.setAnchorPoint(.5, .5);
L.setContentSize(460, 72);
L.setPosition(0, -43);
d.addChild(L);
p(L, "摇晃+", 278, 68, cc.color(40, 140, 220), 30, function() {
var t = l.string ? l.string.trim() : "", e = t ? parseInt(t, 10) : 1;
(isNaN(e) || e <= 0) && (e = 1);
n.default.Instance.gmAddProp(a.GLFruitPropIdDefine.Shake, e);
}, t).setPosition(-77, 0);
(l = F(L, 140, 64, "数量", 30, "1")).node.setPosition(146, 0);
var C = new cc.Node("Row4");
C.setAnchorPoint(.5, .5);
C.setContentSize(460, 72);
C.setPosition(0, -129);
d.addChild(C);
p(C, "失败", 432, 68, cc.color(220, 80, 80), 30, function() {
d.active = !1;
n.default.Instance.gmFail();
}, t).setPosition(0, 0);
} else console.warn("[GLFruitGM] attach: 未找到 btnBack 节点");
} else console.warn("[GLFruitGM] attach: invalid gameView node");
};
return t;
}();
i.default = y;
cc._RF.pop();
}, {
"../defines/GLFruitDefine": "GLFruitDefine",
"../tools/GLFruitGmManager": "GLFruitGmManager",
"../tools/GLFruitTools": "GLFruitTools",
"../traits/GLFruitGMTool": "GLFruitGMTool"
} ],
GLFruitGameStateCtr: [ function(t, e, i) {
"use strict";
cc._RF.push(e, "88815suYYtDgrLBWAH0U5r+", "GLFruitGameStateCtr");
var r;
Object.defineProperty(i, "__esModule", {
value: !0
});
var n = t("../../core/fsmNode/GLFruitStateMachine"), o = t("../fsmNode/GLFruitBombStateNode"), a = t("../fsmNode/GLFruitFailStateNode"), u = t("../fsmNode/GLFruitGoldWatermelonStateNode"), s = t("../fsmNode/GLFruitLoadStateNode"), l = t("../fsmNode/GLFruitPlayStateNode"), c = t("../fsmNode/GLFruitShakeStateNode"), d = t("../ui/GLFruitGameView"), p = t("../fsmNode/GLFruitWinStateNode"), f = t("./FruitUsePropNoDieCtrl"), h = null === (r = null === window || void 0 === window ? void 0 : window._GLHallClassMap_) || void 0 === r ? void 0 : r.GLHallController, g = function() {
function t() {
this._stateMachine = null;
this._gameView = null;
this._isShakeStateFromAd = !1;
this._skipGameStartOnce = !1;
}
t.prototype.init = function() {
this._stateMachine = new n.default(this);
this._stateMachine.add(t.State.GLFruitLoadStateNode, new s.default());
this._stateMachine.add(t.State.GLFruitPlayStateNode, new l.default());
this._stateMachine.add(t.State.GLFruitFailStateNode, new a.default());
this._stateMachine.add(t.State.GLFruitBombStateNode, new o.default());
this._stateMachine.add(t.State.GLFruitWinStateNode, new p.default());
this._stateMachine.add(t.State.GLFruitShakeStateNode, new c.default());
this._stateMachine.add(t.State.GLFruitGoldWatermelonStateNode, new u.default());
var e = cc.find("Canvas/GLFruitGameView");
e || (e = cc.find("uiLayer/GameLobbyMainView/gl_fruit/GLFruitGameView", null == h ? void 0 : h.getSceneParentNode()));
e || (e = cc.find("Canvas/uiLayer/GameLobbyMainView/gl_fruit/GLFruitGameView"));
e || (e = cc.find("Canvas/BaseNode/GLHall/miniGameView/gl_fruit/GLFruitGameView"));
e ? this._gameView = e.getComponent(d.default) : cc.error("GLFruitGameView not found");
};
t.prototype.runState = function(t) {
this._stateMachine.changeState(t);
};
t.prototype.runLoadState = function() {
this.runState(t.State.GLFruitLoadStateNode);
};
t.prototype.runPlayState = function() {
this.runState(t.State.GLFruitPlayStateNode);
};
t.prototype.runFailState = function() {
this.runState(t.State.GLFruitFailStateNode);
};
t.prototype.runBombState = function() {
this.runState(t.State.GLFruitBombStateNode);
};
t.prototype.runShakeState = function() {
this.runState(t.State.GLFruitShakeStateNode);
};
t.prototype.runGoldWatermelonState = function() {
this.runState(t.State.GLFruitGoldWatermelonStateNode);
};
t.prototype.getGameView = function() {
return this._gameView;
};
t.prototype.isPlaySatte = function() {
return this._stateMachine.isState(t.State.GLFruitPlayStateNode);
};
t.prototype.isBombState = function() {
return this._stateMachine.isState(t.State.GLFruitBombStateNode);
};
t.prototype.isShakeSatte = function() {
return this._stateMachine.isState(t.State.GLFruitShakeStateNode);
};
t.prototype.isFialState = function() {
return this._stateMachine.isState(t.State.GLFruitFailStateNode);
};
t.prototype.getPreviousNodeName = function() {
return this._stateMachine.getPreviousNodeName();
};
t.prototype.markSkipGameStartOnce = function() {
this._skipGameStartOnce = !0;
};
t.prototype.consumeSkipGameStartOnce = function() {
if (!this._skipGameStartOnce) return !1;
this._skipGameStartOnce = !1;
return !0;
};
t.prototype.getCurStateName = function() {
return this._stateMachine.getCurStateName();
};
t.prototype.onExitShakeState = function() {
var t = this.getCurStateName();
f.default.getInstance().onExitShakeState(t);
};
t.prototype.setShakeStateFromAd = function(t) {
this._isShakeStateFromAd = t;
};
t.prototype.getShakeStateFromAd = function() {
return this._isShakeStateFromAd;
};
t.prototype.runWinState = function() {
this.runState(t.State.GLFruitWinStateNode);
};
t.prototype.isWinState = function() {
return this._stateMachine.isState(t.State.GLFruitWinStateNode);
};
t.State = {
GLFruitLoadStateNode: "GLFruitLoadStateNode",
GLFruitPlayStateNode: "GLFruitPlayStateNode",
GLFruitFailStateNode: "GLFruitFailStateNode",
GLFruitWinStateNode: "GLFruitWinStateNode",
GLFruitBombStateNode: "GLFruitBombStateNode",
GLFruitShakeStateNode: "GLFruitShakeStateNode",
GLFruitGoldWatermelonStateNode: "GLFruitGoldWatermelonStateNode"
};
return t;
}();
i.default = g;
cc._RF.pop();
}, {
"../../core/fsmNode/GLFruitStateMachine": "GLFruitStateMachine",
"../fsmNode/GLFruitBombStateNode": "GLFruitBombStateNode",
"../fsmNode/GLFruitFailStateNode": "GLFruitFailStateNode",
"../fsmNode/GLFruitGoldWatermelonStateNode": "GLFruitGoldWatermelonStateNode",
"../fsmNode/GLFruitLoadStateNode": "GLFruitLoadStateNode",
"../fsmNode/GLFruitPlayStateNode": "GLFruitPlayStateNode",
"../fsmNode/GLFruitShakeStateNode": "GLFruitShakeStateNode",
"../fsmNode/GLFruitWinStateNode": "GLFruitWinStateNode",
"../ui/GLFruitGameView": "GLFruitGameView",
"./FruitUsePropNoDieCtrl": "FruitUsePropNoDieCtrl"
} ],
GLFruitGameViewHelper: [ function(t, e, i) {
"use strict";
cc._RF.push(e, "9e5f3inuA1GFbDkQLBSgHTw", "GLFruitGameViewHelper");
var r, n = this && this.__extends || (r = function(t, e) {
return (r = Object.setPrototypeOf || {
__proto__: []
} instanceof Array && function(t, e) {
t.__proto__ = e;
} || function(t, e) {
for (var i in e) Object.prototype.hasOwnProperty.call(e, i) && (t[i] = e[i]);
})(t, e);
}, function(t, e) {
r(t, e);
function i() {
this.constructor = t;
}
t.prototype = null === e ? Object.create(e) : (i.prototype = e.prototype, new i());
}), o = this && this.__decorate || function(t, e, i, r) {
var n, o = arguments.length, a = o < 3 ? e : null === r ? r = Object.getOwnPropertyDescriptor(e, i) : r;
if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) a = Reflect.decorate(t, e, i, r); else for (var u = t.length - 1; u >= 0; u--) (n = t[u]) && (a = (o < 3 ? n(a) : o > 3 ? n(e, i, a) : n(e, i)) || a);
return o > 3 && a && Object.defineProperty(e, i, a), a;
};
Object.defineProperty(i, "__esModule", {
value: !0
});
var a = t("../ctrs/GLFruitMergerCtr"), u = t("../GLFruitApp"), s = t("../tools/GLFruitTools"), l = t("./GLFruitPropButton"), c = cc._decorator.ccclass, d = function(t) {
n(e, t);
function e() {
var e = null !== t && t.apply(this, arguments) || this;
e.propShakeBtn = null;
e.propBombBtn = null;
return e;
}
e.prototype.onLoad = function() {
this.propShakeBtn = s.default.FindNode(this.node, "nodeTop", "btnShake").getComponent(l.default);
this.propBombBtn = s.default.FindNode(this.node, "nodeTop", "btnBomb").getComponent(l.default);
};
e.prototype.onEnable = function() {
u.default.mergerCtr.on(a.default.Event.FruitNumberChanged, this.onEventFruitNumberChanged, this);
};
e.prototype.onDisable = function() {
u.default.mergerCtr.off(a.default.Event.FruitNumberChanged, this.onEventFruitNumberChanged, this);
};
e.prototype.onEventFruitNumberChanged = function() {
for (var t = [], e = 0; e < arguments.length; e++) t[e] = arguments[e];
this.propShakeBtn.interactable = u.default.mergerCtr.getFruits().length > 0;
this.propBombBtn.interactable = u.default.mergerCtr.getFruits().length > 0;
};
e.prototype.onClickedPropBomb = function() {
if (u.default.gameStateCtr.isPlaySatte()) {
u.default.adCtr.resetAutoShowTimer();
u.default.audioMgr.playEffectBtnNormal();
u.default.propCtr.usePropBomb();
}
};
e.prototype.onClickedPropShake = function() {
if (u.default.gameStateCtr.isPlaySatte()) {
u.default.adCtr.resetAutoShowTimer();
u.default.audioMgr.playEffectBtnNormal();
u.default.propCtr.usePropShake();
}
};
e.prototype.onClickedAgain = function() {
if (u.default.gameStateCtr.isPlaySatte()) {
u.default.adCtr.resetAutoShowTimer();
u.default.audioMgr.playEffectBtnNormal();
u.default.popupCtr.showRestart();
}
};
e.prototype.onClickedBack = function() {
u.default.adCtr.resetAutoShowTimer();
u.default.ExitGame(GL.Const.ExitGameType.FromGameMain);
};
e.prototype.onGameStart = function() {
this.onEventFruitNumberChanged();
};
return o([ c ], e);
}(cc.Component);
i.default = d;
cc._RF.pop();
}, {
"../GLFruitApp": "GLFruitApp",
"../ctrs/GLFruitMergerCtr": "GLFruitMergerCtr",
"../tools/GLFruitTools": "GLFruitTools",
"./GLFruitPropButton": "GLFruitPropButton"
} ],
GLFruitGameViewTouchEvent: [ function(t, e, i) {
"use strict";
cc._RF.push(e, "8fc87/ULmlAwZb5mv+DwFDp", "GLFruitGameViewTouchEvent");
var r, n = this && this.__extends || (r = function(t, e) {
return (r = Object.setPrototypeOf || {
__proto__: []
} instanceof Array && function(t, e) {
t.__proto__ = e;
} || function(t, e) {
for (var i in e) Object.prototype.hasOwnProperty.call(e, i) && (t[i] = e[i]);
})(t, e);
}, function(t, e) {
r(t, e);
function i() {
this.constructor = t;
}
t.prototype = null === e ? Object.create(e) : (i.prototype = e.prototype, new i());
}), o = this && this.__decorate || function(t, e, i, r) {
var n, o = arguments.length, a = o < 3 ? e : null === r ? r = Object.getOwnPropertyDescriptor(e, i) : r;
if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) a = Reflect.decorate(t, e, i, r); else for (var u = t.length - 1; u >= 0; u--) (n = t[u]) && (a = (o < 3 ? n(a) : o > 3 ? n(e, i, a) : n(e, i)) || a);
return o > 3 && a && Object.defineProperty(e, i, a), a;
};
Object.defineProperty(i, "__esModule", {
value: !0
});
var a = t("../GLFruitApp"), u = cc._decorator, s = u.ccclass, l = (u.property, function(t) {
n(e, t);
function e() {
return null !== t && t.apply(this, arguments) || this;
}
e.prototype.onLoad = function() {
this.registerTouchEvents();
};
e.prototype.onDestroy = function() {
this.unregisterTouchEvents();
};
e.prototype.registerTouchEvents = function() {
this.node.on(cc.Node.EventType.TOUCH_START, this.onTouchStart, this);
this.node.on(cc.Node.EventType.TOUCH_MOVE, this.onTouchMove, this);
this.node.on(cc.Node.EventType.TOUCH_END, this.onTouchEnd, this);
this.node.on(cc.Node.EventType.TOUCH_CANCEL, this.onTouchEnd, this);
};
e.prototype.unregisterTouchEvents = function() {
this.node.off(cc.Node.EventType.TOUCH_START, this.onTouchStart, this);
this.node.off(cc.Node.EventType.TOUCH_MOVE, this.onTouchMove, this);
this.node.off(cc.Node.EventType.TOUCH_END, this.onTouchEnd, this);
this.node.off(cc.Node.EventType.TOUCH_CANCEL, this.onTouchEnd, this);
};
e.prototype.onTouchStart = function(t) {
a.default.mergerCtr.onPointerDown(t);
};
e.prototype.onTouchMove = function(t) {
a.default.mergerCtr.onPointerMove(t);
};
e.prototype.onTouchEnd = function(t) {
a.default.mergerCtr.onPointerUp(t);
};
return o([ s ], e);
}(cc.Component));
i.default = l;
cc._RF.pop();
}, {
"../GLFruitApp": "GLFruitApp"
} ],
GLFruitGameView: [ function(t, e, i) {
"use strict";
cc._RF.push(e, "12f90UkUepOebV+Ff7cQp/x", "GLFruitGameView");
var r, n, o = this && this.__extends || (r = function(t, e) {
return (r = Object.setPrototypeOf || {
__proto__: []
} instanceof Array && function(t, e) {
t.__proto__ = e;
} || function(t, e) {
for (var i in e) Object.prototype.hasOwnProperty.call(e, i) && (t[i] = e[i]);
})(t, e);
}, function(t, e) {
r(t, e);
function i() {
this.constructor = t;
}
t.prototype = null === e ? Object.create(e) : (i.prototype = e.prototype, new i());
}), a = this && this.__decorate || function(t, e, i, r) {
var n, o = arguments.length, a = o < 3 ? e : null === r ? r = Object.getOwnPropertyDescriptor(e, i) : r;
if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) a = Reflect.decorate(t, e, i, r); else for (var u = t.length - 1; u >= 0; u--) (n = t[u]) && (a = (o < 3 ? n(a) : o > 3 ? n(e, i, a) : n(e, i)) || a);
return o > 3 && a && Object.defineProperty(e, i, a), a;
}, u = this && this.__awaiter || function(t, e, i, r) {
return new (i || (i = Promise))(function(n, o) {
function a(t) {
try {
s(r.next(t));
} catch (t) {
o(t);
}
}
function u(t) {
try {
s(r.throw(t));
} catch (t) {
o(t);
}
}
function s(t) {
t.done ? n(t.value) : (e = t.value, e instanceof i ? e : new i(function(t) {
t(e);
})).then(a, u);
var e;
}
s((r = r.apply(t, e || [])).next());
});
}, s = this && this.__generator || function(t, e) {
var i, r, n, o, a = {
label: 0,
sent: function() {
if (1 & n[0]) throw n[1];
return n[1];
},
trys: [],
ops: []
};
return o = {
next: u(0),
throw: u(1),
return: u(2)
}, "function" == typeof Symbol && (o[Symbol.iterator] = function() {
return this;
}), o;
function u(t) {
return function(e) {
return s([ t, e ]);
};
}
function s(o) {
if (i) throw new TypeError("Generator is already executing.");
for (;a; ) try {
if (i = 1, r && (n = 2 & o[0] ? r.return : o[0] ? r.throw || ((n = r.return) && n.call(r), 
0) : r.next) && !(n = n.call(r, o[1])).done) return n;
(r = 0, n) && (o = [ 2 & o[0], n.value ]);
switch (o[0]) {
case 0:
case 1:
n = o;
break;

case 4:
a.label++;
return {
value: o[1],
done: !1
};

case 5:
a.label++;
r = o[1];
o = [ 0 ];
continue;

case 7:
o = a.ops.pop();
a.trys.pop();
continue;

default:
if (!(n = a.trys, n = n.length > 0 && n[n.length - 1]) && (6 === o[0] || 2 === o[0])) {
a = 0;
continue;
}
if (3 === o[0] && (!n || o[1] > n[0] && o[1] < n[3])) {
a.label = o[1];
break;
}
if (6 === o[0] && a.label < n[1]) {
a.label = n[1];
n = o;
break;
}
if (n && a.label < n[2]) {
a.label = n[2];
a.ops.push(o);
break;
}
n[2] && a.ops.pop();
a.trys.pop();
continue;
}
o = e.call(t, a);
} catch (t) {
o = [ 6, t ];
r = 0;
} finally {
i = n = 0;
}
if (5 & o[0]) throw o[1];
return {
value: o[0] ? o[1] : void 0,
done: !0
};
}
}, l = this && this.__values || function(t) {
var e = "function" == typeof Symbol && Symbol.iterator, i = e && t[e], r = 0;
if (i) return i.call(t);
if (t && "number" == typeof t.length) return {
next: function() {
t && r >= t.length && (t = void 0);
return {
value: t && t[r++],
done: !t
};
}
};
throw new TypeError(e ? "Object is not iterable." : "Symbol.iterator is not defined.");
};
Object.defineProperty(i, "__esModule", {
value: !0
});
var c = t("../ctrs/GLFruitComboCtr"), d = t("../ctrs/GLFruitEffectCtr"), p = t("../ctrs/GLFruitGameStateCtr"), f = t("../ctrs/GLFruitMergerCtr"), h = t("../defines/GLFruitDefine"), g = t("../GFruitUser"), F = t("../GLFruitApp"), y = t("../GLFruitRoundLogEventCtr"), v = t("../tools/GLFruitTools"), m = t("./GLFruitBanner"), _ = t("./GLFruitDropLine"), L = t("./GLFruitGameViewHelper"), C = t("./GLFruitGuideView"), S = t("./GLFruitInterAdsWaitView"), G = t("../GLFruitHideBottomFruit"), w = t("../FruitFeature"), b = null === (n = null === window || void 0 === window ? void 0 : window._GLHallClassMap_) || void 0 === n ? void 0 : n.GLHallController, P = t("../FruitLongPressAccCtrl"), D = t("../traits/GLFruitRepeatFruitAwardTraitCtrl"), I = t("../traits/GLFruitOnDangerShowDeadLineTraitCtrl"), N = t("../traits/GLFruitAddFruitChoiceListTraitCtrl"), T = t("../../../../gl_hall/script/traits/GLGameAdStrategyOptimizeTraitCtrl"), O = t("../traits/GLFruitNotDropLittleFruitWhenXiGuaOnShowCtrl"), A = t("../traits/GLFruitShowShakeResultEncourageTraitCtrl"), R = t("../traits/GLFruitMergeScoreFlyTraitCtrl"), E = t("./GLFruitGMView"), x = cc._decorator, M = x.ccclass, k = (x.property, 
function(t) {
o(e, t);
function e() {
var e = null !== t && t.apply(this, arguments) || this;
e._nodeSwallowEvent = null;
e._nodeNext = null;
e._nodeTop = null;
e._nodeBox = null;
e._nodeMoveArrow = null;
e._labelScore = null;
e._labelTimeDesc = null;
e._labelTime = null;
e._nodeDropPosition = null;
e._nodeDropLine = null;
e._fruitDropLine = null;
e._nodePropBomb = null;
e._outBoundBoxMinY = 0;
e._nodeWalls = null;
e._nodeBoxBg = null;
e._nodeUpWall = null;
e._viewHelper = null;
e._fruitBanner = null;
e._guideView = null;
e._isPhysicsInitialized = !1;
e._interAdsWaitView = null;
e._nodeBottomAdAdapter = null;
e._targetLabel = null;
return e;
}
e.prototype.onLoad = function() {
var t;
this._nodeSwallowEvent = v.default.FindNode(this.node, "nodeSwallowEvent");
this._nodeTop = v.default.FindNode(this.node, "nodeTop");
this._nodeBox = v.default.FindNode(this.node, "nodeBox");
this._nodeDropPosition = v.default.FindNode(this.node, "nodeDropPosition");
this._nodePropBomb = v.default.FindNode(this.node, "nodePropBomb");
this._nodeBoxBg = v.default.FindNode(this.node, "nodeBoxBg");
GL.Game.AdpterCanvas();
GL.Game.AdpterBangleScreen(this._nodeTop);
this._nodeDropLine = v.default.FindNode(this.node, "nodeDropLine");
this._nodeWalls = v.default.FindNode(this._nodeBox, "nodeWalls");
this._nodeUpWall = v.default.FindNode(this._nodeWalls, "nodeUpWall");
this.adaptBoxHeight();
this._viewHelper = this.node.getComponent(L.default);
this._guideView = v.default.FindNode(this.node, "GLFruitGuideView").getComponent(C.default);
this._guideView.hideGuide();
d.default.NodeEffectRoot = v.default.FindNode(this.node, "nodeEffectRoot");
d.default.NodeEffectUpperRoot = v.default.FindNode(this.node, "nodeEffectUpperRoot");
d.default.NodeMergeNewEffectRoot = v.default.FindNode(this.node, "nodeMergeNewEffectRoot");
c.default.NodeComboRoot = v.default.FindNode(this.node, "nodeComboLabelEffectRoot");
d.default.NodeClickEffectRoot = null === (t = null == b ? void 0 : b.getSceneParentNode()) || void 0 === t ? void 0 : t.getChildByName("effectLayer");
this._fruitDropLine = this._nodeDropLine.getComponent(_.default);
this._nodeNext = v.default.FindNode(this._nodeTop, "nodeNext");
this._nodeMoveArrow = v.default.FindNode(this._nodeNext, "nodeMoveArrow");
this._labelScore = v.default.FindNode(this._nodeTop, "labelScore").getComponent(cc.Label);
this._labelTimeDesc = v.default.FindNode(this._nodeTop, "labelTimeDesc").getComponent(cc.Label);
this._labelTime = v.default.FindNode(this._nodeTop, "labelTime").getComponent(cc.Label);
this._fruitBanner = v.default.FindNode(this.node, "nodeBottom", "nodeFruitBanner").getComponent(m.default);
this._nodeBottomAdAdapter = v.default.FindNode(this.node, "nodeBottom", "nodeBottomAdAdapter");
if (w.default.isOpen(w.FruitFeat.FruitHideBottomFruit)) {
this.initFruitHideBottomFruit();
this.initBoxBgSprite();
}
P.default.getInstance().isOpen() && this.initFruitLongPressAcc();
this._nodeTop.getComponent(cc.Widget).updateAlignment();
F.default.mergerCtr.setNodeFruitRoot(this._nodeBox);
N.default.getInstance().isOpen() ? N.default.getInstance().init(this._nodeNext, this._nodeBox, this._nodeSwallowEvent).then(function() {
F.default.mergerCtr.setSpwawnFruitPositon(N.default.getInstance().getNextFruitPositionByIndex(0));
}) : F.default.mergerCtr.setSpwawnFruitPositon(this._nodeBox.convertToNodeSpaceAR(this._nodeNext.convertToWorldSpaceAR(cc.Vec3.ZERO).add(cc.v3(-100, 0))));
F.default.mergerCtr.setSpwawnDropPositon(this._nodeBox.convertToNodeSpaceAR(this._nodeDropPosition.convertToWorldSpaceAR(cc.Vec3.ZERO)));
this._nodePropBomb.active = !1;
N.default.getInstance().isOpen() && N.default.getInstance().showOrHideExchangeClickNode(!this._nodePropBomb.active);
this._nodeTop.active = !F.default.guideCtr.isBeginner();
this._interAdsWaitView = v.default.FindNode(this.node, "GLFruitInterAdsWaitView").getComponent(S.default);
this._interAdsWaitView.node.active = !1;
D.default.getInstance().isOpen() && D.default.getInstance().init();
O.default.getInstance().isOpen() && O.default.getInstance().init(this._fruitBanner);
this.initTargetLabel();
w.default.isOpen(w.FruitFeat.GLFruitShowShakeResultEncourage) && A.default.getInstance().init();
E.default.attach(this);
};
e.prototype.onEnable = function() {
F.default.mergerCtr.on(f.default.Event.ShowDropLine, this.onEventShowDropLine, this);
F.default.mergerCtr.on(f.default.Event.HideDropLine, this.onEventHideDropLine, this);
F.default.mergerCtr.on(f.default.Event.UpdateDropLinePosition, this.onEventUpdateDropLinePosition, this);
F.default.user.on(g.default.Event.ScoreChanged, this.onEventScoreChanged, this);
F.default.user.on(g.default.Event.BestScoreChanged, this.onEventBestScoreChanged, this);
this.showTargetLabel();
};
e.prototype.onDisable = function() {
F.default.mergerCtr.off(f.default.Event.ShowDropLine, this.onEventShowDropLine, this);
F.default.mergerCtr.off(f.default.Event.HideDropLine, this.onEventHideDropLine, this);
F.default.mergerCtr.off(f.default.Event.UpdateDropLinePosition, this.onEventUpdateDropLinePosition, this);
F.default.user.off(g.default.Event.ScoreChanged, this.onEventScoreChanged, this);
F.default.user.off(g.default.Event.BestScoreChanged, this.onEventBestScoreChanged, this);
this.hideTargetLabel();
};
e.prototype.onEventBestScoreChanged = function() {
this._labelTime.string = F.default.user.getDataVo().bestScore.toString();
};
e.prototype.onEventScoreChanged = function() {
for (var t = [], e = 0; e < arguments.length; e++) t[e] = arguments[e];
R.default.getInstance().isOpen() && R.default.getInstance().consumePendingDefer() || this.syncScoreLabel();
};
e.prototype.syncScoreLabel = function() {
var t = F.default.user.getScore();
this._labelScore.string = t.toString();
R.default.getInstance().isOpen() && R.default.getInstance().resetDisplayScore(t);
};
e.prototype.getLabelScore = function() {
return this._labelScore;
};
e.prototype.onEventShowDropLine = function() {
for (var t = [], e = 0; e < arguments.length; e++) t[e] = arguments[e];
t && t.length > 0 && this._fruitDropLine.show(t[0]);
};
e.prototype.onEventHideDropLine = function() {
for (var t = [], e = 0; e < arguments.length; e++) t[e] = arguments[e];
this._fruitDropLine.hide();
};
e.prototype.onEventUpdateDropLinePosition = function() {
for (var t = [], e = 0; e < arguments.length; e++) t[e] = arguments[e];
t && t.length > 0 && (this._fruitDropLine.node.x = t[0].x);
};
e.prototype.initWallPysics = function() {
var t, e;
if (cc.isValid(this._nodeWalls)) try {
for (var i = l(this._nodeWalls.children), r = i.next(); !r.done; r = i.next()) {
var n = r.value, o = n.addComponent(cc.RigidBody), a = n.addComponent(cc.PhysicsBoxCollider);
o.type = cc.RigidBodyType.Static;
a.friction = .4;
a.restitution = .2;
a.density = 1;
a.size = n.getContentSize();
a.apply();
}
} catch (e) {
t = {
error: e
};
} finally {
try {
r && !r.done && (e = i.return) && e.call(i);
} finally {
if (t) throw t.error;
}
}
};
e.prototype.adaptBoxHeight = function() {
var t, e, i, r;
if (w.default.isOpen(w.FruitFeat.FruitBoxHeightAdapt)) {
var n = cc.view.getFrameSize(), o = (1080 * n.height / n.width - 1920) / 2;
(o -= GL.Game.GetBangleScreenTopOffset()) < 0 && (o = 0);
if (!(o <= 0)) {
if (this._nodeBoxBg) {
var a = this._nodeBoxBg.height;
this._nodeBoxBg.setContentSize(this._nodeBoxBg.width, a + o);
this._nodeBoxBg.setPosition(this._nodeBoxBg.x, this._nodeBoxBg.y + this._nodeBoxBg.anchorY * o);
}
var u = v.default.FindNode(this.node, "nodeOutBound");
u && u.setPosition(u.x, u.y + o);
try {
for (var s = l([ "leftWall", "rightWall" ]), c = s.next(); !c.done; c = s.next()) {
var d = c.value, p = v.default.FindNode(this._nodeWalls, d);
if (p) {
a = p.height;
p.setContentSize(p.width, a + o);
p.setPosition(p.x, p.y + p.anchorY * o);
}
}
} catch (e) {
t = {
error: e
};
} finally {
try {
c && !c.done && (e = s.return) && e.call(s);
} finally {
if (t) throw t.error;
}
}
this._nodeUpWall && this._nodeUpWall.setPosition(this._nodeUpWall.x, this._nodeUpWall.y + o);
if (this._nodePropBomb) try {
for (var f = l(this._nodePropBomb.children), h = f.next(); !h.done; h = f.next()) {
var g = h.value;
g.setPosition(g.x, g.y + o);
}
} catch (t) {
i = {
error: t
};
} finally {
try {
h && !h.done && (r = f.return) && r.call(f);
} finally {
if (i) throw i.error;
}
}
this._nodeDropPosition && this._nodeDropPosition.setPosition(this._nodeDropPosition.x, this._nodeDropPosition.y + o);
this._nodeDropLine && this._nodeDropLine.setPosition(this._nodeDropLine.x, this._nodeDropLine.y + o);
var F = v.default.FindNode(this.node, "GLFruitGuideView", "nodeArrow");
F && F.setPosition(F.x, F.y + o);
}
}
};
e.prototype.onGameStart = function() {
var t, e, i;
if (!this._isPhysicsInitialized) {
this.initWallPysics();
this._isPhysicsInitialized = !0;
}
var r = F.default.gameStateCtr.getPreviousNodeName();
if (!F.default.gameStateCtr.consumeSkipGameStartOnce() && r != p.default.State.GLFruitBombStateNode && r != p.default.State.GLFruitShakeStateNode && r != p.default.State.GLFruitGoldWatermelonStateNode) {
var n = v.default.FindNode(this.node, "nodeOutBound");
n && (this._outBoundBoxMinY = n.getBoundingBoxToWorld().yMin);
I.default.getInstance().isOpen() && I.default.getInstance().init(this.node);
null === (t = this._fruitDropLine) || void 0 === t || t.init();
null === (e = this._fruitDropLine) || void 0 === e || e.hide();
if (F.default.user.getDataVo().recordPlayData.length > 0) F.default.mergerCtr.initFruitsWithUserRecord(); else {
y.default.getInstance().resetData();
F.default.user.newGame();
F.default.audioMgr.playEffect(h.GLFruitAudioDefine.fruit_new_game);
F.default.mergerCtr.initFruits();
if (F.default.guideCtr.isBeginner()) console.log("GLFruitGameView onGameStart 新手引导播放插屏！！！"); else if (T.default.getInstance().isOpen() && F.default.isReplay) {
F.default.adCtr.postResult();
F.default.isReplay = !1;
} else F.default.adCtr.showPreRollAd(3);
}
F.default.mergerCtr.init();
R.default.getInstance().isOpen() && R.default.getInstance().clear();
this.onEventScoreChanged();
this.onEventBestScoreChanged();
this._viewHelper.onGameStart();
null === (i = this._fruitBanner) || void 0 === i || i.onShow();
F.default.guideCtr.tryShowGuide();
F.default.adCtr.midAutoShowAdWhenIdle();
N.default.getInstance().isOpen() && (F.default.guideCtr.isBeginner() || N.default.getInstance().initNextFruits());
F.default.Instance.onSendGGameStartEvent();
}
};
e.prototype.onGameEnd = function() {
var t;
null === (t = this._fruitBanner) || void 0 === t || t.onHide();
};
e.prototype.update = function() {};
e.prototype.getFruitDropLine = function() {
return this._fruitDropLine;
};
e.prototype.getNodeSwallowEvent = function() {
return this._nodeSwallowEvent;
};
e.prototype.getOutBoundBoxMinY = function() {
return this._outBoundBoxMinY;
};
e.prototype.getNodePropBomb = function() {
return this._nodePropBomb;
};
e.prototype.getNodeTop = function() {
return this._nodeTop;
};
e.prototype.getNodeWalls = function() {
return this._nodeWalls;
};
e.prototype.getNodeBoxBg = function() {
return this._nodeBoxBg;
};
e.prototype.getNodeUpWall = function() {
return this._nodeUpWall;
};
e.prototype.getGuideView = function() {
return this._guideView;
};
e.prototype.getInterAdsWaitView = function() {
return this._interAdsWaitView;
};
e.prototype.getNodeBottomAdAdapter = function() {
return this._nodeBottomAdAdapter;
};
e.prototype.showArrowTweent = function() {
this._nodeMoveArrow.position = cc.Vec3.ZERO;
cc.Tween.stopAllByTarget(this._nodeMoveArrow);
cc.tween(this._nodeMoveArrow).delay(.1).to(.15, {
position: cc.v3(35, 0, 0)
}, {
easing: cc.easing.cubicOut
}).to(.15, {
position: cc.v3(0, 0, 0)
}, {
easing: cc.easing.cubicOut
}).start();
};
e.prototype.shakeScreen = function() {
this.node.position = cc.Vec3.ZERO;
v.default.ShakeNode(this.node, .03, 5, 6);
};
e.prototype.skipGuide = function() {
var t;
null === (t = this._viewHelper) || void 0 === t || t.onGameStart();
};
e.prototype.initFruitHideBottomFruit = function() {
var t = v.default.FindNode(this.node, "nodeBottom");
if (t) {
var e = t.getComponent(G.default);
if (e || (e = t.addComponent(G.default))) {
var i = v.default.FindNode(t, "bg"), r = v.default.FindNode(t, "bg_fruit"), n = v.default.FindNode(t, "nodeFruitBanner"), o = [];
i && o.push(i);
r && o.push(r);
n && o.push(n);
e.setNodeFruits1(o);
} else console.error("[GLFruitGameView] Failed to add GLFruitHideBottomFruit component to nodeBottom");
} else console.warn("[GLFruitGameView] nodeBottom not found, cannot add GLFruitHideBottomFruit component");
};
e.prototype.initFruitLongPressAcc = function() {
P.default.getInstance().initComponent(this.node);
};
e.prototype.initBoxBgSprite = function() {
return u(this, void 0, Promise, function() {
var t, e, i, r;
return s(this, function(n) {
switch (n.label) {
case 0:
if (!this._nodeBoxBg) {
console.warn("[GLFruitGameView] nodeBoxBg is null, cannot create sprite");
return [ 2 ];
}
if (this._nodeBoxBg.getChildByName("gameplay_ring_sprite")) return [ 2 ];
t = new cc.Node("gameplay_ring_sprite");
e = t.addComponent(cc.Sprite);
n.label = 1;

case 1:
n.trys.push([ 1, 3, , 4 ]);
return [ 4, F.default.assetCtr.loadSpriteFrame("assets/icons2/gameplay_ring") ];

case 2:
if (i = n.sent()) {
e.spriteFrame = i;
t.setParent(this._nodeBoxBg);
t.opacity = 178;
} else console.error("[GLFruitGameView] Failed to load gameplay_ring sprite");
return [ 3, 4 ];

case 3:
r = n.sent();
console.error("[GLFruitGameView] Failed to load gameplay_ring sprite:", r);
return [ 3, 4 ];

case 4:
return [ 2 ];
}
});
});
};
e.prototype.initTargetLabel = function() {
var t;
return u(this, void 0, void 0, function() {
var e;
return s(this, function(i) {
switch (i.label) {
case 0:
e = window.GL;
return (null === (t = null == e ? void 0 : e.gamelobby) || void 0 === t ? void 0 : t.isChapterFusionMode()) && this._nodeTop && cc.isValid(this._nodeTop) ? [ 4, this.loadTargetLabel() ] : [ 2 ];

case 1:
i.sent();
return [ 2 ];
}
});
});
};
e.prototype.showTargetLabel = function() {
var t, e, i = window.GL;
if ((null === (t = null == i ? void 0 : i.gamelobby) || void 0 === t ? void 0 : t.isChapterFusionMode()) && this._targetLabel && cc.isValid(this._targetLabel.node)) {
var r = null === (e = i.gamelobby) || void 0 === e ? void 0 : e.getStorageValue("ChapterMiniGameFusionTarget", 0);
this._targetLabel.string = "<color=#7b4543>Passing requires </color><color=#ff7200>" + r + "</color><color=#7b4543> points!</color>";
this._targetLabel.node.opacity = 255;
}
};
e.prototype.hideTargetLabel = function() {
var t, e = window.GL;
(null === (t = null == e ? void 0 : e.gamelobby) || void 0 === t ? void 0 : t.isChapterFusionMode()) && this._targetLabel && cc.isValid(this._targetLabel.node) && (this._targetLabel.node.opacity = 0);
};
e.prototype.loadTargetLabel = function() {
return u(this, void 0, Promise, function() {
var t = this;
return s(this, function() {
return [ 2, new Promise(function(e, i) {
var r, n, o = window.GL;
if (null === (r = null == o ? void 0 : o.gamelobby) || void 0 === r ? void 0 : r.isChapterFusionMode()) {
var a = "ChapterMiniGameFusionTrait", u = cc.assetManager.getBundle(a), s = function(r) {
r.load("prefabs/ChapterMiniGameFusionFruitTarget", cc.Prefab, function(r, n) {
var a, u, s;
if (r) {
console.error("加载ChapterMiniGameFusionFruitTarget prefab失败:", r);
i(r);
} else if (n) if (t._nodeTop && cc.isValid(t._nodeTop)) {
var l = cc.instantiate(n);
l.name = "ChapterMiniGameFusionFruitTarget";
t._nodeTop.addChild(l);
l.setPosition(0, -320, 0);
console.log("ChapterMiniGameFusionFruitTarget prefab创建成功");
t._targetLabel = null === (u = null === (a = l.getChildByName("bg")) || void 0 === a ? void 0 : a.getChildByName("targetLabel")) || void 0 === u ? void 0 : u.getComponent(cc.RichText);
if (t._targetLabel && cc.isValid(t._targetLabel.node)) {
var c = null === (s = null == o ? void 0 : o.gamelobby) || void 0 === s ? void 0 : s.getStorageValue("ChapterMiniGameFusionTarget", 0);
t._targetLabel.string = "<color=#7b4543>Passing requires </color><color=#ff7200>" + c + "</color><color=#7b4543> points!</color>";
}
e();
} else e(); else {
console.error("ChapterMiniGameFusionFruitTarget prefab为空");
i(new Error("Prefab为空"));
}
});
};
if (u) s(u); else {
var l = a;
if (null === (n = null == o ? void 0 : o.gamelobby) || void 0 === n ? void 0 : n.getRemoteBundleBaseUrl) {
l = o.gamelobby.getRemoteBundleBaseUrl(a);
cc.assetManager.loadBundle(l, function(r, n) {
if (r) {
console.error("加载bundle失败:", r);
i(r);
} else t.node && cc.isValid(t.node) ? s(n) : e();
});
}
}
} else e();
}) ];
});
});
};
return a([ M ], e);
}(cc.Component));
i.default = k;
cc._RF.pop();
}, {
"../../../../gl_hall/script/traits/GLGameAdStrategyOptimizeTraitCtrl": void 0,
"../FruitFeature": "FruitFeature",
"../FruitLongPressAccCtrl": "FruitLongPressAccCtrl",
"../GFruitUser": "GFruitUser",
"../GLFruitApp": "GLFruitApp",
"../GLFruitHideBottomFruit": "GLFruitHideBottomFruit",
"../GLFruitRoundLogEventCtr": "GLFruitRoundLogEventCtr",
"../ctrs/GLFruitComboCtr": "GLFruitComboCtr",
"../ctrs/GLFruitEffectCtr": "GLFruitEffectCtr",
"../ctrs/GLFruitGameStateCtr": "GLFruitGameStateCtr",
"../ctrs/GLFruitMergerCtr": "GLFruitMergerCtr",
"../defines/GLFruitDefine": "GLFruitDefine",
"../tools/GLFruitTools": "GLFruitTools",
"../traits/GLFruitAddFruitChoiceListTraitCtrl": "GLFruitAddFruitChoiceListTraitCtrl",
"../traits/GLFruitMergeScoreFlyTraitCtrl": "GLFruitMergeScoreFlyTraitCtrl",
"../traits/GLFruitNotDropLittleFruitWhenXiGuaOnShowCtrl": "GLFruitNotDropLittleFruitWhenXiGuaOnShowCtrl",
"../traits/GLFruitOnDangerShowDeadLineTraitCtrl": "GLFruitOnDangerShowDeadLineTraitCtrl",
"../traits/GLFruitRepeatFruitAwardTraitCtrl": "GLFruitRepeatFruitAwardTraitCtrl",
"../traits/GLFruitShowShakeResultEncourageTraitCtrl": "GLFruitShowShakeResultEncourageTraitCtrl",
"./GLFruitBanner": "GLFruitBanner",
"./GLFruitDropLine": "GLFruitDropLine",
"./GLFruitGMView": "GLFruitGMView",
"./GLFruitGameViewHelper": "GLFruitGameViewHelper",
"./GLFruitGuideView": "GLFruitGuideView",
"./GLFruitInterAdsWaitView": "GLFruitInterAdsWaitView"
} ],
GLFruitGmManager: [ function(t, e, i) {
"use strict";
cc._RF.push(e, "9e85d+8R5dJZa72r6/C0qnY", "GLFruitGmManager");
Object.defineProperty(i, "__esModule", {
value: !0
});
var r = t("../GLFruitApp"), n = function() {
function t() {}
Object.defineProperty(t, "Instance", {
get: function() {
this._instance || (this._instance = new t());
return this._instance;
},
enumerable: !1,
configurable: !0
});
t.prototype.gmAddFruit = function(t) {
if (!t || t < 1 || t > 12) console.warn("[GLFruitGM] 无效水果id=" + t); else {
var e = r.default.mergerCtr, i = e.spawnFruit(t), n = i.getItem();
if (n && n.node && cc.isValid(n.node)) {
i.position = e.getSpwawnDropPositon();
i.runActiveState();
e.addFruit(i);
} else console.warn("[GLFruitGM] 生成水果失败 id=" + t);
}
};
t.prototype.gmAddProp = function(t, e) {
(isNaN(e) || e <= 0) && (e = 1);
r.default.propCtr.addPropNum(t, e);
};
t.prototype.gmFail = function() {
r.default.gameStateCtr.runFailState();
};
t._instance = null;
return t;
}();
i.default = n;
cc._RF.pop();
}, {
"../GLFruitApp": "GLFruitApp"
} ],
GLFruitGoldWatermelonStateNode: [ function(t, e, i) {
"use strict";
cc._RF.push(e, "ad053DV25RJlqp/bL2Xd+mi", "GLFruitGoldWatermelonStateNode");
var r, n = this && this.__extends || (r = function(t, e) {
return (r = Object.setPrototypeOf || {
__proto__: []
} instanceof Array && function(t, e) {
t.__proto__ = e;
} || function(t, e) {
for (var i in e) Object.prototype.hasOwnProperty.call(e, i) && (t[i] = e[i]);
})(t, e);
}, function(t, e) {
r(t, e);
function i() {
this.constructor = t;
}
t.prototype = null === e ? Object.create(e) : (i.prototype = e.prototype, new i());
});
Object.defineProperty(i, "__esModule", {
value: !0
});
var o = t("../../core/fsmNode/GLFruitStateNode"), a = t("../defines/GLFruitDefine"), u = t("../GLFruitApp"), s = t("../tools/GLFruitTools"), l = function(t) {
n(e, t);
function e() {
return null !== t && t.apply(this, arguments) || this;
}
e.prototype.onEnter = function() {
var t = u.default.mergerCtr.getGoldWatermelonFruit();
if (t) {
u.default.timeCtr.addOnce(.7, function() {
u.default.audioMgr.playEffect(a.GLFruitAudioDefine.fruit_merge_great_watermelon_light);
});
u.default.timeCtr.addOnce(1.3, function() {
var e = t.getItem(), i = null == e ? void 0 : e.node;
if (e && i && cc.isValid(i)) {
u.default.audioMgr.playEffect(a.GLFruitAudioDefine.fruit_merge_great_watermelon_explosion);
e.removePhysicsComponents();
s.default.ShalkeGlodeWarmelon(i, function() {
var e = t.getItem();
e && cc.isValid(e.node) && u.default.effectCtr.playGoldWatermelonPanelEffect(e.node.convertToWorldSpaceAR(cc.Vec3.ZERO), null);
}, function() {
var e = t.getItem();
if (e && cc.isValid(e.node)) {
s.default.ExplodeGoldWatermelon(cc.v2(e.node.position.x, e.node.position.y));
u.default.mergerCtr.removeFruit(t);
}
u.default.mergerCtr.setGoldWatermelonFruit(null);
u.default.user.saveData();
u.default.user.syncGameData();
u.default.timeCtr.addOnce(1, function() {
u.default.gameStateCtr.runPlayState();
});
});
} else {
console.warn("[GLFruitGoldWatermelonStateNode] 金西瓜节点已失效，跳过爆炸动画并回玩");
u.default.mergerCtr.removeFruit(t);
u.default.mergerCtr.setGoldWatermelonFruit(null);
u.default.gameStateCtr.runPlayState();
}
});
}
};
e.prototype.onExit = function() {};
return e;
}(o.default);
i.default = l;
cc._RF.pop();
}, {
"../../core/fsmNode/GLFruitStateNode": "GLFruitStateNode",
"../GLFruitApp": "GLFruitApp",
"../defines/GLFruitDefine": "GLFruitDefine",
"../tools/GLFruitTools": "GLFruitTools"
} ],
GLFruitGongzhengTraitCtrl: [ function(t, e, i) {
"use strict";
cc._RF.push(e, "a3324zm9BJAsq4KeVD/pUkU", "GLFruitGongzhengTraitCtrl");
var r = this && this.__values || function(t) {
var e = "function" == typeof Symbol && Symbol.iterator, i = e && t[e], r = 0;
if (i) return i.call(t);
if (t && "number" == typeof t.length) return {
next: function() {
t && r >= t.length && (t = void 0);
return {
value: t && t[r++],
done: !t
};
}
};
throw new TypeError(e ? "Object is not iterable." : "Symbol.iterator is not defined.");
}, n = this && this.__read || function(t, e) {
var i = "function" == typeof Symbol && t[Symbol.iterator];
if (!i) return t;
var r, n, o = i.call(t), a = [];
try {
for (;(void 0 === e || e-- > 0) && !(r = o.next()).done; ) a.push(r.value);
} catch (t) {
n = {
error: t
};
} finally {
try {
r && !r.done && (i = o.return) && i.call(o);
} finally {
if (n) throw n.error;
}
}
return a;
}, o = this && this.__spread || function() {
for (var t = [], e = 0; e < arguments.length; e++) t = t.concat(n(arguments[e]));
return t;
};
Object.defineProperty(i, "__esModule", {
value: !0
});
var a = t("../GLFruitApp"), u = t("../FruitFeature"), s = function() {
function t() {
this._featureName = "FruitGongzheng";
this._resonanceFruits = new Set();
this._resonanceNodes = new Map();
this._savedResonanceData = [];
}
t.getInstance = function() {
null == this._instance && (this._instance = new t());
return this._instance;
};
t.prototype.isOpen = function() {
return u.default.isOpen(u.FruitFeat.FruitGongzheng);
};
t.prototype.init = function() {
if (this.isOpen()) {
this.loadData();
console.log("[" + this._featureName + "] 特性已开启，初始化完成");
}
};
t.prototype.saveData = function() {
if (this.isOpen()) {
var t = [];
this._resonanceFruits.forEach(function(e) {
if (e && e.getItem() && e.getItem().node && cc.isValid(e.getItem().node)) {
var i = e.position;
t.push({
id: e.getId(),
x: i.x,
y: i.y
});
}
});
cc.sys.localStorage.setItem(this._featureName + "_resonanceFruits", JSON.stringify(t));
}
};
t.prototype.loadData = function() {
var t = cc.sys.localStorage.getItem(this._featureName + "_resonanceFruits");
if (null != t && "" !== t) try {
var e = JSON.parse(t);
this._savedResonanceData = e;
} catch (t) {
console.error("[GLFruitGongzheng] Failed to parse saved resonance data:", t);
this._savedResonanceData = [];
} else this._savedResonanceData = [];
};
t.prototype.checkAndUpdateResonance = function() {
var t, e, i, n, u = this;
if (this.isOpen()) {
var s = null === (i = a.default.mergerCtr) || void 0 === i ? void 0 : i.getReadyDropFruit();
if (s) {
var l = s.getId(), c = (null === (n = a.default.mergerCtr) || void 0 === n ? void 0 : n.getFruits()) || [], d = 0;
try {
for (var p = r(c), f = p.next(); !f.done; f = p.next()) {
var h = f.value;
h.isActiveState() && h.getId() === l && d++;
}
} catch (e) {
t = {
error: e
};
} finally {
try {
f && !f.done && (e = p.return) && e.call(p);
} finally {
if (t) throw t.error;
}
}
if (d >= 3) {
var g = [], F = c.filter(function(t) {
return t.isActiveState() && t.getId() === l;
});
g.push.apply(g, o(F));
s && s.getId() === l && g.push(s);
var y = 0;
g.forEach(function(t) {
if (!u._resonanceFruits.has(t)) {
u._resonanceFruits.add(t);
u.applyResonanceAnimation(t);
y++;
}
});
this._resonanceFruits.forEach(function(t) {
if (t && t.getItem() && t.getItem().node && cc.isValid(t.getItem().node)) {
var e = u.getVisualNode(t.getItem().node);
e && !u._resonanceNodes.has(e) && u.applyResonanceAnimation(t);
}
});
y > 0 && console.log("[" + this._featureName + "] 开始共振，水果ID: " + l + ", 盘面数量: " + d + ", 新增共振水果: " + y + ", 总共振水果数: " + this._resonanceFruits.size);
this.saveData();
}
}
} else this.stopAllResonance();
};
t.prototype.removeResonanceFruit = function(t) {
if (this.isOpen() && t && this._resonanceFruits.has(t)) {
var e = t.getId();
this._resonanceFruits.delete(t);
var i = t.getItem();
if (i && i.node && cc.isValid(i.node)) {
var r = this.getVisualNode(i.node);
if (r) {
var n = this._resonanceNodes.get(r);
if (n) {
n.stop();
this._resonanceNodes.delete(r);
}
cc.Tween.stopAllByTarget(r);
}
}
console.log("[" + this._featureName + "] 移除共振状态，水果ID: " + e + ", 剩余共振水果数: " + this._resonanceFruits.size);
this.saveData();
}
};
t.prototype.applyResonanceAnimation = function(t) {
if (this.isOpen() && t) {
var e = t.getItem();
if (e && e.node && cc.isValid(e.node)) {
var i = e.node;
if (i.active) {
var r = this.getVisualNode(i);
if (r && cc.isValid(r)) {
var n, o = r.scale;
n = "number" == typeof o ? o : o && "object" == typeof o && o.x || 1;
var a = this._resonanceNodes.get(r);
a && a.stop();
cc.Tween.stopAllByTarget(r);
var u = cc.tween(r).to(.4, {
scale: .98 * n
}, {
easing: "sineInOut"
}).to(.4, {
scale: 1.02 * n
}, {
easing: "sineInOut"
}).to(.4, {
scale: .98 * n
}, {
easing: "sineInOut"
}).union().repeatForever().start();
this._resonanceNodes.set(r, u);
}
}
}
}
};
t.prototype.getVisualNode = function(t) {
return t.children && t.children.length > 0 ? t.children[0] : t;
};
t.prototype.stopAllResonance = function() {
if (this.isOpen()) {
this._resonanceNodes.forEach(function(t, e) {
t.stop();
cc.Tween.stopAllByTarget(e);
});
this._resonanceNodes.clear();
}
};
t.prototype.isInResonance = function(t) {
return !(!this.isOpen() || !t) && this._resonanceFruits.has(t);
};
t.prototype.getScoreMultiplier = function(t) {
return this.isOpen() && t && this.isInResonance(t) ? 1.15 : 1;
};
t.prototype.restoreResonance = function() {
var t, e, i = this;
if (this.isOpen()) {
this.loadData();
var n = 0;
if (this._savedResonanceData.length > 0) {
var o = (null === (t = a.default.mergerCtr) || void 0 === t ? void 0 : t.getFruits()) || [], u = null === (e = a.default.mergerCtr) || void 0 === e ? void 0 : e.getReadyDropFruit();
this._savedResonanceData.forEach(function(t) {
var e, a;
try {
for (var s = r(o), l = s.next(); !l.done; l = s.next()) {
var c = l.value;
if (c.getId() === t.id && c.isActiveState()) {
var d = c.position;
if (Math.sqrt(Math.pow(d.x - t.x, 2) + Math.pow(d.y - t.y, 2)) < 10) {
i._resonanceFruits.add(c);
i.applyResonanceAnimation(c);
n++;
return;
}
}
}
} catch (t) {
e = {
error: t
};
} finally {
try {
l && !l.done && (a = s.return) && a.call(s);
} finally {
if (e) throw e.error;
}
}
if (u && u.getId() === t.id) {
d = u.position;
if (Math.sqrt(Math.pow(d.x - t.x, 2) + Math.pow(d.y - t.y, 2)) < 10) {
i._resonanceFruits.add(u);
i.applyResonanceAnimation(u);
n++;
}
}
});
n > 0 && console.log("[" + this._featureName + "] 恢复共振状态，恢复水果数: " + n + ", 总共振水果数: " + this._resonanceFruits.size);
this.saveData();
}
this.checkAndUpdateResonance();
}
};
t.prototype.clear = function() {
if (this.isOpen()) {
var t = this._resonanceFruits.size;
this.stopAllResonance();
this._resonanceFruits.clear();
this._savedResonanceData = [];
this.saveData();
t > 0 && console.log("[" + this._featureName + "] 清理共振状态，清除水果数: " + t);
}
};
t._instance = null;
return t;
}();
i.default = s;
cc._RF.pop();
}, {
"../FruitFeature": "FruitFeature",
"../GLFruitApp": "GLFruitApp"
} ],
GLFruitGuideCtr: [ function(t, e, i) {
"use strict";
cc._RF.push(e, "f892a5TaUJIm6IAnfIps/LX", "GLFruitGuideCtr");
Object.defineProperty(i, "__esModule", {
value: !0
});
var r = t("../GLFruitApp"), n = t("../FruitFeature"), o = t("../../../../gl_hall/gl_lang/config/GLLangKeyDefine"), a = t("../traits/GLFruitAddFruitChoiceListTraitCtrl"), u = function() {
function t() {
this._step = 0;
this._stepOver = -1;
}
t.prototype.tryShowGuide = function() {
if (this.isBeginner()) {
this.logEventGuideStart();
this.showGuide();
}
};
t.prototype.showGuide = function() {
r.default.gameStateCtr.getGameView().getGuideView().showGuide(this._step, this.getContent());
};
t.prototype.hideGuide = function() {
this._stepOver = this._step;
r.default.gameStateCtr.getGameView().getGuideView().hideGuide();
};
t.prototype.nextGuide = function() {
var t = this;
if (this.isBeginner()) {
var e = .5;
2 == this._step && n.default.isOpen(n.FruitFeat.FruitGuideKeepFirstFruit) && (e = 1.5);
r.default.timeCtr.addOnce(e, function() {
1 == t._step && (n.default.isOpen(n.FruitFeat.FruitGuideKeepFirstFruit) || r.default.mergerCtr.guideClear());
t.showGuide();
});
}
};
t.prototype.isBeginner = function() {
return r.default.user.getDataVo().isBeginner;
};
t.prototype.getGuideFixFruitId = function() {
return this.isBeginner() ? 0 == this._step ? 1 : 3 : -1;
};
t.prototype.onHitBottomWall = function() {
this._step++;
this.nextGuide();
};
t.prototype.onMerger = function() {
var t, e, i, n;
if (this.isBeginner()) {
this.hideGuide();
this.logEventGuideEnd();
r.default.user.getDataVo().isBeginner = !1;
r.default.mergerCtr.initReadyDropFruit();
if (a.default.getInstance().isOpen()) {
a.default.getInstance().initNextFruits();
a.default.getInstance().showOrHideNextFruits(!0);
} else {
var o = null === (i = null === (e = null === (t = null === r.default || void 0 === r.default ? void 0 : r.default.mergerCtr) || void 0 === t ? void 0 : t.getNextFruit()) || void 0 === e ? void 0 : e.getItem()) || void 0 === i ? void 0 : i.node;
o && cc.isValid(o) && (o.active = !0);
}
r.default.gameStateCtr.getGameView().getNodeTop().active = !0;
null === (n = r.default.gameStateCtr.getGameView()) || void 0 === n || n.skipGuide();
r.default.mergerCtr.setSpwawnDropPositon(cc.v3(0, r.default.mergerCtr.getSpwawnDropPositon().y));
r.default.user.saveData();
}
};
t.prototype.isCanMove = function() {
return !this.isBeginner() || 1 == this._step;
};
t.prototype.skipGuide = function() {
this.onMerger();
r.default.user.syncGameData();
};
t.prototype.getContent = function() {
return 0 == this._step ? o.default.FRUIT_GUIDE_1 : 1 == this._step ? o.default.FRUIT_GUIDE_2 : 2 == this._step ? o.default.FRUIT_GUIDE_3 : void 0;
};
t.prototype.getGuideHandPos = function() {
var t = r.default.mergerCtr.getFruits();
if (t.length > 0) {
var e = n.default.isOpen(n.FruitFeat.FruitGuideKeepFirstFruit) && 2 == this._step ? t[t.length - 1] : t[0], i = null == e ? void 0 : e.getItem(), o = null == i ? void 0 : i.node;
if (o && cc.isValid(o)) return o.convertToWorldSpaceAR(cc.Vec3.ZERO);
}
return cc.Vec3.ZERO;
};
t.prototype.clear = function() {
this._stepOver = -1;
this._step = 0;
};
t.prototype.logEventGuideStart = function() {
r.default.Instance.usrGuideStartSubmit(r.default.user.getDataVo().gameNum, GL.ExtractTool.configKey.HsFruit || 1);
};
t.prototype.logEventGuideEnd = function() {
r.default.Instance.usrGuideEndSubmit(r.default.user.getDataVo().gameNum, GL.ExtractTool.configKey.HsFruit || 1);
};
return t;
}();
i.default = u;
cc._RF.pop();
}, {
"../../../../gl_hall/gl_lang/config/GLLangKeyDefine": void 0,
"../FruitFeature": "FruitFeature",
"../GLFruitApp": "GLFruitApp",
"../traits/GLFruitAddFruitChoiceListTraitCtrl": "GLFruitAddFruitChoiceListTraitCtrl"
} ],
GLFruitGuideStep: [ function(t, e, i) {
"use strict";
cc._RF.push(e, "13bc8XW08hORY4AEGrN9AfA", "GLFruitGuideStep");
Object.defineProperty(i, "__esModule", {
value: !0
});
i.default = function() {};
cc._RF.pop();
}, {} ],
GLFruitGuideView: [ function(t, e, i) {
"use strict";
cc._RF.push(e, "5723dULzqlDEIvs032Mh9PZ", "GLFruitGuideView");
var r, n = this && this.__extends || (r = function(t, e) {
return (r = Object.setPrototypeOf || {
__proto__: []
} instanceof Array && function(t, e) {
t.__proto__ = e;
} || function(t, e) {
for (var i in e) Object.prototype.hasOwnProperty.call(e, i) && (t[i] = e[i]);
})(t, e);
}, function(t, e) {
r(t, e);
function i() {
this.constructor = t;
}
t.prototype = null === e ? Object.create(e) : (i.prototype = e.prototype, new i());
}), o = this && this.__decorate || function(t, e, i, r) {
var n, o = arguments.length, a = o < 3 ? e : null === r ? r = Object.getOwnPropertyDescriptor(e, i) : r;
if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) a = Reflect.decorate(t, e, i, r); else for (var u = t.length - 1; u >= 0; u--) (n = t[u]) && (a = (o < 3 ? n(a) : o > 3 ? n(e, i, a) : n(e, i)) || a);
return o > 3 && a && Object.defineProperty(e, i, a), a;
};
Object.defineProperty(i, "__esModule", {
value: !0
});
var a = t("../GLFruitApp"), u = t("../tools/GLFruitTools"), s = t("../traits/GLFruitAddFruitChoiceListTraitCtrl"), l = cc._decorator, c = l.ccclass, d = (l.property, 
function(t) {
n(e, t);
function e() {
var e = null !== t && t.apply(this, arguments) || this;
e._nodeContent = null;
e._nodeArrow = null;
e._nodeHand = null;
e._labelContent = null;
e._handSkeleton = null;
return e;
}
e.prototype.onLoad = function() {
this._nodeContent = u.default.FindNode(this.node, "nodeContent");
this._nodeArrow = u.default.FindNode(this.node, "nodeArrow");
this._nodeHand = u.default.FindNode(this.node, "nodeHand");
this._labelContent = u.default.FindNode(this.node, "nodeContent", "labelContent").getComponent(cc.Label);
this._handSkeleton = this._nodeHand.getComponent(sp.Skeleton);
var t = u.default.FindNode(this.node, "nodeTop");
if (null != t) {
var e = u.default.FindNode(t, "btnSkip");
if (null != e) {
var i = u.default.FindNode(e, "skip");
null != i && e.setContentSize(cc.size(i.getContentSize().width, e.getContentSize().height));
}
if (t && cc.isValid(t.parent)) {
var r = t.parent.convertToNodeSpaceAR(a.default.gameStateCtr.getGameView().getNodeTop().convertToWorldSpaceAR(cc.Vec2.ZERO));
t.position = cc.v3(r.x, r.y);
}
}
};
e.prototype.showGuide = function(t, e, i) {
void 0 === i && (i = cc.Vec3.ZERO);
this.node.active = !0;
null != this._labelContent && (this._labelContent.string = e);
null != this._nodeArrow && (this._nodeArrow.active = 1 == t);
if (s.default.getInstance().isOpen()) s.default.getInstance().showOrHideNextFruits(!1); else {
var r = a.default.mergerCtr.getNextFruit();
r && r.getItem() && r.getItem().node && cc.isValid(r.getItem().node) && (r.getItem().node.active = !1);
}
if (null != this._handSkeleton && cc.isValid(this._handSkeleton.node)) {
var n = this._handSkeleton.node;
cc.Tween.stopAllByTarget(n);
n && cc.isValid(n.parent) && n.setSiblingIndex(n.parent.childrenCount - 1);
this._handSkeleton.setAnimation(0, "animation", !0);
}
if (1 == t) {
a.default.mergerCtr.initReadyDropFruit(5);
if (null != this._handSkeleton && cc.isValid(this._handSkeleton.node)) {
this._handSkeleton.setAnimation(0, "animation4", !0);
this._handSkeleton.node.setPosition(-300, -350);
cc.tween(this._handSkeleton.node).to(1, {
x: 300
}).to(1, {
x: -300
}).union().repeatForever().start();
}
} else if (2 == t) {
a.default.mergerCtr.setSpawnDropPositonX(a.default.mergerCtr.getNodeFruitRoot().convertToNodeSpaceAR(cc.v3(a.default.guideCtr.getGuideHandPos().x)).x, !1);
if (cc.isValid(this._nodeHand) && this._nodeHand) {
var o = this._nodeHand;
cc.isValid(o.parent) && (o.position = o.parent.convertToNodeSpaceAR(a.default.guideCtr.getGuideHandPos()));
}
a.default.mergerCtr.initReadyDropFruit(5);
}
cc.isValid(this._nodeHand) && this._nodeHand && (o = this._nodeHand).parent == this.node && cc.isValid(this.node.parent) && (o.parent = this.node.parent);
this._nodeHand && (this._nodeHand.active = !0);
};
e.prototype.hideGuide = function() {
this.node.active = !1;
this._nodeHand && (this._nodeHand.active = !1);
};
e.prototype.onClickedSkip = function() {
a.default.guideCtr.skipGuide();
};
return o([ c ], e);
}(cc.Component));
i.default = d;
cc._RF.pop();
}, {
"../GLFruitApp": "GLFruitApp",
"../tools/GLFruitTools": "GLFruitTools",
"../traits/GLFruitAddFruitChoiceListTraitCtrl": "GLFruitAddFruitChoiceListTraitCtrl"
} ],
GLFruitHaveFruitStartTraitCtrl: [ function(t, e, i) {
"use strict";
cc._RF.push(e, "fed94gDX5pO7IAAlx/TJjog", "GLFruitHaveFruitStartTraitCtrl");
var r = this && this.__values || function(t) {
var e = "function" == typeof Symbol && Symbol.iterator, i = e && t[e], r = 0;
if (i) return i.call(t);
if (t && "number" == typeof t.length) return {
next: function() {
t && r >= t.length && (t = void 0);
return {
value: t && t[r++],
done: !t
};
}
};
throw new TypeError(e ? "Object is not iterable." : "Symbol.iterator is not defined.");
};
Object.defineProperty(i, "__esModule", {
value: !0
});
var n = t("../GLFruitApp"), o = t("../play/GLFruitItem"), a = t("../defines/GLFruitDefine"), u = function() {
function t() {
this._featureName = "GLFruitHaveFruitStart";
this.ZONE_COUNT = 5;
this.FRUIT_WEIGHTS = [ 1, 2, 3, 2, 1 ];
this.WALL_OFFSET = 60;
this._pendingFruits = [];
}
t.getInstance = function() {
null == this._instance && (this._instance = new t());
return this._instance;
};
t.prototype.isOpen = function() {
return GL.Game.IsFeatureOpen(this._featureName);
};
t.prototype.initStartFruits = function() {
if (this.isOpen() && !n.default.guideCtr.isBeginner()) {
var t = n.default.gameStateCtr.getGameView();
if (t) {
var e = t.getNodeBoxBg();
if (e) {
var i = e.width, r = i - 2 * this.WALL_OFFSET, a = r / this.ZONE_COUNT, u = -i / 2 + this.WALL_OFFSET, s = u + r, l = this.getBottomY(t);
this._pendingFruits = [];
for (var c = 0; c < this.ZONE_COUNT; c++) {
var d = this.getWeightedRandomLevel(), p = o.default.FruitRadius[d - 1], f = u + c * a, h = f + p, g = f + a - p;
this._pendingFruits.push({
level: d,
x: h + Math.random() * Math.max(0, g - h),
y: l + p,
radius: p
});
}
this.processOverlaps(u, s, l);
this.spawnAllFruits();
}
}
}
};
t.prototype.getBottomY = function(t) {
var e = t.getNodeWalls(), i = n.default.mergerCtr.getNodeFruitRoot();
if (e && i) {
var r = e.getChildByName("bottomWall");
if (r) {
var o = r.y + r.height / 2, a = e.convertToWorldSpaceAR(cc.v3(0, o, 0));
return i.convertToNodeSpaceAR(a).y;
}
}
return -500;
};
t.prototype.processOverlaps = function(t, e, i) {
for (var r = !0, n = 50; r && n-- > 0; ) {
r = !1;
for (var u = 0; u < this._pendingFruits.length; u++) {
for (var s = u + 1; s < this._pendingFruits.length; s++) {
var l = this._pendingFruits[u], c = this._pendingFruits[s], d = c.x - l.x, p = Math.abs(d), f = l.radius + c.radius;
if (p < f) {
r = !0;
if (l.level === c.level && l.level < a.GLFruitDefine.MaxFruitId) {
var h = l.level + 1, g = o.default.FruitRadius[h - 1];
l.level = h;
l.x = this.clampX((l.x + c.x) / 2, g, t, e);
l.y = i + g;
l.radius = g;
this._pendingFruits.splice(s, 1);
} else {
var F = f - p + 1, y = d >= 0 ? 1 : -1;
l.x -= y * F / 2;
c.x += y * F / 2;
l.x = this.clampX(l.x, l.radius, t, e);
c.x = this.clampX(c.x, c.radius, t, e);
}
break;
}
}
if (r) break;
}
}
};
t.prototype.clampX = function(t, e, i, r) {
return Math.max(i + e, Math.min(r - e, t));
};
t.prototype.spawnAllFruits = function() {
var t, e, i, o;
try {
for (var a = r(this._pendingFruits), u = a.next(); !u.done; u = a.next()) {
var s = u.value;
(p = n.default.mergerCtr.spawnFruit(s.level)).position = new cc.Vec3(s.x, s.y);
p.getItem().node.angle = 0;
n.default.mergerCtr.addFruitForTrait(p);
}
} catch (e) {
t = {
error: e
};
} finally {
try {
u && !u.done && (e = a.return) && e.call(a);
} finally {
if (t) throw t.error;
}
}
var l = n.default.mergerCtr.getFruits();
l.sort(function(t, e) {
return t.position.y - e.position.y;
});
try {
for (var c = r(l), d = c.next(); !d.done; d = c.next()) {
var p;
(p = d.value).runActiveState();
}
} catch (t) {
i = {
error: t
};
} finally {
try {
d && !d.done && (o = c.return) && o.call(c);
} finally {
if (i) throw i.error;
}
}
};
t.prototype.getWeightedRandomLevel = function() {
for (var t = 9 * Math.random(), e = 0; e < this.FRUIT_WEIGHTS.length; e++) if ((t -= this.FRUIT_WEIGHTS[e]) <= 0) return e + 1;
return 3;
};
t.prototype.clear = function() {
this._pendingFruits = [];
};
t._instance = null;
return t;
}();
i.default = u;
cc._RF.pop();
}, {
"../GLFruitApp": "GLFruitApp",
"../defines/GLFruitDefine": "GLFruitDefine",
"../play/GLFruitItem": "GLFruitItem"
} ],
GLFruitHideBottomFruit: [ function(t, e, i) {
"use strict";
cc._RF.push(e, "5c0c9dvlPBCRbI0k2iRRg6h", "GLFruitHideBottomFruit");
var r, n = this && this.__extends || (r = function(t, e) {
return (r = Object.setPrototypeOf || {
__proto__: []
} instanceof Array && function(t, e) {
t.__proto__ = e;
} || function(t, e) {
for (var i in e) Object.prototype.hasOwnProperty.call(e, i) && (t[i] = e[i]);
})(t, e);
}, function(t, e) {
r(t, e);
function i() {
this.constructor = t;
}
t.prototype = null === e ? Object.create(e) : (i.prototype = e.prototype, new i());
}), o = this && this.__decorate || function(t, e, i, r) {
var n, o = arguments.length, a = o < 3 ? e : null === r ? r = Object.getOwnPropertyDescriptor(e, i) : r;
if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) a = Reflect.decorate(t, e, i, r); else for (var u = t.length - 1; u >= 0; u--) (n = t[u]) && (a = (o < 3 ? n(a) : o > 3 ? n(e, i, a) : n(e, i)) || a);
return o > 3 && a && Object.defineProperty(e, i, a), a;
};
Object.defineProperty(i, "__esModule", {
value: !0
});
var a = t("./FruitFeature"), u = cc._decorator, s = u.ccclass, l = (u.property, 
function(t) {
n(e, t);
function e() {
var e = null !== t && t.apply(this, arguments) || this;
e.nodeFruits1 = [];
e.nodeFruits2 = [];
return e;
}
e.prototype.setNodeFruits1 = function(t) {
this.nodeFruits1 = t;
this.updateNodeVisibility();
};
e.prototype.setNodeFruits2 = function(t) {
this.nodeFruits2 = t;
this.updateNodeVisibility();
};
e.prototype.updateNodeVisibility = function() {
var t = a.default.isOpen(a.FruitFeat.FruitHideBottomFruit);
this.nodeFruits1.forEach(function(e) {
e && cc.isValid(e) && (e.active = !t);
});
this.nodeFruits2.forEach(function(e) {
e && cc.isValid(e) && (e.active = t);
});
};
e.prototype.onLoad = function() {
this.updateNodeVisibility();
};
return o([ s ], e);
}(cc.Component));
i.default = l;
cc._RF.pop();
}, {
"./FruitFeature": "FruitFeature"
} ],
GLFruitInstance: [ function(t, e, i) {
"use strict";
cc._RF.push(e, "dc79aMAyr9D1IYA0I0p/gWx", "GLFruitInstance");
var r = this && this.__read || function(t, e) {
var i = "function" == typeof Symbol && t[Symbol.iterator];
if (!i) return t;
var r, n, o = i.call(t), a = [];
try {
for (;(void 0 === e || e-- > 0) && !(r = o.next()).done; ) a.push(r.value);
} catch (t) {
n = {
error: t
};
} finally {
try {
r && !r.done && (i = o.return) && i.call(o);
} finally {
if (n) throw n.error;
}
}
return a;
}, n = this && this.__spread || function() {
for (var t = [], e = 0; e < arguments.length; e++) t = t.concat(r(arguments[e]));
return t;
};
Object.defineProperty(i, "__esModule", {
value: !0
});
var o = function() {
function t() {}
t.get = function(t) {
for (var e = [], i = 1; i < arguments.length; i++) e[i - 1] = arguments[i];
if (!this._instances.has(t)) {
var r = new (t.bind.apply(t, n([ void 0 ], e)))();
this._instances.set(t, r);
t.__Instance__ = r;
}
return this._instances.get(t);
};
t.Clear = function() {
this._instances.forEach(function(t, e) {
delete e.__Instance__;
});
this._instances.clear();
};
t._instances = new Map();
return t;
}();
i.default = o;
cc._RF.pop();
}, {} ],
GLFruitInterAdsWaitView: [ function(t, e, i) {
"use strict";
cc._RF.push(e, "b8bbfZoHPtGWKMUnOVbDK4T", "GLFruitInterAdsWaitView");
var r, n = this && this.__extends || (r = function(t, e) {
return (r = Object.setPrototypeOf || {
__proto__: []
} instanceof Array && function(t, e) {
t.__proto__ = e;
} || function(t, e) {
for (var i in e) Object.prototype.hasOwnProperty.call(e, i) && (t[i] = e[i]);
})(t, e);
}, function(t, e) {
r(t, e);
function i() {
this.constructor = t;
}
t.prototype = null === e ? Object.create(e) : (i.prototype = e.prototype, new i());
}), o = this && this.__decorate || function(t, e, i, r) {
var n, o = arguments.length, a = o < 3 ? e : null === r ? r = Object.getOwnPropertyDescriptor(e, i) : r;
if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) a = Reflect.decorate(t, e, i, r); else for (var u = t.length - 1; u >= 0; u--) (n = t[u]) && (a = (o < 3 ? n(a) : o > 3 ? n(e, i, a) : n(e, i)) || a);
return o > 3 && a && Object.defineProperty(e, i, a), a;
};
Object.defineProperty(i, "__esModule", {
value: !0
});
var a = t("../GLFruitApp"), u = cc._decorator.ccclass, s = function(t) {
n(e, t);
function e() {
var e = null !== t && t.apply(this, arguments) || this;
e._spProgress = null;
e._labelTime = null;
e._countDownTime = 3;
return e;
}
e.prototype.onLoad = function() {
this._spProgress = this.node.getChildByName("spProgress").getComponent(cc.Sprite);
this._labelTime = this.node.getChildByName("labelTime").getComponent(cc.Label);
};
e.prototype.showView = function(t) {
var e = this;
a.default.SafeNextFrame(function() {
a.default.mergerCtr.isPause = !0;
e.node.active = !0;
e._spProgress.fillRange = 0;
e._countDownTime = 3;
e._labelTime.string = e._countDownTime.toString();
a.default.timeCtr.add(1, function() {
e._countDownTime--;
e._labelTime.string = e._countDownTime.toString();
}, e, 3);
a.default.dynamicAccumCtr.create(0, 1, 3, function(t) {
e._spProgress.fillRange = t;
}, function() {
a.default.mergerCtr.isPause = !1;
e.node.active = !1;
t && t();
});
});
};
return o([ u ], e);
}(cc.Component);
i.default = s;
cc._RF.pop();
}, {
"../GLFruitApp": "GLFruitApp"
} ],
GLFruitItem: [ function(t, e, i) {
"use strict";
cc._RF.push(e, "72f7dgyRH1PU5t4b+pC0VPL", "GLFruitItem");
var r, n = this && this.__extends || (r = function(t, e) {
return (r = Object.setPrototypeOf || {
__proto__: []
} instanceof Array && function(t, e) {
t.__proto__ = e;
} || function(t, e) {
for (var i in e) Object.prototype.hasOwnProperty.call(e, i) && (t[i] = e[i]);
})(t, e);
}, function(t, e) {
r(t, e);
function i() {
this.constructor = t;
}
t.prototype = null === e ? Object.create(e) : (i.prototype = e.prototype, new i());
}), o = this && this.__decorate || function(t, e, i, r) {
var n, o = arguments.length, a = o < 3 ? e : null === r ? r = Object.getOwnPropertyDescriptor(e, i) : r;
if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) a = Reflect.decorate(t, e, i, r); else for (var u = t.length - 1; u >= 0; u--) (n = t[u]) && (a = (o < 3 ? n(a) : o > 3 ? n(e, i, a) : n(e, i)) || a);
return o > 3 && a && Object.defineProperty(e, i, a), a;
};
Object.defineProperty(i, "__esModule", {
value: !0
});
var a = t("../../core/FruitEventCenter"), u = t("../ctrs/GLFruitEffectCtr"), s = t("../defines/GLFruitDefine"), l = t("../FruitFeature"), c = t("../ctrs/FruitWannengFruitCtrl"), d = t("../FruitMergeDistanceRelaxedCtrl"), p = t("../GLFruitApp"), f = t("../traits/GLFruitFaceNotRotateTraitCtrl"), h = cc._decorator, g = h.ccclass, F = h.property, y = function(t) {
n(e, t);
function e() {
var e = null !== t && t.apply(this, arguments) || this;
e._rigidbody = null;
e._circleCollider = null;
e._detectCollider = null;
e._isInit = !1;
e._fruit = null;
e._skeleton = null;
e._bombEffect = null;
e._angularVelocityTimer = null;
e._lastPosition = null;
e._rotationNum = 0;
e.sameFruitSpine = null;
return e;
}
i = e;
e.getFruitRadius = function(t) {
if (l.default.isOpen(l.FruitFeat.FruitWannengFruit)) {
var e = c.default.getInstance().getFruitRadius(t);
if (null != e) return e;
}
var r = t - 1;
return i.FruitRadius[r];
};
e.prototype.onLoad = function() {
var t, e;
cc.isValid(this.node) && this.node.children.length > 0 && cc.isValid(this.node.children[0]) && (GL.Game.IsFeatureOpen("GLFruitFaceNotRotate") ? this._skeleton = null === (e = null === (t = this.node) || void 0 === t ? void 0 : t.getChildByName("skin")) || void 0 === e ? void 0 : e.getComponent(sp.Skeleton) : this._skeleton = this.node.children[0].getComponent(sp.Skeleton));
a.FruitEventCenter.addListener(a.FruitEventType.ShowSameFruit, this.onShowSameFruit, this);
a.FruitEventCenter.addListener(a.FruitEventType.HideSameFruit, this.onHideSameFruit, this);
a.FruitEventCenter.addListener(a.FruitEventType.ShowSameFruitByMerge, this.onShowSameFruitByMerge, this);
};
e.prototype.onDestroy = function() {
a.FruitEventCenter.removeListener(a.FruitEventType.ShowSameFruit, this.onShowSameFruit, this);
a.FruitEventCenter.removeListener(a.FruitEventType.HideSameFruit, this.onHideSameFruit, this);
a.FruitEventCenter.removeListener(a.FruitEventType.ShowSameFruitByMerge, this.onShowSameFruitByMerge, this);
};
e.prototype.onShowSameFruitByMerge = function(t) {
if (l.default.isOpen(l.FruitFeat.FruitSameFruitTips) && this.sameFruitSpine && cc.isValid(this.sameFruitSpine.node) && i.fruitId == t && this._fruit && this._fruit.getId() == t && t <= 4 && this._fruit.isActiveState()) {
this.sameFruitSpine.node.active = !0;
if (this.sameFruitSpine.animation == "idle_" + t) return;
this.sameFruitSpine.setAnimation(0, "idle_" + t, !0);
}
};
e.prototype.onShowSameFruit = function(t) {
if (l.default.isOpen(l.FruitFeat.FruitSameFruitTips) && this.sameFruitSpine && cc.isValid(this.sameFruitSpine.node)) {
i.fruitId = t;
if (this._fruit && this._fruit.getId() == t && t <= 4 && this._fruit.isActiveState()) {
this.sameFruitSpine.node.active = !0;
if (this.sameFruitSpine.animation == "idle_" + t) return;
this.sameFruitSpine.setAnimation(0, "idle_" + t, !0);
} else this.sameFruitSpine.node.active = !1;
}
};
e.prototype.onHideSameFruit = function() {
l.default.isOpen(l.FruitFeat.FruitSameFruitTips) && this.sameFruitSpine && cc.isValid(this.sameFruitSpine.node) && (this.sameFruitSpine.node.active = !1);
};
e.prototype.getRigidbody = function() {
return this._rigidbody;
};
e.prototype.getPhysicsCircleCollider = function() {
return this._circleCollider;
};
e.prototype.getFruit = function() {
return this._fruit;
};
e.prototype.init = function(t) {
if (!this._isInit) {
this._isInit = !1;
this._fruit = t;
}
};
e.prototype.initPhysics = function() {
this._rigidbody || (this._rigidbody = this.addComponent(cc.RigidBody));
this._circleCollider || (this._circleCollider = this.addComponent(cc.PhysicsCircleCollider));
this.initRigidbodyAndCollider();
};
e.prototype.onBeginContact = function(t, e, i) {
this._fruit && this._fruit.onBeginContact(t, e, i);
};
e.prototype.onEndContact = function(t, e, i) {
this._fruit && this._fruit.onEndContact(t, e, i);
};
e.prototype.onPreSolve = function() {};
e.prototype.onPostSolve = function() {};
e.prototype.clear = function() {
var t = this;
if (cc.isValid(this.node)) {
cc.Tween.stopAllByTarget(this.node);
this.node.active = !1;
}
p.default.SafeNextFrame(function() {
if (t._angularVelocityTimer) {
p.default.timeCtr.removeByTimer(t._angularVelocityTimer);
t._angularVelocityTimer = null;
}
t.hideBombEffect();
t.removePhysicsComponents();
t._fruit && p.default.poolCtr.push(t._fruit.getName(), t.node);
t._resetFruitItemState();
});
};
e.prototype.removePhysicsComponents = function() {
if (this._rigidbody) {
this._rigidbody.linearVelocity = cc.v2(0, 0);
this._rigidbody.angularVelocity = 0;
this._rigidbody.type = cc.RigidBodyType.Static;
this._rigidbody.active = !1;
d.default.getInstance().updateColliderEnabled(this._circleCollider, this._detectCollider, !1);
}
};
Object.defineProperty(e.prototype, "isPhysicsEnable", {
set: function(t) {
if (this._rigidbody) {
if (t) {
this._rigidbody.type = cc.RigidBodyType.Dynamic;
this._rigidbody.active = !0;
} else {
this._rigidbody.linearVelocity = cc.v2(0, 0);
this._rigidbody.angularVelocity = 0;
this._rigidbody.type = cc.RigidBodyType.Static;
this._rigidbody.active = !1;
}
d.default.getInstance().updateColliderEnabled(this._circleCollider, this._detectCollider, t);
}
},
enumerable: !1,
configurable: !0
});
e.prototype._resetFruitItemState = function() {
this._isInit = !1;
this._fruit = null;
this._lastPosition = null;
this._rotationNum = 0;
};
e.prototype.checkRotation = function() {
if (this._rigidbody && this._rigidbody.active && cc.isValid(this.node) && this.node.active) {
var t = this.node.position;
if (this._lastPosition) {
var e = Math.abs(t.x - this._lastPosition.x), r = Math.abs(t.y - this._lastPosition.y), n = Math.sqrt(e * e + r * r), o = Math.abs(this._rigidbody.angularVelocity) > i.MIN_ANGULAR_VELOCITY, a = n < i.POSITION_THRESHOLD;
o && a ? this._rotationNum++ : this._rotationNum = 0;
if (this._rotationNum >= 3) {
console.log("暂停旋转------------------------" + this.node.name + "  this._rigidbody.angularVelocity = " + this._rigidbody.angularVelocity + "distance = " + n);
this._rigidbody.angularVelocity = 0;
this._rotationNum = 0;
}
}
this._lastPosition = t;
}
};
e.prototype.initRigidbodyAndCollider = function() {
var t = this;
this._rigidbody.enabledContactListener = !0;
var e = p.default.physicsConfigCtr.getCurPhysicsData();
this._rigidbody.gravityScale = e.GravityScale;
this._rigidbody.type = cc.RigidBodyType.Dynamic;
this._rigidbody.linearDamping = e.Drag;
this._rigidbody.angularDamping = e.AngularDrag;
this._circleCollider.friction = e.FruitFriction;
var r = e.FruitBounciness;
if (l.default.isOpen(l.FruitFeat.FruitEnhancedCollisionBounce)) {
var n = l.default.getFeatureKeyParam(l.FruitFeat.FruitEnhancedCollisionBounce, "bounceMultiplier", 2);
r = e.FruitBounciness * n;
r = Math.min(r, .9);
}
this._circleCollider.restitution = r;
var o = i.FruitRadius[this._fruit.getId() - 1];
this._circleCollider.radius = i.getFruitRadius(this._fruit.getId());
this._circleCollider.apply();
var a = i.FruitRadius[0];
this._detectCollider = d.default.getInstance().setupColliders(this.node, this._circleCollider, this._detectCollider, o, a);
this._fruit.isGoldWatermelon() && (this._angularVelocityTimer = p.default.timeCtr.add(0, function() {
t._rigidbody && t._rigidbody.enabled && Math.abs(t._rigidbody.angularVelocity) > .001 && (t._rigidbody.angularVelocity = 0);
}));
};
e.prototype.playAnimation = function(t) {
if (this._skeleton) {
var e = this._fruit ? s.GLFruitAnimationDefine.getAnimationName(this._fruit.getId(), t) : t;
this._skeleton.setAnimation(0, e, !0);
}
};
e.prototype.playEmptyAnimation = function() {
this._skeleton && this._skeleton.setAnimation(0, this._skeleton.defaultAnimation, !1);
};
e.prototype.playAnimationOnce = function(t, e) {
var i = this;
if (this._skeleton) {
var r = this._fruit ? s.GLFruitAnimationDefine.getAnimationName(this._fruit.getId(), t) : t;
this._skeleton.setCompleteListener(function() {
var t;
null === (t = i._skeleton) || void 0 === t || t.setCompleteListener(null);
e && e();
});
this._skeleton.setAnimation(0, r, !1);
}
};
e.prototype.showBombEffect = function() {
if (cc.isValid(this.node)) {
this._bombEffect = p.default.effectCtr.playPropBombEffect(cc.Vec3.ZERO, this.node);
if (null != this._bombEffect && null != this._fruit) {
var t = i.getFruitRadius(this._fruit.getId());
null != t && (this._bombEffect.scale = 2 * t / 250);
}
}
};
e.prototype.hideBombEffect = function() {
if (this._bombEffect) {
p.default.effectCtr.recycleEffect(this._bombEffect, u.default.miaozhun);
this._bombEffect = null;
}
};
e.prototype.update = function() {
var t;
if (f.default.getInstance().isOpen()) {
var e = null === (t = this.node) || void 0 === t ? void 0 : t.getChildByName("skin");
null != e && (e.angle = 0 - this.node.angle);
}
};
var i;
e.POSITION_THRESHOLD = .1;
e.MIN_ANGULAR_VELOCITY = .1;
e.FruitRadius = [ 39, 50, 72, 84, 104, 130, 158, 182, 200, 264, 300, 300 ];
e.fruitId = -1;
o([ F(sp.Skeleton) ], e.prototype, "sameFruitSpine", void 0);
return i = o([ g ], e);
}(cc.Component);
i.default = y;
cc._RF.pop();
}, {
"../../core/FruitEventCenter": "FruitEventCenter",
"../FruitFeature": "FruitFeature",
"../FruitMergeDistanceRelaxedCtrl": "FruitMergeDistanceRelaxedCtrl",
"../GLFruitApp": "GLFruitApp",
"../ctrs/FruitWannengFruitCtrl": "FruitWannengFruitCtrl",
"../ctrs/GLFruitEffectCtr": "GLFruitEffectCtr",
"../defines/GLFruitDefine": "GLFruitDefine",
"../traits/GLFruitFaceNotRotateTraitCtrl": "GLFruitFaceNotRotateTraitCtrl"
} ],
GLFruitLangCfg: [ function(t, e, i) {
"use strict";
cc._RF.push(e, "f7e8czZUBJBKZZIPiYu/2ek", "GLFruitLangCfg");
Object.defineProperty(i, "__esModule", {
value: !0
});
var r = t("../defines/GLFruitDefine"), n = t("../../../../gl_hall/gl_lang/config/GLLangKeyDefine"), o = function() {
function t() {}
t.CardTileHasCover = "Remove tiles blocking the top first";
t.CardTileHasSides = "Remove tiles on the left and right sides first";
t.UndoTips = "Currently unavailable. There are no undoable moves!";
t.PopupCfg = {
again: {
icon: 0,
title: n.default.FRUIT_POPUP_RESTART_TITLE,
content: n.default.FRUIT_POPUP_RESTART_DESC,
btnText1: n.default.FRUIT_POPUP_RESTART_BUTTON_YES,
btnText2: n.default.FRUIT_POPUP_RESTART_BUTTON_NO,
hideCloseBtn: !1
},
bomb: {
icon: 6,
title: n.default.FRUIT_POPUP_BOMB_TITLE,
content: "",
btnText1: n.default.FRUIT_POPUP_BOMB_BUTTON_YES,
btnText2: n.default.FRUIT_POPUP_BOMB_BUTTON_NO,
hideCloseBtn: !1,
isBtn1Video: !0,
propId: r.GLFruitPropIdDefine.Bomb
},
shake: {
icon: 5,
title: n.default.FRUIT_POPUP_SHAKE_TITLE,
content: "",
btnText1: n.default.FRUIT_POPUP_SHAKE_BUTTON_YES,
btnText2: n.default.FRUIT_POPUP_SHAKE_BUTTON_NO,
hideCloseBtn: !1,
isBtn1Video: !0,
propId: r.GLFruitPropIdDefine.Shake
},
deathRevive: {
icon: 5,
title: "看视频复活",
content: "看激励视频复活并获得一次震荡机会",
btnText1: "看视频复活",
btnText2: "放弃",
hideCloseBtn: !1,
isBtn1Video: !0
}
};
return t;
}();
i.default = o;
cc._RF.pop();
}, {
"../../../../gl_hall/gl_lang/config/GLLangKeyDefine": void 0,
"../defines/GLFruitDefine": "GLFruitDefine"
} ],
GLFruitLikeEffect: [ function(t, e, i) {
"use strict";
cc._RF.push(e, "d566eW638FNP6OJnir3XuDO", "GLFruitLikeEffect");
var r, n = this && this.__extends || (r = function(t, e) {
return (r = Object.setPrototypeOf || {
__proto__: []
} instanceof Array && function(t, e) {
t.__proto__ = e;
} || function(t, e) {
for (var i in e) Object.prototype.hasOwnProperty.call(e, i) && (t[i] = e[i]);
})(t, e);
}, function(t, e) {
r(t, e);
function i() {
this.constructor = t;
}
t.prototype = null === e ? Object.create(e) : (i.prototype = e.prototype, new i());
}), o = this && this.__decorate || function(t, e, i, r) {
var n, o = arguments.length, a = o < 3 ? e : null === r ? r = Object.getOwnPropertyDescriptor(e, i) : r;
if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) a = Reflect.decorate(t, e, i, r); else for (var u = t.length - 1; u >= 0; u--) (n = t[u]) && (a = (o < 3 ? n(a) : o > 3 ? n(e, i, a) : n(e, i)) || a);
return o > 3 && a && Object.defineProperty(e, i, a), a;
};
Object.defineProperty(i, "__esModule", {
value: !0
});
var a = t("../defines/GLFruitDefine"), u = t("../GLFruitApp"), s = t("../tools/GLFruitTools"), l = cc._decorator, c = l.ccclass, d = l.property, p = function(t) {
n(e, t);
function e() {
var e = null !== t && t.apply(this, arguments) || this;
e.spriteFrames = [];
e.spIcon = null;
e.nodeCombo = null;
e.nodeDianzan = null;
return e;
}
e.prototype.onLoad = function() {
var t = s.default.FindNode(this.node, "dianzan", "ATTACHED_NODE_TREE", "ATTACHED_NODE:root");
this.nodeCombo = s.default.FindNode(t, "ATTACHED_NODE:combo");
this.nodeDianzan = s.default.FindNode(t, "ATTACHED_NODE:dianzhan");
this.spIcon = s.default.FindNode(this.node, "nodeSp").getComponent(cc.Sprite);
};
e.prototype.play = function(t, e) {
if (cc.isValid(this.spIcon) && cc.isValid(this.nodeDianzan) && cc.isValid(this.nodeCombo)) {
if ("dianzhan" == t) {
this.spIcon.node.setParent(this.nodeDianzan);
this.nodeDianzan.position = cc.Vec3.ZERO;
} else {
this.spIcon.node.setParent(this.nodeCombo);
this.nodeDianzan.position = cc.Vec3.ZERO;
}
e >= 0 && e < this.spriteFrames.length ? this.spIcon.spriteFrame = this.spriteFrames[e] : this.spIcon.spriteFrame = this.spriteFrames[0];
var i = Math.max(this.spriteFrames.length - 1, e);
u.default.audioMgr.playEffect("" + a.GLFruitAudioDefine.fruit_streak + i);
}
};
e.prototype.clearSpriteFrame = function() {
this.spIcon.spriteFrame = null;
};
o([ d(cc.SpriteFrame) ], e.prototype, "spriteFrames", void 0);
return o([ c ], e);
}(cc.Component);
i.default = p;
cc._RF.pop();
}, {
"../GLFruitApp": "GLFruitApp",
"../defines/GLFruitDefine": "GLFruitDefine",
"../tools/GLFruitTools": "GLFruitTools"
} ],
GLFruitLoadStateNode: [ function(t, e, i) {
"use strict";
cc._RF.push(e, "f8e29syctBHsqYP/ylSRift", "GLFruitLoadStateNode");
var r, n = this && this.__extends || (r = function(t, e) {
return (r = Object.setPrototypeOf || {
__proto__: []
} instanceof Array && function(t, e) {
t.__proto__ = e;
} || function(t, e) {
for (var i in e) Object.prototype.hasOwnProperty.call(e, i) && (t[i] = e[i]);
})(t, e);
}, function(t, e) {
r(t, e);
function i() {
this.constructor = t;
}
t.prototype = null === e ? Object.create(e) : (i.prototype = e.prototype, new i());
}), o = this && this.__awaiter || function(t, e, i, r) {
return new (i || (i = Promise))(function(n, o) {
function a(t) {
try {
s(r.next(t));
} catch (t) {
o(t);
}
}
function u(t) {
try {
s(r.throw(t));
} catch (t) {
o(t);
}
}
function s(t) {
t.done ? n(t.value) : (e = t.value, e instanceof i ? e : new i(function(t) {
t(e);
})).then(a, u);
var e;
}
s((r = r.apply(t, e || [])).next());
});
}, a = this && this.__generator || function(t, e) {
var i, r, n, o, a = {
label: 0,
sent: function() {
if (1 & n[0]) throw n[1];
return n[1];
},
trys: [],
ops: []
};
return o = {
next: u(0),
throw: u(1),
return: u(2)
}, "function" == typeof Symbol && (o[Symbol.iterator] = function() {
return this;
}), o;
function u(t) {
return function(e) {
return s([ t, e ]);
};
}
function s(o) {
if (i) throw new TypeError("Generator is already executing.");
for (;a; ) try {
if (i = 1, r && (n = 2 & o[0] ? r.return : o[0] ? r.throw || ((n = r.return) && n.call(r), 
0) : r.next) && !(n = n.call(r, o[1])).done) return n;
(r = 0, n) && (o = [ 2 & o[0], n.value ]);
switch (o[0]) {
case 0:
case 1:
n = o;
break;

case 4:
a.label++;
return {
value: o[1],
done: !1
};

case 5:
a.label++;
r = o[1];
o = [ 0 ];
continue;

case 7:
o = a.ops.pop();
a.trys.pop();
continue;

default:
if (!(n = a.trys, n = n.length > 0 && n[n.length - 1]) && (6 === o[0] || 2 === o[0])) {
a = 0;
continue;
}
if (3 === o[0] && (!n || o[1] > n[0] && o[1] < n[3])) {
a.label = o[1];
break;
}
if (6 === o[0] && a.label < n[1]) {
a.label = n[1];
n = o;
break;
}
if (n && a.label < n[2]) {
a.label = n[2];
a.ops.push(o);
break;
}
n[2] && a.ops.pop();
a.trys.pop();
continue;
}
o = e.call(t, a);
} catch (t) {
o = [ 6, t ];
r = 0;
} finally {
i = n = 0;
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
var u = t("../../core/fsmNode/GLFruitStateNode"), s = t("../ctrs/GLFruitEffectCtr"), l = t("../GLFruitApp"), c = t("../tools/GLFruitTools"), d = t("../ctrs/FruitWannengFruitCtrl"), p = t("../traits/GLFruitFaceNotRotateTraitCtrl"), f = t("../FruitFeature"), h = function(t) {
n(e, t);
function e() {
return null !== t && t.apply(this, arguments) || this;
}
e.prototype.onEnter = function() {
this.loadAssets();
};
e.prototype.onExit = function() {};
e.prototype.loadAssets = function() {
return o(this, void 0, void 0, function() {
var t, e, i, r, n;
return a(this, function(o) {
switch (o.label) {
case 0:
for (t = 1; t <= 12; t++) {
e = l.default.assetsLoader.prafabFruits[t - 1];
GL.Game.IsFeatureOpen("GLFruitFaceNotRotate") && p.default.getInstance().isOpen() && null != (i = p.default.getInstance().getFruitPrefab(t)) && (e = i);
r = c.default.GetFruitNameById(t);
l.default.poolCtr.createObjectPool(r, e, 2);
}
f.default.isOpen(f.FruitFeat.FruitWannengFruit) && d.default.getInstance().loadWannengFruitPrefabPool();
l.default.fruitConfigCtr.initConfig(l.default.assetsLoader.fruitConfig);
l.default.physicsConfigCtr.initConfig(l.default.assetsLoader.physicsConfig);
l.default.poolCtr.createObjectPool("GLFruitDropLineDotItem", l.default.assetsLoader.prefabGLFruitDropLineDotItem, 15);
l.default.poolCtr.createObjectPool("GLFruitComboItem", l.default.assetsLoader.prefabGLFruitComboItem, 1);
return [ 4, l.default.assetCtr.loadPrefab("assets/prefabs/items/GLFruitComboItemNew") ];

case 1:
(n = o.sent()) ? l.default.poolCtr.createObjectPool("GLFruitComboItemNew", n, 1) : console.error("[GLFruitLoadStateNode] Failed to load GLFruitComboItemNew prefab");
l.default.poolCtr.createObjectPool(s.default.MergeNew_fx_B, l.default.assetsLoader.prefabMergeNew_fx_B, 1);
l.default.poolCtr.createObjectPool(s.default.HsFruitMerge_Click_fx_01_B, l.default.assetsLoader.prefabHsFruitMerge_Click_fx_01_B, 1);
l.default.poolCtr.createObjectPool(s.default.lose_hint_fx, l.default.assetsLoader.prefabLose_hint_fx, 1);
l.default.poolCtr.createObjectPool(s.default.miaozhun, l.default.assetsLoader.prefabMiaozhun, 1);
l.default.poolCtr.createObjectPool(s.default.BoardFullPanel, l.default.assetsLoader.boardFullPanel, 1);
return [ 4, l.default.experimentCtr.loadAsset() ];

case 2:
o.sent();
l.default.physicsConfigCtr.init();
l.default.gameStateCtr.runPlayState();
return [ 2 ];
}
});
});
};
return e;
}(u.default);
i.default = h;
cc._RF.pop();
}, {
"../../core/fsmNode/GLFruitStateNode": "GLFruitStateNode",
"../FruitFeature": "FruitFeature",
"../GLFruitApp": "GLFruitApp",
"../ctrs/FruitWannengFruitCtrl": "FruitWannengFruitCtrl",
"../ctrs/GLFruitEffectCtr": "GLFruitEffectCtr",
"../tools/GLFruitTools": "GLFruitTools",
"../traits/GLFruitFaceNotRotateTraitCtrl": "GLFruitFaceNotRotateTraitCtrl"
} ],
GLFruitLongPressAcc: [ function(t, e, i) {
"use strict";
cc._RF.push(e, "d5956wPl6JDjo82g5jgQeuL", "GLFruitLongPressAcc");
var r, n = this && this.__extends || (r = function(t, e) {
return (r = Object.setPrototypeOf || {
__proto__: []
} instanceof Array && function(t, e) {
t.__proto__ = e;
} || function(t, e) {
for (var i in e) Object.prototype.hasOwnProperty.call(e, i) && (t[i] = e[i]);
})(t, e);
}, function(t, e) {
r(t, e);
function i() {
this.constructor = t;
}
t.prototype = null === e ? Object.create(e) : (i.prototype = e.prototype, new i());
}), o = this && this.__decorate || function(t, e, i, r) {
var n, o = arguments.length, a = o < 3 ? e : null === r ? r = Object.getOwnPropertyDescriptor(e, i) : r;
if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) a = Reflect.decorate(t, e, i, r); else for (var u = t.length - 1; u >= 0; u--) (n = t[u]) && (a = (o < 3 ? n(a) : o > 3 ? n(e, i, a) : n(e, i)) || a);
return o > 3 && a && Object.defineProperty(e, i, a), a;
}, a = this && this.__values || function(t) {
var e = "function" == typeof Symbol && Symbol.iterator, i = e && t[e], r = 0;
if (i) return i.call(t);
if (t && "number" == typeof t.length) return {
next: function() {
t && r >= t.length && (t = void 0);
return {
value: t && t[r++],
done: !t
};
}
};
throw new TypeError(e ? "Object is not iterable." : "Symbol.iterator is not defined.");
};
Object.defineProperty(i, "__esModule", {
value: !0
});
var u = t("../GLFruitApp"), s = t("../tools/GLFruitTools"), l = t("../FruitLongPressAccCtrl"), c = t("../defines/GLFruitDefine"), d = t("./GLFruitPropButton"), p = cc._decorator, f = p.ccclass, h = (p.property, 
function(t) {
n(e, t);
function e() {
var e = null !== t && t.apply(this, arguments) || this;
e._propShakeBtn = null;
e._propBombBtn = null;
e._nodeShake = null;
e._nodeBomb = null;
e._nodeBack = null;
e._nodeAgain = null;
e._hotAreaNode = null;
e._isLongPressing = !1;
e._longPressStartTime = 0;
e._longPressThreshold = 500;
e._accelerationMultiplier = 2;
e._currentTouchId = -1;
e._longPressTimer = null;
e._lastDropTime = 0;
e.playingEffectMap = new Map();
return e;
}
i = e;
e.getInstance = function() {
return i._instance;
};
e.isLongPressing = function() {
return !!l.default.getInstance().isOpen() && i._isLongPressingStatic;
};
e.getAccelerationMultiplier = function() {
if (!l.default.getInstance().isOpen()) return 1;
var t = i._instance;
return t ? t._accelerationMultiplier : 2;
};
e.prototype.onLoad = function() {
i._instance = this;
if (l.default.getInstance().isOpen()) {
var t = l.default.getInstance().getConfiguredAccelerationMultiplier(2);
this._accelerationMultiplier = t;
var e = s.default.FindNode(this.node, "nodeTop");
if (e) {
this._nodeShake = s.default.FindNode(e, "btnShake");
this._nodeBomb = s.default.FindNode(e, "btnBomb");
this._nodeBack = s.default.FindNode(e, "btnBack");
this._nodeAgain = s.default.FindNode(e, "btnAgain");
this._nodeShake ? this._propShakeBtn = this._nodeShake.getComponent(d.default) : console.warn("[GLFruitLongPressAcc] 未找到摇晃按钮节点");
this._nodeBomb ? this._propBombBtn = this._nodeBomb.getComponent(d.default) : console.warn("[GLFruitLongPressAcc] 未找到炸弹按钮节点");
this._nodeBack || console.warn("[GLFruitLongPressAcc] 未找到回退按钮节点");
this._nodeAgain || console.warn("[GLFruitLongPressAcc] 未找到replay按钮节点");
} else console.warn("[GLFruitLongPressAcc] 未找到nodeTop节点");
this.createHotArea();
console.log("[GLFruitLongPressAcc] 初始化完成 - 长按阈值: " + this._longPressThreshold + "ms，加速倍数: " + this._accelerationMultiplier);
} else this.enabled = !1;
};
e.prototype.onEnable = function() {
l.default.getInstance().isOpen() && this.registerTouchEvents();
};
e.prototype.onDisable = function() {
this.unregisterTouchEvents();
this.cancelLongPress();
};
e.prototype.onDestroy = function() {
this.unregisterTouchEvents();
this.cancelLongPress();
this.clearPlayingEffects();
if (i._instance === this) {
i._instance = null;
i._isLongPressingStatic = !1;
}
};
e.prototype.trackPlayingEffect = function(t, e) {
cc.isValid(t) && e && this.playingEffectMap.set(t, e);
};
e.prototype.untrackPlayingEffect = function(t) {
t && this.playingEffectMap.delete(t);
};
e.prototype.clearPlayingEffects = function() {
null != this.playingEffectMap && this.playingEffectMap.clear();
};
e.prototype.createHotArea = function() {
this._hotAreaNode = s.default.FindNode(this.node, "LongPressAccHotArea");
if (!this._hotAreaNode) {
this._hotAreaNode = new cc.Node("LongPressAccHotArea");
var t = cc.Canvas.instance.designResolution, e = 2 * t.width, i = 2 * t.height;
this._hotAreaNode.setContentSize(e, i);
this._hotAreaNode.setAnchorPoint(.5, .5);
this._hotAreaNode.position = cc.Vec3.ZERO;
this._hotAreaNode.opacity = 0;
this._hotAreaNode.setParent(this.node);
this._hotAreaNode.setSiblingIndex(this.node.children.length - 1);
}
this.patchHotAreaHitTest();
};
e.prototype.patchHotAreaHitTest = function() {
if (this._hotAreaNode && cc.isValid(this._hotAreaNode)) {
var t = this._hotAreaNode, e = cc.Node.prototype, i = e._hitTest ? e._hitTest.bind(t) : null, r = this;
t._hitTest = function(t, e) {
return !r.isInButtonArea(t) && !!i && i(t, e);
};
}
};
e.prototype.registerTouchEvents = function() {
if (this._hotAreaNode) {
this._hotAreaNode.on(cc.Node.EventType.TOUCH_START, this.onHotAreaTouchStart, this);
this._hotAreaNode.on(cc.Node.EventType.TOUCH_MOVE, this.onHotAreaTouchMove, this);
this._hotAreaNode.on(cc.Node.EventType.TOUCH_END, this.onHotAreaTouchEnd, this);
this._hotAreaNode.on(cc.Node.EventType.TOUCH_CANCEL, this.onHotAreaTouchEnd, this);
} else console.warn("[GLFruitLongPressAcc] 注册触摸事件失败 - 热区节点为空");
};
e.prototype.unregisterTouchEvents = function() {
if (this._hotAreaNode) {
this._hotAreaNode.off(cc.Node.EventType.TOUCH_START, this.onHotAreaTouchStart, this);
this._hotAreaNode.off(cc.Node.EventType.TOUCH_MOVE, this.onHotAreaTouchMove, this);
this._hotAreaNode.off(cc.Node.EventType.TOUCH_END, this.onHotAreaTouchEnd, this);
this._hotAreaNode.off(cc.Node.EventType.TOUCH_CANCEL, this.onHotAreaTouchEnd, this);
this.clearLongPressTimer();
}
};
e.prototype.onHotAreaTouchStart = function(t) {
if (u.default.gameStateCtr.isPlaySatte()) if (l.default.getInstance().isOpen()) if (this.hasFullScreenAnimation()) this.forwardTouchEventToOriginal(t, "start"); else if (-1 === this._currentTouchId) {
var e = t.getLocation();
if (this.isInButtonArea(e)) this.forwardTouchEventToOriginal(t, "start"); else {
this._currentTouchId = t.getID();
this._longPressStartTime = Date.now();
this._isLongPressing = !1;
this.startLongPressTimer();
this.forwardTouchEventToOriginal(t, "start");
}
} else this.forwardTouchEventToOriginal(t, "start"); else this.forwardTouchEventToOriginal(t, "start");
};
e.prototype.onHotAreaTouchMove = function(t) {
if (u.default.gameStateCtr.isPlaySatte()) if (l.default.getInstance().isOpen()) {
if (this.canForwardTouch() && !this.hasFullScreenAnimation()) {
this.forwardTouchEventToOriginal(t, "move");
if (t.getID() === this._currentTouchId) {
t.getLocation();
this._longPressStartTime > 0 && !this._isLongPressing && Date.now() - this._longPressStartTime >= this._longPressThreshold && this.startAcceleration();
}
}
} else this.forwardTouchEventToOriginal(t, "move");
};
e.prototype.onHotAreaTouchEnd = function(t) {
if (u.default.gameStateCtr.isPlaySatte()) if (l.default.getInstance().isOpen()) {
this.forwardTouchEventToOriginal(t, "end");
t.getID() !== this._currentTouchId && -1 !== this._currentTouchId || this.cancelLongPress();
} else this.forwardTouchEventToOriginal(t, "end");
};
e.prototype.canForwardTouch = function() {
var t = u.default.gameStateCtr;
return !!t && !t.isFialState();
};
e.prototype.forwardTouchEventToOriginal = function(t, e) {
if (this.canForwardTouch()) {
if (u.default.mergerCtr) try {
switch (e) {
case "start":
u.default.mergerCtr.onPointerDown(t);
break;

case "move":
u.default.mergerCtr.onPointerMove(t);
break;

case "end":
u.default.mergerCtr.onPointerUp(t);
}
} catch (t) {
console.warn("[GLFruitLongPressAcc] 转发触摸事件失败 - 类型: " + e + "，错误:", t);
}
} else "end" === e && this.cancelLongPress();
};
e.prototype.startLongPressTimer = function() {
var t = this;
this.clearLongPressTimer();
this._longPressTimer = setTimeout(function() {
t._longPressStartTime > 0 && !t._isLongPressing && t.startAcceleration();
t._longPressTimer = null;
}, this._longPressThreshold);
};
e.prototype.clearLongPressTimer = function() {
if (null !== this._longPressTimer) {
clearTimeout(this._longPressTimer);
this._longPressTimer = null;
}
};
e.prototype.cancelLongPress = function() {
this.clearLongPressTimer();
this.resetAcceleration();
this._longPressStartTime = 0;
this._currentTouchId = -1;
this._lastDropTime = 0;
};
e.prototype.isInButtonArea = function(t) {
var e, i;
if (u.default.gameStateCtr.isBombState()) return !0;
var r = [ this._nodeShake, this._nodeBomb, this._nodeBack, this._nodeAgain ];
try {
for (var n = a(r), o = n.next(); !o.done; o = n.next()) {
var s = o.value;
if (s && cc.isValid(s) && s.activeInHierarchy && s.getBoundingBoxToWorld().contains(t)) return !0;
}
} catch (t) {
e = {
error: t
};
} finally {
try {
o && !o.done && (i = n.return) && i.call(n);
} finally {
if (e) throw e.error;
}
}
return !1;
};
e.prototype.startAcceleration = function() {
if (l.default.getInstance().isOpen() && this.canForwardTouch() && !this._isLongPressing && !this.hasFullScreenAnimation()) {
console.log("[GLFruitLongPressAcc] 开始加速 - 加速倍数: " + this._accelerationMultiplier);
this._isLongPressing = !0;
i._isLongPressingStatic = !0;
this.triggerFruitDrop();
this.applyAccelerationToFruits(!0);
}
};
e.prototype.triggerFruitDrop = function() {
if (l.default.getInstance().isOpen()) if (u.default.mergerCtr) {
var t = Date.now();
if (!(t - this._lastDropTime <= c.GLFruitDefine.FruitDropIterval)) {
var e = u.default.mergerCtr.getReadyDropFruit();
if (e && e.isReadyDropState() && !e.isActiveState()) {
this._lastDropTime = t;
u.default.mergerCtr.dropFruit();
}
}
} else console.warn("[GLFruitLongPressAcc] 触发水果下落失败 - mergerCtr为空");
};
e.prototype.resetAcceleration = function() {
if (this._isLongPressing) {
console.log("[GLFruitLongPressAcc] 重置加速 - 恢复水果正常速度");
this._isLongPressing = !1;
i._isLongPressingStatic = !1;
this.applyAccelerationToFruits(!1);
}
};
e.prototype.applyAccelerationToFruits = function(t) {
if (l.default.getInstance().isOpen() && u.default.mergerCtr) {
var e = u.default.mergerCtr.getReadyDropFruit();
if (e && !e.isActiveState() && e.isReadyDropState() && e.getItem() && e.getItem().getRigidbody()) {
var i = e.getItem().getRigidbody();
if (i && i.enabled) {
var r = i.linearVelocity;
if (r.y < 0) {
var n = c.GLFruitDefine.BaseDropVelocity, o = t ? n * this._accelerationMultiplier : n;
i.linearVelocity = cc.v2(r.x, o);
}
}
}
}
};
e.prototype.update = function() {
if (l.default.getInstance().isOpen()) {
if (!this.hasFullScreenAnimation()) {
this._longPressStartTime > 0 && !this._isLongPressing && Date.now() - this._longPressStartTime >= this._longPressThreshold && this.startAcceleration();
if (this.canForwardTouch()) {
if (this._isLongPressing) {
this.applyAccelerationToFruits(!0);
Date.now() - this._lastDropTime >= c.GLFruitDefine.FruitDropIterval && this.triggerFruitDrop();
}
} else (this._isLongPressing || this._longPressStartTime > 0) && this.cancelLongPress();
}
} else this._isLongPressing && this.cancelLongPress();
};
e.prototype.isFullScreenEffect = function(t) {
return i.FullScreenEffectNames.has(t);
};
e.prototype.hasFullScreenAnimation = function() {
var t, e;
if (u.default.gameStateCtr.getGameView().getInterAdsWaitView().node.active) return !0;
if (!this.playingEffectMap || 0 === this.playingEffectMap.size) return !1;
try {
for (var i = a(this.playingEffectMap.values()), r = i.next(); !r.done; r = i.next()) {
var n = r.value;
if (this.isFullScreenEffect(n)) {
console.log("[GLFruitLongPressAcc] 有全屏动画正在播放", n);
return !0;
}
}
} catch (e) {
t = {
error: e
};
} finally {
try {
r && !r.done && (e = i.return) && e.call(i);
} finally {
if (t) throw t.error;
}
}
return !1;
};
var i;
e._instance = null;
e._isLongPressingStatic = !1;
e.FullScreenEffectNames = new Set([ "WatermelonPanel", "BoardFullPanel", "juzhongdianzan" ]);
return i = o([ f ], e);
}(cc.Component));
i.default = h;
cc._RF.pop();
}, {
"../FruitLongPressAccCtrl": "FruitLongPressAccCtrl",
"../GLFruitApp": "GLFruitApp",
"../defines/GLFruitDefine": "GLFruitDefine",
"../tools/GLFruitTools": "GLFruitTools",
"./GLFruitPropButton": "GLFruitPropButton"
} ],
GLFruitMergeScoreFlyTraitCtrl: [ function(t, e, i) {
"use strict";
cc._RF.push(e, "0417duFUypMPZYRVB7Q1dec", "GLFruitMergeScoreFlyTraitCtrl");
Object.defineProperty(i, "__esModule", {
value: !0
});
var r = t("../FruitFeature"), n = t("../GLFruitApp"), o = t("../ctrs/GLFruitEffectCtr"), a = function() {
function t() {
this._pendingDefer = !1;
this._displayScore = 0;
this._scoreAccum = null;
}
t.getInstance = function() {
null == this._instance && (this._instance = new t());
return this._instance;
};
t.prototype.isOpen = function() {
return r.default.isOpen(r.FruitFeat.FruitMergeScoreFly);
};
t.prototype.markPendingDefer = function() {
this._pendingDefer = !0;
};
t.prototype.consumePendingDefer = function() {
if (this._pendingDefer) {
this._pendingDefer = !1;
return !0;
}
return !1;
};
t.prototype.resetDisplayScore = function(t) {
this._displayScore = t;
this.clearScoreAccum();
};
t.prototype.play = function(t, e, i) {
var r, a, u = this;
if (this.isOpen() && !(e <= 0)) {
var s = null === (r = n.default.gameStateCtr) || void 0 === r ? void 0 : r.getGameView(), l = null === (a = null == s ? void 0 : s.getLabelScore) || void 0 === a ? void 0 : a.call(s);
if (l && cc.isValid(l.node)) {
var c = o.default.NodeEffectUpperRoot || o.default.NodeEffectRoot || l.node.parent;
if (c && cc.isValid(c)) {
var d = this.createFloatScoreNode(l, e);
d.setParent(c);
d.setPosition(c.convertToNodeSpaceAR(t));
d.scale = 0;
d.opacity = 255;
var p = l.node.convertToWorldSpaceAR(cc.Vec3.ZERO), f = c.convertToNodeSpaceAR(p);
cc.tween(d).to(.1, {
scale: 1.2
}).to(.1, {
scale: 1
}).to(.36, {
position: f
}, {
easing: cc.easing.quadIn
}).call(function() {
cc.isValid(d) && d.destroy();
u.rollTopScore(i, l);
}).start();
} else this.applyScoreImmediate(i);
} else this.applyScoreImmediate(i);
}
};
t.prototype.createFloatScoreNode = function(t, e) {
var i = new cc.Node("MergeScoreFly"), r = i.addComponent(cc.Label);
r.string = "+" + e;
r.fontSize = t.fontSize || 55;
r.lineHeight = t.lineHeight || 80;
r.horizontalAlign = cc.Label.HorizontalAlign.CENTER;
r.verticalAlign = cc.Label.VerticalAlign.CENTER;
if (t.font) {
r.font = t.font;
r.useSystemFont = !1;
}
i.color = cc.color().fromHEX("#965856");
return i;
};
t.prototype.rollTopScore = function(t, e) {
var i = this;
if (e && cc.isValid(e.node)) if (this._scoreAccum) this._scoreAccum.updateToValue(t); else {
var r = this._displayScore, o = Math.min(.25, Math.max(.08, .01 * Math.abs(t - r)));
this._scoreAccum = n.default.dynamicAccumCtr.create(r, t, o, function(t) {
cc.isValid(e.node) && (e.string = "" + Math.floor(t));
}, function() {
var r = i._scoreAccum ? i._scoreAccum.toValue : t;
i._displayScore = r;
cc.isValid(e.node) && (e.string = "" + r);
i._scoreAccum = null;
});
var a = e.node;
cc.Tween.stopAllByTarget(a);
var u = a.scale;
cc.tween(a).to(.08, {
scale: 1.15 * u
}).to(.08, {
scale: u
}).start();
} else this._displayScore = t;
};
t.prototype.applyScoreImmediate = function(t) {
var e, i, r;
this._displayScore = t;
var o = null === (r = null === (i = null === (e = n.default.gameStateCtr) || void 0 === e ? void 0 : e.getGameView()) || void 0 === i ? void 0 : i.getLabelScore) || void 0 === r ? void 0 : r.call(i);
o && cc.isValid(o.node) && (o.string = "" + t);
};
t.prototype.clearScoreAccum = function() {
var t;
if (this._scoreAccum) {
null === (t = n.default.dynamicAccumCtr) || void 0 === t || t.removeByDynamicAccum(this._scoreAccum);
this._scoreAccum = null;
}
};
t.prototype.clear = function() {
this._pendingDefer = !1;
this.clearScoreAccum();
};
t._instance = null;
return t;
}();
i.default = a;
cc._RF.pop();
}, {
"../FruitFeature": "FruitFeature",
"../GLFruitApp": "GLFruitApp",
"../ctrs/GLFruitEffectCtr": "GLFruitEffectCtr"
} ],
GLFruitMergeStateNode: [ function(t, e, i) {
"use strict";
cc._RF.push(e, "0f3872tzKhOVqSS4GXaspG1", "GLFruitMergeStateNode");
var r, n = this && this.__extends || (r = function(t, e) {
return (r = Object.setPrototypeOf || {
__proto__: []
} instanceof Array && function(t, e) {
t.__proto__ = e;
} || function(t, e) {
for (var i in e) Object.prototype.hasOwnProperty.call(e, i) && (t[i] = e[i]);
})(t, e);
}, function(t, e) {
r(t, e);
function i() {
this.constructor = t;
}
t.prototype = null === e ? Object.create(e) : (i.prototype = e.prototype, new i());
});
Object.defineProperty(i, "__esModule", {
value: !0
});
var o = function(t) {
n(e, t);
function e() {
return null !== t && t.apply(this, arguments) || this;
}
e.prototype.onEnter = function() {};
e.prototype.onExit = function() {};
return e;
}(t("../../../core/fsmNode/GLFruitStateNode").default);
i.default = o;
cc._RF.pop();
}, {
"../../../core/fsmNode/GLFruitStateNode": "GLFruitStateNode"
} ],
GLFruitMergerCtr: [ function(t, e, i) {
"use strict";
cc._RF.push(e, "d3ab29drnNIsLRq3P3rCNi7", "GLFruitMergerCtr");
var r, n = this && this.__extends || (r = function(t, e) {
return (r = Object.setPrototypeOf || {
__proto__: []
} instanceof Array && function(t, e) {
t.__proto__ = e;
} || function(t, e) {
for (var i in e) Object.prototype.hasOwnProperty.call(e, i) && (t[i] = e[i]);
})(t, e);
}, function(t, e) {
r(t, e);
function i() {
this.constructor = t;
}
t.prototype = null === e ? Object.create(e) : (i.prototype = e.prototype, new i());
}), o = this && this.__values || function(t) {
var e = "function" == typeof Symbol && Symbol.iterator, i = e && t[e], r = 0;
if (i) return i.call(t);
if (t && "number" == typeof t.length) return {
next: function() {
t && r >= t.length && (t = void 0);
return {
value: t && t[r++],
done: !t
};
}
};
throw new TypeError(e ? "Object is not iterable." : "Symbol.iterator is not defined.");
};
Object.defineProperty(i, "__esModule", {
value: !0
});
var a = t("../../core/FruitEventCenter"), u = t("../../core/GLFruitModelBase"), s = t("../defines/GLFruitDefine"), l = t("../experiment/func/GLFruitRandomWeight/GLFruitRandomWeightCtr"), c = t("../FruitFeature"), d = t("./FruitAcceleratePreviousDropCtrl"), p = t("../GLFruitApp"), f = t("./FruitRelaxedComboBreakCtrl"), h = t("../GLFruitRoundLogEventCtr"), g = t("../play/GLFruit"), F = t("./FruitSmallToBigReplacementCtrl"), y = t("../tools/GLFruitTools"), v = t("../traits/GLFruitDragRateConfigCtrl"), m = t("../traits/GLFruitOnlyDragCanMoveTraitCtrl"), _ = t("../traits/GLFruitRepeatFruitAwardTraitCtrl"), L = t("../traits/GLFruitAddShakeItemOnMergeXiguaTraitCtrl"), C = t("../traits/GLFruitAddFruitChoiceListTraitCtrl"), S = t("../traits/GLFruitHaveFruitStartTraitCtrl"), G = t("./FruitComboSmallFruitExplodeCtrl"), w = t("../traits/GLFruitTwoFruitOnceTraitCtrl"), b = t("../traits/GLFruitNotDropLittleFruitWhenXiGuaOnShowCtrl"), P = t("../traits/GLFruitChangeScaleTraitCtrl"), D = t("../traits/GLFruitGongzhengTraitCtrl"), I = t("./FruitLongPressQuickStackCtrl"), N = t("../traits/GLFruitDeadCheckOptimizeTraitCtrl"), T = t("./FruitBigFruitMergeShakeCtrl"), O = t("./FruitMergeShakeCtrl"), A = t("../traits/GLFruitMergeScoreFlyTraitCtrl"), R = t("./FruitNoDropIntervalCtrl"), E = t("../ui/GLFruitLongPressAcc"), x = t("../FruitLongPressAccCtrl"), M = t("./FruitShakeRandomDirectionCtrl"), k = t("./FruitWannengFruitCtrl"), B = function(t) {
n(e, t);
function e() {
var e = null !== t && t.apply(this, arguments) || this;
e._fruits = [];
e._nodeFruitRoot = null;
e._spawnFruitPositon = cc.Vec3.ZERO;
e._spawnDropPositon = cc.Vec3.ZERO;
e._nextFruit = null;
e._readyDropFruit = null;
e._currentDroppingFruit = null;
e._lastDropTime = 0;
e._goldWatermelonFruit = null;
e._turnCount = 0;
e._turnMergerCountMap = {};
e._totalAnimationCount = 0;
e._isPause = !1;
e._stopAngularVelocityTimer = null;
e._touchStartTime = 0;
e._touchStartPos = null;
e._isSwipeUp = !1;
e._isCaneShowWatermelonPanel = !1;
return e;
}
e.prototype.init = function() {
var t = this;
if (this._stopAngularVelocityTimer) {
p.default.timeCtr.removeByTimer(this._stopAngularVelocityTimer);
this._stopAngularVelocityTimer = null;
}
M.default.getInstance().reset();
this._stopAngularVelocityTimer = p.default.timeCtr.add(1, function() {
var e;
if (!p.default.gameStateCtr.isShakeSatte()) for (var i = t._fruits.length - 1; i >= 0; i--) {
var r = null === (e = t._fruits[i]) || void 0 === e ? void 0 : e.getItem();
r && cc.isValid(r) && r.checkRotation();
}
});
};
e.prototype.getNodeFruitRoot = function() {
return this._nodeFruitRoot;
};
e.prototype.getNextFruit = function() {
if (C.default.getInstance().isOpen()) {
var t = C.default.getInstance().getNextFruits();
return null == t || 0 == t.length ? null : t[0];
}
return this._nextFruit;
};
e.prototype.getCurrentDroppingFruit = function() {
return this._currentDroppingFruit;
};
e.prototype.clearCurrentDroppingFruit = function() {
c.isOpenVibrationProjectFruit() && (this._currentDroppingFruit = null);
};
e.prototype.getReadyDropFruit = function() {
return this._readyDropFruit;
};
e.prototype.getTurnCount = function() {
return this._turnCount;
};
e.prototype.getTurnMergerCountMap = function() {
return this._turnMergerCountMap;
};
e.prototype.resetTurnCount = function() {
this._turnCount = 0;
};
e.prototype.getDropMaxFruitId = function() {
var t, e, i, r, n = l.default.isOpen() && l.default.ins().isLoaded() ? 5 : 4, o = null !== (r = null === (i = null === (e = null === (t = p.default.user) || void 0 === t ? void 0 : t.getDataVo()) || void 0 === e ? void 0 : e.roundDataVo) || void 0 === i ? void 0 : i.hasSynthesizedWatermelon) && void 0 !== r && r, a = c.default.isOpen(c.FruitFeat.FruitWatermelonAddFruit) && o ? 1 : 0, u = n + a;
console.log("[FruitWatermelonAddFruit] getDropMaxFruitId base=" + n + " expand=" + a + " maxId=" + u);
return u;
};
e.prototype.randomId = function() {
var t = this.getDropMaxFruitId() + 1;
console.log("[FruitWatermelonAddFruit][测试] randomId exclusiveMax=" + t);
return b.default.getInstance().isOpen() && b.default.getInstance().canNotDropLittleFruit() ? y.default.getRandomInt(b.default.getInstance().getLimitFruitId() + 1, t) : y.default.getRandomInt(1, t);
};
e.prototype.getFruitId = function(t) {
void 0 === t && (t = !1);
if (c.default.isOpen(c.FruitFeat.FruitWannengFruit)) {
var e = k.default.getInstance().tryGetSpawnFruitId();
if (null != e) return e;
}
var i;
i = -1 != p.default.guideCtr.getGuideFixFruitId() ? p.default.guideCtr.getGuideFixFruitId() : _.default.getInstance().isOpen() && _.default.getInstance().isInEffectTime() && _.default.getInstance().getEffectFruitId() > 0 ? _.default.getInstance().getEffectFruitId() : l.default.isOpen() && l.default.ins().isLoaded() ? l.default.ins().getFruitId() : this.randomId();
t || (i = F.default.ins().replaceFruitIdIfNeeded(i, this._fruits));
return i;
};
e.prototype.getGoldWatermelonFruit = function() {
return this._goldWatermelonFruit;
};
e.prototype.setGoldWatermelonFruit = function(t) {
this._goldWatermelonFruit = t;
};
e.prototype.initFruits = function() {
G.default.getInstance().reset();
this.resetTurnCount();
w.default.getInstance().isOpen() && w.default.getInstance().onRoundStart();
if (C.default.getInstance().isOpen()) {
var t = [ this.getFruitId(), this.getFruitId(), this.getFruitId(), this.getFruitId(), this.getFruitId(), this.getFruitId() ];
this.initNextAndReadyDropFruitNew(t, this.getFruitId(!0));
} else this.initNextAndReadyDropFruit(this.getFruitId(), this.getFruitId(!0));
S.default.getInstance().isOpen() && S.default.getInstance().initStartFruits();
D.default.getInstance().isOpen() && D.default.getInstance().checkAndUpdateResonance();
M.default.getInstance().reset();
};
e.prototype.initFruitsWithUserRecord = function() {
var t, e, i, r, n;
M.default.getInstance().reset();
G.default.getInstance().reset();
var a = y.default.ParsePlayCardRecordContent(p.default.user.getDataVo().recordPlayData);
if (a) {
this._turnCount = a.turnCount || 0;
var u = a.fruits;
if (u && Array.isArray(u)) try {
for (var s = o(u), l = s.next(); !l.done; l = s.next()) {
var c = l.value;
if (12 != c.id) {
var d = this.spawnFruit(c.id), f = d.getItem();
if (cc.isValid(f) && cc.isValid(f.node)) {
d.position = new cc.Vec3(c.x, c.y);
f.node.angle = c.angle;
d.setRound(null !== (n = c.round) && void 0 !== n ? n : 0);
this.addFruit(d);
}
}
}
} catch (e) {
t = {
error: e
};
} finally {
try {
l && !l.done && (e = s.return) && e.call(s);
} finally {
if (t) throw t.error;
}
}
this._fruits.sort(function(t, e) {
return t.position.y - e.position.y;
});
try {
for (var h = o(this._fruits), g = h.next(); !g.done; g = h.next()) {
var F = g.value;
F && F.getItem() && F.getItem().node && cc.isValid(F.getItem().node) && F.runActiveState();
}
} catch (t) {
i = {
error: t
};
} finally {
try {
g && !g.done && (r = h.return) && r.call(h);
} finally {
if (i) throw i.error;
}
}
if (w.default.getInstance().isOpen() && w.default.getInstance().tryRestorePendingSecondDropFromRecord(a, p.default.user.getDataVo().recordPlayData)) ; else if (C.default.getInstance().isOpen()) {
var v = a.nextIds;
null == v && (v = [ a.nextId ]);
for (var m = v.length; m < C.QUEUE_MAX_LENGTH; m++) v.push(this.getFruitId());
this.initNextAndReadyDropFruitNew(v, a.readyDropId);
} else this.initNextAndReadyDropFruit(a.nextId, a.readyDropId);
D.default.getInstance().isOpen() && D.default.getInstance().restoreResonance();
} else {
this.resetTurnCount();
w.default.getInstance().isOpen() && w.default.getInstance().onRoundStart();
}
};
e.prototype.initNextAndReadyDropFruit = function(t, e) {
this._nextFruit = this.spawnFruit(t);
this._readyDropFruit = this.spawnFruit(e);
if (this._nextFruit) {
this._nextFruit.position = this._spawnFruitPositon;
var i = this._nextFruit.getItem();
i && i.node && cc.isValid(i.node) && (i.node.scale = this._nextFruit.getSpawnScale());
}
if (this._readyDropFruit) {
this._readyDropFruit.position = this._spawnDropPositon;
this._readyDropFruit.runReadyDropState();
if (P.default.getInstance().isOpen()) {
var r = this._readyDropFruit.getItem();
r && r.node && cc.isValid(r.node) && (r.node.scale = s.GLFruitDefine.FruitScale * P.default.getInstance().getFruitScaleRate(this._readyDropFruit.getId()));
}
a.FruitEventCenter.dispatchEvent(a.FruitEventType.ShowSameFruit, e);
}
};
e.prototype.initNextAndReadyDropFruitNew = function(t, e) {
if (C.default.getInstance().isOpen()) {
for (var i = [], r = 0; r < t.length; r++) {
var n = t[r], o = this.spawnFruit(n), a = o.getItem();
if (cc.isValid(a) && cc.isValid(a.node)) {
o.position = C.default.getInstance().getNextFruitPositionByIndex(r);
a.node.scale = o.getSpawnScale();
i.push(o);
}
}
C.default.getInstance().setNextFruits(i);
this._readyDropFruit = this.spawnFruit(e);
var u = this._readyDropFruit.getItem();
if (cc.isValid(u) && cc.isValid(u.node)) {
this._readyDropFruit.position = this._spawnDropPositon;
this._readyDropFruit.runReadyDropState();
P.default.getInstance().isOpen() && (u.node.scale = s.GLFruitDefine.FruitScale * P.default.getInstance().getFruitScaleRate(this._readyDropFruit.getId()));
}
} else this.initNextAndReadyDropFruit(t[0], e);
};
e.prototype.initTwoFruitNextFruitOnly = function(t) {
if (w.default.getInstance().isOpen()) {
this._nextFruit = this.spawnFruit(t);
if (this._nextFruit) {
this._nextFruit.position = this._spawnFruitPositon;
var e = this._nextFruit.getItem();
e && e.node && cc.isValid(e.node) && (e.node.scale = this._nextFruit.getSpawnScale());
}
}
};
e.prototype.initTwoFruitNextFruitListOnly = function(t) {
if (w.default.getInstance().isOpen()) {
for (var e = [], i = 0; i < t.length; i++) {
var r = t[i], n = this.spawnFruit(r), o = n.getItem();
if (cc.isValid(o) && cc.isValid(o.node)) {
n.position = C.default.getInstance().getNextFruitPositionByIndex(i);
o.node.scale = n.getSpawnScale();
e.push(n);
}
}
C.default.getInstance().setNextFruits(e);
}
};
e.prototype.initReadyDropFruit = function(t) {
void 0 === t && (t = -1);
if (!this._readyDropFruit) {
-1 == t && (t = this.getFruitId());
this._readyDropFruit = this.spawnFruit(t);
this._readyDropFruit.position = this._spawnDropPositon;
this._readyDropFruit.runReadyDropState();
P.default.getInstance().isOpen() && (this._readyDropFruit.getItem().node.scale = s.GLFruitDefine.FruitScale * P.default.getInstance().getFruitScaleRate(this._readyDropFruit.getId()));
a.FruitEventCenter.dispatchEvent(a.FruitEventType.ShowSameFruit, t);
D.default.getInstance().isOpen() && D.default.getInstance().checkAndUpdateResonance();
}
};
e.prototype.setNodeFruitRoot = function(t) {
this._nodeFruitRoot = t;
};
e.prototype.setSpwawnFruitPositon = function(t) {
this._spawnFruitPositon = t;
};
e.prototype.setSpwawnDropPositon = function(t) {
this._spawnDropPositon = t;
};
e.prototype.getSpwawnDropPositon = function() {
return this._spawnDropPositon;
};
e.prototype.getSpawnDropPositon = function(t) {
return t.limitPosition(this._spawnDropPositon);
};
e.prototype.onMerger = function(t, e) {
var i, r = window.GL;
if (!((null === (i = null == r ? void 0 : r.gamelobby) || void 0 === i ? void 0 : i.isChapterFusionMode()) && p.default.gameStateCtr.isWinState())) {
var n = t.getItem(), o = e.getItem();
if (n && o && n.node && o.node && cc.isValid(n.node) && cc.isValid(o.node)) {
var a = y.default.GetCenterPosition(n.node, o.node), u = t.getNextId();
t.runMergeState();
e.runMergeState();
var s = 1;
if (D.default.getInstance().isOpen()) {
var l = D.default.getInstance().getScoreMultiplier(t), c = D.default.getInstance().getScoreMultiplier(e);
if ((s = Math.max(l, c)) > 1) {
var d = D.default.getInstance().isInResonance(t), f = D.default.getInstance().isInResonance(e);
console.log("[FruitGongzheng] 共振合成加分，水果1(ID:" + t.getId() + ")共振:" + d + ", 水果2(ID:" + e.getId() + ")共振:" + f + ", 分数倍数:" + s);
}
}
this.onNewMergerFruit(u, a, s);
L.default.getInstance().isOpen() && L.default.getInstance().onMerge(u);
this.removeFruit(t);
this.removeFruit(e);
_.default.getInstance().isOpen() && (p.default.guideCtr.isBeginner() || _.default.getInstance().onMerge(u));
b.default.getInstance().isOpen() && b.default.getInstance().afterMergeCheck();
D.default.getInstance().isOpen() && D.default.getInstance().checkAndUpdateResonance();
p.default.user.saveData();
p.default.failZoneCtr.addExtraTime();
}
}
};
e.prototype.onPointerDown = function(t) {
if (!p.default.gameStateCtr.isFialState()) {
var e = t.getLocation();
v.default.getInstance().isOpen() && v.default.getInstance().setTouchBeganPos(e);
if (m.default.getInstance().isOpen()) {
var i = this._nodeFruitRoot.convertToNodeSpaceAR(e).x, r = this.getSpwawnDropPositon().x, n = Math.abs(i - r);
m.default.getInstance().setCanMove(n);
} else {
this.setSpawnDropPositonX(this._nodeFruitRoot.convertToNodeSpaceAR(e).x);
this.updateReadyDropFruit();
}
p.default.guideCtr.hideGuide();
if (c.default.isOpen(c.FruitFeat.FruitLongPressCancelDrop)) {
this._touchStartTime = Date.now();
this._touchStartPos = e.clone();
this._isSwipeUp = !1;
}
I.default.getInstance().isOpen() && I.default.getInstance().onPointerDown(e, this.dropFruit.bind(this));
}
};
e.prototype.onPointerUp = function() {
if (I.default.getInstance().isOpen()) {
I.default.getInstance().onPointerUp(this.dropFruit.bind(this));
this._touchStartTime = 0;
this._touchStartPos = null;
this._isSwipeUp = !1;
} else {
if (c.default.isOpen(c.FruitFeat.FruitLongPressCancelDrop) && this._touchStartTime > 0 && Date.now() - this._touchStartTime > 1e3 && this._isSwipeUp) {
this._touchStartTime = 0;
this._touchStartPos = null;
this._isSwipeUp = !1;
return;
}
this.dropFruit();
if (c.default.isOpen(c.FruitFeat.FruitLongPressCancelDrop)) {
this._touchStartTime = 0;
this._touchStartPos = null;
this._isSwipeUp = !1;
}
}
};
e.prototype.onPointerMove = function(t) {
if (!p.default.gameStateCtr.isFialState()) {
var e = t.getLocation();
if (!m.default.getInstance().isOpen() || m.default.getInstance().isCanMove()) {
var i = this._nodeFruitRoot.convertToNodeSpaceAR(e).x;
v.default.getInstance().isOpen() && (i += v.default.getInstance().getDeltaX(e));
this.setSpawnDropPositonX(i);
this.updateReadyDropFruit();
I.default.getInstance().isOpen() && I.default.getInstance().onPointerMove(e);
c.default.isOpen(c.FruitFeat.FruitLongPressCancelDrop) && this._touchStartPos && e.y - this._touchStartPos.y > 0 && (this._isSwipeUp = !0);
}
}
};
e.prototype.spawnFruitAndRunSpawnState = function(t) {
var e = this.spawnFruit(t);
C.default.getInstance().isOpen() ? e.position = C.default.getInstance().getNextFruitPositionByIndex(C.QUEUE_MAX_LENGTH - 1) : e.position = this._spawnFruitPositon;
e.runSpawnState();
C.default.getInstance().isOpen() ? C.default.getInstance().pushNewNextFruit(e) : this._nextFruit = e;
};
e.prototype.spawnFruit = function(t) {
var e = g.default.Create(t);
if (!cc.isValid(e.getItem())) return e;
e.getItem().node.setParent(this._nodeFruitRoot);
var i = e.getItem().node.getChildByName("lose_hint_fx");
i && p.default.effectCtr.recycleEffect(i, i.name);
return e;
};
e.prototype.spawnFruitWithPhysics = function(t) {
g.default.CreateWithPhysics(t).getItem().node.setParent(this._nodeFruitRoot);
};
e.prototype.setSpawnDropPositonX = function(t, e) {
void 0 === e && (e = !0);
e && !p.default.guideCtr.isCanMove() || (this._spawnDropPositon.x = t);
};
e.prototype.addFruit = function(t) {
var i, r = window.GL;
if (!((null === (i = null == r ? void 0 : r.gamelobby) || void 0 === i ? void 0 : i.isChapterFusionMode()) && p.default.gameStateCtr.isWinState() || p.default.gameStateCtr.isFialState())) {
var n = t.getItem();
if (n && n.node && cc.isValid(n.node)) {
t.getRound() < 0 && t.setRound(this._turnCount);
this._fruits.push(t);
n.node.setSiblingIndex(this.calcFruitSiblingIndex(t.getId()));
p.default.failZoneCtr.addFruit(t);
this.emit(e.Event.FruitNumberChanged);
}
}
};
e.prototype.addFruitForTrait = function(t) {
this.addFruit(t);
};
e.prototype.calcFruitSiblingIndex = function(t) {
return this._fruits.filter(function(e) {
return e.getId() > t;
}).length + 1;
};
e.prototype.onSpawnFruitFinished = function() {
C.default.getInstance().playQueueForwardAnimation();
};
e.prototype.onNewMergerFruit = function(t, e, i) {
var r, n, o, u, s = this;
void 0 === i && (i = 1);
var l = window.GL;
if (!((null === (r = null == l ? void 0 : l.gamelobby) || void 0 === r ? void 0 : r.isChapterFusionMode()) && p.default.gameStateCtr.isWinState() || p.default.gameStateCtr.isFialState())) {
var d = this.spawnFruit(t), f = d.getItem();
if (f && f.node && cc.isValid(f.node)) {
d.position = this._nodeFruitRoot.convertToNodeSpaceAR(e);
d.runActiveState();
var g = 1;
if (f && f.node && cc.isValid(f.node)) {
g = f.node.scale;
f.node.scale = .8 * g;
}
this.addFruit(d);
if (p.default.gameStateCtr.isBombState()) {
var F = d.getItem();
F && F.showBombEffect();
}
p.default.comboCtr.addCombo(e);
this.recordTurnComboCount();
3 === this._turnMergerCountMap[this._turnCount] && c.tryShakeAmplitudeVibrationFruit("hechengThreeShake");
G.default.getInstance().tryExplodeSmallFruitsOnCombo(this._turnMergerCountMap[this._turnCount] || 0, this._nodeFruitRoot, this._fruits, function(t) {
return s.removeFruit(t);
});
f && f.node && cc.isValid(f.node) && cc.tween(f.node).to(.1, {
scale: g
}).start();
p.default.mergerWellDoneCtr.tryShowWellDoneEffect(t);
p.default.effectCtr.playMergeNewEffect(e, y.default.GetFruitMergerEffectNameById(t));
t >= 11 && (p.default.user.getDataVo().roundDataVo.hasSynthesizedWatermelon = !0);
c.default.isOpen(c.FruitFeat.FruitAutoShakeOnWatermelon) && d.isWatermelon() && p.default.propCtr.autoShakeWithoutCost();
d.isWatermelon() && 0 == p.default.effectCtr.getShowWatermelonPanelTimes() && (p.default.gameStateCtr.isShakeSatte() ? this._isCaneShowWatermelonPanel = !0 : p.default.effectCtr.playWatermelonPanelEffect(cc.Vec3.ZERO));
if (d.isGoldWatermelon()) {
this.setGoldWatermelonFruit(d);
p.default.gameStateCtr.isShakeSatte() || p.default.gameStateCtr.runGoldWatermelonState();
}
var v = p.default.user.getDataVo().maxFruitLevel < d.getId();
console.log("VibrationProjectFruitGp xltest 最大水果等级：", p.default.user.getDataVo().maxFruitLevel);
console.log("VibrationProjectFruitGp xltest 新水果等级：", d.getId());
console.log("VibrationProjectFruitGp xltest isNewLevel：", v);
var m = p.default.user.getDataVo().roundDataVo;
m && (m.roundMaxFruitLevel = Math.max(m.roundMaxFruitLevel || 0, d.getId()));
var _ = Math.floor(y.default.CalcScoreNormal(d.getId(), v) * i), L = A.default.getInstance().isOpen() && _ > 0;
L && A.default.getInstance().markPendingDefer();
p.default.user.addScore(_);
(null === (n = null === GL || void 0 === GL ? void 0 : GL.Game) || void 0 === n ? void 0 : n.isTraitActive("VibrationProjectFruitGp")) && cc.sys.os != cc.sys.OS_IOS && v && (p.default.user.getDataVo().maxFruitLevel = d.getId());
if (c.isOpenVibrationProjectFruit()) {
c.tryShakeVibrationFruit("fruitHecheng");
v && c.tryShakeVibrationFruit("hechengNewFruit");
d.getId() > 6 && c.tryShakeAmplitudeVibrationFruit("hechengJuziShake");
d.getId() > 9 && c.tryShakeAmplitudeVibrationFruit("hechengYeziShake");
d.isWatermelon() && c.tryShakeAmplitudeVibrationFruit("hechengXiguaShake");
}
L && A.default.getInstance().play(e, _, p.default.user.getScore());
p.default.guideCtr.onMerger();
p.default.roundCtr.onMerger();
this.playMergerSound(t);
p.default.adCtr.midMergerFruit();
h.default.getInstance().forwardStep();
a.FruitEventCenter.dispatchEvent(a.FruitEventType.ShowSameFruitByMerge, t);
(null === (o = null == l ? void 0 : l.gamelobby) || void 0 === o ? void 0 : o.isChapterFusionMode()) && p.default.user.getScore() >= ((null === (u = l.gamelobby) || void 0 === u ? void 0 : u.getStorageValue("ChapterMiniGameFusionTarget", 0)) || 0) && p.default.gameStateCtr.runWinState();
T.default.getInstance().tryShakeOnBigFruitMerge(t);
c.default.isOpen(c.FruitFeat.FruitWannengFruit) && O.default.getInstance().tryShakeOnMerge(t);
} else console.warn("[GLFruitMergerCtr] onNewMergerFruit: no pool node for merged fruit id=" + t);
}
};
e.prototype.onHitBottomWall = function(t) {
p.default.guideCtr.onHitBottomWall(t);
};
e.prototype.dropFruit = function() {
if (!x.default.getInstance().isOpen() || !E.default.getInstance().hasFullScreenAnimation()) if (w.default.getInstance().isOpen() && w.default.getInstance().isWaitingSecondDrop()) console.log("【GLFruitTwoFruitOnce】正在等待第二个水果下落，禁止手动操作"); else if (p.default.gameStateCtr.isPlaySatte() && !p.default.gameStateCtr.getGameView().getInterAdsWaitView().node.active) {
var t = Date.now();
s.GLFruitDefine.FruitDropIterval = R.default.ins().changeInterval(s.GLFruitDefine.FruitDropIterval);
var e = d.default.getInstance(), i = e.getDropInterval(s.GLFruitDefine.FruitDropIterval, s.GLFruitDefine.FruitDropIterval2);
if (!I.default.getInstance().isQuickStacking() && t - this._lastDropTime <= i) console.log("大西瓜限制连续点击过快 Click throttled = " + i); else {
e.onBeforeDrop();
N.default.getInstance().isOpen() && N.default.getInstance().setUseShakeItemFlag(!1);
if (null != this._readyDropFruit) {
var r = this._readyDropFruit.getItem();
if (!r || !r.node || !cc.isValid(r.node)) {
console.error("GLFruitMergerCtr.dropFruit: _readyDropFruit item or node is null");
this._readyDropFruit = null;
return;
}
this._turnCount++;
var n = w.default.getInstance(), o = n.isOpen() && n.canDoubleDrop();
console.log("【GLFruitTwoFruitOnce】dropFruit - isOpen: " + n.isOpen() + ", canDoubleDrop: " + n.canDoubleDrop() + ", isTwoFruitDropping: " + o);
var u = null;
if (o) {
u = this._readyDropFruit.position.clone();
n.setSecondFruitPending(!0);
console.log("【GLFruitTwoFruitOnce】已设置 setSecondFruitPending(true)");
}
p.default.adCtr.midDropFruit();
p.default.adCtr.resetAutoShowTimer();
c.default.isOpen(c.FruitFeat.FruitDisableClickDropSound) || p.default.audioMgr.playEffect(s.GLFruitAudioDefine.fruit_fall);
p.default.user.getDataVo().stepMoves++;
this.tryClearCombo();
r.node.scale = s.GLFruitDefine.FruitScale;
this._readyDropFruit.runActiveState();
a.FruitEventCenter.dispatchEvent(a.FruitEventType.FruitSpecialColliderRuleStart, this._readyDropFruit);
c.default.isOpen(c.FruitFeat.FruitPreviewPlace) && p.default.placePreviewCtr && p.default.placePreviewCtr.hidePreview();
this.addFruit(this._readyDropFruit);
a.FruitEventCenter.dispatchEvent(a.FruitEventType.HideSameFruit);
c.isOpenVibrationProjectFruit() && (this._currentDroppingFruit = this._readyDropFruit);
e.recordCurrentDroppingFruit(this._readyDropFruit);
this._readyDropFruit = null;
h.default.getInstance().step();
if (o) {
n.triggerDoubleDrop(u);
this._lastDropTime = t;
return;
}
if (C.default.getInstance().isOpen()) {
if (p.default.guideCtr.isBeginner()) return;
var l = C.default.getInstance().popNextFruit();
if (l) {
this._readyDropFruit = l;
this._readyDropFruit.runPreReadyDropState();
this.spawnFruitAndRunSpawnState(this.getFruitId());
a.FruitEventCenter.dispatchEvent(a.FruitEventType.ShowSameFruit, this._readyDropFruit.getId());
}
} else if (this._nextFruit) {
if (p.default.guideCtr.isBeginner()) return;
this._readyDropFruit = this._nextFruit;
this._readyDropFruit.runPreReadyDropState();
this.spawnFruitAndRunSpawnState(this.getFruitId());
a.FruitEventCenter.dispatchEvent(a.FruitEventType.ShowSameFruit, this._readyDropFruit.getId());
p.default.gameStateCtr.getGameView().showArrowTweent();
}
this._lastDropTime = t;
D.default.getInstance().isOpen() && D.default.getInstance().checkAndUpdateResonance();
}
}
}
};
e.prototype.showDropLine = function(t) {
this.emit(e.Event.ShowDropLine, t);
};
e.prototype.hideDropLine = function() {
this.emit(e.Event.HideDropLine);
};
e.prototype.updateDropLinePosition = function(t) {
this.emit(e.Event.UpdateDropLinePosition, t);
};
e.prototype.removeFruit = function(t) {
var i = this._fruits.indexOf(t);
if (-1 != i) {
D.default.getInstance().isOpen() && D.default.getInstance().removeResonanceFruit(t);
c.isOpenVibrationProjectFruit() && this._currentDroppingFruit === t && (this._currentDroppingFruit = null);
p.default.failZoneCtr.removeFruit(this._fruits[i]);
this._fruits.splice(i, 1);
t.clear();
this.emit(e.Event.FruitNumberChanged);
}
};
e.prototype.recordTurnComboCount = function() {
var t = this._turnMergerCountMap[this._turnCount];
this._turnMergerCountMap[this._turnCount] = t > 0 ? t + 1 : 1;
f.default.getInstance().onMergeRecorded();
};
e.prototype.tryClearCombo = function() {
var t = f.default.getInstance();
if (t.isOpen()) t.afterDropTryBreakCombo(this._turnCount, this._turnMergerCountMap) && p.default.comboCtr.clearCombo(); else if (!this._turnMergerCountMap[this._turnCount - 1]) {
this._turnMergerCountMap = {};
p.default.comboCtr.clearCombo();
}
};
e.prototype.increaseTurnCount = function() {
this._turnCount++;
};
e.prototype.updateLastDropTime = function() {
this._lastDropTime = Date.now();
};
e.prototype.setReadyDropFruit = function(t) {
this._readyDropFruit = t;
};
e.prototype.getPlayCardRecordContent = function() {
var t, e;
if (p.default.guideCtr.isBeginner()) return "";
var i = "";
try {
for (var r = o(this._fruits), n = r.next(); !n.done; n = r.next()) {
var a = n.value;
if (a) {
var u = a.getItem();
if (!cc.isValid(u) || !cc.isValid(u.node)) return null;
i += a.getId() + "," + y.default.RoundToTwo(u.node.x) + "," + y.default.RoundToTwo(u.node.y) + "," + y.default.RoundToTwo(u.node.angle) + "," + a.getRound() + ";";
}
}
} catch (e) {
t = {
error: e
};
} finally {
try {
n && !n.done && (e = r.return) && e.call(r);
} finally {
if (t) throw t.error;
}
}
i.length > 0 && (i = i.slice(0, -1));
var s = 2, l = 2;
this._readyDropFruit && (s = this._readyDropFruit.getId());
if (C.default.getInstance().isOpen()) {
for (var c = C.default.getInstance().getNextFruits(), d = [], f = 0; f < c.length; f++) d.push(c[f].getId());
var h = {
readyDropId: s,
nextId: l,
nextIds: d,
content: i,
turnCount: this._turnCount
};
w.default.getInstance().isOpen() && w.default.getInstance().appendPendingSecondDropRecord(h);
return JSON.stringify(h);
}
this._nextFruit && (l = this._nextFruit.getId());
var g = {
readyDropId: s,
nextId: l,
content: i,
turnCount: this._turnCount
};
w.default.getInstance().isOpen() && w.default.getInstance().appendPendingSecondDropRecord(g);
return JSON.stringify(g);
};
e.prototype.getFruits = function() {
return this._fruits;
};
e.prototype.removePhysicsComponents = function() {
var t, e;
try {
for (var i = o(this._fruits), r = i.next(); !r.done; r = i.next()) r.value.getItem().removePhysicsComponents();
} catch (e) {
t = {
error: e
};
} finally {
try {
r && !r.done && (e = i.return) && e.call(i);
} finally {
if (t) throw t.error;
}
}
};
e.prototype.updateReadyDropFruit = function() {
if (this._readyDropFruit && this._readyDropFruit.isReadyDropState()) {
this._readyDropFruit.position = this.getSpawnDropPositon(this._readyDropFruit);
p.default.mergerCtr.updateDropLinePosition(this._readyDropFruit.position);
w.default.getInstance().isOpen() && w.default.getInstance().isTwoFruitRound() && w.default.getInstance().updateSecondFruitPosition(this._readyDropFruit);
D.default.getInstance().isOpen() && D.default.getInstance().checkAndUpdateResonance();
c.default.isOpen(c.FruitFeat.FruitPreviewPlace) && p.default.placePreviewCtr && p.default.placePreviewCtr.updatePreviewPosition(this._readyDropFruit);
}
};
Object.defineProperty(e.prototype, "isBombState", {
set: function(t) {
var e, i, r, n;
this.isOperationFruits = !t;
if (t) try {
for (var a = o(this._fruits), u = a.next(); !u.done; u = a.next()) u.value.getItem().showBombEffect();
} catch (t) {
e = {
error: t
};
} finally {
try {
u && !u.done && (i = a.return) && i.call(a);
} finally {
if (e) throw e.error;
}
} else try {
for (var s = o(this._fruits), l = s.next(); !l.done; l = s.next()) l.value.getItem().hideBombEffect();
} catch (t) {
r = {
error: t
};
} finally {
try {
l && !l.done && (n = s.return) && n.call(s);
} finally {
if (r) throw r.error;
}
}
},
enumerable: !1,
configurable: !0
});
Object.defineProperty(e.prototype, "isOperationFruits", {
set: function(t) {
C.default.getInstance().isOpen() ? C.default.getInstance().showOrHideNextFruits(t) : this._nextFruit && cc.isValid(this._nextFruit.getItem()) && (this._nextFruit.getItem().node.active = t);
this._readyDropFruit && cc.isValid(this._readyDropFruit.getItem()) && (this._readyDropFruit.getItem().node.active = t);
w.default.getInstance().isOpen() && w.default.getInstance().showOrHideSecondFruit(t);
},
enumerable: !1,
configurable: !0
});
e.prototype.clear = function() {
var t, e;
if (this._stopAngularVelocityTimer) {
p.default.timeCtr.removeByTimer(this._stopAngularVelocityTimer);
this._stopAngularVelocityTimer = null;
}
c.default.isOpen(c.FruitFeat.FruitPreviewPlace) && p.default.placePreviewCtr && p.default.placePreviewCtr.hidePreview();
I.default.getInstance().clear();
p.default.failZoneCtr.clear();
try {
for (var i = o(this._fruits), r = i.next(); !r.done; r = i.next()) r.value.clear();
} catch (e) {
t = {
error: e
};
} finally {
try {
r && !r.done && (e = i.return) && e.call(i);
} finally {
if (t) throw t.error;
}
}
if (this._nextFruit) {
this._nextFruit.clear();
this._nextFruit = null;
}
if (this._readyDropFruit) {
this._readyDropFruit.clear();
this._readyDropFruit = null;
}
C.default.getInstance().isOpen() && C.default.getInstance().clearNextFruit();
D.default.getInstance().isOpen() && D.default.getInstance().clear();
this._fruits = [];
this._spawnDropPositon = cc.v3(0, this._spawnDropPositon.y);
this._lastDropTime = 0;
this._goldWatermelonFruit = null;
this._currentDroppingFruit = null;
this._turnCount = 0;
this._turnMergerCountMap = {};
f.default.getInstance().reset();
this._touchStartTime = 0;
this._touchStartPos = null;
d.default.getInstance().clear();
F.default.ins().clear();
};
e.prototype.guideClear = function() {
var t, e;
p.default.failZoneCtr.clear();
try {
for (var i = o(this._fruits), r = i.next(); !r.done; r = i.next()) r.value.clear();
} catch (e) {
t = {
error: e
};
} finally {
try {
r && !r.done && (e = i.return) && e.call(i);
} finally {
if (t) throw t.error;
}
}
this._fruits = [];
};
e.prototype.playMergerSound = function(t) {
t <= 5 ? p.default.audioMgr.playEffect(s.GLFruitAudioDefine.fruit_merge) : t <= 8 ? p.default.audioMgr.playEffect(s.GLFruitAudioDefine.fruit_merge_big) : p.default.audioMgr.playEffect(s.GLFruitAudioDefine.fruit_merge_huge);
};
e.prototype.updatePerSecond = function() {
var t;
this._totalAnimationCount++;
if (this._totalAnimationCount % 5 == 0) {
this._totalAnimationCount = 0;
if (this._fruits.length > 0) {
var e = y.default.getRandomInt(0, this._fruits.length), i = null === (t = this._fruits[e]) || void 0 === t ? void 0 : t.getItem();
i && cc.isValid(i.node) && i.playAnimationOnce(s.GLFruitAnimationDefine.Idle3, null);
}
}
this.setActiveStateSafe();
d.default.getInstance().onUpdatePerSecond();
};
Object.defineProperty(e.prototype, "isPause", {
get: function() {
return this._isPause;
},
set: function(t) {
this._isPause = t;
for (var e = p.default.mergerCtr.getFruits(), i = e.length - 1; i >= 0; i--) e[i].getItem().isPhysicsEnable = !t;
},
enumerable: !1,
configurable: !0
});
e.prototype.showWatermelonPanel = function() {
if (this._isCaneShowWatermelonPanel) {
p.default.effectCtr.playWatermelonPanelEffect(cc.Vec3.ZERO);
this._isCaneShowWatermelonPanel = !1;
}
};
e.prototype.setActiveStateSafe = function() {
for (var t = this.getFruits(), e = t.length - 1; e >= 0; e--) {
var i = t[e];
if (i && i.getItem() && i.isReadyDropState() && cc.isValid(i.getItem().node)) {
t[e].runActiveState();
console.log("GLFruitMergerCtr setActiveStateSafe 准备下落切换成活跃状态");
}
}
};
e.prototype.tryRunGoldWatermelonState = function() {
p.default.mergerCtr.getGoldWatermelonFruit() && p.default.gameStateCtr.runGoldWatermelonState();
};
e.prototype.isCanRunGoldWatermelonState = function() {
return null != p.default.mergerCtr.getGoldWatermelonFruit();
};
e.prototype.testSmallToBigReplacement = function() {
console.log("[测试] 仅在调试模式下可用");
};
e.prototype.validateUpperFruitDetection = function() {
console.log("[校验] 仅在调试模式下可用");
return !1;
};
e.prototype.getSmallToBigReplacementStatus = function() {
return F.default.ins().getStatus(this._fruits);
};
e.Event = {
ShowDropLine: "ShowDropLine",
HideDropLine: "HideDropLine",
UpdateDropLinePosition: "UpdateDropLinePosition",
FruitNumberChanged: "FruitNumberChanged"
};
return e;
}(u.default);
i.default = B;
cc._RF.pop();
}, {
"../../core/FruitEventCenter": "FruitEventCenter",
"../../core/GLFruitModelBase": "GLFruitModelBase",
"../FruitFeature": "FruitFeature",
"../FruitLongPressAccCtrl": "FruitLongPressAccCtrl",
"../GLFruitApp": "GLFruitApp",
"../GLFruitRoundLogEventCtr": "GLFruitRoundLogEventCtr",
"../defines/GLFruitDefine": "GLFruitDefine",
"../experiment/func/GLFruitRandomWeight/GLFruitRandomWeightCtr": "GLFruitRandomWeightCtr",
"../play/GLFruit": "GLFruit",
"../tools/GLFruitTools": "GLFruitTools",
"../traits/GLFruitAddFruitChoiceListTraitCtrl": "GLFruitAddFruitChoiceListTraitCtrl",
"../traits/GLFruitAddShakeItemOnMergeXiguaTraitCtrl": "GLFruitAddShakeItemOnMergeXiguaTraitCtrl",
"../traits/GLFruitChangeScaleTraitCtrl": "GLFruitChangeScaleTraitCtrl",
"../traits/GLFruitDeadCheckOptimizeTraitCtrl": "GLFruitDeadCheckOptimizeTraitCtrl",
"../traits/GLFruitDragRateConfigCtrl": "GLFruitDragRateConfigCtrl",
"../traits/GLFruitGongzhengTraitCtrl": "GLFruitGongzhengTraitCtrl",
"../traits/GLFruitHaveFruitStartTraitCtrl": "GLFruitHaveFruitStartTraitCtrl",
"../traits/GLFruitMergeScoreFlyTraitCtrl": "GLFruitMergeScoreFlyTraitCtrl",
"../traits/GLFruitNotDropLittleFruitWhenXiGuaOnShowCtrl": "GLFruitNotDropLittleFruitWhenXiGuaOnShowCtrl",
"../traits/GLFruitOnlyDragCanMoveTraitCtrl": "GLFruitOnlyDragCanMoveTraitCtrl",
"../traits/GLFruitRepeatFruitAwardTraitCtrl": "GLFruitRepeatFruitAwardTraitCtrl",
"../traits/GLFruitTwoFruitOnceTraitCtrl": "GLFruitTwoFruitOnceTraitCtrl",
"../ui/GLFruitLongPressAcc": "GLFruitLongPressAcc",
"./FruitAcceleratePreviousDropCtrl": "FruitAcceleratePreviousDropCtrl",
"./FruitBigFruitMergeShakeCtrl": "FruitBigFruitMergeShakeCtrl",
"./FruitComboSmallFruitExplodeCtrl": "FruitComboSmallFruitExplodeCtrl",
"./FruitLongPressQuickStackCtrl": "FruitLongPressQuickStackCtrl",
"./FruitMergeShakeCtrl": "FruitMergeShakeCtrl",
"./FruitNoDropIntervalCtrl": "FruitNoDropIntervalCtrl",
"./FruitRelaxedComboBreakCtrl": "FruitRelaxedComboBreakCtrl",
"./FruitShakeRandomDirectionCtrl": "FruitShakeRandomDirectionCtrl",
"./FruitSmallToBigReplacementCtrl": "FruitSmallToBigReplacementCtrl",
"./FruitWannengFruitCtrl": "FruitWannengFruitCtrl"
} ],
GLFruitMergerWellDoneCtr: [ function(t, e, i) {
"use strict";
cc._RF.push(e, "3b680NhmOZIX4O1t03liRiq", "GLFruitMergerWellDoneCtr");
Object.defineProperty(i, "__esModule", {
value: !0
});
var r = t("../experiment/func/GLFruitMidRollAd/GLFruitMidRollAdCtr"), n = t("../GLFruitApp"), o = t("../../../../gl_hall/gl_lang/config/GLLangKeyDefine"), a = t("../traits/GLFruitDelayDianZanAniTraitCtrl"), u = function() {
function t() {
this._lastShowTime = 0;
this._totalShowTimes = 0;
this._isShowing = !1;
this._comboLabelNumArr = [];
this._afterShakeShowFruitId = -1;
}
t.prototype.tryShowWellDoneEffect = function(e) {
var i = this;
if ((!r.default.isOpen() || r.default.ins().isCanPlayMidMergerWellDone(e)) && !(Date.now() - this._lastShowTime < 1e3 * t.ShowInterval || this._totalShowTimes > t.ShowLimitTimes)) {
var o = t.ShowEffectIds.indexOf(e);
o < 0 || (n.default.gameStateCtr.isPlaySatte() || -1 != this._afterShakeShowFruitId ? a.GLFruitDelayDianZanAniTraitCtrl.Instance.isOpen() ? a.GLFruitDelayDianZanAniTraitCtrl.Instance.blockTimeAsync(function() {
i.showWellDoneEffect(o, e);
}) : this.showWellDoneEffect(o, e) : this._afterShakeShowFruitId = e);
}
};
t.prototype.showWellDoneEffect = function(e, i) {
var r = this;
this._lastShowTime = Date.now();
this._totalShowTimes++;
this._isShowing = !0;
n.default.effectCtr.playJuzhongdianzan(t.Contents[e], function() {
r._isShowing = !1;
r.showBomboLabelEffect();
n.default.gameStateCtr.isPlaySatte() && n.default.adCtr.midMergerWellDone(i);
});
};
t.prototype.showBomboLabelEffect = function() {
var t = this;
if (this._comboLabelNumArr.length > 0) {
var e = this._comboLabelNumArr.shift();
n.default.comboCtr.showBomboLabelEffect(e, function() {
t.showBomboLabelEffect();
});
}
};
t.prototype.clear = function() {
this._lastShowTime = 0;
this._totalShowTimes = 0;
this._isShowing = !1;
this._comboLabelNumArr = [];
this._afterShakeShowFruitId = -1;
};
t.prototype.addLabelNum = function(t) {
this._comboLabelNumArr.push(t);
};
Object.defineProperty(t.prototype, "isShowing", {
get: function() {
return this._isShowing;
},
enumerable: !1,
configurable: !0
});
t.prototype.afterShakeTryShowWellDoneEffect = function(e) {
var i = this, r = this._afterShakeShowFruitId;
if (-1 != r) {
this._afterShakeShowFruitId = -1;
var o = t.ShowEffectIds.indexOf(r);
if (!(o < 0)) {
this._lastShowTime = Date.now();
this._totalShowTimes++;
this._isShowing = !0;
n.default.effectCtr.playJuzhongdianzan(t.Contents[o], function() {
i._isShowing = !1;
i.showBomboLabelEffect();
n.default.gameStateCtr.isPlaySatte() && !n.default.gameStateCtr.getShakeStateFromAd() && n.default.adCtr.midMergerWellDone(r);
e && e();
});
}
}
};
t.prototype.isCanShowWellDoneEffect = function() {
return -1 != this._afterShakeShowFruitId;
};
t.Contents = [ o.default.FRUIT_DIANZAN_1, o.default.FRUIT_DIANZAN_2, o.default.FRUIT_DIANZAN_3, o.default.FRUIT_DIANZAN_4 ];
t.ShowEffectIds = [ 7, 8, 9, 10 ];
t.ShowInterval = 120;
t.ShowLimitTimes = 4;
return t;
}();
i.default = u;
cc._RF.pop();
}, {
"../../../../gl_hall/gl_lang/config/GLLangKeyDefine": void 0,
"../GLFruitApp": "GLFruitApp",
"../experiment/func/GLFruitMidRollAd/GLFruitMidRollAdCtr": "GLFruitMidRollAdCtr",
"../traits/GLFruitDelayDianZanAniTraitCtrl": "GLFruitDelayDianZanAniTraitCtrl"
} ],
GLFruitMidRollAdCtr: [ function(t, e, i) {
"use strict";
cc._RF.push(e, "a2a38damI1AM5uzmFv4v33x", "GLFruitMidRollAdCtr");
var r, n = this && this.__extends || (r = function(t, e) {
return (r = Object.setPrototypeOf || {
__proto__: []
} instanceof Array && function(t, e) {
t.__proto__ = e;
} || function(t, e) {
for (var i in e) Object.prototype.hasOwnProperty.call(e, i) && (t[i] = e[i]);
})(t, e);
}, function(t, e) {
r(t, e);
function i() {
this.constructor = t;
}
t.prototype = null === e ? Object.create(e) : (i.prototype = e.prototype, new i());
});
Object.defineProperty(i, "__esModule", {
value: !0
});
var o = function(t) {
n(e, t);
function e() {
return null !== t && t.apply(this, arguments) || this;
}
e.prototype.showMidRollAd = function() {
console.log("展示插屏广告");
};
e.prototype.isCanPlayMidMergerWellDone = function(t) {
this.addAutoLog();
return 9 == t || 10 == t;
};
e.featureName = "isOpenGLFruitMidRollAd";
return e;
}(t("../../GLFruitFuncBase").default);
i.default = o;
cc._RF.pop();
}, {
"../../GLFruitFuncBase": "GLFruitFuncBase"
} ],
GLFruitModelBase: [ function(t, e, i) {
"use strict";
cc._RF.push(e, "c5bc3GX1jlBGqyC8WepM+s3", "GLFruitModelBase");
Object.defineProperty(i, "__esModule", {
value: !0
});
var r = function() {
function t() {
this.events = new Map();
this.onceEvents = new Map();
}
t.prototype.on = function(t, e, i) {
var r = this.events;
r.has(t) ? r.get(t).push({
callback: e,
target: i
}) : r.set(t, [ {
callback: e,
target: i
} ]);
};
t.prototype.once = function(t, e, i) {
var r = this.onceEvents;
r.has(t) ? r.get(t).push({
callback: e,
target: i
}) : r.set(t, [ {
callback: e,
target: i
} ]);
};
t.prototype.off = function(t, e, i) {
var r = this.events.get(t);
if (r) for (var n = 0, o = r.length; n < o; n++) if (this.compare(r[n], e, i)) {
r.splice(n, 1);
0 === r.length && this.events.delete(t);
break;
}
var a = this.onceEvents.get(t);
if (a) for (n = 0, o = a.length; n < o; n++) if (this.compare(a[n], e, i)) {
a.splice(n, 1);
0 === a.length && this.onceEvents.delete(t);
break;
}
};
t.prototype.emit = function(t) {
for (var e = [], i = 1; i < arguments.length; i++) e[i - 1] = arguments[i];
var r = this.events.get(t);
if (r) for (var n = 0; n < r.length; n++) {
var o = r[n], a = o.callback, u = o.target;
a.apply(u, e);
}
var s = this.onceEvents.get(t);
if (s) {
for (n = 0; n < s.length; n++) {
var l = s[n];
a = l.callback, u = l.target;
a.apply(u, e);
}
this.onceEvents.delete(t);
}
};
t.prototype.remove = function(t) {
this.events.has(t) && this.events.delete(t);
this.onceEvents.has(t) && this.onceEvents.delete(t);
};
t.prototype.removeAll = function() {
this.events.clear();
this.onceEvents.clear();
};
t.prototype.compare = function(t, e, i) {
var r = t.callback;
return t.target === i && (r === e || r.toString() === e.toString());
};
return t;
}();
i.default = r;
cc._RF.pop();
}, {} ],
GLFruitNotDropLittleFruitWhenXiGuaOnShowCtrl: [ function(t, e, i) {
"use strict";
cc._RF.push(e, "37310hZZvNNL5svnMWRJzjg", "GLFruitNotDropLittleFruitWhenXiGuaOnShowCtrl");
var r = this && this.__awaiter || function(t, e, i, r) {
return new (i || (i = Promise))(function(n, o) {
function a(t) {
try {
s(r.next(t));
} catch (t) {
o(t);
}
}
function u(t) {
try {
s(r.throw(t));
} catch (t) {
o(t);
}
}
function s(t) {
t.done ? n(t.value) : (e = t.value, e instanceof i ? e : new i(function(t) {
t(e);
})).then(a, u);
var e;
}
s((r = r.apply(t, e || [])).next());
});
}, n = this && this.__generator || function(t, e) {
var i, r, n, o, a = {
label: 0,
sent: function() {
if (1 & n[0]) throw n[1];
return n[1];
},
trys: [],
ops: []
};
return o = {
next: u(0),
throw: u(1),
return: u(2)
}, "function" == typeof Symbol && (o[Symbol.iterator] = function() {
return this;
}), o;
function u(t) {
return function(e) {
return s([ t, e ]);
};
}
function s(o) {
if (i) throw new TypeError("Generator is already executing.");
for (;a; ) try {
if (i = 1, r && (n = 2 & o[0] ? r.return : o[0] ? r.throw || ((n = r.return) && n.call(r), 
0) : r.next) && !(n = n.call(r, o[1])).done) return n;
(r = 0, n) && (o = [ 2 & o[0], n.value ]);
switch (o[0]) {
case 0:
case 1:
n = o;
break;

case 4:
a.label++;
return {
value: o[1],
done: !1
};

case 5:
a.label++;
r = o[1];
o = [ 0 ];
continue;

case 7:
o = a.ops.pop();
a.trys.pop();
continue;

default:
if (!(n = a.trys, n = n.length > 0 && n[n.length - 1]) && (6 === o[0] || 2 === o[0])) {
a = 0;
continue;
}
if (3 === o[0] && (!n || o[1] > n[0] && o[1] < n[3])) {
a.label = o[1];
break;
}
if (6 === o[0] && a.label < n[1]) {
a.label = n[1];
n = o;
break;
}
if (n && a.label < n[2]) {
a.label = n[2];
a.ops.push(o);
break;
}
n[2] && a.ops.pop();
a.trys.pop();
continue;
}
o = e.call(t, a);
} catch (t) {
o = [ 6, t ];
r = 0;
} finally {
i = n = 0;
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
var o = t("../GLFruitApp"), a = t("../defines/GLFruitDefine"), u = t("../tools/GLFruitTools"), s = function() {
function t() {
this._featureName = "GLFruitNotDropLittleFruitWhenXiGuaOnShow";
this.bundleName = "Remote_gl_fruit_NotDropLittleFruitWhenXiGuaOnShow";
this.fruitGraySpineName = [ "prefabs/Fruit_01", "prefabs/Fruit_02" ];
this.curNotDropLittleFruit = !1;
this.limitFruitId = 0;
this.fruitGraySpineMap = new Map();
this.resIsLoading = !1;
this.banner = null;
this.origSkeletonData = new Map();
}
t.getInstance = function() {
null == this._instance && (this._instance = new t());
return this._instance;
};
t.prototype.isOpen = function() {
return GL.Game.IsFeatureOpen(this._featureName);
};
t.prototype.init = function(t) {
this.banner = t;
this.curNotDropLittleFruit = !1;
this.loadRes();
};
t.prototype.loadRes = function() {
return r(this, void 0, void 0, function() {
var t, e, i, r, o = this;
return n(this, function(n) {
switch (n.label) {
case 0:
console.log("==GLFruitNotDropLittleFruitWhenXiGuaOnShow==start load res");
if (this.fruitGraySpineMap.size == this.fruitGraySpineName.length) {
this.resIsLoading = !1;
this.afterMergeCheck();
return [ 2 ];
}
if (1 == this.resIsLoading) return [ 2 ];
this.resIsLoading = !0;
return GL.Game.resLoaderLoadBundle ? [ 4, GL.Game.resLoaderLoadBundle(this.bundleName, !0) ] : [ 2 ];

case 1:
if (t = n.sent()) {
e = function(e) {
var r = i.fruitGraySpineName[e];
t.load(r, function(t, i) {
var r, n;
if (t) console.log("==GLFruitNotDropLittleFruitWhenXiGuaOnShow==load res err:", t); else {
console.log("==GLFruitNotDropLittleFruitWhenXiGuaOnShow==load res complete");
var a = cc.instantiate(i), u = null === (n = null === (r = null == a ? void 0 : a.getChildByName("skin")) || void 0 === r ? void 0 : r.getComponent(sp.Skeleton)) || void 0 === n ? void 0 : n.skeletonData;
null != u && o.fruitGraySpineMap.set(e + 1, u);
}
if (o.fruitGraySpineMap.size >= o.fruitGraySpineName.length) {
o.resIsLoading = !1;
console.log("==GLFruitNotDropLittleFruitWhenXiGuaOnShow==load all ", o.fruitGraySpineMap);
o.afterMergeCheck();
}
});
};
i = this;
for (r = 0; r < this.fruitGraySpineName.length; r++) e(r);
} else {
console.log("==GLFruitNotDropLittleFruitWhenXiGuaOnShow==load bundle fail");
this.resIsLoading = !1;
}
return [ 2 ];
}
});
});
};
t.prototype.checkXiGuaOnShow = function() {
for (var t = o.default.mergerCtr.getFruits(), e = 0; e < t.length; e++) {
var i = t[e];
if (null != i && i.getId() == a.GLFruitDefine.MaxFruitId - 1) {
console.log("==GLFruitNotDropLittleFruitWhenXiGuaOnShow==check has XiGua");
return !0;
}
}
return !1;
};
t.prototype.afterMergeCheck = function() {
var t = this.checkXiGuaOnShow();
0 == this.curNotDropLittleFruit ? 1 == t && this.forbidDropLittleFruit() : 0 == t && this.allowDropLittleFruit();
};
t.prototype.getLimitFruitId = function() {
return Math.max(0, Math.min(this.limitFruitId, 4));
};
t.prototype.canNotDropLittleFruit = function() {
return this.curNotDropLittleFruit;
};
t.prototype.allowDropLittleFruit = function() {
return r(this, void 0, void 0, function() {
var t = this;
return n(this, function() {
console.log("==GLFruitNotDropLittleFruitWhenXiGuaOnShow==allowDropLittleFruit");
this.limitFruitId = 0;
this.curNotDropLittleFruit = !1;
this.fruitGraySpineMap.forEach(function(e, i) {
var r, n, s, l, c, d, p, f, h, g, F = null === (d = null === (c = null === (l = null === (s = null === (n = null === (r = t.banner) || void 0 === r ? void 0 : r.getFruits()) || void 0 === n ? void 0 : n[i - 1]) || void 0 === s ? void 0 : s.getItem()) || void 0 === l ? void 0 : l.node) || void 0 === c ? void 0 : c.getChildByName("skin")) || void 0 === d ? void 0 : d.getComponent(sp.Skeleton);
if (null != F) {
console.log("==GLFruitNotDropLittleFruitWhenXiGuaOnShow==back animation:", i);
var y = t.origSkeletonData.get(i);
if (null != y && cc.isValid(y)) {
F.skeletonData = y;
null === (g = null === (h = null === (f = null === (p = t.banner) || void 0 === p ? void 0 : p.getFruits()) || void 0 === f ? void 0 : f[i - 1]) || void 0 === h ? void 0 : h.getItem()) || void 0 === g || g.playAnimation(a.GLFruitAnimationDefine.Idle1);
} else {
var v = u.default.GetFruitNameById(i);
o.default.assetCtr.load("assets/effects/Skin3/" + v + "/" + v, sp.SkeletonData).then(function(e) {
var r, n, o, u;
if (null != F && cc.isValid(F)) {
F.skeletonData = e;
null === (u = null === (o = null === (n = null === (r = t.banner) || void 0 === r ? void 0 : r.getFruits()) || void 0 === n ? void 0 : n[i - 1]) || void 0 === o ? void 0 : o.getItem()) || void 0 === u || u.playAnimation(a.GLFruitAnimationDefine.Idle1);
}
});
}
}
});
return [ 2 ];
});
});
};
t.prototype.forbidDropLittleFruit = function() {
var t = this;
if (!(this.fruitGraySpineMap.size < this.fruitGraySpineName.length)) {
console.log("==GLFruitNotDropLittleFruitWhenXiGuaOnShow==forbidDropLittleFruit");
this.limitFruitId = GL.Game.getFeatureKeyParam(this._featureName, "limitId") || 2;
this.curNotDropLittleFruit = !0;
this.fruitGraySpineMap.forEach(function(e, i) {
var r, n, o, u, s, l, c, d, p, f, h = null === (l = null === (s = null === (u = null === (o = null === (n = null === (r = t.banner) || void 0 === r ? void 0 : r.getFruits()) || void 0 === n ? void 0 : n[i - 1]) || void 0 === o ? void 0 : o.getItem()) || void 0 === u ? void 0 : u.node) || void 0 === s ? void 0 : s.getChildByName("skin")) || void 0 === l ? void 0 : l.getComponent(sp.Skeleton);
if (null != h) {
t.origSkeletonData.has(i) || t.origSkeletonData.set(i, h.skeletonData);
console.log("==GLFruitNotDropLittleFruitWhenXiGuaOnShow==change gray animation:", i, e);
h.skeletonData = e;
null === (f = null === (p = null === (d = null === (c = t.banner) || void 0 === c ? void 0 : c.getFruits()) || void 0 === d ? void 0 : d[i - 1]) || void 0 === p ? void 0 : p.getItem()) || void 0 === f || f.playAnimation(a.GLFruitAnimationDefine.Idle1);
}
});
}
};
t._instance = null;
return t;
}();
i.default = s;
cc._RF.pop();
}, {
"../GLFruitApp": "GLFruitApp",
"../defines/GLFruitDefine": "GLFruitDefine",
"../tools/GLFruitTools": "GLFruitTools"
} ],
GLFruitObjectPoolCtr: [ function(t, e, i) {
"use strict";
cc._RF.push(e, "090d24osNpCppOXFc25FhBs", "GLFruitObjectPoolCtr");
var r = this && this.__awaiter || function(t, e, i, r) {
return new (i || (i = Promise))(function(n, o) {
function a(t) {
try {
s(r.next(t));
} catch (t) {
o(t);
}
}
function u(t) {
try {
s(r.throw(t));
} catch (t) {
o(t);
}
}
function s(t) {
t.done ? n(t.value) : (e = t.value, e instanceof i ? e : new i(function(t) {
t(e);
})).then(a, u);
var e;
}
s((r = r.apply(t, e || [])).next());
});
}, n = this && this.__generator || function(t, e) {
var i, r, n, o, a = {
label: 0,
sent: function() {
if (1 & n[0]) throw n[1];
return n[1];
},
trys: [],
ops: []
};
return o = {
next: u(0),
throw: u(1),
return: u(2)
}, "function" == typeof Symbol && (o[Symbol.iterator] = function() {
return this;
}), o;
function u(t) {
return function(e) {
return s([ t, e ]);
};
}
function s(o) {
if (i) throw new TypeError("Generator is already executing.");
for (;a; ) try {
if (i = 1, r && (n = 2 & o[0] ? r.return : o[0] ? r.throw || ((n = r.return) && n.call(r), 
0) : r.next) && !(n = n.call(r, o[1])).done) return n;
(r = 0, n) && (o = [ 2 & o[0], n.value ]);
switch (o[0]) {
case 0:
case 1:
n = o;
break;

case 4:
a.label++;
return {
value: o[1],
done: !1
};

case 5:
a.label++;
r = o[1];
o = [ 0 ];
continue;

case 7:
o = a.ops.pop();
a.trys.pop();
continue;

default:
if (!(n = a.trys, n = n.length > 0 && n[n.length - 1]) && (6 === o[0] || 2 === o[0])) {
a = 0;
continue;
}
if (3 === o[0] && (!n || o[1] > n[0] && o[1] < n[3])) {
a.label = o[1];
break;
}
if (6 === o[0] && a.label < n[1]) {
a.label = n[1];
n = o;
break;
}
if (n && a.label < n[2]) {
a.label = n[2];
a.ops.push(o);
break;
}
n[2] && a.ops.pop();
a.trys.pop();
continue;
}
o = e.call(t, a);
} catch (t) {
o = [ 6, t ];
r = 0;
} finally {
i = n = 0;
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
var o = t("../logic/GLFruitApp"), a = function() {
function t() {
this.prefabs = new Map();
this.objectPools = new Map();
}
t.prototype.createObjectPool = function(t, e, i) {
if (!this.objectPools.has(t)) {
var r = new cc.NodePool();
this.objectPools.set(t, r);
this.prefabs.set(t, e);
for (var n = 0; n < i; n++) {
var o = cc.instantiate(e);
r.put(o);
}
}
};
t.prototype.loadAndCreateObjectPool = function(t, e, i) {
void 0 === i && (i = 1);
return r(this, void 0, void 0, function() {
var r;
return n(this, function(n) {
switch (n.label) {
case 0:
return this.objectPools.has(t) ? [ 3, 2 ] : [ 4, o.default.assetCtr.loadPrefab(e) ];

case 1:
null != (r = n.sent()) && o.default.poolCtr.createObjectPool(t, r, i);
n.label = 2;

case 2:
return [ 2 ];
}
});
});
};
t.prototype.isHasPool = function(t) {
return this.objectPools.has(t);
};
t.prototype.get = function(t) {
var e = this.objectPools.get(t);
if (null != e) {
if (0 == e.size()) return "EmptyNode" == t ? new cc.Node() : cc.instantiate(this.prefabs.get(t));
var i = e.get();
this.resetNode(i);
return i;
}
return null;
};
t.prototype.push = function(t, e) {
if (this.objectPools.has(t)) {
e.active = !1;
this.objectPools.get(t).put(e);
}
};
t.prototype.clearPool = function(t) {
this.objectPools.has(t) && this.objectPools.get(t).clear();
};
t.prototype.initEmptyNode = function(t, e) {
void 0 === t && (t = "EmptyNode");
void 0 === e && (e = 1);
var i = new cc.NodePool();
this.objectPools.set(t, i);
for (var r = 0; r < e; r++) {
var n = new cc.Node();
i.put(n);
}
};
t.prototype.resetNode = function(t) {
t.active = !0;
t.scale = 1;
t.opacity = 255;
t.angle = 0;
};
t.prototype.clearAllPools = function(t) {
void 0 === t && (t = !0);
this.objectPools.forEach(function(t) {
t.clear();
});
this.objectPools.clear();
t && this.prefabs.clear();
};
return t;
}();
i.default = a;
cc._RF.pop();
}, {
"../logic/GLFruitApp": "GLFruitApp"
} ],
GLFruitOnDangerShowDeadLineTraitCtrl: [ function(t, e, i) {
"use strict";
cc._RF.push(e, "686ee84aF9H+L4egIB4qirr", "GLFruitOnDangerShowDeadLineTraitCtrl");
var r = this && this.__awaiter || function(t, e, i, r) {
return new (i || (i = Promise))(function(n, o) {
function a(t) {
try {
s(r.next(t));
} catch (t) {
o(t);
}
}
function u(t) {
try {
s(r.throw(t));
} catch (t) {
o(t);
}
}
function s(t) {
t.done ? n(t.value) : (e = t.value, e instanceof i ? e : new i(function(t) {
t(e);
})).then(a, u);
var e;
}
s((r = r.apply(t, e || [])).next());
});
}, n = this && this.__generator || function(t, e) {
var i, r, n, o, a = {
label: 0,
sent: function() {
if (1 & n[0]) throw n[1];
return n[1];
},
trys: [],
ops: []
};
return o = {
next: u(0),
throw: u(1),
return: u(2)
}, "function" == typeof Symbol && (o[Symbol.iterator] = function() {
return this;
}), o;
function u(t) {
return function(e) {
return s([ t, e ]);
};
}
function s(o) {
if (i) throw new TypeError("Generator is already executing.");
for (;a; ) try {
if (i = 1, r && (n = 2 & o[0] ? r.return : o[0] ? r.throw || ((n = r.return) && n.call(r), 
0) : r.next) && !(n = n.call(r, o[1])).done) return n;
(r = 0, n) && (o = [ 2 & o[0], n.value ]);
switch (o[0]) {
case 0:
case 1:
n = o;
break;

case 4:
a.label++;
return {
value: o[1],
done: !1
};

case 5:
a.label++;
r = o[1];
o = [ 0 ];
continue;

case 7:
o = a.ops.pop();
a.trys.pop();
continue;

default:
if (!(n = a.trys, n = n.length > 0 && n[n.length - 1]) && (6 === o[0] || 2 === o[0])) {
a = 0;
continue;
}
if (3 === o[0] && (!n || o[1] > n[0] && o[1] < n[3])) {
a.label = o[1];
break;
}
if (6 === o[0] && a.label < n[1]) {
a.label = n[1];
n = o;
break;
}
if (n && a.label < n[2]) {
a.label = n[2];
a.ops.push(o);
break;
}
n[2] && a.ops.pop();
a.trys.pop();
continue;
}
o = e.call(t, a);
} catch (t) {
o = [ 6, t ];
r = 0;
} finally {
i = n = 0;
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
var o = t("../GLFruitApp"), a = t("../tools/GLFruitTools"), u = function() {
function t() {
this._featureName = "GLFruitOnDangerShowDeadLine";
this._featureBlinkTime = 0;
this._featureBlinkTimes = 0;
this.mainUINode = null;
this.blinkAni = null;
}
t.getInstance = function() {
null == this._instance && (this._instance = new t());
return this._instance;
};
t.prototype.isOpen = function() {
return GL.Game.IsFeatureOpen(this._featureName);
};
t.prototype.getFeatureParam = function() {
this._featureBlinkTime = GL.Game.getFeatureKeyParam(this._featureName, "blinkTime") || 0;
this._featureBlinkTimes = GL.Game.getFeatureKeyParam(this._featureName, "blinkTimes") || 0;
};
t.prototype.init = function(t) {
this.getFeatureParam();
this.initAddDeadLine(t);
};
t.prototype.initAddDeadLine = function(t) {
return r(this, void 0, void 0, function() {
var e, i, r, u;
return n(this, function(n) {
switch (n.label) {
case 0:
if (null == t) return [ 2 ];
if (null != t.getChildByName("deadLineNode")) {
this.mainUINode = t.getChildByName("deadLineNode");
return [ 2 ];
}
this.mainUINode = null;
e = a.default.FindNode(t, "nodeOutBound");
i = e.getPosition().y - e.getContentSize().height / 2;
return [ 4, o.default.assetCtr.loadPrefab("assets/traits/onDangerShowDeadLine/prefabs/deadLine") ];

case 1:
if (null == (r = n.sent())) return [ 2 ];
if (null == (u = cc.instantiate(r))) return [ 2 ];
u.setPosition(cc.v2(0, i));
u.name = "deadLineNode";
u.active = !1;
u.setParent(t);
this.mainUINode = u;
return [ 2 ];
}
});
});
};
t.prototype.isShowingDeadLine = function() {
var t;
return !!(null === (t = this.mainUINode) || void 0 === t ? void 0 : t.active);
};
t.prototype.showDeadLine = function() {
var t = this;
if (null != this.mainUINode && !(this._featureBlinkTime <= 0 || this._featureBlinkTimes <= 0)) {
this.mainUINode.active = !0;
if (null != this.blinkAni) {
this.blinkAni.stop();
this.blinkAni = null;
}
this.blinkAni = cc.tween(this.mainUINode).call(function() {
t.mainUINode.opacity = 1;
});
for (var e = this._featureBlinkTime / this._featureBlinkTimes, i = 0; i < this._featureBlinkTimes; i++) this.blinkAni = this.blinkAni.to(e / 2, {
opacity: 255
}, {
easing: "easeOutQuad"
}).to(e / 2, {
opacity: 1
}, {
easing: "easeInQuad"
});
this.blinkAni = this.blinkAni.call(function() {
t.blinkAni = null;
t.mainUINode.active = !1;
t.mainUINode.opacity = 255;
}).start();
}
};
t.prototype.showOrHideDeadLine = function(t) {
null != this.mainUINode && (this.mainUINode.active = t);
};
t._instance = null;
return t;
}();
i.default = u;
cc._RF.pop();
}, {
"../GLFruitApp": "GLFruitApp",
"../tools/GLFruitTools": "GLFruitTools"
} ],
GLFruitOnlyDragCanMoveTraitCtrl: [ function(t, e, i) {
"use strict";
cc._RF.push(e, "b207064ChBIr62s4vAXCxsA", "GLFruitOnlyDragCanMoveTraitCtrl");
Object.defineProperty(i, "__esModule", {
value: !0
});
var r = function() {
function t() {
this._featureName = "GLFruitOnlyDragCanMove";
this.canMove = !1;
}
t.getInstance = function() {
null == this._instance && (this._instance = new t());
return this._instance;
};
t.prototype.isOpen = function() {
return GL.Game.IsFeatureOpen(this._featureName);
};
t.prototype.isCanMove = function() {
return this.canMove;
};
t.prototype.setCanMove = function(t) {
this.canMove = t <= 85;
};
t._instance = null;
return t;
}();
i.default = r;
cc._RF.pop();
}, {} ],
GLFruitPanelLikeEffect: [ function(t, e, i) {
"use strict";
cc._RF.push(e, "4b541S/3dlHB60Yk2dcV+yG", "GLFruitPanelLikeEffect");
var r, n = this && this.__extends || (r = function(t, e) {
return (r = Object.setPrototypeOf || {
__proto__: []
} instanceof Array && function(t, e) {
t.__proto__ = e;
} || function(t, e) {
for (var i in e) Object.prototype.hasOwnProperty.call(e, i) && (t[i] = e[i]);
})(t, e);
}, function(t, e) {
r(t, e);
function i() {
this.constructor = t;
}
t.prototype = null === e ? Object.create(e) : (i.prototype = e.prototype, new i());
}), o = this && this.__decorate || function(t, e, i, r) {
var n, o = arguments.length, a = o < 3 ? e : null === r ? r = Object.getOwnPropertyDescriptor(e, i) : r;
if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) a = Reflect.decorate(t, e, i, r); else for (var u = t.length - 1; u >= 0; u--) (n = t[u]) && (a = (o < 3 ? n(a) : o > 3 ? n(e, i, a) : n(e, i)) || a);
return o > 3 && a && Object.defineProperty(e, i, a), a;
};
Object.defineProperty(i, "__esModule", {
value: !0
});
var a = t("../tools/GLFruitTools"), u = cc._decorator, s = u.ccclass, l = (u.property, 
function(t) {
n(e, t);
function e() {
var e = null !== t && t.apply(this, arguments) || this;
e.labelContent = null;
return e;
}
e.prototype.onLoad = function() {
var t = a.default.FindNode(this.node, "juzhongdianzan", "ATTACHED_NODE_TREE", "ATTACHED_NODE:root", "ATTACHED_NODE:tankuang", "ATTACHED_NODE:zi");
this.labelContent = a.default.FindNode(this.node, "nodeLabel").getComponent(cc.Label);
if (t && this.labelContent) {
this.labelContent.node.setParent(t);
this.labelContent.node.position = cc.Vec3.ZERO;
}
};
e.prototype.play = function(t) {
this.labelContent.string = t;
};
return o([ s ], e);
}(cc.Component));
i.default = l;
cc._RF.pop();
}, {
"../tools/GLFruitTools": "GLFruitTools"
} ],
GLFruitPhysicsConfigCtr: [ function(t, e, i) {
"use strict";
cc._RF.push(e, "411142xwqZKLr3bAwP2VRRM", "GLFruitPhysicsConfigCtr");
var r = this && this.__awaiter || function(t, e, i, r) {
return new (i || (i = Promise))(function(n, o) {
function a(t) {
try {
s(r.next(t));
} catch (t) {
o(t);
}
}
function u(t) {
try {
s(r.throw(t));
} catch (t) {
o(t);
}
}
function s(t) {
t.done ? n(t.value) : (e = t.value, e instanceof i ? e : new i(function(t) {
t(e);
})).then(a, u);
var e;
}
s((r = r.apply(t, e || [])).next());
});
}, n = this && this.__generator || function(t, e) {
var i, r, n, o, a = {
label: 0,
sent: function() {
if (1 & n[0]) throw n[1];
return n[1];
},
trys: [],
ops: []
};
return o = {
next: u(0),
throw: u(1),
return: u(2)
}, "function" == typeof Symbol && (o[Symbol.iterator] = function() {
return this;
}), o;
function u(t) {
return function(e) {
return s([ t, e ]);
};
}
function s(o) {
if (i) throw new TypeError("Generator is already executing.");
for (;a; ) try {
if (i = 1, r && (n = 2 & o[0] ? r.return : o[0] ? r.throw || ((n = r.return) && n.call(r), 
0) : r.next) && !(n = n.call(r, o[1])).done) return n;
(r = 0, n) && (o = [ 2 & o[0], n.value ]);
switch (o[0]) {
case 0:
case 1:
n = o;
break;

case 4:
a.label++;
return {
value: o[1],
done: !1
};

case 5:
a.label++;
r = o[1];
o = [ 0 ];
continue;

case 7:
o = a.ops.pop();
a.trys.pop();
continue;

default:
if (!(n = a.trys, n = n.length > 0 && n[n.length - 1]) && (6 === o[0] || 2 === o[0])) {
a = 0;
continue;
}
if (3 === o[0] && (!n || o[1] > n[0] && o[1] < n[3])) {
a.label = o[1];
break;
}
if (6 === o[0] && a.label < n[1]) {
a.label = n[1];
n = o;
break;
}
if (n && a.label < n[2]) {
a.label = n[2];
a.ops.push(o);
break;
}
n[2] && a.ops.pop();
a.trys.pop();
continue;
}
o = e.call(t, a);
} catch (t) {
o = [ 6, t ];
r = 0;
} finally {
i = n = 0;
}
if (5 & o[0]) throw o[1];
return {
value: o[0] ? o[1] : void 0,
done: !0
};
}
}, o = this && this.__values || function(t) {
var e = "function" == typeof Symbol && Symbol.iterator, i = e && t[e], r = 0;
if (i) return i.call(t);
if (t && "number" == typeof t.length) return {
next: function() {
t && r >= t.length && (t = void 0);
return {
value: t && t[r++],
done: !t
};
}
};
throw new TypeError(e ? "Object is not iterable." : "Symbol.iterator is not defined.");
};
Object.defineProperty(i, "__esModule", {
value: !0
});
var a = t("../GLFruitApp"), u = function() {
function t() {
this._dataMap = {};
this._curPhysicsData = null;
}
t.prototype.loadConfig = function() {
return r(this, void 0, void 0, function() {
var t, e, i, r, u, s;
return n(this, function(n) {
switch (n.label) {
case 0:
return [ 4, a.default.assetCtr.loadJson("assets/configs/tbfruitphysics") ];

case 1:
t = n.sent();
try {
for (e = o(t.json), i = e.next(); !i.done; i = e.next()) {
r = i.value;
this._dataMap[r.Id] = r;
}
} catch (t) {
u = {
error: t
};
} finally {
try {
i && !i.done && (s = e.return) && s.call(e);
} finally {
if (u) throw u.error;
}
}
return [ 2 ];
}
});
});
};
t.prototype.initConfig = function(t) {
var e, i;
try {
for (var r = o(t.json), n = r.next(); !n.done; n = r.next()) {
var a = n.value;
this._dataMap[a.Id] = a;
}
} catch (t) {
e = {
error: t
};
} finally {
try {
n && !n.done && (i = r.return) && i.call(r);
} finally {
if (e) throw e.error;
}
}
};
t.prototype.init = function() {
this._curPhysicsData = this.getById(1005);
};
t.prototype.getById = function(t) {
return this._dataMap[t];
};
t.prototype.getAll = function() {
return Object.values(this._dataMap);
};
t.prototype.has = function(t) {
return !!this._dataMap[t];
};
t.prototype.getCurPhysicsData = function() {
return this._curPhysicsData;
};
return t;
}();
i.default = u;
cc._RF.pop();
}, {
"../GLFruitApp": "GLFruitApp"
} ],
GLFruitPlacePreviewCtr: [ function(t, e, i) {
"use strict";
cc._RF.push(e, "061b9vImfJOYpLsROVCG3ge", "GLFruitPlacePreviewCtr");
var r, n = this && this.__extends || (r = function(t, e) {
return (r = Object.setPrototypeOf || {
__proto__: []
} instanceof Array && function(t, e) {
t.__proto__ = e;
} || function(t, e) {
for (var i in e) Object.prototype.hasOwnProperty.call(e, i) && (t[i] = e[i]);
})(t, e);
}, function(t, e) {
r(t, e);
function i() {
this.constructor = t;
}
t.prototype = null === e ? Object.create(e) : (i.prototype = e.prototype, new i());
}), o = this && this.__awaiter || function(t, e, i, r) {
return new (i || (i = Promise))(function(n, o) {
function a(t) {
try {
s(r.next(t));
} catch (t) {
o(t);
}
}
function u(t) {
try {
s(r.throw(t));
} catch (t) {
o(t);
}
}
function s(t) {
t.done ? n(t.value) : (e = t.value, e instanceof i ? e : new i(function(t) {
t(e);
})).then(a, u);
var e;
}
s((r = r.apply(t, e || [])).next());
});
}, a = this && this.__generator || function(t, e) {
var i, r, n, o, a = {
label: 0,
sent: function() {
if (1 & n[0]) throw n[1];
return n[1];
},
trys: [],
ops: []
};
return o = {
next: u(0),
throw: u(1),
return: u(2)
}, "function" == typeof Symbol && (o[Symbol.iterator] = function() {
return this;
}), o;
function u(t) {
return function(e) {
return s([ t, e ]);
};
}
function s(o) {
if (i) throw new TypeError("Generator is already executing.");
for (;a; ) try {
if (i = 1, r && (n = 2 & o[0] ? r.return : o[0] ? r.throw || ((n = r.return) && n.call(r), 
0) : r.next) && !(n = n.call(r, o[1])).done) return n;
(r = 0, n) && (o = [ 2 & o[0], n.value ]);
switch (o[0]) {
case 0:
case 1:
n = o;
break;

case 4:
a.label++;
return {
value: o[1],
done: !1
};

case 5:
a.label++;
r = o[1];
o = [ 0 ];
continue;

case 7:
o = a.ops.pop();
a.trys.pop();
continue;

default:
if (!(n = a.trys, n = n.length > 0 && n[n.length - 1]) && (6 === o[0] || 2 === o[0])) {
a = 0;
continue;
}
if (3 === o[0] && (!n || o[1] > n[0] && o[1] < n[3])) {
a.label = o[1];
break;
}
if (6 === o[0] && a.label < n[1]) {
a.label = n[1];
n = o;
break;
}
if (n && a.label < n[2]) {
a.label = n[2];
a.ops.push(o);
break;
}
n[2] && a.ops.pop();
a.trys.pop();
continue;
}
o = e.call(t, a);
} catch (t) {
o = [ 6, t ];
r = 0;
} finally {
i = n = 0;
}
if (5 & o[0]) throw o[1];
return {
value: o[0] ? o[1] : void 0,
done: !0
};
}
}, u = this && this.__values || function(t) {
var e = "function" == typeof Symbol && Symbol.iterator, i = e && t[e], r = 0;
if (i) return i.call(t);
if (t && "number" == typeof t.length) return {
next: function() {
t && r >= t.length && (t = void 0);
return {
value: t && t[r++],
done: !t
};
}
};
throw new TypeError(e ? "Object is not iterable." : "Symbol.iterator is not defined.");
};
Object.defineProperty(i, "__esModule", {
value: !0
});
var s = t("../../core/GLFruitModelBase"), l = t("../GLFruitApp"), c = t("../play/GLFruitItem"), d = t("../tools/GLFruitTools"), p = (cc._decorator.ccclass, 
function(t) {
n(e, t);
function e() {
var e = null !== t && t.apply(this, arguments) || this;
e._previewPrefab = null;
e._previewNode = null;
e._skeleton = null;
e._isInitialized = !1;
e._currentFruit = null;
return e;
}
e.prototype.init = function() {
return o(this, void 0, Promise, function() {
var t, e;
return a(this, function(i) {
switch (i.label) {
case 0:
if (this._isInitialized) return [ 2 ];
i.label = 1;

case 1:
i.trys.push([ 1, 3, , 4 ]);
t = this;
return [ 4, l.default.assetCtr.loadPrefab("assets/prefabs/effects/PreviewPlace") ];

case 2:
t._previewPrefab = i.sent();
if (!this._previewPrefab) {
console.error("[GLFruitPlacePreviewCtr] Failed to load PreviewPlace prefab");
return [ 2 ];
}
this._isInitialized = !0;
return [ 3, 4 ];

case 3:
e = i.sent();
console.error("[GLFruitPlacePreviewCtr] Error loading PreviewPlace prefab:", e);
return [ 3, 4 ];

case 4:
return [ 2 ];
}
});
});
};
e.prototype.showPreview = function(t) {
if (this._isInitialized && this._previewPrefab && t && t.getItem() && t.getItem().node && cc.isValid(t.getItem().node)) {
var e = this.calculatePreviewPosition(t);
if (e) {
this.hidePreview();
this._previewNode = cc.instantiate(this._previewPrefab);
if (this._previewNode) {
var i = l.default.mergerCtr.getNodeFruitRoot();
if (i) {
this._previewNode.setParent(i);
var r = i.convertToNodeSpaceAR(e);
this._previewNode.position = r;
this._skeleton = this._previewNode.getComponent(sp.Skeleton);
if (this._skeleton) {
this._previewNode.active = !0;
this._currentFruit = t;
this.playShowAnimation(t);
} else {
console.error("[GLFruitPlacePreviewCtr] Preview node does not have Skeleton component");
this._previewNode.destroy();
this._previewNode = null;
}
} else console.error("[GLFruitPlacePreviewCtr] Fruit root node is null");
} else console.error("[GLFruitPlacePreviewCtr] Failed to instantiate preview node");
}
}
};
e.prototype.hidePreview = function() {
var t = this;
this._currentFruit = null;
if (this._previewNode && cc.isValid(this._previewNode)) this.playHideAnimation(function() {
if (t._previewNode && cc.isValid(t._previewNode)) {
t._previewNode.destroy();
t._previewNode = null;
t._skeleton = null;
}
}); else {
this._previewNode = null;
this._skeleton = null;
}
};
e.prototype.updatePreviewPosition = function(t) {
if (this._previewNode && cc.isValid(this._previewNode) && t && t.getItem() && t.getItem().node && cc.isValid(t.getItem().node)) {
this._currentFruit = t;
var e = this.calculatePreviewPosition(t);
if (e) {
var i = l.default.mergerCtr.getNodeFruitRoot();
if (i) {
var r = i.convertToNodeSpaceAR(e);
this._previewNode.position = r;
}
} else this.hidePreview();
}
};
e.prototype.update = function() {
this._currentFruit && this._previewNode && cc.isValid(this._previewNode) && this._doFrameUpdatePosition();
};
e.prototype._doFrameUpdatePosition = function() {
if (this._previewNode && cc.isValid(this._previewNode) && this._currentFruit && this._currentFruit.getItem() && this._currentFruit.getItem().node && cc.isValid(this._currentFruit.getItem().node)) {
var t = this.calculatePreviewPosition(this._currentFruit);
if (t) {
var e = l.default.mergerCtr.getNodeFruitRoot();
if (e) {
var i = e.convertToNodeSpaceAR(t);
this._previewNode.position = i;
}
} else this.hidePreview();
}
};
e.prototype.calculatePreviewPosition = function(t) {
var e, i;
if (!(t && t.getItem() && t.getItem().node && cc.isValid(t.getItem().node))) return null;
var r = t.getItem().node.convertToWorldSpaceAR(cc.Vec2.ZERO), n = c.default.FruitRadius[t.getId() - 1] * t.getItem().node.scale, o = l.default.mergerCtr.getFruits();
if (!o || 0 === o.length) {
var a = this.getBottomBoxTopWorldY(n);
return null != a ? cc.v3(r.x, a, 0) : null;
}
var s = -Infinity, d = null;
try {
for (var p = u(o), f = p.next(); !f.done; f = p.next()) {
var h = f.value;
if (h && h.getItem() && h.getItem().node && cc.isValid(h.getItem().node)) {
var g = h.getItem().node.convertToWorldSpaceAR(cc.Vec2.ZERO), F = c.default.FruitRadius[h.getId() - 1] * h.getItem().node.scale, y = r.x - g.x, v = .9 * (F + n), m = v * v, _ = y * y;
if (_ <= m) {
var L = Math.sqrt(m - _), C = g.y + L;
if (C > s) {
s = C;
d = g;
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
f && !f.done && (i = p.return) && i.call(p);
} finally {
if (e) throw e.error;
}
}
if (d) return cc.v3(r.x, s, 0);
var S = this.getBottomBoxTopWorldY(n);
return null != S ? cc.v3(r.x, S, 0) : null;
};
e.prototype.getBottomBoxTopWorldY = function(t) {
var e = l.default.gameStateCtr && l.default.gameStateCtr.getGameView();
if (!e) return null;
var i = e.getNodeWalls();
if (!i || !cc.isValid(i)) return null;
var r = d.default.FindNode(i, "bottomWall");
return r && cc.isValid(r) ? r.getBoundingBoxToWorld().yMax + t : null;
};
e.prototype.playShowAnimation = function(t) {
var e;
if (this._skeleton && cc.isValid(this._skeleton)) if (cc.isValid(this._skeleton.skeletonData) && cc.isValid(null === (e = this._skeleton.skeletonData) || void 0 === e ? void 0 : e.skeletonJson)) {
var i = t.getId() % 5;
0 === i && (i = 5);
var r = "init_" + (i = Math.max(1, Math.min(5, i)));
this._previewNode && (this._previewNode.active = !0);
try {
this._skeleton.setAnimation(0, r, !0);
} catch (t) {
console.error("[GLFruitPlacePreviewCtr] Failed to play animation " + r + ":", t);
try {
this._skeleton.defaultAnimation && this._skeleton.setAnimation(0, this._skeleton.defaultAnimation, !0);
} catch (t) {
console.error("[GLFruitPlacePreviewCtr] Failed to play default animation:", t);
}
}
} else console.warn("[GLFruitPlacePreviewCtr] Skeleton data is invalid"); else console.warn("[GLFruitPlacePreviewCtr] Skeleton is invalid");
};
e.prototype.playHideAnimation = function(t) {
this._skeleton && cc.isValid(this._skeleton) ? t ? t() : this._skeleton.setCompleteListener(null) : t && t();
};
e.prototype.cleanup = function() {
this._currentFruit = null;
this.hidePreview();
};
return e;
}(s.default));
i.default = p;
cc._RF.pop();
}, {
"../../core/GLFruitModelBase": "GLFruitModelBase",
"../GLFruitApp": "GLFruitApp",
"../play/GLFruitItem": "GLFruitItem",
"../tools/GLFruitTools": "GLFruitTools"
} ],
GLFruitPlayClickEffect: [ function(t, e, i) {
"use strict";
cc._RF.push(e, "e642eZLHg9IKLpSeihIjGzt", "GLFruitPlayClickEffect");
var r, n = this && this.__extends || (r = function(t, e) {
return (r = Object.setPrototypeOf || {
__proto__: []
} instanceof Array && function(t, e) {
t.__proto__ = e;
} || function(t, e) {
for (var i in e) Object.prototype.hasOwnProperty.call(e, i) && (t[i] = e[i]);
})(t, e);
}, function(t, e) {
r(t, e);
function i() {
this.constructor = t;
}
t.prototype = null === e ? Object.create(e) : (i.prototype = e.prototype, new i());
}), o = this && this.__decorate || function(t, e, i, r) {
var n, o = arguments.length, a = o < 3 ? e : null === r ? r = Object.getOwnPropertyDescriptor(e, i) : r;
if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) a = Reflect.decorate(t, e, i, r); else for (var u = t.length - 1; u >= 0; u--) (n = t[u]) && (a = (o < 3 ? n(a) : o > 3 ? n(e, i, a) : n(e, i)) || a);
return o > 3 && a && Object.defineProperty(e, i, a), a;
};
Object.defineProperty(i, "__esModule", {
value: !0
});
var a = t("../GLFruitApp"), u = cc._decorator.ccclass, s = function(t) {
n(e, t);
function e() {
return null !== t && t.apply(this, arguments) || this;
}
i = e;
e.prototype.onLoad = function() {
this.node.on(cc.Node.EventType.TOUCH_START, this.onTouchStart, this, !0);
};
e.prototype.onDestroy = function() {
this.node.off(cc.Node.EventType.TOUCH_START, this.onTouchStart, this, !0);
};
e.prototype.onTouchStart = function(t) {
if (!(Date.now() - i.lastClickTime < 500)) {
var e = t.getLocation();
a.default.effectCtr.playClickEffect(cc.v3(e.x, e.y));
i.lastClickTime = Date.now();
}
};
var i;
e.lastClickTime = 0;
return i = o([ u ], e);
}(cc.Component);
i.default = s;
cc._RF.pop();
}, {
"../GLFruitApp": "GLFruitApp"
} ],
GLFruitPlayStateNode: [ function(t, e, i) {
"use strict";
cc._RF.push(e, "48247pZlt1MAKgY7DcgkyII", "GLFruitPlayStateNode");
var r, n = this && this.__extends || (r = function(t, e) {
return (r = Object.setPrototypeOf || {
__proto__: []
} instanceof Array && function(t, e) {
t.__proto__ = e;
} || function(t, e) {
for (var i in e) Object.prototype.hasOwnProperty.call(e, i) && (t[i] = e[i]);
})(t, e);
}, function(t, e) {
r(t, e);
function i() {
this.constructor = t;
}
t.prototype = null === e ? Object.create(e) : (i.prototype = e.prototype, new i());
});
Object.defineProperty(i, "__esModule", {
value: !0
});
var o = t("../../core/fsmNode/GLFruitStateNode"), a = t("../GLFruitApp"), u = t("../traits/GLFruitNotDropLittleFruitWhenXiGuaOnShowCtrl"), s = function(t) {
n(e, t);
function e() {
return null !== t && t.apply(this, arguments) || this;
}
e.prototype.onEnter = function() {
var t = this;
a.default.SafeNextFrame(function() {
a.default.gameStateCtr.getGameView().onGameStart();
t.setNodeSwallowEvent(!1);
u.default.getInstance().isOpen() && u.default.getInstance().afterMergeCheck();
});
};
e.prototype.onExit = function() {
a.default.gameStateCtr.getGameView().onGameEnd();
this.setNodeSwallowEvent(!0);
};
e.prototype.setNodeSwallowEvent = function(t) {
var e = a.default.gameStateCtr.getGameView();
cc.isValid(e) && cc.isValid(e.getNodeSwallowEvent()) && (e.getNodeSwallowEvent().active = t);
};
return e;
}(o.default);
i.default = s;
cc._RF.pop();
}, {
"../../core/fsmNode/GLFruitStateNode": "GLFruitStateNode",
"../GLFruitApp": "GLFruitApp",
"../traits/GLFruitNotDropLittleFruitWhenXiGuaOnShowCtrl": "GLFruitNotDropLittleFruitWhenXiGuaOnShowCtrl"
} ],
GLFruitPopupCtr: [ function(t, e, i) {
"use strict";
cc._RF.push(e, "7aaf3o4JeVNQbpr12PexfG8", "GLFruitPopupCtr");
var r, n = this && this.__values || function(t) {
var e = "function" == typeof Symbol && Symbol.iterator, i = e && t[e], r = 0;
if (i) return i.call(t);
if (t && "number" == typeof t.length) return {
next: function() {
t && r >= t.length && (t = void 0);
return {
value: t && t[r++],
done: !t
};
}
};
throw new TypeError(e ? "Object is not iterable." : "Symbol.iterator is not defined.");
};
Object.defineProperty(i, "__esModule", {
value: !0
});
var o = null === (r = null === window || void 0 === window ? void 0 : window._GLHallClassMap_) || void 0 === r ? void 0 : r.GLShowAdsPopupByCountCtrl, a = t("../configs/GLFruitLangCfg"), u = t("../defines/GLFruitDefine"), s = t("../GLFruitApp"), l = t("./FruitDeadEndShakePopupCtrl"), c = t("../FruitFeature"), d = function() {
function t() {
this._isShowPopup = !1;
}
t.prototype.isShowPopup = function() {
return this._isShowPopup;
};
t.prototype.showRestart = function() {
this.showPopup(a.default.PopupCfg.again, function() {
var t = s.default.user.getScore();
s.default.roundCtr.sendGameEndData(t, 3);
s.default.isReplay = !0;
s.default.Restart();
s.default.audioMgr.playEffect(u.GLFruitAudioDefine.fruit_new_game);
}, function() {});
};
t.prototype.showShakePop = function(t, e, i) {
this.showPopup(a.default.PopupCfg.shake, t, e, i);
};
t.prototype.showBombPop = function(t) {
this.showPopup(a.default.PopupCfg.bomb, t);
};
t.prototype.showDeathRevivePop = function(t, e) {
this.showPopup(a.default.PopupCfg.deathRevive, t, e, e);
};
t.prototype.showGameResult = function(t, e) {
var i;
s.default.roundCtr.sendGameEndData(t, 2);
var r = window.GL;
if (null !== (i = r.gamelobby) && void 0 !== i && i.isChapterFusionMode()) r.gamelobby.openResultView(-1, function() {
!s.default.isExited() && cc.isValid(s.default.Instance.node) && s.default.ExitGame(GL.Const.ExitGameType.FromGameResult);
}, function() {
!s.default.isExited() && cc.isValid(s.default.Instance.node) && s.default.Restart();
}); else {
var n = c.default.isOpen(c.FruitFeat.FruitNewSettleView) ? 7 : 2, o = this.getRoundMaxFruitId();
GL.ResultTool.createResultView(null, n, t, function() {
!s.default.isExited() && cc.isValid(s.default.Instance.node) && s.default.ExitGame(GL.Const.ExitGameType.FromGameResult);
}, function() {
!s.default.isExited() && cc.isValid(s.default.Instance.node) && s.default.Restart();
}, e, null, null, null, o);
}
};
t.prototype.getRoundMaxFruitId = function() {
var t, e, i, r, o, a, u, l = (null === (o = null === (r = null === (i = s.default.user) || void 0 === i ? void 0 : i.getDataVo()) || void 0 === r ? void 0 : r.roundDataVo) || void 0 === o ? void 0 : o.roundMaxFruitLevel) || 0, c = (null === (u = null === (a = s.default.mergerCtr) || void 0 === a ? void 0 : a.getFruits) || void 0 === u ? void 0 : u.call(a)) || [];
try {
for (var d = n(c), p = d.next(); !p.done; p = d.next()) {
var f = p.value;
f && (l = Math.max(l, f.getId()));
}
} catch (e) {
t = {
error: e
};
} finally {
try {
p && !p.done && (e = d.return) && e.call(d);
} finally {
if (t) throw t.error;
}
}
return Math.max(1, Math.min(12, l || 1));
};
t.prototype.showPopup = function(t, e, i, r) {
var n = this;
if (t) {
var a = 0;
t.propId && (a = s.default.propCtr.getPropCount(t.propId));
if (!l.default.getInstance().isOpen() && (null == o ? void 0 : o.isOpen()) && t.propId && a <= 0) {
if (o.checkNoNeedPopup()) {
s.default.adCtr.showRewardsAd(function() {
e && e();
});
return;
}
o.recordPopUpNumber();
}
var u = function() {
if (t.isBtn1Video) if (a > 0) {
s.default.propCtr.addPropNum(t.propId, -1);
n.hidePopup();
e && e();
} else s.default.adCtr.showRewardsAd(function() {
n.hidePopup();
e && e();
}); else {
n.hidePopup();
e && e();
}
}, c = {
label: t.btnText1,
style: GL.Popup.ButtonStyle.Blue,
effect: GL.Popup.ButtonEffectStyle.playNormal1,
adNum: null,
action: function() {
u();
}
};
t.propId && (c.adNum = a);
var d = {
label: t.btnText2,
style: GL.Popup.ButtonStyle.White,
effect: GL.Popup.ButtonEffectStyle.playNormal2,
action: function() {
n.hidePopup();
i && i();
}
}, p = [];
p.push(c);
if (GL.Game.IsPopupTwiceCheckOpen()) {
if (GL.Game.GetPopupTwiceCheck()) {
u();
return;
}
p.push({
label: "Never Ask Again",
style: GL.Popup.ButtonStyle.White,
effect: GL.Popup.ButtonEffectStyle.playNormal2,
action: function() {
GL.Game.SetPopupTwiceCheck(!0);
GL.Game.GameEmit(GL.Game.GameEventType.HidePopup);
}
});
} else p.push(d);
var f = {
icon: t.icon,
title: t.title,
content: t.content,
hideCloseBtn: t.hideCloseBtn,
hideCloseFunc: function() {
n._isShowPopup = !1;
r && r();
},
buttons: p
};
this._isShowPopup = !0;
GL.Game.GameEmit(GL.Game.GameEventType.ShowPopup, f);
}
};
t.prototype.hidePopup = function() {
if (this._isShowPopup) {
this._isShowPopup = !1;
GL.Game.GameEmit(GL.Game.GameEventType.HidePopup);
}
};
t.prototype.clear = function() {
this._isShowPopup = !1;
};
return t;
}();
i.default = d;
cc._RF.pop();
}, {
"../FruitFeature": "FruitFeature",
"../GLFruitApp": "GLFruitApp",
"../configs/GLFruitLangCfg": "GLFruitLangCfg",
"../defines/GLFruitDefine": "GLFruitDefine",
"./FruitDeadEndShakePopupCtrl": "FruitDeadEndShakePopupCtrl"
} ],
GLFruitPreReadyDropStateNode: [ function(t, e, i) {
"use strict";
cc._RF.push(e, "796d2kf5KtB/Yo+3nFu7RXI", "GLFruitPreReadyDropStateNode");
var r, n = this && this.__extends || (r = function(t, e) {
return (r = Object.setPrototypeOf || {
__proto__: []
} instanceof Array && function(t, e) {
t.__proto__ = e;
} || function(t, e) {
for (var i in e) Object.prototype.hasOwnProperty.call(e, i) && (t[i] = e[i]);
})(t, e);
}, function(t, e) {
r(t, e);
function i() {
this.constructor = t;
}
t.prototype = null === e ? Object.create(e) : (i.prototype = e.prototype, new i());
});
Object.defineProperty(i, "__esModule", {
value: !0
});
var o = t("../../../core/fsmNode/GLFruitStateNode"), a = t("../../defines/GLFruitDefine"), u = t("../../GLFruitApp"), s = t("../../traits/GLFruitChangeScaleTraitCtrl"), l = function(t) {
n(e, t);
function e() {
return null !== t && t.apply(this, arguments) || this;
}
e.prototype.onEnter = function() {
var t = this.machine.getOwer(), e = t.getItem();
if (null != (null == e ? void 0 : e.node) && (null == e ? void 0 : e.node.isValid)) {
var i = u.default.mergerCtr.getSpawnDropPositon(t), r = e.node.position, n = i.sub(r), o = n.mag() / 1500, l = a.GLFruitDefine.FruitScale, c = .3;
if (s.default.getInstance().isOpen()) {
l *= s.default.getInstance().getFruitScaleRate(t.getId());
c = o;
}
cc.tween(e.node).parallel(cc.tween().by(o, {
position: n
}), cc.tween().to(c, {
scale: l
})).call(function() {
if (e && e.isValid && e.node && e.node.isValid && null != t) {
e.node.scale = l;
t.position = u.default.mergerCtr.getSpawnDropPositon(t);
t.runReadyDropState();
}
}).start();
}
};
e.prototype.onExit = function() {};
return e;
}(o.default);
i.default = l;
cc._RF.pop();
}, {
"../../../core/fsmNode/GLFruitStateNode": "GLFruitStateNode",
"../../GLFruitApp": "GLFruitApp",
"../../defines/GLFruitDefine": "GLFruitDefine",
"../../traits/GLFruitChangeScaleTraitCtrl": "GLFruitChangeScaleTraitCtrl"
} ],
GLFruitPropBtnItem: [ function(t, e, i) {
"use strict";
cc._RF.push(e, "ca5705bIX9CDad5Vkj9gIq9", "GLFruitPropBtnItem");
var r, n = this && this.__extends || (r = function(t, e) {
return (r = Object.setPrototypeOf || {
__proto__: []
} instanceof Array && function(t, e) {
t.__proto__ = e;
} || function(t, e) {
for (var i in e) Object.prototype.hasOwnProperty.call(e, i) && (t[i] = e[i]);
})(t, e);
}, function(t, e) {
r(t, e);
function i() {
this.constructor = t;
}
t.prototype = null === e ? Object.create(e) : (i.prototype = e.prototype, new i());
}), o = this && this.__decorate || function(t, e, i, r) {
var n, o = arguments.length, a = o < 3 ? e : null === r ? r = Object.getOwnPropertyDescriptor(e, i) : r;
if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) a = Reflect.decorate(t, e, i, r); else for (var u = t.length - 1; u >= 0; u--) (n = t[u]) && (a = (o < 3 ? n(a) : o > 3 ? n(e, i, a) : n(e, i)) || a);
return o > 3 && a && Object.defineProperty(e, i, a), a;
};
Object.defineProperty(i, "__esModule", {
value: !0
});
var a = t("../../GLFruitApp"), u = t("../../play/GLFruitProp"), s = t("../../tools/GLFruitTools"), l = t("./GLFruitPropCornerItem"), c = cc._decorator, d = c.ccclass, p = c.property, f = function(t) {
n(e, t);
function e() {
var e = null !== t && t.apply(this, arguments) || this;
e.propId = 1001;
e.propCornerItem = null;
e.prop = null;
return e;
}
e.prototype.onLoad = function() {
var t = s.default.FindNode(this.node, "GLFruitPropCornerItem");
t && (this.propCornerItem = t.getComponent(l.default));
};
e.prototype.onEnable = function() {
this.prop = a.default.propCtr.getProp(this.propId);
if (this.prop) {
this.prop.on(u.default.Event.ChangedNum, this.onEventChangedNum, this);
this.onEventChangedNum();
}
};
e.prototype.onDisable = function() {
this.prop && this.prop.off(u.default.Event.ChangedNum, this.onEventChangedNum, this);
};
e.prototype.onEventChangedNum = function() {
for (var t = [], e = 0; e < arguments.length; e++) t[e] = arguments[e];
if (this.prop && this.propCornerItem) {
this.propCornerItem.getNodeInfinity().active = !1;
this.propCornerItem.getNodeNum().active = this.prop.getNum() > 0;
this.propCornerItem.getNodeVideo().active = !this.propCornerItem.getNodeNum().active;
this.propCornerItem.getLabelNum().string = this.prop.getNum().toString();
}
};
o([ p ], e.prototype, "propId", void 0);
return o([ d ], e);
}(cc.Component);
i.default = f;
cc._RF.pop();
}, {
"../../GLFruitApp": "GLFruitApp",
"../../play/GLFruitProp": "GLFruitProp",
"../../tools/GLFruitTools": "GLFruitTools",
"./GLFruitPropCornerItem": "GLFruitPropCornerItem"
} ],
GLFruitPropButton: [ function(t, e, i) {
"use strict";
cc._RF.push(e, "e354brnLntM2oQteghrIJRP", "GLFruitPropButton");
var r, n = this && this.__extends || (r = function(t, e) {
return (r = Object.setPrototypeOf || {
__proto__: []
} instanceof Array && function(t, e) {
t.__proto__ = e;
} || function(t, e) {
for (var i in e) Object.prototype.hasOwnProperty.call(e, i) && (t[i] = e[i]);
})(t, e);
}, function(t, e) {
r(t, e);
function i() {
this.constructor = t;
}
t.prototype = null === e ? Object.create(e) : (i.prototype = e.prototype, new i());
}), o = this && this.__decorate || function(t, e, i, r) {
var n, o = arguments.length, a = o < 3 ? e : null === r ? r = Object.getOwnPropertyDescriptor(e, i) : r;
if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) a = Reflect.decorate(t, e, i, r); else for (var u = t.length - 1; u >= 0; u--) (n = t[u]) && (a = (o < 3 ? n(a) : o > 3 ? n(e, i, a) : n(e, i)) || a);
return o > 3 && a && Object.defineProperty(e, i, a), a;
};
Object.defineProperty(i, "__esModule", {
value: !0
});
var a = cc._decorator, u = a.ccclass, s = (a.property, function(t) {
n(e, t);
function e() {
var e = null !== t && t.apply(this, arguments) || this;
e._button = null;
e._shadow = null;
e._background = null;
e._icon = null;
e._originColorMap = new Map();
e._grayColorMap = new Map();
return e;
}
e.prototype.onLoad = function() {
this._shadow = this.node.getChildByName("Shadow");
this._background = this.node.getChildByName("Background");
this._icon = this._background.getChildByName("icon");
this._button = this.node.getComponent(cc.Button);
this._originColorMap.set(this._shadow, this._shadow.color);
this._originColorMap.set(this._background, this._background.color);
this._originColorMap.set(this._icon, this._icon.color);
this._grayColorMap.set(this._shadow, new cc.Color(153, 153, 153, 255));
this._grayColorMap.set(this._background, new cc.Color(229, 229, 229, 255));
this._grayColorMap.set(this._icon, new cc.Color(153, 153, 153, 255));
};
Object.defineProperty(e.prototype, "interactable", {
set: function(t) {
if (this._button) {
this._button.interactable = t;
if (t) {
this._shadow.color = this._originColorMap.get(this._shadow);
this._background.color = this._originColorMap.get(this._background);
this._icon.color = this._originColorMap.get(this._icon);
} else {
this._shadow.color = this._grayColorMap.get(this._shadow);
this._background.color = this._grayColorMap.get(this._background);
this._icon.color = this._grayColorMap.get(this._icon);
}
}
},
enumerable: !1,
configurable: !0
});
return o([ u ], e);
}(cc.Component));
i.default = s;
cc._RF.pop();
}, {} ],
GLFruitPropCornerItem: [ function(t, e, i) {
"use strict";
cc._RF.push(e, "6c3fbuexadHgqlJkhfj3Zzi", "GLFruitPropCornerItem");
var r, n = this && this.__extends || (r = function(t, e) {
return (r = Object.setPrototypeOf || {
__proto__: []
} instanceof Array && function(t, e) {
t.__proto__ = e;
} || function(t, e) {
for (var i in e) Object.prototype.hasOwnProperty.call(e, i) && (t[i] = e[i]);
})(t, e);
}, function(t, e) {
r(t, e);
function i() {
this.constructor = t;
}
t.prototype = null === e ? Object.create(e) : (i.prototype = e.prototype, new i());
}), o = this && this.__decorate || function(t, e, i, r) {
var n, o = arguments.length, a = o < 3 ? e : null === r ? r = Object.getOwnPropertyDescriptor(e, i) : r;
if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) a = Reflect.decorate(t, e, i, r); else for (var u = t.length - 1; u >= 0; u--) (n = t[u]) && (a = (o < 3 ? n(a) : o > 3 ? n(e, i, a) : n(e, i)) || a);
return o > 3 && a && Object.defineProperty(e, i, a), a;
};
Object.defineProperty(i, "__esModule", {
value: !0
});
var a = t("../../tools/GLFruitTools"), u = cc._decorator, s = u.ccclass, l = (u.property, 
function(t) {
n(e, t);
function e() {
var e = null !== t && t.apply(this, arguments) || this;
e.nodeNum = null;
e.nodeInfinity = null;
e.nodeVideo = null;
e.labelNum = null;
return e;
}
e.prototype.onLoad = function() {
this.nodeNum = a.default.FindNode(this.node, "nodeNum");
this.nodeInfinity = a.default.FindNode(this.node, "nodeInfinity");
this.nodeVideo = a.default.FindNode(this.node, "nodeVideo");
this.labelNum = a.default.FindNode(this.nodeNum, "labelNum").getComponent(cc.Label);
};
e.prototype.getNodeNum = function() {
return this.nodeNum;
};
e.prototype.getNodeInfinity = function() {
return this.nodeInfinity;
};
e.prototype.getNodeVideo = function() {
return this.nodeVideo;
};
e.prototype.getLabelNum = function() {
return this.labelNum;
};
return o([ s ], e);
}(cc.Component));
i.default = l;
cc._RF.pop();
}, {
"../../tools/GLFruitTools": "GLFruitTools"
} ],
GLFruitPropCtr: [ function(t, e, i) {
"use strict";
cc._RF.push(e, "2258bM5QwxKcK6RDx3xR+SL", "GLFruitPropCtr");
var r, n = this && this.__extends || (r = function(t, e) {
return (r = Object.setPrototypeOf || {
__proto__: []
} instanceof Array && function(t, e) {
t.__proto__ = e;
} || function(t, e) {
for (var i in e) Object.prototype.hasOwnProperty.call(e, i) && (t[i] = e[i]);
})(t, e);
}, function(t, e) {
r(t, e);
function i() {
this.constructor = t;
}
t.prototype = null === e ? Object.create(e) : (i.prototype = e.prototype, new i());
}), o = this && this.__values || function(t) {
var e = "function" == typeof Symbol && Symbol.iterator, i = e && t[e], r = 0;
if (i) return i.call(t);
if (t && "number" == typeof t.length) return {
next: function() {
t && r >= t.length && (t = void 0);
return {
value: t && t[r++],
done: !t
};
}
};
throw new TypeError(e ? "Object is not iterable." : "Symbol.iterator is not defined.");
};
Object.defineProperty(i, "__esModule", {
value: !0
});
var a = t("../../core/GLFruitModelBase"), u = t("../defines/GLFruitDefine"), s = t("../GLFruitApp"), l = t("../GLFruitRoundLogEventCtr"), c = t("../play/GLFruitItem"), d = t("../play/GLFruitProp"), p = t("../tools/GLFruitTools"), f = t("../traits/GLFruitTwoFruitOnceTraitCtrl"), h = t("./FruitUsePropNoDieCtrl"), g = t("../traits/GLFruitAddFruitChoiceListTraitCtrl"), F = t("../traits/GLFruitUseItemDirectTraitCtrl"), y = function(t) {
n(e, t);
function e() {
var e = null !== t && t.apply(this, arguments) || this;
e.propMap = {};
e.propVos = [];
e._isUseingShakeProp = !1;
return e;
}
e.prototype.getIsUseingShakeProp = function() {
return this._isUseingShakeProp;
};
e.prototype.clearUseingShakePropState = function() {
console.log("GLFruitPropCtr clearUseingShakePropState 00 ", this._isUseingShakeProp);
this._isUseingShakeProp && (this._isUseingShakeProp = !1);
console.log("GLFruitPropCtr clearUseingShakePropState 11 ", this._isUseingShakeProp);
};
e.prototype.init = function(t, e) {
var i = this;
this.propVos = t;
t.forEach(function(t) {
i.propMap[t.id] ? i.getProp(t.id).setNum(t.num) : i.propMap[t.id] = new d.default().init(t);
});
e && this.initBeginnerDatas();
};
e.prototype.initBeginnerDatas = function() {
this.getProp(u.GLFruitPropIdDefine.Bomb).add(u.GLFruitDefine.PropFreeCount);
this.getProp(u.GLFruitPropIdDefine.Shake).add(u.GLFruitDefine.PropFreeCount);
this.propVos.push(this.getProp(u.GLFruitPropIdDefine.Bomb).getDataVo());
this.propVos.push(this.getProp(u.GLFruitPropIdDefine.Shake).getDataVo());
};
e.prototype.getProp = function(t) {
this.propMap[t] || (this.propMap[t] = new d.default().init(d.default.CreateVo(t, 0)));
return this.propMap[t];
};
e.prototype.getPropCount = function(t) {
var e = this.getProp(t);
return e ? e.getNum() : 0;
};
e.prototype.addPropNum = function(t, e) {
var i = this.getProp(t);
i && i.add(e);
};
e.prototype.getPropMap = function() {
return this.propMap;
};
e.prototype.isWaitingTwoFruitSecondDrop = function() {
var t = f.default.getInstance();
return t.isOpen() && t.isWaitingSecondDrop();
};
e.prototype.usePropBomb = function() {
if (this.isWaitingTwoFruitSecondDrop()) console.log("【GLFruitTwoFruitOnce】等待第二个水果下落时禁止使用炸弹道具"); else {
var t = this.getProp(u.GLFruitPropIdDefine.Bomb);
if (0 != t.getNum()) {
t.add(-1);
t.addUsageNum(1);
s.default.roundCtr.useProp(t.getId(), !1);
l.default.getInstance().useItem(t.getId(), !1);
s.default.user.saveData();
s.default.user.syncGameData();
s.default.gameStateCtr.runBombState();
} else {
if (F.default.getInstance().tryUsePropBombDirect()) return;
s.default.popupCtr.showBombPop(function() {
t.addUsageNum(1);
s.default.roundCtr.useProp(t.getId(), !0);
l.default.getInstance().useItem(t.getId(), !0);
s.default.user.saveData();
s.default.user.syncGameData();
s.default.gameStateCtr.runBombState();
});
}
}
};
e.prototype.usePropShake = function() {
var t = this;
if (this.isWaitingTwoFruitSecondDrop()) console.log("【GLFruitTwoFruitOnce】等待第二个水果下落时禁止使用摇晃道具"); else {
var e = this.getProp(u.GLFruitPropIdDefine.Shake);
h.default.getInstance().onBeforeUseShakeProp();
if (0 != e.getNum()) {
e.add(-1);
e.addUsageNum(1);
s.default.roundCtr.useProp(e.getId(), !1);
l.default.getInstance().useItem(e.getId(), !1);
s.default.user.saveData();
s.default.user.syncGameData();
s.default.gameStateCtr.runShakeState();
s.default.gameStateCtr.setShakeStateFromAd(!1);
} else {
if (F.default.getInstance().tryUsePropShakeDirect()) return;
this._isUseingShakeProp = !0;
console.log("GLFruitPropCtr usePropShake", this._isUseingShakeProp);
s.default.popupCtr.showShakePop(function() {
e.addUsageNum(1);
s.default.roundCtr.useProp(e.getId(), !0);
l.default.getInstance().useItem(e.getId(), !0);
s.default.user.saveData();
s.default.user.syncGameData();
s.default.gameStateCtr.runShakeState();
s.default.gameStateCtr.setShakeStateFromAd(!0);
}, function() {
t._isUseingShakeProp = !1;
}, function() {
t._isUseingShakeProp = !1;
});
}
}
};
e.prototype.autoShakeWithoutCost = function() {
h.default.getInstance().onBeforeUseShakeProp();
s.default.gameStateCtr.runShakeState();
s.default.gameStateCtr.setShakeStateFromAd(!1);
};
e.prototype.onCheckClick = function(t) {
var e, i, r, n, a;
if (g.default.getInstance().isOpen()) {
var u = g.default.getInstance().getExchangeClickNode();
if (null != u && u.active) {
var l = g.default.getInstance().getNextFruits();
if (null != l) for (var d = 1; d < g.QUEUE_MAX_LENGTH - 1; d++) if (null === (a = null === (n = null === (r = l[d]) || void 0 === r ? void 0 : r.getItem()) || void 0 === n ? void 0 : n.node) || void 0 === a ? void 0 : a.active) {
var f = l[d].getItem().node.convertToWorldSpaceAR(cc.Vec3.ZERO), h = c.default.getFruitRadius(l[d].getId()) * l[d].getItem().node.scale;
if (t.sub(f).mag() <= h) {
g.default.getInstance().exchangeFruit(d);
break;
}
}
return;
}
}
var F = s.default.mergerCtr.getFruits();
try {
for (var y = o(F), v = y.next(); !v.done; v = y.next()) {
var m = v.value;
if (m) {
var _ = m.getItem();
if (_ && _.node && cc.isValid(_.node)) {
f = _.node.convertToWorldSpaceAR(cc.Vec3.ZERO), h = c.default.getFruitRadius(m.getId()) * _.node.scale;
if (t.sub(f).mag() <= h) {
s.default.gameStateCtr.runPlayState();
s.default.effectCtr.playMergeNewEffect(cc.v3(t.x, t.y), p.default.GetFruitMergerEffectNameById(m.getId()));
s.default.mergerCtr.removeFruit(m);
break;
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
v && !v.done && (i = y.return) && i.call(y);
} finally {
if (e) throw e.error;
}
}
};
e.prototype.clear = function() {
this.propMap = {};
this.propVos = [];
this._isUseingShakeProp = !1;
};
e.Event = {
UseShakeProp: "UseShakeProp"
};
return e;
}(a.default);
i.default = y;
cc._RF.pop();
}, {
"../../core/GLFruitModelBase": "GLFruitModelBase",
"../GLFruitApp": "GLFruitApp",
"../GLFruitRoundLogEventCtr": "GLFruitRoundLogEventCtr",
"../defines/GLFruitDefine": "GLFruitDefine",
"../play/GLFruitItem": "GLFruitItem",
"../play/GLFruitProp": "GLFruitProp",
"../tools/GLFruitTools": "GLFruitTools",
"../traits/GLFruitAddFruitChoiceListTraitCtrl": "GLFruitAddFruitChoiceListTraitCtrl",
"../traits/GLFruitTwoFruitOnceTraitCtrl": "GLFruitTwoFruitOnceTraitCtrl",
"../traits/GLFruitUseItemDirectTraitCtrl": "GLFruitUseItemDirectTraitCtrl",
"./FruitUsePropNoDieCtrl": "FruitUsePropNoDieCtrl"
} ],
GLFruitProp: [ function(t, e, i) {
"use strict";
cc._RF.push(e, "eb70eZilMZCTqg+sJgowMy1", "GLFruitProp");
var r, n = this && this.__extends || (r = function(t, e) {
return (r = Object.setPrototypeOf || {
__proto__: []
} instanceof Array && function(t, e) {
t.__proto__ = e;
} || function(t, e) {
for (var i in e) Object.prototype.hasOwnProperty.call(e, i) && (t[i] = e[i]);
})(t, e);
}, function(t, e) {
r(t, e);
function i() {
this.constructor = t;
}
t.prototype = null === e ? Object.create(e) : (i.prototype = e.prototype, new i());
});
Object.defineProperty(i, "__esModule", {
value: !0
});
i.GLFruitPropVo = void 0;
var o = t("../../core/GLFruitModelBase"), a = function() {
this.id = 0;
this.num = 0;
this.usageNum = 0;
};
i.GLFruitPropVo = a;
var u = function(t) {
n(e, t);
function e() {
var e = t.call(this) || this;
e.dataVo = null;
return e;
}
e.CreateVo = function(t, e) {
var i = new a();
i.id = t;
i.num = e;
return i;
};
e.prototype.init = function(t) {
this.dataVo = t;
return this;
};
e.prototype.add = function(t) {
this.dataVo.num += t;
this.emit(e.Event.ChangedNum, this, t);
};
e.prototype.setNum = function(t) {
this.dataVo.num = t;
};
e.prototype.getNum = function() {
return this.dataVo.num;
};
e.prototype.getId = function() {
return this.dataVo.id;
};
e.prototype.getDataVo = function() {
return this.dataVo;
};
e.prototype.getUsageNum = function() {
return this.dataVo.usageNum;
};
e.prototype.addUsageNum = function(t) {
this.dataVo.usageNum += t;
};
var i;
e.Event = ((i = function() {}).ChangedNum = "ChangedNum", i);
return e;
}(o.default);
i.default = u;
cc._RF.pop();
}, {
"../../core/GLFruitModelBase": "GLFruitModelBase"
} ],
GLFruitRandomWeightCtr: [ function(t, e, i) {
"use strict";
cc._RF.push(e, "22fd4/YGAdMzJh+kZFwX1ld", "GLFruitRandomWeightCtr");
var r, n = this && this.__extends || (r = function(t, e) {
return (r = Object.setPrototypeOf || {
__proto__: []
} instanceof Array && function(t, e) {
t.__proto__ = e;
} || function(t, e) {
for (var i in e) Object.prototype.hasOwnProperty.call(e, i) && (t[i] = e[i]);
})(t, e);
}, function(t, e) {
r(t, e);
function i() {
this.constructor = t;
}
t.prototype = null === e ? Object.create(e) : (i.prototype = e.prototype, new i());
}), o = this && this.__awaiter || function(t, e, i, r) {
return new (i || (i = Promise))(function(n, o) {
function a(t) {
try {
s(r.next(t));
} catch (t) {
o(t);
}
}
function u(t) {
try {
s(r.throw(t));
} catch (t) {
o(t);
}
}
function s(t) {
t.done ? n(t.value) : (e = t.value, e instanceof i ? e : new i(function(t) {
t(e);
})).then(a, u);
var e;
}
s((r = r.apply(t, e || [])).next());
});
}, a = this && this.__generator || function(t, e) {
var i, r, n, o, a = {
label: 0,
sent: function() {
if (1 & n[0]) throw n[1];
return n[1];
},
trys: [],
ops: []
};
return o = {
next: u(0),
throw: u(1),
return: u(2)
}, "function" == typeof Symbol && (o[Symbol.iterator] = function() {
return this;
}), o;
function u(t) {
return function(e) {
return s([ t, e ]);
};
}
function s(o) {
if (i) throw new TypeError("Generator is already executing.");
for (;a; ) try {
if (i = 1, r && (n = 2 & o[0] ? r.return : o[0] ? r.throw || ((n = r.return) && n.call(r), 
0) : r.next) && !(n = n.call(r, o[1])).done) return n;
(r = 0, n) && (o = [ 2 & o[0], n.value ]);
switch (o[0]) {
case 0:
case 1:
n = o;
break;

case 4:
a.label++;
return {
value: o[1],
done: !1
};

case 5:
a.label++;
r = o[1];
o = [ 0 ];
continue;

case 7:
o = a.ops.pop();
a.trys.pop();
continue;

default:
if (!(n = a.trys, n = n.length > 0 && n[n.length - 1]) && (6 === o[0] || 2 === o[0])) {
a = 0;
continue;
}
if (3 === o[0] && (!n || o[1] > n[0] && o[1] < n[3])) {
a.label = o[1];
break;
}
if (6 === o[0] && a.label < n[1]) {
a.label = n[1];
n = o;
break;
}
if (n && a.label < n[2]) {
a.label = n[2];
a.ops.push(o);
break;
}
n[2] && a.ops.pop();
a.trys.pop();
continue;
}
o = e.call(t, a);
} catch (t) {
o = [ 6, t ];
r = 0;
} finally {
i = n = 0;
}
if (5 & o[0]) throw o[1];
return {
value: o[0] ? o[1] : void 0,
done: !0
};
}
}, u = this && this.__values || function(t) {
var e = "function" == typeof Symbol && Symbol.iterator, i = e && t[e], r = 0;
if (i) return i.call(t);
if (t && "number" == typeof t.length) return {
next: function() {
t && r >= t.length && (t = void 0);
return {
value: t && t[r++],
done: !t
};
}
};
throw new TypeError(e ? "Object is not iterable." : "Symbol.iterator is not defined.");
}, s = this && this.__read || function(t, e) {
var i = "function" == typeof Symbol && t[Symbol.iterator];
if (!i) return t;
var r, n, o = i.call(t), a = [];
try {
for (;(void 0 === e || e-- > 0) && !(r = o.next()).done; ) a.push(r.value);
} catch (t) {
n = {
error: t
};
} finally {
try {
r && !r.done && (i = o.return) && i.call(o);
} finally {
if (n) throw n.error;
}
}
return a;
};
Object.defineProperty(i, "__esModule", {
value: !0
});
var l = t("../../../GLFruitApp"), c = t("../../../tools/GLFruitTools"), d = t("../../GLFruitFuncBase"), p = t("../../../traits/GLFruitNotDropLittleFruitWhenXiGuaOnShowCtrl"), f = function(t) {
n(e, t);
function e() {
var e = null !== t && t.apply(this, arguments) || this;
e._weightMap = {};
e._isLoaded = !1;
return e;
}
e.prototype.loadAsset = function() {
return o(this, void 0, void 0, function() {
var t, e, i, r, n, o, s, c;
return a(this, function(a) {
switch (a.label) {
case 0:
a.trys.push([ 0, 2, 3, 4 ]);
console.log("[GLFruitRandomWeightCtr] 开始加载配置文件...");
return [ 4, l.default.assetCtr.loadJson("assets/experiment/GLFruitRandomWeight/tbfruitweight") ];

case 1:
if ((t = a.sent()) && t.json && t.json.length > 0) {
console.log("[GLFruitRandomWeightCtr] 配置文件加载成功，数据条数:", t.json.length);
try {
for (e = u(t.json), i = e.next(); !i.done; i = e.next()) {
r = i.value;
n = r.GrundLevel.join(",");
this._weightMap[n] ? this._weightMap[n].push(r) : this._weightMap[n] = [ r ];
}
} catch (t) {
s = {
error: t
};
} finally {
try {
i && !i.done && (c = e.return) && c.call(e);
} finally {
if (s) throw s.error;
}
}
} else {
console.warn("[GLFruitRandomWeightCtr] 配置文件为空或格式错误，使用默认配置");
this.setupDefaultConfig();
}
return [ 3, 4 ];

case 2:
o = a.sent();
console.error("[GLFruitRandomWeightCtr] 配置文件加载失败:", o);
this.setupDefaultConfig();
return [ 3, 4 ];

case 3:
this._isLoaded = !0;
console.log("[GLFruitRandomWeightCtr] 配置加载完成，权重映射表键值:", Object.keys(this._weightMap));
return [ 7 ];

case 4:
return [ 2 ];
}
});
});
};
e.prototype.setupDefaultConfig = function() {
var t, e;
console.log("[GLFruitRandomWeightCtr] 设置默认配置...");
try {
for (var i = u([ {
ID: 1011,
FruitLevel: 1,
Weight: 5,
GrundLevel: [ 1, 2, 3, 4, 5 ],
HardLevel: 1
}, {
ID: 1012,
FruitLevel: 2,
Weight: 10,
GrundLevel: [ 1, 2, 3, 4, 5 ],
HardLevel: 1
}, {
ID: 1013,
FruitLevel: 3,
Weight: 50,
GrundLevel: [ 1, 2, 3, 4, 5 ],
HardLevel: 1
}, {
ID: 1014,
FruitLevel: 4,
Weight: 100,
GrundLevel: [ 1, 2, 3, 4, 5 ],
HardLevel: 1
}, {
ID: 1015,
FruitLevel: 5,
Weight: 100,
GrundLevel: [ 1, 2, 3, 4, 5 ],
HardLevel: 1
}, {
ID: 1016,
FruitLevel: 6,
Weight: 100,
GrundLevel: [ 1, 2, 3, 4, 5 ],
HardLevel: 1
}, {
ID: 1061,
FruitLevel: 1,
Weight: 5,
GrundLevel: [ 6 ],
HardLevel: 1
}, {
ID: 1062,
FruitLevel: 2,
Weight: 10,
GrundLevel: [ 6 ],
HardLevel: 1
}, {
ID: 1063,
FruitLevel: 3,
Weight: 50,
GrundLevel: [ 6 ],
HardLevel: 1
}, {
ID: 1064,
FruitLevel: 4,
Weight: 100,
GrundLevel: [ 6 ],
HardLevel: 1
}, {
ID: 1065,
FruitLevel: 5,
Weight: 100,
GrundLevel: [ 6 ],
HardLevel: 1
}, {
ID: 1066,
FruitLevel: 6,
Weight: 100,
GrundLevel: [ 6 ],
HardLevel: 1
}, {
ID: 1071,
FruitLevel: 1,
Weight: 5,
GrundLevel: [ 7 ],
HardLevel: 1
}, {
ID: 1072,
FruitLevel: 2,
Weight: 10,
GrundLevel: [ 7 ],
HardLevel: 1
}, {
ID: 1073,
FruitLevel: 3,
Weight: 50,
GrundLevel: [ 7 ],
HardLevel: 1
}, {
ID: 1074,
FruitLevel: 4,
Weight: 100,
GrundLevel: [ 7 ],
HardLevel: 1
}, {
ID: 1075,
FruitLevel: 5,
Weight: 150,
GrundLevel: [ 7 ],
HardLevel: 1
}, {
ID: 1076,
FruitLevel: 6,
Weight: 150,
GrundLevel: [ 7 ],
HardLevel: 1
}, {
ID: 1081,
FruitLevel: 1,
Weight: 5,
GrundLevel: [ 8 ],
HardLevel: 1
}, {
ID: 1082,
FruitLevel: 2,
Weight: 10,
GrundLevel: [ 8 ],
HardLevel: 1
}, {
ID: 1083,
FruitLevel: 3,
Weight: 50,
GrundLevel: [ 8 ],
HardLevel: 1
}, {
ID: 1084,
FruitLevel: 4,
Weight: 150,
GrundLevel: [ 8 ],
HardLevel: 1
}, {
ID: 1085,
FruitLevel: 5,
Weight: 150,
GrundLevel: [ 8 ],
HardLevel: 1
}, {
ID: 1086,
FruitLevel: 6,
Weight: 150,
GrundLevel: [ 8 ],
HardLevel: 1
}, {
ID: 1091,
FruitLevel: 1,
Weight: 5,
GrundLevel: [ 9 ],
HardLevel: 1
}, {
ID: 1092,
FruitLevel: 2,
Weight: 10,
GrundLevel: [ 9 ],
HardLevel: 1
}, {
ID: 1093,
FruitLevel: 3,
Weight: 50,
GrundLevel: [ 9 ],
HardLevel: 1
}, {
ID: 1094,
FruitLevel: 4,
Weight: 100,
GrundLevel: [ 9 ],
HardLevel: 1
}, {
ID: 1095,
FruitLevel: 5,
Weight: 200,
GrundLevel: [ 9 ],
HardLevel: 1
}, {
ID: 1096,
FruitLevel: 6,
Weight: 200,
GrundLevel: [ 9 ],
HardLevel: 1
}, {
ID: 1101,
FruitLevel: 1,
Weight: 5,
GrundLevel: [ 10, 11, 12 ],
HardLevel: 1
}, {
ID: 1102,
FruitLevel: 2,
Weight: 10,
GrundLevel: [ 10, 11, 12 ],
HardLevel: 1
}, {
ID: 1103,
FruitLevel: 3,
Weight: 20,
GrundLevel: [ 10, 11, 12 ],
HardLevel: 1
}, {
ID: 1104,
FruitLevel: 4,
Weight: 50,
GrundLevel: [ 10, 11, 12 ],
HardLevel: 1
}, {
ID: 1105,
FruitLevel: 5,
Weight: 200,
GrundLevel: [ 10, 11, 12 ],
HardLevel: 1
}, {
ID: 1106,
FruitLevel: 6,
Weight: 200,
GrundLevel: [ 10, 11, 12 ],
HardLevel: 1
} ]), r = i.next(); !r.done; r = i.next()) {
var n = r.value, o = n.GrundLevel.join(",");
this._weightMap[o] ? this._weightMap[o].push(n) : this._weightMap[o] = [ n ];
}
} catch (e) {
t = {
error: e
};
} finally {
try {
r && !r.done && (e = i.return) && e.call(i);
} finally {
if (t) throw t.error;
}
}
console.log("[GLFruitRandomWeightCtr] 默认配置设置完成");
};
e.prototype.getFruitId = function() {
var t, e, i, r;
this.addAutoLog();
var n = this.getMaxFruitId(), o = l.default.mergerCtr.getDropMaxFruitId();
console.log("GLFruitRandomWeightCtr getFruitId groundLevel = " + n + " maxDropId = " + o);
var a = 1;
p.default.getInstance().isOpen() && p.default.getInstance().canNotDropLittleFruit() && (a = p.default.getInstance().getLimitFruitId() + 1);
var d = [];
try {
for (var f = u(Object.entries(this._weightMap)), h = f.next(); !h.done; h = f.next()) {
var g = s(h.value, 2), F = (g[0], g[1]);
-1 != F[0].GrundLevel.indexOf(n) && (d = F);
}
} catch (e) {
t = {
error: e
};
} finally {
try {
h && !h.done && (e = f.return) && e.call(f);
} finally {
if (t) throw t.error;
}
}
this.ensureDropLevelConfig(d, o);
var y = [];
try {
for (var v = u(d), m = v.next(); !m.done; m = v.next()) {
var _ = m.value;
_.FruitLevel >= a && _.FruitLevel <= o ? y.push(_.Weight) : y.push(0);
}
} catch (t) {
i = {
error: t
};
} finally {
try {
m && !m.done && (r = v.return) && r.call(v);
} finally {
if (i) throw i.error;
}
}
var L = this.getWeightRandomIndex(y);
if (L >= 0 && d.length > L) {
console.log("GLFruitRandomWeightCtr getFruitId randomIndex = " + L + " fruitWeightConfigArr[randomIndex].FruitLevel = " + d[L].FruitLevel);
return d[L].FruitLevel;
}
return c.default.getRandomInt(a, o + 1);
};
e.prototype.ensureDropLevelConfig = function(t, e) {
var i, r;
if (t && 0 !== t.length && !(e <= 5)) {
var n = 0, o = null;
try {
for (var a = u(t), s = a.next(); !s.done; s = a.next()) {
var l = s.value;
if (l.FruitLevel > n) {
n = l.FruitLevel;
o = l;
}
}
} catch (t) {
i = {
error: t
};
} finally {
try {
s && !s.done && (r = a.return) && r.call(a);
} finally {
if (i) throw i.error;
}
}
if (o) for (var c = function(e) {
if (t.some(function(t) {
return t.FruitLevel === e;
})) return "continue";
t.push({
ID: o.ID + (e - o.FruitLevel),
FruitLevel: e,
Weight: o.Weight,
GrundLevel: o.GrundLevel.slice(),
HardLevel: o.HardLevel
});
console.log("[GLFruitRandomWeightCtr] 补齐掉落档 FruitLevel=" + e + " Weight=" + o.Weight);
}, d = n + 1; d <= e; d++) c(d);
}
};
e.prototype.isLoaded = function() {
return this._isLoaded;
};
e.prototype.clear = function() {
this._weightMap = {};
};
e.prototype.getWeightRandomIndex = function(t) {
if (t.length > 0) {
var e = t.reduce(function(t, e) {
return t + e;
}, 0), i = Math.random() * e, r = 0;
console.log("GLFruitRandomWeightCtr getWeightRandomIndex random = " + i + " weightArr = " + t + " totalWeight = " + e);
for (var n = 0; n < t.length; n++) if (i <= (r += t[n])) return n;
}
return -1;
};
e.prototype.getMaxFruitId = function() {
var t, e, i = l.default.mergerCtr.getFruits();
if (0 === i.length) return 1;
var r = 1;
try {
for (var n = u(i), o = n.next(); !o.done; o = n.next()) {
var a = o.value;
a.getId() > r && (r = a.getId());
}
} catch (e) {
t = {
error: e
};
} finally {
try {
o && !o.done && (e = n.return) && e.call(n);
} finally {
if (t) throw t.error;
}
}
return Math.min(r, 11);
};
e.featureName = "isOpenGLFruitRandomWeight";
return e;
}(d.default);
i.default = f;
cc._RF.pop();
}, {
"../../../GLFruitApp": "GLFruitApp",
"../../../tools/GLFruitTools": "GLFruitTools",
"../../../traits/GLFruitNotDropLittleFruitWhenXiGuaOnShowCtrl": "GLFruitNotDropLittleFruitWhenXiGuaOnShowCtrl",
"../../GLFruitFuncBase": "GLFruitFuncBase"
} ],
GLFruitReadyDropStateNode: [ function(t, e, i) {
"use strict";
cc._RF.push(e, "80de9ZsmjhM8pdBB+93bOwG", "GLFruitReadyDropStateNode");
var r, n = this && this.__extends || (r = function(t, e) {
return (r = Object.setPrototypeOf || {
__proto__: []
} instanceof Array && function(t, e) {
t.__proto__ = e;
} || function(t, e) {
for (var i in e) Object.prototype.hasOwnProperty.call(e, i) && (t[i] = e[i]);
})(t, e);
}, function(t, e) {
r(t, e);
function i() {
this.constructor = t;
}
t.prototype = null === e ? Object.create(e) : (i.prototype = e.prototype, new i());
});
Object.defineProperty(i, "__esModule", {
value: !0
});
var o = t("../../../core/fsmNode/GLFruitStateNode"), a = t("../../defines/GLFruitDefine"), u = t("../../GLFruitApp"), s = t("../../traits/GLFruitTwoFruitOnceTraitCtrl"), l = t("../../FruitFeature"), c = function(t) {
n(e, t);
function e() {
return null !== t && t.apply(this, arguments) || this;
}
e.prototype.onEnter = function() {
var t = this.machine.getOwer();
if (null != t.getItem()) {
t.getItem().playAnimation(a.GLFruitAnimationDefine.Idle1);
u.default.mergerCtr.updateDropLinePosition(u.default.mergerCtr.getSpawnDropPositon(t));
u.default.mergerCtr.showDropLine(t.getLineColor());
s.default.getInstance().isOpen() && s.default.getInstance().isTwoFruitRound() && s.default.getInstance().onReadyDropFruitReady(t);
l.default.isOpen(l.FruitFeat.FruitPreviewPlace) && u.default.placePreviewCtr && u.default.placePreviewCtr.showPreview(t);
}
};
e.prototype.onExit = function() {
u.default.mergerCtr.hideDropLine();
l.default.isOpen(l.FruitFeat.FruitPreviewPlace) && u.default.placePreviewCtr && u.default.placePreviewCtr.hidePreview();
};
return e;
}(o.default);
i.default = c;
cc._RF.pop();
}, {
"../../../core/fsmNode/GLFruitStateNode": "GLFruitStateNode",
"../../FruitFeature": "FruitFeature",
"../../GLFruitApp": "GLFruitApp",
"../../defines/GLFruitDefine": "GLFruitDefine",
"../../traits/GLFruitTwoFruitOnceTraitCtrl": "GLFruitTwoFruitOnceTraitCtrl"
} ],
GLFruitRepeatFruitAwardTraitCtrl: [ function(t, e, i) {
"use strict";
cc._RF.push(e, "203017+uvZL2KRtN4WkEXAq", "GLFruitRepeatFruitAwardTraitCtrl");
Object.defineProperty(i, "__esModule", {
value: !0
});
var r = t("../GLFruitApp"), n = t("../defines/GLFruitDefine"), o = function() {
function t() {
this._featureName = "GLFruitRepeatFruitAward";
this.limitMinFruitId = 0;
this.effectTime = 0;
this.effectStartTime = 0;
this.effectFruitId = 0;
this.defaultNextFruit = 1;
this.mergedFruitMap = new Map();
this.excludeFruitMap = new Map();
}
t.getInstance = function() {
null == this._instance && (this._instance = new t());
return this._instance;
};
t.prototype.isOpen = function() {
return GL.Game.IsFeatureOpen(this._featureName);
};
t.prototype.init = function() {
this.getFeatureParam();
this.effectStartTime = 0;
this.effectFruitId = 0;
this.loadData();
};
t.prototype.getFeatureParam = function() {
this.limitMinFruitId = GL.Game.getFeatureKeyParam(this._featureName, "limitMinFruitId") || 0;
this.effectTime = GL.Game.getFeatureKeyParam(this._featureName, "effectTime") || 0;
this.defaultNextFruit = GL.Game.getFeatureKeyParam(this._featureName, "defaultNextFruit") || 1;
for (var t = GL.Game.getFeatureKeyParam(this._featureName, "excludeFruitList") || [], e = 0; e < t.length; e++) this.excludeFruitMap.set(t[e], !0);
console.log("【" + this._featureName + "】== limitMinFruitId: " + this.limitMinFruitId + ", effectTime: " + this.effectTime);
};
t.prototype.onMerge = function(t) {
if (!(t < this.limitMinFruitId || t >= n.GLFruitDefine.MaxFruitId || this.mergedFruitMap.has(t))) {
var e = this.getTargetFruit();
if (null != e && 0 != e.length) {
var i = Math.floor(Math.random() * e.length);
this.effectFruitId = e[i];
this.mergedFruitMap.set(t, !0);
this.effectStartTime = Date.now();
this.saveData();
console.log("【" + this._featureName + "】进入奖励时间, 奖励水果：" + this.effectFruitId);
}
}
};
t.prototype.isInEffectTime = function() {
if (this.effectStartTime <= 0) return !1;
var t = Date.now();
if (t <= this.effectStartTime) return !1;
if (t - this.effectStartTime <= 1e3 * this.effectTime) return !0;
this.effectStartTime = 0;
this.effectFruitId = 0;
console.log("【" + this._featureName + "】时间已结束");
return !1;
};
t.prototype.getEffectFruitId = function() {
return this.effectFruitId;
};
t.prototype.getTargetFruit = function() {
var t, e = [], i = null === (t = r.default.mergerCtr) || void 0 === t ? void 0 : t.getFruits();
if (null == i) return e;
for (var n = new Map(), o = 0, a = 0; a < i.length; a++) {
var u = i[a];
if (null != u) {
var s = u.getId();
if (this.excludeFruitMap.has(s)) continue;
var l = 1;
n.has(s) && (l += n.get(s));
n.set(s, l);
l > o && (o = l);
}
}
console.log("【" + this._featureName + "】检索当前水果列表 ", n, o);
if (0 == o || 0 == n.size) {
e.push(this.defaultNextFruit);
return e;
}
n.forEach(function(t, i) {
t == o && e.push(i);
});
return e;
};
t.prototype.loadData = function() {
var t = this, e = cc.sys.localStorage.getItem(this._featureName + "_data");
null != e && "" != e && e.split(",").forEach(function(e) {
t.mergedFruitMap.set(Number(e), !0);
});
};
t.prototype.saveData = function() {
cc.sys.localStorage.setItem(this._featureName + "_data", Array.from(this.mergedFruitMap.keys()).join(","));
};
t.prototype.reset = function() {
this.effectStartTime = 0;
this.effectFruitId = 0;
this.mergedFruitMap.clear();
};
t.prototype.restart = function() {
this.reset();
this.saveData();
};
t.prototype.gameOver = function() {
this.reset();
this.saveData();
};
t._instance = null;
return t;
}();
i.default = o;
cc._RF.pop();
}, {
"../GLFruitApp": "GLFruitApp",
"../defines/GLFruitDefine": "GLFruitDefine"
} ],
GLFruitRevivePopupCtr: [ function(t, e, i) {
"use strict";
cc._RF.push(e, "b4c42yIO09OFYEBU9gjp3M0", "GLFruitRevivePopupCtr");
var r = this && this.__awaiter || function(t, e, i, r) {
return new (i || (i = Promise))(function(n, o) {
function a(t) {
try {
s(r.next(t));
} catch (t) {
o(t);
}
}
function u(t) {
try {
s(r.throw(t));
} catch (t) {
o(t);
}
}
function s(t) {
t.done ? n(t.value) : (e = t.value, e instanceof i ? e : new i(function(t) {
t(e);
})).then(a, u);
var e;
}
s((r = r.apply(t, e || [])).next());
});
}, n = this && this.__generator || function(t, e) {
var i, r, n, o, a = {
label: 0,
sent: function() {
if (1 & n[0]) throw n[1];
return n[1];
},
trys: [],
ops: []
};
return o = {
next: u(0),
throw: u(1),
return: u(2)
}, "function" == typeof Symbol && (o[Symbol.iterator] = function() {
return this;
}), o;
function u(t) {
return function(e) {
return s([ t, e ]);
};
}
function s(o) {
if (i) throw new TypeError("Generator is already executing.");
for (;a; ) try {
if (i = 1, r && (n = 2 & o[0] ? r.return : o[0] ? r.throw || ((n = r.return) && n.call(r), 
0) : r.next) && !(n = n.call(r, o[1])).done) return n;
(r = 0, n) && (o = [ 2 & o[0], n.value ]);
switch (o[0]) {
case 0:
case 1:
n = o;
break;

case 4:
a.label++;
return {
value: o[1],
done: !1
};

case 5:
a.label++;
r = o[1];
o = [ 0 ];
continue;

case 7:
o = a.ops.pop();
a.trys.pop();
continue;

default:
if (!(n = a.trys, n = n.length > 0 && n[n.length - 1]) && (6 === o[0] || 2 === o[0])) {
a = 0;
continue;
}
if (3 === o[0] && (!n || o[1] > n[0] && o[1] < n[3])) {
a.label = o[1];
break;
}
if (6 === o[0] && a.label < n[1]) {
a.label = n[1];
n = o;
break;
}
if (n && a.label < n[2]) {
a.label = n[2];
a.ops.push(o);
break;
}
n[2] && a.ops.pop();
a.trys.pop();
continue;
}
o = e.call(t, a);
} catch (t) {
o = [ 6, t ];
r = 0;
} finally {
i = n = 0;
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
var o = t("../FruitFeature"), a = t("../GLFruitApp"), u = t("../tools/GLFruitTools"), s = function() {
function t() {
this._currentNode = null;
this._popupNode = null;
this._onClose = null;
}
t.getInstance = function() {
this._instance || (this._instance = new t());
return this._instance;
};
t.prototype.isOpen = function() {
return o.default.isOpen(o.FruitFeat.FruitFailRevivePopup);
};
t.prototype.canRevive = function() {
if (!this.isOpen()) return !1;
var e = o.default.getFeatureKeyParam(o.FruitFeat.FruitFailRevivePopup, "maxReviveCount", t.DefaultMaxReviveCount);
return a.default.user.getDataVo().roundDataVo.failRevivePopupReviveCount < e;
};
t.prototype.show = function(e) {
var i, o, u;
return r(this, void 0, Promise, function() {
var r, s, l, c, d, p, f, h, g, F, y, v, m;
return n(this, function(n) {
switch (n.label) {
case 0:
if (this._currentNode && cc.isValid(this._currentNode)) {
console.log("[GLFruitRevivePopupCtr] 复活弹窗已存在，不重复创建");
return [ 2 ];
}
this._onClose = e || null;
if (!(r = null === (i = GL.Game) || void 0 === i ? void 0 : i.resLoaderLoadBundle)) {
console.error("[GLFruitRevivePopupCtr] resLoaderLoadBundle 不可用，无法加载复活弹窗");
return [ 2 ];
}
s = null;
n.label = 1;

case 1:
n.trys.push([ 1, 3, , 4 ]);
return [ 4, r(t.BundleName, !0) ];

case 2:
s = n.sent();
return [ 3, 4 ];

case 3:
l = n.sent();
console.error("[GLFruitRevivePopupCtr] 加载 bundle 失败:", l);
return [ 2 ];

case 4:
if (!s) {
console.error("[GLFruitRevivePopupCtr] bundle 加载失败: " + t.BundleName);
return [ 2 ];
}
return [ 4, new Promise(function(e) {
s.load(t.PrefabPath, cc.Prefab, function(t, i) {
if (!t && i instanceof cc.Prefab) e(i); else {
console.error("[GLFruitRevivePopupCtr] 加载 revive.prefab 失败:", t);
e(null);
}
});
}) ];

case 5:
if (!(c = n.sent())) return [ 2 ];
if (!(d = null === (u = null === (o = a.default.gameStateCtr) || void 0 === o ? void 0 : o.getGameView()) || void 0 === u ? void 0 : u.node) || !cc.isValid(d)) {
console.warn("[GLFruitRevivePopupCtr] 父节点无效，无法展示复活弹窗");
return [ 2 ];
}
(p = new cc.Node("GLFruitRevivePopup")).parent = d;
p.setSiblingIndex(d.children.length - 1);
p.addComponent(cc.BlockInputEvents);
f = d.getContentSize();
(h = new cc.Node("mask")).setContentSize(f.width, f.height);
(g = h.addComponent(cc.Graphics)).fillColor = cc.color(0, 0, 0, 200);
g.rect(-f.width / 2, -f.height / 2, f.width, f.height);
g.fill();
h.parent = p;
(F = cc.instantiate(c)).parent = p;
F.scale = 0;
cc.tween(F).to(.25, {
scale: 1
}, {
easing: cc.easing.backOut
}).start();
(y = F.getChildByName("close")) && y.on("click", this.onClickClose, this);
(v = F.getChildByName("closeTex")) && v.on("click", this.onClickClose, this);
(m = F.getChildByName("revive_btn")) && m.on(cc.Node.EventType.TOUCH_END, this.onClickRevive, this);
this._currentNode = p;
this._popupNode = F;
console.log("[GLFruitRevivePopupCtr] 复活弹窗展示完成");
return [ 2 ];
}
});
});
};
t.prototype.onClickClose = function() {
console.log("[GLFruitRevivePopupCtr] 点击关闭，回到失败结算流程");
var t = this._onClose;
this.hide();
t && t();
};
t.prototype.onClickRevive = function() {
var t = this;
console.log("[GLFruitRevivePopupCtr] 点击复活，观看激励视频");
a.default.adCtr.showRewardsAd(function() {
console.log("[GLFruitRevivePopupCtr] 广告观看成功，复活并优化盘面");
t.hide();
a.default.user.getDataVo().roundDataVo.failRevivePopupReviveCount++;
a.default.user.saveData();
t.setDropUiVisible(!1);
a.default.mergerCtr.isPause = !0;
t.explodeSmallFruitsSequentially(function() {
var e, i;
null === (e = a.default.failZoneCtr) || void 0 === e || e.removeAllHintEffects();
null === (i = a.default.failZoneCtr) || void 0 === i || i.addExtraTime();
t.setDropUiVisible(!0);
a.default.user.saveData();
a.default.gameStateCtr.markSkipGameStartOnce();
a.default.gameStateCtr.runPlayState();
a.default.mergerCtr.isPause = !1;
a.default.propCtr.autoShakeWithoutCost();
});
});
};
t.prototype.setDropUiVisible = function(t) {
var e, i, r;
a.default.mergerCtr.isOperationFruits = t;
var n = null === (r = null === (i = null === (e = a.default.gameStateCtr) || void 0 === e ? void 0 : e.getGameView()) || void 0 === i ? void 0 : i.getFruitDropLine) || void 0 === r ? void 0 : r.call(i);
if (t) n && cc.isValid(n.node) && (n.node.active = !0); else {
a.default.mergerCtr.hideDropLine();
n && cc.isValid(n.node) && n.hide();
}
};
t.prototype.explodeSmallFruitsSequentially = function(e) {
var i = a.default.mergerCtr.getFruits().filter(function(e) {
return e && e.getItem() && cc.isValid(e.getItem().node) && t.SmallFruitIds.includes(e.getId());
});
i.sort(function(t, e) {
var i = t.getId() - e.getId();
if (0 !== i) return i;
var r = t.getItem().node.convertToWorldSpaceAR(cc.Vec3.ZERO), n = e.getItem().node.convertToWorldSpaceAR(cc.Vec3.ZERO);
return r.y - n.y;
});
console.log("[GLFruitRevivePopupCtr] 开始爆炸小水果, count=" + i.length);
this.explodeFruitAt(i, 0, e);
};
t.prototype.explodeFruitAt = function(e, i, r) {
var n = this;
if (i >= e.length) r(); else {
var o = e[i], s = function() {
window.setTimeout(function() {
n.explodeFruitAt(e, i + 1, r);
}, t.ExplodeStepDelayMs);
};
if (o && o.getItem() && cc.isValid(o.getItem().node)) {
var l = o.getItem().node.convertToWorldSpaceAR(cc.Vec3.ZERO);
a.default.effectCtr.playMergeNewEffect(cc.v3(l.x, l.y), u.default.GetFruitMergerEffectNameById(o.getId()));
a.default.mergerCtr.removeFruit(o);
s();
} else s();
}
};
t.prototype.hide = function() {
var t = this._currentNode, e = this._popupNode;
this._currentNode = null;
this._popupNode = null;
this._onClose = null;
t && cc.isValid(t) && (e && cc.isValid(e) ? cc.tween(e).to(.18, {
scale: 0
}, {
easing: cc.easing.backIn
}).call(function() {
cc.isValid(t) && t.destroy();
}).start() : t.destroy());
};
t._instance = null;
t.BundleName = "Remote_gl_fruit_revivePopup";
t.PrefabPath = "prefabs/revive";
t.SmallFruitIds = [ 1, 2, 3 ];
t.ExplodeStepDelayMs = 120;
t.DefaultMaxReviveCount = 2;
return t;
}();
i.default = s;
cc._RF.pop();
}, {
"../FruitFeature": "FruitFeature",
"../GLFruitApp": "GLFruitApp",
"../tools/GLFruitTools": "GLFruitTools"
} ],
GLFruitRoundCtr: [ function(t, e, i) {
"use strict";
cc._RF.push(e, "c368fIlxItPDJqgwl0wXBo6", "GLFruitRoundCtr");
var r, n = this && this.__assign || function() {
return (n = Object.assign || function(t) {
for (var e, i = 1, r = arguments.length; i < r; i++) {
e = arguments[i];
for (var n in e) Object.prototype.hasOwnProperty.call(e, n) && (t[n] = e[n]);
}
return t;
}).apply(this, arguments);
};
Object.defineProperty(i, "__esModule", {
value: !0
});
var o = null === (r = null === window || void 0 === window ? void 0 : window._GLHallClassMap_) || void 0 === r ? void 0 : r.GLHallController, a = t("../GLFruitApp"), u = t("../GLFruitRoundLogEventCtr"), s = function() {
function t() {
this._roundDataVo = null;
}
t.prototype.getDataVo = function() {
return this._roundDataVo;
};
t.prototype.init = function(t) {
this._roundDataVo = t;
};
t.prototype.useProp = function(t, e) {
void 0 === e && (e = !1);
e ? this._roundDataVo.propAdCount++ : this._roundDataVo.propFreeCount++;
var i = this._roundDataVo.propUsageInfo.findIndex(function(e) {
return e.id == t;
});
-1 == i ? this._roundDataVo.propUsageInfo.push({
id: t,
num: 1
}) : this._roundDataVo.propUsageInfo[i].num++;
};
t.prototype.updatePerSecond = function() {
this._roundDataVo && (this._roundDataVo.gameRealTime += 1);
};
t.prototype.onMerger = function() {
this._roundDataVo.mergeCount += 1;
};
t.prototype.getPropUsageInfo = function() {
var t = {};
this._roundDataVo.propUsageInfo.forEach(function(e) {
t[e.id] = e.num;
});
return t;
};
t.prototype.getLogEventData = function(t, e) {
var i, r = null == o ? void 0 : o.data;
return {
GameType: "15",
game_subtype: GL.ExtractTool.configKey.HsFruit + "" || "1",
gameid: a.default.user.getDataVo().gameNum + "",
ResultType: e,
grade: t,
GameTime: (null === (i = null == r ? void 0 : r.totalTime) || void 0 === i ? void 0 : i.gl_fruit) || 0,
RealTime: this._roundDataVo.gameRealTime,
free_hint: this._roundDataVo.propFreeCount,
ad_hit: this._roundDataVo.propAdCount,
hint_info: a.default.roundCtr.getPropUsageInfo(),
blast_cnt: this._roundDataVo.mergeCount
};
};
t.prototype.sendGameEndData = function(t, e) {
var i = a.default.roundCtr.getLogEventData(t, e), r = u.default.getInstance().getLogEventData();
r && (i = n(n({}, i), r));
u.default.getInstance().recordRoundDataPreClear(null, u.default.getInstance().getOperationStepEventData(), u.default.getInstance().getSomeGamedata());
GL.Submit.sendGameEndData(i);
u.default.getInstance().resetData();
};
return t;
}();
i.default = s;
cc._RF.pop();
}, {
"../GLFruitApp": "GLFruitApp",
"../GLFruitRoundLogEventCtr": "GLFruitRoundLogEventCtr"
} ],
GLFruitRoundLogEventCtr: [ function(t, e, i) {
"use strict";
cc._RF.push(e, "42ebcBtUuhKVL+8uCEPqooe", "GLFruitRoundLogEventCtr");
var r, n;
Object.defineProperty(i, "__esModule", {
value: !0
});
var o = null === (n = null === window || void 0 === window ? void 0 : window._GLHallClassMap_) || void 0 === n ? void 0 : n.GLHallController, a = t("./defines/GLFruitDefine"), u = t("./GLFruitApp"), s = function() {
function t() {
this.free_item = [];
this.ad_item = [];
this.step = 0;
this.forward_step = 0;
}
t.prototype.reset = function() {
this.free_item = [];
this.ad_item = [];
this.step = 0;
this.forward_step = 0;
};
return t;
}(), l = function() {
function t() {
this._dataVo = new s();
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
this._dataVo = t.assignData(i, s);
} else this._dataVo = new s();
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
t.prototype.useItem = function(e, i) {
void 0 === i && (i = !1);
if (t.AllPropMap[e]) {
var r = t.AllPropMap[e];
i ? this.adItem(r) : this.freeItem(r);
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
t.prototype.step = function() {
if (this._dataVo) {
this._dataVo.step++;
this.saveData();
}
};
t.prototype.forwardStep = function() {
if (this._dataVo) {
this._dataVo.forward_step++;
this.saveData();
}
};
t.prototype.getLogEventData = function() {
return {
free_item: this.parseItemArr(this._dataVo.free_item),
ad_item: this.parseItemArr(this._dataVo.ad_item),
step: this._dataVo.step,
forward_step: this._dataVo.forward_step
};
};
t.prototype.parseItemArr = function(e) {
var i = {};
e.forEach(function(t) {
var e = t.id, r = t.num;
return i[e] = r;
});
return "[" + Object.values(t.AllPropMap).map(function(t) {
return t + ":" + (i[t] || 0);
}).join(",") + "]";
};
t.prototype.getOperationStepEventData = function() {
return this._dataVo ? {
step: this._dataVo.step,
forward_step: this._dataVo.forward_step
} : null;
};
t.prototype.getSomeGamedata = function() {
var t, e = null == o ? void 0 : o.data, i = u.default.roundCtr.getDataVo();
return i ? {
grade: u.default.user.getScore(),
GameTime: Math.ceil((null === (t = null == e ? void 0 : e.totalTime) || void 0 === t ? void 0 : t.gl_fruit) || 0),
RealTime: i.gameRealTime
} : null;
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
t._instance = null;
t.AllPropMap = ((r = {})[a.GLFruitPropIdDefine.Shake] = 11, r[a.GLFruitPropIdDefine.Bomb] = 12, 
r);
t.SaveKey = "gl_fruit_user_round_log_event";
return t;
}();
i.default = l;
cc._RF.pop();
}, {
"./GLFruitApp": "GLFruitApp",
"./defines/GLFruitDefine": "GLFruitDefine"
} ],
GLFruitShadowTips: [ function(t, e, i) {
"use strict";
cc._RF.push(e, "8001eYg+fJBFYu5292KbPIB", "GLFruitShadowTips");
var r, n = this && this.__extends || (r = function(t, e) {
return (r = Object.setPrototypeOf || {
__proto__: []
} instanceof Array && function(t, e) {
t.__proto__ = e;
} || function(t, e) {
for (var i in e) Object.prototype.hasOwnProperty.call(e, i) && (t[i] = e[i]);
})(t, e);
}, function(t, e) {
r(t, e);
function i() {
this.constructor = t;
}
t.prototype = null === e ? Object.create(e) : (i.prototype = e.prototype, new i());
}), o = this && this.__decorate || function(t, e, i, r) {
var n, o = arguments.length, a = o < 3 ? e : null === r ? r = Object.getOwnPropertyDescriptor(e, i) : r;
if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) a = Reflect.decorate(t, e, i, r); else for (var u = t.length - 1; u >= 0; u--) (n = t[u]) && (a = (o < 3 ? n(a) : o > 3 ? n(e, i, a) : n(e, i)) || a);
return o > 3 && a && Object.defineProperty(e, i, a), a;
}, a = this && this.__values || function(t) {
var e = "function" == typeof Symbol && Symbol.iterator, i = e && t[e], r = 0;
if (i) return i.call(t);
if (t && "number" == typeof t.length) return {
next: function() {
t && r >= t.length && (t = void 0);
return {
value: t && t[r++],
done: !t
};
}
};
throw new TypeError(e ? "Object is not iterable." : "Symbol.iterator is not defined.");
};
Object.defineProperty(i, "__esModule", {
value: !0
});
var u = t("../FruitFeature"), s = t("../GLFruitApp"), l = t("../play/GLFruitItem"), c = cc._decorator, d = c.ccclass, p = (c.property, 
function(t) {
n(e, t);
function e() {
var e = null !== t && t.apply(this, arguments) || this;
e.shadowOpacity = 100;
e._currentFruitVisual = null;
return e;
}
e.prototype.update = function() {
u.default.isOpen(u.FruitFeat.FruitShadowTips) && this.findClosestFruitAndShowShadow();
};
e.prototype.findClosestFruitAndShowShadow = function() {
var t, e, i = s.default.mergerCtr.getReadyDropFruit();
if (i && i.getItem() && i.getItem().node) if (i.getId() > 5) this.hideShadow(); else {
var r = i.getItem().node.convertToWorldSpaceAR(cc.Vec2.ZERO), n = l.default.FruitRadius[i.getId() - 1] * i.getItem().node.scale, o = s.default.mergerCtr.getFruits();
if (o && 0 !== o.length) {
var u = -Infinity, c = null, d = null;
try {
for (var p = a(o), f = p.next(); !f.done; f = p.next()) {
var h = f.value;
if (h && h.getItem() && h.getItem().node) {
var g = h.getItem().node.convertToWorldSpaceAR(cc.Vec2.ZERO), F = l.default.FruitRadius[h.getId() - 1] * h.getItem().node.scale, y = r.x - g.x, v = .9 * (F + n), m = v * v, _ = y * y;
if (_ <= m) {
var L = Math.sqrt(m - _), C = g.y + L;
if (C > u) {
u = C;
c = h;
d = g;
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
f && !f.done && (e = p.return) && e.call(p);
} finally {
if (t) throw t.error;
}
}
if (c && d) {
var S = cc.v2(r.x, u);
this.showShadow(i, S, n);
} else this.showShadowOnBottomWall(i, r.x, n);
} else this.showShadowOnBottomWall(i, r.x, n);
} else this.hideShadow();
};
e.prototype.showShadowOnBottomWall = function(t, e, i) {
var r, n, o = cc.v2(e, 1e3), u = cc.v2(e, -2e3), s = cc.director.getPhysicsManager().rayCast(o, u, cc.RayCastType.All);
try {
for (var l = a(s), c = l.next(); !c.done; c = l.next()) {
var d = c.value;
if ("bottomWall" === d.collider.node.name) {
var p = d.point.y + i, f = cc.v2(e, p);
this.showShadow(t, f, i);
return;
}
}
} catch (t) {
r = {
error: t
};
} finally {
try {
c && !c.done && (n = l.return) && n.call(l);
} finally {
if (r) throw r.error;
}
}
this.hideShadow();
};
e.prototype.showShadow = function(t, e) {
var i = this.node.convertToNodeSpaceAR(e);
this.clearCurrentFruitVisual();
this.createFruitVisual(t, i);
};
e.prototype.clearCurrentFruitVisual = function() {
if (this._currentFruitVisual && cc.isValid(this._currentFruitVisual)) {
this._currentFruitVisual.destroy();
this._currentFruitVisual = null;
}
};
e.prototype.createFruitVisual = function(t, e) {
if (t && t.getItem() && t.getItem().node) {
var i = t.getItem().node;
this._currentFruitVisual = new cc.Node("FruitShadow");
this._currentFruitVisual.parent = this.node;
this._currentFruitVisual.zIndex = -1;
this._currentFruitVisual.setPosition(e);
var r = i.getComponentInChildren(sp.Skeleton);
if (r) {
var n = new cc.Node("Skeleton");
n.parent = this._currentFruitVisual;
n.setPosition(0, 0);
var o = n.addComponent(sp.Skeleton);
o.skeletonData = r.skeletonData;
o.defaultSkin = r.defaultSkin;
o.animation = r.animation;
o.premultipliedAlpha = r.premultipliedAlpha;
r.animation && o.setAnimation(0, r.animation, !0);
n.opacity = this.shadowOpacity;
}
}
};
e.prototype.hideShadow = function() {
this.clearCurrentFruitVisual();
};
e.prototype.onDestroy = function() {
this.clearCurrentFruitVisual();
};
return o([ d ], e);
}(cc.Component));
i.default = p;
cc._RF.pop();
}, {
"../FruitFeature": "FruitFeature",
"../GLFruitApp": "GLFruitApp",
"../play/GLFruitItem": "GLFruitItem"
} ],
GLFruitShakeOffsetAddByUseTimesCtrl: [ function(t, e, i) {
"use strict";
cc._RF.push(e, "1d83dTizvRKqKBQEwExQ6KG", "GLFruitShakeOffsetAddByUseTimesCtrl");
Object.defineProperty(i, "__esModule", {
value: !0
});
var r = function() {
function t() {
this._featureName = "GLFruitShakeOffsetAddByUseTimes";
this.max = 10;
this.rate = .05;
this.paramValue = 1;
}
t.getInstance = function() {
if (null == this._instance) {
this._instance = new t();
this._instance.initRate();
}
return this._instance;
};
t.prototype.isOpen = function() {
return GL.Game.IsFeatureOpen(this._featureName);
};
t.prototype.getFeatureName = function() {
return this._featureName;
};
t.prototype.initRate = function() {
this.paramValue = GL.Game.getFeatureKeyParam(this._featureName, "default");
this.rate = GL.Game.getFeatureKeyParam(this._featureName, "rate");
this.max = GL.Game.getFeatureKeyParam(this._featureName, "max");
};
t.prototype.getRate = function() {
return this.rate;
};
t.prototype.printShakeRate = function() {
console.log("【" + this._featureName + "】 当前倍率：" + this.getValue());
};
t.prototype.getValue = function() {
return this.paramValue * this.getRate() + 1;
};
t.prototype.addValue = function() {
this.paramValue < this.max && (this.paramValue += 1);
};
t._instance = null;
return t;
}();
i.default = r;
cc._RF.pop();
}, {} ],
GLFruitShakeStateNode: [ function(t, e, i) {
"use strict";
cc._RF.push(e, "92848d3k9hIJLAkErQ3OY4D", "GLFruitShakeStateNode");
var r, n = this && this.__extends || (r = function(t, e) {
return (r = Object.setPrototypeOf || {
__proto__: []
} instanceof Array && function(t, e) {
t.__proto__ = e;
} || function(t, e) {
for (var i in e) Object.prototype.hasOwnProperty.call(e, i) && (t[i] = e[i]);
})(t, e);
}, function(t, e) {
r(t, e);
function i() {
this.constructor = t;
}
t.prototype = null === e ? Object.create(e) : (i.prototype = e.prototype, new i());
}), o = this && this.__values || function(t) {
var e = "function" == typeof Symbol && Symbol.iterator, i = e && t[e], r = 0;
if (i) return i.call(t);
if (t && "number" == typeof t.length) return {
next: function() {
t && r >= t.length && (t = void 0);
return {
value: t && t[r++],
done: !t
};
}
};
throw new TypeError(e ? "Object is not iterable." : "Symbol.iterator is not defined.");
};
Object.defineProperty(i, "__esModule", {
value: !0
});
var a = t("../../core/fsmNode/GLFruitStateNode"), u = t("../defines/GLFruitDefine"), s = t("../ctrs/FruitShakeRandomDirectionCtrl"), l = t("../GLFruitApp"), c = t("../traits/GLFruitNotDropLittleFruitWhenXiGuaOnShowCtrl"), d = t("../traits/GLFruitShakeOffsetAddByUseTimesCtrl"), p = t("../FruitFeature"), f = t("../traits/GLFruitRepeatFruitAwardTraitCtrl"), h = t("../traits/GLFruitDeadCheckOptimizeTraitCtrl"), g = t("../traits/GLFruitShowShakeResultEncourageTraitCtrl"), F = function(t) {
n(e, t);
function e() {
var e = null !== t && t.apply(this, arguments) || this;
e._wallsNode = null;
e._rigidBodies = [];
e.nodePosMap = new Map();
e._initNodePosMap = new Map();
e._nodeBoxBg = null;
e._timer = null;
e._mainCamera = null;
return e;
}
e.prototype.onEnter = function() {
var t, e, i, r = l.default.gameStateCtr.getGameView();
if (r && cc.isValid(r)) {
h.default.getInstance().isOpen() && h.default.getInstance().setUseShakeItemFlag(!0);
p.default.isOpen(p.FruitFeat.GLFruitShowShakeResultEncourage) && g.default.getInstance().recordStartScore(l.default.user.getScore());
cc.isValid(r.getNodeTop()) && (r.getNodeTop().active = !1);
r.getFruitDropLine() && cc.isValid(null == r ? void 0 : r.getFruitDropLine()) && cc.isValid(null === (i = null == r ? void 0 : r.getFruitDropLine()) || void 0 === i ? void 0 : i.node) && (r.getFruitDropLine().node.active = !1);
l.default.mergerCtr.isOperationFruits = !1;
r.getNodeUpWall() && cc.isValid(r.getNodeUpWall()) && (r.getNodeUpWall().active = !0);
this._mainCamera = cc.find("Canvas/Main Camera").getComponent(cc.Camera);
this._wallsNode = r.getNodeWalls();
this._nodeBoxBg = r.getNodeBoxBg();
this._rigidBodies = this._wallsNode.getComponentsInChildren(cc.RigidBody);
try {
for (var n = o(this._wallsNode.children), a = n.next(); !a.done; a = n.next()) {
var u = a.value;
this._initNodePosMap.set(u, u.position);
}
} catch (e) {
t = {
error: e
};
} finally {
try {
a && !a.done && (e = n.return) && e.call(n);
} finally {
if (t) throw t.error;
}
}
this._initNodePosMap.set(this._nodeBoxBg, this._nodeBoxBg.position);
l.default.failZoneCtr.removeAllHintEffects();
this.zoomRatioToEnter(this.moveToUp.bind(this));
r.getNodeBottomAdAdapter() && cc.isValid(r.getNodeBottomAdAdapter()) && (r.getNodeBottomAdAdapter().active = !1);
} else console.warn("[GLFruitShakeStateNode] onEnter: gameView is null or invalid");
};
e.prototype.onExit = function() {
var t;
l.default.gameStateCtr.onExitShakeState();
var e = l.default.gameStateCtr.getGameView();
if (e && cc.isValid(e)) {
cc.isValid(e.getNodeTop()) && (e.getNodeTop().active = !0);
e.getFruitDropLine() && cc.isValid(null === (t = e.getFruitDropLine()) || void 0 === t ? void 0 : t.node) && (e.getFruitDropLine().node.active = !0);
l.default.mergerCtr.isOperationFruits = !0;
e.getNodeUpWall() && cc.isValid(e.getNodeUpWall()) && (e.getNodeUpWall().active = !1);
e.getNodeBottomAdAdapter() && cc.isValid(e.getNodeBottomAdAdapter()) && (e.getNodeBottomAdAdapter().active = !0);
c.default.getInstance().isOpen() && c.default.getInstance().afterMergeCheck();
} else console.warn("[GLFruitShakeStateNode] onExit: gameView is null or invalid");
};
e.prototype.zoomRatioToEnter = function(t) {
var e = this;
l.default.dynamicAccumCtr.create(1, .8, .3, function(t) {
e._mainCamera.zoomRatio = t;
}, t);
};
e.prototype.zoomRatioToExit = function() {
var t = this;
this.clearTimer();
p.default.isOpen(p.FruitFeat.GLFruitShowShakeResultEncourage) && g.default.getInstance().playEffect(l.default.user.getScore());
l.default.timeCtr.addOnce(.5, function() {
l.default.dynamicAccumCtr.create(t._mainCamera.zoomRatio, 1, .3, function(e) {
t._mainCamera.zoomRatio = e;
}, function() {
l.default.timeCtr.addOnce(.5, function() {
if (p.default.isOpen(p.FruitFeat.FruitDeathReviveShake) && l.default.user.getDataVo().roundDataVo.hasRevived) l.default.timeCtr.addOnce(1, function() {
var t, e, i = l.default.mergerCtr.getFruits(), r = l.default.gameStateCtr.getGameView().getOutBoundBoxMinY(), n = !1;
try {
for (var a = o(i), u = a.next(); !u.done; u = a.next()) {
var s = u.value;
if (s && s.getItem() && cc.isValid(s.getItem().node)) {
var c = s.getContactFruitCount(), d = s.isOutBoundBox(r);
if (c > 0 && d) {
n = !0;
break;
}
}
}
} catch (e) {
t = {
error: e
};
} finally {
try {
u && !u.done && (e = a.return) && e.call(a);
} finally {
if (t) throw t.error;
}
}
if (n) {
console.log("[GLFruitShakeStateNode] 震荡后仍然死亡，判定结束");
var p = l.default.user.getScore(), h = l.default.user.getBestScore();
l.default.popupCtr.hidePopup();
f.default.getInstance().isOpen() && f.default.getInstance().gameOver();
l.default.effectCtr.playBoardFullPanelEffect(cc.Vec3.ZERO, function() {
l.default.popupCtr.showGameResult(p, h);
l.default.adCtr.postResult();
});
l.default.user.getDataVo().hasLost = !0;
l.default.failZoneCtr.clear();
l.default.mergerCtr.removePhysicsComponents();
l.default.user.saveData();
l.default.gameStateCtr.runFailState();
} else {
l.default.mergerCtr.isCanRunGoldWatermelonState() ? l.default.mergerCtr.tryRunGoldWatermelonState() : l.default.gameStateCtr.runPlayState();
l.default.mergerWellDoneCtr.isCanShowWellDoneEffect() ? l.default.mergerWellDoneCtr.afterShakeTryShowWellDoneEffect(function() {
l.default.mergerCtr.showWatermelonPanel();
}) : l.default.mergerCtr.showWatermelonPanel();
}
}); else {
l.default.mergerCtr.isCanRunGoldWatermelonState() ? l.default.mergerCtr.tryRunGoldWatermelonState() : l.default.gameStateCtr.runPlayState();
l.default.mergerWellDoneCtr.isCanShowWellDoneEffect() ? l.default.mergerWellDoneCtr.afterShakeTryShowWellDoneEffect(function() {
l.default.mergerCtr.showWatermelonPanel();
}) : l.default.mergerCtr.showWatermelonPanel();
}
});
});
});
};
e.prototype.moveToUp = function() {
var t, e, i = this;
this.isPhysicsEnable = !1;
this._timer = l.default.timeCtr.add(0, this.tick.bind(this));
var r = function(t) {
n.moveTween(t, cc.v3(t.x, t.y + 150), function() {
i.nodePosMap.set(t, t.position);
});
}, n = this;
try {
for (var a = o(this._wallsNode.children), u = a.next(); !u.done; u = a.next()) r(u.value);
} catch (e) {
t = {
error: e
};
} finally {
try {
u && !u.done && (e = a.return) && e.call(a);
} finally {
if (t) throw t.error;
}
}
for (var s = l.default.mergerCtr.getFruits(), c = function(t) {
var e = s[t].getItem().node;
null != e && cc.isValid(e) && d.moveTween(e, cc.v3(e.x, e.y + 150), function() {
i.nodePosMap.set(e, e.position);
});
}, d = this, p = s.length - 1; p >= 0; p--) c(p);
this.nodePosMap.set(this._nodeBoxBg, this._nodeBoxBg.position);
this.moveTween(this._nodeBoxBg, cc.v3(this._nodeBoxBg.x, this._nodeBoxBg.y + 150), function() {
i.isPhysicsEnable = !0;
i.startShake();
});
};
e.prototype.moveToBottom = function() {
var t, e, i = this;
try {
for (var r = o(this._wallsNode.children), n = r.next(); !n.done; n = r.next()) {
var a = n.value;
this.moveTween(a, this._initNodePosMap.get(a), function() {});
}
} catch (e) {
t = {
error: e
};
} finally {
try {
n && !n.done && (e = r.return) && e.call(r);
} finally {
if (t) throw t.error;
}
}
this.moveTween(this._nodeBoxBg, this._initNodePosMap.get(this._nodeBoxBg), function() {
i.zoomRatioToExit();
});
};
e.prototype.moveTween = function(t, e, i) {
var r = this;
cc.tween(t).to(.5, {
position: cc.v3(e)
}).call(function() {
r.nodePosMap.set(t, t.position);
i();
}).start();
};
e.prototype.tick = function() {
var t, e;
try {
for (var i = o(this._rigidBodies), r = i.next(); !r.done; r = i.next()) {
var n = r.value;
if (n && n.node && this._isValidNode(n.node)) {
n.syncPosition(!0);
n.syncRotation(!0);
}
}
} catch (e) {
t = {
error: e
};
} finally {
try {
r && !r.done && (e = i.return) && e.call(i);
} finally {
if (t) throw t.error;
}
}
for (var a = l.default.mergerCtr.getFruits(), u = a.length - 1; u >= 0; u--) {
var s = a[u];
if (s) {
var c = s.getItem();
if (c) {
var d = c.getRigidbody();
if (d && d.node && this._isValidNode(d.node)) {
d.syncPosition(!0);
d.syncRotation(!0);
}
}
}
}
};
e.prototype._isValidNode = function(t) {
if (!t || !cc.isValid(t)) return !1;
var e = t.getPosition(), i = t.angle;
return isFinite(e.x) && isFinite(e.y) && isFinite(i);
};
e.prototype.startShake = function() {
var t, e, i = this;
l.default.audioMgr.playEffect(u.GLFruitAudioDefine.fruit_item_undo);
d.default.getInstance().isOpen() && d.default.getInstance().printShakeRate();
var r = s.default.getInstance().getNextShakeDirection();
if (this._wallsNode && cc.isValid(this._wallsNode) && this._wallsNode.children) try {
for (var n = o(this._wallsNode.children), a = n.next(); !a.done; a = n.next()) {
var c = a.value;
c && cc.isValid(c) && this.shakeTween(c, null, r);
}
} catch (e) {
t = {
error: e
};
} finally {
try {
a && !a.done && (e = n.return) && e.call(n);
} finally {
if (t) throw t.error;
}
}
this._nodeBoxBg && cc.isValid(this._nodeBoxBg) ? this.shakeTween(this._nodeBoxBg, function() {
i.moveToBottom();
}, r) : this.moveToBottom();
d.default.getInstance().isOpen() && d.default.getInstance().addValue();
};
e.prototype.shakeTween = function(t, e, i) {
void 0 === e && (e = null);
void 0 === i && (i = 0);
if (t && cc.isValid(t)) {
if (!this.nodePosMap.get(t)) {
var r = t.position;
this.nodePosMap.set(t, r);
}
if (this.nodePosMap.get(t)) {
var n = 1;
d.default.getInstance().isOpen() && (n = d.default.getInstance().getValue());
var o = 1.3 * n, a = 1.3 * n, u = [ [ 0, 150, 100, 200, -100, 250, 100, 200, 100, 150, 0, 0 ], [ 0, 150, -100, 200, 100, 250, -100, 200, -100, 150, 0, 0 ], [ 0, 200, 100, 250, -100, 300, 100, 250, 100, 200, 0, 0 ], [ 0, 200, -100, 250, 100, 300, -100, 250, -100, 200, 0, 0 ], [ 0, 100, 100, 150, -100, 200, 100, 150, 100, 100, 0, 0 ] ], s = u[i] || u[0];
cc.tween(t).to(30 * this.getFrameDuration(), {
position: cc.v3(this.nodePosMap.get(t).x + s[0] * o, this.nodePosMap.get(t).y + s[1] * o)
}).to(20 * this.getFrameDuration(), {
position: cc.v3(this.nodePosMap.get(t).x + s[2] * o, this.nodePosMap.get(t).y + s[3] * o)
}).to(20 * this.getFrameDuration(), {
position: cc.v3(this.nodePosMap.get(t).x + s[4] * o, this.nodePosMap.get(t).y + s[5] * o)
}).to(20 * this.getFrameDuration(), {
position: cc.v3(this.nodePosMap.get(t).x + s[6] * o, this.nodePosMap.get(t).y + s[7] * o)
}).to(30 * this.getFrameDuration(), {
position: cc.v3(this.nodePosMap.get(t).x + s[8] * o, this.nodePosMap.get(t).y + s[9] * o)
}).to(30 * this.getFrameDuration(), {
position: cc.v3(this.nodePosMap.get(t).x + s[10] * o, this.nodePosMap.get(t).y + s[11] * o)
}).start();
cc.tween(t).to(35 * this.getFrameDuration(), {
angle: 0 * a
}).to(20 * this.getFrameDuration(), {
angle: 0 * a
}).to(20 * this.getFrameDuration(), {
angle: 10 * a
}).to(20 * this.getFrameDuration(), {
angle: -10 * a
}).to(20 * this.getFrameDuration(), {
angle: 10 * a
}).to(35 * this.getFrameDuration(), {
angle: 0 * a
}).call(function() {
e && e();
}).start();
} else e && e();
} else e && e();
};
e.prototype.clearTimer = function() {
if (this._timer) {
l.default.timeCtr.removeByTimer(this._timer);
this._timer = null;
}
};
e.prototype.getFrameDuration = function(t) {
void 0 === t && (t = 60);
return 1 / t;
};
Object.defineProperty(e.prototype, "isPhysicsEnable", {
set: function(t) {
for (var e = l.default.mergerCtr.getFruits(), i = e.length - 1; i >= 0; i--) e[i].getItem().isPhysicsEnable = t;
},
enumerable: !1,
configurable: !0
});
return e;
}(a.default);
i.default = F;
cc._RF.pop();
}, {
"../../core/fsmNode/GLFruitStateNode": "GLFruitStateNode",
"../FruitFeature": "FruitFeature",
"../GLFruitApp": "GLFruitApp",
"../ctrs/FruitShakeRandomDirectionCtrl": "FruitShakeRandomDirectionCtrl",
"../defines/GLFruitDefine": "GLFruitDefine",
"../traits/GLFruitDeadCheckOptimizeTraitCtrl": "GLFruitDeadCheckOptimizeTraitCtrl",
"../traits/GLFruitNotDropLittleFruitWhenXiGuaOnShowCtrl": "GLFruitNotDropLittleFruitWhenXiGuaOnShowCtrl",
"../traits/GLFruitRepeatFruitAwardTraitCtrl": "GLFruitRepeatFruitAwardTraitCtrl",
"../traits/GLFruitShakeOffsetAddByUseTimesCtrl": "GLFruitShakeOffsetAddByUseTimesCtrl",
"../traits/GLFruitShowShakeResultEncourageTraitCtrl": "GLFruitShowShakeResultEncourageTraitCtrl"
} ],
GLFruitShowShakeResultEncourageTraitCtrl: [ function(t, e, i) {
"use strict";
cc._RF.push(e, "5c3f6zVLktN/7ffFqQUU+XU", "GLFruitShowShakeResultEncourageTraitCtrl");
Object.defineProperty(i, "__esModule", {
value: !0
});
var r = t("../ctrs/GLFruitEffectCtr"), n = t("../GLFruitApp"), o = [ {
aniName: "nice",
font: "fonts/gameplay_num_niceMove"
}, {
aniName: "smart",
font: "fonts/gameplay_num_smartMove"
}, {
aniName: "epic",
font: "fonts/gameplay_num_epicMove"
} ], a = function() {
function t() {
this._featureName = "GLFruitShowShakeResultEncourage";
this.bundleName = "Remote_gl_fruit_showShakeResultEncourage";
this.EffectPrefabName = "prefabs/effect";
this.resIsLoading = !1;
this.effectPrefab = null;
this.fontList = new Map();
this.startScore = 0;
this.scoreLevel = [];
}
t.getInstance = function() {
null == this._instance && (this._instance = new t());
return this._instance;
};
t.prototype.isOpen = function() {
return GL.Game.IsFeatureOpen(this._featureName);
};
t.prototype.init = function() {
console.log("==GLFruitShowShakeResultEncourageTraitCtrl== init");
this.loadFeatureParams();
this.loadRes();
};
t.prototype.loadFeatureParams = function() {
this.scoreLevel = GL.Game.getFeatureKeyParam(this._featureName, "scoreLevel") || [ 300, 500 ];
console.log("==GLFruitShowShakeResultEncourageTraitCtrl== scoreLevel:", this.scoreLevel);
};
t.prototype.loadRes = function() {
var t = this;
if (null == this.effectPrefab) if (1 != this.resIsLoading) if (GL.Game.resLoaderLoadBundle) {
console.log("==GLFruitShowShakeResultEncourageTraitCtrl== loadRes start, bundle:", this.bundleName);
this.resIsLoading = !0;
GL.Game.resLoaderLoadBundle(this.bundleName, !0).then(function(e) {
if (e) {
e.load(t.EffectPrefabName, function(e, i) {
if (e) console.log("==GLFruitShowShakeResultEncourageTraitCtrl== load prefab err:", e); else {
console.log("==GLFruitShowShakeResultEncourageTraitCtrl== load prefab complete");
t.effectPrefab = i;
}
});
for (var i = function(i) {
var r = o[i].font;
e.load(r, function(e, n) {
if (e) console.log("==GLFruitShowShakeResultEncourageTraitCtrl== load font err:", r, e); else {
console.log("==GLFruitShowShakeResultEncourageTraitCtrl== load font success:", r);
t.fontList.set("" + i, n);
}
if (i == o.length - 1) {
t.resIsLoading = !1;
console.log("==GLFruitShowShakeResultEncourageTraitCtrl== loadRes finish, fontCount:", t.fontList.size);
}
});
}, r = 0; r < o.length; r++) i(r);
} else {
console.log("==GLFruitShowShakeResultEncourageTraitCtrl== load bundle fail:", t.bundleName);
t.resIsLoading = !1;
}
});
} else console.log("==GLFruitShowShakeResultEncourageTraitCtrl== loadRes skip, resLoaderLoadBundle unavailable"); else console.log("==GLFruitShowShakeResultEncourageTraitCtrl== loadRes skip, loading in progress"); else console.log("==GLFruitShowShakeResultEncourageTraitCtrl== loadRes skip, prefab already loaded");
};
t.prototype.recordStartScore = function(t) {
this.startScore = t;
console.log("==GLFruitShowShakeResultEncourageTraitCtrl== recordStartScore:", this.startScore);
};
t.prototype.playEffect = function(t) {
var e, i, a, u, s = Math.max(0, t - this.startScore);
console.log("==GLFruitShowShakeResultEncourageTraitCtrl== playEffect, curScore:", t, "startScore:", this.startScore, "dScore:", s);
if (0 != s) {
var l = r.default.NodeEffectRoot || (null === (i = null === (e = n.default.gameStateCtr) || void 0 === e ? void 0 : e.getGameView()) || void 0 === i ? void 0 : i.node);
if (null != l && cc.isValid(l)) if (null != this.effectPrefab && 1 != this.resIsLoading && this.fontList.size == o.length) if (null != this.scoreLevel && 0 != Array.isArray(this.scoreLevel) && this.scoreLevel.length == o.length - 1) {
for (var c = -1, d = 0; d < this.scoreLevel.length; d++) if (s <= this.scoreLevel[d]) {
c = d;
break;
}
-1 == c && (c = this.scoreLevel.length);
var p = o[c];
if (null != p) {
var f = null === (a = cc.instantiate(this.effectPrefab)) || void 0 === a ? void 0 : a.getComponent(sp.Skeleton);
if (null != f) {
f.setCompleteListener(function() {
if (null != f && null != f.node && cc.isValid(f.node)) {
f.setCompleteListener(null);
f.node.removeFromParent();
}
});
var h = null === (u = this.findNodeByName(f.node, "score")) || void 0 === u ? void 0 : u.getComponent(cc.Label);
if (null != h) {
h.font = this.fontList.get(c + "");
h.string = "+" + s;
console.log("==GLFruitShowShakeResultEncourageTraitCtrl== playEffect label set, level:", c, "ani:", p.aniName, "text:", h.string);
} else console.log("==GLFruitShowShakeResultEncourageTraitCtrl== playEffect warn, score Label node not found");
f.node.setPosition(0, -200);
f.node.setParent(l);
f.node.setSiblingIndex(0);
f.setAnimation(0, p.aniName, !1);
console.log("==GLFruitShowShakeResultEncourageTraitCtrl== playEffect playing, level:", c, "ani:", p.aniName);
} else console.log("==GLFruitShowShakeResultEncourageTraitCtrl== playEffect skip, Skeleton component missing on effect prefab");
} else console.log("==GLFruitShowShakeResultEncourageTraitCtrl== playEffect skip, no effect config for level:", c);
} else console.log("==GLFruitShowShakeResultEncourageTraitCtrl== playEffect skip, invalid scoreLevel:", this.scoreLevel); else console.log("==GLFruitShowShakeResultEncourageTraitCtrl== playEffect skip, res not ready, prefab:", !!this.effectPrefab, "loading:", this.resIsLoading, "fontCount:", this.fontList.size); else console.log("==GLFruitShowShakeResultEncourageTraitCtrl== playEffect skip, invalid parent node");
} else console.log("==GLFruitShowShakeResultEncourageTraitCtrl== playEffect skip, no score added");
};
t.prototype.findNodeByName = function(t, e) {
if (t.name === e) return t;
for (var i = 0; i < t.childrenCount; i++) {
var r = t.children[i], n = this.findNodeByName(r, e);
if (n) return n;
}
return null;
};
t._instance = null;
return t;
}();
i.default = a;
cc._RF.pop();
}, {
"../GLFruitApp": "GLFruitApp",
"../ctrs/GLFruitEffectCtr": "GLFruitEffectCtr"
} ],
GLFruitSpawnStateNode: [ function(t, e, i) {
"use strict";
cc._RF.push(e, "f6914I71exKj6ew8xBTh1Se", "GLFruitSpawnStateNode");
var r, n = this && this.__extends || (r = function(t, e) {
return (r = Object.setPrototypeOf || {
__proto__: []
} instanceof Array && function(t, e) {
t.__proto__ = e;
} || function(t, e) {
for (var i in e) Object.prototype.hasOwnProperty.call(e, i) && (t[i] = e[i]);
})(t, e);
}, function(t, e) {
r(t, e);
function i() {
this.constructor = t;
}
t.prototype = null === e ? Object.create(e) : (i.prototype = e.prototype, new i());
});
Object.defineProperty(i, "__esModule", {
value: !0
});
var o = t("../../../core/fsmNode/GLFruitStateNode"), a = t("../../GLFruitApp"), u = t("../../traits/GLFruitAddFruitChoiceListTraitCtrl"), s = function(t) {
n(e, t);
function e() {
return null !== t && t.apply(this, arguments) || this;
}
e.prototype.onEnter = function() {
var t = this.machine.getOwer();
if (t && t.getItem() && t.getItem().node && cc.isValid(t.getItem().node)) if (u.default.getInstance().isOpen()) {
t.getItem().node.scale = t.getSpawnScale();
a.default.mergerCtr.onSpawnFruitFinished(t);
} else {
t.getItem().node.scale = 0;
cc.tween(t.getItem().node).to(.15, {
scale: 1.6 * t.getSpawnScale()
}).to(.15, {
scale: t.getSpawnScale()
}).delay(.1).call(function() {
a.default.mergerCtr.onSpawnFruitFinished(t);
}).start();
}
};
e.prototype.onExit = function() {};
return e;
}(o.default);
i.default = s;
cc._RF.pop();
}, {
"../../../core/fsmNode/GLFruitStateNode": "GLFruitStateNode",
"../../GLFruitApp": "GLFruitApp",
"../../traits/GLFruitAddFruitChoiceListTraitCtrl": "GLFruitAddFruitChoiceListTraitCtrl"
} ],
GLFruitSpecialColliderRule: [ function(t, e, i) {
"use strict";
cc._RF.push(e, "f0132h4zEtLyrTdBUOgW+yM", "GLFruitSpecialColliderRule");
var r, n = this && this.__extends || (r = function(t, e) {
return (r = Object.setPrototypeOf || {
__proto__: []
} instanceof Array && function(t, e) {
t.__proto__ = e;
} || function(t, e) {
for (var i in e) Object.prototype.hasOwnProperty.call(e, i) && (t[i] = e[i]);
})(t, e);
}, function(t, e) {
r(t, e);
function i() {
this.constructor = t;
}
t.prototype = null === e ? Object.create(e) : (i.prototype = e.prototype, new i());
}), o = this && this.__decorate || function(t, e, i, r) {
var n, o = arguments.length, a = o < 3 ? e : null === r ? r = Object.getOwnPropertyDescriptor(e, i) : r;
if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) a = Reflect.decorate(t, e, i, r); else for (var u = t.length - 1; u >= 0; u--) (n = t[u]) && (a = (o < 3 ? n(a) : o > 3 ? n(e, i, a) : n(e, i)) || a);
return o > 3 && a && Object.defineProperty(e, i, a), a;
}, a = this && this.__values || function(t) {
var e = "function" == typeof Symbol && Symbol.iterator, i = e && t[e], r = 0;
if (i) return i.call(t);
if (t && "number" == typeof t.length) return {
next: function() {
t && r >= t.length && (t = void 0);
return {
value: t && t[r++],
done: !t
};
}
};
throw new TypeError(e ? "Object is not iterable." : "Symbol.iterator is not defined.");
};
Object.defineProperty(i, "__esModule", {
value: !0
});
var u = t("../../core/FruitEventCenter"), s = t("../../core/FruitEventCenter"), l = t("../FruitFeature"), c = t("../GLFruitApp"), d = t("../play/GLFruitItem"), p = cc._decorator, f = p.ccclass, h = (p.property, 
function(t) {
n(e, t);
function e() {
var e = null !== t && t.apply(this, arguments) || this;
e._fruitMap = new Map();
return e;
}
e.prototype.onLoad = function() {
u.FruitEventCenter.addListener(s.FruitEventType.FruitSpecialColliderRuleStart, this.onFruitSpecialColliderRuleStart, this);
u.FruitEventCenter.addListener(s.FruitEventType.FruitSpecialColliderRuleEnd, this.onFruitSpecialColliderRuleEnd, this);
};
e.prototype.onDestroy = function() {
u.FruitEventCenter.removeListener(s.FruitEventType.FruitSpecialColliderRuleStart, this.onFruitSpecialColliderRuleStart, this);
u.FruitEventCenter.removeListener(s.FruitEventType.FruitSpecialColliderRuleEnd, this.onFruitSpecialColliderRuleEnd, this);
this._fruitMap.clear();
};
e.prototype.onFruitSpecialColliderRuleStart = function(t) {
var e = this;
if (l.default.isOpen(l.FruitFeat.FruitSpecialColliderRule)) {
console.log("onFruitSpecialColliderRuleStart", t ? t.getId() : null);
this._fruitMap.forEach(function(t, i) {
e.resetFruitRestitution(i);
e.resetFruitRestitution(t);
});
this._fruitMap.clear();
this.findClosestFruitAndShowShadow();
this._fruitMap.forEach(function(t, i) {
e.setFruitRestitution(i, .5);
e.setFruitRestitution(t, .5);
});
}
};
e.prototype.onFruitSpecialColliderRuleEnd = function(t) {
if (l.default.isOpen(l.FruitFeat.FruitSpecialColliderRule)) {
var e = t[0], i = t[1];
if (e && this._fruitMap.has(e) && i && this._fruitMap.get(e) == i) {
console.log("onFruitSpecialColliderRuleEnd", e.getId(), i.getId());
this.resetFruitRestitution(e);
this.resetFruitRestitution(i);
this._fruitMap.clear();
}
}
};
e.prototype.setFruitRestitution = function(t, e) {
if (t && t.getItem() && t.getItem().node && cc.isValid(t.getItem().node)) {
var i = t.getItem().node.getComponent(cc.PhysicsCircleCollider);
if (cc.isValid(i)) {
i.restitution = e;
i.apply();
}
}
};
e.prototype.resetFruitRestitution = function(t) {
if (t && t.getItem() && t.getItem().node && cc.isValid(t.getItem().node)) {
var e = c.default.physicsConfigCtr.getCurPhysicsData(), i = t.getItem().node.getComponent(cc.PhysicsCircleCollider);
if (cc.isValid(i) && e) {
i.restitution = e.FruitBounciness;
i.apply();
}
}
};
e.prototype.findClosestFruitAndShowShadow = function() {
var t, e, i = c.default.mergerCtr.getReadyDropFruit();
if (i && i.getItem() && i.getItem().node && cc.isValid(i.getItem().node)) {
var r = i.getItem().node.convertToWorldSpaceAR(cc.Vec2.ZERO), n = d.default.getFruitRadius(i.getId()) * i.getItem().node.scale, o = c.default.mergerCtr.getFruits();
if (o && 0 !== o.length) {
var u = -Infinity, s = null, l = null;
try {
for (var p = a(o), f = p.next(); !f.done; f = p.next()) {
var h = f.value;
if (h && h.getItem() && h.getItem().node && cc.isValid(h.getItem().node)) {
var g = h.getItem().node.convertToWorldSpaceAR(cc.Vec2.ZERO), F = d.default.getFruitRadius(h.getId()) * h.getItem().node.scale, y = r.x - g.x, v = .9 * (F + n), m = v * v, _ = y * y;
if (_ <= m) {
var L = Math.sqrt(m - _), C = g.y + L;
if (C > u) {
u = C;
s = h;
l = g;
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
f && !f.done && (e = p.return) && e.call(p);
} finally {
if (t) throw t.error;
}
}
s && l && this._fruitMap.set(i, s);
}
}
};
return o([ f ], e);
}(cc.Component));
i.default = h;
cc._RF.pop();
}, {
"../../core/FruitEventCenter": "FruitEventCenter",
"../FruitFeature": "FruitFeature",
"../GLFruitApp": "GLFruitApp",
"../play/GLFruitItem": "GLFruitItem"
} ],
GLFruitStateMachine: [ function(t, e, i) {
"use strict";
cc._RF.push(e, "99d1bDvhKdPtoC6jGiYgR1Q", "GLFruitStateMachine");
Object.defineProperty(i, "__esModule", {
value: !0
});
var r = t("../../logic/play/GLFruit"), n = function() {
function t(t) {
this.stateNodes = {};
this.curStateNode = null;
this.ower = null;
this.curNodeName = null;
this.previousNodeName = null;
this.ower = t;
}
t.prototype.getOwer = function() {
return this.ower;
};
t.prototype.add = function(t, e) {
if (!this.stateNodes[t]) {
e.onCreate(this);
this.stateNodes[t] = e;
}
};
t.prototype.run = function(t) {
var e = this.tryGetNode(t);
if (null != e) {
this.previousNodeName = this.curNodeName;
this.curNodeName = t;
this.curStateNode = e;
this.curStateNode.onEnter();
}
};
t.prototype.changeState = function(t) {
var e = this.tryGetNode(t);
if (null != e && cc.isValid(e)) {
var i = this.getOwer();
i && i instanceof r.default && i.getItem() && i.getItem().node && (i.getItem().node.name = i.getName() + "_" + t);
this.previousNodeName = this.curNodeName;
this.curNodeName = t;
this.curStateNode && this.curStateNode.onExit();
this.curStateNode = e;
this.curStateNode.onEnter();
}
};
t.prototype.getCurStateName = function() {
return this.curNodeName;
};
t.prototype.getPreviousNodeName = function() {
return this.previousNodeName;
};
t.prototype.tryGetNode = function(t) {
return this.stateNodes[t];
};
t.prototype.isState = function(t) {
return this.curNodeName == t;
};
return t;
}();
i.default = n;
cc._RF.pop();
}, {
"../../logic/play/GLFruit": "GLFruit"
} ],
GLFruitStateNode: [ function(t, e, i) {
"use strict";
cc._RF.push(e, "66b75wveEhCfLw/g4ZFIKHr", "GLFruitStateNode");
Object.defineProperty(i, "__esModule", {
value: !0
});
var r = function() {
function t() {}
t.prototype.onCreate = function(t) {
this.machine = t;
return this;
};
t.prototype.onEnter = function() {};
t.prototype.onUpdate = function() {};
t.prototype.onExit = function() {};
return t;
}();
i.default = r;
cc._RF.pop();
}, {} ],
GLFruitTimerMgr: [ function(t, e, i) {
"use strict";
cc._RF.push(e, "960a8ztthRObZUdIqC7kinz", "GLFruitTimerMgr");
var r = this && this.__awaiter || function(t, e, i, r) {
return new (i || (i = Promise))(function(n, o) {
function a(t) {
try {
s(r.next(t));
} catch (t) {
o(t);
}
}
function u(t) {
try {
s(r.throw(t));
} catch (t) {
o(t);
}
}
function s(t) {
t.done ? n(t.value) : (e = t.value, e instanceof i ? e : new i(function(t) {
t(e);
})).then(a, u);
var e;
}
s((r = r.apply(t, e || [])).next());
});
}, n = this && this.__generator || function(t, e) {
var i, r, n, o, a = {
label: 0,
sent: function() {
if (1 & n[0]) throw n[1];
return n[1];
},
trys: [],
ops: []
};
return o = {
next: u(0),
throw: u(1),
return: u(2)
}, "function" == typeof Symbol && (o[Symbol.iterator] = function() {
return this;
}), o;
function u(t) {
return function(e) {
return s([ t, e ]);
};
}
function s(o) {
if (i) throw new TypeError("Generator is already executing.");
for (;a; ) try {
if (i = 1, r && (n = 2 & o[0] ? r.return : o[0] ? r.throw || ((n = r.return) && n.call(r), 
0) : r.next) && !(n = n.call(r, o[1])).done) return n;
(r = 0, n) && (o = [ 2 & o[0], n.value ]);
switch (o[0]) {
case 0:
case 1:
n = o;
break;

case 4:
a.label++;
return {
value: o[1],
done: !1
};

case 5:
a.label++;
r = o[1];
o = [ 0 ];
continue;

case 7:
o = a.ops.pop();
a.trys.pop();
continue;

default:
if (!(n = a.trys, n = n.length > 0 && n[n.length - 1]) && (6 === o[0] || 2 === o[0])) {
a = 0;
continue;
}
if (3 === o[0] && (!n || o[1] > n[0] && o[1] < n[3])) {
a.label = o[1];
break;
}
if (6 === o[0] && a.label < n[1]) {
a.label = n[1];
n = o;
break;
}
if (n && a.label < n[2]) {
a.label = n[2];
a.ops.push(o);
break;
}
n[2] && a.ops.pop();
a.trys.pop();
continue;
}
o = e.call(t, a);
} catch (t) {
o = [ 6, t ];
r = 0;
} finally {
i = n = 0;
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
var o = function() {
function t() {
this.timers = [];
}
t.prototype.addOnce = function(t, e, i) {
void 0 === i && (i = null);
return this.add(t, e, i, 1);
};
t.prototype.add = function(t, e, i, r) {
void 0 === i && (i = null);
void 0 === r && (r = -1);
if (0 != r) {
this.remove(e, i);
var n = {
tick: 0,
interval: t,
func: e,
target: i,
repeat: r,
isPause: !1,
isOk: !1
};
this.timers.push(n);
return n;
}
};
t.prototype.remove = function(t, e) {
for (var i = this.timers.length - 1; i >= 0; i--) if (this.timers[i].func == t && this.timers[i].target == e) {
this.timers.splice(i, 1);
break;
}
};
t.prototype.removeByTimer = function(t) {
for (var e = this.timers.length - 1; e >= 0; e--) if (this.timers[e] == t) {
this.timers.splice(e, 1);
break;
}
};
t.prototype.tick = function(t) {
for (var e = this.timers.length - 1; e >= 0; e--) {
var i = this.timers[e];
if (!i.isPause) {
i.tick += t;
if (i.tick >= i.interval) {
i.tick -= i.interval;
if (i.repeat > 0) {
i.isOk = !0;
i.repeat--;
0 == i.repeat && this.timers.splice(e, 1);
}
i.func.call(i.target);
}
}
}
};
t.prototype.resetTimer = function(t) {
var e = this.timers.indexOf(t);
e > -1 && (this.timers[e].tick = 0);
};
t.prototype.wait = function(t, e) {
void 0 === e && (e = null);
return r(this, void 0, Promise, function() {
var i = this;
return n(this, function() {
return [ 2, new Promise(function(r) {
i.add(t, function() {
r();
}, e, 1);
}) ];
});
});
};
t.prototype.clear = function() {
this.timers = [];
};
return t;
}();
i.default = o;
cc._RF.pop();
}, {} ],
GLFruitTools: [ function(t, e, i) {
"use strict";
cc._RF.push(e, "d7eecbND/dGMKYfaWa4jSA/", "GLFruitTools");
var r = this && this.__read || function(t, e) {
var i = "function" == typeof Symbol && t[Symbol.iterator];
if (!i) return t;
var r, n, o = i.call(t), a = [];
try {
for (;(void 0 === e || e-- > 0) && !(r = o.next()).done; ) a.push(r.value);
} catch (t) {
n = {
error: t
};
} finally {
try {
r && !r.done && (i = o.return) && i.call(o);
} finally {
if (n) throw n.error;
}
}
return a;
}, n = this && this.__values || function(t) {
var e = "function" == typeof Symbol && Symbol.iterator, i = e && t[e], r = 0;
if (i) return i.call(t);
if (t && "number" == typeof t.length) return {
next: function() {
t && r >= t.length && (t = void 0);
return {
value: t && t[r++],
done: !t
};
}
};
throw new TypeError(e ? "Object is not iterable." : "Symbol.iterator is not defined.");
};
Object.defineProperty(i, "__esModule", {
value: !0
});
var o = t("../GLFruitApp"), a = t("../traits/GLFruitAddFruitChoiceListTraitCtrl"), u = function() {
function t() {}
t.getRandomInt = function(t, e) {
return Math.floor(Math.random() * (e - t)) + t;
};
t.GetFruitNameById = function(t) {
return "Fruit_" + String(t).padStart(2, "0");
};
t.GetFruitMergerEffectNameById = function(t) {
return "MergeNew_fx" + String(t).padStart(2, "0") + "_B";
};
t.GetCenterPosition = function(t, e) {
if (!cc.isValid(t) || !cc.isValid(e)) return cc.Vec3.ZERO;
var i = t.convertToWorldSpaceAR(cc.Vec3.ZERO), r = e.convertToWorldSpaceAR(cc.Vec3.ZERO);
return i.add(r).mul(.5);
};
t.NewNode = function(t, e, i) {
void 0 === i && (i = cc.Vec3.ZERO);
if (!e || !cc.isValid(e)) return null;
var r = new cc.Node();
r.setParent(e);
r.position = i;
r.name = t;
return r;
};
t.FindNode = function(t) {
for (var e = [], i = 1; i < arguments.length; i++) e[i - 1] = arguments[i];
if (!t || !cc.isValid(t)) return null;
var r = t;
if (e && e.length > 0) for (var n = 0; n < e.length; n++) {
if (null == r || !cc.isValid(r)) return null;
r = r.getChildByName(e[n]);
}
return r;
};
t.HexToColor = function(t) {
t = t.replace(/^#/, "");
var e = parseInt(t.substring(0, 2), 16), i = parseInt(t.substring(2, 4), 16), r = parseInt(t.substring(4, 6), 16);
return new cc.Color(e, i, r);
};
t.ParsePlayCardRecordContent = function(t) {
var e = JSON.parse(t), i = [];
e.content && e.content.length > 0 && (i = e.content.split(";").map(function(t) {
var e = t.split(",").map(Number), i = r(e, 4);
return {
id: i[0],
x: i[1],
y: i[2],
angle: i[3],
round: e.length > 4 ? e[4] : 0
};
}));
return a.default.getInstance().isOpen() ? {
readyDropId: e.readyDropId,
nextId: e.nextId,
nextIds: e.nextIds,
fruits: i,
turnCount: e.turnCount || 0
} : {
readyDropId: e.readyDropId,
nextId: e.nextId,
fruits: i,
turnCount: e.turnCount || 0
};
};
t.ExplodeGoldWatermelon = function(t) {
var e, i, r = o.default.mergerCtr.getFruits();
r = r.filter(function(e) {
return !!(e && e.getItem() && e.getItem().node && cc.isValid(e.getItem().node)) && e.getItem().node.getPosition().sub(t).mag() <= 500 && !e.isGoldWatermelon();
});
try {
for (var a = n(r), u = a.next(); !u.done; u = a.next()) {
var s = u.value;
if (s && s.getItem() && s.getItem().node && cc.isValid(s.getItem().node)) {
s.getItem().node.getPosition().sub(t).mag();
var l = s.getItem().getRigidbody();
if (l && cc.isValid(l.node)) {
var c = l.node.getPosition(), d = c.sub(t).normalize(), p = (c.sub(t).mag(), d.add(cc.v2(0, 10)).normalize());
l.applyLinearImpulse(p.mul(100), c, !0);
}
}
}
} catch (t) {
e = {
error: t
};
} finally {
try {
u && !u.done && (i = a.return) && i.call(a);
} finally {
if (e) throw e.error;
}
}
};
t.CalcScoreNormal = function(e, i) {
var r = o.default.user.getDataVo(), n = 0, a = 10 * e;
if (i) {
var u = r.stepMoves;
u <= 0 && (u = 1);
var s = Math.max(4, r.maxFruitLevel), l = Math.pow(2, s - 4) - 1, c = 10 * s * t.Clamp(l / u, .75, 1.25);
n = Math.ceil(a + c);
} else n = a;
return n;
};
t.Clamp = function(t, e, i) {
return Math.max(e, Math.min(i, t));
};
t.ShakeNode = function(t, e, i, r) {
void 0 === e && (e = .03);
void 0 === i && (i = 5);
void 0 === r && (r = 6);
if (t && cc.isValid(t)) {
for (var n = t.getPosition(), o = [], a = 0; a < r; a++) {
var u = 2 * (Math.random() - .5) * i, s = 2 * (Math.random() - .5) * i;
o.push(cc.tween().to(e, {
x: n.x + u,
y: n.y + s
}));
}
o.push(cc.tween().to(e, {
x: n.x,
y: n.y
}));
var l = cc.tween(t);
o.forEach(function(t) {
return l = l.then(t);
});
l.start();
}
};
t.RoundToTwo = function(t) {
return Math.round(100 * t) / 100;
};
t.FormatToTwo = function(e) {
return t.RoundToTwo(e).toFixed(2);
};
t.ShalkeGlodeWarmelon = function(t, e, i) {
if (t && cc.isValid(t)) {
var r = [ {
frame: 5,
x: 1.08,
y: 1.05
}, {
frame: 5,
x: .78,
y: .9
}, {
frame: 5,
x: 1.08,
y: 1.05
}, {
frame: 5,
x: .87,
y: .9
}, {
frame: 4,
x: 1.08,
y: 1.05
}, {
frame: 4,
x: .8,
y: .8
}, {
frame: 7,
x: 1.3,
y: 1.3
} ], n = cc.tween(t);
(n = (n = (n = (n = (n = (n = n.to(r[0].frame / 60, {
scaleX: r[0].x,
scaleY: r[0].y
})).to(r[1].frame / 60, {
scaleX: r[1].x,
scaleY: r[1].y
})).to(r[2].frame / 60, {
scaleX: r[2].x,
scaleY: r[2].y
})).to(r[3].frame / 60, {
scaleX: r[3].x,
scaleY: r[3].y
})).to(r[4].frame / 60, {
scaleX: r[4].x,
scaleY: r[4].y
})).to(r[5].frame / 60, {
scaleX: r[5].x,
scaleY: r[5].y
})).call(function() {
e && e();
});
(n = n.to(r[6].frame / 60, {
scaleX: r[6].x,
scaleY: r[6].y
})).call(function() {
i && i();
});
n.start();
} else i && i();
};
return t;
}();
i.default = u;
cc._RF.pop();
}, {
"../GLFruitApp": "GLFruitApp",
"../traits/GLFruitAddFruitChoiceListTraitCtrl": "GLFruitAddFruitChoiceListTraitCtrl"
} ],
GLFruitTweenBreath: [ function(t, e, i) {
"use strict";
cc._RF.push(e, "7caefM1Yf1NiLjq0eNak6dW", "GLFruitTweenBreath");
var r, n = this && this.__extends || (r = function(t, e) {
return (r = Object.setPrototypeOf || {
__proto__: []
} instanceof Array && function(t, e) {
t.__proto__ = e;
} || function(t, e) {
for (var i in e) Object.prototype.hasOwnProperty.call(e, i) && (t[i] = e[i]);
})(t, e);
}, function(t, e) {
r(t, e);
function i() {
this.constructor = t;
}
t.prototype = null === e ? Object.create(e) : (i.prototype = e.prototype, new i());
}), o = this && this.__decorate || function(t, e, i, r) {
var n, o = arguments.length, a = o < 3 ? e : null === r ? r = Object.getOwnPropertyDescriptor(e, i) : r;
if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) a = Reflect.decorate(t, e, i, r); else for (var u = t.length - 1; u >= 0; u--) (n = t[u]) && (a = (o < 3 ? n(a) : o > 3 ? n(e, i, a) : n(e, i)) || a);
return o > 3 && a && Object.defineProperty(e, i, a), a;
};
Object.defineProperty(i, "__esModule", {
value: !0
});
var a = cc._decorator, u = a.ccclass, s = a.property, l = function(t) {
n(e, t);
function e() {
var e = null !== t && t.apply(this, arguments) || this;
e.toBig = 1.2;
e.duration = .5;
e._tween = null;
e.initScale = 1;
return e;
}
e.prototype.onLoad = function() {
this.initScale = this.node.scale;
};
e.prototype.onEnable = function() {
this.playBreathAnimation();
};
e.prototype.onDestroy = function() {
this.stopBreathAnimation();
};
e.prototype.playBreathAnimation = function() {
this._tween = cc.tween(this.node).to(this.duration, {
scale: this.toBig
}, {
easing: "line"
}).to(this.duration, {
scale: this.initScale
}, {
easing: "line"
});
cc.tween(this.node).repeatForever(this._tween.start()).start();
};
e.prototype.stopBreathAnimation = function() {
if (this._tween) {
this._tween.stop();
this._tween = null;
}
};
o([ s ], e.prototype, "toBig", void 0);
o([ s ], e.prototype, "duration", void 0);
return o([ u ], e);
}(cc.Component);
i.default = l;
cc._RF.pop();
}, {} ],
GLFruitTwoFruitOnceTraitCtrl: [ function(t, e, i) {
"use strict";
cc._RF.push(e, "1995ddLATdFWpKn4U1TT+Gr", "GLFruitTwoFruitOnceTraitCtrl");
Object.defineProperty(i, "__esModule", {
value: !0
});
var r = t("../../core/FruitEventCenter"), n = t("../GLFruitApp"), o = t("../defines/GLFruitDefine"), a = t("../FruitFeature"), u = t("../GLFruitRoundLogEventCtr"), s = t("./GLFruitAddFruitChoiceListTraitCtrl"), l = function() {
function t() {
this._featureName = "GLFruitTwoFruitOnce";
this._triggerRoundInterval = 3;
this._dropInterval = 1;
this._finishedRoundCount = 0;
this._isTwoFruitRoundActive = !1;
this._isWaitingSecondDrop = !1;
this._secondDropTimer = null;
this._secondFruit = null;
this._secondFruitDropTargetPos = null;
this._isSecondFruitPending = !1;
this._hasPendingMidRollAd = !1;
this._pendingMidRollAdShowWaitView = !1;
this.STORAGE_KEY = "GLFruitTwoFruitOnce_data";
}
t.getInstance = function() {
null == this._instance && (this._instance = new t());
return this._instance;
};
t.prototype.isOpen = function() {
return GL.Game.IsFeatureOpen(this._featureName);
};
t.prototype.init = function() {
this.getFeatureParam();
this.loadData();
console.log("【" + this._featureName + "】初始化 - triggerRoundInterval: " + this._triggerRoundInterval + ", dropInterval: " + this._dropInterval + "s");
};
t.prototype.getFeatureParam = function() {
this._triggerRoundInterval = GL.Game.getFeatureKeyParam(this._featureName, "triggerRoundInterval") || 3;
this._dropInterval = GL.Game.getFeatureKeyParam(this._featureName, "dropInterval") || 1;
};
t.prototype.loadData = function() {
var t = cc.sys.localStorage.getItem(this.STORAGE_KEY);
if (null != t && "" != t) try {
var e = JSON.parse(t);
this._finishedRoundCount = e.finishedRoundCount || 0;
this._isTwoFruitRoundActive = e.isTwoFruitRoundActive || !1;
} catch (t) {
console.error("【" + this._featureName + "】加载数据失败:", t);
}
};
t.prototype.saveData = function() {
var t = {
finishedRoundCount: this._finishedRoundCount,
isTwoFruitRoundActive: this._isTwoFruitRoundActive
};
cc.sys.localStorage.setItem(this.STORAGE_KEY, JSON.stringify(t));
};
t.prototype.onGameEnd = function() {
this.clearSecondFruit();
this.addFinishedRound();
};
t.prototype.onRestart = function() {
this.clearSecondFruit();
this.addFinishedRound();
};
t.prototype.addFinishedRound = function() {
if (this._isTwoFruitRoundActive) {
this._isTwoFruitRoundActive = !1;
this._finishedRoundCount = 0;
console.log("【" + this._featureName + "】双果局结束，重置标志");
this.saveData();
} else {
this._finishedRoundCount++;
console.log("【" + this._featureName + "】对局结束 - finishedRoundCount: " + this._finishedRoundCount + "/" + this._triggerRoundInterval);
if (this._finishedRoundCount >= this._triggerRoundInterval) {
this._isTwoFruitRoundActive = !0;
this._finishedRoundCount = 0;
console.log("【" + this._featureName + "】达到触发条件，下一局进入双果局");
}
this.saveData();
}
};
t.prototype.onRoundStart = function() {
this._isWaitingSecondDrop = !1;
this.clearSecondDropTimer();
console.log("【" + this._featureName + "】新对局开始 - isTwoFruitRoundActive: " + this._isTwoFruitRoundActive);
};
t.prototype.isTwoFruitRound = function() {
return this._isTwoFruitRoundActive;
};
t.prototype.canDoubleDrop = function() {
if (!this.isTwoFruitRound()) return !1;
if (this._isWaitingSecondDrop) return !1;
if (!this._secondFruit) {
console.log("【" + this._featureName + "】canDoubleDrop: _secondFruit 不存在");
return !1;
}
return !0;
};
t.prototype.isWaitingSecondDrop = function() {
return this._isWaitingSecondDrop;
};
t.prototype.getSecondFruit = function() {
return this._secondFruit;
};
t.prototype.getPendingSecondDropRecord = function() {
return this._isWaitingSecondDrop && this._secondFruit && this._secondFruitDropTargetPos ? {
id: this._secondFruit.getId(),
targetX: this._secondFruitDropTargetPos.x,
targetY: this._secondFruitDropTargetPos.y,
targetZ: this._secondFruitDropTargetPos.z
} : null;
};
t.prototype.appendPendingSecondDropRecord = function(t) {
if (this.isOpen() && t) {
var e = this.getPendingSecondDropRecord();
e && (t.twoFruitPendingSecondDrop = e);
}
};
t.prototype.tryRestorePendingSecondDropFromRecord = function(t, e) {
if (!(this.isOpen() && this.isTwoFruitRound() && t && e)) return !1;
var i = null;
try {
i = JSON.parse(e).twoFruitPendingSecondDrop;
} catch (t) {
console.error("【" + this._featureName + "】解析双果局待恢复数据失败:", t);
return !1;
}
if (!i) return !1;
if (s.default.getInstance().isOpen()) {
var r = t.nextIds;
null == r && (r = [ t.nextId ]);
for (var o = r.length; o < s.QUEUE_MAX_LENGTH; o++) r.push(n.default.mergerCtr.getFruitId());
n.default.mergerCtr.initTwoFruitNextFruitListOnly(r);
} else n.default.mergerCtr.initTwoFruitNextFruitOnly(t.nextId);
this.restorePendingSecondDrop(i);
return !0;
};
t.prototype.restorePendingSecondDrop = function(t) {
if (this.isOpen() && this.isTwoFruitRound() && t) {
this.clearSecondFruit();
this.clearSecondDropTimer();
this._isWaitingSecondDrop = !1;
this._isSecondFruitPending = !0;
this._secondFruitDropTargetPos = cc.v3(t.targetX, t.targetY, t.targetZ || 0);
this._secondFruit = n.default.mergerCtr.spawnFruit(t.id);
if (this._secondFruit && this._secondFruit.getItem() && cc.isValid(this._secondFruit.getItem().node)) {
this._secondFruit.position = this._secondFruitDropTargetPos;
this.dropSecondFruit();
} else {
this._isSecondFruitPending = !1;
this._secondFruitDropTargetPos = null;
}
}
};
t.prototype.isSecondFruitPending = function() {
return this._isSecondFruitPending;
};
t.prototype.setSecondFruitPending = function(t) {
this._isSecondFruitPending = t;
console.log("【" + this._featureName + "】setSecondFruitPending: " + t);
};
t.prototype.hasPendingAd = function() {
return this._hasPendingMidRollAd;
};
t.prototype.setPendingAd = function(t, e) {
void 0 === e && (e = !1);
this._hasPendingMidRollAd = t;
t && (this._pendingMidRollAdShowWaitView = this._pendingMidRollAdShowWaitView || e);
};
t.prototype.getPendingAdShowWaitView = function() {
return this._pendingMidRollAdShowWaitView;
};
t.prototype.clearPendingAd = function() {
this._hasPendingMidRollAd = !1;
this._pendingMidRollAdShowWaitView = !1;
};
t.prototype.checkAndShowPendingAd = function() {
if (this._hasPendingMidRollAd) {
var t = this._pendingMidRollAdShowWaitView;
this.clearPendingAd();
n.default.adCtr.doShowMidRollAd(t);
}
};
t.prototype.onReadyDropFruitReady = function(t) {
if (this.isOpen() && this.isTwoFruitRound() && t && t.getItem() && cc.isValid(t.getItem().node)) {
this.clearSecondFruit();
var e = t.getId();
this._secondFruit = n.default.mergerCtr.spawnFruit(e);
if (this._secondFruit && this._secondFruit.getItem() && cc.isValid(this._secondFruit.getItem().node)) {
var i = t.getRadius(), r = t.getItem().node.scale, o = 2 * i * r, a = t.position;
this._secondFruit.position = cc.v3(a.x, a.y + o, a.z);
this._secondFruit.getItem().node.scale = r;
console.log("【" + this._featureName + "】创建第二个水果 - ID: " + e + ", 半径: " + i + ", 偏移Y: +" + o);
} else console.error("【" + this._featureName + "】创建第二个水果失败");
}
};
t.prototype.updateSecondFruitPosition = function(t) {
if (this.isOpen() && this.isTwoFruitRound() && this._secondFruit && this._secondFruit.getItem() && cc.isValid(this._secondFruit.getItem().node) && t && t.getItem() && cc.isValid(t.getItem().node)) {
var e = 2 * t.getRadius() * t.getItem().node.scale, i = t.position;
this._secondFruit.position = cc.v3(i.x, i.y + e, i.z);
}
};
t.prototype.triggerDoubleDrop = function(t) {
var e = this;
if (this.canDoubleDrop()) {
this._isWaitingSecondDrop = !0;
this._secondFruitDropTargetPos = t ? t.clone() : null;
if (this._secondFruit && this._secondFruit.getItem() && cc.isValid(this._secondFruit.getItem().node)) {
var i = this._secondFruit.getItem().node, r = this._secondFruit.position, a = this._secondFruitDropTargetPos || t, u = Math.abs(r.y - a.y) / Math.abs(o.GLFruitDefine.BaseDropVelocity) / 4;
n.default.gameStateCtr.getGameView().scheduleOnce(function() {
e._secondFruit && cc.isValid(i) && cc.tween(i).to(u, {
position: a
}).start();
}, .05);
}
console.log("【" + this._featureName + "】触发双果下落，" + this._dropInterval + "秒后下落第二个水果");
this._secondDropTimer = n.default.timeCtr.addOnce(this._dropInterval, function() {
e._isWaitingSecondDrop = !1;
e._secondDropTimer = null;
e.dropSecondFruit();
});
}
};
t.prototype.dropSecondFruit = function() {
var t = this;
if (n.default.gameStateCtr.isPlaySatte()) {
var e = this._secondFruit;
if (e && e.getItem() && cc.isValid(e.getItem().node)) {
console.log("【" + this._featureName + "】执行第二个水果下落");
var i = e.getItem(), s = n.default.mergerCtr;
s.increaseTurnCount();
a.default.isOpen(a.FruitFeat.FruitDisableClickDropSound) || n.default.audioMgr.playEffect(o.GLFruitAudioDefine.fruit_fall);
n.default.user.getDataVo().stepMoves++;
s.tryClearCombo();
i.node.scale = o.GLFruitDefine.FruitScale;
e.runActiveState();
r.FruitEventCenter.dispatchEvent(r.FruitEventType.FruitSpecialColliderRuleStart, e);
s.addFruit(e);
u.default.getInstance().step();
s.updateLastDropTime();
this._secondFruit = null;
this._secondFruitDropTargetPos = null;
this._isSecondFruitPending = !1;
n.default.adCtr.resetAutoShowTimer();
this.hasPendingAd() && n.default.gameStateCtr.getGameView().scheduleOnce(function() {
t.checkAndShowPendingAd();
}, .5);
this.generateNextReadyDropFruit();
} else {
console.error("【" + this._featureName + "】第二个水果不存在或无效");
this._isSecondFruitPending = !1;
this._secondFruitDropTargetPos = null;
}
} else {
console.log("【" + this._featureName + "】非游戏状态，取消第二个水果下落");
this.clearSecondFruit();
this._isSecondFruitPending = !1;
this._secondFruitDropTargetPos = null;
}
};
t.prototype.generateNextReadyDropFruit = function() {
var t = n.default.mergerCtr;
if (s.default.getInstance().isOpen()) {
if (n.default.guideCtr.isBeginner()) return;
if (e = s.default.getInstance().popNextFruit()) {
t.setReadyDropFruit(e);
e.runPreReadyDropState();
t.spawnFruitAndRunSpawnState(t.getFruitId());
r.FruitEventCenter.dispatchEvent(r.FruitEventType.ShowSameFruit, e.getId());
}
} else {
var e;
if (e = t.getNextFruit()) {
if (n.default.guideCtr.isBeginner()) return;
t.setReadyDropFruit(e);
e.runPreReadyDropState();
t.spawnFruitAndRunSpawnState(t.getFruitId());
r.FruitEventCenter.dispatchEvent(r.FruitEventType.ShowSameFruit, e.getId());
n.default.gameStateCtr.getGameView().showArrowTweent();
}
}
};
t.prototype.clearSecondFruit = function() {
if (this._secondFruit) {
this._secondFruit.clear();
this._secondFruit = null;
}
this._secondFruitDropTargetPos = null;
};
t.prototype.clearSecondDropTimer = function() {
if (this._secondDropTimer) {
n.default.timeCtr.removeByTimer(this._secondDropTimer);
this._secondDropTimer = null;
}
};
t.prototype.showOrHideSecondFruit = function(t) {
this._secondFruit && this._secondFruit.getItem() && cc.isValid(this._secondFruit.getItem().node) && (this._secondFruit.getItem().node.active = t);
};
t.prototype.reset = function() {
this._finishedRoundCount = 0;
this._isTwoFruitRoundActive = !1;
this._isWaitingSecondDrop = !1;
this._isSecondFruitPending = !1;
this.clearSecondDropTimer();
this.clearSecondFruit();
this.clearPendingAd();
this.saveData();
};
t.prototype.clear = function() {
this.clearSecondDropTimer();
this.clearSecondFruit();
this._isWaitingSecondDrop = !1;
this._isSecondFruitPending = !1;
this.clearPendingAd();
};
t.prototype.getDropInterval = function() {
return this._dropInterval;
};
t._instance = null;
return t;
}();
i.default = l;
cc._RF.pop();
}, {
"../../core/FruitEventCenter": "FruitEventCenter",
"../FruitFeature": "FruitFeature",
"../GLFruitApp": "GLFruitApp",
"../GLFruitRoundLogEventCtr": "GLFruitRoundLogEventCtr",
"../defines/GLFruitDefine": "GLFruitDefine",
"./GLFruitAddFruitChoiceListTraitCtrl": "GLFruitAddFruitChoiceListTraitCtrl"
} ],
GLFruitUIAdapter: [ function(t, e, i) {
"use strict";
cc._RF.push(e, "87eabmwajhCS44ZnwfdM5dG", "GLFruitUIAdapter");
var r, n = this && this.__extends || (r = function(t, e) {
return (r = Object.setPrototypeOf || {
__proto__: []
} instanceof Array && function(t, e) {
t.__proto__ = e;
} || function(t, e) {
for (var i in e) Object.prototype.hasOwnProperty.call(e, i) && (t[i] = e[i]);
})(t, e);
}, function(t, e) {
r(t, e);
function i() {
this.constructor = t;
}
t.prototype = null === e ? Object.create(e) : (i.prototype = e.prototype, new i());
}), o = this && this.__decorate || function(t, e, i, r) {
var n, o = arguments.length, a = o < 3 ? e : null === r ? r = Object.getOwnPropertyDescriptor(e, i) : r;
if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) a = Reflect.decorate(t, e, i, r); else for (var u = t.length - 1; u >= 0; u--) (n = t[u]) && (a = (o < 3 ? n(a) : o > 3 ? n(e, i, a) : n(e, i)) || a);
return o > 3 && a && Object.defineProperty(e, i, a), a;
};
Object.defineProperty(i, "__esModule", {
value: !0
});
var a = cc._decorator.ccclass, u = function(t) {
n(e, t);
function e() {
return null !== t && t.apply(this, arguments) || this;
}
i = e;
e.prototype.onLoad = function() {
i.Instance = this;
cc.game.collisionMatrix = [ [ !0 ], [ !1, !0, !0 ], [ !1, !0, !1 ] ];
cc.macro.ENABLE_MULTI_TOUCH = !1;
var t = this.getComponent(cc.Canvas);
if (t) {
var e = cc.view.getFrameSize();
if (e.width / e.height > .5625) {
t.fitHeight = !0;
t.fitWidth = !1;
} else {
t.fitHeight = !1;
t.fitWidth = !0;
}
}
};
e.prototype.onEnable = function() {};
var i;
e.Instance = null;
return i = o([ a ], e);
}(cc.Component);
i.default = u;
cc._RF.pop();
}, {} ],
GLFruitUseItemDirectTraitCtrl: [ function(t, e, i) {
"use strict";
cc._RF.push(e, "61a65h4TSZD9KSsMPjDNQ3q", "GLFruitUseItemDirectTraitCtrl");
Object.defineProperty(i, "__esModule", {
value: !0
});
var r = t("../defines/GLFruitDefine"), n = t("../GLFruitApp"), o = t("../GLFruitRoundLogEventCtr"), a = function() {
function t() {
this._featureName = "GLFruitUseItemDirect";
}
t.getInstance = function() {
null == this._instance && (this._instance = new t());
return this._instance;
};
t.prototype.isOpen = function() {
return GL.Game.IsFeatureOpen(this._featureName);
};
t.prototype.tryUsePropBombDirect = function() {
if (!this.isOpen()) return !1;
var t = n.default.propCtr.getProp(r.GLFruitPropIdDefine.Bomb);
if (t.getNum() > 0) return !1;
n.default.adCtr.showRewardsAd(function() {
t.addUsageNum(1);
n.default.roundCtr.useProp(t.getId(), !0);
o.default.getInstance().useItem(t.getId(), !0);
n.default.user.saveData();
n.default.user.syncGameData();
n.default.gameStateCtr.runBombState();
});
return !0;
};
t.prototype.tryUsePropShakeDirect = function() {
if (!this.isOpen()) return !1;
var t = n.default.propCtr.getProp(r.GLFruitPropIdDefine.Shake);
if (t.getNum() > 0) return !1;
n.default.adCtr.showRewardsAd(function() {
t.addUsageNum(1);
n.default.roundCtr.useProp(t.getId(), !0);
o.default.getInstance().useItem(t.getId(), !0);
n.default.user.saveData();
n.default.user.syncGameData();
n.default.gameStateCtr.runShakeState();
n.default.gameStateCtr.setShakeStateFromAd(!0);
});
return !0;
};
t._instance = null;
return t;
}();
i.default = a;
cc._RF.pop();
}, {
"../GLFruitApp": "GLFruitApp",
"../GLFruitRoundLogEventCtr": "GLFruitRoundLogEventCtr",
"../defines/GLFruitDefine": "GLFruitDefine"
} ],
GLFruitWinStateNode: [ function(t, e, i) {
"use strict";
cc._RF.push(e, "2d58dOYu59LK5CwW4n3tuHU", "GLFruitWinStateNode");
var r, n = this && this.__extends || (r = function(t, e) {
return (r = Object.setPrototypeOf || {
__proto__: []
} instanceof Array && function(t, e) {
t.__proto__ = e;
} || function(t, e) {
for (var i in e) Object.prototype.hasOwnProperty.call(e, i) && (t[i] = e[i]);
})(t, e);
}, function(t, e) {
r(t, e);
function i() {
this.constructor = t;
}
t.prototype = null === e ? Object.create(e) : (i.prototype = e.prototype, new i());
});
Object.defineProperty(i, "__esModule", {
value: !0
});
var o = t("../../core/fsmNode/GLFruitStateNode"), a = t("../GLFruitApp"), u = function(t) {
n(e, t);
function e() {
return null !== t && t.apply(this, arguments) || this;
}
e.prototype.onEnter = function() {
var t, e, i = window.GL;
if (null === (t = null == i ? void 0 : i.gamelobby) || void 0 === t ? void 0 : t.isChapterFusionMode()) {
a.default.isReplay = !1;
a.default.popupCtr.hidePopup();
a.default.user.getDataVo().hasLost = !1;
a.default.failZoneCtr.clear();
null === (e = i.gamelobby) || void 0 === e || e.openResultView(1, null, null);
a.default.SafeNextFrame(function() {
a.default.mergerCtr.removePhysicsComponents();
a.default.user.saveData(!1);
a.default.user.syncGameData();
a.default.ExitGame(GL.Const.ExitGameType.FromGameResult);
});
}
};
e.prototype.onExit = function() {};
return e;
}(o.default);
i.default = u;
cc._RF.pop();
}, {
"../../core/fsmNode/GLFruitStateNode": "GLFruitStateNode",
"../GLFruitApp": "GLFruitApp"
} ],
GLFruit: [ function(t, e, i) {
"use strict";
cc._RF.push(e, "78579nq+FFK3a6XNb3qD/mT", "GLFruit");
var r, n = this && this.__extends || (r = function(t, e) {
return (r = Object.setPrototypeOf || {
__proto__: []
} instanceof Array && function(t, e) {
t.__proto__ = e;
} || function(t, e) {
for (var i in e) Object.prototype.hasOwnProperty.call(e, i) && (t[i] = e[i]);
})(t, e);
}, function(t, e) {
r(t, e);
function i() {
this.constructor = t;
}
t.prototype = null === e ? Object.create(e) : (i.prototype = e.prototype, new i());
});
Object.defineProperty(i, "__esModule", {
value: !0
});
var o = t("../../core/fsmNode/GLFruitStateMachine"), a = t("../../core/GLFruitModelBase"), u = t("../GLFruitApp"), s = t("../tools/GLFruitTools"), l = t("./fsmNode/GLFruitActiveStateNode"), c = t("./fsmNode/GLFruitSpawnStateNode"), d = t("./fsmNode/GLFruitMergeStateNode"), p = t("./fsmNode/GLFruitReadyDropStateNode"), f = t("./GLFruitItem"), h = t("./fsmNode/GLFruitPreReadyDropStateNode"), g = t("../defines/GLFruitDefine"), F = t("../FruitFeature"), y = t("../FruitLongPressAccCtrl"), v = t("../ctrs/FruitWannengFruitCtrl"), m = t("../../core/FruitEventCenter"), _ = t("../traits/GLFruitAddFruitChoiceListTraitCtrl"), L = t("../traits/GLFruitChangeScaleTraitCtrl"), C = function(t) {
n(e, t);
function e() {
var e = null !== t && t.apply(this, arguments) || this;
e._item = null;
e._id = 0;
e._name = "";
e._stateMachine = null;
e._isHasPhysics = !1;
e._dataCfg = null;
e._lineColor = cc.Color.WHITE;
e._contactFruitCount = 0;
e._isHitBottmonWall = !1;
e._round = -1;
e._hasTriggeredWannengEffect = !1;
return e;
}
Object.defineProperty(e.prototype, "position", {
get: function() {
return cc.isValid(this._item) && cc.isValid(this._item.node) ? this._item.node.position : cc.Vec3.ZERO;
},
set: function(t) {
if (cc.isValid(this._item) && cc.isValid(this._item.node)) {
this._item.getRigidbody() || this._item.getPhysicsCircleCollider();
this._item.node.position = t;
}
},
enumerable: !1,
configurable: !0
});
e.prototype.getItem = function() {
return this._item;
};
e.Compare = function(t, e) {
return null != t && null != e && t.getId() == e.getId();
};
e.Create = function(t) {
F.default.isOpen(F.FruitFeat.FruitWannengFruit) && (t = v.default.getInstance().handleWannengFruitRecordFruitId(t));
var i = new e();
i.init(t);
return i;
};
e.CreateWithPhysics = function(t) {
F.default.isOpen(F.FruitFeat.FruitWannengFruit) && (t = v.default.getInstance().handleWannengFruitRecordFruitId(t));
var i = new e();
i.initWithPhysics(t);
return i;
};
e.prototype.init = function(t) {
this._id = t;
this._name = s.default.GetFruitNameById(t);
this.initStateMachine();
var e = u.default.poolCtr.get(this._name);
if (e) {
this._dataCfg = u.default.fruitConfigCtr.getById(t);
this._item = e.getComponent(f.default);
this._item.init(this);
this._isHasPhysics = !1;
this._lineColor = s.default.HexToColor(this._dataCfg.line);
}
};
e.prototype.initStateMachine = function() {
this._stateMachine = new o.default(this);
this._stateMachine.add(e.State.GLFruitSpawnStateNode, new c.default());
this._stateMachine.add(e.State.GLFruitReadyDropStateNode, new p.default());
this._stateMachine.add(e.State.GLFruitPreReadyDropStateNode, new h.default());
this._stateMachine.add(e.State.GLFruitActiveStateNode, new l.default());
this._stateMachine.add(e.State.GLFruitMergeStateNode, new d.default());
};
e.prototype.activePhysicsState = function() {
if (null != this.getItem() && null != this.getItem().node && cc.isValid(this.getItem().node)) {
this.getItem().node.scale = g.GLFruitDefine.FruitScale;
L.default.getInstance().isOpen() && (this.getItem().node.scale *= L.default.getInstance().getFruitScaleRate(this.getId()));
this.initPhysics();
this.getItem().getRigidbody().active = !0;
var t = g.GLFruitDefine.BaseDropVelocity;
if (F.default.isOpen(F.FruitFeat.FruitEarlyDropSpeedBoost)) {
var e = u.default.mergerCtr ? u.default.mergerCtr.getTurnCount() : 0, i = F.default.getFeatureKeyParam(F.FruitFeat.FruitEarlyDropSpeedBoost, "boostCount", g.GLFruitDefine.EarlyDropSpeedBoostCount), r = F.default.getFeatureKeyParam(F.FruitFeat.FruitEarlyDropSpeedBoost, "boostPercent", g.GLFruitDefine.EarlyDropSpeedBoostPercent);
console.log("[FruitEarlyDropSpeedBoost] 特性已开启 - dropCount: " + e + ", boostCount: " + i + ", boostPercent: " + r + ", baseVelocity: " + g.GLFruitDefine.BaseDropVelocity);
if (e <= i) {
t = g.GLFruitDefine.BaseDropVelocity * (1 + r);
console.log("[FruitEarlyDropSpeedBoost] 速度提升已应用 - dropCount: " + e + " <= boostCount: " + i + ", 最终速度: " + t);
} else console.log("[FruitEarlyDropSpeedBoost] 速度提升未应用 - dropCount: " + e + " > boostCount: " + i + ", 使用基础速度: " + t);
}
t = y.default.getInstance().applyAccelerationToDropVelocity(t, this.getId());
this.getItem().getRigidbody().linearVelocity = cc.v2(0, t);
this.getItem().getRigidbody().linearVelocity;
}
};
e.prototype.initWithPhysics = function(t) {
this.init(t);
this.initPhysics();
};
e.prototype.initPhysics = function() {
if (!this._isHasPhysics) {
this._item.initPhysics();
this._isHasPhysics = !0;
}
};
e.prototype.onBeginContact = function(t, i, r) {
if (cc.isValid(i.node) && cc.isValid(r.node)) if (i.node.group == r.node.group && i.node.group == g.GLFruitGroupDefine.FruitGroup) {
var n = i.node.getComponent(f.default), o = r.node.getComponent(f.default);
if (n && o) {
var a = n.getFruit(), s = o.getFruit();
if (a && s && a.isActiveState() && s.isActiveState()) {
if (F.isOpenVibrationProjectFruit()) {
var l = u.default.mergerCtr.getCurrentDroppingFruit();
if (l && (a === l || s === l) && 0 === l.getContactFruitCount()) {
F.tryShakeVibrationFruit("fruitOnFruit");
u.default.mergerCtr.clearCurrentDroppingFruit();
}
}
if (F.default.isOpen(F.FruitFeat.FruitSpecialColliderRule) && cc.isValid(i.node) && i.node.getComponent(cc.PhysicsCircleCollider)) {
var c = i.node.getComponent(f.default), d = r.node.getComponent(f.default);
cc.isValid(c) && cc.isValid(d) && m.FruitEventCenter.dispatchEvent(m.FruitEventType.FruitSpecialColliderRuleEnd, [ c.getFruit(), d.getFruit() ]);
}
if (F.default.isOpen(F.FruitFeat.FruitWannengFruit) && v.default.getInstance().tryHandleFruitContact(a, s)) return;
e.Compare(a, s) ? u.default.mergerCtr.onMerger(a, s) : this._contactFruitCount++;
}
}
} else if (!this._isHitBottmonWall && cc.isValid(i.node) && i.node.group == g.GLFruitGroupDefine.FruitGroup && cc.isValid(r.node) && "bottomWall" == r.node.name) {
if (!u.default.guideCtr.isBeginner()) return;
this._isHitBottmonWall = !0;
u.default.mergerCtr.onHitBottomWall(this);
}
};
e.prototype.onEndContact = function(t, e, i) {
if (cc.isValid(e.node) && e.node.group == g.GLFruitGroupDefine.FruitGroup && cc.isValid(i.node) && "bottomWall" == i.node.name && F.isOpenVibrationProjectFruit()) {
var r = u.default.mergerCtr.getCurrentDroppingFruit();
if (r && r === this) {
F.tryShakeVibrationFruit("fruitOnBottom");
u.default.mergerCtr.clearCurrentDroppingFruit();
}
}
};
e.prototype.runState = function(t) {
this._stateMachine.changeState(t);
};
e.prototype.runSpawnState = function() {
this.runState(e.State.GLFruitSpawnStateNode);
};
e.prototype.runReadyDropState = function() {
this.runState(e.State.GLFruitReadyDropStateNode);
};
e.prototype.runActiveState = function() {
this.runState(e.State.GLFruitActiveStateNode);
};
e.prototype.runMergeState = function() {
this.runState(e.State.GLFruitMergeStateNode);
};
e.prototype.runPreReadyDropState = function() {
this.runState(e.State.GLFruitPreReadyDropStateNode);
};
e.prototype.isActiveState = function() {
return this._stateMachine.isState(e.State.GLFruitActiveStateNode);
};
e.prototype.isReadyDropState = function() {
return this._stateMachine.isState(e.State.GLFruitReadyDropStateNode);
};
e.prototype.getName = function() {
return this._name;
};
e.prototype.getId = function() {
return this._id;
};
e.prototype.getRound = function() {
return this._round;
};
e.prototype.setRound = function(t) {
this._round = t;
};
e.prototype.isHasPhysics = function() {
return this._isHasPhysics;
};
e.prototype.isWatermelon = function() {
return 11 == this._id;
};
e.prototype.isGoldWatermelon = function() {
return 12 == this._id;
};
e.prototype.getSpawnScale = function() {
return _.default.getInstance().isOpen() ? 68 / (2 * this.getRadius()) : 80 / (2 * this.getRadius());
};
e.prototype.getData = function() {
return this._dataCfg;
};
e.prototype.getNextId = function() {
return Math.min(this._dataCfg.id + 1, g.GLFruitDefine.MaxFruitId);
};
e.prototype.getLineColor = function() {
return this._lineColor;
};
e.prototype.getContactFruitCount = function() {
return this._contactFruitCount;
};
e.prototype.limitPosition = function(t) {
var e, i = .5 * -u.default.gameStateCtr.getGameView().getNodeBoxBg().width + 60 + .5 * ((null === (e = this._dataCfg) || void 0 === e ? void 0 : e.size) || 0), r = -1 * i;
t.x > r ? t.x = r : t.x < i && (t.x = i);
return t;
};
e.prototype.getRadius = function() {
return f.default.getFruitRadius(this.getId());
};
e.prototype.isOutBoundBox = function(t) {
return !(!cc.isValid(this._item) || !cc.isValid(this._item.node)) && this._item.node.convertToWorldSpaceAR(cc.Vec3.ZERO).y + this._item.getPhysicsCircleCollider().radius > t;
};
e.prototype.playAnimationOnce = function(t, e) {
this._item.playAnimationOnce(t, e);
};
e.prototype.clear = function() {
var t;
null === (t = this._item) || void 0 === t || t.clear();
this._item = null;
this._dataCfg = null;
};
e.State = {
GLFruitSpawnStateNode: "GLFruitSpawnStateNode",
GLFruitReadyDropStateNode: "GLFruitReadyDropStateNode",
GLFruitActiveStateNode: "GLFruitActiveStateNode",
GLFruitMergeStateNode: "GLFruitMergeStateNode",
GLFruitPreReadyDropStateNode: "GLFruitPreReadyDropStateNode"
};
return e;
}(a.default);
i.default = C;
cc._RF.pop();
}, {
"../../core/FruitEventCenter": "FruitEventCenter",
"../../core/GLFruitModelBase": "GLFruitModelBase",
"../../core/fsmNode/GLFruitStateMachine": "GLFruitStateMachine",
"../FruitFeature": "FruitFeature",
"../FruitLongPressAccCtrl": "FruitLongPressAccCtrl",
"../GLFruitApp": "GLFruitApp",
"../ctrs/FruitWannengFruitCtrl": "FruitWannengFruitCtrl",
"../defines/GLFruitDefine": "GLFruitDefine",
"../tools/GLFruitTools": "GLFruitTools",
"../traits/GLFruitAddFruitChoiceListTraitCtrl": "GLFruitAddFruitChoiceListTraitCtrl",
"../traits/GLFruitChangeScaleTraitCtrl": "GLFruitChangeScaleTraitCtrl",
"./GLFruitItem": "GLFruitItem",
"./fsmNode/GLFruitActiveStateNode": "GLFruitActiveStateNode",
"./fsmNode/GLFruitMergeStateNode": "GLFruitMergeStateNode",
"./fsmNode/GLFruitPreReadyDropStateNode": "GLFruitPreReadyDropStateNode",
"./fsmNode/GLFruitReadyDropStateNode": "GLFruitReadyDropStateNode",
"./fsmNode/GLFruitSpawnStateNode": "GLFruitSpawnStateNode"
} ]
}, {}, [ "FruitEventCenter", "GLFruitAssetCtr", "GLFruitAudioMgr", "GLFruitDynamicAccumCtr", "GLFruitInstance", "GLFruitModelBase", "GLFruitObjectPoolCtr", "GLFruitTimerMgr", "GLFruitUIAdapter", "GLFruitStateMachine", "GLFruitStateNode", "FruitFeature", "FruitLongPressAccCtrl", "FruitMergeDistanceRelaxedCtrl", "GFruitUser", "GLFruitApp", "GLFruitAppAssetsLoader", "GLFruitHideBottomFruit", "GLFruitRoundLogEventCtr", "GLFruitLangCfg", "FruitAcceleratePreviousDropCtrl", "FruitAutoShakeOnDangerCtrl", "FruitBigFruitMergeShakeCtrl", "FruitComboSmallFruitExplodeCtrl", "FruitDeadEndShakePopupCtrl", "FruitFullScreenAccCtrl", "FruitLongPressQuickStackCtrl", "FruitMergeShakeCtrl", "FruitNoDropIntervalCtrl", "FruitRelaxedComboBreakCtrl", "FruitShakeRandomDirectionCtrl", "FruitSmallToBigReplacementCtrl", "FruitUsePropNoDieCtrl", "FruitWannengFruitCtrl", "GLFruitAdCtr", "GLFruitComboCtr", "GLFruitConfigCtr", "GLFruitEffectCtr", "GLFruitFailZoneCtr", "GLFruitGameStateCtr", "GLFruitMergerCtr", "GLFruitMergerWellDoneCtr", "GLFruitPhysicsConfigCtr", "GLFruitPlacePreviewCtr", "GLFruitPopupCtr", "GLFruitPropCtr", "GLFruitRevivePopupCtr", "GLFruitRoundCtr", "GLFruitDefine", "GLFruitLikeEffect", "GLFruitPanelLikeEffect", "GLFruitExperimentCtr", "GLFruitFuncBase", "GLFruitMidRollAdCtr", "GLFruitRandomWeightCtr", "GLFruitBombStateNode", "GLFruitEntryStateNode", "GLFruitFailStateNode", "GLFruitGoldWatermelonStateNode", "GLFruitLoadStateNode", "GLFruitPlayStateNode", "GLFruitShakeStateNode", "GLFruitWinStateNode", "GLFruitGuideCtr", "GLFruitGuideStep", "GLFruit", "GLFruitItem", "GLFruitProp", "GLFruitActiveStateNode", "GLFruitMergeStateNode", "GLFruitPreReadyDropStateNode", "GLFruitReadyDropStateNode", "GLFruitSpawnStateNode", "GLFruitBoardStateManager", "GLFruitBoardTestTool", "GLFruitGmManager", "GLFruitTools", "GLFruitAddBombAudioTraitCtrl", "GLFruitAddFruitChoiceListTraitCtrl", "GLFruitAddShakeItemOnMergeXiguaTraitCtrl", "GLFruitChangeScaleTraitCtrl", "GLFruitDeadCheckOptimizeTraitCtrl", "GLFruitDelayDianZanAniTraitCtrl", "GLFruitDragRateConfigCtrl", "GLFruitFaceNotRotateTraitCtrl", "GLFruitGMTool", "GLFruitGongzhengTraitCtrl", "GLFruitHaveFruitStartTraitCtrl", "GLFruitMergeScoreFlyTraitCtrl", "GLFruitNotDropLittleFruitWhenXiGuaOnShowCtrl", "GLFruitOnDangerShowDeadLineTraitCtrl", "GLFruitOnlyDragCanMoveTraitCtrl", "GLFruitRepeatFruitAwardTraitCtrl", "GLFruitShakeOffsetAddByUseTimesCtrl", "GLFruitShowShakeResultEncourageTraitCtrl", "GLFruitTwoFruitOnceTraitCtrl", "GLFruitUseItemDirectTraitCtrl", "GLFruitTweenBreath", "GLFruitBanner", "GLFruitButtonScaler", "GLFruitClickCheckEvent", "GLFruitDropLine", "GLFruitGMView", "GLFruitGameView", "GLFruitGameViewHelper", "GLFruitGameViewTouchEvent", "GLFruitGuideView", "GLFruitInterAdsWaitView", "GLFruitLongPressAcc", "GLFruitPlayClickEffect", "GLFruitPropButton", "GLFruitShadowTips", "GLFruitSpecialColliderRule", "GLFruitComboItem", "GLFruitComboItemNew", "GLFruitPropBtnItem", "GLFruitPropCornerItem" ]);