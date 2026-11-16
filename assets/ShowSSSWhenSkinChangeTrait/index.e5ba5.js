window.__require = function e(t, n, r) {
function i(a, s) {
if (!n[a]) {
if (!t[a]) {
var c = a.split("/");
c = c[c.length - 1];
if (!t[c]) {
var h = "function" == typeof __require && __require;
if (!s && h) return h(c, !0);
if (o) return o(c, !0);
throw new Error("Cannot find module '" + a + "'");
}
a = c;
}
var l = n[a] = {
exports: {}
};
t[a][0].call(l.exports, function(e) {
return i(t[a][1][e] || e);
}, l, l.exports, e, t, n, r);
}
return n[a].exports;
}
for (var o = "function" == typeof __require && __require, a = 0; a < r.length; a++) i(r[a]);
return i;
}({
ShowSSSWhenSkinChangeTrait: [ function(e, t, n) {
"use strict";
cc._RF.push(t, "f551eT4PHBI2JwyQHTy6fdG", "ShowSSSWhenSkinChangeTrait");
var r, i, o = this && this.__extends || (r = function(e, t) {
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
}), a = this && this.__decorate || function(e, t, n, r) {
var i, o = arguments.length, a = o < 3 ? t : null === r ? r = Object.getOwnPropertyDescriptor(t, n) : r;
if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) a = Reflect.decorate(e, t, n, r); else for (var s = e.length - 1; s >= 0; s--) (i = e[s]) && (a = (o < 3 ? i(a) : o > 3 ? i(t, n, a) : i(t, n)) || a);
return o > 3 && a && Object.defineProperty(t, n, a), a;
}, s = this && this.__awaiter || function(e, t, n, r) {
return new (n || (n = Promise))(function(i, o) {
function a(e) {
try {
c(r.next(e));
} catch (e) {
o(e);
}
}
function s(e) {
try {
c(r.throw(e));
} catch (e) {
o(e);
}
}
function c(e) {
e.done ? i(e.value) : (t = e.value, t instanceof n ? t : new n(function(e) {
e(t);
})).then(a, s);
var t;
}
c((r = r.apply(e, t || [])).next());
});
}, c = this && this.__generator || function(e, t) {
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
function s(e) {
return function(t) {
return c([ e, t ]);
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
o = t.call(e, a);
} catch (e) {
o = [ 6, e ];
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
}, h = this && this.__values || function(e) {
var t = "function" == typeof Symbol && Symbol.iterator, n = t && e[t], r = 0;
if (n) return n.call(e);
if (e && "number" == typeof e.length) return {
next: function() {
e && r >= e.length && (e = void 0);
return {
value: e && e[r++],
done: !e
};
}
};
throw new TypeError(t ? "Object is not iterable." : "Symbol.iterator is not defined.");
}, l = this && this.__read || function(e, t) {
var n = "function" == typeof Symbol && e[Symbol.iterator];
if (!n) return e;
var r, i, o = n.call(e), a = [];
try {
for (;(void 0 === t || t-- > 0) && !(r = o.next()).done; ) a.push(r.value);
} catch (e) {
i = {
error: e
};
} finally {
try {
r && !r.done && (n = o.return) && n.call(o);
} finally {
if (i) throw i.error;
}
}
return a;
};
Object.defineProperty(n, "__esModule", {
value: !0
});
n.ShowSSSWhenSkinChangeTrait = n.SkinRareLevel = void 0;
(function(e) {
e[e.None = 0] = "None";
e[e.S = 1] = "S";
e[e.SS = 2] = "SS";
e[e.SSS = 3] = "SSS";
})(i = n.SkinRareLevel || (n.SkinRareLevel = {}));
var u = function(e) {
o(t, e);
function t() {
var t, n, r = null !== e && e.apply(this, arguments) || this;
r.ColorMatrix = [ [ 6, 6, 6, 6, 6, 6, 6, 6 ], [ 6, 6, 6, 6, 6, 6, 6, 6 ], [ 7, 7, 7, 7, 7, 7, 7, 7 ], [ 7, 7, 7, 7, 7, 7, 7, 7 ], [ 1, 1, 1, 1, 1, 1, 1, 1 ], [ 1, 1, 1, 1, 1, 1, 1, 1 ], [ 3, 3, 3, 3, 3, 3, 3, 3 ], [ 3, 3, 3, 3, 3, 3, 3, 3 ] ];
r.SkinRareAnimName = ((t = {})[i.None] = "", t[i.S] = "s", t[i.SS] = "ss", t[i.SSS] = "sss", 
t);
r.SkinRareLevelMatrix = ((n = {})[i.None] = [], n[i.S] = [ 1020, 1021, 1033, 1002, 1004, 1014, 1038, 1023, 1018, 1026, 1035, 1011, 1005, 1019, 1013, 1015, 1030, 1028 ], 
n[i.SS] = [ 1001, 1025, 1034, 1037, 1036, 1016, 1017, 1031, 1032, 1012, 1006, 1007, 1009, 1039 ], 
n[i.SSS] = [ 1024, 1003, 1027, 1010, 1022, 1029, 1008 ], n);
r._isLoad = !1;
return r;
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
t.prototype.onCreate = function() {
var e, t, n = null === (e = this.props) || void 0 === e ? void 0 : e.lowRamGB;
void 0 !== n && this.isLowDevice(n) && (this.dynamicActive = !1);
var r = null === (t = this.props) || void 0 === t ? void 0 : t.isOnlyShowSSS;
if (void 0 !== r && r) {
this.SkinRareLevelMatrix[i.S].length = 0;
this.SkinRareLevelMatrix[i.SS].length = 0;
}
this.loadNewArtPrefab();
};
t.prototype.isLowDevice = function(e) {
return hs.deviceLowInfo.totalRAMGB <= e;
};
t.prototype.onActive = function(e) {
var t;
if (hs.tp.isClassBoardSplashAnimation_ProxySetBoardSplashAnimationState(e)) {
e.args[0] = -1;
e.args[1] = this.ColorMatrix;
var n = null !== (t = cc.director._kSpeed) && void 0 !== t ? t : 1;
e.args[2] = .07 * n;
}
if (hs.tp.isClassSkin_ProxyOnSkinReadyComplete(e)) {
if (hs.skinInfo.prevSkinId == hs.skinInfo.currentSkinId) return;
var r = Number(hs.skinInfo.currentSkinId), o = this.getRareLevel(r);
if (o === i.None) return;
this.playRareEffect(o);
}
if (hs.tp.isClassEncourage_ProxyPlayEncourageUnbelievable(e)) {
if (!this.isTrigger()) return;
e.replace = !0;
}
};
t.prototype.isTrigger = function() {
return !0;
};
t.prototype.getRareLevel = function(e) {
var t, n;
try {
for (var r = h(Object.entries(this.SkinRareLevelMatrix)), o = r.next(); !o.done; o = r.next()) {
var a = l(o.value, 2), s = a[0];
if (a[1].includes(e)) return s;
}
} catch (e) {
t = {
error: e
};
} finally {
try {
o && !o.done && (n = r.return) && n.call(r);
} finally {
if (t) throw t.error;
}
}
return i.None;
};
t.prototype.getIsUseNewArt = function() {
var e, t;
return null !== (t = null === (e = this.props) || void 0 === e ? void 0 : e.useNewArt) && void 0 !== t && t;
};
t.prototype.loadNewArtPrefab = function() {
return s(this, void 0, void 0, function() {
var e, t;
return c(this, function(n) {
switch (n.label) {
case 0:
n.trys.push([ 0, 3, , 4 ]);
return this.getIsUseNewArt() ? [ 4, hs.ResLoader.asyncLoadByBundle(this.traitName, "prefabs/newArt/showSSSWhenSkinChangeFix", cc.Prefab) ] : [ 3, 2 ];

case 1:
if (e = n.sent()) {
t = cc.instantiate(e);
this._newArtAnim = t.getComponent(dragonBones.ArmatureDisplay);
}
n.label = 2;

case 2:
return [ 3, 4 ];

case 3:
n.sent();
return [ 3, 4 ];

case 4:
return [ 2 ];
}
});
});
};
t.prototype.loadPrefab = function() {
return s(this, void 0, void 0, function() {
var e, t;
return c(this, function(n) {
switch (n.label) {
case 0:
if (this._isLoad || cc.isValid(this._anim)) return [ 2 ];
this._isLoad = !0;
n.label = 1;

case 1:
n.trys.push([ 1, 3, , 4 ]);
return [ 4, hs.ResLoader.asyncLoadByBundle(this.traitName, "prefabs/showSSSWhenSkinChange", cc.Prefab) ];

case 2:
if (e = n.sent()) {
t = cc.instantiate(e);
this._anim = t.getComponent(dragonBones.ArmatureDisplay);
this._anim.addEventListener(dragonBones.EventObject.COMPLETE, this._onPlayComplete, this);
}
return [ 3, 4 ];

case 3:
n.sent();
return [ 3, 4 ];

case 4:
this._isLoad = !1;
return [ 2 ];
}
});
});
};
t.prototype._onPlayComplete = function() {
this._anim.node.removeFromParent();
};
t.prototype.playRareEffect = function(e) {
var t;
return s(this, void 0, void 0, function() {
var n, r, i, o, a, s;
return c(this, function(c) {
switch (c.label) {
case 0:
return cc.isValid(hs.effectLayer) ? cc.isValid(this._anim) ? [ 3, 9 ] : this.getIsUseNewArt() ? [ 4, hs.ResLoader.asyncLoadBundle(this.traitName) ] : [ 3, 7 ] : [ 2 ];

case 1:
if (!(n = c.sent()) || !cc.isValid(n)) return [ 2 ];
r = hs.ResLoader.isBundleAssetDownloaded(n, "prefabs/showSSSWhenSkinChange", {
type: cc.Prefab,
target: "import"
});
if (!this._newArtAnim) return [ 3, 2 ];
this._anim = this._newArtAnim;
if (!cc.isValid(this._anim)) return [ 2 ];
this._anim.addEventListener(dragonBones.EventObject.COMPLETE, this._onPlayComplete, this);
return [ 3, 6 ];

case 2:
return r ? [ 4, this.loadPrefab() ] : [ 3, 4 ];

case 3:
c.sent();
return [ 3, 6 ];

case 4:
return [ 4, this.loadNewArtPrefab() ];

case 5:
c.sent();
if (this._newArtAnim) {
this._anim = this._newArtAnim;
if (!cc.isValid(this._anim)) return [ 2 ];
this._anim.addEventListener(dragonBones.EventObject.COMPLETE, this._onPlayComplete, this);
}
c.label = 6;

case 6:
return [ 3, 9 ];

case 7:
return [ 4, this.loadPrefab() ];

case 8:
c.sent();
c.label = 9;

case 9:
if (!cc.isValid(this._anim)) return [ 2 ];
i = Cinst(hs.Board);
if (!cc.isValid(i) || !i.node.activeInHierarchy) return [ 2 ];
this._anim.node.parent !== hs.effectLayer && hs.effectLayer.addChild(this._anim.node);
o = null !== (t = cc.director._kSpeed) && void 0 !== t ? t : 1;
a = i.node.convertToWorldSpaceAR(cc.v2(0, 0));
s = hs.effectLayer.convertToNodeSpaceAR(a);
this._anim.node.setPosition(s);
this._anim.playAnimation(this.SkinRareAnimName[e], 1);
this._anim.timeScale = 1 / o;
return [ 2 ];
}
});
});
};
return a([ classId("ShowSSSWhenSkinChangeTrait"), classMethodWatch() ], t);
}(Trait);
n.ShowSSSWhenSkinChangeTrait = u;
cc._RF.pop();
}, {} ],
ShowSSSWhenSkinChange_comparisonNew_Trait: [ function(e, t, n) {
"use strict";
cc._RF.push(t, "f7622R7cj5I9pIaoG+iVYZJ", "ShowSSSWhenSkinChange_comparisonNew_Trait");
var r, i = this && this.__extends || (r = function(e, t) {
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
}), o = this && this.__decorate || function(e, t, n, r) {
var i, o = arguments.length, a = o < 3 ? t : null === r ? r = Object.getOwnPropertyDescriptor(t, n) : r;
if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) a = Reflect.decorate(e, t, n, r); else for (var s = e.length - 1; s >= 0; s--) (i = e[s]) && (a = (o < 3 ? i(a) : o > 3 ? i(t, n, a) : i(t, n)) || a);
return o > 3 && a && Object.defineProperty(t, n, a), a;
}, a = this && this.__awaiter || function(e, t, n, r) {
return new (n || (n = Promise))(function(i, o) {
function a(e) {
try {
c(r.next(e));
} catch (e) {
o(e);
}
}
function s(e) {
try {
c(r.throw(e));
} catch (e) {
o(e);
}
}
function c(e) {
e.done ? i(e.value) : (t = e.value, t instanceof n ? t : new n(function(e) {
e(t);
})).then(a, s);
var t;
}
c((r = r.apply(e, t || [])).next());
});
}, s = this && this.__generator || function(e, t) {
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
function s(e) {
return function(t) {
return c([ e, t ]);
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
o = t.call(e, a);
} catch (e) {
o = [ 6, e ];
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
n.ShowSSSWhenSkinChange_comparisonNew_Trait = void 0;
var c = function(e) {
i(t, e);
function t() {
var t = null !== e && e.apply(this, arguments) || this;
t._spineAnim = null;
return t;
}
t.prototype.loadNewArtPrefab = function() {
return a(this, void 0, void 0, function() {
return s(this, function() {
this.loadPrefab();
return [ 2 ];
});
});
};
t.prototype.loadPrefab = function() {
return a(this, void 0, void 0, function() {
var e, t, n = this;
return s(this, function(r) {
switch (r.label) {
case 0:
if (this._isLoad || cc.isValid(this._spineAnim)) return [ 2 ];
this._isLoad = !0;
r.label = 1;

case 1:
r.trys.push([ 1, 3, , 4 ]);
return [ 4, hs.ResLoader.asyncLoadByBundle(this.traitName, "prefabs/showSSSWhenSkinChangeOptimization", cc.Prefab) ];

case 2:
if (e = r.sent()) {
t = cc.instantiate(e);
this._spineAnim = t.getComponent(sp.Skeleton);
this._spineAnim.setCompleteListener(function() {
n._onPlayComplete();
});
}
this._isLoad = !1;
return [ 3, 4 ];

case 3:
r.sent();
this._isLoad = !1;
return [ 3, 4 ];

case 4:
return [ 2 ];
}
});
});
};
t.prototype._onPlayComplete = function() {
cc.isValid(this._spineAnim) && this._spineAnim.node.removeFromParent();
};
t.prototype.playRareEffect = function(e) {
var t;
return a(this, void 0, void 0, function() {
var n, r, i, o;
return s(this, function(a) {
switch (a.label) {
case 0:
return cc.isValid(hs.effectLayer) ? cc.isValid(this._spineAnim) ? [ 3, 2 ] : [ 4, this.loadPrefab() ] : [ 2 ];

case 1:
a.sent();
a.label = 2;

case 2:
if (!cc.isValid(this._spineAnim)) return [ 2 ];
n = Cinst(hs.Board);
if (!cc.isValid(n) || !n.node.activeInHierarchy) return [ 2 ];
this._spineAnim.node.parent !== hs.effectLayer && hs.effectLayer.addChild(this._spineAnim.node);
r = null !== (t = hs.kSpeedInfo.kSpeed) && void 0 !== t ? t : 1;
i = n.node.convertToWorldSpaceAR(cc.v2(0, 0));
o = hs.effectLayer.convertToNodeSpaceAR(i);
this._spineAnim.node.setPosition(o);
this._spineAnim.timeScale = 1 / r;
this._spineAnim.setAnimation(0, this.SkinRareAnimName[e], !1);
return [ 2 ];
}
});
});
};
return o([ classId("ShowSSSWhenSkinChangeTrait", "comparisonNew") ], t);
}(e("./ShowSSSWhenSkinChangeTrait").ShowSSSWhenSkinChangeTrait);
n.ShowSSSWhenSkinChange_comparisonNew_Trait = c;
cc._RF.pop();
}, {
"./ShowSSSWhenSkinChangeTrait": "ShowSSSWhenSkinChangeTrait"
} ],
ShowSSSWhenSkinChange_isOptimization_Trait: [ function(e, t, n) {
"use strict";
cc._RF.push(t, "a7f3cLhm01Kb44sHVt6nw48", "ShowSSSWhenSkinChange_isOptimization_Trait");
var r, i = this && this.__extends || (r = function(e, t) {
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
}), o = this && this.__decorate || function(e, t, n, r) {
var i, o = arguments.length, a = o < 3 ? t : null === r ? r = Object.getOwnPropertyDescriptor(t, n) : r;
if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) a = Reflect.decorate(e, t, n, r); else for (var s = e.length - 1; s >= 0; s--) (i = e[s]) && (a = (o < 3 ? i(a) : o > 3 ? i(t, n, a) : i(t, n)) || a);
return o > 3 && a && Object.defineProperty(t, n, a), a;
}, a = this && this.__awaiter || function(e, t, n, r) {
return new (n || (n = Promise))(function(i, o) {
function a(e) {
try {
c(r.next(e));
} catch (e) {
o(e);
}
}
function s(e) {
try {
c(r.throw(e));
} catch (e) {
o(e);
}
}
function c(e) {
e.done ? i(e.value) : (t = e.value, t instanceof n ? t : new n(function(e) {
e(t);
})).then(a, s);
var t;
}
c((r = r.apply(e, t || [])).next());
});
}, s = this && this.__generator || function(e, t) {
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
function s(e) {
return function(t) {
return c([ e, t ]);
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
o = t.call(e, a);
} catch (e) {
o = [ 6, e ];
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
n.ShowSSSWhenSkinChange_isOptimization_Trait = void 0;
var c = e("./ShowSSSWhenSkinChangeTrait"), h = "prefabs/newArt/showSSSWhenSkinChangeFix", l = "prefabs/showSSSWhenSkinChange", u = function(e) {
i(t, e);
function t() {
var t = null !== e && e.apply(this, arguments) || this;
t._prefabUrl = l;
t._prefabUrlFix = h;
return t;
}
t.prototype.getIsOptimization = function() {
var e, t;
return null !== (t = null === (e = this.props) || void 0 === e ? void 0 : e.isOptimization) && void 0 !== t && t;
};
t.prototype.getResUrl = function() {
return a(this, void 0, void 0, function() {
return s(this, function(e) {
switch (e.label) {
case 0:
if (!this.getIsOptimization()) {
this._prefabUrl = l;
return [ 2 ];
}
return [ 4, hs.ResLoader.asyncIsBundleAssetDownloaded(this.traitName, l, {
type: cc.Prefab
}) ];

case 1:
if (!e.sent()) {
this._prefabUrl = "prefabs/showSSSWhenSkinChange_new";
return [ 2 ];
}
return [ 4, hs.ResLoader.asyncIsBundleAssetDownloaded(this.traitName, "prefabs/showSSSWhenSkinChange_new", {
type: cc.Prefab
}) ];

case 2:
e.sent() && (this._prefabUrl = "prefabs/showSSSWhenSkinChange_new");
return [ 2 ];
}
});
});
};
t.prototype.getResUrlForFix = function() {
return a(this, void 0, void 0, function() {
return s(this, function(e) {
switch (e.label) {
case 0:
if (!this.getIsOptimization()) {
this._prefabUrlFix = h;
return [ 2 ];
}
return [ 4, hs.ResLoader.asyncIsBundleAssetDownloaded(this.traitName, h, {
type: cc.Prefab
}) ];

case 1:
if (!e.sent()) {
this._prefabUrlFix = "prefabs/newArt/showSSSWhenSkinChangeFix_new";
return [ 2 ];
}
return [ 4, hs.ResLoader.asyncIsBundleAssetDownloaded(this.traitName, "prefabs/newArt/showSSSWhenSkinChangeFix_new", {
type: cc.Prefab
}) ];

case 2:
e.sent() && (this._prefabUrlFix = "prefabs/newArt/showSSSWhenSkinChangeFix_new");
return [ 2 ];
}
});
});
};
t.prototype.loadNewArtPrefab = function() {
var e, t;
return a(this, void 0, void 0, function() {
var n, r;
return s(this, function(i) {
switch (i.label) {
case 0:
i.trys.push([ 0, 4, , 5 ]);
return null !== (t = null === (e = this.props) || void 0 === e ? void 0 : e.useNewArt) && void 0 !== t && t ? [ 4, this.getResUrlForFix() ] : [ 3, 3 ];

case 1:
i.sent();
return [ 4, hs.ResLoader.asyncLoadByBundle(this.traitName, this._prefabUrlFix, cc.Prefab) ];

case 2:
if (n = i.sent()) {
r = cc.instantiate(n);
this._newArtAnim = r.getComponent(dragonBones.ArmatureDisplay);
}
i.label = 3;

case 3:
return [ 3, 5 ];

case 4:
i.sent();
return [ 3, 5 ];

case 5:
return [ 2 ];
}
});
});
};
t.prototype.loadPrefab = function() {
return a(this, void 0, void 0, function() {
var e, t;
return s(this, function(n) {
switch (n.label) {
case 0:
if (this._isLoad || cc.isValid(this._anim)) return [ 2 ];
this._isLoad = !0;
return [ 4, this.getResUrl() ];

case 1:
n.sent();
n.label = 2;

case 2:
n.trys.push([ 2, 4, , 5 ]);
return [ 4, hs.ResLoader.asyncLoadByBundle(this.traitName, this._prefabUrl, cc.Prefab) ];

case 3:
if (e = n.sent()) {
t = cc.instantiate(e);
this._anim = t.getComponent(dragonBones.ArmatureDisplay);
this._anim && cc.isValid(this._anim) && this._anim.addEventListener(dragonBones.EventObject.COMPLETE, this._onPlayComplete, this);
}
return [ 3, 5 ];

case 4:
n.sent();
return [ 3, 5 ];

case 5:
this._isLoad = !1;
return [ 2 ];
}
});
});
};
t.prototype.playRareEffect = function(e) {
var t, n, r;
return a(this, void 0, void 0, function() {
var i, o, a, c, h, l;
return s(this, function(s) {
switch (s.label) {
case 0:
return cc.isValid(hs.effectLayer) ? cc.isValid(this._anim) ? [ 3, 10 ] : null !== (n = null === (t = this.props) || void 0 === t ? void 0 : t.useNewArt) && void 0 !== n && n ? [ 4, hs.ResLoader.asyncLoadBundle(this.traitName) ] : [ 3, 8 ] : [ 2 ];

case 1:
return (i = s.sent()) && cc.isValid(i) ? [ 4, this.getResUrl() ] : [ 2 ];

case 2:
s.sent();
o = hs.ResLoader.isBundleAssetDownloaded(i, this._prefabUrl, {
type: cc.Prefab,
target: "import"
});
if (!this._newArtAnim) return [ 3, 3 ];
this._anim = this._newArtAnim;
if (!cc.isValid(this._anim)) return [ 2 ];
this._anim.addEventListener(dragonBones.EventObject.COMPLETE, this._onPlayComplete, this);
return [ 3, 7 ];

case 3:
return o ? [ 4, this.loadPrefab() ] : [ 3, 5 ];

case 4:
s.sent();
return [ 3, 7 ];

case 5:
return [ 4, this.loadNewArtPrefab() ];

case 6:
s.sent();
if (this._newArtAnim) {
this._anim = this._newArtAnim;
if (!cc.isValid(this._anim)) return [ 2 ];
this._anim.addEventListener(dragonBones.EventObject.COMPLETE, this._onPlayComplete, this);
}
s.label = 7;

case 7:
return [ 3, 10 ];

case 8:
return [ 4, this.loadPrefab() ];

case 9:
s.sent();
s.label = 10;

case 10:
if (!cc.isValid(this._anim)) return [ 2 ];
a = Cinst(hs.Board);
if (!cc.isValid(a) || !a.node.activeInHierarchy) return [ 2 ];
this._anim.node.parent !== hs.effectLayer && hs.effectLayer.addChild(this._anim.node);
c = null !== (r = cc.director._kSpeed) && void 0 !== r ? r : 1;
h = a.node.convertToWorldSpaceAR(cc.v2(0, 0));
l = hs.effectLayer.convertToNodeSpaceAR(h);
this._anim.node.setPosition(l);
this._anim.playAnimation(this.SkinRareAnimName[e], 1);
this._anim.timeScale = 1 / c;
return [ 2 ];
}
});
});
};
return o([ classId("ShowSSSWhenSkinChangeTrait", "isOptimization") ], t);
}(c.ShowSSSWhenSkinChangeTrait);
n.ShowSSSWhenSkinChange_isOptimization_Trait = u;
cc._RF.pop();
}, {
"./ShowSSSWhenSkinChangeTrait": "ShowSSSWhenSkinChangeTrait"
} ]
}, {}, [ "ShowSSSWhenSkinChangeTrait", "ShowSSSWhenSkinChange_comparisonNew_Trait", "ShowSSSWhenSkinChange_isOptimization_Trait" ]);
//# sourceMappingURL=index.js.map
