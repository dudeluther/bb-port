window.__require = function t(r, e, o) {
function i(n, s) {
if (!e[n]) {
if (!r[n]) {
var p = n.split("/");
p = p[p.length - 1];
if (!r[p]) {
var _ = "function" == typeof __require && __require;
if (!s && _) return _(p, !0);
if (a) return a(p, !0);
throw new Error("Cannot find module '" + n + "'");
}
n = p;
}
var c = e[n] = {
exports: {}
};
r[n][0].call(c.exports, function(t) {
return i(r[n][1][t] || t);
}, c, c.exports, t, r, e, o);
}
return e[n].exports;
}
for (var a = "function" == typeof __require && __require, n = 0; n < o.length; n++) i(o[n]);
return i;
}({
CTRefactorLightChurnRateTrait: [ function(t, r, e) {
"use strict";
cc._RF.push(r, "a7861+54sdBcpJvlhR7NsH6", "CTRefactorLightChurnRateTrait");
var o, i = this && this.__extends || (o = function(t, r) {
return (o = Object.setPrototypeOf || {
__proto__: []
} instanceof Array && function(t, r) {
t.__proto__ = r;
} || function(t, r) {
for (var e in r) Object.prototype.hasOwnProperty.call(r, e) && (t[e] = r[e]);
})(t, r);
}, function(t, r) {
o(t, r);
function e() {
this.constructor = t;
}
t.prototype = null === r ? Object.create(r) : (e.prototype = r.prototype, new e());
}), a = this && this.__decorate || function(t, r, e, o) {
var i, a = arguments.length, n = a < 3 ? r : null === o ? o = Object.getOwnPropertyDescriptor(r, e) : o;
if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) n = Reflect.decorate(t, r, e, o); else for (var s = t.length - 1; s >= 0; s--) (i = t[s]) && (n = (a < 3 ? i(n) : a > 3 ? i(r, e, n) : i(r, e)) || n);
return a > 3 && n && Object.defineProperty(r, e, n), n;
};
Object.defineProperty(e, "__esModule", {
value: !0
});
e.CTRefactorLightChurnRateTrait = void 0;
var n = function(t) {
i(r, t);
function r() {
return null !== t && t.apply(this, arguments) || this;
}
r.prototype.data = function() {
return {
sz_rp_prob_v_1_1: 0
};
};
r.prototype.request = function() {
this.state.sz_rp_prob_v_1_1 > 0 || hs.httpXDeepFM.request({
req_type: "block_ios_active_gp_to_ios_loss_pred",
key: hs.traitServerRequestInfo.uid
}, this.onResponse.bind(this));
};
r.prototype.onResponse = function(t) {
if (t && 0 === t.code && t.data && t.data.gp_to_ios_sz_rep_prob_v_1_1) {
this.setState({
sz_rp_prob_v_1_1: t.data.gp_to_ios_sz_rep_prob_v_1_1
});
hs.storage.setItem("LightGBMChurnRateTrait_SZ_RP_PROB_V_1_1", this.state.sz_rp_prob_v_1_1);
} else {
var r = hs.storage.getItem("LightGBMChurnRateTrait_SZ_RP_PROB_V_1_1", 0);
r > 0 && this.setState({
sz_rp_prob_v_1_1: r
});
}
};
Object.defineProperty(r.prototype, "srcAlgoIdList", {
get: function() {
return hs.traitConfigSafePropsInfo.getSafePropValueByKey("LightChurnRateTrait", "srcAlgoIdList", this.props, [ hs.OFFER_TYPE_SHANG.SHANG_ZENG_3, hs.OFFER_TYPE_SHANG.ZIMU_SHANGZENG ]);
},
enumerable: !1,
configurable: !0
});
Object.defineProperty(r.prototype, "dstAlgoId", {
get: function() {
return hs.traitConfigSafePropsInfo.getSafePropValueByKey("LightChurnRateTrait", "dstAlgoId", this.props, hs.OFFER_TYPE_BLANK.ALL_COMBINATION_ID70);
},
enumerable: !1,
configurable: !0
});
Object.defineProperty(r.prototype, "paramType", {
get: function() {
return hs.traitConfigSafePropsInfo.getSafePropValueByKey("LightChurnRateTrait", "type", this.props, 1);
},
enumerable: !1,
configurable: !0
});
r.prototype.isGBM_Light_ProxyOnInitComplete = function() {
var t = TRAIT("FixLightChurnRateDotTrait");
(null == t ? void 0 : t.active) && hs.gbmLightInfo.reqLightGBMData(this.paramType);
};
r.prototype.isClassGBM_ProxyOnClassInit = function() {
var t = TRAIT("FixLightChurnRateDotTrait");
(null == t ? void 0 : t.active) || hs.gbmLightInfo.reqLightGBMData(this.paramType);
};
r.prototype.isOpenOne = function() {
return 1 == this.paramType;
};
r.prototype.replaceAlgo = function(t) {
return t;
};
r.prototype.onPreprocessConditionContext = function(t) {
return buildLazyConditionContext({
isTrigger: function() {
return ASContext(t, "是否触发特性");
}
});
};
r.prototype.onPreprocessConditionOperators = function() {
var t = this;
return {
checkTriggerTrait: function(r) {
var e, o, i, a, n, s = r, p = Math.random(), _ = hs.gbmLightInfo.lightGBMData;
n = _ && _.data && _.data.sz_rp_prob_v_1_1 ? _.data.sz_rp_prob_v_1_1 : 0;
t.setState({
sz_rp_prob_v_1_1: n
});
var c = TRAIT("FixLightChurnRateDotTrait");
if (null == c ? void 0 : c.active) {
var u = t.srcAlgoIdList, h = null !== (o = null === (e = s.algorithmList) || void 0 === e ? void 0 : e.some(function(t) {
return u.includes(t.algorithmId);
})) && void 0 !== o && o, g = null !== (a = null === (i = s.algorithmFallbackList) || void 0 === i ? void 0 : i.some(function(t) {
return u.includes(t.algorithmId);
})) && void 0 !== a && a;
if (0 == h && 0 == g) return !1;
}
var l = t.isOpenOne();
TRAIT("CTRefactorFixGbmCountTrait");
if (l) {
var f = n && n > p;
if (t.replaceAlgo(f)) {
hs.gbmLightInfo.onEffectServerRequest(t.paramType);
var d = t.srcAlgoIdList, T = TRAIT("RobotModelEventDataTrait");
(null == T ? void 0 : T.active) && hs.EventManager.dispatchModuleEvent(new hs.E_HttpDot_Game_Model_Applay_Request({
game_id: hs.gameInfo.gameNum,
game_type: hs.gameInfo.gameMode,
feature_id: t.id,
model_output: {
OFFER_TYPE: d
}
}));
var y = t.dstAlgoId;
if (d && d.length > 0) return {
status: !0,
data: {
sourceAlgorithmId: d,
dstAlgorithmId: y
}
};
}
}
return !1;
}
};
};
r.prototype.onPreprocessConditions = function() {
return {
preprocessingAlgorithm: [ {
conditions: {
and: [ {
fact: "isTrigger",
operator: "checkTriggerTrait",
value: !0
} ]
},
flow: "flow1"
} ]
};
};
r.prototype.onPreprocessActions = function() {
return {
preprocessingAlgorithm: {
flow1: [ {
operator: "AlgorithmStrategyAlgorithmListOperator",
type: "replace",
args: [ {
fact: "operator.checkTriggerTrait.data.sourceAlgorithmId"
}, {
fact: "operator.checkTriggerTrait.data.dstAlgorithmId"
} ]
}, {
operator: "AlgorithmStrategyAlgorithmFallbackListOperator",
type: "replace",
args: [ {
fact: "operator.checkTriggerTrait.data.sourceAlgorithmId"
}, {
fact: "operator.checkTriggerTrait.data.dstAlgorithmId"
} ]
} ]
}
};
};
return a([ classId("CTRefactorLightChurnRateTrait"), classMethodWatch() ], r);
}(Trait);
e.CTRefactorLightChurnRateTrait = n;
cc._RF.pop();
}, {} ]
}, {}, [ "CTRefactorLightChurnRateTrait" ]);
//# sourceMappingURL=index.js.map
