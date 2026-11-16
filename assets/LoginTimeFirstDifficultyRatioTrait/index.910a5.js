window.__require = function t(e, i, r) {
function o(s, a) {
if (!i[s]) {
if (!e[s]) {
var u = s.split("/");
u = u[u.length - 1];
if (!e[u]) {
var f = "function" == typeof __require && __require;
if (!a && f) return f(u, !0);
if (n) return n(u, !0);
throw new Error("Cannot find module '" + s + "'");
}
s = u;
}
var c = i[s] = {
exports: {}
};
e[s][0].call(c.exports, function(t) {
return o(e[s][1][t] || t);
}, c, c.exports, t, e, i, r);
}
return i[s].exports;
}
for (var n = "function" == typeof __require && __require, s = 0; s < r.length; s++) o(r[s]);
return o;
}({
LoginTimeFirstDifficultyRatioTrait: [ function(t, e, i) {
"use strict";
cc._RF.push(e, "93bdd4G6hhGRJV/7ZkL0T/L", "LoginTimeFirstDifficultyRatioTrait");
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
}), n = this && this.__decorate || function(t, e, i, r) {
var o, n = arguments.length, s = n < 3 ? e : null === r ? r = Object.getOwnPropertyDescriptor(e, i) : r;
if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) s = Reflect.decorate(t, e, i, r); else for (var a = t.length - 1; a >= 0; a--) (o = t[a]) && (s = (n < 3 ? o(s) : n > 3 ? o(e, i, s) : o(e, i)) || s);
return n > 3 && s && Object.defineProperty(e, i, s), s;
};
Object.defineProperty(i, "__esModule", {
value: !0
});
i.LoginTimeFirstDifficultyRatioTrait = void 0;
var s = function(t) {
o(e, t);
function e() {
var e = null !== t && t.apply(this, arguments) || this;
e.info = {
time: 0,
gameStartNum: 0,
preLoginDays: 0
};
return e;
}
e.prototype.onCreate = function() {
0 == this.info.preLoginDays && (this.info.preLoginDays = hs.gameInfo.activeDays.length);
};
e.prototype.onActive = function(t) {
if (hs.tp.isClassAlgorithmStrategy_Reset_ProxyPreprocessing_PuzzleTime(t)) {
if (!hs.isToday(this.info.time)) {
this.info.time = Date.now();
this.info.gameStartNum = hs.classGameInfo.gameNum;
}
var e = hs.gameInfo.activeDays.length - this.info.preLoginDays + 1;
hs.httpLoginFirstHard.request({
key: hs.traitServerRequestInfo.uid,
req_type: this.req_type,
x: e
}, this.updatePuzzleTime.bind(this));
}
};
e.prototype.updatePuzzleTime = function() {
var t = hs.httpLoginFirstHard.respData;
if (t.g > 0 && t.r > 0) {
if (hs.classGameInfo.gameNum - this.info.gameStartNum >= t.g) return;
var e = TRAIT("IsPuzzleTimeTrait");
if (null == e ? void 0 : e.active) {
var i = e.state.puzzleTimeFirst, r = Math.floor(i * t.r);
e.setState({
puzzleTimeFirst: r
});
}
}
};
Object.defineProperty(e.prototype, "req_type", {
get: function() {
var t;
switch (null === (t = this.props) || void 0 === t ? void 0 : t.plan) {
case 1:
return "new_user_speed_low";

case 2:
return "new_user_speed_high";

case 11:
return "active_user_speed_low";

case 12:
return "active_user_speed_high";
}
return "new_user_speed_low";
},
enumerable: !1,
configurable: !0
});
n([ hs.storageProperty({
key: "LoginTimeFirstDifficultyRatioInfo"
}) ], e.prototype, "info", void 0);
return n([ classId("LoginTimeFirstDifficultyRatioTrait") ], e);
}(Trait);
i.LoginTimeFirstDifficultyRatioTrait = s;
cc._RF.pop();
}, {} ]
}, {}, [ "LoginTimeFirstDifficultyRatioTrait" ]);
//# sourceMappingURL=index.js.map
