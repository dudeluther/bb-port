window.__require = function e(t, n, r) {
function o(a, i) {
if (!n[a]) {
if (!t[a]) {
var s = a.split("/");
s = s[s.length - 1];
if (!t[s]) {
var l = "function" == typeof __require && __require;
if (!i && l) return l(s, !0);
if (c) return c(s, !0);
throw new Error("Cannot find module '" + a + "'");
}
a = s;
}
var p = n[a] = {
exports: {}
};
t[a][0].call(p.exports, function(e) {
return o(t[a][1][e] || e);
}, p, p.exports, e, t, n, r);
}
return n[a].exports;
}
for (var c = "function" == typeof __require && __require, a = 0; a < r.length; a++) o(r[a]);
return o;
}({
IsOpenClassEncourageEffectByScoreTrait: [ function(e, t, n) {
"use strict";
cc._RF.push(t, "83a10Z5fzlM/JnrDCD49SwL", "IsOpenClassEncourageEffectByScoreTrait");
var r, o = this && this.__extends || (r = function(e, t) {
return (r = Object.setPrototypeOf || {
__proto__: []
} instanceof Array && function(e, t) {
e.__proto__ = t;
} || function(e, t) {
for (var n in t) Object.prototype.hasOwnProperty.call(t, n) && (e[n] = t[n]);
})(e, t);
}, function(e, t) {
r(e, t);
function n() {
this.constructor = e;
}
e.prototype = null === t ? Object.create(t) : (n.prototype = t.prototype, new n());
}), c = this && this.__decorate || function(e, t, n, r) {
var o, c = arguments.length, a = c < 3 ? t : null === r ? r = Object.getOwnPropertyDescriptor(t, n) : r;
if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) a = Reflect.decorate(e, t, n, r); else for (var i = e.length - 1; i >= 0; i--) (o = e[i]) && (a = (c < 3 ? o(a) : c > 3 ? o(t, n, a) : o(t, n)) || a);
return c > 3 && a && Object.defineProperty(t, n, a), a;
};
Object.defineProperty(n, "__esModule", {
value: !0
});
n.IsOpenClassEncourageEffectByScoreTrait = void 0;
var a = e("./ScoreTipHignScoreEncourageEffectInfo"), i = function(e) {
o(t, e);
function t() {
var t = null !== e && e.apply(this, arguments) || this;
t._encourageEffectPrefab = null;
t._encourageEffectNode = null;
t.SCORE_PERCENTAGE = [ {
score: 3e3,
percentage: 20
}, {
score: 6e3,
percentage: 35
}, {
score: 9e3,
percentage: 45
}, {
score: 12e3,
percentage: 60
}, {
score: 2e4,
percentage: 80
}, {
score: 27e3,
percentage: 90
}, {
score: 35e3,
percentage: 93
}, {
score: 4e4,
percentage: 95
}, {
score: 5e4,
percentage: 97
}, {
score: 6e4,
percentage: 99
}, {
score: 8e4,
percentage: 100
} ];
t.needShow = !1;
t._timer = 0;
t._openPercentageLabelFloorDedup = !0;
t.BUNDLE_NAME = "IsOpenClassEncourageEffectByScoreTrait";
t.OLD_PREFAB_PATH = "prefabs/highScoreEncourageEffect";
t.NEW_PREFAB_PATH = "newprefabs/newhighScoreEncourageEffect";
return t;
}
t.prototype.onFixRevertModify = function() {
return this._openPercentageLabelFloorDedup;
};
t.prototype.registerTraitEventsMethods = function() {
return [ {
className: "ClassSkin_Extra_Proxy",
methodName: "onClassGameClose"
}, {
className: "ClassDefaultBoard_Proxy",
methodName: "onProduceClassDefaultBoard"
} ];
};
t.prototype.onCreate = function() {
var e, t;
this._openPercentageLabelFloorDedup = this.onFixRevertModify();
this.preLoadRes();
null !== (t = null === (e = this.props) || void 0 === e ? void 0 : e.isStrengthen) && void 0 !== t && t && this.preLoadStrengthenSpine();
};
t.prototype.preLoadRes = function() {
if (this.useNewArt) {
var e = this.resIsLocal(this.OLD_PREFAB_PATH);
if (this.resIsLocal(this.NEW_PREFAB_PATH)) this.preLoadPrefab(this.NEW_PREFAB_PATH); else if (e) {
this.preLoadPrefab(this.OLD_PREFAB_PATH);
this.preLoadNewPrefabForNextColdStart();
} else this.preLoadPrefab(this.NEW_PREFAB_PATH);
} else this.preLoadPrefab(this.OLD_PREFAB_PATH);
};
t.prototype.preLoadNewPrefabForNextColdStart = function() {
var e = this;
hs.ResLoader.loadByBundle(this.BUNDLE_NAME, this.NEW_PREFAB_PATH, cc.Prefab, function(t, n) {
t || (e._encourageEffectPrefab = n);
});
};
t.prototype.onActive = function(e) {
var t, n, r, o = this;
if (hs.tp.isClassDefaultBoard_ProxyOnProduceClassDefaultBoard(e)) {
this._encourageEffectNode && (this._encourageEffectNode.active = !1);
this.clearTimer();
}
if (hs.tp.isClassSkin_Extra_ProxyOnClassGameClose(e)) {
this._encourageEffectNode && (this._encourageEffectNode.active = !1);
this.clearTimer();
}
if (hs.tp.isClassEncourage_ProxyOnTouchEnd(e)) {
var c = this.checkScore();
if (c) {
var a = e.args[0], i = null === (t = null == a ? void 0 : a.state) || void 0 === t ? void 0 : t.touchEndState;
if (!i) return;
var s = i.eliminateCount, l = i.continuousEliminateTimes, p = s > 0 && l > 1, f = s >= 2;
this.clearTimer();
if (this.isClearNoTrigger(i)) return;
if (!p && !f) {
this.showEffect(c);
return;
}
if (p && f) {
this._timer = setTimeoutSafe(function() {
o.showEffect(c);
}, 700);
e.replace = !0;
return;
}
if (p) {
this._timer = setTimeoutSafe(function() {
o.showEffect(c);
}, 700);
return;
}
if (f) {
this.showEffect(c);
e.replace = !0;
return;
}
}
}
if (hs.tp.isScoreTipHignScoreEncourageEffectInfoPlayPercentageLabelAction(e) && null !== (r = null === (n = this.props) || void 0 === n ? void 0 : n.isStrengthen) && void 0 !== r && r) {
this.playPercentageLabelAction(e);
e.replace = !0;
}
};
t.prototype.isClearNoTrigger = function() {
return !1;
};
t.prototype.playPercentageLabelAction = function(e) {
var t = e.target;
if (this._openPercentageLabelFloorDedup) {
var n = -1;
cc.tween(t._time).delay(.65).call(function() {
if (t.percentageLabel && cc.isValid(t.percentageLabel.node)) {
t.percentageLabel.node.active = !0;
t.percentageLabel.node.anchorX = .5;
}
t.percentageLabel && cc.tween(t.percentageLabel.node).to(.3, {
scale: 1.3
}).delay(.15).to(.2, {
scale: 1
}).start();
}).to(.3, {
percentage: t.state.score.percentage
}, {
progress: function(e, r, o, c) {
o >= t.state.score.percentage - 1 && (o = t.state.score.percentage);
var a = Math.floor(o);
if (a !== n) {
n = a;
t.percentageLabel && cc.isValid(t.percentageLabel.node) && (t.percentageLabel.string = a + "%");
}
return e + (r - e) * c;
}
}).call(function() {
t.percentageLabel && cc.isValid(t.percentageLabel.node) && (t.percentageLabel.string = t.state.score.percentage + "%");
}).delay(this.getLabelDelay()).call(function() {
t.percentageLabel && cc.tween(t.percentageLabel.node).to(.25, {
opacity: 0
}).call(function() {
t.percentageLabel && cc.isValid(t.percentageLabel.node) && (t.percentageLabel.node.active = !1);
}).start();
}).start();
} else cc.tween(t._time).delay(.65).call(function() {
if (t.percentageLabel && cc.isValid(t.percentageLabel.node)) {
t.percentageLabel.node.active = !0;
t.percentageLabel.node.anchorX = .5;
}
t.percentageLabel && cc.tween(t.percentageLabel.node).to(.3, {
scale: 1.3
}).delay(.15).to(.2, {
scale: 1
}).start();
}).to(.3, {
percentage: t.state.score.percentage
}, {
progress: function(e, n, r, o) {
r >= t.state.score.percentage - 1 && (r = t.state.score.percentage);
t.percentageLabel && cc.isValid(t.percentageLabel.node) && (t.percentageLabel.string = Math.floor(r) + "%");
return e + (n - e) * o;
}
}).call(function() {
t.percentageLabel && cc.isValid(t.percentageLabel.node) && (t.percentageLabel.string = t.state.score.percentage + "%");
}).delay(this.getLabelDelay()).call(function() {
t.percentageLabel && cc.tween(t.percentageLabel.node).to(.25, {
opacity: 0
}).call(function() {
t.percentageLabel && cc.isValid(t.percentageLabel.node) && (t.percentageLabel.node.active = !1);
}).start();
}).start();
};
t.prototype.getLabelDelay = function() {
return .9;
};
t.prototype.clearTimer = function() {
if (this._timer) {
clearTimeout(this._timer);
this._timer = 0;
}
};
t.prototype.showEffect = function(e) {
if (this._encourageEffectPrefab) {
var t = Cinst(hs.ClassGame);
if (t && cc.isValid(t.node) && t.node.active) {
this.saveNewScoreToStorage(e.score);
this.showEncourageEffect(e);
}
}
};
t.prototype.checkScore = function() {
var e = storage.getItem("classScore", 0), t = storage.getItem("classEncourageEffectByScoreList", []);
t = this.updateSaveScoreListByOtherTrait(t);
for (var n = null, r = function(r) {
var c = o.SCORE_PERCENTAGE[r];
if (e >= c.score) {
-1 === t.findIndex(function(e) {
return e === c.score;
}) && (n = c);
return "break";
}
}, o = this, c = this.SCORE_PERCENTAGE.length - 1; c >= 0 && "break" !== r(c); c--) ;
return n;
};
t.prototype.updateSaveScoreListByOtherTrait = function(e) {
return e;
};
t.prototype.saveNewScoreToStorage = function(e) {
var t = storage.getItem("classEncourageEffectByScoreList", []);
t.push(e);
storage.setItem("classEncourageEffectByScoreList", t);
};
t.prototype.showEncourageEffect = function(e) {
var t, n;
if (this._encourageEffectPrefab) {
if (!this._encourageEffectNode) {
this._encourageEffectNode = cc.instantiate(this._encourageEffectPrefab);
hs.uiLayer.addChild(this._encourageEffectNode);
this._encourageEffectNode.setPosition(0, 0);
}
this._encourageEffectNode.active = !0;
this._encourageEffectNode.getComponent(a.default).setState({
score: e,
isStrengthen: null !== (n = null === (t = this.props) || void 0 === t ? void 0 : t.isStrengthen) && void 0 !== n && n
});
}
};
t.prototype.preLoadPrefab = function(e) {
var t = this;
hs.ResLoader.loadByBundle("IsOpenClassEncourageEffectByScoreTrait", e, cc.Prefab, function(e, n) {
e || (t._encourageEffectPrefab = n);
});
};
t.prototype.preLoadStrengthenSpine = function() {
hs.ResLoader.loadByBundle("IsOpenClassEncourageEffectByScoreTrait", "spine/strengthen/gameplay_gl", sp.SkeletonData, function() {});
};
t.prototype.resIsLocal = function(e) {
var t = cc.assetManager.getBundle(this.BUNDLE_NAME);
return hs.ResLoader.isBundleAssetDownloaded(t, e, {
target: "import"
});
};
Object.defineProperty(t.prototype, "useNewArt", {
get: function() {
var e, t;
return null !== (t = null === (e = this.props) || void 0 === e ? void 0 : e.useNewArt) && void 0 !== t && t;
},
enumerable: !1,
configurable: !0
});
return c([ classId("IsOpenClassEncourageEffectByScoreTrait"), classMethodWatch() ], t);
}(Trait);
n.IsOpenClassEncourageEffectByScoreTrait = i;
cc._RF.pop();
}, {
"./ScoreTipHignScoreEncourageEffectInfo": "ScoreTipHignScoreEncourageEffectInfo"
} ],
IsOpenClassEncourageEffectByScore_comparisonNew_Trait: [ function(e, t, n) {
"use strict";
cc._RF.push(t, "c4e8bF6bS9KkbPljwydR6IW", "IsOpenClassEncourageEffectByScore_comparisonNew_Trait");
var r, o = this && this.__extends || (r = function(e, t) {
return (r = Object.setPrototypeOf || {
__proto__: []
} instanceof Array && function(e, t) {
e.__proto__ = t;
} || function(e, t) {
for (var n in t) Object.prototype.hasOwnProperty.call(t, n) && (e[n] = t[n]);
})(e, t);
}, function(e, t) {
r(e, t);
function n() {
this.constructor = e;
}
e.prototype = null === t ? Object.create(t) : (n.prototype = t.prototype, new n());
}), c = this && this.__decorate || function(e, t, n, r) {
var o, c = arguments.length, a = c < 3 ? t : null === r ? r = Object.getOwnPropertyDescriptor(t, n) : r;
if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) a = Reflect.decorate(e, t, n, r); else for (var i = e.length - 1; i >= 0; i--) (o = e[i]) && (a = (c < 3 ? o(a) : c > 3 ? o(t, n, a) : o(t, n)) || a);
return c > 3 && a && Object.defineProperty(t, n, a), a;
};
Object.defineProperty(n, "__esModule", {
value: !0
});
n.IsOpenClassEncourageEffectByScore_comparisonNew_Trait = void 0;
var a = function(e) {
o(t, e);
function t() {
return null !== e && e.apply(this, arguments) || this;
}
t.prototype.preLoadRes = function() {
this.preLoadPrefab("newprefabs/newhighScoreEncourageEffect");
};
return c([ classId("IsOpenClassEncourageEffectByScoreTrait", "comparisonNew") ], t);
}(e("./IsOpenClassEncourageEffectByScoreTrait").IsOpenClassEncourageEffectByScoreTrait);
n.IsOpenClassEncourageEffectByScore_comparisonNew_Trait = a;
cc._RF.pop();
}, {
"./IsOpenClassEncourageEffectByScoreTrait": "IsOpenClassEncourageEffectByScoreTrait"
} ],
ScoreTipHignScoreEncourageEffectInfo: [ function(e, t, n) {
"use strict";
cc._RF.push(t, "6a6f581AuZBGIilP8ZrQCwD", "ScoreTipHignScoreEncourageEffectInfo");
var r, o = this && this.__extends || (r = function(e, t) {
return (r = Object.setPrototypeOf || {
__proto__: []
} instanceof Array && function(e, t) {
e.__proto__ = t;
} || function(e, t) {
for (var n in t) Object.prototype.hasOwnProperty.call(t, n) && (e[n] = t[n]);
})(e, t);
}, function(e, t) {
r(e, t);
function n() {
this.constructor = e;
}
e.prototype = null === t ? Object.create(t) : (n.prototype = t.prototype, new n());
}), c = this && this.__decorate || function(e, t, n, r) {
var o, c = arguments.length, a = c < 3 ? t : null === r ? r = Object.getOwnPropertyDescriptor(t, n) : r;
if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) a = Reflect.decorate(e, t, n, r); else for (var i = e.length - 1; i >= 0; i--) (o = e[i]) && (a = (c < 3 ? o(a) : c > 3 ? o(t, n, a) : o(t, n)) || a);
return c > 3 && a && Object.defineProperty(t, n, a), a;
};
Object.defineProperty(n, "__esModule", {
value: !0
});
var a = cc._decorator, i = a.ccclass, s = a.property, l = function(e) {
o(t, e);
function t() {
var t = null !== e && e.apply(this, arguments) || this;
t.percentageLabel = null;
t.skeletonAni = null;
t._time = {
percentage: 0
};
t._isStrengthenLoadFinish = !1;
return t;
}
t.prototype.render = function() {
var e = this;
this.percentageLabel.node.active = !1;
this.percentageLabel.string = "0";
this.percentageLabel.node.opacity = 255;
this.percentageLabel.node.stopAllActions();
cc.Tween.stopAllByTarget(this._time);
this._time = {
percentage: 0
};
this.playPercentageLabelAction();
if (this.state.isStrengthen) {
this.percentageLabel.node.position = new cc.Vec3(182, -278, 0);
if (this._isStrengthenLoadFinish) {
if (this.skeletonAni && cc.isValid(this.skeletonAni.node)) {
this.skeletonAni.timeScale = this.getAnimSpeed();
this.skeletonAni.setAnimation(0, "newAnimation_xx", !1);
this.skeletonAni.setCompleteListener(function() {
e.node && cc.isValid(e.node) && (e.node.active = !1);
});
}
} else hs.ResLoader.loadByBundle("IsOpenClassEncourageEffectByScoreTrait", "spine/strengthen/gameplay_gl", sp.SkeletonData, function(t, n) {
if (t) {
if (e.skeletonAni && cc.isValid(e.skeletonAni.node)) {
e.percentageLabel.node.position = new cc.Vec3(206, 407, 0);
e.percentageLabel.node.anchorX = 1;
e.skeletonAni.timeScale = e.getAnimSpeed();
e.skeletonAni.setAnimation(0, "newAnimation2_xx", !1);
e.skeletonAni.setCompleteListener(function() {
e.node && cc.isValid(e.node) && (e.node.active = !1);
});
}
} else if (e.skeletonAni && cc.isValid(e.skeletonAni.node)) {
e._isStrengthenLoadFinish = !0;
e.skeletonAni.skeletonData = n;
e.skeletonAni.timeScale = e.getAnimSpeed();
e.skeletonAni.setAnimation(0, "newAnimation_xx", !1);
e.skeletonAni.setCompleteListener(function() {
e.node && cc.isValid(e.node) && (e.node.active = !1);
});
}
});
} else {
this.skeletonAni.timeScale = this.getAnimSpeed();
this.skeletonAni.setAnimation(0, "newAnimation2_xx", !1);
this.skeletonAni.setCompleteListener(function() {
e.node && cc.isValid(e.node) && (e.node.active = !1);
});
}
};
t.prototype.getAnimSpeed = function() {
return 1;
};
t.prototype.playPercentageLabelAction = function() {
var e = this, t = -1;
cc.tween(this._time).delay(.65).call(function() {
e.percentageLabel && cc.isValid(e.percentageLabel.node) && (e.percentageLabel.node.active = !0);
}).to(.3, {
percentage: this.state.score.percentage
}, {
progress: function(n, r, o, c) {
o >= e.state.score.percentage - 1 && (o = e.state.score.percentage);
var a = Math.floor(o);
if (a !== t) {
t = a;
e.percentageLabel && cc.isValid(e.percentageLabel.node) && (e.percentageLabel.string = "" + a);
}
return n + (r - n) * c;
}
}).call(function() {
e.percentageLabel && cc.isValid(e.percentageLabel.node) && (e.percentageLabel.string = "" + e.state.score.percentage);
}).delay(this.getLabelDelay()).call(function() {
e.percentageLabel && cc.tween(e.percentageLabel.node).to(.25, {
opacity: 0
}).call(function() {
e.percentageLabel && cc.isValid(e.percentageLabel.node) && (e.percentageLabel.node.active = !1);
}).start();
}).start();
};
t.prototype.getLabelDelay = function() {
return .7;
};
c([ s(cc.Label) ], t.prototype, "percentageLabel", void 0);
c([ s(sp.Skeleton) ], t.prototype, "skeletonAni", void 0);
return c([ classId("ScoreTipHignScoreEncourageEffectInfo"), i, classMethodWatch() ], t);
}(hs.Component);
n.default = l;
cc._RF.pop();
}, {} ]
}, {}, [ "IsOpenClassEncourageEffectByScoreTrait", "IsOpenClassEncourageEffectByScore_comparisonNew_Trait", "ScoreTipHignScoreEncourageEffectInfo" ]);
//# sourceMappingURL=index.js.map
