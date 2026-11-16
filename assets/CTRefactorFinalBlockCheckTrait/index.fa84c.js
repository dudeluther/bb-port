window.__require = function t(o, e, r) {
function c(a, i) {
if (!e[a]) {
if (!o[a]) {
var l = a.split("/");
l = l[l.length - 1];
if (!o[l]) {
var h = "function" == typeof __require && __require;
if (!i && h) return h(l, !0);
if (n) return n(l, !0);
throw new Error("Cannot find module '" + a + "'");
}
a = l;
}
var u = e[a] = {
exports: {}
};
o[a][0].call(u.exports, function(t) {
return c(o[a][1][t] || t);
}, u, u.exports, t, o, e, r);
}
return e[a].exports;
}
for (var n = "function" == typeof __require && __require, a = 0; a < r.length; a++) c(r[a]);
return c;
}({
CTRefactorFinalBlockCheckTrait: [ function(t, o, e) {
"use strict";
cc._RF.push(o, "b4f8dLhbDpLn61O+PLDtefZ", "CTRefactorFinalBlockCheckTrait");
var r, c = this && this.__extends || (r = function(t, o) {
return (r = Object.setPrototypeOf || {
__proto__: []
} instanceof Array && function(t, o) {
t.__proto__ = o;
} || function(t, o) {
for (var e in o) Object.prototype.hasOwnProperty.call(o, e) && (t[e] = o[e]);
})(t, o);
}, function(t, o) {
r(t, o);
function e() {
this.constructor = t;
}
t.prototype = null === o ? Object.create(o) : (e.prototype = o.prototype, new e());
}), n = this && this.__decorate || function(t, o, e, r) {
var c, n = arguments.length, a = n < 3 ? o : null === r ? r = Object.getOwnPropertyDescriptor(o, e) : r;
if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) a = Reflect.decorate(t, o, e, r); else for (var i = t.length - 1; i >= 0; i--) (c = t[i]) && (a = (n < 3 ? c(a) : n > 3 ? c(o, e, a) : c(o, e)) || a);
return n > 3 && a && Object.defineProperty(o, e, a), a;
}, a = this && this.__read || function(t, o) {
var e = "function" == typeof Symbol && t[Symbol.iterator];
if (!e) return t;
var r, c, n = e.call(t), a = [];
try {
for (;(void 0 === o || o-- > 0) && !(r = n.next()).done; ) a.push(r.value);
} catch (t) {
c = {
error: t
};
} finally {
try {
r && !r.done && (e = n.return) && e.call(n);
} finally {
if (c) throw c.error;
}
}
return a;
};
Object.defineProperty(e, "__esModule", {
value: !0
});
e.CTRefactorFinalBlockCheckTrait = void 0;
var i = function(t) {
c(o, t);
function o() {
var o = null !== t && t.apply(this, arguments) || this;
o.TRAIT_NAME = "CTRefactorFinalBlockCheckTrait";
return o;
}
o.prototype.data = function() {
return {
isSameBlock: !1,
replaceSecondBlock: !1,
produceRandomIdResult: null,
fixProduceRandomId: !1
};
};
o.prototype.isCanActive = function(t) {
void 0 === t && (t = !0);
return t;
};
o.prototype.onAlgorithmStrategyRoundInit = function() {
this.setState(this.data());
};
o.prototype.onAlgorithmStrategyPostprocessComplete = function(t) {
this.isCanActive() && this.runFinalBlockCheck(t);
};
o.prototype.runFinalBlockCheck = function(t) {
this.checkGuaranteedBlock(t);
if (this.checkBlockResult()) {
as.AlgorithmStrategyAlgoBlockIdListPatch.patch(hs.DEFAULT_BLOCKS, this);
as.AlgorithmStrategyAlgoSdkRequestBeforeActualIdPatch.patch(hs.OFFER_TYPE.SUI_JI, this);
}
};
o.prototype.checkGuaranteedBlock = function(t, o) {
void 0 === o && (o = void 0);
var e = void 0 !== o ? o : this.state.isSameBlock, r = hs.algorithmInfo.blockIdList;
if (Array.isArray(r) && 3 === r.length) {
r = hs.algorithmStrategyLogic.delCurrentSameBlock(r);
var c = a(r, 3), n = c[0], i = c[1], l = c[2];
n !== i || n !== l || e || this.replaceSecondBlock(r, n);
if (!hs.algorithmStrategyLogic.canPutBlock(r[0]) && !hs.algorithmStrategyLogic.canPutBlock(r[1]) && !hs.algorithmStrategyLogic.canPutBlock(r[2])) {
r[1] = this.getProduceRandomId(r[1]);
this.state.replaceSecondBlock && (r[2] = this.getProduceRandomId(r[2]));
}
as.AlgorithmStrategyAlgoBlockIdListPatch.patch(r, this);
}
};
o.prototype.replaceSecondBlock = function(t, o) {
t[1] = this.produceRandomId(o);
};
o.prototype.getProduceRandomId = function(t) {
return null != this.state.produceRandomIdResult ? this.state.produceRandomIdResult : this.state.fixProduceRandomId ? this.produceRandomIdFixed(t) : this.produceRandomId(t);
};
o.prototype.produceRandomId = function(t) {
for (var o = [], e = 2; e <= 42; e++) if (e !== t) for (var r = 0; r < 8; r++) {
for (var c = 0; c < 8; c++) if (hs.algorithmStrategyLogic.canPut(e, r, c, hs.boardInfo.faceBlocks)) {
o.push(e);
break;
}
if (o.length > 0) break;
}
return o.length > 0 ? o[Math.floor(o.length * Math.random())] : 1;
};
o.prototype.produceRandomIdFixed = function(t) {
for (var o = [], e = 2; e <= 42; e++) if (e !== t) for (var r = 0; r < 8; r++) {
for (var c = !1, n = 0; n < 8; n++) if (hs.algorithmStrategyLogic.canPut(e, r, n, hs.boardInfo.faceBlocks)) {
o.push(e);
c = !0;
break;
}
if (c) break;
}
return o.length > 0 ? o[Math.floor(o.length * Math.random())] : 1;
};
o.prototype.checkBlockResult = function() {
var t = hs.algorithmInfo.blockIdList;
return 3 !== t.length || !hs.blocksProducerInfo.checkValidBlockId(t[0]) || !hs.blocksProducerInfo.checkValidBlockId(t[1]) || !hs.blocksProducerInfo.checkValidBlockId(t[2]);
};
return n([ classId("CTRefactorFinalBlockCheckTrait"), classMethodWatch() ], o);
}(Trait);
e.CTRefactorFinalBlockCheckTrait = i;
cc._RF.pop();
}, {} ]
}, {}, [ "CTRefactorFinalBlockCheckTrait" ]);
//# sourceMappingURL=index.js.map
