window.__require = function e(t, n, r) {
function i(s, a) {
if (!n[s]) {
if (!t[s]) {
var u = s.split("/");
u = u[u.length - 1];
if (!t[u]) {
var f = "function" == typeof __require && __require;
if (!a && f) return f(u, !0);
if (o) return o(u, !0);
throw new Error("Cannot find module '" + s + "'");
}
s = u;
}
var c = n[s] = {
exports: {}
};
t[s][0].call(c.exports, function(e) {
return i(t[s][1][e] || e);
}, c, c.exports, e, t, n, r);
}
return n[s].exports;
}
for (var o = "function" == typeof __require && __require, s = 0; s < r.length; s++) i(r[s]);
return i;
}({
OriginSkinShowGreyDefultSetBtnTrait: [ function(e, t, n) {
"use strict";
cc._RF.push(t, "c4870N4EppHpKiSGNPk4sns", "OriginSkinShowGreyDefultSetBtnTrait");
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
var i, o = arguments.length, s = o < 3 ? t : null === r ? r = Object.getOwnPropertyDescriptor(t, n) : r;
if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) s = Reflect.decorate(e, t, n, r); else for (var a = e.length - 1; a >= 0; a--) (i = e[a]) && (s = (o < 3 ? i(s) : o > 3 ? i(t, n, s) : i(t, n)) || s);
return o > 3 && s && Object.defineProperty(t, n, s), s;
};
Object.defineProperty(n, "__esModule", {
value: !0
});
n.OriginSkinShowGreyDefultSetBtnTrait = void 0;
var s = "OriginSkinShowGreyDefultSetBtnTrait", a = function(e) {
i(t, e);
function t() {
var t = null !== e && e.apply(this, arguments) || this;
t._assetsReady = !1;
return t;
}
t.prototype.registerTraitEventsMethods = function() {
return [ {
className: "Game_Proxy",
methodName: "onGameShow"
} ];
};
t.prototype.onCreate = function() {
var e = this, t = 0, n = function() {
++t >= 3 && (e._assetsReady = !0);
};
hs.ResLoader.loadByBundle(s, "textures/set_btn_defaultSkin_grey", cc.SpriteFrame, function(e) {
e || n();
});
hs.ResLoader.loadByBundle(s, "textures/set_icon_defaultSkin_grey", cc.SpriteFrame, function(e) {
e || n();
});
hs.ResLoader.loadByBundle(s, "textures/set_txt_defaultSkin_grey", cc.SpriteFrame, function(e) {
e || n();
});
};
Object.defineProperty(t.prototype, "onActiveCondition", {
get: function() {
return this._assetsReady;
},
enumerable: !1,
configurable: !0
});
t.prototype.onActive = function(e) {
hs.tp.isGame_ProxyOnGameShow(e) && hs.ResLoader.loadBundle("OriginSkinShowGreyDefultSetBtnTrait", function() {});
if (hs.tp.isSetup_ProxyUpdateUI(e)) {
var t = e.args[0] || {};
t.value = t.value || {};
t.value[hs.enSetupKeys.SetAddDefultSkinBtn] = !hs.skinInfo.isOriginalSkin;
}
if (hs.tp.isSetupBtnItemInitUI(e) && (n = e.target).state.key && n.state.key == hs.enSetupKeys.SetAddDefultSkinBtn && hs.skinInfo.isOriginalSkin) {
e.replace = !0;
e.returnState = !0;
}
if (hs.tp.isSetupBtnItemFreshUI(e)) {
var n, r = (n = e.target).btn;
if (n.state.key && n.state.key == hs.enSetupKeys.SetAddDefultSkinBtn) if (hs.skinInfo.isOriginalSkin) {
hs.ResLoader.renderSpriteByBundle(r.node.getComponent(cc.Sprite), "textures/set_btn_defaultSkin_grey", s);
hs.ResLoader.renderSpriteByBundle(n.txt_img, "textures/set_txt_defaultSkin_grey", s);
hs.ResLoader.renderSpriteByBundle(n.icon_img, "textures/set_icon_defaultSkin_grey", s);
r.enabled = !1;
e.returnState = !0;
} else r.enabled = !0;
}
};
return o([ classId("OriginSkinShowGreyDefultSetBtnTrait"), classMethodWatch() ], t);
}(Trait);
n.OriginSkinShowGreyDefultSetBtnTrait = a;
cc._RF.pop();
}, {} ]
}, {}, [ "OriginSkinShowGreyDefultSetBtnTrait" ]);
//# sourceMappingURL=index.js.map
