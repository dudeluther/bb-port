window.__require = function e(t, n, r) {
function i(a, s) {
if (!n[a]) {
if (!t[a]) {
var h = a.split("/");
h = h[h.length - 1];
if (!t[h]) {
var u = "function" == typeof __require && __require;
if (!s && u) return u(h, !0);
if (o) return o(h, !0);
throw new Error("Cannot find module '" + a + "'");
}
a = h;
}
var c = n[a] = {
exports: {}
};
t[a][0].call(c.exports, function(e) {
return i(t[a][1][e] || e);
}, c, c.exports, e, t, n, r);
}
return n[a].exports;
}
for (var o = "function" == typeof __require && __require, a = 0; a < r.length; a++) i(r[a]);
return i;
}({
SkinChangeAblePushTrait: [ function(e, t, n) {
"use strict";
cc._RF.push(t, "1feb5rpKxVCBJ013qxkJQBZ", "SkinChangeAblePushTrait");
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
}), o = this && this.__decorate || function(e, t, n, r) {
var i, o = arguments.length, a = o < 3 ? t : null === r ? r = Object.getOwnPropertyDescriptor(t, n) : r;
if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) a = Reflect.decorate(e, t, n, r); else for (var s = e.length - 1; s >= 0; s--) (i = e[s]) && (a = (o < 3 ? i(a) : o > 3 ? i(t, n, a) : i(t, n)) || a);
return o > 3 && a && Object.defineProperty(t, n, a), a;
}, a = this && this.__awaiter || function(e, t, n, r) {
return new (n || (n = Promise))(function(i, o) {
function a(e) {
try {
h(r.next(e));
} catch (e) {
o(e);
}
}
function s(e) {
try {
h(r.throw(e));
} catch (e) {
o(e);
}
}
function h(e) {
e.done ? i(e.value) : (t = e.value, t instanceof n ? t : new n(function(e) {
e(t);
})).then(a, s);
var t;
}
h((r = r.apply(e, t || [])).next());
});
}, s = this && this.__generator || function(e, t) {
var n, r, i, o, a = {
label: 0,
sent: function() {
if (1 & i[0]) throw i[1];
return i[1];
},
trys: [],
ops: []
};
return o = {
next: s(0),
throw: s(1),
return: s(2)
}, "function" == typeof Symbol && (o[Symbol.iterator] = function() {
return this;
}), o;
function s(e) {
return function(t) {
return h([ e, t ]);
};
}
function h(o) {
if (n) throw new TypeError("Generator is already executing.");
for (;a; ) try {
if (n = 1, r && (i = 2 & o[0] ? r.return : o[0] ? r.throw || ((i = r.return) && i.call(r), 
0) : r.next) && !(i = i.call(r, o[1])).done) return i;
(r = 0, i) && (o = [ 2 & o[0], i.value ]);
switch (o[0]) {
case 0:
case 1:
i = o;
break;

case 4:
a.label++;
return {
value: o[1],
done: !1
};

case 5:
a.label++;
r = o[1];
o = [ 0 ];
continue;

case 7:
o = a.ops.pop();
a.trys.pop();
continue;

default:
if (!(i = a.trys, i = i.length > 0 && i[i.length - 1]) && (6 === o[0] || 2 === o[0])) {
a = 0;
continue;
}
if (3 === o[0] && (!i || o[1] > i[0] && o[1] < i[3])) {
a.label = o[1];
break;
}
if (6 === o[0] && a.label < i[1]) {
a.label = i[1];
i = o;
break;
}
if (i && a.label < i[2]) {
a.label = i[2];
a.ops.push(o);
break;
}
i[2] && a.ops.pop();
a.trys.pop();
continue;
}
o = t.call(e, a);
} catch (e) {
o = [ 6, e ];
r = 0;
} finally {
n = i = 0;
}
if (5 & o[0]) throw o[1];
return {
value: o[0] ? o[1] : void 0,
done: !0
};
}
}, h = this && this.__read || function(e, t) {
var n = "function" == typeof Symbol && e[Symbol.iterator];
if (!n) return e;
var r, i, o = n.call(e), a = [];
try {
for (;(void 0 === t || t-- > 0) && !(r = o.next()).done; ) a.push(r.value);
} catch (e) {
i = {
error: e
};
} finally {
try {
r && !r.done && (n = o.return) && n.call(o);
} finally {
if (i) throw i.error;
}
}
return a;
};
Object.defineProperty(n, "__esModule", {
value: !0
});
n.SkinChangeAblePushTrait = void 0;
var u = function(e) {
i(t, e);
function t() {
var t = null !== e && e.apply(this, arguments) || this;
t._dataSkinChangeAblePush = null;
t._isFirstChangeSkin = !0;
t._isLoadSkinCfgComplete = !1;
t._isEnterFromPush = !1;
t._hasCheckEnterFromPush = !1;
t._isPushValid = !0;
return t;
}
t.prototype.registerTraitEventsMethods = function() {
return [ {
className: "Skin_Proxy",
methodName: "loadSkinCfgComplete"
}, {
className: "ClassGame_Proxy",
methodName: "onGameStart"
}, {
className: "IsOpenChangeSkinTrait",
methodName: "changeSkinBlockCompelet"
} ];
};
t.prototype.onCreate = function() {
return a(this, void 0, Promise, function() {
return s(this, function() {
this._isPushValid = this.isPushValid();
return [ 2 ];
});
});
};
t.prototype.onActive = function(e) {
if (hs.tp.isLaunchChangeLaunchScene(e)) {
if (!this._isPushValid) return;
if (this.isEnterFromPush) {
e.args[0] = "class";
e.returnState = !0;
}
}
if (hs.tp.isSkin_ProxyLoadSkinCfgComplete(e)) {
this._isLoadSkinCfgComplete = !0;
this._isFirstChangeSkin = hs.skinInfo.currentSkinId === hs.skinInfo.originSkinId;
this.tryPush();
}
hs.tp.isClassGame_ProxyOnGameStart(e);
if (hs.tp.isIsOpenChangeSkinTraitChangeSkinBlockCompelet(e)) {
if (!this._isLoadSkinCfgComplete) {
this._isLoadSkinCfgComplete = !0;
this._isFirstChangeSkin = hs.skinInfo.currentSkinId === hs.skinInfo.originSkinId;
}
this.tryPush(!0);
}
hs.tp.isPushDispatchCentralInfoMarkCovered(e) && hs.pushDispatchCentralInfo.active && this.handlePushDispatchCentralInfoMarkCovered(e);
};
t.prototype.isPushValid = function() {
return hs.NativeSudokuIPAUtils.checkAppFuncSupport(hs.E_APP_FUNC_VERSION.NOTICE_PUSH_VERSION);
};
Object.defineProperty(t.prototype, "isEnterFromPush", {
get: function() {
var e, t;
if (this._hasCheckEnterFromPush) return this._isEnterFromPush;
var n = !1, r = hs.NativeAppCenterInterface.noticeAppGetOpenAppOpeway(), i = this.props.opewaynum;
(null === (e = null == r ? void 0 : r.click) || void 0 === e ? void 0 : e.length) > 0 ? i.includes(r.click) && (n = !0) : (null === (t = null == r ? void 0 : r.show) || void 0 === t ? void 0 : t.length) > 0 && r.show.some(function(e) {
return i.includes(e.opewaynum);
}) && (n = !0);
this._isEnterFromPush = n;
this._hasCheckEnterFromPush = !0;
return this._isEnterFromPush;
},
enumerable: !1,
configurable: !0
});
Object.defineProperty(t.prototype, "dataSkinChangeAblePush", {
get: function() {
this._dataSkinChangeAblePush || (this._dataSkinChangeAblePush = storage.getItem("SkinChangeAblePushTraitData", {
lastPushZeroTime: 0,
pushType: 0,
hasPushZeroTriggered: !1
}));
return this._dataSkinChangeAblePush;
},
enumerable: !1,
configurable: !0
});
t.prototype.saveDataSkinChangeAblePush = function() {
storage.setItem("SkinChangeAblePushTraitData", this.dataSkinChangeAblePush);
};
t.prototype.tryPush = function(e) {
void 0 === e && (e = !1);
if (this.canCheckPushDispatch()) {
var t = hs.getCurentDate().getTime() / 1e3, n = this._isFirstChangeSkin && !e ? 0 : 1, r = this.dataSkinChangeAblePush, i = r.lastPushZeroTime, o = r.pushType, a = r.hasPushZeroTriggered;
if (0 === n && a) ; else {
var s = this.getPushTimeMs(this.props.pushTime) + (e ? 864e5 : 0), h = new Date(s);
h.setHours(0, 0, 0, 0);
var u = Math.floor(h.getTime() / 1e3);
if (i > 0 && o == n) if (e) {
if (i >= u) return;
} else if (t < i + 259200) return;
e && this.dotCancelPush(this.dataSkinChangeAblePush.pushType);
var c = this.props.opewaynum[n], l = this.props.taskType[n];
this.occupyPushDispatch(c, l, s);
this.dataSkinChangeAblePush.lastPushZeroTime = u;
this.dataSkinChangeAblePush.pushType = n;
0 === n && (this.dataSkinChangeAblePush.hasPushZeroTriggered = !0);
this.saveDataSkinChangeAblePush();
this.callNativePush({
opewaynum: c,
taskType: l,
sendTime: s
});
}
}
};
t.prototype.callNativePush = function(e) {
hs.NativeAppCenterInterface.noticeAppCommonSendPush(e);
};
t.prototype.tryCancelPush = function() {
hs.NativeAppCenterInterface.noticeAppCommonRemovePush();
hs.pushDispatchCentralInfo.releasePushDispatch("SkinChangeAblePushTrait");
this.dotCancelPush(this.dataSkinChangeAblePush.pushType);
};
t.prototype.onPushDispatchCovered = function() {
0 === this.dataSkinChangeAblePush.pushType && (this.dataSkinChangeAblePush.hasPushZeroTriggered = !1);
this.dataSkinChangeAblePush.lastPushZeroTime = 0;
this.saveDataSkinChangeAblePush();
};
t.prototype.handlePushDispatchCentralInfoMarkCovered = function(e) {
var t, n, r = null === (t = e.args) || void 0 === t ? void 0 : t[0], i = null === (n = e.args) || void 0 === n ? void 0 : n[1];
"SkinChangeAblePushTrait" === r && this.onPushDispatchCovered(i);
};
t.prototype.dotCancelPush = function(e) {
0 === e ? DS("usr_data_push_remove", {
new_skin_unlock_push_remove: 1
}) : DS("usr_data_push_remove", {
new_skin_update_push_delay: 1
});
};
t.prototype.getPushTimeMs = function(e) {
var t = h(e.split(":").map(Number), 3), n = t[0], r = t[1];
t[2];
(isNaN(n) || n > 24 || n < 0) && (n = 0);
(isNaN(r) || r > 60 || r < 0) && (r = 0);
var i = new Date();
i.setHours(n, r, 0, 0);
return Math.floor(i.getTime());
};
t.prototype.canCheckPushDispatch = function() {
return !hs.pushDispatchCentralInfo.active || hs.pushDispatchCentralInfo.checkPriorityCanTrigger("SkinChangeAblePushTrait");
};
t.prototype.occupyPushDispatch = function(e, t, n) {
hs.pushDispatchCentralInfo.occupyPushDispatch("SkinChangeAblePushTrait", e, t, n);
};
return o([ classId("SkinChangeAblePushTrait") ], t);
}(Trait);
n.SkinChangeAblePushTrait = u;
cc._RF.pop();
}, {} ],
SkinChangeAblePush_gpz1_Trait: [ function(e, t, n) {
"use strict";
cc._RF.push(t, "96bfdC+bolDg6WjygXhkjjr", "SkinChangeAblePush_gpz1_Trait");
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
}), o = this && this.__decorate || function(e, t, n, r) {
var i, o = arguments.length, a = o < 3 ? t : null === r ? r = Object.getOwnPropertyDescriptor(t, n) : r;
if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) a = Reflect.decorate(e, t, n, r); else for (var s = e.length - 1; s >= 0; s--) (i = e[s]) && (a = (o < 3 ? i(a) : o > 3 ? i(t, n, a) : i(t, n)) || a);
return o > 3 && a && Object.defineProperty(t, n, a), a;
}, a = this && this.__awaiter || function(e, t, n, r) {
return new (n || (n = Promise))(function(i, o) {
function a(e) {
try {
h(r.next(e));
} catch (e) {
o(e);
}
}
function s(e) {
try {
h(r.throw(e));
} catch (e) {
o(e);
}
}
function h(e) {
e.done ? i(e.value) : (t = e.value, t instanceof n ? t : new n(function(e) {
e(t);
})).then(a, s);
var t;
}
h((r = r.apply(e, t || [])).next());
});
}, s = this && this.__generator || function(e, t) {
var n, r, i, o, a = {
label: 0,
sent: function() {
if (1 & i[0]) throw i[1];
return i[1];
},
trys: [],
ops: []
};
return o = {
next: s(0),
throw: s(1),
return: s(2)
}, "function" == typeof Symbol && (o[Symbol.iterator] = function() {
return this;
}), o;
function s(e) {
return function(t) {
return h([ e, t ]);
};
}
function h(o) {
if (n) throw new TypeError("Generator is already executing.");
for (;a; ) try {
if (n = 1, r && (i = 2 & o[0] ? r.return : o[0] ? r.throw || ((i = r.return) && i.call(r), 
0) : r.next) && !(i = i.call(r, o[1])).done) return i;
(r = 0, i) && (o = [ 2 & o[0], i.value ]);
switch (o[0]) {
case 0:
case 1:
i = o;
break;

case 4:
a.label++;
return {
value: o[1],
done: !1
};

case 5:
a.label++;
r = o[1];
o = [ 0 ];
continue;

case 7:
o = a.ops.pop();
a.trys.pop();
continue;

default:
if (!(i = a.trys, i = i.length > 0 && i[i.length - 1]) && (6 === o[0] || 2 === o[0])) {
a = 0;
continue;
}
if (3 === o[0] && (!i || o[1] > i[0] && o[1] < i[3])) {
a.label = o[1];
break;
}
if (6 === o[0] && a.label < i[1]) {
a.label = i[1];
i = o;
break;
}
if (i && a.label < i[2]) {
a.label = i[2];
a.ops.push(o);
break;
}
i[2] && a.ops.pop();
a.trys.pop();
continue;
}
o = t.call(e, a);
} catch (e) {
o = [ 6, e ];
r = 0;
} finally {
n = i = 0;
}
if (5 & o[0]) throw o[1];
return {
value: o[0] ? o[1] : void 0,
done: !0
};
}
};
Object.defineProperty(n, "__esModule", {
value: !0
});
n.SkinChangeAblePush_gpz1_Trait = void 0;
var h = function(e) {
i(t, e);
function t() {
return null !== e && e.apply(this, arguments) || this;
}
t.prototype.onCreate = function() {
return a(this, void 0, Promise, function() {
return s(this, function(t) {
switch (t.label) {
case 0:
return [ 4, e.prototype.onCreate.call(this) ];

case 1:
t.sent();
Trait.dynamicEnableTraitsAsync([ {
id: 333759001
} ]);
return [ 2 ];
}
});
});
};
t.prototype.tryPush = function(t) {
void 0 === t && (t = !1);
this.isMaturityOk() && e.prototype.tryPush.call(this, t);
};
t.prototype.isMaturityOk = function() {
var e = TRAIT("MaturityDevelopmentV2Trait");
if (!(null == e ? void 0 : e.active) || "function" != typeof e.emitMaturity) return !1;
var t = e.emitMaturity("game");
return !!Number.isFinite(t) && t > 40;
};
return o([ classId("SkinChangeAblePushTrait", "gpz1") ], t);
}(e("./SkinChangeAblePushTrait").SkinChangeAblePushTrait);
n.SkinChangeAblePush_gpz1_Trait = h;
cc._RF.pop();
}, {
"./SkinChangeAblePushTrait": "SkinChangeAblePushTrait"
} ]
}, {}, [ "SkinChangeAblePushTrait", "SkinChangeAblePush_gpz1_Trait" ]);
//# sourceMappingURL=index.js.map
