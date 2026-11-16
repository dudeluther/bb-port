!function(t, e) {
"object" == typeof exports && "undefined" != typeof module ? e(exports) : "function" == typeof define && define.amd ? define([ "exports" ], e) : e((t = "undefined" != typeof globalThis ? globalThis : t || self).ae = {});
}(this, function(t) {
"use strict";
var e = function(t, o) {
return (e = Object.setPrototypeOf || {
__proto__: []
} instanceof Array && function(t, e) {
t.__proto__ = e;
} || function(t, e) {
for (var o in e) Object.prototype.hasOwnProperty.call(e, o) && (t[o] = e[o]);
})(t, o);
};
function o(t, o) {
if ("function" != typeof o && null !== o) throw new TypeError("Class extends value " + String(o) + " is not a constructor or null");
function n() {
this.constructor = t;
}
e(t, o), t.prototype = null === o ? Object.create(o) : (n.prototype = o.prototype, 
new n());
}
var n, i, r = function() {
return (r = Object.assign || function(t) {
for (var e, o = 1, n = arguments.length; o < n; o++) for (var i in e = arguments[o]) Object.prototype.hasOwnProperty.call(e, i) && (t[i] = e[i]);
return t;
}).apply(this, arguments);
};
function s(t, e) {
var o = {};
for (var n in t) Object.prototype.hasOwnProperty.call(t, n) && e.indexOf(n) < 0 && (o[n] = t[n]);
if (null != t && "function" == typeof Object.getOwnPropertySymbols) {
var i = 0;
for (n = Object.getOwnPropertySymbols(t); i < n.length; i++) e.indexOf(n[i]) < 0 && Object.prototype.propertyIsEnumerable.call(t, n[i]) && (o[n[i]] = t[n[i]]);
}
return o;
}
function a(t, e, o, n) {
var i, r = arguments.length, s = r < 3 ? e : null === n ? n = Object.getOwnPropertyDescriptor(e, o) : n;
if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) s = Reflect.decorate(t, e, o, n); else for (var a = t.length - 1; a >= 0; a--) (i = t[a]) && (s = (r < 3 ? i(s) : r > 3 ? i(e, o, s) : i(e, o)) || s);
return r > 3 && s && Object.defineProperty(e, o, s), s;
}
function l(t, e) {
if ("object" == typeof Reflect && "function" == typeof Reflect.metadata) return Reflect.metadata(t, e);
}
function c(t, e, o, n) {
return new (o || (o = Promise))(function(i, r) {
function s(t) {
try {
l(n.next(t));
} catch (t) {
r(t);
}
}
function a(t) {
try {
l(n.throw(t));
} catch (t) {
r(t);
}
}
function l(t) {
var e;
t.done ? i(t.value) : (e = t.value, e instanceof o ? e : new o(function(t) {
t(e);
})).then(s, a);
}
l((n = n.apply(t, e || [])).next());
});
}
function u(t, e) {
var o, n, i, r = {
label: 0,
sent: function() {
if (1 & i[0]) throw i[1];
return i[1];
},
trys: [],
ops: []
}, s = Object.create(("function" == typeof Iterator ? Iterator : Object).prototype);
return s.next = a(0), s.throw = a(1), s.return = a(2), "function" == typeof Symbol && (s[Symbol.iterator] = function() {
return this;
}), s;
function a(a) {
return function(l) {
return function(a) {
if (o) throw new TypeError("Generator is already executing.");
for (;s && (s = 0, a[0] && (r = 0)), r; ) try {
if (o = 1, n && (i = 2 & a[0] ? n.return : a[0] ? n.throw || ((i = n.return) && i.call(n), 
0) : n.next) && !(i = i.call(n, a[1])).done) return i;
switch (n = 0, i && (a = [ 2 & a[0], i.value ]), a[0]) {
case 0:
case 1:
i = a;
break;

case 4:
return r.label++, {
value: a[1],
done: !1
};

case 5:
r.label++, n = a[1], a = [ 0 ];
continue;

case 7:
a = r.ops.pop(), r.trys.pop();
continue;

default:
if (!((i = (i = r.trys).length > 0 && i[i.length - 1]) || 6 !== a[0] && 2 !== a[0])) {
r = 0;
continue;
}
if (3 === a[0] && (!i || a[1] > i[0] && a[1] < i[3])) {
r.label = a[1];
break;
}
if (6 === a[0] && r.label < i[1]) {
r.label = i[1], i = a;
break;
}
if (i && r.label < i[2]) {
r.label = i[2], r.ops.push(a);
break;
}
i[2] && r.ops.pop(), r.trys.pop();
continue;
}
a = e.call(t, r);
} catch (t) {
a = [ 6, t ], n = 0;
} finally {
o = i = 0;
}
if (5 & a[0]) throw a[1];
return {
value: a[0] ? a[1] : void 0,
done: !0
};
}([ a, l ]);
};
}
}
function h(t) {
var e = "function" == typeof Symbol && Symbol.iterator, o = e && t[e], n = 0;
if (o) return o.call(t);
if (t && "number" == typeof t.length) return {
next: function() {
return t && n >= t.length && (t = void 0), {
value: t && t[n++],
done: !t
};
}
};
throw new TypeError(e ? "Object is not iterable." : "Symbol.iterator is not defined.");
}
function d(t, e) {
var o = "function" == typeof Symbol && t[Symbol.iterator];
if (!o) return t;
var n, i, r = o.call(t), s = [];
try {
for (;(void 0 === e || e-- > 0) && !(n = r.next()).done; ) s.push(n.value);
} catch (t) {
i = {
error: t
};
} finally {
try {
n && !n.done && (o = r.return) && o.call(r);
} finally {
if (i) throw i.error;
}
}
return s;
}
function p(t, e, o) {
if (o || 2 === arguments.length) for (var n, i = 0, r = e.length; i < r; i++) !n && i in e || (n || (n = Array.prototype.slice.call(e, 0, i)), 
n[i] = e[i]);
return t.concat(n || Array.prototype.slice.call(e));
}
"function" == typeof SuppressedError && SuppressedError, function(t) {
t[t.BindAtomDuplicate = 1010] = "BindAtomDuplicate", t[t.VariantOfDuplicate = 1011] = "VariantOfDuplicate", 
t[t.AttachToDuplicate = 1012] = "AttachToDuplicate", t[t.EntityRendererDuplicate = 1013] = "EntityRendererDuplicate", 
t[t.OnChainDuplicate = 1014] = "OnChainDuplicate", t[t.RouteFromDuplicate = 1015] = "RouteFromDuplicate", 
t[t.RouteToDuplicate = 1016] = "RouteToDuplicate", t[t.OrderDecoratorDuplicate = 1017] = "OrderDecoratorDuplicate", 
t[t.BindAtomRequired = 1020] = "BindAtomRequired", t[t.DomainBindingRequired = 1021] = "DomainBindingRequired", 
t[t.RouteEndpointRequired = 1022] = "RouteEndpointRequired", t[t.OrderTargetRequired = 1023] = "OrderTargetRequired", 
t[t.AttachToRequired = 1024] = "AttachToRequired", t[t.OnChainRequired = 1025] = "OnChainRequired", 
t[t.RoutePhaseRequired = 1026] = "RoutePhaseRequired", t[t.BindAtomTypeNotAllowed = 1030] = "BindAtomTypeNotAllowed", 
t[t.DomainTargetInvalid = 1031] = "DomainTargetInvalid", t[t.OrderTargetTypeInvalid = 1032] = "OrderTargetTypeInvalid", 
t[t.VariantOfNotVariantAtom = 1033] = "VariantOfNotVariantAtom", t[t.AttachToNotExtensionAtom = 1034] = "AttachToNotExtensionAtom", 
t[t.EntityDataNotLogicAtom = 1035] = "EntityDataNotLogicAtom", t[t.OnChainNotLogicAtom = 1036] = "OnChainNotLogicAtom", 
t[t.OnChainTargetNotChainable = 1037] = "OnChainTargetNotChainable", t[t.SignalStartConflict = 1040] = "SignalStartConflict", 
t[t.SignalEndConflict = 1041] = "SignalEndConflict", t[t.RouteReceiveConflict = 1042] = "RouteReceiveConflict", 
t[t.RouteDispatchConflict = 1043] = "RouteDispatchConflict", t[t.RouteTransformConflict = 1044] = "RouteTransformConflict", 
t[t.RouteFilterConflict = 1045] = "RouteFilterConflict", t[t.ReservedPropertyConflict = 1050] = "ReservedPropertyConflict", 
t[t.StorageReplaceDenied = 3010] = "StorageReplaceDenied", t[t.StorageDeleteDenied = 3011] = "StorageDeleteDenied", 
t[t.RoutePhaseOutOfScope = 3012] = "RoutePhaseOutOfScope", t[t.RoutePhasePropertyDenied = 3013] = "RoutePhasePropertyDenied", 
t[t.ChainBindingRequired = 3014] = "ChainBindingRequired", t[t.ChainPhaseOutOfScope = 3015] = "ChainPhaseOutOfScope", 
t[t.EntityDestroyDenied = 3018] = "EntityDestroyDenied", t[t.BoundaryBindingForbidden = 4010] = "BoundaryBindingForbidden", 
t[t.OrderScopeConflict = 4020] = "OrderScopeConflict", t[t.SignalDomainConflict = 4021] = "SignalDomainConflict", 
t[t.SelfBinding = 4030] = "SelfBinding", t[t.GenChainDependencyLoop = 4031] = "GenChainDependencyLoop", 
t[t.TransformEidInvalid = 5010] = "TransformEidInvalid", t[t.BroadcastFilterForbidden = 5011] = "BroadcastFilterForbidden", 
t[t.EntityDataConfigInvalid = 5012] = "EntityDataConfigInvalid", t[t.WorldFeaturesEmpty = 5013] = "WorldFeaturesEmpty", 
t[t.WorldEntityNoId = 5014] = "WorldEntityNoId", t[t.GraphicsRequired = 5015] = "GraphicsRequired", 
t[t.DownloadOnlyRootWorld = 5016] = "DownloadOnlyRootWorld", t[t.FeatureGalaxyAmbiguous = 5017] = "FeatureGalaxyAmbiguous", 
t[t.CopyWorldConfigConflict = 5018] = "CopyWorldConfigConflict", t[t.RenderGroupAssign = 6011] = "RenderGroupAssign", 
t[t.RenderPropertyNotExist = 6012] = "RenderPropertyNotExist", t[t.RenderEventNotRegistered = 6013] = "RenderEventNotRegistered", 
t[t.AtomClassNotRegistered = 7010] = "AtomClassNotRegistered", t[t.AtomInstanceNotFound = 7011] = "AtomInstanceNotFound", 
t[t.AtomTypeQueryFailed = 7012] = "AtomTypeQueryFailed", t[t.TopologicalConflict = 7020] = "TopologicalConflict", 
t[t.TopologicalCycle = 7021] = "TopologicalCycle", t[t.PriorityConstraintDuplicate = 7030] = "PriorityConstraintDuplicate", 
t[t.DomainRenderNotRegistered = 7040] = "DomainRenderNotRegistered", t[t.DomainRenderNoMatch = 7041] = "DomainRenderNoMatch", 
t[t.NetworkResultDeliverFailed = 7050] = "NetworkResultDeliverFailed", t[t.InheritanceForbidden = 8010] = "InheritanceForbidden", 
t[t.AtomClassParamMissing = 8011] = "AtomClassParamMissing", t[t.AtomNameInvalid = 8012] = "AtomNameInvalid", 
t[t.UnsupportedNodeType = 8013] = "UnsupportedNodeType", t[t.WarnSignalDomainCollect = 9010] = "WarnSignalDomainCollect", 
t[t.WarnRootControlledProperty = 9011] = "WarnRootControlledProperty";
}(i || (i = {}));
var m, _ = ((n = {})[i.BindAtomDuplicate] = "同一原子被多个属性绑定", n[i.VariantOfDuplicate] = "@variantOf 重复标记", 
n[i.AttachToDuplicate] = "@attachTo 重复标记", n[i.EntityRendererDuplicate] = "@entityRenderer 重复标记", 
n[i.OnChainDuplicate] = "@onChain 重复标记", n[i.RouteFromDuplicate] = "@routeFrom 重复标记", 
n[i.RouteToDuplicate] = "@routeTo 重复标记", n[i.OrderDecoratorDuplicate] = "排序装饰器重复标记", 
n[i.BindAtomRequired] = "装饰器需要配合 @bindAtom 使用", n[i.DomainBindingRequired] = "SignalAtom 必须恰好绑定一个 EntityDomainAtom", 
n[i.RouteEndpointRequired] = "SignalRouterAtom 缺少 @routeFrom 或 @routeTo", n[i.OrderTargetRequired] = "OrderAtom 缺少 @orderBefore 或 @orderAfter", 
n[i.AttachToRequired] = "DomainExtensionAtom 必须声明 @attachTo", n[i.OnChainRequired] = "LogicAtom 必须声明 @onChain", 
n[i.RoutePhaseRequired] = "@onChain 绑定路由器时必须指定路由阶段装饰器", n[i.BindAtomTypeNotAllowed] = "@bindAtom 绑定的原子类型不允许", 
n[i.DomainTargetInvalid] = "装饰器目标必须是 EntityDomainAtom", n[i.OrderTargetTypeInvalid] = "排序目标必须是 LogicAtom / RenderAtom / SignalRouterAtom / VariantAtom", 
n[i.VariantOfNotVariantAtom] = "@variantOf 仅限 VariantAtom 使用", n[i.AttachToNotExtensionAtom] = "@attachTo 仅限 DomainExtensionAtom 使用", 
n[i.EntityDataNotLogicAtom] = "@entityData 仅限 LogicAtom 使用", n[i.OnChainNotLogicAtom] = "@onChain 仅限 LogicAtom 使用", 
n[i.OnChainTargetNotChainable] = "@onChain 目标必须是可链接原子类型", n[i.SignalStartConflict] = "@signalStart 与已有阶段冲突", 
n[i.SignalEndConflict] = "@signalEnd 与已有阶段冲突", n[i.RouteReceiveConflict] = "@routeReceive 与已有路由阶段冲突", 
n[i.RouteDispatchConflict] = "@routeDispatch 与已有路由阶段冲突", n[i.RouteTransformConflict] = "@routeTransform 与已有路由阶段冲突", 
n[i.RouteFilterConflict] = "@routeFilter 与已有路由阶段冲突", n[i.ReservedPropertyConflict] = "@bindAtom 属性名与基类保留属性冲突", 
n[i.StorageReplaceDenied] = "禁止整体替换 runtime/storage，请修改具体字段", n[i.StorageDeleteDenied] = "禁止删除 runtime/storage", 
n[i.RoutePhaseOutOfScope] = "不在路由执行阶段内，禁止写入", n[i.RoutePhasePropertyDenied] = "当前路由阶段不允许写入此属性", 
n[i.ChainBindingRequired] = "需要 @onChain 声明才能修改", n[i.ChainPhaseOutOfScope] = "不在生成链执行阶段内，禁止修改", 
n[i.EntityDestroyDenied] = "实体不在当前域查询范围内，禁止销毁", n[i.BoundaryBindingForbidden] = "LogicAtom 禁止直接 @onChain 绑定边界原子", 
n[i.OrderScopeConflict] = "排序的两个原子不在同一执行链上", n[i.SignalDomainConflict] = "路由绑定的实体域与信号域冲突", 
n[i.SelfBinding] = "原子绑定了自身", n[i.GenChainDependencyLoop] = "生成链成员的依赖闭包回到了 owner", 
n[i.TransformEidInvalid] = "路由转换产生了不在目标域内的实体 ID", n[i.BroadcastFilterForbidden] = "Broadcast 路由器禁止绑定 @routeFilter", 
n[i.EntityDataConfigInvalid] = "@entityData 与 defineEntityData() 必须同时使用", n[i.WorldFeaturesEmpty] = "世界未配置任何特性", 
n[i.WorldEntityNoId] = "世界实体缺少 worldId", n[i.GraphicsRequired] = "Graphics 组件未配置", 
n[i.DownloadOnlyRootWorld] = "下载专用世界不能是根世界（无父世界），会无法自动销毁导致资源泄漏", n[i.FeatureGalaxyAmbiguous] = "特性被配置到跨越多个非 G0 星系的世界，无法确定一致性组", 
n[i.CopyWorldConfigConflict] = "副本世界存储配置冲突", n[i.RenderGroupAssign] = "渲染属性分组不能直接赋值，请设置具体子属性", 
n[i.RenderPropertyNotExist] = "渲染节点属性不存在", n[i.RenderEventNotRegistered] = "渲染事件不在标准列表中", 
n[i.AtomClassNotRegistered] = "原子类未注册", n[i.AtomInstanceNotFound] = "原子实例不存在", n[i.AtomTypeQueryFailed] = "原子类型查询失败（类未注册）", 
n[i.TopologicalConflict] = "优先级约束与已有约束冲突", n[i.TopologicalCycle] = "拓扑排序检测到循环依赖", 
n[i.PriorityConstraintDuplicate] = "重复添加相同的优先级约束", n[i.DomainRenderNotRegistered] = "域未注册渲染原子", 
n[i.DomainRenderNoMatch] = "域所有渲染变体的 renderCondition() 均不满足", n[i.NetworkResultDeliverFailed] = "网络回包投递失败（引擎内部错误）", 
n[i.InheritanceForbidden] = "原子类禁止继承", n[i.AtomClassParamMissing] = "@atomClass 缺少 atomName 参数", 
n[i.AtomNameInvalid] = "原子名不符合命名规范", n[i.UnsupportedNodeType] = "不支持的渲染节点类型", n[i.WarnSignalDomainCollect] = "信号执行期间禁止收集实体域", 
n[i.WarnRootControlledProperty] = "根节点受控属性被显式设置", n), f = ((m = {})[i.BindAtomDuplicate] = "error", 
m[i.VariantOfDuplicate] = "error", m[i.AttachToDuplicate] = "error", m[i.EntityRendererDuplicate] = "error", 
m[i.OnChainDuplicate] = "error", m[i.RouteFromDuplicate] = "error", m[i.RouteToDuplicate] = "error", 
m[i.OrderDecoratorDuplicate] = "error", m[i.BindAtomRequired] = "error", m[i.DomainBindingRequired] = "throw", 
m[i.RouteEndpointRequired] = "throw", m[i.OrderTargetRequired] = "throw", m[i.AttachToRequired] = "throw", 
m[i.OnChainRequired] = "throw", m[i.RoutePhaseRequired] = "throw", m[i.BindAtomTypeNotAllowed] = "error", 
m[i.DomainTargetInvalid] = "error", m[i.OrderTargetTypeInvalid] = "error", m[i.VariantOfNotVariantAtom] = "error", 
m[i.AttachToNotExtensionAtom] = "error", m[i.EntityDataNotLogicAtom] = "error", 
m[i.OnChainNotLogicAtom] = "error", m[i.OnChainTargetNotChainable] = "throw", m[i.SignalStartConflict] = "error", 
m[i.SignalEndConflict] = "error", m[i.RouteReceiveConflict] = "error", m[i.RouteDispatchConflict] = "error", 
m[i.RouteTransformConflict] = "error", m[i.RouteFilterConflict] = "error", m[i.ReservedPropertyConflict] = "error", 
m[i.StorageReplaceDenied] = "error", m[i.StorageDeleteDenied] = "error", m[i.RoutePhaseOutOfScope] = "error", 
m[i.RoutePhasePropertyDenied] = "error", m[i.ChainBindingRequired] = "error", m[i.ChainPhaseOutOfScope] = "error", 
m[i.EntityDestroyDenied] = "error", m[i.BoundaryBindingForbidden] = "error", m[i.OrderScopeConflict] = "error", 
m[i.SignalDomainConflict] = "error", m[i.SelfBinding] = "error", m[i.GenChainDependencyLoop] = "warn", 
m[i.TransformEidInvalid] = "warn", m[i.BroadcastFilterForbidden] = "error", m[i.EntityDataConfigInvalid] = "error", 
m[i.WorldFeaturesEmpty] = "throw", m[i.WorldEntityNoId] = "error", m[i.GraphicsRequired] = "throw", 
m[i.DownloadOnlyRootWorld] = "throw", m[i.FeatureGalaxyAmbiguous] = "error", m[i.CopyWorldConfigConflict] = "error", 
m[i.RenderGroupAssign] = "error", m[i.RenderPropertyNotExist] = "error", m[i.RenderEventNotRegistered] = "error", 
m[i.AtomClassNotRegistered] = "throw", m[i.AtomInstanceNotFound] = "throw", m[i.AtomTypeQueryFailed] = "error", 
m[i.TopologicalConflict] = "throw", m[i.TopologicalCycle] = "throw", m[i.PriorityConstraintDuplicate] = "error", 
m[i.DomainRenderNotRegistered] = "error", m[i.DomainRenderNoMatch] = "error", m[i.NetworkResultDeliverFailed] = "error", 
m[i.InheritanceForbidden] = "error", m[i.AtomClassParamMissing] = "error", m[i.AtomNameInvalid] = "error", 
m[i.UnsupportedNodeType] = "throw", m[i.WarnSignalDomainCollect] = "warn", m[i.WarnRootControlledProperty] = "warn", 
m);
function y(t, e, o) {
var n, i = null !== (n = null == o ? void 0 : o.action) && void 0 !== n ? n : f[t], r = function(t, e) {
var o, n, i = null !== (o = _[t]) && void 0 !== o ? o : "未知错误", r = "[AE".concat(t, "] ").concat(i), s = null !== (n = e.reason) && void 0 !== n ? n : e.context, a = Object.entries(e).filter(function(t) {
var e = d(t, 2), o = e[0];
return void 0 !== e[1] && "reason" !== o && "context" !== o;
});
if (!s && 0 === a.length) return r;
var l = [];
return a.length > 0 && l.push(a.map(function(t) {
var e = d(t, 2), o = e[0], n = e[1];
return "".concat(o, "=").concat(n);
}).join(", ")), s && l.push("→ ".concat(s)), l.length > 0 ? "".concat(r, " | ").concat(l.join(" ")) : r;
}(t, e);
if ("throw" === i) throw new Error(r);
}
function v(t) {
var e = t.atomFeatureName;
return e && "atomFeatureName" !== e ? e : void 0;
}
var g, A, x, b = new Set([ "id", "worldId", "worldIdList", "atomFeatureName", "sort", "silent", "skipLoadWorlds", "compressedBundleWorlds", "downloadOnly", "copyWorlds" ]), C = function() {
function t(t) {
var e, o, n, i, r, s, a, l;
this._rawEntriesByWorld = new Map(), this._featureSetCache = new Map(), this._skipLoadWorlds = new Set(), 
this._compressedWorldSet = new Set(), this._downloadOnlyWorldSet = new Set(), this._copyWorldMap = new Map(), 
this._copyWorldByNamespace = new Map(), this._invalidCopyWorldIds = new Set(), this._configOverrides = null, 
this._allEntries = t, this._collectCopyWorlds(t);
var c = this._expandWorldIdList(t);
this._debugInfo = {
featureCountAtCreate: t.length,
expandedEntryCountAtCreate: c.length,
downloadOnlyMarkEntryCounts: new Map()
};
try {
for (var u = h(c), d = u.next(); !d.done; d = u.next()) if ((y = d.value).worldId) {
var p = y.worldId;
y.downloadOnly && this._downloadOnlyWorldSet.add(p);
var m = this._rawEntriesByWorld.get(p);
m ? m.push(y) : this._rawEntriesByWorld.set(p, [ y ]);
}
} catch (t) {
e = {
error: t
};
} finally {
try {
d && !d.done && (o = u.return) && o.call(u);
} finally {
if (e) throw e.error;
}
}
try {
for (var _ = h(t), f = _.next(); !f.done; f = _.next()) {
var y;
if ((y = f.value).skipLoadWorlds) try {
for (var v = (r = void 0, h(y.skipLoadWorlds)), g = v.next(); !g.done; g = v.next()) {
var A = g.value;
this._skipLoadWorlds.add(A);
}
} catch (t) {
r = {
error: t
};
} finally {
try {
g && !g.done && (s = v.return) && s.call(v);
} finally {
if (r) throw r.error;
}
}
if (y.compressedBundleWorlds) try {
for (var x = (a = void 0, h(y.compressedBundleWorlds)), b = x.next(); !b.done; b = x.next()) A = b.value, 
this._compressedWorldSet.add(A);
} catch (t) {
a = {
error: t
};
} finally {
try {
b && !b.done && (l = x.return) && l.call(x);
} finally {
if (a) throw a.error;
}
}
}
} catch (t) {
n = {
error: t
};
} finally {
try {
f && !f.done && (i = _.return) && i.call(_);
} finally {
if (n) throw n.error;
}
}
}
return t.prototype.hasFeatures = function(t) {
var e, o;
return (null !== (o = null === (e = this._rawEntriesByWorld.get(t)) || void 0 === e ? void 0 : e.length) && void 0 !== o ? o : 0) > 0;
}, t.prototype.getWorldFeaturesDebugParams = function(t) {
var e, o = this._rawEntriesByWorld.get(t), n = "", i = String(t);
i.endsWith("_WorldAtom") && (n = i.slice(0, -10)), i.endsWith("_World") && (n = i.slice(0, -6));
var r = this._debugInfo.downloadOnlyMarkEntryCounts.get(t);
return {
featureListAtCreate: this._debugInfo.featureCountAtCreate,
expandedEntriesAtCreate: this._debugInfo.expandedEntryCountAtCreate,
rawEntryCount: null !== (e = null == o ? void 0 : o.length) && void 0 !== e ? e : 0,
isDownloadOnlyWorld: this._downloadOnlyWorldSet.has(t) ? "true" : "false",
downloadOnlyMarkedAtRuntime: void 0 !== r ? "true" : "false",
rawEntryCountAtMark: r,
guessedFeatureName: n,
hasGuessedFeatureInUniverse: n ? this.hasFeatureInUniverse(n) ? "true" : "false" : void 0
};
}, t.prototype.getWorldIds = function() {
return this._rawEntriesByWorld.keys();
}, t.prototype.getFeatureSet = function(t) {
var e = this._featureSetCache.get(t);
return e || (e = this._parseFeatureSet(t), this._featureSetCache.set(t, e)), e;
}, t.prototype.getFeatureEntry = function(t, e) {
return this.getFeatureSet(t).get(e);
}, t.prototype.shouldSkipNonSilentLoadAtoms = function(t) {
return this._skipLoadWorlds.has(t);
}, t.prototype.isDownloadOnlyWorld = function(t) {
return this._downloadOnlyWorldSet.has(t);
}, t.prototype.getCopyWorld = function(t) {
return this._copyWorldMap.get(t);
}, t.prototype.isInvalidCopyWorld = function(t) {
return this._invalidCopyWorldIds.has(t);
}, t.prototype.getCopyWorldByNamespace = function(t) {
return this._copyWorldByNamespace.get(t);
}, t.prototype.markDownloadOnlyWorld = function(t) {
var e;
this._downloadOnlyWorldSet.add(t);
var o = this._rawEntriesByWorld.get(t);
this._debugInfo.downloadOnlyMarkEntryCounts.set(t, null !== (e = null == o ? void 0 : o.length) && void 0 !== e ? e : 0);
}, t.prototype.getUniverseFeatureNames = function() {
var t, e;
if (!this._universeFeatureNames) {
this._universeFeatureNames = new Set();
try {
for (var o = h(this._allEntries), n = o.next(); !n.done; n = o.next()) {
var i = v(n.value);
i && this._universeFeatureNames.add(i);
}
} catch (e) {
t = {
error: e
};
} finally {
try {
n && !n.done && (e = o.return) && e.call(o);
} finally {
if (t) throw t.error;
}
}
}
return this._universeFeatureNames;
}, t.prototype.hasFeatureInUniverse = function(t) {
return this.getUniverseFeatureNames().has(t);
}, t.prototype._ensureCompressedFeatureNames = function() {
var t, e, o, n;
if (!this._compressedFeatureNames) {
this._compressedFeatureNames = new Set();
try {
for (var i = h(this._compressedWorldSet), r = i.next(); !r.done; r = i.next()) {
var s = r.value;
try {
for (var a = (o = void 0, h(this.getFeatureSet(s).keys())), l = a.next(); !l.done; l = a.next()) {
var c = l.value;
this._compressedFeatureNames.add(c);
}
} catch (t) {
o = {
error: t
};
} finally {
try {
l && !l.done && (n = a.return) && n.call(a);
} finally {
if (o) throw o.error;
}
}
}
} catch (e) {
t = {
error: e
};
} finally {
try {
r && !r.done && (e = i.return) && e.call(i);
} finally {
if (t) throw t.error;
}
}
}
return this._compressedFeatureNames;
}, t.prototype.isFeatureCompressed = function(t) {
return 0 !== this._compressedWorldSet.size && this._ensureCompressedFeatureNames().has(t);
}, t.prototype.markFeaturesCompressed = function(t) {
var e, o;
if (0 !== this._compressedWorldSet.size) {
var n = this._ensureCompressedFeatureNames();
try {
for (var i = h(t), r = i.next(); !r.done; r = i.next()) {
var s = r.value;
n.add(s);
}
} catch (t) {
e = {
error: t
};
} finally {
try {
r && !r.done && (o = i.return) && o.call(i);
} finally {
if (e) throw e.error;
}
}
}
}, t.prototype.getFeatureNamesForWorlds = function(t) {
var e, o, n, i, r = new Set();
try {
for (var s = h(t), a = s.next(); !a.done; a = s.next()) {
var l = a.value;
try {
for (var c = (n = void 0, h(this.getFeatureSet(l).keys())), u = c.next(); !u.done; u = c.next()) {
var m = u.value;
r.add(m);
}
} catch (t) {
n = {
error: t
};
} finally {
try {
u && !u.done && (i = c.return) && i.call(c);
} finally {
if (n) throw n.error;
}
}
}
} catch (t) {
e = {
error: t
};
} finally {
try {
a && !a.done && (o = s.return) && o.call(s);
} finally {
if (e) throw e.error;
}
}
return p([], d(r), !1);
}, t.prototype.parseGalaxy = function(t) {
var e = t.indexOf("_"), o = -1 === e ? t : t.slice(0, e);
return /^G\d+$/.test(o) ? o : void 0;
}, t.prototype.getGalaxyOfWorld = function(t) {
return this.parseGalaxy(t);
}, t.prototype.collectFeatureWorldAssociations = function() {
var t, e, o, n;
if (this._featureWorldAssoc) return this._featureWorldAssoc;
var i = new Map();
try {
for (var r = h(this._rawEntriesByWorld), s = r.next(); !s.done; s = r.next()) {
var a = d(s.value, 2), l = a[0], c = a[1];
try {
for (var u = (o = void 0, h(c)), p = u.next(); !p.done; p = u.next()) {
var m = v(p.value);
if (m) {
var _ = i.get(m);
_ || (_ = new Set(), i.set(m, _)), _.add(l);
}
}
} catch (t) {
o = {
error: t
};
} finally {
try {
p && !p.done && (n = u.return) && n.call(u);
} finally {
if (o) throw o.error;
}
}
}
} catch (e) {
t = {
error: e
};
} finally {
try {
s && !s.done && (e = r.return) && e.call(r);
} finally {
if (t) throw t.error;
}
}
return this._featureWorldAssoc = i, i;
}, t.prototype.groupOf = function(t) {
var e, o, n = this.parseGalaxy(t), r = this.collectFeatureWorldAssociations().get(t);
if (!r || 0 === r.size) return n;
var s = !1, a = new Set();
try {
for (var l = h(r), c = l.next(); !c.done; c = l.next()) {
var u = c.value, m = this.parseGalaxy(u);
"G0" === m ? s = !0 : void 0 !== m && a.add(m);
}
} catch (t) {
e = {
error: t
};
} finally {
try {
c && !c.done && (o = l.return) && o.call(l);
} finally {
if (e) throw e.error;
}
}
return s ? "G0" : (void 0 !== n && a.add(n), a.size > 1 && y(i.FeatureGalaxyAmbiguous, {
feature: t,
galaxies: p([], d(a), !1).join(",")
}, {
action: "error"
}), null != n ? n : p([], d(a), !1)[0]);
}, t.prototype.collectFeaturesByGroup = function() {
var t, e;
if (this._featuresByGroup) return this._featuresByGroup;
var o = new Map();
try {
for (var n = h(this.getUniverseFeatureNames()), i = n.next(); !i.done; i = n.next()) {
var r = i.value, s = this.groupOf(r);
if (void 0 !== s) {
var a = o.get(s);
a || (a = new Set(), o.set(s, a)), a.add(r);
}
}
} catch (e) {
t = {
error: e
};
} finally {
try {
i && !i.done && (e = n.return) && e.call(n);
} finally {
if (t) throw t.error;
}
}
return this._featuresByGroup = o, o;
}, t.prototype.applyOverrides = function(t, e) {
var o = this._ensureConfigOverrides().get(t);
o && this._deepMerge(e, o);
}, t.prototype._collectCopyWorlds = function(t) {
var e, o, n, r, s, a;
try {
for (var l = h(t), c = l.next(); !c.done; c = l.next()) {
var u = c.value.copyWorlds;
if (u && 0 !== u.length) try {
for (var m = (n = void 0, h(u)), _ = m.next(); !_.done; _ = m.next()) {
var f = _.value;
if (f.worldId && f.storageNamespace) if (/^[A-Za-z0-9-]+$/.test(f.storageNamespace)) {
var v = this._copyWorldMap.get(f.worldId);
if (v) {
var g = v.storageNamespace !== f.storageNamespace, A = !0 === v.allowRawMirrorWrite != (!0 === f.allowRawMirrorWrite);
(g || A) && (y(i.CopyWorldConfigConflict, {
worldId: f.worldId,
namespace: f.storageNamespace,
existingNamespace: v.storageNamespace,
reason: A ? "同一副本根的 allowRawMirrorWrite 配置不一致（".concat(!0 === v.allowRawMirrorWrite, " vs ").concat(!0 === f.allowRawMirrorWrite, "），镜像写入策略不确定") : "同一副本根被配置成不同 storageNamespace"
}), this._invalidCopyWorldIds.add(f.worldId));
} else {
var x = this._copyWorldByNamespace.get(f.storageNamespace);
x ? (y(i.CopyWorldConfigConflict, {
worldId: f.worldId,
namespace: f.storageNamespace,
existingWorldId: x.worldId
}), this._invalidCopyWorldIds.add(f.worldId)) : (this._copyWorldMap.set(f.worldId, f), 
this._copyWorldByNamespace.set(f.storageNamespace, f));
}
} else y(i.CopyWorldConfigConflict, {
worldId: f.worldId,
namespace: f.storageNamespace,
reason: "storageNamespace 只允许字母、数字、-（含 _ / % / NUL 等会破坏磁盘 key 与槽位键分隔）"
}), this._invalidCopyWorldIds.add(f.worldId); else y(i.CopyWorldConfigConflict, {
worldId: null !== (s = f.worldId) && void 0 !== s ? s : "",
namespace: null !== (a = f.storageNamespace) && void 0 !== a ? a : "",
reason: "copyWorlds 必须同时提供 worldId 与 storageNamespace"
}), f.worldId && this._invalidCopyWorldIds.add(f.worldId);
}
} catch (t) {
n = {
error: t
};
} finally {
try {
_ && !_.done && (r = m.return) && r.call(m);
} finally {
if (n) throw n.error;
}
}
}
} catch (t) {
e = {
error: t
};
} finally {
try {
c && !c.done && (o = l.return) && o.call(l);
} finally {
if (e) throw e.error;
}
}
this._copyWorldMap.size > 0 && p([], d(this._copyWorldMap.values()), !1).map(function(t) {
return "".concat(t.worldId, "→").concat(t.storageNamespace);
}).join(", ");
}, t.prototype._expandWorldIdList = function(t) {
var e, o, n, i, a = [];
try {
for (var l = h(t), c = l.next(); !c.done; c = l.next()) {
var u = c.value, d = u.worldIdList;
if (d && 0 !== d.length) {
u.worldIdList, u.worldId;
var p = s(u, [ "worldIdList", "worldId" ]);
try {
for (var m = (n = void 0, h(d)), _ = m.next(); !_.done; _ = m.next()) {
var f = _.value;
a.push(r(r({}, p), {
worldId: f
}));
}
} catch (t) {
n = {
error: t
};
} finally {
try {
_ && !_.done && (i = m.return) && i.call(m);
} finally {
if (n) throw n.error;
}
}
} else a.push(u);
}
} catch (t) {
e = {
error: t
};
} finally {
try {
c && !c.done && (o = l.return) && o.call(l);
} finally {
if (e) throw e.error;
}
}
return a;
}, t.prototype._parseFeatureSet = function(t) {
var e, o, n, i = null !== (n = this._rawEntriesByWorld.get(t)) && void 0 !== n ? n : [], r = new Map();
try {
for (var s = h(i), a = s.next(); !a.done; a = s.next()) {
var l = a.value, c = v(l);
c && r.set(c, l);
}
} catch (t) {
e = {
error: t
};
} finally {
try {
a && !a.done && (o = s.return) && o.call(s);
} finally {
if (e) throw e.error;
}
}
return r;
}, t.prototype._ensureConfigOverrides = function() {
return this._configOverrides || (this._configOverrides = this._parseConfigOverrides()), 
this._configOverrides;
}, t.prototype._parseConfigOverrides = function() {
var t, e, o = [];
try {
for (var n = h(this._allEntries), i = n.next(); !i.done; i = n.next()) {
var r = i.value;
this._collectConfigEntry(r, o);
}
} catch (e) {
t = {
error: e
};
} finally {
try {
i && !i.done && (e = n.return) && e.call(n);
} finally {
if (t) throw t.error;
}
}
o.sort(function(t, e) {
return e.sort - t.sort || e.id - t.id;
});
var s = this._mergeConfigs(o);
o.map(function(t) {
return "    id=".concat(t.id, " sort=").concat(t.sort, " ").concat(t.atomName).concat(t.path.length ? "." + t.path.join(".") : "", " = ").concat(JSON.stringify(t.value));
});
return s;
}, t.prototype._collectConfigEntry = function(t, e) {
var o = t.sort, n = void 0 === o ? 0 : o, i = t.id, r = void 0 === i ? 0 : i;
for (var s in t) if (!b.has(s) && "G" === s[0] && /_.*_/.test(s)) {
var a = s.split("."), l = a[0], c = a.slice(1), u = t[s];
e.push({
id: r,
sort: n,
atomName: l,
path: c,
value: u
});
}
}, t.prototype._mergeConfigs = function(t) {
for (var e = new Map(), o = new Map(), n = t.length - 1; n >= 0; n--) {
var i = t[n], r = i.id, s = i.atomName, a = i.path, l = i.value, c = e.get(s);
c || (c = {}, e.set(s, c));
var u = o.get(s);
u || (u = new Map(), o.set(s, u)), this._mergeAtPath(c, a, l, r, u);
}
return this._warnConflicts(o), e;
}, t.prototype._mergeAtPath = function(t, e, o, n, i) {
if (0 === e.length) o && "object" == typeof o && !Array.isArray(o) && this._deepMergeWithConflict(t, o, "", n, i); else {
for (var r = t, s = 0; s < e.length - 1; s++) {
var a = e[s];
r[a] && "object" == typeof r[a] || (r[a] = {}), r = r[a];
}
var l = e[e.length - 1], c = e.join("."), u = r[l];
o && "object" == typeof o && !Array.isArray(o) ? (u && "object" == typeof u && !Array.isArray(u) || (r[l] = {}), 
this._deepMergeWithConflict(r[l], o, c, n, i)) : (this._recordConflict(i, c, n, o), 
r[l] = o);
}
}, t.prototype._deepMergeWithConflict = function(t, e, o, n, i) {
for (var r in e) {
var s = o ? "".concat(o, ".").concat(r) : r, a = e[r], l = t[r];
a && "object" == typeof a && !Array.isArray(a) ? (l && "object" == typeof l && !Array.isArray(l) || (t[r] = {}), 
this._deepMergeWithConflict(t[r], a, s, n, i)) : (this._recordConflict(i, s, n, a), 
t[r] = a);
}
}, t.prototype._recordConflict = function(t, e, o, n) {
var i = t.get(e);
i || (i = [], t.set(e, i)), i.push({
id: o,
value: n
});
}, t.prototype._warnConflicts = function(t) {
var e, o, n, i;
try {
for (var r = h(t), s = r.next(); !s.done; s = r.next()) {
var a = d(s.value, 2), l = (a[0], a[1]);
try {
for (var c = (n = void 0, h(l)), u = c.next(); !u.done; u = c.next()) {
var p = d(u.value, 2), m = (p[0], p[1]);
m.length > 1 && m.map(function(t, e) {
return "  ".concat(e + 1, '. id="').concat(t.id, '" value=').concat(JSON.stringify(t.value));
}).join("\n");
}
} catch (t) {
n = {
error: t
};
} finally {
try {
u && !u.done && (i = c.return) && i.call(c);
} finally {
if (n) throw n.error;
}
}
}
} catch (t) {
e = {
error: t
};
} finally {
try {
s && !s.done && (o = r.return) && o.call(r);
} finally {
if (e) throw e.error;
}
}
}, t.prototype._deepMerge = function(t, e) {
for (var o in e) {
var n = e[o], i = t[o];
n && "object" == typeof n && !Array.isArray(n) ? (i && "object" == typeof i && !Array.isArray(i) || (t[o] = {}), 
this._deepMerge(t[o], n)) : t[o] = n;
}
}, t;
}(), w = function(t, e, o) {
return Object.defineProperty(t, e, {
value: o,
enumerable: !1,
writable: !0,
configurable: !0
});
}, S = function() {
return {
aliveCount: 0,
dense: [],
sparse: [],
maxId: 0,
versioning: !1,
versionBits: 8,
entityMask: 16777215,
versionShift: 24,
versionMask: 255 << 24
};
}, R = function(t, e) {
var o = function(t, e) {
return e & t.entityMask;
}(t, e), n = t.sparse[o];
return void 0 !== n && n < t.aliveCount && t.dense[n] === e;
}, B = Symbol.for("bitecs_internal"), T = function() {
var t = [], e = [], o = function(o) {
return t[e[o]] === o;
};
return {
add: function(n) {
o(n) || (e[n] = t.push(n) - 1);
},
remove: function(n) {
if (o(n)) {
var i = e[n], r = t.pop();
r !== n && (t[i] = r, e[r] = i);
}
},
has: o,
sparse: e,
dense: t,
reset: function() {
t.length = 0, e.length = 0;
},
sort: function(o) {
t.sort(o);
for (var n = 0; n < t.length; n++) e[t[n]] = n;
}
};
}, F = "undefined" != typeof SharedArrayBuffer ? SharedArrayBuffer : ArrayBuffer, M = function(t) {
void 0 === t && (t = 1e3);
var e = [], o = 0, n = new Uint32Array(new F(4 * t)), i = function(t) {
return t < e.length && e[t] < o && n[e[t]] === t;
};
return {
add: function(t) {
if (!i(t)) {
if (o >= n.length) {
var r = new Uint32Array(new F(8 * n.length));
r.set(n), n = r;
}
n[o] = t, e[t] = o, o++;
}
},
remove: function(t) {
if (i(t)) {
o--;
var r = e[t], s = n[o];
n[r] = s, e[s] = r;
}
},
has: i,
sparse: e,
get dense() {
return new Uint32Array(n.buffer, 0, o);
},
reset: function() {
o = 0, e.length = 0;
},
sort: function(t) {
var i = Array.from(n.subarray(0, o));
i.sort(t);
for (var r = 0; r < i.length; r++) n[r] = i[r];
for (r = 0; r < o; r++) e[n[r]] = r;
}
};
}, I = function() {
var t = new Set();
return {
subscribe: function(e) {
return t.add(e), function() {
t.delete(e);
};
},
notify: function(e) {
for (var o = [], n = 1; n < arguments.length; n++) o[n - 1] = arguments[n];
return Array.from(t).reduce(function(t, n) {
var i = n.apply(void 0, p([ e ], d(o), !1));
return i && "object" == typeof i ? r(r({}, t), i) : t;
}, {});
}
};
}, D = Symbol.for("bitecs-relation"), N = Symbol.for("bitecs-pairTarget"), P = Symbol.for("bitecs-isPairComponent"), E = Symbol.for("bitecs-relationData"), L = function() {
var t = {
pairsMap: new Map(),
initStore: void 0,
exclusiveRelation: !1,
autoRemoveSubject: !1,
onTargetRemoved: void 0,
onAdd: void 0,
onRemove: void 0
}, e = function(o) {
if (void 0 === o) throw Error("Relation target is undefined");
var n = "*" === o ? H : o;
if (!t.pairsMap.has(n)) {
var i = {};
w(i, D, e), w(i, N, n), w(i, P, !0), t.pairsMap.set(n, i);
}
return t.pairsMap.get(n);
};
return w(e, E, t), e;
}, W = function(t) {
return t[E].exclusiveRelation = !0, t;
}, V = function(t) {
return t[E].autoRemoveSubject = !0, t;
}, O = function(t) {
return function(e) {
return e[E].onTargetRemoved = t, e;
};
}, k = function(t) {
return function(e) {
return e[E].onAdd = t, e;
};
}, G = function(t) {
return function(e) {
return e[E].onRemove = t, e;
};
}, z = function(t, e) {
if (void 0 === t) throw Error("Relation is undefined");
return t(e);
}, j = function(t, e, o) {
var n, i, r = ne(t, e), s = [];
try {
for (var a = h(r), l = a.next(); !l.done; l = a.next()) {
var c = l.value;
c[D] !== o || c[N] === H || Y(c[N]) || s.push(c[N]);
}
} catch (t) {
n = {
error: t
};
} finally {
try {
l && !l.done && (i = a.return) && i.call(a);
} finally {
if (n) throw n.error;
}
}
return s;
}, q = Symbol.for("bitecs-wildcard"), H = (A = Symbol.for("bitecs-global-wildcard"), 
globalThis[A] || (globalThis[A] = (g = L(), Object.defineProperty(g, q, {
value: !0,
enumerable: !1,
writable: !1,
configurable: !1
}), g)), globalThis[A]), U = (x = Symbol.for("bitecs-global-isa"), globalThis[x] || (globalThis[x] = L()), 
globalThis[x]);
function Y(t) {
return !!t && Object.getOwnPropertySymbols(t).includes(E);
}
var X, J = 4294967295;
function Q(t, e) {
var o = t.depths;
if (e < o.length) return o;
var n = Math.max(e + 1, 2 * o.length, o.length + 1024), i = new Uint32Array(n);
return i.fill(J), i.set(o), t.depths = i, i;
}
function K(t, e, o, n) {
var i = t.depthToEntities;
if (void 0 !== n && n !== J) {
var r = i.get(n);
r && (r.remove(e), 0 === r.dense.length && i.delete(n));
}
o !== J && (i.has(o) || i.set(o, M()), i.get(o).add(e));
}
function Z(t, e, o, n) {
t.depths[e] = o, K(t, e, o, n), function(t, e) {
e > t.maxDepth && (t.maxDepth = e);
}(t, o);
}
function $(t, e) {
t[B].hierarchyQueryCache.delete(e);
}
function tt(t, e) {
var o = t[B];
return o.hierarchyActiveRelations.has(e) || (o.hierarchyActiveRelations.add(e), 
et(t, e), function(t, e) {
var o, n, i, r, s, a, l = At(t, [ z(e, H) ]);
try {
for (var c = h(l), u = c.next(); !u.done; u = c.next()) it(t, e, _ = u.value);
} catch (t) {
o = {
error: t
};
} finally {
try {
u && !u.done && (n = c.return) && n.call(c);
} finally {
if (o) throw o.error;
}
}
var d = new Set();
try {
for (var p = h(l), m = p.next(); !m.done; m = p.next()) {
var _ = m.value;
try {
for (var f = (s = void 0, h(j(t, _, e))), y = f.next(); !y.done; y = f.next()) {
var v = y.value;
d.has(v) || (d.add(v), it(t, e, v));
}
} catch (t) {
s = {
error: t
};
} finally {
try {
y && !y.done && (a = f.return) && a.call(f);
} finally {
if (s) throw s.error;
}
}
}
} catch (t) {
i = {
error: t
};
} finally {
try {
m && !m.done && (r = p.return) && r.call(p);
} finally {
if (i) throw i.error;
}
}
}(t, e)), o.hierarchyData.get(e);
}
function et(t, e) {
var o = t[B];
if (!o.hierarchyData.has(e)) {
var n = Math.max(1024, 2 * o.entityIndex.dense.length), i = new Uint32Array(n);
i.fill(J), o.hierarchyData.set(e, {
depths: i,
dirty: T(),
depthToEntities: new Map(),
maxDepth: 0
});
}
}
function ot(t, e, o, n) {
var i, r;
if (void 0 === n && (n = new Set()), n.has(o)) return 0;
n.add(o);
var s = j(t, o, e);
if (0 === s.length) return 0;
if (1 === s.length) return nt(t, e, s[0], n) + 1;
var a = 1 / 0;
try {
for (var l = h(s), c = l.next(); !c.done; c = l.next()) {
var u = nt(t, e, c.value, n);
if (u < a && 0 === (a = u)) break;
}
} catch (t) {
i = {
error: t
};
} finally {
try {
c && !c.done && (r = l.return) && r.call(l);
} finally {
if (i) throw i.error;
}
}
return a === 1 / 0 ? 0 : a + 1;
}
function nt(t, e, o, n) {
var i = t[B];
et(t, e);
var r = i.hierarchyData.get(e), s = r.depths;
if ((s = Q(r, o))[o] === J) {
var a = ot(t, e, o, n);
return Z(r, o, a), a;
}
return s[o];
}
function it(t, e, o) {
return nt(t, e, o, new Set());
}
function rt(t, e, o, n, i) {
var r, s;
if (void 0 === i && (i = T()), !i.has(o)) {
i.add(o);
var a = At(t, [ e(o) ]);
try {
for (var l = h(a), c = l.next(); !c.done; c = l.next()) {
var u = c.value;
n.add(u), rt(t, e, u, n, i);
}
} catch (t) {
r = {
error: t
};
} finally {
try {
c && !c.done && (s = l.return) && s.call(l);
} finally {
if (r) throw r.error;
}
}
}
}
function st(t, e, o, n, i) {
void 0 === i && (i = new Set());
var r = t[B];
if (r.hierarchyActiveRelations.has(e)) {
et(t, e);
var s = r.hierarchyData.get(e);
if (i.has(o)) s.dirty.add(o); else {
i.add(o);
var a = s.depths, l = s.dirty, c = void 0 !== n ? it(t, e, n) + 1 : 0;
if (!(c > 64)) {
var u = a[o];
Z(s, o, c, u === J ? void 0 : u), u !== c && (rt(t, e, o, l, T()), $(t, e));
}
}
}
}
function at(t, e, o) {
var n = t[B];
if (n.hierarchyActiveRelations.has(e)) {
var i = n.hierarchyData.get(e);
i.depths, lt(t, e, o, Q(i, o), T()), $(t, e);
}
}
function lt(t, e, o, n, i) {
var r, s;
if (!i.has(o)) {
i.add(o);
var a = t[B].hierarchyData.get(e);
if (o < n.length) {
var l = n[o];
l !== J && (a.depths[o] = J, K(a, o, J, l));
}
var c = At(t, [ e(o) ]);
try {
for (var u = h(c), d = u.next(); !d.done; d = u.next()) lt(t, e, d.value, n, i);
} catch (t) {
r = {
error: t
};
} finally {
try {
d && !d.done && (s = u.return) && s.call(u);
} finally {
if (r) throw r.error;
}
}
}
}
function ct(t, e) {
var o, n, i = t[B].hierarchyData.get(e);
if (i) {
var r = i.dirty, s = i.depths;
if (0 !== r.dense.length) {
try {
for (var a = h(r.dense), l = a.next(); !l.done; l = a.next()) {
var c = l.value;
s[c] === J && Z(i, c, ot(t, e, c));
}
} catch (t) {
o = {
error: t
};
} finally {
try {
l && !l.done && (n = a.return) && n.call(a);
} finally {
if (o) throw o.error;
}
}
r.reset();
}
}
}
var ut = Symbol.for("bitecs-opType"), ht = Symbol.for("bitecs-opTerms"), dt = Symbol.for("bitecs-hierarchyType"), pt = Symbol.for("bitecs-hierarchyRel"), mt = Symbol.for("bitecs-hierarchyDepth"), _t = Symbol.for("bitecs-modifierType"), ft = ((X = {})[_t] = "nested", 
X), yt = function(t, e) {
var o = t[B], n = function(e) {
return ut in e ? "".concat(e[ut].toLowerCase(), "(").concat(e[ht].map(n).sort().join(","), ")") : (i = e, 
o.componentMap.has(i) || Bt(t, i), o.componentMap.get(i).id).toString();
var i;
};
return e.map(n).sort().join("-");
}, vt = function(t, e, o) {
void 0 === o && (o = {});
var n = t[B], i = yt(t, e), r = [], s = function(e) {
ut in e ? e[ht].forEach(s) : (n.componentMap.has(e) || Bt(t, e), r.push(e));
};
e.forEach(s);
var a = [], l = [], c = [], u = function(e, o) {
o.forEach(function(o) {
n.componentMap.has(o) || Bt(t, o), e.push(o);
});
};
e.forEach(function(e) {
if (ut in e) {
var o = e, i = o[ut], r = o[ht];
if ("Not" === i) u(l, r); else if ("Or" === i) u(c, r); else {
if ("And" !== i) throw new Error("Nested combinator ".concat(i, " not supported yet - use simple queries for best performance"));
u(a, r);
}
} else n.componentMap.has(e) || Bt(t, e), a.push(e);
});
var h = r.map(function(t) {
return n.componentMap.get(t);
}), m = p([], d(new Set(h.map(function(t) {
return t.generationId;
}))), !1), _ = function(t, e) {
return t[e.generationId] = (t[e.generationId] || 0) | e.bitflag, t;
}, f = a.map(function(t) {
return n.componentMap.get(t);
}).reduce(_, {}), y = l.map(function(t) {
return n.componentMap.get(t);
}).reduce(_, {}), v = c.map(function(t) {
return n.componentMap.get(t);
}).reduce(_, {}), g = h.reduce(_, {}), A = Object.assign(o.buffered ? M() : T(), {
allComponents: r,
orComponents: c,
notComponents: l,
masks: f,
notMasks: y,
orMasks: v,
hasMasks: g,
generations: m,
toRemove: T(),
addObservable: I(),
removeObservable: I(),
queues: {}
});
n.queries.add(A), n.queriesHashMap.set(i, A), h.forEach(function(t) {
t.queries.add(A);
}), l.length && n.notQueries.add(A);
for (var x = n.entityIndex, b = 0; b < x.aliveCount; b++) {
var C = x.dense[b];
Tt(t, C, ee) || xt(t, A, C) && bt(A, C);
}
return A;
};
function gt(t, e, o) {
void 0 === o && (o = {});
var n = t[B], i = yt(t, e), r = n.queriesHashMap.get(i);
return r ? o.buffered && !("buffer" in r.dense) && (r = vt(t, e, {
buffered: !0
})) : r = vt(t, e, o), o.buffered, r.dense;
}
function At(t, e) {
for (var o, n, i = [], r = 2; r < arguments.length; r++) i[r - 2] = arguments[r];
var s = e.find(function(t) {
return t && "object" == typeof t && dt in t;
}), a = e.filter(function(t) {
return !(t && "object" == typeof t && dt in t);
}), l = !1, c = !0, u = i.some(function(t) {
return t && "object" == typeof t && _t in t;
});
try {
for (var m = h(i), _ = m.next(); !_.done; _ = m.next()) {
var f = _.value;
if (u && f && "object" == typeof f && _t in f) {
var y = f;
"buffer" === y[_t] && (l = !0), "nested" === y[_t] && (c = !1);
} else if (!u) {
var v = f;
void 0 !== v.buffered && (l = v.buffered), void 0 !== v.commit && (c = v.commit);
}
}
} catch (t) {
o = {
error: t
};
} finally {
try {
_ && !_.done && (n = m.return) && n.call(m);
} finally {
if (o) throw o.error;
}
}
if (s) {
var g = s, A = g[pt], x = g[mt];
return void 0 !== x ? function(t, e, o, n) {
void 0 === n && (n = {});
var i = tt(t, e);
ct(t, e);
var r = i.depthToEntities.get(o);
return r ? (n.buffered, r.dense) : n.buffered ? new Uint32Array(0) : [];
}(t, A, x, {
buffered: l
}) : function(t, e, o, n) {
void 0 === n && (n = {});
var i = t[B];
tt(t, e);
var r = yt(t, p([ e ], d(o), !1)), s = i.hierarchyQueryCache.get(e);
if (s && s.hash === r) return s.result;
ct(t, e), gt(t, o, n);
var a = i.queriesHashMap.get(yt(t, o)), l = i.hierarchyData.get(e).depths;
a.sort(function(t, e) {
var o = l[t], n = l[e];
return o !== n ? o - n : t - e;
});
var c = (n.buffered, a.dense);
return i.hierarchyQueryCache.set(e, {
hash: r,
result: c
}), c;
}(t, A, a, {
buffered: l
});
}
return c && wt(t), gt(t, a, {
buffered: l
});
}
function xt(t, e, o) {
for (var n = t[B], i = e.masks, r = e.notMasks, s = e.orMasks, a = e.generations, l = 0 === Object.keys(s).length, c = 0; c < a.length; c++) {
var u = a[c], h = i[u], d = r[u], p = s[u], m = n.entityMasks[u][o];
if (d && 0 != (m & d)) return !1;
if (h && (m & h) !== h) return !1;
p && 0 != (m & p) && (l = !0);
}
return l;
}
var bt = function(t, e) {
t.toRemove.remove(e), t.addObservable.notify(e), t.add(e);
}, Ct = function(t) {
for (var e = 0; e < t.toRemove.dense.length; e++) {
var o = t.toRemove.dense[e];
t.remove(o);
}
t.toRemove.reset();
}, wt = function(t) {
var e = t[B];
e.dirtyQueries.size && (e.dirtyQueries.forEach(Ct), e.dirtyQueries.clear());
}, St = function(t, e, o) {
var n = t[B];
e.has(o) && !e.toRemove.has(o) && (e.toRemove.add(o), n.dirtyQueries.add(e), e.removeObservable.notify(o));
}, Rt = function(t, e) {
var o = t[B], n = yt(t, e), i = o.queriesHashMap.get(n);
i && (o.queries.delete(i), o.queriesHashMap.delete(n));
}, Bt = function(t, e) {
if (!e) throw new Error("bitECS - Cannot register null or undefined component");
var o = t[B], n = new Set(), i = {
id: o.componentCount++,
generationId: o.entityMasks.length - 1,
bitflag: o.bitflag,
ref: e,
queries: n,
setObservable: I(),
getObservable: I()
};
return o.componentMap.set(e, i), o.bitflag *= 2, o.bitflag >= Math.pow(2, 31) && (o.bitflag = 1, 
o.entityMasks.push([])), i;
}, Tt = function(t, e, o) {
var n = t[B], i = n.componentMap.get(o);
if (!i) return !1;
var r = i.generationId, s = i.bitflag;
return (n.entityMasks[r][e] & s) === s;
}, Ft = function(t, e, o) {
var n = t[B].componentMap.get(o);
if (n && Tt(t, e, o)) return n.getObservable.notify(e);
}, Mt = function(t, e, o, n, i) {
var r, s, a, l;
if (void 0 === i && (i = new Set()), !i.has(n)) {
i.add(n), It(e, o, U(n));
try {
for (var c = h(ne(e, n)), u = c.next(); !u.done; u = c.next()) {
var d = u.value;
if (d !== ee && !Tt(e, o, d)) {
It(e, o, d);
var p = t.componentMap.get(d);
if (null == p ? void 0 : p.setObservable) {
var m = Ft(e, n, d);
p.setObservable.notify(o, m);
}
}
}
} catch (t) {
r = {
error: t
};
} finally {
try {
u && !u.done && (s = c.return) && s.call(c);
} finally {
if (r) throw r.error;
}
}
try {
for (var _ = h(j(e, n, U)), f = _.next(); !f.done; f = _.next()) {
var y = f.value;
Mt(t, e, o, y, i);
}
} catch (t) {
a = {
error: t
};
} finally {
try {
f && !f.done && (l = _.return) && l.call(_);
} finally {
if (a) throw a.error;
}
}
}
}, It = function(t, e, o) {
var n, i;
if (!ie(t, e)) throw new Error("Cannot add component - entity ".concat(e, " does not exist in the world."));
var r = t[B], s = "component" in o ? o.component : o, a = "data" in o ? o.data : void 0;
r.componentMap.has(s) || Bt(t, s);
var l = r.componentMap.get(s);
if (Tt(t, e, s)) return void 0 !== a && l.setObservable.notify(e, a), !1;
var c = l.generationId, u = l.bitflag, d = l.queries;
if (r.entityMasks[c][e] |= u, Tt(t, e, ee) || d.forEach(function(o) {
o.toRemove.remove(e), xt(t, o, e) ? bt(o, e) : St(t, o, e);
}), r.entityComponents.get(e).add(s), void 0 !== a && l.setObservable.notify(e, a), 
s[P]) {
var p = s[D], m = s[N];
if (Dt(t, e, z(p, H), z(H, m)), "number" == typeof m) {
var _ = m;
Dt(t, _, z(H, e), z(H, p)), r.entitiesWithRelations.add(_), r.entitiesWithRelations.add(e);
}
r.entitiesWithRelations.add(m);
var f = p[E];
if (!0 === f.exclusiveRelation && m !== H) {
var y = j(t, e, p)[0];
null != y && y !== m && te(t, e, p(y));
}
if (p === U) {
var v = j(t, e, U);
try {
for (var g = h(v), A = g.next(); !A.done; A = g.next()) {
var x = A.value;
Mt(r, t, e, x);
}
} catch (t) {
n = {
error: t
};
} finally {
try {
A && !A.done && (i = g.return) && i.call(g);
} finally {
if (n) throw n.error;
}
}
}
st(t, p, e, "number" == typeof m ? m : void 0), f.onAdd && "number" == typeof m && f.onAdd(e, m);
}
return !0;
};
function Dt(t, e) {
for (var o = [], n = 2; n < arguments.length; n++) o[n - 2] = arguments[n];
(Array.isArray(o[0]) ? o[0] : o).forEach(function(o) {
It(t, e, o);
});
}
var Nt, Pt, Et, Lt, Wt, Vt, Ot, kt, Gt, zt, jt, qt, Ht, Ut, Yt, Xt, Jt, Qt, Kt, Zt, $t, te = function(t, e) {
for (var o = [], n = 2; n < arguments.length; n++) o[n - 2] = arguments[n];
var i = t[B];
if (!ie(t, e)) throw new Error("Cannot remove component - entity ".concat(e, " does not exist in the world."));
o.forEach(function(o) {
if (Tt(t, e, o)) {
var n = i.componentMap.get(o), r = n.generationId, s = n.bitflag, a = n.queries;
if (i.entityMasks[r][e] &= ~s, a.forEach(function(o) {
o.toRemove.remove(e), xt(t, o, e) ? bt(o, e) : St(t, o, e);
}), i.entityComponents.get(e).delete(o), o[P]) {
var l = o[N], c = o[D];
if (at(t, c, e), te(t, e, z(H, l)), "number" == typeof l) {
var u = l;
ie(t, u) && (te(t, u, z(H, e)), te(t, u, z(H, c)));
}
0 === j(t, e, c).length && te(t, e, z(c, H));
var h = c[E];
h.onRemove && "number" == typeof l && h.onRemove(e, l);
}
}
});
}, ee = {}, oe = function(t, e) {
var o = t[B];
if (R(o.entityIndex, e)) for (var n = [ e ], i = new Set(), r = function() {
var e, r, s, a, l, c, u, m, _, f, y = n.shift();
if (i.has(y)) return "continue";
i.add(y);
var v = [];
if (o.entitiesWithRelations.has(y)) {
var g = function(e) {
var i, r;
if (!ie(t, e)) return "continue";
var s = function(o) {
if (!o[P]) return "continue";
var i = o[D][E];
v.push(function() {
return te(t, e, z(H, y));
}), o[N] === y && (v.push(function() {
return te(t, e, o);
}), i.autoRemoveSubject && n.push(e), i.onTargetRemoved && v.push(function() {
return i.onTargetRemoved(e, y);
}));
};
try {
for (var a = (i = void 0, h(o.entityComponents.get(e))), l = a.next(); !l.done; l = a.next()) s(l.value);
} catch (t) {
i = {
error: t
};
} finally {
try {
l && !l.done && (r = a.return) && r.call(a);
} finally {
if (i) throw i.error;
}
}
};
try {
for (var A = (e = void 0, h(At(t, [ H(y) ], ft))), x = A.next(); !x.done; x = A.next()) g(x.value);
} catch (t) {
e = {
error: t
};
} finally {
try {
x && !x.done && (r = A.return) && r.call(A);
} finally {
if (e) throw e.error;
}
}
o.entitiesWithRelations.delete(y);
}
try {
for (var b = (s = void 0, h(v)), C = b.next(); !C.done; C = b.next()) (0, C.value)();
} catch (t) {
s = {
error: t
};
} finally {
try {
C && !C.done && (a = b.return) && a.call(b);
} finally {
if (s) throw s.error;
}
}
try {
for (var w = (l = void 0, h(n)), S = w.next(); !S.done; S = w.next()) {
var R = S.value;
oe(t, R);
}
} catch (t) {
l = {
error: t
};
} finally {
try {
S && !S.done && (c = w.return) && c.call(w);
} finally {
if (l) throw l.error;
}
}
try {
for (var B = (u = void 0, h(o.queries)), T = B.next(); !T.done; T = B.next()) {
var F = T.value;
St(t, F, y);
}
} catch (t) {
u = {
error: t
};
} finally {
try {
T && !T.done && (m = B.return) && m.call(B);
} finally {
if (u) throw u.error;
}
}
var M = o.entityComponents.get(y);
if (M) {
var I = [];
try {
for (var L = (_ = void 0, h(M)), W = L.next(); !W.done; W = L.next()) {
var V = W.value;
V[P] && I.push(V);
}
} catch (t) {
_ = {
error: t
};
} finally {
try {
W && !W.done && (f = L.return) && f.call(L);
} finally {
if (_) throw _.error;
}
}
I.length > 0 && te.apply(void 0, p([ t, y ], d(I), !1));
}
!function(t, e) {
var o = t.sparse[e];
if (!(void 0 === o || o >= t.aliveCount)) {
var n = t.aliveCount - 1, i = t.dense[n];
if (t.sparse[i] = o, t.dense[o] = i, t.sparse[e] = n, t.dense[n] = e, t.versioning) {
var r = function(t, e) {
var o = function(t, e) {
return e >>> t.versionShift & (1 << t.versionBits) - 1;
}(t, e) + 1 & (1 << t.versionBits) - 1;
return e & t.entityMask | o << t.versionShift;
}(t, e);
t.dense[n] = r;
}
t.aliveCount--;
}
}(o.entityIndex, y), o.entityComponents.delete(y);
for (var O = 0; O < o.entityMasks.length; O++) o.entityMasks[O][y] = 0;
}; n.length > 0; ) r();
}, ne = function(t, e) {
var o = t[B];
if (void 0 === e) throw new Error("getEntityComponents: entity id is undefined.");
if (!R(o.entityIndex, e)) throw new Error("getEntityComponents: entity ".concat(e, " does not exist in the world."));
return Array.from(o.entityComponents.get(e));
}, ie = function(t, e) {
return R(t[B].entityIndex, e);
};
t.RouteMode = void 0, (Pt = t.RouteMode || (t.RouteMode = {})).Direct = "direct", 
Pt.Broadcast = "broadcast", t.ReceiveAction = void 0, (Et = t.ReceiveAction || (t.ReceiveAction = {})).Queue = "queue", 
Et.Replace = "replace", Et.Discard = "discard", t.DispatchAction = void 0, (Lt = t.DispatchAction || (t.DispatchAction = {})).FireOnce = "fireOnce", 
Lt.Defer = "defer", Lt.Cancel = "cancel", t.FilterAction = void 0, (Wt = t.FilterAction || (t.FilterAction = {})).FireOnce = "fireOnce", 
Wt.FireRepeat = "fireRepeat", Wt.Defer = "defer", Wt.Cancel = "cancel", t.RoutePhase = void 0, 
(Vt = t.RoutePhase || (t.RoutePhase = {}))[Vt.Receive = 1] = "Receive", Vt[Vt.Transform = 2] = "Transform", 
Vt[Vt.Dispatch = 3] = "Dispatch", Vt[Vt.Filter = 4] = "Filter", (Nt = {})[t.RoutePhase.Receive] = "receiveAction", 
Nt[t.RoutePhase.Transform] = "transformedEidList", Nt[t.RoutePhase.Dispatch] = "dispatchAction", 
Nt[t.RoutePhase.Filter] = "filterAction";
var re = {
getBindValue: function(t) {
return t.atomState;
}
};
function se(t, e) {
if ("function" != typeof t.atomState) throw new TypeError('[AtomEngine] 原子 "'.concat(t.atomName, '" 的函数实现不可调用'));
return t.atomState.apply(t, p([], d(e), !1));
}
function ae(t) {
var e;
return (null === (e = t.variantChain) || void 0 === e ? void 0 : e.resolve()) || t;
}
var le = ((Ot = {}).EntityDomainAtom = {
getBindValue: function(t, e, o) {
return e.isComponentQuery(o) ? Object.create(t, {
collect: {
value: t.collectByComponent.bind(t)
},
has: {
value: t.hasByComponent.bind(t)
},
count: {
value: t.countByComponent.bind(t)
}
}) : t;
}
}, Ot.EntityRelationAtom = {
getBindValue: function(t) {
return t;
}
}, Ot.FunctionAtom = {
getBindValue: function(t) {
return function() {
for (var e = [], o = 0; o < arguments.length; o++) e[o] = arguments[o];
return se(ae(t), e);
};
}
}, Ot.SignalAtom = {
getBindValue: function(t) {
return t;
}
}, Ot.AudioAtom = {
getBindValue: function(t) {
return t;
}
}, Ot.WorldInputAtom = {
getBindValue: function(t) {
return t;
}
}, Ot.DomainExtensionAtom = {
getBindValue: function(t) {
return t;
}
}, Ot);
function ce(t, e) {
var o, n;
void 0 === e && (e = {});
var i = le[t];
return {
getBindValue: null !== (n = null !== (o = e.getBindValue) && void 0 !== o ? o : null == i ? void 0 : i.getBindValue) && void 0 !== n ? n : re.getBindValue
};
}
var ue = ((kt = {}).RenderAtom = ((Gt = {}).EntityDomainAtom = ce("EntityDomainAtom"), 
Gt.DomainExtensionAtom = ce("DomainExtensionAtom"), Gt.LogicAtom = ce("LogicAtom"), 
Gt.LoadAtom = ce("LoadAtom"), Gt.RenderAtom = ce("RenderAtom"), Gt.ConfigAtom = ce("ConfigAtom"), 
Gt.SignalRouterAtom = ce("SignalRouterAtom"), Gt.InputAtom = ce("InputAtom"), Gt.FunctionAtom = ce("FunctionAtom"), 
Gt.EntityRelationAtom = ce("EntityRelationAtom"), Gt), kt.SignalAtom = ((zt = {}).EntityDomainAtom = ce("EntityDomainAtom"), 
zt), kt.SignalRouterAtom = ((jt = {}).SignalAtom = ce("SignalAtom"), jt.InputAtom = ce("InputAtom"), 
jt.WorldInputAtom = ce("WorldInputAtom"), jt), kt.LogicAtom = ((qt = {}).NativeAtom = ce("NativeAtom"), 
qt.LogicAtom = ce("LogicAtom"), qt.OutputAtom = ce("OutputAtom"), qt.LoadAtom = ce("LoadAtom"), 
qt.InputAtom = ce("InputAtom"), qt.FunctionAtom = ce("FunctionAtom"), qt.ConfigAtom = ce("ConfigAtom"), 
qt.WorldAtom = ce("WorldAtom"), qt.RenderAtom = ce("RenderAtom"), qt.SignalAtom = ce("SignalAtom"), 
qt.SignalRouterAtom = ce("SignalRouterAtom"), qt.WorldInputAtom = ce("WorldInputAtom"), 
qt.EntityDomainAtom = ce("EntityDomainAtom"), qt.EntityRelationAtom = ce("EntityRelationAtom"), 
qt.DomainExtensionAtom = ce("DomainExtensionAtom"), qt.AudioAtom = ce("AudioAtom"), 
qt), kt.ConfigAtom = ((Ht = {}).ConfigAtom = ce("ConfigAtom"), Ht), kt.EntityDomainAtom = ((Ut = {}).EntityComponentAtom = ce("EntityComponentAtom"), 
Ut.EntityDomainAtom = ce("EntityDomainAtom"), Ut.EntityRelationAtom = ce("EntityRelationAtom"), 
Ut), kt.DomainExtensionAtom = ((Yt = {}).EntityDomainAtom = ce("EntityDomainAtom"), 
Yt.EntityComponentAtom = ce("EntityComponentAtom"), Yt), kt.FunctionAtom = ((Xt = {}).NativeAtom = ce("NativeAtom"), 
Xt.LogicAtom = ce("LogicAtom"), Xt.OutputAtom = ce("OutputAtom"), Xt.LoadAtom = ce("LoadAtom"), 
Xt.InputAtom = ce("InputAtom"), Xt.FunctionAtom = ce("FunctionAtom"), Xt.ConfigAtom = ce("ConfigAtom"), 
Xt.WorldAtom = ce("WorldAtom"), Xt.RenderAtom = ce("RenderAtom"), Xt.SignalRouterAtom = ce("SignalRouterAtom"), 
Xt.WorldInputAtom = ce("WorldInputAtom"), Xt.EntityDomainAtom = ce("EntityDomainAtom"), 
Xt.EntityRelationAtom = ce("EntityRelationAtom"), Xt.DomainExtensionAtom = ce("DomainExtensionAtom"), 
Xt.AudioAtom = ce("AudioAtom"), Xt), kt.VariantAtom = ((Jt = {}).NativeAtom = ce("NativeAtom"), 
Jt.LogicAtom = ce("LogicAtom"), Jt.OutputAtom = ce("OutputAtom"), Jt.LoadAtom = ce("LoadAtom"), 
Jt.InputAtom = ce("InputAtom"), Jt.FunctionAtom = {
getBindValue: function(t, e, o) {
var n = t;
return o && (null == e ? void 0 : e.isVariantSource(o)) ? function() {
for (var t = [], e = 0; e < arguments.length; e++) t[e] = arguments[e];
return se(n, t);
} : function() {
for (var t = [], e = 0; e < arguments.length; e++) t[e] = arguments[e];
return se(ae(n), t);
};
}
}, Jt.ConfigAtom = ce("ConfigAtom"), Jt.WorldAtom = ce("WorldAtom"), Jt.RenderAtom = ce("RenderAtom"), 
Jt.SignalAtom = ce("SignalAtom"), Jt.SignalRouterAtom = ce("SignalRouterAtom"), 
Jt.WorldInputAtom = ce("WorldInputAtom"), Jt.EntityDomainAtom = ce("EntityDomainAtom"), 
Jt.EntityRelationAtom = ce("EntityRelationAtom"), Jt.DomainExtensionAtom = ce("DomainExtensionAtom"), 
Jt.AudioAtom = ce("AudioAtom"), Jt), kt.InputAtom = ((Qt = {}).EntityDomainAtom = ce("EntityDomainAtom"), 
Qt), kt.WorldInputAtom = ((Kt = {}).EntityDomainAtom = ce("EntityDomainAtom"), Kt), 
kt.OrderAtom = ((Zt = {}).OrderAtom = ce("OrderAtom"), Zt.LogicAtom = ce("LogicAtom"), 
Zt.RenderAtom = ce("RenderAtom"), Zt.VariantAtom = ce("VariantAtom"), Zt.SignalRouterAtom = ce("SignalRouterAtom"), 
Zt), kt.LoadAtom = (($t = {}).ConfigAtom = ce("ConfigAtom"), $t.LogicAtom = ce("LogicAtom"), 
$t.LoadAtom = ce("LoadAtom"), $t.FunctionAtom = ce("FunctionAtom"), $t), kt.WorldAtom = {}, 
kt.EntityComponentAtom = {}, kt.EntityRelationAtom = {}, kt.OutputAtom = {}, kt), he = {
getBindValue: function(t, e, o) {
var n = t.atomWorld.getAtomIns(e), i = ue[t.atomType][n.atomType].getBindValue(n, t, o);
return i[ye] || w(i, ye, n.atomName), i[ve] || w(i, ve, n.atomType), i;
},
canBind: function(t, e) {
var o;
return Boolean(null === (o = ue[t]) || void 0 === o ? void 0 : o[e]);
}
}, de = new Map();
function pe(t) {
var e;
return null !== (e = t.__atomName) && void 0 !== e ? e : t.name;
}
var me = function(t, e) {
de.set(t, e);
};
me("SignalAtom", function(t) {
var e = t.filterDepsByType("EntityDomainAtom");
1 !== e.length && y(i.DomainBindingRequired, {
atom: t.atomName,
reason: "当前绑定数量: ".concat(e.length, "，需要恰好 1 个")
});
}), me("SignalRouterAtom", function(t) {
var e = t.getRouteFromAtomName(), o = t.getRouteToAtomName();
e && o || y(i.RouteEndpointRequired, {
atom: t.atomName,
routeFrom: null != e ? e : "未标记",
routeTo: null != o ? o : "未标记"
});
}), me("OrderAtom", function(t) {
var e = t.getOrderBeforeAtomName(), o = t.getOrderAfterAtomName();
e && o || y(i.OrderTargetRequired, {
atom: t.atomName,
orderBefore: null != e ? e : "未标记",
orderAfter: null != o ? o : "未标记"
});
}), me("DomainExtensionAtom", function(t) {
var e = t.constructor, o = e.__bindingMeta;
if (o) if (o.attachToProperty) {
var n = o.propToAtom.get(o.attachToProperty);
if (n) {
var r = t.getDepAtomType(n);
"EntityDomainAtom" !== r && y(i.DomainTargetInvalid, {
class: pe(e),
decorator: "@attachTo",
actual: r
});
}
} else y(i.AttachToRequired, {
atom: t.atomName
});
});
var _e, fe, ye = Symbol.for("atomengine.atomName"), ve = Symbol.for("atomengine.atomType"), ge = Symbol.for("atomengine.inheritableAtom"), Ae = function() {
function t() {
this.atomType = this.constructor.atomType, this.atomWorld = null, this.atomName = null, 
this._isReady = !1;
}
return Object.defineProperty(t, "atomType", {
get: function() {
return null;
},
enumerable: !1,
configurable: !0
}), t.prototype.getDependencies = function() {
return this.constructor.__dependencies;
}, t.prototype.getFeatureName = function() {
return this.constructor.__atomFeatureName;
}, t.prototype.getDepAtomType = function(t) {
return this.atomWorld.getAtomType(t);
}, t.prototype.findDepByType = function(t) {
var e = this;
return this.getDependencies().find(function(o) {
return e.atomWorld.getAtomType(o) === t;
});
}, t.prototype.filterDepsByType = function(t) {
var e = this;
return this.getDependencies().filter(function(o) {
return e.atomWorld.getAtomType(o) === t;
});
}, t.prototype.isDepType = function(t, e) {
return this.atomWorld.getAtomType(t) === e;
}, t.prototype.isComponentQuery = function(t) {
var e, o, n;
return null !== (n = null === (o = null === (e = this.constructor.__bindingMeta) || void 0 === e ? void 0 : e.componentQueryProps) || void 0 === o ? void 0 : o.has(t)) && void 0 !== n && n;
}, t.prototype.isVariantSource = function(t) {
var e;
return (null === (e = this.constructor.__bindingMeta) || void 0 === e ? void 0 : e.variantSourceProperty) === t;
}, t.prototype.getBoundAtomName = function(t) {
var e;
return null === (e = this.constructor.__bindingMeta) || void 0 === e ? void 0 : e.propToAtom.get(t);
}, t.prototype.ready = function() {
if (!this._isReady) {
this._isReady = !0;
for (var t = this.getDependencies(), e = 0; e < t.length; e++) {
var o = this.atomWorld.getAtomIns(t[e]).ready();
if (o) return this._readyAsync(o, t, e + 1);
}
return this.onReady();
}
}, t.prototype._readyAsync = function(t, e, o) {
return c(this, void 0, void 0, function() {
var n, i, r;
return u(this, function(s) {
switch (s.label) {
case 0:
return [ 4, t ];

case 1:
if (s.sent(), !this.atomWorld) return [ 2 ];
n = o, s.label = 2;

case 2:
return n < e.length ? (i = this.atomWorld.getAtomIns(e[n]).ready()) ? [ 4, i ] : [ 3, 4 ] : [ 3, 5 ];

case 3:
if (s.sent(), !this.atomWorld) return [ 2 ];
s.label = 4;

case 4:
return n++, [ 3, 2 ];

case 5:
return (r = this.onReady()) ? [ 4, r ] : [ 3, 7 ];

case 6:
s.sent(), s.label = 7;

case 7:
return [ 2 ];
}
});
});
}, t.prototype.onReady = function() {}, t.prototype.collectLoad = function() {}, 
t.prototype.registerToChain = function() {
return null;
}, t.prototype.unregisterFromChain = function() {
return !1;
}, t.prototype.getChain = function() {
return null;
}, t.prototype.getTopologicalChain = function() {
return null;
}, t.prototype.init = function(t, e) {
var o, n;
this.atomName = t, this.atomWorld = e, no(this);
try {
for (var i = h(this.getDependencies()), r = i.next(); !r.done; r = i.next()) {
var s = r.value;
this.atomWorld._createAtom(s, t);
}
} catch (t) {
o = {
error: t
};
} finally {
try {
r && !r.done && (n = i.return) && n.call(i);
} finally {
if (o) throw o.error;
}
}
this.collectLoad();
}, t.prototype.dispose = function() {
this.atomState = null, this.atomWorld = null;
}, t;
}(), xe = function() {
function t(t) {
this.atoms = [], this.constraints = new Map(), this.needsSorting = !0, this.sortedCache = null, 
this.instanceCache = null, this._atomWorld = t;
}
return t.prototype.hasAtoms = function() {
return this.atoms.length > 0;
}, t.prototype.addAtom = function(t) {
this.atoms.includes(t) || (this.atoms.push(t), this.markDirty(), this.onAtomRegistered(t));
}, t.prototype.removeAtom = function(t) {
var e, o, n = this.atoms.indexOf(t);
-1 !== n && (this.atoms.splice(n, 1), this.markDirty(), this.onAtomUnregistered(t)), 
this.constraints.delete(t);
try {
for (var i = h(this.constraints.values()), r = i.next(); !r.done; r = i.next()) r.value.delete(t);
} catch (t) {
e = {
error: t
};
} finally {
try {
r && !r.done && (o = i.return) && o.call(i);
} finally {
if (e) throw e.error;
}
}
return 0 === this.atoms.length;
}, t.prototype.onAtomRegistered = function() {}, t.prototype.onAtomUnregistered = function() {}, 
t.prototype.addConstraint = function(t, e) {
var o, n;
if (null === (o = this.constraints.get(e)) || void 0 === o ? void 0 : o.has(t)) y(i.PriorityConstraintDuplicate, {
higher: t,
lower: e
}); else {
(null === (n = this.constraints.get(t)) || void 0 === n ? void 0 : n.has(e)) && y(i.TopologicalConflict, {
higher: t,
lower: e,
reason: "已存在 ".concat(e, " -> ").concat(t, "，尝试添加 ").concat(t, " -> ").concat(e)
});
var r = this.constraints.get(e);
r || (r = new Set(), this.constraints.set(e, r)), r.add(t), this.markDirty();
}
}, t.prototype.removeConstraint = function(t, e) {
var o = this.constraints.get(e);
o && (o.delete(t), 0 === o.size && this.constraints.delete(e)), this.markDirty();
}, t.prototype.markDirty = function() {
this.needsSorting = !0, this.instanceCache = null;
}, t.prototype.getInstances = function() {
var t = this;
return this.needsSorting && (this.sortedCache = this.topologicalSort(), this.needsSorting = !1, 
this.instanceCache = null), this.instanceCache || (this.instanceCache = this.sortedCache.map(function(e) {
return t._atomWorld.atomInstanceMap.get(e);
})), this.instanceCache;
}, t.prototype.compareAtoms = function(t, e) {
return t.localeCompare(e);
}, t.prototype.topologicalSort = function() {
var t, e, o, n, r, s, a, l, c, u, m, _, f, v, g, A, x = this.atoms, b = new Set(x);
if (x.length <= 1) return p([], d(x), !1);
var C = new Map(), w = new Map();
try {
for (var S = h(x), R = S.next(); !R.done; R = S.next()) {
var B = R.value;
C.set(B, []), w.set(B, 0);
}
} catch (e) {
t = {
error: e
};
} finally {
try {
R && !R.done && (e = S.return) && e.call(S);
} finally {
if (t) throw t.error;
}
}
try {
for (var T = h(x), F = T.next(); !F.done; F = T.next()) {
var M = F.value, I = this.getExtraDependencies(M);
try {
for (var D = (r = void 0, h(I)), N = D.next(); !N.done; N = D.next()) {
var P = N.value;
b.has(P) && (C.get(P).push(M), w.set(M, w.get(M) + 1));
}
} catch (t) {
r = {
error: t
};
} finally {
try {
N && !N.done && (s = D.return) && s.call(D);
} finally {
if (r) throw r.error;
}
}
}
} catch (t) {
o = {
error: t
};
} finally {
try {
F && !F.done && (n = T.return) && n.call(T);
} finally {
if (o) throw o.error;
}
}
try {
for (var E = h(x), L = E.next(); !L.done; L = E.next()) {
M = L.value;
var W = this.constraints.get(M);
if (W) try {
for (var V = (c = void 0, h(W)), O = V.next(); !O.done; O = V.next()) {
var k = O.value;
b.has(k) && (C.get(k).push(M), w.set(M, w.get(M) + 1));
}
} catch (t) {
c = {
error: t
};
} finally {
try {
O && !O.done && (u = V.return) && u.call(V);
} finally {
if (c) throw c.error;
}
}
}
} catch (t) {
a = {
error: t
};
} finally {
try {
L && !L.done && (l = E.return) && l.call(E);
} finally {
if (a) throw a.error;
}
}
var G = new Set(), z = [];
try {
for (var j = h(x), q = j.next(); !q.done; q = j.next()) {
var H = q.value;
0 === w.get(H) && G.add(H);
}
} catch (t) {
m = {
error: t
};
} finally {
try {
q && !q.done && (_ = j.return) && _.call(j);
} finally {
if (m) throw m.error;
}
}
for (;G.size > 0; ) {
var U = null;
try {
for (var Y = (f = void 0, h(G)), X = Y.next(); !X.done; X = Y.next()) {
var J = X.value;
(!U || this.compareAtoms(J, U) < 0) && (U = J);
}
} catch (t) {
f = {
error: t
};
} finally {
try {
X && !X.done && (v = Y.return) && v.call(Y);
} finally {
if (f) throw f.error;
}
}
G.delete(U), z.push(U);
try {
for (var Q = (g = void 0, h(C.get(U))), K = Q.next(); !K.done; K = Q.next()) {
var Z = K.value, $ = w.get(Z) - 1;
w.set(Z, $), 0 === $ && G.add(Z);
}
} catch (t) {
g = {
error: t
};
} finally {
try {
K && !K.done && (A = Q.return) && A.call(Q);
} finally {
if (g) throw g.error;
}
}
}
if (z.length !== x.length) {
var tt = x.filter(function(t) {
return !z.includes(t);
});
y(i.TopologicalCycle, {
nodes: tt.join(", ")
});
}
return z;
}, t;
}(), be = function(t) {
function e(e, o) {
var n = t.call(this, e) || this;
return n._ownerAtomName = o, n;
}
return o(e, t), e.prototype.getExtraDependencies = function() {
return [];
}, e.prototype.execute = function(t) {
return c(this, void 0, void 0, function() {
var e, o, n, i, r, s, a, l, c, d, p, m, _, f, y;
return u(this, function(u) {
switch (u.label) {
case 0:
u.trys.push([ 0, 7, 8, 9 ]), e = h(this.getInstances()), o = e.next(), u.label = 1;

case 1:
return o.done ? [ 3, 6 ] : (c = o.value, (n = c.ready()) ? [ 4, n ] : [ 3, 3 ]);

case 2:
u.sent(), u.label = 3;

case 3:
return (i = this._readyVariantChain(c.variantChain)) ? [ 4, i ] : [ 3, 5 ];

case 4:
u.sent(), u.label = 5;

case 5:
return o = e.next(), [ 3, 1 ];

case 6:
return [ 3, 9 ];

case 7:
return r = u.sent(), p = {
error: r
}, [ 3, 9 ];

case 8:
try {
o && !o.done && (m = e.return) && m.call(e);
} finally {
if (p) throw p.error;
}
return [ 7 ];

case 9:
s = null != t ? t : this._atomWorld.rootEid, this._atomWorld.currentGenChainOwner = this._ownerAtomName;
try {
for (a = h(this.getInstances()), l = a.next(); !l.done; l = a.next()) c = l.value, 
(d = null === (y = c.variantChain) || void 0 === y ? void 0 : y.resolve()) ? d.atomState(s, c.atomState) : c.onExecute(s, c.atomState);
} catch (t) {
_ = {
error: t
};
} finally {
try {
l && !l.done && (f = a.return) && f.call(a);
} finally {
if (_) throw _.error;
}
}
return this._atomWorld.currentGenChainOwner = null, [ 2 ];
}
});
});
}, e.prototype._readyVariantChain = function(t) {
if (t) for (var e = t.getInstances(), o = 0; o < e.length; o++) {
var n = e[o].ready();
if (n) return this._readyVariantChainAsync(n, e, o + 1);
}
}, e.prototype._readyVariantChainAsync = function(t, e, o) {
return c(this, void 0, void 0, function() {
var n, i;
return u(this, function(r) {
switch (r.label) {
case 0:
return [ 4, t ];

case 1:
r.sent(), n = o, r.label = 2;

case 2:
return n < e.length ? (i = e[n].ready()) ? [ 4, i ] : [ 3, 4 ] : [ 3, 5 ];

case 3:
r.sent(), r.label = 4;

case 4:
return n++, [ 3, 2 ];

case 5:
return [ 2 ];
}
});
});
}, e.prototype.topologicalSort = function() {
var e = t.prototype.topologicalSort.call(this);
return e.length, e;
}, e;
}(xe), Ce = globalThis, we = Ce.__errorHandler;
function Se(t, e, o, n) {
var i, r, s, a, l;
if (we) {
var c;
if (n.includes("atomengine") && (c = Ce.__atomEngineCurrentWorld)) {
var u = null !== (i = Ce.__atomEngineCurrentRenderAtom) && void 0 !== i ? i : "-";
o = "[AtomEngine logic=".concat(null !== (r = c.currentExecutingLogicAtom) && void 0 !== r ? r : "-", " domain=").concat(null !== (s = c.currentSignalEntityDomain) && void 0 !== s ? s : "-", " genChainOwner=").concat(null !== (a = c.currentGenChainOwner) && void 0 !== a ? a : "-", " renderAtom=").concat(u, " worldId=").concat(c.config.worldId, " worldPath=").concat(c.config.worldPath, " featuresVersion=").concat(null !== (l = c.appliedFeaturesVersion) && void 0 !== l ? l : "-", "] ").concat(o);
}
we(t, e, o, n);
}
}
function Re(t) {
var e = Ce.__atomEngineCurrentWorld;
return Ce.__atomEngineCurrentWorld = t, e;
}
function Be(t) {
Ce.__atomEngineCurrentWorld === t && (Ce.__atomEngineCurrentWorld = void 0);
}
function Te(t) {
Ce.__atomEngineCurrentRenderAtom = t;
}
Object.defineProperty(Ce, "__errorHandler", {
configurable: !0,
get: function() {
return Se;
},
set: function(t) {
we = t;
}
});
var Fe, Me = new Map(), Ie = new Map(), De = new Set([ "FunctionAtom", "ConfigAtom", "EntityDomainAtom", "EntityComponentAtom", "EntityRelationAtom", "AudioAtom", "WorldAtom", "DomainExtensionAtom" ]);
function Ne(t) {
return t.__bindingMeta || (t.__bindingMeta = {
propToAtom: new Map(),
entityRenderer: null,
componentQueryProps: null,
routeFromProperty: null,
routeToProperty: null,
routeMode: null,
orderBeforeProperty: null,
orderAfterProperty: null,
chainRegistration: null,
variantSourceProperty: null,
chainWritableProperties: null,
signalPhase: null,
routePhase: null,
attachToProperty: null,
entityDataProperty: null
}), t.__bindingMeta;
}
function Pe(t, e) {
var o = Me.get(t);
if (!o) {
var n = Oe(t), r = e ? Oe(e) : void 0, s = Ce.__atomEngineCurrentWorld, a = function(t) {
var e, o;
return void 0 === t ? "unknown" : String(null !== (o = null === (e = null == s ? void 0 : s.loadedFeatureNames) || void 0 === e ? void 0 : e.has(t)) && void 0 !== o ? o : "unknown");
};
y(i.AtomClassNotRegistered, {
atom: t,
requestedBy: e,
targetFeatureLoaded: a(n),
requesterFeatureLoaded: a(r),
worldId: null == s ? void 0 : s.config.worldId,
featuresVersion: null == s ? void 0 : s.appliedFeaturesVersion
});
}
return o;
}
if ("undefined" != typeof performance && "function" == typeof performance.now) Fe = function() {
return performance.now();
}; else {
var Ee = Date.now(), Le = 0;
Fe = function() {
var t = Date.now() - Ee;
return t >= Le && (Le = t), Le;
};
}
var We = Fe;
function Ve(t) {
var e = t.lastIndexOf("_");
return -1 === e ? (y(i.AtomNameInvalid, {
atom: t,
reason: "缺少下划线分隔符"
}), t) : t.substring(0, e);
}
function Oe(t) {
var e = t.lastIndexOf("_");
return -1 === e ? void 0 : t.substring(0, e);
}
function ke(t, e) {
De.has(t.atomType) || function(t, e) {
var o = t.__atomFeatureName, n = Ie.get(o);
n ? n.push(e) : Ie.set(o, [ e ]);
}(t, e);
}
function Ge(t) {
t.__dependencies || (t.__dependencies = []);
}
function ze(t, e) {
Ge(t), t.__dependencies.includes(e) || t.__dependencies.push(e);
}
function je(t) {
return function(e) {
return Ge(e), e.__atomName = t, e.__atomFeatureName = Ve(t), ke(e, t), Me.set(t, e), 
e;
};
}
function qe(t) {
return function(e, o) {
var n = e.constructor, i = Ne(n);
ze(n, t), i.propToAtom.set(o, t), Object.defineProperty(e, o, {
get: function() {
var e = he.getBindValue(this, t, o);
return Object.defineProperty(this, o, {
value: e,
writable: !1,
enumerable: !1,
configurable: !1
}), e;
},
set: function() {},
enumerable: !1,
configurable: !0
});
};
}
function He(t, e) {
var o, n = Ne(t.constructor);
(null !== (o = n.componentQueryProps) && void 0 !== o ? o : n.componentQueryProps = new Set()).add(e);
}
function Ue(t, e) {
Ne(t.constructor).entityRenderer = e;
}
function Ye(t, e) {
Ne(t.constructor).chainRegistration = {
ownerProperty: e,
chainType: null,
chainField: null,
chainCtor: null
};
}
function Xe(e) {
Ne(e.constructor).routePhase = t.RoutePhase.Receive;
}
function Je(t, e) {
Ne(t.constructor).routeFromProperty = e;
}
function Qe(t) {
return function(e, o) {
var n = Ne(e.constructor);
n.routeToProperty = o, n.routeMode = t;
};
}
function Ke(t, e) {
return function(t, o) {
var n = Ne(t.constructor);
e(n, o);
};
}
var Ze = Ke(0, function(t, e) {
return t.orderBeforeProperty = e;
}), $e = Ke(0, function(t, e) {
return t.orderAfterProperty = e;
}), to = {
start: {
chainType: "SignalStart",
chainField: "beginChain"
},
trigger: {
chainType: "SignalTrigger",
chainField: "triggerChain"
},
end: {
chainType: "SignalEnd",
chainField: "endChain"
}
}, eo = ((_e = {})[t.RoutePhase.Receive] = {
chainType: "RouteReceive",
chainField: "receiveChain"
}, _e[t.RoutePhase.Transform] = {
chainType: "RouteTransform",
chainField: "transformChain"
}, _e[t.RoutePhase.Dispatch] = {
chainType: "RouteDispatch",
chainField: "dispatchChain"
}, _e[t.RoutePhase.Filter] = {
chainType: "RouteFilter",
chainField: "filterChain"
}, _e), oo = ((fe = {}).ConfigAtom = {
chainType: "ConfigGen",
chainField: "genChain"
}, fe.RenderAtom = {
chainType: "RenderGen",
chainField: "genChain"
}, fe);
function no(t) {
var e, o, n = t.constructor, r = n.__bindingMeta;
if (r) {
var s = pe(n), a = r.chainRegistration;
if (a && null === a.chainType) {
var l = r.propToAtom.get(a.ownerProperty);
if (l) {
var c = t.getDepAtomType(l);
if ("SignalAtom" === c) {
var u = null !== (e = r.signalPhase) && void 0 !== e ? e : "trigger", h = to[u];
a.chainType = h.chainType, a.chainField = h.chainField, a.chainCtor = null;
} else if ("SignalRouterAtom" === c) {
if (!(u = r.routePhase)) return void y(i.RoutePhaseRequired, {
class: s,
property: a.ownerProperty,
target: l
});
h = eo[u], a.chainType = h.chainType, a.chainField = h.chainField, a.chainCtor = null;
} else {
if (!(h = oo[c])) return void y(i.OnChainTargetNotChainable, {
class: s,
target: l,
actual: null != c ? c : "类未注册（检查模块是否被 import/加载执行）"
});
a.chainType = h.chainType, a.chainField = h.chainField, a.chainCtor = be, (null !== (o = r.chainWritableProperties) && void 0 !== o ? o : r.chainWritableProperties = new Set()).add(a.ownerProperty);
}
}
}
}
}
var io, ro = "G_FAtom_RootDomain", so = "G_FAtom_WorldDomain", ao = "G_FAtom_Update", lo = "G_FAtom_Pointer", co = "G_FAtom_Keyboard", uo = "G_FAtom_WindowSize", ho = "G_FAtom_CanvasResize", po = "G_FAtom_Scroll", mo = "G_FAtom_SizeInput", _o = "G_FAtom_PositionInput", fo = "G_FAtom_Edit", yo = "G_FAtom_Animation", vo = "G_FAtom_WorldCreate", go = "G_FAtom_WorldLoadProgress", Ao = "G_FAtom_PageHide", xo = "G_FAtom_PageShow", bo = "G_FAtom_RealTime", Co = "G_FAtom_SaveProgress", wo = "G_FAtom_AutoSaveSignal", So = "G_FAtom_AutoSaveRouter", Ro = "G_FAtom_TweenRunnerSignal", Bo = "G_FAtom_TweenRunner", To = "G_FAtom_ChildOf", Fo = "G_FAtom_Transform", Mo = "G_FAtom_BoxComponent", Io = "G_FAtom_WorldState", Do = "G_FAtom_DomainOf", No = "G_FAtom_Physics2DBody", Po = "G_FAtom_Physics2DCollider", Eo = "G_FAtom_Physics2DDomain", Lo = "G_FAtom_Physics2DRunner", Wo = "G_FAtom_Physics2DRunnerSignal", Vo = "G_FAtom_Physics2DBeforeStepSignal", Oo = "G_FAtom_Physics2DBeforeStepRouter", ko = "G_FAtom_Physics2DBeginContact", Go = "G_FAtom_Physics2DEndContact", zo = "G_FAtom_Physics2DPreSolve", jo = "G_FAtom_Physics2DPostSolve", qo = "G_FAtom_StopTween", Ho = "G_FAtom_OriginalCtrlInput", Uo = "G_FAtom_AlgorithmOfferResult", Yo = "G_FAtom_NetworkResult", Xo = "G_FAtom_NetworkPush", Jo = "G_FAtom_ReloadConfigInput", Qo = "G_FAtom_Silent", Ko = "G_FAtom_JsonData", Zo = "G_FAtom_BinData", $o = "G_FAtom_PreButtonClick", tn = "G_FAtom_PreTouchStart", en = "G_FAtom_PreTouchEnd", on = "G_FAtom_RichTextClick", nn = "createFailed", rn = function() {
function t(t) {
this._bundleTotal = 0, this._bundleCompleted = 0, this._atomTotal = null, this._atomCompleted = 0, 
this._error = null, this._cancelled = !1, this._lastNotified = 0, this._world = t;
}
return Object.defineProperty(t.prototype, "progress", {
get: function() {
return .3 * (this._bundleTotal > 0 ? this._bundleCompleted / this._bundleTotal : 1) + .7 * (null === this._atomTotal ? 0 : this._atomTotal > 0 ? this._atomCompleted / this._atomTotal : 1);
},
enumerable: !1,
configurable: !0
}), Object.defineProperty(t.prototype, "isDone", {
get: function() {
return this._bundleCompleted >= this._bundleTotal && null !== this._atomTotal && this._atomCompleted >= this._atomTotal && !this._error && !this._cancelled;
},
enumerable: !1,
configurable: !0
}), Object.defineProperty(t.prototype, "completed", {
get: function() {
return this._bundleCompleted + this._atomCompleted;
},
enumerable: !1,
configurable: !0
}), t.prototype.addBundleItems = function(t) {
void 0 === t && (t = 1), this._bundleTotal += t;
}, t.prototype.completeBundle = function(t) {
void 0 === t && (t = 1), this._bundleCompleted += t, this._tryNotify();
}, t.prototype.addItems = function(t) {
var e;
void 0 === t && (t = 1), this._atomTotal = (null !== (e = this._atomTotal) && void 0 !== e ? e : 0) + t;
}, t.prototype.startAtomPhase = function() {
var t;
null !== (t = this._atomTotal) && void 0 !== t || (this._atomTotal = 0), this._tryNotify();
}, t.prototype.complete = function(t) {
void 0 === t && (t = 1), this._atomCompleted += t, this._tryNotify();
}, t.prototype.fail = function(t) {
var e;
this._error = t;
var o = this._world.config;
null === (e = o.onLoadError) || void 0 === e || e.call(o, t), this._world.universe.host.reportGameRuntime({
g0_original_info: {
type: nn,
worldId: this._world.config.worldId,
errorMsg: t instanceof Error ? t.message : String(t)
}
}), this._notifyParent(!1, t);
var n = o.parentWorld, i = o.entityInParent;
if (n && !n.disposed && i) {
var r = n.getAtomIns(so);
r.has(i) && r.destroy(i);
}
}, t.prototype._tryNotify = function() {
if (!this._error && !this._cancelled) {
var t = this.progress;
(this.isDone || t - this._lastNotified >= .02 || t >= 1) && (this._lastNotified = t, 
this._notifyProgress());
}
}, t.prototype._notifyProgress = function() {
var t, e = this._world.config;
e.parentWorld, null === (t = e.onLoadProgress) || void 0 === t || t.call(e, this.progress, this.completed), 
this._notifyParent(this.isDone);
}, t.prototype._notifyParent = function(t, e, o) {
var n, i = this._world.config, r = i.parentWorld, s = i.entityInParent;
if (r && s && !r.disposed) {
var a = r.getAtomIns(go);
a.data.worldId = this._world.config.worldId, a.data.progress = t ? 1 : this.progress, 
a.data.isDone = t, a.data.isCancelled = null != o && o, a.data.error = null !== (n = null == e ? void 0 : e.message) && void 0 !== n ? n : "", 
this._world.universe.host.notifyWorldLoadState(r.config.worldId, a.data), r.getAtomIns(so).has(s) && a.emit(s);
}
}, t.prototype.cancel = function() {
this.isDone || this._error || this._cancelled || (this._cancelled = !0, this._world.universe.host.reportGameRuntime({
g0_original_info: {
type: nn,
worldId: this._world.config.worldId,
errorMsg: "cancel"
}
}), this._notifyParent(!1, void 0, !0));
}, t;
}();
function sn(t, e) {
return t ? t + "\0" + e : e;
}
function an(t) {
var e = t.indexOf("\0");
return -1 === e ? {
storageScope: null,
atomName: t
} : {
storageScope: t.slice(0, e),
atomName: t.slice(e + 1)
};
}
function ln(t, e) {
return t ? "ae_copy_storage_".concat(t, "_").concat(e) : "ae_storage_".concat(e);
}
function cn(t, e) {
return t ? "ae_copy_json_".concat(t, "_").concat(e) : "ae_json_".concat(e);
}
t.G_FAtom = void 0, ((io = t.G_FAtom || (t.G_FAtom = {})).FeatureName || (io.FeatureName = {})).Name = "G_FAtom";
var un, hn = function() {
function t(t) {
this.universe = t, this.saveMirrorMap = new Map(), this.hostItemMirrorMap = new Map();
}
return t.prototype.readRawItem = function(t) {
return this.getItem(t);
}, t.prototype.writeRawItem = function(t, e) {
this.setItem(t, e);
}, t.prototype.saveStorage = function(t, e, o, n) {
void 0 === o && (o = null), void 0 === n && (n = !0), this.setItem(ln(o, t), JSON.stringify(e)), 
n && this.saveMirror(t, e, o), this.hostItemMirror(t, e, o);
}, t.prototype.saveMirror = function(t, e, o) {
var n, i, r, s = this._activeMirrorEntry(null === (r = this.saveMirrorMap.get(t)) || void 0 === r ? void 0 : r.get(o));
if (s) try {
var a = s.onMirror(e);
try {
for (var l = h(Object.keys(a)), c = l.next(); !c.done; c = l.next()) {
var u = c.value;
if (this.universe.storageKeys.has(u)) {
var d = JSON.stringify(a[u]);
void 0 !== d && this.writeRawItem(u, d);
}
}
} catch (t) {
n = {
error: t
};
} finally {
try {
c && !c.done && (i = l.return) && i.call(l);
} finally {
if (n) throw n.error;
}
}
} catch (e) {}
}, t.prototype.hostItemMirror = function(t, e, o) {
var n, i, r, s = this._activeMirrorEntry(null === (r = this.hostItemMirrorMap.get(t)) || void 0 === r ? void 0 : r.get(o));
if (s) try {
var a = s.onMirror(e);
try {
for (var l = h(Object.keys(a)), c = l.next(); !c.done; c = l.next()) {
var u = c.value;
this.universe.storageKeys.has(u) && this.universe.host.setHostStorageItem(u, a[u]);
}
} catch (t) {
n = {
error: t
};
} finally {
try {
c && !c.done && (i = l.return) && i.call(l);
} finally {
if (n) throw n.error;
}
}
} catch (e) {}
}, t.prototype._activeMirrorEntry = function(t) {
var e, o;
if (t && 0 !== t.size) {
var n;
try {
for (var i = h(t.values()), r = i.next(); !r.done; r = i.next()) n = r.value;
} catch (t) {
e = {
error: t
};
} finally {
try {
r && !r.done && (o = i.return) && o.call(i);
} finally {
if (e) throw e.error;
}
}
return n;
}
}, t.prototype.loadStorage = function(t, e) {
void 0 === e && (e = null);
var o = this.getItem(ln(e, t));
return o ? JSON.parse(o) : null;
}, t.prototype.registerSaveMirror = function(t, e, o) {
this._registerMirror(this.saveMirrorMap, t, e, o);
}, t.prototype.registerHostItemMirror = function(t, e, o) {
this._registerMirror(this.hostItemMirrorMap, t, e, o);
}, t.prototype._registerMirror = function(t, e, o, n) {
var i = t.get(o);
i || (i = new Map(), t.set(o, i));
var r = i.get(e.storageScope);
r || (r = new Map(), i.set(e.storageScope, r)), r.delete(e), r.set(e, {
onMirror: n
});
}, t.prototype.removeMirrorsForWorld = function(t) {
this._removeFromMirrorMap(this.saveMirrorMap, t), this._removeFromMirrorMap(this.hostItemMirrorMap, t);
}, t.prototype._removeFromMirrorMap = function(t, e) {
var o, n, i, r;
try {
for (var s = h(t), a = s.next(); !a.done; a = s.next()) {
var l = d(a.value, 2), c = l[0], u = l[1];
try {
for (var p = (i = void 0, h(u)), m = p.next(); !m.done; m = p.next()) {
var _ = d(m.value, 2), f = _[0], y = _[1];
y.delete(e) && 0 === y.size && u.delete(f);
}
} catch (t) {
i = {
error: t
};
} finally {
try {
m && !m.done && (r = p.return) && r.call(p);
} finally {
if (i) throw i.error;
}
}
0 === u.size && t.delete(c);
}
} catch (t) {
o = {
error: t
};
} finally {
try {
a && !a.done && (n = s.return) && n.call(s);
} finally {
if (o) throw o.error;
}
}
}, t.prototype.clearStorage = function() {
this.clear();
}, t.prototype.saveJsonEntry = function(t, e, o) {
void 0 === o && (o = null), this.setItem(cn(o, t), JSON.stringify(e));
}, t.prototype.loadJsonEntry = function(t, e) {
void 0 === e && (e = null);
var o = this.getItem(cn(e, t));
return o ? JSON.parse(o) : null;
}, t.prototype.removeJsonEntry = function(t, e) {
void 0 === e && (e = null), this.removeItem(cn(e, t));
}, t;
}();
!function(t) {
t[t.RenderCreate = 0] = "RenderCreate", t[t.RenderDestroy = 1] = "RenderDestroy", 
t[t.RelationAdd = 2] = "RelationAdd", t[t.RelationRemove = 3] = "RelationRemove", 
t[t.WorldCreate = 4] = "WorldCreate", t[t.WorldDestroy = 5] = "WorldDestroy", t[t.WorldRestart = 6] = "WorldRestart";
}(un || (un = {}));
var dn, pn, mn, _n, fn, yn, vn, gn, An, xn, bn = function() {
function e(t) {
this.universe = null, this.config = {
worldId: "",
worldPath: "",
randomSeed: 0,
parentWorld: null,
entityInParent: 0,
initialWidth: 0,
initialHeight: 0,
multiTouch: !1
}, this.isPaused = !1, this.disposed = !1, this.isDownloadOnly = !1, this._creationOrder = [], 
this.frameTimeIncrement = 1 / 60, this.performanceCutoff = 1, this.minimumUpdateInterval = 1 / 60, 
this.renderTimeScale = 1, this._childWorlds = new Map(), this.atomSnapshots = {}, 
this.pendingRouterSignals = [], this.randomSeed = 0, this.ecsWorld = function() {
for (var t, e, o = [], n = 0; n < arguments.length; n++) o[n] = arguments[n];
return o.forEach(function(o) {
"object" == typeof o && "dense" in o && "sparse" in o && "aliveCount" in o ? t = o : "object" == typeof o && (e = o);
}), function(t, e) {
return w(t || {}, B, {
entityIndex: e || S(),
entityMasks: [ [] ],
entityComponents: new Map(),
bitflag: 1,
componentMap: new Map(),
componentCount: 0,
queries: new Set(),
queriesHashMap: new Map(),
notQueries: new Set(),
dirtyQueries: new Set(),
entitiesWithRelations: new Set(),
hierarchyData: new Map(),
hierarchyActiveRelations: new Set(),
hierarchyQueryCache: new Map()
});
}(e, t);
}(), this.ready = !1, this.autoResizeBox = !1, this.accumulatedTimeParameter = 0, 
this.atomInstanceMap = new Map(), this.signalRouters = new Map(), this.dirtyEntityComponents = new Map(), 
this.domainToLogicMap = new Map(), this.storageAtoms = new Set(), this.copyRootWorld = null, 
this.storageScope = null, this.allowRawMirrorWrite = !0, this.dirtyStorageAtoms = new Set(), 
this._shouldSaveProgress = !1, this.expandedEntityDirtyAtomsCache = null, this.prevMultiTouch = void 0, 
this.worldChanges = [], this.pendingInputs = [], this.pendingReadyAtoms = [], this.currentSignalEntityDomain = null, 
this.currentExecutingLogicAtom = null, this.currentGenChainOwner = null, this.universe = t;
}
return e.prototype.isSignalEntityDomain = function(t) {
return this.currentSignalEntityDomain === t;
}, e.prototype.initFromConfig = function(t) {
this.config = r({}, t), this.config.randomSeed = t.randomSeed || Math.floor(2147483646 * Math.random()) + 1, 
this._resolveStorageScope();
}, e.prototype._resolveStorageScope = function() {
var t, e, o = null !== (e = null === (t = this.config.parentWorld) || void 0 === t ? void 0 : t.copyRootWorld) && void 0 !== e ? e : null;
if (o) return this.copyRootWorld = o, this.storageScope = o.storageScope, void (this.allowRawMirrorWrite = o.allowRawMirrorWrite);
if (this.universe.featureResolver.isInvalidCopyWorld(this.config.worldId)) y(i.CopyWorldConfigConflict, {
worldId: this.config.worldId,
reason: "副本根配置冲突 / 校验失败，拒绝按普通世界创建，避免覆盖原版存档"
}, {
action: "throw"
}); else {
var n = this.universe.featureResolver.getCopyWorld(this.config.worldId);
if (n) return this.copyRootWorld = this, this.storageScope = n.storageNamespace, 
void (this.allowRawMirrorWrite = !0 === n.allowRawMirrorWrite);
this.copyRootWorld = null, this.storageScope = null, this.allowRawMirrorWrite = !0;
}
}, e.prototype.getStorageSlotKey = function(t) {
return sn(this.storageScope, t);
}, e.prototype._computeTimeSteps = function(t, e, o) {
if ((t += o) < e) return [ 0, t ];
var n = Math.min(Math.floor(t / e), this.performanceCutoff), i = t - n * e;
return [ n, Math.min(i, this.minimumUpdateInterval) ];
}, e.prototype.worldUpdate = function(t) {
var e = -1 === t ? this.frameTimeIncrement : t, o = d(this._computeTimeSteps(this.accumulatedTimeParameter, this.frameTimeIncrement, e), 2), n = o[0], i = o[1];
this.accumulatedTimeParameter = i;
for (var r = 0; r < n; r++) this.updateSignal.emit(), this._processAllSignals();
this._shouldSaveProgress && (this._shouldSaveProgress = !1, this.universe.saveAllStorage(this.dirtyStorageAtoms), 
this.dirtyStorageAtoms.clear());
}, e.prototype.markSaveProgress = function() {
this._shouldSaveProgress = !0;
}, e.prototype.markEntityComponentDirty = function(t, e) {
var o = this.dirtyEntityComponents.get(t);
o || (o = new Set(), this.dirtyEntityComponents.set(t, o)), o.add(e);
}, e.prototype.markStorageDirty = function(t) {
this.storageAtoms.has(t) && this.dirtyStorageAtoms.add(this.getStorageSlotKey(t));
}, e.prototype.expandEntityDirtyAtoms = function(t) {
var e, o, n, i;
if (this.expandedEntityDirtyAtomsCache) return this.expandedEntityDirtyAtomsCache;
var r = new Map(), s = function(t) {
var e = r.get(t);
return e || (e = new Set(), r.set(t, e)), e;
};
try {
for (var a = h(this.dirtyEntityComponents), l = a.next(); !l.done; l = a.next()) {
var c = d(l.value, 2), u = c[0], p = c[1], m = s(u);
try {
for (var _ = (n = void 0, h(p)), f = _.next(); !f.done; f = _.next()) {
var y = f.value;
m.add(y);
}
} catch (t) {
n = {
error: t
};
} finally {
try {
f && !f.done && (i = _.return) && i.call(_);
} finally {
if (n) throw n.error;
}
}
}
} catch (t) {
e = {
error: t
};
} finally {
try {
l && !l.done && (o = a.return) && o.call(a);
} finally {
if (e) throw e.error;
}
}
return this.expandedEntityDirtyAtomsCache = r, r;
}, e.prototype.markRelationChange = function(t, e, o, n) {
if ("number" != typeof e || "number" != typeof o) throw new Error("[AtomEngine] markRelationChange: invalid eid | relation=".concat(t, " | source=").concat(String(e), " | target=").concat(String(o), " | isAdd=").concat(n));
this.worldChanges.push({
type: n ? un.RelationAdd : un.RelationRemove,
relationName: t,
source: e,
target: o
});
}, e.prototype.markRenderCreate = function(t, e) {
this.worldChanges.push({
type: un.RenderCreate,
eid: t,
domainName: e
});
}, e.prototype.markRenderDestroy = function(t) {
this.worldChanges.push({
type: un.RenderDestroy,
eid: t
});
}, e.prototype.markWorldCreate = function(t) {
this.worldChanges.push({
type: un.WorldCreate,
eid: t
});
}, e.prototype.markWorldDestroy = function(t) {
this.worldChanges.push({
type: un.WorldDestroy,
eid: t
});
}, e.prototype.markWorldRestart = function(t) {
this.worldChanges.push({
type: un.WorldRestart,
eid: t
});
}, e.prototype.stopTween = function(t) {
this.hasAtomIns(qo) && this.getAtomIns(qo).atomState(t);
}, e.prototype.getAtomData = function(t, e) {
var o = this.atomInstanceMap.get(t);
return "EntityDomainAtom" === e ? o : null == o ? void 0 : o.atomState;
}, e.prototype.hasAtomIns = function(t) {
return this.atomInstanceMap.has(t);
}, e.prototype.getAtomIns = function(t) {
var e = this.atomInstanceMap.get(t);
return e || y(i.AtomInstanceNotFound, {
atom: t
}), e;
}, e.prototype.getAtomType = function(t) {
var e = Me.get(t);
if (e) return e.atomType;
y(i.AtomTypeQueryFailed, {
atom: t
});
}, e.prototype._processAllSignals = function() {
for (;this.pendingInputs.length > 0; ) {
var t = this.pendingInputs.shift(), e = this.getAtomIns(t.signalName);
Object.assign(e.atomState, t.inputData), e.trigger(t.eidList);
}
var o = this.pendingRouterSignals;
for (this.pendingRouterSignals = []; o.length > 0; ) (t = o.shift()).fromRouterName ? this.getAtomIns(t.fromRouterName).handleSignal(t) : (e = this.getAtomIns(t.signalName)).trigger(t.eidList);
}, e.prototype.pushInput = function(t, e, o) {
this.pendingInputs.push({
signalName: t.atomName,
eidList: [ e ],
fromRouterName: null,
inputData: o
});
}, e.prototype.registerFeatures = function(t) {
this.loadTracker = new rn(this);
var e = this.universe.featureResolver;
this.isDownloadOnly = e.isDownloadOnlyWorld(this.config.worldId), this.isDownloadOnly && !this.config.parentWorld && y(i.DownloadOnlyRootWorld, {
worldId: this.config.worldId
}), e.hasFeatures(this.config.worldId) || y(i.WorldFeaturesEmpty, r({
worldId: this.config.worldId
}, e.getWorldFeaturesDebugParams(this.config.worldId))), this._loadAndInitPromise = this._loadAndInit(t);
}, e.prototype._triggerSilentPreloads = function() {
var t, e, o = this.universe.featureResolver.getFeatureSet(this.config.worldId), n = [];
try {
for (var i = h(o), r = i.next(); !r.done; r = i.next()) {
var s = d(r.value, 2), a = s[0];
s[1].silent && n.push(a);
}
} catch (e) {
t = {
error: e
};
} finally {
try {
r && !r.done && (e = i.return) && e.call(i);
} finally {
if (t) throw t.error;
}
}
0 !== n.length && this.universe.asset.preloadFeatures(n).catch(function() {});
}, e.prototype._loadAndInit = function(e) {
return c(this, void 0, void 0, function() {
var o, n, i, r, s, a, l, c, p, m, _, f, y, v, g, A, x, b, C, w, S, R, B, T, F, M, I, D, N, P = this;
return u(this, function(u) {
switch (u.label) {
case 0:
o = this.universe.featureResolver, n = this.config.worldId, i = o.getFeatureSet(n), 
u.label = 1;

case 1:
return u.trys.push([ 1, 5, , 6 ]), Re(this), [ 4, this.universe.asset.ensureSessionPlan(n) ];

case 2:
if (u.sent(), this.disposed) return [ 2 ];
Re(this), r = new Map();
try {
for (s = h(i), a = s.next(); !a.done; a = s.next()) l = d(a.value, 2), c = l[0], 
(!(p = l[1]).silent || this.universe.asset.isResourcesDownloaded(c)) && r.set(c, p);
} catch (t) {
R = {
error: t
};
} finally {
try {
a && !a.done && (B = s.return) && B.call(s);
} finally {
if (R) throw R.error;
}
}
return this.loadTracker.addBundleItems(r.size), [ 4, this.universe.asset.retainFeatures(r, function() {
P.loadTracker.completeBundle();
}) ];

case 3:
if (m = u.sent(), _ = this.universe.asset.getAppliedFeaturesVersion(m), this.appliedFeaturesVersion = _, 
void 0 !== _ && this.universe.host.track("g_game_applied_start", {
features_version: _
}), this.disposed) return [ 2 ];
Re(this);
try {
for (f = h([ Do, To ]), y = f.next(); !y.done; y = f.next()) w = y.value, this._createAtom(w, "核心原子");
} catch (t) {
T = {
error: t
};
} finally {
try {
y && !y.done && (F = f.return) && F.call(f);
} finally {
if (T) throw T.error;
}
}
m.add(t.G_FAtom.FeatureName.Name), this.loadedFeatureNames = m;
try {
for (v = h(m), g = v.next(); !g.done; g = v.next()) {
A = g.value, x = Ie.get(A) || [];
try {
for (D = void 0, b = h(x), C = b.next(); !C.done; C = b.next()) w = C.value, this._createAtom(w, "特性 ".concat(A));
} catch (t) {
D = {
error: t
};
} finally {
try {
C && !C.done && (N = b.return) && N.call(b);
} finally {
if (D) throw D.error;
}
}
}
} catch (t) {
M = {
error: t
};
} finally {
try {
g && !g.done && (I = v.return) && I.call(v);
} finally {
if (M) throw M.error;
}
}
return this.loadTracker.startAtomPhase(), [ 4, this._initAndStart(e) ];

case 4:
return u.sent(), Be(this), [ 3, 6 ];

case 5:
return S = u.sent(), this.loadTracker.fail(S), [ 3, 6 ];

case 6:
return [ 2 ];
}
});
});
}, e.prototype._initAndStart = function(t) {
return c(this, void 0, void 0, function() {
var e, o, n, i, r, s, a, l;
return u(this, function(c) {
switch (c.label) {
case 0:
c.trys.push([ 0, 9, , 10 ]), Re(this), 0 === this.randomSeed && (this.randomSeed = this.config.randomSeed), 
c.label = 1;

case 1:
c.trys.push([ 1, 6, 7, 8 ]), e = h(this.pendingReadyAtoms), o = e.next(), c.label = 2;

case 2:
return o.done ? [ 3, 5 ] : (n = o.value, (i = n.ready()) ? [ 4, i ] : [ 3, 4 ]);

case 3:
if (c.sent(), this.disposed) return [ 2 ];
Re(this), c.label = 4;

case 4:
return o = e.next(), [ 3, 2 ];

case 5:
return [ 3, 8 ];

case 6:
return r = c.sent(), a = {
error: r
}, [ 3, 8 ];

case 7:
try {
o && !o.done && (l = e.return) && l.call(e);
} finally {
if (a) throw a.error;
}
return [ 7 ];

case 8:
return this.pendingReadyAtoms = [], this.isDownloadOnly ? (this.universe.asset.markWorldDownloaded(this.config.worldId), 
this._autoDestroyDownloadOnly(), Be(this), [ 2 ]) : (this._start(), this.ready = !0, 
this.universe.asset.markWorldDownloaded(this.config.worldId), this._triggerSilentPreloads(), 
null == t || t(), Be(this), [ 3, 10 ]);

case 9:
return s = c.sent(), this.loadTracker.fail(s), [ 3, 10 ];

case 10:
return [ 2 ];
}
});
});
}, e.prototype._start = function() {
this.updateSignal = this.getAtomIns(ao), this.config.parentWorld && (this.prevMultiTouch = this.universe.render.setMultiTouch(this.config.multiTouch), 
this.universe.asset.downloadCtrl(.5));
var t = this.getAtomIns(ro);
this.rootEid = t.create();
var e = this.config, o = e.initialWidth, n = e.initialHeight;
if (o > 0 || n > 0) {
var i = this.getAtomIns(uo);
i.data.width = o, i.data.height = n;
}
var r = this.getAtomIns(vo);
r.data.appliedFeaturesVersion = this.appliedFeaturesVersion, r.emit(this.rootEid);
}, e.prototype._autoDestroyDownloadOnly = function() {
var t = this.config, e = t.parentWorld, o = t.entityInParent;
if (e && !e.disposed && o) {
var n = e.getAtomIns(so);
n.has(o) && n.destroy(o);
}
}, e.prototype._createAtom = function(t, e) {
if (!this.atomInstanceMap.has(t)) {
var o = new (Pe(t, e))();
this.atomInstanceMap.set(t, o), o.init(t, this), this.pendingReadyAtoms.push(o), 
this._creationOrder.push(t);
}
}, e.prototype.addChildWorld = function(t, e) {
this._childWorlds.set(t, e);
}, e.prototype.removeChildWorld = function(t) {
this._childWorlds.delete(t);
}, e.prototype.getChildWorld = function(t) {
return this._childWorlds.get(t);
}, e.prototype.forEachChildWorld = function(t) {
var e, o;
try {
for (var n = h(this._childWorlds.entries()), i = n.next(); !i.done; i = n.next()) {
var r = d(i.value, 2), s = r[0];
t(r[1], s);
}
} catch (t) {
e = {
error: t
};
} finally {
try {
i && !i.done && (o = n.return) && o.call(n);
} finally {
if (e) throw e.error;
}
}
}, e.prototype.resolveChildWorldConfig = function(t) {
var e = this.getAtomIns(so), o = e.worldState, n = o.worldId[t];
if (!n) return y(i.WorldEntityNoId, {
entity: String(t)
}), null;
var r = o.randomSeed[t] || Math.floor(2147483646 * Math.random()) + 1, s = o.multiTouch[t], a = o.physics2D[t];
return {
worldId: n,
worldPath: "".concat(this.config.worldPath, "/").concat(n),
randomSeed: r,
parentWorld: this,
entityInParent: t,
initialWidth: e.box.width[t],
initialHeight: e.box.height[t],
multiTouch: s,
physics2D: a ? JSON.parse(a) : void 0
};
}, e.prototype.dispose = function() {
var t, e, o, n, i, r, s, a, l, c = "开始销毁";
try {
if (c = "还原多点触摸状态", this.universe && this.config.parentWorld && this.universe.render.setMultiTouch(this.prevMultiTouch), 
c = "标记世界已销毁", this.disposed = !0, c = "取消未完成的加载", !this.ready && this.loadTracker && this.loadTracker.cancel(), 
this.universe) {
this.dirtyStorageAtoms.size > 0 && (c = "保存脏 storage 数据", this.universe.saveAllStorage(this.dirtyStorageAtoms)), 
c = "检查下载控制";
var u = !0;
this.universe.forEachWorld(function(t) {
t.disposed || !t.config.parentWorld || t.isDownloadOnly || (u = !1);
}), u && this.universe.asset.downloadCtrl(0), c = "读取世界特性";
var h = this.universe.featureResolver.getFeatureSet(this.config.worldId), m = p([], d(h.keys()), !1);
if (h.size > 0) {
c = "释放特性 [".concat(m.join(", "), "]");
var _ = this.universe.asset;
if (!this.ready && this._loadAndInitPromise) {
this.config.worldId;
this._loadAndInitPromise.finally(function() {
try {
_.releaseFeatures(h);
} catch (t) {}
});
} else _.releaseFeatures(h);
}
c = "清理渲染资源", this.universe.destroyWorldRender(this), c = "通知宿主世界销毁", this.universe.host.notifyWorldDestroy(this.config.worldId);
}
c = "摘除本世界的存档镜像", null === (t = this.universe) || void 0 === t || t.storage.removeMirrorsForWorld(this), 
c = "逆序销毁原子，共 ".concat(this._creationOrder.length, " 个");
for (var f = this._creationOrder.length - 1; f >= 0; f--) {
var y = this._creationOrder[f];
l = y, c = "销毁原子 ".concat(y, " (").concat(this._creationOrder.length - f, "/").concat(this._creationOrder.length, ")");
var v = this.atomInstanceMap.get(y);
v && (v.dispose(), this.atomInstanceMap.delete(y));
}
l = void 0, this._creationOrder = [], c = "断开外部引用", (null === (e = null == this ? void 0 : this.universe) || void 0 === e ? void 0 : e.host) && this.universe.host.clearAdRequestWorld(this), 
this.universe = null, this.config.parentWorld = null, this._childWorlds.clear(), 
c = "清理原子实例和路由缓存", this.atomInstanceMap.clear(), this.signalRouters.clear(), this.domainToLogicMap.clear(), 
this.storageAtoms.clear(), c = "清理运行时状态", this.dirtyStorageAtoms.clear(), this.dirtyEntityComponents.clear(), 
this.expandedEntityDirtyAtomsCache = null, this.worldChanges.length = 0, this.pendingInputs.length = 0, 
this.pendingReadyAtoms.length = 0, c = "清理运行时快照", this.atomSnapshots = {}, this.pendingRouterSignals.length = 0, 
this.randomSeed = 0, c = "清理 bitecs ECS World", delete this.ecsWorld[B];
} catch (t) {
if (t instanceof Error) {
var g = null !== (n = null === (o = this.config.parentWorld) || void 0 === o ? void 0 : o.config.worldId) && void 0 !== n ? n : "-", A = this.universe ? "alive" : "cleared", x = [ "worldId=".concat(this.config.worldId), "worldPath=".concat(this.config.worldPath), "stage=".concat(c), "disposingAtom=".concat(null != l ? l : "-"), "ready=".concat(this.ready), "disposed=".concat(this.disposed), "parentWorld=".concat(g), "entityInParent=".concat(this.config.entityInParent), "universe=".concat(A), "atoms=".concat(this.atomInstanceMap.size), "creationOrder=".concat(this._creationOrder.length), "currentLogic=".concat(null !== (i = this.currentExecutingLogicAtom) && void 0 !== i ? i : "-"), "currentDomain=".concat(null !== (r = this.currentSignalEntityDomain) && void 0 !== r ? r : "-"), "genChainOwner=".concat(null !== (s = this.currentGenChainOwner) && void 0 !== s ? s : "-") ].join(" ");
t.message = "[AtomEngine][销毁] 世界销毁失败: ".concat(x, " ---\x3e ").concat(t.message);
}
throw t;
} finally {
null === (a = this.universe) || void 0 === a || a.storage.removeMirrorsForWorld(this), 
Be(this);
}
}, e;
}();
function Cn(t, e) {
for (var o = [], n = 2; n < arguments.length; n++) o[n - 2] = arguments[n];
return {
type: t,
props: e,
children: o.length ? o : void 0
};
}
t.WidgetAlignMode = void 0, (dn = t.WidgetAlignMode || (t.WidgetAlignMode = {})).Once = "Once", 
dn.OnWindowResize = "OnWindowResize", dn.Always = "Always", t.LayoutResizeMode = void 0, 
(pn = t.LayoutResizeMode || (t.LayoutResizeMode = {})).None = "None", pn.Container = "Container", 
pn.Children = "Children", t.LayoutAxisDirection = void 0, (mn = t.LayoutAxisDirection || (t.LayoutAxisDirection = {})).Horizontal = "Horizontal", 
mn.Vertical = "Vertical", t.LayoutVerticalDirection = void 0, (_n = t.LayoutVerticalDirection || (t.LayoutVerticalDirection = {})).TopToBottom = "TopToBottom", 
_n.BottomToTop = "BottomToTop", t.LayoutHorizontalDirection = void 0, (fn = t.LayoutHorizontalDirection || (t.LayoutHorizontalDirection = {})).LeftToRight = "LeftToRight", 
fn.RightToLeft = "RightToLeft", t.ButtonTransition = void 0, (yn = t.ButtonTransition || (t.ButtonTransition = {})).None = "None", 
yn.Color = "Color", yn.Sprite = "Sprite", yn.Scale = "Scale", t.TextHorizontalAlign = void 0, 
(vn = t.TextHorizontalAlign || (t.TextHorizontalAlign = {}))[vn.LEFT = 0] = "LEFT", 
vn[vn.CENTER = 1] = "CENTER", vn[vn.RIGHT = 2] = "RIGHT", t.LabelCacheMode = void 0, 
(gn = t.LabelCacheMode || (t.LabelCacheMode = {}))[gn.NONE = 0] = "NONE", gn[gn.BITMAP = 1] = "BITMAP", 
gn[gn.CHAR = 2] = "CHAR", t.RenderNodeType = void 0, (An = t.RenderNodeType || (t.RenderNodeType = {})).Node = "Node", 
An.Sprite = "Sprite", An.Text = "Text", An.Spine = "Spine", An.Graphics = "Graphics", 
An.TraceGraphics = "TraceGraphics", An.Mask = "Mask", An.ScrollView = "ScrollView", 
An.Camera = "Camera", An.Streak = "Streak", An.Particle = "Particle", An.EditBox = "EditBox", 
An.Mesh = "Mesh", An.Texture2D = "Texture2D", An.RichText = "RichText", t.LayoutType = void 0, 
(xn = t.LayoutType || (t.LayoutType = {})).Horizontal = "Horizontal", xn.Vertical = "Vertical", 
xn.Grid = "Grid";
var wn, Sn, Rn, Bn = {
name: function(t, e) {
return t.setName(e);
},
cameraLayer: function(t, e) {
return t.setCameraLayer(e);
},
x: function(t, e) {
return t.setX(e);
},
y: function(t, e) {
return t.setY(e);
},
z: function(t, e) {
return t.setZ(e);
},
angle: function(t, e) {
return t.setAngle(e);
},
scale: function(t, e) {
return t.setScale(e);
},
quatX: function(t, e) {
return t.setQuatX(e);
},
quatY: function(t, e) {
return t.setQuatY(e);
},
quatZ: function(t, e) {
return t.setQuatZ(e);
},
quatW: function(t, e) {
return t.setQuatW(e);
},
scaleX: function(t, e) {
return t.setScaleX(e);
},
scaleY: function(t, e) {
return t.setScaleY(e);
},
scaleZ: function(t, e) {
return t.setScaleZ(e);
},
alpha: function(t, e) {
return t.setAlpha(e);
},
rgb: function(t, e) {
return t.setRgb(e);
},
active: function(t, e) {
return t.setActiveBase(e);
},
width: function(t, e) {
return t.setWidth(e);
},
height: function(t, e) {
return t.setHeight(e);
},
anchorX: function(t, e) {
return t.setAnchorX(e);
},
anchorY: function(t, e) {
return t.setAnchorY(e);
},
anchorZ: function(t, e) {
return t.setAnchorZ(e);
},
zIndex: function(t, e) {
return t.setZIndex(e);
},
depth: function(t, e) {
return t.setDepth(e);
},
event: {
buttonClick: function(t, e) {
return t.setButtonClick(e);
},
touchStart: function(t, e) {
return t.setOnTouchStart(e);
},
touchMove: function(t, e) {
return t.setOnTouchMove(e);
},
touchEnd: function(t, e) {
return t.setOnTouchEnd(e);
},
touchCancel: function(t, e) {
return t.setOnTouchCancel(e);
},
sizeChanged: function(t, e) {
return t.setOnSizeChanged(e);
},
positionChanged: function(t, e) {
return t.setOnPositionChanged(e);
}
},
eventOptions: {
touchStart: function(t, e) {
return t.setTouchStartOption(e);
},
touchMove: function(t, e) {
return t.setTouchMoveOption(e);
},
touchEnd: function(t, e) {
return t.setTouchEndOption(e);
},
touchCancel: function(t, e) {
return t.setTouchCancelOption(e);
}
},
blockInputEvents: function(t, e) {
return t.setBlockInputEvents(e);
},
widget: {
enabled: function(t, e) {
return t.setWidgetEnabled(e);
},
safeArea: function(t, e) {
return t.setSafeAreaEnabled(e);
},
isAlignTop: function(t, e) {
return t.setWidgetAlignTop(e);
},
isAlignBottom: function(t, e) {
return t.setWidgetAlignBottom(e);
},
isAlignLeft: function(t, e) {
return t.setWidgetAlignLeft(e);
},
isAlignRight: function(t, e) {
return t.setWidgetAlignRight(e);
},
isAlignHorizontalCenter: function(t, e) {
return t.setWidgetAlignHorizontalCenter(e);
},
isAlignVerticalCenter: function(t, e) {
return t.setWidgetAlignVerticalCenter(e);
},
isAbsoluteTop: function(t, e) {
return t.setWidgetAbsoluteTop(e);
},
isAbsoluteBottom: function(t, e) {
return t.setWidgetAbsoluteBottom(e);
},
isAbsoluteLeft: function(t, e) {
return t.setWidgetAbsoluteLeft(e);
},
isAbsoluteRight: function(t, e) {
return t.setWidgetAbsoluteRight(e);
},
isAbsoluteHorizontalCenter: function(t, e) {
return t.setWidgetAbsoluteHorizontalCenter(e);
},
isAbsoluteVerticalCenter: function(t, e) {
return t.setWidgetAbsoluteVerticalCenter(e);
},
top: function(t, e) {
return t.setWidgetTop(e);
},
bottom: function(t, e) {
return t.setWidgetBottom(e);
},
left: function(t, e) {
return t.setWidgetLeft(e);
},
right: function(t, e) {
return t.setWidgetRight(e);
},
horizontalCenter: function(t, e) {
return t.setWidgetHorizontalCenter(e);
},
verticalCenter: function(t, e) {
return t.setWidgetVerticalCenter(e);
},
alignMode: function(t, e) {
return t.setWidgetAlignMode(e);
}
},
layout: {
enabled: function(t, e) {
return t.setLayoutEnabled(e);
},
type: function(t, e) {
return t.setLayoutType(e);
},
resizeMode: function(t, e) {
return t.setLayoutResizeMode(e);
},
spacingX: function(t, e) {
return t.setLayoutSpacingX(e);
},
spacingY: function(t, e) {
return t.setLayoutSpacingY(e);
},
paddingLeft: function(t, e) {
return t.setLayoutPaddingLeft(e);
},
paddingRight: function(t, e) {
return t.setLayoutPaddingRight(e);
},
paddingTop: function(t, e) {
return t.setLayoutPaddingTop(e);
},
paddingBottom: function(t, e) {
return t.setLayoutPaddingBottom(e);
},
startAxis: function(t, e) {
return t.setLayoutStartAxis(e);
},
verticalDirection: function(t, e) {
return t.setLayoutVerticalDirection(e);
},
horizontalDirection: function(t, e) {
return t.setLayoutHorizontalDirection(e);
},
affectedByScale: function(t, e) {
return t.setLayoutAffectedByScale(e);
}
},
button: {
enabled: function(t, e) {
return t.setButtonEnabled(e);
},
interactable: function(t, e) {
return t.setButtonInteractable(e);
},
enableAutoGrayEffect: function(t, e) {
return t.setButtonEnableAutoGrayEffect(e);
},
transition: function(t, e) {
return t.setButtonTransition(e);
},
duration: function(t, e) {
return t.setButtonDuration(e);
},
zoomScale: function(t, e) {
return t.setButtonZoomScale(e);
},
normalColor: function(t, e) {
return t.setButtonNormalColor(e);
},
normalAlpha: function(t, e) {
return t.setButtonNormalAlpha(e);
},
pressedColor: function(t, e) {
return t.setButtonPressedColor(e);
},
pressedAlpha: function(t, e) {
return t.setButtonPressedAlpha(e);
},
hoverColor: function(t, e) {
return t.setButtonHoverColor(e);
},
hoverAlpha: function(t, e) {
return t.setButtonHoverAlpha(e);
},
disabledColor: function(t, e) {
return t.setButtonDisabledColor(e);
},
disabledAlpha: function(t, e) {
return t.setButtonDisabledAlpha(e);
},
normalSprite: function(t, e) {
return t.setButtonNormalSprite(e);
},
pressedSprite: function(t, e) {
return t.setButtonPressedSprite(e);
},
hoverSprite: function(t, e) {
return t.setButtonHoverSprite(e);
},
disabledSprite: function(t, e) {
return t.setButtonDisabledSprite(e);
},
target: function(t, e) {
return t.setButtonTarget(e);
}
},
material: function(t, e) {
return t.setMaterial(e);
}
}, Tn = function() {
function t(t) {
this.universe = t, this.root = null, this._lastPageHideTimeMs = 0, this.shouldRestoreContext = !1;
}
return t.prototype.getSafeAreaRect = function() {
var t = 1280 / 716, e = this.getWinSize(), o = this.universe.getRootWindowSize(), n = Math.max(e.width, e.height), i = Math.min(e.width, e.height), r = Math.max(o.width, o.height), s = Math.min(o.width, o.height);
if (!(i / n <= 760 / 1334 && (n / i > t || r / s > t))) return {
x: 0,
y: 0,
width: e.width,
height: e.height,
offset: 0
};
var a = .037 * Math.max(n, r);
return e.height >= e.width ? {
x: 0,
y: 0,
width: e.width,
height: e.height - a,
offset: a
} : {
x: a,
y: 0,
width: e.width - a,
height: e.height,
offset: a
};
}, t.prototype.onPageHide = function() {
this._lastPageHideTimeMs = Date.now(), this.universe.emitInputToAllWorlds(Ao, {}), 
this.universe.update(-1), this.universe.forceSaveAllStorage();
}, t.prototype.onPageShow = function() {
this.shouldRestoreContext && this.universe.onContextRestore();
var t = Date.now(), e = this._lastPageHideTimeMs > 0 ? Math.max(0, t - this._lastPageHideTimeMs) : 0;
this._lastPageHideTimeMs = 0, this.universe.emitInputToAllWorlds(xo, {
durationMs: e
});
}, t.prototype.onCanvasResize = function() {
this.universe.emitInputToAllWorlds(ho, {});
}, t;
}();
function Fn(e) {
switch (e) {
case t.PixelFormat.RGBA8888:
return 4;

case t.PixelFormat.RGB888:
return 3;

case t.PixelFormat.RGB565:
case t.PixelFormat.RGBA4444:
case t.PixelFormat.AI88:
return 2;

case t.PixelFormat.A8:
case t.PixelFormat.I8:
return 1;

default:
return 4;
}
}
t.PixelFormat = void 0, (wn = t.PixelFormat || (t.PixelFormat = {}))[wn.RGBA8888 = 0] = "RGBA8888", 
wn[wn.RGB888 = 1] = "RGB888", wn[wn.RGB565 = 2] = "RGB565", wn[wn.RGBA4444 = 3] = "RGBA4444", 
wn[wn.A8 = 4] = "A8", wn[wn.I8 = 5] = "I8", wn[wn.AI88 = 6] = "AI88", t.TextureFilter = void 0, 
(Sn = t.TextureFilter || (t.TextureFilter = {}))[Sn.Nearest = 0] = "Nearest", Sn[Sn.Linear = 1] = "Linear", 
t.TextureWrapMode = void 0, (Rn = t.TextureWrapMode || (t.TextureWrapMode = {}))[Rn.Repeat = 0] = "Repeat", 
Rn[Rn.ClampToEdge = 1] = "ClampToEdge", Rn[Rn.MirroredRepeat = 2] = "MirroredRepeat";
var Mn, In = {
texWidth: function(t, e) {
return t.setTexWidth(e);
},
texHeight: function(t, e) {
return t.setTexHeight(e);
},
format: function(t, e) {
return t.setFormat(e);
},
filterMin: function(t, e) {
return t.setFilterMin(e);
},
filterMag: function(t, e) {
return t.setFilterMag(e);
},
wrapS: function(t, e) {
return t.setWrapS(e);
},
wrapT: function(t, e) {
return t.setWrapT(e);
},
pixels: function(t, e) {
return t.setPixels(e);
}
};
t.CameraLayer = void 0, (Mn = t.CameraLayer || (t.CameraLayer = {}))[Mn.Host = 1] = "Host", 
Mn[Mn.Background = 2] = "Background", Mn[Mn.GameWorld = 4] = "GameWorld", Mn[Mn.UI = 8] = "UI", 
Mn[Mn.Gizmos = 16] = "Gizmos", Mn[Mn.Everything = 31] = "Everything";
var Dn, Nn, Pn = function() {
function e(e) {
if (this._mapping = new Map([ [ t.CameraLayer.UI, t.CameraLayer.UI ], [ t.CameraLayer.GameWorld, t.CameraLayer.GameWorld ], [ t.CameraLayer.Background, t.CameraLayer.Background ], [ t.CameraLayer.Gizmos, t.CameraLayer.Gizmos ], [ t.CameraLayer.Host, t.CameraLayer.Host ] ]), 
e) for (var o in e) {
var n = Number(o);
this._mapping.set(n, e[n]);
}
}
return e.prototype.getPhysicalIndex = function(t) {
var e, o = null !== (e = this._mapping.get(t)) && void 0 !== e ? e : t;
return Math.log2(o);
}, e.prototype.toPhysicalMask = function(t) {
var e, o, n = 0;
try {
for (var i = h(this._mapping), r = i.next(); !r.done; r = i.next()) {
var s = d(r.value, 2), a = s[0], l = s[1];
t & a && (n |= l);
}
} catch (t) {
e = {
error: t
};
} finally {
try {
r && !r.done && (o = i.return) && o.call(i);
} finally {
if (e) throw e.error;
}
}
return n;
}, e;
}();
t.ProjectionType = void 0, (Dn = t.ProjectionType || (t.ProjectionType = {}))[Dn.Perspective = 0] = "Perspective", 
Dn[Dn.Orthographic = 1] = "Orthographic", t.CameraClearFlags = void 0, (Nn = t.CameraClearFlags || (t.CameraClearFlags = {}))[Nn.None = 0] = "None", 
Nn[Nn.Color = 1] = "Color", Nn[Nn.Depth = 2] = "Depth", Nn[Nn.Stencil = 4] = "Stencil", 
Nn[Nn.ColorAndDepth = 3] = "ColorAndDepth", Nn[Nn.All = 7] = "All";
var En, Ln = {
viewport: {
x: function(t, e) {
return t.setViewportX(e);
},
y: function(t, e) {
return t.setViewportY(e);
},
width: function(t, e) {
return t.setViewportWidth(e);
},
height: function(t, e) {
return t.setViewportHeight(e);
}
},
cullingMask: function(t, e) {
return t.setCullingMask(e);
},
cameraDepth: function(t, e) {
return t.setCameraDepth(e);
},
projection: function(t, e) {
return t.setProjection(e);
},
fov: function(t, e) {
return t.setFov(e);
},
orthoHeight: function(t, e) {
return t.setOrthoHeight(e);
},
near: function(t, e) {
return t.setNear(e);
},
far: function(t, e) {
return t.setFar(e);
},
cameraRgb: function(t, e) {
return t.setCameraRgb(e);
},
cameraAlpha: function(t, e) {
return t.setCameraAlpha(e);
},
clearFlags: function(t, e) {
return t.setClearFlags(e);
},
zoomRatio: function(t, e) {
return t.setZoomRatio(e);
},
alignWithScreen: function(t, e) {
return t.setAlignWithScreen(e);
},
renderStages: function(t, e) {
return t.setRenderStages(e);
}
}, Wn = "remote://";
t.LoaderAssetType = void 0, (En = t.LoaderAssetType || (t.LoaderAssetType = {})).SpriteFrame = "SpriteFrame", 
En.SpriteAtlas = "SpriteAtlas", En.Font = "Font", En.SkeletonData = "SkeletonData", 
En.Texture = "Texture", En.AudioClip = "AudioClip", En.Material = "Material", En.Effect = "Effect", 
En.Json = "Json", En.DragonBonesAsset = "DragonBonesAsset", En.DragonBonesAtlasAsset = "DragonBonesAtlasAsset", 
En.Particle = "Particle", En.Buffer = "Buffer";
var Vn = function() {
function t(t) {
this._refCounts = new Map(), this._featureDeps = new Map(), this._loadingFeatures = new Map(), 
this._preRelease = !1, this._bundleOpChain = Promise.resolve(), this._pendingStageTasks = new Map(), 
this._stageWorkerRunning = !1, this._mainLoadDepth = 0, this._activatedGroups = new Map(), 
this._groupActivatePromises = new Map(), this.universe = t;
}
return t.prototype.setRemoteBundleUrl = function(t) {
this._remoteBundleUrl = t;
}, t.prototype.setRemoteAssetUrl = function(t) {
this._remoteAssetUrl = t;
}, t.prototype.setPreRelease = function(t) {
this._preRelease = t;
}, t.prototype.ensureSessionPlan = function(t) {
return c(this, void 0, void 0, function() {
var e;
return u(this, function(o) {
switch (o.label) {
case 0:
return this._remoteBundleUrl ? void 0 === (e = this.universe.featureResolver.getGalaxyOfWorld(t)) ? [ 2 ] : [ 4, this._ensureGroupActivated(e) ] : [ 2 ];

case 1:
return o.sent(), [ 2 ];
}
});
});
}, t.prototype._ensureGroupActivated = function(t) {
return c(this, void 0, void 0, function() {
var e, o = this;
return u(this, function(n) {
switch (n.label) {
case 0:
return this._activatedGroups.has(t) ? [ 2 ] : ((e = this._groupActivatePromises.get(t)) || (e = this._activateGroup(t).catch(function(e) {
throw o._groupActivatePromises.delete(t), e;
}), this._groupActivatePromises.set(t, e)), [ 4, e ]);

case 1:
return n.sent(), [ 2 ];
}
});
});
}, t.prototype._activateGroup = function(t) {
return c(this, void 0, void 0, function() {
var e, o, n;
return u(this, function(i) {
switch (i.label) {
case 0:
return e = this._ensureGroupVersionsLoaded(), o = e[t], (n = null == o ? void 0 : o.active) && 0 !== Object.keys(n).length ? [ 3, 2 ] : [ 4, this._freezeFreshSnapshot(t, e, "首次激活（在线发现）") ];

case 1:
return i.sent(), [ 2 ];

case 2:
return o.pending && this._isSnapshotReady(o.pending) ? (e[t] = {
active: o.pending
}, this.saveGroupVersions(e), this._activatedGroups.set(t, o.pending), this._discoverAndStagePending(t), 
[ 2 ]) : this._isActiveComplete(t, n) ? (this._activatedGroups.set(t, n), this._discoverAndStagePending(t), 
[ 2 ]) : this.universe.host.getNetworkState() ? [ 4, this._freezeFreshSnapshot(t, e, "不完整 active 在线重发现为连贯最新") ] : [ 3, 4 ];

case 3:
return i.sent(), [ 3, 5 ];

case 4:
this._activatedGroups.set(t, n), i.label = 5;

case 5:
return [ 2 ];
}
});
});
}, t.prototype._freezeFreshSnapshot = function(t, e) {
return c(this, void 0, void 0, function() {
var o;
return u(this, function(n) {
switch (n.label) {
case 0:
return [ 4, this._discoverGroupSnapshot(t) ];

case 1:
return o = n.sent(), e[t] = {
active: o
}, this.saveGroupVersions(e), this._activatedGroups.set(t, o), [ 2 ];
}
});
});
}, t.prototype._isActiveComplete = function(t, e) {
var o, n, i, r, s, a = this.universe.featureResolver;
try {
for (var l = h(null !== (s = a.collectFeaturesByGroup().get(t)) && void 0 !== s ? s : []), c = l.next(); !c.done; c = l.next()) if (!(c.value in e)) return !1;
} catch (t) {
o = {
error: t
};
} finally {
try {
c && !c.done && (n = l.return) && n.call(l);
} finally {
if (o) throw o.error;
}
}
for (var u in e) try {
for (var d = (i = void 0, h(e[u].deps)), p = d.next(); !p.done; p = d.next()) {
var m = p.value;
if (a.groupOf(m) === t && !(m in e)) return !1;
}
} catch (t) {
i = {
error: t
};
} finally {
try {
p && !p.done && (r = d.return) && r.call(d);
} finally {
if (i) throw i.error;
}
}
return !0;
}, t.prototype._discoverGroupSnapshot = function(t) {
return c(this, void 0, void 0, function() {
var e, o, n, i, r, s, a, l = this;
return u(this, function(m) {
switch (m.label) {
case 0:
if (e = this.universe.featureResolver, 0 === (o = p([], d(null !== (a = e.collectFeaturesByGroup().get(t)) && void 0 !== a ? a : []), !1)).length) return [ 2, {} ];
if (!this.universe.host.getNetworkState()) return [ 2, {} ];
n = {}, i = o, r = function() {
var o, r;
return u(this, function(a) {
switch (a.label) {
case 0:
return 0 === (o = i.filter(function(t) {
return !(t in n);
})).length ? [ 2, "break" ] : (r = new Set(), [ 4, s._runWithConcurrency(o, 6, function(o) {
return c(l, void 0, void 0, function() {
var i, s, a, l, c, d;
return u(this, function(u) {
switch (u.label) {
case 0:
return [ 4, this.fetchFeatureManifestRaw(o) ];

case 1:
if (void 0 === (i = u.sent()).version) throw new Error("版本冻结 ".concat(o, " bundleMeta 缺少 version"));
n[o] = {
version: i.version,
deps: i.deps
};
try {
for (s = h(i.deps), a = s.next(); !a.done; a = s.next()) l = a.value, e.groupOf(l) !== t || l in n || r.add(l);
} catch (t) {
c = {
error: t
};
} finally {
try {
a && !a.done && (d = s.return) && d.call(s);
} finally {
if (c) throw c.error;
}
}
return [ 2 ];
}
});
});
}) ]);

case 1:
return a.sent(), i = p([], d(r), !1), [ 2 ];
}
});
}, s = this, m.label = 1;

case 1:
return i.length > 0 ? [ 5, r() ] : [ 3, 3 ];

case 2:
return "break" === m.sent() ? [ 3, 3 ] : [ 3, 1 ];

case 3:
return [ 2, n ];
}
});
});
}, t.prototype._discoverAndStagePending = function(t) {
var e = this;
this.universe.host.getNetworkState() && this._discoverGroupSnapshot(t).then(function(o) {
var n, i, r, s = e._activatedGroups.get(t);
if (s) {
var a = e._ensureGroupVersionsLoaded(), l = null !== (r = a[t]) && void 0 !== r ? r : a[t] = {};
if (e._snapshotEquals(o, s)) l.pending && (delete l.pending, e.saveGroupVersions(a)); else {
l.active = s, l.pending = o, e.saveGroupVersions(a);
try {
for (var c = h(Object.entries(o)), u = c.next(); !u.done; u = c.next()) {
var p = d(u.value, 2), m = p[0], _ = p[1];
e.hasLocalBundlePackage(m, _.version) || e.enqueueStageTask({
featureName: m,
version: _.version,
deps: _.deps
});
}
} catch (t) {
n = {
error: t
};
} finally {
try {
u && !u.done && (i = c.return) && i.call(c);
} finally {
if (n) throw n.error;
}
}
e._kickStageWorker();
}
}
}).catch(function() {});
}, t.prototype._isSnapshotReady = function(t) {
for (var e in t) if (!this.hasLocalBundlePackage(e, t[e].version)) return !1;
return !0;
}, t.prototype._snapshotEquals = function(t, e) {
var o, n, i, r = Object.keys(t);
if (r.length !== Object.keys(e).length) return !1;
try {
for (var s = h(r), a = s.next(); !a.done; a = s.next()) {
var l = a.value;
if ((null === (i = e[l]) || void 0 === i ? void 0 : i.version) !== t[l].version) return !1;
}
} catch (t) {
o = {
error: t
};
} finally {
try {
a && !a.done && (n = s.return) && n.call(s);
} finally {
if (o) throw o.error;
}
}
return !0;
}, t.prototype._runWithConcurrency = function(t, e, o) {
return c(this, void 0, void 0, function() {
var n, i, r, s, a = this;
return u(this, function(l) {
switch (l.label) {
case 0:
for (n = 0, i = function() {
return c(a, void 0, void 0, function() {
var e;
return u(this, function(i) {
switch (i.label) {
case 0:
return n < t.length ? (e = n++, [ 4, o(t[e]) ]) : [ 3, 2 ];

case 1:
return i.sent(), [ 3, 0 ];

case 2:
return [ 2 ];
}
});
});
}, r = [], s = 0; s < Math.min(e, t.length); s++) r.push(i());
return [ 4, Promise.all(r) ];

case 1:
return l.sent(), [ 2 ];
}
});
});
}, t.prototype._ensureGroupVersionsLoaded = function() {
if (this._groupVersions) return this._groupVersions;
var t = this.loadGroupVersions();
if (0 === Object.keys(t).length) {
var e = this._migrateFromLegacyVersionState();
Object.keys(e).length > 0 && (t = e, this.saveGroupVersions(t));
}
return this._groupVersions = t, t;
}, t.prototype._migrateFromLegacyVersionState = function() {
var t, e, o, n = this.loadVersionState(), i = this.universe.featureResolver, r = {};
for (var s in n) {
var a = n[s];
if (void 0 !== a.appliedVersion) {
var l = i.groupOf(s);
if (void 0 !== l) {
var c = null !== (t = r[l]) && void 0 !== t ? t : r[l] = {
active: {}
};
(null !== (e = c.active) && void 0 !== e ? e : c.active = {})[s] = {
version: a.appliedVersion,
deps: null !== (o = a.appliedDeps) && void 0 !== o ? o : []
};
}
}
}
return r;
}, t.prototype.getSessionFeatureVersion = function(t) {
var e;
if (this._remoteBundleUrl) {
var o = this.universe.featureResolver.groupOf(t);
if (void 0 !== o) {
var n = null === (e = this._activatedGroups.get(o)) || void 0 === e ? void 0 : e[t];
if (n) return {
version: n.version,
deps: n.deps
};
}
}
}, t.prototype.getAppliedFeaturesVersion = function(t) {
var e = this;
if (this._remoteBundleUrl && 0 !== t.size) {
var o = this.universe.featureResolver;
return p([], d(t), !1).sort().map(function(t) {
var n, i, r = o.groupOf(t), s = void 0 !== r ? null === (i = null === (n = e._activatedGroups.get(r)) || void 0 === n ? void 0 : n[t]) || void 0 === i ? void 0 : i.version : void 0;
return "".concat(t, "#").concat(s);
}).join("_");
}
}, t.prototype.enqueueBundleOp = function(t) {
var e = this._bundleOpChain.then(t, t);
return this._bundleOpChain = e.catch(function() {}), e;
}, t.prototype.enqueueStageTask = function(t) {
var e = this._pendingStageTasks.get(t.featureName);
e && e.version >= t.version || this._pendingStageTasks.set(t.featureName, {
version: t.version,
deps: t.deps
});
}, t.prototype._kickStageWorker = function() {
this._stageWorkerRunning || 0 !== this._pendingStageTasks.size && (this._stageWorkerRunning = !0, 
c(this, void 0, void 0, function() {
var t, e, o, n, i, r, s, a;
return u(this, function(l) {
switch (l.label) {
case 0:
return this._pendingStageTasks.size > 0 ? [ 4, this._waitMainLoadIdle() ] : [ 3, 8 ];

case 1:
if (l.sent(), (t = this._pendingStageTasks.entries().next()).done) return [ 3, 8 ];
if (e = d(t.value, 2), o = e[0], n = e[1], this._pendingStageTasks.delete(o), i = this.universe.featureResolver.groupOf(o), 
void 0 !== (r = void 0 !== i ? null === (a = null === (s = this._activatedGroups.get(i)) || void 0 === s ? void 0 : s[o]) || void 0 === a ? void 0 : a.version : void 0) && r >= n.version) return [ 3, 0 ];
if (this.hasLocalBundlePackage(o, n.version)) return [ 3, 0 ];
l.label = 2;

case 2:
if (l.trys.push([ 2, 6, , 7 ]), !this.universe.host.getNetworkState()) throw new Error("stage 跳过(离线)");
return "web-desktop" !== this.getSystemName() ? [ 3, 3 ] : [ 3, 5 ];

case 3:
return [ 4, this.stageFeaturePackage(o, n.version) ];

case 4:
l.sent(), l.label = 5;

case 5:
return this.markBundlePackageReady(o, n.version), [ 3, 7 ];

case 6:
return l.sent(), [ 3, 7 ];

case 7:
return [ 3, 0 ];

case 8:
return this._stageWorkerRunning = !1, [ 2 ];
}
});
}));
}, t.prototype._bumpMainLoad = function() {
if (0 === this._mainLoadDepth) {
var t, e = new Promise(function(e) {
return t = e;
});
this._mainLoadIdleSignal = {
promise: e,
resolve: t
};
}
this._mainLoadDepth++;
}, t.prototype._dropMainLoad = function() {
var t;
this._mainLoadDepth--, 0 === this._mainLoadDepth && (null === (t = this._mainLoadIdleSignal) || void 0 === t || t.resolve(), 
this._mainLoadIdleSignal = void 0);
}, t.prototype._waitMainLoadIdle = function() {
return c(this, void 0, void 0, function() {
var t;
return u(this, function(e) {
switch (e.label) {
case 0:
return this._mainLoadDepth > 0 ? [ 4, null === (t = this._mainLoadIdleSignal) || void 0 === t ? void 0 : t.promise ] : [ 3, 2 ];

case 1:
return e.sent(), [ 3, 0 ];

case 2:
return [ 2 ];
}
});
});
}, t.prototype.buildBundleUrl = function(t) {
if (!this._remoteBundleUrl) return t;
var e = this.getPlatformName(), o = this.getSystemName();
return "".concat(this._remoteBundleUrl).concat(e, "/").concat(t, "/").concat(o);
}, t.prototype.buildRemoteUrl = function(e, o) {
if (o.startsWith(Wn)) {
var n = o.slice(9), i = this._remoteAssetUrl || t.DefaultRemoteUrl;
return {
isRemote: !0,
resolvedPath: "".concat(i, "remote/").concat(e, "/").concat(n)
};
}
return {
isRemote: !1,
resolvedPath: o
};
}, t.prototype.retainFeature = function(t) {
return c(this, void 0, void 0, function() {
var e, o, n, i, r, s, a = this;
return u(this, function() {
return (e = v(t)) ? (o = this._loadingFeatures.get(e)) ? [ 2, o.then(function(t) {
var o, n = (null !== (o = a._refCounts.get(e)) && void 0 !== o ? o : 0) + 1;
return a._refCounts.set(e, n), t;
}) ] : (n = null !== (r = this._refCounts.get(e)) && void 0 !== r ? r : 0) > 0 ? (this._refCounts.set(e, n + 1), 
[ 2, null !== (s = this._featureDeps.get(e)) && void 0 !== s ? s : [] ]) : (i = this.doLoadFeature(t).then(function(t) {
return a._refCounts.set(e, 1), a._featureDeps.set(e, t), t;
}).finally(function() {
a._loadingFeatures.delete(e);
}), this._loadingFeatures.set(e, i), [ 2, i ]) : [ 2, [] ];
});
});
}, t.prototype.retainFeatures = function(t, e) {
return c(this, void 0, void 0, function() {
var o, n, i, r, s, a, l, c, m, _, f, y, v, g, A, x, b, C, w, S, R;
return u(this, function(u) {
switch (u.label) {
case 0:
o = [], this._bumpMainLoad(), u.label = 1;

case 1:
u.trys.push([ 1, , 18, 19 ]), u.label = 2;

case 2:
u.trys.push([ 2, 7, 8, 9 ]), n = h(t.values()), i = n.next(), u.label = 3;

case 3:
return i.done ? [ 3, 6 ] : (r = i.value, [ 4, this.retainFeature(r) ]);

case 4:
s = u.sent(), o.push.apply(o, p([], d(s), !1)), null == e || e(), u.label = 5;

case 5:
return i = n.next(), [ 3, 3 ];

case 6:
return [ 3, 9 ];

case 7:
return a = u.sent(), x = {
error: a
}, [ 3, 9 ];

case 8:
try {
i && !i.done && (b = n.return) && b.call(n);
} finally {
if (x) throw x.error;
}
return [ 7 ];

case 9:
if (!(o.length > 0)) return [ 3, 17 ];
l = new Set(o.map(function(t) {
return t.atomFeatureName;
})), u.label = 10;

case 10:
u.trys.push([ 10, 15, 16, 17 ]), c = h(l), m = c.next(), u.label = 11;

case 11:
return m.done ? [ 3, 14 ] : (_ = m.value, [ 4, this.retainFeature({
atomFeatureName: _
}) ]);

case 12:
u.sent(), u.label = 13;

case 13:
return m = c.next(), [ 3, 11 ];

case 14:
return [ 3, 17 ];

case 15:
return f = u.sent(), C = {
error: f
}, [ 3, 17 ];

case 16:
try {
m && !m.done && (w = c.return) && w.call(c);
} finally {
if (C) throw C.error;
}
return [ 7 ];

case 17:
y = new Set(t.keys());
try {
for (v = h(o), g = v.next(); !g.done; g = v.next()) A = g.value, y.add(A.atomFeatureName);
} catch (t) {
S = {
error: t
};
} finally {
try {
g && !g.done && (R = v.return) && R.call(v);
} finally {
if (S) throw S.error;
}
}
return this.onFeaturesRetained(y), [ 2, y ];

case 18:
return this._dropMainLoad(), this._kickStageWorker(), [ 7 ];

case 19:
return [ 2 ];
}
});
});
}, t.prototype._decrementRef = function(t) {
var e, o = null !== (e = this._refCounts.get(t)) && void 0 !== e ? e : 0;
return 0 !== o && (o > 1 ? (this._refCounts.set(t, o - 1), !1) : (this._refCounts.set(t, 0), 
!0));
}, t.prototype.releaseFeature = function(t) {
this._decrementRef(t) && (this.doReleaseFeatureAssets(t), this.doRemoveFeatureBundle(t), 
this._refCounts.delete(t), this._featureDeps.delete(t));
}, t.prototype.releaseFeatures = function(t) {
var e, o, n, i, r = [], s = [];
try {
for (var a = h(t.keys()), l = a.next(); !l.done; l = a.next()) {
var c = l.value, u = this._featureDeps.get(c);
u && u.length > 0 && s.push.apply(s, p([], d(u), !1)), this._decrementRef(c) && r.push(c);
}
} catch (t) {
e = {
error: t
};
} finally {
try {
l && !l.done && (o = a.return) && o.call(a);
} finally {
if (e) throw e.error;
}
}
if (s.length > 0) {
var m = new Set(s.map(function(t) {
return t.atomFeatureName;
}));
try {
for (var _ = h(m), f = _.next(); !f.done; f = _.next()) {
var y = f.value;
this._decrementRef(y) && r.push(y);
}
} catch (t) {
n = {
error: t
};
} finally {
try {
f && !f.done && (i = _.return) && i.call(_);
} finally {
if (n) throw n.error;
}
}
}
this._executeTwoPhaseUnload(r);
}, t.prototype.forceReleaseAll = function() {
this._executeTwoPhaseUnload(p([], d(this._refCounts.keys()), !1));
}, t.prototype._executeTwoPhaseUnload = function(t) {
if (0 !== t.length) {
for (var e = t.length, o = t.join(", "), n = 0; n < e; n++) {
var i = t[n];
try {
this.doReleaseFeatureAssets(i);
} catch (t) {
throw t instanceof Error && (t.message = "[AtomEngine][卸载] Phase1 doReleaseFeatureAssets 失败: featureName=".concat(i, " index=").concat(n + 1, "/").concat(e, " toUnload=[").concat(o, "] ---\x3e ").concat(t.message)), 
t;
}
}
for (n = 0; n < e; n++) {
i = t[n];
try {
this.doRemoveFeatureBundle(i);
} catch (t) {
throw t instanceof Error && (t.message = "[AtomEngine][卸载] Phase2 doRemoveFeatureBundle 失败: featureName=".concat(i, " index=").concat(n + 1, "/").concat(e, " toUnload=[").concat(o, "] ---\x3e ").concat(t.message)), 
t;
}
this._refCounts.delete(i), this._featureDeps.delete(i);
}
}
}, t.prototype.isFeatureLoaded = function(t) {
var e;
return (null !== (e = this._refCounts.get(t)) && void 0 !== e ? e : 0) > 0;
}, t.prototype.releaseAsset = function(t, e, o) {
return void 0 !== this.tryGetCachedAsset(t, e, o) && !this.doReleaseAsset(t, e, o);
}, t.prototype.assetCacheKey = function(t, e) {
return "".concat(t, "_").concat(e);
}, t.DefaultRemoteUrl = "https://starlink-live.hungrystudio.pp.ua/atomEngine/", 
t;
}(), On = "|";
function kn(t) {
var e = t, o = e.split(On);
return o.length < 2 ? {
featureName: "",
assetPath: e
} : {
featureName: o[0],
assetPath: o[1]
};
}
var Gn, zn, jn = function(e) {
function n() {
var t = e.apply(this, p([], d(arguments), !1)) || this;
return t.genChain = null, t;
}
return o(n, e), Object.defineProperty(n, "atomType", {
get: function() {
return "ConfigAtom";
},
enumerable: !1,
configurable: !0
}), n.prototype.collectLoad = function() {
this.atomWorld.loadTracker.addItems();
}, n.prototype._loadConfig = function() {
return c(this, void 0, void 0, function() {
var t, e;
return u(this, function(o) {
switch (o.label) {
case 0:
return t = this.atomWorld.universe, (e = t.configDataStore.get(this.atomName)) || (e = {}, 
t.configDataStore.set(this.atomName, e)), this.atomState = e, [ 4, this._generateConfigInto(e) ];

case 1:
return o.sent(), [ 2 ];
}
});
});
}, n.prototype._generateConfigInto = function(e) {
return c(this, void 0, void 0, function() {
var o, n, i, r, s, a, l;
return u(this, function(c) {
switch (c.label) {
case 0:
return o = this.defineConfig(), Object.assign(e, o), this.atomWorld ? (this.atomWorld.universe.featureResolver.applyOverrides(this.atomName, e), 
(n = o.JsonAsset) ? (i = kn(n), r = i.featureName, s = i.assetPath, [ 4, this.atomWorld.universe.asset.loadAsset(r, s, t.LoaderAssetType.Json) ]) : [ 3, 2 ]) : [ 2 ];

case 1:
if (a = c.sent(), !this.atomWorld) return [ 2 ];
if (null == a ? void 0 : a.json) {
for (l in e) delete e[l];
Object.assign(e, a.json);
}
c.label = 2;

case 2:
return this.genChain ? [ 4, this.genChain.execute() ] : [ 3, 4 ];

case 3:
c.sent(), c.label = 4;

case 4:
return [ 2 ];
}
});
});
}, n.prototype.onReady = function() {
return c(this, void 0, void 0, function() {
return u(this, function(t) {
switch (t.label) {
case 0:
return [ 4, this._loadConfig() ];

case 1:
return t.sent(), this.atomWorld ? (this.atomWorld.loadTracker.complete(), [ 2 ]) : [ 2 ];
}
});
});
}, n.prototype.reloadAsync = function() {
return c(this, void 0, void 0, function() {
return u(this, function(t) {
switch (t.label) {
case 0:
return [ 4, this._generateConfigInto(this.atomState) ];

case 1:
return t.sent(), [ 2 ];
}
});
});
}, n.prototype.registerToChain = function(t) {
return this.genChain || (this.genChain = new be(this.atomWorld, this.atomName)), 
this.genChain.addAtom(t), this.genChain;
}, n.prototype.unregisterFromChain = function(t) {
if (!this.genChain) return !1;
var e = this.genChain.removeAtom(t);
return e && (this.genChain = null), e;
}, n.prototype.getChain = function() {
return this.genChain;
}, n.prototype.url = function(t) {
return function(e, o) {
return "".concat(o || t).concat(On).concat(e);
};
}, n[ge] = !0, n;
}(Ae), qn = function() {
function e(t) {
this.worldId = "", this.isActive = !0, this.nodeName = "", this._assetLoadingUrls = {}, 
this._currentMaterial = null, this._lastMaterialParams = null, this._eventBindings = new Map(), 
this.universe = t;
}
return e.prototype.restoreMaterial = function() {
if (this._lastMaterialParams) if (this._currentMaterial) {
try {
this.applyMaterial(this._currentMaterial);
} catch (t) {
return void (this._currentMaterial = null);
}
this.applyMaterialProperties(this._currentMaterial, this._lastMaterialParams, !0);
} else this.setMaterial(this._lastMaterialParams);
}, e.prototype.restoreTexture = function() {}, e.prototype.initRender = function(t, e) {
this.eid = t, this.worldId = e;
}, e.prototype.applyWorldTimeScale = function() {}, e.prototype.disposeRender = function() {
var t = this;
this.eid = 0, this._assetLoadingUrls = {}, this._currentMaterial = null, this._lastMaterialParams = null, 
this._eventBindings.forEach(function(e, o) {
e.listener && t.offNative(o, e.listener, e.appliedCapture);
}), this._eventBindings.clear();
}, e.prototype.bindTouchEvent = function(t, e) {
var o = this;
this.bindBaseEvent(t, e, function(e) {
return o.createNativeListener(t, e);
});
}, e.prototype.bindSizeInputEvent = function(t, e) {
var o = this;
this.bindBaseEvent(t, e, function(t) {
return function() {
var e = {
width: o.getWidth(),
height: o.getHeight(),
eid: o.eid,
worldId: o.worldId
};
o.universe.handleSizeInputEvent(e), t(e);
};
});
}, e.prototype.bindPositionInputEvent = function(t, e) {
var o = this;
this.bindBaseEvent(t, e, function(t) {
return function() {
var e = {
x: o.getX(),
y: o.getY(),
eid: o.eid,
worldId: o.worldId
};
o.universe.handlePositionInputEvent(e), t(e);
};
});
}, e.prototype.bindBaseEvent = function(t, e, o) {
var n = this._getOrCreateBinding(t);
n.callback = e, n.listenerCreator = o, this._rebindEvent(t);
}, e.prototype.bindTouchEventOption = function(t, e) {
this._getOrCreateBinding(t).options = !0 === e ? {
capture: !0
} : !1 !== e && void 0 !== e ? e : void 0, this._rebindEvent(t);
}, e.prototype._getOrCreateBinding = function(t) {
var e = this._eventBindings.get(t);
return e || (e = {
callback: null,
appliedCapture: !1
}, this._eventBindings.set(t, e)), e;
}, e.prototype._rebindEvent = function(t) {
var e, o, n = this._eventBindings.get(t);
if (n) if (n.listener && (this.offNative(t, n.listener, n.appliedCapture), n.listener = void 0), 
n.callback && n.listenerCreator) {
var i = !0 === (null === (e = n.options) || void 0 === e ? void 0 : e.capture), r = !0 === (null === (o = n.options) || void 0 === o ? void 0 : o.stopPropagation), s = n.listenerCreator(n.callback), a = r ? this.wrapStopPropagation(s) : s;
n.listener = a, n.appliedCapture = i, this.onNative(t, a, i);
} else n.callback || n.options || this._eventBindings.delete(t);
}, e.prototype.loadAsset = function(t, e, o, n, i) {
var r = this;
this._assetLoadingUrls[t] = e;
var s = kn(e), a = s.featureName, l = s.assetPath, c = this.universe.asset.tryGetCachedAsset(a, l, o), u = function(o) {
r._assetLoadingUrls[t] === e && (null == i || i(o));
}, h = function(o) {
try {
if (r._assetLoadingUrls[t] !== e) return;
n(o);
} catch (t) {
u(t);
}
};
void 0 === c ? this.universe.asset.loadAsset(a, l, o).then(function(t) {
return h(t);
}, u) : h(c);
}, e.prototype.setMaterial = function(e) {
var o = this;
this.nativeRenderer && (this._lastMaterialParams = e, this._assetLoadingUrls.material === e.url && this._currentMaterial ? this.applyMaterialProperties(this._currentMaterial, e) : (this._currentMaterial = null, 
this.loadAsset("material", e.url, t.LoaderAssetType.Material, function(t) {
try {
o.applyMaterial(t);
} catch (t) {
return void (o._currentMaterial = null);
}
o._currentMaterial = t;
try {
o.applyMaterialProperties(t, e);
} catch (t) {}
})));
}, e.prototype.applyMaterialProperties = function(e, o, n) {
var i = this;
if (void 0 === n && (n = !1), e) {
var r = function(e) {
if ("url" === e) return "continue";
var r = o[e];
"string" == typeof r && r.includes(On) ? s.loadAsset("material_prop_".concat(e), r, t.LoaderAssetType.Texture, function(t) {
i._setMaterialProperty(e, t, n && o.url);
}) : s._setMaterialProperty(e, r, n && o.url);
}, s = this;
for (var a in o) r(a);
}
}, e.prototype._setMaterialProperty = function(t, e, o) {
if (o) try {
this.setMaterialProperty(t, e);
} catch (t) {} else this.setMaterialProperty(t, e);
}, e.prototype.setActiveBase = function(t) {
this.isActive = t, this.setActive(t);
}, e;
}(), Hn = {
v2: new cc.Vec2(),
v3: new cc.Vec3(),
color: new cc.Color(),
quat: new cc.Quat(),
_v2Pool: [],
_v3Pool: [],
_v4Pool: [],
getV2s: function(t) {
for (var e = this._v2Pool; e.length < t; ) e.push(cc.v2());
return e;
},
getV3s: function(t) {
for (var e = this._v3Pool; e.length < t; ) e.push(cc.v3());
return e;
},
getV4s: function(t) {
for (var e = this._v4Pool; e.length < t; ) e.push(new cc.Color());
return e;
}
}, Un = function(e) {
function n(o) {
var n = e.call(this, o) || this;
return n._quat = new cc.Quat(), n._width = 0, n._height = 0, n._depth = 0, n._cameraLayerExplicitlySet = !1, 
n._cameraLayer = t.CameraLayer.GameWorld, n.widgetComp = null, n.layoutComp = null, 
n.buttonComp = null, n.blockInputComp = null, n.safeAreaComp = null, n.nativeRenderer = void 0, 
n.nativeNode = new cc.Node(), n.nativeNode._cocosNodeRef = n, n.setCameraLayer(t.CameraLayer.Host, !1), 
n;
}
return o(n, e), n.prototype.applyMaterial = function(t) {
var e = this.nativeRenderer;
(null == e ? void 0 : e.setMaterial) && e.setMaterial(0, t);
}, n.prototype.setMaterialProperty = function(t, e) {
var o, n, i = this.nativeRenderer, r = null === (o = null == i ? void 0 : i.getMaterial) || void 0 === o ? void 0 : o.call(i, 0);
r && (null === (n = r.setProperty) || void 0 === n || n.call(r, t, e));
}, n.prototype.onNative = function(t, e, o) {
this.nativeNode.on(t, e, this, o);
}, n.prototype.offNative = function(t, e, o) {
this.nativeNode.off(t, e, this, o);
}, n.prototype.wrapStopPropagation = function(t) {
return function(e) {
null == e || e.stopPropagation(), t(e);
};
}, n.prototype.createNativeListener = function(t, e) {
var o = this;
return function(n) {
var i = n.getLocation(), r = n.getDelta(), s = o.nativeNode.convertToNodeSpaceAR(i), a = cc.view.getVisibleOrigin(), l = cc.macro.ENABLE_MULTI_TOUCH ? n.getTouches().map(function(t) {
var e = t.getLocation(), n = t.getDelta(), i = o.nativeNode.convertToNodeSpaceAR(e);
return {
x: e.x - a.x,
y: e.y - a.y,
dx: n.x,
dy: n.y,
touchId: t.getID(),
eid: o.eid,
localX: i.x,
localY: i.y
};
}) : [], c = {
x: i.x - a.x,
y: i.y - a.y,
dx: r.x,
dy: r.y,
touchId: n.getID(),
eid: o.eid,
localX: s.x,
localY: s.y,
eventType: t,
worldId: o.worldId,
multiTouchs: l
};
o.universe.handlePointerEvent(c), e(c);
};
}, n.prototype.setButtonClick = function(t) {
this.ensureButton();
var e = this.nativeNode.getComponent(Yn);
e || (e = this.nativeNode.addComponent(Yn)), e.callback = t;
var o = new cc.Component.EventHandler();
o.target = this.nativeNode, o.component = "AEButtonProxy", o.handler = "onClick", 
this.ensureButton().clickEvents = [ o ];
}, n.prototype.setOnTouchStart = function(t) {
this.bindTouchEvent(cc.Node.EventType.TOUCH_START, t);
}, n.prototype.setOnTouchMove = function(t) {
this.bindTouchEvent(cc.Node.EventType.TOUCH_MOVE, t);
}, n.prototype.setOnTouchEnd = function(t) {
this.bindTouchEvent(cc.Node.EventType.TOUCH_END, t);
}, n.prototype.setOnTouchCancel = function(t) {
this.bindTouchEvent(cc.Node.EventType.TOUCH_CANCEL, t);
}, n.prototype.setOnSizeChanged = function(t) {
this.bindSizeInputEvent(cc.Node.EventType.SIZE_CHANGED, t);
}, n.prototype.setOnPositionChanged = function(t) {
this.bindPositionInputEvent(cc.Node.EventType.POSITION_CHANGED, t);
}, n.prototype.setTouchStartOption = function(t) {
this.bindTouchEventOption(cc.Node.EventType.TOUCH_START, t);
}, n.prototype.setTouchMoveOption = function(t) {
this.bindTouchEventOption(cc.Node.EventType.TOUCH_MOVE, t);
}, n.prototype.setTouchEndOption = function(t) {
this.bindTouchEventOption(cc.Node.EventType.TOUCH_END, t);
}, n.prototype.setTouchCancelOption = function(t) {
this.bindTouchEventOption(cc.Node.EventType.TOUCH_CANCEL, t);
}, n.prototype.getName = function() {
return this.nodeName;
}, n.prototype.getX = function() {
return this.nativeNode.x;
}, n.prototype.getY = function() {
return this.nativeNode.y;
}, n.prototype.getZ = function() {
return this.nativeNode.z;
}, n.prototype.getWidth = function() {
return this.nativeNode.width;
}, n.prototype.getHeight = function() {
return this.nativeNode.height;
}, n.prototype.setName = function(t) {
this.nodeName = t, isNaN(this.eid) || (t += ":eid=" + this.eid), this.nativeNode.name = t;
}, n.prototype.setCameraLayer = function(t, e) {
void 0 === e && (e = !0);
var o = t, n = this.universe.layerMapping.getPhysicalIndex(o);
this.nativeNode.groupIndex = n, this._cameraLayer = o, this._cameraLayerExplicitlySet = e, 
e && this._applyLayerRecursively(this.nativeNode, o, n);
}, n.prototype._applyLayerRecursively = function(t, e, o) {
for (var n = t.children, i = 0; i < n.length; i++) {
var r = n[i], s = r._cocosNodeRef;
s && (s._cameraLayerExplicitlySet || (r.groupIndex = o, s._cameraLayer = e, s._cameraLayerExplicitlySet = !1, 
this._applyLayerRecursively(r, e, o)));
}
}, n.prototype.addChild = function(t) {
var e, o, n = this.nativeNode, i = null == t ? void 0 : t.nativeNode;
if (i) {
var r = i.parent;
if (r) {
if (r === n) return void this._trackNodeFailure("CocosNode.addChild 重复挂载", "child=".concat(t.nodeName, " eid=").concat(String(t.eid), " parent=").concat(this.nodeName, " eid=").concat(String(this.eid)));
try {
t.removeFromParent();
} catch (e) {
return void this._trackNodeFailure("CocosNode.addChild 摘除异常", "child=".concat(t.nodeName, " eid=").concat(String(t.eid)) + " oldParent=".concat(r.name, " newParent=").concat(this.nodeName, " eid=").concat(String(this.eid)), e);
}
if (i.parent) return void this._trackNodeFailure("CocosNode.addChild 摘除失败", "child=".concat(t.nodeName, " eid=").concat(String(t.eid)) + " oldParent=".concat(i.parent.name, " newParent=").concat(this.nodeName, " eid=").concat(String(this.eid)));
}
try {
n.addChild(i);
} catch (e) {
return void this._trackNodeFailure("CocosNode.addChild 挂载异常", "child=".concat(t.nodeName, " parent=").concat(this.nodeName, " oldParent=").concat(null !== (o = null == r ? void 0 : r.name) && void 0 !== o ? o : "none"), e);
}
if (!t._cameraLayerExplicitlySet) {
var s = this.universe.layerMapping.getPhysicalIndex(this._cameraLayer);
i.groupIndex = s, t._cameraLayer = this._cameraLayer, this._applyLayerRecursively(i, this._cameraLayer, s);
}
} else this._trackNodeFailure("CocosNode.addChild 原生节点缺失", "child=".concat(null !== (e = null == t ? void 0 : t.nodeName) && void 0 !== e ? e : "undefined", " parent=").concat(this.nodeName));
}, n.prototype._trackNodeFailure = function(t, e, o) {
var n = o instanceof Error ? o.message : void 0 === o ? "" : String(o);
this.universe.host.track("atomengine_game_common_execution_failed", {
error_type: t,
error_message: n ? "".concat(e, " | cause=").concat(n) : e
});
}, n.prototype.removeChild = function(t) {
this.nativeNode.removeChild(t.nativeNode);
}, n.prototype.removeFromParent = function() {
this.nativeNode.removeFromParent(!1);
}, n.prototype.getParent = function() {
var t = this.nativeNode.parent;
if (t) {
return t._cocosNodeRef;
}
}, n.prototype.getWorldPosition = function() {
var t = this.nativeNode.convertToWorldSpaceAR(cc.v3(0, 0, 0));
return {
x: t.x,
y: t.y,
z: t.z
};
}, n.prototype.convertToLocalSpace = function(t) {
var e = this.nativeNode.convertToNodeSpaceAR(cc.v3(t.x, t.y, t.z));
return {
x: e.x,
y: e.y,
z: e.z
};
}, n.prototype.destroyNative = function() {
this.nativeNode._cocosNodeRef = void 0, cc.isValid(this.nativeNode) && this.nativeNode.destroy();
}, n.prototype.setX = function(t) {
this.nativeNode.x = t;
}, n.prototype.setY = function(t) {
this.nativeNode.y = t;
}, n.prototype.setZ = function(t) {
this.nativeNode.z = t;
}, n.prototype.setAngle = function(t) {
this.nativeNode.angle = t;
}, n.prototype.setQuatX = function(t) {
this._quat.x = t, this.updateRotation();
}, n.prototype.setQuatY = function(t) {
this._quat.y = t, this.updateRotation();
}, n.prototype.setQuatZ = function(t) {
this._quat.z = t, this.updateRotation();
}, n.prototype.setQuatW = function(t) {
this._quat.w = t, this.updateRotation();
}, n.prototype.updateRotation = function() {
this.nativeNode.setRotation(this._quat);
}, n.prototype.setScale = function(t) {
this.nativeNode.scale = t;
}, n.prototype.setScaleX = function(t) {
this.nativeNode.scaleX = t;
}, n.prototype.setScaleY = function(t) {
this.nativeNode.scaleY = t;
}, n.prototype.setScaleZ = function() {}, n.prototype.setAnchorX = function(t) {
this.nativeNode.anchorX = t;
}, n.prototype.setAnchorY = function(t) {
this.nativeNode.anchorY = t;
}, n.prototype.setAnchorZ = function() {}, n.prototype.setZIndex = function(t) {
this.nativeNode.zIndex = t;
}, n.prototype.setDepth = function(t) {
this._depth = t;
}, n.prototype.setWidth = function(t) {
this._width = t, this.nativeNode.width = t;
}, n.prototype.setHeight = function(t) {
this._height = t, this.nativeNode.height = t;
}, n.prototype.opacityToAlpha = function(t) {
return Math.floor(255 * t);
}, n.prototype.setAlpha = function(t) {
this.nativeNode.opacity = this.opacityToAlpha(t);
}, n.prototype.setActive = function(t) {
this.nativeNode.active = t;
}, n.prototype.setBlockInputEvents = function(t) {
t ? (this.blockInputComp || (this.blockInputComp = this.nativeNode.addComponent(cc.BlockInputEvents)), 
this.blockInputComp.enabled = !0) : this.blockInputComp && (this.blockInputComp.enabled = !1);
}, n.prototype.setWidgetEnabled = function(t) {
this.ensureWidget().enabled = t;
}, n.prototype.ensureWidget = function() {
return this.widgetComp || (this.widgetComp = this.nativeNode.addComponent(cc.Widget)), 
this.widgetComp;
}, n.prototype.setWidgetAlignTop = function(t) {
this.ensureWidget().isAlignTop = t;
}, n.prototype.setWidgetAlignBottom = function(t) {
this.ensureWidget().isAlignBottom = t;
}, n.prototype.setWidgetAlignLeft = function(t) {
this.ensureWidget().isAlignLeft = t;
}, n.prototype.setWidgetAlignRight = function(t) {
this.ensureWidget().isAlignRight = t;
}, n.prototype.setWidgetAlignHorizontalCenter = function(t) {
this.ensureWidget().isAlignHorizontalCenter = t;
}, n.prototype.setWidgetAlignVerticalCenter = function(t) {
this.ensureWidget().isAlignVerticalCenter = t;
}, n.prototype.setWidgetAbsoluteTop = function(t) {
this.ensureWidget().isAbsoluteTop = t;
}, n.prototype.setWidgetAbsoluteBottom = function(t) {
this.ensureWidget().isAbsoluteBottom = t;
}, n.prototype.setWidgetAbsoluteLeft = function(t) {
this.ensureWidget().isAbsoluteLeft = t;
}, n.prototype.setWidgetAbsoluteRight = function(t) {
this.ensureWidget().isAbsoluteRight = t;
}, n.prototype.setWidgetAbsoluteHorizontalCenter = function(t) {
this.ensureWidget().isAbsoluteHorizontalCenter = t;
}, n.prototype.setWidgetAbsoluteVerticalCenter = function(t) {
this.ensureWidget().isAbsoluteVerticalCenter = t;
}, n.prototype.setWidgetTop = function(t) {
var e = this.ensureWidget();
e.isAlignTop = !0, e.top = t;
}, n.prototype.setWidgetBottom = function(t) {
var e = this.ensureWidget();
e.isAlignBottom = !0, e.bottom = t;
}, n.prototype.setWidgetLeft = function(t) {
var e = this.ensureWidget();
e.isAlignLeft = !0, e.left = t;
}, n.prototype.setWidgetRight = function(t) {
var e = this.ensureWidget();
e.isAlignRight = !0, e.right = t;
}, n.prototype.setWidgetHorizontalCenter = function(t) {
var e = this.ensureWidget();
e.isAlignHorizontalCenter = !0, e.horizontalCenter = t;
}, n.prototype.setWidgetVerticalCenter = function(t) {
var e = this.ensureWidget();
e.isAlignVerticalCenter = !0, e.verticalCenter = t;
}, n.prototype.setWidgetAlignMode = function(e) {
var o, n = ((o = {})[t.WidgetAlignMode.Once] = cc.Widget.AlignMode.ONCE, o[t.WidgetAlignMode.OnWindowResize] = cc.Widget.AlignMode.ON_WINDOW_RESIZE, 
o[t.WidgetAlignMode.Always] = cc.Widget.AlignMode.ALWAYS, o);
this.ensureWidget().alignMode = n[e];
}, n.prototype.ensureSafeArea = function() {
return this.safeAreaComp || (this.ensureWidget(), this.safeAreaComp = this.nativeNode.addComponent(cc.SafeArea)), 
this.safeAreaComp;
}, n.prototype.setSafeAreaEnabled = function(t) {
this.ensureSafeArea().enabled = t;
}, n.prototype.ensureLayout = function() {
return this.layoutComp || (this.layoutComp = this.nativeNode.addComponent(cc.Layout)), 
this.layoutComp;
}, n.prototype.setLayoutType = function(e) {
var o, n = ((o = {})[t.LayoutType.Horizontal] = cc.Layout.Type.HORIZONTAL, o[t.LayoutType.Vertical] = cc.Layout.Type.VERTICAL, 
o[t.LayoutType.Grid] = cc.Layout.Type.GRID, o);
this.ensureLayout().type = n[e];
}, n.prototype.setLayoutResizeMode = function(e) {
var o, n = ((o = {})[t.LayoutResizeMode.None] = cc.Layout.ResizeMode.NONE, o[t.LayoutResizeMode.Container] = cc.Layout.ResizeMode.CONTAINER, 
o[t.LayoutResizeMode.Children] = cc.Layout.ResizeMode.CHILDREN, o);
this.ensureLayout().resizeMode = n[e];
}, n.prototype.setLayoutSpacingX = function(t) {
this.ensureLayout().spacingX = t;
}, n.prototype.setLayoutSpacingY = function(t) {
this.ensureLayout().spacingY = t;
}, n.prototype.setLayoutPaddingLeft = function(t) {
this.ensureLayout().paddingLeft = t;
}, n.prototype.setLayoutPaddingRight = function(t) {
this.ensureLayout().paddingRight = t;
}, n.prototype.setLayoutPaddingTop = function(t) {
this.ensureLayout().paddingTop = t;
}, n.prototype.setLayoutPaddingBottom = function(t) {
this.ensureLayout().paddingBottom = t;
}, n.prototype.setLayoutStartAxis = function(e) {
var o, n = ((o = {})[t.LayoutAxisDirection.Horizontal] = cc.Layout.AxisDirection.HORIZONTAL, 
o[t.LayoutAxisDirection.Vertical] = cc.Layout.AxisDirection.VERTICAL, o);
this.ensureLayout().startAxis = n[e];
}, n.prototype.setLayoutVerticalDirection = function(e) {
var o, n = ((o = {})[t.LayoutVerticalDirection.TopToBottom] = cc.Layout.VerticalDirection.TOP_TO_BOTTOM, 
o[t.LayoutVerticalDirection.BottomToTop] = cc.Layout.VerticalDirection.BOTTOM_TO_TOP, 
o);
this.ensureLayout().verticalDirection = n[e];
}, n.prototype.setLayoutHorizontalDirection = function(e) {
var o, n = ((o = {})[t.LayoutHorizontalDirection.LeftToRight] = cc.Layout.HorizontalDirection.LEFT_TO_RIGHT, 
o[t.LayoutHorizontalDirection.RightToLeft] = cc.Layout.HorizontalDirection.RIGHT_TO_LEFT, 
o);
this.ensureLayout().horizontalDirection = n[e];
}, n.prototype.setLayoutAffectedByScale = function(t) {
this.ensureLayout().affectedByScale = t;
}, n.prototype.setLayoutEnabled = function(t) {
this.ensureLayout().enabled = t;
}, n.prototype.ensureButton = function() {
return this.buttonComp || (this.buttonComp = this.nativeNode.addComponent(cc.Button), 
this.buttonComp.target = this.nativeNode), this.buttonComp;
}, n.prototype.setRgbColor = function(t, e) {
e.r = t >>> 16 & 255, e.g = t >>> 8 & 255, e.b = 255 & t;
}, n.prototype.setRgb = function(t) {
this.setRgbColor(t, Hn.color), Hn.color.a = this.nativeNode.color.a, this.nativeNode.color = Hn.color;
}, n.prototype.setButtonInteractable = function(t) {
this.ensureButton().interactable = t;
}, n.prototype.setButtonEnableAutoGrayEffect = function(t) {
this.ensureButton().enableAutoGrayEffect = t;
}, n.prototype.setButtonTransition = function(e) {
var o, n = ((o = {})[t.ButtonTransition.None] = cc.Button.Transition.NONE, o[t.ButtonTransition.Color] = cc.Button.Transition.COLOR, 
o[t.ButtonTransition.Sprite] = cc.Button.Transition.SPRITE, o[t.ButtonTransition.Scale] = cc.Button.Transition.SCALE, 
o);
this.ensureButton().transition = n[e];
}, n.prototype.setButtonDuration = function(t) {
this.ensureButton().duration = t;
}, n.prototype.setButtonZoomScale = function(t) {
this.ensureButton().zoomScale = t;
}, n.prototype.setButtonNormalColor = function(t) {
var e = this.ensureButton();
this.setRgbColor(t, Hn.color), Hn.color.a = e.normalColor.a, e.normalColor = Hn.color.clone();
}, n.prototype.setButtonNormalAlpha = function(t) {
var e = this.ensureButton();
Hn.color.set(e.normalColor), Hn.color.a = this.opacityToAlpha(t), e.normalColor = Hn.color.clone();
}, n.prototype.setButtonPressedColor = function(t) {
var e = this.ensureButton();
this.setRgbColor(t, Hn.color), Hn.color.a = e.pressedColor.a, e.pressedColor = Hn.color.clone();
}, n.prototype.setButtonPressedAlpha = function(t) {
var e = this.ensureButton();
Hn.color.set(e.pressedColor), Hn.color.a = this.opacityToAlpha(t), e.pressedColor = Hn.color.clone();
}, n.prototype.setButtonHoverColor = function(t) {
var e = this.ensureButton();
this.setRgbColor(t, Hn.color), Hn.color.a = e.hoverColor.a, e.hoverColor = Hn.color.clone();
}, n.prototype.setButtonHoverAlpha = function(t) {
var e = this.ensureButton();
Hn.color.set(e.hoverColor), Hn.color.a = this.opacityToAlpha(t), e.hoverColor = Hn.color.clone();
}, n.prototype.setButtonDisabledColor = function(t) {
var e = this.ensureButton();
this.setRgbColor(t, Hn.color), Hn.color.a = e.disabledColor.a, e.disabledColor = Hn.color.clone();
}, n.prototype.setButtonDisabledAlpha = function(t) {
var e = this.ensureButton();
Hn.color.set(e.disabledColor), Hn.color.a = this.opacityToAlpha(t), e.disabledColor = Hn.color.clone();
}, n.prototype.setButtonNormalSprite = function(e) {
var o = this;
this.loadAsset("btnNormal", e, t.LoaderAssetType.SpriteFrame, function(t) {
o.ensureButton().normalSprite = t;
});
}, n.prototype.setButtonPressedSprite = function(e) {
var o = this;
this.loadAsset("btnPressed", e, t.LoaderAssetType.SpriteFrame, function(t) {
o.ensureButton().pressedSprite = t;
});
}, n.prototype.setButtonHoverSprite = function(e) {
var o = this;
this.loadAsset("btnHover", e, t.LoaderAssetType.SpriteFrame, function(t) {
o.ensureButton().hoverSprite = t;
});
}, n.prototype.setButtonDisabledSprite = function(e) {
var o = this;
this.loadAsset("btnDisabled", e, t.LoaderAssetType.SpriteFrame, function(t) {
o.ensureButton().disabledSprite = t;
});
}, n.prototype.setButtonTarget = function(t) {
var e = this, o = this.ensureButton();
if (t) {
var n = 0, i = function() {
if (cc.isValid(e.nativeNode)) {
var r = e._findNodeInDescendants(e.nativeNode, t);
r ? o.target = r : n < 5 && (n++, cc.director.once(cc.Director.EVENT_AFTER_UPDATE, i));
}
};
i();
} else o.target = this.nativeNode;
}, n.prototype._findNodeInDescendants = function(t, e) {
for (var o = t.children, n = 0; n < o.length; n++) {
var i = o[n], r = i._cocosNodeRef;
if (r && r.nodeName === e || i.name === e) return i;
var s = this._findNodeInDescendants(i, e);
if (s) return s;
}
}, n.prototype.setButtonEnabled = function(t) {
this.ensureButton().enabled = t;
}, n;
}(qn), Yn = function(t) {
function e() {
return null !== t && t.apply(this, arguments) || this;
}
return o(e, t), e.prototype.onClick = function() {
this.callback && this.callback();
}, a([ cc._decorator.ccclass("AEButtonProxy") ], e);
}(cc.Component);
t.TextOverflow = void 0, (Gn = t.TextOverflow || (t.TextOverflow = {}))[Gn.NONE = 0] = "NONE", 
Gn[Gn.CLAMP = 1] = "CLAMP", Gn[Gn.SHRINK = 2] = "SHRINK", Gn[Gn.RESIZE_HEIGHT = 3] = "RESIZE_HEIGHT", 
t.TextVerticalAlign = void 0, (zn = t.TextVerticalAlign || (t.TextVerticalAlign = {}))[zn.TOP = 0] = "TOP", 
zn[zn.CENTER = 1] = "CENTER", zn[zn.BOTTOM = 2] = "BOTTOM";
var Xn, Jn, Qn = {
text: function(t, e) {
return t.setText(e);
},
fontSize: function(t, e) {
return t.setFontSize(e);
},
horizontalAlign: function(t, e) {
return t.setHorizontalAlign(e);
},
verticalAlign: function(t, e) {
return t.setVerticalAlign(e);
},
overflow: function(t, e) {
return t.setOverflow(e);
},
enableBold: function(t, e) {
return t.setEnableBold(e);
},
enableItalic: function(t, e) {
return t.setEnableItalic(e);
},
fontFamily: function(t, e) {
return t.setFontFamily(e);
},
lineHeight: function(t, e) {
return t.setLineHeight(e);
},
enableWrapText: function(t, e) {
return t.setEnableWrapText(e);
},
font: function(t, e) {
return t.setFont(e);
},
spacingX: function(t, e) {
return t.setSpacingX(e);
},
cacheMode: function(t, e) {
return t.setCacheMode(e);
},
enableUnderline: function(t, e) {
return t.setEnableUnderline(e);
},
underlineHeight: function(t, e) {
return t.setUnderlineHeight(e);
},
outline: {
rgb: function(t, e) {
return t.setOutlineRgb(e);
},
alpha: function(t, e) {
return t.setOutlineAlpha(e);
},
width: function(t, e) {
return t.setOutlineWidth(e);
}
},
shadow: {
rgb: function(t, e) {
return t.setShadowRgb(e);
},
alpha: function(t, e) {
return t.setShadowAlpha(e);
},
offset: function(t, e) {
return t.setShadowOffset(e[0], e[1]);
},
blur: function(t, e) {
return t.setShadowBlur(e);
}
}
}, Kn = function(e) {
function n(t) {
var o = e.call(this, t) || this;
return o.nativeRenderer = o.nativeNode.getComponent(cc.Label) || o.nativeNode.addComponent(cc.Label), 
o.nativeRenderer.verticalAlign = cc.Label.VerticalAlign.CENTER, o;
}
return o(n, e), n.prototype.setText = function(t) {
this.nativeRenderer.string = t;
}, n.prototype.setFontSize = function(t) {
this.nativeRenderer.fontSize = t, this.nativeRenderer.lineHeight < t && (this.nativeRenderer.lineHeight = t);
}, n.prototype.setHorizontalAlign = function(e) {
switch (e) {
case t.TextHorizontalAlign.LEFT:
this.nativeRenderer.horizontalAlign = cc.Label.HorizontalAlign.LEFT;
break;

case t.TextHorizontalAlign.CENTER:
this.nativeRenderer.horizontalAlign = cc.Label.HorizontalAlign.CENTER;
break;

case t.TextHorizontalAlign.RIGHT:
this.nativeRenderer.horizontalAlign = cc.Label.HorizontalAlign.RIGHT;
}
}, n.prototype.setVerticalAlign = function(e) {
switch (e) {
case t.TextVerticalAlign.TOP:
this.nativeRenderer.verticalAlign = cc.Label.VerticalAlign.TOP;
break;

case t.TextVerticalAlign.CENTER:
this.nativeRenderer.verticalAlign = cc.Label.VerticalAlign.CENTER;
break;

case t.TextVerticalAlign.BOTTOM:
this.nativeRenderer.verticalAlign = cc.Label.VerticalAlign.BOTTOM;
}
}, n.prototype.setOverflow = function(e) {
switch (e) {
case t.TextOverflow.NONE:
this.nativeRenderer.overflow = cc.Label.Overflow.NONE;
break;

case t.TextOverflow.CLAMP:
this.nativeRenderer.overflow = cc.Label.Overflow.CLAMP;
break;

case t.TextOverflow.SHRINK:
this.nativeRenderer.overflow = cc.Label.Overflow.SHRINK;
break;

case t.TextOverflow.RESIZE_HEIGHT:
this.nativeRenderer.overflow = cc.Label.Overflow.RESIZE_HEIGHT;
}
}, n.prototype.setEnableBold = function(t) {
this.nativeRenderer.enableBold = t;
}, n.prototype.setEnableItalic = function(t) {
this.nativeRenderer.enableItalic = t;
}, n.prototype.setFontFamily = function(t) {
this.nativeRenderer.fontFamily = t;
}, n.prototype.setLineHeight = function(t) {
this.nativeRenderer.lineHeight = t;
}, n.prototype.setEnableWrapText = function(t) {
this.nativeRenderer.enableWrapText = t;
}, n.prototype.setFont = function(e) {
var o = this;
this.loadAsset("font", e, t.LoaderAssetType.Font, function(t) {
o.nativeRenderer.font = t, o.nativeNode._renderFlag |= 96;
});
}, n.prototype.setAlpha = function(t) {
var o, n;
e.prototype.setAlpha.call(this, t), (null === (n = (o = this.nativeRenderer)._nativeTTF) || void 0 === n ? void 0 : n.call(o)) && this.nativeRenderer.setVertsDirty();
}, n.prototype.setSpacingX = function(t) {
this.nativeRenderer.spacingX = t;
}, n.prototype.setCacheMode = function(e) {
switch (e) {
case t.LabelCacheMode.NONE:
this.nativeRenderer.cacheMode = cc.Label.CacheMode.NONE;
break;

case t.LabelCacheMode.BITMAP:
this.nativeRenderer.cacheMode = cc.Label.CacheMode.BITMAP;
break;

case t.LabelCacheMode.CHAR:
this.nativeRenderer.cacheMode = cc.Label.CacheMode.CHAR;
}
}, n.prototype.setEnableUnderline = function(t) {
this.nativeRenderer.enableUnderline = t;
}, n.prototype.setUnderlineHeight = function(t) {
this.nativeRenderer.underlineHeight = t;
}, n.prototype.ensureOutline = function() {
return this._outlineComp || (this._outlineComp = this.nativeNode.getComponent(cc.LabelOutline) || this.nativeNode.addComponent(cc.LabelOutline)), 
this._outlineComp;
}, n.prototype.setOutlineRgb = function(t) {
var e = this.ensureOutline();
this.setRgbColor(t, Hn.color), Hn.color.a = e.color.a, e.color = Hn.color;
}, n.prototype.setOutlineAlpha = function(t) {
var e = this.ensureOutline();
Hn.color.set(e.color), Hn.color.a = this.opacityToAlpha(t), e.color = Hn.color;
}, n.prototype.setOutlineWidth = function(t) {
this.ensureOutline().width = t;
}, n.prototype.ensureShadow = function() {
return this._shadowComp || (this._shadowComp = this.nativeNode.getComponent(cc.LabelShadow) || this.nativeNode.addComponent(cc.LabelShadow)), 
this._shadowComp;
}, n.prototype.setShadowRgb = function(t) {
var e = this.ensureShadow();
this.setRgbColor(t, Hn.color), Hn.color.a = e.color.a, e.color = Hn.color;
}, n.prototype.setShadowAlpha = function(t) {
var e = this.ensureShadow();
Hn.color.set(e.color), Hn.color.a = this.opacityToAlpha(t), e.color = Hn.color;
}, n.prototype.setShadowOffset = function(t, e) {
this.ensureShadow().offset = new cc.Vec2(t, e);
}, n.prototype.setShadowBlur = function(t) {
this.ensureShadow().blur = t;
}, n;
}(Un);
t.SpineControl = void 0, (Xn = t.SpineControl || (t.SpineControl = {}))[Xn.Pause = 1] = "Pause", 
Xn[Xn.Resume = 2] = "Resume", Xn[Xn.Stop = 3] = "Stop", t.SpineAnimationCacheMode = void 0, 
(Jn = t.SpineAnimationCacheMode || (t.SpineAnimationCacheMode = {}))[Jn.Realtime = 0] = "Realtime", 
Jn[Jn.SharedCache = 1] = "SharedCache", Jn[Jn.PrivateCache = 2] = "PrivateCache";
var Zn = {
spineUrl: function(t, e) {
return t.setSpineUrl(e);
},
animation: {
name: function(t, e) {
return t.setAnimationName(e);
},
index: function(t, e) {
return t.setAnimationIndex(e);
},
loop: function(t, e) {
return t.setAnimationLoop(e);
}
},
animationTracks: function(t, e) {
return t.setAnimationTracks(e);
},
skin: function(t, e) {
return t.setSkin(e);
},
timeScale: function(t, e) {
return t.setTimeScale(e);
},
premultipliedAlpha: function(t, e) {
return t.setPremultipliedAlpha(e);
},
enableBatch: function(t, e) {
return t.setEnableBatch(e);
},
animationCacheMode: function(t, e) {
return t.setAnimationCacheMode(e);
},
spineCtrl: function(t, e) {
return t.setSpineCtrl(e);
},
enabled: function(t, e) {
return t.setSpineEnabled(e);
},
slotsRgb: function(t, e) {
return t.setSlotsRgb(e);
},
slotsAlpha: function(t, e) {
return t.setSlotsAlpha(e);
}
}, $n = {
complete: function(t, e) {
return t.setAnimationComplete(e);
},
frame: function(t, e) {
return t.setAnimationFrameEvent(e);
}
};
function ti(t) {
var e, o;
if (!t) return [];
var n = [];
try {
for (var i = h(Object.entries(t)), s = i.next(); !s.done; s = i.next()) {
var a = d(s.value, 2), l = a[0], c = a[1];
n.push(r(r({}, c), {
_boneName: l,
_bindAlpha: c.bindAlpha
}));
}
} catch (t) {
e = {
error: t
};
} finally {
try {
s && !s.done && (o = i.return) && o.call(i);
} finally {
if (e) throw e.error;
}
}
return n;
}
var ei, oi, ni, ii = function(e) {
function n(t) {
var o = e.call(this, t) || this;
return o._pendingAnimationIndex = 0, o._slotsRgb = {}, o._slotsAlpha = {}, o._pendingBoneAttachments = [], 
o._baseTimeScale = 1, o._worldTimeScale = 1, o.nativeRenderer = o.nativeNode.getComponent(sp.Skeleton) || o.nativeNode.addComponent(sp.Skeleton), 
o.nativeRenderer.premultipliedAlpha = !1, o.nativeRenderer.loop = !0, o;
}
return o(n, e), Object.defineProperty(n.prototype, "_attachUtil", {
get: function() {
var t;
return null === (t = this.nativeRenderer) || void 0 === t ? void 0 : t.attachUtil;
},
enumerable: !1,
configurable: !0
}), n.prototype.initRender = function(t, o) {
e.prototype.initRender.call(this, t, o), this._baseTimeScale = 1, this._worldTimeScale = this.universe.getWorldRenderTimeScale(o), 
this.nativeRenderer.timeScale = this._baseTimeScale * this._worldTimeScale, this.nativeRenderer.enabled = !0;
}, n.prototype.setSpineEnabled = function(t) {
this.nativeRenderer.enabled = t;
}, n.prototype._hasValidTextureRefs = function(t) {
var e = t.textures;
return Boolean(e) && e.every(function(t) {
return Boolean(t);
});
}, n.prototype.restoreTexture = function() {
var t, e = this.nativeRenderer.skeletonData;
if (!e || !this._hasValidTextureRefs(e)) {
this.nativeRenderer.skeletonData = void 0;
var o = null !== (t = this._spineUrl) && void 0 !== t ? t : this._spineAttemptUrl;
o && (this._spineUrl = void 0, this.setSpineUrl(o));
}
}, n.prototype.setSpineUrl = function(e) {
var o = this;
this._spineUrl !== e && (this._spineAttemptUrl = e, this._spineUrl = e, this.loadAsset("spine", e, t.LoaderAssetType.SkeletonData, function(t) {
if (t) {
if (!o._hasValidTextureRefs(t)) return void (o._spineUrl = void 0);
var e = o.nativeRenderer.skeletonData === t;
if (e || (o.nativeRenderer.skeletonData = t, o.nativeRenderer._updateMaterial()), 
o._pendingSkin && o._setSkin(o._pendingSkin), o._applyAnimation(), o._applySlotTints(), 
o._activeTracks && o._applyAnimationTracks(p([], d(o._activeTracks.values()), !1)), 
e) return;
o._applyPendingBoneAttachments(), o._width > 0 && (o.nativeNode.width = o._width), 
o._height > 0 && (o.nativeNode.height = o._height);
}
}, function() {
o._spineUrl = void 0;
}));
}, n.prototype.setAnimationName = function(t) {
this._activeTracks = void 0, this._pendingAnimationName = t, this._applyAnimation(), 
this._applySlotTints();
}, n.prototype.setAnimationIndex = function(t) {
this._activeTracks = void 0, this._pendingAnimationIndex = t;
}, n.prototype.setAnimationTracks = function(t) {
var e, o, n;
this._pendingAnimationName = void 0, this._pendingAnimationIndex = 0;
var i = new Map(this._activeTracks);
try {
for (var s = h(t), a = s.next(); !a.done; a = s.next()) {
var l = a.value;
if (l) {
var c = null !== (n = l.index) && void 0 !== n ? n : 0;
l.name ? i.set(c, r(r({}, l), {
index: c
})) : i.delete(c);
}
}
} catch (t) {
e = {
error: t
};
} finally {
try {
a && !a.done && (o = s.return) && o.call(s);
} finally {
if (e) throw e.error;
}
}
this._activeTracks = i, this.nativeRenderer.skeletonData && this._applyAnimationTracks(t);
}, n.prototype._applyAnimationTracks = function(t) {
var e, o, n, i;
try {
for (var r = h(t), s = r.next(); !s.done; s = r.next()) {
var a = s.value;
if (a) {
var l = null !== (n = a.index) && void 0 !== n ? n : 0, c = a.name;
if (c) {
var u = this.nativeRenderer.setAnimation(l, c, null !== (i = a.loop) && void 0 !== i ? i : this.nativeRenderer.loop);
u && void 0 !== a.trackTime && (u.trackTime = a.trackTime), u && void 0 !== a.timeScale && (u.timeScale = a.timeScale);
} else this.nativeRenderer.clearTrack(l);
}
}
} catch (t) {
e = {
error: t
};
} finally {
try {
s && !s.done && (o = r.return) && o.call(r);
} finally {
if (e) throw e.error;
}
}
}, n.prototype.setAnimationLoop = function(t) {
var e, o;
if (this.nativeRenderer.loop = t, !this.nativeRenderer.isAnimationCached()) if (void 0 !== this._activeTracks) try {
for (var n = h(this._activeTracks), i = n.next(); !i.done; i = n.next()) {
var r = d(i.value, 2), s = r[0];
void 0 === r[1].loop && this._setTrackLoop(s, t);
}
} catch (t) {
e = {
error: t
};
} finally {
try {
i && !i.done && (o = n.return) && o.call(n);
} finally {
if (e) throw e.error;
}
} else this._setTrackLoop(this._pendingAnimationIndex, t);
}, n.prototype._setTrackLoop = function(t, e) {
var o = this.nativeRenderer.getCurrent(t);
if (o) {
if (!e && o.loop) {
var n = o.animationStart, i = o.animationEnd - n;
i > 0 && o.trackTime > o.animationEnd && (o.trackTime = n + (o.trackTime - n) % i);
}
o.loop = e;
}
}, n.prototype._applyAnimation = function() {
this.nativeRenderer.skeletonData && this._pendingAnimationName && (this.nativeRenderer.setAnimation(this._pendingAnimationIndex, this._pendingAnimationName, this.nativeRenderer.loop), 
this.nativeRenderer.defaultAnimation = this._pendingAnimationName);
}, n.prototype.setSkin = function(t) {
this._pendingSkin = t, this._setSkin(t);
}, n.prototype._setSkin = function(t) {
if (this.nativeRenderer.skeletonData) {
if (!this._hasSkin(t)) return;
this.nativeRenderer.defaultSkin || (this.nativeRenderer.defaultSkin = t), this.nativeRenderer.setSkin(t), 
this._applySlotTints();
}
}, n.prototype._hasSkin = function(t) {
var e, o = this.nativeRenderer.skeletonData;
if (!o) return !1;
var n = null === (e = o.getRuntimeData) || void 0 === e ? void 0 : e.call(o, !0);
return !!n && Boolean(n.findSkin(t));
}, n.prototype.setSlotsRgb = function(t) {
this._slotsRgb = t, this._applyAllSlotRgb();
}, n.prototype.setSlotsAlpha = function(t) {
this._slotsAlpha = t, this._applyAllSlotAlpha();
}, n.prototype._applyAllSlotRgb = function() {
for (var t in this._slotsRgb) this._applySlotRgb(t);
}, n.prototype._applyAllSlotAlpha = function() {
for (var t in this._slotsAlpha) this._applySlotAlpha(t);
}, n.prototype._applySlotRgb = function(t) {
if (this.nativeRenderer.skeletonData) {
var e = this.nativeRenderer.findSlot(t);
if (e) {
var o = this._slotsRgb[t];
e.color.r = ((16711680 & o) >>> 16) / 255, e.color.g = ((65280 & o) >>> 8) / 255, 
e.color.b = (255 & o) / 255;
}
}
}, n.prototype._applySlotAlpha = function(t) {
if (this.nativeRenderer.skeletonData) {
var e = this.nativeRenderer.findSlot(t);
e && (e.color.a = this._slotsAlpha[t]);
}
}, n.prototype._applySlotTints = function() {
this._applyAllSlotRgb(), this._applyAllSlotAlpha();
}, n.prototype.setTimeScale = function(t) {
this._baseTimeScale = t, this.nativeRenderer.timeScale = t * this._worldTimeScale;
}, n.prototype.applyWorldTimeScale = function(t) {
this._worldTimeScale = t, this.nativeRenderer.timeScale = this._baseTimeScale * t;
}, n.prototype.setPremultipliedAlpha = function(t) {
this.nativeRenderer.premultipliedAlpha = t;
}, n.prototype.setEnableBatch = function(t) {
this.nativeRenderer.enableBatch = t;
}, n.prototype.setAnimationCacheMode = function(e) {
var o;
switch (e) {
case t.SpineAnimationCacheMode.Realtime:
o = sp.Skeleton.AnimationCacheMode.REALTIME;
break;

case t.SpineAnimationCacheMode.SharedCache:
o = sp.Skeleton.AnimationCacheMode.SHARED_CACHE;
break;

case t.SpineAnimationCacheMode.PrivateCache:
o = sp.Skeleton.AnimationCacheMode.PRIVATE_CACHE;
break;

default:
return;
}
this.nativeRenderer.setAnimationCacheMode(o);
}, n.prototype.setSpineCtrl = function(e) {
e === t.SpineControl.Pause ? this.nativeRenderer.paused = !0 : e === t.SpineControl.Resume ? this.nativeRenderer.paused = !1 : e === t.SpineControl.Stop && (this._stopAnimation(), 
this.nativeRenderer.paused = !1);
}, n.prototype._stopAnimation = function() {
var t = this.nativeRenderer;
if (t.isAnimationCached()) return t._isAniComplete = !0, t._animationQueue.length = 0, 
t._headAniInfo = null, t._accTime = 0, void (t._playCount = 0);
t.clearTracks();
}, n.prototype.setAnimationComplete = function(t) {
this.nativeRenderer.setCompleteListener(function() {
t && t();
});
}, n.prototype.setAnimationFrameEvent = function(t) {
var e = this;
this.nativeRenderer.setEventListener(function(o, n) {
var i = {
frameEventName: n.data.name,
eid: e.eid,
worldId: e.worldId
};
e.universe.handleSpineFrameEvent(i), t && t(i);
});
}, n.prototype.setMaterialProperty = function(t, o) {
e.prototype.setMaterialProperty.call(this, t, o), this.nativeRenderer._updateMaterial();
}, n.prototype.attachToBone = function(t, e, o) {
this.nativeRenderer.skeletonData ? this._attachToBoneInternal(t, e, o) : this._pendingBoneAttachments.push({
childNode: t,
boneName: e,
bindAlpha: o
});
}, n.prototype._attachToBoneInternal = function(t, e, o) {
var n = this._attachUtil;
if (n) {
var i = n.getAttachedNodes(e);
if ((i && 0 !== i.length || (i = n.generateAttachedNodes(e)), i && i.length > 0) && (t.nativeNode.setParent(i[0]), 
o)) {
this._alphaSyncComp || (this._alphaSyncComp = this.nativeNode.getComponent(ri) || this.nativeNode.addComponent(ri)), 
this._alphaSyncComp.skeleton = this.nativeRenderer;
this._alphaSyncComp.attachments.some(function(e) {
return e.childNode === t;
}) || this._alphaSyncComp.attachments.push({
childNode: t,
slotName: o
});
}
}
}, n.prototype._applyPendingBoneAttachments = function() {
var t = this;
0 !== this._pendingBoneAttachments.length && this._pendingBoneAttachments.splice(0).forEach(function(e) {
var o = e.childNode, n = e.boneName, i = e.bindAlpha;
t._attachToBoneInternal(o, n, i);
});
}, n.prototype._detachAllBoneChildren = function() {
var t, e, o, n, i, r, s = this._attachUtil;
if (s) {
var a = s._attachedRootNode;
if (a) {
var l = [];
try {
for (var c = h(a.children), u = c.next(); !u.done; u = c.next()) {
var d = u.value;
try {
for (var p = (o = void 0, h(d.children)), m = p.next(); !m.done; m = p.next()) {
var _ = m.value;
l.push(_);
}
} catch (t) {
o = {
error: t
};
} finally {
try {
m && !m.done && (n = p.return) && n.call(p);
} finally {
if (o) throw o.error;
}
}
}
} catch (e) {
t = {
error: e
};
} finally {
try {
u && !u.done && (e = c.return) && e.call(c);
} finally {
if (t) throw t.error;
}
}
try {
for (var f = h(l), y = f.next(); !y.done; y = f.next()) (_ = y.value).setParent(this.nativeNode);
} catch (t) {
i = {
error: t
};
} finally {
try {
y && !y.done && (r = f.return) && r.call(f);
} finally {
if (i) throw i.error;
}
}
}
}
}, n.prototype.disposeRender = function() {
var t;
this._pendingBoneAttachments.length = 0, this._alphaSyncComp && (this._alphaSyncComp.attachments.length = 0, 
this._alphaSyncComp.skeleton = void 0), this._detachAllBoneChildren(), null === (t = this._attachUtil) || void 0 === t || t.destroyAllAttachedNodes(), 
this.nativeRenderer.setCompleteListener(null), this.nativeRenderer.setEventListener(null), 
this._stopAnimation(), this.nativeRenderer.loop = !0, this.nativeRenderer.paused = !1, 
this.nativeRenderer.enabled = !0, this.nativeRenderer.skeletonData = void 0, this._spineUrl = void 0, 
this._spineAttemptUrl = void 0, this._pendingAnimationName = void 0, this._pendingAnimationIndex = 0, 
this._activeTracks = void 0, this._pendingSkin = void 0, this._slotsRgb = {}, this._slotsAlpha = {}, 
e.prototype.disposeRender.call(this);
}, n;
}(Un), ri = function(t) {
function e() {
var e = t.apply(this, p([], d(arguments), !1)) || this;
return e.attachments = [], e;
}
return o(e, t), e.prototype.lateUpdate = function() {
var t = this.skeleton;
if (t && t.skeletonData && 0 !== this.attachments.length) for (var e = 0; e < this.attachments.length; e++) {
var o = this.attachments[e], n = o.childNode.nativeNode;
if (n && cc.isValid(n)) {
var i = t.findSlot(o.slotName);
i && (n.opacity = Math.floor(255 * i.color.a));
}
}
}, a([ cc._decorator.ccclass("AESpineAlphaSync") ], e);
}(cc.Component);
t.GraphicsCmd = void 0, (ei = t.GraphicsCmd || (t.GraphicsCmd = {})).MoveTo = "moveTo", 
ei.LineTo = "lineTo", ei.BezierCurveTo = "bezierCurveTo", ei.QuadraticCurveTo = "quadraticCurveTo", 
ei.Arc = "arc", ei.Circle = "circle", ei.Rect = "rect", ei.RoundRect = "roundRect", 
ei.Ellipse = "ellipse", ei.Close = "close", ei.Fill = "fill", ei.Stroke = "stroke", 
ei.Clear = "clear", ei.FillColor = "fillColor", ei.FillAlpha = "fillAlpha", ei.StrokeColor = "strokeColor", 
ei.StrokeAlpha = "strokeAlpha", ei.StrokeWidth = "strokeWidth", ei.LineJoin = "lineJoin", 
ei.LineCap = "lineCap", ei.SetUseModel = "setUseModel", t.GraphicsLineJoin = void 0, 
(oi = t.GraphicsLineJoin || (t.GraphicsLineJoin = {})).Miter = "Miter", oi.Round = "Round", 
oi.Bevel = "Bevel", t.GraphicsLineCap = void 0, (ni = t.GraphicsLineCap || (t.GraphicsLineCap = {})).Butt = "Butt", 
ni.Round = "Round", ni.Square = "Square";
var si = {
autoClear: function(t, e) {
return t.setAutoClear(e);
},
draw: function(t, e) {
return t.draw(e);
}
};
function ai(t) {
var e, o;
if (t) {
var n = t;
void 0 !== n._graphicsUseModelOrig && (null === (o = null === (e = n._graphicsUseModelAsm) || void 0 === e ? void 0 : e.setUseModel) || void 0 === o || o.call(e, n._graphicsUseModelOrig), 
n._graphicsUseModelOrig = void 0, n._graphicsUseModelAsm = void 0);
}
}
var li = function(e) {
function n(t) {
var o = this;
return t || y(i.GraphicsRequired, {}), (o = e.call(this) || this).graphics = t, 
o._strokeColor = new cc.Color(255, 255, 255), o._fillColor = new cc.Color(255, 255, 255), 
o;
}
return o(n, e), n.prototype.moveTo = function(t, e) {
this.graphics.moveTo(t, e);
}, n.prototype.lineTo = function(t, e) {
this.graphics.lineTo(t, e);
}, n.prototype.close = function() {
this.graphics.close();
}, n.prototype.closePath = function() {
this.graphics.close();
}, n.prototype.rect = function(t, e, o, n) {
this.graphics.rect(t, e, o, n);
}, n.prototype.circle = function(t, e, o) {
this.graphics.circle(t, e, o);
}, n.prototype.roundRect = function(t, e, o, n, i) {
this.graphics.roundRect(t, e, o, n, i);
}, n.prototype.ellipse = function(t, e, o, n) {
this.graphics.ellipse(t, e, o, n);
}, n.prototype.arc = function(t, e, o, n, i, r) {
this.graphics.arc(t, e, o, n, i, r);
}, n.prototype.bezierCurveTo = function(t, e, o, n, i, r) {
this.graphics.bezierCurveTo(t, e, o, n, i, r);
}, n.prototype.quadraticCurveTo = function(t, e, o, n) {
this.graphics.quadraticCurveTo(t, e, o, n);
}, n.prototype.stroke = function() {
this.graphics.stroke();
}, n.prototype.fill = function() {
this.graphics.fill();
}, n.prototype.fillRect = function(t, e, o, n) {
this.graphics.fillRect(t, e, o, n);
}, n.prototype.clear = function() {
this.graphics.clear();
}, n.prototype.setRgbColor = function(t, e) {
e.r = t >>> 16 & 255, e.g = t >>> 8 & 255, e.b = 255 & t;
}, Object.defineProperty(n.prototype, "strokeColor", {
get: function() {
return Number(this._strokeColor.toHEX("#rrggbb").substring(1));
},
set: function(t) {
this.setRgbColor(t, this._strokeColor), this._strokeColor.a = this.graphics.strokeColor.a, 
this.graphics.strokeColor = this._strokeColor;
},
enumerable: !1,
configurable: !0
}), Object.defineProperty(n.prototype, "strokeAlpha", {
get: function() {
return this._strokeColor.a / 255;
},
set: function(t) {
this._strokeColor.a = Math.floor(255 * t), this.graphics.strokeColor = this._strokeColor;
},
enumerable: !1,
configurable: !0
}), Object.defineProperty(n.prototype, "strokeWidth", {
get: function() {
return this.graphics.lineWidth;
},
set: function(t) {
this.graphics.lineWidth = t;
},
enumerable: !1,
configurable: !0
}), n.prototype.setFillColor = function(t) {
this.setRgbColor(t, this._fillColor), this._fillColor.a = this.graphics.fillColor.a, 
this.graphics.fillColor = this._fillColor;
}, n.prototype.setFillAlpha = function(t) {
this.graphics.fillColor.a = Math.floor(255 * t);
}, n.prototype.setStrokeColor = function(t) {
this.strokeColor = t;
}, n.prototype.setStrokeAlpha = function(t) {
this.strokeAlpha = t;
}, n.prototype.setStrokeWidth = function(t) {
this.strokeWidth = t;
}, n.prototype.setLineJoin = function(e) {
e === t.GraphicsLineJoin.Bevel ? this.graphics.lineJoin = cc.Graphics.LineJoin.BEVEL : e === t.GraphicsLineJoin.Round ? this.graphics.lineJoin = cc.Graphics.LineJoin.ROUND : this.graphics.lineJoin = cc.Graphics.LineJoin.MITER;
}, n.prototype.setLineCap = function(e) {
e === t.GraphicsLineCap.Round ? this.graphics.lineCap = cc.Graphics.LineCap.ROUND : e === t.GraphicsLineCap.Square ? this.graphics.lineCap = cc.Graphics.LineCap.SQUARE : this.graphics.lineCap = cc.Graphics.LineCap.BUTT;
}, n.prototype.setUseModel = function(t) {
t ? function(t) {
var e, o;
if (t) {
var n = t, i = n._assembler;
(null == i ? void 0 : i.setUseModel) && (n._graphicsUseModelAsm !== i && (n._graphicsUseModelOrig = null !== (o = null === (e = i.getUseModel) || void 0 === e ? void 0 : e.call(i)) && void 0 !== o && o, 
n._graphicsUseModelAsm = i), i.setUseModel(!0));
}
}(this.graphics) : ai(this.graphics);
}, n;
}(function() {
function e() {}
return e.prototype.setUseModel = function() {}, e.prototype.execute = function(e) {
if (e && 0 !== e.length) for (var o = 0, n = e.length; o < n; o++) {
var i = e[o];
switch (i[0]) {
case t.GraphicsCmd.MoveTo:
this.moveTo(i[1], i[2]);
break;

case t.GraphicsCmd.LineTo:
this.lineTo(i[1], i[2]);
break;

case t.GraphicsCmd.Rect:
this.rect(i[1], i[2], i[3], i[4]);
break;

case t.GraphicsCmd.Circle:
this.circle(i[1], i[2], i[3]);
break;

case t.GraphicsCmd.RoundRect:
this.roundRect(i[1], i[2], i[3], i[4], i[5]);
break;

case t.GraphicsCmd.Ellipse:
this.ellipse(i[1], i[2], i[3], i[4]);
break;

case t.GraphicsCmd.Arc:
this.arc(i[1], i[2], i[3], i[4], i[5], Boolean(i[6]));
break;

case t.GraphicsCmd.BezierCurveTo:
this.bezierCurveTo(i[1], i[2], i[3], i[4], i[5], i[6]);
break;

case t.GraphicsCmd.QuadraticCurveTo:
this.quadraticCurveTo(i[1], i[2], i[3], i[4]);
break;

case t.GraphicsCmd.Close:
this.close();
break;

case t.GraphicsCmd.Fill:
this.fill();
break;

case t.GraphicsCmd.Stroke:
this.stroke();
break;

case t.GraphicsCmd.Clear:
this.clear();
break;

case t.GraphicsCmd.FillColor:
this.setFillColor(i[1]);
break;

case t.GraphicsCmd.FillAlpha:
this.setFillAlpha(i[1]);
break;

case t.GraphicsCmd.StrokeColor:
this.setStrokeColor(i[1]);
break;

case t.GraphicsCmd.StrokeAlpha:
this.setStrokeAlpha(i[1]);
break;

case t.GraphicsCmd.StrokeWidth:
this.setStrokeWidth(i[1]);
break;

case t.GraphicsCmd.LineJoin:
this.setLineJoin(i[1]);
break;

case t.GraphicsCmd.LineCap:
this.setLineCap(i[1]);
break;

case t.GraphicsCmd.SetUseModel:
this.setUseModel(i[1]);
}
}
}, e;
}()), ci = function(t) {
function e(e) {
var o = t.call(this, e) || this;
return o.autoClear = !0, o.nativeRenderer = o.nativeNode.getComponent(cc.Graphics) || o.nativeNode.addComponent(cc.Graphics), 
o.driver = new li(o.nativeRenderer), o;
}
return o(e, t), e.prototype.setAutoClear = function(t) {
this.autoClear = t;
}, e.prototype.draw = function(t) {
this.autoClear && this.nativeRenderer.clear(), this.driver.execute(t);
}, e.prototype.setMaterialProperty = function(e, o) {
t.prototype.setMaterialProperty.call(this, e, o), this.nativeRenderer.markForRender(!0);
}, e.prototype.disposeRender = function() {
cc.isValid(this.nativeRenderer) && ai(this.nativeRenderer), t.prototype.disposeRender.call(this);
}, e.prototype.destroyNative = function() {
cc.isValid(this.nativeRenderer) && ai(this.nativeRenderer), t.prototype.destroyNative.call(this);
}, e;
}(Un), ui = cc._decorator.ccclass, hi = cc.Graphics.LineJoin, di = cc.Graphics.LineCap, pi = Math.PI, mi = Math.max, _i = Math.ceil, fi = Math.acos, yi = cc.Enum({
PT_CORNER: 1,
PT_LEFT: 2,
PT_BEVEL: 4,
PT_INNERBEVEL: 8
}), vi = cc.gfx, gi = new vi.VertexFormat([ {
name: vi.ATTR_POSITION,
type: vi.ATTR_TYPE_FLOAT32,
num: 2
}, {
name: vi.ATTR_COLOR,
type: vi.ATTR_TYPE_UINT8,
num: 4,
normalize: !0
}, {
name: "a_dist",
type: vi.ATTR_TYPE_FLOAT32,
num: 1
}, {
name: "a_lines",
type: vi.ATTR_TYPE_FLOAT32,
num: 1
} ]);
gi.name = "vfmtPosColorSdfLines";
var Ai = {
getConstructor: function() {
return function(t) {
function e(e) {
var o = t.call(this, e) || this;
return o.lines = 0, o;
}
return o(e, t), e.prototype.getVfmt = function() {
return gi;
}, e.prototype.getVfmtFloatCount = function() {
return 5;
}, e.prototype._expandStroke = function(t) {
var e, o, n, i, r = .5 * t.lineWidth, s = t.lineCap, a = t.lineJoin, l = t.miterLimit, c = t._impl, u = (e = r, 
o = pi, n = c._tessTol, i = 2 * fi(e / (e + n)), mi(2, _i(o / i)));
this._calculateJoins(c, r, a, l);
for (var h = c._paths, d = 0, p = c._pathOffset, m = c._pathLength; p < m; p++) {
var _ = (A = h[p]).points.length;
a === hi.ROUND ? d += 2 * (_ + A.nbevel * (u + 2) + 1) : d += 2 * (_ + 5 * A.nbevel + 1), 
A.closed || (s === di.ROUND ? d += 2 * (2 * u + 2) : d += 12);
}
var f = this.genBuffer(t, d), y = f.meshbuffer, v = y._vData, g = y._iData;
for (p = c._pathOffset, m = c._pathLength; p < m; p++) {
var A, x = (A = h[p]).points, b = (_ = x.length, f.vertexStart), C = void 0, w = void 0, S = void 0, R = void 0, B = A.closed;
if (B ? (C = x[_ - 1], w = x[0], S = 0, R = _) : (C = x[0], w = x[1], S = 1, R = _ - 1), 
w = w || C, this.lines = 0, !B) {
(N = w.sub(C)).normalizeSelf();
var T = N.x, F = N.y;
s === di.BUTT ? this._buttCapStart(C, T, F, r, 0) : s === di.SQUARE ? this._buttCapStart(C, T, F, r, r) : s === di.ROUND && this._roundCapStart(C, T, F, r, u);
}
this.lines += w.sub(C).mag();
for (var M = S; M < R; ++M) a === hi.ROUND ? this._roundJoin(C, w, r, r, u) : 0 != (w.flags & (yi.PT_BEVEL | yi.PT_INNERBEVEL)) ? this._bevelJoin(C, w, r, r) : (this._vset(w.x + w.dmx * r, w.y + w.dmy * r, 1), 
this._vset(w.x - w.dmx * r, w.y - w.dmy * r, -1)), C = w, w = x[M + 1], this.lines += w.sub(C).mag();
if (B) {
var I = this.getVfmtFloatCount(), D = b * I;
this._vset(v[D], v[D + 1], 1), this._vset(v[D + I], v[D + I + 1], -1);
} else {
var N;
(N = w.sub(C)).normalizeSelf(), T = N.x, F = N.y, s === di.BUTT ? this._buttCapEnd(w, T, F, r, 0) : s === di.SQUARE ? this._buttCapEnd(w, T, F, r, r) : s === di.ROUND && this._roundCapEnd(w, T, F, r, u);
}
for (var P = f.indiceStart, E = b + 2, L = f.vertexStart; E < L; E++) g[P++] = E - 2, 
g[P++] = E - 1, g[P++] = E;
f.indiceStart = P;
}
}, e.prototype._vset = function(t, e, o) {
void 0 === o && (o = 0);
var n = this._buffer, i = n.meshbuffer, r = n.vertexStart * this.getVfmtFloatCount(), s = i._vData, a = i._uintVData;
s[r] = t, s[r + 1] = e, a[r + 2] = this._curColor, s[r + 3] = o, s[r + 4] = this.lines, 
n.vertexStart++, i._dirty = !0;
}, e;
}(cc.Graphics.__assembler__);
}
}, xi = function(t) {
function e() {
return null !== t && t.apply(this, arguments) || this;
}
return o(e, t), a([ ui ], e);
}(cc.Graphics);
cc.Assembler.register(xi, Ai);
var bi, Ci = function(t) {
function e(e) {
var o = t.call(this, e) || this;
return o.nativeRenderer = o.nativeNode.getComponent(xi) || o.nativeNode.addComponent(xi), 
o.driver = new li(o.nativeRenderer), o;
}
return o(e, t), e;
}(ci);
t.MaskType = void 0, (bi = t.MaskType || (t.MaskType = {})).Rect = "Rect", bi.Ellipse = "Ellipse", 
bi.Image = "Image", bi.Graphics = "Graphics";
var wi, Si, Ri = {
type: function(t, e) {
return t.setMaskType(e);
},
inverted: function(t, e) {
return t.setMaskInverted(e);
},
maskImage: function(t, e) {
return t.setMaskImage(e);
},
maskTexture: function(t, e) {
return t.setMaskTexture(e);
},
alphaThreshold: function(t, e) {
return t.setMaskAlphaThreshold(e);
},
maskGraphics: function(t, e) {
return t.setMaskGraphics(e);
},
enabled: function(t, e) {
return t.setMaskEnabled(e);
}
};
function Bi(e) {
switch (e) {
case t.BlendFactor.One:
return cc.macro.BlendFactor.ONE;

case t.BlendFactor.Zero:
return cc.macro.BlendFactor.ZERO;

case t.BlendFactor.SrcAlpha:
return cc.macro.BlendFactor.SRC_ALPHA;

case t.BlendFactor.SrcColor:
return cc.macro.BlendFactor.SRC_COLOR;

case t.BlendFactor.DstAlpha:
return cc.macro.BlendFactor.DST_ALPHA;

case t.BlendFactor.DstColor:
return cc.macro.BlendFactor.DST_COLOR;

case t.BlendFactor.OneMinusSrcAlpha:
return cc.macro.BlendFactor.ONE_MINUS_SRC_ALPHA;

case t.BlendFactor.OneMinusSrcColor:
return cc.macro.BlendFactor.ONE_MINUS_SRC_COLOR;

case t.BlendFactor.OneMinusDstAlpha:
return cc.macro.BlendFactor.ONE_MINUS_DST_ALPHA;

case t.BlendFactor.OneMinusDstColor:
return cc.macro.BlendFactor.ONE_MINUS_DST_COLOR;

default:
return cc.macro.BlendFactor.SRC_ALPHA;
}
}
function Ti(e) {
switch (e) {
case t.PixelFormat.RGBA8888:
return cc.Texture2D.PixelFormat.RGBA8888;

case t.PixelFormat.RGB888:
return cc.Texture2D.PixelFormat.RGB888;

case t.PixelFormat.RGB565:
return cc.Texture2D.PixelFormat.RGB565;

case t.PixelFormat.RGBA4444:
return cc.Texture2D.PixelFormat.RGBA4444;

case t.PixelFormat.A8:
return cc.Texture2D.PixelFormat.A8;

case t.PixelFormat.I8:
return cc.Texture2D.PixelFormat.I8;

case t.PixelFormat.AI88:
return cc.Texture2D.PixelFormat.AI8;

default:
return cc.Texture2D.PixelFormat.RGBA8888;
}
}
function Fi(e) {
switch (e) {
case t.TextureFilter.Nearest:
return cc.Texture2D.Filter.NEAREST;

case t.TextureFilter.Linear:
default:
return cc.Texture2D.Filter.LINEAR;
}
}
function Mi(e) {
switch (e) {
case t.TextureWrapMode.Repeat:
return cc.Texture2D.WrapMode.REPEAT;

case t.TextureWrapMode.ClampToEdge:
return cc.Texture2D.WrapMode.CLAMP_TO_EDGE;

case t.TextureWrapMode.MirroredRepeat:
return cc.Texture2D.WrapMode.MIRRORED_REPEAT;

default:
return cc.Texture2D.WrapMode.CLAMP_TO_EDGE;
}
}
t.BlendFactor = void 0, (wi = t.BlendFactor || (t.BlendFactor = {}))[wi.One = 0] = "One", 
wi[wi.Zero = 1] = "Zero", wi[wi.SrcAlpha = 2] = "SrcAlpha", wi[wi.SrcColor = 3] = "SrcColor", 
wi[wi.DstAlpha = 4] = "DstAlpha", wi[wi.DstColor = 5] = "DstColor", wi[wi.OneMinusSrcAlpha = 6] = "OneMinusSrcAlpha", 
wi[wi.OneMinusSrcColor = 7] = "OneMinusSrcColor", wi[wi.OneMinusDstAlpha = 8] = "OneMinusDstAlpha", 
wi[wi.OneMinusDstColor = 9] = "OneMinusDstColor";
var Ii, Di = ((Si = {})[t.MaskType.Rect] = cc.Mask.Type.RECT, Si[t.MaskType.Ellipse] = cc.Mask.Type.ELLIPSE, 
Si[t.MaskType.Image] = cc.Mask.Type.IMAGE_STENCIL, Si[t.MaskType.Graphics] = void 0, 
Si), Ni = function(e) {
function n(t) {
var o = e.call(this, t) || this;
return o.nativeRenderer = o.nativeNode.getComponent(cc.Mask) || o.nativeNode.addComponent(cc.Mask), 
o;
}
return o(n, e), n.prototype.setMaskType = function(e) {
var o = this;
this.nativeRenderer.enabledInHierarchy || !cc.isValid(this.nativeRenderer) ? this.nativeRenderer.type !== Di[e] && (this.nativeRenderer.type = Di[e], 
e === t.MaskType.Image && (this._maskImageUrl ? this._loadMaskImage(this._maskImageUrl) : this._pendingTextureData && this._applyTextureData(this._pendingTextureData))) : this.nativeRenderer.scheduleOnce(function() {
return o.setMaskType(e);
});
}, n.prototype.setMaskInverted = function(t) {
this.nativeRenderer.inverted = t;
}, n.prototype.setMaskImage = function(t) {
if (!t) return this._pendingTextureData = void 0, this._clearDynamicTexture(), this.nativeRenderer.spriteFrame = void 0, 
void (this._maskImageUrl = void 0);
this._maskImageUrl !== t && (this._maskImageUrl = t, this._pendingTextureData = void 0, 
this._clearDynamicTexture(), this.nativeRenderer.type === cc.Mask.Type.IMAGE_STENCIL && this._loadMaskImage(t));
}, n.prototype._loadMaskImage = function(e) {
var o = this;
this.loadAsset("maskSprite", e, t.LoaderAssetType.SpriteFrame, function(t) {
o._maskImageUrl === e && (o.nativeRenderer.spriteFrame = t);
});
}, n.prototype.setMaskTexture = function(t) {
if (!t) return this._maskImageUrl = void 0, this._pendingTextureData = void 0, this._clearDynamicTexture(), 
void (this.nativeRenderer.spriteFrame = void 0);
this._maskImageUrl = void 0, this._pendingTextureData = t, this.nativeRenderer.type === cc.Mask.Type.IMAGE_STENCIL && this._applyTextureData(t);
}, n.prototype._applyTextureData = function(e) {
var o, n, i = null !== (o = e.format) && void 0 !== o ? o : t.PixelFormat.RGBA8888;
if (!e.pixels || !e.pixels.length || e.width <= 0 || e.height <= 0) this._rejectTextureDataApply(); else {
var r = e.width * e.height * Fn(i);
if (e.pixels.length !== r) return "[CocosMaskNode] pixels 大小不匹配: 期望 ".concat(r, " 字节 "), 
"(".concat(e.width, "x").concat(e.height, ", ").concat(t.PixelFormat[i], "), 实际 ").concat(e.pixels.length, " 字节"), 
void this._rejectTextureDataApply();
var s = Ti(i), a = Fi(null !== (n = e.filter) && void 0 !== n ? n : t.TextureFilter.Linear);
if (this._dynamicTex) this._dynamicTex.initWithData(e.pixels, s, e.width, e.height), 
this._dynamicTex.setFilters(a, a), this._dynamicSpriteFrame.setTexture(this._dynamicTex), 
this.nativeRenderer.spriteFrame = this._dynamicSpriteFrame; else {
var l = new cc.Texture2D();
l.packable = !1, l.setFilters(a, a), l.initWithData(e.pixels, s, e.width, e.height), 
this._dynamicTex = l, this._dynamicSpriteFrame = new cc.SpriteFrame(l), this.nativeRenderer.spriteFrame = this._dynamicSpriteFrame;
}
}
}, n.prototype._clearDynamicTexture = function() {
this._dynamicTex && (this._dynamicSpriteFrame && (this.nativeRenderer.spriteFrame === this._dynamicSpriteFrame && (this.nativeRenderer.spriteFrame = void 0), 
this._dynamicSpriteFrame = void 0), this._dynamicTex.destroy(), this._dynamicTex = void 0);
}, n.prototype._rejectTextureDataApply = function() {
this._pendingTextureData = void 0, this._clearDynamicTexture(), this.nativeRenderer.spriteFrame = void 0;
}, n.prototype.setMaskAlphaThreshold = function(t) {
this.nativeRenderer.alphaThreshold = t;
}, n.prototype.setMaskGraphics = function(t) {
var e = this, o = this.nativeRenderer._graphics;
if (o) {
this._driver || (this._driver = new li(o));
var n = function() {
e.nativeRenderer.enabledInHierarchy && (e._driver.execute(t), e.nativeRenderer.setVertsDirty());
};
this.nativeRenderer._updateGraphics = n, n();
} else this.nativeRenderer.scheduleOnce(function() {
return e.setMaskGraphics(t);
});
}, n.prototype.setMaskEnabled = function(t) {
this.nativeRenderer.enabled = t;
}, n.prototype.disposeRender = function() {
cc.isValid(this.nativeRenderer) && (this.nativeRenderer.unscheduleAllCallbacks(), 
ai(this.nativeRenderer._graphics)), this._pendingTextureData = void 0, this._clearDynamicTexture(), 
this._driver = void 0, e.prototype.disposeRender.call(this);
}, n.prototype.destroyNative = function() {
cc.isValid(this.nativeRenderer) && (ai(this.nativeRenderer._graphics), this.nativeRenderer._spriteFrame = void 0), 
this._pendingTextureData = void 0, this._clearDynamicTexture(), e.prototype.destroyNative.call(this);
}, n;
}(Un);
t.ScrollControl = void 0, (Ii = t.ScrollControl || (t.ScrollControl = {}))[Ii.Normal = 0] = "Normal", 
Ii[Ii.Refresh = 1] = "Refresh";
var Pi, Ei, Li, Wi = {
horizontal: function(t, e) {
return t.setScrollViewHorizontal(e);
},
vertical: function(t, e) {
return t.setScrollViewVertical(e);
},
inertia: function(t, e) {
return t.setScrollViewInertia(e);
},
elastic: function(t, e) {
return t.setScrollViewElastic(e);
},
bounceDuration: function(t, e) {
return t.setScrollViewBounceDuration(e);
},
brake: function(t, e) {
return t.setScrollViewBrake(e);
},
content: {
name: function(t, e) {
return t.setScrollViewContentName(e);
},
x: function(t, e) {
return t.setScrollViewContentX(e);
},
y: function(t, e) {
return t.setScrollViewContentY(e);
},
itemCount: function(t, e) {
return t.setItemCount(e);
},
itemHeight: function(t, e) {
return t.setItemHeight(e);
},
bufferSize: function(t, e) {
return t.setBufferSize(e);
},
itemRender: function(t, e) {
return t.setOnItemRender(e);
},
scrollCtrl: function(t, e) {
return t.setScrollCtrl(e);
},
scrollTarget: function(t, e) {
e >= 0 && t.scrollToIndex(e);
}
}
}, Vi = {
scrollBegan: function(t, e) {
return t.setOnScrollBegan(e);
},
scrollEnded: function(t, e) {
return t.setOnScrollEnded(e);
},
scrolling: function(t, e) {
return t.setOnScrolling(e);
}
};
t.RenderType = void 0, (Pi = t.RenderType || (t.RenderType = {}))[Pi.Simple = 0] = "Simple", 
Pi[Pi.Sliced = 1] = "Sliced", Pi[Pi.Tiled = 2] = "Tiled", Pi[Pi.Filled = 3] = "Filled", 
Pi[Pi.Mesh = 4] = "Mesh", t.SpriteFillType = void 0, (Ei = t.SpriteFillType || (t.SpriteFillType = {}))[Ei.Horizontal = 0] = "Horizontal", 
Ei[Ei.Vertical = 1] = "Vertical", Ei[Ei.Radial = 2] = "Radial", t.SizeMode = void 0, 
(Li = t.SizeMode || (t.SizeMode = {}))[Li.Custom = 0] = "Custom", Li[Li.Trimmed = 1] = "Trimmed", 
Li[Li.Raw = 2] = "Raw";
var Oi, ki, Gi, zi = {
img: function(t, e) {
return t.setImage(e);
},
atlas: function(t, e) {
return t.setAtlas(e);
},
frameName: function(t, e) {
return t.setFrameName(e);
},
defaultImg: function(t, e) {
return t.setDefaultImage(e);
},
renderType: function(t, e) {
return t.setRenderType(e);
},
sizeMode: function(t, e) {
return t.setSizeMode(e);
},
dstBlendFactor: function(t, e) {
return t.setDstBlendFactor(e);
},
srcBlendFactor: function(t, e) {
return t.setSrcBlendFactor(e);
},
trim: function(t, e) {
return t.setTrim(e);
},
fillType: function(t, e) {
return t.setFillType(e);
},
fillCenterX: function(t, e) {
return t.setFillCenterX(e);
},
fillCenterY: function(t, e) {
return t.setFillCenterY(e);
},
fillStart: function(t, e) {
return t.setFillStart(e);
},
fillRange: function(t, e) {
return t.setFillRange(e);
},
hideUntilLoaded: function(t, e) {
return t.setHideUntilLoaded(e);
}
}, ji = {
fadeTime: function(t, e) {
return t.setFadeTime(e);
},
minSeg: function(t, e) {
return t.setMinSeg(e);
},
stroke: function(t, e) {
return t.setStroke(e);
},
texture: function(t, e) {
return t.setTexture(e);
},
streakColor: function(t, e) {
return t.setStreakColor(e);
},
fastMode: function(t, e) {
return t.setFastMode(e);
},
srcBlendFactor: function(t, e) {
return t.setSrcBlendFactor(e);
},
dstBlendFactor: function(t, e) {
return t.setDstBlendFactor(e);
}
};
t.ParticlePositionType = void 0, (Oi = t.ParticlePositionType || (t.ParticlePositionType = {}))[Oi.Free = 0] = "Free", 
Oi[Oi.Relative = 1] = "Relative", Oi[Oi.Grouped = 2] = "Grouped", t.ParticleEmitterMode = void 0, 
(ki = t.ParticleEmitterMode || (t.ParticleEmitterMode = {}))[ki.Gravity = 0] = "Gravity", 
ki[ki.Radius = 1] = "Radius", t.ParticleControl = void 0, (Gi = t.ParticleControl || (t.ParticleControl = {}))[Gi.Normal = 0] = "Normal", 
Gi[Gi.Stop = 1] = "Stop", Gi[Gi.Reset = 2] = "Reset";
var qi, Hi, Ui, Yi = {
file: function(t, e) {
return t.setFile(e);
},
particleImg: function(t, e) {
return t.setParticleAsset(e);
},
atlas: function(t, e) {
return t.setAtlas(e);
},
frameName: function(t, e) {
return t.setFrameName(e);
},
duration: function(t, e) {
return t.setDuration(e);
},
emissionRate: function(t, e) {
return t.setEmissionRate(e);
},
life: function(t, e) {
return t.setLife(e);
},
totalParticles: function(t, e) {
return t.setTotalParticles(e);
},
startRgb: function(t, e) {
return t.setStartRgb(e);
},
startAlpha: function(t, e) {
return t.setStartAlpha(e);
},
startRgbVar: function(t, e) {
return t.setStartRgbVar(e);
},
startAlphaVar: function(t, e) {
return t.setStartAlphaVar(e);
},
endRgb: function(t, e) {
return t.setEndRgb(e);
},
endAlpha: function(t, e) {
return t.setEndAlpha(e);
},
endRgbVar: function(t, e) {
return t.setEndRgbVar(e);
},
endAlphaVar: function(t, e) {
return t.setEndAlphaVar(e);
},
particleAngle: function(t, e) {
return t.setParticleAngle(e);
},
startSize: function(t, e) {
return t.setStartSize(e);
},
endSize: function(t, e) {
return t.setEndSize(e);
},
startSpin: function(t, e) {
return t.setStartSpin(e);
},
endSpin: function(t, e) {
return t.setEndSpin(e);
},
posVar: function(t, e) {
return t.setPosVar(e.x, e.y);
},
positionType: function(t, e) {
return t.setPositionType(e);
},
emitterMode: function(t, e) {
return t.setEmitterMode(e);
},
gravity: function(t, e) {
return t.setGravity(e.x, e.y);
},
speed: function(t, e) {
return t.setSpeed(e);
},
tangentialAccel: function(t, e) {
return t.setTangentialAccel(e);
},
radialAccel: function(t, e) {
return t.setRadialAccel(e);
},
rotationIsDir: function(t, e) {
return t.setRotationIsDir(e);
},
startRadius: function(t, e) {
return t.setStartRadius(e);
},
endRadius: function(t, e) {
return t.setEndRadius(e);
},
rotatePerS: function(t, e) {
return t.setRotatePerS(e);
},
srcBlendFactor: function(t, e) {
return t.setSrcBlendFactor(e);
},
dstBlendFactor: function(t, e) {
return t.setDstBlendFactor(e);
},
particleCtrl: function(t, e) {
return t.setParticleCtrl(e);
}
};
t.EditBoxInputMode = void 0, (qi = t.EditBoxInputMode || (t.EditBoxInputMode = {}))[qi.ANY = 0] = "ANY", 
qi[qi.EMAIL_ADDR = 1] = "EMAIL_ADDR", qi[qi.NUMERIC = 2] = "NUMERIC", qi[qi.PHONENUMBER = 3] = "PHONENUMBER", 
qi[qi.URL = 4] = "URL", qi[qi.DECIMAL = 5] = "DECIMAL", qi[qi.SINGLE_LINE = 6] = "SINGLE_LINE", 
t.EditBoxInputFlag = void 0, (Hi = t.EditBoxInputFlag || (t.EditBoxInputFlag = {}))[Hi.PASSWORD = 0] = "PASSWORD", 
Hi[Hi.SENSITIVE = 1] = "SENSITIVE", Hi[Hi.INITIAL_CAPS_WORD = 2] = "INITIAL_CAPS_WORD", 
Hi[Hi.INITIAL_CAPS_SENTENCE = 3] = "INITIAL_CAPS_SENTENCE", Hi[Hi.INITIAL_CAPS_ALL_CHARACTERS = 4] = "INITIAL_CAPS_ALL_CHARACTERS", 
Hi[Hi.LOWERCASE_ALL_CHARACTERS = 5] = "LOWERCASE_ALL_CHARACTERS", t.EditBoxReturnType = void 0, 
(Ui = t.EditBoxReturnType || (t.EditBoxReturnType = {}))[Ui.DEFAULT = 0] = "DEFAULT", 
Ui[Ui.DONE = 1] = "DONE", Ui[Ui.SEND = 2] = "SEND", Ui[Ui.SEARCH = 3] = "SEARCH", 
Ui[Ui.GO = 4] = "GO";
var Xi, Ji = {
text: function(t, e) {
return t.setText(e);
},
backgroundImage: function(t, e) {
return t.setBackgroundImage(e);
},
returnType: function(t, e) {
return t.setReturnType(e);
},
inputFlag: function(t, e) {
return t.setInputFlag(e);
},
inputMode: function(t, e) {
return t.setInputMode(e);
},
fontSize: function(t, e) {
return t.setFontSize(e);
},
lineHeight: function(t, e) {
return t.setLineHeight(e);
},
fontRgb: function(t, e) {
return t.setFontRgb(e);
},
fontAlpha: function(t, e) {
return t.setFontAlpha(e);
},
placeholder: function(t, e) {
return t.setPlaceholder(e);
},
placeholderFontSize: function(t, e) {
return t.setPlaceholderFontSize(e);
},
placeholderFontRgb: function(t, e) {
return t.setPlaceholderFontRgb(e);
},
placeholderFontAlpha: function(t, e) {
return t.setPlaceholderFontAlpha(e);
},
backgroundRgb: function(t, e) {
return t.setBackgroundRgb(e);
},
backgroundAlpha: function(t, e) {
return t.setBackgroundAlpha(e);
},
maxLength: function(t, e) {
return t.setMaxLength(e);
}
}, Qi = {
editBegin: function(t, e) {
return t.setOnEditBegin(e);
},
editChange: function(t, e) {
return t.setOnEditChange(e);
},
editEnd: function(t, e) {
return t.setOnEditEnd(e);
}
};
t.ShadowCastingMode = void 0, (Xi = t.ShadowCastingMode || (t.ShadowCastingMode = {}))[Xi.Off = 0] = "Off", 
Xi[Xi.On = 1] = "On";
var Ki, Zi = {
mesh: function(t, e) {
return t.setMesh(e);
},
shadowCastingMode: function(t, e) {
return t.setShadowCastingMode(e);
},
receiveShadows: function(t, e) {
return t.setReceiveShadows(e);
}
}, $i = {
text: function(t, e) {
return t.setText(e);
},
fontSize: function(t, e) {
return t.setFontSize(e);
},
horizontalAlign: function(t, e) {
return t.setHorizontalAlign(e);
},
maxWidth: function(t, e) {
return t.setMaxWidth(e);
},
lineHeight: function(t, e) {
return t.setLineHeight(e);
},
fontFamily: function(t, e) {
return t.setFontFamily(e);
},
font: function(t, e) {
return t.setFont(e);
},
useSystemFont: function(t, e) {
return t.setUseSystemFont(e);
},
cacheMode: function(t, e) {
return t.setCacheMode(e);
},
imageAtlas: function(t, e) {
return t.setImageAtlas(e);
},
handleTouchEvent: function(t, e) {
return t.setHandleTouchEvent(e);
}
}, tr = {
click: function(t, e) {
return t.setOnClick(e);
}
}, er = function(t, e) {
return r(r(r({}, Bn), t), {
event: r(r({}, Bn.event), e)
});
}, or = ((Ki = {})[t.RenderNodeType.Node] = er({}), Ki[t.RenderNodeType.Sprite] = er(zi), 
Ki[t.RenderNodeType.Text] = er(Qn), Ki[t.RenderNodeType.Spine] = er(Zn, $n), Ki[t.RenderNodeType.Graphics] = er(si), 
Ki[t.RenderNodeType.TraceGraphics] = er(si), Ki[t.RenderNodeType.Mask] = er(Ri), 
Ki[t.RenderNodeType.ScrollView] = er(Wi, Vi), Ki[t.RenderNodeType.Camera] = er(Ln), 
Ki[t.RenderNodeType.Streak] = er(ji), Ki[t.RenderNodeType.Particle] = er(Yi), Ki[t.RenderNodeType.EditBox] = er(Ji, Qi), 
Ki[t.RenderNodeType.Mesh] = er(Zi), Ki[t.RenderNodeType.Texture2D] = er(In), Ki[t.RenderNodeType.RichText] = er($i, tr), 
Ki);
function nr(t) {
return or[t];
}
var ir, rr, sr = new Set([ "name", "event", "slots" ]);
function ar(t, e, o, n, i) {
for (var r in e) if (!(null == n ? void 0 : n.has(r))) {
var s = e[r], a = o[r];
if ("function" == typeof a) {
var l = s;
Array.isArray(s) && s.length >= 1 && "function" == typeof s[0] && (l = s[0](i)), 
a(t, l);
} else "object" == typeof a && null !== a && "object" == typeof s && null !== s && ar(t, s, a, void 0, i);
}
}
function lr(t, e, o, n) {
var i, r, s = e(t.type);
if (void 0 !== o && void 0 !== n && s.initRender(o, n), t.props.name && (s.nodeName = t.props.name, 
s.setName(t.props.name)), ar(s, t.props, nr(t.type), sr, o), t.children) try {
for (var a = h(t.children), l = a.next(); !l.done; l = a.next()) {
var c = l.value;
s.addChild(lr(c, e, o, n));
}
} catch (t) {
i = {
error: t
};
} finally {
try {
l && !l.done && (r = a.return) && r.call(a);
} finally {
if (i) throw i.error;
}
}
return s;
}
function cr(t, e, o, n) {
var i = e - t;
return i <= 0 ? (n.min = 0, n.max = 0, n) : (n.max = Math.max(0, o), n.min = Math.min(0, o - i), 
n);
}
function ur(t, e, o) {
return -(Math.max(t - e.max, 0) + Math.min(t - e.min, 0)) * o;
}
function hr(t, e) {
return Math.max(e.min, Math.min(e.max, t));
}
function dr(t, e) {
return t > e.max || t < e.min;
}
function pr(t, e, o, n, i, r, s) {
var a = dr(t, o), l = ur(t, o, r), c = e * Math.exp(-i * n) + l * n, u = t + c * n;
a && (t > o.max && u <= o.max ? (u = o.max, c = 0) : t < o.min && u >= o.min && (u = o.min, 
c = 0));
var h = Math.abs(c) < s && !dr(u, o);
return h && (c = 0, u = hr(u, o)), [ u, c, h ];
}
function mr(t, e, o, n) {
var i = t > o.max, r = t < o.min;
return i && e > 0 || r && e < 0 ? e * n : e;
}
function _r(e, o, n) {
var i = Math.abs(e), r = Math.abs(o);
return i < n && r < n ? t.ScrollDirectionLock.None : i > r ? t.ScrollDirectionLock.Horizontal : t.ScrollDirectionLock.Vertical;
}
function fr(t, e, o, n, i) {
return o <= 0 || n <= 0 ? [ 0, -1 ] : [ Math.max(0, Math.floor(-t / o) - i), Math.min(n - 1, Math.ceil((-t + e) / o) + i) ];
}
function yr(t, e) {
return t * e;
}
t.ScrollPhase = void 0, (ir = t.ScrollPhase || (t.ScrollPhase = {}))[ir.Idle = 0] = "Idle", 
ir[ir.Dragging = 1] = "Dragging", ir[ir.Decelerating = 2] = "Decelerating", ir[ir.Animating = 3] = "Animating", 
t.ScrollDirectionLock = void 0, (rr = t.ScrollDirectionLock || (t.ScrollDirectionLock = {}))[rr.None = 0] = "None", 
rr[rr.Horizontal = 1] = "Horizontal", rr[rr.Vertical = 2] = "Vertical";
var vr, gr = function() {
function e(e) {
this.horizontal = !1, this.vertical = !0, this.inertia = !0, this.elastic = !0, 
this.brake = .75, this.bounceDuration = .23, this.initialContentX = 0, this.initialContentY = 0, 
this._itemCount = 0, this._itemHeight = 100, this._bufferSize = 2, this._offsetX = 0, 
this._offsetY = 0, this._velocityX = 0, this._velocityY = 0, this._phase = t.ScrollPhase.Idle, 
this._visibleStart = -1, this._visibleEnd = -1, this._lastTouchX = 0, this._lastTouchY = 0, 
this._totalDragX = 0, this._totalDragY = 0, this._directionLock = t.ScrollDirectionLock.None, 
this._slopExceeded = !1, this._lastPhase = t.ScrollPhase.Idle, this._velIndex = 0, 
this._velCount = 0, this._animStartOffset = 0, this._animTargetOffset = 0, this._animDuration = .3, 
this._animElapsed = 0, this._cachedSize = {
width: 0,
height: 0
}, this._cachedPos = {
x: 0,
y: 0
}, this._cachedDelta = {
dx: 0,
dy: 0
}, this._cachedBoundsX = {
min: 0,
max: 0
}, this._cachedBoundsY = {
min: 0,
max: 0
}, this._host = e, this._velSamples = [];
for (var o = 0; o < 5; o++) this._velSamples[o] = {
dx: 0,
dy: 0,
dt: 0
};
}
return Object.defineProperty(e.prototype, "itemCount", {
get: function() {
return this._itemCount;
},
set: function(t) {
this._itemCount = t, this._invalidateVisible();
},
enumerable: !1,
configurable: !0
}), Object.defineProperty(e.prototype, "itemHeight", {
get: function() {
return this._itemHeight;
},
set: function(t) {
this._itemHeight = t, this._invalidateVisible();
},
enumerable: !1,
configurable: !0
}), Object.defineProperty(e.prototype, "bufferSize", {
get: function() {
return this._bufferSize;
},
set: function(t) {
this._bufferSize = t, this._invalidateVisible();
},
enumerable: !1,
configurable: !0
}), e.prototype._invalidateVisible = function() {
this._visibleStart = -1, this._visibleEnd = -1;
}, Object.defineProperty(e.prototype, "offsetX", {
get: function() {
return this._offsetX;
},
enumerable: !1,
configurable: !0
}), Object.defineProperty(e.prototype, "offsetY", {
get: function() {
return this._offsetY;
},
enumerable: !1,
configurable: !0
}), Object.defineProperty(e.prototype, "velocityX", {
get: function() {
return this._velocityX;
},
enumerable: !1,
configurable: !0
}), Object.defineProperty(e.prototype, "velocityY", {
get: function() {
return this._velocityY;
},
enumerable: !1,
configurable: !0
}), Object.defineProperty(e.prototype, "phase", {
get: function() {
return this._phase;
},
enumerable: !1,
configurable: !0
}), Object.defineProperty(e.prototype, "isVirtualMode", {
get: function() {
return this.itemCount > 0;
},
enumerable: !1,
configurable: !0
}), Object.defineProperty(e.prototype, "visibleStart", {
get: function() {
return this._visibleStart;
},
enumerable: !1,
configurable: !0
}), Object.defineProperty(e.prototype, "visibleEnd", {
get: function() {
return this._visibleEnd;
},
enumerable: !1,
configurable: !0
}), e.prototype.invalidateVisibleRange = function() {
this._invalidateVisible();
}, e.prototype.resetScrollState = function() {
this._offsetX = 0, this._offsetY = 0, this._velocityX = 0, this._velocityY = 0, 
this._phase = t.ScrollPhase.Idle;
}, e.prototype.syncOffsetFromContentPosition = function(t, e) {
this._offsetX = t - this.initialContentX, this._offsetY = this.initialContentY - e, 
this._velocityX = 0, this._velocityY = 0;
}, e.prototype.getContentSize = function() {
var t = this._cachedSize;
if (this.isVirtualMode) {
var e = yr(this.itemCount, this.itemHeight);
this.horizontal ? (t.width = e, t.height = this._host.getViewportHeight()) : (t.width = this._host.getViewportWidth(), 
t.height = e);
} else {
var o = this._host.getNonVirtualContentSize();
t.width = o.width, t.height = o.height;
}
return t;
}, e.prototype.getContentPosition = function() {
var t = this._cachedPos;
return t.x = this.initialContentX + this._offsetX, t.y = this.initialContentY - this._offsetY, 
t;
}, e.prototype._computeBoundsX = function() {
var t = this.getContentSize(), e = this.initialContentX - this._host.getContentTopBaseX();
return cr(this._host.getViewportWidth(), t.width, e, this._cachedBoundsX);
}, e.prototype._computeBoundsY = function() {
var t = this.getContentSize(), e = this.initialContentY - this._host.getContentTopBaseY();
return cr(this._host.getViewportHeight(), t.height, e, this._cachedBoundsY);
}, e.prototype.onDragStart = function(e, o) {
this._phase = t.ScrollPhase.Dragging, this._velocityX = 0, this._velocityY = 0, 
this._lastTouchX = e, this._lastTouchY = o, this._totalDragX = 0, this._totalDragY = 0, 
this._directionLock = t.ScrollDirectionLock.None, this._slopExceeded = !1, this._velIndex = 0, 
this._velCount = 0;
}, e.prototype.onDragMove = function(e, o, n) {
var i = e - this._lastTouchX, r = -(o - this._lastTouchY);
if (this._totalDragX += i, this._totalDragY += r, !this._slopExceeded) {
if (Math.abs(this._totalDragX) + Math.abs(this._totalDragY) < 7) {
this._lastTouchX = e, this._lastTouchY = o;
var s = this._cachedDelta;
return s.dx = 0, s.dy = 0, s;
}
this._slopExceeded = !0;
}
this._directionLock === t.ScrollDirectionLock.None && (this._directionLock = _r(this._totalDragX, this._totalDragY, 5)), 
this._directionLock === t.ScrollDirectionLock.Horizontal && (r = 0), this._directionLock === t.ScrollDirectionLock.Vertical && (i = 0), 
this.horizontal || (i = 0), this.vertical || (r = 0);
var a = this._computeBoundsX(), l = this._computeBoundsY();
if (this.elastic ? (i = mr(this._offsetX, i, a, .5), r = mr(this._offsetY, r, l, .5)) : (i = hr(this._offsetX + i, a) - this._offsetX, 
r = hr(this._offsetY + r, l) - this._offsetY), this._offsetX += i, this._offsetY += r, 
this.inertia) {
var c = this._velSamples[this._velIndex];
c.dx = i, c.dy = r, c.dt = n, this._velIndex = (this._velIndex + 1) % 5, this._velCount < 5 && this._velCount++;
}
this._lastTouchX = e, this._lastTouchY = o;
var u = this._cachedDelta;
return u.dx = i, u.dy = r, u;
}, e.prototype.onDragEnd = function() {
this._computeAverageVelocity();
var e = dr(this._offsetX, this._computeBoundsX()), o = dr(this._offsetY, this._computeBoundsY()), n = Math.abs(this._velocityX) > .5 || Math.abs(this._velocityY) > .5;
return (e || o) && this.elastic || n && this.inertia ? this._phase = t.ScrollPhase.Decelerating : this._phase = t.ScrollPhase.Idle, 
this._phase;
}, e.prototype.onFrameUpdate = function(e) {
e = Math.min(e, .1), this._phase === t.ScrollPhase.Decelerating ? this._updatePhysics(e) : this._phase === t.ScrollPhase.Animating && this._updateAnimation(e);
var o = this._lastPhase !== t.ScrollPhase.Idle && this._phase === t.ScrollPhase.Idle;
return this._lastPhase = this._phase, o;
}, e.prototype.scrollToIndex = function(e, o) {
if (this.isVirtualMode) {
var n = hr(-e * this.itemHeight, this.horizontal ? this._computeBoundsX() : this._computeBoundsY());
o ? (this._animStartOffset = this.horizontal ? this._offsetX : this._offsetY, this._animTargetOffset = n, 
this._animElapsed = 0, this._phase = t.ScrollPhase.Animating, this._velocityX = 0, 
this._velocityY = 0) : this.horizontal ? (this._offsetX = n, this._velocityX = 0) : (this._offsetY = n, 
this._velocityY = 0);
}
}, e.prototype.computeNewVisibleRange = function() {
if (!this.isVirtualMode) return null;
var t = this.horizontal ? this._host.getViewportWidth() : this._host.getViewportHeight(), e = d(fr(this.horizontal ? this._offsetX : this._offsetY, t, this.itemHeight, this.itemCount, this.bufferSize), 2), o = e[0], n = e[1];
return o === this._visibleStart && n === this._visibleEnd ? null : (this._visibleStart = o, 
this._visibleEnd = n, [ o, n ]);
}, e.prototype.reset = function() {
this._offsetX = 0, this._offsetY = 0, this._velocityX = 0, this._velocityY = 0, 
this._phase = t.ScrollPhase.Idle, this._lastPhase = t.ScrollPhase.Idle, this._directionLock = t.ScrollDirectionLock.None, 
this._slopExceeded = !1, this._totalDragX = 0, this._totalDragY = 0, this._velIndex = 0, 
this._velCount = 0, this._visibleStart = -1, this._visibleEnd = -1, this.horizontal = !1, 
this.vertical = !0, this.inertia = !0, this.elastic = !0, this.brake = .75, this.bounceDuration = .23, 
this.initialContentX = 0, this.initialContentY = 0, this._itemCount = 0, this._itemHeight = 100, 
this._bufferSize = 2;
}, e.prototype._updatePhysics = function(e) {
var o = this._computeBoundsX(), n = this._computeBoundsY(), i = 2 + 13 * this.brake, r = 15 / (this.bounceDuration * this.bounceDuration), s = !0, a = !0;
if (this.horizontal) {
var l = d(pr(this._offsetX, this._velocityX, o, e, i, r, .5), 3), c = l[0], u = l[1], h = l[2];
this._offsetX = c, this._velocityX = u, s = h;
}
if (this.vertical) {
var p = d(pr(this._offsetY, this._velocityY, n, e, i, r, .5), 3);
c = p[0], u = p[1], h = p[2], this._offsetY = c, this._velocityY = u, a = h;
}
s && a && (this._phase = t.ScrollPhase.Idle);
}, e.prototype._updateAnimation = function(e) {
this._animElapsed += e;
var o = Math.min(this._animElapsed / this._animDuration, 1), n = 1 - Math.pow(1 - o, 3), i = this._animStartOffset + (this._animTargetOffset - this._animStartOffset) * n;
this.horizontal ? this._offsetX = i : this._offsetY = i, o >= 1 && (this._phase = t.ScrollPhase.Idle);
}, e.prototype._computeAverageVelocity = function() {
if (0 !== this._velCount) {
for (var t = 0, e = 0, o = 0, n = 0; n < this._velCount; n++) {
var i = this._velSamples[n];
t += i.dx, e += i.dy, o += i.dt;
}
o > 0 && (this._velocityX = t / o, this._velocityY = e / o), this._velIndex = 0, 
this._velCount = 0;
}
}, e;
}(), Ar = function(e) {
function n(t) {
var o = e.call(this, t) || this;
return o._contentNode = null, o._contentName = "", o._scheduled = !1, o._boundUpdate = function(t) {
return o.update(t);
}, o._cachedHostSize = {
width: 0,
height: 0
}, o._contentBindRetries = 0, o._contentBindScheduled = !1, o._boundTryBindContent = function() {
return o._tryBindContent();
}, o._onScrollBegan = null, o._onScrollEnded = null, o._onScrolling = null, o._scrollBeganEmitted = !1, 
o._dispatchingCancel = !1, o._savedContentState = null, o._onItemRender = null, 
o._itemPool = [], o._activeItems = new Map(), o._nodeFactory = function(t) {
return o.universe.render.createRenderNode(t);
}, o._cachedScrollData = {
contentX: 0,
contentY: 0,
eid: 0,
eventType: "",
worldId: ""
}, o._driver = new gr(o), o._bindTouchEvents(), o;
}
return o(n, e), n.prototype.getViewportWidth = function() {
return this.nativeNode.width;
}, n.prototype.getViewportHeight = function() {
return this.nativeNode.height;
}, n.prototype.getContentTopBaseY = function() {
var t = (1 - this.nativeNode.anchorY) * this.nativeNode.height, e = this._contentNode;
return e ? t - (1 - e.anchorY) * e.height : t;
}, n.prototype.getContentTopBaseX = function() {
var t = -this.nativeNode.anchorX * this.nativeNode.width, e = this._contentNode;
return e ? t + e.anchorX * e.width : t;
}, n.prototype.getNonVirtualContentSize = function() {
var t = this._cachedHostSize;
return this._contentNode ? (t.width = this._contentNode.width, t.height = this._contentNode.height) : (t.width = 0, 
t.height = 0), t;
}, n.prototype._bindTouchEvents = function() {
var t = this.nativeNode;
t.on(cc.Node.EventType.TOUCH_START, this._onTouchStart, this, !0), t.on(cc.Node.EventType.TOUCH_MOVE, this._onTouchMove, this, !0), 
t.on(cc.Node.EventType.TOUCH_END, this._onTouchEnd, this, !0), t.on(cc.Node.EventType.TOUCH_CANCEL, this._onTouchEnd, this, !0), 
t.on(cc.Node.EventType.SIZE_CHANGED, this._onViewportSizeChanged, this);
}, n.prototype._onViewportSizeChanged = function() {
this.eid && this._contentNode && this._driver.isVirtualMode && this._onItemRender && (this._driver.invalidateVisibleRange(), 
this._syncContentPosition());
}, n.prototype._onTouchStart = function(t) {
if (!this._dispatchingCancel && this.eid && (this._isReady() || (this._findContentNode(), 
this._isReady()))) {
var e = t.getLocation();
this._driver.onDragStart(e.x, e.y), this._scrollBeganEmitted = !1, this._ensureScheduled();
}
}, n.prototype._onTouchMove = function(e) {
if (!this._dispatchingCancel && this._driver.phase === t.ScrollPhase.Dragging && this._isReady()) {
var o = e.getLocation(), n = cc.director.getDeltaTime() || 1 / 60, i = this._driver.onDragMove(o.x, o.y, n), r = i.dx, s = i.dy, a = 0 !== r || 0 !== s;
a && !this._scrollBeganEmitted && (this._scrollBeganEmitted = !0, this._emitScrollEvent("scroll-began", this._onScrollBegan), 
this._cancelChildTouch(e)), a && (this._syncContentPosition(), this._emitScrollEvent("scrolling", this._onScrolling), 
e.stopPropagation());
}
}, n.prototype._onTouchEnd = function(e) {
this._dispatchingCancel || this._driver.phase === t.ScrollPhase.Dragging && this._isReady() && (this._driver.onDragEnd() === t.ScrollPhase.Idle ? (this._scrollBeganEmitted && (this._emitScrollEvent("scroll-ended", this._onScrollEnded), 
e.stopPropagation()), this._unschedule()) : e.stopPropagation());
}, n.prototype._cancelChildTouch = function(t) {
var e = t.target;
if (e && e !== this.nativeNode && cc.isValid(e)) {
var o = new cc.Event.EventTouch(t.getTouches(), !0);
o.type = cc.Node.EventType.TOUCH_CANCEL, o.touch = t.touch, this._dispatchingCancel = !0;
try {
e.dispatchEvent(o);
} finally {
this._dispatchingCancel = !1;
}
}
}, n.prototype._ensureScheduled = function() {
this._scheduled || (cc.director.getScheduler().schedule(this._boundUpdate, this.nativeNode, 0, cc.macro.REPEAT_FOREVER, 0, !1), 
this._scheduled = !0);
}, n.prototype._unschedule = function() {
this._scheduled && (cc.director.getScheduler().unschedule(this._boundUpdate, this.nativeNode), 
this._scheduled = !1);
}, n.prototype.update = function(e) {
if (this.eid) {
var o = this._driver.phase, n = o === t.ScrollPhase.Decelerating || o === t.ScrollPhase.Animating, i = this._driver.onFrameUpdate(e);
n && (this._syncContentPosition(), this._emitScrollEvent("scrolling", this._onScrolling)), 
i && (this._emitScrollEvent("scroll-ended", this._onScrollEnded), this._unschedule());
} else this._unschedule();
}, n.prototype._isReady = function() {
return Boolean(this._contentNode) && (!this._driver.isVirtualMode || null !== this._onItemRender);
}, n.prototype._findContentNode = function() {
var t;
if (this._contentName && !this._contentNode) for (var e = this.nativeNode.children, o = 0; o < e.length; o++) {
var n = e[o], i = n._cocosNodeRef;
if ((null !== (t = null == i ? void 0 : i.nodeName) && void 0 !== t ? t : n.name) === this._contentName) {
this._contentNode = n, this._activateContentNode();
break;
}
}
}, n.prototype._applyVirtualLayout = function() {
this._contentNode && (this._savedContentState || (this._savedContentState = {
anchorX: this._contentNode.anchorX,
anchorY: this._contentNode.anchorY,
width: this._contentNode.width,
height: this._contentNode.height
}), this._driver.horizontal ? (this._contentNode.anchorX = 0, this._contentNode.anchorY = .5) : (this._contentNode.anchorX = .5, 
this._contentNode.anchorY = 1));
}, n.prototype._restoreContentState = function() {
this._contentNode && this._savedContentState && (this._contentNode.anchorX = this._savedContentState.anchorX, 
this._contentNode.anchorY = this._savedContentState.anchorY, this._contentNode.width = this._savedContentState.width, 
this._contentNode.height = this._savedContentState.height), this._savedContentState = null;
}, n.prototype._activateContentNode = function() {
this._driver.isVirtualMode && this._applyVirtualLayout(), this._validateContentGeometry(), 
this._driver.resetScrollState(), this._syncContentPosition();
}, n.prototype._validateContentGeometry = function() {}, n.prototype._syncContentPosition = function() {
if (this._contentNode) {
var t = this._driver.getContentPosition();
if (this._contentNode.x = t.x, this._contentNode.y = t.y, this._driver.isVirtualMode) {
var e = this._driver.getContentSize();
this._contentNode.width = e.width, this._contentNode.height = e.height, this._onItemRender && this._updateVisibleItems();
}
}
}, n.prototype._emitScrollEvent = function(t, e) {
var o = this._cachedScrollData;
if (this._contentNode) o.contentX = this._contentNode.x, o.contentY = this._contentNode.y; else {
var n = this._driver.getContentPosition();
o.contentX = n.x, o.contentY = n.y;
}
o.eid = this.eid, o.eventType = t, o.worldId = this.worldId, this.universe.handleScrollEvent(o), 
e && e(o);
}, n.prototype._updateVisibleItems = function() {
var t, e;
if (this._contentNode) {
var o = this._driver.computeNewVisibleRange();
if (o) {
var n = d(o, 2), i = n[0], r = n[1];
try {
for (var s = h(this._activeItems), a = s.next(); !a.done; a = s.next()) {
var l = d(a.value, 2), c = l[0], u = l[1];
(c < i || c > r) && (u.active = !1, this._itemPool.push(u), this._activeItems.delete(c));
}
} catch (e) {
t = {
error: e
};
} finally {
try {
a && !a.done && (e = s.return) && e.call(s);
} finally {
if (t) throw t.error;
}
}
for (var p = i; p <= r; p++) this._activeItems.has(p) || this._createOrReuseItem(p);
}
} else this._driver.itemCount;
}, n.prototype._createOrReuseItem = function(t) {
var e = this._itemPool.pop();
e || ((e = new cc.Node("item_".concat(t))).anchorX = .5, e.anchorY = 1, this._contentNode.addChild(e)), 
e.active = !0, e.name = "item_".concat(t);
var o = this._driver;
if (e.width = o.horizontal ? o.itemHeight : this.nativeNode.width, e.height = o.horizontal ? this.nativeNode.height : o.itemHeight, 
o.horizontal ? (e.x = t * o.itemHeight, e.y = 0) : (e.x = 0, e.y = -t * o.itemHeight), 
this._activeItems.set(t, e), this._onItemRender) {
var n = this._onItemRender(t, this.eid);
if (!n) return;
if (e.children.length > 0) this._updateContentTree(e.children[0], n, this.eid); else {
var i = lr(n, this._nodeFactory, this.eid, this.worldId);
e.addChild(i.nativeNode);
}
}
}, n.prototype._updateContentTree = function(t, e, o, n) {
var i, r, s = t._cocosNodeRef;
if (s) if (n) try {
for (var a = h(n), l = a.next(); !l.done; l = a.next()) {
var c = l.value;
this._applyDirtyField(s, e.props, nr(e.type), c, o);
}
} catch (t) {
i = {
error: t
};
} finally {
try {
l && !l.done && (r = a.return) && r.call(a);
} finally {
if (i) throw i.error;
}
} else ar(s, e.props, nr(e.type), sr, o);
if (e.children) for (var u = t.children, d = 0; d < e.children.length && d < u.length; d++) this._updateContentTree(u[d], e.children[d], o, n);
}, n.prototype._applyDirtyField = function(t, e, o, n, i) {
var r = n.split(".");
if (!sr.has(r[0])) {
for (var s = e, a = o, l = 0; l < r.length - 1; l++) {
var c = r[l], u = s[c], h = a[c];
if (!u || "object" != typeof u || !h || "object" != typeof h) return;
s = u, a = h;
}
var d = r[r.length - 1];
if (d in s) {
var p = a[d];
if (p) {
var m = s[d];
if ("function" == typeof p) {
var _ = m;
Array.isArray(m) && m.length >= 1 && "function" == typeof m[0] && (_ = m[0](i)), 
p(t, _);
} else "object" == typeof p && "object" == typeof m && null !== m && ar(t, m, p, void 0, i);
}
}
}
}, n.prototype._disposeChildRenderNodes = function(t) {
for (var e = t.children, o = 0; o < e.length; o++) this._disposeRenderNodeTree(e[o]);
}, n.prototype._disposeRenderNodeTree = function(t) {
for (var e = t.children, o = 0; o < e.length; o++) this._disposeRenderNodeTree(e[o]);
var n = t._cocosNodeRef;
n && (n.disposeRender(), t._cocosNodeRef = void 0);
}, n.prototype.applyWorldTimeScale = function(t) {
var e, o;
try {
for (var n = h(this._activeItems.values()), i = n.next(); !i.done; i = n.next()) {
var r = i.value;
this._applyWorldTimeScaleToTree(r, t);
}
} catch (t) {
e = {
error: t
};
} finally {
try {
i && !i.done && (o = n.return) && o.call(n);
} finally {
if (e) throw e.error;
}
}
for (var s = 0; s < this._itemPool.length; s++) this._applyWorldTimeScaleToTree(this._itemPool[s], t);
}, n.prototype._applyWorldTimeScaleToTree = function(t, e) {
var o = t._cocosNodeRef;
o && o.applyWorldTimeScale(e);
for (var n = t.children, i = 0; i < n.length; i++) this._applyWorldTimeScaleToTree(n[i], e);
}, n.prototype._cleanupContainerChildren = function(t) {
this._disposeChildRenderNodes(t);
for (var e = t.children, o = e.length - 1; o >= 0; o--) {
var n = e[o];
n.removeFromParent(), cc.isValid(n) && n.destroy();
}
}, n.prototype._clearVirtualItems = function() {
var t, e, o, n;
try {
for (var i = h(this._activeItems.values()), r = i.next(); !r.done; r = i.next()) {
var s = r.value;
this._cleanupContainerChildren(s), s.removeFromParent(), cc.isValid(s) && s.destroy();
}
} catch (e) {
t = {
error: e
};
} finally {
try {
r && !r.done && (e = i.return) && e.call(i);
} finally {
if (t) throw t.error;
}
}
try {
for (var a = h(this._itemPool), l = a.next(); !l.done; l = a.next()) s = l.value, 
this._cleanupContainerChildren(s), s.removeFromParent(), cc.isValid(s) && s.destroy();
} catch (t) {
o = {
error: t
};
} finally {
try {
l && !l.done && (n = a.return) && n.call(a);
} finally {
if (o) throw o.error;
}
}
this._activeItems.clear(), this._itemPool = [], this._driver.invalidateVisibleRange();
}, n.prototype.setScrollViewHorizontal = function(t) {
var e = this._driver.horizontal;
this._driver.horizontal = t, t !== e && this._contentNode && (this._driver.syncOffsetFromContentPosition(this._contentNode.x, this._contentNode.y), 
this._driver.isVirtualMode && (this._clearVirtualItems(), this._applyVirtualLayout()), 
this._syncContentPosition());
}, n.prototype.setScrollViewVertical = function(t) {
var e = this._driver.vertical;
this._driver.vertical = t, t !== e && this._contentNode && (this._driver.syncOffsetFromContentPosition(this._contentNode.x, this._contentNode.y), 
this._driver.isVirtualMode && (this._clearVirtualItems(), this._applyVirtualLayout()), 
this._syncContentPosition());
}, n.prototype.setScrollViewInertia = function(t) {
this._driver.inertia = t;
}, n.prototype.setScrollViewElastic = function(t) {
this._driver.elastic = t;
}, n.prototype.setScrollViewBounceDuration = function(t) {
this._driver.bounceDuration = t;
}, n.prototype.setScrollViewBrake = function(t) {
this._driver.brake = t;
}, n.prototype.setScrollViewContentName = function(t) {
t === this._contentName && this._contentNode || (this._cancelContentBind(), this._contentName = t, 
this._clearVirtualItems(), this._restoreContentState(), this._contentNode = null, 
this._tryBindContent());
}, n.prototype._tryBindContent = function() {
this._contentBindScheduled = !1, this._contentName && !this._contentNode && cc.isValid(this.nativeNode) && (this._findContentNode(), 
this._contentNode ? this._contentBindRetries = 0 : (this._contentBindRetries++, 
this._contentBindScheduled = !0, cc.director.once(cc.Director.EVENT_AFTER_UPDATE, this._boundTryBindContent)));
}, n.prototype._cancelContentBind = function() {
this._contentBindScheduled && (cc.director.off(cc.Director.EVENT_AFTER_UPDATE, this._boundTryBindContent), 
this._contentBindScheduled = !1), this._contentBindRetries = 0;
}, n.prototype.setScrollViewContentX = function(t) {
this._driver.initialContentX = t, this._driver.isVirtualMode && this._onItemRender ? this._syncContentPosition() : this._contentNode && (this._driver.resetScrollState(), 
this._contentNode.x = t);
}, n.prototype.setScrollViewContentY = function(t) {
this._driver.initialContentY = t, this._driver.isVirtualMode && this._onItemRender ? this._syncContentPosition() : this._contentNode && (this._driver.resetScrollState(), 
this._contentNode.y = t);
}, n.prototype.setOnScrollBegan = function(t) {
this._onScrollBegan = t;
}, n.prototype.setOnScrollEnded = function(t) {
this._onScrollEnded = t;
}, n.prototype.setOnScrolling = function(t) {
this._onScrolling = t;
}, n.prototype.rebuildScrollViewContent = function(t) {
if (t && t.nativeNode) {
var e = t.nativeNode;
e !== this._contentNode && this._restoreContentState(), this._contentNode = e, this._activateContentNode();
}
}, n.prototype.setItemCount = function(t) {
var e = this._driver.isVirtualMode;
this._driver.itemCount = t;
var o = this._driver.isVirtualMode;
e && !o ? (this._clearVirtualItems(), this._restoreContentState(), this._activateContentNode()) : !e && o && (this._applyVirtualLayout(), 
this._syncContentPosition()), o && this._onItemRender && this._updateVisibleItems();
}, n.prototype.setItemHeight = function(t) {
this._driver.itemHeight = t, this._driver.isVirtualMode && this._onItemRender && this._updateVisibleItems();
}, n.prototype.setBufferSize = function(t) {
this._driver.bufferSize = t, this._driver.isVirtualMode && this._onItemRender && this._updateVisibleItems();
}, n.prototype.setOnItemRender = function(t) {
this._onItemRender = t, this._driver.isVirtualMode && this._onItemRender && this._updateVisibleItems();
}, n.prototype.scrollToIndex = function(t, e) {
void 0 === e && (e = !1), this._driver.isVirtualMode && this._onItemRender && (this._driver.scrollToIndex(t, e), 
e ? this._ensureScheduled() : this._syncContentPosition());
}, n.prototype.setScrollCtrl = function(e) {
Array.isArray(e) ? e.length > 0 && this._refreshActiveItems(new Set(e)) : e === t.ScrollControl.Refresh && this._refreshActiveItems();
}, n.prototype._refreshActiveItems = function(t) {
var e, o;
if (this._onItemRender) try {
for (var n = h(this._activeItems), i = n.next(); !i.done; i = n.next()) {
var r = d(i.value, 2), s = r[0], a = r[1], l = this._onItemRender(s, this.eid);
l && a.children.length > 0 && this._updateContentTree(a.children[0], l, this.eid, t);
}
} catch (t) {
e = {
error: t
};
} finally {
try {
i && !i.done && (o = n.return) && o.call(n);
} finally {
if (e) throw e.error;
}
}
}, n.prototype.disposeRender = function() {
this._unschedule(), this._cancelContentBind(), this._driver.phase !== t.ScrollPhase.Idle && this._scrollBeganEmitted && this._emitScrollEvent("scroll-ended", this._onScrollEnded), 
this._clearVirtualItems(), this._restoreContentState(), this._contentNode = null, 
this._contentName = "", this._onItemRender = null, this._onScrollBegan = null, this._onScrollEnded = null, 
this._onScrolling = null, this._scrollBeganEmitted = !1, this._dispatchingCancel = !1, 
this._driver.reset(), e.prototype.disposeRender.call(this);
}, n.prototype.destroyNative = function() {
this._unschedule(), this._cancelContentBind(), this.nativeNode.off(cc.Node.EventType.TOUCH_START, this._onTouchStart, this, !0), 
this.nativeNode.off(cc.Node.EventType.TOUCH_MOVE, this._onTouchMove, this, !0), 
this.nativeNode.off(cc.Node.EventType.TOUCH_END, this._onTouchEnd, this, !0), this.nativeNode.off(cc.Node.EventType.TOUCH_CANCEL, this._onTouchEnd, this, !0), 
this.nativeNode.off(cc.Node.EventType.SIZE_CHANGED, this._onViewportSizeChanged, this), 
this._contentNode = null, this._onScrollBegan = null, this._onScrollEnded = null, 
this._onScrolling = null, this._activeItems.clear(), this._itemPool = [], e.prototype.destroyNative.call(this);
}, n;
}(Un), xr = function(e) {
function n(o) {
var n = e.call(this, o) || this;
return n._projection = t.ProjectionType.Orthographic, n._fov = 60, n._orthoHeight = 10, 
n._near = .1, n._far = 1e3, n._viewportRect = new cc.Rect(0, 0, 1, 1), n.nativeRenderer = n.nativeNode.getComponent(cc.Camera) || n.nativeNode.addComponent(cc.Camera), 
n.setCameraDepth(0), n.setCullingMask(t.CameraLayer.Everything), n.setProjection(t.ProjectionType.Orthographic), 
n.setOrthoHeight(n._orthoHeight), n.setNear(n._near), n.setFar(n._far), n.setClearFlags(t.CameraClearFlags.All), 
n;
}
return o(n, e), n.prototype.setCameraDepth = function(t) {
this.nativeRenderer.depth = t;
}, n.prototype.setViewportX = function(t) {
this._viewportRect.x = t, this.nativeRenderer.rect = this._viewportRect;
}, n.prototype.setViewportY = function(t) {
this._viewportRect.y = t, this.nativeRenderer.rect = this._viewportRect;
}, n.prototype.setViewportWidth = function(t) {
this._viewportRect.width = t, this.nativeRenderer.rect = this._viewportRect;
}, n.prototype.setViewportHeight = function(t) {
this._viewportRect.height = t, this.nativeRenderer.rect = this._viewportRect;
}, n.prototype.setCullingMask = function(t) {
this.nativeRenderer.cullingMask = this.universe.layerMapping.toPhysicalMask(t);
}, n.prototype.setProjection = function(e) {
this._projection = e, this.nativeRenderer.ortho = e === t.ProjectionType.Orthographic, 
this._updateProjection();
}, n.prototype.setFov = function(e) {
this._fov = e, this._projection === t.ProjectionType.Perspective && (this.nativeRenderer.fov = e);
}, n.prototype.setOrthoHeight = function(e) {
this._orthoHeight = e, this._projection === t.ProjectionType.Orthographic && (this.nativeRenderer.orthoSize = e / 2);
}, n.prototype.setNear = function(t) {
this._near = t;
}, n.prototype.setFar = function(t) {
this._far = t;
}, n.prototype.setCameraRgb = function(t) {
this.setRgbColor(t, Hn.color), Hn.color.a = this.nativeRenderer.backgroundColor.a, 
this.nativeRenderer.backgroundColor = Hn.color;
}, n.prototype.setCameraAlpha = function(t) {
Hn.color.set(this.nativeRenderer.backgroundColor), Hn.color.a = this.opacityToAlpha(t), 
this.nativeRenderer.backgroundColor = Hn.color;
}, n.prototype.setClearFlags = function(e) {
var o = 0;
e & t.CameraClearFlags.Color && (o |= cc.Camera.ClearFlags.COLOR), e & t.CameraClearFlags.Depth && (o |= cc.Camera.ClearFlags.DEPTH), 
e & t.CameraClearFlags.Stencil && (o |= cc.Camera.ClearFlags.STENCIL), this.nativeRenderer.clearFlags = o;
}, n.prototype.setZoomRatio = function(t) {
this.nativeRenderer.zoomRatio = t;
}, n.prototype.setAlignWithScreen = function(t) {
this.nativeRenderer.alignWithScreen = t;
}, n.prototype.setRenderStages = function(t) {
this.nativeRenderer.renderStages = t;
}, n.prototype.destroyNative = function() {
this.nativeRenderer && cc.isValid(this.nativeNode) && (this.nativeRenderer.enabled = !1), 
e.prototype.destroyNative.call(this);
}, n.prototype._updateProjection = function() {
this._projection === t.ProjectionType.Perspective ? this.nativeRenderer.fov = this._fov : this.nativeRenderer.orthoSize = this._orthoHeight / 2;
}, n;
}(Un);
t.KeyCode = void 0, (vr = t.KeyCode || (t.KeyCode = {}))[vr.A = 65] = "A", vr[vr.B = 66] = "B", 
vr[vr.C = 67] = "C", vr[vr.D = 68] = "D", vr[vr.E = 69] = "E", vr[vr.F = 70] = "F", 
vr[vr.G = 71] = "G", vr[vr.H = 72] = "H", vr[vr.I = 73] = "I", vr[vr.J = 74] = "J", 
vr[vr.K = 75] = "K", vr[vr.L = 76] = "L", vr[vr.M = 77] = "M", vr[vr.N = 78] = "N", 
vr[vr.O = 79] = "O", vr[vr.P = 80] = "P", vr[vr.Q = 81] = "Q", vr[vr.R = 82] = "R", 
vr[vr.S = 83] = "S", vr[vr.T = 84] = "T", vr[vr.U = 85] = "U", vr[vr.V = 86] = "V", 
vr[vr.W = 87] = "W", vr[vr.X = 88] = "X", vr[vr.Y = 89] = "Y", vr[vr.Z = 90] = "Z", 
vr[vr.Num0 = 48] = "Num0", vr[vr.Num1 = 49] = "Num1", vr[vr.Num2 = 50] = "Num2", 
vr[vr.Num3 = 51] = "Num3", vr[vr.Num4 = 52] = "Num4", vr[vr.Num5 = 53] = "Num5", 
vr[vr.Num6 = 54] = "Num6", vr[vr.Num7 = 55] = "Num7", vr[vr.Num8 = 56] = "Num8", 
vr[vr.Num9 = 57] = "Num9", vr[vr.ArrowLeft = 37] = "ArrowLeft", vr[vr.ArrowUp = 38] = "ArrowUp", 
vr[vr.ArrowRight = 39] = "ArrowRight", vr[vr.ArrowDown = 40] = "ArrowDown", vr[vr.Escape = 27] = "Escape", 
vr[vr.Space = 32] = "Space", vr[vr.Enter = 13] = "Enter", vr[vr.Tab = 9] = "Tab", 
vr[vr.Backspace = 8] = "Backspace", vr[vr.Delete = 46] = "Delete", vr[vr.Insert = 45] = "Insert", 
vr[vr.PrintScreen = 44] = "PrintScreen", vr[vr.ScrollLock = 145] = "ScrollLock", 
vr[vr.Pause = 19] = "Pause", vr[vr.ContextMenu = 93] = "ContextMenu", vr[vr.Shift = 16] = "Shift", 
vr[vr.Ctrl = 17] = "Ctrl", vr[vr.Alt = 18] = "Alt", vr[vr.CapsLock = 20] = "CapsLock", 
vr[vr.Meta = 91] = "Meta", vr[vr.NumLock = 144] = "NumLock", vr[vr.MobileBack = 6] = "MobileBack", 
vr[vr.Home = 36] = "Home", vr[vr.End = 35] = "End", vr[vr.PageUp = 33] = "PageUp", 
vr[vr.PageDown = 34] = "PageDown", vr[vr.F1 = 112] = "F1", vr[vr.F2 = 113] = "F2", 
vr[vr.F3 = 114] = "F3", vr[vr.F4 = 115] = "F4", vr[vr.F5 = 116] = "F5", vr[vr.F6 = 117] = "F6", 
vr[vr.F7 = 118] = "F7", vr[vr.F8 = 119] = "F8", vr[vr.F9 = 120] = "F9", vr[vr.F10 = 121] = "F10", 
vr[vr.F11 = 122] = "F11", vr[vr.F12 = 123] = "F12", vr[vr.Semicolon = 186] = "Semicolon", 
vr[vr.Equal = 187] = "Equal", vr[vr.Comma = 188] = "Comma", vr[vr.Minus = 189] = "Minus", 
vr[vr.Period = 190] = "Period", vr[vr.Slash = 191] = "Slash", vr[vr.Backquote = 192] = "Backquote", 
vr[vr.BracketLeft = 219] = "BracketLeft", vr[vr.Backslash = 220] = "Backslash", 
vr[vr.BracketRight = 221] = "BracketRight", vr[vr.Quote = 222] = "Quote", vr[vr.Numpad0 = 96] = "Numpad0", 
vr[vr.Numpad1 = 97] = "Numpad1", vr[vr.Numpad2 = 98] = "Numpad2", vr[vr.Numpad3 = 99] = "Numpad3", 
vr[vr.Numpad4 = 100] = "Numpad4", vr[vr.Numpad5 = 101] = "Numpad5", vr[vr.Numpad6 = 102] = "Numpad6", 
vr[vr.Numpad7 = 103] = "Numpad7", vr[vr.Numpad8 = 104] = "Numpad8", vr[vr.Numpad9 = 105] = "Numpad9", 
vr[vr.NumpadMultiply = 106] = "NumpadMultiply", vr[vr.NumpadAdd = 107] = "NumpadAdd", 
vr[vr.NumpadSubtract = 109] = "NumpadSubtract", vr[vr.NumpadDecimal = 110] = "NumpadDecimal", 
vr[vr.NumpadDivide = 111] = "NumpadDivide";
var br, Cr = function(e) {
function n(t) {
var o = e.call(this, t) || this;
return o._frameName = "", o._hideUntilLoaded = !1, o._hiddenForLoad = !1, o._isLoading = !1, 
o._onPendingFrameLoaded = function() {
var t = o._pendingFrame;
o._pendingFrame = void 0, t && t.textureLoaded() && (o.nativeRenderer.spriteFrame = t);
}, o.nativeRenderer = o.nativeNode.getComponent(cc.Sprite) || o.nativeNode.addComponent(cc.Sprite), 
o;
}
return o(n, e), n.prototype.setAtlas = function(t) {
this._atlasUrl = t, this._atlas = void 0, this._updateSpriteFrame();
}, n.prototype.setFrameName = function(t) {
this._frameName = t || "", this._updateSpriteFrame();
}, n.prototype.setImage = function(t) {
this._spriteUrl = t, this._updateSpriteFrame();
}, n.prototype.setDefaultImage = function(e) {
var o = this;
this._defaultImgUrl !== e && (this._defaultImgUrl = e, this._defaultSpriteFrame = void 0, 
e && this.loadAsset("defaultImg", e, t.LoaderAssetType.SpriteFrame, function(t) {
o._defaultSpriteFrame = t, o.nativeRenderer.spriteFrame || o._applyFrame(t);
}));
}, n.prototype.setHideUntilLoaded = function(t) {
this._hideUntilLoaded = t, this._syncHideState();
}, n.prototype._setLoading = function(t) {
this._isLoading !== t && (this._isLoading = t, this._syncHideState());
}, n.prototype._syncHideState = function() {
var t = this._hideUntilLoaded && this._isLoading;
t && !this._hiddenForLoad ? (this.nativeRenderer.enabled = !1, this._hiddenForLoad = !0) : !t && this._hiddenForLoad && (this.nativeRenderer.enabled = !0, 
this._hiddenForLoad = !1);
}, n.prototype._applyFrame = function(t) {
var e;
if (t && cc.isValid(t)) {
if (this._pendingFrame && this._pendingFrame !== t && (this._pendingFrame.off("load", this._onPendingFrameLoaded, this), 
this._pendingFrame = void 0), !t.textureLoaded()) return this._pendingFrame !== t && (null === (e = this._pendingFrame) || void 0 === e || e.off("load", this._onPendingFrameLoaded, this), 
this._pendingFrame = t, t.once("load", this._onPendingFrameLoaded, this)), void t.ensureLoadTexture();
this.nativeRenderer.spriteFrame = t;
}
}, n.prototype.setWidth = function(t) {
t > 0 && (this.nativeRenderer.sizeMode = cc.Sprite.SizeMode.CUSTOM), e.prototype.setWidth.call(this, t);
}, n.prototype.setHeight = function(t) {
t > 0 && (this.nativeRenderer.sizeMode = cc.Sprite.SizeMode.CUSTOM), e.prototype.setHeight.call(this, t);
}, n.prototype._showDefault = function() {
this._defaultSpriteFrame && this._applyFrame(this._defaultSpriteFrame);
}, n.prototype.restoreTexture = function() {
var t = this.nativeRenderer.spriteFrame;
t && !t.textureLoaded() && (this.nativeRenderer.spriteFrame = null), this._updateSpriteFrame();
}, n.prototype._updateSpriteFrame = function() {
var e = this;
if (this._atlasUrl && this._frameName) {
if (!this._atlas) return this._showDefault(), this._setLoading(!0), void this._loadAtlas();
var o = this._atlas.getSpriteFrame(this._frameName);
return o ? this._applyFrame(o) : ('[CocosSpriteNode] SpriteFrame "'.concat(this._frameName, '" not found in atlas "').concat(this._atlasUrl, '"'), 
this._showDefault()), void this._setLoading(!1);
}
this._spriteUrl ? (this._showDefault(), this._setLoading(!0), this.loadAsset("image", this._spriteUrl, t.LoaderAssetType.SpriteFrame, function(t) {
e._applyFrame(t), e._setLoading(!1);
}, function() {
return e._setLoading(!1);
})) : this._setLoading(!1);
}, n.prototype._loadAtlas = function() {
var e = this;
this._atlasUrl && this.loadAsset("atlas", this._atlasUrl, t.LoaderAssetType.SpriteAtlas, function(t) {
e._atlas = t, e._updateSpriteFrame();
}, function() {
return e._setLoading(!1);
});
}, n.prototype.setRenderType = function(e) {
var o, n = ((o = {})[t.RenderType.Simple] = cc.Sprite.Type.SIMPLE, o[t.RenderType.Sliced] = cc.Sprite.Type.SLICED, 
o[t.RenderType.Tiled] = cc.Sprite.Type.TILED, o[t.RenderType.Filled] = cc.Sprite.Type.FILLED, 
o[t.RenderType.Mesh] = cc.Sprite.Type.MESH, o);
this.nativeRenderer.type = n[e];
}, n.prototype.setSizeMode = function(e) {
var o, n = ((o = {})[t.SizeMode.Custom] = cc.Sprite.SizeMode.CUSTOM, o[t.SizeMode.Trimmed] = cc.Sprite.SizeMode.TRIMMED, 
o[t.SizeMode.Raw] = cc.Sprite.SizeMode.RAW, o);
this.nativeRenderer.sizeMode = n[e];
}, n.prototype.setTrim = function(t) {
this.nativeRenderer.trim = t;
}, n.prototype.setFillType = function(e) {
var o, n = ((o = {})[t.SpriteFillType.Horizontal] = cc.Sprite.FillType.HORIZONTAL, 
o[t.SpriteFillType.Vertical] = cc.Sprite.FillType.VERTICAL, o[t.SpriteFillType.Radial] = cc.Sprite.FillType.RADIAL, 
o);
this.nativeRenderer.fillType = n[e];
}, n.prototype.setFillCenterX = function(t) {
var e = this.nativeRenderer.fillCenter;
Hn.v2.x = t, Hn.v2.y = e.y, this.nativeRenderer.fillCenter = Hn.v2;
}, n.prototype.setFillCenterY = function(t) {
var e = this.nativeRenderer.fillCenter;
Hn.v2.x = e.x, Hn.v2.y = t, this.nativeRenderer.fillCenter = Hn.v2;
}, n.prototype.setFillStart = function(t) {
this.nativeRenderer.fillStart = t;
}, n.prototype.setFillRange = function(t) {
this.nativeRenderer.fillRange = t;
}, n.prototype.setSrcBlendFactor = function(t) {
this.nativeRenderer.srcBlendFactor = Bi(t);
}, n.prototype.setDstBlendFactor = function(t) {
this.nativeRenderer.dstBlendFactor = Bi(t);
}, n.prototype.disposeRender = function() {
this._pendingFrame && (this._pendingFrame.off("load", this._onPendingFrameLoaded, this), 
this._pendingFrame = void 0), this.nativeRenderer.spriteFrame = null, this._atlasUrl = void 0, 
this._spriteUrl = void 0, this._frameName = "", this._atlas = void 0, this._defaultImgUrl = void 0, 
this._defaultSpriteFrame = void 0, this._hiddenForLoad && (this.nativeRenderer.enabled = !0), 
this._hideUntilLoaded = !1, this._hiddenForLoad = !1, this._isLoading = !1, e.prototype.disposeRender.call(this);
}, n;
}(Un), wr = function(e) {
function n(t) {
var o = e.call(this, t) || this;
return o._textureUrl = "", o.nativeRenderer = o.nativeNode.getComponent(cc.MotionStreak) || o.nativeNode.addComponent(cc.MotionStreak), 
o;
}
return o(n, e), n.prototype.setFadeTime = function(t) {
this.nativeRenderer.fadeTime = t;
}, n.prototype.setMinSeg = function(t) {
this.nativeRenderer.minSeg = t;
}, n.prototype.setStroke = function(t) {
this.nativeRenderer.stroke = t;
}, n.prototype.setStreakColor = function(t) {
this.setRgbColor(t, Hn.color), this.nativeRenderer.color = Hn.color;
}, n.prototype.setFastMode = function(t) {
this.nativeRenderer.fastMode = t;
}, n.prototype.reset = function() {
this.nativeRenderer.reset();
}, n.prototype.setTexture = function(e) {
var o = this;
if (!e) return this.nativeRenderer.texture = null, void (this._textureUrl = "");
this._textureUrl !== e && (this._textureUrl = e, this.loadAsset("texture", e, t.LoaderAssetType.Texture, function(t) {
o._textureUrl === e && (o.nativeRenderer.texture = t);
}));
}, n.prototype.setSrcBlendFactor = function(t) {
this.nativeRenderer.srcBlendFactor = Bi(t);
}, n.prototype.setDstBlendFactor = function(t) {
this.nativeRenderer.dstBlendFactor = Bi(t);
}, n;
}(Un), Sr = function(e) {
function n(t) {
var o = e.call(this, t) || this;
return o._frameName = "", o._fileUrl = "", o.nativeRenderer = o.nativeNode.getComponent(cc.ParticleSystem) || o.nativeNode.addComponent(cc.ParticleSystem), 
o._startColor = new cc.Color(255, 255, 255, 255), o._startColorVar = new cc.Color(0, 0, 0, 0), 
o._endColor = new cc.Color(255, 255, 255, 255), o._endColorVar = new cc.Color(0, 0, 0, 0), 
o.nativeRenderer.custom = !0, o;
}
return o(n, e), n.prototype.setParticleAsset = function(t) {
if (!t) return this._particleImgUrl = void 0, void this._updateSpriteFrame();
this._particleImgUrl !== t && (this._particleImgUrl = t, this._updateSpriteFrame());
}, n.prototype.setAtlas = function(t) {
this._atlasUrl !== t && (this._atlasUrl = t, this._atlas = void 0, this._updateSpriteFrame());
}, n.prototype.setFrameName = function(t) {
var e = t || "";
this._frameName !== e && (this._frameName = e, this._updateSpriteFrame());
}, n.prototype.setFile = function(e) {
var o = this;
if (!e) return this.nativeRenderer.file = null, void (this._fileUrl = "");
this._fileUrl !== e && (this._fileUrl = e, this.loadAsset("file", e, t.LoaderAssetType.Particle, function(t) {
o._fileUrl === e && (o.nativeRenderer.file = t);
}));
}, n.prototype._updateSpriteFrame = function() {
var e = this;
if (this._atlasUrl && this._frameName) {
if (!this._atlas) return void this._loadAtlas();
var o = this._atlas.getSpriteFrame(this._frameName);
o ? this.nativeRenderer.spriteFrame = o : ('[CocosParticleNode] SpriteFrame "'.concat(this._frameName, '" not found in atlas "').concat(this._atlasUrl, '"'), 
this.nativeRenderer.spriteFrame = null);
} else if (this._particleImgUrl) {
var n = this._particleImgUrl;
this.loadAsset("particleImg", n, t.LoaderAssetType.SpriteFrame, function(t) {
e._particleImgUrl !== n || e._atlasUrl && e._frameName || (e.nativeRenderer.spriteFrame = t);
});
} else this.nativeRenderer.spriteFrame = null;
}, n.prototype._loadAtlas = function() {
var e = this, o = this._atlasUrl;
o && this.loadAsset("atlas", o, t.LoaderAssetType.SpriteAtlas, function(t) {
e._atlasUrl === o && (e._atlas = t, e._updateSpriteFrame());
});
}, n.prototype.restoreTexture = function() {
var t = this.nativeRenderer.spriteFrame;
t && !t.textureLoaded() && (this.nativeRenderer.spriteFrame = null, this._atlasUrl && this._frameName ? (this._atlas = void 0, 
this._updateSpriteFrame()) : this._particleImgUrl ? this._updateSpriteFrame() : (t.ensureLoadTexture(), 
this.nativeRenderer.spriteFrame = t));
}, n.prototype.setDuration = function(t) {
this.nativeRenderer.duration = t;
}, n.prototype.setEmissionRate = function(t) {
this.nativeRenderer.emissionRate = t;
}, n.prototype.setLife = function(t) {
this.setPropWithVar("life", t);
}, n.prototype.setTotalParticles = function(t) {
this.nativeRenderer.totalParticles = t;
}, n.prototype.setStartRgb = function(t) {
this.setRgbColor(t, this._startColor), this.nativeRenderer.startColor = this._startColor;
}, n.prototype.setStartAlpha = function(t) {
this._startColor.a = this.opacityToAlpha(t), this.nativeRenderer.startColor = this._startColor;
}, n.prototype.setStartRgbVar = function(t) {
this.setRgbColor(t, this._startColorVar), this.nativeRenderer.startColorVar = this._startColorVar;
}, n.prototype.setStartAlphaVar = function(t) {
this._startColorVar.a = this.opacityToAlpha(t), this.nativeRenderer.startColorVar = this._startColorVar;
}, n.prototype.setEndRgb = function(t) {
this.setRgbColor(t, this._endColor), this.nativeRenderer.endColor = this._endColor;
}, n.prototype.setEndAlpha = function(t) {
this._endColor.a = this.opacityToAlpha(t), this.nativeRenderer.endColor = this._endColor;
}, n.prototype.setEndRgbVar = function(t) {
this.setRgbColor(t, this._endColorVar), this.nativeRenderer.endColorVar = this._endColorVar;
}, n.prototype.setEndAlphaVar = function(t) {
this._endColorVar.a = this.opacityToAlpha(t), this.nativeRenderer.endColorVar = this._endColorVar;
}, n.prototype.setParticleAngle = function(t) {
this.setPropWithVar("angle", t);
}, n.prototype.setStartSize = function(t) {
this.setPropWithVar("startSize", t);
}, n.prototype.setEndSize = function(t) {
this.setPropWithVar("endSize", t);
}, n.prototype.setStartSpin = function(t) {
this.setPropWithVar("startSpin", t);
}, n.prototype.setEndSpin = function(t) {
this.setPropWithVar("endSpin", t);
}, n.prototype.setPosVar = function(t, e) {
this.nativeRenderer.posVar = cc.v2(t, e);
}, n.prototype.setPositionType = function(e) {
var o, n, i = ((o = {})[t.ParticlePositionType.Free] = cc.ParticleSystem.PositionType.FREE, 
o[t.ParticlePositionType.Relative] = cc.ParticleSystem.PositionType.RELATIVE, o[t.ParticlePositionType.Grouped] = cc.ParticleSystem.PositionType.GROUPED, 
o);
this.nativeRenderer.positionType = null !== (n = i[e]) && void 0 !== n ? n : cc.ParticleSystem.PositionType.FREE;
}, n.prototype.setEmitterMode = function(e) {
var o, n, i = ((o = {})[t.ParticleEmitterMode.Gravity] = cc.ParticleSystem.EmitterMode.GRAVITY, 
o[t.ParticleEmitterMode.Radius] = cc.ParticleSystem.EmitterMode.RADIUS, o);
this.nativeRenderer.emitterMode = null !== (n = i[e]) && void 0 !== n ? n : cc.ParticleSystem.EmitterMode.GRAVITY;
}, n.prototype.setGravity = function(t, e) {
this.nativeRenderer.gravity = cc.v2(t, e);
}, n.prototype.setSpeed = function(t) {
this.setPropWithVar("speed", t);
}, n.prototype.setTangentialAccel = function(t) {
this.setPropWithVar("tangentialAccel", t);
}, n.prototype.setRadialAccel = function(t) {
this.setPropWithVar("radialAccel", t);
}, n.prototype.setRotationIsDir = function(t) {
this.nativeRenderer.rotationIsDir = t;
}, n.prototype.setStartRadius = function(t) {
this.setPropWithVar("startRadius", t);
}, n.prototype.setEndRadius = function(t) {
this.setPropWithVar("endRadius", t);
}, n.prototype.setRotatePerS = function(t) {
this.setPropWithVar("rotatePerS", t);
}, n.prototype.setSrcBlendFactor = function(t) {
this.nativeRenderer.srcBlendFactor = Bi(t);
}, n.prototype.setDstBlendFactor = function(t) {
this.nativeRenderer.dstBlendFactor = Bi(t);
}, n.prototype.setParticleCtrl = function(e) {
e === t.ParticleControl.Stop ? this.nativeRenderer.stopSystem() : e === t.ParticleControl.Reset && this.nativeRenderer.resetSystem();
}, n.prototype.setPropWithVar = function(t, e) {
Array.isArray(e) ? (this.nativeRenderer[t] = e[0], this.nativeRenderer[t + "Var"] = e[1]) : (this.nativeRenderer[t] = e, 
this.nativeRenderer[t + "Var"] = 0);
}, n.prototype.disposeRender = function() {
this.nativeRenderer.spriteFrame = null, this._particleImgUrl = void 0, this._atlasUrl = void 0, 
this._frameName = "", this._atlas = void 0, this._fileUrl = "", this.nativeRenderer.file = null, 
e.prototype.disposeRender.call(this);
}, n;
}(Un), Rr = function(e) {
function n(o) {
var n = e.call(this, o) || this;
n.backgroundNode = new cc.Node("BACKGROUND_SPRITE"), n.textLabelNode = new cc.Node("TEXT_LABEL"), 
n.placeholderLabelNode = new cc.Node("PLACEHOLDER_LABEL"), n.backgroundSprite = n.backgroundNode.addComponent(cc.Sprite);
var i = new Uint8Array(new Array(16).fill(255)), r = new cc.Texture2D();
r.initWithData(i, cc.Texture2D.PixelFormat.RGBA8888, 2, 2);
var s = new cc.SpriteFrame();
return s.setTexture(r), n.backgroundSprite.spriteFrame = s, n.backgroundNode.color = cc.Color.GRAY, 
n.textLabel = n.textLabelNode.addComponent(cc.Label), n.textLabel.overflow = cc.Label.Overflow.CLAMP, 
n.textLabel.enableWrapText = !1, n.placeholderLabel = n.placeholderLabelNode.addComponent(cc.Label), 
n.placeholderLabel.overflow = cc.Label.Overflow.CLAMP, n.placeholderLabel.enableWrapText = !1, 
n.addFullWidget(n.backgroundNode), n.addFullWidget(n.textLabelNode), n.addFullWidget(n.placeholderLabelNode), 
n.nativeNode.addChild(n.backgroundNode), n.nativeNode.addChild(n.textLabelNode), 
n.nativeNode.addChild(n.placeholderLabelNode), n.nativeRenderer = n.nativeNode.addComponent(cc.EditBox), 
n.nativeRenderer.background = n.backgroundSprite, n.nativeRenderer.textLabel = n.textLabel, 
n.nativeRenderer.placeholderLabel = n.placeholderLabel, n.setInputMode(t.EditBoxInputMode.SINGLE_LINE), 
n;
}
return o(n, e), n.prototype.addFullWidget = function(t) {
var e = t.addComponent(cc.Widget);
e.isAlignTop = !0, e.isAlignBottom = !0, e.isAlignLeft = !0, e.isAlignRight = !0, 
e.top = 0, e.bottom = 0, e.left = 0, e.right = 0, e.alignMode = cc.Widget.AlignMode.ALWAYS;
}, n.prototype.setText = function(t) {
this.nativeRenderer.string = t;
}, n.prototype.setBackgroundImage = function(e) {
var o = this;
this.loadAsset("editbox_bg", e, t.LoaderAssetType.SpriteFrame, function(t) {
t && (o.backgroundSprite.spriteFrame = t, o.nativeRenderer.backgroundImage = t);
});
}, n.prototype.setReturnType = function(e) {
var o, n = ((o = {})[t.EditBoxReturnType.DEFAULT] = cc.EditBox.KeyboardReturnType.DEFAULT, 
o[t.EditBoxReturnType.DONE] = cc.EditBox.KeyboardReturnType.DONE, o[t.EditBoxReturnType.SEND] = cc.EditBox.KeyboardReturnType.SEND, 
o[t.EditBoxReturnType.SEARCH] = cc.EditBox.KeyboardReturnType.SEARCH, o[t.EditBoxReturnType.GO] = cc.EditBox.KeyboardReturnType.GO, 
o);
this.nativeRenderer.returnType = n[e];
}, n.prototype.setInputFlag = function(e) {
var o, n = ((o = {})[t.EditBoxInputFlag.PASSWORD] = cc.EditBox.InputFlag.PASSWORD, 
o[t.EditBoxInputFlag.SENSITIVE] = cc.EditBox.InputFlag.SENSITIVE, o[t.EditBoxInputFlag.INITIAL_CAPS_WORD] = cc.EditBox.InputFlag.INITIAL_CAPS_WORD, 
o[t.EditBoxInputFlag.INITIAL_CAPS_SENTENCE] = cc.EditBox.InputFlag.INITIAL_CAPS_SENTENCE, 
o[t.EditBoxInputFlag.INITIAL_CAPS_ALL_CHARACTERS] = cc.EditBox.InputFlag.INITIAL_CAPS_ALL_CHARACTERS, 
o[t.EditBoxInputFlag.LOWERCASE_ALL_CHARACTERS] = cc.EditBox.InputFlag.INITIAL_CAPS_ALL_CHARACTERS, 
o);
this.nativeRenderer.inputFlag = n[e];
}, n.prototype.setInputMode = function(e) {
var o, n = ((o = {})[t.EditBoxInputMode.ANY] = cc.EditBox.InputMode.ANY, o[t.EditBoxInputMode.EMAIL_ADDR] = cc.EditBox.InputMode.EMAIL_ADDR, 
o[t.EditBoxInputMode.NUMERIC] = cc.EditBox.InputMode.NUMERIC, o[t.EditBoxInputMode.PHONENUMBER] = cc.EditBox.InputMode.PHONE_NUMBER, 
o[t.EditBoxInputMode.URL] = cc.EditBox.InputMode.URL, o[t.EditBoxInputMode.DECIMAL] = cc.EditBox.InputMode.DECIMAL, 
o[t.EditBoxInputMode.SINGLE_LINE] = cc.EditBox.InputMode.SINGLE_LINE, o);
this.nativeRenderer.inputMode = n[e];
}, n.prototype.setFontSize = function(t) {
this.nativeRenderer.fontSize = t;
}, n.prototype.setLineHeight = function(t) {
this.nativeRenderer.lineHeight = t;
}, n.prototype.setFontRgb = function(t) {
this.setRgbColor(t, Hn.color), Hn.color.a = this.nativeRenderer.fontColor.a, this.nativeRenderer.textLabel.node.color = Hn.color;
}, n.prototype.setFontAlpha = function(t) {
Hn.color.set(this.nativeRenderer.fontColor), Hn.color.a = this.opacityToAlpha(t), 
this.nativeRenderer.textLabel.node.color = Hn.color;
}, n.prototype.setPlaceholder = function(t) {
this.nativeRenderer.placeholder = t;
}, n.prototype.setPlaceholderFontSize = function(t) {
this.nativeRenderer.placeholderFontSize = t;
}, n.prototype.setPlaceholderFontRgb = function(t) {
this.setRgbColor(t, Hn.color), Hn.color.a = this.nativeRenderer.placeholderFontColor.a, 
this.nativeRenderer.placeholderLabel.node.color = Hn.color;
}, n.prototype.setPlaceholderFontAlpha = function(t) {
Hn.color.set(this.nativeRenderer.placeholderFontColor), Hn.color.a = this.opacityToAlpha(t), 
this.nativeRenderer.placeholderLabel.node.color = Hn.color;
}, n.prototype.setBackgroundRgb = function(t) {
this.setRgbColor(t, Hn.color), Hn.color.a = this.backgroundNode.color.a, this.backgroundNode.color = Hn.color;
}, n.prototype.setBackgroundAlpha = function(t) {
this.backgroundNode.opacity = this.opacityToAlpha(t);
}, n.prototype.setMaxLength = function(t) {
this.nativeRenderer.maxLength = t;
}, n.prototype._bindEditBoxEvent = function(t, e) {
var o = this;
this.bindBaseEvent(t, e, function(e) {
return function() {
var n = {
text: o.nativeRenderer.string,
eid: o.eid,
eventType: t,
worldId: o.worldId
};
o.universe.handleEditBoxEvent(n), null == e || e();
};
});
}, n.prototype.setOnEditBegin = function(t) {
this._bindEditBoxEvent("editing-did-began", t);
}, n.prototype.setOnEditChange = function(t) {
this._bindEditBoxEvent("text-changed", t);
}, n.prototype.setOnEditEnd = function(t) {
this._bindEditBoxEvent("editing-did-ended", t);
}, n;
}(Un), Br = function(t) {
function e(e) {
var o = t.call(this, e) || this;
return o._pendingUpdate = !1, o._cachedVertexCount = -1, o._cachedIndexCount = -1, 
o._cachedFormatKey = "", o._nativeMaxVertexCount = 0, o._nativeMaxIndexCount = 0, 
o.nativeRenderer = o.nativeNode.getComponent(cc.MeshRenderer) || o.nativeNode.addComponent(cc.MeshRenderer), 
o.nativeRenderer.enableAutoBatch = !1, o;
}
return o(e, t), e.prototype.setMesh = function(t) {
this._currentCustomMeshData !== t && (this._currentCustomMeshData = t, this._updateMesh());
}, e.prototype.setShadowCastingMode = function(t) {
this.nativeRenderer.shadowCastingMode = t;
}, e.prototype.setReceiveShadows = function(t) {
this.nativeRenderer.receiveShadows = t;
}, e.prototype._updateMesh = function() {
var t, e, o, n, i, r, s = this, a = this._currentCustomMeshData;
if (!a || !a.positions || !a.indices) return this.nativeRenderer.mesh = null, void this._resetMeshCache();
if (!this.nativeRenderer._assembler) {
if (this._pendingUpdate) return;
return this._pendingUpdate = !0, void cc.director.once(cc.Director.EVENT_AFTER_UPDATE, function() {
s._pendingUpdate = !1, cc.isValid(s.nativeNode) && s._updateMesh();
});
}
var l = cc.gfx;
if (l) {
var c = l.ATTR_POSITION || "a_position", u = l.ATTR_UV0 || "a_uv0", d = a.positions.length / 3, p = a.indices.length, m = this._padNativeMeshData(a, d, p);
m && (d = (a = m).positions.length / 3, p = a.indices.length);
var _ = Object.keys(a).filter(function(t) {
return "positions" !== t && "uvs" !== t && "indices" !== t && Array.isArray(a[t]);
}), f = "";
try {
for (var y = h(_), v = y.next(); !v.done; v = y.next()) {
var g = v.value, A = a[g].length / d;
f += "".concat(g, ":").concat(A, "|");
}
} catch (e) {
t = {
error: e
};
} finally {
try {
v && !v.done && (e = y.return) && e.call(y);
} finally {
if (t) throw t.error;
}
}
var x, b = this._cachedMesh;
if (void 0 !== b && d === this._cachedVertexCount && p === this._cachedIndexCount && f === this._cachedFormatKey) x = b; else {
b && (this.nativeRenderer.mesh = null, b.destroy(), this._cachedMesh = void 0);
var C = [ {
name: c,
type: l.ATTR_TYPE_FLOAT32,
num: 3
}, {
name: u,
type: l.ATTR_TYPE_FLOAT32,
num: 2
} ];
try {
for (var w = h(_), S = w.next(); !S.done; S = w.next()) {
g = S.value, A = a[g].length / d;
var R = g.startsWith("a_") ? g : "a_".concat(g);
C.push({
name: R,
type: l.ATTR_TYPE_FLOAT32,
num: A
});
}
} catch (t) {
o = {
error: t
};
} finally {
try {
S && !S.done && (n = w.return) && n.call(w);
} finally {
if (o) throw o.error;
}
}
var B = new l.VertexFormat(C);
(x = new cc.Mesh()).init(B, d, !0), this._cachedMesh = x, this._cachedVertexCount = d, 
this._cachedIndexCount = p, this._cachedFormatKey = f;
}
x.setVertices(c, a.positions), x.setVertices(u, a.uvs);
try {
for (var T = h(_), F = T.next(); !F.done; F = T.next()) R = (g = F.value).startsWith("a_") ? g : "a_".concat(g), 
x.setVertices(R, a[g]);
} catch (t) {
i = {
error: t
};
} finally {
try {
F && !F.done && (r = T.return) && r.call(T);
} finally {
if (i) throw i.error;
}
}
x.setIndices(a.indices, 0, !0), this.nativeRenderer.mesh = x;
}
}, e.prototype._padNativeMeshData = function(t, e, o) {
if (!cc.sys.isNative) return null;
var n = Math.max(this._nativeMaxVertexCount, e), i = Math.max(this._nativeMaxIndexCount, o);
if (this._nativeMaxVertexCount = n, this._nativeMaxIndexCount = i, e >= n && o >= i) return null;
for (var r = {
positions: [],
uvs: [],
indices: []
}, s = Object.keys(t), a = 0; a < s.length; a++) {
var l = s[a], c = t[l];
if (Array.isArray(c)) {
var u = c.slice();
if ("indices" === l) for (var h = c.length > 0 ? c[c.length - 1] : 0, d = c.length; d < i; d++) u.push(h); else for (var p = "positions" === l ? 3 : "uvs" === l ? 2 : c.length / e, m = Math.round(p * n), _ = c.length; _ < m; _++) u.push(_ >= p ? u[_ - p] : 0);
r[l] = u;
} else r[l] = c;
}
return r;
}, e.prototype._resetMeshCache = function() {
this._cachedMesh && this._cachedMesh.destroy(), this._cachedMesh = void 0, this._cachedVertexCount = -1, 
this._cachedIndexCount = -1, this._cachedFormatKey = "";
}, e.prototype.disposeRender = function() {
this.nativeRenderer.mesh = null, this._resetMeshCache(), this._nativeMaxVertexCount = 0, 
this._nativeMaxIndexCount = 0, this._currentCustomMeshData = null, this._pendingUpdate = !1, 
t.prototype.disposeRender.call(this);
}, e;
}(Un), Tr = function(e) {
function n(o) {
var n = e.call(this, o) || this;
return n._nativeTex = null, n._texW = 0, n._texH = 0, n._texFmt = t.PixelFormat.RGBA8888, 
n._filterMin = t.TextureFilter.Linear, n._filterMag = t.TextureFilter.Linear, n._wrapS = t.TextureWrapMode.ClampToEdge, 
n._wrapT = t.TextureWrapMode.ClampToEdge, n._spriteFrame = null, n.nativeRenderer = n.nativeNode.getComponent(cc.Sprite) || n.nativeNode.addComponent(cc.Sprite), 
n.nativeRenderer.sizeMode = cc.Sprite.SizeMode.CUSTOM, n;
}
return o(n, e), n.prototype.setTexWidth = function(t) {
this._texW = t;
}, n.prototype.setTexHeight = function(t) {
this._texH = t;
}, n.prototype.setFormat = function(t) {
this._texFmt = t;
}, n.prototype.setFilterMin = function(t) {
this._filterMin = t, this._nativeTex && this._nativeTex.setFilters(Fi(this._filterMin), Fi(this._filterMag));
}, n.prototype.setFilterMag = function(t) {
this._filterMag = t, this._nativeTex && this._nativeTex.setFilters(Fi(this._filterMin), Fi(this._filterMag));
}, n.prototype.setWrapS = function(t) {
this._wrapS = t, this._nativeTex && this._nativeTex.setWrapMode(Mi(this._wrapS), Mi(this._wrapT));
}, n.prototype.setWrapT = function(t) {
this._wrapT = t, this._nativeTex && this._nativeTex.setWrapMode(Mi(this._wrapS), Mi(this._wrapT));
}, n.prototype.setPixels = function(e) {
if (!e || !e.length || this._texW <= 0 || this._texH <= 0) this._clearTexture(); else {
var o = this._texW * this._texH * Fn(this._texFmt);
if (e.length !== o) return "[CocosTexture2DNode] pixels 大小不匹配: 期望 ".concat(o, " 字节 "), 
"(".concat(this._texW, "x").concat(this._texH, ", ").concat(t.PixelFormat[this._texFmt], "), 实际 ").concat(e.length, " 字节"), 
void this._clearTexture();
if (this._nativeTex) this._nativeTex.initWithData(e, Ti(this._texFmt), this._texW, this._texH), 
this._refreshSpriteFrame(); else {
var n = new cc.Texture2D();
n.packable = !1, n.setFilters(Fi(this._filterMin), Fi(this._filterMag)), n.setWrapMode(Mi(this._wrapS), Mi(this._wrapT)), 
n.initWithData(e, Ti(this._texFmt), this._texW, this._texH), this._nativeTex = n, 
this._bindSpriteFrame();
}
}
}, n.prototype._bindSpriteFrame = function() {
this._nativeTex && (this._spriteFrame = new cc.SpriteFrame(this._nativeTex), this.nativeRenderer.spriteFrame = this._spriteFrame, 
this._width > 0 && (this.nativeNode.width = this._width), this._height > 0 && (this.nativeNode.height = this._height));
}, n.prototype._refreshSpriteFrame = function() {
this._nativeTex && this._spriteFrame && (this._spriteFrame.setTexture(this._nativeTex), 
this.nativeRenderer.spriteFrame = this._spriteFrame);
}, n.prototype._clearTexture = function() {
this._nativeTex && (this._spriteFrame && (this.nativeRenderer.spriteFrame === this._spriteFrame && (this.nativeRenderer.spriteFrame = null), 
this._spriteFrame = null), this._nativeTex.destroy(), this._nativeTex = null);
}, n.prototype.disposeRender = function() {
this._clearTexture(), e.prototype.disposeRender.call(this);
}, n.prototype.destroyNative = function() {
this._clearTexture(), e.prototype.destroyNative.call(this);
}, n;
}(Un), Fr = function(e) {
function n(t) {
var o = e.call(this, t) || this;
return o.nativeRenderer = o.nativeNode.getComponent(cc.RichText) || o.nativeNode.addComponent(cc.RichText), 
o;
}
return o(n, e), n.prototype.setText = function(t) {
this.nativeRenderer.string = t;
}, n.prototype.setFontSize = function(t) {
this.nativeRenderer.fontSize = t;
}, n.prototype.setHorizontalAlign = function(e) {
switch (e) {
case t.TextHorizontalAlign.LEFT:
this.nativeRenderer.horizontalAlign = cc.macro.TextAlignment.LEFT;
break;

case t.TextHorizontalAlign.CENTER:
this.nativeRenderer.horizontalAlign = cc.macro.TextAlignment.CENTER;
break;

case t.TextHorizontalAlign.RIGHT:
this.nativeRenderer.horizontalAlign = cc.macro.TextAlignment.RIGHT;
}
}, n.prototype.setMaxWidth = function(t) {
this.nativeRenderer.maxWidth = t;
}, n.prototype.setLineHeight = function(t) {
this.nativeRenderer.lineHeight = t;
}, n.prototype.setFontFamily = function(t) {
this.nativeRenderer.fontFamily = t;
}, n.prototype.setFont = function(e) {
var o = this;
this.loadAsset("font", e, t.LoaderAssetType.Font, function(t) {
o.nativeRenderer.font = t;
});
}, n.prototype.setUseSystemFont = function(t) {
this.nativeRenderer.useSystemFont = t;
}, n.prototype.setCacheMode = function(e) {
switch (e) {
case t.LabelCacheMode.NONE:
this.nativeRenderer.cacheMode = cc.Label.CacheMode.NONE;
break;

case t.LabelCacheMode.BITMAP:
this.nativeRenderer.cacheMode = cc.Label.CacheMode.BITMAP;
break;

case t.LabelCacheMode.CHAR:
this.nativeRenderer.cacheMode = cc.Label.CacheMode.CHAR;
}
}, n.prototype.setImageAtlas = function(e) {
var o = this;
this.loadAsset("imageAtlas", e, t.LoaderAssetType.SpriteAtlas, function(t) {
o.nativeRenderer.imageAtlas = t;
});
}, n.prototype.setHandleTouchEvent = function(t) {
this.nativeRenderer.handleTouchEvent = t;
}, n.prototype.setOnClick = function(t) {
var e = this, o = this.nativeNode.getComponent(Mr);
o || (o = this.nativeNode.addComponent(Mr)), o.callback = t ? function(o) {
var n = {
param: null != o ? o : "",
eid: e.eid,
worldId: e.worldId
};
e.universe.handleRichTextClickEvent(n), t(n);
} : void 0;
}, n;
}(Un), Mr = function(t) {
function e() {
var e = t.apply(this, p([], d(arguments), !1)) || this;
return e.callback = void 0, e;
}
return o(e, t), e.prototype.onClick = function(t, e) {
var o;
null === (o = this.callback) || void 0 === o || o.call(this, e);
}, a([ cc._decorator.ccclass("AERichTextClickProxy") ], e);
}(cc.Component), Ir = function(e) {
function n() {
var t = e.apply(this, p([], d(arguments), !1)) || this;
return t.root = null, t.shouldRestoreContext = cc.sys.os === cc.sys.OS_ANDROID, 
t._preheatCache = new Map(), t;
}
return o(n, e), n.prototype.createRenderNode = function(e) {
switch (e) {
case t.RenderNodeType.Node:
return new Un(this.universe);

case t.RenderNodeType.Text:
return new Kn(this.universe);

case t.RenderNodeType.Sprite:
return new Cr(this.universe);

case t.RenderNodeType.Streak:
return new wr(this.universe);

case t.RenderNodeType.Particle:
return new Sr(this.universe);

case t.RenderNodeType.EditBox:
return new Rr(this.universe);

case t.RenderNodeType.Mesh:
return new Br(this.universe);

case t.RenderNodeType.Spine:
return new ii(this.universe);

case t.RenderNodeType.Graphics:
return new ci(this.universe);

case t.RenderNodeType.TraceGraphics:
return new Ci(this.universe);

case t.RenderNodeType.Mask:
return new Ni(this.universe);

case t.RenderNodeType.ScrollView:
return new Ar(this.universe);

case t.RenderNodeType.Camera:
return new xr(this.universe);

case t.RenderNodeType.Texture2D:
return new Tr(this.universe);

case t.RenderNodeType.RichText:
return new Fr(this.universe);

default:
return void y(i.UnsupportedNodeType, {
type: String(e)
});
}
}, n.prototype.createRootNode = function(e, o) {
var n = new Un(this.universe);
n.setName("AtomEngineRoot"), n.setWidgetTop(0), n.setWidgetBottom(0), n.setWidgetLeft(0), 
n.setWidgetRight(0), n.setWidgetAlignMode(t.WidgetAlignMode.Always), this.root = n.nativeNode, 
this.root.on(cc.Node.EventType.SIZE_CHANGED, this.onWindowResize, this), cc.systemEvent.on(cc.SystemEvent.EventType.KEY_DOWN, this.onKeyDown, this), 
cc.systemEvent.on(cc.SystemEvent.EventType.KEY_UP, this.onKeyUp, this), cc.game.on(cc.game.EVENT_HIDE, this.onPageHide, this), 
cc.game.on(cc.game.EVENT_SHOW, this.onPageShow, this), cc.view.on("canvas-resize", this.onCanvasResize, this);
var i = null != e ? e : cc.winSize.width, r = null != o ? o : cc.winSize.height;
return this.universe.handleWindowResize(i, r), n;
}, n.prototype.destroyRootNode = function() {
this.root && (this.root.off(cc.Node.EventType.SIZE_CHANGED, this.onWindowResize, this), 
cc.systemEvent.off(cc.SystemEvent.EventType.KEY_DOWN, this.onKeyDown, this), cc.systemEvent.off(cc.SystemEvent.EventType.KEY_UP, this.onKeyUp, this), 
cc.game.off(cc.game.EVENT_HIDE, this.onPageHide, this), cc.game.off(cc.game.EVENT_SHOW, this.onPageShow, this), 
cc.view.off("canvas-resize", this.onCanvasResize, this), this.root = null);
}, n.prototype.onWindowResize = function() {
this.root && this.universe.handleWindowResize(this.root.width, this.root.height);
}, n.prototype.onKeyDown = function(t) {
var e = t.keyCode;
this.universe.handleKeyboardEvent(e, !0);
}, n.prototype.onKeyUp = function(t) {
var e = t.keyCode;
this.universe.handleKeyboardEvent(e, !1);
}, n.prototype.getWinSize = function() {
var t = cc.winSize;
return {
width: t.width,
height: t.height
};
}, n.prototype.getDesignSize = function() {
var t = cc.view.getDesignResolutionSize();
return {
width: t.width,
height: t.height
};
}, n.prototype.captureGameImage = function(e) {
var o, n, i, r = cc.director.getScene(), s = this.getWinSize(), a = Math.max(1, Math.round(null !== (o = null == e ? void 0 : e.width) && void 0 !== o ? o : s.width)), l = Math.max(1, Math.round(null !== (n = null == e ? void 0 : e.height) && void 0 !== n ? n : s.height)), c = this.universe.layerMapping.toPhysicalMask(null !== (i = null == e ? void 0 : e.cullingMask) && void 0 !== i ? i : t.CameraLayer.Everything), u = cc.Camera.cameras.filter(function(t) {
return t.enabledInHierarchy && !t.targetTexture && 0 != (t.cullingMask & c);
}).sort(function(t, e) {
return t.depth - e.depth;
});
return u.length > 0 ? this._captureWithSceneCameras(u, r, a, l, e) : this._captureWithTempCamera(r, a, l, e);
}, n.prototype._captureWithSceneCameras = function(t, e, o, n, i) {
var r, s, a, l, c, u = cc.Camera.ClearFlags.COLOR | cc.Camera.ClearFlags.DEPTH | cc.Camera.ClearFlags.STENCIL, d = this._resolveCaptureBackground(i), p = [];
try {
(c = new cc.RenderTexture()).initWithSize(o, n, cc.RenderTexture.DepthStencilFormat.RB_FMT_D24S8);
for (var m = 0; m < t.length; m++) {
var _ = t[m];
p.push({
camera: _,
targetTexture: _.targetTexture,
clearFlags: _.clearFlags,
backgroundColor: _.backgroundColor.clone()
}), _.targetTexture = c, 0 === m && (_.clearFlags = u, d && (_.backgroundColor = d));
}
try {
for (var f = h(t), y = f.next(); !y.done; y = f.next()) (_ = y.value).render(e);
} catch (t) {
r = {
error: t
};
} finally {
try {
y && !y.done && (s = f.return) && s.call(f);
} finally {
if (r) throw r.error;
}
}
return this._readPixelsFlipped(c, o, n);
} finally {
try {
for (var v = h(p), g = v.next(); !g.done; g = v.next()) {
var A = g.value;
cc.isValid(A.camera) && (A.camera.targetTexture = A.targetTexture, A.camera.clearFlags = A.clearFlags, 
A.camera.backgroundColor = A.backgroundColor);
}
} catch (t) {
a = {
error: t
};
} finally {
try {
g && !g.done && (l = v.return) && l.call(v);
} finally {
if (a) throw a.error;
}
}
cc.isValid(c) && c.destroy();
}
}, n.prototype._captureWithTempCamera = function(e, o, n, i) {
var r, s, a, l, c;
try {
return (a = new cc.RenderTexture()).initWithSize(o, n, cc.RenderTexture.DepthStencilFormat.RB_FMT_D24S8), 
(c = (l = new cc.Node("__AtomScreenshotCamera")).addComponent(cc.Camera)).cullingMask = this.universe.layerMapping.toPhysicalMask(null !== (r = null == i ? void 0 : i.cullingMask) && void 0 !== r ? r : t.CameraLayer.Everything), 
c.clearFlags = cc.Camera.ClearFlags.COLOR | cc.Camera.ClearFlags.DEPTH | cc.Camera.ClearFlags.STENCIL, 
c.backgroundColor = null !== (s = this._resolveCaptureBackground(i)) && void 0 !== s ? s : new cc.Color(0, 0, 0, 0), 
c.alignWithScreen = !0, c.targetTexture = a, l.parent = e, c.render(e), this._readPixelsFlipped(a, o, n);
} finally {
c && cc.isValid(l) && (c.enabled = !1), cc.isValid(l) && l.destroy(), cc.isValid(a) && a.destroy();
}
}, n.prototype._resolveCaptureBackground = function(t) {
var e, o;
if (void 0 !== (null == t ? void 0 : t.backgroundColor) || void 0 !== (null == t ? void 0 : t.backgroundAlpha)) {
var n = null !== (e = null == t ? void 0 : t.backgroundColor) && void 0 !== e ? e : 0, i = void 0 !== (null == t ? void 0 : t.backgroundColor) ? 1 : 0, r = Math.max(0, Math.min(1, null !== (o = null == t ? void 0 : t.backgroundAlpha) && void 0 !== o ? o : i));
return new cc.Color(n >> 16 & 255, n >> 8 & 255, 255 & n, Math.round(255 * r));
}
}, n.prototype._readPixelsFlipped = function(e, o, n) {
var i = e.readPixels();
return {
width: o,
height: n,
pixels: this._flipPixelsVertically(i, o, n),
format: t.PixelFormat.RGBA8888
};
}, n.prototype._flipPixelsVertically = function(t, e, o) {
for (var n = 4 * e, i = new Uint8Array(t.length), r = 0; r < o; r++) {
var s = r * n, a = (o - 1 - r) * n;
i.set(t.subarray(s, s + n), a);
}
return i;
}, n.prototype.setMultiTouch = function(t) {
if (void 0 !== t) {
var e = cc.macro.ENABLE_MULTI_TOUCH;
return cc.macro.ENABLE_MULTI_TOUCH = t, e;
}
}, n.prototype.updateRootNodeAlignment = function() {
var t, e;
if (this.root) {
var o = this.root.getComponent(cc.Widget);
o && o.updateAlignment();
try {
for (var n = h(this.root.children), i = n.next(); !i.done; i = n.next()) {
var r = i.value.getComponent(cc.Widget);
r && r.updateAlignment();
}
} catch (e) {
t = {
error: e
};
} finally {
try {
i && !i.done && (e = n.return) && e.call(n);
} finally {
if (t) throw t.error;
}
}
this.onWindowResize();
}
}, n.prototype.preheatSpineSharedCache = function(t, e) {
return c(this, void 0, void 0, function() {
var o, n, i, r = this;
return u(this, function() {
if (!(t instanceof sp.SkeletonData)) throw new Error("[AtomEngine] preheatSpineSharedCache: 资源类型不是 sp.SkeletonData，请检查 paths.SkeletonData 是否指向 Spine 资源");
return (o = t._uuid) && (n = this._preheatCache.get(o)) ? [ 2, n ] : (i = this._doPreheat(t, e), 
o && (this._preheatCache.set(o, i), i.catch(function() {
return r._preheatCache.delete(o);
})), [ 2, i ]);
});
});
}, n.prototype._doPreheat = function(t, e) {
return c(this, void 0, void 0, function() {
var o, n, i, r;
return u(this, function(s) {
switch (s.label) {
case 0:
if (o = new cc.Node("__spine_preheat__"), (n = o.addComponent(sp.Skeleton)).setAnimationCacheMode(sp.Skeleton.AnimationCacheMode.SHARED_CACHE), 
n.skeletonData = t, !(i = t.getRuntimeData())) throw n.skeletonData = void 0, o.destroy(), 
new Error("[AtomEngine] preheatSpineSharedCache: getRuntimeData 失败，纹理可能未就绪");
if (0 === (r = i.animations.map(function(t) {
return t.name;
})).length) return n.skeletonData = void 0, o.destroy(), null == e || e(1), [ 2 ];
s.label = 1;

case 1:
return s.trys.push([ 1, , 3, 4 ]), [ 4, this._preheatAnimations(n, r, e) ];

case 2:
return s.sent(), [ 3, 4 ];

case 3:
return n.skeletonData = void 0, o.destroy(), [ 7 ];

case 4:
return [ 2 ];
}
});
});
}, n.prototype._preheatAnimations = function(t, e, o) {
return new Promise(function(i, r) {
var s = e.length, a = 0, l = function() {
try {
for (var c = performance.now(); a < s && (t.updateAnimationCache(e[a]), a++, null == o || o(a / s), 
!(performance.now() - c >= n.PREHEAT_FRAME_BUDGET_MS)); ) ;
if (a >= s) return void i();
cc.director.once(cc.Director.EVENT_AFTER_UPDATE, l);
} catch (t) {
r(t);
}
};
l();
});
}, n.PREHEAT_FRAME_BUDGET_MS = 8, n;
}(Tn), Dr = function(t) {
function e() {
return null !== t && t.apply(this, arguments) || this;
}
return o(e, t), e.prototype.setItem = function(t, e) {
cc.sys.localStorage.setItem(t, e);
}, e.prototype.getItem = function(t) {
return cc.sys.localStorage.getItem(t);
}, e.prototype.removeItem = function(t) {
cc.sys.localStorage.removeItem(t);
}, e.prototype.hasItem = function(t) {
return null !== cc.sys.localStorage.getItem(t);
}, e.prototype.clear = function() {
cc.sys.localStorage.clear();
}, e;
}(hn), Nr = "atom_preloaded_assets", Pr = "atom_group_versions", Er = "atom_staged_ready", Lr = "atom_downloaded_worlds", Wr = ((br = {})[t.LoaderAssetType.SpriteFrame] = cc.SpriteFrame, 
br[t.LoaderAssetType.SpriteAtlas] = cc.SpriteAtlas, br[t.LoaderAssetType.Font] = cc.Font, 
br[t.LoaderAssetType.SkeletonData] = sp.SkeletonData, br[t.LoaderAssetType.DragonBonesAsset] = dragonBones.DragonBonesAsset, 
br[t.LoaderAssetType.DragonBonesAtlasAsset] = dragonBones.DragonBonesAtlasAsset, 
br[t.LoaderAssetType.Particle] = cc.ParticleAsset, br[t.LoaderAssetType.Texture] = cc.Texture2D, 
br[t.LoaderAssetType.AudioClip] = cc.AudioClip, br[t.LoaderAssetType.Material] = cc.Material, 
br[t.LoaderAssetType.Json] = cc.JsonAsset, br[t.LoaderAssetType.Buffer] = cc.BufferAsset, 
br[t.LoaderAssetType.Effect] = cc.EffectAsset, br), Vr = function(e) {
function n(t) {
var o = e.call(this, t) || this;
return o._bundles = new Map(), o._remoteAssetCache = new Map(), o._bundleSyncWarned = new Set(), 
o._stagedReady = {}, o._stagedReadyLoaded = !1, o._preloadCache = {}, o._preloadCacheLoaded = !1, 
o._savePending = !1, o._downloadedWorlds = {}, o._downloadedWorldsLoaded = !1, o._fallbackInFlight = new Map(), 
o;
}
return o(n, e), n.prototype._loadRemoteWithTimeout = function(t, e) {
return void 0 === e && (e = 18e4), new Promise(function(o, n) {
var i = !1, r = setTimeout(function() {
i || (i = !0);
}, e);
cc.assetManager.loadRemote(t, function(t, e) {
i = !0, clearTimeout(r), t ? n(t) : o(e);
});
});
}, n.prototype._ensureStagedReadyLoaded = function() {
if (!this._stagedReadyLoaded) {
this._stagedReadyLoaded = !0;
var t = cc.sys.localStorage.getItem(Er);
t && (this._stagedReady = JSON.parse(t));
}
}, n.prototype.markBundlePackageReady = function(t, e) {
this._ensureStagedReadyLoaded(), this._stagedReady[t] !== e && (this._stagedReady[t] = e, 
cc.sys.localStorage.setItem(Er, JSON.stringify(this._stagedReady)));
}, n.prototype._dirCacheKey = function(t) {
return "dir:".concat(t);
}, n.prototype._isPreloaded = function(t, e) {
var o, n;
return this._ensureCacheLoaded(), Boolean(null === (n = null === (o = this._preloadCache[t]) || void 0 === o ? void 0 : o.assets) || void 0 === n ? void 0 : n[e]);
}, n.prototype._isPathCoveredByDir = function(t, e) {
var o, n = null === (o = this._preloadCache[t]) || void 0 === o ? void 0 : o.assets;
if (!n) return !1;
for (var i in n) if (i.startsWith("dir:")) {
var r = i.slice(4);
if ("" === r || e === r || e.startsWith(r + "/")) return !0;
}
return !1;
}, n.prototype._markPreloaded = function(t, e) {
this._ensureCacheLoaded(), this._preloadCache[t].assets[e] = !0, this._scheduleSave();
}, n.prototype._initFeaturePreloadCache = function(t, e) {
this._ensureCacheLoaded();
var o = this._preloadCache[t];
o ? o.version !== e ? (o.version = e, o.assets = {}, delete o.bundleDownloaded, 
delete o.resourcesDownloaded, delete o.compressed, delete o.deps, this._invalidateDependents(t), 
this._scheduleSave()) : o.assets || (o.assets = {}, this._scheduleSave()) : (this._preloadCache[t] = {
version: e,
assets: {}
}, this._scheduleSave());
}, n.prototype._invalidateDependents = function(t) {
var e, o, n;
try {
for (var i = h(Object.values(this._preloadCache)), r = i.next(); !r.done; r = i.next()) {
var s = r.value;
(null === (n = s.deps) || void 0 === n ? void 0 : n.includes(t)) && (delete s.bundleDownloaded, 
delete s.resourcesDownloaded);
}
} catch (t) {
e = {
error: t
};
} finally {
try {
r && !r.done && (o = i.return) && o.call(i);
} finally {
if (e) throw e.error;
}
}
}, n.prototype._ensureCacheLoaded = function() {
if (!this._preloadCacheLoaded) {
this._preloadCacheLoaded = !0;
var t = cc.sys.localStorage.getItem(Nr);
t && (this._preloadCache = JSON.parse(t));
}
}, n.prototype._scheduleSave = function(t) {
var e = this;
if (void 0 === t && (t = !1), t) return this._savePending = !1, void cc.sys.localStorage.setItem(Nr, JSON.stringify(this._preloadCache));
this._savePending || (this._savePending = !0, setTimeout(function() {
e._savePending = !1, cc.sys.localStorage.setItem(Nr, JSON.stringify(e._preloadCache));
}, 500));
}, n.prototype._ensureDownloadedWorldsLoaded = function() {
if (!this._downloadedWorldsLoaded) {
this._downloadedWorldsLoaded = !0;
var t = cc.sys.localStorage.getItem(Lr);
t && (this._downloadedWorlds = JSON.parse(t));
}
}, n.prototype.markWorldDownloaded = function(t) {
this._ensureDownloadedWorldsLoaded(), this._downloadedWorlds[t] || (this._downloadedWorlds[t] = !0, 
cc.sys.localStorage.setItem(Lr, JSON.stringify(this._downloadedWorlds)));
}, n.prototype.isWorldDownloaded = function(t) {
return this._ensureDownloadedWorldsLoaded(), !0 === this._downloadedWorlds[t];
}, n.prototype.clearWorldDownloaded = function(t) {
this._ensureDownloadedWorldsLoaded(), this._downloadedWorlds[t] && (delete this._downloadedWorlds[t], 
cc.sys.localStorage.setItem(Lr, JSON.stringify(this._downloadedWorlds)));
}, n.prototype.isBundleDownloaded = function(t) {
var e;
return this.hasLocalBundlePackage(t, null === (e = this.getSessionFeatureVersion(t)) || void 0 === e ? void 0 : e.version);
}, n.prototype.isResourcesDownloaded = function(t) {
var e;
this._ensureCacheLoaded();
var o = this._preloadCache[t];
if (!(null == o ? void 0 : o.resourcesDownloaded)) return !1;
var n = null === (e = this.getSessionFeatureVersion(t)) || void 0 === e ? void 0 : e.version;
return void 0 === n || o.version === n;
}, n.prototype.isAssetDownloaded = function(t, e, o) {
var n, i, r, s, a, l = this.buildRemoteUrl(t, e), c = l.isRemote, u = l.resolvedPath;
if (c) {
var h = this.assetCacheKey(u, o);
return !!(null === (n = this._remoteAssetCache.get(t)) || void 0 === n ? void 0 : n.has(h)) || Boolean(null === (i = cc.assetManager.cacheManager) || void 0 === i ? void 0 : i.getCache(u));
}
this._ensureCacheLoaded();
var d = null === (r = this.getSessionFeatureVersion(t)) || void 0 === r ? void 0 : r.version;
return (void 0 === d || (null === (s = this._preloadCache[t]) || void 0 === s ? void 0 : s.version) === d) && (!!(null === (a = this._preloadCache[t]) || void 0 === a ? void 0 : a.resourcesDownloaded) || !!this._isPreloaded(t, this.assetCacheKey(e, o)) || this._isPathCoveredByDir(t, e));
}, n.prototype.isDirDownloaded = function(t, e) {
var o, n, i;
this._ensureCacheLoaded();
var r = null === (o = this.getSessionFeatureVersion(t)) || void 0 === o ? void 0 : o.version;
return (void 0 === r || (null === (n = this._preloadCache[t]) || void 0 === n ? void 0 : n.version) === r) && (!!(null === (i = this._preloadCache[t]) || void 0 === i ? void 0 : i.resourcesDownloaded) || this._isPathCoveredByDir(t, e));
}, n.prototype.preloadBundles = function(t, e) {
return c(this, void 0, void 0, function() {
var o, n, i, r, s, a, l, c, d, p, m, _, f, y, v, g, A;
return u(this, function(u) {
switch (u.label) {
case 0:
this._ensureCacheLoaded(), o = [], u.label = 1;

case 1:
u.trys.push([ 1, 17, 18, 19 ]), n = h(t), i = n.next(), u.label = 2;

case 2:
if (i.done) return [ 3, 16 ];
r = i.value, u.label = 3;

case 3:
return u.trys.push([ 3, 13, , 14 ]), this.isBundleDownloaded(r) ? (null == e || e(), 
[ 3, 15 ]) : [ 4, this._loadBundleWithMeta(r) ];

case 4:
s = u.sent().deps, a = s.map(function(t) {
return t.atomFeatureName;
}), u.label = 5;

case 5:
u.trys.push([ 5, 10, 11, 12 ]), g = void 0, l = h(a), c = l.next(), u.label = 6;

case 6:
return c.done ? [ 3, 9 ] : (d = c.value, [ 4, this._loadBundleWithMeta(d) ]);

case 7:
u.sent(), this._preloadCache[d].bundleDownloaded = !0, u.label = 8;

case 8:
return c = l.next(), [ 3, 6 ];

case 9:
return [ 3, 12 ];

case 10:
return p = u.sent(), g = {
error: p
}, [ 3, 12 ];

case 11:
try {
c && !c.done && (A = l.return) && A.call(l);
} finally {
if (g) throw g.error;
}
return [ 7 ];

case 12:
return this._preloadCache[r].bundleDownloaded = !0, [ 3, 14 ];

case 13:
return m = u.sent(), _ = "".concat(r, ": ").concat(m instanceof Error ? m.message : m), 
o.push(_), [ 3, 14 ];

case 14:
null == e || e(), u.label = 15;

case 15:
return i = n.next(), [ 3, 2 ];

case 16:
return [ 3, 19 ];

case 17:
return f = u.sent(), y = {
error: f
}, [ 3, 19 ];

case 18:
try {
i && !i.done && (v = n.return) && v.call(n);
} finally {
if (y) throw y.error;
}
return [ 7 ];

case 19:
if (this._scheduleSave(!0), o.length > 0) throw new Error("preloadBundles 部分失败(".concat(o.length, "/").concat(t.length, "): ").concat(o.join("; ")));
return [ 2 ];
}
});
});
}, n.prototype.preloadFeatures = function(t) {
return c(this, void 0, void 0, function() {
var e, o, n, i, r, s;
return u(this, function(a) {
switch (a.label) {
case 0:
a.trys.push([ 0, 5, 6, 7 ]), e = h(t), o = e.next(), a.label = 1;

case 1:
return o.done ? [ 3, 4 ] : (n = o.value, [ 4, this._preloadFeatureWithDeps(n) ]);

case 2:
a.sent(), a.label = 3;

case 3:
return o = e.next(), [ 3, 1 ];

case 4:
return [ 3, 7 ];

case 5:
return i = a.sent(), r = {
error: i
}, [ 3, 7 ];

case 6:
try {
o && !o.done && (s = e.return) && s.call(e);
} finally {
if (r) throw r.error;
}
return [ 7 ];

case 7:
return [ 2 ];
}
});
});
}, n.prototype._preloadFeatureWithDeps = function(t) {
return c(this, void 0, void 0, function() {
var e, o, n, i, r, s, a, l, c, d, p;
return u(this, function(u) {
switch (u.label) {
case 0:
return this._ensureCacheLoaded(), this.isResourcesDownloaded(t) ? [ 2 ] : [ 4, this._loadBundleWithMeta(t) ];

case 1:
return e = u.sent(), o = e.bundle, n = e.deps, [ 4, this._preloadDirNative(o, "", t) ];

case 2:
if (u.sent(), !((i = n.map(function(t) {
return t.atomFeatureName;
})).length > 0)) return [ 3, 11 ];
u.label = 3;

case 3:
u.trys.push([ 3, 9, 10, 11 ]), r = h(i), s = r.next(), u.label = 4;

case 4:
return s.done ? [ 3, 8 ] : (a = s.value, [ 4, this._loadBundleWithMeta(a) ]);

case 5:
return l = u.sent().bundle, [ 4, this._preloadDirNative(l, "", a) ];

case 6:
u.sent(), this._preloadCache[a].bundleDownloaded = !0, this._preloadCache[a].resourcesDownloaded = !0, 
u.label = 7;

case 7:
return s = r.next(), [ 3, 4 ];

case 8:
return [ 3, 11 ];

case 9:
return c = u.sent(), d = {
error: c
}, [ 3, 11 ];

case 10:
try {
s && !s.done && (p = r.return) && p.call(r);
} finally {
if (d) throw d.error;
}
return [ 7 ];

case 11:
return this._preloadCache[t].bundleDownloaded = !0, this._preloadCache[t].resourcesDownloaded = !0, 
this._scheduleSave(!0), [ 2 ];
}
});
});
}, n.prototype._resolveFallbackManifest = function(t) {
var e = this, o = this._fallbackInFlight.get(t);
if (o) return o;
var n = c(e, void 0, void 0, function() {
var e, o, n;
return u(this, function(i) {
switch (i.label) {
case 0:
if (!this.universe.host.getNetworkState()) return [ 3, 4 ];
i.label = 1;

case 1:
return i.trys.push([ 1, 3, , 4 ]), [ 4, this.fetchFeatureManifestRaw(t) ];

case 2:
return [ 2, {
version: (e = i.sent()).version,
deps: e.deps
} ];

case 3:
return i.sent(), [ 3, 4 ];

case 4:
return this._ensureCacheLoaded(), [ 2, {
version: null == (o = this._preloadCache[t]) ? void 0 : o.version,
deps: null !== (n = null == o ? void 0 : o.deps) && void 0 !== n ? n : []
} ];
}
});
}).finally(function() {
return e._fallbackInFlight.delete(t);
});
return this._fallbackInFlight.set(t, n), n;
}, n.prototype._loadBundleWithMeta = function(t) {
return c(this, void 0, void 0, function() {
var e, o, n, i, r, s, a, l, c, h, d, p, m;
return u(this, function(u) {
switch (u.label) {
case 0:
return (e = this._bundles.get(t)) ? (this._ensureCacheLoaded(), o = this._preloadCache[t], 
[ 2, {
bundle: e,
version: null == o ? void 0 : o.version,
deps: (null !== (d = null == o ? void 0 : o.deps) && void 0 !== d ? d : []).map(function(t) {
return {
atomFeatureName: t
};
})
} ]) : (i = [], this._remoteBundleUrl ? (r = this.getSessionFeatureVersion(t)) ? (n = r.version, 
i = (null !== (p = r.deps) && void 0 !== p ? p : []).map(function(t) {
return {
atomFeatureName: t
};
}), [ 3, 3 ]) : [ 3, 1 ] : [ 3, 3 ]);

case 1:
return [ 4, this._resolveFallbackManifest(t) ];

case 2:
s = u.sent(), n = s.version, i = s.deps.map(function(t) {
return {
atomFeatureName: t
};
}), u.label = 3;

case 3:
return [ 4, this._loadBundleRaw(t, n) ];

case 4:
return a = u.sent(), l = a.bundle, c = a.useCompressed, this._remoteBundleUrl ? [ 3, 6 ] : [ 4, new Promise(function(t) {
l.load("bundleMeta", cc.JsonAsset, function(e, o) {
t(e ? null : o.json);
});
}) ];

case 5:
(h = u.sent()) && (i = null !== (m = h.dependencies) && void 0 !== m ? m : [], h.createTime, 
h.buildTime), u.label = 6;

case 6:
return this._bundles.set(t, l), this._initFeaturePreloadCache(t, n), this._preloadCache[t].deps = i.map(function(t) {
return t.atomFeatureName;
}), this._preloadCache[t].compressed = Boolean(c), c && i.length > 0 && this.universe.featureResolver.markFeaturesCompressed(i.map(function(t) {
return t.atomFeatureName;
})), [ 2, {
bundle: l,
version: n,
deps: i
} ];
}
});
});
}, n.prototype._shouldUseCompressed = function(t) {
var e;
if (!this._remoteBundleUrl) return !1;
this._ensureCacheLoaded();
var o = null === (e = this._preloadCache[t]) || void 0 === e ? void 0 : e.compressed;
return void 0 !== o ? o : this.universe.featureResolver.isFeatureCompressed(t);
}, n.prototype._loadBundleRaw = function(t, e) {
return c(this, void 0, void 0, function() {
var o = this;
return u(this, function() {
return [ 2, this.enqueueBundleOp(function() {
return c(o, void 0, void 0, function() {
var o, n, i, r;
return u(this, function(s) {
switch (s.label) {
case 0:
return o = this._getBundleOpts(t, e), n = o.path, i = o.bundleOpts, r = o.useCompressed, 
[ 4, new Promise(function(t, e) {
cc.assetManager.loadBundle(n, i, function(o, n) {
o ? e(o) : t(n);
});
}) ];

case 1:
return [ 2, {
bundle: s.sent(),
useCompressed: r
} ];
}
});
});
}) ];
});
});
}, n.prototype._getBundleOpts = function(t, e) {
var o = this.buildBundleUrl(t), n = {
bundleName: t
};
void 0 !== e && (n.version = String(e));
var i = void 0 !== e && this._shouldUseCompressed(t);
return i && (n.hspkg = !0, n.hspkgUrl = "".concat(o, "/").concat(t, ".").concat(e, ".hspkg")), 
{
path: o,
bundleOpts: n,
useCompressed: i
};
}, n.prototype.onFeaturesRetained = function(t) {
var e, o;
this._ensureCacheLoaded();
try {
for (var n = h(t), i = n.next(); !i.done; i = n.next()) {
var r = i.value;
this._preloadCache[r] && (this._preloadCache[r].bundleDownloaded = !0);
}
} catch (t) {
e = {
error: t
};
} finally {
try {
i && !i.done && (o = n.return) && o.call(n);
} finally {
if (e) throw e.error;
}
}
this._scheduleSave(!0);
}, n.prototype.doLoadFeature = function(t) {
return c(this, void 0, void 0, function() {
return u(this, function(e) {
switch (e.label) {
case 0:
return [ 4, this._loadBundleWithMeta(t.atomFeatureName) ];

case 1:
return [ 2, e.sent().deps ];
}
});
});
}, n.prototype.fetchFeatureManifestRaw = function(t) {
return c(this, void 0, void 0, function() {
var e, o, n, i, r;
return u(this, function(s) {
switch (s.label) {
case 0:
return this._remoteBundleUrl ? (e = this._preRelease ? "bundleMetaPre.json" : "bundleMeta.json", 
o = "".concat(this.buildBundleUrl(t), "/").concat(e, "?t=").concat(Date.now()), 
[ 4, this._loadRemoteWithTimeout(o) ]) : [ 2, {
deps: []
} ];

case 1:
return n = s.sent(), [ 2, {
version: (i = n.json).version,
deps: (null !== (r = i.dependencies) && void 0 !== r ? r : []).map(function(t) {
return t.atomFeatureName;
})
} ];
}
});
});
}, n.prototype.downloadCtrl = function(t) {
var e = cc.assetManager;
"loadSmoothness" in e && e.loadSmoothness !== t && (e.loadSmoothness = t);
}, n.prototype.getPlatformName = function() {
return "creator2";
}, n.prototype.getSystemName = function() {
if (cc.sys.isNative) {
if (cc.sys.os === cc.sys.OS_IOS) return "ios";
if (cc.sys.os === cc.sys.OS_ANDROID) return "android";
}
return "web-desktop";
}, n.prototype.doReleaseFeatureAssets = function(t) {
var e, o, n = this._bundles.get(t);
if (n) try {
n.releaseAll();
} catch (e) {
var i = e instanceof Error ? e.message : String(e);
this.universe.host.track("atomengine_game_common_execution_failed", {
error_type: "bundle.releaseAll 内部异常",
error_message: "".concat(t, " ---\x3e ").concat(i)
});
}
var r = this._remoteAssetCache.get(t);
if (r) {
try {
for (var s = h(r.values()), a = s.next(); !a.done; a = s.next()) {
var l = a.value;
l instanceof cc.Asset && cc.assetManager.releaseAsset(l);
}
} catch (t) {
e = {
error: t
};
} finally {
try {
a && !a.done && (o = s.return) && o.call(s);
} finally {
if (e) throw e.error;
}
}
this._remoteAssetCache.delete(t);
}
}, n.prototype.doReleaseAsset = function(t, e, o) {
var n = this.buildRemoteUrl(t, e), i = n.isRemote, r = n.resolvedPath;
if (i) {
var s = this.assetCacheKey(r, o), a = this._remoteAssetCache.get(t);
if (!a) return "无缓存";
var l = a.get(s);
if (void 0 === l) return "无资源";
if (l instanceof cc.Asset) {
var c = l instanceof cc.SpriteFrame ? l.getTexture() : void 0;
cc.assetManager.releaseAsset(l), c instanceof cc.Texture2D && cc.assetManager.releaseAsset(c);
}
return a.delete(s), 0 === a.size && this._remoteAssetCache.delete(t), "";
}
var u = this._bundles.get(t);
if (!u) return "特性未加载";
var h = Wr[o];
return h ? (u.release(e, h), "") : "不支持的资源类型";
}, n.prototype.doRemoveFeatureBundle = function(t) {
var e, o, n = this._bundles.get(t);
if (n) {
cc.assetManager.removeBundle(n), this._bundles.delete(t);
var i = "".concat(n.name, "/");
try {
for (var r = h(this._bundleSyncWarned), s = r.next(); !s.done; s = r.next()) {
var a = s.value;
a.startsWith(i) && this._bundleSyncWarned.delete(a);
}
} catch (t) {
e = {
error: t
};
} finally {
try {
s && !s.done && (o = r.return) && o.call(r);
} finally {
if (e) throw e.error;
}
}
}
}, n.prototype.hasLocalBundlePackage = function(t, e) {
this._ensureCacheLoaded();
var o = this._preloadCache[t];
if (void 0 === e || (null == o ? void 0 : o.version) === e) {
if (this._bundles.has(t)) return !0;
if (null == o ? void 0 : o.bundleDownloaded) return !0;
}
return void 0 !== e && (this._ensureStagedReadyLoaded(), this._stagedReady[t] === e);
}, n.prototype.stageFeaturePackage = function(t, e) {
return c(this, void 0, void 0, function() {
var o = this;
return u(this, function() {
return [ 2, this.enqueueBundleOp(function() {
return c(o, void 0, void 0, function() {
var o, n, i;
return u(this, function(r) {
switch (r.label) {
case 0:
return o = this._getBundleOpts(t, e), n = o.path, i = o.bundleOpts, [ 4, new Promise(function(t, e) {
cc.assetManager.preloadBundle(n, i, function(o, n) {
o ? e(o) : n.preloadAll(function(o) {
n.release(), o ? e(o) : t();
});
});
}) ];

case 1:
return r.sent(), [ 2 ];
}
});
});
}) ];
});
});
}, n.prototype.loadGroupVersions = function() {
var t = cc.sys.localStorage.getItem(Pr);
return t ? JSON.parse(t) : {};
}, n.prototype.saveGroupVersions = function(t) {
cc.sys.localStorage.setItem(Pr, JSON.stringify(t));
}, n.prototype.loadVersionState = function() {
var t = cc.sys.localStorage.getItem("atom_feature_versions");
return t ? JSON.parse(t) : {};
}, n.prototype._bundleSyncGet = function(t, e, o) {
try {
return t.get(e, o);
} catch (o) {
var n = "".concat(t.name, "/").concat(e);
return void (this._bundleSyncWarned.has(n) || this._bundleSyncWarned.add(n));
}
}, n.prototype.tryGetCachedAsset = function(t, e, o) {
var n, i, r = this.buildRemoteUrl(t, e), s = r.isRemote, a = r.resolvedPath;
if (s) {
var l = this.assetCacheKey(a, o);
return null !== (i = null === (n = this._remoteAssetCache.get(t)) || void 0 === n ? void 0 : n.get(l)) && void 0 !== i ? i : void 0;
}
var c = this._bundles.get(t);
if (c) {
var u = Wr[o];
if (u) return this._bundleSyncGet(c, e, u);
}
}, n.prototype.loadAsset = function(t, e, o) {
return c(this, void 0, void 0, function() {
var n, i, r, s, a, l, c = this;
return u(this, function() {
return n = this.buildRemoteUrl(t, e), i = n.isRemote, r = n.resolvedPath, i ? [ 2, this._loadRemoteAsset(t, r, o) ] : (s = this._bundles.get(t)) ? (a = Wr[o]) ? (l = this._bundleSyncGet(s, e, a)) ? [ 2, l ] : [ 2, new Promise(function(n, i) {
s.load(e, a, function(r, s) {
r ? i(new Error("加载资源失败 [".concat(t, "/").concat(e, "]: ").concat(r.message))) : (c._markPreloaded(t, c.assetCacheKey(e, o)), 
n(s));
});
}) ] : [ 2, Promise.reject(new Error("不支持的资源类型: ".concat(o))) ] : [ 2, Promise.reject(new Error("特性未加载: ".concat(t))) ];
});
});
}, n.prototype._loadRemoteAsset = function(t, e, o) {
var n = this, i = this.assetCacheKey(e, o), r = this._remoteAssetCache.get(t);
r || (r = new Map(), this._remoteAssetCache.set(t, r));
var s = r.get(i);
return void 0 !== s ? Promise.resolve(s) : this._loadRemoteWithTimeout(e).then(function(t) {
var e = n._normalizeRemoteAsset(t, o);
return r.set(i, e), e;
});
}, n.prototype._normalizeRemoteAsset = function(e, o) {
switch (o) {
case t.LoaderAssetType.Json:
return e;

case t.LoaderAssetType.SpriteFrame:
if (e instanceof cc.Texture2D) {
var n = new cc.SpriteFrame();
return n.setTexture(e), n;
}
return e;

default:
return e;
}
}, n.prototype.loadDir = function(t, e, o) {
return c(this, void 0, void 0, function() {
var n, i, r, s, a, l, h, d, p = this;
return u(this, function(m) {
switch (m.label) {
case 0:
return (n = this._bundles.get(t)) ? (i = n.getDirWithPath(e), r = 0, s = i.length, 
l = function() {
return c(p, void 0, void 0, function() {
var e;
return u(this, function(o) {
switch (o.label) {
case 0:
e = function() {
var e;
return u(this, function(o) {
switch (o.label) {
case 0:
return (e = i[r++]) ? [ 4, new Promise(function(o) {
n.load(e.path, e.ctor, function(n) {
n && (null != a || (a = new Error("加载资源失败 [".concat(t, "/").concat(e.path, "]: ").concat(n.message)))), 
o();
});
}) ] : [ 2, "continue" ];

case 1:
return o.sent(), [ 2 ];
}
});
}, o.label = 1;

case 1:
return r < s && !a ? [ 5, e() ] : [ 3, 3 ];

case 2:
return o.sent(), [ 3, 1 ];

case 3:
return [ 2 ];
}
});
});
}, h = this._resolveConcurrency(o, 8), (d = 0 === h ? s : Math.min(h, s)) <= 0 ? [ 2 ] : [ 4, Promise.all(Array.from({
length: d
}, l)) ]) : [ 2, Promise.reject(new Error("特性未加载: ".concat(t))) ];

case 1:
if (m.sent(), a) throw a;
return this._markPreloaded(t, this._dirCacheKey(e)), [ 2 ];
}
});
});
}, n.prototype.preloadAsset = function(t, e, o) {
return c(this, void 0, void 0, function() {
var n, i, r, s, a, l, c = this;
return u(this, function(u) {
switch (u.label) {
case 0:
return n = this.buildRemoteUrl(t, e), i = n.isRemote, r = n.resolvedPath, i ? [ 4, this._loadRemoteAsset(t, r, o) ] : [ 3, 2 ];

case 1:
return u.sent(), [ 2 ];

case 2:
if (s = this.assetCacheKey(e, o), this._isPreloaded(t, s)) return [ 2 ];
if (!(a = Wr[o])) throw new Error("不支持的资源类型: ".concat(o));
return [ 4, this._loadBundleWithMeta(t) ];

case 3:
return l = u.sent().bundle, [ 2, new Promise(function(o, n) {
l.preload(e, a, function(i) {
i ? n(new Error("预加载资源失败 [".concat(t, "/").concat(e, "]: ").concat(i.message))) : (c._markPreloaded(t, s), 
o());
});
}) ];
}
});
});
}, n.prototype.preloadDir = function(t, e, o) {
return c(this, void 0, void 0, function() {
var n, i, r, s, a;
return u(this, function(l) {
switch (l.label) {
case 0:
return n = this._dirCacheKey(e), this._isPreloaded(t, n) ? [ 2 ] : [ 4, this._loadBundleWithMeta(t) ];

case 1:
return i = l.sent().bundle, r = "".concat(t, "/").concat(e), 0 !== (s = this._resolveConcurrency(o, -4)) ? [ 3, 3 ] : [ 4, this._preloadDirNative(i, e, r) ];

case 2:
return l.sent(), [ 3, 5 ];

case 3:
return a = i.getDirWithPath(e), [ 4, this._preloadWithConcurrency(i, a, s, r) ];

case 4:
l.sent(), l.label = 5;

case 5:
return this._markPreloaded(t, n), [ 2 ];
}
});
});
}, n.prototype._resolveConcurrency = function(t, e) {
var o = null != t ? t : e;
return 0 === o ? 0 : o > 0 ? o : this.universe.host.isLowEndDevice() ? -o : 0;
}, n.prototype._preloadDirNative = function(t, e, o) {
return new Promise(function(n, i) {
t.preloadDir(e, function(t) {
t ? i(new Error("预加载目录失败 [".concat(o, "]: ").concat(t.message))) : n();
});
});
}, n.prototype._preloadWithConcurrency = function(t, e, o, n) {
return c(this, void 0, void 0, function() {
var i, r, s, a, l = this;
return u(this, function(h) {
switch (h.label) {
case 0:
return i = 0, r = e.length, a = function() {
return c(l, void 0, void 0, function() {
var o;
return u(this, function(a) {
switch (a.label) {
case 0:
o = function() {
var o;
return u(this, function(r) {
switch (r.label) {
case 0:
return o = e[i++], [ 4, new Promise(function(e) {
t.preload(o.path, o.ctor, function(t) {
t && (null != s || (s = new Error("预加载失败 [".concat(n, "/").concat(o.path, "]: ").concat(t.message)))), 
e();
});
}) ];

case 1:
return r.sent(), [ 2 ];
}
});
}, a.label = 1;

case 1:
return i < r && !s ? [ 5, o() ] : [ 3, 3 ];

case 2:
return a.sent(), [ 3, 1 ];

case 3:
return [ 2 ];
}
});
});
}, [ 4, Promise.all(Array.from({
length: o
}, a)) ];

case 1:
if (h.sent(), s) throw s;
return [ 2 ];
}
});
});
}, n;
}(Vn), Or = function(t) {
function e() {
return null !== t && t.apply(this, arguments) || this;
}
return o(e, t), e.prototype.playEffect = function(t, e, o) {
if (!t) return -1;
var n = cc.audioEngine.playEffect(t, o);
return cc.audioEngine.setVolume(n, e), n;
}, e.prototype.stopEffect = function(t) {
t >= 0 && cc.audioEngine.stopEffect(t);
}, e.prototype.setEffectsVolume = function(t) {
cc.audioEngine.setEffectsVolume(t);
}, e.prototype.stopAllEffects = function() {
cc.audioEngine.stopAllEffects();
}, e.prototype.playMusic = function(t, e, o) {
t && (cc.audioEngine.playMusic(t, e), cc.audioEngine.setMusicVolume(o));
}, e.prototype.stopMusic = function() {
cc.audioEngine.stopMusic();
}, e.prototype.pauseMusic = function() {
cc.audioEngine.pauseMusic();
}, e.prototype.resumeMusic = function() {
cc.audioEngine.resumeMusic();
}, e.prototype.setMusicVolume = function(t) {
cc.audioEngine.setMusicVolume(t);
}, e;
}(function() {}), kr = function(e) {
function n() {
return null !== e && e.apply(this, arguments) || this;
}
return o(n, e), n.prototype.tryGetNativeModule = function(t) {
var e = window.jsb;
if (!(null == e ? void 0 : e.getNativeModule)) return null;
var o = e.getNativeModule(t);
return o && 0 !== Object.keys(o).length ? o : null;
}, n.prototype.loadWasmBinary = function(e) {
return c(this, void 0, void 0, function() {
return u(this, function(o) {
switch (o.label) {
case 0:
return [ 4, this.universe.asset.loadAsset(e.featureName, e.path, t.LoaderAssetType.Buffer) ];

case 1:
return [ 2, o.sent()._buffer ];
}
});
});
}, n;
}(function() {
function t(t) {
this.universe = t, this._modules = new Map();
}
return t.prototype.getModule = function(t) {
return c(this, void 0, void 0, function() {
var e, o, n, i, r;
return u(this, function(s) {
switch (s.label) {
case 0:
return (e = this._modules.get(t.moduleName)) ? [ 2, e ] : (o = this.tryGetNativeModule(t.moduleName)) ? (this._modules.set(t.moduleName, o), 
[ 2, o ]) : [ 4, this.loadWasmBinary(t) ];

case 1:
if (n = s.sent(), !t.emscriptenInit) return [ 3, 6 ];
s.label = 2;

case 2:
return s.trys.push([ 2, 4, , 5 ]), [ 4, t.emscriptenInit({
wasmBinary: n
}) ];

case 3:
return i = s.sent(), [ 3, 5 ];

case 4:
return s.sent(), i = {}, [ 3, 5 ];

case 5:
return [ 3, 9 ];

case 6:
return s.trys.push([ 6, 8, , 9 ]), [ 4, WebAssembly.instantiate(n) ];

case 7:
return r = s.sent(), i = r.instance.exports, [ 3, 9 ];

case 8:
return s.sent(), i = {}, [ 3, 9 ];

case 9:
return this._modules.set(t.moduleName, i), [ 2, i ];
}
});
});
}, t;
}()), Gr = function() {}, zr = function(t) {
function e() {
return null !== t && t.apply(this, arguments) || this;
}
return o(e, t), e.prototype.restartApplication = function() {
cc.sys.isBrowser ? location.reload() : cc.game.restart();
}, e.prototype.getSystemLanguage = function() {
return cc.sys.language;
}, e.prototype.getSystemLanguageCode = function() {
return cc.sys.languageCode;
}, e;
}(Gr);
function jr(t) {
return Boolean(t) && t.ready && !t.isPaused;
}
var qr = function() {
function t(t) {
this.storageDataStore = new Map(), this.configDataStore = new Map(), this._worlds = new Map(), 
this._mainWorld = null, this._worldInstanceMaps = new Map(), this._worldLogicSubscribers = new Map(), 
this._worldRootNodes = new Map(), this.fieldWatchers = new Map(), this._onReady = null, 
this._onLoadProgress = null, this._onLoadError = null, this.disableSaveStorage = !1;
var e = t.mainWorldId, o = t.universeFeatureList, n = t.remoteBundleUrl, i = t.remoteAssetUrl, r = t.preRelease, s = t.onReady, a = t.host, l = t.initialWidth, c = void 0 === l ? 0 : l, u = t.initialHeight, h = void 0 === u ? 0 : u, d = t.onLoadProgress, p = t.onLoadError, m = t.layerMapping, _ = t.storageKeys, f = void 0 === _ ? [] : _, y = e;
this.layerMapping = new Pn(m), this.storageKeys = new Set(f), this._onReady = s, 
this._onLoadProgress = null != d ? d : null, this._onLoadError = null != p ? p : null, 
this.featureResolver = new C(o), this.render = new Ir(this), this.storage = new Dr(this), 
this.asset = new Vr(this), this.audio = new Or(), this.native = new kr(this), this.runtime = new zr(), 
this.host = a, this.host.universe = this, n && this.asset.setRemoteBundleUrl(n), 
i && this.asset.setRemoteAssetUrl(i), r && this.asset.setPreRelease(r), this._createMainWorld(y, c, h);
}
return t.create = function(e) {
return new t(e);
}, t.prototype.forEachWorld = function(t) {
var e, o;
try {
for (var n = h(this._worlds.values()), i = n.next(); !i.done; i = n.next()) t(i.value);
} catch (t) {
e = {
error: t
};
} finally {
try {
i && !i.done && (o = n.return) && o.call(n);
} finally {
if (e) throw e.error;
}
}
}, t.prototype.getWorldRenderTimeScale = function(t) {
var e, o;
return null !== (o = null === (e = this._worlds.get(t)) || void 0 === e ? void 0 : e.renderTimeScale) && void 0 !== o ? o : 1;
}, t.prototype.applyWorldRenderTimeScale = function(t) {
var e = this.getWorldRenderTimeScale(t), o = this._worldInstanceMaps.get(t);
if (o) for (var n in o) {
var i = o[Number(n)];
if (i) for (var r = i.nodes, s = 0; s < r.length; s++) r[s].applyWorldTimeScale(e);
}
}, t.prototype._createMainWorld = function(t, e, o) {
var n, i, r = this;
this._mainWorld = this._createWorld({
worldId: t,
worldPath: t,
randomSeed: 0,
parentWorld: null,
entityInParent: 0,
initialWidth: e,
initialHeight: o,
multiTouch: !1,
onLoadProgress: null !== (n = this._onLoadProgress) && void 0 !== n ? n : void 0,
onLoadError: null !== (i = this._onLoadError) && void 0 !== i ? i : void 0
}, function() {
var t;
r.host.setMainWorld(r._mainWorld), null === (t = r._onReady) || void 0 === t || t.call(r);
});
}, t.prototype._getInputAtomInWorld = function(t, e) {
var o = this._worlds.get(t);
if (jr(o)) return o.getAtomIns(e);
}, t.prototype.handlePointerEvent = function(t) {
var e = this._getInputAtomInWorld(t.worldId, lo);
if (e) {
var o = e.data;
o.x = t.x, o.y = t.y, o.dx = t.dx, o.dy = t.dy, o.touchId = t.touchId, o.localX = t.localX, 
o.localY = t.localY, o.multiTouchs = t.multiTouchs, e.emit(t.eid);
}
}, t.prototype.handleScrollEvent = function(t) {
var e = this._getInputAtomInWorld(t.worldId, po);
if (e) {
var o = e.data;
o.contentX = t.contentX, o.contentY = t.contentY, e.emit(t.eid);
}
}, t.prototype.handleSizeInputEvent = function(t) {
var e = this._getInputAtomInWorld(t.worldId, mo);
if (e) {
var o = e.data;
o.width = t.width, o.height = t.height, e.emit(t.eid);
}
}, t.prototype.handlePositionInputEvent = function(t) {
var e = this._getInputAtomInWorld(t.worldId, _o);
if (e) {
var o = e.data;
o.x = t.x, o.y = t.y, e.emit(t.eid);
}
}, t.prototype.handleRichTextClickEvent = function(t) {
var e = this._getInputAtomInWorld(t.worldId, on);
e && (e.data.param = t.param);
}, t.prototype.handleEditBoxEvent = function(t) {
var e = this._getInputAtomInWorld(t.worldId, fo);
e && (e.data.text = t.text, e.emit(t.eid));
}, t.prototype.handleSpineFrameEvent = function(t) {
var e = this._getInputAtomInWorld(t.worldId, yo);
e && (e.data.frameEventName = t.frameEventName, e.emit(t.eid));
}, t.prototype.handleKeyboardEvent = function(t, e) {
var o, n;
try {
for (var i = h(this._worlds.values()), r = i.next(); !r.done; r = i.next()) {
var s = r.value;
if (jr(s)) {
var a = s.getAtomIns(co), l = a.data;
l.keyCode = t, l.isDown = e, a.emit();
}
}
} catch (t) {
o = {
error: t
};
} finally {
try {
r && !r.done && (n = i.return) && n.call(i);
} finally {
if (o) throw o.error;
}
}
}, t.prototype.handleWindowResize = function(t, e) {
var o = this._mainWorld;
if (null == o ? void 0 : o.ready) {
var n = o.getAtomIns(uo), i = n.data.width, r = n.data.height;
i === t && r === e || (n.data.width = t, n.data.height = e, n.emit());
}
}, t.prototype.getRootWindowSize = function() {
var t = this._mainWorld;
return (null == t ? void 0 : t.ready) ? this._getRootWindowSize(t) : {
width: 0,
height: 0
};
}, t.prototype.createRootNode = function(t, e) {
return this._rootNode = this.render.createRootNode(t, e), this._worldRootNodes.set(this._mainWorld.config.worldId, this._rootNode), 
this._rootNode;
}, t.prototype.onFieldWrite = function(t, e, o, n) {
var i, r, s, a, l = "".concat(t, ":").concat(e.join(".")), c = this.fieldWatchers.get(l);
if (c) try {
for (var u = h(c), d = u.next(); !d.done; d = u.next()) {
var p = d.value, m = p.instance;
if (!(void 0 !== o && m.eid !== o || (x = m.renderAtom.atomWorld).disposed || void 0 !== n && "storage" === e[0] && x.storageScope !== n)) {
var _ = m._dirtyPreciseOps;
if (_) {
var f = m.renderAtom.atomName, y = 0 === _.size;
if (!y) {
var v = x.dirtyEntityComponents.get(m.eid);
y = !(null == v ? void 0 : v.has(f));
}
y && x.markEntityComponentDirty(m.eid, f), _.add(p.opIndex);
}
}
}
} catch (t) {
i = {
error: t
};
} finally {
try {
d && !d.done && (r = u.return) && r.call(u);
} finally {
if (i) throw i.error;
}
}
if ("storage" === e[0]) try {
for (var g = h(this._worlds.values()), A = g.next(); !A.done; A = g.next()) {
var x;
!(x = A.value).disposed && x.hasAtomIns(t) && (void 0 !== n && x.storageScope !== n || x.markStorageDirty(t));
}
} catch (t) {
s = {
error: t
};
} finally {
try {
A && !A.done && (a = g.return) && a.call(g);
} finally {
if (s) throw s.error;
}
}
}, t.prototype.update = function(t) {
var e, o;
try {
for (var n = h(this._worlds.values()), i = n.next(); !i.done; i = n.next()) {
var r = i.value;
if (r.ready && !r.disposed) {
var s = Re(r);
r.isPaused || r.worldUpdate(t), this._rootNode && (this._processWorldChanges(r), 
this._syncWorldRenderData(r)), s && !s.disposed ? Re(s) : Be(r);
}
}
} catch (t) {
e = {
error: t
};
} finally {
try {
i && !i.done && (o = n.return) && o.call(n);
} finally {
if (e) throw e.error;
}
}
}, t.prototype.switchInstanceEid = function(t, e) {
var o, n;
if (t.eid !== e) {
t.eid = e;
try {
for (var i = h(t.nodes), r = i.next(); !r.done; r = i.next()) r.value.eid = e;
} catch (t) {
o = {
error: t
};
} finally {
try {
r && !r.done && (n = i.return) && n.call(i);
} finally {
if (o) throw o.error;
}
}
t.renderAtom.refreshInstance(t, e);
}
}, t.prototype._createWorld = function(t, e) {
var o = new bn(this), n = t.worldId;
return o.initFromConfig(t), this._worldInstanceMaps.set(n, {}), this._worldLogicSubscribers.set(n, new Map()), 
this._worlds.set(n, o), o.registerFeatures(e), o;
}, t.prototype._processWorldChanges = function(t) {
var e, o, n = t.worldChanges;
if (0 !== n.length) {
var i = this._worldInstanceMaps.get(t.config.worldId);
try {
for (var r = h(n), s = r.next(); !s.done; s = r.next()) {
var a = s.value;
switch (a.type) {
case un.RenderCreate:
this._createRenderInstance(t, i, a.eid, a.domainName);
break;

case un.RenderDestroy:
this._destroyRenderInstance(t, i, a.eid);
break;

case un.RelationAdd:
a.relationName === To && this._addChild(t, i, a.source, a.target);
break;

case un.RelationRemove:
if (a.relationName === To) {
var l = t.getAtomIns(To);
ie(t.ecsWorld, a.target) && l.getParent(a.target) || (l.mountSlots.delete(a.target), 
this._removeChild(i, a.target));
}
break;

case un.WorldCreate:
this._worldCreate(t, a.eid);
break;

case un.WorldDestroy:
this._worldDestroy(t, a.eid);
break;

case un.WorldRestart:
this._worldRestart(t, a.eid);
}
}
} catch (t) {
e = {
error: t
};
} finally {
try {
s && !s.done && (o = r.return) && o.call(r);
} finally {
if (e) throw e.error;
}
}
n.length = 0;
}
}, t.prototype._getRootWindowSize = function(t) {
for (var e = t; e.config.parentWorld; ) e = e.config.parentWorld;
if (e.disposed || !e.hasAtomIns(uo)) return {
width: 0,
height: 0
};
var o = e.getAtomIns(uo);
return {
width: o.data.width,
height: o.data.height
};
}, t.prototype._worldCreate = function(t, e) {
var o = this, n = t.getAtomIns(so), i = 0 === n.box.width[e] && 0 === n.box.height[e], r = this._getRootWindowSize(t);
i && (n.box.width.set(e, r.width), n.box.height.set(e, r.height));
var s = t.resolveChildWorldConfig(e);
if (s) {
var a = this._worldInstanceMaps.get(t.config.worldId);
if ((null == a ? void 0 : a[e]) && (this._worldRootNodes.set(s.worldId, a[e].rootNode), 
i)) {
var l = a[e];
l.renderAtom.refreshInstance(l, e);
}
var c = this._createWorld(s, function() {
var e = o._getRootWindowSize(t), n = c.getAtomIns(uo);
n.data.width = e.width, n.data.height = e.height, n.emit(c.rootEid);
});
c.autoResizeBox = i, t.addChildWorld(e, c);
}
}, t.prototype.onContextRestore = function() {
var t, e;
try {
for (var o = h(this._worldInstanceMaps.values()), n = o.next(); !n.done; n = o.next()) {
var i = n.value;
for (var r in i) {
var s = i[r];
s && s.renderAtom.onContextRestore(s);
}
}
} catch (e) {
t = {
error: e
};
} finally {
try {
n && !n.done && (e = o.return) && e.call(o);
} finally {
if (t) throw t.error;
}
}
}, t.prototype.destroyWorldRender = function(t) {
var e = t.config.worldId, o = this._worldInstanceMaps.get(e);
if (o) for (var n in o) {
var i = o[Number(n)];
i && i.renderAtom.destroyRender(i);
}
this._worldInstanceMaps.delete(e), this._worldLogicSubscribers.delete(e), this._worldRootNodes.delete(e);
}, t.prototype._worldDestroy = function(t, e) {
var o = t.getChildWorld(e);
o && (this._destroyWorldTree(o), t.removeChildWorld(e));
}, t.prototype._destroyWorldTree = function(t) {
var e, o, n = [];
t.forEachChildWorld(function(t, e) {
n.push(e);
});
try {
for (var i = h(n), r = i.next(); !r.done; r = i.next()) {
var s = r.value, a = t.getChildWorld(s);
a && this._destroyWorldTree(a);
}
} catch (t) {
e = {
error: t
};
} finally {
try {
r && !r.done && (o = i.return) && o.call(i);
} finally {
if (e) throw e.error;
}
}
this._unmountChildWorldRoot(t), t.dispose(), this._worlds.delete(t.config.worldId);
}, t.prototype._worldRestart = function(t, e) {
var o = this, n = t.getChildWorld(e);
if (n && n.ready) {
var i = n.config.worldId, r = t.resolveChildWorldConfig(e);
if (r) {
n.isPaused = !0;
var s = n.autoResizeBox;
n.config.parentWorld && this.render.setMultiTouch(n.prevMultiTouch);
var a = this._worldInstanceMaps.get(i), l = new Map(this.featureResolver.getFeatureSet(i));
this._worlds.delete(i), this._worldInstanceMaps.delete(i), this._worldLogicSubscribers.delete(i);
var c = this._createWorld(r, function() {
var e, i, r = [];
n.forEachChildWorld(function(t, e) {
r.push(e);
});
try {
for (var s = h(r), u = s.next(); !u.done; u = s.next()) {
var d = u.value, p = n.getChildWorld(d);
p && o._destroyWorldTree(p);
}
} catch (t) {
e = {
error: t
};
} finally {
try {
u && !u.done && (i = s.return) && i.call(s);
} finally {
if (e) throw e.error;
}
}
if (a) for (var m in a) {
var _ = a[Number(m)];
_ && _.renderAtom.destroyRender(_);
}
l.size > 0 && o.asset.releaseFeatures(l), o.host.clearAdRequestWorld(n), o.storage.removeMirrorsForWorld(n), 
n.universe = null, n.dispose();
var f = o._getRootWindowSize(t), y = c.getAtomIns(uo);
y.data.width = f.width, y.data.height = f.height, y.emit(c.rootEid);
});
c.autoResizeBox = s, t.removeChildWorld(e), t.addChildWorld(e, c);
}
}
}, t.prototype.restartWorld = function(t) {
var e = this._worlds.get(t);
if (e) {
var o = e.config.parentWorld;
o && o.markWorldRestart(e.config.entityInParent);
}
}, t.prototype._unmountChildWorldRoot = function(t) {
var e = this._worldInstanceMaps.get(t.config.worldId), o = null == e ? void 0 : e[t.rootEid];
o && o.rootNode.removeFromParent();
}, t.prototype._createRenderInstance = function(t, e, o, n) {
var r, s;
if (ie(t.ecsWorld, o)) if (e[o]) ; else {
var a = t.getAtomIns(n).renderVariantChain;
if (a) {
var l = a.resolve();
if (l) {
var c = l.createRender(this.render, o), u = this._worldLogicSubscribers.get(t.config.worldId);
try {
for (var d = h(l.getLogicDependencies()), p = d.next(); !p.done; p = d.next()) {
var m = p.value, _ = u.get(m);
_ || (_ = new Set(), u.set(m, _)), _.add(o);
}
} catch (t) {
r = {
error: t
};
} finally {
try {
p && !p.done && (s = d.return) && s.call(d);
} finally {
if (r) throw r.error;
}
}
if (e[o] = c, o === t.rootEid) {
var f = this._worldRootNodes.get(t.config.worldId);
if (!f) throw new Error("[AtomEngine] world root node missing | worldId=".concat(t.config.worldId, " | rootEid=").concat(String(o)));
f.addChild(c.rootNode);
}
} else y(i.DomainRenderNoMatch, {
domain: n
});
} else y(i.DomainRenderNotRegistered, {
domain: n
});
}
}, t.prototype._destroyRenderInstance = function(t, e, o) {
var n, i, r = e[o];
if (r) {
var s = this._worldLogicSubscribers.get(t.config.worldId);
try {
for (var a = h(r.renderAtom.getLogicDependencies()), l = a.next(); !l.done; l = a.next()) {
var c = l.value, u = s.get(c);
u && u.delete(o);
}
} catch (t) {
n = {
error: t
};
} finally {
try {
l && !l.done && (i = a.return) && i.call(a);
} finally {
if (n) throw n.error;
}
}
r.renderAtom.destroyRender(r), delete e[o];
}
}, t.prototype._addChild = function(t, e, o, n) {
var i = e[n];
if (i) {
var r = t.getAtomIns(To);
if (ie(t.ecsWorld, n) && r.getParent(n) === o) {
var s, a = r.mountSlots.get(n);
if (a) {
var l = e[o];
s = null == l ? void 0 : l.renderAtom.getSlotNode(l, a);
}
null != s || (s = this._getParentNode(t, e, o)), i.rootNode.getParent() !== s && (i.rootNode.removeFromParent(), 
s.addChild(i.rootNode));
}
}
}, t.prototype._removeChild = function(t, e) {
var o = t[e];
o && o.rootNode.removeFromParent();
}, t.prototype._getParentNode = function(t, e, o) {
var n, i = e[o];
return i ? i.rootNode : null !== (n = this._worldRootNodes.get(t.config.worldId)) && void 0 !== n ? n : this._rootNode;
}, t.prototype.computeReparentLocalPosition = function(t, e, o, n) {
var i, r, s = this._worldInstanceMaps.get(t);
if (s) {
var a = s[e];
if (a) {
var l, c = a.rootNode.getWorldPosition(), u = s[o];
return n && u && (l = u.renderAtom.getSlotNode(u, n)), null != l || (l = null !== (r = null !== (i = null == u ? void 0 : u.rootNode) && void 0 !== i ? i : this._worldRootNodes.get(t)) && void 0 !== r ? r : this._rootNode), 
l.convertToLocalSpace(c);
}
}
}, t.prototype.getSlotData = function(t, e, o) {
var n, i, r = this._worldInstanceMaps.get(t), s = null == r ? void 0 : r[e];
if (s) i = s.renderAtom; else {
var a = this._worlds.get(t);
if (!a) return;
var l = a.getAtomIns(Do).atomState.name[e];
if (!l) return;
if (!(i = null === (n = a.getAtomIns(l).renderVariantChain) || void 0 === n ? void 0 : n.resolve())) return;
}
var c = i.findSlotPath(o);
if (c) return {
path: c,
propsMap: i.atomState
};
}, t.prototype._syncWorldRenderData = function(t) {
var e, o, n = this._worldInstanceMaps.get(t.config.worldId), i = this._worldLogicSubscribers.get(t.config.worldId), r = t.updateSignal.data.framecount;
this._syncChildWorldBoxFromWindowSize(t, n, r);
var s = t.expandEntityDirtyAtoms(i);
try {
for (var a = h(s), l = a.next(); !l.done; l = a.next()) {
var c = d(l.value, 2), u = c[0], p = c[1], m = n[u];
m && m._lastRefreshFrame !== r && (m._lastRefreshFrame = r, m.renderAtom.refreshInstance(m, u), 
p.has(Mo) && this._syncChildWorldWindowSize(t, u));
}
} catch (t) {
e = {
error: t
};
} finally {
try {
l && !l.done && (o = a.return) && o.call(a);
} finally {
if (e) throw e.error;
}
}
t.dirtyEntityComponents.clear(), t.expandedEntityDirtyAtomsCache = null;
}, t.prototype._syncChildWorldBoxFromWindowSize = function(t, e, o) {
var n = this._getRootWindowSize(t), i = n.width, r = n.height, s = t.getAtomIns(so);
t.forEachChildWorld(function(t, n) {
if (t.ready) {
var a = s.box.width[n], l = s.box.height[n], c = t.getAtomIns(uo);
if (c.data.width === i && c.data.height === r || (c.data.width = i, c.data.height = r, 
c.emit(t.rootEid)), (a !== i || l !== r) && t.autoResizeBox) {
s.box.width.set(n, i), s.box.height.set(n, r);
var u = null == e ? void 0 : e[n];
u && u._lastRefreshFrame !== o && (u._lastRefreshFrame = o, u.renderAtom.refreshInstance(u, n));
}
}
});
}, t.prototype._syncChildWorldWindowSize = function(t, e) {
var o = t.getChildWorld(e);
if (null == o ? void 0 : o.ready) {
var n = t.getAtomIns(so), i = n.box.width[e], r = n.box.height[e], s = this._getRootWindowSize(t);
i === s.width && r === s.height || o.autoResizeBox && (o.autoResizeBox = !1);
}
}, t.prototype.saveAllStorage = function(t) {
var e, o;
if (!this.disableSaveStorage) try {
for (var n = h(t), i = n.next(); !i.done; i = n.next()) {
var r = i.value, s = this.storageDataStore.get(r);
if (void 0 !== s) {
var a = an(r), l = a.storageScope, c = a.atomName;
this.storage.saveStorage(c, s, l, this._isRawMirrorWriteAllowed(l));
}
}
} catch (t) {
e = {
error: t
};
} finally {
try {
i && !i.done && (o = n.return) && o.call(n);
} finally {
if (e) throw e.error;
}
}
}, t.prototype._isRawMirrorWriteAllowed = function(t) {
var e;
return null === t || !0 === (null === (e = this.featureResolver.getCopyWorldByNamespace(t)) || void 0 === e ? void 0 : e.allowRawMirrorWrite);
}, t.prototype.forceSaveAllStorage = function() {
this.storageDataStore.size > 0 && this.saveAllStorage(new Set(this.storageDataStore.keys()));
}, t.prototype.getStorageScope = function(t) {
var e, o;
return null !== (o = null === (e = this._worlds.get(t)) || void 0 === e ? void 0 : e.storageScope) && void 0 !== o ? o : null;
}, t.prototype.broadcastWorldInput = function(t) {
var e, o, n = t.atomWorld, i = t.atomName, r = JSON.stringify(t.atomState);
try {
for (var s = h(this._worlds.values()), a = s.next(); !a.done; a = s.next()) {
var l = a.value;
l !== n && l.ready && l.hasAtomIns(i) && l.getAtomIns(i).receive(JSON.parse(r));
}
} catch (t) {
e = {
error: t
};
} finally {
try {
a && !a.done && (o = s.return) && o.call(s);
} finally {
if (e) throw e.error;
}
}
}, t.prototype.sendToParentWorldInput = function(t) {
var e = t.atomWorld, o = e.config.parentWorld;
if (o) {
var n = t.atomName;
if (o.hasAtomIns(n)) {
var i = JSON.parse(JSON.stringify(t.atomState));
o.getAtomIns(n).receive(i, e.config.entityInParent);
}
}
}, t.prototype.emitInputToAllWorlds = function(t, e) {
var o, n;
try {
for (var i = h(this._worlds.values()), r = i.next(); !r.done; r = i.next()) {
var s = r.value;
if (s.ready && !s.disposed && !s.isPaused && s.hasAtomIns(t)) {
var a = s.getAtomIns(t);
Object.assign(a.data, e), a.emit();
}
}
} catch (t) {
o = {
error: t
};
} finally {
try {
r && !r.done && (n = i.return) && n.call(i);
} finally {
if (o) throw o.error;
}
}
}, t.prototype.dispose = function() {
var t, e, o, n, i, r;
try {
this.forceSaveAllStorage(), this.audio.stopAllEffects(), this.audio.stopMusic();
var s = [];
try {
for (var a = h(this._worlds.values()), l = a.next(); !l.done; l = a.next()) {
var c = l.value;
s.push(c);
}
} catch (e) {
t = {
error: e
};
} finally {
try {
l && !l.done && (e = a.return) && e.call(a);
} finally {
if (t) throw t.error;
}
}
var u = function(t) {
for (var e = 0, o = t.config.parentWorld; o; ) e++, o = o.config.parentWorld;
return e;
};
s.sort(function(t, e) {
return u(e) - u(t);
}), this.asset.forceReleaseAll();
try {
for (var m = h(s), _ = m.next(); !_.done; _ = m.next()) {
var f = (c = _.value).config.worldId, y = this._worldInstanceMaps.get(f);
if (y) for (var v in y) {
var g = y[Number(v)];
g && g.renderAtom.destroyRender(g);
}
c.dispose();
}
} catch (t) {
o = {
error: t
};
} finally {
try {
_ && !_.done && (n = m.return) && n.call(m);
} finally {
if (o) throw o.error;
}
}
this._rootNode && (this.render.destroyRootNode(), this._rootNode = null), this._worlds.clear(), 
this._mainWorld = null, this._worldInstanceMaps.clear(), this._worldLogicSubscribers.clear(), 
this._worldRootNodes.clear(), this.fieldWatchers.clear(), this.storageDataStore.clear(), 
this.configDataStore.clear(), this._onReady = null;
} catch (t) {
var A = p([], d(this._worlds.keys()), !1), x = null !== (r = null === (i = this._mainWorld) || void 0 === i ? void 0 : i.config.worldId) && void 0 !== r ? r : "cleared", b = p([], d(this._worldInstanceMaps.entries()), !1).map(function(t) {
var e = d(t, 2), o = e[0], n = e[1];
return "".concat(o, ":").concat(Object.keys(n).length);
}).join(",");
"remainingWorlds=[".concat(A.join(","), "], mainWorld=").concat(x, ", rootNodeAlive=").concat(Boolean(this._rootNode), ", renderInstances={").concat(b, "}");
}
}, t;
}();
function Hr(t, e) {
var o, n, i = {};
try {
for (var r = h(Object.keys(e)), s = r.next(); !s.done; s = r.next()) {
var a = s.value, l = [];
Object.defineProperty(l, "set", {
value: function(t, e) {
this[t] = e;
},
writable: !0,
enumerable: !1,
configurable: !0
}), i[a] = l;
}
} catch (t) {
o = {
error: t
};
} finally {
try {
s && !s.done && (n = r.return) && n.call(r);
} finally {
if (o) throw o.error;
}
}
return Bt(t, i), i;
}
function Ur(t, e, o, n) {
for (var i in n) {
var r = n[i];
o[i][e] = Array.isArray(r) || r instanceof Uint8Array ? r.slice() : r;
}
It(t, e, o);
}
var Yr = function(t) {
function e() {
return null !== t && t.apply(this, arguments) || this;
}
return o(e, t), Object.defineProperty(e, "atomType", {
get: function() {
return "EntityComponentAtom";
},
enumerable: !1,
configurable: !0
}), e.prototype.onReady = function() {
this.defaultValues = this.defineComponent(), this.atomState = function(t, e) {
var o, n, i = {};
try {
for (var r = h(Object.keys(e)), s = r.next(); !s.done; s = r.next()) {
var a = s.value, l = [];
Object.defineProperty(l, "set", {
value: function(t, e) {
this[t] = e;
},
writable: !0,
enumerable: !1,
configurable: !0
}), i[a] = l;
}
} catch (t) {
o = {
error: t
};
} finally {
try {
s && !s.done && (n = r.return) && n.call(r);
} finally {
if (o) throw o.error;
}
}
return Bt(t, i), i;
}(this.atomWorld.ecsWorld, this.defaultValues), this.atomWorld.atomSnapshots[this.atomName] = this.atomState;
}, e[ge] = !0, e;
}(Ae), Xr = function(t) {
function e() {
var e = t.apply(this, p([], d(arguments), !1)) || this;
return e._tagComponent = null, e._tagQuery = null, e._componentQuery = null, e._componentQueryTerms = null, 
e._allComponentAtoms = null, e._domainOf = null, e.renderVariantChain = null, e;
}
return o(e, t), Object.defineProperty(e, "atomType", {
get: function() {
return "EntityDomainAtom";
},
enumerable: !1,
configurable: !0
}), e.prototype._createStructure = function() {
if (this._domainOf = this.atomWorld.getAtomIns(Do).atomState, this._tagComponent = {}, 
Bt(this.atomWorld.ecsWorld, this._tagComponent), this._tagQuery = vt(this.atomWorld.ecsWorld, [ this._tagComponent ]), 
this._allComponentAtoms = [], this._collectAllComponentAtoms(this._allComponentAtoms, new Set()), 
this._allComponentAtoms.length > 0) {
var t = this._allComponentAtoms.map(function(t) {
return t.atomState;
});
this._componentQueryTerms = t, this._componentQuery = vt(this.atomWorld.ecsWorld, t);
} else this._componentQuery = this._tagQuery;
this.atomState = this._tagComponent;
}, e.prototype.onReady = function() {
this._createStructure();
}, e.prototype.dispose = function() {
var e = this._componentQuery === this._tagQuery;
this._tagQuery && (Rt(this.atomWorld.ecsWorld, [ this._tagComponent ]), this._tagQuery = null), 
this._componentQuery && !e && Rt(this.atomWorld.ecsWorld, this._componentQueryTerms), 
this._componentQuery = null, this._tagComponent = null, this._allComponentAtoms = null, 
this._componentQueryTerms = null, t.prototype.dispose.call(this);
}, e.prototype.create = function() {
var t = this.atomWorld, e = function(t) {
var e = t[B], o = function(t) {
if (t.aliveCount < t.dense.length) {
var e = t.dense[t.aliveCount], o = e;
return t.sparse[o] = t.aliveCount, t.aliveCount++, e;
}
var n = ++t.maxId;
return t.dense.push(n), t.sparse[n] = t.aliveCount, t.aliveCount++, n;
}(e.entityIndex);
return e.notQueries.forEach(function(e) {
xt(t, e, o) && bt(e, o);
}), e.entityComponents.set(o, new Set()), o;
}(t.ecsWorld);
return this._domainOf.name[e] = this.atomName, this._applyToEntity(e), this.renderVariantChain && t.markRenderCreate(e, this.atomName), 
this.atomName === so && t.markWorldCreate(e), e;
}, e.prototype.destroy = function(t) {
var e = this.atomWorld;
this.has(t) || y(i.EntityDestroyDenied, {
entity: String(t),
owner: this._domainOf.name[t] || "unknown"
});
var o = this._domainOf.name[t], n = e.getAtomIns(o);
oe(e.ecsWorld, t), e.stopTween(t), n.renderVariantChain && e.markRenderDestroy(t), 
o === so && e.markWorldDestroy(t);
}, e.prototype.collect = function() {
var t, e;
return this.atomWorld.isSignalEntityDomain(this.atomName) && y(i.WarnSignalDomainCollect, {
domain: this.atomName,
source: null !== (t = this.atomWorld.currentExecutingLogicAtom) && void 0 !== t ? t : "unknown",
method: "collect",
signalDomain: null !== (e = this.atomWorld.currentSignalEntityDomain) && void 0 !== e ? e : "unknown"
}), wt(this.atomWorld.ecsWorld), this._tagQuery.dense;
}, e.prototype.has = function(t) {
return wt(this.atomWorld.ecsWorld), this._tagQuery.has(t);
}, e.prototype.count = function() {
return wt(this.atomWorld.ecsWorld), this._tagQuery.dense.length;
}, e.prototype.collectByComponent = function() {
var t, e;
return this.atomWorld.isSignalEntityDomain(this.atomName) && y(i.WarnSignalDomainCollect, {
domain: this.atomName,
source: null !== (t = this.atomWorld.currentExecutingLogicAtom) && void 0 !== t ? t : "unknown",
method: "collectByComponent",
signalDomain: null !== (e = this.atomWorld.currentSignalEntityDomain) && void 0 !== e ? e : "unknown"
}), wt(this.atomWorld.ecsWorld), this._componentQuery.dense;
}, e.prototype.hasByComponent = function(t) {
return wt(this.atomWorld.ecsWorld), this._componentQuery.has(t);
}, e.prototype.countByComponent = function() {
return wt(this.atomWorld.ecsWorld), this._componentQuery.dense.length;
}, e.prototype._collectAllComponentAtoms = function(t, e) {
var o, n;
if (!e.has(this.atomName)) {
e.add(this.atomName);
try {
for (var i = h(this.getDependencies()), r = i.next(); !r.done; r = i.next()) {
var s = r.value, a = this.atomWorld.getAtomIns(s);
this.isDepType(s, "EntityComponentAtom") ? t.push(a) : this.isDepType(s, "EntityDomainAtom") && a._collectAllComponentAtoms(t, e);
}
} catch (t) {
o = {
error: t
};
} finally {
try {
r && !r.done && (n = i.return) && n.call(i);
} finally {
if (o) throw o.error;
}
}
}
}, e.prototype._applyToEntity = function(t) {
var e, o, n = this.atomWorld.ecsWorld;
It(n, t, this._tagComponent);
try {
for (var i = h(this._allComponentAtoms), r = i.next(); !r.done; r = i.next()) {
var s = r.value, a = s.atomState;
Tt(n, t, a) || Ur(n, t, a, s.defaultValues);
}
} catch (t) {
e = {
error: t
};
} finally {
try {
r && !r.done && (o = i.return) && o.call(i);
} finally {
if (e) throw e.error;
}
}
this._initLogicEntityData(t);
}, e.prototype._initLogicEntityData = function(t) {
var e, o, n = this.atomWorld.domainToLogicMap.get(this.atomName);
if (n) {
var i = this.atomWorld.ecsWorld;
try {
for (var r = h(n), s = r.next(); !s.done; s = r.next()) {
var a = s.value, l = this.atomWorld.getAtomIns(a), c = l.entityDataDefaults;
c && l.atomState.entity && Ur(i, t, l.atomState.entity, c);
}
} catch (t) {
e = {
error: t
};
} finally {
try {
s && !s.done && (o = r.return) && o.call(r);
} finally {
if (e) throw e.error;
}
}
}
}, e[ge] = !0, e;
}(Ae), Jr = function(t) {
function e() {
var e = t.apply(this, p([], d(arguments), !1)) || this;
return e._ctx = null, e;
}
return o(e, t), Object.defineProperty(e, "atomType", {
get: function() {
return "EntityRelationAtom";
},
enumerable: !1,
configurable: !0
}), e.prototype.defineRelation = function() {
return {
exclusive: !0,
autoRemoveSubject: !1
};
}, e.prototype._createRelation = function() {
var t = this.defineRelation(), e = {
world: this.atomWorld
}, o = this.atomName;
this._ctx = e, this.atomState = function() {
for (var t, e = [], o = 0; o < arguments.length; o++) e[o] = arguments[o];
if (1 === e.length && "object" == typeof e[0]) {
var n = e[0], i = n.store, r = n.exclusive, s = n.autoRemoveSubject, a = n.onTargetRemoved, l = n.onAdd, c = n.onRemove;
return [ i && (t = i, function(e) {
return e[E].initStore = t, e;
}), r && W, s && V, a && O(a), l && k(l), c && G(c) ].filter(Boolean).reduce(function(t, e) {
return e(t);
}, L());
}
return e.reduce(function(t, e) {
return e(t);
}, L());
}(r(r({}, t), {
onAdd: function(t, n) {
var i;
null === (i = e.world) || void 0 === i || i.markRelationChange(o, n, t, !0);
},
onRemove: function(t, n) {
var i;
null === (i = e.world) || void 0 === i || i.markRelationChange(o, n, t, !1);
},
onTargetRemoved: t.autoRemoveSubject ? function(t) {
var o = e.world;
if (o) {
var n = o.getAtomIns(Do).atomState.name[t];
if (n) {
var i = o.getAtomIns(n);
(null == i ? void 0 : i.renderVariantChain) && o.markRenderDestroy(t), n === so && o.markWorldDestroy(t);
}
o.stopTween(t);
}
} : void 0
}));
}, e.prototype.onReady = function() {
this._createRelation();
}, e.prototype.dispose = function() {
this._ctx && (this._ctx.world = null), this._ctx = null, t.prototype.dispose.call(this);
}, e.prototype.set = function(t, e) {
return !(!e || !t) && It(this.atomWorld.ecsWorld, e, z(this.atomState, t));
}, e.prototype.remove = function(t, e) {
return te(this.atomWorld.ecsWorld, e, z(this.atomState, t)), !0;
}, e.prototype.getSource = function(t) {
return j(this.atomWorld.ecsWorld, t, this.atomState)[0];
}, e.prototype.getTargets = function(t) {
return At(this.atomWorld.ecsWorld, [ z(this.atomState, t) ]);
}, e.prototype.has = function(t, e) {
return void 0 !== e ? Tt(this.atomWorld.ecsWorld, e, z(this.atomState, t)) : this.getTargets(t).length > 0;
}, e[ge] = !0, e;
}(Ae), Qr = function(t) {
function e() {
return null !== t && t.apply(this, arguments) || this;
}
return o(e, t), Object.defineProperty(e, "atomType", {
get: function() {
return "DomainExtensionAtom";
},
enumerable: !1,
configurable: !0
}), e.prototype.onReady = function() {
var t, e, o, n, i = null === (o = this.constructor.__bindingMeta) || void 0 === o ? void 0 : o.attachToProperty;
if (i) {
var r = null === (n = this.constructor.__bindingMeta) || void 0 === n ? void 0 : n.propToAtom.get(i);
if (r) {
var s = this.atomWorld.getAtomIns(r);
try {
for (var a = h(this.getDependencies()), l = a.next(); !l.done; l = a.next()) {
var c = l.value;
if (this.isDepType(c, "EntityComponentAtom")) {
var u = this.atomWorld.getAtomIns(c);
s._allComponentAtoms.includes(u) || s._allComponentAtoms.push(u);
}
}
} catch (e) {
t = {
error: e
};
} finally {
try {
l && !l.done && (e = a.return) && e.call(a);
} finally {
if (t) throw t.error;
}
}
}
}
}, e[ge] = !0, e;
}(Ae), Kr = function(t) {
function e() {
var e = t.apply(this, p([], d(arguments), !1)) || this;
return e.variantChain = null, e;
}
return o(e, t), Object.defineProperty(e, "atomType", {
get: function() {
return "FunctionAtom";
},
enumerable: !1,
configurable: !0
}), e.prototype.onReady = function() {
if (this.atomState = this.defineFunction(), this.variantChain) for (var t = this.variantChain.getInstances(), e = 0; e < t.length; e++) {
var o = t[e].ready();
if (o) return this._readyVariantsAsync(o, t, e + 1);
}
}, e.prototype._readyVariantsAsync = function(t, e, o) {
return c(this, void 0, void 0, function() {
var n, i;
return u(this, function(r) {
switch (r.label) {
case 0:
return [ 4, t ];

case 1:
if (r.sent(), !this.atomWorld) return [ 2 ];
n = o, r.label = 2;

case 2:
return n < e.length ? (i = e[n].ready()) ? [ 4, i ] : [ 3, 4 ] : [ 3, 5 ];

case 3:
if (r.sent(), !this.atomWorld) return [ 2 ];
r.label = 4;

case 4:
return n++, [ 3, 2 ];

case 5:
return [ 2 ];
}
});
});
}, e[ge] = !0, e;
}(Ae), Zr = function(t) {
function e() {
var e = t.apply(this, p([], d(arguments), !1)) || this;
return e.variantChain = null, e._chain = null, e.entityDataDefaults = null, e.entityDataDomain = null, 
e;
}
return o(e, t), Object.defineProperty(e, "atomType", {
get: function() {
return "LogicAtom";
},
enumerable: !1,
configurable: !0
}), e.prototype.defineStorageData = function() {
return null;
}, e.prototype.defineRuntimeData = function() {
return null;
}, e.prototype.defineEntityData = function() {
return null;
}, e.prototype.executeAll = function(t) {
var e, o, n, i;
if ("function" != typeof this.onExecute) throw new TypeError("[AtomEngine] this.onExecute is not a function." + "atomName=".concat(this.atomName) + "constructor=".concat(null === (e = this.constructor) || void 0 === e ? void 0 : e.name, " ") + "proto=".concat(null === (n = null === (o = Object.getPrototypeOf(this)) || void 0 === o ? void 0 : o.constructor) || void 0 === n ? void 0 : n.name, " ") + "onExecute=".concat(String(this.onExecute)));
for (var r = this.atomWorld.ecsWorld, s = null === (i = this.variantChain) || void 0 === i ? void 0 : i.resolve(), a = 0, l = t.length; a < l; a++) {
var c = t[a];
ie(r, c) && (s ? s.atomState(c, this.atomState) : this.onExecute(c, this.atomState));
}
}, e.prototype.getChainRegistration = function() {
var t;
return null === (t = this.constructor.__bindingMeta) || void 0 === t ? void 0 : t.chainRegistration;
}, e.prototype.getEntityDataDomainName = function() {
var t, e = null === (t = this.constructor.__bindingMeta) || void 0 === t ? void 0 : t.entityDataProperty;
return e ? this.getBoundAtomName(e) : null;
}, e.prototype.init = function(e, o) {
t.prototype.init.call(this, e, o), this._registerToChain();
var n = this.getEntityDataDomainName();
if (n) {
this.entityDataDomain = n;
var i = o.domainToLogicMap.get(n);
i || (i = [], o.domainToLogicMap.set(n, i)), i.push(e);
}
}, e.prototype.dispose = function() {
if (this._unregisterFromChain(), this.atomWorld.storageAtoms.delete(this.atomName), 
this.entityDataDomain) {
var e = this.atomWorld.domainToLogicMap.get(this.entityDataDomain);
if (e) {
var o = e.indexOf(this.atomName);
-1 !== o && e.splice(o, 1);
}
}
t.prototype.dispose.call(this);
}, e.prototype._registerToChain = function() {
var t = this.getChainRegistration();
if (t) {
var e = this.getBoundAtomName(t.ownerProperty);
if (e) {
var o = this.atomWorld.getAtomIns(e);
this._chain = o.registerToChain(this.atomName, t.chainType);
}
}
}, e.prototype._unregisterFromChain = function() {
var t = this.getChainRegistration();
if (t) {
var e = this.getBoundAtomName(t.ownerProperty);
e && this.atomWorld.getAtomIns(e).unregisterFromChain(this.atomName, t.chainType);
}
}, e.prototype._loadOrCreateStorage = function() {
var t = this.defineStorageData();
if (!t) return null;
var e = this.atomWorld.universe, o = sn(this.atomWorld.storageScope, this.atomName), n = e.storageDataStore.get(o);
if (void 0 === n) {
var i = e.storage.loadStorage(this.atomName, this.atomWorld.storageScope);
n = null != i ? i : t, e.storageDataStore.set(o, n);
}
return this.atomWorld.storageAtoms.add(this.atomName), n;
}, e.prototype.onReady = function() {
var t = this._loadOrCreateStorage();
t && this._wrapStorageWithTracking(t, [ "storage" ]);
var e = null;
if (this.entityDataDomain) {
var o = this.defineEntityData();
this.entityDataDefaults = o, e = Hr(this.atomWorld.ecsWorld, o);
}
this.atomState = {
runtime: this.defineRuntimeData(),
storage: t,
entity: e
}, null !== this.atomState.runtime && (this.atomWorld.atomSnapshots[this.atomName] = this.atomState.runtime);
}, e.prototype._wrapStorageWithTracking = function(t, e) {
for (var o in t) {
var n = t[o], i = p(p([], d(e), !1), [ o ], !1);
"function" == typeof n || o.startsWith("_") || (n && "object" == typeof n && !Array.isArray(n) ? this._wrapStorageWithTracking(n, i) : this._installStorageFieldInterceptor(t, o, i));
}
}, e.prototype._installStorageFieldInterceptor = function(t, e, o) {
var n = Object.getOwnPropertyDescriptor(t, e);
if (!(null == n ? void 0 : n.set) || !n.set.__isAtomInterceptor) {
var i = t[e], r = this.atomWorld.universe, s = this.atomName, a = this.atomWorld.storageScope, l = function(t) {
i = t, r.onFieldWrite(s, o, void 0, a);
};
l.__isAtomInterceptor = !0, Object.defineProperty(t, e, {
get: function() {
return i;
},
set: l,
enumerable: !0,
configurable: !0
});
}
}, e.prototype.getTopologicalChain = function() {
return this._chain;
}, e[ge] = !0, e;
}(Ae), $r = new Set([ "InputAtom", "OutputAtom", "WorldInputAtom" ]);
me("LogicAtom", function(e) {
var o = e.constructor, n = o.__bindingMeta, r = e.getChainRegistration();
if (r || y(i.OnChainRequired, {
class: pe(o),
atom: e.atomName
}), r) {
var s = e.getBoundAtomName(r.ownerProperty);
if (s) {
var a = e.getDepAtomType(s);
$r.has(a) && y(i.BoundaryBindingForbidden, {
class: pe(o),
boundaryType: a,
target: s
});
}
}
if ((null == n ? void 0 : n.routePhase) === t.RoutePhase.Filter && n.chainRegistration) {
var l = n.propToAtom.get(n.chainRegistration.ownerProperty);
l && e.atomWorld.getAtomIns(l).mode === t.RouteMode.Broadcast && y(i.BroadcastFilterForbidden, {
atom: e.atomName,
router: l
});
}
var c = Boolean(null == n ? void 0 : n.entityDataProperty);
c !== Object.getPrototypeOf(e).hasOwnProperty("defineEntityData") && y(i.EntityDataConfigInvalid, {
atom: e.atomName,
reason: c ? "@entityData 装饰器需要重写 defineEntityData() 方法" : "重写 defineEntityData() 需要配合 @entityData 装饰器指定挂载的域"
});
});
var ts, es = function(t) {
function e() {
return null !== t && t.apply(this, arguments) || this;
}
return o(e, t), e.prototype.getExtraDependencies = function() {
return [];
}, e.prototype.getTargetAtomName = function(t) {
var e = this._atomWorld.atomInstanceMap.get(t), o = e.constructor.__bindingMeta.variantSourceProperty;
return e.getBoundAtomName(o);
}, e.prototype.resolve = function() {
for (var t = this.getInstances(), e = 0, o = t.length; e < o; e++) {
var n = t[e];
if ("function" == typeof n.atomState && n.variantCondition()) return n;
}
return null;
}, e.prototype.topologicalSort = function() {
var e = t.prototype.topologicalSort.call(this);
return e.length, e;
}, e;
}(xe), os = function(t) {
function e() {
return null !== t && t.apply(this, arguments) || this;
}
return o(e, t), Object.defineProperty(e, "atomType", {
get: function() {
return "VariantAtom";
},
enumerable: !1,
configurable: !0
}), e.prototype.variantCondition = function() {
return !0;
}, e.prototype.getVariantSourceAtomName = function() {
var t, e = null === (t = this.constructor.__bindingMeta) || void 0 === t ? void 0 : t.variantSourceProperty;
return e ? this.getBoundAtomName(e) : void 0;
}, e.prototype.onReady = function() {
this.atomState = this.defineFunction();
}, e.prototype.init = function(e, o) {
t.prototype.init.call(this, e, o);
var n = this.getVariantSourceAtomName(), i = o.getAtomIns(n);
i.variantChain || (i.variantChain = new es(o)), i.variantChain.addAtom(e);
}, e.prototype.dispose = function() {
var e = this.getVariantSourceAtomName(), o = this.atomWorld.getAtomIns(e);
o.variantChain.removeAtom(this.atomName) && (o.variantChain = null), t.prototype.dispose.call(this);
}, e.prototype.getTopologicalChain = function() {
var t = this.getVariantSourceAtomName();
return t ? this.atomWorld.getAtomIns(t).variantChain : null;
}, e[ge] = !0, e;
}(Ae), ns = function(t) {
function e(e) {
return t.call(this, e) || this;
}
return o(e, t), e.prototype.getExtraDependencies = function(t) {
return this._atomWorld.getAtomIns(t).getDependencies();
}, e.prototype.execute = function(t, e) {
if (0 !== this.atoms.length) {
this._atomWorld.currentSignalEntityDomain = e;
for (var o = this.getInstances(), n = 0, i = o.length; n < i; n++) {
var r = o[n];
this._atomWorld.currentExecutingLogicAtom = r.atomName, r.executeAll(t);
}
this._atomWorld.currentExecutingLogicAtom = null, this._atomWorld.currentSignalEntityDomain = null;
}
}, e;
}(xe), is = function(t) {
function e() {
var e = t.apply(this, p([], d(arguments), !1)) || this;
return e._domain = null, e;
}
return o(e, t), Object.defineProperty(e, "atomType", {
get: function() {
return "SignalAtom";
},
enumerable: !1,
configurable: !0
}), Object.defineProperty(e.prototype, "domain", {
get: function() {
var t, e;
if (!this._domain) {
var o = this.constructor.__bindingMeta;
try {
for (var n = h(o.propToAtom), i = n.next(); !i.done; i = n.next()) {
var r = d(i.value, 2), s = r[0], a = r[1];
if (this.isDepType(a, "EntityDomainAtom")) {
this._domain = this[s];
break;
}
}
} catch (e) {
t = {
error: e
};
} finally {
try {
i && !i.done && (e = n.return) && e.call(n);
} finally {
if (t) throw t.error;
}
}
}
return this._domain;
},
enumerable: !1,
configurable: !0
}), e.prototype.init = function(e, o) {
t.prototype.init.call(this, e, o), this.beginChain = new ns(o), this.triggerChain = new ns(o), 
this.endChain = new ns(o);
}, e.prototype.trigger = function(t) {
if (0 !== t.length) {
var e = this.domain.atomName;
this.beginChain.execute(t, e), this.triggerChain.execute(t, e), this._propagateSuccessorSignals(t), 
this.endChain.execute(t, e);
}
}, e.prototype._propagateSuccessorSignals = function(t) {
var e, o, n = this.atomWorld.signalRouters.get(this.atomName);
if (n) {
var i = n.getInstances();
try {
for (var r = h(i), s = r.next(); !s.done; s = r.next()) {
var a = s.value;
a.handleSignal({
fromRouterName: a.atomName,
signalName: a.to.atomName,
eidList: p([], d(t), !1)
});
}
} catch (t) {
e = {
error: t
};
} finally {
try {
s && !s.done && (o = r.return) && o.call(r);
} finally {
if (e) throw e.error;
}
}
}
}, e.prototype.registerToChain = function(t, e) {
var o = this.getChain(e);
return o && o.addAtom(t), o;
}, e.prototype.unregisterFromChain = function(t, e) {
var o = this.getChain(e);
return !!o && o.removeAtom(t);
}, e.prototype.getChain = function(t) {
switch (t) {
case "SignalStart":
return this.beginChain;

case "SignalTrigger":
return this.triggerChain;

case "SignalEnd":
return this.endChain;

default:
return null;
}
}, e[ge] = !0, e;
}(Ae), rs = function(t) {
function e(e, o, n) {
var i = t.call(this, e) || this;
return i._router = o, i._phase = n, i;
}
return o(e, t), e.prototype.getExtraDependencies = function(t) {
return this._atomWorld.getAtomIns(t).getDependencies();
}, e.prototype.execute = function(t) {
if (0 !== this.atoms.length) {
this._router.currentPhase = this._phase;
for (var e = this.getInstances(), o = 0, n = e.length; o < n; o++) {
var i = e[o];
this._atomWorld.currentExecutingLogicAtom = i.atomName, i.executeAll(t);
}
this._atomWorld.currentExecutingLogicAtom = null, this._router.currentPhase = null;
}
}, e;
}(xe), ss = function(t) {
function e(e) {
return t.call(this, e) || this;
}
return o(e, t), e.prototype.getExtraDependencies = function() {
return [];
}, e;
}(xe), as = function(e) {
function n() {
var t = e.apply(this, p([], d(arguments), !1)) || this;
return t._signalVersion = 0, t.currentPhase = null, t._routerChain = null, t;
}
return o(n, e), Object.defineProperty(n, "atomType", {
get: function() {
return "SignalRouterAtom";
},
enumerable: !1,
configurable: !0
}), n.prototype.defineDecisionState = function() {
return {
receiveAction: t.ReceiveAction.Queue,
dispatchAction: t.DispatchAction.FireOnce,
filterAction: {},
transformedEidList: null
};
}, n.prototype.onReady = function() {
this.atomState = this.defineDecisionState();
}, n.prototype.getRouteFromAtomName = function() {
var t, e = null === (t = this.constructor.__bindingMeta) || void 0 === t ? void 0 : t.routeFromProperty;
return e ? this.getBoundAtomName(e) : void 0;
}, n.prototype.getRouteToAtomName = function() {
var t, e = null === (t = this.constructor.__bindingMeta) || void 0 === t ? void 0 : t.routeToProperty;
return e ? this.getBoundAtomName(e) : void 0;
}, n.prototype.init = function(o, n) {
var r, s, a, l, c;
e.prototype.init.call(this, o, n);
var u = this.getRouteFromAtomName(), d = this.getRouteToAtomName();
this.from = this.atomWorld.getAtomIns(u), this.to = this.atomWorld.getAtomIns(d), 
this.mode = null === (a = this.constructor.__bindingMeta) || void 0 === a ? void 0 : a.routeMode, 
this.receiveChain = new rs(n, this, t.RoutePhase.Receive), this.transformChain = new rs(n, this, t.RoutePhase.Transform), 
this.dispatchChain = new rs(n, this, t.RoutePhase.Dispatch), this.filterChain = new rs(n, this, t.RoutePhase.Filter);
var p = this.getDependencies();
if (p.length > 0) {
var m = "InputAtom" === this.from.atomType ? null : null === (l = this.from.domain) || void 0 === l ? void 0 : l.atomName, _ = null === (c = this.to.domain) || void 0 === c ? void 0 : c.atomName;
try {
for (var f = h(p), v = f.next(); !v.done; v = f.next()) {
var g = v.value;
this.isDepType(g, "EntityDomainAtom") && (g !== m && g !== _ || y(i.SignalDomainConflict, {
class: pe(this.constructor),
domain: g,
reason: "已通过 from/to 信号隐含域信息 (toSignalDomain: ".concat(_, ")")
}));
}
} catch (t) {
r = {
error: t
};
} finally {
try {
v && !v.done && (s = f.return) && s.call(f);
} finally {
if (r) throw r.error;
}
}
}
if ("InputAtom" === this.from.atomType) {
var A = n.universe.featureResolver.getFeatureSet(n.config.worldId), x = this.getFeatureName();
if (!A.has(x) && x !== t.G_FAtom.FeatureName.Name) return;
}
var b = this.from.atomName, C = n.signalRouters.get(b);
C || (C = new ss(n), n.signalRouters.set(b, C)), C.addAtom(o), this._routerChain = C;
}, n.prototype.dispose = function() {
var t = this.atomWorld, o = this.atomName;
this._routerChain && (this._routerChain.removeAtom(o) && t.signalRouters.delete(this.from.atomName), 
this._routerChain = null), t.pendingRouterSignals = t.pendingRouterSignals.filter(function(t) {
return t.fromRouterName !== o;
}), e.prototype.dispose.call(this);
}, n.prototype.getTopologicalChain = function() {
return this._routerChain;
}, n.prototype.registerToChain = function(t, e) {
var o = this.getChain(e);
return o && o.addAtom(t), o;
}, n.prototype.unregisterFromChain = function(t, e) {
var o = this.getChain(e);
return !!o && o.removeAtom(t);
}, n.prototype.getChain = function(t) {
switch (t) {
case "RouteReceive":
return this.receiveChain;

case "RouteTransform":
return this.transformChain;

case "RouteDispatch":
return this.dispatchChain;

case "RouteFilter":
return this.filterChain;

default:
return null;
}
}, n.prototype.handleSignal = function(e) {
var o, n;
if (void 0 === e.routerVersion || e.routerVersion === this._signalVersion) {
e.inputData && "InputAtom" === this.from.atomType && Object.assign(this.from.atomState, e.inputData);
var r, s = null !== (o = e.startPhase) && void 0 !== o ? o : t.RoutePhase.Receive, a = e.eidList, l = this.atomState;
if (s <= t.RoutePhase.Receive) switch (l.receiveAction = t.ReceiveAction.Queue, 
this.receiveChain.execute([ this.atomWorld.rootEid ]), l.receiveAction) {
case t.ReceiveAction.Discard:
return;

case t.ReceiveAction.Replace:
this._signalVersion++;
}
if (s <= t.RoutePhase.Transform) {
if (this.transformChain.hasAtoms()) {
if (l.transformedEidList = a, this.transformChain.execute([ this.atomWorld.rootEid ]), 
!l.transformedEidList || 0 === l.transformedEidList.length) return;
a = l.transformedEidList;
}
if (this.mode === t.RouteMode.Direct) {
var c = this.to.domain, u = a.length;
if (0 === (a = a.filter(function(t) {
return c.has(t);
})).length) return;
a.length < u && y(i.TransformEidInvalid, {
atom: this.atomName,
domain: c.atomName
});
}
}
if (s <= t.RoutePhase.Dispatch) {
l.dispatchAction = t.DispatchAction.FireOnce, this.dispatchChain.execute([ this.atomWorld.rootEid ]);
var h = l.dispatchAction;
if (h === t.DispatchAction.Cancel) return;
if (h === t.DispatchAction.Defer) return e.eidList = a, e.startPhase = t.RoutePhase.Dispatch, 
e.routerVersion = this._signalVersion, void this.atomWorld.pendingRouterSignals.push(e);
}
var m = null;
if (this.filterChain.hasAtoms()) {
l.filterAction = {}, this.filterChain.execute(a);
var _ = this.atomWorld.ecsWorld;
r = [];
for (var f = 0, v = a.length; f < v; f++) {
var g = a[f];
if (ie(_, g)) {
var A = null !== (n = l.filterAction[g]) && void 0 !== n ? n : t.FilterAction.Cancel;
A !== t.FilterAction.Cancel && (A === t.FilterAction.FireOnce ? r.push(g) : A === t.FilterAction.FireRepeat ? (r.push(g), 
m || (m = []), m.push(g)) : A === t.FilterAction.Defer && (m || (m = []), m.push(g)));
}
}
} else r = a;
if (r.length > 0) {
var x;
(x = this.mode === t.RouteMode.Broadcast ? p([], d(this.to.domain.collect()), !1) : r).length > 0 && this.atomWorld.getAtomIns(e.signalName).trigger(x);
}
m && (e.eidList = m, e.startPhase = t.RoutePhase.Filter, e.routerVersion = this._signalVersion, 
this.atomWorld.pendingRouterSignals.push(e));
}
}, n[ge] = !0, n;
}(Ae), ls = function(t) {
function e() {
return null !== t && t.apply(this, arguments) || this;
}
return o(e, t), Object.defineProperty(e, "atomType", {
get: function() {
return "OrderAtom";
},
enumerable: !1,
configurable: !0
}), e.prototype.getOrderBeforeAtomName = function() {
var t, e = null === (t = this.constructor.__bindingMeta) || void 0 === t ? void 0 : t.orderBeforeProperty;
return e ? this.getBoundAtomName(e) : void 0;
}, e.prototype.getOrderAfterAtomName = function() {
var t, e = null === (t = this.constructor.__bindingMeta) || void 0 === t ? void 0 : t.orderAfterProperty;
return e ? this.getBoundAtomName(e) : void 0;
}, e.prototype.init = function(e, o) {
t.prototype.init.call(this, e, o);
var n = this.getOrderBeforeAtomName(), r = this.getOrderAfterAtomName(), s = this.atomWorld.getAtomIns(n), a = this.atomWorld.getAtomIns(r), l = s.getTopologicalChain();
l && l === a.getTopologicalChain() ? (l.addConstraint(n, r), this.atomState = {
chain: l,
before: n,
after: r
}) : y(i.OrderScopeConflict, {
class: pe(this.constructor),
before: n,
after: r
});
}, e.prototype.dispose = function() {
var e = this.atomState;
(null == e ? void 0 : e.chain) ? (e.chain.removeConstraint(e.before, e.after), t.prototype.dispose.call(this)) : t.prototype.dispose.call(this);
}, e[ge] = !0, e;
}(Ae), cs = function(t) {
function e() {
return null !== t && t.apply(this, arguments) || this;
}
return o(e, t), Object.defineProperty(e, "atomType", {
get: function() {
return "WorldAtom";
},
enumerable: !1,
configurable: !0
}), e.prototype.defineWorld = function() {
return {
worldId: this.atomName
};
}, e.prototype.onReady = function() {
this.atomState = this.defineWorld();
}, e[ge] = !0, e;
}(Ae), us = function(t) {
function e() {
return null !== t && t.apply(this, arguments) || this;
}
return o(e, t), Object.defineProperty(e, "atomType", {
get: function() {
return "WorldInputAtom";
},
enumerable: !1,
configurable: !0
}), Object.defineProperty(e.prototype, "data", {
get: function() {
return this.atomState;
},
enumerable: !1,
configurable: !0
}), e.prototype.onReady = function() {
this.atomState = r(r({}, this.defineInputData()), {
childWorldEid: void 0
});
}, e.prototype.emit = function(t) {
t && (this.atomState = t), this.atomWorld.universe.broadcastWorldInput(this);
}, e.prototype.emitToParent = function(t) {
t && (this.atomState = t), this.atomWorld.universe.sendToParentWorldInput(this);
}, e.prototype.receive = function(t, e) {
this.atomState = t, this.atomState.childWorldEid = e, this.atomWorld.pushInput(this, this.atomWorld.rootEid, this.atomState);
}, e[ge] = !0, a([ qe(ro), l("design:type", Object) ], e.prototype, "rootDomain", void 0), 
e;
}(is), hs = function(t) {
function e() {
return null !== t && t.apply(this, arguments) || this;
}
return o(e, t), Object.defineProperty(e.prototype, "world", {
get: function() {
return this.atomWorld;
},
enumerable: !1,
configurable: !0
}), e.prototype.triggerRouter = function(t, e) {
this.atomWorld.universe.forEachWorld(function(o) {
var n = o.atomInstanceMap.get(t);
if (n) {
var i = p([], d(void 0 === e ? n.to.domain.collect() : e), !1);
o.pendingRouterSignals.push({
fromRouterName: n.atomName,
signalName: n.to.atomName,
eidList: i
});
}
});
}, e[ge] = !0, e;
}(Kr), ds = function(e) {
function n() {
return null !== e && e.apply(this, arguments) || this;
}
return o(n, e), Object.defineProperty(n, "atomType", {
get: function() {
return "AudioAtom";
},
enumerable: !1,
configurable: !0
}), Object.defineProperty(n.prototype, "_audio", {
get: function() {
var t, e;
return null === (e = null === (t = this.atomWorld) || void 0 === t ? void 0 : t.universe) || void 0 === e ? void 0 : e.audio;
},
enumerable: !1,
configurable: !0
}), Object.defineProperty(n.prototype, "_asset", {
get: function() {
var t, e;
return null === (e = null === (t = this.atomWorld) || void 0 === t ? void 0 : t.universe) || void 0 === e ? void 0 : e.asset;
},
enumerable: !1,
configurable: !0
}), n.prototype.playEffect = function(e) {
return c(this, arguments, void 0, function(e, o, n) {
var i, r, s, a, l;
return void 0 === o && (o = 1), void 0 === n && (n = !1), u(this, function(c) {
switch (c.label) {
case 0:
i = kn(e), c.label = 1;

case 1:
return c.trys.push([ 1, 3, , 4 ]), [ 4, null === (s = this._asset) || void 0 === s ? void 0 : s.loadAsset(i.featureName, i.assetPath, t.LoaderAssetType.AudioClip) ];

case 2:
return (r = c.sent()) ? [ 2, null !== (l = null === (a = this._audio) || void 0 === a ? void 0 : a.playEffect(r, o, n)) && void 0 !== l ? l : -1 ] : [ 2, -1 ];

case 3:
return c.sent(), [ 2, -1 ];

case 4:
return [ 2 ];
}
});
});
}, n.prototype.stopEffect = function(t) {
var e;
null === (e = this._audio) || void 0 === e || e.stopEffect(t);
}, n.prototype.setEffectsVolume = function(t) {
var e;
null === (e = this._audio) || void 0 === e || e.setEffectsVolume(t);
}, n.prototype.stopAllEffects = function() {
var t;
null === (t = this._audio) || void 0 === t || t.stopAllEffects();
}, n.prototype.playMusic = function(e, o, n) {
var i, r = this;
void 0 === o && (o = !0), void 0 === n && (n = 1), this._currentMusicUrl = e;
var s = kn(e);
null === (i = this._asset) || void 0 === i || i.loadAsset(s.featureName, s.assetPath, t.LoaderAssetType.AudioClip).then(function(t) {
var i;
r._currentMusicUrl === e && (null === (i = r._audio) || void 0 === i || i.playMusic(t, o, n));
}).catch(function() {});
}, n.prototype.stopMusic = function() {
var t;
this._currentMusicUrl = void 0, null === (t = this._audio) || void 0 === t || t.stopMusic();
}, n.prototype.pauseMusic = function() {
var t;
null === (t = this._audio) || void 0 === t || t.pauseMusic();
}, n.prototype.resumeMusic = function() {
var t;
null === (t = this._audio) || void 0 === t || t.resumeMusic();
}, n.prototype.setMusicVolume = function(t) {
var e;
null === (e = this._audio) || void 0 === e || e.setMusicVolume(t);
}, n[ge] = !0, n;
}(Ae), ps = function(e) {
for (var o = [], n = 1; n < arguments.length; n++) o[n - 1] = arguments[n];
return Cn.apply(void 0, p([ t.RenderNodeType.Node, e ], d(o), !1));
}, ms = function() {
function t(t) {
void 0 === t && (t = 1 / 0), this.pool = [], this.maxSize = t;
}
return t.prototype.acquire = function() {
var t;
return null !== (t = this.pool.pop()) && void 0 !== t ? t : null;
}, t.prototype.release = function(t) {
var e, o;
if (this.pool.length < this.maxSize) this.pool.push(t); else try {
for (var n = h(t.nodes), i = n.next(); !i.done; i = n.next()) i.value.destroyNative();
} catch (t) {
e = {
error: t
};
} finally {
try {
i && !i.done && (o = n.return) && o.call(n);
} finally {
if (e) throw e.error;
}
}
}, t.prototype.dispose = function() {
var t, e, o, n;
try {
for (var i = h(this.pool), r = i.next(); !r.done; r = i.next()) {
var s = r.value;
try {
for (var a = (o = void 0, h(s.nodes)), l = a.next(); !l.done; l = a.next()) l.value.destroyNative();
} catch (t) {
o = {
error: t
};
} finally {
try {
l && !l.done && (n = a.return) && n.call(a);
} finally {
if (o) throw o.error;
}
}
}
} catch (e) {
t = {
error: e
};
} finally {
try {
r && !r.done && (e = i.return) && e.call(i);
} finally {
if (t) throw t.error;
}
}
this.pool.length = 0;
}, t;
}(), _s = function(t) {
function e() {
return null !== t && t.apply(this, arguments) || this;
}
return o(e, t), e.prototype.getExtraDependencies = function() {
return [];
}, e.prototype.getTargetDomainName = function(t) {
var e = this._atomWorld.atomInstanceMap.get(t), o = e.constructor.__bindingMeta.entityRenderer;
return e.getBoundAtomName(o);
}, e.prototype.compareAtoms = function(t, e) {
var o = this._atomWorld.atomInstanceMap.get(t), n = this._atomWorld.atomInstanceMap.get(e), i = void 0 === o.renderCondition(), r = void 0 === n.renderCondition();
return i && !r ? 1 : !i && r ? -1 : t.localeCompare(e);
}, e.prototype.resolve = function() {
for (var t = this.getInstances(), e = 0, o = t.length; e < o; e++) {
var n = t[e];
if (!1 !== n.renderCondition()) return n;
}
return null;
}, e.prototype.topologicalSort = function() {
var e = t.prototype.topologicalSort.call(this);
return e.length, e;
}, e;
}(xe), fs = new Set([ Fo, Mo ]), ys = new Set([ "quatX", "quatY", "quatZ", "quatW" ]), vs = function() {
this.preciseUpdateOps = [], this.logicDependencies = [], this.totalNodes = 0, this.renderConfig = null, 
this.nodeInitOps = [], this.nodeEventOps = [], this.boneAttachments = [], this.scrollViewContent = null;
}, gs = function(e) {
function n() {
var t = e.apply(this, p([], d(arguments), !1)) || this;
return t.pool = null, t._compiledRender = null, t._renderConfig = null, t._domain = null, 
t.genChain = null, t;
}
return o(n, e), Object.defineProperty(n, "atomType", {
get: function() {
return "RenderAtom";
},
enumerable: !1,
configurable: !0
}), n.prototype.renderCondition = function() {}, n.prototype.poolMaxSize = function() {
return 1 / 0;
}, n.prototype.getEntityRendererDomain = function() {
var t, e = null === (t = this.constructor.__bindingMeta) || void 0 === t ? void 0 : t.entityRenderer;
return e ? this.getBoundAtomName(e) : void 0;
}, n.prototype.getDependencies = function() {
var t = e.prototype.getDependencies.call(this);
return t.includes(Fo) || t.push(Fo), t.includes(Mo) || t.push(Mo), t;
}, n.prototype.init = function(t, o) {
e.prototype.init.call(this, t, o);
var n = this.getEntityRendererDomain();
n && (this._domain = this.atomWorld.getAtomIns(n), this._domain.renderVariantChain || (this._domain.renderVariantChain = new _s(o)), 
this._domain.renderVariantChain.addAtom(t));
}, n.prototype.onReady = function() {
return c(this, void 0, void 0, function() {
return u(this, function(t) {
switch (t.label) {
case 0:
return this._renderConfig = this.defineRender(), this.atomState = this._buildPropsMap(this._renderConfig), 
this.genChain ? [ 4, this.genChain.execute() ] : [ 3, 2 ];

case 1:
t.sent(), t.label = 2;

case 2:
return this._normalizeSpineSlots(this._renderConfig, this.atomState), this._compiledRender = this._compile(this._renderConfig), 
this.pool = new ms(this.poolMaxSize()), [ 2 ];
}
});
});
}, n.prototype.dispose = function() {
var t, o;
(null === (t = this._domain) || void 0 === t ? void 0 : t.renderVariantChain) && this._domain.renderVariantChain.removeAtom(this.atomName) && (this._domain.renderVariantChain = null), 
this._domain = null, null === (o = this.pool) || void 0 === o || o.dispose(), this.pool = null, 
this._compiledRender = null, this._renderConfig = null, e.prototype.dispose.call(this);
}, n.prototype.getTopologicalChain = function() {
var t, e;
return null !== (e = null === (t = this._domain) || void 0 === t ? void 0 : t.renderVariantChain) && void 0 !== e ? e : null;
}, n.prototype.refreshInstance = function(t, e) {
var o;
(null === (o = t._dirtyPreciseOps) || void 0 === o ? void 0 : o.size) > 0 && this._refreshPrecise(t, e);
}, n.prototype._refreshPrecise = function(t, e) {
var o = this._compiledRender, n = t._dirtyPreciseOps;
this._withInstanceContext(t, function() {
var i, r, s = t.nodes;
try {
for (var a = h(n), l = a.next(); !l.done; l = a.next()) {
var c = l.value, u = o.preciseUpdateOps[c], d = s[u.nodeIndex];
u.setter(d, u.getter(e));
}
} catch (t) {
i = {
error: t
};
} finally {
try {
l && !l.done && (r = a.return) && r.call(a);
} finally {
if (i) throw i.error;
}
}
}), n.clear();
}, n.prototype.getLogicDependencies = function() {
return this._compiledRender.logicDependencies;
}, n.prototype.createRender = function(t, e) {
var o = this, n = this.pool.acquire();
if (n) return this._reuseInstance(n, e), n;
var i = {
rootNode: null,
nodes: [],
renderAtom: this,
_lastRefreshFrame: -1,
eid: e
};
return this._withInstanceContext(i, function() {
i.rootNode = o._createNodeTree(t, o._compiledRender.renderConfig, i, e);
}), this._rebuildScrollViewContent(i), this._registerPreciseTracking(i), i;
}, n.prototype._reuseInstance = function(t, e) {
var o = this;
t.eid = e, t._lastRefreshFrame = -1, t._valueCache = void 0, t.nodeCache = void 0, 
t._dirtyPreciseOps && (t._dirtyPreciseOps.clear(), t._preciseValueCache = void 0), 
this._withInstanceContext(t, function() {
for (var n = t.nodes, i = 0; i < n.length; i++) o._initNode(n[i], i, e);
}), this._rebuildBoneAttachments(t), this._rebuildScrollViewContent(t), this._registerPreciseTracking(t);
}, n.prototype._rebuildBoneAttachments = function(t) {
var e, o, n = this._compiledRender;
if (0 !== n.boneAttachments.length) {
var i = t.nodes;
try {
for (var r = h(n.boneAttachments), s = r.next(); !s.done; s = r.next()) {
var a = s.value, l = i[a.parentIndex], c = i[a.childIndex];
l.attachToBone(c, a.boneName, a.bindAlpha);
}
} catch (t) {
e = {
error: t
};
} finally {
try {
s && !s.done && (o = r.return) && o.call(r);
} finally {
if (e) throw e.error;
}
}
}
}, n.prototype._rebuildScrollViewContent = function(t) {
var e = this._compiledRender.scrollViewContent;
if (e) {
var o = t.nodes, n = o[e.scrollViewIndex], i = o[e.contentIndex];
n.rebuildScrollViewContent(i);
}
}, n.prototype._initNode = function(t, e, o) {
var n = this;
Te(this.atomName), t.initRender(o, this.atomWorld.config.worldId);
var i = this._compiledRender, r = i.nodeInitOps[e];
if (r) for (var s = 0; s < r.length; s++) {
var a = r[s];
a.setter(t, a.getter(o));
}
var l = i.nodeEventOps[e];
if (l) {
var c = function(e) {
var i, r = l[e];
switch (r.eventName) {
case "buttonClick":
i = u.atomWorld.getAtomIns($o);
break;

case "touchStart":
i = u.atomWorld.getAtomIns(tn);
break;

case "touchEnd":
i = u.atomWorld.getAtomIns(en);
}
r.setter(t, function(t) {
if (n.atomWorld) {
var e = r.getter(o);
e && (null == i || i.emit(o), n.atomWorld.pendingRouterSignals.push({
fromRouterName: e.atomName,
signalName: e.to.atomName,
eidList: [ o ],
inputData: t
}));
}
});
}, u = this;
for (s = 0; s < l.length; s++) c(s);
}
Te(void 0);
}, n.prototype._createNodeTree = function(t, e, o, n) {
var i, r, s = t.createRenderNode(e.type), a = o.nodes.length;
if (o.nodes.push(s), this._initNode(s, a, n), e.children) try {
for (var l = h(e.children), c = l.next(); !c.done; c = l.next()) {
var u = c.value, d = this._createNodeTree(t, u, o, n);
u._boneName && "attachToBone" in s ? s.attachToBone(d, u._boneName, u._bindAlpha) : s.addChild(d);
}
} catch (t) {
i = {
error: t
};
} finally {
try {
c && !c.done && (r = l.return) && r.call(l);
} finally {
if (i) throw i.error;
}
}
return s;
}, n.prototype.onContextRestore = function(t) {
var e, o;
try {
for (var n = h(t.nodes), i = n.next(); !i.done; i = n.next()) {
var r = i.value;
try {
r.restoreMaterial();
} catch (t) {}
try {
r.restoreTexture();
} catch (t) {}
}
} catch (t) {
e = {
error: t
};
} finally {
try {
i && !i.done && (o = n.return) && o.call(n);
} finally {
if (e) throw e.error;
}
}
}, n.prototype.destroyRender = function(t) {
this._prepareForPooling(t), this.pool.release(t);
}, n.prototype._prepareForPooling = function(t) {
var e, o;
this._unregisterPreciseTracking(t);
try {
for (var n = h(t.nodes), i = n.next(); !i.done; i = n.next()) i.value.disposeRender();
} catch (t) {
e = {
error: t
};
} finally {
try {
i && !i.done && (o = n.return) && o.call(n);
} finally {
if (e) throw e.error;
}
}
t.rootNode.removeFromParent();
}, n.prototype.getNode = function(t) {
var e = this._currentInstance;
if (e) {
var o = this._ensureNodeCache(e)[t];
if (o) return {
x: o.getX(),
y: o.getY(),
width: o.getWidth(),
height: o.getHeight()
};
}
}, n.prototype.getSlotNode = function(t, e) {
return this._ensureNodeCache(t)[e];
}, n.prototype.findSlotPath = function(t) {
if (this._renderConfig) {
if (this._renderConfig.props.name === t) return [];
var e = [];
return this._findSlotDFS(this._renderConfig, t, e) ? e : void 0;
}
}, n.prototype._findSlotDFS = function(t, e, o) {
var n, i;
if (!t.children) return !1;
try {
for (var r = h(t.children), s = r.next(); !s.done; s = r.next()) {
var a = s.value;
if (o.push(a.props.name), a.props.name === e) return !0;
if (this._findSlotDFS(a, e, o)) return !0;
o.pop();
}
} catch (t) {
n = {
error: t
};
} finally {
try {
s && !s.done && (i = r.return) && i.call(r);
} finally {
if (n) throw n.error;
}
}
return !1;
}, n.prototype._withInstanceContext = function(t, e) {
var o = this._currentInstance;
this._currentInstance = t;
try {
e();
} finally {
this._currentInstance = o;
}
}, n.prototype._ensureNodeCache = function(t) {
var e, o;
if (!t.nodeCache) {
var n = {};
try {
for (var i = h(t.nodes), r = i.next(); !r.done; r = i.next()) {
var s = r.value, a = s.getName();
a && void 0 === n[a] && (n[a] = s);
}
} catch (t) {
e = {
error: t
};
} finally {
try {
r && !r.done && (o = i.return) && o.call(i);
} finally {
if (e) throw e.error;
}
}
t.nodeCache = n;
}
return t.nodeCache;
}, n.prototype._buildPropsMap = function(t) {
var e = {}, o = function(t) {
var n, i;
if (t && (e[t.props.name] = t.props, t.children)) try {
for (var r = h(t.children), s = r.next(); !s.done; s = r.next()) {
var a = s.value;
o(a);
}
} catch (t) {
n = {
error: t
};
} finally {
try {
s && !s.done && (i = r.return) && i.call(r);
} finally {
if (n) throw n.error;
}
}
};
return o(t), e;
}, n.prototype._normalizeSpineSlots = function(e, o) {
var n, i, r, s, a, l, c, u;
if (e.children) try {
for (var m = h(e.children), _ = m.next(); !_.done; _ = m.next()) {
var f = _.value;
this._normalizeSpineSlots(f, o);
}
} catch (t) {
n = {
error: t
};
} finally {
try {
_ && !_.done && (i = m.return) && i.call(m);
} finally {
if (n) throw n.error;
}
}
if (e.type === t.RenderNodeType.Spine) {
var y = [];
if (e.children) try {
for (var v = h(e.children), g = v.next(); !g.done; g = v.next()) (f = g.value)._boneName ? (null === (c = f.props) || void 0 === c ? void 0 : c.name) && delete o[f.props.name] : y.push(f);
} catch (t) {
r = {
error: t
};
} finally {
try {
g && !g.done && (s = v.return) && s.call(v);
} finally {
if (r) throw r.error;
}
}
var A = ti(e.props.slots);
try {
for (var x = h(A), b = x.next(); !b.done; b = x.next()) (null === (u = (f = b.value).props) || void 0 === u ? void 0 : u.name) && (o[f.props.name] = f.props);
} catch (t) {
a = {
error: t
};
} finally {
try {
b && !b.done && (l = x.return) && l.call(x);
} finally {
if (a) throw a.error;
}
}
var C = p(p([], d(A), !1), d(y), !1);
e.children = C.length > 0 ? C : void 0, delete e.props.slots;
}
}, n.prototype._compile = function(e) {
var o, n, i = this, r = new vs();
r.renderConfig = e;
try {
for (var s = h(this.getDependencies()), a = s.next(); !a.done; a = s.next()) {
var l = a.value;
"LogicAtom" === this.getDepAtomType(l) && r.logicDependencies.push(l);
}
} catch (t) {
o = {
error: t
};
} finally {
try {
a && !a.done && (n = s.return) && n.call(s);
} finally {
if (o) throw o.error;
}
}
var c = 0, u = function(e, o) {
var n, s, a, l, d, p = c++;
if (i._compileNodeProps(r, e, p, o), e.children) {
var m = e.type === t.RenderNodeType.ScrollView ? null === (l = null === (a = e.props) || void 0 === a ? void 0 : a.content) || void 0 === l ? void 0 : l.name : void 0;
try {
for (var _ = h(e.children), f = _.next(); !f.done; f = _.next()) {
var y = f.value;
if (y._boneName) {
var v = c;
r.boneAttachments.push({
childIndex: v,
parentIndex: p,
boneName: y._boneName,
bindAlpha: y._bindAlpha
});
}
m && (null === (d = y.props) || void 0 === d ? void 0 : d.name) === m && (r.scrollViewContent = {
scrollViewIndex: p,
contentIndex: c
}), u(y, !1);
}
} catch (t) {
n = {
error: t
};
} finally {
try {
f && !f.done && (s = _.return) && s.call(_);
} finally {
if (n) throw n.error;
}
}
}
};
return u(e, !0), r.totalNodes = c, r;
}, n.prototype._compileNodeProps = function(t, e, o, n) {
n && (this._injectTransformSync(t, e, o), this._injectBoxSync(t, e, o)), this._walkProps(t, e, o, e.props, nr(e.type), "");
}, n.prototype._isRootPropControlledByComponent = function(t, e) {
var o, n = t[e];
if (!this._isDynamicBinding(n) || n.length < 2) return !1;
for (var i = 1; i < n.length; i++) {
var r = n[i], s = null == r ? void 0 : r[0];
if (s) {
var a = null !== (o = s.atomName) && void 0 !== o ? o : s[ye];
if (a && fs.has(a)) {
var l = r.slice(1);
if (1 === l.length && l[0] === e) return !0;
if ("angle" === e && 1 === l.length && ys.has(l[0])) return !0;
}
}
}
return !1;
}, n.prototype._walkProps = function(t, e, o, n, i, r) {
for (var s in n) {
var a = n[s], l = r ? "".concat(r, ".").concat(s) : s, c = null == i ? void 0 : i[s];
if (this._isPlainObject(a) && c && "object" == typeof c) this._walkProps(t, e, o, a, c, l); else if ("event" !== r) {
var u = this._resolveSetter(c, l, e.type);
this._compileValue(t, o, u, a, s);
} else this._compileEvent(t, e, o, s, a);
}
}, n.prototype._resolveSetter = function(t, e, o) {
return t && "object" == typeof t && y(i.RenderGroupAssign, {
node: o,
property: e
}), t || y(i.RenderPropertyNotExist, {
node: o,
property: e
}), t;
}, n.prototype._isDynamicBinding = function(t) {
return Array.isArray(t) && "function" == typeof t[0];
}, n.prototype._makeFieldKey = function(t, e) {
return "".concat(t, ":").concat(e.join("."));
}, n.prototype._compileValue = function(t, e, o, n, i) {
var r, s, a, l;
this._isDynamicBinding(n) ? 1 === n.length ? (null !== (r = (a = t.nodeInitOps)[e]) && void 0 !== r ? r : a[e] = []).push({
nodeIndex: e,
setter: o,
getter: n[0]
}) : this._compilePreciseBinding(t, e, o, n, i) : (null !== (s = (l = t.nodeInitOps)[e]) && void 0 !== s ? s : l[e] = []).push({
nodeIndex: e,
setter: o,
getter: function() {
return n;
}
});
}, n.prototype._compilePreciseBinding = function(t, e, o, n) {
var i, r, s, a, l, c = d(n), u = c[0], p = c.slice(1), m = [];
try {
for (var _ = h(p), f = _.next(); !f.done; f = _.next()) {
var y = d(f.value), v = y[0], g = y.slice(1), A = null !== (s = v.atomName) && void 0 !== s ? s : v[ye];
if (A) {
var x = {
atomName: A,
fieldPath: g
};
m.push(x);
var b = this.atomWorld.getAtomIns(A);
"EntityComponentAtom" === (null == b ? void 0 : b.atomType) && this._injectComponentSetMethod(b, x);
}
}
} catch (t) {
i = {
error: t
};
} finally {
try {
f && !f.done && (r = _.return) && r.call(_);
} finally {
if (i) throw i.error;
}
}
var C = {
nodeIndex: e,
setter: o,
getter: u,
dependencies: m
};
t.preciseUpdateOps.push(C), (null !== (a = (l = t.nodeInitOps)[e]) && void 0 !== a ? a : l[e] = []).push({
nodeIndex: e,
setter: o,
getter: u
});
}, n.prototype._isPlainObject = function(t) {
if ("object" != typeof t || null === t) return !1;
var e = Object.getPrototypeOf(t);
return e === Object.prototype || null === e;
}, n.prototype._compileEvent = function(t, e, o, n, r) {
var s, a, l = nr(e.type).event, c = l ? l[n] : void 0, u = null;
c && "function" == typeof c && (u = c), u || y(i.RenderEventNotRegistered, {
node: e.type,
event: n
});
var h = this.atomWorld.getAtomIns(r[ye]);
(null !== (s = (a = t.nodeEventOps)[o]) && void 0 !== s ? s : a[o] = []).push({
eventName: n,
setter: u,
getter: function() {
return h;
}
});
}, n.prototype._injectTransformSync = function(t, e, o) {
this._injectComponentBindings(t, e, o, Fo, 0);
}, n.prototype._injectBoxSync = function(t, e, o) {
this._injectComponentBindings(t, e, o, Mo);
}, n.prototype._injectComponentBindings = function(t, e, o, n, i) {
var r = this.atomWorld.getAtomIns(n);
if (r) {
var s = r.atomState, a = this.atomWorld.ecsWorld, l = function(n) {
if (n in e.props) return "continue";
var l = nr(e.type)[n];
if (!l) return "continue";
c._compilePreciseBinding(t, o, function(t, e) {
void 0 !== e && l(t, e);
}, [ function(t) {
if (!Tt(a, t, s)) return i;
var e = s[n];
return e ? e[t] : i;
}, [ r, n ] ], n);
}, c = this;
for (var u in s) l(u);
}
}, n.prototype._registerPreciseTracking = function(t) {
var e, o, n = this._compiledRender;
if (0 !== n.preciseUpdateOps.length) {
t._dirtyPreciseOps = new Set();
for (var i = 0; i < n.preciseUpdateOps.length; i++) {
var r = n.preciseUpdateOps[i];
try {
for (var s = (e = void 0, h(r.dependencies)), a = s.next(); !a.done; a = s.next()) {
var l = a.value, c = this._makeFieldKey(l.atomName, l.fieldPath), u = this.atomWorld.universe, d = u.fieldWatchers.get(c);
d || (d = new Set(), u.fieldWatchers.set(c, d)), this._setupFieldInterceptor(l), 
d.add({
instance: t,
opIndex: i
});
}
} catch (t) {
e = {
error: t
};
} finally {
try {
a && !a.done && (o = s.return) && o.call(s);
} finally {
if (e) throw e.error;
}
}
}
}
}, n.prototype._unregisterPreciseTracking = function(t) {
var e, o, n, i, r, s;
if (t._dirtyPreciseOps) {
var a = this._compiledRender;
try {
for (var l = h(a.preciseUpdateOps), c = l.next(); !c.done; c = l.next()) {
var u = c.value;
try {
for (var d = (n = void 0, h(u.dependencies)), p = d.next(); !p.done; p = d.next()) {
var m = p.value, _ = this._makeFieldKey(m.atomName, m.fieldPath), f = this.atomWorld.universe, y = f.fieldWatchers.get(_);
if (y) {
try {
for (var v = (r = void 0, h(y)), g = v.next(); !g.done; g = v.next()) {
var A = g.value;
A.instance === t && y.delete(A);
}
} catch (t) {
r = {
error: t
};
} finally {
try {
g && !g.done && (s = v.return) && s.call(v);
} finally {
if (r) throw r.error;
}
}
0 === y.size && f.fieldWatchers.delete(_);
}
}
} catch (t) {
n = {
error: t
};
} finally {
try {
p && !p.done && (i = d.return) && i.call(d);
} finally {
if (n) throw n.error;
}
}
}
} catch (t) {
e = {
error: t
};
} finally {
try {
c && !c.done && (o = l.return) && o.call(l);
} finally {
if (e) throw e.error;
}
}
t._dirtyPreciseOps = void 0, t._preciseValueCache = void 0;
}
}, n.prototype._injectComponentSetMethod = function(t, e) {
var o, n = t.atomState;
if (n) {
for (var i = 0; i < e.fieldPath.length; i++) {
var r = e.fieldPath[i];
if (void 0 === (n = n[r])) return;
}
if (!(null === (o = n.set) || void 0 === o ? void 0 : o.__isAtomInterceptor)) {
var s = this.atomWorld.universe, a = this.atomWorld.storageScope, l = function(t, o) {
n[t] = o, s.onFieldWrite(e.atomName, e.fieldPath, t, a);
};
l.__isAtomInterceptor = !0, Object.defineProperty(n, "set", {
value: l,
writable: !1,
enumerable: !1,
configurable: !0
});
}
}
}, n.prototype._setupFieldInterceptor = function(t) {
var e, o = this.atomWorld.getAtomIns(t.atomName);
if (o && "EntityComponentAtom" !== o.atomType) {
var n = o.atomState;
if (n) for (var i = function(o) {
var i = t.fieldPath[o];
if (!(i in n)) return {
value: void 0
};
if (o < t.fieldPath.length - 1) return n = n[i], "continue";
var s = Object.getOwnPropertyDescriptor(n, i);
if (null === (e = null == s ? void 0 : s.set) || void 0 === e ? void 0 : e.__isAtomInterceptor) return {
value: void 0
};
var a = n[i], l = r.atomWorld.universe, c = r.atomWorld.storageScope, u = function(e) {
a = e, l.onFieldWrite(t.atomName, t.fieldPath, void 0, c);
};
u.__isAtomInterceptor = !0, Object.defineProperty(n, i, {
get: function() {
return a;
},
set: u,
enumerable: !0,
configurable: !0
});
}, r = this, s = 0; s < t.fieldPath.length; s++) {
var a = i(s);
if ("object" == typeof a) return a.value;
}
}
}, n.prototype.registerToChain = function(t) {
return this.genChain || (this.genChain = new be(this.atomWorld, this.atomName)), 
this.genChain.addAtom(t), this.genChain;
}, n.prototype.unregisterFromChain = function(t) {
if (!this.genChain) return !1;
var e = this.genChain.removeAtom(t);
return e && (this.genChain = null), e;
}, n.prototype.getChain = function() {
return this.genChain;
}, n[ge] = !0, n;
}(Ae), As = function(e) {
function n() {
return null !== e && e.apply(this, arguments) || this;
}
return o(n, e), Object.defineProperty(n, "atomType", {
get: function() {
return "LoadAtom";
},
enumerable: !1,
configurable: !0
}), n.prototype.collectLoad = function() {
this.atomWorld.loadTracker.addItems(n.LOAD_WEIGHT);
}, n.prototype.executeLoadDef = function(e, o) {
return c(this, void 0, void 0, function() {
var i, r, s, a, l, c, p, m, _, f, y, v, g, A, x, b, C, w, S, R, B, T, F, M, I, D, N, P, E, L, W, V, O, k, G, z, j, q, H, U, Y, X, J, Q, K, Z, $, tt, et, ot, nt, it, rt, st, at, lt, ct, ut, ht, dt, pt, mt = this;
return u(this, function(u) {
switch (u.label) {
case 0:
if (!this.atomWorld) return [ 2 ];
if (i = e.paths, r = void 0 === i ? {} : i, s = e.directories, a = void 0 === s ? [] : s, 
l = e.concurrency, c = e.downloadWorldBundles, p = e.onlyDownload || this.atomWorld.isDownloadOnly, 
m = this.atomWorld.universe.asset, _ = (null == c ? void 0 : c.length) ? this.atomWorld.universe.featureResolver.getFeatureNamesForWorlds(c) : [], 
f = !p && !0 === e.preheat, y = f && null !== (pt = r[t.LoaderAssetType.SkeletonData]) && void 0 !== pt ? pt : [], 
v = Object.values(r).reduce(function(t, e) {
var o;
return t + (null !== (o = null == e ? void 0 : e.length) && void 0 !== o ? o : 0);
}, 0), g = _.length + v + a.length, A = y.length > 0 ? 1 - n.PREHEAT_PROGRESS_RATIO : 1, 
x = A, b = 0, C = function() {
null == o || o(g > 0 ? b / g * A : A);
}, !(_.length > 0)) return [ 3, 13 ];
u.label = 1;

case 1:
u.trys.push([ 1, 9, 10, 11 ]), w = h(null != c ? c : []), S = w.next(), u.label = 2;

case 2:
if (S.done) return [ 3, 8 ];
R = S.value, u.label = 3;

case 3:
return u.trys.push([ 3, 5, , 6 ]), [ 4, m.ensureSessionPlan(R) ];

case 4:
case 5:
return u.sent(), [ 3, 6 ];

case 6:
if (!this.atomWorld) return [ 2 ];
u.label = 7;

case 7:
return S = w.next(), [ 3, 2 ];

case 8:
return [ 3, 11 ];

case 9:
return B = u.sent(), rt = {
error: B
}, [ 3, 11 ];

case 10:
try {
S && !S.done && (st = w.return) && st.call(w);
} finally {
if (rt) throw rt.error;
}
return [ 7 ];

case 11:
return [ 4, m.preloadBundles(_, function() {
mt.atomWorld && (b++, C());
}) ];

case 12:
if (u.sent(), !this.atomWorld) return [ 2 ];
u.label = 13;

case 13:
for (D in T = p ? m.preloadDir.bind(m) : m.loadDir.bind(m), F = f ? new Map() : null, 
I = [], M = r) I.push(D);
N = 0, u.label = 14;

case 14:
if (!(N < I.length)) return [ 3, 26 ];
if (!((D = I[N]) in M)) return [ 3, 25 ];
if (!(E = r[P = D])) return [ 3, 25 ];
L = P, u.label = 15;

case 15:
u.trys.push([ 15, 23, 24, 25 ]), at = void 0, W = h(E), V = W.next(), u.label = 16;

case 16:
return V.done ? [ 3, 22 ] : (H = V.value, O = kn(H), Y = O.featureName, k = O.assetPath, 
p ? [ 4, m.preloadAsset(Y, k, L) ] : [ 3, 18 ]);

case 17:
return u.sent(), [ 3, 20 ];

case 18:
return [ 4, m.loadAsset(Y, k, L) ];

case 19:
G = u.sent(), F && L === t.LoaderAssetType.SkeletonData && G && F.set(H, G), u.label = 20;

case 20:
if (!this.atomWorld) return [ 2 ];
b++, C(), u.label = 21;

case 21:
return V = W.next(), [ 3, 16 ];

case 22:
return [ 3, 25 ];

case 23:
return z = u.sent(), at = {
error: z
}, [ 3, 25 ];

case 24:
try {
V && !V.done && (lt = W.return) && lt.call(W);
} finally {
if (at) throw at.error;
}
return [ 7 ];

case 25:
return N++, [ 3, 14 ];

case 26:
u.trys.push([ 26, 31, 32, 33 ]), j = h(a), q = j.next(), u.label = 27;

case 27:
return q.done ? [ 3, 30 ] : (H = q.value, U = kn(H), Y = U.featureName, X = U.assetPath, 
[ 4, T(Y, X, l) ]);

case 28:
if (u.sent(), !this.atomWorld) return [ 2 ];
b++, C(), u.label = 29;

case 29:
return q = j.next(), [ 3, 27 ];

case 30:
return [ 3, 33 ];

case 31:
return J = u.sent(), ct = {
error: J
}, [ 3, 33 ];

case 32:
try {
q && !q.done && (ut = j.return) && ut.call(j);
} finally {
if (ct) throw ct.error;
}
return [ 7 ];

case 33:
if (!(F && F.size > 0)) return [ 3, 41 ];
Q = this.atomWorld.universe.render, K = Array.from(F.entries()), Z = K.length, $ = 0, 
u.label = 34;

case 34:
u.trys.push([ 34, 39, 40, 41 ]), tt = h(K), et = tt.next(), u.label = 35;

case 35:
return et.done ? [ 3, 38 ] : (ot = d(et.value, 2), nt = ot[1], this.atomWorld ? [ 4, Q.preheatSpineSharedCache(nt, function(t) {
null == o || o(x + ($ + t) / Z * n.PREHEAT_PROGRESS_RATIO);
}) ] : [ 2 ]);

case 36:
if (u.sent(), !this.atomWorld) return [ 2 ];
$++, null == o || o(x + $ / Z * n.PREHEAT_PROGRESS_RATIO), u.label = 37;

case 37:
return et = tt.next(), [ 3, 35 ];

case 38:
return [ 3, 41 ];

case 39:
return it = u.sent(), ht = {
error: it
}, [ 3, 41 ];

case 40:
try {
et && !et.done && (dt = tt.return) && dt.call(tt);
} finally {
if (ht) throw ht.error;
}
return [ 7 ];

case 41:
return null == o || o(1), [ 2 ];
}
});
});
}, n.prototype.onReady = function() {
return c(this, void 0, void 0, function() {
var t, e, o, i, r, s = this;
return u(this, function(a) {
switch (a.label) {
case 0:
return !(t = this.atomState = this.defineLoad()) || t.silent ? (this.atomWorld.loadTracker.complete(n.LOAD_WEIGHT), 
[ 2 ]) : (e = this.atomWorld.config.worldId, this.atomWorld.universe.featureResolver.shouldSkipNonSilentLoadAtoms(e) ? (this.atomWorld.loadTracker.complete(n.LOAD_WEIGHT), 
[ 2 ]) : (o = 0, i = 0, [ 4, this.executeLoadDef(t, function(t) {
if (s.atomWorld) {
o = n.LOAD_WEIGHT * t;
var e = Math.floor(o - i);
e > 0 && (s.atomWorld.loadTracker.complete(e), i += e);
}
}) ]));

case 1:
return a.sent(), (r = n.LOAD_WEIGHT - i) > 0 && this.atomWorld && this.atomWorld.loadTracker.complete(r), 
this.atomWorld, [ 2 ];
}
});
});
}, n[ge] = !0, n.LOAD_WEIGHT = 20, n.PREHEAT_PROGRESS_RATIO = .1, n;
}(Ae), xs = function(t) {
function e() {
return null !== t && t.apply(this, arguments) || this;
}
return o(e, t), a([ je("G_FAtom_AudioPlayer") ], e);
}(ds), bs = function(t) {
function e() {
return null !== t && t.apply(this, arguments) || this;
}
return o(e, t), a([ qe("G_FAtom_Transform"), l("design:type", Object) ], e.prototype, "transform", void 0), 
a([ je(ro) ], e);
}(Xr), Cs = function(t) {
function e() {
return null !== t && t.apply(this, arguments) || this;
}
return o(e, t), a([ qe(Fo), l("design:type", Object) ], e.prototype, "transform", void 0), 
a([ qe(Mo), l("design:type", Object) ], e.prototype, "box", void 0), a([ qe(Io), l("design:type", Object) ], e.prototype, "worldState", void 0), 
a([ je(so) ], e);
}(Xr), ws = function(e) {
function n() {
return null !== e && e.apply(this, arguments) || this;
}
return o(n, e), n.prototype.defineRender = function() {
return ps({
name: "Root",
blockInputEvents: !0,
widget: {
top: 0,
bottom: 0,
left: 0,
right: 0,
alignMode: t.WidgetAlignMode.Always
}
});
}, a([ Ue, qe("G_FAtom_RootDomain"), l("design:type", Object) ], n.prototype, "root", void 0), 
a([ je("G_FAtom_RootRender") ], n);
}(gs), Ss = function(t) {
function e() {
return null !== t && t.apply(this, arguments) || this;
}
return o(e, t), e.prototype.defineRender = function() {
return ps({
name: "WorldContainer"
});
}, a([ Ue, qe(so), l("design:type", Object) ], e.prototype, "world", void 0), a([ je("G_FAtom_WorldRender") ], e);
}(gs), Rs = function(t) {
function e() {
return null !== t && t.apply(this, arguments) || this;
}
return o(e, t), e.prototype.defineComponent = function() {
return {
x: 0,
y: 0,
z: 0,
quatX: 0,
quatY: 0,
quatZ: 0,
quatW: 1,
scaleX: 1,
scaleY: 1,
scaleZ: 1
};
}, a([ je(Fo) ], e);
}(Yr), Bs = function(t) {
function e() {
return null !== t && t.apply(this, arguments) || this;
}
return o(e, t), e.prototype.defineComponent = function() {
return {
width: 0,
height: 0,
depth: 0,
anchorX: .5,
anchorY: .5,
anchorZ: .5
};
}, a([ je(Mo) ], e);
}(Yr), Ts = function(t) {
function e() {
return null !== t && t.apply(this, arguments) || this;
}
return o(e, t), e.prototype.defineComponent = function() {
return {
receiveInput: 1,
worldId: "",
randomSeed: 0,
multiTouch: void 0,
physics2D: "",
config3D: ""
};
}, a([ je(Io) ], e);
}(Yr), Fs = function(t) {
function e() {
return null !== t && t.apply(this, arguments) || this;
}
return o(e, t), e.prototype.defineComponent = function() {
return {
name: ""
};
}, a([ je(Do) ], e);
}(Yr), Ms = function(t) {
function e() {
var e = t.apply(this, p([], d(arguments), !1)) || this;
return e.mountSlots = new Map(), e;
}
return o(e, t), e.prototype.defineRelation = function() {
return {
exclusive: !0,
autoRemoveSubject: !0
};
}, e.prototype.addChild = function(t, e, o) {
return this.getParent(e) === t && this.remove(t, e), o ? this.mountSlots.set(e, o) : this.mountSlots.delete(e), 
this.set(t, e);
}, e.prototype.removeChild = function(t, e) {
return this.mountSlots.delete(e), this.remove(t, e);
}, e.prototype.getParent = function(t) {
return this.getSource(t);
}, e.prototype.getChildren = function(t) {
return this.getTargets(t);
}, e.prototype.hasParent = function(t) {
return void 0 !== this.getParent(t);
}, e.prototype.hasChild = function(t, e) {
return this.has(t, e);
}, a([ je(To) ], e);
}(Jr), Is = function(t) {
function e() {
return null !== t && t.apply(this, arguments) || this;
}
return o(e, t), Object.defineProperty(e, "atomType", {
get: function() {
return "InputAtom";
},
enumerable: !1,
configurable: !0
}), Object.defineProperty(e.prototype, "data", {
get: function() {
return this.atomState;
},
enumerable: !1,
configurable: !0
}), e.prototype.fill = function(t) {
Object.assign(this.atomState, t);
}, e.prototype.onReady = function() {
this.atomState = r(r({}, this.defineInputData()), {
eid: 0
});
}, e.prototype.emit = function(t) {
var e = null != t ? t : this.atomState.eid || this.atomWorld.rootEid;
this.atomState.eid = e, this.atomWorld.pushInput(this, e, r({}, this.atomState));
}, e.prototype.emitByRouter = function(t, e) {
var o = null != e ? e : this.atomState.eid || this.atomWorld.rootEid;
this.atomState.eid = o;
var n = this.atomWorld.getAtomIns(t);
this.atomWorld.pendingRouterSignals.push({
fromRouterName: t,
signalName: n.to.atomName,
eidList: [ o ],
inputData: r({}, this.atomState)
});
}, e[ge] = !0, e;
}(is), Ds = function(t) {
function e() {
return null !== t && t.apply(this, arguments) || this;
}
return o(e, t), e.prototype.defineInputData = function() {
return {
x: 0,
y: 0,
dx: 0,
dy: 0,
touchId: 0,
eid: 0,
localX: 0,
localY: 0,
multiTouchs: []
};
}, a([ qe(ro), l("design:type", Object) ], e.prototype, "rootDomain", void 0), a([ je(lo) ], e);
}(Is), Ns = function(t) {
function e() {
return null !== t && t.apply(this, arguments) || this;
}
return o(e, t), e.prototype.defineInputData = function() {
return {
contentX: 0,
contentY: 0,
eid: 0
};
}, a([ qe("G_FAtom_RootDomain"), l("design:type", Object) ], e.prototype, "rootDomain", void 0), 
a([ je(po) ], e);
}(Is), Ps = function(t) {
function e() {
return null !== t && t.apply(this, arguments) || this;
}
return o(e, t), e.prototype.defineInputData = function() {
return {
width: 0,
height: 0,
eid: 0
};
}, a([ qe("G_FAtom_RootDomain"), l("design:type", Object) ], e.prototype, "rootDomain", void 0), 
a([ je(mo) ], e);
}(Is), Es = function(t) {
function e() {
return null !== t && t.apply(this, arguments) || this;
}
return o(e, t), e.prototype.defineInputData = function() {
return {
x: 0,
y: 0,
eid: 0
};
}, a([ qe("G_FAtom_RootDomain"), l("design:type", Object) ], e.prototype, "rootDomain", void 0), 
a([ je(_o) ], e);
}(Is), Ls = function(t) {
function e() {
return null !== t && t.apply(this, arguments) || this;
}
return o(e, t), e.prototype.defineInputData = function() {
return {
text: "",
eid: 0
};
}, a([ qe("G_FAtom_RootDomain"), l("design:type", Object) ], e.prototype, "rootDomain", void 0), 
a([ je(fo) ], e);
}(Is), Ws = function(t) {
function e() {
return null !== t && t.apply(this, arguments) || this;
}
return o(e, t), e.prototype.defineInputData = function() {
return {
frameEventName: "",
eid: 0
};
}, a([ qe("G_FAtom_RootDomain"), l("design:type", Object) ], e.prototype, "rootDomain", void 0), 
a([ je(yo) ], e);
}(Is), Vs = function(t) {
function e() {
return null !== t && t.apply(this, arguments) || this;
}
return o(e, t), e.prototype.defineInputData = function() {
return {
keyCode: 0,
isDown: !1
};
}, a([ qe("G_FAtom_RootDomain"), l("design:type", Object) ], e.prototype, "root", void 0), 
a([ je(co) ], e);
}(Is), Os = function(t) {
function e() {
return null !== t && t.apply(this, arguments) || this;
}
return o(e, t), e.prototype.defineInputData = function() {
return {
width: 0,
height: 0
};
}, a([ qe("G_FAtom_RootDomain"), l("design:type", Object) ], e.prototype, "root", void 0), 
a([ je(uo) ], e);
}(Is), ks = function(t) {
function e() {
return null !== t && t.apply(this, arguments) || this;
}
return o(e, t), e.prototype.defineInputData = function() {
return {};
}, a([ qe("G_FAtom_RootDomain"), l("design:type", Object) ], e.prototype, "root", void 0), 
a([ je(ho) ], e);
}(Is), Gs = function(t) {
function e() {
return null !== t && t.apply(this, arguments) || this;
}
return o(e, t), e.prototype.defineInputData = function() {
var t = We(), e = Date.now() / 1e3, o = this.atomWorld.universe.storage, n = this.atomWorld.storageScope, i = o.loadStorage(this.atomName, n);
if (i) {
var r = i.lastWorldStartTime;
e < r && (e = r);
}
return o.saveStorage(this.atomName, {
lastWorldStartTime: e
}, n, this.atomWorld.allowRawMirrorWrite), {
worldTime: 0,
framecount: 0,
deltaTime: this.atomWorld.frameTimeIncrement,
renderDeltaTime: this.atomWorld.frameTimeIncrement * this.atomWorld.renderTimeScale,
worldStartTime: e,
worldStartPerformance: t
};
}, e.prototype.emit = function() {
this.data.worldTime += this.atomWorld.frameTimeIncrement, this.data.framecount += 1, 
this.data.deltaTime = this.atomWorld.frameTimeIncrement, this.data.renderDeltaTime = this.atomWorld.frameTimeIncrement * this.atomWorld.renderTimeScale, 
t.prototype.emit.call(this);
}, a([ qe("G_FAtom_RootDomain"), l("design:type", Object) ], e.prototype, "root", void 0), 
a([ je(ao) ], e);
}(Is), zs = function(t) {
function e() {
return null !== t && t.apply(this, arguments) || this;
}
return o(e, t), e.prototype.defineInputData = function() {
return {
rootEid: 0,
appliedFeaturesVersion: void 0
};
}, a([ qe("G_FAtom_RootDomain"), l("design:type", Object) ], e.prototype, "rootDomain", void 0), 
a([ je(vo) ], e);
}(Is), js = function(t) {
function e() {
return null !== t && t.apply(this, arguments) || this;
}
return o(e, t), e.prototype.defineInputData = function() {
return {};
}, a([ qe("G_FAtom_RootDomain"), l("design:type", Object) ], e.prototype, "rootDomain", void 0), 
a([ je("G_FAtom_WorldResume") ], e);
}(Is), qs = function(t) {
function e() {
return null !== t && t.apply(this, arguments) || this;
}
return o(e, t), e.prototype.defineInputData = function() {
return {};
}, a([ qe("G_FAtom_RootDomain"), l("design:type", Object) ], e.prototype, "root", void 0), 
a([ je("G_FAtom_UIEvent") ], e);
}(Is), Hs = function(t) {
function e() {
return null !== t && t.apply(this, arguments) || this;
}
return o(e, t), e.prototype.defineInputData = function() {
return {};
}, a([ qe(ro), l("design:type", Object) ], e.prototype, "rootDomain", void 0), a([ je($o) ], e);
}(Is), Us = function(t) {
function e() {
return null !== t && t.apply(this, arguments) || this;
}
return o(e, t), e.prototype.defineInputData = function() {
return {};
}, a([ qe(ro), l("design:type", Object) ], e.prototype, "rootDomain", void 0), a([ je(tn) ], e);
}(Is), Ys = function(t) {
function e() {
return null !== t && t.apply(this, arguments) || this;
}
return o(e, t), e.prototype.defineInputData = function() {
return {};
}, a([ qe(ro), l("design:type", Object) ], e.prototype, "rootDomain", void 0), a([ je(en) ], e);
}(Is), Xs = function(t) {
function e() {
return null !== t && t.apply(this, arguments) || this;
}
return o(e, t), e.prototype.defineInputData = function() {
return {
param: ""
};
}, a([ qe(ro), l("design:type", Object) ], e.prototype, "rootDomain", void 0), a([ je(on) ], e);
}(Is), Js = function(t) {
function e() {
return null !== t && t.apply(this, arguments) || this;
}
return o(e, t), e.prototype.defineInputData = function() {
return {};
}, a([ qe("G_FAtom_RootDomain"), l("design:type", Object) ], e.prototype, "root", void 0), 
a([ je("G_FAtom_TweenEvent") ], e);
}(Is), Qs = function(t) {
function e() {
return null !== t && t.apply(this, arguments) || this;
}
return o(e, t), e.prototype.defineInputData = function() {
return {
x: 0,
y: 0
};
}, a([ qe("G_FAtom_RootDomain"), l("design:type", Object) ], e.prototype, "root", void 0), 
a([ je("G_FAtom_UniverseOffsetInput") ], e);
}(Is);
t.OriginalCtrlOperation = void 0, (ts = t.OriginalCtrlOperation || (t.OriginalCtrlOperation = {})).Create = "create", 
ts.Destroy = "destroy", ts.Restart = "restart";
var Ks, Zs, $s, ta = function(e) {
function n() {
return null !== e && e.apply(this, arguments) || this;
}
return o(n, e), n.prototype.defineInputData = function() {
return {
operation: t.OriginalCtrlOperation.Create,
worldId: ""
};
}, a([ qe(ro), l("design:type", Object) ], n.prototype, "rootDomain", void 0), a([ je(Ho) ], n);
}(Is), ea = function(t) {
function e() {
return null !== t && t.apply(this, arguments) || this;
}
return o(e, t), e.prototype.defineInputData = function() {
return {};
}, a([ qe("G_FAtom_RootDomain"), l("design:type", Object) ], e.prototype, "root", void 0), 
a([ je(Ao) ], e);
}(Is), oa = function(t) {
function e() {
return null !== t && t.apply(this, arguments) || this;
}
return o(e, t), e.prototype.defineInputData = function() {
return {
durationMs: 0
};
}, a([ qe("G_FAtom_RootDomain"), l("design:type", Object) ], e.prototype, "root", void 0), 
a([ je(xo) ], e);
}(Is), na = function(t) {
function e() {
return null !== t && t.apply(this, arguments) || this;
}
return o(e, t), Object.defineProperty(e, "atomType", {
get: function() {
return "OutputAtom";
},
enumerable: !1,
configurable: !0
}), e.prototype.onReady = function() {
var t = this.defineFunction();
this.atomState = function() {
for (var e = [], o = 0; o < arguments.length; o++) e[o] = arguments[o];
return t.apply(void 0, p([], d(e), !1));
};
}, e[ge] = !0, e;
}(Kr), ia = function(t) {
function e() {
return null !== t && t.apply(this, arguments) || this;
}
return o(e, t), e.prototype.defineFunction = function() {
var t = this;
return function() {
t.atomWorld.markSaveProgress();
};
}, a([ je(Co) ], e);
}(na), ra = function(t) {
function e() {
return null !== t && t.apply(this, arguments) || this;
}
return o(e, t), e.prototype.defineFunction = function() {
var t = this;
return function() {
t.atomWorld.universe.host.showBanner();
};
}, a([ je("G_FAtom_ADShowBanner") ], e);
}(Kr), sa = function(t) {
function e() {
return null !== t && t.apply(this, arguments) || this;
}
return o(e, t), e.prototype.defineFunction = function() {
var t = this;
return function() {
t.atomWorld.universe.host.hideBanner();
};
}, a([ je("G_FAtom_ADHideBanner") ], e);
}(Kr), aa = function(t) {
function e() {
return null !== t && t.apply(this, arguments) || this;
}
return o(e, t), e.prototype.defineFunction = function() {
var t = this;
return function() {
var e = t.atomWorld.universe.host;
e.setAdRequestWorld(t.atomWorld), e.showRewardVideo();
};
}, a([ je("G_FAtom_ADShowRewardVideo") ], e);
}(Kr), la = function(t) {
function e() {
return null !== t && t.apply(this, arguments) || this;
}
return o(e, t), e.prototype.defineFunction = function() {
var t = this;
return function() {
var e = t.atomWorld.universe.host;
e.setAdRequestWorld(t.atomWorld), e.showInterstitial();
};
}, a([ je("G_FAtom_ADShowInterstitial") ], e);
}(Kr), ca = function(t) {
function e() {
return null !== t && t.apply(this, arguments) || this;
}
return o(e, t), e.prototype.defineFunction = function() {
var t = this;
return function() {
var e = t.atomWorld.universe.host;
e.setAdRequestWorld(t.atomWorld), e.showFullscreenAd();
};
}, a([ je("G_FAtom_ADShowFullscreenAd") ], e);
}(Kr), ua = function(t) {
function e() {
return null !== t && t.apply(this, arguments) || this;
}
return o(e, t), e.prototype.defineFunction = function() {
var t = this;
return function() {
return t.atomWorld.universe.host.getTimeSinceLastInterstitialAd();
};
}, a([ je("G_FAtom_GetTimeSinceLastInterstitialAd") ], e);
}(Kr), ha = function(t) {
function e() {
return null !== t && t.apply(this, arguments) || this;
}
return o(e, t), e.prototype.defineFunction = function() {
var t = this;
return function() {
t.atomWorld.universe.host.loadRewardAd();
};
}, a([ je("G_FAtom_ADLoadRewardAd") ], e);
}(Kr), da = function(t) {
function e() {
return null !== t && t.apply(this, arguments) || this;
}
return o(e, t), e.prototype.defineFunction = function() {
var t = this;
return function() {
t.atomWorld.universe.host.loadInterstitialAd();
};
}, a([ je("G_FAtom_ADLoadInterstitialAd") ], e);
}(Kr), pa = function(t) {
function e() {
return null !== t && t.apply(this, arguments) || this;
}
return o(e, t), e.prototype.defineFunction = function() {
var t = this;
return function() {
t.atomWorld.universe.host.loadFullscreenAd();
};
}, a([ je("G_FAtom_ADLoadFullscreenAd") ], e);
}(Kr), ma = function(t) {
function e() {
return null !== t && t.apply(this, arguments) || this;
}
return o(e, t), e.prototype.defineFunction = function() {
var t = this;
return function() {
t.atomWorld.universe.host.loadAllAds();
};
}, a([ je("G_FAtom_ADLoadAllAds") ], e);
}(Kr), _a = function(t) {
function e() {
return null !== t && t.apply(this, arguments) || this;
}
return o(e, t), e.prototype.defineFunction = function() {
var t = this;
return function() {
return t.atomWorld.universe.host.canShowAd();
};
}, a([ je("G_FAtom_ADCanShowAd") ], e);
}(Kr), fa = function(t) {
function e() {
return null !== t && t.apply(this, arguments) || this;
}
return o(e, t), e.prototype.defineFunction = function() {
var t = this;
return function() {
return t.atomWorld.universe.host.isAdLoading();
};
}, a([ je("G_FAtom_ADIsAdLoading") ], e);
}(Kr), ya = function(t) {
function e() {
return null !== t && t.apply(this, arguments) || this;
}
return o(e, t), e.prototype.defineFunction = function() {
var t = this;
return function(e) {
return t.atomWorld.universe.host.getAdReadyState(e);
};
}, a([ je("G_FAtom_ADGetAdReadyState") ], e);
}(Kr), va = function(t) {
function e() {
return null !== t && t.apply(this, arguments) || this;
}
return o(e, t), e.prototype.defineFunction = function() {
var t = this;
return function(e) {
return t.atomWorld.universe.host.getLastAdEcpm(e);
};
}, a([ je("G_FAtom_GetLastAdEcpm") ], e);
}(Kr), ga = function(t) {
function e() {
return null !== t && t.apply(this, arguments) || this;
}
return o(e, t), e.prototype.defineFunction = function() {
var t = this;
return function(e) {
return t.atomWorld.universe.host.getMaxEcpm(e);
};
}, a([ je("G_FAtom_GetMaxEcpm") ], e);
}(Kr), Aa = function(t) {
function e() {
return null !== t && t.apply(this, arguments) || this;
}
return o(e, t), e.prototype.defineFunction = function() {
var t = this;
return function(e) {
return t.atomWorld.universe.host.getMaxEcpmNormalized(e);
};
}, a([ je("G_FAtom_GetMaxEcpmNormalized") ], e);
}(Kr), xa = function(t) {
function e() {
return null !== t && t.apply(this, arguments) || this;
}
return o(e, t), e.prototype.defineFunction = function() {
var t = this;
return function(e, o) {
return t.atomWorld.universe.host.getHistoryMaxEcpmByDays(e, o);
};
}, a([ je("G_FAtom_GetHistoryMaxEcpmByDays") ], e);
}(Kr), ba = function(t) {
function e() {
return null !== t && t.apply(this, arguments) || this;
}
return o(e, t), e.prototype.defineFunction = function() {
var t = this;
return function(e, o) {
return t.atomWorld.universe.host.getHistoryMinEcpmByDays(e, o);
};
}, a([ je("G_FAtom_GetHistoryMinEcpmByDays") ], e);
}(Kr), Ca = function(t) {
function e() {
return null !== t && t.apply(this, arguments) || this;
}
return o(e, t), e.prototype.defineFunction = function() {
var t = this;
return function(e) {
return t.atomWorld.universe.host.getFirstAdEcpm(e);
};
}, a([ je("G_FAtom_GetFirstAdEcpm") ], e);
}(Kr), wa = function(t) {
function e() {
return null !== t && t.apply(this, arguments) || this;
}
return o(e, t), e.prototype.defineFunction = function() {
var t = this;
return function(e, o) {
void 0 === e && (e = 1), void 0 === o && (o = 15), t.atomWorld.universe.host.vibrate(e, o);
};
}, a([ je("G_FAtom_Vibrate") ], e);
}(na), Sa = function(t) {
function e() {
return null !== t && t.apply(this, arguments) || this;
}
return o(e, t), e.prototype.defineFunction = function() {
var t = this;
return function() {
return t.atomWorld.universe.host.getNetworkState();
};
}, a([ je("G_FAtom_GetNetworkState") ], e);
}(Kr), Ra = function(t) {
function e() {
return null !== t && t.apply(this, arguments) || this;
}
return o(e, t), e.prototype.defineFunction = function() {
var t = this;
return function() {
return t.atomWorld.universe.host.getNetworkType();
};
}, a([ je("G_FAtom_GetNetworkType") ], e);
}(Kr), Ba = function(t) {
function e() {
return null !== t && t.apply(this, arguments) || this;
}
return o(e, t), e.prototype.defineFunction = function() {
var t = this;
return function() {
return t.atomWorld.universe.runtime.getSystemLanguage();
};
}, a([ je("G_FAtom_GetSystemLanguage") ], e);
}(Kr), Ta = function(t) {
function e() {
return null !== t && t.apply(this, arguments) || this;
}
return o(e, t), e.prototype.defineFunction = function() {
var t = this;
return function() {
return t.atomWorld.universe.runtime.getSystemLanguageCode();
};
}, a([ je("G_FAtom_GetSystemLanguageCode") ], e);
}(Kr), Fa = function(t) {
function e() {
return null !== t && t.apply(this, arguments) || this;
}
return o(e, t), e.prototype.defineFunction = function() {
var t = this;
return function() {
return t.atomWorld.universe.host.getHostCurrentLanguage();
};
}, a([ je("G_FAtom_GetHostCurrentLanguage") ], e);
}(Kr), Ma = function(t) {
function e() {
return null !== t && t.apply(this, arguments) || this;
}
return o(e, t), e.prototype.defineFunction = function() {
var t = this;
return function(e) {
return t.atomWorld.universe.host.getHostLanguageString(e);
};
}, a([ je("G_FAtom_GetHostLanguageString") ], e);
}(Kr), Ia = function(t) {
function e() {
return null !== t && t.apply(this, arguments) || this;
}
return o(e, t), e.prototype.defineFunction = function() {
var t = this;
return function() {
return t.atomWorld.universe.render.getWinSize();
};
}, a([ je("G_FAtom_GetWinSize") ], e);
}(Kr), Da = function(t) {
function e() {
return null !== t && t.apply(this, arguments) || this;
}
return o(e, t), e.prototype.defineFunction = function() {
var t = this;
return function() {
return t.atomWorld.universe.render.getDesignSize();
};
}, a([ je("G_FAtom_GetDesignSize") ], e);
}(Kr), Na = function(t) {
function e() {
return null !== t && t.apply(this, arguments) || this;
}
return o(e, t), e.prototype.defineFunction = function() {
var t = this;
return function() {
return t.atomWorld.universe.render.getSafeAreaRect();
};
}, a([ je("G_FAtom_GetSafeArea") ], e);
}(Kr), Pa = function(t) {
function e() {
return null !== t && t.apply(this, arguments) || this;
}
return o(e, t), e.prototype.defineFunction = function() {
var t = this;
return function(e) {
return t.atomWorld.universe.render.captureGameImage(e);
};
}, a([ je("G_FAtom_CaptureGameImage") ], e);
}(Kr), Ea = function(t) {
function e() {
return null !== t && t.apply(this, arguments) || this;
}
return o(e, t), e.prototype.defineFunction = function() {
var t = this;
return function() {
return t.atomWorld.universe.host.getUniverseOffset();
};
}, a([ je("G_FAtom_GetUniverseOffset") ], e);
}(Kr), La = function(t) {
function e() {
return null !== t && t.apply(this, arguments) || this;
}
return o(e, t), e.prototype.defineFunction = function() {
var t = this;
return function() {
return t.atomWorld.universe.host.getDeviceInfo();
};
}, a([ je("G_FAtom_GetDeviceInfo") ], e);
}(na), Wa = function(t) {
function e() {
return null !== t && t.apply(this, arguments) || this;
}
return o(e, t), e.prototype.defineFunction = function() {
var t = this;
return function() {
return t.atomWorld.universe.host.getTotalRAM();
};
}, a([ je("G_FAtom_GetTotalRAM") ], e);
}(na), Va = function(t) {
function e() {
return null !== t && t.apply(this, arguments) || this;
}
return o(e, t), e.prototype.defineFunction = function() {
var t = this;
return function() {
return t.atomWorld.universe.host.getAvailableRAM();
};
}, a([ je("G_FAtom_GetAvailableRAM") ], e);
}(na), Oa = function(t) {
function e() {
return null !== t && t.apply(this, arguments) || this;
}
return o(e, t), e.prototype.defineFunction = function() {
var t = this;
return function() {
return t.atomWorld.universe.host.getCPUCores();
};
}, a([ je("G_FAtom_GetCPUCores") ], e);
}(na), ka = function(t) {
function e() {
return null !== t && t.apply(this, arguments) || this;
}
return o(e, t), e.prototype.defineFunction = function() {
var t = this;
return function() {
return t.atomWorld.universe.host.getCPUMaxFreq();
};
}, a([ je("G_FAtom_GetCPUMaxFreq") ], e);
}(na), Ga = function(t) {
function e() {
return null !== t && t.apply(this, arguments) || this;
}
return o(e, t), e.prototype.defineFunction = function() {
var t = this;
return function() {
return t.atomWorld.universe.host.isLowEndDevice();
};
}, a([ je("G_FAtom_IsLowEndDevice") ], e);
}(na), za = function(t) {
function e() {
return null !== t && t.apply(this, arguments) || this;
}
return o(e, t), a([ qe(ro), l("design:type", Object) ], e.prototype, "rootDomain", void 0), 
a([ je(wo) ], e);
}(is), ja = function(e) {
function n() {
return null !== e && e.apply(this, arguments) || this;
}
return o(n, e), a([ Je, qe(ao), l("design:type", Object) ], n.prototype, "update", void 0), 
a([ Qe(t.RouteMode.Direct), qe(wo), l("design:type", Object) ], n.prototype, "signal", void 0), 
a([ je(So) ], n);
}(as), qa = function(e) {
function n() {
return null !== e && e.apply(this, arguments) || this;
}
return o(n, e), n.prototype.defineRuntimeData = function() {
return {
lastSaveTime: 0,
interval: 1
};
}, n.prototype.onExecute = function(e, o) {
var n = this.atomWorld.updateSignal.data.worldTime;
n - o.runtime.lastSaveTime >= o.runtime.interval ? o.runtime.lastSaveTime = n : this.router.receiveAction = t.ReceiveAction.Discard;
}, a([ Xe, Ye, qe(So), l("design:type", Object) ], n.prototype, "router", void 0), 
a([ je("G_FAtom_AutoSaveReceive") ], n);
}(Zr), Ha = function(t) {
function e() {
return null !== t && t.apply(this, arguments) || this;
}
return o(e, t), e.prototype.defineRuntimeData = function() {
return {};
}, e.prototype.onExecute = function() {
this.saveProgress();
}, a([ Ye, qe(wo), l("design:type", Object) ], e.prototype, "signal", void 0), a([ qe(Co), l("design:type", Object) ], e.prototype, "saveProgress", void 0), 
a([ je("G_FAtom_AutoSaveLogic") ], e);
}(Zr), Ua = function(t) {
function e() {
return null !== t && t.apply(this, arguments) || this;
}
return o(e, t), e.prototype.defineInputData = function() {
return {};
}, e.prototype.receive = function(e, o) {
t.prototype.receive.call(this, e, o);
var n = this.atomWorld.getAtomIns(so);
this.atomWorld.universe.host.reportGameRuntime({
g0_original_info: {
type: "exit",
worldId: n.worldState.worldId[o]
}
}), n.destroy(this.data.childWorldEid);
}, e[ge] = !0, a([ je("G_FAtom_ExitRequest") ], e);
}(us), Ya = function(t) {
function e() {
return null !== t && t.apply(this, arguments) || this;
}
return o(e, t), e.prototype.defineFunction = function() {
var t = this.atomWorld;
return function(e, o) {
if (e > o) return e;
var n = 16807 * (Math.abs(t.randomSeed) % 2147483646 || 1) % 2147483647;
return t.randomSeed = n, e + (n - 1) / 2147483646 * (o - e);
};
}, a([ je("G_FAtom_MathRandom") ], e);
}(Kr), Xa = function(t) {
function e() {
return null !== t && t.apply(this, arguments) || this;
}
return o(e, t), e.prototype.defineFunction = function() {
var t = this;
return function(e, o) {
return Math.floor(t.random(e, o + 1));
};
}, a([ qe("G_FAtom_MathRandom"), l("design:type", Object) ], e.prototype, "random", void 0), 
a([ je("G_FAtom_MathRandomInt") ], e);
}(Kr), Ja = function(t) {
function e() {
return null !== t && t.apply(this, arguments) || this;
}
return o(e, t), e.prototype.defineFunction = function() {
return function(t) {
return Math.abs(t);
};
}, a([ je("G_FAtom_MathAbs") ], e);
}(Kr), Qa = function(t) {
function e() {
return null !== t && t.apply(this, arguments) || this;
}
return o(e, t), e.prototype.defineFunction = function() {
return function(t) {
return Math.sign(t);
};
}, a([ je("G_FAtom_MathSign") ], e);
}(Kr), Ka = function(t) {
function e() {
return null !== t && t.apply(this, arguments) || this;
}
return o(e, t), e.prototype.defineFunction = function() {
return function(t) {
return Math.ceil(t);
};
}, a([ je("G_FAtom_MathCeil") ], e);
}(Kr), Za = function(t) {
function e() {
return null !== t && t.apply(this, arguments) || this;
}
return o(e, t), e.prototype.defineFunction = function() {
return function(t) {
return Math.floor(t);
};
}, a([ je("G_FAtom_MathFloor") ], e);
}(Kr), $a = function(t) {
function e() {
return null !== t && t.apply(this, arguments) || this;
}
return o(e, t), e.prototype.defineFunction = function() {
return function(t) {
return Math.round(t);
};
}, a([ je("G_FAtom_MathRound") ], e);
}(Kr), tl = function(t) {
function e() {
return null !== t && t.apply(this, arguments) || this;
}
return o(e, t), e.prototype.defineFunction = function() {
return function(t) {
return Math.trunc(t);
};
}, a([ je("G_FAtom_MathTrunc") ], e);
}(Kr), el = function(t) {
function e() {
return null !== t && t.apply(this, arguments) || this;
}
return o(e, t), e.prototype.defineFunction = function() {
return function(t, e) {
return Math.pow(t, e);
};
}, a([ je("G_FAtom_MathPow") ], e);
}(Kr), ol = function(t) {
function e() {
return null !== t && t.apply(this, arguments) || this;
}
return o(e, t), e.prototype.defineFunction = function() {
return function(t) {
return Math.sqrt(t);
};
}, a([ je("G_FAtom_MathSqrt") ], e);
}(Kr), nl = function(t) {
function e() {
return null !== t && t.apply(this, arguments) || this;
}
return o(e, t), e.prototype.defineFunction = function() {
return function(t) {
return Math.cbrt(t);
};
}, a([ je("G_FAtom_MathCbrt") ], e);
}(Kr), il = function(t) {
function e() {
return null !== t && t.apply(this, arguments) || this;
}
return o(e, t), e.prototype.defineFunction = function() {
return function() {
for (var t = [], e = 0; e < arguments.length; e++) t[e] = arguments[e];
return Math.hypot.apply(Math, p([], d(t), !1));
};
}, a([ je("G_FAtom_MathHypot") ], e);
}(Kr), rl = function(t) {
function e() {
return null !== t && t.apply(this, arguments) || this;
}
return o(e, t), e.prototype.defineFunction = function() {
return function(t) {
return Math.exp(t);
};
}, a([ je("G_FAtom_MathExp") ], e);
}(Kr), sl = function(t) {
function e() {
return null !== t && t.apply(this, arguments) || this;
}
return o(e, t), e.prototype.defineFunction = function() {
return function(t) {
return Math.expm1(t);
};
}, a([ je("G_FAtom_MathExpm1") ], e);
}(Kr), al = function(t) {
function e() {
return null !== t && t.apply(this, arguments) || this;
}
return o(e, t), e.prototype.defineFunction = function() {
return function(t) {
return Math.log(t);
};
}, a([ je("G_FAtom_MathLog") ], e);
}(Kr), ll = function(t) {
function e() {
return null !== t && t.apply(this, arguments) || this;
}
return o(e, t), e.prototype.defineFunction = function() {
return function(t) {
return Math.log10(t);
};
}, a([ je("G_FAtom_MathLog10") ], e);
}(Kr), cl = function(t) {
function e() {
return null !== t && t.apply(this, arguments) || this;
}
return o(e, t), e.prototype.defineFunction = function() {
return function(t) {
return Math.log2(t);
};
}, a([ je("G_FAtom_MathLog2") ], e);
}(Kr), ul = function(t) {
function e() {
return null !== t && t.apply(this, arguments) || this;
}
return o(e, t), e.prototype.defineFunction = function() {
return function(t) {
return Math.log1p(t);
};
}, a([ je("G_FAtom_MathLog1p") ], e);
}(Kr), hl = function(t) {
function e() {
return null !== t && t.apply(this, arguments) || this;
}
return o(e, t), e.prototype.defineFunction = function() {
return function(t) {
return Math.sin(t);
};
}, a([ je("G_FAtom_MathSin") ], e);
}(Kr), dl = function(t) {
function e() {
return null !== t && t.apply(this, arguments) || this;
}
return o(e, t), e.prototype.defineFunction = function() {
return function(t) {
return Math.cos(t);
};
}, a([ je("G_FAtom_MathCos") ], e);
}(Kr), pl = function(t) {
function e() {
return null !== t && t.apply(this, arguments) || this;
}
return o(e, t), e.prototype.defineFunction = function() {
return function(t) {
return Math.tan(t);
};
}, a([ je("G_FAtom_MathTan") ], e);
}(Kr), ml = function(t) {
function e() {
return null !== t && t.apply(this, arguments) || this;
}
return o(e, t), e.prototype.defineFunction = function() {
return function(t) {
return Math.asin(t);
};
}, a([ je("G_FAtom_MathAsin") ], e);
}(Kr), _l = function(t) {
function e() {
return null !== t && t.apply(this, arguments) || this;
}
return o(e, t), e.prototype.defineFunction = function() {
return function(t) {
return Math.acos(t);
};
}, a([ je("G_FAtom_MathAcos") ], e);
}(Kr), fl = function(t) {
function e() {
return null !== t && t.apply(this, arguments) || this;
}
return o(e, t), e.prototype.defineFunction = function() {
return function(t) {
return Math.atan(t);
};
}, a([ je("G_FAtom_MathAtan") ], e);
}(Kr), yl = function(t) {
function e() {
return null !== t && t.apply(this, arguments) || this;
}
return o(e, t), e.prototype.defineFunction = function() {
return function(t, e) {
return Math.atan2(t, e);
};
}, a([ je("G_FAtom_MathAtan2") ], e);
}(Kr), vl = function(t) {
function e() {
return null !== t && t.apply(this, arguments) || this;
}
return o(e, t), e.prototype.defineFunction = function() {
return function(t) {
return Math.sinh(t);
};
}, a([ je("G_FAtom_MathSinh") ], e);
}(Kr), gl = function(t) {
function e() {
return null !== t && t.apply(this, arguments) || this;
}
return o(e, t), e.prototype.defineFunction = function() {
return function(t) {
return Math.cosh(t);
};
}, a([ je("G_FAtom_MathCosh") ], e);
}(Kr), Al = function(t) {
function e() {
return null !== t && t.apply(this, arguments) || this;
}
return o(e, t), e.prototype.defineFunction = function() {
return function(t) {
return Math.tanh(t);
};
}, a([ je("G_FAtom_MathTanh") ], e);
}(Kr), xl = function(t) {
function e() {
return null !== t && t.apply(this, arguments) || this;
}
return o(e, t), e.prototype.defineFunction = function() {
return function(t) {
return Math.asinh(t);
};
}, a([ je("G_FAtom_MathAsinh") ], e);
}(Kr), bl = function(t) {
function e() {
return null !== t && t.apply(this, arguments) || this;
}
return o(e, t), e.prototype.defineFunction = function() {
return function(t) {
return Math.acosh(t);
};
}, a([ je("G_FAtom_MathAcosh") ], e);
}(Kr), Cl = function(t) {
function e() {
return null !== t && t.apply(this, arguments) || this;
}
return o(e, t), e.prototype.defineFunction = function() {
return function(t) {
return Math.atanh(t);
};
}, a([ je("G_FAtom_MathAtanh") ], e);
}(Kr), wl = function(t) {
function e() {
return null !== t && t.apply(this, arguments) || this;
}
return o(e, t), e.prototype.defineFunction = function() {
return function() {
for (var t = [], e = 0; e < arguments.length; e++) t[e] = arguments[e];
return Math.max.apply(Math, p([], d(t), !1));
};
}, a([ je("G_FAtom_MathMax") ], e);
}(Kr), Sl = function(t) {
function e() {
return null !== t && t.apply(this, arguments) || this;
}
return o(e, t), e.prototype.defineFunction = function() {
return function() {
for (var t = [], e = 0; e < arguments.length; e++) t[e] = arguments[e];
return Math.min.apply(Math, p([], d(t), !1));
};
}, a([ je("G_FAtom_MathMin") ], e);
}(Kr), Rl = function(t) {
function e() {
return null !== t && t.apply(this, arguments) || this;
}
return o(e, t), e.prototype.defineFunction = function() {
return function(t) {
return Math.clz32(t);
};
}, a([ je("G_FAtom_MathClz32") ], e);
}(Kr), Bl = function(t) {
function e() {
return null !== t && t.apply(this, arguments) || this;
}
return o(e, t), e.prototype.defineFunction = function() {
return function(t, e) {
return Math.imul(t, e);
};
}, a([ je("G_FAtom_MathImul") ], e);
}(Kr), Tl = function(t) {
function e() {
return null !== t && t.apply(this, arguments) || this;
}
return o(e, t), e.prototype.defineFunction = function() {
return function(t) {
return Math.fround(t);
};
}, a([ je("G_FAtom_MathFround") ], e);
}(Kr), Fl = function(t) {
function e() {
return null !== t && t.apply(this, arguments) || this;
}
return o(e, t), e.prototype.defineFunction = function() {
var t = this;
return function(e, o, n) {
return t.max(o, t.min(n, e));
};
}, a([ qe("G_FAtom_MathMin"), l("design:type", Object) ], e.prototype, "min", void 0), 
a([ qe("G_FAtom_MathMax"), l("design:type", Object) ], e.prototype, "max", void 0), 
a([ je("G_FAtom_MathClamp") ], e);
}(Kr), Ml = function(t) {
function e() {
return null !== t && t.apply(this, arguments) || this;
}
return o(e, t), e.prototype.defineFunction = function() {
return function(t, e, o) {
return t + (e - t) * o;
};
}, a([ je("G_FAtom_MathLerp") ], e);
}(Kr), Il = function(t) {
function e() {
return null !== t && t.apply(this, arguments) || this;
}
return o(e, t), e.prototype.defineFunction = function() {
var t = this;
return function(e, o, n, i) {
return t.hypot(n - e, i - o);
};
}, a([ qe("G_FAtom_MathHypot"), l("design:type", Object) ], e.prototype, "hypot", void 0), 
a([ je("G_FAtom_MathDistance") ], e);
}(Kr), Dl = function(t) {
function e() {
return null !== t && t.apply(this, arguments) || this;
}
return o(e, t), e.prototype.defineFunction = function() {
return function(t) {
return t * (Math.PI / 180);
};
}, a([ je("G_FAtom_MathDegToRad") ], e);
}(Kr), Nl = function(t) {
function e() {
return null !== t && t.apply(this, arguments) || this;
}
return o(e, t), e.prototype.defineFunction = function() {
return function(t) {
return t * (180 / Math.PI);
};
}, a([ je("G_FAtom_MathRadToDeg") ], e);
}(Kr), Pl = function(t) {
function e() {
return null !== t && t.apply(this, arguments) || this;
}
return o(e, t), e.prototype.defineFunction = function() {
return function(t, e, o) {
return t === e ? 0 : (o - t) / (e - t);
};
}, a([ je("G_FAtom_MathInverseLerp") ], e);
}(Kr), El = function(t) {
function e() {
return null !== t && t.apply(this, arguments) || this;
}
return o(e, t), e.prototype.defineFunction = function() {
var t = this;
return function(e, o, n) {
var i = t.clamp((n - e) / (o - e), 0, 1);
return i * i * (3 - 2 * i);
};
}, a([ qe("G_FAtom_MathClamp"), l("design:type", Object) ], e.prototype, "clamp", void 0), 
a([ je("G_FAtom_MathSmoothstep") ], e);
}(Kr), Ll = function(t) {
function e() {
return null !== t && t.apply(this, arguments) || this;
}
return o(e, t), e.prototype.defineFunction = function() {
var t = this;
return function(e, o, n) {
return t.abs(o - e) <= n ? o : e + Math.sign(o - e) * n;
};
}, a([ qe("G_FAtom_MathAbs"), l("design:type", Object) ], e.prototype, "abs", void 0), 
a([ je("G_FAtom_MathMoveTowards") ], e);
}(Kr), Wl = function(t) {
function e() {
return null !== t && t.apply(this, arguments) || this;
}
return o(e, t), e.prototype.defineFunction = function() {
return function(t, e) {
return 0 === e ? 0 : t - Math.floor(t / e) * e;
};
}, a([ je("G_FAtom_MathRepeat") ], e);
}(Kr), Vl = function(t) {
function e() {
return null !== t && t.apply(this, arguments) || this;
}
return o(e, t), e.prototype.defineFunction = function() {
var t = this;
return function(e, o) {
if (0 === o) return 0;
var n = t.repeat(e, 2 * o);
return o - t.abs(n - o);
};
}, a([ qe("G_FAtom_MathRepeat"), l("design:type", Object) ], e.prototype, "repeat", void 0), 
a([ qe("G_FAtom_MathAbs"), l("design:type", Object) ], e.prototype, "abs", void 0), 
a([ je("G_FAtom_MathPingPong") ], e);
}(Kr), Ol = function(t) {
function e() {
return null !== t && t.apply(this, arguments) || this;
}
return o(e, t), e.prototype.defineFunction = function() {
var t = this;
return function(e, o) {
return t.abs(e - o) < t.max(1e-6 * t.max(t.abs(e), t.abs(o)), 1e-6);
};
}, a([ qe("G_FAtom_MathAbs"), l("design:type", Object) ], e.prototype, "abs", void 0), 
a([ qe("G_FAtom_MathMax"), l("design:type", Object) ], e.prototype, "max", void 0), 
a([ je("G_FAtom_MathApproximately") ], e);
}(Kr), kl = function(t) {
function e() {
return null !== t && t.apply(this, arguments) || this;
}
return o(e, t), e.prototype.defineFunction = function() {
var t = this;
return function(e, o, n, i, r) {
var s = t.inverseLerp(o, n, e);
return t.lerp(i, r, s);
};
}, a([ qe("G_FAtom_MathInverseLerp"), l("design:type", Object) ], e.prototype, "inverseLerp", void 0), 
a([ qe("G_FAtom_MathLerp"), l("design:type", Object) ], e.prototype, "lerp", void 0), 
a([ je("G_FAtom_MathRemap") ], e);
}(Kr), Gl = function(t) {
function e() {
return null !== t && t.apply(this, arguments) || this;
}
return o(e, t), e.prototype.defineFunction = function() {
return function(t, e) {
return 0 === e ? t : Math.round(t / e) * e;
};
}, a([ je("G_FAtom_MathSnap") ], e);
}(Kr), zl = function(t) {
function e() {
return null !== t && t.apply(this, arguments) || this;
}
return o(e, t), e.prototype.defineFunction = function() {
var t = this;
return function(e) {
return t.repeat(e + 180, 360) - 180;
};
}, a([ qe("G_FAtom_MathRepeat"), l("design:type", Object) ], e.prototype, "repeat", void 0), 
a([ je("G_FAtom_MathWrapAngle") ], e);
}(Kr), jl = function(t) {
function e() {
return null !== t && t.apply(this, arguments) || this;
}
return o(e, t), e.prototype.defineFunction = function() {
var t = this;
return function(e, o, n, i, r, s) {
return t.hypot(i - e, r - o, s - n);
};
}, a([ qe("G_FAtom_MathHypot"), l("design:type", Object) ], e.prototype, "hypot", void 0), 
a([ je("G_FAtom_MathDistance3D") ], e);
}(Kr), ql = function(t) {
function e() {
return null !== t && t.apply(this, arguments) || this;
}
return o(e, t), e.prototype.defineFunction = function() {
var t = this;
return function(e, o) {
var n = t.repeat(o - e, 360);
return n > 180 && (n -= 360), n;
};
}, a([ qe("G_FAtom_MathRepeat"), l("design:type", Object) ], e.prototype, "repeat", void 0), 
a([ je("G_FAtom_MathDeltaAngle") ], e);
}(Kr), Hl = function(t) {
function e() {
return null !== t && t.apply(this, arguments) || this;
}
return o(e, t), e.prototype.defineFunction = function() {
var t = this;
return function(e, o, n) {
var i = t.deltaAngle(e, o);
return t.moveTowards(e, e + i, n);
};
}, a([ qe("G_FAtom_MathDeltaAngle"), l("design:type", Object) ], e.prototype, "deltaAngle", void 0), 
a([ qe("G_FAtom_MathMoveTowards"), l("design:type", Object) ], e.prototype, "moveTowards", void 0), 
a([ je("G_FAtom_MathMoveTowardsAngle") ], e);
}(Kr), Ul = function(t) {
function e() {
return null !== t && t.apply(this, arguments) || this;
}
return o(e, t), e.prototype.defineFunction = function() {
var t = this;
return function(e, o) {
if (void 0 === o && (o = 1), e > 0 && o > 0) {
var n = 1 / e;
t.atomWorld.frameTimeIncrement = n, t.atomWorld.performanceCutoff = o, t.atomWorld.minimumUpdateInterval = o * n;
}
};
}, a([ je("G_FAtom_SetFrameRate") ], e);
}(Kr), Yl = function(t) {
function e() {
return null !== t && t.apply(this, arguments) || this;
}
return o(e, t), e.prototype.defineFunction = function() {
var t = this;
return function(e) {
e > 0 && (t.atomWorld.renderTimeScale = e, t.atomWorld.universe.applyWorldRenderTimeScale(t.atomWorld.config.worldId));
};
}, a([ je("G_FAtom_SetAnimationSpeed") ], e);
}(Kr), Xl = function(t) {
function e() {
return null !== t && t.apply(this, arguments) || this;
}
return o(e, t), e.prototype.defineFunction = function() {
return function(t) {
for (var e = 5381, o = 0; o < t.length; o++) e = (e << 5) + e + t.charCodeAt(o);
return e >>> 0;
};
}, a([ je("G_FAtom_StringHash") ], e);
}(Kr), Jl = function(t) {
function e() {
return null !== t && t.apply(this, arguments) || this;
}
return o(e, t), e.prototype.defineFunction = function() {
var t = this;
return function() {
return t.atomWorld.universe.host.getLaunchParams();
};
}, a([ je("G_FAtom_GetLaunchParams") ], e);
}(Kr), Ql = function(t) {
function e() {
return null !== t && t.apply(this, arguments) || this;
}
return o(e, t), e.prototype.defineFunction = function() {
var t = this;
return function() {
var e = new Date(t.realTime()), o = e.getFullYear(), n = String(e.getMonth() + 1).padStart(2, "0"), i = String(e.getDate()).padStart(2, "0");
return "".concat(o, "-").concat(n, "-").concat(i);
};
}, a([ qe(bo), l("design:type", Object) ], e.prototype, "realTime", void 0), a([ je("G_FAtom_GetCurrentDate") ], e);
}(Kr), Kl = function(t) {
function e() {
return null !== t && t.apply(this, arguments) || this;
}
return o(e, t), e.prototype.defineFunction = function() {
var t = this;
return function() {
return 1e3 * (t.update.worldStartTime + t.update.worldTime);
};
}, a([ qe("G_FAtom_Update"), l("design:type", Object) ], e.prototype, "update", void 0), 
a([ je("G_FAtom_DateNow") ], e);
}(Kr), Zl = function(t) {
function e() {
return null !== t && t.apply(this, arguments) || this;
}
return o(e, t), e.prototype.defineFunction = function() {
return We;
}, a([ je("G_FAtom_PerformanceNow") ], e);
}(Kr), $l = function(t) {
function e() {
return null !== t && t.apply(this, arguments) || this;
}
return o(e, t), e.prototype.defineFunction = function() {
var t = this;
return function(e) {
var o, n, i, r, s, a, l, c = 1e3 * t.update.worldStartTime + (We() - t.update.worldStartPerformance);
if (!e) return c;
var u = new Date(c);
return new Date(null !== (o = e.year) && void 0 !== o ? o : u.getFullYear(), (null !== (n = e.month) && void 0 !== n ? n : u.getMonth() + 1) - 1, null !== (i = e.day) && void 0 !== i ? i : u.getDate(), null !== (r = e.hour) && void 0 !== r ? r : u.getHours(), null !== (s = e.minute) && void 0 !== s ? s : u.getMinutes(), null !== (a = e.second) && void 0 !== a ? a : u.getSeconds(), null !== (l = e.millisecond) && void 0 !== l ? l : u.getMilliseconds()).getTime();
};
}, a([ qe("G_FAtom_Update"), l("design:type", Object) ], e.prototype, "update", void 0), 
a([ je(bo) ], e);
}(Kr);
t.TweenStepType = void 0, (Zs = t.TweenStepType || (t.TweenStepType = {}))[Zs.To = 0] = "To", 
Zs[Zs.By = 1] = "By", Zs[Zs.Delay = 2] = "Delay", Zs[Zs.Router = 3] = "Router", 
Zs[Zs.Parallel = 4] = "Parallel", Zs[Zs.Repeat = 5] = "Repeat", Zs[Zs.Destroy = 6] = "Destroy", 
t.TweenEasing = void 0, ($s = t.TweenEasing || (t.TweenEasing = {}))[$s.Linear = 0] = "Linear", 
$s[$s.QuadIn = 1] = "QuadIn", $s[$s.QuadOut = 2] = "QuadOut", $s[$s.QuadInOut = 3] = "QuadInOut", 
$s[$s.CubicIn = 4] = "CubicIn", $s[$s.CubicOut = 5] = "CubicOut", $s[$s.CubicInOut = 6] = "CubicInOut", 
$s[$s.QuartIn = 7] = "QuartIn", $s[$s.QuartOut = 8] = "QuartOut", $s[$s.QuartInOut = 9] = "QuartInOut", 
$s[$s.QuintIn = 10] = "QuintIn", $s[$s.QuintOut = 11] = "QuintOut", $s[$s.QuintInOut = 12] = "QuintInOut", 
$s[$s.SineIn = 13] = "SineIn", $s[$s.SineOut = 14] = "SineOut", $s[$s.SineInOut = 15] = "SineInOut", 
$s[$s.ExpoIn = 16] = "ExpoIn", $s[$s.ExpoOut = 17] = "ExpoOut", $s[$s.ExpoInOut = 18] = "ExpoInOut", 
$s[$s.CircIn = 19] = "CircIn", $s[$s.CircOut = 20] = "CircOut", $s[$s.CircInOut = 21] = "CircInOut", 
$s[$s.ElasticIn = 22] = "ElasticIn", $s[$s.ElasticOut = 23] = "ElasticOut", $s[$s.ElasticInOut = 24] = "ElasticInOut", 
$s[$s.BackIn = 25] = "BackIn", $s[$s.BackOut = 26] = "BackOut", $s[$s.BackInOut = 27] = "BackInOut", 
$s[$s.BounceIn = 28] = "BounceIn", $s[$s.BounceOut = 29] = "BounceOut", $s[$s.BounceInOut = 30] = "BounceInOut";
var tc = ((Ks = {})[t.TweenEasing.Linear] = function(t) {
return t;
}, Ks[t.TweenEasing.QuadIn] = function(t) {
return t * t;
}, Ks[t.TweenEasing.QuadOut] = function(t) {
return t * (2 - t);
}, Ks[t.TweenEasing.QuadInOut] = function(t) {
return t < .5 ? 2 * t * t : (4 - 2 * t) * t - 1;
}, Ks[t.TweenEasing.CubicIn] = function(t) {
return t * t * t;
}, Ks[t.TweenEasing.CubicOut] = function(t) {
return --t * t * t + 1;
}, Ks[t.TweenEasing.CubicInOut] = function(t) {
return t < .5 ? 4 * t * t * t : (t - 1) * (2 * t - 2) * (2 * t - 2) + 1;
}, Ks[t.TweenEasing.QuartIn] = function(t) {
return t * t * t * t;
}, Ks[t.TweenEasing.QuartOut] = function(t) {
return 1 - --t * t * t * t;
}, Ks[t.TweenEasing.QuartInOut] = function(t) {
return t < .5 ? 8 * t * t * t * t : 1 - 8 * --t * t * t * t;
}, Ks[t.TweenEasing.QuintIn] = function(t) {
return t * t * t * t * t;
}, Ks[t.TweenEasing.QuintOut] = function(t) {
return 1 + --t * t * t * t * t;
}, Ks[t.TweenEasing.QuintInOut] = function(t) {
return t < .5 ? 16 * t * t * t * t * t : 1 + 16 * --t * t * t * t * t;
}, Ks[t.TweenEasing.SineIn] = function(t) {
return 1 - Math.cos(t * Math.PI / 2);
}, Ks[t.TweenEasing.SineOut] = function(t) {
return Math.sin(t * Math.PI / 2);
}, Ks[t.TweenEasing.SineInOut] = function(t) {
return .5 * (1 - Math.cos(Math.PI * t));
}, Ks[t.TweenEasing.ExpoIn] = function(t) {
return 0 === t ? 0 : Math.pow(2, 10 * (t - 1));
}, Ks[t.TweenEasing.ExpoOut] = function(t) {
return 1 === t ? 1 : 1 - Math.pow(2, -10 * t);
}, Ks[t.TweenEasing.ExpoInOut] = function(t) {
return 0 === t || 1 === t ? t : (t *= 2) < 1 ? .5 * Math.pow(2, 10 * (t - 1)) : .5 * (2 - Math.pow(2, -10 * (t - 1)));
}, Ks[t.TweenEasing.CircIn] = function(t) {
return 1 - Math.sqrt(1 - t * t);
}, Ks[t.TweenEasing.CircOut] = function(t) {
return Math.sqrt(1 - --t * t);
}, Ks[t.TweenEasing.CircInOut] = function(t) {
return (t *= 2) < 1 ? -.5 * (Math.sqrt(1 - t * t) - 1) : .5 * (Math.sqrt(1 - (t -= 2) * t) + 1);
}, Ks[t.TweenEasing.ElasticIn] = function(t) {
return 0 === t || 1 === t ? t : -Math.pow(2, 10 * (t - 1)) * Math.sin(5 * (t - 1.1) * Math.PI);
}, Ks[t.TweenEasing.ElasticOut] = function(t) {
return 0 === t || 1 === t ? t : Math.pow(2, -10 * t) * Math.sin(5 * (t - .1) * Math.PI) + 1;
}, Ks[t.TweenEasing.ElasticInOut] = function(t) {
return 0 === t || 1 === t ? t : (t *= 2) < 1 ? -.5 * Math.pow(2, 10 * (t - 1)) * Math.sin(5 * (t - 1.1) * Math.PI) : .5 * Math.pow(2, -10 * (t - 1)) * Math.sin(5 * (t - 1.1) * Math.PI) + 1;
}, Ks[t.TweenEasing.BackIn] = function(t) {
return t * t * (2.70158 * t - 1.70158);
}, Ks[t.TweenEasing.BackOut] = function(t) {
return --t * t * (2.70158 * t + 1.70158) + 1;
}, Ks[t.TweenEasing.BackInOut] = function(t) {
var e = 2.5949095;
return (t *= 2) < 1 ? t * t * ((e + 1) * t - e) * .5 : .5 * ((t -= 2) * t * ((e + 1) * t + e) + 2);
}, Ks[t.TweenEasing.BounceIn] = function(e) {
return 1 - tc[t.TweenEasing.BounceOut](1 - e);
}, Ks[t.TweenEasing.BounceOut] = function(t) {
return t < 1 / 2.75 ? 7.5625 * t * t : t < 2 / 2.75 ? 7.5625 * (t -= 1.5 / 2.75) * t + .75 : t < 2.5 / 2.75 ? 7.5625 * (t -= 2.25 / 2.75) * t + .9375 : 7.5625 * (t -= 2.625 / 2.75) * t + .984375;
}, Ks[t.TweenEasing.BounceInOut] = function(e) {
return e < .5 ? .5 * tc[t.TweenEasing.BounceIn](2 * e) : .5 * tc[t.TweenEasing.BounceOut](2 * e - 1) + .5;
}, Ks), ec = function(t) {
function e() {
return null !== t && t.apply(this, arguments) || this;
}
return o(e, t), e.prototype.defineFunction = function() {
var t = this;
return function(e, o, n) {
if (null != e && Array.isArray(o)) {
var i = t.runner.runtime, r = i.tasksMap[e];
r || (r = [], i.tasksMap[e] = r), r.push({
eid: e,
steps: o,
tag: n,
currentStepIndex: 0,
elapsedTime: 0,
isFinished: !1,
stepData: void 0
});
}
};
}, a([ qe(Bo), l("design:type", Object) ], e.prototype, "runner", void 0), a([ je("G_FAtom_Tween") ], e);
}(Kr), oc = function(t) {
function e() {
return null !== t && t.apply(this, arguments) || this;
}
return o(e, t), e.prototype.defineFunction = function() {
var t = this;
return function(e, o) {
if (void 0 !== e) {
var n = t.runner.runtime;
if (null !== e) {
if (!(s = n.tasksMap[e])) return;
if (o) {
for (var i = s.length - 1; i >= 0; i--) s[i].tag === o && s.splice(i, 1);
0 === s.length && delete n.tasksMap[e];
} else delete n.tasksMap[e];
} else if (o) for (var r in n.tasksMap) {
var s;
for (i = (s = n.tasksMap[r]).length - 1; i >= 0; i--) s[i].tag === o && s.splice(i, 1);
0 === s.length && delete n.tasksMap[r];
}
}
};
}, a([ qe(Bo), l("design:type", Object) ], e.prototype, "runner", void 0), a([ je(qo) ], e);
}(Kr), nc = function(t) {
function e() {
return null !== t && t.apply(this, arguments) || this;
}
return o(e, t), e.prototype.defineInputData = function() {
return {
progress: 0,
isDone: !1,
error: ""
};
}, a([ qe("G_FAtom_RootDomain"), l("design:type", Object) ], e.prototype, "root", void 0), 
a([ je(Qo) ], e);
}(Is), ic = function(t) {
function e() {
return null !== t && t.apply(this, arguments) || this;
}
return o(e, t), e.prototype.defineFunction = function() {
var t = this, e = {}, o = function(o, n, i, r) {
if (!t.atomWorld.disposed) {
var s = e[o];
if (s) {
var a = t.atomWorld.getAtomIns(Qo), l = a.data;
l.progress = n, l.isDone = i, l.error = r, a.emitByRouter(s), (i || r) && delete e[o];
}
}
};
return function(n, i) {
var r = n[ye], s = t.atomWorld.getAtomIns(r).atomState;
if (null == s ? void 0 : s.silent) {
if (i) {
var a = i[ye];
e[r] = a;
}
!function(e, n) {
c(t, void 0, void 0, function() {
var t, i;
return u(this, function(r) {
switch (r.label) {
case 0:
if (!this.atomWorld) return [ 2 ];
o(e, 0, !1, ""), r.label = 1;

case 1:
return r.trys.push([ 1, 3, , 4 ]), [ 4, this.atomWorld.getAtomIns(e).executeLoadDef(n, function(t) {
o(e, t, !1, "");
}) ];

case 2:
return r.sent(), this.atomWorld ? (o(e, 1, !0, ""), [ 3, 4 ]) : [ 2 ];

case 3:
return t = r.sent(), i = t instanceof Error ? t.message : String(t), i = "[AtomEngine] SilentLoad Failed: loadAtomName=".concat(e, " paths=").concat(JSON.stringify(n.paths), " directories=").concat(JSON.stringify(n.directories), " ---\x3e ").concat(i), 
this.atomWorld ? (o(e, 0, !1, i), [ 3, 4 ]) : [ 2 ];

case 4:
return [ 2 ];
}
});
});
}(r, s);
}
};
}, a([ qe(Qo), l("design:type", Object) ], e.prototype, "input", void 0), a([ je("G_FAtom_SilentLoad") ], e);
}(Kr), rc = function(t) {
function e() {
return null !== t && t.apply(this, arguments) || this;
}
return o(e, t), e.prototype.defineInputData = function() {
return {
url: "",
jsonData: "",
error: ""
};
}, a([ qe("G_FAtom_RootDomain"), l("design:type", Object) ], e.prototype, "root", void 0), 
a([ je(Ko) ], e);
}(Is), sc = function(e) {
function n() {
return null !== e && e.apply(this, arguments) || this;
}
return o(n, e), n.prototype.defineFunction = function() {
var e = this;
return function(o, n) {
var i = n[ye];
c(e, void 0, void 0, function() {
var e, n, r, s, a, l, c, h, d;
return u(this, function(u) {
switch (u.label) {
case 0:
e = "", n = "", u.label = 1;

case 1:
return u.trys.push([ 1, 3, , 4 ]), r = kn(o), s = r.featureName, a = r.assetPath, 
[ 4, this.atomWorld.universe.asset.loadAsset(s, a, t.LoaderAssetType.Json) ];

case 2:
return l = u.sent(), !this.atomWorld || this.atomWorld.disposed ? [ 2 ] : (n = l.json, 
[ 3, 4 ]);

case 3:
return c = u.sent(), e = c instanceof Error ? c.message : String(c), [ 3, 4 ];

case 4:
return !this.atomWorld || this.atomWorld.disposed || (h = this.atomWorld.getAtomIns(Ko), 
(d = h.data).url = o, d.jsonData = n, d.error = e, h.emitByRouter(i)), [ 2 ];
}
});
});
};
}, a([ qe(Ko), l("design:type", Object) ], n.prototype, "input", void 0), a([ je("G_FAtom_ReadJsonAsset") ], n);
}(Kr), ac = function(t) {
function e() {
return null !== t && t.apply(this, arguments) || this;
}
return o(e, t), e.prototype.defineInputData = function() {
return {
url: "",
binData: void 0,
error: ""
};
}, a([ qe("G_FAtom_RootDomain"), l("design:type", Object) ], e.prototype, "root", void 0), 
a([ je(Zo) ], e);
}(Is), lc = function(e) {
function n() {
return null !== e && e.apply(this, arguments) || this;
}
return o(n, e), n.prototype.defineFunction = function() {
var e = this;
return function(o, n) {
var i = n[ye];
c(e, void 0, void 0, function() {
var e, n, r, s, a, l, c, h, d;
return u(this, function(u) {
switch (u.label) {
case 0:
e = "", u.label = 1;

case 1:
return u.trys.push([ 1, 3, , 4 ]), r = kn(o), s = r.featureName, a = r.assetPath, 
[ 4, this.atomWorld.universe.asset.loadAsset(s, a, t.LoaderAssetType.Buffer) ];

case 2:
return l = u.sent(), !this.atomWorld || this.atomWorld.disposed ? [ 2 ] : (n = l._buffer, 
[ 3, 4 ]);

case 3:
return c = u.sent(), e = c instanceof Error ? c.message : String(c), [ 3, 4 ];

case 4:
return !this.atomWorld || this.atomWorld.disposed || (h = this.atomWorld.getAtomIns(Zo), 
(d = h.data).url = o, d.binData = n, d.error = e, h.emitByRouter(i)), [ 2 ];
}
});
});
};
}, a([ qe(Zo), l("design:type", Object) ], n.prototype, "input", void 0), a([ je("G_FAtom_ReadBinAsset") ], n);
}(Kr), uc = function(t) {
function e() {
return null !== t && t.apply(this, arguments) || this;
}
return o(e, t), e.prototype.defineFunction = function() {
var t = this;
return function(e, o) {
var n = kn(e), i = n.featureName, r = n.assetPath;
return t.atomWorld.universe.asset.releaseAsset(i, r, o);
};
}, a([ je("G_FAtom_ReleaseAsset") ], e);
}(Kr), hc = function(t) {
function e() {
return null !== t && t.apply(this, arguments) || this;
}
return o(e, t), e.prototype.defineFunction = function() {
var t = this;
return function(e) {
return t.atomWorld.universe.asset.isBundleDownloaded(e);
};
}, a([ je("G_FAtom_IsBundleDownloaded") ], e);
}(Kr), dc = function(t) {
function e() {
return null !== t && t.apply(this, arguments) || this;
}
return o(e, t), e.prototype.defineFunction = function() {
var t = this;
return function(e, o) {
var n = kn(e), i = n.featureName, r = n.assetPath;
return t.atomWorld.universe.asset.isAssetDownloaded(i, r, o);
};
}, a([ je("G_FAtom_IsAssetDownloaded") ], e);
}(Kr), pc = function(t) {
function e() {
return null !== t && t.apply(this, arguments) || this;
}
return o(e, t), e.prototype.defineFunction = function() {
var t = this;
return function(e) {
var o = kn(e), n = o.featureName, i = o.assetPath;
return t.atomWorld.universe.asset.isDirDownloaded(n, i);
};
}, a([ je("G_FAtom_IsDirDownloaded") ], e);
}(Kr), mc = function(t) {
function e() {
return null !== t && t.apply(this, arguments) || this;
}
return o(e, t), e.prototype.defineFunction = function() {
var t = this.atomWorld.loadedFeatureNames;
return function(e) {
return t.has(e);
};
}, a([ je("G_FAtom_HasFeature") ], e);
}(Kr), _c = function(t) {
function e() {
return null !== t && t.apply(this, arguments) || this;
}
return o(e, t), e.prototype.defineFunction = function() {
var t = this.atomWorld.universe.featureResolver;
return function(e) {
return t.hasFeatureInUniverse(e);
};
}, a([ je("G_FAtom_HasUniverseFeature") ], e);
}(Kr), fc = function(t) {
function e() {
return null !== t && t.apply(this, arguments) || this;
}
return o(e, t), e.prototype.defineFunction = function() {
var t = this.atomWorld.universe.storage, e = this.atomWorld.storageScope;
return function(o, n) {
t.saveJsonEntry(o, n, e);
};
}, a([ je("G_FAtom_SaveJson") ], e);
}(Kr), yc = function(t) {
function e() {
return null !== t && t.apply(this, arguments) || this;
}
return o(e, t), e.prototype.defineFunction = function() {
var t = this.atomWorld.universe.storage, e = this.atomWorld.storageScope;
return function(o) {
return t.loadJsonEntry(o, e);
};
}, a([ je("G_FAtom_LoadJson") ], e);
}(Kr), vc = function(t) {
function e() {
return null !== t && t.apply(this, arguments) || this;
}
return o(e, t), e.prototype.defineFunction = function() {
var t = this.atomWorld.universe.storage, e = this.atomWorld.storageScope;
return function(o) {
t.removeJsonEntry(o, e);
};
}, a([ je("G_FAtom_RemoveJson") ], e);
}(Kr), gc = function(t) {
function e() {
return null !== t && t.apply(this, arguments) || this;
}
return o(e, t), e.prototype.defineFunction = function() {
var t = this.atomWorld.universe.storage;
return function(e) {
return t.readRawItem(e);
};
}, a([ je("G_FAtom_GetStorageItem") ], e);
}(Kr), Ac = function(t) {
function e() {
return null !== t && t.apply(this, arguments) || this;
}
return o(e, t), e.prototype.defineFunction = function() {
var t = this.atomWorld, e = t.universe.storage;
return function(o, n) {
e.registerSaveMirror(t, o, n);
};
}, a([ je("G_FAtom_RegisterSaveMirror") ], e);
}(Kr), xc = function(t) {
function e() {
return null !== t && t.apply(this, arguments) || this;
}
return o(e, t), e.prototype.defineFunction = function() {
var t = this.atomWorld, e = t.universe.storage;
return function(o, n) {
e.registerHostItemMirror(t, o, n);
};
}, a([ je("G_FAtom_RegisterHostItemMirror") ], e);
}(Kr), bc = function(t) {
function e() {
return null !== t && t.apply(this, arguments) || this;
}
return o(e, t), e.prototype.defineFunction = function() {
var t = this;
return function(e, o) {
return t.atomWorld.universe.host.getHostStorageItem(e, o);
};
}, a([ je("G_FAtom_GetHostStorageItem") ], e);
}(Kr), Cc = function(t, e, o, n, i, r, s, a, l, c, u) {
var h = e + e, d = o + o, p = n + n, m = e * h, _ = e * d, f = e * p, y = o * d, v = o * p, g = n * p, A = i * h, x = i * d, b = i * p;
return t[0] = (1 - (y + g)) * l, t[1] = (_ + b) * l, t[2] = (f - x) * l, t[3] = 0, 
t[4] = (_ - b) * c, t[5] = (1 - (m + g)) * c, t[6] = (v + A) * c, t[7] = 0, t[8] = (f + x) * u, 
t[9] = (v - A) * u, t[10] = (1 - (m + y)) * u, t[11] = 0, t[12] = r, t[13] = s, 
t[14] = a, t[15] = 1, t;
}, wc = function(t, e, o) {
var n = e[0], i = e[1], r = e[2], s = e[3], a = e[4], l = e[5], c = e[6], u = e[7], h = e[8], d = e[9], p = e[10], m = e[11], _ = e[12], f = e[13], y = e[14], v = e[15], g = o[0], A = o[1], x = o[2], b = o[3];
return t[0] = g * n + A * a + x * h + b * _, t[1] = g * i + A * l + x * d + b * f, 
t[2] = g * r + A * c + x * p + b * y, t[3] = g * s + A * u + x * m + b * v, g = o[4], 
A = o[5], x = o[6], b = o[7], t[4] = g * n + A * a + x * h + b * _, t[5] = g * i + A * l + x * d + b * f, 
t[6] = g * r + A * c + x * p + b * y, t[7] = g * s + A * u + x * m + b * v, g = o[8], 
A = o[9], x = o[10], b = o[11], t[8] = g * n + A * a + x * h + b * _, t[9] = g * i + A * l + x * d + b * f, 
t[10] = g * r + A * c + x * p + b * y, t[11] = g * s + A * u + x * m + b * v, g = o[12], 
A = o[13], x = o[14], b = o[15], t[12] = g * n + A * a + x * h + b * _, t[13] = g * i + A * l + x * d + b * f, 
t[14] = g * r + A * c + x * p + b * y, t[15] = g * s + A * u + x * m + b * v, t;
}, Sc = function(t, e) {
var o = e[0], n = e[1], i = e[2], r = e[3], s = e[4], a = e[5], l = e[6], c = e[7], u = e[8], h = e[9], d = e[10], p = e[11], m = e[12], _ = e[13], f = e[14], y = e[15], v = o * a - n * s, g = o * l - i * s, A = o * c - r * s, x = n * l - i * a, b = n * c - r * a, C = i * c - r * l, w = u * _ - h * m, S = u * f - d * m, R = u * y - p * m, B = h * f - d * _, T = h * y - p * _, F = d * y - p * f, M = v * F - g * T + A * B + x * R - b * S + C * w;
if (M) return M = 1 / M, t[0] = (a * F - l * T + c * B) * M, t[1] = (i * T - n * F - r * B) * M, 
t[2] = (_ * C - f * b + y * x) * M, t[3] = (d * b - h * C - p * x) * M, t[4] = (l * R - s * F - c * S) * M, 
t[5] = (o * F - i * R + r * S) * M, t[6] = (f * A - m * C - y * g) * M, t[7] = (u * C - d * A + p * g) * M, 
t[8] = (s * T - a * R + c * w) * M, t[9] = (n * R - o * T - r * w) * M, t[10] = (m * b - _ * A + y * v) * M, 
t[11] = (h * A - u * b - p * v) * M, t[12] = (a * S - s * B - l * w) * M, t[13] = (o * B - n * S + i * w) * M, 
t[14] = (_ * g - m * x - f * v) * M, t[15] = (u * x - h * g + d * v) * M, t;
}, Rc = function(t, e, o) {
var n = o.x, i = o.y, r = o.z, s = e[3] * n + e[7] * i + e[11] * r + e[15];
s = s || 1, t.x = (e[0] * n + e[4] * i + e[8] * r + e[12]) / s, t.y = (e[1] * n + e[5] * i + e[9] * r + e[13]) / s, 
t.z = (e[2] * n + e[6] * i + e[10] * r + e[14]) / s;
}, Bc = function(t) {
return t.fill(0), t[0] = t[5] = t[10] = t[15] = 1, t;
}, Tc = new Float32Array(16), Fc = new Float32Array(16), Mc = new Float32Array(16);
function Ic(t, e, o) {
return void 0 === t ? o : Array.isArray(t) && "function" == typeof t[0] ? t[0](e) : t;
}
function Dc(t, e, o) {
var n, i, r, s, a, l, c, u = Ic(e.x, o, 0), h = Ic(e.y, o, 0), d = Ic(e.z, o, 0);
if (void 0 !== e.angle) {
var p = Ic(e.angle, o, 0) * Math.PI / 360;
n = 0, i = 0, r = Math.sin(p), s = Math.cos(p);
} else n = Ic(e.quatX, o, 0), i = Ic(e.quatY, o, 0), r = Ic(e.quatZ, o, 0), s = Ic(e.quatW, o, 1);
void 0 !== e.scale ? a = l = c = Ic(e.scale, o, 1) : (a = Ic(e.scaleX, o, 1), l = Ic(e.scaleY, o, 1), 
c = Ic(e.scaleZ, o, 1)), Cc(t, n, i, r, s, u, h, d, a, l, c);
}
function Nc(t, e, o, n) {
var i, r;
Bc(n);
try {
for (var s = h(t), a = s.next(); !a.done; a = s.next()) {
var l = e[a.value];
l && (Dc(Mc, l, o), wc(n, n, Mc));
}
} catch (t) {
i = {
error: t
};
} finally {
try {
a && !a.done && (r = s.return) && r.call(s);
} finally {
if (i) throw i.error;
}
}
}
function Pc(t, e, o, n, i) {
for (var r, s, a, l, c = [], u = t; void 0 !== u; ) {
c.push(u);
var h = n.getParent(u);
if (u === e || void 0 === h) break;
u = h;
}
Bc(i);
for (var d = c.length - 1; d >= 0; d--) {
var p = c[d];
if (Cc(Tc, o.quatX[p] || 0, o.quatY[p] || 0, o.quatZ[p] || 0, null !== (r = o.quatW[p]) && void 0 !== r ? r : 1, o.x[p] || 0, o.y[p] || 0, o.z[p] || 0, null !== (s = o.scaleX[p]) && void 0 !== s ? s : 1, null !== (a = o.scaleY[p]) && void 0 !== a ? a : 1, null !== (l = o.scaleZ[p]) && void 0 !== l ? l : 1), 
wc(i, i, Tc), d > 0) {
var m = n.mountSlots.get(c[d - 1]);
if (m) {
var _ = n.atomWorld.universe.getSlotData(n.atomWorld.config.worldId, p, m);
_ && _.path.length && (Nc(_.path, _.propsMap, p, Fc), wc(i, i, Fc));
}
}
}
}
var Ec, Lc, Wc, Vc = function(t) {
function e() {
return null !== t && t.apply(this, arguments) || this;
}
return o(e, t), e.prototype.defineFunction = function() {
var t = this, e = new Float32Array(16);
return function(o) {
return Pc(o, t.atomWorld.rootEid, t.rootDomain.transform, t.childOf, e), {
x: e[12],
y: e[13],
z: e[14]
};
};
}, a([ qe(ro), l("design:type", Object) ], e.prototype, "rootDomain", void 0), a([ qe(To), l("design:type", Object) ], e.prototype, "childOf", void 0), 
a([ je("G_FAtom_GetWorldPosition") ], e);
}(Kr), Oc = function(t) {
function e() {
return null !== t && t.apply(this, arguments) || this;
}
return o(e, t), e.prototype.defineFunction = function() {
var t = this, e = new Float32Array(16), o = {
x: 0,
y: 0,
z: 0
};
return function(n, i) {
var s = i || {
x: 0,
y: 0,
z: 0
};
return Pc(n, t.atomWorld.rootEid, t.rootDomain.transform, t.childOf, e), Rc(o, e, s), 
r({}, o);
};
}, a([ qe(ro), l("design:type", Object) ], e.prototype, "rootDomain", void 0), a([ qe(To), l("design:type", Object) ], e.prototype, "childOf", void 0), 
a([ je("G_FAtom_ConvertToWorld") ], e);
}(Kr), kc = function(t) {
function e() {
return null !== t && t.apply(this, arguments) || this;
}
return o(e, t), e.prototype.defineFunction = function() {
var t = this, e = new Float32Array(16), o = new Float32Array(16), n = new Float32Array(16), i = {
x: 0,
y: 0,
z: 0
}, s = {
x: 0,
y: 0,
z: 0
};
return function(a, l, c) {
return Pc(l, t.atomWorld.rootEid, t.rootDomain.transform, t.childOf, e), Rc(i, e, c), 
Pc(a, t.atomWorld.rootEid, t.rootDomain.transform, t.childOf, o), Sc(n, o) && Rc(s, n, i), 
r({}, s);
};
}, a([ qe(ro), l("design:type", Object) ], e.prototype, "rootDomain", void 0), a([ qe(To), l("design:type", Object) ], e.prototype, "childOf", void 0), 
a([ je("G_FAtom_ConvertToNode") ], e);
}(Kr), Gc = function(t) {
function e() {
return null !== t && t.apply(this, arguments) || this;
}
return o(e, t), e.prototype.defineFunction = function() {
var t = this, e = new Float32Array(16), o = new Float32Array(16), n = new Float32Array(16), i = new Float32Array(16), s = {
x: 0,
y: 0,
z: 0
}, a = {
x: 0,
y: 0,
z: 0
};
return function(l, c, u, h) {
Pc(u, t.atomWorld.rootEid, t.rootDomain.transform, t.childOf, e), Rc(s, e, h), Pc(l, t.atomWorld.rootEid, t.rootDomain.transform, t.childOf, o);
var d = t.atomWorld.universe.getSlotData(t.atomWorld.config.worldId, l, c);
return d && (Nc(d.path, d.propsMap, l, n), wc(o, o, n)), Sc(i, o) && Rc(a, i, s), 
r({}, a);
};
}, a([ qe(ro), l("design:type", Object) ], e.prototype, "rootDomain", void 0), a([ qe(To), l("design:type", Object) ], e.prototype, "childOf", void 0), 
a([ je("G_FAtom_ConvertToSlot") ], e);
}(Kr), zc = function(t) {
function e() {
return null !== t && t.apply(this, arguments) || this;
}
return o(e, t), e.prototype.defineFunction = function() {
var t = this;
return function(e, o, n) {
if (null == n ? void 0 : n.keepWorldPosition) {
var i = t.atomWorld.universe.computeReparentLocalPosition(t.atomWorld.config.worldId, e, o, n.slotName);
i && (t.rootDomain.transform.x.set(e, i.x), t.rootDomain.transform.y.set(e, i.y), 
t.rootDomain.transform.z.set(e, i.z));
}
t.childOf.addChild(o, e, null == n ? void 0 : n.slotName);
};
}, a([ qe(To), l("design:type", Object) ], e.prototype, "childOf", void 0), a([ qe(ro), l("design:type", Object) ], e.prototype, "rootDomain", void 0), 
a([ je("G_FAtom_ChangeParent") ], e);
}(Kr), jc = function(t) {
function e() {
return null !== t && t.apply(this, arguments) || this;
}
return o(e, t), e.prototype.defineFunction = function() {
var t = this;
return function(e) {
t.atomWorld.universe.host.destroyUniverse(e);
};
}, a([ je("G_FAtom_DestroyUniverse") ], e);
}(na), qc = function(t) {
function e() {
return null !== t && t.apply(this, arguments) || this;
}
return o(e, t), e.prototype.defineFunction = function() {
var t = this;
return function(e) {
void 0 === e && (e = !1), e && t.atomWorld.universe.forceSaveAllStorage(), t.atomWorld.universe.runtime.restartApplication();
};
}, a([ je("G_FAtom_RestartApplication") ], e);
}(na), Hc = function(t) {
function e() {
return null !== t && t.apply(this, arguments) || this;
}
return o(e, t), e.prototype.defineFunction = function() {
var t = this;
return function(e) {
t.atomWorld.universe.restartWorld(e);
};
}, a([ je("G_FAtom_RestartWorld") ], e);
}(na), Uc = function(t) {
function e() {
return null !== t && t.apply(this, arguments) || this;
}
return o(e, t), e.prototype.defineFunction = function() {
var t = this;
return function(e, o) {
t.atomWorld.universe.host.setRenderMountMode(e, o), t.atomWorld.universe.render.updateRootNodeAlignment();
};
}, a([ je("G_FAtom_SetRenderMountMode") ], e);
}(na), Yc = function(t) {
function e() {
return null !== t && t.apply(this, arguments) || this;
}
return o(e, t), e.prototype.defineFunction = function() {
var t = this;
return function(e) {
t.atomWorld.universe.host.dismissEntryRedDot(e);
};
}, a([ je("G_FAtom_DismissEntryRedDot") ], e);
}(na), Xc = function(t) {
function e() {
return null !== t && t.apply(this, arguments) || this;
}
return o(e, t), e.prototype.defineFunction = function() {
var t = this;
return function(e, o, n) {
t.atomWorld.universe.host.setUniverseParentSize(e, o, n);
};
}, a([ je("G_FAtom_SetUniverseParentSize") ], e);
}(na), Jc = function(t) {
function e() {
return null !== t && t.apply(this, arguments) || this;
}
return o(e, t), e.prototype.defineFunction = function() {
var t = this;
return function(e) {
t.atomWorld.universe.host.openHostView(e);
};
}, a([ je("G_FAtom_OpenHostView") ], e);
}(na), Qc = function(t) {
function e() {
return null !== t && t.apply(this, arguments) || this;
}
return o(e, t), e.prototype.defineFunction = function() {
var t = this;
return function(e) {
t.atomWorld.universe.host.showNativeToast(e);
};
}, a([ je("G_FAtom_ShowNativeToast") ], e);
}(na), Kc = function(t) {
function e() {
return null !== t && t.apply(this, arguments) || this;
}
return o(e, t), e.prototype.defineFunction = function() {
var t = this;
return function(e) {
t.atomWorld.universe.host.showTips(e);
};
}, a([ je("G_FAtom_ShowTips") ], e);
}(na), Zc = function(t) {
function e() {
return null !== t && t.apply(this, arguments) || this;
}
return o(e, t), e.prototype.defineFunction = function() {
var t = this;
return function() {
t.atomWorld.universe.host.showXingYunLoading();
};
}, a([ je("G_FAtom_ShowXingYunLoading") ], e);
}(na), $c = function(t) {
function e() {
return null !== t && t.apply(this, arguments) || this;
}
return o(e, t), e.prototype.defineFunction = function() {
var t = this;
return function() {
t.atomWorld.universe.host.hideXingYunLoading();
};
}, a([ je("G_FAtom_HideXingYunLoading") ], e);
}(na), tu = function(t) {
function e() {
return null !== t && t.apply(this, arguments) || this;
}
return o(e, t), e.prototype.defineFunction = function() {
var t = this;
return function() {
t.atomWorld.universe.host.showXingYunLoadingFailed();
};
}, a([ je("G_FAtom_ShowXingYunLoadingFailed") ], e);
}(na), eu = function(t) {
function e() {
return null !== t && t.apply(this, arguments) || this;
}
return o(e, t), e.prototype.defineFunction = function() {
var t = this;
return function() {
t.atomWorld.universe.host.showXingYunLoadingNoNet();
};
}, a([ je("G_FAtom_ShowXingYunLoadingNoNet") ], e);
}(na), ou = function(t) {
function e() {
return null !== t && t.apply(this, arguments) || this;
}
return o(e, t), e.prototype.defineFunction = function() {
var t = this;
return function() {
t.atomWorld.universe.host.showXingYunNoNetPopup();
};
}, a([ je("G_FAtom_ShowXingYunNoNetPopup") ], e);
}(na), nu = function(t) {
function e() {
return null !== t && t.apply(this, arguments) || this;
}
return o(e, t), e.prototype.defineFunction = function() {
var t = this;
return function() {
t.atomWorld.universe.host.hideXingYunNoNetPopup();
};
}, a([ je("G_FAtom_HideXingYunNoNetPopup") ], e);
}(na), iu = function(t) {
function e() {
return null !== t && t.apply(this, arguments) || this;
}
return o(e, t), a([ qe("G_FAtom_RootDomain"), l("design:type", Object) ], e.prototype, "rootDomain", void 0), 
a([ je(Ro) ], e);
}(is), ru = function(e) {
function n() {
return null !== e && e.apply(this, arguments) || this;
}
return o(n, e), a([ Je, qe(ao), l("design:type", Object) ], n.prototype, "update", void 0), 
a([ Qe(t.RouteMode.Direct), qe(Ro), l("design:type", Object) ], n.prototype, "signal", void 0), 
a([ je("G_FAtom_TweenRunnerRouter") ], n);
}(as), su = function(e) {
function n() {
return null !== e && e.apply(this, arguments) || this;
}
return o(n, e), n.prototype.defineRuntimeData = function() {
return {
tasksMap: {}
};
}, n.prototype.onExecute = function(t, e) {
var o = this.update.renderDeltaTime, n = e.runtime.tasksMap;
for (var i in n) {
var r = Number(i), s = n[r];
if (s) for (var a = s.length - 1; a >= 0; a--) {
var l = s[a], c = {
elapsedTime: l.elapsedTime,
data: l.stepData
}, u = l.steps[l.currentStepIndex];
this._runStep(l.eid, o, c, u) ? this._nextStep(l) : (l.elapsedTime = c.elapsedTime, 
l.stepData = c.data), l.isFinished && s.splice(a, 1);
}
s && 0 !== s.length || delete n[r];
}
}, n.prototype._runStep = function(e, o, n, i) {
switch (n.elapsedTime += o, i[0]) {
case t.TweenStepType.To:
return this._handleInterpolation(e, n, i, !1);

case t.TweenStepType.By:
return this._handleInterpolation(e, n, i, !0);

case t.TweenStepType.Delay:
return n.elapsedTime >= i[1];

case t.TweenStepType.Router:
return this._handleRouterStep(e, i), !0;

case t.TweenStepType.Destroy:
return this._handleDestroyStep(e, i), !0;

case t.TweenStepType.Parallel:
return this._handleParallel(e, o, n, i);

case t.TweenStepType.Repeat:
return this._handleRepeat(e, o, n, i);

default:
return !0;
}
}, n.prototype._handleInterpolation = function(e, o, n, i) {
var r = d(n, 5), s = r[1], a = r[2], l = r[3], c = r[4], u = void 0 === c ? t.TweenEasing.Linear : c;
if (!o.data) {
var h = {}, p = this._collectLeafPaths(a);
for (var m in p) h[m] = this._getDeepValue(s, m.split("."), e);
o.data = h;
}
var _ = o.data, f = l > 0 ? Math.min(1, o.elapsedTime / l) : 1, y = f;
for (var m in u !== t.TweenEasing.Linear && (y = tc[u](f)), _) {
var v = m.split("."), g = _[m], A = this._getNestedValue(a, v);
if ("number" == typeof A && "number" == typeof g) {
var x = i ? A : A - g;
this._setDeepValue(s, v, e, g + x * y);
} else f >= 1 && this._setDeepValue(s, v, e, A);
}
return f >= 1;
}, n.prototype._handleParallel = function(t, e, o, n) {
var i = d(n, 2)[1];
o.data || (o.data = {
subStates: i.map(function() {
return {
elapsedTime: 0,
data: void 0,
finished: !1
};
})
});
for (var r = o.data, s = !0, a = 0; a < i.length; a++) {
var l = r.subStates[a];
if (!l.finished) {
var c = {
elapsedTime: l.elapsedTime,
data: l.data
};
this._runStep(t, e, c, i[a]) ? l.finished = !0 : (l.elapsedTime = c.elapsedTime, 
l.data = c.data, s = !1);
}
}
return s;
}, n.prototype._handleRepeat = function(t, e, o, n) {
var i = d(n, 3), r = i[1], s = i[2];
o.data || (o.data = {
iter: 0,
subIdx: 0,
subElapsed: 0,
subData: void 0
});
for (var a = o.data, l = e; a.iter < r || 0 === r; ) {
var c = s[a.subIdx], u = {
elapsedTime: a.subElapsed,
data: a.subData
};
if (!this._runStep(t, l, u, c)) return a.subElapsed = u.elapsedTime, a.subData = u.data, 
!1;
if (a.subIdx++, a.subElapsed = 0, a.subData = void 0, l = 0, a.subIdx >= s.length && (a.iter++, 
a.subIdx = 0), r > 0 && a.iter >= r) return !0;
}
return !0;
}, n.prototype._handleRouterStep = function(t, e) {
var o = d(e), n = o[1], i = o.slice(2), r = n[ye], s = this.atomWorld.getAtomIns(r);
0 === i.length && i.push(t), this.atomWorld.pendingRouterSignals.push({
fromRouterName: r,
signalName: s.to.atomName,
eidList: i
});
}, n.prototype._handleDestroyStep = function(t, e) {
var o, n, i = d(e).slice(1);
0 === i.length && i.push(t);
var r = this.atomWorld.getAtomIns(Do).atomState.name;
try {
for (var s = h(i), a = s.next(); !a.done; a = s.next()) {
var l = a.value, c = r[l];
this.atomWorld.getAtomIns(c).destroy(l);
}
} catch (t) {
o = {
error: t
};
} finally {
try {
a && !a.done && (n = s.return) && n.call(s);
} finally {
if (o) throw o.error;
}
}
}, n.prototype._nextStep = function(t) {
t.currentStepIndex++, t.elapsedTime = 0, t.stepData = void 0, t.currentStepIndex >= t.steps.length && (t.isFinished = !0);
}, n.prototype._collectLeafPaths = function(t, e) {
void 0 === e && (e = "");
var o = {};
for (var n in t) {
var i = t[n], r = e ? "".concat(e, ".").concat(n) : n;
i && "object" == typeof i && !Array.isArray(i) ? Object.assign(o, this._collectLeafPaths(i, r)) : o[r] = i;
}
return o;
}, n.prototype._resolvePath = function(t, e, o) {
var n, i = t, r = e;
if ("EntityComponentAtom" === t[ve]) {
var s = e[0], a = t[s];
if (!a) return;
if (1 === e.length) return {
parent: t,
key: s,
isComponent: !0
};
if (2 === e.length && (null === (n = a[e[1]]) || void 0 === n ? void 0 : n.set)) return {
parent: a,
key: e[1],
isComponent: !0
};
i = a[o], r = e.slice(1);
}
for (var l = 0; l < r.length - 1; l++) if ("object" != typeof (i = null == i ? void 0 : i[r[l]]) || null === i) return;
var c = r[r.length - 1];
return i ? {
parent: i,
key: c,
isComponent: !1
} : void 0;
}, n.prototype._getNestedValue = function(t, e) {
var o, n, i = t;
try {
for (var r = h(e), s = r.next(); !s.done; s = r.next()) {
var a = s.value;
i = null == i ? void 0 : i[a];
}
} catch (t) {
o = {
error: t
};
} finally {
try {
s && !s.done && (n = r.return) && n.call(r);
} finally {
if (o) throw o.error;
}
}
return i;
}, n.prototype._getDeepValue = function(t, e, o) {
var n, i = this._resolvePath(t, e, o);
if (i) {
var r = i.parent, s = i.key;
return i.isComponent ? null === (n = r[s]) || void 0 === n ? void 0 : n[o] : r[s];
}
}, n.prototype._setDeepValue = function(t, e, o, n) {
var i = this._resolvePath(t, e, o);
if (i) {
var r = i.parent, s = i.key;
i.isComponent ? r[s].set(o, n) : r[s] = n;
}
}, a([ Ye, qe(Ro), l("design:type", Object) ], n.prototype, "signal", void 0), a([ qe(ao), l("design:type", Object) ], n.prototype, "update", void 0), 
a([ je(Bo) ], n);
}(Zr), au = function(t) {
function e() {
return null !== t && t.apply(this, arguments) || this;
}
return o(e, t), e.prototype.defineFunction = function() {
var t = this.atomWorld.universe.host;
return function(e, o) {
void 0 === o && (o = {}), t.track(e, o);
};
}, a([ je("G_FAtom_Track") ], e);
}(na), lu = function(t) {
function e() {
return null !== t && t.apply(this, arguments) || this;
}
return o(e, t), e.prototype.defineFunction = function() {
var t = this.atomWorld.universe.host;
return function(e) {
t.setThinkingDataEnabled(e);
};
}, a([ je("G_FAtom_SetThinkingDataEnabled") ], e);
}(na), cu = function(t) {
function e() {
return null !== t && t.apply(this, arguments) || this;
}
return o(e, t), e.prototype.defineFunction = function() {
var t = this.atomWorld.universe.host;
return function(e) {
t.reportGameRuntime(e);
};
}, a([ je("G_FAtom_ReportGameRuntime") ], e);
}(na), uu = function(t) {
function e() {
return null !== t && t.apply(this, arguments) || this;
}
return o(e, t), e.prototype.defineFunction = function() {
var t = this;
return function(e) {
t.atomWorld.universe.host.setUserPreferences(e);
};
}, a([ je("G_FAtom_SetUserPreferences") ], e);
}(na), hu = function(t) {
function e() {
return null !== t && t.apply(this, arguments) || this;
}
return o(e, t), e.prototype.defineFunction = function() {
var t = this;
return function(e) {
var o = t.atomWorld.universe.host, n = t.atomWorld;
o.requestAlgorithmOffer(e).then(function(t) {
o.onAlgorithmOfferResult(t, n);
}).catch(function(i) {
o.onAlgorithmOfferResult(t.createErrorResponse(e, i), n);
});
};
}, e.prototype.createErrorResponse = function(t, e) {
return {
requestId: t.requestId,
requestedAlgorithmId: t.algorithmId,
blockIds: [],
blockNames: [],
blockPoses: [],
blockShapes: [],
sdkBackend: "EXCEPTION",
isSdkFallback: !0,
errorCode: 1,
errorMsg: e instanceof Error ? e.message : String(e || ""),
extra: null
};
}, a([ je("G_FAtom_RequestAlgorithmOffer") ], e);
}(na), du = function(t) {
function e() {
return null !== t && t.apply(this, arguments) || this;
}
return o(e, t), e.prototype.defineInputData = function() {
return {
requestId: "",
requestedAlgorithmId: 0,
actualAlgorithmType: 0,
blockIds: [],
blockNames: [],
blockPoses: [],
blockShapes: [],
sdkBackend: "UNKNOWN",
isSdkFallback: !1,
errorCode: 0,
errorMsg: "",
extra: null
};
}, a([ qe("G_FAtom_RootDomain"), l("design:type", Object) ], e.prototype, "rootDomain", void 0), 
a([ je(Uo) ], e);
}(Is), pu = function(t) {
function e() {
return null !== t && t.apply(this, arguments) || this;
}
return o(e, t), e.prototype.defineFunction = function() {
var t = this;
return function(e) {
return t.atomWorld.universe.host.getBlockShape(e);
};
}, a([ je("G_FAtom_GetBlockShape") ], e);
}(Kr), mu = function(t) {
function e() {
return null !== t && t.apply(this, arguments) || this;
}
return o(e, t), e.prototype.defineFunction = function() {
var t = this;
return function(e, o, n) {
return t.atomWorld.universe.host.checkLive(e, o, n);
};
}, a([ je("G_FAtom_CheckLive") ], e);
}(Kr), _u = function(t) {
function e() {
return null !== t && t.apply(this, arguments) || this;
}
return o(e, t), e.prototype.defineFunction = function() {
var t = this;
return function(e, o) {
t.atomWorld.universe.host.registerAlgorithmBoardCallbacks(e, o);
};
}, a([ je("G_FAtom_RegisterAlgorithmBoardCallbacks") ], e);
}(Kr), fu = function(t) {
function e() {
return null !== t && t.apply(this, arguments) || this;
}
return o(e, t), e.prototype.defineFunction = function() {
var t = this;
return function(e, o, n) {
t.atomWorld.universe.host.registerAlgorithmSnapshotCallbacks(e, o, n);
};
}, a([ je("G_FAtom_RegisterAlgorithmSnapshotCallbacks") ], e);
}(Kr);
t.RenderMountMode = void 0, (Ec = t.RenderMountMode || (t.RenderMountMode = {})).Embedded = "embedded", 
Ec.Fullscreen = "fullscreen", t.AdResultState = void 0, (Lc = t.AdResultState || (t.AdResultState = {}))[Lc.Success = 1] = "Success", 
Lc[Lc.Fail = 2] = "Fail", Lc[Lc.Timeout = 3] = "Timeout", t.AdType = void 0, (Wc = t.AdType || (t.AdType = {})).Reward = "reward", 
Wc.Interstitial = "inter", Wc.Fullscreen = "fullscreen", Wc.Banner = "banner", t.HostViewType = void 0, 
(t.HostViewType || (t.HostViewType = {})).XingYunGameList = "xingyun_game_list";
var yu, vu, gu, Au = function() {
function t() {
this.universe = null, this._mainWorld = null, this._adRequestWorld = null, this._universeOffset = {
x: 0,
y: 0
};
}
return t.prototype.setMainWorld = function(t) {
this._mainWorld = t;
}, t.prototype.setAdRequestWorld = function(t) {
this._adRequestWorld = t;
}, t.prototype.clearAdRequestWorld = function(t) {
this._adRequestWorld === t && (this._adRequestWorld = null);
}, t.prototype.getUniverseOffset = function() {
return this._universeOffset;
}, t.prototype.getHostStorageItem = function() {
return null;
}, t.prototype.setHostStorageItem = function() {}, t.prototype.getHostCurrentLanguage = function() {
return "";
}, t.prototype.getHostLanguageString = function() {
return "";
}, t.prototype.isWorldBundlesDownloaded = function(t) {
var e, o;
if (!this.universe.asset.isWorldDownloaded(t)) return !1;
var n = this.universe.featureResolver.getFeatureSet(t);
try {
for (var i = h(n), r = i.next(); !r.done; r = i.next()) {
var s = d(r.value, 2), a = s[0];
if (!s[1].silent && !this.universe.asset.isBundleDownloaded(a)) return this.universe.asset.clearWorldDownloaded(t), 
!1;
}
} catch (t) {
e = {
error: t
};
} finally {
try {
r && !r.done && (o = i.return) && o.call(i);
} finally {
if (e) throw e.error;
}
}
return !0;
}, t.prototype.markWorldDownloadOnly = function(t) {
this.universe.featureResolver.markDownloadOnlyWorld(t);
}, t.prototype.requestAlgorithmOffer = function() {
return null;
}, t.prototype.getBlockShape = function() {}, t.prototype.checkLive = function() {
return !1;
}, t.prototype.registerAlgorithmBoardCallbacks = function() {}, t.prototype.registerAlgorithmSnapshotCallbacks = function() {}, 
t.prototype.getTimeSinceLastInterstitialAd = function() {
return 0;
}, t.prototype.getLastAdEcpm = function() {
return 0;
}, t.prototype.getMaxEcpm = function() {
return 0;
}, t.prototype.getMaxEcpmNormalized = function() {
return 0;
}, t.prototype.getHistoryMaxEcpmByDays = function() {
return 0;
}, t.prototype.getHistoryMinEcpmByDays = function() {
return 0;
}, t.prototype.getFirstAdEcpm = function() {
return 0;
}, t.prototype._emit = function(t, e) {
if (this._mainWorld) {
var o = this._mainWorld.getAtomIns(t);
Object.assign(o.data, e), o.emit();
}
}, t.prototype.originalCtrlWorld = function(t) {
this._emit(Ho, t);
}, t.prototype.onAlgorithmOfferResult = function(t, e) {
if ((void 0 === e && (e = this._mainWorld), e) && e.hasAtomIns(Uo)) {
var o = e.getAtomIns(Uo);
Object.assign(o.data, t), o.emit();
}
}, t.prototype.requestNetwork = function() {
return Promise.reject(new Error("[AtomEngine] 宿主未实现 requestNetwork"));
}, t.prototype.onNetworkResult = function(t, e) {
if (e.ready && e.hasAtomIns(Yo)) {
var o = e.getAtomIns(Yo);
Object.assign(o.data, t), o.emit();
}
}, t.prototype.onNetworkPush = function(t) {
this.universe.emitInputToAllWorlds(Xo, {
payload: t
});
}, t.prototype.onAdResult = function(e) {
var o, n, i = null !== (o = this._adRequestWorld) && void 0 !== o ? o : this._mainWorld;
if (i && i.hasAtomIns(t.ATOM_AD_RESULT)) {
var r = i.getAtomIns(t.ATOM_AD_RESULT), s = r.data;
s.adType = e.adType, s.state = e.state, s.typeCode = null !== (n = e.typeCode) && void 0 !== n ? n : "", 
r.emit();
}
}, t.prototype.onRewardAdReady = function(e) {
this.universe.emitInputToAllWorlds(t.ATOM_REWARD_AD_READY, {
ready: e
});
}, t.prototype.onInterstitialAdReady = function(e) {
this.universe.emitInputToAllWorlds(t.ATOM_INTERSTITIAL_AD_READY, {
ready: e
});
}, t.prototype.onFullscreenAdReady = function(e) {
this.universe.emitInputToAllWorlds(t.ATOM_FULLSCREEN_AD_READY, {
ready: e
});
}, t.prototype.updateUniverseOffset = function(e, o) {
this._universeOffset.x = e, this._universeOffset.y = o, this.universe.emitInputToAllWorlds(t.ATOM_UNIVERSE_OFFSET_INPUT, {
x: e,
y: o
});
}, t.prototype.setHostActive = function(e) {
this._emit(t.ATOM_HOST_ACTIVE, {
active: e
});
}, t.ATOM_AD_RESULT = "G_FAtom_ADResult", t.ATOM_REWARD_AD_READY = "G_FAtom_ADRewardAdReady", 
t.ATOM_INTERSTITIAL_AD_READY = "G_FAtom_ADInterstitialAdReady", t.ATOM_FULLSCREEN_AD_READY = "G_FAtom_ADFullscreenAdReady", 
t.ATOM_UNIVERSE_OFFSET_INPUT = "G_FAtom_UniverseOffsetInput", t.ATOM_HOST_ACTIVE = "G_FAtom_HostActive", 
t;
}(), xu = function(e) {
function n() {
return null !== e && e.apply(this, arguments) || this;
}
return o(n, e), n.prototype.defineInputData = function() {
return {
adType: t.AdType.Reward,
state: t.AdResultState.Success,
typeCode: ""
};
}, a([ qe("G_FAtom_RootDomain"), l("design:type", Object) ], n.prototype, "rootDomain", void 0), 
a([ je("G_FAtom_ADResult") ], n);
}(Is), bu = function(t) {
function e() {
return null !== t && t.apply(this, arguments) || this;
}
return o(e, t), e.prototype.defineInputData = function() {
return {
ready: !1
};
}, a([ qe("G_FAtom_RootDomain"), l("design:type", Object) ], e.prototype, "rootDomain", void 0), 
a([ je("G_FAtom_ADRewardAdReady") ], e);
}(Is), Cu = function(t) {
function e() {
return null !== t && t.apply(this, arguments) || this;
}
return o(e, t), e.prototype.defineInputData = function() {
return {
ready: !1
};
}, a([ qe("G_FAtom_RootDomain"), l("design:type", Object) ], e.prototype, "rootDomain", void 0), 
a([ je("G_FAtom_ADInterstitialAdReady") ], e);
}(Is), wu = function(t) {
function e() {
return null !== t && t.apply(this, arguments) || this;
}
return o(e, t), e.prototype.defineInputData = function() {
return {
ready: !1
};
}, a([ qe("G_FAtom_RootDomain"), l("design:type", Object) ], e.prototype, "rootDomain", void 0), 
a([ je("G_FAtom_ADFullscreenAdReady") ], e);
}(Is), Su = function(t) {
function e() {
return null !== t && t.apply(this, arguments) || this;
}
return o(e, t), e.prototype.defineInputData = function() {
return {
worldId: "",
progress: 0,
isDone: !1,
isCancelled: !1,
error: ""
};
}, a([ qe(so), l("design:type", Object) ], e.prototype, "worldDomain", void 0), 
a([ je(go) ], e);
}(Is), Ru = function(t) {
function e() {
return null !== t && t.apply(this, arguments) || this;
}
return o(e, t), e.prototype.defineInputData = function() {
return {
active: !0
};
}, a([ qe("G_FAtom_RootDomain"), l("design:type", Object) ], e.prototype, "root", void 0), 
a([ je("G_FAtom_HostActive") ], e);
}(Is), Bu = function(t) {
function e() {
return null !== t && t.apply(this, arguments) || this;
}
return o(e, t), e.prototype.defineFunction = function() {
var t = this;
return function(e, o) {
var n = t.atomWorld.universe.host, r = t.atomWorld, s = function(t) {
Promise.resolve().then(function() {
try {
n.onNetworkResult(t(), r);
} catch (t) {
y(i.NetworkResultDeliverFailed, {
requestId: e,
reason: t instanceof Error ? t.message : String(null != t ? t : "")
});
}
});
}, a = function(t) {
s(function() {
return {
requestId: e,
ok: !1,
errorCode: "HOST_ERROR",
errorMsg: t instanceof Error ? t.message : String(null != t ? t : ""),
payload: null
};
});
};
try {
n.requestNetwork({
requestId: e,
payload: o
}).then(function(t) {
return s(function() {
var o, n, i, r;
return "object" != typeof t || null === t ? {
requestId: e,
ok: !1,
errorCode: "HOST_ERROR",
errorMsg: "宿主 resolve 了非对象回包",
payload: null
} : {
requestId: null !== (o = t.requestId) && void 0 !== o ? o : e,
ok: Boolean(t.ok),
payload: null !== (n = t.payload) && void 0 !== n ? n : null,
errorCode: null !== (i = t.errorCode) && void 0 !== i ? i : "",
errorMsg: null !== (r = t.errorMsg) && void 0 !== r ? r : ""
};
});
}, a);
} catch (t) {
a(t);
}
};
}, a([ je("G_FAtom_NetworkRequest") ], e);
}(na), Tu = function(t) {
function e() {
return null !== t && t.apply(this, arguments) || this;
}
return o(e, t), e.prototype.defineInputData = function() {
return {
requestId: "",
ok: !1,
payload: null,
errorCode: "",
errorMsg: ""
};
}, a([ qe("G_FAtom_RootDomain"), l("design:type", Object) ], e.prototype, "root", void 0), 
a([ je(Yo) ], e);
}(Is), Fu = function(t) {
function e() {
return null !== t && t.apply(this, arguments) || this;
}
return o(e, t), e.prototype.defineInputData = function() {
return {
payload: null
};
}, a([ qe("G_FAtom_RootDomain"), l("design:type", Object) ], e.prototype, "root", void 0), 
a([ je(Xo) ], e);
}(Is), Mu = function(t) {
function e() {
return null !== t && t.apply(this, arguments) || this;
}
return o(e, t), e.prototype.defineInputData = function() {
return {
configAtomName: ""
};
}, a([ qe("G_FAtom_RootDomain"), l("design:type", Object) ], e.prototype, "root", void 0), 
a([ je(Jo) ], e);
}(Is), Iu = function(t) {
function e() {
return null !== t && t.apply(this, arguments) || this;
}
return o(e, t), e.prototype.defineFunction = function() {
var t = this, e = {};
return function(o, n) {
var i = o[ye], r = t.atomWorld.getAtomIns(i);
if (n) {
var s = n[ye];
e[i] = s;
}
r.reloadAsync().then(function() {
if (!t.atomWorld.disposed) {
var o = e[i];
if (o) {
var n = t.atomWorld.getAtomIns(Jo);
n.data.configAtomName = i, n.emitByRouter(o), delete e[i];
}
}
});
};
}, a([ qe(Jo), l("design:type", Object) ], e.prototype, "input", void 0), a([ je("G_FAtom_ReloadConfig") ], e);
}(Kr);
function Du(t, e) {
return t / e;
}
function Nu(t, e) {
return t * e;
}
function Pu(t, e) {
return 2 * Math.atan2(t, e);
}
t.Physics2DBodyType = void 0, (yu = t.Physics2DBodyType || (t.Physics2DBodyType = {}))[yu.Static = 0] = "Static", 
yu[yu.Kinematic = 1] = "Kinematic", yu[yu.Dynamic = 2] = "Dynamic", t.Physics2DShapeType = void 0, 
(vu = t.Physics2DShapeType || (t.Physics2DShapeType = {}))[vu.Box = 0] = "Box", 
vu[vu.Circle = 1] = "Circle", t.Physics2DContactType = void 0, (gu = t.Physics2DContactType || (t.Physics2DContactType = {}))[gu.Begin = 0] = "Begin", 
gu[gu.End = 1] = "End", gu[gu.PreSolve = 2] = "PreSolve", gu[gu.PostSolve = 3] = "PostSolve";
var Eu = function(e) {
function n() {
return null !== e && e.apply(this, arguments) || this;
}
return o(n, e), n.prototype.defineComponent = function() {
return {
bodyType: t.Physics2DBodyType.Dynamic,
density: 1,
mass: 0,
gravityScale: 1,
fixedRotation: !1,
velX: 0,
velY: 0,
linearDamping: 0,
angularDamping: 0,
angularVelocity: 0,
bullet: !1,
allowSleep: !0,
awake: !1,
active: !0
};
}, a([ je(No) ], n);
}(Yr), Lu = function(e) {
function n() {
return null !== e && e.apply(this, arguments) || this;
}
return o(n, e), n.prototype.defineComponent = function() {
return {
shapeType: t.Physics2DShapeType.Box,
halfW: 16,
halfH: 16,
radius: 16,
offsetX: 0,
offsetY: 0,
friction: .3,
restitution: 0,
isSensor: !1
};
}, a([ je(Po) ], n);
}(Yr), Wu = function(t) {
function e() {
return null !== t && t.apply(this, arguments) || this;
}
return o(e, t), a([ qe(Fo), l("design:type", Object) ], e.prototype, "transform", void 0), 
a([ qe(No), l("design:type", Object) ], e.prototype, "body", void 0), a([ qe(Po), l("design:type", Object) ], e.prototype, "collider", void 0), 
a([ je(Eo) ], e);
}(Xr), Vu = function(t, e) {
return (Vu = Object.setPrototypeOf || {
__proto__: []
} instanceof Array && function(t, e) {
t.__proto__ = e;
} || function(t, e) {
for (var o in e) Object.prototype.hasOwnProperty.call(e, o) && (t[o] = e[o]);
})(t, e);
};
function Ou(t, e) {
if ("function" != typeof e && null !== e) throw new TypeError("Class extends value " + String(e) + " is not a constructor or null");
function o() {
this.constructor = t;
}
Vu(t, e), t.prototype = null === e ? Object.create(e) : (o.prototype = e.prototype, 
new o());
}
var ku = function() {
return (ku = Object.assign || function(t) {
for (var e, o = 1, n = arguments.length; o < n; o++) for (var i in e = arguments[o]) Object.prototype.hasOwnProperty.call(e, i) && (t[i] = e[i]);
return t;
}).apply(this, arguments);
};
"function" == typeof SuppressedError && SuppressedError;
var Gu = function(t, e) {
null == t && (t = {});
var o = ku({}, t);
for (var n in e) e.hasOwnProperty(n) && void 0 === t[n] && (o[n] = e[n]);
if ("function" == typeof Object.getOwnPropertySymbols) for (var i = Object.getOwnPropertySymbols(e), r = 0; r < i.length; r++) {
var s = i[r];
e.propertyIsEnumerable(s) && void 0 === t[s] && (o[s] = e[s]);
}
return o;
}, zu = Math.random, ju = 1e-9, qu = Number.isFinite;
function Hu(t, e, o) {
return void 0 === e ? (o = 1, e = 0) : void 0 === o && (o = e, e = 0), o > e ? (t = (t - e) % (o - e)) + (t < 0 ? o : e) : (t = (t - o) % (e - o)) + (t <= 0 ? e : o);
}
function Uu(t, e, o) {
return t < e ? e : t > o ? o : t;
}
var Yu = Object.create(Math);
Yu.EPSILON = ju, Yu.isFinite = qu, Yu.nextPowerOfTwo = function(t) {
return t |= t >> 1, t |= t >> 2, t |= t >> 4, 1 + ((t |= t >> 8) | t >> 16);
}, Yu.isPowerOfTwo = function(t) {
return t > 0 && !(t & t - 1);
}, Yu.mod = Hu, Yu.clamp = Uu, Yu.random = function(t, e) {
return void 0 === t ? (e = 1, t = 0) : void 0 === e && (e = t, t = 0), t === e ? t : zu() * (e - t) + t;
};
var Xu = Math.abs, Ju = Math.sqrt, Qu = Math.max, Ku = Math.min, Zu = function() {
function t(e, o) {
if (!(this instanceof t)) return new t(e, o);
void 0 === e ? (this.x = 0, this.y = 0) : "object" == typeof e ? (this.x = e.x, 
this.y = e.y) : (this.x = e, this.y = o);
}
return t.prototype._serialize = function() {
return {
x: this.x,
y: this.y
};
}, t._deserialize = function(e) {
var o = Object.create(t.prototype);
return o.x = e.x, o.y = e.y, o;
}, t.zero = function() {
var e = Object.create(t.prototype);
return e.x = 0, e.y = 0, e;
}, t.neo = function(e, o) {
var n = Object.create(t.prototype);
return n.x = e, n.y = o, n;
}, t.clone = function(e) {
return t.neo(e.x, e.y);
}, t.prototype.toString = function() {
return JSON.stringify(this);
}, t.isValid = function(t) {
return null != t && Number.isFinite(t.x) && Number.isFinite(t.y);
}, t.assert = function() {}, t.prototype.clone = function() {
return t.clone(this);
}, t.prototype.setZero = function() {
return this.x = 0, this.y = 0, this;
}, t.prototype.set = function(t, e) {
return "object" == typeof t ? (this.x = t.x, this.y = t.y) : (this.x = t, this.y = e), 
this;
}, t.prototype.setNum = function(t, e) {
return this.x = t, this.y = e, this;
}, t.prototype.setVec2 = function(t) {
return this.x = t.x, this.y = t.y, this;
}, t.prototype.wSet = function(t, e, o, n) {
return void 0 !== o || void 0 !== n ? this.setCombine(t, e, o, n) : this.setMul(t, e);
}, t.prototype.setCombine = function(t, e, o, n) {
var i = t * e.x + o * n.x, r = t * e.y + o * n.y;
return this.x = i, this.y = r, this;
}, t.prototype.setMul = function(t, e) {
var o = t * e.x, n = t * e.y;
return this.x = o, this.y = n, this;
}, t.prototype.add = function(t) {
return this.x += t.x, this.y += t.y, this;
}, t.prototype.wAdd = function(t, e, o, n) {
return void 0 !== o || void 0 !== n ? this.addCombine(t, e, o, n) : this.addMul(t, e);
}, t.prototype.addCombine = function(t, e, o, n) {
var i = t * e.x + o * n.x, r = t * e.y + o * n.y;
return this.x += i, this.y += r, this;
}, t.prototype.addMul = function(t, e) {
var o = t * e.x, n = t * e.y;
return this.x += o, this.y += n, this;
}, t.prototype.wSub = function(t, e, o, n) {
return void 0 !== o || void 0 !== n ? this.subCombine(t, e, o, n) : this.subMul(t, e);
}, t.prototype.subCombine = function(t, e, o, n) {
var i = t * e.x + o * n.x, r = t * e.y + o * n.y;
return this.x -= i, this.y -= r, this;
}, t.prototype.subMul = function(t, e) {
var o = t * e.x, n = t * e.y;
return this.x -= o, this.y -= n, this;
}, t.prototype.sub = function(t) {
return this.x -= t.x, this.y -= t.y, this;
}, t.prototype.mul = function(t) {
return this.x *= t, this.y *= t, this;
}, t.prototype.length = function() {
return t.lengthOf(this);
}, t.prototype.lengthSquared = function() {
return t.lengthSquared(this);
}, t.prototype.normalize = function() {
var t = this.length();
if (t < ju) return 0;
var e = 1 / t;
return this.x *= e, this.y *= e, t;
}, t.normalize = function(e) {
var o = t.lengthOf(e);
if (o < ju) return t.zero();
var n = 1 / o;
return t.neo(e.x * n, e.y * n);
}, t.lengthOf = function(t) {
return Ju(t.x * t.x + t.y * t.y);
}, t.lengthSquared = function(t) {
return t.x * t.x + t.y * t.y;
}, t.distance = function(t, e) {
var o = t.x - e.x, n = t.y - e.y;
return Ju(o * o + n * n);
}, t.distanceSquared = function(t, e) {
var o = t.x - e.x, n = t.y - e.y;
return o * o + n * n;
}, t.areEqual = function(t, e) {
return t === e || "object" == typeof e && null !== e && t.x === e.x && t.y === e.y;
}, t.skew = function(e) {
return t.neo(-e.y, e.x);
}, t.dot = function(t, e) {
return t.x * e.x + t.y * e.y;
}, t.cross = function(e, o) {
return "number" == typeof o ? t.neo(o * e.y, -o * e.x) : "number" == typeof e ? t.neo(-e * o.y, e * o.x) : e.x * o.y - e.y * o.x;
}, t.crossVec2Vec2 = function(t, e) {
return t.x * e.y - t.y * e.x;
}, t.crossVec2Num = function(e, o) {
return t.neo(o * e.y, -o * e.x);
}, t.crossNumVec2 = function(e, o) {
return t.neo(-e * o.y, e * o.x);
}, t.addCross = function(e, o, n) {
return "number" == typeof n ? t.neo(n * o.y + e.x, -n * o.x + e.y) : "number" == typeof o ? t.neo(-o * n.y + e.x, o * n.x + e.y) : void 0;
}, t.addCrossVec2Num = function(e, o, n) {
return t.neo(n * o.y + e.x, -n * o.x + e.y);
}, t.addCrossNumVec2 = function(e, o, n) {
return t.neo(-o * n.y + e.x, o * n.x + e.y);
}, t.add = function(e, o) {
return t.neo(e.x + o.x, e.y + o.y);
}, t.wAdd = function(e, o, n, i) {
return void 0 !== n || void 0 !== i ? t.combine(e, o, n, i) : t.mulNumVec2(e, o);
}, t.combine = function(e, o, n, i) {
return t.zero().setCombine(e, o, n, i);
}, t.sub = function(e, o) {
return t.neo(e.x - o.x, e.y - o.y);
}, t.mul = function(e, o) {
return "object" == typeof e ? t.neo(e.x * o, e.y * o) : "object" == typeof o ? t.neo(e * o.x, e * o.y) : void 0;
}, t.mulVec2Num = function(e, o) {
return t.neo(e.x * o, e.y * o);
}, t.mulNumVec2 = function(e, o) {
return t.neo(e * o.x, e * o.y);
}, t.prototype.neg = function() {
return this.x = -this.x, this.y = -this.y, this;
}, t.neg = function(e) {
return t.neo(-e.x, -e.y);
}, t.abs = function(e) {
return t.neo(Xu(e.x), Xu(e.y));
}, t.mid = function(e, o) {
return t.neo(.5 * (e.x + o.x), .5 * (e.y + o.y));
}, t.upper = function(e, o) {
return t.neo(Qu(e.x, o.x), Qu(e.y, o.y));
}, t.lower = function(e, o) {
return t.neo(Ku(e.x, o.x), Ku(e.y, o.y));
}, t.prototype.clamp = function(t) {
var e = this.x * this.x + this.y * this.y;
if (e > t * t) {
var o = t / Ju(e);
this.x *= o, this.y *= o;
}
return this;
}, t.clamp = function(e, o) {
var n = t.neo(e.x, e.y);
return n.clamp(o), n;
}, t.clampVec2 = function(t, e, o) {
return {
x: Uu(t.x, null == e ? void 0 : e.x, null == o ? void 0 : o.x),
y: Uu(t.y, null == e ? void 0 : e.y, null == o ? void 0 : o.y)
};
}, t.scaleFn = function(e, o) {
return function(n) {
return t.neo(n.x * e, n.y * o);
};
}, t.translateFn = function(e, o) {
return function(n) {
return t.neo(n.x + e, n.y + o);
};
}, t;
}(), $u = Math.max, th = Math.min, eh = function() {
function t(e, o) {
if (!(this instanceof t)) return new t(e, o);
this.lowerBound = Zu.zero(), this.upperBound = Zu.zero(), "object" == typeof e && this.lowerBound.setVec2(e), 
"object" == typeof o ? this.upperBound.setVec2(o) : "object" == typeof e && this.upperBound.setVec2(e);
}
return t.prototype.isValid = function() {
return t.isValid(this);
}, t.isValid = function(t) {
return null != t && Zu.isValid(t.lowerBound) && Zu.isValid(t.upperBound) && Zu.sub(t.upperBound, t.lowerBound).lengthSquared() >= 0;
}, t.assert = function() {}, t.prototype.getCenter = function() {
return Zu.neo(.5 * (this.lowerBound.x + this.upperBound.x), .5 * (this.lowerBound.y + this.upperBound.y));
}, t.prototype.getExtents = function() {
return Zu.neo(.5 * (this.upperBound.x - this.lowerBound.x), .5 * (this.upperBound.y - this.lowerBound.y));
}, t.prototype.getPerimeter = function() {
return 2 * (this.upperBound.x - this.lowerBound.x + this.upperBound.y - this.lowerBound.y);
}, t.prototype.combine = function(t, e) {
e = e || this;
var o = t.lowerBound, n = t.upperBound, i = e.lowerBound, r = e.upperBound, s = th(o.x, i.x), a = th(o.y, i.y), l = $u(r.x, n.x), c = $u(r.y, n.y);
this.lowerBound.setNum(s, a), this.upperBound.setNum(l, c);
}, t.prototype.combinePoints = function(t, e) {
this.lowerBound.setNum(th(t.x, e.x), th(t.y, e.y)), this.upperBound.setNum($u(t.x, e.x), $u(t.y, e.y));
}, t.prototype.set = function(t) {
this.lowerBound.setNum(t.lowerBound.x, t.lowerBound.y), this.upperBound.setNum(t.upperBound.x, t.upperBound.y);
}, t.prototype.contains = function(t) {
var e = !0;
return (e = (e = (e = e && this.lowerBound.x <= t.lowerBound.x) && this.lowerBound.y <= t.lowerBound.y) && t.upperBound.x <= this.upperBound.x) && t.upperBound.y <= this.upperBound.y;
}, t.prototype.extend = function(e) {
return t.extend(this, e), this;
}, t.extend = function(t, e) {
return t.lowerBound.x -= e, t.lowerBound.y -= e, t.upperBound.x += e, t.upperBound.y += e, 
t;
}, t.testOverlap = function(t, e) {
var o = e.lowerBound.x - t.upperBound.x, n = t.lowerBound.x - e.upperBound.x, i = e.lowerBound.y - t.upperBound.y, r = t.lowerBound.y - e.upperBound.y;
return !(o > 0 || i > 0 || n > 0 || r > 0);
}, t.areEqual = function(t, e) {
return Zu.areEqual(t.lowerBound, e.lowerBound) && Zu.areEqual(t.upperBound, e.upperBound);
}, t.diff = function(t, e) {
var o = $u(0, th(t.upperBound.x, e.upperBound.x) - $u(e.lowerBound.x, t.lowerBound.x)), n = $u(0, th(t.upperBound.y, e.upperBound.y) - $u(e.lowerBound.y, t.lowerBound.y));
return (t.upperBound.x - t.lowerBound.x) * (t.upperBound.y - t.lowerBound.y) + (e.upperBound.x - e.lowerBound.x) * (e.upperBound.y - e.lowerBound.y) - o * n;
}, t.prototype.rayCast = function(t, e) {
var o, n, i = -1 / 0, r = 1 / 0, s = e.p1, a = Zu.sub(e.p2, e.p1), l = Zu.abs(a), c = Zu.zero();
if (l.x < ju) {
if (s.x < this.lowerBound.x || this.upperBound.x < s.x) return !1;
} else {
var u = 1 / a.x, h = -1;
if ((o = (this.lowerBound.x - s.x) * u) > (n = (this.upperBound.x - s.x) * u)) {
var d = o;
o = n, n = d, h = 1;
}
if (o > i && (c.setZero(), c.x = h, i = o), i > (r = th(r, n))) return !1;
}
if (l.y < ju) {
if (s.y < this.lowerBound.y || this.upperBound.y < s.y) return !1;
} else if (u = 1 / a.y, h = -1, (o = (this.lowerBound.y - s.y) * u) > (n = (this.upperBound.y - s.y) * u) && (d = o, 
o = n, n = d, h = 1), o > i && (c.setZero(), c.y = h, i = o), i > (r = th(r, n))) return !1;
return !(i < 0 || e.maxFraction < i || (t.fraction = i, t.normal = c, 0));
}, t.prototype.toString = function() {
return JSON.stringify(this);
}, t.combinePoints = function(t, e, o) {
return t.lowerBound.x = th(e.x, o.x), t.lowerBound.y = th(e.y, o.y), t.upperBound.x = $u(e.x, o.x), 
t.upperBound.y = $u(e.y, o.y), t;
}, t.combinedPerimeter = function(t, e) {
var o = th(t.lowerBound.x, e.lowerBound.x), n = th(t.lowerBound.y, e.lowerBound.y);
return 2 * ($u(t.upperBound.x, e.upperBound.x) - o + $u(t.upperBound.y, e.upperBound.y) - n);
}, t;
}(), oh = Math.PI, nh = function() {
function t() {}
return Object.defineProperty(t, "polygonRadius", {
get: function() {
return 2 * t.linearSlop;
},
enumerable: !1,
configurable: !0
}), t.lengthUnitsPerMeter = 1, t.maxManifoldPoints = 2, t.maxPolygonVertices = 12, 
t.aabbExtension = .1, t.aabbMultiplier = 2, t.linearSlop = .005, t.angularSlop = 2 / 180 * oh, 
t.maxSubSteps = 8, t.maxTOIContacts = 32, t.maxTOIIterations = 20, t.maxDistanceIterations = 20, 
t.velocityThreshold = 1, t.maxLinearCorrection = .2, t.maxAngularCorrection = 8 / 180 * oh, 
t.maxTranslation = 2, t.maxRotation = .5 * oh, t.baumgarte = .2, t.toiBaugarte = .75, 
t.timeToSleep = .5, t.linearSleepTolerance = .01, t.angularSleepTolerance = 2 / 180 * oh, 
t;
}(), ih = function() {
function t() {}
return Object.defineProperty(t, "maxManifoldPoints", {
get: function() {
return nh.maxManifoldPoints;
},
enumerable: !1,
configurable: !0
}), Object.defineProperty(t, "maxPolygonVertices", {
get: function() {
return nh.maxPolygonVertices;
},
enumerable: !1,
configurable: !0
}), Object.defineProperty(t, "aabbExtension", {
get: function() {
return nh.aabbExtension * nh.lengthUnitsPerMeter;
},
enumerable: !1,
configurable: !0
}), Object.defineProperty(t, "aabbMultiplier", {
get: function() {
return nh.aabbMultiplier;
},
enumerable: !1,
configurable: !0
}), Object.defineProperty(t, "linearSlop", {
get: function() {
return nh.linearSlop * nh.lengthUnitsPerMeter;
},
enumerable: !1,
configurable: !0
}), Object.defineProperty(t, "linearSlopSquared", {
get: function() {
return nh.linearSlop * nh.lengthUnitsPerMeter * nh.linearSlop * nh.lengthUnitsPerMeter;
},
enumerable: !1,
configurable: !0
}), Object.defineProperty(t, "angularSlop", {
get: function() {
return nh.angularSlop;
},
enumerable: !1,
configurable: !0
}), Object.defineProperty(t, "polygonRadius", {
get: function() {
return 2 * nh.linearSlop;
},
enumerable: !1,
configurable: !0
}), Object.defineProperty(t, "maxSubSteps", {
get: function() {
return nh.maxSubSteps;
},
enumerable: !1,
configurable: !0
}), Object.defineProperty(t, "maxTOIContacts", {
get: function() {
return nh.maxTOIContacts;
},
enumerable: !1,
configurable: !0
}), Object.defineProperty(t, "maxTOIIterations", {
get: function() {
return nh.maxTOIIterations;
},
enumerable: !1,
configurable: !0
}), Object.defineProperty(t, "maxDistanceIterations", {
get: function() {
return nh.maxDistanceIterations;
},
enumerable: !1,
configurable: !0
}), Object.defineProperty(t, "velocityThreshold", {
get: function() {
return nh.velocityThreshold * nh.lengthUnitsPerMeter;
},
enumerable: !1,
configurable: !0
}), Object.defineProperty(t, "maxLinearCorrection", {
get: function() {
return nh.maxLinearCorrection * nh.lengthUnitsPerMeter;
},
enumerable: !1,
configurable: !0
}), Object.defineProperty(t, "maxAngularCorrection", {
get: function() {
return nh.maxAngularCorrection;
},
enumerable: !1,
configurable: !0
}), Object.defineProperty(t, "maxTranslation", {
get: function() {
return nh.maxTranslation * nh.lengthUnitsPerMeter;
},
enumerable: !1,
configurable: !0
}), Object.defineProperty(t, "maxTranslationSquared", {
get: function() {
return nh.maxTranslation * nh.lengthUnitsPerMeter * nh.maxTranslation * nh.lengthUnitsPerMeter;
},
enumerable: !1,
configurable: !0
}), Object.defineProperty(t, "maxRotation", {
get: function() {
return nh.maxRotation;
},
enumerable: !1,
configurable: !0
}), Object.defineProperty(t, "maxRotationSquared", {
get: function() {
return nh.maxRotation * nh.maxRotation;
},
enumerable: !1,
configurable: !0
}), Object.defineProperty(t, "baumgarte", {
get: function() {
return nh.baumgarte;
},
enumerable: !1,
configurable: !0
}), Object.defineProperty(t, "toiBaugarte", {
get: function() {
return nh.toiBaugarte;
},
enumerable: !1,
configurable: !0
}), Object.defineProperty(t, "timeToSleep", {
get: function() {
return nh.timeToSleep;
},
enumerable: !1,
configurable: !0
}), Object.defineProperty(t, "linearSleepTolerance", {
get: function() {
return nh.linearSleepTolerance * nh.lengthUnitsPerMeter;
},
enumerable: !1,
configurable: !0
}), Object.defineProperty(t, "linearSleepToleranceSqr", {
get: function() {
return nh.linearSleepTolerance * nh.lengthUnitsPerMeter * nh.linearSleepTolerance * nh.lengthUnitsPerMeter;
},
enumerable: !1,
configurable: !0
}), Object.defineProperty(t, "angularSleepTolerance", {
get: function() {
return nh.angularSleepTolerance;
},
enumerable: !1,
configurable: !0
}), Object.defineProperty(t, "angularSleepToleranceSqr", {
get: function() {
return nh.angularSleepTolerance * nh.angularSleepTolerance;
},
enumerable: !1,
configurable: !0
}), t;
}(), rh = function() {
function t(t) {
this._list = [], this._max = 1 / 0, this._hasCreateFn = !1, this._createCount = 0, 
this._hasAllocateFn = !1, this._allocateCount = 0, this._hasReleaseFn = !1, this._releaseCount = 0, 
this._hasDisposeFn = !1, this._disposeCount = 0, this._list = [], this._max = t.max || this._max, 
this._createFn = t.create, this._hasCreateFn = "function" == typeof this._createFn, 
this._allocateFn = t.allocate, this._hasAllocateFn = "function" == typeof this._allocateFn, 
this._releaseFn = t.release, this._hasReleaseFn = "function" == typeof this._releaseFn, 
this._disposeFn = t.dispose, this._hasDisposeFn = "function" == typeof this._disposeFn;
}
return t.prototype.max = function(t) {
return "number" == typeof t ? (this._max = t, this) : this._max;
}, t.prototype.size = function() {
return this._list.length;
}, t.prototype.allocate = function() {
var t;
return this._list.length > 0 ? t = this._list.shift() : (this._createCount++, t = this._hasCreateFn ? this._createFn() : {}), 
this._allocateCount++, this._hasAllocateFn && this._allocateFn(t), t;
}, t.prototype.release = function(t) {
this._list.length < this._max ? (this._releaseCount++, this._hasReleaseFn && this._releaseFn(t), 
this._list.push(t)) : (this._disposeCount++, this._hasDisposeFn && (t = this._disposeFn(t)));
}, t.prototype.toString = function() {
return " +" + this._createCount + " >" + this._allocateCount + " <" + this._releaseCount + " -" + this._disposeCount + " =" + this._list.length + "/" + this._max;
}, t;
}(), sh = Math.abs, ah = Math.max, lh = function() {
function t(t) {
this.aabb = new eh(), this.userData = null, this.parent = null, this.child1 = null, 
this.child2 = null, this.height = -1, this.id = t;
}
return t.prototype.toString = function() {
return this.id + ": " + this.userData;
}, t.prototype.isLeaf = function() {
return null == this.child1;
}, t;
}(), ch = new rh({
create: function() {
return new lh();
},
release: function(t) {
t.userData = null, t.parent = null, t.child1 = null, t.child2 = null, t.height = -1, 
t.id = void 0;
}
}), uh = function() {
function t() {
this.inputPool = new rh({
create: function() {
return {};
},
release: function() {}
}), this.stackPool = new rh({
create: function() {
return [];
},
release: function(t) {
t.length = 0;
}
}), this.iteratorPool = new rh({
create: function() {
return new hh();
},
release: function(t) {
t.close();
}
}), this.m_root = null, this.m_nodes = {}, this.m_lastProxyId = 0;
}
return t.prototype.getUserData = function(t) {
return this.m_nodes[t].userData;
}, t.prototype.getFatAABB = function(t) {
return this.m_nodes[t].aabb;
}, t.prototype.allocateNode = function() {
var t = ch.allocate();
return t.id = ++this.m_lastProxyId, this.m_nodes[t.id] = t, t;
}, t.prototype.freeNode = function(t) {
delete this.m_nodes[t.id], ch.release(t);
}, t.prototype.createProxy = function(t, e) {
var o = this.allocateNode();
return o.aabb.set(t), eh.extend(o.aabb, ih.aabbExtension), o.userData = e, o.height = 0, 
this.insertLeaf(o), o.id;
}, t.prototype.destroyProxy = function(t) {
var e = this.m_nodes[t];
this.removeLeaf(e), this.freeNode(e);
}, t.prototype.moveProxy = function(t, e, o) {
var n = this.m_nodes[t];
return !n.aabb.contains(e) && (this.removeLeaf(n), n.aabb.set(e), e = n.aabb, eh.extend(e, ih.aabbExtension), 
o.x < 0 ? e.lowerBound.x += o.x * ih.aabbMultiplier : e.upperBound.x += o.x * ih.aabbMultiplier, 
o.y < 0 ? e.lowerBound.y += o.y * ih.aabbMultiplier : e.upperBound.y += o.y * ih.aabbMultiplier, 
this.insertLeaf(n), !0);
}, t.prototype.insertLeaf = function(t) {
if (null == this.m_root) return this.m_root = t, void (this.m_root.parent = null);
for (var e = t.aabb, o = this.m_root; !o.isLeaf(); ) {
var n = o.child1, i = o.child2, r = o.aabb.getPerimeter(), s = eh.combinedPerimeter(o.aabb, e), a = 2 * s, l = 2 * (s - r), c = eh.combinedPerimeter(e, n.aabb) + l;
n.isLeaf() || (c -= n.aabb.getPerimeter());
var u = eh.combinedPerimeter(e, i.aabb) + l;
if (i.isLeaf() || (u -= i.aabb.getPerimeter()), a < c && a < u) break;
o = c < u ? n : i;
}
var h = o, d = h.parent, p = this.allocateNode();
for (p.parent = d, p.userData = null, p.aabb.combine(e, h.aabb), p.height = h.height + 1, 
null != d ? (d.child1 === h ? d.child1 = p : d.child2 = p, p.child1 = h, p.child2 = t, 
h.parent = p, t.parent = p) : (p.child1 = h, p.child2 = t, h.parent = p, t.parent = p, 
this.m_root = p), o = t.parent; null != o; ) n = (o = this.balance(o)).child1, i = o.child2, 
o.height = 1 + ah(n.height, i.height), o.aabb.combine(n.aabb, i.aabb), o = o.parent;
}, t.prototype.removeLeaf = function(t) {
if (t !== this.m_root) {
var e, o = t.parent, n = o.parent;
if (e = o.child1 === t ? o.child2 : o.child1, null != n) {
n.child1 === o ? n.child1 = e : n.child2 = e, e.parent = n, this.freeNode(o);
for (var i = n; null != i; ) {
var r = (i = this.balance(i)).child1, s = i.child2;
i.aabb.combine(r.aabb, s.aabb), i.height = 1 + ah(r.height, s.height), i = i.parent;
}
} else this.m_root = e, e.parent = null, this.freeNode(o);
} else this.m_root = null;
}, t.prototype.balance = function(t) {
var e = t;
if (e.isLeaf() || e.height < 2) return t;
var o = e.child1, n = e.child2, i = n.height - o.height;
if (i > 1) {
var r = n.child1, s = n.child2;
return n.child1 = e, n.parent = e.parent, e.parent = n, null != n.parent ? n.parent.child1 === t ? n.parent.child1 = n : n.parent.child2 = n : this.m_root = n, 
r.height > s.height ? (n.child2 = r, e.child2 = s, s.parent = e, e.aabb.combine(o.aabb, s.aabb), 
n.aabb.combine(e.aabb, r.aabb), e.height = 1 + ah(o.height, s.height), n.height = 1 + ah(e.height, r.height)) : (n.child2 = s, 
e.child2 = r, r.parent = e, e.aabb.combine(o.aabb, r.aabb), n.aabb.combine(e.aabb, s.aabb), 
e.height = 1 + ah(o.height, r.height), n.height = 1 + ah(e.height, s.height)), n;
}
if (i < -1) {
var a = o.child1, l = o.child2;
return o.child1 = e, o.parent = e.parent, e.parent = o, null != o.parent ? o.parent.child1 === e ? o.parent.child1 = o : o.parent.child2 = o : this.m_root = o, 
a.height > l.height ? (o.child2 = a, e.child1 = l, l.parent = e, e.aabb.combine(n.aabb, l.aabb), 
o.aabb.combine(e.aabb, a.aabb), e.height = 1 + ah(n.height, l.height), o.height = 1 + ah(e.height, a.height)) : (o.child2 = l, 
e.child1 = a, a.parent = e, e.aabb.combine(n.aabb, a.aabb), o.aabb.combine(e.aabb, l.aabb), 
e.height = 1 + ah(n.height, a.height), o.height = 1 + ah(e.height, l.height)), o;
}
return e;
}, t.prototype.getHeight = function() {
return null == this.m_root ? 0 : this.m_root.height;
}, t.prototype.getAreaRatio = function() {
if (null == this.m_root) return 0;
for (var t, e = this.m_root.aabb.getPerimeter(), o = 0, n = this.iteratorPool.allocate().preorder(this.m_root); t = n.next(); ) t.height < 0 || (o += t.aabb.getPerimeter());
return this.iteratorPool.release(n), o / e;
}, t.prototype.computeHeight = function(t) {
var e;
if ((e = void 0 !== t ? this.m_nodes[t] : this.m_root).isLeaf()) return 0;
var o = this.computeHeight(e.child1.id), n = this.computeHeight(e.child2.id);
return 1 + ah(o, n);
}, t.prototype.validateStructure = function(t) {
if (null != t) {
this.m_root;
var e = t.child1, o = t.child2;
t.isLeaf() || (this.validateStructure(e), this.validateStructure(o));
}
}, t.prototype.validateMetrics = function(t) {
if (null != t) {
var e = t.child1, o = t.child2;
t.isLeaf() || (this.validateMetrics(e), this.validateMetrics(o));
}
}, t.prototype.validate = function() {}, t.prototype.getMaxBalance = function() {
for (var t, e = 0, o = this.iteratorPool.allocate().preorder(this.m_root); t = o.next(); ) if (!(t.height <= 1)) {
var n = sh(t.child2.height - t.child1.height);
e = ah(e, n);
}
return this.iteratorPool.release(o), e;
}, t.prototype.rebuildBottomUp = function() {
for (var t, e = [], o = 0, n = this.iteratorPool.allocate().preorder(this.m_root); t = n.next(); ) t.height < 0 || (t.isLeaf() ? (t.parent = null, 
e[o] = t, ++o) : this.freeNode(t));
for (this.iteratorPool.release(n); o > 1; ) {
for (var i = 1 / 0, r = -1, s = -1, a = 0; a < o; ++a) for (var l = e[a].aabb, c = a + 1; c < o; ++c) {
var u = e[c].aabb, h = eh.combinedPerimeter(l, u);
h < i && (r = a, s = c, i = h);
}
var d = e[r], p = e[s], m = this.allocateNode();
m.child1 = d, m.child2 = p, m.height = 1 + ah(d.height, p.height), m.aabb.combine(d.aabb, p.aabb), 
m.parent = null, d.parent = m, p.parent = m, e[s] = e[o - 1], e[r] = m, --o;
}
this.m_root = e[0];
}, t.prototype.shiftOrigin = function(t) {
for (var e, o = this.iteratorPool.allocate().preorder(this.m_root); e = o.next(); ) {
var n = e.aabb;
n.lowerBound.x -= t.x, n.lowerBound.y -= t.y, n.upperBound.x -= t.x, n.upperBound.y -= t.y;
}
this.iteratorPool.release(o);
}, t.prototype.query = function(t, e) {
var o = this.stackPool.allocate();
for (o.push(this.m_root); o.length > 0; ) {
var n = o.pop();
if (null != n && eh.testOverlap(n.aabb, t)) if (n.isLeaf()) {
if (!1 === e(n.id)) return;
} else o.push(n.child1), o.push(n.child2);
}
this.stackPool.release(o);
}, t.prototype.rayCast = function(t, e) {
var o = t.p1, n = t.p2, i = Zu.sub(n, o);
i.normalize();
var r = Zu.crossNumVec2(1, i), s = Zu.abs(r), a = t.maxFraction, l = new eh(), c = Zu.combine(1 - a, o, a, n);
l.combinePoints(o, c);
var u = this.stackPool.allocate(), h = this.inputPool.allocate();
for (u.push(this.m_root); u.length > 0; ) {
var d = u.pop();
if (null != d && !1 !== eh.testOverlap(d.aabb, l)) {
var p = d.aabb.getCenter(), m = d.aabb.getExtents();
if (!(sh(Zu.dot(r, Zu.sub(o, p))) - Zu.dot(s, m) > 0)) if (d.isLeaf()) {
h.p1 = Zu.clone(t.p1), h.p2 = Zu.clone(t.p2), h.maxFraction = a;
var _ = e(h, d.id);
if (0 === _) break;
_ > 0 && (a = _, c = Zu.combine(1 - a, o, a, n), l.combinePoints(o, c));
} else u.push(d.child1), u.push(d.child2);
}
}
this.stackPool.release(u), this.inputPool.release(h);
}, t;
}(), hh = function() {
function t() {
this.parents = [], this.states = [];
}
return t.prototype.preorder = function(t) {
return this.parents.length = 0, this.parents.push(t), this.states.length = 0, this.states.push(0), 
this;
}, t.prototype.next = function() {
for (;this.parents.length > 0; ) {
var t = this.parents.length - 1, e = this.parents[t];
if (0 === this.states[t]) return this.states[t] = 1, e;
if (1 === this.states[t] && (this.states[t] = 2, e.child1)) return this.parents.push(e.child1), 
this.states.push(1), e.child1;
if (2 === this.states[t] && (this.states[t] = 3, e.child2)) return this.parents.push(e.child2), 
this.states.push(1), e.child2;
this.parents.pop(), this.states.pop();
}
}, t.prototype.close = function() {
this.parents.length = 0;
}, t;
}(), dh = Math.max, ph = Math.min, mh = function() {
function t() {
var t = this;
this.m_tree = new uh(), this.m_moveBuffer = [], this.query = function(e, o) {
t.m_tree.query(e, o);
}, this.queryCallback = function(e) {
if (e === t.m_queryProxyId) return !0;
var o = ph(e, t.m_queryProxyId), n = dh(e, t.m_queryProxyId), i = t.m_tree.getUserData(o), r = t.m_tree.getUserData(n);
return t.m_callback(i, r), !0;
};
}
return t.prototype.getUserData = function(t) {
return this.m_tree.getUserData(t);
}, t.prototype.testOverlap = function(t, e) {
var o = this.m_tree.getFatAABB(t), n = this.m_tree.getFatAABB(e);
return eh.testOverlap(o, n);
}, t.prototype.getFatAABB = function(t) {
return this.m_tree.getFatAABB(t);
}, t.prototype.getProxyCount = function() {
return this.m_moveBuffer.length;
}, t.prototype.getTreeHeight = function() {
return this.m_tree.getHeight();
}, t.prototype.getTreeBalance = function() {
return this.m_tree.getMaxBalance();
}, t.prototype.getTreeQuality = function() {
return this.m_tree.getAreaRatio();
}, t.prototype.rayCast = function(t, e) {
this.m_tree.rayCast(t, e);
}, t.prototype.shiftOrigin = function(t) {
this.m_tree.shiftOrigin(t);
}, t.prototype.createProxy = function(t, e) {
var o = this.m_tree.createProxy(t, e);
return this.bufferMove(o), o;
}, t.prototype.destroyProxy = function(t) {
this.unbufferMove(t), this.m_tree.destroyProxy(t);
}, t.prototype.moveProxy = function(t, e, o) {
this.m_tree.moveProxy(t, e, o) && this.bufferMove(t);
}, t.prototype.touchProxy = function(t) {
this.bufferMove(t);
}, t.prototype.bufferMove = function(t) {
this.m_moveBuffer.push(t);
}, t.prototype.unbufferMove = function(t) {
for (var e = 0; e < this.m_moveBuffer.length; ++e) this.m_moveBuffer[e] === t && (this.m_moveBuffer[e] = null);
}, t.prototype.updatePairs = function(t) {
for (this.m_callback = t; this.m_moveBuffer.length > 0; ) if (this.m_queryProxyId = this.m_moveBuffer.pop(), 
null !== this.m_queryProxyId) {
var e = this.m_tree.getFatAABB(this.m_queryProxyId);
this.m_tree.query(e, this.queryCallback);
}
}, t;
}(), _h = Math.sin, fh = Math.cos, yh = Math.sqrt;
function vh(t, e) {
return {
x: t,
y: e
};
}
function gh(t, e, o) {
return t.x = e, t.y = o, t;
}
function Ah(t, e) {
return t.x = e.x, t.y = e.y, t;
}
function xh(t) {
return t.x = 0, t.y = 0, t;
}
function bh(t) {
return t.x = -t.x, t.y = -t.y, t;
}
function Ch(t, e) {
return t.x += e.x, t.y += e.y, t;
}
function wh(t, e) {
return t.x -= e.x, t.y -= e.y, t;
}
function Sh(t, e, o) {
return t.x = e.x - o.x, t.y = e.y - o.y, t;
}
function Rh(t, e) {
return t.x *= e, t.y *= e, t;
}
function Bh(t, e, o) {
return t.x = e * o.x, t.y = e * o.y, t;
}
function Th(t, e, o) {
return t.x += e * o.x, t.y += e * o.y, t;
}
function Fh(t, e, o) {
return t.x -= e * o.x, t.y -= e * o.y, t;
}
function Mh(t, e, o, n, i) {
return t.x = e * o.x + n * i.x, t.y = e * o.y + n * i.y, t;
}
function Ih(t, e, o, n, i, r, s) {
return t.x = e * o.x + n * i.x + r * s.x, t.y = e * o.y + n * i.y + r * s.y, t;
}
function Dh(t) {
var e = yh(t.x * t.x + t.y * t.y);
if (e > 0) {
var o = 1 / e;
t.x *= o, t.y *= o;
}
return t;
}
function Nh(t, e, o) {
var n = o * e.y, i = -o * e.x;
return t.x = n, t.y = i, t;
}
function Ph(t, e, o) {
var n = -e * o.y, i = e * o.x;
return t.x = n, t.y = i, t;
}
function Eh(t, e) {
return t.x * e.y - t.y * e.x;
}
function Lh(t, e) {
return t.x * e.x + t.y * e.y;
}
function Wh(t) {
return t.x * t.x + t.y * t.y;
}
function Vh(t, e) {
var o = t.x - e.x, n = t.y - e.y;
return yh(o * o + n * n);
}
function Oh(t, e) {
var o = t.x - e.x, n = t.y - e.y;
return o * o + n * n;
}
function kh(t, e, o) {
return t.x = e.c * o.x - e.s * o.y, t.y = e.s * o.x + e.c * o.y, t;
}
function Gh(t, e, o) {
var n = e.c * o.x + e.s * o.y, i = -e.s * o.x + e.c * o.y;
return t.x = n, t.y = i, t;
}
function zh(t, e, o) {
return {
p: vh(t, e),
q: (n = o, {
s: _h(n),
c: fh(n)
})
};
var n;
}
function jh(t, e) {
return t.p.x = e.p.x, t.p.y = e.p.y, t.q.s = e.q.s, t.q.c = e.q.c, t;
}
function qh(t, e, o) {
var n = e.q.c * o.x - e.q.s * o.y + e.p.x, i = e.q.s * o.x + e.q.c * o.y + e.p.y;
return t.x = n, t.y = i, t;
}
function Hh(t, e, o) {
var n = o.x - e.p.x, i = o.y - e.p.y, r = e.q.c * n + e.q.s * i, s = -e.q.s * n + e.q.c * i;
return t.x = r, t.y = s, t;
}
function Uh(t, e, o, n) {
var i = e.q.c * n.x - e.q.s * n.y + e.p.x, r = e.q.s * n.x + e.q.c * n.y + e.p.y, s = i - o.p.x, a = r - o.p.y, l = o.q.c * s + o.q.s * a, c = -o.q.s * s + o.q.c * a;
return t.x = l, t.y = c, t;
}
function Yh(t, e, o) {
var n = e.q.c * o.q.c + e.q.s * o.q.s, i = e.q.c * o.q.s - e.q.s * o.q.c, r = e.q.c * (o.p.x - e.p.x) + e.q.s * (o.p.y - e.p.y), s = -e.q.s * (o.p.x - e.p.x) + e.q.c * (o.p.y - e.p.y);
return t.q.c = n, t.q.s = i, t.p.x = r, t.p.y = s, t;
}
var Xh = Math.sin, Jh = Math.cos, Qh = Math.atan2, Kh = function() {
function t(e) {
if (!(this instanceof t)) return new t(e);
"number" == typeof e ? this.setAngle(e) : "object" == typeof e ? this.setRot(e) : this.setIdentity();
}
return t.neo = function(e) {
var o = Object.create(t.prototype);
return o.setAngle(e), o;
}, t.clone = function(e) {
var o = Object.create(t.prototype);
return o.s = e.s, o.c = e.c, o;
}, t.identity = function() {
var e = Object.create(t.prototype);
return e.s = 0, e.c = 1, e;
}, t.isValid = function(t) {
return null != t && Number.isFinite(t.s) && Number.isFinite(t.c);
}, t.assert = function() {}, t.prototype.setIdentity = function() {
this.s = 0, this.c = 1;
}, t.prototype.set = function(t) {
"object" == typeof t ? (this.s = t.s, this.c = t.c) : (this.s = Xh(t), this.c = Jh(t));
}, t.prototype.setRot = function(t) {
this.s = t.s, this.c = t.c;
}, t.prototype.setAngle = function(t) {
this.s = Xh(t), this.c = Jh(t);
}, t.prototype.getAngle = function() {
return Qh(this.s, this.c);
}, t.prototype.getXAxis = function() {
return Zu.neo(this.c, this.s);
}, t.prototype.getYAxis = function() {
return Zu.neo(-this.s, this.c);
}, t.mul = function(e, o) {
if ("c" in o && "s" in o) {
var n = t.identity();
return n.s = e.s * o.c + e.c * o.s, n.c = e.c * o.c - e.s * o.s, n;
}
if ("x" in o && "y" in o) return Zu.neo(e.c * o.x - e.s * o.y, e.s * o.x + e.c * o.y);
}, t.mulRot = function(e, o) {
var n = t.identity();
return n.s = e.s * o.c + e.c * o.s, n.c = e.c * o.c - e.s * o.s, n;
}, t.mulVec2 = function(t, e) {
return Zu.neo(t.c * e.x - t.s * e.y, t.s * e.x + t.c * e.y);
}, t.mulSub = function(t, e, o) {
var n = t.c * (e.x - o.x) - t.s * (e.y - o.y), i = t.s * (e.x - o.x) + t.c * (e.y - o.y);
return Zu.neo(n, i);
}, t.mulT = function(e, o) {
if ("c" in o && "s" in o) {
var n = t.identity();
return n.s = e.c * o.s - e.s * o.c, n.c = e.c * o.c + e.s * o.s, n;
}
if ("x" in o && "y" in o) return Zu.neo(e.c * o.x + e.s * o.y, -e.s * o.x + e.c * o.y);
}, t.mulTRot = function(e, o) {
var n = t.identity();
return n.s = e.c * o.s - e.s * o.c, n.c = e.c * o.c + e.s * o.s, n;
}, t.mulTVec2 = function(t, e) {
return Zu.neo(t.c * e.x + t.s * e.y, -t.s * e.x + t.c * e.y);
}, t;
}(), Zh = Math.atan2, $h = Math.PI, td = vh(0, 0), ed = function() {
function t() {
this.localCenter = Zu.zero(), this.c = Zu.zero(), this.a = 0, this.alpha0 = 0, this.c0 = Zu.zero(), 
this.a0 = 0;
}
return t.prototype.recycle = function() {
xh(this.localCenter), xh(this.c), this.a = 0, this.alpha0 = 0, xh(this.c0), this.a0 = 0;
}, t.prototype.setTransform = function(t) {
qh(td, t, this.localCenter), Ah(this.c, td), Ah(this.c0, td), this.a = this.a0 = Zh(t.q.s, t.q.c);
}, t.prototype.setLocalCenter = function(t, e) {
Ah(this.localCenter, t), qh(td, e, this.localCenter), Ah(this.c, td), Ah(this.c0, td);
}, t.prototype.getTransform = function(t, e) {
var o, n;
void 0 === e && (e = 0), o = t.q, n = (1 - e) * this.a0 + e * this.a, o.c = fh(n), 
o.s = _h(n), Mh(t.p, 1 - e, this.c0, e, this.c), wh(t.p, kh(td, t.q, this.localCenter));
}, t.prototype.advance = function(t) {
var e = (t - this.alpha0) / (1 - this.alpha0);
Mh(this.c0, e, this.c, 1 - e, this.c0), this.a0 = e * this.a + (1 - e) * this.a0, 
this.alpha0 = t;
}, t.prototype.forward = function() {
this.a0 = this.a, Ah(this.c0, this.c);
}, t.prototype.normalize = function() {
var t = Hu(this.a0, -$h, +$h);
this.a -= this.a0 - t, this.a0 = t;
}, t.prototype.set = function(t) {
Ah(this.localCenter, t.localCenter), Ah(this.c, t.c), this.a = t.a, this.alpha0 = t.alpha0, 
Ah(this.c0, t.c0), this.a0 = t.a0;
}, t;
}(), od = function() {
function t(e, o) {
if (!(this instanceof t)) return new t(e, o);
this.p = Zu.zero(), this.q = Kh.identity(), void 0 !== e && this.p.setVec2(e), void 0 !== o && this.q.setAngle(o);
}
return t.clone = function(e) {
var o = Object.create(t.prototype);
return o.p = Zu.clone(e.p), o.q = Kh.clone(e.q), o;
}, t.neo = function(e, o) {
var n = Object.create(t.prototype);
return n.p = Zu.clone(e), n.q = Kh.clone(o), n;
}, t.identity = function() {
var e = Object.create(t.prototype);
return e.p = Zu.zero(), e.q = Kh.identity(), e;
}, t.prototype.setIdentity = function() {
this.p.setZero(), this.q.setIdentity();
}, t.prototype.set = function(t, e) {
void 0 === e ? (this.p.set(t.p), this.q.set(t.q)) : (this.p.set(t), this.q.set(e));
}, t.prototype.setNum = function(t, e) {
this.p.setVec2(t), this.q.setAngle(e);
}, t.prototype.setTransform = function(t) {
this.p.setVec2(t.p), this.q.setRot(t.q);
}, t.isValid = function(t) {
return null != t && Zu.isValid(t.p) && Kh.isValid(t.q);
}, t.assert = function() {}, t.mul = function(e, o) {
if (Array.isArray(o)) {
for (var n = [], i = 0; i < o.length; i++) n[i] = t.mul(e, o[i]);
return n;
}
return "x" in o && "y" in o ? t.mulVec2(e, o) : "p" in o && "q" in o ? t.mulXf(e, o) : void 0;
}, t.mulAll = function(e, o) {
for (var n = [], i = 0; i < o.length; i++) n[i] = t.mul(e, o[i]);
return n;
}, t.mulFn = function(e) {
return function(o) {
return t.mul(e, o);
};
}, t.mulVec2 = function(t, e) {
var o = t.q.c * e.x - t.q.s * e.y + t.p.x, n = t.q.s * e.x + t.q.c * e.y + t.p.y;
return Zu.neo(o, n);
}, t.mulXf = function(e, o) {
var n = t.identity();
return n.q = Kh.mulRot(e.q, o.q), n.p = Zu.add(Kh.mulVec2(e.q, o.p), e.p), n;
}, t.mulT = function(e, o) {
return "x" in o && "y" in o ? t.mulTVec2(e, o) : "p" in o && "q" in o ? t.mulTXf(e, o) : void 0;
}, t.mulTVec2 = function(t, e) {
var o = e.x - t.p.x, n = e.y - t.p.y, i = t.q.c * o + t.q.s * n, r = -t.q.s * o + t.q.c * n;
return Zu.neo(i, r);
}, t.mulTXf = function(e, o) {
var n = t.identity();
return n.q.setRot(Kh.mulTRot(e.q, o.q)), n.p.setVec2(Kh.mulTVec2(e.q, Zu.sub(o.p, e.p))), 
n;
}, t;
}(), nd = function() {
this.v = Zu.zero(), this.w = 0;
}, id = Math.sin, rd = Math.cos, sd = function() {
function t() {
this.c = Zu.zero(), this.a = 0;
}
return t.prototype.getTransform = function(t, e) {
return t.q.c = rd(this.a), t.q.s = id(this.a), t.p.x = this.c.x - (t.q.c * e.x - t.q.s * e.y), 
t.p.y = this.c.y - (t.q.s * e.x + t.q.c * e.y), t;
}, t;
}();
function ad(t, e, o, n) {
return t.q.c = rd(n), t.q.s = id(n), t.p.x = o.x - (t.q.c * e.x - t.q.s * e.y), 
t.p.y = o.y - (t.q.s * e.x + t.q.c * e.y), t;
}
var ld = function() {
function t() {
this.style = {}, this.appData = {};
}
return t.isValid = function(t) {
return null != t && "string" == typeof t.m_type && "number" == typeof t.m_radius;
}, t;
}(), cd = new eh(), ud = new eh(), hd = vh(0, 0), dd = {
userData: null,
friction: .2,
restitution: 0,
density: 0,
isSensor: !1,
filterGroupIndex: 0,
filterCategoryBits: 1,
filterMaskBits: 65535
}, pd = function(t, e) {
this.aabb = new eh(), this.fixture = t, this.childIndex = e;
}, md = function() {
function t(t, e, o) {
this.style = {}, this.appData = {}, e.shape ? (o = e, e = e.shape) : "number" == typeof o && (o = {
density: o
}), o = Gu(o, dd), this.m_body = t, this.m_friction = o.friction, this.m_restitution = o.restitution, 
this.m_density = o.density, this.m_isSensor = o.isSensor, this.m_filterGroupIndex = o.filterGroupIndex, 
this.m_filterCategoryBits = o.filterCategoryBits, this.m_filterMaskBits = o.filterMaskBits, 
this.m_shape = e, this.m_next = null, this.m_proxies = [], this.m_proxyCount = 0;
for (var n = this.m_shape.getChildCount(), i = 0; i < n; ++i) this.m_proxies[i] = new pd(this, i);
this.m_userData = o.userData, "object" == typeof o.style && null !== o.style && (this.style = o.style);
}
return t.prototype._reset = function() {
var t = this.getBody(), e = t.m_world.m_broadPhase;
this.destroyProxies(e), this.m_shape._reset && this.m_shape._reset();
for (var o = this.m_shape.getChildCount(), n = 0; n < o; ++n) this.m_proxies[n] = new pd(this, n);
this.createProxies(e, t.m_xf), t.resetMassData();
}, t.prototype._serialize = function() {
return {
friction: this.m_friction,
restitution: this.m_restitution,
density: this.m_density,
isSensor: this.m_isSensor,
filterGroupIndex: this.m_filterGroupIndex,
filterCategoryBits: this.m_filterCategoryBits,
filterMaskBits: this.m_filterMaskBits,
shape: this.m_shape
};
}, t._deserialize = function(e, o, n) {
var i = n(ld, e.shape);
return i && new t(o, i, e);
}, t.prototype.getType = function() {
return this.m_shape.m_type;
}, t.prototype.getShape = function() {
return this.m_shape;
}, t.prototype.isSensor = function() {
return this.m_isSensor;
}, t.prototype.setSensor = function(t) {
t != this.m_isSensor && (this.m_body.setAwake(!0), this.m_isSensor = t);
}, t.prototype.getUserData = function() {
return this.m_userData;
}, t.prototype.setUserData = function(t) {
this.m_userData = t;
}, t.prototype.getBody = function() {
return this.m_body;
}, t.prototype.getNext = function() {
return this.m_next;
}, t.prototype.getDensity = function() {
return this.m_density;
}, t.prototype.setDensity = function(t) {
this.m_density = t;
}, t.prototype.getFriction = function() {
return this.m_friction;
}, t.prototype.setFriction = function(t) {
this.m_friction = t;
}, t.prototype.getRestitution = function() {
return this.m_restitution;
}, t.prototype.setRestitution = function(t) {
this.m_restitution = t;
}, t.prototype.testPoint = function(t) {
return this.m_shape.testPoint(this.m_body.getTransform(), t);
}, t.prototype.rayCast = function(t, e, o) {
return this.m_shape.rayCast(t, e, this.m_body.getTransform(), o);
}, t.prototype.getMassData = function(t) {
this.m_shape.computeMass(t, this.m_density);
}, t.prototype.getAABB = function(t) {
return this.m_proxies[t].aabb;
}, t.prototype.createProxies = function(t, e) {
this.m_proxyCount = this.m_shape.getChildCount();
for (var o = 0; o < this.m_proxyCount; ++o) {
var n = this.m_proxies[o];
this.m_shape.computeAABB(n.aabb, e, o), n.proxyId = t.createProxy(n.aabb, n);
}
}, t.prototype.destroyProxies = function(t) {
for (var e = 0; e < this.m_proxyCount; ++e) {
var o = this.m_proxies[e];
t.destroyProxy(o.proxyId), o.proxyId = null;
}
this.m_proxyCount = 0;
}, t.prototype.synchronize = function(t, e, o) {
for (var n = 0; n < this.m_proxyCount; ++n) {
var i = this.m_proxies[n];
this.m_shape.computeAABB(cd, e, i.childIndex), this.m_shape.computeAABB(ud, o, i.childIndex), 
i.aabb.combine(cd, ud), Sh(hd, o.p, e.p), t.moveProxy(i.proxyId, i.aabb, hd);
}
}, t.prototype.setFilterData = function(t) {
this.m_filterGroupIndex = t.groupIndex, this.m_filterCategoryBits = t.categoryBits, 
this.m_filterMaskBits = t.maskBits, this.refilter();
}, t.prototype.getFilterGroupIndex = function() {
return this.m_filterGroupIndex;
}, t.prototype.setFilterGroupIndex = function(t) {
this.m_filterGroupIndex = t, this.refilter();
}, t.prototype.getFilterCategoryBits = function() {
return this.m_filterCategoryBits;
}, t.prototype.setFilterCategoryBits = function(t) {
this.m_filterCategoryBits = t, this.refilter();
}, t.prototype.getFilterMaskBits = function() {
return this.m_filterMaskBits;
}, t.prototype.setFilterMaskBits = function(t) {
this.m_filterMaskBits = t, this.refilter();
}, t.prototype.refilter = function() {
if (null != this.m_body) {
for (var t = this.m_body.getContactList(); t; ) {
var e = t.contact, o = e.getFixtureA(), n = e.getFixtureB();
o != this && n != this || e.flagForFiltering(), t = t.next;
}
var i = this.m_body.getWorld();
if (null != i) for (var r = i.m_broadPhase, s = 0; s < this.m_proxyCount; ++s) r.touchProxy(this.m_proxies[s].proxyId);
}
}, t.prototype.shouldCollide = function(t) {
if (t.m_filterGroupIndex === this.m_filterGroupIndex && 0 !== t.m_filterGroupIndex) return t.m_filterGroupIndex > 0;
var e = 0 != (t.m_filterMaskBits & this.m_filterCategoryBits), o = 0 != (t.m_filterCategoryBits & this.m_filterMaskBits);
return e && o;
}, t;
}(), _d = "static", fd = "kinematic", yd = "dynamic", vd = vh(0, 0), gd = vh(0, 0), Ad = vh(0, 0), xd = vh(0, 0), bd = zh(0, 0, 0), Cd = {
type: _d,
position: Zu.zero(),
angle: 0,
linearVelocity: Zu.zero(),
angularVelocity: 0,
linearDamping: 0,
angularDamping: 0,
fixedRotation: !1,
bullet: !1,
gravityScale: 1,
allowSleep: !0,
awake: !0,
active: !0,
userData: null
}, wd = function() {
function t(t, e) {
this.style = {}, this.appData = {}, e = Gu(e, Cd), this.m_world = t, this.m_awakeFlag = e.awake, 
this.m_autoSleepFlag = e.allowSleep, this.m_bulletFlag = e.bullet, this.m_fixedRotationFlag = e.fixedRotation, 
this.m_activeFlag = e.active, this.m_islandFlag = !1, this.m_toiFlag = !1, this.m_userData = e.userData, 
this.m_type = e.type, this.m_type == yd ? (this.m_mass = 1, this.m_invMass = 1) : (this.m_mass = 0, 
this.m_invMass = 0), this.m_I = 0, this.m_invI = 0, this.m_xf = od.identity(), this.m_xf.p.setVec2(e.position), 
this.m_xf.q.setAngle(e.angle), this.m_sweep = new ed(), this.m_sweep.setTransform(this.m_xf), 
this.c_velocity = new nd(), this.c_position = new sd(), this.m_force = Zu.zero(), 
this.m_torque = 0, this.m_linearVelocity = Zu.clone(e.linearVelocity), this.m_angularVelocity = e.angularVelocity, 
this.m_linearDamping = e.linearDamping, this.m_angularDamping = e.angularDamping, 
this.m_gravityScale = e.gravityScale, this.m_sleepTime = 0, this.m_jointList = null, 
this.m_contactList = null, this.m_fixtureList = null, this.m_prev = null, this.m_next = null, 
this.m_destroyed = !1, "object" == typeof e.style && null !== e.style && (this.style = e.style);
}
return t.prototype._serialize = function() {
for (var t = [], e = this.m_fixtureList; e; e = e.m_next) t.push(e);
return {
type: this.m_type,
bullet: this.m_bulletFlag,
fixedRotation: this.m_fixedRotationFlag,
position: this.m_xf.p,
angle: this.m_xf.q.getAngle(),
linearVelocity: this.m_linearVelocity,
angularVelocity: this.m_angularVelocity,
fixtures: t
};
}, t._deserialize = function(e, o, n) {
var i = new t(o, e);
if (e.fixtures) for (var r = e.fixtures.length - 1; r >= 0; r--) {
var s = n(md, e.fixtures[r], i);
i._addFixture(s);
}
return i;
}, t.prototype.isWorldLocked = function() {
return !(!this.m_world || !this.m_world.isLocked());
}, t.prototype.getWorld = function() {
return this.m_world;
}, t.prototype.getNext = function() {
return this.m_next;
}, t.prototype.setUserData = function(t) {
this.m_userData = t;
}, t.prototype.getUserData = function() {
return this.m_userData;
}, t.prototype.getFixtureList = function() {
return this.m_fixtureList;
}, t.prototype.getJointList = function() {
return this.m_jointList;
}, t.prototype.getContactList = function() {
return this.m_contactList;
}, t.prototype.isStatic = function() {
return this.m_type == _d;
}, t.prototype.isDynamic = function() {
return this.m_type == yd;
}, t.prototype.isKinematic = function() {
return this.m_type == fd;
}, t.prototype.setStatic = function() {
return this.setType(_d), this;
}, t.prototype.setDynamic = function() {
return this.setType(yd), this;
}, t.prototype.setKinematic = function() {
return this.setType(fd), this;
}, t.prototype.getType = function() {
return this.m_type;
}, t.prototype.setType = function(t) {
if (1 != this.isWorldLocked() && this.m_type != t) {
this.m_type = t, this.resetMassData(), this.m_type == _d && (this.m_linearVelocity.setZero(), 
this.m_angularVelocity = 0, this.m_sweep.forward(), this.synchronizeFixtures()), 
this.setAwake(!0), this.m_force.setZero(), this.m_torque = 0;
for (var e = this.m_contactList; e; ) {
var o = e;
e = e.next, this.m_world.destroyContact(o.contact);
}
this.m_contactList = null;
for (var n = this.m_world.m_broadPhase, i = this.m_fixtureList; i; i = i.m_next) for (var r = 0; r < i.m_proxyCount; ++r) n.touchProxy(i.m_proxies[r].proxyId);
}
}, t.prototype.isBullet = function() {
return this.m_bulletFlag;
}, t.prototype.setBullet = function(t) {
this.m_bulletFlag = !!t;
}, t.prototype.isSleepingAllowed = function() {
return this.m_autoSleepFlag;
}, t.prototype.setSleepingAllowed = function(t) {
this.m_autoSleepFlag = !!t, 0 == this.m_autoSleepFlag && this.setAwake(!0);
}, t.prototype.isAwake = function() {
return this.m_awakeFlag;
}, t.prototype.setAwake = function(t) {
t ? (this.m_awakeFlag = !0, this.m_sleepTime = 0) : (this.m_awakeFlag = !1, this.m_sleepTime = 0, 
this.m_linearVelocity.setZero(), this.m_angularVelocity = 0, this.m_force.setZero(), 
this.m_torque = 0);
}, t.prototype.isActive = function() {
return this.m_activeFlag;
}, t.prototype.setActive = function(t) {
if (t != this.m_activeFlag) if (this.m_activeFlag = !!t, this.m_activeFlag) {
for (var e = this.m_world.m_broadPhase, o = this.m_fixtureList; o; o = o.m_next) o.createProxies(e, this.m_xf);
this.m_world.m_newFixture = !0;
} else {
for (e = this.m_world.m_broadPhase, o = this.m_fixtureList; o; o = o.m_next) o.destroyProxies(e);
for (var n = this.m_contactList; n; ) {
var i = n;
n = n.next, this.m_world.destroyContact(i.contact);
}
this.m_contactList = null;
}
}, t.prototype.isFixedRotation = function() {
return this.m_fixedRotationFlag;
}, t.prototype.setFixedRotation = function(t) {
this.m_fixedRotationFlag != t && (this.m_fixedRotationFlag = !!t, this.m_angularVelocity = 0, 
this.resetMassData());
}, t.prototype.getTransform = function() {
return this.m_xf;
}, t.prototype.setTransform = function(t, e) {
if (1 != this.isWorldLocked()) {
"number" == typeof e ? this.m_xf.setNum(t, e) : this.m_xf.setTransform(t), this.m_sweep.setTransform(this.m_xf);
for (var o = this.m_world.m_broadPhase, n = this.m_fixtureList; n; n = n.m_next) n.synchronize(o, this.m_xf, this.m_xf);
this.setAwake(!0);
}
}, t.prototype.synchronizeTransform = function() {
this.m_sweep.getTransform(this.m_xf, 1);
}, t.prototype.synchronizeFixtures = function() {
this.m_sweep.getTransform(bd, 0);
for (var t = this.m_world.m_broadPhase, e = this.m_fixtureList; e; e = e.m_next) e.synchronize(t, bd, this.m_xf);
}, t.prototype.advance = function(t) {
this.m_sweep.advance(t), Ah(this.m_sweep.c, this.m_sweep.c0), this.m_sweep.a = this.m_sweep.a0, 
this.m_sweep.getTransform(this.m_xf, 1);
}, t.prototype.getPosition = function() {
return this.m_xf.p;
}, t.prototype.setPosition = function(t) {
this.setTransform(t, this.m_sweep.a);
}, t.prototype.getAngle = function() {
return this.m_sweep.a;
}, t.prototype.setAngle = function(t) {
this.setTransform(this.m_xf.p, t);
}, t.prototype.getWorldCenter = function() {
return this.m_sweep.c;
}, t.prototype.getLocalCenter = function() {
return this.m_sweep.localCenter;
}, t.prototype.getLinearVelocity = function() {
return this.m_linearVelocity;
}, t.prototype.getLinearVelocityFromWorldPoint = function(t) {
var e = Zu.sub(t, this.m_sweep.c);
return Zu.add(this.m_linearVelocity, Zu.crossNumVec2(this.m_angularVelocity, e));
}, t.prototype.getLinearVelocityFromLocalPoint = function(t) {
return this.getLinearVelocityFromWorldPoint(this.getWorldPoint(t));
}, t.prototype.setLinearVelocity = function(t) {
this.m_type != _d && (Zu.dot(t, t) > 0 && this.setAwake(!0), this.m_linearVelocity.setVec2(t));
}, t.prototype.getAngularVelocity = function() {
return this.m_angularVelocity;
}, t.prototype.setAngularVelocity = function(t) {
this.m_type != _d && (t * t > 0 && this.setAwake(!0), this.m_angularVelocity = t);
}, t.prototype.getLinearDamping = function() {
return this.m_linearDamping;
}, t.prototype.setLinearDamping = function(t) {
this.m_linearDamping = t;
}, t.prototype.getAngularDamping = function() {
return this.m_angularDamping;
}, t.prototype.setAngularDamping = function(t) {
this.m_angularDamping = t;
}, t.prototype.getGravityScale = function() {
return this.m_gravityScale;
}, t.prototype.setGravityScale = function(t) {
this.m_gravityScale = t;
}, t.prototype.getMass = function() {
return this.m_mass;
}, t.prototype.getInertia = function() {
return this.m_I + this.m_mass * Zu.dot(this.m_sweep.localCenter, this.m_sweep.localCenter);
}, t.prototype.getMassData = function(t) {
t.mass = this.m_mass, t.I = this.getInertia(), Ah(t.center, this.m_sweep.localCenter);
}, t.prototype.resetMassData = function() {
if (this.m_mass = 0, this.m_invMass = 0, this.m_I = 0, this.m_invI = 0, xh(this.m_sweep.localCenter), 
this.isStatic() || this.isKinematic()) return Ah(this.m_sweep.c0, this.m_xf.p), 
Ah(this.m_sweep.c, this.m_xf.p), void (this.m_sweep.a0 = this.m_sweep.a);
xh(gd);
for (var t = this.m_fixtureList; t; t = t.m_next) if (0 != t.m_density) {
var e = {
mass: 0,
center: vh(0, 0),
I: 0
};
t.getMassData(e), this.m_mass += e.mass, Th(gd, e.mass, e.center), this.m_I += e.I;
}
this.m_mass > 0 ? (this.m_invMass = 1 / this.m_mass, Bh(gd, this.m_invMass, gd)) : (this.m_mass = 1, 
this.m_invMass = 1), this.m_I > 0 && 0 == this.m_fixedRotationFlag ? (this.m_I -= this.m_mass * Lh(gd, gd), 
this.m_invI = 1 / this.m_I) : (this.m_I = 0, this.m_invI = 0), Ah(vd, this.m_sweep.c), 
this.m_sweep.setLocalCenter(gd, this.m_xf), Sh(Ad, this.m_sweep.c, vd), Ph(xd, this.m_angularVelocity, Ad), 
Ch(this.m_linearVelocity, xd);
}, t.prototype.setMassData = function(t) {
1 != this.isWorldLocked() && this.m_type == yd && (this.m_invMass = 0, this.m_I = 0, 
this.m_invI = 0, this.m_mass = t.mass, this.m_mass <= 0 && (this.m_mass = 1), this.m_invMass = 1 / this.m_mass, 
t.I > 0 && 0 == this.m_fixedRotationFlag && (this.m_I = t.I - this.m_mass * Lh(t.center, t.center), 
this.m_invI = 1 / this.m_I), Ah(vd, this.m_sweep.c), this.m_sweep.setLocalCenter(t.center, this.m_xf), 
Sh(Ad, this.m_sweep.c, vd), Ph(xd, this.m_angularVelocity, Ad), Ch(this.m_linearVelocity, xd));
}, t.prototype.applyForce = function(t, e, o) {
void 0 === o && (o = !0), this.m_type == yd && (o && 0 == this.m_awakeFlag && this.setAwake(!0), 
this.m_awakeFlag && (this.m_force.add(t), this.m_torque += Zu.crossVec2Vec2(Zu.sub(e, this.m_sweep.c), t)));
}, t.prototype.applyForceToCenter = function(t, e) {
void 0 === e && (e = !0), this.m_type == yd && (e && 0 == this.m_awakeFlag && this.setAwake(!0), 
this.m_awakeFlag && this.m_force.add(t));
}, t.prototype.applyTorque = function(t, e) {
void 0 === e && (e = !0), this.m_type == yd && (e && 0 == this.m_awakeFlag && this.setAwake(!0), 
this.m_awakeFlag && (this.m_torque += t));
}, t.prototype.applyLinearImpulse = function(t, e, o) {
void 0 === o && (o = !0), this.m_type == yd && (o && 0 == this.m_awakeFlag && this.setAwake(!0), 
this.m_awakeFlag && (this.m_linearVelocity.addMul(this.m_invMass, t), this.m_angularVelocity += this.m_invI * Zu.crossVec2Vec2(Zu.sub(e, this.m_sweep.c), t)));
}, t.prototype.applyAngularImpulse = function(t, e) {
void 0 === e && (e = !0), this.m_type == yd && (e && 0 == this.m_awakeFlag && this.setAwake(!0), 
this.m_awakeFlag && (this.m_angularVelocity += this.m_invI * t));
}, t.prototype.shouldCollide = function(t) {
if (this.m_type != yd && t.m_type != yd) return !1;
for (var e = this.m_jointList; e; e = e.next) if (e.other == t && 0 == e.joint.m_collideConnected) return !1;
return !0;
}, t.prototype._addFixture = function(t) {
if (1 == this.isWorldLocked()) return null;
if (this.m_activeFlag) {
var e = this.m_world.m_broadPhase;
t.createProxies(e, this.m_xf);
}
return t.m_next = this.m_fixtureList, this.m_fixtureList = t, t.m_density > 0 && this.resetMassData(), 
this.m_world.m_newFixture = !0, t;
}, t.prototype.createFixture = function(t, e) {
if (1 == this.isWorldLocked()) return null;
var o = new md(this, t, e);
return this._addFixture(o), this.m_world.publish("add-fixture", o), o;
}, t.prototype.destroyFixture = function(t) {
if (1 != this.isWorldLocked()) {
if (this.m_fixtureList === t) this.m_fixtureList = t.m_next; else for (var e = this.m_fixtureList; null != e; ) {
if (e.m_next === t) {
e.m_next = t.m_next;
break;
}
e = e.m_next;
}
for (var o = this.m_contactList; o; ) {
var n = o.contact;
o = o.next;
var i = n.getFixtureA(), r = n.getFixtureB();
t != i && t != r || this.m_world.destroyContact(n);
}
if (this.m_activeFlag) {
var s = this.m_world.m_broadPhase;
t.destroyProxies(s);
}
t.m_body = null, t.m_next = null, this.m_world.publish("remove-fixture", t), this.resetMassData();
}
}, t.prototype.getWorldPoint = function(t) {
return od.mulVec2(this.m_xf, t);
}, t.prototype.getWorldVector = function(t) {
return Kh.mulVec2(this.m_xf.q, t);
}, t.prototype.getLocalPoint = function(t) {
return od.mulTVec2(this.m_xf, t);
}, t.prototype.getLocalVector = function(t) {
return Kh.mulTVec2(this.m_xf.q, t);
}, t.STATIC = "static", t.KINEMATIC = "kinematic", t.DYNAMIC = "dynamic", t;
}(), Sd = function() {
this.other = null, this.joint = null, this.prev = null, this.next = null;
}, Rd = function() {
function t(t, e, o) {
this.m_type = "unknown-joint", this.m_prev = null, this.m_next = null, this.m_edgeA = new Sd(), 
this.m_edgeB = new Sd(), this.m_islandFlag = !1, this.style = {}, this.appData = {}, 
e = "bodyA" in t ? t.bodyA : e, o = "bodyB" in t ? t.bodyB : o, this.m_bodyA = e, 
this.m_bodyB = o, this.m_collideConnected = !!t.collideConnected, this.m_userData = t.userData, 
"object" == typeof t.style && null !== t.style && (this.style = t.style);
}
return t.prototype.isActive = function() {
return this.m_bodyA.isActive() && this.m_bodyB.isActive();
}, t.prototype.getType = function() {
return this.m_type;
}, t.prototype.getBodyA = function() {
return this.m_bodyA;
}, t.prototype.getBodyB = function() {
return this.m_bodyB;
}, t.prototype.getNext = function() {
return this.m_next;
}, t.prototype.getUserData = function() {
return this.m_userData;
}, t.prototype.setUserData = function(t) {
this.m_userData = t;
}, t.prototype.getCollideConnected = function() {
return this.m_collideConnected;
}, t.prototype.shiftOrigin = function() {}, t.prototype._resetAnchors = function(t) {
return this._reset(t);
}, t;
}(), Bd = {
gjkCalls: 0,
gjkIters: 0,
gjkMaxIters: 0,
toiTime: 0,
toiMaxTime: 0,
toiCalls: 0,
toiIters: 0,
toiMaxIters: 0,
toiRootIters: 0,
toiMaxRootIters: 0
}, Td = Math.max, Fd = vh(0, 0), Md = vh(0, 0), Id = vh(0, 0), Dd = vh(0, 0), Nd = vh(0, 0), Pd = vh(0, 0), Ed = vh(0, 0);
Bd.gjkCalls = 0, Bd.gjkIters = 0, Bd.gjkMaxIters = 0;
var Ld = function() {
function t() {
this.proxyA = new kd(), this.proxyB = new kd(), this.transformA = od.identity(), 
this.transformB = od.identity(), this.useRadii = !1;
}
return t.prototype.recycle = function() {
this.proxyA.recycle(), this.proxyB.recycle(), this.transformA.setIdentity(), this.transformB.setIdentity(), 
this.useRadii = !1;
}, t;
}(), Wd = function() {
function t() {
this.pointA = vh(0, 0), this.pointB = vh(0, 0), this.distance = 0, this.iterations = 0;
}
return t.prototype.recycle = function() {
xh(this.pointA), xh(this.pointB), this.distance = 0, this.iterations = 0;
}, t;
}(), Vd = function() {
function t() {
this.metric = 0, this.indexA = [], this.indexB = [], this.count = 0;
}
return t.prototype.recycle = function() {
this.metric = 0, this.indexA.length = 0, this.indexB.length = 0, this.count = 0;
}, t;
}(), Od = function(t, e, o) {
++Bd.gjkCalls;
var n = o.proxyA, i = o.proxyB, r = o.transformA, s = o.transformB;
qd.recycle(), qd.readCache(e, n, r, i, s);
for (var a = qd.m_v, l = ih.maxDistanceIterations, c = [], u = [], h = 0, d = 0; d < l; ) {
h = qd.m_count;
for (var p = 0; p < h; ++p) c[p] = a[p].indexA, u[p] = a[p].indexB;
if (qd.solve(), 3 === qd.m_count) break;
var m = qd.getSearchDirection();
if (Wh(m) < 1e-18) break;
var _ = a[qd.m_count];
_.indexA = n.getSupport(Gh(Fd, r.q, Bh(Fd, -1, m))), qh(_.wA, r, n.getVertex(_.indexA)), 
_.indexB = i.getSupport(Gh(Fd, s.q, m)), qh(_.wB, s, i.getVertex(_.indexB)), Sh(_.w, _.wB, _.wA), 
++d, ++Bd.gjkIters;
var f = !1;
for (p = 0; p < h; ++p) if (_.indexA === c[p] && _.indexB === u[p]) {
f = !0;
break;
}
if (f) break;
++qd.m_count;
}
if (Bd.gjkMaxIters = Td(Bd.gjkMaxIters, d), qd.getWitnessPoints(t.pointA, t.pointB), 
t.distance = Vh(t.pointA, t.pointB), t.iterations = d, qd.writeCache(e), o.useRadii) {
var y = n.m_radius, v = i.m_radius;
if (t.distance > y + v && t.distance > ju) t.distance -= y + v, Sh(Md, t.pointB, t.pointA), 
Dh(Md), Th(t.pointA, y, Md), Fh(t.pointB, v, Md); else {
var g = Sh(Fd, t.pointA, t.pointB);
Ah(t.pointA, g), Ah(t.pointB, g), t.distance = 0;
}
}
}, kd = function() {
function t() {
this.m_vertices = [], this.m_count = 0, this.m_radius = 0;
}
return t.prototype.recycle = function() {
this.m_vertices.length = 0, this.m_count = 0, this.m_radius = 0;
}, t.prototype.getVertexCount = function() {
return this.m_count;
}, t.prototype.getVertex = function(t) {
return this.m_vertices[t];
}, t.prototype.getSupport = function(t) {
for (var e = -1, o = -1 / 0, n = 0; n < this.m_count; ++n) {
var i = Lh(this.m_vertices[n], t);
i > o && (e = n, o = i);
}
return e;
}, t.prototype.getSupportVertex = function(t) {
return this.m_vertices[this.getSupport(t)];
}, t.prototype.set = function(t, e) {
t.computeDistanceProxy(this, e);
}, t.prototype.setVertices = function(t, e, o) {
this.m_vertices = t, this.m_count = e, this.m_radius = o;
}, t;
}(), Gd = function() {
function t() {
this.wA = vh(0, 0), this.indexA = 0, this.wB = vh(0, 0), this.indexB = 0, this.w = vh(0, 0), 
this.a = 0;
}
return t.prototype.recycle = function() {
this.indexA = 0, this.indexB = 0, xh(this.wA), xh(this.wB), xh(this.w), this.a = 0;
}, t.prototype.set = function(t) {
this.indexA = t.indexA, this.indexB = t.indexB, Ah(this.wA, t.wA), Ah(this.wB, t.wB), 
Ah(this.w, t.w), this.a = t.a;
}, t;
}(), zd = vh(0, 0), jd = vh(0, 0), qd = new (function() {
function t() {
this.m_v1 = new Gd(), this.m_v2 = new Gd(), this.m_v3 = new Gd(), this.m_v = [ this.m_v1, this.m_v2, this.m_v3 ];
}
return t.prototype.recycle = function() {
this.m_v1.recycle(), this.m_v2.recycle(), this.m_v3.recycle(), this.m_count = 0;
}, t.prototype.toString = function() {
return 3 === this.m_count ? [ "+" + this.m_count, this.m_v1.a, this.m_v1.wA.x, this.m_v1.wA.y, this.m_v1.wB.x, this.m_v1.wB.y, this.m_v2.a, this.m_v2.wA.x, this.m_v2.wA.y, this.m_v2.wB.x, this.m_v2.wB.y, this.m_v3.a, this.m_v3.wA.x, this.m_v3.wA.y, this.m_v3.wB.x, this.m_v3.wB.y ].toString() : 2 === this.m_count ? [ "+" + this.m_count, this.m_v1.a, this.m_v1.wA.x, this.m_v1.wA.y, this.m_v1.wB.x, this.m_v1.wB.y, this.m_v2.a, this.m_v2.wA.x, this.m_v2.wA.y, this.m_v2.wB.x, this.m_v2.wB.y ].toString() : 1 === this.m_count ? [ "+" + this.m_count, this.m_v1.a, this.m_v1.wA.x, this.m_v1.wA.y, this.m_v1.wB.x, this.m_v1.wB.y ].toString() : "+" + this.m_count;
}, t.prototype.readCache = function(t, e, o, n, i) {
this.m_count = t.count;
for (var r = 0; r < this.m_count; ++r) {
(u = this.m_v[r]).indexA = t.indexA[r], u.indexB = t.indexB[r];
var s = e.getVertex(u.indexA), a = n.getVertex(u.indexB);
qh(u.wA, o, s), qh(u.wB, i, a), Sh(u.w, u.wB, u.wA), u.a = 0;
}
if (this.m_count > 1) {
var l = t.metric, c = this.getMetric();
(c < .5 * l || 2 * l < c || c < ju) && (this.m_count = 0);
}
var u;
0 === this.m_count && ((u = this.m_v[0]).indexA = 0, u.indexB = 0, s = e.getVertex(0), 
a = n.getVertex(0), qh(u.wA, o, s), qh(u.wB, i, a), Sh(u.w, u.wB, u.wA), u.a = 1, 
this.m_count = 1);
}, t.prototype.writeCache = function(t) {
t.metric = this.getMetric(), t.count = this.m_count;
for (var e = 0; e < this.m_count; ++e) t.indexA[e] = this.m_v[e].indexA, t.indexB[e] = this.m_v[e].indexB;
}, t.prototype.getSearchDirection = function() {
var t = this.m_v1, e = this.m_v2;
switch (this.m_count) {
case 1:
return gh(zd, -t.w.x, -t.w.y);

case 2:
return Sh(Id, e.w, t.w), -Eh(Id, t.w) > 0 ? gh(zd, -Id.y, Id.x) : gh(zd, Id.y, -Id.x);

default:
return xh(zd);
}
}, t.prototype.getClosestPoint = function() {
var t = this.m_v1, e = this.m_v2;
switch (this.m_count) {
case 0:
case 3:
default:
return xh(jd);

case 1:
return Ah(jd, t.w);

case 2:
return Mh(jd, t.a, t.w, e.a, e.w);
}
}, t.prototype.getWitnessPoints = function(t, e) {
var o = this.m_v1, n = this.m_v2, i = this.m_v3;
switch (this.m_count) {
case 0:
break;

case 1:
Ah(t, o.wA), Ah(e, o.wB);
break;

case 2:
Mh(t, o.a, o.wA, n.a, n.wA), Mh(e, o.a, o.wB, n.a, n.wB);
break;

case 3:
Ih(t, o.a, o.wA, n.a, n.wA, i.a, i.wA), Ah(e, t);
}
}, t.prototype.getMetric = function() {
switch (this.m_count) {
case 0:
case 1:
default:
return 0;

case 2:
return Vh(this.m_v1.w, this.m_v2.w);

case 3:
return Eh(Sh(Pd, this.m_v2.w, this.m_v1.w), Sh(Ed, this.m_v3.w, this.m_v1.w));
}
}, t.prototype.solve = function() {
switch (this.m_count) {
case 1:
break;

case 2:
this.solve2();
break;

case 3:
this.solve3();
}
}, t.prototype.solve2 = function() {
var t = this.m_v1.w, e = this.m_v2.w;
Sh(Id, e, t);
var o = -Lh(t, Id);
if (o <= 0) return this.m_v1.a = 1, void (this.m_count = 1);
var n = Lh(e, Id);
if (n <= 0) return this.m_v2.a = 1, this.m_count = 1, void this.m_v1.set(this.m_v2);
var i = 1 / (n + o);
this.m_v1.a = n * i, this.m_v2.a = o * i, this.m_count = 2;
}, t.prototype.solve3 = function() {
var t = this.m_v1.w, e = this.m_v2.w, o = this.m_v3.w;
Sh(Id, e, t);
var n = Lh(t, Id), i = Lh(e, Id), r = -n;
Sh(Dd, o, t);
var s = Lh(t, Dd), a = Lh(o, Dd), l = -s;
Sh(Nd, o, e);
var c = Lh(e, Nd), u = Lh(o, Nd), h = -c, d = Eh(Id, Dd), p = d * Eh(e, o), m = d * Eh(o, t), _ = d * Eh(t, e);
if (r <= 0 && l <= 0) return this.m_v1.a = 1, void (this.m_count = 1);
if (i > 0 && r > 0 && _ <= 0) {
var f = 1 / (i + r);
return this.m_v1.a = i * f, this.m_v2.a = r * f, void (this.m_count = 2);
}
if (a > 0 && l > 0 && m <= 0) {
var y = 1 / (a + l);
return this.m_v1.a = a * y, this.m_v3.a = l * y, this.m_count = 2, void this.m_v2.set(this.m_v3);
}
if (i <= 0 && h <= 0) return this.m_v2.a = 1, this.m_count = 1, void this.m_v1.set(this.m_v2);
if (a <= 0 && u <= 0) return this.m_v3.a = 1, this.m_count = 1, void this.m_v1.set(this.m_v3);
if (u > 0 && h > 0 && p <= 0) {
var v = 1 / (u + h);
return this.m_v2.a = u * v, this.m_v3.a = h * v, this.m_count = 2, void this.m_v1.set(this.m_v3);
}
var g = 1 / (p + m + _);
this.m_v1.a = p * g, this.m_v2.a = m * g, this.m_v3.a = _ * g, this.m_count = 3;
}, t;
}())(), Hd = new Ld(), Ud = new Vd(), Yd = new Wd(), Xd = function(t, e, o, n, i, r) {
return Hd.recycle(), Hd.proxyA.set(t, e), Hd.proxyB.set(o, n), jh(Hd.transformA, i), 
jh(Hd.transformB, r), Hd.useRadii = !0, Yd.recycle(), Ud.recycle(), Od(Yd, Ud, Hd), 
Yd.distance < 1e-8;
};
Od.testOverlap = Xd, Od.Input = Ld, Od.Output = Wd, Od.Proxy = kd, Od.Cache = Vd;
var Jd, Qd, Kd = Math.abs, Zd = Math.max, $d = function() {
function t() {
this.proxyA = new kd(), this.proxyB = new kd(), this.sweepA = new ed(), this.sweepB = new ed();
}
return t.prototype.recycle = function() {
this.proxyA.recycle(), this.proxyB.recycle(), this.sweepA.recycle(), this.sweepB.recycle(), 
this.tMax = -1;
}, t;
}();
(Qd = Jd || (Jd = {}))[Qd.e_unset = -1] = "e_unset", Qd[Qd.e_unknown = 0] = "e_unknown", 
Qd[Qd.e_failed = 1] = "e_failed", Qd[Qd.e_overlapped = 2] = "e_overlapped", Qd[Qd.e_touching = 3] = "e_touching", 
Qd[Qd.e_separated = 4] = "e_separated";
var tp = function() {
function t() {
this.state = Jd.e_unset, this.t = -1;
}
return t.prototype.recycle = function() {
this.state = Jd.e_unset, this.t = -1;
}, t;
}();
Bd.toiTime = 0, Bd.toiMaxTime = 0, Bd.toiCalls = 0, Bd.toiIters = 0, Bd.toiMaxIters = 0, 
Bd.toiRootIters = 0, Bd.toiMaxRootIters = 0;
var ep, op, np = new Ld(), ip = new Wd(), rp = new Vd(), ap = zh(0, 0, 0), lp = zh(0, 0, 0), cp = vh(0, 0), up = vh(0, 0), hp = vh(0, 0), dp = vh(0, 0), pp = vh(0, 0), mp = vh(0, 0), _p = vh(0, 0), fp = vh(0, 0), yp = function(t, e) {
var o = Date.now();
++Bd.toiCalls, t.state = Jd.e_unknown, t.t = e.tMax;
var n = e.proxyA, i = e.proxyB, r = e.sweepA, s = e.sweepB;
r.normalize(), s.normalize();
var a = e.tMax, l = n.m_radius + i.m_radius, c = Zd(ih.linearSlop, l - 3 * ih.linearSlop), u = .25 * ih.linearSlop, h = 0, d = ih.maxTOIIterations, p = 0;
for (rp.recycle(), np.proxyA.setVertices(n.m_vertices, n.m_count, n.m_radius), np.proxyB.setVertices(i.m_vertices, i.m_count, i.m_radius), 
np.useRadii = !1; ;) {
if (r.getTransform(ap, h), s.getTransform(lp, h), jh(np.transformA, ap), jh(np.transformB, lp), 
Od(ip, rp, np), ip.distance <= 0) {
t.state = Jd.e_overlapped, t.t = 0;
break;
}
if (ip.distance < c + u) {
t.state = Jd.e_touching, t.t = h;
break;
}
vp.initialize(rp, n, r, i, s, h);
for (var m = !1, _ = a, f = 0; ;) {
var y = vp.findMinSeparation(_);
if (y > c + u) {
t.state = Jd.e_separated, t.t = a, m = !0;
break;
}
if (y > c - u) {
h = _;
break;
}
var v = vp.evaluate(h);
if (v < c - u) {
t.state = Jd.e_failed, t.t = h, m = !0;
break;
}
if (v <= c + u) {
t.state = Jd.e_touching, t.t = h, m = !0;
break;
}
for (var g = 0, A = h, x = _; ;) {
var b;
b = 1 & g ? A + (c - v) * (x - A) / (y - v) : .5 * (A + x), ++g, ++Bd.toiRootIters;
var C = vp.evaluate(b);
if (Kd(C - c) < u) {
_ = b;
break;
}
if (C > c ? (A = b, v = C) : (x = b, y = C), 50 === g) break;
}
if (Bd.toiMaxRootIters = Zd(Bd.toiMaxRootIters, g), ++f === ih.maxPolygonVertices) break;
}
if (++p, ++Bd.toiIters, m) break;
if (p === d) {
t.state = Jd.e_failed, t.t = h;
break;
}
}
Bd.toiMaxIters = Zd(Bd.toiMaxIters, p);
var w = function(t) {
return Date.now() - t;
}(o);
Bd.toiMaxTime = Zd(Bd.toiMaxTime, w), Bd.toiTime += w, vp.recycle();
};
(op = ep || (ep = {}))[op.e_unset = -1] = "e_unset", op[op.e_points = 1] = "e_points", 
op[op.e_faceA = 2] = "e_faceA", op[op.e_faceB = 3] = "e_faceB";
var vp = new (function() {
function t() {
this.m_proxyA = null, this.m_proxyB = null, this.m_sweepA = null, this.m_sweepB = null, 
this.m_type = ep.e_unset, this.m_localPoint = vh(0, 0), this.m_axis = vh(0, 0), 
this.indexA = -1, this.indexB = -1;
}
return t.prototype.recycle = function() {
this.m_proxyA = null, this.m_proxyB = null, this.m_sweepA = null, this.m_sweepB = null, 
this.m_type = ep.e_unset, xh(this.m_localPoint), xh(this.m_axis), this.indexA = -1, 
this.indexB = -1;
}, t.prototype.initialize = function(t, e, o, n, i, r) {
var s = t.count;
if (this.m_proxyA = e, this.m_proxyB = n, this.m_sweepA = o, this.m_sweepB = i, 
this.m_sweepA.getTransform(ap, r), this.m_sweepB.getTransform(lp, r), 1 === s) {
this.m_type = ep.e_points;
var a = this.m_proxyA.getVertex(t.indexA[0]), l = this.m_proxyB.getVertex(t.indexB[0]);
return qh(up, ap, a), qh(hp, lp, l), Sh(this.m_axis, hp, up), function(t) {
var e = yh(t.x * t.x + t.y * t.y);
if (0 !== e) {
var o = 1 / e;
t.x *= o, t.y *= o;
}
return e;
}(this.m_axis);
}
if (t.indexA[0] === t.indexA[1]) {
this.m_type = ep.e_faceB;
var c = n.getVertex(t.indexB[0]), u = n.getVertex(t.indexB[1]);
Nh(this.m_axis, Sh(cp, u, c), 1), Dh(this.m_axis), kh(dp, lp.q, this.m_axis), Mh(this.m_localPoint, .5, c, .5, u), 
qh(hp, lp, this.m_localPoint);
var h = e.getVertex(t.indexA[0]);
return (m = Lh(od.mulVec2(ap, h), dp) - Lh(hp, dp)) < 0 && (bh(this.m_axis), m = -m), 
m;
}
this.m_type = ep.e_faceA;
var d = this.m_proxyA.getVertex(t.indexA[0]), p = this.m_proxyA.getVertex(t.indexA[1]);
Nh(this.m_axis, Sh(cp, p, d), 1), Dh(this.m_axis), kh(dp, ap.q, this.m_axis), Mh(this.m_localPoint, .5, d, .5, p), 
qh(up, ap, this.m_localPoint);
var m, _ = this.m_proxyB.getVertex(t.indexB[0]);
return qh(hp, lp, _), (m = Lh(hp, dp) - Lh(up, dp)) < 0 && (bh(this.m_axis), m = -m), 
m;
}, t.prototype.compute = function(t, e) {
switch (this.m_sweepA.getTransform(ap, e), this.m_sweepB.getTransform(lp, e), this.m_type) {
case ep.e_points:
return t && (Gh(pp, ap.q, this.m_axis), Gh(mp, lp.q, Bh(cp, -1, this.m_axis)), this.indexA = this.m_proxyA.getSupport(pp), 
this.indexB = this.m_proxyB.getSupport(mp)), Ah(_p, this.m_proxyA.getVertex(this.indexA)), 
Ah(fp, this.m_proxyB.getVertex(this.indexB)), qh(up, ap, _p), qh(hp, lp, fp), Lh(hp, this.m_axis) - Lh(up, this.m_axis);

case ep.e_faceA:
return kh(dp, ap.q, this.m_axis), qh(up, ap, this.m_localPoint), t && (Gh(mp, lp.q, Bh(cp, -1, dp)), 
this.indexA = -1, this.indexB = this.m_proxyB.getSupport(mp)), Ah(fp, this.m_proxyB.getVertex(this.indexB)), 
qh(hp, lp, fp), Lh(hp, dp) - Lh(up, dp);

case ep.e_faceB:
return kh(dp, lp.q, this.m_axis), qh(hp, lp, this.m_localPoint), t && (Gh(pp, ap.q, Bh(cp, -1, dp)), 
this.indexB = -1, this.indexA = this.m_proxyA.getSupport(pp)), Ah(_p, this.m_proxyA.getVertex(this.indexA)), 
qh(up, ap, _p), Lh(up, dp) - Lh(hp, dp);

default:
return t && (this.indexA = -1, this.indexB = -1), 0;
}
}, t.prototype.findMinSeparation = function(t) {
return this.compute(!0, t);
}, t.prototype.evaluate = function(t) {
return this.compute(!1, t);
}, t;
}())();
yp.Input = $d, yp.Output = tp;
var gp = Math.abs, Ap = Math.sqrt, xp = Math.min, bp = function() {
function t() {
this.dt = 0, this.inv_dt = 0, this.velocityIterations = 0, this.positionIterations = 0, 
this.warmStarting = !1, this.blockSolve = !0, this.inv_dt0 = 0, this.dtRatio = 1;
}
return t.prototype.reset = function(t) {
this.dt > 0 && (this.inv_dt0 = this.inv_dt), this.dt = t, this.inv_dt = 0 == t ? 0 : 1 / t, 
this.dtRatio = t * this.inv_dt0;
}, t;
}(), Cp = new bp(), wp = vh(0, 0), Sp = vh(0, 0), Rp = vh(0, 0), Bp = new $d(), Tp = new tp(), Fp = new ed(), Mp = new ed(), Ip = new ed(), Dp = function() {
function t(t) {
this.contact = t, this.normals = [], this.tangents = [];
}
return t.prototype.recycle = function() {
this.normals.length = 0, this.tangents.length = 0;
}, Object.defineProperty(t.prototype, "normalImpulses", {
get: function() {
var t = this.contact, e = this.normals;
e.length = 0;
for (var o = 0; o < t.v_points.length; ++o) e.push(t.v_points[o].normalImpulse);
return e;
},
enumerable: !1,
configurable: !0
}), Object.defineProperty(t.prototype, "tangentImpulses", {
get: function() {
var t = this.contact, e = this.tangents;
e.length = 0;
for (var o = 0; o < t.v_points.length; ++o) e.push(t.v_points[o].tangentImpulse);
return e;
},
enumerable: !1,
configurable: !0
}), t;
}(), Np = function() {
function t(t) {
this.m_world = t, this.m_stack = [], this.m_bodies = [], this.m_contacts = [], this.m_joints = [];
}
return t.prototype.clear = function() {
this.m_stack.length = 0, this.m_bodies.length = 0, this.m_contacts.length = 0, this.m_joints.length = 0;
}, t.prototype.addBody = function(t) {
this.m_bodies.push(t);
}, t.prototype.addContact = function(t) {
this.m_contacts.push(t);
}, t.prototype.addJoint = function(t) {
this.m_joints.push(t);
}, t.prototype.solveWorld = function(t) {
for (var e = this.m_world, o = e.m_bodyList; o; o = o.m_next) o.m_islandFlag = !1;
for (var n = e.m_contactList; n; n = n.m_next) n.m_islandFlag = !1;
for (var i = e.m_jointList; i; i = i.m_next) i.m_islandFlag = !1;
for (var r = this.m_stack, s = e.m_bodyList; s; s = s.m_next) if (!s.m_islandFlag && 0 != s.isAwake() && 0 != s.isActive() && !s.isStatic()) {
for (this.clear(), r.push(s), s.m_islandFlag = !0; r.length > 0; ) if (o = r.pop(), 
this.addBody(o), o.m_awakeFlag = !0, !o.isStatic()) {
for (var a = o.m_contactList; a; a = a.next) {
var l = a.contact;
if (!l.m_islandFlag && 0 != l.isEnabled() && 0 != l.isTouching()) {
var c = l.m_fixtureA.m_isSensor, u = l.m_fixtureB.m_isSensor;
c || u || (this.addContact(l), l.m_islandFlag = !0, (d = a.other).m_islandFlag || (r.push(d), 
d.m_islandFlag = !0));
}
}
for (var h = o.m_jointList; h; h = h.next) {
var d;
1 != h.joint.m_islandFlag && 0 != (d = h.other).isActive() && (this.addJoint(h.joint), 
h.joint.m_islandFlag = !0, d.m_islandFlag || (r.push(d), d.m_islandFlag = !0));
}
}
this.solveIsland(t);
for (var p = 0; p < this.m_bodies.length; ++p) (o = this.m_bodies[p]).isStatic() && (o.m_islandFlag = !1);
}
}, t.prototype.solveIsland = function(t) {
for (var e = this.m_world, o = e.m_gravity, n = e.m_allowSleep, i = t.dt, r = 0; r < this.m_bodies.length; ++r) {
var s = this.m_bodies[r];
Ah(wp, s.m_sweep.c);
var a = s.m_sweep.a;
Ah(Sp, s.m_linearVelocity);
var l = s.m_angularVelocity;
Ah(s.m_sweep.c0, s.m_sweep.c), s.m_sweep.a0 = s.m_sweep.a, s.isDynamic() && (Th(Sp, i * s.m_gravityScale, o), 
Th(Sp, i * s.m_invMass, s.m_force), l += i * s.m_invI * s.m_torque, Bh(Sp, 1 / (1 + i * s.m_linearDamping), Sp), 
l *= 1 / (1 + i * s.m_angularDamping)), Ah(s.c_position.c, wp), s.c_position.a = a, 
Ah(s.c_velocity.v, Sp), s.c_velocity.w = l;
}
for (r = 0; r < this.m_contacts.length; ++r) this.m_contacts[r].initConstraint(t);
for (r = 0; r < this.m_contacts.length; ++r) this.m_contacts[r].initVelocityConstraint(t);
if (t.warmStarting) for (r = 0; r < this.m_contacts.length; ++r) this.m_contacts[r].warmStartConstraint(t);
for (r = 0; r < this.m_joints.length; ++r) this.m_joints[r].initVelocityConstraints(t);
for (r = 0; r < t.velocityIterations; ++r) {
for (var c = 0; c < this.m_joints.length; ++c) this.m_joints[c].solveVelocityConstraints(t);
for (c = 0; c < this.m_contacts.length; ++c) this.m_contacts[c].solveVelocityConstraint(t);
}
for (r = 0; r < this.m_contacts.length; ++r) this.m_contacts[r].storeConstraintImpulses(t);
for (r = 0; r < this.m_bodies.length; ++r) {
s = this.m_bodies[r], Ah(wp, s.c_position.c), a = s.c_position.a, Ah(Sp, s.c_velocity.v), 
l = s.c_velocity.w, Bh(Rp, i, Sp);
var u = Wh(Rp);
if (u > ih.maxTranslationSquared) {
var h = ih.maxTranslation / Ap(u);
Rh(Sp, h);
}
var d = i * l;
d * d > ih.maxRotationSquared && (l *= h = ih.maxRotation / gp(d)), Th(wp, i, Sp), 
a += i * l, Ah(s.c_position.c, wp), s.c_position.a = a, Ah(s.c_velocity.v, Sp), 
s.c_velocity.w = l;
}
var p = !1;
for (r = 0; r < t.positionIterations; ++r) {
var m = 0;
for (c = 0; c < this.m_contacts.length; ++c) {
var _ = this.m_contacts[c].solvePositionConstraint(t);
m = xp(m, _);
}
var f = m >= -3 * ih.linearSlop, y = !0;
for (c = 0; c < this.m_joints.length; ++c) {
var v = this.m_joints[c].solvePositionConstraints(t);
y = y && v;
}
if (f && y) {
p = !0;
break;
}
}
for (r = 0; r < this.m_bodies.length; ++r) Ah((s = this.m_bodies[r]).m_sweep.c, s.c_position.c), 
s.m_sweep.a = s.c_position.a, Ah(s.m_linearVelocity, s.c_velocity.v), s.m_angularVelocity = s.c_velocity.w, 
s.synchronizeTransform();
if (this.postSolveIsland(), n) {
var g = 1 / 0, A = ih.linearSleepToleranceSqr, x = ih.angularSleepToleranceSqr;
for (r = 0; r < this.m_bodies.length; ++r) (s = this.m_bodies[r]).isStatic() || (0 == s.m_autoSleepFlag || s.m_angularVelocity * s.m_angularVelocity > x || Wh(s.m_linearVelocity) > A ? (s.m_sleepTime = 0, 
g = 0) : (s.m_sleepTime += i, g = xp(g, s.m_sleepTime)));
if (g >= ih.timeToSleep && p) for (r = 0; r < this.m_bodies.length; ++r) (s = this.m_bodies[r]).setAwake(!1);
}
}, t.prototype.solveWorldTOI = function(t) {
var e = this.m_world;
if (e.m_stepComplete) {
for (var o = e.m_bodyList; o; o = o.m_next) o.m_islandFlag = !1, o.m_sweep.alpha0 = 0;
for (var n = e.m_contactList; n; n = n.m_next) n.m_toiFlag = !1, n.m_islandFlag = !1, 
n.m_toiCount = 0, n.m_toi = 1;
}
for (;;) {
for (var i = null, r = 1, s = e.m_contactList; s; s = s.m_next) if (0 != s.isEnabled() && !(s.m_toiCount > ih.maxSubSteps)) {
var a = 1;
if (s.m_toiFlag) a = s.m_toi; else {
var l = s.getFixtureA(), c = s.getFixtureB();
if (l.isSensor() || c.isSensor()) continue;
var u = l.getBody(), h = c.getBody(), d = u.isAwake() && !u.isStatic(), p = h.isAwake() && !h.isStatic();
if (0 == d && 0 == p) continue;
var m = u.isBullet() || !u.isDynamic(), _ = h.isBullet() || !h.isDynamic();
if (0 == m && 0 == _) continue;
var f = u.m_sweep.alpha0;
u.m_sweep.alpha0 < h.m_sweep.alpha0 ? (f = h.m_sweep.alpha0, u.m_sweep.advance(f)) : h.m_sweep.alpha0 < u.m_sweep.alpha0 && (f = u.m_sweep.alpha0, 
h.m_sweep.advance(f));
var y = s.getChildIndexA(), v = s.getChildIndexB();
Bp.proxyA.set(l.getShape(), y), Bp.proxyB.set(c.getShape(), v), Bp.sweepA.set(u.m_sweep), 
Bp.sweepB.set(h.m_sweep), Bp.tMax = 1, yp(Tp, Bp);
var g = Tp.t;
a = Tp.state == Jd.e_touching ? xp(f + (1 - f) * g, 1) : 1, s.m_toi = a, s.m_toiFlag = !0;
}
a < r && (i = s, r = a);
}
if (null == i || 1 - 1e-8 < r) {
e.m_stepComplete = !0;
break;
}
var A = i.getFixtureA(), x = i.getFixtureB(), b = A.getBody(), C = x.getBody();
if (Mp.set(b.m_sweep), Ip.set(C.m_sweep), b.advance(r), C.advance(r), i.update(e), 
i.m_toiFlag = !1, ++i.m_toiCount, 0 != i.isEnabled() && 0 != i.isTouching()) {
b.setAwake(!0), C.setAwake(!0), this.clear(), this.addBody(b), this.addBody(C), 
this.addContact(i), b.m_islandFlag = !0, C.m_islandFlag = !0, i.m_islandFlag = !0;
for (var w = [ b, C ], S = 0; S < w.length; ++S) if ((I = w[S]).isDynamic()) for (var R = I.m_contactList; R; R = R.next) {
var B = R.contact;
if (!B.m_islandFlag) {
var T = R.other;
if (!T.isDynamic() || I.isBullet() || T.isBullet()) {
var F = B.m_fixtureA.m_isSensor, M = B.m_fixtureB.m_isSensor;
F || M || (Fp.set(T.m_sweep), 0 == T.m_islandFlag && T.advance(r), B.update(e), 
0 != B.isEnabled() && 0 != B.isTouching() ? (B.m_islandFlag = !0, this.addContact(B), 
T.m_islandFlag || (T.m_islandFlag = !0, T.isStatic() || T.setAwake(!0), this.addBody(T))) : (T.m_sweep.set(Fp), 
T.synchronizeTransform()));
}
}
}
for (Cp.reset((1 - r) * t.dt), Cp.dtRatio = 1, Cp.positionIterations = 20, Cp.velocityIterations = t.velocityIterations, 
Cp.warmStarting = !1, this.solveIslandTOI(Cp, b, C), S = 0; S < this.m_bodies.length; ++S) {
var I;
if ((I = this.m_bodies[S]).m_islandFlag = !1, I.isDynamic()) for (I.synchronizeFixtures(), 
R = I.m_contactList; R; R = R.next) R.contact.m_toiFlag = !1, R.contact.m_islandFlag = !1;
}
if (e.findNewContacts(), e.m_subStepping) {
e.m_stepComplete = !1;
break;
}
} else i.setEnabled(!1), b.m_sweep.set(Mp), C.m_sweep.set(Ip), b.synchronizeTransform(), 
C.synchronizeTransform();
}
}, t.prototype.solveIslandTOI = function(t, e, o) {
for (var n = 0; n < this.m_bodies.length; ++n) Ah((l = this.m_bodies[n]).c_position.c, l.m_sweep.c), 
l.c_position.a = l.m_sweep.a, Ah(l.c_velocity.v, l.m_linearVelocity), l.c_velocity.w = l.m_angularVelocity;
for (n = 0; n < this.m_contacts.length; ++n) this.m_contacts[n].initConstraint(t);
for (n = 0; n < t.positionIterations; ++n) {
for (var i = 0, r = 0; r < this.m_contacts.length; ++r) {
var s = this.m_contacts[r].solvePositionConstraintTOI(t, e, o);
i = xp(i, s);
}
if (i >= -1.5 * ih.linearSlop) break;
}
for (Ah(e.m_sweep.c0, e.c_position.c), e.m_sweep.a0 = e.c_position.a, Ah(o.m_sweep.c0, o.c_position.c), 
o.m_sweep.a0 = o.c_position.a, n = 0; n < this.m_contacts.length; ++n) this.m_contacts[n].initVelocityConstraint(t);
for (n = 0; n < t.velocityIterations; ++n) for (r = 0; r < this.m_contacts.length; ++r) this.m_contacts[r].solveVelocityConstraint(t);
var a = t.dt;
for (n = 0; n < this.m_bodies.length; ++n) {
var l = this.m_bodies[n];
Ah(wp, l.c_position.c);
var c = l.c_position.a;
Ah(Sp, l.c_velocity.v);
var u = l.c_velocity.w;
Bh(Rp, a, Sp);
var h = Wh(Rp);
if (h > ih.maxTranslationSquared) {
var d = ih.maxTranslation / Ap(h);
Rh(Sp, d);
}
var p = a * u;
p * p > ih.maxRotationSquared && (u *= d = ih.maxRotation / gp(p)), Th(wp, a, Sp), 
c += a * u, Ah(l.c_position.c, wp), l.c_position.a = c, Ah(l.c_velocity.v, Sp), 
l.c_velocity.w = u, Ah(l.m_sweep.c, wp), l.m_sweep.a = c, Ah(l.m_linearVelocity, Sp), 
l.m_angularVelocity = u, l.synchronizeTransform();
}
this.postSolveIsland();
}, t.prototype.postSolveIsland = function() {
for (var t = 0; t < this.m_contacts.length; ++t) {
var e = this.m_contacts[t];
this.m_world.postSolve(e, e.m_impulse);
}
}, t;
}();
Np.TimeStep = bp;
var Pp, Ep, Lp, Wp, Vp, Op, kp = function() {
function t(t, e, o, n) {
"object" == typeof t && null !== t ? (this.ex = Zu.clone(t), this.ey = Zu.clone(e)) : "number" == typeof t ? (this.ex = Zu.neo(t, o), 
this.ey = Zu.neo(e, n)) : (this.ex = Zu.zero(), this.ey = Zu.zero());
}
return t.prototype.toString = function() {
return JSON.stringify(this);
}, t.isValid = function(t) {
return null != t && Zu.isValid(t.ex) && Zu.isValid(t.ey);
}, t.assert = function() {}, t.prototype.set = function(t, e, o, n) {
"number" == typeof t && "number" == typeof e && "number" == typeof o && "number" == typeof n ? (this.ex.setNum(t, o), 
this.ey.setNum(e, n)) : "object" == typeof t && "object" == typeof e ? (this.ex.setVec2(t), 
this.ey.setVec2(e)) : "object" == typeof t && (this.ex.setVec2(t.ex), this.ey.setVec2(t.ey));
}, t.prototype.setIdentity = function() {
this.ex.x = 1, this.ey.x = 0, this.ex.y = 0, this.ey.y = 1;
}, t.prototype.setZero = function() {
this.ex.x = 0, this.ey.x = 0, this.ex.y = 0, this.ey.y = 0;
}, t.prototype.getInverse = function() {
var e = this.ex.x, o = this.ey.x, n = this.ex.y, i = this.ey.y, r = e * i - o * n;
0 !== r && (r = 1 / r);
var s = new t();
return s.ex.x = r * i, s.ey.x = -r * o, s.ex.y = -r * n, s.ey.y = r * e, s;
}, t.prototype.solve = function(t) {
var e = this.ex.x, o = this.ey.x, n = this.ex.y, i = this.ey.y, r = e * i - o * n;
0 !== r && (r = 1 / r);
var s = Zu.zero();
return s.x = r * (i * t.x - o * t.y), s.y = r * (e * t.y - n * t.x), s;
}, t.mul = function(e, o) {
if (o && "x" in o && "y" in o) {
var n = e.ex.x * o.x + e.ey.x * o.y, i = e.ex.y * o.x + e.ey.y * o.y;
return Zu.neo(n, i);
}
if (o && "ex" in o && "ey" in o) return new t(e.ex.x * o.ex.x + e.ey.x * o.ex.y, e.ex.x * o.ey.x + e.ey.x * o.ey.y, e.ex.y * o.ex.x + e.ey.y * o.ex.y, e.ex.y * o.ey.x + e.ey.y * o.ey.y);
}, t.mulVec2 = function(t, e) {
var o = t.ex.x * e.x + t.ey.x * e.y, n = t.ex.y * e.x + t.ey.y * e.y;
return Zu.neo(o, n);
}, t.mulMat22 = function(e, o) {
return new t(e.ex.x * o.ex.x + e.ey.x * o.ex.y, e.ex.x * o.ey.x + e.ey.x * o.ey.y, e.ex.y * o.ex.x + e.ey.y * o.ex.y, e.ex.y * o.ey.x + e.ey.y * o.ey.y);
}, t.mulT = function(e, o) {
return o && "x" in o && "y" in o ? Zu.neo(Zu.dot(o, e.ex), Zu.dot(o, e.ey)) : o && "ex" in o && "ey" in o ? new t(Zu.neo(Zu.dot(e.ex, o.ex), Zu.dot(e.ey, o.ex)), Zu.neo(Zu.dot(e.ex, o.ey), Zu.dot(e.ey, o.ey))) : void 0;
}, t.mulTVec2 = function(t, e) {
return Zu.neo(Zu.dot(e, t.ex), Zu.dot(e, t.ey));
}, t.mulTMat22 = function(e, o) {
return new t(Zu.neo(Zu.dot(e.ex, o.ex), Zu.dot(e.ey, o.ex)), Zu.neo(Zu.dot(e.ex, o.ey), Zu.dot(e.ey, o.ey)));
}, t.abs = function(e) {
return new t(Zu.abs(e.ex), Zu.abs(e.ey));
}, t.add = function(e, o) {
return new t(Zu.add(e.ex, o.ex), Zu.add(e.ey, o.ey));
}, t;
}(), Gp = Math.sqrt, zp = vh(0, 0), jp = vh(0, 0), qp = vh(0, 0), Hp = vh(0, 0), Up = vh(0, 0), Yp = vh(0, 0), Xp = vh(0, 0), Jp = vh(0, 0);
(Ep = Pp || (Pp = {}))[Ep.e_unset = -1] = "e_unset", Ep[Ep.e_circles = 0] = "e_circles", 
Ep[Ep.e_faceA = 1] = "e_faceA", Ep[Ep.e_faceB = 2] = "e_faceB", (Wp = Lp || (Lp = {}))[Wp.e_unset = -1] = "e_unset", 
Wp[Wp.e_vertex = 0] = "e_vertex", Wp[Wp.e_face = 1] = "e_face", (Op = Vp || (Vp = {}))[Op.nullState = 0] = "nullState", 
Op[Op.addState = 1] = "addState", Op[Op.persistState = 2] = "persistState", Op[Op.removeState = 3] = "removeState";
var Qp = function() {
function t() {
this.v = vh(0, 0), this.id = new $p();
}
return t.prototype.set = function(t) {
Ah(this.v, t.v), this.id.set(t.id);
}, t.prototype.recycle = function() {
xh(this.v), this.id.recycle();
}, t;
}(), Kp = function() {
function t() {
this.localNormal = vh(0, 0), this.localPoint = vh(0, 0), this.points = [ new Zp(), new Zp() ], 
this.pointCount = 0;
}
return t.prototype.set = function(t) {
this.type = t.type, Ah(this.localNormal, t.localNormal), Ah(this.localPoint, t.localPoint), 
this.pointCount = t.pointCount, this.points[0].set(t.points[0]), this.points[1].set(t.points[1]);
}, t.prototype.recycle = function() {
this.type = Pp.e_unset, xh(this.localNormal), xh(this.localPoint), this.pointCount = 0, 
this.points[0].recycle(), this.points[1].recycle();
}, t.prototype.getWorldManifold = function(t, e, o, n, i) {
if (0 == this.pointCount) return t;
(t = t || new tm()).pointCount = this.pointCount;
var r = t.normal, s = t.points, a = t.separations;
switch (this.type) {
case Pp.e_circles:
gh(r, 1, 0);
var l = this.points[0];
qh(zp, e, this.localPoint), qh(jp, n, l.localPoint), Sh(Yp, jp, zp);
var c = Wh(Yp);
c > 1e-18 && Bh(r, 1 / Gp(c), Yp), Mh(Hp, 1, zp, o, r), Mh(Up, 1, jp, -i, r), Mh(s[0], .5, Hp, .5, Up), 
a[0] = Lh(Sh(qp, Up, Hp), r);
break;

case Pp.e_faceA:
kh(r, e.q, this.localNormal), qh(Xp, e, this.localPoint);
for (var u = 0; u < this.pointCount; ++u) l = this.points[u], qh(Jp, n, l.localPoint), 
Mh(Hp, 1, Jp, o - Lh(Sh(qp, Jp, Xp), r), r), Mh(Up, 1, Jp, -i, r), Mh(s[u], .5, Hp, .5, Up), 
a[u] = Lh(Sh(qp, Up, Hp), r);
break;

case Pp.e_faceB:
for (kh(r, n.q, this.localNormal), qh(Xp, n, this.localPoint), u = 0; u < this.pointCount; ++u) l = this.points[u], 
qh(Jp, e, l.localPoint), Mh(Up, 1, Jp, i - Lh(Sh(qp, Jp, Xp), r), r), Mh(Hp, 1, Jp, -o, r), 
Mh(s[u], .5, Hp, .5, Up), a[u] = Lh(Sh(qp, Hp, Up), r);
bh(r);
}
return t;
}, t.clipSegmentToLine = om, t.ClipVertex = Qp, t.getPointStates = em, t.PointState = Vp, 
t;
}(), Zp = function() {
function t() {
this.localPoint = vh(0, 0), this.normalImpulse = 0, this.tangentImpulse = 0, this.id = new $p();
}
return t.prototype.set = function(t) {
Ah(this.localPoint, t.localPoint), this.normalImpulse = t.normalImpulse, this.tangentImpulse = t.tangentImpulse, 
this.id.set(t.id);
}, t.prototype.recycle = function() {
xh(this.localPoint), this.normalImpulse = 0, this.tangentImpulse = 0, this.id.recycle();
}, t;
}(), $p = function() {
function t() {
this.key = -1, this.indexA = -1, this.indexB = -1, this.typeA = Lp.e_unset, this.typeB = Lp.e_unset;
}
return t.prototype.setFeatures = function(t, e, o, n) {
this.indexA = t, this.indexB = o, this.typeA = e, this.typeB = n, this.key = this.indexA + 4 * this.indexB + 16 * this.typeA + 64 * this.typeB;
}, t.prototype.set = function(t) {
this.indexA = t.indexA, this.indexB = t.indexB, this.typeA = t.typeA, this.typeB = t.typeB, 
this.key = this.indexA + 4 * this.indexB + 16 * this.typeA + 64 * this.typeB;
}, t.prototype.swapFeatures = function() {
var t = this.indexA, e = this.indexB, o = this.typeA, n = this.typeB;
this.indexA = e, this.indexB = t, this.typeA = n, this.typeB = o, this.key = this.indexA + 4 * this.indexB + 16 * this.typeA + 64 * this.typeB;
}, t.prototype.recycle = function() {
this.indexA = 0, this.indexB = 0, this.typeA = Lp.e_unset, this.typeB = Lp.e_unset, 
this.key = -1;
}, t;
}(), tm = function() {
function t() {
this.normal = vh(0, 0), this.points = [ vh(0, 0), vh(0, 0) ], this.separations = [ 0, 0 ], 
this.pointCount = 0;
}
return t.prototype.recycle = function() {
xh(this.normal), xh(this.points[0]), xh(this.points[1]), this.separations[0] = 0, 
this.separations[1] = 0, this.pointCount = 0;
}, t;
}();
function em(t, e, o, n) {
for (var i = 0; i < o.pointCount; ++i) {
var r = o.points[i].id;
t[i] = Vp.removeState;
for (var s = 0; s < n.pointCount; ++s) if (n.points[s].id.key === r.key) {
t[i] = Vp.persistState;
break;
}
}
for (i = 0; i < n.pointCount; ++i) for (r = n.points[i].id, e[i] = Vp.addState, 
s = 0; s < o.pointCount; ++s) if (o.points[s].id.key === r.key) {
e[i] = Vp.persistState;
break;
}
}
function om(t, e, o, n, i) {
var r = 0, s = Lh(o, e[0].v) - n, a = Lh(o, e[1].v) - n;
if (s <= 0 && t[r++].set(e[0]), a <= 0 && t[r++].set(e[1]), s * a < 0) {
var l = s / (s - a);
Mh(t[r].v, 1 - l, e[0].v, l, e[1].v), t[r].id.setFeatures(i, Lp.e_vertex, e[0].id.indexB, Lp.e_face), 
++r;
}
return r;
}
var nm = Math.sqrt, im = Math.max, rm = Math.min, sm = new rh({
create: function() {
return new zm();
},
release: function(t) {
t.recycle();
}
}), am = new Kp(), lm = new tm(), cm = function() {
function t(t) {
this.prev = null, this.next = null, this.other = null, this.contact = t;
}
return t.prototype.recycle = function() {
this.prev = null, this.next = null, this.other = null;
}, t;
}();
function um(t, e) {
return nm(t * e);
}
function hm(t, e) {
return t > e ? t : e;
}
var dm, pm, mm = [], _m = function() {
function t() {
this.rA = vh(0, 0), this.rB = vh(0, 0), this.normalImpulse = 0, this.tangentImpulse = 0, 
this.normalMass = 0, this.tangentMass = 0, this.velocityBias = 0;
}
return t.prototype.recycle = function() {
xh(this.rA), xh(this.rB), this.normalImpulse = 0, this.tangentImpulse = 0, this.normalMass = 0, 
this.tangentMass = 0, this.velocityBias = 0;
}, t;
}(), fm = vh(0, 0), ym = vh(0, 0), vm = vh(0, 0), gm = vh(0, 0), Am = vh(0, 0), xm = zh(0, 0, 0), bm = zh(0, 0, 0), Cm = vh(0, 0), wm = vh(0, 0), Sm = vh(0, 0), Rm = vh(0, 0), Bm = vh(0, 0), Tm = vh(0, 0), Fm = vh(0, 0), Mm = vh(0, 0), Im = vh(0, 0), Dm = vh(0, 0), Nm = vh(0, 0), Pm = vh(0, 0), Em = vh(0, 0), Lm = vh(0, 0), Wm = vh(0, 0), Vm = vh(0, 0), Om = vh(0, 0), km = vh(0, 0), Gm = vh(0, 0), zm = function() {
function t() {
this.m_nodeA = new cm(this), this.m_nodeB = new cm(this), this.m_fixtureA = null, 
this.m_fixtureB = null, this.m_indexA = -1, this.m_indexB = -1, this.m_evaluateFcn = null, 
this.m_manifold = new Kp(), this.m_prev = null, this.m_next = null, this.m_toi = 1, 
this.m_toiCount = 0, this.m_toiFlag = !1, this.m_friction = 0, this.m_restitution = 0, 
this.m_tangentSpeed = 0, this.m_enabledFlag = !0, this.m_islandFlag = !1, this.m_touchingFlag = !1, 
this.m_filterFlag = !1, this.m_bulletHitFlag = !1, this.m_impulse = new Dp(this), 
this.v_points = [ new _m(), new _m() ], this.v_normal = vh(0, 0), this.v_normalMass = new kp(), 
this.v_K = new kp(), this.v_pointCount = 0, this.v_tangentSpeed = 0, this.v_friction = 0, 
this.v_restitution = 0, this.v_invMassA = 0, this.v_invMassB = 0, this.v_invIA = 0, 
this.v_invIB = 0, this.p_localPoints = [ vh(0, 0), vh(0, 0) ], this.p_localNormal = vh(0, 0), 
this.p_localPoint = vh(0, 0), this.p_localCenterA = vh(0, 0), this.p_localCenterB = vh(0, 0), 
this.p_type = Pp.e_unset, this.p_radiusA = 0, this.p_radiusB = 0, this.p_pointCount = 0, 
this.p_invMassA = 0, this.p_invMassB = 0, this.p_invIA = 0, this.p_invIB = 0;
}
return t.prototype.initialize = function(t, e, o, n, i) {
this.m_fixtureA = t, this.m_fixtureB = o, this.m_indexA = e, this.m_indexB = n, 
this.m_evaluateFcn = i, this.m_friction = um(this.m_fixtureA.m_friction, this.m_fixtureB.m_friction), 
this.m_restitution = hm(this.m_fixtureA.m_restitution, this.m_fixtureB.m_restitution);
}, t.prototype.recycle = function() {
this.m_nodeA.recycle(), this.m_nodeB.recycle(), this.m_fixtureA = null, this.m_fixtureB = null, 
this.m_indexA = -1, this.m_indexB = -1, this.m_evaluateFcn = null, this.m_manifold.recycle(), 
this.m_prev = null, this.m_next = null, this.m_toi = 1, this.m_toiCount = 0, this.m_toiFlag = !1, 
this.m_friction = 0, this.m_restitution = 0, this.m_tangentSpeed = 0, this.m_enabledFlag = !0, 
this.m_islandFlag = !1, this.m_touchingFlag = !1, this.m_filterFlag = !1, this.m_bulletHitFlag = !1, 
this.m_impulse.recycle();
for (var t = 0, e = this.v_points; t < e.length; t++) e[t].recycle();
xh(this.v_normal), this.v_normalMass.setZero(), this.v_K.setZero(), this.v_pointCount = 0, 
this.v_tangentSpeed = 0, this.v_friction = 0, this.v_restitution = 0, this.v_invMassA = 0, 
this.v_invMassB = 0, this.v_invIA = 0, this.v_invIB = 0;
for (var o = 0, n = this.p_localPoints; o < n.length; o++) xh(n[o]);
xh(this.p_localNormal), xh(this.p_localPoint), xh(this.p_localCenterA), xh(this.p_localCenterB), 
this.p_type = Pp.e_unset, this.p_radiusA = 0, this.p_radiusB = 0, this.p_pointCount = 0, 
this.p_invMassA = 0, this.p_invMassB = 0, this.p_invIA = 0, this.p_invIB = 0;
}, t.prototype.initConstraint = function(t) {
var e = this.m_fixtureA, o = this.m_fixtureB;
if (null !== e && null !== o) {
var n = e.m_body, i = o.m_body;
if (null !== n && null !== i) {
var r = e.m_shape, s = o.m_shape;
if (null !== r && null !== s) {
var a = this.m_manifold, l = a.pointCount;
this.v_invMassA = n.m_invMass, this.v_invMassB = i.m_invMass, this.v_invIA = n.m_invI, 
this.v_invIB = i.m_invI, this.v_friction = this.m_friction, this.v_restitution = this.m_restitution, 
this.v_tangentSpeed = this.m_tangentSpeed, this.v_pointCount = l, this.v_K.setZero(), 
this.v_normalMass.setZero(), this.p_invMassA = n.m_invMass, this.p_invMassB = i.m_invMass, 
this.p_invIA = n.m_invI, this.p_invIB = i.m_invI, Ah(this.p_localCenterA, n.m_sweep.localCenter), 
Ah(this.p_localCenterB, i.m_sweep.localCenter), this.p_radiusA = r.m_radius, this.p_radiusB = s.m_radius, 
this.p_type = a.type, Ah(this.p_localNormal, a.localNormal), Ah(this.p_localPoint, a.localPoint), 
this.p_pointCount = l;
for (var c = 0; c < ih.maxManifoldPoints; ++c) this.v_points[c].recycle(), xh(this.p_localPoints[c]);
for (c = 0; c < l; ++c) {
var u = a.points[c], h = this.v_points[c];
t.warmStarting && (h.normalImpulse = t.dtRatio * u.normalImpulse, h.tangentImpulse = t.dtRatio * u.tangentImpulse), 
Ah(this.p_localPoints[c], u.localPoint);
}
}
}
}
}, t.prototype.getManifold = function() {
return this.m_manifold;
}, t.prototype.getWorldManifold = function(t) {
var e = this.m_fixtureA, o = this.m_fixtureB;
if (null !== e && null !== o) {
var n = e.m_body, i = o.m_body;
if (null !== n && null !== i) {
var r = e.m_shape, s = o.m_shape;
if (null !== r && null !== s) return this.m_manifold.getWorldManifold(t, n.getTransform(), r.m_radius, i.getTransform(), s.m_radius);
}
}
}, t.prototype.setEnabled = function(t) {
this.m_enabledFlag = !!t;
}, t.prototype.isEnabled = function() {
return this.m_enabledFlag;
}, t.prototype.isTouching = function() {
return this.m_touchingFlag;
}, t.prototype.getNext = function() {
return this.m_next;
}, t.prototype.getFixtureA = function() {
return this.m_fixtureA;
}, t.prototype.getFixtureB = function() {
return this.m_fixtureB;
}, t.prototype.getChildIndexA = function() {
return this.m_indexA;
}, t.prototype.getChildIndexB = function() {
return this.m_indexB;
}, t.prototype.flagForFiltering = function() {
this.m_filterFlag = !0;
}, t.prototype.setFriction = function(t) {
this.m_friction = t;
}, t.prototype.getFriction = function() {
return this.m_friction;
}, t.prototype.resetFriction = function() {
var t = this.m_fixtureA, e = this.m_fixtureB;
null !== t && null !== e && (this.m_friction = um(t.m_friction, e.m_friction));
}, t.prototype.setRestitution = function(t) {
this.m_restitution = t;
}, t.prototype.getRestitution = function() {
return this.m_restitution;
}, t.prototype.resetRestitution = function() {
var t = this.m_fixtureA, e = this.m_fixtureB;
null !== t && null !== e && (this.m_restitution = hm(t.m_restitution, e.m_restitution));
}, t.prototype.setTangentSpeed = function(t) {
this.m_tangentSpeed = t;
}, t.prototype.getTangentSpeed = function() {
return this.m_tangentSpeed;
}, t.prototype.evaluate = function(t, e, o) {
var n = this.m_fixtureA, i = this.m_fixtureB;
null !== n && null !== i && this.m_evaluateFcn(t, e, n, this.m_indexA, o, i, this.m_indexB);
}, t.prototype.update = function(t) {
var e = this.m_fixtureA, o = this.m_fixtureB;
if (null !== e && null !== o) {
var n = e.m_body, i = o.m_body;
if (null !== n && null !== i) {
var r = e.m_shape, s = o.m_shape;
if (null !== r && null !== s) {
this.m_enabledFlag = !0;
var a = !1, l = this.m_touchingFlag, c = e.m_isSensor, u = o.m_isSensor, h = c || u, d = n.m_xf, p = i.m_xf;
if (h) a = Xd(r, this.m_indexA, s, this.m_indexB, d, p), this.m_manifold.pointCount = 0; else {
am.recycle(), am.set(this.m_manifold), this.m_manifold.recycle(), this.evaluate(this.m_manifold, d, p), 
a = this.m_manifold.pointCount > 0;
for (var m = 0; m < this.m_manifold.pointCount; ++m) {
var _ = this.m_manifold.points[m];
_.normalImpulse = 0, _.tangentImpulse = 0;
for (var f = 0; f < am.pointCount; ++f) {
var y = am.points[f];
if (y.id.key === _.id.key) {
_.normalImpulse = y.normalImpulse, _.tangentImpulse = y.tangentImpulse;
break;
}
}
}
a !== l && (n.setAwake(!0), i.setAwake(!0));
}
this.m_touchingFlag = a;
var v = "object" == typeof t && null !== t;
!l && a && v && t.beginContact(this), l && !a && v && t.endContact(this), !h && a && v && am && t.preSolve(this, am);
}
}
}
}, t.prototype.solvePositionConstraint = function(t) {
return this._solvePositionConstraint(t, null, null);
}, t.prototype.solvePositionConstraintTOI = function(t, e, o) {
return this._solvePositionConstraint(t, e, o);
}, t.prototype._solvePositionConstraint = function(t, e, o) {
var n = null !== e && null !== o, i = 0, r = this.m_fixtureA, s = this.m_fixtureB;
if (null === r || null === s) return i;
var a = r.m_body, l = s.m_body;
if (null === a || null === l) return i;
var c = a.c_position, u = l.c_position, h = this.p_localCenterA, d = this.p_localCenterB, p = 0, m = 0;
n && a !== e && a !== o || (p = this.p_invMassA, m = this.p_invIA);
var _ = 0, f = 0;
n && l !== e && l !== o || (_ = this.p_invMassB, f = this.p_invIB), Ah(fm, c.c);
var y = c.a;
Ah(vm, u.c);
for (var v = u.a, g = 0; g < this.p_pointCount; ++g) {
ad(xm, h, fm, y), ad(bm, d, vm, v);
var A = void 0;
switch (this.p_type) {
case Pp.e_circles:
qh(Cm, xm, this.p_localPoint), qh(wm, bm, this.p_localPoints[0]), Sh(Mm, wm, Cm), 
Dh(Mm), Mh(Im, .5, Cm, .5, wm), A = Lh(wm, Mm) - Lh(Cm, Mm) - this.p_radiusA - this.p_radiusB;
break;

case Pp.e_faceA:
kh(Mm, xm.q, this.p_localNormal), qh(Rm, xm, this.p_localPoint), qh(Sm, bm, this.p_localPoints[g]), 
A = Lh(Sm, Mm) - Lh(Rm, Mm) - this.p_radiusA - this.p_radiusB, Ah(Im, Sm);
break;

case Pp.e_faceB:
kh(Mm, bm.q, this.p_localNormal), qh(Rm, bm, this.p_localPoint), qh(Sm, xm, this.p_localPoints[g]), 
A = Lh(Sm, Mm) - Lh(Rm, Mm) - this.p_radiusA - this.p_radiusB, Ah(Im, Sm), bh(Mm);
break;

default:
return i;
}
Sh(Bm, Im, fm), Sh(Tm, Im, vm), i = rm(i, A);
var x = Uu((n ? ih.toiBaugarte : ih.baumgarte) * (A + ih.linearSlop), -ih.maxLinearCorrection, 0), b = Eh(Bm, Mm), C = Eh(Tm, Mm), w = p + _ + m * b * b + f * C * C;
Bh(Fm, w > 0 ? -x / w : 0, Mm), Fh(fm, p, Fm), y -= m * Eh(Bm, Fm), Th(vm, _, Fm), 
v += f * Eh(Tm, Fm);
}
return Ah(c.c, fm), c.a = y, Ah(u.c, vm), u.a = v, i;
}, t.prototype.initVelocityConstraint = function(t) {
var e = this.m_fixtureA, o = this.m_fixtureB;
if (null !== e && null !== o) {
var n = e.m_body, i = o.m_body;
if (null !== n && null !== i) {
var r = n.c_velocity, s = i.c_velocity, a = n.c_position, l = i.c_position, c = this.p_radiusA, u = this.p_radiusB, h = this.m_manifold, d = this.v_invMassA, p = this.v_invMassB, m = this.v_invIA, _ = this.v_invIB, f = this.p_localCenterA, y = this.p_localCenterB;
Ah(fm, a.c);
var v = a.a;
Ah(ym, r.v);
var g = r.w;
Ah(vm, l.c);
var A = l.a;
Ah(gm, s.v);
var x = s.w;
ad(xm, f, fm, v), ad(bm, y, vm, A), lm.recycle(), h.getWorldManifold(lm, xm, c, bm, u), 
Ah(this.v_normal, lm.normal);
for (var b = 0; b < this.v_pointCount; ++b) {
var C = this.v_points[b], w = lm.points[b];
Sh(C.rA, w, fm), Sh(C.rB, w, vm);
var S = Eh(C.rA, this.v_normal), R = Eh(C.rB, this.v_normal), B = d + p + m * S * S + _ * R * R;
C.normalMass = B > 0 ? 1 / B : 0, Nh(Am, this.v_normal, 1);
var T = Eh(C.rA, Am), F = Eh(C.rB, Am), M = d + p + m * T * T + _ * F * F;
C.tangentMass = M > 0 ? 1 / M : 0, C.velocityBias = 0;
var I = 0;
I += Lh(this.v_normal, gm), I += Lh(this.v_normal, Ph(Gm, x, C.rB)), I -= Lh(this.v_normal, ym), 
(I -= Lh(this.v_normal, Ph(Gm, g, C.rA))) < -ih.velocityThreshold && (C.velocityBias = -this.v_restitution * I);
}
if (2 == this.v_pointCount && t.blockSolve) {
var D = this.v_points[0], N = this.v_points[1], P = Eh(D.rA, this.v_normal), E = Eh(D.rB, this.v_normal), L = Eh(N.rA, this.v_normal), W = Eh(N.rB, this.v_normal), V = d + p + m * P * P + _ * E * E, O = d + p + m * L * L + _ * W * W, k = d + p + m * P * L + _ * E * W;
if (V * V < 1e3 * (V * O - k * k)) {
this.v_K.ex.setNum(V, k), this.v_K.ey.setNum(k, O);
var G = this.v_K.ex.x, z = this.v_K.ey.x, j = this.v_K.ex.y, q = this.v_K.ey.y, H = G * q - z * j;
0 !== H && (H = 1 / H), this.v_normalMass.ex.x = H * q, this.v_normalMass.ey.x = -H * z, 
this.v_normalMass.ex.y = -H * j, this.v_normalMass.ey.y = H * G;
} else this.v_pointCount = 1;
}
Ah(a.c, fm), a.a = v, Ah(r.v, ym), r.w = g, Ah(l.c, vm), l.a = A, Ah(s.v, gm), s.w = x;
}
}
}, t.prototype.warmStartConstraint = function() {
var t = this.m_fixtureA, e = this.m_fixtureB;
if (null !== t && null !== e) {
var o = t.m_body, n = e.m_body;
if (null !== o && null !== n) {
var i = o.c_velocity, r = n.c_velocity, s = this.v_invMassA, a = this.v_invIA, l = this.v_invMassB, c = this.v_invIB;
Ah(ym, i.v);
var u = i.w;
Ah(gm, r.v);
var h = r.w;
Ah(Mm, this.v_normal), Nh(Am, Mm, 1);
for (var d = 0; d < this.v_pointCount; ++d) {
var p = this.v_points[d];
Mh(Fm, p.normalImpulse, Mm, p.tangentImpulse, Am), u -= a * Eh(p.rA, Fm), Fh(ym, s, Fm), 
h += c * Eh(p.rB, Fm), Th(gm, l, Fm);
}
Ah(i.v, ym), i.w = u, Ah(r.v, gm), r.w = h;
}
}
}, t.prototype.storeConstraintImpulses = function() {
for (var t = this.m_manifold, e = 0; e < this.v_pointCount; ++e) t.points[e].normalImpulse = this.v_points[e].normalImpulse, 
t.points[e].tangentImpulse = this.v_points[e].tangentImpulse;
}, t.prototype.solveVelocityConstraint = function(t) {
var e = this.m_fixtureA, o = this.m_fixtureB;
if (null !== e && null !== o) {
var n = e.m_body, i = o.m_body;
if (null !== n && null !== i) {
var r = n.c_velocity, s = i.c_velocity, a = this.v_invMassA, l = this.v_invIA, c = this.v_invMassB, u = this.v_invIB;
Ah(ym, r.v);
var h = r.w;
Ah(gm, s.v);
var d = s.w;
Ah(Mm, this.v_normal), Nh(Am, Mm, 1);
for (var p = this.v_friction, m = 0; m < this.v_pointCount; ++m) {
var _ = this.v_points[m];
xh(Dm), Ch(Dm, gm), Ch(Dm, Ph(Gm, d, _.rB)), wh(Dm, ym), wh(Dm, Ph(Gm, h, _.rA));
var f = Lh(Dm, Am) - this.v_tangentSpeed, y = _.tangentMass * -f, v = p * _.normalImpulse;
y = (A = Uu(_.tangentImpulse + y, -v, v)) - _.tangentImpulse, _.tangentImpulse = A, 
Bh(Fm, y, Am), Fh(ym, a, Fm), h -= l * Eh(_.rA, Fm), Th(gm, c, Fm), d += u * Eh(_.rB, Fm);
}
if (1 == this.v_pointCount || 0 == t.blockSolve) for (var g = 0; g < this.v_pointCount; ++g) {
_ = this.v_points[g], xh(Dm), Ch(Dm, gm), Ch(Dm, Ph(Gm, d, _.rB)), wh(Dm, ym), wh(Dm, Ph(Gm, h, _.rA));
var A, x = Lh(Dm, Mm);
y = -_.normalMass * (x - _.velocityBias), y = (A = im(_.normalImpulse + y, 0)) - _.normalImpulse, 
_.normalImpulse = A, Bh(Fm, y, Mm), Fh(ym, a, Fm), h -= l * Eh(_.rA, Fm), Th(gm, c, Fm), 
d += u * Eh(_.rB, Fm);
} else {
var b = this.v_points[0], C = this.v_points[1];
gh(Lm, b.normalImpulse, C.normalImpulse), xh(Nm), Ch(Nm, gm), Ch(Nm, Ph(Gm, d, b.rB)), 
wh(Nm, ym), wh(Nm, Ph(Gm, h, b.rA)), xh(Pm), Ch(Pm, gm), Ch(Pm, Ph(Gm, d, C.rB)), 
wh(Pm, ym), wh(Pm, Ph(Gm, h, C.rA));
var w = Lh(Nm, Mm), S = Lh(Pm, Mm);
for (gh(Em, w - b.velocityBias, S - C.velocityBias), Em.x -= this.v_K.ex.x * Lm.x + this.v_K.ey.x * Lm.y, 
Em.y -= this.v_K.ex.y * Lm.x + this.v_K.ey.y * Lm.y; ;) {
if (xh(Wm), Wm.x = -(this.v_normalMass.ex.x * Em.x + this.v_normalMass.ey.x * Em.y), 
Wm.y = -(this.v_normalMass.ex.y * Em.x + this.v_normalMass.ey.y * Em.y), Wm.x >= 0 && Wm.y >= 0) {
Sh(Vm, Wm, Lm), Bh(Om, Vm.x, Mm), Bh(km, Vm.y, Mm), Ih(ym, -a, Om, -a, km, 1, ym), 
h -= l * (Eh(b.rA, Om) + Eh(C.rA, km)), Ih(gm, c, Om, c, km, 1, gm), d += u * (Eh(b.rB, Om) + Eh(C.rB, km)), 
b.normalImpulse = Wm.x, C.normalImpulse = Wm.y;
break;
}
if (Wm.x = -b.normalMass * Em.x, Wm.y = 0, w = 0, S = this.v_K.ex.y * Wm.x + Em.y, 
Wm.x >= 0 && S >= 0) {
Sh(Vm, Wm, Lm), Bh(Om, Vm.x, Mm), Bh(km, Vm.y, Mm), Ih(ym, -a, Om, -a, km, 1, ym), 
h -= l * (Eh(b.rA, Om) + Eh(C.rA, km)), Ih(gm, c, Om, c, km, 1, gm), d += u * (Eh(b.rB, Om) + Eh(C.rB, km)), 
b.normalImpulse = Wm.x, C.normalImpulse = Wm.y;
break;
}
if (Wm.x = 0, Wm.y = -C.normalMass * Em.y, w = this.v_K.ey.x * Wm.y + Em.x, S = 0, 
Wm.y >= 0 && w >= 0) {
Sh(Vm, Wm, Lm), Bh(Om, Vm.x, Mm), Bh(km, Vm.y, Mm), Ih(ym, -a, Om, -a, km, 1, ym), 
h -= l * (Eh(b.rA, Om) + Eh(C.rA, km)), Ih(gm, c, Om, c, km, 1, gm), d += u * (Eh(b.rB, Om) + Eh(C.rB, km)), 
b.normalImpulse = Wm.x, C.normalImpulse = Wm.y;
break;
}
if (Wm.x = 0, Wm.y = 0, w = Em.x, S = Em.y, w >= 0 && S >= 0) {
Sh(Vm, Wm, Lm), Bh(Om, Vm.x, Mm), Bh(km, Vm.y, Mm), Ih(ym, -a, Om, -a, km, 1, ym), 
h -= l * (Eh(b.rA, Om) + Eh(C.rA, km)), Ih(gm, c, Om, c, km, 1, gm), d += u * (Eh(b.rB, Om) + Eh(C.rB, km)), 
b.normalImpulse = Wm.x, C.normalImpulse = Wm.y;
break;
}
break;
}
}
Ah(r.v, ym), r.w = h, Ah(s.v, gm), s.w = d;
}
}
}, t.addType = function(t, e, o) {
mm[t] = mm[t] || {}, mm[t][e] = o;
}, t.create = function(t, e, o, n) {
var i, r = t.m_shape.m_type, s = o.m_shape.m_type, a = sm.allocate();
if (i = mm[r] && mm[r][s]) a.initialize(t, e, o, n, i); else {
if (!(i = mm[s] && mm[s][r])) return null;
a.initialize(o, n, t, e, i);
}
t = a.m_fixtureA, o = a.m_fixtureB, e = a.getChildIndexA(), n = a.getChildIndexB();
var l = t.m_body, c = o.m_body;
return a.m_nodeA.contact = a, a.m_nodeA.other = c, a.m_nodeA.prev = null, a.m_nodeA.next = l.m_contactList, 
null != l.m_contactList && (l.m_contactList.prev = a.m_nodeA), l.m_contactList = a.m_nodeA, 
a.m_nodeB.contact = a, a.m_nodeB.other = l, a.m_nodeB.prev = null, a.m_nodeB.next = c.m_contactList, 
null != c.m_contactList && (c.m_contactList.prev = a.m_nodeB), c.m_contactList = a.m_nodeB, 
0 == t.isSensor() && 0 == o.isSensor() && (l.setAwake(!0), c.setAwake(!0)), a;
}, t.destroy = function(t, e) {
var o = t.m_fixtureA, n = t.m_fixtureB;
if (null !== o && null !== n) {
var i = o.m_body, r = n.m_body;
null !== i && null !== r && (t.isTouching() && e.endContact(t), t.m_nodeA.prev && (t.m_nodeA.prev.next = t.m_nodeA.next), 
t.m_nodeA.next && (t.m_nodeA.next.prev = t.m_nodeA.prev), t.m_nodeA == i.m_contactList && (i.m_contactList = t.m_nodeA.next), 
t.m_nodeB.prev && (t.m_nodeB.prev.next = t.m_nodeB.next), t.m_nodeB.next && (t.m_nodeB.next.prev = t.m_nodeB.prev), 
t.m_nodeB == r.m_contactList && (r.m_contactList = t.m_nodeB.next), t.m_manifold.pointCount > 0 && !o.m_isSensor && !n.m_isSensor && (i.setAwake(!0), 
r.setAwake(!0)), sm.release(t));
}
}, t;
}(), jm = {
gravity: Zu.zero(),
allowSleep: !0,
warmStarting: !0,
continuousPhysics: !0,
subStepping: !1,
blockSolve: !0,
velocityIterations: 8,
positionIterations: 3
}, qm = function() {
function t(e) {
if (!(this instanceof t)) return new t(e);
this.s_step = new bp(), e ? Zu.isValid(e) && (e = {
gravity: e
}) : e = {}, e = Gu(e, jm), this.m_solver = new Np(this), this.m_broadPhase = new mh(), 
this.m_contactList = null, this.m_contactCount = 0, this.m_bodyList = null, this.m_bodyCount = 0, 
this.m_jointList = null, this.m_jointCount = 0, this.m_stepComplete = !0, this.m_allowSleep = e.allowSleep, 
this.m_gravity = Zu.clone(e.gravity), this.m_clearForces = !0, this.m_newFixture = !1, 
this.m_locked = !1, this.m_warmStarting = e.warmStarting, this.m_continuousPhysics = e.continuousPhysics, 
this.m_subStepping = e.subStepping, this.m_blockSolve = e.blockSolve, this.m_velocityIterations = e.velocityIterations, 
this.m_positionIterations = e.positionIterations, this.m_t = 0, this.m_step_callback = [];
}
return t.prototype._serialize = function() {
for (var t = [], e = [], o = this.getBodyList(); o; o = o.getNext()) t.push(o);
for (var n = this.getJointList(); n; n = n.getNext()) "function" == typeof n._serialize && e.push(n);
return {
gravity: this.m_gravity,
bodies: t,
joints: e
};
}, t._deserialize = function(e, o, n) {
if (!e) return new t();
var i = new t(e.gravity);
if (e.bodies) for (var r = e.bodies.length - 1; r >= 0; r -= 1) i._addBody(n(wd, e.bodies[r], i));
if (e.joints) for (r = e.joints.length - 1; r >= 0; r--) i.createJoint(n(Rd, e.joints[r], i));
return i;
}, t.prototype.getBodyList = function() {
return this.m_bodyList;
}, t.prototype.getJointList = function() {
return this.m_jointList;
}, t.prototype.getContactList = function() {
return this.m_contactList;
}, t.prototype.getBodyCount = function() {
return this.m_bodyCount;
}, t.prototype.getJointCount = function() {
return this.m_jointCount;
}, t.prototype.getContactCount = function() {
return this.m_contactCount;
}, t.prototype.setGravity = function(t) {
this.m_gravity.set(t);
}, t.prototype.getGravity = function() {
return this.m_gravity;
}, t.prototype.isLocked = function() {
return this.m_locked;
}, t.prototype.setAllowSleeping = function(t) {
if (t != this.m_allowSleep && (this.m_allowSleep = t, 0 == this.m_allowSleep)) for (var e = this.m_bodyList; e; e = e.m_next) e.setAwake(!0);
}, t.prototype.getAllowSleeping = function() {
return this.m_allowSleep;
}, t.prototype.setWarmStarting = function(t) {
this.m_warmStarting = t;
}, t.prototype.getWarmStarting = function() {
return this.m_warmStarting;
}, t.prototype.setContinuousPhysics = function(t) {
this.m_continuousPhysics = t;
}, t.prototype.getContinuousPhysics = function() {
return this.m_continuousPhysics;
}, t.prototype.setSubStepping = function(t) {
this.m_subStepping = t;
}, t.prototype.getSubStepping = function() {
return this.m_subStepping;
}, t.prototype.setAutoClearForces = function(t) {
this.m_clearForces = t;
}, t.prototype.getAutoClearForces = function() {
return this.m_clearForces;
}, t.prototype.clearForces = function() {
for (var t = this.m_bodyList; t; t = t.getNext()) t.m_force.setZero(), t.m_torque = 0;
}, t.prototype.queryAABB = function(t, e) {
var o = this.m_broadPhase;
this.m_broadPhase.query(t, function(t) {
var n = o.getUserData(t);
return e(n.fixture);
});
}, t.prototype.rayCast = function(t, e, o) {
var n = this.m_broadPhase;
this.m_broadPhase.rayCast({
maxFraction: 1,
p1: t,
p2: e
}, function(t, e) {
var i = n.getUserData(e), r = i.fixture, s = i.childIndex, a = {};
if (r.rayCast(a, t, s)) {
var l = a.fraction, c = Zu.add(Zu.mulNumVec2(1 - l, t.p1), Zu.mulNumVec2(l, t.p2));
return o(r, c, a.normal, l);
}
return t.maxFraction;
});
}, t.prototype.getProxyCount = function() {
return this.m_broadPhase.getProxyCount();
}, t.prototype.getTreeHeight = function() {
return this.m_broadPhase.getTreeHeight();
}, t.prototype.getTreeBalance = function() {
return this.m_broadPhase.getTreeBalance();
}, t.prototype.getTreeQuality = function() {
return this.m_broadPhase.getTreeQuality();
}, t.prototype.shiftOrigin = function(t) {
if (!this.isLocked()) {
for (var e = this.m_bodyList; e; e = e.m_next) e.m_xf.p.sub(t), e.m_sweep.c0.sub(t), 
e.m_sweep.c.sub(t);
for (var o = this.m_jointList; o; o = o.m_next) o.shiftOrigin(t);
this.m_broadPhase.shiftOrigin(t);
}
}, t.prototype._addBody = function(t) {
this.isLocked() || (t.m_prev = null, t.m_next = this.m_bodyList, this.m_bodyList && (this.m_bodyList.m_prev = t), 
this.m_bodyList = t, ++this.m_bodyCount, this.publish("add-body", t));
}, t.prototype.createBody = function(t, e) {
if (this.isLocked()) return null;
var o = {};
t && (Zu.isValid(t) ? o = {
position: t,
angle: e
} : "object" == typeof t && (o = t));
var n = new wd(this, o);
return this._addBody(n), n;
}, t.prototype.createDynamicBody = function(t, e) {
var o = {};
return t && (Zu.isValid(t) ? o = {
position: t,
angle: e
} : "object" == typeof t && (o = t)), o.type = "dynamic", this.createBody(o);
}, t.prototype.createKinematicBody = function(t, e) {
var o = {};
return t && (Zu.isValid(t) ? o = {
position: t,
angle: e
} : "object" == typeof t && (o = t)), o.type = "kinematic", this.createBody(o);
}, t.prototype.destroyBody = function(t) {
if (!this.isLocked()) {
if (t.m_destroyed) return !1;
for (var e = t.m_jointList; e; ) {
var o = e;
e = e.next, this.publish("remove-joint", o.joint), this.destroyJoint(o.joint), t.m_jointList = e;
}
t.m_jointList = null;
for (var n = t.m_contactList; n; ) {
var i = n;
n = n.next, this.destroyContact(i.contact), t.m_contactList = n;
}
t.m_contactList = null;
for (var r = t.m_fixtureList; r; ) {
var s = r;
r = r.m_next, this.publish("remove-fixture", s), s.destroyProxies(this.m_broadPhase), 
t.m_fixtureList = r;
}
return t.m_fixtureList = null, t.m_prev && (t.m_prev.m_next = t.m_next), t.m_next && (t.m_next.m_prev = t.m_prev), 
t == this.m_bodyList && (this.m_bodyList = t.m_next), t.m_destroyed = !0, --this.m_bodyCount, 
this.publish("remove-body", t), !0;
}
}, t.prototype.createJoint = function(t) {
if (this.isLocked()) return null;
if (t.m_prev = null, t.m_next = this.m_jointList, this.m_jointList && (this.m_jointList.m_prev = t), 
this.m_jointList = t, ++this.m_jointCount, t.m_edgeA.joint = t, t.m_edgeA.other = t.m_bodyB, 
t.m_edgeA.prev = null, t.m_edgeA.next = t.m_bodyA.m_jointList, t.m_bodyA.m_jointList && (t.m_bodyA.m_jointList.prev = t.m_edgeA), 
t.m_bodyA.m_jointList = t.m_edgeA, t.m_edgeB.joint = t, t.m_edgeB.other = t.m_bodyA, 
t.m_edgeB.prev = null, t.m_edgeB.next = t.m_bodyB.m_jointList, t.m_bodyB.m_jointList && (t.m_bodyB.m_jointList.prev = t.m_edgeB), 
t.m_bodyB.m_jointList = t.m_edgeB, 0 == t.m_collideConnected) for (var e = t.m_bodyB.getContactList(); e; e = e.next) e.other == t.m_bodyA && e.contact.flagForFiltering();
return this.publish("add-joint", t), t;
}, t.prototype.destroyJoint = function(t) {
if (!this.isLocked()) {
t.m_prev && (t.m_prev.m_next = t.m_next), t.m_next && (t.m_next.m_prev = t.m_prev), 
t == this.m_jointList && (this.m_jointList = t.m_next);
var e = t.m_bodyA, o = t.m_bodyB;
if (e.setAwake(!0), o.setAwake(!0), t.m_edgeA.prev && (t.m_edgeA.prev.next = t.m_edgeA.next), 
t.m_edgeA.next && (t.m_edgeA.next.prev = t.m_edgeA.prev), t.m_edgeA == e.m_jointList && (e.m_jointList = t.m_edgeA.next), 
t.m_edgeA.prev = null, t.m_edgeA.next = null, t.m_edgeB.prev && (t.m_edgeB.prev.next = t.m_edgeB.next), 
t.m_edgeB.next && (t.m_edgeB.next.prev = t.m_edgeB.prev), t.m_edgeB == o.m_jointList && (o.m_jointList = t.m_edgeB.next), 
t.m_edgeB.prev = null, t.m_edgeB.next = null, --this.m_jointCount, 0 == t.m_collideConnected) for (var n = o.getContactList(); n; ) n.other == e && n.contact.flagForFiltering(), 
n = n.next;
this.publish("remove-joint", t);
}
}, t.prototype.step = function(t, e, o) {
if (this.publish("pre-step", t), (0 | e) !== e && (e = 0), e = e || this.m_velocityIterations, 
o = o || this.m_positionIterations, this.m_newFixture && (this.findNewContacts(), 
this.m_newFixture = !1), this.m_locked = !0, this.s_step.reset(t), this.s_step.velocityIterations = e, 
this.s_step.positionIterations = o, this.s_step.warmStarting = this.m_warmStarting, 
this.s_step.blockSolve = this.m_blockSolve, this.updateContacts(), this.m_stepComplete && t > 0) {
this.m_solver.solveWorld(this.s_step);
for (var n = this.m_bodyList; n; n = n.getNext()) 0 != n.m_islandFlag && (n.isStatic() || n.synchronizeFixtures());
this.findNewContacts();
}
var i;
for (this.m_continuousPhysics && t > 0 && this.m_solver.solveWorldTOI(this.s_step), 
this.m_clearForces && this.clearForces(), this.m_locked = !1; i = this.m_step_callback.shift(); ) i(this);
this.publish("post-step", t);
}, t.prototype.queueUpdate = function(t) {
this.isLocked() ? this.m_step_callback.push(t) : t(this);
}, t.prototype.findNewContacts = function() {
var t = this;
this.m_broadPhase.updatePairs(function(e, o) {
return t.createContact(e, o);
});
}, t.prototype.createContact = function(t, e) {
var o = t.fixture, n = e.fixture, i = t.childIndex, r = e.childIndex, s = o.getBody(), a = n.getBody();
if (s != a) {
for (var l = a.getContactList(); l; ) {
if (l.other == s) {
var c = l.contact.getFixtureA(), u = l.contact.getFixtureB(), h = l.contact.getChildIndexA(), d = l.contact.getChildIndexB();
if (c == o && u == n && h == i && d == r) return;
if (c == n && u == o && h == r && d == i) return;
}
l = l.next;
}
if (0 != a.shouldCollide(s) && 0 != n.shouldCollide(o)) {
var p = zm.create(o, i, n, r);
null != p && (p.m_prev = null, null != this.m_contactList && (p.m_next = this.m_contactList, 
this.m_contactList.m_prev = p), this.m_contactList = p, ++this.m_contactCount);
}
}
}, t.prototype.updateContacts = function() {
for (var t, e = this.m_contactList; t = e; ) {
e = t.getNext();
var o = t.getFixtureA(), n = t.getFixtureB(), i = t.getChildIndexA(), r = t.getChildIndexB(), s = o.getBody(), a = n.getBody();
if (t.m_filterFlag) {
if (0 == a.shouldCollide(s)) {
this.destroyContact(t);
continue;
}
if (0 == n.shouldCollide(o)) {
this.destroyContact(t);
continue;
}
t.m_filterFlag = !1;
}
var l = s.isAwake() && !s.isStatic(), c = a.isAwake() && !a.isStatic();
if (0 != l || 0 != c) {
var u = o.m_proxies[i].proxyId, h = n.m_proxies[r].proxyId;
0 != this.m_broadPhase.testOverlap(u, h) ? t.update(this) : this.destroyContact(t);
}
}
}, t.prototype.destroyContact = function(t) {
t.m_prev && (t.m_prev.m_next = t.m_next), t.m_next && (t.m_next.m_prev = t.m_prev), 
t == this.m_contactList && (this.m_contactList = t.m_next), zm.destroy(t, this), 
--this.m_contactCount;
}, t.prototype.on = function(t, e) {
return "string" != typeof t || "function" != typeof e || (this._listeners || (this._listeners = {}), 
this._listeners[t] || (this._listeners[t] = []), this._listeners[t].push(e)), this;
}, t.prototype.off = function(t, e) {
if ("string" != typeof t || "function" != typeof e) return this;
var o = this._listeners && this._listeners[t];
if (!o || !o.length) return this;
var n = o.indexOf(e);
return n >= 0 && o.splice(n, 1), this;
}, t.prototype.publish = function(t, e, o, n) {
var i = this._listeners && this._listeners[t];
if (!i || !i.length) return 0;
for (var r = 0; r < i.length; r++) i[r].call(this, e, o, n);
return i.length;
}, t.prototype.beginContact = function(t) {
this.publish("begin-contact", t);
}, t.prototype.endContact = function(t) {
this.publish("end-contact", t);
}, t.prototype.preSolve = function(t, e) {
this.publish("pre-solve", t, e);
}, t.prototype.postSolve = function(t, e) {
this.publish("post-solve", t, e);
}, t;
}(), Hm = function() {
function t(e, o, n) {
if (!(this instanceof t)) return new t(e, o, n);
void 0 === e ? (this.x = 0, this.y = 0, this.z = 0) : "object" == typeof e ? (this.x = e.x, 
this.y = e.y, this.z = e.z) : (this.x = e, this.y = o, this.z = n);
}
return t.prototype._serialize = function() {
return {
x: this.x,
y: this.y,
z: this.z
};
}, t._deserialize = function(e) {
var o = Object.create(t.prototype);
return o.x = e.x, o.y = e.y, o.z = e.z, o;
}, t.neo = function(e, o, n) {
var i = Object.create(t.prototype);
return i.x = e, i.y = o, i.z = n, i;
}, t.zero = function() {
var e = Object.create(t.prototype);
return e.x = 0, e.y = 0, e.z = 0, e;
}, t.clone = function(e) {
return t.neo(e.x, e.y, e.z);
}, t.prototype.toString = function() {
return JSON.stringify(this);
}, t.isValid = function(t) {
return null != t && Number.isFinite(t.x) && Number.isFinite(t.y) && Number.isFinite(t.z);
}, t.assert = function() {}, t.prototype.setZero = function() {
return this.x = 0, this.y = 0, this.z = 0, this;
}, t.prototype.set = function(t, e, o) {
return this.x = t, this.y = e, this.z = o, this;
}, t.prototype.add = function(t) {
return this.x += t.x, this.y += t.y, this.z += t.z, this;
}, t.prototype.sub = function(t) {
return this.x -= t.x, this.y -= t.y, this.z -= t.z, this;
}, t.prototype.mul = function(t) {
return this.x *= t, this.y *= t, this.z *= t, this;
}, t.areEqual = function(t, e) {
return t === e || "object" == typeof t && null !== t && "object" == typeof e && null !== e && t.x === e.x && t.y === e.y && t.z === e.z;
}, t.dot = function(t, e) {
return t.x * e.x + t.y * e.y + t.z * e.z;
}, t.cross = function(e, o) {
return new t(e.y * o.z - e.z * o.y, e.z * o.x - e.x * o.z, e.x * o.y - e.y * o.x);
}, t.add = function(e, o) {
return new t(e.x + o.x, e.y + o.y, e.z + o.z);
}, t.sub = function(e, o) {
return new t(e.x - o.x, e.y - o.y, e.z - o.z);
}, t.mul = function(e, o) {
return new t(o * e.x, o * e.y, o * e.z);
}, t.prototype.neg = function() {
return this.x = -this.x, this.y = -this.y, this.z = -this.z, this;
}, t.neg = function(e) {
return new t(-e.x, -e.y, -e.z);
}, t;
}(), Um = vh(0, 0), Ym = vh(0, 0), Xm = function(t) {
function e(o, n) {
var i = this;
return i instanceof e ? ((i = t.call(this) || this).m_type = e.TYPE, i.m_radius = ih.polygonRadius, 
i.m_vertex1 = o ? Zu.clone(o) : Zu.zero(), i.m_vertex2 = n ? Zu.clone(n) : Zu.zero(), 
i.m_vertex0 = Zu.zero(), i.m_vertex3 = Zu.zero(), i.m_hasVertex0 = !1, i.m_hasVertex3 = !1, 
i) : new e(o, n);
}
return Ou(e, t), e.prototype._serialize = function() {
return {
type: this.m_type,
vertex1: this.m_vertex1,
vertex2: this.m_vertex2,
vertex0: this.m_vertex0,
vertex3: this.m_vertex3
};
}, e._deserialize = function(t) {
var o = new e(t.vertex1, t.vertex2);
return o.m_hasVertex0 && o.setPrevVertex(t.vertex0), o.m_hasVertex3 && o.setNextVertex(t.vertex3), 
o;
}, e.prototype._reset = function() {}, e.prototype.getRadius = function() {
return this.m_radius;
}, e.prototype.getType = function() {
return this.m_type;
}, e.prototype.setNext = function(t) {
return this.setNextVertex(t);
}, e.prototype.setNextVertex = function(t) {
return t ? (this.m_vertex3.setVec2(t), this.m_hasVertex3 = !0) : (this.m_vertex3.setZero(), 
this.m_hasVertex3 = !1), this;
}, e.prototype.getNextVertex = function() {
return this.m_vertex3;
}, e.prototype.setPrev = function(t) {
return this.setPrevVertex(t);
}, e.prototype.setPrevVertex = function(t) {
return t ? (this.m_vertex0.setVec2(t), this.m_hasVertex0 = !0) : (this.m_vertex0.setZero(), 
this.m_hasVertex0 = !1), this;
}, e.prototype.getPrevVertex = function() {
return this.m_vertex0;
}, e.prototype._set = function(t, e) {
return this.m_vertex1.setVec2(t), this.m_vertex2.setVec2(e), this.m_hasVertex0 = !1, 
this.m_hasVertex3 = !1, this;
}, e.prototype._clone = function() {
var t = new e();
return t.m_type = this.m_type, t.m_radius = this.m_radius, t.m_vertex1.setVec2(this.m_vertex1), 
t.m_vertex2.setVec2(this.m_vertex2), t.m_vertex0.setVec2(this.m_vertex0), t.m_vertex3.setVec2(this.m_vertex3), 
t.m_hasVertex0 = this.m_hasVertex0, t.m_hasVertex3 = this.m_hasVertex3, t;
}, e.prototype.getChildCount = function() {
return 1;
}, e.prototype.testPoint = function() {
return !1;
}, e.prototype.rayCast = function(t, e, o) {
var n = Kh.mulTVec2(o.q, Zu.sub(e.p1, o.p)), i = Kh.mulTVec2(o.q, Zu.sub(e.p2, o.p)), r = Zu.sub(i, n), s = this.m_vertex1, a = this.m_vertex2, l = Zu.sub(a, s), c = Zu.neo(l.y, -l.x);
c.normalize();
var u = Zu.dot(c, Zu.sub(s, n)), h = Zu.dot(c, r);
if (0 == h) return !1;
var d = u / h;
if (d < 0 || e.maxFraction < d) return !1;
var p = Zu.add(n, Zu.mulNumVec2(d, r)), m = Zu.sub(a, s), _ = Zu.dot(m, m);
if (0 == _) return !1;
var f = Zu.dot(Zu.sub(p, s), m) / _;
return !(f < 0 || 1 < f || (t.fraction = d, t.normal = u > 0 ? Kh.mulVec2(o.q, c).neg() : Kh.mulVec2(o.q, c), 
0));
}, e.prototype.computeAABB = function(t, e) {
qh(Um, e, this.m_vertex1), qh(Ym, e, this.m_vertex2), eh.combinePoints(t, Um, Ym), 
eh.extend(t, this.m_radius);
}, e.prototype.computeMass = function(t) {
t.mass = 0, Mh(t.center, .5, this.m_vertex1, .5, this.m_vertex2), t.I = 0;
}, e.prototype.computeDistanceProxy = function(t) {
t.m_vertices[0] = this.m_vertex1, t.m_vertices[1] = this.m_vertex2, t.m_vertices.length = 2, 
t.m_count = 2, t.m_radius = this.m_radius;
}, e.TYPE = "edge", e;
}(ld), Jm = vh(0, 0), Qm = vh(0, 0), Km = function(t) {
function e(o, n) {
var i = this;
return i instanceof e ? ((i = t.call(this) || this).m_type = e.TYPE, i.m_radius = ih.polygonRadius, 
i.m_vertices = [], i.m_count = 0, i.m_prevVertex = null, i.m_nextVertex = null, 
i.m_hasPrevVertex = !1, i.m_hasNextVertex = !1, i.m_isLoop = !!n, o && o.length && (n ? i._createLoop(o) : i._createChain(o)), 
i) : new e(o, n);
}
return Ou(e, t), e.prototype._serialize = function() {
var t = {
type: this.m_type,
vertices: this.m_isLoop ? this.m_vertices.slice(0, this.m_vertices.length - 1) : this.m_vertices,
isLoop: this.m_isLoop,
hasPrevVertex: this.m_hasPrevVertex,
hasNextVertex: this.m_hasNextVertex,
prevVertex: null,
nextVertex: null
};
return this.m_prevVertex && (t.prevVertex = this.m_prevVertex), this.m_nextVertex && (t.nextVertex = this.m_nextVertex), 
t;
}, e._deserialize = function(t) {
var o = [];
if (t.vertices) for (var n = 0; n < t.vertices.length; n++) o.push(t.vertices[n]);
var i = new e(o, t.isLoop);
return t.prevVertex && i.setPrevVertex(t.prevVertex), t.nextVertex && i.setNextVertex(t.nextVertex), 
i;
}, e.prototype.getType = function() {
return this.m_type;
}, e.prototype.getRadius = function() {
return this.m_radius;
}, e.prototype._createLoop = function(t) {
if (!(t.length < 3)) {
this.m_vertices = [], this.m_count = t.length + 1;
for (var e = 0; e < t.length; ++e) this.m_vertices[e] = Zu.clone(t[e]);
return this.m_vertices[t.length] = Zu.clone(t[0]), this.m_prevVertex = this.m_vertices[this.m_count - 2], 
this.m_nextVertex = this.m_vertices[1], this.m_hasPrevVertex = !0, this.m_hasNextVertex = !0, 
this;
}
}, e.prototype._createChain = function(t) {
this.m_vertices = [], this.m_count = t.length;
for (var e = 0; e < t.length; ++e) this.m_vertices[e] = Zu.clone(t[e]);
return this.m_prevVertex = null, this.m_nextVertex = null, this.m_hasPrevVertex = !1, 
this.m_hasNextVertex = !1, this;
}, e.prototype._reset = function() {
this.m_isLoop ? this._createLoop(this.m_vertices.slice(0, this.m_vertices.length - 1)) : this._createChain(this.m_vertices);
}, e.prototype.setPrevVertex = function(t) {
this.m_prevVertex = t, this.m_hasPrevVertex = !0;
}, e.prototype.getPrevVertex = function() {
return this.m_prevVertex;
}, e.prototype.setNextVertex = function(t) {
this.m_nextVertex = t, this.m_hasNextVertex = !0;
}, e.prototype.getNextVertex = function() {
return this.m_nextVertex;
}, e.prototype._clone = function() {
var t = new e();
return t._createChain(this.m_vertices), t.m_type = this.m_type, t.m_radius = this.m_radius, 
t.m_prevVertex = this.m_prevVertex, t.m_nextVertex = this.m_nextVertex, t.m_hasPrevVertex = this.m_hasPrevVertex, 
t.m_hasNextVertex = this.m_hasNextVertex, t;
}, e.prototype.getChildCount = function() {
return this.m_count - 1;
}, e.prototype.getChildEdge = function(t, e) {
t.m_type = Xm.TYPE, t.m_radius = this.m_radius, t.m_vertex1 = this.m_vertices[e], 
t.m_vertex2 = this.m_vertices[e + 1], e > 0 ? (t.m_vertex0 = this.m_vertices[e - 1], 
t.m_hasVertex0 = !0) : (t.m_vertex0 = this.m_prevVertex, t.m_hasVertex0 = this.m_hasPrevVertex), 
e < this.m_count - 2 ? (t.m_vertex3 = this.m_vertices[e + 2], t.m_hasVertex3 = !0) : (t.m_vertex3 = this.m_nextVertex, 
t.m_hasVertex3 = this.m_hasNextVertex);
}, e.prototype.getVertex = function(t) {
return t < this.m_count ? this.m_vertices[t] : this.m_vertices[0];
}, e.prototype.isLoop = function() {
return this.m_isLoop;
}, e.prototype.testPoint = function() {
return !1;
}, e.prototype.rayCast = function(t, e, o, n) {
return new Xm(this.getVertex(n), this.getVertex(n + 1)).rayCast(t, e, o, 0);
}, e.prototype.computeAABB = function(t, e, o) {
qh(Jm, e, this.getVertex(o)), qh(Qm, e, this.getVertex(o + 1)), eh.combinePoints(t, Jm, Qm);
}, e.prototype.computeMass = function(t) {
t.mass = 0, xh(t.center), t.I = 0;
}, e.prototype.computeDistanceProxy = function(t, e) {
t.m_vertices[0] = this.getVertex(e), t.m_vertices[1] = this.getVertex(e + 1), t.m_count = 2, 
t.m_radius = this.m_radius;
}, e.TYPE = "chain", e;
}(ld), Zm = Math.max, $m = Math.min, t_ = vh(0, 0), e_ = vh(0, 0), o_ = vh(0, 0), n_ = vh(0, 0), i_ = vh(0, 0), r_ = vh(0, 0), s_ = function(t) {
function e(o) {
var n = this;
return n instanceof e ? ((n = t.call(this) || this).m_type = e.TYPE, n.m_radius = ih.polygonRadius, 
n.m_centroid = Zu.zero(), n.m_vertices = [], n.m_normals = [], n.m_count = 0, o && o.length && n._set(o), 
n) : new e(o);
}
return Ou(e, t), e.prototype._serialize = function() {
return {
type: this.m_type,
vertices: this.m_vertices
};
}, e._deserialize = function(t) {
var o = [];
if (t.vertices) for (var n = 0; n < t.vertices.length; n++) o.push(t.vertices[n]);
return new e(o);
}, e.prototype.getType = function() {
return this.m_type;
}, e.prototype.getRadius = function() {
return this.m_radius;
}, e.prototype._clone = function() {
var t = new e();
t.m_type = this.m_type, t.m_radius = this.m_radius, t.m_count = this.m_count, t.m_centroid.setVec2(this.m_centroid);
for (var o = 0; o < this.m_count; o++) t.m_vertices.push(this.m_vertices[o].clone());
for (o = 0; o < this.m_normals.length; o++) t.m_normals.push(this.m_normals[o].clone());
return t;
}, e.prototype.getChildCount = function() {
return 1;
}, e.prototype._reset = function() {
this._set(this.m_vertices);
}, e.prototype._set = function(t) {
if (t.length < 3) this._setAsBox(1, 1); else {
for (var e = $m(t.length, ih.maxPolygonVertices), o = [], n = 0; n < e; ++n) {
for (var i = t[n], r = !0, s = 0; s < o.length; ++s) if (Zu.distanceSquared(i, o[s]) < .25 * ih.linearSlopSquared) {
r = !1;
break;
}
r && o.push(Zu.clone(i));
}
if ((e = o.length) < 3) this._setAsBox(1, 1); else {
var a = 0, l = o[0].x;
for (n = 1; n < e; ++n) {
var c = o[n].x;
(c > l || c === l && o[n].y < o[a].y) && (a = n, l = c);
}
for (var u = [], h = 0, d = a; ;) {
u[h] = d;
var p = 0;
for (s = 1; s < e; ++s) if (p !== d) {
var m = Zu.sub(o[p], o[u[h]]), _ = (i = Zu.sub(o[s], o[u[h]]), Zu.crossVec2Vec2(m, i));
_ < 0 && (p = s), 0 === _ && i.lengthSquared() > m.lengthSquared() && (p = s);
} else p = s;
if (++h, d = p, p === a) break;
}
if (h < 3) this._setAsBox(1, 1); else {
for (this.m_count = h, this.m_vertices = [], n = 0; n < h; ++n) this.m_vertices[n] = o[u[n]];
for (n = 0; n < h; ++n) {
var f = n, y = n + 1 < h ? n + 1 : 0, v = Zu.sub(this.m_vertices[y], this.m_vertices[f]);
this.m_normals[n] = Zu.crossVec2Num(v, 1), this.m_normals[n].normalize();
}
this.m_centroid = function(t, e) {
for (var o = Zu.zero(), n = 0, i = Zu.zero(), r = 0; r < e; ++r) {
var s = i, a = t[r], l = r + 1 < e ? t[r + 1] : t[0], c = Zu.sub(a, s), u = Zu.sub(l, s), h = .5 * Zu.crossVec2Vec2(c, u);
n += h, Ih(t_, 1, s, 1, a, 1, l), Th(o, h * (1 / 3), t_);
}
return o.mul(1 / n), o;
}(this.m_vertices, h);
}
}
}
}, e.prototype._setAsBox = function(t, e, o, n) {
if (this.m_vertices[0] = Zu.neo(t, -e), this.m_vertices[1] = Zu.neo(t, e), this.m_vertices[2] = Zu.neo(-t, e), 
this.m_vertices[3] = Zu.neo(-t, -e), this.m_normals[0] = Zu.neo(1, 0), this.m_normals[1] = Zu.neo(0, 1), 
this.m_normals[2] = Zu.neo(-1, 0), this.m_normals[3] = Zu.neo(0, -1), this.m_count = 4, 
o && Zu.isValid(o)) {
n = n || 0, Ah(this.m_centroid, o);
var i = od.identity();
i.p.setVec2(o), i.q.setAngle(n);
for (var r = 0; r < this.m_count; ++r) this.m_vertices[r] = od.mulVec2(i, this.m_vertices[r]), 
this.m_normals[r] = Kh.mulVec2(i.q, this.m_normals[r]);
}
}, e.prototype.testPoint = function(t, e) {
for (var o = Hh(t_, t, e), n = 0; n < this.m_count; ++n) if (Lh(this.m_normals[n], o) - Lh(this.m_normals[n], this.m_vertices[n]) > 0) return !1;
return !0;
}, e.prototype.rayCast = function(t, e, o) {
for (var n = Kh.mulTVec2(o.q, Zu.sub(e.p1, o.p)), i = Kh.mulTVec2(o.q, Zu.sub(e.p2, o.p)), r = Zu.sub(i, n), s = 0, a = e.maxFraction, l = -1, c = 0; c < this.m_count; ++c) {
var u = Zu.dot(this.m_normals[c], Zu.sub(this.m_vertices[c], n)), h = Zu.dot(this.m_normals[c], r);
if (0 == h) {
if (u < 0) return !1;
} else h < 0 && u < s * h ? (s = u / h, l = c) : h > 0 && u < a * h && (a = u / h);
if (a < s) return !1;
}
return l >= 0 && (t.fraction = s, t.normal = Kh.mulVec2(o.q, this.m_normals[l]), 
!0);
}, e.prototype.computeAABB = function(t, e) {
for (var o = 1 / 0, n = 1 / 0, i = -1 / 0, r = -1 / 0, s = 0; s < this.m_count; ++s) {
var a = qh(t_, e, this.m_vertices[s]);
o = $m(o, a.x), i = Zm(i, a.x), n = $m(n, a.y), r = Zm(r, a.y);
}
gh(t.lowerBound, o - this.m_radius, n - this.m_radius), gh(t.upperBound, i + this.m_radius, r + this.m_radius);
}, e.prototype.computeMass = function(t, e) {
xh(i_);
var o, n, i, r = 0, s = 0;
xh(r_);
for (var a = 0; a < this.m_count; ++a) Ch(r_, this.m_vertices[a]);
Bh(r_, 1 / this.m_count, r_);
for (a = 0; a < this.m_count; ++a) {
Sh(o_, this.m_vertices[a], r_), a + 1 < this.m_count ? Sh(n_, this.m_vertices[a + 1], r_) : Sh(n_, this.m_vertices[0], r_);
var l = Eh(o_, n_), c = .5 * l;
r += c, Mh(t_, c * (1 / 3), o_, c * (1 / 3), n_), Ch(i_, t_);
var u = o_.x, h = o_.y, d = n_.x, p = n_.y;
s += 1 / 3 * .25 * l * (u * u + d * u + d * d + h * h + p * h + p * p);
}
t.mass = e * r, Bh(i_, 1 / r, i_), o = t.center, n = i_, i = r_, o.x = n.x + i.x, 
o.y = n.y + i.y, t.I = e * s, t.I += t.mass * (Lh(t.center, t.center) - Lh(i_, i_));
}, e.prototype.validate = function() {
for (var t = 0; t < this.m_count; ++t) {
var e = t, o = t < this.m_count - 1 ? e + 1 : 0, n = this.m_vertices[e];
Sh(e_, this.m_vertices[o], n);
for (var i = 0; i < this.m_count; ++i) if (i != e && i != o && Eh(e_, Sh(t_, this.m_vertices[i], n)) < 0) return !1;
}
return !0;
}, e.prototype.computeDistanceProxy = function(t) {
for (var e = 0; e < this.m_count; ++e) t.m_vertices[e] = this.m_vertices[e];
t.m_vertices.length = this.m_count, t.m_count = this.m_count, t.m_radius = this.m_radius;
}, e.TYPE = "polygon", e;
}(ld), a_ = Math.sqrt, l_ = Math.PI, c_ = vh(0, 0), u_ = function(t) {
function e(o, n) {
var i = this;
return i instanceof e ? ((i = t.call(this) || this).m_type = e.TYPE, i.m_p = Zu.zero(), 
i.m_radius = 1, "object" == typeof o && Zu.isValid(o) ? (i.m_p.setVec2(o), "number" == typeof n && (i.m_radius = n)) : "number" == typeof o && (i.m_radius = o), 
i) : new e(o, n);
}
return Ou(e, t), e.prototype._serialize = function() {
return {
type: this.m_type,
p: this.m_p,
radius: this.m_radius
};
}, e._deserialize = function(t) {
return new e(t.p, t.radius);
}, e.prototype._reset = function() {}, e.prototype.getType = function() {
return this.m_type;
}, e.prototype.getRadius = function() {
return this.m_radius;
}, e.prototype.getCenter = function() {
return this.m_p;
}, e.prototype._clone = function() {
var t = new e();
return t.m_type = this.m_type, t.m_radius = this.m_radius, t.m_p = this.m_p.clone(), 
t;
}, e.prototype.getChildCount = function() {
return 1;
}, e.prototype.testPoint = function(t, e) {
return Oh(e, qh(c_, t, this.m_p)) <= this.m_radius * this.m_radius;
}, e.prototype.rayCast = function(t, e, o) {
var n = Zu.add(o.p, Kh.mulVec2(o.q, this.m_p)), i = Zu.sub(e.p1, n), r = Zu.dot(i, i) - this.m_radius * this.m_radius, s = Zu.sub(e.p2, e.p1), a = Zu.dot(i, s), l = Zu.dot(s, s), c = a * a - l * r;
if (c < 0 || l < ju) return !1;
var u = -(a + a_(c));
return 0 <= u && u <= e.maxFraction * l && (u /= l, t.fraction = u, t.normal = Zu.add(i, Zu.mulNumVec2(u, s)), 
t.normal.normalize(), !0);
}, e.prototype.computeAABB = function(t, e) {
var o = qh(c_, e, this.m_p);
gh(t.lowerBound, o.x - this.m_radius, o.y - this.m_radius), gh(t.upperBound, o.x + this.m_radius, o.y + this.m_radius);
}, e.prototype.computeMass = function(t, e) {
t.mass = e * l_ * this.m_radius * this.m_radius, Ah(t.center, this.m_p), t.I = t.mass * (.5 * this.m_radius * this.m_radius + Wh(this.m_p));
}, e.prototype.computeDistanceProxy = function(t) {
t.m_vertices[0] = this.m_p, t.m_vertices.length = 1, t.m_count = 1, t.m_radius = this.m_radius;
}, e.TYPE = "circle", e;
}(ld), h_ = Math.abs, d_ = Math.PI, p_ = {
frequencyHz: 0,
dampingRatio: 0
}, m_ = function(t) {
function e(o, n, i, r, s) {
var a = this;
if (!(a instanceof e)) return new e(o, n, i, r, s);
if (i && r && "m_type" in r && "x" in i && "y" in i) {
var l = i;
i = r, r = l;
}
return o = Gu(o, p_), n = (a = t.call(this, o, n, i) || this).m_bodyA, i = a.m_bodyB, 
a.m_type = e.TYPE, a.m_localAnchorA = Zu.clone(r ? n.getLocalPoint(r) : o.localAnchorA || Zu.zero()), 
a.m_localAnchorB = Zu.clone(s ? i.getLocalPoint(s) : o.localAnchorB || Zu.zero()), 
a.m_length = Number.isFinite(o.length) ? o.length : Zu.distance(n.getWorldPoint(a.m_localAnchorA), i.getWorldPoint(a.m_localAnchorB)), 
a.m_frequencyHz = o.frequencyHz, a.m_dampingRatio = o.dampingRatio, a.m_impulse = 0, 
a.m_gamma = 0, a.m_bias = 0, a;
}
return Ou(e, t), e.prototype._serialize = function() {
return {
type: this.m_type,
bodyA: this.m_bodyA,
bodyB: this.m_bodyB,
collideConnected: this.m_collideConnected,
frequencyHz: this.m_frequencyHz,
dampingRatio: this.m_dampingRatio,
localAnchorA: this.m_localAnchorA,
localAnchorB: this.m_localAnchorB,
length: this.m_length
};
}, e._deserialize = function(t, o, n) {
return (t = ku({}, t)).bodyA = n(wd, t.bodyA, o), t.bodyB = n(wd, t.bodyB, o), new e(t);
}, e.prototype._reset = function(t) {
t.anchorA ? this.m_localAnchorA.setVec2(this.m_bodyA.getLocalPoint(t.anchorA)) : t.localAnchorA && this.m_localAnchorA.setVec2(t.localAnchorA), 
t.anchorB ? this.m_localAnchorB.setVec2(this.m_bodyB.getLocalPoint(t.anchorB)) : t.localAnchorB && this.m_localAnchorB.setVec2(t.localAnchorB), 
t.length > 0 ? this.m_length = +t.length : t.length < 0 || (t.anchorA || t.anchorA || t.anchorA || t.anchorA) && (this.m_length = Zu.distance(this.m_bodyA.getWorldPoint(this.m_localAnchorA), this.m_bodyB.getWorldPoint(this.m_localAnchorB))), 
Number.isFinite(t.frequencyHz) && (this.m_frequencyHz = t.frequencyHz), Number.isFinite(t.dampingRatio) && (this.m_dampingRatio = t.dampingRatio);
}, e.prototype.getLocalAnchorA = function() {
return this.m_localAnchorA;
}, e.prototype.getLocalAnchorB = function() {
return this.m_localAnchorB;
}, e.prototype.setLength = function(t) {
this.m_length = t;
}, e.prototype.getLength = function() {
return this.m_length;
}, e.prototype.setFrequency = function(t) {
this.m_frequencyHz = t;
}, e.prototype.getFrequency = function() {
return this.m_frequencyHz;
}, e.prototype.setDampingRatio = function(t) {
this.m_dampingRatio = t;
}, e.prototype.getDampingRatio = function() {
return this.m_dampingRatio;
}, e.prototype.getAnchorA = function() {
return this.m_bodyA.getWorldPoint(this.m_localAnchorA);
}, e.prototype.getAnchorB = function() {
return this.m_bodyB.getWorldPoint(this.m_localAnchorB);
}, e.prototype.getReactionForce = function(t) {
return Zu.mulNumVec2(this.m_impulse, this.m_u).mul(t);
}, e.prototype.getReactionTorque = function() {
return 0;
}, e.prototype.initVelocityConstraints = function(t) {
this.m_localCenterA = this.m_bodyA.m_sweep.localCenter, this.m_localCenterB = this.m_bodyB.m_sweep.localCenter, 
this.m_invMassA = this.m_bodyA.m_invMass, this.m_invMassB = this.m_bodyB.m_invMass, 
this.m_invIA = this.m_bodyA.m_invI, this.m_invIB = this.m_bodyB.m_invI;
var e = this.m_bodyA.c_position.c, o = this.m_bodyA.c_position.a, n = this.m_bodyA.c_velocity.v, i = this.m_bodyA.c_velocity.w, r = this.m_bodyB.c_position.c, s = this.m_bodyB.c_position.a, a = this.m_bodyB.c_velocity.v, l = this.m_bodyB.c_velocity.w, c = Kh.neo(o), u = Kh.neo(s);
this.m_rA = Kh.mulVec2(c, Zu.sub(this.m_localAnchorA, this.m_localCenterA)), this.m_rB = Kh.mulVec2(u, Zu.sub(this.m_localAnchorB, this.m_localCenterB)), 
this.m_u = Zu.sub(Zu.add(r, this.m_rB), Zu.add(e, this.m_rA));
var h = this.m_u.length();
h > ih.linearSlop ? this.m_u.mul(1 / h) : this.m_u.setNum(0, 0);
var d = Zu.crossVec2Vec2(this.m_rA, this.m_u), p = Zu.crossVec2Vec2(this.m_rB, this.m_u), m = this.m_invMassA + this.m_invIA * d * d + this.m_invMassB + this.m_invIB * p * p;
if (this.m_mass = 0 != m ? 1 / m : 0, this.m_frequencyHz > 0) {
var _ = h - this.m_length, f = 2 * d_ * this.m_frequencyHz, y = 2 * this.m_mass * this.m_dampingRatio * f, v = this.m_mass * f * f, g = t.dt;
this.m_gamma = g * (y + g * v), this.m_gamma = 0 != this.m_gamma ? 1 / this.m_gamma : 0, 
this.m_bias = _ * g * v * this.m_gamma, m += this.m_gamma, this.m_mass = 0 != m ? 1 / m : 0;
} else this.m_gamma = 0, this.m_bias = 0;
if (t.warmStarting) {
this.m_impulse *= t.dtRatio;
var A = Zu.mulNumVec2(this.m_impulse, this.m_u);
n.subMul(this.m_invMassA, A), i -= this.m_invIA * Zu.crossVec2Vec2(this.m_rA, A), 
a.addMul(this.m_invMassB, A), l += this.m_invIB * Zu.crossVec2Vec2(this.m_rB, A);
} else this.m_impulse = 0;
this.m_bodyA.c_velocity.v.setVec2(n), this.m_bodyA.c_velocity.w = i, this.m_bodyB.c_velocity.v.setVec2(a), 
this.m_bodyB.c_velocity.w = l;
}, e.prototype.solveVelocityConstraints = function() {
var t = this.m_bodyA.c_velocity.v, e = this.m_bodyA.c_velocity.w, o = this.m_bodyB.c_velocity.v, n = this.m_bodyB.c_velocity.w, i = Zu.add(t, Zu.crossNumVec2(e, this.m_rA)), r = Zu.add(o, Zu.crossNumVec2(n, this.m_rB)), s = Zu.dot(this.m_u, r) - Zu.dot(this.m_u, i), a = -this.m_mass * (s + this.m_bias + this.m_gamma * this.m_impulse);
this.m_impulse += a;
var l = Zu.mulNumVec2(a, this.m_u);
t.subMul(this.m_invMassA, l), e -= this.m_invIA * Zu.crossVec2Vec2(this.m_rA, l), 
o.addMul(this.m_invMassB, l), n += this.m_invIB * Zu.crossVec2Vec2(this.m_rB, l), 
this.m_bodyA.c_velocity.v.setVec2(t), this.m_bodyA.c_velocity.w = e, this.m_bodyB.c_velocity.v.setVec2(o), 
this.m_bodyB.c_velocity.w = n;
}, e.prototype.solvePositionConstraints = function() {
if (this.m_frequencyHz > 0) return !0;
var t = this.m_bodyA.c_position.c, e = this.m_bodyA.c_position.a, o = this.m_bodyB.c_position.c, n = this.m_bodyB.c_position.a, i = Kh.neo(e), r = Kh.neo(n), s = Kh.mulSub(i, this.m_localAnchorA, this.m_localCenterA), a = Kh.mulSub(r, this.m_localAnchorB, this.m_localCenterB), l = Zu.sub(Zu.add(o, a), Zu.add(t, s)), c = Uu(l.normalize() - this.m_length, -ih.maxLinearCorrection, ih.maxLinearCorrection), u = -this.m_mass * c, h = Zu.mulNumVec2(u, l);
return t.subMul(this.m_invMassA, h), e -= this.m_invIA * Zu.crossVec2Vec2(s, h), 
o.addMul(this.m_invMassB, h), n += this.m_invIB * Zu.crossVec2Vec2(a, h), this.m_bodyA.c_position.c.setVec2(t), 
this.m_bodyA.c_position.a = e, this.m_bodyB.c_position.c.setVec2(o), this.m_bodyB.c_position.a = n, 
h_(c) < ih.linearSlop;
}, e.TYPE = "distance-joint", e;
}(Rd), __ = {
maxForce: 0,
maxTorque: 0
}, f_ = function(t) {
function e(o, n, i, r) {
var s = this;
return s instanceof e ? (o = Gu(o, __), n = (s = t.call(this, o, n, i) || this).m_bodyA, 
i = s.m_bodyB, s.m_type = e.TYPE, s.m_localAnchorA = Zu.clone(r ? n.getLocalPoint(r) : o.localAnchorA || Zu.zero()), 
s.m_localAnchorB = Zu.clone(r ? i.getLocalPoint(r) : o.localAnchorB || Zu.zero()), 
s.m_linearImpulse = Zu.zero(), s.m_angularImpulse = 0, s.m_maxForce = o.maxForce, 
s.m_maxTorque = o.maxTorque, s) : new e(o, n, i, r);
}
return Ou(e, t), e.prototype._serialize = function() {
return {
type: this.m_type,
bodyA: this.m_bodyA,
bodyB: this.m_bodyB,
collideConnected: this.m_collideConnected,
maxForce: this.m_maxForce,
maxTorque: this.m_maxTorque,
localAnchorA: this.m_localAnchorA,
localAnchorB: this.m_localAnchorB
};
}, e._deserialize = function(t, o, n) {
return (t = ku({}, t)).bodyA = n(wd, t.bodyA, o), t.bodyB = n(wd, t.bodyB, o), new e(t);
}, e.prototype._reset = function(t) {
t.anchorA ? this.m_localAnchorA.setVec2(this.m_bodyA.getLocalPoint(t.anchorA)) : t.localAnchorA && this.m_localAnchorA.setVec2(t.localAnchorA), 
t.anchorB ? this.m_localAnchorB.setVec2(this.m_bodyB.getLocalPoint(t.anchorB)) : t.localAnchorB && this.m_localAnchorB.setVec2(t.localAnchorB), 
Number.isFinite(t.maxForce) && (this.m_maxForce = t.maxForce), Number.isFinite(t.maxTorque) && (this.m_maxTorque = t.maxTorque);
}, e.prototype.getLocalAnchorA = function() {
return this.m_localAnchorA;
}, e.prototype.getLocalAnchorB = function() {
return this.m_localAnchorB;
}, e.prototype.setMaxForce = function(t) {
this.m_maxForce = t;
}, e.prototype.getMaxForce = function() {
return this.m_maxForce;
}, e.prototype.setMaxTorque = function(t) {
this.m_maxTorque = t;
}, e.prototype.getMaxTorque = function() {
return this.m_maxTorque;
}, e.prototype.getAnchorA = function() {
return this.m_bodyA.getWorldPoint(this.m_localAnchorA);
}, e.prototype.getAnchorB = function() {
return this.m_bodyB.getWorldPoint(this.m_localAnchorB);
}, e.prototype.getReactionForce = function(t) {
return Zu.mulNumVec2(t, this.m_linearImpulse);
}, e.prototype.getReactionTorque = function(t) {
return t * this.m_angularImpulse;
}, e.prototype.initVelocityConstraints = function(t) {
this.m_localCenterA = this.m_bodyA.m_sweep.localCenter, this.m_localCenterB = this.m_bodyB.m_sweep.localCenter, 
this.m_invMassA = this.m_bodyA.m_invMass, this.m_invMassB = this.m_bodyB.m_invMass, 
this.m_invIA = this.m_bodyA.m_invI, this.m_invIB = this.m_bodyB.m_invI;
var e = this.m_bodyA.c_position.a, o = this.m_bodyA.c_velocity.v, n = this.m_bodyA.c_velocity.w, i = this.m_bodyB.c_position.a, r = this.m_bodyB.c_velocity.v, s = this.m_bodyB.c_velocity.w, a = Kh.neo(e), l = Kh.neo(i);
this.m_rA = Kh.mulVec2(a, Zu.sub(this.m_localAnchorA, this.m_localCenterA)), this.m_rB = Kh.mulVec2(l, Zu.sub(this.m_localAnchorB, this.m_localCenterB));
var c = this.m_invMassA, u = this.m_invMassB, h = this.m_invIA, d = this.m_invIB, p = new kp();
if (p.ex.x = c + u + h * this.m_rA.y * this.m_rA.y + d * this.m_rB.y * this.m_rB.y, 
p.ex.y = -h * this.m_rA.x * this.m_rA.y - d * this.m_rB.x * this.m_rB.y, p.ey.x = p.ex.y, 
p.ey.y = c + u + h * this.m_rA.x * this.m_rA.x + d * this.m_rB.x * this.m_rB.x, 
this.m_linearMass = p.getInverse(), this.m_angularMass = h + d, this.m_angularMass > 0 && (this.m_angularMass = 1 / this.m_angularMass), 
t.warmStarting) {
this.m_linearImpulse.mul(t.dtRatio), this.m_angularImpulse *= t.dtRatio;
var m = Zu.neo(this.m_linearImpulse.x, this.m_linearImpulse.y);
o.subMul(c, m), n -= h * (Zu.crossVec2Vec2(this.m_rA, m) + this.m_angularImpulse), 
r.addMul(u, m), s += d * (Zu.crossVec2Vec2(this.m_rB, m) + this.m_angularImpulse);
} else this.m_linearImpulse.setZero(), this.m_angularImpulse = 0;
this.m_bodyA.c_velocity.v = o, this.m_bodyA.c_velocity.w = n, this.m_bodyB.c_velocity.v = r, 
this.m_bodyB.c_velocity.w = s;
}, e.prototype.solveVelocityConstraints = function(t) {
var e = this.m_bodyA.c_velocity.v, o = this.m_bodyA.c_velocity.w, n = this.m_bodyB.c_velocity.v, i = this.m_bodyB.c_velocity.w, r = this.m_invMassA, s = this.m_invMassB, a = this.m_invIA, l = this.m_invIB, c = t.dt, u = i - o, h = -this.m_angularMass * u, d = this.m_angularImpulse, p = c * this.m_maxTorque;
this.m_angularImpulse = Uu(this.m_angularImpulse + h, -p, p), o -= a * (h = this.m_angularImpulse - d), 
i += l * h, u = Zu.sub(Zu.add(n, Zu.crossNumVec2(i, this.m_rB)), Zu.add(e, Zu.crossNumVec2(o, this.m_rA))), 
h = Zu.neg(kp.mulVec2(this.m_linearMass, u)), d = this.m_linearImpulse, this.m_linearImpulse.add(h), 
p = c * this.m_maxForce, this.m_linearImpulse.lengthSquared() > p * p && (this.m_linearImpulse.normalize(), 
this.m_linearImpulse.mul(p)), h = Zu.sub(this.m_linearImpulse, d), e.subMul(r, h), 
o -= a * Zu.crossVec2Vec2(this.m_rA, h), n.addMul(s, h), i += l * Zu.crossVec2Vec2(this.m_rB, h), 
this.m_bodyA.c_velocity.v = e, this.m_bodyA.c_velocity.w = o, this.m_bodyB.c_velocity.v = n, 
this.m_bodyB.c_velocity.w = i;
}, e.prototype.solvePositionConstraints = function() {
return !0;
}, e.TYPE = "friction-joint", e;
}(Rd), y_ = function() {
function t(t, e, o) {
"object" == typeof t && null !== t ? (this.ex = Hm.clone(t), this.ey = Hm.clone(e), 
this.ez = Hm.clone(o)) : (this.ex = Hm.zero(), this.ey = Hm.zero(), this.ez = Hm.zero());
}
return t.prototype.toString = function() {
return JSON.stringify(this);
}, t.isValid = function(t) {
return null != t && Hm.isValid(t.ex) && Hm.isValid(t.ey) && Hm.isValid(t.ez);
}, t.assert = function() {}, t.prototype.setZero = function() {
return this.ex.setZero(), this.ey.setZero(), this.ez.setZero(), this;
}, t.prototype.solve33 = function(t) {
var e = this.ey.y * this.ez.z - this.ey.z * this.ez.y, o = this.ey.z * this.ez.x - this.ey.x * this.ez.z, n = this.ey.x * this.ez.y - this.ey.y * this.ez.x, i = this.ex.x * e + this.ex.y * o + this.ex.z * n;
0 !== i && (i = 1 / i);
var r = new Hm();
return e = this.ey.y * this.ez.z - this.ey.z * this.ez.y, o = this.ey.z * this.ez.x - this.ey.x * this.ez.z, 
n = this.ey.x * this.ez.y - this.ey.y * this.ez.x, r.x = i * (t.x * e + t.y * o + t.z * n), 
e = t.y * this.ez.z - t.z * this.ez.y, o = t.z * this.ez.x - t.x * this.ez.z, n = t.x * this.ez.y - t.y * this.ez.x, 
r.y = i * (this.ex.x * e + this.ex.y * o + this.ex.z * n), e = this.ey.y * t.z - this.ey.z * t.y, 
o = this.ey.z * t.x - this.ey.x * t.z, n = this.ey.x * t.y - this.ey.y * t.x, r.z = i * (this.ex.x * e + this.ex.y * o + this.ex.z * n), 
r;
}, t.prototype.solve22 = function(t) {
var e = this.ex.x, o = this.ey.x, n = this.ex.y, i = this.ey.y, r = e * i - o * n;
0 !== r && (r = 1 / r);
var s = Zu.zero();
return s.x = r * (i * t.x - o * t.y), s.y = r * (e * t.y - n * t.x), s;
}, t.prototype.getInverse22 = function(t) {
var e = this.ex.x, o = this.ey.x, n = this.ex.y, i = this.ey.y, r = e * i - o * n;
0 !== r && (r = 1 / r), t.ex.x = r * i, t.ey.x = -r * o, t.ex.z = 0, t.ex.y = -r * n, 
t.ey.y = r * e, t.ey.z = 0, t.ez.x = 0, t.ez.y = 0, t.ez.z = 0;
}, t.prototype.getSymInverse33 = function(t) {
var e = Hm.dot(this.ex, Hm.cross(this.ey, this.ez));
0 !== e && (e = 1 / e);
var o = this.ex.x, n = this.ey.x, i = this.ez.x, r = this.ey.y, s = this.ez.y, a = this.ez.z;
t.ex.x = e * (r * a - s * s), t.ex.y = e * (i * s - n * a), t.ex.z = e * (n * s - i * r), 
t.ey.x = t.ex.y, t.ey.y = e * (o * a - i * i), t.ey.z = e * (i * n - o * s), t.ez.x = t.ex.z, 
t.ez.y = t.ey.z, t.ez.z = e * (o * r - n * n);
}, t.mul = function(t, e) {
if (e && "z" in e && "y" in e && "x" in e) {
var o = t.ex.x * e.x + t.ey.x * e.y + t.ez.x * e.z, n = t.ex.y * e.x + t.ey.y * e.y + t.ez.y * e.z, i = t.ex.z * e.x + t.ey.z * e.y + t.ez.z * e.z;
return new Hm(o, n, i);
}
if (e && "y" in e && "x" in e) return o = t.ex.x * e.x + t.ey.x * e.y, n = t.ex.y * e.x + t.ey.y * e.y, 
Zu.neo(o, n);
}, t.mulVec3 = function(t, e) {
var o = t.ex.x * e.x + t.ey.x * e.y + t.ez.x * e.z, n = t.ex.y * e.x + t.ey.y * e.y + t.ez.y * e.z, i = t.ex.z * e.x + t.ey.z * e.y + t.ez.z * e.z;
return new Hm(o, n, i);
}, t.mulVec2 = function(t, e) {
var o = t.ex.x * e.x + t.ey.x * e.y, n = t.ex.y * e.x + t.ey.y * e.y;
return Zu.neo(o, n);
}, t.add = function(e, o) {
return new t(Hm.add(e.ex, o.ex), Hm.add(e.ey, o.ey), Hm.add(e.ez, o.ez));
}, t;
}(), v_ = Math.abs;
(pm = dm || (dm = {}))[pm.inactiveLimit = 0] = "inactiveLimit", pm[pm.atLowerLimit = 1] = "atLowerLimit", 
pm[pm.atUpperLimit = 2] = "atUpperLimit", pm[pm.equalLimits = 3] = "equalLimits";
var g_, A_ = function(t) {
function e(o, n, i, r) {
var s, a, l, c, u, h, d = this;
return d instanceof e ? (o = null != o ? o : {}, n = (d = t.call(this, o, n, i) || this).m_bodyA, 
i = d.m_bodyB, d.m_mass = new y_(), d.m_limitState = dm.inactiveLimit, d.m_type = e.TYPE, 
Zu.isValid(r) ? d.m_localAnchorA = n.getLocalPoint(r) : Zu.isValid(o.localAnchorA) ? d.m_localAnchorA = Zu.clone(o.localAnchorA) : d.m_localAnchorA = Zu.zero(), 
Zu.isValid(r) ? d.m_localAnchorB = i.getLocalPoint(r) : Zu.isValid(o.localAnchorB) ? d.m_localAnchorB = Zu.clone(o.localAnchorB) : d.m_localAnchorB = Zu.zero(), 
Number.isFinite(o.referenceAngle) ? d.m_referenceAngle = o.referenceAngle : d.m_referenceAngle = i.getAngle() - n.getAngle(), 
d.m_impulse = new Hm(), d.m_motorImpulse = 0, d.m_lowerAngle = null !== (s = o.lowerAngle) && void 0 !== s ? s : 0, 
d.m_upperAngle = null !== (a = o.upperAngle) && void 0 !== a ? a : 0, d.m_maxMotorTorque = null !== (l = o.maxMotorTorque) && void 0 !== l ? l : 0, 
d.m_motorSpeed = null !== (c = o.motorSpeed) && void 0 !== c ? c : 0, d.m_enableLimit = null !== (u = o.enableLimit) && void 0 !== u && u, 
d.m_enableMotor = null !== (h = o.enableMotor) && void 0 !== h && h, d) : new e(o, n, i, r);
}
return Ou(e, t), e.prototype._serialize = function() {
return {
type: this.m_type,
bodyA: this.m_bodyA,
bodyB: this.m_bodyB,
collideConnected: this.m_collideConnected,
lowerAngle: this.m_lowerAngle,
upperAngle: this.m_upperAngle,
maxMotorTorque: this.m_maxMotorTorque,
motorSpeed: this.m_motorSpeed,
enableLimit: this.m_enableLimit,
enableMotor: this.m_enableMotor,
localAnchorA: this.m_localAnchorA,
localAnchorB: this.m_localAnchorB,
referenceAngle: this.m_referenceAngle
};
}, e._deserialize = function(t, o, n) {
return (t = ku({}, t)).bodyA = n(wd, t.bodyA, o), t.bodyB = n(wd, t.bodyB, o), new e(t);
}, e.prototype._reset = function(t) {
t.anchorA ? this.m_localAnchorA.setVec2(this.m_bodyA.getLocalPoint(t.anchorA)) : t.localAnchorA && this.m_localAnchorA.setVec2(t.localAnchorA), 
t.anchorB ? this.m_localAnchorB.setVec2(this.m_bodyB.getLocalPoint(t.anchorB)) : t.localAnchorB && this.m_localAnchorB.setVec2(t.localAnchorB), 
Number.isFinite(t.referenceAngle) && (this.m_referenceAngle = t.referenceAngle), 
void 0 !== t.enableLimit && (this.m_enableLimit = t.enableLimit), Number.isFinite(t.lowerAngle) && (this.m_lowerAngle = t.lowerAngle), 
Number.isFinite(t.upperAngle) && (this.m_upperAngle = t.upperAngle), Number.isFinite(t.maxMotorTorque) && (this.m_maxMotorTorque = t.maxMotorTorque), 
Number.isFinite(t.motorSpeed) && (this.m_motorSpeed = t.motorSpeed), void 0 !== t.enableMotor && (this.m_enableMotor = t.enableMotor);
}, e.prototype.getLocalAnchorA = function() {
return this.m_localAnchorA;
}, e.prototype.getLocalAnchorB = function() {
return this.m_localAnchorB;
}, e.prototype.getReferenceAngle = function() {
return this.m_referenceAngle;
}, e.prototype.getJointAngle = function() {
var t = this.m_bodyA;
return this.m_bodyB.m_sweep.a - t.m_sweep.a - this.m_referenceAngle;
}, e.prototype.getJointSpeed = function() {
var t = this.m_bodyA;
return this.m_bodyB.m_angularVelocity - t.m_angularVelocity;
}, e.prototype.isMotorEnabled = function() {
return this.m_enableMotor;
}, e.prototype.enableMotor = function(t) {
t != this.m_enableMotor && (this.m_bodyA.setAwake(!0), this.m_bodyB.setAwake(!0), 
this.m_enableMotor = t);
}, e.prototype.getMotorTorque = function(t) {
return t * this.m_motorImpulse;
}, e.prototype.setMotorSpeed = function(t) {
t != this.m_motorSpeed && (this.m_bodyA.setAwake(!0), this.m_bodyB.setAwake(!0), 
this.m_motorSpeed = t);
}, e.prototype.getMotorSpeed = function() {
return this.m_motorSpeed;
}, e.prototype.setMaxMotorTorque = function(t) {
t != this.m_maxMotorTorque && (this.m_bodyA.setAwake(!0), this.m_bodyB.setAwake(!0), 
this.m_maxMotorTorque = t);
}, e.prototype.getMaxMotorTorque = function() {
return this.m_maxMotorTorque;
}, e.prototype.isLimitEnabled = function() {
return this.m_enableLimit;
}, e.prototype.enableLimit = function(t) {
t != this.m_enableLimit && (this.m_bodyA.setAwake(!0), this.m_bodyB.setAwake(!0), 
this.m_enableLimit = t, this.m_impulse.z = 0);
}, e.prototype.getLowerLimit = function() {
return this.m_lowerAngle;
}, e.prototype.getUpperLimit = function() {
return this.m_upperAngle;
}, e.prototype.setLimits = function(t, e) {
t == this.m_lowerAngle && e == this.m_upperAngle || (this.m_bodyA.setAwake(!0), 
this.m_bodyB.setAwake(!0), this.m_impulse.z = 0, this.m_lowerAngle = t, this.m_upperAngle = e);
}, e.prototype.getAnchorA = function() {
return this.m_bodyA.getWorldPoint(this.m_localAnchorA);
}, e.prototype.getAnchorB = function() {
return this.m_bodyB.getWorldPoint(this.m_localAnchorB);
}, e.prototype.getReactionForce = function(t) {
return Zu.neo(this.m_impulse.x, this.m_impulse.y).mul(t);
}, e.prototype.getReactionTorque = function(t) {
return t * this.m_impulse.z;
}, e.prototype.initVelocityConstraints = function(t) {
this.m_localCenterA = this.m_bodyA.m_sweep.localCenter, this.m_localCenterB = this.m_bodyB.m_sweep.localCenter, 
this.m_invMassA = this.m_bodyA.m_invMass, this.m_invMassB = this.m_bodyB.m_invMass, 
this.m_invIA = this.m_bodyA.m_invI, this.m_invIB = this.m_bodyB.m_invI;
var e = this.m_bodyA.c_position.a, o = this.m_bodyA.c_velocity.v, n = this.m_bodyA.c_velocity.w, i = this.m_bodyB.c_position.a, r = this.m_bodyB.c_velocity.v, s = this.m_bodyB.c_velocity.w, a = Kh.neo(e), l = Kh.neo(i);
this.m_rA = Kh.mulVec2(a, Zu.sub(this.m_localAnchorA, this.m_localCenterA)), this.m_rB = Kh.mulVec2(l, Zu.sub(this.m_localAnchorB, this.m_localCenterB));
var c = this.m_invMassA, u = this.m_invMassB, h = this.m_invIA, d = this.m_invIB, p = h + d === 0;
if (this.m_mass.ex.x = c + u + this.m_rA.y * this.m_rA.y * h + this.m_rB.y * this.m_rB.y * d, 
this.m_mass.ey.x = -this.m_rA.y * this.m_rA.x * h - this.m_rB.y * this.m_rB.x * d, 
this.m_mass.ez.x = -this.m_rA.y * h - this.m_rB.y * d, this.m_mass.ex.y = this.m_mass.ey.x, 
this.m_mass.ey.y = c + u + this.m_rA.x * this.m_rA.x * h + this.m_rB.x * this.m_rB.x * d, 
this.m_mass.ez.y = this.m_rA.x * h + this.m_rB.x * d, this.m_mass.ex.z = this.m_mass.ez.x, 
this.m_mass.ey.z = this.m_mass.ez.y, this.m_mass.ez.z = h + d, this.m_motorMass = h + d, 
this.m_motorMass > 0 && (this.m_motorMass = 1 / this.m_motorMass), (0 == this.m_enableMotor || p) && (this.m_motorImpulse = 0), 
this.m_enableLimit && 0 == p) {
var m = i - e - this.m_referenceAngle;
v_(this.m_upperAngle - this.m_lowerAngle) < 2 * ih.angularSlop ? this.m_limitState = dm.equalLimits : m <= this.m_lowerAngle ? (this.m_limitState != dm.atLowerLimit && (this.m_impulse.z = 0), 
this.m_limitState = dm.atLowerLimit) : m >= this.m_upperAngle ? (this.m_limitState != dm.atUpperLimit && (this.m_impulse.z = 0), 
this.m_limitState = dm.atUpperLimit) : (this.m_limitState = dm.inactiveLimit, this.m_impulse.z = 0);
} else this.m_limitState = dm.inactiveLimit;
if (t.warmStarting) {
this.m_impulse.mul(t.dtRatio), this.m_motorImpulse *= t.dtRatio;
var _ = Zu.neo(this.m_impulse.x, this.m_impulse.y);
o.subMul(c, _), n -= h * (Zu.crossVec2Vec2(this.m_rA, _) + this.m_motorImpulse + this.m_impulse.z), 
r.addMul(u, _), s += d * (Zu.crossVec2Vec2(this.m_rB, _) + this.m_motorImpulse + this.m_impulse.z);
} else this.m_impulse.setZero(), this.m_motorImpulse = 0;
this.m_bodyA.c_velocity.v = o, this.m_bodyA.c_velocity.w = n, this.m_bodyB.c_velocity.v = r, 
this.m_bodyB.c_velocity.w = s;
}, e.prototype.solveVelocityConstraints = function(t) {
var e = this.m_bodyA.c_velocity.v, o = this.m_bodyA.c_velocity.w, n = this.m_bodyB.c_velocity.v, i = this.m_bodyB.c_velocity.w, r = this.m_invMassA, s = this.m_invMassB, a = this.m_invIA, l = this.m_invIB, c = a + l === 0;
if (this.m_enableMotor && this.m_limitState != dm.equalLimits && 0 == c) {
var u = i - o - this.m_motorSpeed, h = -this.m_motorMass * u, d = this.m_motorImpulse, p = t.dt * this.m_maxMotorTorque;
this.m_motorImpulse = Uu(this.m_motorImpulse + h, -p, p), o -= a * (h = this.m_motorImpulse - d), 
i += l * h;
}
if (this.m_enableLimit && this.m_limitState != dm.inactiveLimit && 0 == c) {
var m = Zu.zero();
m.addCombine(1, n, 1, Zu.crossNumVec2(i, this.m_rB)), m.subCombine(1, e, 1, Zu.crossNumVec2(o, this.m_rA));
var _ = i - o;
if (u = new Hm(m.x, m.y, _), h = Hm.neg(this.m_mass.solve33(u)), this.m_limitState == dm.equalLimits) this.m_impulse.add(h); else if (this.m_limitState == dm.atLowerLimit) if (this.m_impulse.z + h.z < 0) {
var f = Zu.combine(-1, m, this.m_impulse.z, Zu.neo(this.m_mass.ez.x, this.m_mass.ez.y)), y = this.m_mass.solve22(f);
h.x = y.x, h.y = y.y, h.z = -this.m_impulse.z, this.m_impulse.x += y.x, this.m_impulse.y += y.y, 
this.m_impulse.z = 0;
} else this.m_impulse.add(h); else this.m_limitState == dm.atUpperLimit && (this.m_impulse.z + h.z > 0 ? (f = Zu.combine(-1, m, this.m_impulse.z, Zu.neo(this.m_mass.ez.x, this.m_mass.ez.y)), 
y = this.m_mass.solve22(f), h.x = y.x, h.y = y.y, h.z = -this.m_impulse.z, this.m_impulse.x += y.x, 
this.m_impulse.y += y.y, this.m_impulse.z = 0) : this.m_impulse.add(h));
var v = Zu.neo(h.x, h.y);
e.subMul(r, v), o -= a * (Zu.crossVec2Vec2(this.m_rA, v) + h.z), n.addMul(s, v), 
i += l * (Zu.crossVec2Vec2(this.m_rB, v) + h.z);
} else (u = Zu.zero()).addCombine(1, n, 1, Zu.crossNumVec2(i, this.m_rB)), u.subCombine(1, e, 1, Zu.crossNumVec2(o, this.m_rA)), 
h = this.m_mass.solve22(Zu.neg(u)), this.m_impulse.x += h.x, this.m_impulse.y += h.y, 
e.subMul(r, h), o -= a * Zu.crossVec2Vec2(this.m_rA, h), n.addMul(s, h), i += l * Zu.crossVec2Vec2(this.m_rB, h);
this.m_bodyA.c_velocity.v = e, this.m_bodyA.c_velocity.w = o, this.m_bodyB.c_velocity.v = n, 
this.m_bodyB.c_velocity.w = i;
}, e.prototype.solvePositionConstraints = function() {
var t, e = this.m_bodyA.c_position.c, o = this.m_bodyA.c_position.a, n = this.m_bodyB.c_position.c, i = this.m_bodyB.c_position.a, r = Kh.neo(o), s = Kh.neo(i), a = 0, l = this.m_invIA + this.m_invIB == 0;
if (this.m_enableLimit && this.m_limitState != dm.inactiveLimit && 0 == l) {
var c = i - o - this.m_referenceAngle, u = 0;
if (this.m_limitState == dm.equalLimits) {
var h = Uu(c - this.m_lowerAngle, -ih.maxAngularCorrection, ih.maxAngularCorrection);
u = -this.m_motorMass * h, a = v_(h);
} else this.m_limitState == dm.atLowerLimit ? (a = -(h = c - this.m_lowerAngle), 
h = Uu(h + ih.angularSlop, -ih.maxAngularCorrection, 0), u = -this.m_motorMass * h) : this.m_limitState == dm.atUpperLimit && (a = h = c - this.m_upperAngle, 
h = Uu(h - ih.angularSlop, 0, ih.maxAngularCorrection), u = -this.m_motorMass * h);
o -= this.m_invIA * u, i += this.m_invIB * u;
}
r.setAngle(o), s.setAngle(i);
var d = Kh.mulVec2(r, Zu.sub(this.m_localAnchorA, this.m_localCenterA)), p = Kh.mulVec2(s, Zu.sub(this.m_localAnchorB, this.m_localCenterB));
(h = Zu.zero()).addCombine(1, n, 1, p), h.subCombine(1, e, 1, d), t = h.length();
var m = this.m_invMassA, _ = this.m_invMassB, f = this.m_invIA, y = this.m_invIB, v = new kp();
v.ex.x = m + _ + f * d.y * d.y + y * p.y * p.y, v.ex.y = -f * d.x * d.y - y * p.x * p.y, 
v.ey.x = v.ex.y, v.ey.y = m + _ + f * d.x * d.x + y * p.x * p.x;
var g = Zu.neg(v.solve(h));
return e.subMul(m, g), o -= f * Zu.crossVec2Vec2(d, g), n.addMul(_, g), i += y * Zu.crossVec2Vec2(p, g), 
this.m_bodyA.c_position.c.setVec2(e), this.m_bodyA.c_position.a = o, this.m_bodyB.c_position.c.setVec2(n), 
this.m_bodyB.c_position.a = i, t <= ih.linearSlop && a <= ih.angularSlop;
}, e.TYPE = "revolute-joint", e;
}(Rd), x_ = Math.abs, b_ = Math.max, C_ = Math.min;
!function(t) {
t[t.inactiveLimit = 0] = "inactiveLimit", t[t.atLowerLimit = 1] = "atLowerLimit", 
t[t.atUpperLimit = 2] = "atUpperLimit", t[t.equalLimits = 3] = "equalLimits";
}(g_ || (g_ = {}));
var w_, S_ = {
enableLimit: !1,
lowerTranslation: 0,
upperTranslation: 0,
enableMotor: !1,
maxMotorForce: 0,
motorSpeed: 0
}, R_ = function(t) {
function e(o, n, i, r, s) {
var a = this;
return a instanceof e ? (o = Gu(o, S_), n = (a = t.call(this, o, n, i) || this).m_bodyA, 
i = a.m_bodyB, a.m_type = e.TYPE, a.m_localAnchorA = Zu.clone(r ? n.getLocalPoint(r) : o.localAnchorA || Zu.zero()), 
a.m_localAnchorB = Zu.clone(r ? i.getLocalPoint(r) : o.localAnchorB || Zu.zero()), 
a.m_localXAxisA = Zu.clone(s ? n.getLocalVector(s) : o.localAxisA || Zu.neo(1, 0)), 
a.m_localXAxisA.normalize(), a.m_localYAxisA = Zu.crossNumVec2(1, a.m_localXAxisA), 
a.m_referenceAngle = Number.isFinite(o.referenceAngle) ? o.referenceAngle : i.getAngle() - n.getAngle(), 
a.m_impulse = new Hm(), a.m_motorMass = 0, a.m_motorImpulse = 0, a.m_lowerTranslation = o.lowerTranslation, 
a.m_upperTranslation = o.upperTranslation, a.m_maxMotorForce = o.maxMotorForce, 
a.m_motorSpeed = o.motorSpeed, a.m_enableLimit = o.enableLimit, a.m_enableMotor = o.enableMotor, 
a.m_limitState = g_.inactiveLimit, a.m_axis = Zu.zero(), a.m_perp = Zu.zero(), a.m_K = new y_(), 
a) : new e(o, n, i, r, s);
}
return Ou(e, t), e.prototype._serialize = function() {
return {
type: this.m_type,
bodyA: this.m_bodyA,
bodyB: this.m_bodyB,
collideConnected: this.m_collideConnected,
lowerTranslation: this.m_lowerTranslation,
upperTranslation: this.m_upperTranslation,
maxMotorForce: this.m_maxMotorForce,
motorSpeed: this.m_motorSpeed,
enableLimit: this.m_enableLimit,
enableMotor: this.m_enableMotor,
localAnchorA: this.m_localAnchorA,
localAnchorB: this.m_localAnchorB,
localAxisA: this.m_localXAxisA,
referenceAngle: this.m_referenceAngle
};
}, e._deserialize = function(t, o, n) {
return (t = ku({}, t)).bodyA = n(wd, t.bodyA, o), t.bodyB = n(wd, t.bodyB, o), t.localAxisA = Zu.clone(t.localAxisA), 
new e(t);
}, e.prototype._reset = function(t) {
t.anchorA ? this.m_localAnchorA.setVec2(this.m_bodyA.getLocalPoint(t.anchorA)) : t.localAnchorA && this.m_localAnchorA.setVec2(t.localAnchorA), 
t.anchorB ? this.m_localAnchorB.setVec2(this.m_bodyB.getLocalPoint(t.anchorB)) : t.localAnchorB && this.m_localAnchorB.setVec2(t.localAnchorB), 
t.localAxisA && (this.m_localXAxisA.setVec2(t.localAxisA), this.m_localYAxisA.setVec2(Zu.crossNumVec2(1, t.localAxisA))), 
Number.isFinite(t.referenceAngle) && (this.m_referenceAngle = t.referenceAngle), 
void 0 !== t.enableLimit && (this.m_enableLimit = !!t.enableLimit), Number.isFinite(t.lowerTranslation) && (this.m_lowerTranslation = t.lowerTranslation), 
Number.isFinite(t.upperTranslation) && (this.m_upperTranslation = t.upperTranslation), 
void 0 !== t.enableMotor && (this.m_enableMotor = !!t.enableMotor), Number.isFinite(t.maxMotorForce) && (this.m_maxMotorForce = t.maxMotorForce), 
Number.isFinite(t.motorSpeed) && (this.m_motorSpeed = t.motorSpeed);
}, e.prototype.getLocalAnchorA = function() {
return this.m_localAnchorA;
}, e.prototype.getLocalAnchorB = function() {
return this.m_localAnchorB;
}, e.prototype.getLocalAxisA = function() {
return this.m_localXAxisA;
}, e.prototype.getReferenceAngle = function() {
return this.m_referenceAngle;
}, e.prototype.getJointTranslation = function() {
var t = this.m_bodyA.getWorldPoint(this.m_localAnchorA), e = this.m_bodyB.getWorldPoint(this.m_localAnchorB), o = Zu.sub(e, t), n = this.m_bodyA.getWorldVector(this.m_localXAxisA);
return Zu.dot(o, n);
}, e.prototype.getJointSpeed = function() {
var t = this.m_bodyA, e = this.m_bodyB, o = Kh.mulVec2(t.m_xf.q, Zu.sub(this.m_localAnchorA, t.m_sweep.localCenter)), n = Kh.mulVec2(e.m_xf.q, Zu.sub(this.m_localAnchorB, e.m_sweep.localCenter)), i = Zu.add(t.m_sweep.c, o), r = Zu.add(e.m_sweep.c, n), s = Zu.sub(r, i), a = Kh.mulVec2(t.m_xf.q, this.m_localXAxisA), l = t.m_linearVelocity, c = e.m_linearVelocity, u = t.m_angularVelocity, h = e.m_angularVelocity;
return Zu.dot(s, Zu.crossNumVec2(u, a)) + Zu.dot(a, Zu.sub(Zu.addCrossNumVec2(c, h, n), Zu.addCrossNumVec2(l, u, o)));
}, e.prototype.isLimitEnabled = function() {
return this.m_enableLimit;
}, e.prototype.enableLimit = function(t) {
t != this.m_enableLimit && (this.m_bodyA.setAwake(!0), this.m_bodyB.setAwake(!0), 
this.m_enableLimit = t, this.m_impulse.z = 0);
}, e.prototype.getLowerLimit = function() {
return this.m_lowerTranslation;
}, e.prototype.getUpperLimit = function() {
return this.m_upperTranslation;
}, e.prototype.setLimits = function(t, e) {
t == this.m_lowerTranslation && e == this.m_upperTranslation || (this.m_bodyA.setAwake(!0), 
this.m_bodyB.setAwake(!0), this.m_lowerTranslation = t, this.m_upperTranslation = e, 
this.m_impulse.z = 0);
}, e.prototype.isMotorEnabled = function() {
return this.m_enableMotor;
}, e.prototype.enableMotor = function(t) {
t != this.m_enableMotor && (this.m_bodyA.setAwake(!0), this.m_bodyB.setAwake(!0), 
this.m_enableMotor = t);
}, e.prototype.setMotorSpeed = function(t) {
t != this.m_motorSpeed && (this.m_bodyA.setAwake(!0), this.m_bodyB.setAwake(!0), 
this.m_motorSpeed = t);
}, e.prototype.setMaxMotorForce = function(t) {
t != this.m_maxMotorForce && (this.m_bodyA.setAwake(!0), this.m_bodyB.setAwake(!0), 
this.m_maxMotorForce = t);
}, e.prototype.getMaxMotorForce = function() {
return this.m_maxMotorForce;
}, e.prototype.getMotorSpeed = function() {
return this.m_motorSpeed;
}, e.prototype.getMotorForce = function(t) {
return t * this.m_motorImpulse;
}, e.prototype.getAnchorA = function() {
return this.m_bodyA.getWorldPoint(this.m_localAnchorA);
}, e.prototype.getAnchorB = function() {
return this.m_bodyB.getWorldPoint(this.m_localAnchorB);
}, e.prototype.getReactionForce = function(t) {
return Zu.combine(this.m_impulse.x, this.m_perp, this.m_motorImpulse + this.m_impulse.z, this.m_axis).mul(t);
}, e.prototype.getReactionTorque = function(t) {
return t * this.m_impulse.y;
}, e.prototype.initVelocityConstraints = function(t) {
this.m_localCenterA = this.m_bodyA.m_sweep.localCenter, this.m_localCenterB = this.m_bodyB.m_sweep.localCenter, 
this.m_invMassA = this.m_bodyA.m_invMass, this.m_invMassB = this.m_bodyB.m_invMass, 
this.m_invIA = this.m_bodyA.m_invI, this.m_invIB = this.m_bodyB.m_invI;
var e = this.m_bodyA.c_position.c, o = this.m_bodyA.c_position.a, n = this.m_bodyA.c_velocity.v, i = this.m_bodyA.c_velocity.w, r = this.m_bodyB.c_position.c, s = this.m_bodyB.c_position.a, a = this.m_bodyB.c_velocity.v, l = this.m_bodyB.c_velocity.w, c = Kh.neo(o), u = Kh.neo(s), h = Kh.mulVec2(c, Zu.sub(this.m_localAnchorA, this.m_localCenterA)), d = Kh.mulVec2(u, Zu.sub(this.m_localAnchorB, this.m_localCenterB)), p = Zu.zero();
p.addCombine(1, r, 1, d), p.subCombine(1, e, 1, h);
var m = this.m_invMassA, _ = this.m_invMassB, f = this.m_invIA, y = this.m_invIB;
this.m_axis = Kh.mulVec2(c, this.m_localXAxisA), this.m_a1 = Zu.crossVec2Vec2(Zu.add(p, h), this.m_axis), 
this.m_a2 = Zu.crossVec2Vec2(d, this.m_axis), this.m_motorMass = m + _ + f * this.m_a1 * this.m_a1 + y * this.m_a2 * this.m_a2, 
this.m_motorMass > 0 && (this.m_motorMass = 1 / this.m_motorMass), this.m_perp = Kh.mulVec2(c, this.m_localYAxisA), 
this.m_s1 = Zu.crossVec2Vec2(Zu.add(p, h), this.m_perp), this.m_s2 = Zu.crossVec2Vec2(d, this.m_perp), 
Zu.crossVec2Vec2(h, this.m_perp);
var v = m + _ + f * this.m_s1 * this.m_s1 + y * this.m_s2 * this.m_s2, g = f * this.m_s1 + y * this.m_s2, A = f * this.m_s1 * this.m_a1 + y * this.m_s2 * this.m_a2, x = f + y;
0 == x && (x = 1);
var b = f * this.m_a1 + y * this.m_a2, C = m + _ + f * this.m_a1 * this.m_a1 + y * this.m_a2 * this.m_a2;
if (this.m_K.ex.set(v, g, A), this.m_K.ey.set(g, x, b), this.m_K.ez.set(A, b, C), 
this.m_enableLimit) {
var w = Zu.dot(this.m_axis, p);
x_(this.m_upperTranslation - this.m_lowerTranslation) < 2 * ih.linearSlop ? this.m_limitState = g_.equalLimits : w <= this.m_lowerTranslation ? this.m_limitState != g_.atLowerLimit && (this.m_limitState = g_.atLowerLimit, 
this.m_impulse.z = 0) : w >= this.m_upperTranslation ? this.m_limitState != g_.atUpperLimit && (this.m_limitState = g_.atUpperLimit, 
this.m_impulse.z = 0) : (this.m_limitState = g_.inactiveLimit, this.m_impulse.z = 0);
} else this.m_limitState = g_.inactiveLimit, this.m_impulse.z = 0;
if (0 == this.m_enableMotor && (this.m_motorImpulse = 0), t.warmStarting) {
this.m_impulse.mul(t.dtRatio), this.m_motorImpulse *= t.dtRatio;
var S = Zu.combine(this.m_impulse.x, this.m_perp, this.m_motorImpulse + this.m_impulse.z, this.m_axis), R = this.m_impulse.x * this.m_s1 + this.m_impulse.y + (this.m_motorImpulse + this.m_impulse.z) * this.m_a1, B = this.m_impulse.x * this.m_s2 + this.m_impulse.y + (this.m_motorImpulse + this.m_impulse.z) * this.m_a2;
n.subMul(m, S), i -= f * R, a.addMul(_, S), l += y * B;
} else this.m_impulse.setZero(), this.m_motorImpulse = 0;
this.m_bodyA.c_velocity.v.setVec2(n), this.m_bodyA.c_velocity.w = i, this.m_bodyB.c_velocity.v.setVec2(a), 
this.m_bodyB.c_velocity.w = l;
}, e.prototype.solveVelocityConstraints = function(t) {
var e = this.m_bodyA.c_velocity.v, o = this.m_bodyA.c_velocity.w, n = this.m_bodyB.c_velocity.v, i = this.m_bodyB.c_velocity.w, r = this.m_invMassA, s = this.m_invMassB, a = this.m_invIA, l = this.m_invIB;
if (this.m_enableMotor && this.m_limitState != g_.equalLimits) {
var c = Zu.dot(this.m_axis, Zu.sub(n, e)) + this.m_a2 * i - this.m_a1 * o, u = this.m_motorMass * (this.m_motorSpeed - c), h = this.m_motorImpulse, d = t.dt * this.m_maxMotorForce;
this.m_motorImpulse = Uu(this.m_motorImpulse + u, -d, d), u = this.m_motorImpulse - h;
var p = Zu.mulNumVec2(u, this.m_axis), m = u * this.m_a1, _ = u * this.m_a2;
e.subMul(r, p), o -= a * m, n.addMul(s, p), i += l * _;
}
var f = Zu.zero();
if (f.x += Zu.dot(this.m_perp, n) + this.m_s2 * i, f.x -= Zu.dot(this.m_perp, e) + this.m_s1 * o, 
f.y = i - o, this.m_enableLimit && this.m_limitState != g_.inactiveLimit) {
var y = 0;
y += Zu.dot(this.m_axis, n) + this.m_a2 * i, y -= Zu.dot(this.m_axis, e) + this.m_a1 * o, 
c = new Hm(f.x, f.y, y);
var v = Hm.clone(this.m_impulse), g = this.m_K.solve33(Hm.neg(c));
this.m_impulse.add(g), this.m_limitState == g_.atLowerLimit ? this.m_impulse.z = b_(this.m_impulse.z, 0) : this.m_limitState == g_.atUpperLimit && (this.m_impulse.z = C_(this.m_impulse.z, 0));
var A = Zu.combine(-1, f, -(this.m_impulse.z - v.z), Zu.neo(this.m_K.ez.x, this.m_K.ez.y)), x = Zu.add(this.m_K.solve22(A), Zu.neo(v.x, v.y));
this.m_impulse.x = x.x, this.m_impulse.y = x.y, g = Hm.sub(this.m_impulse, v), p = Zu.combine(g.x, this.m_perp, g.z, this.m_axis), 
m = g.x * this.m_s1 + g.y + g.z * this.m_a1, _ = g.x * this.m_s2 + g.y + g.z * this.m_a2, 
e.subMul(r, p), o -= a * m, n.addMul(s, p), i += l * _;
} else g = this.m_K.solve22(Zu.neg(f)), this.m_impulse.x += g.x, this.m_impulse.y += g.y, 
p = Zu.mulNumVec2(g.x, this.m_perp), m = g.x * this.m_s1 + g.y, _ = g.x * this.m_s2 + g.y, 
e.subMul(r, p), o -= a * m, n.addMul(s, p), i += l * _;
this.m_bodyA.c_velocity.v = e, this.m_bodyA.c_velocity.w = o, this.m_bodyB.c_velocity.v = n, 
this.m_bodyB.c_velocity.w = i;
}, e.prototype.solvePositionConstraints = function() {
var t = this.m_bodyA.c_position.c, e = this.m_bodyA.c_position.a, o = this.m_bodyB.c_position.c, n = this.m_bodyB.c_position.a, i = Kh.neo(e), r = Kh.neo(n), s = this.m_invMassA, a = this.m_invMassB, l = this.m_invIA, c = this.m_invIB, u = Kh.mulVec2(i, Zu.sub(this.m_localAnchorA, this.m_localCenterA)), h = Kh.mulVec2(r, Zu.sub(this.m_localAnchorB, this.m_localCenterB)), d = Zu.sub(Zu.add(o, h), Zu.add(t, u)), p = Kh.mulVec2(i, this.m_localXAxisA), m = Zu.crossVec2Vec2(Zu.add(d, u), p), _ = Zu.crossVec2Vec2(h, p), f = Kh.mulVec2(i, this.m_localYAxisA), y = Zu.crossVec2Vec2(Zu.add(d, u), f), v = Zu.crossVec2Vec2(h, f), g = new Hm(), A = Zu.zero();
A.x = Zu.dot(f, d), A.y = n - e - this.m_referenceAngle;
var x = x_(A.x), b = x_(A.y), C = ih.linearSlop, w = ih.maxLinearCorrection, S = !1, R = 0;
if (this.m_enableLimit) {
var B = Zu.dot(p, d);
x_(this.m_upperTranslation - this.m_lowerTranslation) < 2 * C ? (R = Uu(B, -w, w), 
x = b_(x, x_(B)), S = !0) : B <= this.m_lowerTranslation ? (R = Uu(B - this.m_lowerTranslation + C, -w, 0), 
x = Math.max(x, this.m_lowerTranslation - B), S = !0) : B >= this.m_upperTranslation && (R = Uu(B - this.m_upperTranslation - C, 0, w), 
x = Math.max(x, B - this.m_upperTranslation), S = !0);
}
if (S) {
var T = s + a + l * y * y + c * v * v, F = l * y + c * v, M = l * y * m + c * v * _;
0 == (P = l + c) && (P = 1);
var I = l * m + c * _, D = s + a + l * m * m + c * _ * _;
(E = new y_()).ex.set(T, F, M), E.ey.set(F, P, I), E.ez.set(M, I, D);
var N = new Hm();
N.x = A.x, N.y = A.y, N.z = R, g = E.solve33(Hm.neg(N));
} else {
var P, E;
T = s + a + l * y * y + c * v * v, F = l * y + c * v, 0 == (P = l + c) && (P = 1), 
(E = new kp()).ex.setNum(T, F), E.ey.setNum(F, P);
var L = E.solve(Zu.neg(A));
g.x = L.x, g.y = L.y, g.z = 0;
}
var W = Zu.combine(g.x, f, g.z, p), V = g.x * y + g.y + g.z * m, O = g.x * v + g.y + g.z * _;
return t.subMul(s, W), e -= l * V, o.addMul(a, W), n += c * O, this.m_bodyA.c_position.c = t, 
this.m_bodyA.c_position.a = e, this.m_bodyB.c_position.c = o, this.m_bodyB.c_position.a = n, 
x <= ih.linearSlop && b <= ih.angularSlop;
}, e.TYPE = "prismatic-joint", e;
}(Rd), B_ = {
ratio: 1
}, T_ = function(t) {
function e(o, n, i, r, s, a) {
var l, c, u = this;
if (!(u instanceof e)) return new e(o, n, i, r, s, a);
o = Gu(o, B_), n = (u = t.call(this, o, n, i) || this).m_bodyA, i = u.m_bodyB, u.m_type = e.TYPE, 
u.m_joint1 = r || o.joint1, u.m_joint2 = s || o.joint2, u.m_ratio = Number.isFinite(a) ? a : o.ratio, 
u.m_type1 = u.m_joint1.getType(), u.m_type2 = u.m_joint2.getType(), u.m_bodyC = u.m_joint1.getBodyA(), 
u.m_bodyA = u.m_joint1.getBodyB();
var h = u.m_bodyA.m_xf, d = u.m_bodyA.m_sweep.a, p = u.m_bodyC.m_xf, m = u.m_bodyC.m_sweep.a;
if (u.m_type1 === A_.TYPE) {
var _ = u.m_joint1;
u.m_localAnchorC = _.m_localAnchorA, u.m_localAnchorA = _.m_localAnchorB, u.m_referenceAngleA = _.m_referenceAngle, 
u.m_localAxisC = Zu.zero(), l = d - m - u.m_referenceAngleA;
} else {
var f = u.m_joint1;
u.m_localAnchorC = f.m_localAnchorA, u.m_localAnchorA = f.m_localAnchorB, u.m_referenceAngleA = f.m_referenceAngle, 
u.m_localAxisC = f.m_localXAxisA;
var y = u.m_localAnchorC, v = Kh.mulTVec2(p.q, Zu.add(Kh.mulVec2(h.q, u.m_localAnchorA), Zu.sub(h.p, p.p)));
l = Zu.dot(v, u.m_localAxisC) - Zu.dot(y, u.m_localAxisC);
}
u.m_bodyD = u.m_joint2.getBodyA(), u.m_bodyB = u.m_joint2.getBodyB();
var g = u.m_bodyB.m_xf, A = u.m_bodyB.m_sweep.a, x = u.m_bodyD.m_xf, b = u.m_bodyD.m_sweep.a;
if (u.m_type2 === A_.TYPE) _ = u.m_joint2, u.m_localAnchorD = _.m_localAnchorA, 
u.m_localAnchorB = _.m_localAnchorB, u.m_referenceAngleB = _.m_referenceAngle, u.m_localAxisD = Zu.zero(), 
c = A - b - u.m_referenceAngleB; else {
f = u.m_joint2, u.m_localAnchorD = f.m_localAnchorA, u.m_localAnchorB = f.m_localAnchorB, 
u.m_referenceAngleB = f.m_referenceAngle, u.m_localAxisD = f.m_localXAxisA;
var C = u.m_localAnchorD, w = Kh.mulTVec2(x.q, Zu.add(Kh.mulVec2(g.q, u.m_localAnchorB), Zu.sub(g.p, x.p)));
c = Zu.dot(w, u.m_localAxisD) - Zu.dot(C, u.m_localAxisD);
}
return u.m_constant = l + u.m_ratio * c, u.m_impulse = 0, u;
}
return Ou(e, t), e.prototype._serialize = function() {
return {
type: this.m_type,
bodyA: this.m_bodyA,
bodyB: this.m_bodyB,
collideConnected: this.m_collideConnected,
joint1: this.m_joint1,
joint2: this.m_joint2,
ratio: this.m_ratio
};
}, e._deserialize = function(t, o, n) {
return (t = ku({}, t)).bodyA = n(wd, t.bodyA, o), t.bodyB = n(wd, t.bodyB, o), t.joint1 = n(Rd, t.joint1, o), 
t.joint2 = n(Rd, t.joint2, o), new e(t);
}, e.prototype._reset = function(t) {
Number.isFinite(t.ratio) && (this.m_ratio = t.ratio);
}, e.prototype.getJoint1 = function() {
return this.m_joint1;
}, e.prototype.getJoint2 = function() {
return this.m_joint2;
}, e.prototype.setRatio = function(t) {
this.m_ratio = t;
}, e.prototype.getRatio = function() {
return this.m_ratio;
}, e.prototype.getAnchorA = function() {
return this.m_bodyA.getWorldPoint(this.m_localAnchorA);
}, e.prototype.getAnchorB = function() {
return this.m_bodyB.getWorldPoint(this.m_localAnchorB);
}, e.prototype.getReactionForce = function(t) {
return Zu.mulNumVec2(this.m_impulse, this.m_JvAC).mul(t);
}, e.prototype.getReactionTorque = function(t) {
return t * this.m_impulse * this.m_JwA;
}, e.prototype.initVelocityConstraints = function(t) {
this.m_lcA = this.m_bodyA.m_sweep.localCenter, this.m_lcB = this.m_bodyB.m_sweep.localCenter, 
this.m_lcC = this.m_bodyC.m_sweep.localCenter, this.m_lcD = this.m_bodyD.m_sweep.localCenter, 
this.m_mA = this.m_bodyA.m_invMass, this.m_mB = this.m_bodyB.m_invMass, this.m_mC = this.m_bodyC.m_invMass, 
this.m_mD = this.m_bodyD.m_invMass, this.m_iA = this.m_bodyA.m_invI, this.m_iB = this.m_bodyB.m_invI, 
this.m_iC = this.m_bodyC.m_invI, this.m_iD = this.m_bodyD.m_invI;
var e = this.m_bodyA.c_position.a, o = this.m_bodyA.c_velocity.v, n = this.m_bodyA.c_velocity.w, i = this.m_bodyB.c_position.a, r = this.m_bodyB.c_velocity.v, s = this.m_bodyB.c_velocity.w, a = this.m_bodyC.c_position.a, l = this.m_bodyC.c_velocity.v, c = this.m_bodyC.c_velocity.w, u = this.m_bodyD.c_position.a, h = this.m_bodyD.c_velocity.v, d = this.m_bodyD.c_velocity.w, p = Kh.neo(e), m = Kh.neo(i), _ = Kh.neo(a), f = Kh.neo(u);
if (this.m_mass = 0, this.m_type1 == A_.TYPE) this.m_JvAC = Zu.zero(), this.m_JwA = 1, 
this.m_JwC = 1, this.m_mass += this.m_iA + this.m_iC; else {
var y = Kh.mulVec2(_, this.m_localAxisC), v = Kh.mulSub(_, this.m_localAnchorC, this.m_lcC), g = Kh.mulSub(p, this.m_localAnchorA, this.m_lcA);
this.m_JvAC = y, this.m_JwC = Zu.crossVec2Vec2(v, y), this.m_JwA = Zu.crossVec2Vec2(g, y), 
this.m_mass += this.m_mC + this.m_mA + this.m_iC * this.m_JwC * this.m_JwC + this.m_iA * this.m_JwA * this.m_JwA;
}
if (this.m_type2 == A_.TYPE) this.m_JvBD = Zu.zero(), this.m_JwB = this.m_ratio, 
this.m_JwD = this.m_ratio, this.m_mass += this.m_ratio * this.m_ratio * (this.m_iB + this.m_iD); else {
y = Kh.mulVec2(f, this.m_localAxisD);
var A = Kh.mulSub(f, this.m_localAnchorD, this.m_lcD), x = Kh.mulSub(m, this.m_localAnchorB, this.m_lcB);
this.m_JvBD = Zu.mulNumVec2(this.m_ratio, y), this.m_JwD = this.m_ratio * Zu.crossVec2Vec2(A, y), 
this.m_JwB = this.m_ratio * Zu.crossVec2Vec2(x, y), this.m_mass += this.m_ratio * this.m_ratio * (this.m_mD + this.m_mB) + this.m_iD * this.m_JwD * this.m_JwD + this.m_iB * this.m_JwB * this.m_JwB;
}
this.m_mass = this.m_mass > 0 ? 1 / this.m_mass : 0, t.warmStarting ? (o.addMul(this.m_mA * this.m_impulse, this.m_JvAC), 
n += this.m_iA * this.m_impulse * this.m_JwA, r.addMul(this.m_mB * this.m_impulse, this.m_JvBD), 
s += this.m_iB * this.m_impulse * this.m_JwB, l.subMul(this.m_mC * this.m_impulse, this.m_JvAC), 
c -= this.m_iC * this.m_impulse * this.m_JwC, h.subMul(this.m_mD * this.m_impulse, this.m_JvBD), 
d -= this.m_iD * this.m_impulse * this.m_JwD) : this.m_impulse = 0, this.m_bodyA.c_velocity.v.setVec2(o), 
this.m_bodyA.c_velocity.w = n, this.m_bodyB.c_velocity.v.setVec2(r), this.m_bodyB.c_velocity.w = s, 
this.m_bodyC.c_velocity.v.setVec2(l), this.m_bodyC.c_velocity.w = c, this.m_bodyD.c_velocity.v.setVec2(h), 
this.m_bodyD.c_velocity.w = d;
}, e.prototype.solveVelocityConstraints = function() {
var t = this.m_bodyA.c_velocity.v, e = this.m_bodyA.c_velocity.w, o = this.m_bodyB.c_velocity.v, n = this.m_bodyB.c_velocity.w, i = this.m_bodyC.c_velocity.v, r = this.m_bodyC.c_velocity.w, s = this.m_bodyD.c_velocity.v, a = this.m_bodyD.c_velocity.w, l = Zu.dot(this.m_JvAC, t) - Zu.dot(this.m_JvAC, i) + Zu.dot(this.m_JvBD, o) - Zu.dot(this.m_JvBD, s);
l += this.m_JwA * e - this.m_JwC * r + (this.m_JwB * n - this.m_JwD * a);
var c = -this.m_mass * l;
this.m_impulse += c, t.addMul(this.m_mA * c, this.m_JvAC), e += this.m_iA * c * this.m_JwA, 
o.addMul(this.m_mB * c, this.m_JvBD), n += this.m_iB * c * this.m_JwB, i.subMul(this.m_mC * c, this.m_JvAC), 
r -= this.m_iC * c * this.m_JwC, s.subMul(this.m_mD * c, this.m_JvBD), a -= this.m_iD * c * this.m_JwD, 
this.m_bodyA.c_velocity.v.setVec2(t), this.m_bodyA.c_velocity.w = e, this.m_bodyB.c_velocity.v.setVec2(o), 
this.m_bodyB.c_velocity.w = n, this.m_bodyC.c_velocity.v.setVec2(i), this.m_bodyC.c_velocity.w = r, 
this.m_bodyD.c_velocity.v.setVec2(s), this.m_bodyD.c_velocity.w = a;
}, e.prototype.solvePositionConstraints = function() {
var t, e, o, n, i, r, s, a, l = this.m_bodyA.c_position.c, c = this.m_bodyA.c_position.a, u = this.m_bodyB.c_position.c, h = this.m_bodyB.c_position.a, d = this.m_bodyC.c_position.c, p = this.m_bodyC.c_position.a, m = this.m_bodyD.c_position.c, _ = this.m_bodyD.c_position.a, f = Kh.neo(c), y = Kh.neo(h), v = Kh.neo(p), g = Kh.neo(_), A = 0;
if (this.m_type1 == A_.TYPE) o = Zu.zero(), i = 1, s = 1, A += this.m_iA + this.m_iC, 
t = c - p - this.m_referenceAngleA; else {
var x = Kh.mulVec2(v, this.m_localAxisC), b = Kh.mulSub(v, this.m_localAnchorC, this.m_lcC), C = Kh.mulSub(f, this.m_localAnchorA, this.m_lcA);
o = x, s = Zu.crossVec2Vec2(b, x), i = Zu.crossVec2Vec2(C, x), A += this.m_mC + this.m_mA + this.m_iC * s * s + this.m_iA * i * i;
var w = Zu.sub(this.m_localAnchorC, this.m_lcC), S = Kh.mulTVec2(v, Zu.add(C, Zu.sub(l, d)));
t = Zu.dot(Zu.sub(S, w), this.m_localAxisC);
}
if (this.m_type2 == A_.TYPE) n = Zu.zero(), r = this.m_ratio, a = this.m_ratio, 
A += this.m_ratio * this.m_ratio * (this.m_iB + this.m_iD), e = h - _ - this.m_referenceAngleB; else {
x = Kh.mulVec2(g, this.m_localAxisD);
var R = Kh.mulSub(g, this.m_localAnchorD, this.m_lcD), B = Kh.mulSub(y, this.m_localAnchorB, this.m_lcB);
n = Zu.mulNumVec2(this.m_ratio, x), a = this.m_ratio * Zu.crossVec2Vec2(R, x), r = this.m_ratio * Zu.crossVec2Vec2(B, x), 
A += this.m_ratio * this.m_ratio * (this.m_mD + this.m_mB) + this.m_iD * a * a + this.m_iB * r * r;
var T = Zu.sub(this.m_localAnchorD, this.m_lcD), F = Kh.mulTVec2(g, Zu.add(B, Zu.sub(u, m)));
e = Zu.dot(F, this.m_localAxisD) - Zu.dot(T, this.m_localAxisD);
}
var M = t + this.m_ratio * e - this.m_constant, I = 0;
return A > 0 && (I = -M / A), l.addMul(this.m_mA * I, o), c += this.m_iA * I * i, 
u.addMul(this.m_mB * I, n), h += this.m_iB * I * r, d.subMul(this.m_mC * I, o), 
p -= this.m_iC * I * s, m.subMul(this.m_mD * I, n), _ -= this.m_iD * I * a, this.m_bodyA.c_position.c.setVec2(l), 
this.m_bodyA.c_position.a = c, this.m_bodyB.c_position.c.setVec2(u), this.m_bodyB.c_position.a = h, 
this.m_bodyC.c_position.c.setVec2(d), this.m_bodyC.c_position.a = p, this.m_bodyD.c_position.c.setVec2(m), 
this.m_bodyD.c_position.a = _, 0 < ih.linearSlop;
}, e.TYPE = "gear-joint", e;
}(Rd), F_ = {
maxForce: 1,
maxTorque: 1,
correctionFactor: .3
}, M_ = function(t) {
function e(o, n, i) {
var r = this;
return r instanceof e ? (o = Gu(o, F_), n = (r = t.call(this, o, n, i) || this).m_bodyA, 
i = r.m_bodyB, r.m_type = e.TYPE, r.m_linearOffset = Zu.isValid(o.linearOffset) ? Zu.clone(o.linearOffset) : n.getLocalPoint(i.getPosition()), 
r.m_angularOffset = Number.isFinite(o.angularOffset) ? o.angularOffset : i.getAngle() - n.getAngle(), 
r.m_linearImpulse = Zu.zero(), r.m_angularImpulse = 0, r.m_maxForce = o.maxForce, 
r.m_maxTorque = o.maxTorque, r.m_correctionFactor = o.correctionFactor, r) : new e(o, n, i);
}
return Ou(e, t), e.prototype._serialize = function() {
return {
type: this.m_type,
bodyA: this.m_bodyA,
bodyB: this.m_bodyB,
collideConnected: this.m_collideConnected,
maxForce: this.m_maxForce,
maxTorque: this.m_maxTorque,
correctionFactor: this.m_correctionFactor,
linearOffset: this.m_linearOffset,
angularOffset: this.m_angularOffset
};
}, e._deserialize = function(t, o, n) {
return (t = ku({}, t)).bodyA = n(wd, t.bodyA, o), t.bodyB = n(wd, t.bodyB, o), new e(t);
}, e.prototype._reset = function(t) {
Number.isFinite(t.angularOffset) && (this.m_angularOffset = t.angularOffset), Number.isFinite(t.maxForce) && (this.m_maxForce = t.maxForce), 
Number.isFinite(t.maxTorque) && (this.m_maxTorque = t.maxTorque), Number.isFinite(t.correctionFactor) && (this.m_correctionFactor = t.correctionFactor), 
Zu.isValid(t.linearOffset) && this.m_linearOffset.set(t.linearOffset);
}, e.prototype.setMaxForce = function(t) {
this.m_maxForce = t;
}, e.prototype.getMaxForce = function() {
return this.m_maxForce;
}, e.prototype.setMaxTorque = function(t) {
this.m_maxTorque = t;
}, e.prototype.getMaxTorque = function() {
return this.m_maxTorque;
}, e.prototype.setCorrectionFactor = function(t) {
this.m_correctionFactor = t;
}, e.prototype.getCorrectionFactor = function() {
return this.m_correctionFactor;
}, e.prototype.setLinearOffset = function(t) {
t.x == this.m_linearOffset.x && t.y == this.m_linearOffset.y || (this.m_bodyA.setAwake(!0), 
this.m_bodyB.setAwake(!0), this.m_linearOffset.set(t));
}, e.prototype.getLinearOffset = function() {
return this.m_linearOffset;
}, e.prototype.setAngularOffset = function(t) {
t != this.m_angularOffset && (this.m_bodyA.setAwake(!0), this.m_bodyB.setAwake(!0), 
this.m_angularOffset = t);
}, e.prototype.getAngularOffset = function() {
return this.m_angularOffset;
}, e.prototype.getAnchorA = function() {
return this.m_bodyA.getPosition();
}, e.prototype.getAnchorB = function() {
return this.m_bodyB.getPosition();
}, e.prototype.getReactionForce = function(t) {
return Zu.mulNumVec2(t, this.m_linearImpulse);
}, e.prototype.getReactionTorque = function(t) {
return t * this.m_angularImpulse;
}, e.prototype.initVelocityConstraints = function(t) {
this.m_localCenterA = this.m_bodyA.m_sweep.localCenter, this.m_localCenterB = this.m_bodyB.m_sweep.localCenter, 
this.m_invMassA = this.m_bodyA.m_invMass, this.m_invMassB = this.m_bodyB.m_invMass, 
this.m_invIA = this.m_bodyA.m_invI, this.m_invIB = this.m_bodyB.m_invI;
var e = this.m_bodyA.c_position.c, o = this.m_bodyA.c_position.a, n = this.m_bodyA.c_velocity.v, i = this.m_bodyA.c_velocity.w, r = this.m_bodyB.c_position.c, s = this.m_bodyB.c_position.a, a = this.m_bodyB.c_velocity.v, l = this.m_bodyB.c_velocity.w, c = Kh.neo(o), u = Kh.neo(s);
this.m_rA = Kh.mulVec2(c, Zu.sub(this.m_linearOffset, this.m_localCenterA)), this.m_rB = Kh.mulVec2(u, Zu.neg(this.m_localCenterB));
var h = this.m_invMassA, d = this.m_invMassB, p = this.m_invIA, m = this.m_invIB, _ = new kp();
if (_.ex.x = h + d + p * this.m_rA.y * this.m_rA.y + m * this.m_rB.y * this.m_rB.y, 
_.ex.y = -p * this.m_rA.x * this.m_rA.y - m * this.m_rB.x * this.m_rB.y, _.ey.x = _.ex.y, 
_.ey.y = h + d + p * this.m_rA.x * this.m_rA.x + m * this.m_rB.x * this.m_rB.x, 
this.m_linearMass = _.getInverse(), this.m_angularMass = p + m, this.m_angularMass > 0 && (this.m_angularMass = 1 / this.m_angularMass), 
this.m_linearError = Zu.zero(), this.m_linearError.addCombine(1, r, 1, this.m_rB), 
this.m_linearError.subCombine(1, e, 1, this.m_rA), this.m_angularError = s - o - this.m_angularOffset, 
t.warmStarting) {
this.m_linearImpulse.mul(t.dtRatio), this.m_angularImpulse *= t.dtRatio;
var f = Zu.neo(this.m_linearImpulse.x, this.m_linearImpulse.y);
n.subMul(h, f), i -= p * (Zu.crossVec2Vec2(this.m_rA, f) + this.m_angularImpulse), 
a.addMul(d, f), l += m * (Zu.crossVec2Vec2(this.m_rB, f) + this.m_angularImpulse);
} else this.m_linearImpulse.setZero(), this.m_angularImpulse = 0;
this.m_bodyA.c_velocity.v = n, this.m_bodyA.c_velocity.w = i, this.m_bodyB.c_velocity.v = a, 
this.m_bodyB.c_velocity.w = l;
}, e.prototype.solveVelocityConstraints = function(t) {
var e = this.m_bodyA.c_velocity.v, o = this.m_bodyA.c_velocity.w, n = this.m_bodyB.c_velocity.v, i = this.m_bodyB.c_velocity.w, r = this.m_invMassA, s = this.m_invMassB, a = this.m_invIA, l = this.m_invIB, c = t.dt, u = t.inv_dt, h = i - o + u * this.m_correctionFactor * this.m_angularError, d = -this.m_angularMass * h, p = this.m_angularImpulse, m = c * this.m_maxTorque;
this.m_angularImpulse = Uu(this.m_angularImpulse + d, -m, m), o -= a * (d = this.m_angularImpulse - p), 
i += l * d, (h = Zu.zero()).addCombine(1, n, 1, Zu.crossNumVec2(i, this.m_rB)), 
h.subCombine(1, e, 1, Zu.crossNumVec2(o, this.m_rA)), h.addMul(u * this.m_correctionFactor, this.m_linearError), 
d = Zu.neg(kp.mulVec2(this.m_linearMass, h)), p = Zu.clone(this.m_linearImpulse), 
this.m_linearImpulse.add(d), m = c * this.m_maxForce, this.m_linearImpulse.clamp(m), 
d = Zu.sub(this.m_linearImpulse, p), e.subMul(r, d), o -= a * Zu.crossVec2Vec2(this.m_rA, d), 
n.addMul(s, d), i += l * Zu.crossVec2Vec2(this.m_rB, d), this.m_bodyA.c_velocity.v = e, 
this.m_bodyA.c_velocity.w = o, this.m_bodyB.c_velocity.v = n, this.m_bodyB.c_velocity.w = i;
}, e.prototype.solvePositionConstraints = function() {
return !0;
}, e.TYPE = "motor-joint", e;
}(Rd), I_ = Math.PI, D_ = {
maxForce: 0,
frequencyHz: 5,
dampingRatio: .7
}, N_ = function(t) {
function e(o, n, i, r) {
var s = this;
return s instanceof e ? (o = Gu(o, D_), n = (s = t.call(this, o, n, i) || this).m_bodyA, 
i = s.m_bodyB, s.m_type = e.TYPE, Zu.isValid(r) ? s.m_targetA = Zu.clone(r) : Zu.isValid(o.target) ? s.m_targetA = Zu.clone(o.target) : s.m_targetA = Zu.zero(), 
s.m_localAnchorB = od.mulTVec2(i.getTransform(), s.m_targetA), s.m_maxForce = o.maxForce, 
s.m_impulse = Zu.zero(), s.m_frequencyHz = o.frequencyHz, s.m_dampingRatio = o.dampingRatio, 
s.m_beta = 0, s.m_gamma = 0, s.m_rB = Zu.zero(), s.m_localCenterB = Zu.zero(), s.m_invMassB = 0, 
s.m_invIB = 0, s.m_mass = new kp(), s.m_C = Zu.zero(), s) : new e(o, n, i, r);
}
return Ou(e, t), e.prototype._serialize = function() {
return {
type: this.m_type,
bodyA: this.m_bodyA,
bodyB: this.m_bodyB,
collideConnected: this.m_collideConnected,
target: this.m_targetA,
maxForce: this.m_maxForce,
frequencyHz: this.m_frequencyHz,
dampingRatio: this.m_dampingRatio,
_localAnchorB: this.m_localAnchorB
};
}, e._deserialize = function(t, o, n) {
(t = ku({}, t)).bodyA = n(wd, t.bodyA, o), t.bodyB = n(wd, t.bodyB, o), t.target = Zu.clone(t.target);
var i = new e(t);
return t._localAnchorB && (i.m_localAnchorB = t._localAnchorB), i;
}, e.prototype._reset = function(t) {
Number.isFinite(t.maxForce) && (this.m_maxForce = t.maxForce), Number.isFinite(t.frequencyHz) && (this.m_frequencyHz = t.frequencyHz), 
Number.isFinite(t.dampingRatio) && (this.m_dampingRatio = t.dampingRatio);
}, e.prototype.setTarget = function(t) {
Zu.areEqual(t, this.m_targetA) || (this.m_bodyB.setAwake(!0), this.m_targetA.set(t));
}, e.prototype.getTarget = function() {
return this.m_targetA;
}, e.prototype.setMaxForce = function(t) {
this.m_maxForce = t;
}, e.prototype.getMaxForce = function() {
return this.m_maxForce;
}, e.prototype.setFrequency = function(t) {
this.m_frequencyHz = t;
}, e.prototype.getFrequency = function() {
return this.m_frequencyHz;
}, e.prototype.setDampingRatio = function(t) {
this.m_dampingRatio = t;
}, e.prototype.getDampingRatio = function() {
return this.m_dampingRatio;
}, e.prototype.getAnchorA = function() {
return Zu.clone(this.m_targetA);
}, e.prototype.getAnchorB = function() {
return this.m_bodyB.getWorldPoint(this.m_localAnchorB);
}, e.prototype.getReactionForce = function(t) {
return Zu.mulNumVec2(t, this.m_impulse);
}, e.prototype.getReactionTorque = function(t) {
return 0 * t;
}, e.prototype.shiftOrigin = function(t) {
this.m_targetA.sub(t);
}, e.prototype.initVelocityConstraints = function(t) {
this.m_localCenterB = this.m_bodyB.m_sweep.localCenter, this.m_invMassB = this.m_bodyB.m_invMass, 
this.m_invIB = this.m_bodyB.m_invI;
var e = this.m_bodyB.c_position, o = this.m_bodyB.c_velocity, n = e.c, i = e.a, r = o.v, s = o.w, a = Kh.neo(i), l = this.m_bodyB.getMass(), c = 2 * I_ * this.m_frequencyHz, u = 2 * l * this.m_dampingRatio * c, h = l * c * c, d = t.dt;
this.m_gamma = d * (u + d * h), 0 != this.m_gamma && (this.m_gamma = 1 / this.m_gamma), 
this.m_beta = d * h * this.m_gamma, this.m_rB = Kh.mulVec2(a, Zu.sub(this.m_localAnchorB, this.m_localCenterB));
var p = new kp();
p.ex.x = this.m_invMassB + this.m_invIB * this.m_rB.y * this.m_rB.y + this.m_gamma, 
p.ex.y = -this.m_invIB * this.m_rB.x * this.m_rB.y, p.ey.x = p.ex.y, p.ey.y = this.m_invMassB + this.m_invIB * this.m_rB.x * this.m_rB.x + this.m_gamma, 
this.m_mass = p.getInverse(), this.m_C.setVec2(n), this.m_C.addCombine(1, this.m_rB, -1, this.m_targetA), 
this.m_C.mul(this.m_beta), s *= .98, t.warmStarting ? (this.m_impulse.mul(t.dtRatio), 
r.addMul(this.m_invMassB, this.m_impulse), s += this.m_invIB * Zu.crossVec2Vec2(this.m_rB, this.m_impulse)) : this.m_impulse.setZero(), 
o.v.setVec2(r), o.w = s;
}, e.prototype.solveVelocityConstraints = function(t) {
var e = this.m_bodyB.c_velocity, o = Zu.clone(e.v), n = e.w, i = Zu.crossNumVec2(n, this.m_rB);
i.add(o), i.addCombine(1, this.m_C, this.m_gamma, this.m_impulse), i.neg();
var r = kp.mulVec2(this.m_mass, i), s = Zu.clone(this.m_impulse);
this.m_impulse.add(r);
var a = t.dt * this.m_maxForce;
this.m_impulse.clamp(a), r = Zu.sub(this.m_impulse, s), o.addMul(this.m_invMassB, r), 
n += this.m_invIB * Zu.crossVec2Vec2(this.m_rB, r), e.v.setVec2(o), e.w = n;
}, e.prototype.solvePositionConstraints = function() {
return !0;
}, e.TYPE = "mouse-joint", e;
}(Rd), P_ = Math.abs, E_ = {
collideConnected: !0
}, L_ = function(t) {
function e(o, n, i, r, s, a, l, c) {
var u = this;
return u instanceof e ? (o = Gu(o, E_), n = (u = t.call(this, o, n, i) || this).m_bodyA, 
i = u.m_bodyB, u.m_type = e.TYPE, u.m_groundAnchorA = Zu.clone(r || o.groundAnchorA || Zu.neo(-1, 1)), 
u.m_groundAnchorB = Zu.clone(s || o.groundAnchorB || Zu.neo(1, 1)), u.m_localAnchorA = Zu.clone(a ? n.getLocalPoint(a) : o.localAnchorA || Zu.neo(-1, 0)), 
u.m_localAnchorB = Zu.clone(l ? i.getLocalPoint(l) : o.localAnchorB || Zu.neo(1, 0)), 
u.m_lengthA = Number.isFinite(o.lengthA) ? o.lengthA : Zu.distance(a, r), u.m_lengthB = Number.isFinite(o.lengthB) ? o.lengthB : Zu.distance(l, s), 
u.m_ratio = Number.isFinite(c) ? c : o.ratio, u.m_constant = u.m_lengthA + u.m_ratio * u.m_lengthB, 
u.m_impulse = 0, u) : new e(o, n, i, r, s, a, l, c);
}
return Ou(e, t), e.prototype._serialize = function() {
return {
type: this.m_type,
bodyA: this.m_bodyA,
bodyB: this.m_bodyB,
collideConnected: this.m_collideConnected,
groundAnchorA: this.m_groundAnchorA,
groundAnchorB: this.m_groundAnchorB,
localAnchorA: this.m_localAnchorA,
localAnchorB: this.m_localAnchorB,
lengthA: this.m_lengthA,
lengthB: this.m_lengthB,
ratio: this.m_ratio
};
}, e._deserialize = function(t, o, n) {
return (t = ku({}, t)).bodyA = n(wd, t.bodyA, o), t.bodyB = n(wd, t.bodyB, o), new e(t);
}, e.prototype._reset = function(t) {
Zu.isValid(t.groundAnchorA) && this.m_groundAnchorA.set(t.groundAnchorA), Zu.isValid(t.groundAnchorB) && this.m_groundAnchorB.set(t.groundAnchorB), 
Zu.isValid(t.localAnchorA) ? this.m_localAnchorA.set(t.localAnchorA) : Zu.isValid(t.anchorA) && this.m_localAnchorA.set(this.m_bodyA.getLocalPoint(t.anchorA)), 
Zu.isValid(t.localAnchorB) ? this.m_localAnchorB.set(t.localAnchorB) : Zu.isValid(t.anchorB) && this.m_localAnchorB.set(this.m_bodyB.getLocalPoint(t.anchorB)), 
Number.isFinite(t.lengthA) && (this.m_lengthA = t.lengthA), Number.isFinite(t.lengthB) && (this.m_lengthB = t.lengthB), 
Number.isFinite(t.ratio) && (this.m_ratio = t.ratio);
}, e.prototype.getGroundAnchorA = function() {
return this.m_groundAnchorA;
}, e.prototype.getGroundAnchorB = function() {
return this.m_groundAnchorB;
}, e.prototype.getLengthA = function() {
return this.m_lengthA;
}, e.prototype.getLengthB = function() {
return this.m_lengthB;
}, e.prototype.getRatio = function() {
return this.m_ratio;
}, e.prototype.getCurrentLengthA = function() {
var t = this.m_bodyA.getWorldPoint(this.m_localAnchorA), e = this.m_groundAnchorA;
return Zu.distance(t, e);
}, e.prototype.getCurrentLengthB = function() {
var t = this.m_bodyB.getWorldPoint(this.m_localAnchorB), e = this.m_groundAnchorB;
return Zu.distance(t, e);
}, e.prototype.shiftOrigin = function(t) {
this.m_groundAnchorA.sub(t), this.m_groundAnchorB.sub(t);
}, e.prototype.getAnchorA = function() {
return this.m_bodyA.getWorldPoint(this.m_localAnchorA);
}, e.prototype.getAnchorB = function() {
return this.m_bodyB.getWorldPoint(this.m_localAnchorB);
}, e.prototype.getReactionForce = function(t) {
return Zu.mulNumVec2(this.m_impulse, this.m_uB).mul(t);
}, e.prototype.getReactionTorque = function() {
return 0;
}, e.prototype.initVelocityConstraints = function(t) {
this.m_localCenterA = this.m_bodyA.m_sweep.localCenter, this.m_localCenterB = this.m_bodyB.m_sweep.localCenter, 
this.m_invMassA = this.m_bodyA.m_invMass, this.m_invMassB = this.m_bodyB.m_invMass, 
this.m_invIA = this.m_bodyA.m_invI, this.m_invIB = this.m_bodyB.m_invI;
var e = this.m_bodyA.c_position.c, o = this.m_bodyA.c_position.a, n = this.m_bodyA.c_velocity.v, i = this.m_bodyA.c_velocity.w, r = this.m_bodyB.c_position.c, s = this.m_bodyB.c_position.a, a = this.m_bodyB.c_velocity.v, l = this.m_bodyB.c_velocity.w, c = Kh.neo(o), u = Kh.neo(s);
this.m_rA = Kh.mulVec2(c, Zu.sub(this.m_localAnchorA, this.m_localCenterA)), this.m_rB = Kh.mulVec2(u, Zu.sub(this.m_localAnchorB, this.m_localCenterB)), 
this.m_uA = Zu.sub(Zu.add(e, this.m_rA), this.m_groundAnchorA), this.m_uB = Zu.sub(Zu.add(r, this.m_rB), this.m_groundAnchorB);
var h = this.m_uA.length(), d = this.m_uB.length();
h > 10 * ih.linearSlop ? this.m_uA.mul(1 / h) : this.m_uA.setZero(), d > 10 * ih.linearSlop ? this.m_uB.mul(1 / d) : this.m_uB.setZero();
var p = Zu.crossVec2Vec2(this.m_rA, this.m_uA), m = Zu.crossVec2Vec2(this.m_rB, this.m_uB), _ = this.m_invMassA + this.m_invIA * p * p, f = this.m_invMassB + this.m_invIB * m * m;
if (this.m_mass = _ + this.m_ratio * this.m_ratio * f, this.m_mass > 0 && (this.m_mass = 1 / this.m_mass), 
t.warmStarting) {
this.m_impulse *= t.dtRatio;
var y = Zu.mulNumVec2(-this.m_impulse, this.m_uA), v = Zu.mulNumVec2(-this.m_ratio * this.m_impulse, this.m_uB);
n.addMul(this.m_invMassA, y), i += this.m_invIA * Zu.crossVec2Vec2(this.m_rA, y), 
a.addMul(this.m_invMassB, v), l += this.m_invIB * Zu.crossVec2Vec2(this.m_rB, v);
} else this.m_impulse = 0;
this.m_bodyA.c_velocity.v = n, this.m_bodyA.c_velocity.w = i, this.m_bodyB.c_velocity.v = a, 
this.m_bodyB.c_velocity.w = l;
}, e.prototype.solveVelocityConstraints = function() {
var t = this.m_bodyA.c_velocity.v, e = this.m_bodyA.c_velocity.w, o = this.m_bodyB.c_velocity.v, n = this.m_bodyB.c_velocity.w, i = Zu.add(t, Zu.crossNumVec2(e, this.m_rA)), r = Zu.add(o, Zu.crossNumVec2(n, this.m_rB)), s = -Zu.dot(this.m_uA, i) - this.m_ratio * Zu.dot(this.m_uB, r), a = -this.m_mass * s;
this.m_impulse += a;
var l = Zu.mulNumVec2(-a, this.m_uA), c = Zu.mulNumVec2(-this.m_ratio * a, this.m_uB);
t.addMul(this.m_invMassA, l), e += this.m_invIA * Zu.crossVec2Vec2(this.m_rA, l), 
o.addMul(this.m_invMassB, c), n += this.m_invIB * Zu.crossVec2Vec2(this.m_rB, c), 
this.m_bodyA.c_velocity.v = t, this.m_bodyA.c_velocity.w = e, this.m_bodyB.c_velocity.v = o, 
this.m_bodyB.c_velocity.w = n;
}, e.prototype.solvePositionConstraints = function() {
var t = this.m_bodyA.c_position.c, e = this.m_bodyA.c_position.a, o = this.m_bodyB.c_position.c, n = this.m_bodyB.c_position.a, i = Kh.neo(e), r = Kh.neo(n), s = Kh.mulVec2(i, Zu.sub(this.m_localAnchorA, this.m_localCenterA)), a = Kh.mulVec2(r, Zu.sub(this.m_localAnchorB, this.m_localCenterB)), l = Zu.sub(Zu.add(t, this.m_rA), this.m_groundAnchorA), c = Zu.sub(Zu.add(o, this.m_rB), this.m_groundAnchorB), u = l.length(), h = c.length();
u > 10 * ih.linearSlop ? l.mul(1 / u) : l.setZero(), h > 10 * ih.linearSlop ? c.mul(1 / h) : c.setZero();
var d = Zu.crossVec2Vec2(s, l), p = Zu.crossVec2Vec2(a, c), m = this.m_invMassA + this.m_invIA * d * d, _ = this.m_invMassB + this.m_invIB * p * p, f = m + this.m_ratio * this.m_ratio * _;
f > 0 && (f = 1 / f);
var y = this.m_constant - u - this.m_ratio * h, v = P_(y), g = -f * y, A = Zu.mulNumVec2(-g, l), x = Zu.mulNumVec2(-this.m_ratio * g, c);
return t.addMul(this.m_invMassA, A), e += this.m_invIA * Zu.crossVec2Vec2(s, A), 
o.addMul(this.m_invMassB, x), n += this.m_invIB * Zu.crossVec2Vec2(a, x), this.m_bodyA.c_position.c = t, 
this.m_bodyA.c_position.a = e, this.m_bodyB.c_position.c = o, this.m_bodyB.c_position.a = n, 
v < ih.linearSlop;
}, e.TYPE = "pulley-joint", e;
}(Rd), W_ = Math.min;
!function(t) {
t[t.inactiveLimit = 0] = "inactiveLimit", t[t.atLowerLimit = 1] = "atLowerLimit", 
t[t.atUpperLimit = 2] = "atUpperLimit", t[t.equalLimits = 3] = "equalLimits";
}(w_ || (w_ = {}));
var V_, O_ = {
maxLength: 0
}, k_ = function(t) {
function e(o, n, i, r) {
var s = this;
return s instanceof e ? (o = Gu(o, O_), n = (s = t.call(this, o, n, i) || this).m_bodyA, 
i = s.m_bodyB, s.m_type = e.TYPE, s.m_localAnchorA = Zu.clone(r ? n.getLocalPoint(r) : o.localAnchorA || Zu.neo(-1, 0)), 
s.m_localAnchorB = Zu.clone(r ? i.getLocalPoint(r) : o.localAnchorB || Zu.neo(1, 0)), 
s.m_maxLength = o.maxLength, s.m_mass = 0, s.m_impulse = 0, s.m_length = 0, s.m_state = w_.inactiveLimit, 
s) : new e(o, n, i, r);
}
return Ou(e, t), e.prototype._serialize = function() {
return {
type: this.m_type,
bodyA: this.m_bodyA,
bodyB: this.m_bodyB,
collideConnected: this.m_collideConnected,
localAnchorA: this.m_localAnchorA,
localAnchorB: this.m_localAnchorB,
maxLength: this.m_maxLength
};
}, e._deserialize = function(t, o, n) {
return (t = ku({}, t)).bodyA = n(wd, t.bodyA, o), t.bodyB = n(wd, t.bodyB, o), new e(t);
}, e.prototype._reset = function(t) {
Number.isFinite(t.maxLength) && (this.m_maxLength = t.maxLength);
}, e.prototype.getLocalAnchorA = function() {
return this.m_localAnchorA;
}, e.prototype.getLocalAnchorB = function() {
return this.m_localAnchorB;
}, e.prototype.setMaxLength = function(t) {
this.m_maxLength = t;
}, e.prototype.getMaxLength = function() {
return this.m_maxLength;
}, e.prototype.getLimitState = function() {
return this.m_state;
}, e.prototype.getAnchorA = function() {
return this.m_bodyA.getWorldPoint(this.m_localAnchorA);
}, e.prototype.getAnchorB = function() {
return this.m_bodyB.getWorldPoint(this.m_localAnchorB);
}, e.prototype.getReactionForce = function(t) {
return Zu.mulNumVec2(this.m_impulse, this.m_u).mul(t);
}, e.prototype.getReactionTorque = function() {
return 0;
}, e.prototype.initVelocityConstraints = function(t) {
this.m_localCenterA = this.m_bodyA.m_sweep.localCenter, this.m_localCenterB = this.m_bodyB.m_sweep.localCenter, 
this.m_invMassA = this.m_bodyA.m_invMass, this.m_invMassB = this.m_bodyB.m_invMass, 
this.m_invIA = this.m_bodyA.m_invI, this.m_invIB = this.m_bodyB.m_invI;
var e = this.m_bodyA.c_position.c, o = this.m_bodyA.c_position.a, n = this.m_bodyA.c_velocity.v, i = this.m_bodyA.c_velocity.w, r = this.m_bodyB.c_position.c, s = this.m_bodyB.c_position.a, a = this.m_bodyB.c_velocity.v, l = this.m_bodyB.c_velocity.w, c = Kh.neo(o), u = Kh.neo(s);
this.m_rA = Kh.mulSub(c, this.m_localAnchorA, this.m_localCenterA), this.m_rB = Kh.mulSub(u, this.m_localAnchorB, this.m_localCenterB), 
this.m_u = Zu.zero(), this.m_u.addCombine(1, r, 1, this.m_rB), this.m_u.subCombine(1, e, 1, this.m_rA), 
this.m_length = this.m_u.length();
var h = this.m_length - this.m_maxLength;
if (this.m_state = h > 0 ? w_.atUpperLimit : w_.inactiveLimit, !(this.m_length > ih.linearSlop)) return this.m_u.setZero(), 
this.m_mass = 0, void (this.m_impulse = 0);
this.m_u.mul(1 / this.m_length);
var d = Zu.crossVec2Vec2(this.m_rA, this.m_u), p = Zu.crossVec2Vec2(this.m_rB, this.m_u), m = this.m_invMassA + this.m_invIA * d * d + this.m_invMassB + this.m_invIB * p * p;
if (this.m_mass = 0 != m ? 1 / m : 0, t.warmStarting) {
this.m_impulse *= t.dtRatio;
var _ = Zu.mulNumVec2(this.m_impulse, this.m_u);
n.subMul(this.m_invMassA, _), i -= this.m_invIA * Zu.crossVec2Vec2(this.m_rA, _), 
a.addMul(this.m_invMassB, _), l += this.m_invIB * Zu.crossVec2Vec2(this.m_rB, _);
} else this.m_impulse = 0;
this.m_bodyA.c_velocity.v.setVec2(n), this.m_bodyA.c_velocity.w = i, this.m_bodyB.c_velocity.v.setVec2(a), 
this.m_bodyB.c_velocity.w = l;
}, e.prototype.solveVelocityConstraints = function(t) {
var e = this.m_bodyA.c_velocity.v, o = this.m_bodyA.c_velocity.w, n = this.m_bodyB.c_velocity.v, i = this.m_bodyB.c_velocity.w, r = Zu.addCrossNumVec2(e, o, this.m_rA), s = Zu.addCrossNumVec2(n, i, this.m_rB), a = this.m_length - this.m_maxLength, l = Zu.dot(this.m_u, Zu.sub(s, r));
a < 0 && (l += t.inv_dt * a);
var c = -this.m_mass * l, u = this.m_impulse;
this.m_impulse = W_(0, this.m_impulse + c), c = this.m_impulse - u;
var h = Zu.mulNumVec2(c, this.m_u);
e.subMul(this.m_invMassA, h), o -= this.m_invIA * Zu.crossVec2Vec2(this.m_rA, h), 
n.addMul(this.m_invMassB, h), i += this.m_invIB * Zu.crossVec2Vec2(this.m_rB, h), 
this.m_bodyA.c_velocity.v = e, this.m_bodyA.c_velocity.w = o, this.m_bodyB.c_velocity.v = n, 
this.m_bodyB.c_velocity.w = i;
}, e.prototype.solvePositionConstraints = function() {
var t = this.m_bodyA.c_position.c, e = this.m_bodyA.c_position.a, o = this.m_bodyB.c_position.c, n = this.m_bodyB.c_position.a, i = Kh.neo(e), r = Kh.neo(n), s = Kh.mulSub(i, this.m_localAnchorA, this.m_localCenterA), a = Kh.mulSub(r, this.m_localAnchorB, this.m_localCenterB), l = Zu.zero();
l.addCombine(1, o, 1, a), l.subCombine(1, t, 1, s);
var c = l.normalize(), u = c - this.m_maxLength;
u = Uu(u, 0, ih.maxLinearCorrection);
var h = -this.m_mass * u, d = Zu.mulNumVec2(h, l);
return t.subMul(this.m_invMassA, d), e -= this.m_invIA * Zu.crossVec2Vec2(s, d), 
o.addMul(this.m_invMassB, d), n += this.m_invIB * Zu.crossVec2Vec2(a, d), this.m_bodyA.c_position.c.setVec2(t), 
this.m_bodyA.c_position.a = e, this.m_bodyB.c_position.c.setVec2(o), this.m_bodyB.c_position.a = n, 
c - this.m_maxLength < ih.linearSlop;
}, e.TYPE = "rope-joint", e;
}(Rd), G_ = Math.abs, z_ = Math.PI, j_ = {
frequencyHz: 0,
dampingRatio: 0
}, q_ = function(t) {
function e(o, n, i, r) {
var s = this;
return s instanceof e ? (o = Gu(o, j_), n = (s = t.call(this, o, n, i) || this).m_bodyA, 
i = s.m_bodyB, s.m_type = e.TYPE, s.m_localAnchorA = Zu.clone(r ? n.getLocalPoint(r) : o.localAnchorA || Zu.zero()), 
s.m_localAnchorB = Zu.clone(r ? i.getLocalPoint(r) : o.localAnchorB || Zu.zero()), 
s.m_referenceAngle = Number.isFinite(o.referenceAngle) ? o.referenceAngle : i.getAngle() - n.getAngle(), 
s.m_frequencyHz = o.frequencyHz, s.m_dampingRatio = o.dampingRatio, s.m_impulse = new Hm(), 
s.m_bias = 0, s.m_gamma = 0, s.m_mass = new y_(), s) : new e(o, n, i, r);
}
return Ou(e, t), e.prototype._serialize = function() {
return {
type: this.m_type,
bodyA: this.m_bodyA,
bodyB: this.m_bodyB,
collideConnected: this.m_collideConnected,
frequencyHz: this.m_frequencyHz,
dampingRatio: this.m_dampingRatio,
localAnchorA: this.m_localAnchorA,
localAnchorB: this.m_localAnchorB,
referenceAngle: this.m_referenceAngle
};
}, e._deserialize = function(t, o, n) {
return (t = ku({}, t)).bodyA = n(wd, t.bodyA, o), t.bodyB = n(wd, t.bodyB, o), new e(t);
}, e.prototype._reset = function(t) {
t.anchorA ? this.m_localAnchorA.setVec2(this.m_bodyA.getLocalPoint(t.anchorA)) : t.localAnchorA && this.m_localAnchorA.setVec2(t.localAnchorA), 
t.anchorB ? this.m_localAnchorB.setVec2(this.m_bodyB.getLocalPoint(t.anchorB)) : t.localAnchorB && this.m_localAnchorB.setVec2(t.localAnchorB), 
Number.isFinite(t.frequencyHz) && (this.m_frequencyHz = t.frequencyHz), Number.isFinite(t.dampingRatio) && (this.m_dampingRatio = t.dampingRatio);
}, e.prototype.getLocalAnchorA = function() {
return this.m_localAnchorA;
}, e.prototype.getLocalAnchorB = function() {
return this.m_localAnchorB;
}, e.prototype.getReferenceAngle = function() {
return this.m_referenceAngle;
}, e.prototype.setFrequency = function(t) {
this.m_frequencyHz = t;
}, e.prototype.getFrequency = function() {
return this.m_frequencyHz;
}, e.prototype.setDampingRatio = function(t) {
this.m_dampingRatio = t;
}, e.prototype.getDampingRatio = function() {
return this.m_dampingRatio;
}, e.prototype.getAnchorA = function() {
return this.m_bodyA.getWorldPoint(this.m_localAnchorA);
}, e.prototype.getAnchorB = function() {
return this.m_bodyB.getWorldPoint(this.m_localAnchorB);
}, e.prototype.getReactionForce = function(t) {
return Zu.neo(this.m_impulse.x, this.m_impulse.y).mul(t);
}, e.prototype.getReactionTorque = function(t) {
return t * this.m_impulse.z;
}, e.prototype.initVelocityConstraints = function(t) {
this.m_localCenterA = this.m_bodyA.m_sweep.localCenter, this.m_localCenterB = this.m_bodyB.m_sweep.localCenter, 
this.m_invMassA = this.m_bodyA.m_invMass, this.m_invMassB = this.m_bodyB.m_invMass, 
this.m_invIA = this.m_bodyA.m_invI, this.m_invIB = this.m_bodyB.m_invI;
var e = this.m_bodyA.c_position.a, o = this.m_bodyA.c_velocity.v, n = this.m_bodyA.c_velocity.w, i = this.m_bodyB.c_position.a, r = this.m_bodyB.c_velocity.v, s = this.m_bodyB.c_velocity.w, a = Kh.neo(e), l = Kh.neo(i);
this.m_rA = Kh.mulVec2(a, Zu.sub(this.m_localAnchorA, this.m_localCenterA)), this.m_rB = Kh.mulVec2(l, Zu.sub(this.m_localAnchorB, this.m_localCenterB));
var c = this.m_invMassA, u = this.m_invMassB, h = this.m_invIA, d = this.m_invIB, p = new y_();
if (p.ex.x = c + u + this.m_rA.y * this.m_rA.y * h + this.m_rB.y * this.m_rB.y * d, 
p.ey.x = -this.m_rA.y * this.m_rA.x * h - this.m_rB.y * this.m_rB.x * d, p.ez.x = -this.m_rA.y * h - this.m_rB.y * d, 
p.ex.y = p.ey.x, p.ey.y = c + u + this.m_rA.x * this.m_rA.x * h + this.m_rB.x * this.m_rB.x * d, 
p.ez.y = this.m_rA.x * h + this.m_rB.x * d, p.ex.z = p.ez.x, p.ey.z = p.ez.y, p.ez.z = h + d, 
this.m_frequencyHz > 0) {
p.getInverse22(this.m_mass);
var m = h + d, _ = m > 0 ? 1 / m : 0, f = i - e - this.m_referenceAngle, y = 2 * z_ * this.m_frequencyHz, v = 2 * _ * this.m_dampingRatio * y, g = _ * y * y, A = t.dt;
this.m_gamma = A * (v + A * g), this.m_gamma = 0 != this.m_gamma ? 1 / this.m_gamma : 0, 
this.m_bias = f * A * g * this.m_gamma, m += this.m_gamma, this.m_mass.ez.z = 0 != m ? 1 / m : 0;
} else 0 == p.ez.z ? (p.getInverse22(this.m_mass), this.m_gamma = 0, this.m_bias = 0) : (p.getSymInverse33(this.m_mass), 
this.m_gamma = 0, this.m_bias = 0);
if (t.warmStarting) {
this.m_impulse.mul(t.dtRatio);
var x = Zu.neo(this.m_impulse.x, this.m_impulse.y);
o.subMul(c, x), n -= h * (Zu.crossVec2Vec2(this.m_rA, x) + this.m_impulse.z), r.addMul(u, x), 
s += d * (Zu.crossVec2Vec2(this.m_rB, x) + this.m_impulse.z);
} else this.m_impulse.setZero();
this.m_bodyA.c_velocity.v = o, this.m_bodyA.c_velocity.w = n, this.m_bodyB.c_velocity.v = r, 
this.m_bodyB.c_velocity.w = s;
}, e.prototype.solveVelocityConstraints = function() {
var t = this.m_bodyA.c_velocity.v, e = this.m_bodyA.c_velocity.w, o = this.m_bodyB.c_velocity.v, n = this.m_bodyB.c_velocity.w, i = this.m_invMassA, r = this.m_invMassB, s = this.m_invIA, a = this.m_invIB;
if (this.m_frequencyHz > 0) {
var l = n - e, c = -this.m_mass.ez.z * (l + this.m_bias + this.m_gamma * this.m_impulse.z);
this.m_impulse.z += c, e -= s * c, n += a * c, (d = Zu.zero()).addCombine(1, o, 1, Zu.crossNumVec2(n, this.m_rB)), 
d.subCombine(1, t, 1, Zu.crossNumVec2(e, this.m_rA));
var u = Zu.neg(y_.mulVec2(this.m_mass, d));
this.m_impulse.x += u.x, this.m_impulse.y += u.y;
var h = Zu.clone(u);
t.subMul(i, h), e -= s * Zu.crossVec2Vec2(this.m_rA, h), o.addMul(r, h), n += a * Zu.crossVec2Vec2(this.m_rB, h);
} else {
var d;
(d = Zu.zero()).addCombine(1, o, 1, Zu.crossNumVec2(n, this.m_rB)), d.subCombine(1, t, 1, Zu.crossNumVec2(e, this.m_rA)), 
l = n - e;
var p = new Hm(d.x, d.y, l), m = Hm.neg(y_.mulVec3(this.m_mass, p));
this.m_impulse.add(m), h = Zu.neo(m.x, m.y), t.subMul(i, h), e -= s * (Zu.crossVec2Vec2(this.m_rA, h) + m.z), 
o.addMul(r, h), n += a * (Zu.crossVec2Vec2(this.m_rB, h) + m.z);
}
this.m_bodyA.c_velocity.v = t, this.m_bodyA.c_velocity.w = e, this.m_bodyB.c_velocity.v = o, 
this.m_bodyB.c_velocity.w = n;
}, e.prototype.solvePositionConstraints = function() {
var t, e, o = this.m_bodyA.c_position.c, n = this.m_bodyA.c_position.a, i = this.m_bodyB.c_position.c, r = this.m_bodyB.c_position.a, s = Kh.neo(n), a = Kh.neo(r), l = this.m_invMassA, c = this.m_invMassB, u = this.m_invIA, h = this.m_invIB, d = Kh.mulVec2(s, Zu.sub(this.m_localAnchorA, this.m_localCenterA)), p = Kh.mulVec2(a, Zu.sub(this.m_localAnchorB, this.m_localCenterB)), m = new y_();
if (m.ex.x = l + c + d.y * d.y * u + p.y * p.y * h, m.ey.x = -d.y * d.x * u - p.y * p.x * h, 
m.ez.x = -d.y * u - p.y * h, m.ex.y = m.ey.x, m.ey.y = l + c + d.x * d.x * u + p.x * p.x * h, 
m.ez.y = d.x * u + p.x * h, m.ex.z = m.ez.x, m.ey.z = m.ez.y, m.ez.z = u + h, this.m_frequencyHz > 0) {
(f = Zu.zero()).addCombine(1, i, 1, p), f.subCombine(1, o, 1, d), t = f.length(), 
e = 0;
var _ = Zu.neg(m.solve22(f));
o.subMul(l, _), n -= u * Zu.crossVec2Vec2(d, _), i.addMul(c, _), r += h * Zu.crossVec2Vec2(p, _);
} else {
var f;
(f = Zu.zero()).addCombine(1, i, 1, p), f.subCombine(1, o, 1, d);
var y = r - n - this.m_referenceAngle;
t = f.length(), e = G_(y);
var v = new Hm(f.x, f.y, y), g = new Hm();
if (m.ez.z > 0) g = Hm.neg(m.solve33(v)); else {
var A = Zu.neg(m.solve22(f));
g.set(A.x, A.y, 0);
}
_ = Zu.neo(g.x, g.y), o.subMul(l, _), n -= u * (Zu.crossVec2Vec2(d, _) + g.z), i.addMul(c, _), 
r += h * (Zu.crossVec2Vec2(p, _) + g.z);
}
return this.m_bodyA.c_position.c = o, this.m_bodyA.c_position.a = n, this.m_bodyB.c_position.c = i, 
this.m_bodyB.c_position.a = r, t <= ih.linearSlop && e <= ih.angularSlop;
}, e.TYPE = "weld-joint", e;
}(Rd), H_ = Math.abs, U_ = Math.PI, Y_ = {
enableMotor: !1,
maxMotorTorque: 0,
motorSpeed: 0,
frequencyHz: 2,
dampingRatio: .7
}, X_ = function(t) {
function e(o, n, i, r, s) {
var a = this;
return a instanceof e ? (o = Gu(o, Y_), n = (a = t.call(this, o, n, i) || this).m_bodyA, 
i = a.m_bodyB, a.m_ax = Zu.zero(), a.m_ay = Zu.zero(), a.m_type = e.TYPE, a.m_localAnchorA = Zu.clone(r ? n.getLocalPoint(r) : o.localAnchorA || Zu.zero()), 
a.m_localAnchorB = Zu.clone(r ? i.getLocalPoint(r) : o.localAnchorB || Zu.zero()), 
Zu.isValid(s) ? a.m_localXAxisA = n.getLocalVector(s) : Zu.isValid(o.localAxisA) ? a.m_localXAxisA = Zu.clone(o.localAxisA) : Zu.isValid(o.localAxis) ? a.m_localXAxisA = Zu.clone(o.localAxis) : a.m_localXAxisA = Zu.neo(1, 0), 
a.m_localYAxisA = Zu.crossNumVec2(1, a.m_localXAxisA), a.m_mass = 0, a.m_impulse = 0, 
a.m_motorMass = 0, a.m_motorImpulse = 0, a.m_springMass = 0, a.m_springImpulse = 0, 
a.m_maxMotorTorque = o.maxMotorTorque, a.m_motorSpeed = o.motorSpeed, a.m_enableMotor = o.enableMotor, 
a.m_frequencyHz = o.frequencyHz, a.m_dampingRatio = o.dampingRatio, a.m_bias = 0, 
a.m_gamma = 0, a) : new e(o, n, i, r, s);
}
return Ou(e, t), e.prototype._serialize = function() {
return {
type: this.m_type,
bodyA: this.m_bodyA,
bodyB: this.m_bodyB,
collideConnected: this.m_collideConnected,
enableMotor: this.m_enableMotor,
maxMotorTorque: this.m_maxMotorTorque,
motorSpeed: this.m_motorSpeed,
frequencyHz: this.m_frequencyHz,
dampingRatio: this.m_dampingRatio,
localAnchorA: this.m_localAnchorA,
localAnchorB: this.m_localAnchorB,
localAxisA: this.m_localXAxisA
};
}, e._deserialize = function(t, o, n) {
return (t = ku({}, t)).bodyA = n(wd, t.bodyA, o), t.bodyB = n(wd, t.bodyB, o), new e(t);
}, e.prototype._reset = function(t) {
t.anchorA ? this.m_localAnchorA.setVec2(this.m_bodyA.getLocalPoint(t.anchorA)) : t.localAnchorA && this.m_localAnchorA.setVec2(t.localAnchorA), 
t.anchorB ? this.m_localAnchorB.setVec2(this.m_bodyB.getLocalPoint(t.anchorB)) : t.localAnchorB && this.m_localAnchorB.setVec2(t.localAnchorB), 
t.localAxisA && (this.m_localXAxisA.setVec2(t.localAxisA), this.m_localYAxisA.setVec2(Zu.crossNumVec2(1, t.localAxisA))), 
void 0 !== t.enableMotor && (this.m_enableMotor = t.enableMotor), Number.isFinite(t.maxMotorTorque) && (this.m_maxMotorTorque = t.maxMotorTorque), 
Number.isFinite(t.motorSpeed) && (this.m_motorSpeed = t.motorSpeed), Number.isFinite(t.frequencyHz) && (this.m_frequencyHz = t.frequencyHz), 
Number.isFinite(t.dampingRatio) && (this.m_dampingRatio = t.dampingRatio);
}, e.prototype.getLocalAnchorA = function() {
return this.m_localAnchorA;
}, e.prototype.getLocalAnchorB = function() {
return this.m_localAnchorB;
}, e.prototype.getLocalAxisA = function() {
return this.m_localXAxisA;
}, e.prototype.getJointTranslation = function() {
var t = this.m_bodyA, e = this.m_bodyB, o = t.getWorldPoint(this.m_localAnchorA), n = e.getWorldPoint(this.m_localAnchorB), i = Zu.sub(n, o), r = t.getWorldVector(this.m_localXAxisA);
return Zu.dot(i, r);
}, e.prototype.getJointSpeed = function() {
var t = this.m_bodyA.m_angularVelocity;
return this.m_bodyB.m_angularVelocity - t;
}, e.prototype.isMotorEnabled = function() {
return this.m_enableMotor;
}, e.prototype.enableMotor = function(t) {
t != this.m_enableMotor && (this.m_bodyA.setAwake(!0), this.m_bodyB.setAwake(!0), 
this.m_enableMotor = t);
}, e.prototype.setMotorSpeed = function(t) {
t != this.m_motorSpeed && (this.m_bodyA.setAwake(!0), this.m_bodyB.setAwake(!0), 
this.m_motorSpeed = t);
}, e.prototype.getMotorSpeed = function() {
return this.m_motorSpeed;
}, e.prototype.setMaxMotorTorque = function(t) {
t != this.m_maxMotorTorque && (this.m_bodyA.setAwake(!0), this.m_bodyB.setAwake(!0), 
this.m_maxMotorTorque = t);
}, e.prototype.getMaxMotorTorque = function() {
return this.m_maxMotorTorque;
}, e.prototype.getMotorTorque = function(t) {
return t * this.m_motorImpulse;
}, e.prototype.setSpringFrequencyHz = function(t) {
this.m_frequencyHz = t;
}, e.prototype.getSpringFrequencyHz = function() {
return this.m_frequencyHz;
}, e.prototype.setSpringDampingRatio = function(t) {
this.m_dampingRatio = t;
}, e.prototype.getSpringDampingRatio = function() {
return this.m_dampingRatio;
}, e.prototype.getAnchorA = function() {
return this.m_bodyA.getWorldPoint(this.m_localAnchorA);
}, e.prototype.getAnchorB = function() {
return this.m_bodyB.getWorldPoint(this.m_localAnchorB);
}, e.prototype.getReactionForce = function(t) {
return Zu.combine(this.m_impulse, this.m_ay, this.m_springImpulse, this.m_ax).mul(t);
}, e.prototype.getReactionTorque = function(t) {
return t * this.m_motorImpulse;
}, e.prototype.initVelocityConstraints = function(t) {
this.m_localCenterA = this.m_bodyA.m_sweep.localCenter, this.m_localCenterB = this.m_bodyB.m_sweep.localCenter, 
this.m_invMassA = this.m_bodyA.m_invMass, this.m_invMassB = this.m_bodyB.m_invMass, 
this.m_invIA = this.m_bodyA.m_invI, this.m_invIB = this.m_bodyB.m_invI;
var e = this.m_invMassA, o = this.m_invMassB, n = this.m_invIA, i = this.m_invIB, r = this.m_bodyA.c_position.c, s = this.m_bodyA.c_position.a, a = this.m_bodyA.c_velocity.v, l = this.m_bodyA.c_velocity.w, c = this.m_bodyB.c_position.c, u = this.m_bodyB.c_position.a, h = this.m_bodyB.c_velocity.v, d = this.m_bodyB.c_velocity.w, p = Kh.neo(s), m = Kh.neo(u), _ = Kh.mulVec2(p, Zu.sub(this.m_localAnchorA, this.m_localCenterA)), f = Kh.mulVec2(m, Zu.sub(this.m_localAnchorB, this.m_localCenterB)), y = Zu.zero();
if (y.addCombine(1, c, 1, f), y.subCombine(1, r, 1, _), this.m_ay = Kh.mulVec2(p, this.m_localYAxisA), 
this.m_sAy = Zu.crossVec2Vec2(Zu.add(y, _), this.m_ay), this.m_sBy = Zu.crossVec2Vec2(f, this.m_ay), 
this.m_mass = e + o + n * this.m_sAy * this.m_sAy + i * this.m_sBy * this.m_sBy, 
this.m_mass > 0 && (this.m_mass = 1 / this.m_mass), this.m_springMass = 0, this.m_bias = 0, 
this.m_gamma = 0, this.m_frequencyHz > 0) {
this.m_ax = Kh.mulVec2(p, this.m_localXAxisA), this.m_sAx = Zu.crossVec2Vec2(Zu.add(y, _), this.m_ax), 
this.m_sBx = Zu.crossVec2Vec2(f, this.m_ax);
var v = e + o + n * this.m_sAx * this.m_sAx + i * this.m_sBx * this.m_sBx;
if (v > 0) {
this.m_springMass = 1 / v;
var g = Zu.dot(y, this.m_ax), A = 2 * U_ * this.m_frequencyHz, x = 2 * this.m_springMass * this.m_dampingRatio * A, b = this.m_springMass * A * A, C = t.dt;
this.m_gamma = C * (x + C * b), this.m_gamma > 0 && (this.m_gamma = 1 / this.m_gamma), 
this.m_bias = g * C * b * this.m_gamma, this.m_springMass = v + this.m_gamma, this.m_springMass > 0 && (this.m_springMass = 1 / this.m_springMass);
}
} else this.m_springImpulse = 0;
if (this.m_enableMotor ? (this.m_motorMass = n + i, this.m_motorMass > 0 && (this.m_motorMass = 1 / this.m_motorMass)) : (this.m_motorMass = 0, 
this.m_motorImpulse = 0), t.warmStarting) {
this.m_impulse *= t.dtRatio, this.m_springImpulse *= t.dtRatio, this.m_motorImpulse *= t.dtRatio;
var w = Zu.combine(this.m_impulse, this.m_ay, this.m_springImpulse, this.m_ax), S = this.m_impulse * this.m_sAy + this.m_springImpulse * this.m_sAx + this.m_motorImpulse, R = this.m_impulse * this.m_sBy + this.m_springImpulse * this.m_sBx + this.m_motorImpulse;
a.subMul(this.m_invMassA, w), l -= this.m_invIA * S, h.addMul(this.m_invMassB, w), 
d += this.m_invIB * R;
} else this.m_impulse = 0, this.m_springImpulse = 0, this.m_motorImpulse = 0;
this.m_bodyA.c_velocity.v.setVec2(a), this.m_bodyA.c_velocity.w = l, this.m_bodyB.c_velocity.v.setVec2(h), 
this.m_bodyB.c_velocity.w = d;
}, e.prototype.solveVelocityConstraints = function(t) {
var e = this.m_invMassA, o = this.m_invMassB, n = this.m_invIA, i = this.m_invIB, r = this.m_bodyA.c_velocity.v, s = this.m_bodyA.c_velocity.w, a = this.m_bodyB.c_velocity.v, l = this.m_bodyB.c_velocity.w, c = Zu.dot(this.m_ax, a) - Zu.dot(this.m_ax, r) + this.m_sBx * l - this.m_sAx * s, u = -this.m_springMass * (c + this.m_bias + this.m_gamma * this.m_springImpulse);
this.m_springImpulse += u;
var h = Zu.mulNumVec2(u, this.m_ax), d = u * this.m_sAx, p = u * this.m_sBx;
r.subMul(e, h), s -= n * d, a.addMul(o, h), c = (l += i * p) - s - this.m_motorSpeed, 
u = -this.m_motorMass * c;
var m = this.m_motorImpulse, _ = t.dt * this.m_maxMotorTorque;
this.m_motorImpulse = Uu(this.m_motorImpulse + u, -_, _), s -= n * (u = this.m_motorImpulse - m), 
l += i * u, c = Zu.dot(this.m_ay, a) - Zu.dot(this.m_ay, r) + this.m_sBy * l - this.m_sAy * s, 
u = -this.m_mass * c, this.m_impulse += u, h = Zu.mulNumVec2(u, this.m_ay), d = u * this.m_sAy, 
p = u * this.m_sBy, r.subMul(e, h), s -= n * d, a.addMul(o, h), l += i * p, this.m_bodyA.c_velocity.v.setVec2(r), 
this.m_bodyA.c_velocity.w = s, this.m_bodyB.c_velocity.v.setVec2(a), this.m_bodyB.c_velocity.w = l;
}, e.prototype.solvePositionConstraints = function() {
var t = this.m_bodyA.c_position.c, e = this.m_bodyA.c_position.a, o = this.m_bodyB.c_position.c, n = this.m_bodyB.c_position.a, i = Kh.neo(e), r = Kh.neo(n), s = Kh.mulVec2(i, Zu.sub(this.m_localAnchorA, this.m_localCenterA)), a = Kh.mulVec2(r, Zu.sub(this.m_localAnchorB, this.m_localCenterB)), l = Zu.zero();
l.addCombine(1, o, 1, a), l.subCombine(1, t, 1, s);
var c = Kh.mulVec2(i, this.m_localYAxisA), u = Zu.crossVec2Vec2(Zu.add(l, s), c), h = Zu.crossVec2Vec2(a, c), d = Zu.dot(l, c), p = this.m_invMassA + this.m_invMassB + this.m_invIA * this.m_sAy * this.m_sAy + this.m_invIB * this.m_sBy * this.m_sBy, m = 0 != p ? -d / p : 0, _ = Zu.mulNumVec2(m, c), f = m * u, y = m * h;
return t.subMul(this.m_invMassA, _), e -= this.m_invIA * f, o.addMul(this.m_invMassB, _), 
n += this.m_invIB * y, this.m_bodyA.c_position.c.setVec2(t), this.m_bodyA.c_position.a = e, 
this.m_bodyB.c_position.c.setVec2(o), this.m_bodyB.c_position.a = n, H_(d) <= ih.linearSlop;
}, e.TYPE = "wheel-joint", e;
}(Rd), J_ = 0, Q_ = {
World: qm,
Body: wd,
Joint: Rd,
Fixture: md,
Shape: ld
}, K_ = {
Vec2: Zu,
Vec3: Hm,
World: qm,
Body: wd,
Joint: Rd,
Fixture: md,
Shape: ld
}, Z_ = ((V_ = {})[wd.STATIC] = wd, V_[wd.DYNAMIC] = wd, V_[wd.KINEMATIC] = wd, 
V_[Km.TYPE] = Km, V_[s_.TYPE] = s_, V_[Xm.TYPE] = Xm, V_[u_.TYPE] = u_, V_[m_.TYPE] = m_, 
V_[f_.TYPE] = f_, V_[T_.TYPE] = T_, V_[M_.TYPE] = M_, V_[N_.TYPE] = N_, V_[R_.TYPE] = R_, 
V_[L_.TYPE] = L_, V_[A_.TYPE] = A_, V_[k_.TYPE] = k_, V_[q_.TYPE] = q_, V_[X_.TYPE] = X_, 
V_), $_ = {
rootClass: qm,
preSerialize: function(t) {
return t;
},
postSerialize: function(t) {
return t;
},
preDeserialize: function(t) {
return t;
},
postDeserialize: function(t) {
return t;
}
}, tf = function(t) {
var e = this;
this.toJson = function(t) {
var o = e.options.preSerialize, n = e.options.postSerialize, i = [], r = [ t ], s = {};
function a(t, e) {
if (t.__sid = t.__sid || ++J_, !s[t.__sid]) {
r.push(t);
var o = {
refIndex: i.length + r.length,
refType: e
};
s[t.__sid] = o;
}
return s[t.__sid];
}
function l(t, e) {
if (void 0 === e && (e = !1), "object" != typeof t || null === t) return t;
if ("function" == typeof t._serialize) {
if (!e) for (var i in Q_) if (t instanceof Q_[i]) return a(t, i);
s = (r = o(r = t))._serialize(), t = n(s, r);
}
var r, s;
if (Array.isArray(t)) {
for (var c = [], u = 0; u < t.length; u++) c[u] = l(t[u]);
t = c;
} else {
for (var u in c = {}, t) t.hasOwnProperty(u) && (c[u] = l(t[u]));
t = c;
}
return t;
}
for (;r.length; ) {
var c = l(r.shift(), !0);
i.push(c);
}
return i;
}, this.fromJson = function(t) {
var o = e.options.preDeserialize, n = e.options.postDeserialize, i = e.options.rootClass, r = {};
function s(t, e, i) {
if (t && t._deserialize || (t = Z_[e.type]), t && t._deserialize) {
e = o(e);
var r = (0, t._deserialize)(e, i, a);
return n(r, e);
}
}
function a(e, o, n) {
if (!o.refIndex || !o.refType) return s(e, o, n);
var i = o;
K_[i.refType] && (e = K_[i.refType]);
var a = i.refIndex;
if (!r[a]) {
var l = s(e, t[a], n);
r[a] = l;
}
return r[a];
}
return s(i, t[0], null);
}, this.options = ku(ku({}, $_), t);
}, ef = new tf({
rootClass: qm
});
tf.fromJson = ef.fromJson, tf.toJson = ef.toJson, function() {
function t() {}
t.mount = function() {
throw new Error("Not implemented");
}, t.start = function(e) {
var o = t.mount();
return o.start(e), o;
};
}();
var of = function(t) {
function e(o, n, i, r) {
var s = this;
return s instanceof e ? ((s = t.call(this) || this)._setAsBox(o, n, i, r), s) : new e(o, n, i, r);
}
return Ou(e, t), e.TYPE = "polygon", e;
}(s_);
zm.addType(u_.TYPE, u_.TYPE, function(t, e, o, n, i, r) {
sf(t, o.getShape(), e, r.getShape(), i);
});
var nf = vh(0, 0), rf = vh(0, 0), sf = function(t, e, o, n, i) {
t.pointCount = 0, qh(nf, o, e.m_p), qh(rf, i, n.m_p);
var r = Oh(rf, nf), s = e.m_radius + n.m_radius;
r > s * s || (t.type = Pp.e_circles, Ah(t.localPoint, e.m_p), xh(t.localNormal), 
t.pointCount = 1, Ah(t.points[0].localPoint, n.m_p), t.points[0].id.setFeatures(0, Lp.e_vertex, 0, Lp.e_vertex));
};
zm.addType(Xm.TYPE, u_.TYPE, function(t, e, o, n, i, r) {
var s = o.getShape(), a = r.getShape();
pf(t, s, e, a, i);
}), zm.addType(Km.TYPE, u_.TYPE, function(t, e, o, n, i, r) {
var s = o.getShape(), a = new Xm();
s.getChildEdge(a, n);
var l = a, c = r.getShape();
pf(t, l, e, c, i);
});
var af = vh(0, 0), lf = vh(0, 0), cf = vh(0, 0), uf = vh(0, 0), hf = vh(0, 0), df = vh(0, 0), pf = function(t, e, o, n, i) {
t.pointCount = 0, Uh(uf, i, o, n.m_p);
var r = e.m_vertex1, s = e.m_vertex2;
Sh(af, s, r);
var a = Lh(af, s) - Lh(af, uf), l = Lh(af, uf) - Lh(af, r), c = e.m_radius + n.m_radius;
if (l <= 0) {
if (Ah(hf, r), Oh(uf, r) > c * c) return;
if (e.m_hasVertex0) {
var u = e.m_vertex0, h = r;
if (Sh(lf, h, u), Lh(lf, h) - Lh(lf, uf) > 0) return;
}
return t.type = Pp.e_circles, xh(t.localNormal), Ah(t.localPoint, hf), t.pointCount = 1, 
Ah(t.points[0].localPoint, n.m_p), void t.points[0].id.setFeatures(0, Lp.e_vertex, 0, Lp.e_vertex);
}
if (a <= 0) {
if (Ah(hf, s), Oh(uf, hf) > c * c) return;
if (e.m_hasVertex3) {
var d = e.m_vertex3, p = s;
if (Sh(cf, d, p), Lh(cf, uf) - Lh(cf, p) > 0) return;
}
return t.type = Pp.e_circles, xh(t.localNormal), Ah(t.localPoint, hf), t.pointCount = 1, 
Ah(t.points[0].localPoint, n.m_p), void t.points[0].id.setFeatures(1, Lp.e_vertex, 0, Lp.e_vertex);
}
var m = Wh(af);
Mh(hf, a / m, r, l / m, s), Oh(uf, hf) > c * c || (Ph(df, 1, af), Lh(df, uf) - Lh(df, r) < 0 && bh(df), 
Dh(df), t.type = Pp.e_faceA, Ah(t.localNormal, df), Ah(t.localPoint, r), t.pointCount = 1, 
Ah(t.points[0].localPoint, n.m_p), t.points[0].id.setFeatures(0, Lp.e_face, 0, Lp.e_vertex));
}, mf = [ new Qp(), new Qp() ], _f = [ new Qp(), new Qp() ], ff = [ new Qp(), new Qp() ], yf = vh(0, 0), vf = vh(0, 0), gf = vh(0, 0), Af = zh(0, 0, 0), xf = vh(0, 0), bf = vh(0, 0), Cf = vh(0, 0), wf = vh(0, 0), Sf = vh(0, 0), Rf = vh(0, 0), Bf = vh(0, 0), Tf = vh(0, 0);
function Ff(t, e, o, n, i) {
var r = t.m_count, s = o.m_count, a = t.m_normals, l = t.m_vertices, c = o.m_vertices;
Yh(Af, n, e);
for (var u = 0, h = -1 / 0, d = 0; d < r; ++d) {
kh(gf, Af.q, a[d]), qh(vf, Af, l[d]);
for (var p = 1 / 0, m = 0; m < s; ++m) {
var _ = Lh(gf, c[m]) - Lh(gf, vf);
_ < p && (p = _);
}
p > h && (h = p, u = d);
}
i.maxSeparation = h, i.bestIndex = u;
}
zm.addType(s_.TYPE, s_.TYPE, function(t, e, o, n, i, r) {
If(t, o.getShape(), e, r.getShape(), i);
});
var Mf = {
maxSeparation: 0,
bestIndex: 0
}, If = function(t, e, o, n, i) {
t.pointCount = 0;
var r = e.m_radius + n.m_radius;
Ff(e, o, n, i, Mf);
var s = Mf.bestIndex, a = Mf.maxSeparation;
if (!(a > r)) {
Ff(n, i, e, o, Mf);
var l = Mf.bestIndex, c = Mf.maxSeparation;
if (!(c > r)) {
var u, h, d, p, m, _;
c > a + .1 * ih.linearSlop ? (u = n, h = e, d = i, p = o, m = l, t.type = Pp.e_faceB, 
_ = !0) : (u = e, h = n, d = o, p = i, m = s, t.type = Pp.e_faceA, _ = !1), mf[0].recycle(), 
mf[1].recycle(), function(t, e, o, n, i, r) {
var s, a, l, c, u, h, d, p, m = e.m_normals, _ = i.m_count, f = i.m_vertices, y = i.m_normals;
s = Tf, a = r.q, l = o.q, c = m[n], u = a.c * c.x + a.s * c.y, h = -a.s * c.x + a.c * c.y, 
d = l.c * u - l.s * h, p = l.s * u + l.c * h, s.x = d, s.y = p;
for (var v = 0, g = 1 / 0, A = 0; A < _; ++A) {
var x = Lh(Tf, y[A]);
x < g && (g = x, v = A);
}
var b = v, C = b + 1 < _ ? b + 1 : 0;
qh(t[0].v, r, f[b]), t[0].id.setFeatures(n, Lp.e_face, b, Lp.e_vertex), qh(t[1].v, r, f[C]), 
t[1].id.setFeatures(n, Lp.e_face, C, Lp.e_vertex);
}(mf, u, d, m, h, p);
var f = u.m_count, y = u.m_vertices, v = m, g = m + 1 < f ? m + 1 : 0;
Ah(xf, y[v]), Ah(bf, y[g]), Sh(Cf, bf, xf), Dh(Cf), Nh(wf, Cf, 1), Mh(Sf, .5, xf, .5, bf), 
kh(Rf, d.q, Cf), Nh(Bf, Rf, 1), qh(xf, d, xf), qh(bf, d, bf);
var A = Lh(Bf, xf), x = -Lh(Rf, xf) + r, b = Lh(Rf, bf) + r;
if (!(_f[0].recycle(), _f[1].recycle(), ff[0].recycle(), ff[1].recycle(), gh(yf, -Rf.x, -Rf.y), 
om(_f, mf, yf, x, v) < 2 || (gh(yf, Rf.x, Rf.y), om(ff, _f, yf, b, g) < 2))) {
Ah(t.localNormal, wf), Ah(t.localPoint, Sf);
for (var C = 0, w = 0; w < ff.length; ++w) if (Lh(Bf, ff[w].v) - A <= r) {
var S = t.points[C];
Hh(S.localPoint, p, ff[w].v), S.id.set(ff[w].id), _ && S.id.swapFeatures(), ++C;
}
t.pointCount = C;
}
}
}
};
zm.addType(s_.TYPE, u_.TYPE, function(t, e, o, n, i, r) {
Pf(t, o.getShape(), e, r.getShape(), i);
});
var Df = vh(0, 0), Nf = vh(0, 0), Pf = function(t, e, o, n, i) {
t.pointCount = 0, Uh(Df, i, o, n.m_p);
for (var r = 0, s = -1 / 0, a = e.m_radius + n.m_radius, l = e.m_count, c = e.m_vertices, u = e.m_normals, h = 0; h < l; ++h) {
var d = Lh(u[h], Df) - Lh(u[h], c[h]);
if (d > a) return;
d > s && (s = d, r = h);
}
var p = r, m = p + 1 < l ? p + 1 : 0, _ = c[p], f = c[m];
if (s < ju) return t.pointCount = 1, t.type = Pp.e_faceA, Ah(t.localNormal, u[r]), 
Mh(t.localPoint, .5, _, .5, f), Ah(t.points[0].localPoint, n.m_p), void t.points[0].id.setFeatures(0, Lp.e_vertex, 0, Lp.e_vertex);
var y = Lh(Df, f) - Lh(Df, _) - Lh(_, f) + Lh(_, _), v = Lh(Df, _) - Lh(Df, f) - Lh(f, _) + Lh(f, f);
if (y <= 0) {
if (Oh(Df, _) > a * a) return;
t.pointCount = 1, t.type = Pp.e_faceA, Sh(t.localNormal, Df, _), Dh(t.localNormal), 
Ah(t.localPoint, _), Ah(t.points[0].localPoint, n.m_p), t.points[0].id.setFeatures(0, Lp.e_vertex, 0, Lp.e_vertex);
} else if (v <= 0) {
if (Oh(Df, f) > a * a) return;
t.pointCount = 1, t.type = Pp.e_faceA, Sh(t.localNormal, Df, f), Dh(t.localNormal), 
Ah(t.localPoint, f), Ah(t.points[0].localPoint, n.m_p), t.points[0].id.setFeatures(0, Lp.e_vertex, 0, Lp.e_vertex);
} else {
if (Mh(Nf, .5, _, .5, f), Lh(Df, u[p]) - Lh(Nf, u[p]) > a) return;
t.pointCount = 1, t.type = Pp.e_faceA, Ah(t.localNormal, u[p]), Ah(t.localPoint, Nf), 
Ah(t.points[0].localPoint, n.m_p), t.points[0].id.setFeatures(0, Lp.e_vertex, 0, Lp.e_vertex);
}
}, Ef = Math.min;
zm.addType(Xm.TYPE, s_.TYPE, function(t, e, o, n, i, r) {
cy(t, o.getShape(), e, r.getShape(), i);
}), zm.addType(Km.TYPE, s_.TYPE, function(t, e, o, n, i, r) {
o.getShape().getChildEdge(kf, n), cy(t, kf, e, r.getShape(), i);
});
var Lf, Wf, Vf, Of, kf = new Xm();
(Wf = Lf || (Lf = {}))[Wf.e_unknown = -1] = "e_unknown", Wf[Wf.e_edgeA = 1] = "e_edgeA", 
Wf[Wf.e_edgeB = 2] = "e_edgeB", (Of = Vf || (Vf = {}))[Of.e_isolated = 0] = "e_isolated", 
Of[Of.e_concave = 1] = "e_concave", Of[Of.e_convex = 2] = "e_convex";
var Gf = function() {}, zf = function() {
function t() {
this.v1 = vh(0, 0), this.v2 = vh(0, 0), this.normal = vh(0, 0), this.sideNormal1 = vh(0, 0), 
this.sideNormal2 = vh(0, 0);
}
return t.prototype.recycle = function() {
xh(this.v1), xh(this.v2), xh(this.normal), xh(this.sideNormal1), xh(this.sideNormal2);
}, t;
}(), jf = [ new Qp(), new Qp() ], qf = [ new Qp(), new Qp() ], Hf = [ new Qp(), new Qp() ], Uf = new Gf(), Yf = new Gf(), Xf = new function() {
this.vertices = [], this.normals = [], this.count = 0;
for (var t = 0; t < ih.maxPolygonVertices; t++) this.vertices.push(vh(0, 0)), this.normals.push(vh(0, 0));
}(), Jf = new zf(), Qf = vh(0, 0), Kf = vh(0, 0), Zf = vh(0, 0), $f = vh(0, 0), ty = zh(0, 0, 0), ey = vh(0, 0), oy = vh(0, 0), ny = vh(0, 0), iy = vh(0, 0), ry = vh(0, 0), sy = vh(0, 0), ay = vh(0, 0), ly = vh(0, 0), cy = function(t, e, o, n, i) {
Yh(ty, o, i), qh(Qf, ty, n.m_centroid);
var r = e.m_vertex0, s = e.m_vertex1, a = e.m_vertex2, l = e.m_vertex3, c = e.m_hasVertex0, u = e.m_hasVertex3;
Sh(Zf, a, s), Dh(Zf), gh(ny, Zf.y, -Zf.x);
var h, d = Lh(ny, Qf) - Lh(ny, s), p = 0, m = 0, _ = !1, f = !1;
xh(oy), xh(iy), c && (Sh(Kf, s, r), Dh(Kf), gh(oy, Kf.y, -Kf.x), _ = Eh(Kf, Zf) >= 0, 
p = Zu.dot(oy, Qf) - Zu.dot(oy, r)), u && (Sh($f, l, a), Dh($f), gh(iy, $f.y, -$f.x), 
f = Zu.crossVec2Vec2(Zf, $f) > 0, m = Zu.dot(iy, Qf) - Zu.dot(iy, a)), xh(ey), xh(ry), 
xh(sy), c && u ? _ && f ? (h = p >= 0 || d >= 0 || m >= 0) ? (Ah(ey, ny), Ah(ry, oy), 
Ah(sy, iy)) : (Bh(ey, -1, ny), Bh(ry, -1, ny), Bh(sy, -1, ny)) : _ ? (h = p >= 0 || d >= 0 && m >= 0) ? (Ah(ey, ny), 
Ah(ry, oy), Ah(sy, ny)) : (Bh(ey, -1, ny), Bh(ry, -1, iy), Bh(sy, -1, ny)) : f ? (h = m >= 0 || p >= 0 && d >= 0) ? (Ah(ey, ny), 
Ah(ry, ny), Ah(sy, iy)) : (Bh(ey, -1, ny), Bh(ry, -1, ny), Bh(sy, -1, oy)) : (h = p >= 0 && d >= 0 && m >= 0) ? (Ah(ey, ny), 
Ah(ry, ny), Ah(sy, ny)) : (Bh(ey, -1, ny), Bh(ry, -1, iy), Bh(sy, -1, oy)) : c ? _ ? (h = p >= 0 || d >= 0) ? (Ah(ey, ny), 
Ah(ry, oy), Bh(sy, -1, ny)) : (Bh(ey, -1, ny), Ah(ry, ny), Bh(sy, -1, ny)) : (h = p >= 0 && d >= 0) ? (Ah(ey, ny), 
Ah(ry, ny), Bh(sy, -1, ny)) : (Bh(ey, -1, ny), Ah(ry, ny), Bh(sy, -1, oy)) : u ? f ? (h = d >= 0 || m >= 0) ? (Ah(ey, ny), 
Bh(ry, -1, ny), Ah(sy, iy)) : (Bh(ey, -1, ny), Bh(ry, -1, ny), Ah(sy, ny)) : (h = d >= 0 && m >= 0) ? (Ah(ey, ny), 
Bh(ry, -1, ny), Ah(sy, ny)) : (Bh(ey, -1, ny), Bh(ry, -1, iy), Ah(sy, ny)) : (h = d >= 0) ? (Ah(ey, ny), 
Bh(ry, -1, ny), Bh(sy, -1, ny)) : (Bh(ey, -1, ny), Ah(ry, ny), Ah(sy, ny)), Xf.count = n.m_count;
for (var y = 0; y < n.m_count; ++y) qh(Xf.vertices[y], ty, n.m_vertices[y]), kh(Xf.normals[y], ty.q, n.m_normals[y]);
var v = n.m_radius + e.m_radius;
for (t.pointCount = 0, Uf.type = Lf.e_edgeA, Uf.index = h ? 0 : 1, Uf.separation = 1 / 0, 
y = 0; y < Xf.count; ++y) {
var g = Xf.vertices[y];
(A = Lh(ey, g) - Lh(ey, s)) < Uf.separation && (Uf.separation = A);
}
if (Uf.type != Lf.e_unknown && !(Uf.separation > v)) {
for (Yf.type = Lf.e_unknown, Yf.index = -1, Yf.separation = -1 / 0, gh(ay, -ey.y, ey.x), 
y = 0; y < Xf.count; ++y) {
Bh(ly, -1, Xf.normals[y]);
var A, x = Lh(ly, Xf.vertices[y]) - Lh(ly, s), b = Lh(ly, Xf.vertices[y]) - Lh(ly, a);
if ((A = Ef(x, b)) > v) {
Yf.type = Lf.e_edgeB, Yf.index = y, Yf.separation = A;
break;
}
if (Lh(ly, ay) >= 0) {
if (Lh(ly, ey) - Lh(sy, ey) < -ih.angularSlop) continue;
} else if (Lh(ly, ey) - Lh(ry, ey) < -ih.angularSlop) continue;
A > Yf.separation && (Yf.type = Lf.e_edgeB, Yf.index = y, Yf.separation = A);
}
if (!(Yf.type != Lf.e_unknown && Yf.separation > v)) {
var C;
if (C = Yf.type == Lf.e_unknown ? Uf : Yf.separation > .98 * Uf.separation + .001 ? Yf : Uf, 
Hf[0].recycle(), Hf[1].recycle(), C.type == Lf.e_edgeA) {
t.type = Pp.e_faceA;
var w = 0, S = Lh(ey, Xf.normals[0]);
for (y = 1; y < Xf.count; ++y) {
var R = Lh(ey, Xf.normals[y]);
R < S && (S = R, w = y);
}
var B = w, T = B + 1 < Xf.count ? B + 1 : 0;
Ah(Hf[0].v, Xf.vertices[B]), Hf[0].id.setFeatures(0, Lp.e_face, B, Lp.e_vertex), 
Ah(Hf[1].v, Xf.vertices[T]), Hf[1].id.setFeatures(0, Lp.e_face, T, Lp.e_vertex), 
h ? (Jf.i1 = 0, Jf.i2 = 1, Ah(Jf.v1, s), Ah(Jf.v2, a), Ah(Jf.normal, ny)) : (Jf.i1 = 1, 
Jf.i2 = 0, Ah(Jf.v1, a), Ah(Jf.v2, s), Bh(Jf.normal, -1, ny));
} else t.type = Pp.e_faceB, Ah(Hf[0].v, s), Hf[0].id.setFeatures(0, Lp.e_vertex, C.index, Lp.e_face), 
Ah(Hf[1].v, a), Hf[1].id.setFeatures(0, Lp.e_vertex, C.index, Lp.e_face), Jf.i1 = C.index, 
Jf.i2 = Jf.i1 + 1 < Xf.count ? Jf.i1 + 1 : 0, Ah(Jf.v1, Xf.vertices[Jf.i1]), Ah(Jf.v2, Xf.vertices[Jf.i2]), 
Ah(Jf.normal, Xf.normals[Jf.i1]);
if (!(gh(Jf.sideNormal1, Jf.normal.y, -Jf.normal.x), gh(Jf.sideNormal2, -Jf.sideNormal1.x, -Jf.sideNormal1.y), 
Jf.sideOffset1 = Lh(Jf.sideNormal1, Jf.v1), Jf.sideOffset2 = Lh(Jf.sideNormal2, Jf.v2), 
jf[0].recycle(), jf[1].recycle(), qf[0].recycle(), qf[1].recycle(), om(jf, Hf, Jf.sideNormal1, Jf.sideOffset1, Jf.i1) < ih.maxManifoldPoints || om(qf, jf, Jf.sideNormal2, Jf.sideOffset2, Jf.i2) < ih.maxManifoldPoints)) {
C.type == Lf.e_edgeA ? (Ah(t.localNormal, Jf.normal), Ah(t.localPoint, Jf.v1)) : (Ah(t.localNormal, n.m_normals[Jf.i1]), 
Ah(t.localPoint, n.m_vertices[Jf.i1]));
var F = 0;
for (y = 0; y < ih.maxManifoldPoints; ++y) if (Lh(Jf.normal, qf[y].v) - Lh(Jf.normal, Jf.v1) <= v) {
var M = t.points[F];
C.type == Lf.e_edgeA ? (Hh(M.localPoint, ty, qf[y].v), M.id.set(qf[y].id)) : (Ah(M.localPoint, qf[y].v), 
M.id.set(qf[y].id), M.id.swapFeatures()), ++F;
}
t.pointCount = F;
}
}
}
};
!function() {
function t(t, e) {
this._refMap = {}, this._map = {}, this._xmap = {}, this._data = [], this._entered = [], 
this._exited = [], this._key = t, this._listener = e;
}
t.prototype.update = function(t) {
if (!Array.isArray(t)) throw "Invalid data: " + t;
this._entered.length = 0, this._exited.length = 0, this._data.length = t.length;
for (var e = 0; e < t.length; e++) if ("object" == typeof t[e] && null !== t[e]) {
var o = t[e], n = this._key(o);
this._map[n] ? delete this._map[n] : this._entered.push(o), this._data[e] = o, this._xmap[n] = o;
}
for (var n in this._map) this._exited.push(this._map[n]), delete this._map[n];
var i = this._map;
for (this._map = this._xmap, this._xmap = i, e = 0; e < this._exited.length; e++) {
o = this._exited[e];
var r = this._key(o), s = this._refMap[r];
this._listener.exit(o, s), delete this._refMap[r];
}
for (e = 0; e < this._entered.length; e++) o = this._entered[e], r = this._key(o), 
(s = this._listener.enter(o)) && (this._refMap[r] = s);
for (e = 0; e < this._data.length; e++) "object" == typeof t[e] && null !== t[e] && (o = this._data[e], 
r = this._key(o), s = this._refMap[r], this._listener.update(o, s));
this._entered.length = 0, this._exited.length = 0, this._data.length = 0;
}, t.prototype.ref = function(t) {
return this._refMap[this._key(t)];
};
}(), function(e) {
function n() {
var t = e.apply(this, p([], d(arguments), !1)) || this;
return t.physicsWorld = null, t.ppm = 32, t._bodyMap = {}, t._dirtyBodies = new Set(), 
t._dirtyVelocities = new Set(), t._dirtyFixtures = new Set(), t._contactManifold = new tm(), 
t;
}
o(n, e), n.prototype.getBody = function(t) {
var e;
return null !== (e = this._bodyMap[t]) && void 0 !== e ? e : null;
}, n.prototype.setVelocityDirect = function(t, e, o, n) {
var i = this._bodyMap[t];
if (!i) return !1;
i.setLinearVelocity(new Zu(e, o)), i.setAngularVelocity(n);
var r = this.physicsDomain.body;
return r.velX[t] = e, r.velY[t] = o, r.angularVelocity[t] = n, !0;
}, n.prototype.setAwakeDirect = function(t, e) {
var o = this._bodyMap[t];
return !!o && (o.setAwake(e), this.physicsDomain.body.awake[t] = !1, !0);
}, n.prototype.defineRuntimeData = function() {
return {};
}, n.prototype.onReady = function() {
var o, n, i, r = this;
e.prototype.onReady.call(this);
var s = this.atomWorld.config.physics2D;
if (s) {
this.ppm = null !== (o = s.pixelsPerMeter) && void 0 !== o ? o : 32, void 0 !== s.timeToSleep && (nh.timeToSleep = s.timeToSleep), 
void 0 !== s.linearSleepTolerance && (nh.linearSleepTolerance = s.linearSleepTolerance), 
void 0 !== s.angularSleepTolerance && (nh.angularSleepTolerance = s.angularSleepTolerance);
var a = new qm({
gravity: new Zu(null !== (n = s.gravityX) && void 0 !== n ? n : 0, null !== (i = s.gravityY) && void 0 !== i ? i : -10)
});
a.on("begin-contact", function(e) {
return r._emitContact(t.Physics2DContactType.Begin, e);
}), a.on("end-contact", function(e) {
return r._emitContact(t.Physics2DContactType.End, e);
}), s.enablePreSolve && a.on("pre-solve", function(e) {
return r._emitContact(t.Physics2DContactType.PreSolve, e);
}), s.enablePostSolve && a.on("post-solve", function(e, o) {
return r._emitContact(t.Physics2DContactType.PostSolve, e, o);
}), this.physicsWorld = a, this._wrapComponentSetForDirty(this.physicsDomain.body, this._bodyFieldDirtySet), 
this._wrapComponentSetForDirty(this.physicsDomain.collider, this._colliderFieldDirtySet);
}
}, Object.defineProperty(n.prototype, "_bodyFieldDirtySet", {
get: function() {
var t = this;
return function(e) {
return "velX" === e || "velY" === e || "angularVelocity" === e ? t._dirtyVelocities : "density" === e ? t._dirtyFixtures : t._dirtyBodies;
};
},
enumerable: !1,
configurable: !0
}), Object.defineProperty(n.prototype, "_colliderFieldDirtySet", {
get: function() {
var t = this;
return function() {
return t._dirtyFixtures;
};
},
enumerable: !1,
configurable: !0
}), n.prototype._wrapComponentSetForDirty = function(t, e) {
var o = function(o) {
var n = t[o], i = null == n ? void 0 : n.set;
if (!i || i.__physicsDirtyWrapped) return "continue";
var r = e(o), s = function(t, e) {
i.call(this, t, e), r.add(t);
};
s.__physicsDirtyWrapped = !0, Object.defineProperty(n, "set", {
value: s,
writable: !0,
enumerable: !1,
configurable: !0
});
};
for (var n in t) o(n);
}, n.prototype.dispose = function() {
this.physicsWorld = null, this._bodyMap = {}, this._dirtyBodies.clear(), this._dirtyVelocities.clear(), 
this._dirtyFixtures.clear(), e.prototype.dispose.call(this);
}, n.prototype.onExecute = function() {
for (var e, o, n, i, r, s, a, l, c = this.physicsWorld, u = this._bodyMap, d = this.ppm, p = this.physicsDomain, m = p.transform, _ = p.body, f = p.collect(), y = {}, v = 0; v < f.length; v++) y[B = f[v]] = !0, 
u[B] || (u[B] = this._createBody(c, B, d));
for (var g in u) y[B = Number(g)] || (c.destroyBody(u[g]), delete u[g]);
if (this._dirtyBodies.size > 0) {
try {
for (var A = h(this._dirtyBodies), x = A.next(); !x.done; x = A.next()) (T = u[B = x.value]) && this._syncBodyScalars(T, B);
} catch (t) {
e = {
error: t
};
} finally {
try {
x && !x.done && (o = A.return) && o.call(A);
} finally {
if (e) throw e.error;
}
}
this._dirtyBodies.clear();
}
if (this._dirtyFixtures.size > 0) {
try {
for (var b = h(this._dirtyFixtures), C = b.next(); !C.done; C = b.next()) (T = u[B = C.value]) && this._syncFixtureAndBody(c, T, B, d);
} catch (t) {
n = {
error: t
};
} finally {
try {
C && !C.done && (i = b.return) && i.call(b);
} finally {
if (n) throw n.error;
}
}
this._dirtyFixtures.clear();
}
if (this._dirtyVelocities.size > 0) {
try {
for (var w = h(this._dirtyVelocities), S = w.next(); !S.done; S = w.next()) (T = u[B = S.value]) && (T.setLinearVelocity(new Zu(_.velX[B], _.velY[B])), 
T.setAngularVelocity(_.angularVelocity[B]));
} catch (t) {
r = {
error: t
};
} finally {
try {
S && !S.done && (s = w.return) && s.call(w);
} finally {
if (r) throw r.error;
}
}
this._dirtyVelocities.clear();
}
var R = this.atomWorld.config.physics2D;
for (c.step(this.update.deltaTime, null !== (a = null == R ? void 0 : R.velocityIterations) && void 0 !== a ? a : 8, null !== (l = null == R ? void 0 : R.positionIterations) && void 0 !== l ? l : 3), 
v = 0; v < f.length; v++) {
var B, T;
if ((T = u[B = f[v]]) && _.bodyType[B] !== t.Physics2DBodyType.Static) {
var F = T.getPosition();
if (m.x.set(B, Nu(F.x, d)), m.y.set(B, Nu(F.y, d)), !_.fixedRotation[B]) {
var M = .5 * T.getAngle();
m.quatZ.set(B, Math.sin(M)), m.quatW.set(B, Math.cos(M));
}
}
}
}, n.prototype._createBody = function(e, o, n) {
var i, r = this.physicsDomain.transform, s = this.physicsDomain.body, a = this.physicsDomain.collider, l = Du(r.x[o] || 0, n), c = Du(r.y[o] || 0, n), u = Pu(r.quatZ[o] || 0, null !== (i = r.quatW[o]) && void 0 !== i ? i : 1), h = e.createBody({
position: new Zu(l, c),
angle: u
}), d = s.bodyType[o];
d === t.Physics2DBodyType.Static ? h.setStatic() : d === t.Physics2DBodyType.Kinematic ? h.setKinematic() : h.setDynamic(), 
h.setGravityScale(s.gravityScale[o]), h.setFixedRotation(s.fixedRotation[o]), h.setLinearDamping(s.linearDamping[o]), 
h.setAngularDamping(s.angularDamping[o]), h.setBullet(s.bullet[o]), h.setSleepingAllowed(s.allowSleep[o]), 
h.setLinearVelocity(new Zu(s.velX[o], s.velY[o])), h.setAngularVelocity(s.angularVelocity[o]);
var p = Du(a.offsetX[o] || 0, n), m = Du(a.offsetY[o] || 0, n), _ = new Zu(p, m), f = a.shapeType[o] === t.Physics2DShapeType.Circle ? new u_(_, Du(a.radius[o], n)) : new of(Du(a.halfW[o], n), Du(a.halfH[o], n), _, 0);
return h.createFixture({
shape: f,
density: s.density[o],
friction: a.friction[o],
restitution: a.restitution[o],
isSensor: a.isSensor[o]
}), this._applyMass(h, o), s.active[o] || h.setActive(!1), h.setUserData(o), h;
}, n.prototype._applyMass = function(t, e) {
var o = this.physicsDomain.body.mass[e];
o > 0 ? t.setMassData({
mass: o,
center: new Zu(0, 0),
I: this._computeInertia(t, e, o)
}) : t.resetMassData();
}, n.prototype._computeInertia = function(e, o, n) {
if (this.physicsDomain.body.fixedRotation[o]) return 0;
var i = this.ppm, r = this.physicsDomain.collider;
if (r.shapeType[o] === t.Physics2DShapeType.Circle) {
var s = Du(r.radius[o], i);
return .5 * n * s * s;
}
var a = Du(2 * r.halfW[o], i), l = Du(2 * r.halfH[o], i);
return n * (a * a + l * l) / 12;
}, n.prototype._syncBodyScalars = function(e, o) {
var n = this.physicsDomain.body, i = n.bodyType[o];
i === t.Physics2DBodyType.Static ? e.setStatic() : i === t.Physics2DBodyType.Kinematic ? e.setKinematic() : e.setDynamic(), 
e.setGravityScale(n.gravityScale[o]), e.setFixedRotation(n.fixedRotation[o]), e.setLinearDamping(n.linearDamping[o]), 
e.setAngularDamping(n.angularDamping[o]), e.setBullet(n.bullet[o]), e.setSleepingAllowed(n.allowSleep[o]), 
e.setActive(n.active[o]), this._applyMass(e, o), n.awake[o] && (e.setAwake(!0), 
n.awake[o] = !1);
}, n.prototype._syncFixtureAndBody = function(e, o, n, i) {
var r = this.physicsDomain.collider, s = this.physicsDomain.body;
this._syncBodyScalars(o, n);
for (var a = Du(r.offsetX[n] || 0, i), l = Du(r.offsetY[n] || 0, i), c = new Zu(a, l), u = r.shapeType[n] === t.Physics2DShapeType.Circle ? new u_(c, Du(r.radius[n], i)) : new of(Du(r.halfW[n], i), Du(r.halfH[n], i), c, 0), h = o.getFixtureList(); h; ) {
var d = h.getNext();
o.destroyFixture(h), h = d;
}
o.createFixture({
shape: u,
density: s.density[n],
friction: r.friction[n],
restitution: r.restitution[n],
isSensor: r.isSensor[n]
}), this._applyMass(o, n);
}, n.prototype._emitContact = function(e, o, n) {
var i = o.getFixtureA().getBody().getUserData(), r = o.getFixtureB().getBody().getUserData();
if (void 0 !== i && void 0 !== r) {
var s = 0, a = 0, l = 0, c = 0;
if (e !== t.Physics2DContactType.End && o.getManifold().pointCount > 0) {
var u = o.getWorldManifold(this._contactManifold);
s = Nu(u.points[0].x, this.ppm), a = Nu(u.points[0].y, this.ppm), l = u.normal.x, 
c = u.normal.y;
}
var h = n && n.normalImpulses.length > 0 ? n.normalImpulses[0] : 0, d = this._contactAtom(e);
this._fillAndEmit(d, e, i, r, s, a, l, c, h), this._fillAndEmit(d, e, r, i, s, a, -l, -c, h);
}
}, n.prototype._contactAtom = function(e) {
switch (e) {
case t.Physics2DContactType.Begin:
return this.atomWorld.getAtomIns(ko);

case t.Physics2DContactType.End:
return this.atomWorld.getAtomIns(Go);

case t.Physics2DContactType.PreSolve:
return this.atomWorld.getAtomIns(zo);

case t.Physics2DContactType.PostSolve:
default:
return this.atomWorld.getAtomIns(jo);
}
}, n.prototype._fillAndEmit = function(t, e, o, n, i, r, s, a, l) {
var c = t.data;
c.contactType = e, c.otherEid = n, c.pointX = i, c.pointY = r, c.normalX = s, c.normalY = a, 
void 0 !== c.impulse && (c.impulse = l), t.emit(o);
}, a([ Ye, qe(Wo), l("design:type", Object) ], n.prototype, "signal", void 0), a([ qe(ao), l("design:type", Object) ], n.prototype, "update", void 0), 
a([ He, qe(Eo), l("design:type", Object) ], n.prototype, "physicsDomain", void 0), 
n = a([ je(Lo) ], n);
}(Zr), function(e) {
function n() {
return null !== e && e.apply(this, arguments) || this;
}
o(n, e), a([ Je, qe(ao), l("design:type", Object) ], n.prototype, "update", void 0), 
a([ Qe(t.RouteMode.Direct), qe(Vo), l("design:type", Object) ], n.prototype, "signal", void 0), 
n = a([ je(Oo) ], n);
}(as), function(e) {
function n() {
return null !== e && e.apply(this, arguments) || this;
}
o(n, e), n.prototype.onExecute = function() {
var e = this.atomWorld.config.physics2D;
this.router.receiveAction = e ? t.ReceiveAction.Queue : t.ReceiveAction.Discard;
}, a([ Ye, Xe, qe(Oo), l("design:type", Object) ], n.prototype, "router", void 0), 
n = a([ je("G_FAtom_Physics2DRunnerRouterGen") ], n);
}(Zr);
var uy = function(t) {
function e() {
return null !== t && t.apply(this, arguments) || this;
}
return o(e, t), a([ qe("G_FAtom_RootDomain"), l("design:type", Object) ], e.prototype, "rootDomain", void 0), 
a([ je(Wo) ], e);
}(is), hy = function(t) {
function e() {
return null !== t && t.apply(this, arguments) || this;
}
return o(e, t), a([ qe("G_FAtom_RootDomain"), l("design:type", Object) ], e.prototype, "rootDomain", void 0), 
a([ je(Vo) ], e);
}(is), dy = function(e) {
function n() {
return null !== e && e.apply(this, arguments) || this;
}
return o(n, e), a([ Je, qe(Vo), l("design:type", Object) ], n.prototype, "signal", void 0), 
a([ Qe(t.RouteMode.Direct), qe(Wo), l("design:type", Object) ], n.prototype, "runnerSignal", void 0), 
a([ je("G_FAtom_Physics2DRunnerRouter") ], n);
}(as);
function py() {
return {
contactType: t.Physics2DContactType.Begin,
otherEid: 0,
pointX: 0,
pointY: 0,
normalX: 0,
normalY: 0
};
}
var my = function(e) {
function n() {
return null !== e && e.apply(this, arguments) || this;
}
return o(n, e), n.prototype.defineInputData = function() {
return r(r({}, py()), {
contactType: t.Physics2DContactType.Begin
});
}, a([ He, qe(Eo), l("design:type", Object) ], n.prototype, "physicsDomain", void 0), 
a([ je(ko) ], n);
}(Is), _y = function(e) {
function n() {
return null !== e && e.apply(this, arguments) || this;
}
return o(n, e), n.prototype.defineInputData = function() {
return r(r({}, py()), {
contactType: t.Physics2DContactType.End
});
}, a([ He, qe(Eo), l("design:type", Object) ], n.prototype, "physicsDomain", void 0), 
a([ je(Go) ], n);
}(Is), fy = function(e) {
function n() {
return null !== e && e.apply(this, arguments) || this;
}
return o(n, e), n.prototype.defineInputData = function() {
return r(r({}, py()), {
contactType: t.Physics2DContactType.PreSolve
});
}, a([ He, qe(Eo), l("design:type", Object) ], n.prototype, "physicsDomain", void 0), 
a([ je(zo) ], n);
}(Is), yy = function(e) {
function n() {
return null !== e && e.apply(this, arguments) || this;
}
return o(n, e), n.prototype.defineInputData = function() {
return r(r({}, py()), {
contactType: t.Physics2DContactType.PostSolve,
impulse: 0
});
}, a([ He, qe(Eo), l("design:type", Object) ], n.prototype, "physicsDomain", void 0), 
a([ je(jo) ], n);
}(Is), vy = function(t) {
function e() {
return null !== t && t.apply(this, arguments) || this;
}
return o(e, t), e.prototype.defineFunction = function() {
var t = this, e = new Zu(), o = new Zu();
return function(n, i, r, s) {
var a = t.atomWorld.getAtomIns(Lo), l = a.physicsWorld;
if (!l) return [];
var c = a.ppm;
e.set(Du(n, c), Du(i, c)), o.set(Du(r, c), Du(s, c));
var u = [];
return l.rayCast(e, o, function(t, e, o, n) {
var i = t.getBody().getUserData();
return void 0 !== i && u.push({
eid: i,
pointX: Nu(e.x, c),
pointY: Nu(e.y, c),
normalX: o.x,
normalY: o.y,
fraction: n
}), -1;
}), u;
};
}, a([ je("G_FAtom_Physics2DRaycast") ], e);
}(Kr), gy = function(t) {
function e() {
return null !== t && t.apply(this, arguments) || this;
}
return o(e, t), e.prototype.defineFunction = function() {
var t = this, e = new eh(new Zu(), new Zu());
return function(o, n, i, r) {
var s = t.atomWorld.getAtomIns(Lo), a = s.physicsWorld;
if (!a) return [];
var l = s.ppm;
e.lowerBound.set(Du(o, l), Du(n, l)), e.upperBound.set(Du(i, l), Du(r, l));
var c = [];
return a.queryAABB(e, function(t) {
var e = t.getBody().getUserData();
return void 0 !== e && c.push(e), !0;
}), c;
};
}, a([ je("G_FAtom_Physics2DQueryAABB") ], e);
}(Kr), Ay = function(t) {
function e() {
return null !== t && t.apply(this, arguments) || this;
}
return o(e, t), e.prototype.defineFunction = function() {
var t = this;
return function(e) {
var o = t.atomWorld.getAtomIns(Lo).getBody(e);
if (!o) return null;
var n = o.getLinearVelocity();
return {
velX: n.x,
velY: n.y,
angularVelocity: o.getAngularVelocity(),
awake: o.isAwake()
};
};
}, a([ je("G_FAtom_Physics2DGetVelocity") ], e);
}(Kr), xy = function(t) {
function e() {
return null !== t && t.apply(this, arguments) || this;
}
return o(e, t), e.prototype.defineFunction = function() {
var t = this;
return function(e, o, n, i) {
return t.atomWorld.getAtomIns(Lo).setVelocityDirect(e, o, n, i);
};
}, a([ je("G_FAtom_Physics2DSetVelocity") ], e);
}(Kr), by = function(t) {
function e() {
return null !== t && t.apply(this, arguments) || this;
}
return o(e, t), e.prototype.defineFunction = function() {
var t = this;
return function(e, o) {
return t.atomWorld.getAtomIns(Lo).setAwakeDirect(e, o);
};
}, a([ je("G_FAtom_Physics2DSetAwake") ], e);
}(Kr), Cy = !1;
!function() {
if (globalThis.jsb && !Cy && "object" == typeof WebAssembly) {
var t = WebAssembly.compile, e = WebAssembly.instantiate;
WebAssembly.compile = function(e) {
return new Promise(function(o, n) {
if (e) try {
o(new WebAssembly.Module(e));
} catch (i) {
t.call(WebAssembly, e).then(o).catch(n);
} else n(new Error("WebAssembly.compile: Invalid buffer source!"));
});
}, WebAssembly.instantiate = function(t, o) {
return t instanceof WebAssembly.Module ? e.call(WebAssembly, t, o) : WebAssembly.compile(t).then(function(t) {
return e.call(WebAssembly, t, o).then(function(e) {
return {
instance: e,
module: t
};
});
});
}, Cy = !0;
}
}();
var wy = function(t) {
function e() {
var e = t.apply(this, p([], d(arguments), !1)) || this;
return e.exports = {}, e;
}
return o(e, t), Object.defineProperty(e, "atomType", {
get: function() {
return "NativeAtom";
},
enumerable: !1,
configurable: !0
}), e.prototype.onReady = function() {
return c(this, void 0, void 0, function() {
var t, e;
return u(this, function(o) {
switch (o.label) {
case 0:
return t = this.defineModule(), e = this, [ 4, this.atomWorld.universe.native.getModule(t) ];

case 1:
return e.exports = o.sent(), this.atomWorld ? (this.atomState = this.defineFunction(), 
[ 2 ]) : [ 2 ];
}
});
});
}, e[ge] = !0, e;
}(Ae);
t.AssetFoundation = Vn, t.AssetMeta = {
image: function() {},
autoAtlas: function() {}
}, t.AssetUrlSeparator = On, t.AtomUniverse = qr, t.AudioAtom = ds, t.BaseSetters = Bn, 
t.Camera = function(e) {
for (var o = [], n = 1; n < arguments.length; n++) o[n - 1] = arguments[n];
return Cn.apply(void 0, p([ t.RenderNodeType.Camera, e ], d(o), !1));
}, t.CameraSetters = Ln, t.ConfigAtom = jn, t.DomainExtensionAtom = Qr, t.EasingFunctions = tc, 
t.EditBox = function(e) {
for (var o = [], n = 1; n < arguments.length; n++) o[n - 1] = arguments[n];
return Cn.apply(void 0, p([ t.RenderNodeType.EditBox, e ], d(o), !1));
}, t.EditBoxEventSetters = Qi, t.EditBoxSetters = Ji, t.EntityComponentAtom = Yr, 
t.EntityDomainAtom = Xr, t.EntityRelationAtom = Jr, t.FunctionAtom = Kr, t.GMAtom = hs, 
t.G_FAtom_ADCanShowAd = _a, t.G_FAtom_ADFullscreenAdReady = wu, t.G_FAtom_ADGetAdReadyState = ya, 
t.G_FAtom_ADHideBanner = sa, t.G_FAtom_ADInterstitialAdReady = Cu, t.G_FAtom_ADIsAdLoading = fa, 
t.G_FAtom_ADLoadAllAds = ma, t.G_FAtom_ADLoadFullscreenAd = pa, t.G_FAtom_ADLoadInterstitialAd = da, 
t.G_FAtom_ADLoadRewardAd = ha, t.G_FAtom_ADResult = xu, t.G_FAtom_ADRewardAdReady = bu, 
t.G_FAtom_ADShowBanner = ra, t.G_FAtom_ADShowFullscreenAd = ca, t.G_FAtom_ADShowInterstitial = la, 
t.G_FAtom_ADShowRewardVideo = aa, t.G_FAtom_AlgorithmOfferResult = du, t.G_FAtom_Animation = Ws, 
t.G_FAtom_AudioPlayer = xs, t.G_FAtom_AutoSaveLogic = Ha, t.G_FAtom_AutoSaveReceive = qa, 
t.G_FAtom_AutoSaveRouter = ja, t.G_FAtom_AutoSaveSignal = za, t.G_FAtom_BinData = ac, 
t.G_FAtom_BoxComponent = Bs, t.G_FAtom_CanvasResize = ks, t.G_FAtom_CaptureGameImage = Pa, 
t.G_FAtom_ChangeParent = zc, t.G_FAtom_CheckLive = mu, t.G_FAtom_ChildOf = Ms, t.G_FAtom_ConvertToNode = kc, 
t.G_FAtom_ConvertToSlot = Gc, t.G_FAtom_ConvertToWorld = Oc, t.G_FAtom_DateNow = Kl, 
t.G_FAtom_DestroyUniverse = jc, t.G_FAtom_DismissEntryRedDot = Yc, t.G_FAtom_DomainOf = Fs, 
t.G_FAtom_Edit = Ls, t.G_FAtom_ExitRequest = Ua, t.G_FAtom_GetAvailableRAM = Va, 
t.G_FAtom_GetBlockShape = pu, t.G_FAtom_GetCPUCores = Oa, t.G_FAtom_GetCPUMaxFreq = ka, 
t.G_FAtom_GetCurrentDate = Ql, t.G_FAtom_GetDesignSize = Da, t.G_FAtom_GetDeviceInfo = La, 
t.G_FAtom_GetFirstAdEcpm = Ca, t.G_FAtom_GetHistoryMaxEcpmByDays = xa, t.G_FAtom_GetHistoryMinEcpmByDays = ba, 
t.G_FAtom_GetHostCurrentLanguage = Fa, t.G_FAtom_GetHostLanguageString = Ma, t.G_FAtom_GetHostStorageItem = bc, 
t.G_FAtom_GetLastAdEcpm = va, t.G_FAtom_GetLaunchParams = Jl, t.G_FAtom_GetMaxEcpm = ga, 
t.G_FAtom_GetMaxEcpmNormalized = Aa, t.G_FAtom_GetNetworkState = Sa, t.G_FAtom_GetNetworkType = Ra, 
t.G_FAtom_GetSafeArea = Na, t.G_FAtom_GetStorageItem = gc, t.G_FAtom_GetSystemLanguage = Ba, 
t.G_FAtom_GetSystemLanguageCode = Ta, t.G_FAtom_GetTimeSinceLastInterstitialAd = ua, 
t.G_FAtom_GetTotalRAM = Wa, t.G_FAtom_GetUniverseOffset = Ea, t.G_FAtom_GetWinSize = Ia, 
t.G_FAtom_GetWorldPosition = Vc, t.G_FAtom_HasFeature = mc, t.G_FAtom_HasUniverseFeature = _c, 
t.G_FAtom_HideXingYunLoading = $c, t.G_FAtom_HideXingYunNoNetPopup = nu, t.G_FAtom_HostActive = Ru, 
t.G_FAtom_IsAssetDownloaded = dc, t.G_FAtom_IsBundleDownloaded = hc, t.G_FAtom_IsDirDownloaded = pc, 
t.G_FAtom_IsLowEndDevice = Ga, t.G_FAtom_JsonData = rc, t.G_FAtom_Keyboard = Vs, 
t.G_FAtom_LoadJson = yc, t.G_FAtom_MathAbs = Ja, t.G_FAtom_MathAcos = _l, t.G_FAtom_MathAcosh = bl, 
t.G_FAtom_MathApproximately = Ol, t.G_FAtom_MathAsin = ml, t.G_FAtom_MathAsinh = xl, 
t.G_FAtom_MathAtan = fl, t.G_FAtom_MathAtan2 = yl, t.G_FAtom_MathAtanh = Cl, t.G_FAtom_MathCbrt = nl, 
t.G_FAtom_MathCeil = Ka, t.G_FAtom_MathClamp = Fl, t.G_FAtom_MathClz32 = Rl, t.G_FAtom_MathCos = dl, 
t.G_FAtom_MathCosh = gl, t.G_FAtom_MathDegToRad = Dl, t.G_FAtom_MathDeltaAngle = ql, 
t.G_FAtom_MathDistance = Il, t.G_FAtom_MathDistance3D = jl, t.G_FAtom_MathExp = rl, 
t.G_FAtom_MathExpm1 = sl, t.G_FAtom_MathFloor = Za, t.G_FAtom_MathFround = Tl, t.G_FAtom_MathHypot = il, 
t.G_FAtom_MathImul = Bl, t.G_FAtom_MathInverseLerp = Pl, t.G_FAtom_MathLerp = Ml, 
t.G_FAtom_MathLog = al, t.G_FAtom_MathLog10 = ll, t.G_FAtom_MathLog1p = ul, t.G_FAtom_MathLog2 = cl, 
t.G_FAtom_MathMax = wl, t.G_FAtom_MathMin = Sl, t.G_FAtom_MathMoveTowards = Ll, 
t.G_FAtom_MathMoveTowardsAngle = Hl, t.G_FAtom_MathPingPong = Vl, t.G_FAtom_MathPow = el, 
t.G_FAtom_MathRadToDeg = Nl, t.G_FAtom_MathRandom = Ya, t.G_FAtom_MathRandomInt = Xa, 
t.G_FAtom_MathRemap = kl, t.G_FAtom_MathRepeat = Wl, t.G_FAtom_MathRound = $a, t.G_FAtom_MathSign = Qa, 
t.G_FAtom_MathSin = hl, t.G_FAtom_MathSinh = vl, t.G_FAtom_MathSmoothstep = El, 
t.G_FAtom_MathSnap = Gl, t.G_FAtom_MathSqrt = ol, t.G_FAtom_MathTan = pl, t.G_FAtom_MathTanh = Al, 
t.G_FAtom_MathTrunc = tl, t.G_FAtom_MathWrapAngle = zl, t.G_FAtom_NetworkPush = Fu, 
t.G_FAtom_NetworkRequest = Bu, t.G_FAtom_NetworkResult = Tu, t.G_FAtom_OpenHostView = Jc, 
t.G_FAtom_OriginalCtrlInput = ta, t.G_FAtom_PageHide = ea, t.G_FAtom_PageShow = oa, 
t.G_FAtom_PerformanceNow = Zl, t.G_FAtom_Physics2DBeforeStepSignal = hy, t.G_FAtom_Physics2DBeginContact = my, 
t.G_FAtom_Physics2DBody = Eu, t.G_FAtom_Physics2DCollider = Lu, t.G_FAtom_Physics2DDomain = Wu, 
t.G_FAtom_Physics2DEndContact = _y, t.G_FAtom_Physics2DGetVelocity = Ay, t.G_FAtom_Physics2DPostSolve = yy, 
t.G_FAtom_Physics2DPreSolve = fy, t.G_FAtom_Physics2DQueryAABB = gy, t.G_FAtom_Physics2DRaycast = vy, 
t.G_FAtom_Physics2DRunnerRouter = dy, t.G_FAtom_Physics2DRunnerSignal = uy, t.G_FAtom_Physics2DSetAwake = by, 
t.G_FAtom_Physics2DSetVelocity = xy, t.G_FAtom_Pointer = Ds, t.G_FAtom_PositionInput = Es, 
t.G_FAtom_PreButtonClick = Hs, t.G_FAtom_PreTouchEnd = Ys, t.G_FAtom_PreTouchStart = Us, 
t.G_FAtom_ReadBinAsset = lc, t.G_FAtom_ReadJsonAsset = sc, t.G_FAtom_RealTime = $l, 
t.G_FAtom_RegisterAlgorithmBoardCallbacks = _u, t.G_FAtom_RegisterAlgorithmSnapshotCallbacks = fu, 
t.G_FAtom_RegisterHostItemMirror = xc, t.G_FAtom_RegisterSaveMirror = Ac, t.G_FAtom_ReleaseAsset = uc, 
t.G_FAtom_ReloadConfig = Iu, t.G_FAtom_ReloadConfigInput = Mu, t.G_FAtom_RemoveJson = vc, 
t.G_FAtom_ReportGameRuntime = cu, t.G_FAtom_RequestAlgorithmOffer = hu, t.G_FAtom_RestartApplication = qc, 
t.G_FAtom_RestartWorld = Hc, t.G_FAtom_RichTextClick = Xs, t.G_FAtom_RootDomain = bs, 
t.G_FAtom_RootRender = ws, t.G_FAtom_SaveJson = fc, t.G_FAtom_SaveProgress = ia, 
t.G_FAtom_Scroll = Ns, t.G_FAtom_SetAnimationSpeed = Yl, t.G_FAtom_SetFrameRate = Ul, 
t.G_FAtom_SetRenderMountMode = Uc, t.G_FAtom_SetThinkingDataEnabled = lu, t.G_FAtom_SetUniverseParentSize = Xc, 
t.G_FAtom_SetUserPreferences = uu, t.G_FAtom_ShowNativeToast = Qc, t.G_FAtom_ShowTips = Kc, 
t.G_FAtom_ShowXingYunLoading = Zc, t.G_FAtom_ShowXingYunLoadingFailed = tu, t.G_FAtom_ShowXingYunLoadingNoNet = eu, 
t.G_FAtom_ShowXingYunNoNetPopup = ou, t.G_FAtom_Silent = nc, t.G_FAtom_SilentLoad = ic, 
t.G_FAtom_SizeInput = Ps, t.G_FAtom_StopTween = oc, t.G_FAtom_StringHash = Xl, t.G_FAtom_Track = au, 
t.G_FAtom_Transform = Rs, t.G_FAtom_Tween = ec, t.G_FAtom_TweenEvent = Js, t.G_FAtom_TweenRunner = su, 
t.G_FAtom_TweenRunnerRouter = ru, t.G_FAtom_TweenRunnerSignal = iu, t.G_FAtom_UIEvent = qs, 
t.G_FAtom_UniverseOffsetInput = Qs, t.G_FAtom_Update = Gs, t.G_FAtom_Vibrate = wa, 
t.G_FAtom_WindowSize = Os, t.G_FAtom_WorldCreate = zs, t.G_FAtom_WorldDomain = Cs, 
t.G_FAtom_WorldLoadProgress = Su, t.G_FAtom_WorldRender = Ss, t.G_FAtom_WorldResume = js, 
t.G_FAtom_WorldState = Ts, t.Graphics = function(e) {
for (var o = [], n = 1; n < arguments.length; n++) o[n - 1] = arguments[n];
return Cn.apply(void 0, p([ t.RenderNodeType.Graphics, e ], d(o), !1));
}, t.GraphicsSetters = si, t.HostFoundation = Au, t.LayerMapping = Pn, t.LoadAtom = As, 
t.LogicAtom = Zr, t.Mask = function(e) {
for (var o = [], n = 1; n < arguments.length; n++) o[n - 1] = arguments[n];
return Cn.apply(void 0, p([ t.RenderNodeType.Mask, e ], d(o), !1));
}, t.MaskSetters = Ri, t.Mesh = function(e) {
for (var o = [], n = 1; n < arguments.length; n++) o[n - 1] = arguments[n];
return Cn.apply(void 0, p([ t.RenderNodeType.Mesh, e ], d(o), !1));
}, t.MeshSetters = Zi, t.NativeAtom = wy, t.Node = ps, t.OrderAtom = ls, t.PHYSICS2D_DEFAULT_PIXELS_PER_METER = 32, 
t.Particle = function(e) {
for (var o = [], n = 1; n < arguments.length; n++) o[n - 1] = arguments[n];
return Cn.apply(void 0, p([ t.RenderNodeType.Particle, e ], d(o), !1));
}, t.ParticleSetters = Yi, t.RemoteCdnProtocol = Wn, t.RenderAtom = gs, t.RenderNodeSetters = or, 
t.RichText = function(e) {
for (var o = [], n = 1; n < arguments.length; n++) o[n - 1] = arguments[n];
return Cn.apply(void 0, p([ t.RenderNodeType.RichText, e ], d(o), !1));
}, t.RichTextEventSetters = tr, t.RichTextSetters = $i, t.RuntimeFoundation = Gr, 
t.ScrollView = function(e) {
for (var o = [], n = 1; n < arguments.length; n++) o[n - 1] = arguments[n];
return Cn.apply(void 0, p([ t.RenderNodeType.ScrollView, e ], d(o), !1));
}, t.ScrollViewEventSetters = Vi, t.ScrollViewSetters = Wi, t.SignalAtom = is, t.SignalRouterAtom = as, 
t.Spine = function(e) {
for (var o = [], n = 1; n < arguments.length; n++) o[n - 1] = arguments[n];
var i = ti(e.slots);
return Cn.apply(void 0, p(p([ t.RenderNodeType.Spine, e ], d(i), !1), d(o), !1));
}, t.SpineEventSetters = $n, t.SpineSetters = Zn, t.Sprite = function(e) {
for (var o = [], n = 1; n < arguments.length; n++) o[n - 1] = arguments[n];
return Cn.apply(void 0, p([ t.RenderNodeType.Sprite, e ], d(o), !1));
}, t.SpriteSetters = zi, t.Streak = function(e) {
for (var o = [], n = 1; n < arguments.length; n++) o[n - 1] = arguments[n];
return Cn.apply(void 0, p([ t.RenderNodeType.Streak, e ], d(o), !1));
}, t.StreakSetters = ji, t.TOP_LEVEL_SKIP = sr, t.Text = function(e) {
for (var o = [], n = 1; n < arguments.length; n++) o[n - 1] = arguments[n];
return Cn.apply(void 0, p([ t.RenderNodeType.Text, e ], d(o), !1));
}, t.TextSetters = Qn, t.Texture2D = function(e) {
for (var o = [], n = 1; n < arguments.length; n++) o[n - 1] = arguments[n];
return Cn.apply(void 0, p([ t.RenderNodeType.Texture2D, e ], d(o), !1));
}, t.Texture2DSetters = In, t.TopologicalChain = xe, t.TraceGraphics = function(e) {
for (var o = [], n = 1; n < arguments.length; n++) o[n - 1] = arguments[n];
return Cn.apply(void 0, p([ t.RenderNodeType.TraceGraphics, e ], d(o), !1));
}, t.VariantAtom = os, t.WorldAtom = cs, t.WorldInputAtom = us, t.addComponentWithDefaults = Ur, 
t.angleToQuat = function(t) {
var e = .5 * t;
return {
quatZ: Math.sin(e),
quatW: Math.cos(e)
};
}, t.applyBoundaryResistance = mr, t.applyConfigProps = ar, t.atomBind = he, t.atomClass = je, 
t.atomClassMap = Me, t.attachTo = function(t, e) {
Ne(t.constructor).attachToProperty = e;
}, t.autoRegisterAtomType = ke, t.bindAtom = qe, t.bytesPerPixel = Fn, t.clampOffset = hr, 
t.cocosTemp = Hn, t.componentQuery = He, t.computeBoundaryForce = ur, t.computeBounds = cr, 
t.computeTotalContentSize = yr, t.computeVisibleRange = fr, t.createEntityDataComponent = Hr, 
t.createNodeTreeFromConfig = lr, t.detectDirectionLock = _r, t.entityData = function(t, e) {
Ne(t.constructor).entityDataProperty = e;
}, t.entityRenderer = Ue, t.expandSlots = ti, t.featureAtomMap = Ie, t.getAtomClass = Pe, 
t.getBindingMeta = Ne, t.getRenderNodeSetters = nr, t.injectDependency = ze, t.isOutOfBounds = dr, 
t.mapCocosKeyCode = function(t) {
return t;
}, t.meterToPx = Nu, t.node = Cn, t.onChain = Ye, t.orderAfter = $e, t.orderBefore = Ze, 
t.parseAssetUrl = kn, t.parseFeatureName = Ve, t.performanceNow = We, t.pxToMeter = Du, 
t.quatToAngle = Pu, t.resolveChainRegistration = no, t.routeDispatch = function(e) {
Ne(e.constructor).routePhase = t.RoutePhase.Dispatch;
}, t.routeFilter = function(e) {
Ne(e.constructor).routePhase = t.RoutePhase.Filter;
}, t.routeFrom = Je, t.routeReceive = Xe, t.routeTo = Qe, t.routeTransform = function(e) {
Ne(e.constructor).routePhase = t.RoutePhase.Transform;
}, t.signalEnd = function(t) {
Ne(t.constructor).signalPhase = "end";
}, t.signalStart = function(t) {
Ne(t.constructor).signalPhase = "start";
}, t.updateAxisPhysics = pr, t.variantOf = function(t, e) {
Ne(t.constructor).variantSourceProperty = e;
};
}), ae.AE_VERSION = "4.13.0";