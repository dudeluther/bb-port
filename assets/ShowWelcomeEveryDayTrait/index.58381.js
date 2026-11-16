window.__require = function t(e, o, n) {
function r(a, s) {
if (!o[a]) {
if (!e[a]) {
var c = a.split("/");
c = c[c.length - 1];
if (!e[c]) {
var h = "function" == typeof __require && __require;
if (!s && h) return h(c, !0);
if (i) return i(c, !0);
throw new Error("Cannot find module '" + a + "'");
}
a = c;
}
var p = o[a] = {
exports: {}
};
e[a][0].call(p.exports, function(t) {
return r(e[a][1][t] || t);
}, p, p.exports, t, e, o, n);
}
return o[a].exports;
}
for (var i = "function" == typeof __require && __require, a = 0; a < n.length; a++) r(n[a]);
return r;
}({
ShowWelcomeEveryDayTrait: [ function(t, e, o) {
"use strict";
cc._RF.push(e, "5fb97QZ+wpDmrY2sRPz6VQu", "ShowWelcomeEveryDayTrait");
var n, r = this && this.__extends || (n = function(t, e) {
return (n = Object.setPrototypeOf || {
__proto__: []
} instanceof Array && function(t, e) {
t.__proto__ = e;
} || function(t, e) {
for (var o in e) Object.prototype.hasOwnProperty.call(e, o) && (t[o] = e[o]);
})(t, e);
}, function(t, e) {
n(t, e);
function o() {
this.constructor = t;
}
t.prototype = null === e ? Object.create(e) : (o.prototype = e.prototype, new o());
}), i = this && this.__decorate || function(t, e, o, n) {
var r, i = arguments.length, a = i < 3 ? e : null === n ? n = Object.getOwnPropertyDescriptor(e, o) : n;
if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) a = Reflect.decorate(t, e, o, n); else for (var s = t.length - 1; s >= 0; s--) (r = t[s]) && (a = (i < 3 ? r(a) : i > 3 ? r(e, o, a) : r(e, o)) || a);
return i > 3 && a && Object.defineProperty(e, o, a), a;
}, a = this && this.__awaiter || function(t, e, o, n) {
return new (o || (o = Promise))(function(r, i) {
function a(t) {
try {
c(n.next(t));
} catch (t) {
i(t);
}
}
function s(t) {
try {
c(n.throw(t));
} catch (t) {
i(t);
}
}
function c(t) {
t.done ? r(t.value) : (e = t.value, e instanceof o ? e : new o(function(t) {
t(e);
})).then(a, s);
var e;
}
c((n = n.apply(t, e || [])).next());
});
}, s = this && this.__generator || function(t, e) {
var o, n, r, i, a = {
label: 0,
sent: function() {
if (1 & r[0]) throw r[1];
return r[1];
},
trys: [],
ops: []
};
return i = {
next: s(0),
throw: s(1),
return: s(2)
}, "function" == typeof Symbol && (i[Symbol.iterator] = function() {
return this;
}), i;
function s(t) {
return function(e) {
return c([ t, e ]);
};
}
function c(i) {
if (o) throw new TypeError("Generator is already executing.");
for (;a; ) try {
if (o = 1, n && (r = 2 & i[0] ? n.return : i[0] ? n.throw || ((r = n.return) && r.call(n), 
0) : n.next) && !(r = r.call(n, i[1])).done) return r;
(n = 0, r) && (i = [ 2 & i[0], r.value ]);
switch (i[0]) {
case 0:
case 1:
r = i;
break;

case 4:
a.label++;
return {
value: i[1],
done: !1
};

case 5:
a.label++;
n = i[1];
i = [ 0 ];
continue;

case 7:
i = a.ops.pop();
a.trys.pop();
continue;

default:
if (!(r = a.trys, r = r.length > 0 && r[r.length - 1]) && (6 === i[0] || 2 === i[0])) {
a = 0;
continue;
}
if (3 === i[0] && (!r || i[1] > r[0] && i[1] < r[3])) {
a.label = i[1];
break;
}
if (6 === i[0] && a.label < r[1]) {
a.label = r[1];
r = i;
break;
}
if (r && a.label < r[2]) {
a.label = r[2];
a.ops.push(i);
break;
}
r[2] && a.ops.pop();
a.trys.pop();
continue;
}
i = e.call(t, a);
} catch (t) {
i = [ 6, t ];
n = 0;
} finally {
o = r = 0;
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
o.ShowWelcomeEveryDayTrait = void 0;
var c = function(t) {
r(e, t);
function e() {
var e = null !== t && t.apply(this, arguments) || this;
e.showWelcomeLastShowTime = 0;
e.chapterBtn = null;
e.winStreakContainer = null;
e._root = null;
return e;
}
e.prototype.registerTraitEventsMethods = function() {
return [ {
className: "HomePageSectionChapterBtnDefault",
methodName: "render"
}, {
className: "HomePageSectionWinStreakTipDefault",
methodName: "render"
}, {
className: "Advertisement_FullScene_Proxy",
methodName: "onAppShow"
}, {
className: "HomePage",
methodName: "onDisable"
}, {
className: "Launch_Proxy",
methodName: "onTraitConfigInitComplete"
} ];
};
Object.defineProperty(e.prototype, "onActiveCondition", {
get: function() {
var t = TRAIT("PromotionMoreGamesInBlockCtrlTrait");
return !(null == t ? void 0 : t.active);
},
enumerable: !1,
configurable: !0
});
e.prototype.onActive = function(t) {
hs.tp.isLaunch_ProxyOnTraitConfigInitComplete(t) && this.loadPrefab();
if (hs.tp.isHomePageSectionChapterBtnDefaultRender(t)) {
cc.isValid(this.chapterBtn) && this.chapterBtn.targetOff(this);
var e = t.target.node;
this.chapterBtn = e;
this.chapterBtn.on(cc.Node.EventType.POSITION_CHANGED, this.onChapterBtnPositionChanged, this);
this.updatePosition(this.chapterBtn);
}
hs.tp.isHomePageOnDisable(t) && this.hideEffect();
if (hs.tp.isHomePageSectionWinStreakTipDefaultRender(t)) {
cc.isValid(this.winStreakContainer) && this.winStreakContainer.targetOff(this);
var o = t.target.node;
this.winStreakContainer = o;
this.winStreakContainer.on(cc.Node.EventType.CHILD_ADDED, this.onWinStreakContainerChildAdd, this);
this.updateWinSteakShow();
}
hs.tp.isAdvertisement_FullScene_ProxyOnAppShow(t) && this.shouldShowEffect() && this.showEffect();
hs.tp.isHomePage_ProxyShowComplete(t) && this.shouldShowEffect() && this.showEffect();
};
e.prototype.onChapterBtnPositionChanged = function() {
this.updatePosition(this.chapterBtn);
};
e.prototype.onWinStreakContainerChildAdd = function() {
this.updateWinSteakShow();
};
e.prototype.shouldShowEffect = function() {
return !hs.isToday(this.showWelcomeLastShowTime) && (!hs.isToday(hs.gameInfo.firstEntryTime) && !!hs.homePageInfo.isInHomePage);
};
e.prototype.getDaysSinceFirstEntry = function() {
var t, e = new Date(null !== (t = hs.gameInfo.firstEntryTime) && void 0 !== t ? t : Date.now()), o = new Date();
e.setHours(0, 0, 0, 0);
o.setHours(0, 0, 0, 0);
var n = o.getTime() - e.getTime();
return Math.floor(n / 864e5);
};
e.prototype.getPrefabPath = function() {
return "prefabs/effect";
};
e.prototype.loadPrefab = function() {
return a(this, void 0, void 0, function() {
var t, e;
return s(this, function(o) {
switch (o.label) {
case 0:
if (cc.isValid(this._root)) return [ 2 ];
o.label = 1;

case 1:
o.trys.push([ 1, 3, , 4 ]);
t = this.getPrefabPath();
return [ 4, hs.ResLoader.asyncLoadByBundle(this.traitName, t, cc.Prefab) ];

case 2:
e = o.sent();
if (cc.isValid(this._root)) return [ 2 ];
this._root = cc.instantiate(e);
this._root.active = !1;
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
e.prototype.showEffect = function() {
return a(this, void 0, void 0, function() {
var t, e, o, n, r, i, a;
return s(this, function(s) {
switch (s.label) {
case 0:
return [ 4, hs.nextFrame() ];

case 1:
s.sent();
return cc.isValid(this._root) ? [ 3, 3 ] : [ 4, this.loadPrefab() ];

case 2:
s.sent();
s.label = 3;

case 3:
if (!cc.isValid(this._root)) return [ 2 ];
if (!this.shouldShowEffect()) return [ 2 ];
this.showWelcomeLastShowTime = Date.now();
if (!(t = Cinst(hs.HomePage)) || !cc.isValid(t.node)) return [ 2 ];
this._root.parent !== t.node && t.node.addChild(this._root);
this._root.active = !0;
this.updatePosition(this.chapterBtn);
this.updateWinSteakShow();
(e = this._root.getChildByName("arrow")).stopAllActions();
cc.tween(e).set({
scale: 0
}).delay(.21 * this.speed).set({
scale: .3
}).to(.12 * this.speed, {
scale: 1.06
}, {
easing: cc.easing.sineInOut
}).to(.12 * this.speed, {
scale: .985
}, {
easing: cc.easing.sineInOut
}).to(.12 * this.speed, {
scale: 1
}, {
easing: cc.easing.sineInOut
}).delay(1.59 * this.speed).to(.06 * this.speed, {
scale: 1.1
}, {
easing: cc.easing.sineInOut
}).to(.09 * this.speed, {
scale: .3
}).start();
cc.tween(e).set({
opacity: 0
}).delay(.21 * this.speed).to(.12 * this.speed, {
opacity: 255
}).delay(1.89 * this.speed).to(.09 * this.speed, {
opacity: 0
}).start();
o = this._root.getComponentInChildren(cc.Label);
n = this.getDaysSinceFirstEntry() + 1;
o.string = "Welcome  back  for \nDay {0}";
r = o.string;
r = hs.multiLangInfo.replaceString(r, [ n + "" ]);
o.string = r;
o.node.stopAllActions();
cc.tween(o.node).set({
opacity: 0
}).delay(.21 * this.speed).to(.12 * this.speed, {
opacity: 255
}).delay(1.89 * this.speed).to(.09 * this.speed, {
opacity: 0
}).start();
this.startShowEffect();
i = this._root.getComponentInChildren(sp.Skeleton);
a = 1 / this.speed;
this.showIpSpine(i, a);
return [ 2 ];
}
});
});
};
e.prototype.showIpSpine = function(t, e) {
var o = this;
t.timeScale = e;
t.setAnimation(0, "in_1", !1);
t.setCompleteListener(function() {
o.hideEffect();
});
};
e.prototype.startShowEffect = function() {};
e.prototype.hideEffect = function() {
if (cc.isValid(this._root)) {
this._root.active = !1;
this.updateWinSteakShow();
}
};
e.prototype.updatePosition = function(t, e, o) {
void 0 === e && (e = 0);
void 0 === o && (o = 0);
if (cc.isValid(this._root) && this._root.parent && cc.isValid(t)) {
var n = this._root.parent.convertToNodeSpaceAR(t.convertToWorldSpaceAR(cc.v2(-264 + e, 310 + o)));
this._root.setPosition(n);
}
};
e.prototype.updateWinSteakShow = function() {
var t, e = null === (t = this.winStreakContainer) || void 0 === t ? void 0 : t.children.find(function(t) {
return t.name.startsWith("DailyWinStreakState");
});
if (e) {
var o = cc.isValid(this._root) && this._root.active;
e.opacity = o ? 0 : 255;
}
};
Object.defineProperty(e.prototype, "speed", {
get: function() {
return cc.director._kSpeed || 1;
},
enumerable: !1,
configurable: !0
});
i([ hs.storageProperty({
key: "showWelcomeLastShowTime"
}) ], e.prototype, "showWelcomeLastShowTime", void 0);
return i([ classId("ShowWelcomeEveryDayTrait"), classMethodWatch() ], e);
}(Trait);
o.ShowWelcomeEveryDayTrait = c;
cc._RF.pop();
}, {} ],
ShowWelcomeEveryDay_comparisonNew_Trait: [ function(t, e, o) {
"use strict";
cc._RF.push(e, "877c9reTO9NNpqIRrm4KdCv", "ShowWelcomeEveryDay_comparisonNew_Trait");
var n, r = this && this.__extends || (n = function(t, e) {
return (n = Object.setPrototypeOf || {
__proto__: []
} instanceof Array && function(t, e) {
t.__proto__ = e;
} || function(t, e) {
for (var o in e) Object.prototype.hasOwnProperty.call(e, o) && (t[o] = e[o]);
})(t, e);
}, function(t, e) {
n(t, e);
function o() {
this.constructor = t;
}
t.prototype = null === e ? Object.create(e) : (o.prototype = e.prototype, new o());
}), i = this && this.__decorate || function(t, e, o, n) {
var r, i = arguments.length, a = i < 3 ? e : null === n ? n = Object.getOwnPropertyDescriptor(e, o) : n;
if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) a = Reflect.decorate(t, e, o, n); else for (var s = t.length - 1; s >= 0; s--) (r = t[s]) && (a = (i < 3 ? r(a) : i > 3 ? r(e, o, a) : r(e, o)) || a);
return i > 3 && a && Object.defineProperty(e, o, a), a;
};
Object.defineProperty(o, "__esModule", {
value: !0
});
o.ShowWelcomeEveryDay_comparisonNew_Trait = void 0;
var a = function(t) {
r(e, t);
function e() {
return null !== t && t.apply(this, arguments) || this;
}
e.prototype.getPrefabPath = function() {
return "prefabs/effectOptimization";
};
return i([ classId("ShowWelcomeEveryDayTrait", "comparisonNew") ], e);
}(t("./ShowWelcomeEveryDayTrait").ShowWelcomeEveryDayTrait);
o.ShowWelcomeEveryDay_comparisonNew_Trait = a;
cc._RF.pop();
}, {
"./ShowWelcomeEveryDayTrait": "ShowWelcomeEveryDayTrait"
} ]
}, {}, [ "ShowWelcomeEveryDayTrait", "ShowWelcomeEveryDay_comparisonNew_Trait" ]);
//# sourceMappingURL=index.js.map
