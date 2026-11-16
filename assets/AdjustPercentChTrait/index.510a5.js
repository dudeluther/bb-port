window.__require = function e(t, r, i) {
function o(n, u) {
if (!r[n]) {
if (!t[n]) {
var l = n.split("/");
l = l[l.length - 1];
if (!t[l]) {
var c = "function" == typeof __require && __require;
if (!u && c) return c(l, !0);
if (s) return s(l, !0);
throw new Error("Cannot find module '" + n + "'");
}
n = l;
}
var a = r[n] = {
exports: {}
};
t[n][0].call(a.exports, function(e) {
return o(t[n][1][e] || e);
}, a, a.exports, e, t, r, i);
}
return r[n].exports;
}
for (var s = "function" == typeof __require && __require, n = 0; n < i.length; n++) o(i[n]);
return o;
}({
AdjustPercentChTrait: [ function(e, t, r) {
"use strict";
cc._RF.push(t, "3f06e0erW1A4JoebLcVfpiG", "AdjustPercentChTrait");
var i, o = this && this.__extends || (i = function(e, t) {
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
}), s = this && this.__decorate || function(e, t, r, i) {
var o, s = arguments.length, n = s < 3 ? t : null === i ? i = Object.getOwnPropertyDescriptor(t, r) : i;
if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) n = Reflect.decorate(e, t, r, i); else for (var u = e.length - 1; u >= 0; u--) (o = e[u]) && (n = (s < 3 ? o(n) : s > 3 ? o(t, r, n) : o(t, r)) || n);
return s > 3 && n && Object.defineProperty(t, r, n), n;
};
Object.defineProperty(r, "__esModule", {
value: !0
});
r.AdjustPercentChTrait = void 0;
var n = function(e) {
o(t, e);
function t() {
return null !== e && e.apply(this, arguments) || this;
}
Object.defineProperty(t.prototype, "threshold1", {
get: function() {
var e, t;
return null !== (t = null === (e = this.props) || void 0 === e ? void 0 : e.scoreThresholdVeryHigh) && void 0 !== t ? t : 2e4;
},
enumerable: !1,
configurable: !0
});
Object.defineProperty(t.prototype, "threshold2", {
get: function() {
var e, t;
return null !== (t = null === (e = this.props) || void 0 === e ? void 0 : e.scoreThresholdHigh) && void 0 !== t ? t : 15e3;
},
enumerable: !1,
configurable: !0
});
Object.defineProperty(t.prototype, "threshold3", {
get: function() {
var e, t;
return null !== (t = null === (e = this.props) || void 0 === e ? void 0 : e.scoreThresholdMedium) && void 0 !== t ? t : 1e4;
},
enumerable: !1,
configurable: !0
});
Object.defineProperty(t.prototype, "threshold4", {
get: function() {
var e, t;
return null !== (t = null === (e = this.props) || void 0 === e ? void 0 : e.scoreThresholdLow) && void 0 !== t ? t : 5e3;
},
enumerable: !1,
configurable: !0
});
Object.defineProperty(t.prototype, "delaySeconds1", {
get: function() {
var e, t;
return null !== (t = null === (e = this.props) || void 0 === e ? void 0 : e.timeDelayVeryHigh) && void 0 !== t ? t : 30;
},
enumerable: !1,
configurable: !0
});
Object.defineProperty(t.prototype, "delaySeconds2", {
get: function() {
var e, t;
return null !== (t = null === (e = this.props) || void 0 === e ? void 0 : e.timeDelayHigh) && void 0 !== t ? t : 60;
},
enumerable: !1,
configurable: !0
});
t.prototype.data = function() {
return hs.storage.getItem("AdjustPercentChTrait", {
firstPuzzleScore: 0,
triggeredPuzzleCount: 0
});
};
Object.defineProperty(t.prototype, "onActiveCondition", {
get: function() {
return hs.gameInfo.gameType === hs.GameType.Class;
},
enumerable: !1,
configurable: !0
});
t.prototype.onActive = function(e) {
hs.tp.isClassAlgorithmLifeCycle_GameStart_ProxyNewGameInit(e) && this.resetState();
hs.tp.isIsPuzzleTimeTraitFirstPuzzleTimeCall(e) && this.onFirstPuzzleTimeTriggered();
hs.tp.isIsPuzzleTimeTraitOtherPuzzleTimeCall(e) && this.onOtherPuzzleTimeTriggered();
};
t.prototype.resetState = function() {
this.state.firstPuzzleScore = 0;
this.state.triggeredPuzzleCount = 0;
this.saveData();
};
t.prototype.onFirstPuzzleTimeTriggered = function() {
var e, t, r = null !== (t = null === (e = hs.classScoreInfo) || void 0 === e ? void 0 : e.score) && void 0 !== t ? t : 0;
this.state.firstPuzzleScore = r;
this.state.triggeredPuzzleCount = 1;
this.saveData();
r > this.threshold1 ? this.setPuzzle100Time(this.delaySeconds1) : r > this.threshold2 ? this.setPuzzle100Time(this.delaySeconds2) : this.threshold4;
};
t.prototype.onOtherPuzzleTimeTriggered = function() {
var e, t, r = (null !== (e = this.state.triggeredPuzzleCount) && void 0 !== e ? e : 0) + 1;
this.state.triggeredPuzzleCount = r;
this.saveData();
var i = null !== (t = this.state.firstPuzzleScore) && void 0 !== t ? t : 0;
i > this.threshold3 && i <= this.threshold2 ? 2 === r && this.setPuzzle100Time(0) : i > this.threshold4 && i <= this.threshold3 && 3 === r && this.setPuzzle100Time(0);
};
t.prototype.setPuzzle100Time = function(e) {
var t = TRAIT("Puzzle100Trait");
if (t && t.state) {
t.state.puzzleTime;
var r = (Date.now() - t.state.initTime) / 1e3;
t.state.puzzleTime = r + e;
}
};
t.prototype.saveData = function() {
hs.storage.setItem("AdjustPercentChTrait", this.state);
};
s([ hs.Algorithm() ], t.prototype, "onActive", null);
return s([ classId("AdjustPercentChTrait") ], t);
}(Trait);
r.AdjustPercentChTrait = n;
cc._RF.pop();
}, {} ],
AdjustPercentCh_ios_Trait: [ function(e, t, r) {
"use strict";
cc._RF.push(t, "47d80fALV5IVKfd2H7nC63/", "AdjustPercentCh_ios_Trait");
var i, o = this && this.__extends || (i = function(e, t) {
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
}), s = this && this.__decorate || function(e, t, r, i) {
var o, s = arguments.length, n = s < 3 ? t : null === i ? i = Object.getOwnPropertyDescriptor(t, r) : i;
if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) n = Reflect.decorate(e, t, r, i); else for (var u = e.length - 1; u >= 0; u--) (o = e[u]) && (n = (s < 3 ? o(n) : s > 3 ? o(t, r, n) : o(t, r)) || n);
return s > 3 && n && Object.defineProperty(t, r, n), n;
};
Object.defineProperty(r, "__esModule", {
value: !0
});
r.AdjustPercentCh_ios_Trait = void 0;
var n = function(e) {
o(t, e);
function t() {
var t = null !== e && e.apply(this, arguments) || this;
t.isPuzzleTimeTriggered = !1;
return t;
}
t.prototype.isClassAlgorithmLifeCycle_GameStart_ProxyNewGameInit = function() {
this.state.firstPuzzleScore = 0;
this.state.triggeredPuzzleCount = 0;
this.isPuzzleTimeTriggered = !1;
this.saveData();
};
t.prototype.isIsPuzzleTimeTraitFirstPuzzleTimeCall = function() {
this.isPuzzleTimeTriggered || this.firstPuzzleTimeTriggered();
};
t.prototype.firstPuzzleTimeTriggered = function() {
var e, t, r = null !== (t = null === (e = hs.classScoreInfo) || void 0 === e ? void 0 : e.score) && void 0 !== t ? t : 0;
this.state.firstPuzzleScore = r;
this.state.triggeredPuzzleCount = 1;
this.saveData();
if (r > this.threshold1) {
this.setPuzzle100Time(this.delaySeconds1);
this.isPuzzleTimeTriggered = !0;
} else if (r > this.threshold2) {
this.setPuzzle100Time(this.delaySeconds2);
this.isPuzzleTimeTriggered = !0;
} else this.threshold4;
};
t.prototype.onActive = function(t) {
e.prototype.onActive.call(this, t);
};
return s([ classId("AdjustPercentChTrait", "ios") ], t);
}(e("./AdjustPercentChTrait").AdjustPercentChTrait);
r.AdjustPercentCh_ios_Trait = n;
cc._RF.pop();
}, {
"./AdjustPercentChTrait": "AdjustPercentChTrait"
} ]
}, {}, [ "AdjustPercentChTrait", "AdjustPercentCh_ios_Trait" ]);
//# sourceMappingURL=index.js.map
