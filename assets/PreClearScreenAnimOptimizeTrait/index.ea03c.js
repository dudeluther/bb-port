window.__require = function F(e, D, t) {
function E(o, a) {
if (!D[o]) {
if (!e[o]) {
var i = o.split("/");
i = i[i.length - 1];
if (!e[i]) {
var n = "function" == typeof __require && __require;
if (!a && n) return n(i, !0);
if (r) return r(i, !0);
throw new Error("Cannot find module '" + o + "'");
}
o = i;
}
var l = D[o] = {
exports: {}
};
e[o][0].call(l.exports, function(F) {
return E(e[o][1][F] || F);
}, l, l.exports, F, e, D, t);
}
return D[o].exports;
}
for (var r = "function" == typeof __require && __require, o = 0; o < t.length; o++) E(t[o]);
return E;
}({
PreClearScreenAnimOptimizeTrait: [ function(F, e, D) {
"use strict";
cc._RF.push(e, "bb1ab5tCt9ET6R+KP9X0Btr", "PreClearScreenAnimOptimizeTrait");
var t, E = this && this.__extends || (t = function(F, e) {
return (t = Object.setPrototypeOf || {
__proto__: []
} instanceof Array && function(F, e) {
F.__proto__ = e;
} || function(F, e) {
for (var D in e) Object.prototype.hasOwnProperty.call(e, D) && (F[D] = e[D]);
})(F, e);
}, function(F, e) {
t(F, e);
function D() {
this.constructor = F;
}
F.prototype = null === e ? Object.create(e) : (D.prototype = e.prototype, new D());
}), r = this && this.__decorate || function(F, e, D, t) {
var E, r = arguments.length, o = r < 3 ? e : null === t ? t = Object.getOwnPropertyDescriptor(e, D) : t;
if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) o = Reflect.decorate(F, e, D, t); else for (var a = F.length - 1; a >= 0; a--) (E = F[a]) && (o = (r < 3 ? E(o) : r > 3 ? E(e, D, o) : E(e, D)) || o);
return r > 3 && o && Object.defineProperty(e, D, o), o;
}, o = this && this.__awaiter || function(F, e, D, t) {
return new (D || (D = Promise))(function(E, r) {
function o(F) {
try {
i(t.next(F));
} catch (F) {
r(F);
}
}
function a(F) {
try {
i(t.throw(F));
} catch (F) {
r(F);
}
}
function i(F) {
F.done ? E(F.value) : (e = F.value, e instanceof D ? e : new D(function(F) {
F(e);
})).then(o, a);
var e;
}
i((t = t.apply(F, e || [])).next());
});
}, a = this && this.__generator || function(F, e) {
var D, t, E, r, o = {
label: 0,
sent: function() {
if (1 & E[0]) throw E[1];
return E[1];
},
trys: [],
ops: []
};
return r = {
next: a(0),
throw: a(1),
return: a(2)
}, "function" == typeof Symbol && (r[Symbol.iterator] = function() {
return this;
}), r;
function a(F) {
return function(e) {
return i([ F, e ]);
};
}
function i(r) {
if (D) throw new TypeError("Generator is already executing.");
for (;o; ) try {
if (D = 1, t && (E = 2 & r[0] ? t.return : r[0] ? t.throw || ((E = t.return) && E.call(t), 
0) : t.next) && !(E = E.call(t, r[1])).done) return E;
(t = 0, E) && (r = [ 2 & r[0], E.value ]);
switch (r[0]) {
case 0:
case 1:
E = r;
break;

case 4:
o.label++;
return {
value: r[1],
done: !1
};

case 5:
o.label++;
t = r[1];
r = [ 0 ];
continue;

case 7:
r = o.ops.pop();
o.trys.pop();
continue;

default:
if (!(E = o.trys, E = E.length > 0 && E[E.length - 1]) && (6 === r[0] || 2 === r[0])) {
o = 0;
continue;
}
if (3 === r[0] && (!E || r[1] > E[0] && r[1] < E[3])) {
o.label = r[1];
break;
}
if (6 === r[0] && o.label < E[1]) {
o.label = E[1];
E = r;
break;
}
if (E && o.label < E[2]) {
o.label = E[2];
o.ops.push(r);
break;
}
E[2] && o.ops.pop();
o.trys.pop();
continue;
}
r = e.call(F, o);
} catch (F) {
r = [ 6, F ];
t = 0;
} finally {
D = E = 0;
}
if (5 & r[0]) throw r[1];
return {
value: r[0] ? r[1] : void 0,
done: !0
};
}
}, i = this && this.__values || function(F) {
var e = "function" == typeof Symbol && Symbol.iterator, D = e && F[e], t = 0;
if (D) return D.call(F);
if (F && "number" == typeof F.length) return {
next: function() {
F && t >= F.length && (F = void 0);
return {
value: F && F[t++],
done: !F
};
}
};
throw new TypeError(e ? "Object is not iterable." : "Symbol.iterator is not defined.");
};
Object.defineProperty(D, "__esModule", {
value: !0
});
D.PreClearScreenAnimOptimizeTrait = void 0;
var n = {
1e3: {
particle: [ "#9EE4FF", "#FFED8D", "#F7CEFF", "#FFD57C", "#FFADB0", "#B3FF88", "#A1FFFB" ],
glow: [ "#63C0FF", "#FFE26D", "#F186FF", "#FFA970", "#FF8686", "#90FF6D", "#86F5FF" ]
},
1001: {
particle: [ "#FFC9DC", "#FFC9DC", "#FFC9DC", "#FFC9DC", "#FFC9DC", "#FFC9DC", "#FFC9DC" ],
glow: [ "#FFADD4", "#FFADD4", "#FFADD4", "#FFADD4", "#FFADD4", "#FFADD4", "#FFADD4" ]
},
1002: {
particle: [ "#C9F4FC", "#FFF9B8", "#EED5FF", "#FFE2BD", "#FFC9C9", "#C9FFD8", "#F5D8FF" ],
glow: [ "#9FF2FD", "#FFE86D", "#F0B6FF", "#FFC586", "#FFAAAA", "#8CF1A4", "#FFBEFF" ]
},
1003: {
particle: [ "#FFD8E7", "#FFD4EC", "#FFB9E0", "#FFACD7", "#FFA0E1", "#FFD8E7", "#FFD4EC" ],
glow: [ "#FFB2E0", "#FFB1DC", "#FF9CDF", "#FF96D5", "#FF88CF", "#FFB2E0", "#FFB1DC" ]
},
1004: {
particle: [ "#FFE5E5", "#FFE3CE", "#FFEFC5", "#CEE979", "#E4FFFE", "#E0E9FF", "#F1E5FF" ],
glow: [ "#FFC4B1", "#FFCFAF", "#E2C16B", "#B0CC80", "#B6F0EB", "#A9CBF7", "#DF99DC" ]
},
1005: {
particle: [ "#CCFFD2", "#CCFFD2", "#CCFFD2", "#CCFFD2", "#CCFFD2", "#CCFFD2", "#CCFFD2" ],
glow: [ "#ABFF9B", "#ABFF9B", "#ABFF9B", "#ABFF9B", "#ABFF9B", "#ABFF9B", "#ABFF9B" ]
},
1006: {
particle: [ "#FFF3D3", "#FFE3B9", "#B4CE98", "#E69C7A", "#F3E99A", "#F5CE94", "#CEFCFC" ],
glow: [ "#F7E275", "#FFEB9B", "#9DBB7B", "#C07E5F", "#D8C773", "#EEBA77", "#93DFCD" ]
},
1007: {
particle: [ "#FDF3A4", "#D1F2FF", "#A8CEFF", "#C28EF1", "#FDF3A4", "#D1F2FF", "#A8CEFF" ],
glow: [ "#E4C946", "#7DD6F1", "#7BB2F7", "#8F6FC9", "#E4C946", "#7DD6F1", "#7BB2F7" ]
},
1008: {
particle: [ "#FFDDED", "#D0FDFD", "#FFDDED", "#D0FDFD", "#FFDDED", "#D0FDFD", "#FFDDED" ],
glow: [ "#FD91A3", "#8AF6FA", "#FD91A3", "#8AF6FA", "#FD91A3", "#8AF6FA", "#FD91A3" ]
},
1009: {
particle: [ "#FFACAC", "#E4FFFF", "#90CAFF", "#FFF7C9", "#FFACAC", "#E4FFFF", "#90CAFF" ],
glow: [ "#FF697B", "#BEFDFF", "#61A7FF", "#FDD862", "#FF697B", "#BEFDFF", "#61A7FF" ]
},
1010: {
particle: [ "#F7A0FF", "#CFFFE6", "#E0FFDF", "#FFF5C2", "#F7A0FF", "#CFFFE6", "#E0FFDF" ],
glow: [ "#FF8AEC", "#56CFA9", "#61F161", "#FDD862", "#FF8AEC", "#56CFA9", "#61F161" ]
},
1011: {
particle: [ "#8DE06D", "#A0FFA0", "#FFB19E", "#E0FFCC", "#FFDD96", "#FFE6B1", "#8DE06D" ],
glow: [ "#69CA56", "#56CF8B", "#FF9081", "#9FD889", "#F3CA73", "#F1D4A7", "#69CA56" ]
},
1012: {
particle: [ "#94D0FF", "#9EE5FC", "#8DD1FF", "#9FF0F7", "#94D0FF", "#9EE5FC", "#8DD1FF" ],
glow: [ "#62A6FA", "#6EB9F3", "#85C2FA", "#92DEF1", "#62A6FA", "#6EB9F3", "#85C2FA" ]
},
1013: {
particle: [ "#F2F8DF", "#FFF1CF", "#E9E1AC", "#C1FCEF", "#E2FFB6", "#FFF8A7", "#F2F8DF" ],
glow: [ "#D5D599", "#EBD293", "#A7A175", "#81C2B5", "#BAE974", "#F1E771", "#D5D599" ]
},
1014: {
particle: [ "#FFD6D6", "#FFADBA", "#FFF7B9", "#FBFFEE", "#C9BBFF", "#CFFFFD", "#FFD6D6" ],
glow: [ "#EE9D9D", "#EE7D8F", "#DBD07E", "#D9E4B6", "#A692F3", "#8DCECB", "#EE9D9D" ]
},
1015: {
particle: [ "#FFC7CE", "#FFFAD3", "#C9FFB1", "#FFBDD7", "#FFC7CE", "#FFFAD3", "#C9FFB1" ],
glow: [ "#FF9EAA", "#E0D269", "#84D85C", "#FF8FC9", "#FF9EAA", "#E0D269", "#84D85C" ]
},
1016: {
particle: [ "#EAFFE2", "#FFFDE4", "#EAFFE2", "#FFFDE4", "#EAFFE2", "#FFFDE4", "#EAFFE2" ],
glow: [ "#B5FFAA", "#EBE198", "#B5FFAA", "#EBE198", "#B5FFAA", "#EBE198", "#B5FFAA" ]
},
1017: {
particle: [ "#FFF2BE", "#FFC08F", "#94B6FF", "#AEF776", "#FFF2BE", "#FFC08F", "#94B6FF" ],
glow: [ "#FFD15A", "#F79B67", "#628BE2", "#7EC24A", "#FFD15A", "#F79B67", "#628BE2" ]
},
1018: {
particle: [ "#FFF0D8", "#FFC08F", "#FFF0D8", "#EC9B6D", "#FFF0D8", "#EC9B6D", "#FFF0D8" ],
glow: [ "#E4C89F", "#D88A5E", "#E4C89F", "#D88A5E", "#E4C89F", "#D88A5E", "#E4C89F" ]
},
1019: {
particle: [ "#FFD6BE", "#FFD6BE", "#FFD6BE", "#FFD6BE", "#FFD6BE", "#FFD6BE", "#FFD6BE" ],
glow: [ "#D5A488", "#D5A488", "#D5A488", "#D5A488", "#D5A488", "#D5A488", "#D5A488" ]
},
1020: {
particle: [ "#93F593", "#93F593", "#93F593", "#93F593", "#93F593", "#93F593", "#93F593" ],
glow: [ "#64D364", "#64D364", "#64D364", "#64D364", "#64D364", "#64D364", "#64D364" ]
},
1021: {
particle: [ "#7AEAFF", "#7AEAFF", "#7AEAFF", "#7AEAFF", "#7AEAFF", "#7AEAFF", "#7AEAFF" ],
glow: [ "#88CBF8", "#88CBF8", "#88CBF8", "#88CBF8", "#88CBF8", "#88CBF8", "#88CBF8" ]
},
1022: {
particle: [ "#9EE4FF", "#FFED8D", "#F7CEFF", "#FFD57C", "#FFADB0", "#B3FF88", "#A1FFFB" ],
glow: [ "#63C0FF", "#FFE26D", "#F186FF", "#FFA970", "#FF8686", "#90FF6D", "#86F5FF" ]
},
1023: {
particle: [ "#FA9A6E", "#FF977C", "#FFCEAD", "#B8F795", "#FFB2B5", "#A3D3FF", "#FFFCE4" ],
glow: [ "#CF7044", "#F07556", "#DA9974", "#87C763", "#F87777", "#63A1FF", "#CFC99B" ]
},
1024: {
particle: [ "#ECF8FF", "#FFEFEE", "#DDFAFF", "#ECF8FF", "#FFEFEE", "#DDFAFF", "#ECF8FF" ],
glow: [ "#D1E8F5", "#F1B0AE", "#98D6E2", "#D1E8F5", "#F1B0AE", "#98D6E2", "#D1E8F5" ]
},
1025: {
particle: [ "#97FFF8", "#97FFF8", "#97FFF8", "#97FFF8", "#97FFF8", "#97FFF8", "#97FFF8" ],
glow: [ "#48EBC3", "#48EBC3", "#48EBC3", "#48EBC3", "#48EBC3", "#48EBC3", "#48EBC3" ]
},
1026: {
particle: [ "#C3E9FF", "#DDBCFC", "#FFC9C9", "#FFE5B6", "#C3E9FF", "#DDBCFC", "#FFC9C9" ],
glow: [ "#85BBDA", "#AF8CCF", "#E29898", "#D8B679", "#85BBDA", "#AF8CCF", "#E29898" ]
},
1027: {
particle: [ "#FFA7A7", "#FFF3B6", "#C2FFA5", "#A5EDFF", "#FFA7A7", "#FFF3B6", "#C2FFA5" ],
glow: [ "#FF7A7A", "#F0C861", "#74DF6F", "#76D7F0", "#FF7A7A", "#F0C861", "#74DF6F" ]
},
1028: {
particle: [ "#E0E973", "#71E8F3", "#D6EEAE", "#9DD4FA", "#E0E973", "#71E8F3", "#D6EEAE" ],
glow: [ "#BEC753", "#50CBD6", "#BBD58E", "#72A9CE", "#BEC753", "#50CBD6", "#BBD58E" ]
},
1029: {
particle: [ "#FFF0F0", "#AAC6FF", "#EBF0FF", "#D7BDFF", "#B8EBFF", "#FFF0F0", "#FFF0F0" ],
glow: [ "#F5B6B0", "#719AF0", "#A1B2E6", "#AD85E9", "#67BAF1", "#F5B6B0", "#F5B6B0" ]
},
1030: {
particle: [ "#D6FCFF", "#FFB9CD", "#FFD5AD", "#FFE4F1", "#FFD1FF", "#D6FCFF", "#FFB9CD" ],
glow: [ "#77DEFF", "#F385A4", "#F89F6D", "#F0A5C9", "#D18AD1", "#77DEFF", "#F385A4" ]
},
1031: {
particle: [ "#F86868", "#4DA76D", "#FFDF7A", "#7587D1", "#F86868", "#4DA76D", "#FFDF7A" ],
glow: [ "#F05D5D", "#398F58", "#EBC756", "#6678C3", "#F05D5D", "#398F58", "#EBC756" ]
},
1032: {
particle: [ "#F7AF61", "#FFE592", "#FFA3A3", "#F7AF61", "#FFE592", "#FFA3A3", "#F7AF61" ],
glow: [ "#E49846", "#D6B756", "#F06868", "#E49846", "#D6B756", "#F06868", "#E49846" ]
},
1033: {
particle: [ "#BAFFAD", "#BAFFAD", "#BAFFAD", "#BAFFAD", "#BAFFAD", "#BAFFAD", "#BAFFAD" ],
glow: [ "#78CE68", "#78CE68", "#78CE68", "#78CE68", "#78CE68", "#78CE68", "#78CE68" ]
},
1034: {
particle: [ "#DDCAFF", "#DDCAFF", "#DDCAFF", "#DDCAFF", "#DDCAFF", "#DDCAFF", "#DDCAFF" ],
glow: [ "#CD9EFF", "#CD9EFF", "#CD9EFF", "#CD9EFF", "#CD9EFF", "#CD9EFF", "#CD9EFF" ]
},
1035: {
particle: [ "#E5FFFF", "#E5FFFF", "#E5FFFF", "#E5FFFF", "#E5FFFF", "#E5FFFF", "#E5FFFF" ],
glow: [ "#7AE2E2", "#7AE2E2", "#7AE2E2", "#7AE2E2", "#7AE2E2", "#7AE2E2", "#7AE2E2" ]
},
1036: {
particle: [ "#F2ADFF", "#F2ADFF", "#F2ADFF", "#F2ADFF", "#F2ADFF", "#F2ADFF", "#F2ADFF" ],
glow: [ "#ED83FF", "#ED83FF", "#ED83FF", "#ED83FF", "#ED83FF", "#ED83FF", "#ED83FF" ]
},
1037: {
particle: [ "#FFF6B6", "#FFF6B6", "#FFF6B6", "#FFF6B6", "#FFF6B6", "#FFF6B6", "#FFF6B6" ],
glow: [ "#E2CD5F", "#E2CD5F", "#E2CD5F", "#E2CD5F", "#E2CD5F", "#E2CD5F", "#E2CD5F" ]
},
1038: {
particle: [ "#FFD6D3", "#C2FAFF", "#FFEF9B", "#FFD6D3", "#C2FAFF", "#FFEF9B", "#FFD6D3" ],
glow: [ "#FFB2AC", "#3BE2F1", "#FFD66D", "#FFB2AC", "#3BE2F1", "#FFD66D", "#FFB2AC" ]
},
1039: {
particle: [ "#FFF2B1", "#FFF2B1", "#FFF2B1", "#FFF2B1", "#FFF2B1", "#FFF2B1", "#FFF2B1" ],
glow: [ "#D8BF3A", "#D8BF3A", "#D8BF3A", "#D8BF3A", "#D8BF3A", "#D8BF3A", "#D8BF3A" ]
},
3011: {
particle: [ "#9EE4FF", "#FFED8D", "#F7CEFF", "#FFD57C", "#FFADB0", "#B3FF88", "#A1FFFB" ],
glow: [ "#63C0FF", "#FFE26D", "#F186FF", "#FFA970", "#FF8686", "#90FF6D", "#86F5FF" ]
},
3012: {
particle: [ "#9EE4FF", "#FFED8D", "#F7CEFF", "#FFD57C", "#FFADB0", "#B3FF88", "#A1FFFB" ],
glow: [ "#63C0FF", "#FFE26D", "#F186FF", "#FFA970", "#FF8686", "#90FF6D", "#86F5FF" ]
},
3017: {
particle: [ "#9EE4FF", "#FFED8D", "#F7CEFF", "#FFD57C", "#FFADB0", "#B3FF88", "#A1FFFB" ],
glow: [ "#63C0FF", "#FFE26D", "#F186FF", "#FFA970", "#FF8686", "#90FF6D", "#86F5FF" ]
},
3032: {
particle: [ "#FFED8D", "#FFED8D", "#FFED8D", "#FFED8D", "#FFED8D", "#FFED8D", "#FFED8D" ],
glow: [ "#FFE26D", "#FFE26D", "#FFE26D", "#FFE26D", "#FFE26D", "#FFE26D", "#FFE26D" ]
},
3033: {
particle: [ "#9EE4FF", "#FFED8D", "#F7CEFF", "#FFD57C", "#FFADB0", "#B3FF88", "#A1FFFB" ],
glow: [ "#63C0FF", "#FFE26D", "#F186FF", "#FFA970", "#FF8686", "#90FF6D", "#86F5FF" ]
},
4001: {
particle: [ "#FFADB0", "#FFADB0", "#FFADB0", "#FFADB0", "#FFADB0", "#FFADB0", "#FFADB0" ],
glow: [ "#FF8686", "#FF8686", "#FF8686", "#FF8686", "#FF8686", "#FF8686", "#FF8686" ]
},
4003: {
particle: [ "#FFADB0", "#FFADB0", "#FFADB0", "#FFADB0", "#FFADB0", "#FFADB0", "#FFADB0" ],
glow: [ "#FF8686", "#FF8686", "#FF8686", "#FF8686", "#FF8686", "#FF8686", "#FF8686" ]
},
4004: {
particle: [ "#9EE4FF", "#FFED8D", "#F7CEFF", "#FFD57C", "#FFADB0", "#B3FF88", "#A1FFFB" ],
glow: [ "#63C0FF", "#FFE26D", "#F186FF", "#FFA970", "#FF8686", "#90FF6D", "#86F5FF" ]
},
4005: {
particle: [ "#FFDDED", "#D0FDFD", "#FFDDED", "#D0FDFD", "#FFDDED", "#D0FDFD", "#FFDDED" ],
glow: [ "#FD91A3", "#8AF6FA", "#FD91A3", "#8AF6FA", "#FD91A3", "#8AF6FA", "#FD91A3" ]
},
4007: {
particle: [ "#FFACAC", "#90CAFF", "#E4FFFF", "#E4FFFF", "#FFACAC", "#FFF7C9", "#90CAFF" ],
glow: [ "#FF697B", "#61A7FF", "#BEFDFF", "#BEFDFF", "#FF697B", "#FDD862", "#61A7FF" ]
},
4008: {
particle: [ "#F7A0FF", "#F7CEFF", "#FFADB0", "#B3FF88", "#FFED8D", "#FFD57C", "#F7A0FF" ],
glow: [ "#FF8AEC", "#F186FF", "#FF8686", "#90FF6D", "#FFE26D", "#FFA970", "#FF8AEC" ]
},
4009: {
particle: [ "#FFE6B1", "#8DE06D", "#FFB19E", "#A0FFA0", "#E0FFCC", "#FFDD96", "#8DE06D" ],
glow: [ "#F1D4A7", "#69CA56", "#FF9081", "#56CF8B", "#9FD889", "#F3CA73", "#69CA56" ]
},
4010: {
particle: [ "#9EE4FF", "#FFED8D", "#F7CEFF", "#FFD57C", "#FFADB0", "#B3FF88", "#A1FFFB" ],
glow: [ "#63C0FF", "#FFE26D", "#F186FF", "#FFA970", "#FF8686", "#90FF6D", "#86F5FF" ]
},
4012: {
particle: [ "#F2F8DF", "#FFF1CF", "#E9E1AC", "#C1FCEF", "#E2FFB6", "#FFF8A7", "#F2F8DF" ],
glow: [ "#D5D599", "#EBD293", "#A7A175", "#81C2B5", "#BAE974", "#F1E771", "#D5D599" ]
},
4013: {
particle: [ "#FFC7CE", "#FFFAD3", "#FFC7CE", "#FFFAD3", "#FFC7CE", "#FFFAD3", "#FFC7CE" ],
glow: [ "#FF9EAA", "#E0D269", "#FF9EAA", "#E0D269", "#FF9EAA", "#E0D269", "#FF9EAA" ]
},
4019: {
particle: [ "#FFD6D6", "#FFD6D6", "#FFD6D6", "#FFD6D6", "#FFD6D6", "#FFD6D6", "#FFD6D6" ],
glow: [ "#EE9D9D", "#EE9D9D", "#EE9D9D", "#EE9D9D", "#EE9D9D", "#EE9D9D", "#EE9D9D" ]
},
4020: {
particle: [ "#EAFFE2", "#FFFDE4", "#EAFFE2", "#FFFDE4", "#EAFFE2", "#EAFFE2", "#FFFDE4" ],
glow: [ "#B5FFAA", "#EBE198", "#B5FFAA", "#EBE198", "#B5FFAA", "#B5FFAA", "#EBE198" ]
},
4021: {
particle: [ "#FFADB0", "#FFED8D", "#FFADB0", "#FFED8D", "#FFADB0", "#FFED8D", "#FFED8D" ],
glow: [ "#FF8686", "#FFE26D", "#FF8686", "#FFE26D", "#FF8686", "#FFE26D", "#FFE26D" ]
},
4026: {
particle: [ "#9EE4FF", "#FFC08F", "#F7CEFF", "#FFD57C", "#FFF2BE", "#B3FF88", "#A1FFFB" ],
glow: [ "#63C0FF", "#F79B67", "#F186FF", "#FFA970", "#FFD15A", "#90FF6D", "#86F5FF" ]
},
4027: {
particle: [ "#FFF0D8", "#FFC08F", "#FFF0D8", "#EC9B6D", "#FFF0D8", "#EC9B6D", "#FFF0D8" ],
glow: [ "#E4C89F", "#D88A5E", "#E4C89F", "#D88A5E", "#E4C89F", "#D88A5E", "#E4C89F" ]
},
4028: {
particle: [ "#9EE4FF", "#FFED8D", "#F7CEFF", "#FFD57C", "#FFADB0", "#B3FF88", "#A1FFFB" ],
glow: [ "#63C0FF", "#FFE26D", "#F186FF", "#FFA970", "#FF8686", "#90FF6D", "#86F5FF" ]
},
4033: {
particle: [ "#93F593", "#93F593", "#93F593", "#93F593", "#93F593", "#93F593", "#93F593" ],
glow: [ "#64D364", "#64D364", "#64D364", "#64D364", "#64D364", "#64D364", "#64D364" ]
},
4035: {
particle: [ "#9EE4FF", "#B3FF88", "#FFD57C", "#FFFFFF", "#9EE4FF", "#B3FF88", "#FFD57C" ],
glow: [ "#63C0FF", "#90FF6D", "#FFA970", "#C9F9FD", "#63C0FF", "#90FF6D", "#FFA970" ]
},
4036: {
particle: [ "#9EE4FF", "#9EE4FF", "#9EE4FF", "#9EE4FF", "#9EE4FF", "#9EE4FF", "#9EE4FF" ],
glow: [ "#63C0FF", "#63C0FF", "#63C0FF", "#63C0FF", "#63C0FF", "#63C0FF", "#63C0FF" ]
},
4037: {
particle: [ "#FFED8D", "#FFED8D", "#FFED8D", "#FFED8D", "#FFED8D", "#FFED8D", "#FFED8D" ],
glow: [ "#FFE26D", "#FFE26D", "#FFE26D", "#FFE26D", "#FFE26D", "#FFE26D", "#FFE26D" ]
},
4039: {
particle: [ "#ECF8FF", "#FFEFEE", "#DDFAFF", "#ECF8FF", "#FFEFEE", "#DDFAFF", "#ECF8FF" ],
glow: [ "#D1E8F5", "#F1B0AE", "#98D6E2", "#D1E8F5", "#F1B0AE", "#98D6E2", "#D1E8F5" ]
},
4041: {
particle: [ "#97FFF8", "#97FFF8", "#97FFF8", "#97FFF8", "#97FFF8", "#97FFF8", "#97FFF8" ],
glow: [ "#48EBC3", "#48EBC3", "#48EBC3", "#48EBC3", "#48EBC3", "#48EBC3", "#48EBC3" ]
},
4042: {
particle: [ "#FFFFFF", "#FFFFFF", "#FFFFFF", "#FFFFFF", "#FFFFFF", "#FFFFFF", "#FFFFFF" ],
glow: [ "#C9F9FD", "#C9F9FD", "#C9F9FD", "#C9F9FD", "#C9F9FD", "#C9F9FD", "#C9F9FD" ]
},
4045: {
particle: [ "#FFADB0", "#FFD57C", "#FFADB0", "#FFD57C", "#FFADB0", "#FFD57C", "#FFADB0" ],
glow: [ "#FF8686", "#FFA970", "#FF8686", "#FFA970", "#FF8686", "#FFA970", "#FF8686" ]
},
4048: {
particle: [ "#E0E973", "#71E8F3", "#D6EEAE", "#9DD4FA", "#E0E973", "#71E8F3", "#D6EEAE" ],
glow: [ "#BEC753", "#50CBD6", "#BBD58E", "#72A9CE", "#BEC753", "#50CBD6", "#BBD58E" ]
},
4051: {
particle: [ "#9EE4FF", "#FFED8D", "#F7CEFF", "#FFD57C", "#FFADB0", "#B3FF88", "#A1FFFB" ],
glow: [ "#63C0FF", "#FFE26D", "#F186FF", "#FFA970", "#FF8686", "#90FF6D", "#86F5FF" ]
},
4054: {
particle: [ "#FFD9FF", "#FFD9FF", "#FFD9FF", "#FFD9FF", "#FFD9FF", "#FFD9FF", "#FFD9FF" ],
glow: [ "#FFB0FC", "#FFB0FC", "#FFB0FC", "#FFB0FC", "#FFB0FC", "#FFB0FC", "#FFB0FC" ]
},
4055: {
particle: [ "#FFD57C", "#FFD57C", "#FFD57C", "#FFD57C", "#FFD57C", "#FFD57C", "#FFD57C" ],
glow: [ "#FFA970", "#FFA970", "#FFA970", "#FFA970", "#FFA970", "#FFA970", "#FFA970" ]
},
4060: {
particle: [ "#F7AF61", "#FFE592", "#FFA3A3", "#F7AF61", "#F7AF61", "#FFE592", "#FFA3A3" ],
glow: [ "#E49846", "#D6B756", "#F06868", "#E49846", "#E49846", "#D6B756", "#F06868" ]
},
4061: {
particle: [ "#9EE4FF", "#FFED8D", "#F7CEFF", "#FFD57C", "#FFADB0", "#B3FF88", "#A1FFFB" ],
glow: [ "#63C0FF", "#FFE26D", "#F186FF", "#FFA970", "#FF8686", "#90FF6D", "#86F5FF" ]
},
4063: {
particle: [ "#A1FFFB", "#FFADB0", "#B3FF88", "#FFED8D", "#A1FFFB", "#FFADB0", "#B3FF88" ],
glow: [ "#86F5FF", "#FF8686", "#90FF6D", "#FFE26D", "#86F5FF", "#FF8686", "#90FF6D" ]
},
4066: {
particle: [ "#E5FFFF", "#E5FFFF", "#E5FFFF", "#E5FFFF", "#E5FFFF", "#E5FFFF", "#E5FFFF" ],
glow: [ "#7AE2E2", "#7AE2E2", "#7AE2E2", "#7AE2E2", "#7AE2E2", "#7AE2E2", "#7AE2E2" ]
},
4072: {
particle: [ "#BEF1F8", "#FFED8D", "#F7CEFF", "#FFD57C", "#FFADB0", "#B3EE92", "#FFED8D" ],
glow: [ "#8EC6D8", "#FFE26D", "#C388CA", "#FFA970", "#FF8686", "#86BB75", "#FFE26D" ]
},
4078: {
particle: [ "#FFED8D", "#FFED8D", "#FFED8D", "#FFED8D", "#FFED8D", "#FFED8D", "#FFED8D" ],
glow: [ "#FFE26D", "#FFE26D", "#FFE26D", "#FFE26D", "#FFE26D", "#FFE26D", "#FFE26D" ]
},
4079: {
particle: [ "#FFD9FF", "#9EE4FF", "#A1FFFB", "#FFD9FF", "#9EE4FF", "#A1FFFB", "#FFD9FF" ],
glow: [ "#FFB0FC", "#63C0FF", "#86F5FF", "#FFB0FC", "#63C0FF", "#86F5FF", "#FFB0FC" ]
}
}, l = {
particle: [ "#9EE4FF", "#FFED8D", "#F7CEFF", "#FFD57C", "#FFADB0", "#B3FF88", "#A1FFFB" ],
glow: [ "#63C0FF", "#FFE26D", "#F186FF", "#FFA970", "#FF8686", "#90FF6D", "#86F5FF" ]
}, A = {
1: {
skelPath: "spines/gameplay_preClear_3/gameplay_preClear_3",
atlasPath: "spines/gameplay_preClear_3/gameplay_preClear_3",
animations: [ "in_1", "in_2" ]
},
2: {
skelPath: "spines/gameplay_preClear_4/gameplay_preClear_4",
atlasPath: "spines/gameplay_preClear_4/gameplay_preClear_4",
animations: [ "in" ]
},
3: {
skelPath: "spines/gameplay_preClear_5/gameplay_preClear_5",
atlasPath: "spines/gameplay_preClear_5/gameplay_preClear_5",
animations: [ "in" ]
}
}, C = function(F) {
E(e, F);
function e() {
var e = null !== F && F.apply(this, arguments) || this;
e._effectNodes = [];
e._effectParentNode = null;
e._spineDataLoaded = !1;
e._skeletonData = null;
return e;
}
e.prototype.onCreate = function() {
this.preloadSpineResources();
};
e.prototype.getVersion = function() {
var F;
return (null === (F = this.props) || void 0 === F ? void 0 : F.version) || 1;
};
e.prototype.preloadSpineResources = function() {
return o(this, void 0, Promise, function() {
var F, e, D;
return a(this, function(t) {
switch (t.label) {
case 0:
F = this.getVersion();
if (!(e = A[F])) return [ 2 ];
t.label = 1;

case 1:
t.trys.push([ 1, 3, , 4 ]);
D = this;
return [ 4, hs.ResLoader.asyncLoadByBundle("PreClearScreenAnimOptimizeTrait", e.skelPath, sp.SkeletonData) ];

case 2:
D._skeletonData = t.sent();
this._spineDataLoaded = !0;
return [ 3, 4 ];

case 3:
t.sent();
return [ 3, 4 ];

case 4:
return [ 2 ];
}
});
});
};
Object.defineProperty(e.prototype, "onActiveCondition", {
get: function() {
return hs.gameInfo.gameMode === hs.GameMode.Class;
},
enumerable: !1,
configurable: !0
});
e.prototype.onActive = function(F) {
hs.tp.isSkinThree_PreEliminate_ProxyOnBlockProducerTouchMove(F) && this.onTouchMove(F);
hs.tp.isSkinThree_PreEliminate_ProxyOnBlockProducerTouchEnd(F) && this.onTouchEnd();
};
e.prototype.onTouchMove = function(F) {
var e = F.args[0];
if (null == e ? void 0 : e.state) {
var D = e.state, t = D._showShaders;
t && 0 !== Object.keys(t).length && this.canPlayClearScreenAnim() && this.isAboutToClearScreen(D) ? this.showPreClearEffect(D) : this.clearEffect();
} else this.clearEffect();
};
e.prototype.canPlayClearScreenAnim = function() {
var F = hs.storage.getItem("classGuideStep", 0), e = hs.storage.getItem("classRoundNum", 0);
return F > 2 && e >= 6;
};
e.prototype.isAboutToClearScreen = function(F) {
var e, D, t = F._showShaders;
if (!t || 0 === Object.keys(t).length) return !1;
var E = hs.boardInfo.faceBlocks;
if (!E || 0 === E.length) return !1;
var r = F._canEliminateShaders;
if (!r || 0 === Object.keys(r).length) return !1;
for (var o = 0, a = 0; a < E.length; a++) for (var i = 0; i < E[a].length; i++) {
var n = E[a][i];
if (-1 !== n && 10 !== n) {
var l = a.toString(), A = i.toString();
null !== (e = r[l]) && void 0 !== e && e[A] || o++;
}
}
for (var l in t) for (var A in t[l]) null !== (D = r[l]) && void 0 !== D && D[A] || o++;
return 0 === o;
};
e.prototype.onTouchEnd = function() {
this.clearEffect();
};
e.prototype.showPreClearEffect = function(F) {
if (this._spineDataLoaded && this._skeletonData) {
var e = Cinst(hs.Board);
if (null == e ? void 0 : e.node) {
var D = e.blockOverPreEliminate;
if (D && cc.isValid(D)) {
this._effectParentNode = D;
if (!(this._effectNodes.length > 0) && hs.boardRendererInfo.blocks) {
var t = this.getVersion(), E = A[t];
if (E) {
var r = F.rowsEffect, o = F.colsEffect, a = F.color || 1;
if (r) for (var i in r) if (r[i]) {
var n = parseInt(i);
this.createRowEffect(n, t, E, a);
}
if (o) for (var l in o) if (o[l]) {
var C = parseInt(l);
this.createColEffect(C, t, E, a);
}
}
}
}
}
}
};
e.prototype.createRowEffect = function(F, e, D, t) {
var E, r;
if ((null === (E = Cinst(hs.Board)) || void 0 === E ? void 0 : E.node) && this._effectParentNode) {
var o = hs.boardRendererInfo.blocks;
if (o) {
var a = Math.floor(hs.COL / 2), i = null === (r = o[F]) || void 0 === r ? void 0 : r[a];
if (i) {
var n = i.convertToWorldSpaceAR(cc.Vec2.ZERO), l = this._effectParentNode.parent.convertToNodeSpaceAR(n).y - this._effectParentNode.y, A = this.createSpineNode(D.animations, e, t, {
parent: this._effectParentNode,
x: 0,
y: l,
angle: 0
});
A && this._effectNodes.push(A);
}
}
}
};
e.prototype.createColEffect = function(F, e, D, t) {
var E, r;
if ((null === (E = Cinst(hs.Board)) || void 0 === E ? void 0 : E.node) && this._effectParentNode) {
var o = hs.boardRendererInfo.blocks;
if (o) {
var a = null === (r = o[Math.floor(hs.ROW / 2)]) || void 0 === r ? void 0 : r[F];
if (a) {
var i = a.convertToWorldSpaceAR(cc.Vec2.ZERO), n = this._effectParentNode.parent.convertToNodeSpaceAR(i).x - this._effectParentNode.x, l = this.createSpineNode(D.animations, e, t, {
parent: this._effectParentNode,
x: n,
y: 0,
angle: 90
});
l && this._effectNodes.push(l);
}
}
}
};
e.prototype.createSpineNode = function(F, e, D, t) {
if (!this._skeletonData || 0 === F.length) return null;
var E = new cc.Node("PreClearEffect_" + F.join("_")), r = E.addComponent(sp.Skeleton);
r.premultipliedAlpha = !1;
r.skeletonData = this._skeletonData;
E.setPosition(t.x, t.y);
E.angle = t.angle;
E.setParent(t.parent);
F.forEach(function(F, e) {
0 === e ? r.setAnimation(e, F, !0) : r.addAnimation(e, F, !0);
});
if (1 === e && D > 0) {
var o = this.getPreClearColorFromSkin(D);
E.color = new cc.Color().fromHEX(o.particle);
this.attachSlotColorUpdater(E, r, o.particle, o.glow);
}
E.active = !0;
E.opacity = 255;
return E;
};
e.prototype.attachSlotColorUpdater = function(F, e, D, t) {
var E, r, o = this.parseHexColor(D), a = this.parseHexColor(t);
if (o && a) {
for (var n = {
r: o.r > 0 ? Math.min(a.r / o.r, 1) : 0,
g: o.g > 0 ? Math.min(a.g / o.g, 1) : 0,
b: o.b > 0 ? Math.min(a.b / o.b, 1) : 0
}, l = [], A = 1; A <= 16; A++) (B = e.findSlot("fr_" + A)) && l.push(B);
try {
for (var C = i([ "fr_edge", "fr_edge_1" ]), c = C.next(); !c.done; c = C.next()) {
var B, p = c.value;
(B = e.findSlot(p)) && l.push(B);
}
} catch (F) {
E = {
error: F
};
} finally {
try {
c && !c.done && (r = C.return) && r.call(C);
} finally {
if (E) throw E.error;
}
}
if (0 !== l.length) {
var s = n.r, f = n.g, u = n.b;
F.addComponent(cc.Component).lateUpdate = function() {
for (var F = 0; F < l.length; F++) {
var e = l[F].color;
e.r = s;
e.g = f;
e.b = u;
}
};
}
}
};
e.prototype.parseHexColor = function(F) {
return !F || F.length < 7 ? null : {
r: parseInt(F.slice(1, 3), 16) / 255,
g: parseInt(F.slice(3, 5), 16) / 255,
b: parseInt(F.slice(5, 7), 16) / 255
};
};
e.prototype.getPreClearColorFromSkin = function(F, e) {
var D;
void 0 === e && (e = "#ffffff");
var t = (null === (D = hs.skinInfo) || void 0 === D ? void 0 : D.currentSkinId) || "", E = n[t] || l;
return {
particle: E.particle[F - 1] || e,
glow: E.glow[F - 1] || e
};
};
e.prototype.clearEffect = function() {
var F, e;
this._effectNodes.length;
try {
for (var D = i(this._effectNodes), t = D.next(); !t.done; t = D.next()) {
var E = t.value;
cc.isValid(E) && E.destroy();
}
} catch (e) {
F = {
error: e
};
} finally {
try {
t && !t.done && (e = D.return) && e.call(D);
} finally {
if (F) throw F.error;
}
}
this._effectNodes = [];
this._effectParentNode = null;
};
e.prototype.onDisable = function() {
this.clearEffect();
this._skeletonData = null;
this._spineDataLoaded = !1;
};
e.prototype.onEnable = function() {
this._spineDataLoaded && this._skeletonData || this.preloadSpineResources();
};
return r([ classId("PreClearScreenAnimOptimizeTrait") ], e);
}(Trait);
D.PreClearScreenAnimOptimizeTrait = C;
cc._RF.pop();
}, {} ]
}, {}, [ "PreClearScreenAnimOptimizeTrait" ]);
//# sourceMappingURL=index.js.map
