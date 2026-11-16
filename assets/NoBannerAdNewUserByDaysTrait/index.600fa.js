window.__require = function e(t, r, n) {
function o(i, s) {
if (!r[i]) {
if (!t[i]) {
var u = i.split("/");
u = u[u.length - 1];
if (!t[u]) {
var l = "function" == typeof __require && __require;
if (!s && l) return l(u, !0);
if (a) return a(u, !0);
throw new Error("Cannot find module '" + i + "'");
}
i = u;
}
var c = r[i] = {
exports: {}
};
t[i][0].call(c.exports, function(e) {
return o(t[i][1][e] || e);
}, c, c.exports, e, t, r, n);
}
return r[i].exports;
}
for (var a = "function" == typeof __require && __require, i = 0; i < n.length; i++) o(n[i]);
return o;
}({
NoBannerAdNewUserByDaysTrait: [ function(e, t, r) {
"use strict";
cc._RF.push(t, "5a36c0I8pBKa4TtV24kFSmc", "NoBannerAdNewUserByDaysTrait");
var n, o = this && this.__extends || (n = function(e, t) {
return (n = Object.setPrototypeOf || {
__proto__: []
} instanceof Array && function(e, t) {
e.__proto__ = t;
} || function(e, t) {
for (var r in t) Object.prototype.hasOwnProperty.call(t, r) && (e[r] = t[r]);
})(e, t);
}, function(e, t) {
n(e, t);
function r() {
this.constructor = e;
}
e.prototype = null === t ? Object.create(t) : (r.prototype = t.prototype, new r());
}), a = this && this.__decorate || function(e, t, r, n) {
var o, a = arguments.length, i = a < 3 ? t : null === n ? n = Object.getOwnPropertyDescriptor(t, r) : n;
if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) i = Reflect.decorate(e, t, r, n); else for (var s = e.length - 1; s >= 0; s--) (o = e[s]) && (i = (a < 3 ? o(i) : a > 3 ? o(t, r, i) : o(t, r)) || i);
return a > 3 && i && Object.defineProperty(t, r, i), i;
}, i = this && this.__read || function(e, t) {
var r = "function" == typeof Symbol && e[Symbol.iterator];
if (!r) return e;
var n, o, a = r.call(e), i = [];
try {
for (;(void 0 === t || t-- > 0) && !(n = a.next()).done; ) i.push(n.value);
} catch (e) {
o = {
error: e
};
} finally {
try {
n && !n.done && (r = a.return) && r.call(a);
} finally {
if (o) throw o.error;
}
}
return i;
};
Object.defineProperty(r, "__esModule", {
value: !0
});
r.NoBannerAdNewUserByDaysTrait = void 0;
var s = function(e) {
o(t, e);
function t() {
return null !== e && e.apply(this, arguments) || this;
}
t.prototype.isInNoBannerPeriod = function() {
var e = hs.gameInfo.installTime;
return (Date.now() - e) / 1e3 / 60 / 60 / 24 <= i(this.props.days, 2)[1];
};
t.prototype.onActive = function(e) {
if (hs.tp.isAdvertisement_Banner_ProxyOnBannerShow(e)) {
if (this.isSkip()) return;
if (!this.isInNoBannerPeriod()) {
hs.NativeAd.callNativeBannerGone("1");
return;
}
hs.NativeAd.callNativeBannerGone("0");
e.replace = !0;
e.returnState = !0;
}
};
t.prototype.isSkip = function() {
return !1;
};
return a([ classId("NoBannerAdNewUserByDaysTrait"), classMethodWatch() ], t);
}(Trait);
r.NoBannerAdNewUserByDaysTrait = s;
cc._RF.pop();
}, {} ],
NoBannerAdNewUserByDays_10mixYlab_Trait: [ function(e, t, r) {
"use strict";
cc._RF.push(t, "ff11a8GE5VAy7sXfNLMCPly", "NoBannerAdNewUserByDays_10mixYlab_Trait");
var n, o = this && this.__extends || (n = function(e, t) {
return (n = Object.setPrototypeOf || {
__proto__: []
} instanceof Array && function(e, t) {
e.__proto__ = t;
} || function(e, t) {
for (var r in t) Object.prototype.hasOwnProperty.call(t, r) && (e[r] = t[r]);
})(e, t);
}, function(e, t) {
n(e, t);
function r() {
this.constructor = e;
}
e.prototype = null === t ? Object.create(t) : (r.prototype = t.prototype, new r());
}), a = (this && this.__assign, this && this.__decorate || function(e, t, r, n) {
var o, a = arguments.length, i = a < 3 ? t : null === n ? n = Object.getOwnPropertyDescriptor(t, r) : n;
if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) i = Reflect.decorate(e, t, r, n); else for (var s = e.length - 1; s >= 0; s--) (o = e[s]) && (i = (a < 3 ? o(i) : a > 3 ? o(t, r, i) : o(t, r)) || i);
return a > 3 && i && Object.defineProperty(t, r, i), i;
});
this && this.__read;
Object.defineProperty(r, "__esModule", {
value: !0
});
r.NoBannerAdNewUserByDays_10mixYlab_Trait = void 0;
var i = function(e) {
o(t, e);
function t() {
return null !== e && e.apply(this, arguments) || this;
}
t.prototype.onCreate = function() {
this.registerGmMenu();
};
Object.defineProperty(t.prototype, "onActiveCondition", {
get: function() {
if (!this.isUserExcluded()) return !0;
},
enumerable: !1,
configurable: !0
});
Object.defineProperty(t.prototype, "day1GameCntThreshold", {
get: function() {
var e, t = null === (e = this.props) || void 0 === e ? void 0 : e.day1GameCntThreshold;
return Number.isFinite(t) ? t : 6;
},
enumerable: !1,
configurable: !0
});
Object.defineProperty(t.prototype, "day1GameTimeThreshold", {
get: function() {
var e, t = null === (e = this.props) || void 0 === e ? void 0 : e.day1GameTimeThreshold;
return Number.isFinite(t) ? t : 1600;
},
enumerable: !1,
configurable: !0
});
Object.defineProperty(t.prototype, "day1AdRevenueThreshold", {
get: function() {
var e, t = null === (e = this.props) || void 0 === e ? void 0 : e.day1AdRevenueThreshold;
return Number.isFinite(t) ? t : .05;
},
enumerable: !1,
configurable: !0
});
Object.defineProperty(t.prototype, "totalRamThreshold", {
get: function() {
var e, t = null === (e = this.props) || void 0 === e ? void 0 : e.totalRamThreshold;
return Number.isFinite(t) ? t : 5;
},
enumerable: !1,
configurable: !0
});
Object.defineProperty(t.prototype, "excludeMatchCount", {
get: function() {
return 2;
},
enumerable: !1,
configurable: !0
});
t.prototype.hasGmFeatureOverride = function() {
return !1;
};
t.prototype.isUserExcluded = function() {
var e = hs.gameFeaturesInfo.getGameFeatureInfo();
if (!e && !this.hasGmFeatureOverride()) return !1;
var t = this.getFeatureValue(null == e ? void 0 : e.day_1_game_cnt), r = this.getFeatureValue(null == e ? void 0 : e.day_1_game_time), n = this.getFeatureValue(null == e ? void 0 : e.day_1_ad_revenue), o = this.getTotalRam(null == e ? void 0 : e.total_ram), a = 0, i = {}, s = null !== t && t > this.day1GameCntThreshold;
s && a++;
i.day_1_game_cnt = {
value: t,
threshold: this.day1GameCntThreshold,
matched: s
};
var u = null !== r && r > this.day1GameTimeThreshold;
u && a++;
i.day_1_game_time = {
value: r,
threshold: this.day1GameTimeThreshold,
matched: u
};
var l = null !== n && n > this.day1AdRevenueThreshold;
l && a++;
i.day_1_ad_revenue = {
value: n,
threshold: this.day1AdRevenueThreshold,
matched: l
};
var c = null !== o && o >= this.totalRamThreshold;
c && a++;
i.total_ram = {
value: o,
threshold: this.totalRamThreshold,
matched: c
};
return a >= this.excludeMatchCount;
};
t.prototype.getTotalRam = function(e) {
var t = this.getFeatureValue(e);
return null !== t ? t : null;
};
t.prototype.getFeatureValue = function(e) {
if ("number" == typeof e) return Number.isFinite(e) ? e : null;
if ("string" == typeof e && "" !== e.trim()) {
var t = Number(e);
return Number.isFinite(t) ? t : null;
}
return null;
};
t.prototype.registerGmMenu = function() {};
t._gmDay1GameCnt = -1;
t._gmDay1GameTime = -1;
t._gmDay1AdRevenue = -1;
t._gmTotalRam = -1;
t._gmMenuRegistered = !1;
return a([ classId("NoBannerAdNewUserByDaysTrait", "10mixYlab") ], t);
}(e("./NoBannerAdNewUserByDaysTrait").NoBannerAdNewUserByDaysTrait);
r.NoBannerAdNewUserByDays_10mixYlab_Trait = i;
cc._RF.pop();
}, {
"./NoBannerAdNewUserByDaysTrait": "NoBannerAdNewUserByDaysTrait"
} ],
NoBannerAdNewUserByDays_gpz1_Trait: [ function(e, t, r) {
"use strict";
cc._RF.push(t, "3d8a2xOX2tKHZ4vfI2eDxor", "NoBannerAdNewUserByDays_gpz1_Trait");
var n, o = this && this.__extends || (n = function(e, t) {
return (n = Object.setPrototypeOf || {
__proto__: []
} instanceof Array && function(e, t) {
e.__proto__ = t;
} || function(e, t) {
for (var r in t) Object.prototype.hasOwnProperty.call(t, r) && (e[r] = t[r]);
})(e, t);
}, function(e, t) {
n(e, t);
function r() {
this.constructor = e;
}
e.prototype = null === t ? Object.create(t) : (r.prototype = t.prototype, new r());
}), a = this && this.__assign || function() {
return (a = Object.assign || function(e) {
for (var t, r = 1, n = arguments.length; r < n; r++) {
t = arguments[r];
for (var o in t) Object.prototype.hasOwnProperty.call(t, o) && (e[o] = t[o]);
}
return e;
}).apply(this, arguments);
}, i = this && this.__decorate || function(e, t, r, n) {
var o, a = arguments.length, i = a < 3 ? t : null === n ? n = Object.getOwnPropertyDescriptor(t, r) : n;
if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) i = Reflect.decorate(e, t, r, n); else for (var s = e.length - 1; s >= 0; s--) (o = e[s]) && (i = (a < 3 ? o(i) : a > 3 ? o(t, r, i) : o(t, r)) || i);
return a > 3 && i && Object.defineProperty(t, r, i), i;
};
Object.defineProperty(r, "__esModule", {
value: !0
});
r.NoBannerAdNewUserByDays_gpz1_Trait = void 0;
function s(e) {
if ("number" == typeof e) return Number.isFinite(e) && e > 0 ? e : 0;
if ("string" == typeof e && "" !== e.trim()) {
var t = Number(e);
return Number.isFinite(t) && t > 0 ? t : 0;
}
return 0;
}
var u = function(e) {
o(t, e);
function t() {
return null !== e && e.apply(this, arguments) || this;
}
t.prototype.onCreate = function() {
e.prototype.onCreate.call(this);
Trait.dynamicEnableTraitsAsync([ {
id: 336509001
} ]);
};
t.prototype.isIsOpenBannerTimeCtrTraitCheckModeAble = function(e) {
e.returnState = !0;
e.returnValue = !1;
e.replace = !0;
};
t.prototype.checkHighValueHeavyUser = function() {
var e = hs.gameFeaturesInfo.getGameFeatureInfo();
if (!e) return !1;
var t = (null == (e = a(a({}, e), {
day_1_game_time: s(e.day_1_game_time),
day_1_ad_revenue: s(e.day_1_ad_revenue),
his_active_days: s(e.his_active_days)
})) ? void 0 : e.day_1_game_time) > 1500, r = (null == e ? void 0 : e.day_1_ad_revenue) > .05, n = (null == e ? void 0 : e.his_active_days) > 6;
return t && r && n;
};
Object.defineProperty(t.prototype, "onActiveCondition", {
get: function() {
return !this.checkHighValueHeavyUser();
},
enumerable: !1,
configurable: !0
});
return i([ classId("NoBannerAdNewUserByDaysTrait", "gpz1"), classMethodWatch() ], t);
}(e("./NoBannerAdNewUserByDaysTrait").NoBannerAdNewUserByDaysTrait);
r.NoBannerAdNewUserByDays_gpz1_Trait = u;
cc._RF.pop();
}, {
"./NoBannerAdNewUserByDaysTrait": "NoBannerAdNewUserByDaysTrait"
} ]
}, {}, [ "NoBannerAdNewUserByDaysTrait", "NoBannerAdNewUserByDays_10mixYlab_Trait", "NoBannerAdNewUserByDays_gpz1_Trait" ]);
//# sourceMappingURL=index.js.map
