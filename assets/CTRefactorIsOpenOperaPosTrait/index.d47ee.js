window.__require = function t(e, o, r) {
function s(a, n) {
if (!o[a]) {
if (!e[a]) {
var p = a.split("/");
p = p[p.length - 1];
if (!e[p]) {
var h = "function" == typeof __require && __require;
if (!n && h) return h(p, !0);
if (i) return i(p, !0);
throw new Error("Cannot find module '" + a + "'");
}
a = p;
}
var u = o[a] = {
exports: {}
};
e[a][0].call(u.exports, function(t) {
return s(e[a][1][t] || t);
}, u, u.exports, t, e, o, r);
}
return o[a].exports;
}
for (var i = "function" == typeof __require && __require, a = 0; a < r.length; a++) s(r[a]);
return s;
}({
CTRefactorIsOpenOperaPosTrait: [ function(t, e, o) {
"use strict";
cc._RF.push(e, "2b43dsyhVlLS5IM0XoCyGtr", "CTRefactorIsOpenOperaPosTrait");
var r, s = this && this.__extends || (r = function(t, e) {
return (r = Object.setPrototypeOf || {
__proto__: []
} instanceof Array && function(t, e) {
t.__proto__ = e;
} || function(t, e) {
for (var o in e) Object.prototype.hasOwnProperty.call(e, o) && (t[o] = e[o]);
})(t, e);
}, function(t, e) {
r(t, e);
function o() {
this.constructor = t;
}
t.prototype = null === e ? Object.create(e) : (o.prototype = e.prototype, new o());
}), i = this && this.__decorate || function(t, e, o, r) {
var s, i = arguments.length, a = i < 3 ? e : null === r ? r = Object.getOwnPropertyDescriptor(e, o) : r;
if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) a = Reflect.decorate(t, e, o, r); else for (var n = t.length - 1; n >= 0; n--) (s = t[n]) && (a = (i < 3 ? s(a) : i > 3 ? s(e, o, a) : s(e, o)) || a);
return i > 3 && a && Object.defineProperty(e, o, a), a;
};
Object.defineProperty(o, "__esModule", {
value: !0
});
o.CTRefactorIsOpenOperaPosTrait = void 0;
var a = function(t) {
s(e, t);
function e() {
return null !== t && t.apply(this, arguments) || this;
}
e.prototype.data = function() {
return {
modeKey: "classOperaChangePos",
isUseMultiple: !1,
isFixIsOpenOperaPos: !1,
lastPositionType: void 0
};
};
Object.defineProperty(e.prototype, "recordMaxNum", {
get: function() {
return hs.traitConfigSafePropsInfo.getSafePropValueByKey("IsOpenOperaPosTrait", "recordMaxNum", this.props, 5);
},
enumerable: !1,
configurable: !0
});
e.prototype.getLastPositionType = function() {
return this.state.lastPositionType;
};
e.prototype.isGameDataClear_Disk_ProxyResetAlgorithmData = function() {
this.state.modeKey = hs.gameInfo.gameMode === hs.GameMode.Class ? "classOperaChangePos" : "chapterOperaChangePos";
var t = this.getPosInfo();
if (t.rcurRcordNum < this.recordMaxNum) {
t.rcurRcordNum++;
hs.storage.setItem(this.state.modeKey, t);
}
};
e.prototype.isAlgorithmStrategy_BlocksPos_ProxyOnCollectBlockInfo = function(t) {
var e = t.args[0].touchIndex;
this.state.modeKey = hs.gameInfo.gameMode === hs.GameMode.Class ? "classOperaChangePos" : "chapterOperaChangePos";
var o = this.getPosInfo();
if (o.rcurRcordNum < this.recordMaxNum) {
o.posInfo["" + e] = Number(o.posInfo["" + e]) + 1;
hs.storage.setItem(this.state.modeKey, o);
}
};
e.prototype.getPosInfo = function() {
var t, e = hs.storage.getItem(this.state.modeKey, null);
if (null == e) {
e = {
posInfo: (t = {}, t[hs.OPERA_POS_TYPE.LEFT] = 0, t[hs.OPERA_POS_TYPE.MIDDLE] = 0, 
t[hs.OPERA_POS_TYPE.RIGHT] = 0, t),
rcurRcordNum: 0
};
hs.storage.setItem(this.state.modeKey, e);
}
e.type = hs.OPERA_POS_TYPE.NONE;
return e;
};
e.prototype.getOperaPosType = function() {
var t = this.getPosInfo();
if (!t || t.rcurRcordNum < this.recordMaxNum) return hs.OPERA_POS_TYPE.NONE;
var e = t.posInfo["" + hs.OPERA_POS_TYPE.LEFT], o = t.posInfo["" + hs.OPERA_POS_TYPE.MIDDLE], r = t.posInfo["" + hs.OPERA_POS_TYPE.RIGHT], s = hs.OPERA_POS_TYPE.LEFT, i = e;
if (r >= i) {
s = hs.OPERA_POS_TYPE.RIGHT;
i = r;
}
o >= i && (s = hs.OPERA_POS_TYPE.MIDDLE);
return s;
};
e.prototype.disableBase = function(t) {
var e = t;
if (e) {
Array.isArray(e.disabledTraits) || (e.disabledTraits = []);
e.disabledTraits.includes("CTRefactorBasePositionAdjustTrait") || e.disabledTraits.push("CTRefactorBasePositionAdjustTrait");
}
};
e.prototype.onAlgorithmStrategyPositionAdjust = function(t) {
this.disableBase(t);
this.setState({
lastPositionType: void 0
});
this.state.modeKey = hs.gameInfo.gameMode === hs.GameMode.Class ? "classOperaChangePos" : "chapterOperaChangePos";
return this.generateOperaPosArrInfo(t);
};
e.prototype.generateOperaPosArrInfo = function(t) {
var e, o, r, s, i = TRAIT("CTPlacementOrderPredictTrait");
if ((null == i ? void 0 : i.active) && i.isOrderAdjusted) ; else {
var a = null !== (o = null === (e = null == t ? void 0 : t.sdk) || void 0 === e ? void 0 : e.actualAlgorithmId_SDK_REQUEST_BEFORE_Patch) && void 0 !== o ? o : hs.algorithmName.algoActualId;
if (a != hs.OFFER_TYPE.REVIVE && a != hs.OFFER_TYPE.REVIVE_CLEAR) {
var n = null !== (s = null === (r = null == t ? void 0 : t.sdk) || void 0 === r ? void 0 : r.blockNames) && void 0 !== s ? s : [];
if (!n.some(function(t) {
return t === hs.ALGO_NAME_TYPE.NAME_ZIMUSHANG;
}) && !n.some(function(t) {
return "消除爽" === t;
})) {
var p = this.getPosInfo();
if (p.rcurRcordNum >= this.recordMaxNum) {
p.type = this.getOperaPosType();
hs.storage.setItem(this.state.modeKey, p);
var h;
h = p.type === hs.OPERA_POS_TYPE.MIDDLE ? hs.AlgorithmStrategyPositionType.MIDDLE : p.type === hs.OPERA_POS_TYPE.RIGHT ? hs.AlgorithmStrategyPositionType.RIGHT : hs.AlgorithmStrategyPositionType.LEFT;
this.setState({
lastPositionType: h
});
return {
data: h
};
}
if (this.state.isFixIsOpenOperaPos) {
var u = TRAIT("CTRefactorFillClearTopicTrait");
if (null == u ? void 0 : u.active) {
var c = u.onAlgorithmStrategyPositionAdjust(t);
if ((null == c ? void 0 : c.data) === hs.AlgorithmStrategyPositionType.MIDDLE) return;
}
hs.storage.setItem(this.state.modeKey, p);
this.setState({
lastPositionType: hs.AlgorithmStrategyPositionType.RANDOM
});
return {
data: hs.AlgorithmStrategyPositionType.RANDOM
};
}
if (this.state.isUseMultiple) {
hs.storage.setItem(this.state.modeKey, p);
this.setState({
lastPositionType: hs.AlgorithmStrategyPositionType.RANDOM
});
return {
data: hs.AlgorithmStrategyPositionType.RANDOM
};
}
}
}
}
};
return i([ classId("CTRefactorIsOpenOperaPosTrait"), classMethodWatch() ], e);
}(Trait);
o.CTRefactorIsOpenOperaPosTrait = a;
cc._RF.pop();
}, {} ]
}, {}, [ "CTRefactorIsOpenOperaPosTrait" ]);
//# sourceMappingURL=index.js.map
