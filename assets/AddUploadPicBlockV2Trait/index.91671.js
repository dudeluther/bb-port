window.__require = function e(t, r, i) {
function o(a, s) {
if (!r[a]) {
if (!t[a]) {
var c = a.split("/");
c = c[c.length - 1];
if (!t[c]) {
var l = "function" == typeof __require && __require;
if (!s && l) return l(c, !0);
if (n) return n(c, !0);
throw new Error("Cannot find module '" + a + "'");
}
a = c;
}
var u = r[a] = {
exports: {}
};
t[a][0].call(u.exports, function(e) {
return o(t[a][1][e] || e);
}, u, u.exports, e, t, r, i);
}
return r[a].exports;
}
for (var n = "function" == typeof __require && __require, a = 0; a < i.length; a++) o(i[a]);
return o;
}({
AddUploadPicBlockV2Trait: [ function(e, t, r) {
"use strict";
cc._RF.push(t, "b155fMSfcpFnrfJQSpEBhA3", "AddUploadPicBlockV2Trait");
var i, o = this && this.__extends || (i = function(e, t) {
return (i = Object.setPrototypeOf || {
__proto__: []
} instanceof Array && function(e, t) {
e.__proto__ = t;
} || function(e, t) {
for (var r in t) Object.prototype.hasOwnProperty.call(t, r) && (e[r] = t[r]);
})(e, t);
}, function(e, t) {
i(e, t);
function r() {
this.constructor = e;
}
e.prototype = null === t ? Object.create(t) : (r.prototype = t.prototype, new r());
}), n = this && this.__decorate || function(e, t, r, i) {
var o, n = arguments.length, a = n < 3 ? t : null === i ? i = Object.getOwnPropertyDescriptor(t, r) : i;
if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) a = Reflect.decorate(e, t, r, i); else for (var s = e.length - 1; s >= 0; s--) (o = e[s]) && (a = (n < 3 ? o(a) : n > 3 ? o(t, r, a) : o(t, r)) || a);
return n > 3 && a && Object.defineProperty(t, r, a), a;
};
Object.defineProperty(r, "__esModule", {
value: !0
});
r.AddUploadPicBlockV2Trait = void 0;
var a = function(e) {
o(t, e);
function t() {
var t = null !== e && e.apply(this, arguments) || this;
t.asset = null;
return t;
}
Object.defineProperty(t.prototype, "onActiveCondition", {
get: function() {
return hs.gameInfo.gameMode == hs.GameMode.Class;
},
enumerable: !1,
configurable: !0
});
t.prototype.onActive = function(e) {
if (hs.tp.isAddUploadPicBlockRenderTexture(e)) {
e.replace = !0;
e.returnState = !0;
var t = e.args[0], r = e.args[1], i = (h = e.target).sf.getTexture() !== t, o = !h.lastRect.equals(r);
if (!i && !o && h.bg.spriteFrame) return;
if (i || !h.bg.spriteFrame) {
h.sf.setTexture(t, r);
h.bg.spriteFrame = null;
h.bg.spriteFrame = h.sf;
} else {
var n = t, a = n.width, s = n.height, c = r.x / a, l = (r.x + r.width) / a, u = r.y / s, d = (r.y + r.height) / s, f = h.sf.uv;
f[0] = c;
f[1] = d;
f[2] = l;
f[3] = d;
f[4] = c;
f[5] = u;
f[6] = l;
f[7] = u;
h.bg.setVertsDirty();
}
h.lastRect.x = r.x;
h.lastRect.y = r.y;
h.lastRect.width = r.width;
h.lastRect.height = r.height;
}
if (hs.tp.isAddUploadPicBlockLoadDefault(e)) {
e.replace = !0;
e.returnState = !0;
r = e.args[0];
var p = e.args[1], h = e.target;
if (this.asset) {
this.asset.isFilterTexture = !0;
h.renderTexture(this.asset, r);
h.renderKuang(2);
} else this.loadDefault(r, p, h);
}
};
t.prototype.loadDefault = function(e, t, r) {
var i, o = this, n = null === (i = null == r ? void 0 : r.state) || void 0 === i ? void 0 : i.bgId, a = e;
hs.ResLoader.loadByBundle("AddUploadPicTrait", "textures/bg" + n, cc.Texture2D, function(e, t) {
if (r && cc.isValid(r.bg)) if (e) ; else {
o.asset = t;
if (cc.isValid(t)) {
t.isFilterTexture = !0;
r.renderTexture(t, a);
r.renderKuang(2);
} else r.bg.spriteFrame = null;
}
});
};
return n([ classId("AddUploadPicBlockV2Trait") ], t);
}(Trait);
r.AddUploadPicBlockV2Trait = a;
cc._RF.pop();
}, {} ]
}, {}, [ "AddUploadPicBlockV2Trait" ]);
//# sourceMappingURL=index.js.map
