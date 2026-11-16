window.__require = function t(e, i, r) {
function o(a, n) {
if (!i[a]) {
if (!e[a]) {
var c = a.split("/");
c = c[c.length - 1];
if (!e[c]) {
var s = "function" == typeof __require && __require;
if (!n && s) return s(c, !0);
if (l) return l(c, !0);
throw new Error("Cannot find module '" + a + "'");
}
a = c;
}
var h = i[a] = {
exports: {}
};
e[a][0].call(h.exports, function(t) {
return o(e[a][1][t] || t);
}, h, h.exports, t, e, i, r);
}
return i[a].exports;
}
for (var l = "function" == typeof __require && __require, a = 0; a < r.length; a++) o(r[a]);
return o;
}({
HighScoreLimitByUserAbilityTrait_ios_Trait: [ function(t, e, i) {
"use strict";
cc._RF.push(e, "d5f3a1LMopKo7CQv51//wFa", "HighScoreLimitByUserAbilityTrait_ios_Trait");
var r, o = this && this.__extends || (r = function(t, e) {
return (r = Object.setPrototypeOf || {
__proto__: []
} instanceof Array && function(t, e) {
t.__proto__ = e;
} || function(t, e) {
for (var i in e) Object.prototype.hasOwnProperty.call(e, i) && (t[i] = e[i]);
})(t, e);
}, function(t, e) {
r(t, e);
function i() {
this.constructor = t;
}
t.prototype = null === e ? Object.create(e) : (i.prototype = e.prototype, new i());
}), l = this && this.__decorate || function(t, e, i, r) {
var o, l = arguments.length, a = l < 3 ? e : null === r ? r = Object.getOwnPropertyDescriptor(e, i) : r;
if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) a = Reflect.decorate(t, e, i, r); else for (var n = t.length - 1; n >= 0; n--) (o = t[n]) && (a = (l < 3 ? o(a) : l > 3 ? o(e, i, a) : o(e, i)) || a);
return l > 3 && a && Object.defineProperty(e, i, a), a;
};
Object.defineProperty(i, "__esModule", {
value: !0
});
i.HighScoreLimitByUserAbilityTrait_ios_Trait = void 0;
var a = function(t) {
o(e, t);
function e() {
return null !== t && t.apply(this, arguments) || this;
}
e.prototype.isClassAlgorithmStrategyIOS_Condition_ProxyOnAlgorithmStrategyCondition = function() {
this.handleNewUserFirstGameAlgorithm();
};
return l([ classId("HighScoreLimitByUserAbilityTrait", "ios") ], e);
}(t("./HighScoreLimitByUserAbilityTrait").HighScoreLimitByUserAbilityTrait);
i.HighScoreLimitByUserAbilityTrait_ios_Trait = a;
cc._RF.pop();
}, {
"./HighScoreLimitByUserAbilityTrait": "HighScoreLimitByUserAbilityTrait"
} ],
HighScoreLimitByUserAbilityTrait: [ function(t, e, i) {
"use strict";
cc._RF.push(e, "8ac4bElaohEk7fi+aFBhKfF", "HighScoreLimitByUserAbilityTrait");
var r, o = this && this.__extends || (r = function(t, e) {
return (r = Object.setPrototypeOf || {
__proto__: []
} instanceof Array && function(t, e) {
t.__proto__ = e;
} || function(t, e) {
for (var i in e) Object.prototype.hasOwnProperty.call(e, i) && (t[i] = e[i]);
})(t, e);
}, function(t, e) {
r(t, e);
function i() {
this.constructor = t;
}
t.prototype = null === e ? Object.create(e) : (i.prototype = e.prototype, new i());
}), l = this && this.__decorate || function(t, e, i, r) {
var o, l = arguments.length, a = l < 3 ? e : null === r ? r = Object.getOwnPropertyDescriptor(e, i) : r;
if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) a = Reflect.decorate(t, e, i, r); else for (var n = t.length - 1; n >= 0; n--) (o = t[n]) && (a = (l < 3 ? o(a) : l > 3 ? o(e, i, a) : o(e, i)) || a);
return l > 3 && a && Object.defineProperty(e, i, a), a;
}, a = this && this.__read || function(t, e) {
var i = "function" == typeof Symbol && t[Symbol.iterator];
if (!i) return t;
var r, o, l = i.call(t), a = [];
try {
for (;(void 0 === e || e-- > 0) && !(r = l.next()).done; ) a.push(r.value);
} catch (t) {
o = {
error: t
};
} finally {
try {
r && !r.done && (i = l.return) && i.call(l);
} finally {
if (o) throw o.error;
}
}
return a;
};
Object.defineProperty(i, "__esModule", {
value: !0
});
i.HighScoreLimitByUserAbilityTrait = void 0;
var n = function(t) {
o(e, t);
function e() {
var e = null !== t && t.apply(this, arguments) || this;
e._cachedAbilityLevel = null;
e._cachedHighScore = 0;
return e;
}
e.prototype.onActive = function(t) {
var e, i, r;
hs.tp.isClassScore_ProxyIncreaseScoreByRound(t) && this.handleScoreModification(t);
hs.tp.isClassAlgorithmStrategy_Condition_ProxyOnAlgorithmStrategyCondition(t) && this.handleNewUserFirstGameAlgorithm();
if (hs.tp.isClassGame_ProxyOnGameStart(t)) {
var o = t.args[0];
if (null === (e = null == o ? void 0 : o.data) || void 0 === e ? void 0 : e.newGame) {
var l = this.calculateAbilityLevelAndValue(), a = l.level;
l.abilityValue;
this._cachedAbilityLevel = a;
this._cachedHighScore = null !== (r = null === (i = hs.classScoreInfo) || void 0 === i ? void 0 : i.highScore) && void 0 !== r ? r : 0;
hs.storage.setItem("HighScoreLimitByUserAbilityTrait_cachedAbilityValue", this._cachedAbilityLevel);
hs.storage.setItem("HighScoreLimitByUserAbilityTrait_cachedHighScore", this._cachedHighScore);
} else {
this._cachedAbilityLevel = hs.storage.getItem("HighScoreLimitByUserAbilityTrait_cachedAbilityValue", "low");
this._cachedHighScore = hs.storage.getItem("HighScoreLimitByUserAbilityTrait_cachedHighScore", 0);
}
}
};
e.prototype.handleScoreModification = function(t) {
var e, i, r = t.args[0], o = null !== (i = null === (e = hs.classScoreInfo) || void 0 === e ? void 0 : e.score) && void 0 !== i ? i : 0, l = this._cachedHighScore;
if (!(l <= 0 || o <= 1e4 || o <= l)) {
var a = (o - l) / l, n = this._cachedAbilityLevel || "low", c = this.getCoefficient(a, n), s = r.comboScore;
r.comboScore = Math.floor(s * c);
t.returnValue = r;
}
};
e.prototype.calculateAbilityLevelAndValue = function() {
if (!this.props.useModel) return {
level: "low",
abilityValue: 0
};
var t = TRAIT("NewAbilityModelTrait");
if (!(null == t ? void 0 : t.active)) return {
level: "low",
abilityValue: 0
};
if (!t.canCalculateAbility("loose")) return {
level: "low",
abilityValue: 0
};
var e = t.calculateAbility("loose", !0, !0);
if (0 === e || !Number.isFinite(e)) return {
level: "low",
abilityValue: 0
};
var i = t.getAbilityThresholdByPercentile(30, !0), r = t.getAbilityThresholdByPercentile(70, !0);
if (!Number.isFinite(i) || !Number.isFinite(r)) return {
level: "low",
abilityValue: e
};
var o = Number(i), l = Number(r);
return {
level: e < o ? "low" : e < l ? "medium" : "high",
abilityValue: e
};
};
e.prototype.getCoefficient = function(t, e) {
if (t <= -.2) return 1;
var i;
i = t > .4 ? 4 : t > .3 ? 3 : t > .2 ? 2 : t > .1 ? 1 : 0;
var r = this.props.comboRatio;
if (!r || !Array.isArray(r) || i >= r.length) return 1;
var o = r[i];
if (!o || "string" != typeof o) return 1;
var l = o.split("|");
if (3 !== l.length) return 1;
var n = a(l, 3), c = n[0], s = n[1], h = n[2], u = parseFloat(c), y = parseFloat(s), f = parseFloat(h);
switch (e) {
case "low":
return isNaN(u) ? 1 : u;

case "medium":
return isNaN(y) ? 1 : y;

case "high":
return isNaN(f) ? 1 : f;

default:
return 1;
}
};
e.prototype.handleNewUserFirstGameAlgorithm = function() {
var t = hs.classGameInfo.gameNum, e = hs.classGameInfo.roundNum;
if (0 === t) if (e >= 9 && e <= 15) {
hs.algorithmStrategyInfo.setAlgorithmList([ hs.OFFER_TYPE.KUN_NAN_TI ]);
hs.algorithmStrategyInfo.setAlgorithmFailList([ hs.OFFER_TYPE.SHANG_ZENG_3 ]);
} else e >= 16 && hs.algorithmStrategyInfo.algorithmList.unshift(hs.OFFER_TYPE.ZHI_SI_TI);
};
return l([ classId("HighScoreLimitByUserAbilityTrait") ], e);
}(Trait);
i.HighScoreLimitByUserAbilityTrait = n;
cc._RF.pop();
}, {} ]
}, {}, [ "HighScoreLimitByUserAbilityTrait", "HighScoreLimitByUserAbilityTrait_ios_Trait" ]);
//# sourceMappingURL=index.js.map
