window.__require = function e(t, o, r) {
function n(c, l) {
if (!o[c]) {
if (!t[c]) {
var a = c.split("/");
a = a[a.length - 1];
if (!t[a]) {
var u = "function" == typeof __require && __require;
if (!l && u) return u(a, !0);
if (i) return i(a, !0);
throw new Error("Cannot find module '" + c + "'");
}
c = a;
}
var s = o[c] = {
exports: {}
};
t[c][0].call(s.exports, function(e) {
return n(t[c][1][e] || e);
}, s, s.exports, e, t, o, r);
}
return o[c].exports;
}
for (var i = "function" == typeof __require && __require, c = 0; c < r.length; c++) n(r[c]);
return n;
}({
CTRefactorIsTravelMoreDiamondAwardTrait: [ function(e, t, o) {
"use strict";
cc._RF.push(t, "7280ewps6tGeY3nxAZlSGGj", "CTRefactorIsTravelMoreDiamondAwardTrait");
var r, n = this && this.__extends || (r = function(e, t) {
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
}), i = this && this.__decorate || function(e, t, o, r) {
var n, i = arguments.length, c = i < 3 ? t : null === r ? r = Object.getOwnPropertyDescriptor(t, o) : r;
if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) c = Reflect.decorate(e, t, o, r); else for (var l = e.length - 1; l >= 0; l--) (n = e[l]) && (c = (i < 3 ? n(c) : i > 3 ? n(t, o, c) : n(t, o)) || c);
return i > 3 && c && Object.defineProperty(t, o, c), c;
};
Object.defineProperty(o, "__esModule", {
value: !0
});
o.CTRefactorIsTravelMoreDiamondAwardTrait = void 0;
var c = function(e) {
n(t, e);
function t() {
var t = null !== e && e.apply(this, arguments) || this;
t.lastComboCount = 0;
return t;
}
t.prototype.onCreate = function() {
var e = this;
Trait.dynamicDisableTraitsByName([ "CTRefactorIsIncreaseEnjoyCollectionTrait" ]);
this.isFix1_2_14 ? this.checkItemIsValid = function(t) {
return !(e.getNodeVisibleOpacity(t) <= 0 || t.childrenCount <= 0 || !t.children.some(function(t) {
return e.getNodeVisibleOpacity(t) > 0;
}));
} : this.checkItemIsValid = function(e) {
return e.opacity > 0;
};
};
t.prototype.isChapterCollectionProducer_ProxyOnReviveSuccess = function() {
this.checkDisableTraitKey() || hs.chapterCollectionProducerITMDAInfo.set("numAddCollectBrick", 3);
};
t.prototype.handleChapterCollectionProducer_ProxyOnGameEnd = function() {
this.checkDisableTraitKey() || hs.chapterCollectionProducerITMDAInfo.set("numAddCollectBrick", 0);
};
t.prototype.isChapterCollectionProducer_ProxyOnGameEnd = function(e) {
this.handleChapterCollectionProducer_ProxyOnGameEnd(e);
};
t.prototype.isChapterCollectionProducer_ProxyOnGameReplay = function(e) {
this.handleChapterCollectionProducer_ProxyOnGameEnd(e);
};
t.prototype.isChapterCollectionProducer_ProxyOnBlockProducerTouchEndExecuted = function(e) {
this.checkDisableTraitKey() || this.resolveAfterRemoveBlocks(e.args[0].state);
};
t.prototype.isChapterDefaultBoard_ProxyCreateChapterCondition = function(e) {
if (!this.checkDisableTraitKey()) {
var t = this.collectionMultiple, o = hs.chapterCollectionProducerITMDAInfo.setTravelTargetCondition(e.args[0], t);
if (o) {
e.replace = !0;
e.returnValue = o;
e.returnState = !0;
}
}
};
t.prototype.isChapterConfigInfoGetChapterOriginConfig = function(e) {
var t;
if (!this.checkDisableTraitKey()) {
var o = hs.chapterCollectionProducerITMDAInfo.getOriginChapterConfig(Number(null !== (t = e.args[0]) && void 0 !== t ? t : hs.chapterGameInfo.chapterNum));
if (o) {
e.replace = !0;
e.returnValue = o;
e.returnState = !0;
}
}
};
t.prototype.onAlgorithmStrategyCollectionAdjust = function() {
if (!this.checkDisableTraitKey()) return this.produceItemForAllBlocks(hs.chapterAlgorithmInfo.blockIdList);
};
Object.defineProperty(t.prototype, "isFix1_2_14", {
get: function() {
var e;
return "1_2_14" == (null === (e = this.props) || void 0 === e ? void 0 : e.fixVersion);
},
enumerable: !1,
configurable: !0
});
t.prototype.resolveAfterRemoveBlocks = function(e) {
if (hs.chapterCollectionProducerITMDAInfo.isCollectWay(hs.chapterGameInfo.chapterNum) && !(this.isFix1_2_14 ? e.eliminateCount < 0 : e.eliminateCount <= 0)) {
var t, o;
if (this.isFix1_2_14) {
t = e.continuousEliminateTimes;
o = 1;
} else {
o = 0;
t = hs.chapterDataStatisticsInfo.dataStatisticsInfo.comboTouchNum;
}
var r = hs.chapterCollectionProducerITMDAInfo.clone();
r.numAddCollectBrick = 0;
r.numAddNextRound = 0;
this.lastComboCount != t && t > o && r.numAddCollectBrick++;
this.lastComboCount = t;
if (2 === e.eliminateCount) r.numAddCollectBrick++; else if (3 === e.eliminateCount) {
r.numAddCollectBrick++;
r.numAddNextRound = 1;
} else if (e.eliminateCount > 3) {
r.numAddCollectBrick = 3;
r.numAddNextRound = 3;
}
if (0 !== r.numAddCollectBrick) {
var n = !1, i = 0;
if (e.producerBlocks) for (var c = 0; c < e.producerBlocks.length && !(r.numAddCollectBrick <= 0); c++) if (c !== e.touchIndex && (!this.isFix1_2_14 || -1 != e.producerBlocks[c])) {
var l = this.getProduceItem(c);
if (cc.isValid(null == l ? void 0 : l.node) && !(l.node.childrenCount <= 0)) {
i++;
if (!n) {
hs.chapterCollectionProducerITMDAInfo.updateCollectInfos();
n = !0;
}
var a = e.producerBlocks[c];
if (!hs.chapterCollectionProducerITMDAInfo.isBlockAllCollect(a, c) && hs.chapterCollectionProducerITMDAInfo.changeOneBlockInfo(a, c)) {
this.changeOneBlockColor(l, c);
r.numAddCollectBrick--;
r.numAddNextRound = 0;
}
}
}
if (i > 0) {
r.numAddCollectBrick = r.numAddNextRound;
r.numAddNextRound = 0;
}
hs.chapterCollectionProducerITMDAInfo.update(r);
}
}
};
t.prototype.produceItemForAllBlocks = function(e) {
if (!(hs.chapterCollectionProducerITMDAInfo.clone().numAddCollectBrick <= 0)) if (!e || e.length < 3) ; else {
hs.chapterCollectionProducerITMDAInfo.updateCollectInfos();
var t = hs.chapterCollectionProducerITMDAInfo.clone();
if (1 == t.numAddCollectBrick) {
var o = Math.floor(Math.random() * e.length);
hs.chapterCollectionProducerITMDAInfo.changeOneBlockInfo(e[o], o);
} else for (var r = 0; r < e.length && !(t.numAddCollectBrick <= 0); r++) {
hs.chapterCollectionProducerITMDAInfo.changeOneBlockInfo(e[r], r);
t.numAddCollectBrick--;
}
t.numAddCollectBrick = 0;
hs.chapterCollectionProducerITMDAInfo.update(t);
var n = storage.getItem("chapterCollectionLists", []);
if (Array.isArray(n) && 0 !== n.length) return {
data: n
};
}
};
t.prototype.getProduceItem = function(e) {
var t, o = null === (t = Cinst(hs.BlocksProducer)) || void 0 === t ? void 0 : t.blocksContainer;
if (!cc.isValid(o)) return null;
for (var r = 0; r < o.children.length; r++) {
var n = o.children[r].getComponent(hs.BlocksProducerItem);
if (n.state.index == e && this.checkItemIsValid(n.node)) return n;
}
return null;
};
t.prototype.changeOneBlockColor = function(e, t) {
var o, r;
if (cc.isValid(e)) {
var n = null === (r = null === (o = hs.chapterCollectionProducerGameInfo) || void 0 === o ? void 0 : o.collectionList) || void 0 === r ? void 0 : r[t];
if (n) {
var i = {};
Object.keys(n).forEach(function(e) {
var t = n[Number(e)];
t && (i[t.pos] = t.Key);
});
var c = Object.assign({}, e.state);
c.itemColors = i;
e.setState(c);
var l = TRAIT("ChangeBlockSizeByProducerTrait");
(null == l ? void 0 : l.active) && l.changeOneBlockInfo(t, e, i[0], e.state.id);
}
}
};
t.prototype.getNodeVisibleOpacity = function(e) {
if (!cc.isValid(e) || !e.activeInHierarchy) return 0;
for (var t = e, o = [], r = cc.director.getScene(); t !== r; ) {
o.push(t.opacity);
if (t.opacity <= 0) return 0;
t = t.parent;
}
return o.reduce(function(e, t) {
return e * t / 255;
}, 255);
};
t.prototype.checkDisableTraitKey = function() {
var e, t = this.disableTraitKey;
if (!t || 0 === t.trim().length || "none" == t) return !1;
try {
var o = t.charAt(0).toUpperCase() + t.slice(1) + "Trait", r = TRAIT(o);
return null !== (e = null == r ? void 0 : r.active) && void 0 !== e && e;
} catch (e) {
return !1;
}
};
Object.defineProperty(t.prototype, "collectionMultiple", {
get: function() {
return hs.traitConfigSafePropsInfo.getSafePropValueByKey("IsTravelMoreDiamondAwardTrait", "collectionMultiple", this.props, 2) || 2;
},
enumerable: !1,
configurable: !0
});
Object.defineProperty(t.prototype, "disableTraitKey", {
get: function() {
return hs.traitConfigSafePropsInfo.getSafePropValueByKey("IsTravelMoreDiamondAwardTrait", "disableTraitKey", this.props, "none");
},
enumerable: !1,
configurable: !0
});
return i([ classId("CTRefactorIsTravelMoreDiamondAwardTrait"), classMethodWatch() ], t);
}(Trait);
o.CTRefactorIsTravelMoreDiamondAwardTrait = c;
cc._RF.pop();
}, {} ]
}, {}, [ "CTRefactorIsTravelMoreDiamondAwardTrait" ]);
//# sourceMappingURL=index.js.map
