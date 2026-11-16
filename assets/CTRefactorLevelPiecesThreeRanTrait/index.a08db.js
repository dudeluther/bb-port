window.__require = function e(t, r, n) {
function o(i, f) {
if (!r[i]) {
if (!t[i]) {
var c = i.split("/");
c = c[c.length - 1];
if (!t[c]) {
var s = "function" == typeof __require && __require;
if (!f && s) return s(c, !0);
if (a) return a(c, !0);
throw new Error("Cannot find module '" + i + "'");
}
i = c;
}
var l = r[i] = {
exports: {}
};
t[i][0].call(l.exports, function(e) {
return o(t[i][1][e] || e);
}, l, l.exports, e, t, r, n);
}
return r[i].exports;
}
for (var a = "function" == typeof __require && __require, i = 0; i < n.length; i++) o(n[i]);
return o;
}({
CTRefactorLevelPiecesThreeRanTrait: [ function(e, t, r) {
"use strict";
cc._RF.push(t, "f540ekxdyJFCpN1glp0dQ4L", "CTRefactorLevelPiecesThreeRanTrait");
var n, o = this && this.__extends || (n = function(e, t) {
return (n = Object.setPrototypeOf || {
__proto__: []
} instanceof Array && function(e, t) {
e.__proto__ = t;
} || function(e, t) {
for (var r in t) Object.prototype.hasOwnProperty.call(t, r) && (e[r] = t[r]);
})(e, t);
}, function(e, t) {
n(e, t);
function r() {
this.constructor = e;
}
e.prototype = null === t ? Object.create(t) : (r.prototype = t.prototype, new r());
}), a = this && this.__decorate || function(e, t, r, n) {
var o, a = arguments.length, i = a < 3 ? t : null === n ? n = Object.getOwnPropertyDescriptor(t, r) : n;
if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) i = Reflect.decorate(e, t, r, n); else for (var f = e.length - 1; f >= 0; f--) (o = e[f]) && (i = (a < 3 ? o(i) : a > 3 ? o(t, r, i) : o(t, r)) || i);
return a > 3 && i && Object.defineProperty(t, r, i), i;
}, i = this && this.__values || function(e) {
var t = "function" == typeof Symbol && Symbol.iterator, r = t && e[t], n = 0;
if (r) return r.call(e);
if (e && "number" == typeof e.length) return {
next: function() {
e && n >= e.length && (e = void 0);
return {
value: e && e[n++],
done: !e
};
}
};
throw new TypeError(t ? "Object is not iterable." : "Symbol.iterator is not defined.");
};
Object.defineProperty(r, "__esModule", {
value: !0
});
r.CTRefactorLevelPiecesThreeRanTrait = void 0;
var f = function(e) {
o(t, e);
function t() {
return null !== e && e.apply(this, arguments) || this;
}
t.prototype.data = function() {
return {
oneStagePercent: .4,
twoStagePercent: .8
};
};
t.prototype.checkUseLevel = function() {
var e, t, r = storage.getItem("chapterNum", 0) + 1, n = this.useLevel;
if (!n) return !0;
try {
for (var o = i(n), a = o.next(); !a.done; a = o.next()) {
var f = a.value;
if (f && f.length && 2 === f.length && r >= f[0] && r <= f[1]) return !0;
}
} catch (t) {
e = {
error: t
};
} finally {
try {
a && !a.done && (t = o.return) && t.call(o);
} finally {
if (e) throw e.error;
}
}
return !1;
};
Object.defineProperty(t.prototype, "range1", {
get: function() {
return hs.traitConfigSafePropsInfo.getSafePropValueByKey("LevelPiecesThreeRanTrait", "range1", this.props, [ 40, 40 ]);
},
enumerable: !1,
configurable: !0
});
Object.defineProperty(t.prototype, "range2", {
get: function() {
return hs.traitConfigSafePropsInfo.getSafePropValueByKey("LevelPiecesThreeRanTrait", "range2", this.props, [ 80, 80 ]);
},
enumerable: !1,
configurable: !0
});
Object.defineProperty(t.prototype, "range3", {
get: function() {
return hs.traitConfigSafePropsInfo.getSafePropValueByKey("LevelPiecesThreeRanTrait", "range3", this.props, [ 60, 80 ]);
},
enumerable: !1,
configurable: !0
});
Object.defineProperty(t.prototype, "default1", {
get: function() {
return hs.traitConfigSafePropsInfo.getSafePropValueByKey("LevelPiecesThreeRanTrait", "default1", this.props, 0);
},
enumerable: !1,
configurable: !0
});
Object.defineProperty(t.prototype, "default2", {
get: function() {
return hs.traitConfigSafePropsInfo.getSafePropValueByKey("LevelPiecesThreeRanTrait", "default2", this.props, 0);
},
enumerable: !1,
configurable: !0
});
Object.defineProperty(t.prototype, "useLevel", {
get: function() {
return hs.traitConfigSafePropsInfo.getSafePropValueByKey("LevelPiecesThreeRanTrait", "useLevel", this.props, null);
},
enumerable: !1,
configurable: !0
});
t.prototype.onAlgorithmStrategyGameInit = function(e) {
if ("preprocessAlgorithmData" === e && this.checkUseLevel()) {
var t = this.range1, r = this.range2;
if (this.default1) {
this.state.oneStagePercent = Math.floor(Math.random() * (t[1] - t[0])) + t[0];
this.state.twoStagePercent = this.state.oneStagePercent + Math.floor(Math.random() * (r[1] - r[0])) + r[0];
} else if (this.default2) {
var n = [ t, r, this.range3 ], o = Math.floor(Math.random() * n.length);
if (n[o]) {
this.state.oneStagePercent = n[o][0];
this.state.twoStagePercent = n[o][1];
}
} else {
this.state.oneStagePercent = Math.floor(Math.random() * (t[1] - t[0])) + t[0];
this.state.twoStagePercent = Math.floor(Math.random() * (r[1] - r[0])) + r[0];
}
var a = TRAIT("CTRefactorChapterAlgoStrategyTrait");
(null == a ? void 0 : a.active) && a.setState({
ratioArr: [ this.state.oneStagePercent / 100, this.state.twoStagePercent / 100 ]
});
}
};
return a([ classId("CTRefactorLevelPiecesThreeRanTrait") ], t);
}(Trait);
r.CTRefactorLevelPiecesThreeRanTrait = f;
cc._RF.pop();
}, {} ]
}, {}, [ "CTRefactorLevelPiecesThreeRanTrait" ]);
//# sourceMappingURL=index.js.map
