window.__require = function t(e, r, _) {
function o(i, c) {
if (!r[i]) {
if (!e[i]) {
var a = i.split("/");
a = a[a.length - 1];
if (!e[a]) {
var f = "function" == typeof __require && __require;
if (!c && f) return f(a, !0);
if (n) return n(a, !0);
throw new Error("Cannot find module '" + i + "'");
}
i = a;
}
var p = r[i] = {
exports: {}
};
e[i][0].call(p.exports, function(t) {
return o(e[i][1][t] || t);
}, p, p.exports, t, e, r, _);
}
return r[i].exports;
}
for (var n = "function" == typeof __require && __require, i = 0; i < _.length; i++) o(_[i]);
return o;
}({
CTRefactorBaseplateTrait: [ function(t, e, r) {
"use strict";
cc._RF.push(e, "24b01mbx+xF14M0MnDjkc5i", "CTRefactorBaseplateTrait");
var _, o = this && this.__extends || (_ = function(t, e) {
return (_ = Object.setPrototypeOf || {
__proto__: []
} instanceof Array && function(t, e) {
t.__proto__ = e;
} || function(t, e) {
for (var r in e) Object.prototype.hasOwnProperty.call(e, r) && (t[r] = e[r]);
})(t, e);
}, function(t, e) {
_(t, e);
function r() {
this.constructor = t;
}
t.prototype = null === e ? Object.create(e) : (r.prototype = e.prototype, new r());
}), n = this && this.__decorate || function(t, e, r, _) {
var o, n = arguments.length, i = n < 3 ? e : null === _ ? _ = Object.getOwnPropertyDescriptor(e, r) : _;
if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) i = Reflect.decorate(t, e, r, _); else for (var c = t.length - 1; c >= 0; c--) (o = t[c]) && (i = (n < 3 ? o(i) : n > 3 ? o(e, r, i) : o(e, r)) || i);
return n > 3 && i && Object.defineProperty(e, r, i), i;
};
Object.defineProperty(r, "__esModule", {
value: !0
});
r.CTRefactorBaseplateTrait = void 0;
var i = function(t) {
o(e, t);
function e() {
return null !== t && t.apply(this, arguments) || this;
}
e.prototype.injectGetWayInfo = function() {
var t = TRAIT("CTRefactorLaneSchemeTrait");
(null == t ? void 0 : t.active) && t.setState({
getWayInfo: [ [ [ 200, "100_4" ], [ 280, "100_4" ], [ 310, "100_4" ], [ 330, "100_4" ], [ 350, "100_4" ], [ 380, "100_4" ], [ 430, "100_4" ], [ "大于430", "100_4" ] ], [ [ 200, "100_4" ], [ 280, "70_1", "100_0" ], [ 310, "50_0", "100_4" ], [ 330, "50_0", "100_4" ], [ 350, "50_0", "100_4" ], [ 380, "50_0", "100_4" ], [ 430, "100_4" ], [ "大于430", "100_4" ] ], [ [ 200, "70_2", "100_0" ], [ 280, "70_2", "100_0" ], [ 310, "70_2", "100_0" ], [ 330, "100_6" ], [ 350, "100_6" ], [ 380, "100_6" ], [ 430, "100_6" ], [ "大于430", "70_0", "100_4" ] ], [ [ 200, "100_4" ], [ 280, "70_2", "100_0" ], [ 310, "70_2", "100_0" ], [ 330, "100_6" ], [ 350, "100_6" ], [ 380, "100_6" ], [ 430, "100_6" ], [ "大于430", "30_0", "100_4" ] ], [ [ 200, "100_4" ], [ 280, "70_2", "100_0" ], [ 310, "100_0" ], [ 330, "100_0" ], [ 350, "100_0" ], [ 380, "100_0" ], [ 430, "100_0" ], [ "大于430", "30_0", "100_4" ] ], [ [ 200, "100_4" ], [ 280, "70_2", "100_0" ], [ 310, "70_2", "100_0" ], [ 330, "50_0", "100_6" ], [ 350, "50_0", "100_6" ], [ 380, "50_0", "100_6" ], [ 430, "50_0", "100_6" ], [ "大于430", "30_0", "100_4" ] ] ]
});
};
e.prototype.onPreprocessConditions = function() {
return {
mutex: {
LaneScheme: [ {
conditions: !0,
event: {
type: "injectGetWayInfo"
}
} ]
}
};
};
e.prototype.onPreprocessActions = function() {
return {};
};
return n([ classId("CTRefactorBaseplateTrait") ], e);
}(Trait);
r.CTRefactorBaseplateTrait = i;
cc._RF.pop();
}, {} ]
}, {}, [ "CTRefactorBaseplateTrait" ]);
//# sourceMappingURL=index.js.map
