window.__require = function e(t, r, i) {
function s(a, u) {
if (!r[a]) {
if (!t[a]) {
var h = a.split("/");
h = h[h.length - 1];
if (!t[h]) {
var o = "function" == typeof __require && __require;
if (!u && o) return o(h, !0);
if (n) return n(h, !0);
throw new Error("Cannot find module '" + a + "'");
}
a = h;
}
var p = r[a] = {
exports: {}
};
t[a][0].call(p.exports, function(e) {
return s(t[a][1][e] || e);
}, p, p.exports, e, t, r, i);
}
return r[a].exports;
}
for (var n = "function" == typeof __require && __require, a = 0; a < i.length; a++) s(i[a]);
return s;
}({
AchievementPushMixTrait: [ function(e, t, r) {
"use strict";
cc._RF.push(t, "c1f7c/0mzxMP6Wi9uhoxuqt", "AchievementPushMixTrait");
var i, s, n = this && this.__extends || (i = function(e, t) {
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
}), a = this && this.__decorate || function(e, t, r, i) {
var s, n = arguments.length, a = n < 3 ? t : null === i ? i = Object.getOwnPropertyDescriptor(t, r) : i;
if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) a = Reflect.decorate(e, t, r, i); else for (var u = e.length - 1; u >= 0; u--) (s = e[u]) && (a = (n < 3 ? s(a) : n > 3 ? s(t, r, a) : s(t, r)) || a);
return n > 3 && a && Object.defineProperty(t, r, a), a;
}, u = this && this.__values || function(e) {
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
}, h = this && this.__read || function(e, t) {
var r = "function" == typeof Symbol && e[Symbol.iterator];
if (!r) return e;
var i, s, n = r.call(e), a = [];
try {
for (;(void 0 === t || t-- > 0) && !(i = n.next()).done; ) a.push(i.value);
} catch (e) {
s = {
error: e
};
} finally {
try {
i && !i.done && (r = n.return) && r.call(n);
} finally {
if (s) throw s.error;
}
}
return a;
};
Object.defineProperty(r, "__esModule", {
value: !0
});
r.AchievementPushMixTrait = void 0;
(function(e) {
e[e.send = 0] = "send";
e[e.cancel = 1] = "cancel";
})(s || (s = {}));
var o = function(e) {
n(t, e);
function t() {
var t = null !== e && e.apply(this, arguments) || this;
t._savePushData = null;
t._adventurePushSaveData = null;
t._achievementPushMixMapData = null;
t.isPriorityPush = !0;
return t;
}
Object.defineProperty(t.prototype, "onActiveCondition", {
get: function() {
return this.isCanActive();
},
enumerable: !1,
configurable: !0
});
t.prototype.isCanActive = function() {
return !0;
};
t.prototype.registerTraitEventsMethods = function() {
return [ {
className: "HomePage_Proxy",
methodName: "showHomePage"
}, {
className: "ClassGame_Proxy",
methodName: "onClassGameShow"
}, {
className: "ChapterGame_Proxy",
methodName: "onChapterGameShow"
} ];
};
t.prototype.onCreate = function() {
this.registerGmMenu();
};
t.prototype.registerGmMenu = function() {};
t.prototype.onActive = function(e) {
var t;
if (hs.tp.isLaunchChangeLaunchScene(e)) {
var r = hs.NativeAppCenterInterface.noticeAppGetOpenAppOpeway(), i = null !== (t = null == r ? void 0 : r.click) && void 0 !== t ? t : "";
if (i) {
var s = this.changeLaunchScene(i);
if (s) {
e.args[0] = s;
e.returnState = !0;
}
}
this.checkCanTriggerPushByPushType();
}
if (hs.tp.isHomePage_ProxyShowHomePage(e) || hs.tp.isClassGame_ProxyOnClassGameShow(e) || hs.tp.isChapterGame_ProxyOnChapterGameShow(e)) {
-1 === this.savePushData.pushCurrentType || hs.isToday(this.savePushData.pushCurrentTriggerTimeMs) || (this.savePushData.isTodayPush = !1);
this.checkIsTravelThemeUpdate();
}
hs.tp.isAchievementInfoUpdataAchievementStatisticsData(e) && this.checkCanTriggerPushByPushType();
hs.tp.isPushDispatchCentralInfoMarkCovered(e) && hs.pushDispatchCentralInfo.active && this.handlePushDispatchCentralInfoMarkCovered(e);
};
t.prototype.isOpen = function() {
return !0;
};
Object.defineProperty(t.prototype, "isAlways", {
get: function() {
return this.props.always;
},
enumerable: !1,
configurable: !0
});
Object.defineProperty(t.prototype, "isRepush", {
get: function() {
return this.props.repush;
},
enumerable: !1,
configurable: !0
});
Object.defineProperty(t.prototype, "isMixAdventureValue", {
get: function() {
var e;
return null !== (e = this.props.isMixAdventure) && void 0 !== e ? e : 0;
},
enumerable: !1,
configurable: !0
});
Object.defineProperty(t.prototype, "adventurePushData", {
get: function() {
if (this.isMixAdventureValue > 0) {
var e = this.props.pushTypesArray.length > 0 ? this.props.pushTypesArray[0] : 0;
return hs.PushAndAchievementTypeMix.get(e);
}
return null;
},
enumerable: !1,
configurable: !0
});
Object.defineProperty(t.prototype, "sendTime", {
get: function() {
return "13:00";
},
enumerable: !1,
configurable: !0
});
t.prototype.isCanPushContinue = function(e, t, r) {
var i = this.getAchievementPushMixMapDataByPushType(e);
return i.pushMixEndTimeMs <= 0 || i.pushKeyIndexTarget !== t || !!this.isAlways && (i.pushMixEndTimeMs < r || this.isRepush && this.savePushData.pushCurrentType !== e);
};
t.prototype.changeLaunchScene = function(e) {
var t, r, i, s;
if (e == (null !== (s = null === (i = this.adventurePushData) || void 0 === i ? void 0 : i.scheme) && void 0 !== s ? s : "")) return "choice";
if (e) try {
for (var n = u(Object.entries(hs.PushScenesMix)), a = n.next(); !a.done; a = n.next()) {
var o = h(a.value, 2), p = o[0];
if (o[1].includes(e)) return p;
}
} catch (e) {
t = {
error: e
};
} finally {
try {
a && !a.done && (r = n.return) && r.call(n);
} finally {
if (t) throw t.error;
}
}
return null;
};
Object.defineProperty(t.prototype, "savePushData", {
get: function() {
if (this._savePushData) return this._savePushData;
this._savePushData = storage.getItem("achievementPushMixTrait_currentSaveData", {
pushCurrentType: -1,
pushCurrentEndTimeMs: 0,
isTodayPush: !1,
pushCurrentTriggerTimeMs: 0
});
return this._savePushData;
},
enumerable: !1,
configurable: !0
});
t.prototype.resetSavePushData = function(e, t) {
void 0 === e && (e = -1);
void 0 === t && (t = 0);
this._savePushData = {
pushCurrentType: e,
pushCurrentEndTimeMs: t,
isTodayPush: !1,
pushCurrentTriggerTimeMs: 0
};
if (-1 !== e) {
this._savePushData.isTodayPush = !0;
this._savePushData.pushCurrentTriggerTimeMs = Date.now();
}
storage.setItem("achievementPushMixTrait_currentSaveData", this._savePushData);
};
Object.defineProperty(t.prototype, "achievementPushMixMapData", {
get: function() {
if (this._achievementPushMixMapData) return this._achievementPushMixMapData;
this._achievementPushMixMapData = storage.getItem("achievementPushMixTrait_achievementMap", {});
return this._achievementPushMixMapData;
},
enumerable: !1,
configurable: !0
});
t.prototype.resetAchievementPushMixMapData = function(e) {
void 0 === e && (e = !1);
e && (this._achievementPushMixMapData = {});
storage.setItem("achievementPushMixTrait_achievementMap", this._achievementPushMixMapData);
};
t.prototype.getAchievementPushMixMapDataByPushType = function(e) {
var t = this.getSchemeByPushType(e);
this.achievementPushMixMapData[t] || (this.achievementPushMixMapData[t] = {
key: "",
pushKeyIndexTarget: "",
pushResult: 0,
pushMixEndTimeMs: 0
});
return this.achievementPushMixMapData[t];
};
t.prototype.checkCanTriggerPushByPushType = function() {
if (this.canCheckPushDispatch()) {
var e = this.props.pushTypesArray || [];
if (this.pushIsChanged) {
this.resetSavePushData();
this.resetAdventurePushSaveData();
this.resetAchievementPushMixMapData(!0);
}
if (this.isAdventurePushing) ; else {
var t = -1, r = this.savePushData;
-1 !== r.pushCurrentType && r.pushCurrentEndTimeMs > Date.now() && (t = r.pushCurrentType);
for (var i = [], s = [], n = 0; n < e.length; n++) {
(u = e[n]) && !isNaN(u) && this.checkCanTriggerPush(u, i, s);
if (this.isPriorityPush && u === t && -1 === s.indexOf(u)) break;
}
if (s.length > 0) {
var a = i.length > 0 && this.canSendAchievementPush();
for (n = 0; n < s.length; n++) {
var u = s[n];
this.tryCancelPushTaskByPushType(u, a);
}
}
if (i.length > 0 && this.canSendAchievementPush()) {
var h = i[0];
this.tryPushTaskByPushType(h.pushType, h.pushKeyIndexTarget, h.pushResult);
}
}
}
};
t.prototype.canSendAchievementPush = function() {
return !0;
};
t.prototype.tryPushTaskByPushType = function(e, t) {
var r = hs.PushAndAchievementTypeMix.get(e);
if (r) {
var i = r.scheme, n = r.cjpushcftype, a = r.key, u = r.strategy, h = this.getPushTimeMs(this.sendTime);
this.occupyPushDispatch(i, null != u ? u : "", h);
this.tryPush({
opewaynum: i,
taskType: null != u ? u : "",
sendTime: h
});
DS("usr_data_gamefinish_cjpushcf_success", {
cjpushcftype: n,
cjpushcfsend: s.send,
cj_push_strategy: i
});
var o = this.savePushData.pushCurrentType;
if (-1 !== o && o !== e) {
var p = this.getAchievementPushMixMapDataByPushType(o);
if (1 === p.pushResult) {
p.pushResult = 2;
p.pushMixEndTimeMs = 0;
this.resetAchievementPushMixMapData();
}
}
this.achievementPushMixMapData[i] = {
key: a,
pushKeyIndexTarget: t,
pushResult: 1,
pushMixEndTimeMs: this.pushEndTimeMs
};
this.resetAchievementPushMixMapData();
this.resetSavePushData(e, this.pushEndTimeMs);
}
};
t.prototype.tryCancelPushTaskByPushType = function(e, t) {
void 0 === t && (t = !1);
var r = this.getAchievementPushMixMapDataByPushType(e);
if (1 === r.pushResult) {
r.pushResult = 2;
r.pushMixEndTimeMs = 0;
this.resetAchievementPushMixMapData();
var i = hs.PushAndAchievementTypeMix.get(e);
if (i) {
if (!t) {
var n = i.scheme;
hs.NativeAppCenterInterface.noticeAppCommonRemovePush();
hs.pushDispatchCentralInfo.releasePushDispatch("AchievementPushMixTrait");
DS("usr_data_gamefinish_cjpushcf_success", {
cjpushcftype: i.cjpushcftype,
cjpushcfsend: s.cancel,
cj_push_strategy: n
});
}
this.savePushData.pushCurrentType === e && this.resetSavePushData();
}
}
};
t.prototype.getSchemeByPushType = function(e) {
return "cj" + (e < 10 ? "0" + e : e);
};
Object.defineProperty(t.prototype, "pushIsChanged", {
get: function() {
var e = this.props.pushTypesArray || [], t = this.props.pushTargePercentArray || [], r = this.props.isMixAdventure || 0, i = e.toString() + ",|" + t.toString() + ",|" + r, s = storage.getItem("achievementPushMixTrait_pushCombineKey", ""), n = "" === s || s === i;
n && "" !== s || storage.setItem("achievementPushMixTrait_pushCombineKey", i);
return !n;
},
enumerable: !1,
configurable: !0
});
t.prototype.getNearPercent = function(e) {
for (var t = this.props.pushTargePercentArray || [], r = 100, i = 0; i < t.length; i++) {
var s = t[i];
s && !isNaN(s) && e >= s && (r = s);
}
return r;
};
t.prototype.checkCanTriggerPush = function(e, t, r) {
try {
var i = e;
if (!hs.PushAndAchievementTypeMix.has(i)) return;
var s = hs.PushAndAchievementTypeMix.get(i);
if (s) {
if (9999 === s.AchievementTargetType) return;
var n = s.key, a = this.getAchievementPushMixMapDataByPushType(e), u = (hs.achievementInfo.achievementAwardData || []).find(function(e) {
return e.key === n;
});
if (!u) return;
var h = hs.achievementInfo.getAchievementInfoData(n);
if (!h) return;
if (u.curAchieveIndex >= h.achieve_list.length - 1) "" !== a.key && 2 !== a.pushResult && r.push(e); else {
var o = u.curAchieveIndex + 1, p = hs.achievementInfo.getQueryAchievementStatisticsData(s.AchievementTargetType, n), c = h.achieve_list[o];
if (!c) {
r.push(e);
return;
}
var v = this.isChapterPush(i) ? this.chapterNumStorage / 96 : p / c, y = this.getNearPercent(Math.floor(100 * v)) / 100, f = n + "_" + (u.curAchieveIndex + 1) + "_" + y;
y > 0 && v >= y ? this.isCanPushContinue(e, f, Date.now()) && t.push({
pushType: e,
pushKeyIndexTarget: f,
pushResult: 1
}) : r.push(e);
}
}
} catch (e) {}
};
t.prototype.isChapterPush = function(e) {
return 23 == e || 24 == e || 37 == e || 38 == e;
};
Object.defineProperty(t.prototype, "chapterNumStorage", {
get: function() {
return storage.getItem("chapterNum", 0);
},
enumerable: !1,
configurable: !0
});
Object.defineProperty(t.prototype, "chapterStageStorage", {
get: function() {
return storage.getItem("chapterPeriodsIndex", 1);
},
enumerable: !1,
configurable: !0
});
Object.defineProperty(t.prototype, "adventurePushSaveData", {
get: function() {
if (this._adventurePushSaveData) return this._adventurePushSaveData;
this._adventurePushSaveData = storage.getItem("achievementPushMixTrait_adventure", {
travelId: -1,
isPushed: !1,
isCancelPushed: !1,
pushAdventureEndTimeMs: 0
});
return this._adventurePushSaveData;
},
enumerable: !1,
configurable: !0
});
t.prototype.resetAdventurePushSaveData = function(e, t, r, i) {
void 0 === e && (e = -1);
void 0 === t && (t = !1);
void 0 === r && (r = !1);
void 0 === i && (i = 0);
this._adventurePushSaveData = {
travelId: e,
isPushed: t,
isCancelPushed: r,
pushAdventureEndTimeMs: i
};
storage.setItem("achievementPushMixTrait_adventure", this._adventurePushSaveData);
};
t.prototype.checkIsTravelThemeUpdate = function() {
if (!(this.isMixAdventureValue <= 0)) try {
var e = storage.getItem("chapterPeriodsBeginTime", 0), t = new Date().getTime(), r = e > 0 ? e + 864e5 * hs.homePageInfo.chapterPeriodDay - t : 864e5 * hs.homePageInfo.chapterPeriodDay, i = this.chapterStageStorage;
this.adventurePushSaveData.travelId < 0 && 1 === this.chapterStageStorage && hs.launchInfo.openChapterModule() ? this.adventurePushTask(i + 1) : i > 0 && r <= 0 && this.adventurePushSaveData.travelId <= i ? this.adventurePushTask(i + 1) : r > 0 && this.adventurePushSaveData.isPushed && i == this.adventurePushSaveData.travelId && !this.adventurePushSaveData.isCancelPushed && this.adventureCancelPushTask(i);
} catch (e) {}
};
t.prototype.adventureCancelPushTask = function(e) {
hs.NativeAppCenterInterface.noticeAppCommonRemovePush();
hs.pushDispatchCentralInfo.releasePushDispatch("AchievementPushMixTrait");
DS("game_push_adventure_success", {
adventurepushsend: 0
});
this.resetAdventurePushSaveData(e, !0, !0, 0);
};
t.prototype.adventurePushTask = function(e) {
var t = this.adventurePushData;
if (t) {
var r = this.getPushTimeMs(this.sendTime), i = {
opewaynum: t.scheme,
taskType: t.strategy,
sendTime: r
};
this.occupyPushDispatch(i.opewaynum, i.taskType, i.sendTime);
this.tryPush(i);
DS("game_push_adventure_success", {
adventurepushsend: 1
});
this.resetAdventurePushSaveData(e, !0, !1, this.pushEndTimeMs);
var s = this.savePushData.pushCurrentType;
if (-1 != s) {
var n = this.getAchievementPushMixMapDataByPushType(s);
1 === n.pushResult && n.pushMixEndTimeMs > Date.now() && this.tryCancelPushTaskByPushType(s, !0);
}
}
};
t.prototype.tryPush = function(e) {
hs.NativeAppCenterInterface.noticeAppCommonSendPush(e);
};
t.prototype.getPushTimeMs = function(e) {
var t = h(e.split(":").map(Number), 3), r = t[0], i = t[1];
t[2];
(isNaN(r) || r > 24 || r < 0) && (r = 0);
(isNaN(i) || i > 60 || i < 0) && (i = 0);
var s = new Date();
s.setHours(r, i, 0, 0);
return Math.floor(s.getTime());
};
t.prototype.onPushDispatchCovered = function() {
var e = this.savePushData.pushCurrentType;
if (-1 === e) this.adventurePushSaveData.isPushed && !this.adventurePushSaveData.isCancelPushed && this.resetAdventurePushSaveData(); else {
var t = this.getAchievementPushMixMapDataByPushType(e);
if (1 === t.pushResult) {
t.pushResult = 0;
t.pushMixEndTimeMs = 0;
this.resetAchievementPushMixMapData();
}
this.resetSavePushData();
}
};
t.prototype.handlePushDispatchCentralInfoMarkCovered = function(e) {
var t, r, i = null === (t = e.args) || void 0 === t ? void 0 : t[0], s = null === (r = e.args) || void 0 === r ? void 0 : r[1];
"AchievementPushMixTrait" === i && this.onPushDispatchCovered(s);
};
t.prototype.canCheckPushDispatch = function() {
return !hs.pushDispatchCentralInfo.active || hs.pushDispatchCentralInfo.checkPriorityCanTrigger("AchievementPushMixTrait");
};
t.prototype.occupyPushDispatch = function(e, t, r) {
hs.pushDispatchCentralInfo.occupyPushDispatch("AchievementPushMixTrait", e, t, r);
};
Object.defineProperty(t.prototype, "isAdventurePushing", {
get: function() {
return this.adventurePushSaveData.isPushed && !this.adventurePushSaveData.isCancelPushed && this.adventurePushSaveData.pushAdventureEndTimeMs > Date.now();
},
enumerable: !1,
configurable: !0
});
Object.defineProperty(t.prototype, "pushEndTimeMs", {
get: function() {
return Date.now() + 2592e5;
},
enumerable: !1,
configurable: !0
});
return a([ classId("AchievementPushMixTrait"), classMethodWatch() ], t);
}(Trait);
r.AchievementPushMixTrait = o;
cc._RF.pop();
}, {} ],
AchievementPushMix_gpz1_Trait: [ function(e, t, r) {
"use strict";
cc._RF.push(t, "85a951MtApAbpO7HUIRNMQA", "AchievementPushMix_gpz1_Trait");
var i, s = this && this.__extends || (i = function(e, t) {
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
}), n = this && this.__decorate || function(e, t, r, i) {
var s, n = arguments.length, a = n < 3 ? t : null === i ? i = Object.getOwnPropertyDescriptor(t, r) : i;
if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) a = Reflect.decorate(e, t, r, i); else for (var u = e.length - 1; u >= 0; u--) (s = e[u]) && (a = (n < 3 ? s(a) : n > 3 ? s(t, r, a) : s(t, r)) || a);
return n > 3 && a && Object.defineProperty(t, r, a), a;
};
Object.defineProperty(r, "__esModule", {
value: !0
});
r.AchievementPushMix_gpz1_Trait = void 0;
var a = function(e) {
s(t, e);
function t() {
return null !== e && e.apply(this, arguments) || this;
}
t.prototype.onCreate = function() {
e.prototype.onCreate.call(this);
Trait.dynamicEnableTraitsAsync([ {
id: 333759001
} ]);
};
t.prototype.canSendAchievementPush = function() {
return this.isMaturityOk();
};
t.prototype.adventurePushTask = function(t) {
this.isMaturityOk() && e.prototype.adventurePushTask.call(this, t);
};
t.prototype.isMaturityOk = function() {
var e = TRAIT("MaturityDevelopmentV2Trait");
if (!(null == e ? void 0 : e.active) || "function" != typeof e.emitMaturity) return !1;
var t = e.emitMaturity("game");
return !!Number.isFinite(t) && t > 50;
};
Object.defineProperty(t.prototype, "sendTimeByCounty", {
get: function() {
var e;
return null !== (e = this.props.sendTimeByCounty) && void 0 !== e ? e : null;
},
enumerable: !1,
configurable: !0
});
Object.defineProperty(t.prototype, "sendTime", {
get: function() {
var e, t, r, i, s = (null !== (r = null === (t = null === (e = hs.deviceInfo) || void 0 === e ? void 0 : e.data) || void 0 === t ? void 0 : t.country) && void 0 !== r ? r : "").toUpperCase(), n = this.sendTimeByCounty;
return n && "object" == typeof n && n.hasOwnProperty(s) && null !== (i = n[s]) && void 0 !== i ? i : "13:00";
},
enumerable: !1,
configurable: !0
});
return n([ classId("AchievementPushMixTrait", "gpz1") ], t);
}(e("./AchievementPushMixTrait").AchievementPushMixTrait);
r.AchievementPushMix_gpz1_Trait = a;
cc._RF.pop();
}, {
"./AchievementPushMixTrait": "AchievementPushMixTrait"
} ],
AchievementPushMix_sendTimeByCounty_Trait: [ function(e, t, r) {
"use strict";
cc._RF.push(t, "095d8WauedBC4K5RyH6XYvZ", "AchievementPushMix_sendTimeByCounty_Trait");
var i, s = this && this.__extends || (i = function(e, t) {
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
}), n = this && this.__decorate || function(e, t, r, i) {
var s, n = arguments.length, a = n < 3 ? t : null === i ? i = Object.getOwnPropertyDescriptor(t, r) : i;
if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) a = Reflect.decorate(e, t, r, i); else for (var u = e.length - 1; u >= 0; u--) (s = e[u]) && (a = (n < 3 ? s(a) : n > 3 ? s(t, r, a) : s(t, r)) || a);
return n > 3 && a && Object.defineProperty(t, r, a), a;
};
Object.defineProperty(r, "__esModule", {
value: !0
});
r.AchievementPushMix_sendTimeByCounty_Trait = void 0;
var a = function(e) {
s(t, e);
function t() {
return null !== e && e.apply(this, arguments) || this;
}
Object.defineProperty(t.prototype, "sendTimeByCounty", {
get: function() {
var e;
return null !== (e = this.props.sendTimeByCounty) && void 0 !== e ? e : null;
},
enumerable: !1,
configurable: !0
});
Object.defineProperty(t.prototype, "sendTime", {
get: function() {
var e, t, r, i, s = (null !== (r = null === (t = null === (e = hs.deviceInfo) || void 0 === e ? void 0 : e.data) || void 0 === t ? void 0 : t.country) && void 0 !== r ? r : "").toUpperCase(), n = this.sendTimeByCounty;
return n && "object" == typeof n && n.hasOwnProperty(s) && null !== (i = n[s]) && void 0 !== i ? i : "13:00";
},
enumerable: !1,
configurable: !0
});
return n([ classId("AchievementPushMixTrait", "sendTimeByCounty") ], t);
}(e("./AchievementPushMixTrait").AchievementPushMixTrait);
r.AchievementPushMix_sendTimeByCounty_Trait = a;
cc._RF.pop();
}, {
"./AchievementPushMixTrait": "AchievementPushMixTrait"
} ]
}, {}, [ "AchievementPushMixTrait", "AchievementPushMix_gpz1_Trait", "AchievementPushMix_sendTimeByCounty_Trait" ]);
//# sourceMappingURL=index.js.map
