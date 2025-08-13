(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [8075], {
        60819: function(e, n, t) {
            "use strict";
            t.d(n, {
                Z: function() {
                    return a
                }
            });
            var i = t(20567),
                o = t(85893),
                r = t(26001);

            function a(e) {
                return (0, o.jsx)(r.Z, (0, i._)({
                    code: "btc"
                }, e))
            }
        },
        1933: function(e, n, t) {
            "use strict";
            t.d(n, {
                Z: function() {
                    return a
                }
            });
            var i = t(20567),
                o = t(85893),
                r = t(26001);

            function a(e) {
                return (0, o.jsx)(r.Z, (0, i._)({
                    code: "eth"
                }, e))
            }
        },
        35665: function(e, n, t) {
            "use strict";
            t.d(n, {
                Z: function() {
                    return a
                }
            });
            var i = t(20567),
                o = t(85893),
                r = t(26001);

            function a(e) {
                return (0, o.jsx)(r.Z, (0, i._)({
                    code: "ltc"
                }, e))
            }
        },
        75455: function(e, n, t) {
            "use strict";
            t.d(n, {
                Z: function() {
                    return a
                }
            });
            var i = t(20567),
                o = t(85893),
                r = t(26001);

            function a(e) {
                return (0, o.jsx)(r.Z, (0, i._)({
                    code: "usdt"
                }, e))
            }
        },
        45366: function(e, n, t) {
            "use strict";
            var i = t(20567),
                o = t(14932),
                r = t(85893),
                a = t(46046),
                l = t(56900),
                u = t(40108),
                c = t(25675),
                s = t.n(c),
                d = t(67294),
                v = t(4209),
                m = t.n(v),
                p = Object.freeze({
                    aud: "A$",
                    brl: "R$",
                    cad: "C$",
                    eur: "€",
                    gbp: "\xa3",
                    usd: "$",
                    jpy: "\xa5"
                }),
                f = new Map,
                _ = (0, d.memo)(function(e) {
                    var n, t = e.code,
                        c = e.size,
                        v = void 0 !== c && c,
                        _ = e.classItem,
                        x = void 0 === _ ? "" : _,
                        y = e.emptyValue,
                        C = e.greyEmpty,
                        h = void 0 !== C && C,
                        g = e.textIcon,
                        b = e.symbolColor,
                        j = e.isNew,
                        Z = void 0 !== j && j,
                        N = null === (n = (0, a.ZP)().walletSetting) || void 0 === n ? void 0 : n.toLowerCase(),
                        w = (0, d.useMemo)(function() {
                            return t || N || "usd"
                        }, [t, N]),
                        V = (0, d.useMemo)(function() {
                            var e = w.toLowerCase();
                            if (f.has(e)) return f.get(e);
                            var n = "https://cdn.rainbet.com/currencies/".concat(e, ".svg");
                            if (f.size > 30) {
                                var t = f.keys().next().value;
                                f.delete(t)
                            }
                            return f.set(e, n), n
                        }, [w]),
                        F = (0, d.useMemo)(function() {
                            return (0, l.ze)((0, l.dh)(m(), "currency-icon", v), x && x)
                        }, [v, x]),
                        M = (0, d.useMemo)(function() {
                            return p[w.toLowerCase()] || "$"
                        }, [w]),
                        I = (0, d.useMemo)(function() {
                            return (0, u.cn)(m()["text-currency"], Z && "flex items-center justify-center w-[26px] h-[26px] rounded-full bg-[rgba(124,131,177,0.15)] border border-solid border-[rgba(255,255,255,0.05)] text-white text-xs font-medium")
                        }, [Z]),
                        D = (0, d.useMemo)(function() {
                            return (0, i._)({
                                maxWidth: "100%",
                                height: "auto"
                            }, y && h && {
                                filter: "opacity(66%) saturate(10%) brightness(120%)"
                            })
                        }, [y, h]),
                        k = (0, d.useMemo)(function() {
                            return w.toUpperCase()
                        }, [w]);
                    return w ? void 0 !== g && g ? (0, r.jsx)("span", {
                        className: I,
                        style: b ? {
                            color: b
                        } : void 0,
                        children: M
                    }) : (0, r.jsx)("div", (0, o._)((0, i._)({}, F), {
                        children: (0, r.jsx)(s(), {
                            alt: k,
                            src: V,
                            width: 25,
                            height: 25,
                            style: D
                        })
                    })) : null
                }, function(e, n) {
                    return e.code === n.code && e.size === n.size && e.classItem === n.classItem && e.emptyValue === n.emptyValue && e.greyEmpty === n.greyEmpty && e.textIcon === n.textIcon && e.isNew === n.isNew
                });
            _.displayName = "CurrencyIcons", n.Z = _
        },
        8075: function(e, n, t) {
            "use strict";
            t.d(n, {
                Z: function() {
                    return _
                }
            });
            var i = t(20567),
                o = t(14932),
                r = t(85893),
                a = t(46046),
                l = t(10617),
                u = t(56900),
                c = t(18454),
                s = t(80816),
                d = t(4209),
                v = t.n(d),
                m = t(67294),
                p = t(45366),
                f = function(e, n) {
                    var t = n || {},
                        i = t.raw,
                        o = t.customFiatRate,
                        r = (0, a.ZP)().activeRate,
                        l = (0, m.useMemo)(function() {
                            return (null == e ? void 0 : e.rate) !== (null == r ? void 0 : r.rate)
                        }, [null == r ? void 0 : r.rate, null == e ? void 0 : e.rate]);
                    return !i && !o && l
                },
                _ = (0, m.memo)(function(e) {
                    var n, t, d, _ = e.amount,
                        x = void 0 === _ ? 0 : _,
                        y = e.size,
                        C = e.customClass,
                        h = e.classType,
                        g = e.iconCustomClass,
                        b = e.icon,
                        j = e.raw,
                        Z = void 0 !== j && j,
                        N = e.iconOnly,
                        w = void 0 !== N && N,
                        V = e.currencyCode,
                        F = e.textSize,
                        M = void 0 !== F && F,
                        I = e.change,
                        D = e.greyIconOnEmpty,
                        k = e.customFiatRate,
                        z = void 0 !== k && k,
                        L = e.debug,
                        E = e.textIcon,
                        A = void 0 !== E && E,
                        H = e.symbolPosition,
                        R = void 0 === H || H,
                        S = e.style,
                        U = e.rounding,
                        $ = e.decimals,
                        O = e.symbolColor,
                        P = e.formatK,
                        K = void 0 !== P && P,
                        W = (0, a.ZP)(),
                        T = W.activeRate,
                        B = W.currencies,
                        X = (0, u.bU)(),
                        Y = null == B ? void 0 : B[null == V ? void 0 : null === (n = V.toUpperCase) || void 0 === n ? void 0 : n.call(V)],
                        q = f(Y, {
                            raw: Z,
                            customFiatRate: z
                        }),
                        J = null !== (d = null != $ ? $ : null == T ? void 0 : null === (t = T.display) || void 0 === t ? void 0 : t.decimals) && void 0 !== d ? d : 2,
                        Q = (0, m.useMemo)(function() {
                            try {
                                var e = (null == Y ? void 0 : Y.rate) || 1,
                                    n = q ? (0, s.g)(+x).div((0, s.g)(e)).toNumber() : +x;
                                return (0, c.Z)(n), n
                            } catch (e) {
                                return +x
                            }
                        }, [x, q, Y]),
                        G = (0, m.useMemo)(function() {
                            if (w) return "";
                            var e = !q && V && "string" == typeof V ? Y : T,
                                n = (0, i._)({
                                    rate: z ? {
                                        rate: z
                                    } : e,
                                    raw: !z && (!q || Z),
                                    decimals: J,
                                    locale: X,
                                    symbol: R,
                                    debug: L,
                                    symbolColor: O
                                }, U && {
                                    round: {
                                        direction: U
                                    }
                                }),
                                t = Q,
                                r = "";
                            if (K) {
                                var a = function(e) {
                                    var n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 2,
                                        t = Math.pow(10, n);
                                    return e >= 1e6 ? {
                                        value: Math.floor(e / 1e6 * t) / t,
                                        suffix: "m"
                                    } : e >= 1e3 ? {
                                        value: Math.floor(e / 1e3 * t) / t,
                                        suffix: "k"
                                    } : {
                                        value: e,
                                        suffix: ""
                                    }
                                }(Q, J);
                                t = a.value, r = a.suffix
                            }
                            var u = (0, l.I_)(t, (0, o._)((0, i._)({}, n), {
                                    symbol: !1
                                })),
                                c = r ? "".concat(u).concat(r) : u;
                            if (n.symbol) {
                                var s, d, v, m, p, f, _ = null !== (p = null === (d = n.rate) || void 0 === d ? void 0 : null === (s = d.display) || void 0 === s ? void 0 : s.prepend) && void 0 !== p ? p : "",
                                    x = null !== (f = null === (m = n.rate) || void 0 === m ? void 0 : null === (v = m.display) || void 0 === v ? void 0 : v.append) && void 0 !== f ? f : "";
                                c = O ? "".concat(_ ? '<span style="color: '.concat(O, '">').concat(_, "</span> ") : "").concat(c).concat(x ? ' <span style="color: '.concat(O, '">').concat(x, "</span>") : "") : "".concat(_).concat(c).concat(x ? " ".concat(x) : "")
                            }
                            return I ? I(c) : c
                        }, [w, q, V, Y, T, z, Z, J, X, R, L, O, U, Q, K, I]),
                        ee = (0, m.useMemo)(function() {
                            return M ? {
                                fontSize: M + "px"
                            } : void 0
                        }, [M]),
                        en = (0, m.useMemo)(function() {
                            return (0, u.ze)((0, u.dh)(v(), A ? "text-display" : "value-display", h), C)
                        }, [A, h, C]),
                        et = (0, m.useMemo)(function() {
                            return (0, u.dh)(v(), "value", null != A ? A : "value-number-display")
                        }, [A]);
                    return (0, r.jsxs)("p", (0, o._)((0, i._)({}, en), {
                        style: (0, i._)({}, S, ee),
                        children: [void 0 !== b && b && (0, r.jsx)(p.Z, {
                            size: void 0 === y ? "mid" : y,
                            classItem: g,
                            code: q && !Z ? void 0 : V || "",
                            emptyValue: 0 == +x,
                            greyEmpty: void 0 !== D && D,
                            textIcon: A,
                            symbolColor: O
                        }), G && (0, r.jsx)("span", (0, o._)((0, i._)({}, et), {
                            dangerouslySetInnerHTML: {
                                __html: G
                            }
                        }))]
                    }))
                })
        },
        64272: function(e, n, t) {
            "use strict";
            t.d(n, {
                Z: function() {
                    return d
                }
            });
            var i = t(85893),
                o = t(60819),
                r = t(1933),
                a = t(35665);

            function l() {
                return (0, i.jsxs)("svg", {
                    width: "20",
                    height: "100%",
                    viewBox: "0 0 114 114",
                    fill: "none",
                    xmlns: "http://www.w3.org/2000/svg",
                    children: [(0, i.jsxs)("g", {
                        clipPath: "url(#clip0_263_89333)",
                        children: [(0, i.jsx)("path", {
                            d: "M57 114C88.4802 114 114 88.4802 114 57C114 25.5198 88.4802 0 57 0C25.5198 0 0 25.5198 0 57C0 88.4802 25.5198 114 57 114Z",
                            fill: "#FFD54F"
                        }), (0, i.jsx)("path", {
                            d: "M57 0C55.8444 0 54.698 0.0385195 53.5593 0.10643C83.4371 1.88568 107.119 26.6753 107.119 57C107.119 87.3247 83.4371 112.114 53.5596 113.894C54.698 113.961 55.8444 114 57 114C88.4803 114 114 88.4803 114 57C114 25.5197 88.4803 0 57 0Z",
                            fill: "#FFCA28"
                        }), (0, i.jsx)("path", {
                            d: "M57 107.119C43.6128 107.119 31.027 101.906 21.5607 92.4393C12.0945 82.9731 6.88123 70.3872 6.88123 57C6.88123 43.6128 12.0945 31.0269 21.5607 21.5607C31.027 12.0945 43.6128 6.8812 57 6.8812C70.3872 6.8812 82.9731 12.0945 92.4393 21.5607C101.906 31.0269 107.119 43.6128 107.119 57C107.119 70.3872 101.906 82.9731 92.4393 92.4393C82.9731 101.906 70.3872 107.119 57 107.119Z",
                            fill: "#FFB300"
                        }), (0, i.jsx)("path", {
                            d: "M92.4393 21.5607C82.9731 12.0945 70.3872 6.8812 57 6.8812C55.8465 6.8812 54.6995 6.92261 53.5593 6.99943C65.6511 7.8139 76.9073 12.9101 85.5579 21.5605C95.0242 31.0267 100.237 43.6126 100.237 56.9998C100.237 70.387 95.0242 82.9729 85.5579 92.4391C76.9073 101.09 65.6509 106.186 53.5593 107C54.6995 107.077 55.8465 107.118 57 107.118C70.3872 107.118 82.9731 101.905 92.4393 92.4389C101.906 82.9726 107.119 70.3868 107.119 56.9996C107.119 43.6124 101.906 31.0269 92.4393 21.5607Z",
                            fill: "#FFA000"
                        }), (0, i.jsx)("path", {
                            d: "M93.6201 20.38C83.8386 10.5982 70.8332 5.21127 57 5.21127C43.1668 5.21127 30.1615 10.5982 20.38 20.38C10.5985 30.1617 5.2113 43.1668 5.2113 57C5.2113 70.8332 10.5982 83.8385 20.3798 93.6201C30.1613 103.402 43.1668 108.789 57 108.789C70.8332 108.789 83.8386 103.402 93.6201 93.6203C103.402 83.8388 108.789 70.8332 108.789 57C108.789 43.1668 103.402 30.1615 93.6201 20.38ZM91.2586 91.2586C82.1076 100.409 69.941 105.449 57 105.449C44.059 105.449 31.8924 100.409 22.7415 91.2586C13.5907 82.1076 8.55115 69.941 8.55115 57C8.55115 44.059 13.5907 31.8924 22.7415 22.7414C31.8924 13.5907 44.059 8.55112 57 8.55112C69.941 8.55112 82.1076 13.5907 91.2586 22.7414C100.409 31.8924 105.449 44.059 105.449 57C105.449 69.941 100.409 82.1076 91.2586 91.2586Z",
                            fill: "#FB8C00"
                        }), (0, i.jsx)("path", {
                            d: "M60.8493 30.5838C59.4341 27.8821 55.5568 27.9113 54.1825 30.634L41.278 56.1995C35.0754 68.4877 44.0064 83 57.7713 83C71.6583 83 80.581 68.2535 74.1374 55.952L60.8493 30.5838Z",
                            fill: "#F9D761",
                            stroke: "#FFA000",
                            strokeWidth: "4"
                        }), (0, i.jsx)("path", {
                            d: "M56.2812 32.8546C55.6494 30.2291 58.2236 29.6887 59.4898 32.0738L72.1449 55.9129C75.3982 62.0413 74.7178 69.514 70.411 74.954L69.6895 75.8654C68.5765 77.2713 67.1683 78.4156 65.5644 79.2176C64.5265 79.7366 63.4165 80.1483 62.2576 80.0873C59.5224 79.9432 55.1078 78.3114 61 68C67.3146 56.9495 58.7546 43.1333 56.2812 32.8546Z",
                            fill: "#F7CC46"
                        }), (0, i.jsx)("path", {
                            d: "M81.895 85H70.42L57.84 63.835H47.98V85H38.035V28.305H62.94C68.4933 28.305 72.97 29.9483 76.37 33.235C79.77 36.5217 81.47 40.8 81.47 46.07C81.47 50.83 80.1667 54.655 77.56 57.545C74.9533 60.3783 71.78 62.1067 68.04 62.73L81.895 85ZM61.58 55.08C64.4133 55.08 66.7367 54.2583 68.55 52.615C70.3633 50.9717 71.27 48.79 71.27 46.07C71.27 43.35 70.3633 41.1683 68.55 39.525C66.7367 37.8817 64.4133 37.06 61.58 37.06H47.98V55.08H61.58Z",
                            fill: "#A95100"
                        })]
                    }), (0, i.jsx)("defs", {
                        children: (0, i.jsx)("clipPath", {
                            id: "clip0_263_89333",
                            children: (0, i.jsx)("rect", {
                                width: "114",
                                height: "114",
                                fill: "white"
                            })
                        })
                    })]
                })
            }
            var u = t(75455),
                c = t(394),
                s = t.n(c);

            function d(e) {
                var n = e.code,
                    t = e.size,
                    c = void 0 !== t && t,
                    d = e.classItem,
                    v = null,
                    m = "".concat(s()["value-icon"], "  ").concat(c ? s()[c] : null, " ").concat(s()[void 0 === d ? "null" : d]);
                switch ((void 0 === n ? "rain" : n).toLowerCase()) {
                    case "rain":
                        v = (0, i.jsx)("div", {
                            className: m,
                            children: (0, i.jsx)(l, {})
                        });
                        break;
                    case "eth":
                        v = (0, i.jsx)("div", {
                            className: m,
                            children: (0, i.jsx)(r.Z, {})
                        });
                        break;
                    case "btc":
                        v = (0, i.jsx)("div", {
                            className: m,
                            children: (0, i.jsx)(o.Z, {})
                        });
                        break;
                    case "ltc":
                        v = (0, i.jsx)("div", {
                            className: m,
                            children: (0, i.jsx)(a.Z, {})
                        });
                        break;
                    case "usdt":
                        v = (0, i.jsx)("div", {
                            className: m,
                            children: (0, i.jsx)(u.Z, {})
                        });
                        break;
                    case "brl":
                        v = (0, i.jsx)("div", {
                            className: m,
                            children: (0, i.jsx)("span", {
                                className: s()["text-icon"],
                                children: "R$"
                            })
                        });
                        break;
                    case "cad":
                        v = (0, i.jsx)("div", {
                            className: m,
                            children: (0, i.jsx)("span", {
                                className: s()["text-icon"],
                                children: "C$"
                            })
                        });
                        break;
                    default:
                        v = null
                }
                return v
            }
        },
        10617: function(e, n, t) {
            "use strict";
            t.d(n, {
                CV: function() {
                    return p
                },
                Ds: function() {
                    return a
                },
                I_: function() {
                    return c
                },
                Kv: function() {
                    return d
                },
                SD: function() {
                    return s
                },
                cl: function() {
                    return m
                },
                l1: function() {
                    return v
                },
                zs: function() {
                    return u
                }
            });
            var i = t(12796);
            t(85893);
            var o = t(13012);
            t(64272);
            var r = t(80816),
                a = function(e, n) {
                    return n ? (Number(e) / n).toFixed(8) : 0
                };

            function l() {
                var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "en";
                return navigator.language || e
            }

            function u() {
                var e, n, t, i, o = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0,
                    a = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {
                        rate: 1
                    },
                    u = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
                    c = arguments.length > 3 && void 0 !== arguments[3] && arguments[3],
                    s = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : void 0,
                    d = (0, r.g)(Number(o));
                u || (d = (0, r.g)(a.rate).times(d));
                var v = s || l(s),
                    m = new Intl.NumberFormat(v, {
                        minimumFractionDigits: 2,
                        maximumFractionDigits: 2
                    }).format(d.toFixed(2, 0));
                return c && (m = "".concat(null !== (t = null == a ? void 0 : null === (e = a.display) || void 0 === e ? void 0 : e.prepend) && void 0 !== t ? t : "").concat(m, " ").concat(null !== (i = null == a ? void 0 : null === (n = a.display) || void 0 === n ? void 0 : n.append) && void 0 !== i ? i : "")), m
            }

            function c() {
                var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0,
                    n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
                    t = n.reverse,
                    i = n.rate,
                    a = void 0 === i ? {
                        rate: 1
                    } : i,
                    u = n.raw,
                    c = n.decimals,
                    s = void 0 === c ? 2 : c,
                    d = n.symbol,
                    v = n.locale,
                    m = n.round,
                    p = void 0 === m ? {
                        decimal: 2,
                        direction: !1
                    } : m,
                    f = n.symbolColor,
                    _ = (0, r.g)(e);
                void 0 !== u && u || (_ = void 0 !== t && t ? _.lte(0) ? 0 : (0, r.g)(a.rate).div(_) : (0, r.g)(a.rate).times(_)), p && p.direction && (_ = "up" === p.direction ? _.round(p.decimal, o.Z.roundUp) : "down" === p.direction ? _.round(p.decimal, o.Z.roundDown) : _.round(p.decimal, null === o.Z || void 0 === o.Z ? void 0 : o.Z[p.direction]));
                var x = (void 0 === v ? void 0 : v) || l(),
                    y = x.startsWith("fr") ? "en-US" : x,
                    C = new Intl.NumberFormat(y, {
                        minimumFractionDigits: s,
                        maximumFractionDigits: s
                    }).format(_.toFixed(s, 0));
                if (void 0 !== d && d) {
                    var h, g, b, j, Z = null !== (b = null == a ? void 0 : null === (h = a.display) || void 0 === h ? void 0 : h.prepend) && void 0 !== b ? b : "",
                        N = null !== (j = null == a ? void 0 : null === (g = a.display) || void 0 === g ? void 0 : g.append) && void 0 !== j ? j : "";
                    C = f ? "".concat(Z ? '<span style="color: '.concat(f, '">').concat(Z, "</span> ") : "").concat(C).concat(N ? ' <span style="color: '.concat(f, '">').concat(N, "</span>") : "") : "".concat(Z).concat(C).concat(N ? " ".concat(N) : "")
                }
                return C
            }

            function s(e) {
                var n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {
                    rate: 1
                };
                return (0, i._)(arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {}), Number((0, r.g)(n.rate).times((0, r.g)(e)).toFixed(2, 0))
            }

            function d(e) {
                var n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {
                    rate: 1
                };
                return Number((0, r.g)(e).times((0, r.g)(n.rate)).toFixed(2, 0))
            }

            function v(e) {
                var n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {
                        rate: 1
                    },
                    t = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 2;
                return Number((0, r.g)(e).times((0, r.g)(n.rate)).round(1, o.Z.roundUp).toFixed(t))
            }
            var m = function(e) {
                    var n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {
                        rate: 1
                    };
                    return Math.floor(Number(e) / Number(n.rate) * 1e4) / 1e4
                },
                p = function(e) {
                    var n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {
                        rate: 1
                    };
                    return Math.floor(Number(e) / Number(n.rate) * 1e4) / 1e4
                }
        },
        18454: function(e, n, t) {
            "use strict";

            function i(e) {
                if ("number" != typeof e || Number.isNaN(e)) throw Error("Value is not a number")
            }
            t.d(n, {
                Z: function() {
                    return i
                },
                h: function() {
                    return o
                }
            });
            var o = function(e) {
                return "number" == typeof e && !Number.isNaN(e)
            }
        },
        80816: function(e, n, t) {
            "use strict";
            t.d(n, {
                g: function() {
                    return o
                }
            });
            var i = t(13012),
                o = function(e) {
                    var n = e && !isNaN(Number(e)) ? e : 0;
                    return (0, i.Z)(n)
                }
        },
        4209: function(e) {
            e.exports = {
                "golden-text": "ValueDisplay_golden-text__sgEYs",
                "value-display": "ValueDisplay_value-display__Zl3L5",
                "value-number-display": "ValueDisplay_value-number-display__Z3TJd",
                "custom-value-display": "ValueDisplay_custom-value-display__2_hjf",
                "currency-icon": "ValueDisplay_currency-icon__zh_dK",
                xlarge: "ValueDisplay_xlarge__OO6SL",
                large: "ValueDisplay_large__cvUlo",
                mid: "ValueDisplay_mid__sv_Ck",
                small: "ValueDisplay_small__oYAlV",
                balance: "ValueDisplay_balance__0I_4W",
                "inline-popup-icon": "ValueDisplay_inline-popup-icon__a9E42",
                "text-icon": "ValueDisplay_text-icon__iyt_H",
                "span-class": "ValueDisplay_span-class__rx28A",
                "text-currency": "ValueDisplay_text-currency__eWvkF",
                "text-display": "ValueDisplay_text-display__l63tN",
                value: "ValueDisplay_value__8zmxa"
            }
        },
        394: function(e) {
            e.exports = {
                "golden-text": "ValueIcons_golden-text__MirFv",
                "value-icon": "ValueIcons_value-icon__AeyXs",
                large: "ValueIcons_large__zugCg",
                mid: "ValueIcons_mid__IZqLX",
                small: "ValueIcons_small__O9nT_",
                "inline-popup-icon": "ValueIcons_inline-popup-icon__0xjuK",
                "text-icon": "ValueIcons_text-icon__Qi9Ky"
            }
        }
    }
]);