window.__require = function e(t, r, n) {
function i(s, a) {
if (!r[s]) {
if (!t[s]) {
var u = s.split("/");
u = u[u.length - 1];
if (!t[u]) {
var l = "function" == typeof __require && __require;
if (!a && l) return l(u, !0);
if (o) return o(u, !0);
throw new Error("Cannot find module '" + s + "'");
}
s = u;
}
var c = r[s] = {
exports: {}
};
t[s][0].call(c.exports, function(e) {
return i(t[s][1][e] || e);
}, c, c.exports, e, t, r, n);
}
return r[s].exports;
}
for (var o = "function" == typeof __require && __require, s = 0; s < n.length; s++) i(n[s]);
return i;
}({
IsClassADReviveNoInerestingTrait: [ function(e, t, r) {
"use strict";
cc._RF.push(t, "18cccAxBzFJhL0K+At2n1xz", "IsClassADReviveNoInerestingTrait");
var n, i = this && this.__extends || (n = function(e, t) {
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
}), o = this && this.__decorate || function(e, t, r, n) {
var i, o = arguments.length, s = o < 3 ? t : null === n ? n = Object.getOwnPropertyDescriptor(t, r) : n;
if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) s = Reflect.decorate(e, t, r, n); else for (var a = e.length - 1; a >= 0; a--) (i = e[a]) && (s = (o < 3 ? i(s) : o > 3 ? i(t, r, s) : i(t, r)) || s);
return o > 3 && s && Object.defineProperty(t, r, s), s;
};
Object.defineProperty(r, "__esModule", {
value: !0
});
r.IsClassADReviveNoInerestingTrait = void 0;
var s = function(e) {
i(t, e);
function t() {
var t = null !== e && e.apply(this, arguments) || this;
t.STORAGE_KEY = "isClassADReviveNoIneresting_reviveSpendTime";
return t;
}
Object.defineProperty(t.prototype, "noAdDelay", {
get: function() {
var e, t;
return null !== (t = null === (e = this.props) || void 0 === e ? void 0 : e.noAdDelay) && void 0 !== t ? t : 30;
},
enumerable: !1,
configurable: !0
});
t.prototype.getCurrentSpendTime = function() {
var e = Date.now() - hs.classTimerInfo.spendStartTime;
return (hs.classTimerInfo.spendTime + e) / 1e3;
};
t.prototype.getReviveSpendTime = function() {
return storage.getItem(this.STORAGE_KEY, 0);
};
t.prototype.setReviveSpendTime = function(e) {
storage.setItem(this.STORAGE_KEY, e);
};
t.prototype.resetReviveSpendTime = function() {
storage.setItem(this.STORAGE_KEY, 0);
};
t.prototype.onActive = function(e) {
if (hs.gameInfo.gameMode === hs.GameMode.Class) {
hs.tp.isClassGame_ProxyNewGameInit(e) && this.resetReviveSpendTime();
if (hs.tp.isAdvertisement_ProxyOnRewardOverSuccess(e)) {
var t = this.getCurrentSpendTime();
this.setReviveSpendTime(t);
}
hs.tp.isClassRevive_ProxyOnRevive_Success(e);
if (hs.tp.isClassAdvertisement_FullScreenProxyShieldPlayAdvertisement(e)) {
var r = this.getReviveSpendTime();
if (r <= 0) return;
this.getCurrentSpendTime() - r < this.noAdDelay && (e.args[0] = !0);
this.resetReviveSpendTime();
}
}
};
return o([ classId("IsClassADReviveNoInerestingTrait") ], t);
}(Trait);
r.IsClassADReviveNoInerestingTrait = s;
cc._RF.pop();
}, {} ],
IsClassADReviveNoIneresting_12mixYlab_Trait: [ function(e, t, r) {
"use strict";
cc._RF.push(t, "ddd04/BeLFAPI7wn1cMnlNU", "IsClassADReviveNoIneresting_12mixYlab_Trait");
var n, i = this && this.__extends || (n = function(e, t) {
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
}), o = this && this.__decorate || function(e, t, r, n) {
var i, o = arguments.length, s = o < 3 ? t : null === n ? n = Object.getOwnPropertyDescriptor(t, r) : n;
if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) s = Reflect.decorate(e, t, r, n); else for (var a = e.length - 1; a >= 0; a--) (i = e[a]) && (s = (o < 3 ? i(s) : o > 3 ? i(t, r, s) : i(t, r)) || s);
return o > 3 && s && Object.defineProperty(t, r, s), s;
};
this && this.__read;
Object.defineProperty(r, "__esModule", {
value: !0
});
r.IsClassADReviveNoIneresting_12mixYlab_Trait = void 0;
var s = function(e) {
i(t, e);
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
Object.defineProperty(t.prototype, "day1GameTimeThreshold", {
get: function() {
var e, t = null === (e = this.props) || void 0 === e ? void 0 : e.day1GameTimeThreshold;
return Number.isFinite(t) ? t : 1500;
},
enumerable: !1,
configurable: !0
});
Object.defineProperty(t.prototype, "day1GameAvgScoreThreshold", {
get: function() {
var e, t = null === (e = this.props) || void 0 === e ? void 0 : e.day1GameAvgScoreThreshold;
return Number.isFinite(t) ? t : 4500;
},
enumerable: !1,
configurable: !0
});
Object.defineProperty(t.prototype, "day1InterAdPvThreshold", {
get: function() {
var e, t = null === (e = this.props) || void 0 === e ? void 0 : e.day1InterAdPvThreshold;
return Number.isFinite(t) ? t : 2;
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
var t = this.getFeatureValue(null == e ? void 0 : e.day_1_game_time), r = this.getFeatureValue(null == e ? void 0 : e.day_1_game_avg_score), n = this.getFeatureValue(null == e ? void 0 : e.day_1_inter_ad_pv), i = null !== t && t > this.day1GameTimeThreshold, o = null !== r && r > this.day1GameAvgScoreThreshold, s = null !== n && n >= this.day1InterAdPvThreshold;
return i && o && s;
};
t.prototype.getFeatureValue = function(e) {
return Number.isFinite(e) ? e : null;
};
t.prototype.registerGmMenu = function() {};
t._gmDay1GameTime = -1;
t._gmDay1GameAvgScore = -1;
t._gmDay1InterAdPv = -1;
t._gmMenuRegistered = !1;
return o([ classId("IsClassADReviveNoInerestingTrait", "12mixYlab") ], t);
}(e("./IsClassADReviveNoInerestingTrait").IsClassADReviveNoInerestingTrait);
r.IsClassADReviveNoIneresting_12mixYlab_Trait = s;
cc._RF.pop();
}, {
"./IsClassADReviveNoInerestingTrait": "IsClassADReviveNoInerestingTrait"
} ],
IsClassADReviveNoIneresting_13mixYlab_Trait: [ function(e, t, r) {
"use strict";
cc._RF.push(t, "5459fKpHeBJGqtP5tcrgL7p", "IsClassADReviveNoIneresting_13mixYlab_Trait");
var n, i = this && this.__extends || (n = function(e, t) {
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
}), o = (this && this.__assign, this && this.__decorate || function(e, t, r, n) {
var i, o = arguments.length, s = o < 3 ? t : null === n ? n = Object.getOwnPropertyDescriptor(t, r) : n;
if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) s = Reflect.decorate(e, t, r, n); else for (var a = e.length - 1; a >= 0; a--) (i = e[a]) && (s = (o < 3 ? i(s) : o > 3 ? i(t, r, s) : i(t, r)) || s);
return o > 3 && s && Object.defineProperty(t, r, s), s;
});
this && this.__read;
Object.defineProperty(r, "__esModule", {
value: !0
});
r.IsClassADReviveNoIneresting_13mixYlab_Trait = void 0;
var s = function(e) {
i(t, e);
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
Object.defineProperty(t.prototype, "day1GameTimeThreshold", {
get: function() {
var e, t = null === (e = this.props) || void 0 === e ? void 0 : e.day1GameTimeThreshold;
return Number.isFinite(t) ? t : 1700;
},
enumerable: !1,
configurable: !0
});
Object.defineProperty(t.prototype, "day1GameAvgScoreThreshold", {
get: function() {
var e, t = null === (e = this.props) || void 0 === e ? void 0 : e.day1GameAvgScoreThreshold;
return Number.isFinite(t) ? t : 5e3;
},
enumerable: !1,
configurable: !0
});
Object.defineProperty(t.prototype, "day1GameCntEndlessThreshold", {
get: function() {
var e, t = null === (e = this.props) || void 0 === e ? void 0 : e.day1GameCntEndlessThreshold;
return Number.isFinite(t) ? t : 3;
},
enumerable: !1,
configurable: !0
});
Object.defineProperty(t.prototype, "totalRamThreshold", {
get: function() {
var e, t = null === (e = this.props) || void 0 === e ? void 0 : e.totalRamThreshold;
return Number.isFinite(t) ? t : 5.3;
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
var t = this.getFeatureValue(null == e ? void 0 : e.day_1_game_time), r = this.getFeatureValue(null == e ? void 0 : e.day_1_game_avg_score), n = this.getFeatureValue(null == e ? void 0 : e.day_1_game_cnt_endless), i = this.getTotalRam(null == e ? void 0 : e.total_ram), o = 0, s = {}, a = null !== t && t > this.day1GameTimeThreshold;
a && o++;
s.day_1_game_time = {
value: t,
threshold: this.day1GameTimeThreshold,
matched: a
};
var u = null !== r && r > this.day1GameAvgScoreThreshold;
u && o++;
s.day_1_game_avg_score = {
value: r,
threshold: this.day1GameAvgScoreThreshold,
matched: u
};
var l = null !== n && n > this.day1GameCntEndlessThreshold;
l && o++;
s.day_1_game_cnt_endless = {
value: n,
threshold: this.day1GameCntEndlessThreshold,
matched: l
};
var c = null !== i && i >= this.totalRamThreshold;
c && o++;
s.total_ram = {
value: i,
threshold: this.totalRamThreshold,
matched: c
};
return o >= this.excludeMatchCount;
};
t.prototype.getTotalRam = function(e) {
var t = this.getFeatureValue(e);
return null !== t ? t : null;
};
t.prototype.getFeatureValue = function(e) {
return Number.isFinite(e) ? e : null;
};
t.prototype.registerGmMenu = function() {};
t._gmDay1GameTime = -1;
t._gmDay1GameAvgScore = -1;
t._gmDay1GameCntEndless = -1;
t._gmTotalRam = -1;
t._gmMenuRegistered = !1;
return o([ classId("IsClassADReviveNoInerestingTrait", "13mixYlab") ], t);
}(e("./IsClassADReviveNoInerestingTrait").IsClassADReviveNoInerestingTrait);
r.IsClassADReviveNoIneresting_13mixYlab_Trait = s;
cc._RF.pop();
}, {
"./IsClassADReviveNoInerestingTrait": "IsClassADReviveNoInerestingTrait"
} ],
IsClassADReviveNoIneresting_15mixYlab_Trait: [ function(e, t, r) {
"use strict";
cc._RF.push(t, "78e47xiljtAZr/qABwWOA3T", "IsClassADReviveNoIneresting_15mixYlab_Trait");
var n, i = this && this.__extends || (n = function(e, t) {
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
}), o = (this && this.__assign, this && this.__decorate || function(e, t, r, n) {
var i, o = arguments.length, s = o < 3 ? t : null === n ? n = Object.getOwnPropertyDescriptor(t, r) : n;
if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) s = Reflect.decorate(e, t, r, n); else for (var a = e.length - 1; a >= 0; a--) (i = e[a]) && (s = (o < 3 ? i(s) : o > 3 ? i(t, r, s) : i(t, r)) || s);
return o > 3 && s && Object.defineProperty(t, r, s), s;
});
this && this.__read;
Object.defineProperty(r, "__esModule", {
value: !0
});
r.IsClassADReviveNoIneresting_15mixYlab_Trait = void 0;
var s = e("./IsClassADReviveNoInerestingTrait"), a = [ "美国", "欧洲" ], u = function(e) {
i(t, e);
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
Object.defineProperty(t.prototype, "day1GameTimeThreshold", {
get: function() {
var e, t = null === (e = this.props) || void 0 === e ? void 0 : e.day1GameTimeThreshold;
return Number.isFinite(t) ? t : 1500;
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
Object.defineProperty(t.prototype, "day1GameAvgScoreThreshold", {
get: function() {
var e, t = null === (e = this.props) || void 0 === e ? void 0 : e.day1GameAvgScoreThreshold;
return Number.isFinite(t) ? t : 4500;
},
enumerable: !1,
configurable: !0
});
Object.defineProperty(t.prototype, "countryGroupArr", {
get: function() {
var e, t = null === (e = this.props) || void 0 === e ? void 0 : e.countryGroupArr;
return Array.isArray(t) && 0 !== t.length ? t.map(function(e) {
return ("" + (e || "")).trim();
}).filter(function(e) {
return "" !== e;
}) : a;
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
Object.defineProperty(t.prototype, "currentCountryCode", {
get: function() {
var e, t;
return ((null === (t = null === (e = hs.deviceInfo) || void 0 === e ? void 0 : e.data) || void 0 === t ? void 0 : t.country) || "").trim().toUpperCase();
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
var t = this.getFeatureValue(null == e ? void 0 : e.day_1_game_time), r = this.getFeatureValue(null == e ? void 0 : e.day_1_game_cnt), n = this.getFeatureValue(null == e ? void 0 : e.day_1_game_avg_score), i = this.getCountryGroup(null == e ? void 0 : e.country_group), o = 0, s = {}, a = null !== t && t > this.day1GameTimeThreshold;
a && o++;
s.day_1_game_time = {
value: t,
threshold: this.day1GameTimeThreshold,
matched: a
};
var u = null !== r && r > this.day1GameCntThreshold;
u && o++;
s.day_1_game_cnt = {
value: r,
threshold: this.day1GameCntThreshold,
matched: u
};
var l = null !== n && n > this.day1GameAvgScoreThreshold;
l && o++;
s.day_1_game_avg_score = {
value: n,
threshold: this.day1GameAvgScoreThreshold,
matched: l
};
var c = null !== i && this.countryGroupArr.includes(i);
c && o++;
s.country_group = {
value: i,
threshold: this.countryGroupArr,
matched: c
};
return o >= this.excludeMatchCount;
};
t.prototype.getCountryGroup = function(e) {
return this.normalizeCountryGroup(e) || null;
};
t.prototype.normalizeCountryGroup = function(e) {
if ("string" != typeof e) return null;
var t = e.trim();
return "" === t ? null : t;
};
t.prototype.getFeatureValue = function(e) {
return Number.isFinite(e) ? e : null;
};
t.prototype.registerGmMenu = function() {};
t._gmDay1GameTime = -1;
t._gmDay1GameCnt = -1;
t._gmDay1GameAvgScore = -1;
t._gmCountryGroup = "";
t._gmMenuRegistered = !1;
return o([ classId("IsClassADReviveNoInerestingTrait", "15mixYlab") ], t);
}(s.IsClassADReviveNoInerestingTrait);
r.IsClassADReviveNoIneresting_15mixYlab_Trait = u;
cc._RF.pop();
}, {
"./IsClassADReviveNoInerestingTrait": "IsClassADReviveNoInerestingTrait"
} ],
IsClassADReviveNoIneresting_gpz1_Trait: [ function(e, t, r) {
"use strict";
cc._RF.push(t, "f7d67+39xdJYLxSpeUMLAes", "IsClassADReviveNoIneresting_gpz1_Trait");
var n, i = this && this.__extends || (n = function(e, t) {
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
}), o = this && this.__assign || function() {
return (o = Object.assign || function(e) {
for (var t, r = 1, n = arguments.length; r < n; r++) {
t = arguments[r];
for (var i in t) Object.prototype.hasOwnProperty.call(t, i) && (e[i] = t[i]);
}
return e;
}).apply(this, arguments);
}, s = this && this.__decorate || function(e, t, r, n) {
var i, o = arguments.length, s = o < 3 ? t : null === n ? n = Object.getOwnPropertyDescriptor(t, r) : n;
if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) s = Reflect.decorate(e, t, r, n); else for (var a = e.length - 1; a >= 0; a--) (i = e[a]) && (s = (o < 3 ? i(s) : o > 3 ? i(t, r, s) : i(t, r)) || s);
return o > 3 && s && Object.defineProperty(t, r, s), s;
};
Object.defineProperty(r, "__esModule", {
value: !0
});
r.IsClassADReviveNoIneresting_gpz1_Trait = void 0;
function a(e) {
if ("number" == typeof e) return Number.isFinite(e) && e > 0 ? e : 0;
if ("string" == typeof e && "" !== e.trim()) {
var t = Number(e);
return Number.isFinite(t) && t > 0 ? t : 0;
}
return 0;
}
var u = function(e) {
i(t, e);
function t() {
return null !== e && e.apply(this, arguments) || this;
}
t.prototype.onCreate = function() {
e.prototype.onCreate.call(this);
Trait.dynamicEnableTraitsAsync([ {
id: 336509001
} ]);
};
t.prototype.checkHighValueUser = function() {
var e = hs.gameFeaturesInfo.getGameFeatureInfo();
if (!e) return !1;
e = o(o({}, e), {
day_1_ad_revenue: a(e.day_1_ad_revenue),
day_1_rewarded_ad_pv: a(e.day_1_rewarded_ad_pv)
});
var t = 0;
[ "美国", "欧洲" ].includes(null == e ? void 0 : e.country_group) && t++;
(null == e ? void 0 : e.day_1_ad_revenue) > .04 && t++;
(null == e ? void 0 : e.day_1_rewarded_ad_pv) >= 1 && t++;
return t >= 1;
};
Object.defineProperty(t.prototype, "onActiveCondition", {
get: function() {
return !this.checkHighValueUser();
},
enumerable: !1,
configurable: !0
});
return s([ classId("IsClassADReviveNoInerestingTrait", "gpz1"), classMethodWatch() ], t);
}(e("./IsClassADReviveNoInerestingTrait").IsClassADReviveNoInerestingTrait);
r.IsClassADReviveNoIneresting_gpz1_Trait = u;
cc._RF.pop();
}, {
"./IsClassADReviveNoInerestingTrait": "IsClassADReviveNoInerestingTrait"
} ],
IsClassADReviveNoIneresting_gpz2_Trait: [ function(e, t, r) {
"use strict";
cc._RF.push(t, "2baf0CII/9F35ywu258S5F9", "IsClassADReviveNoIneresting_gpz2_Trait");
var n, i = this && this.__extends || (n = function(e, t) {
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
}), o = this && this.__assign || function() {
return (o = Object.assign || function(e) {
for (var t, r = 1, n = arguments.length; r < n; r++) {
t = arguments[r];
for (var i in t) Object.prototype.hasOwnProperty.call(t, i) && (e[i] = t[i]);
}
return e;
}).apply(this, arguments);
}, s = this && this.__decorate || function(e, t, r, n) {
var i, o = arguments.length, s = o < 3 ? t : null === n ? n = Object.getOwnPropertyDescriptor(t, r) : n;
if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) s = Reflect.decorate(e, t, r, n); else for (var a = e.length - 1; a >= 0; a--) (i = e[a]) && (s = (o < 3 ? i(s) : o > 3 ? i(t, r, s) : i(t, r)) || s);
return o > 3 && s && Object.defineProperty(t, r, s), s;
};
Object.defineProperty(r, "__esModule", {
value: !0
});
r.IsClassADReviveNoIneresting_gpz2_Trait = void 0;
function a(e) {
if ("number" == typeof e) return Number.isFinite(e) && e > 0 ? e : 0;
if ("string" == typeof e && "" !== e.trim()) {
var t = Number(e);
return Number.isFinite(t) && t > 0 ? t : 0;
}
return 0;
}
var u = function(e) {
i(t, e);
function t() {
return null !== e && e.apply(this, arguments) || this;
}
t.prototype.onCreate = function() {
e.prototype.onCreate.call(this);
Trait.dynamicEnableTraitsAsync([ {
id: 336509001
} ]);
};
t.prototype.checkHighValueHeavyUser = function() {
var e = hs.gameFeaturesInfo.getGameFeatureInfo();
if (!e) return !1;
var t = (null == (e = o(o({}, e), {
day_1_game_time: a(e.day_1_game_time),
day_1_ad_revenue: a(e.day_1_ad_revenue),
his_active_days: a(e.his_active_days)
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
return s([ classId("IsClassADReviveNoInerestingTrait", "gpz2"), classMethodWatch() ], t);
}(e("./IsClassADReviveNoInerestingTrait").IsClassADReviveNoInerestingTrait);
r.IsClassADReviveNoIneresting_gpz2_Trait = u;
cc._RF.pop();
}, {
"./IsClassADReviveNoInerestingTrait": "IsClassADReviveNoInerestingTrait"
} ],
IsClassADReviveNoIneresting_gpz3_Trait: [ function(e, t, r) {
"use strict";
cc._RF.push(t, "d9af9NAVYBKwrLMnaaC4VUH", "IsClassADReviveNoIneresting_gpz3_Trait");
var n, i = this && this.__extends || (n = function(e, t) {
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
}), o = this && this.__assign || function() {
return (o = Object.assign || function(e) {
for (var t, r = 1, n = arguments.length; r < n; r++) {
t = arguments[r];
for (var i in t) Object.prototype.hasOwnProperty.call(t, i) && (e[i] = t[i]);
}
return e;
}).apply(this, arguments);
}, s = this && this.__decorate || function(e, t, r, n) {
var i, o = arguments.length, s = o < 3 ? t : null === n ? n = Object.getOwnPropertyDescriptor(t, r) : n;
if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) s = Reflect.decorate(e, t, r, n); else for (var a = e.length - 1; a >= 0; a--) (i = e[a]) && (s = (o < 3 ? i(s) : o > 3 ? i(t, r, s) : i(t, r)) || s);
return o > 3 && s && Object.defineProperty(t, r, s), s;
};
Object.defineProperty(r, "__esModule", {
value: !0
});
r.IsClassADReviveNoIneresting_gpz3_Trait = void 0;
function a(e) {
if ("number" == typeof e) return Number.isFinite(e) && e > 0 ? e : 0;
if ("string" == typeof e && "" !== e.trim()) {
var t = Number(e);
return Number.isFinite(t) && t > 0 ? t : 0;
}
return 0;
}
var u = function(e) {
i(t, e);
function t() {
return null !== e && e.apply(this, arguments) || this;
}
t.prototype.onCreate = function() {
e.prototype.onCreate.call(this);
Trait.dynamicEnableTraitsAsync([ {
id: 336509001
} ]);
};
t.prototype.checkHighValueHeavyPlayer = function() {
var e = hs.gameFeaturesInfo.getGameFeatureInfo();
if (!e) return !1;
var t = 0;
(null == (e = o(o({}, e), {
day_1_ad_revenue: a(e.day_1_ad_revenue),
day_1_game_cnt: a(e.day_1_game_cnt),
day_1_game_avg_score: a(e.day_1_game_avg_score),
total_ram: a(e.total_ram)
})) ? void 0 : e.day_1_ad_revenue) > .08 && t++;
(null == e ? void 0 : e.day_1_game_cnt) > 8 && t++;
(null == e ? void 0 : e.day_1_game_avg_score) > 7e3 && t++;
(null == e ? void 0 : e.total_ram) >= 6 && [ "美国", "日韩台", "欧洲" ].includes(null == e ? void 0 : e.country_group) && t++;
return t >= 2;
};
Object.defineProperty(t.prototype, "onActiveCondition", {
get: function() {
return !this.checkHighValueHeavyPlayer();
},
enumerable: !1,
configurable: !0
});
return s([ classId("IsClassADReviveNoInerestingTrait", "gpz3"), classMethodWatch() ], t);
}(e("./IsClassADReviveNoInerestingTrait").IsClassADReviveNoInerestingTrait);
r.IsClassADReviveNoIneresting_gpz3_Trait = u;
cc._RF.pop();
}, {
"./IsClassADReviveNoInerestingTrait": "IsClassADReviveNoInerestingTrait"
} ]
}, {}, [ "IsClassADReviveNoInerestingTrait", "IsClassADReviveNoIneresting_12mixYlab_Trait", "IsClassADReviveNoIneresting_13mixYlab_Trait", "IsClassADReviveNoIneresting_15mixYlab_Trait", "IsClassADReviveNoIneresting_gpz1_Trait", "IsClassADReviveNoIneresting_gpz2_Trait", "IsClassADReviveNoIneresting_gpz3_Trait" ]);
//# sourceMappingURL=index.js.map
