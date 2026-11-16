window.__require = function t(e, r, o) {
function n(c, u) {
if (!r[c]) {
if (!e[c]) {
var f = c.split("/");
f = f[f.length - 1];
if (!e[f]) {
var l = "function" == typeof __require && __require;
if (!u && l) return l(f, !0);
if (i) return i(f, !0);
throw new Error("Cannot find module '" + c + "'");
}
c = f;
}
var a = r[c] = {
exports: {}
};
e[c][0].call(a.exports, function(t) {
return n(e[c][1][t] || t);
}, a, a.exports, t, e, r, o);
}
return r[c].exports;
}
for (var i = "function" == typeof __require && __require, c = 0; c < o.length; c++) n(o[c]);
return n;
}({
CTRefactorFillExcludeTrait: [ function(t, e, r) {
"use strict";
cc._RF.push(e, "5b683u5nSlDOKq7ENqYwRLu", "CTRefactorFillExcludeTrait");
var o, n = this && this.__extends || (o = function(t, e) {
return (o = Object.setPrototypeOf || {
__proto__: []
} instanceof Array && function(t, e) {
t.__proto__ = e;
} || function(t, e) {
for (var r in e) Object.prototype.hasOwnProperty.call(e, r) && (t[r] = e[r]);
})(t, e);
}, function(t, e) {
o(t, e);
function r() {
this.constructor = t;
}
t.prototype = null === e ? Object.create(e) : (r.prototype = e.prototype, new r());
}), i = this && this.__decorate || function(t, e, r, o) {
var n, i = arguments.length, c = i < 3 ? e : null === o ? o = Object.getOwnPropertyDescriptor(e, r) : o;
if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) c = Reflect.decorate(t, e, r, o); else for (var u = t.length - 1; u >= 0; u--) (n = t[u]) && (c = (i < 3 ? n(c) : i > 3 ? n(e, r, c) : n(e, r)) || c);
return i > 3 && c && Object.defineProperty(e, r, c), c;
};
Object.defineProperty(r, "__esModule", {
value: !0
});
r.CTRefactorFillExcludeTrait = void 0;
var c = function(t) {
n(e, t);
function e() {
return null !== t && t.apply(this, arguments) || this;
}
e.prototype.data = function() {
return {
score: 0
};
};
Object.defineProperty(e.prototype, "stateNum", {
get: function() {
return hs.traitConfigSafePropsInfo.getSafePropValueByKey("FillExcludeTrait", "state", this.props, 0);
},
enumerable: !1,
configurable: !0
});
Object.defineProperty(e.prototype, "propScore", {
get: function() {
return hs.traitConfigSafePropsInfo.getSafePropValueByKey("FillExcludeTrait", "score", this.props, 3e3);
},
enumerable: !1,
configurable: !0
});
e.prototype.computeScore = function() {
return 1 === this.stateNum ? hs.scoreInfo.score : hs.scoreInfo.highRecordScore;
};
e.prototype.onSDKArgsConditionContext = function(t, e, r) {
var o, n = this, i = null !== (o = null == r ? void 0 : r.algorithmId) && void 0 !== o ? o : hs.OFFER_TYPE.NONE;
return buildLazyConditionContext({
isBlack: function() {
return ASContext(hs.isValueInEnum(i, hs.OFFER_TYPE_BLANK), "是否为填空消除");
},
propScore: function() {
return ASContext(n.propScore, "星链分数");
},
computeScore: function() {
return ASContext(n.computeScore(), "历史最高分");
}
});
};
e.prototype.onSDKArgsConditions = function() {
return [ {
conditions: {
and: [ {
fact: "isBlack",
operator: "=",
value: !0
}, {
fact: "computeScore",
operator: ">=",
value: {
fact: "propScore"
}
} ]
},
gameMode: "class",
flow: "flow1"
} ];
};
e.prototype.onSDKArgsActions = function() {
return {
flow1: function() {
return {
limitSmall: !0
};
}
};
};
return i([ classId("CTRefactorFillExcludeTrait") ], e);
}(Trait);
r.CTRefactorFillExcludeTrait = c;
cc._RF.pop();
}, {} ]
}, {}, [ "CTRefactorFillExcludeTrait" ]);
//# sourceMappingURL=index.js.map
