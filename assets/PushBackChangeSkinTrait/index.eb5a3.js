window.__require = function t(e, n, i) {
function r(a, s) {
if (!n[a]) {
if (!e[a]) {
var u = a.split("/");
u = u[u.length - 1];
if (!e[u]) {
var c = "function" == typeof __require && __require;
if (!s && c) return c(u, !0);
if (o) return o(u, !0);
throw new Error("Cannot find module '" + a + "'");
}
a = u;
}
var p = n[a] = {
exports: {}
};
e[a][0].call(p.exports, function(t) {
return r(e[a][1][t] || t);
}, p, p.exports, t, e, n, i);
}
return n[a].exports;
}
for (var o = "function" == typeof __require && __require, a = 0; a < i.length; a++) r(i[a]);
return r;
}({
PushBackChangeSkinTrait: [ function(t, e, n) {
"use strict";
cc._RF.push(e, "10558zusfVPh4l9kbSHJcng", "PushBackChangeSkinTrait");
var i, r = this && this.__extends || (i = function(t, e) {
return (i = Object.setPrototypeOf || {
__proto__: []
} instanceof Array && function(t, e) {
t.__proto__ = e;
} || function(t, e) {
for (var n in e) Object.prototype.hasOwnProperty.call(e, n) && (t[n] = e[n]);
})(t, e);
}, function(t, e) {
i(t, e);
function n() {
this.constructor = t;
}
t.prototype = null === e ? Object.create(e) : (n.prototype = e.prototype, new n());
}), o = this && this.__decorate || function(t, e, n, i) {
var r, o = arguments.length, a = o < 3 ? e : null === i ? i = Object.getOwnPropertyDescriptor(e, n) : i;
if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) a = Reflect.decorate(t, e, n, i); else for (var s = t.length - 1; s >= 0; s--) (r = t[s]) && (a = (o < 3 ? r(a) : o > 3 ? r(e, n, a) : r(e, n)) || a);
return o > 3 && a && Object.defineProperty(e, n, a), a;
};
Object.defineProperty(n, "__esModule", {
value: !0
});
n.PushBackChangeSkinTrait = void 0;
var a = {
pf_3011: "3011",
pf_3012: "3012",
pf_3017: "3017",
pf_3032: "3032",
pf_3033: "3033",
pf_4001: "4001",
pf_4003: "4003",
pf_4005: "4005",
pf_4008: "4008",
pf_4010: "4010",
pf_4019: "4019",
pf_4021: "4021",
pf_4026: "4026",
pf_4028: "4028",
pf_4035: "4035",
pf_4037: "4037",
pf_4042: "4042",
pf_4045: "4045",
pf_4051: "4051",
pf_4054: "4054",
pf_4055: "4055",
pf_4061: "4061",
pf_4063: "4063",
pf_4072: "4072",
pf_4078: "4078",
pf_4079: "4079"
}, s = function(t) {
r(e, t);
function e() {
var e = null !== t && t.apply(this, arguments) || this;
e._hasHandledColdStart = !1;
e._needChangeSkin = !1;
e._enterPushMessageCode = "";
e._threeSkinList = [];
e.isEnterClass = !1;
e._localData = null;
return e;
}
e.prototype.onCreate = function() {
this._threeSkinList = hs.storage.getItem("threeSkinList", []);
};
e.prototype.onActive = function(t) {
hs.tp.isLaunchChangeLaunchScene(t) && this.handleColdStart(t);
hs.tp.isSkin_ProxyLoadSkinCfg(t) && this.loadLocalSkin();
hs.tp.isSkin_ProxyLoadSkinCfgComplete(t);
if (hs.tp.isSkinThreeLoadInfoSetSkinThreeConfigToSkinConfig(t)) {
var e = t.args[0].replace("Remote_Skin_Material_", ""), n = parseInt(e);
n > 0 && this.addSkinId(n);
}
};
e.prototype.loadLocalSkin = function() {
if (!this._hasHandledColdStart) {
this._hasHandledColdStart = !0;
this.subscribePushOnColdStart();
if (this.isEnterByCurrentPush()) {
this.isEnterClass = !0;
this._needChangeSkin = !0;
this.tryChangeNextSkin();
}
}
};
e.prototype.addSkinId = function(t) {
if (!this._threeSkinList.includes(t)) {
this._threeSkinList.push(t);
hs.storage.setItem("threeSkinList", this._threeSkinList);
}
};
e.prototype.getSkinId = function(t) {
return this._threeSkinList.includes(t);
};
e.prototype.handleColdStart = function(t) {
if (this.isEnterClass) {
this.isEnterClass = !1;
t.args[0] = "class";
t.returnState = !0;
}
};
e.prototype.subscribePushOnColdStart = function() {
if (NativeBridge.isNative() && (!this.isAssignSkin || this.isSkinThreeActive())) {
var t = this.getPushTimeMs();
hs.NativeAppCenterInterface.noticeAppCommonSendPush({
opewaynum: this.opewaynum,
taskType: this.taskType,
sendTime: t
});
}
};
e.prototype.gmSendPushAfterTwoMinutes = function() {
if (NativeBridge.isNative()) {
var t = hs.getCurentDate();
t.setTime(t.getTime() + 12e4);
var e = Math.floor(t.getTime());
hs.NativeAppCenterInterface.noticeAppCommonSendPush({
opewaynum: this.opewaynum,
taskType: this.taskType,
sendTime: e
});
}
};
e.prototype.gmLogOpenAppPushInfo = function() {
NativeBridge.isNative() && (hs.NativeAppCenterInterface.noticeAppGetOpenAppOpeway(), 
hs.NativeAppCenterInterface.noticeAppGetOpenAppPushInfo());
};
e.prototype.isEnterByCurrentPush = function() {
if (!NativeBridge.isNative()) return !1;
this._enterPushMessageCode = "";
this.isAssignSkin && this.checkEnterPushMessageCode();
var t = String(this.opewaynum), e = hs.NativeAppCenterInterface.noticeAppGetOpenAppOpeway();
return (null == e ? void 0 : e.click) === t;
};
e.prototype.checkEnterPushMessageCode = function() {
var t;
if (hs.NativeSudokuIPAUtils.checkAppFuncSupport("10.0.6")) {
var e = hs.NativeAppCenterInterface.noticeAppGetOpenAppPushInfo();
this._enterPushMessageCode = null !== (t = null == e ? void 0 : e.message_code) && void 0 !== t ? t : "";
} else this._enterPushMessageCode = "";
};
e.prototype.tryChangeNextSkin = function() {
if (this._needChangeSkin) {
var t = this.getNextSkinId();
if ("-1" != t) {
this._needChangeSkin = !1;
storage.setItem("currentSkinId", "" + t);
hs.skinInfo.setCurrentSkinIdTemporary("" + t);
}
}
};
e.prototype.isSkinThreeActive = function() {
var t;
return (null === (t = TRAIT("SkinThreeStageTrait")) || void 0 === t ? void 0 : t.active) || !1;
};
e.prototype.getNextSkinId = function() {
if (!this.isSkinThreeActive()) return "-1";
if (this.isAssignSkin) {
var t = a[this._enterPushMessageCode], e = this.getSkinId(+t);
return t && e ? t : "-1";
}
var n = this.getSkinList();
return Array.isArray(n) && n.length > 0 ? n[Math.floor(Math.random() * n.length)].toString() : "-1";
};
e.prototype.getSkinList = function() {
return this._threeSkinList;
};
e.prototype.parseSendTime = function() {
var t = this.sendTime.split(":"), e = Number(t[0]), n = Number(t[1]);
return {
hour: Number.isFinite(e) ? e : 0,
minute: Number.isFinite(n) ? n : 0
};
};
e.prototype.getPushTimeMs = function() {
var t = this.parseSendTime(), e = hs.getCurentDate(), n = hs.getCurentDate();
n.setHours(t.hour, t.minute, 0, 0);
n.getTime() <= e.getTime() && n.setDate(n.getDate() + 1);
return Math.floor(n.getTime());
};
Object.defineProperty(e.prototype, "localData", {
get: function() {
this._localData || (this._localData = hs.storage.getItem("PushBackChangeSkinTraitLocalKey", {
__gmPushState: 0
}));
return this._localData;
},
enumerable: !1,
configurable: !0
});
e.prototype.saveLocalData = function() {
hs.storage.setItem("PushBackChangeSkinTraitLocalKey", this.localData);
};
Object.defineProperty(e.prototype, "sendTime", {
get: function() {
var t, e;
return null !== (e = null === (t = this.props) || void 0 === t ? void 0 : t.sendTime) && void 0 !== e ? e : "00:00";
},
enumerable: !1,
configurable: !0
});
Object.defineProperty(e.prototype, "taskType", {
get: function() {
var t, e;
return null !== (e = null === (t = this.props) || void 0 === t ? void 0 : t.taskType) && void 0 !== e ? e : "";
},
enumerable: !1,
configurable: !0
});
Object.defineProperty(e.prototype, "opewaynum", {
get: function() {
var t, e;
return null !== (e = String(null === (t = this.props) || void 0 === t ? void 0 : t.opewaynum)) && void 0 !== e ? e : "";
},
enumerable: !1,
configurable: !0
});
Object.defineProperty(e.prototype, "isAssignSkin", {
get: function() {
var t, e;
return null !== (e = null === (t = this.props) || void 0 === t ? void 0 : t.assignSkin) && void 0 !== e && e;
},
enumerable: !1,
configurable: !0
});
return o([ classId("PushBackChangeSkinTrait") ], e);
}(Trait);
n.PushBackChangeSkinTrait = s;
cc._RF.pop();
}, {} ],
PushBackChangeSkin_gpz1_Trait: [ function(t, e, n) {
"use strict";
cc._RF.push(e, "6de01LbLBNJTLKe02IBgegi", "PushBackChangeSkin_gpz1_Trait");
var i, r = this && this.__extends || (i = function(t, e) {
return (i = Object.setPrototypeOf || {
__proto__: []
} instanceof Array && function(t, e) {
t.__proto__ = e;
} || function(t, e) {
for (var n in e) Object.prototype.hasOwnProperty.call(e, n) && (t[n] = e[n]);
})(t, e);
}, function(t, e) {
i(t, e);
function n() {
this.constructor = t;
}
t.prototype = null === e ? Object.create(e) : (n.prototype = e.prototype, new n());
}), o = this && this.__decorate || function(t, e, n, i) {
var r, o = arguments.length, a = o < 3 ? e : null === i ? i = Object.getOwnPropertyDescriptor(e, n) : i;
if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) a = Reflect.decorate(t, e, n, i); else for (var s = t.length - 1; s >= 0; s--) (r = t[s]) && (a = (o < 3 ? r(a) : o > 3 ? r(e, n, a) : r(e, n)) || a);
return o > 3 && a && Object.defineProperty(e, n, a), a;
};
Object.defineProperty(n, "__esModule", {
value: !0
});
n.PushBackChangeSkin_gpz1_Trait = void 0;
var a = function(t) {
r(e, t);
function e() {
return null !== t && t.apply(this, arguments) || this;
}
e.prototype.onCreate = function() {
t.prototype.onCreate.call(this);
Trait.dynamicEnableTraitsAsync([ {
id: 333759001
} ]);
};
e.prototype.subscribePushOnColdStart = function() {
this.isMaturityOk() && t.prototype.subscribePushOnColdStart.call(this);
};
e.prototype.isMaturityOk = function() {
var t = TRAIT("MaturityDevelopmentV2Trait");
if (!(null == t ? void 0 : t.active) || "function" != typeof t.emitMaturity) return !1;
var e = t.emitMaturity("game");
return !!Number.isFinite(e) && e > 50;
};
return o([ classId("PushBackChangeSkinTrait", "gpz1") ], e);
}(t("./PushBackChangeSkinTrait").PushBackChangeSkinTrait);
n.PushBackChangeSkin_gpz1_Trait = a;
cc._RF.pop();
}, {
"./PushBackChangeSkinTrait": "PushBackChangeSkinTrait"
} ],
PushBackChangeSkin_gpz2_Trait: [ function(t, e, n) {
"use strict";
cc._RF.push(e, "f28c5Wc/chAIoR2RXI1OSvD", "PushBackChangeSkin_gpz2_Trait");
var i, r = this && this.__extends || (i = function(t, e) {
return (i = Object.setPrototypeOf || {
__proto__: []
} instanceof Array && function(t, e) {
t.__proto__ = e;
} || function(t, e) {
for (var n in e) Object.prototype.hasOwnProperty.call(e, n) && (t[n] = e[n]);
})(t, e);
}, function(t, e) {
i(t, e);
function n() {
this.constructor = t;
}
t.prototype = null === e ? Object.create(e) : (n.prototype = e.prototype, new n());
}), o = this && this.__decorate || function(t, e, n, i) {
var r, o = arguments.length, a = o < 3 ? e : null === i ? i = Object.getOwnPropertyDescriptor(e, n) : i;
if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) a = Reflect.decorate(t, e, n, i); else for (var s = t.length - 1; s >= 0; s--) (r = t[s]) && (a = (o < 3 ? r(a) : o > 3 ? r(e, n, a) : r(e, n)) || a);
return o > 3 && a && Object.defineProperty(e, n, a), a;
};
Object.defineProperty(n, "__esModule", {
value: !0
});
n.PushBackChangeSkin_gpz2_Trait = void 0;
var a = function(t) {
r(e, t);
function e() {
return null !== t && t.apply(this, arguments) || this;
}
e.prototype.onCreate = function() {
t.prototype.onCreate.call(this);
Trait.dynamicEnableTraitsAsync([ {
id: 333759001
} ]);
};
e.prototype.subscribePushOnColdStart = function() {
this.isMaturityOk() && t.prototype.subscribePushOnColdStart.call(this);
};
e.prototype.isMaturityOk = function() {
var t = TRAIT("MaturityDevelopmentV2Trait");
if (!(null == t ? void 0 : t.active) || "function" != typeof t.emitMaturity) return !1;
var e = t.emitMaturity("game");
return !!Number.isFinite(e) && e > 50;
};
return o([ classId("PushBackChangeSkinTrait", "gpz2") ], e);
}(t("./PushBackChangeSkinTrait").PushBackChangeSkinTrait);
n.PushBackChangeSkin_gpz2_Trait = a;
cc._RF.pop();
}, {
"./PushBackChangeSkinTrait": "PushBackChangeSkinTrait"
} ],
PushBackChangeSkin_iosz1_Trait: [ function(t, e, n) {
"use strict";
cc._RF.push(e, "955c4pjbvVGqrNwbKhFE4AF", "PushBackChangeSkin_iosz1_Trait");
var i, r = this && this.__extends || (i = function(t, e) {
return (i = Object.setPrototypeOf || {
__proto__: []
} instanceof Array && function(t, e) {
t.__proto__ = e;
} || function(t, e) {
for (var n in e) Object.prototype.hasOwnProperty.call(e, n) && (t[n] = e[n]);
})(t, e);
}, function(t, e) {
i(t, e);
function n() {
this.constructor = t;
}
t.prototype = null === e ? Object.create(e) : (n.prototype = e.prototype, new n());
}), o = this && this.__decorate || function(t, e, n, i) {
var r, o = arguments.length, a = o < 3 ? e : null === i ? i = Object.getOwnPropertyDescriptor(e, n) : i;
if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) a = Reflect.decorate(t, e, n, i); else for (var s = t.length - 1; s >= 0; s--) (r = t[s]) && (a = (o < 3 ? r(a) : o > 3 ? r(e, n, a) : r(e, n)) || a);
return o > 3 && a && Object.defineProperty(e, n, a), a;
};
Object.defineProperty(n, "__esModule", {
value: !0
});
n.PushBackChangeSkin_iosz1_Trait = void 0;
var a = function(t) {
r(e, t);
function e() {
return null !== t && t.apply(this, arguments) || this;
}
e.prototype.onCreate = function() {
t.prototype.onCreate.call(this);
Trait.dynamicEnableTraitsAsync([ {
id: 333366001
} ]);
};
e.prototype.subscribePushOnColdStart = function() {
this.isMaturityOk() && t.prototype.subscribePushOnColdStart.call(this);
};
e.prototype.isMaturityOk = function() {
var t = TRAIT("MaturityDevelopmentV2Trait");
if (!(null == t ? void 0 : t.active) || "function" != typeof t.emitMaturity) return !1;
var e = t.emitMaturity("game");
return !!Number.isFinite(e) && e > 50;
};
return o([ classId("PushBackChangeSkinTrait", "iosz1") ], e);
}(t("./PushBackChangeSkinTrait").PushBackChangeSkinTrait);
n.PushBackChangeSkin_iosz1_Trait = a;
cc._RF.pop();
}, {
"./PushBackChangeSkinTrait": "PushBackChangeSkinTrait"
} ],
PushBackChangeSkin_iosz2_Trait: [ function(t, e, n) {
"use strict";
cc._RF.push(e, "887d2QeF5hH77lMxGM8pH5P", "PushBackChangeSkin_iosz2_Trait");
var i, r = this && this.__extends || (i = function(t, e) {
return (i = Object.setPrototypeOf || {
__proto__: []
} instanceof Array && function(t, e) {
t.__proto__ = e;
} || function(t, e) {
for (var n in e) Object.prototype.hasOwnProperty.call(e, n) && (t[n] = e[n]);
})(t, e);
}, function(t, e) {
i(t, e);
function n() {
this.constructor = t;
}
t.prototype = null === e ? Object.create(e) : (n.prototype = e.prototype, new n());
}), o = this && this.__decorate || function(t, e, n, i) {
var r, o = arguments.length, a = o < 3 ? e : null === i ? i = Object.getOwnPropertyDescriptor(e, n) : i;
if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) a = Reflect.decorate(t, e, n, i); else for (var s = t.length - 1; s >= 0; s--) (r = t[s]) && (a = (o < 3 ? r(a) : o > 3 ? r(e, n, a) : r(e, n)) || a);
return o > 3 && a && Object.defineProperty(e, n, a), a;
};
Object.defineProperty(n, "__esModule", {
value: !0
});
n.PushBackChangeSkin_iosz2_Trait = void 0;
var a = function(t) {
r(e, t);
function e() {
return null !== t && t.apply(this, arguments) || this;
}
e.prototype.onCreate = function() {
t.prototype.onCreate.call(this);
Trait.dynamicEnableTraitsAsync([ {
id: 333366001
} ]);
};
e.prototype.subscribePushOnColdStart = function() {
this.isMaturityOk() && t.prototype.subscribePushOnColdStart.call(this);
};
e.prototype.isMaturityOk = function() {
var t = TRAIT("MaturityDevelopmentV2Trait");
if (!(null == t ? void 0 : t.active) || "function" != typeof t.emitMaturity) return !1;
var e = t.emitMaturity("game");
return !!Number.isFinite(e) && e > 50;
};
return o([ classId("PushBackChangeSkinTrait", "iosz2") ], e);
}(t("./PushBackChangeSkinTrait").PushBackChangeSkinTrait);
n.PushBackChangeSkin_iosz2_Trait = a;
cc._RF.pop();
}, {
"./PushBackChangeSkinTrait": "PushBackChangeSkinTrait"
} ]
}, {}, [ "PushBackChangeSkinTrait", "PushBackChangeSkin_gpz1_Trait", "PushBackChangeSkin_gpz2_Trait", "PushBackChangeSkin_iosz1_Trait", "PushBackChangeSkin_iosz2_Trait" ]);
//# sourceMappingURL=index.js.map
