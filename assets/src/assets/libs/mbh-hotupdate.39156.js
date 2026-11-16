!function(t, e) {
"object" == typeof exports && "undefined" != typeof module ? e(exports) : "function" == typeof define && define.amd ? define([ "exports" ], e) : e((t = "undefined" != typeof globalThis ? globalThis : t || self).MBHHotUpdate = {});
}(this, function(exports) {
"use strict";
let EventManager = new cc.EventTarget();
const SHOWBLOCK = "SHOWBLOCK", HIDEBLOCK = "HIDEBLOCK", SHOWTIPS = "SHOWTIPS", UPDATE_PROGRESSION = "UPDATE_PROGRESSION", UPDATE_FINISH = "UPDATE_FINISH", UPDATE_FAILED = "UPDATE_FAILED", UPDATE_CHECK_RETRY = "UPDATE_CHECK_RETRY", UPDATE_RETRY = "UPDATE_RETRY", UPDATE_RETRY_CHECK_OVER = "UPDATE_RETRY_CHECK_OVER";
var updatePoint;
exports.updatePoint = void 0, updatePoint = exports.updatePoint || (exports.updatePoint = {}), 
updatePoint[updatePoint.LOGIN_TIMEOUT = 1e3] = "LOGIN_TIMEOUT", updatePoint[updatePoint.LOGIN_ERROR = 1001] = "LOGIN_ERROR", 
updatePoint[updatePoint.LOGIN_SUCCESS = 1002] = "LOGIN_SUCCESS", updatePoint[updatePoint.LINKDATA_MISSING = 1003] = "LINKDATA_MISSING", 
updatePoint[updatePoint.VERSION_LOW = 1004] = "VERSION_LOW", updatePoint[updatePoint.FORCE_UPDATE = 1005] = "FORCE_UPDATE", 
updatePoint[updatePoint.FORCE_UPDATE_CLICK = 1006] = "FORCE_UPDATE_CLICK", updatePoint[updatePoint.CHECK_UPDATE = 1007] = "CHECK_UPDATE", 
updatePoint[updatePoint.LOCAL_MANIFEST_LOAD_FAIL = 1008] = "LOCAL_MANIFEST_LOAD_FAIL", 
updatePoint[updatePoint.ERROR_DOWNLOAD_MANIFEST = 1009] = "ERROR_DOWNLOAD_MANIFEST", 
updatePoint[updatePoint.ERROR_PARSE_MANIFEST = 1010] = "ERROR_PARSE_MANIFEST", updatePoint[updatePoint.ALREADY_UP_TO_DATE = 1011] = "ALREADY_UP_TO_DATE", 
updatePoint[updatePoint.NEW_VERSION_FOUND = 1012] = "NEW_VERSION_FOUND", updatePoint[updatePoint.MANIFEST_FILE_DOWNLOADED = 1013] = "MANIFEST_FILE_DOWNLOADED", 
updatePoint[updatePoint.UPDATE_START = 1014] = "UPDATE_START", updatePoint[updatePoint.UPDATE_PROGRESSION = 1015] = "UPDATE_PROGRESSION", 
updatePoint[updatePoint.UPDATE_FINISHED = 1016] = "UPDATE_FINISHED", updatePoint[updatePoint.UPDATE_FAILED_TO_RETRY = 1017] = "UPDATE_FAILED_TO_RETRY", 
updatePoint[updatePoint.UPDATE_CHECK_FAILED = 1018] = "UPDATE_CHECK_FAILED", updatePoint[updatePoint.UPDATE_FAILED = 1019] = "UPDATE_FAILED", 
updatePoint[updatePoint.SPACE_NOT_ENOUGH = 1020] = "SPACE_NOT_ENOUGH", updatePoint[updatePoint.UPDATE_TIMEOUT = 1021] = "UPDATE_TIMEOUT", 
updatePoint[updatePoint.REMOTE_COMMOND_FAIL = 1022] = "REMOTE_COMMOND_FAIL", updatePoint[updatePoint.REMOTE_COMMOND_SUCCESS = 1023] = "REMOTE_COMMOND_SUCCESS", 
updatePoint[updatePoint.G_CFG_ERROR = 1024] = "G_CFG_ERROR", updatePoint[updatePoint.ZIP_UPDATE_START = 2e3] = "ZIP_UPDATE_START", 
updatePoint[updatePoint.ZIP_VERSION_INFO = 2001] = "ZIP_VERSION_INFO", updatePoint[updatePoint.ZIP_DOWNLOAD_PROGRESS = 2002] = "ZIP_DOWNLOAD_PROGRESS", 
updatePoint[updatePoint.ZIP_DOWNLOAD_SUCCESS = 2003] = "ZIP_DOWNLOAD_SUCCESS", updatePoint[updatePoint.ZIP_DOWNLOAD_FAILED = 2004] = "ZIP_DOWNLOAD_FAILED", 
updatePoint[updatePoint.ZIP_DOWNLOAD_RETRY = 2005] = "ZIP_DOWNLOAD_RETRY", updatePoint[updatePoint.ZIP_UNZIP_START = 2006] = "ZIP_UNZIP_START", 
updatePoint[updatePoint.ZIP_UNZIP_SUCCESS = 2007] = "ZIP_UNZIP_SUCCESS", updatePoint[updatePoint.ZIP_UNZIP_FAILED = 2008] = "ZIP_UNZIP_FAILED", 
updatePoint[updatePoint.ZIP_UPDATE_FINISHED = 2009] = "ZIP_UPDATE_FINISHED", updatePoint[updatePoint.ZIP_UPDATE_FAILED = 2010] = "ZIP_UPDATE_FAILED", 
updatePoint[updatePoint.TEXTURE_SUPPORT = 3e3] = "TEXTURE_SUPPORT", updatePoint[updatePoint.INIT_INVALID = 510001] = "INIT_INVALID", 
updatePoint[updatePoint.BASE_APP_ERROR = 510002] = "BASE_APP_ERROR", updatePoint[updatePoint.ENTER_GAME_REENTRY = 510003] = "ENTER_GAME_REENTRY", 
updatePoint[updatePoint.LOGIN_USE_CACHE = 510010] = "LOGIN_USE_CACHE", updatePoint[updatePoint.LOGIN_NO_DATA_NO_CACHE = 510011] = "LOGIN_NO_DATA_NO_CACHE", 
updatePoint[updatePoint.LINKDATA_MISSING_CACHE = 510012] = "LINKDATA_MISSING_CACHE", 
updatePoint[updatePoint.VERSION_HIGH = 510020] = "VERSION_HIGH", updatePoint[updatePoint.HOT_RATE_LIMITED = 510021] = "HOT_RATE_LIMITED", 
updatePoint[updatePoint.CUSTOM_HOT_DISABLED = 510022] = "CUSTOM_HOT_DISABLED", updatePoint[updatePoint.REMOTE_SAME_VERSION = 510023] = "REMOTE_SAME_VERSION", 
updatePoint[updatePoint.REMOTE_CMD_CLEAN_RES = 510030] = "REMOTE_CMD_CLEAN_RES", 
updatePoint[updatePoint.REMOTE_CMD_TIPS = 510031] = "REMOTE_CMD_TIPS", updatePoint[updatePoint.LOGIN_PARSE_ERROR_ONCE = 510040] = "LOGIN_PARSE_ERROR_ONCE", 
updatePoint[updatePoint.LOGIN_HTTP_ERROR_ONCE = 510041] = "LOGIN_HTTP_ERROR_ONCE", 
updatePoint[updatePoint.LOGIN_NO_URL = 510042] = "LOGIN_NO_URL", updatePoint[updatePoint.LOGIN_NO_NETWORK = 510043] = "LOGIN_NO_NETWORK", 
updatePoint[updatePoint.ENTER_UPDATE_BLOCKED = 510050] = "ENTER_UPDATE_BLOCKED", 
updatePoint[updatePoint.LOCAL_NATIVE_URL_MISSING = 511001] = "LOCAL_NATIVE_URL_MISSING", 
updatePoint[updatePoint.CHECK_NO_REMOTE_URL = 511002] = "CHECK_NO_REMOTE_URL", updatePoint[updatePoint.CHECK_REENTRY = 511003] = "CHECK_REENTRY", 
updatePoint[updatePoint.IGNORE_UPDATE = 511004] = "IGNORE_UPDATE", updatePoint[updatePoint.ASSET_UPDATE_ERROR = 511010] = "ASSET_UPDATE_ERROR", 
updatePoint[updatePoint.ASSET_TMP_REMOVE_FAIL = 511011] = "ASSET_TMP_REMOVE_FAIL", 
updatePoint[updatePoint.DECOMPRESS_ERROR = 511012] = "DECOMPRESS_ERROR", updatePoint[updatePoint.ZIP_PATCH_CLEANUP_FAIL = 512002] = "ZIP_PATCH_CLEANUP_FAIL", 
updatePoint[updatePoint.ZIP_TEMP_CLEANUP_FAIL = 512003] = "ZIP_TEMP_CLEANUP_FAIL", 
updatePoint[updatePoint.ZIP_CANCEL_FAIL = 512004] = "ZIP_CANCEL_FAIL", updatePoint[updatePoint.ZIP_FALLBACK_SCATTER_SUCC = 512005] = "ZIP_FALLBACK_SCATTER_SUCC", 
updatePoint[updatePoint.ZIP_FORCE_ALWAYS_SCATTER = 512006] = "ZIP_FORCE_ALWAYS_SCATTER", 
updatePoint[updatePoint.ZIP_VERIFY_SUCCESS = 512007] = "ZIP_VERIFY_SUCCESS", updatePoint[updatePoint.ZIP_VERIFY_FAIL = 512008] = "ZIP_VERIFY_FAIL", 
updatePoint[updatePoint.ZIP_UNZIP_TEMP_CLEANUP_FAIL = 512009] = "ZIP_UNZIP_TEMP_CLEANUP_FAIL", 
window.G_Cfg = window.G_Cfg || {};
class Updater {
constructor() {
this._updating = !1, this._storagePath = "", this._am = null, this._checkOverCallback = null, 
this._updateCallback = null, this._updateOverCallback = null, this._updateStartTime = Date.now(), 
this._progressStatisCount = 20, this._remoteManifestRootUrl = "", this._retryCurrentTimes = 0, 
this._srcTotalBytes = 0, this._allDownloadBytes = 0, this._cancelUpdate = !1, this._isDeferred = !0, 
this._nativeUrl = "assets/project.manifest", this._cachePath = "patch", this._updateInfo = "", 
this.remoteVersion = "", this.tracePoint = null;
}
static getInstance() {
return this._instance || (this._instance = new Updater().init()), this._instance;
}
init() {
return jsb.fileUtils.isFileExist(this._nativeUrl) || (this.sendStatistic({
id: exports.updatePoint.LOCAL_NATIVE_URL_MISSING,
desc: this._nativeUrl
}), this._nativeUrl = ""), this._storagePath = (jsb.fileUtils ? jsb.fileUtils.getWritablePath() : "/") + this._cachePath, 
this.ignoreUpdate() || this.initAssetManager(), this;
}
initAssetManager() {
var t, e;
this._am = new jsb.AssetsManager(this._nativeUrl, this._storagePath, this.versionCompare), 
this.deferredEffect(this._isDeferred), null === (e = null === (t = this._am) || void 0 === t ? void 0 : t.setNeedToCheckMd5) || void 0 === e || e.call(t, !0);
}
versionCompare(t, e) {
const i = t.split("."), s = e.split(".");
for (let t = 0; t < i.length; ++t) if (parseInt(i[t]) !== parseInt(s[t] || "0")) return -1;
return s.length !== i.length ? -1 : 0;
}
getVersion() {
var t, e;
return (null === (e = null === (t = this._am) || void 0 === t ? void 0 : t.getLocalManifest()) || void 0 === e ? void 0 : e.getVersion()) || "1.1.1.1.1";
}
getUpdateVersion() {
var t, e;
return (null === (e = null === (t = this._am) || void 0 === t ? void 0 : t.getRemoteManifest()) || void 0 === e ? void 0 : e.getVersion()) || this.getVersion();
}
getRemoteManifestRootUrl() {
return this._remoteManifestRootUrl;
}
checkUpdate(t, e, i) {
if (this._updateInfo = this._updateInfo || `${this.getVersion()}=>${this.remoteVersion}`, 
this.ignoreUpdate()) null == e || e(); else {
if (!i) throw new Error("remoteManifestRootUrl is null");
if (this._remoteManifestRootUrl = i, this._updateCallback = t, this._checkOverCallback = e, 
this._updating) return void EventManager.emit(SHOWTIPS, "Checking or updating...");
if (this.setRemoteManifestRootUrl(), !this._am.getLocalManifest() || !this._am.getLocalManifest().isLoaded()) return EventManager.emit(SHOWTIPS, "Failed to load local manifest ..."), 
this.sendStatistic({
id: exports.updatePoint.LOCAL_MANIFEST_LOAD_FAIL,
desc: this._updateInfo
}), void (null == e || e());
this._am.setEventCallback(this.checkCb.bind(this)), this._updateStartTime = Date.now(), 
this._am.checkUpdate(), this._updating = !0;
}
}
ignoreUpdate() {
return !((cc.sys.os === cc.sys.OS_ANDROID || cc.sys.os === cc.sys.OS_IOS) && cc.sys.isNative && !G_Cfg.skipHotPatch && jsb.fileUtils.isFileExist(this._nativeUrl));
}
checkCb(t) {
var e;
let i = !1, s = !1;
const a = `checkCb, eventCode=${t.getEventCode()}`;
switch (t.getEventCode()) {
case jsb.EventAssetsManager.ERROR_NO_LOCAL_MANIFEST:
EventManager.emit(SHOWTIPS, a), this.sendStatistic({
id: exports.updatePoint.LOCAL_MANIFEST_LOAD_FAIL,
desc: `${this._updateInfo},msg=${t.getMessage()}`
});
break;

case jsb.EventAssetsManager.ERROR_DOWNLOAD_MANIFEST:
EventManager.emit(SHOWTIPS, a), this.sendStatistic({
id: exports.updatePoint.ERROR_DOWNLOAD_MANIFEST,
desc: `${this._updateInfo},msg=${t.getMessage()}`
}), i = !0;
break;

case jsb.EventAssetsManager.ERROR_PARSE_MANIFEST:
EventManager.emit(SHOWTIPS, a), this.sendStatistic({
id: exports.updatePoint.ERROR_PARSE_MANIFEST,
desc: `${this._updateInfo},msg=${t.getMessage()}`
}), i = !0;
break;

case jsb.EventAssetsManager.ALREADY_UP_TO_DATE:
return this._am.setEventCallback(null), this._updating = !1, EventManager.emit(SHOWTIPS, a), 
this.sendStatistic({
id: exports.updatePoint.ALREADY_UP_TO_DATE,
desc: this._updateInfo
}), void (null === (e = this._checkOverCallback) || void 0 === e || e.call(this));

case jsb.EventAssetsManager.NEW_VERSION_FOUND:
this._am.setEventCallback(null), this._updating = !1;
const n = this.getTotalBytes();
if (this.sendStatistic({
id: exports.updatePoint.NEW_VERSION_FOUND,
desc: `${this._updateInfo}, size=${t.getTotalBytes()}`
}), !this._srcTotalBytes) {
EventManager.emit(SHOWTIPS, `size:${this.getTotalCount()}`), this._srcTotalBytes = n;
const t = this._updateCallback;
return this._updateCallback = null, void (null == t || t());
}
s = !0, this._allDownloadBytes = this._srcTotalBytes - n;
break;

case jsb.EventAssetsManager.UPDATE_PROGRESSION:
return void this.sendStatistic({
id: exports.updatePoint.MANIFEST_FILE_DOWNLOADED,
desc: this._updateInfo
});

default:
return;
}
if (this._am.setEventCallback(null), this._updating = !1, i) return this.resetAssetManager(), 
void EventManager.emit(UPDATE_CHECK_RETRY);
s && EventManager.emit(UPDATE_RETRY_CHECK_OVER, {
callback: () => {
this.hotUpdate();
}
});
}
getTotalBytes() {
var t;
return (null === (t = this._am) || void 0 === t ? void 0 : t.getTotalBytes()) || 0;
}
getTotalCount() {
const t = (this.getTotalBytes() / 1048576).toFixed(2);
return Number(t);
}
hotUpdate(t) {
cc.sys.isNative && this._am && !this._updating && (this.sendStatistic({
id: exports.updatePoint.UPDATE_START,
desc: this._updateInfo
}), this._updateOverCallback = t || this._updateOverCallback, this._am.setEventCallback(this.updateCb.bind(this)), 
this._am.update());
}
updateCb(t) {
var e;
let i = !1, s = !1, a = !1;
const n = `updateCb, eventCode=${t.getEventCode()}`;
switch (t.getEventCode()) {
case jsb.EventAssetsManager.UPDATE_PROGRESSION:
const e = t.getPercent(), o = t.getDownloadedBytes() + this._allDownloadBytes, r = (o / 1048576).toFixed(2);
EventManager.emit(UPDATE_PROGRESSION, {
byteProgress: o / this._srcTotalBytes,
downloadSize: r,
downloadBytes: o
}), Math.floor(100 * e) >= this._progressStatisCount && (this._progressStatisCount += 20, 
this.sendStatistic({
id: exports.updatePoint.UPDATE_PROGRESSION,
desc: this._updateInfo
}), EventManager.emit(UPDATE_PROGRESSION));
break;

case jsb.EventAssetsManager.UPDATE_FAILED:
EventManager.emit(SHOWTIPS, "UPDATE_FAILED:" + t.getMessage()), this._retryCurrentTimes++, 
this._retryCurrentTimes > Updater.RETRY_TOTAL_TIMES ? s = !0 : a = !0, this.sendStatistic({
id: exports.updatePoint.UPDATE_FAILED_TO_RETRY,
desc: `${this._updateInfo},retryCurrentTimes=${this._retryCurrentTimes},assetId=${t.getAssetId()},msg=${t.getMessage()}`
});
break;

case jsb.EventAssetsManager.UPDATE_FINISHED:
i = !0, this.sendStatistic({
id: exports.updatePoint.UPDATE_FINISHED,
desc: `${this._updateInfo},costTime=${Date.now() - this._updateStartTime}`
}), EventManager.emit(UPDATE_FINISH);
break;

case jsb.EventAssetsManager.ERROR_UPDATING:
EventManager.emit(SHOWTIPS, `(ERROR_UPDATING:${t.getAssetId()},${t.getMessage()})`);
try {
(t.getMessage() || "").includes("(416)") && jsb.fileUtils.removeFile(`${this._storagePath}_temp/${t.getAssetId()}.tmp`);
} catch (t) {
this.sendStatistic({
id: exports.updatePoint.ASSET_TMP_REMOVE_FAIL
});
}
break;

case jsb.EventAssetsManager.ERROR_DECOMPRESS:
EventManager.emit(SHOWTIPS, n), this.sendStatistic({
id: exports.updatePoint.DECOMPRESS_ERROR,
desc: `${this._updateInfo},assetId=${t.getAssetId()},msg=${t.getMessage()}`
});
}
if (!this._cancelUpdate) return i ? (this.resetRetryStatus(), this._am.setEventCallback(null), 
void (null === (e = this._updateOverCallback) || void 0 === e || e.call(this))) : s ? (this.resetRetryStatus(), 
this._am.setEventCallback(null), void EventManager.emit(UPDATE_FAILED)) : a ? (this.resetAssetManager(), 
this.setRemoteManifestRootUrl(), void EventManager.emit(UPDATE_RETRY, {
callback: () => {
this._am.setEventCallback(this.checkCb.bind(this)), this._am.checkUpdate(), this._updating = !0;
}
})) : void 0;
this.resetRetryStatus();
}
setRemoteManifestRootUrl() {
this._am && this._am.setRemoteManifestRootUrl && this._remoteManifestRootUrl && this._am.setRemoteManifestRootUrl(this._remoteManifestRootUrl);
}
resetRetryStatus() {
this._retryCurrentTimes = 0, this._srcTotalBytes = 0, this._allDownloadBytes = 0;
}
cancelUpdate() {
var t;
this._cancelUpdate = !0, null === (t = this._am) || void 0 === t || t.cancelUpdate();
}
setMaxConcurrentTask(t) {
var e;
null === (e = this._am) || void 0 === e || e.setMaxConcurrentTask(t);
}
deferredEffect(t) {
var e, i;
this._isDeferred = t, null === (i = null === (e = this._am) || void 0 === e ? void 0 : e.setHotUpdateDeferred) || void 0 === i || i.call(e, this._isDeferred);
}
resetAssetManager() {
var t;
this._cancelUpdate = !1, this._updating = !1, null === (t = this._am) || void 0 === t || t.setEventCallback(null), 
this._am = null, this.initAssetManager();
}
sendStatistic(t) {
var e;
t.version = this.getVersion(), null === (e = this.tracePoint) || void 0 === e || e.call(this, t);
}
}
function safeAdd(t, e) {
const i = (65535 & t) + (65535 & e);
return (t >> 16) + (e >> 16) + (i >> 16) << 16 | 65535 & i;
}
function rol(t, e) {
return t << e | t >>> 32 - e;
}
function cmn(t, e, i, s, a, n) {
return safeAdd(rol(safeAdd(safeAdd(e, t), safeAdd(s, n)), a), i);
}
function ff(t, e, i, s, a, n, o) {
return cmn(e & i | ~e & s, t, e, a, n, o);
}
function gg(t, e, i, s, a, n, o) {
return cmn(e & s | i & ~s, t, e, a, n, o);
}
function hh(t, e, i, s, a, n, o) {
return cmn(e ^ i ^ s, t, e, a, n, o);
}
function ii(t, e, i, s, a, n, o) {
return cmn(i ^ (e | ~s), t, e, a, n, o);
}
function binlMD5(t, e) {
let i = 1732584193, s = -271733879, a = -1732584194, n = 271733878;
for (let o = 0; o < t.length; o += 16) {
if (e > 0 && !(16383 & o) && Date.now() > e) return null;
const r = i, _ = s, d = a, l = n;
i = ff(i, s, a, n, t[o], 7, -680876936), n = ff(n, i, s, a, t[o + 1], 12, -389564586), 
a = ff(a, n, i, s, t[o + 2], 17, 606105819), s = ff(s, a, n, i, t[o + 3], 22, -1044525330), 
i = ff(i, s, a, n, t[o + 4], 7, -176418897), n = ff(n, i, s, a, t[o + 5], 12, 1200080426), 
a = ff(a, n, i, s, t[o + 6], 17, -1473231341), s = ff(s, a, n, i, t[o + 7], 22, -45705983), 
i = ff(i, s, a, n, t[o + 8], 7, 1770035416), n = ff(n, i, s, a, t[o + 9], 12, -1958414417), 
a = ff(a, n, i, s, t[o + 10], 17, -42063), s = ff(s, a, n, i, t[o + 11], 22, -1990404162), 
i = ff(i, s, a, n, t[o + 12], 7, 1804603682), n = ff(n, i, s, a, t[o + 13], 12, -40341101), 
a = ff(a, n, i, s, t[o + 14], 17, -1502002290), i = gg(i, s = ff(s, a, n, i, t[o + 15], 22, 1236535329), a, n, t[o + 1], 5, -165796510), 
n = gg(n, i, s, a, t[o + 6], 9, -1069501632), a = gg(a, n, i, s, t[o + 11], 14, 643717713), 
s = gg(s, a, n, i, t[o], 20, -373897302), i = gg(i, s, a, n, t[o + 5], 5, -701558691), 
n = gg(n, i, s, a, t[o + 10], 9, 38016083), a = gg(a, n, i, s, t[o + 15], 14, -660478335), 
s = gg(s, a, n, i, t[o + 4], 20, -405537848), i = gg(i, s, a, n, t[o + 9], 5, 568446438), 
n = gg(n, i, s, a, t[o + 14], 9, -1019803690), a = gg(a, n, i, s, t[o + 3], 14, -187363961), 
s = gg(s, a, n, i, t[o + 8], 20, 1163531501), i = gg(i, s, a, n, t[o + 13], 5, -1444681467), 
n = gg(n, i, s, a, t[o + 2], 9, -51403784), a = gg(a, n, i, s, t[o + 7], 14, 1735328473), 
i = hh(i, s = gg(s, a, n, i, t[o + 12], 20, -1926607734), a, n, t[o + 5], 4, -378558), 
n = hh(n, i, s, a, t[o + 8], 11, -2022574463), a = hh(a, n, i, s, t[o + 11], 16, 1839030562), 
s = hh(s, a, n, i, t[o + 14], 23, -35309556), i = hh(i, s, a, n, t[o + 1], 4, -1530992060), 
n = hh(n, i, s, a, t[o + 4], 11, 1272893353), a = hh(a, n, i, s, t[o + 7], 16, -155497632), 
s = hh(s, a, n, i, t[o + 10], 23, -1094730640), i = hh(i, s, a, n, t[o + 13], 4, 681279174), 
n = hh(n, i, s, a, t[o], 11, -358537222), a = hh(a, n, i, s, t[o + 3], 16, -722521979), 
s = hh(s, a, n, i, t[o + 6], 23, 76029189), i = hh(i, s, a, n, t[o + 9], 4, -640364487), 
n = hh(n, i, s, a, t[o + 12], 11, -421815835), a = hh(a, n, i, s, t[o + 15], 16, 530742520), 
i = ii(i, s = hh(s, a, n, i, t[o + 2], 23, -995338651), a, n, t[o], 6, -198630844), 
n = ii(n, i, s, a, t[o + 7], 10, 1126891415), a = ii(a, n, i, s, t[o + 14], 15, -1416354905), 
s = ii(s, a, n, i, t[o + 5], 21, -57434055), i = ii(i, s, a, n, t[o + 12], 6, 1700485571), 
n = ii(n, i, s, a, t[o + 3], 10, -1894986606), a = ii(a, n, i, s, t[o + 10], 15, -1051523), 
s = ii(s, a, n, i, t[o + 1], 21, -2054922799), i = ii(i, s, a, n, t[o + 8], 6, 1873313359), 
n = ii(n, i, s, a, t[o + 15], 10, -30611744), a = ii(a, n, i, s, t[o + 6], 15, -1560198380), 
s = ii(s, a, n, i, t[o + 13], 21, 1309151649), i = ii(i, s, a, n, t[o + 4], 6, -145523070), 
n = ii(n, i, s, a, t[o + 11], 10, -1120210379), a = ii(a, n, i, s, t[o + 2], 15, 718787259), 
s = ii(s, a, n, i, t[o + 9], 21, -343485551), i = safeAdd(i, r), s = safeAdd(s, _), 
a = safeAdd(a, d), n = safeAdd(n, l);
}
return [ i, s, a, n ];
}
function wordsToHex(t) {
const e = "0123456789abcdef";
let i = "";
for (let s = 0; s < t.length; s++) {
const a = t[s];
for (let t = 0; t < 4; t++) {
const s = a >> 8 * t & 255;
i += e.charAt(s >> 4 & 15) + e.charAt(15 & s);
}
}
return i;
}
function md5FromBytes(t, e = 0) {
const i = e > 0 ? Date.now() + e : 0, s = t.length, a = 8 * s, n = 16 + (a + 64 >>> 9 << 4), o = new Array(n);
for (let t = 0; t < n; t++) o[t] = 0;
for (let e = 0; e < s; e++) o[e >> 2] |= t[e] << 8 * (3 & e);
o[s >> 2] |= 128 << 8 * (3 & s), o[n - 2] = a;
const r = binlMD5(o, i);
return r ? wordsToHex(r) : null;
}
Updater._instance = null, Updater.RETRY_TOTAL_TIMES = 3;
class ZipUpdater {
constructor() {
this._retryCount = 0, this._updateStartTime = 0, this._downloader = null, this._progressLogCount = 20, 
this._hasReportedVersionInfo = !1, this._options = null, this._zipTempPath = "", 
this._patchTempPath = "", this._unzipTempPath = "", this._zipFilePath = "", this._zipUrl = "", 
this._updaeInfo = "", this._taskId = null, this._downloadUrl = "";
}
static getInstance() {
return this._instance || (this._instance = new ZipUpdater()), this._instance;
}
static canUseZipUpdate(t) {
var e;
try {
const i = "function" == typeof jsb.fileUtils.unzip, s = "function" == typeof jsb.DownloadClient;
return !!((null === (e = G_Cfg.zipV) || void 0 === e ? void 0 : e.includes(t)) && i && s);
} catch (t) {
return !1;
}
}
static isVerifyEnabled() {
try {
if (!1 === G_Cfg.zipVerifyMd5) return !1;
} catch (t) {}
try {
return "function" == typeof jsb.fileUtils.getFileHash;
} catch (t) {
return !1;
}
}
startUpdate(t) {
this._options = t, this._updateStartTime = Date.now(), this._retryCount = 0, this._progressLogCount = 20, 
this._hasReportedVersionInfo = !1, this._zipTempPath = t.writablePath + "zip_temp", 
this._patchTempPath = t.writablePath + "patch_temp", this._unzipTempPath = t.writablePath + "patch_check";
const e = `${t.version}_${t.remoteVersion}.zip`;
this._zipFilePath = `${this._zipTempPath}/${e}`, this._zipUrl = `${t.cdnUrl}/${t.version}.zip`, 
this._downloadUrl = this._zipUrl, this._updaeInfo = `${t.version}=>${t.remoteVersion}`, 
this.sendStatistic({
id: exports.updatePoint.ZIP_UPDATE_START,
desc: this._updaeInfo
}), this.downloadWithRetry();
}
downloadWithRetry() {
if (!this._options) return;
if (!this._options.isNetworkValid()) return void this.onUpdateFailed("网络异常");
const t = this.getUnzipRequireMB();
this._options.availableDiskSize(t > 0 ? t : void 0) ? (this._retryCount++, this.downloadZip()) : this.onUpdateFailed(t > 0 ? `磁盘空间不足,需≈${t}MB` : "磁盘空间不足");
}
downloadZip() {
if (!this._options) return;
jsb.fileUtils.isDirectoryExist(this._zipTempPath) || jsb.fileUtils.createDirectory(this._zipTempPath);
const t = this._downloadUrl;
this._zipUrl;
const e = Date.now();
this.cancelUpdate(), this._downloader = new jsb.DownloadClient({
maxConcurrentTasks: 5,
enableResume: !0
}), this._taskId = this._downloader.downloadFile({
url: t,
path: this._zipFilePath,
success: () => {
const t = Date.now() - e;
this.sendStatistic({
id: exports.updatePoint.ZIP_DOWNLOAD_SUCCESS,
desc: `${this._updaeInfo},costTime=${t}ms`
}), this.unzipUpdate();
},
failure: (t, e, i, s, a) => {
const n = `zip下载失败: url=${e}, code=${i}, httpStatus=${s}, msg=${a}`;
this.sendStatistic({
id: exports.updatePoint.ZIP_DOWNLOAD_FAILED,
desc: `${this._updaeInfo}, msg=${n},retry=${this._retryCount}`
}), this.handleRetry(`下载失败:${a}`);
},
progress: (t, e, i, s) => {
if (!this._hasReportedVersionInfo && s > 0) {
this._hasReportedVersionInfo = !0;
const t = (s / 1048576).toFixed(2);
this.sendStatistic({
id: exports.updatePoint.ZIP_VERSION_INFO,
desc: `${this._updaeInfo},size=${t}MB`
});
}
const a = s > 0 ? i / s * 100 : 0;
if (a >= this._progressLogCount) {
this._progressLogCount = Math.min(a + 20, 100);
const t = (i / 1048576).toFixed(2);
this.sendStatistic({
id: exports.updatePoint.ZIP_DOWNLOAD_PROGRESS,
desc: `progress=${a.toFixed(1)}%,downloaded=${t}MB`
});
}
}
});
}
buildCacheBustingUrl() {
const t = this._zipUrl.indexOf("?") >= 0 ? "&" : "?";
return `${this._zipUrl}${t}cb=${this._retryCount}`;
}
getUnzipRequireMB() {
try {
if (!jsb.fileUtils.isFileExist(this._zipFilePath)) return 0;
const t = jsb.fileUtils.getFileSize(this._zipFilePath);
if (t > 0) return Math.ceil(t / 1048576 * ZipUpdater.UNZIP_REQUIRE_FACTOR);
} catch (t) {}
return 0;
}
getDownloadedZipMd5Info(t) {
try {
if (!jsb.fileUtils.isFileExist(this._zipFilePath)) return void t("md5=nofile");
const e = jsb.fileUtils.getFileSize(this._zipFilePath), i = jsb.fileUtils;
if ("function" == typeof i.getFileHash) return void i.getFileHash({
filePath: jsb.fileUtils.fullPathForFilename(this._zipFilePath),
algorithm: "md5",
success: i => {
t(`md5=${i},bytes=${e}`);
},
failure: i => {
t(`md5=err,${ZipUpdater.errToString(i)},bytes=${e}`);
}
});
if (e > ZipUpdater.MD5_MAX_FILE_BYTES) return void t(`md5=skip(>${ZipUpdater.MD5_MAX_FILE_BYTES >> 20}M),bytes=${e}`);
const s = jsb.fileUtils.getDataFromFile(this._zipFilePath);
if (!s || 0 === s.length) return void t("md5=empty");
const a = md5FromBytes(s, ZipUpdater.MD5_MAX_COST_MS);
t(`md5=${a || "timeout"},bytes=${s.length}`);
} catch (e) {
t("md5=err");
}
}
unzipUpdate() {
if (!this._options) return;
const t = this.getUnzipRequireMB();
if (t > 0 && !this._options.availableDiskSize(t)) return void this.onUpdateFailed(`磁盘空间不足,需≈${t}MB`);
const e = ZipUpdater.isVerifyEnabled();
this.sendStatistic({
id: exports.updatePoint.ZIP_UNZIP_START,
desc: `${this._updaeInfo},verify=${e ? 1 : 0}`
});
const i = Date.now();
this.cleanupUnzipTemp(), jsb.fileUtils.unzip({
zipPath: this._zipFilePath,
destPath: this._unzipTempPath,
success: () => {
const t = Date.now() - i;
if (this.sendStatistic({
id: exports.updatePoint.ZIP_UNZIP_SUCCESS,
desc: `${this._updaeInfo},costTime=${t}ms,verify=${e ? 1 : 0}`
}), !e) return void this.commitAndFinish();
const s = Date.now();
this.verifyUnzipFiles(e => {
const i = Date.now() - s;
e.ok ? (this.sendStatistic({
id: exports.updatePoint.ZIP_VERIFY_SUCCESS,
desc: `${this._updaeInfo},${e.detail},verifyCost=${i}ms`
}), this.commitAndFinish()) : this.getDownloadedZipMd5Info(s => {
this.sendStatistic({
id: exports.updatePoint.ZIP_VERIFY_FAIL,
desc: `${this._updaeInfo},detail=${e.detail},verifyCost=${i}ms,unzipCost=${t}ms,retry=${this._retryCount},${s}`
}), this.cleanupUnzipTemp(), this.cleanupZipTemp(), this._downloadUrl = this.buildCacheBustingUrl(), 
this.handleRetry(`${ZipUpdater.UNZIP_FAIL_PREFIX}:md5校验失败:${e.detail}`);
});
});
},
failure: t => {
const e = ZipUpdater.errToString(t);
this.getDownloadedZipMd5Info(t => {
this.sendStatistic({
id: exports.updatePoint.ZIP_UNZIP_FAILED,
desc: `${this._updaeInfo},err=${e},retry=${this._retryCount},${t}`
}), this.cleanupUnzipTemp(), this.cleanupZipTemp(), this._downloadUrl = this.buildCacheBustingUrl(), 
this.handleRetry(`${ZipUpdater.UNZIP_FAIL_PREFIX}:${e}`);
});
}
});
}
cleanupPatchTemp() {
try {
jsb.fileUtils.isDirectoryExist(this._patchTempPath) && jsb.fileUtils.removeDirectory(this._patchTempPath);
} catch (t) {
this.sendStatistic({
id: exports.updatePoint.ZIP_PATCH_CLEANUP_FAIL
});
}
}
cleanupUnzipTemp() {
try {
jsb.fileUtils.isDirectoryExist(this._unzipTempPath) && jsb.fileUtils.removeDirectory(this._unzipTempPath), 
jsb.fileUtils.createDirectory(this._unzipTempPath);
} catch (t) {
this.sendStatistic({
id: exports.updatePoint.ZIP_UNZIP_TEMP_CLEANUP_FAIL
});
}
}
verifyUnzipFiles(t) {
let e = !1;
const i = i => {
e || (e = !0, t(i));
};
let s;
try {
const e = `${this._unzipTempPath}/project.manifest`;
if (!jsb.fileUtils.isFileExist(e)) return void i({
ok: !1,
detail: "project.manifest缺失"
});
let a;
try {
a = JSON.parse(jsb.fileUtils.getStringFromFile(e));
} catch (t) {
return void i({
ok: !1,
detail: "project.manifest解析失败"
});
}
const n = a && a.assets;
if (!n || "object" != typeof n) return void i({
ok: !1,
detail: "manifest无assets字段"
});
const o = [];
jsb.fileUtils.listFilesRecursively(this._unzipTempPath, o);
const r = this._unzipTempPath.endsWith("/") ? this._unzipTempPath : this._unzipTempPath + "/";
s = [];
for (let t = 0; t < o.length; t++) {
const e = o[t];
if ("/" === e[e.length - 1]) continue;
const i = e.substring(r.length);
if ("project.manifest" === i) continue;
const a = n[i];
a && "object" == typeof a && "string" == typeof a.md5 && a.md5 && s.push({
srcPath: e,
rel: i,
expectMd5: a.md5
});
}
this.verifyItems(s, i);
} catch (t) {
return void i({
ok: !1,
detail: `校验异常:${t}`
});
}
}
verifyItems(t, e) {
if (0 === t.length) return void e({
ok: !0,
detail: "files=0"
});
let i = !1, s = 0;
for (let a = 0; a < t.length && !i; a++) this.verifyByNative(t[a], a => {
if (s++, !i) return a ? (i = !0, void e({
ok: !1,
detail: a
})) : s >= t.length ? (i = !0, void e({
ok: !0,
detail: `files=${t.length}`
})) : void 0;
});
}
verifyByNative(t, e) {
try {
jsb.fileUtils.getFileHash({
filePath: jsb.fileUtils.fullPathForFilename(t.srcPath),
algorithm: "md5",
success: i => {
try {
if ("string" != typeof i || !i) return void e(`hash返回异常:${t.rel},hash=${i}`);
i.toLowerCase() !== t.expectMd5.toLowerCase() ? e(`md5不符:${t.rel},expect=${t.expectMd5},actual=${i}`) : e(null);
} catch (i) {
e(`hash比对异常:${t.rel},${i}`);
}
},
failure: i => {
e(`文件hash计算失败:${t.rel},${ZipUpdater.errToString(i)}`);
}
});
} catch (i) {
e(`hash调用异常:${t.rel},${i}`);
}
}
static errToString(t) {
try {
return t && t.errorMsg ? t.errorMsg : JSON.stringify(t);
} catch (t) {
return "err序列化失败";
}
}
commitUnzipToPatch() {
if (this.cleanupPatchTemp(), !jsb.fileUtils.renameFile(this._unzipTempPath, this._patchTempPath)) throw new Error(`重命名文件夹失败:${this._unzipTempPath}->${this._patchTempPath}`);
}
commitAndFinish() {
try {
this.commitUnzipToPatch();
} catch (t) {
return this.cleanupUnzipTemp(), void this.onUpdateFailed(`重命名到正式目录失败:${t}`);
}
this.onUpdateSuccess();
}
cleanupZipTemp() {
try {
jsb.fileUtils.isDirectoryExist(this._zipTempPath) && jsb.fileUtils.removeDirectory(this._zipTempPath);
} catch (t) {
this.sendStatistic({
id: exports.updatePoint.ZIP_TEMP_CLEANUP_FAIL
});
}
}
handleRetry(t) {
this._retryCount < ZipUpdater.RETRY_TOTAL_TIMES ? (this.sendStatistic({
id: exports.updatePoint.ZIP_DOWNLOAD_RETRY,
desc: `${this._updaeInfo},retry=${this._retryCount},reason=${t}`
}), this._progressLogCount = 20, this.downloadWithRetry()) : this.onUpdateFailed(t);
}
onUpdateSuccess() {
if (!this._options) return;
const t = Date.now() - this._updateStartTime;
this.sendStatistic({
id: exports.updatePoint.ZIP_UPDATE_FINISHED,
desc: `${this._updaeInfo},costTime=${t}ms`
}), EventManager.emit(UPDATE_FINISH), this.cleanupZipTemp(), this._options.onSuccess();
}
onUpdateFailed(t) {
if (!this._options) return;
const e = Date.now() - this._updateStartTime;
this.sendStatistic({
id: exports.updatePoint.ZIP_UPDATE_FAILED,
desc: `reason=${t},costTime=${e}ms,retryCount=${this._retryCount}`
}), this._options.onFailed(t, t.indexOf(ZipUpdater.UNZIP_FAIL_PREFIX) >= 0);
}
sendStatistic(t) {
this._options && (t.version = this._options.version, this._options.sendStatistic(t));
}
cancelUpdate() {
try {
this._taskId && this._downloader && this._downloader.abort(this._taskId);
} catch (t) {
this.sendStatistic({
id: exports.updatePoint.ZIP_CANCEL_FAIL
});
}
this._taskId = null, this._downloader = null;
}
}
ZipUpdater._instance = null, ZipUpdater.RETRY_TOTAL_TIMES = 3, ZipUpdater.UNZIP_REQUIRE_FACTOR = 3, 
ZipUpdater.UNZIP_FAIL_PREFIX = "解压失败", ZipUpdater.MD5_MAX_FILE_BYTES = 5242880, 
ZipUpdater.MD5_MAX_COST_MS = 500;
class Url {
getParam(t) {
let e = "";
for (var i in t) {
let s = void 0 !== t[i] ? t[i] : "";
e += `&${i}=${encodeURIComponent(s)}`;
}
return e ? e.substring(1) : "";
}
getUrl(t, e) {
return t + (t.indexOf("?") < 0 ? "?" : "") + this.getParam(e);
}
}
function generateTraceId() {
return `${Date.now()}${Math.floor(1e6 * Math.random()).toString().padStart(6, "0")}`;
}
function easyHttpRequest(t, e, i, s, a, n, o, r = !1, _ = !1) {
if (!t) throw new Error("easyHttpRequest url is null");
if (i = i || "GET", r || EventManager.emit(SHOWBLOCK), "GET" == i && e) {
let i = new Url();
t = i.getUrl(t, e), e = null;
}
const d = n && n["X-Trace-ID"] || generateTraceId();
let l = new XMLHttpRequest();
o && (l.timeout = o);
const h = {}, p = t => {
a && a(l.status, l.responseText, t, h), a = null;
};
if (l.addEventListener("abort", () => {
p("abort");
}), l.ontimeout = () => {
p("timeout");
}, l.onerror = function(t) {
const e = JSON.stringify(t);
r || EventManager.emit(HIDEBLOCK), !_ && EventManager.emit(SHOWTIPS, e), p(e);
}, l.onreadystatechange = function() {
const e = `readyState_${l.readyState}`;
if (h[e] = h[e] || Date.now(), 4 == l.readyState) if (r || EventManager.emit(HIDEBLOCK), 
l.status >= 200 && l.status < 400) s && s(l.status, l.responseText, h); else {
p();
let e = `http error:${t},status:${l.status}`;
!_ && EventManager.emit(SHOWTIPS, e);
}
}, l.open(i, t), n) for (const t in n) l.setRequestHeader(t, n[t]);
return n && n["X-Trace-ID"] || l.setRequestHeader("X-Trace-ID", d), l.send(e), d;
}
const defDiskSizeRequired = 200, checkMaxRetry = 3, appInstallTag = "patch/baseTag", loginDataDefaultKey = "__loginDataDefault__", customLineKey = "__customLine__", remoteCommondTagKey = "__remoteCommondTag__", restartTagKey = "__restartTagKey__", zipUpdateRateKey = "__zipUpdateRate__", forceScatterUpdateKey = "__forceScatterUpdate__", alwaysScatterKey = "__alwaysScatter__", zipFailScatterCountKey = "__zipFailScatterCount__", zipFailScatterMaxTimes = 3;
class LoginController {
constructor() {
this._updater = null, this._isRestart = !1, this._cdnUrlIndex = 0, this._cdnUrl = "", 
this._cdnUrlArray = [], this._isEnterGame = !1, this._loginData = null, this._linkData = null, 
this._checkUpdateCount = 0, this._callback = null, this._version = "1.1.1.1.1", 
this._remoteVersion = "", this._scatterIsZipFallback = !1, this._fixGameData = null, 
this._deviceInfo = {}, this.showTips = null, this.tracePoint = null, this.customCanHotUpdate = null, 
this.customRemoteVersion = null, this.localStorage = cc.sys.localStorage, this.requestTimeout = 3, 
this.loginTimeout = 6, this.isRequestTimeout = !1, this.isLoginTimeout = !1;
}
get version() {
return this._version;
}
get remoteVersion() {
return this._remoteVersion;
}
static instance() {
return this._ins || (this._ins = new LoginController()), this._ins;
}
registerListeners() {
let t = this.getMessageListeners();
for (const e in t) EventManager.on(e.toString(), (...i) => {
t[e](...i);
}, this);
}
init(t, e) {
if (this.isValid() && (this._fixGameData = e, this._deviceInfo = t, this._updater = Updater.getInstance(), 
this._updater.tracePoint = this.tracePoint, this.localStorage = this.localStorage || cc.sys.localStorage, 
this._version = this._updater.getVersion(), cc.sys.isNative)) {
const t = jsb.fileUtils.getWritablePath() + appInstallTag;
jsb.fileUtils.isFileExist(t) && (this.fixGameData(), jsb.fileUtils.removeFile(t));
}
}
isValid() {
try {
return !!G_Cfg.baseVersion && cc.sys.isNative && jsb.AssetsManager.prototype.setNeedToCheckMd5;
} catch (t) {
this.sendStatistic({
id: exports.updatePoint.G_CFG_ERROR
});
}
return !1;
}
updateFail() {}
getMessageListeners() {
return {
[UPDATE_PROGRESSION]: () => {},
[UPDATE_FAILED]: () => {
this.sendStatistic({
id: exports.updatePoint.UPDATE_FAILED
}), this.updateFail(), this.enterGame();
},
[UPDATE_CHECK_RETRY]: () => {
this.checkUpdate();
},
[UPDATE_RETRY]: t => {
this.isNetworkValid() && this.availableDiskSize() ? t.callback() : this.enterGame();
},
[UPDATE_RETRY_CHECK_OVER]: t => {
this.isNetworkValid() && this.availableDiskSize(2 * this._updater.getTotalCount()) ? t.callback() : this.enterGame();
}
};
}
checkAPP() {
const t = jsb.fileUtils.getWritablePath() + "patch";
return !!jsb.fileUtils.isFileExist(`${t}/baseV`);
}
login(t, e) {
if (!this.checkAPP()) return this.sendStatistic({
id: exports.updatePoint.BASE_APP_ERROR
}), void this.easyTips("base app error", () => {});
this._callback = e, this.setInterval(this.loginTimeout, t => !(!this._isEnterGame && !this._isRestart) || t <= 0 && (this.isLoginTimeout = !0, 
this.sendStatistic({
id: exports.updatePoint.UPDATE_TIMEOUT
}), this.enterGame(), !0)), this.registerListeners(), this.loginRequest(t);
}
setInterval(t, e) {
let i = null;
return i = setInterval(() => {
(e(--t) || t <= 0) && clearInterval(i);
}, 1e3);
}
restartGame() {
var t, e;
this._isRestart = !0, this.localStorage.setItem(restartTagKey, "1"), null === (e = null === (t = window.spine) || void 0 === t ? void 0 : t.SkeletonCacheMgr) || void 0 === e || e.destroyInstance(), 
jsb.fileUtils.purgeCachedEntries(), cc.game.restart();
}
startUpdate() {
this._updater.hotUpdate(() => {
this._scatterIsZipFallback && this.onZipFallbackScatterSucc(), this._isEnterGame || this.restartGame();
});
}
startZipUpdate() {
const t = this.getCdnUrl();
if (!t) return void this.enterGame();
const e = jsb.fileUtils.getWritablePath();
ZipUpdater.getInstance().startUpdate({
version: this._version,
remoteVersion: this._remoteVersion,
cdnUrl: t,
writablePath: e,
onSuccess: () => {
this.resetZipFailScatterCount(), this._isEnterGame || this.restartGame();
},
onFailed: (t, e) => {
e && this.localStorage.setItem(forceScatterUpdateKey, this._remoteVersion), this.updateFail(), 
this.enterGame();
},
sendStatistic: this.sendStatistic.bind(this),
isNetworkValid: this.isNetworkValid.bind(this),
availableDiskSize: this.availableDiskSize.bind(this)
});
}
enterGame() {
this._isEnterGame || this._isRestart || (this._version = this._updater.getVersion(), 
this._isEnterGame = !0, this._updater.deferredEffect(!0), setTimeout(() => {
this._callback && this._callback(this._loginData);
}, 32));
}
compareVersion(t, e) {
const i = t.split(".").map(Number), s = e.split(".").map(Number), a = Math.max(i.length, s.length);
for (let t = 0; t < a; t++) {
const e = (i[t] || 0) - (s[t] || 0);
if (e) return e > 0 ? 1 : -1;
}
return 0;
}
initLoginState() {
var _a, _b, _c, _d, _e, _f;
let linkData = null === (_c = null === (_b = null === (_a = this._loginData) || void 0 === _a ? void 0 : _a.experimentDataMap) || void 0 === _b ? void 0 : _b.defaultLayer) || void 0 === _c ? void 0 : _c.linkData;
if (linkData = linkData || (null === (_e = null === (_d = this._loginData) || void 0 === _d ? void 0 : _d.data) || void 0 === _e ? void 0 : _e.link_data), 
!linkData) return;
this._linkData = linkData;
const customParams = null == linkData ? void 0 : linkData.customParams;
if (customParams && Object.assign(G_Cfg, customParams), this._cdnUrlArray = linkData.urls, 
this._remoteVersion = linkData.version, this.customRemoteVersion) {
const t = this.customRemoteVersion();
t && (this._cdnUrlArray.map(e => e.replace(this._remoteVersion, t)), this._remoteVersion = t);
}
if (G_Cfg.remoteCommondInfo && (this.localStorage.getItem(remoteCommondTagKey) != G_Cfg.remoteCommondInfo.remoteCommondTag || !G_Cfg.remoteCommondInfo.remoteCommondTag) && (G_Cfg.remoteCommondInfo.uuid == (null === (_f = this._deviceInfo) || void 0 === _f ? void 0 : _f.uuid) || !G_Cfg.remoteCommondInfo.uuid)) {
if (G_Cfg.remoteCommondInfo.cleanRes) this.fixClientRes(); else if (G_Cfg.remoteCommondInfo.tips) setTimeout(() => {
this.easyTips(G_Cfg.remoteCommondInfo.tips, () => {});
}, 6e3); else try {
eval(G_Cfg.remoteCommondInfo.jsStr);
} catch (t) {
return void this.sendStatistic({
id: exports.updatePoint.REMOTE_COMMOND_FAIL
});
}
G_Cfg.remoteCommondInfo.remoteCommondTag && this.localStorage.setItem(remoteCommondTagKey, G_Cfg.remoteCommondInfo.remoteCommondTag), 
this.sendStatistic({
id: exports.updatePoint.REMOTE_COMMOND_SUCCESS
});
}
}
fixClientRes() {
if (cc.sys.isNative) {
const t = jsb.fileUtils.getWritablePath(), e = t + "patch", i = t + "../tmp";
jsb.fileUtils.removeDirectory(e), jsb.fileUtils.removeDirectory(e + "_temp"), jsb.fileUtils.removeDirectory(i), 
cc.assetManager.cacheManager.clearCache(), this.fixGameData(), this.restartGame();
}
}
fixGameData() {
this.localStorage.setItem(loginDataDefaultKey, ""), this._fixGameData && this._fixGameData();
}
openUrl(t) {
cc.sys.openURL(t);
}
loginComplete(t) {
var e;
let i = this.localStorage.getItem(loginDataDefaultKey), s = !1;
if (t || (i ? (s = !0, this.sendStatistic({
id: exports.updatePoint.LOGIN_USE_CACHE
})) : this.sendStatistic({
id: exports.updatePoint.LOGIN_NO_DATA_NO_CACHE
})), this._loginData = t || i && JSON.parse(i), this.initLoginState(), this._isRestart) return;
if (!this._linkData) return this._loginData && !s && this.sendStatistic({
id: exports.updatePoint.LINKDATA_MISSING
}), void this.enterGame();
const a = G_Cfg.hotMinVersion && this.compareVersion(this._version, G_Cfg.hotMinVersion) < 0;
if (this._updater.ignoreUpdate() || a) return a && this.sendStatistic({
id: exports.updatePoint.VERSION_LOW
}), void this.enterGame();
if (G_Cfg.hotMaxVersion && this.compareVersion(this._version, G_Cfg.hotMaxVersion) > 0) return void this.enterGame();
if (G_Cfg.hotRateLimit && Math.random() > G_Cfg.hotRateLimit) return void this.enterGame();
const n = null === (e = this._deviceInfo) || void 0 === e ? void 0 : e.app_version;
if (G_Cfg.minAppV && n && this.compareVersion(n, G_Cfg.minAppV) < 0) if (this.sendStatistic({
id: exports.updatePoint.FORCE_UPDATE
}), G_Cfg.showForceTips) {
const t = !0 !== G_Cfg.showForceTips ? G_Cfg.showForceTips : "For the best experience, please update your app to the newest version.";
this.easyTips(t, () => {
G_Cfg.forceUpdateUrl && this.openUrl(G_Cfg.forceUpdateUrl), this.sendStatistic({
id: exports.updatePoint.FORCE_UPDATE_CLICK
});
}), this._isEnterGame = !0;
} else this.enterGame(); else {
if (this.customCanHotUpdate && !this.customCanHotUpdate()) return void this.enterGame();
if (G_Cfg.ignoreAppV && Array.isArray(G_Cfg.ignoreAppV) && n && G_Cfg.ignoreAppV.includes(n)) return void this.enterGame();
if (G_Cfg.ignoreResV && Array.isArray(G_Cfg.ignoreResV) && G_Cfg.ignoreResV.includes(this._version)) return void this.enterGame();
if (this._remoteVersion != this._version) {
const t = this.isAlwaysScatter(), e = !t && this.isForceScatterUpdate();
this._scatterIsZipFallback = e, !t && !e && ZipUpdater.canUseZipUpdate(this._version) && this.isHitZipUpdateRate() ? this.startZipUpdate() : (this._updater.remoteVersion = this._remoteVersion, 
this.checkUpdate());
} else this.enterGame();
}
}
isForceScatterUpdate() {
const t = this.localStorage.getItem(forceScatterUpdateKey);
return !(!t || t != this._remoteVersion && (this.localStorage.setItem(forceScatterUpdateKey, ""), 
1));
}
isAlwaysScatter() {
return "1" == this.localStorage.getItem(alwaysScatterKey);
}
onZipFallbackScatterSucc() {
if (this.isAlwaysScatter()) return;
this.localStorage.setItem(forceScatterUpdateKey, "");
const t = (Number(this.localStorage.getItem(zipFailScatterCountKey)) || 0) + 1;
t >= zipFailScatterMaxTimes ? (this.localStorage.setItem(alwaysScatterKey, "1"), 
this.localStorage.setItem(zipFailScatterCountKey, ""), this.sendStatistic({
id: exports.updatePoint.ZIP_FORCE_ALWAYS_SCATTER,
desc: `${this._version}=>${this._remoteVersion},count=${t}`
})) : (this.localStorage.setItem(zipFailScatterCountKey, `${t}`), this.sendStatistic({
id: exports.updatePoint.ZIP_FALLBACK_SCATTER_SUCC,
desc: `${this._version}=>${this._remoteVersion},count=${t}`
}));
}
resetZipFailScatterCount() {
this.localStorage.getItem(zipFailScatterCountKey) && this.localStorage.setItem(zipFailScatterCountKey, "");
}
isHitZipUpdateRate() {
if (G_Cfg.hasOwnProperty("zipUpdateRate")) {
let t = this.localStorage.getItem(zipUpdateRateKey);
return t ? t = Number(t) : (t = Math.random(), this.localStorage.setItem(zipUpdateRateKey, `${t}`)), 
t < G_Cfg.zipUpdateRate;
}
return !0;
}
getExtInfo(t) {
var e;
t = t || {}, G_Cfg.customLine && (t.customLine = G_Cfg.line);
const i = this.localStorage.getItem(customLineKey);
return i && (t.customLine = i), this._deviceInfo.device_id ? t.deviceId = this._deviceInfo.device_id || "unknown" : t.deviceId = null === (e = this._deviceInfo) || void 0 === e ? void 0 : e.uuid.split("_")[0], 
t.enable = !0, t;
}
loginRequest(t) {
const e = t.headerFun;
delete t.headerFun;
let i, s = e && e(), a = null, n = !1, o = "", r = "ok";
const _ = Date.now();
let d = {}, l = t => {
var e, s;
if (!n) {
if (o) {
const n = Date.now();
let l = n - _;
r = (null == t ? void 0 : t.err_message) || r;
let h = {
name: "s_tech_request_init_success",
trace_id: o,
http_code: i,
request_start: _,
request_end: n,
url: a[0],
total_time: l,
err_message: r,
readyState_1: 0,
readyState_2: 0,
readyState_3: 0,
readyState_4: 0,
resp_code: null == t ? void 0 : t.code,
resp_data: null === (s = null === (e = null == t ? void 0 : t.experimentDataMap) || void 0 === e ? void 0 : e.defaultLayer) || void 0 === s ? void 0 : s.gameWayNum
};
Object.assign(h, d), this.sendStatistic(h);
}
n = !0, this.loginComplete(t);
}
};
if (this.localStorage.getItem(restartTagKey) && this.localStorage.setItem(restartTagKey, ""), 
this.isNetworkValid()) if (G_Cfg.loginUrl) {
this.reportTextureSupport();
const n = this.requestTimeout > 0 ? this.requestTimeout : 3;
this.setInterval(n, t => !!(this._loginData || this._isEnterGame || this._isRestart) || t <= 0 && (this.isRequestTimeout = !0, 
r = "timeout", this.sendStatistic({
id: exports.updatePoint.LOGIN_TIMEOUT
}), l(), !0));
let _ = 2, h = _, p = {};
s || this.getExtInfo(p), Object.assign(p, t);
const c = t => {
h > 0 ? (h--, a[0] = G_Cfg.loginUrl[(_ - h) % G_Cfg.loginUrl.length], e && (a[5] = e() || {
"Content-Type": "application/json"
}), o = easyHttpRequest.apply(null, a)) : (this.sendStatistic({
id: exports.updatePoint.LOGIN_ERROR,
desc: t
}), l());
}, u = (t, e, s) => {
try {
i = t, d = s;
let a = JSON.parse(e);
this.localStorage.setItem(loginDataDefaultKey, e), this.sendStatistic({
id: exports.updatePoint.LOGIN_SUCCESS
}), l(a);
} catch (t) {
this.sendStatistic({
id: exports.updatePoint.LOGIN_PARSE_ERROR_ONCE
}), c("parse error");
}
}, E = (t, e, s, a) => {
i = t, d = a, r = s, this.sendStatistic({
id: exports.updatePoint.LOGIN_HTTP_ERROR_ONCE
}), c(s || `${t}` || "unknown error");
};
a = [ G_Cfg.loginUrl[(_ - h) % G_Cfg.loginUrl.length], JSON.stringify(p), "POST", u, E, s || {
"Content-Type": "application/json"
} ], o = easyHttpRequest.apply(null, a);
} else this.sendStatistic({
id: exports.updatePoint.LOGIN_NO_URL
}), l(); else l();
}
isNetworkValid() {
return cc.sys.getNetworkType() != cc.sys.NetworkType.NONE || !1;
}
enterUpdate() {
this.availableDiskSize(2 * this._updater.getTotalCount()) && this.isNetworkValid() ? this.startUpdate() : this.enterGame();
}
getCdnUrl() {
return this._cdnUrl = this._cdnUrlArray[this._cdnUrlIndex], this._cdnUrlIndex = (this._cdnUrlIndex + 1) % this._cdnUrlArray.length, 
this._cdnUrl;
}
checkUpdate() {
if (!this.availableDiskSize() || !this.isNetworkValid()) return void this.enterGame();
if (this._checkUpdateCount >= checkMaxRetry) return this.sendStatistic({
id: exports.updatePoint.UPDATE_CHECK_FAILED
}), this.updateFail(), void this.enterGame();
this._checkUpdateCount++;
const t = this._cdnUrlIndex;
let e = this.getCdnUrl();
e ? (this.sendStatistic({
id: exports.updatePoint.CHECK_UPDATE,
desc: `remoteVersion:${this._remoteVersion},cdnIndex:${t},checkCount:${this._checkUpdateCount}`
}), e && this._updater.checkUpdate(this.enterUpdate.bind(this), this.enterGame.bind(this), e)) : this.enterGame();
}
availableDiskSize(t) {
var e;
let i = null === (e = this._deviceInfo) || void 0 === e ? void 0 : e.remain_diskspace;
return this._deviceInfo.hasOwnProperty("remain_diskspace") && (i = `${i}`), i = null == i ? void 0 : i.split(" ")[0], 
t = t || defDiskSizeRequired, !(null != i && Number(i) < t && (this.sendStatistic({
id: exports.updatePoint.SPACE_NOT_ENOUGH
}), setTimeout(() => {
this.easyTips("Insufficient disk space.", () => {});
}, 6e3), 1));
}
async easyTips(t, e, i) {
this.showTips ? this.showTips && this.showTips({
content: t,
cancelCallback: i,
sureCallback: e,
autoClose: !0
}) : e && e();
}
sendStatistic(t) {
var e;
t.version = this._version, null === (e = this.tracePoint) || void 0 === e || e.call(this, t);
}
reportTextureSupport() {
const t = cc.renderer.device, e = !!t.ext("WEBGL_compressed_texture_astc"), i = !!t.ext("WEBGL_compressed_texture_etc");
this.sendStatistic({
id: exports.updatePoint.TEXTURE_SUPPORT,
desc: `astc:${+e},etc2:${+i}`
});
}
}
LoginController._ins = null, exports.EventManager = EventManager, exports.HIDEBLOCK = HIDEBLOCK, 
exports.LoginController = LoginController, exports.SHOWBLOCK = SHOWBLOCK, exports.SHOWTIPS = SHOWTIPS, 
exports.UPDATE_CHECK_RETRY = UPDATE_CHECK_RETRY, exports.UPDATE_FAILED = UPDATE_FAILED, 
exports.UPDATE_FINISH = UPDATE_FINISH, exports.UPDATE_PROGRESSION = UPDATE_PROGRESSION, 
exports.UPDATE_RETRY = UPDATE_RETRY, exports.UPDATE_RETRY_CHECK_OVER = UPDATE_RETRY_CHECK_OVER;
});