window.__require = function e(t, o, r) {
function i(a, c) {
if (!o[a]) {
if (!t[a]) {
var n = a.split("/");
n = n[n.length - 1];
if (!t[n]) {
var l = "function" == typeof __require && __require;
if (!c && l) return l(n, !0);
if (s) return s(n, !0);
throw new Error("Cannot find module '" + a + "'");
}
a = n;
}
var h = o[a] = {
exports: {}
};
t[a][0].call(h.exports, function(e) {
return i(t[a][1][e] || e);
}, h, h.exports, e, t, o, r);
}
return o[a].exports;
}
for (var s = "function" == typeof __require && __require, a = 0; a < r.length; a++) i(r[a]);
return i;
}({
CTRefactorIsOpenReviveSpecialTrait: [ function(e, t, o) {
"use strict";
cc._RF.push(t, "4001ciBI1tGNbCFPz7AhIZv", "CTRefactorIsOpenReviveSpecialTrait");
var r, i, s = this && this.__extends || (r = function(e, t) {
return (r = Object.setPrototypeOf || {
__proto__: []
} instanceof Array && function(e, t) {
e.__proto__ = t;
} || function(e, t) {
for (var o in t) Object.prototype.hasOwnProperty.call(t, o) && (e[o] = t[o]);
})(e, t);
}, function(e, t) {
r(e, t);
function o() {
this.constructor = e;
}
e.prototype = null === t ? Object.create(t) : (o.prototype = t.prototype, new o());
}), a = this && this.__decorate || function(e, t, o, r) {
var i, s = arguments.length, a = s < 3 ? t : null === r ? r = Object.getOwnPropertyDescriptor(t, o) : r;
if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) a = Reflect.decorate(e, t, o, r); else for (var c = e.length - 1; c >= 0; c--) (i = e[c]) && (a = (s < 3 ? i(a) : s > 3 ? i(t, o, a) : i(t, o)) || a);
return s > 3 && a && Object.defineProperty(t, o, a), a;
}, c = this && this.__awaiter || function(e, t, o, r) {
return new (o || (o = Promise))(function(i, s) {
function a(e) {
try {
n(r.next(e));
} catch (e) {
s(e);
}
}
function c(e) {
try {
n(r.throw(e));
} catch (e) {
s(e);
}
}
function n(e) {
e.done ? i(e.value) : (t = e.value, t instanceof o ? t : new o(function(e) {
e(t);
})).then(a, c);
var t;
}
n((r = r.apply(e, t || [])).next());
});
}, n = this && this.__generator || function(e, t) {
var o, r, i, s, a = {
label: 0,
sent: function() {
if (1 & i[0]) throw i[1];
return i[1];
},
trys: [],
ops: []
};
return s = {
next: c(0),
throw: c(1),
return: c(2)
}, "function" == typeof Symbol && (s[Symbol.iterator] = function() {
return this;
}), s;
function c(e) {
return function(t) {
return n([ e, t ]);
};
}
function n(s) {
if (o) throw new TypeError("Generator is already executing.");
for (;a; ) try {
if (o = 1, r && (i = 2 & s[0] ? r.return : s[0] ? r.throw || ((i = r.return) && i.call(r), 
0) : r.next) && !(i = i.call(r, s[1])).done) return i;
(r = 0, i) && (s = [ 2 & s[0], i.value ]);
switch (s[0]) {
case 0:
case 1:
i = s;
break;

case 4:
a.label++;
return {
value: s[1],
done: !1
};

case 5:
a.label++;
r = s[1];
s = [ 0 ];
continue;

case 7:
s = a.ops.pop();
a.trys.pop();
continue;

default:
if (!(i = a.trys, i = i.length > 0 && i[i.length - 1]) && (6 === s[0] || 2 === s[0])) {
a = 0;
continue;
}
if (3 === s[0] && (!i || s[1] > i[0] && s[1] < i[3])) {
a.label = s[1];
break;
}
if (6 === s[0] && a.label < i[1]) {
a.label = i[1];
i = s;
break;
}
if (i && a.label < i[2]) {
a.label = i[2];
a.ops.push(s);
break;
}
i[2] && a.ops.pop();
a.trys.pop();
continue;
}
s = t.call(e, a);
} catch (e) {
s = [ 6, e ];
r = 0;
} finally {
o = i = 0;
}
if (5 & s[0]) throw s[1];
return {
value: s[0] ? s[1] : void 0,
done: !0
};
}
}, l = this && this.__read || function(e, t) {
var o = "function" == typeof Symbol && e[Symbol.iterator];
if (!o) return e;
var r, i, s = o.call(e), a = [];
try {
for (;(void 0 === t || t-- > 0) && !(r = s.next()).done; ) a.push(r.value);
} catch (e) {
i = {
error: e
};
} finally {
try {
r && !r.done && (o = s.return) && o.call(s);
} finally {
if (i) throw i.error;
}
}
return a;
}, h = this && this.__spread || function() {
for (var e = [], t = 0; t < arguments.length; t++) e = e.concat(l(arguments[t]));
return e;
};
Object.defineProperty(o, "__esModule", {
value: !0
});
o.CTRefactorIsOpenReviveSpecialTrait = void 0;
(function(e) {
e[e.colType = 1] = "colType";
e[e.rowType = 2] = "rowType";
})(i || (i = {}));
var p = function(e) {
s(t, e);
function t() {
var t = null !== e && e.apply(this, arguments) || this;
t.blockPrefab = null;
t.skinBlockPrefab = null;
t.isStartOutBlocks = !1;
t.isCanUseBlock = !1;
t.preEliPool = null;
t.blockNodeList = [];
t.blockPool = null;
t.effectNodeList = [];
t.putNodeList = [];
t.blocksNode = null;
t.preReviveBlocksReadyForReuse = !1;
return t;
}
t.prototype.data = function() {
return {
blockList: [],
colorList: [],
clearInfo: null
};
};
t.prototype.isBoardInitBoard = function() {
return c(this, void 0, void 0, function() {
return n(this, function(e) {
switch (e.label) {
case 0:
return this.getIsTrigger() ? [ 4, this.initUI() ] : [ 2 ];

case 1:
e.sent();
this.addSpecialShowNode();
return [ 2 ];
}
});
});
};
t.prototype.isChapterGame_ProxyOnReviveShow = function() {
this.getIsTrigger() && this.requestOutBlocks();
};
t.prototype.isClassGame_ProxyOnReviveShow = function() {
this.getIsTrigger() && this.requestOutBlocks();
};
t.prototype.isCTRefactorFinalBlockCheckTraitCheckGuaranteedBlock = function(e) {
this.getIsTrigger() && (this.isCanUseBlock || this.isStartOutBlocks) && (e.replace = !0);
};
t.prototype.isClassBlocksProducer_ProxyRequestBlocksProducer = function(e) {
this.applyReusePreReviveBlocksOnRequest(e);
};
t.prototype.isChapterBlocksProducer_ProxyRequestBlocksProducer = function(e) {
this.applyReusePreReviveBlocksOnRequest(e);
};
t.prototype.onAlgorithmStrategyColorAdjust = function() {
if (this.getIsTrigger() && this.isCanUseBlock && null != this.state.clearInfo && 0 !== this.state.colorList.length) {
var e = hs.algorithmStrategyLevelRefactoredInfo.algorithmSourceLevel1;
if (hs.gameInfo.gameMode === hs.GameMode.Chapter ? e === hs.ChapterAlgorithmSourceType.TravelReviveTrait : e === hs.ClassAlgorithmSourceType.AlgoReviveTrait) {
var t = h(this.state.colorList);
storage.setItem(hs.gameInfo.gameMode === hs.GameMode.Chapter ? "chapterColorLists" : "classColorLists", t);
return {
data: t,
disableTraits: hs.gameInfo.gameMode === hs.GameMode.Chapter ? [ "CTRefactorCopyAlgorithmTrait", "CTRefactorTravelCollectSingleColorTrait", "CTRefactorBaseColorAdjustTrait" ] : [ "CTRefactorSolidColorTrait", "CTRefactorIsUseInitialColorTrait", "CTRefactorBaseColorAdjustTrait" ]
};
}
}
};
t.prototype.onReviveSpecialColorPostprocessing = function() {
if (this.getIsTrigger() && this.isCanUseBlock && 0 !== this.state.colorList.length) {
var e = h(this.state.colorList);
this.isCanUseBlock = !1;
this.resetData();
return {
data: e,
disableTraits: [ "CTRefactorSolidColorAfterTrait", "CTRefactorIsUseInitialColorAfterTrait" ]
};
}
};
t.prototype.isAlgorithmStrategyLogicIsAlgorithmSendStartEvent = function(e) {
this.suppressAlgorithmSendEventWhenPreReviveOutBlocks(e);
};
t.prototype.isAlgorithmStrategyLogicIsAlgorithmSendEndEvent = function(e) {
this.suppressAlgorithmSendEventWhenPreReviveOutBlocks(e);
};
t.prototype.suppressAlgorithmSendEventWhenPreReviveOutBlocks = function(e) {
this.getIsTrigger() && this.isStartOutBlocks && (e.args[0] = !1);
};
t.prototype.isClassRevive_ProxyOnRevive_Success = function() {
this.getIsTrigger() && this.reviveSuccess();
};
t.prototype.isChapterRevive_ProxyOnRevive_Success = function() {
this.getIsTrigger() && this.reviveSuccess();
};
t.prototype.isChapterGame_Replay_ProxyOnGameReplay = function() {
this.getIsTrigger() && this.gameEndClear();
};
t.prototype.isClassGame_Replay_ProxyOnGameReplay = function() {
this.getIsTrigger() && this.gameEndClear();
};
t.prototype.isChapterGameOver_GameEnd_ProxyOnGameOver = function() {
this.getIsTrigger() && this.gameEndClear();
};
t.prototype.isClassGameOver_GameEnd_ProxyOnGameEnd = function() {
this.getIsTrigger() && this.gameEndClear();
};
t.prototype.isClassAlgorithmStrategyInfoShouldExecuteClassBlockOutStrategy = function(e) {
this.suppressBlockOutStrategyWhenPreReviveOutBlocks(e);
};
t.prototype.isChapterAlgorithmStrategyGameInfoShouldExecuteChapterBlockOutStrategy = function(e) {
this.suppressBlockOutStrategyWhenPreReviveOutBlocks(e);
};
t.prototype.suppressBlockOutStrategyWhenPreReviveOutBlocks = function(e) {
this.getIsTrigger() && this.isStartOutBlocks && (e.args[0] = !1);
};
t.prototype.isChapterGame_ProxyOnGameStart = function() {
this.resetPreReviveOutBlocksFlagsOnGameStart();
};
t.prototype.isClassGame_ProxyOnGameStart = function() {
this.resetPreReviveOutBlocksFlagsOnGameStart();
};
t.prototype.resetPreReviveOutBlocksFlagsOnGameStart = function() {
if (this.isResetStartOutBlocks()) {
this.isCanUseBlock = !1;
this.isStartOutBlocks = !1;
this.clearPreReviveBlocksReadyForReuse();
}
};
t.prototype.markPreReviveBlocksReadyForReuse = function() {
this.preReviveBlocksReadyForReuse = !0;
};
t.prototype.clearPreReviveBlocksReadyForReuse = function() {
this.preReviveBlocksReadyForReuse = !1;
};
t.prototype.getPersistedReviveBlockListsFromStorage = function() {
return hs.gameInfo.gameMode === hs.GameMode.Chapter ? hs.storage.getItem("chapterBlockLists", []).slice() : hs.storage.getItem("classBlockLists", []).slice();
};
t.prototype.applyReusePreReviveBlocksOnRequest = function(e) {
var t;
if (this.getIsTrigger()) {
var o = null === (t = e.args) || void 0 === t ? void 0 : t[0];
if (o && o.strategyState === hs.ALGO_STRATEGY_TYPE.REVIVE && !1 !== o.needAlgorithmStrategyRequest && this.preReviveBlocksReadyForReuse) if (3 === this.getPersistedReviveBlockListsFromStorage().length) {
o.needAlgorithmStrategyRequest = !1;
this.clearPreReviveBlocksReadyForReuse();
} else this.clearPreReviveBlocksReadyForReuse();
}
};
t.prototype.isResetStartOutBlocks = function(e) {
void 0 === e && (e = !1);
return e;
};
t.prototype.getIsTrigger = function() {
return !0;
};
t.prototype.gameEndClear = function() {
this.clearPreReviveBlocksReadyForReuse();
this.resetData();
this.resetAllView();
};
t.prototype.getBlockPositions = function(e, t) {
var o = hs.BlockShapeMap[e];
if (!o) return [ [], cc.v2(0, 0) ];
for (var r = [], i = o.width, s = o.height, a = o.shape, c = t.x, n = t.y, l = cc.v2(0, 0), h = 0, p = 0; p < s; p++) for (var u = a[p], d = 0; d < i; d++) if (u & 1 << i - 1 - d) {
var v = n + p, f = c + d, g = hs.OFFSETX - hs.BOARD_CONTAINER_HALF_WIDTH + hs.BLOCK_HALF_SIZE + hs.BLOCK_SIZE * f, y = hs.OFFSETY + hs.BOARD_CONTAINER_HALF_HEIGHT - hs.BLOCK_HALF_SIZE - hs.BLOCK_SIZE * v;
h++;
l.addSelf(cc.v2(g, y));
r.push({
realPos: cc.v2(g, y),
row: v,
col: f
});
}
return [ r, l.divide(h) ];
};
t.prototype.reviveSuccess = function() {
return c(this, void 0, void 0, function() {
return n(this, function() {
this.resetAllView();
return [ 2 ];
});
});
};
t.prototype.resetAllView = function() {
for (var e = 0; e < this.blockNodeList.length; e++) {
var t = this.blockNodeList[e];
if (cc.isValid(t)) {
t.removeFromParent();
this.blockPool.put(t);
}
}
for (e = 0; e < this.effectNodeList.length; e++) {
var o = this.effectNodeList[e];
if (cc.isValid(o)) {
o.removeFromParent();
this.preEliPool.put(o);
}
}
for (e = 0; e < this.putNodeList.length; e++) {
var r = this.putNodeList[e];
if (cc.isValid(r)) {
r.removeFromParent();
this.blockPool.put(r);
}
}
this.blockNodeList.splice(0, this.blockNodeList.length);
this.effectNodeList.splice(0, this.effectNodeList.length);
this.putNodeList.splice(0, this.putNodeList.length);
if (cc.isValid(this.blocksNode)) {
this.blocksNode.stopAllActions();
this.blocksNode.destroy();
this.blocksNode = null;
}
};
t.prototype.reviveShow = function() {
var e;
return c(this, void 0, void 0, function() {
var t, o, r, s, a, c, l, h, p, u, d, v;
return n(this, function(n) {
switch (n.label) {
case 0:
return [ 4, CinstAsync(hs.Board) ];

case 1:
t = n.sent();
o = t.blockOverPreEliminate;
r = o.getChildByName("reviveSpecialNode");
s = t.blocks;
if (cc.isValid(r) && null != this.state.clearInfo) {
a = this.state.clearInfo.blockId;
c = this.state.clearInfo.pos;
l = null !== (e = this.state.colorList[1]) && void 0 !== e ? e : 1;
h = this.state.clearInfo, p = h.row, u = h.col;
d = {
blocksNode: s,
color: l,
list: p,
blockId: a,
pos: c,
dir: i.rowType
};
v = {
blocksNode: s,
color: l,
list: u,
blockId: a,
pos: c,
dir: i.colType
};
this.updateModel();
this.createRemoveNodes(r, d);
this.createRemoveNodes(r, v);
this.addPreEffectBlockNode(r, v);
this.addPreEffectBlockNode(r, d);
this.blocksNode = this.addPreBlocksNode(r, d);
}
return [ 2 ];
}
});
});
};
t.prototype.updateModel = function() {
return c(this, void 0, void 0, function() {
var e;
return n(this, function(t) {
switch (t.label) {
case 0:
return [ 4, CinstAsync(hs.Modal) ];

case 1:
e = t.sent();
cc.isValid(e) && cc.isValid(e.node, !0) && e.setState({
bgOpacity: 130
});
return [ 2 ];
}
});
});
};
t.prototype.addPreBlocksNode = function(e, t) {
if (cc.isValid(e, !0) && cc.isValid(t.blocksNode, !0)) {
var o = l(this.getBlockPositions(t.blockId, t.pos), 2), r = o[0], i = o[1], s = new cc.Node("specialPreBlocksNode");
e.addChild(s, 3);
var a = t.blocksNode, c = a.convertToWorldSpaceAR(i), n = e.convertToNodeSpaceAR(c);
s.setPosition(n);
for (var h = 0; h < r.length; h++) {
var p = r[h], u = this.blockSpecialNode;
if (cc.isValid(u)) {
var d = a.convertToWorldSpaceAR(p.realPos), v = s.convertToNodeSpaceAR(d);
u.setPosition(v);
s.addChild(u);
u.getComponent(hs.Block).setState({
color: t.color
});
this.putNodeList.push(u);
}
}
this.addPreBlocksNodeFinish(s);
cc.tween(s).repeatForever(cc.tween().to(.3, {
scale: 1.12
}).to(.3, {
scale: 1
})).start();
return s;
}
};
t.prototype.addPreBlocksNodeFinish = function() {};
t.prototype.addPreEffectBlockNode = function(e, t) {
if (cc.isValid(e, !0) && cc.isValid(t.blocksNode, !0)) for (var o = t.blocksNode, r = o.convertToWorldSpaceAR(cc.v2(0, 0)), s = e.convertToNodeSpaceAR(r), a = t.list, c = t.dir === i.rowType, n = 0; n < a.length; n++) {
var l = a[n], h = hs.OFFSETX - hs.BOARD_CONTAINER_HALF_WIDTH + hs.BLOCK_HALF_SIZE + hs.BLOCK_SIZE * l, p = hs.OFFSETY + hs.BOARD_CONTAINER_HALF_HEIGHT - hs.BLOCK_HALF_SIZE - hs.BLOCK_SIZE * l, u = o.convertToWorldSpaceAR(cc.v2(h, p)), d = e.convertToNodeSpaceAR(u), v = this.preEliPool.get();
if (cc.isValid(v)) {
this.addPreEliminateEffect(e, {
idx: 0,
pos: c ? cc.v2(s.x, d.y) : cc.v2(d.x, s.y),
angle: c ? 0 : 90,
aniName: "in_" + t.color + "_2"
});
this.addPreEliminateEffect(e, {
idx: 2,
pos: c ? cc.v2(s.x, d.y) : cc.v2(d.x, s.y),
angle: c ? 0 : 90,
aniName: "in_" + t.color + "_1"
});
}
}
};
t.prototype.createRemoveNodes = function(e, t) {
if (cc.isValid(e, !0) && cc.isValid(t.blocksNode, !0)) for (var o = t.list, r = t.blocksNode, s = hs.boardInfo.faceBlocks, a = 0; a < t.list.length; a++) for (var c = t.dir, n = c === i.colType ? hs.ROW : hs.COL, l = 0; l < n; l++) {
var h = c === i.colType ? o[a] : l, p = c === i.rowType ? o[a] : l, u = hs.OFFSETX - hs.BOARD_CONTAINER_HALF_WIDTH + hs.BLOCK_HALF_SIZE + hs.BLOCK_SIZE * h, d = hs.OFFSETY + hs.BOARD_CONTAINER_HALF_HEIGHT - hs.BLOCK_HALF_SIZE - hs.BLOCK_SIZE * p, v = r.convertToWorldSpaceAR(cc.v2(u, d)), f = e.convertToNodeSpaceAR(v), g = this.blockSpecialNode;
if (cc.isValid(g)) {
g.setPosition(f);
e.addChild(g, 1);
g.getComponent(hs.Block).setState({
color: s[p][h] < 100 ? t.color : s[p][h]
});
g.active = !0;
this.blockNodeList.push(g);
}
}
};
t.prototype.requestOutBlocks = function() {
return c(this, void 0, void 0, function() {
var e, t;
return n(this, function(o) {
switch (o.label) {
case 0:
o.trys.push([ 0, 2, , 3 ]);
this.resetAllView();
this.state.clearInfo = null;
this.isStartOutBlocks = !0;
this.isCanUseBlock = !1;
return [ 4, hs.EventManager.dispatchModuleEventAsync(new hs.E_AlgorithmStrategy_Run({
type: hs.ALGO_STRATEGY_TYPE.REVIVE
})) ];

case 1:
o.sent();
this.isStartOutBlocks = !1;
e = hs.algorithmInfo.blockIdList;
t = hs.algorithmInfo.blockPosList;
this.checkCanClearAndPut(e, t);
return [ 3, 3 ];

case 2:
o.sent();
this.isStartOutBlocks = !1;
return [ 3, 3 ];

case 3:
return [ 2 ];
}
});
});
};
t.prototype.checkCanClearAndPut = function(e, t) {
if (3 == e.length && 3 == t.length) {
var o = e[1], r = cc.v2(t[1].col, t[1].row);
this.isCanUseBlock = !1;
var i = this.getRemoveColAndRow(r, o);
if (i && (i[0].length > 0 || i[1].length > 0)) {
this.isCanUseBlock = !0;
this.state.clearInfo = {
row: i[0],
col: i[1],
blockId: o,
pos: r
};
this.state.blockList = e;
this.updateReviveData();
this.markPreReviveBlocksReadyForReuse();
this.reviveShow();
return;
}
}
this.clearPreReviveBlocksReadyForReuse();
this.resetData();
};
t.prototype.updateReviveData = function() {
var e = null;
hs.gameInfo.gameMode != hs.GameMode.Chapter ? e = storage.getItem("classColorLists", [ 1, 4, 2 ]) : hs.gameInfo.gameMode == hs.GameMode.Chapter && (e = storage.getItem("chapterColorLists", []));
this.state.colorList = JSON.parse(JSON.stringify(e));
};
t.prototype.resetData = function() {
this.state.clearInfo = null;
this.state.blockList = [];
this.state.colorList = [];
};
t.prototype.addSpecialShowNode = function() {
return c(this, void 0, void 0, function() {
var e, t, o, r, i, s;
return n(this, function(a) {
switch (a.label) {
case 0:
return [ 4, CinstAsync(hs.Board) ];

case 1:
e = a.sent();
t = e.blockOverPreEliminate;
o = e.blocks;
if (cc.isValid(t) && cc.isValid(o)) {
r = new cc.Node("reviveSpecialNode");
t.addChild(r);
i = o.convertToWorldSpaceAR(cc.v2(0, 0));
s = t.convertToNodeSpaceAR(i);
r.setPosition(s);
}
return [ 2 ];
}
});
});
};
t.prototype.initUI = function() {
return c(this, void 0, void 0, function() {
var e = this;
return n(this, function() {
this.preEliPool || (this.preEliPool = new hs.PrefabPool(hs.TraitsPrefabConfig.preEliminatePrefab, 3));
this.blockPool || hs.ResLoader.load(hs.PrefabConfig.Block.url, cc.Prefab, function(t, o) {
if (t) ; else {
e.blockPool = new cc.NodePool();
e.blockPrefab = o;
if (cc.isValid(o)) for (var r = 0; r < 16; r++) e.blockPool.put(cc.instantiate(o));
}
});
this.state.clearInfo = null;
return [ 2 ];
});
});
};
Object.defineProperty(t.prototype, "blockSpecialNode", {
get: function() {
if (this.blockPool) {
0 == this.blockPool.size() && cc.isValid(this.blockPrefab) && this.blockPool.put(cc.instantiate(this.blockPrefab));
if (this.blockPool.size() > 0) return this.blockPool.get();
}
return null;
},
enumerable: !1,
configurable: !0
});
t.prototype.getRemoveColAndRow = function(e, t) {
return hs.binarySupport.canClearRowCols(hs.boardInfo.faceBlocks, t, e);
};
t.prototype.addPreEliminateEffect = function(e, t) {
var o;
if (cc.isValid(e, !0)) {
var r = this.preEliPool.get(), i = t.pos, s = t.angle, a = t.aniName;
e.addChild(r, t.idx, "specilEliNode");
r.setPosition(i);
r.angle = s;
var c = r.getComponent("PreEliminateComponent");
null === (o = null == c ? void 0 : c.setState) || void 0 === o || o.call(c, {
aniName: a,
playTimes: 0
});
this.effectNodeList.push(r);
}
};
t.prototype.claimReviveSpecialClass = function() {
hs.algorithmStrategyLevelRefactoredInfo.setAlgorithmSourceLevel1(hs.ClassAlgorithmSourceType.AlgoReviveTrait);
};
t.prototype.claimReviveSpecialChapter = function() {
hs.algorithmStrategyLevelRefactoredInfo.setAlgorithmSourceLevel1(hs.ChapterAlgorithmSourceType.TravelReviveTrait);
};
t.prototype.onPreprocessConditionContext = function() {
var e = this;
return buildLazyConditionContext({
isReviveSpecialActive: function() {
return ASContext(e.getIsTrigger() && (e.isStartOutBlocks || e.isCanUseBlock), "复活特殊表现：预出题阶段替换为 REVIVE_CLEAR");
}
});
};
t.prototype.onPreprocessConditions = function() {
return {
mutex: {
AlgoReviveTrait: [ {
conditions: {
fact: "isReviveSpecialActive",
operator: "=",
value: !0
},
event: {
type: "claimReviveSpecialClass"
},
flow: "reviveSpecialClear",
gameMode: "class"
} ],
TravelReviveTrait: [ {
conditions: {
fact: "isReviveSpecialActive",
operator: "=",
value: !0
},
event: {
type: "claimReviveSpecialChapter"
},
flow: "reviveSpecialClear",
gameMode: "journey"
} ]
}
};
};
t.prototype.onPreprocessActions = function() {
return {
mutex: {
AlgoReviveTrait: {
reviveSpecialClear: [ {
operator: "AlgorithmStrategyAlgorithmListOperator",
type: "replaceAll",
args: [ [ hs.OFFER_TYPE.REVIVE_CLEAR ] ]
}, {
operator: "AlgorithmStrategyReturnOperator",
type: "returnState"
} ]
},
TravelReviveTrait: {
reviveSpecialClear: [ {
operator: "AlgorithmStrategyAlgorithmListOperator",
type: "replaceAll",
args: [ [ hs.OFFER_TYPE.REVIVE_CLEAR ] ]
}, {
operator: "AlgorithmStrategyReturnOperator",
type: "returnState"
} ]
}
}
};
};
return a([ classId("CTRefactorIsOpenReviveSpecialTrait"), classMethodWatch() ], t);
}(Trait);
o.CTRefactorIsOpenReviveSpecialTrait = p;
cc._RF.pop();
}, {} ]
}, {}, [ "CTRefactorIsOpenReviveSpecialTrait" ]);
//# sourceMappingURL=index.js.map
