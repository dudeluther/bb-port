window.__require = function o(r, t, i) {
function n(s, c) {
if (!t[s]) {
if (!r[s]) {
var l = s.split("/");
l = l[l.length - 1];
if (!r[l]) {
var a = "function" == typeof __require && __require;
if (!c && a) return a(l, !0);
if (e) return e(l, !0);
throw new Error("Cannot find module '" + s + "'");
}
s = l;
}
var _ = t[s] = {
exports: {}
};
r[s][0].call(_.exports, function(o) {
return n(r[s][1][o] || o);
}, _, _.exports, o, r, t, i);
}
return t[s].exports;
}
for (var e = "function" == typeof __require && __require, s = 0; s < i.length; s++) n(i[s]);
return n;
}({
ReviveCleanBoardTraitConfig: [ function(o, r, t) {
"use strict";
cc._RF.push(r, "935f0JC7CJJCaM461kfXJCW", "ReviveCleanBoardTraitConfig");
Object.defineProperty(t, "__esModule", {
value: !0
});
t.skinSortColorConfig = void 0;
t.skinSortColorConfig = [ {
skin_id: "1000",
sort_color: "5,4,2,6,7,1,3"
}, {
skin_id: "1001",
sort_color: "1"
}, {
skin_id: "1002",
sort_color: "5,4,2,6,1,3,7"
}, {
skin_id: "1003",
sort_color: "1,2,3,4,5"
}, {
skin_id: "1004",
sort_color: "1,2,3,4,5,6,7"
}, {
skin_id: "1005",
sort_color: "1"
}, {
skin_id: "1006",
sort_color: "4,6,1,3,2,7,5"
}, {
skin_id: "1007",
sort_color: "1,2,3,4"
}, {
skin_id: "1008",
sort_color: "1,2"
}, {
skin_id: "1009",
sort_color: "1,2,3"
}, {
skin_id: "1010",
sort_color: "1,2,3,4"
}, {
skin_id: "1011",
sort_color: "3,6,5,4,2,1"
}, {
skin_id: "1012",
sort_color: "1,2,3,4"
}, {
skin_id: "1013",
sort_color: "1,2,3,4,5,6"
}, {
skin_id: "1014",
sort_color: "1,2,3,4,5,6"
}, {
skin_id: "1015",
sort_color: "1,2,3,4"
}, {
skin_id: "1016",
sort_color: "1,2"
}, {
skin_id: "1017",
sort_color: "2,1,4,3"
}, {
skin_id: "1018",
sort_color: "1,2"
}, {
skin_id: "1019",
sort_color: "1"
}, {
skin_id: "1020",
sort_color: "1"
}, {
skin_id: "1021",
sort_color: "1"
}, {
skin_id: "1022",
sort_color: "5,4,2,6,7,1,3"
}, {
skin_id: "1023",
sort_color: "5,3,7,4,6,2,1"
}, {
skin_id: "1024",
sort_color: "1,2,3"
}, {
skin_id: "1025",
sort_color: "1"
}, {
skin_id: "1026",
sort_color: "1,2,3,4"
}, {
skin_id: "1027",
sort_color: "1,2,3,4"
}, {
skin_id: "1028",
sort_color: "1,2,3,4"
}, {
skin_id: "1029",
sort_color: "1,2,3,4,5"
}, {
skin_id: "1030",
sort_color: "4,2,3,1,5"
}, {
skin_id: "1031",
sort_color: "1,3,2,4"
}, {
skin_id: "1032",
sort_color: "1,2,3"
}, {
skin_id: "1033",
sort_color: "1"
}, {
skin_id: "1034",
sort_color: "1"
}, {
skin_id: "1035",
sort_color: "1"
}, {
skin_id: "1036",
sort_color: "1"
}, {
skin_id: "1037",
sort_color: "1"
}, {
skin_id: "1038",
sort_color: "1,2,3"
}, {
skin_id: "1039",
sort_color: "1"
} ];
cc._RF.pop();
}, {} ],
ReviveCleanBoardTrait: [ function(o, r, t) {
"use strict";
cc._RF.push(r, "c8c78n/2zVFJbOmJe97cyqX", "ReviveCleanBoardTrait");
var i, n = this && this.__extends || (i = function(o, r) {
return (i = Object.setPrototypeOf || {
__proto__: []
} instanceof Array && function(o, r) {
o.__proto__ = r;
} || function(o, r) {
for (var t in r) Object.prototype.hasOwnProperty.call(r, t) && (o[t] = r[t]);
})(o, r);
}, function(o, r) {
i(o, r);
function t() {
this.constructor = o;
}
o.prototype = null === r ? Object.create(r) : (t.prototype = r.prototype, new t());
}), e = this && this.__decorate || function(o, r, t, i) {
var n, e = arguments.length, s = e < 3 ? r : null === i ? i = Object.getOwnPropertyDescriptor(r, t) : i;
if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) s = Reflect.decorate(o, r, t, i); else for (var c = o.length - 1; c >= 0; c--) (n = o[c]) && (s = (e < 3 ? n(s) : e > 3 ? n(r, t, s) : n(r, t)) || s);
return e > 3 && s && Object.defineProperty(r, t, s), s;
};
Object.defineProperty(t, "__esModule", {
value: !0
});
t.ReviveCleanBoardTrait = void 0;
var s = o("../config/ReviveCleanBoardTraitConfig"), c = function(o) {
n(r, o);
function r() {
var r = null !== o && o.apply(this, arguments) || this;
r._currentSkinId = "";
r._skinConfigData = null;
return r;
}
r.prototype.onActive = function(o) {
hs.tp.isClassBlocksProducer_Revive_ProxyOnReviveSuccess(o) && this.onReviveSuccess();
if (hs.tp.isClassGame_ProxyOnClassGameStart(o)) {
this._currentSkinId = "";
this._skinConfigData = null;
}
};
r.prototype.onReviveSuccess = function() {
if (this.isValid()) {
var o = this.getColorsBySkin();
if (!o || o.length <= 1) ; else {
var r = this.findMostFrequentColor();
if (r <= 0) ; else {
var t = o.filter(function(o) {
return o !== r;
});
if (0 !== t.length) {
var i = t[Math.floor(Math.random() * t.length)];
this.transformBoardToColor(i);
}
}
}
}
};
r.prototype.tryAppendSkinColors = function() {};
r.prototype.isValid = function() {
return !1 !== hs.classGuideInfo.isFinishedGuide;
};
r.prototype.getColorsBySkin = function(o) {
void 0 === o && (o = hs.skinInfo.currentSkinId);
var r = String(o), t = this.getSkinSortColorConfigByTrait().find(function(o) {
return o.skin_id === r;
});
return t ? t.sort_color.split(",").map(function(o) {
return parseInt(o, 10);
}) : [];
};
r.prototype.getSkinSortColorConfigByTrait = function() {
return s.skinSortColorConfig;
};
r.prototype.getSkinBlocks = function() {
var o = hs.skinInfo.currentSkinId;
if (this._currentSkinId !== o || !this._skinConfigData || 0 === this._skinConfigData.length) {
var r = hs.skinInfo.currentSkinInfo;
if (!r) return null;
this._currentSkinId = o;
this._skinConfigData = [ r.block1, r.block2, r.block3, r.block4, r.block5, r.block6, r.block7 ];
}
return this._skinConfigData;
};
r.prototype.getActualColor = function(o) {
var r = this.getSkinBlocks();
if (!r || o < 1 || o > r.length) return o;
for (var t = r[o - 1].colorList[4].colorParam, i = 0; i < r.length; i++) if (r[i].colorList[4].colorParam === t) return i + 1;
return o;
};
r.prototype.findMostFrequentColor = function() {
for (var o = hs.storage.getItem("classFaceBlocks", hs.boardInfo.NULL), r = new Map(), t = 0; t < o.length; t++) for (var i = 0; i < o[t].length; i++) {
var n = o[t][i];
if (-1 !== n) {
var e = this.getActualColor(n);
e >= 1 && e <= 7 && r.set(e, (r.get(e) || 0) + 1);
}
}
var s = -1, c = 0;
r.forEach(function(o, r) {
if (o > c) {
c = o;
s = r;
}
});
return s;
};
r.prototype.transformBoardToColor = function(o) {
for (var r = hs.storage.getItem("classFaceBlocks", hs.boardInfo.NULL), t = 0; t < r.length; t++) for (var i = 0; i < r[t].length; i++) -1 !== r[t][i] && (r[t][i] = o);
hs.storage.setItem("classFaceBlocks", r);
var n = Cinst(hs.Board);
n && cc.isValid(n.node) && n.setState({
boards: r
});
};
return e([ classId("ReviveCleanBoardTrait"), classMethodWatch() ], r);
}(Trait);
t.ReviveCleanBoardTrait = c;
cc._RF.pop();
}, {
"../config/ReviveCleanBoardTraitConfig": "ReviveCleanBoardTraitConfig"
} ]
}, {}, [ "ReviveCleanBoardTraitConfig", "ReviveCleanBoardTrait" ]);
//# sourceMappingURL=index.js.map
