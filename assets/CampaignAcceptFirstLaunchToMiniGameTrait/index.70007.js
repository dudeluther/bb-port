window.__require = function e(t, n, r) {
function i(o, c) {
if (!n[o]) {
if (!t[o]) {
var u = o.split("/");
u = u[u.length - 1];
if (!t[u]) {
var s = "function" == typeof __require && __require;
if (!c && s) return s(u, !0);
if (a) return a(u, !0);
throw new Error("Cannot find module '" + o + "'");
}
o = u;
}
var l = n[o] = {
exports: {}
};
t[o][0].call(l.exports, function(e) {
return i(t[o][1][e] || e);
}, l, l.exports, e, t, n, r);
}
return n[o].exports;
}
for (var a = "function" == typeof __require && __require, o = 0; o < r.length; o++) i(r[o]);
return i;
}({
CampaignAcceptFirstLaunchToMiniGameTrait: [ function(e, t, n) {
"use strict";
cc._RF.push(t, "62644qLNQ9CDrIZ1ZxJtfGO", "CampaignAcceptFirstLaunchToMiniGameTrait");
var r, i = this && this.__extends || (r = function(e, t) {
return (r = Object.setPrototypeOf || {
__proto__: []
} instanceof Array && function(e, t) {
e.__proto__ = t;
} || function(e, t) {
for (var n in t) Object.prototype.hasOwnProperty.call(t, n) && (e[n] = t[n]);
})(e, t);
}, function(e, t) {
r(e, t);
function n() {
this.constructor = e;
}
e.prototype = null === t ? Object.create(t) : (n.prototype = t.prototype, new n());
}), a = this && this.__decorate || function(e, t, n, r) {
var i, a = arguments.length, o = a < 3 ? t : null === r ? r = Object.getOwnPropertyDescriptor(t, n) : r;
if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) o = Reflect.decorate(e, t, n, r); else for (var c = e.length - 1; c >= 0; c--) (i = e[c]) && (o = (a < 3 ? i(o) : a > 3 ? i(t, n, o) : i(t, n)) || o);
return a > 3 && o && Object.defineProperty(t, n, o), o;
}, o = this && this.__generator || function(e, t) {
var n, r, i, a, o = {
label: 0,
sent: function() {
if (1 & i[0]) throw i[1];
return i[1];
},
trys: [],
ops: []
};
return a = {
next: c(0),
throw: c(1),
return: c(2)
}, "function" == typeof Symbol && (a[Symbol.iterator] = function() {
return this;
}), a;
function c(e) {
return function(t) {
return u([ e, t ]);
};
}
function u(a) {
if (n) throw new TypeError("Generator is already executing.");
for (;o; ) try {
if (n = 1, r && (i = 2 & a[0] ? r.return : a[0] ? r.throw || ((i = r.return) && i.call(r), 
0) : r.next) && !(i = i.call(r, a[1])).done) return i;
(r = 0, i) && (a = [ 2 & a[0], i.value ]);
switch (a[0]) {
case 0:
case 1:
i = a;
break;

case 4:
o.label++;
return {
value: a[1],
done: !1
};

case 5:
o.label++;
r = a[1];
a = [ 0 ];
continue;

case 7:
a = o.ops.pop();
o.trys.pop();
continue;

default:
if (!(i = o.trys, i = i.length > 0 && i[i.length - 1]) && (6 === a[0] || 2 === a[0])) {
o = 0;
continue;
}
if (3 === a[0] && (!i || a[1] > i[0] && a[1] < i[3])) {
o.label = a[1];
break;
}
if (6 === a[0] && o.label < i[1]) {
o.label = i[1];
i = a;
break;
}
if (i && o.label < i[2]) {
o.label = i[2];
o.ops.push(a);
break;
}
i[2] && o.ops.pop();
o.trys.pop();
continue;
}
a = t.call(e, o);
} catch (e) {
a = [ 6, e ];
r = 0;
} finally {
n = i = 0;
}
if (5 & a[0]) throw a[1];
return {
value: a[0] ? a[1] : void 0,
done: !0
};
}
};
Object.defineProperty(n, "__esModule", {
value: !0
});
n.CampaignAcceptFirstLaunchToMiniGameTrait = void 0;
var c = function(e) {
i(t, e);
function t() {
return null !== e && e.apply(this, arguments) || this;
}
t.prototype.data = function() {
return {
hasEnteredMiniGameOnFirstLaunch: !1,
isFromLaunchToMiniGame: !1
};
};
t.prototype.onCreate = function() {
var e = hs.storage.getItem("CampaignAcceptFirstLaunchToMiniGameTrait_T", {
hasEnteredMiniGameOnFirstLaunch: !1
}).hasEnteredMiniGameOnFirstLaunch;
this.state.hasEnteredMiniGameOnFirstLaunch = null != e && e;
};
Object.defineProperty(t.prototype, "onActiveCondition", {
get: function() {
var e = TRAIT("GameLobbyTrait");
return !(!e || !e.active);
},
enumerable: !1,
configurable: !0
});
t.prototype.isLaunchChangeLaunchScene = function(e) {
var t, n, r = this;
if (!this.state.hasEnteredMiniGameOnFirstLaunch) {
var i = hs.attributionInfo.gadCampaignId;
if (i) {
var a = (null !== (n = null === (t = this.props) || void 0 === t ? void 0 : t.mimiGameMap) && void 0 !== n ? n : {})[i];
if (a && Object.values(hs.GameLobbyBundleName).includes(a) && !hs.gameLobbyInfo.isRemote(a)) try {
e.returnState = !0;
e.replace = !0;
this.waitGameLobbyInitReady(function(t) {
t ? hs.gameLobby_DataInfo.enterGame(a, function(t) {
if (t) {
hs.storage.setItem("CampaignAcceptFirstLaunchToMiniGameTrait_T", {
hasEnteredMiniGameOnFirstLaunch: !0
});
r.state.isFromLaunchToMiniGame = !0;
hs.classGuideInfo.isFinishedGuide || DS("usr_data_guide_3_end");
} else e.originalCaller();
}) : e.originalCaller();
});
} catch (t) {
e.originalCaller();
}
}
}
};
t.prototype.isGameLobby_DataInfoIsOpenMoreGame = function(e) {
if (this.state.isFromLaunchToMiniGame) {
this.state.isFromLaunchToMiniGame = !1;
e.returnState = !0;
e.replace = !0;
}
};
t.prototype.isDot_ProxyOnDotStart = function(e) {
if ("usr_data_guide_3_end" == e.args[0].key) if (hs.storage.getItem("hasReportedUsrDataGuide3End", !1)) {
e.returnState = !0;
e.replace = !0;
} else hs.storage.setItem("hasReportedUsrDataGuide3End", !0);
};
t.prototype.waitGameLobbyInitReady = function(e, t) {
void 0 === t && (t = 1e4);
var n = Date.now();
hs.CoroutineManager.startCoroutine(function() {
var r;
return o(this, function(i) {
switch (i.label) {
case 0:
return [ 4, hs.waitForAny([ function() {
var e;
return null === (e = TRAIT("GameLobbyTrait")) || void 0 === e ? void 0 : e.isReady;
}, function() {
return Date.now() - n >= t;
} ]) ];

case 1:
i.sent();
e(null === (r = TRAIT("GameLobbyTrait")) || void 0 === r ? void 0 : r.isReady);
return [ 2 ];
}
});
}.call(this));
};
return a([ classId("CampaignAcceptFirstLaunchToMiniGameTrait") ], t);
}(Trait);
n.CampaignAcceptFirstLaunchToMiniGameTrait = c;
cc._RF.pop();
}, {} ]
}, {}, [ "CampaignAcceptFirstLaunchToMiniGameTrait" ]);
//# sourceMappingURL=index.js.map
