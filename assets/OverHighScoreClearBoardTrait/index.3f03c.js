window.__require = function e(r, t, n) {
function o(a, l) {
if (!t[a]) {
if (!r[a]) {
var c = a.split("/");
c = c[c.length - 1];
if (!r[c]) {
var s = "function" == typeof __require && __require;
if (!l && s) return s(c, !0);
if (i) return i(c, !0);
throw new Error("Cannot find module '" + a + "'");
}
a = c;
}
var u = t[a] = {
exports: {}
};
r[a][0].call(u.exports, function(e) {
return o(r[a][1][e] || e);
}, u, u.exports, e, r, t, n);
}
return t[a].exports;
}
for (var i = "function" == typeof __require && __require, a = 0; a < n.length; a++) o(n[a]);
return o;
}({
OverHighScoreAniAllChangeSpine: [ function(e, r, t) {
"use strict";
cc._RF.push(r, "7e9a4wrjxNNarXgkcPYpH8m", "OverHighScoreAniAllChangeSpine");
var n, o = this && this.__extends || (n = function(e, r) {
return (n = Object.setPrototypeOf || {
__proto__: []
} instanceof Array && function(e, r) {
e.__proto__ = r;
} || function(e, r) {
for (var t in r) Object.prototype.hasOwnProperty.call(r, t) && (e[t] = r[t]);
})(e, r);
}, function(e, r) {
n(e, r);
function t() {
this.constructor = e;
}
e.prototype = null === r ? Object.create(r) : (t.prototype = r.prototype, new t());
}), i = this && this.__decorate || function(e, r, t, n) {
var o, i = arguments.length, a = i < 3 ? r : null === n ? n = Object.getOwnPropertyDescriptor(r, t) : n;
if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) a = Reflect.decorate(e, r, t, n); else for (var l = e.length - 1; l >= 0; l--) (o = e[l]) && (a = (i < 3 ? o(a) : i > 3 ? o(r, t, a) : o(r, t)) || a);
return i > 3 && a && Object.defineProperty(r, t, a), a;
};
Object.defineProperty(t, "__esModule", {
value: !0
});
var a = e("./OverHighScoreAniAllChange"), l = cc._decorator, c = l.ccclass, s = l.property, u = function(e) {
o(r, e);
function r() {
var r = null !== e && e.apply(this, arguments) || this;
r.skeleton = null;
r.skeleton2 = null;
r.skeleton3 = null;
return r;
}
r.prototype.render = function() {
var e = this.state.aniName;
if (e) {
var r = this.getSkeletonByType(e);
if (cc.isValid(r)) {
cc.isValid(r.node) && (r.node.active = !0);
var t = 0 === this.getPlayTimesByAniName(e);
r.clearTracks();
r.setToSetupPose();
r.setAnimation(0, e, t);
}
}
};
r.prototype.getSkeletonByType = function(e) {
switch (e) {
case a.OverHighScoreAniAllChangeTypes.clearX:
case a.OverHighScoreAniAllChangeTypes.clearY:
return this.skeleton3;

case a.OverHighScoreAniAllChangeTypes.out:
return this.skeleton2;

case a.OverHighScoreAniAllChangeTypes.preClearSingle:
case a.OverHighScoreAniAllChangeTypes.preClearLoop:
return this.skeleton;

default:
return null;
}
};
r.prototype.getPlayTimesByAniName = function(e) {
switch (e) {
case a.OverHighScoreAniAllChangeTypes.clearX:
case a.OverHighScoreAniAllChangeTypes.clearY:
case a.OverHighScoreAniAllChangeTypes.out:
return 1;

case a.OverHighScoreAniAllChangeTypes.preClearSingle:
case a.OverHighScoreAniAllChangeTypes.preClearLoop:
return 0;

default:
return 1;
}
};
i([ s(sp.Skeleton) ], r.prototype, "skeleton", void 0);
i([ s(sp.Skeleton) ], r.prototype, "skeleton2", void 0);
i([ s(sp.Skeleton) ], r.prototype, "skeleton3", void 0);
return i([ c ], r);
}(hs.Component);
t.default = u;
cc._RF.pop();
}, {
"./OverHighScoreAniAllChange": "OverHighScoreAniAllChange"
} ],
OverHighScoreAniAllChange: [ function(e, r, t) {
"use strict";
cc._RF.push(r, "868f3i/8bxG5oHlPPmjE9zE", "OverHighScoreAniAllChange");
var n, o, i = this && this.__extends || (n = function(e, r) {
return (n = Object.setPrototypeOf || {
__proto__: []
} instanceof Array && function(e, r) {
e.__proto__ = r;
} || function(e, r) {
for (var t in r) Object.prototype.hasOwnProperty.call(r, t) && (e[t] = r[t]);
})(e, r);
}, function(e, r) {
n(e, r);
function t() {
this.constructor = e;
}
e.prototype = null === r ? Object.create(r) : (t.prototype = r.prototype, new t());
}), a = this && this.__decorate || function(e, r, t, n) {
var o, i = arguments.length, a = i < 3 ? r : null === n ? n = Object.getOwnPropertyDescriptor(r, t) : n;
if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) a = Reflect.decorate(e, r, t, n); else for (var l = e.length - 1; l >= 0; l--) (o = e[l]) && (a = (i < 3 ? o(a) : i > 3 ? o(r, t, a) : o(r, t)) || a);
return i > 3 && a && Object.defineProperty(r, t, a), a;
};
Object.defineProperty(t, "__esModule", {
value: !0
});
t.OverHighScoreAniAllChangeTypes = void 0;
(function(e) {
e.clearX = "out_x";
e.clearY = "out_y";
e.out = "out";
e.preClearSingle = "init_1";
e.preClearLoop = "init_2";
})(o = t.OverHighScoreAniAllChangeTypes || (t.OverHighScoreAniAllChangeTypes = {}));
var l = cc._decorator, c = l.ccclass, s = l.property, u = function(e) {
i(r, e);
function r() {
var r = null !== e && e.apply(this, arguments) || this;
r.armatureDisplay = null;
r.armatureDisplay2 = null;
r.armatureDisplay3 = null;
return r;
}
r.prototype.render = function() {
var e = this.getArmatureDisplayByType(this.state.aniName);
if (this.state.aniName && cc.isValid(e)) {
cc.isValid(e.node) && (e.node.active = !0);
e.playAnimation(this.state.aniName, this.getPlayTimesByAniName(this.state.aniName));
}
};
r.prototype.getArmatureDisplayByType = function(e) {
switch (e) {
case o.clearX:
case o.clearY:
return this.armatureDisplay3;

case o.out:
return this.armatureDisplay2;

case o.preClearSingle:
case o.preClearLoop:
return this.armatureDisplay;

default:
return null;
}
};
r.prototype.getPlayTimesByAniName = function(e) {
switch (e) {
case o.clearX:
case o.clearY:
case o.out:
return 1;

case o.preClearSingle:
case o.preClearLoop:
return 0;
}
};
a([ s(dragonBones.ArmatureDisplay) ], r.prototype, "armatureDisplay", void 0);
a([ s(dragonBones.ArmatureDisplay) ], r.prototype, "armatureDisplay2", void 0);
a([ s(dragonBones.ArmatureDisplay) ], r.prototype, "armatureDisplay3", void 0);
return a([ c ], r);
}(hs.Component);
t.default = u;
cc._RF.pop();
}, {} ],
OverHighScoreClearBoardTrait: [ function(e, r, t) {
"use strict";
cc._RF.push(r, "45b6dUB2QxMnJ8VyCArNtem", "OverHighScoreClearBoardTrait");
var n, o = this && this.__extends || (n = function(e, r) {
return (n = Object.setPrototypeOf || {
__proto__: []
} instanceof Array && function(e, r) {
e.__proto__ = r;
} || function(e, r) {
for (var t in r) Object.prototype.hasOwnProperty.call(r, t) && (e[t] = r[t]);
})(e, r);
}, function(e, r) {
n(e, r);
function t() {
this.constructor = e;
}
e.prototype = null === r ? Object.create(r) : (t.prototype = r.prototype, new t());
}), i = this && this.__decorate || function(e, r, t, n) {
var o, i = arguments.length, a = i < 3 ? r : null === n ? n = Object.getOwnPropertyDescriptor(r, t) : n;
if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) a = Reflect.decorate(e, r, t, n); else for (var l = e.length - 1; l >= 0; l--) (o = e[l]) && (a = (i < 3 ? o(a) : i > 3 ? o(r, t, a) : o(r, t)) || a);
return i > 3 && a && Object.defineProperty(r, t, a), a;
}, a = this && this.__awaiter || function(e, r, t, n) {
return new (t || (t = Promise))(function(o, i) {
function a(e) {
try {
c(n.next(e));
} catch (e) {
i(e);
}
}
function l(e) {
try {
c(n.throw(e));
} catch (e) {
i(e);
}
}
function c(e) {
e.done ? o(e.value) : (r = e.value, r instanceof t ? r : new t(function(e) {
e(r);
})).then(a, l);
var r;
}
c((n = n.apply(e, r || [])).next());
});
}, l = this && this.__generator || function(e, r) {
var t, n, o, i, a = {
label: 0,
sent: function() {
if (1 & o[0]) throw o[1];
return o[1];
},
trys: [],
ops: []
};
return i = {
next: l(0),
throw: l(1),
return: l(2)
}, "function" == typeof Symbol && (i[Symbol.iterator] = function() {
return this;
}), i;
function l(e) {
return function(r) {
return c([ e, r ]);
};
}
function c(i) {
if (t) throw new TypeError("Generator is already executing.");
for (;a; ) try {
if (t = 1, n && (o = 2 & i[0] ? n.return : i[0] ? n.throw || ((o = n.return) && o.call(n), 
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
i = r.call(e, a);
} catch (e) {
i = [ 6, e ];
n = 0;
} finally {
t = o = 0;
}
if (5 & i[0]) throw i[1];
return {
value: i[0] ? i[1] : void 0,
done: !0
};
}
}, c = this && this.__values || function(e) {
var r = "function" == typeof Symbol && Symbol.iterator, t = r && e[r], n = 0;
if (t) return t.call(e);
if (e && "number" == typeof e.length) return {
next: function() {
e && n >= e.length && (e = void 0);
return {
value: e && e[n++],
done: !e
};
}
};
throw new TypeError(r ? "Object is not iterable." : "Symbol.iterator is not defined.");
}, s = this && this.__read || function(e, r) {
var t = "function" == typeof Symbol && e[Symbol.iterator];
if (!t) return e;
var n, o, i = t.call(e), a = [];
try {
for (;(void 0 === r || r-- > 0) && !(n = i.next()).done; ) a.push(n.value);
} catch (e) {
o = {
error: e
};
} finally {
try {
n && !n.done && (t = i.return) && t.call(i);
} finally {
if (o) throw o.error;
}
}
return a;
}, u = this && this.__spread || function() {
for (var e = [], r = 0; r < arguments.length; r++) e = e.concat(s(arguments[r]));
return e;
};
Object.defineProperty(t, "__esModule", {
value: !0
});
t.OverHighScoreClearBoardTrait = void 0;
var h = cc.color(255, 215, 0), f = {
name: "GameplayAniAllChange",
url: "prefabs/clear_tips_node_new",
bundleName: "OverHighScoreClearBoardTrait"
}, p = function(e) {
o(r, e);
function r() {
var r = null !== e && e.apply(this, arguments) || this;
r._running = !1;
r._isClearingBoard = !1;
r._forcedClearSequenceTimerId = null;
r._forcedClearSequenceCancelled = !1;
r._runClearSequenceActive = !1;
r._prefab = null;
r._prefabLoading = null;
r._unbelievableEffectNode = null;
r._unbelievablePlaying = !1;
r._unbelievableLoaded = !1;
r._unbelievableLoading = !1;
r._unbelievablePreloadedPrefab = null;
r._fullscreenTouchMaskNode = null;
r._classScoreProxy = null;
return r;
}
r.prototype.isCanActive = function() {
return !0;
};
Object.defineProperty(r.prototype, "_afterHighScoreAnimMs", {
get: function() {
var e, r;
return null !== (r = null === (e = this.props) || void 0 === e ? void 0 : e.afterHighScoreAnimMs) && void 0 !== r ? r : 1500;
},
enumerable: !1,
configurable: !0
});
Object.defineProperty(r.prototype, "_rowClearTotalBudgetMs", {
get: function() {
var e, r;
return null !== (r = null === (e = this.props) || void 0 === e ? void 0 : e.rowClearTotalBudgetMs) && void 0 !== r ? r : 800;
},
enumerable: !1,
configurable: !0
});
Object.defineProperty(r.prototype, "isClearingBoard", {
get: function() {
return this._isClearingBoard;
},
enumerable: !1,
configurable: !0
});
Object.defineProperty(r.prototype, "onActiveCondition", {
get: function() {
return this.isCanActive(), !1;
},
enumerable: !1,
configurable: !0
});
r.prototype.isExperimentConditionMet = function() {
var e = this.props.experiment, r = hs.classGameInfo.gameNum, t = hs.classScoreInfo.highScore;
switch (e) {
case 1:
return r >= 5 && t >= 0;

case 2:
return r >= 10 && t >= 0;

case 3:
return r >= 5 && t >= 5e3;

case 4:
return r >= 5 && t >= 1e4;

default:
return !1;
}
};
r.prototype.registerTraitEventsMethods = function() {
return [ {
className: "ClassGame_Proxy",
methodName: "onGameStart"
} ];
};
r.prototype.onActive = function(e) {
var r, t, n = this;
hs.tp.isClassScore_ProxyOnTouchEnd(e) && (this._classScoreProxy = e.target);
if (hs.tp.isClassGame_ProxyOnGameStart(e)) {
this.clearForcedClearSequenceTimer();
this._forcedClearSequenceCancelled = !1;
this._runClearSequenceActive = !1;
this._running = !1;
this._isClearingBoard = !1;
this.removeFullscreenTouchMask();
var o = null === (r = e.args) || void 0 === r ? void 0 : r[0];
(null === (t = null == o ? void 0 : o.data) || void 0 === t ? void 0 : t.newGame) && hs.storage.setItem("OverHighScoreForcedClearSequenceConsumed", !1);
setTimeoutSafe(function() {
n._preloadUnbelievableAddResources();
}, 200);
} else {
if (hs.tp.isClassScoreTip_ProxyPlayHighScoreEffects(e)) {
if (!this.onActiveCondition) return;
if (hs.storage.getItem("OverHighScoreForcedClearSequenceConsumed", !1)) return;
var i = JSON.parse(JSON.stringify(hs.boardInfo.faceBlocks));
if (0 === this.collectRowsWithBlocks(i).length) {
hs.storage.setItem("OverHighScoreForcedClearSequenceConsumed", !0);
return;
}
if (!this.isExperimentConditionMet()) return;
this.startForcedClearSequence();
}
hs.tp.isRecordBreakClearScreenTraitPlayHighScoreEffects(e) && (e.replace = !0);
if (!hs.tp.isClassRevive_ProxyChangeCanReviveByTrait(e) || hs.gameInfo.gameMode === hs.GameMode.Class) {
if (hs.tp.isClassRevive_ProxyOnReviveProcessing(e)) {
if (hs.gameInfo.gameMode !== hs.GameMode.Class) return;
if (this._isClearingBoard) {
e.returnState = !0;
e.replace = !0;
}
}
if (hs.tp.isClassScore_ProxyIsUnlockClearScreenEffect(e)) {
e.returnState = !0;
e.returnValue = !0;
e.replace = !0;
}
}
}
};
r.prototype.startForcedClearSequence = function() {
var e = this;
if (this._running) ; else {
this._forcedClearSequenceCancelled = !1;
this._running = !0;
this._isClearingBoard = !0;
var r = this._afterHighScoreAnimMs;
this.addFullscreenTouchMask();
this.clearForcedClearSequenceTimer();
this._forcedClearSequenceTimerId = setTimeoutSafe(function() {
e._forcedClearSequenceTimerId = null;
e._forcedClearSequenceCancelled ? e.resetStateAfterForcedClearAbort() : e.runClearSequence().catch(function() {});
}, r);
}
};
r.prototype.clearForcedClearSequenceTimer = function() {
if (null != this._forcedClearSequenceTimerId) {
clearTimeout(this._forcedClearSequenceTimerId);
this._forcedClearSequenceTimerId = null;
}
};
r.prototype.isFaceBoardEmpty = function() {
var e = JSON.parse(JSON.stringify(hs.boardInfo.faceBlocks));
return 0 === this.collectRowsWithBlocks(e).length;
};
r.prototype.abortForcedClearSequenceNoRevive = function() {
this._forcedClearSequenceCancelled = !0;
this.clearForcedClearSequenceTimer();
this._runClearSequenceActive || this.resetStateAfterForcedClearAbort();
};
r.prototype.resetStateAfterForcedClearAbort = function() {
this.removeFullscreenTouchMask();
this._running = !1;
this._isClearingBoard = !1;
};
r.prototype.addFullscreenTouchMask = function() {
this.removeFullscreenTouchMask();
var e = hs.gameEffectLayer;
if (e && cc.isValid(e)) {
var r = cc.winSize.width, t = cc.winSize.height, n = new cc.Node("OverHighScoreClearFullscreenTouchMask");
n.setContentSize(r, t);
n.setAnchorPoint(.5, .5);
n.setPosition(cc.winSize.width / 2, cc.winSize.height / 2);
n.zIndex = 1e5;
e.addChild(n);
n.addComponent(cc.BlockInputEvents);
var o = n.addComponent(cc.Graphics);
o.fillColor = cc.color(0, 0, 0, 0);
o.rect(-r / 2, -t / 2, r, t);
o.fill();
this._fullscreenTouchMaskNode = n;
}
};
r.prototype.removeFullscreenTouchMask = function() {
this._fullscreenTouchMaskNode && cc.isValid(this._fullscreenTouchMaskNode) && this._fullscreenTouchMaskNode.destroy();
this._fullscreenTouchMaskNode = null;
var e = Cinst(hs.BlocksProducerTouch);
e && e.setMaskActive(!1);
};
r.prototype.runClearSequence = function() {
return a(this, void 0, Promise, function() {
var e, r;
return l(this, function(t) {
switch (t.label) {
case 0:
this._runClearSequenceActive = !0;
t.label = 1;

case 1:
t.trys.push([ 1, , 7, 8 ]);
if (this._forcedClearSequenceCancelled) return [ 2 ];
e = JSON.parse(JSON.stringify(hs.boardInfo.faceBlocks));
return 0 !== (r = this.collectRowsWithBlocks(e)).length ? [ 3, 2 ] : [ 3, 4 ];

case 2:
return [ 4, this.playTravelStyleRowClears(e, r) ];

case 3:
t.sent();
t.label = 4;

case 4:
return this._forcedClearSequenceCancelled ? [ 2 ] : [ 4, this.playUnbelievableAndBonus() ];

case 5:
t.sent();
hs.storage.setItem("OverHighScoreForcedClearSequenceConsumed", !0);
return [ 4, new Promise(function(e) {
return setTimeoutSafe(e, 3e3);
}) ];

case 6:
t.sent();
this.removeFullscreenTouchMask();
return [ 3, 8 ];

case 7:
this._runClearSequenceActive = !1;
this.removeFullscreenTouchMask();
this._running = !1;
this._isClearingBoard = !1;
return [ 7 ];

case 8:
return [ 2 ];
}
});
});
};
r.prototype.collectRowsWithBlocks = function(e) {
for (var r = [], t = 0; t < hs.ROW; t++) this.rowHasClearableBlocks(e, t) && r.push(t);
return r;
};
r.prototype.rowHasClearableBlocks = function(e, r) {
for (var t, n = 0; n < hs.COL; n++) {
var o = null === (t = e[r]) || void 0 === t ? void 0 : t[n];
if (void 0 !== o && -1 !== o && 10 !== o) return !0;
}
return !1;
};
r.prototype.calcRowCenterLocal = function(e) {
var r = 367 - 106 * e;
return cc.v3(0, r, 0);
};
r.prototype.getTravelRowBoardLinePositionInParent = function(e, r) {
if (!r || !cc.isValid(r)) return cc.v3(0, 0, 0);
var t = Cinst(hs.Board), n = null == t ? void 0 : t.node;
if (!n || !cc.isValid(n)) return cc.v3(0, 0, 0);
var o = this.calcRowCenterLocal(e), i = n.convertToWorldSpaceAR(cc.v3(o.x, o.y, 0)), a = r.convertToNodeSpaceAR(i);
return cc.v3(a.x, a.y, 0);
};
r.prototype.getGameplayAniPrefabUrl = function() {
return f.url;
};
r.prototype.ensureGameplayPrefab = function() {
return a(this, void 0, Promise, function() {
var e, r, t = this;
return l(this, function() {
if (this._prefab && cc.isValid(this._prefab)) return [ 2, this._prefab ];
if (this._prefabLoading) return [ 2, this._prefabLoading ];
e = f;
r = this.getGameplayAniPrefabUrl();
if (!e.bundleName || !r) return [ 2, null ];
this._prefabLoading = hs.ResLoader.asyncLoadByBundle(e.bundleName, r, cc.Prefab).then(function(e) {
t._prefab = e;
t._prefabLoading = null;
return e;
}).catch(function() {
t._prefabLoading = null;
return null;
});
return [ 2, this._prefabLoading ];
});
});
};
r.prototype.playTravelStyleRowClears = function(e, r) {
return a(this, void 0, Promise, function() {
var t, n, o, i, a, c, s, u, h;
return l(this, function(l) {
switch (l.label) {
case 0:
return [ 4, this.ensureGameplayPrefab() ];

case 1:
t = l.sent();
n = Cinst(hs.Board);
if (!t || !n || !cc.isValid(n.node)) {
this.clearAllBlocksImmediate(e);
return [ 2 ];
}
if (!(o = n.blockOverPreEliminate) || !cc.isValid(o)) {
this.clearAllBlocksImmediate(e);
return [ 2 ];
}
(i = cc.instantiate(t)).setParent(o);
i.scale = 2;
i.angle = 0;
a = this._rowClearTotalBudgetMs;
c = Math.max(70, Math.floor(a / Math.max(1, r.length)));
l.label = 2;

case 2:
l.trys.push([ 2, , 7, 8 ]);
s = 0;
l.label = 3;

case 3:
if (!(s < r.length)) return [ 3, 6 ];
if (this._forcedClearSequenceCancelled) return [ 3, 6 ];
u = r[s];
h = this.getTravelRowBoardLinePositionInParent(u, o);
i.setPosition(h);
return [ 4, this.playOneTravelRowLine(i, c) ];

case 4:
l.sent();
this.clearRowData(e, u);
this.applyBoard(e);
l.label = 5;

case 5:
s++;
return [ 3, 3 ];

case 6:
return [ 3, 8 ];

case 7:
cc.isValid(i) && i.destroy();
return [ 7 ];

case 8:
return [ 2 ];
}
});
});
};
r.prototype.playOneTravelRowLine = function(e, r) {
return new Promise(function(t) {
var n, o;
if (cc.isValid(e)) {
var i = e.getComponent("OverHighScoreAniAllChange");
e.opacity = 255;
e.color = h;
if (i) {
var a = new Set();
try {
for (var l = c([ "init_1", "init_2", "out_x", "out_y", "out" ]), s = l.next(); !s.done; s = l.next()) {
var u = s.value, f = i.getArmatureDisplayByType(u);
if ((null == f ? void 0 : f.node) && cc.isValid(f.node) && !a.has(f.node)) {
a.add(f.node);
f.node.active = !1;
}
}
} catch (e) {
n = {
error: e
};
} finally {
try {
s && !s.done && (o = l.return) && o.call(l);
} finally {
if (n) throw n.error;
}
}
var p = i.getArmatureDisplayByType("init_2");
if (p) {
if (cc.isValid(p.node)) {
p.node.color = h;
p.node.active = !0;
}
p.timeScale = Math.max(1, .5 / (r / 1e3));
}
i.setState({
aniName: "init_2"
});
}
setTimeoutSafe(function() {
cc.isValid(e) && (e.opacity = 0);
t();
}, r);
} else t();
});
};
r.prototype.clearRowData = function(e, r) {
for (var t, n = 0; n < hs.COL; n++) {
var o = null === (t = e[r]) || void 0 === t ? void 0 : t[n];
void 0 !== o && -1 !== o && 10 !== o && (e[r][n] = -1);
}
};
r.prototype.clearAllBlocksImmediate = function(e) {
for (var r = 0; r < hs.ROW; r++) this.clearRowData(e, r);
this.applyBoard(e);
};
r.prototype.applyBoard = function(e) {
hs.storage.setItem("classFaceBlocks", e);
var r = Cinst(hs.Board);
r && "function" == typeof r.setState && r.setState({
boards: e
});
r && "function" == typeof r.render && r.render();
};
r.prototype.playUnbelievableAndBonus = function() {
var e, r;
return a(this, void 0, Promise, function() {
var t, n, o, i;
return l(this, function(a) {
switch (a.label) {
case 0:
this.playUnbelievableEffect();
(t = null === (e = hs.EncourageSoundType) || void 0 === e ? void 0 : e.SOUND5) && (null === (r = hs.AudioConfig) || void 0 === r ? void 0 : r[t]) && hs.audioInfo.play(hs.AudioConfig[t]);
n = hs.classScoreInfo.score;
return [ 4, this.applySyntheticBoardTouchEndScore() ];

case 1:
a.sent();
o = hs.classScoreInfo.score;
i = hs.storage.getItem("classHighScore", 0);
hs.EventManager.dispatchModuleEvent(new hs.E_ComboScoreTip_ScoreAnim({
fromScore: n,
score: o,
highScore: Math.max(i, o)
}));
return [ 2 ];
}
});
});
};
r.prototype.applySyntheticBoardTouchEndScore = function() {
return a(this, void 0, Promise, function() {
var e, r, t, n, o;
return l(this, function(i) {
switch (i.label) {
case 0:
e = Cinst(hs.BlocksProducerTouch);
r = this.getClassScoreProxyInstance();
if (!e || !r) {
t = hs.classScoreInfo.score;
hs.storage.setItem("classScore", t + 300);
return [ 2 ];
}
n = JSON.parse(JSON.stringify(hs.storage.getItem("classFaceBlocks", hs.boardInfo.NULL)));
hs.storage.setItem("classFaceBlocks", this.buildSyntheticFirstRowClearBoard());
(o = e.computeEliminateInfo(1)).clearScreen = !0;
hs.storage.setItem("classFaceBlocks", n);
return [ 4, r.onTouchEnd(new hs.E_BlocksProducer_TouchEnd(o)) ];

case 1:
i.sent();
return [ 2 ];
}
});
});
};
r.prototype.buildSyntheticFirstRowClearBoard = function() {
var e = hs.boardInfo.NULL.map(function(e) {
return u(e);
}), r = e[0];
if (r) for (var t = 0; t < r.length; t++) r[t] = 1;
return e;
};
r.prototype.getClassScoreProxyInstance = function() {
var e, r, t;
if (this._classScoreProxy) return this._classScoreProxy;
var n = null === (t = null === hs || void 0 === hs ? void 0 : hs.ModuleManager) || void 0 === t ? void 0 : t.moduleList;
if (!Array.isArray(n) || 0 === n.length) return null;
var o = hs.ClassScore_Proxy;
if (!o) return null;
try {
for (var i = c(n), a = i.next(); !a.done; a = i.next()) {
var l = a.value;
if (l && "function" == typeof l.getProxy) {
var s = l.getProxy(o);
if (s) return s;
}
}
} catch (r) {
e = {
error: r
};
} finally {
try {
a && !a.done && (r = i.return) && r.call(i);
} finally {
if (e) throw e.error;
}
}
return null;
};
r.prototype._preloadUnbelievableAddResources = function() {
return a(this, void 0, Promise, function() {
var e, r, t;
return l(this, function(n) {
switch (n.label) {
case 0:
if (this._unbelievableLoaded || this._unbelievableLoading) return [ 2 ];
if (!(e = "prefabs/OverHighScoreClearBoardAdd3")) return [ 2 ];
this._unbelievableLoading = !0;
if (!(r = hs.gameEffectLayer) || !cc.isValid(r)) {
this._unbelievableLoading = !1;
return [ 2 ];
}
n.label = 1;

case 1:
n.trys.push([ 1, 3, , 4 ]);
return [ 4, hs.ResLoader.asyncLoadByBundle("OverHighScoreClearBoardTrait", e, cc.Prefab) ];

case 2:
if (t = n.sent()) {
this._unbelievablePreloadedPrefab = t;
this._unbelievableLoaded = !0;
}
return [ 3, 4 ];

case 3:
n.sent();
this._unbelievableLoaded = !1;
return [ 3, 4 ];

case 4:
this._unbelievableLoading = !1;
return [ 2 ];
}
});
});
};
r.prototype.playUnbelievableEffect = function() {
return a(this, void 0, void 0, function() {
var e, r, t, n = this;
return l(this, function() {
if (this._unbelievablePlaying) return [ 2 ];
this._unbelievablePlaying = !0;
if (!this._unbelievableLoaded || !this._unbelievablePreloadedPrefab) {
this._unbelievablePlaying = !1;
return [ 2 ];
}
try {
if (!(e = this.getBoardCenterPosition())) {
this._unbelievablePlaying = !1;
return [ 2 ];
}
if (!hs.gameEffectLayer || !cc.isValid(hs.gameEffectLayer)) {
this._unbelievablePlaying = !1;
return [ 2 ];
}
r = cc.instantiate(this._unbelievablePreloadedPrefab);
hs.gameEffectLayer.addChild(r);
r.setPosition(e);
r.zIndex = 100;
this._unbelievableEffectNode = r;
if (t = r.getComponentInChildren(sp.Skeleton)) {
t.setAnimation(0, "in_300", !1);
t.setCompleteListener(function() {
n.onUnbelievableAnimationComplete();
});
} else this.scheduleUnbelievableOnce(function() {
n.onUnbelievableAnimationComplete();
}, 2);
} catch (e) {
this._unbelievablePlaying = !1;
}
return [ 2 ];
});
});
};
r.prototype.getBoardCenterPosition = function() {
var e = Cinst(hs.Board);
if (!e || !cc.isValid(e.boardGrid)) return null;
var r = cc.v2(0, 0), t = e.boardGrid.convertToWorldSpaceAR(r);
if (!hs.gameEffectLayer || !cc.isValid(hs.gameEffectLayer)) return null;
var n = hs.gameEffectLayer.convertToNodeSpaceAR(t);
return cc.v2(n.x, n.y - 20);
};
r.prototype.onUnbelievableAnimationComplete = function() {
this._unbelievablePlaying = !1;
this.removeFullscreenTouchMask();
};
r.prototype.scheduleUnbelievableOnce = function(e, r) {
if (r <= 0) e(); else {
var t = new cc.Node("OverHighScoreUnbelievableScheduler");
t.parent = cc.director.getScene();
cc.tween(t).delay(r).call(function() {
e();
cc.isValid(t) && t.destroy();
}).start();
}
};
r.LOG = "[OverHighScoreClearBoardTrait]";
return i([ classId("OverHighScoreClearBoardTrait"), classMethodWatch() ], r);
}(Trait);
t.OverHighScoreClearBoardTrait = p;
cc._RF.pop();
}, {} ],
OverHighScoreClearBoard_comparisonNew_Trait: [ function(e, r, t) {
"use strict";
cc._RF.push(r, "3f8c16daitMfpHVC06KfC8T", "OverHighScoreClearBoard_comparisonNew_Trait");
var n, o = this && this.__extends || (n = function(e, r) {
return (n = Object.setPrototypeOf || {
__proto__: []
} instanceof Array && function(e, r) {
e.__proto__ = r;
} || function(e, r) {
for (var t in r) Object.prototype.hasOwnProperty.call(r, t) && (e[t] = r[t]);
})(e, r);
}, function(e, r) {
n(e, r);
function t() {
this.constructor = e;
}
e.prototype = null === r ? Object.create(r) : (t.prototype = r.prototype, new t());
}), i = this && this.__decorate || function(e, r, t, n) {
var o, i = arguments.length, a = i < 3 ? r : null === n ? n = Object.getOwnPropertyDescriptor(r, t) : n;
if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) a = Reflect.decorate(e, r, t, n); else for (var l = e.length - 1; l >= 0; l--) (o = e[l]) && (a = (i < 3 ? o(a) : i > 3 ? o(r, t, a) : o(r, t)) || a);
return i > 3 && a && Object.defineProperty(r, t, a), a;
}, a = this && this.__values || function(e) {
var r = "function" == typeof Symbol && Symbol.iterator, t = r && e[r], n = 0;
if (t) return t.call(e);
if (e && "number" == typeof e.length) return {
next: function() {
e && n >= e.length && (e = void 0);
return {
value: e && e[n++],
done: !e
};
}
};
throw new TypeError(r ? "Object is not iterable." : "Symbol.iterator is not defined.");
};
Object.defineProperty(t, "__esModule", {
value: !0
});
t.OverHighScoreClearBoard_comparisonNew_Trait = void 0;
var l = e("./OverHighScoreClearBoardTrait"), c = e("./OverHighScoreAniAllChange"), s = e("./OverHighScoreAniAllChangeSpine"), u = c.OverHighScoreAniAllChangeTypes.preClearLoop, h = cc.color(255, 215, 0), f = function(e) {
o(r, e);
function r() {
return null !== e && e.apply(this, arguments) || this;
}
r.prototype.getGameplayAniPrefabUrl = function() {
return "prefabs/clear_tips_node_new_spine";
};
r.prototype.playOneTravelRowLine = function(e, r) {
return new Promise(function(t) {
var n, o;
if (cc.isValid(e)) {
var i = e.getComponent(s.default);
e.opacity = 255;
e.color = h;
if (i) {
var l = [ c.OverHighScoreAniAllChangeTypes.preClearSingle, c.OverHighScoreAniAllChangeTypes.preClearLoop, c.OverHighScoreAniAllChangeTypes.clearX, c.OverHighScoreAniAllChangeTypes.clearY, c.OverHighScoreAniAllChangeTypes.out ], f = new Set();
try {
for (var p = a(l), d = p.next(); !d.done; d = p.next()) {
var v = d.value, y = i.getSkeletonByType(v);
if ((null == y ? void 0 : y.node) && cc.isValid(y.node) && !f.has(y.node)) {
f.add(y.node);
y.node.active = !1;
}
}
} catch (e) {
n = {
error: e
};
} finally {
try {
d && !d.done && (o = p.return) && o.call(p);
} finally {
if (n) throw n.error;
}
}
var g = i.getSkeletonByType(u);
if (g) {
if (cc.isValid(g.node)) {
g.useTint = !0;
g.node.color = h;
g.node.active = !0;
}
var _ = hs.kSpeedInfo.kSpeed || 1;
g.timeScale = Math.max(1, .5 / (r / 1e3)) / _;
i.setState({
aniName: u
});
}
}
setTimeoutSafe(function() {
cc.isValid(e) && (e.opacity = 0);
t();
}, r);
} else t();
});
};
return i([ classId("OverHighScoreClearBoardTrait", "comparisonNew") ], r);
}(l.OverHighScoreClearBoardTrait);
t.OverHighScoreClearBoard_comparisonNew_Trait = f;
cc._RF.pop();
}, {
"./OverHighScoreAniAllChange": "OverHighScoreAniAllChange",
"./OverHighScoreAniAllChangeSpine": "OverHighScoreAniAllChangeSpine",
"./OverHighScoreClearBoardTrait": "OverHighScoreClearBoardTrait"
} ]
}, {}, [ "OverHighScoreAniAllChange", "OverHighScoreAniAllChangeSpine", "OverHighScoreClearBoardTrait", "OverHighScoreClearBoard_comparisonNew_Trait" ]);
//# sourceMappingURL=index.js.map
