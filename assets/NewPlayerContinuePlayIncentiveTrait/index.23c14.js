window.__require = function e(t, r, n) {
function o(a, s) {
if (!r[a]) {
if (!t[a]) {
var c = a.split("/");
c = c[c.length - 1];
if (!t[c]) {
var l = "function" == typeof __require && __require;
if (!s && l) return l(c, !0);
if (i) return i(c, !0);
throw new Error("Cannot find module '" + a + "'");
}
a = c;
}
var u = r[a] = {
exports: {}
};
t[a][0].call(u.exports, function(e) {
return o(t[a][1][e] || e);
}, u, u.exports, e, t, r, n);
}
return r[a].exports;
}
for (var i = "function" == typeof __require && __require, a = 0; a < n.length; a++) o(n[a]);
return o;
}({
NewPlayerContinuePlayIncentiveTrait: [ function(e, t, r) {
"use strict";
cc._RF.push(t, "1ccbanYp1ZL/7OAHPKbusI6", "NewPlayerContinuePlayIncentiveTrait");
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
}), i = this && this.__decorate || function(e, t, r, n) {
var o, i = arguments.length, a = i < 3 ? t : null === n ? n = Object.getOwnPropertyDescriptor(t, r) : n;
if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) a = Reflect.decorate(e, t, r, n); else for (var s = e.length - 1; s >= 0; s--) (o = e[s]) && (a = (i < 3 ? o(a) : i > 3 ? o(t, r, a) : o(t, r)) || a);
return i > 3 && a && Object.defineProperty(t, r, a), a;
}, a = this && this.__awaiter || function(e, t, r, n) {
return new (r || (r = Promise))(function(o, i) {
function a(e) {
try {
c(n.next(e));
} catch (e) {
i(e);
}
}
function s(e) {
try {
c(n.throw(e));
} catch (e) {
i(e);
}
}
function c(e) {
e.done ? o(e.value) : (t = e.value, t instanceof r ? t : new r(function(e) {
e(t);
})).then(a, s);
var t;
}
c((n = n.apply(e, t || [])).next());
});
}, s = this && this.__generator || function(e, t) {
var r, n, o, i, a = {
label: 0,
sent: function() {
if (1 & o[0]) throw o[1];
return o[1];
},
trys: [],
ops: []
};
return i = {
next: s(0),
throw: s(1),
return: s(2)
}, "function" == typeof Symbol && (i[Symbol.iterator] = function() {
return this;
}), i;
function s(e) {
return function(t) {
return c([ e, t ]);
};
}
function c(i) {
if (r) throw new TypeError("Generator is already executing.");
for (;a; ) try {
if (r = 1, n && (o = 2 & i[0] ? n.return : i[0] ? n.throw || ((o = n.return) && o.call(n), 
0) : n.next) && !(o = o.call(n, i[1])).done) return o;
(n = 0, o) && (i = [ 2 & i[0], o.value ]);
switch (i[0]) {
case 0:
case 1:
o = i;
break;

case 4:
a.label++;
return {
value: i[1],
done: !1
};

case 5:
a.label++;
n = i[1];
i = [ 0 ];
continue;

case 7:
i = a.ops.pop();
a.trys.pop();
continue;

default:
if (!(o = a.trys, o = o.length > 0 && o[o.length - 1]) && (6 === i[0] || 2 === i[0])) {
a = 0;
continue;
}
if (3 === i[0] && (!o || i[1] > o[0] && i[1] < o[3])) {
a.label = i[1];
break;
}
if (6 === i[0] && a.label < o[1]) {
a.label = o[1];
o = i;
break;
}
if (o && a.label < o[2]) {
a.label = o[2];
a.ops.push(i);
break;
}
o[2] && a.ops.pop();
a.trys.pop();
continue;
}
i = t.call(e, a);
} catch (e) {
i = [ 6, e ];
n = 0;
} finally {
r = o = 0;
}
if (5 & i[0]) throw i[1];
return {
value: i[0] ? i[1] : void 0,
done: !0
};
}
}, c = this && this.__values || function(e) {
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
r.NewPlayerContinuePlayIncentiveTrait = void 0;
var l = e("./vo/NewPlayerContinuePlayIncentiveVo"), u = e("./components/NodeNewPlayerContinuePlayIncentiveMotiveationCom"), p = e("./components/NodeNewPlayerContinuePlayIncentiveSubEncourageCom"), h = e("./components/NodeNewPlayerContinuePlayIncentiveFailTipCom"), g = e("./types/NewPlayerContinuePlayIncentiveType"), d = function(e) {
o(t, e);
function t() {
var t = null !== e && e.apply(this, arguments) || this;
t._vo = new l.NewPlayerContinuePlayIncentiveVo();
t._currentGameNum = 0;
t._settlementTitleNode = null;
t._isPreloadComplete = !1;
t._shouldSuppressComboDisplay = !1;
t._lastPercentScoreUpScore = 0;
t._pendingScoreUpTargetScore = 0;
t._settlementPrefab = null;
t._motivationPrefab = null;
t._enhancePrefab = null;
t._subEncouragePrefab = null;
t._failTipPrefab = null;
return t;
}
t.prototype.registerTraitEventsMethods = function() {
return [ {
className: "ClassGame_Proxy",
methodName: "newGameInit"
} ];
};
t.prototype.onCreate = function() {
this._currentGameNum = hs.storage.getItem("classGameNum", 0);
this._vo.setLastHighScore(hs.storage.getItem("NewPlayerContinuePlayIncentiveTrait_lastHighScore", 0));
this._lastPercentScoreUpScore = hs.storage.getItem("NewPlayerContinuePlayIncentiveTrait_lastPercentScoreUpScore", 0);
this.restoreTriggeredState();
this.preloadAssets();
};
t.prototype.onActive = function(e) {
var t;
if (hs.tp.isClassGame_ProxyNewGameInit(e)) {
if (!this._isPreloadComplete) return;
this.onNewGameInit();
}
if (hs.tp.isClassScoreTip_ProxyOnClassScoreUpdate(e)) {
if (!this._isPreloadComplete) return;
this.onScoreChange();
}
if (hs.tp.isClassTopInfoCurrentScoreAnimationEnd(e)) {
if (!this._isPreloadComplete) return;
var r = e.args[0].currentScore;
if (this._vo.hasPendingScoreUp && r >= this._pendingScoreUpTargetScore) {
this._vo.setHasPendingScoreUp(!1);
this.showScoreUpIcon();
}
}
if (hs.tp.isClassGameOver_ProxyCalcOver(e)) {
if (!this._isPreloadComplete) return;
this.onGameOver();
}
if (hs.tp.isClassFailShowAction(e)) {
if (!this.isTrigger()) return;
if (!this._isPreloadComplete) return;
if (1 === this.props.isShowResultTips) {
if (hs.storage.getItem("NewPlayerContinuePlayIncentiveTrait_notBeatTitleIndex", 0) >= g.FAIL_TIP_SPRITES.length || !this._failTipPrefab) return;
e.disable([ "IsOpenClassNotBreakRecordRankWordsTrait" ]);
}
}
if (hs.tp.isClassFailPlayOverTitleNodeAnim(e)) {
if (!this.isTrigger()) return;
if (!this._isPreloadComplete) return;
1 === this.props.isShowResultTips && this.handleClassFailTitle(e);
}
if (hs.tp.isClassWinPlayCongratulationAnim(e)) {
if (!this.isTrigger()) return;
if (!this._isPreloadComplete) return;
1 === this.props.isShowResultTips && this.handleClassWinTitle(e);
}
if (hs.tp.isClassCombo_ProxyShowCombo(e)) {
if (!this._isPreloadComplete) return;
if (this._shouldSuppressComboDisplay) {
e.returnState = !0;
e.replace = !0;
this._shouldSuppressComboDisplay = !1;
}
}
if (hs.tp.isClassEncourage_ProxyOnTouchEnd(e)) {
if (!this._isPreloadComplete) return;
if (this._vo.shouldSuppressCombo) {
e.returnState = !0;
this._vo.setShouldSuppressCombo(!1);
}
}
if (hs.tp.isClassBackSpace_ProxyOnCloseClassGame(e)) {
var n = Cinst(hs.ClassTopInfo);
if (!n || !cc.isValid(n.node)) return;
var o = null === (t = n.curScore) || void 0 === t ? void 0 : t.node;
if (!o || !cc.isValid(o)) return;
var i = o.parent;
if (!i || !cc.isValid(i)) return;
var a = i.getChildByName("__NewPlayerCPI_ScoreUp__");
a && cc.isValid(a) && a.destroy();
}
};
t.prototype.isTrigger = function() {
return !0;
};
t.prototype.resolvePrefabPaths = function() {
var e;
return a(this, void 0, Promise, function() {
var t, r, n, o, i, a;
return s(this, function(s) {
switch (s.label) {
case 0:
if (!(null === (e = this.props) || void 0 === e ? void 0 : e.useNewArt)) return [ 2, g.PREFAB_PATHS.legacy ];
t = this.traitName;
return [ 4, Promise.all(g.PREFAB_FRESH_GATE_PATHS.map(function(e) {
return hs.ResLoader.asyncIsBundleAssetDownloaded(t, e, {
type: cc.Prefab
});
})) ];

case 1:
if (s.sent().every(Boolean)) return [ 2, g.PREFAB_PATHS.fresh ];
try {
for (r = c(g.PREFAB_FRESH_GATE_PATHS), n = r.next(); !n.done; n = r.next()) {
o = n.value;
hs.ResLoader.asyncLoadByBundle(t, o, cc.Prefab).catch(function() {
return null;
});
}
} catch (e) {
i = {
error: e
};
} finally {
try {
n && !n.done && (a = r.return) && a.call(r);
} finally {
if (i) throw i.error;
}
}
return [ 2, g.PREFAB_PATHS.legacy ];
}
});
});
};
t.prototype.preloadAssets = function() {
return a(this, void 0, Promise, function() {
var e, t, r;
return s(this, function(n) {
switch (n.label) {
case 0:
e = this.traitName;
return [ 4, this.resolvePrefabPaths() ];

case 1:
t = n.sent();
n.label = 2;

case 2:
n.trys.push([ 2, 4, , 5 ]);
return [ 4, Promise.all([ hs.ResLoader.asyncLoadByBundle(e, t.SETTLEMENT, cc.Prefab).catch(function() {
return null;
}), hs.ResLoader.asyncLoadByBundle(e, t.MOTIVATION, cc.Prefab).catch(function() {
return null;
}), hs.ResLoader.asyncLoadByBundle(e, t.ENHANCE, cc.Prefab).catch(function() {
return null;
}), hs.ResLoader.asyncLoadByBundle(e, t.SUB_ENCOURAGE, cc.Prefab).catch(function() {
return null;
}), hs.ResLoader.asyncLoadByBundle(e, t.FAIL_TIP, cc.Prefab).catch(function() {
return null;
}) ]) ];

case 3:
r = n.sent();
this._settlementPrefab = r[0];
this._motivationPrefab = r[1];
this._enhancePrefab = r[2];
this._subEncouragePrefab = r[3];
this._failTipPrefab = r[4];
this._isPreloadComplete = !0;
return [ 3, 5 ];

case 4:
n.sent();
return [ 3, 5 ];

case 5:
return [ 2 ];
}
});
});
};
t.prototype.onNewGameInit = function() {
var e, t;
this._currentGameNum = hs.storage.getItem("classGameNum", 0);
var r = null !== (t = null === (e = hs.classScoreInfo) || void 0 === e ? void 0 : e.highScore) && void 0 !== t ? t : 0, n = hs.storage.getItem("NewPlayerContinuePlayIncentiveTrait_lastHighScore", 0);
this._vo.setLastHighScore(Math.max(r, n));
this._vo.lastHighScore > 0 && hs.storage.setItem("NewPlayerContinuePlayIncentiveTrait_lastHighScore", this._vo.lastHighScore);
this._vo.reset();
this._shouldSuppressComboDisplay = !1;
this._lastPercentScoreUpScore = 0;
this._pendingScoreUpTargetScore = 0;
this.resetTriggeredStateStorage();
hs.storage.setItem("NewPlayerContinuePlayIncentiveTrait_lastPercentScoreUpScore", 0);
this.cleanupSettlementTitle();
};
t.prototype.onGameOver = function() {
var e, t, r = null !== (t = null === (e = hs.classScoreInfo) || void 0 === e ? void 0 : e.highScore) && void 0 !== t ? t : 0;
r > 0 && hs.storage.setItem("NewPlayerContinuePlayIncentiveTrait_lastHighScore", r);
};
t.prototype.onScoreChange = function() {
var e, t, r = null !== (t = null === (e = hs.classScoreInfo) || void 0 === e ? void 0 : e.score) && void 0 !== t ? t : 0;
if (!(r <= 0)) {
this._vo.clearPendingState();
this._currentGameNum < 1 ? this.checkFirstGameEncourage(r) : this.checkSubsequentGameEncourage(r);
this._vo.hasPendingScoreUp && (this._pendingScoreUpTargetScore = r);
this.executePendingEncourage();
}
};
t.prototype.checkFirstGameEncourage = function(e) {
var t = this;
if (1 === this.props.isShowEncourage) {
var r = this.findMaxNewThreshold(e, g.FIRST_GAME_SCORE_THRESHOLDS, function(e) {
return t._vo.isScoreThresholdTriggered(e);
});
if (r > 0) {
this._vo.markScoreThresholdTriggered(r);
this.persistTriggeredScore();
this._vo.setHasPendingMainEncourage(!0);
this._vo.setPendingMainText("" + r);
this._vo.setPendingMainLevel(g.getFirstGameEffectLevel(r));
this._vo.setShouldSuppressCombo(!0);
this._shouldSuppressComboDisplay = !0;
}
}
if (1 === this.props.isShowSubEncourage && this.markAllNewlyTriggered(e, g.FIRST_GAME_SUB_ENCOURAGE_THRESHOLDS, function(e) {
return t._vo.isSubEncourageThresholdTriggered(e);
}, function(e) {
return t._vo.markSubEncourageThresholdTriggered(e);
}) > 0) {
this.persistTriggeredSub();
this._vo.setHasPendingSubEncourage(!0);
this._vo.hasPendingMainEncourage || this._vo.setShouldDelaySubAfterCombo(!0);
}
if (1 === this.props.isShowScoreUpIcon && this.markAllNewlyTriggered(e, g.FIRST_GAME_SCORE_UP_THRESHOLDS, function(e) {
return t._vo.isScoreUpThresholdTriggered(e);
}, function(e) {
return t._vo.markScoreUpThresholdTriggered(e);
}) > 0) {
this.persistTriggeredScoreUp();
this._vo.setHasPendingScoreUp(!0);
}
};
t.prototype.checkSubsequentGameEncourage = function(e) {
var t = this, r = this._vo.lastHighScore;
if (!(r <= 0)) {
var n = e / r * 100;
if (1 === this.props.isShowEncourage) {
var o = this.findMaxNewThreshold(n, g.PERCENT_THRESHOLDS, function(e) {
return t._vo.isPercentThresholdTriggered(e);
});
if (o > 0) {
this._vo.markPercentThresholdTriggered(o);
this.persistTriggeredPercent();
this._vo.setHasPendingMainEncourage(!0);
this._vo.setPendingMainText(o + "%");
this._vo.setPendingMainLevel(g.getPercentEffectLevel(o));
this._vo.setShouldSuppressCombo(!0);
this._shouldSuppressComboDisplay = !0;
}
}
var i = this.markNewPercentScoreUpMax(n), a = 0 === this._lastPercentScoreUpScore, s = e - this._lastPercentScoreUpScore, c = a || s >= g.PERCENT_SCORE_UP_MIN_DIFF, l = i && c;
i && this.persistTriggeredPercentScoreUp();
if (l) {
this._lastPercentScoreUpScore = e;
hs.storage.setItem("NewPlayerContinuePlayIncentiveTrait_lastPercentScoreUpScore", e);
}
if (1 === this.props.isShowSubEncourage && l) {
this._vo.setHasPendingSubEncourage(!0);
this._vo.hasPendingMainEncourage || this._vo.setShouldDelaySubAfterCombo(!0);
}
1 === this.props.isShowScoreUpIcon && l && this._vo.setHasPendingScoreUp(!0);
}
};
t.prototype.executePendingEncourage = function() {
var e = this;
if (this._vo.hasPendingMainEncourage) {
this.showMainEncourage(this._vo.pendingMainText, this._vo.pendingMainLevel);
this._vo.hasPendingSubEncourage && setTimeoutSafe(function() {
e.showSubEncourage();
}, 1e3 * g.SUB_ENCOURAGE_DELAY);
} else this._vo.hasPendingSubEncourage && (this._vo.shouldDelaySubAfterCombo ? setTimeoutSafe(function() {
e.showSubEncourage();
}, 1e3 * g.SUB_ENCOURAGE_DELAY) : this.showSubEncourage());
};
t.prototype.showMainEncourage = function(e, t) {
var r = Cinst(hs.ClassGame);
if (r && cc.isValid(r.node)) {
var n = r.node;
if (n && cc.isValid(n) && this._motivationPrefab) {
this.removeNodeByName(n, "__NewPlayerCPI_Main__");
var o = e.endsWith("%"), i = parseInt(e), a = cc.instantiate(this._motivationPrefab);
a.name = "__NewPlayerCPI_Main__";
a.setParent(n);
a.setPosition(0, 130);
a.zIndex = 9999;
var s = a.getComponent(u.default);
s && s.setState({
numValue: i,
isPercent: o,
level: t,
gameNum: this._currentGameNum
});
}
}
};
t.prototype.showSubEncourage = function() {
var e = Cinst(hs.ClassGame);
if (e && cc.isValid(e.node)) {
var t = e.node;
if (t && cc.isValid(t) && this._subEncouragePrefab) {
this.removeNodeByName(t, "__NewPlayerCPI_Sub__");
var r = hs.storage.getItem("NewPlayerContinuePlayIncentiveTrait_subEncourageIndex", 0), n = r % g.SUB_ENCOURAGE_WORDS.length;
hs.storage.setItem("NewPlayerContinuePlayIncentiveTrait_subEncourageIndex", r + 1);
var o = cc.instantiate(this._subEncouragePrefab);
o.name = "__NewPlayerCPI_Sub__";
o.setParent(t);
o.setPosition(-370, -190);
o.zIndex = 9999;
var i = o.getComponent(p.default);
i && i.setState({
wordIndex: n
});
}
}
};
t.prototype.showScoreUpIcon = function() {
var e, t = Cinst(hs.ClassTopInfo);
if (t && cc.isValid(t.node) && this._enhancePrefab) {
var r = null === (e = t.curScore) || void 0 === e ? void 0 : e.node;
if (r && cc.isValid(r)) {
var n = r.parent;
if (n && cc.isValid(n)) {
var o = n.getChildByName("__NewPlayerCPI_ScoreUp__");
if (o && cc.isValid(o)) ; else {
var i = cc.instantiate(this._enhancePrefab);
i.name = "__NewPlayerCPI_ScoreUp__";
var a = i.getComponent(sp.Skeleton);
if (a) {
i.setParent(n);
i.zIndex = 9999;
var s = n.getChildByName("SkinScore"), c = s && cc.isValid(s) && 0 === r.opacity ? s : r, l = c.getComponent(cc.Label);
l && l._forceUpdateRenderData(!0);
var u = c.width * c.scaleX, p = (1 - c.anchorX) * u, h = c.x + p + 50;
i.setPosition(h, c.y - 20);
a.setAnimation(0, g.ENHANCE_SPINE_ANIM, !1);
a.setCompleteListener(function() {
cc.isValid(i) && i.destroy();
});
} else i.destroy();
}
}
}
}
};
t.prototype.handleClassFailTitle = function(e) {
this.cleanupSettlementTitle();
var t = e.target;
if (t && cc.isValid(t.node)) {
var r = t.overTitleNode;
if (cc.isValid(r)) {
var n = r.getComponent(cc.Sprite);
n && (n.enabled = !0);
var o = hs.storage.getItem("NewPlayerContinuePlayIncentiveTrait_notBeatTitleIndex", 0);
if (!(o >= g.FAIL_TIP_SPRITES.length) && this._failTipPrefab) {
e.returnState = !0;
n && (n.enabled = !1);
this.showFailTip(r, o);
}
}
}
};
t.prototype.showFailTip = function(e, t) {
var r = g.FAIL_TIP_SPRITES[t];
hs.storage.setItem("NewPlayerContinuePlayIncentiveTrait_notBeatTitleIndex", t + 1);
var n = cc.instantiate(this._failTipPrefab);
n.name = "__NewPlayerCPI_FailTip__";
n.setParent(e);
n.setPosition(0, 0);
var o = n.getComponent(h.default);
o && o.setState({
spriteName: r
});
e.active = !0;
this._settlementTitleNode = n;
};
t.prototype.handleClassWinTitle = function(e) {
this.cleanupSettlementTitle();
var t = e.target;
if (t && cc.isValid(t.node)) {
var r = t.congratulationAnim;
if (r && cc.isValid(r.node)) {
r.node.active = !0;
var n = this.createSettlementSpine();
if (n) {
var o = hs.storage.getItem("classGameNum", 0), i = this.getSettlementSpineAnim(o);
if ("" !== i) {
e.replace = !0;
e.returnState = !0;
r.node.active = !1;
var a = r.node;
n.setParent(a.parent);
n.setPosition(a.position);
n.getComponent(sp.Skeleton).setAnimation(0, i, !1);
this._settlementTitleNode = n;
} else n.destroy();
}
}
}
};
t.prototype.getSettlementSpineAnim = function(e) {
if (e <= 1) return g.SETTLEMENT_SPINE_ANIMS.FIRST_GAME;
var t = hs.storage.getItem("NewPlayerContinuePlayIncentiveTrait_beatTitleIndex", 0), r = g.SETTLEMENT_SPINE_ANIMS.BEAT;
if (t >= r.length) return "";
var n = r[t];
hs.storage.setItem("NewPlayerContinuePlayIncentiveTrait_beatTitleIndex", t + 1);
return n;
};
t.prototype.cleanupSettlementTitle = function() {
if (this._settlementTitleNode && cc.isValid(this._settlementTitleNode)) {
cc.Tween.stopAllByTarget(this._settlementTitleNode);
this._settlementTitleNode.destroy();
this._settlementTitleNode = null;
} else this._settlementTitleNode = null;
};
t.prototype.createSettlementSpine = function() {
if (!this._settlementPrefab) return null;
var e = cc.instantiate(this._settlementPrefab);
e.name = "__NewPlayerCPI_SettlementSpine__";
if (!e.getComponent(sp.Skeleton)) {
e.destroy();
return null;
}
return e;
};
t.prototype.removeNodeByName = function(e, t) {
var r = e.getChildByName(t);
if (r && cc.isValid(r)) {
cc.Tween.stopAllByTarget(r);
var n = r.getComponent(sp.Skeleton);
n && n.setCompleteListener(null);
r.removeFromParent();
r.destroy();
}
};
t.prototype.restoreTriggeredState = function() {
try {
var e = this.getStoredTriggeredState();
if (e) {
this._vo.restoreTriggeredState(e);
return;
}
var t = hs.storage.getItem("NewPlayerContinuePlayIncentiveTrait_triggeredState", {});
if (t && Object.keys(t).length > 0) {
this._vo.restoreTriggeredState(t);
this.persistTriggeredSplitState();
hs.storage.setItem("NewPlayerContinuePlayIncentiveTrait_triggeredState", {});
}
} catch (e) {}
};
t.prototype.getStoredTriggeredState = function() {
var e = hs.storage.getItem("NewPlayerContinuePlayIncentiveTrait_triggeredScore", null), t = hs.storage.getItem("NewPlayerContinuePlayIncentiveTrait_triggeredSub", null), r = hs.storage.getItem("NewPlayerContinuePlayIncentiveTrait_triggeredScoreUp", null), n = hs.storage.getItem("NewPlayerContinuePlayIncentiveTrait_triggeredPercent", null), o = hs.storage.getItem("NewPlayerContinuePlayIncentiveTrait_triggeredPercentScoreUp", null);
return null !== e || null !== t || null !== r || null !== n || null !== o ? {
score: null != e ? e : 0,
sub: null != t ? t : 0,
scoreUp: null != r ? r : 0,
percent: null != n ? n : 0,
percentScoreUp: null != o ? o : 0
} : null;
};
t.prototype.persistTriggeredSplitState = function() {
this.persistTriggeredScore();
this.persistTriggeredSub();
this.persistTriggeredScoreUp();
this.persistTriggeredPercent();
this.persistTriggeredPercentScoreUp();
};
t.prototype.resetTriggeredStateStorage = function() {
hs.storage.setItem("NewPlayerContinuePlayIncentiveTrait_triggeredScore", 0);
hs.storage.setItem("NewPlayerContinuePlayIncentiveTrait_triggeredSub", 0);
hs.storage.setItem("NewPlayerContinuePlayIncentiveTrait_triggeredScoreUp", 0);
hs.storage.setItem("NewPlayerContinuePlayIncentiveTrait_triggeredPercent", 0);
hs.storage.setItem("NewPlayerContinuePlayIncentiveTrait_triggeredPercentScoreUp", 0);
hs.storage.setItem("NewPlayerContinuePlayIncentiveTrait_triggeredState", {});
};
t.prototype.persistTriggeredScore = function() {
hs.storage.setItem("NewPlayerContinuePlayIncentiveTrait_triggeredScore", this._vo.getTriggeredScoreMax());
};
t.prototype.persistTriggeredSub = function() {
hs.storage.setItem("NewPlayerContinuePlayIncentiveTrait_triggeredSub", this._vo.getTriggeredSubEncourageMax());
};
t.prototype.persistTriggeredScoreUp = function() {
hs.storage.setItem("NewPlayerContinuePlayIncentiveTrait_triggeredScoreUp", this._vo.getTriggeredScoreUpMax());
};
t.prototype.persistTriggeredPercent = function() {
hs.storage.setItem("NewPlayerContinuePlayIncentiveTrait_triggeredPercent", this._vo.getTriggeredPercentMax());
};
t.prototype.persistTriggeredPercentScoreUp = function() {
hs.storage.setItem("NewPlayerContinuePlayIncentiveTrait_triggeredPercentScoreUp", this._vo.getTriggeredPercentScoreUpMax());
};
t.prototype.findMaxNewThreshold = function(e, t, r) {
for (var n = t.length - 1; n >= 0; n--) {
var o = t[n];
if (e >= o && !r(o)) return o;
}
return 0;
};
t.prototype.markAllNewlyTriggered = function(e, t, r, n) {
for (var o = 0, i = t.length, a = 0; a < i; a++) {
var s = t[a];
if (e >= s && !r(s)) {
n(s);
o++;
}
}
return o;
};
t.prototype.markNewPercentScoreUpMax = function(e) {
var t = g.getPercentScoreUpBase(this._vo.lastHighScore), r = Math.floor(e / t) * t;
if (r <= 0) return !1;
if (this._vo.isPercentScoreUpThresholdTriggered(r)) return !1;
this._vo.markPercentScoreUpThresholdTriggered(r);
return !0;
};
return i([ classId("NewPlayerContinuePlayIncentiveTrait"), classMethodWatch() ], t);
}(Trait);
r.NewPlayerContinuePlayIncentiveTrait = d;
cc._RF.pop();
}, {
"./components/NodeNewPlayerContinuePlayIncentiveFailTipCom": "NodeNewPlayerContinuePlayIncentiveFailTipCom",
"./components/NodeNewPlayerContinuePlayIncentiveMotiveationCom": "NodeNewPlayerContinuePlayIncentiveMotiveationCom",
"./components/NodeNewPlayerContinuePlayIncentiveSubEncourageCom": "NodeNewPlayerContinuePlayIncentiveSubEncourageCom",
"./types/NewPlayerContinuePlayIncentiveType": "NewPlayerContinuePlayIncentiveType",
"./vo/NewPlayerContinuePlayIncentiveVo": "NewPlayerContinuePlayIncentiveVo"
} ],
NewPlayerContinuePlayIncentiveType: [ function(e, t, r) {
"use strict";
cc._RF.push(t, "d7333gtF/ZIaoQ7dZ4z2jXU", "NewPlayerContinuePlayIncentiveType");
var n, o;
Object.defineProperty(r, "__esModule", {
value: !0
});
r.PREFAB_FRESH_GATE_PATHS = r.PREFAB_PATHS = r.getPercentEffectLevel = r.getFirstGameSubEffectLevel = r.getFirstGameEffectLevel = r.FAIL_TIP_SPRITES = r.SUB_ENCOURAGE_WORDS = r.NUM_SPRITE_PREFIX = r.ENHANCE_SPINE_ANIM = r.MOTIVATION_SPINE_ANIMS = r.SETTLEMENT_SPINE_ANIMS = r.SUB_ENCOURAGE_DELAY = r.ENCOURAGE_DISPLAY_DURATION = r.PERCENT_SCORE_UP_MIN_DIFF = r.getPercentScoreUpBase = r.PERCENT_THRESHOLDS = r.FIRST_GAME_SCORE_UP_THRESHOLDS = r.FIRST_GAME_SUB_ENCOURAGE_THRESHOLDS = r.FIRST_GAME_SCORE_THRESHOLDS = r.EncourageEffectLevel = void 0;
(function(e) {
e[e.WEAK = 1] = "WEAK";
e[e.MEDIUM = 2] = "MEDIUM";
e[e.STRONG = 3] = "STRONG";
})(o = r.EncourageEffectLevel || (r.EncourageEffectLevel = {}));
r.FIRST_GAME_SCORE_THRESHOLDS = [ 300, 500, 1e3, 2e3, 3e3, 4e3, 6e3, 8e3, 1e4, 12e3, 14e3, 16e3, 2e4 ];
r.FIRST_GAME_SUB_ENCOURAGE_THRESHOLDS = [ 300, 500, 1e3, 2e3, 3e3, 4e3, 6e3, 8e3, 11e3, 16e3, 24e3, 3e4, 45e3, 55e3, 7e4, 9e4 ];
r.FIRST_GAME_SCORE_UP_THRESHOLDS = [ 200, 300, 500, 1e3, 2e3, 4e3, 6e3, 8e3, 11e3, 13e3, 16e3, 24e3, 3e4, 45e3, 55e3, 7e4, 9e4 ];
r.PERCENT_THRESHOLDS = [ 20, 40, 50, 60, 80, 100, 120, 140, 160, 180, 200 ];
r.getPercentScoreUpBase = function(e) {
return e < 4e4 ? 10 : e < 1e5 ? 5 : 3;
};
r.PERCENT_SCORE_UP_MIN_DIFF = 1e3;
r.ENCOURAGE_DISPLAY_DURATION = 1;
r.SUB_ENCOURAGE_DELAY = .4;
r.SETTLEMENT_SPINE_ANIMS = {
FIRST_GAME: "canYouTopThat",
BEAT: [ "BeatYourBestAgain", "Fundoesn'tStopHere", "HotStreakKeepGoing", "crushItAgain" ]
};
r.MOTIVATION_SPINE_ANIMS = ((n = {})[o.WEAK] = "drgree1", n[o.MEDIUM] = "drgree2", 
n[o.STRONG] = "drgree3", n);
r.ENHANCE_SPINE_ANIM = "in";
r.NUM_SPRITE_PREFIX = "num_";
r.SUB_ENCOURAGE_WORDS = [ "txt_Smooth", "txt_unstoppable", "txt_Fantastic", "txt_Brilliant", "txt_Masterful" ];
r.FAIL_TIP_SPRITES = [ "txt_YourBestisNext", "txt_YourHighScoreisCalling", "txt_Unbeaten_TryAgain", "txt_JustOneMore", "txt_TryeveryCombo", "txt_SeeTheNextBlock" ];
r.getFirstGameEffectLevel = function(e) {
return e >= 1e3 ? o.STRONG : e >= 500 ? o.MEDIUM : o.WEAK;
};
r.getFirstGameSubEffectLevel = function(e) {
return e >= 4e3 ? o.STRONG : e >= 1e3 ? o.MEDIUM : o.WEAK;
};
r.getPercentEffectLevel = function(e) {
return 20 === e ? o.WEAK : 40 === e || 60 === e ? o.MEDIUM : o.STRONG;
};
r.PREFAB_PATHS = {
legacy: {
SETTLEMENT: "prefabs/NodeSettlementCom",
MOTIVATION: "prefabs/NodeMotiveationCom",
ENHANCE: "prefabs/NodeEnhanceCom",
SUB_ENCOURAGE: "prefabs/NodeSubEncourageCom",
FAIL_TIP: "prefabs/NodeFailTipCom"
},
fresh: {
SETTLEMENT: "prefabs/NodeSettlementComNew",
MOTIVATION: "prefabs/NodeMotiveationComNew",
ENHANCE: "prefabs/NodeEnhanceComNew",
SUB_ENCOURAGE: "prefabs/NodeSubEncourageCom",
FAIL_TIP: "prefabs/NodeFailTipCom"
}
};
r.PREFAB_FRESH_GATE_PATHS = [ r.PREFAB_PATHS.fresh.SETTLEMENT, r.PREFAB_PATHS.fresh.MOTIVATION, r.PREFAB_PATHS.fresh.ENHANCE ];
cc._RF.pop();
}, {} ],
NewPlayerContinuePlayIncentiveVo: [ function(e, t, r) {
"use strict";
cc._RF.push(t, "d3e53jec3tPHrENUcKtd5mG", "NewPlayerContinuePlayIncentiveVo");
Object.defineProperty(r, "__esModule", {
value: !0
});
r.NewPlayerContinuePlayIncentiveVo = void 0;
var n = function() {
function e() {
this._triggeredScoreMax = 0;
this._triggeredSubEncourageMax = 0;
this._triggeredScoreUpMax = 0;
this._triggeredPercentMax = 0;
this._triggeredPercentScoreUpMax = 0;
this._lastHighScore = 0;
this._shouldSuppressCombo = !1;
this._hasPendingMainEncourage = !1;
this._pendingMainText = "";
this._pendingMainLevel = 1;
this._hasPendingSubEncourage = !1;
this._hasPendingScoreUp = !1;
this._shouldDelaySubAfterCombo = !1;
}
Object.defineProperty(e.prototype, "lastHighScore", {
get: function() {
return this._lastHighScore;
},
enumerable: !1,
configurable: !0
});
e.prototype.setLastHighScore = function(e) {
this._lastHighScore = e;
};
Object.defineProperty(e.prototype, "shouldSuppressCombo", {
get: function() {
return this._shouldSuppressCombo;
},
enumerable: !1,
configurable: !0
});
e.prototype.setShouldSuppressCombo = function(e) {
this._shouldSuppressCombo = e;
};
Object.defineProperty(e.prototype, "hasPendingMainEncourage", {
get: function() {
return this._hasPendingMainEncourage;
},
enumerable: !1,
configurable: !0
});
e.prototype.setHasPendingMainEncourage = function(e) {
this._hasPendingMainEncourage = e;
};
Object.defineProperty(e.prototype, "pendingMainText", {
get: function() {
return this._pendingMainText;
},
enumerable: !1,
configurable: !0
});
e.prototype.setPendingMainText = function(e) {
this._pendingMainText = e;
};
Object.defineProperty(e.prototype, "pendingMainLevel", {
get: function() {
return this._pendingMainLevel;
},
enumerable: !1,
configurable: !0
});
e.prototype.setPendingMainLevel = function(e) {
this._pendingMainLevel = e;
};
Object.defineProperty(e.prototype, "hasPendingSubEncourage", {
get: function() {
return this._hasPendingSubEncourage;
},
enumerable: !1,
configurable: !0
});
e.prototype.setHasPendingSubEncourage = function(e) {
this._hasPendingSubEncourage = e;
};
Object.defineProperty(e.prototype, "hasPendingScoreUp", {
get: function() {
return this._hasPendingScoreUp;
},
enumerable: !1,
configurable: !0
});
e.prototype.setHasPendingScoreUp = function(e) {
this._hasPendingScoreUp = e;
};
Object.defineProperty(e.prototype, "shouldDelaySubAfterCombo", {
get: function() {
return this._shouldDelaySubAfterCombo;
},
enumerable: !1,
configurable: !0
});
e.prototype.setShouldDelaySubAfterCombo = function(e) {
this._shouldDelaySubAfterCombo = e;
};
e.prototype.isScoreThresholdTriggered = function(e) {
return e <= this._triggeredScoreMax;
};
e.prototype.markScoreThresholdTriggered = function(e) {
this._triggeredScoreMax = Math.max(this._triggeredScoreMax, e);
};
e.prototype.isSubEncourageThresholdTriggered = function(e) {
return e <= this._triggeredSubEncourageMax;
};
e.prototype.markSubEncourageThresholdTriggered = function(e) {
this._triggeredSubEncourageMax = Math.max(this._triggeredSubEncourageMax, e);
};
e.prototype.isScoreUpThresholdTriggered = function(e) {
return e <= this._triggeredScoreUpMax;
};
e.prototype.markScoreUpThresholdTriggered = function(e) {
this._triggeredScoreUpMax = Math.max(this._triggeredScoreUpMax, e);
};
e.prototype.isPercentThresholdTriggered = function(e) {
return e <= this._triggeredPercentMax;
};
e.prototype.markPercentThresholdTriggered = function(e) {
this._triggeredPercentMax = Math.max(this._triggeredPercentMax, e);
};
e.prototype.isPercentScoreUpThresholdTriggered = function(e) {
return e <= this._triggeredPercentScoreUpMax;
};
e.prototype.markPercentScoreUpThresholdTriggered = function(e) {
this._triggeredPercentScoreUpMax = Math.max(this._triggeredPercentScoreUpMax, e);
};
e.prototype.getTriggeredScoreMax = function() {
return this._triggeredScoreMax;
};
e.prototype.getTriggeredSubEncourageMax = function() {
return this._triggeredSubEncourageMax;
};
e.prototype.getTriggeredScoreUpMax = function() {
return this._triggeredScoreUpMax;
};
e.prototype.getTriggeredPercentMax = function() {
return this._triggeredPercentMax;
};
e.prototype.getTriggeredPercentScoreUpMax = function() {
return this._triggeredPercentScoreUpMax;
};
e.prototype.restoreTriggeredState = function(e) {
this.resetTriggeredMax();
if (e) {
this._triggeredScoreMax = this.getMaxValue(e.score);
this._triggeredSubEncourageMax = this.getMaxValue(e.sub);
this._triggeredScoreUpMax = this.getMaxValue(e.scoreUp);
this._triggeredPercentMax = this.getMaxValue(e.percent);
this._triggeredPercentScoreUpMax = this.getMaxValue(e.percentScoreUp);
}
};
e.prototype.getMaxValue = function(e) {
if ("number" == typeof e) return e;
if (!e || e.length <= 0) return 0;
for (var t = 0, r = 0; r < e.length; r++) t = Math.max(t, e[r]);
return t;
};
e.prototype.resetTriggeredMax = function() {
this._triggeredScoreMax = 0;
this._triggeredSubEncourageMax = 0;
this._triggeredScoreUpMax = 0;
this._triggeredPercentMax = 0;
this._triggeredPercentScoreUpMax = 0;
};
e.prototype.reset = function() {
this.resetTriggeredMax();
this.clearPendingState();
this._hasPendingScoreUp = !1;
};
e.prototype.clearPendingState = function() {
this._shouldSuppressCombo = !1;
this._hasPendingMainEncourage = !1;
this._pendingMainText = "";
this._pendingMainLevel = 1;
this._hasPendingSubEncourage = !1;
this._shouldDelaySubAfterCombo = !1;
};
return e;
}();
r.NewPlayerContinuePlayIncentiveVo = n;
cc._RF.pop();
}, {} ],
NewPlayerContinuePlayIncentive_comparisonNew_Trait: [ function(e, t, r) {
"use strict";
cc._RF.push(t, "7f3e8whSptNbrHAnlovjUwX", "NewPlayerContinuePlayIncentive_comparisonNew_Trait");
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
}), i = this && this.__decorate || function(e, t, r, n) {
var o, i = arguments.length, a = i < 3 ? t : null === n ? n = Object.getOwnPropertyDescriptor(t, r) : n;
if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) a = Reflect.decorate(e, t, r, n); else for (var s = e.length - 1; s >= 0; s--) (o = e[s]) && (a = (i < 3 ? o(a) : i > 3 ? o(t, r, a) : o(t, r)) || a);
return i > 3 && a && Object.defineProperty(t, r, a), a;
}, a = this && this.__awaiter || function(e, t, r, n) {
return new (r || (r = Promise))(function(o, i) {
function a(e) {
try {
c(n.next(e));
} catch (e) {
i(e);
}
}
function s(e) {
try {
c(n.throw(e));
} catch (e) {
i(e);
}
}
function c(e) {
e.done ? o(e.value) : (t = e.value, t instanceof r ? t : new r(function(e) {
e(t);
})).then(a, s);
var t;
}
c((n = n.apply(e, t || [])).next());
});
}, s = this && this.__generator || function(e, t) {
var r, n, o, i, a = {
label: 0,
sent: function() {
if (1 & o[0]) throw o[1];
return o[1];
},
trys: [],
ops: []
};
return i = {
next: s(0),
throw: s(1),
return: s(2)
}, "function" == typeof Symbol && (i[Symbol.iterator] = function() {
return this;
}), i;
function s(e) {
return function(t) {
return c([ e, t ]);
};
}
function c(i) {
if (r) throw new TypeError("Generator is already executing.");
for (;a; ) try {
if (r = 1, n && (o = 2 & i[0] ? n.return : i[0] ? n.throw || ((o = n.return) && o.call(n), 
0) : n.next) && !(o = o.call(n, i[1])).done) return o;
(n = 0, o) && (i = [ 2 & i[0], o.value ]);
switch (i[0]) {
case 0:
case 1:
o = i;
break;

case 4:
a.label++;
return {
value: i[1],
done: !1
};

case 5:
a.label++;
n = i[1];
i = [ 0 ];
continue;

case 7:
i = a.ops.pop();
a.trys.pop();
continue;

default:
if (!(o = a.trys, o = o.length > 0 && o[o.length - 1]) && (6 === i[0] || 2 === i[0])) {
a = 0;
continue;
}
if (3 === i[0] && (!o || i[1] > o[0] && i[1] < o[3])) {
a.label = i[1];
break;
}
if (6 === i[0] && a.label < o[1]) {
a.label = o[1];
o = i;
break;
}
if (o && a.label < o[2]) {
a.label = o[2];
a.ops.push(i);
break;
}
o[2] && a.ops.pop();
a.trys.pop();
continue;
}
i = t.call(e, a);
} catch (e) {
i = [ 6, e ];
n = 0;
} finally {
r = o = 0;
}
if (5 & i[0]) throw i[1];
return {
value: i[0] ? i[1] : void 0,
done: !0
};
}
};
Object.defineProperty(r, "__esModule", {
value: !0
});
r.NewPlayerContinuePlayIncentive_comparisonNew_Trait = void 0;
var c = e("./NewPlayerContinuePlayIncentiveTrait"), l = e("./types/NewPlayerContinuePlayIncentiveType"), u = function(e) {
o(t, e);
function t() {
return null !== e && e.apply(this, arguments) || this;
}
t.prototype.resolvePrefabPaths = function() {
return a(this, void 0, Promise, function() {
return s(this, function() {
return [ 2, l.PREFAB_PATHS.fresh ];
});
});
};
return i([ classId("NewPlayerContinuePlayIncentiveTrait", "comparisonNew") ], t);
}(c.NewPlayerContinuePlayIncentiveTrait);
r.NewPlayerContinuePlayIncentive_comparisonNew_Trait = u;
cc._RF.pop();
}, {
"./NewPlayerContinuePlayIncentiveTrait": "NewPlayerContinuePlayIncentiveTrait",
"./types/NewPlayerContinuePlayIncentiveType": "NewPlayerContinuePlayIncentiveType"
} ],
NodeNewPlayerContinuePlayIncentiveFailTipCom: [ function(e, t, r) {
"use strict";
cc._RF.push(t, "a4fe00vUV5M4rxgW5oFfX3r", "NodeNewPlayerContinuePlayIncentiveFailTipCom");
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
}), i = this && this.__decorate || function(e, t, r, n) {
var o, i = arguments.length, a = i < 3 ? t : null === n ? n = Object.getOwnPropertyDescriptor(t, r) : n;
if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) a = Reflect.decorate(e, t, r, n); else for (var s = e.length - 1; s >= 0; s--) (o = e[s]) && (a = (i < 3 ? o(a) : i > 3 ? o(t, r, a) : o(t, r)) || a);
return i > 3 && a && Object.defineProperty(t, r, a), a;
};
Object.defineProperty(r, "__esModule", {
value: !0
});
var a = cc._decorator, s = a.ccclass, c = a.property, l = function(e) {
o(t, e);
function t() {
var t = null !== e && e.apply(this, arguments) || this;
t.spriteTip = null;
t.failTipAtlas = null;
return t;
}
t.prototype.render = function() {
var e, t, r = this.state.spriteName;
if (r && this.spriteTip) {
var n = null !== (t = null === (e = this.failTipAtlas) || void 0 === e ? void 0 : e.getSpriteFrame(r)) && void 0 !== t ? t : null;
if (n) {
this.spriteTip.spriteFrame = n;
this.spriteTip.sizeMode = cc.Sprite.SizeMode.RAW;
}
}
};
t.prototype.fadeIn = function(e) {
void 0 === e && (e = .3);
this.node.opacity = 0;
cc.tween(this.node).to(e, {
opacity: 255
}, {
easing: "sineOut"
}).start();
};
t.prototype.onDestroy = function() {
cc.Tween.stopAllByTarget(this.node);
};
i([ c(cc.Sprite) ], t.prototype, "spriteTip", void 0);
i([ c(cc.SpriteAtlas) ], t.prototype, "failTipAtlas", void 0);
return i([ s ], t);
}(hs.Component);
r.default = l;
cc._RF.pop();
}, {} ],
NodeNewPlayerContinuePlayIncentiveMotiveationCom: [ function(e, t, r) {
"use strict";
cc._RF.push(t, "9537cnNsatJ+bePgTvWb20j", "NodeNewPlayerContinuePlayIncentiveMotiveationCom");
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
}), i = this && this.__decorate || function(e, t, r, n) {
var o, i = arguments.length, a = i < 3 ? t : null === n ? n = Object.getOwnPropertyDescriptor(t, r) : n;
if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) a = Reflect.decorate(e, t, r, n); else for (var s = e.length - 1; s >= 0; s--) (o = e[s]) && (a = (i < 3 ? o(a) : i > 3 ? o(t, r, a) : o(t, r)) || a);
return i > 3 && a && Object.defineProperty(t, r, a), a;
};
Object.defineProperty(r, "__esModule", {
value: !0
});
var a = e("../types/NewPlayerContinuePlayIncentiveType"), s = cc._decorator, c = s.ccclass, l = s.property, u = function(e) {
o(t, e);
function t() {
var t = null !== e && e.apply(this, arguments) || this;
t.skeleton = null;
t.spriteProgress = null;
t.numAtlas = null;
t.nodeRibbon = null;
t._hasPlayed = !1;
return t;
}
t.prototype.render = function() {
var e, t, r, n;
if (!this._hasPlayed) {
var o = this.state, i = o.numValue, s = o.isPercent, c = o.level, l = o.gameNum;
if (null != i && null != c) {
this._hasPlayed = !0;
var u = s ? "" + a.NUM_SPRITE_PREFIX + i + "%" : "" + a.NUM_SPRITE_PREFIX + i, p = null !== (r = null === (t = this.numAtlas) || void 0 === t ? void 0 : t.getSpriteFrame(u)) && void 0 !== r ? r : null, h = a.MOTIVATION_SPINE_ANIMS[c] || a.MOTIVATION_SPINE_ANIMS[a.EncourageEffectLevel.WEAK], g = ((e = {})[a.EncourageEffectLevel.WEAK] = (null != l ? l : 0) >= 1 ? 1.3 : 1, 
e[a.EncourageEffectLevel.MEDIUM] = 1.2, e[a.EncourageEffectLevel.STRONG] = 1.4, 
e);
if (this.spriteProgress) {
var d = null !== (n = g[c]) && void 0 !== n ? n : 1;
this.spriteProgress.node.scale = d;
}
var _ = c === a.EncourageEffectLevel.STRONG && (null != l ? l : 0) >= 1;
this.playMotivation(h, p, _);
}
}
};
t.prototype.playMotivation = function(e, t, r) {
var n = this;
if (this.spriteProgress) if (t) {
this.spriteProgress.spriteFrame = t;
this.spriteProgress.node.active = !0;
} else this.spriteProgress.node.active = !1;
if (r) {
this.nodeRibbon.active = !0;
this.nodeRibbon.opacity = 0;
this.nodeRibbon.scale = .6;
this.nodeRibbon.runAction(cc.sequence(cc.spawn(cc.fadeIn(.15), cc.scaleTo(.15, 1).easing(cc.easeBackOut())), cc.delayTime(.5), cc.fadeOut(.15)));
} else this.nodeRibbon.active = !1;
if (this.skeleton) {
this.skeleton.setAnimation(0, e, !1);
this.skeleton.setCompleteListener(function() {
n.autoDestroy();
});
} else this.autoDestroy();
};
t.prototype.autoDestroy = function() {
if (cc.isValid(this.node)) {
this.node.removeFromParent();
this.node.destroy();
}
};
t.prototype.onDestroy = function() {
this.skeleton && this.skeleton.setCompleteListener(null);
};
i([ l(sp.Skeleton) ], t.prototype, "skeleton", void 0);
i([ l(cc.Sprite) ], t.prototype, "spriteProgress", void 0);
i([ l(cc.SpriteAtlas) ], t.prototype, "numAtlas", void 0);
i([ l(cc.Node) ], t.prototype, "nodeRibbon", void 0);
return i([ c ], t);
}(hs.Component);
r.default = u;
cc._RF.pop();
}, {
"../types/NewPlayerContinuePlayIncentiveType": "NewPlayerContinuePlayIncentiveType"
} ],
NodeNewPlayerContinuePlayIncentiveSubEncourageCom: [ function(e, t, r) {
"use strict";
cc._RF.push(t, "b2f91bJDJdLjI8IoIgDML9k", "NodeNewPlayerContinuePlayIncentiveSubEncourageCom");
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
}), i = this && this.__decorate || function(e, t, r, n) {
var o, i = arguments.length, a = i < 3 ? t : null === n ? n = Object.getOwnPropertyDescriptor(t, r) : n;
if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) a = Reflect.decorate(e, t, r, n); else for (var s = e.length - 1; s >= 0; s--) (o = e[s]) && (a = (i < 3 ? o(a) : i > 3 ? o(t, r, a) : o(t, r)) || a);
return i > 3 && a && Object.defineProperty(t, r, a), a;
};
Object.defineProperty(r, "__esModule", {
value: !0
});
var a = e("../types/NewPlayerContinuePlayIncentiveType"), s = cc._decorator, c = s.ccclass, l = s.property, u = function(e) {
o(t, e);
function t() {
var t = null !== e && e.apply(this, arguments) || this;
t.spriteTip = null;
t.subEncourageAtlas = null;
t._hasPlayed = !1;
return t;
}
t.prototype.render = function() {
var e, t;
if (!this._hasPlayed) {
var r = this.state.wordIndex;
if (null != r) {
var n = a.SUB_ENCOURAGE_WORDS[r % a.SUB_ENCOURAGE_WORDS.length], o = null !== (t = null === (e = this.subEncourageAtlas) || void 0 === e ? void 0 : e.getSpriteFrame(n)) && void 0 !== t ? t : null;
if (o) {
this._hasPlayed = !0;
this.playEncourage(o);
}
}
}
};
t.prototype.playEncourage = function(e) {
var t = this;
if (this.spriteTip) {
this.spriteTip.spriteFrame = e;
this.spriteTip.sizeMode = cc.Sprite.SizeMode.RAW;
}
this.node.opacity = 0;
this.node.scale = .5;
cc.tween(this.node).to(.2, {
opacity: 255,
scale: 1.1
}, {
easing: "backOut"
}).to(.1, {
scale: 1
}).delay(a.ENCOURAGE_DISPLAY_DURATION - .3).to(.3, {
opacity: 0,
scale: .8
}).call(function() {
t.autoDestroy();
}).start();
};
t.prototype.autoDestroy = function() {
if (cc.isValid(this.node)) {
cc.Tween.stopAllByTarget(this.node);
this.node.destroy();
}
};
t.prototype.onDestroy = function() {
cc.Tween.stopAllByTarget(this.node);
};
i([ l(cc.Sprite) ], t.prototype, "spriteTip", void 0);
i([ l(cc.SpriteAtlas) ], t.prototype, "subEncourageAtlas", void 0);
return i([ c ], t);
}(hs.Component);
r.default = u;
cc._RF.pop();
}, {
"../types/NewPlayerContinuePlayIncentiveType": "NewPlayerContinuePlayIncentiveType"
} ]
}, {}, [ "NewPlayerContinuePlayIncentiveTrait", "NewPlayerContinuePlayIncentive_comparisonNew_Trait", "NodeNewPlayerContinuePlayIncentiveFailTipCom", "NodeNewPlayerContinuePlayIncentiveMotiveationCom", "NodeNewPlayerContinuePlayIncentiveSubEncourageCom", "NewPlayerContinuePlayIncentiveType", "NewPlayerContinuePlayIncentiveVo" ]);
//# sourceMappingURL=index.js.map
