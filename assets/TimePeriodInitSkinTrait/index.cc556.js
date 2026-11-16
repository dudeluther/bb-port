window.__require = function e(n, t, r) {
function i(s, a) {
if (!t[s]) {
if (!n[s]) {
var u = s.split("/");
u = u[u.length - 1];
if (!n[u]) {
var c = "function" == typeof __require && __require;
if (!a && c) return c(u, !0);
if (o) return o(u, !0);
throw new Error("Cannot find module '" + s + "'");
}
s = u;
}
var l = t[s] = {
exports: {}
};
n[s][0].call(l.exports, function(e) {
return i(n[s][1][e] || e);
}, l, l.exports, e, n, t, r);
}
return t[s].exports;
}
for (var o = "function" == typeof __require && __require, s = 0; s < r.length; s++) i(r[s]);
return i;
}({
TimePeriodInitSkinTrait: [ function(e, n, t) {
"use strict";
cc._RF.push(n, "13268vst8FJfK2mc1QmOJFy", "TimePeriodInitSkinTrait");
var r, i = this && this.__extends || (r = function(e, n) {
return (r = Object.setPrototypeOf || {
__proto__: []
} instanceof Array && function(e, n) {
e.__proto__ = n;
} || function(e, n) {
for (var t in n) Object.prototype.hasOwnProperty.call(n, t) && (e[t] = n[t]);
})(e, n);
}, function(e, n) {
r(e, n);
function t() {
this.constructor = e;
}
e.prototype = null === n ? Object.create(n) : (t.prototype = n.prototype, new t());
}), o = this && this.__decorate || function(e, n, t, r) {
var i, o = arguments.length, s = o < 3 ? n : null === r ? r = Object.getOwnPropertyDescriptor(n, t) : r;
if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) s = Reflect.decorate(e, n, t, r); else for (var a = e.length - 1; a >= 0; a--) (i = e[a]) && (s = (o < 3 ? i(s) : o > 3 ? i(n, t, s) : i(n, t)) || s);
return o > 3 && s && Object.defineProperty(n, t, s), s;
}, s = this && this.__awaiter || function(e, n, t, r) {
return new (t || (t = Promise))(function(i, o) {
function s(e) {
try {
u(r.next(e));
} catch (e) {
o(e);
}
}
function a(e) {
try {
u(r.throw(e));
} catch (e) {
o(e);
}
}
function u(e) {
e.done ? i(e.value) : (n = e.value, n instanceof t ? n : new t(function(e) {
e(n);
})).then(s, a);
var n;
}
u((r = r.apply(e, n || [])).next());
});
}, a = this && this.__generator || function(e, n) {
var t, r, i, o, s = {
label: 0,
sent: function() {
if (1 & i[0]) throw i[1];
return i[1];
},
trys: [],
ops: []
};
return o = {
next: a(0),
throw: a(1),
return: a(2)
}, "function" == typeof Symbol && (o[Symbol.iterator] = function() {
return this;
}), o;
function a(e) {
return function(n) {
return u([ e, n ]);
};
}
function u(o) {
if (t) throw new TypeError("Generator is already executing.");
for (;s; ) try {
if (t = 1, r && (i = 2 & o[0] ? r.return : o[0] ? r.throw || ((i = r.return) && i.call(r), 
0) : r.next) && !(i = i.call(r, o[1])).done) return i;
(r = 0, i) && (o = [ 2 & o[0], i.value ]);
switch (o[0]) {
case 0:
case 1:
i = o;
break;

case 4:
s.label++;
return {
value: o[1],
done: !1
};

case 5:
s.label++;
r = o[1];
o = [ 0 ];
continue;

case 7:
o = s.ops.pop();
s.trys.pop();
continue;

default:
if (!(i = s.trys, i = i.length > 0 && i[i.length - 1]) && (6 === o[0] || 2 === o[0])) {
s = 0;
continue;
}
if (3 === o[0] && (!i || o[1] > i[0] && o[1] < i[3])) {
s.label = o[1];
break;
}
if (6 === o[0] && s.label < i[1]) {
s.label = i[1];
i = o;
break;
}
if (i && s.label < i[2]) {
s.label = i[2];
s.ops.push(o);
break;
}
i[2] && s.ops.pop();
s.trys.pop();
continue;
}
o = n.call(e, s);
} catch (e) {
o = [ 6, e ];
r = 0;
} finally {
t = i = 0;
}
if (5 & o[0]) throw o[1];
return {
value: o[0] ? o[1] : void 0,
done: !0
};
}
};
Object.defineProperty(t, "__esModule", {
value: !0
});
t.TimePeriodInitSkinTrait = void 0;
var u = function(e) {
i(n, e);
function n() {
var n = null !== e && e.apply(this, arguments) || this;
n._shouldTryChangeSkinCached = !1;
n._skinIdBeforeTemp = "";
n._setSkinInfoPromise = null;
return n;
}
n.prototype.onCreate = function() {
if (hs.storage.getItem("TimePeriodInitSkinTrait_T", 0) > 0) this._shouldTryChangeSkinCached = !1; else {
hs.storage.setItem("TimePeriodInitSkinTrait_T", Date.now());
var e = this.getTargetSkinId();
if (e) {
this._shouldTryChangeSkinCached = !0;
this.tryChangeSkin(e);
} else this._shouldTryChangeSkinCached = !1;
}
};
n.prototype.isSkinInfoSkipFinishGuide = function(e) {
if (!hs.classGuideInfo.isFinishedGuide) {
e.returnValue = !0;
e.replace = !0;
}
};
n.prototype.isClassBoardSplashAnimation_ProxyOnBoardSplashAnimationPlay = function(e) {
if (!hs.classGuideInfo.isFinishedGuide) {
var n = e.target;
if (null == n ? void 0 : n.onBoardSplashAnimationPlayComplete) {
n.onBoardSplashAnimationPlayComplete(hs.BoardSplashAnimationPlayType.UP_DOWN);
e.replace = !0;
e.returnState = !0;
}
}
};
n.prototype.isClassGuideLoadBlockSpriteFrame = function(e) {
this._shouldTryChangeSkinCached && this.onClassGuideLoadBlockSpriteFrame(e);
};
n.prototype.tryChangeSkin = function(e) {
return s(this, void 0, Promise, function() {
var n, t;
return a(this, function(r) {
switch (r.label) {
case 0:
return this._shouldTryChangeSkinCached ? [ 4, hs.nextFrame() ] : [ 2 ];

case 1:
r.sent();
return hs.skinLoadInfo.skinResLoadedBarrier.isOpen ? [ 3, 3 ] : [ 4, hs.skinLoadInfo.skinResLoadedBarrier.wait() ];

case 2:
r.sent();
r.label = 3;

case 3:
return [ 4, this.setSkinInfo(e) ];

case 4:
if (!r.sent()) return [ 2 ];
n = hs.skinInfo.currentSkinId;
t = this._skinIdBeforeTemp;
n === e && t && t !== e && hs.skinInfo.setCurrentSkinIdTemporary(t);
hs.skinTraitInfo.changeSkin(e);
return [ 2 ];
}
});
});
};
n.prototype.getTargetSkinId = function() {
var e, n = new Date().getHours();
if (n < 7 || n >= 19) return "";
var t = null !== (e = this.props.daySkinId) && void 0 !== e ? e : 0;
return t ? "" + t : "";
};
n.prototype.setSkinInfo = function(e) {
return s(this, void 0, Promise, function() {
return a(this, function(n) {
switch (n.label) {
case 0:
if (!e || hs.skinInfo.hasSkin(e)) return [ 2, !0 ];
if (this._setSkinInfoPromise) return [ 2, this._setSkinInfoPromise ];
this._setSkinInfoPromise = this.loadSkinInfo(e);
n.label = 1;

case 1:
n.trys.push([ 1, , 3, 4 ]);
return [ 4, this._setSkinInfoPromise ];

case 2:
return [ 2, n.sent() ];

case 3:
this._setSkinInfoPromise = null;
return [ 7 ];

case 4:
return [ 2 ];
}
});
});
};
n.prototype.loadSkinInfo = function(e) {
return s(this, void 0, Promise, function() {
var n;
return a(this, function(t) {
switch (t.label) {
case 0:
return [ 4, hs.ResLoader.asyncLoad("configs/skin/default/skin_" + e, cc.JsonAsset) ];

case 1:
n = t.sent();
if (!cc.isValid(n)) return [ 2, !1 ];
if (!n.json) return [ 2, !1 ];
hs.skinInfo.setSkinMap(e, n.json);
return [ 2, !0 ];
}
});
});
};
n.prototype.onClassGuideLoadBlockSpriteFrame = function(e) {
return s(this, void 0, Promise, function() {
var n, t, r, i;
return a(this, function(o) {
switch (o.label) {
case 0:
n = e.args[0];
t = e.args[1];
if (!n || !cc.isValid(n.node) || t <= 0 || t > 100) return [ 2 ];
if (!(r = this.getTargetSkinId())) return [ 2 ];
e.replace = !0;
return [ 4, this.resolveGuideBlockSpriteFrame(r, t) ];

case 1:
if ((i = o.sent()) && cc.isValid(n.node)) {
n.spriteFrame = i;
return [ 2 ];
}
e.originalCaller();
return [ 2 ];
}
});
});
};
n.prototype.resolveGuideBlockSpriteFrame = function(e, n) {
return s(this, void 0, Promise, function() {
var t, r;
return a(this, function(i) {
switch (i.label) {
case 0:
return [ 4, this.setSkinInfo(e) ];

case 1:
return i.sent() && (t = this.getSkinCenterColorParam(e, n)) ? hs.skinLoadInfo.skinResLoadedBarrier.isOpen ? [ 3, 3 ] : [ 4, hs.skinLoadInfo.skinResLoadedBarrier.wait() ] : [ 2, null ];

case 2:
i.sent();
i.label = 3;

case 3:
if (hs.skinInfo.currentSkinId !== e) {
this._skinIdBeforeTemp || (this._skinIdBeforeTemp = hs.skinInfo.currentSkinId);
hs.skinInfo.setCurrentSkinIdTemporary(e);
}
return (r = hs.skinAtlas.getBlockSpriteFrame(t, n)) ? [ 3, 5 ] : [ 4, hs.skinAtlas.createBlockAtlas() ];

case 4:
i.sent();
r = hs.skinAtlas.getBlockSpriteFrame(t, n);
i.label = 5;

case 5:
return [ 2, r ];
}
});
});
};
n.prototype.getSkinCenterColorParam = function(e, n) {
var t, r, i, o = hs.skinInfo.getSkinInfoBySkinId(e);
if (!o) return "";
var s = o["block" + n];
return null !== (i = null === (r = null === (t = null == s ? void 0 : s.colorList) || void 0 === t ? void 0 : t[4]) || void 0 === r ? void 0 : r.colorParam) && void 0 !== i ? i : "";
};
return o([ classId("TimePeriodInitSkinTrait") ], n);
}(Trait);
t.TimePeriodInitSkinTrait = u;
cc._RF.pop();
}, {} ]
}, {}, [ "TimePeriodInitSkinTrait" ]);
//# sourceMappingURL=index.js.map
