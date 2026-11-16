window.__require = function t(e, i, r) {
function n(o, l) {
if (!i[o]) {
if (!e[o]) {
var s = o.split("/");
s = s[s.length - 1];
if (!e[s]) {
var u = "function" == typeof __require && __require;
if (!l && u) return u(s, !0);
if (a) return a(s, !0);
throw new Error("Cannot find module '" + o + "'");
}
o = s;
}
var c = i[o] = {
exports: {}
};
e[o][0].call(c.exports, function(t) {
return n(e[o][1][t] || t);
}, c, c.exports, t, e, i, r);
}
return i[o].exports;
}
for (var a = "function" == typeof __require && __require, o = 0; o < r.length; o++) n(r[o]);
return n;
}({
AbilityAlgorithmCategoryService: [ function(t, e, i) {
"use strict";
cc._RF.push(e, "51dabv6j5VHrabi1FcMbLJ8", "AbilityAlgorithmCategoryService");
var r = this && this.__values || function(t) {
var e = "function" == typeof Symbol && Symbol.iterator, i = e && t[e], r = 0;
if (i) return i.call(t);
if (t && "number" == typeof t.length) return {
next: function() {
t && r >= t.length && (t = void 0);
return {
value: t && t[r++],
done: !t
};
}
};
throw new TypeError(e ? "Object is not iterable." : "Symbol.iterator is not defined.");
};
Object.defineProperty(i, "__esModule", {
value: !0
});
i.AbilityAlgorithmCategory = void 0;
var n = t("./AbilityConfig"), a = function() {
function t() {
this.initFilter();
}
t.prototype.initFilter = function() {
this._filter = {
categories: n.AbilityConfig.CATEGORY_ORDER,
filterMap: {
"难题类": function(t) {
return (t.includes("难题") || t.includes("陷阱") || t.includes("致死") || t.includes("简单死亡")) && !t.includes("难题降级");
},
"权重控制类": function(t) {
return t.includes("熵增") || t.includes("难题降级") || t.includes("死亡算法") || t.includes("增加权重") || t.includes("终止刷分");
},
"爽感提升类": function(t) {
return (t.includes("清盘") || t.includes("清屏") || t.includes("切割") || t.includes("多消")) && !t.includes("不清屏");
},
"普通填空类": function(t) {
return t.includes("填空") || t.includes("聚拢算法");
},
"随机类": function(t) {
return t.includes("随机") || t.includes("伪随机") || t.includes("随机无死亡");
},
"其他类": function() {
return !0;
}
}
};
};
t.prototype.getCategory = function(t) {
var e, i, n = function(e) {
var i = a._filter.filterMap[e];
if (i && t.some(function(t) {
return i(t);
})) return {
value: e
};
}, a = this;
try {
for (var o = r(this._filter.categories), l = o.next(); !l.done; l = o.next()) {
var s = n(l.value);
if ("object" == typeof s) return s.value;
}
} catch (t) {
e = {
error: t
};
} finally {
try {
l && !l.done && (i = o.return) && i.call(o);
} finally {
if (e) throw e.error;
}
}
return "其他类";
};
t.prototype.getCategories = function() {
return this._filter.categories;
};
return t;
}();
i.AbilityAlgorithmCategory = new a();
cc._RF.pop();
}, {
"./AbilityConfig": "AbilityConfig"
} ],
AbilityCalculationService: [ function(t, e, i) {
"use strict";
cc._RF.push(e, "56f267M+GZOMqo/HmlVntMQ", "AbilityCalculationService");
var r = this && this.__values || function(t) {
var e = "function" == typeof Symbol && Symbol.iterator, i = e && t[e], r = 0;
if (i) return i.call(t);
if (t && "number" == typeof t.length) return {
next: function() {
t && r >= t.length && (t = void 0);
return {
value: t && t[r++],
done: !t
};
}
};
throw new TypeError(e ? "Object is not iterable." : "Symbol.iterator is not defined.");
}, n = this && this.__read || function(t, e) {
var i = "function" == typeof Symbol && t[Symbol.iterator];
if (!i) return t;
var r, n, a = i.call(t), o = [];
try {
for (;(void 0 === e || e-- > 0) && !(r = a.next()).done; ) o.push(r.value);
} catch (t) {
n = {
error: t
};
} finally {
try {
r && !r.done && (i = a.return) && i.call(a);
} finally {
if (n) throw n.error;
}
}
return o;
};
Object.defineProperty(i, "__esModule", {
value: !0
});
i.AbilityCalculation = i.AbilityCalculationService = void 0;
var a = t("./AbilityConfig"), o = t("./AbilityTypes"), l = t("./BinomialPL"), s = t("./Eap4PL"), u = function() {
function t() {}
t.prototype.getDifficultyConfig = function(t) {
var e, i, o = a.AbilityConfig.getModelConfig(t), l = {
mu: o.theta_summary.mean,
sigma: o.theta_summary.sigma,
params: {},
eapParams: []
};
try {
for (var s = r(Object.entries(o.items_abcd)), u = s.next(); !u.done; u = s.next()) {
var c = n(u.value, 2), p = c[0], f = c[1];
l.params[p] = {
aj: f.a,
bj: f.b,
cj: f.c,
dj: f.d
};
l.eapParams.push({
question_category: p,
a: f.a,
b: f.b,
c: f.c,
d: f.d
});
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
return l;
};
t.prototype.calculateAbility = function(t, e) {
void 0 === e && (e = {});
var i = (void 0 === e.modelType && o.IAbilityModelType.MEDIUM, e.useEap), r = void 0 !== i && i, n = e.use4PL, a = void 0 !== n && n, u = e.params, c = e.mu, p = e.sigma;
if (!Object.values(t).some(function(t) {
return t.count > 0;
})) return Infinity;
var f = this.getDifficultyConfig(a), y = null != c ? c : f.mu, d = null != p ? p : f.sigma, h = u || f.params;
return r ? s.Eap4PLCalculator.calculateEapAbility(t, y, d, f.eapParams) : l.BinomialPL.estimateThetaMAP(t, h, y, d);
};
t.prototype.predictPassPossibility = function(t, e, i) {
void 0 === i && (i = !1);
var r = this.getDifficultyConfig(i);
return l.BinomialPL.predictProb(r.params, t, e);
};
return t;
}();
i.AbilityCalculationService = u;
i.AbilityCalculation = new u();
cc._RF.pop();
}, {
"./AbilityConfig": "AbilityConfig",
"./AbilityTypes": "AbilityTypes",
"./BinomialPL": "BinomialPL",
"./Eap4PL": "Eap4PL"
} ],
AbilityConfig: [ function(t, e, i) {
"use strict";
cc._RF.push(e, "ef8abIuJxZMtpnKFmxvqv/x", "AbilityConfig");
var r = this && this.__assign || function() {
return (r = Object.assign || function(t) {
for (var e, i = 1, r = arguments.length; i < r; i++) {
e = arguments[i];
for (var n in e) Object.prototype.hasOwnProperty.call(e, n) && (t[n] = e[n]);
}
return t;
}).apply(this, arguments);
}, n = this && this.__awaiter || function(t, e, i, r) {
return new (i || (i = Promise))(function(n, a) {
function o(t) {
try {
s(r.next(t));
} catch (t) {
a(t);
}
}
function l(t) {
try {
s(r.throw(t));
} catch (t) {
a(t);
}
}
function s(t) {
t.done ? n(t.value) : (e = t.value, e instanceof i ? e : new i(function(t) {
t(e);
})).then(o, l);
var e;
}
s((r = r.apply(t, e || [])).next());
});
}, a = this && this.__generator || function(t, e) {
var i, r, n, a, o = {
label: 0,
sent: function() {
if (1 & n[0]) throw n[1];
return n[1];
},
trys: [],
ops: []
};
return a = {
next: l(0),
throw: l(1),
return: l(2)
}, "function" == typeof Symbol && (a[Symbol.iterator] = function() {
return this;
}), a;
function l(t) {
return function(e) {
return s([ t, e ]);
};
}
function s(a) {
if (i) throw new TypeError("Generator is already executing.");
for (;o; ) try {
if (i = 1, r && (n = 2 & a[0] ? r.return : a[0] ? r.throw || ((n = r.return) && n.call(r), 
0) : r.next) && !(n = n.call(r, a[1])).done) return n;
(r = 0, n) && (a = [ 2 & a[0], n.value ]);
switch (a[0]) {
case 0:
case 1:
n = a;
break;

case 4:
o.label++;
return {
value: a[1],
done: !1
};

case 5:
o.label++;
r = a[1];
a = [ 0 ];
continue;

case 7:
a = o.ops.pop();
o.trys.pop();
continue;

default:
if (!(n = o.trys, n = n.length > 0 && n[n.length - 1]) && (6 === a[0] || 2 === a[0])) {
o = 0;
continue;
}
if (3 === a[0] && (!n || a[1] > n[0] && a[1] < n[3])) {
o.label = a[1];
break;
}
if (6 === a[0] && o.label < n[1]) {
o.label = n[1];
n = a;
break;
}
if (n && o.label < n[2]) {
o.label = n[2];
o.ops.push(a);
break;
}
n[2] && o.ops.pop();
o.trys.pop();
continue;
}
a = e.call(t, o);
} catch (t) {
a = [ 6, t ];
r = 0;
} finally {
i = n = 0;
}
if (5 & a[0]) throw a[1];
return {
value: a[0] ? a[1] : void 0,
done: !0
};
}
}, o = this && this.__read || function(t, e) {
var i = "function" == typeof Symbol && t[Symbol.iterator];
if (!i) return t;
var r, n, a = i.call(t), o = [];
try {
for (;(void 0 === e || e-- > 0) && !(r = a.next()).done; ) o.push(r.value);
} catch (t) {
n = {
error: t
};
} finally {
try {
r && !r.done && (i = a.return) && i.call(a);
} finally {
if (n) throw n.error;
}
}
return o;
}, l = this && this.__values || function(t) {
var e = "function" == typeof Symbol && Symbol.iterator, i = e && t[e], r = 0;
if (i) return i.call(t);
if (t && "number" == typeof t.length) return {
next: function() {
t && r >= t.length && (t = void 0);
return {
value: t && t[r++],
done: !t
};
}
};
throw new TypeError(e ? "Object is not iterable." : "Symbol.iterator is not defined.");
};
Object.defineProperty(i, "__esModule", {
value: !0
});
i.AbilityConfig = void 0;
var s = t("./AbilityTypes"), u = t("../../../../../scripts/base/http/Http"), c = {
items_abcd: {
"其他类": {
a: 2.455404758453369,
b: -1.3638654947280884,
c: .2997073233127594,
d: .9584096670150757
},
"随机类": {
a: 2.3444981575012207,
b: -.9649927020072937,
c: .28018590807914734,
d: .9934530258178711
},
"普通填空类": {
a: 2.3695197105407715,
b: -.9857707619667053,
c: .28092390298843384,
d: .9930605888366699
},
"爽感提升类": {
a: 2.9983067512512207,
b: -1.4521031379699707,
c: .2994539737701416,
d: .9969470500946045
},
"权重控制类": {
a: 1.9270328283309937,
b: -.7316511869430542,
c: .26809966564178467,
d: .986596941947937
},
"难题类": {
a: 1.5624604225158691,
b: .8096989393234253,
c: .3022373616695404,
d: .9890780448913574
}
},
theta_summary: {
n_users: 844658,
mean: .7624831440844375,
sigma: .5312152023226437,
percentiles_1_100: {
p1: -.4762997129559517,
p2: -.3454946404695511,
p3: -.24959992393851282,
p4: -.17021473169326784,
p5: -.10511969961225984,
p6: -.05048459731042386,
p7: -.002134373881854022,
p8: .04045115202665329,
p9: .07649758182466028,
p10: .11045338138937953,
p11: .1413462318480015,
p12: .16963081538677213,
p13: .19528472289443016,
p14: .2193549665808678,
p15: .24184878244996066,
p16: .2628658103942871,
p17: .2826506921648979,
p18: .3017344164848327,
p19: .3200738576054573,
p20: .33782920837402347,
p21: .3552623960375786,
p22: .3718780392408371,
p23: .387884536087513,
p24: .40349053621292114,
p25: .41884705424308777,
p26: .43371620357036594,
p27: .4483395928144455,
p28: .4626140975952149,
p29: .4767449924349785,
p30: .49064114391803737,
p31: .5041114354133606,
p32: .5175723600387573,
p33: .5309447431564331,
p34: .5441564559936524,
p35: .5572868049144745,
p36: .5700576353073119,
p37: .5828511434793472,
p38: .5957247281074526,
p39: .608613430261612,
p40: .6214097380638123,
p41: .6339873820543289,
p42: .6465576112270355,
p43: .6589993858337402,
p44: .6718851566314697,
p45: .6845860779285431,
p46: .6972074127197266,
p47: .7097747957706452,
p48: .7220782256126403,
p49: .7347185343503951,
p50: .7473865449428558,
p51: .7601797789335251,
p52: .7728885531425477,
p53: .7857300698757171,
p54: .7983190429210663,
p55: .811163690686226,
p56: .8241879057884217,
p57: .8374281454086303,
p58: .8505703246593473,
p59: .8637644523382186,
p60: .877134895324707,
p61: .8906719011068344,
p62: .9040530109405517,
p63: .9177197116613388,
p64: .9314919924736023,
p65: .9455100029706957,
p66: .9594123876094818,
p67: .9738297790288927,
p68: .9883885645866395,
p69: 1.0029981720447538,
p70: 1.0175942420959472,
p71: 1.0328785586357117,
p72: 1.0482919645309448,
p73: 1.064024543762207,
p74: 1.0801404380798336,
p75: 1.096479743719101,
p76: 1.1129224205017092,
p77: 1.1299971640110016,
p78: 1.1477796912193299,
p79: 1.165655392408371,
p80: 1.1843481063842773,
p81: 1.203859293460846,
p82: 1.223818941116333,
p83: 1.2446621382236476,
p84: 1.266475067138672,
p85: 1.2892502069473264,
p86: 1.3137278866767883,
p87: 1.3391826367378235,
p88: 1.3667997980117799,
p89: 1.396320650577545,
p90: 1.4285144805908205,
p91: 1.4624946022033691,
p92: 1.5017629671096804,
p93: 1.545641884803772,
p94: 1.5957235169410706,
p95: 1.655919313430786,
p96: 1.7269404649734494,
p97: 1.8183981907367706,
p98: 1.9427623367309568,
p99: 2.1417418789863576,
p100: 3.2114038467407227
}
}
}, p = r({}, c), f = (r({}, {
items_abcd: {
"其他类": {
a: 2.786757469177246,
b: -1.3628392219543457,
c: .2709868252277374,
d: .9907565116882324
},
"随机类": {
a: 2.48708176612854,
b: -1.1343108415603638,
c: .26529940962791443,
d: .9884853363037109
},
"普通填空类": {
a: 1.730216383934021,
b: -.6741729974746704,
c: .2485189288854599,
d: .9414235949516296
},
"爽感提升类": {
a: 1.9128621816635132,
b: -.34396466612815857,
c: .22723467648029327,
d: .9424326419830322
},
"权重控制类": {
a: 2.1796507835388184,
b: -.832123339176178,
c: .2555086314678192,
d: .9828577041625977
},
"难题类": {
a: 2.9990856647491455,
b: 1.1754097938537598,
c: .391701877117157,
d: .9927810430526733
}
},
theta_summary: {
n_users: 2246732,
mean: .563324378045471,
sigma: .4007274543133211,
percentiles_1_100: {
p1: -.24921272501349448,
p2: -.14060553520917893,
p3: -.07808463498950005,
p4: -.03310663431882857,
p5: .0027076638885773774,
p6: .03242147259414196,
p7: .057630020640790466,
p8: .0799482536315918,
p9: .09998063549399373,
p10: .11829465478658677,
p11: .13504034295678138,
p12: .15062233448028564,
p13: .1653693696856499,
p14: .17927391588687897,
p15: .192324648052454,
p16: .20469765841960907,
p17: .21661594703793527,
p18: .22811652630567547,
p19: .23926802337169648,
p20: .2499919593334198,
p21: .2604974675178528,
p22: .27067748963832855,
p23: .2805484092235565,
p24: .29013012409210204,
p25: .2995552271604538,
p26: .3088998591899872,
p27: .31801672995090485,
p28: .32709224104881285,
p29: .3359319865703583,
p30: .3447132527828216,
p31: .3534737607836723,
p32: .36199992418289184,
p33: .3705047643184662,
p34: .3789040929079056,
p35: .3873294159770012,
p36: .3957999145984649,
p37: .40414643615484236,
p38: .4125241076946259,
p39: .4208292093873024,
p40: .4290794014930725,
p41: .43744592905044555,
p42: .44572091519832613,
p43: .45410221815109253,
p44: .46258883118629457,
p45: .4709289640188217,
p46: .4793803733587265,
p47: .48792105317115764,
p48: .49653394222259517,
p49: .5051162356138229,
p50: .5137333869934082,
p51: .5224511313438416,
p52: .5313516688346863,
p53: .5402997136116028,
p54: .5494199502468109,
p55: .558512169122696,
p56: .5677008080482483,
p57: .5770022475719452,
p58: .5865017104148864,
p59: .5960169184207916,
p60: .605753183364868,
p61: .615710437297821,
p62: .6258897972106934,
p63: .6360888940095901,
p64: .6465630674362183,
p65: .6572085291147233,
p66: .6680958402156829,
p67: .679203799366951,
p68: .6906100749969483,
p69: .7022012656927107,
p70: .7142616808414459,
p71: .726679636836052,
p72: .739124972820282,
p73: .7520181363821028,
p74: .7652732157707214,
p75: .7789889425039291,
p76: .7933411741256714,
p77: .8081587529182435,
p78: .8232950770854957,
p79: .839091859459877,
p80: .8557153463363648,
p81: .8729361689090729,
p82: .8909350347518921,
p83: .9099907553195954,
p84: .9301903271675109,
p85: .9513429015874862,
p86: .9735096824169158,
p87: .9972051280736922,
p88: 1.0225881481170656,
p89: 1.0503294134140015,
p90: 1.080776309967041,
p91: 1.1141642582416535,
p92: 1.1506766176223757,
p93: 1.1919257390499116,
p94: 1.2387047982215877,
p95: 1.2937979638576504,
p96: 1.3605262708663926,
p97: 1.445246397256851,
p98: 1.5633955645561213,
p99: 1.7615788948535909,
p100: 2.817135810852051
}
}
}), new (function() {
function t() {
this._configUpdated = !1;
}
t.prototype.getSTORAGE_KEY = function(t) {
return t ? "AbilitySystem10G" : "AbilitySystem";
};
Object.defineProperty(t.prototype, "MODEL_CONFIG", {
get: function() {
return this.MODEL_CONFIG_2PL;
},
enumerable: !1,
configurable: !0
});
Object.defineProperty(t.prototype, "MODEL_CONFIG_2PL", {
get: function() {
return c;
},
enumerable: !1,
configurable: !0
});
Object.defineProperty(t.prototype, "MODEL_CONFIG_4PL", {
get: function() {
return p;
},
enumerable: !1,
configurable: !0
});
t.prototype.getModelConfig = function(t) {
return t ? this.MODEL_CONFIG_4PL : this.MODEL_CONFIG_2PL;
};
Object.defineProperty(t.prototype, "WEIGHT_LIMITS", {
get: function() {
return {
DIFFICULTY_DOWNGRADE: 112.1,
SCORE_ALGORITHM: 85.5,
OTHER_WEIGHT: 142.3
};
},
enumerable: !1,
configurable: !0
});
Object.defineProperty(t.prototype, "CATEGORY_ORDER", {
get: function() {
return [ "难题类", "权重控制类", "爽感提升类", "普通填空类", "随机类", "其他类" ];
},
enumerable: !1,
configurable: !0
});
Object.defineProperty(t.prototype, "TESTURL", {
get: function() {
return "https://hella-game-gateway-server-test.afafb.com/v1/jason_item";
},
enumerable: !1,
configurable: !0
});
Object.defineProperty(t.prototype, "ONLINEURL", {
get: function() {
return "https://hella-game-gateway-server.afafb.com/v1/jason_item";
},
enumerable: !1,
configurable: !0
});
Object.defineProperty(t.prototype, "REMOTE_CONFIG_URL_2PL", {
get: function() {
return "https://ucw.afafb.com/bbios/User_Growth/Jasoonhh/UA/GP/2PL/UA.json?t=" + Date.now();
},
enumerable: !1,
configurable: !0
});
Object.defineProperty(t.prototype, "REMOTE_CONFIG_URL_4PL", {
get: function() {
return "https://ucw.afafb.com/bbios/User_Growth/Jasoonhh/UA/GP/4PL/UA.json?t=" + Date.now();
},
enumerable: !1,
configurable: !0
});
t.prototype.updateConfigFromRemote = function() {
return n(this, void 0, Promise, function() {
var t, e, i;
return a(this, function(r) {
switch (r.label) {
case 0:
return this._configUpdated ? [ 2, !0 ] : [ 4, Promise.all([ this.fetchAndUpdateConfig(this.REMOTE_CONFIG_URL_2PL, "2PL", !1), this.fetchAndUpdateConfig(this.REMOTE_CONFIG_URL_4PL, "4PL", !0) ]) ];

case 1:
t = o.apply(void 0, [ r.sent(), 2 ]), e = t[0], i = t[1];
(e || i) && (this._configUpdated = !0);
return [ 2, e && i ];
}
});
});
};
t.prototype.fetchAndUpdateConfig = function(t, e, i) {
return n(this, void 0, Promise, function() {
var e, r, n;
return a(this, function(a) {
switch (a.label) {
case 0:
e = i ? "AbilityModelConfig4PL" : "AbilityModelConfig2PL";
a.label = 1;

case 1:
a.trys.push([ 1, 3, , 4 ]);
return [ 4, u.http.requestAsync(t, {}, {
type: u.HttpType.GET,
retryTimes: 1
}) ];

case 2:
if (!(r = a.sent()).items_abcd || !r.theta_summary) throw new Error("配置格式无效：缺少 items_abcd 或 theta_summary");
this.applyConfig(r, i);
this.saveConfigToCache(e, r);
return [ 2, !0 ];

case 3:
a.sent();
if (n = this.loadConfigFromCache(e)) {
this.applyConfig(n, i);
return [ 2, !0 ];
}
return [ 2, !1 ];

case 4:
return [ 2 ];
}
});
});
};
t.prototype.applyConfig = function(t, e) {
e ? p = t : c = t;
};
t.prototype.saveConfigToCache = function(t, e) {
try {
hs.storage.setItem(t, e);
} catch (t) {}
};
t.prototype.loadConfigFromCache = function(t) {
try {
var e = hs.storage.getItem(t);
if (e && e.items_abcd && e.theta_summary) return e;
} catch (t) {}
return null;
};
Object.defineProperty(t.prototype, "FEATURE_NAME", {
get: function() {
return "AbilitySystem";
},
enumerable: !1,
configurable: !0
});
Object.defineProperty(t.prototype, "KEY_MAPPING", {
get: function() {
return {
hard: "难题类",
trap: "陷阱类",
weight_management: "权重控制类",
improved_satisfaction: "爽感提升类",
order_fill: "秩序填空类",
fill: "普通填空类",
random: "随机类",
other: "其他类"
};
},
enumerable: !1,
configurable: !0
});
Object.defineProperty(t.prototype, "DIFFICULTY_CONFIGS", {
get: function() {
var t, e, i, r = this.MODEL_CONFIG, n = {
mu: r.theta_summary.mean,
sigma: r.theta_summary.sigma,
params: {},
eapParams: []
};
try {
for (var a = l(Object.entries(r.items_abcd)), u = a.next(); !u.done; u = a.next()) {
var c = o(u.value, 2), p = c[0], f = c[1];
n.params[p] = {
aj: f.a,
bj: f.b,
cj: f.c,
dj: f.d
};
n.eapParams.push({
category: p,
a: f.a,
b: f.b
});
}
} catch (e) {
t = {
error: e
};
} finally {
try {
u && !u.done && (e = a.return) && e.call(a);
} finally {
if (t) throw t.error;
}
}
return (i = {})[s.IAbilityModelType.STRICT] = n, i[s.IAbilityModelType.MEDIUM] = n, 
i[s.IAbilityModelType.LOOSE] = n, i;
},
enumerable: !1,
configurable: !0
});
Object.defineProperty(t.prototype, "ITEM_PARAMS_4PL", {
get: function() {
var t = this.MODEL_CONFIG_4PL;
return Object.entries(t.items_abcd).map(function(t) {
var e = o(t, 2), i = e[0], r = e[1];
return {
question_category: i,
a: r.a,
b: r.b,
c: r.c,
d: r.d
};
});
},
enumerable: !1,
configurable: !0
});
Object.defineProperty(t.prototype, "PRIOR_4PL", {
get: function() {
var t = this.MODEL_CONFIG_4PL;
return {
mu: t.theta_summary.mean,
sigma: t.theta_summary.sigma
};
},
enumerable: !1,
configurable: !0
});
t.prototype.getPercentileThreshold = function(t, e) {
void 0 === e && (e = !1);
var i = this.getModelConfig(e), r = "p" + Math.min(100, Math.max(1, Math.round(t)));
return i.theta_summary.percentiles_1_100[r];
};
t.prototype.getPercentileByAbility = function(t, e) {
void 0 === e && (e = !1);
for (var i = this.getModelConfig(e).theta_summary.percentiles_1_100, r = 1; r <= 100; r++) if (t <= i["p" + r]) return r;
return 100;
};
return t;
}())());
i.AbilityConfig = f;
cc._RF.pop();
}, {
"../../../../../scripts/base/http/Http": void 0,
"./AbilityTypes": "AbilityTypes"
} ],
AbilityManagerMainService: [ function(t, e, i) {
"use strict";
cc._RF.push(e, "c5513XvEllNEr5LFbAkHryz", "AbilityManagerMainService");
var r = this && this.__awaiter || function(t, e, i, r) {
return new (i || (i = Promise))(function(n, a) {
function o(t) {
try {
s(r.next(t));
} catch (t) {
a(t);
}
}
function l(t) {
try {
s(r.throw(t));
} catch (t) {
a(t);
}
}
function s(t) {
t.done ? n(t.value) : (e = t.value, e instanceof i ? e : new i(function(t) {
t(e);
})).then(o, l);
var e;
}
s((r = r.apply(t, e || [])).next());
});
}, n = this && this.__generator || function(t, e) {
var i, r, n, a, o = {
label: 0,
sent: function() {
if (1 & n[0]) throw n[1];
return n[1];
},
trys: [],
ops: []
};
return a = {
next: l(0),
throw: l(1),
return: l(2)
}, "function" == typeof Symbol && (a[Symbol.iterator] = function() {
return this;
}), a;
function l(t) {
return function(e) {
return s([ t, e ]);
};
}
function s(a) {
if (i) throw new TypeError("Generator is already executing.");
for (;o; ) try {
if (i = 1, r && (n = 2 & a[0] ? r.return : a[0] ? r.throw || ((n = r.return) && n.call(r), 
0) : r.next) && !(n = n.call(r, a[1])).done) return n;
(r = 0, n) && (a = [ 2 & a[0], n.value ]);
switch (a[0]) {
case 0:
case 1:
n = a;
break;

case 4:
o.label++;
return {
value: a[1],
done: !1
};

case 5:
o.label++;
r = a[1];
a = [ 0 ];
continue;

case 7:
a = o.ops.pop();
o.trys.pop();
continue;

default:
if (!(n = o.trys, n = n.length > 0 && n[n.length - 1]) && (6 === a[0] || 2 === a[0])) {
o = 0;
continue;
}
if (3 === a[0] && (!n || a[1] > n[0] && a[1] < n[3])) {
o.label = a[1];
break;
}
if (6 === a[0] && o.label < n[1]) {
o.label = n[1];
n = a;
break;
}
if (n && o.label < n[2]) {
o.label = n[2];
o.ops.push(a);
break;
}
n[2] && o.ops.pop();
o.trys.pop();
continue;
}
a = e.call(t, o);
} catch (t) {
a = [ 6, t ];
r = 0;
} finally {
i = n = 0;
}
if (5 & a[0]) throw a[1];
return {
value: a[0] ? a[1] : void 0,
done: !0
};
}
}, a = this && this.__values || function(t) {
var e = "function" == typeof Symbol && Symbol.iterator, i = e && t[e], r = 0;
if (i) return i.call(t);
if (t && "number" == typeof t.length) return {
next: function() {
t && r >= t.length && (t = void 0);
return {
value: t && t[r++],
done: !t
};
}
};
throw new TypeError(e ? "Object is not iterable." : "Symbol.iterator is not defined.");
}, o = this && this.__read || function(t, e) {
var i = "function" == typeof Symbol && t[Symbol.iterator];
if (!i) return t;
var r, n, a = i.call(t), o = [];
try {
for (;(void 0 === e || e-- > 0) && !(r = a.next()).done; ) o.push(r.value);
} catch (t) {
n = {
error: t
};
} finally {
try {
r && !r.done && (i = a.return) && i.call(a);
} finally {
if (n) throw n.error;
}
}
return o;
};
Object.defineProperty(i, "__esModule", {
value: !0
});
i.AbilityManagerMainService = void 0;
var l = t("./AbilityConfig"), s = t("./AbilityTypes"), u = t("./AbilityAlgorithmCategoryService"), c = t("./AbilityCalculationService");
function p(t) {
var e, i, r = Object.keys(l.AbilityConfig.KEY_MAPPING).filter(function(e) {
return !(e in t);
});
if (r.length > 0) throw new Error("解析用户能力 缺少必要的键: " + r.join(", "));
var n = {};
try {
for (var s = a(Object.entries(l.AbilityConfig.KEY_MAPPING)), u = s.next(); !u.done; u = s.next()) {
var c = o(u.value, 2), p = c[0], f = c[1], y = t[p];
if (!Array.isArray(y) || 2 !== y.length || !Number.isFinite(y[0]) || !Number.isFinite(y[1])) throw new Error('键 "' + p + '" 的值格式不正确，需要 [number, number]');
n[f] = [ y[0], y[1] ];
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
return n;
}
var f = function() {
function t(t, e, i) {
this.LIMIT_TYPE = s.IAbilityLimitType.RECENTLY_NUM;
this.LIMIT_NUM = 10;
this.NEED_SERVER_DATA = !1;
this.is10G = !0;
this.delayedSuccessChecked = "";
this.is10G = t;
this.LIMIT_TYPE = e;
this.NEED_SERVER_DATA = i;
this.initServerData();
}
t.prototype.initServerData = function() {
var t, e;
this.NEED_SERVER_DATA && ((null === (t = this.data) || void 0 === t ? void 0 : t.severData) && 0 !== (null === (e = this.data) || void 0 === e ? void 0 : e.requestSeverTime) && hs.isSameDay(Date.now(), this.data.requestSeverTime) || this.requestServerData());
};
t.prototype.getData = function() {
null == this.data && (this.data = this.loadData());
return this.data;
};
t.prototype.begin = function() {
this.data = this.loadData();
this.clearExpiredData();
this.data.gameNum !== hs.classGameInfo.gameNum && this.startNewGame();
};
t.prototype.end = function() {
var t = this;
if (this.data && !this.isLimitReached()) {
Object.values(s.IAbilityModelType).forEach(function(e) {
var i = t.data.modelData[e];
if (!i.statics) {
i.statics = [];
i.staticsNum = 0;
}
if (i.cur) {
i.staticsNum += 1;
i.statics.push({
endTime: Date.now(),
statics: Object.assign({}, i.cur)
});
t.LIMIT_TYPE === s.IAbilityLimitType.RECENTLY_NUM && i.statics.length > t.LIMIT_NUM && i.statics.shift();
}
});
this.saveData();
}
};
t.prototype.round = function(t) {
var e = this;
if (this.data && !this.isLimitReached()) {
Object.values(s.IAbilityModelType).forEach(function(t) {
var i = e.data.modelData[t];
i.cur || (i.cur = {});
});
var i = hs.classAlgorithmName.algoActualName;
if (i) {
var r = !1, n = this.data.last;
if (!t && n && "" !== n.algo) {
var a = n.algo.split(","), l = u.AbilityAlgorithmCategory.getCategory(a);
Object.values(s.IAbilityModelType).forEach(function(t) {
var i, s = e.data.modelData[t];
s.cur || (s.cur = {});
if (e.checkSuccessForModel(n, a, l, t)) {
var u = o(null !== (i = s.cur[l]) && void 0 !== i ? i : [ 0, 0 ], 2), c = u[0], p = u[1];
s.cur[l] = [ c, p + 1 ];
r = !0;
}
});
}
var c = i.join(",");
if ("" !== c) {
var p = c.split(","), f = u.AbilityAlgorithmCategory.getCategory(p);
Object.values(s.IAbilityModelType).forEach(function(t) {
var i, r = e.data.modelData[t];
r.cur || (r.cur = {});
var n = o(null !== (i = r.cur[f]) && void 0 !== i ? i : [ 0, 0 ], 2), a = n[0], l = n[1];
r.cur[f] = [ a + 1, l ];
});
this.data.last = {
algo: c,
round: hs.classGameInfo.roundNum,
clearAll: !1,
maxClear: 0,
weight: hs.binarySupport.getWeightValue(hs.classBoardInfo.faceBlocks)
};
this.addToRecentRounds(c, hs.classGameInfo.roundNum);
r = !0;
}
r && this.saveData();
}
}
};
t.prototype.touchEnd = function(t) {
if (this.data && !this.isLimitReached()) {
var e = !1;
if (this.data.last && this.data.last.round === hs.classGameInfo.roundNum) {
if (t.clearAll) {
this.data.last.clearAll = !0;
e = !0;
}
if (t.clearNum > this.data.last.maxClear) {
this.data.last.maxClear = t.clearNum;
e = !0;
}
t.clearAll && this.updateRecentRoundClearInfo(hs.classGameInfo.roundNum, !0, t.clearNum);
if (t.clearNum > 0) {
this.updateRecentRoundClearInfo(hs.classGameInfo.roundNum, t.clearAll, t.clearNum);
(t.clearNum >= 2 || t.clearAll) && this.checkAndUpdateDelayedFillSuccess(hs.classGameInfo.roundNum, t.clearNum, t.clearAll);
}
e && this.saveData();
}
}
};
t.prototype.getAbilityInput = function(t) {
void 0 === t && (t = s.IAbilityModelType.MEDIUM);
return this.getAbilityInputForModel(t);
};
t.prototype.calculateAbility = function(t, e, i) {
void 0 === t && (t = s.IAbilityModelType.MEDIUM);
void 0 === i && (i = !1);
var r = this.getAbilityInput(t);
return c.AbilityCalculation.calculateAbility(r, {
modelType: t,
useEap: e,
use4PL: i
});
};
t.prototype.predictPassPossibility = function(t, e, i, r) {
void 0 === e && (e = s.IAbilityModelType.MEDIUM);
var n = this.calculateAbility(e, i, r);
return c.AbilityCalculation.predictPassPossibility(n, t, r);
};
t.prototype.getAllModelAbilities = function(t) {
var e = this, i = {};
Object.values(s.IAbilityModelType).forEach(function(r) {
var n = e.getAbilityInputForModel(r);
i[r] = c.AbilityCalculation.calculateAbility(n, {
modelType: r,
useEap: t
});
});
return i;
};
t.prototype.getAllModelStatistics = function() {
var t = this, e = {};
Object.values(s.IAbilityModelType).forEach(function(i) {
var r = t.data.modelData[i];
e[i] = {
cur: r.cur || {},
staticsNum: r.staticsNum || 0,
statics: r.statics || []
};
});
return e;
};
t.prototype.requestServerData = function() {
return r(this, void 0, Promise, function() {
var t;
return n(this, function(e) {
switch (e.label) {
case 0:
return [ 4, this.requestServerDataByHttp() ];

case 1:
if (t = e.sent()) {
this.data.severData = t;
this.data.requestSeverTime = Date.now();
this.saveData();
}
return [ 2 ];
}
});
});
};
t.prototype.requestServerDataByHttp = function() {
return new Promise(function(t) {
var e, i, r = (null === (e = hs.deviceInfo.data) || void 0 === e ? void 0 : e.distinct_id) || "0003C628-2BD8-46C3-8B58-DE117C897D1E";
i = l.AbilityConfig.ONLINEURL;
hs.http.requestAsync(i, {
uid: r,
os: "ios"
}, {
type: hs.HttpType.POST
}).then(function(e) {
if (e && 0 === e.code) {
var i = p(JSON.parse(e.data));
t(i);
} else t(null);
}).catch(function() {
t(null);
});
});
};
t.prototype.addToRecentRounds = function(t, e) {
this.data.recentRounds || (this.data.recentRounds = []);
var i = this.data.recentRounds.find(function(t) {
return t.round === e;
});
i ? i.algo = t : this.data.recentRounds.push({
algo: t,
round: e,
clearAll: !1,
maxClear: 0,
weight: hs.binarySupport.getWeightValue(hs.classBoardInfo.faceBlocks)
});
this.data.recentRounds.length > 3 && (this.data.recentRounds = this.data.recentRounds.slice(-3));
};
t.prototype.updateRecentRoundClearInfo = function(t, e, i) {
this.data.recentRounds || (this.data.recentRounds = []);
var r = this.data.recentRounds.find(function(e) {
return e.round === t;
});
if (r) {
r.clearAll = e;
r.maxClear = Math.max(r.maxClear || 0, i);
} else this.data.recentRounds.push({
algo: "",
round: t,
clearAll: e,
maxClear: i,
weight: hs.binarySupport.getWeightValue(hs.classBoardInfo.faceBlocks)
});
this.data.recentRounds.length > 3 && (this.data.recentRounds = this.data.recentRounds.slice(-3));
};
t.prototype.clearExpiredData = function() {
if (this.LIMIT_TYPE === s.IAbilityLimitType.RECENTLY_DAY) {
var t = new Date();
t.setHours(0, 0, 0, 0);
var e = t.getTime() - 864e5 * (this.LIMIT_NUM - 1);
Object.values(this.data.modelData).forEach(function(t) {
t.statics && (t.statics = t.statics.filter(function(t) {
return t.endTime > e;
}));
});
this.saveData();
}
};
t.prototype.startNewGame = function() {
var t = this;
this.data.gameNum = hs.classGameInfo.gameNum;
this.data.last = {
algo: "",
round: -1,
clearAll: !1,
maxClear: 0,
weight: hs.binarySupport.getWeightValue(hs.classBoardInfo.faceBlocks)
};
this.data.recentRounds = [];
this.delayedSuccessChecked = "";
Object.values(s.IAbilityModelType).forEach(function(e) {
t.data.modelData[e].cur = {};
});
this.saveData();
};
t.prototype.isLimitReached = function() {
var t, e;
try {
for (var i = a(Object.values(s.IAbilityModelType)), r = i.next(); !r.done; r = i.next()) {
var n = r.value, o = this.data.modelData[n];
if (this.LIMIT_TYPE === s.IAbilityLimitType.NUM && o.staticsNum >= this.LIMIT_NUM) return !0;
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
return this.LIMIT_TYPE === s.IAbilityLimitType.DAYS && new Date().getTime() - this.data.startTime >= 864e5 * this.LIMIT_NUM;
};
t.prototype.checkSuccessForModel = function(t, e, i, r) {
if (!this.checkBasicSuccess(t)) return !1;
var n = !1;
switch (r) {
case s.IAbilityModelType.LOOSE:
n = this.checkLooseSuccess(t, e, i);
break;

case s.IAbilityModelType.MEDIUM:
n = this.checkMediumSuccess(t, e, i);
break;

case s.IAbilityModelType.STRICT:
n = this.checkStrictSuccess(t, e, i);
break;

default:
n = this.checkMediumSuccess(t, e, i);
}
return n;
};
t.prototype.checkBasicSuccess = function() {
return !0;
};
t.prototype.checkLooseSuccess = function() {
return !0;
};
t.prototype.checkMediumSuccess = function(t, e, i) {
switch (i) {
case "爽感提升类":
return !(e.some(function(t) {
return t.includes("切割");
}) && t.maxClear < 2 || e.some(function(t) {
return t.includes("清盘") || t.includes("清屏");
}) && !t.clearAll);

case "秩序填空类":
case "普通填空类":
return t.maxClear >= 1;

default:
return !0;
}
};
t.prototype.checkStrictSuccess = function(t, e, i) {
switch (i) {
case "权重控制类":
return this.checkWeightControlSuccess(t, e);

case "秩序填空类":
case "普通填空类":
return this.checkFillSuccess(t, e, i);

case "爽感提升类":
return this.checkMediumSuccess(t, e, i);

default:
return !0;
}
};
t.prototype.checkWeightControlSuccess = function(t, e) {
var i = this.getWeightChange(t, e), r = l.AbilityConfig.WEIGHT_LIMITS.OTHER_WEIGHT;
e.some(function(t) {
return t.includes("难题降级");
}) ? r = l.AbilityConfig.WEIGHT_LIMITS.DIFFICULTY_DOWNGRADE : e.some(function(t) {
return t.includes("分数算法");
}) && (r = l.AbilityConfig.WEIGHT_LIMITS.SCORE_ALGORITHM);
return i <= r;
};
t.prototype.checkFillSuccess = function(t, e, i) {
var r = this.checkImmediateSuccess(t), n = this.checkDelayedSuccess(t, i, s.IAbilityModelType.STRICT), a = r || n;
n && !r && this.updateDelayedSuccessStatistics(t.round, i, s.IAbilityModelType.STRICT);
return a;
};
t.prototype.getWeightChange = function() {
if (!this.data.recentRounds || this.data.recentRounds.length < 2) return 0;
var t = this.data.recentRounds.filter(function(t) {
return void 0 !== t.weight && null !== t.weight;
}).sort(function(t, e) {
return e.round - t.round;
});
if (t.length < 2) return 0;
var e = t[0], i = t[1];
return (e.weight || 0) - (i.weight || 0);
};
t.prototype.checkImmediateSuccess = function(t) {
return t.maxClear >= 1 || t.clearAll;
};
t.prototype.checkDelayedSuccess = function(t, e, i) {
void 0 === i && (i = s.IAbilityModelType.MEDIUM);
return t.round, !1;
};
t.prototype.checkAndUpdateDelayedFillSuccess = function(t) {
var e, i, r = "delayed_" + t;
if (this.delayedSuccessChecked !== r) {
this.delayedSuccessChecked = r;
for (var n = [], l = Math.max(1, t - 3); l < t; l++) n.push(l);
var c = this.data.modelData[s.IAbilityModelType.STRICT];
if (c.cur) {
var p = function(t) {
var e = f.data.recentRounds.find(function(e) {
return e.round === t;
});
if (!e || !e.algo) return "continue";
var i = e.algo.split(","), r = u.AbilityAlgorithmCategory.getCategory(i);
if ("秩序填空类" !== r && "普通填空类" !== r) return "continue";
if (e.maxClear >= 1 || e.clearAll) return "continue";
if (e.delayedSuccess) return "continue";
if (c.cur[r]) {
var n = o(c.cur[r], 2), a = n[0], l = n[1];
if (l < a) {
c.cur[r] = [ a, l + 1 ];
e.delayedSuccess = !0;
}
}
}, f = this;
try {
for (var y = a(n), d = y.next(); !d.done; d = y.next()) p(d.value);
} catch (t) {
e = {
error: t
};
} finally {
try {
d && !d.done && (i = y.return) && i.call(y);
} finally {
if (e) throw e.error;
}
}
}
}
};
t.prototype.updateDelayedSuccessStatistics = function(t, e, i) {
var r = this.data.modelData[i];
if (r.statics && 0 !== r.statics.length) {
var n = !1;
if (r.cur && r.cur[e]) {
var a = o(r.cur[e], 2), l = a[0], s = a[1];
if (s < l) {
r.cur[e] = [ l, s + 1 ];
n = !0;
}
}
n && this.saveData();
}
};
t.prototype.getAbilityInputForModel = function(t) {
var e, i, r, n, l, s, c = {};
try {
for (var p = a(u.AbilityAlgorithmCategory.getCategories()), f = p.next(); !f.done; f = p.next()) c[v = f.value] = {
count: 0,
solved: 0
};
} catch (t) {
e = {
error: t
};
} finally {
try {
f && !f.done && (i = p.return) && i.call(p);
} finally {
if (e) throw e.error;
}
}
if (!this.data || !this.data.modelData) return c;
var y = null !== (l = this.data.modelData[t].statics) && void 0 !== l ? l : [];
try {
for (var d = a(y), h = d.next(); !h.done; h = d.next()) {
var b = h.value;
for (var v in b.statics) if (b.statics[v] && c[v]) {
var m = o(b.statics[v], 2), g = m[0], A = m[1];
c[v].count += g;
c[v].solved += A;
}
}
} catch (t) {
r = {
error: t
};
} finally {
try {
h && !h.done && (n = d.return) && n.call(d);
} finally {
if (r) throw r.error;
}
}
if (this.NEED_SERVER_DATA && (null === (s = this.data) || void 0 === s ? void 0 : s.severData)) for (var v in this.data.severData) if (this.data.severData[v] && c[v]) {
var _ = o(this.data.severData[v], 2);
g = _[0], A = _[1];
c[v].count += g;
c[v].solved += A;
}
return c;
};
t.prototype.loadData = function() {
var t, e = l.AbilityConfig.getSTORAGE_KEY(this.is10G);
return hs.storage.getItem(e, {
gameNum: -1,
startTime: new Date().getTime(),
requestSeverTime: 0,
last: {
algo: "",
round: -1,
clearAll: !1,
maxClear: 0,
weight: hs.binarySupport.getWeightValue(hs.classBoardInfo.faceBlocks)
},
recentRounds: [],
modelData: (t = {}, t[s.IAbilityModelType.LOOSE] = {
cur: {},
statics: [],
staticsNum: 0
}, t[s.IAbilityModelType.MEDIUM] = {
cur: {},
statics: [],
staticsNum: 0
}, t[s.IAbilityModelType.STRICT] = {
cur: {},
statics: [],
staticsNum: 0
}, t)
});
};
t.prototype.saveData = function(t) {
var e = t || this.data, i = l.AbilityConfig.getSTORAGE_KEY(this.is10G);
hs.storage.setItem(i, e);
};
return t;
}();
i.AbilityManagerMainService = f;
cc._RF.pop();
}, {
"./AbilityAlgorithmCategoryService": "AbilityAlgorithmCategoryService",
"./AbilityCalculationService": "AbilityCalculationService",
"./AbilityConfig": "AbilityConfig",
"./AbilityTypes": "AbilityTypes"
} ],
AbilityTypes: [ function(t, e, i) {
"use strict";
cc._RF.push(e, "78813nE3VxOWqWQio/84GqM", "AbilityTypes");
Object.defineProperty(i, "__esModule", {
value: !0
});
i.IAbilityModelType = i.IAbilityLimitType = void 0;
(function(t) {
t[t.NUM = 0] = "NUM";
t[t.RECENTLY_NUM = 1] = "RECENTLY_NUM";
t[t.DAYS = 2] = "DAYS";
t[t.RECENTLY_DAY = 3] = "RECENTLY_DAY";
t[t.CUSTOM = 4] = "CUSTOM";
})(i.IAbilityLimitType || (i.IAbilityLimitType = {}));
(function(t) {
t.LOOSE = "loose";
t.MEDIUM = "medium";
t.STRICT = "strict";
})(i.IAbilityModelType || (i.IAbilityModelType = {}));
cc._RF.pop();
}, {} ],
BinomialPL: [ function(t, e, i) {
"use strict";
cc._RF.push(e, "2f65et/plZEX6ld1tmaadF/", "BinomialPL");
Object.defineProperty(i, "__esModule", {
value: !0
});
i.BinomialPL = void 0;
var r = t("./lbfgsb-optimizer"), n = function(t, e, i) {
return Math.max(e, Math.min(i, t));
}, a = function(t, e, i, r, a) {
var o, l = r + (a - r) * (o = n(e * (t - i), -35, 35), 1 / (1 + Math.exp(-o)));
return n(l, 1e-12, 1 - 1e-12);
}, o = function(t, e, i) {
var r = Math.max(i, Math.sqrt(1e-12)), n = r * r;
return -.5 * Math.log(2 * Math.PI * n) - (t - e) * (t - e) / (2 * n);
};
function l(t, e) {
var i, r, a = null == t ? void 0 : t[e];
if (!a) return null;
var o = null !== (i = a.cnt) && void 0 !== i ? i : a.count, l = null !== (r = a.solved_cnt_middle) && void 0 !== r ? r : a.solved, s = Number(o);
if (!isFinite(s) || s <= 0) return null;
var u = Number(l);
isFinite(u) || (u = 0);
return {
n: s,
k: u = n(u, 0, s)
};
}
function s(t, e) {
var i, r, n, a, o, l, s, u, c = null == t ? void 0 : t[e];
if (!c) return null;
var p = Number(null !== (r = null !== (i = c.a) && void 0 !== i ? i : c.aj) && void 0 !== r ? r : 1), f = Number(null !== (a = null !== (n = c.b) && void 0 !== n ? n : c.bj) && void 0 !== a ? a : 0), y = Number(null !== (l = null !== (o = c.c) && void 0 !== o ? o : c.cj) && void 0 !== l ? l : 0), d = Number(null !== (u = null !== (s = c.d) && void 0 !== s ? s : c.dj) && void 0 !== u ? u : 1);
return isFinite(p) && isFinite(f) && isFinite(y) && isFinite(d) ? {
a: p,
b: f,
c: y,
d: d
} : null;
}
function u(t, e, i) {
return -(e * Math.log(i) + (t - e) * Math.log(1 - i));
}
var c = new (function() {
function t() {}
t.prototype.estimateThetaMAP = function(t, e, i, n, c, p) {
void 0 === c && (c = 60);
void 0 === p && (p = 1e-6);
var f = Number(i), y = Math.max(Number(n), Math.sqrt(1e-12));
if (!isFinite(f) || !isFinite(y)) return -1;
var d = function(i) {
var r = -o(i, f, y);
for (var n in t) {
var c = l(t, n);
if (c) {
var p = s(e, n);
if (p) {
var d = a(i, p.a, p.b, p.c, p.d);
r += u(c.n, c.k, d);
}
}
}
return isFinite(r) ? r : Number.POSITIVE_INFINITY;
}, h = [ f ];
try {
var b = r.minimize(function(t) {
return d(t[0]);
}, h, {
maxIterations: c,
tolerance: p,
bounds: [ [ -6, 6 ] ]
});
if (b.success && isFinite(b.x[0])) return b.x[0];
if (isFinite(b.x[0]) && b.x[0] >= -6 && b.x[0] <= 6) return b.x[0];
} catch (t) {}
return f;
};
t.prototype.predictProb = function(t, e, i) {
var r = s(t, i);
if (!r) return -1;
var n = a(e, r.a, r.b, r.c, r.d);
return isFinite(n) ? n : -1;
};
return t;
}())();
i.BinomialPL = c;
cc._RF.pop();
}, {
"./lbfgsb-optimizer": "lbfgsb-optimizer"
} ],
Eap4PL: [ function(t, e, i) {
"use strict";
cc._RF.push(e, "03180DsyAlNVJToY5Vb2HNv", "Eap4PL");
var r = this && this.__values || function(t) {
var e = "function" == typeof Symbol && Symbol.iterator, i = e && t[e], r = 0;
if (i) return i.call(t);
if (t && "number" == typeof t.length) return {
next: function() {
t && r >= t.length && (t = void 0);
return {
value: t && t[r++],
done: !t
};
}
};
throw new TypeError(e ? "Object is not iterable." : "Symbol.iterator is not defined.");
};
Object.defineProperty(i, "__esModule", {
value: !0
});
i.Eap4PLCalculator = void 0;
var n = t("./AbilityConfig"), a = function() {
function t() {}
t.prototype.loglikeUser4PL = function(t, e) {
for (var i = e.n, r = e.k, n = e.a, a = e.b, o = e.c, l = e.d, s = e.eps, u = void 0 === s ? 1e-9 : s, c = !1, p = 0, f = i.length, y = 0; y < f; y++) {
var d = Number(i[y]), h = Number(r[y]), b = Number(n[y]), v = Number(a[y]);
if (Number.isFinite(d) && Number.isFinite(h) && Number.isFinite(b) && Number.isFinite(v)) {
var m = o[y], g = l[y], A = Number.isFinite(m) ? Number(m) : 0;
c = !0;
var _ = b * (t - v), C = A + ((Number.isFinite(g) ? Number(g) : 1) - A) / (1 + Math.exp(-_));
C = Math.min(Math.max(C, u), 1 - u);
p += h * Math.log(C) + (d - h) * Math.log(1 - C);
}
}
return c ? p : -Infinity;
};
t.prototype.eapHermite4PL = function(t, e, i, r) {
for (var n, a, o, l, s, u, c = Float64Array.from(null !== (n = t.cnt) && void 0 !== n ? n : []), p = Float64Array.from(null !== (a = t.solved_cnt_easy) && void 0 !== a ? a : []), f = Float64Array.from(null !== (o = t.a) && void 0 !== o ? o : []), y = Float64Array.from(null !== (l = t.b) && void 0 !== l ? l : []), d = Float64Array.from(null !== (s = t.c) && void 0 !== s ? s : []), h = Float64Array.from(null !== (u = t.d) && void 0 !== u ? u : []), b = 0, v = !1, m = 0; m < c.length; m++) {
var g = c[m];
if (Number.isFinite(g)) {
v = !0;
b += g;
}
}
if (!v || b <= 0) return {
theta_eap: Number(e),
var: Number(i) * Number(i)
};
var A = r.nodes, _ = r.weights, C = A.length, M = Math.sqrt(2), T = new Float64Array(C);
for (m = 0; m < C; m++) T[m] = e + M * i * A[m];
var S = new Float64Array(C), I = -Infinity;
for (m = 0; m < C; m++) {
var E = this.loglikeUser4PL(T[m], {
n: c,
k: p,
a: f,
b: y,
c: d,
d: h
}), P = Math.log(_[m]) + E;
S[m] = P;
P > I && (I = P);
}
var N = 0, R = 0, w = 0;
for (m = 0; m < C; m++) {
var L = Math.exp(S[m] - I);
N += L;
R += T[m] * L;
w += T[m] * T[m] * L;
}
if (!Number.isFinite(N) || N <= 0) return {
theta_eap: Number(e),
var: Number(i) * Number(i)
};
var O = R / N, D = w / N, x = Math.max(0, D - O * O);
return {
theta_eap: Number.isFinite(O) ? O : Number(e),
var: Number.isFinite(x) ? x : Number(i) * Number(i)
};
};
t.prototype.getGaussHermite = function(e) {
if (21 === e) return t.GH21;
throw new Error("Unsupported GH order: " + e + ". 当前实现仅支持 21 阶。");
};
t.prototype.calculateEapAbility = function(t, e, i, a) {
var o, l, s, u, c, p, f = null != a ? a : n.AbilityConfig.ITEM_PARAMS_4PL, y = null != e ? e : n.AbilityConfig.PRIOR_4PL.mu, d = null != i ? i : n.AbilityConfig.PRIOR_4PL.sigma, h = {
cnt: [],
solved_cnt_easy: [],
a: [],
b: [],
c: [],
d: []
};
try {
for (var b = r(f), v = b.next(); !v.done; v = b.next()) {
var m = v.value, g = t[m.question_category], A = null !== (s = null == g ? void 0 : g.count) && void 0 !== s ? s : 0, _ = null !== (u = null == g ? void 0 : g.solved) && void 0 !== u ? u : 0;
h.cnt.push(A);
h.solved_cnt_easy.push(_);
h.a.push(m.a);
h.b.push(m.b);
h.c.push(null !== (c = m.c) && void 0 !== c ? c : 0);
h.d.push(null !== (p = m.d) && void 0 !== p ? p : 1);
}
} catch (t) {
o = {
error: t
};
} finally {
try {
v && !v.done && (l = b.return) && l.call(b);
} finally {
if (o) throw o.error;
}
}
var C = this.getGaussHermite(21), M = this.eapHermite4PL(h, y, d, C), T = M.theta_eap;
M.var;
return T;
};
t.GH21 = {
nodes: [ -5.55035187, -4.77399234, -4.12199555, -3.53197288, -2.97999121, -2.45355212, -1.94496295, -1.44893425, -.96149963, -.47945071, 0, .47945071, .96149963, 1.44893425, 1.94496295, 2.45355212, 2.97999121, 3.53197288, 4.12199555, 4.77399234, 5.55035187 ],
weights: [ 372036507e-22, 881861124e-19, 2.57123018e-8, 21718849e-13, 747839887e-13, .00125498204, .0114140658, .0601796467, .192120324, .381669074, .479023703, .381669074, .192120324, .0601796467, .0114140658, .00125498204, 747839887e-13, 21718849e-13, 2.57123018e-8, 881861124e-19, 372036507e-22 ]
};
return t;
}();
i.Eap4PLCalculator = new a();
cc._RF.pop();
}, {
"./AbilityConfig": "AbilityConfig"
} ],
NewAbilityModelTrait: [ function(t, e, i) {
"use strict";
cc._RF.push(e, "9dfafm9eRhLo7hEMy7PTlvm", "NewAbilityModelTrait");
var r, n = this && this.__extends || (r = function(t, e) {
return (r = Object.setPrototypeOf || {
__proto__: []
} instanceof Array && function(t, e) {
t.__proto__ = e;
} || function(t, e) {
for (var i in e) Object.prototype.hasOwnProperty.call(e, i) && (t[i] = e[i]);
})(t, e);
}, function(t, e) {
r(t, e);
function i() {
this.constructor = t;
}
t.prototype = null === e ? Object.create(e) : (i.prototype = e.prototype, new i());
}), a = this && this.__decorate || function(t, e, i, r) {
var n, a = arguments.length, o = a < 3 ? e : null === r ? r = Object.getOwnPropertyDescriptor(e, i) : r;
if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) o = Reflect.decorate(t, e, i, r); else for (var l = t.length - 1; l >= 0; l--) (n = t[l]) && (o = (a < 3 ? n(o) : a > 3 ? n(e, i, o) : n(e, i)) || o);
return a > 3 && o && Object.defineProperty(e, i, o), o;
}, o = this && this.__awaiter || function(t, e, i, r) {
return new (i || (i = Promise))(function(n, a) {
function o(t) {
try {
s(r.next(t));
} catch (t) {
a(t);
}
}
function l(t) {
try {
s(r.throw(t));
} catch (t) {
a(t);
}
}
function s(t) {
t.done ? n(t.value) : (e = t.value, e instanceof i ? e : new i(function(t) {
t(e);
})).then(o, l);
var e;
}
s((r = r.apply(t, e || [])).next());
});
}, l = this && this.__generator || function(t, e) {
var i, r, n, a, o = {
label: 0,
sent: function() {
if (1 & n[0]) throw n[1];
return n[1];
},
trys: [],
ops: []
};
return a = {
next: l(0),
throw: l(1),
return: l(2)
}, "function" == typeof Symbol && (a[Symbol.iterator] = function() {
return this;
}), a;
function l(t) {
return function(e) {
return s([ t, e ]);
};
}
function s(a) {
if (i) throw new TypeError("Generator is already executing.");
for (;o; ) try {
if (i = 1, r && (n = 2 & a[0] ? r.return : a[0] ? r.throw || ((n = r.return) && n.call(r), 
0) : r.next) && !(n = n.call(r, a[1])).done) return n;
(r = 0, n) && (a = [ 2 & a[0], n.value ]);
switch (a[0]) {
case 0:
case 1:
n = a;
break;

case 4:
o.label++;
return {
value: a[1],
done: !1
};

case 5:
o.label++;
r = a[1];
a = [ 0 ];
continue;

case 7:
a = o.ops.pop();
o.trys.pop();
continue;

default:
if (!(n = o.trys, n = n.length > 0 && n[n.length - 1]) && (6 === a[0] || 2 === a[0])) {
o = 0;
continue;
}
if (3 === a[0] && (!n || a[1] > n[0] && a[1] < n[3])) {
o.label = a[1];
break;
}
if (6 === a[0] && o.label < n[1]) {
o.label = n[1];
n = a;
break;
}
if (n && o.label < n[2]) {
o.label = n[2];
o.ops.push(a);
break;
}
n[2] && o.ops.pop();
o.trys.pop();
continue;
}
a = e.call(t, o);
} catch (t) {
a = [ 6, t ];
r = 0;
} finally {
i = n = 0;
}
if (5 & a[0]) throw a[1];
return {
value: a[0] ? a[1] : void 0,
done: !0
};
}
}, s = this && this.__read || function(t, e) {
var i = "function" == typeof Symbol && t[Symbol.iterator];
if (!i) return t;
var r, n, a = i.call(t), o = [];
try {
for (;(void 0 === e || e-- > 0) && !(r = a.next()).done; ) o.push(r.value);
} catch (t) {
n = {
error: t
};
} finally {
try {
r && !r.done && (i = a.return) && i.call(a);
} finally {
if (n) throw n.error;
}
}
return o;
};
Object.defineProperty(i, "__esModule", {
value: !0
});
i.NewAbilityModelTrait = void 0;
var u = t("../vo/AbilityManagerMainService"), c = t("../vo/AbilityConfig"), p = t("../vo/AbilityTypes"), f = t("../vo/AbilityAlgorithmCategoryService"), y = t("../vo/AbilityCalculationService"), d = function(t) {
n(e, t);
function e() {
var e = null !== t && t.apply(this, arguments) || this;
e.abilityService = null;
return e;
}
e.prototype.data = function() {
return {
initialized: !1,
canCalculateCache: new Map()
};
};
e.prototype.onCreate = function() {
if (!this.state.initialized) {
this.abilityService = new u.AbilityManagerMainService(!0, p.IAbilityLimitType.RECENTLY_NUM, !1);
this.state.initialized = !0;
this.updateRemoteConfig();
}
this.registerGmMenu();
};
e.prototype.registerTraitEventsMethods = function() {
return [ {
className: "ClassGame_Proxy",
methodName: "onClassGameStart"
}, {
className: "ClassGameOver_GameEnd_Proxy",
methodName: "onGameEnd"
}, {
className: "ClassBlocksProducer_RoundDot_Proxy",
methodName: "onAlgorithmStrategyRequest"
}, {
className: "ClassBlocksProducer_TouchDot_Proxy",
methodName: "onTouchEndDelay"
} ];
};
e.prototype.onActive = function(t) {
var e, i, r, n, a;
hs.tp.isClassGame_ProxyOnClassGameStart(t) && (null === (e = this.abilityService) || void 0 === e || e.begin());
hs.tp.isClassGameOver_GameEnd_ProxyOnGameEnd(t) && (null === (i = this.abilityService) || void 0 === i || i.end());
if (hs.tp.isClassBlocksProducer_RoundDot_ProxyOnAlgorithmStrategyRequest(t)) {
var o = t.args[0].option, l = o.strategyState;
o.runStateType === hs.ClassAlgorithmStrategyRunStateType.END && (null === (r = this.abilityService) || void 0 === r || r.round(l === hs.ALGO_STRATEGY_TYPE.REVIVE));
}
if (hs.tp.isClassBlocksProducer_TouchDot_ProxyOnTouchEndDelay(t)) {
var u = t.args[0].state, c = u.remainBlockProducerCount, p = u.clearScreen, f = u.eliminateRows, y = u.eliminateCols, d = [ "a", "b", "c", "d", "e", "f", "g", "h" ], h = Object.keys(f).map(function(t) {
return d[t];
}).concat(Object.keys(y).map(function(t) {
return +t;
})), b = {
round: hs.classGameInfo.roundNum,
step: c,
clearNum: h.length,
clearAll: p
};
null === (n = this.abilityService) || void 0 === n || n.touchEnd(b);
}
if (hs.tp.isAbilityPredictTraitGetAbilityModelAbilityValue(t) || hs.tp.isCTRefactorAbilityPredictTraitGetAbilityModelAbilityValue(t)) {
var v = s(t.args, 3), m = v[0], g = v[1], A = void 0 !== g && g, _ = v[2], C = void 0 !== _ && _, M = null !== (a = this.calculateAbility(m, A, C)) && void 0 !== a ? a : 0, T = {
abilityValue: M,
percentile: this.getPercentileByAbility(M, C)
};
t.returnValue = T;
t.replace = !0;
}
if (hs.tp.isAbilityPredictTraitGetAbilityModelCategoryTypeRate(t) || hs.tp.isCTRefactorAbilityPredictTraitGetAbilityModelCategoryTypeRate(t)) {
var S = s(t.args, 3), I = S[0], E = S[1], P = S[2], N = (C = void 0 !== P && P, 
this.getAbilityModelCategoryTypeRate(I, E, C));
t.returnValue = N;
t.replace = !0;
}
if (hs.tp.isAbilityPredictTraitGetAbilityModelCategoryType(t) || hs.tp.isCTRefactorAbilityPredictTraitGetAbilityModelCategoryType(t)) {
var R = t.args[0];
E = this.getAbilityModelCategory(R);
t.returnValue = E;
t.replace = !0;
}
};
e.prototype.getAbilityModelCategory = function(t) {
return f.AbilityAlgorithmCategory.getCategory(t);
};
e.prototype.getAbilityModelCategoryTypeRate = function(t, e, i) {
void 0 === i && (i = !1);
return y.AbilityCalculation.predictPassPossibility(t, e, i);
};
e.prototype.canCalculateAbility = function(t) {
var e, i;
void 0 === t && (t = "loose");
if ((null === (e = hs.gameInfo) || void 0 === e ? void 0 : e.gameMode) !== hs.GameMode.Class) return !1;
var r = t;
if (this.state.canCalculateCache.has(r)) return !0;
if (!this.abilityService) return !1;
this.abilityService && (null === (i = this.abilityService) || void 0 === i || i.getData());
var n = this.abilityService.getAbilityInput(r);
if (!n) return !1;
var a = 0;
for (var o in n) n[o].count > 0 && (a += n[o].count);
var l = a > 30;
l && this.state.canCalculateCache.set(r, !0);
return l;
};
e.prototype.calculateAbility = function(t, e, i) {
var r, n, a, o;
void 0 === t && (t = "loose");
void 0 === e && (e = !1);
void 0 === i && (i = !1);
if ((null === (r = hs.gameInfo) || void 0 === r ? void 0 : r.gameMode) !== hs.GameMode.Class) return 0;
this.abilityService && (null === (n = this.abilityService) || void 0 === n || n.getData());
return null !== (o = null === (a = this.abilityService) || void 0 === a ? void 0 : a.calculateAbility(t, e, i)) && void 0 !== o ? o : 0;
};
e.prototype.getAbilityThresholdByPercentile = function(t, e) {
void 0 === e && (e = !1);
return c.AbilityConfig.getPercentileThreshold(t, e);
};
e.prototype.getAbilityStats = function(t) {
void 0 === t && (t = !1);
var e = c.AbilityConfig.getModelConfig(t);
return {
mean: e.theta_summary.mean,
sigma: e.theta_summary.sigma,
n_users: e.theta_summary.n_users
};
};
e.prototype.reportUserAbilityModel = function(t, e, i, r) {
var n, a, o, l;
void 0 === e && (e = "game");
void 0 === i && (i = !1);
void 0 === r && (r = !1);
var s = c.AbilityConfig.getModelConfig(r), u = {
game_id: hs.classGameInfo.gameNum,
optimization_type: i ? "EAP" : "MAP",
sample_type: "10G",
theta_value: "number" == typeof t ? t.toFixed(4) : t,
param_num: null !== (a = null === (n = s._meta) || void 0 === n ? void 0 : n.model_type) && void 0 !== a ? a : r ? "4PL" : "2PL",
config_refresh: e,
model_version: null !== (l = null === (o = s._meta) || void 0 === o ? void 0 : o.generated_at_utc) && void 0 !== l ? l : ""
};
DS("usr_data_user_ability_model", u);
};
e.prototype.updateRemoteConfig = function() {
return o(this, void 0, Promise, function() {
return l(this, function(t) {
switch (t.label) {
case 0:
return [ 4, c.AbilityConfig.updateConfigFromRemote() ];

case 1:
t.sent();
return [ 2 ];
}
});
});
};
e.prototype.testPredictAbility = function() {
if (this.canCalculateAbility()) {
var t = this.calculateAbility("loose", !1, !1), e = this.calculateAbility("loose", !0, !1);
c.AbilityConfig.getPercentileByAbility(t, !1), c.AbilityConfig.getPercentileByAbility(e, !1);
}
};
e.prototype.getPercentileByAbility = function(t, e) {
void 0 === e && (e = !1);
return c.AbilityConfig.getPercentileByAbility(t, e);
};
e.prototype.registerGmMenu = function() {};
e._gmRegistered = !1;
e._gmAbilityCache = 0;
return a([ classId("NewAbilityModelTrait") ], e);
}(Trait);
i.NewAbilityModelTrait = d;
cc._RF.pop();
}, {
"../vo/AbilityAlgorithmCategoryService": "AbilityAlgorithmCategoryService",
"../vo/AbilityCalculationService": "AbilityCalculationService",
"../vo/AbilityConfig": "AbilityConfig",
"../vo/AbilityManagerMainService": "AbilityManagerMainService",
"../vo/AbilityTypes": "AbilityTypes"
} ],
"lbfgsb-optimizer": [ function(t, e, i) {
"use strict";
cc._RF.push(e, "462d3Zswh9K7KE770LqHw5T", "lbfgsb-optimizer");
var r = this && this.__read || function(t, e) {
var i = "function" == typeof Symbol && t[Symbol.iterator];
if (!i) return t;
var r, n, a = i.call(t), o = [];
try {
for (;(void 0 === e || e-- > 0) && !(r = a.next()).done; ) o.push(r.value);
} catch (t) {
n = {
error: t
};
} finally {
try {
r && !r.done && (i = a.return) && i.call(a);
} finally {
if (n) throw n.error;
}
}
return o;
};
Object.defineProperty(i, "__esModule", {
value: !0
});
i.minimize = void 0;
var n = function(t, e) {
for (var i = 0, r = 0; r < t.length; r++) i += t[r] * e[r];
return i;
}, a = function(t) {
return Math.sqrt(n(t, t));
}, o = function(t, e, i) {
return t.map(function(t, r) {
return t + i * e[r];
});
}, l = function(t, e) {
return t.map(function(t, i) {
return t - e[i];
});
}, s = function(t, e) {
return t.map(function(t) {
return t * e;
});
}, u = function(t, e, i) {
return Math.max(e, Math.min(i, t));
}, c = function(t, e) {
return e ? t.map(function(t, i) {
var n, a = r(null !== (n = e[i]) && void 0 !== n ? n : [ -Infinity, Infinity ], 2), o = a[0], l = a[1];
return u(t, o, l);
}) : t;
}, p = function(t, e, i) {
for (var r = new Array(e.length).fill(0), n = 0; n < e.length; n++) {
var a = i, o = e.slice(), l = e.slice();
o[n] += a;
l[n] -= a;
var s = t(o), u = t(l);
r[n] = (s - u) / (2 * a);
}
return r;
}, f = function(t, e) {
for (var i = e.sList, r = e.yList, a = e.rhoList, o = t.slice(), l = new Array(i.length).fill(0), u = i.length - 1; u >= 0; u--) {
l[u] = a[u] * n(i[u], o);
for (var c = 0; c < o.length; c++) o[c] -= l[u] * r[u][c];
}
var p = o;
if (i.length > 0) {
var f = i[i.length - 1], y = r[r.length - 1], d = n(f, y), h = n(y, y);
p = s(o, h > 0 ? d / h : 1);
}
for (u = 0; u < i.length; u++) {
var b = a[u] * n(r[u], p), v = l[u] - b;
for (c = 0; c < p.length; c++) p[c] += v * i[u][c];
}
return p;
}, y = function(t) {
var e = t.f, i = t.x, r = t.fx, a = t.g, l = t.bounds, u = t.initStep, p = void 0 === u ? 1 : u, f = t.p, y = p, d = n(a, f);
(!isFinite(d) || d >= 0) && (f = s(a, -1));
for (var h = 0; h < 30; h++) {
var b = c(o(i, f, y), l), v = e(b);
if (isFinite(v) && v <= r + 1e-4 * y * d) return {
xNew: b,
fNew: v,
step: y
};
if ((y *= .5) < 1e-12) break;
}
return {
xNew: i.slice(),
fNew: r,
step: 0
};
};
i.minimize = function(t, e, i) {
var r, o, u, d, h;
void 0 === i && (i = {});
var b = null !== (r = i.maxIterations) && void 0 !== r ? r : 100, v = null !== (o = i.tolerance) && void 0 !== o ? o : 1e-6, m = null !== (u = i.m) && void 0 !== u ? u : 10, g = null !== (d = i.stepSize) && void 0 !== d ? d : 1, A = i.bounds, _ = null !== (h = i.fdEps) && void 0 !== h ? h : 1e-6, C = c(e.slice(), A), M = t(C);
if (!isFinite(M)) return {
x: C,
f: M,
iterations: 0,
success: !1,
message: "Initial f(x0) is not finite."
};
for (var T = p(t, C, _), S = {
sList: [],
yList: [],
rhoList: []
}, I = 1; I <= b; I++) {
var E = a(T);
if (E < v) return {
x: C,
f: M,
iterations: I - 1,
success: !0,
message: "Converged: gradient norm."
};
var P = f(T, S), N = s(P, -1), R = C.slice(), w = M, L = T.slice(), O = y({
f: t,
x: C,
fx: M,
g: T,
p: N,
bounds: A,
initStep: g
}), D = O.xNew, x = O.fNew;
if (!isFinite(x) || Math.abs(w - x) < v) return E < 10 * v ? {
x: C,
f: M,
iterations: I - 1,
success: !0,
message: "Converged: small f change."
} : {
x: C,
f: M,
iterations: I - 1,
success: !1,
message: "Line search stalled."
};
M = x;
T = p(t, C = D, _);
var F = l(C, R), G = l(T, L), j = n(G, F);
if (isFinite(j) && j > 1e-12) {
var k = 1 / j;
S.sList.push(F);
S.yList.push(G);
S.rhoList.push(k);
if (S.sList.length > m) {
S.sList.shift();
S.yList.shift();
S.rhoList.shift();
}
}
if (Math.abs(w - M) < v && a(T) < 10 * v) return {
x: C,
f: M,
iterations: I,
success: !0,
message: "Converged: small f & grad."
};
}
return {
x: C,
f: M,
iterations: b,
success: !1,
message: "Reached maxIterations."
};
};
cc._RF.pop();
}, {} ]
}, {}, [ "NewAbilityModelTrait", "AbilityAlgorithmCategoryService", "AbilityCalculationService", "AbilityConfig", "AbilityManagerMainService", "AbilityTypes", "BinomialPL", "Eap4PL", "lbfgsb-optimizer" ]);
//# sourceMappingURL=index.js.map
