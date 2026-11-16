window.__require = function t(e, n, r) {
function i(a, u) {
if (!n[a]) {
if (!e[a]) {
var p = a.split("/");
p = p[p.length - 1];
if (!e[p]) {
var c = "function" == typeof __require && __require;
if (!u && c) return c(p, !0);
if (o) return o(p, !0);
throw new Error("Cannot find module '" + a + "'");
}
a = p;
}
var s = n[a] = {
exports: {}
};
e[a][0].call(s.exports, function(t) {
return i(e[a][1][t] || t);
}, s, s.exports, t, e, n, r);
}
return n[a].exports;
}
for (var o = "function" == typeof __require && __require, a = 0; a < r.length; a++) i(r[a]);
return i;
}({
TopDailyActiveCountryOnlinePeakPushTrait: [ function(t, e, n) {
"use strict";
cc._RF.push(e, "2b548htLGBBLZBHg++sCNDA", "TopDailyActiveCountryOnlinePeakPushTrait");
var r, i = this && this.__extends || (r = function(t, e) {
return (r = Object.setPrototypeOf || {
__proto__: []
} instanceof Array && function(t, e) {
t.__proto__ = e;
} || function(t, e) {
for (var n in e) Object.prototype.hasOwnProperty.call(e, n) && (t[n] = e[n]);
})(t, e);
}, function(t, e) {
r(t, e);
function n() {
this.constructor = t;
}
t.prototype = null === e ? Object.create(e) : (n.prototype = e.prototype, new n());
}), o = this && this.__decorate || function(t, e, n, r) {
var i, o = arguments.length, a = o < 3 ? e : null === r ? r = Object.getOwnPropertyDescriptor(e, n) : r;
if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) a = Reflect.decorate(t, e, n, r); else for (var u = t.length - 1; u >= 0; u--) (i = t[u]) && (a = (o < 3 ? i(a) : o > 3 ? i(e, n, a) : i(e, n)) || a);
return o > 3 && a && Object.defineProperty(e, n, a), a;
}, a = this && this.__read || function(t, e) {
var n = "function" == typeof Symbol && t[Symbol.iterator];
if (!n) return t;
var r, i, o = n.call(t), a = [];
try {
for (;(void 0 === e || e-- > 0) && !(r = o.next()).done; ) a.push(r.value);
} catch (t) {
i = {
error: t
};
} finally {
try {
r && !r.done && (n = o.return) && n.call(o);
} finally {
if (i) throw i.error;
}
}
return a;
};
Object.defineProperty(n, "__esModule", {
value: !0
});
n.TopDailyActiveCountryOnlinePeakPushTrait = void 0;
var u = function(t) {
i(e, t);
function e() {
return null !== t && t.apply(this, arguments) || this;
}
e.prototype.onCreate = function() {};
e.prototype.onActive = function(t) {
hs.tp.isLaunchChangeLaunchScene(t) && this.trySendPush();
};
e.prototype.trySendPush = function() {
var t = this.sendTime;
t && hs.NativeAppCenterInterface.noticeAppCommonSendPush({
opewaynum: this.opewaynum,
taskType: this.props.taskType,
sendTime: this.getPushTimeMs(t)
});
};
e.prototype.gmSendPushAfterTwoMinutes = function() {
if (NativeBridge.isNative()) {
var t = hs.getCurentDate();
t.setTime(t.getTime() + 12e4);
var e = Math.floor(t.getTime());
hs.NativeAppCenterInterface.noticeAppCommonSendPush({
opewaynum: this.opewaynum,
taskType: this.props.taskType,
sendTime: e
});
}
};
Object.defineProperty(e.prototype, "sendTimeList", {
get: function() {
var t;
return null !== (t = this.props.sendTimeList) && void 0 !== t ? t : {};
},
enumerable: !1,
configurable: !0
});
Object.defineProperty(e.prototype, "sendTime", {
get: function() {
var t, e, n = this.country, r = this.sendTimeList;
return r && "object" == typeof r && r.hasOwnProperty(n) ? null !== (t = r[n]) && void 0 !== t ? t : "14:00" : null !== (e = this.props.sendTime) && void 0 !== e ? e : "14:00";
},
enumerable: !1,
configurable: !0
});
Object.defineProperty(e.prototype, "country", {
get: function() {
var t, e;
return ((null === (e = null === (t = hs.deviceInfo) || void 0 === t ? void 0 : t.data) || void 0 === e ? void 0 : e.country) || "").toUpperCase();
},
enumerable: !1,
configurable: !0
});
e.prototype.getPushTimeMs = function(t) {
var e = this.parseSendTime(t), n = hs.getCurentDate(), r = hs.getCurentDate();
r.setHours(e.hour, e.minute, 0, 0);
r.getTime() <= n.getTime() && r.setDate(r.getDate() + 1);
return Math.floor(r.getTime());
};
e.prototype.parseSendTime = function(t) {
var e = a(t.split(":").map(Number), 2), n = e[0], r = e[1];
return {
hour: isNaN(n) || n < 0 || n > 23 ? 0 : n,
minute: isNaN(r) || r < 0 || r > 59 ? 0 : r
};
};
Object.defineProperty(e.prototype, "opewaynum", {
get: function() {
var t, e;
return null !== (e = String(null === (t = this.props) || void 0 === t ? void 0 : t.opewaynum)) && void 0 !== e ? e : "";
},
enumerable: !1,
configurable: !0
});
return o([ classId("TopDailyActiveCountryOnlinePeakPushTrait") ], e);
}(Trait);
n.TopDailyActiveCountryOnlinePeakPushTrait = u;
cc._RF.pop();
}, {} ],
TopDailyActiveCountryOnlinePeakPush_gpz1_Trait: [ function(t, e, n) {
"use strict";
cc._RF.push(e, "a4ec7Zfu8FEwo0sfNzgF+N4", "TopDailyActiveCountryOnlinePeakPush_gpz1_Trait");
var r, i = this && this.__extends || (r = function(t, e) {
return (r = Object.setPrototypeOf || {
__proto__: []
} instanceof Array && function(t, e) {
t.__proto__ = e;
} || function(t, e) {
for (var n in e) Object.prototype.hasOwnProperty.call(e, n) && (t[n] = e[n]);
})(t, e);
}, function(t, e) {
r(t, e);
function n() {
this.constructor = t;
}
t.prototype = null === e ? Object.create(e) : (n.prototype = e.prototype, new n());
}), o = this && this.__decorate || function(t, e, n, r) {
var i, o = arguments.length, a = o < 3 ? e : null === r ? r = Object.getOwnPropertyDescriptor(e, n) : r;
if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) a = Reflect.decorate(t, e, n, r); else for (var u = t.length - 1; u >= 0; u--) (i = t[u]) && (a = (o < 3 ? i(a) : o > 3 ? i(e, n, a) : i(e, n)) || a);
return o > 3 && a && Object.defineProperty(e, n, a), a;
};
Object.defineProperty(n, "__esModule", {
value: !0
});
n.TopDailyActiveCountryOnlinePeakPush_gpz1_Trait = void 0;
var a = function(t) {
i(e, t);
function e() {
return null !== t && t.apply(this, arguments) || this;
}
e.prototype.onCreate = function() {
t.prototype.onCreate.call(this);
Trait.dynamicEnableTraitsAsync([ {
id: 333759001
} ]);
};
e.prototype.trySendPush = function() {
this.isMaturityOk() && t.prototype.trySendPush.call(this);
};
e.prototype.isMaturityOk = function() {
var t = TRAIT("MaturityDevelopmentV2Trait");
if (!(null == t ? void 0 : t.active) || "function" != typeof t.emitMaturity) return !1;
var e = t.emitMaturity("game");
return !!Number.isFinite(e) && e > 40;
};
return o([ classId("TopDailyActiveCountryOnlinePeakPushTrait", "gpz1") ], e);
}(t("./TopDailyActiveCountryOnlinePeakPushTrait").TopDailyActiveCountryOnlinePeakPushTrait);
n.TopDailyActiveCountryOnlinePeakPush_gpz1_Trait = a;
cc._RF.pop();
}, {
"./TopDailyActiveCountryOnlinePeakPushTrait": "TopDailyActiveCountryOnlinePeakPushTrait"
} ],
TopDailyActiveCountryOnlinePeakPush_iosz1_Trait: [ function(t, e, n) {
"use strict";
cc._RF.push(e, "b5073k9XYJJtIeOnZwJSsvi", "TopDailyActiveCountryOnlinePeakPush_iosz1_Trait");
var r, i = this && this.__extends || (r = function(t, e) {
return (r = Object.setPrototypeOf || {
__proto__: []
} instanceof Array && function(t, e) {
t.__proto__ = e;
} || function(t, e) {
for (var n in e) Object.prototype.hasOwnProperty.call(e, n) && (t[n] = e[n]);
})(t, e);
}, function(t, e) {
r(t, e);
function n() {
this.constructor = t;
}
t.prototype = null === e ? Object.create(e) : (n.prototype = e.prototype, new n());
}), o = this && this.__decorate || function(t, e, n, r) {
var i, o = arguments.length, a = o < 3 ? e : null === r ? r = Object.getOwnPropertyDescriptor(e, n) : r;
if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) a = Reflect.decorate(t, e, n, r); else for (var u = t.length - 1; u >= 0; u--) (i = t[u]) && (a = (o < 3 ? i(a) : o > 3 ? i(e, n, a) : i(e, n)) || a);
return o > 3 && a && Object.defineProperty(e, n, a), a;
};
Object.defineProperty(n, "__esModule", {
value: !0
});
n.TopDailyActiveCountryOnlinePeakPush_iosz1_Trait = void 0;
var a = function(t) {
i(e, t);
function e() {
return null !== t && t.apply(this, arguments) || this;
}
e.prototype.onCreate = function() {
t.prototype.onCreate.call(this);
Trait.dynamicEnableTraitsAsync([ {
id: 333366001
} ]);
};
e.prototype.trySendPush = function() {
this.isMaturityOk() && t.prototype.trySendPush.call(this);
};
e.prototype.isMaturityOk = function() {
var t = TRAIT("MaturityDevelopmentV2Trait");
if (!(null == t ? void 0 : t.active) || "function" != typeof t.emitMaturity) return !1;
var e = t.emitMaturity("game");
return !!Number.isFinite(e) && e > 40;
};
return o([ classId("TopDailyActiveCountryOnlinePeakPushTrait", "iosz1") ], e);
}(t("./TopDailyActiveCountryOnlinePeakPushTrait").TopDailyActiveCountryOnlinePeakPushTrait);
n.TopDailyActiveCountryOnlinePeakPush_iosz1_Trait = a;
cc._RF.pop();
}, {
"./TopDailyActiveCountryOnlinePeakPushTrait": "TopDailyActiveCountryOnlinePeakPushTrait"
} ]
}, {}, [ "TopDailyActiveCountryOnlinePeakPushTrait", "TopDailyActiveCountryOnlinePeakPush_gpz1_Trait", "TopDailyActiveCountryOnlinePeakPush_iosz1_Trait" ]);
//# sourceMappingURL=index.js.map
