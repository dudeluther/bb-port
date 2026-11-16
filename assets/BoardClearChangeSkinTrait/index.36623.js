window.__require = function e(t, r, a) {
function i(o, s) {
if (!r[o]) {
if (!t[o]) {
var h = o.split("/");
h = h[h.length - 1];
if (!t[h]) {
var c = "function" == typeof __require && __require;
if (!s && c) return c(h, !0);
if (n) return n(h, !0);
throw new Error("Cannot find module '" + o + "'");
}
o = h;
}
var p = r[o] = {
exports: {}
};
t[o][0].call(p.exports, function(e) {
return i(t[o][1][e] || e);
}, p, p.exports, e, t, r, a);
}
return r[o].exports;
}
for (var n = "function" == typeof __require && __require, o = 0; o < a.length; o++) i(a[o]);
return i;
}({
BoardClearChangeSkinTrait: [ function(e, t, r) {
"use strict";
cc._RF.push(t, "7127dD2jXRCmoZfpWjBeZ8N", "BoardClearChangeSkinTrait");
var a, i = this && this.__extends || (a = function(e, t) {
return (a = Object.setPrototypeOf || {
__proto__: []
} instanceof Array && function(e, t) {
e.__proto__ = t;
} || function(e, t) {
for (var r in t) Object.prototype.hasOwnProperty.call(t, r) && (e[r] = t[r]);
})(e, t);
}, function(e, t) {
a(e, t);
function r() {
this.constructor = e;
}
e.prototype = null === t ? Object.create(t) : (r.prototype = t.prototype, new r());
}), n = this && this.__decorate || function(e, t, r, a) {
var i, n = arguments.length, o = n < 3 ? t : null === a ? a = Object.getOwnPropertyDescriptor(t, r) : a;
if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) o = Reflect.decorate(e, t, r, a); else for (var s = e.length - 1; s >= 0; s--) (i = e[s]) && (o = (n < 3 ? i(o) : n > 3 ? i(t, r, o) : i(t, r)) || o);
return n > 3 && o && Object.defineProperty(t, r, o), o;
};
Object.defineProperty(r, "__esModule", {
value: !0
});
r.BoardClearChangeSkinTrait = void 0;
var o = function(e) {
i(t, e);
function t() {
var t = null !== e && e.apply(this, arguments) || this;
t.classSaveName = "ClassBoardClearChangeSkin";
t.chapterSaveName = "ChapterBoardClearChangeSkin";
t.saveName = "";
t.boardMap = {};
t.isCanChangeSkin = !1;
t.isSkin = !1;
return t;
}
t.prototype.onActive = function(e) {
this.saveName = hs.gameInfo.gameMode == hs.GameMode.Class ? this.classSaveName : this.chapterSaveName;
hs.tp.isIsOpenChangeSkinTraitBlockParentOpacity(e) && this.isSkin && (e.returnValue = !0);
hs.tp.isIsOpenChangeSkinTraitBlockOpacity(e) && this.isSkin && (e.returnValue = !0);
if (hs.tp.isSkin_BoardClear_ProxyOnBoardReadyComplete(e)) {
if (this.isDeny()) return;
this.isSkin = !1;
this.isCanChangeSkin = !1;
var t = e.args[0].newGame;
this.boardMap = {};
if (t) {
for (var r = hs.boardInfo.faceBlocks, a = 0; a < r.length; a++) for (var i = 0; i < r[a].length; i++) {
var n = a + "," + i, o = r[a][i];
-1 != o && (this.boardMap[n] = o);
}
storage.setItem(this.saveName, this.boardMap);
} else this.boardMap = storage.getItem(this.saveName, {});
Object.keys(this.boardMap).length > 0 && (this.isCanChangeSkin = !0);
}
if (hs.tp.isSkin_BoardClear_ProxyOnGameReplay(e)) {
if (this.isDeny()) return;
this.isSkin = !1;
this.isCanChangeSkin = !1;
this.boardMap = {};
storage.setItem(this.saveName, {});
}
if (hs.tp.isSkin_BoardClear_ProxyOnBlocksProducerTouchEnd(e)) {
if (this.isDeny()) return;
if (this.isCanChangeSkin) {
this.isSkin = !1;
var s = e.args[0].state, h = s.eliminateInfos, c = s.clearScreen;
for (var a in h) for (var i in h[a]) this.deleteKeyBoard(a + "," + i);
h && Object.keys(h).length > 0 && storage.setItem(this.saveName, this.boardMap);
if (Object.keys(this.boardMap).length <= 0) {
this.isCanChangeSkin = !1;
if (c && hs.classGameInfo.roundNum > 5) return;
this.isSkin = !0;
hs.skinTraitInfo.changeSkin();
this.changeSkinTrigger();
}
}
}
};
t.prototype.deleteKeyBoard = function(e) {
this.boardMap.hasOwnProperty(e) && delete this.boardMap[e];
};
t.prototype.changeSkinTrigger = function() {};
t.prototype.isDeny = function() {
return hs.gameInfo.gameMode == hs.GameMode.Chapter;
};
return n([ classId("BoardClearChangeSkinTrait"), classMethodWatch() ], t);
}(Trait);
r.BoardClearChangeSkinTrait = o;
cc._RF.pop();
}, {} ]
}, {}, [ "BoardClearChangeSkinTrait" ]);
//# sourceMappingURL=index.js.map
