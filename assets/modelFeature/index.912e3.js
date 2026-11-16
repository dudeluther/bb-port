window.__require = function e(t, r, n) {
function o(i, s) {
if (!r[i]) {
if (!t[i]) {
var l = i.split("/");
l = l[l.length - 1];
if (!t[l]) {
var u = "function" == typeof __require && __require;
if (!s && u) return u(l, !0);
if (a) return a(l, !0);
throw new Error("Cannot find module '" + i + "'");
}
i = l;
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
IModelFeatureSeriesStorage: [ function(e, t, r) {
"use strict";
cc._RF.push(t, "68918vz5XVDmIbRrsrxWG6Q", "IModelFeatureSeriesStorage");
Object.defineProperty(r, "__esModule", {
value: !0
});
r.MODEL_FEATURE_SERIES_SHARDS = void 0;
r.MODEL_FEATURE_SERIES_SHARDS = [ "old", "today" ];
cc._RF.pop();
}, {} ],
ModelFeatureActivationAnalyzer: [ function(e, t, r) {
"use strict";
cc._RF.push(t, "610a4xOmeNHm46xZwAGhRIx", "ModelFeatureActivationAnalyzer");
var n = this && this.__assign || function() {
return (n = Object.assign || function(e) {
for (var t, r = 1, n = arguments.length; r < n; r++) {
t = arguments[r];
for (var o in t) Object.prototype.hasOwnProperty.call(t, o) && (e[o] = t[o]);
}
return e;
}).apply(this, arguments);
}, o = this && this.__values || function(e) {
var t = "function" == typeof Symbol && Symbol.iterator, r = t && e[t], n = 0;
if (r) return r.call(e);
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
}, a = this && this.__read || function(e, t) {
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
r.ModelFeatureActivationAnalyzer = void 0;
var i = e("./ModelFeatureSetRegistry"), s = e("./ModelFeatureCatalogRegistry"), l = e("../interface/ModelFeatureSeriesSourceInterface");
e("../catalog/ModelFeatureCatalogExport");
var u = e("../data/ModelFeatureDataCenter"), c = e("../utils/ModelFeaturePerfLog"), d = function() {
function e() {}
e.analyze = function() {
var e, t, r, d, f, m, p, h, g, v, y, b, _, S, I, w, M, C, G = c.ModelFeaturePerfLog.now(), R = new Map();
try {
for (var x = o(i.ModelFeatureSetRegistry.allMappings()), O = x.next(); !O.done; O = x.next()) {
var F = O.value;
try {
for (var T = (r = void 0, o(Object.values(F))), N = T.next(); !N.done; N = T.next()) {
var E = N.value, j = s.ModelFeatureCatalogRegistry.dependencyOf(E.prop);
try {
for (var A = (f = void 0, o(Object.keys(j))), k = A.next(); !k.done; k = A.next()) if ((J = j[z = k.value]) && 0 !== J.length) {
R.has(z) || R.set(z, new Set());
var P = R.get(z);
try {
for (var L = (p = void 0, o(J)), B = L.next(); !B.done; B = L.next()) {
var D = B.value;
P.add(D);
}
} catch (e) {
p = {
error: e
};
} finally {
try {
B && !B.done && (h = L.return) && h.call(L);
} finally {
if (p) throw p.error;
}
}
}
} catch (e) {
f = {
error: e
};
} finally {
try {
k && !k.done && (m = A.return) && m.call(A);
} finally {
if (f) throw f.error;
}
}
}
} catch (e) {
r = {
error: e
};
} finally {
try {
N && !N.done && (d = T.return) && d.call(T);
} finally {
if (r) throw r.error;
}
}
}
} catch (t) {
e = {
error: t
};
} finally {
try {
O && !O.done && (t = x.return) && t.call(x);
} finally {
if (e) throw e.error;
}
}
var W = Date.now(), H = 0;
try {
for (var U = o(Object.values(l.EModelFeatureSeriesSource)), V = U.next(); !V.done; V = U.next()) {
var z = V.value, J = null !== (M = R.get(z)) && void 0 !== M ? M : new Set(), q = u.modelFeatureDataCenter.sourceState, Z = q[z], Y = Z && "object" == typeof Z.fields ? Z.fields : {};
q[z] = n(n({}, Z), {
fields: Y
});
try {
for (var $ = (y = void 0, o(J)), K = $.next(); !K.done; K = $.next()) {
var X = null !== (C = Y[te = K.value]) && void 0 !== C ? C : Y[te] = {
activatedAt: 0,
isActive: !1
};
if (!X.isActive) {
c.ModelFeaturePerfLog.log("Activation", "字段 " + z + "." + te + " 采集状态变化: false -> true");
X.activatedAt = W;
X.isActive = !0;
H++;
}
}
} catch (e) {
y = {
error: e
};
} finally {
try {
K && !K.done && (b = $.return) && b.call($);
} finally {
if (y) throw y.error;
}
}
try {
for (var Q = (_ = void 0, o(Object.keys(Y))), ee = Q.next(); !ee.done; ee = Q.next()) {
var te = ee.value;
J.has(te) || (Y[te].isActive = !1);
}
} catch (e) {
_ = {
error: e
};
} finally {
try {
ee && !ee.done && (S = Q.return) && S.call(Q);
} finally {
if (_) throw _.error;
}
}
}
} catch (e) {
g = {
error: e
};
} finally {
try {
V && !V.done && (v = U.return) && v.call(U);
} finally {
if (g) throw g.error;
}
}
u.modelFeatureDataCenter.saveSourceState();
u.modelFeatureDataCenter.addActiveFields(R);
var re = {};
try {
for (var ne = o(R), oe = ne.next(); !oe.done; oe = ne.next()) {
var ae = a(oe.value, 2);
z = ae[0], J = ae[1];
re[z] = J.size;
}
} catch (e) {
I = {
error: e
};
} finally {
try {
oe && !oe.done && (w = ne.return) && w.call(ne);
} finally {
if (I) throw I.error;
}
}
c.ModelFeaturePerfLog.log("Activation", "冷启动依赖分析完成", {
sources: re,
newlyActivated: H,
totalMs: c.ModelFeaturePerfLog.ms(G)
});
};
return e;
}();
r.ModelFeatureActivationAnalyzer = d;
cc._RF.pop();
}, {
"../catalog/ModelFeatureCatalogExport": "ModelFeatureCatalogExport",
"../data/ModelFeatureDataCenter": "ModelFeatureDataCenter",
"../interface/ModelFeatureSeriesSourceInterface": "ModelFeatureSeriesSourceInterface",
"../utils/ModelFeaturePerfLog": "ModelFeaturePerfLog",
"./ModelFeatureCatalogRegistry": "ModelFeatureCatalogRegistry",
"./ModelFeatureSetRegistry": "ModelFeatureSetRegistry"
} ],
ModelFeatureAdCatalog: [ function(e, t, r) {
"use strict";
cc._RF.push(t, "d5e9djfVmVFEaYhqJVZzrqc", "ModelFeatureAdCatalog");
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
};
Object.defineProperty(r, "__esModule", {
value: !0
});
r.ModelFeatureAdCatalog = void 0;
var i = e("../wiring/decorators/forCatalog"), s = e("../wiring/ModelFeatureCatalogBase"), l = e("../data/proto/ModelFeatureData"), u = e("../data/storage/ModelFeatureInterLoadEcpmStore"), c = function(e) {
o(t, e);
function t() {
return null !== e && e.apply(this, arguments) || this;
}
t.prototype.first_ad_type = function(e) {
var t;
void 0 === e && (e = !0);
var r = this.ctx.ads.front().excludeBanner(e).success().list()[0];
return null !== (t = null == r ? void 0 : r.adType) && void 0 !== t ? t : void 0;
};
t.prototype.first_ad_watch_sec = function(e) {
var t;
void 0 === e && (e = !0);
var r = this.ctx.ads.front().excludeBanner(e).success().list()[0];
return null !== (t = null == r ? void 0 : r.watchDuration) && void 0 !== t ? t : void 0;
};
t.prototype.games_before_first_ad = function(e) {
var t;
void 0 === e && (e = !0);
var r = this.ctx.ads.front().excludeBanner(e).success().list()[0];
return null !== (t = null == r ? void 0 : r.gameCnt) && void 0 !== t ? t : void 0;
};
t.prototype.first_game_to_first_ad_sec = function(e) {
var t;
void 0 === e && (e = !0);
var r = this.ctx.ads.front().excludeBanner(e).success().list()[0], n = null === (t = this.ctx.firstEnterInfo) || void 0 === t ? void 0 : t.firstGameTs;
if (r && n) return (r.ts - n) / 1e3;
};
t.prototype.inter_ecpm_regN_M_avg = function(e, t) {
return this.math.avg(this.ctx.ads.front().interstitial().timeRange(this.time.sinceN_M(e - 1, t, "day")).list(), function(e) {
return e.adEcpm;
});
};
t.prototype.inter_ecpm_regN_M_max = function(e, t) {
return this.math.max(this.ctx.ads.front().interstitial().timeRange(this.time.sinceN_M(e - 1, t, "day")).list(), function(e) {
return e.adEcpm;
});
};
t.prototype.inter_ecpm_regN_M_min = function(e, t) {
return this.math.min(this.ctx.ads.front().interstitial().timeRange(this.time.sinceN_M(e - 1, t, "day")).list(), function(e) {
return e.adEcpm;
});
};
t.prototype.inter_pv_regN_M = function(e, t) {
return this.ctx.ads.front().interstitial().timeRange(this.time.sinceN_M(e - 1, t, "day")).list().length;
};
t.prototype.inter_revenue_regN_M = function(e, t) {
return this.math.sum(this.ctx.ads.front().interstitial().timeRange(this.time.sinceN_M(e - 1, t, "day")).list(), function(e) {
var t;
return (null !== (t = e.adEcpm) && void 0 !== t ? t : 0) / 1e3;
});
};
t.prototype.inter_show_rate_regN_M = function(e, t, r, n) {
void 0 === r && (r = !0);
void 0 === n && (n = "class");
var o = this.ctx.games.front().mode(n).excludeReplay(r).timeRange(this.time.sinceN_M(e - 1, t, "day")).list(), a = new Set(o.map(function(e) {
var t;
return null === (t = e.baseGameInfo) || void 0 === t ? void 0 : t.gameNum;
})), i = this.ctx.ads.front().mode(n).interstitial().timeRange(this.time.sinceN_M(e - 1, t, "day")).list().filter(function(e) {
return a.has(e.gameCnt);
}), s = new Set(i.map(function(e) {
return e.gameCnt;
}));
return this.math.rate(o, function(e) {
var t;
return s.has(null === (t = e.baseGameInfo) || void 0 === t ? void 0 : t.gameNum);
});
};
t.prototype.reward_ecpm_regN_M_avg = function(e, t) {
return this.math.avg(this.ctx.ads.front().reward().timeRange(this.time.sinceN_M(e - 1, t, "day")).list(), function(e) {
return e.adEcpm;
});
};
t.prototype.reward_ecpm_regN_M_max = function(e, t) {
return this.math.max(this.ctx.ads.front().reward().timeRange(this.time.sinceN_M(e - 1, t, "day")).list(), function(e) {
return e.adEcpm;
});
};
t.prototype.reward_pv_regN_M = function(e, t) {
return this.ctx.ads.front().reward().timeRange(this.time.sinceN_M(e - 1, t, "day")).list().length;
};
t.prototype.reward_revenue_regN_M = function(e, t) {
return this.math.sum(this.ctx.ads.front().reward().timeRange(this.time.sinceN_M(e - 1, t, "day")).list(), function(e) {
var t;
return (null !== (t = e.adEcpm) && void 0 !== t ? t : 0) / 1e3;
});
};
t.prototype.total_pv_regN_M = function(e, t, r) {
void 0 === r && (r = !0);
return this.ctx.ads.front().excludeBanner(r).timeRange(this.time.sinceN_M(e - 1, t, "day")).list().length;
};
t.prototype.total_revenue_regN_M = function(e, t, r) {
void 0 === r && (r = !0);
return this.math.sum(this.ctx.ads.front().excludeBanner(r).timeRange(this.time.sinceN_M(e - 1, t, "day")).list(), function(e) {
var t;
return (null !== (t = e.adEcpm) && void 0 !== t ? t : 0) / 1e3;
});
};
t.prototype.his_endless_inter_first3_ecpm_avg = function() {
var e = this.ctx.ads.front().interstitial().list().slice(0, 3);
return this.math.avg(e, function(e) {
return e.adEcpm;
});
};
t.prototype.inter_show_rate_recentN = function(e, t, r, n) {
void 0 === t && (t = 3);
void 0 === r && (r = !0);
void 0 === n && (n = "class");
var o = this.ctx.games.back().mode(n).excludeReplay(r).timeRange(this.time.recentN(t, "day")).tail(e).list(), a = this.ctx.ads.back().mode(n).interstitial().timeRange(this.time.recentN(t, "day")).list(), i = new Set(a.map(function(e) {
return e.gameCnt;
}));
return this.math.rate(o, function(e) {
var t;
return i.has(null === (t = e.baseGameInfo) || void 0 === t ? void 0 : t.gameNum);
});
};
t.prototype.recent10_inter_wb_rate = function() {
var e = this.ctx.games.back().excludeReplay(!0).timeRange(this.time.recentN(3, "day")).tail(10).list();
if (0 !== e.length) {
var t = new Set(e.map(function(e) {
var t;
return null === (t = e.baseGameInfo) || void 0 === t ? void 0 : t.gameNum;
})), r = this.ctx.ads.back().interstitial().list().filter(function(e) {
return t.has(e.gameCnt);
}), n = r.length;
if (0 !== n) {
var o = r.filter(function(e) {
return e.status === l.ModelFeature.AdStatus.Success;
}).length;
return Math.min(o / n, 1);
}
}
};
t.prototype.today_inter_pv = function() {
return this.ctx.ads.back().interstitial().timeRange(this.time.today).list().length;
};
t.prototype.today_reward_pv = function() {
return this.ctx.ads.back().reward().timeRange(this.time.today).list().length;
};
t.prototype.inter_show_avg_cnt_recentN = function(e, t, r, n) {
void 0 === t && (t = 3);
void 0 === r && (r = !0);
void 0 === n && (n = "class");
var o = this.ctx.games.back().mode(n).excludeReplay(r).timeRange(this.time.recentN(t, "day")).tail(e).list();
if (0 === o.length) return NaN;
var a = new Set(o.map(function(e) {
var t;
return null === (t = e.baseGameInfo) || void 0 === t ? void 0 : t.gameNum;
}));
return this.ctx.ads.back().mode(n).interstitial().list().filter(function(e) {
return a.has(e.gameCnt);
}).length / o.length;
};
t.prototype.inter_show_avg_cnt_dayN_M = function(e, t, r, n) {
void 0 === r && (r = !0);
void 0 === n && (n = "class");
var o = this.ctx.games.back().mode(n).excludeReplay(r).timeRange(this.time.recentN_M(e, t, "day")).list();
if (0 === o.length) return NaN;
var a = new Set(o.map(function(e) {
var t;
return null === (t = e.baseGameInfo) || void 0 === t ? void 0 : t.gameNum;
}));
return this.ctx.ads.back().mode(n).interstitial().list().filter(function(e) {
return a.has(e.gameCnt);
}).length / o.length;
};
t.prototype.inter_wb_rate_dayN_M = function(e, t, r, n) {
void 0 === r && (r = !0);
void 0 === n && (n = "class");
var o = this.ctx.games.back().mode(n).excludeReplay(r).timeRange(this.time.recentN_M(e, t, "day")).list();
if (0 !== o.length) {
var a = new Set(o.map(function(e) {
var t;
return null === (t = e.baseGameInfo) || void 0 === t ? void 0 : t.gameNum;
})), i = this.ctx.ads.back().mode(n).interstitial().list().filter(function(e) {
return a.has(e.gameCnt);
});
if (0 !== i.length) {
var s = i.filter(function(e) {
return e.status === l.ModelFeature.AdStatus.Success;
}).length;
return Math.min(s / i.length, 1);
}
}
};
t.prototype.last_ten_inter_cnt = function(e) {
void 0 === e && (e = "");
var t = this.ctx.games.back().mode(e).excludeReplay(!0).tail(10).list();
if (t.length <= 1) return 0;
var r = t.slice(0, t.length - 1), n = new Set(r.map(function(e) {
var t;
return null === (t = e.baseGameInfo) || void 0 === t ? void 0 : t.gameNum;
})), o = this.ctx.ads.back().mode(e).gameEnd().list().filter(function(e) {
return n.has(e.gameCnt);
});
return new Set(o.map(function(e) {
return e.gameCnt;
})).size;
};
t.prototype.last_ten_insert_wb_ratio = function(e) {
void 0 === e && (e = "");
var t = this.ctx.ads.back().mode(e).gameEnd().tail(10).list();
if (0 === t.length) return 0;
var r = t.filter(function(e) {
return e.status === l.ModelFeature.AdStatus.Success;
}).length;
return Math.min(r / t.length, 1);
};
t.prototype.current_insert_cache_num = function() {
var e, t = null === (e = this.ctx.games.back().last()) || void 0 === e ? void 0 : e.baseGameInfo;
return null == t ? void 0 : t.currentInsertCacheNum;
};
t.prototype.current_insert_revenue = function() {
var e, t = null === (e = this.ctx.games.back().last()) || void 0 === e ? void 0 : e.baseGameInfo;
return null == t ? void 0 : t.currentInsertRevenue;
};
t.prototype.inter_wb_rate_regN_M = function(e, t, r, n) {
void 0 === r && (r = !0);
void 0 === n && (n = "class");
var o = this.time.sinceN_M(e - 1, t, "day"), a = this.ctx.games.front().mode(n).excludeReplay(r).timeRange(o).list();
if (0 !== a.length) {
var i = new Set(a.map(function(e) {
return e.baseGameInfo.gameMode + ":" + e.baseGameInfo.gameNum;
})), s = this.ctx.ads.front().mode(n).interstitial().timeRange(o).list().filter(function(e) {
return i.has(e.gameMode + ":" + e.gameCnt);
});
if (0 !== s.length) {
var u = s.filter(function(e) {
return e.status === l.ModelFeature.AdStatus.Success;
}).length;
return Math.min(u / s.length, 1);
}
}
};
t.prototype.last_ten_inter_rate = function(e) {
void 0 === e && (e = "");
var t = this.ctx.games.back().mode(e).excludeReplay(!0).tail(9).list();
if (0 !== t.length) {
var r = new Set(t.map(function(e) {
return e.baseGameInfo.gameMode + ":" + e.baseGameInfo.gameNum;
})), n = this.ctx.ads.back().mode(e).gameEnd().list().filter(function(e) {
return r.has(e.gameMode + ":" + e.gameCnt);
});
return new Set(n.map(function(e) {
return e.gameMode + ":" + e.gameCnt;
})).size / t.length;
}
};
t.prototype.inter_show_rate_dayN_M = function(e, t, r, n) {
void 0 === r && (r = !0);
void 0 === n && (n = "class");
var o = this.ctx.games.back().mode(n).excludeReplay(r).timeRange(this.time.recentN_M(e, t, "day")).list();
if (0 !== o.length) {
var a = new Set(o.map(function(e) {
return e.baseGameInfo.gameMode + ":" + e.baseGameInfo.gameNum;
}));
return this.ctx.ads.back().mode(n).interstitial().list().filter(function(e) {
return a.has(e.gameMode + ":" + e.gameCnt);
}).length / o.length;
}
};
t.prototype.last_inter_show_cnt_today = function(e, t) {
void 0 === e && (e = !0);
void 0 === t && (t = "class");
var r = this.ctx.games.back().mode(t).excludeReplay(e).timeRange(this.time.today).tail(1).first();
if (r) {
var n = r.baseGameInfo;
return this.ctx.ads.back().interstitial().list().filter(function(e) {
return e.gameMode === n.gameMode && e.gameCnt === n.gameNum;
}).length;
}
};
t.prototype.inter_show_avg_cnt_regN_M = function(e, t, r, n) {
void 0 === r && (r = !0);
void 0 === n && (n = "class");
var o = this.ctx.games.front().mode(n).excludeReplay(r).timeRange(this.time.sinceN_M(e - 1, t, "day")).list();
if (0 !== o.length) {
var a = new Set(o.map(function(e) {
return e.baseGameInfo.gameMode + ":" + e.baseGameInfo.gameNum;
}));
return this.ctx.ads.front().mode(n).interstitial().list().filter(function(e) {
return a.has(e.gameMode + ":" + e.gameCnt);
}).length / o.length;
}
};
t.prototype._loadEndFirst3EcpmList = function() {
return u.modelFeatureInterLoadEcpmStore.getList();
};
t.prototype.load_end_inter_ecpm_cnt = function() {
var e = this._loadEndFirst3EcpmList();
return e.length > 0 ? Math.min(e.length, 3) : void 0;
};
t.prototype.load_end_first_inter_ecpm = function() {
var e = this._loadEndFirst3EcpmList();
return e.length > 0 ? e[0] : void 0;
};
t.prototype.load_end_inter_ecpm_first3_avg = function() {
var e = this._loadEndFirst3EcpmList().slice(0, 3);
if (0 !== e.length) return this.math.avg(e, function(e) {
return e;
});
};
return a([ i.modelFeatureCatalog ], t);
}(s.ModelFeatureCatalogBase);
r.ModelFeatureAdCatalog = c;
cc._RF.pop();
}, {
"../data/proto/ModelFeatureData": "ModelFeatureData",
"../data/storage/ModelFeatureInterLoadEcpmStore": "ModelFeatureInterLoadEcpmStore",
"../wiring/ModelFeatureCatalogBase": "ModelFeatureCatalogBase",
"../wiring/decorators/forCatalog": "forCatalog"
} ],
ModelFeatureAdView: [ function(e, t, r) {
"use strict";
cc._RF.push(t, "9b09b8UhpFIg6t87dKBs2X3", "ModelFeatureAdView");
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
};
Object.defineProperty(r, "__esModule", {
value: !0
});
r.ModelFeatureAdView = void 0;
var i = e("../data/proto/ModelFeatureData"), s = e("./ModelFeatureView"), l = e("./decorators/cached"), u = function(e) {
o(t, e);
function t() {
return null !== e && e.apply(this, arguments) || this;
}
t.prototype.mode = function(e) {
var t = this;
return e ? this.chain(function() {
var r = "class" === e ? i.ModelFeature.GameMode.Class : i.ModelFeature.GameMode.Chapter;
return t.records.filter(function(e) {
return e.gameMode === r;
});
}) : this;
};
t.prototype.interstitial = function() {
var e = this;
return this.chain(function() {
return e.records.filter(function(e) {
return e.adType === i.ModelFeature.AdType.Interstitial;
});
});
};
t.prototype.reward = function() {
var e = this;
return this.chain(function() {
return e.records.filter(function(e) {
return e.adType === i.ModelFeature.AdType.Reward;
});
});
};
t.prototype.banner = function() {
var e = this;
return this.chain(function() {
return e.records.filter(function(e) {
return e.adType === i.ModelFeature.AdType.Banner;
});
});
};
t.prototype.excludeBanner = function(e) {
var t = this;
void 0 === e && (e = !0);
return e ? this.chain(function() {
return t.records.filter(function(e) {
return e.adType !== i.ModelFeature.AdType.Banner;
});
}) : this;
};
t.prototype.success = function() {
var e = this;
return this.chain(function() {
return e.records.filter(function(e) {
return e.status === i.ModelFeature.AdStatus.Success;
});
});
};
t.prototype.gameEnd = function() {
var e = this;
return this.chain(function() {
return e.records.filter(function(e) {
return !0 === e.isGameEnd;
});
});
};
a([ l.cached ], t.prototype, "mode", null);
a([ l.cached ], t.prototype, "interstitial", null);
a([ l.cached ], t.prototype, "reward", null);
a([ l.cached ], t.prototype, "banner", null);
a([ l.cached ], t.prototype, "excludeBanner", null);
a([ l.cached ], t.prototype, "success", null);
a([ l.cached ], t.prototype, "gameEnd", null);
return t;
}(s.ModelFeatureView);
r.ModelFeatureAdView = u;
cc._RF.pop();
}, {
"../data/proto/ModelFeatureData": "ModelFeatureData",
"./ModelFeatureView": "ModelFeatureView",
"./decorators/cached": "cached"
} ],
ModelFeatureAlgoClassifierNew: [ function(e, t, r) {
"use strict";
cc._RF.push(t, "83fccRmhJtOsaqYUVsvixam", "ModelFeatureAlgoClassifierNew");
var n, o = this && this.__values || function(e) {
var t = "function" == typeof Symbol && Symbol.iterator, r = t && e[t], n = 0;
if (r) return r.call(e);
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
}, a = this && this.__read || function(e, t) {
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
r.ModelFeatureAlgoClassifierNew = r.AlgoCategoryNew = void 0;
(function(e) {
e.Other = "other";
e.NormalFill = "normalFill";
e.DifficultyTrap = "difficultyTrap";
e.WeightControl = "weightControl";
e.CoolBoost = "coolBoost";
e.OrderFill = "orderFill";
e.Random = "random";
})(n = r.AlgoCategoryNew || (r.AlgoCategoryNew = {}));
var i = function() {
function e() {}
e.classify = function(e) {
var t, r, i, s, l, u = null != e ? e : "";
if (u.includes("|")) {
var c = u.split("|");
if (c.length > 1) {
var d = new Map();
try {
for (var f = o(c), m = f.next(); !m.done; m = f.next()) {
var p = m.value, h = this._classifySingle(p);
d.set(h, (null !== (l = d.get(h)) && void 0 !== l ? l : 0) + 1);
}
} catch (e) {
t = {
error: e
};
} finally {
try {
m && !m.done && (r = f.return) && r.call(f);
} finally {
if (t) throw t.error;
}
}
var g = n.Other, v = -1;
try {
for (var y = o(d), b = y.next(); !b.done; b = y.next()) {
var _ = a(b.value, 2), S = (h = _[0], _[1]);
if (S > v) {
g = h;
v = S;
}
}
} catch (e) {
i = {
error: e
};
} finally {
try {
b && !b.done && (s = y.return) && s.call(y);
} finally {
if (i) throw i.error;
}
}
return g;
}
}
return this._classifySingle(u);
};
e._classifySingle = function(e) {
return this.OTHER_EXACT_NAMES.includes(e) ? n.Other : this.NORMAL_FILL_EXACT_NAMES.includes(e) ? n.NormalFill : e.includes("难题") && !e.includes("难题降级") || e.includes("陷阱") ? n.DifficultyTrap : this.WEIGHT_CONTROL_KEYWORDS.some(function(t) {
return e.includes(t);
}) ? n.WeightControl : this.COOL_BOOST_KEYWORDS.some(function(t) {
return e.includes(t);
}) ? n.CoolBoost : e.includes("秩序填空") ? n.OrderFill : this.NORMAL_FILL_KEYWORDS.some(function(t) {
return e.includes(t);
}) ? n.NormalFill : e.includes("随机") ? n.Random : n.Other;
};
e.isOther = function(e) {
return !!e && this.classify(e) === n.Other;
};
e.isNormalFill = function(e) {
return !!e && this.classify(e) === n.NormalFill;
};
e.isDifficultyTrap = function(e) {
return !!e && this.classify(e) === n.DifficultyTrap;
};
e.isWeightControl = function(e) {
return !!e && this.classify(e) === n.WeightControl;
};
e.isCoolBoost = function(e) {
return !!e && this.classify(e) === n.CoolBoost;
};
e.isOrderFill = function(e) {
return !!e && this.classify(e) === n.OrderFill;
};
e.isRandom = function(e) {
return !!e && this.classify(e) === n.Random;
};
e.OTHER_EXACT_NAMES = [ "非清屏", "不清屏" ];
e.NORMAL_FILL_EXACT_NAMES = [ "难题后填空放宽", "填补算法", "孔洞填充", "孤立块修补", "拼凑矩形", "完美契合块", "互补块" ];
e.WEIGHT_CONTROL_KEYWORDS = [ "熵增", "难题降级", "分数算法", "秩序抉择" ];
e.COOL_BOOST_KEYWORDS = [ "清盘", "清屏", "切割", "多消" ];
e.NORMAL_FILL_KEYWORDS = [ "填空", "聚拢算法" ];
return e;
}();
r.ModelFeatureAlgoClassifierNew = i;
cc._RF.pop();
}, {} ],
ModelFeatureAlgoClassifier: [ function(e, t, r) {
"use strict";
cc._RF.push(t, "3c0d9UYZ5dGSZbYDxbTR0dT", "ModelFeatureAlgoClassifier");
Object.defineProperty(r, "__esModule", {
value: !0
});
r.ModelFeatureAlgoClassifier = r.AlgoCategory = void 0;
var n;
(function(e) {
e.Blank = "blank";
e.Difficulty = "difficulty";
e.Cool = "cool";
e.ShangZeng = "shangZeng";
})(n = r.AlgoCategory || (r.AlgoCategory = {}));
var o = function() {
function e() {}
e.classify = function(e) {
var t = (null != e ? e : "").toUpperCase();
return t.includes("难题") && !t.includes("难题降级") || t.includes("陷阱") || t.includes("简单直觉") ? n.Difficulty : this.SHANG_ZENG_KEYWORDS.some(function(e) {
return t.includes(e.toUpperCase());
}) ? n.ShangZeng : this.COOL_KEYWORDS.some(function(e) {
return t.includes(e.toUpperCase());
}) ? n.Cool : n.Blank;
};
e.isHard = function(e) {
return !!e && this.classify(e) === n.Difficulty;
};
e.isCool = function(e) {
return !!e && this.classify(e) === n.Cool;
};
e.isShangZeng = function(e) {
return !!e && this.classify(e) === n.ShangZeng;
};
e.isFill = function(e) {
return !!e && this.classify(e) === n.Blank;
};
e.COOL_KEYWORDS = [ "清盘", "清屏", "切割" ];
e.SHANG_ZENG_KEYWORDS = [ "熵增", "难题降级", "分数算法" ];
return e;
}();
r.ModelFeatureAlgoClassifier = o;
cc._RF.pop();
}, {} ],
ModelFeatureBaseCatalog: [ function(e, t, r) {
"use strict";
cc._RF.push(t, "f3c1aK6d1JDN4xdlNk5n5yv", "ModelFeatureBaseCatalog");
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
};
Object.defineProperty(r, "__esModule", {
value: !0
});
r.ModelFeatureBaseCatalog = void 0;
var i = e("../wiring/decorators/forCatalog"), s = e("../wiring/ModelFeatureCatalogBase"), l = e("../../../../scripts/modules/device/vo/DeviceInfo"), u = (e("../../../../scripts/modules/native/NativePlatformIOS"), 
e("../../../../scripts/modules/memory/vo/MemoryInfo")), c = (e("../../../../scripts/modules/native/NativeDeviceInfo"), 
e("../../../../scripts/modules/game/vo/GameInfo")), d = function(e) {
o(t, e);
function t() {
return null !== e && e.apply(this, arguments) || this;
}
t.prototype.country = function() {
var e;
return (null === (e = l.deviceInfo.data) || void 0 === e ? void 0 : e.country) || void 0;
};
t.prototype.network_type = function() {
var e;
return (null === (e = null === l.deviceInfo || void 0 === l.deviceInfo ? void 0 : l.deviceInfo.data) || void 0 === e ? void 0 : e.network) || void 0;
};
t.prototype.device_model = function() {
var e;
return (null === (e = l.deviceInfo.data) || void 0 === e ? void 0 : e.device_model) || void 0;
};
t.prototype.carrier = function() {
var e;
return (null === (e = l.deviceInfo.data) || void 0 === e ? void 0 : e.carrier) || void 0;
};
t.prototype.af_media_source = function() {
try {
return storage.getItem("appsflyer", "") || void 0;
} catch (e) {}
};
t.prototype.total_ram = function() {
var e;
return "number" == typeof (e = u.memoryInfo.totalRAM) && e > 0 ? e : null;
};
t.prototype.total_disk = function() {
var e, t = null === (e = l.deviceInfo.deviceMore) || void 0 === e ? void 0 : e.allDisk;
if (null == t) return -1;
var r = "number" == typeof t ? t : parseFloat(t);
return !isNaN(r) && r > 0 ? r : null;
};
t.prototype.screen_width = function() {
var e, t = null === (e = l.deviceInfo.deviceMore) || void 0 === e ? void 0 : e.screenWidth;
return "number" == typeof t && t > 0 ? t : cc.winSize.width > 0 ? cc.winSize.width : null;
};
t.prototype.screen_height = function() {
var e, t = null === (e = l.deviceInfo.deviceMore) || void 0 === e ? void 0 : e.screenHeight;
return "number" == typeof t && t > 0 ? t : cc.winSize.height > 0 ? cc.winSize.height : null;
};
t.prototype.zone_offset = function() {
return -this.time.date.getTimezoneOffset() / 60;
};
t.prototype.app_version = function() {
return l.deviceInfo.deviceVersion;
};
t.prototype.game_type = function() {
return c.gameInfo.gameType;
};
return a([ i.modelFeatureCatalog ], t);
}(s.ModelFeatureCatalogBase);
r.ModelFeatureBaseCatalog = d;
cc._RF.pop();
}, {
"../../../../scripts/modules/device/vo/DeviceInfo": void 0,
"../../../../scripts/modules/game/vo/GameInfo": void 0,
"../../../../scripts/modules/memory/vo/MemoryInfo": void 0,
"../../../../scripts/modules/native/NativeDeviceInfo": void 0,
"../../../../scripts/modules/native/NativePlatformIOS": void 0,
"../wiring/ModelFeatureCatalogBase": "ModelFeatureCatalogBase",
"../wiring/decorators/forCatalog": "forCatalog"
} ],
ModelFeatureBuildContextBase: [ function(e, t, r) {
"use strict";
cc._RF.push(t, "3db4b11MLRKHL3RQaajs+F4", "ModelFeatureBuildContextBase");
var n = this && this.__decorate || function(e, t, r, n) {
var o, a = arguments.length, i = a < 3 ? t : null === n ? n = Object.getOwnPropertyDescriptor(t, r) : n;
if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) i = Reflect.decorate(e, t, r, n); else for (var s = e.length - 1; s >= 0; s--) (o = e[s]) && (i = (a < 3 ? o(i) : a > 3 ? o(t, r, i) : o(t, r)) || i);
return a > 3 && i && Object.defineProperty(t, r, i), i;
};
Object.defineProperty(r, "__esModule", {
value: !0
});
r.ModelFeatureBuildContext = void 0;
var o = e("./decorators/forContext"), a = e("../view/ModelFeatureSourceAccessor"), i = e("../data/ModelFeatureDataCenter"), s = function() {
function e(e, t) {
this.cutoffs = e;
this.now = t;
this.viewCache = new Map();
}
Object.defineProperty(e.prototype, "currentGameRoundData", {
get: function() {
return i.modelFeatureDataCenter.getCurrentGameRoundData();
},
enumerable: !1,
configurable: !0
});
e.prototype.readSummary = function(e) {
return i.modelFeatureDataCenter.getSummary(e);
};
e.prototype.getOrCreateSourceAccessor = function(e, t, r) {
var n, o = this.viewCache.get(e);
if (o) return o;
var s = null !== (n = i.modelFeatureDataCenter.getSplitIndex(e)) && void 0 !== n ? n : {
firstEnd: 0,
secondStart: 0,
isSplit: !1
}, l = new a.ModelFeatureSourceAccessor(t, r, this.now, s, e);
this.viewCache.set(e, l);
return l;
};
return n([ o.withSeriesPrimitives, o.withSummaryPrimitives ], e);
}();
r.ModelFeatureBuildContext = s;
cc._RF.pop();
}, {
"../data/ModelFeatureDataCenter": "ModelFeatureDataCenter",
"../view/ModelFeatureSourceAccessor": "ModelFeatureSourceAccessor",
"./decorators/forContext": "forContext"
} ],
ModelFeatureBuildModeInterface: [ function(e, t, r) {
"use strict";
cc._RF.push(t, "0dc54D4y0VGq6i4j0XhR5DJ", "ModelFeatureBuildModeInterface");
Object.defineProperty(r, "__esModule", {
value: !0
});
cc._RF.pop();
}, {} ],
ModelFeatureCatalogBase: [ function(e, t, r) {
"use strict";
cc._RF.push(t, "e75f62SK55IOoWFWJpBm674", "ModelFeatureCatalogBase");
Object.defineProperty(r, "__esModule", {
value: !0
});
r.ModelFeatureCatalogBase = void 0;
var n = e("../../../../scripts/modules/game/vo/GameInfo"), o = function() {
function e() {}
e.prototype.setContext = function(e) {
this.ctx = e;
};
Object.defineProperty(e.prototype, "time", {
get: function() {
var t = this, r = e.DAY_MS, o = e.HOUR_MS;
return {
get now() {
return t.ctx.now;
},
get date() {
return new Date(t.ctx.now);
},
get install() {
var e;
return null !== (e = n.gameInfo.installTime) && void 0 !== e ? e : 0;
},
get today() {
return {
start: new Date(t.ctx.now).setHours(0, 0, 0, 0)
};
},
recent: function(e) {
return {
start: t.ctx.now - e
};
},
since: function(e) {
var t = n.gameInfo.installTime;
return void 0 === t || t <= 0 ? {
start: 0
} : {
start: t + e
};
},
dayZero: function(e) {
var t = "number" == typeof e ? e : e.getTime();
return new Date(t).setHours(0, 0, 0, 0);
},
sinceN: function(e, t) {
if (!(e < 0)) {
var a = n.gameInfo.installTime;
if (void 0 === a || a <= 0) return {
start: 0
};
var i = "day" === t ? r : o, s = "day" === t ? new Date(a).setHours(0, 0, 0, 0) : new Date(a).setMinutes(0, 0, 0);
return {
start: s,
end: s + e * i
};
}
},
recentN: function(e, n) {
if (!(e < 0)) {
var a = t.ctx.now, i = "day" === n ? r : o;
return "day" === n ? {
start: new Date(a).setHours(0, 0, 0, 0) - (e - 1) * i
} : {
start: a - e * i
};
}
},
recentN_M: function(e, n, a) {
if (!(e < 0 || n < 0)) {
var i = t.ctx.now, s = "day" === a ? r : o;
if ("day" === a) {
var l = new Date(i).setHours(0, 0, 0, 0);
return {
start: l - e * s,
end: l - (n - 1) * s
};
}
return {
start: i - e * s,
end: i - n * s
};
}
},
sinceN_M: function(e, t, a) {
if (!(e < 0 || t < 0)) {
var i = n.gameInfo.installTime;
if (void 0 === i || i <= 0) return {
start: 0,
end: 0
};
var s = "day" === a ? r : o, l = "day" === a ? new Date(i).setHours(0, 0, 0, 0) : new Date(i).setMinutes(0, 0, 0);
return {
start: l + e * s,
end: l + t * s
};
}
}
};
},
enumerable: !1,
configurable: !0
});
Object.defineProperty(e.prototype, "math", {
get: function() {
return {
sum: function(e, t) {
for (var r = 0, n = 0; n < e.length; n++) {
var o = t(e[n]);
Number.isFinite(o) && (r += o);
}
return r;
},
avg: function(e, t) {
for (var r = 0, n = 0, o = 0; o < e.length; o++) {
var a = t(e[o]);
if (Number.isFinite(a)) {
r += a;
n++;
}
}
return 0 === n ? NaN : r / n;
},
std: function(e, t) {
for (var r = 0, n = 0, o = 0; o < e.length; o++) {
var a = t(e[o]);
if (Number.isFinite(a)) {
r += a;
n++;
}
}
if (0 === n) return NaN;
var i = r / n, s = 0;
for (o = 0; o < e.length; o++) {
a = t(e[o]);
if (Number.isFinite(a)) {
var l = a - i;
s += l * l;
}
}
return Math.sqrt(s / n);
},
stdSample: function(e, t) {
for (var r = 0, n = 0, o = 0; o < e.length; o++) {
var a = t(e[o]);
if (Number.isFinite(a)) {
r += a;
n++;
}
}
if (n < 2) return NaN;
var i = r / n, s = 0;
for (o = 0; o < e.length; o++) {
a = t(e[o]);
if (Number.isFinite(a)) {
var l = a - i;
s += l * l;
}
}
return Math.sqrt(s / (n - 1));
},
max: function(e, t) {
for (var r = -Infinity, n = 0, o = 0; o < e.length; o++) {
var a = t(e[o]);
if (Number.isFinite(a)) {
n++;
a > r && (r = a);
}
}
return 0 === n ? NaN : r;
},
min: function(e, t) {
for (var r = Infinity, n = 0, o = 0; o < e.length; o++) {
var a = t(e[o]);
if (Number.isFinite(a)) {
n++;
a < r && (r = a);
}
}
return 0 === n ? NaN : r;
},
rate: function(e, t) {
if (0 === e.length) return NaN;
for (var r = 0, n = 0; n < e.length; n++) t(e[n]) && r++;
return r / e.length;
},
div: function(e, t) {
return t > 0 ? e / t : NaN;
}
};
},
enumerable: !1,
configurable: !0
});
e.DAY_MS = 864e5;
e.HOUR_MS = 36e5;
return e;
}();
r.ModelFeatureCatalogBase = o;
cc._RF.pop();
}, {
"../../../../scripts/modules/game/vo/GameInfo": void 0
} ],
ModelFeatureCatalogExport: [ function(e, t, r) {
"use strict";
cc._RF.push(t, "2c7bbiwLh9Fv6gRlvCmlxkH", "ModelFeatureCatalogExport");
Object.defineProperty(r, "__esModule", {
value: !0
});
r.ModelFeatureCurrentGameCatalog = r.ModelFeatureBaseCatalog = r.ModelFeatureAdCatalog = r.ModelFeatureGameCatalog = void 0;
var n = e("./ModelFeatureGameCatalog");
Object.defineProperty(r, "ModelFeatureGameCatalog", {
enumerable: !0,
get: function() {
return n.ModelFeatureGameCatalog;
}
});
var o = e("./ModelFeatureAdCatalog");
Object.defineProperty(r, "ModelFeatureAdCatalog", {
enumerable: !0,
get: function() {
return o.ModelFeatureAdCatalog;
}
});
var a = e("./ModelFeatureBaseCatalog");
Object.defineProperty(r, "ModelFeatureBaseCatalog", {
enumerable: !0,
get: function() {
return a.ModelFeatureBaseCatalog;
}
});
var i = e("./ModelFeatureCurrentGameCatalog");
Object.defineProperty(r, "ModelFeatureCurrentGameCatalog", {
enumerable: !0,
get: function() {
return i.ModelFeatureCurrentGameCatalog;
}
});
cc._RF.pop();
}, {
"./ModelFeatureAdCatalog": "ModelFeatureAdCatalog",
"./ModelFeatureBaseCatalog": "ModelFeatureBaseCatalog",
"./ModelFeatureCurrentGameCatalog": "ModelFeatureCurrentGameCatalog",
"./ModelFeatureGameCatalog": "ModelFeatureGameCatalog"
} ],
ModelFeatureCatalogRegistry: [ function(e, t, r) {
"use strict";
cc._RF.push(t, "93cd2w522hPAqRu+k93eVp9", "ModelFeatureCatalogRegistry");
var n = this && this.__read || function(e, t) {
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
}, o = this && this.__spread || function() {
for (var e = [], t = 0; t < arguments.length; t++) e = e.concat(n(arguments[t]));
return e;
};
Object.defineProperty(r, "__esModule", {
value: !0
});
r.ModelFeatureCatalogRegistry = r.SERIES_PROPERTY_TO_SOURCE = void 0;
var a = e("../catalog/ModelFeatureDependencyMap"), i = e("../interface/ModelFeatureSeriesSourceInterface"), s = e("../utils/ModelFeaturePerfLog");
r.SERIES_PROPERTY_TO_SOURCE = new Map(Object.entries(i.MODEL_FEATURE_SOURCE_PROPERTY).map(function(e) {
var t = n(e, 2);
return [ t[0], t[1] ];
}));
var l = function() {
function e() {}
e.register = function(e, t) {
this.registry.set(e, t);
};
e.dependencyOf = function(e) {
var t;
return null !== (t = a.MODEL_FEATURE_DEPENDENCY_MAP[e]) && void 0 !== t ? t : {};
};
e.compute = function(e, t, r) {
var n = this.registry.get(e);
if (n) return n.apply(void 0, o([ r ], t));
s.ModelFeaturePerfLog.error("CatalogRegistry", "特征 key 未注册: " + e);
};
e.registry = new Map();
return e;
}();
r.ModelFeatureCatalogRegistry = l;
cc._RF.pop();
}, {
"../catalog/ModelFeatureDependencyMap": "ModelFeatureDependencyMap",
"../interface/ModelFeatureSeriesSourceInterface": "ModelFeatureSeriesSourceInterface",
"../utils/ModelFeaturePerfLog": "ModelFeaturePerfLog"
} ],
ModelFeatureCollectRoundStats: [ function(e, t, r) {
"use strict";
cc._RF.push(t, "404c7LULpZAtLNbE624mhFP", "ModelFeatureCollectRoundStats");
var n = this && this.__values || function(e) {
var t = "function" == typeof Symbol && Symbol.iterator, r = t && e[t], n = 0;
if (r) return r.call(e);
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
Object.defineProperty(r, "__esModule", {
value: !0
});
r.ModelFeatureCollectRoundStats = r.isWinRoundV2 = void 0;
var o = e("./ModelFeatureAlgoClassifier"), a = e("./ModelFeatureAlgoClassifierNew");
function i(e) {
return e.maxCombo >= 1 || e.clearScreenCnt >= 1 || e.threeEliminateCnt > 0 || e.fourEliminateCnt > 0 || e.fiveEliminateCnt > 0 || e.sixEliminateCnt > 0;
}
function s(e) {
var t, r, n, o, a, i;
return (null !== (t = e.oneEliminateCnt) && void 0 !== t ? t : 0) + 2 * (null !== (r = e.twoEliminateCnt) && void 0 !== r ? r : 0) + 3 * (null !== (n = e.threeEliminateCnt) && void 0 !== n ? n : 0) + 4 * (null !== (o = e.fourEliminateCnt) && void 0 !== o ? o : 0) + 5 * (null !== (a = e.fiveEliminateCnt) && void 0 !== a ? a : 0) + 6 * (null !== (i = e.sixEliminateCnt) && void 0 !== i ? i : 0);
}
function l(e, t, r) {
var n;
void 0 === r && (r = !1);
return !r && (t === a.AlgoCategoryNew.CoolBoost ? s(e) >= 2 || (null !== (n = e.clearScreenCnt) && void 0 !== n ? n : 0) >= 1 : t !== a.AlgoCategoryNew.OrderFill && t !== a.AlgoCategoryNew.NormalFill || s(e) >= 1);
}
r.isWinRoundV2 = l;
function u(e, t) {
for (var r = 0, n = 0; n < e.length; n++) r += t(e[n]);
return r;
}
function c(e, t) {
if (0 !== e.length) {
for (var r = 0, n = 0; n < e.length; n++) r += t(e[n]);
return r / e.length;
}
}
function d(e, t, r) {
void 0 === r && (r = -Infinity);
if (0 === e.length) return r;
for (var n = -Infinity, o = 0; o < e.length; o++) {
var a = t(e[o]);
a > n && (n = a);
}
return n;
}
function f(e, t) {
var r = e.length;
if (r < 2) return NaN;
for (var n = 0, o = 0; o < r; o++) n += t(e[o]);
var a = n / r, i = 0;
for (o = 0; o < r; o++) {
var s = t(e[o]) - a;
i += s * s;
}
return Math.sqrt(i / (r - 1));
}
var m = function() {
function e() {}
e.prototype.maxCombo = function(e) {
return d(e, function(e) {
return e.maxCombo;
}, 0);
};
e.prototype.sumComboCnt = function(e) {
return u(e, function(e) {
return e.comboCnt;
});
};
e.prototype.sumClearScreenCnt = function(e) {
return u(e, function(e) {
return e.clearScreenCnt;
});
};
e.prototype.sumOneEliminateCnt = function(e) {
return u(e, function(e) {
var t;
return null !== (t = e.oneEliminateCnt) && void 0 !== t ? t : 0;
});
};
e.prototype.sumTwoEliminateCnt = function(e) {
return u(e, function(e) {
var t;
return null !== (t = e.twoEliminateCnt) && void 0 !== t ? t : 0;
});
};
e.prototype.sumThreeEliminateCnt = function(e) {
return u(e, function(e) {
var t;
return null !== (t = e.threeEliminateCnt) && void 0 !== t ? t : 0;
});
};
e.prototype.sumFourEliminateCnt = function(e) {
return u(e, function(e) {
var t;
return null !== (t = e.fourEliminateCnt) && void 0 !== t ? t : 0;
});
};
e.prototype.sumFiveEliminateCnt = function(e) {
return u(e, function(e) {
var t;
return null !== (t = e.fiveEliminateCnt) && void 0 !== t ? t : 0;
});
};
e.prototype.sumSixEliminateCnt = function(e) {
return u(e, function(e) {
var t;
return null !== (t = e.sixEliminateCnt) && void 0 !== t ? t : 0;
});
};
e.prototype.roundWeights = function(e) {
return e.map(function(e) {
return e.initWeight;
});
};
e.prototype.buildAlgoInfoByNameSet = function(e) {
var t, r, a = {};
try {
for (var i = n(e), s = i.next(); !s.done; s = i.next()) {
var l = s.value;
if (l.algoName) {
var u = o.ModelFeatureAlgoClassifier.classify(l.algoName), c = l.spendTime / 1e3, d = a[u];
if (d) {
d.spendTime += c;
d.score += l.score;
d.roundCnt++;
} else a[u] = {
spendTime: c,
score: l.score,
roundCnt: 1
};
}
}
} catch (e) {
t = {
error: e
};
} finally {
try {
s && !s.done && (r = i.return) && r.call(i);
} finally {
if (t) throw t.error;
}
}
return a;
};
e.prototype.buildAlgoInfoByNameSetNew = function(e) {
for (var t, r = {}, n = 0; n < e.length; n++) {
var o = e[n];
if (o.algoName) {
var i = a.ModelFeatureAlgoClassifierNew.classify(o.algoName), s = l(o, i, n === e.length - 1) ? 1 : 0, u = o.spendTime / 1e3, c = r[i];
if (c) {
c.spendTime += u;
c.score += o.score;
c.roundCnt++;
c.successRoundCnt = (null !== (t = c.successRoundCnt) && void 0 !== t ? t : 0) + s;
} else r[i] = {
spendTime: u,
score: o.score,
roundCnt: 1,
successRoundCnt: s
};
}
}
return r;
};
e.prototype.countCoolRounds = function(e) {
var t, r, o = 0;
try {
for (var a = n(e), s = a.next(); !s.done; s = a.next()) {
var l = s.value;
l.initWeight > 293 && i(l) && o++;
}
} catch (e) {
t = {
error: e
};
} finally {
try {
s && !s.done && (r = a.return) && r.call(a);
} finally {
if (t) throw t.error;
}
}
return o;
};
e.prototype.firstDifficultySpendTime = function(e) {
var t, r, a = 0;
try {
for (var i = n(e), s = i.next(); !s.done; s = i.next()) {
var l = s.value;
a += l.spendTime;
if (o.ModelFeatureAlgoClassifier.classify(l.algoName) === o.AlgoCategory.Difficulty) return a / 1e3;
}
} catch (e) {
t = {
error: e
};
} finally {
try {
s && !s.done && (r = i.return) && r.call(i);
} finally {
if (t) throw t.error;
}
}
};
e.prototype.maxContinueCoolRoundLen = function(e) {
var t, r, o = 0, a = 0;
try {
for (var s = n(e), l = s.next(); !l.done; l = s.next()) i(l.value) ? ++o > a && (a = o) : o = 0;
} catch (e) {
t = {
error: e
};
} finally {
try {
l && !l.done && (r = s.return) && r.call(s);
} finally {
if (t) throw t.error;
}
}
return a;
};
e.prototype.maxConsecutiveNonCoolRoundLen = function(e) {
var t, r, o = 0, a = 0;
try {
for (var s = n(e), l = s.next(); !l.done; l = s.next()) i(l.value) ? o = 0 : ++o > a && (a = o);
} catch (e) {
t = {
error: e
};
} finally {
try {
l && !l.done && (r = s.return) && r.call(s);
} finally {
if (t) throw t.error;
}
}
return a;
};
e.prototype.avgSpendTime = function(e) {
return c(e, function(e) {
return e.spendTime / 1e3;
});
};
e.prototype.stdSpendTime = function(e) {
return f(e, function(e) {
return e.spendTime / 1e3;
});
};
e.prototype.avgInitWeight = function(e) {
return c(e, function(e) {
return e.initWeight;
});
};
e.prototype.countQuickCoolRounds = function(e) {
var t, r, o = 0;
try {
for (var a = n(e), s = a.next(); !s.done; s = a.next()) {
var l = s.value;
l.spendTime < 5800 && i(l) && o++;
}
} catch (e) {
t = {
error: e
};
} finally {
try {
s && !s.done && (r = a.return) && r.call(a);
} finally {
if (t) throw t.error;
}
}
return o;
};
e.prototype.comboSegmentCnt = function(e) {
var t, r, o = 0;
try {
for (var a = n(e), i = a.next(); !i.done; i = a.next()) i.value.maxCombo >= 1 && o++;
} catch (e) {
t = {
error: e
};
} finally {
try {
i && !i.done && (r = a.return) && r.call(a);
} finally {
if (t) throw t.error;
}
}
return o;
};
e.prototype.flowScore = function(e, t) {
if (0 === e.length) return 0;
var r = this.sumMultiEliminationCnt(e) + this.comboSegmentCnt(e) + this.sumClearScreenCnt(e), n = t * (this.stdSpendTime(e) + .01);
return n > 0 ? r / n : 0;
};
e.prototype.sumMultiEliminationCnt = function(e) {
var t, r, o, a, i, s, l = 0;
try {
for (var u = n(e), c = u.next(); !c.done; c = u.next()) {
var d = c.value;
l += (null !== (o = d.threeEliminateCnt) && void 0 !== o ? o : 0) + (null !== (a = d.fourEliminateCnt) && void 0 !== a ? a : 0) + (null !== (i = d.fiveEliminateCnt) && void 0 !== i ? i : 0) + (null !== (s = d.sixEliminateCnt) && void 0 !== s ? s : 0);
}
} catch (e) {
t = {
error: e
};
} finally {
try {
c && !c.done && (r = u.return) && r.call(u);
} finally {
if (t) throw t.error;
}
}
return l;
};
e.prototype.maxScoreGoldContent = function(e) {
var t, r;
if (0 === e.length) return 0;
var o = 0;
try {
for (var a = n(e), i = a.next(); !i.done; i = a.next()) {
var s = i.value, l = s.initWeight * s.score;
l > o && (o = l);
}
} catch (e) {
t = {
error: e
};
} finally {
try {
i && !i.done && (r = a.return) && r.call(a);
} finally {
if (t) throw t.error;
}
}
return o;
};
e.finiteAvg = function(e, t) {
var r, o, a = 0, i = 0;
try {
for (var s = n(e), l = s.next(); !l.done; l = s.next()) {
var u = t(l.value);
if ("number" == typeof u && Number.isFinite(u)) {
a += u;
i++;
}
}
} catch (e) {
r = {
error: e
};
} finally {
try {
l && !l.done && (o = s.return) && o.call(s);
} finally {
if (r) throw r.error;
}
}
return 0 === i ? void 0 : a / i;
};
e.prototype.avgPutRateAvg = function(t) {
return e.finiteAvg(t, function(e) {
return e.putRateAvg;
});
};
e.prototype.avgHolesCnt = function(t) {
return e.finiteAvg(t, function(e) {
return e.holesCnt;
});
};
e.prototype.avgBlocksCnt = function(t) {
return e.finiteAvg(t, function(e) {
return e.blocksCnt;
});
};
e.prototype.avgContiguousEdges = function(t) {
return e.finiteAvg(t, function(e) {
return e.contiguousEdges;
});
};
e.prototype.avgContiguousRegions = function(t) {
return e.finiteAvg(t, function(e) {
return e.contiguousRegions;
});
};
e.prototype.avgConvexCorners = function(t) {
return e.finiteAvg(t, function(e) {
return e.convexCorners;
});
};
e.prototype.avgConcaveCorners = function(t) {
return e.finiteAvg(t, function(e) {
return e.concaveCorners;
});
};
e.prototype.avgWeightAvg = function(t) {
return e.finiteAvg(t, function(e) {
return e.weightAvg;
});
};
e.prototype.avgTimeDiffInSeconds = function(t) {
return e.finiteAvg(t, function(e) {
var t = e.spendTime / 1e3;
return Math.min(600, Math.max(0, t));
});
};
e.prototype.maxMultiElimTier = function(e) {
var t, r, o, a, i, s, l = 0;
try {
for (var u = n(e), c = u.next(); !c.done; c = u.next()) {
var d = c.value, f = (null !== (o = d.sixEliminateCnt) && void 0 !== o ? o : 0) > 0 ? 6 : (null !== (a = d.fiveEliminateCnt) && void 0 !== a ? a : 0) > 0 ? 5 : (null !== (i = d.fourEliminateCnt) && void 0 !== i ? i : 0) > 0 ? 4 : (null !== (s = d.threeEliminateCnt) && void 0 !== s ? s : 0) > 0 ? 3 : 0;
f > l && (l = f);
}
} catch (e) {
t = {
error: e
};
} finally {
try {
c && !c.done && (r = u.return) && r.call(u);
} finally {
if (t) throw t.error;
}
}
return l;
};
return e;
}();
r.ModelFeatureCollectRoundStats = m;
cc._RF.pop();
}, {
"./ModelFeatureAlgoClassifier": "ModelFeatureAlgoClassifier",
"./ModelFeatureAlgoClassifierNew": "ModelFeatureAlgoClassifierNew"
} ],
ModelFeatureCollectorBase: [ function(e, t, r) {
"use strict";
cc._RF.push(t, "f0a71ZP8NtOW46hERYtNJFN", "ModelFeatureCollectorBase");
var n = this && this.__awaiter || function(e, t, r, n) {
return new (r || (r = Promise))(function(o, a) {
function i(e) {
try {
l(n.next(e));
} catch (e) {
a(e);
}
}
function s(e) {
try {
l(n.throw(e));
} catch (e) {
a(e);
}
}
function l(e) {
e.done ? o(e.value) : (t = e.value, t instanceof r ? t : new r(function(e) {
e(t);
})).then(i, s);
var t;
}
l((n = n.apply(e, t || [])).next());
});
}, o = this && this.__generator || function(e, t) {
var r, n, o, a, i = {
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
if (r) throw new TypeError("Generator is already executing.");
for (;i; ) try {
if (r = 1, n && (o = 2 & a[0] ? n.return : a[0] ? n.throw || ((o = n.return) && o.call(n), 
0) : n.next) && !(o = o.call(n, a[1])).done) return o;
(n = 0, o) && (a = [ 2 & a[0], o.value ]);
switch (a[0]) {
case 0:
case 1:
o = a;
break;

case 4:
i.label++;
return {
value: a[1],
done: !1
};

case 5:
i.label++;
n = a[1];
a = [ 0 ];
continue;

case 7:
a = i.ops.pop();
i.trys.pop();
continue;

default:
if (!(o = i.trys, o = o.length > 0 && o[o.length - 1]) && (6 === a[0] || 2 === a[0])) {
i = 0;
continue;
}
if (3 === a[0] && (!o || a[1] > o[0] && a[1] < o[3])) {
i.label = a[1];
break;
}
if (6 === a[0] && i.label < o[1]) {
i.label = o[1];
o = a;
break;
}
if (o && i.label < o[2]) {
i.label = o[2];
i.ops.push(a);
break;
}
o[2] && i.ops.pop();
i.trys.pop();
continue;
}
a = t.call(e, i);
} catch (e) {
a = [ 6, e ];
n = 0;
} finally {
r = o = 0;
}
if (5 & a[0]) throw a[1];
return {
value: a[0] ? a[1] : void 0,
done: !0
};
}
}, a = this && this.__values || function(e) {
var t = "function" == typeof Symbol && Symbol.iterator, r = t && e[t], n = 0;
if (r) return r.call(e);
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
Object.defineProperty(r, "__esModule", {
value: !0
});
r.ModelFeatureCollectorBase = r.deepPick = void 0;
var i = e("../../interface/ModelFeaturePendingSourceInterface"), s = e("../../interface/ModelFeatureSeriesSourceInterface"), l = e("../storage/ModelFeaturePersistInfo"), u = e("../../utils/ModelFeaturePerfLog");
function c(e) {
var t, r, n = {};
try {
for (var o = a(e), i = o.next(); !i.done; i = o.next()) for (var s = i.value.split("."), l = n, u = 0; u < s.length; u++) {
var c = s[u];
if (u === s.length - 1) !0 !== l[c] && (l[c] = !0); else {
l[c] && !0 !== l[c] || (l[c] = {});
l = l[c];
}
}
} catch (e) {
t = {
error: e
};
} finally {
try {
i && !i.done && (r = o.return) && r.call(o);
} finally {
if (t) throw t.error;
}
}
return n;
}
function d(e, t) {
var r, n;
if (null == e) return e;
if (Array.isArray(e)) return e.map(function(e) {
return d(e, t);
});
if ("object" == typeof e) {
var o = {};
try {
for (var i = a(Object.keys(t)), s = i.next(); !s.done; s = i.next()) {
var l = s.value;
if (l in e) {
var u = t[l];
o[l] = !0 === u ? e[l] : d(e[l], u);
}
}
} catch (e) {
r = {
error: e
};
} finally {
try {
s && !s.done && (n = i.return) && n.call(i);
} finally {
if (r) throw r.error;
}
}
return o;
}
return e;
}
function f(e, t) {
return d(e, c(t));
}
r.deepPick = f;
function m() {
return Object.fromEntries(Object.values(s.EModelFeatureSeriesSource).map(function(e) {
return [ e, l.ModelFeaturePersistInfo.getSeriesArray(e) ];
}));
}
function p() {
return Object.fromEntries(Object.values(s.EModelFeatureSeriesSource).map(function(e) {
return [ e, {
fields: {}
} ];
}));
}
function h() {
return Object.fromEntries(Object.values(i.EModelFeaturePendingSource).map(function(e) {
return [ e, void 0 ];
}));
}
var g = function() {
function e() {
var e = this;
this.splitIndices = new Map();
this.records = m();
this.pendings = h();
this.sourceState = p();
this.activeFields = new Map();
this._isReady = !1;
this._hydratePromise = null;
l.registerHydrateGate(function() {
return e.isReady();
}, function() {
return e.ensureHydrated();
});
}
e.prototype.loadPersistedData = function() {
var e, t, r, n = u.ModelFeaturePerfLog.now();
this.records = m();
this.pendings = h();
try {
for (var o = a(Object.values(i.EModelFeaturePendingSource)), s = o.next(); !s.done; s = o.next()) {
var c = s.value, d = l.ModelFeaturePersistInfo.loadSingle(c);
null != d && (this.pendings[c] = d);
}
} catch (t) {
e = {
error: t
};
} finally {
try {
s && !s.done && (t = o.return) && t.call(o);
} finally {
if (e) throw e.error;
}
}
this.sourceState = null !== (r = l.ModelFeaturePersistInfo.loadSingle("sourceState")) && void 0 !== r ? r : p();
u.ModelFeaturePerfLog.log("Collector", "loadPersistedData 完成 耗时 " + u.ModelFeaturePerfLog.ms(n) + "ms");
};
e.prototype.ensureHydrated = function() {
var e = this;
if (this._isReady) return Promise.resolve();
if (this._hydratePromise) u.ModelFeaturePerfLog.log("Collector", "ensureHydrated 复用进行中的 Promise"); else {
u.ModelFeaturePerfLog.log("Collector", "ensureHydrated 开始首次 hydrate");
this._hydratePromise = this.hydrateSeries().finally(function() {
e._isReady || (e._isReady = !0);
});
}
return this._hydratePromise;
};
e.prototype.hydrateSeries = function() {
return n(this, void 0, Promise, function() {
var e, t, r, n, i, c, d, f, m, p, h, g, v;
return o(this, function(o) {
switch (o.label) {
case 0:
e = u.ModelFeaturePerfLog.now();
t = [];
o.label = 1;

case 1:
o.trys.push([ 1, 10, , 11 ]);
o.label = 2;

case 2:
o.trys.push([ 2, 7, 8, 9 ]);
r = a(Object.values(s.EModelFeatureSeriesSource)), n = r.next();
o.label = 3;

case 3:
if (n.done) return [ 3, 6 ];
i = n.value;
c = u.ModelFeaturePerfLog.now();
return [ 4, l.ModelFeaturePersistInfo.loadSeries(i) ];

case 4:
o.sent();
t.push({
source: i,
records: this.records[i].length,
ms: u.ModelFeaturePerfLog.ms(c)
});
o.label = 5;

case 5:
n = r.next();
return [ 3, 3 ];

case 6:
return [ 3, 9 ];

case 7:
d = o.sent();
g = {
error: d
};
return [ 3, 9 ];

case 8:
try {
n && !n.done && (v = r.return) && v.call(r);
} finally {
if (g) throw g.error;
}
return [ 7 ];

case 9:
f = u.ModelFeaturePerfLog.now();
l.ModelFeaturePersistInfo.ensureSplitIndices();
this.computeSplitIndices();
m = u.ModelFeaturePerfLog.ms(f);
p = t.reduce(function(e, t) {
return e + t.records;
}, 0);
u.ModelFeaturePerfLog.log("Collector", "hydrateSeries 全部 source 入内存完成", {
sources: t,
totalRecords: p,
splitMs: m,
totalMs: u.ModelFeaturePerfLog.ms(e)
});
return [ 3, 11 ];

case 10:
h = o.sent();
u.ModelFeaturePerfLog.error("Collector", "series 历史数据补齐失败", h);
try {
l.ModelFeaturePersistInfo.ensureSplitIndices();
this.computeSplitIndices();
} catch (e) {
u.ModelFeaturePerfLog.error("Collector", "hydrate 失败后重建 splitIndex 仍失败", e);
}
return [ 3, 11 ];

case 11:
return [ 2 ];
}
});
});
};
e.prototype.computeSplitIndices = function() {
var e, t;
try {
for (var r = a(Object.values(s.EModelFeatureSeriesSource)), n = r.next(); !n.done; n = r.next()) {
var o = n.value;
this.refreshSplitIndex(o);
}
} catch (t) {
e = {
error: t
};
} finally {
try {
n && !n.done && (t = r.return) && t.call(r);
} finally {
if (e) throw e.error;
}
}
this._isReady = !0;
};
e.prototype.refreshSplitIndex = function(e) {
var t, r = null !== (t = l.ModelFeaturePersistInfo.loadSplitIndex(e)) && void 0 !== t ? t : 0, n = l.ModelFeaturePersistInfo.loadIsSplit(e), o = n ? r : 0;
this.splitIndices.set(e, {
firstEnd: r,
secondStart: o,
isSplit: n
});
};
e.prototype.getPending = function(e) {
return this.pendings[e];
};
e.prototype.setPending = function(e, t, r) {
void 0 === r && (r = !0);
if (null == t) {
delete this.pendings[e];
r && l.ModelFeaturePersistInfo.removeSingle(e);
} else {
this.pendings[e] = t;
r && l.ModelFeaturePersistInfo.saveSingle(e, t);
}
};
e.prototype.saveSourceState = function() {
l.ModelFeaturePersistInfo.saveSingle("sourceState", this.sourceState);
};
e.prototype.pushRecord = function(e, t) {
u.ModelFeaturePerfLog.log("Collector", "写入原始流源 " + e + " 裁剪前数据: ", t);
var r, n = (r = this.activeFields.get(e)) ? f(t, r) : t;
l.ModelFeaturePersistInfo.appendSeriesRecord(e, n) && this.refreshSplitIndex(e);
u.ModelFeaturePerfLog.log("Collector", "写入原始流源 " + e + " 裁剪后数据: ", n);
};
e.prototype.getRecordCount = function(e) {
return this.records[e].length;
};
e.prototype.getLastRecord = function(e) {
var t = this.records[e];
if (0 !== t.length) return t[t.length - 1];
};
e.prototype.getActiveFields = function() {
return this.activeFields;
};
e.prototype.addActiveFields = function(e) {
var t, r, n, o;
try {
for (var i = a(Object.values(s.EModelFeatureSeriesSource)), l = i.next(); !l.done; l = i.next()) {
var u = l.value, c = e.get(u);
if (c && 0 !== c.size) {
var d = this.activeFields.get(u);
if (d) try {
for (var f = (n = void 0, a(c)), m = f.next(); !m.done; m = f.next()) {
var p = m.value;
d.add(p);
}
} catch (e) {
n = {
error: e
};
} finally {
try {
m && !m.done && (o = f.return) && o.call(f);
} finally {
if (n) throw n.error;
}
} else this.activeFields.set(u, new Set(c));
}
}
} catch (e) {
t = {
error: e
};
} finally {
try {
l && !l.done && (r = i.return) && r.call(i);
} finally {
if (t) throw t.error;
}
}
};
e.prototype.getSplitIndex = function(e) {
return this.splitIndices.get(e);
};
e.prototype.isSeriesActive = function(e) {
return this.activeFields.has(e);
};
e.prototype.collectRecord = function(e, t) {
this.isSeriesActive(e) ? this.pushRecord(e, t) : u.ModelFeaturePerfLog.log("Collector", "原始流源 " + e + " 本次运行不采集，丢弃一条记录", t);
};
e.prototype.isReady = function() {
return this._isReady;
};
return e;
}();
r.ModelFeatureCollectorBase = g;
cc._RF.pop();
}, {
"../../interface/ModelFeaturePendingSourceInterface": "ModelFeaturePendingSourceInterface",
"../../interface/ModelFeatureSeriesSourceInterface": "ModelFeatureSeriesSourceInterface",
"../../utils/ModelFeaturePerfLog": "ModelFeaturePerfLog",
"../storage/ModelFeaturePersistInfo": "ModelFeaturePersistInfo"
} ],
ModelFeatureCollector: [ function(e, t, r) {
"use strict";
cc._RF.push(t, "66e31efEx5HMp+/CORkE1+V", "ModelFeatureCollector");
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
}, s = this && this.__read || function(e, t) {
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
}, l = this && this.__spread || function() {
for (var e = [], t = 0; t < arguments.length; t++) e = e.concat(s(arguments[t]));
return e;
}, u = this && this.__values || function(e) {
var t = "function" == typeof Symbol && Symbol.iterator, r = t && e[t], n = 0;
if (r) return r.call(e);
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
Object.defineProperty(r, "__esModule", {
value: !0
});
r.modelFeatureCollector = void 0;
var c = e("../../../../../scripts/modules/advertisement/vo/AdvertisementAdValueInfo"), d = e("../../../../../scripts/modules/algorithm/vo/AlgorithmInfo"), f = e("../../../../../scripts/modules/algorithm/vo/AlgorithmName"), m = e("../../../../../scripts/modules/binary/vo/BinarySupport"), p = e("../../../../../scripts/modules/binary/vo/BinaryBoard"), h = e("../../../../../scripts/modules/blocksProducer/vo/BlocksProducerInfo"), g = e("../../../../../scripts/modules/board/vo/BoardInfo"), v = e("../../../../../scripts/modules/dataCollect/vo/DataCollectSummaryInfo"), y = e("../../../../../scripts/modules/game/type/GameType"), b = e("../../../../../scripts/modules/game/vo/GameInfo"), _ = e("../../../../../scripts/modules/adxModel/vo/AdxModelReplaceAdCtrl"), S = e("../../../../../scripts/modules/adxModel/type/AdxModelType"), I = e("../../../../../scripts/modules/advertisement/config/AdvertisementConfig"), w = e("../../interface/ModelFeatureDotInterface"), M = e("../../interface/ModelFeaturePendingSourceInterface"), C = e("../../interface/ModelFeatureSeriesSourceInterface"), G = e("../../utils/ModelFeatureCollectRoundStats"), R = e("../proto/ModelFeatureData"), x = e("../storage/ModelFeaturePersistInfo"), O = e("../storage/ModelFeatureRoundsShardStore"), F = e("../storage/ModelFeatureInterLoadEcpmStore"), T = e("./ModelFeatureCollectorBase"), N = e("../../../../../scripts/modules/dataStatistics/vo/DataStatisticsInfo"), E = {
comboMaxNum: 0,
comboRoundNum: 0,
comboTouchNum: 0,
eliminateCols: 0,
eliminateRows: 0,
eliminateAll: 0,
eliminate1: 0,
eliminate2: 0,
eliminate3: 0,
eliminate4: 0,
eliminate5: 0,
eliminate6: 0,
clearNum: 0
};
function j(e, t, r) {
var n = r.value;
r.value = function() {
for (var e = [], t = 0; t < arguments.length; t++) e[t] = arguments[t];
if (b.gameInfo.gameMode === y.GameMode.Class || b.gameInfo.gameMode === y.GameMode.Chapter) return n.apply(this, e);
};
return r;
}
var A = function(e) {
o(t, e);
function t() {
var t = null !== e && e.apply(this, arguments) || this;
t._coldStartHandled = !1;
t._stats = new G.ModelFeatureCollectRoundStats();
t._sessionTimer = null;
t._roundsShardFlushCounter = 0;
t._pendingShardRounds = "";
t._prevFaceBlock = null;
t._blockCount = 1;
t._iosAdMergeStates = new Map();
t._coldStartRoundSkipModes = new Set();
return t;
}
t.prototype.loadPersistedData = function() {
e.prototype.loadPersistedData.call(this);
this._reconcileRoundsOnLoad(y.GameMode.Class);
this._reconcileRoundsOnLoad(y.GameMode.Chapter);
};
t.prototype._reconcileRoundsOnLoad = function(e) {
var t, r, n = e === y.GameMode.Class ? M.EModelFeaturePendingSource.PendingClassGameInfo : M.EModelFeaturePendingSource.PendingChapterGameInfo, o = this.getPending(n);
if (null == o ? void 0 : o.gameInfo) {
var a = null !== (r = null === (t = o.gameInfo.baseGameInfo) || void 0 === t ? void 0 : t.gameNum) && void 0 !== r ? r : 0;
if (a === this._readRealGameNum(e)) {
this._coldStartRoundSkipModes.add(e);
var i = O.ModelFeatureRoundsShardStore.loadAllRoundsShards(e, a);
if (i.length > 0) o.gameInfo.rounds = i; else if (Array.isArray(o.gameInfo.rounds) && o.gameInfo.rounds.length > 0) {
var s = o.gameInfo.rounds;
this._writeAllRoundsShards(e, a, s);
o.gameInfo.rounds = s;
} else o.gameInfo.rounds = [];
} else {
this.setPending(n, null);
O.ModelFeatureRoundsShardStore.clearAllRoundsShards(e);
}
}
};
t.prototype._readRealGameNum = function(e) {
return e === y.GameMode.Class ? storage.getItem("classGameNum", 0) : storage.getItem("chapterGameNum", 0);
};
t.prototype._writeAllRoundsShards = function(e, t, r) {
for (var n = O.ModelFeatureRoundsShardStore.ROUNDS_SHARD_CAPACITY, o = Math.ceil(r.length / n), a = 0; a < o; a++) {
var i = a * n, s = r.slice(i, i + n);
O.ModelFeatureRoundsShardStore.saveRoundsShard(e, t, a, s);
}
};
t.prototype.onDotEvent = function(e) {
switch (e.key) {
case w.ModelFeatureDotInterface.TouchEnd:
this.onTouchEnd(e.params);
break;

case w.ModelFeatureDotInterface.GameRevive:
this.onReviveSuccess(e.params);
}
};
t.prototype.onColdStart = function() {
if (this.isSeriesActive(C.EModelFeatureSeriesSource.Session) && !this._coldStartHandled) {
this._coldStartHandled = !0;
var e = Date.now(), t = {
ts: e,
finalActiveTs: e
};
this.collectRecord(C.EModelFeatureSeriesSource.Session, t);
this.resumeSessionTimer();
null != this._pendingAdInterstitial && this.onGPAdStatus({
state: 0,
type: 0
}, !0);
null != this._pendingAdReward && this.onGPAdStatus({
state: 0,
type: 1
}, !0);
null != this._pendingAdBanner && this.onGPAdStatus({
state: 0,
type: 2
}, !0);
}
};
t.prototype.pauseSessionTimer = function() {
if (this._sessionTimer) {
clearInterval(this._sessionTimer);
this._sessionTimer = null;
}
};
t.prototype.resumeSessionTimer = function() {
var e = this;
this.isSeriesActive(C.EModelFeatureSeriesSource.Session) && (this._sessionTimer || (this._sessionTimer = setInterval(function() {
e._updateSessionFinalActiveTs();
}, 2e4)));
};
t.prototype._updateSessionFinalActiveTs = function() {
var e = this.getLastRecord(C.EModelFeatureSeriesSource.Session);
if (e) {
var t = Date.now();
e.finalActiveTs = t;
x.ModelFeaturePersistInfo.updateLatestArrayItem("session", e.ts, function(e) {
var r = e;
r.finalActiveTs = t;
return r;
});
}
};
t.prototype.onGameStart = function(e) {
var t, r, n;
if (this.isSeriesActive(C.EModelFeatureSeriesSource.Game) && (null === (n = null === (r = null === (t = this._pending) || void 0 === t ? void 0 : t.gameInfo) || void 0 === r ? void 0 : r.baseGameInfo) || void 0 === n ? void 0 : n.gameNum) !== this._currentGameNum && ((null == e ? void 0 : e.data.newGame) || b.gameInfo.gameMode !== y.GameMode.Class || 0 == this._currentGameNum)) {
this._pendingAdInterstitial = void 0;
this._pendingAdReward = void 0;
this._pendingAdBanner = void 0;
O.ModelFeatureRoundsShardStore.clearAllRoundsShards(b.gameInfo.gameMode);
this._roundsShardFlushCounter = 0;
this._pendingShardRounds = "";
this._coldStartRoundSkipModes.delete(b.gameInfo.gameMode);
var o = Date.now();
b.gameInfo.gameMode;
this._pending = {
gameInfo: this._buildInitialGameInfoSet(o),
activeRound: void 0,
gameStartTime: o
};
}
};
t.prototype.onNewBlockGenerateEnd = function() {
var e, t, r, n;
if (this._isInBout() && !(storage.getItem("classGuideStep", 0) <= 2)) {
var o = b.gameInfo.gameMode;
if (this._coldStartRoundSkipModes.has(o)) this._coldStartRoundSkipModes.delete(o); else {
var a = null !== (r = null === (t = null === (e = this._pending) || void 0 === e ? void 0 : e.activeRound) || void 0 === t ? void 0 : t.lastBlockTime) && void 0 !== r ? r : 0;
this._endCurrentRound();
var i = this._pending, s = g.boardInfo.faceBlocks, l = m.binarySupport.getWeightValue(s), u = this._getCurrentScore();
this._prevFaceBlock = s;
this._blockCount = Math.max(1, h.blocksProducerInfo.producerBlocks.length);
i.activeRound = {
initWeight: l,
score: u,
ts: this._spendTime,
spendTime: 0,
maxCombo: 0,
comboCnt: 0,
clearScreenCnt: 0,
oneEliminateCnt: 0,
twoEliminateCnt: 0,
threeEliminateCnt: 0,
fourEliminateCnt: 0,
fiveEliminateCnt: 0,
sixEliminateCnt: 0,
algoType: f.algorithmName.algoActualIdByPos,
algoName: null !== (n = f.algorithmName.algoActualName.join("|")) && void 0 !== n ? n : "",
thinkTime: 0,
actionTime: 0,
lastBlockTime: a,
putRateAvg: 0,
holesCnt: 0,
blocksCnt: 0,
contiguousEdges: 0,
contiguousRegions: 0,
convexCorners: 0,
concaveCorners: 0,
weightAvg: 0,
reviveCnt: 0
};
}
}
};
t.prototype.onTouchEnd = function(e) {
var t, r, n, o;
if (this._isInBout() && !(storage.getItem("classGuideStep", 0) <= 2)) {
var a = this._spendTime, i = Date.now(), s = this._pending.activeRound;
if (s) {
var l = null !== (t = s.lastBlockTime) && void 0 !== t ? t : 0;
if (l > 0) {
var u = a - l, c = i - Number(null !== (r = null == e ? void 0 : e.last_click_time) && void 0 !== r ? r : i), d = Math.min(11e3, Math.max(0, c)), f = Math.min(6e4, Math.max(0, u - d));
s.thinkTime += f;
s.actionTime += d;
} else {
c = i - Number(null !== (n = null == e ? void 0 : e.last_click_time) && void 0 !== n ? n : i);
s.actionTime += Math.min(11e3, Math.max(0, c));
}
var p = Number(null !== (o = null == e ? void 0 : e.combo_cnt) && void 0 !== o ? o : 0);
p > s.maxCombo && (s.maxCombo = p);
s.comboCnt += p;
1 === (null == e ? void 0 : e.is_clean_screen) && s.clearScreenCnt++;
if (Array.isArray(null == e ? void 0 : e.clean)) {
var h = e.clean.length;
1 === h ? s.oneEliminateCnt++ : 2 === h ? s.twoEliminateCnt++ : 3 === h ? s.threeEliminateCnt++ : 4 === h ? s.fourEliminateCnt++ : 5 === h ? s.fiveEliminateCnt++ : h >= 6 && s.sixEliminateCnt++;
}
var v = this._blockCount || 1, y = null == e ? void 0 : e.put_rate, b = null != y && Number.isFinite(Number(y)) && Number(y) >= 0, _ = b ? Number(y) : 0;
if (!b && this._prevFaceBlock && null != (null == e ? void 0 : e.block_id) && Array.isArray(e.position)) {
var S = this._calcPutRatePos(e.position, e.block_id);
S && (_ = m.binarySupport.getNearBoarderPer(this._prevFaceBlock, e.block_id, S));
}
s.putRateAvg += _ / v;
s.weightAvg += m.binarySupport.getWeightValue(g.boardInfo.faceBlocks) / v;
this._prevFaceBlock = g.boardInfo.faceBlocks;
s.lastBlockTime = a;
}
}
};
t.prototype._calcPutRatePos = function(e, t) {
var r, n = null === (r = hs.blockPosInfo) || void 0 === r ? void 0 : r[t - 1];
if (!Array.isArray(n) || 0 === n.length) return new cc.Vec2(e[1], e[0]);
for (var o = 0; o < n.length && n[o].every(function(e) {
return 0 === e;
}); ) o++;
if (o >= n.length) return new cc.Vec2(e[1], e[0]);
for (var a = n[o], i = 0; i < a.length && 0 === a[i]; ) i++;
i >= a.length && (i = 0);
var s = e[0] - o, l = e[1] - i;
return new cc.Vec2(Math.max(0, l), Math.max(0, s));
};
t.prototype._finishActiveRound = function() {
var e, t, r, n, o = this._pending, a = o.activeRound;
if (!a) return null;
var i = this._spendTime - a.ts, s = a.score, l = new p.BinaryBoard();
l.convertToBinaryBoard(g.boardInfo.faceBlocks);
var u = {
initWeight: a.initWeight,
score: this._getCurrentScore() - s,
ts: a.ts,
spendTime: Math.max(0, i),
maxCombo: a.maxCombo,
clearScreenCnt: a.clearScreenCnt,
oneEliminateCnt: a.oneEliminateCnt,
twoEliminateCnt: a.twoEliminateCnt,
threeEliminateCnt: a.threeEliminateCnt,
fourEliminateCnt: a.fourEliminateCnt,
fiveEliminateCnt: a.fiveEliminateCnt,
sixEliminateCnt: a.sixEliminateCnt,
comboCnt: a.comboCnt,
algoType: a.algoType,
algoName: a.algoName,
thinkTime: a.thinkTime,
actionTime: a.actionTime,
putRateAvg: null !== (e = a.putRateAvg) && void 0 !== e ? e : 0,
holesCnt: l.getRowColHoleCount(),
blocksCnt: 64 - l.getEmptyNumObj(),
contiguousEdges: l.getEdgeNumBinary(),
contiguousRegions: l.getBlankCount(),
convexCorners: l.getYangNum(),
concaveCorners: l.getYinNum(),
weightAvg: null !== (t = a.weightAvg) && void 0 !== t ? t : 0,
reviveCnt: null !== (r = a.reviveCnt) && void 0 !== r ? r : 0
};
o.activeRound = null;
(null !== (n = o.gameInfo.rounds) && void 0 !== n ? n : o.gameInfo.rounds = []).push(u);
return u;
};
t.prototype._endCurrentRound = function() {
var e, r, n, o = this._pending, a = this._finishActiveRound();
if (a) {
var i = O.ModelFeatureRoundsShardStore.encodeRound(a);
this._pendingShardRounds = this._pendingShardRounds ? this._pendingShardRounds + "&" + i : i;
this._roundsShardFlushCounter++;
if (this._roundsShardFlushCounter >= t.ROUNDS_SHARD_FLUSH_INTERVAL) {
this._roundsShardFlushCounter = 0;
var s = null !== (r = null === (e = o.gameInfo.baseGameInfo) || void 0 === e ? void 0 : e.gameNum) && void 0 !== r ? r : 0, l = null !== (n = o.gameInfo.rounds) && void 0 !== n ? n : [];
this._writeRoundsShard(s, this._pendingShardRounds, l.length);
this._pendingShardRounds = "";
}
}
};
t.prototype._writeRoundsShard = function(e, t, r) {
var n = O.ModelFeatureRoundsShardStore.ROUNDS_SHARD_CAPACITY, o = Math.floor((r - 1) / n);
O.ModelFeatureRoundsShardStore.appendEncodedShard(b.gameInfo.gameMode, e, o, t);
};
t.prototype.onGameEndFromStats = function(e) {
var t, r, n, o, a, i, s, l;
if (this._isInBout()) {
var u = b.gameInfo.gameMode === y.GameMode.Class, c = u ? "classDataStatisticsInfo" : "chapterDataStatisticsInfo", d = storage.getItem(c, E), f = u ? "class" : "chapter", m = storage.getItem(f + "ReviveShowNum", 0), p = storage.getItem(f + "AdvertisementSuccessNum", 0), h = storage.getItem(f + "AdvertisementShowNum", 0), g = {
GameType: u ? y.GameType.Class : y.GameType.Chapter,
RealTime: Math.floor(this._spendTime / 1e3),
max_combo: null !== (t = d.comboMaxNum) && void 0 !== t ? t : 0,
combo_cnt: null !== (r = d.comboRoundNum) && void 0 !== r ? r : 0,
one_clean: null !== (n = d.eliminate1) && void 0 !== n ? n : 0,
two_clean: null !== (o = d.eliminate2) && void 0 !== o ? o : 0,
three_clean: null !== (a = d.eliminate3) && void 0 !== a ? a : 0,
four_clean: null !== (i = d.eliminate4) && void 0 !== i ? i : 0,
five_clean: null !== (s = d.eliminate5) && void 0 !== s ? s : 0,
six_clean: null !== (l = d.eliminate6) && void 0 !== l ? l : 0,
ReviveShow: m,
revive_show_cnt: m,
ReviveSuccess: p,
revice_success_cnt: p,
reward_ad_click_cnt: h,
IsReplay: e ? 1 : 0
};
this.onGameEnd(g);
}
};
t.prototype.onGameEnd = function(e) {
var t, r;
if (this._isInBout()) {
var n = Date.now(), o = Number(null !== (t = null == e ? void 0 : e.GameType) && void 0 !== t ? t : -1);
if (o === y.GameType.Class || o === y.GameType.Chapter) {
this._finishActiveRound();
var a = this._buildFinalGameInfoSet(e, n);
this.collectRecord(C.EModelFeatureSeriesSource.Game, a);
this._resetPending();
var i = 1 === Number(null !== (r = null == e ? void 0 : e.IsReplay) && void 0 !== r ? r : 0);
v.dataCollectSummaryInfo.onGameEnd(b.gameInfo.gameMode, i);
a.rounds;
}
}
};
t.prototype.onAdShow = function(e) {
var t;
if (this.isSeriesActive(C.EModelFeatureSeriesSource.Ad)) {
var r = null === (t = null == e ? void 0 : e.data) || void 0 === t ? void 0 : t.adType, n = b.gameInfo.gameNum, o = _.adxModelReplaceAdCtrl.getAdxTypeByStr(r);
r === I.AD_TYPE.IOS_TYPE_55 && (o = S.AdxReplaceAdType.Interstitial);
if (o === S.AdxReplaceAdType.Interstitial) {
var a = r === I.AD_TYPE.TYPE_4 || r === I.AD_TYPE.TYPE_45 || r === I.AD_TYPE.TYPE_49, i = a ? n - 1 : n;
this._pendingAdInterstitial = this._buildPendingAdContext(R.ModelFeature.AdType.Interstitial, i, a);
this._resetIosAdMergeState("interstitial");
} else if (o === S.AdxReplaceAdType.Reward) {
this._pendingAdReward = this._buildPendingAdContext(R.ModelFeature.AdType.Reward, n);
this._resetIosAdMergeState("reward");
} else if (o === S.AdxReplaceAdType.Banner) {
this._pendingAdBanner = this._buildPendingAdContext(R.ModelFeature.AdType.Banner, n);
this._resetIosAdMergeState("banner");
}
}
};
t.prototype.onAdLoadSuccess = function(e) {
if (this.isSeriesActive(C.EModelFeatureSeriesSource.Ad) && e && "interstitialAd" === e.adType) {
var t = e.adEcpm;
null == t || !Number.isFinite(t) || t <= 0 || F.modelFeatureInterLoadEcpmStore.append(t);
}
};
t.prototype.onAdShowSuccess = function(e) {
var t, r, n, o, i, s, l, u;
if (this.isSeriesActive(C.EModelFeatureSeriesSource.Ad)) {
var c = this._findPendingAdSlot(null == e ? void 0 : e.adType);
if (c) {
var d = a(a({}, c.pending), {
adType: null !== (r = this._getCollectAdType(null == e ? void 0 : e.adType)) && void 0 !== r ? r : c.pending.adType,
adUnitId: null !== (n = null == e ? void 0 : e.adUnitId) && void 0 !== n ? n : "",
networkName: null !== (o = null == e ? void 0 : e.networkName) && void 0 !== o ? o : "",
networkPlacement: null !== (i = null == e ? void 0 : e.networkPlacement) && void 0 !== i ? i : "",
adEcpm: Number(null !== (s = null == e ? void 0 : e.adEcpm) && void 0 !== s ? s : 0),
adCorridor: Number(null !== (l = null == e ? void 0 : e.adCorridor) && void 0 !== l ? l : 0),
adCreateId: null !== (u = null == e ? void 0 : e.adCreateId) && void 0 !== u ? u : ""
});
this._writePendingAdSlot(c.type, d);
} else this._warnPendingAdMiss(null !== (t = this._normalizeAdType(null == e ? void 0 : e.adType)) && void 0 !== t ? t : String(null == e ? void 0 : e.adType), null == e ? void 0 : e.adType);
}
};
t.prototype.onIosAdShowSuccess = function(e) {
var t, r, n, o, i, s, l, u;
if (this.isSeriesActive(C.EModelFeatureSeriesSource.Ad)) {
var c = this._findPendingAdSlot(null == e ? void 0 : e.adType);
if (c) {
var d = this._getIosAdMergeState(c.type), f = a(a({}, c.pending), {
adType: null !== (r = this._getCollectAdType(null == e ? void 0 : e.adType)) && void 0 !== r ? r : c.pending.adType,
adUnitId: null !== (n = null == e ? void 0 : e.adUnitId) && void 0 !== n ? n : "",
networkName: null !== (o = null == e ? void 0 : e.networkName) && void 0 !== o ? o : "",
networkPlacement: null !== (i = null == e ? void 0 : e.networkPlacement) && void 0 !== i ? i : "",
adEcpm: d.statusArrived ? c.pending.adEcpm : Number(null !== (s = null == e ? void 0 : e.adEcpm) && void 0 !== s ? s : 0),
adCorridor: Number(null !== (l = null == e ? void 0 : e.adCorridor) && void 0 !== l ? l : 0),
adCreateId: null !== (u = null == e ? void 0 : e.adCreateId) && void 0 !== u ? u : ""
});
this._writePendingAdSlot(c.type, f);
d.richArrived = !0;
d.lastEventTs = Date.now();
this._maybeCommitIosAd(c.type);
} else this._warnPendingAdMiss(null !== (t = this._normalizeAdType(null == e ? void 0 : e.adType)) && void 0 !== t ? t : String(null == e ? void 0 : e.adType), null == e ? void 0 : e.adType);
}
};
t.prototype.onGPAdStatus = function(e, t) {
var r;
void 0 === t && (t = !1);
if (e && this.isSeriesActive(C.EModelFeatureSeriesSource.Ad)) {
var n;
n = t ? 0 === e.type ? "interstitialAd" : 1 === e.type ? "rewardAd" : 2 === e.type ? "bannerAd" : void 0 : null != this._pendingAdReward ? "rewardAd" : "interstitialAd";
var o = this._consumePendingAd(n);
if (o) {
var i = Date.now(), s = 1 === e.state, l = a(a({}, o.pending), {
adType: null !== (r = this._getCollectAdType(n)) && void 0 !== r ? r : o.pending.adType,
watchDuration: t ? 0 : Math.max(0, (i - o.pending.ts) / 1e3),
status: s ? R.ModelFeature.AdStatus.Success : R.ModelFeature.AdStatus.Fail
});
this.collectRecord(C.EModelFeatureSeriesSource.Ad, l);
s && v.dataCollectSummaryInfo.onAdRecorded(l.adType, l.adEcpm);
}
}
};
t.prototype.onIosAdStatus = function(e) {
var t, r, n;
if (e && this.isSeriesActive(C.EModelFeatureSeriesSource.Ad)) {
var o = (null !== (t = e.adstatus) && void 0 !== t ? t : "").toLowerCase();
if (o) {
var i = this._findPendingAdSlot(e.adtype);
if (i) {
var s = -1 !== o.indexOf("show_success"), l = a(a({}, i.pending), {
adType: null !== (r = this._getCollectAdType(e.adtype)) && void 0 !== r ? r : i.pending.adType,
adEcpm: Number(null !== (n = e.adecpm) && void 0 !== n ? n : 0),
status: s ? R.ModelFeature.AdStatus.Success : R.ModelFeature.AdStatus.Fail
});
this._writePendingAdSlot(i.type, l);
var u = this._getIosAdMergeState(i.type);
u.statusArrived = !0;
u.lastEventTs = Date.now();
this._maybeCommitIosAd(i.type);
}
}
}
};
t.prototype._getIosAdMergeState = function(e) {
var t = this._iosAdMergeStates.get(e);
if (!t) {
t = {
richArrived: !1,
statusArrived: !1,
lastEventTs: 0,
settleTimer: null
};
this._iosAdMergeStates.set(e, t);
}
return t;
};
t.prototype._resetIosAdMergeState = function(e) {
var t = this._iosAdMergeStates.get(e);
if (t) {
if (t.settleTimer) {
clearTimeout(t.settleTimer);
t.settleTimer = null;
}
t.richArrived = !1;
t.statusArrived = !1;
t.lastEventTs = 0;
}
};
t.prototype._maybeCommitIosAd = function(e) {
var r = this, n = this._getIosAdMergeState(e);
n.richArrived && n.statusArrived ? this._commitIosAd(e) : n.settleTimer || (n.settleTimer = setTimeout(function() {
n.settleTimer = null;
r._commitIosAd(e);
}, t.IOS_AD_MERGE_WINDOW_MS));
};
t.prototype._commitIosAd = function(e) {
var t, r = this._getIosAdMergeState(e);
if (r.settleTimer) {
clearTimeout(r.settleTimer);
r.settleTimer = null;
}
var n = this._findPendingAdSlot(e);
if (n) {
var o = n.pending, i = r.lastEventTs > 0 ? r.lastEventTs : Date.now(), s = a(a({}, o), {
watchDuration: Math.max(0, (i - o.ts) / 1e3),
status: null !== (t = o.status) && void 0 !== t ? t : R.ModelFeature.AdStatus.Success
});
this._clearPendingAdSlot(e);
this._resetIosAdMergeState(e);
this.collectRecord(C.EModelFeatureSeriesSource.Ad, s);
s.status === R.ModelFeature.AdStatus.Success && v.dataCollectSummaryInfo.onAdRecorded(s.adType, s.adEcpm);
} else this._resetIosAdMergeState(e);
};
t.prototype._normalizeAdType = function(e) {
return "interstitial" === e ? "interstitialAd" : "reward" === e ? "rewardAd" : "banner" === e ? "bannerAd" : e;
};
t.prototype._findPendingAdSlot = function(e) {
var t = this._normalizeAdType(e);
if ("interstitialAd" === t) return this._pendingAdInterstitial ? {
type: "interstitial",
pending: this._pendingAdInterstitial
} : null;
if ("rewardAd" === t) return this._pendingAdReward ? {
type: "reward",
pending: this._pendingAdReward
} : null;
if ("bannerAd" === t) return this._pendingAdBanner ? {
type: "banner",
pending: this._pendingAdBanner
} : null;
var r = [];
this._pendingAdInterstitial && r.push([ "interstitial", this._pendingAdInterstitial ]);
this._pendingAdReward && r.push([ "reward", this._pendingAdReward ]);
this._pendingAdBanner && r.push([ "banner", this._pendingAdBanner ]);
if (1 === r.length) {
var n = s(r[0], 2);
return {
type: n[0],
pending: n[1]
};
}
return null;
};
t.prototype._writePendingAdSlot = function(e, t) {
"interstitial" === e ? this._pendingAdInterstitial = t : "reward" === e ? this._pendingAdReward = t : this._pendingAdBanner = t;
};
t.prototype._clearPendingAdSlot = function(e) {
"interstitial" === e ? this._pendingAdInterstitial = void 0 : "reward" === e ? this._pendingAdReward = void 0 : this._pendingAdBanner = void 0;
};
t.prototype._consumePendingAd = function(e) {
var t, r = this._findPendingAdSlot(e);
if (!r) {
this._warnPendingAdMiss(null !== (t = this._normalizeAdType(e)) && void 0 !== t ? t : String(e), e);
return null;
}
this._clearPendingAdSlot(r.type);
return {
pending: r.pending
};
};
t.prototype._warnPendingAdMiss = function() {};
t.prototype.onReviveSuccess = function(e) {
var t, r, n;
if (this._isInBout() && e) {
var o = this._pending, a = o.activeRound;
a && (a.reviveCnt = (null !== (t = a.reviveCnt) && void 0 !== t ? t : 0) + 1);
if (b.gameInfo.gameMode === y.GameMode.Class) {
var i = null === (r = o.gameInfo) || void 0 === r ? void 0 : r.classGameInfo;
if (i) {
var s = !1;
if (void 0 === i.firstReviveScore || i.firstReviveScore < 0) {
i.firstReviveScore = e.score;
s = !0;
}
var l = null === (n = o.gameInfo) || void 0 === n ? void 0 : n.baseGameInfo;
if (l && (void 0 === l.firstReviveRound || l.firstReviveRound <= 0)) {
l.firstReviveRound = this._curRound;
s = !0;
}
this._freezePending(o, s);
}
}
}
};
t.prototype._buildFinalGameInfoSet = function(e, t) {
var r, n, o, a, i, s, u, p, h, g, v, _, S, I, w, M, C, G, R, x, O, F, T, j, A, k = null !== (o = null === (n = null === (r = this._pending) || void 0 === r ? void 0 : r.gameInfo) || void 0 === n ? void 0 : n.rounds) && void 0 !== o ? o : [], P = this._stats, L = Math.round(Number(null !== (a = null == e ? void 0 : e.RealTime) && void 0 !== a ? a : 0)), B = Math.max(Number(null !== (i = null == e ? void 0 : e.max_combo) && void 0 !== i ? i : 0), P.maxCombo(k)), D = Math.max(Number(null !== (s = null == e ? void 0 : e.combo_cnt) && void 0 !== s ? s : 0), P.sumComboCnt(k)), W = Number(null !== (p = null !== (u = null == e ? void 0 : e.ReviveShow) && void 0 !== u ? u : null == e ? void 0 : e.revive_show_cnt) && void 0 !== p ? p : 0), H = Number(null !== (g = null !== (h = null == e ? void 0 : e.ReviveSuccess) && void 0 !== h ? h : null == e ? void 0 : e.revice_success_cnt) && void 0 !== g ? g : 0), U = Number(null !== (v = null == e ? void 0 : e.reward_ad_click_cnt) && void 0 !== v ? v : 0), V = 1 === Number(null !== (_ = null == e ? void 0 : e.IsReplay) && void 0 !== _ ? _ : 0), z = c.advertisementAdValueInfo.getInterstitialCacheSnapshot(), J = b.gameInfo.gameMode === y.GameMode.Class ? "classDataStatisticsInfo" : "chapterDataStatisticsInfo", q = storage.getItem(J, E), Z = Math.max(null !== (S = null == q ? void 0 : q.eliminateAll) && void 0 !== S ? S : 0, P.sumClearScreenCnt(k)), Y = k.length > 0 ? k[k.length - 1] : void 0, $ = null !== (I = null == Y ? void 0 : Y.algoName) && void 0 !== I ? I : this._lastAlgoName(), K = null !== (w = null == Y ? void 0 : Y.algoType) && void 0 !== w ? w : f.algorithmName.algoActualIdByPos, X = 1 === m.binarySupport.hasLiveWay(N.dataStatisticsInfo.blockProduceBoardList, d.algorithmInfo.blockIdList), Q = {
gameMode: this._toFeatureGameMode(),
spendTime: L,
maxCombo: B,
comboCnt: D,
clearScreenCnt: Z,
reviveShowCnt: W,
reviveSuccessCnt: H,
reviveClickCnt: U,
lastAlgoType: K,
lastAlgoName: $,
isReplay: V,
totalRound: k.length,
initWeight: k.length > 0 ? k[0].initWeight : 0,
oneEliminateCnt: Math.max(Number(null !== (M = null == e ? void 0 : e.one_clean) && void 0 !== M ? M : 0), P.sumOneEliminateCnt(k)),
twoEliminateCnt: Math.max(Number(null !== (C = null == e ? void 0 : e.two_clean) && void 0 !== C ? C : 0), P.sumTwoEliminateCnt(k)),
threeEliminateCnt: Math.max(Number(null !== (G = null == e ? void 0 : e.three_clean) && void 0 !== G ? G : 0), P.sumThreeEliminateCnt(k)),
fourEliminateCnt: Math.max(Number(null !== (R = null == e ? void 0 : e.four_clean) && void 0 !== R ? R : 0), P.sumFourEliminateCnt(k)),
fiveEliminateCnt: Math.max(Number(null !== (x = null == e ? void 0 : e.five_clean) && void 0 !== x ? x : 0), P.sumFiveEliminateCnt(k)),
sixEliminateCnt: Math.max(Number(null !== (O = null == e ? void 0 : e.six_clean) && void 0 !== O ? O : 0), P.sumSixEliminateCnt(k)),
eachRoundSpendTimeStd: P.stdSpendTime(k),
eachRoundSpendTimeAvg: P.avgSpendTime(k),
hasLiveWay: X,
algoInfoByNameSet: P.buildAlgoInfoByNameSet(k),
algoInfoByNameSetNew: P.buildAlgoInfoByNameSetNew(k),
firstDifficultySpendTime: P.firstDifficultySpendTime(k),
highWeightCollRoundCnt: P.countCoolRounds(k),
maxContinueCoolRoundLen: P.maxContinueCoolRoundLen(k),
maxConsecutiveNonCoolRoundLen: P.maxConsecutiveNonCoolRoundLen(k),
eachRoundInitWeightAvg: P.avgInitWeight(k),
firstReviveRound: null !== (A = null === (j = null === (T = null === (F = this._pending) || void 0 === F ? void 0 : F.gameInfo) || void 0 === T ? void 0 : T.baseGameInfo) || void 0 === j ? void 0 : j.firstReviveRound) && void 0 !== A ? A : 0,
scoreGoldContent: P.maxScoreGoldContent(k),
quickPutCoolRoundCount: P.countQuickCoolRounds(k),
flowScore: P.flowScore(k, L),
gameNum: this._currentGameNum,
currentInsertCacheNum: z.cacheNum,
currentInsertRevenue: 0 === z.cacheNum ? 0 : z.maxEcpm,
eachRoundMean: {
putRateAvg: P.avgPutRateAvg(k),
holesCntAvg: P.avgHolesCnt(k),
blocksCntAvg: P.avgBlocksCnt(k),
contiguousEdgesAvg: P.avgContiguousEdges(k),
contiguousRegionsAvg: P.avgContiguousRegions(k),
convexCornersAvg: P.avgConvexCorners(k),
concaveCornersAvg: P.avgConcaveCorners(k),
weightAvg: P.avgWeightAvg(k),
timeDiffInSecondsAvg: P.avgTimeDiffInSeconds(k)
}
}, ee = b.gameInfo.gameMode === y.GameMode.Class;
return {
ts: t,
baseGameInfo: Q,
classGameInfo: ee ? this._buildClassGameInfo() : void 0,
chapterGameInfo: ee ? void 0 : this._buildChapterGameInfo(),
rounds: k.length > 0 ? l(k) : void 0
};
};
t.prototype._buildInitialGameInfoSet = function(e) {
var t = b.gameInfo.gameMode === y.GameMode.Class;
return {
ts: e,
baseGameInfo: {
gameMode: this._toFeatureGameMode(),
gameNum: this._currentGameNum
},
classGameInfo: t ? {
lastHighScore: this._readGlobalMaxScore(),
firstReviveScore: -1
} : void 0,
chapterGameInfo: t ? void 0 : {},
rounds: []
};
};
t.prototype._buildClassGameInfo = function() {
var e, t, r, n, o, a, i, s;
if (b.gameInfo.gameMode === y.GameMode.Class) return {
score: this._getCurrentScore(),
lastHighScore: null !== (n = null === (r = null === (t = null === (e = this._pending) || void 0 === e ? void 0 : e.gameInfo) || void 0 === t ? void 0 : t.classGameInfo) || void 0 === r ? void 0 : r.lastHighScore) && void 0 !== n ? n : 0,
firstReviveScore: null !== (s = null === (i = null === (a = null === (o = this._pending) || void 0 === o ? void 0 : o.gameInfo) || void 0 === a ? void 0 : a.classGameInfo) || void 0 === i ? void 0 : i.firstReviveScore) && void 0 !== s ? s : -1
};
};
t.prototype._buildChapterGameInfo = function() {
var e, t, r, n, o, a;
if (b.gameInfo.gameMode === y.GameMode.Chapter) {
var i = storage.getItem("chapterCondition"), s = null !== (r = null == i ? void 0 : i.Way) && void 0 !== r ? r : 0, l = {
stage: Number(null !== (n = storage.getItem("chapterPeriodsIndex", 1)) && void 0 !== n ? n : 1),
chapterNum: Number(null !== (o = storage.getItem("chapterNum", 0)) && void 0 !== o ? o : 0),
way: s,
progress: this._chapterGameProgress()
};
if (0 === s) l.targetScore = null !== (a = null == i ? void 0 : i.RequiredScore) && void 0 !== a ? a : 0; else if (1 === s) {
var c = {};
if (null == i ? void 0 : i.RequiredCollections) try {
for (var d = u(i.RequiredCollections), f = d.next(); !f.done; f = d.next()) {
var m = f.value;
c[m.Key] = m.Value;
}
} catch (t) {
e = {
error: t
};
} finally {
try {
f && !f.done && (t = d.return) && t.call(d);
} finally {
if (e) throw e.error;
}
}
l.targetCollections = c;
}
return l;
}
};
t.prototype._chapterGameProgress = function() {
var e, t, r, n, o;
if (Number(null !== (r = storage.getItem("chapterNum", 0)) && void 0 !== r ? r : 0) <= 0) return 0;
var a = storage.getItem("chapterCondition"), i = null == a ? void 0 : a.Way;
if (0 === i) {
var s = storage.getItem("chapterScore", 0), l = storage.getItem("chapterCollectTotalScore", 0);
0 === l && (l = 1);
var c = s / l;
return Math.floor(100 * c) / 100;
}
if (1 === i) {
var d = storage.getItem("chapterCollectTotalCollectItems", {}), f = storage.getItem("chapterCollectRemainCollectItems", {}), m = 0, p = 0;
try {
for (var h = u(Object.keys(d)), g = h.next(); !g.done; g = h.next()) {
var v = +g.value;
p += null !== (n = f[v]) && void 0 !== n ? n : 0;
m += null !== (o = d[v]) && void 0 !== o ? o : 0;
}
} catch (t) {
e = {
error: t
};
} finally {
try {
g && !g.done && (t = h.return) && t.call(h);
} finally {
if (e) throw e.error;
}
}
p > m && (p = m);
c = 0 === m ? 1 : (m - p) / m;
return Math.floor(100 * c) / 100;
}
return 0;
};
t.prototype.getCurrentGameRoundData = function() {
var e, t, r, n = this._pending;
if (null == n ? void 0 : n.gameInfo) return {
rounds: null !== (e = n.gameInfo.rounds) && void 0 !== e ? e : [],
lastHighScore: null !== (r = null === (t = n.gameInfo.classGameInfo) || void 0 === t ? void 0 : t.lastHighScore) && void 0 !== r ? r : 0,
reviveShowCnt: storage.getItem("classReviveShowNum", 0),
currentScore: this._getCurrentScore()
};
};
Object.defineProperty(t.prototype, "_pending", {
get: function() {
return b.gameInfo.gameMode === y.GameMode.Class ? this._pendingClassGame : this._pendingChapterGame;
},
set: function(e) {
b.gameInfo.gameMode === y.GameMode.Class ? this._pendingClassGame = e : this._pendingChapterGame = e;
},
enumerable: !1,
configurable: !0
});
t.prototype._resetPending = function() {
b.gameInfo.gameMode === y.GameMode.Class ? this._pendingClassGame = null : this._pendingChapterGame = null;
O.ModelFeatureRoundsShardStore.clearAllRoundsShards(b.gameInfo.gameMode);
this._roundsShardFlushCounter = 0;
this._pendingShardRounds = "";
this._coldStartRoundSkipModes.delete(b.gameInfo.gameMode);
};
t.prototype._freezePending = function(e, t) {
void 0 === t && (t = !1);
if (t) {
var r = a(a({}, e), {
gameInfo: e.gameInfo ? a(a({}, e.gameInfo), {
rounds: void 0
}) : e.gameInfo
}), n = b.gameInfo.gameMode === y.GameMode.Class ? M.EModelFeaturePendingSource.PendingClassGameInfo : M.EModelFeaturePendingSource.PendingChapterGameInfo;
x.ModelFeaturePersistInfo.saveSingle(n, r);
}
};
Object.defineProperty(t.prototype, "_pendingClassGame", {
get: function() {
return this.getPending(M.EModelFeaturePendingSource.PendingClassGameInfo);
},
set: function(e) {
this.setPending(M.EModelFeaturePendingSource.PendingClassGameInfo, e);
},
enumerable: !1,
configurable: !0
});
Object.defineProperty(t.prototype, "_pendingChapterGame", {
get: function() {
return this.getPending(M.EModelFeaturePendingSource.PendingChapterGameInfo);
},
set: function(e) {
this.setPending(M.EModelFeaturePendingSource.PendingChapterGameInfo, e);
},
enumerable: !1,
configurable: !0
});
Object.defineProperty(t.prototype, "_pendingAdInterstitial", {
get: function() {
return this.getPending(M.EModelFeaturePendingSource.PendingAdInterstitial);
},
set: function(e) {
this.setPending(M.EModelFeaturePendingSource.PendingAdInterstitial, e);
},
enumerable: !1,
configurable: !0
});
Object.defineProperty(t.prototype, "_pendingAdReward", {
get: function() {
return this.getPending(M.EModelFeaturePendingSource.PendingAdReward);
},
set: function(e) {
this.setPending(M.EModelFeaturePendingSource.PendingAdReward, e);
},
enumerable: !1,
configurable: !0
});
Object.defineProperty(t.prototype, "_pendingAdBanner", {
get: function() {
return this.getPending(M.EModelFeaturePendingSource.PendingAdBanner);
},
set: function(e) {
this.setPending(M.EModelFeaturePendingSource.PendingAdBanner, e);
},
enumerable: !1,
configurable: !0
});
t.prototype.getRecordedRoundCount = function() {
var e, t, r, n, o, a = null !== (r = this.records[C.EModelFeatureSeriesSource.Game]) && void 0 !== r ? r : [], i = 0;
try {
for (var s = u(a), l = s.next(); !l.done; l = s.next()) i += null !== (o = null === (n = l.value.baseGameInfo) || void 0 === n ? void 0 : n.totalRound) && void 0 !== o ? o : 0;
} catch (t) {
e = {
error: t
};
} finally {
try {
l && !l.done && (t = s.return) && t.call(s);
} finally {
if (e) throw e.error;
}
}
return i;
};
t.prototype._isInBout = function() {
return !!this.isSeriesActive(C.EModelFeatureSeriesSource.Game) && this._pending && this._pending.gameStartTime > 0;
};
t.prototype._toFeatureGameMode = function() {
return b.gameInfo.gameMode === y.GameMode.Class ? R.ModelFeature.GameMode.Class : R.ModelFeature.GameMode.Chapter;
};
t.prototype._lastAlgoName = function() {
var e = f.algorithmName.algoActualName;
return Array.isArray(e) && e.length > 0 ? e[e.length - 1] : "";
};
t.prototype._buildPendingAdContext = function(e, t, r) {
void 0 === r && (r = !1);
return {
ts: Date.now(),
adType: e,
adUnitId: "",
networkName: "",
networkPlacement: "",
adEcpm: 0,
adCorridor: 0,
adCreateId: "",
watchDuration: 0,
gameCnt: t,
gameMode: this._toFeatureGameMode(),
isGameEnd: r
};
};
t.prototype._getCurrentScore = function() {
return storage.getItem(b.gameInfo.gameMode === y.GameMode.Chapter ? "chapterScore" : "classScore", 0);
};
t.prototype._readGlobalMaxScore = function() {
return b.gameInfo.gameMode !== y.GameMode.Class ? 0 : storage.getItem("classHighScore", 0);
};
t.prototype._getCollectAdType = function(e) {
return "interstitialAd" == e ? R.ModelFeature.AdType.Interstitial : "bannerAd" == e ? R.ModelFeature.AdType.Banner : "rewardAd" == e ? R.ModelFeature.AdType.Reward : null;
};
Object.defineProperty(t.prototype, "_curRound", {
get: function() {
return b.gameInfo.roundNum;
},
enumerable: !1,
configurable: !0
});
Object.defineProperty(t.prototype, "_currentGameNum", {
get: function() {
return b.gameInfo.gameNum;
},
enumerable: !1,
configurable: !0
});
Object.defineProperty(t.prototype, "_spendTime", {
get: function() {
return b.gameInfo.gameMode == y.GameMode.Class ? storage.getItem("classSpendTime", 0) : storage.getItem("chapterSpendTime", 0);
},
enumerable: !1,
configurable: !0
});
t.IOS_AD_MERGE_WINDOW_MS = 1e3;
t.ROUNDS_SHARD_FLUSH_INTERVAL = 4;
i([ j ], t.prototype, "onDotEvent", null);
i([ j ], t.prototype, "onGameStart", null);
i([ j ], t.prototype, "onNewBlockGenerateEnd", null);
i([ j ], t.prototype, "onGameEndFromStats", null);
i([ j ], t.prototype, "onAdShow", null);
return t;
}(T.ModelFeatureCollectorBase);
r.modelFeatureCollector = new A();
cc._RF.pop();
}, {
"../../../../../scripts/modules/advertisement/config/AdvertisementConfig": void 0,
"../../../../../scripts/modules/advertisement/vo/AdvertisementAdValueInfo": void 0,
"../../../../../scripts/modules/adxModel/type/AdxModelType": void 0,
"../../../../../scripts/modules/adxModel/vo/AdxModelReplaceAdCtrl": void 0,
"../../../../../scripts/modules/algorithm/vo/AlgorithmInfo": void 0,
"../../../../../scripts/modules/algorithm/vo/AlgorithmName": void 0,
"../../../../../scripts/modules/binary/vo/BinaryBoard": void 0,
"../../../../../scripts/modules/binary/vo/BinarySupport": void 0,
"../../../../../scripts/modules/blocksProducer/vo/BlocksProducerInfo": void 0,
"../../../../../scripts/modules/board/vo/BoardInfo": void 0,
"../../../../../scripts/modules/dataCollect/vo/DataCollectSummaryInfo": void 0,
"../../../../../scripts/modules/dataStatistics/vo/DataStatisticsInfo": void 0,
"../../../../../scripts/modules/game/type/GameType": void 0,
"../../../../../scripts/modules/game/vo/GameInfo": void 0,
"../../interface/ModelFeatureDotInterface": "ModelFeatureDotInterface",
"../../interface/ModelFeaturePendingSourceInterface": "ModelFeaturePendingSourceInterface",
"../../interface/ModelFeatureSeriesSourceInterface": "ModelFeatureSeriesSourceInterface",
"../../utils/ModelFeatureCollectRoundStats": "ModelFeatureCollectRoundStats",
"../proto/ModelFeatureData": "ModelFeatureData",
"../storage/ModelFeatureInterLoadEcpmStore": "ModelFeatureInterLoadEcpmStore",
"../storage/ModelFeaturePersistInfo": "ModelFeaturePersistInfo",
"../storage/ModelFeatureRoundsShardStore": "ModelFeatureRoundsShardStore",
"./ModelFeatureCollectorBase": "ModelFeatureCollectorBase"
} ],
ModelFeatureConfigInterface: [ function(e, t, r) {
"use strict";
cc._RF.push(t, "335e9qt84xLC5/yUjwg0qPe", "ModelFeatureConfigInterface");
Object.defineProperty(r, "__esModule", {
value: !0
});
cc._RF.pop();
}, {} ],
ModelFeatureCurrentGameCatalog: [ function(e, t, r) {
"use strict";
cc._RF.push(t, "90785RR5o9MmY21rpdBsNIH", "ModelFeatureCurrentGameCatalog");
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
};
Object.defineProperty(r, "__esModule", {
value: !0
});
r.ModelFeatureCurrentGameCatalog = void 0;
var i = e("../wiring/decorators/forCatalog"), s = e("../wiring/ModelFeatureCatalogBase"), l = e("../utils/ModelFeatureCollectRoundStats"), u = e("../../../../scripts/modules/game/vo/GameInfo"), c = e("../../../../scripts/modules/game/type/GameType"), d = function(e) {
o(t, e);
function t() {
var t = null !== e && e.apply(this, arguments) || this;
t.stats = new l.ModelFeatureCollectRoundStats();
return t;
}
t.prototype.cur_round_cnt = function() {
var e;
return null === (e = this.rounds()) || void 0 === e ? void 0 : e.length;
};
t.prototype.cur_max_multi_elim = function() {
var e = this.rounds();
return e ? this.stats.maxMultiElimTier(e) : void 0;
};
t.prototype.cur_clear_screen_cnt = function() {
var e = this.classData();
return e ? this.stats.sumClearScreenCnt(e.rounds) : void 0;
};
t.prototype.cur_game_time = function() {
var e = this.classData();
if (e) {
var t = this.math.sum(e.rounds, function(e) {
var t;
return null !== (t = e.spendTime) && void 0 !== t ? t : 0;
});
return Math.floor(t / 1e3);
}
};
t.prototype.cur_hard_round_rate = function() {
var e, t, r = this.classData();
if (r) return (null !== (t = null === (e = this.stats.buildAlgoInfoByNameSet(r.rounds).difficulty) || void 0 === e ? void 0 : e.roundCnt) && void 0 !== t ? t : 0) / r.rounds.length;
};
t.prototype.cur_is_break = function() {
var e = this.classData();
if (e) return e.currentScore > e.lastHighScore ? 1 : 0;
};
t.prototype.cur_matrix_complex_avg = function() {
var e = this.classData();
return e ? this.stats.avgInitWeight(e.rounds) : void 0;
};
t.prototype.cur_multi_elim_cnt = function() {
var e = this.classData();
return e ? this.stats.sumMultiEliminationCnt(e.rounds) : void 0;
};
t.prototype.cur_revive_show_cnt = function() {
var e;
return null === (e = this.classData()) || void 0 === e ? void 0 : e.reviveShowCnt;
};
t.prototype.cur_score = function() {
var e = this.classData();
return e ? e.currentScore : void 0;
};
t.prototype.cur_score_vs_his_max = function() {
var e = this.classData();
if (e && !(e.lastHighScore <= 0)) return e.currentScore / e.lastHighScore;
};
t.prototype.rounds = function() {
var e, t = null === (e = this.ctx.currentGameRoundData) || void 0 === e ? void 0 : e.rounds;
return t && t.length > 0 ? t : void 0;
};
t.prototype.classData = function() {
if (u.gameInfo.gameMode === c.GameMode.Class) {
var e = this.ctx.currentGameRoundData;
return e && e.rounds.length > 0 ? e : void 0;
}
};
return a([ i.modelFeatureCatalog ], t);
}(s.ModelFeatureCatalogBase);
r.ModelFeatureCurrentGameCatalog = d;
cc._RF.pop();
}, {
"../../../../scripts/modules/game/type/GameType": void 0,
"../../../../scripts/modules/game/vo/GameInfo": void 0,
"../utils/ModelFeatureCollectRoundStats": "ModelFeatureCollectRoundStats",
"../wiring/ModelFeatureCatalogBase": "ModelFeatureCatalogBase",
"../wiring/decorators/forCatalog": "forCatalog"
} ],
ModelFeatureCutoffResolver: [ function(e, t, r) {
"use strict";
cc._RF.push(t, "4b79d3O7ONNPIFqgyCw1SnT", "ModelFeatureCutoffResolver");
var n = this && this.__values || function(e) {
var t = "function" == typeof Symbol && Symbol.iterator, r = t && e[t], n = 0;
if (r) return r.call(e);
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
}, o = this && this.__read || function(e, t) {
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
}, a = this && this.__spread || function() {
for (var e = [], t = 0; t < arguments.length; t++) e = e.concat(o(arguments[t]));
return e;
};
Object.defineProperty(r, "__esModule", {
value: !0
});
r.computeCutoffs = void 0;
function i(e, t, r) {
var o, a, i = 0;
try {
for (var s = n(e), l = s.next(); !l.done; l = s.next()) {
var u = l.value;
i = Math.max(i, r(t, u));
}
} catch (e) {
o = {
error: e
};
} finally {
try {
l && !l.done && (a = s.return) && a.call(s);
} finally {
if (o) throw o.error;
}
}
return i;
}
r.computeCutoffs = function(e, t, r) {
var s, l, u, c, d, f, m, p, h, g, v, y, b, _, S = new Map();
try {
for (var I = n(t), w = I.next(); !w.done; w = I.next()) {
var M = w.value, C = new Map();
try {
for (var G = (u = void 0, n(Object.keys(M.fields))), R = G.next(); !R.done; R = G.next()) {
var x = R.value;
C.set(x, i(M.fields[x], x, r));
}
} catch (e) {
u = {
error: e
};
} finally {
try {
R && !R.done && (c = G.return) && c.call(G);
} finally {
if (u) throw u.error;
}
}
if (M.isUnaligned) S.set(M.propertyKey, C); else {
var O = Math.max.apply(Math, a([ 0 ], C.values())), F = new Map();
try {
for (var T = (d = void 0, n(C.keys())), N = T.next(); !N.done; N = T.next()) {
x = N.value;
F.set(x, O);
}
} catch (e) {
d = {
error: e
};
} finally {
try {
N && !N.done && (f = T.return) && f.call(T);
} finally {
if (d) throw d.error;
}
}
S.set(M.propertyKey, F);
}
}
} catch (e) {
s = {
error: e
};
} finally {
try {
w && !w.done && (l = I.return) && l.call(I);
} finally {
if (s) throw s.error;
}
}
if ("aligned" !== e) return S;
var E = 0;
try {
for (var j = n(S.values()), A = j.next(); !A.done; A = j.next()) {
var k = A.value;
try {
for (var P = (h = void 0, n(k.values())), L = P.next(); !L.done; L = P.next()) {
var B = L.value;
E = Math.max(E, B);
}
} catch (e) {
h = {
error: e
};
} finally {
try {
L && !L.done && (g = P.return) && g.call(P);
} finally {
if (h) throw h.error;
}
}
}
} catch (e) {
m = {
error: e
};
} finally {
try {
A && !A.done && (p = j.return) && p.call(j);
} finally {
if (m) throw m.error;
}
}
var D = new Map();
try {
for (var W = n(S), H = W.next(); !H.done; H = W.next()) {
var U = o(H.value, 2), V = U[0], z = (k = U[1], new Map());
try {
for (var J = (b = void 0, n(k.keys())), q = J.next(); !q.done; q = J.next()) {
x = q.value;
z.set(x, E);
}
} catch (e) {
b = {
error: e
};
} finally {
try {
q && !q.done && (_ = J.return) && _.call(J);
} finally {
if (b) throw b.error;
}
}
D.set(V, z);
}
} catch (e) {
v = {
error: e
};
} finally {
try {
H && !H.done && (y = W.return) && y.call(W);
} finally {
if (v) throw v.error;
}
}
return D;
};
cc._RF.pop();
}, {} ],
ModelFeatureDataCenter: [ function(e, t, r) {
"use strict";
cc._RF.push(t, "191c07oUR5Psqa0KobZHdyE", "ModelFeatureDataCenter");
Object.defineProperty(r, "__esModule", {
value: !0
});
r.modelFeatureDataCenter = void 0;
var n = e("../../../../scripts/modules/dataCollect/vo/DataCollectSummaryInfo"), o = e("./collector/ModelFeatureCollector"), a = e("../utils/ModelFeaturePerfLog"), i = function() {
function e() {
this._isDriver = !1;
}
e.prototype.driver = function() {
if (this._isDriver) a.ModelFeaturePerfLog.log("DataCenter", "driver 已执行过，跳过"); else {
var e = a.ModelFeaturePerfLog.now();
this._isDriver = !0;
o.modelFeatureCollector.loadPersistedData();
a.ModelFeaturePerfLog.log("DataCenter", "driver 完成 耗时 " + a.ModelFeaturePerfLog.ms(e) + "ms");
}
};
e.prototype.recordSessionInfo = function() {
o.modelFeatureCollector.onColdStart();
};
e.prototype.ensureHydrated = function() {
return o.modelFeatureCollector.ensureHydrated();
};
Object.defineProperty(e.prototype, "sourceState", {
get: function() {
return o.modelFeatureCollector.sourceState;
},
enumerable: !1,
configurable: !0
});
Object.defineProperty(e.prototype, "records", {
get: function() {
return o.modelFeatureCollector.records;
},
enumerable: !1,
configurable: !0
});
e.prototype.saveSourceState = function() {
o.modelFeatureCollector.saveSourceState();
};
e.prototype.addActiveFields = function(e) {
o.modelFeatureCollector.addActiveFields(e);
};
e.prototype.getSplitIndex = function(e) {
return o.modelFeatureCollector.getSplitIndex(e);
};
e.prototype.getRecordedRoundCount = function() {
return o.modelFeatureCollector.getRecordedRoundCount();
};
e.prototype.getCurrentGameRoundData = function() {
return o.modelFeatureCollector.getCurrentGameRoundData();
};
e.prototype.getSummary = function(e) {
return n.dataCollectSummaryInfo.getSummary(e);
};
e.prototype.isReady = function() {
return o.modelFeatureCollector.isReady();
};
return e;
}();
r.modelFeatureDataCenter = new i();
cc._RF.pop();
}, {
"../../../../scripts/modules/dataCollect/vo/DataCollectSummaryInfo": void 0,
"../utils/ModelFeaturePerfLog": "ModelFeaturePerfLog",
"./collector/ModelFeatureCollector": "ModelFeatureCollector"
} ],
ModelFeatureData: [ function(e, t) {
"use strict";
cc._RF.push(t, "73bc3ABS4VP+qGAptbkatiD", "ModelFeatureData");
var r = e("./pbMinimal"), n = r.Reader, o = r.Writer, a = r.util, i = r.roots.default || (r.roots.default = {});
i.ModelFeature = function() {
var e = {};
e.GameMode = function() {
var e = {}, t = Object.create(e);
t[e[1] = "Class"] = 1;
t[e[2] = "Chapter"] = 2;
return t;
}();
e.ChapterDiffType = function() {
var e = {}, t = Object.create(e);
t[e[0] = "NONE"] = 0;
t[e[1] = "SIMPLE"] = 1;
t[e[2] = "MEDIUM"] = 2;
t[e[3] = "DIFFICULT"] = 3;
t[e[4] = "NOVICE"] = 4;
t[e[5] = "SIMPLE_DIFFICULT"] = 5;
return t;
}();
e.GameAlgoInfo = function() {
function e(e) {
if (e) for (var t = Object.keys(e), r = 0; r < t.length; ++r) null != e[t[r]] && "__proto__" !== t[r] && (this[t[r]] = e[t[r]]);
}
e.prototype.spendTime = 0;
e.prototype.score = 0;
e.prototype.roundCnt = 0;
e.prototype.successRoundCnt = 0;
e.create = function(t) {
return new e(t);
};
e.encode = function(e, t, r) {
t || (t = o.create());
void 0 === r && (r = 0);
if (r > a.recursionLimit) throw Error("max depth exceeded");
null != e.spendTime && Object.hasOwnProperty.call(e, "spendTime") && t.uint32(9).double(e.spendTime);
null != e.score && Object.hasOwnProperty.call(e, "score") && t.uint32(17).double(e.score);
null != e.roundCnt && Object.hasOwnProperty.call(e, "roundCnt") && t.uint32(24).int32(e.roundCnt);
null != e.successRoundCnt && Object.hasOwnProperty.call(e, "successRoundCnt") && t.uint32(32).int32(e.successRoundCnt);
return t;
};
e.encodeDelimited = function(e, t) {
return this.encode(e, t && t.len ? t.fork() : t).ldelim();
};
e.decode = function(e, t, r, o) {
e instanceof n || (e = n.create(e));
void 0 === o && (o = 0);
if (o > n.recursionLimit) throw Error("maximum nesting depth exceeded");
for (var a = void 0 === t ? e.len : e.pos + t, s = new i.ModelFeature.GameAlgoInfo(); e.pos < a; ) {
var l = e.uint32();
if (l === r) break;
switch (l >>> 3) {
case 1:
s.spendTime = e.double();
break;

case 2:
s.score = e.double();
break;

case 3:
s.roundCnt = e.int32();
break;

case 4:
s.successRoundCnt = e.int32();
break;

default:
e.skipType(7 & l, o);
}
}
return s;
};
e.decodeDelimited = function(e) {
e instanceof n || (e = new n(e));
return this.decode(e, e.uint32());
};
e.verify = function(e, t) {
if ("object" != typeof e || null === e) return "object expected";
void 0 === t && (t = 0);
return t > a.recursionLimit ? "maximum nesting depth exceeded" : null != e.spendTime && Object.hasOwnProperty.call(e, "spendTime") && "number" != typeof e.spendTime ? "spendTime: number expected" : null != e.score && Object.hasOwnProperty.call(e, "score") && "number" != typeof e.score ? "score: number expected" : null != e.roundCnt && Object.hasOwnProperty.call(e, "roundCnt") && !a.isInteger(e.roundCnt) ? "roundCnt: integer expected" : null != e.successRoundCnt && Object.hasOwnProperty.call(e, "successRoundCnt") && !a.isInteger(e.successRoundCnt) ? "successRoundCnt: integer expected" : null;
};
e.fromObject = function(e, t) {
if (e instanceof i.ModelFeature.GameAlgoInfo) return e;
if (!a.isObject(e)) throw TypeError(".ModelFeature.GameAlgoInfo: object expected");
void 0 === t && (t = 0);
if (t > a.recursionLimit) throw Error("maximum nesting depth exceeded");
var r = new i.ModelFeature.GameAlgoInfo();
null != e.spendTime && (r.spendTime = Number(e.spendTime));
null != e.score && (r.score = Number(e.score));
null != e.roundCnt && (r.roundCnt = 0 | e.roundCnt);
null != e.successRoundCnt && (r.successRoundCnt = 0 | e.successRoundCnt);
return r;
};
e.toObject = function(e, t, r) {
t || (t = {});
void 0 === r && (r = 0);
if (r > a.recursionLimit) throw Error("max depth exceeded");
var n = {};
if (t.defaults) {
n.spendTime = 0;
n.score = 0;
n.roundCnt = 0;
n.successRoundCnt = 0;
}
null != e.spendTime && Object.hasOwnProperty.call(e, "spendTime") && (n.spendTime = t.json && !isFinite(e.spendTime) ? String(e.spendTime) : e.spendTime);
null != e.score && Object.hasOwnProperty.call(e, "score") && (n.score = t.json && !isFinite(e.score) ? String(e.score) : e.score);
null != e.roundCnt && Object.hasOwnProperty.call(e, "roundCnt") && (n.roundCnt = e.roundCnt);
null != e.successRoundCnt && Object.hasOwnProperty.call(e, "successRoundCnt") && (n.successRoundCnt = e.successRoundCnt);
return n;
};
e.prototype.toJSON = function() {
return this.constructor.toObject(this, r.util.toJSONOptions);
};
e.getTypeUrl = function(e) {
void 0 === e && (e = "type.googleapis.com");
return e + "/ModelFeature.GameAlgoInfo";
};
return e;
}();
e.AlgorithmSet = function() {
function e(e) {
if (e) for (var t = Object.keys(e), r = 0; r < t.length; ++r) null != e[t[r]] && "__proto__" !== t[r] && (this[t[r]] = e[t[r]]);
}
e.prototype.blank = null;
e.prototype.difficulty = null;
e.prototype.shangZeng = null;
e.prototype.cool = null;
e.create = function(t) {
return new e(t);
};
e.encode = function(e, t, r) {
t || (t = o.create());
void 0 === r && (r = 0);
if (r > a.recursionLimit) throw Error("max depth exceeded");
null != e.blank && Object.hasOwnProperty.call(e, "blank") && i.ModelFeature.GameAlgoInfo.encode(e.blank, t.uint32(10).fork(), r + 1).ldelim();
null != e.difficulty && Object.hasOwnProperty.call(e, "difficulty") && i.ModelFeature.GameAlgoInfo.encode(e.difficulty, t.uint32(18).fork(), r + 1).ldelim();
null != e.shangZeng && Object.hasOwnProperty.call(e, "shangZeng") && i.ModelFeature.GameAlgoInfo.encode(e.shangZeng, t.uint32(26).fork(), r + 1).ldelim();
null != e.cool && Object.hasOwnProperty.call(e, "cool") && i.ModelFeature.GameAlgoInfo.encode(e.cool, t.uint32(34).fork(), r + 1).ldelim();
return t;
};
e.encodeDelimited = function(e, t) {
return this.encode(e, t && t.len ? t.fork() : t).ldelim();
};
e.decode = function(e, t, r, o) {
e instanceof n || (e = n.create(e));
void 0 === o && (o = 0);
if (o > n.recursionLimit) throw Error("maximum nesting depth exceeded");
for (var a = void 0 === t ? e.len : e.pos + t, s = new i.ModelFeature.AlgorithmSet(); e.pos < a; ) {
var l = e.uint32();
if (l === r) break;
switch (l >>> 3) {
case 1:
s.blank = i.ModelFeature.GameAlgoInfo.decode(e, e.uint32(), void 0, o + 1);
break;

case 2:
s.difficulty = i.ModelFeature.GameAlgoInfo.decode(e, e.uint32(), void 0, o + 1);
break;

case 3:
s.shangZeng = i.ModelFeature.GameAlgoInfo.decode(e, e.uint32(), void 0, o + 1);
break;

case 4:
s.cool = i.ModelFeature.GameAlgoInfo.decode(e, e.uint32(), void 0, o + 1);
break;

default:
e.skipType(7 & l, o);
}
}
return s;
};
e.decodeDelimited = function(e) {
e instanceof n || (e = new n(e));
return this.decode(e, e.uint32());
};
e.verify = function(e, t) {
if ("object" != typeof e || null === e) return "object expected";
void 0 === t && (t = 0);
if (t > a.recursionLimit) return "maximum nesting depth exceeded";
if (null != e.blank && Object.hasOwnProperty.call(e, "blank") && (r = i.ModelFeature.GameAlgoInfo.verify(e.blank, t + 1))) return "blank." + r;
if (null != e.difficulty && Object.hasOwnProperty.call(e, "difficulty") && (r = i.ModelFeature.GameAlgoInfo.verify(e.difficulty, t + 1))) return "difficulty." + r;
if (null != e.shangZeng && Object.hasOwnProperty.call(e, "shangZeng") && (r = i.ModelFeature.GameAlgoInfo.verify(e.shangZeng, t + 1))) return "shangZeng." + r;
if (null != e.cool && Object.hasOwnProperty.call(e, "cool")) {
var r;
if (r = i.ModelFeature.GameAlgoInfo.verify(e.cool, t + 1)) return "cool." + r;
}
return null;
};
e.fromObject = function(e, t) {
if (e instanceof i.ModelFeature.AlgorithmSet) return e;
if (!a.isObject(e)) throw TypeError(".ModelFeature.AlgorithmSet: object expected");
void 0 === t && (t = 0);
if (t > a.recursionLimit) throw Error("maximum nesting depth exceeded");
var r = new i.ModelFeature.AlgorithmSet();
if (null != e.blank) {
if (!a.isObject(e.blank)) throw TypeError(".ModelFeature.AlgorithmSet.blank: object expected");
r.blank = i.ModelFeature.GameAlgoInfo.fromObject(e.blank, t + 1);
}
if (null != e.difficulty) {
if (!a.isObject(e.difficulty)) throw TypeError(".ModelFeature.AlgorithmSet.difficulty: object expected");
r.difficulty = i.ModelFeature.GameAlgoInfo.fromObject(e.difficulty, t + 1);
}
if (null != e.shangZeng) {
if (!a.isObject(e.shangZeng)) throw TypeError(".ModelFeature.AlgorithmSet.shangZeng: object expected");
r.shangZeng = i.ModelFeature.GameAlgoInfo.fromObject(e.shangZeng, t + 1);
}
if (null != e.cool) {
if (!a.isObject(e.cool)) throw TypeError(".ModelFeature.AlgorithmSet.cool: object expected");
r.cool = i.ModelFeature.GameAlgoInfo.fromObject(e.cool, t + 1);
}
return r;
};
e.toObject = function(e, t, r) {
t || (t = {});
void 0 === r && (r = 0);
if (r > a.recursionLimit) throw Error("max depth exceeded");
var n = {};
if (t.defaults) {
n.blank = null;
n.difficulty = null;
n.shangZeng = null;
n.cool = null;
}
null != e.blank && Object.hasOwnProperty.call(e, "blank") && (n.blank = i.ModelFeature.GameAlgoInfo.toObject(e.blank, t, r + 1));
null != e.difficulty && Object.hasOwnProperty.call(e, "difficulty") && (n.difficulty = i.ModelFeature.GameAlgoInfo.toObject(e.difficulty, t, r + 1));
null != e.shangZeng && Object.hasOwnProperty.call(e, "shangZeng") && (n.shangZeng = i.ModelFeature.GameAlgoInfo.toObject(e.shangZeng, t, r + 1));
null != e.cool && Object.hasOwnProperty.call(e, "cool") && (n.cool = i.ModelFeature.GameAlgoInfo.toObject(e.cool, t, r + 1));
return n;
};
e.prototype.toJSON = function() {
return this.constructor.toObject(this, r.util.toJSONOptions);
};
e.getTypeUrl = function(e) {
void 0 === e && (e = "type.googleapis.com");
return e + "/ModelFeature.AlgorithmSet";
};
return e;
}();
e.AlgorithmSetNew = function() {
function e(e) {
if (e) for (var t = Object.keys(e), r = 0; r < t.length; ++r) null != e[t[r]] && "__proto__" !== t[r] && (this[t[r]] = e[t[r]]);
}
e.prototype.other = null;
e.prototype.normalFill = null;
e.prototype.difficultyTrap = null;
e.prototype.weightControl = null;
e.prototype.coolBoost = null;
e.prototype.orderFill = null;
e.prototype.random = null;
e.create = function(t) {
return new e(t);
};
e.encode = function(e, t, r) {
t || (t = o.create());
void 0 === r && (r = 0);
if (r > a.recursionLimit) throw Error("max depth exceeded");
null != e.other && Object.hasOwnProperty.call(e, "other") && i.ModelFeature.GameAlgoInfo.encode(e.other, t.uint32(10).fork(), r + 1).ldelim();
null != e.normalFill && Object.hasOwnProperty.call(e, "normalFill") && i.ModelFeature.GameAlgoInfo.encode(e.normalFill, t.uint32(18).fork(), r + 1).ldelim();
null != e.difficultyTrap && Object.hasOwnProperty.call(e, "difficultyTrap") && i.ModelFeature.GameAlgoInfo.encode(e.difficultyTrap, t.uint32(26).fork(), r + 1).ldelim();
null != e.weightControl && Object.hasOwnProperty.call(e, "weightControl") && i.ModelFeature.GameAlgoInfo.encode(e.weightControl, t.uint32(34).fork(), r + 1).ldelim();
null != e.coolBoost && Object.hasOwnProperty.call(e, "coolBoost") && i.ModelFeature.GameAlgoInfo.encode(e.coolBoost, t.uint32(42).fork(), r + 1).ldelim();
null != e.orderFill && Object.hasOwnProperty.call(e, "orderFill") && i.ModelFeature.GameAlgoInfo.encode(e.orderFill, t.uint32(50).fork(), r + 1).ldelim();
null != e.random && Object.hasOwnProperty.call(e, "random") && i.ModelFeature.GameAlgoInfo.encode(e.random, t.uint32(58).fork(), r + 1).ldelim();
return t;
};
e.encodeDelimited = function(e, t) {
return this.encode(e, t && t.len ? t.fork() : t).ldelim();
};
e.decode = function(e, t, r, o) {
e instanceof n || (e = n.create(e));
void 0 === o && (o = 0);
if (o > n.recursionLimit) throw Error("maximum nesting depth exceeded");
for (var a = void 0 === t ? e.len : e.pos + t, s = new i.ModelFeature.AlgorithmSetNew(); e.pos < a; ) {
var l = e.uint32();
if (l === r) break;
switch (l >>> 3) {
case 1:
s.other = i.ModelFeature.GameAlgoInfo.decode(e, e.uint32(), void 0, o + 1);
break;

case 2:
s.normalFill = i.ModelFeature.GameAlgoInfo.decode(e, e.uint32(), void 0, o + 1);
break;

case 3:
s.difficultyTrap = i.ModelFeature.GameAlgoInfo.decode(e, e.uint32(), void 0, o + 1);
break;

case 4:
s.weightControl = i.ModelFeature.GameAlgoInfo.decode(e, e.uint32(), void 0, o + 1);
break;

case 5:
s.coolBoost = i.ModelFeature.GameAlgoInfo.decode(e, e.uint32(), void 0, o + 1);
break;

case 6:
s.orderFill = i.ModelFeature.GameAlgoInfo.decode(e, e.uint32(), void 0, o + 1);
break;

case 7:
s.random = i.ModelFeature.GameAlgoInfo.decode(e, e.uint32(), void 0, o + 1);
break;

default:
e.skipType(7 & l, o);
}
}
return s;
};
e.decodeDelimited = function(e) {
e instanceof n || (e = new n(e));
return this.decode(e, e.uint32());
};
e.verify = function(e, t) {
if ("object" != typeof e || null === e) return "object expected";
void 0 === t && (t = 0);
if (t > a.recursionLimit) return "maximum nesting depth exceeded";
if (null != e.other && Object.hasOwnProperty.call(e, "other") && (r = i.ModelFeature.GameAlgoInfo.verify(e.other, t + 1))) return "other." + r;
if (null != e.normalFill && Object.hasOwnProperty.call(e, "normalFill") && (r = i.ModelFeature.GameAlgoInfo.verify(e.normalFill, t + 1))) return "normalFill." + r;
if (null != e.difficultyTrap && Object.hasOwnProperty.call(e, "difficultyTrap") && (r = i.ModelFeature.GameAlgoInfo.verify(e.difficultyTrap, t + 1))) return "difficultyTrap." + r;
if (null != e.weightControl && Object.hasOwnProperty.call(e, "weightControl") && (r = i.ModelFeature.GameAlgoInfo.verify(e.weightControl, t + 1))) return "weightControl." + r;
if (null != e.coolBoost && Object.hasOwnProperty.call(e, "coolBoost") && (r = i.ModelFeature.GameAlgoInfo.verify(e.coolBoost, t + 1))) return "coolBoost." + r;
if (null != e.orderFill && Object.hasOwnProperty.call(e, "orderFill") && (r = i.ModelFeature.GameAlgoInfo.verify(e.orderFill, t + 1))) return "orderFill." + r;
if (null != e.random && Object.hasOwnProperty.call(e, "random")) {
var r;
if (r = i.ModelFeature.GameAlgoInfo.verify(e.random, t + 1)) return "random." + r;
}
return null;
};
e.fromObject = function(e, t) {
if (e instanceof i.ModelFeature.AlgorithmSetNew) return e;
if (!a.isObject(e)) throw TypeError(".ModelFeature.AlgorithmSetNew: object expected");
void 0 === t && (t = 0);
if (t > a.recursionLimit) throw Error("maximum nesting depth exceeded");
var r = new i.ModelFeature.AlgorithmSetNew();
if (null != e.other) {
if (!a.isObject(e.other)) throw TypeError(".ModelFeature.AlgorithmSetNew.other: object expected");
r.other = i.ModelFeature.GameAlgoInfo.fromObject(e.other, t + 1);
}
if (null != e.normalFill) {
if (!a.isObject(e.normalFill)) throw TypeError(".ModelFeature.AlgorithmSetNew.normalFill: object expected");
r.normalFill = i.ModelFeature.GameAlgoInfo.fromObject(e.normalFill, t + 1);
}
if (null != e.difficultyTrap) {
if (!a.isObject(e.difficultyTrap)) throw TypeError(".ModelFeature.AlgorithmSetNew.difficultyTrap: object expected");
r.difficultyTrap = i.ModelFeature.GameAlgoInfo.fromObject(e.difficultyTrap, t + 1);
}
if (null != e.weightControl) {
if (!a.isObject(e.weightControl)) throw TypeError(".ModelFeature.AlgorithmSetNew.weightControl: object expected");
r.weightControl = i.ModelFeature.GameAlgoInfo.fromObject(e.weightControl, t + 1);
}
if (null != e.coolBoost) {
if (!a.isObject(e.coolBoost)) throw TypeError(".ModelFeature.AlgorithmSetNew.coolBoost: object expected");
r.coolBoost = i.ModelFeature.GameAlgoInfo.fromObject(e.coolBoost, t + 1);
}
if (null != e.orderFill) {
if (!a.isObject(e.orderFill)) throw TypeError(".ModelFeature.AlgorithmSetNew.orderFill: object expected");
r.orderFill = i.ModelFeature.GameAlgoInfo.fromObject(e.orderFill, t + 1);
}
if (null != e.random) {
if (!a.isObject(e.random)) throw TypeError(".ModelFeature.AlgorithmSetNew.random: object expected");
r.random = i.ModelFeature.GameAlgoInfo.fromObject(e.random, t + 1);
}
return r;
};
e.toObject = function(e, t, r) {
t || (t = {});
void 0 === r && (r = 0);
if (r > a.recursionLimit) throw Error("max depth exceeded");
var n = {};
if (t.defaults) {
n.other = null;
n.normalFill = null;
n.difficultyTrap = null;
n.weightControl = null;
n.coolBoost = null;
n.orderFill = null;
n.random = null;
}
null != e.other && Object.hasOwnProperty.call(e, "other") && (n.other = i.ModelFeature.GameAlgoInfo.toObject(e.other, t, r + 1));
null != e.normalFill && Object.hasOwnProperty.call(e, "normalFill") && (n.normalFill = i.ModelFeature.GameAlgoInfo.toObject(e.normalFill, t, r + 1));
null != e.difficultyTrap && Object.hasOwnProperty.call(e, "difficultyTrap") && (n.difficultyTrap = i.ModelFeature.GameAlgoInfo.toObject(e.difficultyTrap, t, r + 1));
null != e.weightControl && Object.hasOwnProperty.call(e, "weightControl") && (n.weightControl = i.ModelFeature.GameAlgoInfo.toObject(e.weightControl, t, r + 1));
null != e.coolBoost && Object.hasOwnProperty.call(e, "coolBoost") && (n.coolBoost = i.ModelFeature.GameAlgoInfo.toObject(e.coolBoost, t, r + 1));
null != e.orderFill && Object.hasOwnProperty.call(e, "orderFill") && (n.orderFill = i.ModelFeature.GameAlgoInfo.toObject(e.orderFill, t, r + 1));
null != e.random && Object.hasOwnProperty.call(e, "random") && (n.random = i.ModelFeature.GameAlgoInfo.toObject(e.random, t, r + 1));
return n;
};
e.prototype.toJSON = function() {
return this.constructor.toObject(this, r.util.toJSONOptions);
};
e.getTypeUrl = function(e) {
void 0 === e && (e = "type.googleapis.com");
return e + "/ModelFeature.AlgorithmSetNew";
};
return e;
}();
e.EachRoundMeanInfo = function() {
function e(e) {
if (e) for (var t = Object.keys(e), r = 0; r < t.length; ++r) null != e[t[r]] && "__proto__" !== t[r] && (this[t[r]] = e[t[r]]);
}
e.prototype.putRateAvg = 0;
e.prototype.holesCntAvg = 0;
e.prototype.blocksCntAvg = 0;
e.prototype.contiguousEdgesAvg = 0;
e.prototype.contiguousRegionsAvg = 0;
e.prototype.convexCornersAvg = 0;
e.prototype.concaveCornersAvg = 0;
e.prototype.weightAvg = 0;
e.prototype.timeDiffInSecondsAvg = 0;
e.create = function(t) {
return new e(t);
};
e.encode = function(e, t, r) {
t || (t = o.create());
void 0 === r && (r = 0);
if (r > a.recursionLimit) throw Error("max depth exceeded");
null != e.putRateAvg && Object.hasOwnProperty.call(e, "putRateAvg") && t.uint32(9).double(e.putRateAvg);
null != e.holesCntAvg && Object.hasOwnProperty.call(e, "holesCntAvg") && t.uint32(17).double(e.holesCntAvg);
null != e.blocksCntAvg && Object.hasOwnProperty.call(e, "blocksCntAvg") && t.uint32(25).double(e.blocksCntAvg);
null != e.contiguousEdgesAvg && Object.hasOwnProperty.call(e, "contiguousEdgesAvg") && t.uint32(33).double(e.contiguousEdgesAvg);
null != e.contiguousRegionsAvg && Object.hasOwnProperty.call(e, "contiguousRegionsAvg") && t.uint32(41).double(e.contiguousRegionsAvg);
null != e.convexCornersAvg && Object.hasOwnProperty.call(e, "convexCornersAvg") && t.uint32(49).double(e.convexCornersAvg);
null != e.concaveCornersAvg && Object.hasOwnProperty.call(e, "concaveCornersAvg") && t.uint32(57).double(e.concaveCornersAvg);
null != e.weightAvg && Object.hasOwnProperty.call(e, "weightAvg") && t.uint32(65).double(e.weightAvg);
null != e.timeDiffInSecondsAvg && Object.hasOwnProperty.call(e, "timeDiffInSecondsAvg") && t.uint32(73).double(e.timeDiffInSecondsAvg);
return t;
};
e.encodeDelimited = function(e, t) {
return this.encode(e, t && t.len ? t.fork() : t).ldelim();
};
e.decode = function(e, t, r, o) {
e instanceof n || (e = n.create(e));
void 0 === o && (o = 0);
if (o > n.recursionLimit) throw Error("maximum nesting depth exceeded");
for (var a = void 0 === t ? e.len : e.pos + t, s = new i.ModelFeature.EachRoundMeanInfo(); e.pos < a; ) {
var l = e.uint32();
if (l === r) break;
switch (l >>> 3) {
case 1:
s.putRateAvg = e.double();
break;

case 2:
s.holesCntAvg = e.double();
break;

case 3:
s.blocksCntAvg = e.double();
break;

case 4:
s.contiguousEdgesAvg = e.double();
break;

case 5:
s.contiguousRegionsAvg = e.double();
break;

case 6:
s.convexCornersAvg = e.double();
break;

case 7:
s.concaveCornersAvg = e.double();
break;

case 8:
s.weightAvg = e.double();
break;

case 9:
s.timeDiffInSecondsAvg = e.double();
break;

default:
e.skipType(7 & l, o);
}
}
return s;
};
e.decodeDelimited = function(e) {
e instanceof n || (e = new n(e));
return this.decode(e, e.uint32());
};
e.verify = function(e, t) {
if ("object" != typeof e || null === e) return "object expected";
void 0 === t && (t = 0);
return t > a.recursionLimit ? "maximum nesting depth exceeded" : null != e.putRateAvg && Object.hasOwnProperty.call(e, "putRateAvg") && "number" != typeof e.putRateAvg ? "putRateAvg: number expected" : null != e.holesCntAvg && Object.hasOwnProperty.call(e, "holesCntAvg") && "number" != typeof e.holesCntAvg ? "holesCntAvg: number expected" : null != e.blocksCntAvg && Object.hasOwnProperty.call(e, "blocksCntAvg") && "number" != typeof e.blocksCntAvg ? "blocksCntAvg: number expected" : null != e.contiguousEdgesAvg && Object.hasOwnProperty.call(e, "contiguousEdgesAvg") && "number" != typeof e.contiguousEdgesAvg ? "contiguousEdgesAvg: number expected" : null != e.contiguousRegionsAvg && Object.hasOwnProperty.call(e, "contiguousRegionsAvg") && "number" != typeof e.contiguousRegionsAvg ? "contiguousRegionsAvg: number expected" : null != e.convexCornersAvg && Object.hasOwnProperty.call(e, "convexCornersAvg") && "number" != typeof e.convexCornersAvg ? "convexCornersAvg: number expected" : null != e.concaveCornersAvg && Object.hasOwnProperty.call(e, "concaveCornersAvg") && "number" != typeof e.concaveCornersAvg ? "concaveCornersAvg: number expected" : null != e.weightAvg && Object.hasOwnProperty.call(e, "weightAvg") && "number" != typeof e.weightAvg ? "weightAvg: number expected" : null != e.timeDiffInSecondsAvg && Object.hasOwnProperty.call(e, "timeDiffInSecondsAvg") && "number" != typeof e.timeDiffInSecondsAvg ? "timeDiffInSecondsAvg: number expected" : null;
};
e.fromObject = function(e, t) {
if (e instanceof i.ModelFeature.EachRoundMeanInfo) return e;
if (!a.isObject(e)) throw TypeError(".ModelFeature.EachRoundMeanInfo: object expected");
void 0 === t && (t = 0);
if (t > a.recursionLimit) throw Error("maximum nesting depth exceeded");
var r = new i.ModelFeature.EachRoundMeanInfo();
null != e.putRateAvg && (r.putRateAvg = Number(e.putRateAvg));
null != e.holesCntAvg && (r.holesCntAvg = Number(e.holesCntAvg));
null != e.blocksCntAvg && (r.blocksCntAvg = Number(e.blocksCntAvg));
null != e.contiguousEdgesAvg && (r.contiguousEdgesAvg = Number(e.contiguousEdgesAvg));
null != e.contiguousRegionsAvg && (r.contiguousRegionsAvg = Number(e.contiguousRegionsAvg));
null != e.convexCornersAvg && (r.convexCornersAvg = Number(e.convexCornersAvg));
null != e.concaveCornersAvg && (r.concaveCornersAvg = Number(e.concaveCornersAvg));
null != e.weightAvg && (r.weightAvg = Number(e.weightAvg));
null != e.timeDiffInSecondsAvg && (r.timeDiffInSecondsAvg = Number(e.timeDiffInSecondsAvg));
return r;
};
e.toObject = function(e, t, r) {
t || (t = {});
void 0 === r && (r = 0);
if (r > a.recursionLimit) throw Error("max depth exceeded");
var n = {};
if (t.defaults) {
n.putRateAvg = 0;
n.holesCntAvg = 0;
n.blocksCntAvg = 0;
n.contiguousEdgesAvg = 0;
n.contiguousRegionsAvg = 0;
n.convexCornersAvg = 0;
n.concaveCornersAvg = 0;
n.weightAvg = 0;
n.timeDiffInSecondsAvg = 0;
}
null != e.putRateAvg && Object.hasOwnProperty.call(e, "putRateAvg") && (n.putRateAvg = t.json && !isFinite(e.putRateAvg) ? String(e.putRateAvg) : e.putRateAvg);
null != e.holesCntAvg && Object.hasOwnProperty.call(e, "holesCntAvg") && (n.holesCntAvg = t.json && !isFinite(e.holesCntAvg) ? String(e.holesCntAvg) : e.holesCntAvg);
null != e.blocksCntAvg && Object.hasOwnProperty.call(e, "blocksCntAvg") && (n.blocksCntAvg = t.json && !isFinite(e.blocksCntAvg) ? String(e.blocksCntAvg) : e.blocksCntAvg);
null != e.contiguousEdgesAvg && Object.hasOwnProperty.call(e, "contiguousEdgesAvg") && (n.contiguousEdgesAvg = t.json && !isFinite(e.contiguousEdgesAvg) ? String(e.contiguousEdgesAvg) : e.contiguousEdgesAvg);
null != e.contiguousRegionsAvg && Object.hasOwnProperty.call(e, "contiguousRegionsAvg") && (n.contiguousRegionsAvg = t.json && !isFinite(e.contiguousRegionsAvg) ? String(e.contiguousRegionsAvg) : e.contiguousRegionsAvg);
null != e.convexCornersAvg && Object.hasOwnProperty.call(e, "convexCornersAvg") && (n.convexCornersAvg = t.json && !isFinite(e.convexCornersAvg) ? String(e.convexCornersAvg) : e.convexCornersAvg);
null != e.concaveCornersAvg && Object.hasOwnProperty.call(e, "concaveCornersAvg") && (n.concaveCornersAvg = t.json && !isFinite(e.concaveCornersAvg) ? String(e.concaveCornersAvg) : e.concaveCornersAvg);
null != e.weightAvg && Object.hasOwnProperty.call(e, "weightAvg") && (n.weightAvg = t.json && !isFinite(e.weightAvg) ? String(e.weightAvg) : e.weightAvg);
null != e.timeDiffInSecondsAvg && Object.hasOwnProperty.call(e, "timeDiffInSecondsAvg") && (n.timeDiffInSecondsAvg = t.json && !isFinite(e.timeDiffInSecondsAvg) ? String(e.timeDiffInSecondsAvg) : e.timeDiffInSecondsAvg);
return n;
};
e.prototype.toJSON = function() {
return this.constructor.toObject(this, r.util.toJSONOptions);
};
e.getTypeUrl = function(e) {
void 0 === e && (e = "type.googleapis.com");
return e + "/ModelFeature.EachRoundMeanInfo";
};
return e;
}();
e.GameInfoBase = function() {
function e(e) {
if (e) for (var t = Object.keys(e), r = 0; r < t.length; ++r) null != e[t[r]] && "__proto__" !== t[r] && (this[t[r]] = e[t[r]]);
}
e.prototype.gameMode = 1;
e.prototype.spendTime = 0;
e.prototype.maxCombo = 0;
e.prototype.comboCnt = 0;
e.prototype.clearScreenCnt = 0;
e.prototype.reviveShowCnt = 0;
e.prototype.reviveSuccessCnt = 0;
e.prototype.reviveClickCnt = 0;
e.prototype.lastAlgoType = 0;
e.prototype.lastAlgoName = "";
e.prototype.isReplay = !1;
e.prototype.totalRound = 0;
e.prototype.initWeight = 0;
e.prototype.oneEliminateCnt = 0;
e.prototype.twoEliminateCnt = 0;
e.prototype.threeEliminateCnt = 0;
e.prototype.fourEliminateCnt = 0;
e.prototype.fiveEliminateCnt = 0;
e.prototype.sixEliminateCnt = 0;
e.prototype.eachRoundSpendTimeStd = 0;
e.prototype.eachRoundSpendTimeAvg = 0;
e.prototype.hasLiveWay = !1;
e.prototype.algoInfoByNameSet = null;
e.prototype.algoInfoByNameSetNew = null;
e.prototype.firstDifficultySpendTime = 0;
e.prototype.highWeightCollRoundCnt = 0;
e.prototype.maxContinueCoolRoundLen = 0;
e.prototype.maxConsecutiveNonCoolRoundLen = 0;
e.prototype.eachRoundInitWeightAvg = 0;
e.prototype.firstReviveRound = 0;
e.prototype.gameNum = 0;
e.prototype.scoreGoldContent = 0;
e.prototype.quickPutCoolRoundCount = 0;
e.prototype.flowScore = 0;
e.prototype.eachRoundInitWeightStd = 0;
e.prototype.currentInsertCacheNum = 0;
e.prototype.currentInsertRevenue = 0;
e.prototype.eachRoundMean = null;
e.create = function(t) {
return new e(t);
};
e.encode = function(e, t, r) {
t || (t = o.create());
void 0 === r && (r = 0);
if (r > a.recursionLimit) throw Error("max depth exceeded");
null != e.gameMode && Object.hasOwnProperty.call(e, "gameMode") && t.uint32(16).int32(e.gameMode);
null != e.spendTime && Object.hasOwnProperty.call(e, "spendTime") && t.uint32(25).double(e.spendTime);
null != e.maxCombo && Object.hasOwnProperty.call(e, "maxCombo") && t.uint32(32).int32(e.maxCombo);
null != e.comboCnt && Object.hasOwnProperty.call(e, "comboCnt") && t.uint32(40).int32(e.comboCnt);
null != e.clearScreenCnt && Object.hasOwnProperty.call(e, "clearScreenCnt") && t.uint32(48).int32(e.clearScreenCnt);
null != e.reviveShowCnt && Object.hasOwnProperty.call(e, "reviveShowCnt") && t.uint32(56).int32(e.reviveShowCnt);
null != e.reviveSuccessCnt && Object.hasOwnProperty.call(e, "reviveSuccessCnt") && t.uint32(64).int32(e.reviveSuccessCnt);
null != e.reviveClickCnt && Object.hasOwnProperty.call(e, "reviveClickCnt") && t.uint32(72).int32(e.reviveClickCnt);
null != e.lastAlgoType && Object.hasOwnProperty.call(e, "lastAlgoType") && t.uint32(80).int32(e.lastAlgoType);
null != e.lastAlgoName && Object.hasOwnProperty.call(e, "lastAlgoName") && t.uint32(90).string(e.lastAlgoName);
null != e.isReplay && Object.hasOwnProperty.call(e, "isReplay") && t.uint32(96).bool(e.isReplay);
null != e.totalRound && Object.hasOwnProperty.call(e, "totalRound") && t.uint32(104).int32(e.totalRound);
null != e.initWeight && Object.hasOwnProperty.call(e, "initWeight") && t.uint32(113).double(e.initWeight);
null != e.oneEliminateCnt && Object.hasOwnProperty.call(e, "oneEliminateCnt") && t.uint32(120).int32(e.oneEliminateCnt);
null != e.twoEliminateCnt && Object.hasOwnProperty.call(e, "twoEliminateCnt") && t.uint32(128).int32(e.twoEliminateCnt);
null != e.threeEliminateCnt && Object.hasOwnProperty.call(e, "threeEliminateCnt") && t.uint32(136).int32(e.threeEliminateCnt);
null != e.fourEliminateCnt && Object.hasOwnProperty.call(e, "fourEliminateCnt") && t.uint32(144).int32(e.fourEliminateCnt);
null != e.fiveEliminateCnt && Object.hasOwnProperty.call(e, "fiveEliminateCnt") && t.uint32(152).int32(e.fiveEliminateCnt);
null != e.sixEliminateCnt && Object.hasOwnProperty.call(e, "sixEliminateCnt") && t.uint32(160).int32(e.sixEliminateCnt);
null != e.eachRoundSpendTimeStd && Object.hasOwnProperty.call(e, "eachRoundSpendTimeStd") && t.uint32(169).double(e.eachRoundSpendTimeStd);
null != e.eachRoundSpendTimeAvg && Object.hasOwnProperty.call(e, "eachRoundSpendTimeAvg") && t.uint32(177).double(e.eachRoundSpendTimeAvg);
null != e.hasLiveWay && Object.hasOwnProperty.call(e, "hasLiveWay") && t.uint32(184).bool(e.hasLiveWay);
null != e.algoInfoByNameSet && Object.hasOwnProperty.call(e, "algoInfoByNameSet") && i.ModelFeature.AlgorithmSet.encode(e.algoInfoByNameSet, t.uint32(194).fork(), r + 1).ldelim();
null != e.firstDifficultySpendTime && Object.hasOwnProperty.call(e, "firstDifficultySpendTime") && t.uint32(201).double(e.firstDifficultySpendTime);
null != e.highWeightCollRoundCnt && Object.hasOwnProperty.call(e, "highWeightCollRoundCnt") && t.uint32(208).int32(e.highWeightCollRoundCnt);
null != e.maxContinueCoolRoundLen && Object.hasOwnProperty.call(e, "maxContinueCoolRoundLen") && t.uint32(216).int32(e.maxContinueCoolRoundLen);
null != e.maxConsecutiveNonCoolRoundLen && Object.hasOwnProperty.call(e, "maxConsecutiveNonCoolRoundLen") && t.uint32(224).int32(e.maxConsecutiveNonCoolRoundLen);
null != e.eachRoundInitWeightAvg && Object.hasOwnProperty.call(e, "eachRoundInitWeightAvg") && t.uint32(233).double(e.eachRoundInitWeightAvg);
null != e.firstReviveRound && Object.hasOwnProperty.call(e, "firstReviveRound") && t.uint32(248).int32(e.firstReviveRound);
null != e.gameNum && Object.hasOwnProperty.call(e, "gameNum") && t.uint32(256).int32(e.gameNum);
null != e.scoreGoldContent && Object.hasOwnProperty.call(e, "scoreGoldContent") && t.uint32(265).double(e.scoreGoldContent);
null != e.quickPutCoolRoundCount && Object.hasOwnProperty.call(e, "quickPutCoolRoundCount") && t.uint32(272).int32(e.quickPutCoolRoundCount);
null != e.flowScore && Object.hasOwnProperty.call(e, "flowScore") && t.uint32(281).double(e.flowScore);
null != e.eachRoundInitWeightStd && Object.hasOwnProperty.call(e, "eachRoundInitWeightStd") && t.uint32(289).double(e.eachRoundInitWeightStd);
null != e.currentInsertCacheNum && Object.hasOwnProperty.call(e, "currentInsertCacheNum") && t.uint32(296).int32(e.currentInsertCacheNum);
null != e.currentInsertRevenue && Object.hasOwnProperty.call(e, "currentInsertRevenue") && t.uint32(305).double(e.currentInsertRevenue);
null != e.algoInfoByNameSetNew && Object.hasOwnProperty.call(e, "algoInfoByNameSetNew") && i.ModelFeature.AlgorithmSetNew.encode(e.algoInfoByNameSetNew, t.uint32(314).fork(), r + 1).ldelim();
null != e.eachRoundMean && Object.hasOwnProperty.call(e, "eachRoundMean") && i.ModelFeature.EachRoundMeanInfo.encode(e.eachRoundMean, t.uint32(322).fork(), r + 1).ldelim();
return t;
};
e.encodeDelimited = function(e, t) {
return this.encode(e, t && t.len ? t.fork() : t).ldelim();
};
e.decode = function(e, t, r, o) {
e instanceof n || (e = n.create(e));
void 0 === o && (o = 0);
if (o > n.recursionLimit) throw Error("maximum nesting depth exceeded");
for (var a = void 0 === t ? e.len : e.pos + t, s = new i.ModelFeature.GameInfoBase(); e.pos < a; ) {
var l = e.uint32();
if (l === r) break;
switch (l >>> 3) {
case 2:
s.gameMode = e.int32();
break;

case 3:
s.spendTime = e.double();
break;

case 4:
s.maxCombo = e.int32();
break;

case 5:
s.comboCnt = e.int32();
break;

case 6:
s.clearScreenCnt = e.int32();
break;

case 7:
s.reviveShowCnt = e.int32();
break;

case 8:
s.reviveSuccessCnt = e.int32();
break;

case 9:
s.reviveClickCnt = e.int32();
break;

case 10:
s.lastAlgoType = e.int32();
break;

case 11:
s.lastAlgoName = e.string();
break;

case 12:
s.isReplay = e.bool();
break;

case 13:
s.totalRound = e.int32();
break;

case 14:
s.initWeight = e.double();
break;

case 15:
s.oneEliminateCnt = e.int32();
break;

case 16:
s.twoEliminateCnt = e.int32();
break;

case 17:
s.threeEliminateCnt = e.int32();
break;

case 18:
s.fourEliminateCnt = e.int32();
break;

case 19:
s.fiveEliminateCnt = e.int32();
break;

case 20:
s.sixEliminateCnt = e.int32();
break;

case 21:
s.eachRoundSpendTimeStd = e.double();
break;

case 22:
s.eachRoundSpendTimeAvg = e.double();
break;

case 23:
s.hasLiveWay = e.bool();
break;

case 24:
s.algoInfoByNameSet = i.ModelFeature.AlgorithmSet.decode(e, e.uint32(), void 0, o + 1);
break;

case 39:
s.algoInfoByNameSetNew = i.ModelFeature.AlgorithmSetNew.decode(e, e.uint32(), void 0, o + 1);
break;

case 25:
s.firstDifficultySpendTime = e.double();
break;

case 26:
s.highWeightCollRoundCnt = e.int32();
break;

case 27:
s.maxContinueCoolRoundLen = e.int32();
break;

case 28:
s.maxConsecutiveNonCoolRoundLen = e.int32();
break;

case 29:
s.eachRoundInitWeightAvg = e.double();
break;

case 31:
s.firstReviveRound = e.int32();
break;

case 32:
s.gameNum = e.int32();
break;

case 33:
s.scoreGoldContent = e.double();
break;

case 34:
s.quickPutCoolRoundCount = e.int32();
break;

case 35:
s.flowScore = e.double();
break;

case 36:
s.eachRoundInitWeightStd = e.double();
break;

case 37:
s.currentInsertCacheNum = e.int32();
break;

case 38:
s.currentInsertRevenue = e.double();
break;

case 40:
s.eachRoundMean = i.ModelFeature.EachRoundMeanInfo.decode(e, e.uint32(), void 0, o + 1);
break;

default:
e.skipType(7 & l, o);
}
}
return s;
};
e.decodeDelimited = function(e) {
e instanceof n || (e = new n(e));
return this.decode(e, e.uint32());
};
e.verify = function(e, t) {
if ("object" != typeof e || null === e) return "object expected";
void 0 === t && (t = 0);
if (t > a.recursionLimit) return "maximum nesting depth exceeded";
if (null != e.gameMode && Object.hasOwnProperty.call(e, "gameMode")) switch (e.gameMode) {
default:
return "gameMode: enum value expected";

case 1:
case 2:
}
if (null != e.spendTime && Object.hasOwnProperty.call(e, "spendTime") && "number" != typeof e.spendTime) return "spendTime: number expected";
if (null != e.maxCombo && Object.hasOwnProperty.call(e, "maxCombo") && !a.isInteger(e.maxCombo)) return "maxCombo: integer expected";
if (null != e.comboCnt && Object.hasOwnProperty.call(e, "comboCnt") && !a.isInteger(e.comboCnt)) return "comboCnt: integer expected";
if (null != e.clearScreenCnt && Object.hasOwnProperty.call(e, "clearScreenCnt") && !a.isInteger(e.clearScreenCnt)) return "clearScreenCnt: integer expected";
if (null != e.reviveShowCnt && Object.hasOwnProperty.call(e, "reviveShowCnt") && !a.isInteger(e.reviveShowCnt)) return "reviveShowCnt: integer expected";
if (null != e.reviveSuccessCnt && Object.hasOwnProperty.call(e, "reviveSuccessCnt") && !a.isInteger(e.reviveSuccessCnt)) return "reviveSuccessCnt: integer expected";
if (null != e.reviveClickCnt && Object.hasOwnProperty.call(e, "reviveClickCnt") && !a.isInteger(e.reviveClickCnt)) return "reviveClickCnt: integer expected";
if (null != e.lastAlgoType && Object.hasOwnProperty.call(e, "lastAlgoType") && !a.isInteger(e.lastAlgoType)) return "lastAlgoType: integer expected";
if (null != e.lastAlgoName && Object.hasOwnProperty.call(e, "lastAlgoName") && !a.isString(e.lastAlgoName)) return "lastAlgoName: string expected";
if (null != e.isReplay && Object.hasOwnProperty.call(e, "isReplay") && "boolean" != typeof e.isReplay) return "isReplay: boolean expected";
if (null != e.totalRound && Object.hasOwnProperty.call(e, "totalRound") && !a.isInteger(e.totalRound)) return "totalRound: integer expected";
if (null != e.initWeight && Object.hasOwnProperty.call(e, "initWeight") && "number" != typeof e.initWeight) return "initWeight: number expected";
if (null != e.oneEliminateCnt && Object.hasOwnProperty.call(e, "oneEliminateCnt") && !a.isInteger(e.oneEliminateCnt)) return "oneEliminateCnt: integer expected";
if (null != e.twoEliminateCnt && Object.hasOwnProperty.call(e, "twoEliminateCnt") && !a.isInteger(e.twoEliminateCnt)) return "twoEliminateCnt: integer expected";
if (null != e.threeEliminateCnt && Object.hasOwnProperty.call(e, "threeEliminateCnt") && !a.isInteger(e.threeEliminateCnt)) return "threeEliminateCnt: integer expected";
if (null != e.fourEliminateCnt && Object.hasOwnProperty.call(e, "fourEliminateCnt") && !a.isInteger(e.fourEliminateCnt)) return "fourEliminateCnt: integer expected";
if (null != e.fiveEliminateCnt && Object.hasOwnProperty.call(e, "fiveEliminateCnt") && !a.isInteger(e.fiveEliminateCnt)) return "fiveEliminateCnt: integer expected";
if (null != e.sixEliminateCnt && Object.hasOwnProperty.call(e, "sixEliminateCnt") && !a.isInteger(e.sixEliminateCnt)) return "sixEliminateCnt: integer expected";
if (null != e.eachRoundSpendTimeStd && Object.hasOwnProperty.call(e, "eachRoundSpendTimeStd") && "number" != typeof e.eachRoundSpendTimeStd) return "eachRoundSpendTimeStd: number expected";
if (null != e.eachRoundSpendTimeAvg && Object.hasOwnProperty.call(e, "eachRoundSpendTimeAvg") && "number" != typeof e.eachRoundSpendTimeAvg) return "eachRoundSpendTimeAvg: number expected";
if (null != e.hasLiveWay && Object.hasOwnProperty.call(e, "hasLiveWay") && "boolean" != typeof e.hasLiveWay) return "hasLiveWay: boolean expected";
if (null != e.algoInfoByNameSet && Object.hasOwnProperty.call(e, "algoInfoByNameSet") && (r = i.ModelFeature.AlgorithmSet.verify(e.algoInfoByNameSet, t + 1))) return "algoInfoByNameSet." + r;
if (null != e.algoInfoByNameSetNew && Object.hasOwnProperty.call(e, "algoInfoByNameSetNew") && (r = i.ModelFeature.AlgorithmSetNew.verify(e.algoInfoByNameSetNew, t + 1))) return "algoInfoByNameSetNew." + r;
if (null != e.firstDifficultySpendTime && Object.hasOwnProperty.call(e, "firstDifficultySpendTime") && "number" != typeof e.firstDifficultySpendTime) return "firstDifficultySpendTime: number expected";
if (null != e.highWeightCollRoundCnt && Object.hasOwnProperty.call(e, "highWeightCollRoundCnt") && !a.isInteger(e.highWeightCollRoundCnt)) return "highWeightCollRoundCnt: integer expected";
if (null != e.maxContinueCoolRoundLen && Object.hasOwnProperty.call(e, "maxContinueCoolRoundLen") && !a.isInteger(e.maxContinueCoolRoundLen)) return "maxContinueCoolRoundLen: integer expected";
if (null != e.maxConsecutiveNonCoolRoundLen && Object.hasOwnProperty.call(e, "maxConsecutiveNonCoolRoundLen") && !a.isInteger(e.maxConsecutiveNonCoolRoundLen)) return "maxConsecutiveNonCoolRoundLen: integer expected";
if (null != e.eachRoundInitWeightAvg && Object.hasOwnProperty.call(e, "eachRoundInitWeightAvg") && "number" != typeof e.eachRoundInitWeightAvg) return "eachRoundInitWeightAvg: number expected";
if (null != e.firstReviveRound && Object.hasOwnProperty.call(e, "firstReviveRound") && !a.isInteger(e.firstReviveRound)) return "firstReviveRound: integer expected";
if (null != e.gameNum && Object.hasOwnProperty.call(e, "gameNum") && !a.isInteger(e.gameNum)) return "gameNum: integer expected";
if (null != e.scoreGoldContent && Object.hasOwnProperty.call(e, "scoreGoldContent") && "number" != typeof e.scoreGoldContent) return "scoreGoldContent: number expected";
if (null != e.quickPutCoolRoundCount && Object.hasOwnProperty.call(e, "quickPutCoolRoundCount") && !a.isInteger(e.quickPutCoolRoundCount)) return "quickPutCoolRoundCount: integer expected";
if (null != e.flowScore && Object.hasOwnProperty.call(e, "flowScore") && "number" != typeof e.flowScore) return "flowScore: number expected";
if (null != e.eachRoundInitWeightStd && Object.hasOwnProperty.call(e, "eachRoundInitWeightStd") && "number" != typeof e.eachRoundInitWeightStd) return "eachRoundInitWeightStd: number expected";
if (null != e.currentInsertCacheNum && Object.hasOwnProperty.call(e, "currentInsertCacheNum") && !a.isInteger(e.currentInsertCacheNum)) return "currentInsertCacheNum: integer expected";
if (null != e.currentInsertRevenue && Object.hasOwnProperty.call(e, "currentInsertRevenue") && "number" != typeof e.currentInsertRevenue) return "currentInsertRevenue: number expected";
if (null != e.eachRoundMean && Object.hasOwnProperty.call(e, "eachRoundMean")) {
var r;
if (r = i.ModelFeature.EachRoundMeanInfo.verify(e.eachRoundMean, t + 1)) return "eachRoundMean." + r;
}
return null;
};
e.fromObject = function(e, t) {
if (e instanceof i.ModelFeature.GameInfoBase) return e;
if (!a.isObject(e)) throw TypeError(".ModelFeature.GameInfoBase: object expected");
void 0 === t && (t = 0);
if (t > a.recursionLimit) throw Error("maximum nesting depth exceeded");
var r = new i.ModelFeature.GameInfoBase();
switch (e.gameMode) {
default:
if ("number" == typeof e.gameMode) {
r.gameMode = e.gameMode;
break;
}
break;

case "Class":
case 1:
r.gameMode = 1;
break;

case "Chapter":
case 2:
r.gameMode = 2;
}
null != e.spendTime && (r.spendTime = Number(e.spendTime));
null != e.maxCombo && (r.maxCombo = 0 | e.maxCombo);
null != e.comboCnt && (r.comboCnt = 0 | e.comboCnt);
null != e.clearScreenCnt && (r.clearScreenCnt = 0 | e.clearScreenCnt);
null != e.reviveShowCnt && (r.reviveShowCnt = 0 | e.reviveShowCnt);
null != e.reviveSuccessCnt && (r.reviveSuccessCnt = 0 | e.reviveSuccessCnt);
null != e.reviveClickCnt && (r.reviveClickCnt = 0 | e.reviveClickCnt);
null != e.lastAlgoType && (r.lastAlgoType = 0 | e.lastAlgoType);
null != e.lastAlgoName && (r.lastAlgoName = String(e.lastAlgoName));
null != e.isReplay && (r.isReplay = Boolean(e.isReplay));
null != e.totalRound && (r.totalRound = 0 | e.totalRound);
null != e.initWeight && (r.initWeight = Number(e.initWeight));
null != e.oneEliminateCnt && (r.oneEliminateCnt = 0 | e.oneEliminateCnt);
null != e.twoEliminateCnt && (r.twoEliminateCnt = 0 | e.twoEliminateCnt);
null != e.threeEliminateCnt && (r.threeEliminateCnt = 0 | e.threeEliminateCnt);
null != e.fourEliminateCnt && (r.fourEliminateCnt = 0 | e.fourEliminateCnt);
null != e.fiveEliminateCnt && (r.fiveEliminateCnt = 0 | e.fiveEliminateCnt);
null != e.sixEliminateCnt && (r.sixEliminateCnt = 0 | e.sixEliminateCnt);
null != e.eachRoundSpendTimeStd && (r.eachRoundSpendTimeStd = Number(e.eachRoundSpendTimeStd));
null != e.eachRoundSpendTimeAvg && (r.eachRoundSpendTimeAvg = Number(e.eachRoundSpendTimeAvg));
null != e.hasLiveWay && (r.hasLiveWay = Boolean(e.hasLiveWay));
if (null != e.algoInfoByNameSet) {
if (!a.isObject(e.algoInfoByNameSet)) throw TypeError(".ModelFeature.GameInfoBase.algoInfoByNameSet: object expected");
r.algoInfoByNameSet = i.ModelFeature.AlgorithmSet.fromObject(e.algoInfoByNameSet, t + 1);
}
if (null != e.algoInfoByNameSetNew) {
if (!a.isObject(e.algoInfoByNameSetNew)) throw TypeError(".ModelFeature.GameInfoBase.algoInfoByNameSetNew: object expected");
r.algoInfoByNameSetNew = i.ModelFeature.AlgorithmSetNew.fromObject(e.algoInfoByNameSetNew, t + 1);
}
null != e.firstDifficultySpendTime && (r.firstDifficultySpendTime = Number(e.firstDifficultySpendTime));
null != e.highWeightCollRoundCnt && (r.highWeightCollRoundCnt = 0 | e.highWeightCollRoundCnt);
null != e.maxContinueCoolRoundLen && (r.maxContinueCoolRoundLen = 0 | e.maxContinueCoolRoundLen);
null != e.maxConsecutiveNonCoolRoundLen && (r.maxConsecutiveNonCoolRoundLen = 0 | e.maxConsecutiveNonCoolRoundLen);
null != e.eachRoundInitWeightAvg && (r.eachRoundInitWeightAvg = Number(e.eachRoundInitWeightAvg));
null != e.firstReviveRound && (r.firstReviveRound = 0 | e.firstReviveRound);
null != e.gameNum && (r.gameNum = 0 | e.gameNum);
null != e.scoreGoldContent && (r.scoreGoldContent = Number(e.scoreGoldContent));
null != e.quickPutCoolRoundCount && (r.quickPutCoolRoundCount = 0 | e.quickPutCoolRoundCount);
null != e.flowScore && (r.flowScore = Number(e.flowScore));
null != e.eachRoundInitWeightStd && (r.eachRoundInitWeightStd = Number(e.eachRoundInitWeightStd));
null != e.currentInsertCacheNum && (r.currentInsertCacheNum = 0 | e.currentInsertCacheNum);
null != e.currentInsertRevenue && (r.currentInsertRevenue = Number(e.currentInsertRevenue));
if (null != e.eachRoundMean) {
if (!a.isObject(e.eachRoundMean)) throw TypeError(".ModelFeature.GameInfoBase.eachRoundMean: object expected");
r.eachRoundMean = i.ModelFeature.EachRoundMeanInfo.fromObject(e.eachRoundMean, t + 1);
}
return r;
};
e.toObject = function(e, t, r) {
t || (t = {});
void 0 === r && (r = 0);
if (r > a.recursionLimit) throw Error("max depth exceeded");
var n = {};
if (t.defaults) {
n.gameMode = t.enums === String ? "Class" : 1;
n.spendTime = 0;
n.maxCombo = 0;
n.comboCnt = 0;
n.clearScreenCnt = 0;
n.reviveShowCnt = 0;
n.reviveSuccessCnt = 0;
n.reviveClickCnt = 0;
n.lastAlgoType = 0;
n.lastAlgoName = "";
n.isReplay = !1;
n.totalRound = 0;
n.initWeight = 0;
n.oneEliminateCnt = 0;
n.twoEliminateCnt = 0;
n.threeEliminateCnt = 0;
n.fourEliminateCnt = 0;
n.fiveEliminateCnt = 0;
n.sixEliminateCnt = 0;
n.eachRoundSpendTimeStd = 0;
n.eachRoundSpendTimeAvg = 0;
n.hasLiveWay = !1;
n.algoInfoByNameSet = null;
n.firstDifficultySpendTime = 0;
n.highWeightCollRoundCnt = 0;
n.maxContinueCoolRoundLen = 0;
n.maxConsecutiveNonCoolRoundLen = 0;
n.eachRoundInitWeightAvg = 0;
n.firstReviveRound = 0;
n.gameNum = 0;
n.scoreGoldContent = 0;
n.quickPutCoolRoundCount = 0;
n.flowScore = 0;
n.eachRoundInitWeightStd = 0;
n.currentInsertCacheNum = 0;
n.currentInsertRevenue = 0;
n.algoInfoByNameSetNew = null;
n.eachRoundMean = null;
}
null != e.gameMode && Object.hasOwnProperty.call(e, "gameMode") && (n.gameMode = t.enums === String ? void 0 === i.ModelFeature.GameMode[e.gameMode] ? e.gameMode : i.ModelFeature.GameMode[e.gameMode] : e.gameMode);
null != e.spendTime && Object.hasOwnProperty.call(e, "spendTime") && (n.spendTime = t.json && !isFinite(e.spendTime) ? String(e.spendTime) : e.spendTime);
null != e.maxCombo && Object.hasOwnProperty.call(e, "maxCombo") && (n.maxCombo = e.maxCombo);
null != e.comboCnt && Object.hasOwnProperty.call(e, "comboCnt") && (n.comboCnt = e.comboCnt);
null != e.clearScreenCnt && Object.hasOwnProperty.call(e, "clearScreenCnt") && (n.clearScreenCnt = e.clearScreenCnt);
null != e.reviveShowCnt && Object.hasOwnProperty.call(e, "reviveShowCnt") && (n.reviveShowCnt = e.reviveShowCnt);
null != e.reviveSuccessCnt && Object.hasOwnProperty.call(e, "reviveSuccessCnt") && (n.reviveSuccessCnt = e.reviveSuccessCnt);
null != e.reviveClickCnt && Object.hasOwnProperty.call(e, "reviveClickCnt") && (n.reviveClickCnt = e.reviveClickCnt);
null != e.lastAlgoType && Object.hasOwnProperty.call(e, "lastAlgoType") && (n.lastAlgoType = e.lastAlgoType);
null != e.lastAlgoName && Object.hasOwnProperty.call(e, "lastAlgoName") && (n.lastAlgoName = e.lastAlgoName);
null != e.isReplay && Object.hasOwnProperty.call(e, "isReplay") && (n.isReplay = e.isReplay);
null != e.totalRound && Object.hasOwnProperty.call(e, "totalRound") && (n.totalRound = e.totalRound);
null != e.initWeight && Object.hasOwnProperty.call(e, "initWeight") && (n.initWeight = t.json && !isFinite(e.initWeight) ? String(e.initWeight) : e.initWeight);
null != e.oneEliminateCnt && Object.hasOwnProperty.call(e, "oneEliminateCnt") && (n.oneEliminateCnt = e.oneEliminateCnt);
null != e.twoEliminateCnt && Object.hasOwnProperty.call(e, "twoEliminateCnt") && (n.twoEliminateCnt = e.twoEliminateCnt);
null != e.threeEliminateCnt && Object.hasOwnProperty.call(e, "threeEliminateCnt") && (n.threeEliminateCnt = e.threeEliminateCnt);
null != e.fourEliminateCnt && Object.hasOwnProperty.call(e, "fourEliminateCnt") && (n.fourEliminateCnt = e.fourEliminateCnt);
null != e.fiveEliminateCnt && Object.hasOwnProperty.call(e, "fiveEliminateCnt") && (n.fiveEliminateCnt = e.fiveEliminateCnt);
null != e.sixEliminateCnt && Object.hasOwnProperty.call(e, "sixEliminateCnt") && (n.sixEliminateCnt = e.sixEliminateCnt);
null != e.eachRoundSpendTimeStd && Object.hasOwnProperty.call(e, "eachRoundSpendTimeStd") && (n.eachRoundSpendTimeStd = t.json && !isFinite(e.eachRoundSpendTimeStd) ? String(e.eachRoundSpendTimeStd) : e.eachRoundSpendTimeStd);
null != e.eachRoundSpendTimeAvg && Object.hasOwnProperty.call(e, "eachRoundSpendTimeAvg") && (n.eachRoundSpendTimeAvg = t.json && !isFinite(e.eachRoundSpendTimeAvg) ? String(e.eachRoundSpendTimeAvg) : e.eachRoundSpendTimeAvg);
null != e.hasLiveWay && Object.hasOwnProperty.call(e, "hasLiveWay") && (n.hasLiveWay = e.hasLiveWay);
null != e.algoInfoByNameSet && Object.hasOwnProperty.call(e, "algoInfoByNameSet") && (n.algoInfoByNameSet = i.ModelFeature.AlgorithmSet.toObject(e.algoInfoByNameSet, t, r + 1));
null != e.firstDifficultySpendTime && Object.hasOwnProperty.call(e, "firstDifficultySpendTime") && (n.firstDifficultySpendTime = t.json && !isFinite(e.firstDifficultySpendTime) ? String(e.firstDifficultySpendTime) : e.firstDifficultySpendTime);
null != e.highWeightCollRoundCnt && Object.hasOwnProperty.call(e, "highWeightCollRoundCnt") && (n.highWeightCollRoundCnt = e.highWeightCollRoundCnt);
null != e.maxContinueCoolRoundLen && Object.hasOwnProperty.call(e, "maxContinueCoolRoundLen") && (n.maxContinueCoolRoundLen = e.maxContinueCoolRoundLen);
null != e.maxConsecutiveNonCoolRoundLen && Object.hasOwnProperty.call(e, "maxConsecutiveNonCoolRoundLen") && (n.maxConsecutiveNonCoolRoundLen = e.maxConsecutiveNonCoolRoundLen);
null != e.eachRoundInitWeightAvg && Object.hasOwnProperty.call(e, "eachRoundInitWeightAvg") && (n.eachRoundInitWeightAvg = t.json && !isFinite(e.eachRoundInitWeightAvg) ? String(e.eachRoundInitWeightAvg) : e.eachRoundInitWeightAvg);
null != e.firstReviveRound && Object.hasOwnProperty.call(e, "firstReviveRound") && (n.firstReviveRound = e.firstReviveRound);
null != e.gameNum && Object.hasOwnProperty.call(e, "gameNum") && (n.gameNum = e.gameNum);
null != e.scoreGoldContent && Object.hasOwnProperty.call(e, "scoreGoldContent") && (n.scoreGoldContent = t.json && !isFinite(e.scoreGoldContent) ? String(e.scoreGoldContent) : e.scoreGoldContent);
null != e.quickPutCoolRoundCount && Object.hasOwnProperty.call(e, "quickPutCoolRoundCount") && (n.quickPutCoolRoundCount = e.quickPutCoolRoundCount);
null != e.flowScore && Object.hasOwnProperty.call(e, "flowScore") && (n.flowScore = t.json && !isFinite(e.flowScore) ? String(e.flowScore) : e.flowScore);
null != e.eachRoundInitWeightStd && Object.hasOwnProperty.call(e, "eachRoundInitWeightStd") && (n.eachRoundInitWeightStd = t.json && !isFinite(e.eachRoundInitWeightStd) ? String(e.eachRoundInitWeightStd) : e.eachRoundInitWeightStd);
null != e.currentInsertCacheNum && Object.hasOwnProperty.call(e, "currentInsertCacheNum") && (n.currentInsertCacheNum = e.currentInsertCacheNum);
null != e.currentInsertRevenue && Object.hasOwnProperty.call(e, "currentInsertRevenue") && (n.currentInsertRevenue = t.json && !isFinite(e.currentInsertRevenue) ? String(e.currentInsertRevenue) : e.currentInsertRevenue);
null != e.algoInfoByNameSetNew && Object.hasOwnProperty.call(e, "algoInfoByNameSetNew") && (n.algoInfoByNameSetNew = i.ModelFeature.AlgorithmSetNew.toObject(e.algoInfoByNameSetNew, t, r + 1));
null != e.eachRoundMean && Object.hasOwnProperty.call(e, "eachRoundMean") && (n.eachRoundMean = i.ModelFeature.EachRoundMeanInfo.toObject(e.eachRoundMean, t, r + 1));
return n;
};
e.prototype.toJSON = function() {
return this.constructor.toObject(this, r.util.toJSONOptions);
};
e.getTypeUrl = function(e) {
void 0 === e && (e = "type.googleapis.com");
return e + "/ModelFeature.GameInfoBase";
};
return e;
}();
e.ClassGameInfo = function() {
function e(e) {
if (e) for (var t = Object.keys(e), r = 0; r < t.length; ++r) null != e[t[r]] && "__proto__" !== t[r] && (this[t[r]] = e[t[r]]);
}
e.prototype.score = 0;
e.prototype.lastHighScore = 0;
e.prototype.firstReviveScore = 0;
e.create = function(t) {
return new e(t);
};
e.encode = function(e, t, r) {
t || (t = o.create());
void 0 === r && (r = 0);
if (r > a.recursionLimit) throw Error("max depth exceeded");
null != e.score && Object.hasOwnProperty.call(e, "score") && t.uint32(8).int32(e.score);
null != e.lastHighScore && Object.hasOwnProperty.call(e, "lastHighScore") && t.uint32(16).int32(e.lastHighScore);
null != e.firstReviveScore && Object.hasOwnProperty.call(e, "firstReviveScore") && t.uint32(240).int32(e.firstReviveScore);
return t;
};
e.encodeDelimited = function(e, t) {
return this.encode(e, t && t.len ? t.fork() : t).ldelim();
};
e.decode = function(e, t, r, o) {
e instanceof n || (e = n.create(e));
void 0 === o && (o = 0);
if (o > n.recursionLimit) throw Error("maximum nesting depth exceeded");
for (var a = void 0 === t ? e.len : e.pos + t, s = new i.ModelFeature.ClassGameInfo(); e.pos < a; ) {
var l = e.uint32();
if (l === r) break;
switch (l >>> 3) {
case 1:
s.score = e.int32();
break;

case 2:
s.lastHighScore = e.int32();
break;

case 30:
s.firstReviveScore = e.int32();
break;

default:
e.skipType(7 & l, o);
}
}
return s;
};
e.decodeDelimited = function(e) {
e instanceof n || (e = new n(e));
return this.decode(e, e.uint32());
};
e.verify = function(e, t) {
if ("object" != typeof e || null === e) return "object expected";
void 0 === t && (t = 0);
return t > a.recursionLimit ? "maximum nesting depth exceeded" : null != e.score && Object.hasOwnProperty.call(e, "score") && !a.isInteger(e.score) ? "score: integer expected" : null != e.lastHighScore && Object.hasOwnProperty.call(e, "lastHighScore") && !a.isInteger(e.lastHighScore) ? "lastHighScore: integer expected" : null != e.firstReviveScore && Object.hasOwnProperty.call(e, "firstReviveScore") && !a.isInteger(e.firstReviveScore) ? "firstReviveScore: integer expected" : null;
};
e.fromObject = function(e, t) {
if (e instanceof i.ModelFeature.ClassGameInfo) return e;
if (!a.isObject(e)) throw TypeError(".ModelFeature.ClassGameInfo: object expected");
void 0 === t && (t = 0);
if (t > a.recursionLimit) throw Error("maximum nesting depth exceeded");
var r = new i.ModelFeature.ClassGameInfo();
null != e.score && (r.score = 0 | e.score);
null != e.lastHighScore && (r.lastHighScore = 0 | e.lastHighScore);
null != e.firstReviveScore && (r.firstReviveScore = 0 | e.firstReviveScore);
return r;
};
e.toObject = function(e, t, r) {
t || (t = {});
void 0 === r && (r = 0);
if (r > a.recursionLimit) throw Error("max depth exceeded");
var n = {};
if (t.defaults) {
n.score = 0;
n.lastHighScore = 0;
n.firstReviveScore = 0;
}
null != e.score && Object.hasOwnProperty.call(e, "score") && (n.score = e.score);
null != e.lastHighScore && Object.hasOwnProperty.call(e, "lastHighScore") && (n.lastHighScore = e.lastHighScore);
null != e.firstReviveScore && Object.hasOwnProperty.call(e, "firstReviveScore") && (n.firstReviveScore = e.firstReviveScore);
return n;
};
e.prototype.toJSON = function() {
return this.constructor.toObject(this, r.util.toJSONOptions);
};
e.getTypeUrl = function(e) {
void 0 === e && (e = "type.googleapis.com");
return e + "/ModelFeature.ClassGameInfo";
};
return e;
}();
e.ChapterGameInfo = function() {
function e(e) {
this.targetCollections = {};
if (e) for (var t = Object.keys(e), r = 0; r < t.length; ++r) null != e[t[r]] && "__proto__" !== t[r] && (this[t[r]] = e[t[r]]);
}
e.prototype.stage = 0;
e.prototype.chapterNum = 0;
e.prototype.targetScore = 0;
e.prototype.targetCollections = a.emptyObject;
e.prototype.progress = 0;
e.prototype.way = 0;
e.create = function(t) {
return new e(t);
};
e.encode = function(e, t, r) {
t || (t = o.create());
void 0 === r && (r = 0);
if (r > a.recursionLimit) throw Error("max depth exceeded");
null != e.stage && Object.hasOwnProperty.call(e, "stage") && t.uint32(8).int32(e.stage);
null != e.chapterNum && Object.hasOwnProperty.call(e, "chapterNum") && t.uint32(16).int32(e.chapterNum);
null != e.targetScore && Object.hasOwnProperty.call(e, "targetScore") && t.uint32(24).int32(e.targetScore);
if (null != e.targetCollections && Object.hasOwnProperty.call(e, "targetCollections")) for (var n = Object.keys(e.targetCollections), i = 0; i < n.length; ++i) t.uint32(34).fork().uint32(8).int32(n[i]).uint32(16).int32(e.targetCollections[n[i]]).ldelim();
null != e.progress && Object.hasOwnProperty.call(e, "progress") && t.uint32(41).double(e.progress);
null != e.way && Object.hasOwnProperty.call(e, "way") && t.uint32(48).int32(e.way);
return t;
};
e.encodeDelimited = function(e, t) {
return this.encode(e, t && t.len ? t.fork() : t).ldelim();
};
e.decode = function(e, t, r, o) {
e instanceof n || (e = n.create(e));
void 0 === o && (o = 0);
if (o > n.recursionLimit) throw Error("maximum nesting depth exceeded");
for (var s, l, u = void 0 === t ? e.len : e.pos + t, c = new i.ModelFeature.ChapterGameInfo(); e.pos < u; ) {
var d = e.uint32();
if (d === r) break;
switch (d >>> 3) {
case 1:
c.stage = e.int32();
break;

case 2:
c.chapterNum = e.int32();
break;

case 3:
c.targetScore = e.int32();
break;

case 4:
c.targetCollections === a.emptyObject && (c.targetCollections = {});
var f = e.uint32() + e.pos;
s = 0;
l = 0;
for (;e.pos < f; ) {
var m = e.uint32();
switch (m >>> 3) {
case 1:
s = e.int32();
break;

case 2:
l = e.int32();
break;

default:
e.skipType(7 & m, o);
}
}
c.targetCollections[s] = l;
break;

case 5:
c.progress = e.double();
break;

case 6:
c.way = e.int32();
break;

default:
e.skipType(7 & d, o);
}
}
return c;
};
e.decodeDelimited = function(e) {
e instanceof n || (e = new n(e));
return this.decode(e, e.uint32());
};
e.verify = function(e, t) {
if ("object" != typeof e || null === e) return "object expected";
void 0 === t && (t = 0);
if (t > a.recursionLimit) return "maximum nesting depth exceeded";
if (null != e.stage && Object.hasOwnProperty.call(e, "stage") && !a.isInteger(e.stage)) return "stage: integer expected";
if (null != e.chapterNum && Object.hasOwnProperty.call(e, "chapterNum") && !a.isInteger(e.chapterNum)) return "chapterNum: integer expected";
if (null != e.targetScore && Object.hasOwnProperty.call(e, "targetScore") && !a.isInteger(e.targetScore)) return "targetScore: integer expected";
if (null != e.targetCollections && Object.hasOwnProperty.call(e, "targetCollections")) {
if (!a.isObject(e.targetCollections)) return "targetCollections: object expected";
for (var r = Object.keys(e.targetCollections), n = 0; n < r.length; ++n) {
if (!a.key32Re.test(r[n])) return "targetCollections: integer key{k:int32} expected";
if (!a.isInteger(e.targetCollections[r[n]])) return "targetCollections: integer{k:int32} expected";
}
}
return null != e.progress && Object.hasOwnProperty.call(e, "progress") && "number" != typeof e.progress ? "progress: number expected" : null != e.way && Object.hasOwnProperty.call(e, "way") && !a.isInteger(e.way) ? "way: integer expected" : null;
};
e.fromObject = function(e, t) {
if (e instanceof i.ModelFeature.ChapterGameInfo) return e;
if (!a.isObject(e)) throw TypeError(".ModelFeature.ChapterGameInfo: object expected");
void 0 === t && (t = 0);
if (t > a.recursionLimit) throw Error("maximum nesting depth exceeded");
var r = new i.ModelFeature.ChapterGameInfo();
null != e.stage && (r.stage = 0 | e.stage);
null != e.chapterNum && (r.chapterNum = 0 | e.chapterNum);
null != e.targetScore && (r.targetScore = 0 | e.targetScore);
if (e.targetCollections) {
if (!a.isObject(e.targetCollections)) throw TypeError(".ModelFeature.ChapterGameInfo.targetCollections: object expected");
r.targetCollections = {};
for (var n = Object.keys(e.targetCollections), o = 0; o < n.length; ++o) {
"__proto__" === n[o] && a.makeProp(r.targetCollections, n[o]);
r.targetCollections[n[o]] = 0 | e.targetCollections[n[o]];
}
}
null != e.progress && (r.progress = Number(e.progress));
null != e.way && (r.way = 0 | e.way);
return r;
};
e.toObject = function(e, t, r) {
t || (t = {});
void 0 === r && (r = 0);
if (r > a.recursionLimit) throw Error("max depth exceeded");
var n, o = {};
(t.objects || t.defaults) && (o.targetCollections = {});
if (t.defaults) {
o.stage = 0;
o.chapterNum = 0;
o.targetScore = 0;
o.progress = 0;
o.way = 0;
}
null != e.stage && Object.hasOwnProperty.call(e, "stage") && (o.stage = e.stage);
null != e.chapterNum && Object.hasOwnProperty.call(e, "chapterNum") && (o.chapterNum = e.chapterNum);
null != e.targetScore && Object.hasOwnProperty.call(e, "targetScore") && (o.targetScore = e.targetScore);
if (e.targetCollections && (n = Object.keys(e.targetCollections)).length) {
o.targetCollections = {};
for (var i = 0; i < n.length; ++i) {
"__proto__" === n[i] && a.makeProp(o.targetCollections, n[i]);
o.targetCollections[n[i]] = e.targetCollections[n[i]];
}
}
null != e.progress && Object.hasOwnProperty.call(e, "progress") && (o.progress = t.json && !isFinite(e.progress) ? String(e.progress) : e.progress);
null != e.way && Object.hasOwnProperty.call(e, "way") && (o.way = e.way);
return o;
};
e.prototype.toJSON = function() {
return this.constructor.toObject(this, r.util.toJSONOptions);
};
e.getTypeUrl = function(e) {
void 0 === e && (e = "type.googleapis.com");
return e + "/ModelFeature.ChapterGameInfo";
};
return e;
}();
e.AdType = function() {
var e = {}, t = Object.create(e);
t[e[-1] = "Error"] = -1;
t[e[0] = "Interstitial"] = 0;
t[e[1] = "Reward"] = 1;
t[e[2] = "Banner"] = 2;
return t;
}();
e.AdStatus = function() {
var e = {}, t = Object.create(e);
t[e[0] = "Fail"] = 0;
t[e[1] = "Success"] = 1;
return t;
}();
e.AdInfo = function() {
function e(e) {
if (e) for (var t = Object.keys(e), r = 0; r < t.length; ++r) null != e[t[r]] && "__proto__" !== t[r] && (this[t[r]] = e[t[r]]);
}
e.prototype.ts = a.Long ? a.Long.fromBits(0, 0, !1) : 0;
e.prototype.adType = -1;
e.prototype.adUnitId = "";
e.prototype.networkName = "";
e.prototype.networkPlacement = "";
e.prototype.adEcpm = 0;
e.prototype.adCorridor = 0;
e.prototype.adCreateId = "";
e.prototype.watchDuration = 0;
e.prototype.gameCnt = 0;
e.prototype.status = 0;
e.prototype.gameMode = 1;
e.prototype.isGameEnd = !1;
e.create = function(t) {
return new e(t);
};
e.encode = function(e, t, r) {
t || (t = o.create());
void 0 === r && (r = 0);
if (r > a.recursionLimit) throw Error("max depth exceeded");
null != e.ts && Object.hasOwnProperty.call(e, "ts") && t.uint32(8).int64(e.ts);
null != e.adType && Object.hasOwnProperty.call(e, "adType") && t.uint32(16).int32(e.adType);
null != e.adUnitId && Object.hasOwnProperty.call(e, "adUnitId") && t.uint32(26).string(e.adUnitId);
null != e.networkName && Object.hasOwnProperty.call(e, "networkName") && t.uint32(34).string(e.networkName);
null != e.networkPlacement && Object.hasOwnProperty.call(e, "networkPlacement") && t.uint32(42).string(e.networkPlacement);
null != e.adEcpm && Object.hasOwnProperty.call(e, "adEcpm") && t.uint32(49).double(e.adEcpm);
null != e.adCorridor && Object.hasOwnProperty.call(e, "adCorridor") && t.uint32(57).double(e.adCorridor);
null != e.adCreateId && Object.hasOwnProperty.call(e, "adCreateId") && t.uint32(66).string(e.adCreateId);
null != e.watchDuration && Object.hasOwnProperty.call(e, "watchDuration") && t.uint32(73).double(e.watchDuration);
null != e.gameCnt && Object.hasOwnProperty.call(e, "gameCnt") && t.uint32(80).int32(e.gameCnt);
null != e.status && Object.hasOwnProperty.call(e, "status") && t.uint32(88).int32(e.status);
null != e.gameMode && Object.hasOwnProperty.call(e, "gameMode") && t.uint32(96).int32(e.gameMode);
null != e.isGameEnd && Object.hasOwnProperty.call(e, "isGameEnd") && t.uint32(104).bool(e.isGameEnd);
return t;
};
e.encodeDelimited = function(e, t) {
return this.encode(e, t && t.len ? t.fork() : t).ldelim();
};
e.decode = function(e, t, r, o) {
e instanceof n || (e = n.create(e));
void 0 === o && (o = 0);
if (o > n.recursionLimit) throw Error("maximum nesting depth exceeded");
for (var a = void 0 === t ? e.len : e.pos + t, s = new i.ModelFeature.AdInfo(); e.pos < a; ) {
var l = e.uint32();
if (l === r) break;
switch (l >>> 3) {
case 1:
s.ts = e.int64();
break;

case 2:
s.adType = e.int32();
break;

case 3:
s.adUnitId = e.string();
break;

case 4:
s.networkName = e.string();
break;

case 5:
s.networkPlacement = e.string();
break;

case 6:
s.adEcpm = e.double();
break;

case 7:
s.adCorridor = e.double();
break;

case 8:
s.adCreateId = e.string();
break;

case 9:
s.watchDuration = e.double();
break;

case 10:
s.gameCnt = e.int32();
break;

case 11:
s.status = e.int32();
break;

case 12:
s.gameMode = e.int32();
break;

case 13:
s.isGameEnd = e.bool();
break;

default:
e.skipType(7 & l, o);
}
}
return s;
};
e.decodeDelimited = function(e) {
e instanceof n || (e = new n(e));
return this.decode(e, e.uint32());
};
e.verify = function(e, t) {
if ("object" != typeof e || null === e) return "object expected";
void 0 === t && (t = 0);
if (t > a.recursionLimit) return "maximum nesting depth exceeded";
if (null != e.ts && Object.hasOwnProperty.call(e, "ts") && !(a.isInteger(e.ts) || e.ts && a.isInteger(e.ts.low) && a.isInteger(e.ts.high))) return "ts: integer|Long expected";
if (null != e.adType && Object.hasOwnProperty.call(e, "adType")) switch (e.adType) {
default:
return "adType: enum value expected";

case -1:
case 0:
case 1:
case 2:
}
if (null != e.adUnitId && Object.hasOwnProperty.call(e, "adUnitId") && !a.isString(e.adUnitId)) return "adUnitId: string expected";
if (null != e.networkName && Object.hasOwnProperty.call(e, "networkName") && !a.isString(e.networkName)) return "networkName: string expected";
if (null != e.networkPlacement && Object.hasOwnProperty.call(e, "networkPlacement") && !a.isString(e.networkPlacement)) return "networkPlacement: string expected";
if (null != e.adEcpm && Object.hasOwnProperty.call(e, "adEcpm") && "number" != typeof e.adEcpm) return "adEcpm: number expected";
if (null != e.adCorridor && Object.hasOwnProperty.call(e, "adCorridor") && "number" != typeof e.adCorridor) return "adCorridor: number expected";
if (null != e.adCreateId && Object.hasOwnProperty.call(e, "adCreateId") && !a.isString(e.adCreateId)) return "adCreateId: string expected";
if (null != e.watchDuration && Object.hasOwnProperty.call(e, "watchDuration") && "number" != typeof e.watchDuration) return "watchDuration: number expected";
if (null != e.gameCnt && Object.hasOwnProperty.call(e, "gameCnt") && !a.isInteger(e.gameCnt)) return "gameCnt: integer expected";
if (null != e.status && Object.hasOwnProperty.call(e, "status")) switch (e.status) {
default:
return "status: enum value expected";

case 0:
case 1:
}
if (null != e.gameMode && Object.hasOwnProperty.call(e, "gameMode")) switch (e.gameMode) {
default:
return "gameMode: enum value expected";

case 1:
case 2:
}
return null != e.isGameEnd && Object.hasOwnProperty.call(e, "isGameEnd") && "boolean" != typeof e.isGameEnd ? "isGameEnd: boolean expected" : null;
};
e.fromObject = function(e, t) {
if (e instanceof i.ModelFeature.AdInfo) return e;
if (!a.isObject(e)) throw TypeError(".ModelFeature.AdInfo: object expected");
void 0 === t && (t = 0);
if (t > a.recursionLimit) throw Error("maximum nesting depth exceeded");
var r = new i.ModelFeature.AdInfo();
null != e.ts && (a.Long ? r.ts = a.Long.fromValue(e.ts, !1) : "string" == typeof e.ts ? r.ts = parseInt(e.ts, 10) : "number" == typeof e.ts ? r.ts = e.ts : "object" == typeof e.ts && (r.ts = new a.LongBits(e.ts.low >>> 0, e.ts.high >>> 0).toNumber()));
switch (e.adType) {
default:
if ("number" == typeof e.adType) {
r.adType = e.adType;
break;
}
break;

case "Error":
case -1:
r.adType = -1;
break;

case "Interstitial":
case 0:
r.adType = 0;
break;

case "Reward":
case 1:
r.adType = 1;
break;

case "Banner":
case 2:
r.adType = 2;
}
null != e.adUnitId && (r.adUnitId = String(e.adUnitId));
null != e.networkName && (r.networkName = String(e.networkName));
null != e.networkPlacement && (r.networkPlacement = String(e.networkPlacement));
null != e.adEcpm && (r.adEcpm = Number(e.adEcpm));
null != e.adCorridor && (r.adCorridor = Number(e.adCorridor));
null != e.adCreateId && (r.adCreateId = String(e.adCreateId));
null != e.watchDuration && (r.watchDuration = Number(e.watchDuration));
null != e.gameCnt && (r.gameCnt = 0 | e.gameCnt);
switch (e.status) {
default:
if ("number" == typeof e.status) {
r.status = e.status;
break;
}
break;

case "Fail":
case 0:
r.status = 0;
break;

case "Success":
case 1:
r.status = 1;
}
switch (e.gameMode) {
default:
if ("number" == typeof e.gameMode) {
r.gameMode = e.gameMode;
break;
}
break;

case "Class":
case 1:
r.gameMode = 1;
break;

case "Chapter":
case 2:
r.gameMode = 2;
}
null != e.isGameEnd && (r.isGameEnd = Boolean(e.isGameEnd));
return r;
};
e.toObject = function(e, t, r) {
t || (t = {});
void 0 === r && (r = 0);
if (r > a.recursionLimit) throw Error("max depth exceeded");
var n = {};
if (t.defaults) {
if (a.Long) {
var o = new a.Long(0, 0, !1);
n.ts = t.longs === String ? o.toString() : t.longs === Number ? o.toNumber() : "undefined" != typeof BigInt && t.longs === BigInt ? o.toBigInt() : o;
} else n.ts = t.longs === String ? "0" : "undefined" != typeof BigInt && t.longs === BigInt ? BigInt("0") : 0;
n.adType = t.enums === String ? "Error" : -1;
n.adUnitId = "";
n.networkName = "";
n.networkPlacement = "";
n.adEcpm = 0;
n.adCorridor = 0;
n.adCreateId = "";
n.watchDuration = 0;
n.gameCnt = 0;
n.status = t.enums === String ? "Fail" : 0;
n.gameMode = t.enums === String ? "Class" : 1;
n.isGameEnd = !1;
}
null != e.ts && Object.hasOwnProperty.call(e, "ts") && ("undefined" != typeof BigInt && t.longs === BigInt ? n.ts = "number" == typeof e.ts ? BigInt(e.ts) : a.Long.fromBits(e.ts.low >>> 0, e.ts.high >>> 0, !1).toBigInt() : "number" == typeof e.ts ? n.ts = t.longs === String ? String(e.ts) : e.ts : n.ts = t.longs === String ? a.Long.prototype.toString.call(e.ts) : t.longs === Number ? new a.LongBits(e.ts.low >>> 0, e.ts.high >>> 0).toNumber() : e.ts);
null != e.adType && Object.hasOwnProperty.call(e, "adType") && (n.adType = t.enums === String ? void 0 === i.ModelFeature.AdType[e.adType] ? e.adType : i.ModelFeature.AdType[e.adType] : e.adType);
null != e.adUnitId && Object.hasOwnProperty.call(e, "adUnitId") && (n.adUnitId = e.adUnitId);
null != e.networkName && Object.hasOwnProperty.call(e, "networkName") && (n.networkName = e.networkName);
null != e.networkPlacement && Object.hasOwnProperty.call(e, "networkPlacement") && (n.networkPlacement = e.networkPlacement);
null != e.adEcpm && Object.hasOwnProperty.call(e, "adEcpm") && (n.adEcpm = t.json && !isFinite(e.adEcpm) ? String(e.adEcpm) : e.adEcpm);
null != e.adCorridor && Object.hasOwnProperty.call(e, "adCorridor") && (n.adCorridor = t.json && !isFinite(e.adCorridor) ? String(e.adCorridor) : e.adCorridor);
null != e.adCreateId && Object.hasOwnProperty.call(e, "adCreateId") && (n.adCreateId = e.adCreateId);
null != e.watchDuration && Object.hasOwnProperty.call(e, "watchDuration") && (n.watchDuration = t.json && !isFinite(e.watchDuration) ? String(e.watchDuration) : e.watchDuration);
null != e.gameCnt && Object.hasOwnProperty.call(e, "gameCnt") && (n.gameCnt = e.gameCnt);
null != e.status && Object.hasOwnProperty.call(e, "status") && (n.status = t.enums === String ? void 0 === i.ModelFeature.AdStatus[e.status] ? e.status : i.ModelFeature.AdStatus[e.status] : e.status);
null != e.gameMode && Object.hasOwnProperty.call(e, "gameMode") && (n.gameMode = t.enums === String ? void 0 === i.ModelFeature.GameMode[e.gameMode] ? e.gameMode : i.ModelFeature.GameMode[e.gameMode] : e.gameMode);
null != e.isGameEnd && Object.hasOwnProperty.call(e, "isGameEnd") && (n.isGameEnd = e.isGameEnd);
return n;
};
e.prototype.toJSON = function() {
return this.constructor.toObject(this, r.util.toJSONOptions);
};
e.getTypeUrl = function(e) {
void 0 === e && (e = "type.googleapis.com");
return e + "/ModelFeature.AdInfo";
};
return e;
}();
e.GameInfoSet = function() {
function e(e) {
this.rounds = [];
if (e) for (var t = Object.keys(e), r = 0; r < t.length; ++r) null != e[t[r]] && "__proto__" !== t[r] && (this[t[r]] = e[t[r]]);
}
e.prototype.ts = a.Long ? a.Long.fromBits(0, 0, !1) : 0;
e.prototype.baseGameInfo = null;
e.prototype.classGameInfo = null;
e.prototype.chapterGameInfo = null;
e.prototype.rounds = a.emptyArray;
e.create = function(t) {
return new e(t);
};
e.encode = function(e, t, r) {
t || (t = o.create());
void 0 === r && (r = 0);
if (r > a.recursionLimit) throw Error("max depth exceeded");
null != e.ts && Object.hasOwnProperty.call(e, "ts") && t.uint32(8).int64(e.ts);
null != e.baseGameInfo && Object.hasOwnProperty.call(e, "baseGameInfo") && i.ModelFeature.GameInfoBase.encode(e.baseGameInfo, t.uint32(18).fork(), r + 1).ldelim();
null != e.classGameInfo && Object.hasOwnProperty.call(e, "classGameInfo") && i.ModelFeature.ClassGameInfo.encode(e.classGameInfo, t.uint32(26).fork(), r + 1).ldelim();
null != e.chapterGameInfo && Object.hasOwnProperty.call(e, "chapterGameInfo") && i.ModelFeature.ChapterGameInfo.encode(e.chapterGameInfo, t.uint32(34).fork(), r + 1).ldelim();
if (null != e.rounds && e.rounds.length) for (var n = 0; n < e.rounds.length; ++n) i.ModelFeature.RoundInfo.encode(e.rounds[n], t.uint32(42).fork(), r + 1).ldelim();
return t;
};
e.encodeDelimited = function(e, t) {
return this.encode(e, t && t.len ? t.fork() : t).ldelim();
};
e.decode = function(e, t, r, o) {
e instanceof n || (e = n.create(e));
void 0 === o && (o = 0);
if (o > n.recursionLimit) throw Error("maximum nesting depth exceeded");
for (var a = void 0 === t ? e.len : e.pos + t, s = new i.ModelFeature.GameInfoSet(); e.pos < a; ) {
var l = e.uint32();
if (l === r) break;
switch (l >>> 3) {
case 1:
s.ts = e.int64();
break;

case 2:
s.baseGameInfo = i.ModelFeature.GameInfoBase.decode(e, e.uint32(), void 0, o + 1);
break;

case 3:
s.classGameInfo = i.ModelFeature.ClassGameInfo.decode(e, e.uint32(), void 0, o + 1);
break;

case 4:
s.chapterGameInfo = i.ModelFeature.ChapterGameInfo.decode(e, e.uint32(), void 0, o + 1);
break;

case 5:
s.rounds && s.rounds.length || (s.rounds = []);
s.rounds.push(i.ModelFeature.RoundInfo.decode(e, e.uint32(), void 0, o + 1));
break;

default:
e.skipType(7 & l, o);
}
}
return s;
};
e.decodeDelimited = function(e) {
e instanceof n || (e = new n(e));
return this.decode(e, e.uint32());
};
e.verify = function(e, t) {
if ("object" != typeof e || null === e) return "object expected";
void 0 === t && (t = 0);
if (t > a.recursionLimit) return "maximum nesting depth exceeded";
if (null != e.ts && Object.hasOwnProperty.call(e, "ts") && !(a.isInteger(e.ts) || e.ts && a.isInteger(e.ts.low) && a.isInteger(e.ts.high))) return "ts: integer|Long expected";
if (null != e.baseGameInfo && Object.hasOwnProperty.call(e, "baseGameInfo") && (n = i.ModelFeature.GameInfoBase.verify(e.baseGameInfo, t + 1))) return "baseGameInfo." + n;
if (null != e.classGameInfo && Object.hasOwnProperty.call(e, "classGameInfo") && (n = i.ModelFeature.ClassGameInfo.verify(e.classGameInfo, t + 1))) return "classGameInfo." + n;
if (null != e.chapterGameInfo && Object.hasOwnProperty.call(e, "chapterGameInfo") && (n = i.ModelFeature.ChapterGameInfo.verify(e.chapterGameInfo, t + 1))) return "chapterGameInfo." + n;
if (null != e.rounds && Object.hasOwnProperty.call(e, "rounds")) {
if (!Array.isArray(e.rounds)) return "rounds: array expected";
for (var r = 0; r < e.rounds.length; ++r) {
var n;
if (n = i.ModelFeature.RoundInfo.verify(e.rounds[r], t + 1)) return "rounds." + n;
}
}
return null;
};
e.fromObject = function(e, t) {
if (e instanceof i.ModelFeature.GameInfoSet) return e;
if (!a.isObject(e)) throw TypeError(".ModelFeature.GameInfoSet: object expected");
void 0 === t && (t = 0);
if (t > a.recursionLimit) throw Error("maximum nesting depth exceeded");
var r = new i.ModelFeature.GameInfoSet();
null != e.ts && (a.Long ? r.ts = a.Long.fromValue(e.ts, !1) : "string" == typeof e.ts ? r.ts = parseInt(e.ts, 10) : "number" == typeof e.ts ? r.ts = e.ts : "object" == typeof e.ts && (r.ts = new a.LongBits(e.ts.low >>> 0, e.ts.high >>> 0).toNumber()));
if (null != e.baseGameInfo) {
if (!a.isObject(e.baseGameInfo)) throw TypeError(".ModelFeature.GameInfoSet.baseGameInfo: object expected");
r.baseGameInfo = i.ModelFeature.GameInfoBase.fromObject(e.baseGameInfo, t + 1);
}
if (null != e.classGameInfo) {
if (!a.isObject(e.classGameInfo)) throw TypeError(".ModelFeature.GameInfoSet.classGameInfo: object expected");
r.classGameInfo = i.ModelFeature.ClassGameInfo.fromObject(e.classGameInfo, t + 1);
}
if (null != e.chapterGameInfo) {
if (!a.isObject(e.chapterGameInfo)) throw TypeError(".ModelFeature.GameInfoSet.chapterGameInfo: object expected");
r.chapterGameInfo = i.ModelFeature.ChapterGameInfo.fromObject(e.chapterGameInfo, t + 1);
}
if (e.rounds) {
if (!Array.isArray(e.rounds)) throw TypeError(".ModelFeature.GameInfoSet.rounds: array expected");
r.rounds = [];
for (var n = 0; n < e.rounds.length; ++n) {
if (!a.isObject(e.rounds[n])) throw TypeError(".ModelFeature.GameInfoSet.rounds: object expected");
r.rounds[n] = i.ModelFeature.RoundInfo.fromObject(e.rounds[n], t + 1);
}
}
return r;
};
e.toObject = function(e, t, r) {
t || (t = {});
void 0 === r && (r = 0);
if (r > a.recursionLimit) throw Error("max depth exceeded");
var n = {};
(t.arrays || t.defaults) && (n.rounds = []);
if (t.defaults) {
if (a.Long) {
var o = new a.Long(0, 0, !1);
n.ts = t.longs === String ? o.toString() : t.longs === Number ? o.toNumber() : "undefined" != typeof BigInt && t.longs === BigInt ? o.toBigInt() : o;
} else n.ts = t.longs === String ? "0" : "undefined" != typeof BigInt && t.longs === BigInt ? BigInt("0") : 0;
n.baseGameInfo = null;
n.classGameInfo = null;
n.chapterGameInfo = null;
}
null != e.ts && Object.hasOwnProperty.call(e, "ts") && ("undefined" != typeof BigInt && t.longs === BigInt ? n.ts = "number" == typeof e.ts ? BigInt(e.ts) : a.Long.fromBits(e.ts.low >>> 0, e.ts.high >>> 0, !1).toBigInt() : "number" == typeof e.ts ? n.ts = t.longs === String ? String(e.ts) : e.ts : n.ts = t.longs === String ? a.Long.prototype.toString.call(e.ts) : t.longs === Number ? new a.LongBits(e.ts.low >>> 0, e.ts.high >>> 0).toNumber() : e.ts);
null != e.baseGameInfo && Object.hasOwnProperty.call(e, "baseGameInfo") && (n.baseGameInfo = i.ModelFeature.GameInfoBase.toObject(e.baseGameInfo, t, r + 1));
null != e.classGameInfo && Object.hasOwnProperty.call(e, "classGameInfo") && (n.classGameInfo = i.ModelFeature.ClassGameInfo.toObject(e.classGameInfo, t, r + 1));
null != e.chapterGameInfo && Object.hasOwnProperty.call(e, "chapterGameInfo") && (n.chapterGameInfo = i.ModelFeature.ChapterGameInfo.toObject(e.chapterGameInfo, t, r + 1));
if (e.rounds && e.rounds.length) {
n.rounds = [];
for (var s = 0; s < e.rounds.length; ++s) n.rounds[s] = i.ModelFeature.RoundInfo.toObject(e.rounds[s], t, r + 1);
}
return n;
};
e.prototype.toJSON = function() {
return this.constructor.toObject(this, r.util.toJSONOptions);
};
e.getTypeUrl = function(e) {
void 0 === e && (e = "type.googleapis.com");
return e + "/ModelFeature.GameInfoSet";
};
return e;
}();
e.RoundInfo = function() {
function e(e) {
if (e) for (var t = Object.keys(e), r = 0; r < t.length; ++r) null != e[t[r]] && "__proto__" !== t[r] && (this[t[r]] = e[t[r]]);
}
e.prototype.ts = a.Long ? a.Long.fromBits(0, 0, !1) : 0;
e.prototype.initWeight = 0;
e.prototype.score = 0;
e.prototype.spendTime = 0;
e.prototype.maxCombo = 0;
e.prototype.clearScreenCnt = 0;
e.prototype.oneEliminateCnt = 0;
e.prototype.twoEliminateCnt = 0;
e.prototype.threeEliminateCnt = 0;
e.prototype.fourEliminateCnt = 0;
e.prototype.fiveEliminateCnt = 0;
e.prototype.sixEliminateCnt = 0;
e.prototype.comboCnt = 0;
e.prototype.algoType = 0;
e.prototype.algoName = "";
e.prototype.thinkTime = 0;
e.prototype.actionTime = 0;
e.prototype.lastBlockTime = 0;
e.prototype.putRateAvg = 0;
e.prototype.holesCnt = 0;
e.prototype.blocksCnt = 0;
e.prototype.contiguousEdges = 0;
e.prototype.contiguousRegions = 0;
e.prototype.convexCorners = 0;
e.prototype.concaveCorners = 0;
e.prototype.weightAvg = 0;
e.prototype.reviveCnt = 0;
e.create = function(t) {
return new e(t);
};
e.encode = function(e, t, r) {
t || (t = o.create());
void 0 === r && (r = 0);
if (r > a.recursionLimit) throw Error("max depth exceeded");
null != e.ts && Object.hasOwnProperty.call(e, "ts") && t.uint32(8).int64(e.ts);
null != e.initWeight && Object.hasOwnProperty.call(e, "initWeight") && t.uint32(17).double(e.initWeight);
null != e.score && Object.hasOwnProperty.call(e, "score") && t.uint32(24).int32(e.score);
null != e.spendTime && Object.hasOwnProperty.call(e, "spendTime") && t.uint32(33).double(e.spendTime);
null != e.maxCombo && Object.hasOwnProperty.call(e, "maxCombo") && t.uint32(40).int32(e.maxCombo);
null != e.clearScreenCnt && Object.hasOwnProperty.call(e, "clearScreenCnt") && t.uint32(48).int32(e.clearScreenCnt);
null != e.oneEliminateCnt && Object.hasOwnProperty.call(e, "oneEliminateCnt") && t.uint32(56).int32(e.oneEliminateCnt);
null != e.twoEliminateCnt && Object.hasOwnProperty.call(e, "twoEliminateCnt") && t.uint32(64).int32(e.twoEliminateCnt);
null != e.threeEliminateCnt && Object.hasOwnProperty.call(e, "threeEliminateCnt") && t.uint32(72).int32(e.threeEliminateCnt);
null != e.fourEliminateCnt && Object.hasOwnProperty.call(e, "fourEliminateCnt") && t.uint32(80).int32(e.fourEliminateCnt);
null != e.fiveEliminateCnt && Object.hasOwnProperty.call(e, "fiveEliminateCnt") && t.uint32(88).int32(e.fiveEliminateCnt);
null != e.sixEliminateCnt && Object.hasOwnProperty.call(e, "sixEliminateCnt") && t.uint32(96).int32(e.sixEliminateCnt);
null != e.comboCnt && Object.hasOwnProperty.call(e, "comboCnt") && t.uint32(104).int32(e.comboCnt);
null != e.algoType && Object.hasOwnProperty.call(e, "algoType") && t.uint32(112).int32(e.algoType);
null != e.algoName && Object.hasOwnProperty.call(e, "algoName") && t.uint32(122).string(e.algoName);
null != e.thinkTime && Object.hasOwnProperty.call(e, "thinkTime") && t.uint32(129).double(e.thinkTime);
null != e.actionTime && Object.hasOwnProperty.call(e, "actionTime") && t.uint32(137).double(e.actionTime);
null != e.lastBlockTime && Object.hasOwnProperty.call(e, "lastBlockTime") && t.uint32(145).double(e.lastBlockTime);
null != e.putRateAvg && Object.hasOwnProperty.call(e, "putRateAvg") && t.uint32(153).double(e.putRateAvg);
null != e.holesCnt && Object.hasOwnProperty.call(e, "holesCnt") && t.uint32(160).int32(e.holesCnt);
null != e.blocksCnt && Object.hasOwnProperty.call(e, "blocksCnt") && t.uint32(168).int32(e.blocksCnt);
null != e.contiguousEdges && Object.hasOwnProperty.call(e, "contiguousEdges") && t.uint32(176).int32(e.contiguousEdges);
null != e.contiguousRegions && Object.hasOwnProperty.call(e, "contiguousRegions") && t.uint32(184).int32(e.contiguousRegions);
null != e.convexCorners && Object.hasOwnProperty.call(e, "convexCorners") && t.uint32(192).int32(e.convexCorners);
null != e.concaveCorners && Object.hasOwnProperty.call(e, "concaveCorners") && t.uint32(200).int32(e.concaveCorners);
null != e.weightAvg && Object.hasOwnProperty.call(e, "weightAvg") && t.uint32(209).double(e.weightAvg);
null != e.reviveCnt && Object.hasOwnProperty.call(e, "reviveCnt") && t.uint32(216).int32(e.reviveCnt);
return t;
};
e.encodeDelimited = function(e, t) {
return this.encode(e, t && t.len ? t.fork() : t).ldelim();
};
e.decode = function(e, t, r, o) {
e instanceof n || (e = n.create(e));
void 0 === o && (o = 0);
if (o > n.recursionLimit) throw Error("maximum nesting depth exceeded");
for (var a = void 0 === t ? e.len : e.pos + t, s = new i.ModelFeature.RoundInfo(); e.pos < a; ) {
var l = e.uint32();
if (l === r) break;
switch (l >>> 3) {
case 1:
s.ts = e.int64();
break;

case 2:
s.initWeight = e.double();
break;

case 3:
s.score = e.int32();
break;

case 4:
s.spendTime = e.double();
break;

case 5:
s.maxCombo = e.int32();
break;

case 6:
s.clearScreenCnt = e.int32();
break;

case 7:
s.oneEliminateCnt = e.int32();
break;

case 8:
s.twoEliminateCnt = e.int32();
break;

case 9:
s.threeEliminateCnt = e.int32();
break;

case 10:
s.fourEliminateCnt = e.int32();
break;

case 11:
s.fiveEliminateCnt = e.int32();
break;

case 12:
s.sixEliminateCnt = e.int32();
break;

case 13:
s.comboCnt = e.int32();
break;

case 14:
s.algoType = e.int32();
break;

case 15:
s.algoName = e.string();
break;

case 16:
s.thinkTime = e.double();
break;

case 17:
s.actionTime = e.double();
break;

case 18:
s.lastBlockTime = e.double();
break;

case 19:
s.putRateAvg = e.double();
break;

case 20:
s.holesCnt = e.int32();
break;

case 21:
s.blocksCnt = e.int32();
break;

case 22:
s.contiguousEdges = e.int32();
break;

case 23:
s.contiguousRegions = e.int32();
break;

case 24:
s.convexCorners = e.int32();
break;

case 25:
s.concaveCorners = e.int32();
break;

case 26:
s.weightAvg = e.double();
break;

case 27:
s.reviveCnt = e.int32();
break;

default:
e.skipType(7 & l, o);
}
}
return s;
};
e.decodeDelimited = function(e) {
e instanceof n || (e = new n(e));
return this.decode(e, e.uint32());
};
e.verify = function(e, t) {
if ("object" != typeof e || null === e) return "object expected";
void 0 === t && (t = 0);
return t > a.recursionLimit ? "maximum nesting depth exceeded" : null != e.ts && Object.hasOwnProperty.call(e, "ts") && !(a.isInteger(e.ts) || e.ts && a.isInteger(e.ts.low) && a.isInteger(e.ts.high)) ? "ts: integer|Long expected" : null != e.initWeight && Object.hasOwnProperty.call(e, "initWeight") && "number" != typeof e.initWeight ? "initWeight: number expected" : null != e.score && Object.hasOwnProperty.call(e, "score") && !a.isInteger(e.score) ? "score: integer expected" : null != e.spendTime && Object.hasOwnProperty.call(e, "spendTime") && "number" != typeof e.spendTime ? "spendTime: number expected" : null != e.maxCombo && Object.hasOwnProperty.call(e, "maxCombo") && !a.isInteger(e.maxCombo) ? "maxCombo: integer expected" : null != e.clearScreenCnt && Object.hasOwnProperty.call(e, "clearScreenCnt") && !a.isInteger(e.clearScreenCnt) ? "clearScreenCnt: integer expected" : null != e.oneEliminateCnt && Object.hasOwnProperty.call(e, "oneEliminateCnt") && !a.isInteger(e.oneEliminateCnt) ? "oneEliminateCnt: integer expected" : null != e.twoEliminateCnt && Object.hasOwnProperty.call(e, "twoEliminateCnt") && !a.isInteger(e.twoEliminateCnt) ? "twoEliminateCnt: integer expected" : null != e.threeEliminateCnt && Object.hasOwnProperty.call(e, "threeEliminateCnt") && !a.isInteger(e.threeEliminateCnt) ? "threeEliminateCnt: integer expected" : null != e.fourEliminateCnt && Object.hasOwnProperty.call(e, "fourEliminateCnt") && !a.isInteger(e.fourEliminateCnt) ? "fourEliminateCnt: integer expected" : null != e.fiveEliminateCnt && Object.hasOwnProperty.call(e, "fiveEliminateCnt") && !a.isInteger(e.fiveEliminateCnt) ? "fiveEliminateCnt: integer expected" : null != e.sixEliminateCnt && Object.hasOwnProperty.call(e, "sixEliminateCnt") && !a.isInteger(e.sixEliminateCnt) ? "sixEliminateCnt: integer expected" : null != e.comboCnt && Object.hasOwnProperty.call(e, "comboCnt") && !a.isInteger(e.comboCnt) ? "comboCnt: integer expected" : null != e.algoType && Object.hasOwnProperty.call(e, "algoType") && !a.isInteger(e.algoType) ? "algoType: integer expected" : null != e.algoName && Object.hasOwnProperty.call(e, "algoName") && !a.isString(e.algoName) ? "algoName: string expected" : null != e.thinkTime && Object.hasOwnProperty.call(e, "thinkTime") && "number" != typeof e.thinkTime ? "thinkTime: number expected" : null != e.actionTime && Object.hasOwnProperty.call(e, "actionTime") && "number" != typeof e.actionTime ? "actionTime: number expected" : null != e.lastBlockTime && Object.hasOwnProperty.call(e, "lastBlockTime") && "number" != typeof e.lastBlockTime ? "lastBlockTime: number expected" : null != e.putRateAvg && Object.hasOwnProperty.call(e, "putRateAvg") && "number" != typeof e.putRateAvg ? "putRateAvg: number expected" : null != e.holesCnt && Object.hasOwnProperty.call(e, "holesCnt") && !a.isInteger(e.holesCnt) ? "holesCnt: integer expected" : null != e.blocksCnt && Object.hasOwnProperty.call(e, "blocksCnt") && !a.isInteger(e.blocksCnt) ? "blocksCnt: integer expected" : null != e.contiguousEdges && Object.hasOwnProperty.call(e, "contiguousEdges") && !a.isInteger(e.contiguousEdges) ? "contiguousEdges: integer expected" : null != e.contiguousRegions && Object.hasOwnProperty.call(e, "contiguousRegions") && !a.isInteger(e.contiguousRegions) ? "contiguousRegions: integer expected" : null != e.convexCorners && Object.hasOwnProperty.call(e, "convexCorners") && !a.isInteger(e.convexCorners) ? "convexCorners: integer expected" : null != e.concaveCorners && Object.hasOwnProperty.call(e, "concaveCorners") && !a.isInteger(e.concaveCorners) ? "concaveCorners: integer expected" : null != e.weightAvg && Object.hasOwnProperty.call(e, "weightAvg") && "number" != typeof e.weightAvg ? "weightAvg: number expected" : null != e.reviveCnt && Object.hasOwnProperty.call(e, "reviveCnt") && !a.isInteger(e.reviveCnt) ? "reviveCnt: integer expected" : null;
};
e.fromObject = function(e, t) {
if (e instanceof i.ModelFeature.RoundInfo) return e;
if (!a.isObject(e)) throw TypeError(".ModelFeature.RoundInfo: object expected");
void 0 === t && (t = 0);
if (t > a.recursionLimit) throw Error("maximum nesting depth exceeded");
var r = new i.ModelFeature.RoundInfo();
null != e.ts && (a.Long ? r.ts = a.Long.fromValue(e.ts, !1) : "string" == typeof e.ts ? r.ts = parseInt(e.ts, 10) : "number" == typeof e.ts ? r.ts = e.ts : "object" == typeof e.ts && (r.ts = new a.LongBits(e.ts.low >>> 0, e.ts.high >>> 0).toNumber()));
null != e.initWeight && (r.initWeight = Number(e.initWeight));
null != e.score && (r.score = 0 | e.score);
null != e.spendTime && (r.spendTime = Number(e.spendTime));
null != e.maxCombo && (r.maxCombo = 0 | e.maxCombo);
null != e.clearScreenCnt && (r.clearScreenCnt = 0 | e.clearScreenCnt);
null != e.oneEliminateCnt && (r.oneEliminateCnt = 0 | e.oneEliminateCnt);
null != e.twoEliminateCnt && (r.twoEliminateCnt = 0 | e.twoEliminateCnt);
null != e.threeEliminateCnt && (r.threeEliminateCnt = 0 | e.threeEliminateCnt);
null != e.fourEliminateCnt && (r.fourEliminateCnt = 0 | e.fourEliminateCnt);
null != e.fiveEliminateCnt && (r.fiveEliminateCnt = 0 | e.fiveEliminateCnt);
null != e.sixEliminateCnt && (r.sixEliminateCnt = 0 | e.sixEliminateCnt);
null != e.comboCnt && (r.comboCnt = 0 | e.comboCnt);
null != e.algoType && (r.algoType = 0 | e.algoType);
null != e.algoName && (r.algoName = String(e.algoName));
null != e.thinkTime && (r.thinkTime = Number(e.thinkTime));
null != e.actionTime && (r.actionTime = Number(e.actionTime));
null != e.lastBlockTime && (r.lastBlockTime = Number(e.lastBlockTime));
null != e.putRateAvg && (r.putRateAvg = Number(e.putRateAvg));
null != e.holesCnt && (r.holesCnt = 0 | e.holesCnt);
null != e.blocksCnt && (r.blocksCnt = 0 | e.blocksCnt);
null != e.contiguousEdges && (r.contiguousEdges = 0 | e.contiguousEdges);
null != e.contiguousRegions && (r.contiguousRegions = 0 | e.contiguousRegions);
null != e.convexCorners && (r.convexCorners = 0 | e.convexCorners);
null != e.concaveCorners && (r.concaveCorners = 0 | e.concaveCorners);
null != e.weightAvg && (r.weightAvg = Number(e.weightAvg));
null != e.reviveCnt && (r.reviveCnt = 0 | e.reviveCnt);
return r;
};
e.toObject = function(e, t, r) {
t || (t = {});
void 0 === r && (r = 0);
if (r > a.recursionLimit) throw Error("max depth exceeded");
var n = {};
if (t.defaults) {
if (a.Long) {
var o = new a.Long(0, 0, !1);
n.ts = t.longs === String ? o.toString() : t.longs === Number ? o.toNumber() : "undefined" != typeof BigInt && t.longs === BigInt ? o.toBigInt() : o;
} else n.ts = t.longs === String ? "0" : "undefined" != typeof BigInt && t.longs === BigInt ? BigInt("0") : 0;
n.initWeight = 0;
n.score = 0;
n.spendTime = 0;
n.maxCombo = 0;
n.clearScreenCnt = 0;
n.oneEliminateCnt = 0;
n.twoEliminateCnt = 0;
n.threeEliminateCnt = 0;
n.fourEliminateCnt = 0;
n.fiveEliminateCnt = 0;
n.sixEliminateCnt = 0;
n.comboCnt = 0;
n.algoType = 0;
n.algoName = "";
n.thinkTime = 0;
n.actionTime = 0;
n.lastBlockTime = 0;
n.putRateAvg = 0;
n.holesCnt = 0;
n.blocksCnt = 0;
n.contiguousEdges = 0;
n.contiguousRegions = 0;
n.convexCorners = 0;
n.concaveCorners = 0;
n.weightAvg = 0;
n.reviveCnt = 0;
}
null != e.ts && Object.hasOwnProperty.call(e, "ts") && ("undefined" != typeof BigInt && t.longs === BigInt ? n.ts = "number" == typeof e.ts ? BigInt(e.ts) : a.Long.fromBits(e.ts.low >>> 0, e.ts.high >>> 0, !1).toBigInt() : "number" == typeof e.ts ? n.ts = t.longs === String ? String(e.ts) : e.ts : n.ts = t.longs === String ? a.Long.prototype.toString.call(e.ts) : t.longs === Number ? new a.LongBits(e.ts.low >>> 0, e.ts.high >>> 0).toNumber() : e.ts);
null != e.initWeight && Object.hasOwnProperty.call(e, "initWeight") && (n.initWeight = t.json && !isFinite(e.initWeight) ? String(e.initWeight) : e.initWeight);
null != e.score && Object.hasOwnProperty.call(e, "score") && (n.score = e.score);
null != e.spendTime && Object.hasOwnProperty.call(e, "spendTime") && (n.spendTime = t.json && !isFinite(e.spendTime) ? String(e.spendTime) : e.spendTime);
null != e.maxCombo && Object.hasOwnProperty.call(e, "maxCombo") && (n.maxCombo = e.maxCombo);
null != e.clearScreenCnt && Object.hasOwnProperty.call(e, "clearScreenCnt") && (n.clearScreenCnt = e.clearScreenCnt);
null != e.oneEliminateCnt && Object.hasOwnProperty.call(e, "oneEliminateCnt") && (n.oneEliminateCnt = e.oneEliminateCnt);
null != e.twoEliminateCnt && Object.hasOwnProperty.call(e, "twoEliminateCnt") && (n.twoEliminateCnt = e.twoEliminateCnt);
null != e.threeEliminateCnt && Object.hasOwnProperty.call(e, "threeEliminateCnt") && (n.threeEliminateCnt = e.threeEliminateCnt);
null != e.fourEliminateCnt && Object.hasOwnProperty.call(e, "fourEliminateCnt") && (n.fourEliminateCnt = e.fourEliminateCnt);
null != e.fiveEliminateCnt && Object.hasOwnProperty.call(e, "fiveEliminateCnt") && (n.fiveEliminateCnt = e.fiveEliminateCnt);
null != e.sixEliminateCnt && Object.hasOwnProperty.call(e, "sixEliminateCnt") && (n.sixEliminateCnt = e.sixEliminateCnt);
null != e.comboCnt && Object.hasOwnProperty.call(e, "comboCnt") && (n.comboCnt = e.comboCnt);
null != e.algoType && Object.hasOwnProperty.call(e, "algoType") && (n.algoType = e.algoType);
null != e.algoName && Object.hasOwnProperty.call(e, "algoName") && (n.algoName = e.algoName);
null != e.thinkTime && Object.hasOwnProperty.call(e, "thinkTime") && (n.thinkTime = t.json && !isFinite(e.thinkTime) ? String(e.thinkTime) : e.thinkTime);
null != e.actionTime && Object.hasOwnProperty.call(e, "actionTime") && (n.actionTime = t.json && !isFinite(e.actionTime) ? String(e.actionTime) : e.actionTime);
null != e.lastBlockTime && Object.hasOwnProperty.call(e, "lastBlockTime") && (n.lastBlockTime = t.json && !isFinite(e.lastBlockTime) ? String(e.lastBlockTime) : e.lastBlockTime);
null != e.putRateAvg && Object.hasOwnProperty.call(e, "putRateAvg") && (n.putRateAvg = t.json && !isFinite(e.putRateAvg) ? String(e.putRateAvg) : e.putRateAvg);
null != e.holesCnt && Object.hasOwnProperty.call(e, "holesCnt") && (n.holesCnt = e.holesCnt);
null != e.blocksCnt && Object.hasOwnProperty.call(e, "blocksCnt") && (n.blocksCnt = e.blocksCnt);
null != e.contiguousEdges && Object.hasOwnProperty.call(e, "contiguousEdges") && (n.contiguousEdges = e.contiguousEdges);
null != e.contiguousRegions && Object.hasOwnProperty.call(e, "contiguousRegions") && (n.contiguousRegions = e.contiguousRegions);
null != e.convexCorners && Object.hasOwnProperty.call(e, "convexCorners") && (n.convexCorners = e.convexCorners);
null != e.concaveCorners && Object.hasOwnProperty.call(e, "concaveCorners") && (n.concaveCorners = e.concaveCorners);
null != e.weightAvg && Object.hasOwnProperty.call(e, "weightAvg") && (n.weightAvg = t.json && !isFinite(e.weightAvg) ? String(e.weightAvg) : e.weightAvg);
null != e.reviveCnt && Object.hasOwnProperty.call(e, "reviveCnt") && (n.reviveCnt = e.reviveCnt);
return n;
};
e.prototype.toJSON = function() {
return this.constructor.toObject(this, r.util.toJSONOptions);
};
e.getTypeUrl = function(e) {
void 0 === e && (e = "type.googleapis.com");
return e + "/ModelFeature.RoundInfo";
};
return e;
}();
e.ChapterBaseInfo = function() {
function e(e) {
if (e) for (var t = Object.keys(e), r = 0; r < t.length; ++r) null != e[t[r]] && "__proto__" !== t[r] && (this[t[r]] = e[t[r]]);
}
e.prototype.stage = 0;
e.prototype.num = 0;
e.prototype.tryTimes = 0;
e.prototype.diffType = 0;
e.create = function(t) {
return new e(t);
};
e.encode = function(e, t, r) {
t || (t = o.create());
void 0 === r && (r = 0);
if (r > a.recursionLimit) throw Error("max depth exceeded");
null != e.stage && Object.hasOwnProperty.call(e, "stage") && t.uint32(8).int32(e.stage);
null != e.num && Object.hasOwnProperty.call(e, "num") && t.uint32(16).int32(e.num);
null != e.tryTimes && Object.hasOwnProperty.call(e, "tryTimes") && t.uint32(24).int32(e.tryTimes);
null != e.diffType && Object.hasOwnProperty.call(e, "diffType") && t.uint32(32).int32(e.diffType);
return t;
};
e.encodeDelimited = function(e, t) {
return this.encode(e, t && t.len ? t.fork() : t).ldelim();
};
e.decode = function(e, t, r, o) {
e instanceof n || (e = n.create(e));
void 0 === o && (o = 0);
if (o > n.recursionLimit) throw Error("maximum nesting depth exceeded");
for (var a = void 0 === t ? e.len : e.pos + t, s = new i.ModelFeature.ChapterBaseInfo(); e.pos < a; ) {
var l = e.uint32();
if (l === r) break;
switch (l >>> 3) {
case 1:
s.stage = e.int32();
break;

case 2:
s.num = e.int32();
break;

case 3:
s.tryTimes = e.int32();
break;

case 4:
s.diffType = e.int32();
break;

default:
e.skipType(7 & l, o);
}
}
return s;
};
e.decodeDelimited = function(e) {
e instanceof n || (e = new n(e));
return this.decode(e, e.uint32());
};
e.verify = function(e, t) {
if ("object" != typeof e || null === e) return "object expected";
void 0 === t && (t = 0);
if (t > a.recursionLimit) return "maximum nesting depth exceeded";
if (null != e.stage && Object.hasOwnProperty.call(e, "stage") && !a.isInteger(e.stage)) return "stage: integer expected";
if (null != e.num && Object.hasOwnProperty.call(e, "num") && !a.isInteger(e.num)) return "num: integer expected";
if (null != e.tryTimes && Object.hasOwnProperty.call(e, "tryTimes") && !a.isInteger(e.tryTimes)) return "tryTimes: integer expected";
if (null != e.diffType && Object.hasOwnProperty.call(e, "diffType")) switch (e.diffType) {
default:
return "diffType: enum value expected";

case 0:
case 1:
case 2:
case 3:
case 4:
case 5:
}
return null;
};
e.fromObject = function(e, t) {
if (e instanceof i.ModelFeature.ChapterBaseInfo) return e;
if (!a.isObject(e)) throw TypeError(".ModelFeature.ChapterBaseInfo: object expected");
void 0 === t && (t = 0);
if (t > a.recursionLimit) throw Error("maximum nesting depth exceeded");
var r = new i.ModelFeature.ChapterBaseInfo();
null != e.stage && (r.stage = 0 | e.stage);
null != e.num && (r.num = 0 | e.num);
null != e.tryTimes && (r.tryTimes = 0 | e.tryTimes);
switch (e.diffType) {
default:
if ("number" == typeof e.diffType) {
r.diffType = e.diffType;
break;
}
break;

case "NONE":
case 0:
r.diffType = 0;
break;

case "SIMPLE":
case 1:
r.diffType = 1;
break;

case "MEDIUM":
case 2:
r.diffType = 2;
break;

case "DIFFICULT":
case 3:
r.diffType = 3;
break;

case "NOVICE":
case 4:
r.diffType = 4;
break;

case "SIMPLE_DIFFICULT":
case 5:
r.diffType = 5;
}
return r;
};
e.toObject = function(e, t, r) {
t || (t = {});
void 0 === r && (r = 0);
if (r > a.recursionLimit) throw Error("max depth exceeded");
var n = {};
if (t.defaults) {
n.stage = 0;
n.num = 0;
n.tryTimes = 0;
n.diffType = t.enums === String ? "NONE" : 0;
}
null != e.stage && Object.hasOwnProperty.call(e, "stage") && (n.stage = e.stage);
null != e.num && Object.hasOwnProperty.call(e, "num") && (n.num = e.num);
null != e.tryTimes && Object.hasOwnProperty.call(e, "tryTimes") && (n.tryTimes = e.tryTimes);
null != e.diffType && Object.hasOwnProperty.call(e, "diffType") && (n.diffType = t.enums === String ? void 0 === i.ModelFeature.ChapterDiffType[e.diffType] ? e.diffType : i.ModelFeature.ChapterDiffType[e.diffType] : e.diffType);
return n;
};
e.prototype.toJSON = function() {
return this.constructor.toObject(this, r.util.toJSONOptions);
};
e.getTypeUrl = function(e) {
void 0 === e && (e = "type.googleapis.com");
return e + "/ModelFeature.ChapterBaseInfo";
};
return e;
}();
e.DailyInfo = function() {
function e(e) {
this.games = [];
this.ads = [];
if (e) for (var t = Object.keys(e), r = 0; r < t.length; ++r) null != e[t[r]] && "__proto__" !== t[r] && (this[t[r]] = e[t[r]]);
}
e.prototype.dataStr = "";
e.prototype.sessionCount = 0;
e.prototype.games = a.emptyArray;
e.prototype.ads = a.emptyArray;
e.create = function(t) {
return new e(t);
};
e.encode = function(e, t, r) {
t || (t = o.create());
void 0 === r && (r = 0);
if (r > a.recursionLimit) throw Error("max depth exceeded");
null != e.dataStr && Object.hasOwnProperty.call(e, "dataStr") && t.uint32(10).string(e.dataStr);
null != e.sessionCount && Object.hasOwnProperty.call(e, "sessionCount") && t.uint32(16).int32(e.sessionCount);
if (null != e.games && e.games.length) for (var n = 0; n < e.games.length; ++n) i.ModelFeature.GameInfoSet.encode(e.games[n], t.uint32(26).fork(), r + 1).ldelim();
if (null != e.ads && e.ads.length) for (n = 0; n < e.ads.length; ++n) i.ModelFeature.AdInfo.encode(e.ads[n], t.uint32(34).fork(), r + 1).ldelim();
return t;
};
e.encodeDelimited = function(e, t) {
return this.encode(e, t && t.len ? t.fork() : t).ldelim();
};
e.decode = function(e, t, r, o) {
e instanceof n || (e = n.create(e));
void 0 === o && (o = 0);
if (o > n.recursionLimit) throw Error("maximum nesting depth exceeded");
for (var a = void 0 === t ? e.len : e.pos + t, s = new i.ModelFeature.DailyInfo(); e.pos < a; ) {
var l = e.uint32();
if (l === r) break;
switch (l >>> 3) {
case 1:
s.dataStr = e.string();
break;

case 2:
s.sessionCount = e.int32();
break;

case 3:
s.games && s.games.length || (s.games = []);
s.games.push(i.ModelFeature.GameInfoSet.decode(e, e.uint32(), void 0, o + 1));
break;

case 4:
s.ads && s.ads.length || (s.ads = []);
s.ads.push(i.ModelFeature.AdInfo.decode(e, e.uint32(), void 0, o + 1));
break;

default:
e.skipType(7 & l, o);
}
}
return s;
};
e.decodeDelimited = function(e) {
e instanceof n || (e = new n(e));
return this.decode(e, e.uint32());
};
e.verify = function(e, t) {
if ("object" != typeof e || null === e) return "object expected";
void 0 === t && (t = 0);
if (t > a.recursionLimit) return "maximum nesting depth exceeded";
if (null != e.dataStr && Object.hasOwnProperty.call(e, "dataStr") && !a.isString(e.dataStr)) return "dataStr: string expected";
if (null != e.sessionCount && Object.hasOwnProperty.call(e, "sessionCount") && !a.isInteger(e.sessionCount)) return "sessionCount: integer expected";
if (null != e.games && Object.hasOwnProperty.call(e, "games")) {
if (!Array.isArray(e.games)) return "games: array expected";
for (var r = 0; r < e.games.length; ++r) if (n = i.ModelFeature.GameInfoSet.verify(e.games[r], t + 1)) return "games." + n;
}
if (null != e.ads && Object.hasOwnProperty.call(e, "ads")) {
if (!Array.isArray(e.ads)) return "ads: array expected";
for (r = 0; r < e.ads.length; ++r) {
var n;
if (n = i.ModelFeature.AdInfo.verify(e.ads[r], t + 1)) return "ads." + n;
}
}
return null;
};
e.fromObject = function(e, t) {
if (e instanceof i.ModelFeature.DailyInfo) return e;
if (!a.isObject(e)) throw TypeError(".ModelFeature.DailyInfo: object expected");
void 0 === t && (t = 0);
if (t > a.recursionLimit) throw Error("maximum nesting depth exceeded");
var r = new i.ModelFeature.DailyInfo();
null != e.dataStr && (r.dataStr = String(e.dataStr));
null != e.sessionCount && (r.sessionCount = 0 | e.sessionCount);
if (e.games) {
if (!Array.isArray(e.games)) throw TypeError(".ModelFeature.DailyInfo.games: array expected");
r.games = [];
for (var n = 0; n < e.games.length; ++n) {
if (!a.isObject(e.games[n])) throw TypeError(".ModelFeature.DailyInfo.games: object expected");
r.games[n] = i.ModelFeature.GameInfoSet.fromObject(e.games[n], t + 1);
}
}
if (e.ads) {
if (!Array.isArray(e.ads)) throw TypeError(".ModelFeature.DailyInfo.ads: array expected");
r.ads = [];
for (n = 0; n < e.ads.length; ++n) {
if (!a.isObject(e.ads[n])) throw TypeError(".ModelFeature.DailyInfo.ads: object expected");
r.ads[n] = i.ModelFeature.AdInfo.fromObject(e.ads[n], t + 1);
}
}
return r;
};
e.toObject = function(e, t, r) {
t || (t = {});
void 0 === r && (r = 0);
if (r > a.recursionLimit) throw Error("max depth exceeded");
var n = {};
if (t.arrays || t.defaults) {
n.games = [];
n.ads = [];
}
if (t.defaults) {
n.dataStr = "";
n.sessionCount = 0;
}
null != e.dataStr && Object.hasOwnProperty.call(e, "dataStr") && (n.dataStr = e.dataStr);
null != e.sessionCount && Object.hasOwnProperty.call(e, "sessionCount") && (n.sessionCount = e.sessionCount);
if (e.games && e.games.length) {
n.games = [];
for (var o = 0; o < e.games.length; ++o) n.games[o] = i.ModelFeature.GameInfoSet.toObject(e.games[o], t, r + 1);
}
if (e.ads && e.ads.length) {
n.ads = [];
for (o = 0; o < e.ads.length; ++o) n.ads[o] = i.ModelFeature.AdInfo.toObject(e.ads[o], t, r + 1);
}
return n;
};
e.prototype.toJSON = function() {
return this.constructor.toObject(this, r.util.toJSONOptions);
};
e.getTypeUrl = function(e) {
void 0 === e && (e = "type.googleapis.com");
return e + "/ModelFeature.DailyInfo";
};
return e;
}();
e.ChapterStageInfo = function() {
function e(e) {
if (e) for (var t = Object.keys(e), r = 0; r < t.length; ++r) null != e[t[r]] && "__proto__" !== t[r] && (this[t[r]] = e[t[r]]);
}
e.prototype.unlockTime = a.Long ? a.Long.fromBits(0, 0, !1) : 0;
e.create = function(t) {
return new e(t);
};
e.encode = function(e, t, r) {
t || (t = o.create());
void 0 === r && (r = 0);
if (r > a.recursionLimit) throw Error("max depth exceeded");
null != e.unlockTime && Object.hasOwnProperty.call(e, "unlockTime") && t.uint32(8).int64(e.unlockTime);
return t;
};
e.encodeDelimited = function(e, t) {
return this.encode(e, t && t.len ? t.fork() : t).ldelim();
};
e.decode = function(e, t, r, o) {
e instanceof n || (e = n.create(e));
void 0 === o && (o = 0);
if (o > n.recursionLimit) throw Error("maximum nesting depth exceeded");
for (var a = void 0 === t ? e.len : e.pos + t, s = new i.ModelFeature.ChapterStageInfo(); e.pos < a; ) {
var l = e.uint32();
if (l === r) break;
switch (l >>> 3) {
case 1:
s.unlockTime = e.int64();
break;

default:
e.skipType(7 & l, o);
}
}
return s;
};
e.decodeDelimited = function(e) {
e instanceof n || (e = new n(e));
return this.decode(e, e.uint32());
};
e.verify = function(e, t) {
if ("object" != typeof e || null === e) return "object expected";
void 0 === t && (t = 0);
return t > a.recursionLimit ? "maximum nesting depth exceeded" : null != e.unlockTime && Object.hasOwnProperty.call(e, "unlockTime") && !(a.isInteger(e.unlockTime) || e.unlockTime && a.isInteger(e.unlockTime.low) && a.isInteger(e.unlockTime.high)) ? "unlockTime: integer|Long expected" : null;
};
e.fromObject = function(e, t) {
if (e instanceof i.ModelFeature.ChapterStageInfo) return e;
if (!a.isObject(e)) throw TypeError(".ModelFeature.ChapterStageInfo: object expected");
void 0 === t && (t = 0);
if (t > a.recursionLimit) throw Error("maximum nesting depth exceeded");
var r = new i.ModelFeature.ChapterStageInfo();
null != e.unlockTime && (a.Long ? r.unlockTime = a.Long.fromValue(e.unlockTime, !1) : "string" == typeof e.unlockTime ? r.unlockTime = parseInt(e.unlockTime, 10) : "number" == typeof e.unlockTime ? r.unlockTime = e.unlockTime : "object" == typeof e.unlockTime && (r.unlockTime = new a.LongBits(e.unlockTime.low >>> 0, e.unlockTime.high >>> 0).toNumber()));
return r;
};
e.toObject = function(e, t, r) {
t || (t = {});
void 0 === r && (r = 0);
if (r > a.recursionLimit) throw Error("max depth exceeded");
var n = {};
if (t.defaults) if (a.Long) {
var o = new a.Long(0, 0, !1);
n.unlockTime = t.longs === String ? o.toString() : t.longs === Number ? o.toNumber() : "undefined" != typeof BigInt && t.longs === BigInt ? o.toBigInt() : o;
} else n.unlockTime = t.longs === String ? "0" : "undefined" != typeof BigInt && t.longs === BigInt ? BigInt("0") : 0;
null != e.unlockTime && Object.hasOwnProperty.call(e, "unlockTime") && ("undefined" != typeof BigInt && t.longs === BigInt ? n.unlockTime = "number" == typeof e.unlockTime ? BigInt(e.unlockTime) : a.Long.fromBits(e.unlockTime.low >>> 0, e.unlockTime.high >>> 0, !1).toBigInt() : "number" == typeof e.unlockTime ? n.unlockTime = t.longs === String ? String(e.unlockTime) : e.unlockTime : n.unlockTime = t.longs === String ? a.Long.prototype.toString.call(e.unlockTime) : t.longs === Number ? new a.LongBits(e.unlockTime.low >>> 0, e.unlockTime.high >>> 0).toNumber() : e.unlockTime);
return n;
};
e.prototype.toJSON = function() {
return this.constructor.toObject(this, r.util.toJSONOptions);
};
e.getTypeUrl = function(e) {
void 0 === e && (e = "type.googleapis.com");
return e + "/ModelFeature.ChapterStageInfo";
};
return e;
}();
e.SessionInfo = function() {
function e(e) {
if (e) for (var t = Object.keys(e), r = 0; r < t.length; ++r) null != e[t[r]] && "__proto__" !== t[r] && (this[t[r]] = e[t[r]]);
}
e.prototype.ts = a.Long ? a.Long.fromBits(0, 0, !1) : 0;
e.prototype.finalActiveTs = a.Long ? a.Long.fromBits(0, 0, !1) : 0;
e.create = function(t) {
return new e(t);
};
e.encode = function(e, t, r) {
t || (t = o.create());
void 0 === r && (r = 0);
if (r > a.recursionLimit) throw Error("max depth exceeded");
null != e.ts && Object.hasOwnProperty.call(e, "ts") && t.uint32(8).int64(e.ts);
null != e.finalActiveTs && Object.hasOwnProperty.call(e, "finalActiveTs") && t.uint32(16).int64(e.finalActiveTs);
return t;
};
e.encodeDelimited = function(e, t) {
return this.encode(e, t && t.len ? t.fork() : t).ldelim();
};
e.decode = function(e, t, r, o) {
e instanceof n || (e = n.create(e));
void 0 === o && (o = 0);
if (o > n.recursionLimit) throw Error("maximum nesting depth exceeded");
for (var a = void 0 === t ? e.len : e.pos + t, s = new i.ModelFeature.SessionInfo(); e.pos < a; ) {
var l = e.uint32();
if (l === r) break;
switch (l >>> 3) {
case 1:
s.ts = e.int64();
break;

case 2:
s.finalActiveTs = e.int64();
break;

default:
e.skipType(7 & l, o);
}
}
return s;
};
e.decodeDelimited = function(e) {
e instanceof n || (e = new n(e));
return this.decode(e, e.uint32());
};
e.verify = function(e, t) {
if ("object" != typeof e || null === e) return "object expected";
void 0 === t && (t = 0);
return t > a.recursionLimit ? "maximum nesting depth exceeded" : null != e.ts && Object.hasOwnProperty.call(e, "ts") && !(a.isInteger(e.ts) || e.ts && a.isInteger(e.ts.low) && a.isInteger(e.ts.high)) ? "ts: integer|Long expected" : null != e.finalActiveTs && Object.hasOwnProperty.call(e, "finalActiveTs") && !(a.isInteger(e.finalActiveTs) || e.finalActiveTs && a.isInteger(e.finalActiveTs.low) && a.isInteger(e.finalActiveTs.high)) ? "finalActiveTs: integer|Long expected" : null;
};
e.fromObject = function(e, t) {
if (e instanceof i.ModelFeature.SessionInfo) return e;
if (!a.isObject(e)) throw TypeError(".ModelFeature.SessionInfo: object expected");
void 0 === t && (t = 0);
if (t > a.recursionLimit) throw Error("maximum nesting depth exceeded");
var r = new i.ModelFeature.SessionInfo();
null != e.ts && (a.Long ? r.ts = a.Long.fromValue(e.ts, !1) : "string" == typeof e.ts ? r.ts = parseInt(e.ts, 10) : "number" == typeof e.ts ? r.ts = e.ts : "object" == typeof e.ts && (r.ts = new a.LongBits(e.ts.low >>> 0, e.ts.high >>> 0).toNumber()));
null != e.finalActiveTs && (a.Long ? r.finalActiveTs = a.Long.fromValue(e.finalActiveTs, !1) : "string" == typeof e.finalActiveTs ? r.finalActiveTs = parseInt(e.finalActiveTs, 10) : "number" == typeof e.finalActiveTs ? r.finalActiveTs = e.finalActiveTs : "object" == typeof e.finalActiveTs && (r.finalActiveTs = new a.LongBits(e.finalActiveTs.low >>> 0, e.finalActiveTs.high >>> 0).toNumber()));
return r;
};
e.toObject = function(e, t, r) {
t || (t = {});
void 0 === r && (r = 0);
if (r > a.recursionLimit) throw Error("max depth exceeded");
var n = {};
if (t.defaults) {
if (a.Long) {
var o = new a.Long(0, 0, !1);
n.ts = t.longs === String ? o.toString() : t.longs === Number ? o.toNumber() : "undefined" != typeof BigInt && t.longs === BigInt ? o.toBigInt() : o;
} else n.ts = t.longs === String ? "0" : "undefined" != typeof BigInt && t.longs === BigInt ? BigInt("0") : 0;
if (a.Long) {
o = new a.Long(0, 0, !1);
n.finalActiveTs = t.longs === String ? o.toString() : t.longs === Number ? o.toNumber() : "undefined" != typeof BigInt && t.longs === BigInt ? o.toBigInt() : o;
} else n.finalActiveTs = t.longs === String ? "0" : "undefined" != typeof BigInt && t.longs === BigInt ? BigInt("0") : 0;
}
null != e.ts && Object.hasOwnProperty.call(e, "ts") && ("undefined" != typeof BigInt && t.longs === BigInt ? n.ts = "number" == typeof e.ts ? BigInt(e.ts) : a.Long.fromBits(e.ts.low >>> 0, e.ts.high >>> 0, !1).toBigInt() : "number" == typeof e.ts ? n.ts = t.longs === String ? String(e.ts) : e.ts : n.ts = t.longs === String ? a.Long.prototype.toString.call(e.ts) : t.longs === Number ? new a.LongBits(e.ts.low >>> 0, e.ts.high >>> 0).toNumber() : e.ts);
null != e.finalActiveTs && Object.hasOwnProperty.call(e, "finalActiveTs") && ("undefined" != typeof BigInt && t.longs === BigInt ? n.finalActiveTs = "number" == typeof e.finalActiveTs ? BigInt(e.finalActiveTs) : a.Long.fromBits(e.finalActiveTs.low >>> 0, e.finalActiveTs.high >>> 0, !1).toBigInt() : "number" == typeof e.finalActiveTs ? n.finalActiveTs = t.longs === String ? String(e.finalActiveTs) : e.finalActiveTs : n.finalActiveTs = t.longs === String ? a.Long.prototype.toString.call(e.finalActiveTs) : t.longs === Number ? new a.LongBits(e.finalActiveTs.low >>> 0, e.finalActiveTs.high >>> 0).toNumber() : e.finalActiveTs);
return n;
};
e.prototype.toJSON = function() {
return this.constructor.toObject(this, r.util.toJSONOptions);
};
e.getTypeUrl = function(e) {
void 0 === e && (e = "type.googleapis.com");
return e + "/ModelFeature.SessionInfo";
};
return e;
}();
e.FirstEnterInfo = function() {
function e(e) {
if (e) for (var t = Object.keys(e), r = 0; r < t.length; ++r) null != e[t[r]] && "__proto__" !== t[r] && (this[t[r]] = e[t[r]]);
}
e.prototype.installTs = a.Long ? a.Long.fromBits(0, 0, !1) : 0;
e.prototype.firstColdStartTs = a.Long ? a.Long.fromBits(0, 0, !1) : 0;
e.prototype.firstGameTs = a.Long ? a.Long.fromBits(0, 0, !1) : 0;
e.create = function(t) {
return new e(t);
};
e.encode = function(e, t, r) {
t || (t = o.create());
void 0 === r && (r = 0);
if (r > a.recursionLimit) throw Error("max depth exceeded");
null != e.installTs && Object.hasOwnProperty.call(e, "installTs") && t.uint32(8).int64(e.installTs);
null != e.firstColdStartTs && Object.hasOwnProperty.call(e, "firstColdStartTs") && t.uint32(16).int64(e.firstColdStartTs);
null != e.firstGameTs && Object.hasOwnProperty.call(e, "firstGameTs") && t.uint32(24).int64(e.firstGameTs);
return t;
};
e.encodeDelimited = function(e, t) {
return this.encode(e, t && t.len ? t.fork() : t).ldelim();
};
e.decode = function(e, t, r, o) {
e instanceof n || (e = n.create(e));
void 0 === o && (o = 0);
if (o > n.recursionLimit) throw Error("maximum nesting depth exceeded");
for (var a = void 0 === t ? e.len : e.pos + t, s = new i.ModelFeature.FirstEnterInfo(); e.pos < a; ) {
var l = e.uint32();
if (l === r) break;
switch (l >>> 3) {
case 1:
s.installTs = e.int64();
break;

case 2:
s.firstColdStartTs = e.int64();
break;

case 3:
s.firstGameTs = e.int64();
break;

default:
e.skipType(7 & l, o);
}
}
return s;
};
e.decodeDelimited = function(e) {
e instanceof n || (e = new n(e));
return this.decode(e, e.uint32());
};
e.verify = function(e, t) {
if ("object" != typeof e || null === e) return "object expected";
void 0 === t && (t = 0);
return t > a.recursionLimit ? "maximum nesting depth exceeded" : null != e.installTs && Object.hasOwnProperty.call(e, "installTs") && !(a.isInteger(e.installTs) || e.installTs && a.isInteger(e.installTs.low) && a.isInteger(e.installTs.high)) ? "installTs: integer|Long expected" : null != e.firstColdStartTs && Object.hasOwnProperty.call(e, "firstColdStartTs") && !(a.isInteger(e.firstColdStartTs) || e.firstColdStartTs && a.isInteger(e.firstColdStartTs.low) && a.isInteger(e.firstColdStartTs.high)) ? "firstColdStartTs: integer|Long expected" : null != e.firstGameTs && Object.hasOwnProperty.call(e, "firstGameTs") && !(a.isInteger(e.firstGameTs) || e.firstGameTs && a.isInteger(e.firstGameTs.low) && a.isInteger(e.firstGameTs.high)) ? "firstGameTs: integer|Long expected" : null;
};
e.fromObject = function(e, t) {
if (e instanceof i.ModelFeature.FirstEnterInfo) return e;
if (!a.isObject(e)) throw TypeError(".ModelFeature.FirstEnterInfo: object expected");
void 0 === t && (t = 0);
if (t > a.recursionLimit) throw Error("maximum nesting depth exceeded");
var r = new i.ModelFeature.FirstEnterInfo();
null != e.installTs && (a.Long ? r.installTs = a.Long.fromValue(e.installTs, !1) : "string" == typeof e.installTs ? r.installTs = parseInt(e.installTs, 10) : "number" == typeof e.installTs ? r.installTs = e.installTs : "object" == typeof e.installTs && (r.installTs = new a.LongBits(e.installTs.low >>> 0, e.installTs.high >>> 0).toNumber()));
null != e.firstColdStartTs && (a.Long ? r.firstColdStartTs = a.Long.fromValue(e.firstColdStartTs, !1) : "string" == typeof e.firstColdStartTs ? r.firstColdStartTs = parseInt(e.firstColdStartTs, 10) : "number" == typeof e.firstColdStartTs ? r.firstColdStartTs = e.firstColdStartTs : "object" == typeof e.firstColdStartTs && (r.firstColdStartTs = new a.LongBits(e.firstColdStartTs.low >>> 0, e.firstColdStartTs.high >>> 0).toNumber()));
null != e.firstGameTs && (a.Long ? r.firstGameTs = a.Long.fromValue(e.firstGameTs, !1) : "string" == typeof e.firstGameTs ? r.firstGameTs = parseInt(e.firstGameTs, 10) : "number" == typeof e.firstGameTs ? r.firstGameTs = e.firstGameTs : "object" == typeof e.firstGameTs && (r.firstGameTs = new a.LongBits(e.firstGameTs.low >>> 0, e.firstGameTs.high >>> 0).toNumber()));
return r;
};
e.toObject = function(e, t, r) {
t || (t = {});
void 0 === r && (r = 0);
if (r > a.recursionLimit) throw Error("max depth exceeded");
var n = {};
if (t.defaults) {
if (a.Long) {
var o = new a.Long(0, 0, !1);
n.installTs = t.longs === String ? o.toString() : t.longs === Number ? o.toNumber() : "undefined" != typeof BigInt && t.longs === BigInt ? o.toBigInt() : o;
} else n.installTs = t.longs === String ? "0" : "undefined" != typeof BigInt && t.longs === BigInt ? BigInt("0") : 0;
if (a.Long) {
o = new a.Long(0, 0, !1);
n.firstColdStartTs = t.longs === String ? o.toString() : t.longs === Number ? o.toNumber() : "undefined" != typeof BigInt && t.longs === BigInt ? o.toBigInt() : o;
} else n.firstColdStartTs = t.longs === String ? "0" : "undefined" != typeof BigInt && t.longs === BigInt ? BigInt("0") : 0;
if (a.Long) {
o = new a.Long(0, 0, !1);
n.firstGameTs = t.longs === String ? o.toString() : t.longs === Number ? o.toNumber() : "undefined" != typeof BigInt && t.longs === BigInt ? o.toBigInt() : o;
} else n.firstGameTs = t.longs === String ? "0" : "undefined" != typeof BigInt && t.longs === BigInt ? BigInt("0") : 0;
}
null != e.installTs && Object.hasOwnProperty.call(e, "installTs") && ("undefined" != typeof BigInt && t.longs === BigInt ? n.installTs = "number" == typeof e.installTs ? BigInt(e.installTs) : a.Long.fromBits(e.installTs.low >>> 0, e.installTs.high >>> 0, !1).toBigInt() : "number" == typeof e.installTs ? n.installTs = t.longs === String ? String(e.installTs) : e.installTs : n.installTs = t.longs === String ? a.Long.prototype.toString.call(e.installTs) : t.longs === Number ? new a.LongBits(e.installTs.low >>> 0, e.installTs.high >>> 0).toNumber() : e.installTs);
null != e.firstColdStartTs && Object.hasOwnProperty.call(e, "firstColdStartTs") && ("undefined" != typeof BigInt && t.longs === BigInt ? n.firstColdStartTs = "number" == typeof e.firstColdStartTs ? BigInt(e.firstColdStartTs) : a.Long.fromBits(e.firstColdStartTs.low >>> 0, e.firstColdStartTs.high >>> 0, !1).toBigInt() : "number" == typeof e.firstColdStartTs ? n.firstColdStartTs = t.longs === String ? String(e.firstColdStartTs) : e.firstColdStartTs : n.firstColdStartTs = t.longs === String ? a.Long.prototype.toString.call(e.firstColdStartTs) : t.longs === Number ? new a.LongBits(e.firstColdStartTs.low >>> 0, e.firstColdStartTs.high >>> 0).toNumber() : e.firstColdStartTs);
null != e.firstGameTs && Object.hasOwnProperty.call(e, "firstGameTs") && ("undefined" != typeof BigInt && t.longs === BigInt ? n.firstGameTs = "number" == typeof e.firstGameTs ? BigInt(e.firstGameTs) : a.Long.fromBits(e.firstGameTs.low >>> 0, e.firstGameTs.high >>> 0, !1).toBigInt() : "number" == typeof e.firstGameTs ? n.firstGameTs = t.longs === String ? String(e.firstGameTs) : e.firstGameTs : n.firstGameTs = t.longs === String ? a.Long.prototype.toString.call(e.firstGameTs) : t.longs === Number ? new a.LongBits(e.firstGameTs.low >>> 0, e.firstGameTs.high >>> 0).toNumber() : e.firstGameTs);
return n;
};
e.prototype.toJSON = function() {
return this.constructor.toObject(this, r.util.toJSONOptions);
};
e.getTypeUrl = function(e) {
void 0 === e && (e = "type.googleapis.com");
return e + "/ModelFeature.FirstEnterInfo";
};
return e;
}();
e.PendingGameInfo = function() {
function e(e) {
if (e) for (var t = Object.keys(e), r = 0; r < t.length; ++r) null != e[t[r]] && "__proto__" !== t[r] && (this[t[r]] = e[t[r]]);
}
e.prototype.gameInfo = null;
e.prototype.activeRound = null;
e.prototype.gameStartTime = a.Long ? a.Long.fromBits(0, 0, !1) : 0;
e.create = function(t) {
return new e(t);
};
e.encode = function(e, t, r) {
t || (t = o.create());
void 0 === r && (r = 0);
if (r > a.recursionLimit) throw Error("max depth exceeded");
null != e.gameInfo && Object.hasOwnProperty.call(e, "gameInfo") && i.ModelFeature.GameInfoSet.encode(e.gameInfo, t.uint32(10).fork(), r + 1).ldelim();
null != e.activeRound && Object.hasOwnProperty.call(e, "activeRound") && i.ModelFeature.RoundInfo.encode(e.activeRound, t.uint32(18).fork(), r + 1).ldelim();
null != e.gameStartTime && Object.hasOwnProperty.call(e, "gameStartTime") && t.uint32(24).int64(e.gameStartTime);
return t;
};
e.encodeDelimited = function(e, t) {
return this.encode(e, t && t.len ? t.fork() : t).ldelim();
};
e.decode = function(e, t, r, o) {
e instanceof n || (e = n.create(e));
void 0 === o && (o = 0);
if (o > n.recursionLimit) throw Error("maximum nesting depth exceeded");
for (var a = void 0 === t ? e.len : e.pos + t, s = new i.ModelFeature.PendingGameInfo(); e.pos < a; ) {
var l = e.uint32();
if (l === r) break;
switch (l >>> 3) {
case 1:
s.gameInfo = i.ModelFeature.GameInfoSet.decode(e, e.uint32(), void 0, o + 1);
break;

case 2:
s.activeRound = i.ModelFeature.RoundInfo.decode(e, e.uint32(), void 0, o + 1);
break;

case 3:
s.gameStartTime = e.int64();
break;

default:
e.skipType(7 & l, o);
}
}
return s;
};
e.decodeDelimited = function(e) {
e instanceof n || (e = new n(e));
return this.decode(e, e.uint32());
};
e.verify = function(e, t) {
if ("object" != typeof e || null === e) return "object expected";
void 0 === t && (t = 0);
if (t > a.recursionLimit) return "maximum nesting depth exceeded";
if (null != e.gameInfo && Object.hasOwnProperty.call(e, "gameInfo") && (r = i.ModelFeature.GameInfoSet.verify(e.gameInfo, t + 1))) return "gameInfo." + r;
if (null != e.activeRound && Object.hasOwnProperty.call(e, "activeRound")) {
var r;
if (r = i.ModelFeature.RoundInfo.verify(e.activeRound, t + 1)) return "activeRound." + r;
}
return null != e.gameStartTime && Object.hasOwnProperty.call(e, "gameStartTime") && !(a.isInteger(e.gameStartTime) || e.gameStartTime && a.isInteger(e.gameStartTime.low) && a.isInteger(e.gameStartTime.high)) ? "gameStartTime: integer|Long expected" : null;
};
e.fromObject = function(e, t) {
if (e instanceof i.ModelFeature.PendingGameInfo) return e;
if (!a.isObject(e)) throw TypeError(".ModelFeature.PendingGameInfo: object expected");
void 0 === t && (t = 0);
if (t > a.recursionLimit) throw Error("maximum nesting depth exceeded");
var r = new i.ModelFeature.PendingGameInfo();
if (null != e.gameInfo) {
if (!a.isObject(e.gameInfo)) throw TypeError(".ModelFeature.PendingGameInfo.gameInfo: object expected");
r.gameInfo = i.ModelFeature.GameInfoSet.fromObject(e.gameInfo, t + 1);
}
if (null != e.activeRound) {
if (!a.isObject(e.activeRound)) throw TypeError(".ModelFeature.PendingGameInfo.activeRound: object expected");
r.activeRound = i.ModelFeature.RoundInfo.fromObject(e.activeRound, t + 1);
}
null != e.gameStartTime && (a.Long ? r.gameStartTime = a.Long.fromValue(e.gameStartTime, !1) : "string" == typeof e.gameStartTime ? r.gameStartTime = parseInt(e.gameStartTime, 10) : "number" == typeof e.gameStartTime ? r.gameStartTime = e.gameStartTime : "object" == typeof e.gameStartTime && (r.gameStartTime = new a.LongBits(e.gameStartTime.low >>> 0, e.gameStartTime.high >>> 0).toNumber()));
return r;
};
e.toObject = function(e, t, r) {
t || (t = {});
void 0 === r && (r = 0);
if (r > a.recursionLimit) throw Error("max depth exceeded");
var n = {};
if (t.defaults) {
n.gameInfo = null;
n.activeRound = null;
if (a.Long) {
var o = new a.Long(0, 0, !1);
n.gameStartTime = t.longs === String ? o.toString() : t.longs === Number ? o.toNumber() : "undefined" != typeof BigInt && t.longs === BigInt ? o.toBigInt() : o;
} else n.gameStartTime = t.longs === String ? "0" : "undefined" != typeof BigInt && t.longs === BigInt ? BigInt("0") : 0;
}
null != e.gameInfo && Object.hasOwnProperty.call(e, "gameInfo") && (n.gameInfo = i.ModelFeature.GameInfoSet.toObject(e.gameInfo, t, r + 1));
null != e.activeRound && Object.hasOwnProperty.call(e, "activeRound") && (n.activeRound = i.ModelFeature.RoundInfo.toObject(e.activeRound, t, r + 1));
null != e.gameStartTime && Object.hasOwnProperty.call(e, "gameStartTime") && ("undefined" != typeof BigInt && t.longs === BigInt ? n.gameStartTime = "number" == typeof e.gameStartTime ? BigInt(e.gameStartTime) : a.Long.fromBits(e.gameStartTime.low >>> 0, e.gameStartTime.high >>> 0, !1).toBigInt() : "number" == typeof e.gameStartTime ? n.gameStartTime = t.longs === String ? String(e.gameStartTime) : e.gameStartTime : n.gameStartTime = t.longs === String ? a.Long.prototype.toString.call(e.gameStartTime) : t.longs === Number ? new a.LongBits(e.gameStartTime.low >>> 0, e.gameStartTime.high >>> 0).toNumber() : e.gameStartTime);
return n;
};
e.prototype.toJSON = function() {
return this.constructor.toObject(this, r.util.toJSONOptions);
};
e.getTypeUrl = function(e) {
void 0 === e && (e = "type.googleapis.com");
return e + "/ModelFeature.PendingGameInfo";
};
return e;
}();
e.BaseEntireCareerInfo = function() {
function e(e) {
if (e) for (var t = Object.keys(e), r = 0; r < t.length; ++r) null != e[t[r]] && "__proto__" !== t[r] && (this[t[r]] = e[t[r]]);
}
e.prototype.classInfo = null;
e.prototype.chapterInfo = null;
e.prototype.totalSessionCnt = a.Long ? a.Long.fromBits(0, 0, !1) : 0;
e.create = function(t) {
return new e(t);
};
e.encode = function(e, t, r) {
t || (t = o.create());
void 0 === r && (r = 0);
if (r > a.recursionLimit) throw Error("max depth exceeded");
null != e.classInfo && Object.hasOwnProperty.call(e, "classInfo") && i.ModelFeature.ClassEntireCareerInfo.encode(e.classInfo, t.uint32(10).fork(), r + 1).ldelim();
null != e.chapterInfo && Object.hasOwnProperty.call(e, "chapterInfo") && i.ModelFeature.ChapterEntireCareerInfo.encode(e.chapterInfo, t.uint32(18).fork(), r + 1).ldelim();
null != e.totalSessionCnt && Object.hasOwnProperty.call(e, "totalSessionCnt") && t.uint32(24).int64(e.totalSessionCnt);
return t;
};
e.encodeDelimited = function(e, t) {
return this.encode(e, t && t.len ? t.fork() : t).ldelim();
};
e.decode = function(e, t, r, o) {
e instanceof n || (e = n.create(e));
void 0 === o && (o = 0);
if (o > n.recursionLimit) throw Error("maximum nesting depth exceeded");
for (var a = void 0 === t ? e.len : e.pos + t, s = new i.ModelFeature.BaseEntireCareerInfo(); e.pos < a; ) {
var l = e.uint32();
if (l === r) break;
switch (l >>> 3) {
case 1:
s.classInfo = i.ModelFeature.ClassEntireCareerInfo.decode(e, e.uint32(), void 0, o + 1);
break;

case 2:
s.chapterInfo = i.ModelFeature.ChapterEntireCareerInfo.decode(e, e.uint32(), void 0, o + 1);
break;

case 3:
s.totalSessionCnt = e.int64();
break;

default:
e.skipType(7 & l, o);
}
}
return s;
};
e.decodeDelimited = function(e) {
e instanceof n || (e = new n(e));
return this.decode(e, e.uint32());
};
e.verify = function(e, t) {
if ("object" != typeof e || null === e) return "object expected";
void 0 === t && (t = 0);
if (t > a.recursionLimit) return "maximum nesting depth exceeded";
if (null != e.classInfo && Object.hasOwnProperty.call(e, "classInfo") && (r = i.ModelFeature.ClassEntireCareerInfo.verify(e.classInfo, t + 1))) return "classInfo." + r;
if (null != e.chapterInfo && Object.hasOwnProperty.call(e, "chapterInfo")) {
var r;
if (r = i.ModelFeature.ChapterEntireCareerInfo.verify(e.chapterInfo, t + 1)) return "chapterInfo." + r;
}
return null != e.totalSessionCnt && Object.hasOwnProperty.call(e, "totalSessionCnt") && !(a.isInteger(e.totalSessionCnt) || e.totalSessionCnt && a.isInteger(e.totalSessionCnt.low) && a.isInteger(e.totalSessionCnt.high)) ? "totalSessionCnt: integer|Long expected" : null;
};
e.fromObject = function(e, t) {
if (e instanceof i.ModelFeature.BaseEntireCareerInfo) return e;
if (!a.isObject(e)) throw TypeError(".ModelFeature.BaseEntireCareerInfo: object expected");
void 0 === t && (t = 0);
if (t > a.recursionLimit) throw Error("maximum nesting depth exceeded");
var r = new i.ModelFeature.BaseEntireCareerInfo();
if (null != e.classInfo) {
if (!a.isObject(e.classInfo)) throw TypeError(".ModelFeature.BaseEntireCareerInfo.classInfo: object expected");
r.classInfo = i.ModelFeature.ClassEntireCareerInfo.fromObject(e.classInfo, t + 1);
}
if (null != e.chapterInfo) {
if (!a.isObject(e.chapterInfo)) throw TypeError(".ModelFeature.BaseEntireCareerInfo.chapterInfo: object expected");
r.chapterInfo = i.ModelFeature.ChapterEntireCareerInfo.fromObject(e.chapterInfo, t + 1);
}
null != e.totalSessionCnt && (a.Long ? r.totalSessionCnt = a.Long.fromValue(e.totalSessionCnt, !1) : "string" == typeof e.totalSessionCnt ? r.totalSessionCnt = parseInt(e.totalSessionCnt, 10) : "number" == typeof e.totalSessionCnt ? r.totalSessionCnt = e.totalSessionCnt : "object" == typeof e.totalSessionCnt && (r.totalSessionCnt = new a.LongBits(e.totalSessionCnt.low >>> 0, e.totalSessionCnt.high >>> 0).toNumber()));
return r;
};
e.toObject = function(e, t, r) {
t || (t = {});
void 0 === r && (r = 0);
if (r > a.recursionLimit) throw Error("max depth exceeded");
var n = {};
if (t.defaults) {
n.classInfo = null;
n.chapterInfo = null;
if (a.Long) {
var o = new a.Long(0, 0, !1);
n.totalSessionCnt = t.longs === String ? o.toString() : t.longs === Number ? o.toNumber() : "undefined" != typeof BigInt && t.longs === BigInt ? o.toBigInt() : o;
} else n.totalSessionCnt = t.longs === String ? "0" : "undefined" != typeof BigInt && t.longs === BigInt ? BigInt("0") : 0;
}
null != e.classInfo && Object.hasOwnProperty.call(e, "classInfo") && (n.classInfo = i.ModelFeature.ClassEntireCareerInfo.toObject(e.classInfo, t, r + 1));
null != e.chapterInfo && Object.hasOwnProperty.call(e, "chapterInfo") && (n.chapterInfo = i.ModelFeature.ChapterEntireCareerInfo.toObject(e.chapterInfo, t, r + 1));
null != e.totalSessionCnt && Object.hasOwnProperty.call(e, "totalSessionCnt") && ("undefined" != typeof BigInt && t.longs === BigInt ? n.totalSessionCnt = "number" == typeof e.totalSessionCnt ? BigInt(e.totalSessionCnt) : a.Long.fromBits(e.totalSessionCnt.low >>> 0, e.totalSessionCnt.high >>> 0, !1).toBigInt() : "number" == typeof e.totalSessionCnt ? n.totalSessionCnt = t.longs === String ? String(e.totalSessionCnt) : e.totalSessionCnt : n.totalSessionCnt = t.longs === String ? a.Long.prototype.toString.call(e.totalSessionCnt) : t.longs === Number ? new a.LongBits(e.totalSessionCnt.low >>> 0, e.totalSessionCnt.high >>> 0).toNumber() : e.totalSessionCnt);
return n;
};
e.prototype.toJSON = function() {
return this.constructor.toObject(this, r.util.toJSONOptions);
};
e.getTypeUrl = function(e) {
void 0 === e && (e = "type.googleapis.com");
return e + "/ModelFeature.BaseEntireCareerInfo";
};
return e;
}();
e.ClassEntireCareerInfo = function() {
function e(e) {
if (e) for (var t = Object.keys(e), r = 0; r < t.length; ++r) null != e[t[r]] && "__proto__" !== t[r] && (this[t[r]] = e[t[r]]);
}
e.prototype.totalGameTimeNoReplay = a.Long ? a.Long.fromBits(0, 0, !1) : 0;
e.prototype.totalGameTimesReplay = a.Long ? a.Long.fromBits(0, 0, !1) : 0;
e.prototype.totalReviveClickCnt = 0;
e.prototype.totalReviveSuccessCnt = 0;
e.prototype.maxGameTime = a.Long ? a.Long.fromBits(0, 0, !1) : 0;
e.prototype.minGameTime = a.Long ? a.Long.fromBits(0, 0, !1) : 0;
e.prototype.totalGameCnt = 0;
e.create = function(t) {
return new e(t);
};
e.encode = function(e, t, r) {
t || (t = o.create());
void 0 === r && (r = 0);
if (r > a.recursionLimit) throw Error("max depth exceeded");
null != e.totalGameTimeNoReplay && Object.hasOwnProperty.call(e, "totalGameTimeNoReplay") && t.uint32(8).int64(e.totalGameTimeNoReplay);
null != e.totalGameTimesReplay && Object.hasOwnProperty.call(e, "totalGameTimesReplay") && t.uint32(16).int64(e.totalGameTimesReplay);
null != e.totalReviveClickCnt && Object.hasOwnProperty.call(e, "totalReviveClickCnt") && t.uint32(24).int32(e.totalReviveClickCnt);
null != e.totalReviveSuccessCnt && Object.hasOwnProperty.call(e, "totalReviveSuccessCnt") && t.uint32(32).int32(e.totalReviveSuccessCnt);
null != e.maxGameTime && Object.hasOwnProperty.call(e, "maxGameTime") && t.uint32(40).int64(e.maxGameTime);
null != e.minGameTime && Object.hasOwnProperty.call(e, "minGameTime") && t.uint32(48).int64(e.minGameTime);
null != e.totalGameCnt && Object.hasOwnProperty.call(e, "totalGameCnt") && t.uint32(56).int32(e.totalGameCnt);
return t;
};
e.encodeDelimited = function(e, t) {
return this.encode(e, t && t.len ? t.fork() : t).ldelim();
};
e.decode = function(e, t, r, o) {
e instanceof n || (e = n.create(e));
void 0 === o && (o = 0);
if (o > n.recursionLimit) throw Error("maximum nesting depth exceeded");
for (var a = void 0 === t ? e.len : e.pos + t, s = new i.ModelFeature.ClassEntireCareerInfo(); e.pos < a; ) {
var l = e.uint32();
if (l === r) break;
switch (l >>> 3) {
case 1:
s.totalGameTimeNoReplay = e.int64();
break;

case 2:
s.totalGameTimesReplay = e.int64();
break;

case 3:
s.totalReviveClickCnt = e.int32();
break;

case 4:
s.totalReviveSuccessCnt = e.int32();
break;

case 5:
s.maxGameTime = e.int64();
break;

case 6:
s.minGameTime = e.int64();
break;

case 7:
s.totalGameCnt = e.int32();
break;

default:
e.skipType(7 & l, o);
}
}
return s;
};
e.decodeDelimited = function(e) {
e instanceof n || (e = new n(e));
return this.decode(e, e.uint32());
};
e.verify = function(e, t) {
if ("object" != typeof e || null === e) return "object expected";
void 0 === t && (t = 0);
return t > a.recursionLimit ? "maximum nesting depth exceeded" : null != e.totalGameTimeNoReplay && Object.hasOwnProperty.call(e, "totalGameTimeNoReplay") && !(a.isInteger(e.totalGameTimeNoReplay) || e.totalGameTimeNoReplay && a.isInteger(e.totalGameTimeNoReplay.low) && a.isInteger(e.totalGameTimeNoReplay.high)) ? "totalGameTimeNoReplay: integer|Long expected" : null != e.totalGameTimesReplay && Object.hasOwnProperty.call(e, "totalGameTimesReplay") && !(a.isInteger(e.totalGameTimesReplay) || e.totalGameTimesReplay && a.isInteger(e.totalGameTimesReplay.low) && a.isInteger(e.totalGameTimesReplay.high)) ? "totalGameTimesReplay: integer|Long expected" : null != e.totalReviveClickCnt && Object.hasOwnProperty.call(e, "totalReviveClickCnt") && !a.isInteger(e.totalReviveClickCnt) ? "totalReviveClickCnt: integer expected" : null != e.totalReviveSuccessCnt && Object.hasOwnProperty.call(e, "totalReviveSuccessCnt") && !a.isInteger(e.totalReviveSuccessCnt) ? "totalReviveSuccessCnt: integer expected" : null != e.maxGameTime && Object.hasOwnProperty.call(e, "maxGameTime") && !(a.isInteger(e.maxGameTime) || e.maxGameTime && a.isInteger(e.maxGameTime.low) && a.isInteger(e.maxGameTime.high)) ? "maxGameTime: integer|Long expected" : null != e.minGameTime && Object.hasOwnProperty.call(e, "minGameTime") && !(a.isInteger(e.minGameTime) || e.minGameTime && a.isInteger(e.minGameTime.low) && a.isInteger(e.minGameTime.high)) ? "minGameTime: integer|Long expected" : null != e.totalGameCnt && Object.hasOwnProperty.call(e, "totalGameCnt") && !a.isInteger(e.totalGameCnt) ? "totalGameCnt: integer expected" : null;
};
e.fromObject = function(e, t) {
if (e instanceof i.ModelFeature.ClassEntireCareerInfo) return e;
if (!a.isObject(e)) throw TypeError(".ModelFeature.ClassEntireCareerInfo: object expected");
void 0 === t && (t = 0);
if (t > a.recursionLimit) throw Error("maximum nesting depth exceeded");
var r = new i.ModelFeature.ClassEntireCareerInfo();
null != e.totalGameTimeNoReplay && (a.Long ? r.totalGameTimeNoReplay = a.Long.fromValue(e.totalGameTimeNoReplay, !1) : "string" == typeof e.totalGameTimeNoReplay ? r.totalGameTimeNoReplay = parseInt(e.totalGameTimeNoReplay, 10) : "number" == typeof e.totalGameTimeNoReplay ? r.totalGameTimeNoReplay = e.totalGameTimeNoReplay : "object" == typeof e.totalGameTimeNoReplay && (r.totalGameTimeNoReplay = new a.LongBits(e.totalGameTimeNoReplay.low >>> 0, e.totalGameTimeNoReplay.high >>> 0).toNumber()));
null != e.totalGameTimesReplay && (a.Long ? r.totalGameTimesReplay = a.Long.fromValue(e.totalGameTimesReplay, !1) : "string" == typeof e.totalGameTimesReplay ? r.totalGameTimesReplay = parseInt(e.totalGameTimesReplay, 10) : "number" == typeof e.totalGameTimesReplay ? r.totalGameTimesReplay = e.totalGameTimesReplay : "object" == typeof e.totalGameTimesReplay && (r.totalGameTimesReplay = new a.LongBits(e.totalGameTimesReplay.low >>> 0, e.totalGameTimesReplay.high >>> 0).toNumber()));
null != e.totalReviveClickCnt && (r.totalReviveClickCnt = 0 | e.totalReviveClickCnt);
null != e.totalReviveSuccessCnt && (r.totalReviveSuccessCnt = 0 | e.totalReviveSuccessCnt);
null != e.maxGameTime && (a.Long ? r.maxGameTime = a.Long.fromValue(e.maxGameTime, !1) : "string" == typeof e.maxGameTime ? r.maxGameTime = parseInt(e.maxGameTime, 10) : "number" == typeof e.maxGameTime ? r.maxGameTime = e.maxGameTime : "object" == typeof e.maxGameTime && (r.maxGameTime = new a.LongBits(e.maxGameTime.low >>> 0, e.maxGameTime.high >>> 0).toNumber()));
null != e.minGameTime && (a.Long ? r.minGameTime = a.Long.fromValue(e.minGameTime, !1) : "string" == typeof e.minGameTime ? r.minGameTime = parseInt(e.minGameTime, 10) : "number" == typeof e.minGameTime ? r.minGameTime = e.minGameTime : "object" == typeof e.minGameTime && (r.minGameTime = new a.LongBits(e.minGameTime.low >>> 0, e.minGameTime.high >>> 0).toNumber()));
null != e.totalGameCnt && (r.totalGameCnt = 0 | e.totalGameCnt);
return r;
};
e.toObject = function(e, t, r) {
t || (t = {});
void 0 === r && (r = 0);
if (r > a.recursionLimit) throw Error("max depth exceeded");
var n = {};
if (t.defaults) {
if (a.Long) {
var o = new a.Long(0, 0, !1);
n.totalGameTimeNoReplay = t.longs === String ? o.toString() : t.longs === Number ? o.toNumber() : "undefined" != typeof BigInt && t.longs === BigInt ? o.toBigInt() : o;
} else n.totalGameTimeNoReplay = t.longs === String ? "0" : "undefined" != typeof BigInt && t.longs === BigInt ? BigInt("0") : 0;
if (a.Long) {
o = new a.Long(0, 0, !1);
n.totalGameTimesReplay = t.longs === String ? o.toString() : t.longs === Number ? o.toNumber() : "undefined" != typeof BigInt && t.longs === BigInt ? o.toBigInt() : o;
} else n.totalGameTimesReplay = t.longs === String ? "0" : "undefined" != typeof BigInt && t.longs === BigInt ? BigInt("0") : 0;
n.totalReviveClickCnt = 0;
n.totalReviveSuccessCnt = 0;
if (a.Long) {
o = new a.Long(0, 0, !1);
n.maxGameTime = t.longs === String ? o.toString() : t.longs === Number ? o.toNumber() : "undefined" != typeof BigInt && t.longs === BigInt ? o.toBigInt() : o;
} else n.maxGameTime = t.longs === String ? "0" : "undefined" != typeof BigInt && t.longs === BigInt ? BigInt("0") : 0;
if (a.Long) {
o = new a.Long(0, 0, !1);
n.minGameTime = t.longs === String ? o.toString() : t.longs === Number ? o.toNumber() : "undefined" != typeof BigInt && t.longs === BigInt ? o.toBigInt() : o;
} else n.minGameTime = t.longs === String ? "0" : "undefined" != typeof BigInt && t.longs === BigInt ? BigInt("0") : 0;
n.totalGameCnt = 0;
}
null != e.totalGameTimeNoReplay && Object.hasOwnProperty.call(e, "totalGameTimeNoReplay") && ("undefined" != typeof BigInt && t.longs === BigInt ? n.totalGameTimeNoReplay = "number" == typeof e.totalGameTimeNoReplay ? BigInt(e.totalGameTimeNoReplay) : a.Long.fromBits(e.totalGameTimeNoReplay.low >>> 0, e.totalGameTimeNoReplay.high >>> 0, !1).toBigInt() : "number" == typeof e.totalGameTimeNoReplay ? n.totalGameTimeNoReplay = t.longs === String ? String(e.totalGameTimeNoReplay) : e.totalGameTimeNoReplay : n.totalGameTimeNoReplay = t.longs === String ? a.Long.prototype.toString.call(e.totalGameTimeNoReplay) : t.longs === Number ? new a.LongBits(e.totalGameTimeNoReplay.low >>> 0, e.totalGameTimeNoReplay.high >>> 0).toNumber() : e.totalGameTimeNoReplay);
null != e.totalGameTimesReplay && Object.hasOwnProperty.call(e, "totalGameTimesReplay") && ("undefined" != typeof BigInt && t.longs === BigInt ? n.totalGameTimesReplay = "number" == typeof e.totalGameTimesReplay ? BigInt(e.totalGameTimesReplay) : a.Long.fromBits(e.totalGameTimesReplay.low >>> 0, e.totalGameTimesReplay.high >>> 0, !1).toBigInt() : "number" == typeof e.totalGameTimesReplay ? n.totalGameTimesReplay = t.longs === String ? String(e.totalGameTimesReplay) : e.totalGameTimesReplay : n.totalGameTimesReplay = t.longs === String ? a.Long.prototype.toString.call(e.totalGameTimesReplay) : t.longs === Number ? new a.LongBits(e.totalGameTimesReplay.low >>> 0, e.totalGameTimesReplay.high >>> 0).toNumber() : e.totalGameTimesReplay);
null != e.totalReviveClickCnt && Object.hasOwnProperty.call(e, "totalReviveClickCnt") && (n.totalReviveClickCnt = e.totalReviveClickCnt);
null != e.totalReviveSuccessCnt && Object.hasOwnProperty.call(e, "totalReviveSuccessCnt") && (n.totalReviveSuccessCnt = e.totalReviveSuccessCnt);
null != e.maxGameTime && Object.hasOwnProperty.call(e, "maxGameTime") && ("undefined" != typeof BigInt && t.longs === BigInt ? n.maxGameTime = "number" == typeof e.maxGameTime ? BigInt(e.maxGameTime) : a.Long.fromBits(e.maxGameTime.low >>> 0, e.maxGameTime.high >>> 0, !1).toBigInt() : "number" == typeof e.maxGameTime ? n.maxGameTime = t.longs === String ? String(e.maxGameTime) : e.maxGameTime : n.maxGameTime = t.longs === String ? a.Long.prototype.toString.call(e.maxGameTime) : t.longs === Number ? new a.LongBits(e.maxGameTime.low >>> 0, e.maxGameTime.high >>> 0).toNumber() : e.maxGameTime);
null != e.minGameTime && Object.hasOwnProperty.call(e, "minGameTime") && ("undefined" != typeof BigInt && t.longs === BigInt ? n.minGameTime = "number" == typeof e.minGameTime ? BigInt(e.minGameTime) : a.Long.fromBits(e.minGameTime.low >>> 0, e.minGameTime.high >>> 0, !1).toBigInt() : "number" == typeof e.minGameTime ? n.minGameTime = t.longs === String ? String(e.minGameTime) : e.minGameTime : n.minGameTime = t.longs === String ? a.Long.prototype.toString.call(e.minGameTime) : t.longs === Number ? new a.LongBits(e.minGameTime.low >>> 0, e.minGameTime.high >>> 0).toNumber() : e.minGameTime);
null != e.totalGameCnt && Object.hasOwnProperty.call(e, "totalGameCnt") && (n.totalGameCnt = e.totalGameCnt);
return n;
};
e.prototype.toJSON = function() {
return this.constructor.toObject(this, r.util.toJSONOptions);
};
e.getTypeUrl = function(e) {
void 0 === e && (e = "type.googleapis.com");
return e + "/ModelFeature.ClassEntireCareerInfo";
};
return e;
}();
e.ChapterEntireCareerInfo = function() {
function e(e) {
if (e) for (var t = Object.keys(e), r = 0; r < t.length; ++r) null != e[t[r]] && "__proto__" !== t[r] && (this[t[r]] = e[t[r]]);
}
e.prototype.totalGameTimesNoReplay = a.Long ? a.Long.fromBits(0, 0, !1) : 0;
e.prototype.totalGameTimesReplay = a.Long ? a.Long.fromBits(0, 0, !1) : 0;
e.prototype.totalReviveClickCnt = 0;
e.prototype.totalReviveSuccessCnt = 0;
e.prototype.maxGameTime = a.Long ? a.Long.fromBits(0, 0, !1) : 0;
e.prototype.minGameTime = a.Long ? a.Long.fromBits(0, 0, !1) : 0;
e.prototype.totalGameCnt = 0;
e.create = function(t) {
return new e(t);
};
e.encode = function(e, t, r) {
t || (t = o.create());
void 0 === r && (r = 0);
if (r > a.recursionLimit) throw Error("max depth exceeded");
null != e.totalGameTimesNoReplay && Object.hasOwnProperty.call(e, "totalGameTimesNoReplay") && t.uint32(8).int64(e.totalGameTimesNoReplay);
null != e.totalGameTimesReplay && Object.hasOwnProperty.call(e, "totalGameTimesReplay") && t.uint32(16).int64(e.totalGameTimesReplay);
null != e.totalReviveClickCnt && Object.hasOwnProperty.call(e, "totalReviveClickCnt") && t.uint32(24).int32(e.totalReviveClickCnt);
null != e.totalReviveSuccessCnt && Object.hasOwnProperty.call(e, "totalReviveSuccessCnt") && t.uint32(32).int32(e.totalReviveSuccessCnt);
null != e.maxGameTime && Object.hasOwnProperty.call(e, "maxGameTime") && t.uint32(40).int64(e.maxGameTime);
null != e.minGameTime && Object.hasOwnProperty.call(e, "minGameTime") && t.uint32(48).int64(e.minGameTime);
null != e.totalGameCnt && Object.hasOwnProperty.call(e, "totalGameCnt") && t.uint32(56).int32(e.totalGameCnt);
return t;
};
e.encodeDelimited = function(e, t) {
return this.encode(e, t && t.len ? t.fork() : t).ldelim();
};
e.decode = function(e, t, r, o) {
e instanceof n || (e = n.create(e));
void 0 === o && (o = 0);
if (o > n.recursionLimit) throw Error("maximum nesting depth exceeded");
for (var a = void 0 === t ? e.len : e.pos + t, s = new i.ModelFeature.ChapterEntireCareerInfo(); e.pos < a; ) {
var l = e.uint32();
if (l === r) break;
switch (l >>> 3) {
case 1:
s.totalGameTimesNoReplay = e.int64();
break;

case 2:
s.totalGameTimesReplay = e.int64();
break;

case 3:
s.totalReviveClickCnt = e.int32();
break;

case 4:
s.totalReviveSuccessCnt = e.int32();
break;

case 5:
s.maxGameTime = e.int64();
break;

case 6:
s.minGameTime = e.int64();
break;

case 7:
s.totalGameCnt = e.int32();
break;

default:
e.skipType(7 & l, o);
}
}
return s;
};
e.decodeDelimited = function(e) {
e instanceof n || (e = new n(e));
return this.decode(e, e.uint32());
};
e.verify = function(e, t) {
if ("object" != typeof e || null === e) return "object expected";
void 0 === t && (t = 0);
return t > a.recursionLimit ? "maximum nesting depth exceeded" : null != e.totalGameTimesNoReplay && Object.hasOwnProperty.call(e, "totalGameTimesNoReplay") && !(a.isInteger(e.totalGameTimesNoReplay) || e.totalGameTimesNoReplay && a.isInteger(e.totalGameTimesNoReplay.low) && a.isInteger(e.totalGameTimesNoReplay.high)) ? "totalGameTimesNoReplay: integer|Long expected" : null != e.totalGameTimesReplay && Object.hasOwnProperty.call(e, "totalGameTimesReplay") && !(a.isInteger(e.totalGameTimesReplay) || e.totalGameTimesReplay && a.isInteger(e.totalGameTimesReplay.low) && a.isInteger(e.totalGameTimesReplay.high)) ? "totalGameTimesReplay: integer|Long expected" : null != e.totalReviveClickCnt && Object.hasOwnProperty.call(e, "totalReviveClickCnt") && !a.isInteger(e.totalReviveClickCnt) ? "totalReviveClickCnt: integer expected" : null != e.totalReviveSuccessCnt && Object.hasOwnProperty.call(e, "totalReviveSuccessCnt") && !a.isInteger(e.totalReviveSuccessCnt) ? "totalReviveSuccessCnt: integer expected" : null != e.maxGameTime && Object.hasOwnProperty.call(e, "maxGameTime") && !(a.isInteger(e.maxGameTime) || e.maxGameTime && a.isInteger(e.maxGameTime.low) && a.isInteger(e.maxGameTime.high)) ? "maxGameTime: integer|Long expected" : null != e.minGameTime && Object.hasOwnProperty.call(e, "minGameTime") && !(a.isInteger(e.minGameTime) || e.minGameTime && a.isInteger(e.minGameTime.low) && a.isInteger(e.minGameTime.high)) ? "minGameTime: integer|Long expected" : null != e.totalGameCnt && Object.hasOwnProperty.call(e, "totalGameCnt") && !a.isInteger(e.totalGameCnt) ? "totalGameCnt: integer expected" : null;
};
e.fromObject = function(e, t) {
if (e instanceof i.ModelFeature.ChapterEntireCareerInfo) return e;
if (!a.isObject(e)) throw TypeError(".ModelFeature.ChapterEntireCareerInfo: object expected");
void 0 === t && (t = 0);
if (t > a.recursionLimit) throw Error("maximum nesting depth exceeded");
var r = new i.ModelFeature.ChapterEntireCareerInfo();
null != e.totalGameTimesNoReplay && (a.Long ? r.totalGameTimesNoReplay = a.Long.fromValue(e.totalGameTimesNoReplay, !1) : "string" == typeof e.totalGameTimesNoReplay ? r.totalGameTimesNoReplay = parseInt(e.totalGameTimesNoReplay, 10) : "number" == typeof e.totalGameTimesNoReplay ? r.totalGameTimesNoReplay = e.totalGameTimesNoReplay : "object" == typeof e.totalGameTimesNoReplay && (r.totalGameTimesNoReplay = new a.LongBits(e.totalGameTimesNoReplay.low >>> 0, e.totalGameTimesNoReplay.high >>> 0).toNumber()));
null != e.totalGameTimesReplay && (a.Long ? r.totalGameTimesReplay = a.Long.fromValue(e.totalGameTimesReplay, !1) : "string" == typeof e.totalGameTimesReplay ? r.totalGameTimesReplay = parseInt(e.totalGameTimesReplay, 10) : "number" == typeof e.totalGameTimesReplay ? r.totalGameTimesReplay = e.totalGameTimesReplay : "object" == typeof e.totalGameTimesReplay && (r.totalGameTimesReplay = new a.LongBits(e.totalGameTimesReplay.low >>> 0, e.totalGameTimesReplay.high >>> 0).toNumber()));
null != e.totalReviveClickCnt && (r.totalReviveClickCnt = 0 | e.totalReviveClickCnt);
null != e.totalReviveSuccessCnt && (r.totalReviveSuccessCnt = 0 | e.totalReviveSuccessCnt);
null != e.maxGameTime && (a.Long ? r.maxGameTime = a.Long.fromValue(e.maxGameTime, !1) : "string" == typeof e.maxGameTime ? r.maxGameTime = parseInt(e.maxGameTime, 10) : "number" == typeof e.maxGameTime ? r.maxGameTime = e.maxGameTime : "object" == typeof e.maxGameTime && (r.maxGameTime = new a.LongBits(e.maxGameTime.low >>> 0, e.maxGameTime.high >>> 0).toNumber()));
null != e.minGameTime && (a.Long ? r.minGameTime = a.Long.fromValue(e.minGameTime, !1) : "string" == typeof e.minGameTime ? r.minGameTime = parseInt(e.minGameTime, 10) : "number" == typeof e.minGameTime ? r.minGameTime = e.minGameTime : "object" == typeof e.minGameTime && (r.minGameTime = new a.LongBits(e.minGameTime.low >>> 0, e.minGameTime.high >>> 0).toNumber()));
null != e.totalGameCnt && (r.totalGameCnt = 0 | e.totalGameCnt);
return r;
};
e.toObject = function(e, t, r) {
t || (t = {});
void 0 === r && (r = 0);
if (r > a.recursionLimit) throw Error("max depth exceeded");
var n = {};
if (t.defaults) {
if (a.Long) {
var o = new a.Long(0, 0, !1);
n.totalGameTimesNoReplay = t.longs === String ? o.toString() : t.longs === Number ? o.toNumber() : "undefined" != typeof BigInt && t.longs === BigInt ? o.toBigInt() : o;
} else n.totalGameTimesNoReplay = t.longs === String ? "0" : "undefined" != typeof BigInt && t.longs === BigInt ? BigInt("0") : 0;
if (a.Long) {
o = new a.Long(0, 0, !1);
n.totalGameTimesReplay = t.longs === String ? o.toString() : t.longs === Number ? o.toNumber() : "undefined" != typeof BigInt && t.longs === BigInt ? o.toBigInt() : o;
} else n.totalGameTimesReplay = t.longs === String ? "0" : "undefined" != typeof BigInt && t.longs === BigInt ? BigInt("0") : 0;
n.totalReviveClickCnt = 0;
n.totalReviveSuccessCnt = 0;
if (a.Long) {
o = new a.Long(0, 0, !1);
n.maxGameTime = t.longs === String ? o.toString() : t.longs === Number ? o.toNumber() : "undefined" != typeof BigInt && t.longs === BigInt ? o.toBigInt() : o;
} else n.maxGameTime = t.longs === String ? "0" : "undefined" != typeof BigInt && t.longs === BigInt ? BigInt("0") : 0;
if (a.Long) {
o = new a.Long(0, 0, !1);
n.minGameTime = t.longs === String ? o.toString() : t.longs === Number ? o.toNumber() : "undefined" != typeof BigInt && t.longs === BigInt ? o.toBigInt() : o;
} else n.minGameTime = t.longs === String ? "0" : "undefined" != typeof BigInt && t.longs === BigInt ? BigInt("0") : 0;
n.totalGameCnt = 0;
}
null != e.totalGameTimesNoReplay && Object.hasOwnProperty.call(e, "totalGameTimesNoReplay") && ("undefined" != typeof BigInt && t.longs === BigInt ? n.totalGameTimesNoReplay = "number" == typeof e.totalGameTimesNoReplay ? BigInt(e.totalGameTimesNoReplay) : a.Long.fromBits(e.totalGameTimesNoReplay.low >>> 0, e.totalGameTimesNoReplay.high >>> 0, !1).toBigInt() : "number" == typeof e.totalGameTimesNoReplay ? n.totalGameTimesNoReplay = t.longs === String ? String(e.totalGameTimesNoReplay) : e.totalGameTimesNoReplay : n.totalGameTimesNoReplay = t.longs === String ? a.Long.prototype.toString.call(e.totalGameTimesNoReplay) : t.longs === Number ? new a.LongBits(e.totalGameTimesNoReplay.low >>> 0, e.totalGameTimesNoReplay.high >>> 0).toNumber() : e.totalGameTimesNoReplay);
null != e.totalGameTimesReplay && Object.hasOwnProperty.call(e, "totalGameTimesReplay") && ("undefined" != typeof BigInt && t.longs === BigInt ? n.totalGameTimesReplay = "number" == typeof e.totalGameTimesReplay ? BigInt(e.totalGameTimesReplay) : a.Long.fromBits(e.totalGameTimesReplay.low >>> 0, e.totalGameTimesReplay.high >>> 0, !1).toBigInt() : "number" == typeof e.totalGameTimesReplay ? n.totalGameTimesReplay = t.longs === String ? String(e.totalGameTimesReplay) : e.totalGameTimesReplay : n.totalGameTimesReplay = t.longs === String ? a.Long.prototype.toString.call(e.totalGameTimesReplay) : t.longs === Number ? new a.LongBits(e.totalGameTimesReplay.low >>> 0, e.totalGameTimesReplay.high >>> 0).toNumber() : e.totalGameTimesReplay);
null != e.totalReviveClickCnt && Object.hasOwnProperty.call(e, "totalReviveClickCnt") && (n.totalReviveClickCnt = e.totalReviveClickCnt);
null != e.totalReviveSuccessCnt && Object.hasOwnProperty.call(e, "totalReviveSuccessCnt") && (n.totalReviveSuccessCnt = e.totalReviveSuccessCnt);
null != e.maxGameTime && Object.hasOwnProperty.call(e, "maxGameTime") && ("undefined" != typeof BigInt && t.longs === BigInt ? n.maxGameTime = "number" == typeof e.maxGameTime ? BigInt(e.maxGameTime) : a.Long.fromBits(e.maxGameTime.low >>> 0, e.maxGameTime.high >>> 0, !1).toBigInt() : "number" == typeof e.maxGameTime ? n.maxGameTime = t.longs === String ? String(e.maxGameTime) : e.maxGameTime : n.maxGameTime = t.longs === String ? a.Long.prototype.toString.call(e.maxGameTime) : t.longs === Number ? new a.LongBits(e.maxGameTime.low >>> 0, e.maxGameTime.high >>> 0).toNumber() : e.maxGameTime);
null != e.minGameTime && Object.hasOwnProperty.call(e, "minGameTime") && ("undefined" != typeof BigInt && t.longs === BigInt ? n.minGameTime = "number" == typeof e.minGameTime ? BigInt(e.minGameTime) : a.Long.fromBits(e.minGameTime.low >>> 0, e.minGameTime.high >>> 0, !1).toBigInt() : "number" == typeof e.minGameTime ? n.minGameTime = t.longs === String ? String(e.minGameTime) : e.minGameTime : n.minGameTime = t.longs === String ? a.Long.prototype.toString.call(e.minGameTime) : t.longs === Number ? new a.LongBits(e.minGameTime.low >>> 0, e.minGameTime.high >>> 0).toNumber() : e.minGameTime);
null != e.totalGameCnt && Object.hasOwnProperty.call(e, "totalGameCnt") && (n.totalGameCnt = e.totalGameCnt);
return n;
};
e.prototype.toJSON = function() {
return this.constructor.toObject(this, r.util.toJSONOptions);
};
e.getTypeUrl = function(e) {
void 0 === e && (e = "type.googleapis.com");
return e + "/ModelFeature.ChapterEntireCareerInfo";
};
return e;
}();
e.AdSetInfo = function() {
function e(e) {
if (e) for (var t = Object.keys(e), r = 0; r < t.length; ++r) null != e[t[r]] && "__proto__" !== t[r] && (this[t[r]] = e[t[r]]);
}
e.prototype.inter = null;
e.prototype.reward = null;
e.prototype.banner = null;
e.create = function(t) {
return new e(t);
};
e.encode = function(e, t, r) {
t || (t = o.create());
void 0 === r && (r = 0);
if (r > a.recursionLimit) throw Error("max depth exceeded");
null != e.inter && Object.hasOwnProperty.call(e, "inter") && i.ModelFeature.AdTotalInfo.encode(e.inter, t.uint32(10).fork(), r + 1).ldelim();
null != e.reward && Object.hasOwnProperty.call(e, "reward") && i.ModelFeature.AdTotalInfo.encode(e.reward, t.uint32(18).fork(), r + 1).ldelim();
null != e.banner && Object.hasOwnProperty.call(e, "banner") && i.ModelFeature.AdTotalInfo.encode(e.banner, t.uint32(26).fork(), r + 1).ldelim();
return t;
};
e.encodeDelimited = function(e, t) {
return this.encode(e, t && t.len ? t.fork() : t).ldelim();
};
e.decode = function(e, t, r, o) {
e instanceof n || (e = n.create(e));
void 0 === o && (o = 0);
if (o > n.recursionLimit) throw Error("maximum nesting depth exceeded");
for (var a = void 0 === t ? e.len : e.pos + t, s = new i.ModelFeature.AdSetInfo(); e.pos < a; ) {
var l = e.uint32();
if (l === r) break;
switch (l >>> 3) {
case 1:
s.inter = i.ModelFeature.AdTotalInfo.decode(e, e.uint32(), void 0, o + 1);
break;

case 2:
s.reward = i.ModelFeature.AdTotalInfo.decode(e, e.uint32(), void 0, o + 1);
break;

case 3:
s.banner = i.ModelFeature.AdTotalInfo.decode(e, e.uint32(), void 0, o + 1);
break;

default:
e.skipType(7 & l, o);
}
}
return s;
};
e.decodeDelimited = function(e) {
e instanceof n || (e = new n(e));
return this.decode(e, e.uint32());
};
e.verify = function(e, t) {
if ("object" != typeof e || null === e) return "object expected";
void 0 === t && (t = 0);
if (t > a.recursionLimit) return "maximum nesting depth exceeded";
if (null != e.inter && Object.hasOwnProperty.call(e, "inter") && (r = i.ModelFeature.AdTotalInfo.verify(e.inter, t + 1))) return "inter." + r;
if (null != e.reward && Object.hasOwnProperty.call(e, "reward") && (r = i.ModelFeature.AdTotalInfo.verify(e.reward, t + 1))) return "reward." + r;
if (null != e.banner && Object.hasOwnProperty.call(e, "banner")) {
var r;
if (r = i.ModelFeature.AdTotalInfo.verify(e.banner, t + 1)) return "banner." + r;
}
return null;
};
e.fromObject = function(e, t) {
if (e instanceof i.ModelFeature.AdSetInfo) return e;
if (!a.isObject(e)) throw TypeError(".ModelFeature.AdSetInfo: object expected");
void 0 === t && (t = 0);
if (t > a.recursionLimit) throw Error("maximum nesting depth exceeded");
var r = new i.ModelFeature.AdSetInfo();
if (null != e.inter) {
if (!a.isObject(e.inter)) throw TypeError(".ModelFeature.AdSetInfo.inter: object expected");
r.inter = i.ModelFeature.AdTotalInfo.fromObject(e.inter, t + 1);
}
if (null != e.reward) {
if (!a.isObject(e.reward)) throw TypeError(".ModelFeature.AdSetInfo.reward: object expected");
r.reward = i.ModelFeature.AdTotalInfo.fromObject(e.reward, t + 1);
}
if (null != e.banner) {
if (!a.isObject(e.banner)) throw TypeError(".ModelFeature.AdSetInfo.banner: object expected");
r.banner = i.ModelFeature.AdTotalInfo.fromObject(e.banner, t + 1);
}
return r;
};
e.toObject = function(e, t, r) {
t || (t = {});
void 0 === r && (r = 0);
if (r > a.recursionLimit) throw Error("max depth exceeded");
var n = {};
if (t.defaults) {
n.inter = null;
n.reward = null;
n.banner = null;
}
null != e.inter && Object.hasOwnProperty.call(e, "inter") && (n.inter = i.ModelFeature.AdTotalInfo.toObject(e.inter, t, r + 1));
null != e.reward && Object.hasOwnProperty.call(e, "reward") && (n.reward = i.ModelFeature.AdTotalInfo.toObject(e.reward, t, r + 1));
null != e.banner && Object.hasOwnProperty.call(e, "banner") && (n.banner = i.ModelFeature.AdTotalInfo.toObject(e.banner, t, r + 1));
return n;
};
e.prototype.toJSON = function() {
return this.constructor.toObject(this, r.util.toJSONOptions);
};
e.getTypeUrl = function(e) {
void 0 === e && (e = "type.googleapis.com");
return e + "/ModelFeature.AdSetInfo";
};
return e;
}();
e.AdTotalInfo = function() {
function e(e) {
if (e) for (var t = Object.keys(e), r = 0; r < t.length; ++r) null != e[t[r]] && "__proto__" !== t[r] && (this[t[r]] = e[t[r]]);
}
e.prototype.totalPv = 0;
e.prototype.totalEcpm = 0;
e.create = function(t) {
return new e(t);
};
e.encode = function(e, t, r) {
t || (t = o.create());
void 0 === r && (r = 0);
if (r > a.recursionLimit) throw Error("max depth exceeded");
null != e.totalPv && Object.hasOwnProperty.call(e, "totalPv") && t.uint32(8).int32(e.totalPv);
null != e.totalEcpm && Object.hasOwnProperty.call(e, "totalEcpm") && t.uint32(17).double(e.totalEcpm);
return t;
};
e.encodeDelimited = function(e, t) {
return this.encode(e, t && t.len ? t.fork() : t).ldelim();
};
e.decode = function(e, t, r, o) {
e instanceof n || (e = n.create(e));
void 0 === o && (o = 0);
if (o > n.recursionLimit) throw Error("maximum nesting depth exceeded");
for (var a = void 0 === t ? e.len : e.pos + t, s = new i.ModelFeature.AdTotalInfo(); e.pos < a; ) {
var l = e.uint32();
if (l === r) break;
switch (l >>> 3) {
case 1:
s.totalPv = e.int32();
break;

case 2:
s.totalEcpm = e.double();
break;

default:
e.skipType(7 & l, o);
}
}
return s;
};
e.decodeDelimited = function(e) {
e instanceof n || (e = new n(e));
return this.decode(e, e.uint32());
};
e.verify = function(e, t) {
if ("object" != typeof e || null === e) return "object expected";
void 0 === t && (t = 0);
return t > a.recursionLimit ? "maximum nesting depth exceeded" : null != e.totalPv && Object.hasOwnProperty.call(e, "totalPv") && !a.isInteger(e.totalPv) ? "totalPv: integer expected" : null != e.totalEcpm && Object.hasOwnProperty.call(e, "totalEcpm") && "number" != typeof e.totalEcpm ? "totalEcpm: number expected" : null;
};
e.fromObject = function(e, t) {
if (e instanceof i.ModelFeature.AdTotalInfo) return e;
if (!a.isObject(e)) throw TypeError(".ModelFeature.AdTotalInfo: object expected");
void 0 === t && (t = 0);
if (t > a.recursionLimit) throw Error("maximum nesting depth exceeded");
var r = new i.ModelFeature.AdTotalInfo();
null != e.totalPv && (r.totalPv = 0 | e.totalPv);
null != e.totalEcpm && (r.totalEcpm = Number(e.totalEcpm));
return r;
};
e.toObject = function(e, t, r) {
t || (t = {});
void 0 === r && (r = 0);
if (r > a.recursionLimit) throw Error("max depth exceeded");
var n = {};
if (t.defaults) {
n.totalPv = 0;
n.totalEcpm = 0;
}
null != e.totalPv && Object.hasOwnProperty.call(e, "totalPv") && (n.totalPv = e.totalPv);
null != e.totalEcpm && Object.hasOwnProperty.call(e, "totalEcpm") && (n.totalEcpm = t.json && !isFinite(e.totalEcpm) ? String(e.totalEcpm) : e.totalEcpm);
return n;
};
e.prototype.toJSON = function() {
return this.constructor.toObject(this, r.util.toJSONOptions);
};
e.getTypeUrl = function(e) {
void 0 === e && (e = "type.googleapis.com");
return e + "/ModelFeature.AdTotalInfo";
};
return e;
}();
e.GameInfoSetList = function() {
function e(e) {
this.items = [];
if (e) for (var t = Object.keys(e), r = 0; r < t.length; ++r) null != e[t[r]] && "__proto__" !== t[r] && (this[t[r]] = e[t[r]]);
}
e.prototype.items = a.emptyArray;
e.create = function(t) {
return new e(t);
};
e.encode = function(e, t, r) {
t || (t = o.create());
void 0 === r && (r = 0);
if (r > a.recursionLimit) throw Error("max depth exceeded");
if (null != e.items && e.items.length) for (var n = 0; n < e.items.length; ++n) i.ModelFeature.GameInfoSet.encode(e.items[n], t.uint32(10).fork(), r + 1).ldelim();
return t;
};
e.encodeDelimited = function(e, t) {
return this.encode(e, t && t.len ? t.fork() : t).ldelim();
};
e.decode = function(e, t, r, o) {
e instanceof n || (e = n.create(e));
void 0 === o && (o = 0);
if (o > n.recursionLimit) throw Error("maximum nesting depth exceeded");
for (var a = void 0 === t ? e.len : e.pos + t, s = new i.ModelFeature.GameInfoSetList(); e.pos < a; ) {
var l = e.uint32();
if (l === r) break;
switch (l >>> 3) {
case 1:
s.items && s.items.length || (s.items = []);
s.items.push(i.ModelFeature.GameInfoSet.decode(e, e.uint32(), void 0, o + 1));
break;

default:
e.skipType(7 & l, o);
}
}
return s;
};
e.decodeDelimited = function(e) {
e instanceof n || (e = new n(e));
return this.decode(e, e.uint32());
};
e.verify = function(e, t) {
if ("object" != typeof e || null === e) return "object expected";
void 0 === t && (t = 0);
if (t > a.recursionLimit) return "maximum nesting depth exceeded";
if (null != e.items && Object.hasOwnProperty.call(e, "items")) {
if (!Array.isArray(e.items)) return "items: array expected";
for (var r = 0; r < e.items.length; ++r) {
var n = i.ModelFeature.GameInfoSet.verify(e.items[r], t + 1);
if (n) return "items." + n;
}
}
return null;
};
e.fromObject = function(e, t) {
if (e instanceof i.ModelFeature.GameInfoSetList) return e;
if (!a.isObject(e)) throw TypeError(".ModelFeature.GameInfoSetList: object expected");
void 0 === t && (t = 0);
if (t > a.recursionLimit) throw Error("maximum nesting depth exceeded");
var r = new i.ModelFeature.GameInfoSetList();
if (e.items) {
if (!Array.isArray(e.items)) throw TypeError(".ModelFeature.GameInfoSetList.items: array expected");
r.items = [];
for (var n = 0; n < e.items.length; ++n) {
if (!a.isObject(e.items[n])) throw TypeError(".ModelFeature.GameInfoSetList.items: object expected");
r.items[n] = i.ModelFeature.GameInfoSet.fromObject(e.items[n], t + 1);
}
}
return r;
};
e.toObject = function(e, t, r) {
t || (t = {});
void 0 === r && (r = 0);
if (r > a.recursionLimit) throw Error("max depth exceeded");
var n = {};
(t.arrays || t.defaults) && (n.items = []);
if (e.items && e.items.length) {
n.items = [];
for (var o = 0; o < e.items.length; ++o) n.items[o] = i.ModelFeature.GameInfoSet.toObject(e.items[o], t, r + 1);
}
return n;
};
e.prototype.toJSON = function() {
return this.constructor.toObject(this, r.util.toJSONOptions);
};
e.getTypeUrl = function(e) {
void 0 === e && (e = "type.googleapis.com");
return e + "/ModelFeature.GameInfoSetList";
};
return e;
}();
e.AdInfoList = function() {
function e(e) {
this.items = [];
if (e) for (var t = Object.keys(e), r = 0; r < t.length; ++r) null != e[t[r]] && "__proto__" !== t[r] && (this[t[r]] = e[t[r]]);
}
e.prototype.items = a.emptyArray;
e.create = function(t) {
return new e(t);
};
e.encode = function(e, t, r) {
t || (t = o.create());
void 0 === r && (r = 0);
if (r > a.recursionLimit) throw Error("max depth exceeded");
if (null != e.items && e.items.length) for (var n = 0; n < e.items.length; ++n) i.ModelFeature.AdInfo.encode(e.items[n], t.uint32(10).fork(), r + 1).ldelim();
return t;
};
e.encodeDelimited = function(e, t) {
return this.encode(e, t && t.len ? t.fork() : t).ldelim();
};
e.decode = function(e, t, r, o) {
e instanceof n || (e = n.create(e));
void 0 === o && (o = 0);
if (o > n.recursionLimit) throw Error("maximum nesting depth exceeded");
for (var a = void 0 === t ? e.len : e.pos + t, s = new i.ModelFeature.AdInfoList(); e.pos < a; ) {
var l = e.uint32();
if (l === r) break;
switch (l >>> 3) {
case 1:
s.items && s.items.length || (s.items = []);
s.items.push(i.ModelFeature.AdInfo.decode(e, e.uint32(), void 0, o + 1));
break;

default:
e.skipType(7 & l, o);
}
}
return s;
};
e.decodeDelimited = function(e) {
e instanceof n || (e = new n(e));
return this.decode(e, e.uint32());
};
e.verify = function(e, t) {
if ("object" != typeof e || null === e) return "object expected";
void 0 === t && (t = 0);
if (t > a.recursionLimit) return "maximum nesting depth exceeded";
if (null != e.items && Object.hasOwnProperty.call(e, "items")) {
if (!Array.isArray(e.items)) return "items: array expected";
for (var r = 0; r < e.items.length; ++r) {
var n = i.ModelFeature.AdInfo.verify(e.items[r], t + 1);
if (n) return "items." + n;
}
}
return null;
};
e.fromObject = function(e, t) {
if (e instanceof i.ModelFeature.AdInfoList) return e;
if (!a.isObject(e)) throw TypeError(".ModelFeature.AdInfoList: object expected");
void 0 === t && (t = 0);
if (t > a.recursionLimit) throw Error("maximum nesting depth exceeded");
var r = new i.ModelFeature.AdInfoList();
if (e.items) {
if (!Array.isArray(e.items)) throw TypeError(".ModelFeature.AdInfoList.items: array expected");
r.items = [];
for (var n = 0; n < e.items.length; ++n) {
if (!a.isObject(e.items[n])) throw TypeError(".ModelFeature.AdInfoList.items: object expected");
r.items[n] = i.ModelFeature.AdInfo.fromObject(e.items[n], t + 1);
}
}
return r;
};
e.toObject = function(e, t, r) {
t || (t = {});
void 0 === r && (r = 0);
if (r > a.recursionLimit) throw Error("max depth exceeded");
var n = {};
(t.arrays || t.defaults) && (n.items = []);
if (e.items && e.items.length) {
n.items = [];
for (var o = 0; o < e.items.length; ++o) n.items[o] = i.ModelFeature.AdInfo.toObject(e.items[o], t, r + 1);
}
return n;
};
e.prototype.toJSON = function() {
return this.constructor.toObject(this, r.util.toJSONOptions);
};
e.getTypeUrl = function(e) {
void 0 === e && (e = "type.googleapis.com");
return e + "/ModelFeature.AdInfoList";
};
return e;
}();
e.SessionInfoList = function() {
function e(e) {
this.items = [];
if (e) for (var t = Object.keys(e), r = 0; r < t.length; ++r) null != e[t[r]] && "__proto__" !== t[r] && (this[t[r]] = e[t[r]]);
}
e.prototype.items = a.emptyArray;
e.create = function(t) {
return new e(t);
};
e.encode = function(e, t, r) {
t || (t = o.create());
void 0 === r && (r = 0);
if (r > a.recursionLimit) throw Error("max depth exceeded");
if (null != e.items && e.items.length) for (var n = 0; n < e.items.length; ++n) i.ModelFeature.SessionInfo.encode(e.items[n], t.uint32(10).fork(), r + 1).ldelim();
return t;
};
e.encodeDelimited = function(e, t) {
return this.encode(e, t && t.len ? t.fork() : t).ldelim();
};
e.decode = function(e, t, r, o) {
e instanceof n || (e = n.create(e));
void 0 === o && (o = 0);
if (o > n.recursionLimit) throw Error("maximum nesting depth exceeded");
for (var a = void 0 === t ? e.len : e.pos + t, s = new i.ModelFeature.SessionInfoList(); e.pos < a; ) {
var l = e.uint32();
if (l === r) break;
switch (l >>> 3) {
case 1:
s.items && s.items.length || (s.items = []);
s.items.push(i.ModelFeature.SessionInfo.decode(e, e.uint32(), void 0, o + 1));
break;

default:
e.skipType(7 & l, o);
}
}
return s;
};
e.decodeDelimited = function(e) {
e instanceof n || (e = new n(e));
return this.decode(e, e.uint32());
};
e.verify = function(e, t) {
if ("object" != typeof e || null === e) return "object expected";
void 0 === t && (t = 0);
if (t > a.recursionLimit) return "maximum nesting depth exceeded";
if (null != e.items && Object.hasOwnProperty.call(e, "items")) {
if (!Array.isArray(e.items)) return "items: array expected";
for (var r = 0; r < e.items.length; ++r) {
var n = i.ModelFeature.SessionInfo.verify(e.items[r], t + 1);
if (n) return "items." + n;
}
}
return null;
};
e.fromObject = function(e, t) {
if (e instanceof i.ModelFeature.SessionInfoList) return e;
if (!a.isObject(e)) throw TypeError(".ModelFeature.SessionInfoList: object expected");
void 0 === t && (t = 0);
if (t > a.recursionLimit) throw Error("maximum nesting depth exceeded");
var r = new i.ModelFeature.SessionInfoList();
if (e.items) {
if (!Array.isArray(e.items)) throw TypeError(".ModelFeature.SessionInfoList.items: array expected");
r.items = [];
for (var n = 0; n < e.items.length; ++n) {
if (!a.isObject(e.items[n])) throw TypeError(".ModelFeature.SessionInfoList.items: object expected");
r.items[n] = i.ModelFeature.SessionInfo.fromObject(e.items[n], t + 1);
}
}
return r;
};
e.toObject = function(e, t, r) {
t || (t = {});
void 0 === r && (r = 0);
if (r > a.recursionLimit) throw Error("max depth exceeded");
var n = {};
(t.arrays || t.defaults) && (n.items = []);
if (e.items && e.items.length) {
n.items = [];
for (var o = 0; o < e.items.length; ++o) n.items[o] = i.ModelFeature.SessionInfo.toObject(e.items[o], t, r + 1);
}
return n;
};
e.prototype.toJSON = function() {
return this.constructor.toObject(this, r.util.toJSONOptions);
};
e.getTypeUrl = function(e) {
void 0 === e && (e = "type.googleapis.com");
return e + "/ModelFeature.SessionInfoList";
};
return e;
}();
return e;
}();
t.exports = i;
cc._RF.pop();
}, {
"./pbMinimal": "pbMinimal"
} ],
ModelFeatureDependencyMap: [ function(e, t, r) {
"use strict";
cc._RF.push(t, "51d5aneRaVLA4jsoaKviST4", "ModelFeatureDependencyMap");
var n, o, a, i, s, l, u, c, d, f, m, p, h, g, v, y, b, _, S, I, w, M, C, G, R, x, O, F, T, N, E, j, A, k, P, L, B, D, W, H, U, V, z, J, q, Z, Y, $, K, X, Q, ee, te, re, ne, oe, ae, ie, se, le, ue, ce, de, fe, me, pe, he, ge, ve, ye, be, _e, Se, Ie, we, Me, Ce, Ge, Re, xe, Oe, Fe, Te, Ne, Ee, je, Ae, ke, Pe, Le, Be, De, We, He, Ue, Ve, ze, Je, qe, Ze, Ye, $e, Ke, Xe, Qe, et, tt, rt, nt, ot, at, it, st, lt, ut, ct, dt, ft, mt, pt, ht, gt, vt, yt, bt, _t, St, It, wt, Mt, Ct, Gt, Rt, xt, Ot, Ft, Tt, Nt, Et, jt, At, kt, Pt, Lt, Bt, Dt, Wt, Ht, Ut, Vt, zt, Jt, qt, Zt, Yt, $t, Kt, Xt, Qt, er, tr, rr, nr, or, ar, ir, sr, lr, ur, cr, dr, fr, mr, pr, hr, gr, vr, yr, br, _r, Sr, Ir, wr, Mr, Cr, Gr, Rr, xr, Or, Fr, Tr, Nr, Er, jr, Ar, kr, Pr, Lr, Br, Dr, Wr, Hr, Ur, Vr, zr, Jr, qr, Zr, Yr, $r, Kr, Xr, Qr, en, tn, rn, nn, on, an, sn, ln, un, cn, dn, fn, mn, pn, hn;
Object.defineProperty(r, "__esModule", {
value: !0
});
r.MODEL_FEATURE_DEPENDENCY_MAP = void 0;
var gn = e("../interface/ModelFeatureSeriesSourceInterface");
r.MODEL_FEATURE_DEPENDENCY_MAP = {
active_days_dayN_M: (n = {}, n[gn.EModelFeatureSeriesSource.Game] = [ "baseGameInfo.isReplay", "ts" ], 
n[gn.EModelFeatureSeriesSource.Session] = [ "ts" ], n),
af_media_source: {},
app_version: {},
avg_cold_cnt_regN_M: (o = {}, o[gn.EModelFeatureSeriesSource.Session] = [ "ts" ], 
o),
avg_cold_interval_regN_M: (a = {}, a[gn.EModelFeatureSeriesSource.Session] = [ "ts" ], 
a),
avg_game_cnt_dayN_M: (i = {}, i[gn.EModelFeatureSeriesSource.Game] = [ "baseGameInfo.gameMode", "baseGameInfo.isReplay", "ts" ], 
i[gn.EModelFeatureSeriesSource.Session] = [ "ts" ], i),
avg_game_cnt_regN_M: (s = {}, s[gn.EModelFeatureSeriesSource.Game] = [ "baseGameInfo.isReplay", "ts" ], 
s),
avg_online_time_dayN_M: (l = {}, l[gn.EModelFeatureSeriesSource.Game] = [ "baseGameInfo.isReplay", "baseGameInfo.spendTime", "ts" ], 
l[gn.EModelFeatureSeriesSource.Session] = [ "ts" ], l),
avg_online_time_regN_M: (u = {}, u[gn.EModelFeatureSeriesSource.Game] = [ "baseGameInfo.isReplay", "baseGameInfo.spendTime", "ts" ], 
u),
avg_session_cnt_recentN: (c = {}, c[gn.EModelFeatureSeriesSource.Session] = [ "ts" ], 
c),
break_amp_dayN_M_avg: (d = {}, d[gn.EModelFeatureSeriesSource.Game] = [ "baseGameInfo.gameMode", "baseGameInfo.isReplay", "classGameInfo.lastHighScore", "classGameInfo.score", "ts" ], 
d),
break_amp_dayN_M_avg_capped: (f = {}, f[gn.EModelFeatureSeriesSource.Game] = [ "baseGameInfo.gameMode", "baseGameInfo.isReplay", "classGameInfo.lastHighScore", "classGameInfo.score", "ts" ], 
f),
break_amp_dayN_M_max: (m = {}, m[gn.EModelFeatureSeriesSource.Game] = [ "baseGameInfo.gameMode", "baseGameInfo.isReplay", "classGameInfo.lastHighScore", "classGameInfo.score", "ts" ], 
m),
break_amp_dayN_M_max_capped: (p = {}, p[gn.EModelFeatureSeriesSource.Game] = [ "baseGameInfo.gameMode", "baseGameInfo.isReplay", "classGameInfo.lastHighScore", "classGameInfo.score", "ts" ], 
p),
break_amp_recentN_avg: (h = {}, h[gn.EModelFeatureSeriesSource.Game] = [ "baseGameInfo.gameMode", "baseGameInfo.isReplay", "classGameInfo.lastHighScore", "classGameInfo.score", "ts" ], 
h),
break_amp_recentN_avg_capped: (g = {}, g[gn.EModelFeatureSeriesSource.Game] = [ "baseGameInfo.gameMode", "baseGameInfo.isReplay", "classGameInfo.lastHighScore", "classGameInfo.score", "ts" ], 
g),
break_amp_recentN_max: (v = {}, v[gn.EModelFeatureSeriesSource.Game] = [ "baseGameInfo.gameMode", "baseGameInfo.isReplay", "classGameInfo.lastHighScore", "classGameInfo.score", "ts" ], 
v),
break_amp_recentN_max_capped: (y = {}, y[gn.EModelFeatureSeriesSource.Game] = [ "baseGameInfo.gameMode", "baseGameInfo.isReplay", "classGameInfo.lastHighScore", "classGameInfo.score", "ts" ], 
y),
break_amp_regN_M_avg: (b = {}, b[gn.EModelFeatureSeriesSource.Game] = [ "baseGameInfo.gameMode", "baseGameInfo.isReplay", "classGameInfo.lastHighScore", "classGameInfo.score", "ts" ], 
b),
break_amp_regN_M_max: (_ = {}, _[gn.EModelFeatureSeriesSource.Game] = [ "baseGameInfo.gameMode", "baseGameInfo.isReplay", "classGameInfo.lastHighScore", "classGameInfo.score", "ts" ], 
_),
break_gap_dayN_M_avg: (S = {}, S[gn.EModelFeatureSeriesSource.Game] = [ "baseGameInfo.gameMode", "baseGameInfo.isReplay", "classGameInfo.lastHighScore", "classGameInfo.score", "ts" ], 
S),
break_gap_recentN_avg: (I = {}, I[gn.EModelFeatureSeriesSource.Game] = [ "baseGameInfo.gameMode", "baseGameInfo.isReplay", "classGameInfo.lastHighScore", "classGameInfo.score", "ts" ], 
I),
break_gap_regN_M_avg: (w = {}, w[gn.EModelFeatureSeriesSource.Game] = [ "baseGameInfo.gameMode", "baseGameInfo.isReplay", "classGameInfo.lastHighScore", "classGameInfo.score", "ts" ], 
w),
break_gap_regN_M_max: (M = {}, M[gn.EModelFeatureSeriesSource.Game] = [ "baseGameInfo.gameMode", "baseGameInfo.isReplay", "classGameInfo.lastHighScore", "classGameInfo.score", "ts" ], 
M),
break_rate_dayN_M: (C = {}, C[gn.EModelFeatureSeriesSource.Game] = [ "baseGameInfo.gameMode", "baseGameInfo.isReplay", "classGameInfo.lastHighScore", "classGameInfo.score", "ts" ], 
C),
break_rate_recentN: (G = {}, G[gn.EModelFeatureSeriesSource.Game] = [ "baseGameInfo.gameMode", "baseGameInfo.isReplay", "classGameInfo.lastHighScore", "classGameInfo.score", "ts" ], 
G),
break_rate_regN_M: (R = {}, R[gn.EModelFeatureSeriesSource.Game] = [ "baseGameInfo.gameMode", "baseGameInfo.isReplay", "classGameInfo.lastHighScore", "classGameInfo.score", "ts" ], 
R),
carrier: {},
clean_avg_cnt_dayN_M: (x = {}, x[gn.EModelFeatureSeriesSource.Game] = [ "baseGameInfo.clearScreenCnt", "baseGameInfo.gameMode", "baseGameInfo.isReplay", "ts" ], 
x),
clean_avg_cnt_recentN: (O = {}, O[gn.EModelFeatureSeriesSource.Game] = [ "baseGameInfo.clearScreenCnt", "baseGameInfo.gameMode", "baseGameInfo.isReplay", "ts" ], 
O),
clean_rate_recentN: (F = {}, F[gn.EModelFeatureSeriesSource.Game] = [ "baseGameInfo.clearScreenCnt", "baseGameInfo.gameMode", "baseGameInfo.isReplay", "ts" ], 
F),
clean_rate_regN_M: (T = {}, T[gn.EModelFeatureSeriesSource.Game] = [ "baseGameInfo.clearScreenCnt", "baseGameInfo.gameMode", "baseGameInfo.isReplay", "ts" ], 
T),
clear_zero_rate_dayN_M: (N = {}, N[gn.EModelFeatureSeriesSource.Game] = [ "baseGameInfo.clearScreenCnt", "baseGameInfo.gameMode", "baseGameInfo.isReplay", "ts" ], 
N),
coin_value_dayN_M_max: (E = {}, E[gn.EModelFeatureSeriesSource.Game] = [ "baseGameInfo.gameMode", "baseGameInfo.isReplay", "baseGameInfo.scoreGoldContent", "ts" ], 
E),
coin_value_recentN_avg: (j = {}, j[gn.EModelFeatureSeriesSource.Game] = [ "baseGameInfo.gameMode", "baseGameInfo.isReplay", "baseGameInfo.scoreGoldContent", "ts" ], 
j),
coin_value_recentN_max: (A = {}, A[gn.EModelFeatureSeriesSource.Game] = [ "baseGameInfo.gameMode", "baseGameInfo.isReplay", "baseGameInfo.scoreGoldContent", "ts" ], 
A),
coin_value_regN_M_avg: (k = {}, k[gn.EModelFeatureSeriesSource.Game] = [ "baseGameInfo.gameMode", "baseGameInfo.isReplay", "baseGameInfo.scoreGoldContent", "ts" ], 
k),
coin_value_regN_M_max: (P = {}, P[gn.EModelFeatureSeriesSource.Game] = [ "baseGameInfo.gameMode", "baseGameInfo.isReplay", "baseGameInfo.scoreGoldContent", "ts" ], 
P),
cold_start_game_rank: (L = {}, L[gn.EModelFeatureSeriesSource.Game] = [ "baseGameInfo.gameMode", "baseGameInfo.isReplay", "ts" ], 
L[gn.EModelFeatureSeriesSource.Session] = [ "ts" ], L),
cold_start_Nh: (B = {}, B[gn.EModelFeatureSeriesSource.Session] = [ "ts" ], B),
cold_start_rank: (D = {}, D[gn.EModelFeatureSeriesSource.Session] = [ "ts" ], D),
consec_active_days_regN_M: (W = {}, W[gn.EModelFeatureSeriesSource.Game] = [ "baseGameInfo.isReplay", "ts" ], 
W[gn.EModelFeatureSeriesSource.Session] = [ "ts" ], W),
consec_inactive_days_regN_M: (H = {}, H[gn.EModelFeatureSeriesSource.Game] = [ "baseGameInfo.isReplay", "ts" ], 
H[gn.EModelFeatureSeriesSource.Session] = [ "ts" ], H),
country: {},
cur_clear_screen_cnt: {},
cur_game_time: {},
cur_hard_round_rate: {},
cur_is_break: {},
cur_matrix_complex_avg: {},
cur_max_multi_elim: {},
cur_multi_elim_cnt: {},
cur_revive_show_cnt: {},
cur_round_cnt: {},
cur_score: {},
cur_score_vs_his_max: {},
current_insert_cache_num: (U = {}, U[gn.EModelFeatureSeriesSource.Game] = [ "baseGameInfo", "ts" ], 
U),
current_insert_revenue: (V = {}, V[gn.EModelFeatureSeriesSource.Game] = [ "baseGameInfo", "ts" ], 
V),
days_since_install: {},
daytime_game_rate_regN_M: (z = {}, z[gn.EModelFeatureSeriesSource.Game] = [ "baseGameInfo.isReplay", "ts" ], 
z),
device_model: {},
duisi_rate_regN_M: (J = {}, J[gn.EModelFeatureSeriesSource.Game] = [ "baseGameInfo.gameMode", "baseGameInfo.hasLiveWay", "baseGameInfo.isReplay", "ts" ], 
J),
fast_fun_rate_dayN_M_max: (q = {}, q[gn.EModelFeatureSeriesSource.Game] = [ "baseGameInfo.gameMode", "baseGameInfo.isReplay", "baseGameInfo.quickPutCoolRoundCount", "baseGameInfo.totalRound", "ts" ], 
q),
fast_fun_rate_recentN_avg: (Z = {}, Z[gn.EModelFeatureSeriesSource.Game] = [ "baseGameInfo.gameMode", "baseGameInfo.isReplay", "baseGameInfo.quickPutCoolRoundCount", "baseGameInfo.totalRound", "ts" ], 
Z),
fast_fun_rate_recentN_max: (Y = {}, Y[gn.EModelFeatureSeriesSource.Game] = [ "baseGameInfo.gameMode", "baseGameInfo.isReplay", "baseGameInfo.quickPutCoolRoundCount", "baseGameInfo.totalRound", "ts" ], 
Y),
fast_fun_rate_regN_M_avg: ($ = {}, $[gn.EModelFeatureSeriesSource.Game] = [ "baseGameInfo.gameMode", "baseGameInfo.isReplay", "baseGameInfo.quickPutCoolRoundCount", "baseGameInfo.totalRound", "ts" ], 
$),
fast_fun_rate_regN_M_max: (K = {}, K[gn.EModelFeatureSeriesSource.Game] = [ "baseGameInfo.gameMode", "baseGameInfo.isReplay", "baseGameInfo.quickPutCoolRoundCount", "baseGameInfo.totalRound", "ts" ], 
K),
fill_fail_rate_recentN: (X = {}, X[gn.EModelFeatureSeriesSource.Game] = [ "baseGameInfo.gameMode", "baseGameInfo.isReplay", "baseGameInfo.lastAlgoName", "ts" ], 
X),
fill_fail_rate_regN_M: (Q = {}, Q[gn.EModelFeatureSeriesSource.Game] = [ "baseGameInfo.gameMode", "baseGameInfo.isReplay", "baseGameInfo.lastAlgoName", "ts" ], 
Q),
fill_score_eff_recentN: (ee = {}, ee[gn.EModelFeatureSeriesSource.Game] = [ "baseGameInfo.algoInfoByNameSet.blank.score", "baseGameInfo.algoInfoByNameSet.blank.spendTime", "baseGameInfo.gameMode", "baseGameInfo.isReplay", "ts" ], 
ee),
fill_score_eff_regN_M: (te = {}, te[gn.EModelFeatureSeriesSource.Game] = [ "baseGameInfo.algoInfoByNameSet.blank.score", "baseGameInfo.algoInfoByNameSet.blank.spendTime", "baseGameInfo.gameMode", "baseGameInfo.isReplay", "ts" ], 
te),
first_ad_type: (re = {}, re[gn.EModelFeatureSeriesSource.Ad] = [ "adType", "status", "ts" ], 
re),
first_ad_watch_sec: (ne = {}, ne[gn.EModelFeatureSeriesSource.Ad] = [ "adType", "status", "ts", "watchDuration" ], 
ne),
first_cold_session_endless_break_rate: (oe = {}, oe[gn.EModelFeatureSeriesSource.Game] = [ "baseGameInfo.gameMode", "baseGameInfo.isReplay", "classGameInfo.lastHighScore", "classGameInfo.score", "ts" ], 
oe[gn.EModelFeatureSeriesSource.Session] = [ "ts" ], oe),
first_cold_session_endless_cnt: (ae = {}, ae[gn.EModelFeatureSeriesSource.Game] = [ "baseGameInfo.gameMode", "baseGameInfo.isReplay", "ts" ], 
ae[gn.EModelFeatureSeriesSource.Session] = [ "ts" ], ae),
first_cold_session_travel_cnt: (ie = {}, ie[gn.EModelFeatureSeriesSource.Game] = [ "baseGameInfo.gameMode", "baseGameInfo.isReplay", "ts" ], 
ie[gn.EModelFeatureSeriesSource.Session] = [ "ts" ], ie),
first_cold_to_first_game_sec: {},
first_game_max_combo: (se = {}, se[gn.EModelFeatureSeriesSource.Game] = [ "baseGameInfo.isReplay", "baseGameInfo.maxCombo", "ts" ], 
se),
first_game_to_first_ad_sec: (le = {}, le[gn.EModelFeatureSeriesSource.Ad] = [ "adType", "status", "ts" ], 
le),
first_hard_time_dayN_M_avg: (ue = {}, ue[gn.EModelFeatureSeriesSource.Game] = [ "baseGameInfo.firstDifficultySpendTime", "baseGameInfo.gameMode", "baseGameInfo.isReplay", "ts" ], 
ue),
first_hard_time_dayN_M_std: (ce = {}, ce[gn.EModelFeatureSeriesSource.Game] = [ "baseGameInfo.firstDifficultySpendTime", "baseGameInfo.gameMode", "baseGameInfo.isReplay", "ts" ], 
ce),
first_hard_time_recentN_avg: (de = {}, de[gn.EModelFeatureSeriesSource.Game] = [ "baseGameInfo.firstDifficultySpendTime", "baseGameInfo.gameMode", "baseGameInfo.isReplay", "ts" ], 
de),
first_hard_time_recentN_max: (fe = {}, fe[gn.EModelFeatureSeriesSource.Game] = [ "baseGameInfo.firstDifficultySpendTime", "baseGameInfo.gameMode", "baseGameInfo.isReplay", "ts" ], 
fe),
first_hard_time_recentN_std: (me = {}, me[gn.EModelFeatureSeriesSource.Game] = [ "baseGameInfo.firstDifficultySpendTime", "baseGameInfo.gameMode", "baseGameInfo.isReplay", "ts" ], 
me),
first_hard_time_regN_M_avg: (pe = {}, pe[gn.EModelFeatureSeriesSource.Game] = [ "baseGameInfo.firstDifficultySpendTime", "baseGameInfo.gameMode", "baseGameInfo.isReplay", "ts" ], 
pe),
first_hard_time_regN_M_max: (he = {}, he[gn.EModelFeatureSeriesSource.Game] = [ "baseGameInfo.firstDifficultySpendTime", "baseGameInfo.gameMode", "baseGameInfo.isReplay", "ts" ], 
he),
first_hard_time_regN_M_std: (ge = {}, ge[gn.EModelFeatureSeriesSource.Game] = [ "baseGameInfo.firstDifficultySpendTime", "baseGameInfo.gameMode", "baseGameInfo.isReplay", "ts" ], 
ge),
first_round_matrix_dayN_M_avg: (ve = {}, ve[gn.EModelFeatureSeriesSource.Game] = [ "baseGameInfo.gameMode", "baseGameInfo.initWeight", "baseGameInfo.isReplay", "ts" ], 
ve),
first_round_matrix_dayN_M_std: (ye = {}, ye[gn.EModelFeatureSeriesSource.Game] = [ "baseGameInfo.gameMode", "baseGameInfo.initWeight", "baseGameInfo.isReplay", "ts" ], 
ye),
first_round_matrix_recentN_avg: (be = {}, be[gn.EModelFeatureSeriesSource.Game] = [ "baseGameInfo.gameMode", "baseGameInfo.initWeight", "baseGameInfo.isReplay", "ts" ], 
be),
first_round_matrix_recentN_max: (_e = {}, _e[gn.EModelFeatureSeriesSource.Game] = [ "baseGameInfo.gameMode", "baseGameInfo.initWeight", "baseGameInfo.isReplay", "ts" ], 
_e),
first_round_matrix_recentN_std: (Se = {}, Se[gn.EModelFeatureSeriesSource.Game] = [ "baseGameInfo.gameMode", "baseGameInfo.initWeight", "baseGameInfo.isReplay", "ts" ], 
Se),
first_round_matrix_regN_M_avg: (Ie = {}, Ie[gn.EModelFeatureSeriesSource.Game] = [ "baseGameInfo.gameMode", "baseGameInfo.initWeight", "baseGameInfo.isReplay", "ts" ], 
Ie),
first_round_matrix_regN_M_max: (we = {}, we[gn.EModelFeatureSeriesSource.Game] = [ "baseGameInfo.gameMode", "baseGameInfo.initWeight", "baseGameInfo.isReplay", "ts" ], 
we),
first_round_matrix_regN_M_std: (Me = {}, Me[gn.EModelFeatureSeriesSource.Game] = [ "baseGameInfo.gameMode", "baseGameInfo.initWeight", "baseGameInfo.isReplay", "ts" ], 
Me),
first3_clean_cnt: (Ce = {}, Ce[gn.EModelFeatureSeriesSource.Game] = [ "baseGameInfo.clearScreenCnt", "baseGameInfo.gameMode", "baseGameInfo.isReplay", "ts" ], 
Ce),
first3_game_time_avg: (Ge = {}, Ge[gn.EModelFeatureSeriesSource.Game] = [ "baseGameInfo.gameMode", "baseGameInfo.isReplay", "baseGameInfo.spendTime", "ts" ], 
Ge),
first3_game_time_max: (Re = {}, Re[gn.EModelFeatureSeriesSource.Game] = [ "baseGameInfo.gameMode", "baseGameInfo.isReplay", "baseGameInfo.spendTime", "ts" ], 
Re),
first3_hard_fail_rate: (xe = {}, xe[gn.EModelFeatureSeriesSource.Game] = [ "baseGameInfo.algoInfoByNameSet.difficulty.roundCnt", "baseGameInfo.gameMode", "baseGameInfo.isReplay", "baseGameInfo.lastAlgoName", "ts" ], 
xe),
first3_hard_round_rate: (Oe = {}, Oe[gn.EModelFeatureSeriesSource.Game] = [ "baseGameInfo.algoInfoByNameSet.difficulty.roundCnt", "baseGameInfo.gameMode", "baseGameInfo.isReplay", "baseGameInfo.totalRound", "ts" ], 
Oe),
first3_hard_score_eff: (Fe = {}, Fe[gn.EModelFeatureSeriesSource.Game] = [ "baseGameInfo.algoInfoByNameSet.difficulty.score", "baseGameInfo.algoInfoByNameSet.difficulty.spendTime", "baseGameInfo.gameMode", "baseGameInfo.isReplay", "ts" ], 
Fe),
first3_max_combo: (Te = {}, Te[gn.EModelFeatureSeriesSource.Game] = [ "baseGameInfo.gameMode", "baseGameInfo.isReplay", "baseGameInfo.maxCombo", "ts" ], 
Te),
first3_multi_cnt: (Ne = {}, Ne[gn.EModelFeatureSeriesSource.Game] = [ "baseGameInfo.fiveEliminateCnt", "baseGameInfo.fourEliminateCnt", "baseGameInfo.gameMode", "baseGameInfo.isReplay", "baseGameInfo.sixEliminateCnt", "baseGameInfo.threeEliminateCnt", "ts" ], 
Ne),
first3_sat_score_eff: (Ee = {}, Ee[gn.EModelFeatureSeriesSource.Game] = [ "baseGameInfo.algoInfoByNameSet.cool.score", "baseGameInfo.algoInfoByNameSet.cool.spendTime", "baseGameInfo.gameMode", "baseGameInfo.isReplay", "ts" ], 
Ee),
first3_score_avg: (je = {}, je[gn.EModelFeatureSeriesSource.Game] = [ "baseGameInfo.gameMode", "baseGameInfo.isReplay", "classGameInfo.score", "ts" ], 
je),
first3_wm_score_eff: (Ae = {}, Ae[gn.EModelFeatureSeriesSource.Game] = [ "baseGameInfo.algoInfoByNameSet.shangZeng.score", "baseGameInfo.algoInfoByNameSet.shangZeng.spendTime", "baseGameInfo.gameMode", "baseGameInfo.isReplay", "ts" ], 
Ae),
flow_score_dayN_M_avg: (ke = {}, ke[gn.EModelFeatureSeriesSource.Game] = [ "baseGameInfo.flowScore", "baseGameInfo.gameMode", "baseGameInfo.isReplay", "ts" ], 
ke),
flow_score_dayN_M_max: (Pe = {}, Pe[gn.EModelFeatureSeriesSource.Game] = [ "baseGameInfo.flowScore", "baseGameInfo.gameMode", "baseGameInfo.isReplay", "ts" ], 
Pe),
flow_score_recentN_avg: (Le = {}, Le[gn.EModelFeatureSeriesSource.Game] = [ "baseGameInfo.flowScore", "baseGameInfo.gameMode", "baseGameInfo.isReplay", "ts" ], 
Le),
flow_score_recentN_max: (Be = {}, Be[gn.EModelFeatureSeriesSource.Game] = [ "baseGameInfo.flowScore", "baseGameInfo.gameMode", "baseGameInfo.isReplay", "ts" ], 
Be),
flow_score_regN_M_avg: (De = {}, De[gn.EModelFeatureSeriesSource.Game] = [ "baseGameInfo.flowScore", "baseGameInfo.gameMode", "baseGameInfo.isReplay", "ts" ], 
De),
flow_score_regN_M_max: (We = {}, We[gn.EModelFeatureSeriesSource.Game] = [ "baseGameInfo.flowScore", "baseGameInfo.gameMode", "baseGameInfo.isReplay", "ts" ], 
We),
game_cnt_endless_Nh: (He = {}, He[gn.EModelFeatureSeriesSource.Game] = [ "baseGameInfo.gameMode", "baseGameInfo.isReplay", "ts" ], 
He),
game_time_dayN_M_avg: (Ue = {}, Ue[gn.EModelFeatureSeriesSource.Game] = [ "baseGameInfo.gameMode", "baseGameInfo.isReplay", "baseGameInfo.spendTime", "ts" ], 
Ue),
game_time_dayN_M_std: (Ve = {}, Ve[gn.EModelFeatureSeriesSource.Game] = [ "baseGameInfo.gameMode", "baseGameInfo.isReplay", "baseGameInfo.spendTime", "ts" ], 
Ve),
game_time_recentN_avg: (ze = {}, ze[gn.EModelFeatureSeriesSource.Game] = [ "baseGameInfo.gameMode", "baseGameInfo.isReplay", "baseGameInfo.spendTime", "ts" ], 
ze),
game_time_recentN_std: (Je = {}, Je[gn.EModelFeatureSeriesSource.Game] = [ "baseGameInfo.gameMode", "baseGameInfo.isReplay", "baseGameInfo.spendTime", "ts" ], 
Je),
game_time_regN_M_avg: (qe = {}, qe[gn.EModelFeatureSeriesSource.Game] = [ "baseGameInfo.gameMode", "baseGameInfo.isReplay", "baseGameInfo.spendTime", "ts" ], 
qe),
game_time_regN_M_std: (Ze = {}, Ze[gn.EModelFeatureSeriesSource.Game] = [ "baseGameInfo.gameMode", "baseGameInfo.isReplay", "baseGameInfo.spendTime", "ts" ], 
Ze),
game_type: {},
games_before_first_ad: (Ye = {}, Ye[gn.EModelFeatureSeriesSource.Ad] = [ "adType", "gameCnt", "status", "ts" ], 
Ye),
hard_fail_rate_dayN_M: ($e = {}, $e[gn.EModelFeatureSeriesSource.Game] = [ "baseGameInfo.algoInfoByNameSet.difficulty.roundCnt", "baseGameInfo.gameMode", "baseGameInfo.isReplay", "baseGameInfo.lastAlgoName", "ts" ], 
$e),
hard_fail_rate_recentN: (Ke = {}, Ke[gn.EModelFeatureSeriesSource.Game] = [ "baseGameInfo.algoInfoByNameSet.difficulty.roundCnt", "baseGameInfo.gameMode", "baseGameInfo.isReplay", "baseGameInfo.lastAlgoName", "ts" ], 
Ke),
hard_fail_rate_regN_M: (Xe = {}, Xe[gn.EModelFeatureSeriesSource.Game] = [ "baseGameInfo.algoInfoByNameSet.difficulty.roundCnt", "baseGameInfo.gameMode", "baseGameInfo.isReplay", "baseGameInfo.lastAlgoName", "ts" ], 
Xe),
hard_round_rate_recentN: (Qe = {}, Qe[gn.EModelFeatureSeriesSource.Game] = [ "baseGameInfo.algoInfoByNameSet.difficulty.roundCnt", "baseGameInfo.gameMode", "baseGameInfo.isReplay", "baseGameInfo.totalRound", "ts" ], 
Qe),
hard_round_rate_regN_M: (et = {}, et[gn.EModelFeatureSeriesSource.Game] = [ "baseGameInfo.algoInfoByNameSet.difficulty.roundCnt", "baseGameInfo.gameMode", "baseGameInfo.isReplay", "baseGameInfo.totalRound", "ts" ], 
et),
hard_score_eff_dayN_M: (tt = {}, tt[gn.EModelFeatureSeriesSource.Game] = [ "baseGameInfo.algoInfoByNameSet.difficulty.score", "baseGameInfo.algoInfoByNameSet.difficulty.spendTime", "baseGameInfo.gameMode", "baseGameInfo.isReplay", "ts" ], 
tt),
hard_score_eff_recentN: (rt = {}, rt[gn.EModelFeatureSeriesSource.Game] = [ "baseGameInfo.algoInfoByNameSet.difficulty.score", "baseGameInfo.algoInfoByNameSet.difficulty.spendTime", "baseGameInfo.gameMode", "baseGameInfo.isReplay", "ts" ], 
rt),
hard_score_eff_regN_M: (nt = {}, nt[gn.EModelFeatureSeriesSource.Game] = [ "baseGameInfo.algoInfoByNameSet.difficulty.score", "baseGameInfo.algoInfoByNameSet.difficulty.spendTime", "baseGameInfo.gameMode", "baseGameInfo.isReplay", "ts" ], 
nt),
hardtime_early_rate_dayN_M: (ot = {}, ot[gn.EModelFeatureSeriesSource.Game] = [ "baseGameInfo.firstDifficultySpendTime", "baseGameInfo.gameMode", "baseGameInfo.isReplay", "ts" ], 
ot),
hardtime_late_rate_dayN_M: (at = {}, at[gn.EModelFeatureSeriesSource.Game] = [ "baseGameInfo.firstDifficultySpendTime", "baseGameInfo.gameMode", "baseGameInfo.isReplay", "ts" ], 
at),
hardtime_mid_rate_dayN_M: (it = {}, it[gn.EModelFeatureSeriesSource.Game] = [ "baseGameInfo.firstDifficultySpendTime", "baseGameInfo.gameMode", "baseGameInfo.isReplay", "ts" ], 
it),
hardtime_none_rate_dayN_M: (st = {}, st[gn.EModelFeatureSeriesSource.Game] = [ "baseGameInfo.firstDifficultySpendTime", "baseGameInfo.gameMode", "baseGameInfo.isReplay", "ts" ], 
st),
highw_fun_rate_recentN_avg: (lt = {}, lt[gn.EModelFeatureSeriesSource.Game] = [ "baseGameInfo.gameMode", "baseGameInfo.highWeightCollRoundCnt", "baseGameInfo.isReplay", "baseGameInfo.totalRound", "ts" ], 
lt),
highw_fun_rate_recentN_max: (ut = {}, ut[gn.EModelFeatureSeriesSource.Game] = [ "baseGameInfo.gameMode", "baseGameInfo.highWeightCollRoundCnt", "baseGameInfo.isReplay", "baseGameInfo.totalRound", "ts" ], 
ut),
highw_fun_rate_regN_M_avg: (ct = {}, ct[gn.EModelFeatureSeriesSource.Game] = [ "baseGameInfo.gameMode", "baseGameInfo.highWeightCollRoundCnt", "baseGameInfo.isReplay", "baseGameInfo.totalRound", "ts" ], 
ct),
highw_fun_rate_regN_M_max: (dt = {}, dt[gn.EModelFeatureSeriesSource.Game] = [ "baseGameInfo.gameMode", "baseGameInfo.highWeightCollRoundCnt", "baseGameInfo.isReplay", "baseGameInfo.totalRound", "ts" ], 
dt),
his_endless_inter_first3_ecpm_avg: (ft = {}, ft[gn.EModelFeatureSeriesSource.Ad] = [ "adEcpm", "adType", "ts" ], 
ft),
hour_interval_install_now: {},
hour_interval_last_active_now_rate: (mt = {}, mt[gn.EModelFeatureSeriesSource.Game] = [ "baseGameInfo.isReplay", "ts" ], 
mt),
install_date_during: {},
inter_ecpm_regN_M_avg: (pt = {}, pt[gn.EModelFeatureSeriesSource.Ad] = [ "adEcpm", "adType", "ts" ], 
pt),
inter_ecpm_regN_M_max: (ht = {}, ht[gn.EModelFeatureSeriesSource.Ad] = [ "adEcpm", "adType", "ts" ], 
ht),
inter_ecpm_regN_M_min: (gt = {}, gt[gn.EModelFeatureSeriesSource.Ad] = [ "adEcpm", "adType", "ts" ], 
gt),
inter_pv_regN_M: (vt = {}, vt[gn.EModelFeatureSeriesSource.Ad] = [ "adType", "ts" ], 
vt),
inter_revenue_regN_M: (yt = {}, yt[gn.EModelFeatureSeriesSource.Ad] = [ "adEcpm", "adType", "ts" ], 
yt),
inter_show_avg_cnt_dayN_M: (bt = {}, bt[gn.EModelFeatureSeriesSource.Ad] = [ "adType", "gameCnt", "gameMode", "ts" ], 
bt[gn.EModelFeatureSeriesSource.Game] = [ "baseGameInfo.gameMode", "baseGameInfo.gameNum", "baseGameInfo.isReplay", "ts" ], 
bt),
inter_show_avg_cnt_recentN: (_t = {}, _t[gn.EModelFeatureSeriesSource.Ad] = [ "adType", "gameCnt", "gameMode", "ts" ], 
_t[gn.EModelFeatureSeriesSource.Game] = [ "baseGameInfo.gameMode", "baseGameInfo.gameNum", "baseGameInfo.isReplay", "ts" ], 
_t),
inter_show_avg_cnt_regN_M: (St = {}, St[gn.EModelFeatureSeriesSource.Ad] = [ "adType", "gameCnt", "gameMode", "ts" ], 
St[gn.EModelFeatureSeriesSource.Game] = [ "baseGameInfo.gameMode", "baseGameInfo.gameNum", "baseGameInfo.isReplay", "ts" ], 
St),
inter_show_rate_dayN_M: (It = {}, It[gn.EModelFeatureSeriesSource.Ad] = [ "adType", "gameCnt", "gameMode", "ts" ], 
It[gn.EModelFeatureSeriesSource.Game] = [ "baseGameInfo.gameMode", "baseGameInfo.gameNum", "baseGameInfo.isReplay", "ts" ], 
It),
inter_show_rate_recentN: (wt = {}, wt[gn.EModelFeatureSeriesSource.Ad] = [ "adType", "gameCnt", "gameMode", "ts" ], 
wt[gn.EModelFeatureSeriesSource.Game] = [ "baseGameInfo.gameMode", "baseGameInfo.gameNum", "baseGameInfo.isReplay", "ts" ], 
wt),
inter_show_rate_regN_M: (Mt = {}, Mt[gn.EModelFeatureSeriesSource.Ad] = [ "adType", "gameCnt", "gameMode", "ts" ], 
Mt[gn.EModelFeatureSeriesSource.Game] = [ "baseGameInfo.gameMode", "baseGameInfo.gameNum", "baseGameInfo.isReplay", "ts" ], 
Mt),
inter_wb_rate_dayN_M: (Ct = {}, Ct[gn.EModelFeatureSeriesSource.Ad] = [ "adType", "gameCnt", "gameMode", "status", "ts" ], 
Ct[gn.EModelFeatureSeriesSource.Game] = [ "baseGameInfo.gameMode", "baseGameInfo.gameNum", "baseGameInfo.isReplay", "ts" ], 
Ct),
inter_wb_rate_regN_M: (Gt = {}, Gt[gn.EModelFeatureSeriesSource.Ad] = [ "adType", "gameCnt", "gameMode", "status", "ts" ], 
Gt[gn.EModelFeatureSeriesSource.Game] = [ "baseGameInfo.gameMode", "baseGameInfo.gameNum", "baseGameInfo.isReplay", "ts" ], 
Gt),
last_break_amp_today: (Rt = {}, Rt[gn.EModelFeatureSeriesSource.Game] = [ "baseGameInfo.gameMode", "baseGameInfo.isReplay", "classGameInfo", "ts" ], 
Rt),
last_break_gap: (xt = {}, xt[gn.EModelFeatureSeriesSource.Game] = [ "baseGameInfo.gameMode", "baseGameInfo.isReplay", "classGameInfo.lastHighScore", "classGameInfo.score", "ts" ], 
xt),
last_clear_screen: (Ot = {}, Ot[gn.EModelFeatureSeriesSource.Game] = [ "baseGameInfo.clearScreenCnt", "baseGameInfo.gameMode", "baseGameInfo.isReplay", "ts" ], 
Ot),
last_coin_value: (Ft = {}, Ft[gn.EModelFeatureSeriesSource.Game] = [ "baseGameInfo.gameMode", "baseGameInfo.isReplay", "baseGameInfo.scoreGoldContent", "ts" ], 
Ft),
last_flow_score: (Tt = {}, Tt[gn.EModelFeatureSeriesSource.Game] = [ "baseGameInfo.flowScore", "baseGameInfo.gameMode", "baseGameInfo.isReplay", "ts" ], 
Tt),
last_game_end_gap_sec: (Nt = {}, Nt[gn.EModelFeatureSeriesSource.Game] = [ "baseGameInfo.gameMode", "baseGameInfo.isReplay", "ts" ], 
Nt),
last_grade: (Et = {}, Et[gn.EModelFeatureSeriesSource.Game] = [ "baseGameInfo.gameMode", "baseGameInfo.isReplay", "classGameInfo.score", "ts" ], 
Et),
last_inter_show: (jt = {}, jt[gn.EModelFeatureSeriesSource.Ad] = [ "adType", "gameCnt", "ts" ], 
jt[gn.EModelFeatureSeriesSource.Game] = [ "baseGameInfo.gameMode", "baseGameInfo.gameNum", "baseGameInfo.isReplay", "ts" ], 
jt),
last_inter_show_cnt_today: (At = {}, At[gn.EModelFeatureSeriesSource.Ad] = [ "adType", "gameCnt", "gameMode", "ts" ], 
At[gn.EModelFeatureSeriesSource.Game] = [ "baseGameInfo.gameMode", "baseGameInfo.gameNum", "baseGameInfo.isReplay", "ts" ], 
At),
last_max_combo: (kt = {}, kt[gn.EModelFeatureSeriesSource.Game] = [ "baseGameInfo.gameMode", "baseGameInfo.isReplay", "baseGameInfo.maxCombo", "ts" ], 
kt),
last_real_time: (Pt = {}, Pt[gn.EModelFeatureSeriesSource.Game] = [ "baseGameInfo.gameMode", "baseGameInfo.isReplay", "baseGameInfo.spendTime", "ts" ], 
Pt),
last_revive_click_cnt_today: (Lt = {}, Lt[gn.EModelFeatureSeriesSource.Game] = [ "baseGameInfo.gameMode", "baseGameInfo.isReplay", "baseGameInfo.reviveClickCnt", "ts" ], 
Lt),
last_revive_show: (Bt = {}, Bt[gn.EModelFeatureSeriesSource.Game] = [ "baseGameInfo.gameMode", "baseGameInfo.isReplay", "baseGameInfo.reviveShowCnt", "ts" ], 
Bt),
last_revive_show_cnt_today: (Dt = {}, Dt[gn.EModelFeatureSeriesSource.Game] = [ "baseGameInfo.gameMode", "baseGameInfo.isReplay", "baseGameInfo.reviveShowCnt", "ts" ], 
Dt),
last_score_today: (Wt = {}, Wt[gn.EModelFeatureSeriesSource.Game] = [ "baseGameInfo.gameMode", "baseGameInfo.isReplay", "classGameInfo.score", "ts" ], 
Wt),
last_ten_game_cnt: (Ht = {}, Ht[gn.EModelFeatureSeriesSource.Game] = [ "baseGameInfo.gameMode", "baseGameInfo.isReplay", "ts" ], 
Ht),
last_ten_insert_wb_ratio: (Ut = {}, Ut[gn.EModelFeatureSeriesSource.Ad] = [ "gameMode", "isGameEnd", "status", "ts" ], 
Ut),
last_ten_inter_cnt: (Vt = {}, Vt[gn.EModelFeatureSeriesSource.Ad] = [ "gameCnt", "gameMode", "isGameEnd", "ts" ], 
Vt[gn.EModelFeatureSeriesSource.Game] = [ "baseGameInfo.gameMode", "baseGameInfo.gameNum", "baseGameInfo.isReplay", "ts" ], 
Vt),
last_ten_inter_rate: (zt = {}, zt[gn.EModelFeatureSeriesSource.Ad] = [ "gameCnt", "gameMode", "isGameEnd", "ts" ], 
zt[gn.EModelFeatureSeriesSource.Game] = [ "baseGameInfo.gameMode", "baseGameInfo.gameNum", "baseGameInfo.isReplay", "ts" ], 
zt),
lifetime_game_cnt: {},
lifetime_max_score: {},
load_end_first_inter_ecpm: {},
load_end_inter_ecpm_cnt: {},
load_end_inter_ecpm_first3_avg: {},
matrix_complex_recentN_avg: (Jt = {}, Jt[gn.EModelFeatureSeriesSource.Game] = [ "baseGameInfo.eachRoundInitWeightAvg", "baseGameInfo.gameMode", "baseGameInfo.isReplay", "ts" ], 
Jt),
matrix_complex_recentN_std: (qt = {}, qt[gn.EModelFeatureSeriesSource.Game] = [ "baseGameInfo.eachRoundInitWeightAvg", "baseGameInfo.gameMode", "baseGameInfo.isReplay", "ts" ], 
qt),
matrix_complex_regN_M_avg: (Zt = {}, Zt[gn.EModelFeatureSeriesSource.Game] = [ "baseGameInfo.eachRoundInitWeightAvg", "baseGameInfo.gameMode", "baseGameInfo.isReplay", "ts" ], 
Zt),
matrix_complex_regN_M_std: (Yt = {}, Yt[gn.EModelFeatureSeriesSource.Game] = [ "baseGameInfo.eachRoundInitWeightAvg", "baseGameInfo.gameMode", "baseGameInfo.isReplay", "ts" ], 
Yt),
matrix_low_rate_dayN_M: ($t = {}, $t[gn.EModelFeatureSeriesSource.Game] = [ "baseGameInfo.gameMode", "baseGameInfo.initWeight", "baseGameInfo.isReplay", "ts" ], 
$t),
matrix_neg_rate_dayN_M: (Kt = {}, Kt[gn.EModelFeatureSeriesSource.Game] = [ "baseGameInfo.gameMode", "baseGameInfo.initWeight", "baseGameInfo.isReplay", "ts" ], 
Kt),
max_combo_dayN_M_avg: (Xt = {}, Xt[gn.EModelFeatureSeriesSource.Game] = [ "baseGameInfo.gameMode", "baseGameInfo.isReplay", "baseGameInfo.maxCombo", "ts" ], 
Xt),
max_combo_dayN_M_max: (Qt = {}, Qt[gn.EModelFeatureSeriesSource.Game] = [ "baseGameInfo.gameMode", "baseGameInfo.isReplay", "baseGameInfo.maxCombo", "ts" ], 
Qt),
max_combo_recentN_avg: (er = {}, er[gn.EModelFeatureSeriesSource.Game] = [ "baseGameInfo.gameMode", "baseGameInfo.isReplay", "baseGameInfo.maxCombo", "ts" ], 
er),
max_combo_recentN_max: (tr = {}, tr[gn.EModelFeatureSeriesSource.Game] = [ "baseGameInfo.gameMode", "baseGameInfo.isReplay", "baseGameInfo.maxCombo", "ts" ], 
tr),
max_combo_regN_M_avg: (rr = {}, rr[gn.EModelFeatureSeriesSource.Game] = [ "baseGameInfo.gameMode", "baseGameInfo.isReplay", "baseGameInfo.maxCombo", "ts" ], 
rr),
max_combo_regN_M_max: (nr = {}, nr[gn.EModelFeatureSeriesSource.Game] = [ "baseGameInfo.gameMode", "baseGameInfo.isReplay", "baseGameInfo.maxCombo", "ts" ], 
nr),
max_consec_fun_recentN_avg: (or = {}, or[gn.EModelFeatureSeriesSource.Game] = [ "baseGameInfo.gameMode", "baseGameInfo.isReplay", "baseGameInfo.maxContinueCoolRoundLen", "ts" ], 
or),
max_consec_fun_regN_M_avg: (ar = {}, ar[gn.EModelFeatureSeriesSource.Game] = [ "baseGameInfo.gameMode", "baseGameInfo.isReplay", "baseGameInfo.maxContinueCoolRoundLen", "ts" ], 
ar),
max_consec_nofun_dayN_M_avg: (ir = {}, ir[gn.EModelFeatureSeriesSource.Game] = [ "baseGameInfo.gameMode", "baseGameInfo.isReplay", "baseGameInfo.maxConsecutiveNonCoolRoundLen", "ts" ], 
ir),
max_consec_nofun_regN_M_avg: (sr = {}, sr[gn.EModelFeatureSeriesSource.Game] = [ "baseGameInfo.gameMode", "baseGameInfo.isReplay", "baseGameInfo.maxConsecutiveNonCoolRoundLen", "ts" ], 
sr),
max_grade_N: (lr = {}, lr[gn.EModelFeatureSeriesSource.Game] = [ "baseGameInfo.gameMode", "baseGameInfo.isReplay", "classGameInfo.score", "ts" ], 
lr),
multi_rate_dayN_M: (ur = {}, ur[gn.EModelFeatureSeriesSource.Game] = [ "baseGameInfo.fiveEliminateCnt", "baseGameInfo.fourEliminateCnt", "baseGameInfo.gameMode", "baseGameInfo.isReplay", "baseGameInfo.sixEliminateCnt", "baseGameInfo.threeEliminateCnt", "ts" ], 
ur),
multi_rate_recentN: (cr = {}, cr[gn.EModelFeatureSeriesSource.Game] = [ "baseGameInfo.fiveEliminateCnt", "baseGameInfo.fourEliminateCnt", "baseGameInfo.gameMode", "baseGameInfo.isReplay", "baseGameInfo.sixEliminateCnt", "baseGameInfo.threeEliminateCnt", "ts" ], 
cr),
multi_rate_regN_M: (dr = {}, dr[gn.EModelFeatureSeriesSource.Game] = [ "baseGameInfo.fiveEliminateCnt", "baseGameInfo.fourEliminateCnt", "baseGameInfo.gameMode", "baseGameInfo.isReplay", "baseGameInfo.sixEliminateCnt", "baseGameInfo.threeEliminateCnt", "ts" ], 
dr),
network_type: {},
recent10_inter_wb_rate: (fr = {}, fr[gn.EModelFeatureSeriesSource.Ad] = [ "adType", "gameCnt", "status", "ts" ], 
fr[gn.EModelFeatureSeriesSource.Game] = [ "baseGameInfo.gameNum", "baseGameInfo.isReplay", "ts" ], 
fr),
reg_to_first_cold_sec: {},
regN_active_days: (mr = {}, mr[gn.EModelFeatureSeriesSource.Game] = [ "baseGameInfo.isReplay", "ts" ], 
mr[gn.EModelFeatureSeriesSource.Session] = [ "ts" ], mr),
regN_M_game_time_avg: (pr = {}, pr[gn.EModelFeatureSeriesSource.Game] = [ "baseGameInfo.isReplay", "baseGameInfo.spendTime", "ts" ], 
pr),
revive_break_rate_dayN_M: (hr = {}, hr[gn.EModelFeatureSeriesSource.Game] = [ "baseGameInfo.gameMode", "baseGameInfo.isReplay", "baseGameInfo.reviveSuccessCnt", "classGameInfo.lastHighScore", "classGameInfo.score", "ts" ], 
hr),
revive_break_rate_recentN: (gr = {}, gr[gn.EModelFeatureSeriesSource.Game] = [ "baseGameInfo.gameMode", "baseGameInfo.isReplay", "baseGameInfo.reviveSuccessCnt", "classGameInfo.lastHighScore", "classGameInfo.score", "ts" ], 
gr),
revive_break_rate_regN_M: (vr = {}, vr[gn.EModelFeatureSeriesSource.Game] = [ "baseGameInfo.gameMode", "baseGameInfo.isReplay", "baseGameInfo.reviveSuccessCnt", "classGameInfo.lastHighScore", "classGameInfo.score", "ts" ], 
vr),
revive_click_rate_dayN_M: (yr = {}, yr[gn.EModelFeatureSeriesSource.Game] = [ "baseGameInfo.gameMode", "baseGameInfo.isReplay", "baseGameInfo.reviveClickCnt", "baseGameInfo.reviveShowCnt", "ts" ], 
yr),
revive_click_rate_recentN: (br = {}, br[gn.EModelFeatureSeriesSource.Game] = [ "baseGameInfo.gameMode", "baseGameInfo.isReplay", "baseGameInfo.reviveClickCnt", "baseGameInfo.reviveShowCnt", "ts" ], 
br),
revive_click_rate_regN_M: (_r = {}, _r[gn.EModelFeatureSeriesSource.Game] = [ "baseGameInfo.gameMode", "baseGameInfo.isReplay", "baseGameInfo.reviveClickCnt", "baseGameInfo.reviveShowCnt", "ts" ], 
_r),
revive_show_avg_cnt_dayN_M: (Sr = {}, Sr[gn.EModelFeatureSeriesSource.Game] = [ "baseGameInfo.gameMode", "baseGameInfo.isReplay", "baseGameInfo.reviveShowCnt", "ts" ], 
Sr),
revive_show_avg_cnt_recentN: (Ir = {}, Ir[gn.EModelFeatureSeriesSource.Game] = [ "baseGameInfo.gameMode", "baseGameInfo.isReplay", "baseGameInfo.reviveShowCnt", "ts" ], 
Ir),
revive_show_avg_cnt_regN_M: (wr = {}, wr[gn.EModelFeatureSeriesSource.Game] = [ "baseGameInfo.gameMode", "baseGameInfo.isReplay", "baseGameInfo.reviveShowCnt", "ts" ], 
wr),
revive_show_rate_recentN: (Mr = {}, Mr[gn.EModelFeatureSeriesSource.Game] = [ "baseGameInfo.gameMode", "baseGameInfo.isReplay", "baseGameInfo.reviveShowCnt", "ts" ], 
Mr),
revive_show_rate_regN_M: (Cr = {}, Cr[gn.EModelFeatureSeriesSource.Game] = [ "baseGameInfo.gameMode", "baseGameInfo.isReplay", "baseGameInfo.reviveShowCnt", "ts" ], 
Cr),
revive_success_rate_dayN_M: (Gr = {}, Gr[gn.EModelFeatureSeriesSource.Game] = [ "baseGameInfo.gameMode", "baseGameInfo.isReplay", "baseGameInfo.reviveShowCnt", "baseGameInfo.reviveSuccessCnt", "ts" ], 
Gr),
revive_success_rate_recentN: (Rr = {}, Rr[gn.EModelFeatureSeriesSource.Game] = [ "baseGameInfo.gameMode", "baseGameInfo.isReplay", "baseGameInfo.reviveShowCnt", "baseGameInfo.reviveSuccessCnt", "ts" ], 
Rr),
revive_success_rate_regN_M: (xr = {}, xr[gn.EModelFeatureSeriesSource.Game] = [ "baseGameInfo.gameMode", "baseGameInfo.isReplay", "baseGameInfo.reviveShowCnt", "baseGameInfo.reviveSuccessCnt", "ts" ], 
xr),
revive_success_ratio_regN_M: (Or = {}, Or[gn.EModelFeatureSeriesSource.Game] = [ "baseGameInfo.gameMode", "baseGameInfo.isReplay", "baseGameInfo.reviveShowCnt", "baseGameInfo.reviveSuccessCnt", "ts" ], 
Or),
reward_ecpm_regN_M_avg: (Fr = {}, Fr[gn.EModelFeatureSeriesSource.Ad] = [ "adEcpm", "adType", "ts" ], 
Fr),
reward_ecpm_regN_M_max: (Tr = {}, Tr[gn.EModelFeatureSeriesSource.Ad] = [ "adEcpm", "adType", "ts" ], 
Tr),
reward_pv_regN_M: (Nr = {}, Nr[gn.EModelFeatureSeriesSource.Ad] = [ "adType", "ts" ], 
Nr),
reward_revenue_regN_M: (Er = {}, Er[gn.EModelFeatureSeriesSource.Ad] = [ "adEcpm", "adType", "ts" ], 
Er),
sat_fail_rate_regN_M: (jr = {}, jr[gn.EModelFeatureSeriesSource.Game] = [ "baseGameInfo.gameMode", "baseGameInfo.isReplay", "baseGameInfo.lastAlgoName", "ts" ], 
jr),
sat_score_eff_dayN_M: (Ar = {}, Ar[gn.EModelFeatureSeriesSource.Game] = [ "baseGameInfo.algoInfoByNameSet.cool.score", "baseGameInfo.algoInfoByNameSet.cool.spendTime", "baseGameInfo.gameMode", "baseGameInfo.isReplay", "ts" ], 
Ar),
sat_score_eff_recentN: (kr = {}, kr[gn.EModelFeatureSeriesSource.Game] = [ "baseGameInfo.algoInfoByNameSet.cool.score", "baseGameInfo.algoInfoByNameSet.cool.spendTime", "baseGameInfo.gameMode", "baseGameInfo.isReplay", "ts" ], 
kr),
sat_score_eff_regN_M: (Pr = {}, Pr[gn.EModelFeatureSeriesSource.Game] = [ "baseGameInfo.algoInfoByNameSet.cool.score", "baseGameInfo.algoInfoByNameSet.cool.spendTime", "baseGameInfo.gameMode", "baseGameInfo.isReplay", "ts" ], 
Pr),
score_dayN_M_max: (Lr = {}, Lr[gn.EModelFeatureSeriesSource.Game] = [ "baseGameInfo.gameMode", "baseGameInfo.isReplay", "classGameInfo.score", "ts" ], 
Lr),
score_dayN_M_std: (Br = {}, Br[gn.EModelFeatureSeriesSource.Game] = [ "baseGameInfo.gameMode", "baseGameInfo.isReplay", "classGameInfo.score", "ts" ], 
Br),
score_recentN_avg: (Dr = {}, Dr[gn.EModelFeatureSeriesSource.Game] = [ "baseGameInfo.gameMode", "baseGameInfo.isReplay", "classGameInfo.score", "ts" ], 
Dr),
score_recentN_max: (Wr = {}, Wr[gn.EModelFeatureSeriesSource.Game] = [ "baseGameInfo.gameMode", "baseGameInfo.isReplay", "classGameInfo.score", "ts" ], 
Wr),
score_recentN_std: (Hr = {}, Hr[gn.EModelFeatureSeriesSource.Game] = [ "baseGameInfo.gameMode", "baseGameInfo.isReplay", "classGameInfo.score", "ts" ], 
Hr),
score_recentN_std_capped: (Ur = {}, Ur[gn.EModelFeatureSeriesSource.Game] = [ "baseGameInfo.gameMode", "baseGameInfo.isReplay", "classGameInfo.score", "ts" ], 
Ur),
score_regN_M_avg: (Vr = {}, Vr[gn.EModelFeatureSeriesSource.Game] = [ "baseGameInfo.gameMode", "baseGameInfo.isReplay", "classGameInfo.score", "ts" ], 
Vr),
score_regN_M_max: (zr = {}, zr[gn.EModelFeatureSeriesSource.Game] = [ "baseGameInfo.gameMode", "baseGameInfo.isReplay", "classGameInfo.score", "ts" ], 
zr),
score_regN_M_std: (Jr = {}, Jr[gn.EModelFeatureSeriesSource.Game] = [ "baseGameInfo.gameMode", "baseGameInfo.isReplay", "classGameInfo.score", "ts" ], 
Jr),
score_regN_M_std_capped: (qr = {}, qr[gn.EModelFeatureSeriesSource.Game] = [ "baseGameInfo.gameMode", "baseGameInfo.isReplay", "classGameInfo.score", "ts" ], 
qr),
screen_height: {},
screen_width: {},
today_break_score_rate: (Zr = {}, Zr[gn.EModelFeatureSeriesSource.Game] = [ "baseGameInfo.gameMode", "baseGameInfo.isReplay", "classGameInfo.lastHighScore", "classGameInfo.score", "ts" ], 
Zr),
today_game_cnt: (Yr = {}, Yr[gn.EModelFeatureSeriesSource.Game] = [ "baseGameInfo.isReplay", "ts" ], 
Yr),
today_game_time: ($r = {}, $r[gn.EModelFeatureSeriesSource.Game] = [ "baseGameInfo.isReplay", "baseGameInfo.spendTime", "ts" ], 
$r),
today_inter_pv: (Kr = {}, Kr[gn.EModelFeatureSeriesSource.Ad] = [ "adType", "ts" ], 
Kr),
today_online_time: (Xr = {}, Xr[gn.EModelFeatureSeriesSource.Session] = [ "finalActiveTs", "ts" ], 
Xr),
today_reward_pv: (Qr = {}, Qr[gn.EModelFeatureSeriesSource.Ad] = [ "adType", "ts" ], 
Qr),
total_cold_cnt_regN_M: (en = {}, en[gn.EModelFeatureSeriesSource.Session] = [ "ts" ], 
en),
total_disk: {},
total_game_cnt_regN_M: (tn = {}, tn[gn.EModelFeatureSeriesSource.Game] = [ "baseGameInfo.isReplay", "ts" ], 
tn),
total_online_time_regN_M: (rn = {}, rn[gn.EModelFeatureSeriesSource.Game] = [ "baseGameInfo.isReplay", "baseGameInfo.spendTime", "ts" ], 
rn),
total_pv_regN_M: (nn = {}, nn[gn.EModelFeatureSeriesSource.Ad] = [ "adType", "ts" ], 
nn),
total_ram: {},
total_revenue_regN_M: (on = {}, on[gn.EModelFeatureSeriesSource.Ad] = [ "adEcpm", "adType", "ts" ], 
on),
win_mean_field: (an = {}, an[gn.EModelFeatureSeriesSource.Game] = [ "baseGameInfo.eachRoundMean", "baseGameInfo.gameMode", "baseGameInfo.isReplay", "baseGameInfo.totalRound", "ts" ], 
an),
win_nk_stats: (sn = {}, sn[gn.EModelFeatureSeriesSource.Game] = [ "baseGameInfo.algoInfoByNameSetNew", "baseGameInfo.gameMode", "baseGameInfo.isReplay", "baseGameInfo.totalRound", "ts" ], 
sn),
win_share_ratio: (ln = {}, ln[gn.EModelFeatureSeriesSource.Game] = [ "baseGameInfo.algoInfoByNameSetNew", "baseGameInfo.gameMode", "baseGameInfo.isReplay", "baseGameInfo.totalRound", "ts" ], 
ln),
wm_fail_rate_dayN_M: (un = {}, un[gn.EModelFeatureSeriesSource.Game] = [ "baseGameInfo.gameMode", "baseGameInfo.isReplay", "baseGameInfo.lastAlgoName", "ts" ], 
un),
wm_fail_rate_recentN: (cn = {}, cn[gn.EModelFeatureSeriesSource.Game] = [ "baseGameInfo.gameMode", "baseGameInfo.isReplay", "baseGameInfo.lastAlgoName", "ts" ], 
cn),
wm_fail_rate_regN_M: (dn = {}, dn[gn.EModelFeatureSeriesSource.Game] = [ "baseGameInfo.gameMode", "baseGameInfo.isReplay", "baseGameInfo.lastAlgoName", "ts" ], 
dn),
wm_round_rate_recentN: (fn = {}, fn[gn.EModelFeatureSeriesSource.Game] = [ "baseGameInfo.algoInfoByNameSet.shangZeng.roundCnt", "baseGameInfo.gameMode", "baseGameInfo.isReplay", "baseGameInfo.totalRound", "ts" ], 
fn),
wm_score_eff_dayN_M: (mn = {}, mn[gn.EModelFeatureSeriesSource.Game] = [ "baseGameInfo.algoInfoByNameSet.shangZeng.score", "baseGameInfo.algoInfoByNameSet.shangZeng.spendTime", "baseGameInfo.gameMode", "baseGameInfo.isReplay", "ts" ], 
mn),
wm_score_eff_recentN: (pn = {}, pn[gn.EModelFeatureSeriesSource.Game] = [ "baseGameInfo.algoInfoByNameSet.shangZeng.score", "baseGameInfo.algoInfoByNameSet.shangZeng.spendTime", "baseGameInfo.gameMode", "baseGameInfo.isReplay", "ts" ], 
pn),
wm_score_eff_regN_M: (hn = {}, hn[gn.EModelFeatureSeriesSource.Game] = [ "baseGameInfo.algoInfoByNameSet.shangZeng.score", "baseGameInfo.algoInfoByNameSet.shangZeng.spendTime", "baseGameInfo.gameMode", "baseGameInfo.isReplay", "ts" ], 
hn),
zone_offset: {}
};
cc._RF.pop();
}, {
"../interface/ModelFeatureSeriesSourceInterface": "ModelFeatureSeriesSourceInterface"
} ],
ModelFeatureDotInterface: [ function(e, t, r) {
"use strict";
cc._RF.push(t, "872e3rLy4ZPcb4KNr76HEuT", "ModelFeatureDotInterface");
Object.defineProperty(r, "__esModule", {
value: !0
});
r.ModelFeatureDotInterface = void 0;
r.ModelFeatureDotInterface = {
TouchEnd: "game_touchend_block_done",
GameEnd: "usr_data_game_end",
AdShow: "usr_data_ad_show",
GameRevive: "game_revive"
};
cc._RF.pop();
}, {} ],
ModelFeatureGameCatalog: [ function(e, t, r) {
"use strict";
cc._RF.push(t, "46a5f8p6vNACrSYQwdpDU+p", "ModelFeatureGameCatalog");
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
}, s = this && this.__spread || function() {
for (var e = [], t = 0; t < arguments.length; t++) e = e.concat(i(arguments[t]));
return e;
}, l = this && this.__values || function(e) {
var t = "function" == typeof Symbol && Symbol.iterator, r = t && e[t], n = 0;
if (r) return r.call(e);
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
Object.defineProperty(r, "__esModule", {
value: !0
});
r.ModelFeatureGameCatalog = void 0;
var u = e("../wiring/decorators/forCatalog"), c = e("../wiring/ModelFeatureCatalogBase"), d = e("../utils/ModelFeatureAlgoClassifier"), f = e("../../../../scripts/modules/score/vo/ScoreInfo"), m = [ "other", "normalFill", "difficultyTrap", "weightControl", "coolBoost", "orderFill", "random" ], p = function(e) {
o(t, e);
function t() {
return null !== e && e.apply(this, arguments) || this;
}
t.prototype.lifetime_game_cnt = function(e) {
void 0 === e && (e = !0);
var t = this.ctx.totalGameInfo.chapterInfo, r = this.ctx.totalGameInfo.classInfo;
return e ? t.totalNoReplayGameCnt + r.totalNoReplayGameCnt : t.totalNoReplayGameCnt + t.totalReplayGameCnt + r.totalNoReplayGameCnt + r.totalReplayGameCnt;
};
t.prototype.today_game_cnt = function(e) {
void 0 === e && (e = !0);
return this.ctx.games.back().excludeReplay(e).timeRange(this.time.today).list().length;
};
t.prototype.today_online_time = function() {
return this.math.sum(this.ctx.sessions.back().timeRange(this.time.today).list(), function(e) {
var t;
return (null !== (t = e.finalActiveTs) && void 0 !== t ? t : e.ts) - e.ts;
});
};
t.prototype.today_game_time = function(e) {
void 0 === e && (e = !0);
return this.math.sum(this.ctx.games.back().excludeReplay(e).timeRange(this.time.today).list(), function(e) {
return e.baseGameInfo.spendTime;
});
};
t.prototype.cold_start_rank = function() {
return this.ctx.sessions.back().timeRange(this.time.today).list().length;
};
t.prototype.today_break_score_rate = function(e) {
void 0 === e && (e = !0);
return this.math.rate(this.ctx.games.back().mode("class").excludeReplay(e).timeRange(this.time.today).list(), function(e) {
return e.classGameInfo.lastHighScore >= 0 && e.classGameInfo.score > e.classGameInfo.lastHighScore;
});
};
t.prototype.first_game_max_combo = function(e) {
var t, r;
void 0 === e && (e = !0);
var n = this.ctx.games.front().excludeReplay(e).first();
return null !== (r = null === (t = null == n ? void 0 : n.baseGameInfo) || void 0 === t ? void 0 : t.maxCombo) && void 0 !== r ? r : 0;
};
t.prototype.cold_start_Nh = function(e) {
return this.ctx.sessions.back().timeRange(this.time.recentN(e, "hour")).list().length;
};
t.prototype.game_cnt_endless_Nh = function(e, t) {
void 0 === t && (t = !0);
return this.ctx.games.back().mode("class").excludeReplay(t).timeRange(this.time.recentN(e, "hour")).list().length;
};
t.prototype.max_grade_N = function(e, t) {
void 0 === t && (t = !0);
return this.math.max(this.ctx.games.back().mode("class").excludeReplay(t).timeRange(this.time.recentN(3, "day")).tail(e).list(), function(e) {
return e.classGameInfo.score;
});
};
t.prototype.regN_active_days = function(e) {
var t = this, r = this.ctx.sessions.front().timeRange(this.time.sinceN(e, "day")).list(), n = this.ctx.games.front().excludeReplay().timeRange(this.time.sinceN(e, "day")).list();
return new Set(s(r.map(function(e) {
return t.time.dayZero(e.ts);
}), n.map(function(e) {
return t.time.dayZero(e.ts);
}))).size;
};
t.prototype.regN_M_game_time_avg = function(e, t, r) {
void 0 === r && (r = !0);
return this.math.avg(this.ctx.games.front().excludeReplay(r).timeRange(this.time.sinceN_M(e - 1, t, "day")).list(), function(e) {
return e.baseGameInfo.spendTime;
});
};
t.prototype.lifetime_max_score = function() {
var e;
return null !== (e = null === f.scoreInfo || void 0 === f.scoreInfo ? void 0 : f.scoreInfo.highRecordScore) && void 0 !== e ? e : void 0;
};
t.prototype.hour_interval_install_now = function() {
if (this.time.install) return Math.floor((this.time.now - this.time.install) / 36e5);
};
t.prototype.install_date_during = function() {
if (this.time.install) return Math.floor((this.time.now - this.time.install) / 864e5);
};
t.prototype.hour_interval_last_active_now_rate = function() {
if (this.time.install) {
var e = this.ctx.games.back().excludeReplay(!0).last();
if (e) {
var t = (this.time.now - e.ts) / 36e5, r = (this.time.now - this.time.install) / 36e5;
return r > 0 ? t / r : NaN;
}
}
};
t.prototype.reg_to_first_cold_sec = function() {
var e = this.ctx.firstEnterInfo;
if ((null == e ? void 0 : e.firstColdStartTs) && (null == e ? void 0 : e.installTs)) return (e.firstColdStartTs - e.installTs) / 1e3;
};
t.prototype.first_cold_to_first_game_sec = function() {
var e = this.ctx.firstEnterInfo;
if ((null == e ? void 0 : e.firstGameTs) && (null == e ? void 0 : e.firstColdStartTs)) return (e.firstGameTs - e.firstColdStartTs) / 1e3;
};
t.prototype.coin_value_regN_M_avg = function(e, t, r, n) {
void 0 === r && (r = !0);
void 0 === n && (n = "class");
return this.math.avg(this.ctx.games.front().mode(n).excludeReplay(r).timeRange(this.time.sinceN_M(e - 1, t, "day")).list(), function(e) {
return e.baseGameInfo.scoreGoldContent;
});
};
t.prototype.coin_value_regN_M_max = function(e, t, r, n) {
void 0 === r && (r = !0);
void 0 === n && (n = "class");
return this.math.max(this.ctx.games.front().mode(n).excludeReplay(r).timeRange(this.time.sinceN_M(e - 1, t, "day")).list(), function(e) {
return e.baseGameInfo.scoreGoldContent;
});
};
t.prototype.coin_value_recentN_avg = function(e, t, r, n) {
void 0 === t && (t = 3);
void 0 === r && (r = !0);
void 0 === n && (n = "class");
var o = this.ctx.games.back().mode(n).excludeReplay(r).timeRange(this.time.recentN(t, "day")).tail(e).list();
return this.math.avg(o, function(e) {
return e.baseGameInfo.scoreGoldContent;
});
};
t.prototype.coin_value_recentN_max = function(e, t, r, n) {
void 0 === t && (t = 3);
void 0 === r && (r = !0);
void 0 === n && (n = "class");
var o = this.ctx.games.back().mode(n).excludeReplay(r).timeRange(this.time.recentN(t, "day")).tail(e).list();
return this.math.max(o, function(e) {
return e.baseGameInfo.scoreGoldContent;
});
};
t.prototype.first_round_matrix_regN_M_avg = function(e, t, r, n) {
void 0 === r && (r = !0);
void 0 === n && (n = "class");
return this.math.avg(this.ctx.games.front().mode(n).excludeReplay(r).timeRange(this.time.sinceN_M(e - 1, t, "day")).list(), function(e) {
return e.baseGameInfo.initWeight;
});
};
t.prototype.first_round_matrix_regN_M_max = function(e, t, r, n) {
void 0 === r && (r = !0);
void 0 === n && (n = "class");
return this.math.max(this.ctx.games.front().mode(n).excludeReplay(r).timeRange(this.time.sinceN_M(e - 1, t, "day")).list(), function(e) {
return e.baseGameInfo.initWeight;
});
};
t.prototype.first_round_matrix_regN_M_std = function(e, t, r, n) {
void 0 === r && (r = !0);
void 0 === n && (n = "class");
return this.math.stdSample(this.ctx.games.front().mode(n).excludeReplay(r).timeRange(this.time.sinceN_M(e - 1, t, "day")).list(), function(e) {
return e.baseGameInfo.initWeight;
});
};
t.prototype.flow_score_regN_M_avg = function(e, t, r, n) {
void 0 === r && (r = !0);
void 0 === n && (n = "class");
return this.math.avg(this.ctx.games.front().mode(n).excludeReplay(r).timeRange(this.time.sinceN_M(e - 1, t, "day")).list(), function(e) {
return e.baseGameInfo.flowScore;
});
};
t.prototype.flow_score_regN_M_max = function(e, t, r, n) {
void 0 === r && (r = !0);
void 0 === n && (n = "class");
return this.math.max(this.ctx.games.front().mode(n).excludeReplay(r).timeRange(this.time.sinceN_M(e - 1, t, "day")).list(), function(e) {
return e.baseGameInfo.flowScore;
});
};
t.prototype.fill_fail_rate_regN_M = function(e, t, r, n) {
void 0 === r && (r = !0);
void 0 === n && (n = "class");
return this.math.rate(this.ctx.games.front().mode(n).excludeReplay(r).timeRange(this.time.sinceN_M(e - 1, t, "day")).list(), function(e) {
return d.ModelFeatureAlgoClassifier.isFill(e.baseGameInfo.lastAlgoName);
});
};
t.prototype.hard_fail_rate_regN_M = function(e, t, r, n) {
void 0 === r && (r = !0);
void 0 === n && (n = "class");
var o = this.ctx.games.front().mode(n).excludeReplay(r).timeRange(this.time.sinceN_M(e - 1, t, "day")).list();
return 0 === this.sumHardRounds(o) ? NaN : this.math.rate(o, function(e) {
return d.ModelFeatureAlgoClassifier.isHard(e.baseGameInfo.lastAlgoName);
});
};
t.prototype.sat_fail_rate_regN_M = function(e, t, r, n) {
void 0 === r && (r = !0);
void 0 === n && (n = "class");
return this.math.rate(this.ctx.games.front().mode(n).excludeReplay(r).timeRange(this.time.sinceN_M(e - 1, t, "day")).list(), function(e) {
return d.ModelFeatureAlgoClassifier.isCool(e.baseGameInfo.lastAlgoName);
});
};
t.prototype.wm_fail_rate_regN_M = function(e, t, r, n) {
void 0 === r && (r = !0);
void 0 === n && (n = "class");
return this.math.rate(this.ctx.games.front().mode(n).excludeReplay(r).timeRange(this.time.sinceN_M(e - 1, t, "day")).list(), function(e) {
return d.ModelFeatureAlgoClassifier.isShangZeng(e.baseGameInfo.lastAlgoName);
});
};
t.prototype.fill_score_eff_regN_M = function(e, t, r, n) {
var o = this;
void 0 === r && (r = !0);
void 0 === n && (n = "class");
return this.math.avg(this.ctx.games.front().mode(n).excludeReplay(r).timeRange(this.time.sinceN_M(e - 1, t, "day")).list(), function(e) {
var t;
return o.algoScoreEff(null === (t = e.baseGameInfo) || void 0 === t ? void 0 : t.algoInfoByNameSet.blank);
});
};
t.prototype.hard_score_eff_regN_M = function(e, t, r, n) {
var o = this;
void 0 === r && (r = !0);
void 0 === n && (n = "class");
return this.math.avg(this.ctx.games.front().mode(n).excludeReplay(r).timeRange(this.time.sinceN_M(e - 1, t, "day")).list(), function(e) {
var t;
return o.algoScoreEff(null === (t = e.baseGameInfo) || void 0 === t ? void 0 : t.algoInfoByNameSet.difficulty);
});
};
t.prototype.sat_score_eff_regN_M = function(e, t, r, n) {
var o = this;
void 0 === r && (r = !0);
void 0 === n && (n = "class");
return this.math.avg(this.ctx.games.front().mode(n).excludeReplay(r).timeRange(this.time.sinceN_M(e - 1, t, "day")).list(), function(e) {
var t;
return o.algoScoreEff(null === (t = e.baseGameInfo) || void 0 === t ? void 0 : t.algoInfoByNameSet.cool);
});
};
t.prototype.wm_score_eff_regN_M = function(e, t, r, n) {
var o = this;
void 0 === r && (r = !0);
void 0 === n && (n = "class");
return this.math.avg(this.ctx.games.front().mode(n).excludeReplay(r).timeRange(this.time.sinceN_M(e - 1, t, "day")).list(), function(e) {
var t;
return o.algoScoreEff(null === (t = e.baseGameInfo) || void 0 === t ? void 0 : t.algoInfoByNameSet.shangZeng);
});
};
t.prototype.hard_round_rate_regN_M = function(e, t, r, n) {
var o, a, i;
void 0 === r && (r = !0);
void 0 === n && (n = "class");
var s = this.ctx.games.front().mode(n).excludeReplay(r).timeRange(this.time.sinceN_M(e - 1, t, "day")).list(), u = 0;
try {
for (var c = l(s), d = c.next(); !d.done; d = c.next()) u += null !== (i = d.value.baseGameInfo.totalRound) && void 0 !== i ? i : 0;
} catch (e) {
o = {
error: e
};
} finally {
try {
d && !d.done && (a = c.return) && a.call(c);
} finally {
if (o) throw o.error;
}
}
var f = this.sumHardRounds(s);
return u > 0 ? f / u : NaN;
};
t.prototype.first_hard_time_regN_M_avg = function(e, t, r, n) {
void 0 === r && (r = !0);
void 0 === n && (n = "class");
return this.math.avg(this.ctx.games.front().mode(n).excludeReplay(r).timeRange(this.time.sinceN_M(e - 1, t, "day")).list(), function(e) {
return e.baseGameInfo.firstDifficultySpendTime;
});
};
t.prototype.first_hard_time_regN_M_max = function(e, t, r, n) {
void 0 === r && (r = !0);
void 0 === n && (n = "class");
return this.math.max(this.ctx.games.front().mode(n).excludeReplay(r).timeRange(this.time.sinceN_M(e - 1, t, "day")).list(), function(e) {
return e.baseGameInfo.firstDifficultySpendTime;
});
};
t.prototype.first_hard_time_regN_M_std = function(e, t, r, n) {
void 0 === r && (r = !0);
void 0 === n && (n = "class");
return this.math.stdSample(this.ctx.games.front().mode(n).excludeReplay(r).timeRange(this.time.sinceN_M(e - 1, t, "day")).list(), function(e) {
return e.baseGameInfo.firstDifficultySpendTime;
});
};
t.prototype.fast_fun_rate_regN_M_avg = function(e, t, r, n) {
var o = this;
void 0 === r && (r = !0);
void 0 === n && (n = "class");
return this.math.avg(this.ctx.games.front().mode(n).excludeReplay(r).timeRange(this.time.sinceN_M(e - 1, t, "day")).list(), function(e) {
var t, r;
return o.math.div(null !== (t = e.baseGameInfo.quickPutCoolRoundCount) && void 0 !== t ? t : 0, null !== (r = e.baseGameInfo.totalRound) && void 0 !== r ? r : 0);
});
};
t.prototype.fast_fun_rate_regN_M_max = function(e, t, r, n) {
var o = this;
void 0 === r && (r = !0);
void 0 === n && (n = "class");
return this.math.max(this.ctx.games.front().mode(n).excludeReplay(r).timeRange(this.time.sinceN_M(e - 1, t, "day")).list(), function(e) {
var t, r;
return o.math.div(null !== (t = e.baseGameInfo.quickPutCoolRoundCount) && void 0 !== t ? t : 0, null !== (r = e.baseGameInfo.totalRound) && void 0 !== r ? r : 0);
});
};
t.prototype.highw_fun_rate_regN_M_avg = function(e, t, r, n) {
var o = this;
void 0 === r && (r = !0);
void 0 === n && (n = "class");
return this.math.avg(this.ctx.games.front().mode(n).excludeReplay(r).timeRange(this.time.sinceN_M(e - 1, t, "day")).list(), function(e) {
var t, r;
return o.math.div(null !== (t = e.baseGameInfo.highWeightCollRoundCnt) && void 0 !== t ? t : 0, null !== (r = e.baseGameInfo.totalRound) && void 0 !== r ? r : 0);
});
};
t.prototype.highw_fun_rate_regN_M_max = function(e, t, r, n) {
var o = this;
void 0 === r && (r = !0);
void 0 === n && (n = "class");
return this.math.max(this.ctx.games.front().mode(n).excludeReplay(r).timeRange(this.time.sinceN_M(e - 1, t, "day")).list(), function(e) {
var t, r;
return o.math.div(null !== (t = e.baseGameInfo.highWeightCollRoundCnt) && void 0 !== t ? t : 0, null !== (r = e.baseGameInfo.totalRound) && void 0 !== r ? r : 0);
});
};
t.prototype.max_consec_fun_regN_M_avg = function(e, t, r, n) {
void 0 === r && (r = !0);
void 0 === n && (n = "class");
return this.math.avg(this.ctx.games.front().mode(n).excludeReplay(r).timeRange(this.time.sinceN_M(e - 1, t, "day")).list(), function(e) {
return e.baseGameInfo.maxContinueCoolRoundLen;
});
};
t.prototype.max_consec_nofun_regN_M_avg = function(e, t, r, n) {
void 0 === r && (r = !0);
void 0 === n && (n = "class");
return this.math.avg(this.ctx.games.front().mode(n).excludeReplay(r).timeRange(this.time.sinceN_M(e - 1, t, "day")).list(), function(e) {
return e.baseGameInfo.maxConsecutiveNonCoolRoundLen;
});
};
t.prototype.break_amp_regN_M_avg = function(e, t, r) {
var n = this;
void 0 === r && (r = !0);
var o = this.ctx.games.front().mode("class").excludeReplay(r).timeRange(this.time.sinceN_M(e - 1, t, "day")).list().filter(function(e) {
return e.classGameInfo.score > e.classGameInfo.lastHighScore;
});
return this.math.avg(o, function(e) {
return n.breakAmp(e.classGameInfo.score, e.classGameInfo.lastHighScore);
});
};
t.prototype.break_amp_regN_M_max = function(e, t, r) {
var n = this;
void 0 === r && (r = !0);
var o = this.ctx.games.front().mode("class").excludeReplay(r).timeRange(this.time.sinceN_M(e - 1, t, "day")).list().filter(function(e) {
return e.classGameInfo.score > e.classGameInfo.lastHighScore;
});
return this.math.max(o, function(e) {
return n.breakAmp(e.classGameInfo.score, e.classGameInfo.lastHighScore);
});
};
t.prototype.break_gap_regN_M_avg = function(e, t, r) {
void 0 === r && (r = !0);
var n = this.ctx.games.front().mode("class").excludeReplay(r).timeRange(this.time.sinceN_M(e - 1, t, "day")).list();
return this.math.avg(this.collectBreakGaps(n), function(e) {
return e;
});
};
t.prototype.break_gap_regN_M_max = function(e, t, r) {
void 0 === r && (r = !0);
var n = this.ctx.games.front().mode("class").excludeReplay(r).timeRange(this.time.sinceN_M(e - 1, t, "day")).list();
return this.math.max(this.collectBreakGaps(n), function(e) {
return e;
});
};
t.prototype.break_rate_regN_M = function(e, t, r) {
void 0 === r && (r = !0);
return this.math.rate(this.ctx.games.front().mode("class").excludeReplay(r).timeRange(this.time.sinceN_M(e - 1, t, "day")).list(), function(e) {
return e.classGameInfo.score > e.classGameInfo.lastHighScore;
});
};
t.prototype.last_break_gap = function(e) {
void 0 === e && (e = !0);
for (var t = this.ctx.games.back().mode("class").excludeReplay(e).list(), r = 0, n = t.length - 1; n >= 0; n--) {
if (t[n].classGameInfo.score > t[n].classGameInfo.lastHighScore) return r;
r++;
}
return -1;
};
t.prototype.clean_rate_regN_M = function(e, t, r, n) {
void 0 === r && (r = !0);
void 0 === n && (n = "class");
var o = this.ctx.games.front().mode(n).excludeReplay(r).timeRange(this.time.sinceN_M(e - 1, t, "day")).list();
return this.math.avg(o, function(e) {
var t;
return null !== (t = e.baseGameInfo.clearScreenCnt) && void 0 !== t ? t : 0;
});
};
t.prototype.duisi_rate_regN_M = function(e, t, r, n) {
void 0 === r && (r = !0);
void 0 === n && (n = "class");
var o = this.ctx.games.front().mode(n).excludeReplay(r).timeRange(this.time.sinceN_M(e - 1, t, "day")).list();
return this.math.rate(o, function(e) {
return !1 === e.baseGameInfo.hasLiveWay;
});
};
t.prototype.multi_rate_regN_M = function(e, t, r, n) {
void 0 === r && (r = !0);
void 0 === n && (n = "class");
var o = this.ctx.games.front().mode(n).excludeReplay(r).timeRange(this.time.sinceN_M(e - 1, t, "day")).list();
return this.math.avg(o, function(e) {
var t, r, n, o;
return (null !== (t = e.baseGameInfo.threeEliminateCnt) && void 0 !== t ? t : 0) + (null !== (r = e.baseGameInfo.fourEliminateCnt) && void 0 !== r ? r : 0) + (null !== (n = e.baseGameInfo.fiveEliminateCnt) && void 0 !== n ? n : 0) + (null !== (o = e.baseGameInfo.sixEliminateCnt) && void 0 !== o ? o : 0);
});
};
t.prototype.game_time_regN_M_std = function(e, t, r, n) {
void 0 === r && (r = !0);
void 0 === n && (n = "class");
return this.math.stdSample(this.ctx.games.front().mode(n).excludeReplay(r).timeRange(this.time.sinceN_M(e - 1, t, "day")).list(), function(e) {
return e.baseGameInfo.spendTime;
});
};
t.prototype.score_regN_M_avg = function(e, t, r) {
void 0 === r && (r = !0);
return this.math.avg(this.ctx.games.front().mode("class").excludeReplay(r).timeRange(this.time.sinceN_M(e - 1, t, "day")).list(), function(e) {
return e.classGameInfo.score;
});
};
t.prototype.score_regN_M_max = function(e, t, r) {
void 0 === r && (r = !0);
return this.math.max(this.ctx.games.front().mode("class").excludeReplay(r).timeRange(this.time.sinceN_M(e - 1, t, "day")).list(), function(e) {
return e.classGameInfo.score;
});
};
t.prototype.score_regN_M_std = function(e, t, r) {
void 0 === r && (r = !0);
return this.math.stdSample(this.ctx.games.front().mode("class").excludeReplay(r).timeRange(this.time.sinceN_M(e - 1, t, "day")).list(), function(e) {
return e.classGameInfo.score;
});
};
t.prototype.max_combo_regN_M_avg = function(e, t, r, n) {
void 0 === r && (r = !0);
void 0 === n && (n = "class");
return this.math.avg(this.ctx.games.front().mode(n).excludeReplay(r).timeRange(this.time.sinceN_M(e - 1, t, "day")).list(), function(e) {
return e.baseGameInfo.maxCombo;
});
};
t.prototype.max_combo_regN_M_max = function(e, t, r, n) {
void 0 === r && (r = !0);
void 0 === n && (n = "class");
return this.math.max(this.ctx.games.front().mode(n).excludeReplay(r).timeRange(this.time.sinceN_M(e - 1, t, "day")).list(), function(e) {
return e.baseGameInfo.maxCombo;
});
};
t.prototype.matrix_complex_regN_M_avg = function(e, t, r, n) {
void 0 === r && (r = !0);
void 0 === n && (n = "class");
return this.math.avg(this.ctx.games.front().mode(n).excludeReplay(r).timeRange(this.time.sinceN_M(e - 1, t, "day")).list(), function(e) {
return e.baseGameInfo.eachRoundInitWeightAvg;
});
};
t.prototype.matrix_complex_regN_M_std = function(e, t, r, n) {
void 0 === r && (r = !0);
void 0 === n && (n = "class");
return this.math.stdSample(this.ctx.games.front().mode(n).excludeReplay(r).timeRange(this.time.sinceN_M(e - 1, t, "day")).list(), function(e) {
return e.baseGameInfo.eachRoundInitWeightAvg;
});
};
t.prototype.revive_break_rate_regN_M = function(e, t, r) {
void 0 === r && (r = !0);
var n = this.ctx.games.front().mode("class").excludeReplay(r).timeRange(this.time.sinceN_M(e - 1, t, "day")).list();
return this.math.rate(n, function(e) {
var t;
return (null !== (t = e.baseGameInfo.reviveSuccessCnt) && void 0 !== t ? t : 0) > 0 && e.classGameInfo.score > e.classGameInfo.lastHighScore;
});
};
t.prototype.revive_show_rate_regN_M = function(e, t, r, n) {
void 0 === r && (r = !0);
void 0 === n && (n = "class");
return this.math.rate(this.ctx.games.front().mode(n).excludeReplay(r).timeRange(this.time.sinceN_M(e - 1, t, "day")).list(), function(e) {
var t;
return (null !== (t = e.baseGameInfo.reviveShowCnt) && void 0 !== t ? t : 0) > 0;
});
};
t.prototype.revive_success_rate_regN_M = function(e, t, r, n) {
void 0 === r && (r = !0);
void 0 === n && (n = "class");
var o = this.ctx.games.front().mode(n).excludeReplay(r).timeRange(this.time.sinceN_M(e - 1, t, "day")).list().filter(function(e) {
var t;
return (null !== (t = e.baseGameInfo.reviveShowCnt) && void 0 !== t ? t : 0) > 0;
});
return this.math.rate(o, function(e) {
var t;
return (null !== (t = e.baseGameInfo.reviveSuccessCnt) && void 0 !== t ? t : 0) > 0;
});
};
t.prototype.last_coin_value = function(e, t) {
var r, n;
void 0 === e && (e = !0);
void 0 === t && (t = "class");
var o = this.ctx.games.back().mode(t).excludeReplay(e).tail(1).first();
return null !== (n = null === (r = null == o ? void 0 : o.baseGameInfo) || void 0 === r ? void 0 : r.scoreGoldContent) && void 0 !== n ? n : 0;
};
t.prototype.last_flow_score = function(e, t) {
var r, n;
void 0 === e && (e = !0);
void 0 === t && (t = "class");
var o = this.ctx.games.back().mode(t).excludeReplay(e).tail(1).first();
return null !== (n = null === (r = null == o ? void 0 : o.baseGameInfo) || void 0 === r ? void 0 : r.flowScore) && void 0 !== n ? n : 0;
};
t.prototype.last_grade = function(e) {
var t, r;
void 0 === e && (e = !0);
var n = this.ctx.games.back().mode("class").excludeReplay(e).tail(1).first();
return null !== (r = null === (t = null == n ? void 0 : n.classGameInfo) || void 0 === t ? void 0 : t.score) && void 0 !== r ? r : 0;
};
t.prototype.last_inter_show = function(e, t) {
var r;
void 0 === e && (e = !0);
void 0 === t && (t = "class");
var n = this.ctx.games.back().mode(t).excludeReplay(e).tail(1).first();
if (!n) return NaN;
var o = null === (r = n.baseGameInfo) || void 0 === r ? void 0 : r.gameNum;
return this.ctx.ads.back().interstitial().list().filter(function(e) {
return e.gameCnt === o;
}).length;
};
t.prototype.last_real_time = function(e, t) {
var r, n;
void 0 === e && (e = !0);
void 0 === t && (t = "class");
var o = this.ctx.games.back().mode(t).excludeReplay(e).tail(1).first();
return null !== (n = null === (r = null == o ? void 0 : o.baseGameInfo) || void 0 === r ? void 0 : r.spendTime) && void 0 !== n ? n : 0;
};
t.prototype.last_revive_show = function(e, t) {
var r, n;
void 0 === e && (e = !0);
void 0 === t && (t = "class");
var o = this.ctx.games.back().mode(t).excludeReplay(e).tail(1).first();
return null !== (n = null === (r = null == o ? void 0 : o.baseGameInfo) || void 0 === r ? void 0 : r.reviveShowCnt) && void 0 !== n ? n : 0;
};
t.prototype.first3_clean_cnt = function(e, t) {
void 0 === e && (e = !0);
void 0 === t && (t = "class");
return this.math.sum(this.ctx.games.front().mode(t).excludeReplay(e).head(3).list(), function(e) {
return e.baseGameInfo.clearScreenCnt;
});
};
t.prototype.first3_multi_cnt = function(e, t) {
void 0 === e && (e = !0);
void 0 === t && (t = "class");
return this.math.sum(this.ctx.games.front().mode(t).excludeReplay(e).head(3).list(), function(e) {
var t, r, n, o;
return (null !== (t = e.baseGameInfo.threeEliminateCnt) && void 0 !== t ? t : 0) + (null !== (r = e.baseGameInfo.fourEliminateCnt) && void 0 !== r ? r : 0) + (null !== (n = e.baseGameInfo.fiveEliminateCnt) && void 0 !== n ? n : 0) + (null !== (o = e.baseGameInfo.sixEliminateCnt) && void 0 !== o ? o : 0);
});
};
t.prototype.first3_hard_fail_rate = function(e, t) {
void 0 === e && (e = !0);
void 0 === t && (t = "class");
var r = this.ctx.games.front().mode(t).excludeReplay(e).head(3).list();
return 0 === this.sumHardRounds(r) ? NaN : this.math.rate(r, function(e) {
return d.ModelFeatureAlgoClassifier.isHard(e.baseGameInfo.lastAlgoName);
});
};
t.prototype.first3_hard_round_rate = function(e, t) {
var r, n, o;
void 0 === e && (e = !0);
void 0 === t && (t = "class");
var a = this.ctx.games.front().mode(t).excludeReplay(e).head(3).list(), i = 0;
try {
for (var s = l(a), u = s.next(); !u.done; u = s.next()) i += null !== (o = u.value.baseGameInfo.totalRound) && void 0 !== o ? o : 0;
} catch (e) {
r = {
error: e
};
} finally {
try {
u && !u.done && (n = s.return) && n.call(s);
} finally {
if (r) throw r.error;
}
}
var c = this.sumHardRounds(a);
return i > 0 ? c / i : NaN;
};
t.prototype.first3_sat_score_eff = function(e, t) {
var r = this;
void 0 === e && (e = !0);
void 0 === t && (t = "class");
var n = this.ctx.games.front().mode(t).excludeReplay(e).head(3).list();
return this.math.avg(n, function(e) {
var t;
return r.algoScoreEff(null === (t = e.baseGameInfo) || void 0 === t ? void 0 : t.algoInfoByNameSet.cool);
});
};
t.prototype.first3_wm_score_eff = function(e, t) {
var r = this;
void 0 === e && (e = !0);
void 0 === t && (t = "class");
var n = this.ctx.games.front().mode(t).excludeReplay(e).head(3).list();
return this.math.avg(n, function(e) {
var t;
return r.algoScoreEff(null === (t = e.baseGameInfo) || void 0 === t ? void 0 : t.algoInfoByNameSet.shangZeng);
});
};
t.prototype.first_cold_session_endless_cnt = function(e) {
void 0 === e && (e = !0);
var t = this.ctx.sessions.front().first();
if (!t) return 0;
var r = this.ctx.sessions.front().at(1), n = r ? r.ts : new Date(t.ts).setHours(23, 59, 59, 999);
return this.ctx.games.front().mode("class").excludeReplay(e).timeRange({
start: t.ts,
end: n
}).list().length;
};
t.prototype.avg_cold_cnt_regN_M = function(e, t) {
var r = this, n = this.ctx.sessions.front().timeRange(this.time.sinceN_M(e - 1, t, "day")).list(), o = new Set(n.map(function(e) {
return r.time.dayZero(e.ts);
}));
return o.size > 0 ? n.length / o.size : NaN;
};
t.prototype.avg_session_cnt_recentN = function(e) {
var t = this, r = this.ctx.sessions.back().timeRange(this.time.recentN(e, "day")).list(), n = new Set(r.map(function(e) {
return t.time.dayZero(e.ts);
}));
return n.size > 0 ? r.length / n.size : NaN;
};
t.prototype.avg_cold_interval_regN_M = function(e, t) {
var r = this.ctx.sessions.front().timeRange(this.time.sinceN_M(e - 1, t, "day")).list();
if (r.length < 2) return NaN;
for (var n = [], o = 1; o < r.length; o++) n.push(r[o].ts - r[o - 1].ts);
return this.math.avg(n, function(e) {
return e;
});
};
t.prototype.total_cold_cnt_regN_M = function(e, t) {
return this.ctx.sessions.front().timeRange(this.time.sinceN_M(e - 1, t, "day")).list().length;
};
t.prototype.avg_game_cnt_regN_M = function(e, t, r) {
var n = this;
void 0 === r && (r = !0);
var o = this.ctx.games.front().excludeReplay(r).timeRange(this.time.sinceN_M(e - 1, t, "day")).list(), a = new Set(o.map(function(e) {
return n.time.dayZero(e.ts);
}));
return a.size > 0 ? o.length / a.size : NaN;
};
t.prototype.avg_online_time_regN_M = function(e, t, r) {
var n = this;
void 0 === r && (r = !0);
var o = this.ctx.games.front().excludeReplay(r).timeRange(this.time.sinceN_M(e - 1, t, "day")).list(), a = new Set(o.map(function(e) {
return n.time.dayZero(e.ts);
})), i = this.math.sum(o, function(e) {
return e.baseGameInfo.spendTime;
});
return a.size > 0 ? i / a.size : NaN;
};
t.prototype.total_online_time_regN_M = function(e, t, r) {
void 0 === r && (r = !0);
return this.math.sum(this.ctx.games.front().excludeReplay(r).timeRange(this.time.sinceN_M(e - 1, t, "day")).list(), function(e) {
return e.baseGameInfo.spendTime;
});
};
t.prototype.total_game_cnt_regN_M = function(e, t, r) {
void 0 === r && (r = !0);
return this.ctx.games.front().excludeReplay(r).timeRange(this.time.sinceN_M(e - 1, t, "day")).list().length;
};
t.prototype.consec_active_days_regN_M = function(e, t) {
var r = this, n = this.ctx.sessions.front().timeRange(this.time.sinceN_M(e - 1, t, "day")).list(), o = this.ctx.games.front().excludeReplay().timeRange(this.time.sinceN_M(e - 1, t, "day")).list(), a = new Set(s(n.map(function(e) {
return r.time.dayZero(e.ts);
}), o.map(function(e) {
return r.time.dayZero(e.ts);
}))), i = s(a).sort(function(e, t) {
return e - t;
});
if (0 === i.length) return NaN;
for (var l = 1, u = 1, c = 1; c < i.length; c++) 1 === Math.round((i[c] - i[c - 1]) / 864e5) ? ++u > l && (l = u) : u = 1;
return l;
};
t.prototype.consec_inactive_days_regN_M = function(e, t) {
var r = this, n = this.ctx.sessions.front().timeRange(this.time.sinceN_M(e - 1, t, "day")).list(), o = this.ctx.games.front().excludeReplay().timeRange(this.time.sinceN_M(e - 1, t, "day")).list(), a = new Set(s(n.map(function(e) {
return r.time.dayZero(e.ts);
}), o.map(function(e) {
return r.time.dayZero(e.ts);
}))), i = s(a).sort(function(e, t) {
return e - t;
});
if (i.length < 2) return 0;
for (var l = 0, u = 1; u < i.length; u++) {
var c = Math.round((i[u] - i[u - 1]) / 864e5) - 1;
c > l && (l = c);
}
return l;
};
t.prototype.daytime_game_rate_regN_M = function(e, t, r) {
void 0 === r && (r = !0);
var n = this.ctx.games.front().excludeReplay(r).timeRange(this.time.sinceN_M(e - 1, t, "day")).list();
return this.math.rate(n, function(e) {
var t = new Date(e.ts).getHours();
return t >= 6 && t < 22;
});
};
t.prototype.flow_score_recentN_avg = function(e, t, r, n) {
void 0 === t && (t = 3);
void 0 === r && (r = !0);
void 0 === n && (n = "class");
var o = this.ctx.games.back().mode(n).excludeReplay(r).timeRange(this.time.recentN(t, "day")).tail(e).list();
return this.math.avg(o, function(e) {
return e.baseGameInfo.flowScore;
});
};
t.prototype.flow_score_recentN_max = function(e, t, r, n) {
void 0 === t && (t = 3);
void 0 === r && (r = !0);
void 0 === n && (n = "class");
var o = this.ctx.games.back().mode(n).excludeReplay(r).timeRange(this.time.recentN(t, "day")).tail(e).list();
return this.math.max(o, function(e) {
return e.baseGameInfo.flowScore;
});
};
t.prototype.fast_fun_rate_recentN_avg = function(e, t, r, n) {
var o = this;
void 0 === t && (t = 3);
void 0 === r && (r = !0);
void 0 === n && (n = "class");
var a = this.ctx.games.back().mode(n).excludeReplay(r).timeRange(this.time.recentN(t, "day")).tail(e).list();
return this.math.avg(a, function(e) {
var t, r;
return o.math.div(null !== (t = e.baseGameInfo.quickPutCoolRoundCount) && void 0 !== t ? t : 0, null !== (r = e.baseGameInfo.totalRound) && void 0 !== r ? r : 0);
});
};
t.prototype.fast_fun_rate_recentN_max = function(e, t, r, n) {
var o = this;
void 0 === t && (t = 3);
void 0 === r && (r = !0);
void 0 === n && (n = "class");
var a = this.ctx.games.back().mode(n).excludeReplay(r).timeRange(this.time.recentN(t, "day")).tail(e).list();
return this.math.max(a, function(e) {
var t, r;
return o.math.div(null !== (t = e.baseGameInfo.quickPutCoolRoundCount) && void 0 !== t ? t : 0, null !== (r = e.baseGameInfo.totalRound) && void 0 !== r ? r : 0);
});
};
t.prototype.highw_fun_rate_recentN_avg = function(e, t, r, n) {
var o = this;
void 0 === t && (t = 3);
void 0 === r && (r = !0);
void 0 === n && (n = "class");
var a = this.ctx.games.back().mode(n).excludeReplay(r).timeRange(this.time.recentN(t, "day")).tail(e).list();
return this.math.avg(a, function(e) {
var t, r;
return o.math.div(null !== (t = e.baseGameInfo.highWeightCollRoundCnt) && void 0 !== t ? t : 0, null !== (r = e.baseGameInfo.totalRound) && void 0 !== r ? r : 0);
});
};
t.prototype.highw_fun_rate_recentN_max = function(e, t, r, n) {
var o = this;
void 0 === t && (t = 3);
void 0 === r && (r = !0);
void 0 === n && (n = "class");
var a = this.ctx.games.back().mode(n).excludeReplay(r).timeRange(this.time.recentN(t, "day")).tail(e).list();
return this.math.max(a, function(e) {
var t, r;
return o.math.div(null !== (t = e.baseGameInfo.highWeightCollRoundCnt) && void 0 !== t ? t : 0, null !== (r = e.baseGameInfo.totalRound) && void 0 !== r ? r : 0);
});
};
t.prototype.score_recentN_avg = function(e, t, r) {
void 0 === t && (t = 3);
void 0 === r && (r = !0);
var n = this.ctx.games.back().mode("class").excludeReplay(r).timeRange(this.time.recentN(t, "day")).tail(e).list();
return this.math.avg(n, function(e) {
return e.classGameInfo.score;
});
};
t.prototype.score_recentN_max = function(e, t, r) {
void 0 === t && (t = 3);
void 0 === r && (r = !0);
var n = this.ctx.games.back().mode("class").excludeReplay(r).timeRange(this.time.recentN(t, "day")).tail(e).list();
return this.math.max(n, function(e) {
return e.classGameInfo.score;
});
};
t.prototype.score_recentN_std = function(e, t, r) {
void 0 === t && (t = 3);
void 0 === r && (r = !0);
var n = this.ctx.games.back().mode("class").excludeReplay(r).timeRange(this.time.recentN(t, "day")).tail(e).list();
return this.math.stdSample(n, function(e) {
return e.classGameInfo.score;
});
};
t.prototype.max_combo_recentN_avg = function(e, t, r, n) {
void 0 === t && (t = 3);
void 0 === r && (r = !0);
void 0 === n && (n = "class");
var o = this.ctx.games.back().mode(n).excludeReplay(r).timeRange(this.time.recentN(t, "day")).tail(e).list();
return this.math.avg(o, function(e) {
return e.baseGameInfo.maxCombo;
});
};
t.prototype.max_combo_recentN_max = function(e, t, r, n) {
void 0 === t && (t = 3);
void 0 === r && (r = !0);
void 0 === n && (n = "class");
var o = this.ctx.games.back().mode(n).excludeReplay(r).timeRange(this.time.recentN(t, "day")).tail(e).list();
return this.math.max(o, function(e) {
return e.baseGameInfo.maxCombo;
});
};
t.prototype.clean_rate_recentN = function(e, t, r, n) {
void 0 === t && (t = 3);
void 0 === r && (r = !0);
void 0 === n && (n = "class");
var o = this.ctx.games.back().mode(n).excludeReplay(r).timeRange(this.time.recentN(t, "day")).tail(e).list();
return this.math.avg(o, function(e) {
var t;
return null !== (t = e.baseGameInfo.clearScreenCnt) && void 0 !== t ? t : 0;
});
};
t.prototype.multi_rate_recentN = function(e, t, r, n) {
void 0 === t && (t = 3);
void 0 === r && (r = !0);
void 0 === n && (n = "class");
var o = this.ctx.games.back().mode(n).excludeReplay(r).timeRange(this.time.recentN(t, "day")).tail(e).list();
return this.math.avg(o, function(e) {
var t, r, n, o;
return (null !== (t = e.baseGameInfo.threeEliminateCnt) && void 0 !== t ? t : 0) + (null !== (r = e.baseGameInfo.fourEliminateCnt) && void 0 !== r ? r : 0) + (null !== (n = e.baseGameInfo.fiveEliminateCnt) && void 0 !== n ? n : 0) + (null !== (o = e.baseGameInfo.sixEliminateCnt) && void 0 !== o ? o : 0);
});
};
t.prototype.break_rate_recentN = function(e, t, r) {
void 0 === t && (t = 3);
void 0 === r && (r = !0);
var n = this.ctx.games.back().mode("class").excludeReplay(r).timeRange(this.time.recentN(t, "day")).tail(e).list();
return this.math.rate(n, function(e) {
return e.classGameInfo.score > e.classGameInfo.lastHighScore;
});
};
t.prototype.revive_break_rate_recentN = function(e, t, r) {
void 0 === t && (t = 3);
void 0 === r && (r = !0);
var n = this.ctx.games.back().mode("class").excludeReplay(r).timeRange(this.time.recentN(t, "day")).tail(e).list().filter(function(e) {
var t;
return (null !== (t = e.baseGameInfo.reviveSuccessCnt) && void 0 !== t ? t : 0) > 0;
});
return this.math.rate(n, function(e) {
return e.classGameInfo.score > e.classGameInfo.lastHighScore;
});
};
t.prototype.revive_show_rate_recentN = function(e, t, r, n) {
void 0 === t && (t = 3);
void 0 === r && (r = !0);
void 0 === n && (n = "class");
var o = this.ctx.games.back().mode(n).excludeReplay(r).timeRange(this.time.recentN(t, "day")).tail(e).list();
return this.math.avg(o, function(e) {
var t;
return null !== (t = e.baseGameInfo.reviveShowCnt) && void 0 !== t ? t : 0;
});
};
t.prototype.revive_success_rate_recentN = function(e, t, r, n) {
void 0 === t && (t = 3);
void 0 === r && (r = !0);
void 0 === n && (n = "class");
var o = this.ctx.games.back().mode(n).excludeReplay(r).timeRange(this.time.recentN(t, "day")).tail(e).list(), a = this.math.sum(o, function(e) {
var t;
return null !== (t = e.baseGameInfo.reviveShowCnt) && void 0 !== t ? t : 0;
}), i = this.math.sum(o, function(e) {
var t;
return null !== (t = e.baseGameInfo.reviveSuccessCnt) && void 0 !== t ? t : 0;
});
return this.math.div(i, a);
};
t.prototype.first_round_matrix_recentN_avg = function(e, t, r, n) {
void 0 === t && (t = 3);
void 0 === r && (r = !0);
void 0 === n && (n = "class");
var o = this.ctx.games.back().mode(n).excludeReplay(r).timeRange(this.time.recentN(t, "day")).tail(e).list();
return this.math.avg(o, function(e) {
return e.baseGameInfo.initWeight;
});
};
t.prototype.first_round_matrix_recentN_max = function(e, t, r, n) {
void 0 === t && (t = 3);
void 0 === r && (r = !0);
void 0 === n && (n = "class");
var o = this.ctx.games.back().mode(n).excludeReplay(r).timeRange(this.time.recentN(t, "day")).tail(e).list();
return this.math.max(o, function(e) {
return e.baseGameInfo.initWeight;
});
};
t.prototype.first_round_matrix_recentN_std = function(e, t, r, n) {
void 0 === t && (t = 3);
void 0 === r && (r = !0);
void 0 === n && (n = "class");
var o = this.ctx.games.back().mode(n).excludeReplay(r).timeRange(this.time.recentN(t, "day")).tail(e).list();
return this.math.stdSample(o, function(e) {
return e.baseGameInfo.initWeight;
});
};
t.prototype.matrix_complex_recentN_avg = function(e, t, r, n) {
void 0 === t && (t = 3);
void 0 === r && (r = !0);
void 0 === n && (n = "class");
var o = this.ctx.games.back().mode(n).excludeReplay(r).timeRange(this.time.recentN(t, "day")).tail(e).list();
return this.math.avg(o, function(e) {
return e.baseGameInfo.eachRoundInitWeightAvg;
});
};
t.prototype.fill_fail_rate_recentN = function(e, t, r, n) {
void 0 === t && (t = 3);
void 0 === r && (r = !0);
void 0 === n && (n = "class");
var o = this.ctx.games.back().mode(n).excludeReplay(r).timeRange(this.time.recentN(t, "day")).tail(e).list();
return this.math.rate(o, function(e) {
return d.ModelFeatureAlgoClassifier.isFill(e.baseGameInfo.lastAlgoName);
});
};
t.prototype.hard_fail_rate_recentN = function(e, t, r, n) {
void 0 === t && (t = 3);
void 0 === r && (r = !0);
void 0 === n && (n = "class");
var o = this.ctx.games.back().mode(n).excludeReplay(r).timeRange(this.time.recentN(t, "day")).tail(e).list();
return 0 === this.sumHardRounds(o) ? NaN : this.math.rate(o, function(e) {
return d.ModelFeatureAlgoClassifier.isHard(e.baseGameInfo.lastAlgoName);
});
};
t.prototype.wm_fail_rate_recentN = function(e, t, r, n) {
void 0 === t && (t = 3);
void 0 === r && (r = !0);
void 0 === n && (n = "class");
var o = this.ctx.games.back().mode(n).excludeReplay(r).timeRange(this.time.recentN(t, "day")).tail(e).list();
return this.math.rate(o, function(e) {
return d.ModelFeatureAlgoClassifier.isShangZeng(e.baseGameInfo.lastAlgoName);
});
};
t.prototype.fill_score_eff_recentN = function(e, t, r, n) {
var o = this;
void 0 === t && (t = 3);
void 0 === r && (r = !0);
void 0 === n && (n = "class");
var a = this.ctx.games.back().mode(n).excludeReplay(r).timeRange(this.time.recentN(t, "day")).tail(e).list();
return this.math.avg(a, function(e) {
var t;
return o.algoScoreEff(null === (t = e.baseGameInfo) || void 0 === t ? void 0 : t.algoInfoByNameSet.blank);
});
};
t.prototype.hard_score_eff_recentN = function(e, t, r, n) {
var o = this;
void 0 === t && (t = 3);
void 0 === r && (r = !0);
void 0 === n && (n = "class");
var a = this.ctx.games.back().mode(n).excludeReplay(r).timeRange(this.time.recentN(t, "day")).tail(e).list();
return this.math.avg(a, function(e) {
var t;
return o.algoScoreEff(null === (t = e.baseGameInfo) || void 0 === t ? void 0 : t.algoInfoByNameSet.difficulty);
});
};
t.prototype.sat_score_eff_recentN = function(e, t, r, n) {
var o = this;
void 0 === t && (t = 3);
void 0 === r && (r = !0);
void 0 === n && (n = "class");
var a = this.ctx.games.back().mode(n).excludeReplay(r).timeRange(this.time.recentN(t, "day")).tail(e).list();
return this.math.avg(a, function(e) {
var t;
return o.algoScoreEff(null === (t = e.baseGameInfo) || void 0 === t ? void 0 : t.algoInfoByNameSet.cool);
});
};
t.prototype.wm_score_eff_recentN = function(e, t, r, n) {
var o = this;
void 0 === t && (t = 3);
void 0 === r && (r = !0);
void 0 === n && (n = "class");
var a = this.ctx.games.back().mode(n).excludeReplay(r).timeRange(this.time.recentN(t, "day")).tail(e).list();
return this.math.avg(a, function(e) {
var t;
return o.algoScoreEff(null === (t = e.baseGameInfo) || void 0 === t ? void 0 : t.algoInfoByNameSet.shangZeng);
});
};
t.prototype.hard_round_rate_recentN = function(e, t, r, n) {
var o, a, i;
void 0 === t && (t = 3);
void 0 === r && (r = !0);
void 0 === n && (n = "class");
var s = this.ctx.games.back().mode(n).excludeReplay(r).timeRange(this.time.recentN(t, "day")).tail(e).list(), u = 0;
try {
for (var c = l(s), d = c.next(); !d.done; d = c.next()) u += null !== (i = d.value.baseGameInfo.totalRound) && void 0 !== i ? i : 0;
} catch (e) {
o = {
error: e
};
} finally {
try {
d && !d.done && (a = c.return) && a.call(c);
} finally {
if (o) throw o.error;
}
}
var f = this.sumHardRounds(s);
return u > 0 ? f / u : NaN;
};
t.prototype.first_hard_time_recentN_avg = function(e, t, r, n) {
void 0 === t && (t = 3);
void 0 === r && (r = !0);
void 0 === n && (n = "class");
var o = this.ctx.games.back().mode(n).excludeReplay(r).timeRange(this.time.recentN(t, "day")).tail(e).list();
return this.math.avg(o, function(e) {
return e.baseGameInfo.firstDifficultySpendTime;
});
};
t.prototype.first_hard_time_recentN_max = function(e, t, r, n) {
void 0 === t && (t = 3);
void 0 === r && (r = !0);
void 0 === n && (n = "class");
var o = this.ctx.games.back().mode(n).excludeReplay(r).timeRange(this.time.recentN(t, "day")).tail(e).list();
return this.math.max(o, function(e) {
return e.baseGameInfo.firstDifficultySpendTime;
});
};
t.prototype.first_hard_time_recentN_std = function(e, t, r, n) {
void 0 === t && (t = 3);
void 0 === r && (r = !0);
void 0 === n && (n = "class");
var o = this.ctx.games.back().mode(n).excludeReplay(r).timeRange(this.time.recentN(t, "day")).tail(e).list();
return this.math.stdSample(o, function(e) {
return e.baseGameInfo.firstDifficultySpendTime;
});
};
t.prototype.max_consec_fun_recentN_avg = function(e, t, r, n) {
void 0 === t && (t = 3);
void 0 === r && (r = !0);
void 0 === n && (n = "class");
var o = this.ctx.games.back().mode(n).excludeReplay(r).timeRange(this.time.recentN(t, "day")).tail(e).list();
return this.math.avg(o, function(e) {
return e.baseGameInfo.maxContinueCoolRoundLen;
});
};
t.prototype.break_amp_recentN_avg = function(e, t, r) {
var n = this;
void 0 === t && (t = 3);
void 0 === r && (r = !0);
var o = this.ctx.games.back().mode("class").excludeReplay(r).timeRange(this.time.recentN(t, "day")).tail(e).list().filter(function(e) {
return e.classGameInfo.score > e.classGameInfo.lastHighScore;
});
return this.math.avg(o, function(e) {
return n.breakAmp(e.classGameInfo.score, e.classGameInfo.lastHighScore);
});
};
t.prototype.break_amp_recentN_max = function(e, t, r) {
var n = this;
void 0 === t && (t = 3);
void 0 === r && (r = !0);
var o = this.ctx.games.back().mode("class").excludeReplay(r).timeRange(this.time.recentN(t, "day")).tail(e).list().filter(function(e) {
return e.classGameInfo.score > e.classGameInfo.lastHighScore;
});
return this.math.max(o, function(e) {
return n.breakAmp(e.classGameInfo.score, e.classGameInfo.lastHighScore);
});
};
t.prototype.break_gap_recentN_avg = function(e, t, r) {
void 0 === t && (t = 3);
void 0 === r && (r = !0);
var n = this.ctx.games.back().mode("class").excludeReplay(r).timeRange(this.time.recentN(t, "day")).tail(e).list();
return this.math.avg(this.collectBreakGaps(n), function(e) {
return e;
});
};
t.prototype.days_since_install = function() {
if (this.time.install) return Math.round((this.time.dayZero(this.time.now) - this.time.dayZero(this.time.install)) / 864e5);
};
t.prototype.cold_start_game_rank = function(e) {
void 0 === e && (e = "class");
var t = this.ctx.sessions.back().tail(1).first();
if (t) return this.ctx.games.front().mode(e).excludeReplay(!0).timeRange({
start: t.ts
}).list().length + 1;
};
t.prototype.last_max_combo = function(e, t) {
var r, n;
void 0 === e && (e = !0);
void 0 === t && (t = "class");
var o = this.ctx.games.back().mode(t).excludeReplay(e).tail(1).first();
return null !== (n = null === (r = null == o ? void 0 : o.baseGameInfo) || void 0 === r ? void 0 : r.maxCombo) && void 0 !== n ? n : void 0;
};
t.prototype.last_clear_screen = function(e, t) {
var r, n;
void 0 === e && (e = !0);
void 0 === t && (t = "class");
var o = this.ctx.games.back().mode(t).excludeReplay(e).tail(1).first();
return null !== (n = null === (r = null == o ? void 0 : o.baseGameInfo) || void 0 === r ? void 0 : r.clearScreenCnt) && void 0 !== n ? n : void 0;
};
t.prototype.last_game_end_gap_sec = function(e, t) {
void 0 === e && (e = !0);
void 0 === t && (t = "class");
var r = this.ctx.games.back().mode(t).excludeReplay(e).tail(1).first();
if (r) return (this.time.now - r.ts) / 1e3;
};
t.prototype.clean_avg_cnt_recentN = function(e, t, r, n) {
void 0 === t && (t = 3);
void 0 === r && (r = !0);
void 0 === n && (n = "class");
var o = this.ctx.games.back().mode(n).excludeReplay(r).timeRange(this.time.recentN(t, "day")).tail(e).list();
return this.math.avg(o, function(e) {
var t;
return null !== (t = e.baseGameInfo.clearScreenCnt) && void 0 !== t ? t : 0;
});
};
t.prototype.clean_avg_cnt_dayN_M = function(e, t, r, n) {
void 0 === r && (r = !0);
void 0 === n && (n = "class");
var o = this.ctx.games.back().mode(n).excludeReplay(r).timeRange(this.time.recentN_M(e, t, "day")).list();
return this.math.avg(o, function(e) {
var t;
return null !== (t = e.baseGameInfo.clearScreenCnt) && void 0 !== t ? t : 0;
});
};
t.prototype.revive_show_avg_cnt_recentN = function(e, t, r, n) {
void 0 === t && (t = 3);
void 0 === r && (r = !0);
void 0 === n && (n = "class");
var o = this.ctx.games.back().mode(n).excludeReplay(r).timeRange(this.time.recentN(t, "day")).tail(e).list();
return this.math.avg(o, function(e) {
var t;
return null !== (t = e.baseGameInfo.reviveShowCnt) && void 0 !== t ? t : 0;
});
};
t.prototype.revive_show_avg_cnt_dayN_M = function(e, t, r, n) {
void 0 === r && (r = !0);
void 0 === n && (n = "class");
var o = this.ctx.games.back().mode(n).excludeReplay(r).timeRange(this.time.recentN_M(e, t, "day")).list();
return this.math.avg(o, function(e) {
var t;
return null !== (t = e.baseGameInfo.reviveShowCnt) && void 0 !== t ? t : 0;
});
};
t.prototype.first_round_matrix_dayN_M_avg = function(e, t, r, n) {
void 0 === r && (r = !0);
void 0 === n && (n = "class");
var o = this.ctx.games.back().mode(n).excludeReplay(r).timeRange(this.time.recentN_M(e, t, "day")).list();
return this.math.avg(o, function(e) {
return e.baseGameInfo.initWeight;
});
};
t.prototype.matrix_complex_recentN_std = function(e, t, r, n) {
void 0 === t && (t = 3);
void 0 === r && (r = !0);
void 0 === n && (n = "class");
var o = this.ctx.games.back().mode(n).excludeReplay(r).timeRange(this.time.recentN(t, "day")).tail(e).list();
return this.math.stdSample(o, function(e) {
return e.baseGameInfo.eachRoundInitWeightAvg;
});
};
t.prototype.wm_round_rate_recentN = function(e, t, r, n) {
var o, a, i;
void 0 === t && (t = 3);
void 0 === r && (r = !0);
void 0 === n && (n = "class");
var s = this.ctx.games.back().mode(n).excludeReplay(r).timeRange(this.time.recentN(t, "day")).tail(e).list(), u = 0, c = 0;
try {
for (var d = l(s), f = d.next(); !f.done; f = d.next()) {
var m = f.value, p = m.baseGameInfo.algoInfoByNameSet.shangZeng;
p && (c += p.roundCnt);
u += null !== (i = m.baseGameInfo.totalRound) && void 0 !== i ? i : 0;
}
} catch (e) {
o = {
error: e
};
} finally {
try {
f && !f.done && (a = d.return) && a.call(d);
} finally {
if (o) throw o.error;
}
}
return u > 0 ? c / u : NaN;
};
t.prototype.fast_fun_rate_dayN_M_max = function(e, t, r, n) {
var o = this;
void 0 === r && (r = !0);
void 0 === n && (n = "class");
var a = this.ctx.games.back().mode(n).excludeReplay(r).timeRange(this.time.recentN_M(e, t, "day")).list();
return this.math.max(a, function(e) {
var t, r;
return o.math.div(null !== (t = e.baseGameInfo.quickPutCoolRoundCount) && void 0 !== t ? t : 0, null !== (r = e.baseGameInfo.totalRound) && void 0 !== r ? r : 0);
});
};
t.prototype.coin_value_dayN_M_max = function(e, t, r, n) {
void 0 === r && (r = !0);
void 0 === n && (n = "class");
var o = this.ctx.games.back().mode(n).excludeReplay(r).timeRange(this.time.recentN_M(e, t, "day")).list();
return this.math.max(o, function(e) {
return e.baseGameInfo.scoreGoldContent;
});
};
t.prototype.hard_fail_rate_dayN_M = function(e, t, r, n) {
void 0 === r && (r = !0);
void 0 === n && (n = "class");
var o = this._dayWindowGames(e, t, r, n);
return 0 === this.sumHardRounds(o) ? NaN : this.math.rate(o, function(e) {
return d.ModelFeatureAlgoClassifier.isHard(e.baseGameInfo.lastAlgoName);
});
};
t.prototype.hard_score_eff_dayN_M = function(e, t, r, n) {
var o = this;
void 0 === r && (r = !0);
void 0 === n && (n = "class");
var a = this._dayWindowGames(e, t, r, n);
return this.math.avg(a, function(e) {
var t;
return o.algoScoreEff(null === (t = e.baseGameInfo) || void 0 === t ? void 0 : t.algoInfoByNameSet.difficulty);
});
};
t.prototype.sat_score_eff_dayN_M = function(e, t, r, n) {
var o = this;
void 0 === r && (r = !0);
void 0 === n && (n = "class");
var a = this._dayWindowGames(e, t, r, n);
return this.math.avg(a, function(e) {
var t;
return o.algoScoreEff(null === (t = e.baseGameInfo) || void 0 === t ? void 0 : t.algoInfoByNameSet.cool);
});
};
t.prototype.wm_fail_rate_dayN_M = function(e, t, r, n) {
void 0 === r && (r = !0);
void 0 === n && (n = "class");
var o = this._dayWindowGames(e, t, r, n);
return this.math.rate(o, function(e) {
return d.ModelFeatureAlgoClassifier.isShangZeng(e.baseGameInfo.lastAlgoName);
});
};
t.prototype.wm_score_eff_dayN_M = function(e, t, r, n) {
var o = this;
void 0 === r && (r = !0);
void 0 === n && (n = "class");
var a = this._dayWindowGames(e, t, r, n);
return this.math.avg(a, function(e) {
var t;
return o.algoScoreEff(null === (t = e.baseGameInfo) || void 0 === t ? void 0 : t.algoInfoByNameSet.shangZeng);
});
};
t.prototype.flow_score_dayN_M_avg = function(e, t, r, n) {
void 0 === r && (r = !0);
void 0 === n && (n = "class");
var o = this._dayWindowGames(e, t, r, n);
return this.math.avg(o, function(e) {
return e.baseGameInfo.flowScore;
});
};
t.prototype.flow_score_dayN_M_max = function(e, t, r, n) {
void 0 === r && (r = !0);
void 0 === n && (n = "class");
var o = this._dayWindowGames(e, t, r, n);
return this.math.max(o, function(e) {
return e.baseGameInfo.flowScore;
});
};
t.prototype.first_hard_time_dayN_M_avg = function(e, t, r, n) {
void 0 === r && (r = !0);
void 0 === n && (n = "class");
var o = this._dayWindowGames(e, t, r, n);
return this.math.avg(o, function(e) {
return e.baseGameInfo.firstDifficultySpendTime;
});
};
t.prototype.first_hard_time_dayN_M_std = function(e, t, r, n) {
void 0 === r && (r = !0);
void 0 === n && (n = "class");
var o = this._dayWindowGames(e, t, r, n);
return this.math.stdSample(o, function(e) {
return e.baseGameInfo.firstDifficultySpendTime;
});
};
t.prototype.first_round_matrix_dayN_M_std = function(e, t, r, n) {
void 0 === r && (r = !0);
void 0 === n && (n = "class");
var o = this._dayWindowGames(e, t, r, n);
return this.math.stdSample(o, function(e) {
return e.baseGameInfo.initWeight;
});
};
t.prototype.max_consec_nofun_dayN_M_avg = function(e, t, r, n) {
void 0 === r && (r = !0);
void 0 === n && (n = "class");
var o = this._dayWindowGames(e, t, r, n);
return this.math.avg(o, function(e) {
return e.baseGameInfo.maxConsecutiveNonCoolRoundLen;
});
};
t.prototype.hardtime_none_rate_dayN_M = function(e, t, r, n) {
void 0 === r && (r = !0);
void 0 === n && (n = "class");
var o = this._dayWindowGames(e, t, r, n);
return this.math.rate(o, function(e) {
var t;
return (null !== (t = e.baseGameInfo.firstDifficultySpendTime) && void 0 !== t ? t : 0) <= 0;
});
};
t.prototype._dayWindowGames = function(e, t, r, n) {
void 0 === r && (r = !0);
void 0 === n && (n = "class");
return this.ctx.games.back().mode(n).excludeReplay(r).timeRange(this.time.recentN_M(e, t, "day")).list();
};
t.prototype.hardtime_early_rate_dayN_M = function(e, t, r, n) {
void 0 === r && (r = !0);
void 0 === n && (n = "class");
var o = this._dayWindowGames(e, t, r, n);
return this.math.rate(o, function(e) {
var t = e.baseGameInfo.firstDifficultySpendTime;
return t > 0 && t <= 158;
});
};
t.prototype.hardtime_mid_rate_dayN_M = function(e, t, r, n) {
void 0 === r && (r = !0);
void 0 === n && (n = "class");
var o = this._dayWindowGames(e, t, r, n);
return this.math.rate(o, function(e) {
var t = e.baseGameInfo.firstDifficultySpendTime;
return t > 158 && t <= 243;
});
};
t.prototype.hardtime_late_rate_dayN_M = function(e, t, r, n) {
void 0 === r && (r = !0);
void 0 === n && (n = "class");
var o = this._dayWindowGames(e, t, r, n);
return this.math.rate(o, function(e) {
var t;
return (null !== (t = e.baseGameInfo.firstDifficultySpendTime) && void 0 !== t ? t : 0) > 243;
});
};
t.prototype.matrix_low_rate_dayN_M = function(e, t, r, n) {
void 0 === r && (r = !0);
void 0 === n && (n = "class");
var o = this._dayWindowGames(e, t, r, n);
return this.math.rate(o, function(e) {
var t = e.baseGameInfo.initWeight;
return t >= 0 && t <= 433;
});
};
t.prototype.matrix_neg_rate_dayN_M = function(e, t, r, n) {
void 0 === r && (r = !0);
void 0 === n && (n = "class");
var o = this._dayWindowGames(e, t, r, n);
return this.math.rate(o, function(e) {
var t;
return (null !== (t = e.baseGameInfo.initWeight) && void 0 !== t ? t : 0) < 0;
});
};
t.prototype.clear_zero_rate_dayN_M = function(e, t, r, n) {
void 0 === r && (r = !0);
void 0 === n && (n = "class");
var o = this._dayWindowGames(e, t, r, n);
return this.math.rate(o, function(e) {
var t;
return 0 === (null !== (t = e.baseGameInfo.clearScreenCnt) && void 0 !== t ? t : 0);
});
};
t.prototype.game_time_recentN_avg = function(e, t, r, n) {
void 0 === t && (t = 3);
void 0 === r && (r = !0);
void 0 === n && (n = "class");
var o = this.ctx.games.back().mode(n).excludeReplay(r).timeRange(this.time.recentN(t, "day")).tail(e).list();
return this.math.avg(o, function(e) {
return e.baseGameInfo.spendTime;
});
};
t.prototype.game_time_recentN_std = function(e, t, r, n) {
void 0 === t && (t = 3);
void 0 === r && (r = !0);
void 0 === n && (n = "class");
var o = this.ctx.games.back().mode(n).excludeReplay(r).timeRange(this.time.recentN(t, "day")).tail(e).list();
return this.math.stdSample(o, function(e) {
return e.baseGameInfo.spendTime;
});
};
t.prototype.break_amp_dayN_M_avg = function(e, t, r) {
var n = this;
void 0 === r && (r = !0);
var o = this.ctx.games.back().mode("class").excludeReplay(r).timeRange(this.time.recentN_M(e, t, "day")).list().filter(function(e) {
return e.classGameInfo.score > e.classGameInfo.lastHighScore;
});
return this.math.avg(o, function(e) {
return n.breakAmp(e.classGameInfo.score, e.classGameInfo.lastHighScore);
});
};
t.prototype.break_amp_dayN_M_max = function(e, t, r) {
var n = this;
void 0 === r && (r = !0);
var o = this.ctx.games.back().mode("class").excludeReplay(r).timeRange(this.time.recentN_M(e, t, "day")).list().filter(function(e) {
return e.classGameInfo.score > e.classGameInfo.lastHighScore;
});
return this.math.max(o, function(e) {
return n.breakAmp(e.classGameInfo.score, e.classGameInfo.lastHighScore);
});
};
t.prototype.break_gap_dayN_M_avg = function(e, t, r) {
void 0 === r && (r = !0);
var n = this.ctx.games.back().mode("class").excludeReplay(r).timeRange(this.time.recentN_M(e, t, "day")).list();
return this.math.avg(this.collectBreakGaps(n), function(e) {
return e;
});
};
t.prototype.break_rate_dayN_M = function(e, t, r) {
void 0 === r && (r = !0);
var n = this.ctx.games.back().mode("class").excludeReplay(r).timeRange(this.time.recentN_M(e, t, "day")).list();
return this.math.rate(n, function(e) {
return e.classGameInfo.score > e.classGameInfo.lastHighScore;
});
};
t.prototype.game_time_dayN_M_avg = function(e, t, r, n) {
void 0 === r && (r = !0);
void 0 === n && (n = "class");
var o = this._dayWindowGames(e, t, r, n);
return this.math.avg(o, function(e) {
return e.baseGameInfo.spendTime;
});
};
t.prototype.game_time_dayN_M_std = function(e, t, r, n) {
void 0 === r && (r = !0);
void 0 === n && (n = "class");
var o = this._dayWindowGames(e, t, r, n);
return this.math.stdSample(o, function(e) {
return e.baseGameInfo.spendTime;
});
};
t.prototype.max_combo_dayN_M_avg = function(e, t, r, n) {
void 0 === r && (r = !0);
void 0 === n && (n = "class");
var o = this._dayWindowGames(e, t, r, n);
return this.math.avg(o, function(e) {
return e.baseGameInfo.maxCombo;
});
};
t.prototype.max_combo_dayN_M_max = function(e, t, r, n) {
void 0 === r && (r = !0);
void 0 === n && (n = "class");
var o = this._dayWindowGames(e, t, r, n);
return this.math.max(o, function(e) {
return e.baseGameInfo.maxCombo;
});
};
t.prototype.multi_rate_dayN_M = function(e, t, r, n) {
void 0 === r && (r = !0);
void 0 === n && (n = "class");
var o = this._dayWindowGames(e, t, r, n);
return this.math.avg(o, function(e) {
var t, r, n, o;
return (null !== (t = e.baseGameInfo.threeEliminateCnt) && void 0 !== t ? t : 0) + (null !== (r = e.baseGameInfo.fourEliminateCnt) && void 0 !== r ? r : 0) + (null !== (n = e.baseGameInfo.fiveEliminateCnt) && void 0 !== n ? n : 0) + (null !== (o = e.baseGameInfo.sixEliminateCnt) && void 0 !== o ? o : 0);
});
};
t.prototype.revive_break_rate_dayN_M = function(e, t, r) {
void 0 === r && (r = !0);
var n = this.ctx.games.back().mode("class").excludeReplay(r).timeRange(this.time.recentN_M(e, t, "day")).list().filter(function(e) {
var t;
return (null !== (t = e.baseGameInfo.reviveSuccessCnt) && void 0 !== t ? t : 0) > 0;
});
return this.math.rate(n, function(e) {
return e.classGameInfo.score > e.classGameInfo.lastHighScore;
});
};
t.prototype.score_dayN_M_std = function(e, t, r) {
void 0 === r && (r = !0);
var n = this.ctx.games.back().mode("class").excludeReplay(r).timeRange(this.time.recentN_M(e, t, "day")).list();
return this.math.stdSample(n, function(e) {
return e.classGameInfo.score;
});
};
t.prototype.score_dayN_M_max = function(e, t, r) {
void 0 === r && (r = !0);
var n = this.ctx.games.back().mode("class").excludeReplay(r).timeRange(this.time.recentN_M(e, t, "day")).list();
return this.math.max(n, function(e) {
return e.classGameInfo.score;
});
};
t.prototype.revive_click_rate_recentN = function(e, t, r, n) {
void 0 === t && (t = 3);
void 0 === r && (r = !0);
void 0 === n && (n = "class");
var o = this.ctx.games.back().mode(n).excludeReplay(r).timeRange(this.time.recentN(t, "day")).tail(e).list(), a = this.math.sum(o, function(e) {
var t;
return null !== (t = e.baseGameInfo.reviveShowCnt) && void 0 !== t ? t : 0;
}), i = this.math.sum(o, function(e) {
var t;
return null !== (t = e.baseGameInfo.reviveClickCnt) && void 0 !== t ? t : 0;
});
return this.math.div(i, a);
};
t.prototype.revive_click_rate_dayN_M = function(e, t, r, n) {
void 0 === r && (r = !0);
void 0 === n && (n = "class");
var o = this._dayWindowGames(e, t, r, n), a = this.math.sum(o, function(e) {
var t;
return null !== (t = e.baseGameInfo.reviveShowCnt) && void 0 !== t ? t : 0;
}), i = this.math.sum(o, function(e) {
var t;
return null !== (t = e.baseGameInfo.reviveClickCnt) && void 0 !== t ? t : 0;
});
return this.math.div(i, a);
};
t.prototype.revive_success_rate_dayN_M = function(e, t, r, n) {
void 0 === r && (r = !0);
void 0 === n && (n = "class");
var o = this._dayWindowGames(e, t, r, n), a = this.math.sum(o, function(e) {
var t;
return null !== (t = e.baseGameInfo.reviveShowCnt) && void 0 !== t ? t : 0;
}), i = this.math.sum(o, function(e) {
var t;
return null !== (t = e.baseGameInfo.reviveSuccessCnt) && void 0 !== t ? t : 0;
});
return this.math.div(i, a);
};
t.prototype.active_days_dayN_M = function(e, t) {
return this._activeDays(e, t);
};
t.prototype.avg_game_cnt_dayN_M = function(e, t, r, n) {
void 0 === r && (r = !0);
void 0 === n && (n = "class");
var o = this.ctx.games.back().mode(n).excludeReplay(r).timeRange(this.time.recentN_M(e, t, "day")).list(), a = this._activeDays(e, t);
return a > 0 ? o.length / a : NaN;
};
t.prototype.avg_online_time_dayN_M = function(e, t, r) {
void 0 === r && (r = !0);
var n = this.ctx.games.back().excludeReplay(r).timeRange(this.time.recentN_M(e, t, "day")).list(), o = this._activeDays(e, t), a = this.math.sum(n, function(e) {
return e.baseGameInfo.spendTime;
});
return o > 0 ? a / o : NaN;
};
t.prototype._activeDays = function(e, t) {
var r = this, n = this.ctx.sessions.back().timeRange(this.time.recentN_M(e, t, "day")).list(), o = this.ctx.games.back().excludeReplay().timeRange(this.time.recentN_M(e, t, "day")).list();
return new Set(s(n.map(function(e) {
return r.time.dayZero(e.ts);
}), o.map(function(e) {
return r.time.dayZero(e.ts);
}))).size;
};
t.prototype.sumHardRounds = function(e) {
var t, r, n = 0;
try {
for (var o = l(e), a = o.next(); !a.done; a = o.next()) {
var i = a.value.baseGameInfo.algoInfoByNameSet.difficulty;
i && (n += i.roundCnt);
}
} catch (e) {
t = {
error: e
};
} finally {
try {
a && !a.done && (r = o.return) && r.call(o);
} finally {
if (t) throw t.error;
}
}
return n;
};
t.prototype.breakAmp = function(e, t) {
return !t || t <= 0 ? NaN : e / t - 1;
};
t.prototype.collectBreakGaps = function(e) {
for (var t = -1, r = [], n = 0; n < e.length; n++) if (e[n].classGameInfo.score > e[n].classGameInfo.lastHighScore) {
t >= 0 && r.push(n + 1 - t);
t = n + 1;
}
return r;
};
t.prototype.algoScoreEff = function(e) {
var t;
return !e || !e.spendTime || e.spendTime <= 0 ? NaN : (null !== (t = e.score) && void 0 !== t ? t : 0) / e.spendTime;
};
t.prototype.cappedScore = function(e, t) {
return Math.min(e, t);
};
t.prototype.breakAmpCapped = function(e, t, r) {
return this.breakAmp(this.cappedScore(e, r), t);
};
t.prototype._firstColdSessionWindow = function() {
var e = this.ctx.sessions.front().first();
if (e) {
var t = this.ctx.sessions.front().at(1), r = t ? t.ts : new Date(e.ts).setHours(23, 59, 59, 999);
return {
start: e.ts,
end: r
};
}
};
t.prototype.last_ten_game_cnt = function(e) {
void 0 === e && (e = "");
var t = this.ctx.games.back().mode(e).excludeReplay(!0).list();
return Math.min(t.length, 9);
};
t.prototype.win_share_ratio = function(e, t, r, n) {
var o, a, i, s, u, c;
void 0 === r && (r = !0);
void 0 === n && (n = "class");
var d = this._winGames(t, r, n), f = 0, m = 0;
try {
for (var p = l(d), h = p.next(); !h.done; h = p.next()) {
var g = h.value, v = null === (i = g.baseGameInfo) || void 0 === i ? void 0 : i.algoInfoByNameSetNew, y = null == v ? void 0 : v[e];
f += null !== (s = null == y ? void 0 : y.roundCnt) && void 0 !== s ? s : 0;
m += null !== (c = null === (u = g.baseGameInfo) || void 0 === u ? void 0 : u.totalRound) && void 0 !== c ? c : 0;
}
} catch (e) {
o = {
error: e
};
} finally {
try {
h && !h.done && (a = p.return) && a.call(p);
} finally {
if (o) throw o.error;
}
}
return 0 === m ? NaN : f / m;
};
t.prototype.win_mean_field = function(e, t, r, n) {
void 0 === r && (r = !0);
void 0 === n && (n = "class");
var o = this._winGames(t, r, n), a = this._winEachRoundMeanField(e);
return this.math.avg(o, function(e) {
var t, r, n = null === (r = null === (t = e.baseGameInfo) || void 0 === t ? void 0 : t.eachRoundMean) || void 0 === r ? void 0 : r[a];
return "number" == typeof n && Number.isFinite(n) ? n : NaN;
});
};
t.prototype.win_nk_stats = function(e, t, r) {
var n, o, a, i, s, u, c;
void 0 === t && (t = !0);
void 0 === r && (r = "class");
var d = this._winGames(e, t, r), f = {
other: [ 0, 0 ],
normalFill: [ 0, 0 ],
difficultyTrap: [ 0, 0 ],
weightControl: [ 0, 0 ],
coolBoost: [ 0, 0 ],
orderFill: [ 0, 0 ],
random: [ 0, 0 ]
};
try {
for (var p = l(d), h = p.next(); !h.done; h = p.next()) {
var g = null === (s = h.value.baseGameInfo) || void 0 === s ? void 0 : s.algoInfoByNameSetNew;
if (g) try {
for (var v = (a = void 0, l(m)), y = v.next(); !y.done; y = v.next()) {
var b = y.value, _ = g[b];
if (_) {
var S = f[b];
S[0] += null !== (u = _.roundCnt) && void 0 !== u ? u : 0;
S[1] += null !== (c = _.successRoundCnt) && void 0 !== c ? c : 0;
}
}
} catch (e) {
a = {
error: e
};
} finally {
try {
y && !y.done && (i = v.return) && i.call(v);
} finally {
if (a) throw a.error;
}
}
}
} catch (e) {
n = {
error: e
};
} finally {
try {
h && !h.done && (o = p.return) && o.call(p);
} finally {
if (n) throw n.error;
}
}
return f;
};
t.prototype._winGames = function(e, t, r) {
var n, o;
void 0 === t && (t = !0);
void 0 === r && (r = "class");
for (var a = this.ctx.games.back().mode(r).excludeReplay(t).list(), i = [], s = 0, l = a.length - 1; l >= 0; l--) {
var u = a[l], c = null !== (o = null === (n = u.baseGameInfo) || void 0 === n ? void 0 : n.totalRound) && void 0 !== o ? o : 0;
if (0 !== c) {
i.unshift(u);
if ((s += c) >= e) break;
}
}
return i;
};
t.prototype._winEachRoundMeanField = function(e) {
switch (e) {
case "putRateAvg":
return "putRateAvg";

case "holesCnt":
return "holesCntAvg";

case "blocksCnt":
return "blocksCntAvg";

case "contiguousEdges":
return "contiguousEdgesAvg";

case "contiguousRegions":
return "contiguousRegionsAvg";

case "convexCorners":
return "convexCornersAvg";

case "concaveCorners":
return "concaveCornersAvg";

case "weightAvg":
return "weightAvg";

case "timeDiff":
return "timeDiffInSecondsAvg";
}
};
t.prototype.game_time_regN_M_avg = function(e, t, r, n) {
void 0 === r && (r = !0);
void 0 === n && (n = "class");
return this.math.avg(this.ctx.games.front().mode(n).excludeReplay(r).timeRange(this.time.sinceN_M(e - 1, t, "day")).list(), function(e) {
return e.baseGameInfo.spendTime;
});
};
t.prototype.revive_click_rate_regN_M = function(e, t, r, n) {
void 0 === r && (r = !0);
void 0 === n && (n = "class");
var o = this.ctx.games.front().mode(n).excludeReplay(r).timeRange(this.time.sinceN_M(e - 1, t, "day")).list(), a = this.math.sum(o, function(e) {
var t;
return null !== (t = e.baseGameInfo.reviveShowCnt) && void 0 !== t ? t : 0;
}), i = this.math.sum(o, function(e) {
var t;
return null !== (t = e.baseGameInfo.reviveClickCnt) && void 0 !== t ? t : 0;
});
return this.math.div(i, a);
};
t.prototype.first3_game_time_avg = function(e, t) {
void 0 === e && (e = !0);
void 0 === t && (t = "class");
var r = this.ctx.games.front().mode(t).excludeReplay(e).head(3).list();
return this.math.avg(r, function(e) {
return e.baseGameInfo.spendTime;
});
};
t.prototype.first3_game_time_max = function(e, t) {
void 0 === e && (e = !0);
void 0 === t && (t = "class");
var r = this.ctx.games.front().mode(t).excludeReplay(e).head(3).list();
return this.math.max(r, function(e) {
return e.baseGameInfo.spendTime;
});
};
t.prototype.first3_hard_score_eff = function(e, t) {
void 0 === e && (e = !0);
void 0 === t && (t = "class");
var r = this.ctx.games.front().mode(t).excludeReplay(e).head(3).list(), n = this.math.sum(r, function(e) {
var t, r, n;
return null !== (n = null === (r = null === (t = e.baseGameInfo) || void 0 === t ? void 0 : t.algoInfoByNameSet.difficulty) || void 0 === r ? void 0 : r.score) && void 0 !== n ? n : 0;
}), o = this.math.sum(r, function(e) {
var t, r, n;
return null !== (n = null === (r = null === (t = e.baseGameInfo) || void 0 === t ? void 0 : t.algoInfoByNameSet.difficulty) || void 0 === r ? void 0 : r.spendTime) && void 0 !== n ? n : 0;
});
return this.math.div(n, o);
};
t.prototype.first3_max_combo = function(e, t) {
void 0 === e && (e = !0);
void 0 === t && (t = "class");
var r = this.ctx.games.front().mode(t).excludeReplay(e).head(3).list();
return this.math.max(r, function(e) {
return e.baseGameInfo.maxCombo;
});
};
t.prototype.first3_score_avg = function(e) {
void 0 === e && (e = !0);
var t = this.ctx.games.front().mode("class").excludeReplay(e).head(3).list();
return this.math.avg(t, function(e) {
return e.classGameInfo.score;
});
};
t.prototype.first_cold_session_endless_break_rate = function(e) {
void 0 === e && (e = !0);
var t = this._firstColdSessionWindow();
if (t) {
var r = this.ctx.games.front().mode("class").excludeReplay(e).timeRange(t).list();
if (0 !== r.length) return this.math.rate(r, function(e) {
return e.classGameInfo.score > e.classGameInfo.lastHighScore;
});
}
};
t.prototype.first_cold_session_travel_cnt = function(e) {
void 0 === e && (e = !0);
var t = this._firstColdSessionWindow();
return t ? this.ctx.games.front().mode("chapter").excludeReplay(e).timeRange(t).list().length : 0;
};
t.prototype.last_revive_click_cnt_today = function(e, t) {
var r, n;
void 0 === e && (e = !0);
void 0 === t && (t = "class");
var o = this.ctx.games.back().mode(t).excludeReplay(e).timeRange(this.time.today).tail(1).first();
return null !== (n = null === (r = null == o ? void 0 : o.baseGameInfo) || void 0 === r ? void 0 : r.reviveClickCnt) && void 0 !== n ? n : void 0;
};
t.prototype.last_revive_show_cnt_today = function(e, t) {
var r, n;
void 0 === e && (e = !0);
void 0 === t && (t = "class");
var o = this.ctx.games.back().mode(t).excludeReplay(e).timeRange(this.time.today).tail(1).first();
return null !== (n = null === (r = null == o ? void 0 : o.baseGameInfo) || void 0 === r ? void 0 : r.reviveShowCnt) && void 0 !== n ? n : void 0;
};
t.prototype.last_break_amp_today = function(e, t) {
void 0 === e && (e = !0);
var r = this.ctx.games.back().mode("class").excludeReplay(e).timeRange(this.time.today).tail(1).first();
if (r) {
var n = r.classGameInfo, o = n.score, a = n.lastHighScore;
if (o > a) return this.breakAmpCapped(o, a, t);
}
};
t.prototype.last_score_today = function(e) {
var t;
void 0 === e && (e = !0);
var r = this.ctx.games.back().mode("class").excludeReplay(e).timeRange(this.time.today).tail(1).first();
return null === (t = null == r ? void 0 : r.classGameInfo) || void 0 === t ? void 0 : t.score;
};
t.prototype.score_regN_M_std_capped = function(e, t, r, n) {
var o = this;
void 0 === r && (r = !0);
return this.math.stdSample(this.ctx.games.front().mode("class").excludeReplay(r).timeRange(this.time.sinceN_M(e - 1, t, "day")).list(), function(e) {
return o.cappedScore(e.classGameInfo.score, n);
});
};
t.prototype.break_amp_recentN_avg_capped = function(e, t, r, n) {
var o = this;
void 0 === t && (t = 3);
void 0 === r && (r = !0);
var a = this.ctx.games.back().mode("class").excludeReplay(r).timeRange(this.time.recentN(t, "day")).tail(e).list().filter(function(e) {
return e.classGameInfo.score > e.classGameInfo.lastHighScore;
});
return this.math.avg(a, function(e) {
return o.breakAmpCapped(e.classGameInfo.score, e.classGameInfo.lastHighScore, n);
});
};
t.prototype.break_amp_recentN_max_capped = function(e, t, r, n) {
var o = this;
void 0 === t && (t = 3);
void 0 === r && (r = !0);
var a = this.ctx.games.back().mode("class").excludeReplay(r).timeRange(this.time.recentN(t, "day")).tail(e).list().filter(function(e) {
return e.classGameInfo.score > e.classGameInfo.lastHighScore;
});
return this.math.max(a, function(e) {
return o.breakAmpCapped(e.classGameInfo.score, e.classGameInfo.lastHighScore, n);
});
};
t.prototype.break_amp_dayN_M_avg_capped = function(e, t, r, n) {
var o = this;
void 0 === r && (r = !0);
var a = this.ctx.games.back().mode("class").excludeReplay(r).timeRange(this.time.recentN_M(e, t, "day")).list().filter(function(e) {
return e.classGameInfo.score > e.classGameInfo.lastHighScore;
});
return this.math.avg(a, function(e) {
return o.breakAmpCapped(e.classGameInfo.score, e.classGameInfo.lastHighScore, n);
});
};
t.prototype.break_amp_dayN_M_max_capped = function(e, t, r, n) {
var o = this;
void 0 === r && (r = !0);
var a = this.ctx.games.back().mode("class").excludeReplay(r).timeRange(this.time.recentN_M(e, t, "day")).list().filter(function(e) {
return e.classGameInfo.score > e.classGameInfo.lastHighScore;
});
return this.math.max(a, function(e) {
return o.breakAmpCapped(e.classGameInfo.score, e.classGameInfo.lastHighScore, n);
});
};
t.prototype.score_recentN_std_capped = function(e, t, r, n) {
var o = this;
void 0 === t && (t = 3);
void 0 === r && (r = !0);
var a = this.ctx.games.back().mode("class").excludeReplay(r).timeRange(this.time.recentN(t, "day")).tail(e).list();
return this.math.stdSample(a, function(e) {
return o.cappedScore(e.classGameInfo.score, n);
});
};
t.prototype.revive_show_avg_cnt_regN_M = function(e, t, r, n) {
void 0 === r && (r = !0);
void 0 === n && (n = "class");
return this.math.avg(this.ctx.games.front().mode(n).excludeReplay(r).timeRange(this.time.sinceN_M(e - 1, t, "day")).list(), function(e) {
var t;
return null !== (t = e.baseGameInfo.reviveShowCnt) && void 0 !== t ? t : 0;
});
};
t.prototype.revive_success_ratio_regN_M = function(e, t, r, n) {
void 0 === r && (r = !0);
void 0 === n && (n = "class");
var o = this.ctx.games.front().mode(n).excludeReplay(r).timeRange(this.time.sinceN_M(e - 1, t, "day")).list(), a = this.math.sum(o, function(e) {
var t;
return null !== (t = e.baseGameInfo.reviveShowCnt) && void 0 !== t ? t : 0;
}), i = this.math.sum(o, function(e) {
var t;
return null !== (t = e.baseGameInfo.reviveSuccessCnt) && void 0 !== t ? t : 0;
});
return this.math.div(i, a);
};
return a([ u.modelFeatureCatalog ], t);
}(c.ModelFeatureCatalogBase);
r.ModelFeatureGameCatalog = p;
cc._RF.pop();
}, {
"../../../../scripts/modules/score/vo/ScoreInfo": void 0,
"../utils/ModelFeatureAlgoClassifier": "ModelFeatureAlgoClassifier",
"../wiring/ModelFeatureCatalogBase": "ModelFeatureCatalogBase",
"../wiring/decorators/forCatalog": "forCatalog"
} ],
ModelFeatureGameView: [ function(e, t, r) {
"use strict";
cc._RF.push(t, "c04232k7GhOx4odqlDLKIDY", "ModelFeatureGameView");
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
};
Object.defineProperty(r, "__esModule", {
value: !0
});
r.ModelFeatureGameView = void 0;
var i = e("../data/proto/ModelFeatureData"), s = e("./ModelFeatureView"), l = e("./decorators/cached"), u = function(e) {
o(t, e);
function t() {
return null !== e && e.apply(this, arguments) || this;
}
t.prototype.mode = function(e) {
var t = this;
return e ? this.chain(function() {
var r = "class" === e ? i.ModelFeature.GameMode.Class : i.ModelFeature.GameMode.Chapter;
return t.records.filter(function(e) {
return e.baseGameInfo.gameMode === r;
});
}) : this;
};
t.prototype.excludeReplay = function(e) {
var t = this;
void 0 === e && (e = !0);
return e ? this.chain(function() {
return t.records.filter(function(e) {
return !1 === e.baseGameInfo.isReplay;
});
}) : this;
};
a([ l.cached ], t.prototype, "mode", null);
a([ l.cached ], t.prototype, "excludeReplay", null);
return t;
}(s.ModelFeatureView);
r.ModelFeatureGameView = u;
cc._RF.pop();
}, {
"../data/proto/ModelFeatureData": "ModelFeatureData",
"./ModelFeatureView": "ModelFeatureView",
"./decorators/cached": "cached"
} ],
ModelFeatureGmDataSize: [ function(e, t, r) {
"use strict";
cc._RF.push(t, "e1fd77M2iFBc5ysrNJNJAw4", "ModelFeatureGmDataSize");
var n;
this && this.__values, this && this.__read;
Object.defineProperty(r, "__esModule", {
value: !0
});
r.registerModelFeatureDataSizeGm = void 0;
var o = e("../interface/ModelFeatureSeriesSourceInterface");
e("../data/storage/ModelFeaturePersistInfo"), e("../data/proto/ModelFeatureSeriesCodec"), 
e("../../../../scripts/modules/gm/config/GmTraitConfig");
(n = {})[o.EModelFeatureSeriesSource.Game] = "Game", n[o.EModelFeatureSeriesSource.Ad] = "Ad", 
n[o.EModelFeatureSeriesSource.Session] = "Session";
r.registerModelFeatureDataSizeGm = function() {};
cc._RF.pop();
}, {
"../../../../scripts/modules/gm/config/GmTraitConfig": void 0,
"../data/proto/ModelFeatureSeriesCodec": "ModelFeatureSeriesCodec",
"../data/storage/ModelFeaturePersistInfo": "ModelFeaturePersistInfo",
"../interface/ModelFeatureSeriesSourceInterface": "ModelFeatureSeriesSourceInterface"
} ],
ModelFeatureGmFakeData: [ function(e, t, r) {
"use strict";
cc._RF.push(t, "89800UptjlB64juZxXckkP2", "ModelFeatureGmFakeData");
this && this.__assign;
var n = this && this.__values || function(e) {
var t = "function" == typeof Symbol && Symbol.iterator, r = t && e[t], n = 0;
if (r) return r.call(e);
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
}, o = this && this.__read || function(e, t) {
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
r.registerModelFeatureFakeDataGm = void 0;
e("../interface/ModelFeatureSeriesSourceInterface"), e("../data/storage/ModelFeaturePersistInfo"), 
e("../data/proto/ModelFeatureData");
var a, i = e("../../../../scripts/modules/algorithm/config/AlgorithmConfig");
e("../../../../scripts/modules/gm/config/GmTraitConfig");
(function() {
var e, t, r = [], a = new Set(), s = Object.entries(i.OFFER_TYPE_STRINGS);
try {
for (var l = n(s), u = l.next(); !u.done; u = l.next()) {
var c = o(u.value, 2), d = c[0], f = c[1], m = Number(d);
if (!isNaN(m) && f && "" !== f.trim() && !a.has(m)) {
a.add(m);
r.push({
algoType: m,
algoName: f
});
}
}
} catch (t) {
e = {
error: t
};
} finally {
try {
u && !u.done && (t = l.return) && t.call(l);
} finally {
if (e) throw e.error;
}
}
})();
(function(e) {
e[e.Game = 0] = "Game";
e[e.Session = 1] = "Session";
e[e.Ad = 2] = "Ad";
})(a || (a = {}));
r.registerModelFeatureFakeDataGm = function() {};
cc._RF.pop();
}, {
"../../../../scripts/modules/algorithm/config/AlgorithmConfig": void 0,
"../../../../scripts/modules/gm/config/GmTraitConfig": void 0,
"../data/proto/ModelFeatureData": "ModelFeatureData",
"../data/storage/ModelFeaturePersistInfo": "ModelFeaturePersistInfo",
"../interface/ModelFeatureSeriesSourceInterface": "ModelFeatureSeriesSourceInterface"
} ],
ModelFeatureGmPrintRecords: [ function(e, t, r) {
"use strict";
cc._RF.push(t, "182243dSXFNTqBZQ+b5tz2Y", "ModelFeatureGmPrintRecords");
this && this.__values;
Object.defineProperty(r, "__esModule", {
value: !0
});
r.registerModelFeaturePrintRecordsGm = void 0;
e("../interface/ModelFeatureSeriesSourceInterface"), e("../data/collector/ModelFeatureCollector"), 
e("../../../../scripts/modules/gm/config/GmTraitConfig");
r.registerModelFeaturePrintRecordsGm = function() {};
cc._RF.pop();
}, {
"../../../../scripts/modules/gm/config/GmTraitConfig": void 0,
"../data/collector/ModelFeatureCollector": "ModelFeatureCollector",
"../interface/ModelFeatureSeriesSourceInterface": "ModelFeatureSeriesSourceInterface"
} ],
ModelFeatureInterLoadEcpmStore: [ function(e, t, r) {
"use strict";
cc._RF.push(t, "c2252/UcJpLxYIo+w+M8ePd", "ModelFeatureInterLoadEcpmStore");
var n = this && this.__read || function(e, t) {
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
}, o = this && this.__spread || function() {
for (var e = [], t = 0; t < arguments.length; t++) e = e.concat(n(arguments[t]));
return e;
};
Object.defineProperty(r, "__esModule", {
value: !0
});
r.modelFeatureInterLoadEcpmStore = void 0;
var a = e("../../../../../scripts/base/storage/Storage"), i = function() {
function e() {}
e.prototype.getList = function() {
var e = a.storage.getItem("ModelFeatureInterLoadEcpmList", []);
return Array.isArray(e) ? o(e) : [];
};
e.prototype.append = function(e) {
var t = this.getList();
if (!(t.length >= 10)) {
t.push(e);
a.storage.setItem("ModelFeatureInterLoadEcpmList", t);
}
};
return e;
}();
r.modelFeatureInterLoadEcpmStore = new i();
cc._RF.pop();
}, {
"../../../../../scripts/base/storage/Storage": void 0
} ],
ModelFeatureInterface: [ function(e, t, r) {
"use strict";
cc._RF.push(t, "e7aa7ezV7FMu4N0kIsr/n52", "ModelFeatureInterface");
Object.defineProperty(r, "__esModule", {
value: !0
});
cc._RF.pop();
}, {} ],
ModelFeatureMain: [ function(e, t, r) {
"use strict";
cc._RF.push(t, "6abb26WOwRA6Y3AjdKseGG9", "ModelFeatureMain");
var n = this && this.__awaiter || function(e, t, r, n) {
return new (r || (r = Promise))(function(o, a) {
function i(e) {
try {
l(n.next(e));
} catch (e) {
a(e);
}
}
function s(e) {
try {
l(n.throw(e));
} catch (e) {
a(e);
}
}
function l(e) {
e.done ? o(e.value) : (t = e.value, t instanceof r ? t : new r(function(e) {
e(t);
})).then(i, s);
var t;
}
l((n = n.apply(e, t || [])).next());
});
}, o = this && this.__generator || function(e, t) {
var r, n, o, a, i = {
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
if (r) throw new TypeError("Generator is already executing.");
for (;i; ) try {
if (r = 1, n && (o = 2 & a[0] ? n.return : a[0] ? n.throw || ((o = n.return) && o.call(n), 
0) : n.next) && !(o = o.call(n, a[1])).done) return o;
(n = 0, o) && (a = [ 2 & a[0], o.value ]);
switch (a[0]) {
case 0:
case 1:
o = a;
break;

case 4:
i.label++;
return {
value: a[1],
done: !1
};

case 5:
i.label++;
n = a[1];
a = [ 0 ];
continue;

case 7:
a = i.ops.pop();
i.trys.pop();
continue;

default:
if (!(o = i.trys, o = o.length > 0 && o[o.length - 1]) && (6 === a[0] || 2 === a[0])) {
i = 0;
continue;
}
if (3 === a[0] && (!o || a[1] > o[0] && a[1] < o[3])) {
i.label = a[1];
break;
}
if (6 === a[0] && i.label < o[1]) {
i.label = o[1];
o = a;
break;
}
if (o && i.label < o[2]) {
i.label = o[2];
i.ops.push(a);
break;
}
o[2] && i.ops.pop();
i.trys.pop();
continue;
}
a = t.call(e, i);
} catch (e) {
a = [ 6, e ];
n = 0;
} finally {
r = o = 0;
}
if (5 & a[0]) throw a[1];
return {
value: a[0] ? a[1] : void 0,
done: !0
};
}
};
Object.defineProperty(r, "__esModule", {
value: !0
});
r.ModelFeatureMain = void 0;
var a = e("./wiring/ModelFeatureSetRegistry"), i = e("../../../scripts/falcon/ModuleManager"), s = e("./ModelFeature_Module"), l = e("./data/ModelFeatureDataCenter"), u = e("./utils/ModelFeaturePerfLog");
i.ModuleManager.resigerModule([ s.ModelFeature_Module ]);
i.ModuleManager.startModule(i.ModuleType.Common);
var c = function() {
function e() {}
e.prototype.register = function(e) {
a.ModelFeatureSetRegistry.register(e);
};
e.prototype.build = function(e) {
return n(this, void 0, Promise, function() {
var t, r, n, i, s, c;
return o(this, function(o) {
switch (o.label) {
case 0:
t = u.ModelFeaturePerfLog.now();
r = l.modelFeatureDataCenter.isReady();
n = u.ModelFeaturePerfLog.now();
return [ 4, l.modelFeatureDataCenter.ensureHydrated() ];

case 1:
o.sent();
i = u.ModelFeaturePerfLog.ms(n);
s = u.ModelFeaturePerfLog.now();
c = a.ModelFeatureSetRegistry.build(e);
u.ModelFeaturePerfLog.log("Main", "mf.build 完成", {
alreadyReady: r,
hydrateMs: i,
buildMs: u.ModelFeaturePerfLog.ms(s),
totalMs: u.ModelFeaturePerfLog.ms(t)
});
return [ 2, c ];
}
});
});
};
e.prototype.getRecordedRoundCount = function() {
return l.modelFeatureDataCenter.getRecordedRoundCount();
};
return e;
}();
r.ModelFeatureMain = c;
var d = new c();
window.mf || (window.mf = d);
cc._RF.pop();
}, {
"../../../scripts/falcon/ModuleManager": void 0,
"./ModelFeature_Module": "ModelFeature_Module",
"./data/ModelFeatureDataCenter": "ModelFeatureDataCenter",
"./utils/ModelFeaturePerfLog": "ModelFeaturePerfLog",
"./wiring/ModelFeatureSetRegistry": "ModelFeatureSetRegistry"
} ],
ModelFeaturePendingSourceInterface: [ function(e, t, r) {
"use strict";
cc._RF.push(t, "cff33Z63fFOj5x7omR+SsWD", "ModelFeaturePendingSourceInterface");
Object.defineProperty(r, "__esModule", {
value: !0
});
r.MODEL_FEATURE_PENDING_SOURCE_PROPERTY = r.EModelFeaturePendingSource = void 0;
var n;
(function(e) {
e.PendingClassGameInfo = "pendingClassGameInfo";
e.PendingChapterGameInfo = "pendingChapterGameInfo";
e.PendingAdInterstitial = "pendingAdInterstitial";
e.PendingAdReward = "pendingAdReward";
e.PendingAdBanner = "pendingAdBanner";
})(n = r.EModelFeaturePendingSource || (r.EModelFeaturePendingSource = {}));
r.MODEL_FEATURE_PENDING_SOURCE_PROPERTY = {
pendingClassGameInfo: n.PendingClassGameInfo,
pendingChapterGameInfo: n.PendingChapterGameInfo,
pendingAdInterstitial: n.PendingAdInterstitial,
pendingAdReward: n.PendingAdReward,
pendingAdBanner: n.PendingAdBanner
};
cc._RF.pop();
}, {} ],
ModelFeaturePerfLog: [ function(e, t, r) {
"use strict";
cc._RF.push(t, "ef6f70s42BLRa3uhx84gkQs", "ModelFeaturePerfLog");
var n = this && this.__awaiter || function(e, t, r, n) {
return new (r || (r = Promise))(function(o, a) {
function i(e) {
try {
l(n.next(e));
} catch (e) {
a(e);
}
}
function s(e) {
try {
l(n.throw(e));
} catch (e) {
a(e);
}
}
function l(e) {
e.done ? o(e.value) : (t = e.value, t instanceof r ? t : new r(function(e) {
e(t);
})).then(i, s);
var t;
}
l((n = n.apply(e, t || [])).next());
});
}, o = this && this.__generator || function(e, t) {
var r, n, o, a, i = {
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
if (r) throw new TypeError("Generator is already executing.");
for (;i; ) try {
if (r = 1, n && (o = 2 & a[0] ? n.return : a[0] ? n.throw || ((o = n.return) && o.call(n), 
0) : n.next) && !(o = o.call(n, a[1])).done) return o;
(n = 0, o) && (a = [ 2 & a[0], o.value ]);
switch (a[0]) {
case 0:
case 1:
o = a;
break;

case 4:
i.label++;
return {
value: a[1],
done: !1
};

case 5:
i.label++;
n = a[1];
a = [ 0 ];
continue;

case 7:
a = i.ops.pop();
i.trys.pop();
continue;

default:
if (!(o = i.trys, o = o.length > 0 && o[o.length - 1]) && (6 === a[0] || 2 === a[0])) {
i = 0;
continue;
}
if (3 === a[0] && (!o || a[1] > o[0] && a[1] < o[3])) {
i.label = a[1];
break;
}
if (6 === a[0] && i.label < o[1]) {
i.label = o[1];
o = a;
break;
}
if (o && i.label < o[2]) {
i.label = o[2];
i.ops.push(a);
break;
}
o[2] && i.ops.pop();
i.trys.pop();
continue;
}
a = t.call(e, i);
} catch (e) {
a = [ 6, e ];
n = 0;
} finally {
r = o = 0;
}
if (5 & a[0]) throw a[1];
return {
value: a[0] ? a[1] : void 0,
done: !0
};
}
};
Object.defineProperty(r, "__esModule", {
value: !0
});
r.ModelFeaturePerfLog = void 0;
(function(e) {
function t() {
return "undefined" != typeof performance && "function" == typeof performance.now ? performance.now() : Date.now();
}
e.now = t;
e.ms = function(e) {
return Math.round(100 * (t() - e)) / 100;
};
e.log = function() {};
e.warn = function() {};
e.error = function() {};
e.measureSync = function(e, t, r) {
return r();
};
e.measureAsync = function(e, t, r) {
return n(this, void 0, Promise, function() {
return o(this, function() {
return [ 2, r() ];
});
});
};
})(r.ModelFeaturePerfLog || (r.ModelFeaturePerfLog = {}));
cc._RF.pop();
}, {} ],
ModelFeaturePersistInfo: [ function(e, t, r) {
"use strict";
cc._RF.push(t, "fda42u/cxJLQaDs9laQSjVj", "ModelFeaturePersistInfo");
var n, o, a, i = this && this.__awaiter || function(e, t, r, n) {
return new (r || (r = Promise))(function(o, a) {
function i(e) {
try {
l(n.next(e));
} catch (e) {
a(e);
}
}
function s(e) {
try {
l(n.throw(e));
} catch (e) {
a(e);
}
}
function l(e) {
e.done ? o(e.value) : (t = e.value, t instanceof r ? t : new r(function(e) {
e(t);
})).then(i, s);
var t;
}
l((n = n.apply(e, t || [])).next());
});
}, s = this && this.__generator || function(e, t) {
var r, n, o, a, i = {
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
if (r) throw new TypeError("Generator is already executing.");
for (;i; ) try {
if (r = 1, n && (o = 2 & a[0] ? n.return : a[0] ? n.throw || ((o = n.return) && o.call(n), 
0) : n.next) && !(o = o.call(n, a[1])).done) return o;
(n = 0, o) && (a = [ 2 & a[0], o.value ]);
switch (a[0]) {
case 0:
case 1:
o = a;
break;

case 4:
i.label++;
return {
value: a[1],
done: !1
};

case 5:
i.label++;
n = a[1];
a = [ 0 ];
continue;

case 7:
a = i.ops.pop();
i.trys.pop();
continue;

default:
if (!(o = i.trys, o = o.length > 0 && o[o.length - 1]) && (6 === a[0] || 2 === a[0])) {
i = 0;
continue;
}
if (3 === a[0] && (!o || a[1] > o[0] && a[1] < o[3])) {
i.label = a[1];
break;
}
if (6 === a[0] && i.label < o[1]) {
i.label = o[1];
o = a;
break;
}
if (o && i.label < o[2]) {
i.label = o[2];
i.ops.push(a);
break;
}
o[2] && i.ops.pop();
i.trys.pop();
continue;
}
a = t.call(e, i);
} catch (e) {
a = [ 6, e ];
n = 0;
} finally {
r = o = 0;
}
if (5 & a[0]) throw a[1];
return {
value: a[0] ? a[1] : void 0,
done: !0
};
}
}, l = this && this.__values || function(e) {
var t = "function" == typeof Symbol && Symbol.iterator, r = t && e[t], n = 0;
if (r) return r.call(e);
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
}, u = this && this.__read || function(e, t) {
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
}, c = this && this.__spread || function() {
for (var e = [], t = 0; t < arguments.length; t++) e = e.concat(u(arguments[t]));
return e;
};
Object.defineProperty(r, "__esModule", {
value: !0
});
r.ModelFeaturePersistInfo = r.registerHydrateGate = void 0;
var d = e("../../interface/ModelFeatureSeriesSourceInterface"), f = e("./serizlizer/ModelFeatureRawSerializer"), m = e("./series/IModelFeatureSeriesStorage"), p = e("./series/ModelFeatureSeriesStorageFactory"), h = e("../proto/ModelFeatureSeriesCodec"), g = e("../../utils/ModelFeaturePerfLog"), v = "dataCollect_", y = ((n = {})[d.EModelFeatureSeriesSource.Game] = {
frontMinDays: 3,
frontMode: "count",
frontCountThreshold: 10,
backWindowDays: 15
}, n[d.EModelFeatureSeriesSource.Ad] = {
frontMinDays: 3,
frontMode: "count",
frontCountThreshold: 10,
backWindowDays: 15
}, n[d.EModelFeatureSeriesSource.Session] = {
frontMinDays: 3,
frontMode: "daysOnly",
backWindowDays: 15
}, n), b = 2e3;
function _() {
return new Promise(function(e) {
return setTimeout(e, 0);
});
}
function S(e, t) {
return i(this, void 0, Promise, function() {
var r, n, o, a, i, u, c, d, f;
return s(this, function(s) {
switch (s.label) {
case 0:
r = [];
s.label = 1;

case 1:
s.trys.push([ 1, 7, 8, 9 ]);
n = l(e), o = n.next();
s.label = 2;

case 2:
if (o.done) return [ 3, 6 ];
a = o.value;
u = (i = r).push;
return [ 4, t(a) ];

case 3:
u.apply(i, [ s.sent() ]);
return [ 4, _() ];

case 4:
s.sent();
s.label = 5;

case 5:
o = n.next();
return [ 3, 2 ];

case 6:
return [ 3, 9 ];

case 7:
c = s.sent();
d = {
error: c
};
return [ 3, 9 ];

case 8:
try {
o && !o.done && (f = n.return) && f.call(n);
} finally {
if (d) throw d.error;
}
return [ 7 ];

case 9:
return [ 2, r ];
}
});
});
}
var I = function() {
return !0;
}, w = function() {
return Promise.resolve();
};
r.registerHydrateGate = function(e, t) {
I = e;
w = t;
};
var M = Object.values(d.EModelFeatureSeriesSource);
function C(e) {
return "count" === y[e].frontMode;
}
function G(e) {
return "" + v + e;
}
function R(e) {
var t = new Date(e);
return "" + t.getFullYear() + String(t.getMonth() + 1).padStart(2, "0") + String(t.getDate()).padStart(2, "0");
}
function x(e, t) {
var r = +e.slice(0, 4), n = +e.slice(4, 6) - 1, o = +e.slice(6, 8);
return R(new Date(r, n, o + t).getTime());
}
var O = new f.ModelFeatureRawSerializer(), F = null;
function T() {
if (!F) {
var e = p.createModelFeatureSeriesStorage();
e.init().catch(function(e) {
g.ModelFeaturePerfLog.error("PersistInfo", "series storage init 失败", e);
F = null;
});
F = e;
}
return F;
}
var N = new Map();
try {
for (var E = l(M), j = E.next(); !j.done; j = E.next()) {
var A = j.value;
N.set(A, []);
}
} catch (e) {
o = {
error: e
};
} finally {
try {
j && !j.done && (a = E.return) && a.call(E);
} finally {
if (o) throw o.error;
}
}
var k = new Map(), P = new Map();
function L(e) {
var t = N.get(e);
if (!t) {
t = [];
N.set(e, t);
}
return t;
}
function B(e) {
return G("todayDate_" + e);
}
function D(e) {
var t = O.getItem(B(e));
return "string" == typeof t ? t : null;
}
function W(e, t) {
O.saveItem(B(e), t);
}
function H(e, t) {
var r, n, o = [], a = [];
try {
for (var i = l(e), s = i.next(); !s.done; s = i.next()) {
var u = s.value;
R(u.ts) === t ? a.push(u) : o.push(u);
}
} catch (e) {
r = {
error: e
};
} finally {
try {
s && !s.done && (n = i.return) && n.call(i);
} finally {
if (r) throw r.error;
}
}
return {
old: o,
today: a
};
}
function U(e, t) {
return R(e) === t ? "today" : "old";
}
function V(e) {
return G("trackedDates_" + e);
}
function z(e) {
var t = O.getItem(V(e));
return Array.isArray(t) ? t.sort() : [];
}
function J(e, t) {
O.saveItem(V(e), t);
}
function q(e) {
return G("dayCounts_" + e);
}
function Z(e) {
var t = O.getItem(q(e));
return t && "object" == typeof t && !Array.isArray(t) ? t : {};
}
function Y(e, t) {
O.saveItem(q(e), t);
}
function $(e) {
O.removeItem(q(e));
}
function K(e, t) {
var r, n = Z(e);
n[t] = (null !== (r = n[t]) && void 0 !== r ? r : 0) + 1;
Y(e, n);
}
function X(e) {
return G("frontBoundaryDate_" + e);
}
function Q(e) {
var t = O.getItem(X(e));
return "string" == typeof t ? t : null;
}
function ee(e, t) {
O.saveItem(X(e), t);
}
function te(e, t) {
var r = k.get(e);
if (!r) {
r = new Set();
k.set(e, r);
}
r.add(t);
}
var re = [ "old", "today" ];
function ne(e) {
var t = k.get(e);
if (!t || 0 === t.size) return [];
var r = re.filter(function(e) {
return t.has(e);
});
t.clear();
return c(r);
}
function oe(e, t) {
var r, n;
try {
for (var o = l(t), a = o.next(); !a.done; a = o.next()) te(e, a.value);
} catch (e) {
r = {
error: e
};
} finally {
try {
a && !a.done && (n = o.return) && n.call(o);
} finally {
if (r) throw r.error;
}
}
}
var ae = 1, ie = new Map();
function se(e) {
var t;
return (null !== (t = ie.get(e)) && void 0 !== t ? t : 0) > ae;
}
function le(e) {
ie.delete(e);
}
function ue(e) {
var t, r = (null !== (t = ie.get(e)) && void 0 !== t ? t : 0) + 1;
ie.set(e, r);
return r;
}
function ce(e) {
var t = P.get(e);
t && clearTimeout(t);
P.set(e, setTimeout(function() {
P.delete(e);
de(e);
}, b));
}
function de(e) {
var t, r;
return i(this, void 0, Promise, function() {
var n, o, a, l, u, c, d, f, m, p, v = this;
return s(this, function(y) {
switch (y.label) {
case 0:
if (0 === (n = ne(e)).length) return [ 2 ];
if (se(e)) {
oe(e, n);
return [ 2 ];
}
return I() ? [ 3, 2 ] : [ 4, w() ];

case 1:
y.sent();
y.label = 2;

case 2:
g.ModelFeaturePerfLog.now();
o = {};
y.label = 3;

case 3:
y.trys.push([ 3, 8, , 9 ]);
a = T();
if (!((l = null === (t = a.saveShardsBatch) || void 0 === t ? void 0 : t.bind(a)) && n.length > 1)) return [ 3, 5 ];
u = L(e);
c = null !== (r = D(e)) && void 0 !== r ? r : R(Date.now());
d = H(u, c);
f = n.map(function(t) {
var r = "today" === t ? d.today : d.old;
o[t] = r.length;
return {
shard: t,
bytes: r.length > 0 ? h.encode(e, r) : null
};
});
return [ 4, l(e, f) ];

case 4:
y.sent();
return [ 3, 7 ];

case 5:
return [ 4, S(n, function(t) {
return i(v, void 0, void 0, function() {
var r, n, i, l, u, c;
return s(this, function(s) {
switch (s.label) {
case 0:
r = L(e);
n = null !== (c = D(e)) && void 0 !== c ? c : R(Date.now());
i = H(r, n);
l = "today" === t ? i.today : i.old;
o[t] = l.length;
if (!(l.length > 0)) return [ 3, 2 ];
u = h.encode(e, l);
return [ 4, a.saveShard(e, t, u) ];

case 1:
s.sent();
return [ 3, 4 ];

case 2:
return [ 4, a.deleteShard(e, t) ];

case 3:
s.sent();
s.label = 4;

case 4:
return [ 2 ];
}
});
});
}) ];

case 6:
y.sent();
y.label = 7;

case 7:
le(e);
return [ 3, 9 ];

case 8:
m = y.sent();
p = ue(e);
g.ModelFeaturePerfLog.error("PersistInfo", "series 落盘失败(source=" + e + ", 第" + p + "次)", m);
oe(e, n);
p > ae && g.ModelFeaturePerfLog.error("PersistInfo", "落盘连续失败已达上限(source=" + e + ")，暂停自动重试");
return [ 3, 9 ];

case 9:
return [ 2 ];
}
});
});
}
function fe(e) {
var t, r, n, o = ne(e);
if (0 === o.length) return [];
if (se(e)) {
oe(e, o);
return o;
}
var a = T();
if (!a.saveShardSync || !cc.sys.isNative) {
oe(e, o);
de(e);
return o;
}
var i = [];
try {
var s = H(L(e), null !== (n = D(e)) && void 0 !== n ? n : R(Date.now())), u = {
old: s.old,
today: s.today
};
try {
for (var d = l(o), f = d.next(); !f.done; f = d.next()) {
var m = f.value;
try {
var p = u[m];
if (p.length > 0) {
var v = h.encode(e, p);
a.saveShardSync(e, m, v);
} else a.deleteShardSync(e, m);
} catch (t) {
g.ModelFeaturePerfLog.error("PersistInfo", "同步落盘分片失败(source=" + e + ", shard=" + m + ")", t);
i.push(m);
}
}
} catch (e) {
t = {
error: e
};
} finally {
try {
f && !f.done && (r = d.return) && r.call(d);
} finally {
if (t) throw t.error;
}
}
} catch (t) {
g.ModelFeaturePerfLog.error("PersistInfo", "同步落盘失败(source=" + e + ")", t);
i.push.apply(i, c(o));
}
if (i.length > 0) {
var y = ue(e);
g.ModelFeaturePerfLog.error("PersistInfo", "同步落盘失败汇总(source=" + e + ", 第" + y + "次)");
oe(e, i);
y > ae && g.ModelFeaturePerfLog.error("PersistInfo", "落盘连续失败已达上限(source=" + e + ")，暂停自动重试");
} else le(e);
return i;
}
function me() {
var e, t, r = g.ModelFeaturePerfLog.now(), n = 0;
try {
for (var o = l(k.keys()), a = o.next(); !a.done; a = o.next()) {
var i = a.value;
if (0 !== k.get(i).size) {
var s = P.get(i);
if (s) {
clearTimeout(s);
P.delete(i);
}
fe(i);
n++;
}
}
} catch (t) {
e = {
error: t
};
} finally {
try {
a && !a.done && (t = o.return) && t.call(o);
} finally {
if (e) throw e.error;
}
}
n > 0 && g.ModelFeaturePerfLog.log("PersistInfo", "flushAllDirtySources 完成", {
sources: n,
totalMs: g.ModelFeaturePerfLog.ms(r)
});
}
function pe(e, t) {
var r = e, n = D(r);
if (n === t) return !1;
W(r, t);
var o = Q(r);
null === o && (o = ve(e));
var a = !1;
null !== o && (a = ye(e, o));
te(e, "old");
te(e, "today");
ce(e);
g.ModelFeaturePerfLog.log("PersistInfo", "日切 rollover(source=" + r + ")", {
from: n,
to: t
});
return a;
}
function he(e, t) {
var r = e, n = D(r);
if (null === n) {
W(r, t);
return !1;
}
return t > n && pe(e, t);
}
function ge(e) {
he(e, R(Date.now()));
}
function ve(e) {
var t, r, n, o, a, i = y[e], s = e, u = z(s);
if (0 === u.length) return null;
var c = u[0], d = null !== (n = D(s)) && void 0 !== n ? n : R(Date.now()), f = x(c, i.frontMinDays - 1);
if (d <= f) return null;
if ("daysOnly" === i.frontMode) {
ee(s, f);
Se(e, f);
g.ModelFeaturePerfLog.log("PersistInfo", "前置窗口锁定(source=" + s + "): frontBoundary=" + f + ", mode=daysOnly");
return f;
}
var m = u.filter(function(e) {
return e !== d;
}), p = Z(s), h = 0, v = null;
try {
for (var b = l(m), _ = b.next(); !_.done; _ = b.next()) {
var S = _.value;
if ((h += null !== (o = p[S]) && void 0 !== o ? o : 0) >= (null !== (a = i.frontCountThreshold) && void 0 !== a ? a : 0)) {
v = S;
break;
}
}
} catch (e) {
t = {
error: e
};
} finally {
try {
_ && !_.done && (r = b.return) && r.call(b);
} finally {
if (t) throw t.error;
}
}
if (null === v) return null;
var I = v > f ? v : f;
ee(s, I);
Se(e, I);
$(s);
g.ModelFeaturePerfLog.log("PersistInfo", "前置窗口锁定(source=" + s + "): frontBoundary=" + I + ", count=" + h);
return I;
}
function ye(e, t) {
var r, n, o, a = y[e], i = e, s = z(i), u = null !== (o = D(i)) && void 0 !== o ? o : R(Date.now()), c = x(u, -a.backWindowDays), d = s.filter(function(e) {
return e > t && e !== u;
}).filter(function(e) {
return e < c;
});
if (0 === d.length) return !1;
var f = !1;
try {
for (var m = l(d), p = m.next(); !p.done; p = m.next()) {
var h = p.value;
be(e, h);
f = !0;
g.ModelFeaturePerfLog.log("PersistInfo", "后置窗口裁剪(source=" + i + "): removed=" + h + ", cutoff=" + c);
}
} catch (e) {
r = {
error: e
};
} finally {
try {
p && !p.done && (n = m.return) && n.call(m);
} finally {
if (r) throw r.error;
}
}
if (f) {
te(e, "old");
ce(e);
}
return f;
}
function be(e, t) {
for (var r = e, n = L(e), o = n.length - 1; o >= 0; o--) R(n[o].ts) === t && n.splice(o, 1);
Ie.saveIsSplit(r, !0);
J(r, z(r).filter(function(e) {
return e !== t;
}));
}
function _e(e, t) {
var r = e, n = z(r);
if (n.includes(t)) return !1;
n.push(t);
n.sort();
J(r, n);
var o = Q(r);
null === o && (o = ve(e));
return null !== o && ye(e, o);
}
function Se(e, t) {
var r, n, o = e, a = L(e), i = 0;
try {
for (var s = l(a), u = s.next(); !u.done && !(R(u.value.ts) > t); u = s.next()) i++;
} catch (e) {
r = {
error: e
};
} finally {
try {
u && !u.done && (n = s.return) && n.call(s);
} finally {
if (r) throw r.error;
}
}
Ie.saveSplitIndex(o, i);
}
var Ie = function() {
function e() {}
e.appendSeriesRecord = function(e, t) {
var r, n = e, o = R(t.ts), a = he(n, R(Date.now()));
a = he(n, o) || a;
var i = L(n);
i.push(t);
N.set(n, i);
C(n) && null === Q(e) && K(e, o);
a = _e(n, o) || a;
var s = null !== (r = D(e)) && void 0 !== r ? r : o;
te(n, U(t.ts, s));
ce(n);
return a;
};
e.getSeriesArray = function(e) {
return L(e);
};
e.getTodayDate = function(e) {
return D(e);
};
e.loadSeries = function(e) {
return i(this, void 0, Promise, function() {
var t, r, n, o, a, i, u, d, f, p, v, y, b, S, I, w, M, C, G, R, x, O, F, N, E, j, A, k, P, B, W, H;
return s(this, function(s) {
switch (s.label) {
case 0:
r = L(t = e);
n = r.length;
o = g.ModelFeaturePerfLog.now();
a = 0;
i = 0;
u = 0;
d = 0;
f = 0;
p = !1;
s.label = 1;

case 1:
s.trys.push([ 1, 17, , 18 ]);
v = c(m.MODEL_FEATURE_SERIES_SHARDS);
y = g.ModelFeaturePerfLog.now();
b = [];
s.label = 2;

case 2:
s.trys.push([ 2, 11, 12, 13 ]);
S = l(v), I = S.next();
s.label = 3;

case 3:
if (I.done) return [ 3, 10 ];
w = I.value;
s.label = 4;

case 4:
s.trys.push([ 4, 6, , 7 ]);
return [ 4, T().loadShard(t, w) ];

case 5:
if (M = s.sent()) {
u++;
f += M.byteLength;
(C = h.decode(t, M)).length > 0 && b.push.apply(b, c(C));
}
return [ 3, 7 ];

case 6:
G = s.sent();
p = !0;
g.ModelFeaturePerfLog.error("PersistInfo", "分片加载/解码失败(source=" + e + ", shard=" + w + ")，该分片数据视为丢失，其余分片仍正常使用", G);
return [ 3, 7 ];

case 7:
return [ 4, _() ];

case 8:
s.sent();
s.label = 9;

case 9:
I = S.next();
return [ 3, 3 ];

case 10:
return [ 3, 13 ];

case 11:
R = s.sent();
P = {
error: R
};
return [ 3, 13 ];

case 12:
try {
I && !I.done && (B = S.return) && B.call(S);
} finally {
if (P) throw P.error;
}
return [ 7 ];

case 13:
a = g.ModelFeaturePerfLog.ms(y);
d = b.length;
x = g.ModelFeaturePerfLog.now();
return b.length > 0 ? [ 4, _() ] : [ 3, 15 ];

case 14:
s.sent();
b.sort(function(e, t) {
return e.ts - t.ts;
});
O = c(b, r).sort(function(e, t) {
return e.ts - t.ts;
});
F = [];
try {
for (N = l(O), E = N.next(); !E.done; E = N.next()) {
j = E.value;
A = j.ts;
0 !== F.length && F[F.length - 1].ts === A || F.push(j);
}
} catch (e) {
W = {
error: e
};
} finally {
try {
E && !E.done && (H = N.return) && H.call(N);
} finally {
if (W) throw W.error;
}
}
r.length = 0;
r.push.apply(r, c(F));
return [ 3, 16 ];

case 15:
r.length > 1 && r.sort(function(e, t) {
return e.ts - t.ts;
});
s.label = 16;

case 16:
i = g.ModelFeaturePerfLog.ms(x);
ge(t);
return [ 3, 18 ];

case 17:
k = s.sent();
g.ModelFeaturePerfLog.error("PersistInfo", "加载 series 失败(source=" + e + ")", k);
return [ 3, 18 ];

case 18:
g.ModelFeaturePerfLog.log("PersistInfo", "loadSeries source=" + e + " 入内存完成", {
shardsLoaded: u,
diskRecords: d,
hasShardFailure: p,
memBefore: n,
memAfter: r.length,
bytes: f,
todayDate: D(e),
loadDecodeMs: a,
mergeMs: i,
totalMs: g.ModelFeaturePerfLog.ms(o)
});
return [ 2, r ];
}
});
});
};
e.flushAllDirtySources = function() {
me();
};
e.updateLatestArrayItem = function(e, t, r) {
var n, o, a, i = e;
he(i, R(Date.now()));
var s = L(i);
if (0 !== s.length) {
var l = s[s.length - 1], u = r(l);
s[s.length - 1] = u;
N.set(i, s);
var c = null !== (n = D(e)) && void 0 !== n ? n : R(Date.now());
te(i, U(null !== (a = null !== (o = u.ts) && void 0 !== o ? o : l.ts) && void 0 !== a ? a : t, c));
ce(i);
}
};
e.saveSingle = function(e, t) {
var r = e;
O.saveItem(G(e), t, r);
};
e.loadSingle = function(e) {
var t = e;
return O.getItem(G(e), t);
};
e.removeSingle = function(e) {
O.removeItem(G(e));
};
e.splitIndexKey = function(e) {
return G("splitIndex_" + e);
};
e.isSplitKey = function(e) {
return G("isSplit_" + e);
};
e.saveSplitIndex = function(t, r) {
O.saveItem(e.splitIndexKey(t), r);
};
e.loadSplitIndex = function(t) {
var r = O.getItem(e.splitIndexKey(t));
return "number" == typeof r ? r : void 0;
};
e.saveIsSplit = function(t, r) {
O.saveItem(e.isSplitKey(t), r);
};
e.loadIsSplit = function(t) {
return !0 === O.getItem(e.isSplitKey(t));
};
e.ensureSplitIndices = function() {
var t, r, n, o;
try {
for (var a = l(M), i = a.next(); !i.done; i = a.next()) {
var s = i.value, u = s;
if (void 0 === e.loadSplitIndex(u)) {
var c = Q(u), d = L(s), f = void 0;
if (null === c) f = d.length; else {
f = 0;
try {
for (var m = (n = void 0, l(d)), p = m.next(); !p.done && !(R(p.value.ts) > c); p = m.next()) f++;
} catch (e) {
n = {
error: e
};
} finally {
try {
p && !p.done && (o = m.return) && o.call(m);
} finally {
if (n) throw n.error;
}
}
}
e.saveSplitIndex(u, f);
}
}
} catch (e) {
t = {
error: e
};
} finally {
try {
i && !i.done && (r = a.return) && r.call(a);
} finally {
if (t) throw t.error;
}
}
};
return e;
}();
r.ModelFeaturePersistInfo = Ie;
cc._RF.pop();
}, {
"../../interface/ModelFeatureSeriesSourceInterface": "ModelFeatureSeriesSourceInterface",
"../../utils/ModelFeaturePerfLog": "ModelFeaturePerfLog",
"../proto/ModelFeatureSeriesCodec": "ModelFeatureSeriesCodec",
"./series/IModelFeatureSeriesStorage": "IModelFeatureSeriesStorage",
"./series/ModelFeatureSeriesStorageFactory": "ModelFeatureSeriesStorageFactory",
"./serizlizer/ModelFeatureRawSerializer": "ModelFeatureRawSerializer"
} ],
ModelFeatureRawSerializer: [ function(e, t, r) {
"use strict";
cc._RF.push(t, "ac43cSsZ31GDrIDxkThcFXe", "ModelFeatureRawSerializer");
Object.defineProperty(r, "__esModule", {
value: !0
});
r.ModelFeatureRawSerializer = void 0;
var n = e("../../../../../../scripts/base/storage/Storage"), o = function() {
function e() {
this.version = 1;
}
e.prototype.pack = function(e) {
return e;
};
e.prototype.unpack = function(e) {
return e;
};
e.prototype.saveItem = function(e, t, r) {
var o = void 0 !== r ? this.pack(t, r) : t;
n.storage.setItem(e, o);
};
e.prototype.getItem = function(e, t, r) {
var o = n.storage.getItem(e, r);
return void 0 !== t && null != o ? this.unpack(o, t) : o;
};
e.prototype.removeItem = function(e) {
n.storage.remove(e);
};
return e;
}();
r.ModelFeatureRawSerializer = o;
cc._RF.pop();
}, {
"../../../../../../scripts/base/storage/Storage": void 0
} ],
ModelFeatureRoundsShardStore: [ function(e, t, r) {
"use strict";
cc._RF.push(t, "83bc4kqfJRCvawI7/R1qvOs", "ModelFeatureRoundsShardStore");
var n = this && this.__values || function(e) {
var t = "function" == typeof Symbol && Symbol.iterator, r = t && e[t], n = 0;
if (r) return r.call(e);
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
}, o = this && this.__read || function(e, t) {
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
}, a = this && this.__spread || function() {
for (var e = [], t = 0; t < arguments.length; t++) e = e.concat(o(arguments[t]));
return e;
};
Object.defineProperty(r, "__esModule", {
value: !0
});
r.ModelFeatureRoundsShardStore = void 0;
var i = e("./serizlizer/ModelFeatureRawSerializer"), s = "dataCollect_", l = [ "ts", "initWeight", "score", "spendTime", "maxCombo", "clearScreenCnt", "oneEliminateCnt", "twoEliminateCnt", "threeEliminateCnt", "fourEliminateCnt", "fiveEliminateCnt", "sixEliminateCnt", "comboCnt", "algoType", "algoName", "thinkTime", "actionTime", "putRateAvg", "holesCnt", "blocksCnt", "contiguousEdges", "contiguousRegions", "convexCorners", "concaveCorners", "weightAvg", "reviveCnt" ], u = new Set(l.filter(function(e) {
return "algoName" !== e;
})), c = new i.ModelFeatureRawSerializer();
function d(e, t, r) {
return m("roundsShard_" + e + "_" + t + "_" + r);
}
function f(e) {
return m("roundsShardOwner_" + e);
}
function m(e) {
return "" + s + e;
}
function p(e) {
var t, r, o = [];
try {
for (var a = n(l), i = a.next(); !i.done; i = a.next()) {
var s = i.value, u = e[s];
o.push(s + "_" + (null != u ? u : ""));
}
} catch (e) {
t = {
error: e
};
} finally {
try {
i && !i.done && (r = a.return) && r.call(a);
} finally {
if (t) throw t.error;
}
}
return o.join(",");
}
function h(e) {
var t, r, o = {}, a = e.split(",");
try {
for (var i = n(a), s = i.next(); !s.done; s = i.next()) {
var l = s.value;
if (l) {
var c = l.indexOf("_");
if (!(c <= 0)) {
var d = l.slice(0, c), f = l.slice(c + 1);
u.has(d) ? o[d] = "" === f ? void 0 : Number(f) : o[d] = f;
}
}
}
} catch (e) {
t = {
error: e
};
} finally {
try {
s && !s.done && (r = i.return) && r.call(i);
} finally {
if (t) throw t.error;
}
}
return o;
}
function g(e) {
var t, r, o = [];
try {
for (var a = n(e), i = a.next(); !i.done; i = a.next()) {
var s = i.value;
o.push(p(s));
}
} catch (e) {
t = {
error: e
};
} finally {
try {
i && !i.done && (r = a.return) && r.call(a);
} finally {
if (t) throw t.error;
}
}
return o.join("&");
}
function v(e) {
var t, r, o = [], a = e.split("&");
try {
for (var i = n(a), s = i.next(); !s.done; s = i.next()) {
var l = s.value;
l && o.push(h(l));
}
} catch (e) {
t = {
error: e
};
} finally {
try {
s && !s.done && (r = i.return) && r.call(i);
} finally {
if (t) throw t.error;
}
}
return o;
}
var y = function() {
function e() {}
e.appendEncodedShard = function(t, r, n, o) {
if (o) {
var a = d(t, r, n), i = c.getItem(a), s = "string" == typeof i ? i : "", l = s ? s + "&" + o : o;
c.saveItem(a, l);
e.refreshOwner(t, r, n);
}
};
e.encodeRound = function(e) {
return p(e);
};
e.saveRoundsShard = function(t, r, n, o) {
var a = d(t, r, n);
if (o && 0 !== o.length) {
c.saveItem(a, g(o));
e.refreshOwner(t, r, n);
} else c.removeItem(a);
};
e.loadAllRoundsShards = function(e, t) {
for (var r = [], n = 0; ;) {
var o = d(e, t, n), i = c.getItem(o);
if (null == i) break;
if ("string" == typeof i) try {
r.push.apply(r, a(v(i)));
} catch (e) {}
n++;
}
return r;
};
e.clearAllRoundsShards = function(e) {
var t = f(e), r = c.getItem(t);
if (r) {
for (var n = 0; n < r.shardCount; n++) c.removeItem(d(e, r.gameNum, n));
c.removeItem(t);
}
};
e.refreshOwner = function(e, t, r) {
var n = f(e), o = c.getItem(n), a = Math.max(r + 1, o && o.gameNum === t ? o.shardCount : 0);
c.saveItem(n, {
gameNum: t,
shardCount: a
});
};
e.ROUNDS_SHARD_CAPACITY = 12;
return e;
}();
r.ModelFeatureRoundsShardStore = y;
cc._RF.pop();
}, {
"./serizlizer/ModelFeatureRawSerializer": "ModelFeatureRawSerializer"
} ],
ModelFeatureRuntimeInterface: [ function(e, t, r) {
"use strict";
cc._RF.push(t, "df203bJUR1D1IEEWBp4blkC", "ModelFeatureRuntimeInterface");
Object.defineProperty(r, "__esModule", {
value: !0
});
cc._RF.pop();
}, {} ],
ModelFeatureSeriesCodec: [ function(e, t, r) {
"use strict";
cc._RF.push(t, "5d262mIRo9PbJMP4zeC/oa3", "ModelFeatureSeriesCodec");
Object.defineProperty(r, "__esModule", {
value: !0
});
r.decode = r.encode = void 0;
var n = e("../../interface/ModelFeatureSeriesSourceInterface"), o = e("./ModelFeatureData"), a = (o.default || o).ModelFeature;
function i(e) {
switch (e) {
case n.EModelFeatureSeriesSource.Game:
return a.GameInfoSetList;

case n.EModelFeatureSeriesSource.Ad:
return a.AdInfoList;

case n.EModelFeatureSeriesSource.Session:
return a.SessionInfoList;

default:
throw new Error("[ModelFeatureSeriesCodec] 未知的 series source: " + e);
}
}
r.encode = function(e, t) {
var r = i(e), n = r.create({
items: t
});
return r.encode(n).finish();
};
r.decode = function(e, t) {
var r = i(e), n = r.decode(t);
return r.toObject(n, {
defaults: !1
}).items;
};
cc._RF.pop();
}, {
"../../interface/ModelFeatureSeriesSourceInterface": "ModelFeatureSeriesSourceInterface",
"./ModelFeatureData": "ModelFeatureData"
} ],
ModelFeatureSeriesSourceInterface: [ function(e, t, r) {
"use strict";
cc._RF.push(t, "7bf10y1/XlOtoTcWng1WHn+", "ModelFeatureSeriesSourceInterface");
Object.defineProperty(r, "__esModule", {
value: !0
});
r.MODEL_FEATURE_SOURCE_PROPERTY = r.EModelFeatureSeriesSource = void 0;
var n;
(function(e) {
e.Game = "game";
e.Ad = "ad";
e.Session = "session";
})(n = r.EModelFeatureSeriesSource || (r.EModelFeatureSeriesSource = {}));
r.MODEL_FEATURE_SOURCE_PROPERTY = {
games: n.Game,
ads: n.Ad,
sessions: n.Session
};
cc._RF.pop();
}, {} ],
ModelFeatureSeriesStorageFactory: [ function(e, t, r) {
"use strict";
cc._RF.push(t, "c7625cv/ZZI75Z3lEU7txBF", "ModelFeatureSeriesStorageFactory");
Object.defineProperty(r, "__esModule", {
value: !0
});
r.createModelFeatureSeriesStorage = void 0;
var n = e("./ModelFeatureSeriesStorageWeb"), o = e("./ModelFeatureSeriesStorageNative");
r.createModelFeatureSeriesStorage = function() {
return cc.sys.isNative ? new o.ModelFeatureSeriesStorageNative() : new n.ModelFeatureSeriesStorageWeb();
};
cc._RF.pop();
}, {
"./ModelFeatureSeriesStorageNative": "ModelFeatureSeriesStorageNative",
"./ModelFeatureSeriesStorageWeb": "ModelFeatureSeriesStorageWeb"
} ],
ModelFeatureSeriesStorageNative: [ function(e, t, r) {
"use strict";
cc._RF.push(t, "8f1ecEstAJDerFG4zRaLlTy", "ModelFeatureSeriesStorageNative");
var n = this && this.__awaiter || function(e, t, r, n) {
return new (r || (r = Promise))(function(o, a) {
function i(e) {
try {
l(n.next(e));
} catch (e) {
a(e);
}
}
function s(e) {
try {
l(n.throw(e));
} catch (e) {
a(e);
}
}
function l(e) {
e.done ? o(e.value) : (t = e.value, t instanceof r ? t : new r(function(e) {
e(t);
})).then(i, s);
var t;
}
l((n = n.apply(e, t || [])).next());
});
}, o = this && this.__generator || function(e, t) {
var r, n, o, a, i = {
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
if (r) throw new TypeError("Generator is already executing.");
for (;i; ) try {
if (r = 1, n && (o = 2 & a[0] ? n.return : a[0] ? n.throw || ((o = n.return) && o.call(n), 
0) : n.next) && !(o = o.call(n, a[1])).done) return o;
(n = 0, o) && (a = [ 2 & a[0], o.value ]);
switch (a[0]) {
case 0:
case 1:
o = a;
break;

case 4:
i.label++;
return {
value: a[1],
done: !1
};

case 5:
i.label++;
n = a[1];
a = [ 0 ];
continue;

case 7:
a = i.ops.pop();
i.trys.pop();
continue;

default:
if (!(o = i.trys, o = o.length > 0 && o[o.length - 1]) && (6 === a[0] || 2 === a[0])) {
i = 0;
continue;
}
if (3 === a[0] && (!o || a[1] > o[0] && a[1] < o[3])) {
i.label = a[1];
break;
}
if (6 === a[0] && i.label < o[1]) {
i.label = o[1];
o = a;
break;
}
if (o && i.label < o[2]) {
i.label = o[2];
i.ops.push(a);
break;
}
o[2] && i.ops.pop();
i.trys.pop();
continue;
}
a = t.call(e, i);
} catch (e) {
a = [ 6, e ];
n = 0;
} finally {
r = o = 0;
}
if (5 & a[0]) throw a[1];
return {
value: a[0] ? a[1] : void 0,
done: !0
};
}
}, a = this && this.__values || function(e) {
var t = "function" == typeof Symbol && Symbol.iterator, r = t && e[t], n = 0;
if (r) return r.call(e);
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
Object.defineProperty(r, "__esModule", {
value: !0
});
r.ModelFeatureSeriesStorageNative = void 0;
var i = e("./IModelFeatureSeriesStorage"), s = new Set(i.MODEL_FEATURE_SERIES_SHARDS), l = function() {
function e() {
this._writablePath = null;
this._ensuredDirs = new Set();
}
e.prototype.init = function() {
return n(this, void 0, Promise, function() {
return o(this, function() {
if ("undefined" != typeof jsb && jsb.fileUtils) {
this._writablePath = jsb.fileUtils.getWritablePath() + "dataCollect";
jsb.fileUtils.isDirectoryExist(this._writablePath) || jsb.fileUtils.createDirectory(this._writablePath);
}
return [ 2 ];
});
});
};
e.prototype.sourceDir = function(e) {
if (!this._writablePath) throw new Error("[ModelFeatureSeriesStorageNative] init() 未调用或 writablePath 不可用");
return this._writablePath + "/" + e;
};
e.prototype.filePath = function(e, t) {
return this.sourceDir(e) + "/" + t + ".pb";
};
e.prototype.ensureSourceDir = function(e) {
if (!this._ensuredDirs.has(e)) {
var t = this.sourceDir(e);
jsb.fileUtils.isDirectoryExist(t) || jsb.fileUtils.createDirectory(t);
this._ensuredDirs.add(e);
}
};
e.prototype.saveShard = function(e, t, r) {
return n(this, void 0, Promise, function() {
var n;
return o(this, function() {
if (!cc.sys.isNative || "undefined" == typeof jsb || !jsb.fileUtils) return [ 2, Promise.resolve() ];
this.ensureSourceDir(e);
n = this.filePath(e, t);
if (!jsb.fileUtils.writeDataToFile(r, n)) throw new Error("[ModelFeatureSeriesStorageNative] writeDataToFile 失败 source=" + e + " shard=" + t + " path=" + n);
return [ 2 ];
});
});
};
e.prototype.loadShard = function(e, t) {
return n(this, void 0, Promise, function() {
var r, n;
return o(this, function() {
if (!cc.sys.isNative || "undefined" == typeof jsb || !jsb.fileUtils) return [ 2, Promise.resolve(null) ];
r = this.filePath(e, t);
if (!jsb.fileUtils.isFileExist(r)) return [ 2, Promise.resolve(null) ];
n = jsb.fileUtils.getDataFromFile(r);
return [ 2, Promise.resolve(new Uint8Array(n)) ];
});
});
};
e.prototype.listShards = function(e) {
return n(this, void 0, Promise, function() {
var t, r, n, l, u, c, d, f, m, p, h, g;
return o(this, function() {
if (!cc.sys.isNative || "undefined" == typeof jsb || !jsb.fileUtils) return [ 2, Promise.resolve([]) ];
t = this.sourceDir(e);
if (!jsb.fileUtils.isDirectoryExist(t)) return [ 2, Promise.resolve([]) ];
r = jsb.fileUtils.listFiles(t);
n = [];
try {
for (l = a(r), u = l.next(); !u.done; u = l.next()) {
c = u.value;
f = (d = c).lastIndexOf("/");
if ((m = f >= 0 ? d.slice(f + 1) : d).endsWith(".pb")) {
p = m.slice(0, -3);
s.has(p) && n.push(p);
}
}
} catch (e) {
h = {
error: e
};
} finally {
try {
u && !u.done && (g = l.return) && g.call(l);
} finally {
if (h) throw h.error;
}
}
n.sort(function(e, t) {
return i.MODEL_FEATURE_SERIES_SHARDS.indexOf(e) - i.MODEL_FEATURE_SERIES_SHARDS.indexOf(t);
});
return [ 2, Promise.resolve(n) ];
});
});
};
e.prototype.deleteShard = function(e, t) {
return n(this, void 0, Promise, function() {
var r;
return o(this, function() {
if (!cc.sys.isNative || "undefined" == typeof jsb || !jsb.fileUtils) return [ 2, Promise.resolve() ];
r = this.filePath(e, t);
jsb.fileUtils.isFileExist(r) && jsb.fileUtils.removeFile(r);
return [ 2, Promise.resolve() ];
});
});
};
e.prototype.saveShardSync = function(e, t, r) {
if (cc.sys.isNative && "undefined" != typeof jsb && jsb.fileUtils) {
this.ensureSourceDir(e);
var n = this.filePath(e, t);
if (!jsb.fileUtils.writeDataToFile(r, n)) throw new Error("[ModelFeatureSeriesStorageNative] writeDataToFile 失败 source=" + e + " shard=" + t + " path=" + n);
}
};
e.prototype.deleteShardSync = function(e, t) {
if (cc.sys.isNative && "undefined" != typeof jsb && jsb.fileUtils) {
var r = this.filePath(e, t);
jsb.fileUtils.isFileExist(r) && jsb.fileUtils.removeFile(r);
}
};
return e;
}();
r.ModelFeatureSeriesStorageNative = l;
cc._RF.pop();
}, {
"./IModelFeatureSeriesStorage": "IModelFeatureSeriesStorage"
} ],
ModelFeatureSeriesStorageWeb: [ function(e, t, r) {
"use strict";
cc._RF.push(t, "2cab8FmKeZJWLmjDRIH5Y0W", "ModelFeatureSeriesStorageWeb");
var n = this && this.__awaiter || function(e, t, r, n) {
return new (r || (r = Promise))(function(o, a) {
function i(e) {
try {
l(n.next(e));
} catch (e) {
a(e);
}
}
function s(e) {
try {
l(n.throw(e));
} catch (e) {
a(e);
}
}
function l(e) {
e.done ? o(e.value) : (t = e.value, t instanceof r ? t : new r(function(e) {
e(t);
})).then(i, s);
var t;
}
l((n = n.apply(e, t || [])).next());
});
}, o = this && this.__generator || function(e, t) {
var r, n, o, a, i = {
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
if (r) throw new TypeError("Generator is already executing.");
for (;i; ) try {
if (r = 1, n && (o = 2 & a[0] ? n.return : a[0] ? n.throw || ((o = n.return) && o.call(n), 
0) : n.next) && !(o = o.call(n, a[1])).done) return o;
(n = 0, o) && (a = [ 2 & a[0], o.value ]);
switch (a[0]) {
case 0:
case 1:
o = a;
break;

case 4:
i.label++;
return {
value: a[1],
done: !1
};

case 5:
i.label++;
n = a[1];
a = [ 0 ];
continue;

case 7:
a = i.ops.pop();
i.trys.pop();
continue;

default:
if (!(o = i.trys, o = o.length > 0 && o[o.length - 1]) && (6 === a[0] || 2 === a[0])) {
i = 0;
continue;
}
if (3 === a[0] && (!o || a[1] > o[0] && a[1] < o[3])) {
i.label = a[1];
break;
}
if (6 === a[0] && i.label < o[1]) {
i.label = o[1];
o = a;
break;
}
if (o && i.label < o[2]) {
i.label = o[2];
i.ops.push(a);
break;
}
o[2] && i.ops.pop();
i.trys.pop();
continue;
}
a = t.call(e, i);
} catch (e) {
a = [ 6, e ];
n = 0;
} finally {
r = o = 0;
}
if (5 & a[0]) throw a[1];
return {
value: a[0] ? a[1] : void 0,
done: !0
};
}
}, a = this && this.__values || function(e) {
var t = "function" == typeof Symbol && Symbol.iterator, r = t && e[t], n = 0;
if (r) return r.call(e);
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
Object.defineProperty(r, "__esModule", {
value: !0
});
r.ModelFeatureSeriesStorageWeb = void 0;
var i = e("./IModelFeatureSeriesStorage"), s = new Set(i.MODEL_FEATURE_SERIES_SHARDS);
function l(e, t) {
return e + "_" + t;
}
var u = function() {
function e() {
this.db = null;
}
e.prototype.init = function() {
return n(this, void 0, Promise, function() {
var e;
return o(this, function(t) {
switch (t.label) {
case 0:
if (this.db) return [ 2 ];
e = this;
return [ 4, this.openDB() ];

case 1:
e.db = t.sent();
return [ 2 ];
}
});
});
};
e.prototype.openDB = function() {
return new Promise(function(e, t) {
var r = indexedDB.open("dataCollectSeries", 2);
r.onupgradeneeded = function() {
var e = r.result;
e.objectStoreNames.contains("shards") || e.createObjectStore("shards");
};
r.onsuccess = function() {
return e(r.result);
};
r.onerror = function() {
return t(r.error);
};
});
};
e.prototype.saveShard = function(e, t, r) {
var a;
return n(this, void 0, Promise, function() {
var n, i;
return o(this, function(o) {
switch (o.label) {
case 0:
if (null === (a = this.db) || void 0 === a) return [ 3, 1 ];
i = a;
return [ 3, 3 ];

case 1:
return [ 4, this.openDB() ];

case 2:
i = o.sent();
o.label = 3;

case 3:
n = i;
return [ 2, new Promise(function(o, a) {
var i = n.transaction("shards", "readwrite");
i.objectStore("shards").put(r, l(e, t));
i.oncomplete = function() {
return o();
};
i.onerror = function() {
return a(i.error);
};
}) ];
}
});
});
};
e.prototype.loadShard = function(e, t) {
var r;
return n(this, void 0, Promise, function() {
var n, a;
return o(this, function(o) {
switch (o.label) {
case 0:
if (null === (r = this.db) || void 0 === r) return [ 3, 1 ];
a = r;
return [ 3, 3 ];

case 1:
return [ 4, this.openDB() ];

case 2:
a = o.sent();
o.label = 3;

case 3:
n = a;
return [ 2, new Promise(function(r, o) {
var a = n.transaction("shards", "readonly").objectStore("shards").get(l(e, t));
a.onsuccess = function() {
var e = a.result;
void 0 === e ? r(null) : e instanceof Uint8Array ? r(e) : e instanceof ArrayBuffer ? r(new Uint8Array(e)) : r(null);
};
a.onerror = function() {
return o(a.error);
};
}) ];
}
});
});
};
e.prototype.listShards = function(e) {
var t;
return n(this, void 0, Promise, function() {
var r, n, l, u;
return o(this, function(o) {
switch (o.label) {
case 0:
if (null === (t = this.db) || void 0 === t) return [ 3, 1 ];
n = t;
return [ 3, 3 ];

case 1:
return [ 4, this.openDB() ];

case 2:
n = o.sent();
o.label = 3;

case 3:
r = n;
l = e + "_";
u = IDBKeyRange.bound(l, l + "￿");
return [ 2, new Promise(function(e, t) {
var n = r.transaction("shards", "readonly").objectStore("shards").getAllKeys(u);
n.onsuccess = function() {
var t, r, o = [];
try {
for (var u = a(n.result), c = u.next(); !c.done; c = u.next()) {
var d = c.value.slice(l.length);
s.has(d) && o.push(d);
}
} catch (e) {
t = {
error: e
};
} finally {
try {
c && !c.done && (r = u.return) && r.call(u);
} finally {
if (t) throw t.error;
}
}
o.sort(function(e, t) {
return i.MODEL_FEATURE_SERIES_SHARDS.indexOf(e) - i.MODEL_FEATURE_SERIES_SHARDS.indexOf(t);
});
e(o);
};
n.onerror = function() {
return t(n.error);
};
}) ];
}
});
});
};
e.prototype.deleteShard = function(e, t) {
var r;
return n(this, void 0, Promise, function() {
var n, a;
return o(this, function(o) {
switch (o.label) {
case 0:
if (null === (r = this.db) || void 0 === r) return [ 3, 1 ];
a = r;
return [ 3, 3 ];

case 1:
return [ 4, this.openDB() ];

case 2:
a = o.sent();
o.label = 3;

case 3:
n = a;
return [ 2, new Promise(function(r, o) {
var a = n.transaction("shards", "readwrite").objectStore("shards").delete(l(e, t));
a.onsuccess = function() {
return r();
};
a.onerror = function() {
return o(a.error);
};
}) ];
}
});
});
};
e.prototype.saveShardsBatch = function(e, t) {
var r;
return n(this, void 0, Promise, function() {
var n, i;
return o(this, function(o) {
switch (o.label) {
case 0:
if (null === (r = this.db) || void 0 === r) return [ 3, 1 ];
i = r;
return [ 3, 3 ];

case 1:
return [ 4, this.openDB() ];

case 2:
i = o.sent();
o.label = 3;

case 3:
n = i;
return [ 2, new Promise(function(r, o) {
var i, s, u = n.transaction("shards", "readwrite"), c = u.objectStore("shards");
try {
for (var d = a(t), f = d.next(); !f.done; f = d.next()) {
var m = f.value, p = m.shard, h = m.bytes, g = l(e, p);
h ? c.put(h, g) : c.delete(g);
}
} catch (e) {
i = {
error: e
};
} finally {
try {
f && !f.done && (s = d.return) && s.call(d);
} finally {
if (i) throw i.error;
}
}
u.oncomplete = function() {
return r();
};
u.onerror = function() {
return o(u.error);
};
}) ];
}
});
});
};
return e;
}();
r.ModelFeatureSeriesStorageWeb = u;
cc._RF.pop();
}, {
"./IModelFeatureSeriesStorage": "IModelFeatureSeriesStorage"
} ],
ModelFeatureSetRegistry: [ function(e, t, r) {
"use strict";
cc._RF.push(t, "bab5cQNITREsb2Cx7NJDmD3", "ModelFeatureSetRegistry");
var n = this && this.__read || function(e, t) {
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
}, o = this && this.__spread || function() {
for (var e = [], t = 0; t < arguments.length; t++) e = e.concat(n(arguments[t]));
return e;
}, a = this && this.__values || function(e) {
var t = "function" == typeof Symbol && Symbol.iterator, r = t && e[t], n = 0;
if (r) return r.call(e);
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
Object.defineProperty(r, "__esModule", {
value: !0
});
r.ModelFeatureSetRegistry = void 0;
var i = e("./ModelFeatureCatalogRegistry"), s = e("./ModelFeatureBuildContextBase"), l = e("./ModelFeatureCutoffResolver"), u = e("../data/ModelFeatureDataCenter"), c = e("../utils/ModelFeaturePerfLog"), d = function() {
function e() {}
e.register = function(e) {
if (this.registeredConfigs.has(e)) c.ModelFeaturePerfLog.warn("SetRegistry", "特征集重复 register，字段数 " + Object.keys(e.mappings).length); else {
this.registeredConfigs.add(e);
c.ModelFeaturePerfLog.log("SetRegistry", "register 特征集，字段数 " + Object.keys(e.mappings).length);
}
};
e.allMappings = function() {
return o(this.registeredConfigs).map(function(e) {
return e.mappings;
});
};
e.hasAnyRegister = function() {
return this.registeredConfigs.size > 0;
};
e.build = function(e) {
var t, r, o, d, f, m, p, h, g, v;
c.ModelFeaturePerfLog.now();
if (!this.registeredConfigs.has(e)) {
c.ModelFeaturePerfLog.warn("SetRegistry", "build: 未注册的特征集，请先 register");
return null;
}
var y = e.mappings, b = e.mode, _ = {}, S = Date.now(), I = Object.entries(y), w = c.ModelFeaturePerfLog.now(), M = I.map(function(e) {
var t, r, o, s, l = n(e, 2), u = l[0], c = l[1], d = i.ModelFeatureCatalogRegistry.dependencyOf(c.prop), f = {};
try {
for (var m = a(Object.keys(d)), p = m.next(); !p.done; p = m.next()) {
var h = p.value;
f[h] = null !== (o = d[h]) && void 0 !== o ? o : [];
}
} catch (e) {
t = {
error: e
};
} finally {
try {
p && !p.done && (r = m.return) && r.call(m);
} finally {
if (t) throw t.error;
}
}
return {
propertyKey: u,
isUnaligned: null !== (s = c.unaligned) && void 0 !== s && s,
fields: f
};
});
try {
for (var C = a(M), G = C.next(); !G.done; G = C.next()) {
var R = G.value;
try {
for (var x = (o = void 0, a(Object.keys(R.fields))), O = x.next(); !O.done; O = x.next()) {
var F = O.value;
try {
for (var T = (f = void 0, a(R.fields[F])), N = T.next(); !N.done; N = T.next()) {
var E = N.value, j = u.modelFeatureDataCenter.sourceState[F].fields[E];
(null == j ? void 0 : j.isActive) || c.ModelFeaturePerfLog.warn("SetRegistry", R.propertyKey + " 用到字段 " + F + "." + E + "，但该字段未被标记为激活采集（isActive=" + (null !== (g = null == j ? void 0 : j.isActive) && void 0 !== g ? g : "undefined") + "），裁剪点会按 0 计算");
}
} catch (e) {
f = {
error: e
};
} finally {
try {
N && !N.done && (m = T.return) && m.call(T);
} finally {
if (f) throw f.error;
}
}
}
} catch (e) {
o = {
error: e
};
} finally {
try {
O && !O.done && (d = x.return) && d.call(x);
} finally {
if (o) throw o.error;
}
}
}
} catch (e) {
t = {
error: e
};
} finally {
try {
G && !G.done && (r = C.return) && r.call(C);
} finally {
if (t) throw t.error;
}
}
var A = l.computeCutoffs(b, M, function(e, t) {
var r, n;
return null !== (n = null === (r = u.modelFeatureDataCenter.sourceState[e].fields[t]) || void 0 === r ? void 0 : r.activatedAt) && void 0 !== n ? n : 0;
}), k = (c.ModelFeaturePerfLog.ms(w), c.ModelFeaturePerfLog.now()), P = new Map();
try {
for (var L = a(I), B = L.next(); !B.done; B = L.next()) {
var D = n(B.value, 2), W = D[0], H = D[1], U = A.get(W), V = this.cutoffKey(U);
P.has(V) || P.set(V, new s.ModelFeatureBuildContext(U, S));
var z = P.get(V), J = void 0;
try {
J = i.ModelFeatureCatalogRegistry.compute(H.prop, null !== (v = H.args) && void 0 !== v ? v : [], z);
} catch (e) {
c.ModelFeaturePerfLog.error("SetRegistry", "特征 " + String(H.prop) + " 计算异常，走 fallback", e);
}
var q = this.applyFallback(J, H.fallback), Z = this.applyReflect(q, H.reflect);
_[W] = Z;
}
} catch (e) {
p = {
error: e
};
} finally {
try {
B && !B.done && (h = L.return) && h.call(L);
} finally {
if (p) throw p.error;
}
}
c.ModelFeaturePerfLog.ms(k);
return _;
};
e.applyFallback = function(e, t) {
return void 0 === t ? e : null == e || Number.isNaN(e) ? t : e;
};
e.applyReflect = function(e, t) {
return void 0 === t ? e : "function" == typeof t ? t(e) : ("string" == typeof e || "number" == typeof e) && "object" == typeof t && null !== t && e in t ? t[e] : e;
};
e.cutoffKey = function(e) {
var t, r, o = [];
try {
for (var i = a(e), s = i.next(); !s.done; s = i.next()) {
var l = n(s.value, 2), u = l[0], c = l[1];
o.push(u + ":" + c);
}
} catch (e) {
t = {
error: e
};
} finally {
try {
s && !s.done && (r = i.return) && r.call(i);
} finally {
if (t) throw t.error;
}
}
o.sort();
return o.join("|");
};
e.registeredConfigs = new Set();
return e;
}();
r.ModelFeatureSetRegistry = d;
cc._RF.pop();
}, {
"../data/ModelFeatureDataCenter": "ModelFeatureDataCenter",
"../utils/ModelFeaturePerfLog": "ModelFeaturePerfLog",
"./ModelFeatureBuildContextBase": "ModelFeatureBuildContextBase",
"./ModelFeatureCatalogRegistry": "ModelFeatureCatalogRegistry",
"./ModelFeatureCutoffResolver": "ModelFeatureCutoffResolver"
} ],
ModelFeatureSourceAccessor: [ function(e, t, r) {
"use strict";
cc._RF.push(t, "68c4eDFSd1KMo1BLq6M/wdB", "ModelFeatureSourceAccessor");
Object.defineProperty(r, "__esModule", {
value: !0
});
r.ModelFeatureSourceAccessor = void 0;
var n = e("./ModelFeatureView"), o = e("./ModelFeatureViewExport"), a = function() {
function e(e, t, r, n, o) {
this.rawData = e;
this.cutoff = t;
this.now = r;
this.splitInfo = n;
this.source = o;
}
Object.defineProperty(e.prototype, "Ctor", {
get: function() {
return o.SOURCE_VIEW_MAP[this.source] || n.ModelFeatureView;
},
enumerable: !1,
configurable: !0
});
e.prototype.front = function() {
if (!this._front) {
var e = this.splitInfo.isSplit ? this.rawData.slice(0, this.splitInfo.firstEnd) : this.rawData;
this._front = new this.Ctor(e, 0, this.now, this.splitInfo);
}
return this._front;
};
e.prototype.back = function() {
if (!this._back) {
var e = this.splitInfo.isSplit ? this.rawData.slice(this.splitInfo.secondStart) : this.rawData;
this._back = new this.Ctor(e, this.cutoff, this.now, this.splitInfo);
}
return this._back;
};
return e;
}();
r.ModelFeatureSourceAccessor = a;
cc._RF.pop();
}, {
"./ModelFeatureView": "ModelFeatureView",
"./ModelFeatureViewExport": "ModelFeatureViewExport"
} ],
ModelFeatureViewExport: [ function(e, t, r) {
"use strict";
cc._RF.push(t, "fbc45dMPCtEf6igLF1bH9nN", "ModelFeatureViewExport");
var n;
Object.defineProperty(r, "__esModule", {
value: !0
});
r.SOURCE_VIEW_MAP = void 0;
var o = e("./ModelFeatureGameView"), a = e("./ModelFeatureAdView"), i = e("../interface/ModelFeatureSeriesSourceInterface");
r.SOURCE_VIEW_MAP = ((n = {})[i.EModelFeatureSeriesSource.Game] = o.ModelFeatureGameView, 
n[i.EModelFeatureSeriesSource.Ad] = a.ModelFeatureAdView, n);
cc._RF.pop();
}, {
"../interface/ModelFeatureSeriesSourceInterface": "ModelFeatureSeriesSourceInterface",
"./ModelFeatureAdView": "ModelFeatureAdView",
"./ModelFeatureGameView": "ModelFeatureGameView"
} ],
ModelFeatureView: [ function(e, t, r) {
"use strict";
cc._RF.push(t, "86183AWvv5DzLRT0HY1S3Nb", "ModelFeatureView");
var n = this && this.__decorate || function(e, t, r, n) {
var o, a = arguments.length, i = a < 3 ? t : null === n ? n = Object.getOwnPropertyDescriptor(t, r) : n;
if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) i = Reflect.decorate(e, t, r, n); else for (var s = e.length - 1; s >= 0; s--) (o = e[s]) && (i = (a < 3 ? o(i) : a > 3 ? o(t, r, i) : o(t, r)) || i);
return a > 3 && i && Object.defineProperty(t, r, i), i;
}, o = this && this.__read || function(e, t) {
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
}, a = this && this.__spread || function() {
for (var e = [], t = 0; t < arguments.length; t++) e = e.concat(o(arguments[t]));
return e;
};
Object.defineProperty(r, "__esModule", {
value: !0
});
r.ModelFeatureView = void 0;
var i = e("./decorators/cached"), s = function() {
function e(e, t, r, n, o) {
var a, i;
this.rawData = e;
this.cutoff = t;
this.now = r;
this.splitInfo = n;
this._records = null;
this._scopePrefix = null !== (a = null == o ? void 0 : o.scopePrefix) && void 0 !== a ? a : "";
this._cache = null !== (i = null == o ? void 0 : o.sharedCache) && void 0 !== i ? i : new Map();
}
Object.defineProperty(e.prototype, "records", {
get: function() {
var e = this;
null === this._records && (this.cutoff > 0 ? this._records = this.rawData.filter(function(t) {
return t.ts >= e.cutoff;
}) : this._records = a(this.rawData));
return this._records;
},
enumerable: !1,
configurable: !0
});
e.prototype.$cached = function(e, t) {
var r = this._scopePrefix ? this._scopePrefix + "|" + e : e, n = this._cache.get(r);
if (void 0 !== n) return n;
this.__currentCacheKey = e;
var o = t();
this.__currentCacheKey = void 0;
o !== this && this._cache.set(r, o);
return o;
};
e.prototype.chain = function(e) {
var t = this.__currentCacheKey;
if (void 0 === t) throw new Error("[ModelFeatureView] chain() must be called inside @cached context");
var r = e(), n = this._scopePrefix ? this._scopePrefix + "|" + t : t;
return new (0, this.constructor)(r, 0, this.now, this.splitInfo, {
scopePrefix: n,
sharedCache: this._cache
});
};
e.prototype.list = function() {
return a(this.records);
};
e.prototype.tail = function(e) {
var t = this;
return this.chain(function() {
return e <= 0 ? [] : t.records.slice(-e);
});
};
e.prototype.head = function(e) {
var t = this;
return this.chain(function() {
return e <= 0 ? [] : t.records.slice(0, e);
});
};
e.prototype.slice = function(e, t) {
var r = this;
return this.chain(function() {
return r.records.slice(e, t);
});
};
e.prototype.timeRange = function(e, t) {
var r, n, o = this;
if (null == e) return this;
if ("object" == typeof e) {
r = e.start;
n = e.end;
} else {
r = e;
n = t;
}
void 0 === n && (n = this.now);
return this.chain(function() {
return o.records.filter(function(e) {
return e.ts >= r && e.ts < n;
});
});
};
e.prototype.at = function(e) {
return this.records[e];
};
e.prototype.first = function() {
return this.records[0];
};
e.prototype.last = function() {
var e = this.records;
return e[e.length - 1];
};
n([ i.cached ], e.prototype, "tail", null);
n([ i.cached ], e.prototype, "head", null);
n([ i.cached ], e.prototype, "slice", null);
n([ i.cached ], e.prototype, "timeRange", null);
return e;
}();
r.ModelFeatureView = s;
cc._RF.pop();
}, {
"./decorators/cached": "cached"
} ],
ModelFeature_Module: [ function(e, t, r) {
"use strict";
cc._RF.push(t, "6161brJN21Lr66TikhmGXay", "ModelFeature_Module");
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
});
Object.defineProperty(r, "__esModule", {
value: !0
});
r.ModelFeature_Module = void 0;
var a = e("../../../scripts/falcon/Module"), i = e("./proxys/ModelFeature_Proxy"), s = function(e) {
o(t, e);
function t() {
return null !== e && e.apply(this, arguments) || this;
}
t.prototype.registerProxys = function() {
return [ i.ModelFeature_Proxy ];
};
return t;
}(a.Module);
r.ModelFeature_Module = s;
cc._RF.pop();
}, {
"../../../scripts/falcon/Module": void 0,
"./proxys/ModelFeature_Proxy": "ModelFeature_Proxy"
} ],
ModelFeature_Proxy: [ function(e, t, r) {
"use strict";
cc._RF.push(t, "51b67qJT/pFv5TfiGxB3tbY", "ModelFeature_Proxy");
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
}), a = this && this.__awaiter || function(e, t, r, n) {
return new (r || (r = Promise))(function(o, a) {
function i(e) {
try {
l(n.next(e));
} catch (e) {
a(e);
}
}
function s(e) {
try {
l(n.throw(e));
} catch (e) {
a(e);
}
}
function l(e) {
e.done ? o(e.value) : (t = e.value, t instanceof r ? t : new r(function(e) {
e(t);
})).then(i, s);
var t;
}
l((n = n.apply(e, t || [])).next());
});
}, i = this && this.__generator || function(e, t) {
var r, n, o, a, i = {
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
if (r) throw new TypeError("Generator is already executing.");
for (;i; ) try {
if (r = 1, n && (o = 2 & a[0] ? n.return : a[0] ? n.throw || ((o = n.return) && o.call(n), 
0) : n.next) && !(o = o.call(n, a[1])).done) return o;
(n = 0, o) && (a = [ 2 & a[0], o.value ]);
switch (a[0]) {
case 0:
case 1:
o = a;
break;

case 4:
i.label++;
return {
value: a[1],
done: !1
};

case 5:
i.label++;
n = a[1];
a = [ 0 ];
continue;

case 7:
a = i.ops.pop();
i.trys.pop();
continue;

default:
if (!(o = i.trys, o = o.length > 0 && o[o.length - 1]) && (6 === a[0] || 2 === a[0])) {
i = 0;
continue;
}
if (3 === a[0] && (!o || a[1] > o[0] && a[1] < o[3])) {
i.label = a[1];
break;
}
if (6 === a[0] && i.label < o[1]) {
i.label = o[1];
o = a;
break;
}
if (o && i.label < o[2]) {
i.label = o[2];
i.ops.push(a);
break;
}
o[2] && i.ops.pop();
i.trys.pop();
continue;
}
a = t.call(e, i);
} catch (e) {
a = [ 6, e ];
n = 0;
} finally {
r = o = 0;
}
if (5 & a[0]) throw a[1];
return {
value: a[0] ? a[1] : void 0,
done: !0
};
}
};
Object.defineProperty(r, "__esModule", {
value: !0
});
r.ModelFeature_Proxy = void 0;
var s = e("../../../../scripts/falcon/Proxy"), l = e("../../../../scripts/modules/blocksProducer/events/E_BlocksProducer_GenerateEnd"), u = e("../../../../scripts/modules/dot/events/E_Dot_Start"), c = e("../../../../scripts/modules/game/events/E_Game_Replay"), d = e("../../../../scripts/modules/game/events/E_Game_Start"), f = e("../../../../scripts/modules/game/events/E_Game_EventHide"), m = e("../../../../scripts/modules/game/events/E_Game_EventShow"), p = e("../../../../scripts/modules/gameOver/events/E_GameOver_GameEndDataClearPre"), h = e("../../../../scripts/modules/native/NativeReceivedNative"), g = e("../data/collector/ModelFeatureCollector"), v = e("../data/storage/ModelFeaturePersistInfo"), y = e("../../../../scripts/modules/dataCollect/events/E_DataCollect_ReadyComplete"), b = e("../wiring/ModelFeatureActivationAnalyzer"), _ = e("../data/ModelFeatureDataCenter"), S = e("../gm/ModelFeatureGmFakeData"), I = e("../gm/ModelFeatureGmDataSize"), w = e("../gm/ModelFeatureGmPrintRecords"), M = e("../../../../scripts/modules/preload/vo/PreloadInfo"), C = e("../utils/ModelFeaturePerfLog"), G = e("../../../../scripts/modules/prdData/events/E_PrdData_ADSuccess"), R = e("../interface/ModelFeatureSeriesSourceInterface"), x = e("../wiring/ModelFeatureSetRegistry"), O = function(e) {
o(t, e);
function t() {
return null !== e && e.apply(this, arguments) || this;
}
t.prototype.onInit = function() {
h.onNativeReponse("onAdShowSuccess", function(e) {
e && g.modelFeatureCollector.onAdShowSuccess(e);
});
h.onNativeReponse("onAdLoadSuccess", function(e) {
e && g.modelFeatureCollector.onAdLoadSuccess(e);
});
h.onNativeReponse("adCallback", function(e) {
g.modelFeatureCollector.onGPAdStatus(e);
});
h.onNativeReponse("adCallback2", function(e) {
g.modelFeatureCollector.onGPAdStatus(e);
});
S.registerModelFeatureFakeDataGm();
I.registerModelFeatureDataSizeGm();
w.registerModelFeaturePrintRecordsGm();
};
t.prototype.registerEvents = function() {
return [ u.E_Dot_Start, d.E_Game_Start, f.E_Game_EventHide, m.E_Game_EventShow, G.E_PrdData_ADSuccess, l.E_BlocksProducer_GenerateEnd, c.E_Game_Replay, p.E_GameOver_GameEndDataClearPre, y.E_DataCollect_ReadyComplete ];
};
t.prototype.receivedEvents = function(e) {
switch (e.getClass()) {
case u.E_Dot_Start:
g.modelFeatureCollector.onDotEvent(e);
break;

case d.E_Game_Start:
g.modelFeatureCollector.onGameStart(e);
break;

case G.E_PrdData_ADSuccess:
g.modelFeatureCollector.onAdShow(e);
break;

case l.E_BlocksProducer_GenerateEnd:
g.modelFeatureCollector.onNewBlockGenerateEnd(e);
break;

case c.E_Game_Replay:
g.modelFeatureCollector.onGameEndFromStats(!0);
break;

case f.E_Game_EventHide:
this.onEventHide();
break;

case m.E_Game_EventShow:
g.modelFeatureCollector.resumeSessionTimer();
break;

case p.E_GameOver_GameEndDataClearPre:
g.modelFeatureCollector.onGameEndFromStats(!1);
break;

case y.E_DataCollect_ReadyComplete:
this.onReadyComplete();
}
};
t.prototype.onEventHide = function() {
if (g.modelFeatureCollector.isSeriesActive(R.EModelFeatureSeriesSource.Session)) {
_.modelFeatureDataCenter.isReady() ? v.ModelFeaturePersistInfo.flushAllDirtySources() : C.ModelFeaturePerfLog.warn("Proxy", "hydrate 未完成，跳过切后台同步落盘，等待 hydrate 完成后走异步落盘");
g.modelFeatureCollector.pauseSessionTimer();
}
};
t.prototype.onReadyComplete = function() {
if (x.ModelFeatureSetRegistry.hasAnyRegister()) {
var e = C.ModelFeaturePerfLog.now();
_.modelFeatureDataCenter.driver();
b.ModelFeatureActivationAnalyzer.analyze();
_.modelFeatureDataCenter.recordSessionInfo();
C.ModelFeaturePerfLog.log("Proxy", "onReadyComplete analyze+driver 耗时 " + C.ModelFeaturePerfLog.ms(e) + "ms");
this.scheduleHydratePrewarm();
}
};
t.prototype.scheduleHydratePrewarm = function() {
return a(this, void 0, Promise, function() {
var e, t, r, n, o, a;
return i(this, function(i) {
switch (i.label) {
case 0:
e = C.ModelFeaturePerfLog.now();
i.label = 1;

case 1:
i.trys.push([ 1, 6, , 7 ]);
t = 0;
if (M.preloadInfo.preloadBarrier.isOpen) return [ 3, 3 ];
r = C.ModelFeaturePerfLog.now();
return [ 4, M.preloadInfo.preloadBarrier.wait() ];

case 2:
i.sent();
t = C.ModelFeaturePerfLog.ms(r);
i.label = 3;

case 3:
return [ 4, new Promise(function(e) {
return setTimeout(e, 0);
}) ];

case 4:
i.sent();
n = C.ModelFeaturePerfLog.now();
return [ 4, _.modelFeatureDataCenter.ensureHydrated() ];

case 5:
i.sent();
o = C.ModelFeaturePerfLog.ms(n);
C.ModelFeaturePerfLog.log("Proxy", "hydrate 预热完成", {
barrierMs: t,
hydrateMs: o,
totalMs: C.ModelFeaturePerfLog.ms(e)
});
return [ 3, 7 ];

case 6:
a = i.sent();
C.ModelFeaturePerfLog.error("Proxy", "hydrate 预热失败", a);
return [ 3, 7 ];

case 7:
return [ 2 ];
}
});
});
};
return t;
}(s.Proxy);
r.ModelFeature_Proxy = O;
cc._RF.pop();
}, {
"../../../../scripts/falcon/Proxy": void 0,
"../../../../scripts/modules/blocksProducer/events/E_BlocksProducer_GenerateEnd": void 0,
"../../../../scripts/modules/dataCollect/events/E_DataCollect_ReadyComplete": void 0,
"../../../../scripts/modules/dot/events/E_Dot_Start": void 0,
"../../../../scripts/modules/game/events/E_Game_EventHide": void 0,
"../../../../scripts/modules/game/events/E_Game_EventShow": void 0,
"../../../../scripts/modules/game/events/E_Game_Replay": void 0,
"../../../../scripts/modules/game/events/E_Game_Start": void 0,
"../../../../scripts/modules/gameOver/events/E_GameOver_GameEndDataClearPre": void 0,
"../../../../scripts/modules/native/NativeReceivedNative": void 0,
"../../../../scripts/modules/prdData/events/E_PrdData_ADSuccess": void 0,
"../../../../scripts/modules/preload/vo/PreloadInfo": void 0,
"../data/ModelFeatureDataCenter": "ModelFeatureDataCenter",
"../data/collector/ModelFeatureCollector": "ModelFeatureCollector",
"../data/storage/ModelFeaturePersistInfo": "ModelFeaturePersistInfo",
"../gm/ModelFeatureGmDataSize": "ModelFeatureGmDataSize",
"../gm/ModelFeatureGmFakeData": "ModelFeatureGmFakeData",
"../gm/ModelFeatureGmPrintRecords": "ModelFeatureGmPrintRecords",
"../interface/ModelFeatureSeriesSourceInterface": "ModelFeatureSeriesSourceInterface",
"../utils/ModelFeaturePerfLog": "ModelFeaturePerfLog",
"../wiring/ModelFeatureActivationAnalyzer": "ModelFeatureActivationAnalyzer",
"../wiring/ModelFeatureSetRegistry": "ModelFeatureSetRegistry"
} ],
cached: [ function(e, t, r) {
"use strict";
cc._RF.push(t, "9de53/jae9K65G4+Bns4Kew", "cached");
Object.defineProperty(r, "__esModule", {
value: !0
});
r.cached = void 0;
r.cached = function(e, t, r) {
var n = r.value;
r.value = function() {
for (var e = this, r = [], o = 0; o < arguments.length; o++) r[o] = arguments[o];
var a = function(e) {
return void 0 === e ? "undefined" : null === e ? "null" : "number" == typeof e && Number.isNaN(e) ? "number:NaN" : typeof e + ":" + JSON.stringify(e);
}, i = t + ":[" + r.map(a).join(",") + "]";
return this.$cached(i, function() {
return n.apply(e, r);
});
};
};
cc._RF.pop();
}, {} ],
forCatalog: [ function(e, t, r) {
"use strict";
cc._RF.push(t, "58beeDy+vpPiJs9uRfHq9fK", "forCatalog");
var n = this && this.__read || function(e, t) {
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
}, o = this && this.__spread || function() {
for (var e = [], t = 0; t < arguments.length; t++) e = e.concat(n(arguments[t]));
return e;
}, a = this && this.__values || function(e) {
var t = "function" == typeof Symbol && Symbol.iterator, r = t && e[t], n = 0;
if (r) return r.call(e);
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
Object.defineProperty(r, "__esModule", {
value: !0
});
r.modelFeatureCatalog = void 0;
var i = e("../ModelFeatureCatalogRegistry"), s = e("../../utils/ModelFeaturePerfLog");
r.modelFeatureCatalog = function(e) {
var t, r, n = new e(), l = e.prototype, u = Object.getOwnPropertyNames(l).filter(function(e) {
return "constructor" !== e && "function" == typeof l[e];
}), c = function(e) {
i.ModelFeatureCatalogRegistry.register(e, function(t) {
for (var r, a = [], i = 1; i < arguments.length; i++) a[i - 1] = arguments[i];
n.setContext(t);
return (r = n)[e].apply(r, o(a));
});
};
try {
for (var d = a(u), f = d.next(); !f.done; f = d.next()) c(f.value);
} catch (e) {
t = {
error: e
};
} finally {
try {
f && !f.done && (r = d.return) && r.call(d);
} finally {
if (t) throw t.error;
}
}
s.ModelFeaturePerfLog.log("Catalog", "@modelFeatureCatalog 自动注册特征: " + u.join(", "));
return e;
};
cc._RF.pop();
}, {
"../../utils/ModelFeaturePerfLog": "ModelFeaturePerfLog",
"../ModelFeatureCatalogRegistry": "ModelFeatureCatalogRegistry"
} ],
forContext: [ function(e, t, r) {
"use strict";
cc._RF.push(t, "c2e9d6KDFJIPZjeQijk04Ao", "forContext");
var n = this && this.__values || function(e) {
var t = "function" == typeof Symbol && Symbol.iterator, r = t && e[t], n = 0;
if (r) return r.call(e);
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
}, o = this && this.__read || function(e, t) {
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
r.withSummaryPrimitives = r.withSeriesPrimitives = void 0;
var a = e("../../../../../scripts/modules/dataCollect/interfaces/DataCollectInterfaces"), i = e("../../data/ModelFeatureDataCenter"), s = e("../../interface/ModelFeatureSeriesSourceInterface");
r.withSeriesPrimitives = function(e) {
var t, r, a = function(t, r) {
Object.defineProperty(e.prototype, t, {
configurable: !0,
get: function() {
var e, t = r, n = null !== (e = this.cutoffs.get(t)) && void 0 !== e ? e : 0, o = i.modelFeatureDataCenter.records[t];
return this.getOrCreateSourceAccessor(t, o, n);
}
});
};
try {
for (var l = n(Object.entries(s.MODEL_FEATURE_SOURCE_PROPERTY)), u = l.next(); !u.done; u = l.next()) {
var c = o(u.value, 2);
a(c[0], c[1]);
}
} catch (e) {
t = {
error: e
};
} finally {
try {
u && !u.done && (r = l.return) && r.call(l);
} finally {
if (t) throw t.error;
}
}
return e;
};
r.withSummaryPrimitives = function(e) {
var t, r, i = function(t, r) {
Object.defineProperty(e.prototype, t, {
configurable: !0,
get: function() {
return this.readSummary(r);
}
});
};
try {
for (var s = n(Object.entries(a.DATA_COLLECT_SUMMARY_SOURCE_PROPERTY)), l = s.next(); !l.done; l = s.next()) {
var u = o(l.value, 2);
i(u[0], u[1]);
}
} catch (e) {
t = {
error: e
};
} finally {
try {
l && !l.done && (r = s.return) && r.call(s);
} finally {
if (t) throw t.error;
}
}
return e;
};
cc._RF.pop();
}, {
"../../../../../scripts/modules/dataCollect/interfaces/DataCollectInterfaces": void 0,
"../../data/ModelFeatureDataCenter": "ModelFeatureDataCenter",
"../../interface/ModelFeatureSeriesSourceInterface": "ModelFeatureSeriesSourceInterface"
} ],
pbMinimal: [ function(e, t) {
(function(e) {
"use strict";
cc._RF.push(t, "14160aNqn5NYYn7fUN1dmmX", "pbMinimal");
n = {
1: [ function(e, t) {
t.exports = function(e, t) {
for (var r = Array(arguments.length - 1), n = 0, o = 2, a = !0; o < arguments.length; ) r[n++] = arguments[o++];
return new Promise(function(o, i) {
r[n] = function(e) {
if (a) if (a = !1, e) i(e); else {
for (var t = Array(arguments.length - 1), r = 0; r < t.length; ) t[r++] = arguments[r];
o.apply(null, t);
}
};
try {
e.apply(t || null, r);
} catch (e) {
a && (a = !1, i(e));
}
});
};
}, {} ],
2: [ function(e, t, n) {
n.length = function(e) {
var t = e.length;
if (!t) return 0;
for (var r = 0; 1 < --t % 4 && "=" == (e[0 | t] || ""); ) ++r;
return Math.ceil(3 * e.length) / 4 - r;
};
for (var o = Array(64), a = Array(123), i = 0; i < 64; ) a[o[i] = i < 26 ? i + 65 : i < 52 ? i + 71 : i < 62 ? i - 4 : i - 59 | 43] = i++;
n.encode = function(e, t, r) {
for (var n, a = null, i = [], s = 0, l = 0; t < r; ) {
var u = e[t++];
switch (l) {
case 0:
i[s++] = o[u >> 2], n = (3 & u) << 4, l = 1;
break;

case 1:
i[s++] = o[n | u >> 4], n = (15 & u) << 2, l = 2;
break;

case 2:
i[s++] = o[n | u >> 6], i[s++] = o[63 & u], l = 0;
}
8191 < s && ((a = a || []).push(String.fromCharCode.apply(String, i)), s = 0);
}
return l && (i[s++] = o[n], i[s++] = 61, 1 === l && (i[s++] = 61)), a ? (s && a.push(String.fromCharCode.apply(String, i.slice(0, s))), 
a.join("")) : String.fromCharCode.apply(String, i.slice(0, s));
};
var s = "invalid encoding";
n.decode = function(e, t, n) {
for (var o, i = n, l = 0, u = 0; u < e.length; ) {
var c = e.charCodeAt(u++);
if (61 == c && 1 < l) break;
if ((c = a[c]) === r) throw Error(s);
switch (l) {
case 0:
o = c, l = 1;
break;

case 1:
t[n++] = o << 2 | (48 & c) >> 4, o = c, l = 2;
break;

case 2:
t[n++] = (15 & o) << 4 | (60 & c) >> 2, o = c, l = 3;
break;

case 3:
t[n++] = (3 & o) << 6 | c, l = 0;
}
}
if (1 === l) throw Error(s);
return n - i;
}, n.test = function(e) {
return /^(?:[A-Za-z0-9+/]{4})*(?:[A-Za-z0-9+/]{2}==|[A-Za-z0-9+/]{3}=)?$/.test(e);
};
}, {} ],
3: [ function(e, t) {
t.exports = o;
var n = /^(?:do|if|in|for|let|new|try|var|case|else|enum|eval|false|null|this|true|void|with|break|catch|class|const|super|throw|while|yield|delete|export|import|public|return|static|switch|typeof|default|extends|finally|package|private|continue|debugger|function|arguments|interface|protected|implements|instanceof)$/;
function o(e, t) {
"string" == typeof e && (t = e, e = r);
var a = [];
function i(e) {
if ("string" != typeof e) {
var t = s();
if (o.verbose, t = "return " + t, e) {
for (var r = Object.keys(e), n = Array(r.length + 1), l = Array(r.length), u = 0; u < r.length; ) n[u] = r[u], 
l[u] = e[r[u++]];
return n[u] = t, Function.apply(null, n).apply(null, l);
}
return Function(t)();
}
for (var c = Array(arguments.length - 1), d = 0; d < c.length; ) c[d] = arguments[++d];
if (d = 0, e = e.replace(/%([%dfijs])/g, function(e, t) {
var r = c[d++];
switch (t) {
case "d":
case "f":
return "" + +("" + r);

case "i":
return "" + Math.floor(r);

case "j":
return JSON.stringify(r);

case "s":
return "" + r;
}
return "%";
}), d !== c.length) throw Error("parameter count mismatch");
return a.push(e), i;
}
function s(r) {
return "function " + function(e) {
if (!e) return "";
if (!(e = ("" + e).replace(/[^\w$]/g, ""))) return "";
/^\d/.test(e) && (e = "_" + e);
return n.test(e) ? e + "_" : e;
}(r || t) + "(" + (e && e.join(",") || "") + "){\n  " + a.join("\n  ") + "\n}";
}
return i.toString = s, i;
}
o.verbose = !1;
}, {} ],
4: [ function(e, t) {
function n() {
this.i = Object.create(null);
}
(t.exports = n).prototype.on = function(e, t, r) {
return (this.i[e] || (this.i[e] = [])).push({
fn: t,
ctx: r || this
}), this;
}, n.prototype.off = function(e, t) {
if (e === r) this.i = Object.create(null); else if (t === r) this.i[e] = []; else {
var n = this.i[e];
if (!n) return this;
for (var o = 0; o < n.length; ) n[o].fn === t ? n.splice(o, 1) : ++o;
}
return this;
}, n.prototype.emit = function(e) {
var t = this.i[e];
if (t) {
for (var r = [], n = 1; n < arguments.length; ) r.push(arguments[n++]);
for (n = 0; n < t.length; ) t[n].fn.apply(t[n++].ctx, r);
}
return this;
};
}, {} ],
5: [ function(e, t) {
t.exports = a;
var n = e(1), o = e(6);
function a(e, t, r) {
return t = "function" == typeof t ? (r = t, {}) : t || {}, r ? !t.xhr && o && o.readFile ? o.readFile(e, function(n, o) {
return n && "undefined" != typeof XMLHttpRequest ? a.xhr(e, t, r) : n ? r(n) : r(null, t.binary ? o : o.toString("utf8"));
}) : a.xhr(e, t, r) : n(a, this, e, t);
}
a.xhr = function(e, t, n) {
var o = new XMLHttpRequest();
o.onreadystatechange = function() {
if (4 !== o.readyState) return r;
if (0 !== o.status && 200 !== o.status) return n(Error("status " + o.status));
if (t.binary) {
if (!(e = o.response)) for (var e = [], a = 0; a < o.responseText.length; ++a) e.push(255 & o.responseText.charCodeAt(a));
return n(null, "undefined" != typeof Uint8Array ? new Uint8Array(e) : e);
}
return n(null, o.responseText);
}, t.binary && ("overrideMimeType" in o && o.overrideMimeType("text/plain; charset=x-user-defined"), 
o.responseType = "arraybuffer"), o.open("GET", e), o.send();
};
}, {
1: 1,
6: 6
} ],
6: [ function(e, t) {
var r = null;
try {
(r = e(11)) && r.readFile && r.readFileSync || (r = null);
} catch (e) {}
t.exports = r;
}, {
11: 11
} ],
7: [ function(e, t) {
function r(e) {
function t(e, t, r, n) {
var o = t < 0 ? 1 : 0;
e(0 === (t = o ? -t : t) ? 0 < 1 / t ? 0 : 2147483648 : isNaN(t) ? 2143289344 : 34028234663852886e22 < t ? (o << 31 | 2139095040) >>> 0 : t < 11754943508222875e-54 ? (o << 31 | Math.round(t / 1401298464324817e-60)) >>> 0 : (o << 31 | 127 + (e = Math.floor(Math.log(t) / Math.LN2)) << 23 | 8388607 & Math.round(t * Math.pow(2, -e) * 8388608)) >>> 0, r, n);
}
function r(e, t, r) {
t = 2 * ((e = e(t, r)) >> 31) + 1, r = e >>> 23 & 255, e &= 8388607;
return 255 == r ? e ? NaN : 1 / 0 * t : 0 == r ? 1401298464324817e-60 * t * e : t * Math.pow(2, r - 150) * (8388608 + e);
}
function s(e, t, r) {
d[0] = e, t[r] = f[0], t[r + 1] = f[1], t[r + 2] = f[2], t[r + 3] = f[3];
}
function l(e, t, r) {
d[0] = e, t[r] = f[3], t[r + 1] = f[2], t[r + 2] = f[1], t[r + 3] = f[0];
}
function u(e, t) {
return f[0] = e[t], f[1] = e[t + 1], f[2] = e[t + 2], f[3] = e[t + 3], d[0];
}
function c(e, t) {
return f[3] = e[t], f[2] = e[t + 1], f[1] = e[t + 2], f[0] = e[t + 3], d[0];
}
var d, f, m, p, h;
function g(e, t, r, n, o, a) {
var i, s = n < 0 ? 1 : 0;
0 === (n = s ? -n : n) ? (e(0, o, a + t), e(0 < 1 / n ? 0 : 2147483648, o, a + r)) : isNaN(n) ? (e(0, o, a + t), 
e(2146959360, o, a + r)) : 17976931348623157e292 < n ? (e(0, o, a + t), e((s << 31 | 2146435072) >>> 0, o, a + r)) : n < 22250738585072014e-324 ? (e((i = n / 5e-324) >>> 0, o, a + t), 
e((s << 31 | i / 4294967296) >>> 0, o, a + r)) : (e(4503599627370496 * (i = n * Math.pow(2, -(n = 1024 === (n = Math.floor(Math.log(n) / Math.LN2)) ? 1023 : n))) >>> 0, o, a + t), 
e((s << 31 | n + 1023 << 20 | 1048576 * i & 1048575) >>> 0, o, a + r));
}
function v(e, t, r, n, o) {
t = e(n, o + t), n = 2 * ((e = e(n, o + r)) >> 31) + 1, r = 4294967296 * (1048575 & e) + t;
return 2047 == (o = e >>> 20 & 2047) ? r ? NaN : 1 / 0 * n : 0 == o ? 5e-324 * n * r : n * Math.pow(2, o - 1075) * (r + 4503599627370496);
}
function y(e, t, r) {
m[0] = e, t[r] = p[0], t[r + 1] = p[1], t[r + 2] = p[2], t[r + 3] = p[3], t[r + 4] = p[4], 
t[r + 5] = p[5], t[r + 6] = p[6], t[r + 7] = p[7];
}
function b(e, t, r) {
m[0] = e, t[r] = p[7], t[r + 1] = p[6], t[r + 2] = p[5], t[r + 3] = p[4], t[r + 4] = p[3], 
t[r + 5] = p[2], t[r + 6] = p[1], t[r + 7] = p[0];
}
function _(e, t) {
return p[0] = e[t], p[1] = e[t + 1], p[2] = e[t + 2], p[3] = e[t + 3], p[4] = e[t + 4], 
p[5] = e[t + 5], p[6] = e[t + 6], p[7] = e[t + 7], m[0];
}
function S(e, t) {
return p[7] = e[t], p[6] = e[t + 1], p[5] = e[t + 2], p[4] = e[t + 3], p[3] = e[t + 4], 
p[2] = e[t + 5], p[1] = e[t + 6], p[0] = e[t + 7], m[0];
}
return "undefined" != typeof Float32Array ? (d = new Float32Array([ -0 ]), h = 128 === (f = new Uint8Array(d.buffer))[3], 
e.writeFloatLE = h ? s : l, e.writeFloatBE = h ? l : s, e.readFloatLE = h ? u : c, 
e.readFloatBE = h ? c : u) : (e.writeFloatLE = t.bind(null, n), e.writeFloatBE = t.bind(null, o), 
e.readFloatLE = r.bind(null, a), e.readFloatBE = r.bind(null, i)), "undefined" != typeof Float64Array ? (m = new Float64Array([ -0 ]), 
h = 128 === (p = new Uint8Array(m.buffer))[7], e.writeDoubleLE = h ? y : b, e.writeDoubleBE = h ? b : y, 
e.readDoubleLE = h ? _ : S, e.readDoubleBE = h ? S : _) : (e.writeDoubleLE = g.bind(null, n, 0, 4), 
e.writeDoubleBE = g.bind(null, o, 4, 0), e.readDoubleLE = v.bind(null, a, 0, 4), 
e.readDoubleBE = v.bind(null, i, 4, 0)), e;
}
function n(e, t, r) {
t[r] = 255 & e, t[r + 1] = e >>> 8 & 255, t[r + 2] = e >>> 16 & 255, t[r + 3] = e >>> 24;
}
function o(e, t, r) {
t[r] = e >>> 24, t[r + 1] = e >>> 16 & 255, t[r + 2] = e >>> 8 & 255, t[r + 3] = 255 & e;
}
function a(e, t) {
return (e[t] | e[t + 1] << 8 | e[t + 2] << 16 | e[t + 3] << 24) >>> 0;
}
function i(e, t) {
return (e[t] << 24 | e[t + 1] << 16 | e[t + 2] << 8 | e[t + 3]) >>> 0;
}
t.exports = r(r);
}, {} ],
8: [ function(e, t, r) {
var n = r.isAbsolute = function(e) {
return /^(?:\/|\w+:)/.test(e);
}, o = r.normalize = function(e) {
var t = (e = e.replace(/\\/g, "/").replace(/\/{2,}/g, "/")).split("/"), r = n(e);
e = "";
r && (e = t.shift() + "/");
for (var o = 0; o < t.length; ) ".." === t[o] ? 0 < o && ".." !== t[o - 1] ? t.splice(--o, 2) : r ? t.splice(o, 1) : ++o : "." === t[o] ? t.splice(o, 1) : ++o;
return e + t.join("/");
};
r.resolve = function(e, t, r) {
return r || (t = o(t)), !n(t) && (e = (e = r ? e : o(e)).replace(/(?:\/|^)[^/]+$/, "")).length ? o(e + "/" + t) : t;
};
}, {} ],
9: [ function(e, t) {
t.exports = function(e, t, r) {
var n = r || 8192, o = n >>> 1, a = null, i = n;
return function(r) {
if (r < 1 || o < r) return e(r);
n < i + r && (a = e(n), i = 0);
r = t.call(a, i, i += r);
return 7 & i && (i = 1 + (7 | i)), r;
};
};
}, {} ],
10: [ function(e, t, r) {
r.length = function(e) {
for (var t, r = 0, n = 0; n < e.length; ++n) (t = e.charCodeAt(n)) < 128 ? r += 1 : t < 2048 ? r += 2 : 55296 == (64512 & t) && 56320 == (64512 & e.charCodeAt(n + 1)) ? (++n, 
r += 4) : r += 3;
return r;
}, r.read = function(e, t, r) {
if (r - t < 1) return "";
for (var n = "", o = t; o < r; ) {
var a, i = e[o++];
i <= 127 ? n += String.fromCharCode(i) : 192 <= i && i < 224 ? n += 128 <= (a = (31 & i) << 6 | 63 & e[o++]) ? String.fromCharCode(a) : "�" : 224 <= i && i < 240 ? n += 2048 <= (a = (15 & i) << 12 | (63 & e[o++]) << 6 | 63 & e[o++]) ? String.fromCharCode(a) : "�" : 240 <= i && ((i = (7 & i) << 18 | (63 & e[o++]) << 12 | (63 & e[o++]) << 6 | 63 & e[o++]) < 65536 || 1114111 < i ? n += "�" : n = n + String.fromCharCode(55296 + ((i -= 65536) >> 10)) + String.fromCharCode(56320 + (1023 & i)));
}
return n;
}, r.write = function(e, t, r) {
for (var n, o, a = r, i = 0; i < e.length; ++i) (n = e.charCodeAt(i)) < 128 ? t[r++] = n : (n < 2048 ? t[r++] = n >> 6 | 192 : (55296 == (64512 & n) && 56320 == (64512 & (o = e.charCodeAt(i + 1))) ? (++i, 
t[r++] = (n = 65536 + ((1023 & n) << 10) + (1023 & o)) >> 18 | 240, t[r++] = n >> 12 & 63 | 128) : t[r++] = n >> 12 | 224, 
t[r++] = n >> 6 & 63 | 128), t[r++] = 63 & n | 128);
return r - a;
};
}, {} ],
11: [ function() {}, {} ],
12: [ function(e, t) {
t.exports = n;
var r = /\/|\./;
function n(e, t) {
r.test(e) || (e = "google/protobuf/" + e + ".proto", t = {
nested: {
google: {
nested: {
protobuf: {
nested: t
}
}
}
}
}), n[e] = t;
}
n("any", {
Any: {
fields: {
type_url: {
type: "string",
id: 1
},
value: {
type: "bytes",
id: 2
}
}
}
}), n("duration", {
Duration: t = {
fields: {
seconds: {
type: "int64",
id: 1
},
nanos: {
type: "int32",
id: 2
}
}
}
}), n("timestamp", {
Timestamp: t
}), n("empty", {
Empty: {
fields: {}
}
}), n("struct", {
Struct: {
fields: {
fields: {
keyType: "string",
type: "Value",
id: 1
}
}
},
Value: {
oneofs: {
kind: {
oneof: [ "nullValue", "numberValue", "stringValue", "boolValue", "structValue", "listValue" ]
}
},
fields: {
nullValue: {
type: "NullValue",
id: 1
},
numberValue: {
type: "double",
id: 2
},
stringValue: {
type: "string",
id: 3
},
boolValue: {
type: "bool",
id: 4
},
structValue: {
type: "Struct",
id: 5
},
listValue: {
type: "ListValue",
id: 6
}
}
},
NullValue: {
values: {
NULL_VALUE: 0
}
},
ListValue: {
fields: {
values: {
rule: "repeated",
type: "Value",
id: 1
}
}
}
}), n("wrappers", {
DoubleValue: {
fields: {
value: {
type: "double",
id: 1
}
}
},
FloatValue: {
fields: {
value: {
type: "float",
id: 1
}
}
},
Int64Value: {
fields: {
value: {
type: "int64",
id: 1
}
}
},
UInt64Value: {
fields: {
value: {
type: "uint64",
id: 1
}
}
},
Int32Value: {
fields: {
value: {
type: "int32",
id: 1
}
}
},
UInt32Value: {
fields: {
value: {
type: "uint32",
id: 1
}
}
},
BoolValue: {
fields: {
value: {
type: "bool",
id: 1
}
}
},
StringValue: {
fields: {
value: {
type: "string",
id: 1
}
}
},
BytesValue: {
fields: {
value: {
type: "bytes",
id: 1
}
}
}
}), n("field_mask", {
FieldMask: {
fields: {
paths: {
rule: "repeated",
type: "string",
id: 1
}
}
}
}), n.get = function(e) {
return n[e] || null;
};
}, {} ],
13: [ function(e, t, r) {
var n = e(16), o = e(38);
function a(e, t, r, o) {
var a = !1;
if (t.resolvedType) if (t.resolvedType instanceof n) {
e("switch(d%s){", o);
for (var i = t.resolvedType.values, s = Object.keys(i), l = 0; l < s.length; ++l) i[s[l]] !== t.typeDefault || a || (e("default:")('if(typeof(d%s)==="number"){m%s=d%s;break}', o, o, o), 
t.repeated || e("break"), a = !0), e("case%j:", s[l])("case %i:", i[s[l]])("m%s=%j", o, i[s[l]])("break");
e("}");
} else e("if(!util.isObject(d%s))", o)("throw TypeError(%j)", t.fullName + ": object expected")("m%s=types[%i].fromObject(d%s,n+1)", o, r, o); else {
var u = !1;
switch (t.type) {
case "double":
case "float":
e("m%s=Number(d%s)", o, o);
break;

case "uint32":
case "fixed32":
e("m%s=d%s>>>0", o, o);
break;

case "int32":
case "sint32":
case "sfixed32":
e("m%s=d%s|0", o, o);
break;

case "uint64":
case "fixed64":
u = !0;

case "int64":
case "sint64":
case "sfixed64":
e("if(util.Long)")("m%s=util.Long.fromValue(d%s,%j)", o, o, u)('else if(typeof d%s==="string")', o)("m%s=parseInt(d%s,10)", o, o)('else if(typeof d%s==="number")', o)("m%s=d%s", o, o)('else if(typeof d%s==="object")', o)("m%s=new util.LongBits(d%s.low>>>0,d%s.high>>>0).toNumber(%s)", o, o, o, u ? "true" : "");
break;

case "bytes":
e('if(typeof d%s==="string")', o)("util.base64.decode(d%s,m%s=util.newBuffer(util.base64.length(d%s)),0)", o, o, o)("else if(d%s.length >= 0)", o)("m%s=d%s", o, o);
break;

case "string":
e("m%s=String(d%s)", o, o);
break;

case "bool":
e("m%s=Boolean(d%s)", o, o);
}
}
return e;
}
function i(e, t, r, o) {
if (t.resolvedType) t.resolvedType instanceof n ? e("d%s=o.enums===String?(types[%i].values[m%s]===undefined?m%s:types[%i].values[m%s]):m%s", o, r, o, o, r, o, o) : e("d%s=types[%i].toObject(m%s,o,q+1)", o, r, o); else {
var a = !1;
switch (t.type) {
case "double":
case "float":
e("d%s=o.json&&!isFinite(m%s)?String(m%s):m%s", o, o, o, o);
break;

case "uint64":
case "fixed64":
a = !0;

case "int64":
case "sint64":
case "sfixed64":
e('if(typeof BigInt!=="undefined"&&o.longs===BigInt)')('d%s=typeof m%s==="number"?BigInt(m%s):util.Long.fromBits(m%s.low>>>0,m%s.high>>>0,%j).toBigInt()', o, o, o, o, o, a)('else if(typeof m%s==="number")', o)("d%s=o.longs===String?String(m%s):m%s", o, o, o)("else")("d%s=o.longs===String?util.Long.prototype.toString.call(m%s):o.longs===Number?new util.LongBits(m%s.low>>>0,m%s.high>>>0).toNumber(%s):m%s", o, o, o, o, a ? "true" : "", o);
break;

case "bytes":
e("d%s=o.bytes===String?util.base64.encode(m%s,0,m%s.length):o.bytes===Array?Array.prototype.slice.call(m%s):m%s", o, o, o, o, o);
break;

default:
e("d%s=m%s", o, o);
}
}
return e;
}
r.fromObject = function(e) {
var t = e.fieldsArray, r = o.codegen([ "d", "n" ], e.name + "$fromObject")("if(d instanceof this.ctor)")("return d");
if (!t.length) return r("return new this.ctor");
r("if(!util.isObject(d))")("throw TypeError(%j)", e.fullName + ": object expected")("if(n===undefined)n=0")("if(n>util.recursionLimit)")('throw Error("maximum nesting depth exceeded")'), 
r("var m=new this.ctor");
for (var i = 0; i < t.length; ++i) {
var s = t[i].resolve(), l = o.safeProp(s.name);
s.map ? (r("if(d%s){", l)("if(!util.isObject(d%s))", l)("throw TypeError(%j)", s.fullName + ": object expected")("m%s={}", l)("for(var ks=Object.keys(d%s),i=0;i<ks.length;++i){", l), 
r('if(ks[i]==="__proto__")')("util.makeProp(m%s,ks[i])", l), a(r, s, i, l + "[ks[i]]")("}")("}")) : s.repeated ? (r("if(d%s){", l)("if(!Array.isArray(d%s))", l)("throw TypeError(%j)", s.fullName + ": array expected")("m%s=[]", l)("for(var i=0;i<d%s.length;++i){", l), 
a(r, s, i, l + "[i]")("}")("}")) : (s.resolvedType instanceof n || r("if(d%s!=null){", l), 
a(r, s, i, l), s.resolvedType instanceof n || r("}"));
}
return r("return m");
}, r.toObject = function(e) {
var t = e.fieldsArray.slice().sort(o.compareFieldsById);
if (!t.length) return o.codegen()("return {}");
for (var r = o.codegen([ "m", "o", "q" ], e.name + "$toObject")("if(!o)")("o={}")("if(q===undefined)q=0")("if(q>util.recursionLimit)")('throw Error("max depth exceeded")')("var d={}"), a = [], s = [], l = [], u = 0; u < t.length; ++u) t[u].partOf || (t[u].resolve().repeated ? a : t[u].map ? s : l).push(t[u]);
if (a.length) {
for (r("if(o.arrays||o.defaults){"), u = 0; u < a.length; ++u) r("d%s=[]", o.safeProp(a[u].name));
r("}");
}
if (s.length) {
for (r("if(o.objects||o.defaults){"), u = 0; u < s.length; ++u) r("d%s={}", o.safeProp(s[u].name));
r("}");
}
if (l.length) {
for (r("if(o.defaults){"), u = 0; u < l.length; ++u) {
var c, d = l[u], f = o.safeProp(d.name);
d.resolvedType instanceof n ? r("d%s=o.enums===String?%j:%j", f, d.resolvedType.valuesById[d.typeDefault], d.typeDefault) : d.long ? r("if(util.Long){")("var n=new util.Long(%i,%i,%j)", d.typeDefault.low, d.typeDefault.high, d.typeDefault.unsigned)('d%s=o.longs===String?n.toString():o.longs===Number?n.toNumber():typeof BigInt!=="undefined"&&o.longs===BigInt?n.toBigInt():n', f)("}else")('d%s=o.longs===String?%j:typeof BigInt!=="undefined"&&o.longs===BigInt?BigInt(%j):%i', f, d.typeDefault.toString(), d.typeDefault.toString(), d.typeDefault.toNumber()) : d.bytes ? (c = Array.prototype.slice.call(d.typeDefault), 
r("if(o.bytes===String)d%s=%j", f, String.fromCharCode.apply(String, d.typeDefault))("else{")("d%s=%j", f, c)("if(o.bytes!==Array)d%s=util.newBuffer(d%s)", f, f)("}")) : r("d%s=%j", f, d.typeDefault);
}
r("}");
}
var m = !1;
for (u = 0; u < t.length; ++u) {
d = t[u];
var p = e.e.indexOf(d);
f = o.safeProp(d.name);
d.map ? (m || (m = !0, r("var ks2")), r("if(m%s&&(ks2=Object.keys(m%s)).length){", f, f)("d%s={}", f)("for(var j=0;j<ks2.length;++j){"), 
r('if(ks2[j]==="__proto__")')("util.makeProp(d%s,ks2[j])", f), i(r, d, p, f + "[ks2[j]]")("}")) : d.repeated ? (r("if(m%s&&m%s.length){", f, f)("d%s=[]", f)("for(var j=0;j<m%s.length;++j){", f), 
i(r, d, p, f + "[j]")("}")) : (r("if(m%s!=null&&Object.hasOwnProperty.call(m,%j)){", f, d.name), 
i(r, d, p, f), d.partOf && r("if(o.oneofs)")("d%s=%j", o.safeProp(d.partOf.name), d.name)), 
r("}");
}
return r("return d");
};
}, {
16: 16,
38: 38
} ],
14: [ function(e, t) {
t.exports = function(e) {
for (var t = a.codegen([ "r", "l", "e", "n" ], e.name + "$decode")("if(!(r instanceof Reader))")("r=Reader.create(r)")("if(n===undefined)n=0")("if(n>Reader.recursionLimit)")('throw Error("maximum nesting depth exceeded")')("var c=l===undefined?r.len:r.pos+l,m=new this.ctor" + (e.fieldsArray.filter(function(e) {
return e.map;
}).length ? ",k,value" : ""))("while(r.pos<c){")("var t=r.uint32()")("if(t===e)")("break")("switch(t>>>3){"), i = 0; i < e.fieldsArray.length; ++i) {
var s = e.e[i].resolve(), l = s.resolvedType instanceof n ? "int32" : s.type, u = "m" + a.safeProp(s.name);
t("case %i: {", s.id), s.map ? (t("if(%s===util.emptyObject)", u)("%s={}", u)("var c2 = r.uint32()+r.pos"), 
o.defaults[s.keyType] !== r ? t("k=%j", o.defaults[s.keyType]) : t("k=null"), o.defaults[l] !== r ? t("value=%j", o.defaults[l]) : t("value=null"), 
t("while(r.pos<c2){")("var tag2=r.uint32()")("switch(tag2>>>3){")("case 1: k=r.%s(); break", s.keyType)("case 2:"), 
o.basic[l] === r ? t("value=types[%i].decode(r,r.uint32(),undefined,n+1)", i) : t("value=r.%s()", l), 
t("break")("default:")("r.skipType(tag2&7,n)")("break")("}")("}"), o.long[s.keyType] !== r ? t('%s[typeof k==="object"?util.longToHash(k):k]=value', u) : ("string" === s.keyType && t('if(k==="__proto__")')("util.makeProp(%s,k)", u), 
t("%s[k]=value", u))) : s.repeated ? (t("if(!(%s&&%s.length))", u, u)("%s=[]", u), 
o.packed[l] !== r && t("if((t&7)===2){")("var c2=r.uint32()+r.pos")("while(r.pos<c2)")("%s.push(r.%s())", u, l)("}else"), 
o.basic[l] === r ? t(s.delimited ? "%s.push(types[%i].decode(r,undefined,((t&~7)|4),n+1))" : "%s.push(types[%i].decode(r,r.uint32(),undefined,n+1))", u, i) : t("%s.push(r.%s())", u, l)) : o.basic[l] === r ? t(s.delimited ? "%s=types[%i].decode(r,undefined,((t&~7)|4),n+1)" : "%s=types[%i].decode(r,r.uint32(),undefined,n+1)", u, i) : t("%s=r.%s()", u, l), 
t("break")("}");
}
for (t("default:")("r.skipType(t&7,n)")("break")("}")("}"), i = 0; i < e.e.length; ++i) {
var c = e.e[i];
c.required && t("if(!Object.hasOwnProperty.call(m,%j))", c.name)("throw util.ProtocolError(%j,{instance:m})", "missing required '" + c.name + "'");
}
return t("return m");
};
var n = e(16), o = e(37), a = e(38);
}, {
16: 16,
37: 37,
38: 38
} ],
15: [ function(e, t) {
t.exports = function(e) {
for (var t, s = a.codegen([ "m", "w", "q" ], e.name + "$encode")("if(!w)")("w=Writer.create()")("if(q===undefined)q=0")("if(q>util.recursionLimit)")('throw Error("max depth exceeded")'), l = e.fieldsArray.slice().sort(a.compareFieldsById), u = 0; u < l.length; ++u) {
var c = l[u].resolve(), d = e.e.indexOf(c), f = c.resolvedType instanceof n ? "int32" : c.type, m = o.basic[f];
t = "m" + a.safeProp(c.name), c.map ? (s("if(%s!=null&&Object.hasOwnProperty.call(m,%j)){", t, c.name)("for(var ks=Object.keys(%s),i=0;i<ks.length;++i){", t)("w.uint32(%i).fork().uint32(%i).%s(ks[i])", (c.id << 3 | 2) >>> 0, 8 | o.mapKey[c.keyType], c.keyType), 
m === r ? s("types[%i].encode(%s[ks[i]],w.uint32(18).fork(),q+1).ldelim().ldelim()", d, t) : s(".uint32(%i).%s(%s[ks[i]]).ldelim()", 16 | m, f, t), 
s("}")("}")) : c.repeated ? (s("if(%s!=null&&%s.length){", t, t), c.packed && o.packed[f] !== r ? s("w.uint32(%i).fork()", (c.id << 3 | 2) >>> 0)("for(var i=0;i<%s.length;++i)", t)("w.%s(%s[i])", f, t)("w.ldelim()") : (s("for(var i=0;i<%s.length;++i)", t), 
m === r ? i(s, c, d, t + "[i]") : s("w.uint32(%i).%s(%s[i])", (c.id << 3 | m) >>> 0, f, t)), 
s("}")) : (c.optional && s("if(%s!=null&&Object.hasOwnProperty.call(m,%j))", t, c.name), 
m === r ? i(s, c, d, t) : s("w.uint32(%i).%s(%s)", (c.id << 3 | m) >>> 0, f, t));
}
return s("return w");
};
var n = e(16), o = e(37), a = e(38);
function i(e, t, r, n) {
t.delimited ? e("types[%i].encode(%s,w.uint32(%i),q+1).uint32(%i)", r, n, (t.id << 3 | 3) >>> 0, (t.id << 3 | 4) >>> 0) : e("types[%i].encode(%s,w.uint32(%i).fork(),q+1).ldelim()", r, n, (t.id << 3 | 2) >>> 0);
}
}, {
16: 16,
37: 37,
38: 38
} ],
16: [ function(e, t) {
t.exports = i;
var n = e(25), o = (((i.prototype = Object.create(n.prototype)).constructor = i).className = "Enum", 
e(24)), a = e(38);
function i(e, t, o, a, i, s) {
if (n.call(this, e, o), t && "object" != typeof t) throw TypeError("values must be an object");
if (this.valuesById = {}, this.values = Object.create(this.valuesById), this.comment = a, 
this.comments = i || {}, this.valuesOptions = s, this.s = {}, this.reserved = r, 
t) for (var l = Object.keys(t), u = 0; u < l.length; ++u) "__proto__" !== l[u] && "number" == typeof t[l[u]] && (this.valuesById[this.values[l[u]] = t[l[u]]] = l[u]);
}
i.prototype.o = function(e) {
var t = this;
return e = this.u || e, n.prototype.o.call(this, e), Object.keys(this.values).forEach(function(e) {
var r = a.merge({}, t.f);
t.s[e] = a.merge(r, t.valuesOptions && t.valuesOptions[e] && t.valuesOptions[e].features || {});
}), this;
}, i.fromJSON = function(e, t) {
return (e = new i(e, t.values, t.options, t.comment, t.comments)).reserved = t.reserved, 
t.edition && (e.u = t.edition), e.h = "proto3", e;
}, i.prototype.toJSON = function(e) {
e = !!e && !!e.keepComments;
return a.toObject([ "edition", this.a(), "options", this.options, "valuesOptions", this.valuesOptions, "values", this.values, "reserved", this.reserved && this.reserved.length ? this.reserved : r, "comment", e ? this.comment : r, "comments", e ? this.comments : r ]);
}, i.prototype.add = function(e, t, n, o) {
if (!a.isString(e)) throw TypeError("name must be a string");
if (!a.isInteger(t)) throw TypeError("id must be an integer");
if ("__proto__" !== e) {
if (this.values[e] !== r) throw Error("duplicate name '" + e + "' in " + this);
if (this.isReservedId(t)) throw Error("id " + t + " is reserved in " + this);
if (this.isReservedName(e)) throw Error("name '" + e + "' is reserved in " + this);
if (this.valuesById[t] !== r) {
if (!this.options || !this.options.allow_alias) throw Error("duplicate id " + t + " in " + this);
this.values[e] = t;
} else this.valuesById[this.values[e] = t] = e;
o && (this.valuesOptions === r && (this.valuesOptions = {}), this.valuesOptions[e] = o || null), 
this.comments[e] = n || null;
}
return this;
}, i.prototype.remove = function(e) {
if (!a.isString(e)) throw TypeError("name must be a string");
var t = this.values[e];
if (null == t) throw Error("name '" + e + "' does not exist in " + this);
return delete this.valuesById[t], delete this.values[e], delete this.comments[e], 
this.valuesOptions && delete this.valuesOptions[e], this;
}, i.prototype.isReservedId = function(e) {
return o.isReservedId(this.reserved, e);
}, i.prototype.isReservedName = function(e) {
return o.isReservedName(this.reserved, e);
};
}, {
24: 24,
25: 25,
38: 38
} ],
17: [ function(e, t) {
t.exports = u;
var n, o = e(25), a = (((u.prototype = Object.create(o.prototype)).constructor = u).className = "Field", 
e(16)), i = e(37), s = e(38), l = /^required|optional|repeated$/;
function u(e, t, n, a, u, c, d) {
if (s.isObject(a) ? (d = u, c = a, a = u = r) : s.isObject(u) && (d = c, c = u, 
u = r), o.call(this, e, c), !s.isInteger(t) || t < 0) throw TypeError("id must be a non-negative integer");
if (!s.isString(n)) throw TypeError("type must be a string");
if (a !== r && !l.test(a = a.toString().toLowerCase())) throw TypeError("rule must be a string rule");
if (u !== r && !s.isString(u)) throw TypeError("extend must be a string");
this.rule = (a = "proto3_optional" === a ? "optional" : a) && "optional" !== a ? a : r, 
this.type = n, this.id = t, this.extend = u || r, this.repeated = "repeated" === a, 
this.map = !1, this.message = null, this.partOf = null, this.typeDefault = null, 
this.defaultValue = null, this.long = !!s.Long && i.long[n] !== r, this.bytes = "bytes" === n, 
this.resolvedType = null, this.extensionField = null, this.declaringField = null, 
this.comment = d;
}
u.fromJSON = function(e, t) {
e = new u(e, t.id, t.type, t.rule, t.extend, t.options, t.comment);
return t.edition && (e.u = t.edition), e.h = "proto3", e;
}, Object.defineProperty(u.prototype, "required", {
get: function() {
return "LEGACY_REQUIRED" === this.f.field_presence;
}
}), Object.defineProperty(u.prototype, "optional", {
get: function() {
return !this.required;
}
}), Object.defineProperty(u.prototype, "delimited", {
get: function() {
return this.resolvedType instanceof n && "DELIMITED" === this.f.message_encoding;
}
}), Object.defineProperty(u.prototype, "packed", {
get: function() {
return "PACKED" === this.f.repeated_field_encoding;
}
}), Object.defineProperty(u.prototype, "hasPresence", {
get: function() {
return !this.repeated && !this.map && (this.partOf || this.declaringField || this.extensionField || "IMPLICIT" !== this.f.field_presence);
}
}), u.prototype.setOption = function(e, t, r) {
return o.prototype.setOption.call(this, e, t, r);
}, u.prototype.toJSON = function(e) {
e = !!e && !!e.keepComments;
return s.toObject([ "edition", this.a(), "rule", "optional" !== this.rule && this.rule || r, "type", this.type, "id", this.id, "extend", this.extend, "options", this.options, "comment", e ? this.comment : r ]);
}, u.prototype.resolve = function() {
var e;
return this.resolved ? this : ((this.typeDefault = i.defaults[this.type]) === r ? (this.resolvedType = (this.declaringField || this).parent.lookupTypeOrEnum(this.type), 
this.resolvedType instanceof n ? this.typeDefault = null : this.typeDefault = this.resolvedType.values[Object.keys(this.resolvedType.values)[0]]) : this.options && this.options.proto3_optional && (this.typeDefault = null), 
this.options && null != this.options.default && (this.typeDefault = this.options.default, 
this.resolvedType instanceof a && "string" == typeof this.typeDefault && (this.typeDefault = this.resolvedType.values[this.typeDefault])), 
this.options && (this.options.packed === r || !this.resolvedType || this.resolvedType instanceof a || delete this.options.packed, 
Object.keys(this.options).length || (this.options = r)), this.long ? (this.typeDefault = s.Long.fromNumber(this.typeDefault, "uint64" === this.type || "fixed64" === this.type), 
Object.freeze && Object.freeze(this.typeDefault)) : this.bytes && "string" == typeof this.typeDefault && (s.base64.test(this.typeDefault) ? s.base64.decode(this.typeDefault, e = s.newBuffer(s.base64.length(this.typeDefault)), 0) : s.utf8.write(this.typeDefault, e = s.newBuffer(s.utf8.length(this.typeDefault)), 0), 
this.typeDefault = e), this.map ? this.defaultValue = s.emptyObject : this.repeated ? this.defaultValue = s.emptyArray : this.defaultValue = this.typeDefault, 
this.parent instanceof n && (this.parent.ctor.prototype[this.name] = this.defaultValue), 
o.prototype.resolve.call(this));
}, u.prototype.c = function(e) {
var t;
return "proto2" !== e && "proto3" !== e ? {} : (e = {}, "required" === this.rule && (e.field_presence = "LEGACY_REQUIRED"), 
this.parent && i.defaults[this.type] === r && (t = this.parent.get(this.type.split(".").pop())) && t instanceof n && t.group && (e.message_encoding = "DELIMITED"), 
!0 === this.getOption("packed") ? e.repeated_field_encoding = "PACKED" : !1 === this.getOption("packed") && (e.repeated_field_encoding = "EXPANDED"), 
e);
}, u.prototype.o = function(e) {
return o.prototype.o.call(this, this.u || e);
}, u.d = function(e, t, r, n) {
return "function" == typeof t ? t = s.decorateType(t).name : t && "object" == typeof t && (t = s.decorateEnum(t).name), 
function(o, a) {
s.decorateType(o.constructor).add(new u(a, e, t, r, {
default: n
}));
};
}, u.l = function(e) {
n = e;
};
}, {
16: 16,
25: 25,
37: 37,
38: 38
} ],
18: [ function(e, t) {
var r = t.exports = e(19);
r.build = "light", r.load = function(e, t, n) {
return (t = "function" == typeof t ? (n = t, new r.Root()) : t || new r.Root()).load(e, n);
}, r.loadSync = function(e, t) {
return (t = t || new r.Root()).loadSync(e);
}, r.encoder = e(15), r.decoder = e(14), r.verifier = e(43), r.converter = e(13), 
r.ReflectionObject = e(25), r.Namespace = e(24), r.Root = e(30), r.Enum = e(16), 
r.Type = e(36), r.Field = e(17), r.OneOf = e(26), r.MapField = e(21), r.Service = e(34), 
r.Method = e(23), r.Message = e(22), r.wrappers = e(44), r.types = e(37), r.util = e(38), 
r.ReflectionObject.l(r.Root), r.Namespace.l(r.Type, r.Service, r.Enum), r.Root.l(r.Type), 
r.Field.l(r.Type);
}, {
13: 13,
14: 14,
15: 15,
16: 16,
17: 17,
19: 19,
21: 21,
22: 22,
23: 23,
24: 24,
25: 25,
26: 26,
30: 30,
34: 34,
36: 36,
37: 37,
38: 38,
43: 43,
44: 44
} ],
19: [ function(e, t, r) {
var n = r;
function o() {
n.util.l(), n.Writer.l(n.BufferWriter), n.Reader.l(n.BufferReader);
}
n.build = "minimal", n.Writer = e(45), n.BufferWriter = e(46), n.Reader = e(28), 
n.BufferReader = e(29), n.util = e(41), n.rpc = e(32), n.roots = e(31), n.configure = o, 
o();
}, {
28: 28,
29: 29,
31: 31,
32: 32,
41: 41,
45: 45,
46: 46
} ],
20: [ function(e, t) {
(t = t.exports = e(18)).build = "full", t.tokenize = e(35), t.parse = e(27), t.common = e(12), 
t.Root.l(t.Type, t.parse, t.common);
}, {
12: 12,
18: 18,
27: 27,
35: 35
} ],
21: [ function(e, t) {
t.exports = i;
var n = e(17), o = (((i.prototype = Object.create(n.prototype)).constructor = i).className = "MapField", 
e(37)), a = e(38);
function i(e, t, o, i, s, l) {
if (n.call(this, e, t, i, r, r, s, l), !a.isString(o)) throw TypeError("keyType must be a string");
this.keyType = o, this.resolvedKeyType = null, this.map = !0;
}
i.fromJSON = function(e, t) {
return new i(e, t.id, t.keyType, t.type, t.options, t.comment);
}, i.prototype.toJSON = function(e) {
e = !!e && !!e.keepComments;
return a.toObject([ "keyType", this.keyType, "type", this.type, "id", this.id, "extend", this.extend, "options", this.options, "comment", e ? this.comment : r ]);
}, i.prototype.resolve = function() {
if (this.resolved) return this;
if (o.mapKey[this.keyType] === r) throw Error("invalid key type: " + this.keyType);
return n.prototype.resolve.call(this);
}, i.d = function(e, t, r) {
return "function" == typeof r ? r = a.decorateType(r).name : r && "object" == typeof r && (r = a.decorateEnum(r).name), 
function(n, o) {
a.decorateType(n.constructor).add(new i(o, e, t, r));
};
};
}, {
17: 17,
37: 37,
38: 38
} ],
22: [ function(e, t) {
t.exports = n;
var r = e(41);
function n(e) {
if (e) for (var t = Object.keys(e), r = 0; r < t.length; ++r) {
var n = t[r];
"__proto__" !== n && (this[n] = e[n]);
}
}
n.create = function(e) {
return this.$type.create(e);
}, n.encode = function(e, t) {
return this.$type.encode(e, t);
}, n.encodeDelimited = function(e, t) {
return this.$type.encodeDelimited(e, t);
}, n.decode = function(e) {
return this.$type.decode(e);
}, n.decodeDelimited = function(e) {
return this.$type.decodeDelimited(e);
}, n.verify = function(e) {
return this.$type.verify(e);
}, n.fromObject = function(e) {
return this.$type.fromObject(e);
}, n.toObject = function(e, t) {
return this.$type.toObject(e, t);
}, n.prototype.toJSON = function() {
return this.$type.toObject(this, r.toJSONOptions);
};
}, {
41: 41
} ],
23: [ function(e, t) {
t.exports = a;
var n = e(25), o = (((a.prototype = Object.create(n.prototype)).constructor = a).className = "Method", 
e(38));
function a(e, t, a, i, s, l, u, c, d) {
if (o.isObject(s) ? (u = s, s = l = r) : o.isObject(l) && (u = l, l = r), t !== r && !o.isString(t)) throw TypeError("type must be a string");
if (!o.isString(a)) throw TypeError("requestType must be a string");
if (!o.isString(i)) throw TypeError("responseType must be a string");
n.call(this, e, u), this.type = t || "rpc", this.requestType = a, this.requestStream = !!s || r, 
this.responseType = i, this.responseStream = !!l || r, this.resolvedRequestType = null, 
this.resolvedResponseType = null, this.comment = c, this.parsedOptions = d;
}
a.fromJSON = function(e, t) {
return new a(e, t.type, t.requestType, t.responseType, t.requestStream, t.responseStream, t.options, t.comment, t.parsedOptions);
}, a.prototype.toJSON = function(e) {
e = !!e && !!e.keepComments;
return o.toObject([ "type", "rpc" !== this.type && this.type || r, "requestType", this.requestType, "requestStream", this.requestStream, "responseType", this.responseType, "responseStream", this.responseStream, "options", this.options, "comment", e ? this.comment : r, "parsedOptions", this.parsedOptions ]);
}, a.prototype.resolve = function() {
return this.resolved ? this : (this.resolvedRequestType = this.parent.lookupType(this.requestType), 
this.resolvedResponseType = this.parent.lookupType(this.responseType), n.prototype.resolve.call(this));
};
}, {
25: 25,
38: 38
} ],
24: [ function(e, t) {
t.exports = d;
var n, o, a, i = e(25), s = (((d.prototype = Object.create(i.prototype)).constructor = d).className = "Namespace", 
e(17)), l = e(38), u = e(26);
function c(e, t) {
if (!e || !e.length) return r;
for (var n = {}, o = 0; o < e.length; ++o) n[e[o].name] = e[o].toJSON(t);
return n;
}
function d(e, t) {
i.call(this, e, t), this.nested = r, this.p = null, this.v = Object.create(null), 
this.b = !0, this.w = !0;
}
function f(e) {
e.p = null, e.v = Object.create(null);
for (var t = e; t = t.parent; ) t.v = Object.create(null);
return e;
}
d.fromJSON = function(e, t, r) {
return r = l.checkDepth(r), new d(e, t.options).addJSON(t.nested, r);
}, d.arrayToJSON = c, d.isReservedId = function(e, t) {
if (e) for (var r = 0; r < e.length; ++r) if ("string" != typeof e[r] && e[r][0] <= t && e[r][1] > t) return !0;
return !1;
}, d.isReservedName = function(e, t) {
if (e) for (var r = 0; r < e.length; ++r) if (e[r] === t) return !0;
return !1;
}, Object.defineProperty(d.prototype, "nestedArray", {
get: function() {
return this.p || (this.p = l.toArray(this.nested));
}
}), d.prototype.toJSON = function(e) {
return l.toObject([ "options", this.options, "nested", c(this.nestedArray, e) ]);
}, d.prototype.addJSON = function(e, t) {
t = l.checkDepth(t);
if (e) for (var i, u = Object.keys(e), c = 0; c < u.length; ++c) i = e[u[c]], this.add((i.fields !== r ? n : i.values !== r ? a : i.methods !== r ? o : i.id !== r ? s : d).fromJSON(u[c], i, t + 1));
return this;
}, d.prototype.get = function(e) {
return this.nested && Object.prototype.hasOwnProperty.call(this.nested, e) ? this.nested[e] : null;
}, d.prototype.getEnum = function(e) {
if (this.nested && Object.prototype.hasOwnProperty.call(this.nested, e) && this.nested[e] instanceof a) return this.nested[e].values;
throw Error("no such enum: " + e);
}, d.prototype.add = function(e) {
if (!(e instanceof s && e.extend !== r || e instanceof n || e instanceof u || e instanceof a || e instanceof o || e instanceof d)) throw TypeError("object must be a valid nested object");
if ("__proto__" === e.name) return this;
if (this.nested) {
var t = this.get(e.name);
if (t) {
if (!(t instanceof d && e instanceof d) || t instanceof n || t instanceof o) throw Error("duplicate name '" + e.name + "' in " + this);
for (var i = t.nestedArray, l = 0; l < i.length; ++l) e.add(i[l]);
this.remove(t), this.nested || (this.nested = {}), e.setOptions(t.options, !0);
}
} else this.nested = {};
this.nested[e.name] = e, this instanceof n || this instanceof o || this instanceof a || this instanceof s || e.u || (e.u = e.h), 
this.b = !0, this.w = !0;
for (var c = this; c = c.parent; ) c.b = !0, c.w = !0;
return e.onAdd(this), f(this);
}, d.prototype.remove = function(e) {
if (!(e instanceof i)) throw TypeError("object must be a ReflectionObject");
if (e.parent !== this) throw Error(e + " is not a member of " + this);
return delete this.nested[e.name], Object.keys(this.nested).length || (this.nested = r), 
e.onRemove(this), f(this);
}, d.prototype.define = function(e, t) {
if (l.isString(e)) e = e.split("."); else if (!Array.isArray(e)) throw TypeError("illegal path");
if (e && e.length && "" === e[0]) throw Error("path must be relative");
if (e.length > l.recursionLimit) throw Error("max depth exceeded");
for (var r = this; 0 < e.length; ) {
var n = e.shift();
if (r.nested && r.nested[n]) {
if (!((r = r.nested[n]) instanceof d)) throw Error("path conflicts with non-namespace objects");
} else r.add(r = new d(n));
}
return t && r.addJSON(t), r;
}, d.prototype.resolveAll = function() {
if (this.w) {
this.m(this.u);
var e = this.nestedArray, t = 0;
for (this.resolve(); t < e.length; ) e[t] instanceof d ? e[t++].resolveAll() : e[t++].resolve();
this.w = !1;
}
return this;
}, d.prototype.m = function(e) {
return this.b && (this.b = !1, e = this.u || e, i.prototype.m.call(this, e), this.nestedArray.forEach(function(t) {
t.m(e);
})), this;
}, d.prototype.lookup = function(e, t, n) {
if ("boolean" == typeof t ? (n = t, t = r) : t && !Array.isArray(t) && (t = [ t ]), 
l.isString(e) && e.length) {
if ("." === e) return this.root;
e = e.split(".");
} else if (!e.length) return this;
var o = e.join(".");
if ("" === e[0]) return this.root.lookup(e.slice(1), t);
var a = this.root.y && this.root.y["." + o];
if (a && (!t || ~t.indexOf(a.constructor))) return a;
if ((a = this.g(e, o)) && (!t || ~t.indexOf(a.constructor))) return a;
if (!n) for (var i = this; i.parent; ) {
if ((a = i.parent.g(e, o)) && (!t || ~t.indexOf(a.constructor))) return a;
i = i.parent;
}
return null;
}, d.prototype.g = function(e, t) {
if (Object.prototype.hasOwnProperty.call(this.v, t)) return this.v[t];
var r = this.get(e[0]), n = null;
if (r) 1 === e.length ? n = r : r instanceof d && (e = e.slice(1), n = r.g(e, e.join("."))); else for (var o = 0; o < this.nestedArray.length; ++o) if (this.p[o] instanceof d && (r = this.p[o].g(e, t))) {
n = r;
break;
}
return this.v[t] = n;
}, d.prototype.lookupType = function(e) {
var t = this.lookup(e, [ n ]);
if (t) return t;
throw Error("no such type: " + e);
}, d.prototype.lookupEnum = function(e) {
var t = this.lookup(e, [ a ]);
if (t) return t;
throw Error("no such Enum '" + e + "' in " + this);
}, d.prototype.lookupTypeOrEnum = function(e) {
var t = this.lookup(e, [ n, a ]);
if (t) return t;
throw Error("no such Type or Enum '" + e + "' in " + this);
}, d.prototype.lookupService = function(e) {
var t = this.lookup(e, [ o ]);
if (t) return t;
throw Error("no such Service '" + e + "' in " + this);
}, d.l = function(e, t, r) {
n = e, o = t, a = r;
};
}, {
17: 17,
25: 25,
26: 26,
38: 38
} ],
25: [ function(e, t) {
(t.exports = u).className = "ReflectionObject";
var n, o = e(26), a = e(38), i = {
enum_type: "OPEN",
field_presence: "EXPLICIT",
json_format: "ALLOW",
message_encoding: "LENGTH_PREFIXED",
repeated_field_encoding: "PACKED",
utf8_validation: "VERIFY"
}, s = {
enum_type: "CLOSED",
field_presence: "EXPLICIT",
json_format: "LEGACY_BEST_EFFORT",
message_encoding: "LENGTH_PREFIXED",
repeated_field_encoding: "EXPANDED",
utf8_validation: "NONE"
}, l = {
enum_type: "OPEN",
field_presence: "IMPLICIT",
json_format: "ALLOW",
message_encoding: "LENGTH_PREFIXED",
repeated_field_encoding: "PACKED",
utf8_validation: "VERIFY"
};
function u(e, t) {
if (!a.isString(e)) throw TypeError("name must be a string");
if (t && !a.isObject(t)) throw TypeError("options must be an object");
this.options = t, this.parsedOptions = null, this.name = e, this.u = null, this.h = "proto2", 
this.f = {}, this.j = !1, this.parent = null, this.resolved = !1, this.comment = null, 
this.filename = null;
}
Object.defineProperties(u.prototype, {
root: {
get: function() {
for (var e = this; null !== e.parent; ) e = e.parent;
return e;
}
},
fullName: {
get: function() {
for (var e = [ this.name ], t = this.parent; t; ) e.unshift(t.name), t = t.parent;
return e.join(".");
}
}
}), u.prototype.toJSON = function() {
throw Error();
}, u.prototype.onAdd = function(e) {
this.parent && this.parent !== e && this.parent.remove(this), this.parent = e, this.resolved = !1;
(e = e.root) instanceof n && e.k(this);
}, u.prototype.onRemove = function(e) {
(e = e.root) instanceof n && e.O(this), this.parent = null, this.resolved = !1;
}, u.prototype.resolve = function() {
return this.resolved || this.root instanceof n && (this.resolved = !0), this;
}, u.prototype.m = function(e) {
return this.o(this.u || e);
}, u.prototype.o = function(e) {
if (!this.j) {
var t = {};
if (!e) throw Error("Unknown edition for " + this.fullName);
var r = a.merge({}, this.options && this.options.features, this.c(e));
if (this.u) {
if ("proto2" === e) t = Object.assign({}, s); else if ("proto3" === e) t = Object.assign({}, l); else {
if ("2023" !== e) throw Error("Unknown edition: " + e);
t = Object.assign({}, i);
}
this.f = a.merge(t, r);
} else {
if (this.partOf instanceof o) {
e = a.merge({}, this.partOf.f);
this.f = a.merge(e, r);
} else if (!this.declaringField) {
if (!this.parent) throw Error("Unable to find a parent for " + this.fullName);
t = a.merge({}, this.parent.f);
this.f = a.merge(t, r);
}
this.extensionField && (this.extensionField.f = this.f);
}
this.j = !0;
}
}, u.prototype.c = function() {
return {};
}, u.prototype.getOption = function(e) {
return this.options ? this.options[e] : r;
}, u.prototype.setOption = function(e, t, n) {
return "__proto__" !== e && (this.options || (this.options = {}), /^features\./.test(e) ? a.setProperty(this.options, e, t, n) : n && this.options[e] !== r || (this.getOption(e) !== t && (this.resolved = !1), 
this.options[e] = t)), this;
}, u.prototype.setParsedOption = function(e, t, r) {
var n, o, i;
return "__proto__" !== e && (this.parsedOptions || (this.parsedOptions = []), n = this.parsedOptions, 
r ? (o = n.find(function(t) {
return Object.prototype.hasOwnProperty.call(t, e);
})) ? (i = o[e], a.setProperty(i, r, t)) : ((o = {})[e] = a.setProperty({}, r, t), 
n.push(o)) : ((i = {})[e] = t, n.push(i))), this;
}, u.prototype.setOptions = function(e, t) {
if (e) for (var r = Object.keys(e), n = 0; n < r.length; ++n) this.setOption(r[n], e[r[n]], t);
return this;
}, u.prototype.toString = function() {
var e = this.constructor.className, t = this.fullName;
return t.length ? e + " " + t : e;
}, u.prototype.a = function() {
return this.u && "proto3" !== this.u ? this.u : r;
}, u.l = function(e) {
n = e;
};
}, {
26: 26,
38: 38
} ],
26: [ function(e, t) {
t.exports = i;
var n = e(25), o = (((i.prototype = Object.create(n.prototype)).constructor = i).className = "OneOf", 
e(17)), a = e(38);
function i(e, t, o, a) {
if (Array.isArray(t) || (o = t, t = r), n.call(this, e, o), t !== r && !Array.isArray(t)) throw TypeError("fieldNames must be an Array");
this.oneof = t || [], this.fieldsArray = [], this.comment = a;
}
function s(e) {
if (e.parent) for (var t = 0; t < e.fieldsArray.length; ++t) e.fieldsArray[t].parent || e.parent.add(e.fieldsArray[t]);
}
i.fromJSON = function(e, t) {
return new i(e, t.oneof, t.options, t.comment);
}, i.prototype.toJSON = function(e) {
e = !!e && !!e.keepComments;
return a.toObject([ "options", this.options, "oneof", this.oneof, "comment", e ? this.comment : r ]);
}, i.prototype.add = function(e) {
if (e instanceof o) return e.parent && e.parent !== this.parent && e.parent.remove(e), 
this.oneof.push(e.name), this.fieldsArray.push(e), s(e.partOf = this), this;
throw TypeError("field must be a Field");
}, i.prototype.remove = function(e) {
if (!(e instanceof o)) throw TypeError("field must be a Field");
var t = this.fieldsArray.indexOf(e);
if (t < 0) throw Error(e + " is not a member of " + this);
return this.fieldsArray.splice(t, 1), -1 < (t = this.oneof.indexOf(e.name)) && this.oneof.splice(t, 1), 
e.partOf = null, this;
}, i.prototype.onAdd = function(e) {
n.prototype.onAdd.call(this, e);
for (var t = 0; t < this.oneof.length; ++t) {
var r = e.get(this.oneof[t]);
r && !r.partOf && (r.partOf = this).fieldsArray.push(r);
}
s(this);
}, i.prototype.onRemove = function(e) {
for (var t, r = 0; r < this.fieldsArray.length; ++r) (t = this.fieldsArray[r]).parent && t.parent.remove(t);
n.prototype.onRemove.call(this, e);
}, Object.defineProperty(i.prototype, "isProto3Optional", {
get: function() {
var e;
return null != this.fieldsArray && 1 === this.fieldsArray.length && null != (e = this.fieldsArray[0]).options && !0 === e.options.proto3_optional;
}
}), i.d = function() {
for (var e = Array(arguments.length), t = 0; t < arguments.length; ) e[t] = arguments[t++];
return function(t, r) {
a.decorateType(t.constructor).add(new i(r, e)), Object.defineProperty(t, r, {
get: a.oneOfGetter(e),
set: a.oneOfSetter(e)
});
};
};
}, {
17: 17,
25: 25,
38: 38
} ],
27: [ function(e, t) {
(t.exports = M).filename = null, M.defaults = {
keepCase: !1
};
var n = e(35), o = e(30), a = e(36), i = e(17), s = e(21), l = e(26), u = e(16), c = e(34), d = e(23), f = e(25), m = e(37), p = e(38), h = /^[1-9][0-9]*$/, g = /^-?[1-9][0-9]*$/, v = /^0[x][0-9a-fA-F]+$/, y = /^-?0[x][0-9a-fA-F]+$/, b = /^0[0-7]+$/, _ = /^-?0[0-7]+$/, S = p.patterns.numberRe, I = /^[a-zA-Z_][a-zA-Z_0-9]*$/, w = p.patterns.typeRefRe;
function M(e, t, C) {
t instanceof o || (C = t, t = new o());
var G, R, x, O, F, T, N = (C = C || M.defaults).preferTrailingComment || !1, E = n(e, C.alternateCommentMode || !1), j = E.next, A = E.push, k = E.peek, P = E.skip, L = E.cmnt, B = !0, D = "proto2", W = t, H = [], U = {}, V = C.keepCase ? function(e) {
return e;
} : p.camelCase;
function z(e, t, r) {
var n = M.filename;
return r || (M.filename = null), Error("illegal " + (t || "token") + " '" + e + "' (" + (n ? n + ", " : "") + "line " + E.line + ")");
}
function J() {
var e, t = [];
do {
if ('"' !== (e = j()) && "'" !== e) throw z(e);
} while (t.push(j()), P(e), '"' === (e = k()) || "'" === e);
return t.join("");
}
function q(e) {
var t = j();
switch (t) {
case "'":
case '"':
return A(t), J();

case "true":
case "TRUE":
return !0;

case "false":
case "FALSE":
return !1;
}
try {
var r = t, n = 1;
switch ("-" == (r[0] || "") && (n = -1, r = r.substring(1)), r) {
case "inf":
case "INF":
case "Inf":
return n * (1 / 0);

case "nan":
case "NAN":
case "Nan":
case "NaN":
return NaN;

case "0":
return 0;
}
if (h.test(r)) return n * parseInt(r, 10);
if (v.test(r)) return n * parseInt(r, 16);
if (b.test(r)) return n * parseInt(r, 8);
if (S.test(r)) return n * parseFloat(r);
throw z(r, "number", !0);
} catch (r) {
if (e && w.test(t)) return t;
throw z(t, "value");
}
}
function Z(e, t) {
var n;
do {
if (!t || '"' !== (o = k()) && "'" !== o) try {
e.push([ n = Y(j()), P("to", !0) ? Y(j()) : n ]);
} catch (n) {
if (!(t && w.test(o) && 2023 <= D)) throw n;
e.push(o);
} else {
var o = J();
if (e.push(o), 2023 <= D) throw z(o, "id");
}
} while (P(",", !0));
var a = {
options: r,
setOption: function(e, t) {
this.options === r && (this.options = {}), this.options[e] = t;
}
};
K(a, function(e) {
if ("option" !== e) throw z(e);
te(a, e), P(";");
}, function() {
ne(a);
});
}
function Y(e, t) {
switch (e) {
case "max":
case "MAX":
case "Max":
return 536870911;

case "0":
return 0;
}
if (t || "-" != (e[0] || "")) {
if (g.test(e)) return parseInt(e, 10);
if (y.test(e)) return parseInt(e, 16);
if (_.test(e)) return parseInt(e, 8);
}
throw z(e, "id");
}
function $(e, t, n) {
switch (n === r && (n = 0), t) {
case "option":
return te(e, t), P(";"), 1;

case "message":
return X(e, 0, n + 1), 1;

case "enum":
return ee(e), 1;

case "service":
var o, a, i = e, s = n + 1;
if ((s = s === r ? 0 : s) > p.recursionLimit) throw Error("max depth exceeded");
if (I.test(a = j())) return K(o = new c(a), function(e) {
if (!$(o, e, s)) {
if ("rpc" !== e) throw z(e);
var t = o, r = L(), n = e;
if (!I.test(e = j())) throw z(e, "name");
var a, i, l, u = e;
if (P("("), P("stream", !0) && (i = !0), !w.test(e = j())) throw z(e);
if (a = e, P(")"), P("returns"), P("("), P("stream", !0) && (l = !0), !w.test(e = j())) throw z(e);
e = e, P(")");
var c = new d(u, n, a, e, i, l);
c.comment = r, K(c, function(e) {
if ("option" !== e) throw z(e);
te(c, e), P(";");
}), t.add(c);
}
}), i.add(o), i === W && H.push(o), 1;
throw z(a, "service name");

case "extend":
var l, u = e, f = (i = t, n);
if (w.test(i = j())) return l = i, K(null, function(e) {
switch (e) {
case "required":
case "repeated":
Q(u, e, l, f + 1);
break;

case "optional":
Q(u, "proto3" === D ? "proto3_optional" : "optional", l, f + 1);
break;

default:
if ("proto2" === D || !w.test(e)) throw z(e);
A(e), Q(u, "optional", l, f + 1);
}
}), 1;
throw z(i, "reference");
}
}
function K(e, t, r) {
var n, o = E.line;
if (e && ("string" != typeof e.comment && (e.comment = L()), e.filename = M.filename), 
P("{", !0)) {
for (;"}" !== (n = j()); ) t(n);
P(";", !0);
} else r && r(), P(";"), e && ("string" != typeof e.comment || N) && (e.comment = L(o) || e.comment);
}
function X(e, t, n) {
if ((n = n === r ? 0 : n) > p.nestingLimit) throw Error("max depth exceeded");
if (!I.test(t = j())) throw z(t, "type name");
var o = new a(t);
K(o, function(e) {
if (!$(o, e, n)) switch (e) {
case "map":
var t = o, a = (P("<"), j());
if (m.mapKey[a] === r) throw z(a, "type");
P(",");
var i = j();
if (!w.test(i)) throw z(i, "type");
P(">");
var u = j();
if (!I.test(u)) throw z(u, "name");
P("=");
var c = new s(V(u), Y(j()), a, i);
K(c, function(e) {
if ("option" !== e) throw z(e);
te(c, e), P(";");
}, function() {
ne(c);
}), t.add(c);
break;

case "required":
if ("proto2" !== D) throw z(e);

case "repeated":
Q(o, e, r, n + 1);
break;

case "optional":
if ("proto3" === D) Q(o, "proto3_optional", r, n + 1); else {
if ("proto2" !== D) throw z(e);
Q(o, "optional", r, n + 1);
}
break;

case "oneof":
u = o, a = e;
var d = n + 1;
if (!I.test(a = j())) throw z(a, "name");
var f = new l(V(a));
K(f, function(e) {
"option" === e ? (te(f, e), P(";")) : (A(e), Q(f, "optional", r, d));
}), u.add(f);
break;

case "extensions":
Z(o.extensions || (o.extensions = []));
break;

case "reserved":
Z(o.reserved || (o.reserved = []), !0);
break;

default:
if ("proto2" === D || !w.test(e)) throw z(e);
A(e), Q(o, "optional", r, n + 1);
}
}), e.add(o), e === W && H.push(o);
}
function Q(e, t, n, o) {
var s = j();
if ("group" === s) {
var u, c, d = e, f = t, m = o;
if ((m = m === r ? 0 : m) > p.nestingLimit) throw Error("max depth exceeded");
if (2023 <= D) throw z("group");
o = j();
if (I.test(o)) return o === (c = p.lcFirst(o)) && (o = p.ucFirst(o)), P("="), h = Y(j()), 
(u = new a(o)).group = !0, (c = new i(c, h, o, f)).filename = M.filename, K(u, function(e) {
switch (e) {
case "option":
te(u, e), P(";");
break;

case "required":
case "repeated":
Q(u, e, r, m + 1);
break;

case "optional":
Q(u, "proto3" === D ? "proto3_optional" : "optional", r, m + 1);
break;

case "message":
X(u, 0, m + 1);
break;

case "enum":
ee(u);
break;

case "reserved":
Z(u.reserved || (u.reserved = []), !0);
break;

default:
throw z(e);
}
}), void d.add(u).add(c);
throw z(o, "name");
}
for (;s.endsWith(".") || k().startsWith("."); ) s += j();
if (!w.test(s)) throw z(s, "type");
var h = j();
if (!I.test(h)) throw z(h, "name");
h = V(h), P("=");
var g = new i(h, Y(j()), s, t, n);
K(g, function(e) {
if ("option" !== e) throw z(e);
te(g, e), P(";");
}, function() {
ne(g);
}), "proto3_optional" === t ? (f = new l("_" + h), g.setOption("proto3_optional", !0), 
f.add(g), e.add(f)) : e.add(g), e === W && H.push(g);
}
function ee(e, t) {
if (!I.test(t = j())) throw z(t, "name");
var n = new u(t);
K(n, function(e) {
switch (e) {
case "option":
te(n, e), P(";");
break;

case "reserved":
Z(n.reserved || (n.reserved = []), !0), n.reserved === r && (n.reserved = []);
break;

default:
var t = n, o = e;
if (!I.test(o)) throw z(o, "name");
P("=");
var a = Y(j(), !0), i = {
options: r,
getOption: function(e) {
return this.options[e];
},
setOption: function(e, t) {
f.prototype.setOption.call(i, e, t);
},
setParsedOption: function() {
return r;
}
};
return K(i, function(e) {
if ("option" !== e) throw z(e);
te(i, e), P(";");
}, function() {
ne(i);
}), void t.add(o, a, i.comment, i.parsedOptions || i.options);
}
}), e.add(n), e === W && H.push(n);
}
function te(e, t) {
var n = !0;
for ("option" === t && (t = j()); "=" !== t; ) {
if (null === t) throw z(t, "end of input");
if ("(" === t && (o = j(), P(")"), t = "(" + o + ")"), n) {
if (n = !1, t.includes(".") && !t.includes("(")) {
var o = t.split("."), a = o[0] + ".";
t = o[1];
continue;
}
a = t;
} else u = u ? u + t : t;
t = j();
}
var i, s, l = function e(t, n, o) {
o === r && (o = 0);
if (o > p.recursionLimit) throw Error("max depth exceeded");
if (P("{", !0)) {
for (var a = {}; !P("}", !0); ) {
if (!I.test(O = j())) throw z(O, "name");
if (null === O) throw z(O, "end of input");
var i, s, l = O;
if (P(":", !0), "{" === k()) i = e(t, n + "." + O, o + 1); else if ("[" === k()) {
if (i = [], P("[", !0)) {
for (;s = q(!0), i.push(s), P(",", !0); ) ;
P("]"), void 0 !== s && re(t, n + "." + O, s);
}
} else i = q(!0), re(t, n + "." + O, i);
var u = a[l];
u && (i = [].concat(u).concat(i)), "__proto__" !== l && (a[l] = i), P(",", !0), 
P(";", !0);
}
return a;
}
var c = q(!0);
re(t, n, c);
return c;
}(e, l = u ? a.concat(u) : a), u = u && "." === u[0] ? u.slice(1) : u;
i = a = a && "." === a[a.length - 1] ? a.slice(0, -1) : a, l = l, s = u, (e = e).setParsedOption && e.setParsedOption(i, l, s);
}
function re(e, t, r) {
W === e && /^features\./.test(t) ? U[t] = r : e.setOption && e.setOption(t, r);
}
function ne(e) {
if (P("[", !0)) {
for (;te(e, "option"), P(",", !0); ) ;
P("]");
}
}
for (;null !== (O = j()); ) switch (O) {
case "package":
if (!B) throw z(O);
if (G !== r) throw z("package");
if (G = j(), !w.test(G)) throw z(G, "name");
W = W.define(G), P(";");
break;

case "import":
if (!B) throw z(O);
switch (T = void 0, k()) {
case "weak":
T = x = x || [], j();
break;

case "public":
j();

default:
T = R = R || [];
}
F = J(), P(";"), T.push(F);
break;

case "syntax":
if (!B) throw z(O);
if (P("="), (D = J()) < 2023) throw z(D, "syntax");
P(";");
break;

case "edition":
if (!B) throw z(O);
if (P("="), D = J(), ![ "2023" ].includes(D)) throw z(D, "edition");
P(";");
break;

case "option":
te(W, O), P(";", !0);
break;

default:
if ($(W, O, 0)) {
B = !1;
continue;
}
throw z(O);
}
return H.forEach(function(e) {
e.u = D, Object.keys(U).forEach(function(t) {
e.getOption(t) === r && e.setOption(t, U[t], !0);
});
}), M.filename = null, {
package: G,
imports: R,
weakImports: x,
root: t
};
}
}, {
16: 16,
17: 17,
21: 21,
23: 23,
25: 25,
26: 26,
30: 30,
34: 34,
35: 35,
36: 36,
37: 37,
38: 38
} ],
28: [ function(e, t) {
t.exports = l;
var n, o = e(41), a = o.LongBits, i = o.utf8;
function s(e, t) {
return RangeError("index out of range: " + e.pos + " + " + (t || 1) + " > " + e.len);
}
function l(e) {
this.buf = e, this.pos = 0, this.len = e.length;
}
function u() {
return o.Buffer ? function(e) {
return (l.create = function(e) {
return o.Buffer.isBuffer(e) ? new n(e) : d(e);
})(e);
} : d;
}
var c, d = "undefined" != typeof Uint8Array ? function(e) {
if (e instanceof Uint8Array || Array.isArray(e)) return new l(e);
throw Error("illegal buffer");
} : function(e) {
if (Array.isArray(e)) return new l(e);
throw Error("illegal buffer");
};
function f() {
var e = new a(0, 0), t = 0;
if (!(4 < this.len - this.pos)) {
for (;t < 3; ++t) {
if (this.pos >= this.len) throw s(this);
if (e.lo = (e.lo | (127 & this.buf[this.pos]) << 7 * t) >>> 0, this.buf[this.pos++] < 128) return e;
}
return e.lo = (e.lo | (127 & this.buf[this.pos++]) << 7 * t) >>> 0, e;
}
for (;t < 4; ++t) if (e.lo = (e.lo | (127 & this.buf[this.pos]) << 7 * t) >>> 0, 
this.buf[this.pos++] < 128) return e;
if (e.lo = (e.lo | (127 & this.buf[this.pos]) << 28) >>> 0, e.hi = (e.hi | (127 & this.buf[this.pos]) >> 4) >>> 0, 
this.buf[this.pos++] < 128) return e;
if (t = 0, 4 < this.len - this.pos) {
for (;t < 5; ++t) if (e.hi = (e.hi | (127 & this.buf[this.pos]) << 7 * t + 3) >>> 0, 
this.buf[this.pos++] < 128) return e;
} else for (;t < 5; ++t) {
if (this.pos >= this.len) throw s(this);
if (e.hi = (e.hi | (127 & this.buf[this.pos]) << 7 * t + 3) >>> 0, this.buf[this.pos++] < 128) return e;
}
throw Error("invalid varint encoding");
}
function m(e, t) {
return (e[t - 4] | e[t - 3] << 8 | e[t - 2] << 16 | e[t - 1] << 24) >>> 0;
}
function p() {
if (this.pos + 8 > this.len) throw s(this, 8);
return new a(m(this.buf, this.pos += 4), m(this.buf, this.pos += 4));
}
l.create = u(), l.prototype._ = o.Array.prototype.subarray || o.Array.prototype.slice, 
l.prototype.uint32 = (c = 4294967295, function() {
if (c = (127 & this.buf[this.pos]) >>> 0, this.buf[this.pos++] < 128 || (c = (c | (127 & this.buf[this.pos]) << 7) >>> 0, 
this.buf[this.pos++] < 128 || (c = (c | (127 & this.buf[this.pos]) << 14) >>> 0, 
this.buf[this.pos++] < 128 || (c = (c | (127 & this.buf[this.pos]) << 21) >>> 0, 
this.buf[this.pos++] < 128 || (c = (c | (15 & this.buf[this.pos]) << 28) >>> 0, 
this.buf[this.pos++] < 128 || !((this.pos += 5) > this.len)))))) return c;
throw this.pos = this.len, s(this, 10);
}), l.prototype.int32 = function() {
return 0 | this.uint32();
}, l.prototype.sint32 = function() {
var e = this.uint32();
return e >>> 1 ^ -(1 & e) | 0;
}, l.prototype.bool = function() {
return 0 !== this.uint32();
}, l.prototype.fixed32 = function() {
if (this.pos + 4 > this.len) throw s(this, 4);
return m(this.buf, this.pos += 4);
}, l.prototype.sfixed32 = function() {
if (this.pos + 4 > this.len) throw s(this, 4);
return 0 | m(this.buf, this.pos += 4);
}, l.prototype.float = function() {
if (this.pos + 4 > this.len) throw s(this, 4);
var e = o.float.readFloatLE(this.buf, this.pos);
return this.pos += 4, e;
}, l.prototype.double = function() {
if (this.pos + 8 > this.len) throw s(this, 4);
var e = o.float.readDoubleLE(this.buf, this.pos);
return this.pos += 8, e;
}, l.prototype.bytes = function() {
var e = this.uint32(), t = this.pos, r = this.pos + e;
if (r > this.len) throw s(this, e);
return this.pos += e, Array.isArray(this.buf) ? this.buf.slice(t, r) : t === r ? (e = o.Buffer) ? e.alloc(0) : new this.buf.constructor(0) : this._.call(this.buf, t, r);
}, l.prototype.string = function() {
var e = this.bytes();
return i.read(e, 0, e.length);
}, l.prototype.skip = function(e) {
if ("number" == typeof e) {
if (this.pos + e > this.len) throw s(this, e);
this.pos += e;
} else do {
if (this.pos >= this.len) throw s(this);
} while (128 & this.buf[this.pos++]);
return this;
}, l.recursionLimit = o.recursionLimit, l.prototype.skipType = function(e, t) {
if (l.recursionLimit < (t = t === r ? 0 : t)) throw Error("maximum nesting depth exceeded");
switch (e) {
case 0:
this.skip();
break;

case 1:
this.skip(8);
break;

case 2:
this.skip(this.uint32());
break;

case 3:
for (;4 != (e = 7 & this.uint32()); ) this.skipType(e, t + 1);
break;

case 5:
this.skip(4);
break;

default:
throw Error("invalid wire type " + e + " at offset " + this.pos);
}
return this;
}, l.l = function(e) {
n = e, l.create = u(), n.l();
var t = o.Long ? "toLong" : "toNumber";
o.merge(l.prototype, {
int64: function() {
return f.call(this)[t](!1);
},
uint64: function() {
return f.call(this)[t](!0);
},
sint64: function() {
return f.call(this).zzDecode()[t](!1);
},
fixed64: function() {
return p.call(this)[t](!0);
},
sfixed64: function() {
return p.call(this)[t](!1);
}
});
};
}, {
41: 41
} ],
29: [ function(e, t) {
t.exports = o;
var r = e(28), n = ((o.prototype = Object.create(r.prototype)).constructor = o, 
e(41));
function o(e) {
r.call(this, e);
}
o.l = function() {
n.Buffer && (o.prototype._ = n.Buffer.prototype.slice);
}, o.prototype.string = function() {
var e = this.uint32();
return this.buf.utf8Slice ? this.buf.utf8Slice(this.pos, this.pos = Math.min(this.pos + e, this.len)) : this.buf.toString("utf-8", this.pos, this.pos = Math.min(this.pos + e, this.len));
}, o.l();
}, {
28: 28,
41: 41
} ],
30: [ function(e, t) {
t.exports = d;
var n, o, a, i = e(24), s = (((d.prototype = Object.create(i.prototype)).constructor = d).className = "Root", 
e(17)), l = e(16), u = e(26), c = e(38);
function d(e) {
i.call(this, "", e), this.deferred = [], this.files = [], this.u = "proto2", this.y = {};
}
function f() {}
d.fromJSON = function(e, t, r) {
return r = c.checkDepth(r), t = t || new d(), e.options && t.setOptions(e.options), 
t.addJSON(e.nested, r).resolveAll();
}, d.prototype.resolvePath = c.path.resolve, d.prototype.fetch = c.fetch, d.prototype.load = function e(t, n, i) {
"function" == typeof n && (i = n, n = r);
var s = this;
if (!i) return c.asPromise(e, s, t, n);
var l = i === f;
function u(e, t) {
if (i) {
if (l) throw e;
t && t.resolveAll();
var r = i;
i = null, r(e, t);
}
}
function d(e) {
var t = e.lastIndexOf("google/protobuf/");
return -1 < t && (e = e.substring(t)) in a ? e : null;
}
function m(e, t, a) {
a === r && (a = 0);
try {
if (a > c.recursionLimit) throw Error("max depth exceeded");
if (c.isString(t) && "{" == (t[0] || "") && (t = JSON.parse(t)), c.isString(t)) {
o.filename = e;
var i, f = o(t, s, n), m = 0;
if (f.imports) for (;m < f.imports.length; ++m) (i = d(f.imports[m]) || s.resolvePath(e, f.imports[m])) && p(i, !1, a + 1);
if (f.weakImports) for (m = 0; m < f.weakImports.length; ++m) (i = d(f.weakImports[m]) || s.resolvePath(e, f.weakImports[m])) && p(i, !0, a + 1);
} else s.setOptions(t.options).addJSON(t.nested);
} catch (e) {
u(e);
}
l || h || u(null, s);
}
function p(e, t, n) {
if (n === r && (n = 0), e = d(e) || e, !~s.files.indexOf(e)) if (s.files.push(e), 
e in a) l ? m(e, a[e], n) : (++h, setTimeout(function() {
--h, m(e, a[e], n);
})); else if (l) {
var o;
try {
o = c.fs.readFileSync(e).toString("utf8");
} catch (o) {
return void (t || u(o));
}
m(e, o, n);
} else ++h, s.fetch(e, function(r, o) {
--h, i && (r ? t ? h || u(null, s) : u(r) : m(e, o, n));
});
}
var h = 0;
c.isString(t) && (t = [ t ]);
for (var g, v = 0; v < t.length; ++v) (g = s.resolvePath("", t[v])) && p(g);
return l ? s.resolveAll() : h || u(null, s), s;
}, d.prototype.loadSync = function(e, t) {
if (c.isNode) return this.load(e, t, f);
throw Error("not supported");
}, d.prototype.resolveAll = function() {
if (!this.w) return this;
if (this.deferred.length) throw Error("unresolvable extensions: " + this.deferred.map(function(e) {
return "'extend " + e.extend + "' in " + e.parent.fullName;
}).join(", "));
return i.prototype.resolveAll.call(this);
};
var m = /^[A-Z]/;
function p(e, t) {
var n, o = t.parent.lookup(t.extend);
if (o) return n = new s(t.fullName, t.id, t.type, t.rule, r, t.options), o.get(n.name) || ((n.declaringField = t).extensionField = n, 
o.add(n)), 1;
}
d.prototype.k = function(e) {
if (e instanceof s) e.extend === r || e.extensionField || p(0, e) || this.deferred.push(e); else if (e instanceof l) m.test(e.name) && (e.parent[e.name] = e.values); else if (!(e instanceof u)) {
if (e instanceof n) for (var t = 0; t < this.deferred.length; ) p(0, this.deferred[t]) ? this.deferred.splice(t, 1) : ++t;
for (var o = 0; o < e.nestedArray.length; ++o) this.k(e.p[o]);
m.test(e.name) && (e.parent[e.name] = e);
}
(e instanceof n || e instanceof l || e instanceof s) && (this.y[e.fullName] = e);
}, d.prototype.O = function(e) {
var t;
if (e instanceof s) e.extend !== r && (e.extensionField ? (e.extensionField.parent.remove(e.extensionField), 
e.extensionField = null) : -1 < (t = this.deferred.indexOf(e)) && this.deferred.splice(t, 1)); else if (e instanceof l) m.test(e.name) && delete e.parent[e.name]; else if (e instanceof i) {
for (var n = 0; n < e.nestedArray.length; ++n) this.O(e.p[n]);
m.test(e.name) && delete e.parent[e.name];
}
delete this.y[e.fullName];
}, d.l = function(e, t, r) {
n = e, o = t, a = r;
};
}, {
16: 16,
17: 17,
24: 24,
26: 26,
38: 38
} ],
31: [ function(e, t) {
t.exports = Object.create(null);
}, {} ],
32: [ function(e, t, r) {
r.Service = e(33);
}, {
33: 33
} ],
33: [ function(e, t) {
t.exports = o;
var n = e(41);
function o(e, t, r) {
if ("function" != typeof e) throw TypeError("rpcImpl must be a function");
n.EventEmitter.call(this), this.rpcImpl = e, this.requestDelimited = !!t, this.responseDelimited = !!r;
}
((o.prototype = Object.create(n.EventEmitter.prototype)).constructor = o).prototype.rpcCall = function e(t, o, a, i, s) {
if (!i) throw TypeError("request must be specified");
var l = this;
if (!s) return n.asPromise(e, l, t, o, a, i);
if (!l.rpcImpl) return setTimeout(function() {
s(Error("already ended"));
}, 0), r;
try {
return l.rpcImpl(t, o[l.requestDelimited ? "encodeDelimited" : "encode"](i).finish(), function(e, n) {
if (e) return l.emit("error", e, t), s(e);
if (null === n) return l.end(!0), r;
if (!(n instanceof a)) try {
n = a[l.responseDelimited ? "decodeDelimited" : "decode"](n);
} catch (e) {
return l.emit("error", e, t), s(e);
}
return l.emit("data", n, t), s(null, n);
});
} catch (e) {
return l.emit("error", e, t), setTimeout(function() {
s(e);
}, 0), r;
}
}, o.prototype.end = function(e) {
return this.rpcImpl && (e || this.rpcImpl(null, null, null), this.rpcImpl = null, 
this.emit("end").off()), this;
};
}, {
41: 41
} ],
34: [ function(e, t) {
t.exports = s;
var n = e(24), o = (((s.prototype = Object.create(n.prototype)).constructor = s).className = "Service", 
e(23)), a = e(38), i = e(32);
function s(e, t) {
n.call(this, e, t), this.methods = {}, this.x = null;
}
function l(e) {
return e.x = null, e;
}
s.fromJSON = function(e, t, r) {
r = a.checkDepth(r);
var n = new s(e, t.options);
if (t.methods) for (var i = Object.keys(t.methods), l = 0; l < i.length; ++l) n.add(o.fromJSON(i[l], t.methods[i[l]]));
return t.nested && n.addJSON(t.nested, r), t.edition && (n.u = t.edition), n.comment = t.comment, 
n.h = "proto3", n;
}, s.prototype.toJSON = function(e) {
var t = n.prototype.toJSON.call(this, e), o = !!e && !!e.keepComments;
return a.toObject([ "edition", this.a(), "options", t && t.options || r, "methods", n.arrayToJSON(this.methodsArray, e) || {}, "nested", t && t.nested || r, "comment", o ? this.comment : r ]);
}, Object.defineProperty(s.prototype, "methodsArray", {
get: function() {
return this.x || (this.x = a.toArray(this.methods));
}
}), s.prototype.get = function(e) {
return Object.prototype.hasOwnProperty.call(this.methods, e) ? this.methods[e] : n.prototype.get.call(this, e);
}, s.prototype.resolveAll = function() {
if (this.w) {
n.prototype.resolve.call(this);
for (var e = this.methodsArray, t = 0; t < e.length; ++t) e[t].resolve();
}
return this;
}, s.prototype.m = function(e) {
return this.b && (e = this.u || e, n.prototype.m.call(this, e), this.methodsArray.forEach(function(t) {
t.m(e);
})), this;
}, s.prototype.add = function(e) {
if (this.get(e.name)) throw Error("duplicate name '" + e.name + "' in " + this);
return e instanceof o ? "__proto__" === e.name ? this : l((this.methods[e.name] = e).parent = this) : n.prototype.add.call(this, e);
}, s.prototype.remove = function(e) {
if (e instanceof o) {
if (this.methods[e.name] !== e) throw Error(e + " is not a member of " + this);
return delete this.methods[e.name], e.parent = null, l(this);
}
return n.prototype.remove.call(this, e);
}, s.prototype.create = function(e, t, r) {
for (var n, o = new i.Service(e, t, r), s = 0; s < this.methodsArray.length; ++s) o[a.lcFirst((n = this.x[s]).resolve().name).replace(/[^$\w_]/g, "")] = function(e, t, r) {
return function(n, o) {
return i.Service.prototype.rpcCall.call(this, e, t, r, n, o);
};
}(n, n.resolvedRequestType.ctor, n.resolvedResponseType.ctor);
return o;
};
}, {
23: 23,
24: 24,
32: 32,
38: 38
} ],
35: [ function(e, t) {
t.exports = m;
var n = /[\s{}=;:[\],'"()<>]/g, o = /(?:"([^"\\]*(?:\\.[^"\\]*)*)")/g, a = /(?:'([^'\\]*(?:\\.[^'\\]*)*)')/g, i = /^ *[*/]+ */, s = /^\s*\*?\/*/, l = /\n/g, u = /\s/, c = /\\(.?)/g, d = {
0: "\0",
r: "\r",
n: "\n",
t: "\t"
};
function f(e) {
return e.replace(c, function(e, t) {
switch (t) {
case "\\":
case "":
return t;

default:
return d[t] || "";
}
});
}
function m(e, t) {
e = e.toString();
var c = 0, d = e.length, m = 1, p = 0, h = {}, g = [], v = null;
function y(e) {
return Error("illegal " + e + " (line " + m + ")");
}
function b(t) {
return e[0 | t] || "";
}
function _(r, n, o) {
var a, u = {
type: e[0 | r++] || "",
lineEmpty: !1,
leading: o
}, c = r - (o = t ? 2 : 3);
do {
if (--c < 0 || "\n" == (a = e[0 | c] || "")) {
u.lineEmpty = !0;
break;
}
} while (" " === a || "\t" === a);
for (var d = e.substring(r, n).split(l), f = 0; f < d.length; ++f) d[f] = d[f].replace(t ? s : i, "").trim();
u.text = d.join("\n").trim(), h[m] = u, p = m;
}
function S(t) {
var r = I(t);
t = e.substring(t, r);
return /^\s*\/\//.test(t);
}
function I(e) {
for (var t = e; t < d && "\n" !== b(t); ) t++;
return t;
}
function w() {
if (0 < g.length) return g.shift();
if (v) {
var r = "'" === v ? a : o, i = (r.lastIndex = c - 1, r.exec(e));
if (i) return c = r.lastIndex, M(v), v = null, f(i[1]);
throw y("string");
}
var s, l, p, h, w, C = 0 === c;
do {
if (c === d) return null;
for (s = !1; u.test(p = b(c)); ) if ("\n" === p && (C = !0, ++m), ++c === d) return null;
if ("/" === b(c)) {
if (++c === d) throw y("comment");
if ("/" === b(c)) if (t) {
if (w = !1, S((h = c) - 1)) for (w = !0; (c = I(c)) !== d && (c++, C && S(c)); ) ; else c = Math.min(d, I(c) + 1);
w && (_(h, c, C), C = !0), m++;
} else {
for (w = "/" === b(h = c + 1); "\n" !== b(++c); ) if (c === d) return null;
++c, w && (_(h, c - 1, C), C = !0), ++m;
} else {
if ("*" !== (p = b(c))) return "/";
h = c + 1, w = t || "*" === b(h);
do {
if ("\n" === p && ++m, ++c === d) throw y("comment");
} while (l = p, p = b(c), "*" !== l || "/" !== p);
++c, w && (_(h, c - 2, C), C = !0);
}
s = !0;
}
} while (s);
var G = c;
if (n.lastIndex = 0, !n.test(b(G++))) for (;G < d && !n.test(b(G)); ) ++G;
return '"' != (r = e.substring(c, c = G)) && "'" != r || (v = r), r;
}
function M(e) {
g.push(e);
}
function C() {
if (!g.length) {
var e = w();
if (null === e) return null;
M(e);
}
return g[0];
}
return Object.defineProperty({
next: w,
peek: C,
push: M,
skip: function(e, t) {
var r = C();
if (r === e) return w(), !0;
if (t) return !1;
throw y("token '" + r + "', '" + e + "' expected");
},
cmnt: function(e) {
var n, o = null;
return e === r ? (n = h[m - 1], delete h[m - 1], n && (t || "*" === n.type || n.lineEmpty) && (o = n.leading ? n.text : null)) : (p < e && C(), 
n = h[e], delete h[e], !n || n.lineEmpty || !t && "/" !== n.type || (o = n.leading ? null : n.text)), 
o;
}
}, "line", {
get: function() {
return m;
}
});
}
m.unescape = f;
}, {} ],
36: [ function(e, t) {
t.exports = y;
var n = e(24), o = (((y.prototype = Object.create(n.prototype)).constructor = y).className = "Type", 
e(16)), a = e(26), i = e(17), s = e(21), l = e(34), u = e(22), c = e(28), d = e(45), f = e(38), m = e(15), p = e(14), h = e(43), g = e(13), v = e(44);
function y(e, t) {
e = e.replace(/\W/g, ""), n.call(this, e, t), this.fields = {}, this.oneofs = r, 
this.extensions = r, this.reserved = r, this.group = r, this.A = null, this.e = null, 
this.T = null, this.I = null;
}
function b(e) {
return e.A = e.e = e.T = null, delete e.encode, delete e.decode, delete e.verify, 
e;
}
Object.defineProperties(y.prototype, {
fieldsById: {
get: function() {
if (!this.A) {
this.A = {};
for (var e = Object.keys(this.fields), t = 0; t < e.length; ++t) {
var r = this.fields[e[t]], n = r.id;
if (this.A[n]) throw Error("duplicate id " + n + " in " + this);
this.A[n] = r;
}
}
return this.A;
}
},
fieldsArray: {
get: function() {
return this.e || (this.e = f.toArray(this.fields));
}
},
oneofsArray: {
get: function() {
return this.T || (this.T = f.toArray(this.oneofs));
}
},
ctor: {
get: function() {
return this.I || (this.ctor = y.generateConstructor(this)());
},
set: function(e) {
for (var t = e.prototype, r = (t instanceof u || ((e.prototype = new u()).constructor = e, 
f.merge(e.prototype, t)), e.$type = e.prototype.$type = this, f.merge(e, u, !0), 
this.I = e, 0); r < this.fieldsArray.length; ++r) this.e[r].resolve();
var n = {};
for (r = 0; r < this.oneofsArray.length; ++r) n[this.T[r].resolve().name] = {
get: f.oneOfGetter(this.T[r].oneof),
set: f.oneOfSetter(this.T[r].oneof)
};
r && Object.defineProperties(e.prototype, n);
}
}
}), y.generateConstructor = function(e) {
for (var t, r = f.codegen([ "p" ], e.name), n = 0; n < e.fieldsArray.length; ++n) (t = e.e[n]).map ? r("this%s={}", f.safeProp(t.name)) : t.repeated && r("this%s=[]", f.safeProp(t.name));
return r('if(p)for(var ks=Object.keys(p),i=0;i<ks.length;++i)if(p[ks[i]]!=null&&ks[i]!=="__proto__")')("this[ks[i]]=p[ks[i]]");
}, y.fromJSON = function(e, t, u) {
if ((u = u === r ? 0 : u) > f.nestingLimit) throw Error("max depth exceeded");
for (var c = new y(e, t.options), d = (c.extensions = t.extensions, c.reserved = t.reserved, 
Object.keys(t.fields)), m = 0; m < d.length; ++m) c.add((void 0 !== t.fields[d[m]].keyType ? s : i).fromJSON(d[m], t.fields[d[m]]));
if (t.oneofs) for (d = Object.keys(t.oneofs), m = 0; m < d.length; ++m) c.add(a.fromJSON(d[m], t.oneofs[d[m]]));
if (t.nested) for (d = Object.keys(t.nested), m = 0; m < d.length; ++m) {
var p = t.nested[d[m]];
c.add((p.id !== r ? i : p.fields !== r ? y : p.values !== r ? o : p.methods !== r ? l : n).fromJSON(d[m], p, u + 1));
}
return t.extensions && t.extensions.length && (c.extensions = t.extensions), t.reserved && t.reserved.length && (c.reserved = t.reserved), 
t.group && (c.group = !0), t.comment && (c.comment = t.comment), t.edition && (c.u = t.edition), 
c.h = "proto3", c;
}, y.prototype.toJSON = function(e) {
var t = n.prototype.toJSON.call(this, e), o = !!e && !!e.keepComments;
return f.toObject([ "edition", this.a(), "options", t && t.options || r, "oneofs", n.arrayToJSON(this.oneofsArray, e), "fields", n.arrayToJSON(this.fieldsArray.filter(function(e) {
return !e.declaringField;
}), e) || {}, "extensions", this.extensions && this.extensions.length ? this.extensions : r, "reserved", this.reserved && this.reserved.length ? this.reserved : r, "group", this.group || r, "nested", t && t.nested || r, "comment", o ? this.comment : r ]);
}, y.prototype.resolveAll = function() {
if (this.w) {
n.prototype.resolveAll.call(this);
for (var e = this.oneofsArray, t = 0; t < e.length; ) e[t++].resolve();
var r = this.fieldsArray;
for (t = 0; t < r.length; ) r[t++].resolve();
}
return this;
}, y.prototype.m = function(e) {
return this.b && (e = this.u || e, n.prototype.m.call(this, e), this.oneofsArray.forEach(function(t) {
t.o(e);
}), this.fieldsArray.forEach(function(t) {
t.o(e);
})), this;
}, y.prototype.get = function(e) {
return Object.prototype.hasOwnProperty.call(this.fields, e) ? this.fields[e] : this.oneofs && Object.prototype.hasOwnProperty.call(this.oneofs, e) ? this.oneofs[e] : this.nested && Object.prototype.hasOwnProperty.call(this.nested, e) ? this.nested[e] : null;
}, y.prototype.add = function(e) {
if (this.get(e.name)) throw Error("duplicate name '" + e.name + "' in " + this);
if (e instanceof i && e.extend === r) {
if ((this.A || this.fieldsById)[e.id]) throw Error("duplicate id " + e.id + " in " + this);
if (this.isReservedId(e.id)) throw Error("id " + e.id + " is reserved in " + this);
if (this.isReservedName(e.name) || "$" == (e.name[0] || "")) throw Error("name '" + e.name + "' is reserved in " + this);
return "__proto__" === e.name ? this : (e.parent && e.parent.remove(e), (this.fields[e.name] = e).message = this, 
e.onAdd(this), b(this));
}
if (e instanceof a) {
if ("$" == (e.name[0] || "")) throw Error("name '" + e.name + "' is reserved in " + this);
return "__proto__" === e.name ? this : (this.oneofs || (this.oneofs = {}), (this.oneofs[e.name] = e).onAdd(this), 
b(this));
}
return n.prototype.add.call(this, e);
}, y.prototype.remove = function(e) {
if (e instanceof i && e.extend === r) {
if (this.fields && this.fields[e.name] === e) return delete this.fields[e.name], 
e.parent = null, e.onRemove(this), b(this);
throw Error(e + " is not a member of " + this);
}
if (e instanceof a) {
if (this.oneofs && this.oneofs[e.name] === e) return delete this.oneofs[e.name], 
e.parent = null, e.onRemove(this), b(this);
throw Error(e + " is not a member of " + this);
}
return n.prototype.remove.call(this, e);
}, y.prototype.isReservedId = function(e) {
return n.isReservedId(this.reserved, e);
}, y.prototype.isReservedName = function(e) {
return n.isReservedName(this.reserved, e);
}, y.prototype.create = function(e) {
return new this.ctor(e);
}, y.prototype.setup = function() {
for (var e = this.fullName, t = [], r = 0; r < this.fieldsArray.length; ++r) t.push(this.e[r].resolve().resolvedType);
this.encode = m(this)({
Writer: d,
types: t,
util: f
}), this.decode = p(this)({
Reader: c,
types: t,
util: f
}), this.verify = h(this)({
types: t,
util: f
}), this.fromObject = g.fromObject(this)({
types: t,
util: f
}), this.toObject = g.toObject(this)({
types: t,
util: f
});
var n;
return (e = v[e]) && ((n = Object.create(this)).fromObject = this.fromObject, this.fromObject = e.fromObject.bind(n), 
n.toObject = this.toObject, this.toObject = e.toObject.bind(n)), this;
}, y.prototype.encode = function(e, t) {
return this.setup().encode.apply(this, arguments);
}, y.prototype.encodeDelimited = function(e, t) {
return this.encode(e, t && t.len ? t.fork() : t).ldelim();
}, y.prototype.decode = function(e, t, r, n) {
return this.setup().decode(e, t, r, n);
}, y.prototype.decodeDelimited = function(e) {
return e instanceof c || (e = c.create(e)), this.decode(e, e.uint32());
}, y.prototype.verify = function(e, t) {
return this.setup().verify(e, t);
}, y.prototype.fromObject = function(e, t) {
return this.setup().fromObject(e, t);
}, y.prototype.toObject = function(e, t) {
return this.setup().toObject.apply(this, arguments);
}, y.d = function(e) {
return function(t) {
f.decorateType(t, e);
};
};
}, {
13: 13,
14: 14,
15: 15,
16: 16,
17: 17,
21: 21,
22: 22,
24: 24,
26: 26,
28: 28,
34: 34,
38: 38,
43: 43,
44: 44,
45: 45
} ],
37: [ function(e, t, r) {
e = e(38);
var n = [ "double", "float", "int32", "uint32", "sint32", "fixed32", "sfixed32", "int64", "uint64", "sint64", "fixed64", "sfixed64", "bool", "string", "bytes" ];
function o(e, t) {
var r = 0, o = Object.create(null);
for (t |= 0; r < e.length; ) o[n[r + t]] = e[r++];
return o;
}
r.basic = o([ 1, 5, 0, 0, 0, 5, 5, 0, 0, 0, 1, 1, 0, 2, 2 ]), r.defaults = o([ 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, !1, "", e.emptyArray, null ]), 
r.long = o([ 0, 0, 0, 1, 1 ], 7), r.mapKey = o([ 0, 0, 0, 5, 5, 0, 0, 0, 1, 1, 0, 2 ], 2), 
r.packed = o([ 1, 5, 0, 0, 0, 5, 5, 0, 0, 0, 1, 1, 0 ]);
}, {
38: 38
} ],
38: [ function(e, t) {
var n, o, a = t.exports = e(41), i = e(31), s = (a.codegen = e(3), a.fetch = e(5), 
a.path = e(8), a.patterns = e(42), a.patterns.reservedRe), l = (a.fs = e(39), a.checkDepth = function(e) {
if ((e = e === r ? 0 : e) > a.recursionLimit) throw Error("max depth exceeded");
return e;
}, a.toArray = function(e) {
if (e) {
for (var t = Object.keys(e), r = Array(t.length), n = 0; n < t.length; ) r[n] = e[t[n++]];
return r;
}
return [];
}, a.toObject = function(e) {
for (var t = {}, n = 0; n < e.length; ) {
var o = e[n++], a = e[n++];
a !== r && (t[o] = a);
}
return t;
}, a.isReserved = function(e) {
return s.test(e);
}, a.safeProp = function(e) {
return !/^[$\w_]+$/.test(e) || s.test(e) ? "[" + JSON.stringify(e) + "]" : "." + e;
}, a.ucFirst = function(e) {
return (e[0] || "").toUpperCase() + e.substring(1);
}, /_([a-z])/g), u = (a.camelCase = function(e) {
return e.substring(0, 1) + e.substring(1).replace(l, function(e, t) {
return t.toUpperCase();
});
}, a.compareFieldsById = function(e, t) {
return e.id - t.id;
}, a.decorateType = function(t, r) {
return t.$type ? (r && t.$type.name !== r && (a.decorateRoot.remove(t.$type), t.$type.name = r, 
a.decorateRoot.add(t.$type)), t.$type) : (r = new (n = n || e(36))(r || t.name), 
a.decorateRoot.add(r), r.ctor = t, Object.defineProperty(t, "$type", {
value: r,
enumerable: !1
}), Object.defineProperty(t.prototype, "$type", {
value: r,
enumerable: !1
}), r);
}, 0);
a.decorateEnum = function(t) {
var r;
return t.$type || (r = new (o = o || e(16))("Enum" + u++, t), a.decorateRoot.add(r), 
Object.defineProperty(t, "$type", {
value: r,
enumerable: !1
}), r);
}, a.setProperty = function(e, t, r, n) {
if ("object" != typeof e) throw TypeError("dst must be an object");
if (!t) throw TypeError("path must be specified");
if ((t = t.split(".")).length > a.recursionLimit) throw Error("max depth exceeded");
return function e(t, r, o) {
var i = r.shift();
if (!a.isUnsafeProperty(i)) if (0 < r.length) t[i] = e(t[i] || {}, r, o); else {
if ((r = t[i]) && n) return t;
r && (o = [].concat(r).concat(o)), t[i] = o;
}
return t;
}(e, t, r);
}, Object.defineProperty(a, "decorateRoot", {
get: function() {
return i.decorated || (i.decorated = new (e(30))());
}
});
}, {
16: 16,
3: 3,
30: 30,
31: 31,
36: 36,
39: 39,
41: 41,
42: 42,
5: 5,
8: 8
} ],
39: [ function(e, t) {
var r = null;
try {
(r = e(11)) && r.readFile && r.readFileSync || (r = null);
} catch (e) {}
t.exports = r;
}, {
11: 11
} ],
40: [ function(e, t) {
t.exports = n;
var r = e(41);
function n(e, t) {
this.lo = e >>> 0, this.hi = t >>> 0;
}
var o = n.zero = new n(0, 0), a = (o.toNumber = function() {
return 0;
}, o.zzEncode = o.zzDecode = function() {
return this;
}, o.length = function() {
return 1;
}, n.zeroHash = "\0\0\0\0\0\0\0\0", n.fromNumber = function(e) {
var t, r;
return 0 === e ? o : (r = (e = (t = e < 0) ? -e : e) >>> 0, e = (e - r) / 4294967296 >>> 0, 
t && (e = ~e >>> 0, r = ~r >>> 0, 4294967295 < ++r && (r = 0, 4294967295 < ++e && (e = 0))), 
new n(r, e));
}, n.from = function(e) {
if ("number" == typeof e) return n.fromNumber(e);
if (r.isString(e)) {
if (!r.Long) return n.fromNumber(parseInt(e, 10));
e = r.Long.fromString(e);
}
return e.low || e.high ? new n(e.low >>> 0, e.high >>> 0) : o;
}, n.prototype.toNumber = function(e) {
var t;
return !e && this.hi >>> 31 ? (e = 1 + ~this.lo >>> 0, t = ~this.hi >>> 0, -(e + 4294967296 * (t = e ? t : t + 1 >>> 0))) : this.lo + 4294967296 * this.hi;
}, n.prototype.toLong = function(e) {
return r.Long ? new r.Long(0 | this.lo, 0 | this.hi, !!e) : {
low: 0 | this.lo,
high: 0 | this.hi,
unsigned: !!e
};
}, String.prototype.charCodeAt);
n.fromHash = function(e) {
return "\0\0\0\0\0\0\0\0" === e ? o : new n((a.call(e, 0) | a.call(e, 1) << 8 | a.call(e, 2) << 16 | a.call(e, 3) << 24) >>> 0, (a.call(e, 4) | a.call(e, 5) << 8 | a.call(e, 6) << 16 | a.call(e, 7) << 24) >>> 0);
}, n.prototype.toHash = function() {
return String.fromCharCode(255 & this.lo, this.lo >>> 8 & 255, this.lo >>> 16 & 255, this.lo >>> 24, 255 & this.hi, this.hi >>> 8 & 255, this.hi >>> 16 & 255, this.hi >>> 24);
}, n.prototype.zzEncode = function() {
var e = this.hi >> 31;
return this.hi = ((this.hi << 1 | this.lo >>> 31) ^ e) >>> 0, this.lo = (this.lo << 1 ^ e) >>> 0, 
this;
}, n.prototype.zzDecode = function() {
var e = -(1 & this.lo);
return this.lo = ((this.lo >>> 1 | this.hi << 31) ^ e) >>> 0, this.hi = (this.hi >>> 1 ^ e) >>> 0, 
this;
}, n.prototype.length = function() {
var e = this.lo, t = (this.lo >>> 28 | this.hi << 4) >>> 0, r = this.hi >>> 24;
return 0 == r ? 0 == t ? e < 16384 ? e < 128 ? 1 : 2 : e < 2097152 ? 3 : 4 : t < 16384 ? t < 128 ? 5 : 6 : t < 2097152 ? 7 : 8 : r < 128 ? 9 : 10;
};
}, {
41: 41
} ],
41: [ function(t, n, o) {
var a = o;
function i(e) {
return "__proto__" === e || "prototype" === e || "constructor" === e;
}
function s(e) {
for (var t = (n = "boolean" == typeof arguments[arguments.length - 1]) ? arguments.length - 1 : arguments.length, n = n && arguments[arguments.length - 1], o = 1; o < t; ++o) {
var a = arguments[o];
if (a) for (var s = Object.keys(a), l = 0; l < s.length; ++l) i(s[l]) || e[s[l]] !== r && n || (e[s[l]] = a[s[l]]);
}
return e;
}
function l(e) {
function t(e, r) {
if (!(this instanceof t)) return new t(e, r);
Object.defineProperty(this, "message", {
get: function() {
return e;
}
}), Error.captureStackTrace ? Error.captureStackTrace(this, t) : Object.defineProperty(this, "stack", {
value: Error().stack || ""
}), r && s(this, r);
}
return t.prototype = Object.create(Error.prototype, {
constructor: {
value: t,
writable: !0,
enumerable: !1,
configurable: !0
},
name: {
get: function() {
return e;
},
set: r,
enumerable: !1,
configurable: !0
},
toString: {
value: function() {
return this.name + ": " + this.message;
},
writable: !0,
enumerable: !1,
configurable: !0
}
}), t;
}
a.asPromise = t(1), a.base64 = t(2), a.EventEmitter = t(4), a.float = t(7), a.utf8 = t(10), 
a.pool = t(9), a.LongBits = t(40), a.isUnsafeProperty = i, a.isNode = !!("undefined" != typeof e && e && e.process && e.process.versions && e.process.versions.node), 
a.global = a.isNode && e || "undefined" != typeof window && window || "undefined" != typeof self && self || this, 
a.emptyArray = Object.freeze ? Object.freeze([]) : [], a.emptyObject = Object.freeze ? Object.freeze({}) : {}, 
a.isInteger = Number.isInteger || function(e) {
return "number" == typeof e && isFinite(e) && Math.floor(e) === e;
}, a.isString = function(e) {
return "string" == typeof e || e instanceof String;
}, a.isObject = function(e) {
return e && "object" == typeof e;
}, a.isset = a.isSet = function(e, t) {
var r = e[t];
return !(null == r || !Object.hasOwnProperty.call(e, t)) && ("object" != typeof r || 0 < (Array.isArray(r) ? r : Object.keys(r)).length);
}, a.Buffer = function() {
try {
var e = a.global.Buffer;
return e.prototype.utf8Write ? e : null;
} catch (e) {
return null;
}
}(), a.S = null, a.N = null, a.newBuffer = function(e) {
return "number" == typeof e ? a.Buffer ? a.N(e) : new a.Array(e) : a.Buffer ? a.S(e) : "undefined" == typeof Uint8Array ? e : new Uint8Array(e);
}, a.Array = "undefined" != typeof Uint8Array ? Uint8Array : Array, a.Long = a.global.dcodeIO && a.global.dcodeIO.Long || a.global.Long || function() {
try {
var e = t("long");
return e && e.isLong ? e : null;
} catch (e) {
return null;
}
}(), a.key2Re = /^true|false|0|1$/, a.key32Re = /^-?(?:0|[1-9][0-9]*)$/, a.key64Re = /^(?:[\\x00-\\xff]{8}|-?(?:0|[1-9][0-9]*))$/, 
a.longToHash = function(e) {
return e ? a.LongBits.from(e).toHash() : a.LongBits.zeroHash;
}, a.longFromHash = function(e, t) {
e = a.LongBits.fromHash(e);
return a.Long ? a.Long.fromBits(e.lo, e.hi, t) : e.toNumber(!!t);
}, a.merge = s, a.nestingLimit = 32, a.recursionLimit = 100, a.makeProp = function(e, t) {
Object.defineProperty(e, t, {
enumerable: !0,
configurable: !0,
writable: !0
});
}, a.lcFirst = function(e) {
return (e[0] || "").toLowerCase() + e.substring(1);
}, a.newError = l, a.ProtocolError = l("ProtocolError"), a.oneOfGetter = function(e) {
for (var t = {}, n = 0; n < e.length; ++n) t[e[n]] = 1;
return function() {
for (var e = Object.keys(this), n = e.length - 1; -1 < n; --n) if (1 === t[e[n]] && this[e[n]] !== r && null !== this[e[n]]) return e[n];
};
}, a.oneOfSetter = function(e) {
return function(t) {
for (var r = 0; r < e.length; ++r) e[r] !== t && delete this[e[r]];
};
}, a.toJSONOptions = {
longs: String,
enums: String,
bytes: String,
json: !0
}, a.l = function() {
var e = a.Buffer;
e ? (a.S = e.from !== Uint8Array.from && e.from || function(t, r) {
return new e(t, r);
}, a.N = e.allocUnsafe || function(t) {
return new e(t);
}) : a.S = a.N = null;
};
}, {
1: 1,
10: 10,
2: 2,
4: 4,
40: 40,
7: 7,
9: 9,
long: "long"
} ],
42: [ function(e, t, r) {
r.numberRe = /^(?![eE])[0-9]*(?:\.[0-9]*)?(?:[eE][+-]?[0-9]+)?$/, r.typeRefRe = /^(?:\.?[a-zA-Z_][a-zA-Z_0-9]*)(?:\.[a-zA-Z_][a-zA-Z_0-9]*)*$/, 
r.reservedRe = /^(?:do|if|in|for|let|new|try|var|case|else|enum|eval|false|null|this|true|void|with|break|catch|class|const|super|throw|while|yield|delete|export|import|public|return|static|switch|typeof|default|extends|finally|package|private|continue|debugger|function|arguments|interface|protected|implements|instanceof)$/;
}, {} ],
43: [ function(e, t) {
t.exports = function(e) {
var t = n.codegen([ "m", "n" ], e.name + "$verify")('if(typeof m!=="object"||m===null)')("return%j", "object expected")("if(n===undefined)n=0")("if(n>util.recursionLimit)")("return%j", "maximum nesting depth exceeded"), r = {};
e.oneofsArray.length && t("var p={}");
for (var i = 0; i < e.fieldsArray.length; ++i) {
var s, l = e.e[i].resolve(), u = "m" + n.safeProp(l.name);
l.optional && t("if(%s!=null&&Object.hasOwnProperty.call(m,%j)){", u, l.name), l.map ? (t("if(!util.isObject(%s))", u)("return%j", o(l, "object"))("var k=Object.keys(%s)", u)("for(var i=0;i<k.length;++i){"), 
function(e, t, r) {
switch (t.keyType) {
case "int32":
case "uint32":
case "sint32":
case "fixed32":
case "sfixed32":
e("if(!util.key32Re.test(%s))", r)("return%j", o(t, "integer key"));
break;

case "int64":
case "uint64":
case "sint64":
case "fixed64":
case "sfixed64":
e("if(!util.key64Re.test(%s))", r)("return%j", o(t, "integer|Long key"));
break;

case "bool":
e("if(!util.key2Re.test(%s))", r)("return%j", o(t, "boolean key"));
}
}(t, l, "k[i]"), a(t, l, i, u + "[k[i]]")("}")) : l.repeated ? (t("if(!Array.isArray(%s))", u)("return%j", o(l, "array"))("for(var i=0;i<%s.length;++i){", u), 
a(t, l, i, u + "[i]")("}")) : (l.partOf && (s = n.safeProp(l.partOf.name), 1 === r[l.partOf.name] && t("if(p%s===1)", s)("return%j", l.partOf.name + ": multiple values"), 
r[l.partOf.name] = 1, t("p%s=1", s)), a(t, l, i, u)), l.optional && t("}");
}
return t("return null");
};
var r = e(16), n = e(38);
function o(e, t) {
return e.name + ": " + t + (e.repeated && "array" !== t ? "[]" : e.map && "object" !== t ? "{k:" + e.keyType + "}" : "") + " expected";
}
function a(e, t, n, a) {
if (t.resolvedType) if (t.resolvedType instanceof r) {
e("switch(%s){", a)("default:")("return%j", o(t, "enum value"));
for (var i = Object.keys(t.resolvedType.values), s = 0; s < i.length; ++s) e("case %i:", t.resolvedType.values[i[s]]);
e("break")("}");
} else e("{")("var e=types[%i].verify(%s,n+1);", n, a)("if(e)")("return%j+e", t.name + ".")("}"); else switch (t.type) {
case "int32":
case "uint32":
case "sint32":
case "fixed32":
case "sfixed32":
e("if(!util.isInteger(%s))", a)("return%j", o(t, "integer"));
break;

case "int64":
case "uint64":
case "sint64":
case "fixed64":
case "sfixed64":
e("if(!util.isInteger(%s)&&!(%s&&util.isInteger(%s.low)&&util.isInteger(%s.high)))", a, a, a, a)("return%j", o(t, "integer|Long"));
break;

case "float":
case "double":
e('if(typeof %s!=="number")', a)("return%j", o(t, "number"));
break;

case "bool":
e('if(typeof %s!=="boolean")', a)("return%j", o(t, "boolean"));
break;

case "string":
e("if(!util.isString(%s))", a)("return%j", o(t, "string"));
break;

case "bytes":
e('if(!(%s&&typeof %s.length==="number"||util.isString(%s)))', a, a, a)("return%j", o(t, "buffer"));
}
return e;
}
}, {
16: 16,
38: 38
} ],
44: [ function(e, t, n) {
var o = e(22), a = e(41);
n[".google.protobuf.Any"] = {
fromObject: function(e, t) {
if (e && e["@type"]) {
var n, o = e["@type"].substring(1 + e["@type"].lastIndexOf("/"));
if (o = this.lookup(o)) return ~(n = "." == (e["@type"][0] || "") ? e["@type"].slice(1) : e["@type"]).indexOf("/") || (n = "/" + n), 
this.create({
type_url: n,
value: o.encode(o.fromObject(e, t === r ? 1 : t + 1)).finish()
});
}
return this.fromObject(e, t);
},
toObject: function(e, t, n) {
if ((n = n === r ? 0 : n) > a.recursionLimit) throw Error("max depth exceeded");
var i, s, l = "", u = "";
return t && t.json && e.type_url && e.value && (u = e.type_url.substring(1 + e.type_url.lastIndexOf("/")), 
l = e.type_url.substring(0, 1 + e.type_url.lastIndexOf("/")), (i = this.lookup(u)) && (e = i.decode(e.value, r, r, n + 1))), 
!(e instanceof this.ctor) && e instanceof o ? (i = e.$type.toObject(e, t, n + 1), 
s = "." === e.$type.fullName[0] ? e.$type.fullName.slice(1) : e.$type.fullName, 
i["@type"] = u = (l = "" === l ? "type.googleapis.com/" : l) + s, i) : this.toObject(e, t, n);
}
};
}, {
22: 22,
41: 41
} ],
45: [ function(e, t) {
t.exports = d;
var n, o = e(41), a = o.LongBits, i = o.base64, s = o.utf8;
function l(e, t, n) {
this.fn = e, this.len = t, this.next = r, this.val = n;
}
function u() {}
function c(e) {
this.head = e.head, this.tail = e.tail, this.len = e.len, this.next = e.states;
}
function d() {
this.len = 0, this.head = new l(u, 0, 0), this.tail = this.head, this.states = null;
}
function f() {
return o.Buffer ? function() {
return (d.create = function() {
return new n();
})();
} : function() {
return new d();
};
}
function m(e, t, r) {
t[r] = 255 & e;
}
function p(e, t) {
this.len = e, this.next = r, this.val = t;
}
function h(e, t, r) {
for (var n = e.lo, o = e.hi; o; ) t[r++] = 127 & n | 128, n = (n >>> 7 | o << 25) >>> 0, 
o >>>= 7;
for (;127 < n; ) t[r++] = 127 & n | 128, n >>>= 7;
t[r++] = n;
}
function g(e, t, r) {
t[r] = 255 & e, t[r + 1] = e >>> 8 & 255, t[r + 2] = e >>> 16 & 255, t[r + 3] = e >>> 24;
}
d.create = f(), d.alloc = function(e) {
return new o.Array(e);
}, o.Array !== Array && (d.alloc = o.pool(d.alloc, o.Array.prototype.subarray)), 
d.prototype.L = function(e, t, r) {
return this.tail = this.tail.next = new l(e, t, r), this.len += t, this;
}, (p.prototype = Object.create(l.prototype)).fn = function(e, t, r) {
for (;127 < e; ) t[r++] = 127 & e | 128, e >>>= 7;
t[r] = e;
}, d.prototype.uint32 = function(e) {
return this.len += (this.tail = this.tail.next = new p((e >>>= 0) < 128 ? 1 : e < 16384 ? 2 : e < 2097152 ? 3 : e < 268435456 ? 4 : 5, e)).len, 
this;
}, d.prototype.int32 = function(e) {
return (e |= 0) < 0 ? this.L(h, 10, a.fromNumber(e)) : this.uint32(e);
}, d.prototype.sint32 = function(e) {
return this.uint32((e << 1 ^ e >> 31) >>> 0);
}, d.prototype.int64 = d.prototype.uint64 = function(e) {
e = a.from(e);
return this.L(h, e.length(), e);
}, d.prototype.sint64 = function(e) {
e = a.from(e).zzEncode();
return this.L(h, e.length(), e);
}, d.prototype.bool = function(e) {
return this.L(m, 1, e ? 1 : 0);
}, d.prototype.sfixed32 = d.prototype.fixed32 = function(e) {
return this.L(g, 4, e >>> 0);
}, d.prototype.sfixed64 = d.prototype.fixed64 = function(e) {
e = a.from(e);
return this.L(g, 4, e.lo).L(g, 4, e.hi);
}, d.prototype.float = function(e) {
return this.L(o.float.writeFloatLE, 4, e);
}, d.prototype.double = function(e) {
return this.L(o.float.writeDoubleLE, 8, e);
};
var v = o.Array.prototype.set ? function(e, t, r) {
t.set(e, r);
} : function(e, t, r) {
for (var n = 0; n < e.length; ++n) t[r + n] = e[n];
};
d.prototype.bytes = function(e) {
var t, r = e.length >>> 0;
return r ? (o.isString(e) && (t = d.alloc(r = i.length(e)), i.decode(e, t, 0), e = t), 
this.uint32(r).L(v, r, e)) : this.L(m, 1, 0);
}, d.prototype.string = function(e) {
var t = s.length(e);
return t ? this.uint32(t).L(s.write, t, e) : this.L(m, 1, 0);
}, d.prototype.fork = function() {
return this.states = new c(this), this.head = this.tail = new l(u, 0, 0), this.len = 0, 
this;
}, d.prototype.reset = function() {
return this.states ? (this.head = this.states.head, this.tail = this.states.tail, 
this.len = this.states.len, this.states = this.states.next) : (this.head = this.tail = new l(u, 0, 0), 
this.len = 0), this;
}, d.prototype.ldelim = function() {
var e = this.head, t = this.tail, r = this.len;
return this.reset().uint32(r), r && (this.tail.next = e.next, this.tail = t, this.len += r), 
this;
}, d.prototype.finish = function() {
for (var e = this.head.next, t = this.constructor.alloc(this.len), r = 0; e; ) e.fn(e.val, t, r), 
r += e.len, e = e.next;
return t;
}, d.l = function(e) {
n = e, d.create = f(), n.l();
};
}, {
41: 41
} ],
46: [ function(e, t) {
t.exports = o;
var r = e(45), n = ((o.prototype = Object.create(r.prototype)).constructor = o, 
e(41));
function o() {
r.call(this);
}
function a(e, t, r) {
e.length < 40 ? n.utf8.write(e, t, r) : t.utf8Write ? t.utf8Write(e, r) : t.write(e, r);
}
o.l = function() {
o.alloc = n.N, o.writeBytesBuffer = n.Buffer && n.Buffer.prototype instanceof Uint8Array && "set" === n.Buffer.prototype.set.name ? function(e, t, r) {
t.set(e, r);
} : function(e, t, r) {
if (e.copy) e.copy(t, r, 0, e.length); else for (var n = 0; n < e.length; ) t[r++] = e[n++];
};
}, o.prototype.bytes = function(e) {
var t = (e = n.isString(e) ? n.S(e, "base64") : e).length >>> 0;
return this.uint32(t), t && this.L(o.writeBytesBuffer, t, e), this;
}, o.prototype.string = function(e) {
var t = n.Buffer.byteLength(e);
return this.uint32(t), t && this.L(a, t, e), this;
}, o.l();
}, {
41: 41,
45: 45
} ]
}, o = {}, (a = function e(t) {
var r = o[t];
return r || n[t][0].call(r = o[t] = {
exports: {}
}, e, r, r.exports), r.exports;
}(20)).util.global.protobuf = a, "function" == typeof define && define.amd && define([ "long" ], function(e) {
return e && e.isLong && (a.util.Long = e, a.configure()), a;
}), "object" == typeof t && t && t.exports && (t.exports = a);
var r, n, o, a;
cc._RF.pop();
}).call(this, "undefined" != typeof global ? global : "undefined" != typeof self ? self : "undefined" != typeof window ? window : {});
}, {} ]
}, {}, [ "ModelFeatureMain", "ModelFeature_Module", "ModelFeatureAdCatalog", "ModelFeatureBaseCatalog", "ModelFeatureCatalogExport", "ModelFeatureCurrentGameCatalog", "ModelFeatureDependencyMap", "ModelFeatureGameCatalog", "ModelFeatureDataCenter", "ModelFeatureCollector", "ModelFeatureCollectorBase", "ModelFeatureData", "ModelFeatureSeriesCodec", "pbMinimal", "ModelFeatureInterLoadEcpmStore", "ModelFeaturePersistInfo", "ModelFeatureRoundsShardStore", "IModelFeatureSeriesStorage", "ModelFeatureSeriesStorageFactory", "ModelFeatureSeriesStorageNative", "ModelFeatureSeriesStorageWeb", "ModelFeatureRawSerializer", "ModelFeatureGmDataSize", "ModelFeatureGmFakeData", "ModelFeatureGmPrintRecords", "ModelFeatureBuildModeInterface", "ModelFeatureConfigInterface", "ModelFeatureDotInterface", "ModelFeatureInterface", "ModelFeaturePendingSourceInterface", "ModelFeatureRuntimeInterface", "ModelFeatureSeriesSourceInterface", "ModelFeature_Proxy", "ModelFeatureAlgoClassifier", "ModelFeatureAlgoClassifierNew", "ModelFeatureCollectRoundStats", "ModelFeaturePerfLog", "ModelFeatureAdView", "ModelFeatureGameView", "ModelFeatureSourceAccessor", "ModelFeatureView", "ModelFeatureViewExport", "cached", "ModelFeatureActivationAnalyzer", "ModelFeatureBuildContextBase", "ModelFeatureCatalogBase", "ModelFeatureCatalogRegistry", "ModelFeatureCutoffResolver", "ModelFeatureSetRegistry", "forCatalog", "forContext" ]);
//# sourceMappingURL=index.js.map
