window.__require = function e(t, r, o) {
function n(i, s) {
if (!r[i]) {
if (!t[i]) {
var c = i.split("/");
c = c[c.length - 1];
if (!t[c]) {
var u = "function" == typeof __require && __require;
if (!s && u) return u(c, !0);
if (a) return a(c, !0);
throw new Error("Cannot find module '" + i + "'");
}
i = c;
}
var p = r[i] = {
exports: {}
};
t[i][0].call(p.exports, function(e) {
return n(t[i][1][e] || e);
}, p, p.exports, e, t, r, o);
}
return r[i].exports;
}
for (var a = "function" == typeof __require && __require, i = 0; i < o.length; i++) n(o[i]);
return n;
}({
CTRefactorReplaceBoardTrait: [ function(e, t, r) {
"use strict";
cc._RF.push(t, "6f75bS5an5HYrJjDXx0WwHt", "CTRefactorReplaceBoardTrait");
var o, n = this && this.__extends || (o = function(e, t) {
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
}), a = this && this.__decorate || function(e, t, r, o) {
var n, a = arguments.length, i = a < 3 ? t : null === o ? o = Object.getOwnPropertyDescriptor(t, r) : o;
if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) i = Reflect.decorate(e, t, r, o); else for (var s = e.length - 1; s >= 0; s--) (n = e[s]) && (i = (a < 3 ? n(i) : a > 3 ? n(t, r, i) : n(t, r)) || i);
return a > 3 && i && Object.defineProperty(t, r, i), i;
}, i = this && this.__read || function(e, t) {
var r = "function" == typeof Symbol && e[Symbol.iterator];
if (!r) return e;
var o, n, a = r.call(e), i = [];
try {
for (;(void 0 === t || t-- > 0) && !(o = a.next()).done; ) i.push(o.value);
} catch (e) {
n = {
error: e
};
} finally {
try {
o && !o.done && (r = a.return) && r.call(a);
} finally {
if (n) throw n.error;
}
}
return i;
};
Object.defineProperty(r, "__esModule", {
value: !0
});
r.CTRefactorReplaceBoardTrait = void 0;
var s = function(e) {
n(t, e);
function t() {
return null !== e && e.apply(this, arguments) || this;
}
t.prototype.tryReplaceBoard = function() {
if (hs.algorithmStrategyLevelRefactoredInfo.algorithmSourceLevel1 === hs.ClassAlgorithmSourceType.PuzzleNone) {
var e = !1, t = this.props.conditionKey, r = this.props.condition;
if (r && t) {
var o = hs.scoreInfo.highScore, n = r.split(t).join(String(o));
this.evaluateCondition(n) && hs.classGameInfo.gameNum >= this.props.gameNum && (e = !0);
} else hs.classGameInfo.gameNum >= this.props.gameNum && (e = !0);
if (e) {
var a = this.props.baseplateLane, i = this.props.baseplate, s = hs.traitConfigInfo.traitsByIdMap[a], c = hs.traitConfigInfo.traitsByIdMap[i], u = s.param.sections, p = c.param.sections;
e = !0;
var l = TRAIT("CTRefactorLaneSchemeTrait");
(null == l ? void 0 : l.active) && l.setState({
weightRatioArr: u,
getWayInfo: p
});
}
}
};
t.prototype.evaluateCondition = function(e) {
try {
return this.parseSimpleExpression(e);
} catch (e) {
return !1;
}
};
t.prototype.parseSimpleExpression = function(e) {
try {
var t = e.replace(/\s+/g, " ").trim();
return this.evaluateLogicalExpression(t);
} catch (e) {
return !1;
}
};
t.prototype.evaluateLogicalExpression = function(e) {
var t = this;
return e.includes("(") ? this.evaluateParenthesesExpression(e) : e.includes("||") ? e.split("||").map(function(e) {
return e.trim();
}).some(function(e) {
return t.evaluateLogicalExpression(e);
}) : e.includes("&&") ? e.split("&&").map(function(e) {
return e.trim();
}).every(function(e) {
return t.evaluateLogicalExpression(e);
}) : this.evaluateComparison(e);
};
t.prototype.evaluateParenthesesExpression = function(e) {
var t = e.lastIndexOf("(");
if (-1 === t) return this.evaluateLogicalExpression(e);
var r = e.indexOf(")", t);
if (-1 === r) return !1;
var o = e.substring(t + 1, r), n = this.evaluateLogicalExpression(o), a = e.substring(0, t) + (n ? "true" : "false") + e.substring(r + 1);
return this.evaluateLogicalExpression(a);
};
t.prototype.evaluateComparison = function(e) {
var t = e.trim();
if ("true" === t) return !0;
if ("false" === t) return !1;
var r = t.match(/^([a-zA-Z_][a-zA-Z0-9_]*|\d+(?:\.\d+)?)\s*(>=|<=|>|<|==|!=)\s*(\d+(?:\.\d+)?)$/);
if (!r) return !1;
var o, n = i(r, 4), a = n[1], s = n[2], c = n[3], u = parseFloat(c);
if (/^[a-zA-Z_][a-zA-Z0-9_]*$/.test(a)) {
if ("high_cord" !== a) return !1;
o = hs.scoreInfo.highScore;
} else o = parseFloat(a);
switch (s) {
case ">=":
return o >= u;

case "<=":
return o <= u;

case ">":
return o > u;

case "<":
return o < u;

case "==":
return o === u;

case "!=":
return o !== u;

default:
return !1;
}
};
t.prototype.onPreprocessConditions = function() {
return {
mutex: {
LaneScheme: [ {
conditions: !0,
event: {
type: "tryReplaceBoard"
},
platform: "gp"
} ]
}
};
};
t.prototype.onPreprocessActions = function() {
return {};
};
return a([ classId("CTRefactorReplaceBoardTrait") ], t);
}(Trait);
r.CTRefactorReplaceBoardTrait = s;
cc._RF.pop();
}, {} ]
}, {}, [ "CTRefactorReplaceBoardTrait" ]);
//# sourceMappingURL=index.js.map
