window.__require = function t(e, o, r) {
function n(s, a) {
if (!o[s]) {
if (!e[s]) {
var c = s.split("/");
c = c[c.length - 1];
if (!e[c]) {
var f = "function" == typeof __require && __require;
if (!a && f) return f(c, !0);
if (i) return i(c, !0);
throw new Error("Cannot find module '" + s + "'");
}
s = c;
}
var u = o[s] = {
exports: {}
};
e[s][0].call(u.exports, function(t) {
return n(e[s][1][t] || t);
}, u, u.exports, t, e, o, r);
}
return o[s].exports;
}
for (var i = "function" == typeof __require && __require, s = 0; s < r.length; s++) n(r[s]);
return n;
}({
ComboButterflyBorderEffectTrait_comparisonNew_Trait: [ function(t, e, o) {
"use strict";
cc._RF.push(e, "124danupAxL47fHI+MT/oXX", "ComboButterflyBorderEffectTrait_comparisonNew_Trait");
var r, n = this && this.__extends || (r = function(t, e) {
return (r = Object.setPrototypeOf || {
__proto__: []
} instanceof Array && function(t, e) {
t.__proto__ = e;
} || function(t, e) {
for (var o in e) Object.prototype.hasOwnProperty.call(e, o) && (t[o] = e[o]);
})(t, e);
}, function(t, e) {
r(t, e);
function o() {
this.constructor = t;
}
t.prototype = null === e ? Object.create(e) : (o.prototype = e.prototype, new o());
}), i = this && this.__decorate || function(t, e, o, r) {
var n, i = arguments.length, s = i < 3 ? e : null === r ? r = Object.getOwnPropertyDescriptor(e, o) : r;
if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) s = Reflect.decorate(t, e, o, r); else for (var a = t.length - 1; a >= 0; a--) (n = t[a]) && (s = (i < 3 ? n(s) : i > 3 ? n(e, o, s) : n(e, o)) || s);
return i > 3 && s && Object.defineProperty(e, o, s), s;
}, s = this && this.__awaiter || function(t, e, o, r) {
return new (o || (o = Promise))(function(n, i) {
function s(t) {
try {
c(r.next(t));
} catch (t) {
i(t);
}
}
function a(t) {
try {
c(r.throw(t));
} catch (t) {
i(t);
}
}
function c(t) {
t.done ? n(t.value) : (e = t.value, e instanceof o ? e : new o(function(t) {
t(e);
})).then(s, a);
var e;
}
c((r = r.apply(t, e || [])).next());
});
}, a = this && this.__generator || function(t, e) {
var o, r, n, i, s = {
label: 0,
sent: function() {
if (1 & n[0]) throw n[1];
return n[1];
},
trys: [],
ops: []
};
return i = {
next: a(0),
throw: a(1),
return: a(2)
}, "function" == typeof Symbol && (i[Symbol.iterator] = function() {
return this;
}), i;
function a(t) {
return function(e) {
return c([ t, e ]);
};
}
function c(i) {
if (o) throw new TypeError("Generator is already executing.");
for (;s; ) try {
if (o = 1, r && (n = 2 & i[0] ? r.return : i[0] ? r.throw || ((n = r.return) && n.call(r), 
0) : r.next) && !(n = n.call(r, i[1])).done) return n;
(r = 0, n) && (i = [ 2 & i[0], n.value ]);
switch (i[0]) {
case 0:
case 1:
n = i;
break;

case 4:
s.label++;
return {
value: i[1],
done: !1
};

case 5:
s.label++;
r = i[1];
i = [ 0 ];
continue;

case 7:
i = s.ops.pop();
s.trys.pop();
continue;

default:
if (!(n = s.trys, n = n.length > 0 && n[n.length - 1]) && (6 === i[0] || 2 === i[0])) {
s = 0;
continue;
}
if (3 === i[0] && (!n || i[1] > n[0] && i[1] < n[3])) {
s.label = i[1];
break;
}
if (6 === i[0] && s.label < n[1]) {
s.label = n[1];
n = i;
break;
}
if (n && s.label < n[2]) {
s.label = n[2];
s.ops.push(i);
break;
}
n[2] && s.ops.pop();
s.trys.pop();
continue;
}
i = e.call(t, s);
} catch (t) {
i = [ 6, t ];
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
o.ComboButterflyBorderEffectTrait_comparisonNew_Trait = void 0;
var c = function(t) {
n(e, t);
function e() {
return null !== t && t.apply(this, arguments) || this;
}
e.prototype.loadPrefab = function() {
return s(this, void 0, void 0, function() {
var t, e = this;
return a(this, function(o) {
switch (o.label) {
case 0:
if (cc.isValid(this.top_ske)) return [ 2 ];
o.label = 1;

case 1:
o.trys.push([ 1, 3, , 4 ]);
return [ 4, hs.ResLoader.asyncLoadByBundle(this.traitName, "prefabs/butterflyEff_comparisonNew", cc.Prefab) ];

case 2:
t = o.sent();
if (cc.isValid(this.top_ske)) return [ 2 ];
this.top_ske = cc.instantiate(t).getComponent(sp.Skeleton);
this.bottom_ske = cc.instantiate(t).getComponent(sp.Skeleton);
this.top_ske.setCompleteListener(function() {
e.removeEffect();
}.bind(this));
return [ 3, 4 ];

case 3:
o.sent();
return [ 3, 4 ];

case 4:
return [ 2 ];
}
});
});
};
e.prototype.removeEffect = function() {
cc.isValid(this.top_ske) && this.top_ske.node.removeFromParent();
cc.isValid(this.bottom_ske) && this.bottom_ske.node.removeFromParent();
};
e.prototype.showEffect = function() {
var t = Cinst(hs.Board);
if (cc.isValid(this.top_ske) && cc.isValid(t)) {
this.top_ske.node.parent != t.node && t.node.addChild(this.top_ske.node);
this.bottom_ske.node.parent != t.node && t.node.addChild(this.bottom_ske.node);
this.bottom_ske.node.setSiblingIndex(0);
this.top_ske.node.setSiblingIndex(this.top_ske.node.parent.childrenCount - 1);
this.top_ske.setAnimation(0, "in1", !1);
this.bottom_ske.setAnimation(0, "in2", !1);
}
};
e.prototype.showEffectOnBoarder = function() {
var t = Cinst(hs.ClassGame);
if (cc.isValid(t) && cc.isValid(this.bottom_ske) && cc.isValid(this.top_ske)) {
if (this.bottom_ske.node.parent != t.boardContainer) {
t.boardContainer.addChild(this.bottom_ske.node);
this.bottom_ske.node.zIndex = 501;
}
if (this.top_ske.node.parent != t.boardContainer) {
t.boardContainer.addChild(this.top_ske.node);
this.top_ske.node.zIndex = 502;
}
this.bottom_ske.node.setPosition(0, 128);
this.top_ske.node.setPosition(0, 128);
this.top_ske.setAnimation(0, "in1", !1);
this.bottom_ske.setAnimation(0, "in2", !1);
}
};
return i([ classId("ComboButterflyBorderEffectTrait", "comparisonNew") ], e);
}(t("./ComboButterflyBorderEffectTrait").ComboButterflyBorderEffectTrait);
o.ComboButterflyBorderEffectTrait_comparisonNew_Trait = c;
cc._RF.pop();
}, {
"./ComboButterflyBorderEffectTrait": "ComboButterflyBorderEffectTrait"
} ],
ComboButterflyBorderEffectTrait: [ function(t, e, o) {
"use strict";
cc._RF.push(e, "f687b5b5uJEBIElVnTwBkfh", "ComboButterflyBorderEffectTrait");
var r, n = this && this.__extends || (r = function(t, e) {
return (r = Object.setPrototypeOf || {
__proto__: []
} instanceof Array && function(t, e) {
t.__proto__ = e;
} || function(t, e) {
for (var o in e) Object.prototype.hasOwnProperty.call(e, o) && (t[o] = e[o]);
})(t, e);
}, function(t, e) {
r(t, e);
function o() {
this.constructor = t;
}
t.prototype = null === e ? Object.create(e) : (o.prototype = e.prototype, new o());
}), i = this && this.__decorate || function(t, e, o, r) {
var n, i = arguments.length, s = i < 3 ? e : null === r ? r = Object.getOwnPropertyDescriptor(e, o) : r;
if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) s = Reflect.decorate(t, e, o, r); else for (var a = t.length - 1; a >= 0; a--) (n = t[a]) && (s = (i < 3 ? n(s) : i > 3 ? n(e, o, s) : n(e, o)) || s);
return i > 3 && s && Object.defineProperty(e, o, s), s;
}, s = this && this.__awaiter || function(t, e, o, r) {
return new (o || (o = Promise))(function(n, i) {
function s(t) {
try {
c(r.next(t));
} catch (t) {
i(t);
}
}
function a(t) {
try {
c(r.throw(t));
} catch (t) {
i(t);
}
}
function c(t) {
t.done ? n(t.value) : (e = t.value, e instanceof o ? e : new o(function(t) {
t(e);
})).then(s, a);
var e;
}
c((r = r.apply(t, e || [])).next());
});
}, a = this && this.__generator || function(t, e) {
var o, r, n, i, s = {
label: 0,
sent: function() {
if (1 & n[0]) throw n[1];
return n[1];
},
trys: [],
ops: []
};
return i = {
next: a(0),
throw: a(1),
return: a(2)
}, "function" == typeof Symbol && (i[Symbol.iterator] = function() {
return this;
}), i;
function a(t) {
return function(e) {
return c([ t, e ]);
};
}
function c(i) {
if (o) throw new TypeError("Generator is already executing.");
for (;s; ) try {
if (o = 1, r && (n = 2 & i[0] ? r.return : i[0] ? r.throw || ((n = r.return) && n.call(r), 
0) : r.next) && !(n = n.call(r, i[1])).done) return n;
(r = 0, n) && (i = [ 2 & i[0], n.value ]);
switch (i[0]) {
case 0:
case 1:
n = i;
break;

case 4:
s.label++;
return {
value: i[1],
done: !1
};

case 5:
s.label++;
r = i[1];
i = [ 0 ];
continue;

case 7:
i = s.ops.pop();
s.trys.pop();
continue;

default:
if (!(n = s.trys, n = n.length > 0 && n[n.length - 1]) && (6 === i[0] || 2 === i[0])) {
s = 0;
continue;
}
if (3 === i[0] && (!n || i[1] > n[0] && i[1] < n[3])) {
s.label = i[1];
break;
}
if (6 === i[0] && s.label < n[1]) {
s.label = n[1];
n = i;
break;
}
if (n && s.label < n[2]) {
s.label = n[2];
s.ops.push(i);
break;
}
n[2] && s.ops.pop();
s.trys.pop();
continue;
}
i = e.call(t, s);
} catch (t) {
i = [ 6, t ];
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
o.ComboButterflyBorderEffectTrait = void 0;
var c = function(t) {
n(e, t);
function e() {
var e = null !== t && t.apply(this, arguments) || this;
e.top = null;
e.bottom = null;
return e;
}
e.prototype.onActive = function(t) {
var e;
if (hs.tp.isClassCombo_ProxyOnGameStart(t)) {
this.loadPrefab();
this.removeEffect();
}
if (hs.tp.isClassCombo_ProxyOnTouchEnd(t)) {
if (!this.isTrigger()) return;
var o = t.args[0].state, r = o.eliminateCount, n = o.continuousEliminateTimes;
if (r > 0 && n >= 5) {
t.disable([ "QBlockComboTrait" ]);
(null === (e = this.props) || void 0 === e ? void 0 : e.upBoard) ? this.showEffectOnBoarder() : this.showEffect();
}
}
};
e.prototype.isTrigger = function() {
return !0;
};
e.prototype.loadPrefab = function() {
return s(this, void 0, void 0, function() {
var t, e = this;
return a(this, function(o) {
switch (o.label) {
case 0:
if (cc.isValid(this.top)) return [ 2 ];
o.label = 1;

case 1:
o.trys.push([ 1, 3, , 4 ]);
return [ 4, hs.ResLoader.asyncLoadByBundle(this.traitName, "prefabs/butterflyEff", cc.Prefab) ];

case 2:
t = o.sent();
if (cc.isValid(this.top)) return [ 2 ];
this.top = cc.instantiate(t).getComponent(dragonBones.ArmatureDisplay);
this.bottom = cc.instantiate(t).getComponent(dragonBones.ArmatureDisplay);
this.top.on(dragonBones.EventObject.COMPLETE, function() {
e.removeEffect();
}, this);
return [ 3, 4 ];

case 3:
o.sent();
return [ 3, 4 ];

case 4:
return [ 2 ];
}
});
});
};
e.prototype.removeEffect = function() {
cc.isValid(this.top) && this.top.node.removeFromParent();
cc.isValid(this.bottom) && this.bottom.node.removeFromParent();
};
e.prototype.showEffect = function() {
var t = Cinst(hs.Board);
if (cc.isValid(this.top) && cc.isValid(t)) {
this.top.node.parent != t.node && t.node.addChild(this.top.node);
this.bottom.node.parent != t.node && t.node.addChild(this.bottom.node);
this.bottom.node.setSiblingIndex(0);
this.top.node.setSiblingIndex(this.top.node.parent.childrenCount - 1);
this.top.playAnimation("in1", 1);
this.bottom.playAnimation("in2", 1);
}
};
e.prototype.showEffectOnBoarder = function() {
var t = Cinst(hs.ClassGame);
if (cc.isValid(t) && cc.isValid(this.bottom) && cc.isValid(this.top)) {
if (this.bottom.node.parent != t.boardContainer) {
t.boardContainer.addChild(this.bottom.node);
this.bottom.node.zIndex = 501;
}
if (this.top.node.parent != t.boardContainer) {
t.boardContainer.addChild(this.top.node);
this.top.node.zIndex = 502;
}
this.bottom.node.setPosition(0, 128);
this.top.node.setPosition(0, 128);
this.top.playAnimation("in1", 1);
this.bottom.playAnimation("in2", 1);
}
};
return i([ classId("ComboButterflyBorderEffectTrait"), classMethodWatch() ], e);
}(Trait);
o.ComboButterflyBorderEffectTrait = c;
cc._RF.pop();
}, {} ],
ComboButterflyBorderEffect_isOptimization_Trait: [ function(t, e, o) {
"use strict";
cc._RF.push(e, "b8d4fkCXD5Kf44rnG0eT3sF", "ComboButterflyBorderEffect_isOptimization_Trait");
var r, n = this && this.__extends || (r = function(t, e) {
return (r = Object.setPrototypeOf || {
__proto__: []
} instanceof Array && function(t, e) {
t.__proto__ = e;
} || function(t, e) {
for (var o in e) Object.prototype.hasOwnProperty.call(e, o) && (t[o] = e[o]);
})(t, e);
}, function(t, e) {
r(t, e);
function o() {
this.constructor = t;
}
t.prototype = null === e ? Object.create(e) : (o.prototype = e.prototype, new o());
}), i = this && this.__decorate || function(t, e, o, r) {
var n, i = arguments.length, s = i < 3 ? e : null === r ? r = Object.getOwnPropertyDescriptor(e, o) : r;
if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) s = Reflect.decorate(t, e, o, r); else for (var a = t.length - 1; a >= 0; a--) (n = t[a]) && (s = (i < 3 ? n(s) : i > 3 ? n(e, o, s) : n(e, o)) || s);
return i > 3 && s && Object.defineProperty(e, o, s), s;
}, s = this && this.__awaiter || function(t, e, o, r) {
return new (o || (o = Promise))(function(n, i) {
function s(t) {
try {
c(r.next(t));
} catch (t) {
i(t);
}
}
function a(t) {
try {
c(r.throw(t));
} catch (t) {
i(t);
}
}
function c(t) {
t.done ? n(t.value) : (e = t.value, e instanceof o ? e : new o(function(t) {
t(e);
})).then(s, a);
var e;
}
c((r = r.apply(t, e || [])).next());
});
}, a = this && this.__generator || function(t, e) {
var o, r, n, i, s = {
label: 0,
sent: function() {
if (1 & n[0]) throw n[1];
return n[1];
},
trys: [],
ops: []
};
return i = {
next: a(0),
throw: a(1),
return: a(2)
}, "function" == typeof Symbol && (i[Symbol.iterator] = function() {
return this;
}), i;
function a(t) {
return function(e) {
return c([ t, e ]);
};
}
function c(i) {
if (o) throw new TypeError("Generator is already executing.");
for (;s; ) try {
if (o = 1, r && (n = 2 & i[0] ? r.return : i[0] ? r.throw || ((n = r.return) && n.call(r), 
0) : r.next) && !(n = n.call(r, i[1])).done) return n;
(r = 0, n) && (i = [ 2 & i[0], n.value ]);
switch (i[0]) {
case 0:
case 1:
n = i;
break;

case 4:
s.label++;
return {
value: i[1],
done: !1
};

case 5:
s.label++;
r = i[1];
i = [ 0 ];
continue;

case 7:
i = s.ops.pop();
s.trys.pop();
continue;

default:
if (!(n = s.trys, n = n.length > 0 && n[n.length - 1]) && (6 === i[0] || 2 === i[0])) {
s = 0;
continue;
}
if (3 === i[0] && (!n || i[1] > n[0] && i[1] < n[3])) {
s.label = i[1];
break;
}
if (6 === i[0] && s.label < n[1]) {
s.label = n[1];
n = i;
break;
}
if (n && s.label < n[2]) {
s.label = n[2];
s.ops.push(i);
break;
}
n[2] && s.ops.pop();
s.trys.pop();
continue;
}
i = e.call(t, s);
} catch (t) {
i = [ 6, t ];
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
o.ComboButterflyBorderEffect_isOptimization_Trait = void 0;
var c = t("./ComboButterflyBorderEffectTrait"), f = "prefabs/butterflyEff", u = function(t) {
n(e, t);
function e() {
var e = null !== t && t.apply(this, arguments) || this;
e._prefabUrl = f;
return e;
}
e.prototype.getIsOptimization = function() {
var t, e;
return null !== (e = null === (t = this.props) || void 0 === t ? void 0 : t.isOptimization) && void 0 !== e && e;
};
e.prototype.loadPrefab = function() {
return s(this, void 0, void 0, function() {
var t, e = this;
return a(this, function(o) {
switch (o.label) {
case 0:
if (cc.isValid(this.top)) return [ 2 ];
o.label = 1;

case 1:
o.trys.push([ 1, 4, , 5 ]);
return [ 4, this.getResUrl() ];

case 2:
o.sent();
return [ 4, hs.ResLoader.asyncLoadByBundle(this.traitName, this._prefabUrl, cc.Prefab) ];

case 3:
t = o.sent();
if (cc.isValid(this.top)) return [ 2 ];
this.top = cc.instantiate(t).getComponent(dragonBones.ArmatureDisplay);
this.bottom = cc.instantiate(t).getComponent(dragonBones.ArmatureDisplay);
this.top.on(dragonBones.EventObject.COMPLETE, function() {
e.removeEffect();
}, this);
return [ 3, 5 ];

case 4:
o.sent();
return [ 3, 5 ];

case 5:
return [ 2 ];
}
});
});
};
e.prototype.getResUrl = function() {
return s(this, void 0, void 0, function() {
return a(this, function(t) {
switch (t.label) {
case 0:
if (!this.getIsOptimization()) {
this._prefabUrl = f;
return [ 2 ];
}
return [ 4, hs.ResLoader.asyncIsBundleAssetDownloaded(this.traitName, f, {
type: cc.Prefab
}) ];

case 1:
if (!t.sent()) {
this._prefabUrl = "prefabs/butterflyEff_new";
return [ 2 ];
}
return [ 4, hs.ResLoader.asyncIsBundleAssetDownloaded(this.traitName, "prefabs/butterflyEff_new", {
type: cc.Prefab
}) ];

case 2:
t.sent() && (this._prefabUrl = "prefabs/butterflyEff_new");
return [ 2 ];
}
});
});
};
return i([ classId("ComboButterflyBorderEffectTrait", "isOptimization") ], e);
}(c.ComboButterflyBorderEffectTrait);
o.ComboButterflyBorderEffect_isOptimization_Trait = u;
cc._RF.pop();
}, {
"./ComboButterflyBorderEffectTrait": "ComboButterflyBorderEffectTrait"
} ]
}, {}, [ "ComboButterflyBorderEffectTrait", "ComboButterflyBorderEffectTrait_comparisonNew_Trait", "ComboButterflyBorderEffect_isOptimization_Trait" ]);
//# sourceMappingURL=index.js.map
