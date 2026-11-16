window.__require = function e(t, n, o) {
function r(c, a) {
if (!n[c]) {
if (!t[c]) {
var s = c.split("/");
s = s[s.length - 1];
if (!t[s]) {
var f = "function" == typeof __require && __require;
if (!a && f) return f(s, !0);
if (i) return i(s, !0);
throw new Error("Cannot find module '" + c + "'");
}
c = s;
}
var u = n[c] = {
exports: {}
};
t[c][0].call(u.exports, function(e) {
return r(t[c][1][e] || e);
}, u, u.exports, e, t, n, o);
}
return n[c].exports;
}
for (var i = "function" == typeof __require && __require, c = 0; c < o.length; c++) r(o[c]);
return r;
}({
IsOpenRainbowPutBlocksEffectTrait: [ function(e, t, n) {
"use strict";
cc._RF.push(t, "0075dVPqFtA3pdGvmZgMnPB", "IsOpenRainbowPutBlocksEffectTrait");
var o, r = this && this.__extends || (o = function(e, t) {
return (o = Object.setPrototypeOf || {
__proto__: []
} instanceof Array && function(e, t) {
e.__proto__ = t;
} || function(e, t) {
for (var n in t) Object.prototype.hasOwnProperty.call(t, n) && (e[n] = t[n]);
})(e, t);
}, function(e, t) {
o(e, t);
function n() {
this.constructor = e;
}
e.prototype = null === t ? Object.create(t) : (n.prototype = t.prototype, new n());
}), i = this && this.__decorate || function(e, t, n, o) {
var r, i = arguments.length, c = i < 3 ? t : null === o ? o = Object.getOwnPropertyDescriptor(t, n) : o;
if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) c = Reflect.decorate(e, t, n, o); else for (var a = e.length - 1; a >= 0; a--) (r = e[a]) && (c = (i < 3 ? r(c) : i > 3 ? r(t, n, c) : r(t, n)) || c);
return i > 3 && c && Object.defineProperty(t, n, c), c;
}, c = this && this.__awaiter || function(e, t, n, o) {
return new (n || (n = Promise))(function(r, i) {
function c(e) {
try {
s(o.next(e));
} catch (e) {
i(e);
}
}
function a(e) {
try {
s(o.throw(e));
} catch (e) {
i(e);
}
}
function s(e) {
e.done ? r(e.value) : (t = e.value, t instanceof n ? t : new n(function(e) {
e(t);
})).then(c, a);
var t;
}
s((o = o.apply(e, t || [])).next());
});
}, a = this && this.__generator || function(e, t) {
var n, o, r, i, c = {
label: 0,
sent: function() {
if (1 & r[0]) throw r[1];
return r[1];
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
function a(e) {
return function(t) {
return s([ e, t ]);
};
}
function s(i) {
if (n) throw new TypeError("Generator is already executing.");
for (;c; ) try {
if (n = 1, o && (r = 2 & i[0] ? o.return : i[0] ? o.throw || ((r = o.return) && r.call(o), 
0) : o.next) && !(r = r.call(o, i[1])).done) return r;
(o = 0, r) && (i = [ 2 & i[0], r.value ]);
switch (i[0]) {
case 0:
case 1:
r = i;
break;

case 4:
c.label++;
return {
value: i[1],
done: !1
};

case 5:
c.label++;
o = i[1];
i = [ 0 ];
continue;

case 7:
i = c.ops.pop();
c.trys.pop();
continue;

default:
if (!(r = c.trys, r = r.length > 0 && r[r.length - 1]) && (6 === i[0] || 2 === i[0])) {
c = 0;
continue;
}
if (3 === i[0] && (!r || i[1] > r[0] && i[1] < r[3])) {
c.label = i[1];
break;
}
if (6 === i[0] && c.label < r[1]) {
c.label = r[1];
r = i;
break;
}
if (r && c.label < r[2]) {
c.label = r[2];
c.ops.push(i);
break;
}
r[2] && c.ops.pop();
c.trys.pop();
continue;
}
i = t.call(e, c);
} catch (e) {
i = [ 6, e ];
o = 0;
} finally {
n = r = 0;
}
if (5 & i[0]) throw i[1];
return {
value: i[0] ? i[1] : void 0,
done: !0
};
}
};
Object.defineProperty(n, "__esModule", {
value: !0
});
n.IsOpenRainbowPutBlocksEffectTrait = void 0;
var s = "IsOpenRainbowPutBlocksEffectTrait", f = function(e) {
r(t, e);
function t() {
var t = null !== e && e.apply(this, arguments) || this;
t._effectPrefab = null;
t._curAniName = "";
t._nodeList = [];
return t;
}
t.prototype.registerTraitEventsMethods = function() {
return [ {
className: "Revive_Proxy",
methodName: "onGameStart"
} ];
};
t.prototype.onCreate = function() {
this.preLoadRes();
};
t.prototype.onActive = function(e) {
var t, n, o = this;
hs.tp.isRevive_ProxyOnGameStart(e) && this._nodeList.forEach(function(e) {
e && cc.isValid(e) && (e.active = !1);
});
if (hs.tp.isBoardEffect_ProxyOnTouchEnd(e)) {
if (!this._effectPrefab) return;
var r = e.args[0];
if (null === (t = null == r ? void 0 : r.state) || void 0 === t ? void 0 : t.putPos) {
var i = hs.boardRendererInfo.blocks, c = this.getInitzIndex();
Object.values(i).forEach(function(e) {
Object.values(e).forEach(function(e) {
if (e && cc.isValid(e)) {
e.zIndex = c;
o.isSpecialSkin() ? c-- : c++;
}
});
});
c = 100;
var a = this.notSetZIndex(), s = [];
null === (n = null == r ? void 0 : r.state) || void 0 === n || n.putPos.forEach(function(e) {
var t = i[e.x][e.y];
if (t && cc.isValid(t)) {
s.push(t.position);
if (!a) {
c++;
t.zIndex = c;
}
}
});
s.length > 0 && this.showEffect(s);
}
}
};
t.prototype.showEffect = function(e) {
var t = this, n = Cinst(hs.Board);
if (n && n.boardGrid && cc.isValid(n.boardGrid)) {
var o = this.useOldLogic(), r = e.length, i = function(e) {
if (e && cc.isValid(e)) {
e.active = !1;
t._nodeList.push(e);
}
--r <= 0 && t.resetBlocksZIndex();
};
e.forEach(function(e) {
var r = null;
if (!(r = o ? t._nodeList.shift() : t._nodeList.pop()) || !cc.isValid(r)) {
r = cc.instantiate(t._effectPrefab);
n && n.blocks && cc.isValid(n.blocks) && n.blocks.addChild(r, 100);
}
r.zIndex = t.notSetZIndex() ? 0 : 100;
r.active = !0;
r.setPosition(e.x, e.y);
var c = r.getChildByName("spine");
if (c && cc.isValid(c)) {
var a = [ "anim1", "anim2", "anim3" ], s = a.indexOf(t._curAniName);
-1 !== s && a.splice(s, 1);
t._curAniName = a[Math.floor(Math.random() * a.length)];
var f = c.getComponent(sp.Skeleton);
if (f && cc.isValid(f)) {
f.timeScale = 1 / cc.director._kSpeed;
f.setAnimation(0, t._curAniName, !1);
f.setCompleteListener(function() {
if (o) {
if (r && cc.isValid(r)) {
r.active = !1;
t._nodeList.push(r);
}
t.resetBlocksZIndex();
} else cc.isValid(r) && i(r);
});
} else o || i(r);
} else o || i(r);
});
}
};
t.prototype.notSetZIndex = function() {
var e = hs.skinInfo.currentSkinId;
return [ "2028", "3033", "2026", "2037", "2033", "2032" ].includes(e);
};
t.prototype.getInitzIndex = function() {
return this.isSpecialSkin() ? 100 : 0;
};
t.prototype.isSpecialSkin = function() {
return [ "2028" ].includes(hs.skinInfo.currentSkinId);
};
t.prototype.useOldLogic = function() {
var e = TRAIT("IsOpenRainbowPutBlocksEffectFixRevertTrait");
return !!(null == e ? void 0 : e.active);
};
t.prototype.resetBlocksZIndex = function() {
var e, t = this, n = null === (e = hs.boardRendererInfo) || void 0 === e ? void 0 : e.blocks;
if (n) {
var o = this.getInitzIndex();
Object.values(n).forEach(function(e) {
Object.values(e).forEach(function(e) {
if (e && cc.isValid(e)) {
e.zIndex = o;
t.isSpecialSkin() ? o-- : o++;
}
});
});
}
};
t.prototype.preLoadRes = function() {
var e = this;
this.useNewArt() ? this.newPrelodRes() : hs.ResLoader.loadByBundle(s, "prefabs/rainbowPutBlocksEffect", cc.Prefab, function(t, n) {
t || n && (e._effectPrefab = n);
});
};
t.prototype.newPrelodRes = function() {
return c(this, void 0, void 0, function() {
var e, t;
return a(this, function(n) {
switch (n.label) {
case 0:
return [ 4, hs.ResLoader.asyncLoadBundle(s) ];

case 1:
e = n.sent();
t = "prefabs/newArt/rainbowPutBlocksEffect";
if (hs.ResLoader.isBundleAssetDownloaded(e, t, {
type: cc.Prefab,
target: "import"
})) this._loadPrefab(t); else if (hs.ResLoader.isBundleAssetDownloaded(e, "prefabs/rainbowPutBlocksEffect", {
type: cc.Prefab,
target: "import"
})) {
this._loadPrefab("prefabs/rainbowPutBlocksEffect");
hs.ResLoader.loadByBundle(s, t, cc.Prefab);
} else this._loadPrefab(t);
return [ 2 ];
}
});
});
};
t.prototype._loadPrefab = function(e) {
var t = this;
hs.ResLoader.loadByBundle(s, e, cc.Prefab, function(e, n) {
e || n && (t._effectPrefab = n);
});
};
t.prototype.useNewArt = function() {
var e, t;
return null !== (t = null === (e = this.props) || void 0 === e ? void 0 : e.useNewArt) && void 0 !== t && t;
};
return i([ classId("IsOpenRainbowPutBlocksEffectTrait") ], t);
}(Trait);
n.IsOpenRainbowPutBlocksEffectTrait = f;
cc._RF.pop();
}, {} ],
IsOpenRainbowPutBlocksEffect_comparisonNew_Trait: [ function(e, t, n) {
"use strict";
cc._RF.push(t, "c8e4aGyfT9KbpwVK48NR+ap", "IsOpenRainbowPutBlocksEffect_comparisonNew_Trait");
var o, r = this && this.__extends || (o = function(e, t) {
return (o = Object.setPrototypeOf || {
__proto__: []
} instanceof Array && function(e, t) {
e.__proto__ = t;
} || function(e, t) {
for (var n in t) Object.prototype.hasOwnProperty.call(t, n) && (e[n] = t[n]);
})(e, t);
}, function(e, t) {
o(e, t);
function n() {
this.constructor = e;
}
e.prototype = null === t ? Object.create(t) : (n.prototype = t.prototype, new n());
}), i = this && this.__decorate || function(e, t, n, o) {
var r, i = arguments.length, c = i < 3 ? t : null === o ? o = Object.getOwnPropertyDescriptor(t, n) : o;
if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) c = Reflect.decorate(e, t, n, o); else for (var a = e.length - 1; a >= 0; a--) (r = e[a]) && (c = (i < 3 ? r(c) : i > 3 ? r(t, n, c) : r(t, n)) || c);
return i > 3 && c && Object.defineProperty(t, n, c), c;
};
Object.defineProperty(n, "__esModule", {
value: !0
});
n.IsOpenRainbowPutBlocksEffect_comparisonNew_Trait = void 0;
var c = function(e) {
r(t, e);
function t() {
return null !== e && e.apply(this, arguments) || this;
}
t.prototype.preLoadRes = function() {
var e = this;
hs.ResLoader.loadByBundle("IsOpenRainbowPutBlocksEffectTrait", "prefabs/newArt/rainbowPutBlocksEffect", cc.Prefab, function(t, n) {
t || n && (e._effectPrefab = n);
});
};
return i([ classId("IsOpenRainbowPutBlocksEffectTrait", "comparisonNew") ], t);
}(e("./IsOpenRainbowPutBlocksEffectTrait").IsOpenRainbowPutBlocksEffectTrait);
n.IsOpenRainbowPutBlocksEffect_comparisonNew_Trait = c;
cc._RF.pop();
}, {
"./IsOpenRainbowPutBlocksEffectTrait": "IsOpenRainbowPutBlocksEffectTrait"
} ]
}, {}, [ "IsOpenRainbowPutBlocksEffectTrait", "IsOpenRainbowPutBlocksEffect_comparisonNew_Trait" ]);
//# sourceMappingURL=index.js.map
