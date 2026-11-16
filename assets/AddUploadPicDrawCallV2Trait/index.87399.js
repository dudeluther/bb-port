window.__require = function e(t, i, a) {
function o(c, s) {
if (!i[c]) {
if (!t[c]) {
var n = c.split("/");
n = n[n.length - 1];
if (!t[n]) {
var l = "function" == typeof __require && __require;
if (!s && l) return l(n, !0);
if (r) return r(n, !0);
throw new Error("Cannot find module '" + c + "'");
}
c = n;
}
var d = i[c] = {
exports: {}
};
t[c][0].call(d.exports, function(e) {
return o(t[c][1][e] || e);
}, d, d.exports, e, t, i, a);
}
return i[c].exports;
}
for (var r = "function" == typeof __require && __require, c = 0; c < a.length; c++) o(a[c]);
return o;
}({
AddUploadPicDrawCallV2Trait: [ function(e, t, i) {
"use strict";
cc._RF.push(t, "63322KLmENFGJ1cwnTAz6Uq", "AddUploadPicDrawCallV2Trait");
var a, o = this && this.__extends || (a = function(e, t) {
return (a = Object.setPrototypeOf || {
__proto__: []
} instanceof Array && function(e, t) {
e.__proto__ = t;
} || function(e, t) {
for (var i in t) Object.prototype.hasOwnProperty.call(t, i) && (e[i] = t[i]);
})(e, t);
}, function(e, t) {
a(e, t);
function i() {
this.constructor = e;
}
e.prototype = null === t ? Object.create(t) : (i.prototype = t.prototype, new i());
}), r = this && this.__decorate || function(e, t, i, a) {
var o, r = arguments.length, c = r < 3 ? t : null === a ? a = Object.getOwnPropertyDescriptor(t, i) : a;
if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) c = Reflect.decorate(e, t, i, a); else for (var s = e.length - 1; s >= 0; s--) (o = e[s]) && (c = (r < 3 ? o(c) : r > 3 ? o(t, i, c) : o(t, i)) || c);
return r > 3 && c && Object.defineProperty(t, i, c), c;
};
Object.defineProperty(i, "__esModule", {
value: !0
});
i.AddUploadPicDrawCallV2Trait = void 0;
var c = function(e) {
o(t, e);
function t() {
var t = null !== e && e.apply(this, arguments) || this;
t.shadowLayer = null;
t.shadowKuangLayer = null;
t.filterLayer = null;
t.filterKuangLayer = null;
t.touchLayer = null;
t.touchKuangLayer = null;
t._reusableVec2 = cc.v2();
t._filterNodeCache = new WeakMap();
t._kuangNodeCache = new WeakMap();
return t;
}
t.prototype.onCreate = function() {
this.filterLayer = new cc.Node("filterLayer");
this.filterLayer.setPosition(0, 5);
this.filterLayer.anchorX = .5;
this.filterLayer.anchorY = .5;
this.filterLayer.width = 848;
this.filterLayer.height = 848;
this.filterKuangLayer = cc.instantiate(this.filterLayer);
this.filterKuangLayer.name = "kuangLayer";
this.shadowLayer = cc.instantiate(this.filterLayer);
this.shadowLayer.name = "shadowLayer";
this.shadowKuangLayer = cc.instantiate(this.shadowLayer);
this.shadowKuangLayer.name = "shadowKuangLayer";
this.touchLayer = cc.instantiate(this.filterLayer);
this.touchLayer.name = "touchLayer";
this.touchLayer.setPosition(0, 0);
this.touchLayer.width = 896;
this.touchLayer.height = 334;
this.touchKuangLayer = cc.instantiate(this.touchLayer);
this.touchKuangLayer.name = "touchKuangLayer";
};
t.prototype.onActive = function(e) {
if (hs.tp.isBoardSetBoardBg(e)) this.onBoardSetBoardBg(); else if (hs.tp.isAddUploadPicTraitGetFilterBlock(e)) this.getFilterBlock(e); else if (hs.tp.isAddUploadPicSnapTraitGetFilterBlock(e)) this.getFilterBlock(e); else if (hs.tp.isAddUploadPicTraitBindFilterBlock(e)) this.bindFilterBlock(e); else if (hs.tp.isBlocksProducerTouchOnBoardBlockPlaced(e)) this.onBoardBlockPlaced(e); else if (hs.tp.isBlocksProducer_ProxyOnTouchEnd(e)) this.onBlocksProducerTouchEnd(e); else if (hs.tp.isBlocksProducerTouchAfterTouchStart(e)) this.selectTouchStart(e); else if (hs.tp.isBlocksProducerTouchChangeSelectItemPos(e)) {
if (hs.gameInfo.gameMode != hs.GameMode.Class) return;
this.selectItemPos(e);
} else if (hs.tp.isBlocksProducerTouchChangeShaderBlock(e)) this.onTouchChangeShaderBlock(e); else if (hs.tp.isBlocksProducerRender(e)) this.onBlocksProducerRender(); else if (hs.tp.isAddUploadPicTraitShaderBlockOpacity(e)) this.onTraitShaderBlockOpacity(e); else if (hs.tp.isBlocksProduceEnhanceSnapInfoChangeShaderBlock(e)) {
if (hs.gameInfo.gameMode != hs.GameMode.Class) return;
this.changeShaderBlock(e);
} else hs.tp.isAddUploadPicTraitShowBlock(e) ? this.onTraitShowBlock(e) : hs.tp.isBlocksProducerTouchResetBlocksOriPos(e) ? this.onResetBlocksOriPos(e) : hs.tp.isAddUploadPicTraitFilterBlockActive(e) ? this.onTraitFilterBlockActive(e) : hs.tp.isAddUploadPicTraitLoadRefreshScreenName(e) ? this.onLoadRefreshScreenName(e) : hs.tp.isAddUploadPicTraitGetRefreshScreenComp(e) ? this.onGetRefreshScreenComp(e) : hs.tp.isAddUploadPicTraitGetRefreshScreenName(e) ? this.onGetRefreshScreenName(e) : hs.tp.isAddUploadPicAlphaTraitBlockAlpha(e) && this.onAlphaTraitBlockAlpha(e);
};
t.prototype.onBoardSetBoardBg = function() {
var e = Cinst(hs.Board);
if (e) {
var t = e.node.getChildByName("shadowLayer");
if (!cc.isValid(t)) {
e.node.insertChild(this.shadowLayer, e.blockShaders.getSiblingIndex() + 1);
e.node.insertChild(this.shadowKuangLayer, this.shadowLayer.getSiblingIndex() + 1);
e.node.insertChild(this.filterLayer, e.blocks.getSiblingIndex() + 1);
e.node.insertChild(this.filterKuangLayer, this.filterLayer.getSiblingIndex() + 1);
}
this.boardUpdate();
}
};
t.prototype.onBoardBlockPlaced = function(e) {
if (hs.gameInfo.gameMode == hs.GameMode.Class) {
var t = e.args[0];
this.filterOpacity(t, 255);
}
};
t.prototype.onBlocksProducerTouchEnd = function(e) {
if (hs.gameInfo.gameMode == hs.GameMode.Class) for (var t = e.args[0].state.eliminates, i = Object.keys(t).map(Number).sort(function(e, t) {
return e - t;
}), a = 0, o = i.length; a < o; a++) {
var r = t[i[a]];
if (r) for (var c = Object.keys(r).map(Number).sort(function(e, t) {
return e - t;
}), s = 0, n = c.length; s < n; s++) {
var l = r[c[s]];
this.filterOpacity(l, 0);
}
}
};
t.prototype.onTouchChangeShaderBlock = function(e) {
if (hs.gameInfo.gameMode == hs.GameMode.Class) {
var t = e.args[0], i = e.args[3], a = t.node;
if (cc.isValid(a)) {
var o = a.AddUploadPicBlock;
if (cc.isValid(o)) {
o.opacity = this.shaderBlockOpacity(i);
var r = o.kuang;
cc.isValid(r) && (r.opacity = o.opacity);
}
}
}
};
t.prototype.onBlocksProducerRender = function() {
var e = Cinst(hs.BlocksProducer);
if (cc.isValid(e)) {
var t = e.node.getChildByName("touchLayer");
if (!cc.isValid(t)) {
e.node.insertChild(this.touchLayer, e.node.getChildByName("blocksContainer").getSiblingIndex() + 1);
e.node.insertChild(this.touchKuangLayer, this.touchLayer.getSiblingIndex() + 1);
}
}
};
t.prototype.onTraitShaderBlockOpacity = function(e) {
if (hs.gameInfo.gameMode == hs.GameMode.Class) {
var t = e.args[0], i = e.args[1];
if (cc.isValid(t)) {
var a = t.AddUploadPicBlock;
if (cc.isValid(a)) {
a.opacity = t.opacity;
var o = a.kuang;
if (cc.isValid(o)) {
o.opacity = a.opacity;
o.color = cc.Color.fromHEX(new cc.Color(), i);
}
}
}
}
};
t.prototype.onTraitShowBlock = function(e) {
var t = e.args[0], i = e.args[1], a = t.kuang;
cc.isValid(a) && (a.active = i);
};
t.prototype.onResetBlocksOriPos = function(e) {
var t = e.args[0];
if (cc.isValid(t)) for (var i = t.children, a = i.length, o = 0; o < a; o++) {
var r = i[o];
if (cc.isValid(r)) {
var c = r.AddUploadPicBlock;
if (cc.isValid(c)) {
c.active = !1;
var s = c.kuang;
cc.isValid(s) && (s.active = !1);
}
}
}
};
t.prototype.onTraitFilterBlockActive = function(e) {
for (var t = e.args[0], i = this.shadowKuangLayer.children, a = i.length, o = 0; o < a; o++) {
var r = i[o];
cc.isValid(r) && (r.active = t);
}
};
t.prototype.onLoadRefreshScreenName = function(e) {
e.returnValue = "prefabs/AddUploadPicRefreshScreenDc";
};
t.prototype.onGetRefreshScreenComp = function(e) {
var t = e.args[0];
e.returnValue = t.getComponent("AddUploadPicRefreshScreenDc");
};
t.prototype.onGetRefreshScreenName = function(e) {
e.returnValue = "AddUploadPicRefreshScreenDc";
};
t.prototype.onAlphaTraitBlockAlpha = function(e) {
e.replace = !0;
e.returnState = !0;
var t = e.args[0], i = e.args[1];
cc.isValid(t) && 0 != t.opacity && this.filterOpacity(t, i);
};
t.prototype.selectTouchStart = function(e) {
if (hs.gameInfo.gameMode == hs.GameMode.Class) {
var t = e.target._selectItem;
if (cc.isValid(t)) for (var i = t.children, a = i.length, o = 0; o < a; o++) {
var r = i[o];
if (cc.isValid(r) && r.opacity > 0) {
var c = r.AddUploadPicBlock;
if (cc.isValid(c)) {
c.opacity = 255;
this._reusableVec2.x = 0;
this._reusableVec2.y = 0;
var s = r.convertToWorldSpaceAR(this._reusableVec2), n = this.touchLayer.convertToNodeSpaceAR(s);
c.setPosition(n);
var l = c.kuang;
cc.isValid(l) && l.setPosition(n);
}
}
}
}
};
t.prototype.bindFilterBlock = function(e) {
var t = e.args[0], i = e.args[1], a = e.args[2];
if ("" != a && cc.isValid(t) && cc.isValid(i)) {
e.replace = !0;
if ("AddUploadPicBlock" == a) {
i.parent = this.filterLayer;
i.opacity = t.opacity;
this._reusableVec2.x = 0;
this._reusableVec2.y = 0;
var o = t.convertToWorldSpaceAR(this._reusableVec2), r = t.parent.convertToNodeSpaceAR(o);
i.setPosition(r);
(c = i.getChildByName("kuang")).parent = this.filterKuangLayer;
c.setPosition(r);
c.opacity = t.opacity;
i.kuang = c;
} else if ("AddUploadPicShadow" == a) {
i.parent = this.shadowLayer;
i.opacity = 0;
this._reusableVec2.x = 0;
this._reusableVec2.y = 0;
o = t.convertToWorldSpaceAR(this._reusableVec2), r = t.parent.convertToNodeSpaceAR(o);
i.setPosition(r);
(c = i.getChildByName("kuang")).parent = this.shadowKuangLayer;
c.setPosition(r);
c.opacity = t.opacity;
i.kuang = c;
} else if ("AddUploadPicBlockTouch" == a) {
if (cc.isValid(this.touchLayer)) {
i.parent = this.touchLayer;
this._reusableVec2.x = 0;
this._reusableVec2.y = 0;
var c;
o = t.convertToWorldSpaceAR(this._reusableVec2), r = this.touchLayer.convertToNodeSpaceAR(o);
i.setPosition(r);
(c = i.getChildByName("kuang")).parent = this.touchKuangLayer;
c.setPosition(r);
i.kuang = c;
}
i.opacity = 0;
}
t.AddUploadPicBlock = i;
i.block = t;
}
};
t.prototype.selectItemPos = function(e) {
var t = e.args[0];
if (cc.isValid(t)) {
this._reusableVec2.x = 0;
this._reusableVec2.y = 0;
for (var i = t.convertToWorldSpaceAR(this._reusableVec2), a = this.touchLayer.convertToNodeSpaceAR(i), o = this.currAlpha(255), r = t.children, c = r.length, s = this._filterNodeCache, n = this._kuangNodeCache, l = a.x, d = a.y, h = 0; h < c; h++) {
var p = r[h];
if (0 !== p.opacity) {
var u = s.get(p);
if (!cc.isValid(u)) {
u = p.AddUploadPicBlock;
if (!cc.isValid(u)) continue;
s.set(p, u);
}
var f = l + p.x, y = d + p.y;
u.opacity = o;
u.setPosition(f, y);
var g = n.get(u);
if (!cc.isValid(g)) {
g = u.kuang;
if (!cc.isValid(g)) continue;
n.set(u, g);
}
g.setPosition(f, y);
}
}
this.afterSelectItemPos(t);
}
};
t.prototype.afterSelectItemPos = function() {};
t.prototype.currAlpha = function(e) {
return e;
};
t.prototype.changeShaderBlock = function(e) {
var t = e.args[0];
if (cc.isValid(t)) {
var i = t.AddUploadPicBlock;
if (cc.isValid(i)) {
var a = t.opacity;
i.opacity = this.shaderBlockOpacity(a);
var o = i.kuang;
cc.isValid(o) && (o.opacity = i.opacity);
}
}
};
t.prototype.shaderBlockOpacity = function(e) {
if (0 == e) return e;
var t = TRAIT("AddUploadPicTrait");
return (null == t ? void 0 : t.active) && 1 != t.getShadow() ? 255 : 100;
};
t.prototype.getFilterBlock = function(e) {
var t = e.args[0];
if (t) {
var i = t.AddUploadPicBlock;
if (cc.isValid(i)) {
e.replace = !0;
e.returnValue = i;
}
}
};
t.prototype.filterOpacity = function(e, t) {
if (cc.isValid(e)) {
var i = e.AddUploadPicBlock;
if (cc.isValid(i)) {
i.opacity = t;
var a = i.kuang;
cc.isValid(a) && (a.opacity = t);
}
}
};
t.prototype.boardUpdate = function() {
for (var e = hs.boardRendererInfo.blocks, t = 0, i = hs.ROW; t < i; t++) {
var a = e[t];
if (a) for (var o = 0, r = hs.COL; o < r; o++) {
var c = a[o];
if (cc.isValid(c)) {
var s = c.AddUploadPicBlock;
if (cc.isValid(s)) {
s.opacity = c.opacity;
var n = s.kuang;
cc.isValid(n) && (n.opacity = c.opacity);
}
}
}
}
this.boardOpacity();
};
t.prototype.boardOpacity = function() {};
return r([ classId("AddUploadPicDrawCallV2Trait"), classMethodWatch() ], t);
}(Trait);
i.AddUploadPicDrawCallV2Trait = c;
cc._RF.pop();
}, {} ]
}, {}, [ "AddUploadPicDrawCallV2Trait" ]);
//# sourceMappingURL=index.js.map
