(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [7307], {
        2378: function(e, n, t) {
            "use strict";
            t.r(n), t.d(n, {
                default: function() {
                    return L
                }
            });
            var r = t(11010),
                i = t(20567),
                l = t(14932),
                o = t(47702),
                u = t(24043),
                a = t(248),
                c = t(97582),
                s = t(85893),
                p = t(67294),
                d = t(39396),
                v = t(47016),
                m = t(12289),
                f = t(90512),
                _ = t(83973),
                h = t(46046),
                C = t(45366),
                x = t(8075),
                g = t(64272),
                y = t(8284),
                b = t.n(y),
                w = t(10990),
                j = {
                    NEGATIVE: 0,
                    POSITIVE: 1
                },
                T = {},
                N = function(e) {
                    var n = e.currency,
                        t = e.replacements,
                        r = e.raw,
                        o = void 0 !== r && r;
                    try {
                        var u = function(e) {
                                switch (e) {
                                    case "CURRENCY_AMOUNT":
                                    case "TOKEN_AMOUNT":
                                        var r = (null == t ? void 0 : t.CURRENCY_AMOUNT) || (null == t ? void 0 : t[e]);
                                        return (0, s.jsx)(x.Z, {
                                            amount: +r || 0,
                                            currencyCode: null == t ? void 0 : t.CURRENCY,
                                            size: "small",
                                            classType: "inline-popup",
                                            raw: o
                                        });
                                    case "CALENDAR_REWARD":
                                        return (0, s.jsxs)(s.Fragment, {
                                            children: [(0, s.jsx)("br", {}), (0, s.jsx)(x.Z, {
                                                amount: Number(t[e]),
                                                currencyCode: null == t ? void 0 : t.CURRENCY,
                                                size: "small",
                                                classType: "inline-popup",
                                                raw: o
                                            })]
                                        });
                                    case "INSTANT_REWARD":
                                        return (0, s.jsxs)(s.Fragment, {
                                            children: [(0, s.jsx)("div", {
                                                className: b()["horizontal-line-container"],
                                                children: (0, s.jsx)("div", {
                                                    className: b()["horizontal-line"]
                                                })
                                            }), (0, s.jsx)(x.Z, {
                                                amount: Number(t[e]),
                                                currencyCode: null == t ? void 0 : t.CURRENCY,
                                                size: "small",
                                                classType: "inline-popup",
                                                raw: o
                                            })]
                                        });
                                    case "CRYPTO_AMOUNT":
                                        return (0, s.jsxs)("span", {
                                            className: b()["value-display-container"],
                                            children: [(0, s.jsx)("span", {
                                                children: (0, s.jsx)(g.Z, {
                                                    code: t.CRYPTO_CODE,
                                                    size: "small"
                                                })
                                            }), Number(t[e])]
                                        });
                                    case "TOKEN_ICON":
                                        return (0, s.jsx)("span", {
                                            className: b()["value-display-container"],
                                            children: (0, s.jsx)("span", {
                                                className: b()["token-content"],
                                                children: (0, s.jsx)(C.Z, {
                                                    code: n,
                                                    size: "small"
                                                })
                                            })
                                        });
                                    default:
                                        return t[e]
                                }
                            },
                            a = t && "object" == typeof t ? Object.keys(t).reduce(function(e, n) {
                                return (0, l._)((0, i._)({}, e), {
                                    [n]: u(n)
                                })
                            }, {}) : {};
                        return (0, i._)({}, t, a)
                    } catch (e) {
                        return T
                    }
                },
                E = (0, s.jsx)("svg", {
                    viewBox: "0 0 512 512",
                    xmlns: "http://www.w3.org/2000/svg",
                    enableBackground: "new 0 0 512 512",
                    children: (0, s.jsx)("path", {
                        d: "M256 32C132.3 32 32 132.3 32 256s100.3 224 224 224 224-100.3 224-224S379.7 32 256 32zm114.9 149.1L231.8 359.6c-1.1 1.1-2.9 3.5-5.1 3.5-2.3 0-3.8-1.6-5.1-2.9-1.3-1.3-78.9-75.9-78.9-75.9l-1.5-1.5c-.6-.9-1.1-2-1.1-3.2 0-1.2.5-2.3 1.1-3.2.4-.4.7-.7 1.1-1.2 7.7-8.1 23.3-24.5 24.3-25.5 1.3-1.3 2.4-3 4.8-3 2.5 0 4.1 2.1 5.3 3.3 1.2 1.2 45 43.3 45 43.3l111.3-143c1-.8 2.2-1.4 3.5-1.4 1.3 0 2.5.5 3.5 1.3l30.6 24.1c.8 1 1.3 2.2 1.3 3.5.1 1.3-.4 2.4-1 3.3z",
                        fill: "#4BAE4F"
                    })
                }),
                k = (0, s.jsx)("svg", {
                    viewBox: "0 0 26 26",
                    xmlns: "http://www.w3.org/2000/svg",
                    children: (0, s.jsx)("path", {
                        fill: "#E24C4B",
                        d: "M13 0a13 13 0 1 0 0 26 13 13 0 0 0 0-26Zm-1 7a1 1 0 0 1 2 0v7a1 1 0 0 1-2 0Zm1 13a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3Z"
                    })
                }),
                Z = (0, s.jsx)("svg", {
                    width: "14",
                    height: "14",
                    viewBox: "0 0 14 14",
                    fill: "none",
                    xmlns: "http://www.w3.org/2000/svg",
                    children: (0, s.jsx)("path", {
                        d: "M8.40994 6.99994L12.7099 2.70994C12.8982 2.52164 13.004 2.26624 13.004 1.99994C13.004 1.73364 12.8982 1.47825 12.7099 1.28994C12.5216 1.10164 12.2662 0.99585 11.9999 0.99585C11.7336 0.99585 11.4782 1.10164 11.2899 1.28994L6.99994 5.58994L2.70994 1.28994C2.52164 1.10164 2.26624 0.99585 1.99994 0.99585C1.73364 0.99585 1.47824 1.10164 1.28994 1.28994C1.10164 1.47825 0.995847 1.73364 0.995847 1.99994C0.995847 2.26624 1.10164 2.52164 1.28994 2.70994L5.58994 6.99994L1.28994 11.2899C1.19621 11.3829 1.12182 11.4935 1.07105 11.6154C1.02028 11.7372 0.994141 11.8679 0.994141 11.9999C0.994141 12.132 1.02028 12.2627 1.07105 12.3845C1.12182 12.5064 1.19621 12.617 1.28994 12.7099C1.3829 12.8037 1.4935 12.8781 1.61536 12.9288C1.73722 12.9796 1.86793 13.0057 1.99994 13.0057C2.13195 13.0057 2.26266 12.9796 2.38452 12.9288C2.50638 12.8781 2.61698 12.8037 2.70994 12.7099L6.99994 8.40994L11.2899 12.7099C11.3829 12.8037 11.4935 12.8781 11.6154 12.9288C11.7372 12.9796 11.8679 13.0057 11.9999 13.0057C12.132 13.0057 12.2627 12.9796 12.3845 12.9288C12.5064 12.8781 12.617 12.8037 12.7099 12.7099C12.8037 12.617 12.8781 12.5064 12.9288 12.3845C12.9796 12.2627 13.0057 12.132 13.0057 11.9999C13.0057 11.8679 12.9796 11.7372 12.9288 11.6154C12.8781 11.4935 12.8037 11.3829 12.7099 11.2899L8.40994 6.99994Z",
                        fill: "rgba(255, 255, 255, 0.75)"
                    })
                }),
                R = 1e3 / 3,
                O = function() {
                    var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 3e3;
                    return 2 * R + e
                },
                M = function(e) {
                    var n = e.id,
                        t = e.onComplete,
                        r = e.element,
                        i = e.bar,
                        l = e.duration,
                        o = w.ZP.timeline({
                            id: "".concat(n, "-in")
                        }).set(r, {
                            position: "unset",
                            x: 500,
                            alpha: 1,
                            duration: R / 1e3
                        }).to(r, {
                            x: 0,
                            ease: "back.out",
                            duration: R / 1e3
                        }),
                        u = w.ZP.timeline({
                            id: "".concat(n, "-bar"),
                            paused: !0,
                            onComplete: function() {
                                a.play()
                            }
                        }).to(i, {
                            duration: (O(l) - R) / 1e3,
                            width: 0,
                            ease: "sine.out"
                        }),
                        a = w.ZP.timeline({
                            id: "".concat(n, "-out"),
                            paused: !0,
                            onComplete: t
                        }).set(r, {
                            pointerEvents: "none"
                        }).to(r, {
                            duration: R / 500,
                            x: 500,
                            ease: "back.inOut",
                            height: 0,
                            overflow: "hidden",
                            marginTop: 0,
                            marginBottom: 0,
                            paddingTop: 0,
                            paddingBottom: 0,
                            borderTopWidth: 0,
                            borderBottomWidth: 0,
                            display: "none"
                        });
                    return o.eventCallback("onComplete", function() {
                        u.play()
                    }), {
                        inTimeline: o,
                        barTimeline: u,
                        outTimeline: a
                    }
                },
                P = (0, p.forwardRef)(function(e, n) {
                    var t = e.duration,
                        r = e.onComplete,
                        i = e.id,
                        l = (0, p.useRef)(null),
                        o = (0, p.useRef)(null),
                        a = (0, u._)((0, p.useState)(null), 2),
                        c = a[0],
                        d = a[1],
                        v = (0, h.ZP)().activeRate,
                        m = (0, u._)((0, p.useState)(!1), 2),
                        C = m[0],
                        g = m[1],
                        y = (0, _.ZP)(),
                        w = (0, p.useCallback)(function() {
                            var e;
                            null == c || null === (e = c.barTimeline) || void 0 === e || e.progress(.07)
                        }, [c]);
                    (0, p.useImperativeHandle)(n, function() {
                        return {
                            element: o.current,
                            isComplete: C,
                            resetTimer: w,
                            id: i
                        }
                    }), (0, p.useEffect)(function() {
                        var e, n, t;
                        C && (null == r || r(i), null == c || null === (e = c.inTimeline) || void 0 === e || e.kill(), null == c || null === (n = c.barTimeline) || void 0 === n || n.kill(), null == c || null === (t = c.outTimeline) || void 0 === t || t.kill())
                    }, [i, C, r, c]), (0, p.useEffect)(function() {
                        if (o.current && l.current) {
                            var e = M({
                                id: i,
                                onComplete: function() {
                                    return g(!0)
                                },
                                element: o.current,
                                bar: l.current,
                                duration: t
                            });
                            return d(e), e.inTimeline.play(),
                                function() {
                                    e.inTimeline.kill(), e.barTimeline.kill(), e.outTimeline.kill()
                                }
                        }
                    }, [t, i]);
                    var R = (0, p.useMemo)(function() {
                            var n, t;
                            return e.result ? (n = e.result, t = 1) : e.error ? (n = e.error, t = 2) : (n = e.code, t = e.type), {
                                msg: n,
                                extraMsg: (null == e ? void 0 : e.msg) ? e.msg : "",
                                type: t,
                                replacements: N({
                                    currency: v.code,
                                    replacements: null == e ? void 0 : e.replacements,
                                    raw: (null == e ? void 0 : e.raw) || !1
                                }) || T
                            }
                        }, [v.code, e.code, e.error, e.msg, null == e ? void 0 : e.raw, null == e ? void 0 : e.replacements, e.result, e.type]),
                        O = R.type === j.POSITIVE || R.type === j.NEGATIVE,
                        P = (0, p.useCallback)(function() {
                            var e;
                            return null == c ? void 0 : null === (e = c.barTimeline) || void 0 === e ? void 0 : e.pause()
                        }, [c]),
                        L = (0, p.useCallback)(function() {
                            var e;
                            return null == c ? void 0 : null === (e = c.barTimeline) || void 0 === e ? void 0 : e.play()
                        }, [c]),
                        z = (0, p.useCallback)(function() {
                            var e;
                            null == c || null === (e = c.barTimeline) || void 0 === e || e.progress(1)
                        }, [c]);
                    return (0, s.jsxs)("button", {
                        ref: o,
                        className: (0, f.Z)(b()["popup-content"], b()["popup-type-".concat(R.type)], "popup-class", "cursor-pointer"),
                        "aria-label": "Close popup notification",
                        onMouseOver: P,
                        onFocus: P,
                        onMouseLeave: L,
                        onBlur: L,
                        onTouchStart: P,
                        onTouchEnd: L,
                        onClick: z,
                        children: [(0, s.jsxs)("div", {
                            className: "flex justify-between gap-2.5 mb-5 w-full items-start",
                            children: [O ? (0, s.jsx)("div", {
                                className: "min-w-4 w-4 [&>svg]:w-full [&>svg]:h-full translate-y-0.5",
                                children: R.type === j.POSITIVE ? E : k
                            }) : null, (0, s.jsxs)("span", {
                                className: "text-sm text-white text-left font-normal",
                                "data-span": !0,
                                children: [y(null == R ? void 0 : R.msg, null == R ? void 0 : R.replacements), null == R ? void 0 : R.extraMsg, (null == e ? void 0 : e.value) ? (0, s.jsx)("div", {
                                    className: b()["value-display-container"],
                                    children: (0, s.jsx)(x.Z, {
                                        amount: null == e ? void 0 : e.value,
                                        size: "small",
                                        classType: "inline-popup-icon"
                                    })
                                }) : null]
                            }), (0, s.jsx)("div", {
                                className: "ml-auto [&>svg]:w-2.5 [&>svg]:h-2.5",
                                children: Z
                            })]
                        }), (0, s.jsx)("div", {
                            className: b()["loading-bar"],
                            children: (0, s.jsx)("div", {
                                ref: l,
                                className: b().bar
                            })
                        })]
                    })
                });

            function L() {
                var e, n, t = (0, p.useRef)({}),
                    _ = (0, u._)((0, p.useState)([]), 2),
                    h = _[0],
                    C = _[1],
                    x = (0, p.useCallback)(function(e) {
                        delete t.current[e], Object.values(t.current).every(function(e) {
                            var n;
                            return null === (n = e.current) || void 0 === n ? void 0 : n.isComplete
                        }) && C([])
                    }, []),
                    g = (0, p.useCallback)((e = (0, r._)(function(e) {
                        var n, r, a, s, d;
                        return (0, c.Jh)(this, function(c) {
                            switch (c.label) {
                                case 0:
                                    var f, _;
                                    if (a = e.id) return [3, 2];
                                    return [4, (f = e.replacements, _ = (0, o._)(e, ["replacements"]), (0, v.Z)((0, i._)({
                                        replacements: f ? f ? Object.fromEntries((0, m.Z)(f).map(function(e) {
                                            var n = (0, u._)(e, 2),
                                                t = n[0],
                                                r = n[1];
                                            return [t, (0, p.isValidElement)(r) ? JSON.stringify(null == r ? void 0 : r.props) : r]
                                        })) : null : void 0
                                    }, _)))];
                                case 1:
                                    a = c.sent(), c.label = 2;
                                case 2:
                                    if (r = a, s = Number.isInteger(null == e ? void 0 : e.type), !r || !s || null !== (n = t.current) && void 0 !== n && n[r] && r in t.current) return [2, null];
                                    return d = (0, p.createRef)(), t.current[r] = d, [2, (0, p.createElement)(P, (0, l._)((0, i._)({}, e), {
                                        id: r,
                                        key: r,
                                        onComplete: x,
                                        ref: d
                                    }))]
                            }
                        })
                    }), function(n) {
                        return e.apply(this, arguments)
                    }), [x]),
                    y = (0, p.useCallback)((n = (0, r._)(function(e, n) {
                        var r, i, l, o, u;
                        return (0, c.Jh)(this, function(e) {
                            switch (e.label) {
                                case 0:
                                    return [4, g(n)];
                                case 1:
                                    if (!(r = e.sent())) return null === (u = t.current) || void 0 === u || null === (o = u[n.id]) || void 0 === o || null === (l = o.current) || void 0 === l || null === (i = l.resetTimer) || void 0 === i || i.call(l), [2, null];
                                    return C(function(e) {
                                        return (0, a._)(e).concat([r])
                                    }), [2]
                            }
                        })
                    }), function(e, t) {
                        return n.apply(this, arguments)
                    }), [g]);
                return (0, d.Q3)(d.ZP.EVENTS.POPUP, y), (0, s.jsx)("div", {
                    className: (0, f.Z)("fixed top-[68px] right-[calc(300px+2%)] h-[100vh] w-0", "z-5004 flex flex-col gap-2", "mt-4"),
                    children: h
                })
            }
            P.displayName = "PopupItem"
        },
        26001: function(e, n, t) {
            "use strict";
            t.d(n, {
                Z: function() {
                    return p
                }
            });
            var r = t(20567),
                i = t(47702),
                l = t(24043),
                o = t(85893),
                u = t(20259),
                a = t(25675),
                c = t.n(a),
                s = t(67294);

            function p(e) {
                var n = e.code,
                    t = e.width,
                    a = void 0 === t ? 48 : t,
                    p = e.height,
                    d = void 0 === p ? 48 : p,
                    v = (0, i._)(e, ["code", "width", "height"]),
                    m = (0, u.Z)().list,
                    f = (0, l._)((0, s.useState)(!1), 2),
                    _ = f[0],
                    h = f[1],
                    C = (0, s.useMemo)(function() {
                        var e = null == n ? void 0 : n.toLowerCase(),
                            t = m[e];
                        return (null == t ? void 0 : t.icon) || "https://cdn.rainbet.com/currencies/".concat(e, ".svg")
                    }, [n, m]);
                return _ ? (0, o.jsx)("div", (0, r._)({
                    style: {
                        width: +a,
                        height: +d
                    },
                    className: "rounded-full"
                }, v)) : (0, o.jsx)(c(), (0, r._)({
                    src: C,
                    alt: "icon for crypto ".concat(n),
                    width: +a,
                    height: +d,
                    onError: function() {
                        return h(!0)
                    }
                }, v))
            }
        },
        20259: function(e, n, t) {
            "use strict";
            t.d(n, {
                Z: function() {
                    return p
                }
            });
            var r = t(20567),
                i = t(14932),
                l = t(67294),
                o = t(5068),
                u = t(75645),
                a = t(63694),
                c = {
                    pix: {
                        api: "url",
                        id: "brl",
                        name: "Real",
                        fiat: !0
                    },
                    picpay: {
                        api: "url",
                        id: "brl",
                        name: "Real",
                        fiat: !0
                    },
                    interac: {
                        api: "url",
                        id: "cad",
                        name: "CAD",
                        fiat: !0
                    }
                },
                s = function(e) {
                    return u.x.get(e).then(function(e) {
                        return e.data
                    })
                };

            function p() {
                var e, n, t, u = (0, o.ZP)("v1/crypto", s, {
                        revalidateOnFocus: !0
                    }),
                    p = u.data,
                    d = u.isLoading,
                    v = (0, a.EC)().data,
                    m = null == v ? void 0 : null === (e = v.user) || void 0 === e ? void 0 : e.currencies,
                    f = null == m ? void 0 : null === (n = m.BRL) || void 0 === n ? void 0 : n.rate,
                    _ = null == m ? void 0 : null === (t = m.CAD) || void 0 === t ? void 0 : t.rate;
                return {
                    list: (0, l.useMemo)(function() {
                        if (!p) return {};
                        var e, n = null == p ? void 0 : null === (e = p.reduce) || void 0 === e ? void 0 : e.call(p, function(e, n) {
                            var t = n.code;
                            return (0, i._)((0, r._)({}, e), {
                                [t]: (0, i._)((0, r._)({}, n), {
                                    api: "url",
                                    id: t
                                })
                            })
                        }, c);
                        return n.pix.rate = f, n.picpay.rate = f, n.interac.rate = _, n
                    }, [p, _, f]),
                    isLoading: d
                }
            }
        },
        83973: function(e, n, t) {
            "use strict";
            t.d(n, {
                M9: function() {
                    return p
                },
                Xo: function() {
                    return d
                },
                gG: function() {
                    return v
                }
            });
            var r = t(20567),
                i = t(47702),
                l = t(85893),
                o = t(63381),
                u = t(67294),
                a = t(86896),
                c = t(50028),
                s = {},
                p = (0, u.memo)(function(e) {
                    var n = e.as,
                        t = void 0 === n ? "p" : n,
                        l = e.name,
                        o = e.replacements,
                        a = void 0 === o ? s : o,
                        c = (0, i._)(e, ["as", "name", "replacements"]),
                        p = m(),
                        d = (0, u.useMemo)(function() {
                            var e = p(l, a);
                            return (0, r._)({}, "string" == typeof e ? {
                                dangerouslySetInnerHTML: {
                                    __html: e
                                }
                            } : {
                                children: e
                            }, c)
                        }, [p, l, a, c]);
                    return (0, u.useMemo)(function() {
                        return (0, u.createElement)(t, d)
                    }, [t, d])
                }),
                d = function() {
                    return (0, u.useCallback)(function(e) {
                        return (0, l.jsx)(p, (0, r._)({}, e))
                    }, [])
                },
                v = function() {
                    for (var e = arguments.length, n = Array(e), t = 0; t < e; t++) n[t] = arguments[t];
                    var r = m();
                    return (0, u.useMemo)(function() {
                        return n.reduce(function(e, n) {
                            return e[n] = r(n), e
                        }, {})
                    }, [r, n])
                };

            function m() {
                var e = (0, a.Z)(),
                    n = e.formatMessage,
                    t = e.messages;
                return (0, u.useCallback)(function(e, i, l) {
                    try {
                        var u = (0, r._)({}, c.us, i),
                            a = e.replace(/\./g, "_");
                        if (a in t) return n({
                            id: a
                        }, u, l);
                        return (0, o.ZK)('Could not find id "'.concat(a, '" \n')), a
                    } catch (n) {
                        return (0, o.ZK)(n), e
                    }
                }, [n, t])
            }
            n.ZP = m
        },
        8284: function(e) {
            e.exports = {
                "golden-text": "popup_golden-text__jCowL",
                "horizontal-line": "popup_horizontal-line__elExI",
                "popup-container": "popup_popup-container__oHPEP",
                "popup-content": "popup_popup-content__qhH_o",
                "close-icon": "popup_close-icon__ri45p",
                "flex-container": "popup_flex-container__Pl6At",
                "icon-container": "popup_icon-container__hl_g_",
                "icon-rotation": "popup_icon-rotation__qPjyK",
                "icon-text-content": "popup_icon-text-content__yE8mw",
                "value-display": "popup_value-display__ujzij",
                "token-content": "popup_token-content__Wyz95",
                "loading-bar": "popup_loading-bar__MU4OZ",
                bar: "popup_bar__XJjSk",
                "popup-type-0": "popup_popup-type-0__oW1qG",
                "popup-type-1": "popup_popup-type-1__6thpf",
                "popup-type-2": "popup_popup-type-2__epIQV",
                "value-display-container": "popup_value-display-container__2_i0V",
                "value-icon": "popup_value-icon__lxe9_",
                "rain-icon": "popup_rain-icon__oZzvs"
            }
        }
    }
]);