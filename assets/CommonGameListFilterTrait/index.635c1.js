window.__require = function t(e, r, n) {
function a(i, s) {
if (!r[i]) {
if (!e[i]) {
var m = i.split("/");
m = m[m.length - 1];
if (!e[m]) {
var l = "function" == typeof __require && __require;
if (!s && l) return l(m, !0);
if (o) return o(m, !0);
throw new Error("Cannot find module '" + i + "'");
}
i = m;
}
var u = r[i] = {
exports: {}
};
e[i][0].call(u.exports, function(t) {
return a(e[i][1][t] || t);
}, u, u.exports, t, e, r, n);
}
return r[i].exports;
}
for (var o = "function" == typeof __require && __require, i = 0; i < n.length; i++) a(n[i]);
return a;
}({
CommonGameListFilterTrait: [ function(t, e, r) {
"use strict";
cc._RF.push(e, "3eb9dmpax5B4olWnKgK00zX", "CommonGameListFilterTrait");
var n, a = this && this.__extends || (n = function(t, e) {
return (n = Object.setPrototypeOf || {
__proto__: []
} instanceof Array && function(t, e) {
t.__proto__ = e;
} || function(t, e) {
for (var r in e) Object.prototype.hasOwnProperty.call(e, r) && (t[r] = e[r]);
})(t, e);
}, function(t, e) {
n(t, e);
function r() {
this.constructor = t;
}
t.prototype = null === e ? Object.create(e) : (r.prototype = e.prototype, new r());
}), o = this && this.__decorate || function(t, e, r, n) {
var a, o = arguments.length, i = o < 3 ? e : null === n ? n = Object.getOwnPropertyDescriptor(e, r) : n;
if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) i = Reflect.decorate(t, e, r, n); else for (var s = t.length - 1; s >= 0; s--) (a = t[s]) && (i = (o < 3 ? a(i) : o > 3 ? a(e, r, i) : a(e, r)) || i);
return o > 3 && i && Object.defineProperty(e, r, i), i;
}, i = this && this.__read || function(t, e) {
var r = "function" == typeof Symbol && t[Symbol.iterator];
if (!r) return t;
var n, a, o = r.call(t), i = [];
try {
for (;(void 0 === e || e-- > 0) && !(n = o.next()).done; ) i.push(n.value);
} catch (t) {
a = {
error: t
};
} finally {
try {
n && !n.done && (r = o.return) && r.call(o);
} finally {
if (a) throw a.error;
}
}
return i;
}, s = this && this.__spread || function() {
for (var t = [], e = 0; e < arguments.length; e++) t = t.concat(i(arguments[e]));
return t;
};
Object.defineProperty(r, "__esModule", {
value: !0
});
r.CommonGameListFilterTrait = void 0;
var m = "CommonGameListFilter_cachedOrder", l = function(t) {
a(e, t);
function e() {
return null !== t && t.apply(this, arguments) || this;
}
e.prototype.onActive = function(t) {
if (hs.tp.isCommonGameListTraitExecuteFilters(t)) {
var e = t.args[0];
this.applyFilter(e);
this.applyFilterFixed(e);
}
};
e.prototype.applyFilter = function(t) {
switch (this.props.type) {
case 1:
t.newGames = this.stableRandomSort(t.newGames, "new");
t.playedGames = this.stableRandomSort(t.playedGames, "played");
break;

case 2:
t.newGames.sort(function(t, e) {
return t.timestamp - e.timestamp;
});
t.playedGames.sort(function(t, e) {
return t.timestamp - e.timestamp;
});
break;

case 3:
t.newGames.sort(function(t, e) {
return e.timestamp - t.timestamp;
});
t.playedGames.sort(function(t, e) {
return e.timestamp - t.timestamp;
});
break;

case 4:
t.newGames = this.stableRandomSort(t.newGames, "new");
t.playedGames.sort(function(t, e) {
var r, n;
return (null !== (r = e.clickCount) && void 0 !== r ? r : 0) - (null !== (n = t.clickCount) && void 0 !== n ? n : 0);
});
this.fixPlayedGameBySort(t);
break;

case 5:
t.newGames = this.stableRandomSort(t.newGames, "new");
t.playedGames = this.sortByRetention(t.playedGames);
break;

case 6:
t.randomGames = this.stableRandomSort(s(t.newGames, t.playedGames), "random");
t.newGames = [];
t.playedGames = [];
break;

case 7:
t.newGames.sort(function(t, e) {
return t.timestamp - e.timestamp;
});
t.playedGames.sort(function(t, e) {
var r, n;
return (null !== (r = e.clickCount) && void 0 !== r ? r : 0) - (null !== (n = t.clickCount) && void 0 !== n ? n : 0);
});
this.fixPlayedGameBySort(t);
}
};
e.prototype.applyFilterFixed = function(t) {
if (!0 === this.props.fixed) switch (this.props.type) {
case 2:
t.newGames = this.sortByTimestampFixed(t.newGames, !0);
t.playedGames = this.sortByTimestampFixed(t.playedGames, !0);
break;

case 3:
t.newGames = this.sortByTimestampFixed(t.newGames, !1);
t.playedGames = this.sortByTimestampFixed(t.playedGames, !1);
break;

case 7:
t.newGames = this.sortByTimestampFixed(t.newGames, !0);
}
};
e.prototype.sortByTimestampFixed = function(t, e) {
return t.map(function(t, e) {
return {
game: t,
index: e
};
}).sort(function(t, r) {
var n = e ? t.game.timestamp - r.game.timestamp : r.game.timestamp - t.game.timestamp;
return 0 !== n ? n : e ? t.index - r.index : r.index - t.index;
}).map(function(t) {
return t.game;
});
};
e.prototype.fixPlayedGameBySort = function(t) {
var e, r;
if (t.newPlayed && t.playedGames && t.playedGames.length > 0) {
var n = t.playedGames.filter(function(e) {
var r;
return e.gameName !== (null === (r = t.newPlayed.newGame) || void 0 === r ? void 0 : r.gameName);
}), a = null !== (e = n[0]) && void 0 !== e ? e : null;
null != a && a.gameName != (null === (r = t.newPlayed.playedGame) || void 0 === r ? void 0 : r.gameName) && (t.newPlayed.playedGame = a);
}
};
e.prototype.stableRandomSort = function(t, e) {
if (0 === t.length) return t;
var r = hs.storage.getItem(m, {}), n = r[e], a = new Map();
t.forEach(function(t) {
return a.set(t.gameName, t);
});
if (!n || 0 === n.length) {
var o = this.shuffleArray(s(t));
r[e] = o.map(function(t) {
return t.gameName;
});
hs.storage.setItem(m, r);
return o;
}
var i = n.filter(function(t) {
return a.has(t);
}), l = n.filter(function(t) {
return !a.has(t);
}), u = new Set(i), p = t.filter(function(t) {
return !u.has(t.gameName);
}), c = s(i);
p.forEach(function(t) {
var e = Math.floor(Math.random() * (c.length + 1));
c.splice(e, 0, t.gameName);
});
r[e] = c;
hs.storage.setItem(m, r);
l.length > 0 || p.length;
return c.filter(function(t) {
return a.has(t);
}).map(function(t) {
return a.get(t);
});
};
e.prototype.shuffleArray = function(t) {
for (var e = t.length - 1; e > 0; e--) {
var r = Math.floor(Math.random() * (e + 1)), n = t[e];
t[e] = t[r];
t[r] = n;
}
return t;
};
e.prototype.sortByRetention = function(t) {
var e = this.getRetentionList();
if (0 === e.length) return this.stableRandomSort(t, "played");
var r = new Map();
e.forEach(function(t, e) {
r.set(t, e);
});
var n = [], a = [];
t.forEach(function(t) {
r.has(t.gameName) ? n.push(t) : a.push(t);
});
n.sort(function(t, e) {
var n, a;
return (null !== (n = r.get(t.gameName)) && void 0 !== n ? n : 0) - (null !== (a = r.get(e.gameName)) && void 0 !== a ? a : 0);
});
a.sort(function(t, e) {
var r, n;
return (null !== (r = e.clickCount) && void 0 !== r ? r : 0) - (null !== (n = t.clickCount) && void 0 !== n ? n : 0);
});
return s(a, n);
};
e.prototype.getRetentionList = function() {
var t = this.props.retention;
if (!t) return [];
if ("string" == typeof t) {
try {
var e = JSON.parse(t);
if (Array.isArray(e)) return e;
} catch (t) {
return [];
}
return [];
}
return Array.isArray(t) ? t : [];
};
return o([ classId("CommonGameListFilterTrait") ], e);
}(Trait);
r.CommonGameListFilterTrait = l;
cc._RF.pop();
}, {} ],
CommonGameListFilter_Ex_Trait: [ function(t, e, r) {
"use strict";
cc._RF.push(e, "8d4efZC6jlI56fCRrfcoLCs", "CommonGameListFilter_Ex_Trait");
var n, a = this && this.__extends || (n = function(t, e) {
return (n = Object.setPrototypeOf || {
__proto__: []
} instanceof Array && function(t, e) {
t.__proto__ = e;
} || function(t, e) {
for (var r in e) Object.prototype.hasOwnProperty.call(e, r) && (t[r] = e[r]);
})(t, e);
}, function(t, e) {
n(t, e);
function r() {
this.constructor = t;
}
t.prototype = null === e ? Object.create(e) : (r.prototype = e.prototype, new r());
}), o = this && this.__decorate || function(t, e, r, n) {
var a, o = arguments.length, i = o < 3 ? e : null === n ? n = Object.getOwnPropertyDescriptor(e, r) : n;
if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) i = Reflect.decorate(t, e, r, n); else for (var s = t.length - 1; s >= 0; s--) (a = t[s]) && (i = (o < 3 ? a(i) : o > 3 ? a(e, r, i) : a(e, r)) || i);
return o > 3 && i && Object.defineProperty(e, r, i), i;
};
Object.defineProperty(r, "__esModule", {
value: !0
});
r.CommonGameListFilter_Ex_Trait = void 0;
var i = function(t) {
a(e, t);
function e() {
return null !== t && t.apply(this, arguments) || this;
}
e.prototype.applyFilter = function(t) {
switch (this.props.type) {
case 8:
t.newGames.sort(function(t, e) {
return e.timestamp - t.timestamp;
});
t.playedGames.sort(function(t, e) {
var r, n;
return (null !== (r = e.clickCount) && void 0 !== r ? r : 0) - (null !== (n = t.clickCount) && void 0 !== n ? n : 0);
});
this.fixPlayedGameBySort(t);
}
};
e.prototype.applyFilterFixed = function(t) {
if (!0 === this.props.fixed) switch (this.props.type) {
case 8:
t.newGames = this.sortByTimestampFixed(t.newGames, !1);
}
};
return o([ classId("CommonGameListFilterTrait", "Ex") ], e);
}(t("./CommonGameListFilterTrait").CommonGameListFilterTrait);
r.CommonGameListFilter_Ex_Trait = i;
cc._RF.pop();
}, {
"./CommonGameListFilterTrait": "CommonGameListFilterTrait"
} ]
}, {}, [ "CommonGameListFilterTrait", "CommonGameListFilter_Ex_Trait" ]);
//# sourceMappingURL=index.js.map
