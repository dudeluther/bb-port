window.__require = function e(t, i, n) {
function o(s, a) {
if (!i[s]) {
if (!t[s]) {
var p = s.split("/");
p = p[p.length - 1];
if (!t[p]) {
var u = "function" == typeof __require && __require;
if (!a && u) return u(p, !0);
if (r) return r(p, !0);
throw new Error("Cannot find module '" + s + "'");
}
s = p;
}
var h = i[s] = {
exports: {}
};
t[s][0].call(h.exports, function(e) {
return o(t[s][1][e] || e);
}, h, h.exports, e, t, i, n);
}
return i[s].exports;
}
for (var r = "function" == typeof __require && __require, s = 0; s < n.length; s++) o(n[s]);
return o;
}({
PushDeepLinkAbilityControlTrait: [ function(e, t, i) {
"use strict";
cc._RF.push(t, "3ab157u/g5JX403K/yfh0OI", "PushDeepLinkAbilityControlTrait");
var n, o = this && this.__extends || (n = function(e, t) {
return (n = Object.setPrototypeOf || {
__proto__: []
} instanceof Array && function(e, t) {
e.__proto__ = t;
} || function(e, t) {
for (var i in t) Object.prototype.hasOwnProperty.call(t, i) && (e[i] = t[i]);
})(e, t);
}, function(e, t) {
n(e, t);
function i() {
this.constructor = e;
}
e.prototype = null === t ? Object.create(t) : (i.prototype = t.prototype, new i());
}), r = (this && this.__assign, this && this.__decorate || function(e, t, i, n) {
var o, r = arguments.length, s = r < 3 ? t : null === n ? n = Object.getOwnPropertyDescriptor(t, i) : n;
if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) s = Reflect.decorate(e, t, i, n); else for (var a = e.length - 1; a >= 0; a--) (o = e[a]) && (s = (r < 3 ? o(s) : r > 3 ? o(t, i, s) : o(t, i)) || s);
return r > 3 && s && Object.defineProperty(t, i, s), s;
}), s = this && this.__values || function(e) {
var t = "function" == typeof Symbol && Symbol.iterator, i = t && e[t], n = 0;
if (i) return i.call(e);
if (e && "number" == typeof e.length) return {
next: function() {
e && n >= e.length && (e = void 0);
return {
value: e && e[n++],
done: !e
};
}
};
throw new TypeError(t ? "Object is not iterable." : "Symbol.iterator is not defined.");
};
Object.defineProperty(i, "__esModule", {
value: !0
});
i.PushDeepLinkAbilityControlTrait = void 0;
var a = [ "openMosaic", "chapterStart", "start", "minigameOpen", "gl_oneline" ], p = a[a.length - 1], u = {
home: "home",
class: "class",
chapter: "chapter",
minigame: "minigame"
}, h = {
open: "open",
start: "start",
openmosaic: "openMosaic",
mosaic: "openMosaic",
openlist: "openList",
list: "openList",
latest_level: "start"
}, c = {
home: [ "open" ],
class: [ "start" ],
chapter: [ "start", "latest_level", "openmosaic", "mosaic" ],
minigame: [ "open", "start", "openlist", "list" ]
}, l = {
home: [ "open" ],
class: [ "start" ],
chapter: [ "openMosaic", "start" ],
minigame: [ "openList", "start" ]
}, m = function(e) {
o(t, e);
function t() {
var t = null !== e && e.apply(this, arguments) || this;
t._coldStartHandled = !1;
t._hotStartEntryAttempted = !1;
t._consumedPushClickOpeway = "";
t._consumedPushClickTime = 0;
t._consumedPushId = "";
t._pushSnapshotOnHide = null;
t._hotPushIntentConfirmed = !1;
t._iosHotStartPendingDeepLink = !1;
t.gmPendingMinigameGameId = "";
t.lastGmMinigameTargetGameId = "";
t.lastGmPushOpeway = "";
t.lastGmPushSendTimeMs = 0;
t.gmHotPushBypassSeq = 0;
t.gmHotPushBypassConsumedSeq = 0;
return t;
}
i = t;
t.prototype.onCreate = function() {};
t.prototype.isHomePage_ProxyShowComplete = function() {
this.onHomePageShow();
};
t.prototype.isGame_ProxyOnGameHotShow = function() {
this.onGameEventShow();
};
t.prototype.isGame_ProxyOnGameHotHide = function() {
this.onGameEventHide();
};
t.prototype.onHomePageShow = function() {
this.isTraitEnabled() && this.onColdStartHomeReady();
};
t.prototype.onGameEventShow = function() {
this.isTraitEnabled() && this.onHotStart();
};
t.prototype.onGameEventHide = function() {
if (this.isTraitEnabled()) {
this._hotPushIntentConfirmed = !1;
this._iosHotStartPendingDeepLink = !1;
var e = this.fetchGpPushClickSnapshot();
this._pushSnapshotOnHide = e;
}
};
t.prototype.onColdStartHomeReady = function() {
if (!this._coldStartHandled) {
this._coldStartHandled = !0;
this._hotStartEntryAttempted || this.tryHandlePush("cold");
}
};
t.prototype.onHotStart = function() {
if (this.guardHotStartPushIntent()) {
var e = this.fetchPushContext("hot");
if (e.openAppClickOpeway) {
var t = this.resolveHotPushClickTimeForDedup(e);
if (this.isFreshPushClick(e.openAppClickOpeway, t, e.pushId)) {
this._hotStartEntryAttempted = !0;
this.tryHandlePush("hot");
}
}
}
};
t.prototype.onIosDeepLinkReceived = function() {
if (this._iosHotStartPendingDeepLink) {
this._iosHotStartPendingDeepLink = !1;
this.onHotStart();
}
};
t.prototype.tryHandlePush = function(e) {
if (this.isTraitEnabled() && ("hot" !== e || this._hotPushIntentConfirmed || this.guardHotStartPushIntent())) {
var t = this.fetchPushContext(e), i = this.resolveFetchContext(t, e);
if (i.deeplink && this.shouldProcessPushEntry(e, i)) {
var n = this.parseDeepLink(i.deeplink);
if (n && !this.isPushJumpSceneActionDisabled(n.sceneId, n.actionId)) {
this.requestJump(n);
var o = "hot" === e ? this.resolveHotPushClickTimeForDedup(i) : i.pushClickTime;
this.markPushClickConsumed(i.openAppClickOpeway, o, i.pushId);
}
}
}
};
t.prototype.shouldProcessPushEntry = function(e, t) {
if ("cold" === e && !t.openAppClickOpeway) return !1;
if ("hot" === e) {
if (!t.openAppClickOpeway) return !1;
var i = this.resolveHotPushClickTimeForDedup(t);
if (!this.isFreshPushClick(t.openAppClickOpeway, i, t.pushId)) return !1;
}
return !0;
};
t.prototype.resolveHotPushClickTimeForDedup = function(e) {
return e.rawPushClickTime > 0 ? e.rawPushClickTime : 0;
};
t.prototype.requestJump = function(e) {
hs.EventManager.dispatchModuleEvent(new hs.E_JumpScene_Jump({
sceneId: e.sceneId,
actionId: e.actionId,
gameId: e.gameId
}));
};
t.prototype.guardHotStartPushIntent = function() {
this._hotPushIntentConfirmed = !1;
var e = this.fetchGpPushClickSnapshot();
if (!this.isHotStartPushIntentChanged(e)) {
if (this.tryConsumeGmGpHotPushSnapshotBypass(e)) {
this._hotPushIntentConfirmed = !0;
return !0;
}
return !1;
}
this._hotPushIntentConfirmed = !0;
return !0;
};
t.prototype.isHotStartPushIntentChanged = function(e) {
var t = this._pushSnapshotOnHide, i = e.openAppClickOpeway;
if (!i) return !1;
if (!t) return e.rawPushClickTime > 0 || e.clickCount > 0 || !!e.pushId;
var n = e.rawPushClickTime > t.rawPushClickTime, o = e.clickCount > t.clickCount, r = !!e.pushId && e.pushId !== t.pushId, s = i !== t.openAppClickOpeway;
return n || o || r || s;
};
t.prototype.tryConsumeGmGpHotPushSnapshotBypass = function() {
return !1;
};
t.prototype.fetchPushContext = function(e) {
void 0 === e && (e = "cold");
return cc.sys.isNative ? this.fetchGpPushContext(e) : {
deeplink: "",
pushClickTime: 0,
openAppClickOpeway: "",
rawPushClickTime: 0,
pushId: ""
};
};
t.prototype.fetchGpPushContext = function(e) {
var t, i;
try {
var n = hs.NativeAppCenterInterface.noticeAppGetOpenAppOpeway(), o = null !== (t = null == n ? void 0 : n.click) && void 0 !== t ? t : "", r = null !== (i = null == n ? void 0 : n.show) && void 0 !== i ? i : [];
if (!o) return {
deeplink: "",
pushClickTime: 0,
openAppClickOpeway: "",
rawPushClickTime: 0,
pushId: ""
};
var s = hs.NativeAppCenterInterface.noticeAppGetGamePushInfo(o), a = "string" == typeof (null == s ? void 0 : s.deeplink) ? s.deeplink.trim() : "", p = "number" == typeof (null == s ? void 0 : s.pushClickTime) ? s.pushClickTime : 0, u = "number" == typeof (null == s ? void 0 : s.sendLastTime) ? s.sendLastTime : 0, h = Array.isArray(null == s ? void 0 : s.pushClickTimeAll) && s.pushClickTimeAll.length > 0 ? s.pushClickTimeAll[s.pushClickTimeAll.length - 1] : 0, c = Math.max(p, h), l = this.fetchGpOpenAppPushId(), m = this.resolveStartTimeFromPushList(o, null == s ? void 0 : s.list), d = this.resolveClickTimeFromShowList(o, r);
return {
deeplink: a,
pushClickTime: "hot" === e ? c : c > 0 ? c : u > 0 ? u : h > 0 ? h : m > 0 ? m : d,
openAppClickOpeway: o,
rawPushClickTime: c,
pushId: l
};
} catch (e) {
return {
deeplink: "",
pushClickTime: 0,
openAppClickOpeway: "",
rawPushClickTime: 0,
pushId: ""
};
}
};
t.prototype.fetchIosPushContext = function() {
var e = this.fetchIosOpenAppClickOpeway();
if (!e) return {
deeplink: "",
pushClickTime: 0,
openAppClickOpeway: "",
rawPushClickTime: 0,
pushId: ""
};
var t = hs.pushDeepLinkInfo.getIosDeepLink(), i = this.safeFetchIosPushInfo(), n = this.resolveIosPushClickTime(i).pushClickTime, o = n;
if (!t && i) {
var r = "string" == typeof i.jump_link ? i.jump_link.trim() : "";
r && hs.pushDeepLinkInfo.iosDeepLinkDeliveredThisSession && (t = r);
}
return {
deeplink: t,
pushClickTime: n,
openAppClickOpeway: e,
rawPushClickTime: o,
pushId: ""
};
};
t.prototype.fetchIosOpenAppClickOpeway = function() {
var e;
try {
var t = null !== (e = hs.NativePush.callNativeGetPushStrategy()) && void 0 !== e ? e : "";
return ("string" == typeof t ? t : "").trim();
} catch (e) {
return "";
}
};
t.prototype.safeFetchIosPushInfo = function() {
return null;
};
t.prototype.resolveIosPushClickTime = function(e) {
var t = "number" == typeof (null == e ? void 0 : e.log_rt) ? e.log_rt : 0;
return t <= 0 ? {
pushClickTime: 0,
rawLogRt: t
} : {
pushClickTime: t > 1e12 ? t : 1e3 * t,
rawLogRt: t
};
};
t.prototype.fetchGpPushClickSnapshot = function() {
var e, t;
if (!cc.sys.isNative) return {
openAppClickOpeway: "",
rawPushClickTime: 0,
showMaxTime: 0,
clickCount: 0,
pushId: ""
};
try {
var i = hs.NativeAppCenterInterface.noticeAppGetOpenAppOpeway(), n = null !== (e = null == i ? void 0 : i.click) && void 0 !== e ? e : "", o = null !== (t = null == i ? void 0 : i.show) && void 0 !== t ? t : [], r = 0, s = 0, a = "";
if (n) {
var p = hs.NativeAppCenterInterface.noticeAppGetGamePushInfo(n), u = "number" == typeof (null == p ? void 0 : p.pushClickTime) ? p.pushClickTime : 0, h = Array.isArray(null == p ? void 0 : p.pushClickTimeAll) ? p.pushClickTimeAll : [], c = h.length > 0 ? h[h.length - 1] : 0;
r = Math.max(u, c);
s = h.length;
a = this.fetchGpOpenAppPushId();
}
return {
openAppClickOpeway: n,
rawPushClickTime: r,
showMaxTime: this.resolveClickTimeFromShowList(n, o),
clickCount: s,
pushId: a
};
} catch (e) {
return {
openAppClickOpeway: "",
rawPushClickTime: 0,
showMaxTime: 0,
clickCount: 0,
pushId: ""
};
}
};
t.prototype.fetchGpOpenAppPushId = function() {
try {
var e = hs.NativeAppCenterInterface.noticeAppGetOpenAppPushInfo(), t = null == e ? void 0 : e.s_push_id;
return "string" == typeof t ? t.trim() : "";
} catch (e) {
return "";
}
};
t.prototype.resolveStartTimeFromPushList = function(e, t) {
var i, n;
if (!e || !(null == t ? void 0 : t.length)) return 0;
var o = 0;
try {
for (var r = s(t), a = r.next(); !a.done; a = r.next()) {
var p = a.value;
if ((null == p ? void 0 : p.taskType) === e || (null == p ? void 0 : p.pushStrategy) === e) {
var u = "number" == typeof p.startTime ? p.startTime : 0;
u > o && (o = u);
}
}
} catch (e) {
i = {
error: e
};
} finally {
try {
a && !a.done && (n = r.return) && n.call(r);
} finally {
if (i) throw i.error;
}
}
return o;
};
t.prototype.resolveClickTimeFromShowList = function(e, t) {
var i, n;
if (!e || !t.length) return 0;
var o = 0;
try {
for (var r = s(t), a = r.next(); !a.done; a = r.next()) {
var p = a.value;
if ((null == p ? void 0 : p.opewaynum) === e) {
var u = "number" == typeof p.time ? p.time : 0;
u > o && (o = u);
}
}
} catch (e) {
i = {
error: e
};
} finally {
try {
a && !a.done && (n = r.return) && n.call(r);
} finally {
if (i) throw i.error;
}
}
return o;
};
t.prototype.resolveFetchContext = function(e) {
return e;
};
t.prototype.parseDeepLink = function(e) {
var t, i, n, o, r, s, a, p, m, d = null == e ? void 0 : e.trim();
if (!d) return null;
var f = d.indexOf("?"), y = f >= 0 ? d.slice(f + 1) : d, v = this.parseQueryString(y), C = (null !== (i = null !== (t = v.scene) && void 0 !== t ? t : v.Scene) && void 0 !== i ? i : "").toLowerCase(), P = (null !== (o = null !== (n = v.action) && void 0 !== n ? n : v.Action) && void 0 !== o ? o : "").toLowerCase(), g = (null !== (a = null !== (s = null !== (r = v.game_id) && void 0 !== r ? r : v.gameId) && void 0 !== s ? s : v.gameid) && void 0 !== a ? a : "").trim(), k = u[C];
if (!k) return null;
var I = h[P];
return I && (null === (p = c[C]) || void 0 === p ? void 0 : p.includes(P)) && (I = this.normalizeAction(k, I, g, P)) && ("minigame" !== k || "start" !== I || g) && (null === (m = l[k]) || void 0 === m ? void 0 : m.includes(I)) ? {
sceneId: k,
actionId: I,
gameId: g || void 0,
rawDeeplink: d
} : null;
};
t.prototype.isPushOpewayAllowed = function(e) {
var t, i, n, o = null === (n = this.props) || void 0 === n ? void 0 : n.allowedPushOpeways;
if (!Array.isArray(o) || 0 === o.length) return !0;
try {
for (var r = s(o), a = r.next(); !a.done; a = r.next()) {
var p = a.value;
if ("string" == typeof p && p && (p.endsWith("*") ? e.startsWith(p.slice(0, -1)) : e === p)) return !0;
}
} catch (e) {
t = {
error: e
};
} finally {
try {
a && !a.done && (i = r.return) && i.call(r);
} finally {
if (t) throw t.error;
}
}
return !1;
};
t.prototype.normalizeAction = function(e, t, i, n) {
return "home" === e ? "open" : "class" === e ? "start" : "chapter" === e ? "openMosaic" === t || "openmosaic" === n || "mosaic" === n ? "openMosaic" : "start" : "minigame" === e ? "openList" === t || "openlist" === n || "list" === n ? "openList" : i || "start" === t || "open" === t ? "start" : "openList" : t;
};
t.prototype.parseQueryString = function(e) {
var t, i, n = {};
if (!e) return n;
try {
for (var o = s(e.split("&")), r = o.next(); !r.done; r = o.next()) {
var a = r.value;
if (a) {
var p = a.indexOf("=");
p < 0 ? n[this.safeDecodeURI(a)] = "" : n[this.safeDecodeURI(a.slice(0, p))] = this.safeDecodeURI(a.slice(p + 1));
}
}
} catch (e) {
t = {
error: e
};
} finally {
try {
r && !r.done && (i = o.return) && i.call(o);
} finally {
if (t) throw t.error;
}
}
return n;
};
t.prototype.safeDecodeURI = function(e) {
try {
return decodeURIComponent(e);
} catch (t) {
return e;
}
};
t.prototype.isFreshPushClick = function(e, t, i) {
return !!(e || t > 0) && (!this._consumedPushClickOpeway && 0 === this._consumedPushClickTime && !this._consumedPushId || !(!e || e === this._consumedPushClickOpeway) || t > 0 && t !== this._consumedPushClickTime || !(!i || i === this._consumedPushId));
};
t.prototype.markPushClickConsumed = function(e, t, i) {
void 0 === i && (i = "");
e && (this._consumedPushClickOpeway = e);
t > 0 && (this._consumedPushClickTime = t);
i && (this._consumedPushId = i);
};
t.prototype.clearConsumedPushClick = function() {
this._consumedPushClickOpeway = "";
this._consumedPushClickTime = 0;
this._consumedPushId = "";
};
t.prototype.isTraitEnabled = function() {
var e;
return !!this.active && !1 !== (null === (e = this.props) || void 0 === e ? void 0 : e.enabled);
};
t.prototype.isPushJumpSceneActionDisabled = function(e, t) {
var i, n, o = null !== (n = null === (i = this.props) || void 0 === i ? void 0 : i.disabledJumpItems) && void 0 !== n ? n : [];
return !!o.length && (o.includes(e + ",all") || o.includes(e + "," + t));
};
t.prototype.gmClearPushClickConsumeStateBeforeSend = function() {
this.clearConsumedPushClick();
var e = this.fetchGpPushClickSnapshot();
e.rawPushClickTime > 0 && this.markPushClickConsumed(e.openAppClickOpeway, e.rawPushClickTime);
};
t.prototype.registerGmMenu = function() {
this.registerPushNotificationGmMenu();
this.registerJumpSceneGmMenu();
};
t.prototype.registerPushNotificationGmMenu = function() {
var e = this;
if (!i.gmPushNotificationRegistered) {
i.gmPushNotificationRegistered = !0;
hs.classGmCfgMenuTrait.push({
title: "PushDeepLink通知-GM",
argName: "1-" + a.length + ":序号 gameId:小游戏 0/c:取消",
explainStr: this.buildPushNotificationGmExplainStr(),
action: function(t) {
e.gmHandlePushNotificationCommand(t);
}
});
}
};
t.prototype.registerJumpSceneGmMenu = function() {
var e = this;
if (!i.gmJumpSceneRegistered) {
i.gmJumpSceneRegistered = !0;
hs.classGmCfgMenuTrait.push({
title: "JumpScene跳转-GM",
argName: "1-" + a.length + ":序号 gameId:小游戏",
explainStr: this.buildJumpSceneGmExplainStr(),
action: function(t) {
e.gmHandleJumpSceneCommand(t);
}
});
}
};
t.prototype.buildPushNotificationGmExplainStr = function() {
return a.map(function(e, t) {
return t + 1 + "=" + e;
}).join("; ") + "；输入数字=方案号；0/c 取消 Push；输入字符=小游戏gameId";
};
t.prototype.buildJumpSceneGmExplainStr = function() {
return a.map(function(e, t) {
return t + 1 + "=" + e;
}).join("; ") + "；输入数字=直跳场景；输入字符=小游戏gameId直跳";
};
t.prototype.gmHandlePushNotificationCommand = function(e) {
var t = (null != e ? e : "").trim();
if (t) {
var i = t.toLowerCase();
if ("0" !== i && "c" !== i) {
var n = Date.now() + 3e4;
if (/^\d+$/.test(t)) {
this.gmPendingMinigameGameId = "";
this.lastGmMinigameTargetGameId = "";
var o = Number(t);
if (!Number.isInteger(o) || o < 1 || o > a.length) return;
var r = a[o - 1];
this.sendGmPushNotification({
opewaynum: r,
taskType: r,
sendTimeMs: n
});
} else {
var s = t.replace(/^["']|["']$/g, "");
if (s) {
this.gmPendingMinigameGameId = s;
this.lastGmMinigameTargetGameId = s;
this.sendGmPushNotification({
opewaynum: p,
taskType: p,
sendTimeMs: n
});
}
}
} else {
this.gmPendingMinigameGameId = "";
this.lastGmMinigameTargetGameId = "";
this.removeGmPushNotification();
}
}
};
t.prototype.gmHandleJumpSceneCommand = function(e) {
var t = (null != e ? e : "").trim();
if (t) if (/^\d+$/.test(t)) {
var i = Number(t);
if (!Number.isInteger(i) || i < 1 || i > a.length) return;
var n = a[i - 1], o = this.resolveGmJumpTargetByPlan(n);
if (!o) return;
this.dispatchGmJumpScene(o);
} else {
var r = t.replace(/^["']|["']$/g, "");
r && this.dispatchGmJumpScene({
sceneId: hs.JumpSceneId.MiniGame,
actionId: hs.JumpActionId.Start,
gameId: r
});
}
};
t.prototype.resolveGmJumpTargetByPlan = function(e) {
switch (e) {
case "openMosaic":
return {
sceneId: hs.JumpSceneId.Chapter,
actionId: hs.JumpActionId.OpenMosaic
};

case "chapterStart":
return {
sceneId: hs.JumpSceneId.Chapter,
actionId: hs.JumpActionId.Start
};

case "start":
return {
sceneId: hs.JumpSceneId.Class,
actionId: hs.JumpActionId.Start
};

case "minigameOpen":
return {
sceneId: hs.JumpSceneId.MiniGame,
actionId: hs.JumpActionId.OpenList
};

case "gl_oneline":
return {
sceneId: hs.JumpSceneId.MiniGame,
actionId: hs.JumpActionId.Start,
gameId: "gl_oneline"
};

default:
return null;
}
};
t.prototype.dispatchGmJumpScene = function(e) {
hs.EventManager.dispatchModuleEvent(new hs.E_JumpScene_Jump({
sceneId: e.sceneId,
actionId: e.actionId,
gameId: e.gameId,
forceJump: !0
}));
};
t.prototype.buildMinigameStartDeeplink = function(e) {
return "scheme://path?scene=minigame&action=start&game_id=" + encodeURIComponent(e);
};
t.prototype.sendGmPushNotification = function(e) {
this.lastGmPushOpeway = e.opewaynum;
this.lastGmPushSendTimeMs = e.sendTimeMs;
this.gmHotPushBypassSeq += 1;
this.gmClearPushClickConsumeStateBeforeSend(e.sendTimeMs, e.opewaynum);
hs.NativeAppCenterInterface.noticeAppCommonSendPush({
opewaynum: e.opewaynum,
taskType: e.taskType,
sendTime: e.sendTimeMs
});
};
t.prototype.removeGmPushNotification = function() {
hs.NativeAppCenterInterface.noticeAppCommonRemovePush();
};
var i;
t.gmPushNotificationRegistered = !1;
t.gmJumpSceneRegistered = !1;
r([ hs.storageProperty({
key: "PushDeepLinkAbilityControlTrait_gmPendingMinigameGameId"
}) ], t.prototype, "gmPendingMinigameGameId", void 0);
return i = r([ classId("PushDeepLinkAbilityControlTrait") ], t);
}(Trait);
i.PushDeepLinkAbilityControlTrait = m;
cc._RF.pop();
}, {} ]
}, {}, [ "PushDeepLinkAbilityControlTrait" ]);
//# sourceMappingURL=index.js.map
