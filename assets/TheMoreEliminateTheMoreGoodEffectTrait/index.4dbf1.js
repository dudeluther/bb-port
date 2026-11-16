window.__require = function e(t, o, r) {
function n(a, c) {
if (!o[a]) {
if (!t[a]) {
var l = a.split("/");
l = l[l.length - 1];
if (!t[l]) {
var s = "function" == typeof __require && __require;
if (!c && s) return s(l, !0);
if (i) return i(l, !0);
throw new Error("Cannot find module '" + a + "'");
}
a = l;
}
var f = o[a] = {
exports: {}
};
t[a][0].call(f.exports, function(e) {
return n(t[a][1][e] || e);
}, f, f.exports, e, t, o, r);
}
return o[a].exports;
}
for (var i = "function" == typeof __require && __require, a = 0; a < r.length; a++) n(r[a]);
return n;
}({
ChapterNodeTheMoreEliminateTheMoreGoodEffectCom: [ function(e, t, o) {
"use strict";
cc._RF.push(t, "6ae49AcoCNIXprE7ysQFU+t", "ChapterNodeTheMoreEliminateTheMoreGoodEffectCom");
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
var n, i = arguments.length, a = i < 3 ? t : null === r ? r = Object.getOwnPropertyDescriptor(t, o) : r;
if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) a = Reflect.decorate(e, t, o, r); else for (var c = e.length - 1; c >= 0; c--) (n = e[c]) && (a = (i < 3 ? n(a) : i > 3 ? n(t, o, a) : n(t, o)) || a);
return i > 3 && a && Object.defineProperty(t, o, a), a;
};
Object.defineProperty(o, "__esModule", {
value: !0
});
o.ChapterNodeTheMoreEliminateTheMoreGoodEffectCom = void 0;
var a = cc._decorator, c = a.ccclass, l = a.property, s = function(e) {
n(t, e);
function t() {
var t = null !== e && e.apply(this, arguments) || this;
t.spParticle = null;
t.spCollect = null;
return t;
}
t.prototype.onLoad = function() {
this.spParticle.setCompleteListener(this.onAnimationComplete.bind(this));
};
t.prototype.render = function() {
var e, t;
if (0 === this.state.phase) {
this.spCollect.node.active = !0;
this.spParticle.node.active = !1;
var o = this.getAnimPrefixByColorId() + "_" + this.state.level;
this.spCollect.timeScale = 1 / (null !== (e = cc.director._kSpeed) && void 0 !== e ? e : 1);
this.spCollect.setAnimation(0, o, !1);
this.changeUI(this, this.state.colorId);
} else {
this.spCollect.node.active = !1;
this.spParticle.node.active = !0;
var r = "in_" + this.state.level;
3 === this.state.level && (r = r + "_" + this.getAnimPrefixByColorId());
this.spParticle.timeScale = 1 / (null !== (t = cc.director._kSpeed) && void 0 !== t ? t : 1);
this.spParticle.setAnimation(0, r, !1);
this.changeUIEnd(this, this.state.colorId);
}
};
t.prototype.getAnimPrefixByColorId = function() {
switch (this.state.colorId) {
case hs.CollectionType.Gems101:
return "blue";

case hs.CollectionType.Gems102:
return "green";

case hs.CollectionType.Gems103:
return "orange";

case hs.CollectionType.Gems104:
return "yellow";

case hs.CollectionType.Gems105:
return "red";

case hs.CollectionType.Gems106:
return "purple";
}
};
t.prototype.onAnimationComplete = function() {
this.state.callback && this.state.callback();
};
t.prototype.changeUI = function() {};
t.prototype.changeUIEnd = function() {};
i([ l(sp.Skeleton) ], t.prototype, "spParticle", void 0);
i([ l(sp.Skeleton) ], t.prototype, "spCollect", void 0);
return i([ classId("ChapterNodeTheMoreEliminateTheMoreGoodEffectCom"), c, classMethodWatch() ], t);
}(hs.Component);
o.ChapterNodeTheMoreEliminateTheMoreGoodEffectCom = s;
cc._RF.pop();
}, {} ],
TheMoreEliminateTheMoreGoodEffectTrait: [ function(e, t, o) {
"use strict";
cc._RF.push(t, "4a858By6ehFWKP1wvDy36mi", "TheMoreEliminateTheMoreGoodEffectTrait");
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
var n, i = arguments.length, a = i < 3 ? t : null === r ? r = Object.getOwnPropertyDescriptor(t, o) : r;
if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) a = Reflect.decorate(e, t, o, r); else for (var c = e.length - 1; c >= 0; c--) (n = e[c]) && (a = (i < 3 ? n(a) : i > 3 ? n(t, o, a) : n(t, o)) || a);
return i > 3 && a && Object.defineProperty(t, o, a), a;
}, a = this && this.__awaiter || function(e, t, o, r) {
return new (o || (o = Promise))(function(n, i) {
function a(e) {
try {
l(r.next(e));
} catch (e) {
i(e);
}
}
function c(e) {
try {
l(r.throw(e));
} catch (e) {
i(e);
}
}
function l(e) {
e.done ? n(e.value) : (t = e.value, t instanceof o ? t : new o(function(e) {
e(t);
})).then(a, c);
var t;
}
l((r = r.apply(e, t || [])).next());
});
}, c = this && this.__generator || function(e, t) {
var o, r, n, i, a = {
label: 0,
sent: function() {
if (1 & n[0]) throw n[1];
return n[1];
},
trys: [],
ops: []
};
return i = {
next: c(0),
throw: c(1),
return: c(2)
}, "function" == typeof Symbol && (i[Symbol.iterator] = function() {
return this;
}), i;
function c(e) {
return function(t) {
return l([ e, t ]);
};
}
function l(i) {
if (o) throw new TypeError("Generator is already executing.");
for (;a; ) try {
if (o = 1, r && (n = 2 & i[0] ? r.return : i[0] ? r.throw || ((n = r.return) && n.call(r), 
0) : r.next) && !(n = n.call(r, i[1])).done) return n;
(r = 0, n) && (i = [ 2 & i[0], n.value ]);
switch (i[0]) {
case 0:
case 1:
n = i;
break;

case 4:
a.label++;
return {
value: i[1],
done: !1
};

case 5:
a.label++;
r = i[1];
i = [ 0 ];
continue;

case 7:
i = a.ops.pop();
a.trys.pop();
continue;

default:
if (!(n = a.trys, n = n.length > 0 && n[n.length - 1]) && (6 === i[0] || 2 === i[0])) {
a = 0;
continue;
}
if (3 === i[0] && (!n || i[1] > n[0] && i[1] < n[3])) {
a.label = i[1];
break;
}
if (6 === i[0] && a.label < n[1]) {
a.label = n[1];
n = i;
break;
}
if (n && a.label < n[2]) {
a.label = n[2];
a.ops.push(i);
break;
}
n[2] && a.ops.pop();
a.trys.pop();
continue;
}
i = t.call(e, a);
} catch (e) {
i = [ 6, e ];
r = 0;
} finally {
o = n = 0;
}
if (5 & i[0]) throw i[1];
return {
value: i[0] ? i[1] : void 0,
done: !0
};
}
};
Object.defineProperty(o, "__esModule", {
value: !0
});
o.TheMoreEliminateTheMoreGoodEffectTrait = void 0;
var l = e("./ChapterNodeTheMoreEliminateTheMoreGoodEffectCom"), s = function(e) {
n(t, e);
function t() {
var t = null !== e && e.apply(this, arguments) || this;
t._prefab = null;
t._effectNodePool = null;
t._playAnimCount = 0;
t._flyingNodes = [];
t._comboLayer = null;
t._encourageLayer = null;
t._eliminateCollectLayer = null;
t._prefabUrl = "prefabs/NodeTheMoreEliminateTheMoreGoodEffect";
return t;
}
Object.defineProperty(t.prototype, "onActiveCondition", {
get: function() {
return this.isCanActive();
},
enumerable: !1,
configurable: !0
});
t.prototype.isCanActive = function() {
return !0;
};
t.prototype.onCreate = function() {};
t.prototype.registerTraitEventsMethods = function() {
return [ {
className: "ChapterCollect_Proxy",
methodName: "onChapterGameShow"
}, {
className: "ChapterCollect_Proxy",
methodName: "onChapterGameEnd"
}, {
className: "ChapterGameOver_Proxy",
methodName: "onTouchEnd"
} ];
};
t.prototype.getAnimationReuse = function() {
return !0;
};
t.prototype.onActive = function(e) {
if (hs.tp.isChapterCollect_ProxyOnChapterGameShow(e)) {
this.preloadPrefab();
var t = hs.chapterGameInfo.chapterCondition.Way;
2 === this.openStatus && t === hs.ChapterType.collect && hs.chapterComboInfo.setComboState(!1);
1 === this.openStatus && this.createNewLayers();
}
hs.tp.isChapterTopInfo_CollectEffect_ProxyPlayCollectEffect(e) && this.onPlayCollectEffect(e);
hs.tp.isChapterCollect_ProxyOnChapterGameEnd(e) && this.onGameOver();
if (hs.tp.isChapterCombo_ProxyChangeComboPos(e)) {
if (3 !== this.openStatus) return;
if (-1 === (o = this.getShowPositionY())) return;
e.args[0] = cc.winSize.width / 2;
e.args[1] = o - 120;
e.returnState = !0;
}
if (hs.tp.isEncourage_ProxyGetEncourageLevelColorPos(e)) {
if (hs.gameInfo.gameMode !== hs.GameMode.Chapter) return;
if (3 !== this.openStatus) return;
var o;
if (-1 === (o = this.getShowPositionY())) return;
e.args[0] = cc.v2(cc.winSize.width / 2, o);
e.returnState = !0;
}
if (hs.tp.isChapterCombo_ProxyShowCombo(e)) {
if (1 !== this.openStatus) return;
if (!this._comboLayer) return;
var r = e.args[0], n = e.args[1], i = r.state.continuousEliminateTimes;
hs.UI.show(hs.PrefabConfig.ComboBase, this._comboLayer).then(function(e) {
var t = e.getComponent(hs.ComboBase);
t.setState({
count: i
});
t.node.setPosition(n);
});
e.replace = !0;
}
if (hs.tp.isEncourage_ProxyModifyEncourageParent(e) || hs.tp.isIsOpenChangeSkinTraitModifyEncourageParent(e)) {
if (hs.gameInfo.gameMode !== hs.GameMode.Chapter) return;
if (1 !== this.openStatus) return;
if (!this._encourageLayer) return;
if (hs.gameInfo.gameMode !== hs.GameMode.Chapter) return;
e.args[0].setParent(this._encourageLayer);
}
if (hs.tp.isChapterGameOver_ProxyOnTouchEnd(e)) {
if (!this._prefab) return;
var a = hs.chapterGameInfo.chapterCondition;
if ((null == a ? void 0 : a.Way) === hs.ChapterType.score) return;
hs.chapterConfigInfo.canAchievedGoal() && setTimeoutSafe(function() {
hs.chapterConfigInfo.canAchievedGoal() && hs.waitFor._waitFors.chapterCollectItemAnimState && hs.waitFor.end("chapterCollectItemAnimState");
}, 3e3);
}
hs.tp.isChapterBackSpace_ProxyOnCloseChapterGame(e) && this.onGameOver();
};
t.prototype.getShowPositionY = function() {
var e = Cinst(hs.Board);
if (!e || !cc.isValid(e.node)) return -1;
if (!hs.gameUiLayer) return -1;
var t = e.node.convertToWorldSpaceAR(cc.v2(0, 0));
return hs.gameUiLayer.convertToNodeSpaceAR(t).y + 300;
};
t.prototype.preloadPrefab = function() {
return a(this, void 0, void 0, function() {
var e;
return c(this, function(t) {
switch (t.label) {
case 0:
if (this._prefab) return [ 2 ];
e = this;
return [ 4, hs.ResLoader.asyncLoadByBundle("TheMoreEliminateTheMoreGoodEffectTrait", this._prefabUrl, cc.Prefab) ];

case 1:
e._prefab = t.sent();
return [ 2 ];
}
});
});
};
t.prototype.playCollectEffect = function(e) {
var t = this, o = e.args[0], r = e.args[1], n = Cinst(hs.ChapterTopInfoCollect);
if (n) {
var i = Cinst(hs.ChapterGame), a = n.cacheCollectItems, c = this.getLevelByEliminateCount(o.length);
this._playAnimCount = 0;
for (var s = new Map(), f = new Map(), h = 0; h < o.length; h++) {
var p = o[h].color;
s.set(p, (s.get(p) || 0) + 1);
}
var u = function(e) {
var n = o[e], h = n.node, p = n.color;
if (!r[p]) {
d._playAnimCount++;
return "continue";
}
var u = h.parent.convertToWorldSpaceAR(h.getPosition()), y = cc.Vec2.ZERO, m = new cc.Vec2(r[p].x - u.x, r[p].y - u.y), _ = d.getAnimationReuse(), v = function(r) {
var n;
if (r && cc.isValid(r)) {
1 === t.openStatus ? null === (n = t._eliminateCollectLayer) || void 0 === n || n.addChild(r) : i.collectEffectContainer.addChild(r);
r.active = !1;
r.x = u.x;
r.y = u.y;
t._flyingNodes.push(r);
var h = r.getComponent(l.ChapterNodeTheMoreEliminateTheMoreGoodEffectCom), d = t.calculateCenterPosition(y, m), v = f.get(p) || 0;
f.set(p, v + 1);
t.beforePlayItemAnim(r, o[e], p, e);
var C = s.get(p) || 1;
cc.tween(r).delay(t.getItemStartDelay(e)).call(function() {
cc.isValid(r) && (r.active = !0);
null == h || h.setState({
phase: 0,
colorId: p,
level: c,
animSpeed: t.props.animSpeed
});
}).call(function() {
t.playItemStartCollectAudio(e);
}).delay(1 / t.props.animSpeed * .2).call(function() {
cc.isValid(r) && t.showItemAnim(r, {
cacheCollectItems: a,
collectInfosLength: o.length,
color: p,
level: c,
positions: {
begin: y,
center: d,
end: m
},
colorIndex: v,
colorTotal: C,
reuse: _
});
}).start();
} else t._playAnimCount++;
};
_ ? d.getEffectNode().then(v) : v(cc.instantiate(d._prefab));
}, d = this;
for (h = 0; h < o.length; h++) u(h);
}
};
t.prototype.getEffectNode = function() {
var e = this;
this._effectNodePool || (this._effectNodePool = new hs.ObjectPool(function() {
return Promise.resolve(cc.instantiate(e._prefab));
}, this.resetEffectNode.bind(this), {
size: 10
}));
return this._effectNodePool.get();
};
t.prototype.resetEffectNode = function(e) {
if (e && cc.isValid(e)) {
cc.Tween.stopAllByTarget(e);
e.active = !1;
}
};
t.prototype.removeEffectNode = function(e) {
var t;
e && cc.isValid(e) && (null !== (t = this._effectNodePool) && void 0 !== t && t.isInUsed(e) ? this._effectNodePool.release(e) : e.parent && e.parent.removeChild(e, !0));
};
t.prototype.beforePlayItemAnim = function() {};
t.prototype.getItemStartDelay = function(e) {
return .13 * e;
};
t.prototype.playItemStartCollectAudio = function() {
hs.audioInfo.play(hs.ChapterAudioConfig.travel_game_collect_item1);
};
t.prototype.onGemReachCollection = function() {};
t.prototype.getLevelByEliminateCount = function(e) {
return e < this.props.firstEliminateCount ? 1 : e < this.props.secondEliminateCount ? 2 : 3;
};
t.prototype.calculateCenterPosition = function(e, t) {
var o = Math.min(t.y - e.y, 500), r = Math.floor(o / 2), n = Math.floor(o);
r = e.x > t.x ? r + (e.x - t.x) : -r + (e.x - t.x);
return new cc.Vec2(e.x + r, e.y - n);
};
t.prototype.showItemAnim = function(e, t) {
var o = this, r = t.cacheCollectItems, n = t.collectInfosLength, i = t.color, a = t.positions, c = t.level, s = t.colorIndex, f = t.colorTotal, h = t.reuse;
cc.tween(e).bezierBy(1 / this.props.animSpeed * .5, a.begin, a.center, a.end).call(function() {
var t;
if (cc.isValid(e)) {
var a = o._flyingNodes.indexOf(e);
a > -1 && o._flyingNodes.splice(a, 1);
o.onGemReachCollection(a);
var p = r.find(function(e) {
return Number(e.color) === Number(i);
});
if (cc.isValid(p)) {
var u = p.node.getComponent(hs.ChapterCollectTopItem);
if (u) {
u.setState({
color: i,
showMoveAnim: !0,
remainCollectCount: o.getRemainCollectCount(u.state.remainCollectCount, e, i),
targetCount: u.state.targetCount
});
u.playAction();
}
var d = s === f - 1;
u.state.remainCollectCount - 1 >= 0 && d ? null === (t = null == e ? void 0 : e.getComponent(l.ChapterNodeTheMoreEliminateTheMoreGoodEffectCom)) || void 0 === t || t.setState({
phase: 1,
level: c,
animSpeed: o.props.animSpeed,
colorId: i,
callback: function() {
cc.isValid(e) && cc.isValid(e.parent) && (h ? o.removeEffectNode(e) : e.parent.removeChild(e, !0));
}
}) : cc.isValid(e) && cc.isValid(e.parent) && (h ? o.removeEffectNode(e) : e.parent.removeChild(e, !0));
}
hs.audioInfo.play(hs.ChapterAudioConfig.travel_game_collect_item2);
o._playAnimCount++;
if (o._playAnimCount === n) {
hs.waitFor.end("chapterCollectItemAnimState");
o.aniEnd();
}
} else {
o._playAnimCount++;
o._playAnimCount === n && hs.waitFor.end("chapterCollectItemAnimState");
}
}).start();
};
t.prototype.getRemainCollectCount = function(e) {
return e - 1;
};
t.prototype.onGameOver = function() {
for (var e = this._flyingNodes.length - 1; e >= 0; e--) {
var t = this._flyingNodes[e];
if (t && cc.isValid(t)) {
cc.Tween.stopAllByTarget(t);
this.getAnimationReuse() ? this.removeEffectNode(t) : t.parent && t.parent.removeChild(t, !0);
}
}
this._flyingNodes = [];
this._playAnimCount = 0;
};
t.prototype.createNewLayers = function() {
if (!(this._comboLayer && this._eliminateCollectLayer && this._encourageLayer)) {
this._eliminateCollectLayer = this.createNewLayerParent("eliminateCollectLayer", 10);
this._encourageLayer = this.createNewLayerParent("encourageLayer", 11);
this._comboLayer = this.createNewLayerParent("comboLayer", 12);
hs.gameEffectLayer.zIndex = 15;
hs.guideLayer.zIndex = 16;
hs.loadingLayer.zIndex = 17;
hs.uiLayer.zIndex = 18;
hs.gameAlertLayer.zIndex = 19;
hs.alertLayer.zIndex = 20;
hs.effectLayer.zIndex = 21;
}
};
t.prototype.createNewLayerParent = function(e, t) {
var o = new cc.Node();
o.name = e;
o.zIndex = t;
o.setParent(hs.scene.persist);
hs.addWidget(o);
return o;
};
Object.defineProperty(t.prototype, "openStatus", {
get: function() {
var e;
return null !== (e = this.props.openStatus) && void 0 !== e ? e : 0;
},
enumerable: !1,
configurable: !0
});
t.prototype.aniEnd = function() {};
t.prototype.onPlayCollectEffect = function(e) {
if (this._prefab) {
this.playCollectEffect(e);
e.replace = !0;
}
};
return i([ classId("TheMoreEliminateTheMoreGoodEffectTrait"), classMethodWatch() ], t);
}(Trait);
o.TheMoreEliminateTheMoreGoodEffectTrait = s;
cc._RF.pop();
}, {
"./ChapterNodeTheMoreEliminateTheMoreGoodEffectCom": "ChapterNodeTheMoreEliminateTheMoreGoodEffectCom"
} ],
TheMoreEliminateTheMoreGoodEffect_comparisonBundle_Trait: [ function(e, t, o) {
"use strict";
cc._RF.push(t, "77c40HInN9AlqY5LjDmYTLD", "TheMoreEliminateTheMoreGoodEffect_comparisonBundle_Trait");
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
var n, i = arguments.length, a = i < 3 ? t : null === r ? r = Object.getOwnPropertyDescriptor(t, o) : r;
if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) a = Reflect.decorate(e, t, o, r); else for (var c = e.length - 1; c >= 0; c--) (n = e[c]) && (a = (i < 3 ? n(a) : i > 3 ? n(t, o, a) : n(t, o)) || a);
return i > 3 && a && Object.defineProperty(t, o, a), a;
}, a = this && this.__awaiter || function(e, t, o, r) {
return new (o || (o = Promise))(function(n, i) {
function a(e) {
try {
l(r.next(e));
} catch (e) {
i(e);
}
}
function c(e) {
try {
l(r.throw(e));
} catch (e) {
i(e);
}
}
function l(e) {
e.done ? n(e.value) : (t = e.value, t instanceof o ? t : new o(function(e) {
e(t);
})).then(a, c);
var t;
}
l((r = r.apply(e, t || [])).next());
});
}, c = this && this.__generator || function(e, t) {
var o, r, n, i, a = {
label: 0,
sent: function() {
if (1 & n[0]) throw n[1];
return n[1];
},
trys: [],
ops: []
};
return i = {
next: c(0),
throw: c(1),
return: c(2)
}, "function" == typeof Symbol && (i[Symbol.iterator] = function() {
return this;
}), i;
function c(e) {
return function(t) {
return l([ e, t ]);
};
}
function l(i) {
if (o) throw new TypeError("Generator is already executing.");
for (;a; ) try {
if (o = 1, r && (n = 2 & i[0] ? r.return : i[0] ? r.throw || ((n = r.return) && n.call(r), 
0) : r.next) && !(n = n.call(r, i[1])).done) return n;
(r = 0, n) && (i = [ 2 & i[0], n.value ]);
switch (i[0]) {
case 0:
case 1:
n = i;
break;

case 4:
a.label++;
return {
value: i[1],
done: !1
};

case 5:
a.label++;
r = i[1];
i = [ 0 ];
continue;

case 7:
i = a.ops.pop();
a.trys.pop();
continue;

default:
if (!(n = a.trys, n = n.length > 0 && n[n.length - 1]) && (6 === i[0] || 2 === i[0])) {
a = 0;
continue;
}
if (3 === i[0] && (!n || i[1] > n[0] && i[1] < n[3])) {
a.label = i[1];
break;
}
if (6 === i[0] && a.label < n[1]) {
a.label = n[1];
n = i;
break;
}
if (n && a.label < n[2]) {
a.label = n[2];
a.ops.push(i);
break;
}
n[2] && a.ops.pop();
a.trys.pop();
continue;
}
i = t.call(e, a);
} catch (e) {
i = [ 6, e ];
r = 0;
} finally {
o = n = 0;
}
if (5 & i[0]) throw i[1];
return {
value: i[0] ? i[1] : void 0,
done: !0
};
}
};
Object.defineProperty(o, "__esModule", {
value: !0
});
o.TheMoreEliminateTheMoreGoodEffect_comparisonBundle_Trait = void 0;
var l = e("./TheMoreEliminateTheMoreGoodEffectTrait"), s = "prefabs/NodeTheMoreEliminateTheMoreGoodEffect", f = "prefabs/NodeTheMoreEliminateTheMoreGoodEffect_new", h = function(e) {
n(t, e);
function t() {
var t = null !== e && e.apply(this, arguments) || this;
t.holdBundle = null;
return t;
}
t.prototype.preloadPrefab = function() {
return a(this, void 0, void 0, function() {
return c(this, function(t) {
switch (t.label) {
case 0:
return [ 4, this.checkBundle() ];

case 1:
t.sent();
e.prototype.preloadPrefab.call(this);
return [ 2 ];
}
});
});
};
t.prototype.checkBundle = function() {
return a(this, void 0, void 0, function() {
var e;
return c(this, function(t) {
switch (t.label) {
case 0:
if (this.holdBundle) return [ 3, 5 ];
if (!cc.sys.isNative) return [ 2 ];
t.label = 1;

case 1:
t.trys.push([ 1, 3, , 4 ]);
e = this;
return [ 4, hs.ResLoader.asyncLoadBundle(this.traitName) ];

case 2:
e.holdBundle = t.sent();
this.getResUrl();
return [ 3, 4 ];

case 3:
t.sent();
return [ 3, 4 ];

case 4:
return [ 3, 6 ];

case 5:
this.getResUrl();
t.label = 6;

case 6:
return [ 2 ];
}
});
});
};
t.prototype.getResUrl = function() {
if (this.holdBundle) try {
if (!hs.ResLoader.isBundleAssetDownloaded(this.holdBundle, s, {
type: cc.Prefab
})) {
this._prefabUrl = f;
return;
}
var e = hs.ResLoader.isBundleAssetDownloaded(this.holdBundle, f, {
type: cc.Prefab
});
this._prefabUrl = e ? f : s;
} catch (e) {}
};
return i([ classId("TheMoreEliminateTheMoreGoodEffectTrait", "comparisonBundle") ], t);
}(l.TheMoreEliminateTheMoreGoodEffectTrait);
o.TheMoreEliminateTheMoreGoodEffect_comparisonBundle_Trait = h;
cc._RF.pop();
}, {
"./TheMoreEliminateTheMoreGoodEffectTrait": "TheMoreEliminateTheMoreGoodEffectTrait"
} ],
TheMoreEliminateTheMoreGoodEffect_comparisonNew_Trait: [ function(e, t, o) {
"use strict";
cc._RF.push(t, "3ac7a7uiedGD4svEknKoruj", "TheMoreEliminateTheMoreGoodEffect_comparisonNew_Trait");
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
var n, i = arguments.length, a = i < 3 ? t : null === r ? r = Object.getOwnPropertyDescriptor(t, o) : r;
if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) a = Reflect.decorate(e, t, o, r); else for (var c = e.length - 1; c >= 0; c--) (n = e[c]) && (a = (i < 3 ? n(a) : i > 3 ? n(t, o, a) : n(t, o)) || a);
return i > 3 && a && Object.defineProperty(t, o, a), a;
}, a = this && this.__awaiter || function(e, t, o, r) {
return new (o || (o = Promise))(function(n, i) {
function a(e) {
try {
l(r.next(e));
} catch (e) {
i(e);
}
}
function c(e) {
try {
l(r.throw(e));
} catch (e) {
i(e);
}
}
function l(e) {
e.done ? n(e.value) : (t = e.value, t instanceof o ? t : new o(function(e) {
e(t);
})).then(a, c);
var t;
}
l((r = r.apply(e, t || [])).next());
});
}, c = this && this.__generator || function(e, t) {
var o, r, n, i, a = {
label: 0,
sent: function() {
if (1 & n[0]) throw n[1];
return n[1];
},
trys: [],
ops: []
};
return i = {
next: c(0),
throw: c(1),
return: c(2)
}, "function" == typeof Symbol && (i[Symbol.iterator] = function() {
return this;
}), i;
function c(e) {
return function(t) {
return l([ e, t ]);
};
}
function l(i) {
if (o) throw new TypeError("Generator is already executing.");
for (;a; ) try {
if (o = 1, r && (n = 2 & i[0] ? r.return : i[0] ? r.throw || ((n = r.return) && n.call(r), 
0) : r.next) && !(n = n.call(r, i[1])).done) return n;
(r = 0, n) && (i = [ 2 & i[0], n.value ]);
switch (i[0]) {
case 0:
case 1:
n = i;
break;

case 4:
a.label++;
return {
value: i[1],
done: !1
};

case 5:
a.label++;
r = i[1];
i = [ 0 ];
continue;

case 7:
i = a.ops.pop();
a.trys.pop();
continue;

default:
if (!(n = a.trys, n = n.length > 0 && n[n.length - 1]) && (6 === i[0] || 2 === i[0])) {
a = 0;
continue;
}
if (3 === i[0] && (!n || i[1] > n[0] && i[1] < n[3])) {
a.label = i[1];
break;
}
if (6 === i[0] && a.label < n[1]) {
a.label = n[1];
n = i;
break;
}
if (n && a.label < n[2]) {
a.label = n[2];
a.ops.push(i);
break;
}
n[2] && a.ops.pop();
a.trys.pop();
continue;
}
i = t.call(e, a);
} catch (e) {
i = [ 6, e ];
r = 0;
} finally {
o = n = 0;
}
if (5 & i[0]) throw i[1];
return {
value: i[0] ? i[1] : void 0,
done: !0
};
}
};
Object.defineProperty(o, "__esModule", {
value: !0
});
o.TheMoreEliminateTheMoreGoodEffect_comparisonNew_Trait = void 0;
var l = function(e) {
n(t, e);
function t() {
return null !== e && e.apply(this, arguments) || this;
}
t.prototype.preloadPrefab = function() {
return a(this, void 0, void 0, function() {
return c(this, function(t) {
switch (t.label) {
case 0:
this.getResUrl();
return [ 4, e.prototype.preloadPrefab.call(this) ];

case 1:
t.sent();
return [ 2 ];
}
});
});
};
t.prototype.getResUrl = function() {
this._prefabUrl = "prefabs/NodeTheMoreEliminateTheMoreGoodEffect_new";
};
return i([ classId("TheMoreEliminateTheMoreGoodEffectTrait", "comparisonNew") ], t);
}(e("./TheMoreEliminateTheMoreGoodEffectTrait").TheMoreEliminateTheMoreGoodEffectTrait);
o.TheMoreEliminateTheMoreGoodEffect_comparisonNew_Trait = l;
cc._RF.pop();
}, {
"./TheMoreEliminateTheMoreGoodEffectTrait": "TheMoreEliminateTheMoreGoodEffectTrait"
} ]
}, {}, [ "ChapterNodeTheMoreEliminateTheMoreGoodEffectCom", "TheMoreEliminateTheMoreGoodEffectTrait", "TheMoreEliminateTheMoreGoodEffect_comparisonBundle_Trait", "TheMoreEliminateTheMoreGoodEffect_comparisonNew_Trait" ]);
//# sourceMappingURL=index.js.map
