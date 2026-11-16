window.__require = function e(t, r, o) {
function i(c, a) {
if (!r[c]) {
if (!t[c]) {
var u = c.split("/");
u = u[u.length - 1];
if (!t[u]) {
var s = "function" == typeof __require && __require;
if (!a && s) return s(u, !0);
if (n) return n(u, !0);
throw new Error("Cannot find module '" + c + "'");
}
c = u;
}
var h = r[c] = {
exports: {}
};
t[c][0].call(h.exports, function(e) {
return i(t[c][1][e] || e);
}, h, h.exports, e, t, r, o);
}
return r[c].exports;
}
for (var n = "function" == typeof __require && __require, c = 0; c < o.length; c++) i(o[c]);
return i;
}({
GameLobbyUnlockByBreakHighScoreTrait: [ function(e, t, r) {
"use strict";
cc._RF.push(t, "ab024IQU+JCvZtOfKSlbS55", "GameLobbyUnlockByBreakHighScoreTrait");
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
var i, n = arguments.length, c = n < 3 ? t : null === o ? o = Object.getOwnPropertyDescriptor(t, r) : o;
if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) c = Reflect.decorate(e, t, r, o); else for (var a = e.length - 1; a >= 0; a--) (i = e[a]) && (c = (n < 3 ? i(c) : n > 3 ? i(t, r, c) : i(t, r)) || c);
return n > 3 && c && Object.defineProperty(t, r, c), c;
}, c = this && this.__values || function(e) {
var t = "function" == typeof Symbol && Symbol.iterator, r = t && e[t], o = 0;
if (r) return r.call(e);
if (e && "number" == typeof e.length) return {
next: function() {
e && o >= e.length && (e = void 0);
return {
value: e && e[o++],
done: !e
};
}
};
throw new TypeError(t ? "Object is not iterable." : "Symbol.iterator is not defined.");
};
Object.defineProperty(r, "__esModule", {
value: !0
});
r.GameLobbyUnlockByBreakHighScoreTrait = void 0;
var a = function(e) {
i(t, e);
function t() {
var t = null !== e && e.apply(this, arguments) || this;
t.isRedNoticed = !1;
return t;
}
t.prototype.data = function() {
return {
high_score_uplift: 0,
high_score_uplift_model: -2
};
};
t.prototype.onCreate = function() {
this.isRedNoticed || this.requestBreakHighScoreModel();
};
t.prototype.onActive = function() {};
t.prototype.requestBreakHighScoreModel = function() {
var e = this;
this.setState({
high_score_uplift_model: -2,
high_score_uplift: 0
});
hs.httpBreakHighScoreInfo.request({
uid: hs.traitServerRequestInfo.uid,
os: "android",
callback: function() {
if (e.shouldIgnore4w()) {
e.setState({
high_score_uplift_model: 2,
high_score_uplift: hs.httpBreakHighScoreInfo.score
});
e.isRedNoticed = !0;
hs.gameLobby_DataInfo.setIsRed(!1);
e.showSetupRedPoint();
e.showHomePageRedPoint();
} else e.setState({
high_score_uplift_model: 1,
high_score_uplift: hs.httpBreakHighScoreInfo.score
});
}
});
};
t.prototype.showSetupRedPoint = function() {
var e, t = Cinst(hs.Setup);
if (cc.isValid(null == t ? void 0 : t.node) && t.node.activeInHierarchy) {
var r = null === (e = t.node.getComponentsInChildren(hs.SetupBtnItem)) || void 0 === e ? void 0 : e.find(function(e) {
return e.state.key === hs.enSetupKeys.moreGames;
});
r && (r.redNode.active = !0);
}
};
t.prototype.showHomePageRedPoint = function() {
var e, t = Cinst(hs.HomePage);
if (cc.isValid(null == t ? void 0 : t.node) && t.node.activeInHierarchy) {
var r = null === (e = this.findChildByName(t.node, "GameLobbyAddMoreGame")) || void 0 === e ? void 0 : e.getChildByName("red");
r && (r.active = !0);
}
};
t.prototype.findChildByName = function(e, t) {
var r, o;
if (!e) return null;
var i = e.getChildByName(t);
if (i) return i;
try {
for (var n = c(e.children), a = n.next(); !a.done; a = n.next()) {
var u = a.value, s = this.findChildByName(u, t);
if (s) return s;
}
} catch (e) {
r = {
error: e
};
} finally {
try {
a && !a.done && (o = n.return) && o.call(n);
} finally {
if (r) throw r.error;
}
}
return null;
};
t.prototype.shouldIgnore4w = function() {
if (0 === this.props.type) return 0 === hs.httpBreakHighScoreInfo.predictGameNumScore;
if (1 === this.props.type) {
var e = hs.httpBreakHighScoreInfo.score;
return null != e && e < 0;
}
return !1;
};
n([ hs.storageProperty({
key: "GameLobbyUnlockByBreakHighScoreTraiKey"
}) ], t.prototype, "isRedNoticed", void 0);
return n([ classId("GameLobbyUnlockByBreakHighScoreTrait") ], t);
}(Trait);
r.GameLobbyUnlockByBreakHighScoreTrait = a;
cc._RF.pop();
}, {} ]
}, {}, [ "GameLobbyUnlockByBreakHighScoreTrait" ]);
//# sourceMappingURL=index.js.map
