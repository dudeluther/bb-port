window.__require = function t(e, o, i) {
function r(s, n) {
if (!o[s]) {
if (!e[s]) {
var l = s.split("/");
l = l[l.length - 1];
if (!e[l]) {
var h = "function" == typeof __require && __require;
if (!n && h) return h(l, !0);
if (a) return a(l, !0);
throw new Error("Cannot find module '" + s + "'");
}
s = l;
}
var c = o[s] = {
exports: {}
};
e[s][0].call(c.exports, function(t) {
return r(e[s][1][t] || t);
}, c, c.exports, t, e, o, i);
}
return o[s].exports;
}
for (var a = "function" == typeof __require && __require, s = 0; s < i.length; s++) r(i[s]);
return r;
}({
ResilientPlayerComebackDeathReduceTrait: [ function(t, e, o) {
"use strict";
cc._RF.push(e, "450e69SfU5AZoRmFsbMP6B1", "ResilientPlayerComebackDeathReduceTrait");
var i, r = this && this.__extends || (i = function(t, e) {
return (i = Object.setPrototypeOf || {
__proto__: []
} instanceof Array && function(t, e) {
t.__proto__ = e;
} || function(t, e) {
for (var o in e) Object.prototype.hasOwnProperty.call(e, o) && (t[o] = e[o]);
})(t, e);
}, function(t, e) {
i(t, e);
function o() {
this.constructor = t;
}
t.prototype = null === e ? Object.create(e) : (o.prototype = e.prototype, new o());
}), a = this && this.__decorate || function(t, e, o, i) {
var r, a = arguments.length, s = a < 3 ? e : null === i ? i = Object.getOwnPropertyDescriptor(e, o) : i;
if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) s = Reflect.decorate(t, e, o, i); else for (var n = t.length - 1; n >= 0; n--) (r = t[n]) && (s = (a < 3 ? r(s) : a > 3 ? r(e, o, s) : r(e, o)) || s);
return a > 3 && s && Object.defineProperty(e, o, s), s;
};
Object.defineProperty(o, "__esModule", {
value: !0
});
o.ResilientPlayerComebackDeathReduceTrait = void 0;
var s = function(t) {
r(e, t);
function e() {
var e = null !== t && t.apply(this, arguments) || this;
e._isResilient = !1;
e._isRequestted = !1;
e._reduceAlgorithm = !1;
e._isFirstReplace = !1;
return e;
}
e.prototype.data = function() {
return {
algorithmTime: 0,
algorithmFlag: !1
};
};
e.prototype.registerTraitEventsMethods = function() {
return [ {
className: "Launch_Proxy",
methodName: "onTraitConfigInitComplete"
}, {
className: "ClassGame_Proxy",
methodName: "onClassGameStart"
}, {
className: "AlgorithmProcessInfo",
methodName: "algorithmSuccess"
} ];
};
e.prototype.onActive = function(t) {
hs.tp.isLaunch_ProxyOnTraitConfigInitComplete(t) && this.init();
hs.tp.isClassGame_ProxyOnClassGameStart(t) && (this._isFirstReplace = !1);
hs.tp.isAlgorithmProcessInfoAlgorithmSuccess(t) && this._recordAlgorithmData();
hs.tp.isClassAlgorithmProcessInfoBottomOffer(t) && this._replaceDeathAlgorithm(t);
};
e.prototype._loadStateFromStorage = function() {
var t = storage.getItem("ResilientPlayerComebackDeathReduceTrait", this.data());
this.state.algorithmTime = t.algorithmTime || 0;
this.state.algorithmFlag = t.algorithmFlag || !1;
};
e.prototype._saveStateToStorage = function() {
var t = {
algorithmTime: this.state.algorithmTime,
algorithmFlag: this.state.algorithmFlag
};
storage.setItem("ResilientPlayerComebackDeathReduceTrait", t);
};
e.prototype.requestData = function(t) {
var e = this;
if (this._isRequestted) t(); else {
var o = {
uid: hs.traitServerRequestInfo.uid,
os: "android"
};
this._requestDunGanPlayerModel(o, function(o) {
e._isResilient = o;
e._isRequestted = !0;
t();
});
}
};
e.prototype.init = function() {
this._loadStateFromStorage();
this.requestData(this._onResilientData.bind(this));
};
e.prototype._onResilientData = function() {
var t, e;
if (this.state.algorithmTime && 0 == this.state.algorithmFlag) {
var o = null !== (e = null === (t = hs.gameInfo.entryTimeHistory) || void 0 === t ? void 0 : t.at(-2)) && void 0 !== e ? e : 0;
if (0 === o) return;
if (hs.gameInfo.entryTime - o > 108e5) this._reduceAlgorithm = !0; else if (hs.getDiffDays(hs.gameInfo.entryTime, o) >= 1) {
this._reduceAlgorithm = !0;
this._isFirstReplace = !1;
}
this.state.algorithmTime = 0;
this._saveStateToStorage();
}
};
e.prototype._recordAlgorithmData = function() {
var t = this;
if (!this._isResilient && hs.gameInfo.gameMode === hs.GameMode.Class && hs.algorithmName.algoActualId === hs.OFFER_TYPE.ZHI_SI_TI) {
this.state.algorithmTime = Date.now();
this.state.algorithmFlag = !1;
this._saveStateToStorage();
cc.Tween.stopAllByTarget(this);
cc.tween(this).delay(30).call(function() {
clearTimeout(t._timeoutId);
t._timeoutId = null;
t.state.algorithmFlag = !0;
t._saveStateToStorage();
}).start();
}
};
e.prototype._replaceDeathAlgorithm = function(t) {
if (hs.algorithmName.algoActualId === hs.OFFER_TYPE.ZHI_SI_TI) {
if (!this._reduceAlgorithm || this._isFirstReplace) return;
t.returnState = !0;
hs.scoreInfo.score > .4 * hs.scoreInfo.highScore ? t.args[0] = [ hs.OFFER_TYPE.SUI_JI_WU_SI ] : t.args[0] = [ hs.OFFER_TYPE.TIAN_KONG_XIAO_CHU ];
this._isFirstReplace = !0;
}
};
e.prototype.isClassAlgorithmBottomSequenceGPInfoTriggerBottomOfferAlgo = function() {
var t = TRAIT("NewBottomOfferReverseModifyTrait");
null != t && t.active && 1 === t.version && this._replaceDeathAlgorithmNewBottomOffer();
};
e.prototype._replaceDeathAlgorithmNewBottomOffer = function() {
if (hs.algorithmName.algoActualId === hs.OFFER_TYPE.ZHI_SI_TI) {
if (!this._reduceAlgorithm || this._isFirstReplace) return;
hs.scoreInfo.score > .4 * hs.scoreInfo.highScore ? hs.algorithmBottomSequenceInfo.setAlgorithmBottomList([ hs.OFFER_TYPE.SUI_JI_WU_SI ]) : hs.algorithmBottomSequenceInfo.setAlgorithmBottomList([ hs.OFFER_TYPE.TIAN_KONG_XIAO_CHU ]);
this._isFirstReplace = !0;
}
};
e.prototype._requestDunGanPlayerModel = function(t, e) {
hs.http.requestAsync("https://hella-game-gateway-server.afafb.com/v1/maitong_duisi", t, {
type: hs.HttpType.POST
}).then(function(t) {
t && 1 == t.ds_uplift_label ? e(!0) : e(!1);
}).catch(function() {
e(!1);
});
};
a([ hs.Algorithm() ], e.prototype, "onActive", null);
return a([ classId("ResilientPlayerComebackDeathReduceTrait") ], e);
}(Trait);
o.ResilientPlayerComebackDeathReduceTrait = s;
cc._RF.pop();
}, {} ]
}, {}, [ "ResilientPlayerComebackDeathReduceTrait" ]);
//# sourceMappingURL=index.js.map
