window.__require = function t(e, r, o) {
function i(a, s) {
if (!r[a]) {
if (!e[a]) {
var u = a.split("/");
u = u[u.length - 1];
if (!e[u]) {
var l = "function" == typeof __require && __require;
if (!s && l) return l(u, !0);
if (n) return n(u, !0);
throw new Error("Cannot find module '" + a + "'");
}
a = u;
}
var c = r[a] = {
exports: {}
};
e[a][0].call(c.exports, function(t) {
return i(e[a][1][t] || t);
}, c, c.exports, t, e, r, o);
}
return r[a].exports;
}
for (var n = "function" == typeof __require && __require, a = 0; a < o.length; a++) i(o[a]);
return i;
}({
CTRefactorIsOpenRightPutTrait: [ function(t, e, r) {
"use strict";
cc._RF.push(e, "5cb3azeiUdJtJsXmRcvneQ6", "CTRefactorIsOpenRightPutTrait");
var o, i = this && this.__extends || (o = function(t, e) {
return (o = Object.setPrototypeOf || {
__proto__: []
} instanceof Array && function(t, e) {
t.__proto__ = e;
} || function(t, e) {
for (var r in e) Object.prototype.hasOwnProperty.call(e, r) && (t[r] = e[r]);
})(t, e);
}, function(t, e) {
o(t, e);
function r() {
this.constructor = t;
}
t.prototype = null === e ? Object.create(e) : (r.prototype = e.prototype, new r());
}), n = this && this.__decorate || function(t, e, r, o) {
var i, n = arguments.length, a = n < 3 ? e : null === o ? o = Object.getOwnPropertyDescriptor(e, r) : o;
if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) a = Reflect.decorate(t, e, r, o); else for (var s = t.length - 1; s >= 0; s--) (i = t[s]) && (a = (n < 3 ? i(a) : n > 3 ? i(e, r, a) : i(e, r)) || a);
return n > 3 && a && Object.defineProperty(e, r, a), a;
}, a = this && this.__values || function(t) {
var e = "function" == typeof Symbol && Symbol.iterator, r = e && t[e], o = 0;
if (r) return r.call(t);
if (t && "number" == typeof t.length) return {
next: function() {
t && o >= t.length && (t = void 0);
return {
value: t && t[o++],
done: !t
};
}
};
throw new TypeError(e ? "Object is not iterable." : "Symbol.iterator is not defined.");
};
Object.defineProperty(r, "__esModule", {
value: !0
});
r.CTRefactorIsOpenRightPutTrait = void 0;
var s = function(t) {
i(e, t);
function e() {
var e = null !== t && t.apply(this, arguments) || this;
e.putData = [];
e.isRightPut = !1;
e._rightPutEmitter = new hs.Emitter();
return e;
}
e.prototype.data = function() {
return {
lastPerfectGameMode: null,
lastPerfectGameNum: 0,
lastPerfectRound: 0
};
};
Object.defineProperty(e.prototype, "addAlgoArr", {
get: function() {
return hs.traitConfigSafePropsInfo.getSafePropValueByKey("IsOpenRightPutTrait", "addAlgoArr", this.props, []);
},
enumerable: !1,
configurable: !0
});
Object.defineProperty(e.prototype, "deleteAlgoArr", {
get: function() {
return hs.traitConfigSafePropsInfo.getSafePropValueByKey("IsOpenRightPutTrait", "deleteAlgoArr", this.props, []);
},
enumerable: !1,
configurable: !0
});
e.prototype.isGameDataClear_Disk_ProxyResetBoardEffectData = function() {
this.resetData();
};
e.prototype.isBoardEffect_ProxyOnTouchEnd = function(t) {
var e = t.args[0].state, r = e.touchBlockId, o = e.putPos;
this.checkBlock(r, this.getDstMovePos(o));
};
e.prototype.isEncourage_ProxyOnEncourageEffectsPlay = function(t) {
this.isRightPut && (t.args[2] = 1e3);
};
e.prototype.onAlgorithmStrategyPostprocessComplete = function(t) {
this.saveBlock(t);
};
e.prototype.getDefaultPutData = function() {
return [ {
id: 0,
row: 0,
col: 0,
check: 0,
isRight: 0
}, {
id: 0,
row: 0,
col: 0,
check: 0,
isRight: 0
}, {
id: 0,
row: 0,
col: 0,
check: 0,
isRight: 0
} ];
};
e.prototype.getDstMovePos = function(t) {
var e, r, o = 8, i = 8;
try {
for (var n = a(t), s = n.next(); !s.done; s = n.next()) {
var u = s.value;
u.x < o && (o = u.x);
u.y < i && (i = u.y);
}
} catch (t) {
e = {
error: t
};
} finally {
try {
s && !s.done && (r = n.return) && r.call(n);
} finally {
if (e) throw e.error;
}
}
return new cc.Vec2(i, o);
};
e.prototype.resetData = function() {
hs.boardEffectInfo.setBlockPutData("BlockPutData", this.getDefaultPutData());
};
e.prototype.saveBlock = function(t) {
var e, r, o, i, n, a, s, u, l, c, f;
this.isRightPut = !1;
if (!(hs.storage.getItem("classRoundNum", 0) < 1 && hs.gameInfo.gameMode == hs.GameMode.Class)) {
this.putData = this.getDefaultPutData();
hs.boardEffectInfo.setBlockPutData("BlockPutData", this.putData);
var h = this.getActualId();
if (this.shouldRecordPutData(h)) {
if ((!hs.checkExcludeRightPut.has(h) && !this.isInDeleteAlgoArr(h) || this.isInAddAlgoArr(h)) && (!(h == hs.OFFER_TYPE.SI_WANG && 4e3 == hs.algorithmName.algoExpectedId || this.isInDeleteAlgoArr(h)) || this.isInAddAlgoArr(h))) {
var d = null !== (r = null === (e = t.sdk) || void 0 === e ? void 0 : e.blockIds) && void 0 !== r ? r : [], p = null !== (i = null === (o = t.sdk) || void 0 === o ? void 0 : o.blockNames) && void 0 !== i ? i : [], g = null !== (a = null === (n = t.sdk) || void 0 === n ? void 0 : n.blockPoses) && void 0 !== a ? a : [];
if (3 == d.length && 3 == g.length) if (hs.isValueInEnum(h, hs.OFFER_TYPE_DIFFICULTY) || hs.isValueInEnum(h, hs.OFFER_TYPE_DIE)) {
for (var P = 0; P < 3; P++) {
this.putData[P].id = 0;
this.putData[P].row = 0;
this.putData[P].col = 0;
this.putData[P].check = 1;
this.putData[P].isRight = 0;
}
hs.boardEffectInfo.setBlockPutData("BlockPutData", this.putData);
} else if (3 == p.length) {
for (P = 0; P < 3; P++) {
var y = p[P];
if ("随机" != y && "随机无死" != y && "" != y) {
this.putData[P].id = null !== (s = d[P]) && void 0 !== s ? s : 0;
this.putData[P].row = null !== (l = null === (u = g[P]) || void 0 === u ? void 0 : u.row) && void 0 !== l ? l : 0;
this.putData[P].col = null !== (f = null === (c = g[P]) || void 0 === c ? void 0 : c.col) && void 0 !== f ? f : 0;
this.putData[P].check = 1;
this.putData[P].isRight = 0;
}
}
hs.boardEffectInfo.setBlockPutData("BlockPutData", this.putData);
}
}
} else hs.boardEffectInfo.setBlockPutData("BlockPutData", this.putData);
}
};
e.prototype.checkBlock = function(t, e) {
var r, o, i, n, s, u, l, c;
this.putData = hs.boardEffectInfo.getBlockPutData("BlockPutData");
var f = !1;
try {
for (var h = a(this.putData), d = h.next(); !d.done; d = h.next()) if (1 == (D = d.value).check) {
f = !0;
break;
}
} catch (t) {
r = {
error: t
};
} finally {
try {
d && !d.done && (o = h.return) && o.call(h);
} finally {
if (r) throw r.error;
}
}
if (0 != f) {
try {
for (var p = a(this.putData), g = p.next(); !g.done; g = p.next()) if ((D = g.value).id == t && D.row == e.y && D.col == e.x && 1 == D.check && 0 == D.isRight) {
D.isRight = 1;
break;
}
} catch (t) {
i = {
error: t
};
} finally {
try {
g && !g.done && (n = p.return) && n.call(p);
} finally {
if (i) throw i.error;
}
}
hs.boardEffectInfo.setBlockPutData("BlockPutData", this.putData);
if (3 == hs.blocksProducerInfo.producerBlocks.filter(function(t) {
return -1 === t;
}).length) {
var P = this.getActualId();
if (hs.isValueInEnum(P, hs.OFFER_TYPE_BLANK)) {
if ((hs.checkExcludeRightPut.has(P) || this.isInDeleteAlgoArr(P)) && !this.isInAddAlgoArr(P)) return;
try {
for (var y = a(this.putData), I = y.next(); !I.done; I = y.next()) if (1 == (D = I.value).check && 0 == D.isRight) return;
} catch (t) {
s = {
error: t
};
} finally {
try {
I && !I.done && (u = y.return) && u.call(y);
} finally {
if (s) throw s.error;
}
}
} else if (hs.isValueInEnum(P, hs.OFFER_TYPE_DIFFICULTY)) {
if ((hs.checkExcludeRightPut.has(P) || this.isInDeleteAlgoArr(P)) && !this.isInAddAlgoArr(P)) return;
if ((P == hs.OFFER_TYPE.SI_WANG && 4e3 == hs.algorithmName.algoExpectedId || this.isInDeleteAlgoArr(P)) && !this.isInAddAlgoArr(P)) return;
} else if (hs.isValueInEnum(P, hs.OFFER_TYPE_DIE)) ; else {
if (!this.isInAddAlgoArr(P)) return;
if (hs.isValueInEnum(P, hs.OFFER_TYPE_DIFFICULTY)) ; else try {
for (var E = a(this.putData), v = E.next(); !v.done; v = E.next()) {
var D;
if (1 == (D = v.value).check && 0 == D.isRight) return;
}
} catch (t) {
l = {
error: t
};
} finally {
try {
v && !v.done && (c = E.return) && c.call(E);
} finally {
if (l) throw l.error;
}
}
}
this.isRightPut = !0;
this.setLastPerfectRecord();
this._rightPutEmitter.fire({
isPrefect: !0
});
this.playPerfect();
}
}
};
e.prototype.playPerfect = function() {
this.playPerfectEffect();
};
e.prototype.getPerfectEffectPos = function(t, e) {
return {
posX: t,
posY: e
};
};
e.prototype.playPerfectEffect = function() {
var t = this;
cc.loader.loadRes(hs.PrefabConfig.RightPutPerfect.url, function(e, r) {
if (e) ; else {
var o = cc.instantiate(r), i = t.getPerfectEffectPos(cc.winSize.width / 2, cc.winSize.height / 2 + 100);
o.x = i.posX;
o.y = i.posY;
t.changeScaleByOtherTraits(o);
if (cc.isValid(hs.gameEffectLayer)) {
hs.gameEffectLayer.addChild(o, t.getEffect_zIndex());
o.getComponent(dragonBones.ArmatureDisplay).addEventListener(dragonBones.EventObject.COMPLETE, function() {
cc.isValid(o) && o.destroy();
}, null);
hs.audioInfo.play(hs.AudioConfig.putRightPerfect);
}
}
});
};
e.prototype.changeScaleByOtherTraits = function() {};
e.prototype.getEffect_zIndex = function() {
return 100;
};
e.prototype.isInAddAlgoArr = function(t) {
var e;
return (null !== (e = this.addAlgoArr) && void 0 !== e ? e : []).includes(t);
};
e.prototype.isInDeleteAlgoArr = function(t) {
var e;
return (null !== (e = this.deleteAlgoArr) && void 0 !== e ? e : []).includes(t);
};
e.prototype.getReportIsRightPut = function() {
return this.isRightPut;
};
e.prototype.setLastPerfectRecord = function() {
this.setState({
lastPerfectGameMode: hs.gameInfo.gameMode,
lastPerfectGameNum: hs.gameInfo.gameNum,
lastPerfectRound: hs.gameInfo.roundNum
});
};
Object.defineProperty(e.prototype, "rightPutEmitter", {
get: function() {
return this._rightPutEmitter;
},
enumerable: !1,
configurable: !0
});
e.prototype.shouldRecordPutData = function(t) {
return hs.isValueInEnum(t, hs.OFFER_TYPE_DIFFICULTY) || hs.isValueInEnum(t, hs.OFFER_TYPE_BLANK) || hs.isValueInEnum(t, hs.OFFER_TYPE_DIE) || this.isInAddAlgoArr(t);
};
e.prototype.getActualId = function() {
return this.useFinalAlgoId ? hs.algorithmName.algoActualIdByPos : hs.algorithmName.algoActualId;
};
Object.defineProperty(e.prototype, "useFinalAlgoId", {
get: function() {
var t;
return null !== (t = this.props.useFinalAlgoId) && void 0 !== t && t;
},
enumerable: !1,
configurable: !0
});
Object.defineProperty(e.prototype, "onActiveCondition", {
get: function() {
return !0;
},
enumerable: !1,
configurable: !0
});
return n([ classId("CTRefactorIsOpenRightPutTrait"), classMethodWatch() ], e);
}(Trait);
r.CTRefactorIsOpenRightPutTrait = s;
cc._RF.pop();
}, {} ]
}, {}, [ "CTRefactorIsOpenRightPutTrait" ]);
//# sourceMappingURL=index.js.map
