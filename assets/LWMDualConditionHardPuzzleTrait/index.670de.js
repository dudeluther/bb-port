window.__require = function e(t, r, o) {
function i(a, s) {
if (!r[a]) {
if (!t[a]) {
var u = a.split("/");
u = u[u.length - 1];
if (!t[u]) {
var l = "function" == typeof __require && __require;
if (!s && l) return l(u, !0);
if (n) return n(u, !0);
throw new Error("Cannot find module '" + a + "'");
}
a = u;
}
var c = r[a] = {
exports: {}
};
t[a][0].call(c.exports, function(e) {
return i(t[a][1][e] || e);
}, c, c.exports, e, t, r, o);
}
return r[a].exports;
}
for (var n = "function" == typeof __require && __require, a = 0; a < o.length; a++) i(o[a]);
return i;
}({
LWMDualConditionHardPuzzleTrait: [ function(e, t, r) {
"use strict";
cc._RF.push(t, "0dd88P7HcxBzIrPItbMJc7t", "LWMDualConditionHardPuzzleTrait");
var o, i = this && this.__extends || (o = function(e, t) {
return (o = Object.setPrototypeOf || {
__proto__: []
} instanceof Array && function(e, t) {
e.__proto__ = t;
} || function(e, t) {
for (var r in t) Object.prototype.hasOwnProperty.call(t, r) && (e[r] = t[r]);
})(e, t);
}, function(e, t) {
o(e, t);
function r() {
this.constructor = e;
}
e.prototype = null === t ? Object.create(t) : (r.prototype = t.prototype, new r());
}), n = this && this.__assign || function() {
return (n = Object.assign || function(e) {
for (var t, r = 1, o = arguments.length; r < o; r++) {
t = arguments[r];
for (var i in t) Object.prototype.hasOwnProperty.call(t, i) && (e[i] = t[i]);
}
return e;
}).apply(this, arguments);
}, a = this && this.__decorate || function(e, t, r, o) {
var i, n = arguments.length, a = n < 3 ? t : null === o ? o = Object.getOwnPropertyDescriptor(t, r) : o;
if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) a = Reflect.decorate(e, t, r, o); else for (var s = e.length - 1; s >= 0; s--) (i = e[s]) && (a = (n < 3 ? i(a) : n > 3 ? i(t, r, a) : i(t, r)) || a);
return n > 3 && a && Object.defineProperty(t, r, a), a;
};
Object.defineProperty(r, "__esModule", {
value: !0
});
r.LWMDualConditionHardPuzzleTrait = void 0;
var s = function(e) {
i(t, e);
function t() {
return null !== e && e.apply(this, arguments) || this;
}
r = t;
t.prototype.getData = function() {
return hs.storage.getItem("LWMDualConditionHardPuzzleTraitData", r.DEFAULT_DATA);
};
t.prototype.setData = function(e) {
var t = this.getData();
hs.storage.setItem("LWMDualConditionHardPuzzleTraitData", n(n({}, t), e));
};
Object.defineProperty(t.prototype, "maxConfiguredRound", {
get: function() {
var e, t;
return null !== (t = null === (e = this.props) || void 0 === e ? void 0 : e.maxConfiguredRound) && void 0 !== t ? t : 4;
},
enumerable: !1,
configurable: !0
});
Object.defineProperty(t.prototype, "round1ScoreMin", {
get: function() {
var e, t;
return null !== (t = null === (e = this.props) || void 0 === e ? void 0 : e.round1ScoreMin) && void 0 !== t ? t : 1e4;
},
enumerable: !1,
configurable: !0
});
Object.defineProperty(t.prototype, "round1ScoreMax", {
get: function() {
var e, t;
return null !== (t = null === (e = this.props) || void 0 === e ? void 0 : e.round1ScoreMax) && void 0 !== t ? t : 13e3;
},
enumerable: !1,
configurable: !0
});
Object.defineProperty(t.prototype, "round2ScoreMin", {
get: function() {
var e, t;
return null !== (t = null === (e = this.props) || void 0 === e ? void 0 : e.round2ScoreMin) && void 0 !== t ? t : 13001;
},
enumerable: !1,
configurable: !0
});
Object.defineProperty(t.prototype, "round2ScoreMax", {
get: function() {
var e, t;
return null !== (t = null === (e = this.props) || void 0 === e ? void 0 : e.round2ScoreMax) && void 0 !== t ? t : 2e4;
},
enumerable: !1,
configurable: !0
});
Object.defineProperty(t.prototype, "round3ScoreMin", {
get: function() {
var e, t;
return null !== (t = null === (e = this.props) || void 0 === e ? void 0 : e.round3ScoreMin) && void 0 !== t ? t : 20001;
},
enumerable: !1,
configurable: !0
});
Object.defineProperty(t.prototype, "round3ScoreMax", {
get: function() {
var e, t;
return null !== (t = null === (e = this.props) || void 0 === e ? void 0 : e.round3ScoreMax) && void 0 !== t ? t : 3e4;
},
enumerable: !1,
configurable: !0
});
Object.defineProperty(t.prototype, "round4ScoreMin", {
get: function() {
var e, t;
return null !== (t = null === (e = this.props) || void 0 === e ? void 0 : e.round4ScoreMin) && void 0 !== t ? t : 30001;
},
enumerable: !1,
configurable: !0
});
Object.defineProperty(t.prototype, "round4ScoreMax", {
get: function() {
var e, t;
return null !== (t = null === (e = this.props) || void 0 === e ? void 0 : e.round4ScoreMax) && void 0 !== t ? t : 4e4;
},
enumerable: !1,
configurable: !0
});
t.prototype.getScoreRangeByGameNum = function(e) {
switch (e) {
case 0:
return [ this.round1ScoreMin, this.round1ScoreMax ];

case 1:
return [ this.round2ScoreMin, this.round2ScoreMax ];

case 2:
return [ this.round3ScoreMin, this.round3ScoreMax ];

case 3:
return [ this.round4ScoreMin, this.round4ScoreMax ];

default:
return null;
}
};
t.prototype.randomInt = function(e, t) {
return Math.floor(Math.random() * (t - e + 1)) + e;
};
t.prototype.isConditionMet = function() {
return hs.gameInfo.gameMode === hs.GameMode.Class;
};
t.prototype.onActive = function(e) {
if (hs.tp.isClassAlgorithmStrategy_Reset_ProxyPreprocessing_Puzzle100(e)) {
if (!this.isConditionMet()) return;
var t = hs.classGameInfo.gameNum;
if ((i = this.getData()).initializedGameNum === t) return;
if (t >= this.maxConfiguredRound) {
this.setData({
scoreThreshold: -1,
hasTriggeredByScore: !1,
initializedGameNum: t
});
return;
}
var r = this.getScoreRangeByGameNum(t);
if (!r) {
this.setData({
scoreThreshold: -1,
hasTriggeredByScore: !1,
initializedGameNum: t
});
return;
}
var o = this.randomInt(r[0], r[1]);
this.setData({
scoreThreshold: o,
hasTriggeredByScore: !1,
initializedGameNum: t
});
}
if (hs.tp.isClassAlgorithmStrategy_Deal_ProxyTriggerAlgorithm_Puzzle100(e)) {
if (!this.isConditionMet()) return;
var i;
if ((i = this.getData()).hasTriggeredByScore) return;
if (i.scoreThreshold < 0) return;
if (hs.scoreInfo.score >= i.scoreThreshold) {
var n = TRAIT("Puzzle100Trait");
if (null == n ? void 0 : n.active) {
this.setData({
hasTriggeredByScore: !0
});
n.setState({
hard100Status: hs.Hard100Status.open
});
hs.algorithmStrategyInfo.setAlgorithmSourceLevel1(hs.ClassAlgorithmSourceType.Puzzle100);
hs.algorithmStrategyInfo.setAlgorithmList([ hs.OFFER_TYPE.KUN_NAN_TI ]);
}
}
}
};
var r;
t.DEFAULT_DATA = {
scoreThreshold: -1,
hasTriggeredByScore: !1,
initializedGameNum: -1
};
return r = a([ classId("LWMDualConditionHardPuzzleTrait") ], t);
}(Trait);
r.LWMDualConditionHardPuzzleTrait = s;
cc._RF.pop();
}, {} ],
LWMDualConditionHardPuzzle_iosActive_Trait: [ function(e, t, r) {
"use strict";
cc._RF.push(t, "b94af+cBmRBcIKRD8pjFBUI", "LWMDualConditionHardPuzzle_iosActive_Trait");
var o, i = this && this.__extends || (o = function(e, t) {
return (o = Object.setPrototypeOf || {
__proto__: []
} instanceof Array && function(e, t) {
e.__proto__ = t;
} || function(e, t) {
for (var r in t) Object.prototype.hasOwnProperty.call(t, r) && (e[r] = t[r]);
})(e, t);
}, function(e, t) {
o(e, t);
function r() {
this.constructor = e;
}
e.prototype = null === t ? Object.create(t) : (r.prototype = t.prototype, new r());
}), n = this && this.__decorate || function(e, t, r, o) {
var i, n = arguments.length, a = n < 3 ? t : null === o ? o = Object.getOwnPropertyDescriptor(t, r) : o;
if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) a = Reflect.decorate(e, t, r, o); else for (var s = e.length - 1; s >= 0; s--) (i = e[s]) && (a = (n < 3 ? i(a) : n > 3 ? i(t, r, a) : i(t, r)) || a);
return n > 3 && a && Object.defineProperty(t, r, a), a;
};
Object.defineProperty(r, "__esModule", {
value: !0
});
r.LWMDualConditionHardPuzzle_iosActive_Trait = void 0;
var a = function(e) {
i(t, e);
function t() {
return null !== e && e.apply(this, arguments) || this;
}
t.prototype.isClassAlgorithmStrategy_Reset_ProxyPreprocessing_Puzzle100 = function() {
this.isConditionMet() && this.initTodayThreshold();
};
t.prototype.isClassAlgorithmStrategyIOS_Deal_ProxyTriggerAlgorithm_Puzzle100 = function() {
if (this.isConditionMet()) {
var e = this.getData();
if (e.hasTriggeredByScore) ; else if (!(e.scoreThreshold < 0) && hs.scoreInfo.score >= e.scoreThreshold) {
var t = TRAIT("Puzzle100Trait");
if (null == t ? void 0 : t.active) {
this.setData({
hasTriggeredByScore: !0
});
t.setState({
hard100Status: hs.Hard100Status.open
});
hs.algorithmStrategyInfo.setAlgorithmSourceLevel1(hs.ClassAlgorithmSourceType.Puzzle100);
hs.algorithmStrategyInfo.setAlgorithmList([ hs.OFFER_TYPE.KUN_NAN_TI ]);
}
}
}
};
t.prototype.isConditionMet = function() {
return hs.gameInfo.gameMode === hs.GameMode.Class;
};
t.prototype.getTodayGameIndex = function() {
return hs.classGameInfo.todayGameCount - 1;
};
t.prototype.getTodayInitKey = function(e) {
return hs.classGameInfo.todayFirstGameNum * this.maxConfiguredRound + e;
};
t.prototype.initTodayThreshold = function() {
var e = this.getTodayGameIndex(), t = this.getTodayInitKey(e);
if (this.getData().initializedGameNum !== t) if (e >= this.maxConfiguredRound) this.setData({
scoreThreshold: -1,
hasTriggeredByScore: !1,
initializedGameNum: t
}); else {
var r = this.getScoreRangeByGameNum(e);
if (r) {
var o = this.randomInt(r[0], r[1]);
this.setData({
scoreThreshold: o,
hasTriggeredByScore: !1,
initializedGameNum: t
});
} else this.setData({
scoreThreshold: -1,
hasTriggeredByScore: !1,
initializedGameNum: t
});
}
};
return n([ classId("LWMDualConditionHardPuzzleTrait", "iosActive"), classMethodWatch() ], t);
}(e("./LWMDualConditionHardPuzzleTrait").LWMDualConditionHardPuzzleTrait);
r.LWMDualConditionHardPuzzle_iosActive_Trait = a;
cc._RF.pop();
}, {
"./LWMDualConditionHardPuzzleTrait": "LWMDualConditionHardPuzzleTrait"
} ],
LWMDualConditionHardPuzzle_ios_Trait: [ function(e, t, r) {
"use strict";
cc._RF.push(t, "1c660GCvtRD7JM1dqcYeiw+", "LWMDualConditionHardPuzzle_ios_Trait");
var o, i = this && this.__extends || (o = function(e, t) {
return (o = Object.setPrototypeOf || {
__proto__: []
} instanceof Array && function(e, t) {
e.__proto__ = t;
} || function(e, t) {
for (var r in t) Object.prototype.hasOwnProperty.call(t, r) && (e[r] = t[r]);
})(e, t);
}, function(e, t) {
o(e, t);
function r() {
this.constructor = e;
}
e.prototype = null === t ? Object.create(t) : (r.prototype = t.prototype, new r());
}), n = this && this.__decorate || function(e, t, r, o) {
var i, n = arguments.length, a = n < 3 ? t : null === o ? o = Object.getOwnPropertyDescriptor(t, r) : o;
if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) a = Reflect.decorate(e, t, r, o); else for (var s = e.length - 1; s >= 0; s--) (i = e[s]) && (a = (n < 3 ? i(a) : n > 3 ? i(t, r, a) : i(t, r)) || a);
return n > 3 && a && Object.defineProperty(t, r, a), a;
};
Object.defineProperty(r, "__esModule", {
value: !0
});
r.LWMDualConditionHardPuzzle_ios_Trait = void 0;
var a = function(e) {
i(t, e);
function t() {
return null !== e && e.apply(this, arguments) || this;
}
t.prototype.isClassAlgorithmStrategyIOS_Deal_ProxyTriggerAlgorithm_Puzzle100 = function() {
if (this.isConditionMet()) {
var e = this.getData();
if (e.hasTriggeredByScore) ; else if (!(e.scoreThreshold < 0) && hs.scoreInfo.score >= e.scoreThreshold) {
var t = TRAIT("Puzzle100Trait");
if (null == t ? void 0 : t.active) {
this.setData({
hasTriggeredByScore: !0
});
t.setState({
hard100Status: hs.Hard100Status.open
});
hs.algorithmStrategyInfo.setAlgorithmSourceLevel1(hs.ClassAlgorithmSourceType.Puzzle100);
hs.algorithmStrategyInfo.setAlgorithmList([ hs.OFFER_TYPE.KUN_NAN_TI ]);
}
}
}
};
t.prototype.isConditionMet = function() {
return hs.gameInfo.gameMode === hs.GameMode.Class;
};
return n([ classId("LWMDualConditionHardPuzzleTrait", "ios"), classMethodWatch() ], t);
}(e("./LWMDualConditionHardPuzzleTrait").LWMDualConditionHardPuzzleTrait);
r.LWMDualConditionHardPuzzle_ios_Trait = a;
cc._RF.pop();
}, {
"./LWMDualConditionHardPuzzleTrait": "LWMDualConditionHardPuzzleTrait"
} ]
}, {}, [ "LWMDualConditionHardPuzzleTrait", "LWMDualConditionHardPuzzle_iosActive_Trait", "LWMDualConditionHardPuzzle_ios_Trait" ]);
//# sourceMappingURL=index.js.map
