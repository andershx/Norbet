(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [3901], {
        65987: function(t) {
            "use strict";
            var e = {
                single_source_shortest_paths: function(t, r, n) {
                    var o, i, a, l, s, u, d, c = {},
                        f = {};
                    f[r] = 0;
                    var h = e.PriorityQueue.make();
                    for (h.push(r, 0); !h.empty();)
                        for (a in i = (o = h.pop()).value, l = o.cost, s = t[i] || {}) s.hasOwnProperty(a) && (u = l + s[a], d = f[a], (void 0 === f[a] || d > u) && (f[a] = u, h.push(a, u), c[a] = i));
                    if (void 0 !== n && void 0 === f[n]) throw Error(["Could not find a path from ", r, " to ", n, "."].join(""));
                    return c
                },
                extract_shortest_path_from_predecessor_list: function(t, e) {
                    for (var r = [], n = e; n;) r.push(n), t[n], n = t[n];
                    return r.reverse(), r
                },
                find_path: function(t, r, n) {
                    var o = e.single_source_shortest_paths(t, r, n);
                    return e.extract_shortest_path_from_predecessor_list(o, n)
                },
                PriorityQueue: {
                    make: function(t) {
                        var r, n = e.PriorityQueue,
                            o = {};
                        for (r in t = t || {}, n) n.hasOwnProperty(r) && (o[r] = n[r]);
                        return o.queue = [], o.sorter = t.sorter || n.default_sorter, o
                    },
                    default_sorter: function(t, e) {
                        return t.cost - e.cost
                    },
                    push: function(t, e) {
                        this.queue.push({
                            value: t,
                            cost: e
                        }), this.queue.sort(this.sorter)
                    },
                    pop: function() {
                        return this.queue.shift()
                    },
                    empty: function() {
                        return 0 === this.queue.length
                    }
                }
            };
            t.exports = e
        },
        92592: function(t, e, r) {
            let n = r(47138),
                o = r(95115),
                i = r(6907),
                a = r(93776);

            function l(t, e, r, i, a) {
                let l = [].slice.call(arguments, 1),
                    s = l.length,
                    u = "function" == typeof l[s - 1];
                if (!u && !n()) throw Error("Callback required as last argument");
                if (u) {
                    if (s < 2) throw Error("Too few arguments provided");
                    2 === s ? (a = r, r = e, e = i = void 0) : 3 === s && (e.getContext && void 0 === a ? (a = i, i = void 0) : (a = i, i = r, r = e, e = void 0))
                } else {
                    if (s < 1) throw Error("Too few arguments provided");
                    return 1 === s ? (r = e, e = i = void 0) : 2 !== s || e.getContext || (i = r, r = e, e = void 0), new Promise(function(n, a) {
                        try {
                            let a = o.create(r, i);
                            n(t(a, e, i))
                        } catch (t) {
                            a(t)
                        }
                    })
                }
                try {
                    let n = o.create(r, i);
                    a(null, t(n, e, i))
                } catch (t) {
                    a(t)
                }
            }
            e.create = o.create, e.toCanvas = l.bind(null, i.render), e.toDataURL = l.bind(null, i.renderToDataURL), e.toString = l.bind(null, function(t, e, r) {
                return a.render(t, r)
            })
        },
        47138: function(t) {
            t.exports = function() {
                return "function" == typeof Promise && Promise.prototype && Promise.prototype.then
            }
        },
        3805: function(t, e, r) {
            let n = r(10242).getSymbolSize;
            e.getRowColCoords = function(t) {
                if (1 === t) return [];
                let e = Math.floor(t / 7) + 2,
                    r = n(t),
                    o = 145 === r ? 26 : 2 * Math.ceil((r - 13) / (2 * e - 2)),
                    i = [r - 7];
                for (let t = 1; t < e - 1; t++) i[t] = i[t - 1] - o;
                return i.push(6), i.reverse()
            }, e.getPositions = function(t) {
                let r = [],
                    n = e.getRowColCoords(t),
                    o = n.length;
                for (let t = 0; t < o; t++)
                    for (let e = 0; e < o; e++)(0 !== t || 0 !== e) && (0 !== t || e !== o - 1) && (t !== o - 1 || 0 !== e) && r.push([n[t], n[e]]);
                return r
            }
        },
        8260: function(t, e, r) {
            let n = r(76910),
                o = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z", " ", "$", "%", "*", "+", "-", ".", "/", ":"];

            function i(t) {
                this.mode = n.ALPHANUMERIC, this.data = t
            }
            i.getBitsLength = function(t) {
                return 11 * Math.floor(t / 2) + t % 2 * 6
            }, i.prototype.getLength = function() {
                return this.data.length
            }, i.prototype.getBitsLength = function() {
                return i.getBitsLength(this.data.length)
            }, i.prototype.write = function(t) {
                let e;
                for (e = 0; e + 2 <= this.data.length; e += 2) {
                    let r = 45 * o.indexOf(this.data[e]);
                    r += o.indexOf(this.data[e + 1]), t.put(r, 11)
                }
                this.data.length % 2 && t.put(o.indexOf(this.data[e]), 6)
            }, t.exports = i
        },
        97245: function(t) {
            function e() {
                this.buffer = [], this.length = 0
            }
            e.prototype = {
                get: function(t) {
                    return (this.buffer[Math.floor(t / 8)] >>> 7 - t % 8 & 1) == 1
                },
                put: function(t, e) {
                    for (let r = 0; r < e; r++) this.putBit((t >>> e - r - 1 & 1) == 1)
                },
                getLengthInBits: function() {
                    return this.length
                },
                putBit: function(t) {
                    let e = Math.floor(this.length / 8);
                    this.buffer.length <= e && this.buffer.push(0), t && (this.buffer[e] |= 128 >>> this.length % 8), this.length++
                }
            }, t.exports = e
        },
        73280: function(t) {
            function e(t) {
                if (!t || t < 1) throw Error("BitMatrix size must be defined and greater than 0");
                this.size = t, this.data = new Uint8Array(t * t), this.reservedBit = new Uint8Array(t * t)
            }
            e.prototype.set = function(t, e, r, n) {
                let o = t * this.size + e;
                this.data[o] = r, n && (this.reservedBit[o] = !0)
            }, e.prototype.get = function(t, e) {
                return this.data[t * this.size + e]
            }, e.prototype.xor = function(t, e, r) {
                this.data[t * this.size + e] ^= r
            }, e.prototype.isReserved = function(t, e) {
                return this.reservedBit[t * this.size + e]
            }, t.exports = e
        },
        43424: function(t, e, r) {
            let n = r(76910);

            function o(t) {
                this.mode = n.BYTE, "string" == typeof t ? this.data = new TextEncoder().encode(t) : this.data = new Uint8Array(t)
            }
            o.getBitsLength = function(t) {
                return 8 * t
            }, o.prototype.getLength = function() {
                return this.data.length
            }, o.prototype.getBitsLength = function() {
                return o.getBitsLength(this.data.length)
            }, o.prototype.write = function(t) {
                for (let e = 0, r = this.data.length; e < r; e++) t.put(this.data[e], 8)
            }, t.exports = o
        },
        35393: function(t, e, r) {
            let n = r(64908),
                o = [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 2, 2, 1, 2, 2, 4, 1, 2, 4, 4, 2, 4, 4, 4, 2, 4, 6, 5, 2, 4, 6, 6, 2, 5, 8, 8, 4, 5, 8, 8, 4, 5, 8, 11, 4, 8, 10, 11, 4, 9, 12, 16, 4, 9, 16, 16, 6, 10, 12, 18, 6, 10, 17, 16, 6, 11, 16, 19, 6, 13, 18, 21, 7, 14, 21, 25, 8, 16, 20, 25, 8, 17, 23, 25, 9, 17, 23, 34, 9, 18, 25, 30, 10, 20, 27, 32, 12, 21, 29, 35, 12, 23, 34, 37, 12, 25, 34, 40, 13, 26, 35, 42, 14, 28, 38, 45, 15, 29, 40, 48, 16, 31, 43, 51, 17, 33, 45, 54, 18, 35, 48, 57, 19, 37, 51, 60, 19, 38, 53, 63, 20, 40, 56, 66, 21, 43, 59, 70, 22, 45, 62, 74, 24, 47, 65, 77, 25, 49, 68, 81],
                i = [7, 10, 13, 17, 10, 16, 22, 28, 15, 26, 36, 44, 20, 36, 52, 64, 26, 48, 72, 88, 36, 64, 96, 112, 40, 72, 108, 130, 48, 88, 132, 156, 60, 110, 160, 192, 72, 130, 192, 224, 80, 150, 224, 264, 96, 176, 260, 308, 104, 198, 288, 352, 120, 216, 320, 384, 132, 240, 360, 432, 144, 280, 408, 480, 168, 308, 448, 532, 180, 338, 504, 588, 196, 364, 546, 650, 224, 416, 600, 700, 224, 442, 644, 750, 252, 476, 690, 816, 270, 504, 750, 900, 300, 560, 810, 960, 312, 588, 870, 1050, 336, 644, 952, 1110, 360, 700, 1020, 1200, 390, 728, 1050, 1260, 420, 784, 1140, 1350, 450, 812, 1200, 1440, 480, 868, 1290, 1530, 510, 924, 1350, 1620, 540, 980, 1440, 1710, 570, 1036, 1530, 1800, 570, 1064, 1590, 1890, 600, 1120, 1680, 1980, 630, 1204, 1770, 2100, 660, 1260, 1860, 2220, 720, 1316, 1950, 2310, 750, 1372, 2040, 2430];
            e.getBlocksCount = function(t, e) {
                switch (e) {
                    case n.L:
                        return o[(t - 1) * 4 + 0];
                    case n.M:
                        return o[(t - 1) * 4 + 1];
                    case n.Q:
                        return o[(t - 1) * 4 + 2];
                    case n.H:
                        return o[(t - 1) * 4 + 3];
                    default:
                        return
                }
            }, e.getTotalCodewordsCount = function(t, e) {
                switch (e) {
                    case n.L:
                        return i[(t - 1) * 4 + 0];
                    case n.M:
                        return i[(t - 1) * 4 + 1];
                    case n.Q:
                        return i[(t - 1) * 4 + 2];
                    case n.H:
                        return i[(t - 1) * 4 + 3];
                    default:
                        return
                }
            }
        },
        64908: function(t, e) {
            e.L = {
                bit: 1
            }, e.M = {
                bit: 0
            }, e.Q = {
                bit: 3
            }, e.H = {
                bit: 2
            }, e.isValid = function(t) {
                return t && void 0 !== t.bit && t.bit >= 0 && t.bit < 4
            }, e.from = function(t, r) {
                if (e.isValid(t)) return t;
                try {
                    return function(t) {
                        if ("string" != typeof t) throw Error("Param is not a string");
                        switch (t.toLowerCase()) {
                            case "l":
                            case "low":
                                return e.L;
                            case "m":
                            case "medium":
                                return e.M;
                            case "q":
                            case "quartile":
                                return e.Q;
                            case "h":
                            case "high":
                                return e.H;
                            default:
                                throw Error("Unknown EC Level: " + t)
                        }
                    }(t)
                } catch (t) {
                    return r
                }
            }
        },
        76526: function(t, e, r) {
            let n = r(10242).getSymbolSize;
            e.getPositions = function(t) {
                let e = n(t);
                return [
                    [0, 0],
                    [e - 7, 0],
                    [0, e - 7]
                ]
            }
        },
        61642: function(t, e, r) {
            let n = r(10242),
                o = n.getBCHDigit(1335);
            e.getEncodedBits = function(t, e) {
                let r = t.bit << 3 | e,
                    i = r << 10;
                for (; n.getBCHDigit(i) - o >= 0;) i ^= 1335 << n.getBCHDigit(i) - o;
                return (r << 10 | i) ^ 21522
            }
        },
        69729: function(t, e) {
            let r = new Uint8Array(512),
                n = new Uint8Array(256);
            ! function() {
                let t = 1;
                for (let e = 0; e < 255; e++) r[e] = t, n[t] = e, 256 & (t <<= 1) && (t ^= 285);
                for (let t = 255; t < 512; t++) r[t] = r[t - 255]
            }(), e.log = function(t) {
                if (t < 1) throw Error("log(" + t + ")");
                return n[t]
            }, e.exp = function(t) {
                return r[t]
            }, e.mul = function(t, e) {
                return 0 === t || 0 === e ? 0 : r[n[t] + n[e]]
            }
        },
        35442: function(t, e, r) {
            let n = r(76910),
                o = r(10242);

            function i(t) {
                this.mode = n.KANJI, this.data = t
            }
            i.getBitsLength = function(t) {
                return 13 * t
            }, i.prototype.getLength = function() {
                return this.data.length
            }, i.prototype.getBitsLength = function() {
                return i.getBitsLength(this.data.length)
            }, i.prototype.write = function(t) {
                let e;
                for (e = 0; e < this.data.length; e++) {
                    let r = o.toSJIS(this.data[e]);
                    if (r >= 33088 && r <= 40956) r -= 33088;
                    else if (r >= 57408 && r <= 60351) r -= 49472;
                    else throw Error("Invalid SJIS character: " + this.data[e] + "\nMake sure your charset is UTF-8");
                    r = (r >>> 8 & 255) * 192 + (255 & r), t.put(r, 13)
                }
            }, t.exports = i
        },
        27126: function(t, e) {
            e.Patterns = {
                PATTERN000: 0,
                PATTERN001: 1,
                PATTERN010: 2,
                PATTERN011: 3,
                PATTERN100: 4,
                PATTERN101: 5,
                PATTERN110: 6,
                PATTERN111: 7
            };
            let r = {
                N1: 3,
                N2: 3,
                N3: 40,
                N4: 10
            };
            e.isValid = function(t) {
                return null != t && "" !== t && !isNaN(t) && t >= 0 && t <= 7
            }, e.from = function(t) {
                return e.isValid(t) ? parseInt(t, 10) : void 0
            }, e.getPenaltyN1 = function(t) {
                let e = t.size,
                    n = 0,
                    o = 0,
                    i = 0,
                    a = null,
                    l = null;
                for (let s = 0; s < e; s++) {
                    o = i = 0, a = l = null;
                    for (let u = 0; u < e; u++) {
                        let e = t.get(s, u);
                        e === a ? o++ : (o >= 5 && (n += r.N1 + (o - 5)), a = e, o = 1), (e = t.get(u, s)) === l ? i++ : (i >= 5 && (n += r.N1 + (i - 5)), l = e, i = 1)
                    }
                    o >= 5 && (n += r.N1 + (o - 5)), i >= 5 && (n += r.N1 + (i - 5))
                }
                return n
            }, e.getPenaltyN2 = function(t) {
                let e = t.size,
                    n = 0;
                for (let r = 0; r < e - 1; r++)
                    for (let o = 0; o < e - 1; o++) {
                        let e = t.get(r, o) + t.get(r, o + 1) + t.get(r + 1, o) + t.get(r + 1, o + 1);
                        (4 === e || 0 === e) && n++
                    }
                return n * r.N2
            }, e.getPenaltyN3 = function(t) {
                let e = t.size,
                    n = 0,
                    o = 0,
                    i = 0;
                for (let r = 0; r < e; r++) {
                    o = i = 0;
                    for (let a = 0; a < e; a++) o = o << 1 & 2047 | t.get(r, a), a >= 10 && (1488 === o || 93 === o) && n++, i = i << 1 & 2047 | t.get(a, r), a >= 10 && (1488 === i || 93 === i) && n++
                }
                return n * r.N3
            }, e.getPenaltyN4 = function(t) {
                let e = 0,
                    n = t.data.length;
                for (let r = 0; r < n; r++) e += t.data[r];
                return Math.abs(Math.ceil(100 * e / n / 5) - 10) * r.N4
            }, e.applyMask = function(t, r) {
                let n = r.size;
                for (let o = 0; o < n; o++)
                    for (let i = 0; i < n; i++) r.isReserved(i, o) || r.xor(i, o, function(t, r, n) {
                        switch (t) {
                            case e.Patterns.PATTERN000:
                                return (r + n) % 2 == 0;
                            case e.Patterns.PATTERN001:
                                return r % 2 == 0;
                            case e.Patterns.PATTERN010:
                                return n % 3 == 0;
                            case e.Patterns.PATTERN011:
                                return (r + n) % 3 == 0;
                            case e.Patterns.PATTERN100:
                                return (Math.floor(r / 2) + Math.floor(n / 3)) % 2 == 0;
                            case e.Patterns.PATTERN101:
                                return r * n % 2 + r * n % 3 == 0;
                            case e.Patterns.PATTERN110:
                                return (r * n % 2 + r * n % 3) % 2 == 0;
                            case e.Patterns.PATTERN111:
                                return (r * n % 3 + (r + n) % 2) % 2 == 0;
                            default:
                                throw Error("bad maskPattern:" + t)
                        }
                    }(t, i, o))
            }, e.getBestMask = function(t, r) {
                let n = Object.keys(e.Patterns).length,
                    o = 0,
                    i = 1 / 0;
                for (let a = 0; a < n; a++) {
                    r(a), e.applyMask(a, t);
                    let n = e.getPenaltyN1(t) + e.getPenaltyN2(t) + e.getPenaltyN3(t) + e.getPenaltyN4(t);
                    e.applyMask(a, t), n < i && (i = n, o = a)
                }
                return o
            }
        },
        76910: function(t, e, r) {
            let n = r(43114),
                o = r(7007);
            e.NUMERIC = {
                id: "Numeric",
                bit: 1,
                ccBits: [10, 12, 14]
            }, e.ALPHANUMERIC = {
                id: "Alphanumeric",
                bit: 2,
                ccBits: [9, 11, 13]
            }, e.BYTE = {
                id: "Byte",
                bit: 4,
                ccBits: [8, 16, 16]
            }, e.KANJI = {
                id: "Kanji",
                bit: 8,
                ccBits: [8, 10, 12]
            }, e.MIXED = {
                bit: -1
            }, e.getCharCountIndicator = function(t, e) {
                if (!t.ccBits) throw Error("Invalid mode: " + t);
                if (!n.isValid(e)) throw Error("Invalid version: " + e);
                return e >= 1 && e < 10 ? t.ccBits[0] : e < 27 ? t.ccBits[1] : t.ccBits[2]
            }, e.getBestModeForData = function(t) {
                return o.testNumeric(t) ? e.NUMERIC : o.testAlphanumeric(t) ? e.ALPHANUMERIC : o.testKanji(t) ? e.KANJI : e.BYTE
            }, e.toString = function(t) {
                if (t && t.id) return t.id;
                throw Error("Invalid mode")
            }, e.isValid = function(t) {
                return t && t.bit && t.ccBits
            }, e.from = function(t, r) {
                if (e.isValid(t)) return t;
                try {
                    return function(t) {
                        if ("string" != typeof t) throw Error("Param is not a string");
                        switch (t.toLowerCase()) {
                            case "numeric":
                                return e.NUMERIC;
                            case "alphanumeric":
                                return e.ALPHANUMERIC;
                            case "kanji":
                                return e.KANJI;
                            case "byte":
                                return e.BYTE;
                            default:
                                throw Error("Unknown mode: " + t)
                        }
                    }(t)
                } catch (t) {
                    return r
                }
            }
        },
        41085: function(t, e, r) {
            let n = r(76910);

            function o(t) {
                this.mode = n.NUMERIC, this.data = t.toString()
            }
            o.getBitsLength = function(t) {
                return 10 * Math.floor(t / 3) + (t % 3 ? t % 3 * 3 + 1 : 0)
            }, o.prototype.getLength = function() {
                return this.data.length
            }, o.prototype.getBitsLength = function() {
                return o.getBitsLength(this.data.length)
            }, o.prototype.write = function(t) {
                let e, r;
                for (e = 0; e + 3 <= this.data.length; e += 3) r = parseInt(this.data.substr(e, 3), 10), t.put(r, 10);
                let n = this.data.length - e;
                n > 0 && (r = parseInt(this.data.substr(e), 10), t.put(r, 3 * n + 1))
            }, t.exports = o
        },
        26143: function(t, e, r) {
            let n = r(69729);
            e.mul = function(t, e) {
                let r = new Uint8Array(t.length + e.length - 1);
                for (let o = 0; o < t.length; o++)
                    for (let i = 0; i < e.length; i++) r[o + i] ^= n.mul(t[o], e[i]);
                return r
            }, e.mod = function(t, e) {
                let r = new Uint8Array(t);
                for (; r.length - e.length >= 0;) {
                    let t = r[0];
                    for (let o = 0; o < e.length; o++) r[o] ^= n.mul(e[o], t);
                    let o = 0;
                    for (; o < r.length && 0 === r[o];) o++;
                    r = r.slice(o)
                }
                return r
            }, e.generateECPolynomial = function(t) {
                let r = new Uint8Array([1]);
                for (let o = 0; o < t; o++) r = e.mul(r, new Uint8Array([1, n.exp(o)]));
                return r
            }
        },
        95115: function(t, e, r) {
            let n = r(10242),
                o = r(64908),
                i = r(97245),
                a = r(73280),
                l = r(3805),
                s = r(76526),
                u = r(27126),
                d = r(35393),
                c = r(52882),
                f = r(23103),
                h = r(61642),
                g = r(76910),
                m = r(16130);

            function p(t, e, r) {
                let n, o;
                let i = t.size,
                    a = h.getEncodedBits(e, r);
                for (n = 0; n < 15; n++) o = (a >> n & 1) == 1, n < 6 ? t.set(n, 8, o, !0) : n < 8 ? t.set(n + 1, 8, o, !0) : t.set(i - 15 + n, 8, o, !0), n < 8 ? t.set(8, i - n - 1, o, !0) : n < 9 ? t.set(8, 15 - n - 1 + 1, o, !0) : t.set(8, 15 - n - 1, o, !0);
                t.set(i - 8, 8, 1, !0)
            }
            e.create = function(t, e) {
                let r, h;
                if (void 0 === t || "" === t) throw Error("No input text");
                let w = o.M;
                return void 0 !== e && (w = o.from(e.errorCorrectionLevel, o.M), r = f.from(e.version), h = u.from(e.maskPattern), e.toSJISFunc && n.setToSJISFunction(e.toSJISFunc)),
                    function(t, e, r, o) {
                        let h;
                        if (Array.isArray(t)) h = m.fromArray(t);
                        else if ("string" == typeof t) {
                            let n = e;
                            if (!n) {
                                let e = m.rawSplit(t);
                                n = f.getBestVersionForData(e, r)
                            }
                            h = m.fromString(t, n || 40)
                        } else throw Error("Invalid data");
                        let w = f.getBestVersionForData(h, r);
                        if (!w) throw Error("The amount of data is too big to be stored in a QR Code");
                        if (e) {
                            if (e < w) throw Error("\nThe chosen QR Code version cannot contain this amount of data.\nMinimum version required to store current data is: " + w + ".\n")
                        } else e = w;
                        let v = function(t, e, r) {
                                let o = new i;
                                r.forEach(function(e) {
                                    o.put(e.mode.bit, 4), o.put(e.getLength(), g.getCharCountIndicator(e.mode, t)), e.write(o)
                                });
                                let a = (n.getSymbolTotalCodewords(t) - d.getTotalCodewordsCount(t, e)) * 8;
                                for (o.getLengthInBits() + 4 <= a && o.put(0, 4); o.getLengthInBits() % 8 != 0;) o.putBit(0);
                                let l = (a - o.getLengthInBits()) / 8;
                                for (let t = 0; t < l; t++) o.put(t % 2 ? 17 : 236, 8);
                                return function(t, e, r) {
                                    let o, i;
                                    let a = n.getSymbolTotalCodewords(e),
                                        l = a - d.getTotalCodewordsCount(e, r),
                                        s = d.getBlocksCount(e, r),
                                        u = a % s,
                                        f = s - u,
                                        h = Math.floor(a / s),
                                        g = Math.floor(l / s),
                                        m = g + 1,
                                        p = h - g,
                                        w = new c(p),
                                        v = 0,
                                        b = Array(s),
                                        y = Array(s),
                                        E = 0,
                                        C = new Uint8Array(t.buffer);
                                    for (let t = 0; t < s; t++) {
                                        let e = t < f ? g : m;
                                        b[t] = C.slice(v, v + e), y[t] = w.encode(b[t]), v += e, E = Math.max(E, e)
                                    }
                                    let P = new Uint8Array(a),
                                        T = 0;
                                    for (o = 0; o < E; o++)
                                        for (i = 0; i < s; i++) o < b[i].length && (P[T++] = b[i][o]);
                                    for (o = 0; o < p; o++)
                                        for (i = 0; i < s; i++) P[T++] = y[i][o];
                                    return P
                                }(o, t, e)
                            }(e, r, h),
                            b = new a(n.getSymbolSize(e));
                        return function(t, e) {
                                let r = t.size,
                                    n = s.getPositions(e);
                                for (let e = 0; e < n.length; e++) {
                                    let o = n[e][0],
                                        i = n[e][1];
                                    for (let e = -1; e <= 7; e++)
                                        if (!(o + e <= -1) && !(r <= o + e))
                                            for (let n = -1; n <= 7; n++) i + n <= -1 || r <= i + n || (e >= 0 && e <= 6 && (0 === n || 6 === n) || n >= 0 && n <= 6 && (0 === e || 6 === e) || e >= 2 && e <= 4 && n >= 2 && n <= 4 ? t.set(o + e, i + n, !0, !0) : t.set(o + e, i + n, !1, !0))
                                }
                            }(b, e),
                            function(t) {
                                let e = t.size;
                                for (let r = 8; r < e - 8; r++) {
                                    let e = r % 2 == 0;
                                    t.set(r, 6, e, !0), t.set(6, r, e, !0)
                                }
                            }(b),
                            function(t, e) {
                                let r = l.getPositions(e);
                                for (let e = 0; e < r.length; e++) {
                                    let n = r[e][0],
                                        o = r[e][1];
                                    for (let e = -2; e <= 2; e++)
                                        for (let r = -2; r <= 2; r++) - 2 === e || 2 === e || -2 === r || 2 === r || 0 === e && 0 === r ? t.set(n + e, o + r, !0, !0) : t.set(n + e, o + r, !1, !0)
                                }
                            }(b, e), p(b, r, 0), e >= 7 && function(t, e) {
                                let r, n, o;
                                let i = t.size,
                                    a = f.getEncodedBits(e);
                                for (let e = 0; e < 18; e++) r = Math.floor(e / 3), n = e % 3 + i - 8 - 3, o = (a >> e & 1) == 1, t.set(r, n, o, !0), t.set(n, r, o, !0)
                            }(b, e),
                            function(t, e) {
                                let r = t.size,
                                    n = -1,
                                    o = r - 1,
                                    i = 7,
                                    a = 0;
                                for (let l = r - 1; l > 0; l -= 2)
                                    for (6 === l && l--;;) {
                                        for (let r = 0; r < 2; r++)
                                            if (!t.isReserved(o, l - r)) {
                                                let n = !1;
                                                a < e.length && (n = (e[a] >>> i & 1) == 1), t.set(o, l - r, n), -1 == --i && (a++, i = 7)
                                            }
                                        if ((o += n) < 0 || r <= o) {
                                            o -= n, n = -n;
                                            break
                                        }
                                    }
                            }(b, v), isNaN(o) && (o = u.getBestMask(b, p.bind(null, b, r))), u.applyMask(o, b), p(b, r, o), {
                                modules: b,
                                version: e,
                                errorCorrectionLevel: r,
                                maskPattern: o,
                                segments: h
                            }
                    }(t, r, w, h)
            }
        },
        52882: function(t, e, r) {
            let n = r(26143);

            function o(t) {
                this.genPoly = void 0, this.degree = t, this.degree && this.initialize(this.degree)
            }
            o.prototype.initialize = function(t) {
                this.degree = t, this.genPoly = n.generateECPolynomial(this.degree)
            }, o.prototype.encode = function(t) {
                if (!this.genPoly) throw Error("Encoder not initialized");
                let e = new Uint8Array(t.length + this.degree);
                e.set(t);
                let r = n.mod(e, this.genPoly),
                    o = this.degree - r.length;
                if (o > 0) {
                    let t = new Uint8Array(this.degree);
                    return t.set(r, o), t
                }
                return r
            }, t.exports = o
        },
        7007: function(t, e) {
            let r = "[0-9]+",
                n = "(?:[u3000-u303F]|[u3040-u309F]|[u30A0-u30FF]|[uFF00-uFFEF]|[u4E00-u9FAF]|[u2605-u2606]|[u2190-u2195]|u203B|[u2010u2015u2018u2019u2025u2026u201Cu201Du2225u2260]|[u0391-u0451]|[u00A7u00A8u00B1u00B4u00D7u00F7])+",
                o = "(?:(?![A-Z0-9 $%*+\\-./:]|" + (n = n.replace(/u/g, "\\u")) + ")(?:.|[\r\n]))+";
            e.KANJI = RegExp(n, "g"), e.BYTE_KANJI = RegExp("[^A-Z0-9 $%*+\\-./:]+", "g"), e.BYTE = RegExp(o, "g"), e.NUMERIC = RegExp(r, "g"), e.ALPHANUMERIC = RegExp("[A-Z $%*+\\-./:]+", "g");
            let i = RegExp("^" + n + "$"),
                a = RegExp("^" + r + "$"),
                l = RegExp("^[A-Z0-9 $%*+\\-./:]+$");
            e.testKanji = function(t) {
                return i.test(t)
            }, e.testNumeric = function(t) {
                return a.test(t)
            }, e.testAlphanumeric = function(t) {
                return l.test(t)
            }
        },
        16130: function(t, e, r) {
            let n = r(76910),
                o = r(41085),
                i = r(8260),
                a = r(43424),
                l = r(35442),
                s = r(7007),
                u = r(10242),
                d = r(65987);

            function c(t) {
                return unescape(encodeURIComponent(t)).length
            }

            function f(t, e, r) {
                let n;
                let o = [];
                for (; null !== (n = t.exec(r));) o.push({
                    data: n[0],
                    index: n.index,
                    mode: e,
                    length: n[0].length
                });
                return o
            }

            function h(t) {
                let e, r;
                let o = f(s.NUMERIC, n.NUMERIC, t),
                    i = f(s.ALPHANUMERIC, n.ALPHANUMERIC, t);
                return u.isKanjiModeEnabled() ? (e = f(s.BYTE, n.BYTE, t), r = f(s.KANJI, n.KANJI, t)) : (e = f(s.BYTE_KANJI, n.BYTE, t), r = []), o.concat(i, e, r).sort(function(t, e) {
                    return t.index - e.index
                }).map(function(t) {
                    return {
                        data: t.data,
                        mode: t.mode,
                        length: t.length
                    }
                })
            }

            function g(t, e) {
                switch (e) {
                    case n.NUMERIC:
                        return o.getBitsLength(t);
                    case n.ALPHANUMERIC:
                        return i.getBitsLength(t);
                    case n.KANJI:
                        return l.getBitsLength(t);
                    case n.BYTE:
                        return a.getBitsLength(t)
                }
            }

            function m(t, e) {
                let r;
                let s = n.getBestModeForData(t);
                if ((r = n.from(e, s)) !== n.BYTE && r.bit < s.bit) throw Error('"' + t + '" cannot be encoded with mode ' + n.toString(r) + ".\n Suggested mode is: " + n.toString(s));
                switch (r !== n.KANJI || u.isKanjiModeEnabled() || (r = n.BYTE), r) {
                    case n.NUMERIC:
                        return new o(t);
                    case n.ALPHANUMERIC:
                        return new i(t);
                    case n.KANJI:
                        return new l(t);
                    case n.BYTE:
                        return new a(t)
                }
            }
            e.fromArray = function(t) {
                return t.reduce(function(t, e) {
                    return "string" == typeof e ? t.push(m(e, null)) : e.data && t.push(m(e.data, e.mode)), t
                }, [])
            }, e.fromString = function(t, r) {
                let o = function(t, e) {
                        let r = {},
                            o = {
                                start: {}
                            },
                            i = ["start"];
                        for (let a = 0; a < t.length; a++) {
                            let l = t[a],
                                s = [];
                            for (let t = 0; t < l.length; t++) {
                                let u = l[t],
                                    d = "" + a + t;
                                s.push(d), r[d] = {
                                    node: u,
                                    lastCount: 0
                                }, o[d] = {};
                                for (let t = 0; t < i.length; t++) {
                                    let a = i[t];
                                    r[a] && r[a].node.mode === u.mode ? (o[a][d] = g(r[a].lastCount + u.length, u.mode) - g(r[a].lastCount, u.mode), r[a].lastCount += u.length) : (r[a] && (r[a].lastCount = u.length), o[a][d] = g(u.length, u.mode) + 4 + n.getCharCountIndicator(u.mode, e))
                                }
                            }
                            i = s
                        }
                        for (let t = 0; t < i.length; t++) o[i[t]].end = 0;
                        return {
                            map: o,
                            table: r
                        }
                    }(function(t) {
                        let e = [];
                        for (let r = 0; r < t.length; r++) {
                            let o = t[r];
                            switch (o.mode) {
                                case n.NUMERIC:
                                    e.push([o, {
                                        data: o.data,
                                        mode: n.ALPHANUMERIC,
                                        length: o.length
                                    }, {
                                        data: o.data,
                                        mode: n.BYTE,
                                        length: o.length
                                    }]);
                                    break;
                                case n.ALPHANUMERIC:
                                    e.push([o, {
                                        data: o.data,
                                        mode: n.BYTE,
                                        length: o.length
                                    }]);
                                    break;
                                case n.KANJI:
                                    e.push([o, {
                                        data: o.data,
                                        mode: n.BYTE,
                                        length: c(o.data)
                                    }]);
                                    break;
                                case n.BYTE:
                                    e.push([{
                                        data: o.data,
                                        mode: n.BYTE,
                                        length: c(o.data)
                                    }])
                            }
                        }
                        return e
                    }(h(t, u.isKanjiModeEnabled())), r),
                    i = d.find_path(o.map, "start", "end"),
                    a = [];
                for (let t = 1; t < i.length - 1; t++) a.push(o.table[i[t]].node);
                return e.fromArray(a.reduce(function(t, e) {
                    let r = t.length - 1 >= 0 ? t[t.length - 1] : null;
                    return r && r.mode === e.mode ? t[t.length - 1].data += e.data : t.push(e), t
                }, []))
            }, e.rawSplit = function(t) {
                return e.fromArray(h(t, u.isKanjiModeEnabled()))
            }
        },
        10242: function(t, e) {
            let r;
            let n = [0, 26, 44, 70, 100, 134, 172, 196, 242, 292, 346, 404, 466, 532, 581, 655, 733, 815, 901, 991, 1085, 1156, 1258, 1364, 1474, 1588, 1706, 1828, 1921, 2051, 2185, 2323, 2465, 2611, 2761, 2876, 3034, 3196, 3362, 3532, 3706];
            e.getSymbolSize = function(t) {
                if (!t) throw Error('"version" cannot be null or undefined');
                if (t < 1 || t > 40) throw Error('"version" should be in range from 1 to 40');
                return 4 * t + 17
            }, e.getSymbolTotalCodewords = function(t) {
                return n[t]
            }, e.getBCHDigit = function(t) {
                let e = 0;
                for (; 0 !== t;) e++, t >>>= 1;
                return e
            }, e.setToSJISFunction = function(t) {
                if ("function" != typeof t) throw Error('"toSJISFunc" is not a valid function.');
                r = t
            }, e.isKanjiModeEnabled = function() {
                return void 0 !== r
            }, e.toSJIS = function(t) {
                return r(t)
            }
        },
        43114: function(t, e) {
            e.isValid = function(t) {
                return !isNaN(t) && t >= 1 && t <= 40
            }
        },
        23103: function(t, e, r) {
            let n = r(10242),
                o = r(35393),
                i = r(64908),
                a = r(76910),
                l = r(43114),
                s = n.getBCHDigit(7973);

            function u(t, e) {
                return a.getCharCountIndicator(t, e) + 4
            }
            e.from = function(t, e) {
                return l.isValid(t) ? parseInt(t, 10) : e
            }, e.getCapacity = function(t, e, r) {
                if (!l.isValid(t)) throw Error("Invalid QR Code version");
                void 0 === r && (r = a.BYTE);
                let i = (n.getSymbolTotalCodewords(t) - o.getTotalCodewordsCount(t, e)) * 8;
                if (r === a.MIXED) return i;
                let s = i - u(r, t);
                switch (r) {
                    case a.NUMERIC:
                        return Math.floor(s / 10 * 3);
                    case a.ALPHANUMERIC:
                        return Math.floor(s / 11 * 2);
                    case a.KANJI:
                        return Math.floor(s / 13);
                    case a.BYTE:
                    default:
                        return Math.floor(s / 8)
                }
            }, e.getBestVersionForData = function(t, r) {
                let n;
                let o = i.from(r, i.M);
                if (Array.isArray(t)) {
                    if (t.length > 1) return function(t, r) {
                        for (let n = 1; n <= 40; n++)
                            if (function(t, e) {
                                    let r = 0;
                                    return t.forEach(function(t) {
                                        let n = u(t.mode, e);
                                        r += n + t.getBitsLength()
                                    }), r
                                }(t, n) <= e.getCapacity(n, r, a.MIXED)) return n
                    }(t, o);
                    if (0 === t.length) return 1;
                    n = t[0]
                } else n = t;
                return function(t, r, n) {
                    for (let o = 1; o <= 40; o++)
                        if (r <= e.getCapacity(o, n, t)) return o
                }(n.mode, n.getLength(), o)
            }, e.getEncodedBits = function(t) {
                if (!l.isValid(t) || t < 7) throw Error("Invalid QR Code version");
                let e = t << 12;
                for (; n.getBCHDigit(e) - s >= 0;) e ^= 7973 << n.getBCHDigit(e) - s;
                return t << 12 | e
            }
        },
        6907: function(t, e, r) {
            let n = r(89653);
            e.render = function(t, e, r) {
                var o;
                let i = r,
                    a = e;
                void 0 !== i || e && e.getContext || (i = e, e = void 0), e || (a = function() {
                    try {
                        return document.createElement("canvas")
                    } catch (t) {
                        throw Error("You need to specify a canvas element")
                    }
                }()), i = n.getOptions(i);
                let l = n.getImageWidth(t.modules.size, i),
                    s = a.getContext("2d"),
                    u = s.createImageData(l, l);
                return n.qrToImageData(u.data, t, i), o = a, s.clearRect(0, 0, o.width, o.height), o.style || (o.style = {}), o.height = l, o.width = l, o.style.height = l + "px", o.style.width = l + "px", s.putImageData(u, 0, 0), a
            }, e.renderToDataURL = function(t, r, n) {
                let o = n;
                void 0 !== o || r && r.getContext || (o = r, r = void 0), o || (o = {});
                let i = e.render(t, r, o),
                    a = o.type || "image/png",
                    l = o.rendererOpts || {};
                return i.toDataURL(a, l.quality)
            }
        },
        93776: function(t, e, r) {
            let n = r(89653);

            function o(t, e) {
                let r = t.a / 255,
                    n = e + '="' + t.hex + '"';
                return r < 1 ? n + " " + e + '-opacity="' + r.toFixed(2).slice(1) + '"' : n
            }

            function i(t, e, r) {
                let n = t + e;
                return void 0 !== r && (n += " " + r), n
            }
            e.render = function(t, e, r) {
                let a = n.getOptions(e),
                    l = t.modules.size,
                    s = t.modules.data,
                    u = l + 2 * a.margin,
                    d = a.color.light.a ? "<path " + o(a.color.light, "fill") + ' d="M0 0h' + u + "v" + u + 'H0z"/>' : "",
                    c = "<path " + o(a.color.dark, "stroke") + ' d="' + function(t, e, r) {
                        let n = "",
                            o = 0,
                            a = !1,
                            l = 0;
                        for (let s = 0; s < t.length; s++) {
                            let u = Math.floor(s % e),
                                d = Math.floor(s / e);
                            u || a || (a = !0), t[s] ? (l++, s > 0 && u > 0 && t[s - 1] || (n += a ? i("M", u + r, .5 + d + r) : i("m", o, 0), o = 0, a = !1), u + 1 < e && t[s + 1] || (n += i("h", l), l = 0)) : o++
                        }
                        return n
                    }(s, l, a.margin) + '"/>',
                    f = '<svg xmlns="http://www.w3.org/2000/svg" ' + (a.width ? 'width="' + a.width + '" height="' + a.width + '" ' : "") + ('viewBox="0 0 ' + u) + " " + u + '" shape-rendering="crispEdges">' + d + c + "</svg>\n";
                return "function" == typeof r && r(null, f), f
            }
        },
        89653: function(t, e) {
            function r(t) {
                if ("number" == typeof t && (t = t.toString()), "string" != typeof t) throw Error("Color should be defined as hex string");
                let e = t.slice().replace("#", "").split("");
                if (e.length < 3 || 5 === e.length || e.length > 8) throw Error("Invalid hex color: " + t);
                (3 === e.length || 4 === e.length) && (e = Array.prototype.concat.apply([], e.map(function(t) {
                    return [t, t]
                }))), 6 === e.length && e.push("F", "F");
                let r = parseInt(e.join(""), 16);
                return {
                    r: r >> 24 & 255,
                    g: r >> 16 & 255,
                    b: r >> 8 & 255,
                    a: 255 & r,
                    hex: "#" + e.slice(0, 6).join("")
                }
            }
            e.getOptions = function(t) {
                t || (t = {}), t.color || (t.color = {});
                let e = void 0 === t.margin || null === t.margin || t.margin < 0 ? 4 : t.margin,
                    n = t.width && t.width >= 21 ? t.width : void 0,
                    o = t.scale || 4;
                return {
                    width: n,
                    scale: n ? 4 : o,
                    margin: e,
                    color: {
                        dark: r(t.color.dark || "#000000ff"),
                        light: r(t.color.light || "#ffffffff")
                    },
                    type: t.type,
                    rendererOpts: t.rendererOpts || {}
                }
            }, e.getScale = function(t, e) {
                return e.width && e.width >= t + 2 * e.margin ? e.width / (t + 2 * e.margin) : e.scale
            }, e.getImageWidth = function(t, r) {
                let n = e.getScale(t, r);
                return Math.floor((t + 2 * r.margin) * n)
            }, e.qrToImageData = function(t, r, n) {
                let o = r.modules.size,
                    i = r.modules.data,
                    a = e.getScale(o, n),
                    l = Math.floor((o + 2 * n.margin) * a),
                    s = n.margin * a,
                    u = [n.color.light, n.color.dark];
                for (let e = 0; e < l; e++)
                    for (let r = 0; r < l; r++) {
                        let d = (e * l + r) * 4,
                            c = n.color.light;
                        e >= s && r >= s && e < l - s && r < l - s && (c = u[i[Math.floor((e - s) / a) * o + Math.floor((r - s) / a)] ? 1 : 0]), t[d++] = c.r, t[d++] = c.g, t[d++] = c.b, t[d] = c.a
                    }
            }
        },
        25443: function(t, e, r) {
            "use strict";
            r.d(e, {
                Ns: function() {
                    return X
                },
                fC: function() {
                    return J
                },
                gb: function() {
                    return P
                },
                l_: function() {
                    return K
                },
                q4: function() {
                    return j
                }
            });
            var n = r(67294),
                o = r(75320),
                i = r(29115),
                a = r(25360),
                l = r(28771),
                s = r(79698),
                u = r(78990),
                d = r(9981),
                c = r(42614),
                f = r(36206),
                h = r(85893),
                g = "ScrollArea",
                [m, p] = (0, a.b)(g),
                [w, v] = m(g),
                b = n.forwardRef((t, e) => {
                    let {
                        __scopeScrollArea: r,
                        type: i = "hover",
                        dir: a,
                        scrollHideDelay: s = 600,
                        ...d
                    } = t, [c, f] = n.useState(null), [g, m] = n.useState(null), [p, v] = n.useState(null), [b, y] = n.useState(null), [E, C] = n.useState(null), [P, T] = n.useState(0), [S, A] = n.useState(0), [M, x] = n.useState(!1), [R, N] = n.useState(!1), B = (0, l.e)(e, t => f(t)), I = (0, u.gm)(a);
                    return (0, h.jsx)(w, {
                        scope: r,
                        type: i,
                        dir: I,
                        scrollHideDelay: s,
                        scrollArea: c,
                        viewport: g,
                        onViewportChange: m,
                        content: p,
                        onContentChange: v,
                        scrollbarX: b,
                        onScrollbarXChange: y,
                        scrollbarXEnabled: M,
                        onScrollbarXEnabledChange: x,
                        scrollbarY: E,
                        onScrollbarYChange: C,
                        scrollbarYEnabled: R,
                        onScrollbarYEnabledChange: N,
                        onCornerWidthChange: T,
                        onCornerHeightChange: A,
                        children: (0, h.jsx)(o.WV.div, {
                            dir: I,
                            ...d,
                            ref: B,
                            style: {
                                position: "relative",
                                "--radix-scroll-area-corner-width": P + "px",
                                "--radix-scroll-area-corner-height": S + "px",
                                ...t.style
                            }
                        })
                    })
                });
            b.displayName = g;
            var y = "ScrollAreaViewport",
                E = n.forwardRef((t, e) => {
                    let {
                        __scopeScrollArea: r,
                        children: i,
                        nonce: a,
                        ...s
                    } = t, u = v(y, r), d = n.useRef(null), c = (0, l.e)(e, d, u.onViewportChange);
                    return (0, h.jsxs)(h.Fragment, {
                        children: [(0, h.jsx)("style", {
                            dangerouslySetInnerHTML: {
                                __html: "[data-radix-scroll-area-viewport]{scrollbar-width:none;-ms-overflow-style:none;-webkit-overflow-scrolling:touch;}[data-radix-scroll-area-viewport]::-webkit-scrollbar{display:none}"
                            },
                            nonce: a
                        }), (0, h.jsx)(o.WV.div, {
                            "data-radix-scroll-area-viewport": "",
                            ...s,
                            ref: c,
                            style: {
                                overflowX: u.scrollbarXEnabled ? "scroll" : "hidden",
                                overflowY: u.scrollbarYEnabled ? "scroll" : "hidden",
                                ...t.style
                            },
                            children: (0, h.jsx)("div", {
                                ref: u.onContentChange,
                                style: {
                                    minWidth: "100%",
                                    display: "table"
                                },
                                children: i
                            })
                        })]
                    })
                });
            E.displayName = y;
            var C = "ScrollAreaScrollbar",
                P = n.forwardRef((t, e) => {
                    let {
                        forceMount: r,
                        ...o
                    } = t, i = v(C, t.__scopeScrollArea), {
                        onScrollbarXEnabledChange: a,
                        onScrollbarYEnabledChange: l
                    } = i, s = "horizontal" === t.orientation;
                    return n.useEffect(() => (s ? a(!0) : l(!0), () => {
                        s ? a(!1) : l(!1)
                    }), [s, a, l]), "hover" === i.type ? (0, h.jsx)(T, { ...o,
                        ref: e,
                        forceMount: r
                    }) : "scroll" === i.type ? (0, h.jsx)(S, { ...o,
                        ref: e,
                        forceMount: r
                    }) : "auto" === i.type ? (0, h.jsx)(A, { ...o,
                        ref: e,
                        forceMount: r
                    }) : "always" === i.type ? (0, h.jsx)(M, { ...o,
                        ref: e
                    }) : null
                });
            P.displayName = C;
            var T = n.forwardRef((t, e) => {
                    let {
                        forceMount: r,
                        ...o
                    } = t, a = v(C, t.__scopeScrollArea), [l, s] = n.useState(!1);
                    return n.useEffect(() => {
                        let t = a.scrollArea,
                            e = 0;
                        if (t) {
                            let r = () => {
                                    window.clearTimeout(e), s(!0)
                                },
                                n = () => {
                                    e = window.setTimeout(() => s(!1), a.scrollHideDelay)
                                };
                            return t.addEventListener("pointerenter", r), t.addEventListener("pointerleave", n), () => {
                                window.clearTimeout(e), t.removeEventListener("pointerenter", r), t.removeEventListener("pointerleave", n)
                            }
                        }
                    }, [a.scrollArea, a.scrollHideDelay]), (0, h.jsx)(i.z, {
                        present: r || l,
                        children: (0, h.jsx)(A, {
                            "data-state": l ? "visible" : "hidden",
                            ...o,
                            ref: e
                        })
                    })
                }),
                S = n.forwardRef((t, e) => {
                    var r, o;
                    let {
                        forceMount: a,
                        ...l
                    } = t, s = v(C, t.__scopeScrollArea), u = "horizontal" === t.orientation, d = O(() => g("SCROLL_END"), 100), [c, g] = (r = "hidden", o = {
                        hidden: {
                            SCROLL: "scrolling"
                        },
                        scrolling: {
                            SCROLL_END: "idle",
                            POINTER_ENTER: "interacting"
                        },
                        interacting: {
                            SCROLL: "interacting",
                            POINTER_LEAVE: "idle"
                        },
                        idle: {
                            HIDE: "hidden",
                            SCROLL: "scrolling",
                            POINTER_ENTER: "interacting"
                        }
                    }, n.useReducer((t, e) => o[t][e] ? ? t, r));
                    return n.useEffect(() => {
                        if ("idle" === c) {
                            let t = window.setTimeout(() => g("HIDE"), s.scrollHideDelay);
                            return () => window.clearTimeout(t)
                        }
                    }, [c, s.scrollHideDelay, g]), n.useEffect(() => {
                        let t = s.viewport,
                            e = u ? "scrollLeft" : "scrollTop";
                        if (t) {
                            let r = t[e],
                                n = () => {
                                    let n = t[e];
                                    r !== n && (g("SCROLL"), d()), r = n
                                };
                            return t.addEventListener("scroll", n), () => t.removeEventListener("scroll", n)
                        }
                    }, [s.viewport, u, g, d]), (0, h.jsx)(i.z, {
                        present: a || "hidden" !== c,
                        children: (0, h.jsx)(M, {
                            "data-state": "hidden" === c ? "hidden" : "visible",
                            ...l,
                            ref: e,
                            onPointerEnter: (0, f.M)(t.onPointerEnter, () => g("POINTER_ENTER")),
                            onPointerLeave: (0, f.M)(t.onPointerLeave, () => g("POINTER_LEAVE"))
                        })
                    })
                }),
                A = n.forwardRef((t, e) => {
                    let r = v(C, t.__scopeScrollArea),
                        {
                            forceMount: o,
                            ...a
                        } = t,
                        [l, s] = n.useState(!1),
                        u = "horizontal" === t.orientation,
                        d = O(() => {
                            if (r.viewport) {
                                let t = r.viewport.offsetWidth < r.viewport.scrollWidth,
                                    e = r.viewport.offsetHeight < r.viewport.scrollHeight;
                                s(u ? t : e)
                            }
                        }, 10);
                    return V(r.viewport, d), V(r.content, d), (0, h.jsx)(i.z, {
                        present: o || l,
                        children: (0, h.jsx)(M, {
                            "data-state": l ? "visible" : "hidden",
                            ...a,
                            ref: e
                        })
                    })
                }),
                M = n.forwardRef((t, e) => {
                    let {
                        orientation: r = "vertical",
                        ...o
                    } = t, i = v(C, t.__scopeScrollArea), a = n.useRef(null), l = n.useRef(0), [s, u] = n.useState({
                        content: 0,
                        viewport: 0,
                        scrollbar: {
                            size: 0,
                            paddingStart: 0,
                            paddingEnd: 0
                        }
                    }), d = H(s.viewport, s.content), c = { ...o,
                        sizes: s,
                        onSizesChange: u,
                        hasThumb: !!(d > 0 && d < 1),
                        onThumbChange: t => a.current = t,
                        onThumbPointerUp: () => l.current = 0,
                        onThumbPointerDown: t => l.current = t
                    };

                    function f(t, e) {
                        return function(t, e, r, n = "ltr") {
                            let o = k(r),
                                i = e || o / 2,
                                a = r.scrollbar.paddingStart + i,
                                l = r.scrollbar.size - r.scrollbar.paddingEnd - (o - i),
                                s = r.content - r.viewport;
                            return F([a, l], "ltr" === n ? [0, s] : [-1 * s, 0])(t)
                        }(t, l.current, s, e)
                    }
                    return "horizontal" === r ? (0, h.jsx)(x, { ...c,
                        ref: e,
                        onThumbPositionChange: () => {
                            if (i.viewport && a.current) {
                                let t = Y(i.viewport.scrollLeft, s, i.dir);
                                a.current.style.transform = `translate3d(${t}px, 0, 0)`
                            }
                        },
                        onWheelScroll: t => {
                            i.viewport && (i.viewport.scrollLeft = t)
                        },
                        onDragScroll: t => {
                            i.viewport && (i.viewport.scrollLeft = f(t, i.dir))
                        }
                    }) : "vertical" === r ? (0, h.jsx)(R, { ...c,
                        ref: e,
                        onThumbPositionChange: () => {
                            if (i.viewport && a.current) {
                                let t = Y(i.viewport.scrollTop, s);
                                a.current.style.transform = `translate3d(0, ${t}px, 0)`
                            }
                        },
                        onWheelScroll: t => {
                            i.viewport && (i.viewport.scrollTop = t)
                        },
                        onDragScroll: t => {
                            i.viewport && (i.viewport.scrollTop = f(t))
                        }
                    }) : null
                }),
                x = n.forwardRef((t, e) => {
                    let {
                        sizes: r,
                        onSizesChange: o,
                        ...i
                    } = t, a = v(C, t.__scopeScrollArea), [s, u] = n.useState(), d = n.useRef(null), c = (0, l.e)(e, d, a.onScrollbarXChange);
                    return n.useEffect(() => {
                        d.current && u(getComputedStyle(d.current))
                    }, [d]), (0, h.jsx)(I, {
                        "data-orientation": "horizontal",
                        ...i,
                        ref: c,
                        sizes: r,
                        style: {
                            bottom: 0,
                            left: "rtl" === a.dir ? "var(--radix-scroll-area-corner-width)" : 0,
                            right: "ltr" === a.dir ? "var(--radix-scroll-area-corner-width)" : 0,
                            "--radix-scroll-area-thumb-width": k(r) + "px",
                            ...t.style
                        },
                        onThumbPointerDown: e => t.onThumbPointerDown(e.x),
                        onDragScroll: e => t.onDragScroll(e.x),
                        onWheelScroll: (e, r) => {
                            if (a.viewport) {
                                let n = a.viewport.scrollLeft + e.deltaX;
                                t.onWheelScroll(n), n > 0 && n < r && e.preventDefault()
                            }
                        },
                        onResize: () => {
                            d.current && a.viewport && s && o({
                                content: a.viewport.scrollWidth,
                                viewport: a.viewport.offsetWidth,
                                scrollbar: {
                                    size: d.current.clientWidth,
                                    paddingStart: _(s.paddingLeft),
                                    paddingEnd: _(s.paddingRight)
                                }
                            })
                        }
                    })
                }),
                R = n.forwardRef((t, e) => {
                    let {
                        sizes: r,
                        onSizesChange: o,
                        ...i
                    } = t, a = v(C, t.__scopeScrollArea), [s, u] = n.useState(), d = n.useRef(null), c = (0, l.e)(e, d, a.onScrollbarYChange);
                    return n.useEffect(() => {
                        d.current && u(getComputedStyle(d.current))
                    }, [d]), (0, h.jsx)(I, {
                        "data-orientation": "vertical",
                        ...i,
                        ref: c,
                        sizes: r,
                        style: {
                            top: 0,
                            right: "ltr" === a.dir ? 0 : void 0,
                            left: "rtl" === a.dir ? 0 : void 0,
                            bottom: "var(--radix-scroll-area-corner-height)",
                            "--radix-scroll-area-thumb-height": k(r) + "px",
                            ...t.style
                        },
                        onThumbPointerDown: e => t.onThumbPointerDown(e.y),
                        onDragScroll: e => t.onDragScroll(e.y),
                        onWheelScroll: (e, r) => {
                            if (a.viewport) {
                                let n = a.viewport.scrollTop + e.deltaY;
                                t.onWheelScroll(n), n > 0 && n < r && e.preventDefault()
                            }
                        },
                        onResize: () => {
                            d.current && a.viewport && s && o({
                                content: a.viewport.scrollHeight,
                                viewport: a.viewport.offsetHeight,
                                scrollbar: {
                                    size: d.current.clientHeight,
                                    paddingStart: _(s.paddingTop),
                                    paddingEnd: _(s.paddingBottom)
                                }
                            })
                        }
                    })
                }),
                [N, B] = m(C),
                I = n.forwardRef((t, e) => {
                    let {
                        __scopeScrollArea: r,
                        sizes: i,
                        hasThumb: a,
                        onThumbChange: u,
                        onThumbPointerUp: d,
                        onThumbPointerDown: c,
                        onThumbPositionChange: g,
                        onDragScroll: m,
                        onWheelScroll: p,
                        onResize: w,
                        ...b
                    } = t, y = v(C, r), [E, P] = n.useState(null), T = (0, l.e)(e, t => P(t)), S = n.useRef(null), A = n.useRef(""), M = y.viewport, x = i.content - i.viewport, R = (0, s.W)(p), B = (0, s.W)(g), I = O(w, 10);

                    function L(t) {
                        S.current && m({
                            x: t.clientX - S.current.left,
                            y: t.clientY - S.current.top
                        })
                    }
                    return n.useEffect(() => {
                        let t = t => {
                            let e = t.target;
                            E ? .contains(e) && R(t, x)
                        };
                        return document.addEventListener("wheel", t, {
                            passive: !1
                        }), () => document.removeEventListener("wheel", t, {
                            passive: !1
                        })
                    }, [M, E, x, R]), n.useEffect(B, [i, B]), V(E, I), V(y.content, I), (0, h.jsx)(N, {
                        scope: r,
                        scrollbar: E,
                        hasThumb: a,
                        onThumbChange: (0, s.W)(u),
                        onThumbPointerUp: (0, s.W)(d),
                        onThumbPositionChange: B,
                        onThumbPointerDown: (0, s.W)(c),
                        children: (0, h.jsx)(o.WV.div, { ...b,
                            ref: T,
                            style: {
                                position: "absolute",
                                ...b.style
                            },
                            onPointerDown: (0, f.M)(t.onPointerDown, t => {
                                0 === t.button && (t.target.setPointerCapture(t.pointerId), S.current = E.getBoundingClientRect(), A.current = document.body.style.webkitUserSelect, document.body.style.webkitUserSelect = "none", y.viewport && (y.viewport.style.scrollBehavior = "auto"), L(t))
                            }),
                            onPointerMove: (0, f.M)(t.onPointerMove, L),
                            onPointerUp: (0, f.M)(t.onPointerUp, t => {
                                let e = t.target;
                                e.hasPointerCapture(t.pointerId) && e.releasePointerCapture(t.pointerId), document.body.style.webkitUserSelect = A.current, y.viewport && (y.viewport.style.scrollBehavior = ""), S.current = null
                            })
                        })
                    })
                }),
                L = "ScrollAreaThumb",
                j = n.forwardRef((t, e) => {
                    let {
                        forceMount: r,
                        ...n
                    } = t, o = B(L, t.__scopeScrollArea);
                    return (0, h.jsx)(i.z, {
                        present: r || o.hasThumb,
                        children: (0, h.jsx)(D, {
                            ref: e,
                            ...n
                        })
                    })
                }),
                D = n.forwardRef((t, e) => {
                    let {
                        __scopeScrollArea: r,
                        style: i,
                        ...a
                    } = t, s = v(L, r), u = B(L, r), {
                        onThumbPositionChange: d
                    } = u, c = (0, l.e)(e, t => u.onThumbChange(t)), g = n.useRef(void 0), m = O(() => {
                        g.current && (g.current(), g.current = void 0)
                    }, 100);
                    return n.useEffect(() => {
                        let t = s.viewport;
                        if (t) {
                            let e = () => {
                                if (m(), !g.current) {
                                    let e = q(t, d);
                                    g.current = e, d()
                                }
                            };
                            return d(), t.addEventListener("scroll", e), () => t.removeEventListener("scroll", e)
                        }
                    }, [s.viewport, m, d]), (0, h.jsx)(o.WV.div, {
                        "data-state": u.hasThumb ? "visible" : "hidden",
                        ...a,
                        ref: c,
                        style: {
                            width: "var(--radix-scroll-area-thumb-width)",
                            height: "var(--radix-scroll-area-thumb-height)",
                            ...i
                        },
                        onPointerDownCapture: (0, f.M)(t.onPointerDownCapture, t => {
                            let e = t.target.getBoundingClientRect(),
                                r = t.clientX - e.left,
                                n = t.clientY - e.top;
                            u.onThumbPointerDown({
                                x: r,
                                y: n
                            })
                        }),
                        onPointerUp: (0, f.M)(t.onPointerUp, u.onThumbPointerUp)
                    })
                });
            j.displayName = L;
            var z = "ScrollAreaCorner",
                U = n.forwardRef((t, e) => {
                    let r = v(z, t.__scopeScrollArea),
                        n = !!(r.scrollbarX && r.scrollbarY);
                    return "scroll" !== r.type && n ? (0, h.jsx)(W, { ...t,
                        ref: e
                    }) : null
                });
            U.displayName = z;
            var W = n.forwardRef((t, e) => {
                let {
                    __scopeScrollArea: r,
                    ...i
                } = t, a = v(z, r), [l, s] = n.useState(0), [u, d] = n.useState(0), c = !!(l && u);
                return V(a.scrollbarX, () => {
                    let t = a.scrollbarX ? .offsetHeight || 0;
                    a.onCornerHeightChange(t), d(t)
                }), V(a.scrollbarY, () => {
                    let t = a.scrollbarY ? .offsetWidth || 0;
                    a.onCornerWidthChange(t), s(t)
                }), c ? (0, h.jsx)(o.WV.div, { ...i,
                    ref: e,
                    style: {
                        width: l,
                        height: u,
                        position: "absolute",
                        right: "ltr" === a.dir ? 0 : void 0,
                        left: "rtl" === a.dir ? 0 : void 0,
                        bottom: 0,
                        ...t.style
                    }
                }) : null
            });

            function _(t) {
                return t ? parseInt(t, 10) : 0
            }

            function H(t, e) {
                let r = t / e;
                return isNaN(r) ? 0 : r
            }

            function k(t) {
                let e = H(t.viewport, t.content),
                    r = t.scrollbar.paddingStart + t.scrollbar.paddingEnd;
                return Math.max((t.scrollbar.size - r) * e, 18)
            }

            function Y(t, e, r = "ltr") {
                let n = k(e),
                    o = e.scrollbar.paddingStart + e.scrollbar.paddingEnd,
                    i = e.scrollbar.size - o,
                    a = e.content - e.viewport,
                    l = (0, c.u)(t, "ltr" === r ? [0, a] : [-1 * a, 0]);
                return F([0, a], [0, i - n])(l)
            }

            function F(t, e) {
                return r => {
                    if (t[0] === t[1] || e[0] === e[1]) return e[0];
                    let n = (e[1] - e[0]) / (t[1] - t[0]);
                    return e[0] + n * (r - t[0])
                }
            }
            var q = (t, e = () => {}) => {
                let r = {
                        left: t.scrollLeft,
                        top: t.scrollTop
                    },
                    n = 0;
                return ! function o() {
                    let i = {
                            left: t.scrollLeft,
                            top: t.scrollTop
                        },
                        a = r.left !== i.left,
                        l = r.top !== i.top;
                    (a || l) && e(), r = i, n = window.requestAnimationFrame(o)
                }(), () => window.cancelAnimationFrame(n)
            };

            function O(t, e) {
                let r = (0, s.W)(t),
                    o = n.useRef(0);
                return n.useEffect(() => () => window.clearTimeout(o.current), []), n.useCallback(() => {
                    window.clearTimeout(o.current), o.current = window.setTimeout(r, e)
                }, [r, e])
            }

            function V(t, e) {
                let r = (0, s.W)(e);
                (0, d.b)(() => {
                    let e = 0;
                    if (t) {
                        let n = new ResizeObserver(() => {
                            cancelAnimationFrame(e), e = window.requestAnimationFrame(r)
                        });
                        return n.observe(t), () => {
                            window.cancelAnimationFrame(e), n.unobserve(t)
                        }
                    }
                }, [t, r])
            }
            var J = b,
                K = E,
                X = U
        },
        24847: function(t, e, r) {
            "use strict";
            r.d(e, {
                F: function() {
                    return d
                }
            });
            var n = {
                    lessThanXSeconds: {
                        one: "menos de um segundo",
                        other: "menos de {{count}} segundos"
                    },
                    xSeconds: {
                        one: "1 segundo",
                        other: "{{count}} segundos"
                    },
                    halfAMinute: "meio minuto",
                    lessThanXMinutes: {
                        one: "menos de um minuto",
                        other: "menos de {{count}} minutos"
                    },
                    xMinutes: {
                        one: "1 minuto",
                        other: "{{count}} minutos"
                    },
                    aboutXHours: {
                        one: "cerca de 1 hora",
                        other: "cerca de {{count}} horas"
                    },
                    xHours: {
                        one: "1 hora",
                        other: "{{count}} horas"
                    },
                    xDays: {
                        one: "1 dia",
                        other: "{{count}} dias"
                    },
                    aboutXWeeks: {
                        one: "cerca de 1 semana",
                        other: "cerca de {{count}} semanas"
                    },
                    xWeeks: {
                        one: "1 semana",
                        other: "{{count}} semanas"
                    },
                    aboutXMonths: {
                        one: "cerca de 1 m\xeas",
                        other: "cerca de {{count}} meses"
                    },
                    xMonths: {
                        one: "1 m\xeas",
                        other: "{{count}} meses"
                    },
                    aboutXYears: {
                        one: "cerca de 1 ano",
                        other: "cerca de {{count}} anos"
                    },
                    xYears: {
                        one: "1 ano",
                        other: "{{count}} anos"
                    },
                    overXYears: {
                        one: "mais de 1 ano",
                        other: "mais de {{count}} anos"
                    },
                    almostXYears: {
                        one: "quase 1 ano",
                        other: "quase {{count}} anos"
                    }
                },
                o = r(86347),
                i = {
                    date: (0, o.l)({
                        formats: {
                            full: "EEEE, d 'de' MMMM 'de' y",
                            long: "d 'de' MMMM 'de' y",
                            medium: "d MMM y",
                            short: "dd/MM/yyyy"
                        },
                        defaultWidth: "full"
                    }),
                    time: (0, o.l)({
                        formats: {
                            full: "HH:mm:ss zzzz",
                            long: "HH:mm:ss z",
                            medium: "HH:mm:ss",
                            short: "HH:mm"
                        },
                        defaultWidth: "full"
                    }),
                    dateTime: (0, o.l)({
                        formats: {
                            full: "{{date}} '\xe0s' {{time}}",
                            long: "{{date}} '\xe0s' {{time}}",
                            medium: "{{date}}, {{time}}",
                            short: "{{date}}, {{time}}"
                        },
                        defaultWidth: "full"
                    })
                },
                a = {
                    lastWeek: function(t) {
                        var e = t.getDay();
                        return "'" + (0 === e || 6 === e ? "\xfaltimo" : "\xfaltima") + "' eeee '\xe0s' p"
                    },
                    yesterday: "'ontem \xe0s' p",
                    today: "'hoje \xe0s' p",
                    tomorrow: "'amanh\xe3 \xe0s' p",
                    nextWeek: "eeee '\xe0s' p",
                    other: "P"
                },
                l = r(800),
                s = {
                    ordinalNumber: function(t, e) {
                        var r = Number(t);
                        return (null == e ? void 0 : e.unit) === "week" ? r + "\xaa" : r + "\xba"
                    },
                    era: (0, l.Y)({
                        values: {
                            narrow: ["AC", "DC"],
                            abbreviated: ["AC", "DC"],
                            wide: ["antes de cristo", "depois de cristo"]
                        },
                        defaultWidth: "wide"
                    }),
                    quarter: (0, l.Y)({
                        values: {
                            narrow: ["1", "2", "3", "4"],
                            abbreviated: ["T1", "T2", "T3", "T4"],
                            wide: ["1\xba trimestre", "2\xba trimestre", "3\xba trimestre", "4\xba trimestre"]
                        },
                        defaultWidth: "wide",
                        argumentCallback: function(t) {
                            return t - 1
                        }
                    }),
                    month: (0, l.Y)({
                        values: {
                            narrow: ["j", "f", "m", "a", "m", "j", "j", "a", "s", "o", "n", "d"],
                            abbreviated: ["jan", "fev", "mar", "abr", "mai", "jun", "jul", "ago", "set", "out", "nov", "dez"],
                            wide: ["janeiro", "fevereiro", "mar\xe7o", "abril", "maio", "junho", "julho", "agosto", "setembro", "outubro", "novembro", "dezembro"]
                        },
                        defaultWidth: "wide"
                    }),
                    day: (0, l.Y)({
                        values: {
                            narrow: ["D", "S", "T", "Q", "Q", "S", "S"],
                            short: ["dom", "seg", "ter", "qua", "qui", "sex", "sab"],
                            abbreviated: ["domingo", "segunda", "ter\xe7a", "quarta", "quinta", "sexta", "s\xe1bado"],
                            wide: ["domingo", "segunda-feira", "ter\xe7a-feira", "quarta-feira", "quinta-feira", "sexta-feira", "s\xe1bado"]
                        },
                        defaultWidth: "wide"
                    }),
                    dayPeriod: (0, l.Y)({
                        values: {
                            narrow: {
                                am: "a",
                                pm: "p",
                                midnight: "mn",
                                noon: "md",
                                morning: "manh\xe3",
                                afternoon: "tarde",
                                evening: "tarde",
                                night: "noite"
                            },
                            abbreviated: {
                                am: "AM",
                                pm: "PM",
                                midnight: "meia-noite",
                                noon: "meio-dia",
                                morning: "manh\xe3",
                                afternoon: "tarde",
                                evening: "tarde",
                                night: "noite"
                            },
                            wide: {
                                am: "a.m.",
                                pm: "p.m.",
                                midnight: "meia-noite",
                                noon: "meio-dia",
                                morning: "manh\xe3",
                                afternoon: "tarde",
                                evening: "tarde",
                                night: "noite"
                            }
                        },
                        defaultWidth: "wide",
                        formattingValues: {
                            narrow: {
                                am: "a",
                                pm: "p",
                                midnight: "mn",
                                noon: "md",
                                morning: "da manh\xe3",
                                afternoon: "da tarde",
                                evening: "da tarde",
                                night: "da noite"
                            },
                            abbreviated: {
                                am: "AM",
                                pm: "PM",
                                midnight: "meia-noite",
                                noon: "meio-dia",
                                morning: "da manh\xe3",
                                afternoon: "da tarde",
                                evening: "da tarde",
                                night: "da noite"
                            },
                            wide: {
                                am: "a.m.",
                                pm: "p.m.",
                                midnight: "meia-noite",
                                noon: "meio-dia",
                                morning: "da manh\xe3",
                                afternoon: "da tarde",
                                evening: "da tarde",
                                night: "da noite"
                            }
                        },
                        defaultFormattingWidth: "wide"
                    })
                },
                u = r(77511),
                d = {
                    code: "pt-BR",
                    formatDistance: function(t, e, r) {
                        var o, i = n[t];
                        return (o = "string" == typeof i ? i : 1 === e ? i.one : i.other.replace("{{count}}", String(e)), null == r ? void 0 : r.addSuffix) ? r.comparison && r.comparison > 0 ? "em " + o : "h\xe1 " + o : o
                    },
                    formatLong: i,
                    formatRelative: function(t, e, r, n) {
                        var o = a[t];
                        return "function" == typeof o ? o(e) : o
                    },
                    localize: s,
                    match: {
                        ordinalNumber: (0, r(51955).y)({
                            matchPattern: /^(\d+)[ºªo]?/i,
                            parsePattern: /\d+/i,
                            valueCallback: function(t) {
                                return parseInt(t, 10)
                            }
                        }),
                        era: (0, u.t)({
                            matchPatterns: {
                                narrow: /^(ac|dc|a|d)/i,
                                abbreviated: /^(a\.?\s?c\.?|d\.?\s?c\.?)/i,
                                wide: /^(antes de cristo|depois de cristo)/i
                            },
                            defaultMatchWidth: "wide",
                            parsePatterns: {
                                any: [/^ac/i, /^dc/i],
                                wide: [/^antes de cristo/i, /^depois de cristo/i]
                            },
                            defaultParseWidth: "any"
                        }),
                        quarter: (0, u.t)({
                            matchPatterns: {
                                narrow: /^[1234]/i,
                                abbreviated: /^T[1234]/i,
                                wide: /^[1234](º)? trimestre/i
                            },
                            defaultMatchWidth: "wide",
                            parsePatterns: {
                                any: [/1/i, /2/i, /3/i, /4/i]
                            },
                            defaultParseWidth: "any",
                            valueCallback: function(t) {
                                return t + 1
                            }
                        }),
                        month: (0, u.t)({
                            matchPatterns: {
                                narrow: /^[jfmajsond]/i,
                                abbreviated: /^(jan|fev|mar|abr|mai|jun|jul|ago|set|out|nov|dez)/i,
                                wide: /^(janeiro|fevereiro|março|abril|maio|junho|julho|agosto|setembro|outubro|novembro|dezembro)/i
                            },
                            defaultMatchWidth: "wide",
                            parsePatterns: {
                                narrow: [/^j/i, /^f/i, /^m/i, /^a/i, /^m/i, /^j/i, /^j/i, /^a/i, /^s/i, /^o/i, /^n/i, /^d/i],
                                any: [/^ja/i, /^fev/i, /^mar/i, /^abr/i, /^mai/i, /^jun/i, /^jul/i, /^ago/i, /^set/i, /^out/i, /^nov/i, /^dez/i]
                            },
                            defaultParseWidth: "any"
                        }),
                        day: (0, u.t)({
                            matchPatterns: {
                                narrow: /^(dom|[23456]ª?|s[aá]b)/i,
                                short: /^(dom|[23456]ª?|s[aá]b)/i,
                                abbreviated: /^(dom|seg|ter|qua|qui|sex|s[aá]b)/i,
                                wide: /^(domingo|(segunda|ter[cç]a|quarta|quinta|sexta)([- ]feira)?|s[aá]bado)/i
                            },
                            defaultMatchWidth: "wide",
                            parsePatterns: {
                                short: [/^d/i, /^2/i, /^3/i, /^4/i, /^5/i, /^6/i, /^s[aá]/i],
                                narrow: [/^d/i, /^2/i, /^3/i, /^4/i, /^5/i, /^6/i, /^s[aá]/i],
                                any: [/^d/i, /^seg/i, /^t/i, /^qua/i, /^qui/i, /^sex/i, /^s[aá]b/i]
                            },
                            defaultParseWidth: "any"
                        }),
                        dayPeriod: (0, u.t)({
                            matchPatterns: {
                                narrow: /^(a|p|mn|md|(da) (manhã|tarde|noite))/i,
                                any: /^([ap]\.?\s?m\.?|meia[-\s]noite|meio[-\s]dia|(da) (manhã|tarde|noite))/i
                            },
                            defaultMatchWidth: "any",
                            parsePatterns: {
                                any: {
                                    am: /^a/i,
                                    pm: /^p/i,
                                    midnight: /^mn|^meia[-\s]noite/i,
                                    noon: /^md|^meio[-\s]dia/i,
                                    morning: /manhã/i,
                                    afternoon: /tarde/i,
                                    evening: /tarde/i,
                                    night: /noite/i
                                }
                            },
                            defaultParseWidth: "any"
                        })
                    },
                    options: {
                        weekStartsOn: 0,
                        firstWeekContainsDate: 1
                    }
                }
        }
    }
]);