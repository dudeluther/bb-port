window.__require = function t(e, n, r) {
function i(a, s) {
if (!n[a]) {
if (!e[a]) {
var c = a.split("/");
c = c[c.length - 1];
if (!e[c]) {
var l = "function" == typeof __require && __require;
if (!s && l) return l(c, !0);
if (o) return o(c, !0);
throw new Error("Cannot find module '" + a + "'");
}
a = c;
}
var u = n[a] = {
exports: {}
};
e[a][0].call(u.exports, function(t) {
return i(e[a][1][t] || t);
}, u, u.exports, t, e, n, r);
}
return n[a].exports;
}
for (var o = "function" == typeof __require && __require, a = 0; a < r.length; a++) i(r[a]);
return i;
}({
HighWeightBoardAroundBlinkTrait: [ function(t, e, n) {
"use strict";
cc._RF.push(e, "3cec23+EzRKHabqiPl+aB6m", "HighWeightBoardAroundBlinkTrait");
var r, i = this && this.__extends || (r = function(t, e) {
return (r = Object.setPrototypeOf || {
__proto__: []
} instanceof Array && function(t, e) {
t.__proto__ = e;
} || function(t, e) {
for (var n in e) Object.prototype.hasOwnProperty.call(e, n) && (t[n] = e[n]);
})(t, e);
}, function(t, e) {
r(t, e);
function n() {
this.constructor = t;
}
t.prototype = null === e ? Object.create(e) : (n.prototype = e.prototype, new n());
}), o = this && this.__decorate || function(t, e, n, r) {
var i, o = arguments.length, a = o < 3 ? e : null === r ? r = Object.getOwnPropertyDescriptor(e, n) : r;
if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) a = Reflect.decorate(t, e, n, r); else for (var s = t.length - 1; s >= 0; s--) (i = t[s]) && (a = (o < 3 ? i(a) : o > 3 ? i(e, n, a) : i(e, n)) || a);
return o > 3 && a && Object.defineProperty(e, n, a), a;
}, a = this && this.__awaiter || function(t, e, n, r) {
return new (n || (n = Promise))(function(i, o) {
function a(t) {
try {
c(r.next(t));
} catch (t) {
o(t);
}
}
function s(t) {
try {
c(r.throw(t));
} catch (t) {
o(t);
}
}
function c(t) {
t.done ? i(t.value) : (e = t.value, e instanceof n ? e : new n(function(t) {
t(e);
})).then(a, s);
var e;
}
c((r = r.apply(t, e || [])).next());
});
}, s = this && this.__generator || function(t, e) {
var n, r, i, o, a = {
label: 0,
sent: function() {
if (1 & i[0]) throw i[1];
return i[1];
},
trys: [],
ops: []
};
return o = {
next: s(0),
throw: s(1),
return: s(2)
}, "function" == typeof Symbol && (o[Symbol.iterator] = function() {
return this;
}), o;
function s(t) {
return function(e) {
return c([ t, e ]);
};
}
function c(o) {
if (n) throw new TypeError("Generator is already executing.");
for (;a; ) try {
if (n = 1, r && (i = 2 & o[0] ? r.return : o[0] ? r.throw || ((i = r.return) && i.call(r), 
0) : r.next) && !(i = i.call(r, o[1])).done) return i;
(r = 0, i) && (o = [ 2 & o[0], i.value ]);
switch (o[0]) {
case 0:
case 1:
i = o;
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
if (!(i = a.trys, i = i.length > 0 && i[i.length - 1]) && (6 === o[0] || 2 === o[0])) {
a = 0;
continue;
}
if (3 === o[0] && (!i || o[1] > i[0] && o[1] < i[3])) {
a.label = o[1];
break;
}
if (6 === o[0] && a.label < i[1]) {
a.label = i[1];
i = o;
break;
}
if (i && a.label < i[2]) {
a.label = i[2];
a.ops.push(o);
break;
}
i[2] && a.ops.pop();
a.trys.pop();
continue;
}
o = e.call(t, a);
} catch (t) {
o = [ 6, t ];
r = 0;
} finally {
n = i = 0;
}
if (5 & o[0]) throw o[1];
return {
value: o[0] ? o[1] : void 0,
done: !0
};
}
};
Object.defineProperty(n, "__esModule", {
value: !0
});
n.HighWeightBoardAroundBlinkTrait = void 0;
var c = function(t) {
i(e, t);
function e() {
var e = null !== t && t.apply(this, arguments) || this;
e.curEffect = null;
e.curEffectSkinId = null;
e.isNewGame = !1;
return e;
}
e.prototype.registerTraitEventsMethods = function() {
return [ {
className: "ClassGame_Proxy",
methodName: "onClassGameStart"
}, {
className: "ClassRevive_Proxy",
methodName: "onRevive_Success"
}, {
className: "ClassGame_Proxy",
methodName: "onGameBackHome"
}, {
className: "ClassBoardEffect_Proxy",
methodName: "onTouchEnd"
} ];
};
e.prototype.onActive = function(t) {
if (hs.tp.isClassGame_ProxyOnClassGameStart(t)) {
this.gameStartInit();
if (this.isNewGame) this.judgeWeight(); else if (this.curEffect) this.curEffect.active = !0; else {
var e = storage.getItem("HighWeightBoardAroundBlinkData", {
isShowLight: !1,
animName: null
}), n = e.isShowLight, r = e.animName;
n && this.playEffect(null != r ? r : null);
}
}
if (hs.tp.isClassBoardEffect_ProxyOnTouchEnd(t)) {
var i = !0;
hs.classBlocksProducerInfo.producerBlocks.forEach(function(t) {
-1 !== t && (i = !1);
});
if (i) {
this.judgeChangeState();
this.judgeWeight();
}
}
hs.tp.isClassRevive_ProxyOnRevive_Success(t) && this.judgeWeight();
hs.tp.isClassGame_ProxyOnGameStart(t) && (this.isNewGame = t.args[0].data.newGame);
hs.tp.isClassGame_ProxyOnGameBackHome(t) && this.curEffect && (this.curEffect.active = !1);
};
e.prototype.isWeightThreshold = function(t) {
return t > this.props.weightThreshold;
};
e.prototype.judgeChangeState = function() {
var t = hs.binarySupport.getWeightValue(hs.boardInfo.faceBlocks);
this.isWeightThreshold(t) ? this.curEffect && !1 !== this.curEffect.active || this.changeState(!0) : this.curEffect && !0 === this.curEffect.active && this.changeState(!1);
};
e.prototype.changeState = function() {};
e.prototype.judgeWeight = function() {
return a(this, void 0, void 0, function() {
var t, e;
return s(this, function(n) {
switch (n.label) {
case 0:
t = hs.binarySupport.getWeightValue(hs.boardInfo.faceBlocks);
if (!this.isWeightThreshold(t)) return [ 3, 4 ];
if (this.curEffectSkinId !== hs.skinInfo.currentSkinId && this.curEffect) {
this.curEffect.destroy();
this.curEffect = null;
}
return this.curEffect ? [ 3, 2 ] : [ 4, this.playEffect() ];

case 1:
e = n.sent();
this.setHighWeightBoardAroundBlinkData(!0, e);
return [ 3, 3 ];

case 2:
this.curEffect.active = !0;
n.label = 3;

case 3:
return [ 3, 5 ];

case 4:
if (this.curEffect) {
this.curEffect.destroy();
this.curEffect = null;
}
this.setHighWeightBoardAroundBlinkData(!1, null);
this.cancleHighWeight();
n.label = 5;

case 5:
return [ 2 ];
}
});
});
};
e.prototype.cancleHighWeight = function() {};
e.prototype.gameStartInit = function() {};
e.prototype.setHighWeightBoardAroundBlinkData = function(t, e) {
hs.gameInfo.gameMode === hs.GameMode.Chapter ? storage.setItem("ChapterHighWeightBoardAroundBlinkData", {
isShowLight: t,
animName: e
}) : hs.gameInfo.gameMode === hs.GameMode.Class && storage.setItem("HighWeightBoardAroundBlinkData", {
isShowLight: t,
animName: e
});
};
e.prototype.playEffect = function(t) {
return a(this, void 0, void 0, function() {
var e, n;
return s(this, function(r) {
switch (r.label) {
case 0:
r.trys.push([ 0, 2, , 3 ]);
return [ 4, CinstAsync(hs.Board) ];

case 1:
e = r.sent().node;
if (this.curEffect) {
this.curEffect.destroy();
this.curEffect = null;
}
n = hs.skinInfo.currentSkinId;
if (!t) {
t = "randomcyan";
switch (n) {
case "1012":
t = "skin_012";
break;

case "1021":
t = "skin_021";
break;

case "1025":
t = "skin_025";
break;

case "1038":
t = "skin_038";
break;

default:
t = [ "randomcyan", "randomgreen", "randomyellow" ][hs.randomIntInclusive(0, 2)];
}
}
this.curEffectSkinId = n;
this.curEffect = hs.dragonbonesAnim.play(e, {
armatureName: "armatureName",
animationName: t,
playTimes: 0
}, {
bundleName: "HighWeightBoardAroundBlinkTrait",
dragonAssetUrl: "dragonbones/gameplay_bg_skinlight_ske",
dragonAtlasAssetUrl: "dragonbones/gameplay_bg_skinlight_tex"
});
this.curEffect.y = -125;
this.playEffectComplete(t);
return [ 2, t ];

case 2:
r.sent();
return [ 3, 3 ];

case 3:
return [ 2 ];
}
});
});
};
e.prototype.playEffectComplete = function() {};
e.prototype.setCurEffect = function(t, e) {
this.curEffect = t;
void 0 !== e && (this.curEffectSkinId = e);
};
e.prototype.clearCurEffect = function() {
this.curEffect = null;
};
return o([ classId("HighWeightBoardAroundBlinkTrait"), classMethodWatch() ], e);
}(Trait);
n.HighWeightBoardAroundBlinkTrait = c;
cc._RF.pop();
}, {} ],
HighWeightBoardAroundBlink_comparisonNew_Trait: [ function(t, e, n) {
"use strict";
cc._RF.push(e, "eaf31zA4xBEnbd9y3zcg2Lf", "HighWeightBoardAroundBlink_comparisonNew_Trait");
var r, i = this && this.__extends || (r = function(t, e) {
return (r = Object.setPrototypeOf || {
__proto__: []
} instanceof Array && function(t, e) {
t.__proto__ = e;
} || function(t, e) {
for (var n in e) Object.prototype.hasOwnProperty.call(e, n) && (t[n] = e[n]);
})(t, e);
}, function(t, e) {
r(t, e);
function n() {
this.constructor = t;
}
t.prototype = null === e ? Object.create(e) : (n.prototype = e.prototype, new n());
}), o = this && this.__decorate || function(t, e, n, r) {
var i, o = arguments.length, a = o < 3 ? e : null === r ? r = Object.getOwnPropertyDescriptor(e, n) : r;
if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) a = Reflect.decorate(t, e, n, r); else for (var s = t.length - 1; s >= 0; s--) (i = t[s]) && (a = (o < 3 ? i(a) : o > 3 ? i(e, n, a) : i(e, n)) || a);
return o > 3 && a && Object.defineProperty(e, n, a), a;
}, a = this && this.__awaiter || function(t, e, n, r) {
return new (n || (n = Promise))(function(i, o) {
function a(t) {
try {
c(r.next(t));
} catch (t) {
o(t);
}
}
function s(t) {
try {
c(r.throw(t));
} catch (t) {
o(t);
}
}
function c(t) {
t.done ? i(t.value) : (e = t.value, e instanceof n ? e : new n(function(t) {
t(e);
})).then(a, s);
var e;
}
c((r = r.apply(t, e || [])).next());
});
}, s = this && this.__generator || function(t, e) {
var n, r, i, o, a = {
label: 0,
sent: function() {
if (1 & i[0]) throw i[1];
return i[1];
},
trys: [],
ops: []
};
return o = {
next: s(0),
throw: s(1),
return: s(2)
}, "function" == typeof Symbol && (o[Symbol.iterator] = function() {
return this;
}), o;
function s(t) {
return function(e) {
return c([ t, e ]);
};
}
function c(o) {
if (n) throw new TypeError("Generator is already executing.");
for (;a; ) try {
if (n = 1, r && (i = 2 & o[0] ? r.return : o[0] ? r.throw || ((i = r.return) && i.call(r), 
0) : r.next) && !(i = i.call(r, o[1])).done) return i;
(r = 0, i) && (o = [ 2 & o[0], i.value ]);
switch (o[0]) {
case 0:
case 1:
i = o;
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
if (!(i = a.trys, i = i.length > 0 && i[i.length - 1]) && (6 === o[0] || 2 === o[0])) {
a = 0;
continue;
}
if (3 === o[0] && (!i || o[1] > i[0] && o[1] < i[3])) {
a.label = o[1];
break;
}
if (6 === o[0] && a.label < i[1]) {
a.label = i[1];
i = o;
break;
}
if (i && a.label < i[2]) {
a.label = i[2];
a.ops.push(o);
break;
}
i[2] && a.ops.pop();
a.trys.pop();
continue;
}
o = e.call(t, a);
} catch (t) {
o = [ 6, t ];
r = 0;
} finally {
n = i = 0;
}
if (5 & o[0]) throw o[1];
return {
value: o[0] ? o[1] : void 0,
done: !0
};
}
};
Object.defineProperty(n, "__esModule", {
value: !0
});
n.HighWeightBoardAroundBlink_comparisonNew_Trait = void 0;
var c = function(t) {
i(e, t);
function e() {
return null !== t && t.apply(this, arguments) || this;
}
e.prototype.playEffect = function(t) {
return a(this, void 0, void 0, function() {
var e, n, r;
return s(this, function(i) {
switch (i.label) {
case 0:
i.trys.push([ 0, 2, , 3 ]);
return [ 4, CinstAsync(hs.Board) ];

case 1:
e = i.sent().node;
if (this.curEffect) {
this.curEffect.destroy();
this.curEffect = null;
}
n = hs.skinInfo.currentSkinId;
if (!t) {
t = "randomcyan";
switch (n) {
case "1012":
t = "skin_012";
break;

case "1021":
t = "skin_021";
break;

case "1025":
t = "skin_025";
break;

case "1038":
t = "skin_038";
break;

default:
t = [ "randomcyan", "randomgreen", "randomyellow" ][hs.randomIntInclusive(0, 2)];
}
}
this.curEffectSkinId = n;
if (!(r = hs.spineAnim.play(e, {
bundleName: "HighWeightBoardAroundBlinkTrait",
skeletonDataUrl: "dragonbones/optimization/gameplay_bg_skinlight",
animationName: t,
loop: !0,
frameSplitting: !0,
completeRemove: !1,
premultipliedAlpha: !1
})) || !cc.isValid(r)) {
this.curEffect = null;
return [ 2, null ];
}
this.curEffect = r;
this.curEffect.y = -125;
this.playEffectComplete(t);
return [ 2, t ];

case 2:
i.sent();
return [ 3, 3 ];

case 3:
return [ 2 ];
}
});
});
};
return o([ classId("HighWeightBoardAroundBlinkTrait", "comparisonNew") ], e);
}(t("./HighWeightBoardAroundBlinkTrait").HighWeightBoardAroundBlinkTrait);
n.HighWeightBoardAroundBlink_comparisonNew_Trait = c;
cc._RF.pop();
}, {
"./HighWeightBoardAroundBlinkTrait": "HighWeightBoardAroundBlinkTrait"
} ],
HighWeightBoardAroundBlink_isOptimization_Trait: [ function(t, e, n) {
"use strict";
cc._RF.push(e, "a7f3cLhm01Kj45sHSs8TV5v", "HighWeightBoardAroundBlink_isOptimization_Trait");
var r, i = this && this.__extends || (r = function(t, e) {
return (r = Object.setPrototypeOf || {
__proto__: []
} instanceof Array && function(t, e) {
t.__proto__ = e;
} || function(t, e) {
for (var n in e) Object.prototype.hasOwnProperty.call(e, n) && (t[n] = e[n]);
})(t, e);
}, function(t, e) {
r(t, e);
function n() {
this.constructor = t;
}
t.prototype = null === e ? Object.create(e) : (n.prototype = e.prototype, new n());
}), o = this && this.__decorate || function(t, e, n, r) {
var i, o = arguments.length, a = o < 3 ? e : null === r ? r = Object.getOwnPropertyDescriptor(e, n) : r;
if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) a = Reflect.decorate(t, e, n, r); else for (var s = t.length - 1; s >= 0; s--) (i = t[s]) && (a = (o < 3 ? i(a) : o > 3 ? i(e, n, a) : i(e, n)) || a);
return o > 3 && a && Object.defineProperty(e, n, a), a;
}, a = this && this.__awaiter || function(t, e, n, r) {
return new (n || (n = Promise))(function(i, o) {
function a(t) {
try {
c(r.next(t));
} catch (t) {
o(t);
}
}
function s(t) {
try {
c(r.throw(t));
} catch (t) {
o(t);
}
}
function c(t) {
t.done ? i(t.value) : (e = t.value, e instanceof n ? e : new n(function(t) {
t(e);
})).then(a, s);
var e;
}
c((r = r.apply(t, e || [])).next());
});
}, s = this && this.__generator || function(t, e) {
var n, r, i, o, a = {
label: 0,
sent: function() {
if (1 & i[0]) throw i[1];
return i[1];
},
trys: [],
ops: []
};
return o = {
next: s(0),
throw: s(1),
return: s(2)
}, "function" == typeof Symbol && (o[Symbol.iterator] = function() {
return this;
}), o;
function s(t) {
return function(e) {
return c([ t, e ]);
};
}
function c(o) {
if (n) throw new TypeError("Generator is already executing.");
for (;a; ) try {
if (n = 1, r && (i = 2 & o[0] ? r.return : o[0] ? r.throw || ((i = r.return) && i.call(r), 
0) : r.next) && !(i = i.call(r, o[1])).done) return i;
(r = 0, i) && (o = [ 2 & o[0], i.value ]);
switch (o[0]) {
case 0:
case 1:
i = o;
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
if (!(i = a.trys, i = i.length > 0 && i[i.length - 1]) && (6 === o[0] || 2 === o[0])) {
a = 0;
continue;
}
if (3 === o[0] && (!i || o[1] > i[0] && o[1] < i[3])) {
a.label = o[1];
break;
}
if (6 === o[0] && a.label < i[1]) {
a.label = i[1];
i = o;
break;
}
if (i && a.label < i[2]) {
a.label = i[2];
a.ops.push(o);
break;
}
i[2] && a.ops.pop();
a.trys.pop();
continue;
}
o = e.call(t, a);
} catch (t) {
o = [ 6, t ];
r = 0;
} finally {
n = i = 0;
}
if (5 & o[0]) throw o[1];
return {
value: o[0] ? o[1] : void 0,
done: !0
};
}
};
Object.defineProperty(n, "__esModule", {
value: !0
});
n.HighWeightBoardAroundBlink_isOptimization_Trait = void 0;
var c = t("./HighWeightBoardAroundBlinkTrait"), l = {
clearAnim: {
bundleName: "HighWeightBoardAroundBlinkTrait",
dragonAssetUrl: "dragonbones/gameplay_bg_skinlight_ske",
dragonAtlasAssetUrl: "dragonbones/gameplay_bg_skinlight_tex"
},
clearAnim_new: {
bundleName: "HighWeightBoardAroundBlinkTrait",
dragonAssetUrl: "dragonbones_new/gameplay_bg_skinlight_ske",
dragonAtlasAssetUrl: "dragonbones_new/gameplay_bg_skinlight_tex"
}
}, u = function(t) {
i(e, t);
function e() {
var e = null !== t && t.apply(this, arguments) || this;
e._dragonAssetUrl = l.clearAnim.dragonAssetUrl;
e._dragonAtlasAssetUrl = l.clearAnim.dragonAtlasAssetUrl;
return e;
}
e.prototype.getIsOptimization = function() {
var t, e;
return null !== (e = null === (t = this.props) || void 0 === t ? void 0 : t.isOptimization) && void 0 !== e && e;
};
e.prototype.getResUrl = function() {
return a(this, void 0, void 0, function() {
return s(this, function(t) {
switch (t.label) {
case 0:
if (!this.getIsOptimization()) {
this._dragonAssetUrl = l.clearAnim.dragonAssetUrl;
this._dragonAtlasAssetUrl = l.clearAnim.dragonAtlasAssetUrl;
return [ 2 ];
}
return [ 4, this.judgmentDragonBones() ];

case 1:
t.sent();
return [ 2 ];
}
});
});
};
e.prototype.judgmentDragonBones = function() {
return a(this, void 0, void 0, function() {
var t, e, n;
return s(this, function(r) {
switch (r.label) {
case 0:
return [ 4, hs.ResLoader.asyncIsBundleAssetDownloaded(this.traitName, l.clearAnim.dragonAssetUrl, {
type: dragonBones.DragonBonesAsset
}) ];

case 1:
t = r.sent();
return [ 4, hs.ResLoader.asyncIsBundleAssetDownloaded(this.traitName, l.clearAnim.dragonAtlasAssetUrl, {
type: dragonBones.DragonBonesAtlasAsset
}) ];

case 2:
e = r.sent();
if (!t && !e) {
this._dragonAssetUrl = l.clearAnim_new.dragonAssetUrl;
this._dragonAtlasAssetUrl = l.clearAnim_new.dragonAtlasAssetUrl;
return [ 2 ];
}
return [ 4, hs.ResLoader.asyncIsBundleAssetDownloaded(this.traitName, l.clearAnim_new.dragonAssetUrl, {
type: dragonBones.DragonBonesAsset
}) ];

case 3:
n = r.sent();
return [ 4, hs.ResLoader.asyncIsBundleAssetDownloaded(this.traitName, l.clearAnim_new.dragonAtlasAssetUrl, {
type: dragonBones.DragonBonesAtlasAsset
}) ];

case 4:
if (r.sent() && n) {
this._dragonAssetUrl = l.clearAnim_new.dragonAssetUrl;
this._dragonAtlasAssetUrl = l.clearAnim_new.dragonAtlasAssetUrl;
}
return [ 2 ];
}
});
});
};
e.prototype.getDragonBonesConfig = function() {
return this._dragonAssetUrl == l.clearAnim_new.dragonAssetUrl && this._dragonAtlasAssetUrl == l.clearAnim_new.dragonAtlasAssetUrl && this.getIsOptimization() ? l.clearAnim_new : l.clearAnim;
};
e.prototype.playEffect = function(t) {
return a(this, void 0, void 0, function() {
var e, n, r;
return s(this, function(i) {
switch (i.label) {
case 0:
i.trys.push([ 0, 3, , 4 ]);
return [ 4, CinstAsync(hs.Board) ];

case 1:
e = i.sent().node;
if (this.curEffect) {
this.curEffect.destroy();
this.curEffect = null;
}
n = hs.skinInfo.currentSkinId;
if (!t) {
t = "randomcyan";
switch (n) {
case "1012":
t = "skin_012";
break;

case "1021":
t = "skin_021";
break;

case "1025":
t = "skin_025";
break;

case "1038":
t = "skin_038";
break;

default:
t = [ "randomcyan", "randomgreen", "randomyellow" ][hs.randomIntInclusive(0, 2)];
}
}
this.curEffectSkinId = n;
return [ 4, this.getResUrl() ];

case 2:
i.sent();
r = this.getDragonBonesConfig();
this.curEffect = hs.dragonbonesAnim.play(e, {
armatureName: "armatureName",
animationName: t,
playTimes: 0
}, {
bundleName: r.bundleName,
dragonAssetUrl: r.dragonAssetUrl,
dragonAtlasAssetUrl: r.dragonAtlasAssetUrl
});
this.curEffect.y = -125;
this.playEffectComplete(t);
return [ 2, t ];

case 3:
i.sent();
return [ 3, 4 ];

case 4:
return [ 2 ];
}
});
});
};
return o([ classId("HighWeightBoardAroundBlinkTrait", "isOptimization") ], e);
}(c.HighWeightBoardAroundBlinkTrait);
n.HighWeightBoardAroundBlink_isOptimization_Trait = u;
cc._RF.pop();
}, {
"./HighWeightBoardAroundBlinkTrait": "HighWeightBoardAroundBlinkTrait"
} ]
}, {}, [ "HighWeightBoardAroundBlinkTrait", "HighWeightBoardAroundBlink_comparisonNew_Trait", "HighWeightBoardAroundBlink_isOptimization_Trait" ]);
//# sourceMappingURL=index.js.map
