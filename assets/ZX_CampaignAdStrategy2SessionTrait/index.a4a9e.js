window.__require = function e(t, s, n) {
function i(r, a) {
if (!s[r]) {
if (!t[r]) {
var p = r.split("/");
p = p[p.length - 1];
if (!t[p]) {
var c = "function" == typeof __require && __require;
if (!a && c) return c(p, !0);
if (o) return o(p, !0);
throw new Error("Cannot find module '" + r + "'");
}
r = p;
}
var l = s[r] = {
exports: {}
};
t[r][0].call(l.exports, function(e) {
return i(t[r][1][e] || e);
}, l, l.exports, e, t, s, n);
}
return s[r].exports;
}
for (var o = "function" == typeof __require && __require, r = 0; r < n.length; r++) i(n[r]);
return i;
}({
ZX_CampaignAdStrategy2SessionTrait: [ function(e, t, s) {
"use strict";
cc._RF.push(t, "e2febXNibdBFYGrJs1GWlTH", "ZX_CampaignAdStrategy2SessionTrait");
var n, i = this && this.__extends || (n = function(e, t) {
return (n = Object.setPrototypeOf || {
__proto__: []
} instanceof Array && function(e, t) {
e.__proto__ = t;
} || function(e, t) {
for (var s in t) Object.prototype.hasOwnProperty.call(t, s) && (e[s] = t[s]);
})(e, t);
}, function(e, t) {
n(e, t);
function s() {
this.constructor = e;
}
e.prototype = null === t ? Object.create(t) : (s.prototype = t.prototype, new s());
}), o = this && this.__assign || function() {
return (o = Object.assign || function(e) {
for (var t, s = 1, n = arguments.length; s < n; s++) {
t = arguments[s];
for (var i in t) Object.prototype.hasOwnProperty.call(t, i) && (e[i] = t[i]);
}
return e;
}).apply(this, arguments);
}, r = this && this.__decorate || function(e, t, s, n) {
var i, o = arguments.length, r = o < 3 ? t : null === n ? n = Object.getOwnPropertyDescriptor(t, s) : n;
if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) r = Reflect.decorate(e, t, s, n); else for (var a = e.length - 1; a >= 0; a--) (i = e[a]) && (r = (o < 3 ? i(r) : o > 3 ? i(t, s, r) : i(t, s)) || r);
return o > 3 && r && Object.defineProperty(t, s, r), r;
};
Object.defineProperty(s, "__esModule", {
value: !0
});
s.ZX_CampaignAdStrategy2SessionTrait = void 0;
var a = {
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
i(t, e);
function t() {
return null !== e && e.apply(this, arguments) || this;
}
s = t;
Object.defineProperty(t.prototype, "onActiveCondition", {
get: function() {
return hs.gameInfo.gameMode === hs.GameMode.Class || hs.gameInfo.gameMode === hs.GameMode.Chapter;
},
enumerable: !1,
configurable: !0
});
t.prototype.onCreate = function() {
var e = this;
this.syncSessionOnCreate();
cc.sys.isBrowser || hs.onNativeReponse("onAppKillProcessCallBack", function() {
e.recordLeaveTime();
});
};
t.prototype.onLifecycleGameEventHide = function() {
this.isTargetCampaign() && s._sessionSyncedThisProcess && this.recordLeaveTime();
};
t.prototype.syncSessionOnCreate = function() {
if (!s._sessionSyncedThisProcess) {
s._sessionSyncedThisProcess = !0;
var e = this.loadStorage(), t = Date.now(), n = e.lastLeaveTimeMs > 0 ? t - e.lastLeaveTimeMs : Number.POSITIVE_INFINITY, i = this.getSessionGapMs(), r = this.hasCrossedSessionStartInstallDay(e), a = e.lastLeaveTimeMs > 0 && n < i && !r;
e.lastLeaveTimeMs;
if (a) e = o(o({}, e), {
lastLeaveTimeMs: t
}); else {
e.careerSessionIndex > 0 && e.sessionStartTotalSpendMs >= 0 && (e = this.finalizeSessionOnLeave(e));
e = o(o({}, e), {
careerSessionIndex: (e.careerSessionIndex || 0) + 1,
sessionStartTotalSpendMs: this.getLifetimeTotalSpendMs(),
sessionStartFinishedGameCount: this.getFinishedGameCount(),
sessionStartInstallDay: this.getInstallDay(),
highValueInterSkipUsedThisSession: !1,
lastLeaveTimeMs: t
});
}
this.saveStorage(e);
}
};
t.prototype.recordLeaveTime = function() {
var e = this.loadStorage();
this.saveStorage(o(o({}, e), {
lastLeaveTimeMs: Date.now()
}));
};
t.prototype.finalizeSessionOnLeave = function(e) {
var t = this.getSessionGameTimeSec(e), s = o(o({}, e), {
prevSessionGameDurationSec: t
});
if (1 === e.careerSessionIndex) {
s.firstCareerSessionGameDurationSec = t;
t > this.getFirstSessionLongThresholdSec() && (s.firstCareerSessionExceededLongThreshold = !0);
}
if (this.getSessionStartInstallDayForArchive(e) <= 0) {
s.day0SessionGameDurationSumSec = (s.day0SessionGameDurationSumSec || 0) + t;
s.day0SessionCount = (s.day0SessionCount || 0) + 1;
}
return s;
};
t.prototype.getSessionStartInstallDayForArchive = function(e) {
var t = e.sessionStartInstallDay;
return "number" == typeof t && t >= 0 ? t : this.getInstallDay();
};
t.prototype.hasCrossedSessionStartInstallDay = function(e) {
if (e.careerSessionIndex <= 0) return !1;
var t = e.sessionStartInstallDay;
return !("number" != typeof t || t < 0) && t !== this.getInstallDay();
};
t.prototype.getFirstSessionLongThresholdSec = function() {
return 480;
};
t.prototype.getSessionGameTimeSec = function(e) {
var t = e.sessionStartTotalSpendMs;
return e.careerSessionIndex <= 0 || t < 0 ? 0 : Math.max(0, (this.getLifetimeTotalSpendMs() - t) / 1e3);
};
t.prototype.getLifetimeTotalSpendMs = function() {
return storage.getItem("classTotalSpendTime", 0) + storage.getItem("chapterTotalSpendTime", 0);
};
t.prototype.getFinishedGameCount = function() {
var e, t, s, n;
return (null !== (t = null === (e = hs.classGameInfo) || void 0 === e ? void 0 : e.gameNum) && void 0 !== t ? t : 0) + (null !== (n = null === (s = hs.chapterGameInfo) || void 0 === s ? void 0 : s.gameNum) && void 0 !== n ? n : 0);
};
t.prototype.getInstallDay = function() {
var e, t, s = null !== (t = null === (e = hs.gameInfo) || void 0 === e ? void 0 : e.installTime) && void 0 !== t ? t : 0;
return !s || s <= 0 ? 0 : hs.getDiffDays(s, Date.now());
};
t.prototype.loadStorage = function() {
var e = storage.getItem("ZX_CampaignAdStrategy2Trait_T", null);
return e && "object" == typeof e ? o(o({}, a), e) : o({}, a);
};
t.prototype.saveStorage = function(e) {
storage.setItem("ZX_CampaignAdStrategy2Trait_T", e);
};
t.prototype.getSessionGapMs = function() {
return 3e5;
};
t.prototype.registerGmMenu = function() {
var e = this;
if (!s._gmRegistered) {
s._gmRegistered = !0;
var t = {
title: "专项BB Camp2-冷启session间隔",
argName: "分钟",
explainStr: [ "覆盖冷启合并 session 阈值（默认 5 分钟）", "留空：查看当前值", "c 或 r：恢复默认", "修改后需杀进程冷启，session 边界判定才按新间隔生效" ].join("\n"),
action: function(t) {
return e.applyGmSessionGap(t);
}
};
hs.classGmCfgMenuTrait.push(t);
hs.chapterGmCfgMenuTrait.push(t);
}
};
t.prototype.applyGmSessionGap = function(e) {
var t = (null != e ? e : "").trim();
if (t) {
if ("c" !== t && "r" !== t) {
var s = parseFloat(t);
Number.isFinite(s);
}
} else this.getSessionGapMs();
};
t.prototype.getTargetCampaign = function() {
var e, t;
return null !== (t = null === (e = hs.attributionInfo) || void 0 === e ? void 0 : e.campaign) && void 0 !== t ? t : "";
};
t.prototype.isTargetCampaign = function() {
var e, t = this.getTargetCampaign();
return -1 !== ((null === (e = this.props) || void 0 === e ? void 0 : e.campaigns) || []).indexOf(t);
};
var s;
t._sessionSyncedThisProcess = !1;
t._gmRegistered = !1;
return s = r([ classId("ZX_CampaignAdStrategy2SessionTrait") ], t);
}(Trait);
s.ZX_CampaignAdStrategy2SessionTrait = p;
cc._RF.pop();
}, {} ]
}, {}, [ "ZX_CampaignAdStrategy2SessionTrait" ]);
//# sourceMappingURL=index.js.map
