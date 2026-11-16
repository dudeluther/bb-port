window.__require = function t(e, i, o) {
function r(c, l) {
if (!i[c]) {
if (!e[c]) {
var u = c.split("/");
u = u[u.length - 1];
if (!e[u]) {
var s = "function" == typeof __require && __require;
if (!l && s) return s(u, !0);
if (n) return n(u, !0);
throw new Error("Cannot find module '" + c + "'");
}
c = u;
}
var f = i[c] = {
exports: {}
};
e[c][0].call(f.exports, function(t) {
return r(e[c][1][t] || t);
}, f, f.exports, t, e, i, o);
}
return i[c].exports;
}
for (var n = "function" == typeof __require && __require, c = 0; c < o.length; c++) r(o[c]);
return r;
}({
LimitNoviceBlockSizeTrait: [ function(t, e, i) {
"use strict";
cc._RF.push(e, "b389fkoi/9GZbzbkMgUEAE6", "LimitNoviceBlockSizeTrait");
var o, r = this && this.__extends || (o = function(t, e) {
return (o = Object.setPrototypeOf || {
__proto__: []
} instanceof Array && function(t, e) {
t.__proto__ = e;
} || function(t, e) {
for (var i in e) Object.prototype.hasOwnProperty.call(e, i) && (t[i] = e[i]);
})(t, e);
}, function(t, e) {
o(t, e);
function i() {
this.constructor = t;
}
t.prototype = null === e ? Object.create(e) : (i.prototype = e.prototype, new i());
}), n = this && this.__decorate || function(t, e, i, o) {
var r, n = arguments.length, c = n < 3 ? e : null === o ? o = Object.getOwnPropertyDescriptor(e, i) : o;
if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) c = Reflect.decorate(t, e, i, o); else for (var l = t.length - 1; l >= 0; l--) (r = t[l]) && (c = (n < 3 ? r(c) : n > 3 ? r(e, i, c) : r(e, i)) || c);
return n > 3 && c && Object.defineProperty(e, i, c), c;
};
Object.defineProperty(i, "__esModule", {
value: !0
});
i.LimitNoviceBlockSizeTrait = void 0;
var c = function(t) {
r(e, t);
function e() {
return null !== t && t.apply(this, arguments) || this;
}
i = e;
e.prototype.onActive = function(t) {
var e;
if (hs.tp.isAlgorithmProcessInfoHandleArgs(t)) {
if (!this.shouldApplyForCurrentRound()) return;
var i = null === (e = t.args) || void 0 === e ? void 0 : e[0];
if (!i || "object" != typeof i) return;
this.applyFilterBlocks(i);
}
};
e.prototype.shouldApplyForCurrentRound = function() {
if (hs.gameInfo.gameMode !== hs.GameMode.Class) return !1;
if (hs.classGuideInfo.show) return !1;
var t = hs.classGameInfo.gameNum, e = hs.classGameInfo.roundNum, i = this.getLimitRoundsByGameNum(t);
return !(i <= 0 || !Number.isFinite(e) || e < 1 || e > i);
};
e.prototype.getLimitRoundsByGameNum = function(t) {
var e, i = null === (e = this.props) || void 0 === e ? void 0 : e.config, o = (Array.isArray(i) ? i : [])[Number.isFinite(t) && t >= 0 ? Math.floor(t) : 0], r = "number" == typeof o ? o : 0;
return Number.isFinite(r) && r > 0 ? Math.floor(r) : 0;
};
e.prototype.applyFilterBlocks = function(t) {
for (var e = i.LIMIT_BLOCK_IDS_OVER_5, o = (Array.isArray(t.filterBlocks) ? t.filterBlocks : []).slice(), r = 0; r < e.length; r++) {
var n = e[r];
"number" == typeof n && Number.isFinite(n) && !o.includes(n) && o.push(n);
}
t.filterBlocks = o;
};
var i;
e.LIMIT_BLOCK_IDS_OVER_5 = [ 13, 35, 36 ];
return i = n([ classId("LimitNoviceBlockSizeTrait") ], e);
}(Trait);
i.LimitNoviceBlockSizeTrait = c;
cc._RF.pop();
}, {} ],
LimitNoviceBlockSize_IOSAdjust_Trait: [ function(t, e, i) {
"use strict";
cc._RF.push(e, "709cd9hSMlOZ40hcDndwBWf", "LimitNoviceBlockSize_IOSAdjust_Trait");
var o, r = this && this.__extends || (o = function(t, e) {
return (o = Object.setPrototypeOf || {
__proto__: []
} instanceof Array && function(t, e) {
t.__proto__ = e;
} || function(t, e) {
for (var i in e) Object.prototype.hasOwnProperty.call(e, i) && (t[i] = e[i]);
})(t, e);
}, function(t, e) {
o(t, e);
function i() {
this.constructor = t;
}
t.prototype = null === e ? Object.create(e) : (i.prototype = e.prototype, new i());
}), n = this && this.__decorate || function(t, e, i, o) {
var r, n = arguments.length, c = n < 3 ? e : null === o ? o = Object.getOwnPropertyDescriptor(e, i) : o;
if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) c = Reflect.decorate(t, e, i, o); else for (var l = t.length - 1; l >= 0; l--) (r = t[l]) && (c = (n < 3 ? r(c) : n > 3 ? r(e, i, c) : r(e, i)) || c);
return n > 3 && c && Object.defineProperty(e, i, c), c;
};
Object.defineProperty(i, "__esModule", {
value: !0
});
i.LimitNoviceBlockSize_IOSAdjust_Trait = void 0;
var c = t("./LimitNoviceBlockSizeTrait"), l = function(t) {
r(e, t);
function e() {
return null !== t && t.apply(this, arguments) || this;
}
e.prototype.onActive = function(e) {
t.prototype.onActive.call(this, e);
};
e.prototype.applyFilterBlocks = function(t) {
for (var e = c.LimitNoviceBlockSizeTrait.LIMIT_BLOCK_IDS_OVER_5, i = (Array.isArray(t.filterBlocks) ? t.filterBlocks : []).slice(), o = 0; o < e.length; o++) {
var r = e[o];
"number" == typeof r && Number.isFinite(r) && !i.includes(r) && i.push(r);
}
t.filterBlocks = i;
t.filterWeightBlocks = i;
};
return n([ classId("LimitNoviceBlockSizeTrait", "IOSAdjust") ], e);
}(c.LimitNoviceBlockSizeTrait);
i.LimitNoviceBlockSize_IOSAdjust_Trait = l;
cc._RF.pop();
}, {
"./LimitNoviceBlockSizeTrait": "LimitNoviceBlockSizeTrait"
} ]
}, {}, [ "LimitNoviceBlockSizeTrait", "LimitNoviceBlockSize_IOSAdjust_Trait" ]);
//# sourceMappingURL=index.js.map
