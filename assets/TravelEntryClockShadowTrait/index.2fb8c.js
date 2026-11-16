window.__require = function e(t, i, r) {
function n(a, s) {
if (!i[a]) {
if (!t[a]) {
var d = a.split("/");
d = d[d.length - 1];
if (!t[d]) {
var c = "function" == typeof __require && __require;
if (!s && c) return c(d, !0);
if (o) return o(d, !0);
throw new Error("Cannot find module '" + a + "'");
}
a = d;
}
var l = i[a] = {
exports: {}
};
t[a][0].call(l.exports, function(e) {
return n(t[a][1][e] || e);
}, l, l.exports, e, t, i, r);
}
return i[a].exports;
}
for (var o = "function" == typeof __require && __require, a = 0; a < r.length; a++) n(r[a]);
return n;
}({
TravelEntryClockShadowTrait: [ function(e, t, i) {
"use strict";
cc._RF.push(t, "3b3adndvD9PgLoiPhdRA4sh", "TravelEntryClockShadowTrait");
var r, n = this && this.__extends || (r = function(e, t) {
return (r = Object.setPrototypeOf || {
__proto__: []
} instanceof Array && function(e, t) {
e.__proto__ = t;
} || function(e, t) {
for (var i in t) Object.prototype.hasOwnProperty.call(t, i) && (e[i] = t[i]);
})(e, t);
}, function(e, t) {
r(e, t);
function i() {
this.constructor = e;
}
e.prototype = null === t ? Object.create(t) : (i.prototype = t.prototype, new i());
}), o = this && this.__decorate || function(e, t, i, r) {
var n, o = arguments.length, a = o < 3 ? t : null === r ? r = Object.getOwnPropertyDescriptor(t, i) : r;
if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) a = Reflect.decorate(e, t, i, r); else for (var s = e.length - 1; s >= 0; s--) (n = e[s]) && (a = (o < 3 ? n(a) : o > 3 ? n(t, i, a) : n(t, i)) || a);
return o > 3 && a && Object.defineProperty(t, i, a), a;
};
Object.defineProperty(i, "__esModule", {
value: !0
});
i.TravelEntryClockShadowTrait = void 0;
var a = function(e) {
n(t, e);
function t() {
var t = null !== e && e.apply(this, arguments) || this;
t._timerPrefab = null;
t._timerSpriteFrame = null;
t._timerCountdownNode = null;
t._hour = 0;
t._minute = 0;
t._second = 0;
return t;
}
t.prototype.onActive = function(e) {
hs.tp.isHomePage_ProxyShowHomePage(e) && this.preloadRes();
if (hs.tp.isHomePageSectionChapterBtnDefaultAddResToJourneyBtn(e)) {
var t = e.args[0];
cc.isValid(t) && this.addResToJourneyBtn(t);
}
hs.tp.isEliminate_Effects_ProxyOnGameShow(e) && cc.isValid(this._timerCountdownNode) && this.setCurrentTime(this._timerCountdownNode);
hs.tp.isAdventureOverdueBtnEffLoadCompleteSetSiblingIndex(e) && cc.isValid(this._timerCountdownNode) && this._timerCountdownNode.setSiblingIndex(0);
hs.tp.isHomePage_ProxyShowComplete(e) && this.refreshJourneyBtnState();
hs.tp.isTripCountdownTraitCheckAddJourneyBtnTimer(e) && (e.returnValue = !0);
if (hs.tp.is$30430_f_AddJourneyBtnTimerTraitSetTimerNode(e)) {
t = e.args[0];
cc.isValid(t) && this.addResToJourneyBtn(t);
e.replace = !0;
}
};
t.prototype.refreshJourneyBtnState = function() {
var e = Cinst(hs.HomePageSectionChapterBtnDefault), t = null == e ? void 0 : e.node;
cc.isValid(t) && this.addResToJourneyBtn(t);
};
t.prototype.addResToJourneyBtn = function(e) {
var t = this, i = e.getChildByName("modeChoiceJourneyBtnTimer");
cc.isValid(i) && i.active && (i.active = !1);
if (cc.isValid(this._timerSpriteFrame)) {
e.getComponent(cc.Sprite).spriteFrame = this._timerSpriteFrame;
this.changeSkin(e);
} else hs.ResLoader.loadByBundle(hs.PrefabConfig.TravelEntryClockShadowTrait.bundleName, "textures/btn_JourneyLoading_Timer", cc.SpriteFrame, function(i, r) {
if (i) ; else {
t._timerSpriteFrame = r;
e.getComponent(cc.Sprite).spriteFrame = t._timerSpriteFrame;
t.changeSkin(e);
}
});
if (cc.isValid(this._timerPrefab)) {
this.setTimerNode(e);
this.changeSkin(e);
} else hs.ResLoader.loadByBundle(hs.PrefabConfig.TravelEntryClockShadowTrait.bundleName, hs.PrefabConfig.TravelEntryClockShadowTrait.url, cc.Prefab, function(i, r) {
if (i) ; else {
t._timerPrefab = r;
t.setTimerNode(e);
t.changeSkin(e);
}
});
};
t.prototype.changeSkin = function() {};
t.prototype.setTimerNode = function(e) {
cc.isValid(this._timerCountdownNode) || (this._timerCountdownNode = cc.instantiate(this._timerPrefab));
if (cc.isValid(e) && this._timerCountdownNode.parent != e) {
this._timerCountdownNode.setParent(e);
this._timerCountdownNode.setSiblingIndex(0);
this._timerCountdownNode.x = -180;
}
this.setCurrentTime(this._timerCountdownNode);
};
t.prototype.preloadRes = function() {
var e = this;
cc.isValid(this._timerSpriteFrame) || hs.ResLoader.loadByBundle(hs.PrefabConfig.TravelEntryClockShadowTrait.bundleName, "textures/btn_JourneyLoading_Timer", cc.SpriteFrame, function(t, i) {
t || (e._timerSpriteFrame = i);
});
cc.isValid(this._timerPrefab) || hs.ResLoader.loadByBundle(hs.PrefabConfig.TravelEntryClockShadowTrait.bundleName, hs.PrefabConfig.TravelEntryClockShadowTrait.url, cc.Prefab, function(t, i) {
t || (e._timerPrefab = i);
});
};
t.prototype.setCurrentTime = function() {
var e = this, t = new Date();
this._hour = t.getHours() % 12;
this._minute = t.getMinutes();
this._second = t.getSeconds();
var i = this._timerCountdownNode.getChildByName("main_time_hour"), r = this._timerCountdownNode.getChildByName("main_time_min_left"), n = this._timerCountdownNode.getChildByName("main_time_hour_light"), o = this._timerCountdownNode.getChildByName("main_time_min_light"), a = this._timerCountdownNode.getChildByName("main_time_hour_shadow"), s = this._timerCountdownNode.getChildByName("main_time_min_left_shadow"), d = function() {
i && (i.angle = -360 * (e._hour + e._minute / 60 + e._second / 3600) / 12);
r && (r.angle = -360 * (e._minute + e._second / 60) / 60);
n && (n.angle = i ? i.angle : 0);
o && (o.angle = r ? r.angle : 0);
a && (a.angle = i ? i.angle : 0);
s && (s.angle = r ? r.angle : 0);
setTimeoutSafe(d, 5e3);
};
d();
};
return o([ classId("TravelEntryClockShadowTrait"), classMethodWatch() ], t);
}(Trait);
i.TravelEntryClockShadowTrait = a;
cc._RF.pop();
}, {} ]
}, {}, [ "TravelEntryClockShadowTrait" ]);
//# sourceMappingURL=index.js.map
