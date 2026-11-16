window.__require = function e(t, r, i) {
function n(s, o) {
if (!r[s]) {
if (!t[s]) {
var l = s.split("/");
l = l[l.length - 1];
if (!t[l]) {
var p = "function" == typeof __require && __require;
if (!o && p) return p(l, !0);
if (a) return a(l, !0);
throw new Error("Cannot find module '" + s + "'");
}
s = l;
}
var u = r[s] = {
exports: {}
};
t[s][0].call(u.exports, function(e) {
return n(t[s][1][e] || e);
}, u, u.exports, e, t, r, i);
}
return r[s].exports;
}
for (var a = "function" == typeof __require && __require, s = 0; s < i.length; s++) n(i[s]);
return n;
}({
ZX_CampaignAdStrategy2InterstitialTrait: [ function(e, t, r) {
"use strict";
cc._RF.push(t, "bda18+1nvZKApd+iXBQct4H", "ZX_CampaignAdStrategy2InterstitialTrait");
var i, n = this && this.__extends || (i = function(e, t) {
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
}), a = this && this.__assign || function() {
return (a = Object.assign || function(e) {
for (var t, r = 1, i = arguments.length; r < i; r++) {
t = arguments[r];
for (var n in t) Object.prototype.hasOwnProperty.call(t, n) && (e[n] = t[n]);
}
return e;
}).apply(this, arguments);
}, s = this && this.__decorate || function(e, t, r, i) {
var n, a = arguments.length, s = a < 3 ? t : null === i ? i = Object.getOwnPropertyDescriptor(t, r) : i;
if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) s = Reflect.decorate(e, t, r, i); else for (var o = e.length - 1; o >= 0; o--) (n = e[o]) && (s = (a < 3 ? n(s) : a > 3 ? n(t, r, s) : n(t, r)) || s);
return a > 3 && s && Object.defineProperty(t, r, s), s;
}, o = this && this.__values || function(e) {
var t = "function" == typeof Symbol && Symbol.iterator, r = t && e[t], i = 0;
if (r) return r.call(e);
if (e && "number" == typeof e.length) return {
next: function() {
e && i >= e.length && (e = void 0);
return {
value: e && e[i++],
done: !e
};
}
};
throw new TypeError(t ? "Object is not iterable." : "Symbol.iterator is not defined.");
};
Object.defineProperty(r, "__esModule", {
value: !0
});
r.ZX_CampaignAdStrategy2InterstitialTrait = void 0;
var l = {
lastLeaveTimeMs: 0,
careerSessionIndex: 0,
prevSessionGameDurationSec: 0,
firstCareerSessionGameDurationSec: 0,
firstCareerSessionExceededLongThreshold: !1,
day0SessionGameDurationSumSec: 0,
day0SessionCount: 0,
sessionStartTotalSpendMs: 0,
sessionStartFinishedGameCount: 0,
sessionStartInstallDay: -1,
highValueInterSkipUsedThisSession: !1,
lastInterSuccessTime: 0,
classRewardShownGameKey: ""
}, p = function(e) {
n(t, e);
function t() {
var t = null !== e && e.apply(this, arguments) || this;
t._gmInterMaxEcpmOneShot = null;
return t;
}
r = t;
Object.defineProperty(t.prototype, "onActiveCondition", {
get: function() {
return hs.gameInfo.gameMode === hs.GameMode.Class || hs.gameInfo.gameMode === hs.GameMode.Chapter;
},
enumerable: !1,
configurable: !0
});
t.prototype.onCreate = function() {
this.isTargetCampaign();
};
t.prototype.isClassAdvertisement_FullScreenProxyReShieldPlayAdvertisement = function(e) {
this.handleInterstitialShield(e);
};
t.prototype.isChapterAdvertisement_FullScreenProxyReShieldPlayAdvertisement = function(e) {
this.handleInterstitialShield(e);
};
t.prototype.isClassAdvertisement_FullScreenProxyOnShowInterstitialSuccess = function() {
this.recordInterstitialPlayTime();
};
t.prototype.isChapterAdvertisement_FullScreenProxyOnShowInterstitialSuccess = function() {
this.recordInterstitialPlayTime();
};
t.prototype.isAdIntervalTraitGetTimeTagOverride = function(e) {
if (this.isTargetCampaign() && !(this.getInstallDay() < 8)) {
e.returnValue = 10;
e.returnState = !0;
}
};
t.prototype.handleInterstitialShield = function(e) {
if (this.isTargetCampaign()) {
var t = this.loadStorage(), r = this.getInstallDay(), i = this.resolveInterstitialShieldSec(t);
if (null != i) {
var n = this.getSessionGameTimeSec(t);
if (i === Number.POSITIVE_INFINITY || n < i) {
e.args[0] = !0;
e.returnState = !0;
}
} else if (r >= 8) {
this.applyAfterDay8Interval(e, t);
this.tryForcePlayHighValueInterstitial(e, t);
}
}
};
t.prototype.tryForcePlayHighValueInterstitial = function(e, t) {
if (!t.highValueInterSkipUsedThisSession && !(this.getSessionFinishedGameCount(t) <= 0) && this.isHighValueInterstitialCached()) {
e.args[0] = !1;
e.returnState = !0;
this.saveStorage(a(a({}, t), {
highValueInterSkipUsedThisSession: !0
}));
}
};
t.prototype.applyAfterDay8Interval = function(e, t) {
var r, i = null !== (r = t.lastInterSuccessTime) && void 0 !== r ? r : 0;
if (i && (Date.now() - i) / 1e3 < 10) {
e.args[0] = !0;
e.returnState = !0;
}
};
t.prototype.recordInterstitialPlayTime = function() {
if (this.isTargetCampaign()) {
var e = this.loadStorage();
this.saveStorage(a(a({}, e), {
lastInterSuccessTime: Date.now()
}));
}
};
t.prototype.resolveInterstitialShieldSec = function(e) {
var t = this.getInstallDay();
return t <= 0 ? e.careerSessionIndex <= 1 ? this.getSessionGameTimeSec(e) > this.getFirstCareerSessionLongThresholdSec() ? null : Number.POSITIVE_INFINITY : e.prevSessionGameDurationSec >= this.getSessionDurationThresholdDay0Sec() ? 480 : 180 : t <= 2 ? this.getDay0SessionAvgDurationSec(e) >= this.getSessionDurationThresholdDay1Day2Sec() ? 300 : 120 : t <= 7 ? this.getDay0SessionAvgDurationSec(e) >= this.getSessionDurationThresholdDay3Day7Sec() ? 180 : 60 : null;
};
t.prototype.getDay0SessionAvgDurationSec = function(e) {
var t = e.day0SessionCount || 0;
if (t <= 0) return e.prevSessionGameDurationSec || 0;
var r = (e.day0SessionGameDurationSumSec || 0) / t;
return Number.isFinite(r) ? r : 0;
};
t.prototype.getFirstCareerSessionLongThresholdSec = function() {
return this.getGmThresholdSec("gmCampaignAdStrategy2InterFirstSessionThresholdSec", 480);
};
t.prototype.getSessionDurationThresholdDay0Sec = function() {
return this.getGmThresholdSec("gmCampaignAdStrategy2InterDay0CompareThresholdSec", 900);
};
t.prototype.getSessionDurationThresholdDay1Day2Sec = function() {
return this.getGmThresholdSec("gmCampaignAdStrategy2InterDay1Day2CompareThresholdSec", 900);
};
t.prototype.getSessionDurationThresholdDay3Day7Sec = function() {
return this.getGmThresholdSec("gmCampaignAdStrategy2InterDay3Day7CompareThresholdSec", 900);
};
t.prototype.getGmThresholdSec = function(e, t) {
return t;
};
t.prototype.registerGmMenu = function() {
var e, t, i = this;
if (!r._gmRegistered) {
r._gmRegistered = !0;
var n = this.getGmThresholdDefaults(), a = [ {
title: "专项BB Camp2-插屏day0首session出屏阈值",
key: "gmCampaignAdStrategy2InterFirstSessionThresholdSec",
defaultSec: n.firstSession,
explain: "本 session 真实游戏时长超过该值后正常出插屏（默认 GP 480s / iOS 600s）"
}, {
title: "专项BB Camp2-插屏day0后续session对比阈值",
key: "gmCampaignAdStrategy2InterDay0CompareThresholdSec",
defaultSec: n.day0Compare,
explain: "上一 session 时长 ≥ 该值 → 本 session 前 8min 无插屏，否则前 3min（默认 GP 900s / iOS 600s）"
}, {
title: "专项BB Camp2-插屏day1-2对比阈值",
key: "gmCampaignAdStrategy2InterDay1Day2CompareThresholdSec",
defaultSec: n.day1Day2Compare,
explain: "day0 session 均值 ≥ 该值 → 本 session 前 5min 无插屏，否则前 2min（默认 GP 900s / iOS 600s）"
}, {
title: "专项BB Camp2-插屏day3-7对比阈值",
key: "gmCampaignAdStrategy2InterDay3Day7CompareThresholdSec",
defaultSec: n.day3Day7Compare,
explain: "day0 session 均值 ≥ 该值 → 本 session 前 180s 无插屏，否则前 60s（默认 GP 900s / iOS 480s）"
} ], s = function(e) {
var t = {
title: e.title,
argName: "秒",
explainStr: [ e.explain, "留空：查看当前生效值", "c 或 r：恢复默认", "默认 " + e.defaultSec + " 秒" ].join("\n"),
action: function(t) {
return i.applyGmThresholdSec(e.key, t, e.defaultSec, e.title);
}
};
hs.classGmCfgMenuTrait.push(t);
hs.chapterGmCfgMenuTrait.push(t);
};
try {
for (var l = o(a), p = l.next(); !p.done; p = l.next()) s(p.value);
} catch (t) {
e = {
error: t
};
} finally {
try {
p && !p.done && (t = l.return) && t.call(l);
} finally {
if (e) throw e.error;
}
}
var u = {
title: "专项BB Camp2-插屏缓存maxEcpm(一次性)",
argName: "ECpm(美元)",
explainStr: [ "覆盖下一次 day8+ 高价值插屏判定的 max eCPM（默认阈值 > 40）", "留空：查看待生效的一次性覆盖值", "设置后仅在首次判定时生效，用完自动失效", "可与真实插屏缓存无关（空缓存也可测强制出插屏路径）" ].join("\n"),
action: function(e) {
return i.applyGmInterMaxEcpmOneShot(e);
}
};
hs.classGmCfgMenuTrait.push(u);
hs.chapterGmCfgMenuTrait.push(u);
}
};
t.prototype.applyGmInterMaxEcpmOneShot = function(e) {
var t = (null != e ? e : "").trim();
if (t) {
var r = parseFloat(t);
!Number.isFinite(r) || r < 0 || (this._gmInterMaxEcpmOneShot = r);
} else null == this._gmInterMaxEcpmOneShot && hs.advertisementAdValueInfo.getInterstitialCacheSnapshot();
};
t.prototype.consumeGmInterMaxEcpmOneShot = function() {
return null;
};
t.prototype.applyGmThresholdSec = function(e, t, r) {
var i = (null != t ? t : "").trim();
if (i) {
if ("c" !== i && "r" !== i) {
var n = parseFloat(i);
Number.isFinite(n);
}
} else this.getGmThresholdSec(e, r);
};
t.prototype.getGmThresholdDefaults = function() {
return {
firstSession: 480,
day0Compare: 900,
day1Day2Compare: 900,
day3Day7Compare: 900
};
};
t.prototype.isHighValueInterstitialCached = function() {
var e = hs.advertisementAdValueInfo.getInterstitialCacheSnapshot();
if (e.cacheNum <= 0) return !1;
var t = e.maxEcpm, r = this.consumeGmInterMaxEcpmOneShot();
return null != r ? Number.isFinite(r) && r > 40 : Number.isFinite(t) && t > 40;
};
t.prototype.getSessionGameTimeSec = function(e) {
var t = e.sessionStartTotalSpendMs;
return e.careerSessionIndex <= 0 || t < 0 ? 0 : Math.max(0, (this.getLifetimeTotalSpendMs() - t) / 1e3);
};
t.prototype.getSessionFinishedGameCount = function(e) {
return Math.max(0, this.getFinishedGameCount() - (e.sessionStartFinishedGameCount || 0));
};
t.prototype.getLifetimeTotalSpendMs = function() {
return storage.getItem("classTotalSpendTime", 0) + storage.getItem("chapterTotalSpendTime", 0);
};
t.prototype.getFinishedGameCount = function() {
return storage.getItem("classGameNum", 0) + storage.getItem("chapterGameNum", 0);
};
t.prototype.getInstallDay = function() {
var e, t, r = null !== (t = null === (e = hs.gameInfo) || void 0 === e ? void 0 : e.installTime) && void 0 !== t ? t : 0;
return !r || r <= 0 ? 0 : hs.getDiffDays(r, Date.now());
};
t.prototype.loadStorage = function() {
var e = storage.getItem("ZX_CampaignAdStrategy2Trait_T", null);
return e && "object" == typeof e ? a(a({}, l), e) : a({}, l);
};
t.prototype.saveStorage = function(e) {
storage.setItem("ZX_CampaignAdStrategy2Trait_T", e);
};
t.prototype.getTargetCampaign = function() {
var e, t;
return null !== (t = null === (e = hs.attributionInfo) || void 0 === e ? void 0 : e.campaign) && void 0 !== t ? t : "";
};
t.prototype.isTargetCampaign = function() {
var e, t = this.getTargetCampaign(), r = (null === (e = this.props) || void 0 === e ? void 0 : e.campaigns) || [];
-1 !== r.indexOf(t) && DS("cocos_res_reporter", {
errorMsg: "ZX_CampaignAdStrategy2InterstitialTrait isTarget campaign: " + t
});
return -1 !== r.indexOf(t);
};
t.prototype.diagnostics = function(e) {
return "campaign=" + this.getTargetCampaign() + " day=" + this.getInstallDay() + " careerSession=" + e.careerSessionIndex + " sessionSec=" + this.getSessionGameTimeSec(e).toFixed(1);
};
var r;
t._gmRegistered = !1;
return r = s([ classId("ZX_CampaignAdStrategy2InterstitialTrait") ], t);
}(Trait);
r.ZX_CampaignAdStrategy2InterstitialTrait = p;
cc._RF.pop();
}, {} ]
}, {}, [ "ZX_CampaignAdStrategy2InterstitialTrait" ]);
//# sourceMappingURL=index.js.map
