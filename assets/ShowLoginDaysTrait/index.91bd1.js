window.__require = function t(e, n, o) {
function i(a, s) {
if (!n[a]) {
if (!e[a]) {
var c = a.split("/");
c = c[c.length - 1];
if (!e[c]) {
var l = "function" == typeof __require && __require;
if (!s && l) return l(c, !0);
if (r) return r(c, !0);
throw new Error("Cannot find module '" + a + "'");
}
a = c;
}
var u = n[a] = {
exports: {}
};
e[a][0].call(u.exports, function(t) {
return i(e[a][1][t] || t);
}, u, u.exports, t, e, n, o);
}
return n[a].exports;
}
for (var r = "function" == typeof __require && __require, a = 0; a < o.length; a++) i(o[a]);
return i;
}({
LaunchLoginDaysSpine: [ function(t, e, n) {
"use strict";
cc._RF.push(e, "8ee15nv4PRAtpK2Vfny8vab", "LaunchLoginDaysSpine");
var o, i = this && this.__extends || (o = function(t, e) {
return (o = Object.setPrototypeOf || {
__proto__: []
} instanceof Array && function(t, e) {
t.__proto__ = e;
} || function(t, e) {
for (var n in e) Object.prototype.hasOwnProperty.call(e, n) && (t[n] = e[n]);
})(t, e);
}, function(t, e) {
o(t, e);
function n() {
this.constructor = t;
}
t.prototype = null === e ? Object.create(e) : (n.prototype = e.prototype, new n());
}), r = this && this.__decorate || function(t, e, n, o) {
var i, r = arguments.length, a = r < 3 ? e : null === o ? o = Object.getOwnPropertyDescriptor(e, n) : o;
if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) a = Reflect.decorate(t, e, n, o); else for (var s = t.length - 1; s >= 0; s--) (i = t[s]) && (a = (r < 3 ? i(a) : r > 3 ? i(e, n, a) : i(e, n)) || a);
return r > 3 && a && Object.defineProperty(e, n, a), a;
};
Object.defineProperty(n, "__esModule", {
value: !0
});
n.LaunchLoginDaysSpine = void 0;
var a = t("./LaunchLoginDays"), s = cc._decorator, c = s.ccclass, l = s.property, u = function(t) {
i(e, t);
function e() {
var e = null !== t && t.apply(this, arguments) || this;
e.spineEffect = null;
return e;
}
e.prototype.playLoginDaysEffect = function(t) {
if (this.spineEffect) {
var e = hs.kSpeedInfo.kSpeed || 1;
this.spineEffect.timeScale = 1 / e;
this.spineEffect.setAnimation(0, t, !1);
}
};
r([ l(sp.Skeleton) ], e.prototype, "spineEffect", void 0);
return r([ c ], e);
}(a.LaunchLoginDays);
n.LaunchLoginDaysSpine = u;
cc._RF.pop();
}, {
"./LaunchLoginDays": "LaunchLoginDays"
} ],
LaunchLoginDays: [ function(t, e, n) {
"use strict";
cc._RF.push(e, "79b01dyX5ZH6rAhng7j/ZZZ", "LaunchLoginDays");
var o, i = this && this.__extends || (o = function(t, e) {
return (o = Object.setPrototypeOf || {
__proto__: []
} instanceof Array && function(t, e) {
t.__proto__ = e;
} || function(t, e) {
for (var n in e) Object.prototype.hasOwnProperty.call(e, n) && (t[n] = e[n]);
})(t, e);
}, function(t, e) {
o(t, e);
function n() {
this.constructor = t;
}
t.prototype = null === e ? Object.create(e) : (n.prototype = e.prototype, new n());
}), r = this && this.__decorate || function(t, e, n, o) {
var i, r = arguments.length, a = r < 3 ? e : null === o ? o = Object.getOwnPropertyDescriptor(e, n) : o;
if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) a = Reflect.decorate(t, e, n, o); else for (var s = t.length - 1; s >= 0; s--) (i = t[s]) && (a = (r < 3 ? i(a) : r > 3 ? i(e, n, a) : i(e, n)) || a);
return r > 3 && a && Object.defineProperty(e, n, a), a;
};
Object.defineProperty(n, "__esModule", {
value: !0
});
n.LaunchLoginDays = void 0;
var a = cc._decorator, s = a.ccclass, c = a.property, l = function(t) {
i(e, t);
function e() {
var e = null !== t && t.apply(this, arguments) || this;
e.audioClip = null;
e.daysLow = null;
e.daysMiddle = null;
e.dayHigh = null;
e.daysHigh = null;
e.effect = null;
e.anim = null;
e.end = null;
return e;
}
e.prototype.onLoad = function() {
hs.applyAdapterFringe(this.end);
};
e.prototype.render = function() {
this.setLabel();
if (this.state.show) {
this.anim.setScale(0);
cc.Tween.stopAllByTarget(this.anim);
cc.tween(this.anim).to(.18, {
scale: 1.2
}).to(.12, {
scale: 1
}).start();
}
if (this.state.hide) {
var t = this.state.achievementActive ? this.end.position.clone() : this.anim.position.clone(), e = this.state.achievementActive ? .5 : 1, n = this.state.achievementActive ? 255 : 0;
cc.Tween.stopAllByTarget(this.anim);
cc.tween(this.anim).set({
scale: 1,
opacity: 255
}).to(.34, {
position: t,
scale: e,
opacity: n
}).start();
} else this.audioClip && hs.audioInfo.play({
url: "audios/day_number",
volume: 1,
type: hs.AudioType.EFFECT,
bundleName: "ShowLoginDaysTrait"
});
};
e.prototype.setLabel = function() {
var t, e, n, o = null !== (t = this.state.loginDays) && void 0 !== t ? t : 1;
if (1 === o) {
this.dayHigh.active = !0;
e = this.dayHigh;
n = "third_lz";
} else if (o >= 10 && o % 10 == 0) {
this.daysHigh.active = !0;
e = this.daysHigh;
n = "third_lz";
} else if (o <= 7 || o % 7 == 0) {
this.daysMiddle.active = !0;
e = this.daysMiddle;
n = "second_lz";
} else {
this.daysLow.active = !0;
e = this.daysLow;
n = "first_lz";
}
e.getChildByName("label").getComponent(cc.Label).string = o.toString();
this.playLoginDaysEffect(n);
};
e.prototype.playLoginDaysEffect = function(t) {
this.effect.playAnimation(t, 1);
};
r([ c(cc.AudioClip) ], e.prototype, "audioClip", void 0);
r([ c(cc.Node) ], e.prototype, "daysLow", void 0);
r([ c(cc.Node) ], e.prototype, "daysMiddle", void 0);
r([ c(cc.Node) ], e.prototype, "dayHigh", void 0);
r([ c(cc.Node) ], e.prototype, "daysHigh", void 0);
r([ c(dragonBones.ArmatureDisplay) ], e.prototype, "effect", void 0);
r([ c(cc.Node) ], e.prototype, "anim", void 0);
r([ c(cc.Node) ], e.prototype, "end", void 0);
return r([ classId("LaunchLoginDays"), s, classMethodWatch() ], e);
}(hs.Component);
n.LaunchLoginDays = l;
cc._RF.pop();
}, {} ],
ShowLoginDaysTrait: [ function(t, e, n) {
"use strict";
cc._RF.push(e, "ae375klZQtLyb+AG0AVZ/Ii", "ShowLoginDaysTrait");
var o, i = this && this.__extends || (o = function(t, e) {
return (o = Object.setPrototypeOf || {
__proto__: []
} instanceof Array && function(t, e) {
t.__proto__ = e;
} || function(t, e) {
for (var n in e) Object.prototype.hasOwnProperty.call(e, n) && (t[n] = e[n]);
})(t, e);
}, function(t, e) {
o(t, e);
function n() {
this.constructor = t;
}
t.prototype = null === e ? Object.create(e) : (n.prototype = e.prototype, new n());
}), r = this && this.__decorate || function(t, e, n, o) {
var i, r = arguments.length, a = r < 3 ? e : null === o ? o = Object.getOwnPropertyDescriptor(e, n) : o;
if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) a = Reflect.decorate(t, e, n, o); else for (var s = t.length - 1; s >= 0; s--) (i = t[s]) && (a = (r < 3 ? i(a) : r > 3 ? i(e, n, a) : i(e, n)) || a);
return r > 3 && a && Object.defineProperty(e, n, a), a;
}, a = this && this.__awaiter || function(t, e, n, o) {
return new (n || (n = Promise))(function(i, r) {
function a(t) {
try {
c(o.next(t));
} catch (t) {
r(t);
}
}
function s(t) {
try {
c(o.throw(t));
} catch (t) {
r(t);
}
}
function c(t) {
t.done ? i(t.value) : (e = t.value, e instanceof n ? e : new n(function(t) {
t(e);
})).then(a, s);
var e;
}
c((o = o.apply(t, e || [])).next());
});
}, s = this && this.__generator || function(t, e) {
var n, o, i, r, a = {
label: 0,
sent: function() {
if (1 & i[0]) throw i[1];
return i[1];
},
trys: [],
ops: []
};
return r = {
next: s(0),
throw: s(1),
return: s(2)
}, "function" == typeof Symbol && (r[Symbol.iterator] = function() {
return this;
}), r;
function s(t) {
return function(e) {
return c([ t, e ]);
};
}
function c(r) {
if (n) throw new TypeError("Generator is already executing.");
for (;a; ) try {
if (n = 1, o && (i = 2 & r[0] ? o.return : r[0] ? o.throw || ((i = o.return) && i.call(o), 
0) : o.next) && !(i = i.call(o, r[1])).done) return i;
(o = 0, i) && (r = [ 2 & r[0], i.value ]);
switch (r[0]) {
case 0:
case 1:
i = r;
break;

case 4:
a.label++;
return {
value: r[1],
done: !1
};

case 5:
a.label++;
o = r[1];
r = [ 0 ];
continue;

case 7:
r = a.ops.pop();
a.trys.pop();
continue;

default:
if (!(i = a.trys, i = i.length > 0 && i[i.length - 1]) && (6 === r[0] || 2 === r[0])) {
a = 0;
continue;
}
if (3 === r[0] && (!i || r[1] > i[0] && r[1] < i[3])) {
a.label = r[1];
break;
}
if (6 === r[0] && a.label < i[1]) {
a.label = i[1];
i = r;
break;
}
if (i && a.label < i[2]) {
a.label = i[2];
a.ops.push(r);
break;
}
i[2] && a.ops.pop();
a.trys.pop();
continue;
}
r = e.call(t, a);
} catch (t) {
r = [ 6, t ];
o = 0;
} finally {
n = i = 0;
}
if (5 & r[0]) throw r[1];
return {
value: r[0] ? r[1] : void 0,
done: !0
};
}
};
Object.defineProperty(n, "__esModule", {
value: !0
});
n.ShowLoginDaysTrait = void 0;
var c = t("./LaunchLoginDays"), l = function(t) {
i(e, t);
function e() {
var e = null !== t && t.apply(this, arguments) || this;
e.date = 0;
return e;
}
e.prototype.onCreate = function() {
var t = this;
this.ensureLoginDaysNode();
hs.UI.addEventListener("open", function(e) {
t.handlePageOpen(e);
});
};
e.prototype.onActive = function(t) {
if (hs.tp.isLaunchStartEnter(t)) {
var e = Date.now(), n = this.isSameDay(e, this.date);
if (n = this.updateIsSameDayByOtherTrait(n)) return;
if (hs.launchInfo.intoModeChoice && hs.launchInfo.chapterModelSwitch()) {
t.replace = !0;
this.showLoginDays().catch(function() {}).finally(function() {
var e;
null === (e = t.originalCaller) || void 0 === e || e.call(t);
});
}
}
};
e.prototype.handlePageOpen = function(t) {
var e, n, o = null === (n = null === (e = hs.homePageInfo) || void 0 === e ? void 0 : e.homeConfig) || void 0 === n ? void 0 : n.name;
t.name !== o && "ClassMain" !== t.name && "ChapterMain" !== t.name || this.loginDaysHideAnim();
};
e.prototype.isSameDay = function(t, e) {
var n = new Date(t), o = new Date(e);
return n.getFullYear() === o.getFullYear() && n.getMonth() === o.getMonth() && n.getDate() === o.getDate();
};
e.prototype.showLoginDays = function() {
return a(this, void 0, void 0, function() {
var t, e, n, o, i;
return s(this, function(r) {
switch (r.label) {
case 0:
t = this.props, e = t.launchTime, n = t.totalTime;
o = Date.now();
i = hs.gameInfo.entryTime;
return o - i > 1e3 * e ? [ 2 ] : [ 4, this.ensureLoginDaysNode() ];

case 1:
r.sent();
return this.loginDaysNode ? Date.now() - o > 1e3 * n ? [ 2 ] : [ 4, this.loginDaysShowAnim() ] : [ 2 ];

case 2:
r.sent();
return [ 2 ];
}
});
});
};
e.prototype.getPrefabPath = function() {
return "prefabs/LaunchLoginDays";
};
e.prototype.ensureLoginDaysNode = function() {
return a(this, void 0, void 0, function() {
var t = this;
return s(this, function() {
return this.loginDaysNode ? [ 2 ] : [ 2, new Promise(function(e) {
hs.ResLoader.loadByBundle("ShowLoginDaysTrait", t.getPrefabPath(), cc.Prefab, function(n, o) {
n || o && (t.loginDaysNode || (t.loginDaysNode = cc.instantiate(o)));
e();
});
}) ];
});
});
};
e.prototype.loginDaysShowAnim = function() {
var t, e, n, o;
return a(this, void 0, void 0, function() {
var i, r, a = this;
return s(this, function() {
this.date = Date.now();
(i = null === (e = null === (t = Cinst(hs.Launch)) || void 0 === t ? void 0 : t.node) || void 0 === e ? void 0 : e.getChildByName("loading")) && (i.active = !1);
hs.effectLayer.addChild(this.loginDaysNode);
r = hs.achievementInfo.getQueryAchievementStatisticsData(hs.Achievement_Target_Type.achieve_login_day);
this.loginDaysNode.getComponent(c.LaunchLoginDays).setState({
loginDays: r,
startY: hs.effectLayer.height / 2 + (null !== (o = null === (n = null == i ? void 0 : i.position) || void 0 === n ? void 0 : n.y) && void 0 !== o ? o : -193),
show: !0
});
cc.Tween.stopAllByTarget(this.loginDaysNode);
return [ 2, new Promise(function(t) {
cc.tween(a.loginDaysNode).delay(.66).call(function() {
return t();
}).start();
}) ];
});
});
};
e.prototype.loginDaysHideAnim = function() {
var t, e = this;
if (this.loginDaysNode) {
this.loginDaysNode.getComponent(c.LaunchLoginDays).setState({
hide: !0,
achievementActive: null === (t = TRAIT("IsShowAchievementTrait")) || void 0 === t ? void 0 : t.active
});
cc.Tween.stopAllByTarget(this.loginDaysNode);
cc.tween(this.loginDaysNode).delay(1 - .66).call(function() {
return e.clearLoginDaysAnim();
}).start();
}
};
e.prototype.clearLoginDaysAnim = function() {
var t, e;
(null === (e = null === (t = Cinst(hs.Launch)) || void 0 === t ? void 0 : t.node) || void 0 === e ? void 0 : e.getChildByName("loading")) && (Cinst(hs.Launch).node.getChildByName("loading").active = !0);
if (this.loginDaysNode) {
this.loginDaysNode.removeFromParent();
this.loginDaysNode.destroy();
this.loginDaysNode = null;
}
};
e.prototype.updateIsSameDayByOtherTrait = function(t) {
return t;
};
r([ hs.storageProperty({
key: "ShowLoginDaysTrait_Date"
}) ], e.prototype, "date", void 0);
return r([ classId("ShowLoginDaysTrait"), classMethodWatch() ], e);
}(Trait);
n.ShowLoginDaysTrait = l;
cc._RF.pop();
}, {
"./LaunchLoginDays": "LaunchLoginDays"
} ],
ShowLoginDays_comparisonNew_Trait: [ function(t, e, n) {
"use strict";
cc._RF.push(e, "c8f31oua0dNkJ4VSnwtjwtj", "ShowLoginDays_comparisonNew_Trait");
var o, i = this && this.__extends || (o = function(t, e) {
return (o = Object.setPrototypeOf || {
__proto__: []
} instanceof Array && function(t, e) {
t.__proto__ = e;
} || function(t, e) {
for (var n in e) Object.prototype.hasOwnProperty.call(e, n) && (t[n] = e[n]);
})(t, e);
}, function(t, e) {
o(t, e);
function n() {
this.constructor = t;
}
t.prototype = null === e ? Object.create(e) : (n.prototype = e.prototype, new n());
}), r = this && this.__decorate || function(t, e, n, o) {
var i, r = arguments.length, a = r < 3 ? e : null === o ? o = Object.getOwnPropertyDescriptor(e, n) : o;
if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) a = Reflect.decorate(t, e, n, o); else for (var s = t.length - 1; s >= 0; s--) (i = t[s]) && (a = (r < 3 ? i(a) : r > 3 ? i(e, n, a) : i(e, n)) || a);
return r > 3 && a && Object.defineProperty(e, n, a), a;
}, a = this && this.__awaiter || function(t, e, n, o) {
return new (n || (n = Promise))(function(i, r) {
function a(t) {
try {
c(o.next(t));
} catch (t) {
r(t);
}
}
function s(t) {
try {
c(o.throw(t));
} catch (t) {
r(t);
}
}
function c(t) {
t.done ? i(t.value) : (e = t.value, e instanceof n ? e : new n(function(t) {
t(e);
})).then(a, s);
var e;
}
c((o = o.apply(t, e || [])).next());
});
}, s = this && this.__generator || function(t, e) {
var n, o, i, r, a = {
label: 0,
sent: function() {
if (1 & i[0]) throw i[1];
return i[1];
},
trys: [],
ops: []
};
return r = {
next: s(0),
throw: s(1),
return: s(2)
}, "function" == typeof Symbol && (r[Symbol.iterator] = function() {
return this;
}), r;
function s(t) {
return function(e) {
return c([ t, e ]);
};
}
function c(r) {
if (n) throw new TypeError("Generator is already executing.");
for (;a; ) try {
if (n = 1, o && (i = 2 & r[0] ? o.return : r[0] ? o.throw || ((i = o.return) && i.call(o), 
0) : o.next) && !(i = i.call(o, r[1])).done) return i;
(o = 0, i) && (r = [ 2 & r[0], i.value ]);
switch (r[0]) {
case 0:
case 1:
i = r;
break;

case 4:
a.label++;
return {
value: r[1],
done: !1
};

case 5:
a.label++;
o = r[1];
r = [ 0 ];
continue;

case 7:
r = a.ops.pop();
a.trys.pop();
continue;

default:
if (!(i = a.trys, i = i.length > 0 && i[i.length - 1]) && (6 === r[0] || 2 === r[0])) {
a = 0;
continue;
}
if (3 === r[0] && (!i || r[1] > i[0] && r[1] < i[3])) {
a.label = r[1];
break;
}
if (6 === r[0] && a.label < i[1]) {
a.label = i[1];
i = r;
break;
}
if (i && a.label < i[2]) {
a.label = i[2];
a.ops.push(r);
break;
}
i[2] && a.ops.pop();
a.trys.pop();
continue;
}
r = e.call(t, a);
} catch (t) {
r = [ 6, t ];
o = 0;
} finally {
n = i = 0;
}
if (5 & r[0]) throw r[1];
return {
value: r[0] ? r[1] : void 0,
done: !0
};
}
};
Object.defineProperty(n, "__esModule", {
value: !0
});
n.ShowLoginDays_comparisonNew_Trait = void 0;
var c = t("./LaunchLoginDaysSpine"), l = function(t) {
i(e, t);
function e() {
return null !== t && t.apply(this, arguments) || this;
}
e.prototype.getPrefabPath = function() {
return "prefabs/LaunchLoginDaysSpine";
};
e.prototype.loginDaysShowAnim = function() {
var t, e, n, o, i, r;
return a(this, void 0, void 0, function() {
var a, l, u = this;
return s(this, function() {
this.date = Date.now();
(a = null === (e = null === (t = Cinst(hs.Launch)) || void 0 === t ? void 0 : t.node) || void 0 === e ? void 0 : e.getChildByName("loading")) && (a.active = !1);
hs.effectLayer.addChild(this.loginDaysNode);
l = hs.achievementInfo.getQueryAchievementStatisticsData(hs.Achievement_Target_Type.achieve_login_day);
null === (o = null === (n = this.loginDaysNode) || void 0 === n ? void 0 : n.getComponent(c.LaunchLoginDaysSpine)) || void 0 === o || o.setState({
loginDays: l,
startY: hs.effectLayer.height / 2 + (null !== (r = null === (i = null == a ? void 0 : a.position) || void 0 === i ? void 0 : i.y) && void 0 !== r ? r : -193),
show: !0
});
cc.Tween.stopAllByTarget(this.loginDaysNode);
return [ 2, new Promise(function(t) {
cc.tween(u.loginDaysNode).delay(.66).call(function() {
return t();
}).start();
}) ];
});
});
};
e.prototype.loginDaysHideAnim = function() {
var t, e, n, o = this;
if (this.loginDaysNode) {
null === (e = null === (t = this.loginDaysNode) || void 0 === t ? void 0 : t.getComponent(c.LaunchLoginDaysSpine)) || void 0 === e || e.setState({
hide: !0,
achievementActive: null === (n = TRAIT("IsShowAchievementTrait")) || void 0 === n ? void 0 : n.active
});
cc.Tween.stopAllByTarget(this.loginDaysNode);
cc.tween(this.loginDaysNode).delay(1 - .66).call(function() {
return o.clearLoginDaysAnim();
}).start();
}
};
return r([ classId("ShowLoginDaysTrait", "comparisonNew") ], e);
}(t("./ShowLoginDaysTrait").ShowLoginDaysTrait);
n.ShowLoginDays_comparisonNew_Trait = l;
cc._RF.pop();
}, {
"./LaunchLoginDaysSpine": "LaunchLoginDaysSpine",
"./ShowLoginDaysTrait": "ShowLoginDaysTrait"
} ],
ShowLoginDays_isOptimization_Trait: [ function(t, e, n) {
"use strict";
cc._RF.push(e, "a7b3cnSToFPapwSjV4fKjsE", "ShowLoginDays_isOptimization_Trait");
var o, i = this && this.__extends || (o = function(t, e) {
return (o = Object.setPrototypeOf || {
__proto__: []
} instanceof Array && function(t, e) {
t.__proto__ = e;
} || function(t, e) {
for (var n in e) Object.prototype.hasOwnProperty.call(e, n) && (t[n] = e[n]);
})(t, e);
}, function(t, e) {
o(t, e);
function n() {
this.constructor = t;
}
t.prototype = null === e ? Object.create(e) : (n.prototype = e.prototype, new n());
}), r = this && this.__decorate || function(t, e, n, o) {
var i, r = arguments.length, a = r < 3 ? e : null === o ? o = Object.getOwnPropertyDescriptor(e, n) : o;
if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) a = Reflect.decorate(t, e, n, o); else for (var s = t.length - 1; s >= 0; s--) (i = t[s]) && (a = (r < 3 ? i(a) : r > 3 ? i(e, n, a) : i(e, n)) || a);
return r > 3 && a && Object.defineProperty(e, n, a), a;
}, a = this && this.__awaiter || function(t, e, n, o) {
return new (n || (n = Promise))(function(i, r) {
function a(t) {
try {
c(o.next(t));
} catch (t) {
r(t);
}
}
function s(t) {
try {
c(o.throw(t));
} catch (t) {
r(t);
}
}
function c(t) {
t.done ? i(t.value) : (e = t.value, e instanceof n ? e : new n(function(t) {
t(e);
})).then(a, s);
var e;
}
c((o = o.apply(t, e || [])).next());
});
}, s = this && this.__generator || function(t, e) {
var n, o, i, r, a = {
label: 0,
sent: function() {
if (1 & i[0]) throw i[1];
return i[1];
},
trys: [],
ops: []
};
return r = {
next: s(0),
throw: s(1),
return: s(2)
}, "function" == typeof Symbol && (r[Symbol.iterator] = function() {
return this;
}), r;
function s(t) {
return function(e) {
return c([ t, e ]);
};
}
function c(r) {
if (n) throw new TypeError("Generator is already executing.");
for (;a; ) try {
if (n = 1, o && (i = 2 & r[0] ? o.return : r[0] ? o.throw || ((i = o.return) && i.call(o), 
0) : o.next) && !(i = i.call(o, r[1])).done) return i;
(o = 0, i) && (r = [ 2 & r[0], i.value ]);
switch (r[0]) {
case 0:
case 1:
i = r;
break;

case 4:
a.label++;
return {
value: r[1],
done: !1
};

case 5:
a.label++;
o = r[1];
r = [ 0 ];
continue;

case 7:
r = a.ops.pop();
a.trys.pop();
continue;

default:
if (!(i = a.trys, i = i.length > 0 && i[i.length - 1]) && (6 === r[0] || 2 === r[0])) {
a = 0;
continue;
}
if (3 === r[0] && (!i || r[1] > i[0] && r[1] < i[3])) {
a.label = r[1];
break;
}
if (6 === r[0] && a.label < i[1]) {
a.label = i[1];
i = r;
break;
}
if (i && a.label < i[2]) {
a.label = i[2];
a.ops.push(r);
break;
}
i[2] && a.ops.pop();
a.trys.pop();
continue;
}
r = e.call(t, a);
} catch (t) {
r = [ 6, t ];
o = 0;
} finally {
n = i = 0;
}
if (5 & r[0]) throw r[1];
return {
value: r[0] ? r[1] : void 0,
done: !0
};
}
};
Object.defineProperty(n, "__esModule", {
value: !0
});
n.ShowLoginDays_isOptimization_Trait = void 0;
var c = t("./ShowLoginDaysTrait"), l = {
name: "LaunchLoginDays",
url: "prefabs/LaunchLoginDays",
bundleName: "ShowLoginDaysTrait"
}, u = {
name: "LaunchLoginDays",
url: "prefabs/LaunchLoginDays_new",
bundleName: "ShowLoginDaysTrait"
}, h = function(t) {
i(e, t);
function e() {
var e = null !== t && t.apply(this, arguments) || this;
e._prefabUrl = l;
return e;
}
e.prototype.getIsOptimization = function() {
var t, e;
return null !== (e = null === (t = this.props) || void 0 === t ? void 0 : t.isOptimization) && void 0 !== e && e;
};
e.prototype.ensureLoginDaysNode = function() {
return a(this, void 0, void 0, function() {
var t = this;
return s(this, function(e) {
switch (e.label) {
case 0:
return this.loginDaysNode ? [ 2 ] : [ 4, this.getResUrl() ];

case 1:
e.sent();
return [ 2, new Promise(function(e) {
hs.ResLoader.loadByBundle(t._prefabUrl.bundleName, t._prefabUrl.url, cc.Prefab, function(n, o) {
n || o && (t.loginDaysNode || (t.loginDaysNode = cc.instantiate(o)));
e();
});
}) ];
}
});
});
};
e.prototype.getResUrl = function() {
return a(this, void 0, void 0, function() {
return s(this, function(t) {
switch (t.label) {
case 0:
if (!this.getIsOptimization()) {
this._prefabUrl = l;
return [ 2 ];
}
return [ 4, hs.ResLoader.asyncIsBundleAssetDownloaded(this.traitName, l.url, {
type: cc.Prefab
}) ];

case 1:
if (!t.sent()) {
this._prefabUrl = u;
return [ 2 ];
}
return [ 4, hs.ResLoader.asyncIsBundleAssetDownloaded(this.traitName, u.url, {
type: cc.Prefab
}) ];

case 2:
t.sent() && (this._prefabUrl = u);
return [ 2 ];
}
});
});
};
return r([ classId("ShowLoginDaysTrait", "isOptimization") ], e);
}(c.ShowLoginDaysTrait);
n.ShowLoginDays_isOptimization_Trait = h;
cc._RF.pop();
}, {
"./ShowLoginDaysTrait": "ShowLoginDaysTrait"
} ]
}, {}, [ "LaunchLoginDays", "LaunchLoginDaysSpine", "ShowLoginDaysTrait", "ShowLoginDays_comparisonNew_Trait", "ShowLoginDays_isOptimization_Trait" ]);
//# sourceMappingURL=index.js.map
