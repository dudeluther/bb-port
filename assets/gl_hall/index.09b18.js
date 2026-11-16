window.__require = function e(t, n, i) {
function o(r, s) {
if (!n[r]) {
if (!t[r]) {
var l = r.split("/");
l = l[l.length - 1];
if (!t[l]) {
var c = "function" == typeof __require && __require;
if (!s && c) return c(l, !0);
if (a) return a(l, !0);
throw new Error("Cannot find module '" + r + "'");
}
r = l;
}
var u = n[r] = {
exports: {}
};
t[r][0].call(u.exports, function(e) {
return o(t[r][1][e] || e);
}, u, u.exports, e, t, n, i);
}
return n[r].exports;
}
for (var a = "function" == typeof __require && __require, r = 0; r < i.length; r++) o(i[r]);
return o;
}({
CampaignGuideMiniGameCtrl: [ function(e, t, n) {
"use strict";
cc._RF.push(t, "0e8c0EU3SlGQ79mPNAcQx7F", "CampaignGuideMiniGameCtrl");
var i = this && this.__awaiter || function(e, t, n, i) {
return new (n || (n = Promise))(function(o, a) {
function r(e) {
try {
l(i.next(e));
} catch (e) {
a(e);
}
}
function s(e) {
try {
l(i.throw(e));
} catch (e) {
a(e);
}
}
function l(e) {
e.done ? o(e.value) : (t = e.value, t instanceof n ? t : new n(function(e) {
e(t);
})).then(r, s);
var t;
}
l((i = i.apply(e, t || [])).next());
});
}, o = this && this.__generator || function(e, t) {
var n, i, o, a, r = {
label: 0,
sent: function() {
if (1 & o[0]) throw o[1];
return o[1];
},
trys: [],
ops: []
};
return a = {
next: s(0),
throw: s(1),
return: s(2)
}, "function" == typeof Symbol && (a[Symbol.iterator] = function() {
return this;
}), a;
function s(e) {
return function(t) {
return l([ e, t ]);
};
}
function l(a) {
if (n) throw new TypeError("Generator is already executing.");
for (;r; ) try {
if (n = 1, i && (o = 2 & a[0] ? i.return : a[0] ? i.throw || ((o = i.return) && o.call(i), 
0) : i.next) && !(o = o.call(i, a[1])).done) return o;
(i = 0, o) && (a = [ 2 & a[0], o.value ]);
switch (a[0]) {
case 0:
case 1:
o = a;
break;

case 4:
r.label++;
return {
value: a[1],
done: !1
};

case 5:
r.label++;
i = a[1];
a = [ 0 ];
continue;

case 7:
a = r.ops.pop();
r.trys.pop();
continue;

default:
if (!(o = r.trys, o = o.length > 0 && o[o.length - 1]) && (6 === a[0] || 2 === a[0])) {
r = 0;
continue;
}
if (3 === a[0] && (!o || a[1] > o[0] && a[1] < o[3])) {
r.label = a[1];
break;
}
if (6 === a[0] && r.label < o[1]) {
r.label = o[1];
o = a;
break;
}
if (o && r.label < o[2]) {
r.label = o[2];
r.ops.push(a);
break;
}
o[2] && r.ops.pop();
r.trys.pop();
continue;
}
a = t.call(e, r);
} catch (e) {
a = [ 6, e ];
i = 0;
} finally {
n = o = 0;
}
if (5 & a[0]) throw a[1];
return {
value: a[0] ? a[1] : void 0,
done: !0
};
}
};
Object.defineProperty(n, "__esModule", {
value: !0
});
var a = function() {
function e() {
this.loadComplete = !1;
this.fingerPrefab = null;
this.assetPaths = [ "prefabs/finger" ];
this.assetMap = new Map();
}
e.getInstance = function() {
if (null == this._instance) {
this._instance = new e();
this._instance.loadFingerPrefabPool();
}
return this._instance;
};
e.isOpen = function() {
var e, t;
return !(null === (e = null === GL || void 0 === GL ? void 0 : GL.gamelobby) || void 0 === e || !e.isTraitActive) && (null === (t = null === GL || void 0 === GL ? void 0 : GL.gamelobby) || void 0 === t ? void 0 : t.isTraitActive("CampaignGuideMiniGameTrait"));
};
e.prototype.checkCanShowGuide = function() {
var t, n = e.isOpen();
console.log("CampaignGuideMiniGame 小游戏承接特性 判断是否显示引导 特性是否开启 ", n);
if (!n) return !1;
var i = GL.Game.getFeatureKeyParam(e._featureName, "miniGuide") || !1;
console.log("CampaignGuideMiniGame 小游戏承接特性 判断是否显示引导 配置参数 miniGuide ", i);
if (!i) return !1;
if (!(null === (t = GL.gamelobby) || void 0 === t ? void 0 : t.getStorageValue)) {
console.log("CampaignGuideMiniGame 小游戏承接特性 判断是否显示引导 getStorageValue 不可用");
return !1;
}
var o = GL.gamelobby.getStorageValue("CampaignGuideMiniGameState", !1);
console.log("CampaignGuideMiniGame 小游戏承接特性 判断是否显示引导 本地存储 gameState ", o);
if (!o) return !1;
var a = GL.gamelobby.getStorageValue("CampaignGuideMiniGameGuideTriggered", 0);
console.log("CampaignGuideMiniGame 小游戏承接特性 判断是否显示引导 引导是否已触发 ", a);
return !a;
};
e.prototype.markGuideTriggered = function() {
var e;
(null === (e = GL.gamelobby) || void 0 === e ? void 0 : e.setStorageValue) && GL.gamelobby.setStorageValue("CampaignGuideMiniGameGuideTriggered", 1);
};
e.prototype.createFingerAnimation = function(e, t) {
void 0 === t && (t = cc.v2(0, 0));
if (this.fingerPrefab) if (e && cc.isValid(e)) {
if (this.checkCanShowGuide()) {
console.log("CampaignGuideMiniGame 小游戏承接特性 在指定位置创建手指动画");
var n = cc.instantiate(this.fingerPrefab);
n.setPosition(t);
e.addChild(n);
this.markGuideTriggered();
}
} else console.log("CampaignGuideMiniGame 小游戏承接特性 节点无效，不做创建动画逻辑"); else console.log("CampaignGuideMiniGame 小游戏承接特性 资源未加载完，特性不生效，不做创建动画逻辑");
};
e.prototype.loadFingerPrefabPool = function() {
return i(this, void 0, Promise, function() {
var e = this;
return o(this, function(t) {
switch (t.label) {
case 0:
return this.fingerPrefab ? [ 2 ] : [ 4, this.loadFingerPrefab().then(function() {
e.loadComplete = null != e.assetMap && e.assetMap.size === e.assetPaths.length;
var t = e.assetMap.get("prefabs/finger");
t && cc.isValid(t) && (e.fingerPrefab = t);
}) ];

case 1:
t.sent();
return [ 2 ];
}
});
});
};
e.prototype.loadFingerPrefab = function() {
var t;
return i(this, void 0, Promise, function() {
var n, i, a, r = this;
return o(this, function(o) {
switch (o.label) {
case 0:
if (!(n = null === (t = GL.Game) || void 0 === t ? void 0 : t.resLoaderLoadBundle)) {
console.log("【CampaignGuideMiniGame】resLoaderLoadBundle 不可用, 中止加载");
return [ 2 ];
}
i = 0;
return [ 4, n(e._bundleName, !0) ];

case 1:
return (a = o.sent()) ? [ 4, new Promise(function(e) {
for (var t = function(t) {
a.load(r.assetPaths[t], function(n, o) {
n ? console.log("【CampaignGuideMiniGame】加载失败: " + r.assetPaths[t] + ", err=", n) : r.assetMap.set(r.assetPaths[t], o);
++i >= r.assetPaths.length && e(!0);
});
}, n = 0; n < r.assetPaths.length; n++) t(n);
}) ] : [ 3, 3 ];

case 2:
o.sent();
return [ 3, 4 ];

case 3:
console.log("【CampaignGuideMiniGame】加载 bundle 失败");
o.label = 4;

case 4:
return [ 2 ];
}
});
});
};
e._instance = null;
e._featureName = "CampaignGuideMiniGame";
e._bundleName = "Remote_gl_hall_CampaignGuideMiniGame";
return e;
}();
n.default = a;
cc._RF.pop();
}, {} ],
GLAdjustInsertByPlayTimeCtrl: [ function(e, t, n) {
"use strict";
cc._RF.push(t, "bc002Eulj9PjoaHknVpy+MH", "GLAdjustInsertByPlayTimeCtrl");
Object.defineProperty(n, "__esModule", {
value: !0
});
var i = e("../hall/GLHallController"), o = e("../traits/GLGameAdStrategyOptimizeTraitCtrl"), a = function() {
function e() {
this.showAdsIntervalConfigTime = null;
this.lastSavedShowAdsTime = null;
this._featureName = "GLShowAdsByGameTime";
}
e.getInstance = function() {
null == this._instance && (this._instance = new e());
return this._instance;
};
e.prototype.isOpen = function() {
var t = GL.Game.IsFeatureOpen(this._featureName);
console.log("wztest GLAdjustInsertByPlayTimeCtrl 按照时间播放小游戏广告 是否开启 ", GL.Game.IsFeatureOpen(this._featureName));
if (o.default.getInstance().isOpen() && o.default.getInstance().checkNeedLimitAdTimeControl()) {
console.log("wztest GLAdjustInsertByPlayTimeCtrl 按照时间播放小游戏广告，受GLGameAdStrategyOptimize影响，特性不生效");
return !1;
}
return t && e.getInstance().getFeaturePara() > 0;
};
e.prototype.getFeaturePara = function() {
null == this.showAdsIntervalConfigTime && (this.showAdsIntervalConfigTime = GL.Game.getFeatureKeyParam(this._featureName, "showAdsTime"));
console.log("wztest GLAdjustInsertByPlayTimeCtrl  播放广告间隔时间 ", this.showAdsIntervalConfigTime);
return this.showAdsIntervalConfigTime ? this.showAdsIntervalConfigTime : 0;
};
e.prototype.isPlayAdsByTwoMinutes = function() {
return this.isOpen() && 2 == e.getInstance().getFeaturePara();
};
e.prototype.init = function() {
try {
var e = cc.sys.localStorage.getItem("GL_LAST_SHOWADS_TIMME");
if (e) this.lastSavedShowAdsTime = parseInt(e); else {
var t = i.default.getInstance().getAllGameTimeSum();
this.lastSavedShowAdsTime = t;
cc.sys.localStorage.setItem("GL_LAST_SHOWADS_TIMME", this.lastSavedShowAdsTime.toString());
}
} catch (e) {
cc.sys.localStorage.setItem("GL_LAST_SHOWADS_TIMME", "1");
}
};
e.prototype.getLastShowAdsTime = function() {
this.lastSavedShowAdsTime || this.init();
return this.lastSavedShowAdsTime || 1;
};
e.prototype.saveLastShowAdsTime = function() {
this.lastSavedShowAdsTime = i.default.getInstance().getAllGameTimeSum();
cc.sys.localStorage.setItem("GL_LAST_SHOWADS_TIMME", this.lastSavedShowAdsTime.toString());
};
e.prototype.checkCanShowAds = function() {
var t = i.default.getInstance().getAllGameTimeSum(), n = e.getInstance().getLastShowAdsTime();
console.log("wztest GLAdjustInsertByPlayTimeCtrl checkCanShowAds playAllMiniGameTime ", t);
console.log("wztest GLAdjustInsertByPlayTimeCtrl checkCanShowAds lastShowAdsTime ", n);
console.log("wztest GLAdjustInsertByPlayTimeCtrl checkCanShowAds playAllMiniGameTime - lastShowAdsTime ", t - n);
if (t - n >= 60 * this.getFeaturePara()) {
console.log("wztest 距离上次播广告 所有小游戏时长 :" + (t - n));
return !0;
}
return !1;
};
e.prototype.showInsertAds = function(t) {
var n = this;
e.getInstance().checkCanShowAds() && GL.Ad.showInsertAd(function(e) {
if (e && 1 === (null == e ? void 0 : e.state)) {
console.log("wztest 显示插屏广告 播放成功");
n.lastSavedShowAdsTime = i.default.getInstance().getAllGameTimeSum();
cc.sys.localStorage.setItem("GL_LAST_SHOWADS_TIMME", n.lastSavedShowAdsTime.toString());
}
}, this, t);
};
e._instance = null;
return e;
}();
n.default = a;
cc._RF.pop();
}, {
"../hall/GLHallController": "GLHallController",
"../traits/GLGameAdStrategyOptimizeTraitCtrl": "GLGameAdStrategyOptimizeTraitCtrl"
} ],
GLAdjustInsertShowTimesCtrl: [ function(e, t, n) {
"use strict";
cc._RF.push(t, "9cef9y4xd5M4JplLjkPulnq", "GLAdjustInsertShowTimesCtrl");
Object.defineProperty(n, "__esModule", {
value: !0
});
var i = e("../traits/GLGameAdStrategyOptimizeTraitCtrl"), o = function() {
function e() {
this.showAdsInterval = null;
this.miniGameCount = null;
this._featureName = "GLAdjustInsertShowTimes";
}
e.getInstance = function() {
null == this._instance && (this._instance = new e());
return this._instance;
};
e.prototype.isOpen = function() {
console.log("wztest GLAdjustInsertShowTimesCtrl 按照局数播放小游戏广告 是否开启 ", GL.Game.IsFeatureOpen(this._featureName));
console.log("wztest GLAdjustInsertShowTimesCtrl 播放广告局数 ", e.getInstance().getFeaturePara());
if (i.default.getInstance().isOpen() && i.default.getInstance().checkNeedLimitAdTimeControl()) {
console.log("wztest GLAdjustInsertShowTimesCtrl 按照局数播放小游戏广告，受GLGameAdStrategyOptimize影响，特性不生效");
return !1;
}
return GL.Game.IsFeatureOpen(this._featureName) && e.getInstance().getFeaturePara() > 0;
};
e.prototype.isOpenAdsByTwo = function() {
return this.isOpen() && 2 === this.getFeaturePara();
};
e.prototype.getFeaturePara = function() {
null == this.showAdsInterval && (this.showAdsInterval = GL.Game.getFeatureKeyParam(this._featureName, "showAdsInterval"));
return this.showAdsInterval ? this.showAdsInterval : 0;
};
e.prototype.checkCanShowAds = function() {
if (0 == this.showAdsInterval) return !1;
console.log("wztest GLAdjustInsertShowTimesCtrl 当前局数 ", this.miniGameCount);
console.log("wztest GLAdjustInsertShowTimesCtrl 播放广告的局数 ", this.showAdsInterval);
return this.miniGameCount >= this.showAdsInterval;
};
e.prototype.updateMiniGameSum = function() {
if (null == this.miniGameCount) {
var e = cc.sys.localStorage.getItem("GL_MINI_GAME_COUNT");
this.miniGameCount = e ? parseInt(e) : 0;
this.miniGameCount++;
} else this.miniGameCount++;
cc.sys.localStorage.setItem("GL_MINI_GAME_COUNT", this.miniGameCount.toString());
};
e.prototype.showInsertAds = function(t) {
var n = this;
e.getInstance().checkCanShowAds() && GL.Ad.showInsertAd(function(e) {
if (e && 1 === (null == e ? void 0 : e.state)) {
console.log("wztest 显示插屏广告 播放成功");
n.miniGameCount = 0;
cc.sys.localStorage.setItem("GL_MINI_GAME_COUNT", n.miniGameCount.toString());
}
}, this, t);
};
e._instance = null;
return e;
}();
n.default = o;
cc._RF.pop();
}, {
"../traits/GLGameAdStrategyOptimizeTraitCtrl": "GLGameAdStrategyOptimizeTraitCtrl"
} ],
GLAd: [ function(e, t, n) {
"use strict";
cc._RF.push(t, "2191fhNs7lL5IllMC0iFkmr", "GLAd");
var i = this && this.__assign || function() {
return (i = Object.assign || function(e) {
for (var t, n = 1, i = arguments.length; n < i; n++) {
t = arguments[n];
for (var o in t) Object.prototype.hasOwnProperty.call(t, o) && (e[o] = t[o]);
}
return e;
}).apply(this, arguments);
};
Object.defineProperty(n, "__esModule", {
value: !0
});
var o, a = e("../../HallFeature"), r = e("../../func/MiniGameDeliveryUndertakeCtrl"), s = e("../../hall/GLHallController"), l = e("../../traits/GLGameAdStrategyOptimizeTraitCtrl");
(function(e) {
(function(e) {
var t;
(function(e) {
e.banner = "3";
e.insert = "700";
e.rewards = "701";
})(t = e.AdType || (e.AdType = {}));
e.showBanner = function(e, n) {
void 0 === n && (n = t.banner);
cc.systemEvent.emit("gameLobby_ad", {
eventType: "showBanner",
type: n,
data: e
});
};
e.hideBanner = function(e, n) {
void 0 === n && (n = t.banner);
cc.systemEvent.emit("gameLobby_ad", {
eventType: "hideBanner",
type: n,
data: e
});
};
e.showInsertAd = function(e, n, i) {
var o, c;
if (!r.default.isOpen() || r.default.getInstance().checkCanShowAds()) {
var u = window.GL, _ = "minigame";
if (null === (o = null == u ? void 0 : u.gamelobby) || void 0 === o ? void 0 : o.isChapterFusionMode()) {
_ = "travel";
var d = null === (c = u.gamelobby) || void 0 === c ? void 0 : c.getStorageValue("ChapterMiniGameFusionEntrance", "");
d && "" != d && (i.sub_entrance = d);
}
i.entrance = _;
cc.systemEvent.emit("gameLobby_ad", {
eventType: "showInsertAd",
type: t.insert,
data: i,
call: function(t) {
console.log("=== showInsertAd ==callback", t);
l.default.getInstance().isOpen() && t && 1 === (null == t ? void 0 : t.state) && l.default.getInstance().onAdPlayComplete(!1);
null == e || e(t);
},
obj: n
});
if (a.default.isOpen(a.HallFeat.InsertAdsBlockInputEvents)) {
var h = a.default.getInsertAdsBlockInputEventsTime(), f = new cc.Node();
f.parent = s.default.getInstance().getSceneParentNode();
f.zIndex = 1e3;
f.addComponent(cc.BlockInputEvents);
f.setContentSize(5e3, 5e3);
f.setPosition(0, 0);
console.log("xltest 播放插屏广告，屏蔽点击事件1秒");
cc.Canvas.instance.node.getComponent(cc.Canvas).scheduleOnce(function() {
console.log("xltest 播放插屏广告，屏蔽点击事件1秒结束");
cc.isValid(f) && f.destroy();
}, h);
}
} else {
console.log("MiniGameDeliveryUndertake 小游戏承接特性 小游戏承接期，不出插屏");
null == e || e({
state: 0
});
}
};
e.showRewardsAd = function(e, n, i, o) {
var a, r;
void 0 === i && (i = t.rewards);
var s = window.GL, c = "minigame";
if (null === (a = null == s ? void 0 : s.gamelobby) || void 0 === a ? void 0 : a.isChapterFusionMode()) {
c = "travel";
var u = null === (r = s.gamelobby) || void 0 === r ? void 0 : r.getStorageValue("ChapterMiniGameFusionEntrance", "");
u && "" != u && (o.sub_entrance = u);
}
o.entrance = c;
cc.systemEvent.emit("gameLobby_ad", {
eventType: "showRewardsAd",
type: t.rewards,
call: function(t) {
console.log("=== showRewardsAd ==callback", t);
l.default.getInstance().isOpen() && t && 1 === (null == t ? void 0 : t.state) && l.default.getInstance().onAdPlayComplete(!0);
null == e || e(t);
},
obj: n,
data: o
});
};
})(e.Ad || (e.Ad = {}));
})(o || (o = {}));
window.GL = i(i({}, window.GL), o);
cc._RF.pop();
}, {
"../../HallFeature": "HallFeature",
"../../func/MiniGameDeliveryUndertakeCtrl": "MiniGameDeliveryUndertakeCtrl",
"../../hall/GLHallController": "GLHallController",
"../../traits/GLGameAdStrategyOptimizeTraitCtrl": "GLGameAdStrategyOptimizeTraitCtrl"
} ],
GLAudio: [ function(e, t) {
"use strict";
cc._RF.push(t, "10542yKiTFPF45DY0nA1Ddn", "GLAudio");
var n, i = this && this.__assign || function() {
return (i = Object.assign || function(e) {
for (var t, n = 1, i = arguments.length; n < i; n++) {
t = arguments[n];
for (var o in t) Object.prototype.hasOwnProperty.call(t, o) && (e[o] = t[o]);
}
return e;
}).apply(this, arguments);
};
(function(e) {
(function(t) {
var n = !1, i = !1;
function o(e, t) {
return "string" == typeof e ? new Promise(function(i) {
if (n) {
var o = cc.assetManager.getBundle(t);
if (o) o.load(e, cc.AudioClip, function(t, n) {
if (t) {
cc.error("Failed to load audio clip " + e + ": " + t);
i(0);
} else {
var o = cc.audioEngine.playEffect(n, !1);
i(o);
}
}); else {
cc.error("Bundle " + o + " not found");
i(0);
}
} else i(0);
}) : e instanceof cc.AudioClip ? n ? cc.audioEngine.playEffect(e, !1) : 0 : void 0;
}
t.playEffect = o;
function a(e, t, n) {
void 0 === n && (n = !0);
return "string" == typeof e ? new Promise(function(o) {
if (i) {
var a = cc.assetManager.getBundle(t);
if (a) a.load(e, cc.AudioClip, function(t, i) {
if (t) {
cc.error("Failed to load audio clip " + e + ": " + t);
o(0);
} else {
var a = cc.audioEngine.playMusic(i, n);
o(a);
}
}); else {
cc.error("Bundle " + t + " not found");
o(0);
}
} else o(0);
}) : e instanceof cc.AudioClip ? i ? cc.audioEngine.playMusic(e, t) : 0 : void 0;
}
t.playMusic = a;
t.stopEffect = function(e) {
cc.audioEngine.stopEffect(e);
};
function r() {
cc.audioEngine.stopAllEffects();
}
t.stopAllEffects = r;
function s() {
cc.audioEngine.pauseMusic();
}
t.stopMusic = s;
t.stopAll = function() {
cc.audioEngine.stopAll();
};
function l() {
cc.audioEngine.resumeMusic();
}
t.resumeMusic = l;
t.setSoundSwitch = function(e) {
n = e;
e || r();
};
t.setMusicSwitch = function(e, t) {
void 0 === t && (t = !1);
i = e;
if (e) {
t || this.playBgMusic();
l();
} else s();
};
t.getSoundSwitch = function() {
var t, i;
(null === (i = null === (t = e) || void 0 === t ? void 0 : t.gamelobby) || void 0 === i ? void 0 : i.soundSwitch) && (n = e.gamelobby.soundSwitch());
return n;
};
t.getMusicSwitch = function() {
var t, n;
(null === (n = null === (t = e) || void 0 === t ? void 0 : t.gamelobby) || void 0 === n ? void 0 : n.musicSwitch) && (i = e.gamelobby.musicSwitch());
return i;
};
t.playNormal2 = function() {
o("resource/audio/platform_click2", "gl_hall");
};
t.playNormal1 = function() {
o("resource/audio/platform_click1", "gl_hall");
};
t.playBgMusic = function() {
i && a("resource/audio/platform_menubgm", "gl_hall", !0);
};
})(e.Audio || (e.Audio = {}));
})(n || (n = {}));
window.GL = i(i({}, window.GL), n);
cc._RF.pop();
}, {} ],
GLConfigConst: [ function(e, t, n) {
"use strict";
cc._RF.push(t, "57e75vG3V1P8ahqs3+J9UJi", "GLConfigConst");
Object.defineProperty(n, "__esModule", {
value: !0
});
var i;
(function(e) {
e.VERSION = "1.0.6";
})(i || (i = {}));
n.default = i;
cc._RF.pop();
}, {} ],
GLConfigManager: [ function(e, t, n) {
"use strict";
cc._RF.push(t, "5f755fcO3JGPaA7nHuI8Gu2", "GLConfigManager");
var i = this && this.__assign || function() {
return (i = Object.assign || function(e) {
for (var t, n = 1, i = arguments.length; n < i; n++) {
t = arguments[n];
for (var o in t) Object.prototype.hasOwnProperty.call(t, o) && (e[o] = t[o]);
}
return e;
}).apply(this, arguments);
}, o = this && this.__awaiter || function(e, t, n, i) {
return new (n || (n = Promise))(function(o, a) {
function r(e) {
try {
l(i.next(e));
} catch (e) {
a(e);
}
}
function s(e) {
try {
l(i.throw(e));
} catch (e) {
a(e);
}
}
function l(e) {
e.done ? o(e.value) : (t = e.value, t instanceof n ? t : new n(function(e) {
e(t);
})).then(r, s);
var t;
}
l((i = i.apply(e, t || [])).next());
});
}, a = this && this.__generator || function(e, t) {
var n, i, o, a, r = {
label: 0,
sent: function() {
if (1 & o[0]) throw o[1];
return o[1];
},
trys: [],
ops: []
};
return a = {
next: s(0),
throw: s(1),
return: s(2)
}, "function" == typeof Symbol && (a[Symbol.iterator] = function() {
return this;
}), a;
function s(e) {
return function(t) {
return l([ e, t ]);
};
}
function l(a) {
if (n) throw new TypeError("Generator is already executing.");
for (;r; ) try {
if (n = 1, i && (o = 2 & a[0] ? i.return : a[0] ? i.throw || ((o = i.return) && o.call(i), 
0) : i.next) && !(o = o.call(i, a[1])).done) return o;
(i = 0, o) && (a = [ 2 & a[0], o.value ]);
switch (a[0]) {
case 0:
case 1:
o = a;
break;

case 4:
r.label++;
return {
value: a[1],
done: !1
};

case 5:
r.label++;
i = a[1];
a = [ 0 ];
continue;

case 7:
a = r.ops.pop();
r.trys.pop();
continue;

default:
if (!(o = r.trys, o = o.length > 0 && o[o.length - 1]) && (6 === a[0] || 2 === a[0])) {
r = 0;
continue;
}
if (3 === a[0] && (!o || a[1] > o[0] && a[1] < o[3])) {
r.label = a[1];
break;
}
if (6 === a[0] && r.label < o[1]) {
r.label = o[1];
o = a;
break;
}
if (o && r.label < o[2]) {
r.label = o[2];
r.ops.push(a);
break;
}
o[2] && r.ops.pop();
r.trys.pop();
continue;
}
a = t.call(e, r);
} catch (e) {
a = [ 6, e ];
i = 0;
} finally {
n = o = 0;
}
if (5 & a[0]) throw a[1];
return {
value: a[0] ? a[1] : void 0,
done: !0
};
}
}, r = this && this.__read || function(e, t) {
var n = "function" == typeof Symbol && e[Symbol.iterator];
if (!n) return e;
var i, o, a = n.call(e), r = [];
try {
for (;(void 0 === t || t-- > 0) && !(i = a.next()).done; ) r.push(i.value);
} catch (e) {
o = {
error: e
};
} finally {
try {
i && !i.done && (n = a.return) && n.call(a);
} finally {
if (o) throw o.error;
}
}
return r;
}, s = this && this.__spread || function() {
for (var e = [], t = 0; t < arguments.length; t++) e = e.concat(r(arguments[t]));
return e;
};
Object.defineProperty(n, "__esModule", {
value: !0
});
n.GLConfigManager = void 0;
var l, c = e("../GLHallController"), u = e("./GameLobbyKeepCtr"), _ = e("./GlGameLobbySDKVersionCtr");
(function(e) {
e[e.Uninitialize = 0] = "Uninitialize";
e[e.Initializing = 1] = "Initializing";
e[e.Initialized = 2] = "Initialized";
})(l || (l = {}));
var d = function() {
function e() {
this._initializeStatus = l.Uninitialize;
this._config = null;
}
e.getInstance = function() {
null === this.instance && (this.instance = new e());
return this.instance;
};
e.prototype.initialize = function(e) {
void 0 === e && (e = !1);
return o(this, void 0, Promise, function() {
return a(this, function() {
if (this._initializeStatus !== l.Uninitialize && !e) return [ 2 ];
this._initializeStatus = l.Initializing;
try {
this._config = {
games: [ {
name: "数独",
bundle: "gl_sudoku",
cover: ""
}, {
name: "土耳其方块",
bundle: "gl_blockslide",
cover: ""
}, {
name: "井字棋",
bundle: "gl_tictactoe",
cover: ""
}, {
name: "一笔画",
bundle: "gl_oneline",
cover: ""
}, {
name: "麻将",
bundle: "gl_mahjong",
cover: ""
}, {
name: "水排序",
bundle: "gl_watersort",
cover: ""
}, {
name: "合成大西瓜",
bundle: "gl_fruit",
cover: ""
}, {
name: "连连看",
bundle: "gl_onet",
cover: ""
} ]
};
u.default.isOpen() && (this._config = u.default.getKeepGameList());
_.default.getInstance().isOpen() && (this._config = _.default.getInstance().checkIsSupportByConfig(this._config));
this._config.games = this.sortGameList(this._config.games);
this._initializeStatus = l.Initialized;
} catch (e) {
cc.error("GL_ConfigManager initialize error: " + e);
this._initializeStatus = l.Uninitialize;
throw e;
}
return [ 2 ];
});
});
};
e.prototype.getConfig = function() {
if (this._initializeStatus !== l.Initialized) throw new Error("GL_ConfigManager is not initialized");
return this._config;
};
e.prototype.sortGameList = function(e) {
var t = c.default.getInstance().data, n = function() {
var n = e.map(function(e) {
var n, o, a;
return i(i({}, e), {
produceScore: GL.Const.GAME_PRODUCT_SCORE[e.bundle] || 0,
last7DaysTotalTime: (null === (n = null == t ? void 0 : t.last7DaysTotalTime) || void 0 === n ? void 0 : n[e.bundle]) || 0,
recentOpenTime: (null === (o = null == t ? void 0 : t.recentOpenTime) || void 0 === o ? void 0 : o[e.bundle]) || 0,
totalTime: (null === (a = null == t ? void 0 : t.totalTime) || void 0 === a ? void 0 : a[e.bundle]) || 0
});
});
[ {
key: "last7DaysTotalTime",
scoreKey: "last7DaysTimeScore"
}, {
key: "recentOpenTime",
scoreKey: "recentOpenTimeScore"
}, {
key: "totalTime",
scoreKey: "totalTimeScore"
} ].forEach(function(e) {
var t = e.key, i = e.scoreKey;
s(n).sort(function(e, n) {
return n[t] - e[t];
}).forEach(function(e, o) {
var a = 0;
e[t] > 0 && (a = o < GL.Const.GAME_BEHAVIOR_SCORES.length ? GL.Const.GAME_BEHAVIOR_SCORES[o][i] : 0);
n.find(function(t) {
return t.bundle === e.bundle;
})[i] = a;
});
});
n.forEach(function(e) {
e.totalScore = e.produceScore + e.last7DaysTimeScore + e.recentOpenTimeScore + e.totalTimeScore;
});
return n.sort(function(e, t) {
return t.totalScore - e.totalScore;
}).map(function(e) {
return {
name: e.name,
bundle: e.bundle,
cover: e.cover
};
});
}(), o = n.length;
if (o > 5) {
var a = 5 + Math.floor(Math.random() * (o - 5)), r = n[a];
n.splice(a, 1);
n.splice(4, 0, r);
}
return n;
};
e.instance = null;
return e;
}();
n.GLConfigManager = d;
cc._RF.pop();
}, {
"../GLHallController": "GLHallController",
"./GameLobbyKeepCtr": "GameLobbyKeepCtr",
"./GlGameLobbySDKVersionCtr": "GlGameLobbySDKVersionCtr"
} ],
GLConst: [ function(e, t) {
"use strict";
cc._RF.push(t, "4eb0343ottCr4IPscDYoqRE", "GLConst");
var n, i = this && this.__assign || function() {
return (i = Object.assign || function(e) {
for (var t, n = 1, i = arguments.length; n < i; n++) {
t = arguments[n];
for (var o in t) Object.prototype.hasOwnProperty.call(t, o) && (e[o] = t[o]);
}
return e;
}).apply(this, arguments);
};
(function(e) {
(function(e) {
e.HALL_BUNDLE_NAME = "gl_hall";
e.GAME_PRODUCT_SCORE = {
gl_oneline: 100,
gl_tictactoe: 99,
gl_fruit: 98,
HsBlock: 97,
HsSeaBattle: 96,
gl_watersort: 95,
gl_onet: 94,
gl_mahjong: 93,
HsLudo: 92,
Hs2048: 91,
Hs4InARow: 90,
gl_sudoku: 89,
HsSolitaire: 88,
gl_blockslide: 91.5
};
e.gameMainPrefabName = {
gl_oneline: "GameRes/scenes/glOnelinePrefab",
gl_tictactoe: "scene/glTictactoePrefab",
gl_fruit: "assets/scenes/gl_fruit",
HsBlock: 97,
HsSeaBattle: 96,
gl_watersort: "scene/glWatersort",
gl_onet: "scene/glOnet",
gl_mahjong: "assets/scenes/glMahjongPrefab",
HsLudo: 92,
Hs2048: 91,
Hs4InARow: 90,
gl_sudoku: "glSudoku",
HsSolitaire: 88,
gl_blockslide: 91.5
};
e.GAME_BEHAVIOR_SCORES = [ {
rank: 1,
last7DaysTimeScore: 50,
recentOpenTimeScore: 30,
totalTimeScore: 20
}, {
rank: 2,
last7DaysTimeScore: 40,
recentOpenTimeScore: 25,
totalTimeScore: 18
}, {
rank: 3,
last7DaysTimeScore: 30,
recentOpenTimeScore: 20,
totalTimeScore: 16
}, {
rank: 4,
last7DaysTimeScore: 20,
recentOpenTimeScore: 10,
totalTimeScore: 14
}, {
rank: 5,
last7DaysTimeScore: 15,
recentOpenTimeScore: 8,
totalTimeScore: 12
}, {
rank: 6,
last7DaysTimeScore: 10,
recentOpenTimeScore: 7,
totalTimeScore: 10
}, {
rank: 7,
last7DaysTimeScore: 8,
recentOpenTimeScore: 6,
totalTimeScore: 8
}, {
rank: 8,
last7DaysTimeScore: 5,
recentOpenTimeScore: 5,
totalTimeScore: 6
}, {
rank: 9,
last7DaysTimeScore: 3,
recentOpenTimeScore: 3,
totalTimeScore: 4
}, {
rank: 10,
last7DaysTimeScore: 1,
recentOpenTimeScore: 1,
totalTimeScore: 2
} ];
(function(e) {
e[e.FromGameMain = 1] = "FromGameMain";
e[e.FromGameResult = 2] = "FromGameResult";
})(e.ExitGameType || (e.ExitGameType = {}));
})(e.Const || (e.Const = {}));
})(n || (n = {}));
window.GL = i(i({}, window.GL), n);
cc._RF.pop();
}, {} ],
GLGameAdStrategyOptimizeTraitCtrl: [ function(e, t, n) {
"use strict";
cc._RF.push(t, "5459bEZ/wtGka0obBBzpjF3", "GLGameAdStrategyOptimizeTraitCtrl");
Object.defineProperty(n, "__esModule", {
value: !0
});
var i;
(function(e) {
e[e.mode1 = 1] = "mode1";
e[e.mode2 = 2] = "mode2";
e[e.mode3 = 3] = "mode3";
})(i || (i = {}));
var o = function() {
function e() {}
e.prototype.init = function(e) {
if (!(null == e || e.length < 4)) {
this.anyAdCD = e[0];
this.gameKeepTime = e[1];
this.insertAdCD = e[2];
this.firstInsertMinLevel = e[3];
}
};
return e;
}(), a = function() {
function e() {
this._featureName = "GLGameAdStrategyOptimize";
this.hasInit = !1;
this.curGame = "";
this.mode = 0;
this.totalGameTime = 0;
this.totalGameTimeConfig = 0;
this.gameKeepTime = 0;
this.startInsertMinTimeConfig = 0;
this.anyAdCD = -1;
this.anyAdCDConfig = 0;
this.insertAdCD = -1;
this.insertAdCDConfig = 0;
this.gameConfig = new Map();
this.lastSaveTime = 0;
}
e.getInstance = function() {
null == this._instance && (this._instance = new e());
return this._instance;
};
e.prototype.isOpen = function() {
return GL.Game.IsFeatureOpen(this._featureName);
};
e.prototype.init = function() {
if (!this.hasInit) {
console.log("【" + this._featureName + "】init");
this.initConfig();
this.checkMode() && this.loadData();
}
};
e.prototype.checkMode = function() {
return this.mode == i.mode1 || this.mode == i.mode2 || this.mode == i.mode3;
};
e.prototype.initConfig = function() {
this.mode = GL.Game.getFeatureKeyParam(this._featureName, "mode") || 0;
if (this.mode == i.mode1) {
var e = Object.keys(GL.Game.game_subtype);
console.log("【" + this._featureName + "】game list:=", e);
this.gameConfig.clear();
for (var t = 0; t < e.length; t++) {
var n = e[t], a = GL.Game.getFeatureKeyParam(this._featureName, n);
if (a && Array.isArray(a) && 4 == a.length) {
var r = new o();
r.init(a);
this.gameConfig.set(n, r);
}
}
console.log("【" + this._featureName + "】game config:=", this.gameConfig);
} else if (this.mode == i.mode2) {
this.totalGameTimeConfig = GL.Game.getFeatureKeyParam(this._featureName, "totalGameTime") || 0;
this.startInsertMinTimeConfig = GL.Game.getFeatureKeyParam(this._featureName, "startInsertMinTime") || 0;
this.anyAdCDConfig = GL.Game.getFeatureKeyParam(this._featureName, "anyAdCD") || 0;
this.insertAdCDConfig = GL.Game.getFeatureKeyParam(this._featureName, "insertAdCD") || 0;
}
this.hasInit = !0;
};
e.prototype.loadData = function() {
if (this.mode == i.mode1) {
var e = cc.sys.localStorage.getItem(this._featureName + "Data");
if (null != e && "" == e) {
var t = JSON.parse(e);
if (null != t) {
null != t.anyAdCD && (this.anyAdCD = t.anyAdCD);
null != t.insertAdCD && (this.insertAdCD = t.insertAdCD);
}
}
}
};
e.prototype.saveData = function() {
cc.sys.localStorage.setItem(this._featureName + "Data", JSON.stringify({
anyAdCD: this.anyAdCD,
insertAdCD: this.insertAdCD
}));
};
e.prototype.checkNeedLimitAdTimeControl = function() {
return this.mode == i.mode2;
};
e.prototype.checkIsMode1 = function() {
return this.mode == i.mode1;
};
e.prototype.checkIsMode3 = function() {
return this.mode == i.mode3;
};
e.prototype.checkSkipGameOrigAdCD = function(e) {
return this.mode == i.mode2 || this.mode == i.mode1 && this.gameConfig.has(e);
};
e.prototype.checkCanPlayAd = function(e) {
void 0 === e && (e = 1);
var t = !0;
if (this.mode == i.mode1) {
if (null != this.curGame && null != this.gameConfig && this.gameConfig.has(this.curGame)) {
var n = this.gameConfig.get(this.curGame);
console.log("【" + this._featureName + "】checkCanPlayAd ==content:", this.curGame, n.anyAdCD, n.insertAdCD, this.anyAdCD, this.insertAdCD);
if ("gl_fruit" == this.curGame || "gl_oneline" == this.curGame) {
if ("gl_oneline" == this.curGame && this.gameKeepTime < n.gameKeepTime) {
console.log("【" + this._featureName + "】checkCanPlayAd ==进入游戏在线时长不足:", this.gameKeepTime, n.gameKeepTime);
t = !1;
} else if (n.anyAdCD > 0) if (this.anyAdCD >= 0) if (this.anyAdCD >= n.anyAdCD) t = !0; else {
console.log("【" + this._featureName + "】checkCanPlayAd ==任意广告cd没有结束:", this.anyAdCD, n.anyAdCD);
t = !1;
} else t = !0; else if (n.insertAdCD > 0) if (this.insertAdCD >= 0) if (this.insertAdCD >= n.insertAdCD) t = !0; else {
console.log("【" + this._featureName + "】checkCanPlayAd ==插屏广告cd没有结束:", this.insertAdCD, n.insertAdCD);
t = !1;
} else t = !0;
} else if ("gl_onet" == this.curGame || "gl_mahjong" == this.curGame) if (e >= n.firstInsertMinLevel) if (this.insertAdCD < 0 || this.insertAdCD >= n.insertAdCD) t = !0; else {
console.log("【" + this._featureName + "】checkCanPlayAd ==插屏广告cd没有结束:", this.insertAdCD, n.insertAdCD);
t = !1;
} else {
console.log("【" + this._featureName + "】checkCanPlayAd ==没有达到最低关卡数:", e, n.firstInsertMinLevel);
t = !1;
} else if ("gl_watersort" == this.curGame) if (this.insertAdCD >= 0) if (this.insertAdCD >= n.insertAdCD) t = !0; else {
console.log("【" + this._featureName + "】checkCanPlayAd ==插屏广告cd没有结束:", this.insertAdCD, n.insertAdCD);
t = !1;
} else t = !0;
}
} else if (this.mode == i.mode2) if (this.totalGameTimeConfig > 0) if (this.totalGameTime >= this.totalGameTimeConfig) t = !0; else {
console.log("【" + this._featureName + "】checkCanPlayAd ==累计小游戏游戏时间未达标:", this.totalGameTime, this.totalGameTimeConfig);
t = !1;
} else if (this.anyAdCDConfig > 0) if (this.anyAdCD >= 0) if (this.anyAdCD >= this.anyAdCDConfig) t = !0; else {
console.log("【" + this._featureName + "】checkCanPlayAd ==任意广告cd没有结束:", this.anyAdCD, this.anyAdCDConfig);
t = !1;
} else if (this.totalGameTime >= this.startInsertMinTimeConfig) t = !0; else {
console.log("【" + this._featureName + "】checkCanPlayAd ==小游戏游玩时长未达标:", this.totalGameTime, this.startInsertMinTimeConfig);
t = !1;
} else if (this.insertAdCDConfig > 0) if (this.insertAdCD >= 0) if (this.insertAdCD >= this.insertAdCDConfig) t = !0; else {
console.log("【" + this._featureName + "】checkCanPlayAd ==插屏广告cd没有结束:", this.insertAdCD, this.insertAdCDConfig);
t = !1;
} else if (this.totalGameTime >= this.startInsertMinTimeConfig) t = !0; else {
console.log("【" + this._featureName + "】checkCanPlayAd ==小游戏游玩时长未达标:", this.totalGameTime, this.startInsertMinTimeConfig);
t = !1;
}
console.log("【" + this._featureName + "】checkCanPlayAd:", t, e, this.mode);
return t;
};
e.prototype.onAdPlayComplete = function(e) {
console.log("【" + this._featureName + "】onAdPlayComplete ==广告类型:", e ? "激励" : "插屏");
this.anyAdCD = 0;
e || (this.insertAdCD = 0);
this.mode == i.mode2 && this.totalGameTimeConfig > 0 && (this.totalGameTime = this.totalGameTime % this.totalGameTimeConfig);
this.mode == i.mode1 && this.saveData();
};
e.prototype.onEnterGame = function(e) {
this.gameKeepTime = 0;
this.curGame = e;
};
e.prototype.onExitGame = function() {
this.curGame = "";
};
e.prototype.updateTime = function(e) {
if (this.curGame && "" != this.curGame && this.checkMode()) {
this.totalGameTime += e;
this.gameKeepTime += e;
this.anyAdCD >= 0 && (this.anyAdCD += e);
this.insertAdCD >= 0 && (this.insertAdCD += e);
if (this.mode == i.mode1 && this.totalGameTime - this.lastSaveTime > 2) {
this.lastSaveTime = this.totalGameTime;
this.saveData();
}
}
};
e._instance = null;
return e;
}();
n.default = a;
cc._RF.pop();
}, {} ],
GLGameItem: [ function(e, t, n) {
"use strict";
cc._RF.push(t, "b6ca0P1/ANNkKk6v1zQK776", "GLGameItem");
var i, o = this && this.__extends || (i = function(e, t) {
return (i = Object.setPrototypeOf || {
__proto__: []
} instanceof Array && function(e, t) {
e.__proto__ = t;
} || function(e, t) {
for (var n in t) Object.prototype.hasOwnProperty.call(t, n) && (e[n] = t[n]);
})(e, t);
}, function(e, t) {
i(e, t);
function n() {
this.constructor = e;
}
e.prototype = null === t ? Object.create(t) : (n.prototype = t.prototype, new n());
}), a = this && this.__decorate || function(e, t, n, i) {
var o, a = arguments.length, r = a < 3 ? t : null === i ? i = Object.getOwnPropertyDescriptor(t, n) : i;
if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) r = Reflect.decorate(e, t, n, i); else for (var s = e.length - 1; s >= 0; s--) (o = e[s]) && (r = (a < 3 ? o(r) : a > 3 ? o(t, n, r) : o(t, n)) || r);
return a > 3 && r && Object.defineProperty(t, n, r), r;
};
Object.defineProperty(n, "__esModule", {
value: !0
});
var r = e("../../core/utils/GlRoundBox"), s = e("../../func/GLHallUICtrl"), l = cc._decorator, c = l.ccclass, u = l.property, _ = function(e) {
o(t, e);
function t() {
var t = null !== e && e.apply(this, arguments) || this;
t.cover = null;
t.mask = null;
t.titleIcon = null;
t.touchY = -15;
t._configColor = {
gl_sudoku: {
maskColor: [ 64, 98, 168, 255 ]
},
gl_blockslide: {
maskColor: [ 36, 45, 100, 255 ]
},
gl_tictactoe: {
maskColor: [ 70, 123, 152, 255 ]
},
gl_oneline: {
maskColor: [ 58, 57, 57, 255 ]
},
gl_mahjong: {
maskColor: [ 38, 69, 102, 255 ]
},
gl_watersort: {
maskColor: [ 99, 69, 167, 255 ]
},
gl_fruit: {
maskColor: [ 164, 88, 58, 255 ]
},
gl_onet: {
maskColor: [ 103, 56, 66, 255 ]
}
};
t._currentGameInfo = null;
return t;
}
t.prototype.onLoad = function() {
this.node.on(cc.Node.EventType.TOUCH_START, this._onTouchBegan, this);
this.node.on(cc.Node.EventType.TOUCH_END, this._onTouchEnded, this);
this.node.on(cc.Node.EventType.TOUCH_CANCEL, this._onTouchCancel, this);
};
t.prototype.onDestroy = function() {
this.node.off(cc.Node.EventType.TOUCH_START, this._onTouchBegan, this);
this.node.off(cc.Node.EventType.TOUCH_END, this._onTouchEnded, this);
this.node.off(cc.Node.EventType.TOUCH_CANCEL, this._onTouchCancel, this);
};
t.prototype._onTouchBegan = function() {
GL.Audio.playNormal1();
this.cover.node.y = this.touchY;
this.titleIcon && (this.titleIcon.node.y = 210);
};
t.prototype._onTouchEnded = function() {
console.log("_onTouchEnded");
this.cover.node.y = 0;
this.titleIcon && (this.titleIcon.node.y = 225);
};
t.prototype._onTouchCancel = function() {
console.log("_onTouchCancel");
this.cover.node.y = 0;
this.titleIcon && (this.titleIcon.node.y = 225);
};
t.prototype.onClick = function() {
var e = this._currentGameInfo;
e && e.bundle && this.node.emit("enter", e.bundle);
};
t.prototype.setGameInfo = function(e) {
var t = this;
this._currentGameInfo = e;
var n = e.cover, i = this._configColor[e.bundle].maskColor;
if (n && "" != n) cc.assetManager.loadRemote(n, function(e, o) {
var a;
if ((null === (a = t._currentGameInfo) || void 0 === a ? void 0 : a.cover) === n) if (e) cc.error("GL_GameItem load cover error: " + e); else {
t.cover.spriteFrame = new cc.SpriteFrame(o);
t.mask.color = new cc.Color(i[0], i[1], i[2], i[3]);
}
}); else {
var o = cc.assetManager.getBundle("gl_hall");
if (o) {
if (s.default.isOpen()) {
o.load("resource/hallres/icon/" + e.bundle + "2", cc.SpriteFrame, function(e, n) {
e ? console.log("加载资源失败", e) : t.cover && t.cover.isValid && (t.cover.spriteFrame = n);
});
i = s.default.getMaskColor()[e.bundle].maskColor;
this.mask.color = new cc.Color(i[0], i[1], i[2], i[3]);
} else {
o.load("resource/hallres/icon/" + e.bundle, cc.SpriteFrame, function(e, n) {
e ? console.log("加载资源失败", e) : t.cover && t.cover.isValid && (t.cover.spriteFrame = n);
});
this.mask.color = new cc.Color(i[0], i[1], i[2], i[3]);
}
o.load("resource/hallres/icon/" + e.bundle + "_title", cc.SpriteFrame, function(e, n) {
e ? console.log("加载资源失败", e) : t.titleIcon && t.titleIcon.isValid && (t.titleIcon.spriteFrame = n);
});
}
}
};
a([ u(r.default) ], t.prototype, "cover", void 0);
a([ u(cc.Node) ], t.prototype, "mask", void 0);
a([ u(cc.Sprite) ], t.prototype, "titleIcon", void 0);
return a([ c ], t);
}(cc.Component);
n.default = _;
cc._RF.pop();
}, {
"../../core/utils/GlRoundBox": "GlRoundBox",
"../../func/GLHallUICtrl": "GLHallUICtrl"
} ],
GLGame: [ function(e, t, n) {
"use strict";
cc._RF.push(t, "6e218cP3eBMXJq/j01UdO/B", "GLGame");
var i = this && this.__assign || function() {
return (i = Object.assign || function(e) {
for (var t, n = 1, i = arguments.length; n < i; n++) {
t = arguments[n];
for (var o in t) Object.prototype.hasOwnProperty.call(t, o) && (e[o] = t[o]);
}
return e;
}).apply(this, arguments);
}, o = this && this.__awaiter || function(e, t, n, i) {
return new (n || (n = Promise))(function(o, a) {
function r(e) {
try {
l(i.next(e));
} catch (e) {
a(e);
}
}
function s(e) {
try {
l(i.throw(e));
} catch (e) {
a(e);
}
}
function l(e) {
e.done ? o(e.value) : (t = e.value, t instanceof n ? t : new n(function(e) {
e(t);
})).then(r, s);
var t;
}
l((i = i.apply(e, t || [])).next());
});
}, a = this && this.__generator || function(e, t) {
var n, i, o, a, r = {
label: 0,
sent: function() {
if (1 & o[0]) throw o[1];
return o[1];
},
trys: [],
ops: []
};
return a = {
next: s(0),
throw: s(1),
return: s(2)
}, "function" == typeof Symbol && (a[Symbol.iterator] = function() {
return this;
}), a;
function s(e) {
return function(t) {
return l([ e, t ]);
};
}
function l(a) {
if (n) throw new TypeError("Generator is already executing.");
for (;r; ) try {
if (n = 1, i && (o = 2 & a[0] ? i.return : a[0] ? i.throw || ((o = i.return) && o.call(i), 
0) : i.next) && !(o = o.call(i, a[1])).done) return o;
(i = 0, o) && (a = [ 2 & a[0], o.value ]);
switch (a[0]) {
case 0:
case 1:
o = a;
break;

case 4:
r.label++;
return {
value: a[1],
done: !1
};

case 5:
r.label++;
i = a[1];
a = [ 0 ];
continue;

case 7:
a = r.ops.pop();
r.trys.pop();
continue;

default:
if (!(o = r.trys, o = o.length > 0 && o[o.length - 1]) && (6 === a[0] || 2 === a[0])) {
r = 0;
continue;
}
if (3 === a[0] && (!o || a[1] > o[0] && a[1] < o[3])) {
r.label = a[1];
break;
}
if (6 === a[0] && r.label < o[1]) {
r.label = o[1];
o = a;
break;
}
if (o && r.label < o[2]) {
r.label = o[2];
r.ops.push(a);
break;
}
o[2] && r.ops.pop();
r.trys.pop();
continue;
}
a = t.call(e, r);
} catch (e) {
a = [ 6, e ];
i = 0;
} finally {
n = o = 0;
}
if (5 & a[0]) throw a[1];
return {
value: a[0] ? a[1] : void 0,
done: !0
};
}
}, r = this && this.__read || function(e, t) {
var n = "function" == typeof Symbol && e[Symbol.iterator];
if (!n) return e;
var i, o, a = n.call(e), r = [];
try {
for (;(void 0 === t || t-- > 0) && !(i = a.next()).done; ) r.push(i.value);
} catch (e) {
o = {
error: e
};
} finally {
try {
i && !i.done && (n = a.return) && n.call(a);
} finally {
if (o) throw o.error;
}
}
return r;
}, s = this && this.__spread || function() {
for (var e = [], t = 0; t < arguments.length; t++) e = e.concat(r(arguments[t]));
return e;
};
Object.defineProperty(n, "__esModule", {
value: !0
});
var l, c = e("../../hall/GLHallController"), u = e("../../../gl_miniGameQuitGameConfirm/scripts/MiniGameQuitGameConfirm");
(function(e) {
(function(e) {
var t, n, i = new cc.EventTarget(), r = null;
(function(e) {
e.MAIN_EVENT_NAME = "gameLobby_Event";
(function(e) {
e[e.SettingUpdate = 1] = "SettingUpdate";
e[e.EnterGame = 2] = "EnterGame";
e[e.ExitToGameLobby = 3] = "ExitToGameLobby";
e[e.rewardsAdCall = 4] = "rewardsAdCall";
e[e.EnterMiniGame = 5] = "EnterMiniGame";
e[e.InterstAdCall = 6] = "InterstAdCall";
e[e.GetMiniGameList = 7] = "GetMiniGameList";
})(e.EventType || (e.EventType = {}));
(function(e) {
e[e.Main = 0] = "Main";
e[e.Lobby = 1] = "Lobby";
})(e.EventSource || (e.EventSource = {}));
})(t = e.MainEvent || (e.MainEvent = {}));
(function(e) {
e.ShowPopup = "ShowPopup";
e.HidePopup = "HidePopup";
e.BeforeGameEnter = "BeforeGameEnter";
e.AfterGameEnter = "GameEnter";
e.BeforeGameExit = "BeforeGameExit";
e.AfterGameExit = "GameExit";
e.GetSortList = "GetSortList";
e.EnterMiniGame = "EnterMiniGame";
e.ExitMiniGame = "ExitMiniGame";
})(n = e.GameEventType || (e.GameEventType = {}));
e.GameOn = function(e, t, n) {
i.on(e, t, n);
};
e.GameOff = function(e, t, n) {
i.off(e, t, n);
};
function l(e) {
for (var t = [], n = 1; n < arguments.length; n++) t[n - 1] = arguments[n];
i.emit.apply(i, s([ e ], t));
}
e.GameEmit = l;
e.MainOn = function(e, n) {
cc.systemEvent.on(t.MAIN_EVENT_NAME, e, n);
};
e.MainOff = function(e, n) {
cc.systemEvent.off(t.MAIN_EVENT_NAME, e, n);
};
e.MainEmit = function(e) {
cc.systemEvent.emit(t.MAIN_EVENT_NAME, e);
};
e.Exit = function() {
return o(this, void 0, Promise, function() {
var e;
return a(this, function() {
e = cc.director.getScene();
l(n.BeforeGameExit, r, e);
l(n.ExitMiniGame, r);
l(n.AfterGameExit, r);
return [ 2 ];
});
});
};
e.ExitFromPopup = function() {
return o(this, void 0, Promise, function() {
var e;
return a(this, function() {
e = cc.director.getScene();
l(n.BeforeGameExit, r, e);
return [ 2 ];
});
});
};
e.ExitToStartGameScene = function() {
return o(this, void 0, Promise, function() {
var e;
return a(this, function() {
e = cc.director.getScene();
l(n.BeforeGameExit, r, e);
cc.director.loadScene("StartGameScene2");
l(n.AfterGameExit, r);
return [ 2 ];
});
});
};
e.Enter = function(e) {
return o(this, void 0, Promise, function() {
return a(this, function(t) {
switch (t.label) {
case 0:
l(n.BeforeGameEnter, e);
if (r != e && null != r) {
l(n.ExitMiniGame, r);
r = null;
}
return [ 4, (i = e, o = new Promise(function(e, t) {
h(i).then(function(n) {
if (n) {
window["" + i] = n;
e(n);
} else {
cc.error("enterGame error: bundle " + i + " not found");
t(new Error("Bundle not found"));
}
}).catch(function(e) {
return t(e);
});
}), o) ];

case 1:
t.sent();
return [ 2 ];
}
var i, o;
});
});
};
e.EnterGame = function(e) {
r = e;
l(n.AfterGameEnter, e);
};
e.GetCurrentGameKey = function() {
return r;
};
e.GetCurrentBundle = function() {
return cc.assetManager.getBundle(r);
};
function _(e, t) {
var n, i, o = window.GL, a = "minigame";
if (null === (n = null == o ? void 0 : o.gamelobby) || void 0 === n ? void 0 : n.isChapterFusionMode()) {
a = "travel";
var r = null === (i = o.gamelobby) || void 0 === i ? void 0 : i.getStorageValue("ChapterMiniGameFusionEntrance", "");
r && "" != r && (t.sub_entrance = r);
}
t.entrance = a;
cc.systemEvent.emit("gameLobby_submit", {
eventType: e,
data: t
});
}
e.sendGameData = _;
e.game_subtype = {
gl_oneline: 2,
gl_tictactoe: 6,
gl_fruit: 5,
gl_watersort: 1,
gl_onet: 4,
gl_mahjong: 3,
gl_sudoku: 7,
gl_blockslide: 8
};
var d = [ "gl_oneline", "gl_tictactoe", "gl_fruit", "gl_watersort", "gl_onet", "gl_mahjong", "gl_sudoku" ];
function h(t) {
return new Promise(function(n, i) {
var o, a = cc.assetManager.getBundle(t);
if (a) {
var r = cc.assetManager.downloader.bundleVers[t], s = r ? "" + r : null;
if (s) {
console.log("远端测试加载地址======本次bundle对应的md5信息", s);
if (cc.sys.localStorage.getItem(t) != s) {
console.log("远端测试加载地址======bundle对应的md5信息不一致,需要更新md5信息", s);
p(a).then(function() {
console.log("加载bundle[" + t + "]所有资源成功: " + t);
cc.sys.localStorage.setItem(t, s);
_("moregame_game_download_success", {
game_subtype: e.game_subtype[t]
});
f() && _("all_moregame_download_success", {});
n(a);
}).catch(function(e) {
console.error("加载bundle[" + t + "]所有资源失败: " + e);
i(a);
});
} else {
console.log("远端测试加载地址======bundle对应的md5信息一致,不需要下载资源");
n(a);
}
} else {
console.log("远端测试加载地址======没有md5信息");
n(a);
}
} else {
var l = t, c = window.GL;
if (null === (o = null == c ? void 0 : c.gamelobby) || void 0 === o ? void 0 : o.getRemoteBundleBaseUrl) {
l = c.gamelobby.getRemoteBundleBaseUrl(t);
console.log("🍎🍎🍎 miniGame==远端加载地址==bundlePath=>", l);
}
cc.assetManager.loadBundle(l, function(o, a) {
if (o) {
console.error("GL_Bundle get error: " + o);
i(o);
} else {
var r = cc.assetManager.downloader.bundleVers[t], s = r ? "" + r : null;
if (s) {
console.log("远端测试加载地址======本次bundle对应的md5信息", s);
if (cc.sys.localStorage.getItem(t) != s) {
console.log("远端测试加载地址======bundle对应的md5信息不一致,需要更新md5信息", s);
p(a).then(function() {
console.log("加载bundle[" + t + "]所有资源成功: " + t);
cc.sys.localStorage.setItem(t, s);
_("moregame_game_download_success", {
game_subtype: e.game_subtype[t]
});
f() && _("all_moregame_download_success", {});
n(a);
}).catch(function(e) {
console.error("加载bundle[" + t + "]所有资源失败: " + e);
i(a);
});
} else {
console.log("远端测试加载地址======bundle对应的md5信息一致,不需要下载资源");
n(a);
}
} else {
console.log("远端测试加载地址======没有md5信息");
n(a);
}
}
});
}
});
}
function f() {
for (var e = d, t = 0; t < e.length; t++) {
var n = e[t], i = cc.assetManager.downloader.bundleVers[n], o = i ? "" + i : null;
if (!o) return !1;
if (cc.sys.localStorage.getItem(n) != o) return !1;
}
return !0;
}
function p(e) {
return new Promise(function(t, n) {
var i = [];
i.push(g(e, ""));
Promise.all(i).then(function() {
return t();
}).catch(function(e) {
return n(e);
});
});
}
e.loadAsset = function(e, t) {
return new Promise(function(n, i) {
var o = e.get(t);
if (o) return n(o);
e.load(t, function(e, o) {
if (e) {
console.warn("加载资源失败 [" + t + "]: " + e);
i(e);
} else {
console.log("单个加载资源成功: " + t);
n(o);
}
});
});
};
function g(e, t) {
return new Promise(function(n, i) {
e.preloadDir(t, function(e, o) {
if (e) {
console.warn("加载资源失败 [" + t + "]: " + e);
i(e);
} else {
console.log("文件夹加载资源成功: " + o);
n(o);
}
});
});
}
e.AdpterCanvas = function() {
var e = cc.view.getVisibleSize();
if (e.height / e.width >= 1334 / 750) {
(t = cc.Canvas.instance).fitHeight = !1;
t.fitWidth = !0;
} else if (e.height / e.width < 1334 / 750) {
var t;
(t = cc.Canvas.instance).fitHeight = !0;
t.fitWidth = !1;
}
};
function m() {
var e = cc.view.getFrameSize(), t = cc.view.getVisibleSize();
if (!e || e.width / e.height > 760 / 1334) return 0;
var n = !1;
cc.sys.os != cc.sys.OS_IOS && cc.sys.os != cc.sys.OS_ANDROID || (e ? n = e.height / e.width > 1280 / 716 : t && (n = t.height / t.width > 1280 / 716));
return n ? cc.sys.os == cc.sys.OS_IOS ? .037 * (e.height > t.height ? e.height : t.height) : cc.sys.os == cc.sys.OS_ANDROID ? .037 * e.height : 0 : 0;
}
e.GetBangleScreenTopOffset = m;
e.AdpterBangleScreen = function(e) {
var t = null == e ? void 0 : e.getComponent(cc.Widget);
if (t) {
var n = m();
n <= 0 || (t.top = n + t.top);
}
};
e.openSettingView = function(e) {
var t;
e || (e = c.default.getInstance().getSceneParentNode());
var n = "gl_hall", i = window.GL;
(null === (t = null == i ? void 0 : i.gamelobby) || void 0 === t ? void 0 : t.getRemoteBundleBaseUrl) && (n = i.gamelobby.getRemoteBundleBaseUrl(n));
cc.assetManager.loadBundle(n, function(t, n) {
t ? cc.error("[ResultTool] Failed to load bundle [gl_hall]:", t) : n.load("gl_set/pefabs/gl_settingView", function(t, n) {
if (t) cc.log("Prefab error:" + t); else if (n instanceof cc.Prefab) {
var i = cc.instantiate(n);
cc.isValid(i) && cc.isValid(e) && (i.parent = e);
} else cc.log("Prefab error");
});
});
};
e.openMiniGameQuitGameConfirm = function(e, t) {
var n, i, o;
e || (e = (null === (n = window.hs) || void 0 === n ? void 0 : n.tipLayer) || c.default.getInstance().getSceneParentNode());
if (null != e && e.getComponentInChildren(u.default)) {
var a = null === (i = null == e ? void 0 : e.getComponentInChildren(u.default)) || void 0 === i ? void 0 : i.node;
null == a || a.parent.removeChild(a);
null == a || a.destroy();
} else {
var r = "gl_hall", s = window.GL;
(null === (o = null == s ? void 0 : s.gamelobby) || void 0 === o ? void 0 : o.getRemoteBundleBaseUrl) && (r = s.gamelobby.getRemoteBundleBaseUrl(r));
cc.assetManager.loadBundle(r, function(n, i) {
n ? cc.error("[ResultTool] Failed to load bundle [gl_hall]:", n) : i.load("gl_miniGameQuitGameConfirm/prefabs/MiniGameQuitGameConfirm", function(n, i) {
if (n) cc.log("Prefab error:" + n); else if (i instanceof cc.Prefab) {
if (null == e || !e.getComponentInChildren(u.default)) {
var o = cc.instantiate(i);
o.parent = e;
var a = o.getComponent(u.default);
null == a || a.setOnConfirmQuitCallback(t);
}
} else cc.log("Prefab error");
});
});
}
};
function G(e) {
var t = !1;
cc.systemEvent.emit("gameLobby_featureConfig", {
eventType: "IsFeatureOpen",
call: function(e) {
t = e;
},
data: {
feature: e
}
});
return t;
}
e.IsFeatureOpen = G;
e.resLoaderLoadBundle = function(e, t) {
void 0 === t && (t = !0);
return new Promise(function(n) {
cc.systemEvent.emit("gameLobby_resLoader", {
eventType: "moregame_res_loader_load_bundle",
call: function(i, o) {
if (i) {
console.error("Blade:加载bundle失败:bundleName:" + e + " isRemote:" + t + " error:" + JSON.stringify(i));
n(null);
} else {
console.log("Blade:加载bundle成功:bundleName:" + e + " isRemote:" + t);
n(o);
}
},
data: {
isRemote: t,
bundleName: e
}
});
});
};
e.IsPopupTwiceCheckOpen = function() {
return G(e.PopupTwiceCheck);
};
e.PopupTwiceCheck = "PopupTwiceCheck";
e.PopupTwiceCheckStorageKey = "PopupTwiceCheckStorageKey";
e.GetPopupTwiceCheck = function() {
var t = cc.sys.localStorage.getItem(e.PopupTwiceCheckStorageKey);
return null != t && 0 != t;
};
e.SetPopupTwiceCheck = function(t) {
cc.sys.localStorage.setItem(e.PopupTwiceCheckStorageKey, t ? 1 : 0);
};
e.getFeatureKeyParam = function(e, t) {
var n = null;
cc.systemEvent.emit("gameLobby_featureConfig", {
eventType: "getFeatureKeyParam",
call: function(t) {
console.log("接收到特性配置" + e, t);
n = t;
},
data: {
feature: e,
key: t
}
});
return n;
};
e.getFeatureValue = function(e) {
var t = null;
cc.systemEvent.emit("gameLobby_featureConfig", {
eventType: "getFeatureValue",
call: function(n) {
console.log("接收到特性配置Value" + e, n);
t = n;
},
data: {
feature: e
}
});
return t;
};
e.get6205GameState = function() {
var e = !1;
cc.systemEvent.emit("gameLobby_get6205GameState", {
eventType: "get6205GameState",
call: function(t) {
console.log("接收到6205游戏状态", t);
e = t;
}
});
return e;
};
function L(e) {
var t;
if (!e) return !1;
e.endsWith("Trait") || (e += "Trait");
var n = window.GL;
return !!(null === (t = null == n ? void 0 : n.gamelobby) || void 0 === t ? void 0 : t.isTraitActive(e));
}
e.isTraitActive = L;
e.shakeByProp = function(e, t) {
var n, i;
if (L(e)) {
var o = window.GL;
null === (n = null == o ? void 0 : o.gamelobby) || void 0 === n || n.shakeByPropGp(null === (i = null == o ? void 0 : o.Game) || void 0 === i ? void 0 : i.getFeatureKeyParam(e, t));
}
};
e.shakeAmplitudeByProp = function(e, t) {
var n, i;
if (L(e)) {
var o = window.GL;
null === (n = null == o ? void 0 : o.gamelobby) || void 0 === n || n.shakeAmplitudeByProp(null === (i = null == o ? void 0 : o.Game) || void 0 === i ? void 0 : i.getFeatureKeyParam(e, t));
}
};
})(e.Game || (e.Game = {}));
})(l || (l = {}));
window.GL = i(i({}, window.GL), l);
cc._RF.pop();
}, {
"../../../gl_miniGameQuitGameConfirm/scripts/MiniGameQuitGameConfirm": "MiniGameQuitGameConfirm",
"../../hall/GLHallController": "GLHallController"
} ],
GLHallController: [ function(e, t, n) {
"use strict";
cc._RF.push(t, "20cafWuJkZF250KRCu+yv34", "GLHallController");
var i = this && this.__awaiter || function(e, t, n, i) {
return new (n || (n = Promise))(function(o, a) {
function r(e) {
try {
l(i.next(e));
} catch (e) {
a(e);
}
}
function s(e) {
try {
l(i.throw(e));
} catch (e) {
a(e);
}
}
function l(e) {
e.done ? o(e.value) : (t = e.value, t instanceof n ? t : new n(function(e) {
e(t);
})).then(r, s);
var t;
}
l((i = i.apply(e, t || [])).next());
});
}, o = this && this.__generator || function(e, t) {
var n, i, o, a, r = {
label: 0,
sent: function() {
if (1 & o[0]) throw o[1];
return o[1];
},
trys: [],
ops: []
};
return a = {
next: s(0),
throw: s(1),
return: s(2)
}, "function" == typeof Symbol && (a[Symbol.iterator] = function() {
return this;
}), a;
function s(e) {
return function(t) {
return l([ e, t ]);
};
}
function l(a) {
if (n) throw new TypeError("Generator is already executing.");
for (;r; ) try {
if (n = 1, i && (o = 2 & a[0] ? i.return : a[0] ? i.throw || ((o = i.return) && o.call(i), 
0) : i.next) && !(o = o.call(i, a[1])).done) return o;
(i = 0, o) && (a = [ 2 & a[0], o.value ]);
switch (a[0]) {
case 0:
case 1:
o = a;
break;

case 4:
r.label++;
return {
value: a[1],
done: !1
};

case 5:
r.label++;
i = a[1];
a = [ 0 ];
continue;

case 7:
a = r.ops.pop();
r.trys.pop();
continue;

default:
if (!(o = r.trys, o = o.length > 0 && o[o.length - 1]) && (6 === a[0] || 2 === a[0])) {
r = 0;
continue;
}
if (3 === a[0] && (!o || a[1] > o[0] && a[1] < o[3])) {
r.label = a[1];
break;
}
if (6 === a[0] && r.label < o[1]) {
r.label = o[1];
o = a;
break;
}
if (o && r.label < o[2]) {
r.label = o[2];
r.ops.push(a);
break;
}
o[2] && r.ops.pop();
r.trys.pop();
continue;
}
a = t.call(e, r);
} catch (e) {
a = [ 6, e ];
i = 0;
} finally {
n = o = 0;
}
if (5 & a[0]) throw a[1];
return {
value: a[0] ? a[1] : void 0,
done: !0
};
}
};
Object.defineProperty(n, "__esModule", {
value: !0
});
var a = e("../../gl_moreGamesPopup/scripts/GLHallMoreGamesPopupEnter"), r = e("../../gl_result/Func/GLResultViewFeature"), s = e("../func/GLAdjustInsertByPlayTimeCtrl"), l = e("./config/GLConfigManager"), c = e("./ui/popup/GLPopupComponent"), u = e("../func/GLLastEnteredGameOnTopCtrl"), _ = e("../../gl_lang/scripts/GLMultiLangManager"), d = e("../traits/GLGameAdStrategyOptimizeTraitCtrl"), h = e("../func/MiniGameDeliveryUndertakeCtrl"), f = e("../func/CampaignGuideMiniGameCtrl"), p = function() {
function e() {
this._showingPopup = null;
this._showingPopupID = 0;
this._currentGameKey = null;
this._isGameFront = !1;
this._saveTimeDelay = 0;
this._isMiniGameStartedFromMain = !1;
this._isHallShowView = !1;
this.sceneMap = new Map();
this.hiderBannerCountBanner = 0;
this.hiderBannerMaxBanner = 5;
this._data = null;
this._gameView = null;
this._ensureSchedulerAndInit();
}
e.getInstance = function() {
null === this.instance && (this.instance = new e());
return this.instance;
};
Object.defineProperty(e.prototype, "data", {
get: function() {
if (null === this._data) {
var e = GL.Saved.Get("hall_data");
this._data = e || this.initializeData();
}
return this._data;
},
enumerable: !1,
configurable: !0
});
e.prototype.getCurrentGameKey = function() {
return this._currentGameKey;
};
e.prototype._ensureSchedulerAndInit = function() {
var e = cc.director, t = e && e.getScheduler ? e.getScheduler() : null;
if (t) {
t.enableForTarget(this);
t.scheduleUpdate(this, cc.Scheduler.PRIORITY_NON_SYSTEM, !1);
this._isGameFront = !0;
setTimeout(function() {
_.default.getInstance().init();
}, 100);
} else e ? e.once(cc.Director.EVENT_AFTER_UPDATE, this._ensureSchedulerAndInit, this) : cc.game.once(cc.game.EVENT_ENGINE_INITED, this._ensureSchedulerAndInit, this);
};
e.prototype.initializeData = function() {
this._data = {
totalTime: {},
recentOpenTime: {},
last7DaysTimes: {},
last7DaysTotalTime: {}
};
return this._data;
};
e.prototype.isMiniGameStartedFromMain = function() {
return this._isMiniGameStartedFromMain;
};
e.prototype.saveData = function() {
GL.Saved.Set("hall_data", this.data);
};
e.prototype.setup = function() {
cc.game.on(cc.game.EVENT_HIDE, this.onGameHide, this);
cc.game.on(cc.game.EVENT_SHOW, this.onGameShow, this);
GL.Game.GameOn(GL.Game.GameEventType.ShowPopup, this.onShowPopup, this);
GL.Game.GameOn(GL.Game.GameEventType.HidePopup, this.onHidePopup, this);
GL.Game.GameOn(GL.Game.GameEventType.AfterGameEnter, this.onGameEnter, this);
GL.Game.GameOn(GL.Game.GameEventType.BeforeGameExit, this.onGameExit, this);
GL.Game.GameOn(GL.Game.GameEventType.EnterMiniGame, this.onStartGameEnter, this);
GL.Game.GameOn(GL.Game.GameEventType.ExitMiniGame, this.onStartGameExit, this);
GL.Game.MainOn(this.onMainEvent, this);
GL.Game.GameOn(this.onMainEvent, this);
};
e.prototype.release = function() {
cc.game.off(cc.game.EVENT_HIDE, this.onGameHide, this);
cc.game.off(cc.game.EVENT_SHOW, this.onGameShow, this);
GL.Game.GameOff(GL.Game.GameEventType.ShowPopup, this.onShowPopup, this);
GL.Game.GameOff(GL.Game.GameEventType.HidePopup, this.onHidePopup, this);
GL.Game.GameOff(GL.Game.GameEventType.AfterGameEnter, this.onGameEnter, this);
GL.Game.GameOff(GL.Game.GameEventType.BeforeGameExit, this.onGameExit, this);
GL.Game.GameOff(GL.Game.GameEventType.EnterMiniGame, this.onStartGameEnter, this);
GL.Game.GameOff(GL.Game.GameEventType.ExitMiniGame, this.onStartGameExit, this);
GL.Game.MainOff(this.onMainEvent, this);
};
e.prototype.enterGame = function(e) {
return i(this, void 0, Promise, function() {
return o(this, function() {
return [ 2, new Promise(function(t, n) {
switch (e) {
case "gl_blockslide":
GL.Game.MainEmit({
type: GL.Game.MainEvent.EventType.EnterGame,
gameKey: e
});
t();
break;

default:
GL.Game.Enter(e).then(function() {
t();
}).catch(function(e) {
n(e);
});
}
}) ];
});
});
};
e.prototype.onMainEvent = function(e) {
h.default.isOpen() && h.default.getInstance();
f.default.isOpen() && f.default.getInstance();
if (e.source !== GL.Game.MainEvent.EventSource.Lobby) switch (e.type) {
case GL.Game.MainEvent.EventType.SettingUpdate:
if (void 0 !== e.musicSwitch) {
GL.Audio.setMusicSwitch(e.musicSwitch, !0);
console.log("🍐🍐🍐大厅收到主体设置音乐开关==背景音乐=>", e.musicSwitch);
}
if (void 0 !== e.soundSwitch) {
GL.Audio.setSoundSwitch(e.soundSwitch);
console.log("🍐🍐🍐大厅收到主体设置音效开关==音效=>", e.soundSwitch);
}
void 0 !== e.vibrationSwitch && GL.Vibration.setVibrationSwitch(e.vibrationSwitch);
break;

case GL.Game.MainEvent.EventType.ExitToGameLobby:
this.onGameExit(e.gameKey);
break;

case GL.Game.MainEvent.EventType.EnterGame:
e.isBeforeGameEnter;
e.isAfterGameEnter && this.onGameEnter(e.gameKey);
break;

case GL.Game.MainEvent.EventType.rewardsAdCall:
case GL.Game.MainEvent.EventType.InterstAdCall:
e.call && e.call(e.data);
break;

case GL.Game.MainEvent.EventType.EnterMiniGame:
this.setHallShowState(e);
if (a.default.getInstance()) {
this._isMiniGameStartedFromMain = !0;
a.default.getInstance().enterGame(e);
}
s.default.getInstance().isOpen() && s.default.getInstance().init();
break;

case GL.Game.MainEvent.EventType.GetMiniGameList:
this.getGameLIst(function(t) {
e.call && e.call(t);
});
}
};
e.prototype.onGameEnter = function(e) {
this._currentGameKey = e;
this.data.recentOpenTime[e] = Date.now();
GL.Audio.stopMusic();
this.logEventMiniGameOpen(e);
u.default.getInstance().isOpen() && u.default.getInstance().onEnterGame(e);
d.default.getInstance().isOpen() && d.default.getInstance().init();
};
e.prototype.onGameExit = function() {
this._currentGameKey = null;
this._saveTimeDelay = 3;
this.saveData();
this.onHidePopup();
};
e.prototype.onGameHide = function() {
this._isGameFront = !1;
};
e.prototype.onGameShow = function() {
this._isGameFront = !0;
_.default.getInstance().clearCacheFlag();
};
e.prototype.onShowPopup = function(e) {
return i(this, void 0, Promise, function() {
var t, n, i, a, r;
return o(this, function(o) {
switch (o.label) {
case 0:
0 !== this._showingPopupID && this.onHidePopup();
this._showingPopupID = cc.sys.now();
this.hiderBannerCountBanner = 0;
t = this._showingPopupID;
return [ 4, this.loadAsset("resource/prefab/popup", cc.Prefab) ];

case 1:
n = o.sent();
if (t !== this._showingPopupID) return [ 2 ];
i = cc.instantiate(n);
(a = i.getComponent(c.GLPopupComponent)).setIcon(e.icon);
a.setTitle(e.title);
a.setContent(e.content);
a.setCloseBtn(e.hideCloseBtn, e.hideCloseFunc);
e.buttons.forEach(function(e) {
return a.addButton(e.label, e.style, e.effect, e.action, e.adNum);
});
GL.Window.Open(i);
i.zIndex = 99;
i.setSiblingIndex(99);
this._showingPopup = i;
GL.Ad.hideBanner();
try {
(r = cc.director.getScheduler()).enableForTarget(this);
console.log("开启 隐藏 banner定时器 231");
if (r.isScheduled(this.onBannerShow, this)) {
console.log("取消 隐藏 banner定时器 231");
r.unschedule(this.onBannerShow, this);
}
r.schedule(this.onBannerShow, this, 1);
} catch (e) {
console.log("开启定时器失败");
}
return [ 2 ];
}
});
});
};
e.prototype.onHidePopup = function() {
cc.isValid(this._showingPopup) && this._showingPopup.destroy();
this._showingPopup = null;
this._showingPopupID = 0;
try {
var e = cc.director.getScheduler();
e.enableForTarget(this);
if (e.isScheduled(this.onBannerShow, this)) {
console.log("取消 隐藏 banner定时器 231");
e.unschedule(this.onBannerShow, this);
}
this.sceneShowBanner();
} catch (e) {
console.log("取消定时器失败");
}
};
e.prototype.unScheduleBannerUpdate = function() {
try {
var e = cc.director.getScheduler();
e.enableForTarget(this);
if (e.isScheduled(this.onBannerShow, this)) {
console.log("取消 隐藏 banner定时器 231");
e.unschedule(this.onBannerShow, this);
}
this.sceneShowBanner();
} catch (e) {
console.log("取消定时器失败");
}
};
e.prototype.sceneShowBanner = function() {
try {
var e = cc.view.getFrameSize().width, t = cc.view.getFrameSize().height, n = e / 1080, i = 1920 * (n = Math.ceil(100 * n) / 100);
if (t <= Math.ceil(i)) console.log("小游戏隐藏banner"); else {
console.log("小游戏显示banner");
GL.Ad.showBanner();
}
} catch (e) {
console.log("展示广告banner失败");
}
};
e.prototype.onBannerShow = function() {
GL.Ad.hideBanner();
this.hiderBannerCountBanner++;
console.log("onBannerShow 隐藏 banner定时器  this.hiderBannerCountBanner = ", this.hiderBannerCountBanner);
if (this.hiderBannerCountBanner >= this.hiderBannerMaxBanner) try {
var e = cc.director.getScheduler();
e.enableForTarget(this);
if (e.isScheduled(this.onBannerShow, this)) {
console.log("取消 隐藏 banner定时器 267");
e.unschedule(this.onBannerShow, this);
}
} catch (e) {
console.log("取消定时器失败");
}
};
e.prototype.loadAsset = function(e, t) {
return new Promise(function(n, i) {
cc.assetManager.getBundle(GL.Const.HALL_BUNDLE_NAME).load("" + e, t, function(e, t) {
e ? i(e) : n(t);
});
});
};
e.prototype.update = function(e) {
if (this._isGameFront && this._currentGameKey) {
this.data.totalTime[this._currentGameKey] = (this.data.totalTime[this._currentGameKey] || 0) + e;
var t = new Date(), n = t.getFullYear() + "-" + (t.getMonth() + 1) + "-" + t.getDate(), i = this.data.last7DaysTimes[this._currentGameKey] || (this.data.last7DaysTimes[this._currentGameKey] = {});
if (!i[n]) {
var o = Object.keys(i).sort();
o.length >= 7 && delete i[o[0]];
i[n] = 0;
}
i[n] += e;
this.data.last7DaysTotalTime[this._currentGameKey] = Object.values(i).reduce(function(e, t) {
return e + t;
}, 0);
this._saveTimeDelay -= e;
if (this._saveTimeDelay <= 0) {
this._saveTimeDelay = 3;
this.saveData();
}
d.default.getInstance().isOpen() && d.default.getInstance().updateTime(e);
}
};
e.prototype.getAllGameTimeSum = function() {
var e = this, t = 0;
Object.keys(this._data.totalTime).forEach(function(n) {
t += e._data.totalTime[n];
});
return t || 0;
};
e.Exit = function(t) {
var n;
console.log("GLHallController ================= 000" + e.getInstance().isMiniGameStartedFromMain());
console.log("GLHallController ================= 111" + r.GLResultViewFeature.isOpenStartScene());
console.log("GLHallController ================= 222" + GL.Game.get6205GameState());
console.log("GLHallController ================= 333" + e.IsExitFromUIResultView);
console.log("GLHallController 退出类型：（1:从返回键退出 2:从结果退出）" + t);
t == GL.Const.ExitGameType.FromGameMain && GL.ResultTool.destroyResultView();
d.default.getInstance().isOpen() && d.default.getInstance().onExitGame();
if (null !== (n = GL.gamelobby) && void 0 !== n && n.exitGameLobby) {
GL.gamelobby.exitGameLobby(t);
GL.Ad.hideBanner();
GL.Game.Exit();
} else if (e.getInstance().isMiniGameStartedFromMain() && r.GLResultViewFeature.isOpenStartScene() && GL.Game.get6205GameState() && e.IsExitFromUIResultView) {
e.IsExitFromUIResultView = !1;
GL.Game.ExitToStartGameScene();
} else if (e.getInstance().isMiniGameStartedFromMain()) {
GL.Game.ExitFromPopup();
a.default.getInstance().onExitGame();
} else {
GL.Ad.hideBanner();
GL.Game.Exit();
}
};
e.prototype.getSceneParentNode = function() {
var e;
return (null === (e = GL.gamelobby) || void 0 === e ? void 0 : e.getSceneParentNode) && GL.gamelobby.getSceneParentNode() || cc.Canvas.instance.node;
};
e.prototype.getGameLIst = function(e) {
return i(this, void 0, void 0, function() {
var t;
return o(this, function(n) {
switch (n.label) {
case 0:
return [ 4, l.GLConfigManager.getInstance().initialize(!0) ];

case 1:
n.sent();
if (!(t = l.GLConfigManager.getInstance().getConfig())) return [ 2 ];
e && e(t.games);
return [ 2 ];
}
});
});
};
e.prototype.logEventMiniGameOpen = function(e) {
var t = GL.Game.game_subtype[e];
if (t) {
var n = "gl_hall_logEvent_usr_data_game_open_" + t;
if (cc.sys.localStorage.getItem(n)) GL.Submit.sendGameData("usr_data_game_open", {
game_subtype: t,
is_first_open: 0
}); else {
cc.sys.localStorage.setItem(n, 1);
GL.Submit.sendGameData("usr_data_game_open", {
game_subtype: t,
is_first_open: 1
});
}
}
};
e.prototype.logEventHallOpen = function() {
var e = "gl_hall_logEvent_usr_data_hall_open";
if (!this._isHallShowView) if (cc.sys.localStorage.getItem(e)) GL.Submit.sendGameData("usr_data_hall_open", {
is_first_open: 0,
is_show: 0
}); else {
cc.sys.localStorage.setItem(e, 1);
GL.Submit.sendGameData("usr_data_hall_open", {
is_first_open: 1,
is_show: 0
});
}
};
e.prototype.setHallShowState = function(e) {
this._isHallShowView = !1;
e.type == GL.Game.MainEvent.EventType.EnterMiniGame && null != e.data && e.data.isHallShowing && (this._isHallShowView = !0);
};
e.prototype.setIsHallShowView = function(e) {
this._isHallShowView = e;
};
e.prototype.setMiniGameView = function(e) {
this._gameView = e;
};
e.prototype.removeMiniGameBundle = function() {
if (this._gameView) {
for (var e = 0; e < this._gameView.children.length; e++) this._gameView.children[e].destroy();
this._gameView.removeAllChildren();
this._gameView.active = !1;
}
};
e.prototype.onStartGameEnter = function() {};
e.prototype.onStartGameExit = function() {
this.removeMiniGameBundle();
};
e.prototype.preloadSceneToPrefab = function(e, t) {
this.loadMiniGameBundle(e, function() {
t && t();
});
};
e.prototype.loadSceneToPrefab = function(e, t) {
var n = this;
this.loadMiniGameBundle(e, function(i) {
var o = GL.Const.gameMainPrefabName[e];
o && i.load(o, cc.Prefab, function(e, i) {
if (e) ; else {
var a = cc.instantiate(i);
if (n._gameView && n._gameView.isValid) {
n._gameView.addChild(a);
n._gameView.active = !0;
console.log("加载 " + o + " 成功", a);
}
t && t(a);
}
});
});
};
e.prototype.loadMiniGameBundle = function(e, t) {
var n, i = cc.assetManager.getBundle(e);
if (i) t(i); else {
var o = e, a = window.GL;
(null === (n = null == a ? void 0 : a.gamelobby) || void 0 === n ? void 0 : n.getRemoteBundleBaseUrl) && (o = a.gamelobby.getRemoteBundleBaseUrl(e));
cc.assetManager.loadBundle(o, function(e, n) {
e ? console.log("加载场景失败", e) : t(i = n);
});
}
};
e.prototype.getSavedOperationDurationCacheKey = function(e) {
return "saved_operation_duration_" + e;
};
e.prototype.readCachedSavedOperationSeconds = function(e) {
if (e && 0 !== e.length) {
var t = cc.sys.localStorage.getItem(this.getSavedOperationDurationCacheKey(e));
if (null == t || "" === t) return 0;
var n = Number(t);
return Math.max(0, Math.floor(n));
}
};
e.prototype.writeCachedSavedOperationSeconds = function(e, t) {
if (e && 0 !== e.length) {
var n = Math.max(0, Math.floor(t));
cc.sys.localStorage.setItem(this.getSavedOperationDurationCacheKey(e), String(n));
}
};
e.instance = null;
e.IsHallSceneActive = !1;
e.IsExitFromUIResultView = !1;
return e;
}();
n.default = p;
window._GLHallClassMap_ || (window._GLHallClassMap_ = {});
window._GLHallClassMap_.GLHallController = p.getInstance();
window._GLHallClassMap_.GLHallControllerClass = p;
cc._RF.pop();
}, {
"../../gl_lang/scripts/GLMultiLangManager": "GLMultiLangManager",
"../../gl_moreGamesPopup/scripts/GLHallMoreGamesPopupEnter": "GLHallMoreGamesPopupEnter",
"../../gl_result/Func/GLResultViewFeature": "GLResultViewFeature",
"../func/CampaignGuideMiniGameCtrl": "CampaignGuideMiniGameCtrl",
"../func/GLAdjustInsertByPlayTimeCtrl": "GLAdjustInsertByPlayTimeCtrl",
"../func/GLLastEnteredGameOnTopCtrl": "GLLastEnteredGameOnTopCtrl",
"../func/MiniGameDeliveryUndertakeCtrl": "MiniGameDeliveryUndertakeCtrl",
"../traits/GLGameAdStrategyOptimizeTraitCtrl": "GLGameAdStrategyOptimizeTraitCtrl",
"./config/GLConfigManager": "GLConfigManager",
"./ui/popup/GLPopupComponent": "GLPopupComponent"
} ],
GLHallMoreGamesPopupEnter: [ function(e, t, n) {
"use strict";
cc._RF.push(t, "f8d901Em9BH6KhP56C1yE6f", "GLHallMoreGamesPopupEnter");
var i, o = this && this.__extends || (i = function(e, t) {
return (i = Object.setPrototypeOf || {
__proto__: []
} instanceof Array && function(e, t) {
e.__proto__ = t;
} || function(e, t) {
for (var n in t) Object.prototype.hasOwnProperty.call(t, n) && (e[n] = t[n]);
})(e, t);
}, function(e, t) {
i(e, t);
function n() {
this.constructor = e;
}
e.prototype = null === t ? Object.create(t) : (n.prototype = t.prototype, new n());
}), a = this && this.__decorate || function(e, t, n, i) {
var o, a = arguments.length, r = a < 3 ? t : null === i ? i = Object.getOwnPropertyDescriptor(t, n) : i;
if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) r = Reflect.decorate(e, t, n, i); else for (var s = e.length - 1; s >= 0; s--) (o = e[s]) && (r = (a < 3 ? o(r) : a > 3 ? o(t, n, r) : o(t, n)) || r);
return a > 3 && r && Object.defineProperty(t, n, r), r;
}, r = this && this.__awaiter || function(e, t, n, i) {
return new (n || (n = Promise))(function(o, a) {
function r(e) {
try {
l(i.next(e));
} catch (e) {
a(e);
}
}
function s(e) {
try {
l(i.throw(e));
} catch (e) {
a(e);
}
}
function l(e) {
e.done ? o(e.value) : (t = e.value, t instanceof n ? t : new n(function(e) {
e(t);
})).then(r, s);
var t;
}
l((i = i.apply(e, t || [])).next());
});
}, s = this && this.__generator || function(e, t) {
var n, i, o, a, r = {
label: 0,
sent: function() {
if (1 & o[0]) throw o[1];
return o[1];
},
trys: [],
ops: []
};
return a = {
next: s(0),
throw: s(1),
return: s(2)
}, "function" == typeof Symbol && (a[Symbol.iterator] = function() {
return this;
}), a;
function s(e) {
return function(t) {
return l([ e, t ]);
};
}
function l(a) {
if (n) throw new TypeError("Generator is already executing.");
for (;r; ) try {
if (n = 1, i && (o = 2 & a[0] ? i.return : a[0] ? i.throw || ((o = i.return) && o.call(i), 
0) : i.next) && !(o = o.call(i, a[1])).done) return o;
(i = 0, o) && (a = [ 2 & a[0], o.value ]);
switch (a[0]) {
case 0:
case 1:
o = a;
break;

case 4:
r.label++;
return {
value: a[1],
done: !1
};

case 5:
r.label++;
i = a[1];
a = [ 0 ];
continue;

case 7:
a = r.ops.pop();
r.trys.pop();
continue;

default:
if (!(o = r.trys, o = o.length > 0 && o[o.length - 1]) && (6 === a[0] || 2 === a[0])) {
r = 0;
continue;
}
if (3 === a[0] && (!o || a[1] > o[0] && a[1] < o[3])) {
r.label = a[1];
break;
}
if (6 === a[0] && r.label < o[1]) {
r.label = o[1];
o = a;
break;
}
if (o && r.label < o[2]) {
r.label = o[2];
r.ops.push(a);
break;
}
o[2] && r.ops.pop();
r.trys.pop();
continue;
}
a = t.call(e, r);
} catch (e) {
a = [ 6, e ];
i = 0;
} finally {
n = o = 0;
}
if (5 & a[0]) throw a[1];
return {
value: a[0] ? a[1] : void 0,
done: !0
};
}
};
Object.defineProperty(n, "__esModule", {
value: !0
});
var l = e("../../script/hall/GLHallController"), c = cc._decorator, u = c.ccclass, _ = c.property, d = function(e) {
o(t, e);
function t() {
var t = null !== e && e.apply(this, arguments) || this;
t.loadingNode = null;
t.MiniLoadView = null;
t.bundleLoadingNode = null;
t.netNode = null;
t.extitGameCallBack = null;
t.releaseNewComobSceneCallBack = null;
t.canClick = !0;
return t;
}
n = t;
t.getInstance = function() {
return n._instance;
};
t.prototype.onLoad = function() {
var e, t;
l.default.getInstance().setup();
n._instance = this;
this.bundleLoadingNode = this.MiniLoadView.getChildByName("loading").getComponent(dragonBones.ArmatureDisplay);
this.netNode = this.MiniLoadView.getChildByName("net").getComponent(dragonBones.ArmatureDisplay);
(null === (e = null === GL || void 0 === GL ? void 0 : GL.gamelobby) || void 0 === e ? void 0 : e.soundSwitch) && GL.Audio.setSoundSwitch(GL.gamelobby.soundSwitch());
(null === (t = null === GL || void 0 === GL ? void 0 : GL.gamelobby) || void 0 === t ? void 0 : t.musicSwitch) && GL.Audio.setMusicSwitch(GL.gamelobby.musicSwitch(), !0);
};
t.prototype.onDestroy = function() {
l.default.getInstance().release();
};
t.prototype.onExitGame = function() {
this.extitGameCallBack && this.extitGameCallBack();
};
t.prototype.enterGameNew = function(e, t) {
void 0 === t && (t = 30);
return r(this, void 0, Promise, function() {
var t, n, i, o = this;
return s(this, function(a) {
switch (a.label) {
case 0:
console.log("GLHallMoreGamesPopupEnter = enterGameNew 00");
if (!this.canClick) return [ 2 ];
console.log("GLHallMoreGamesPopupEnter = enterGameNew 11");
this.canClick = !1;
if (this.isShowLoad(e) && this.bundleLoadingNode) {
this.bundleLoadingNode.node.active = !1;
this.netNode.node.active = !1;
this.MiniLoadView.active = !0;
this.bundleLoadingNode.node.active = !0;
this.bundleLoadingNode.playAnimation("loading_ani", 0);
}
a.label = 1;

case 1:
a.trys.push([ 1, 3, 4, 5 ]);
console.log("GLHallMoreGamesPopupEnter = enterGameNew 22");
GL.Audio.playNormal1();
t = new Promise(function(t, n) {
console.log("GLHallMoreGamesPopupEnter = enterGameNew 33");
l.default.getInstance().enterGame(e).then(function() {
console.log("GLHallMoreGamesPopupEnter = enterGameNew 44");
console.log("GLHallMoreGamesPopupEnter = enterGameNew 55");
if ("gl_blockslide" == e) {
console.log("GLHallMoreGamesPopupEnter = enterGameNew 66");
o.canClick = !0;
GL.Ad.hideBanner();
t();
o.netNode.node.active = !1;
o.MiniLoadView.active = !1;
} else {
console.log("GLHallMoreGamesPopupEnter = enterGameNew 77");
if (l.default.getInstance().sceneMap.has(e)) {
console.log("GLHallMoreGamesPopupEnter = enterGameNew 88");
l.default.getInstance().sceneMap.has(e);
l.default.getInstance().loadSceneToPrefab(e, function() {
o.canClick = !0;
o.releaseNewComobSceneCallBack && o.releaseNewComobSceneCallBack();
});
o.netNode.node.active = !1;
o.MiniLoadView.active = !1;
GL.Game.EnterGame(e);
GL.Ad.hideBanner();
t();
} else {
console.log("GLHallMoreGamesPopupEnter = enterGameNew 99");
l.default.getInstance().preloadSceneToPrefab(e, function(i) {
if (i) {
console.log("GLHallMoreGamesPopupEnter = enterGameNew aa ，加载失败会清除掉当前加载好的标签，这样可以重新走加载");
cc.sys.localStorage.removeItem(e);
cc.sys.localStorage.removeItem(e + "minigame_loadCompolete");
o.canClick = !0;
console.log("bundler资源初始化失败: " + e + i);
n(i);
} else {
console.log("GLHallMoreGamesPopupEnter = enterGameNew bb");
var a = cc.assetManager.downloader.bundleVers[e];
cc.sys.localStorage.setItem(e + "minigame_loadCompolete", a);
console.log("bundler资源初始化成功进入场景: " + e);
console.log("场景加载成功: " + e);
l.default.getInstance().sceneMap.set(e, e);
o.releaseNewComobSceneCallBack && o.releaseNewComobSceneCallBack();
l.default.getInstance().loadSceneToPrefab(e, function() {
console.log("GLHallMoreGamesPopupEnter = enterGameNew cc");
o.canClick = !0;
});
o.netNode.node.active = !1;
o.MiniLoadView.active = !1;
GL.Game.EnterGame(e);
GL.Ad.hideBanner();
t();
}
});
}
}
}).catch(function(e) {
console.log("GLHallMoreGamesPopupEnter = enterGameNew dd");
o.canClick = !0;
n(e);
});
});
n = new Promise(function() {});
return [ 4, Promise.race([ t, n ]).then(function() {}).catch(function(e) {
console.log("GLHallMoreGamesPopupEnter = enterGameNew ee");
o.canClick = !0;
o.unscheduleAllCallbacks();
GL.Ad.hideBanner();
console.error("加载游戏失败: " + (e.message || e));
if (cc.sys.getNetworkType() === cc.sys.NetworkType.NONE) {
if (o.bundleLoadingNode && o.bundleLoadingNode.isValid) {
o.bundleLoadingNode.node.active = !1;
o.bundleLoadingNode.animationName = null;
}
if (o.netNode && o.netNode.isValid) {
o.netNode.node.active = !0;
o.netNode.playAnimation("check_net", 1);
o.netNode.once(dragonBones.EventObject.COMPLETE, function() {
o.netNode.node.active = !1;
o.MiniLoadView.active = !1;
}, o);
} else o.MiniLoadView.active = !1;
} else if (o.bundleLoadingNode && o.bundleLoadingNode.isValid) {
o.bundleLoadingNode.playAnimation("loading_ani_Failed", 1);
o.bundleLoadingNode.once(dragonBones.EventObject.COMPLETE, function() {
o.bundleLoadingNode.node.active = !1;
o.MiniLoadView.active = !1;
}, o);
} else o.MiniLoadView.active = !1;
}) ];

case 2:
a.sent();
return [ 3, 5 ];

case 3:
i = a.sent();
console.log("GLHallMoreGamesPopupEnter = enterGameNew ff");
this.canClick = !0;
console.error("GL_Hall enterGame error: " + i);
this.MiniLoadView.active = !1;
return [ 3, 5 ];

case 4:
console.log("GLHallMoreGamesPopupEnter = enterGameNew gg");
return [ 7 ];

case 5:
return [ 2 ];
}
});
});
};
t.prototype.enterGame = function(e) {
return r(this, void 0, Promise, function() {
var t, n, i, o, a, r = this;
return s(this, function(s) {
switch (s.label) {
case 0:
t = 30;
n = "";
if (e.type == GL.Game.MainEvent.EventType.EnterMiniGame) {
n = e.gameKey;
this.extitGameCallBack = e.call;
this.releaseNewComobSceneCallBack = e.releaseNewComobSceneCallBack;
}
this.enterGameNew(n, t);
return [ 2 ];

case 1:
s.trys.push([ 1, 3, , 4 ]);
GL.Audio.playNormal1();
i = new Promise(function(e, t) {
l.default.getInstance().enterGame(n).then(function() {
console.log("GL_Hall enterGame successd: " + n);
r.netNode.node.active = !1;
r.MiniLoadView.active = !1;
e();
}).catch(function(e) {
t(e);
});
});
o = new Promise(function(e, i) {
r.scheduleOnce(function() {
i(new Error("加载游戏超时: " + n));
}, t);
});
return [ 4, Promise.race([ i, o ]).catch(function(e) {
r.unscheduleAllCallbacks();
console.error("加载游戏失败: " + (e.message || e));
if (cc.sys.getNetworkType() === cc.sys.NetworkType.NONE) {
r.bundleLoadingNode.node.active = !1;
r.bundleLoadingNode.animationName = null;
r.netNode.node.active = !0;
r.netNode.playAnimation("check_net", 1);
r.netNode.once(dragonBones.EventObject.COMPLETE, function() {
r.netNode.node.active = !1;
r.MiniLoadView.active = !1;
}, r);
} else {
r.bundleLoadingNode.playAnimation("loading_ani_Failed", 1);
r.bundleLoadingNode.once(dragonBones.EventObject.COMPLETE, function() {
r.bundleLoadingNode.node.active = !1;
r.MiniLoadView.active = !1;
}, r);
}
throw e;
}) ];

case 2:
s.sent();
return [ 3, 4 ];

case 3:
a = s.sent();
console.error("GL_Hall enterGame error: " + a);
throw a;

case 4:
return [ 2 ];
}
});
});
};
t.prototype.isShowLoad = function(e) {
var t = cc.assetManager.downloader.bundleVers[e], n = t ? "" + t : null;
if (n) {
console.log("远端测试加载地址======本次bundle对应的md5信息", n);
if (cc.sys.localStorage.getItem(e) != n) return !0;
}
return !1;
};
var n;
t._instance = null;
a([ _(cc.Node) ], t.prototype, "loadingNode", void 0);
a([ _(cc.Node) ], t.prototype, "MiniLoadView", void 0);
return n = a([ u ], t);
}(cc.Component);
n.default = d;
cc._RF.pop();
}, {
"../../script/hall/GLHallController": "GLHallController"
} ],
GLHallScene: [ function(e, t, n) {
"use strict";
cc._RF.push(t, "9ac61i6hlRCB4qA80SQH6zm", "GLHallScene");
var i, o = this && this.__extends || (i = function(e, t) {
return (i = Object.setPrototypeOf || {
__proto__: []
} instanceof Array && function(e, t) {
e.__proto__ = t;
} || function(e, t) {
for (var n in t) Object.prototype.hasOwnProperty.call(t, n) && (e[n] = t[n]);
})(e, t);
}, function(e, t) {
i(e, t);
function n() {
this.constructor = e;
}
e.prototype = null === t ? Object.create(t) : (n.prototype = t.prototype, new n());
}), a = this && this.__decorate || function(e, t, n, i) {
var o, a = arguments.length, r = a < 3 ? t : null === i ? i = Object.getOwnPropertyDescriptor(t, n) : i;
if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) r = Reflect.decorate(e, t, n, i); else for (var s = e.length - 1; s >= 0; s--) (o = e[s]) && (r = (a < 3 ? o(r) : a > 3 ? o(t, n, r) : o(t, n)) || r);
return a > 3 && r && Object.defineProperty(t, n, r), r;
}, r = this && this.__awaiter || function(e, t, n, i) {
return new (n || (n = Promise))(function(o, a) {
function r(e) {
try {
l(i.next(e));
} catch (e) {
a(e);
}
}
function s(e) {
try {
l(i.throw(e));
} catch (e) {
a(e);
}
}
function l(e) {
e.done ? o(e.value) : (t = e.value, t instanceof n ? t : new n(function(e) {
e(t);
})).then(r, s);
var t;
}
l((i = i.apply(e, t || [])).next());
});
}, s = this && this.__generator || function(e, t) {
var n, i, o, a, r = {
label: 0,
sent: function() {
if (1 & o[0]) throw o[1];
return o[1];
},
trys: [],
ops: []
};
return a = {
next: s(0),
throw: s(1),
return: s(2)
}, "function" == typeof Symbol && (a[Symbol.iterator] = function() {
return this;
}), a;
function s(e) {
return function(t) {
return l([ e, t ]);
};
}
function l(a) {
if (n) throw new TypeError("Generator is already executing.");
for (;r; ) try {
if (n = 1, i && (o = 2 & a[0] ? i.return : a[0] ? i.throw || ((o = i.return) && o.call(i), 
0) : i.next) && !(o = o.call(i, a[1])).done) return o;
(i = 0, o) && (a = [ 2 & a[0], o.value ]);
switch (a[0]) {
case 0:
case 1:
o = a;
break;

case 4:
r.label++;
return {
value: a[1],
done: !1
};

case 5:
r.label++;
i = a[1];
a = [ 0 ];
continue;

case 7:
a = r.ops.pop();
r.trys.pop();
continue;

default:
if (!(o = r.trys, o = o.length > 0 && o[o.length - 1]) && (6 === a[0] || 2 === a[0])) {
r = 0;
continue;
}
if (3 === a[0] && (!o || a[1] > o[0] && a[1] < o[3])) {
r.label = a[1];
break;
}
if (6 === a[0] && r.label < o[1]) {
r.label = o[1];
o = a;
break;
}
if (o && r.label < o[2]) {
r.label = o[2];
r.ops.push(a);
break;
}
o[2] && r.ops.pop();
r.trys.pop();
continue;
}
a = t.call(e, r);
} catch (e) {
a = [ 6, e ];
i = 0;
} finally {
n = o = 0;
}
if (5 & a[0]) throw a[1];
return {
value: a[0] ? a[1] : void 0,
done: !0
};
}
}, l = this && this.__read || function(e, t) {
var n = "function" == typeof Symbol && e[Symbol.iterator];
if (!n) return e;
var i, o, a = n.call(e), r = [];
try {
for (;(void 0 === t || t-- > 0) && !(i = a.next()).done; ) r.push(i.value);
} catch (e) {
o = {
error: e
};
} finally {
try {
i && !i.done && (n = a.return) && n.call(a);
} finally {
if (o) throw o.error;
}
}
return r;
}, c = this && this.__spread || function() {
for (var e = [], t = 0; t < arguments.length; t++) e = e.concat(l(arguments[t]));
return e;
}, u = this && this.__values || function(e) {
var t = "function" == typeof Symbol && Symbol.iterator, n = t && e[t], i = 0;
if (n) return n.call(e);
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
Object.defineProperty(n, "__esModule", {
value: !0
});
var _ = e("../../gl_result/Func/GLResultViewFeature"), d = e("../func/GLAdjustInsertByPlayTimeCtrl"), h = e("./config/GLConfigManager"), f = e("./GLHallController"), p = e("./ui/GLGameItem"), g = cc._decorator, m = g.ccclass, G = g.property, L = function(e) {
o(t, e);
function t() {
var t = null !== e && e.apply(this, arguments) || this;
t.loadingNode = null;
t.gameItemContainer = null;
t.gameItemTemplate = null;
t.MiniLoadView = null;
t.MiniGameView = null;
t.gameItemPool = null;
t.bundleLoadingNode = null;
t.netNode = null;
t.game_subtype = {
gl_oneline: 2,
gl_tictactoe: 6,
gl_fruit: 5,
gl_watersort: 1,
gl_onet: 4,
gl_mahjong: 3,
gl_sudoku: 7,
gl_blockslide: 8
};
t.canClick = !0;
return t;
}
t.prototype.onLoad = function() {
var e = this;
cc.director._kSpeed = 1;
GL.Game.AdpterCanvas();
GL.Game.AdpterBangleScreen(this.node.getChildByName("conent"));
this.gameItemPool = new cc.NodePool(p.default);
this.updateGameList();
this.bundleLoadingNode = this.MiniLoadView.getChildByName("loading").getComponent(dragonBones.ArmatureDisplay);
this.netNode = this.MiniLoadView.getChildByName("net").getComponent(dragonBones.ArmatureDisplay);
f.default.getInstance().setup();
f.default.getInstance().setMiniGameView(this.MiniGameView);
d.default.getInstance().isOpen() && d.default.getInstance().init();
f.default.IsHallSceneActive = !0;
cc.sys.isNative && this.schedule(function() {
e.hideBanner();
}, 2);
};
t.prototype.hideBanner = function() {
GL.Ad.hideBanner();
};
t.prototype.setTimeout = function(e, t, n) {
var i = cc.director.getScheduler(), o = t || cc.director.getScene();
i.enableForTarget(o);
i.schedule(e, o, n, 0, 0, !1);
};
t.prototype.onDestroy = function() {
this.gameItemPool.clear();
this.gameItemPool = null;
this.unscheduleAllCallbacks();
f.default.IsHallSceneActive = !1;
f.default.getInstance().setIsHallShowView(!1);
};
t.prototype.updateGameList = function() {
return r(this, void 0, Promise, function() {
var e, t, n, i, o, a, r, l, _ = this;
return s(this, function(s) {
switch (s.label) {
case 0:
this.loadingNode.active = !0;
s.label = 1;

case 1:
s.trys.push([ 1, 3, 4, 5 ]);
return [ 4, h.GLConfigManager.getInstance().initialize(!0) ];

case 2:
s.sent();
if (!(e = h.GLConfigManager.getInstance().getConfig())) return [ 2 ];
c(this.gameItemContainer.children).forEach(function(e) {
return _.destroyGameItem(e);
});
console.log("服务器游戏配置", e);
if (!(t = e.games)) return [ 2 ];
try {
for (n = u(t), i = n.next(); !i.done; i = n.next()) {
o = i.value;
this.createGameItem(o);
}
} catch (e) {
r = {
error: e
};
} finally {
try {
i && !i.done && (l = n.return) && l.call(n);
} finally {
if (r) throw r.error;
}
}
this.logEventHallOpen();
f.default.getInstance().setIsHallShowView(!0);
return [ 3, 5 ];

case 3:
a = s.sent();
cc.error("GL_Hall updateGameList error: " + a);
return [ 3, 5 ];

case 4:
this.loadingNode.active = !1;
return [ 7 ];

case 5:
return [ 2 ];
}
});
});
};
t.prototype.isShowLoad = function(e) {
var t = cc.assetManager.downloader.bundleVers[e], n = t ? "" + t : null;
if (n) {
console.log("远端测试加载地址======本次bundle对应的md5信息", n);
if (cc.sys.localStorage.getItem(e) != n) return !0;
}
return !1;
};
t.prototype.enterGame = function(e, t) {
void 0 === t && (t = 30);
return r(this, void 0, Promise, function() {
var t, n, i, o = this;
return s(this, function(a) {
switch (a.label) {
case 0:
if (!this.canClick) return [ 2 ];
GL.Submit.sendGameData("more_game_click", {
game_subtype: this.game_subtype[e]
});
if (this.isShowLoad(e)) {
this.bundleLoadingNode.node.active = !1;
this.netNode.node.active = !1;
this.MiniLoadView.active = !0;
this.bundleLoadingNode.node.active = !0;
this.bundleLoadingNode.playAnimation("loading_ani", 0);
}
a.label = 1;

case 1:
a.trys.push([ 1, 3, , 4 ]);
t = new Promise(function(t, n) {
f.default.getInstance().enterGame(e).then(function() {
if ("gl_blockslide" == e) t(); else if (f.default.getInstance().sceneMap.has(e)) {
f.default.getInstance().loadSceneToPrefab(e);
GL.Game.EnterGame(e);
t();
} else f.default.getInstance().preloadSceneToPrefab(e, function(i) {
if (i) {
o.canClick = !0;
console.log("bundler资源初始化失败: " + e + i);
n(i);
} else {
console.log("bundler资源初始化成功进入场景: " + e);
console.log("场景加载成功: " + e);
f.default.getInstance().sceneMap.set(e, e);
f.default.getInstance().loadSceneToPrefab(e);
GL.Game.EnterGame(e);
t();
}
});
}).catch(function(e) {
o.canClick = !0;
n(e);
});
});
n = new Promise(function() {});
return [ 4, Promise.race([ t, n ]).then(function() {}).catch(function(e) {
o.canClick = !0;
o.unscheduleAllCallbacks();
console.error("加载游戏失败: " + (e.message || e));
if (cc.sys.getNetworkType() === cc.sys.NetworkType.NONE) {
if (o.bundleLoadingNode && o.bundleLoadingNode.isValid) {
o.bundleLoadingNode.node.active = !1;
o.bundleLoadingNode.animationName = null;
}
if (o.netNode && o.netNode.isValid) {
o.netNode.node.active = !0;
o.netNode.playAnimation("check_net", 1);
o.netNode.once(dragonBones.EventObject.COMPLETE, function() {
o.netNode.node.active = !1;
o.MiniLoadView.active = !1;
}, o);
} else o.MiniLoadView.active = !1;
} else if (o.bundleLoadingNode && o.bundleLoadingNode.isValid) {
o.bundleLoadingNode.playAnimation("loading_ani_Failed", 1);
o.bundleLoadingNode.once(dragonBones.EventObject.COMPLETE, function() {
o.bundleLoadingNode.node.active = !1;
o.MiniLoadView.active = !1;
}, o);
} else o.MiniLoadView.active = !1;
}) ];

case 2:
a.sent();
return [ 3, 4 ];

case 3:
i = a.sent();
this.canClick = !0;
console.error("GL_Hall enterGame error: " + i);
this.MiniLoadView.active = !1;
return [ 3, 4 ];

case 4:
return [ 2 ];
}
});
});
};
t.prototype.createGameItem = function(e) {
if (this.gameItemContainer && this.gameItemContainer.isValid) {
var t = null;
(t = this.gameItemPool.size() > 0 ? this.gameItemPool.get() : cc.instantiate(this.gameItemTemplate)).active = !0;
t.parent = this.gameItemContainer;
t.on("enter", this.enterGame, this);
t.getComponent(p.default).setGameInfo(e);
return t;
}
return null;
};
t.prototype.destroyGameItem = function(e) {
e.active = !1;
this.gameItemPool.put(e);
};
t.prototype.onRefreshButtonClick = function() {
this.updateGameList();
};
t.prototype.settingButtonClick = function() {
GL.Audio.playNormal1();
GL.Game.openSettingView();
};
t.prototype.backBlastHandler = function() {
var e = _.GLResultViewFeature.isOpenBackGame(), t = _.GLResultViewFeature.isOpenStartScene();
e ? GL.Game.MainEmit({
type: GL.Game.MainEvent.EventType.EnterGame,
gameKey: "NewGameSkinScene9"
}) : t && GL.Game.get6205GameState() ? cc.director.loadScene("StartGameScene2") : GL.Game.MainEmit({
type: GL.Game.MainEvent.EventType.EnterGame,
gameKey: "NewGameSkinScene9"
});
};
t.prototype.logEventHallOpen = function() {
var e = "gl_hall_logEvent_usr_data_hall_open";
if (cc.sys.localStorage.getItem(e)) cc.systemEvent.emit("gameLobby_submit", {
eventType: "usr_data_hall_open",
data: {
is_first_open: 0,
is_show: 1
}
}); else {
cc.sys.localStorage.setItem(e, 1);
cc.systemEvent.emit("gameLobby_submit", {
eventType: "usr_data_hall_open",
data: {
is_first_open: 1,
is_show: 1
}
});
}
};
a([ G(cc.Node) ], t.prototype, "loadingNode", void 0);
a([ G(cc.Node) ], t.prototype, "gameItemContainer", void 0);
a([ G(cc.Prefab) ], t.prototype, "gameItemTemplate", void 0);
a([ G(cc.Node) ], t.prototype, "MiniLoadView", void 0);
a([ G(cc.Node) ], t.prototype, "MiniGameView", void 0);
return a([ m ], t);
}(cc.Component);
n.default = L;
cc._RF.pop();
}, {
"../../gl_result/Func/GLResultViewFeature": "GLResultViewFeature",
"../func/GLAdjustInsertByPlayTimeCtrl": "GLAdjustInsertByPlayTimeCtrl",
"./GLHallController": "GLHallController",
"./config/GLConfigManager": "GLConfigManager",
"./ui/GLGameItem": "GLGameItem"
} ],
GLHallUICtrl: [ function(e, t, n) {
"use strict";
cc._RF.push(t, "c62cez94qVNw4J7rwlIVR7E", "GLHallUICtrl");
Object.defineProperty(n, "__esModule", {
value: !0
});
var i = function() {
function e() {}
e.isOpen = function() {
return GL.Game.IsFeatureOpen("GLHallUICtrl");
};
e.getMaskColor = function() {
return {
gl_sudoku: {
maskColor: [ 72, 104, 176, 255 ]
},
gl_blockslide: {
maskColor: [ 49, 59, 111, 255 ]
},
gl_tictactoe: {
maskColor: [ 146, 69, 72, 255 ]
},
gl_oneline: {
maskColor: [ 49, 49, 49, 255 ]
},
gl_mahjong: {
maskColor: [ 38, 69, 102, 255 ]
},
gl_watersort: {
maskColor: [ 84, 57, 145, 255 ]
},
gl_fruit: {
maskColor: [ 190, 122, 43, 255 ]
},
gl_onet: {
maskColor: [ 109, 52, 66, 255 ]
}
};
};
return e;
}();
n.default = i;
cc._RF.pop();
}, {} ],
GLLangFontDefine: [ function(e, t, n) {
"use strict";
cc._RF.push(t, "71171EXGDxEZaeZk22X+ll4", "GLLangFontDefine");
Object.defineProperty(n, "__esModule", {
value: !0
});
n.GLLangFontDefine = void 0;
n.GLLangFontDefine = {
default: "Roboto-Bold",
TH: "Kanit-Medium",
HY: "NotoSansArmenian-SemiBold",
HI: "NotoSansDevanagari-SemiBold",
KM: "NotoSansKhmer-SemiBold",
AR: "",
HE: ""
};
cc._RF.pop();
}, {} ],
GLLangKeyDefine: [ function(e, t, n) {
"use strict";
cc._RF.push(t, "0dfa8on2cNL1LdDFzYG1e1s", "GLLangKeyDefine");
Object.defineProperty(n, "__esModule", {
value: !0
});
var i = function() {
function e() {}
e.GAME_NAME_TICTACTOE = "GL_LANG_GAME_NAME_TICTACTOE";
e.GAME_NAME_MAHJONG = "GL_LANG_GAME_NAME_MAHJONG";
e.GAME_NAME_ONET = "GL_LANG_GAME_NAME_ONET";
e.GAME_NAME_ONELINE = "GL_LANG_GAME_NAME_ONELINE";
e.GAME_NAME_WATER = "GL_LANG_GAME_NAME_WATER";
e.GAME_NAME_FRUIT = "GL_LANG_GAME_NAME_FRUIT";
e.GAME_NAME_SUDOKU = "GL_LANG_GAME_NAME_SUDOKU";
e.COMMON_RESULT_BUTTON_PLAY_AGAIN = "GL_LANG_COMMON_RESULT_BUTTON_PLAY_AGAIN";
e.COMMON_RESULT_OVER_FRUIT_SCORE = "GL_LANG_COMMON_RESULT_OVER_FRUIT_SCORE";
e.COMMON_RESULT_OVER_FRUIT_BEST_SCORE = "GL_LANG_COMMON_RESULT_OVER_FRUIT_BEST_SCORE";
e.COMMON_RESULT_OVER_SCORE = "GL_LANG_COMMON_RESULT_OVER_SCORE";
e.TICTACTOE_GUIDE_SKIP = "GL_LANG_TICTACTOE_SKIP";
e.TICTACTOE_GUIDE_NOTICE_1 = "GL_LANG_TICTACTOE_GUIDE_1";
e.TICTACTOE_GUIDE_NOTICE_2 = "GL_LANG_TICTACTOE_GUIDE_2";
e.TICTACTOE_GUIDE_NOTICE_3 = "GL_LANG_TICTACTOE_GUIDE_3";
e.TICTACTOE_GUIDE_NOTICE_4 = "GL_LANG_TICTACTOE_GUIDE_4";
e.TICTACTOE_GUIDE_NOTICE_5 = "GL_LANG_TICTACTOE_GUIDE_5";
e.TICTACTOE_GUIDE_NOTICE_LAST = "GL_LANG_TICTACTOE_GUIDE_LAST";
e.TICTACTOE_POPUP_RESTART_TITLE = "GL_LANG_TICTACTOE_POPUP_RESTART_TITLE";
e.TICTACTOE_POPUP_RESTART_DESC = "GL_LANG_TICTACTOE_POPUP_RESTART_DESC";
e.TICTACTOE_POPUP_RESTART_BUTTON_YES = "GL_LANG_TICTACTOE_POPUP_RESTART_BUTTON_YES";
e.TICTACTOE_POPUP_RESTART_BUTTON_NO = "GL_LANG_TICTACTOE_POPUP_RESTART_BUTTON_NO";
e.MAHJONG_FULL_COMBO = "GL_LANG_MAHJONG_FULL_COMBO";
e.MAHJONG_GUIDE_SKIP = "GL_LANG_MAHJONG_SKIP";
e.MAHJONG_TITLE_LEVEL = "GL_LANG_MAHJONG_TITLE_LEVEL";
e.MAHJONG_TITLE_MATCHES = "GL_LANG_MAHJONG_TITLE_MATCHES";
e.MAHJONG_TIPS_1 = "GL_LANG_MAHJONG_TIP_1";
e.MAHJONG_TIPS_2 = "GL_LANG_MAHJONG_TIP_2";
e.MAHJONG_TIPS_3 = "GL_LANG_MAHJONG_TIP_3";
e.MAHJONG_POPUP_AGAIN_TITLE = "GL_LANG_MAHJONG_POPUP_AGAIN_TITLE";
e.MAHJONG_POPUP_AGAIN_DESC = "GL_LANG_MAHJONG_POPUP_AGAIN_DESC";
e.MAHJONG_POPUP_AGAIN_BUTTON_RESTART = "GL_LANG_MAHJONG_POPUP_AGAIN_RESTART";
e.MAHJONG_POPUP_AGAIN_BUTTON_NEWGAME = "GL_LANG_MAHJONG_POPUP_AGAIN_NEWGAME";
e.MAHJONG_POPUP_AGAIN_BUTTON_CANCEL = "GL_LANG_MAHJONG_POPUP_AGAIN_CANCEL";
e.MAHJONG_POPUP_HINT_TITLE = "GL_LANG_MAHJONG_POPUP_HINT_TITLE";
e.MAHJONG_POPUP_HINT_BUTTON_YES = "GL_LANG_MAHJONG_POPUP_HINT_BUTTON_YES";
e.MAHJONG_POPUP_HINT_BUTTON_NO = "GL_LANG_MAHJONG_POPUP_HINT_BUTTON_NO";
e.MAHJONG_POPUP_SHUFFLE_TITLE = "GL_LANG_MAHJONG_POPUP_SHUFFLE_TITLE";
e.MAHJONG_POPUP_SHUFFLE_BUTTON_YES = "GL_LANG_MAHJONG_POPUP_SHUFFLE_BUTTON_YES";
e.MAHJONG_POPUP_SHUFFLE_BUTTON_NO = "GL_LANG_MAHJONG_POPUP_SHUFFLE_BUTTON_NO";
e.MAHJONG_POPUP_LOSE_TITLE = "GL_LANG_MAHJONG_POPUP_LOSE_TITLE";
e.MAHJONG_POPUP_LOSE_DESC = "GL_LANG_MAHJONG_POPUP_LOSE_DESC";
e.MAHJONG_POPUP_LOSE_BUTTON_SHUFFLE = "GL_LANG_MAHJONG_POPUP_LOSE_BUTTON_SHUFFLE";
e.MAHJONG_POPUP_LOSE_BUTTON_RESTART = "GL_LANG_MAHJONG_POPUP_LOSE_BUTTON_RESTART";
e.MAHJONG_GUIDE_STEP_LEVEL_1_1 = "GL_LANG_MAHJONG_GUIDE_STEP_LEVEL_1_1";
e.MAHJONG_GUIDE_STEP_LEVEL_1_2 = "GL_LANG_MAHJONG_GUIDE_STEP_LEVEL_1_2";
e.MAHJONG_GUIDE_STEP_LEVEL_1_3 = "GL_LANG_MAHJONG_GUIDE_STEP_LEVEL_1_3";
e.MAHJONG_GUIDE_STEP_LEVEL_1_4 = "GL_LANG_MAHJONG_GUIDE_STEP_LEVEL_1_4";
e.MAHJONG_GUIDE_STEP_NEW_LEVEL_1_1 = "GL_LANG_MAHJONG_GUIDE_STEP_NEW_LEVEL_1_1";
e.MAHJONG_GUIDE_STEP_NEW_LEVEL_1_2 = "GL_LANG_MAHJONG_GUIDE_STEP_NEW_LEVEL_1_2";
e.MAHJONG_GUIDE_STEP_NEW_LEVEL_1_3 = "GL_LANG_MAHJONG_GUIDE_STEP_NEW_LEVEL_1_3";
e.MAHJONG_GUIDE_STEP_NEW_LEVEL_1_4 = "GL_LANG_MAHJONG_GUIDE_STEP_NEW_LEVEL_1_4";
e.MAHJONG_GUIDE_STEP_LEVEL_4 = "GL_LANG_MAHJONG_GUIDE_STEP_LEVEL_4";
e.MAHJONG_GUIDE_STEP_LEVEL_6 = "GL_LANG_MAHJONG_GUIDE_STEP_LEVEL_6";
e.MAHJONG_GUIDE_STEP_PHASE_2 = "GL_LANG_MAHJONG_GUIDE_STEP_PHASE_2";
e.ONELINE_GUIDE_SKIP = "GL_LANG_ONELINE_SKIP";
e.ONELINE_GUIDE_NOTICE = "GL_LANG_ONELINE_GUIDE";
e.ONELINE_TITLE_LEVEL = "GL_LANG_ONELINE_TITLE_LEVEL";
e.ONELINE_POPUP_SEEAD_TITLE = "GL_LANG_ONELINE_POPUP_SEEAD_TITLE";
e.ONELINE_POPUP_SEEAD_BUTTON_YES = "GL_LANG_ONELINE_POPUP_SEEAD_BUTTON_YES";
e.ONELINE_POPUP_SEEAD_BUTTON_NO = "GL_LANG_ONELINE_POPUP_SEEAD_BUTTON_NO";
e.ONELINE_POPUP_RESTART_TITLE = "GL_LANG_ONELINE_POPUP_RESTART_TITLE";
e.ONELINE_POPUP_RESTART_DESC = "GL_LANG_ONELINE_POPUP_RESTART_DESC";
e.ONELINE_POPUP_RESTART_BUTTON_YES = "GL_LANG_ONELINE_POPUP_RESTART_BUTTON_YES";
e.ONELINE_POPUP_RESTART_BUTTON_NO = "GL_LANG_ONELINE_POPUP_RESTART_BUTTON_NO";
e.WATERSORT_TITLE_LEVEL = "GL_LANG_WATERSORT_TITLE_LEVEL";
e.WATERSORT_GUIDE_SKIP = "GL_LANG_WATERSORT_SKIP";
e.WATERSORT_LOSE_TIPS = "GL_LANG_WATERSORT_LOSE_TIPS";
e.WATERSORT_REVERT_TIPS = "GL_LANG_WATERSORT_REVERT_TIPS";
e.WATERSORT_GUIDE_1 = "GL_LANG_WATERSORT_GUIDE_1";
e.WATERSORT_GUIDE_2 = "GL_LANG_WATERSORT_GUIDE_2";
e.WATERSORT_POPUP_USEITEM_TITLE = "GL_LANG_WATERSORT_POPUP_USEITEM_TITLE";
e.WATERSORT_POPUP_USEITEM_BUTTON_YES = "GL_LANG_WATERSORT_POPUP_USEITEM_BUTTON_YES";
e.WATERSORT_POPUP_USEITEM_BUTTON_NO = "GL_LANG_WATERSORT_POPUP_USEITEM_BUTTON_NO";
e.WATERSORT_POPUP_UNLOCK_TITLE = "GL_LANG_WATERSORT_POPUP_UNLOCK_TITLE";
e.WATERSORT_POPUP_UNLOCK_BUTTON_YES = "GL_LANG_WATERSORT_POPUP_UNLOCK_BUTTON_YES";
e.WATERSORT_POPUP_UNLOCK_BUTTON_NO = "GL_LANG_WATERSORT_POPUP_UNLOCK_BUTTON_NO";
e.WATERSORT_POPUP_SEEAD_TITLE = "GL_LANG_WATERSORT_POPUP_SEEAD_TITLE";
e.WATERSORT_POPUP_SEEAD_BUTTON_YES = "GL_LANG_WATERSORT_POPUP_SEEAD_BUTTON_YES";
e.WATERSORT_POPUP_SEEAD_BUTTON_NO = "GL_LANG_WATERSORT_POPUP_SEEAD_BUTTON_NO";
e.WATERSORT_POPUP_SEEAD_REVERT_TITLE = "GL_LANG_WATERSORT_POPUP_SEEAD_REVERT_TITLE";
e.WATERSORT_POPUP_SEEAD_REVERT_BUTTON_YES = "GL_LANG_WATERSORT_POPUP_SEEAD_REVERT_BUTTON_YES";
e.WATERSORT_POPUP_SEEAD_REVERT_BUTTON_NO = "GL_LANG_WATERSORT_POPUP_SEEAD_REVERT_BUTTON_NO";
e.WATERSORT_POPUP_SEEAD_NEW_TUBE_TITLE = "GL_LANG_WATERSORT_POPUP_SEEAD_NEW_TUBE_TITLE";
e.WATERSORT_POPUP_SEEAD_NEW_TUBE_BUTTON_YES = "GL_LANG_WATERSORT_POPUP_SEEAD_NEW_TUBE_BUTTON_YES";
e.WATERSORT_POPUP_SEEAD_NEW_TUBE_BUTTON_NO = "GL_LANG_WATERSORT_POPUP_SEEAD_NEW_TUBE_BUTTON_NO";
e.WATERSORT_POPUP_SEEAD_UNLOCK_TUBE_TITLE = "GL_LANG_WATERSORT_POPUP_SEEAD_UNLOCK_TUBE_TITLE";
e.WATERSORT_POPUP_SEEAD_UNLOCK_TUBE_BUTTON_YES = "GL_LANG_WATERSORT_POPUP_SEEAD_UNLOCK_TUBE_BUTTON_YES";
e.WATERSORT_POPUP_SEEAD_UNLOCK_TUBE_BUTTON_NO = "GL_LANG_WATERSORT_POPUP_SEEAD_UNLOCK_TUBE_BUTTON_NO";
e.WATERSORT_POPUP_RESTART_TITLE = "GL_LANG_WATERSORT_POPUP_RESTART_TITLE";
e.WATERSORT_POPUP_RESTART_DESC = "GL_LANG_WATERSORT_POPUP_RESTART_DESC";
e.WATERSORT_POPUP_RESTART_BUTTON_YES = "GL_LANG_WATERSORT_POPUP_RESTART_BUTTON_YES";
e.WATERSORT_POPUP_RESTART_BUTTON_NO = "GL_LANG_WATERSORT_POPUP_RESTART_BUTTON_NO";
e.ONET_TITLE_LEVEL = "GL_LANG_ONET_TITLE_LEVEL";
e.ONET_GUIDE_SKIP = "GL_LANG_ONET_SKIP";
e.ONET_GUIDE_1 = "GL_LANG_ONET_GUIDE_1";
e.ONET_GUIDE_2 = "GL_LANG_ONET_GUIDE_2";
e.ONET_GUIDE_3 = "GL_LANG_ONET_GUIDE_3";
e.ONET_GUIDE_4 = "GL_LANG_ONET_GUIDE_4";
e.ONET_GUIDE_5 = "GL_LANG_ONET_GUIDE_5";
e.ONET_POPUP_BUTTON_YES = "GL_LANG_ONET_POPUP_BUTTON_YES";
e.ONET_POPUP_BUTTON_NO = "GL_LANG_ONET_POPUP_BUTTON_NO";
e.ONET_POPUP_TITLE_SHUFFLE = "GL_LANG_ONET_POPUP_TITLE_SHUFFLE";
e.ONET_POPUP_TITLE_HINT = "GL_LANG_ONET_POPUP_TITLE_HINT";
e.ONET_POPUP_TITLE_OVERTIME = "GL_LANG_ONET_POPUP_TITLE_OVERTIME";
e.ONET_POPUP_ADDTIME_TITLE = "GL_LANG_ONET_POPUP_ADDTIME_TITLE";
e.ONET_POPUP_ADDTIME_DESC = "GL_LANG_ONET_POPUP_ADDTIME_DESC";
e.ONET_POPUP_ADDTIME_BUTTON_YES = "GL_LANG_ONET_POPUP_ADDTIME_BUTTON_YES";
e.ONET_POPUP_ADDTIME_BUTTON_NO = "GL_LANG_ONET_POPUP_ADDTIME_BUTTON_NO";
e.ONET_POPUP_RESTART_TITLE = "GL_LANG_ONET_POPUP_RESTART_TITLE";
e.WONET_POPUP_RESTART_DESC = "GL_LANG_ONET_POPUP_RESTART_DESC";
e.ONET_POPUP_RESTART_BUTTON_YES = "GL_LANG_ONET_POPUP_RESTART_BUTTON_YES";
e.ONET_POPUP_RESTART_BUTTON_NO = "GL_LANG_ONET_POPUP_RESTART_BUTTON_NO";
e.ONET_ERROR_TIPS = "GL_LANG_ONET_ERROR_TIPS";
e.ONET_LEVEL_COMPLETE = "GL_LANG_ONET_LEVEL_COMPLETE";
e.SUDOKU_TITLE_LEVEL = "GL_LANG_SUDOKU_TITLE_LEVEL";
e.SUDOKU_TITLE_TIME = "GL_LANG_SUDOKU_TITLE_TIME";
e.SUDOKU_GUIDE_SKIP = "GL_LANG_SUDOKU_GUIDE_SKIP";
e.SUDOKU_GUIDE_STEP1_TEXT = "GL_LANG_SUDOKU_GUIDE_STEP1_TEXT";
e.SUDOKU_GUIDE_STEP1_BUBBLE_1_1 = "GL_LANG_SUDOKU_GUIDE_STEP1_BUBBLE_1_1";
e.SUDOKU_GUIDE_STEP2_TEXT = "GL_LANG_SUDOKU_GUIDE_STEP2_TEXT";
e.SUDOKU_GUIDE_STEP2_BUBBLE_1_1 = "GL_LANG_SUDOKU_GUIDE_STEP2_BUBBLE_1_1";
e.SUDOKU_GUIDE_STEP2_BUBBLE_1_2 = "GL_LANG_SUDOKU_GUIDE_STEP2_BUBBLE_1_2";
e.SUDOKU_GUIDE_STEP2_BUBBLE_2_1 = "GL_LANG_SUDOKU_GUIDE_STEP2_BUBBLE_2_1";
e.SUDOKU_GUIDE_STEP2_BUBBLE_ERROR = "GL_LANG_SUDOKU_GUIDE_STEP2_BUBBLE_ERROR";
e.SUDOKU_GUIDE_STEP3_TEXT = "GL_LANG_SUDOKU_GUIDE_STEP3_TEXT";
e.SUDOKU_GUIDE_STEP3_BUBBLE_1_1 = "GL_LANG_SUDOKU_GUIDE_STEP3_BUBBLE_1_1";
e.SUDOKU_GUIDE_STEP3_BUBBLE_1_2 = "GL_LANG_SUDOKU_GUIDE_STEP3_BUBBLE_1_2";
e.SUDOKU_GUIDE_STEP3_BUBBLE_2_1 = "GL_LANG_SUDOKU_GUIDE_STEP3_BUBBLE_2_1";
e.SUDOKU_GUIDE_STEP3_BUBBLE_ERROR = "GL_LANG_SUDOKU_GUIDE_STEP3_BUBBLE_ERROR";
e.SUDOKU_GUIDE_STEP4_TEXT = "GL_LANG_SUDOKU_GUIDE_STEP4_TEXT";
e.SUDOKU_GUIDE_STEP4_BUBBLE_1_1 = "GL_LANG_SUDOKU_GUIDE_STEP4_BUBBLE_1_1";
e.SUDOKU_GUIDE_STEP4_BUBBLE_1_2 = "GL_LANG_SUDOKU_GUIDE_STEP4_BUBBLE_1_2";
e.SUDOKU_GUIDE_STEP4_BUBBLE_2_1 = "GL_LANG_SUDOKU_GUIDE_STEP4_BUBBLE_2_1";
e.SUDOKU_GUIDE_STEP4_BUBBLE_ERROR = "GL_LANG_SUDOKU_GUIDE_STEP4_BUBBLE_ERROR";
e.SUDOKU_GAME_OVER_DESC = "GL_LANG_SUDOKU_GAME_OVER_DESC";
e.SUDOKU_GAME_OVER_BUTTON_RESTORE = "GL_LANG_SUDOKU_GAME_OVER_BUTTON_RESTORE";
e.SUDOKU_GAME_OVER_BUTTON_NEW_GAME = "GL_LANG_SUDOKU_GAME_OVER_BUTTON_NEW_GAME";
e.SUDOKU_GAME_OVER_BUTTON_RESTART = "GL_LANG_SUDOKU_GAME_OVER_BUTTON_RESTART";
e.SUDOKU_GAME_RESTART_TITLE = "GL_LANG_SUDOKU_GAME_RESTART_TITLE";
e.SUDOKU_GAME_RESTART_DESC = "GL_LANG_SUDOKU_GAME_RESTART_DESC";
e.SUDOKU_GAME_RESTART_BUTTON_NEW_GAME = "GL_LANG_SUDOKU_GAME_RESTART_BUTTON_NEW_GAME";
e.SUDOKU_GAME_RESTART_BUTTON_RESTART = "GL_LANG_SUDOKU_GAME_RESTART_BUTTON_RESTART";
e.SUDOKU_GAME_WIN_TITLE = "GL_LANG_SUDOKU_GAME_WIN_TITLE";
e.SUDOKU_GAME_WIN_SCORE = "GL_LANG_SUDOKU_GAME_WIN_SCORE";
e.SUDOKU_GAME_WIN_TIME = "GL_LANG_SUDOKU_GAME_WIN_TIME";
e.SUDOKU_GAME_WIN_BUTTON_NEW_GAME = "GL_LANG_SUDOKU_GAME_WIN_BUTTON_NEW_GAME";
e.SUDOKU_GAME_WIN_BACK = "GL_LANG_SUDOKU_GAME_WIN_BACK";
e.FRUIT_DIANZAN_1 = "GL_LANG_FRUIT_DIANZAN_1";
e.FRUIT_DIANZAN_2 = "GL_LANG_FRUIT_DIANZAN_2";
e.FRUIT_DIANZAN_3 = "GL_LANG_FRUIT_DIANZAN_3";
e.FRUIT_DIANZAN_4 = "GL_LANG_FRUIT_DIANZAN_4";
e.FRUIT_AD_COMING_TITLE = "GL_LANG_FRUIT_AD_COMING_TITLE";
e.FRUIT_AD_COMING_SUB_TITLE = "GL_LANG_FRUIT_AD_COMING_SUB_TITLE";
e.FRUIT_TITLE_SCORE = "GL_LANG_FRUIT_TITLE_SCORE";
e.FRUIT_TITLE_TIME = "GL_LANG_FRUIT_TITLE_TIME";
e.FRUIT_TITLE_NEXT = "GL_LANG_FRUIT_TITLE_NEXT";
e.FRUIT_GUIDE_1 = "GL_LANG_FRUIT_GUIDE_1";
e.FRUIT_GUIDE_2 = "GL_LANG_FRUIT_GUIDE_2";
e.FRUIT_GUIDE_3 = "GL_LANG_FRUIT_GUIDE_3";
e.FRUIT_GUIDE_SKIP = "GL_LANG_FRUIT_GUIDE_SKIP";
e.FRUIT_GUIDE_PROP_BOMB_DESC = "GL_LANG_FRUIT_GUIDE_PROP_BOMB_DESC";
e.FRUIT_POPUP_RESTART_TITLE = "GL_LANG_FRUIT_POPUP_RESTART_TITLE";
e.FRUIT_POPUP_RESTART_DESC = "GL_LANG_FRUIT_POPUP_RESTART_DESC";
e.FRUIT_POPUP_RESTART_BUTTON_YES = "GL_LANG_FRUIT_POPUP_RESTART_BUTTON_YES";
e.FRUIT_POPUP_RESTART_BUTTON_NO = "GL_LANG_FRUIT_POPUP_RESTART_BUTTON_NO";
e.FRUIT_POPUP_BOMB_TITLE = "GL_LANG_FRUIT_POPUP_BOMB_TITLE";
e.FRUIT_POPUP_BOMB_BUTTON_YES = "GL_LANG_FRUIT_POPUP_BOMB_BUTTON_YES";
e.FRUIT_POPUP_BOMB_BUTTON_NO = "GL_LANG_FRUIT_POPUP_BOMB_BUTTON_NO";
e.FRUIT_POPUP_SHAKE_TITLE = "GL_LANG_FRUIT_POPUP_SHAKE_TITLE";
e.FRUIT_POPUP_SHAKE_BUTTON_YES = "GL_LANG_FRUIT_POPUP_SHAKE_BUTTON_YES";
e.FRUIT_POPUP_SHAKE_BUTTON_NO = "GL_LANG_FRUIT_POPUP_SHAKE_BUTTON_NO";
return e;
}();
n.default = i;
cc._RF.pop();
}, {} ],
GLLastEnteredGameOnTopCtrl: [ function(e, t, n) {
"use strict";
cc._RF.push(t, "ee5495XhtZN1ZFblorf76/B", "GLLastEnteredGameOnTopCtrl");
Object.defineProperty(n, "__esModule", {
value: !0
});
var i = function() {
function e() {
this._featureName = "GLLastEnteredGameOnTop";
}
e.getInstance = function() {
null == this._instance && (this._instance = new e());
return this._instance;
};
e.prototype.isOpen = function() {
return GL.Game.IsFeatureOpen(this._featureName);
};
e.prototype.onEnterGame = function(e) {
this.checkRecentGameIsListFirst(e) || this.reSortGameList(e);
};
e.prototype.checkRecentGameIsListFirst = function(e) {
var t;
if (!(null === (t = GL.gamelobby) || void 0 === t ? void 0 : t.getStorageValue)) return !1;
var n = GL.gamelobby.getStorageValue("GL_SortedGameList", []);
return null != n && 0 != n.length && n[0] == e;
};
e.prototype.reSortGameList = function(e) {
var t, n;
if ((null === (t = GL.gamelobby) || void 0 === t ? void 0 : t.getStorageValue) && (null === (n = GL.gamelobby) || void 0 === n ? void 0 : n.setStorageValue)) {
var i = GL.gamelobby.getStorageValue("GL_SortedGameList", []);
if (null != i && 0 != i.length) {
var o = i.indexOf(e);
if (-1 != o) {
i.splice(o, 1);
i = [ e ].concat(i);
GL.gamelobby.setStorageValue("GL_SortedGameList", i);
}
}
}
};
e._instance = null;
return e;
}();
n.default = i;
cc._RF.pop();
}, {} ],
GLMath: [ function(e, t) {
"use strict";
cc._RF.push(t, "9370d2m5SlGGLuTJEK0jhnb", "GLMath");
var n, i = this && this.__assign || function() {
return (i = Object.assign || function(e) {
for (var t, n = 1, i = arguments.length; n < i; n++) {
t = arguments[n];
for (var o in t) Object.prototype.hasOwnProperty.call(t, o) && (e[o] = t[o]);
}
return e;
}).apply(this, arguments);
}, o = this && this.__read || function(e, t) {
var n = "function" == typeof Symbol && e[Symbol.iterator];
if (!n) return e;
var i, o, a = n.call(e), r = [];
try {
for (;(void 0 === t || t-- > 0) && !(i = a.next()).done; ) r.push(i.value);
} catch (e) {
o = {
error: e
};
} finally {
try {
i && !i.done && (n = a.return) && n.call(a);
} finally {
if (o) throw o.error;
}
}
return r;
}, a = this && this.__spread || function() {
for (var e = [], t = 0; t < arguments.length; t++) e = e.concat(o(arguments[t]));
return e;
}, r = this && this.__values || function(e) {
var t = "function" == typeof Symbol && Symbol.iterator, n = t && e[t], i = 0;
if (n) return n.call(e);
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
(function(e) {
(function(e) {
(function(e) {
e.randomSortList = function(e) {
for (var t, n = a(e), i = 0; i < n.length; i++) {
var r = Math.floor(Math.random() * n.length);
r !== i && (t = o([ n[r], n[i] ], 2), n[i] = t[0], n[r] = t[1]);
}
return n;
};
e.randomSortListInPlace = function(e) {
for (var t, n = 0; n < e.length; n++) {
var i = Math.floor(Math.random() * e.length);
i !== n && (t = o([ e[i], e[n] ], 2), e[n] = t[0], e[i] = t[1]);
}
};
e.randValueFromList = function(e) {
if (!e || 0 === e.length) throw new Error("List cannot be null or empty.");
return e[Math.floor(Math.random() * e.length)];
};
e.randomFromList = function(e, n) {
if (e.length < n) throw new Error("collectCount=" + n + " is larger than list.count=" + e.length);
return t(e.length, n).map(function(t) {
return e[t];
});
};
function t(e, t) {
for (var n = [], i = function() {
var t = Math.floor(Math.random() * e);
n.forEach(function(e) {
t >= e && t++;
});
n.push(t);
n.sort(function(e, t) {
return e - t;
});
}, o = 0; o < t; o++) i();
return n;
}
e.randomDistinctInts = t;
e.randomKeysFromDictionary = function(e, n) {
var i = Array.from(e.keys());
return t(i.length, n).map(function(e) {
return i[e];
});
};
e.randomKeyFromRatioDict = function(e) {
var t, n, i = Array.from(e.values()).reduce(function(e, t) {
return e + t;
}, 0), a = Math.random() * i;
try {
for (var s = r(e.entries()), l = s.next(); !l.done; l = s.next()) {
var c = o(l.value, 2), u = c[0];
if ((a -= c[1]) < 0) return u;
}
} catch (e) {
t = {
error: e
};
} finally {
try {
l && !l.done && (n = s.return) && n.call(s);
} finally {
if (t) throw t.error;
}
}
throw new Error("Invalid ratio dictionary.");
};
e.randomBoolLessRatio = function(e) {
return 100 * Math.random() < e;
};
e.randomByRate = function(e) {
var t, n, i, a, s = 0;
try {
for (var l = r(e.values()), c = l.next(); !c.done; c = l.next()) (f = c.value) > 0 && (s += f);
} catch (e) {
t = {
error: e
};
} finally {
try {
c && !c.done && (n = l.return) && n.call(l);
} finally {
if (t) throw t.error;
}
}
var u = Math.random() * s, _ = 0;
try {
for (var d = r(e.entries()), h = d.next(); !h.done; h = d.next()) {
var f, p = o(h.value, 2), g = p[0];
if ((_ += f = p[1]) > u) return g;
}
} catch (e) {
i = {
error: e
};
} finally {
try {
h && !h.done && (a = d.return) && a.call(d);
} finally {
if (i) throw i.error;
}
}
};
})(e.Random || (e.Random = {}));
})(e.MathGL || (e.MathGL = {}));
})(n || (n = {}));
window.GL = i(i({}, window.GL), n);
cc._RF.pop();
}, {} ],
GLMultiLangLabel: [ function(e, t, n) {
"use strict";
cc._RF.push(t, "5cc41ubjbdFr5CfL4kKeVJf", "GLMultiLangLabel");
var i, o = this && this.__extends || (i = function(e, t) {
return (i = Object.setPrototypeOf || {
__proto__: []
} instanceof Array && function(e, t) {
e.__proto__ = t;
} || function(e, t) {
for (var n in t) Object.prototype.hasOwnProperty.call(t, n) && (e[n] = t[n]);
})(e, t);
}, function(e, t) {
i(e, t);
function n() {
this.constructor = e;
}
e.prototype = null === t ? Object.create(t) : (n.prototype = t.prototype, new n());
}), a = this && this.__decorate || function(e, t, n, i) {
var o, a = arguments.length, r = a < 3 ? t : null === i ? i = Object.getOwnPropertyDescriptor(t, n) : i;
if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) r = Reflect.decorate(e, t, n, i); else for (var s = e.length - 1; s >= 0; s--) (o = e[s]) && (r = (a < 3 ? o(r) : a > 3 ? o(t, n, r) : o(t, n)) || r);
return a > 3 && r && Object.defineProperty(t, n, r), r;
};
Object.defineProperty(n, "__esModule", {
value: !0
});
var r = e("./GLMultiLangManager"), s = e("../config/GLLangFontDefine"), l = cc._decorator, c = l.ccclass, u = (l.property, 
function(e) {
o(t, e);
function t() {
var t = null !== e && e.apply(this, arguments) || this;
t.targetLabel = null;
t.current = "";
t.hasLoad = !1;
return t;
}
t.prototype.onLoad = function() {
this.hasLoad || (this.targetLabel = this.node.getComponent(cc.Label));
this.hasLoad = !0;
if (null != this.targetLabel) {
this.current = this.targetLabel.string;
this.updateString();
}
};
t.prototype.update = function() {
null != this.targetLabel && this.targetLabel.string !== this.current && this.updateString();
};
t.prototype.updateString = function() {
this.checkLoad();
if (null != this.targetLabel) {
this.updateFont();
r.default.getInstance().getCurrentLanguage();
"" != this.targetLabel.string && (this.targetLabel.string = r.default.getInstance().getString(this.targetLabel.string));
this.current = this.targetLabel.string;
this.targetLabel.cacheMode = cc.Label.CacheMode.NONE;
}
};
t.prototype.updateFont = function() {
var e = this, t = r.default.getInstance().getCurrentLanguage(), n = null != s.GLLangFontDefine[t] ? s.GLLangFontDefine[t] : s.GLLangFontDefine.default;
if (null != n) if ("" == n) {
this.targetLabel.font = null;
this.targetLabel.fontFamily = "Arial";
} else r.default.getInstance().getFont(n).then(function(t) {
null != t && null != e.targetLabel && (e.targetLabel.font = t);
});
};
t.prototype.checkLoad = function() {
this.hasLoad || (this.targetLabel = this.node.getComponent(cc.Label));
};
t.prototype.updateStringExt = function(e) {
this.checkLoad();
if (null != this.targetLabel && 0 != e.length) {
for (var t = "", n = 0; n < e.length; n++) "" != e[n] && (t += r.default.getInstance().getString(e[n]));
this.updateFont();
var i = r.default.getInstance().getCurrentLanguage();
i != r.LangType.ar && i != r.LangType.he && i != r.LangType.km || (this.targetLabel.cacheMode = cc.Label.CacheMode.NONE);
this.targetLabel.string = t;
this.current = this.targetLabel.string;
}
};
return a([ c ], t);
}(cc.Component));
n.default = u;
window._GLHallClassMap_ || (window._GLHallClassMap_ = {});
window._GLHallClassMap_.GLMultiLangLabel = new u();
cc._RF.pop();
}, {
"../config/GLLangFontDefine": "GLLangFontDefine",
"./GLMultiLangManager": "GLMultiLangManager"
} ],
GLMultiLangManager: [ function(e, t, n) {
"use strict";
cc._RF.push(t, "6aa371aAEpD+4u5d0QEZu56", "GLMultiLangManager");
var i = this && this.__awaiter || function(e, t, n, i) {
return new (n || (n = Promise))(function(o, a) {
function r(e) {
try {
l(i.next(e));
} catch (e) {
a(e);
}
}
function s(e) {
try {
l(i.throw(e));
} catch (e) {
a(e);
}
}
function l(e) {
e.done ? o(e.value) : (t = e.value, t instanceof n ? t : new n(function(e) {
e(t);
})).then(r, s);
var t;
}
l((i = i.apply(e, t || [])).next());
});
}, o = this && this.__generator || function(e, t) {
var n, i, o, a, r = {
label: 0,
sent: function() {
if (1 & o[0]) throw o[1];
return o[1];
},
trys: [],
ops: []
};
return a = {
next: s(0),
throw: s(1),
return: s(2)
}, "function" == typeof Symbol && (a[Symbol.iterator] = function() {
return this;
}), a;
function s(e) {
return function(t) {
return l([ e, t ]);
};
}
function l(a) {
if (n) throw new TypeError("Generator is already executing.");
for (;r; ) try {
if (n = 1, i && (o = 2 & a[0] ? i.return : a[0] ? i.throw || ((o = i.return) && o.call(i), 
0) : i.next) && !(o = o.call(i, a[1])).done) return o;
(i = 0, o) && (a = [ 2 & a[0], o.value ]);
switch (a[0]) {
case 0:
case 1:
o = a;
break;

case 4:
r.label++;
return {
value: a[1],
done: !1
};

case 5:
r.label++;
i = a[1];
a = [ 0 ];
continue;

case 7:
a = r.ops.pop();
r.trys.pop();
continue;

default:
if (!(o = r.trys, o = o.length > 0 && o[o.length - 1]) && (6 === a[0] || 2 === a[0])) {
r = 0;
continue;
}
if (3 === a[0] && (!o || a[1] > o[0] && a[1] < o[3])) {
r.label = a[1];
break;
}
if (6 === a[0] && r.label < o[1]) {
r.label = o[1];
o = a;
break;
}
if (o && r.label < o[2]) {
r.label = o[2];
r.ops.push(a);
break;
}
o[2] && r.ops.pop();
r.trys.pop();
continue;
}
a = t.call(e, r);
} catch (e) {
a = [ 6, e ];
i = 0;
} finally {
n = o = 0;
}
if (5 & a[0]) throw a[1];
return {
value: a[0] ? a[1] : void 0,
done: !0
};
}
};
Object.defineProperty(n, "__esModule", {
value: !0
});
n.LangType = void 0;
var a, r = e("./GL_LANG_EN_US");
(function(e) {
e.en = "EN_US";
e.ar = "AR";
e.he = "HE";
e.km = "KM";
})(a = n.LangType || (n.LangType = {}));
var s = [ "ZH_CN", "ZH_HK", "ZH_TW", "JA" ], l = a.en, c = function() {
function e() {
this.data = new Map();
this.cachedLang = "";
this.langHasCached = !1;
}
e.getInstance = function() {
null == this._instance && (this._instance = new e());
return this._instance;
};
e.prototype.init = function() {
return i(this, void 0, void 0, function() {
var e = this;
return o(this, function(t) {
switch (t.label) {
case 0:
this.data.clear();
return [ 4, this.load("resource/lang/lang", cc.JsonAsset).then(function(t) {
if (null != t && null != t.json) for (var n in t.json) e.data.set(n, t.json[n]);
}) ];

case 1:
t.sent();
return [ 2 ];
}
});
});
};
e.prototype.load = function(e, t) {
return i(this, void 0, void 0, function() {
return o(this, function() {
return [ 2, new Promise(function(n) {
var i = window.GL, o = cc.assetManager.getBundle(i.Const.HALL_BUNDLE_NAME);
o ? o.load(e, t, function(e, t) {
if (e) {
console.warn(e);
n(null);
} else n(t);
}) : n(null);
}) ];
});
});
};
e.prototype.clearCacheFlag = function() {
this.langHasCached = !1;
};
e.prototype.getCurrentLanguage = function() {
var e, t;
if (this.langHasCached) return this.cachedLang;
var n = window.GL;
if (null === (e = n.gamelobby) || void 0 === e ? void 0 : e.getSystemLanguage) {
var i = null === (t = n.gamelobby) || void 0 === t ? void 0 : t.getSystemLanguage();
if ("" != i && -1 == s.indexOf(i)) {
this.cachedLang = i;
this.langHasCached = !0;
return this.cachedLang;
}
}
this.cachedLang = l;
this.langHasCached = !0;
return this.cachedLang;
};
e.prototype.getString = function(e) {
var t;
if (null == e || "" == e) return "";
if (!e.startsWith("GL_LANG_", 0)) return e;
if (this.data.has(e)) {
var n = this.data.get(e), i = this.getCurrentLanguage();
if (null != n[i]) return n[i];
if (null != n[l]) return n[l];
}
return null !== (t = r.GL_LANG_EN_US[e]) && void 0 !== t ? t : e;
};
e.prototype.getFont = function(e) {
return i(this, void 0, Promise, function() {
var t, n = this;
return o(this, function() {
t = "resource/font/" + e;
return [ 2, new Promise(function(e) {
n.load(t, cc.Font).then(function(t) {
e(t);
}).catch(function() {
e(null);
});
}) ];
});
});
};
e._instance = null;
return e;
}();
n.default = c;
cc._RF.pop();
}, {
"./GL_LANG_EN_US": "GL_LANG_EN_US"
} ],
GLNet: [ function(e, t) {
"use strict";
cc._RF.push(t, "8c3a3mWZxhMKpcbaoVEdVPP", "GLNet");
var n, i = this && this.__assign || function() {
return (i = Object.assign || function(e) {
for (var t, n = 1, i = arguments.length; n < i; n++) {
t = arguments[n];
for (var o in t) Object.prototype.hasOwnProperty.call(t, o) && (e[o] = t[o]);
}
return e;
}).apply(this, arguments);
};
(function(e) {
(function(e) {
(e.Http || (e.Http = {})).Get = function(e, t, n) {
void 0 === t && (t = "");
void 0 === n && (n = 5e3);
return new Promise(function(i, o) {
var a = new XMLHttpRequest();
a.open("GET", e, !0);
a.responseType = t;
a.timeout = n;
a.onload = function() {
a.status >= 200 && a.status < 300 ? i(a.response) : o(new Error("Request failed with status " + a.status));
};
a.onerror = function() {
o(new Error("Network error"));
};
a.ontimeout = function() {
o(new Error("Request timed out"));
};
a.send();
});
};
})(e.Net || (e.Net = {}));
})(n || (n = {}));
window.GL = i(i({}, window.GL), n);
cc._RF.pop();
}, {} ],
GLPopupButtonComponent: [ function(e, t, n) {
"use strict";
cc._RF.push(t, "c3d2aad60pLPJmYcWCcxDe6", "GLPopupButtonComponent");
var i, o = this && this.__extends || (i = function(e, t) {
return (i = Object.setPrototypeOf || {
__proto__: []
} instanceof Array && function(e, t) {
e.__proto__ = t;
} || function(e, t) {
for (var n in t) Object.prototype.hasOwnProperty.call(t, n) && (e[n] = t[n]);
})(e, t);
}, function(e, t) {
i(e, t);
function n() {
this.constructor = e;
}
e.prototype = null === t ? Object.create(t) : (n.prototype = t.prototype, new n());
}), a = this && this.__decorate || function(e, t, n, i) {
var o, a = arguments.length, r = a < 3 ? t : null === i ? i = Object.getOwnPropertyDescriptor(t, n) : i;
if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) r = Reflect.decorate(e, t, n, i); else for (var s = e.length - 1; s >= 0; s--) (o = e[s]) && (r = (a < 3 ? o(r) : a > 3 ? o(t, n, r) : o(t, n)) || r);
return a > 3 && r && Object.defineProperty(t, n, r), r;
};
Object.defineProperty(n, "__esModule", {
value: !0
});
var r = cc._decorator, s = r.ccclass, l = r.property, c = function(e) {
o(t, e);
function t() {
var t = null !== e && e.apply(this, arguments) || this;
t.background = null;
t.outline = null;
t.shadow = null;
t.label = null;
t.adIcon = null;
t.adNumLabel = null;
t.touchY = -15;
t.effectStr = 0;
return t;
}
t.prototype.onLoad = function() {
this.node.on(cc.Node.EventType.TOUCH_START, this._onTouchBegan, this);
this.node.on(cc.Node.EventType.TOUCH_END, this._onTouchEnded, this);
this.node.on(cc.Node.EventType.TOUCH_CANCEL, this._onTouchCancel, this);
};
t.prototype.onDestroy = function() {
this.node.off(cc.Node.EventType.TOUCH_START, this._onTouchBegan, this);
this.node.off(cc.Node.EventType.TOUCH_END, this._onTouchEnded, this);
this.node.off(cc.Node.EventType.TOUCH_CANCEL, this._onTouchCancel, this);
};
t.prototype._onTouchBegan = function() {
console.log("_onTouchBegan");
switch (this.effectStr) {
case GL.Popup.ButtonEffectStyle.playNormal1:
GL.Audio.playNormal1();
break;

case GL.Popup.ButtonEffectStyle.playNormal2:
GL.Audio.playNormal2();
}
this.outline.y = this.touchY;
this.label && (this.label.node.y = this.touchY);
};
t.prototype._onTouchEnded = function() {
console.log("_onTouchEnded");
this.outline.y = 0;
this.label && (this.label.node.y = 0);
};
t.prototype._onTouchCancel = function() {
console.log("_onTouchCancel");
this.outline.y = 0;
this.label && (this.label.node.y = 0);
};
t.prototype.setLabel = function(e) {
this.label && (this.label.string = e);
};
t.prototype.setEffectStr = function(e) {
this.effectStr = e;
};
t.prototype.setStyle = function(e, t, n, i) {
this.background.color = cc.color().fromHEX(e);
this.outline.color = cc.color().fromHEX(t);
this.shadow.color = cc.color().fromHEX(n);
this.label && (this.label.node.color = cc.color().fromHEX(i));
};
t.prototype.setAdNum = function(e) {
this.adNumLabel && (this.adNumLabel.string = e.toString());
this.adIcon.active = e <= 0;
this.adNumLabel.node.parent.active = e > 0;
};
a([ l(cc.Node) ], t.prototype, "background", void 0);
a([ l(cc.Node) ], t.prototype, "outline", void 0);
a([ l(cc.Node) ], t.prototype, "shadow", void 0);
a([ l(cc.Label) ], t.prototype, "label", void 0);
a([ l(cc.Node) ], t.prototype, "adIcon", void 0);
a([ l(cc.Label) ], t.prototype, "adNumLabel", void 0);
a([ l(cc.Integer) ], t.prototype, "touchY", void 0);
return a([ s ], t);
}(cc.Component);
n.default = c;
cc._RF.pop();
}, {} ],
GLPopupComponent: [ function(e, t, n) {
"use strict";
cc._RF.push(t, "37738o3nc9NHIQK3P+jpNiH", "GLPopupComponent");
var i, o = this && this.__extends || (i = function(e, t) {
return (i = Object.setPrototypeOf || {
__proto__: []
} instanceof Array && function(e, t) {
e.__proto__ = t;
} || function(e, t) {
for (var n in t) Object.prototype.hasOwnProperty.call(t, n) && (e[n] = t[n]);
})(e, t);
}, function(e, t) {
i(e, t);
function n() {
this.constructor = e;
}
e.prototype = null === t ? Object.create(t) : (n.prototype = t.prototype, new n());
}), a = this && this.__decorate || function(e, t, n, i) {
var o, a = arguments.length, r = a < 3 ? t : null === i ? i = Object.getOwnPropertyDescriptor(t, n) : i;
if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) r = Reflect.decorate(e, t, n, i); else for (var s = e.length - 1; s >= 0; s--) (o = e[s]) && (r = (a < 3 ? o(r) : a > 3 ? o(t, n, r) : o(t, n)) || r);
return a > 3 && r && Object.defineProperty(t, n, r), r;
};
Object.defineProperty(n, "__esModule", {
value: !0
});
n.GLPopupComponent = void 0;
var r = e("../../GLHallController"), s = e("./GLPopupButtonComponent"), l = cc._decorator, c = l.ccclass, u = l.property, _ = function(e) {
o(t, e);
function t() {
var t = null !== e && e.apply(this, arguments) || this;
t.hideCloseFunc = null;
t.internalIcons = [];
t.icon = null;
t.titleLabel = null;
t.contentLabel = null;
t.buttonContainer = null;
t.closeBtn = null;
t.buttonTemplate = null;
return t;
}
t.prototype.start = function() {
var e = this.node.getChildByName("Content");
if (e) {
var t = e.getChildByName("bg"), n = t.getChildByName("rootNode");
n.getComponent(cc.Layout).updateLayout();
var i = n.getContentSize().height - 1371.6 + 485;
cc.tween(t).to(.35, {
y: i
}, {
easing: cc.easing.backOut
}).start();
var o = n.getChildByName("IconContainer");
if (o) {
o.scale = 0;
cc.tween(o).delay(.2).to(.2, {
scale: 1
}, {
easing: cc.easing.backOut
}).start();
}
var a = n.getChildByName("Content");
if (a) {
a.opacity = 0;
cc.tween(a).delay(.13).to(.2, {
opacity: 255
}).start();
}
if (this.buttonContainer) {
this.buttonContainer.opacity = 0;
cc.tween(this.buttonContainer).delay(.13).to(.2, {
opacity: 255
}).start();
}
}
};
t.prototype.setIcon = function(e) {
e instanceof cc.SpriteFrame || (e = this.internalIcons[e]);
if (e) {
this.icon.spriteFrame = e;
this.icon.node.parent.active = !0;
} else {
cc.warn("Icon not found: " + e);
this.icon.node.parent.active = !1;
}
};
t.prototype.setTitle = function(e) {
this.titleLabel.string = e;
};
t.prototype.setContent = function(e) {
this.contentLabel.string = e;
this.contentLabel.node.active = "" != e;
};
t.prototype.setCloseBtn = function(e, t) {
e && (this.closeBtn.active = !1);
t && (this.hideCloseFunc = t);
};
t.prototype.addButton = function(e, t, n, i, o) {
var a = this, r = cc.instantiate(this.buttonTemplate);
r.active = !0;
var l = r.getComponent(s.default);
l.setLabel(e);
l.setEffectStr(n);
"string" == typeof t && (t = GL.Popup.ButtonStyleConfigs[t]);
var c = t.backgroundColor, u = t.outlineColor, _ = t.shadowColor, d = t.labelColor;
null != o && l.setAdNum(o);
l.setStyle(c, u, _, d);
this.buttonContainer.addChild(r);
r.on("click", function() {
if ("function" == typeof i) i(a); else switch (i) {
case GL.Popup.ButtonActionInternal.Close:
a.node.destroy();
break;

default:
cc.warn("Unknown action: " + i);
}
});
};
t.prototype.closeHandler = function() {
GL.Audio.playNormal2();
r.default.getInstance().unScheduleBannerUpdate();
this.hideCloseFunc && this.hideCloseFunc();
cc.isValid(this.node) && this.node.destroy();
};
a([ u([ cc.SpriteFrame ]) ], t.prototype, "internalIcons", void 0);
a([ u(cc.Sprite) ], t.prototype, "icon", void 0);
a([ u(cc.Label) ], t.prototype, "titleLabel", void 0);
a([ u(cc.Label) ], t.prototype, "contentLabel", void 0);
a([ u(cc.Node) ], t.prototype, "buttonContainer", void 0);
a([ u(cc.Node) ], t.prototype, "closeBtn", void 0);
a([ u(cc.Prefab) ], t.prototype, "buttonTemplate", void 0);
return a([ c ], t);
}(cc.Component);
n.GLPopupComponent = _;
cc._RF.pop();
}, {
"../../GLHallController": "GLHallController",
"./GLPopupButtonComponent": "GLPopupButtonComponent"
} ],
GLPopup: [ function(e, t) {
"use strict";
cc._RF.push(t, "ec74373fFRMmJRa2PdugTGb", "GLPopup");
var n, i = this && this.__assign || function() {
return (i = Object.assign || function(e) {
for (var t, n = 1, i = arguments.length; n < i; n++) {
t = arguments[n];
for (var o in t) Object.prototype.hasOwnProperty.call(t, o) && (e[o] = t[o]);
}
return e;
}).apply(this, arguments);
};
(function(e) {
(function(e) {
(function(e) {
e[e.Close = 0] = "Close";
})(e.ButtonActionInternal || (e.ButtonActionInternal = {}));
(function(e) {
e.White = "White";
e.Blue = "Blue";
e.Purple = "Purple";
})(e.ButtonStyle || (e.ButtonStyle = {}));
(function(e) {
e[e.playNormal1 = 0] = "playNormal1";
e[e.playNormal2 = 1] = "playNormal2";
})(e.ButtonEffectStyle || (e.ButtonEffectStyle = {}));
(function(e) {
e[e.Restart = 0] = "Restart";
e[e.shuffle = 2] = "shuffle";
e[e.onlineHInt = 4] = "onlineHInt";
e[e.waterSort = 7] = "waterSort";
e[e.clock = 8] = "clock";
e[e.revive = 9] = "revive";
})(e.Icon || (e.Icon = {}));
e.ButtonStyleConfigs = {
White: {
backgroundColor: "#FFFFFF",
outlineColor: "#AAB7D0",
shadowColor: "#AAB7D0",
labelColor: "#6C789C"
},
Blue: {
backgroundColor: "#5285F6",
outlineColor: "#5285F6",
shadowColor: "#4166C6",
labelColor: "#FFFFFF"
},
Purple: {
backgroundColor: "#7e60f6",
outlineColor: "#7e60f6",
shadowColor: "#5c41ce",
labelColor: "#FFFFFF"
}
};
})(e.Popup || (e.Popup = {}));
})(n || (n = {}));
window.GL = i(i({}, window.GL), n);
cc._RF.pop();
}, {} ],
GLResultViewFeature: [ function(e, t, n) {
"use strict";
cc._RF.push(t, "86e96zOK1BLNbbgrRJpSllP", "GLResultViewFeature");
Object.defineProperty(n, "__esModule", {
value: !0
});
n.GLResultViewFeature = void 0;
var i = function() {
function e() {}
e.isOpenBlockView = function() {
return GL.Game.IsFeatureOpen("GLResultView");
};
e.isOpenBackGame = function() {
return GL.Game.IsFeatureOpen("GLResultView7");
};
e.isOpenStartScene = function() {
return GL.Game.IsFeatureOpen("GLResultView6");
};
e.isOpenJingZiQiDraw = function() {
return GL.Game.IsFeatureOpen("gl_jingZiQiDraw");
};
e.isOpenJingZiQiWin = function() {
return GL.Game.IsFeatureOpen("gl_jingZiQiWin");
};
e.isRemoveResultViewBanner = function() {
return GL.Game.IsFeatureOpen("MiniGameRemoveResultViewBanner");
};
e.isOpenSettleScoreRoll = function() {
return GL.Game.IsFeatureOpen("FruitSettleScoreRoll");
};
e.isOpenFruitNewSettle = function() {
return GL.Game.IsFeatureOpen("FruitNewSettleView");
};
return e;
}();
n.GLResultViewFeature = i;
window._GLHallClassMap_ || (window._GLHallClassMap_ = {});
window._GLHallClassMap_.GLResultViewFeature = i;
cc._RF.pop();
}, {} ],
GLSaved: [ function(e, t) {
"use strict";
cc._RF.push(t, "8be23gcwIxGw67kAjIDACKM", "GLSaved");
var n, i = this && this.__assign || function() {
return (i = Object.assign || function(e) {
for (var t, n = 1, i = arguments.length; n < i; n++) {
t = arguments[n];
for (var o in t) Object.prototype.hasOwnProperty.call(t, o) && (e[o] = t[o]);
}
return e;
}).apply(this, arguments);
};
(function(e) {
(function(e) {
e.Get = function(e) {
var t = "GL_Saved_" + e, n = cc.sys.localStorage.getItem(t);
if (!n) return null;
if ("string" != typeof n) return n;
try {
return JSON.parse(n);
} catch (e) {
return n;
}
};
e.Set = function(e, t) {
var n = "GL_Saved_" + e;
"string" == typeof t ? cc.sys.localStorage.setItem(n, t) : cc.sys.localStorage.setItem(n, JSON.stringify(t));
};
e.Remove = function(e) {
var t = "GL_Saved_" + e;
cc.sys.localStorage.removeItem(t);
};
})(e.Saved || (e.Saved = {}));
})(n || (n = {}));
window.GL = i(i({}, window.GL), n);
cc._RF.pop();
}, {} ],
GLShowAdsPopupByCountCtrl: [ function(e, t, n) {
"use strict";
cc._RF.push(t, "9b212Dr+BdO/4yolVadORh3", "GLShowAdsPopupByCountCtrl");
Object.defineProperty(n, "__esModule", {
value: !0
});
var i = function() {
function e() {
this._featureName = "GLShowAdsPopupByCount";
this._featureSavedKey = "GLShowAdsPopupByCountCtrlSaveKey";
}
e.getInstance = function() {
null == e._instance && (e._instance = new e());
return e._instance;
};
e.prototype.isOpen = function() {
var e = GL.Game.IsFeatureOpen(this._featureName);
console.log("wztest 激励广告二级弹窗特性 是否开启 ", GL.Game.IsFeatureOpen(this._featureName));
return e;
};
e.prototype.getFeaturePara = function() {
var e = GL.Game.getFeatureKeyParam(this._featureName, "needPopupNum");
console.log("wztest GLShowAdsPopupByCountCtrl 激励广告二级弹窗特性  needPopupNum =", e);
return e;
};
e.prototype.checkNoNeedPopup = function() {
var e = GL.Game.getFeatureKeyParam(this._featureName, "needPopupNum"), t = cc.sys.localStorage.getItem(this._featureSavedKey);
return (t ? parseInt(t) : 0) >= e;
};
e.prototype.recordPopUpNumber = function() {
var e = cc.sys.localStorage.getItem(this._featureSavedKey), t = e ? parseInt(e) : 0;
t++;
cc.sys.localStorage.setItem(this._featureSavedKey, t.toString());
};
e._instance = null;
return e;
}();
n.default = i;
window._GLHallClassMap_ || (window._GLHallClassMap_ = {});
window._GLHallClassMap_.GLShowAdsPopupByCountCtrl = i.getInstance();
cc._RF.pop();
}, {} ],
GLShowInsertAdsBySecondsCtrl: [ function(e, t, n) {
"use strict";
cc._RF.push(t, "517ef82g3hAPJsm+1JRRah9", "GLShowInsertAdsBySecondsCtrl");
Object.defineProperty(n, "__esModule", {
value: !0
});
var i = e("../../traits/GLGameAdStrategyOptimizeTraitCtrl"), o = function() {
function e() {
this.showAdsIntervalConfigTime = null;
this.lastSavedShowAdsTime = null;
this._featureName = "GLShowInsertAdsBySeconds";
this._featureSavedKey = "GLShowInsertAdsBySecondsCtrlSaveKey";
this._isInit = !1;
}
e.getInstance = function() {
null == e._instance && (e._instance = new e());
return e._instance;
};
e.prototype.isOpen = function() {
var t = GL.Game.IsFeatureOpen(this._featureName);
console.log("wztest GLShowInsertAdsBySecondsCtrl 插屏广告CD间隔50秒 是否开启 ", GL.Game.IsFeatureOpen(this._featureName));
if (i.default.getInstance().isOpen() && i.default.getInstance().checkNeedLimitAdTimeControl()) {
console.log("wztest GLShowInsertAdsBySecondsCtrl 插屏广告CD间隔50秒，受GLGameAdStrategyOptimize影响，特性不生效");
return !1;
}
return t && 50 == e.getInstance().getFeaturePara();
};
e.prototype.getFeaturePara = function() {
null == this.showAdsIntervalConfigTime && (this.showAdsIntervalConfigTime = GL.Game.getFeatureKeyParam(this._featureName, "offsetSeconds"));
console.log("wztest GLShowInsertAdsBySecondsCtrl  播放广告间隔时间 ", this.showAdsIntervalConfigTime);
return this.showAdsIntervalConfigTime ? this.showAdsIntervalConfigTime : 0;
};
e._instance = null;
return e;
}();
n.default = o;
cc._RF.pop();
}, {
"../../traits/GLGameAdStrategyOptimizeTraitCtrl": "GLGameAdStrategyOptimizeTraitCtrl"
} ],
GLSubmit: [ function(e, t) {
"use strict";
cc._RF.push(t, "2af289Wbn1OpZ5BXLExePc3", "GLSubmit");
var n, i = this && this.__assign || function() {
return (i = Object.assign || function(e) {
for (var t, n = 1, i = arguments.length; n < i; n++) {
t = arguments[n];
for (var o in t) Object.prototype.hasOwnProperty.call(t, o) && (e[o] = t[o]);
}
return e;
}).apply(this, arguments);
};
(function(e) {
(function(e) {
var t;
(function(e) {
e.gameEnd = "usr_data_game_end";
e.gameDataChange = "usr_data_migration_subgame_info";
})(t = e.submitType || (e.submitType = {}));
e.sendGameEndData = function(e) {
var n, i, o = window.GL, a = "minigame";
if (null === (n = null == o ? void 0 : o.gamelobby) || void 0 === n ? void 0 : n.isChapterFusionMode()) {
a = "travel";
var r = null === (i = o.gamelobby) || void 0 === i ? void 0 : i.getStorageValue("ChapterMiniGameFusionEntrance", "");
r && "" != r && (e.sub_entrance = r);
}
e.entrance = a;
cc.systemEvent.emit("gameLobby_submit", {
eventType: t.gameEnd,
data: e
});
};
e.sendGameDataChanged = function(e, n) {
var i, o, a, r = window.GL, s = "minigame";
if (null === (i = null == r ? void 0 : r.gamelobby) || void 0 === i ? void 0 : i.isChapterFusionMode()) {
s = "travel";
var l = null === (o = r.gamelobby) || void 0 === o ? void 0 : o.getStorageValue("ChapterMiniGameFusionEntrance", "");
l && "" != l && (n.sub_entrance = l);
}
n.entrance = s;
var c = null === (a = null == r ? void 0 : r.gamelobby) || void 0 === a ? void 0 : a.isVietnam;
"function" == typeof c && c() && cc.systemEvent.emit("gameLobby_submit", {
eventType: t.gameDataChange,
data: {
game: e,
data: n
}
});
};
e.sendGameData = function(e, t) {
var n, i, o = window.GL, a = "minigame";
if (null === (n = null == o ? void 0 : o.gamelobby) || void 0 === n ? void 0 : n.isChapterFusionMode()) {
a = "travel";
var r = null === (i = o.gamelobby) || void 0 === i ? void 0 : i.getStorageValue("ChapterMiniGameFusionEntrance", "");
r && "" != r && (t.sub_entrance = r);
}
t.entrance = a;
cc.systemEvent.emit("gameLobby_submit", {
eventType: e,
data: t
});
};
})(e.Submit || (e.Submit = {}));
})(n || (n = {}));
window.GL = i(i({}, window.GL), n);
cc._RF.pop();
}, {} ],
GLVibration: [ function(e, t) {
"use strict";
cc._RF.push(t, "6badepDDANF/6I9BmFzwF2g", "GLVibration");
var n, i = this && this.__assign || function() {
return (i = Object.assign || function(e) {
for (var t, n = 1, i = arguments.length; n < i; n++) {
t = arguments[n];
for (var o in t) Object.prototype.hasOwnProperty.call(t, o) && (e[o] = t[o]);
}
return e;
}).apply(this, arguments);
};
(function(e) {
(function(e) {
var t = !0;
e.setVibrationSwitch = function(e) {
t = e;
};
e.getVibrationSwitch = function() {
return t;
};
e.vibrate = function() {};
})(e.Vibration || (e.Vibration = {}));
})(n || (n = {}));
window.GL = i(i({}, window.GL), n);
cc._RF.pop();
}, {} ],
GLWindow: [ function(e, t, n) {
"use strict";
cc._RF.push(t, "c6cc8YAgDpP9L2DdD7PW/5G", "GLWindow");
var i = this && this.__assign || function() {
return (i = Object.assign || function(e) {
for (var t, n = 1, i = arguments.length; n < i; n++) {
t = arguments[n];
for (var o in t) Object.prototype.hasOwnProperty.call(t, o) && (e[o] = t[o]);
}
return e;
}).apply(this, arguments);
};
Object.defineProperty(n, "__esModule", {
value: !0
});
var o, a = e("../../hall/GLHallController");
(function(e) {
(e.Window || (e.Window = {})).Open = function(e, t) {
var n = a.default.getInstance().getSceneParentNode();
switch (!0) {
case "string" == typeof e && "string" == typeof t:
return new Promise(function() {
var i = cc.assetManager.getBundle(t);
i ? i.load(e, cc.Prefab, function(t, i) {
if (t) cc.error("Failed to load prefab " + e + ": " + t); else if (n && n.isValid) {
var o = cc.instantiate(i);
n.addChild(o, 1e3);
}
}) : cc.error("Bundle " + t + " not found");
});

case e instanceof cc.Node:
if (n && n.isValid) {
n.addChild(e, 1e3);
return e;
}
cc.error("Invalid parameters for GL.UI.Window.Open");
break;

case e instanceof cc.Prefab:
if (n && n.isValid) {
var i = cc.instantiate(e);
n.addChild(i, 1e3);
return i;
}
cc.error("Invalid parameters for GL.UI.Window.Open");
break;

default:
cc.error("Invalid parameters for GL.UI.Window.Open");
}
};
})(o || (o = {}));
window.GL = i(i({}, window.GL), o);
cc._RF.pop();
}, {
"../../hall/GLHallController": "GLHallController"
} ],
GL_ExtractDimension: [ function(e, t, n) {
"use strict";
cc._RF.push(t, "49650tuorZE6JRzV2c+sPKx", "GL_ExtractDimension");
var i = this && this.__assign || function() {
return (i = Object.assign || function(e) {
for (var t, n = 1, i = arguments.length; n < i; n++) {
t = arguments[n];
for (var o in t) Object.prototype.hasOwnProperty.call(t, o) && (e[o] = t[o]);
}
return e;
}).apply(this, arguments);
}, o = this && this.__awaiter || function(e, t, n, i) {
return new (n || (n = Promise))(function(o, a) {
function r(e) {
try {
l(i.next(e));
} catch (e) {
a(e);
}
}
function s(e) {
try {
l(i.throw(e));
} catch (e) {
a(e);
}
}
function l(e) {
e.done ? o(e.value) : (t = e.value, t instanceof n ? t : new n(function(e) {
e(t);
})).then(r, s);
var t;
}
l((i = i.apply(e, t || [])).next());
});
}, a = this && this.__generator || function(e, t) {
var n, i, o, a, r = {
label: 0,
sent: function() {
if (1 & o[0]) throw o[1];
return o[1];
},
trys: [],
ops: []
};
return a = {
next: s(0),
throw: s(1),
return: s(2)
}, "function" == typeof Symbol && (a[Symbol.iterator] = function() {
return this;
}), a;
function s(e) {
return function(t) {
return l([ e, t ]);
};
}
function l(a) {
if (n) throw new TypeError("Generator is already executing.");
for (;r; ) try {
if (n = 1, i && (o = 2 & a[0] ? i.return : a[0] ? i.throw || ((o = i.return) && o.call(i), 
0) : i.next) && !(o = o.call(i, a[1])).done) return o;
(i = 0, o) && (a = [ 2 & a[0], o.value ]);
switch (a[0]) {
case 0:
case 1:
o = a;
break;

case 4:
r.label++;
return {
value: a[1],
done: !1
};

case 5:
r.label++;
i = a[1];
a = [ 0 ];
continue;

case 7:
a = r.ops.pop();
r.trys.pop();
continue;

default:
if (!(o = r.trys, o = o.length > 0 && o[o.length - 1]) && (6 === a[0] || 2 === a[0])) {
r = 0;
continue;
}
if (3 === a[0] && (!o || a[1] > o[0] && a[1] < o[3])) {
r.label = a[1];
break;
}
if (6 === a[0] && r.label < o[1]) {
r.label = o[1];
o = a;
break;
}
if (o && r.label < o[2]) {
r.label = o[2];
r.ops.push(a);
break;
}
o[2] && r.ops.pop();
r.trys.pop();
continue;
}
a = t.call(e, r);
} catch (e) {
a = [ 6, e ];
i = 0;
} finally {
n = o = 0;
}
if (5 & a[0]) throw a[1];
return {
value: a[0] ? a[1] : void 0,
done: !0
};
}
}, r = this && this.__values || function(e) {
var t = "function" == typeof Symbol && Symbol.iterator, n = t && e[t], i = 0;
if (n) return n.call(e);
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
Object.defineProperty(n, "__esModule", {
value: !0
});
var s, l = e("./GL_ExtractFeature");
(function(e) {
(function(t) {
var n;
(function(e) {
e[e.HsWaterSort = 1] = "HsWaterSort";
e[e.HsBlockFill = 2] = "HsBlockFill";
e[e.HsMahjong = 3] = "HsMahjong";
e[e.HsOnet = 4] = "HsOnet";
e[e.HsFruit = 5] = "HsFruit";
})(n = t.configKey || (t.configKey = {}));
var i = function() {
function t() {}
t.saveData = function(e, t) {
t && cc.sys.localStorage.setItem("GL_extract" + e, JSON.stringify(t));
};
t.getData = function(e) {
var t = cc.sys.localStorage.getItem("GL_extract" + e);
if (t) try {
return JSON.parse(t) || {};
} catch (e) {
return {};
}
return {};
};
t.getConfigData = function(t) {
var i = n[t], o = null;
e.ExtractTool.json_data && e.ExtractTool.json_data.forEach(function(e) {
e.Key == i.toString() && (o = e);
});
return o;
};
t.setIsDeletePatch1 = function(e, t) {
this.isDeletePatch1[e] = t;
};
t.getIsDeletePatch1 = function(e) {
return this.isDeletePatch1[e];
};
t.setIsDeletePatch4 = function(e, t) {
this.isDeletePatch4[e] = t;
};
t.getIsDeletePatch4 = function(e) {
return this.isDeletePatch4[e];
};
t.setCanUse = function(e, t) {
this.mChangeobj[e] = t;
};
t.getUseM = function(e) {
return this.mChangeobj[e] ? this.mChangeobj[e] : null;
};
t.setUpdateSubAbilityConfidenceAndValue = function(e, t) {
this.updateSubAbilityConfidenceAndValue[e] = t;
};
t.getUpdateSubAbilityConfidenceAndValue = function(e) {
return this.updateSubAbilityConfidenceAndValue[e];
};
t.setDimensionData = function(e, t) {
this.dimensionData[e] = t;
};
t.getUseDimensionData = function(e) {
return this.dimensionData[e] ? this.dimensionData[e] : null;
};
t.getUseDimensionDataByKey = function(e, t) {
return this.dimensionData[e] ? this.dimensionData[e][t] : null;
};
t.setIsForceChangeDeathPos = function(e, t) {
this.isForceChangeDeathPos[e] = t;
};
t.getIsForceChangeDeathPos = function(e) {
return this.isForceChangeDeathPos[e];
};
t.setAllDirectReadWeights = function(e, t) {
this.allDirectReadWeights[e] = t;
};
t.getUseAllDirectReadWeights = function(e) {
return this.allDirectReadWeights[e] ? this.allDirectReadWeights[e] : null;
};
t.getUserAbilityValue = function(e) {
var t = this.getData(e);
return null == t ? void 0 : t.ru;
};
t.getEt = function(e, t) {
var n = this.getData(e), i = this.getConfigData(e);
if (i) if (n.subArr && 0 != n.subArr.length) {
this.checkFixedRUAndDU(e);
n = this.getData(e);
i.MaxDiffulty = this.getUseDimensionDataByKey(e, "maxDiffulty") || i.MaxDiffulty;
i.MinDiffulty = this.getUseDimensionDataByKey(e, "minDiffulty") || i.MinDiffulty;
var o = n.chooseIndex || 0, a = i.CapabilityTimeCoefficient || 1;
if (this.getUseM(e, a)) {
a = this.getUseM(e, a);
console.log("修改时间系数m配置为", a);
}
o >= n.subArr.length && (o = n.subArr.length - 1);
if (n.subArr[o]) {
o = Math.max(0, o);
var r = 400 == n.subArr[o].du ? n.ru : n.subArr[o].ru;
r = Math.max(r, i.MinDiffulty);
return (t = Math.max(t, i.MinDiffulty)) * t / r / a;
}
} else console.log("能力值更新失败"); else console.log("能力值更新失败");
};
t.UpdateCapability = function(e, t, n, i) {
var o = this.getData(e), a = this.getConfigData(e);
if (a) if (o.subArr) {
this.checkFixedRUAndDU(e);
o = this.getData(e);
a.MaxDiffulty = this.getUseDimensionDataByKey(e, "maxDiffulty") || a.MaxDiffulty;
a.MinDiffulty = this.getUseDimensionDataByKey(e, "minDiffulty") || a.MinDiffulty;
var r = a.MaxDiffulty - a.MinDiffulty, s = o.chooseIndex, l = o.subArr, c = a.CapabilityTimeCoefficient || 1;
if (this.getUseM(e, c)) {
c = this.getUseM(e, c);
console.log("修改时间系数m配置为", c);
}
s >= o.subArr.length && (s = o.subArr.length - 1);
var u = 400 == o.subArr[s].du ? o.ru : o.subArr[s].ru;
u = Math.max(u, a.MinDiffulty);
var _ = (t = Math.max(t, a.MinDiffulty)) * t / u / c, d = _ / n;
console.log("公式:r_T = E_t / A_t,E_t=" + _ + ",A_t=" + n + ",输出结果r_T=" + d);
var h = Math.log(d);
console.log("公式:k_r = Mathf.Log(r_T),r_T=" + d + ",输出结果k_r=" + h);
var f = Math.abs(1.25 - d);
console.log("公式:k_r = Mathf.Log(r_T),r_T=" + d + ",输出结果k_r=" + h);
var p = a.LevelCoefficient || 1, g = Math.log(i + 1) / Math.log(p);
console.log("公式:logValue = Mathf.Log(levelID + 1, levelCoefficient),logValue=" + g + ",levelID=" + i + ",levelCoefficient=" + p + ",输出结果logValue=" + g);
var m = Math.min(g, 10);
console.log("公式:minLogValue = Mathf.Min(logValue, 10f),logValue=" + g + ",输出结果minLogValue=" + m);
var G = r * h * (l[s].du / 350) * m;
console.log("公式:numerator = K_i * k_r * (D_ui[chosenIndex] / 350f) * minLogValue,K_i=" + r + ",k_r=" + h + ",D_ui[chosenIndex]=" + l[s].du + ",minLogValue=" + m + ",输出结果numerator=" + G);
var L = G / 10;
console.log("公式:numerator / 10f,numerator:" + G + ",输出结果fraction=" + L);
var y = l[s = Math.min(s, l.length - 1)].ru;
l[s].ru = Math.min(Math.max(y + L, .8 * y), a.MaxDiffulty - .2 * (a.MaxDiffulty - a.MinDiffulty));
l[s].ru = Math.max(l[s].ru, a.MinDiffulty);
console.log("更新能力值 期望时长:" + _ + ",实际时长:" + n + ",difficulty:" + t + ",r_q:" + u + ",m:" + c + ",levelID:" + i + ",levelCoefficient:" + p + ",logValue:" + g);
if (f > .75) {
l[s].du = Math.min(l[s].du + 20 * f, 350);
l[s].du = Math.max(l[s].du, 30);
} else l[s].du = Math.max(.6 * l[s].du, 30);
this.updateOverall(e, o);
} else console.log("能力值更新失败"); else console.log("能力值更新失败");
};
t.updateOverall = function(e, t) {
var n = this.getConfigData(e);
n.MaxDiffulty = this.getUseDimensionDataByKey(e, "maxDiffulty") || n.MaxDiffulty;
n.MinDiffulty = this.getUseDimensionDataByKey(e, "minDiffulty") || n.MinDiffulty;
for (var i = [], o = 0; o < t.subArr.length; o++) t.subArr[o].du != this.InitDu && i.push([ t.subArr[o].ru, t.subArr[o].du ]);
if (i.length > 0) {
var a = 0, r = 0;
for (o = 0; o < i.length; ++o) {
a += i[o][0] / i[o][1];
r += 1 / i[o][1];
}
t.ru = Math.max(a / r, n.MinDiffulty);
console.log("总能力值更新为:" + t.ru);
}
var s = [];
for (o = 0; o < t.subArr.length; o++) t.subArr[o].du != this.InitDu && s.push(t.subArr[o].du);
if (s.length > 0) {
var l = 0;
s.forEach(function(e) {
l += 1 / e;
});
t.du = Math.max(s.length / l, 30);
console.log("总置信度更新为:" + t.du);
}
this.saveData(e, t);
};
t.getLevelName = function(e, t) {
if (!e) {
console.error("没有传游戏表数据");
return t;
}
if (e.includes(t)) return t;
var n = function(e, t) {
for (var n = e.split("_"), i = t.split("_"), o = 0, a = 0; a < Math.min(n.length, i.length); a++) if (n[a] == i[a]) o += Number(Math.pow(10, n.length - a)); else if (Number(n[a]) && Number(i[a])) {
var r = Math.abs(Number(n[a]) - Number(i[a]));
o += Number(Math.pow(10, n.length - a) / (r + 1));
}
return o;
}, i = "", o = -1;
e.forEach(function(e) {
var a = n(t, e);
if (a > o) {
o = a;
i = e;
}
});
return i;
};
t.getYiBiHuaWeiDu = function(e, t, n, i) {
void 0 === n && (n = !1);
return o(this, void 0, void 0, function() {
var o, r, c, u;
return a(this, function(a) {
switch (a.label) {
case 0:
o = this.getNengLiWeiDu(e, t, n);
if (l.GLExtractFeature.isOpenBlockFillDifficultyUpgrade(e, i)) {
console.log("【一笔画难度提升】 满足升档条件 type:" + e + " 实际关卡:" + i + " 升档前能力值:" + o);
o = this.upgradeBlockFillTier(e, o, "实际关卡:" + i);
}
r = this.GetDimension(e);
c = o + "_" + r;
return (u = y(s.HsBlockFill)) ? [ 3, 2 ] : [ 4, x(s.HsBlockFill) ];

case 1:
a.sent();
u = y(s.HsBlockFill);
a.label = 2;

case 2:
return [ 2, c = this.getLevelName(u, c) ];
}
});
});
};
t.getMaJiangWeiDu = function(e, t, n, i, r) {
void 0 === n && (n = !1);
return o(this, void 0, void 0, function() {
var o, l, c, u, _, d;
return a(this, function(a) {
switch (a.label) {
case 0:
o = this.getNengLiWeiDu(e, t, n);
l = this.GetDimension(e);
c = this.getDeathLvMension(e, i, t, r);
u = this.GetDimension(e);
_ = o + "_" + l + "_" + c + "_" + u;
return (d = y(s.HsMahjong)) ? [ 3, 2 ] : [ 4, x(s.HsMahjong) ];

case 1:
a.sent();
d = y(s.HsMahjong);
a.label = 2;

case 2:
return [ 2, this.getLevelName(d, _) ];
}
});
});
};
t.getLianLianKan = function(e, t, n) {
void 0 === n && (n = !1);
return o(this, void 0, void 0, function() {
var i, o, r, l, c;
return a(this, function(a) {
switch (a.label) {
case 0:
i = this.getNengLiWeiDu(e, t, n);
o = this.GetDimension(e);
r = this.GetDimension(e);
l = i + "_" + o + "_" + r;
return (c = y(s.HsOnet)) ? [ 3, 2 ] : [ 4, x(s.HsOnet) ];

case 1:
a.sent();
c = y(s.HsOnet);
a.label = 2;

case 2:
return [ 2, this.getLevelName(c, l) ];
}
});
});
};
t.getWaterSort = function(e, t, n, i, r, c) {
void 0 === n && (n = !1);
return o(this, void 0, void 0, function() {
var o, u, _, d, h, f;
return a(this, function(a) {
switch (a.label) {
case 0:
o = this.getNengLiWeiDu(e, t, n);
if (c && l.GLExtractFeature.isOpenWaterLowLevelDowngrade(e, c)) {
console.log("【水排序】执行低关卡难度降档");
o = this.downgradeTierAndSync(e, o, "低关卡降档 实际关卡:" + c);
}
if (c && l.GLExtractFeature.isOpenWaterHighLevelDowngrade(e, c)) {
u = Math.abs(c) % 10;
console.log("【水排序】执行高关卡难度降档：reallyLevelID:", c, "尾号:", u);
if (2 === u || 4 === u || 6 === u || 8 === u) {
console.log("【水排序】执行高关卡难度降档");
o = this.downgradeTierAndSync(e, o, "高关卡降档 实际关卡:" + c + " 尾号:" + u);
}
}
_ = this.getDeathLvMension(e, i, t, r, c);
d = this.GetDimension(e);
h = o + "_" + _ + "_" + d;
return (f = y(s.HsWaterSort)) ? [ 3, 2 ] : [ 4, x(s.HsWaterSort) ];

case 1:
a.sent();
f = y(s.HsWaterSort);
a.label = 2;

case 2:
return [ 2, this.getLevelName(f, h) ];
}
});
});
};
t.downgradeTierAndSync = function(e, t, n) {
var i = this.getData(e), o = this.getConfigData(e), a = t, r = i.chooseIndex || 0, s = i.diffcult || 0, l = r, c = s, u = o ? o.CapabilityDimensionName : null;
this.getUseDimensionData(e) && (u = this.getUseDimensionData(e).dimension);
if (u && u.length > 0) {
var _ = u.indexOf(t);
if (_ > 0) {
t = u[_ - 1];
l = _ - 1;
if (i.subArr && i.subArr[_ - 1]) {
var d = i.subArr[_ - 1], h = Number(d.subSmin), f = Number(d.subSmax);
if (!isNaN(h) && !isNaN(f)) {
var p = (h + f) / 2;
c = s > 0 && p >= s ? s > h ? (h + s) / 2 : s : p;
}
}
}
}
i.chooseIndex = l;
i.diffcult = c;
this.saveData(e, i);
console.log("【水排序" + n + "】 原能力值:" + a + " 原chooseIndex:" + r + " 原diffcult:" + s);
console.log("【水排序" + n + "】 现能力值:" + t + " 现chooseIndex:" + l + " 现diffcult:" + c);
return t;
};
t.upgradeBlockFillTier = function(e, t, n) {
for (var i = [ [ "02", "03" ], [ "04", "05", "06" ], [ "07", "08", "09" ], [ "10", "11", "12" ], [ "13", "14", "15" ] ], o = [ "简单", "中等", "难", "超难", "极难" ], a = t.split("_"), r = a[0], s = -1, l = 0; l < i.length; l++) if (i[l].indexOf(r) >= 0) {
s = l;
break;
}
if (s < 2 || s >= i.length - 1) {
s >= 0 && s < o.length && console.log("【一笔画难度提升】 能力值:" + t + " 档位:" + o[s] + "，无需升档");
return t;
}
var c = i[s + 1];
console.log("【一笔画难度提升】 能力值:" + t + " 档位:" + o[s] + "，升到:" + o[s + 1] + "(" + c.join("/") + ")");
var u = this.getData(e), _ = this.getConfigData(e), d = _ ? _.CapabilityDimensionName : null;
this.getUseDimensionData(e) && (d = this.getUseDimensionData(e).dimension);
if (!d || 0 === d.length) {
console.warn("【一笔画" + n + "】 无能力值维度配置，放弃升档");
return t;
}
var h = "";
if (a.length >= 2) {
var f = c.map(function(e) {
return e + "_" + a[1];
}).filter(function(e) {
return d.indexOf(e) >= 0;
});
f.length > 0 && (h = f[Math.floor(Math.random() * f.length)]);
}
if (!h) {
var p = d.filter(function(e) {
return c.indexOf(e.split("_")[0]) >= 0;
});
if (0 === p.length) {
console.warn("【一笔画" + n + "】 下一档无可用档位，放弃升档");
return t;
}
h = p[Math.floor(Math.random() * p.length)];
}
console.log("【一笔画难度提升】 下一档随机选中能力值:" + h);
var g = d.indexOf(h);
if (g < 0) {
console.warn("【一笔画" + n + "】 升档目标 " + h + " 不在当前维度配置内，放弃升档");
return t;
}
var m = u.chooseIndex || 0, G = u.diffcult || 0, L = G;
if (u.subArr && u.subArr[g]) {
var y = u.subArr[g];
"number" == typeof y.subSmin && "number" == typeof y.subSmax && (L = (y.subSmin + y.subSmax) / 2);
}
u.chooseIndex = g;
u.diffcult = L;
this.saveData(e, u);
console.log("【一笔画" + n + "】 难度提升 原能力值:" + t + " 原chooseIndex:" + m + " 原diffcult:" + G);
console.log("【一笔画" + n + "】 难度提升 现能力值:" + h + " 现chooseIndex:" + g + " 现diffcult:" + L);
return h;
};
t.getDeathLvMension = function(e, t, n, i, o) {
i || (i = 5);
t || (t = 1);
if (this.getIsForceChangeDeathPos(e) && o && o % 5 == 0) return this.getIsForceChangeDeathPos(e);
var a, r = this.getData(e), s = r.dieDimensionValue || 1;
if (n < i) s = 1; else switch (t) {
case 0:
s = Math.max(s - 2, 1);
break;

case 1:
s = Math.min(s + 1, 4);
}
r.dieDimensionValue = s;
this.saveData(e, r);
a = "0" + Math.abs(s);
console.log("【死亡率2抽取逻辑】 通关数: " + n + " 最大不死亡关卡数: " + i + " 上次结果 " + t + " 输出 死亡率维度:" + s);
return a;
};
t.GetDimension = function(e) {
var t = this.getConfigData(e).AllDirectReadWeights;
if (this.getUseAllDirectReadWeights(e)) {
t = this.getUseAllDirectReadWeights(e);
console.log("修改AllDirectReadWeights配置为", t);
}
var n = JSON.parse(JSON.stringify(t));
"number" == typeof n[0][0] && (n = n[Math.floor(Math.random() * n.length)]);
var i = 0;
n.forEach(function(e) {
i += Number(e);
});
Math.floor(Math.random() * (i + 1));
for (var o = 0, a = 1, r = 0; r < n.length; ++r) {
o += n[r];
i <= o && (a = r + 1);
}
return "0" + a;
};
t.checkFixedRUAndDU = function(e) {
var t = this.getData(e), n = this.getConfigData(e);
n.MaxDiffulty = this.getUseDimensionDataByKey(e, "maxDiffulty") || n.MaxDiffulty;
n.MinDiffulty = this.getUseDimensionDataByKey(e, "minDiffulty") || n.MinDiffulty;
if (this.getUseDimensionData(e)) {
for (var i = this.getUseDimensionData(e), o = i.dimension, a = i.diffultyIntervals, r = t.subArr, s = 0; s < r.length; s++) {
var l = r[s];
if (l.dimensionName) break;
-1 != (_ = n.DiffultyIntervals.indexOf(l.subSmin)) && (l.dimensionName = o[_ / 2]);
}
if (o.length != r.length || o.some(function(e, t) {
return e != r[t].dimensionName;
})) {
console.log("维度不一致 开始兼容处理");
var c = [], u = n.CapabilityDimensionName;
this.getUseDimensionData(e) && (u = this.getUseDimensionData(e).dimension);
for (s = 0; s < o.length; s++) {
var _, d = {}, h = o[s];
if (-1 != (_ = u.indexOf(h))) {
d.ru = a[2 * _] + (r[_].subSmax - r[_].subSmin) * (a[2 * _ + 1] - a[2 * _]) / (r[_].subSmax - r[_].subSmin);
d.du = r[_].du;
d.subSmin = a[2 * _];
d.subSmax = a[2 * _ + 1];
d.bValue = r[_].bValue;
d.isOpen = r[_].isOpen;
d.index = r[_].index;
} else {
d.isOpen = !0;
if (0 == s && this.getUpdateSubAbilityConfidenceAndValue(e)) {
var f = this.getUpdateSubAbilityConfidenceAndValue(e);
d.ru = f.ru;
d.du = f.du;
} else {
d.ru = n.MinDiffulty;
d.du = this.InitDu;
}
d.bValue = 0;
d.index = s;
d.subSmin = a[s];
d.subSmax = a[s + 1];
}
d.dimensionName = o[s];
c.push(d);
}
t.subArr = c;
this.saveData(e, t);
console.log("子区间所有维度兼容处理完成", c);
}
}
};
t.getNengLiWeiDu = function(e, t, n) {
var i = this;
void 0 === n && (n = !1);
var o = this.getData(e), a = this.getConfigData(e), r = !o.ru, s = o.ru, l = o.du;
a.MaxDiffulty = this.getUseDimensionDataByKey(e, "maxDiffulty") || a.MaxDiffulty;
a.MinDiffulty = this.getUseDimensionDataByKey(e, "minDiffulty") || a.MinDiffulty;
s = s ? Math.max(s, a.MinDiffulty) : a.MinDiffulty;
l = l ? Math.max(l, 30) : 30;
var c = function(t, n) {
var o = {
isOpen: !0
};
if (0 == n && i.getUpdateSubAbilityConfidenceAndValue(e)) {
var r = i.getUpdateSubAbilityConfidenceAndValue(e);
o.ru = r.ru;
o.du = r.du;
} else {
o.ru = a.MinDiffulty;
o.du = 400;
}
o.bValue = 0;
o.index = Math.floor(n / 2);
var s = i.getUseDimensionData(e);
if (s) {
o.subSmin = s.diffultyIntervals[n];
o.subSmax = s.diffultyIntervals[n + 1];
o.dimensionName = s.dimension[n];
} else {
o.subSmin = a.DiffultyIntervals[n];
o.subSmax = a.DiffultyIntervals[n + 1];
var l = a.CapabilityDimensionName;
i.getUseDimensionData(e) && (l = i.getUseDimensionData(e).dimension);
o.dimensionName = l[n];
}
t.subArr.push(o);
};
if (r) {
o.subArr = [];
for (var u = this.getUseDimensionData(e), _ = u ? u.diffultyIntervals : a.DiffultyIntervals, d = 0; d < _.length; d += 2) c(o, d);
s = (S = o.subArr[0]).ru;
o.ru = S.ru;
console.log(e, "初始化能力值", s);
} else {
this.checkFixedRUAndDU(e);
o = this.getData(e);
}
var h = Math.log(t) / Math.log(1.3), f = (Math.min(h, 10), new Date().getTime()), p = a.MinDiffulty, g = a.MaxDiffulty;
o.isTiggerPath3 = !1;
for (var m = o.tiggerPatch3 || 1, G = 0, L = 0; ;) {
if (new Date().getTime() - f >= this.timeOutMax) {
console.log("超时了维度默认为0");
G = Math.max(0, G);
break;
}
L = this.getD(s, p, g, r, m, o, t);
var y = [];
if (l < 250) for (d = 0; d < o.subArr.length; ++d) if ((S = o.subArr[d]).isOpen) {
if (y.length < 5) {
var T = S.subSmin;
if (S.subSmax <= T + .5 * (s - T)) {
S.du = 400;
S.isOpen = !1;
y.push(d);
}
}
} else y.push(d);
var E = [];
for (d = 0; d < o.subArr.length; d++) (S = o.subArr[d]).subSmin <= L && L <= S.subSmax && !y.includes(d) && E.push(d);
if (0 == E.length) {
var v = Number.MAX_VALUE;
for (d = 0; d < o.subArr.length; d++) {
var S = o.subArr[d];
if (Math.abs(L - S.subSmin) < v) {
L = S.subSmin;
v = Math.abs(L - S.subSmin);
}
if (Math.abs(L - S.subSmax) < v) {
L = S.subSmax;
v = Math.abs(L - S.subSmax);
}
}
var A = Math.min(Math.log(t) / Math.log(1.2), 10) / 10 * (g - this.patch0301 * (g - p));
L = Math.max(L, A);
for (d = 0; d < o.subArr.length; d++) (S = o.subArr[d]).subSmin <= L && L <= S.subSmax && !y.includes(d) && E.push(d);
}
if (E.length > 0) {
G = E[Math.floor(Math.random() * E.length)];
if (this.getIsDeletePatch4(e)) {
if (this.getIsDeletePatch1(e)) break;
G = this.SelectCapabilityRange(o.subArr, E, G);
break;
}
console.log("补丁4生效");
var O = !0;
for (d = 0; d < E.length; ++d) {
var N = E[d];
if (o.subArr[N] && o.subArr[N].bValue < 1) {
O = !1;
break;
}
}
O && this.AllDullValReduce(o.subArr, E);
if (!O) {
var b = G;
if (this.IsSatisfy(o.subArr, G, n)) {
E = this.GetCanSelectIndexList(o.subArr, E);
if (!this.getIsDeletePatch1(e)) {
G = this.SelectCapabilityRange(o.subArr, E, G);
this.AddDullVal(o.subArr, G);
}
b != G && this.DullValReduce(o.subArr, b);
break;
}
G = (E = this.GetCanSelectIndexList(o.subArr, E))[Math.floor(Math.random() * E.length)];
this.getIsDeletePatch1(e) || (G = this.SelectCapabilityRange(o.subArr, E, G));
this.AddDullVal(o.subArr, G);
b != G && this.DullValReduce(o.subArr, b);
break;
}
}
}
400 == o.subArr[G].du || o.subArr[G].ru;
var P = a.CapabilityDimensionName;
if (this.getUseDimensionData(e)) {
P = this.getUseDimensionData(e).dimension;
console.log("修改的CapabilityDimensionName配置为", P);
}
o.chooseIndex = G;
o.diffcult = L;
o.ru = s;
o.du = l;
this.saveData(e, o);
return P[G];
};
t.SelectCapabilityRange = function(e, t, n) {
console.log("补丁1生效");
var i = JSON.parse(JSON.stringify(e));
if (t.length > 0 && e[n].du == this.InitDu) {
var o = 0;
i.sort(function(e, t) {
return e.subSmin - t.subSmin;
});
for (var a = 0; a < i.length; a++) if (e[n].index === i[a].index) {
o = a;
break;
}
var r = null, s = 0;
for (a = 0; a < i.length; a++) if (i[a].du < this.InitDu) if (null == r) r = i[a]; else if (i[a].subSmin > r.subSmin) {
r = i[a];
s = a;
}
var l = Math.min(Math.max(i.length / 5, 1), 3) + s, c = Math.floor(Math.min(l, o)), u = Math.floor(Math.max(l, o));
for (a = c; a <= u; a++) {
var _ = i[a];
if (_ && _.bValue < 1) {
n = _.index;
break;
}
}
}
return n;
};
t.DullValReduce = function(e, t) {
var n = e.find(function(e) {
return e.index == t;
});
if (null != n && n.bValue >= 1) {
n.bValue -= 1;
n.bValue = Math.min(n.bValue, .3);
}
};
t.AddDullVal = function(e, t) {
e[t].bValue += this.patch0401;
};
t.GetCanSelectIndexList = function(e, t) {
for (var n = [], i = 0; i < t.length; i++) {
var o = e[t[i]];
null != o && o.bValue < 1 && n.push(t[i]);
}
return n;
};
t.IsSatisfy = function(e, t, n) {
var i = !0, o = e[t].bValue;
console.log("补丁4>打印最新的区间乏味值,是否是手动重开:" + n);
n || o >= 1 && (i = !1);
return i;
};
t.AllDullValReduce = function(e, t) {
for (var n = 0; n < t.length; n++) {
var i = e[t[n]];
if (null != i && i.bValue >= 1) {
i.bValue -= 1;
i.bValue = Math.min(i.bValue, .3);
}
}
};
t.getD = function(e, t, n, i, o, a, r) {
var s = 1 - Math.random(), l = 1 - Math.random(), c = .9 * e + Math.sqrt(-2 * Math.log(s)) * Math.cos(2 * Math.PI * l), u = .9 * e + Math.sqrt(-2 * Math.log(s)) * Math.sin(2 * Math.PI * l), _ = null;
c >= t && c <= n ? _ = c : u >= t && u <= n && (_ = u);
1 === r && null == _ && (r = 2);
if (!i && o) {
var d = this.patch0301;
if (e <= (n - d) * (n - t)) {
a.isTiggerPath3 = !0;
var h = Math.min(Math.log(r) / Math.log(1.2), 10) / 10 * (n - d * (n - t));
_ = Math.max(_, h);
}
}
return _;
};
t.patch0301 = .7;
t.patch0401 = .35;
t.InitDu = 400;
t.isDeletePatch1 = {};
t.isDeletePatch4 = {};
t.mChangeobj = {};
t.updateSubAbilityConfidenceAndValue = {};
t.dimensionData = {};
t.isForceChangeDeathPos = {};
t.allDirectReadWeights = {};
t.timeOutMax = 1e3;
return t;
}();
t.ExtractDimension = i;
var s, c = {};
(function(e) {
e[e.HsWaterSort = 1] = "HsWaterSort";
e[e.HsBlockFill = 2] = "HsBlockFill";
e[e.HsMahjong = 3] = "HsMahjong";
e[e.HsOnet = 4] = "HsOnet";
})(s = t.configNumberKey || (t.configNumberKey = {}));
var u = null, _ = null, d = null, h = null;
function f(e, t) {
if (t) switch (e) {
case s.HsWaterSort:
u = t;
break;

case s.HsBlockFill:
_ = t;
break;

case s.HsMahjong:
d = t;
break;

case s.HsOnet:
h = t;
}
}
function p(e) {
switch (e) {
case s.HsWaterSort:
return u;

case s.HsBlockFill:
return _;

case s.HsMahjong:
return d;

case s.HsOnet:
return h;
}
}
var g = null, m = null, G = null, L = null;
function y(e) {
switch (e) {
case s.HsWaterSort:
return g;

case s.HsBlockFill:
return m;

case s.HsMahjong:
return G;

case s.HsOnet:
return L;
}
}
function T(e, t) {
switch (e) {
case s.HsWaterSort:
g = t;
break;

case s.HsBlockFill:
m = t;
break;

case s.HsMahjong:
G = t;
break;

case s.HsOnet:
L = t;
}
}
var E = null, v = null, S = null, A = null;
function O(e, t) {
if (t) switch (e) {
case s.HsWaterSort:
E = t;
break;

case s.HsBlockFill:
v = t;
break;

case s.HsMahjong:
S = t;
break;

case s.HsOnet:
A = t;
}
}
function N(e) {
switch (e) {
case s.HsWaterSort:
return E;

case s.HsBlockFill:
return v;

case s.HsMahjong:
return S;

case s.HsOnet:
return A;
}
}
function b(e) {
return o(this, void 0, Promise, function() {
return a(this, function() {
console.log("开始加载offest数据");
return [ 2, new Promise(function(t, n) {
var i, o = "", a = new Date().getTime();
switch (e) {
case s.HsWaterSort:
if (E) {
t(E);
console.log("偏移缓存数据加载完成，用时", new Date().getTime() - a, "ms");
return;
}
o = "gl_watersort";
break;

case s.HsBlockFill:
if (v) {
t(v);
console.log("偏移缓存数据加载完成，用时", new Date().getTime() - a, "ms");
return;
}
o = "gl_oneline";
break;

case s.HsMahjong:
if (S) {
t(S);
console.log("偏移缓存数据加载完成，用时", new Date().getTime() - a, "ms");
return;
}
o = "gl_mahjong";
break;

case s.HsOnet:
if (A) {
t(A);
console.log("偏移缓存数据加载完成，用时", new Date().getTime() - a, "ms");
return;
}
o = "gl_onet";
}
var c = "byteData/level_data_offsets", u = cc.assetManager.getBundle(o), _ = function(i) {
var o = function(n) {
for (var i, c, _ = [], d = new Uint8Array(n), h = 0; h < n.byteLength; h++) _.push(d[h]);
for (var f = new DataView(n), p = 0, g = {}, m = []; p < n.byteLength; ) {
var G = f.getInt32(p, !0);
p += 4;
var L = _.slice(p, p + G), y = "";
try {
for (var N = (i = void 0, r(L)), b = N.next(); !b.done; b = N.next()) {
var P = b.value;
y += String.fromCharCode(P);
}
} catch (e) {
i = {
error: e
};
} finally {
try {
b && !b.done && (c = N.return) && c.call(N);
} finally {
if (i) throw i.error;
}
}
m.push(y);
p += G;
var w = f.getInt32(p, !0);
p += 4;
var C = f.getInt32(p, !0);
p += 4;
var I = {};
I.fileLeng = C;
I.startOffset = w;
I.fileName = y;
g[y] = I;
T(e, m);
switch (e) {
case s.HsWaterSort:
E = g;
break;

case s.HsBlockFill:
v = g;
break;

case s.HsMahjong:
S = g;
break;

case s.HsOnet:
A = g;
}
}
O(e, g);
t(g);
if (l.GLExtractFeature.isOpenGLGameErrorFix_loadLevelData_stackoverflow() && u) {
var U = u._buffer;
o(U);
}
console.log("偏移数据加载完成，用时", new Date().getTime() - a, "ms");
}, u = i.get(c);
if (u) {
var _ = u._buffer;
o(_);
} else i.load(c, cc.BufferAsset, function(e, t) {
if (e) {
cc.log("Prefab error:" + e);
n(e);
} else if (t instanceof cc.BufferAsset) {
var i = t._buffer;
o(i);
} else {
cc.log("Prefab error");
n(new Error("Loaded resource is not BufferAsset"));
}
});
};
if (u) _(u); else {
var d = window.GL;
(null === (i = null == d ? void 0 : d.gamelobby) || void 0 === i ? void 0 : i.getRemoteBundleBaseUrl) && d.gamelobby.getRemoteBundleBaseUrl(o);
cc.assetManager.loadBundle(o, function(e, t) {
if (e) {
console.error("Bundle加载失败:", e);
n(e);
} else _(t);
});
}
}) ];
});
});
}
function P(e) {
return o(this, void 0, Promise, function() {
return a(this, function() {
console.log("开始加载总表数据");
return [ 2, new Promise(function(t, n) {
var i, o = "";
switch (e) {
case s.HsWaterSort:
o = "gl_watersort";
break;

case s.HsBlockFill:
o = "gl_oneline";
break;

case s.HsMahjong:
o = "gl_mahjong";
break;

case s.HsOnet:
o = "gl_onet";
}
var a = "byteData/level_data", r = new Date().getTime(), l = cc.assetManager.getBundle(o), c = function() {
var i = l.get(a);
if (i) {
for (var o = i._buffer, s = [], c = new Uint8Array(o), u = 0; u < o.byteLength; u++) s.push(c[u]);
f(e, s);
t(null);
console.log("总表加载完成，用时", new Date().getTime() - r, "ms");
} else l.load(a, cc.BufferAsset, function(i, o) {
if (i) {
cc.log("Prefab error:" + i);
n(i);
} else if (o instanceof cc.BufferAsset) {
for (var a = o._buffer, s = [], l = new Uint8Array(a), c = 0; c < a.byteLength; c++) s.push(l[c]);
f(e, s);
t(null);
console.log("总表加载完成，用时", new Date().getTime() - r, "ms");
} else {
cc.log("Prefab error");
n(new Error("Loaded resource is not BufferAsset"));
}
});
};
if (l) c(); else {
var u = o, _ = window.GL;
(null === (i = null == _ ? void 0 : _.gamelobby) || void 0 === i ? void 0 : i.getRemoteBundleBaseUrl) && (u = _.gamelobby.getRemoteBundleBaseUrl(o));
cc.assetManager.loadBundle(u, function(e) {
if (e) {
console.error("Bundle加载失败:", e);
n(e);
} else c();
});
}
}) ];
});
});
}
function w(t, n, i) {
return o(this, void 0, void 0, function() {
var o, r, s, l, c, u, _, d, h, f, g, m, G, L, T, E, v, S, A, O, w, I, U, M, D, R, B, x;
return a(this, function(a) {
switch (a.label) {
case 0:
a.trys.push([ 0, 7, , 8 ]);
return (o = y(t)) ? [ 3, 2 ] : [ 4, b(t) ];

case 1:
a.sent();
a.label = 2;

case 2:
r = e.ExtractTool.ExtractDimension.getData(t);
s = r.historyIndex || [];
return o.includes(n) ? (l = p(t)) ? [ 3, 4 ] : [ 4, P(t) ] : [ 3, 5 ];

case 3:
a.sent();
l = p(t);
a.label = 4;

case 4:
c = N(t);
u = c[n];
_ = u.startOffset;
d = u.fileLeng + _;
h = new ArrayBuffer(l.length);
new Uint8Array(h).set(l);
f = new DataView(h);
g = Number.MAX_VALUE;
m = 0;
G = 0;
L = f.getInt32(_, !0);
T = (_ += 4) + L;
E = 8;
v = null;
S = 0;
A = Math.floor(6 * Math.random());
for (;_ < T; ) {
O = f.getInt32(_, !0);
_ += 4;
w = f.getFloat32(_, !0);
_ += 4;
I = f.getInt32(_, !0);
_ += 4;
U = f.getInt32(_, !0);
_ += 4;
if (Math.abs(w - i) < g && !s.includes(O)) {
m = I;
G = U;
g = Math.abs(w - i);
E = w;
v = O;
}
if (!v && S == A) {
m = I;
G = U;
g = Math.abs(w - i);
E = w;
v = O;
}
S++;
}
s.push(v);
s.length > 20 && s.splice(0, 1);
r.historyIndex = s;
e.ExtractTool.ExtractDimension.saveData(t, r);
M = l.slice(_, d);
D = M.slice(m, m + G);
R = new Uint8Array(D);
B = C(R);
console.log("当前抽的关卡表content数据为：", B);
return [ 2, {
contentByteData: B,
contentDiff: E,
fileName: n,
index: v
} ];

case 5:
console.log(n, "未在配置文件夹内");
return [ 2, null ];

case 6:
return [ 3, 8 ];

case 7:
x = a.sent();
console.error("获取关卡表content数据失败", x);
return [ 2, null ];

case 8:
return [ 2 ];
}
});
});
}
function C(e) {
for (var t = "", n = 0; n < e.length; ) {
var i = e[n];
if (0 == (128 & i)) {
t += String.fromCharCode(i);
n++;
} else if (192 == (224 & i)) {
if (!(n + 1 < e.length)) break;
var o = (31 & i) << 6 | 63 & e[n + 1];
t += String.fromCharCode(o);
n += 2;
} else if (224 == (240 & i)) {
if (!(n + 2 < e.length)) break;
o = (15 & i) << 12 | (63 & e[n + 1]) << 6 | 63 & e[n + 2];
t += String.fromCharCode(o);
n += 3;
} else if (240 == (248 & i)) {
if (!(n + 3 < e.length)) break;
if ((o = (7 & i) << 18 | (63 & e[n + 1]) << 12 | (63 & e[n + 2]) << 6 | 63 & e[n + 3]) > 65535) {
var a = Math.floor((o - 65536) / 1024) + 55296, r = (o - 65536) % 1024 + 56320;
t += String.fromCharCode(a, r);
} else t += String.fromCharCode(o);
n += 4;
} else n++;
}
return t;
}
function I(n) {
return o(this, void 0, Promise, function() {
var i = this;
return a(this, function() {
return [ 2, new Promise(function(r, s) {
var l, c = function() {
return o(i, void 0, void 0, function() {
var t;
return a(this, function(i) {
switch (i.label) {
case 0:
t = "";
switch (n.type) {
case "HsBlockFill":
return [ 3, 1 ];

case "HsMahjong":
return [ 3, 3 ];

case "HsOnet":
return [ 3, 5 ];

case "HsWaterSort":
return [ 3, 7 ];
}
return [ 3, 9 ];

case 1:
return [ 4, e.ExtractTool.ExtractDimension.getYiBiHuaWeiDu(n.type, n.levelID, n.isRestrat, n.reallyLevelID) ];

case 2:
t = i.sent();
return [ 3, 9 ];

case 3:
return [ 4, e.ExtractTool.ExtractDimension.getMaJiangWeiDu(n.type, n.levelID, n.isRestrat, n.dieResult, n.maxNotDieLevel) ];

case 4:
t = i.sent();
return [ 3, 9 ];

case 5:
return [ 4, e.ExtractTool.ExtractDimension.getLianLianKan(n.type, n.levelID, n.isRestrat) ];

case 6:
t = i.sent();
return [ 3, 9 ];

case 7:
return [ 4, e.ExtractTool.ExtractDimension.getWaterSort(n.type, n.levelID, n.isRestrat, n.dieResult, n.maxNotDieLevel, n.reallyLevelID) ];

case 8:
t = i.sent();
return [ 3, 9 ];

case 9:
console.log("当前抽关卡算法抽的关卡名为:", t);
r(t);
return [ 2 ];
}
});
});
};
if (t.json_data) c(); else {
var u = "gl_hall", _ = window.GL;
(null === (l = null == _ ? void 0 : _.gamelobby) || void 0 === l ? void 0 : l.getRemoteBundleBaseUrl) && (u = _.gamelobby.getRemoteBundleBaseUrl(u));
cc.assetManager.loadBundle(u, function(e, n) {
if (e) {
cc.error("Failed to load bundle [gl_hall]:", e);
s(null);
} else n.load("gl_extractDimension/json/tblevelextractconfig2", function(e, n) {
if (e) {
s(null);
cc.log("Prefab error:" + e);
} else if (n instanceof cc.JsonAsset) {
t.json_data = n.json;
c();
} else cc.log("Prefab error");
});
});
}
}) ];
});
});
}
t.UpdateCapability = function(n, i, o, a, r) {
var s;
if (r && e.ExtractTool.ExtractDimension.getIsForceChangeDeathPos(n) && r % 5 == 0) console.log(n, "特定关卡逻辑 跳过更新能力值"); else if (t.json_data) e.ExtractTool.ExtractDimension.UpdateCapability(n, i, o, a); else {
var l = "gl_hall", c = window.GL;
(null === (s = null == c ? void 0 : c.gamelobby) || void 0 === s ? void 0 : s.getRemoteBundleBaseUrl) && (l = c.gamelobby.getRemoteBundleBaseUrl(l));
cc.assetManager.loadBundle(l, function(r, s) {
r ? cc.error("[ResultTool] Failed to load bundle [gl_hall]:", r) : s.load("gl_extractDimension/json/tblevelextractconfig2", function(r, s) {
if (r) cc.log("Prefab error:" + r); else if (s instanceof cc.JsonAsset) {
t.json_data = s.json;
e.ExtractTool.ExtractDimension.UpdateCapability(n, i, o, a);
} else cc.log("Prefab error");
});
});
}
};
function U(e, t) {
t && cc.sys.localStorage.setItem("GL_user_end_data" + e, JSON.stringify(t));
}
t.saveEndData = U;
t.getEndData = function(e, t) {
void 0 === t && (t = !1);
var n = function(e) {
var t = Number(e);
return isNaN(t) ? 0 : Math.floor(1e3 * t) / 1e3;
}, i = cc.sys.localStorage.getItem("GL_user_end_data" + e);
if (i) try {
var o = JSON.parse(i);
if (o && "object" == typeof o && !Array.isArray(o)) {
if (t) {
o.level_skill && (o.level_skill = n(o.level_skill));
o.user_skill && (o.user_skill = n(o.user_skill));
}
return o;
}
return null;
} catch (e) {
return null;
}
return null;
};
t.getByteContent = function(t) {
return o(this, void 0, void 0, function() {
var n, i, o, r, l;
return a(this, function(a) {
switch (a.label) {
case 0:
a.trys.push([ 0, 3, , 4 ]);
n = new Date().getTime();
return [ 4, I(t) ];

case 1:
i = a.sent();
o = e.ExtractTool.ExtractDimension.getData(t.type);
return [ 4, w(s[t.type], i, o.diffcult) ];

case 2:
r = a.sent();
console.log("当前抽题结束，数据为:", r, "用时：", new Date().getTime() - n, "ms");
r && this.saveEndData(t.type, {
levelid: t.reallyLevelID,
puzzle_library: t.type + r.fileName,
puzzle_file: r.index,
puzzle: r.contentByteData,
level_skill: r.contentDiff,
user_skill: o.du
});
return [ 2, r ];

case 3:
l = a.sent();
console.log(l);
return [ 2, null ];

case 4:
return [ 2 ];
}
});
});
};
function M(e, t, n) {
var i = n - t;
if (i <= 0) return 0;
var o = (e - t) / i;
return o <= .2 ? 0 : o <= .35 ? 1 : o <= .5 ? 2 : o <= .7 ? 3 : 4;
}
function D(e) {
return 3 === e || 7 === e ? 1 : 5 === e ? 2 : 9 === e ? 3 : 0;
}
function R() {
return o(this, void 0, Promise, function() {
return a(this, function(e) {
switch (e.label) {
case 0:
return t.json_data ? [ 2 ] : [ 4, new Promise(function(e, n) {
var i, o = "gl_hall", a = window.GL;
(null === (i = null == a ? void 0 : a.gamelobby) || void 0 === i ? void 0 : i.getRemoteBundleBaseUrl) && (o = a.gamelobby.getRemoteBundleBaseUrl(o));
cc.assetManager.loadBundle(o, function(i, o) {
i ? n(i) : o.load("gl_extractDimension/json/tblevelextractconfig2", function(i, o) {
if (i) n(i); else if (o instanceof cc.JsonAsset) {
t.json_data = o.json;
e();
} else n(new Error("Loaded resource is not JsonAsset"));
});
});
}) ];

case 1:
e.sent();
return [ 2 ];
}
});
});
}
function B(e) {
return o(this, void 0, Promise, function() {
var t, n, i, o, s, l, u, _, d, h, f, g, m, G, L, T, E, v, S, A;
return a(this, function(a) {
switch (a.label) {
case 0:
return (t = c[e]) ? [ 2, t ] : (n = y(e)) ? [ 3, 2 ] : [ 4, b(e) ];

case 1:
a.sent();
n = y(e);
a.label = 2;

case 2:
return (i = p(e)) ? [ 3, 4 ] : [ 4, P(e) ];

case 3:
a.sent();
i = p(e);
a.label = 4;

case 4:
o = N(e);
if (!i || !o) return [ 2, [] ];
s = new ArrayBuffer(i.length);
new Uint8Array(s).set(i);
l = new DataView(s);
u = [];
try {
for (_ = r(n), d = _.next(); !d.done; d = _.next()) {
h = d.value;
if (f = o[h]) {
g = f.startOffset;
m = l.getInt32(g, !0);
G = (g += 4) + m;
for (;g < G; ) {
L = l.getInt32(g, !0);
g += 4;
T = l.getFloat32(g, !0);
g += 4;
E = l.getInt32(g, !0);
g += 4;
v = l.getInt32(g, !0);
g += 4;
u.push({
fileName: h,
index: L,
difficulty: T,
contentRegionStart: G,
contentStartPos: E,
contentLen: v
});
}
}
}
} catch (e) {
S = {
error: e
};
} finally {
try {
d && !d.done && (A = _.return) && A.call(_);
} finally {
if (S) throw S.error;
}
}
c[e] = u;
return [ 2, u ];
}
});
});
}
t.getByteContentByDifficultySeg = function(t) {
return o(this, void 0, Promise, function() {
var n, i, o, l, c, u, _, d, h, f, g, m, G, L, y, T, E, v, S, A, O, N, b, P, w, I, x;
return a(this, function(a) {
switch (a.label) {
case 0:
a.trys.push([ 0, 3, , 4 ]);
n = new Date().getTime();
return [ 4, R() ];

case 1:
a.sent();
i = s[t.type];
if (!(o = e.ExtractTool.ExtractDimension.getConfigData(t.type))) {
console.error("新抽题方案 配置缺失");
return [ 2, null ];
}
l = e.ExtractTool.ExtractDimension.getUseDimensionDataByKey(t.type, "minDiffulty") || o.MinDiffulty;
c = e.ExtractTool.ExtractDimension.getUseDimensionDataByKey(t.type, "maxDiffulty") || o.MaxDiffulty;
u = null != t.reallyLevelID ? t.reallyLevelID : t.levelID;
_ = Math.abs(u) % 10;
d = D(_);
return [ 4, B(i) ];

case 2:
if (!(h = a.sent()) || 0 === h.length) {
console.error("新抽题方案 题库为空");
return [ 2, null ];
}
if (0 === (f = h.filter(function(e) {
return M(e.difficulty, l, c) === d;
})).length) for (g = 1; g <= 4; g++) {
m = [ d - g, d + g ].filter(function(e) {
return e >= 0 && e <= 4;
});
G = function(e) {
var t = h.filter(function(t) {
return M(t.difficulty, l, c) === e;
});
if (t.length > 0) {
f = t;
return "break";
}
};
try {
for (L = (I = void 0, r(m)), y = L.next(); !y.done; y = L.next()) {
T = y.value;
if ("break" === G(T)) break;
}
} catch (e) {
I = {
error: e
};
} finally {
try {
y && !y.done && (x = L.return) && x.call(L);
} finally {
if (I) throw I.error;
}
}
if (f.length > 0) break;
}
if (0 === f.length) {
console.error("新抽题方案 未找到可用题目");
return [ 2, null ];
}
E = e.ExtractTool.ExtractDimension.getData(t.type);
v = E.historyIndex || [];
0 === (S = f.filter(function(e) {
return !v.includes(e.index);
})).length && (S = f);
if (!(A = S[Math.floor(Math.random() * S.length)])) return [ 2, null ];
v.push(A.index);
v.length > 20 && v.splice(0, v.length - 20);
E.historyIndex = v;
e.ExtractTool.ExtractDimension.saveData(t.type, E);
O = p(i);
N = O.slice(A.contentRegionStart + A.contentStartPos, A.contentRegionStart + A.contentStartPos + A.contentLen);
b = new Uint8Array(N);
P = C(b);
U(t.type, {
levelid: u,
puzzle_library: t.type + A.fileName,
puzzle_file: A.index,
puzzle: P,
level_skill: A.difficulty,
user_skill: E.du
});
console.log("新抽题方案 抽题结束 fileName:" + A.fileName + ",index:" + A.index + ",difficulty:" + A.difficulty + ",尾号:" + _ + ",目标段:" + d + ",用时:" + (new Date().getTime() - n) + "ms");
return [ 2, {
contentByteData: P,
contentDiff: A.difficulty,
fileName: A.fileName,
index: A.index
} ];

case 3:
w = a.sent();
console.error("新抽题方案 抽题失败", w);
return [ 2, null ];

case 4:
return [ 2 ];
}
});
});
};
function x(e) {
return o(this, void 0, void 0, function() {
var t;
return a(this, function(n) {
switch (n.label) {
case 0:
n.trys.push([ 0, 3, , 4 ]);
return [ 4, b(e) ];

case 1:
n.sent();
return [ 4, P(e) ];

case 2:
n.sent();
return [ 3, 4 ];

case 3:
t = n.sent();
console.log("initData", JSON.stringify(t));
return [ 3, 4 ];

case 4:
return [ 2 ];
}
});
});
}
t.initData = x;
})(e.ExtractTool || (e.ExtractTool = {}));
})(s || (s = {}));
window.GL = i(i({}, window.GL), s);
cc._RF.pop();
}, {
"./GL_ExtractFeature": "GL_ExtractFeature"
} ],
GL_ExtractFeature: [ function(e, t, n) {
"use strict";
cc._RF.push(t, "f7561fJdTxLDIiYeiCTSVZ9", "GL_ExtractFeature");
Object.defineProperty(n, "__esModule", {
value: !0
});
n.GLExtractFeature = void 0;
var i = function() {
function e() {}
e.initGLExtractFeature = function(e) {
this.setCanUseBlockFillM(e);
this.setCanUseBlockFillConfig(e);
this.setIsDeletePatch(e);
this.setSubAbilityConfidenceAndValue(e);
this.setIsForceChangeDeathPos(e);
};
e.setIsDeletePatch = function(e) {
if (this.isDeletePatch1(e)) {
console.log(e + "跳过补丁1");
GL.ExtractTool.ExtractDimension.setIsDeletePatch1(e, !0);
}
if (this.isDeletePatch4(e)) {
console.log(e + "跳过补丁4");
GL.ExtractTool.ExtractDimension.setIsDeletePatch4(e, !0);
}
};
e.isDeletePatch1 = function(e) {
return !("HsOnet" != e || !GL.Game.IsFeatureOpen("gl_deletePatch1_onet"));
};
e.isDeletePatch4 = function(e) {
return !("HsMahjong" != e || !GL.Game.IsFeatureOpen("gl_deletePatch4_mahjong"));
};
e.isOpenGLGameErrorFix_loadLevelData_stackoverflow = function() {
return GL.Game.IsFeatureOpen("GLGameErrorFix_loadLevelData_stackoverflow");
};
e.isOpenChangeBlockFillM = function() {
return GL.Game.IsFeatureOpen("gl_changeBlockFillM");
};
e.setCanUseBlockFillM = function(e) {
if (this.isOpenChangeBlockFillM() && "HsBlockFill" == e) {
console.log("修改 一笔画 时长系数 m 为 9");
GL.ExtractTool.ExtractDimension.setCanUse(e, this.m);
}
};
e.isOpenChangeBlockFillConfig = function() {
return GL.Game.IsFeatureOpen("gl_changeBlockFillConfig");
};
e.setCanUseBlockFillConfig = function(e) {
if (this.isOpenChangeBlockFillConfig() && "HsBlockFill" == e) {
console.log("方案9  一笔画更新题库 曲折组");
GL.Game.IsFeatureOpen("gl_changeDimension_blockFill") || GL.ExtractTool.ExtractDimension.setDimensionData(e, {
dimension: this.blockFillConfig,
diffultyIntervals: this.blockFillConfigDiffultyIntervals,
minDiffulty: 44,
maxDiffulty: 2676
});
GL.ExtractTool.ExtractDimension.setAllDirectReadWeights(e, this.blockFillConfigWeights);
}
if (GL.Game.IsFeatureOpen("gl_changeDimension_blockFill") && "HsBlockFill" == e) {
console.log("方案10  一笔画更新题库 尺寸低，密度高");
GL.ExtractTool.ExtractDimension.setDimensionData(e, {
dimension: this.blockFillConfig1,
diffultyIntervals: this.blockFillConfig1DiffultyIntervals,
minDiffulty: 44,
maxDiffulty: 504
});
}
if (GL.Game.IsFeatureOpen("gl_deleteDimension_onet") && "HsOnet" == e) {
console.log("方案34 连连看（删）规格5x4、6x4、7x4、6x5(编号01/02/03/04)");
GL.ExtractTool.ExtractDimension.setDimensionData(e, {
dimension: this.onetDimension,
diffultyIntervals: this.onetDiffultyIntervals,
minDiffulty: 25.814,
maxDiffulty: 222.538
});
}
if (GL.Game.IsFeatureOpen("gl_changeWeight_waterSort") && "HsWaterSort" == e) {
console.log("方案24 水排序 设置题库配置实验 (死亡位置前中后均等)[0,1,1,1]");
GL.ExtractTool.ExtractDimension.setAllDirectReadWeights(e, [ 0, 1, 1, 1 ]);
}
};
e.isOpenBlockFillDifficultyUpgrade = function(e, t) {
if ("HsBlockFill" !== e || !t) return !1;
if (!GL.Game.IsFeatureOpen("gl_difficultyUp_blockFill")) return !1;
var n = GL.Game.getFeatureKeyParam("gl_difficultyUp_blockFill", "minLevel");
console.log("【一笔画】难度提升：特性参数：", n);
return !(!n || isNaN(Number(n)) || Number(n) < 0) && t > Number(n);
};
e.setSubAbilityConfidenceAndValue = function(e) {
if (this.isUpdateSubAbilityConfidenceAndValue(e)) {
console.log("方案35  连连看 用户初始能力值 = 第一个子能力值设为60 置信度为350");
GL.ExtractTool.ExtractDimension.setUpdateSubAbilityConfidenceAndValue(e, {
ru: 60,
du: 350
});
}
};
e.isUpdateSubAbilityConfidenceAndValue = function(e) {
return "HsOnet" == e && GL.Game.IsFeatureOpen("gl_initCapablity_onet");
};
e.isQuestion = function() {
return GL.Game.IsFeatureOpen("gl_question_waterSort");
};
e.isOpenWaterLowLevelDowngrade = function(e, t) {
if ("HsWaterSort" !== e || !t) return !1;
if (!GL.Game.IsFeatureOpen("gl_lowLevelDown_waterSort")) return !1;
var n = GL.Game.getFeatureValue("gl_lowLevelDown_waterSort");
console.log("【水排序】低关卡难度降档：特性参数：", n);
if (!n || isNaN(n.minLevel) || isNaN(n.maxLevel)) return !1;
var i = Number(n.minLevel), o = Number(n.maxLevel);
return t >= i && t <= o;
};
e.isOpenWaterHighLevelDowngrade = function(e, t) {
if ("HsWaterSort" !== e || !t) return !1;
if (!GL.Game.IsFeatureOpen("gl_highLevelDown_waterSort")) return !1;
var n = Number(GL.Game.getFeatureKeyParam("gl_highLevelDown_waterSort", "minLevel"));
console.log("【水排序】高关卡难度降档：特性参数：", n);
return !(isNaN(n) || n < 0) && t > n;
};
e.setIsForceChangeDeathPos = function(e) {
if (this.isQuestion() && "HsWaterSort" == e) {
console.log("水排序问号关 死亡率维度为01");
GL.ExtractTool.ExtractDimension.setIsForceChangeDeathPos(e, "01");
}
};
e.isOpenGLOneLineRevertModeChange = function() {
return GL.Game.IsFeatureOpen("GLOneLineRevertModeChange");
};
e.m = 9;
e.blockFillConfig = [ "02_02", "02_03", "02_04", "03_01", "03_02", "03_03", "03_04", "04_01", "04_02", "04_03", "04_04", "05_01", "05_02", "05_03", "05_04", "06_01", "06_02", "06_03", "06_04", "07_01", "07_02", "07_03", "07_04", "08_01", "08_02", "08_03", "08_04", "09_01", "09_02", "09_03", "09_04", "10_01", "10_02", "10_03", "11_01", "11_02", "11_03", "11_04", "12_01", "12_02", "12_03", "12_04", "13_01", "13_02", "13_03", "13_04", "14_01", "14_02", "14_03", "14_04", "15_01", "15_02", "15_03", "15_04" ];
e.blockFillConfigWeights = [ 66, 33, 6, 1 ];
e.blockFillConfigDiffultyIntervals = [ 44, 106, 52, 148, 100, 168, 46, 96, 50, 192, 72, 194, 154, 188, 46, 116, 52, 176, 70, 222, 208, 234, 52, 166, 58, 260, 76, 340, 178, 388, 58, 260, 66, 378, 100, 452, 286, 466, 60, 290, 68, 374, 110, 504, 260, 474, 68, 412, 80, 554, 134, 648, 322, 578, 74, 494, 90, 674, 172, 748, 454, 872, 76, 496, 92, 640, 180, 808, 84, 614, 114, 876, 226, 1168, 570, 1272, 92, 682, 134, 1072, 390, 1576, 604, 1688, 94, 790, 140, 1052, 394, 1634, 664, 1580, 110, 860, 188, 1476, 458, 1996, 826, 2084, 118, 876, 226, 1674, 548, 2152, 988, 2676 ];
e.blockFillConfig1 = [ "02_02", "02_03", "02_04", "03_01", "03_02", "03_03", "03_04", "04_01", "04_02", "04_03", "04_04", "05_01", "05_02", "05_03", "05_04", "06_01", "06_02", "06_03", "06_04", "07_01", "07_02", "07_03", "07_04" ];
e.blockFillConfig1DiffultyIntervals = [ 44, 106, 52, 148, 100, 168, 46, 96, 50, 192, 72, 194, 154, 188, 46, 116, 52, 176, 70, 222, 208, 234, 52, 166, 58, 260, 76, 340, 178, 388, 58, 260, 66, 378, 100, 452, 286, 466, 60, 290, 68, 374, 110, 504, 260, 474 ];
e.onetDimension = [ "05", "06", "07", "08", "09", "10", "11" ];
e.onetDiffultyIntervals = [ 52.712, 91.445, 53.051, 103.791, 62.981, 119.216, 73.034, 135.128, 80.357, 166.073, 73.621, 157.097, 98.25, 200.238 ];
return e;
}();
n.GLExtractFeature = i;
cc._RF.pop();
}, {} ],
GL_LANG_EN_US: [ function(e, t, n) {
"use strict";
cc._RF.push(t, "e4b7cxUUWZKn7SThtkOhV6m", "GL_LANG_EN_US");
Object.defineProperty(n, "__esModule", {
value: !0
});
n.GL_LANG_EN_US = void 0;
n.GL_LANG_EN_US = {
GL_LANG_GAME_NAME_TICTACTOE: "Tic Tac Toe",
GL_LANG_GAME_NAME_MAHJONG: "Mahjong",
GL_LANG_GAME_NAME_ONET: "Onet",
GL_LANG_GAME_NAME_ONELINE: "One Line",
GL_LANG_GAME_NAME_WATER: "Water Sort",
GL_LANG_GAME_NAME_FRUIT: "Fruit Merge",
GL_LANG_GAME_NAME_SUDOKU: "Sudoku",
GL_LANG_TICTACTOE_SKIP: "Skip",
GL_LANG_TICTACTOE_GUIDE_1: "Tap an empty square to place your mark",
GL_LANG_TICTACTOE_GUIDE_2: "Block your opponent from completing their row",
GL_LANG_TICTACTOE_GUIDE_3: "Get three marks in a row to win!",
GL_LANG_TICTACTOE_GUIDE_4: "Get four marks in a row to win!",
GL_LANG_TICTACTOE_GUIDE_5: "Get five marks in a row to win!",
GL_LANG_TICTACTOE_GUIDE_LAST: "Way to go! Now, onto the next round!",
GL_LANG_TICTACTOE_POPUP_RESTART_TITLE: "Restart Game?",
GL_LANG_TICTACTOE_POPUP_RESTART_DESC: "You'll lose your current progress, and this game will be counted as a Loss!",
GL_LANG_TICTACTOE_POPUP_RESTART_BUTTON_YES: "Restart",
GL_LANG_TICTACTOE_POPUP_RESTART_BUTTON_NO: "Cancel",
GL_LANG_MAHJONG_FULL_COMBO: "Full Combo!",
GL_LANG_MAHJONG_SKIP: "Skip",
GL_LANG_MAHJONG_TITLE_LEVEL: "LEVEL",
GL_LANG_MAHJONG_TITLE_MATCHES: "MATCHES",
GL_LANG_MAHJONG_TIP_1: "Remove tiles blocking the top first",
GL_LANG_MAHJONG_TIP_2: "Remove tiles on the left and right sides first",
GL_LANG_MAHJONG_TIP_3: "Currently unavailable. There are no undoable moves!",
GL_LANG_MAHJONG_POPUP_AGAIN_TITLE: "Restart Game?",
GL_LANG_MAHJONG_POPUP_AGAIN_DESC: "You'll lose your current progress!",
GL_LANG_MAHJONG_POPUP_AGAIN_RESTART: "Restart",
GL_LANG_MAHJONG_POPUP_AGAIN_NEWGAME: "New Game",
GL_LANG_MAHJONG_POPUP_AGAIN_CANCEL: "Cancel",
GL_LANG_MAHJONG_POPUP_HINT_TITLE: "Watch an ad to get reward: Hint",
GL_LANG_MAHJONG_POPUP_HINT_BUTTON_YES: "Great idea!",
GL_LANG_MAHJONG_POPUP_HINT_BUTTON_NO: "No thanks",
GL_LANG_MAHJONG_POPUP_SHUFFLE_TITLE: "Watch an ad to get reward: Shuffle",
GL_LANG_MAHJONG_POPUP_SHUFFLE_BUTTON_YES: "Great idea!",
GL_LANG_MAHJONG_POPUP_SHUFFLE_BUTTON_NO: "No thanks",
GL_LANG_MAHJONG_POPUP_LOSE_TITLE: "Out of Matches",
GL_LANG_MAHJONG_POPUP_LOSE_DESC: "Oops, you're out of matches. Restart or use Shuffle to try again!",
GL_LANG_MAHJONG_POPUP_LOSE_BUTTON_SHUFFLE: "Shuffle",
GL_LANG_MAHJONG_POPUP_LOSE_BUTTON_RESTART: "Restart",
GL_LANG_MAHJONG_GUIDE_STEP_LEVEL_1_1: "Tap two identical tiles to match and remove them",
GL_LANG_MAHJONG_GUIDE_STEP_LEVEL_1_2: "Match tiles on the sides to unlock the inner tiles",
GL_LANG_MAHJONG_GUIDE_STEP_LEVEL_1_3: "Match tiles on top to unlock the tiles below",
GL_LANG_MAHJONG_GUIDE_STEP_LEVEL_1_4: "Match tiles on top to unlock the tiles below",
GL_LANG_MAHJONG_GUIDE_STEP_LEVEL_4: "Special tiles: special tiles can match with each other",
GL_LANG_MAHJONG_GUIDE_STEP_LEVEL_6: "Special tiles: special tiles can match with each other",
GL_LANG_MAHJONG_GUIDE_STEP_NEW_LEVEL_1_1: "Tap two identical tiles to match and remove them.",
GL_LANG_MAHJONG_GUIDE_STEP_NEW_LEVEL_1_2: "Match tiles on top to unlock the tiles below.",
GL_LANG_MAHJONG_GUIDE_STEP_NEW_LEVEL_1_3: "Match the outer tiles to unlock the inner ones.",
GL_LANG_MAHJONG_GUIDE_STEP_NEW_LEVEL_1_4: "Remove all the tiles to win!",
GL_LANG_MAHJONG_GUIDE_STEP_PHASE_2: "Remove all the tiles on the left, right, and top to continue matching!",
GL_LANG_ONELINE_SKIP: "Skip",
GL_LANG_ONELINE_GUIDE: "Drag a single line from the starting point to fill all the squares!",
GL_LANG_ONELINE_TITLE_LEVEL: "LEVEL",
GL_LANG_ONELINE_POPUP_SEEAD_TITLE: "See ads to get free tips!",
GL_LANG_ONELINE_POPUP_SEEAD_BUTTON_YES: "Good Idea",
GL_LANG_ONELINE_POPUP_SEEAD_BUTTON_NO: "No Thanks",
GL_LANG_ONELINE_POPUP_RESTART_TITLE: "Restart Game?",
GL_LANG_ONELINE_POPUP_RESTART_DESC: "You'll lose your current progress, and this game will be counted as a Loss!",
GL_LANG_ONELINE_POPUP_RESTART_BUTTON_YES: "Restart",
GL_LANG_ONELINE_POPUP_RESTART_BUTTON_NO: "Cancel",
GL_LANG_WATERSORT_TITLE_LEVEL: "Level",
GL_LANG_WATERSORT_SKIP: "Skip",
GL_LANG_WATERSORT_LOSE_TIPS: "Not good, I'm going to lose this game. Restart the game or use props, and try again.",
GL_LANG_WATERSORT_REVERT_TIPS: "The number of test tubes has reached the upper limit",
GL_LANG_WATERSORT_GUIDE_1: "Click to select test tube",
GL_LANG_WATERSORT_GUIDE_2: "Only when the upper layer of the target test tube has the same color and there is empty space inside the tube, can it be poured in",
GL_LANG_WATERSORT_POPUP_USEITEM_TITLE: "UseItem",
GL_LANG_WATERSORT_POPUP_USEITEM_BUTTON_YES: "Use Item",
GL_LANG_WATERSORT_POPUP_USEITEM_BUTTON_NO: "No Thanks",
GL_LANG_WATERSORT_POPUP_UNLOCK_TITLE: "Unlock Or Upgrade test tube!",
GL_LANG_WATERSORT_POPUP_UNLOCK_BUTTON_YES: "Good Idea",
GL_LANG_WATERSORT_POPUP_UNLOCK_BUTTON_NO: "No Thanks",
GL_LANG_WATERSORT_POPUP_SEEAD_TITLE: "See ads to get free tips!",
GL_LANG_WATERSORT_POPUP_SEEAD_BUTTON_YES: "Good Idea",
GL_LANG_WATERSORT_POPUP_SEEAD_BUTTON_NO: "No Thanks",
GL_LANG_WATERSORT_POPUP_SEEAD_REVERT_TITLE: "See ads to get free revert tiems!",
GL_LANG_WATERSORT_POPUP_SEEAD_REVERT_BUTTON_YES: "Good Idea",
GL_LANG_WATERSORT_POPUP_SEEAD_REVERT_BUTTON_NO: "No Thanks",
GL_LANG_WATERSORT_POPUP_SEEAD_NEW_TUBE_TITLE: "See ads to get free add new tube tiems!",
GL_LANG_WATERSORT_POPUP_SEEAD_NEW_TUBE_BUTTON_YES: "Good Idea",
GL_LANG_WATERSORT_POPUP_SEEAD_NEW_TUBE_BUTTON_NO: "No Thanks",
GL_LANG_WATERSORT_POPUP_SEEAD_UNLOCK_TUBE_TITLE: "Watch an ad to unlock an empty tube!",
GL_LANG_WATERSORT_POPUP_SEEAD_UNLOCK_TUBE_BUTTON_YES: "Good Idea",
GL_LANG_WATERSORT_POPUP_SEEAD_UNLOCK_TUBE_BUTTON_NO: "No Thanks",
GL_LANG_WATERSORT_POPUP_RESTART_TITLE: "Restart Game?",
GL_LANG_WATERSORT_POPUP_RESTART_DESC: "You'll lose your current progress, and this game will be counted as a Loss!",
GL_LANG_WATERSORT_POPUP_RESTART_BUTTON_YES: "Restart",
GL_LANG_WATERSORT_POPUP_RESTART_BUTTON_NO: "Cancel",
GL_LANG_ONET_TITLE_LEVEL: "LEVEL",
GL_LANG_ONET_SKIP: "Skip",
GL_LANG_ONET_GUIDE_1: "Tap to match",
GL_LANG_ONET_GUIDE_2: "Tap to match",
GL_LANG_ONET_GUIDE_3: "Connect tiles with less than 2 turns",
GL_LANG_ONET_GUIDE_4: "Match same tiles with less than 2 turns and no obstacles",
GL_LANG_ONET_GUIDE_5: "Match all tiles win",
GL_LANG_ONET_POPUP_BUTTON_YES: "Great idea!",
GL_LANG_ONET_POPUP_BUTTON_NO: "No thanks",
GL_LANG_ONET_POPUP_TITLE_SHUFFLE: "Watch an ad to get reward: Refresh",
GL_LANG_ONET_POPUP_TITLE_HINT: "Watch an ad to get reward: Hint",
GL_LANG_ONET_POPUP_TITLE_OVERTIME: "Watch an ad to get reward: Extra Time",
GL_LANG_ONET_POPUP_ADDTIME_TITLE: "Out of Time",
GL_LANG_ONET_POPUP_ADDTIME_DESC: "Oops, you're out of time! Restart or use Extra 60s to try again!",
GL_LANG_ONET_POPUP_ADDTIME_BUTTON_YES: "Extra 60s",
GL_LANG_ONET_POPUP_ADDTIME_BUTTON_NO: "Restart",
GL_LANG_ONET_POPUP_RESTART_TITLE: "Restart Game?",
GL_LANG_ONET_POPUP_RESTART_DESC: "You'll lose your current progress, and this game will be counted as a Loss!",
GL_LANG_ONET_POPUP_RESTART_BUTTON_YES: "Restart",
GL_LANG_ONET_POPUP_RESTART_BUTTON_NO: "New Game",
GL_LANG_ONET_ERROR_TIPS: "Path blocked by other tiles",
GL_LANG_ONET_LEVEL_COMPLETE: "Level Complete",
GL_LANG_SUDOKU_TITLE_LEVEL: "LEVEL",
GL_LANG_SUDOKU_TITLE_TIME: "TIME",
GL_LANG_SUDOKU_GUIDE_SKIP: "Skip",
GL_LANG_SUDOKU_GUIDE_STEP1_TEXT: "Fill this row",
GL_LANG_SUDOKU_GUIDE_STEP1_BUBBLE_1_1: "Tap this cell",
GL_LANG_SUDOKU_GUIDE_STEP2_TEXT: "Fill this column",
GL_LANG_SUDOKU_GUIDE_STEP2_BUBBLE_1_1: "Each vertical column can only contain digits from 1 to 6",
GL_LANG_SUDOKU_GUIDE_STEP2_BUBBLE_1_2: "Tap this digit",
GL_LANG_SUDOKU_GUIDE_STEP2_BUBBLE_2_1: "Tap this cell",
GL_LANG_SUDOKU_GUIDE_STEP2_BUBBLE_ERROR: "Each digit can only appear once",
GL_LANG_SUDOKU_GUIDE_STEP3_TEXT: "Fill this box",
GL_LANG_SUDOKU_GUIDE_STEP3_BUBBLE_1_1: "Each box can only contain digits from 1 to 6",
GL_LANG_SUDOKU_GUIDE_STEP3_BUBBLE_1_2: "Tap this digit",
GL_LANG_SUDOKU_GUIDE_STEP3_BUBBLE_2_1: "Tap this cell",
GL_LANG_SUDOKU_GUIDE_STEP3_BUBBLE_ERROR: "Each digit can only appear once",
GL_LANG_SUDOKU_GUIDE_STEP4_TEXT: "Find the right spot for the digit 2",
GL_LANG_SUDOKU_GUIDE_STEP4_BUBBLE_1_1: "Observe the cells marked with × in this box, they are located in the same row as the digit 2",
GL_LANG_SUDOKU_GUIDE_STEP4_BUBBLE_1_2: "Tap this digit",
GL_LANG_SUDOKU_GUIDE_STEP4_BUBBLE_2_1: "Tap this cell",
GL_LANG_SUDOKU_GUIDE_STEP4_BUBBLE_ERROR: "Only the digit 2 can be filled in",
GL_LANG_SUDOKU_GAME_OVER_DESC: "You have lost all your Hearts and the game is about to fail. Restore 1 Heart to continue the game.",
GL_LANG_SUDOKU_GAME_OVER_BUTTON_RESTORE: "Restore 1 Heart",
GL_LANG_SUDOKU_GAME_OVER_BUTTON_NEW_GAME: "New Game",
GL_LANG_SUDOKU_GAME_OVER_BUTTON_RESTART: "Restart",
GL_LANG_SUDOKU_GAME_RESTART_TITLE: "Restart Game?",
GL_LANG_SUDOKU_GAME_RESTART_DESC: "You'll lose your current progress!",
GL_LANG_SUDOKU_GAME_RESTART_BUTTON_NEW_GAME: "New Game",
GL_LANG_SUDOKU_GAME_RESTART_BUTTON_RESTART: "Restart",
GL_LANG_SUDOKU_GAME_WIN_TITLE: "Pass Level",
GL_LANG_SUDOKU_GAME_WIN_SCORE: "SCORE",
GL_LANG_SUDOKU_GAME_WIN_TIME: "Time",
GL_LANG_SUDOKU_GAME_WIN_BUTTON_NEW_GAME: "New Game",
GL_LANG_SUDOKU_GAME_WIN_BACK: "Back",
GL_LANG_FRUIT_DIANZAN_1: "Good!",
GL_LANG_FRUIT_DIANZAN_2: "Excellent!",
GL_LANG_FRUIT_DIANZAN_3: "Great!",
GL_LANG_FRUIT_DIANZAN_4: "Amazing!",
GL_LANG_FRUIT_AD_COMING_TITLE: "Take a Break",
GL_LANG_FRUIT_AD_COMING_SUB_TITLE: "Ad will show in",
GL_LANG_FRUIT_TITLE_SCORE: "SCORE",
GL_LANG_FRUIT_TITLE_TIME: "ALL-TIME",
GL_LANG_FRUIT_TITLE_NEXT: "Next",
GL_LANG_FRUIT_GUIDE_1: "Tap to drop the fruit wherever you wish",
GL_LANG_FRUIT_GUIDE_2: "Or drag the line to your desired spot to drop the fruit",
GL_LANG_FRUIT_GUIDE_3: "Merge two indentical fruits to create a larger one",
GL_LANG_FRUIT_GUIDE_SKIP: "Skip",
GL_LANG_FRUIT_GUIDE_PROP_BOMB_DESC: "Tap a Fruit to clear it",
GL_LANG_FRUIT_POPUP_RESTART_TITLE: "Restart Game?",
GL_LANG_FRUIT_POPUP_RESTART_DESC: "You'll lose your current progress!",
GL_LANG_FRUIT_POPUP_RESTART_BUTTON_YES: "Restart",
GL_LANG_FRUIT_POPUP_RESTART_BUTTON_NO: "Cancel",
GL_LANG_FRUIT_POPUP_BOMB_TITLE: "Watch an ad to get reward: Bomb!",
GL_LANG_FRUIT_POPUP_BOMB_BUTTON_YES: "Great idea!",
GL_LANG_FRUIT_POPUP_BOMB_BUTTON_NO: "No thanks",
GL_LANG_FRUIT_POPUP_SHAKE_TITLE: "Watch an ad to get reward: Shake",
GL_LANG_FRUIT_POPUP_SHAKE_BUTTON_YES: "Great idea!",
GL_LANG_FRUIT_POPUP_SHAKE_BUTTON_NO: "No thanks",
GL_LANG_COMMON_RESULT_BUTTON_PLAY_AGAIN: "Play Again",
GL_LANG_COMMON_RESULT_OVER_FRUIT_SCORE: "Score",
GL_LANG_COMMON_RESULT_OVER_FRUIT_BEST_SCORE: "Golden Best Score",
GL_LANG_COMMON_RESULT_OVER_SCORE: "Score"
};
cc._RF.pop();
}, {} ],
GameLobbyKeepCtr: [ function(e, t, n) {
"use strict";
cc._RF.push(t, "49fa2Ul3+FN7rnXvQEyBJAh", "GameLobbyKeepCtr");
Object.defineProperty(n, "__esModule", {
value: !0
});
var i = function() {
function e() {}
e.isOpen = function() {
return GL.Game.IsFeatureOpen("GameLobbyKeepCtr");
};
e.getKeepGameList = function() {
var e = {
games: [ {
name: "一笔画",
bundle: "gl_oneline",
cover: ""
}, {
name: "井字棋",
bundle: "gl_tictactoe",
cover: ""
}, {
name: "连连看",
bundle: "gl_onet",
cover: ""
}, {
name: "合成大西瓜",
bundle: "gl_fruit",
cover: ""
}, {
name: "水排序",
bundle: "gl_watersort",
cover: ""
}, {
name: "土耳其方块",
bundle: "gl_blockslide",
cover: ""
} ]
}, t = GL.Game.getFeatureKeyParam("GameLobbyKeepCtr", "noKeep");
t && 1 == t && (e = {
games: [ {
name: "一笔画",
bundle: "gl_oneline",
cover: ""
}, {
name: "井字棋",
bundle: "gl_tictactoe",
cover: ""
}, {
name: "连连看",
bundle: "gl_onet",
cover: ""
}, {
name: "土耳其方块",
bundle: "gl_blockslide",
cover: ""
} ]
});
return e;
};
return e;
}();
n.default = i;
cc._RF.pop();
}, {} ],
GlBaseScene: [ function(e, t, n) {
"use strict";
cc._RF.push(t, "1c25eSxbDZDsofiw5Hk/Al+", "GlBaseScene");
var i, o = this && this.__extends || (i = function(e, t) {
return (i = Object.setPrototypeOf || {
__proto__: []
} instanceof Array && function(e, t) {
e.__proto__ = t;
} || function(e, t) {
for (var n in t) Object.prototype.hasOwnProperty.call(t, n) && (e[n] = t[n]);
})(e, t);
}, function(e, t) {
i(e, t);
function n() {
this.constructor = e;
}
e.prototype = null === t ? Object.create(t) : (n.prototype = t.prototype, new n());
}), a = this && this.__decorate || function(e, t, n, i) {
var o, a = arguments.length, r = a < 3 ? t : null === i ? i = Object.getOwnPropertyDescriptor(t, n) : i;
if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) r = Reflect.decorate(e, t, n, i); else for (var s = e.length - 1; s >= 0; s--) (o = e[s]) && (r = (a < 3 ? o(r) : a > 3 ? o(t, n, r) : o(t, n)) || r);
return a > 3 && r && Object.defineProperty(t, n, r), r;
};
Object.defineProperty(n, "__esModule", {
value: !0
});
var r = e("./GLHallController"), s = cc._decorator, l = s.ccclass, c = (s.property, 
function(e) {
o(t, e);
function t() {
var t = null !== e && e.apply(this, arguments) || this;
t.hiderBannerMax = 120;
t.hiderBannerCount = 0;
t._savedOpDurationEnterMs = 0;
return t;
}
t.prototype.onLoad = function() {
cc.director._kSpeed = 1;
this.sceneShowBanner() ? GL.Ad.showBanner() : this.schedule(this.onBannerShow, 1);
};
t.prototype.onBannerShow = function() {
GL.Ad.hideBanner();
this.hiderBannerCount++;
this.hiderBannerCount >= this.hiderBannerMax && this.unschedule(this.onBannerShow);
};
t.prototype.onDestroy = function() {
this.unscheduleAllCallbacks();
};
t.prototype.sceneShowBanner = function() {
var e = cc.view.getFrameSize().width, t = cc.view.getFrameSize().height, n = e / 1080, i = 1920 * (n = Math.ceil(100 * n) / 100);
if (t <= Math.ceil(i)) {
console.log("小游戏隐藏banner");
return !1;
}
console.log("小游戏显示banner");
return !0;
};
t.prototype.usrStartSubmit = function(e, t) {
var n = {
game_type: "15",
game_subtype: t,
game_id: e
}, i = "glUsrStartSubmit" + t, o = cc.sys.localStorage.getItem(i);
if (o) {
if (Number(o) != e) {
cc.sys.localStorage.setItem(i, e);
GL.Submit.sendGameData("usr_data_game_start", n);
}
} else {
cc.sys.localStorage.setItem(i, e);
GL.Submit.sendGameData("usr_data_game_start", n);
}
};
t.prototype.usrGuideStartSubmit = function(e, t) {
var n = {
game_type: "15",
game_subtype: t,
game_id: e
}, i = "glUsrGuideStartSubmit" + t, o = cc.sys.localStorage.getItem(i);
if (o) {
if (Number(o) != e) {
cc.sys.localStorage.setItem(i, e);
GL.Submit.sendGameData("guide_start", n);
}
} else {
cc.sys.localStorage.setItem(i, e);
GL.Submit.sendGameData("guide_start", n);
}
};
t.prototype.usrGuideEndSubmit = function(e, t) {
var n = {
game_type: "15",
game_subtype: t,
game_id: e
}, i = "glUsrGuideEndSubmit" + t, o = cc.sys.localStorage.getItem(i);
if (o) {
if (Number(o) != e) {
cc.sys.localStorage.setItem(i, e);
GL.Submit.sendGameData("guide_end", n);
}
} else {
cc.sys.localStorage.setItem(i, e);
GL.Submit.sendGameData("guide_end", n);
}
};
t.prototype.onEnable = function() {
this._savedOpDurationEnterMs = Date.now();
};
t.prototype.onDisable = function() {
var e = this.getSavedOperationDurationGameSubtype();
if (e && e.length > 0 && this._savedOpDurationEnterMs > 0) {
var t = Math.max(0, Math.floor((Date.now() - this._savedOpDurationEnterMs) / 1e3));
r.default.getInstance().writeCachedSavedOperationSeconds(e, t);
}
};
t.prototype.getSavedOperationDurationGameSubtype = function() {
return "";
};
t.prototype.sendGGameStartEvent = function(e, t, n, i) {
var o = {
game_type: "15",
game_subtype: String(t),
game_id: e,
resume_from_progress: n ? 1 : 0,
saved_operation_duration: n ? r.default.getInstance().readCachedSavedOperationSeconds(String(t)) : 0,
saved_operation_steps: n && (null == i ? void 0 : i.saved_operation_steps) || 0,
saved_minigame_progress: n ? (null == i ? void 0 : i.saved_minigame_progress) || "half_complete" : ""
};
GL.Submit.sendGameData("g_game_usr_data_game_start", o);
};
return a([ l ], t);
}(cc.Component));
n.default = c;
cc._RF.pop();
}, {
"./GLHallController": "GLHallController"
} ],
GlGameLobbySDKVersionCtr: [ function(e, t, n) {
"use strict";
cc._RF.push(t, "2def1zDGI5D6Yt8FjSJ964G", "GlGameLobbySDKVersionCtr");
Object.defineProperty(n, "__esModule", {
value: !0
});
n.miniGameBunldeSDKVer = void 0;
var i;
(function(e) {
e.gl_sudoku = "1.0.0";
e.gl_blockslide = "1.0.0";
e.gl_tictactoe = "1.0.0";
e.gl_oneline = "1.0.0";
e.gl_mahjong = "1.0.0";
e.gl_watersort = "1.0.0";
e.gl_fruit = "1.0.0";
e.gl_onet = "1.0.0";
})(i = n.miniGameBunldeSDKVer || (n.miniGameBunldeSDKVer = {}));
var o = function() {
function e() {
this._sdkConfig = null;
this.init();
}
e.getInstance = function() {
this.instance || (this.instance = new e());
return this.instance;
};
e.prototype.init = function() {
this._sdkConfig = {
gameMap: {
gl_sudoku: i.gl_sudoku,
gl_blockslide: i.gl_blockslide,
gl_tictactoe: i.gl_tictactoe,
gl_oneline: i.gl_oneline,
gl_mahjong: i.gl_mahjong,
gl_watersort: i.gl_watersort,
gl_fruit: i.gl_fruit,
gl_onet: i.gl_onet
}
};
};
e.prototype.isOpen = function() {
return GL.Game.IsFeatureOpen("GameLobbySDKVersionCtr");
};
e.prototype.checkIsSupportByConfig = function(e) {
var t;
if (e && e.games && e.games.length > 0) for (var n = e.games.length - 1; n >= 0; n--) {
var i = e.games[n];
if (i.bundle) {
var o = null === (t = this._sdkConfig) || void 0 === t ? void 0 : t.gameMap[i.bundle];
o && (this.checkAppFuncSupport(o) || e.games.splice(n, 1));
}
}
return e;
};
e.prototype.checkIsSupportByBundleName = function(e) {
var t, n = null === (t = this._sdkConfig) || void 0 === t ? void 0 : t.gameMap[e];
return !!n && this.checkAppFuncSupport(n);
};
e.prototype.getAppVersion = function() {
if (cc.sys.isNative) {
if (cc.sys.OS_ANDROID == cc.sys.os) return jsb.reflection.callStaticMethod("org.cocos2dx.javascript.JsCallJava", "getAppVersion", "()Ljava/lang/String;") || "0.0.0";
if (cc.sys.os == cc.sys.OS_IOS) return jsb.reflection.callStaticMethod("JSAndNative", "getAppVersion") || "0.0.0";
}
return "9.9.9";
};
e.prototype.checkAppFuncSupport = function(e) {
for (var t = this.getAppVersion(), n = t.split("."), i = e.split("."), o = Math.max(n.length, i.length); n.length < o; ) n.push("0");
for (;i.length < o; ) i.push("0");
for (var a = 0; a < n.length; ++a) {
var r = parseInt(n[a]), s = parseInt(i[a]);
if (r !== s) {
if (r > s) {
console.log("GameLobbySDKVersionCtr 当前App版本>目标版本 当前版本:" + t + " 目标版本:" + e);
return !0;
}
console.log("GameLobbySDKVersionCtr 当前App版本<目标版本 当前版本:" + t + " 目标版本:" + e);
return !1;
}
}
console.log("GameLobbySDKVersionCtr 当前App版本=目标版本 当前版本:" + t + " 目标版本:" + e);
return !0;
};
e.instance = null;
return e;
}();
n.default = o;
cc._RF.pop();
}, {} ],
GlRoundBox: [ function(e, t, n) {
"use strict";
cc._RF.push(t, "36c8dht0FpOM492fSygzXLo", "GlRoundBox");
var i, o = this && this.__extends || (i = function(e, t) {
return (i = Object.setPrototypeOf || {
__proto__: []
} instanceof Array && function(e, t) {
e.__proto__ = t;
} || function(e, t) {
for (var n in t) Object.prototype.hasOwnProperty.call(t, n) && (e[n] = t[n]);
})(e, t);
}, function(e, t) {
i(e, t);
function n() {
this.constructor = e;
}
e.prototype = null === t ? Object.create(t) : (n.prototype = t.prototype, new n());
}), a = this && this.__decorate || function(e, t, n, i) {
var o, a = arguments.length, r = a < 3 ? t : null === i ? i = Object.getOwnPropertyDescriptor(t, n) : i;
if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) r = Reflect.decorate(e, t, n, i); else for (var s = e.length - 1; s >= 0; s--) (o = e[s]) && (r = (a < 3 ? o(r) : a > 3 ? o(t, n, r) : o(t, n)) || r);
return a > 3 && r && Object.defineProperty(t, n, r), r;
};
Object.defineProperty(n, "__esModule", {
value: !0
});
n.SizeMode = void 0;
var r, s = [ 0, 9, 11, 0, 11, 1, 2, 8, 10, 2, 4, 8, 3, 5, 7, 3, 7, 6 ];
(function(e) {
e[e["CUSTOM: 自定义尺寸"] = 0] = "CUSTOM: 自定义尺寸";
e[e["TRIMMED: 原始尺寸裁剪透明像素"] = 1] = "TRIMMED: 原始尺寸裁剪透明像素";
e[e["RAW: 图片原始尺寸"] = 2] = "RAW: 图片原始尺寸";
})(r = n.SizeMode || (n.SizeMode = {}));
var l = cc._decorator, c = l.ccclass, u = l.property, _ = l.menu, d = function() {
function e() {
this.leftBottom = !0;
this.rightBottom = !0;
this.rightTop = !0;
this.leftTop = !0;
this.visible = null;
}
return a([ c("Corner") ], e);
}(), h = function(e) {
o(t, e);
function t() {
var t = null !== e && e.apply(this, arguments) || this;
t.atlas = null;
t._spriteFrame = null;
t._sizeMode = r["TRIMMED: 原始尺寸裁剪透明像素"];
t._radius = 100;
t._segment = 5;
t._corner = new d();
t.renderData = null;
t.xyOffset = 1e8;
t.uvOffset = 1e8;
t.colorOffset = 1e8;
t.step = 0;
t.local = [];
return t;
}
Object.defineProperty(t.prototype, "spriteFrame", {
get: function() {
return this._spriteFrame;
},
set: function(e) {
this._spriteFrame = e;
this.updateSpriteFrame();
this.updateSizeMode();
},
enumerable: !1,
configurable: !0
});
Object.defineProperty(t.prototype, "sizeMode", {
get: function() {
return this._sizeMode;
},
set: function(e) {
this._sizeMode = e;
this.updateSizeMode();
},
enumerable: !1,
configurable: !0
});
Object.defineProperty(t.prototype, "radius", {
get: function() {
return this._radius;
},
set: function(e) {
this._radius = Math.max(e, 0);
this.setVertsDirty();
},
enumerable: !1,
configurable: !0
});
Object.defineProperty(t.prototype, "segment", {
get: function() {
return this._segment;
},
set: function(e) {
this._segment = Math.max(e, 1);
this.createBuffer();
this.updateIndice();
this.setVertsDirty();
this.node._renderFlag |= cc.RenderFlow.FLAG_OPACITY_COLOR;
},
enumerable: !1,
configurable: !0
});
Object.defineProperty(t.prototype, "corner", {
get: function() {
return this._corner;
},
set: function(e) {
this._corner = e;
this.updateCorner();
this.createBuffer();
this.updateIndice();
this.setVertsDirty();
this.node._renderFlag |= cc.RenderFlow.FLAG_OPACITY_COLOR;
},
enumerable: !1,
configurable: !0
});
t.prototype._resetAssembler = function() {
var e = this._assembler = new cc.Assembler();
e.updateRenderData = this.updateVData.bind(this);
e.updateColor = this.updateColor.bind(this);
e.init(this);
this.renderData = new cc.RenderData();
this.renderData.init(e);
for (var t = e.getVfmt(), n = t._elements, i = n.length - 1; i > -1; this.step += n[i--].bytes >> 2) ;
var o = t._attr2el;
this.xyOffset = o.a_position.offset >> 2;
this.uvOffset = o.a_uv0.offset >> 2;
this.colorOffset = o.a_color.offset >> 2;
};
t.prototype.onLoad = function() {
this.updateSpriteFrame();
this.updateSizeMode();
this.updateCorner();
this.createBuffer();
this.updateIndice();
this.node.on(cc.Node.EventType.ANCHOR_CHANGED, this.onAnchorChanged, this);
this.node.on(cc.Node.EventType.SIZE_CHANGED, this.onSizeChanged, this);
};
t.prototype.onDestroy = function() {
e.prototype.onDestroy.call(this);
this.node.off(cc.Node.EventType.ANCHOR_CHANGED, this.onAnchorChanged, this);
this.node.off(cc.Node.EventType.SIZE_CHANGED, this.onSizeChanged, this);
};
t.prototype.updateCorner = function() {
var e = this._corner;
e.visible = [ e.leftBottom, e.rightBottom, e.rightTop, e.leftTop ];
};
t.prototype.createBuffer = function() {
for (var e = 0, t = 0, n = this._corner.visible; t < 4; n[t++] && ++e) ;
var i = new Float32Array(5 * (12 + e * (this._segment - 1))), o = new Uint16Array(3 * (6 + e * this._segment));
this.renderData.updateMesh(0, i, o);
};
t.prototype.fillBuffers = function(e, t) {
var n = this.renderData.vDatas[0], i = this.renderData.iDatas[0];
t.worldMatDirty && this.fitXY(n);
var o = t._meshBuffer, a = o.request(n.length, i.length), r = a.byteOffset >> 2, s = o._vData;
n.length + r > s.length ? s.set(n.subarray(0, s.length - r), r) : s.set(n, r);
for (var l = o._iData, c = a.indiceOffset, u = a.vertexOffset, _ = 0, d = i.length; _ < d; l[c++] = u + i[_++]) ;
};
t.prototype.updateSpriteFrame = function() {
var e = this._spriteFrame;
this._assembler.fillBuffers = e ? this.fillBuffers.bind(this) : function() {};
var t = this.getMaterial(0) || cc.Material.getBuiltinMaterial("2d-sprite");
t.define("USE_TEXTURE", !0);
t.setProperty("texture", e ? e.getTexture() : null);
};
t.prototype.updateSizeMode = function() {
if (this._spriteFrame) switch (this._sizeMode) {
case r["TRIMMED: 原始尺寸裁剪透明像素"]:
this.node.setContentSize(this._spriteFrame._rect.size);
break;

case r["RAW: 图片原始尺寸"]:
this.node.setContentSize(this._spriteFrame._originalSize);
}
};
t.prototype.updateVData = function() {
var e = this.renderData.vDatas[0], t = cc.sys.isNative ? e : this.local, n = this.node, i = n.width, o = n.height, a = -i * n.anchorX, r = -o * n.anchorY, s = i * (1 - n.anchorX), l = o * (1 - n.anchorY), c = Math.min(this._radius, Math.min(i, o) / 2), u = a + c, _ = r + c, d = s - c, h = l - c, f = this._corner;
t[0] = u;
t[1] = f.leftBottom ? _ : r;
t[5] = a;
t[6] = t[1];
t[10] = u;
t[11] = r;
t[15] = d;
t[16] = f.rightBottom ? _ : r;
t[20] = d;
t[21] = r;
t[25] = s;
t[26] = t[16];
t[30] = d;
t[31] = f.rightTop ? h : l;
t[35] = s;
t[36] = t[31];
t[40] = d;
t[41] = l;
t[45] = u;
t[46] = f.leftTop ? h : l;
t[50] = u;
t[51] = l;
t[55] = a;
t[56] = t[46];
for (var p = Math.PI / (this._segment << 1), g = Math.cos(p), m = Math.sin(p), G = f.visible, L = 0, y = 60, T = this.step; L < 4; ++L) if (G[L]) for (var E = 3 * L * T, v = t[E], S = t[E + 1], A = t[E += T] - v, O = t[E + 1] - S, N = 0, b = this._segment - 1; N < b; ++N) {
t[y] = v + A * g - O * m;
t[y + 1] = S + O * g + A * m;
A = t[y] - v;
O = t[y + 1] - S;
y += T;
}
!cc.sys.isNative && this.fitXY(e);
for (L = 0, b = e.length, T = this.step; L < b; L += T) {
e[L + 2] = (t[L] - a) / i;
e[L + 3] = 1 - (t[L + 1] - r) / o;
}
this.fitUV(e);
};
t.prototype.fitXY = function(e) {
for (var t = this.node._worldMatrix.m, n = t[0], i = t[1], o = t[4], a = t[5], r = t[12], s = t[13], l = this.xyOffset, c = e.length, u = this.step, _ = this.local; l < c; l += u) {
var d = _[l], h = _[l + 1];
e[l] = d * n + h * o + r;
e[l + 1] = d * i + h * a + s;
}
};
t.prototype.fitUV = function(e) {
var t = this._spriteFrame;
if (null !== t) {
var n = t._texture.width, i = t._texture.height, o = t._rect;
if (t._rotated) for (var a = this.uvOffset, r = 0, s = e.length, l = this.step; a < s; a += l, 
++r) {
var c = e[a];
e[a] = ((1 - e[a + 1]) * o.height + o.x) / n;
e[a + 1] = (c * o.width + o.y) / i;
} else for (a = this.uvOffset, r = 0, s = e.length, l = this.step; a < s; a += l, 
++r) {
e[a] = (e[a] * o.width + o.x) / n;
e[a + 1] = (e[a + 1] * o.height + o.y) / i;
}
}
};
t.prototype.updateColor = function() {
for (var e = this.renderData.uintVDatas[0], t = this.node.color._val, n = this.colorOffset, i = e.length, o = this.step; n < i; e[n] = t, 
n += o) ;
};
t.prototype.updateIndice = function() {
for (var e = this.renderData.iDatas[0], t = s.length - 1; t > -1; e[t] = s[t--]) ;
var n = s.length, i = this._corner.visible, o = 36;
for (t = 0; t < 4; ++t) if (i[t]) {
for (var a = 3 * t, r = a + 1, l = o / 3, c = 0, u = this._segment - 1; c < u; ++c) {
e[n++] = a;
e[n++] = r;
e[n++] = l;
r = l++;
o += 3;
}
e[n++] = a;
e[n++] = r;
e[n++] = a + 2;
}
};
t.prototype.onAnchorChanged = function() {
this.setVertsDirty();
};
t.prototype.onSizeChanged = function() {
this.setVertsDirty();
if (this._spriteFrame) switch (this._sizeMode) {
case r["TRIMMED: 原始尺寸裁剪透明像素"]:
var e = this._spriteFrame._rect.size;
if (this.node.width === e.width && this.node.height === e.height) return;
break;

case r["RAW: 图片原始尺寸"]:
var t = this._spriteFrame._originalSize;
if (this.node.width === t.width && this.node.height === t.height) return;
}
this._sizeMode = r["CUSTOM: 自定义尺寸"];
};
a([ u({
type: cc.SpriteAtlas,
serializable: !1,
readonly: !0,
displayName: "Atlas"
}) ], t.prototype, "atlas", void 0);
a([ u ], t.prototype, "_spriteFrame", void 0);
a([ u({
type: cc.SpriteFrame,
displayName: "Sprite Frame"
}) ], t.prototype, "spriteFrame", null);
a([ u ], t.prototype, "_sizeMode", void 0);
a([ u({
type: cc.Enum(r),
displayName: "Size Mode"
}) ], t.prototype, "sizeMode", null);
a([ u ], t.prototype, "_radius", void 0);
a([ u({
displayName: "圆角半径"
}) ], t.prototype, "radius", null);
a([ u ], t.prototype, "_segment", void 0);
a([ u({
type: cc.Integer,
displayName: "线段数量"
}) ], t.prototype, "segment", null);
a([ u ], t.prototype, "_corner", void 0);
return a([ c, _("GLComp/GlRoundBox") ], t);
}(cc.RenderComponent);
n.default = h;
cc._RF.pop();
}, {} ],
Gl_settingView: [ function(e, t, n) {
"use strict";
cc._RF.push(t, "cdeb4ls4VdHDr3GxMoeda66", "Gl_settingView");
var i, o = this && this.__extends || (i = function(e, t) {
return (i = Object.setPrototypeOf || {
__proto__: []
} instanceof Array && function(e, t) {
e.__proto__ = t;
} || function(e, t) {
for (var n in t) Object.prototype.hasOwnProperty.call(t, n) && (e[n] = t[n]);
})(e, t);
}, function(e, t) {
i(e, t);
function n() {
this.constructor = e;
}
e.prototype = null === t ? Object.create(t) : (n.prototype = t.prototype, new n());
}), a = this && this.__decorate || function(e, t, n, i) {
var o, a = arguments.length, r = a < 3 ? t : null === i ? i = Object.getOwnPropertyDescriptor(t, n) : i;
if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) r = Reflect.decorate(e, t, n, i); else for (var s = e.length - 1; s >= 0; s--) (o = e[s]) && (r = (a < 3 ? o(r) : a > 3 ? o(t, n, r) : o(t, n)) || r);
return a > 3 && r && Object.defineProperty(t, n, r), r;
};
Object.defineProperty(n, "__esModule", {
value: !0
});
var r = e("../../gl_result/Func/GLResultViewFeature"), s = cc._decorator, l = s.ccclass, c = s.property, u = cc.color().fromHEX("#5285F6"), _ = cc.color().fromHEX("#AAB7D0"), d = function(e) {
o(t, e);
function t() {
var t = null !== e && e.apply(this, arguments) || this;
t.closeBtn = null;
t.backBlastBtn = null;
t.musicBtn = null;
t.effectBtn = null;
t.shakeBtn = null;
return t;
}
t.prototype._setMusicImg2 = function(e, t) {
var n = e.getChildByName("toggle"), i = n.getChildByName("icon_circle");
if (t) {
i.x = 25;
n.color = new cc.Color(82, 133, 246);
} else {
i.x = -25;
n.color = new cc.Color(170, 183, 208);
}
};
t.prototype.onLoad = function() {
this.updateToggle(this.musicBtn, GL.Audio.getMusicSwitch());
this.updateToggle(this.effectBtn, GL.Audio.getSoundSwitch());
this.updateToggle(this.shakeBtn, GL.Vibration.getVibrationSwitch());
};
t.prototype.backBlastHandler = function() {
var e = r.GLResultViewFeature.isOpenBackGame(), t = r.GLResultViewFeature.isOpenStartScene();
e ? GL.Game.MainEmit({
type: GL.Game.MainEvent.EventType.EnterGame,
gameKey: "NewGameSkinScene9"
}) : t && GL.Game.get6205GameState() ? cc.director.loadScene("StartGameScene2") : GL.Game.MainEmit({
type: GL.Game.MainEvent.EventType.EnterGame,
gameKey: "NewGameSkinScene9"
});
};
t.prototype.closeHandler = function() {
GL.Audio.playNormal2();
this.node.parent.removeChild(this.node);
this.node.destroy();
};
t.prototype.musicHandler = function() {
GL.Game.MainEmit({
type: GL.Game.MainEvent.EventType.SettingUpdate,
musicSwitch: !GL.Audio.getMusicSwitch(),
soundSwitch: GL.Audio.getSoundSwitch(),
vibrationSwitch: GL.Vibration.getVibrationSwitch()
});
this.updateToggle(this.musicBtn, GL.Audio.getMusicSwitch());
GL.Audio.getMusicSwitch() ? GL.Audio.playNormal2() : GL.Audio.playNormal1();
};
t.prototype.effectHandler = function() {
GL.Game.MainEmit({
type: GL.Game.MainEvent.EventType.SettingUpdate,
musicSwitch: GL.Audio.getMusicSwitch(),
soundSwitch: !GL.Audio.getSoundSwitch(),
vibrationSwitch: GL.Vibration.getVibrationSwitch()
});
this.updateToggle(this.effectBtn, GL.Audio.getSoundSwitch());
GL.Audio.getSoundSwitch() ? GL.Audio.playNormal2() : GL.Audio.playNormal1();
};
t.prototype.shakeHandler = function() {
GL.Game.MainEmit({
type: GL.Game.MainEvent.EventType.SettingUpdate,
musicSwitch: GL.Audio.getMusicSwitch(),
soundSwitch: GL.Audio.getSoundSwitch(),
vibrationSwitch: !GL.Vibration.getVibrationSwitch()
});
this.updateToggle(this.shakeBtn, GL.Vibration.getVibrationSwitch());
GL.Vibration.getVibrationSwitch() ? GL.Audio.playNormal2() : GL.Audio.playNormal1();
};
t.prototype.updateToggle = function(e, t) {
var n = e.getChildByName("toggle"), i = n.getChildByName("icon_circle");
if (t) {
i.x = 25;
n.color = u;
} else {
i.x = -25;
n.color = _;
}
};
a([ c(cc.Node) ], t.prototype, "closeBtn", void 0);
a([ c(cc.Node) ], t.prototype, "backBlastBtn", void 0);
a([ c(cc.Node) ], t.prototype, "musicBtn", void 0);
a([ c(cc.Node) ], t.prototype, "effectBtn", void 0);
a([ c(cc.Node) ], t.prototype, "shakeBtn", void 0);
return a([ l ], t);
}(cc.Component);
n.default = d;
cc._RF.pop();
}, {
"../../gl_result/Func/GLResultViewFeature": "GLResultViewFeature"
} ],
HallFeature: [ function(e, t, n) {
"use strict";
cc._RF.push(t, "48521H5ruxEVow1tyNTlV79", "HallFeature");
Object.defineProperty(n, "__esModule", {
value: !0
});
n.HallFeat = void 0;
(function(e) {
e.InsertAdsBlockInputEvents = "InsertAdsBlockInputEvents";
e.HallNotShowResultView = "HallNotShowResultView";
})(n.HallFeat || (n.HallFeat = {}));
var i = function() {
function e() {}
e.isOpen = function(e) {
return GL.Game.IsFeatureOpen(e);
};
e.getInsertAdsBlockInputEventsTime = function() {
return GL.Game.getFeatureKeyParam("InsertAdsBlockInputEvents", "time") || 1;
};
return e;
}();
n.default = i;
cc._RF.pop();
}, {} ],
MiniGameDeliveryUndertakeCtrl: [ function(e, t, n) {
"use strict";
cc._RF.push(t, "a3f8cLRfktKn7YSjV48fxog", "MiniGameDeliveryUndertakeCtrl");
var i = this && this.__awaiter || function(e, t, n, i) {
return new (n || (n = Promise))(function(o, a) {
function r(e) {
try {
l(i.next(e));
} catch (e) {
a(e);
}
}
function s(e) {
try {
l(i.throw(e));
} catch (e) {
a(e);
}
}
function l(e) {
e.done ? o(e.value) : (t = e.value, t instanceof n ? t : new n(function(e) {
e(t);
})).then(r, s);
var t;
}
l((i = i.apply(e, t || [])).next());
});
}, o = this && this.__generator || function(e, t) {
var n, i, o, a, r = {
label: 0,
sent: function() {
if (1 & o[0]) throw o[1];
return o[1];
},
trys: [],
ops: []
};
return a = {
next: s(0),
throw: s(1),
return: s(2)
}, "function" == typeof Symbol && (a[Symbol.iterator] = function() {
return this;
}), a;
function s(e) {
return function(t) {
return l([ e, t ]);
};
}
function l(a) {
if (n) throw new TypeError("Generator is already executing.");
for (;r; ) try {
if (n = 1, i && (o = 2 & a[0] ? i.return : a[0] ? i.throw || ((o = i.return) && o.call(i), 
0) : i.next) && !(o = o.call(i, a[1])).done) return o;
(i = 0, o) && (a = [ 2 & a[0], o.value ]);
switch (a[0]) {
case 0:
case 1:
o = a;
break;

case 4:
r.label++;
return {
value: a[1],
done: !1
};

case 5:
r.label++;
i = a[1];
a = [ 0 ];
continue;

case 7:
a = r.ops.pop();
r.trys.pop();
continue;

default:
if (!(o = r.trys, o = o.length > 0 && o[o.length - 1]) && (6 === a[0] || 2 === a[0])) {
r = 0;
continue;
}
if (3 === a[0] && (!o || a[1] > o[0] && a[1] < o[3])) {
r.label = a[1];
break;
}
if (6 === a[0] && r.label < o[1]) {
r.label = o[1];
o = a;
break;
}
if (o && r.label < o[2]) {
r.label = o[2];
r.ops.push(a);
break;
}
o[2] && r.ops.pop();
r.trys.pop();
continue;
}
a = t.call(e, r);
} catch (e) {
a = [ 6, e ];
i = 0;
} finally {
n = o = 0;
}
if (5 & a[0]) throw a[1];
return {
value: a[0] ? a[1] : void 0,
done: !0
};
}
};
Object.defineProperty(n, "__esModule", {
value: !0
});
var a = function() {
function e() {
this.loadComplete = !1;
this.fingerPrefab = null;
this.assetPaths = [ "prefabs/finger" ];
this.assetMap = new Map();
}
e.getInstance = function() {
if (null == this._instance) {
this._instance = new e();
this._instance.loadFingerPrefabPool();
}
return this._instance;
};
e.isOpen = function() {
var e, t;
return !(null === (e = null === GL || void 0 === GL ? void 0 : GL.gamelobby) || void 0 === e || !e.isTraitActive) && (null === (t = null === GL || void 0 === GL ? void 0 : GL.gamelobby) || void 0 === t ? void 0 : t.isTraitActive("MiniGameDeliveryUndertakeTrait"));
};
e.prototype.checkCanShowAds = function() {
var t, n = GL.Game.getFeatureKeyParam(e._featureName, "miniGameAd") || 0;
if (!(null === (t = GL.gamelobby) || void 0 === t ? void 0 : t.getStorageValue)) return !1;
var i = GL.gamelobby.getStorageValue("MiniGameDeliveryUndertakeTraitMiniGameNum", 0);
console.log("MiniGameDeliveryUndertake 小游戏承接特性 判断是否出插屏 配置最大免广告局数 ", n);
console.log("MiniGameDeliveryUndertake 小游戏承接特性 判断是否出插屏 当前小游戏局数 ", i);
return i > n;
};
e.prototype.checkCanShowGuide = function() {
var t, n = GL.Game.getFeatureKeyParam(e._featureName, "miniGameNum") || 0;
if (!(null === (t = GL.gamelobby) || void 0 === t ? void 0 : t.getStorageValue)) return !1;
var i = GL.gamelobby.getStorageValue("MiniGameDeliveryUndertakeGuideTriggered", 0);
if (i) return !1;
var o = GL.gamelobby.getStorageValue("MiniGameDeliveryUndertakeTraitMiniGameNum", 0);
console.log("MiniGameDeliveryUndertake 小游戏承接特性 判断是否显示引导 配置触发引导局数 ", n);
console.log("MiniGameDeliveryUndertake 小游戏承接特性 判断是否显示引导 当前小游戏局数 ", o);
console.log("MiniGameDeliveryUndertake 小游戏承接特性 判断是否显示引导 引导是否已触发 ", i);
return o === n;
};
e.prototype.markGuideTriggered = function() {
var e;
(null === (e = GL.gamelobby) || void 0 === e ? void 0 : e.setStorageValue) && GL.gamelobby.setStorageValue("MiniGameDeliveryUndertakeGuideTriggered", 1);
};
e.prototype.addTraitMiniGameNum = function() {
var e, t;
if (this.fingerPrefab) {
console.log("MiniGameDeliveryUndertake 小游戏承接特性 小游戏局数加1");
if ((null === (e = GL.gamelobby) || void 0 === e ? void 0 : e.getStorageValue) && (null === (t = GL.gamelobby) || void 0 === t ? void 0 : t.setStorageValue)) {
var n = GL.gamelobby.getStorageValue("MiniGameDeliveryUndertakeTraitMiniGameNum", 0);
GL.gamelobby.setStorageValue("MiniGameDeliveryUndertakeTraitMiniGameNum", n + 1);
}
} else console.log("MiniGameDeliveryUndertake 小游戏承接特性 资源未加载完，特性不生效，次数不加1");
};
e.prototype.createFingerAnimation = function(e, t) {
void 0 === t && (t = cc.v2(0, 0));
if (this.fingerPrefab) if (e && cc.isValid(e)) {
if (this.checkCanShowGuide()) {
console.log("MiniGameDeliveryUndertake 小游戏承接特性 在指定位置创建手指动画");
var n = cc.instantiate(this.fingerPrefab);
n.setPosition(t);
e.addChild(n);
this.markGuideTriggered();
}
} else console.log("MiniGameDeliveryUndertake 小游戏承接特性 节点无效，不做创建动画逻辑"); else console.log("MiniGameDeliveryUndertake 小游戏承接特性 资源未加载完，特性不生效，不做创建动画逻辑");
};
e.prototype.loadFingerPrefabPool = function() {
return i(this, void 0, Promise, function() {
var e = this;
return o(this, function(t) {
switch (t.label) {
case 0:
return this.fingerPrefab ? [ 2 ] : [ 4, this.loadFingerPrefab().then(function() {
e.loadComplete = null != e.assetMap && e.assetMap.size === e.assetPaths.length;
var t = e.assetMap.get("prefabs/finger");
t && cc.isValid(t) && (e.fingerPrefab = t);
}) ];

case 1:
t.sent();
return [ 2 ];
}
});
});
};
e.prototype.loadFingerPrefab = function() {
var t;
return i(this, void 0, Promise, function() {
var n, i, a, r = this;
return o(this, function(o) {
switch (o.label) {
case 0:
if (!(n = null === (t = GL.Game) || void 0 === t ? void 0 : t.resLoaderLoadBundle)) {
console.log("【MiniGameDeliveryUndertake】resLoaderLoadBundle 不可用, 中止加载");
return [ 2 ];
}
i = 0;
return [ 4, n(e._bundleName, !0) ];

case 1:
return (a = o.sent()) ? [ 4, new Promise(function(e) {
for (var t = function(t) {
a.load(r.assetPaths[t], function(n, o) {
n ? console.log("【MiniGameDeliveryUndertake】加载失败: " + r.assetPaths[t] + ", err=", n) : r.assetMap.set(r.assetPaths[t], o);
++i >= r.assetPaths.length && e(!0);
});
}, n = 0; n < r.assetPaths.length; n++) t(n);
}) ] : [ 3, 3 ];

case 2:
o.sent();
return [ 3, 4 ];

case 3:
console.log("【MiniGameDeliveryUndertake】加载 bundle 失败");
o.label = 4;

case 4:
return [ 2 ];
}
});
});
};
e._instance = null;
e._featureName = "MiniGameDeliveryUndertake";
e._bundleName = "Remote_gl_hall_MiniGameDeliveryUndertake";
return e;
}();
n.default = a;
cc._RF.pop();
}, {} ],
MiniGameQuitGameConfirm: [ function(e, t, n) {
"use strict";
cc._RF.push(t, "ce778vQG5BLdJJp1NRegAF5", "MiniGameQuitGameConfirm");
var i, o = this && this.__extends || (i = function(e, t) {
return (i = Object.setPrototypeOf || {
__proto__: []
} instanceof Array && function(e, t) {
e.__proto__ = t;
} || function(e, t) {
for (var n in t) Object.prototype.hasOwnProperty.call(t, n) && (e[n] = t[n]);
})(e, t);
}, function(e, t) {
i(e, t);
function n() {
this.constructor = e;
}
e.prototype = null === t ? Object.create(t) : (n.prototype = t.prototype, new n());
}), a = this && this.__decorate || function(e, t, n, i) {
var o, a = arguments.length, r = a < 3 ? t : null === i ? i = Object.getOwnPropertyDescriptor(t, n) : i;
if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) r = Reflect.decorate(e, t, n, i); else for (var s = e.length - 1; s >= 0; s--) (o = e[s]) && (r = (a < 3 ? o(r) : a > 3 ? o(t, n, r) : o(t, n)) || r);
return a > 3 && r && Object.defineProperty(t, n, r), r;
};
Object.defineProperty(n, "__esModule", {
value: !0
});
var r = cc._decorator, s = r.ccclass, l = r.property, c = function(e) {
o(t, e);
function t() {
var t = null !== e && e.apply(this, arguments) || this;
t.confirmQuitBtn = null;
t.continueGameBtn = null;
t._onConfirmQuitCallback = null;
return t;
}
t.prototype.setOnConfirmQuitCallback = function(e) {
this._onConfirmQuitCallback = e;
};
t.prototype.onConfirmQuit = function() {
cc.find("Canvas/Main Camera").getComponent(cc.Camera).zoomRatio = 1;
GL.Audio.playNormal2();
var e = this._onConfirmQuitCallback;
this._onConfirmQuitCallback = null;
null == e || e();
this.node.parent.removeChild(this.node);
this.node.destroy();
};
t.prototype.onContinueGame = function() {
GL.Audio.playNormal2();
this.node.parent.removeChild(this.node);
this.node.destroy();
};
a([ l(cc.Node) ], t.prototype, "confirmQuitBtn", void 0);
a([ l(cc.Node) ], t.prototype, "continueGameBtn", void 0);
return a([ s ], t);
}(cc.Component);
n.default = c;
cc._RF.pop();
}, {} ],
UIResultView2: [ function(e, t, n) {
"use strict";
cc._RF.push(t, "92489E6DMVE6rD7liB72Wtk", "UIResultView2");
var i, o = this && this.__extends || (i = function(e, t) {
return (i = Object.setPrototypeOf || {
__proto__: []
} instanceof Array && function(e, t) {
e.__proto__ = t;
} || function(e, t) {
for (var n in t) Object.prototype.hasOwnProperty.call(t, n) && (e[n] = t[n]);
})(e, t);
}, function(e, t) {
i(e, t);
function n() {
this.constructor = e;
}
e.prototype = null === t ? Object.create(t) : (n.prototype = t.prototype, new n());
}), a = this && this.__decorate || function(e, t, n, i) {
var o, a = arguments.length, r = a < 3 ? t : null === i ? i = Object.getOwnPropertyDescriptor(t, n) : i;
if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) r = Reflect.decorate(e, t, n, i); else for (var s = e.length - 1; s >= 0; s--) (o = e[s]) && (r = (a < 3 ? o(r) : a > 3 ? o(t, n, r) : o(t, n)) || r);
return a > 3 && r && Object.defineProperty(t, n, r), r;
};
Object.defineProperty(n, "__esModule", {
value: !0
});
n.ResultView2 = void 0;
var r = e("../../Func/GLResultViewFeature"), s = e("../../../script/hall/GLHallController"), l = cc._decorator, c = l.ccclass, u = l.property, _ = function(e) {
o(t, e);
function t() {
var t = null !== e && e.apply(this, arguments) || this;
t.spineWinLost = null;
t.spineDraw = null;
t._hideTime = 0;
t.func = null;
t._hideResultBannerCount = 0;
t._hideResultBannerMax = 120;
return t;
}
t.prototype.onEnable = function() {
this.startHideResultBanner();
};
t.prototype.onDisable = function() {
this.stopHideResultBanner();
};
t.prototype.startHideResultBanner = function() {
if (r.GLResultViewFeature.isRemoveResultViewBanner()) {
this._hideResultBannerCount = 0;
this.unschedule(this.onHideResultBannerTick);
GL.Ad.hideBanner();
this.schedule(this.onHideResultBannerTick, 1);
}
};
t.prototype.onHideResultBannerTick = function() {
GL.Ad.hideBanner();
this._hideResultBannerCount++;
this._hideResultBannerCount >= this._hideResultBannerMax && this.unschedule(this.onHideResultBannerTick);
};
t.prototype.stopHideResultBanner = function() {
if (r.GLResultViewFeature.isRemoveResultViewBanner()) {
this.unschedule(this.onHideResultBannerTick);
s.default.getInstance().sceneShowBanner();
}
};
t.prototype.onClose = function() {
var e;
null === (e = this.func) || void 0 === e || e.call(this);
this.node.parent = null;
this.node.destroy();
};
t.prototype.SetResultType = function(e, t) {
this.func = e;
this.tweenJingziqi(t);
};
t.prototype.tweenJingziqi = function(e) {
var t = this;
switch (e) {
case 0:
GL.Audio.playEffect("resource/audio/platform_win_bgm", "gl_hall");
this.spineWinLost.node.active = !0;
this.spineWinLost.setAnimation(0, "win", !1);
this.spineWinLost.setCompleteListener(function(e) {
"win" == e.animation.name && t.onClose();
});
GL.Game.shakeByProp("VibrationProjectTictactoeGp", "winCrown");
break;

case 1:
GL.Audio.playEffect("resource/audio/platform_lost_bgm", "gl_hall");
this.spineWinLost.node.active = !0;
this.spineWinLost.setAnimation(0, "lost", !1);
this.spineWinLost.setCompleteListener(function(e) {
"lost" == e.animation.name && t.onClose();
});
break;

case 2:
GL.Audio.playEffect("resource/audio/platform_win_incentive", "gl_hall");
try {
this.spineDraw.node.active = !0;
this.spineDraw.setAnimation(0, "in", !1);
this.spineDraw.setCompleteListener(function(e) {
"in" == e.animation.name && cc.tween(t.spineDraw.node).delay(t._hideTime).call(function() {
t.spineDraw.setAnimation(0, "out", !1);
}).start();
if ("out" == e.animation.name) {
t.spineDraw.setCompleteListener(null);
t.onClose();
}
});
} catch (e) {
console.log("🍎🍎🍎 miniGame==spineDraw动画错误==error=>", e);
}
}
};
a([ u(sp.Skeleton) ], t.prototype, "spineWinLost", void 0);
a([ u(sp.Skeleton) ], t.prototype, "spineDraw", void 0);
return a([ c ], t);
}(cc.Component);
n.ResultView2 = _;
cc._RF.pop();
}, {
"../../../script/hall/GLHallController": "GLHallController",
"../../Func/GLResultViewFeature": "GLResultViewFeature"
} ],
UIResultView3: [ function(e, t, n) {
"use strict";
cc._RF.push(t, "e4440FMMH5Po5y/5IxtSFr3", "UIResultView3");
var i, o = this && this.__extends || (i = function(e, t) {
return (i = Object.setPrototypeOf || {
__proto__: []
} instanceof Array && function(e, t) {
e.__proto__ = t;
} || function(e, t) {
for (var n in t) Object.prototype.hasOwnProperty.call(t, n) && (e[n] = t[n]);
})(e, t);
}, function(e, t) {
i(e, t);
function n() {
this.constructor = e;
}
e.prototype = null === t ? Object.create(t) : (n.prototype = t.prototype, new n());
}), a = this && this.__decorate || function(e, t, n, i) {
var o, a = arguments.length, r = a < 3 ? t : null === i ? i = Object.getOwnPropertyDescriptor(t, n) : i;
if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) r = Reflect.decorate(e, t, n, i); else for (var s = e.length - 1; s >= 0; s--) (o = e[s]) && (r = (a < 3 ? o(r) : a > 3 ? o(t, n, r) : o(t, n)) || r);
return a > 3 && r && Object.defineProperty(t, n, r), r;
}, r = this && this.__awaiter || function(e, t, n, i) {
return new (n || (n = Promise))(function(o, a) {
function r(e) {
try {
l(i.next(e));
} catch (e) {
a(e);
}
}
function s(e) {
try {
l(i.throw(e));
} catch (e) {
a(e);
}
}
function l(e) {
e.done ? o(e.value) : (t = e.value, t instanceof n ? t : new n(function(e) {
e(t);
})).then(r, s);
var t;
}
l((i = i.apply(e, t || [])).next());
});
}, s = this && this.__generator || function(e, t) {
var n, i, o, a, r = {
label: 0,
sent: function() {
if (1 & o[0]) throw o[1];
return o[1];
},
trys: [],
ops: []
};
return a = {
next: s(0),
throw: s(1),
return: s(2)
}, "function" == typeof Symbol && (a[Symbol.iterator] = function() {
return this;
}), a;
function s(e) {
return function(t) {
return l([ e, t ]);
};
}
function l(a) {
if (n) throw new TypeError("Generator is already executing.");
for (;r; ) try {
if (n = 1, i && (o = 2 & a[0] ? i.return : a[0] ? i.throw || ((o = i.return) && o.call(i), 
0) : i.next) && !(o = o.call(i, a[1])).done) return o;
(i = 0, o) && (a = [ 2 & a[0], o.value ]);
switch (a[0]) {
case 0:
case 1:
o = a;
break;

case 4:
r.label++;
return {
value: a[1],
done: !1
};

case 5:
r.label++;
i = a[1];
a = [ 0 ];
continue;

case 7:
a = r.ops.pop();
r.trys.pop();
continue;

default:
if (!(o = r.trys, o = o.length > 0 && o[o.length - 1]) && (6 === a[0] || 2 === a[0])) {
r = 0;
continue;
}
if (3 === a[0] && (!o || a[1] > o[0] && a[1] < o[3])) {
r.label = a[1];
break;
}
if (6 === a[0] && r.label < o[1]) {
r.label = o[1];
o = a;
break;
}
if (o && r.label < o[2]) {
r.label = o[2];
r.ops.push(a);
break;
}
o[2] && r.ops.pop();
r.trys.pop();
continue;
}
a = t.call(e, r);
} catch (e) {
a = [ 6, e ];
i = 0;
} finally {
n = o = 0;
}
if (5 & a[0]) throw a[1];
return {
value: a[0] ? a[1] : void 0,
done: !0
};
}
};
Object.defineProperty(n, "__esModule", {
value: !0
});
n.UIResultView3 = void 0;
var l = e("../../../script/hall/GLHallController"), c = e("../../Func/GLResultViewFeature"), u = e("../../../gl_lang/scripts/GLMultiLangManager"), _ = e("../../../script/func/MiniGameDeliveryUndertakeCtrl"), d = e("../../../script/func/CampaignGuideMiniGameCtrl"), h = cc._decorator, f = h.ccclass, p = h.property, g = [ "#62334b", "#80556c", "#EA8EA5" ], m = function(e) {
o(t, e);
function t() {
var t = null !== e && e.apply(this, arguments) || this;
t.backBtn = null;
t.crownTop = null;
t.imgBlastScore = null;
t.blastScoreSpine = null;
t.btn = null;
t.img_again = null;
t.img_continue = null;
t.icon_home = null;
t.imgScore = null;
t.txtScore = null;
t.gameOverImg = null;
t.gameOverImg1 = null;
t.skinNode = null;
t.xiguaImgScore = null;
t.xiguaTxtScore = null;
t.xiguaImgMaxScore = null;
t.xiguaTxtMaxScore = null;
t._scoreImgY = 0;
t._txtScoreY = 0;
t._skinY = 0;
t._xiguaMaxImgY = 0;
t._xiguaMaxTxtY = 0;
t._xiguaScoreTxtY = 0;
t._recordOffsetY = -180;
t.speed = 2;
t._funcBtnHome = null;
t._funcbtnAgain = null;
t._hideTime = 2;
t._isOpenBlock = !1;
t._maxFruitId = 11;
t._skinBaseScale = .5;
t._hideResultBannerCount = 0;
t._hideResultBannerMax = 120;
return t;
}
n = t;
t.prototype.onLoad = function() {
var e = this;
if ("KO" == u.default.getInstance().getCurrentLanguage()) {
var t = cc.assetManager.getBundle(GL.Const.HALL_BUNDLE_NAME);
if (t) {
t.load("gl_result/resource/Button_KO", function(t, n) {
var i;
if (!t) {
var o = null === (i = e.img_again) || void 0 === i ? void 0 : i.getComponent(cc.Sprite);
if (null != o && cc.isValid(o.node)) {
var a = new cc.SpriteFrame();
a.setTexture(n);
o.spriteFrame = a;
}
}
});
t.load("gl_result/resource/continue_KO", function(t, n) {
var i;
if (!t) {
var o = null === (i = e.img_continue) || void 0 === i ? void 0 : i.getComponent(cc.Sprite);
if (null != o && cc.isValid(o.node)) {
var a = new cc.SpriteFrame();
a.setTexture(n);
o.spriteFrame = a;
}
}
});
}
}
};
t.prototype.onEnable = function() {
this._isOpenBlock = c.GLResultViewFeature.isOpenBlockView();
this.startHideResultBanner();
this._scoreImgY = this.imgScore.y;
this._txtScoreY = this.txtScore ? this.txtScore.y : 0;
this._skinY = this.skinNode ? this.skinNode.y : 0;
this._xiguaMaxImgY = this.xiguaImgMaxScore.y;
this._xiguaMaxTxtY = this.xiguaTxtMaxScore.y;
this._xiguaScoreTxtY = this.xiguaTxtScore.y;
if (this._isOpenBlock) {
this.node.getChildByName("bg").opacity = 229.5;
this.node.getChildByName("bg").color = new cc.Color(0, 0, 0, this.node.getChildByName("bg").opacity);
}
this.backBtn.on(cc.Node.EventType.TOUCH_END, this.onAudioBtnHome, this);
this.btn.getChildByName("btnHome").on(cc.Node.EventType.TOUCH_END, this.onAudioBtnHome, this);
this.btn.getChildByName("btnAgain").on(cc.Node.EventType.TOUCH_END, this.onAudioBtnAgain, this);
this._btnY = this.btn.y;
var e = this;
if (c.GLResultViewFeature.isOpenBackGame() && this.icon_home) {
var t = cc.assetManager.getBundle(GL.Const.HALL_BUNDLE_NAME);
t && t.load("gl_result/resource/icon_classic", function(t, n) {
if (!t) {
var i = new cc.SpriteFrame();
i.setTexture(n);
e.icon_home.getComponent(cc.Sprite).spriteFrame = i;
}
});
}
};
t.prototype.onDisable = function() {
this.stopHideResultBanner();
if (this.btn) {
this.btn.getChildByName("btnHome").off(cc.Node.EventType.TOUCH_END, this.onAudioBtnHome, this);
this.btn.getChildByName("btnAgain").off(cc.Node.EventType.TOUCH_END, this.onAudioBtnAgain, this);
}
};
t.prototype.startHideResultBanner = function() {
if (c.GLResultViewFeature.isRemoveResultViewBanner()) {
this._hideResultBannerCount = 0;
this.unschedule(this.onHideResultBannerTick);
GL.Ad.hideBanner();
this.schedule(this.onHideResultBannerTick, 1);
}
};
t.prototype.onHideResultBannerTick = function() {
GL.Ad.hideBanner();
this._hideResultBannerCount++;
this._hideResultBannerCount >= this._hideResultBannerMax && this.unschedule(this.onHideResultBannerTick);
};
t.prototype.stopHideResultBanner = function() {
if (c.GLResultViewFeature.isRemoveResultViewBanner()) {
this.unschedule(this.onHideResultBannerTick);
l.default.IsExitFromUIResultView || l.default.getInstance().sceneShowBanner();
}
};
t.prototype.onClose = function() {
this.node.parent = null;
this.node.destroy();
};
t.prototype.onAudioBtnHome = function() {
this.onBtnHome();
};
t.prototype.onAudioBtnAgain = function() {
this.onbtnAgain();
};
t.prototype.onBtnHome = function() {
l.default.IsExitFromUIResultView = !0;
if (this._funcBtnHome) {
this._funcBtnHome();
this.onClose();
} else {
l.default.Exit(GL.Const.ExitGameType.FromGameResult);
this.onClose();
}
};
t.prototype.onbtnAgain = function() {
this._funcbtnAgain && this._funcbtnAgain();
this.onClose();
};
t.prototype.SetResult = function(e, t, n, i, o) {
this._funcBtnHome = n;
this._funcbtnAgain = i;
this._hideTime = 2;
this._maxFruitId = this.clampFruitId(o);
this._skinBaseScale = this.getSettleSkinScale(this._maxFruitId);
this.layoutSingleContinueBtn();
this.changeBg(g);
this.tweenDaxigua(e, t);
};
t.prototype.layoutSingleContinueBtn = function() {
if (this.btn && cc.isValid(this.btn)) {
var e = this.btn.getChildByName("btnHome"), t = this.btn.getChildByName("btnAgain");
e && (e.active = !1);
t && (t.x = 0);
this.img_again && (this.img_again.active = !0);
this.img_continue && (this.img_continue.active = !1);
}
};
t.prototype.SetResultType = function(e, t, n, i, o, a) {
this.SetResult(null != t ? t : 0, null != o ? o : 0, n, i, a);
};
t.prototype.changeBg = function(e) {
var t, n;
if (!this._isOpenBlock) {
var i = null === (n = null === (t = this.node.getChildByName("bg")) || void 0 === t ? void 0 : t.getComponent(cc.Sprite)) || void 0 === n ? void 0 : n.getMaterial(0);
if (i) {
var o = cc.color().fromHEX(e[0]), a = cc.color().fromHEX(e[1]), r = e[2] ? cc.color().fromHEX(e[2]) : null;
i.setProperty("topColor", cc.color(o.r, o.g, o.b, 255));
i.setProperty("bottomColor", cc.color(a.r, a.g, a.b, 255));
if (this.imgScore && r) {
this.imgScore.color = r;
this.xiguaImgScore.color = r;
this.xiguaImgMaxScore.color = r;
}
}
}
};
t.prototype.tweenDaxigua = function(e, t) {
var n = this, i = e >= t, o = c.GLResultViewFeature.isOpenSettleScoreRoll();
GL.Audio.playEffect("resource/audio/platform_win_bgm", "gl_hall");
if (i) {
this.tweenCrown(this.crownTop);
this.skinNode && (this.skinNode.y = this._skinY + this._recordOffsetY);
this.txtScore && (this.txtScore.y = this._txtScoreY + this._recordOffsetY - 50);
var a = this._scoreImgY + this._recordOffsetY - 100;
this.playBlastScoreSpine(function() {
n.playSkinIcon();
n.tweenScoreImg(n.imgScore, a);
if (o) n.playSettleScoreRoll(n.txtScore.getComponent(cc.Label), 0, e, {
delay: .35 * n.speed
}); else {
n.txtScore.getComponent(cc.Label).string = e;
n.tweenScoreTxt(n.txtScore);
}
n.tweenBtn();
});
} else {
this._isOpenBlock ? this.tweenBlastScore(this.gameOverImg, function() {
n.playSkinIcon();
}) : this.tweenBlastScore(this.gameOverImg1, function() {
n.playSkinIcon();
});
this.xiguaTxtMaxScore.getComponent(cc.Label).string = t;
if (o) {
this.tweenXiguaScore(!0);
this.playSettleScoreRoll(this.xiguaTxtScore.getComponent(cc.Label), 0, e, {
delay: .35 * this.speed
});
} else {
this.xiguaTxtScore.getComponent(cc.Label).string = e;
this.tweenXiguaScore();
}
this.tweenBtn();
}
};
t.prototype.playBlastScoreSpine = function(e) {
if (this.blastScoreSpine && cc.isValid(this.blastScoreSpine)) {
var t = this.blastScoreSpine.getComponent(sp.Skeleton);
if (t) {
cc.tween(this.blastScoreSpine).delay(.35 * this.speed).call(function() {
null == e || e();
}).start();
this.blastScoreSpine.active = !0;
t.setCompleteListener(null);
t.setAnimation(0, "in", !1);
t.setCompleteListener(function(e) {
var n;
if ("in" === (null === (n = null == e ? void 0 : e.animation) || void 0 === n ? void 0 : n.name)) {
t.setCompleteListener(null);
t.setAnimation(0, "init", !0);
}
});
} else null == e || e();
} else null == e || e();
};
t.prototype.playSkinIcon = function() {
var e = this;
if (this.skinNode && cc.isValid(this.skinNode)) {
this.backBtn.active = !0;
this.loadFruitSkin(this._maxFruitId, function() {
if (e.skinNode && cc.isValid(e.skinNode)) {
var t = e._skinBaseScale;
e.skinNode.active = !0;
e.skinNode.scale = Math.max(.08, .2 * t);
cc.tween(e.skinNode).to(.08 * e.speed, {
scale: 1.1 * t
}).to(.07 * e.speed, {
scale: .9 * t
}).to(.05 * e.speed, {
scale: t
}).start();
}
});
}
};
t.prototype.clampFruitId = function(e) {
var t = Math.floor(Number(e) || 11);
return Math.max(1, Math.min(12, t));
};
t.prototype.getSettleSkinScale = function(e) {
var t, i = (null !== (t = n.BannerScaleValues[e - 1]) && void 0 !== t ? t : n.BannerWatermelonScale) * (n.WatermelonSettleScale / n.BannerWatermelonScale);
return Math.min(n.SettleScaleMax, Math.max(n.SettleScaleMin, i));
};
t.prototype.loadFruitSkin = function(e, t) {
var n, i = this, o = null === (n = this.skinNode) || void 0 === n ? void 0 : n.getComponent(sp.Skeleton);
if (o) {
var a = "Fruit_" + String(e).padStart(2, "0"), r = "gl_result/resource/spine/Skin3/" + a + "/" + a, s = cc.assetManager.getBundle(GL.Const.HALL_BUNDLE_NAME);
if (s) s.load(r, sp.SkeletonData, function(n, a) {
if (!n && a) if (cc.isValid(i.skinNode) && cc.isValid(o)) {
o.skeletonData = a;
o.setAnimation(0, "idle1", !0);
console.log("[UIResultView3] 结算皮肤 fruitId=" + e + " scale=" + i._skinBaseScale.toFixed(3));
t();
} else t(); else {
console.warn("[UIResultView3] 加载水果皮肤失败 path=" + r, n);
t();
}
}); else {
console.warn("[UIResultView3] hall bundle 未就绪，使用预制体默认皮肤 fruitId=" + e);
t();
}
} else t();
};
t.prototype.playSettleScoreRoll = function(e, t, n, i) {
var o, a, r;
if (e && cc.isValid(e.node)) {
var s = null !== (a = null == i ? void 0 : i.delay) && void 0 !== a ? a : .8, l = null !== (r = null == i ? void 0 : i.maxDuration) && void 0 !== r ? r : 1, c = {
score: t
};
e.string = "" + t;
e.node.active = !0;
e.node.scale = 0;
e.node.opacity = 0;
cc.tween(e.node).delay(s).to(.2, {
scale: 1,
opacity: 255
}, {
easing: cc.easing.backOut
}).call(function() {
var o = Math.min(l, .02 * Math.abs(n - t));
cc.tween(c).to(o, {
score: n
}, {
progress: function(t, n, i, o) {
var a = t + (n - t) * o;
cc.isValid(e.node) && (e.string = "" + Math.floor(a));
return a;
}
}).call(function() {
var t;
cc.isValid(e.node) && (e.string = "" + n);
null === (t = null == i ? void 0 : i.onDone) || void 0 === t || t.call(i);
}).start();
}).start();
} else null === (o = null == i ? void 0 : i.onDone) || void 0 === o || o.call(i);
};
t.prototype.tweenCrown = function(e) {
e.active = !1;
cc.tween(e).delay(.11 * this.speed).call(function() {
e.active = !1;
e.scale = .1;
GL.Audio.playEffect("resource/audio/platform_win_crown", "gl_hall");
}).to(.1 * this.speed, {
scale: 1.286
}).to(.07 * this.speed, {
scale: 1.44
}).to(.06 * this.speed, {
scale: .6
}).to(.04 * this.speed, {
scale: 1
}).start();
};
t.prototype.tweenBlastScore = function(e, t) {
if (e && cc.isValid(e)) {
e.active = !1;
cc.tween(e).call(function() {
e.active = !0;
e.scale = .2;
}).to(.08 * this.speed, {
scale: 1.1
}).to(.07 * this.speed, {
scale: 1.3
}).to(.06 * this.speed, {
scale: .9
}).to(.05 * this.speed, {
scale: 1
}).call(function() {
t && t();
}).start();
} else t && t();
};
t.prototype.tweenScoreImg = function(e, t) {
var n = null != t ? t : this._scoreImgY;
e.active = !1;
e.opacity = 255;
e.y = n + 107;
cc.tween(e).delay(.35 * this.speed).call(function() {
e.active = !0;
}).parallel(cc.tween().to(.18 * this.speed, {
y: n
}), cc.tween().to(.18 * this.speed, {
opacity: 255
})).start();
};
t.prototype.tweenScoreTxt = function(e) {
e.active = !1;
e.scale = 0;
cc.tween(e).delay(.35 * this.speed).call(function() {
e.active = !0;
e.scale = 0;
}).to(.09 * this.speed, {
scale: 1.5
}).to(.14 * this.speed, {
scale: .95
}).to(.1 * this.speed, {
scale: 1
}).start();
};
t.prototype.tweenBtn = function() {
var e = this, t = this._btnY + 48, n = this._btnY - 722;
cc.tween(this.btn).delay(.3 * this.speed).call(function() {
t = e._btnY + 48;
n = e._btnY - 722;
e.btn.y = n;
e.btn.opacity = 0;
}).delay(.3 * this.speed).to(.13 * this.speed, {
y: t,
opacity: 255
}).to(.1 * this.speed, {
y: this._btnY
}).call(function() {
e.tryAddTraitMiniGameNum();
e.showDeliveryUndertakeFingerGuide();
e.showCampaignGuideMiniGameFingerGuide();
}).start();
};
t.prototype.tryAddTraitMiniGameNum = function() {
_.default.isOpen() && _.default.getInstance().addTraitMiniGameNum();
};
t.prototype.showDeliveryUndertakeFingerGuide = function() {
return r(this, void 0, Promise, function() {
var e, t;
return s(this, function() {
if (!_.default.isOpen() || !this.btn || !cc.isValid(this.btn)) return [ 2 ];
if (!(e = this.btn.getChildByName("btnHome")) || !cc.isValid(e) || !e.active) return [ 2 ];
(t = e.getChildByName("finger")) && t.destroy();
_.default.getInstance().createFingerAnimation(e);
return [ 2 ];
});
});
};
t.prototype.showCampaignGuideMiniGameFingerGuide = function() {
return r(this, void 0, Promise, function() {
var e, t;
return s(this, function() {
if (!d.default.isOpen() || !this.btn || !cc.isValid(this.btn)) return [ 2 ];
if (!(e = this.btn.getChildByName("btnHome")) || !cc.isValid(e) || !e.active) return [ 2 ];
(t = e.getChildByName("finger")) && t.destroy();
d.default.getInstance().createFingerAnimation(e);
return [ 2 ];
});
});
};
t.prototype.tweenXiguaScore = function(e) {
var t = this;
void 0 === e && (e = !1);
this.xiguaImgMaxScore.active = !1;
this.xiguaTxtMaxScore.active = !1;
this.xiguaImgMaxScore.opacity = 255;
this.xiguaTxtMaxScore.opacity = 0;
var n = this._xiguaMaxImgY + 65.3, i = this._xiguaMaxTxtY + 100.3;
this.xiguaImgMaxScore.y = n;
this.xiguaTxtMaxScore.y = i;
cc.tween(this.xiguaImgMaxScore).delay(.55 * this.speed).call(function() {
t.xiguaImgMaxScore.active = !0;
}).parallel(cc.tween().to(.15 * this.speed, {
y: this._xiguaMaxImgY
}), cc.tween().to(.15 * this.speed, {
opacity: 255
})).start();
cc.tween(this.xiguaTxtMaxScore).delay(.55 * this.speed).call(function() {
t.xiguaTxtMaxScore.active = !0;
}).parallel(cc.tween().to(.2 * this.speed, {
y: this._xiguaMaxTxtY
}), cc.tween().to(.2 * this.speed, {
opacity: 255
})).start();
if (e) this.xiguaTxtScore.y = this._xiguaScoreTxtY; else {
this.xiguaTxtScore.active = !1;
this.xiguaTxtScore.opacity = 0;
this.xiguaTxtScore.y = this._xiguaScoreTxtY + 201;
cc.tween(this.xiguaTxtScore).delay(.35 * this.speed).call(function() {
t.xiguaTxtScore.active = !0;
}).parallel(cc.tween().to(.15 * this.speed, {
y: this._xiguaScoreTxtY
}), cc.tween().to(.15 * this.speed, {
opacity: 255
})).start();
}
this.xiguaImgScore.active = !1;
this.xiguaImgScore.opacity = 255;
cc.tween(this.xiguaImgScore).delay(.42 * this.speed).call(function() {
t.xiguaImgScore.active = !0;
}).to(.17 * this.speed, {
opacity: 255
}).start();
};
var n;
t.BannerScaleValues = [ .824, .663, .46, .438, .392, .345, .286, .241, .231, .18, .178, .178 ];
t.BannerWatermelonScale = .178;
t.WatermelonSettleScale = .5;
t.SettleScaleMax = 1.6;
t.SettleScaleMin = .35;
a([ p(cc.Node) ], t.prototype, "backBtn", void 0);
a([ p(cc.Node) ], t.prototype, "crownTop", void 0);
a([ p(cc.Node) ], t.prototype, "imgBlastScore", void 0);
a([ p(cc.Node) ], t.prototype, "blastScoreSpine", void 0);
a([ p(cc.Node) ], t.prototype, "btn", void 0);
a([ p(cc.Node) ], t.prototype, "img_again", void 0);
a([ p(cc.Node) ], t.prototype, "img_continue", void 0);
a([ p(cc.Node) ], t.prototype, "icon_home", void 0);
a([ p(cc.Node) ], t.prototype, "imgScore", void 0);
a([ p(cc.Node) ], t.prototype, "txtScore", void 0);
a([ p(cc.Node) ], t.prototype, "gameOverImg", void 0);
a([ p(cc.Node) ], t.prototype, "gameOverImg1", void 0);
a([ p(cc.Node) ], t.prototype, "skinNode", void 0);
a([ p(cc.Node) ], t.prototype, "xiguaImgScore", void 0);
a([ p(cc.Node) ], t.prototype, "xiguaTxtScore", void 0);
a([ p(cc.Node) ], t.prototype, "xiguaImgMaxScore", void 0);
a([ p(cc.Node) ], t.prototype, "xiguaTxtMaxScore", void 0);
return n = a([ f ], t);
}(cc.Component);
n.UIResultView3 = m;
cc._RF.pop();
}, {
"../../../gl_lang/scripts/GLMultiLangManager": "GLMultiLangManager",
"../../../script/func/CampaignGuideMiniGameCtrl": "CampaignGuideMiniGameCtrl",
"../../../script/func/MiniGameDeliveryUndertakeCtrl": "MiniGameDeliveryUndertakeCtrl",
"../../../script/hall/GLHallController": "GLHallController",
"../../Func/GLResultViewFeature": "GLResultViewFeature"
} ],
UIResultView: [ function(e, t, n) {
"use strict";
cc._RF.push(t, "050feFrWXBHeqqyXZaXQbVM", "UIResultView");
var i, o = this && this.__extends || (i = function(e, t) {
return (i = Object.setPrototypeOf || {
__proto__: []
} instanceof Array && function(e, t) {
e.__proto__ = t;
} || function(e, t) {
for (var n in t) Object.prototype.hasOwnProperty.call(t, n) && (e[n] = t[n]);
})(e, t);
}, function(e, t) {
i(e, t);
function n() {
this.constructor = e;
}
e.prototype = null === t ? Object.create(t) : (n.prototype = t.prototype, new n());
}), a = this && this.__decorate || function(e, t, n, i) {
var o, a = arguments.length, r = a < 3 ? t : null === i ? i = Object.getOwnPropertyDescriptor(t, n) : i;
if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) r = Reflect.decorate(e, t, n, i); else for (var s = e.length - 1; s >= 0; s--) (o = e[s]) && (r = (a < 3 ? o(r) : a > 3 ? o(t, n, r) : o(t, n)) || r);
return a > 3 && r && Object.defineProperty(t, n, r), r;
}, r = this && this.__awaiter || function(e, t, n, i) {
return new (n || (n = Promise))(function(o, a) {
function r(e) {
try {
l(i.next(e));
} catch (e) {
a(e);
}
}
function s(e) {
try {
l(i.throw(e));
} catch (e) {
a(e);
}
}
function l(e) {
e.done ? o(e.value) : (t = e.value, t instanceof n ? t : new n(function(e) {
e(t);
})).then(r, s);
var t;
}
l((i = i.apply(e, t || [])).next());
});
}, s = this && this.__generator || function(e, t) {
var n, i, o, a, r = {
label: 0,
sent: function() {
if (1 & o[0]) throw o[1];
return o[1];
},
trys: [],
ops: []
};
return a = {
next: s(0),
throw: s(1),
return: s(2)
}, "function" == typeof Symbol && (a[Symbol.iterator] = function() {
return this;
}), a;
function s(e) {
return function(t) {
return l([ e, t ]);
};
}
function l(a) {
if (n) throw new TypeError("Generator is already executing.");
for (;r; ) try {
if (n = 1, i && (o = 2 & a[0] ? i.return : a[0] ? i.throw || ((o = i.return) && o.call(i), 
0) : i.next) && !(o = o.call(i, a[1])).done) return o;
(i = 0, o) && (a = [ 2 & a[0], o.value ]);
switch (a[0]) {
case 0:
case 1:
o = a;
break;

case 4:
r.label++;
return {
value: a[1],
done: !1
};

case 5:
r.label++;
i = a[1];
a = [ 0 ];
continue;

case 7:
a = r.ops.pop();
r.trys.pop();
continue;

default:
if (!(o = r.trys, o = o.length > 0 && o[o.length - 1]) && (6 === a[0] || 2 === a[0])) {
r = 0;
continue;
}
if (3 === a[0] && (!o || a[1] > o[0] && a[1] < o[3])) {
r.label = a[1];
break;
}
if (6 === a[0] && r.label < o[1]) {
r.label = o[1];
o = a;
break;
}
if (o && r.label < o[2]) {
r.label = o[2];
r.ops.push(a);
break;
}
o[2] && r.ops.pop();
r.trys.pop();
continue;
}
a = t.call(e, r);
} catch (e) {
a = [ 6, e ];
i = 0;
} finally {
n = o = 0;
}
if (5 & a[0]) throw a[1];
return {
value: a[0] ? a[1] : void 0,
done: !0
};
}
};
Object.defineProperty(n, "__esModule", {
value: !0
});
n.ResultView = void 0;
var l, c = e("../../../script/hall/GLHallController"), u = e("../../Func/GLResultViewFeature"), _ = e("../../../gl_lang/scripts/GLMultiLangManager"), d = e("../../../script/func/MiniGameDeliveryUndertakeCtrl"), h = e("../../../script/func/CampaignGuideMiniGameCtrl"), f = cc._decorator, p = f.ccclass, g = f.property;
(function(e) {
e[e.majiang = 0] = "majiang";
e[e.lianliankan = 1] = "lianliankan";
e[e.daxigua = 2] = "daxigua";
e[e.jingziqi = 3] = "jingziqi";
e[e.yibihua = 4] = "yibihua";
e[e.waterSort = 5] = "waterSort";
})(l || (l = {}));
var m = [ "#183DB2", "#1487D8", "#31C5F5" ], G = [ "#62334b", "#80556c", "#EA8EA5" ], L = [ "#62334b", "#81556c", "#EA8EA5" ], y = [ "#1142ae", "#3f70dc" ], T = function(e) {
o(t, e);
function t() {
var t = null !== e && e.apply(this, arguments) || this;
t.crownTop = null;
t.imgBlastScore = null;
t.levelClear = null;
t.crownDown = null;
t.btn = null;
t.img_again = null;
t.img_continue = null;
t.icon_home = null;
t.imgScore = null;
t.txtScore = null;
t.gameOverImg = null;
t.gameOverImg1 = null;
t.xiguaImgScore = null;
t.xiguaTxtScore = null;
t.xiguaImgMaxScore = null;
t.xiguaTxtMaxScore = null;
t.imgWin = null;
t.imgLost = null;
t.imgDraw = null;
t.title = null;
t._titleY = 0;
t._scoreImgY = 0;
t._xiguaMaxImgY = 0;
t._xiguaMaxTxtY = 0;
t._xiguaScoreTxtY = 0;
t.speed = 2;
t._funcBtnHome = null;
t._funcbtnAgain = null;
t._isOpenBlock = !1;
t._resultType = null;
t._hideResultBannerCount = 0;
t._hideResultBannerMax = 120;
return t;
}
t.prototype.onLoad = function() {
var e = this;
if ("KO" == _.default.getInstance().getCurrentLanguage()) {
var t = cc.assetManager.getBundle(GL.Const.HALL_BUNDLE_NAME);
if (t) {
t.load("gl_result/resource/Button_KO", function(t, n) {
var i;
if (!t) {
var o = null === (i = e.img_again) || void 0 === i ? void 0 : i.getComponent(cc.Sprite);
if (null != o && cc.isValid(o.node)) {
var a = new cc.SpriteFrame();
a.setTexture(n);
o.spriteFrame = a;
}
}
});
t.load("gl_result/resource/continue_KO", function(t, n) {
var i;
if (!t) {
var o = null === (i = e.img_continue) || void 0 === i ? void 0 : i.getComponent(cc.Sprite);
if (null != o && cc.isValid(o.node)) {
var a = new cc.SpriteFrame();
a.setTexture(n);
o.spriteFrame = a;
}
}
});
}
}
};
t.prototype.onEnable = function() {
this._isOpenBlock = u.GLResultViewFeature.isOpenBlockView();
this.startHideResultBanner();
if (this.title) {
this._titleY = this.title.y;
this.node.getChildByName("bg").opacity = 178;
} else {
this._scoreImgY = this.imgScore.y;
this._xiguaMaxImgY = this.xiguaImgMaxScore.y;
this._xiguaMaxTxtY = this.xiguaTxtMaxScore.y;
this._xiguaScoreTxtY = this.xiguaTxtScore.y;
if (this._isOpenBlock) {
this.node.getChildByName("bg").opacity = 229.5;
this.node.getChildByName("bg").color = new cc.Color(0, 0, 0, this.node.getChildByName("bg").opacity);
}
this.btn.getChildByName("btnHome").on(cc.Node.EventType.TOUCH_END, this.onAudioBtnHome, this);
this.btn.getChildByName("btnAgain").on(cc.Node.EventType.TOUCH_END, this.onAudioBtnAgain, this);
this._btnY = this.btn.y;
var e = this;
if (u.GLResultViewFeature.isOpenBackGame() && this.icon_home) {
var t = cc.assetManager.getBundle(GL.Const.HALL_BUNDLE_NAME);
t && t.load("gl_result/resource/icon_classic", function(t, n) {
if (!t) {
var i = new cc.SpriteFrame();
i.setTexture(n);
e.icon_home.getComponent(cc.Sprite).spriteFrame = i;
}
});
}
}
};
t.prototype.onDisable = function() {
this.stopHideResultBanner();
if (this.btn) {
this.btn.getChildByName("btnHome").off(cc.Node.EventType.TOUCH_END, this.onAudioBtnHome, this);
this.btn.getChildByName("btnAgain").off(cc.Node.EventType.TOUCH_END, this.onAudioBtnAgain, this);
} else this.node.getChildByName("bg").off(cc.Node.EventType.TOUCH_END, this.onAudioBtnAgain, this);
};
t.prototype.startHideResultBanner = function() {
if (u.GLResultViewFeature.isRemoveResultViewBanner()) {
this._hideResultBannerCount = 0;
this.unschedule(this.onHideResultBannerTick);
GL.Ad.hideBanner();
this.schedule(this.onHideResultBannerTick, 1);
}
};
t.prototype.onHideResultBannerTick = function() {
GL.Ad.hideBanner();
this._hideResultBannerCount++;
this._hideResultBannerCount >= this._hideResultBannerMax && this.unschedule(this.onHideResultBannerTick);
};
t.prototype.stopHideResultBanner = function() {
if (u.GLResultViewFeature.isRemoveResultViewBanner()) {
this.unschedule(this.onHideResultBannerTick);
c.default.IsExitFromUIResultView || c.default.getInstance().sceneShowBanner();
}
};
t.prototype.onClose = function() {
this.node.parent = null;
this.node.destroy();
};
t.prototype.onAudioBtnHome = function() {
this.onBtnHome();
};
t.prototype.onAudioBtnAgain = function() {
this.onbtnAgain();
};
t.prototype.onBtnHome = function() {
c.default.IsExitFromUIResultView = !0;
if (this._funcBtnHome) {
this._funcBtnHome();
this.onClose();
} else {
c.default.Exit(GL.Const.ExitGameType.FromGameResult);
this.onClose();
}
};
t.prototype.onbtnAgain = function() {
this._funcbtnAgain && this._funcbtnAgain();
this.onClose();
};
t.prototype.SetResultType = function(e, t, n, i, o, a, r) {
this._funcBtnHome = n;
this._funcbtnAgain = i;
this._hideTime = r || 2;
this._resultType = e;
switch (e) {
case l.majiang:
this.changeBg(m);
this.tweenMajiangLianLianKan(t);
this.vibrationProjectMajiangLianLianKan(a);
break;

case l.lianliankan:
this.changeBg(L);
this.tweenMajiangLianLianKan(t);
this.vibrationProjectMajiangLianLianKan(a);
break;

case l.daxigua:
this.changeBg(G);
this.tweenDaxigua(t, o);
this.vibrationProjectDaxigua(t, o);
break;

case l.jingziqi:
this.changeBg(y);
this.tweenJingziqi(a);
this.vibrationProjectJingziqi(a);
break;

case l.yibihua:
case l.waterSort:
this.tweenTitle();
this._resultType === l.waterSort && this.vibrationProjectWaterSort();
}
};
t.prototype.changeBg = function(e) {
var t, n;
if (!this._isOpenBlock) {
var i = null === (n = null === (t = this.node.getChildByName("bg")) || void 0 === t ? void 0 : t.getComponent(cc.Sprite)) || void 0 === n ? void 0 : n.getMaterial(0);
if (i) {
var o = cc.color().fromHEX(e[0]), a = cc.color().fromHEX(e[1]), r = e[2] ? cc.color().fromHEX(e[2]) : null;
i.setProperty("topColor", cc.color(o.r, o.g, o.b, 255));
i.setProperty("bottomColor", cc.color(a.r, a.g, a.b, 255));
if (this.imgScore && r) {
this.imgScore.color = r;
this.xiguaImgScore.color = r;
this.xiguaImgMaxScore.color = r;
}
}
}
};
t.prototype.tweenTitle = function() {
var e = this;
GL.Audio.playEffect("resource/audio/platform_win_incentive", "gl_hall");
this.title.active = !1;
var t = cc.view.getVisibleSize().height, n = this.node.getChildByName("spine").getComponent(sp.Skeleton);
this.node.getChildByName("spine").active = !1;
try {
cc.tween(n).delay(.1 * 1.5).call(function() {
e.node.getChildByName("spine").active = !0;
n.setAnimation(0, "idle", !0);
n.setCompleteListener(function() {
n.setCompleteListener(null);
e.node.getChildByName("spine").active = !1;
});
}).start();
cc.tween(this.title).call(function() {
e.title.active = !0;
e.title.scale = .1;
e.title.y = e._titleY + 100 - t / 2;
}).to(.15 * 1.5, {
scale: 1,
y: this._titleY
}).delay(this._hideTime || 2).call(function() {
e.onbtnAgain();
}).start();
} catch (e) {
console.log("🍎🍎🍎 miniGame==title动画错误==error=>", e);
}
};
t.prototype.tweenMajiangLianLianKan = function(e) {
try {
GL.Audio.playEffect("resource/audio/platform_win_bgm", "gl_hall");
this.tweenCrown(this.crownTop);
this.tweenBlastScore(this.levelClear);
this.tweenScoreImg(this.imgScore);
this.txtScore.getComponent(cc.Label).string = e;
this.tweenScoreTxt(this.txtScore);
this.img_continue.active = !0;
this.img_again.active = !1;
this.tweenBtn();
} catch (e) {
console.log("🍎🍎🍎 miniGame==tweenMajiangLianLianKan动画错误==error=>", e);
this.img_continue && cc.isValid(this.img_continue) && (this.img_continue.active = !0);
this.img_again && cc.isValid(this.img_again) && (this.img_again.active = !1);
this.btn && cc.isValid(this.btn) && (this.btn.opacity = 255);
}
};
t.prototype.tweenDaxigua = function(e, t) {
var n = e >= t, i = u.GLResultViewFeature.isOpenSettleScoreRoll();
GL.Audio.playEffect("resource/audio/platform_win_bgm", "gl_hall");
if (n) {
this.tweenCrown(this.crownTop);
this.tweenBlastScore(this.imgBlastScore);
this.tweenScoreImg(this.imgScore);
if (i) this.playSettleScoreRoll(this.txtScore.getComponent(cc.Label), 0, e, {
delay: .35 * this.speed
}); else {
this.txtScore.getComponent(cc.Label).string = e;
this.tweenScoreTxt(this.txtScore);
}
} else {
this._isOpenBlock ? this.tweenBlastScore(this.gameOverImg) : this.tweenBlastScore(this.gameOverImg1);
this.xiguaTxtMaxScore.getComponent(cc.Label).string = t;
if (i) {
this.tweenXiguaScore(!0);
this.playSettleScoreRoll(this.xiguaTxtScore.getComponent(cc.Label), 0, e, {
delay: .35 * this.speed
});
} else {
this.xiguaTxtScore.getComponent(cc.Label).string = e;
this.tweenXiguaScore();
}
}
this.tweenBtn();
};
t.prototype.playSettleScoreRoll = function(e, t, n, i) {
var o, a, r;
if (e && cc.isValid(e.node)) {
var s = null !== (a = null == i ? void 0 : i.delay) && void 0 !== a ? a : .8, l = null !== (r = null == i ? void 0 : i.maxDuration) && void 0 !== r ? r : 1, c = {
score: t
};
e.string = "" + t;
e.node.active = !0;
e.node.scale = 0;
e.node.opacity = 0;
cc.tween(e.node).delay(s).to(.2, {
scale: 1,
opacity: 255
}, {
easing: cc.easing.backOut
}).call(function() {
var o = Math.min(l, .02 * Math.abs(n - t));
cc.tween(c).to(o, {
score: n
}, {
progress: function(t, n, i, o) {
var a = t + (n - t) * o;
cc.isValid(e.node) && (e.string = "" + Math.floor(a));
return a;
}
}).call(function() {
var t;
cc.isValid(e.node) && (e.string = "" + n);
null === (t = null == i ? void 0 : i.onDone) || void 0 === t || t.call(i);
}).start();
}).start();
} else null === (o = null == i ? void 0 : i.onDone) || void 0 === o || o.call(i);
};
t.prototype.tweenJingziqi = function(e) {
switch (e) {
case 0:
GL.Audio.playEffect("resource/audio/platform_win_bgm", "gl_hall");
this.tweenCrown(this.crownDown);
this.tweenBlastScore(this.imgWin);
break;

case 1:
GL.Audio.playEffect("resource/audio/platform_lost_bgm", "gl_hall");
this.tweenBlastScore(this.imgLost);
break;

case 2:
GL.Audio.playEffect("resource/audio/platform_win_incentive", "gl_hall");
this.tweenBlastScore(this.imgDraw);
}
this.tweenBtn();
};
t.prototype.tweenCrown = function(e) {
e.active = !1;
cc.tween(e).delay(.11 * this.speed).call(function() {
e.active = !0;
e.scale = .1;
GL.Audio.playEffect("resource/audio/platform_win_crown", "gl_hall");
}).to(.1 * this.speed, {
scale: 1.286
}).to(.07 * this.speed, {
scale: 1.44
}).to(.06 * this.speed, {
scale: .6
}).to(.04 * this.speed, {
scale: 1
}).start();
};
t.prototype.tweenBlastScore = function(e, t) {
e.active = !1;
cc.tween(e).call(function() {
e.active = !0;
e.scale = .2;
}).to(.08 * this.speed, {
scale: 1.1
}).to(.07 * this.speed, {
scale: 1.3
}).to(.06 * this.speed, {
scale: .9
}).to(.05 * this.speed, {
scale: 1
}).delay(this._hideTime || 2).call(function() {
t && t();
}).start();
};
t.prototype.tweenScoreImg = function(e) {
e.active = !1;
e.opacity = 255;
e.y = this._scoreImgY + 107;
cc.tween(e).delay(.35 * this.speed).call(function() {
e.active = !0;
}).parallel(cc.tween().to(.18 * this.speed, {
y: this._scoreImgY
}), cc.tween().to(.18 * this.speed, {
opacity: 255
})).start();
};
t.prototype.tweenScoreTxt = function(e) {
e.active = !1;
e.scale = 0;
cc.tween(e).delay(.35 * this.speed).call(function() {
e.active = !0;
e.scale = 0;
}).to(.09 * this.speed, {
scale: 1.5
}).to(.14 * this.speed, {
scale: .95
}).to(.1 * this.speed, {
scale: 1
}).start();
};
t.prototype.tweenBtn = function() {
var e = this, t = this._btnY + 48, n = this._btnY - 722;
cc.tween(this.btn).delay(.3 * this.speed).call(function() {
t = e._btnY + 48;
n = e._btnY - 722;
e.btn.y = n;
e.btn.opacity = 0;
}).delay(.3 * this.speed).to(.13 * this.speed, {
y: t,
opacity: 255
}).to(.1 * this.speed, {
y: this._btnY
}).call(function() {
e.tryAddTraitMiniGameNum();
e.showDeliveryUndertakeFingerGuide();
e.showCampaignGuideMiniGameFingerGuide();
}).start();
};
t.prototype.tryAddTraitMiniGameNum = function() {
d.default.isOpen() && d.default.getInstance().addTraitMiniGameNum();
};
t.prototype.showDeliveryUndertakeFingerGuide = function() {
return r(this, void 0, Promise, function() {
var e, t;
return s(this, function() {
if (!d.default.isOpen() || !this.btn || !cc.isValid(this.btn)) return [ 2 ];
if (!(e = this.btn.getChildByName("btnHome")) || !cc.isValid(e) || !e.active) return [ 2 ];
(t = e.getChildByName("finger")) && t.destroy();
d.default.getInstance().createFingerAnimation(e);
return [ 2 ];
});
});
};
t.prototype.showCampaignGuideMiniGameFingerGuide = function() {
return r(this, void 0, Promise, function() {
var e, t;
return s(this, function() {
if (!h.default.isOpen() || !this.btn || !cc.isValid(this.btn)) return [ 2 ];
if (!(e = this.btn.getChildByName("btnHome")) || !cc.isValid(e) || !e.active) return [ 2 ];
(t = e.getChildByName("finger")) && t.destroy();
h.default.getInstance().createFingerAnimation(e);
return [ 2 ];
});
});
};
t.prototype.tweenXiguaScore = function(e) {
var t = this;
void 0 === e && (e = !1);
this.xiguaImgMaxScore.active = !1;
this.xiguaTxtMaxScore.active = !1;
this.xiguaImgMaxScore.opacity = 255;
this.xiguaTxtMaxScore.opacity = 0;
var n = this._xiguaMaxImgY + 65.3, i = this._xiguaMaxTxtY + 100.3;
this.xiguaImgMaxScore.y = n;
this.xiguaTxtMaxScore.y = i;
cc.tween(this.xiguaImgMaxScore).delay(.55 * this.speed).call(function() {
t.xiguaImgMaxScore.active = !0;
}).parallel(cc.tween().to(.15 * this.speed, {
y: this._xiguaMaxImgY
}), cc.tween().to(.15 * this.speed, {
opacity: 255
})).start();
cc.tween(this.xiguaTxtMaxScore).delay(.55 * this.speed).call(function() {
t.xiguaTxtMaxScore.active = !0;
}).parallel(cc.tween().to(.2 * this.speed, {
y: this._xiguaMaxTxtY
}), cc.tween().to(.2 * this.speed, {
opacity: 255
})).start();
if (e) this.xiguaTxtScore.y = this._xiguaScoreTxtY; else {
this.xiguaTxtScore.active = !1;
this.xiguaTxtScore.opacity = 0;
this.xiguaTxtScore.y = this._xiguaScoreTxtY + 201;
cc.tween(this.xiguaTxtScore).delay(.35 * this.speed).call(function() {
t.xiguaTxtScore.active = !0;
}).parallel(cc.tween().to(.15 * this.speed, {
y: this._xiguaScoreTxtY
}), cc.tween().to(.15 * this.speed, {
opacity: 255
})).start();
}
this.xiguaImgScore.active = !1;
this.xiguaImgScore.opacity = 255;
cc.tween(this.xiguaImgScore).delay(.42 * this.speed).call(function() {
t.xiguaImgScore.active = !0;
}).to(.17 * this.speed, {
opacity: 255
}).start();
};
t.prototype.vibrationProjectMajiangLianLianKan = function() {
var e, t = this._resultType === l.majiang ? "VibrationProjectMahjongGp" : "VibrationProjectOnetGp";
if ((null === (e = null === GL || void 0 === GL ? void 0 : GL.Game) || void 0 === e ? void 0 : e.isTraitActive(t)) && cc.sys.os != cc.sys.OS_IOS) {
var n = new cc.Node("vibrationMajiangLianLianKanTemp");
this.node.addChild(n);
cc.tween(n).call(function() {
console.log("[" + t + "] 触发震动 levelClear");
GL.Game.shakeByProp(t, "levelClear");
GL.Game.shakeAmplitudeByProp(t, "levelClearShake");
}).delay(.11 * this.speed).call(function() {
console.log("[" + t + "] 触发震动 winCrown 皇冠弹出");
GL.Game.shakeByProp(t, "winCrown");
}).delay(.11 * this.speed).call(function() {
console.log("[" + t + "] 触发震动 winScore 分数");
GL.Game.shakeByProp(t, "winScore");
}).delay(.39 * this.speed).call(function() {
console.log("[" + t + "] 触发震动 winPlayBtn 按键出现");
GL.Game.shakeByProp(t, "winPlayBtn");
}).call(function() {
cc.isValid(n) && n.destroy();
}).start();
}
};
t.prototype.vibrationProjectDaxigua = function(e, t) {
var n;
if (e >= t) {
var i = "VibrationProjectFruitGp";
if ((null === (n = null === GL || void 0 === GL ? void 0 : GL.Game) || void 0 === n ? void 0 : n.isTraitActive(i)) && cc.sys.os != cc.sys.OS_IOS) {
var o = new cc.Node("vibrationDaxiguaTemp");
this.node.addChild(o);
cc.tween(o).call(function() {
console.log("[" + i + "] 触发震动 winBestScore BestScore弹出");
GL.Game.shakeByProp(i, "winBestScore");
GL.Game.shakeAmplitudeByProp(i, "winBestScoreShake");
}).delay(.11 * this.speed).call(function() {
console.log("[" + i + "] 触发震动 winCrown 皇冠弹出");
GL.Game.shakeByProp(i, "winCrown");
}).delay(.24 * this.speed).call(function() {
console.log("[" + i + "] 触发震动 winScore 分数弹出");
GL.Game.shakeByProp(i, "winScore");
}).delay(.25 * this.speed).call(function() {
console.log("[" + i + "] 触发震动 winPlayBtn 按键出现");
GL.Game.shakeByProp(i, "winPlayBtn");
}).call(function() {
cc.isValid(o) && o.destroy();
}).start();
}
}
};
t.prototype.vibrationProjectJingziqi = function(e) {
var t;
if ((null === (t = null === GL || void 0 === GL ? void 0 : GL.Game) || void 0 === t ? void 0 : t.isTraitActive("VibrationProjectTictactoeGp")) && cc.sys.os != cc.sys.OS_IOS) if (0 == e) {
var n = new cc.Node("vibrationJingziqiTemp");
this.node.addChild(n);
cc.tween(n).delay(.11 * this.speed).call(function() {
console.log("[VibrationProjectTictactoeGp] 触发震动 winCrown 皇冠弹出");
GL.Game.shakeByProp("VibrationProjectTictactoeGp", "winCrown");
}).delay(.11 * this.speed).call(function() {}).delay(.39 * this.speed).call(function() {}).call(function() {
cc.isValid(n) && n.destroy();
}).start();
} else {
var i = new cc.Node("vibrationJingziqiTemp");
this.node.addChild(i);
cc.tween(i).delay(.11 * this.speed).call(function() {}).delay(.5 * this.speed).call(function() {}).call(function() {
cc.isValid(i) && i.destroy();
}).start();
}
};
t.prototype.vibrationProjectWaterSort = function() {
var e, t = "VibrationProjectWaterSortGp";
if ((null === (e = null === GL || void 0 === GL ? void 0 : GL.Game) || void 0 === e ? void 0 : e.isTraitActive(t)) && cc.sys.os != cc.sys.OS_IOS) {
var n = new cc.Node("vibrationWaterSortTemp");
this.node.addChild(n);
cc.tween(n).delay(.11 * this.speed).call(function() {
console.log("[VibrationProjectWaterSortGp] 触发震动 nextPuzzle");
GL.Game.shakeByProp(t, "nextPuzzle");
GL.Game.shakeAmplitudeByProp(t, "nextPuzzleShake");
}).start();
}
};
a([ g(cc.Node) ], t.prototype, "crownTop", void 0);
a([ g(cc.Node) ], t.prototype, "imgBlastScore", void 0);
a([ g(cc.Node) ], t.prototype, "levelClear", void 0);
a([ g(cc.Node) ], t.prototype, "crownDown", void 0);
a([ g(cc.Node) ], t.prototype, "btn", void 0);
a([ g(cc.Node) ], t.prototype, "img_again", void 0);
a([ g(cc.Node) ], t.prototype, "img_continue", void 0);
a([ g(cc.Node) ], t.prototype, "icon_home", void 0);
a([ g(cc.Node) ], t.prototype, "imgScore", void 0);
a([ g(cc.Node) ], t.prototype, "txtScore", void 0);
a([ g(cc.Node) ], t.prototype, "gameOverImg", void 0);
a([ g(cc.Node) ], t.prototype, "gameOverImg1", void 0);
a([ g(cc.Node) ], t.prototype, "xiguaImgScore", void 0);
a([ g(cc.Node) ], t.prototype, "xiguaTxtScore", void 0);
a([ g(cc.Node) ], t.prototype, "xiguaImgMaxScore", void 0);
a([ g(cc.Node) ], t.prototype, "xiguaTxtMaxScore", void 0);
a([ g(cc.Node) ], t.prototype, "imgWin", void 0);
a([ g(cc.Node) ], t.prototype, "imgLost", void 0);
a([ g(cc.Node) ], t.prototype, "imgDraw", void 0);
a([ g(cc.Node) ], t.prototype, "title", void 0);
return a([ p ], t);
}(cc.Component);
n.ResultView = T;
cc._RF.pop();
}, {
"../../../gl_lang/scripts/GLMultiLangManager": "GLMultiLangManager",
"../../../script/func/CampaignGuideMiniGameCtrl": "CampaignGuideMiniGameCtrl",
"../../../script/func/MiniGameDeliveryUndertakeCtrl": "MiniGameDeliveryUndertakeCtrl",
"../../../script/hall/GLHallController": "GLHallController",
"../../Func/GLResultViewFeature": "GLResultViewFeature"
} ],
glResultTool: [ function(e, t, n) {
"use strict";
cc._RF.push(t, "99802h4+9VA77/n+RKRQYYu", "glResultTool");
var i = this && this.__assign || function() {
return (i = Object.assign || function(e) {
for (var t, n = 1, i = arguments.length; n < i; n++) {
t = arguments[n];
for (var o in t) Object.prototype.hasOwnProperty.call(t, o) && (e[o] = t[o]);
}
return e;
}).apply(this, arguments);
};
Object.defineProperty(n, "__esModule", {
value: !0
});
var o, a = e("../../script/hall/GLHallController");
(function(e) {
(function(e) {
var t;
(function(e) {
e[e.majiang = 0] = "majiang";
e[e.lianliankan = 1] = "lianliankan";
e[e.daxigua = 2] = "daxigua";
e[e.jingziqi = 3] = "jingziqi";
e[e.yibihua = 4] = "yibihua";
e[e.waterSort = 5] = "waterSort";
e[e.jingziqiNew = 6] = "jingziqiNew";
e[e.daxiguaNew = 7] = "daxiguaNew";
})(t || (t = {}));
function n(e, n) {
if (!e) return !1;
var i = {
gl_mahjong: [ t.majiang ],
gl_onet: [ t.lianliankan ],
gl_fruit: [ t.daxigua, t.daxiguaNew ],
gl_tictactoe: [ t.jingziqi, t.jingziqiNew ],
gl_oneline: [ t.yibihua ],
gl_watersort: [ t.waterSort ]
}[e];
return !!i && i.includes(n);
}
e.createResultView = function(e, i, o, r, s, l, c, u, _, d) {
var h;
void 0 === _ && (_ = null);
void 0 === d && (d = null);
e || (e = a.default.getInstance().getSceneParentNode());
var f = i > t.jingziqi ? "gl_result/pefabs/ResultView1" : "gl_result/pefabs/ResultView";
i == t.jingziqiNew ? f = "gl_result/pefabs/ResultView2" : i == t.daxiguaNew && (f = "gl_result/pefabs/ResultView3");
var p = "gl_hall", g = window.GL;
(null === (h = null == g ? void 0 : g.gamelobby) || void 0 === h ? void 0 : h.getRemoteBundleBaseUrl) && (p = g.gamelobby.getRemoteBundleBaseUrl("gl_hall"));
cc.assetManager.loadBundle(p, function(h, p) {
h ? cc.error("[ResultTool] Failed to load bundle [gl_hall]:", h) : p.load(f, function(h, f) {
if (h) cc.log("Prefab error:" + h); else if (f instanceof cc.Prefab) {
var p = cc.instantiate(f);
if (cc.isValid(e)) {
var g = a.default.getInstance().getCurrentGameKey();
if (!g) {
p.destroy();
return;
}
if (!n(g, i)) {
p.destroy();
console.log("[ResultTool] 当前游戏(" + g + ")的结果界面类型(" + i + ")与传入类型不相同，不显示结果界面");
return;
}
p.parent = e;
p.zIndex = 100;
i == t.jingziqiNew ? cc.isValid(p) && p.getComponent("UIResultView2").SetResultType(s, c) : i == t.daxiguaNew ? cc.isValid(p) && p.getComponent("UIResultView3").SetResult(o, l, r, s, d) : cc.isValid(p) && p.getComponent("UIResultView").SetResultType(i, o, r, s, l, c, u);
null != _ && "function" == typeof _ && _();
}
} else cc.log("Prefab error");
});
});
};
e.destroyResultView = function() {
var e = a.default.getInstance().getSceneParentNode();
cc.isValid(e) && e.children.forEach(function(e) {
e.name.includes("ResultView") && e.destroy();
});
};
})(e.ResultTool || (e.ResultTool = {}));
})(o || (o = {}));
window.GL = i(i({}, window.GL), o);
cc._RF.pop();
}, {
"../../script/hall/GLHallController": "GLHallController"
} ]
}, {}, [ "GL_ExtractDimension", "GL_ExtractFeature", "GLLangFontDefine", "GLLangKeyDefine", "GLMultiLangLabel", "GLMultiLangManager", "GL_LANG_EN_US", "MiniGameQuitGameConfirm", "GLHallMoreGamesPopupEnter", "GLResultViewFeature", "UIResultView", "UIResultView2", "UIResultView3", "glResultTool", "Gl_settingView", "HallFeature", "GLConst", "GLPopup", "GLMath", "GLGame", "GLWindow", "GLAd", "GLAudio", "GLNet", "GLSaved", "GLSubmit", "GLVibration", "GlRoundBox", "CampaignGuideMiniGameCtrl", "GLAdjustInsertByPlayTimeCtrl", "GLAdjustInsertShowTimesCtrl", "GLHallUICtrl", "GLLastEnteredGameOnTopCtrl", "MiniGameDeliveryUndertakeCtrl", "GLShowAdsPopupByCountCtrl", "GLShowInsertAdsBySecondsCtrl", "GLHallController", "GLHallScene", "GlBaseScene", "GLConfigConst", "GLConfigManager", "GameLobbyKeepCtr", "GlGameLobbySDKVersionCtr", "GLGameItem", "GLPopupButtonComponent", "GLPopupComponent", "GLGameAdStrategyOptimizeTraitCtrl" ]);