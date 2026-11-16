window.__require = function e(t, r, o) {
function i(a, s) {
if (!r[a]) {
if (!t[a]) {
var c = a.split("/");
c = c[c.length - 1];
if (!t[c]) {
var u = "function" == typeof __require && __require;
if (!s && u) return u(c, !0);
if (n) return n(c, !0);
throw new Error("Cannot find module '" + a + "'");
}
a = c;
}
var l = r[a] = {
exports: {}
};
t[a][0].call(l.exports, function(e) {
return i(t[a][1][e] || e);
}, l, l.exports, e, t, r, o);
}
return r[a].exports;
}
for (var n = "function" == typeof __require && __require, a = 0; a < o.length; a++) i(o[a]);
return i;
}({
ClassNewPlayerGuideSkipComRefactor: [ function(e, t, r) {
"use strict";
cc._RF.push(t, "ed24e/E3cxHsoMaAIGeiznb", "ClassNewPlayerGuideSkipComRefactor");
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
var i, n = arguments.length, a = n < 3 ? t : null === o ? o = Object.getOwnPropertyDescriptor(t, r) : o;
if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) a = Reflect.decorate(e, t, r, o); else for (var s = e.length - 1; s >= 0; s--) (i = e[s]) && (a = (n < 3 ? i(a) : n > 3 ? i(t, r, a) : i(t, r)) || a);
return n > 3 && a && Object.defineProperty(t, r, a), a;
};
Object.defineProperty(r, "__esModule", {
value: !0
});
var a = cc._decorator, s = a.ccclass, c = a.property, u = function(e) {
i(t, e);
function t() {
var t = null !== e && e.apply(this, arguments) || this;
t.btnInfo = null;
return t;
}
t.prototype.onClick = function() {
var e;
if (this.state.blocksProducer) {
hs.audioInfo.play(hs.AudioConfig.s_button);
hs.UI.hideUI(this.state.prefabConfigItem);
storage.setItem("classGuideStep", 3);
DS(null === (e = hs.classGuideInfo.steps[hs.classGuideInfo.step - 1]) || void 0 === e ? void 0 : e.dotEnd);
this.state.blocksProducer.guideRequestBlocksProducer({
clearScreen: !0,
strategyState: hs.ALGO_STRATEGY_TYPE.GUIDE,
needAlgorithmStrategyRequest: !0
});
}
};
n([ c(cc.Button) ], t.prototype, "btnInfo", void 0);
n([ hs.throttle(300) ], t.prototype, "onClick", null);
return n([ classId("ClassNewPlayerGuideSkipComRefactor"), s, classMethodWatch() ], t);
}(hs.Component);
r.default = u;
cc._RF.pop();
}, {} ],
NewPlayerGuideSkipRefactorTrait: [ function(e, t, r) {
"use strict";
cc._RF.push(t, "ea673jRy9dLxp8kt9SSP+e1", "NewPlayerGuideSkipRefactorTrait");
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
var i, n = arguments.length, a = n < 3 ? t : null === o ? o = Object.getOwnPropertyDescriptor(t, r) : o;
if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) a = Reflect.decorate(e, t, r, o); else for (var s = e.length - 1; s >= 0; s--) (i = e[s]) && (a = (n < 3 ? i(a) : n > 3 ? i(t, r, a) : i(t, r)) || a);
return n > 3 && a && Object.defineProperty(t, r, a), a;
}, a = this && this.__awaiter || function(e, t, r, o) {
return new (r || (r = Promise))(function(i, n) {
function a(e) {
try {
c(o.next(e));
} catch (e) {
n(e);
}
}
function s(e) {
try {
c(o.throw(e));
} catch (e) {
n(e);
}
}
function c(e) {
e.done ? i(e.value) : (t = e.value, t instanceof r ? t : new r(function(e) {
e(t);
})).then(a, s);
var t;
}
c((o = o.apply(e, t || [])).next());
});
}, s = this && this.__generator || function(e, t) {
var r, o, i, n, a = {
label: 0,
sent: function() {
if (1 & i[0]) throw i[1];
return i[1];
},
trys: [],
ops: []
};
return n = {
next: s(0),
throw: s(1),
return: s(2)
}, "function" == typeof Symbol && (n[Symbol.iterator] = function() {
return this;
}), n;
function s(e) {
return function(t) {
return c([ e, t ]);
};
}
function c(n) {
if (r) throw new TypeError("Generator is already executing.");
for (;a; ) try {
if (r = 1, o && (i = 2 & n[0] ? o.return : n[0] ? o.throw || ((i = o.return) && i.call(o), 
0) : o.next) && !(i = i.call(o, n[1])).done) return i;
(o = 0, i) && (n = [ 2 & n[0], i.value ]);
switch (n[0]) {
case 0:
case 1:
i = n;
break;

case 4:
a.label++;
return {
value: n[1],
done: !1
};

case 5:
a.label++;
o = n[1];
n = [ 0 ];
continue;

case 7:
n = a.ops.pop();
a.trys.pop();
continue;

default:
if (!(i = a.trys, i = i.length > 0 && i[i.length - 1]) && (6 === n[0] || 2 === n[0])) {
a = 0;
continue;
}
if (3 === n[0] && (!i || n[1] > i[0] && n[1] < i[3])) {
a.label = n[1];
break;
}
if (6 === n[0] && a.label < i[1]) {
a.label = i[1];
i = n;
break;
}
if (i && a.label < i[2]) {
a.label = i[2];
a.ops.push(n);
break;
}
i[2] && a.ops.pop();
a.trys.pop();
continue;
}
n = t.call(e, a);
} catch (e) {
n = [ 6, e ];
o = 0;
} finally {
r = i = 0;
}
if (5 & n[0]) throw n[1];
return {
value: n[0] ? n[1] : void 0,
done: !0
};
}
};
Object.defineProperty(r, "__esModule", {
value: !0
});
r.NewPlayerGuideSkipRefactorTrait = void 0;
var c = e("./ClassNewPlayerGuideSkipComRefactor"), u = {
name: "NewPlayerGuideSkip",
url: "prefabs/LayerNewPlayerGuideSkipCom",
bundleName: "NewPlayerGuideSkipRefactorTrait"
}, l = function(e) {
i(t, e);
function t() {
var t = null !== e && e.apply(this, arguments) || this;
t._isPreloadComplete = !1;
t._blocksProducer = null;
return t;
}
t.prototype.preloadAssets = function() {
return a(this, void 0, void 0, function() {
return s(this, function(e) {
switch (e.label) {
case 0:
e.trys.push([ 0, 2, , 3 ]);
return [ 4, hs.ResLoader.asyncLoadByBundle("NewPlayerGuideSkipRefactorTrait", "prefabs/LayerNewPlayerGuideSkipCom", cc.Prefab) ];

case 1:
e.sent() ? this._isPreloadComplete = !0 : this._isPreloadComplete = !1;
return [ 3, 3 ];

case 2:
e.sent();
this._isPreloadComplete = !1;
return [ 3, 3 ];

case 3:
return [ 2 ];
}
});
});
};
t.prototype.registerTraitEventsMethods = function() {
return [ {
className: "ClassGame_Ready_Proxy",
methodName: "onClassGameReady"
}, {
className: "ClassBlocksProducer_Proxy",
methodName: "onGameStart"
} ];
};
t.prototype.onActive = function(e) {
hs.tp.isClassGame_Ready_ProxyOnClassGameReady(e) && this.doShowUI();
hs.tp.isClassBlocksProducer_ProxyOnGameStart(e) && (this._blocksProducer = e.target);
if (hs.tp.isClassGuide_ProxyOnGuideChangeTrait(e)) {
if (!this._isPreloadComplete) return;
var t = hs.classGuideInfo, r = t.totalStep;
t.step >= r && hs.UI.hideUI(u);
}
};
t.prototype.doShowUI = function() {
return a(this, void 0, void 0, function() {
return s(this, function(e) {
switch (e.label) {
case 0:
return [ 4, this.preloadAssets() ];

case 1:
e.sent();
if (!this._isPreloadComplete) return [ 2 ];
hs.classGuideInfo.isFinishedGuide || this.showSkipUI();
return [ 2 ];
}
});
});
};
t.prototype.showSkipUI = function() {
return a(this, void 0, void 0, function() {
var e;
return s(this, function(t) {
switch (t.label) {
case 0:
return [ 4, hs.UI.show(u) ];

case 1:
if (!(e = t.sent()) || !cc.isValid(e)) return [ 2 ];
if (hs.classGuideInfo.isFinishedGuide) {
hs.UI.hideUI(u);
return [ 2 ];
}
this._isPreloadComplete = !0;
e.getComponent(c.default).setState({
blocksProducer: this._blocksProducer,
prefabConfigItem: u
});
return [ 2 ];
}
});
});
};
return n([ classId("NewPlayerGuideSkipRefactorTrait") ], t);
}(Trait);
r.NewPlayerGuideSkipRefactorTrait = l;
cc._RF.pop();
}, {
"./ClassNewPlayerGuideSkipComRefactor": "ClassNewPlayerGuideSkipComRefactor"
} ],
NewPlayerGuideSkipRefactor_ios_Trait: [ function(e, t, r) {
"use strict";
cc._RF.push(t, "1a4c9W/aQ9LS74cXVIOvZWF", "NewPlayerGuideSkipRefactor_ios_Trait");
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
var i, n = arguments.length, a = n < 3 ? t : null === o ? o = Object.getOwnPropertyDescriptor(t, r) : o;
if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) a = Reflect.decorate(e, t, r, o); else for (var s = e.length - 1; s >= 0; s--) (i = e[s]) && (a = (n < 3 ? i(a) : n > 3 ? i(t, r, a) : i(t, r)) || a);
return n > 3 && a && Object.defineProperty(t, r, a), a;
};
Object.defineProperty(r, "__esModule", {
value: !0
});
r.NewPlayerGuideSkipRefactor_ios_Trait = void 0;
var a = function(e) {
i(t, e);
function t() {
var t = null !== e && e.apply(this, arguments) || this;
t._showUITimeoutId = -1;
return t;
}
t.prototype.isClassGame_Ready_ProxyOnClassGameReady = function() {
var e = this;
-1 !== this._showUITimeoutId && clearTimeout(this._showUITimeoutId);
this._showUITimeoutId = setTimeoutSafe(function() {
e._showUITimeoutId = -1;
e.active && e.doShowUI();
}, 800);
};
return n([ classId("NewPlayerGuideSkipRefactorTrait", "ios") ], t);
}(e("./NewPlayerGuideSkipRefactorTrait").NewPlayerGuideSkipRefactorTrait);
r.NewPlayerGuideSkipRefactor_ios_Trait = a;
cc._RF.pop();
}, {
"./NewPlayerGuideSkipRefactorTrait": "NewPlayerGuideSkipRefactorTrait"
} ]
}, {}, [ "ClassNewPlayerGuideSkipComRefactor", "NewPlayerGuideSkipRefactorTrait", "NewPlayerGuideSkipRefactor_ios_Trait" ]);
//# sourceMappingURL=index.js.map
