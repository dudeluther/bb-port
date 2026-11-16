window.__require = function e(t, n, r) {
function i(o, l) {
if (!n[o]) {
if (!t[o]) {
var s = o.split("/");
s = s[s.length - 1];
if (!t[s]) {
var c = "function" == typeof __require && __require;
if (!l && c) return c(s, !0);
if (a) return a(s, !0);
throw new Error("Cannot find module '" + o + "'");
}
o = s;
}
var u = n[o] = {
exports: {}
};
t[o][0].call(u.exports, function(e) {
return i(t[o][1][e] || e);
}, u, u.exports, e, t, n, r);
}
return n[o].exports;
}
for (var a = "function" == typeof __require && __require, o = 0; o < r.length; o++) i(r[o]);
return i;
}({
ReplaceClearnScreenAniTrait: [ function(e, t, n) {
"use strict";
cc._RF.push(t, "2101erzfXRDvY4eLa+gCV1t", "ReplaceClearnScreenAniTrait");
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
}), a = this && this.__decorate || function(e, t, n, r) {
var i, a = arguments.length, o = a < 3 ? t : null === r ? r = Object.getOwnPropertyDescriptor(t, n) : r;
if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) o = Reflect.decorate(e, t, n, r); else for (var l = e.length - 1; l >= 0; l--) (i = e[l]) && (o = (a < 3 ? i(o) : a > 3 ? i(t, n, o) : i(t, n)) || o);
return a > 3 && o && Object.defineProperty(t, n, o), o;
}, o = this && this.__awaiter || function(e, t, n, r) {
return new (n || (n = Promise))(function(i, a) {
function o(e) {
try {
s(r.next(e));
} catch (e) {
a(e);
}
}
function l(e) {
try {
s(r.throw(e));
} catch (e) {
a(e);
}
}
function s(e) {
e.done ? i(e.value) : (t = e.value, t instanceof n ? t : new n(function(e) {
e(t);
})).then(o, l);
var t;
}
s((r = r.apply(e, t || [])).next());
});
}, l = this && this.__generator || function(e, t) {
var n, r, i, a, o = {
label: 0,
sent: function() {
if (1 & i[0]) throw i[1];
return i[1];
},
trys: [],
ops: []
};
return a = {
next: l(0),
throw: l(1),
return: l(2)
}, "function" == typeof Symbol && (a[Symbol.iterator] = function() {
return this;
}), a;
function l(e) {
return function(t) {
return s([ e, t ]);
};
}
function s(a) {
if (n) throw new TypeError("Generator is already executing.");
for (;o; ) try {
if (n = 1, r && (i = 2 & a[0] ? r.return : a[0] ? r.throw || ((i = r.return) && i.call(r), 
0) : r.next) && !(i = i.call(r, a[1])).done) return i;
(r = 0, i) && (a = [ 2 & a[0], i.value ]);
switch (a[0]) {
case 0:
case 1:
i = a;
break;

case 4:
o.label++;
return {
value: a[1],
done: !1
};

case 5:
o.label++;
r = a[1];
a = [ 0 ];
continue;

case 7:
a = o.ops.pop();
o.trys.pop();
continue;

default:
if (!(i = o.trys, i = i.length > 0 && i[i.length - 1]) && (6 === a[0] || 2 === a[0])) {
o = 0;
continue;
}
if (3 === a[0] && (!i || a[1] > i[0] && a[1] < i[3])) {
o.label = a[1];
break;
}
if (6 === a[0] && o.label < i[1]) {
o.label = i[1];
i = a;
break;
}
if (i && o.label < i[2]) {
o.label = i[2];
o.ops.push(a);
break;
}
i[2] && o.ops.pop();
o.trys.pop();
continue;
}
a = t.call(e, o);
} catch (e) {
a = [ 6, e ];
r = 0;
} finally {
n = i = 0;
}
if (5 & a[0]) throw a[1];
return {
value: a[0] ? a[1] : void 0,
done: !0
};
}
};
Object.defineProperty(n, "__esModule", {
value: !0
});
n.ReplaceClearnScreenAniTrait = n.BUNDLE_NAME = void 0;
n.BUNDLE_NAME = "ReplaceClearnScreenAniTrait";
var s = "prefabs/ClearScreenRain", c = function(e) {
i(t, e);
function t() {
var t = null !== e && e.apply(this, arguments) || this;
t._effectPrefab = null;
t._rainPrefab = null;
t._isAnimPlaying = !1;
t.completeCb = null;
t._animationWaitResolvers = [];
t._pendingSplashCompleteCallback = null;
t._useNewArt = !1;
return t;
}
t.prototype.onCreate = function() {
this.isReuseOptimizeEnable() && this.preLoadRainPrefab();
};
t.prototype.onActive = function(e) {
var t, n = this;
if (hs.tp.isClassBoardSplashAnimation_ProxySetBoardSplashAnimationState(e)) {
e.replace = !0;
e.returnState = !0;
this._pendingSplashCompleteCallback = null === (t = e.args) || void 0 === t ? void 0 : t[3];
var r = this._pendingSplashCompleteCallback;
setTimeoutSafe(function() {
if (n._pendingSplashCompleteCallback === r) {
n._pendingSplashCompleteCallback = null;
null == r || r();
}
}, 2e3);
}
hs.tp.isClassBoardSplashAnimation_ProxyOnBeginClearScreenAnim(e) && setTimeoutSafe(function() {
Cinst(hs.BoardSplashAnimation) && n.showSplashAnimation(e);
}, 200);
(hs.tp.isBoardEffect_CloseGame_ProxyCloseClass(e) || hs.tp.isBoardEffect_EnterGame_ProxyOnGameStart(e)) && this.stopAnim();
if (hs.tp.isClassEncourage_ProxyPlayEncourageUnbelievable(e)) {
if (!this.isTrigger()) return;
e.replace = !0;
}
hs.tp.isClassScoreTip_ProxyPlayClearScreenScoreAnim(e) && (e.replace = !0);
if (hs.tp.isboardSplashAnimationClearScreenEffectWithPutAddRowEffect(e)) {
e.replace = !0;
var i = e.target;
cc.tween(i.node).delay(.2).call(function() {
i.removeBlockHeart(null, !0);
}).start();
}
};
t.prototype.isTrigger = function() {
return !0;
};
t.prototype.isReuseOptimizeEnable = function() {
return !0;
};
t.prototype.preLoadRainPrefab = function() {
var e = this;
this.useNewArt() ? this.newPrelodRes() : hs.ResLoader.loadByBundle(n.BUNDLE_NAME, s, cc.Prefab, function(t, n) {
t || (e._rainPrefab = n);
});
};
t.prototype.resolveAllWaiters = function() {
this._animationWaitResolvers.forEach(function(e) {
return e();
});
this._animationWaitResolvers = [];
};
t.prototype.showSplashAnimation = function() {
var e = this, t = Cinst(hs.Board);
if (t && cc.isValid(t.node) && cc.isValid(t.node.parent)) {
var n, r = t.node.parent, i = hs.storage.getItem("clearScreenEffectContext", null);
if (null == i ? void 0 : i.startPos) {
var a = cc.v2(i.startPos.x, i.startPos.y);
n = r.convertToNodeSpaceAR(a);
} else n = t.node.getPosition();
this.showAnim(r, n, function() {
var t = e._pendingSplashCompleteCallback;
e._pendingSplashCompleteCallback = null;
null == t || t();
});
}
};
t.prototype.showAnim = function(e, t, n) {
return o(this, void 0, void 0, function() {
return l(this, function(r) {
switch (r.label) {
case 0:
return [ 4, hs.nextFrame() ];

case 1:
r.sent();
if (this._isAnimPlaying) return [ 2 ];
if (!e || !cc.isValid(e)) {
null == n || n();
return [ 2 ];
}
this._isAnimPlaying = !0;
this.completeCb = n;
return [ 4, this.creatAndPlayAni(e, t, n) ];

case 2:
r.sent();
return [ 2 ];
}
});
});
};
t.prototype.creatAndPlayAni = function(e, t, n) {
return o(this, void 0, void 0, function() {
var r, i, a, o, s, c = this;
return l(this, function(l) {
switch (l.label) {
case 0:
return this.isReuseOptimizeEnable() ? [ 3, 2 ] : [ 4, this.creatAndPlayAniOriginal(e, t, n) ];

case 1:
l.sent();
return [ 2 ];

case 2:
l.trys.push([ 2, 5, , 6 ]);
return (i = this._rainPrefab) ? [ 3, 4 ] : [ 4, this.asyncLoadPrefab() ];

case 3:
i = l.sent();
l.label = 4;

case 4:
if (!(r = i) || !cc.isValid(r)) return [ 2 ];
this._rainPrefab = r;
if (!e || !cc.isValid(e)) {
this.onAnimationComplete();
null == n || n();
return [ 2 ];
}
(a = this.getOrCreateEffectPrefab(r, e)).setPosition(t);
a.active = !0;
if (o = a.getComponentInChildren(sp.Skeleton)) {
s = this.getSpeed();
o.timeScale = 1 / s;
o.setAnimation(0, "in", !1);
o.setCompleteListener(function() {
c.onAnimationComplete();
null == n || n();
cc.isValid(a) && (a.active = !1);
c.completeCb = null;
});
} else {
this.onAnimationComplete();
null == n || n();
cc.isValid(a) && (a.active = !1);
this.completeCb = null;
}
return [ 3, 6 ];

case 5:
l.sent();
this.onAnimationComplete();
null == n || n();
return [ 3, 6 ];

case 6:
return [ 2 ];
}
});
});
};
t.prototype.getSpeed = function() {
return cc.director._kSpeed || 1;
};
t.prototype.creatAndPlayAniOriginal = function(e, t, n) {
return o(this, void 0, void 0, function() {
var r = this;
return l(this, function(i) {
switch (i.label) {
case 0:
return [ 4, this.asyncLoadPrefab().then(function(i) {
try {
if (!i || !cc.isValid(i)) return;
var a = cc.instantiate(i);
if (!e || !cc.isValid(e)) return;
e.addChild(a);
a.setPosition(t);
r._effectPrefab = a;
var o = a.getComponentInChildren(sp.Skeleton);
if (o) {
var l = cc.director._kSpeed || 1;
o.timeScale = 1 / l;
o.setAnimation(0, "in", !1);
o.setCompleteListener(function() {
r.onAnimationComplete();
null == n || n();
cc.isValid(a) && a.destroy();
r._effectPrefab = null;
r.completeCb = null;
});
} else {
r.onAnimationComplete();
null == n || n();
cc.isValid(a) && a.destroy();
r._effectPrefab = null;
r.completeCb = null;
}
} catch (e) {
r.onAnimationComplete();
null == n || n();
}
}) ];

case 1:
i.sent();
return [ 2 ];
}
});
});
};
t.prototype.getOrCreateEffectPrefab = function(e, t) {
this._effectPrefab && cc.isValid(this._effectPrefab) || (this._effectPrefab = cc.instantiate(e));
if (this._effectPrefab.parent !== t) {
this._effectPrefab.removeFromParent(!1);
t.addChild(this._effectPrefab);
}
return this._effectPrefab;
};
t.prototype.stopAnim = function() {
var e;
if ((this.isReuseOptimizeEnable() || this._isAnimPlaying) && (this._isAnimPlaying || this._effectPrefab)) {
this._effectPrefab && cc.isValid(this._effectPrefab) && this._effectPrefab.destroy();
this.onAnimationComplete();
null === (e = this.completeCb) || void 0 === e || e.call(this);
this._effectPrefab = null;
this.completeCb = null;
var t = this._pendingSplashCompleteCallback;
this._pendingSplashCompleteCallback = null;
null == t || t();
}
};
t.prototype.onAnimationComplete = function() {
if (this._isAnimPlaying) {
this._isAnimPlaying = !1;
this.resolveAllWaiters();
}
};
t.prototype.onAnimationCompletePublic = function() {
if (this._isAnimPlaying) {
this._isAnimPlaying = !1;
this.resolveAllWaiters();
}
};
t.prototype.asyncLoadPrefab = function() {
return o(this, void 0, void 0, function() {
return l(this, function(e) {
switch (e.label) {
case 0:
return this._useNewArt ? [ 3, 2 ] : [ 4, hs.ResLoader.asyncLoadByBundle(n.BUNDLE_NAME, s, cc.Prefab) ];

case 1:
return [ 2, e.sent() ];

case 2:
return [ 4, hs.ResLoader.asyncLoadByBundle(n.BUNDLE_NAME, "prefabs/newArt/ClearScreenRain", cc.Prefab) ];

case 3:
return [ 2, e.sent() ];
}
});
});
};
t.prototype.newPrelodRes = function() {
return o(this, void 0, void 0, function() {
var e, t, r;
return l(this, function(i) {
switch (i.label) {
case 0:
return [ 4, hs.ResLoader.asyncLoadBundle(n.BUNDLE_NAME) ];

case 1:
e = i.sent();
t = "prefabs/newArt/ClearScreenRain";
r = hs.ResLoader.isBundleAssetDownloaded(e, t, {
type: cc.Prefab,
target: "import"
});
this._useNewArt = !1;
if (r) {
this._useNewArt = !0;
this._loadPrefab(t);
} else if (hs.ResLoader.isBundleAssetDownloaded(e, "prefabs/ClearScreenRain", {
type: cc.Prefab,
target: "import"
})) {
this._useNewArt = !1;
this._loadPrefab("prefabs/ClearScreenRain");
hs.ResLoader.loadByBundle(n.BUNDLE_NAME, t, cc.Prefab);
} else {
this._useNewArt = !0;
this._loadPrefab(t);
}
return [ 2 ];
}
});
});
};
t.prototype._loadPrefab = function(e) {
var t = this;
hs.ResLoader.loadByBundle(n.BUNDLE_NAME, e, cc.Prefab, function(e, n) {
e || n && (t._rainPrefab = n);
});
};
t.prototype.useNewArt = function() {
var e, t;
return null !== (t = null === (e = this.props) || void 0 === e ? void 0 : e.useNewArt) && void 0 !== t && t;
};
Object.defineProperty(t.prototype, "onActiveCondition", {
get: function() {
return this.enableTrait();
},
enumerable: !1,
configurable: !0
});
t.prototype.enableTrait = function() {
return !0;
};
return a([ classId("ReplaceClearnScreenAniTrait"), classMethodWatch() ], t);
}(Trait);
n.ReplaceClearnScreenAniTrait = c;
cc._RF.pop();
}, {} ],
ReplaceClearnScreenAni_comparisonNew_Trait: [ function(e, t, n) {
"use strict";
cc._RF.push(t, "f50e6osSl5JT7g1mWxVWP4C", "ReplaceClearnScreenAni_comparisonNew_Trait");
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
}), a = this && this.__decorate || function(e, t, n, r) {
var i, a = arguments.length, o = a < 3 ? t : null === r ? r = Object.getOwnPropertyDescriptor(t, n) : r;
if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) o = Reflect.decorate(e, t, n, r); else for (var l = e.length - 1; l >= 0; l--) (i = e[l]) && (o = (a < 3 ? i(o) : a > 3 ? i(t, n, o) : i(t, n)) || o);
return a > 3 && o && Object.defineProperty(t, n, o), o;
}, o = this && this.__awaiter || function(e, t, n, r) {
return new (n || (n = Promise))(function(i, a) {
function o(e) {
try {
s(r.next(e));
} catch (e) {
a(e);
}
}
function l(e) {
try {
s(r.throw(e));
} catch (e) {
a(e);
}
}
function s(e) {
e.done ? i(e.value) : (t = e.value, t instanceof n ? t : new n(function(e) {
e(t);
})).then(o, l);
var t;
}
s((r = r.apply(e, t || [])).next());
});
}, l = this && this.__generator || function(e, t) {
var n, r, i, a, o = {
label: 0,
sent: function() {
if (1 & i[0]) throw i[1];
return i[1];
},
trys: [],
ops: []
};
return a = {
next: l(0),
throw: l(1),
return: l(2)
}, "function" == typeof Symbol && (a[Symbol.iterator] = function() {
return this;
}), a;
function l(e) {
return function(t) {
return s([ e, t ]);
};
}
function s(a) {
if (n) throw new TypeError("Generator is already executing.");
for (;o; ) try {
if (n = 1, r && (i = 2 & a[0] ? r.return : a[0] ? r.throw || ((i = r.return) && i.call(r), 
0) : r.next) && !(i = i.call(r, a[1])).done) return i;
(r = 0, i) && (a = [ 2 & a[0], i.value ]);
switch (a[0]) {
case 0:
case 1:
i = a;
break;

case 4:
o.label++;
return {
value: a[1],
done: !1
};

case 5:
o.label++;
r = a[1];
a = [ 0 ];
continue;

case 7:
a = o.ops.pop();
o.trys.pop();
continue;

default:
if (!(i = o.trys, i = i.length > 0 && i[i.length - 1]) && (6 === a[0] || 2 === a[0])) {
o = 0;
continue;
}
if (3 === a[0] && (!i || a[1] > i[0] && a[1] < i[3])) {
o.label = a[1];
break;
}
if (6 === a[0] && o.label < i[1]) {
o.label = i[1];
i = a;
break;
}
if (i && o.label < i[2]) {
o.label = i[2];
o.ops.push(a);
break;
}
i[2] && o.ops.pop();
o.trys.pop();
continue;
}
a = t.call(e, o);
} catch (e) {
a = [ 6, e ];
r = 0;
} finally {
n = i = 0;
}
if (5 & a[0]) throw a[1];
return {
value: a[0] ? a[1] : void 0,
done: !0
};
}
};
Object.defineProperty(n, "__esModule", {
value: !0
});
n.ReplaceClearnScreenAni_comparisonNew_Trait = void 0;
var s = e("./ReplaceClearnScreenAniTrait"), c = function(e) {
i(t, e);
function t() {
return null !== e && e.apply(this, arguments) || this;
}
t.prototype.preLoadRainPrefab = function() {
var e = this;
hs.ResLoader.loadByBundle(s.BUNDLE_NAME, "prefabs/newArt/ClearScreenRain", cc.Prefab, function(t, n) {
t || (e._rainPrefab = n);
});
};
t.prototype.asyncLoadPrefab = function() {
return o(this, void 0, void 0, function() {
return l(this, function(e) {
switch (e.label) {
case 0:
return [ 4, hs.ResLoader.asyncLoadByBundle(s.BUNDLE_NAME, "prefabs/newArt/ClearScreenRain", cc.Prefab) ];

case 1:
return [ 2, e.sent() ];
}
});
});
};
return a([ classId("ReplaceClearnScreenAniTrait", "comparisonNew") ], t);
}(s.ReplaceClearnScreenAniTrait);
n.ReplaceClearnScreenAni_comparisonNew_Trait = c;
cc._RF.pop();
}, {
"./ReplaceClearnScreenAniTrait": "ReplaceClearnScreenAniTrait"
} ]
}, {}, [ "ReplaceClearnScreenAniTrait", "ReplaceClearnScreenAni_comparisonNew_Trait" ]);
//# sourceMappingURL=index.js.map
