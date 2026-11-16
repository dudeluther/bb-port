window.__require = function e(t, r, a) {
function i(n, s) {
if (!r[n]) {
if (!t[n]) {
var l = n.split("/");
l = l[l.length - 1];
if (!t[l]) {
var p = "function" == typeof __require && __require;
if (!s && p) return p(l, !0);
if (o) return o(l, !0);
throw new Error("Cannot find module '" + n + "'");
}
n = l;
}
var u = r[n] = {
exports: {}
};
t[n][0].call(u.exports, function(e) {
return i(t[n][1][e] || e);
}, u, u.exports, e, t, r, a);
}
return r[n].exports;
}
for (var o = "function" == typeof __require && __require, n = 0; n < a.length; n++) i(a[n]);
return i;
}({
ZX_CampaignAdStrategy2RewardTrait: [ function(e, t, r) {
"use strict";
cc._RF.push(t, "3adaffY9eJEl6tF1wy/IcGU", "ZX_CampaignAdStrategy2RewardTrait");
var a, i = this && this.__extends || (a = function(e, t) {
return (a = Object.setPrototypeOf || {
__proto__: []
} instanceof Array && function(e, t) {
e.__proto__ = t;
} || function(e, t) {
for (var r in t) Object.prototype.hasOwnProperty.call(t, r) && (e[r] = t[r]);
})(e, t);
}, function(e, t) {
a(e, t);
function r() {
this.constructor = e;
}
e.prototype = null === t ? Object.create(t) : (r.prototype = t.prototype, new r());
}), o = this && this.__assign || function() {
return (o = Object.assign || function(e) {
for (var t, r = 1, a = arguments.length; r < a; r++) {
t = arguments[r];
for (var i in t) Object.prototype.hasOwnProperty.call(t, i) && (e[i] = t[i]);
}
return e;
}).apply(this, arguments);
}, n = this && this.__decorate || function(e, t, r, a) {
var i, o = arguments.length, n = o < 3 ? t : null === a ? a = Object.getOwnPropertyDescriptor(t, r) : a;
if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) n = Reflect.decorate(e, t, r, a); else for (var s = e.length - 1; s >= 0; s--) (i = e[s]) && (n = (o < 3 ? i(n) : o > 3 ? i(t, r, n) : i(t, r)) || n);
return o > 3 && n && Object.defineProperty(t, r, n), n;
};
Object.defineProperty(r, "__esModule", {
value: !0
});
r.ZX_CampaignAdStrategy2RewardTrait = void 0;
var s = {
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
}, l = function(e) {
i(t, e);
function t() {
var t = null !== e && e.apply(this, arguments) || this;
t._gmRewardLoadEcpmOverride = null;
t._gmRewardLastShowEcpmOverride = null;
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
t.prototype.isClassRevive_ProxyChangeCanReviveByTrait = function(e) {
this.handleReviveResult(e, "class");
};
t.prototype.isChapterRevive_ProxyChangeLastReviveResult = function(e) {
this.handleReviveResult(e, "chapter");
};
t.prototype.isClassRevive_ProxyDoNotReviveByTrait = function(e) {
this.handleDoNotReviveByTrait(e, "class");
};
t.prototype.isChapterRevive_ProxyDoNotReviveByTrait = function(e) {
this.handleDoNotReviveByTrait(e, "chapter");
};
t.prototype.isClassAdvertisement_RewardProxyOnRewardOver = function(e) {
this.handleRewardOver(e);
};
t.prototype.isChapterAdvertisement_RewardProxyOnRewardOver = function(e) {
var t;
this.isTargetCampaign() && (null === (t = e.args) || void 0 === t || t[0]);
};
t.prototype.handleReviveResult = function(e, t) {
var r = Boolean(e.args[0]), a = this.resolveRevive(r, t);
if (null != a) {
e.args[0] = a;
e.returnState = !0;
e.returnValue = a;
}
};
t.prototype.handleDoNotReviveByTrait = function(e, t) {
if (this.isTargetCampaign()) {
var r = this.getInstallDay();
if (this.shouldBlockReward(r, t)) ; else {
var a = this.isBaseReviveSlotFree(t), i = this.isHighValueRewardReady();
if (r >= 7 && a && i) {
e.returnState = !0;
e.returnValue = !0;
}
}
}
};
t.prototype.resolveRevive = function(e, t) {
if (!this.isTargetCampaign()) return null;
var r = this.getInstallDay();
if (this.shouldBlockReward(r, t)) return !1;
var a = this.isBaseReviveSlotFree(t), i = this.isHighValueRewardReady();
return !!(r >= 7 && a && i) || null;
};
t.prototype.shouldBlockReward = function(e, t) {
return e <= 0 || !(this.getFinishedGameCount() >= 20) && ("chapter" !== t && this.hasShownRewardThisClassGame());
};
t.prototype.handleRewardOver = function(e) {
var t;
if (this.isTargetCampaign() && 1 === (null === (t = e.args) || void 0 === t ? void 0 : t[0])) if (this.getInstallDay() <= 0) ; else if (this.getFinishedGameCount() >= 20) ; else {
var r = this.currentClassGameKey(), a = this.loadStorage();
r && a.classRewardShownGameKey !== r && this.saveStorage(o(o({}, a), {
classRewardShownGameKey: r
}));
}
};
t.prototype.hasShownRewardThisClassGame = function() {
var e = this.currentClassGameKey(), t = this.loadStorage();
return "" !== e && t.classRewardShownGameKey === e;
};
t.prototype.currentClassGameKey = function() {
var e, t, r;
return (null === (e = hs.gameInfo) || void 0 === e ? void 0 : e.gameMode) !== hs.GameMode.Class ? "" : "class:" + (null !== (r = null === (t = hs.classGameInfo) || void 0 === t ? void 0 : t.gameNum) && void 0 !== r ? r : 0);
};
t.prototype.isBaseReviveSlotFree = function(e) {
var t, r, a, i;
return "class" === e ? 0 === (null !== (r = null === (t = hs.classReviveGameInfo) || void 0 === t ? void 0 : t.reviveNum) && void 0 !== r ? r : 0) : 0 === (null !== (i = null === (a = hs.chapterReviveGameInfo) || void 0 === a ? void 0 : a.reviveNum) && void 0 !== i ? i : 0);
};
t.prototype.isHighValueRewardReady = function() {
if (!0 !== hs.advertisementGameInfo.getIsCanPlayAd()) return !1;
if (!hs.NativeAd.getReadyByAdType("reward")) return !1;
var e = hs.NativeAd.callNativeGetMaxEcpmNumber("2") || 0, t = this.getGmRewardLoadEcpmOverride();
null != t && (e = t);
var r = this.normalizeRewardEcpm(hs.ecpmInfo.getLastAdEcpm(hs.AdvertiseType.reward)), a = this.getGmRewardLastShowEcpmOverride();
null != a && (r = a);
return !(!Number.isFinite(e) || e <= 0 || !Number.isFinite(r) || r <= 0) && e >= 3.5 * r;
};
t.prototype.registerGmMenu = function() {
var e = this;
if (!r._gmRegistered) {
r._gmRegistered = !0;
var t = {
title: "专项BB Camp2-激励loadEcpm(覆盖)",
argName: "eCPM",
explainStr: [ "覆盖 day7+ 高价激励判定的 load eCPM（需 ≥ lastShow×3.5）", "留空：查看当前覆盖与 Native load eCPM", "输入 clear：关闭覆盖", "量纲与 callNativeGetMaxEcpmNumber(2) 一致" ].join("\n"),
action: function(t) {
return e.applyGmRewardLoadEcpmOverride(t);
}
}, a = {
title: "专项BB Camp2-激励lastShowEcpm(覆盖)",
argName: "eCPM",
explainStr: [ "覆盖高价激励判定的「上次展示 eCPM」（normalize 后 CPM 量纲，非单次收益原值）", "留空：查看当前覆盖与 normalize 后的 last show eCPM", "输入 clear：关闭覆盖" ].join("\n"),
action: function(t) {
return e.applyGmRewardLastShowEcpmOverride(t);
}
};
hs.classGmCfgMenuTrait.push(t);
hs.chapterGmCfgMenuTrait.push(t);
hs.classGmCfgMenuTrait.push(a);
hs.chapterGmCfgMenuTrait.push(a);
}
};
t.prototype.applyGmRewardLoadEcpmOverride = function(e) {
var t = (null != e ? e : "").trim();
if (t) if ("clear" !== t.toLowerCase()) {
var r = parseFloat(t);
!Number.isFinite(r) || r < 0 || (this._gmRewardLoadEcpmOverride = r);
} else this._gmRewardLoadEcpmOverride = null; else this._gmRewardLoadEcpmOverride, 
hs.NativeAd.callNativeGetMaxEcpmNumber("2");
};
t.prototype.applyGmRewardLastShowEcpmOverride = function(e) {
var t = (null != e ? e : "").trim();
if (t) if ("clear" !== t.toLowerCase()) {
var r = parseFloat(t);
!Number.isFinite(r) || r <= 0 || (this._gmRewardLastShowEcpmOverride = r);
} else this._gmRewardLastShowEcpmOverride = null; else this._gmRewardLastShowEcpmOverride, 
this.normalizeRewardEcpm(hs.ecpmInfo.getLastAdEcpm(hs.AdvertiseType.reward));
};
t.prototype.getGmRewardLoadEcpmOverride = function() {
return null;
};
t.prototype.getGmRewardLastShowEcpmOverride = function() {
return null;
};
t.prototype.normalizeRewardEcpm = function(e) {
return !Number.isFinite(e) || e <= 0 ? 0 : 1e3 * e;
};
t.prototype.getFinishedGameCount = function() {
var e, t, r, a;
return (null !== (t = null === (e = hs.classGameInfo) || void 0 === e ? void 0 : e.gameNum) && void 0 !== t ? t : 0) + (null !== (a = null === (r = hs.chapterGameInfo) || void 0 === r ? void 0 : r.gameNum) && void 0 !== a ? a : 0);
};
t.prototype.getInstallDay = function() {
var e, t, r = null !== (t = null === (e = hs.gameInfo) || void 0 === e ? void 0 : e.installTime) && void 0 !== t ? t : 0;
return !r || r <= 0 ? 0 : hs.getDiffDays(r, Date.now());
};
t.prototype.loadStorage = function() {
var e = storage.getItem("ZX_CampaignAdStrategy2Trait_T", null);
return e && "object" == typeof e ? o(o({}, s), e) : o({}, s);
};
t.prototype.saveStorage = function(e) {
storage.setItem("ZX_CampaignAdStrategy2Trait_T", e);
};
t.prototype.getTargetCampaign = function() {
var e, t;
return null !== (t = null === (e = hs.attributionInfo) || void 0 === e ? void 0 : e.campaign) && void 0 !== t ? t : "";
};
t.prototype.isTargetCampaign = function() {
var e, t = this.getTargetCampaign(), r = -1 !== ((null === (e = this.props) || void 0 === e ? void 0 : e.campaigns) || []).indexOf(t);
r && DS("cocos_res_reporter", {
errorMsg: "ZX_CampaignAdStrategy2RewardTrait isTarget campaign: " + t
});
return r;
};
var r;
t._gmRegistered = !1;
return r = n([ classId("ZX_CampaignAdStrategy2RewardTrait") ], t);
}(Trait);
r.ZX_CampaignAdStrategy2RewardTrait = l;
cc._RF.pop();
}, {} ]
}, {}, [ "ZX_CampaignAdStrategy2RewardTrait" ]);
//# sourceMappingURL=index.js.map
