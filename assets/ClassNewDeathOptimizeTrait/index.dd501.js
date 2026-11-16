window.__require = function e(t, i, a) {
function s(r, n) {
if (!i[r]) {
if (!t[r]) {
var p = r.split("/");
p = p[p.length - 1];
if (!t[p]) {
var c = "function" == typeof __require && __require;
if (!n && c) return c(p, !0);
if (o) return o(p, !0);
throw new Error("Cannot find module '" + r + "'");
}
r = p;
}
var h = i[r] = {
exports: {}
};
t[r][0].call(h.exports, function(e) {
return s(t[r][1][e] || e);
}, h, h.exports, e, t, i, a);
}
return i[r].exports;
}
for (var o = "function" == typeof __require && __require, r = 0; r < a.length; r++) s(a[r]);
return s;
}({
ClassNewDeathOptimizeConfig: [ function(e, t, i) {
"use strict";
cc._RF.push(t, "c1485H65cJMmpoZG0FO4SUD", "ClassNewDeathOptimizeConfig");
Object.defineProperty(i, "__esModule", {
value: !0
});
i.classNewDeathOptimizeConfig = void 0;
i.classNewDeathOptimizeConfig = new function() {
this.FIRST_GAME_TIME_THRESHOLD = 120;
this.FIRST_GAME_ROUND_THRESHOLD = 10;
this.FIRST_GAME_SCORE_THRESHOLD = 1500;
this.PROTECTION_GAME_COUNT = 5;
}();
cc._RF.pop();
}, {} ],
ClassNewDeathOptimizeInfo: [ function(e, t, i) {
"use strict";
cc._RF.push(t, "8a276FOOwhJ/qmJrMkpKleJ", "ClassNewDeathOptimizeInfo");
var a = this && this.__assign || function() {
return (a = Object.assign || function(e) {
for (var t, i = 1, a = arguments.length; i < a; i++) {
t = arguments[i];
for (var s in t) Object.prototype.hasOwnProperty.call(t, s) && (e[s] = t[s]);
}
return e;
}).apply(this, arguments);
};
Object.defineProperty(i, "__esModule", {
value: !0
});
i.classNewDeathOptimizeInfo = void 0;
var s = function() {
function e() {
this.STORAGE_KEY_STATE = "classNewDeathOptimize_state";
this.init();
}
e.prototype.init = function() {
this._state = this.loadState();
};
Object.defineProperty(e.prototype, "state", {
get: function() {
return this._state;
},
enumerable: !1,
configurable: !0
});
Object.defineProperty(e.prototype, "triggered", {
get: function() {
return this._state.triggered;
},
enumerable: !1,
configurable: !0
});
e.prototype.setTriggered = function(e) {
this._state.triggered = e;
this._state.lastUpdateTime = Date.now();
};
Object.defineProperty(e.prototype, "gameIdCounter", {
get: function() {
return this._state.gameIdCounter;
},
enumerable: !1,
configurable: !0
});
e.prototype.setGameIdCounter = function(e) {
this._state.gameIdCounter = e;
this._state.lastUpdateTime = Date.now();
};
Object.defineProperty(e.prototype, "firstGameData", {
get: function() {
return this._state.firstGameData;
},
enumerable: !1,
configurable: !0
});
e.prototype.setFirstGameData = function(e) {
this._state.firstGameData = e;
this._state.lastUpdateTime = Date.now();
};
Object.defineProperty(e.prototype, "hasIntercepted", {
get: function() {
return this._state.hasIntercepted;
},
enumerable: !1,
configurable: !0
});
e.prototype.setHasIntercepted = function(e) {
this._state.hasIntercepted = e;
this._state.lastUpdateTime = Date.now();
};
e.prototype.loadState = function() {
var e = {
triggered: !1,
gameIdCounter: 0,
firstGameData: void 0,
hasIntercepted: !1,
lastUpdateTime: Date.now()
}, t = storage.getItem(this.STORAGE_KEY_STATE);
return t && "object" == typeof t ? a(a({}, e), t) : e;
};
e.prototype.saveState = function() {
this._state.lastUpdateTime = Date.now();
storage.setItem(this.STORAGE_KEY_STATE, this._state);
};
e.prototype.resetState = function() {
this._state = {
triggered: !1,
gameIdCounter: 0,
firstGameData: void 0,
hasIntercepted: !1,
lastUpdateTime: Date.now()
};
this.saveState();
};
e.prototype.recordFirstGameData = function(e, t, i) {
this._state.firstGameData = {
spendTime: e,
roundNum: t,
score: i,
timestamp: Date.now()
};
this.saveState();
};
e.prototype.clearFirstGameData = function() {
this._state.firstGameData = void 0;
this.saveState();
};
e.prototype.incrementGameId = function() {
this._state.gameIdCounter;
this._state.gameIdCounter++;
this.saveState();
};
e.prototype.resetGameIdCounter = function() {
this._state.gameIdCounter = 0;
this.saveState();
};
return e;
}();
i.classNewDeathOptimizeInfo = new s();
cc._RF.pop();
}, {} ],
ClassNewDeathOptimizeTrait: [ function(e, t, i) {
"use strict";
cc._RF.push(t, "c1235W5l0RAeZEF26l/Ef6w", "ClassNewDeathOptimizeTrait");
var a, s = this && this.__extends || (a = function(e, t) {
return (a = Object.setPrototypeOf || {
__proto__: []
} instanceof Array && function(e, t) {
e.__proto__ = t;
} || function(e, t) {
for (var i in t) Object.prototype.hasOwnProperty.call(t, i) && (e[i] = t[i]);
})(e, t);
}, function(e, t) {
a(e, t);
function i() {
this.constructor = e;
}
e.prototype = null === t ? Object.create(t) : (i.prototype = t.prototype, new i());
}), o = this && this.__decorate || function(e, t, i, a) {
var s, o = arguments.length, r = o < 3 ? t : null === a ? a = Object.getOwnPropertyDescriptor(t, i) : a;
if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) r = Reflect.decorate(e, t, i, a); else for (var n = e.length - 1; n >= 0; n--) (s = e[n]) && (r = (o < 3 ? s(r) : o > 3 ? s(t, i, r) : s(t, i)) || r);
return o > 3 && r && Object.defineProperty(t, i, r), r;
};
Object.defineProperty(i, "__esModule", {
value: !0
});
i.ClassNewDeathOptimizeTrait = void 0;
var r = e("./types/ClassNewDeathOptimizeType"), n = e("./vo/ClassNewDeathOptimizeInfo"), p = e("./configs/ClassNewDeathOptimizeConfig"), c = function(e) {
s(t, e);
function t() {
return null !== e && e.apply(this, arguments) || this;
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
t.prototype.onActive = function(e) {
if (hs.tpManual.isClassAlgorithmBottomSequenceGPInfoTriggerBottomOfferAlgo(e)) {
if (this.breakTrait()) return;
this.handleDeathAlgorithmFallback(e);
}
if (this.getType() === r.ParamType.FIRST_GAME_PROTECTION) {
hs.tp.isClassGame_ProxyOnGameStart(e) && this.onGameStart(e);
hs.tp.isClassGameOver_GameEnd_ProxyOnGameEnd(e) && this.onGameEnd(e);
}
};
t.prototype.breakTrait = function() {
return !1;
};
t.prototype.getType = function() {
var e;
return null !== (e = this.props.type) && void 0 !== e ? e : r.ParamType.NEW_USER_NO_DEATH;
};
t.prototype.handleDeathAlgorithmFallback = function(e) {
var t = hs.algorithmName.algoActualName;
if (t && 3 === t.length && t.every(function(e) {
return e.includes("致死题");
})) switch (this.getType()) {
case r.ParamType.NEW_USER_NO_DEATH:
this.handleType1Fallback(e);
break;

case r.ParamType.FIRST_GAME_PROTECTION:
this.handleType2Fallback(e);
}
};
t.prototype.adjustAlgorithmList = function(e) {
return e;
};
t.prototype.handleType1Fallback = function() {
var e = [ hs.OFFER_TYPE.VERY_DIFFICULT_HARD, hs.OFFER_TYPE.KUN_NAN_TI, hs.OFFER_TYPE.LINK_SMALL_BORDER, hs.OFFER_TYPE.SHANG_ZENG_3 ];
e = this.adjustAlgorithmList(e);
hs.algorithmBottomSequenceInfo.setAlgorithmBottomList(e);
};
t.prototype.handleType2Fallback = function() {
if (this.isInProtectionPeriod()) {
var e = [ hs.OFFER_TYPE.VERY_DIFFICULT_HARD, hs.OFFER_TYPE.KUN_NAN_TI, hs.OFFER_TYPE.HIGH_NEAR ];
e = this.adjustAlgorithmList(e);
hs.algorithmBottomSequenceInfo.setAlgorithmBottomList(e);
}
};
t.prototype.onGameStart = function() {};
t.prototype.onGameEnd = function() {
if (this.checkGameTrigger()) {
n.classNewDeathOptimizeInfo.setTriggered(!0);
n.classNewDeathOptimizeInfo.setGameIdCounter(1);
n.classNewDeathOptimizeInfo.saveState();
} else if (n.classNewDeathOptimizeInfo.triggered) if (n.classNewDeathOptimizeInfo.gameIdCounter < p.classNewDeathOptimizeConfig.PROTECTION_GAME_COUNT) n.classNewDeathOptimizeInfo.incrementGameId(); else {
n.classNewDeathOptimizeInfo.setTriggered(!1);
n.classNewDeathOptimizeInfo.resetGameIdCounter();
n.classNewDeathOptimizeInfo.saveState();
}
};
t.prototype.checkGameTrigger = function() {
if (n.classNewDeathOptimizeInfo.triggered) return !1;
var e = hs.classTimerInfo.spendTime / 1e3, t = hs.classGameInfo.roundNum, i = hs.classScoreInfo.score, a = p.classNewDeathOptimizeConfig, s = e <= a.FIRST_GAME_TIME_THRESHOLD, o = t <= a.FIRST_GAME_ROUND_THRESHOLD, r = i <= a.FIRST_GAME_SCORE_THRESHOLD, c = s || o || r;
c && n.classNewDeathOptimizeInfo.recordFirstGameData(e, t, i);
return c;
};
t.prototype.isInProtectionPeriod = function() {
return n.classNewDeathOptimizeInfo.triggered && n.classNewDeathOptimizeInfo.gameIdCounter > 0 && n.classNewDeathOptimizeInfo.gameIdCounter <= p.classNewDeathOptimizeConfig.PROTECTION_GAME_COUNT;
};
return o([ classId("ClassNewDeathOptimizeTrait"), classMethodWatch() ], t);
}(Trait);
i.ClassNewDeathOptimizeTrait = c;
cc._RF.pop();
}, {
"./configs/ClassNewDeathOptimizeConfig": "ClassNewDeathOptimizeConfig",
"./types/ClassNewDeathOptimizeType": "ClassNewDeathOptimizeType",
"./vo/ClassNewDeathOptimizeInfo": "ClassNewDeathOptimizeInfo"
} ],
ClassNewDeathOptimizeType: [ function(e, t, i) {
"use strict";
cc._RF.push(t, "40f39MZdSNKXZVQZqdciZ5g", "ClassNewDeathOptimizeType");
Object.defineProperty(i, "__esModule", {
value: !0
});
i.DegradeStage = i.ParamType = void 0;
(function(e) {
e[e.NEW_USER_NO_DEATH = 1] = "NEW_USER_NO_DEATH";
e[e.FIRST_GAME_PROTECTION = 2] = "FIRST_GAME_PROTECTION";
})(i.ParamType || (i.ParamType = {}));
(function(e) {
e[e.VERY_DIFFICULT = 0] = "VERY_DIFFICULT";
e[e.DIFFICULT = 1] = "DIFFICULT";
e[e.STAGE_3 = 2] = "STAGE_3";
e[e.STAGE_4 = 3] = "STAGE_4";
e[e.FINAL_FALLBACK = 4] = "FINAL_FALLBACK";
})(i.DegradeStage || (i.DegradeStage = {}));
cc._RF.pop();
}, {} ],
IClassNewDeathOptimize: [ function(e, t, i) {
"use strict";
cc._RF.push(t, "900fbsfyiZM573Gbsnjbduf", "IClassNewDeathOptimize");
Object.defineProperty(i, "__esModule", {
value: !0
});
cc._RF.pop();
}, {} ]
}, {}, [ "ClassNewDeathOptimizeTrait", "ClassNewDeathOptimizeConfig", "IClassNewDeathOptimize", "ClassNewDeathOptimizeType", "ClassNewDeathOptimizeInfo" ]);
//# sourceMappingURL=index.js.map
