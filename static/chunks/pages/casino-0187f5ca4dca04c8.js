(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [6363, 5715, 6868, 3809, 9947, 8991], {
        78508: function(e, t, n) {
            (window.__NEXT_P = window.__NEXT_P || []).push(["/casino", function() {
                return n(49124)
            }])
        },
        55715: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return E
                }
            });
            var i = n(20567),
                a = n(14932),
                r = n(85893),
                o = n(40831),
                l = n.n(o),
                s = n(25758),
                c = n(5682),
                u = n(25675),
                d = n.n(u),
                m = n(98695),
                p = n(8075),
                f = n(41664),
                v = n.n(f),
                h = n(83973),
                x = n(56900),
                g = n(81377),
                b = n(46046),
                _ = n(40108),
                w = n(50028),
                y = (0, r.jsxs)("span", {
                    className: "relative flex h-2 w-2",
                    children: [(0, r.jsx)("span", {
                        className: "absolute inline-flex h-full w-full rounded-full bg-green opacity-75 animate-wins-feed-ping"
                    }), (0, r.jsx)("span", {
                        className: "relative inline-flex rounded-full h-2 w-2 bg-light-green"
                    })]
                }),
                j = function() {
                    return Array.from({
                        length: 12
                    }, function(e, t) {
                        return (0, r.jsx)(g.$, {}, t)
                    })
                };

            function k(e) {
                var t, n = e.id,
                    o = e.user,
                    s = void 0 === o ? {} : o,
                    u = e.payout,
                    f = e.animate,
                    h = e.icon,
                    g = e.game,
                    b = e.walletSetting,
                    y = e.currency,
                    j = e.currencyPayout,
                    k = s.username,
                    N = s.rankLevel,
                    E = (0, w.ZP)();
                return (0, r.jsxs)(v(), (0, a._)((0, i._)({}, (0, x.dh)(l(), "result", void 0 !== f && f && "animate")), {
                    shallow: !0,
                    href: {
                        query: {
                            modal: "bet",
                            tab: "result",
                            betId: n
                        }
                    },
                    children: [(0, r.jsx)("div", {
                        className: l()["game-image"],
                        children: h ? (0, r.jsx)(d(), {
                            src: h,
                            alt: "game",
                            fill: !0,
                            sizes: "100px"
                        }) : (0, r.jsx)("div", {
                            className: l().placeholder,
                            children: (0, r.jsx)("div", {
                                className: l().text,
                                children: g.name
                            })
                        })
                    }), (0, r.jsxs)("div", {
                        className: l()["game-result"],
                        children: [(0, r.jsxs)("div", {
                            className: l().player,
                            children: [(null == N ? void 0 : N.name) && k ? (0, r.jsx)("div", {
                                className: "translate-y-[-2px]",
                                children: (0, r.jsx)(m.Z, {
                                    code: null == N ? void 0 : null === (t = N.name) || void 0 === t ? void 0 : t.toUpperCase(),
                                    size: "large"
                                })
                            }) : null, (0, r.jsxs)("div", {
                                className: (0, _.cn)("max-w-[85px] flex gap-1.5 justify-center"),
                                children: [(0, r.jsx)("p", {
                                    className: (0, _.cn)("text-xs text-input-label-color-light truncate", !k && "text-font-color-two"),
                                    children: k || E("hidden")
                                }), !k && (0, r.jsx)(c.Z, {})]
                            })]
                        }), (0, r.jsx)("div", {
                            className: l().payout,
                            children: (0, r.jsx)(p.Z, {
                                raw: b === y,
                                amount: b === y ? j : void 0 === u ? 0 : u,
                                size: "small"
                            })
                        })]
                    })]
                }))
            }
            var N = function(e) {
                var t = e.data;
                return +(null == t ? void 0 : t.multiplier) > 1
            };

            function E(e) {
                var t = e.initialData,
                    n = (0, s.X8)({
                        initialState: void 0 === t ? null : t,
                        limit: 12,
                        room: "LIVE_FEED",
                        handleMerge: N
                    }).data,
                    i = (0, h.ZP)(),
                    a = (0, b.ZP)().walletSetting;
                return (null == n ? void 0 : n.length) === 0 ? null : (0, r.jsxs)("div", {
                    className: l().container,
                    children: [(0, r.jsxs)("div", {
                        className: "pl-[5px] pr-2.5 py-[5px] left-0 top-0 z-10 absolute rounded-md bg-[#333A5B] outline outline-[5px] outline-[#0f1328] inline-flex justify-center items-center gap-[5px]",
                        children: [y, (0, r.jsx)("div", {
                            className: "justify-start text-white text-xs font-medium",
                            children: i("live_feed")
                        })]
                    }), (0, r.jsxs)("div", {
                        className: "w-full flex gap-2.5 relative justify-start",
                        children: [null === n && (0, r.jsx)(j, {}), null == n ? void 0 : n.map(function(e, t) {
                            var n, i, o;
                            return (0, r.jsx)(k, {
                                id: e.id,
                                user: e.user,
                                payout: e.payout,
                                game: e.game,
                                walletSetting: a,
                                currency: e.currency,
                                currencyAmount: e.currencyAmount,
                                currencyPayout: null == e ? void 0 : e.currencyPayout,
                                multiplier: e.multiplier,
                                icon: (null === (n = e.game) || void 0 === n ? void 0 : n.customBanner) || (null === (i = e.game) || void 0 === i ? void 0 : i.custom_banner) || (null === (o = e.game) || void 0 === o ? void 0 : o.icon),
                                animate: 0 === t
                            }, e.id)
                        })]
                    })]
                })
            }
        },
        51979: function(e, t, n) {
            "use strict";
            n.d(t, {
                Q: function() {
                    return f
                }
            });
            var i = n(24043),
                a = n(85893),
                r = n(23223),
                o = n(42619),
                l = n(50028),
                s = n(40108),
                c = n(25675),
                u = n.n(c),
                d = n(41664),
                m = n.n(d),
                p = n(67294);

            function f(e) {
                var t = e.isNewDesignPage,
                    n = void 0 !== t && t,
                    c = (0, o.G)().preferences,
                    d = (0, p.useRef)(null),
                    f = (0, i._)((0, p.useState)(!1), 2),
                    v = f[0],
                    h = f[1],
                    x = (0, i._)((0, p.useState)(0), 2),
                    g = x[0],
                    b = x[1],
                    _ = (0, i._)((0, p.useState)(0), 2),
                    w = _[0],
                    y = _[1],
                    j = (0, l.ZP)(),
                    k = (0, l.El)({
                        casino_banner_1_description: {},
                        casino_banner_2_description: {},
                        casino_banner_3_description: {},
                        new_rewards_system: {},
                        baccarat_tournament_banner_description: {},
                        sportsbook_race_banner_description: {},
                        new_plinko_update: {},
                        blackjack_bonanza_description: {},
                        slots_tournament_description: {}
                    });
                return (0, p.useEffect)(function() {
                    var e = d.current;
                    if (e) {
                        var t = function(t) {
                                h(!0), b(t.pageX - e.offsetLeft), y(e.scrollLeft)
                            },
                            n = function(t) {
                                if (v) {
                                    var n = (t.pageX - e.offsetLeft - g) * 2;
                                    e.scrollLeft = w - n
                                }
                            },
                            i = function() {
                                return h(!1)
                            };
                        return e.addEventListener("mousedown", t), e.addEventListener("mousemove", n), e.addEventListener("mouseup", i), e.addEventListener("mouseleave", i),
                            function() {
                                e.removeEventListener("mousedown", t), e.removeEventListener("mousemove", n), e.removeEventListener("mouseup", i), e.removeEventListener("mouseleave", i)
                            }
                    }
                }, [v, g, w]), (0, a.jsx)("section", {
                    className: (0, s.cn)(n ? "" : "bg-[#151A32]", "py-5"),
                    children: (0, a.jsx)("div", {
                        className: (0, s.cn)("max-w-[1200px] w-full mx-auto px-4 relative", n && "px-0"),
                        children: (0, a.jsx)("div", {
                            ref: d,
                            className: (0, s.cn)("flex gap-4 overflow-x-auto scroll-smooth snap-x snap-mandatory cursor-grab", v ? "select-none" : ""),
                            style: {
                                scrollbarWidth: "none"
                            },
                            children: [{
                                title: "now_live",
                                description: "new_rewards_system",
                                button: "see_rewards",
                                bg: "/Images/banner_rewards.png",
                                url: "/rewards"
                            }, {
                                title: "new_rain_mode",
                                description: "new_plinko_update",
                                button: "play_plinko",
                                bg: "/Images/banner_plinko.png",
                                url: "/casino/originals/plinko"
                            }, {
                                title: "slots_tournament",
                                description: "slots_tournament_description",
                                button: "view_more",
                                bg: "/Images/banner_nip.png",
                                url: ""
                            }].map(function(e, t) {
                                return (0, a.jsxs)("div", {
                                    className: (0, s.cn)("relative px-5 py-4 overflow-hidden rounded-md", "[@media(min-width:1300px)]:w-[calc((100%-32px)/3)]", "[@media(max-width:1300px)]:min-w-[calc(50%-8px)]", "[@media(max-width:767px)]:min-w-full", "border border-solid border-[#1C7AC9] min-h-[158px] flex-shrink-0 snap-center", c.chatOpen && !c.sidebarMinified && "[@media(min-width:1301px)_and_(max-width:1800px)]:min-w-[calc(50%-8px)]"),
                                    children: [(0, a.jsx)("div", {
                                        className: "absolute inset-0 z-0",
                                        children: (0, a.jsx)(u(), {
                                            src: e.bg,
                                            alt: "CasinoBanner background",
                                            fill: !0,
                                            quality: 100,
                                            priority: !0,
                                            className: "object-cover object-center",
                                            sizes: "(max-width: 768px) 100vw, 50vw"
                                        })
                                    }), "/Images/banner_nip.png" !== e.bg && (0, a.jsxs)("div", {
                                        className: (0, s.cn)("flex flex-col justify-between h-full gap-[18px] z-10", "/Images/banner_nip.png" === e.bg && "hidden"),
                                        children: [(0, a.jsxs)("div", {
                                            className: "flex flex-col gap-1 z-10",
                                            children: [(0, a.jsx)("div", {
                                                className: "text-[13px] font-medium bg-gradient-to-b from-[#38A4FF] to-[#85C7FF] bg-clip-text text-transparent pb-[2px] leading-tight",
                                                children: j(e.title)
                                            }), (0, a.jsx)("div", {
                                                className: "text-xl font-semibold text-white tracking-[0%] leading-[1.2]",
                                                children: k[e.description]
                                            })]
                                        }), (0, a.jsxs)("div", {
                                            className: "flex items-center gap-2",
                                            children: [(0, a.jsx)(m(), {
                                                href: e.url,
                                                children: (0, a.jsx)(r.z, {
                                                    variant: "blue",
                                                    className: "h-[36px] min-h-[36px] px-[18px] z-10",
                                                    children: j(e.button)
                                                })
                                            }), "slots_tournament" === e.title && (0, a.jsx)(u(), {
                                                src: "/Images/banner_pragmatic_icon.png",
                                                alt: "CasinoBanner background",
                                                width: 68,
                                                height: 36,
                                                className: "z-10",
                                                priority: !0,
                                                quality: 100
                                            })]
                                        })]
                                    })]
                                }, t)
                            })
                        })
                    })
                })
            }
        },
        41583: function(e, t, n) {
            "use strict";
            n.d(t, {
                h: function() {
                    return c
                }
            });
            var i = n(20567),
                a = n(63617),
                r = n(75645),
                o = n(5068),
                l = "/v1/user/recent-games",
                s = function(e) {
                    var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
                    return e ? r.x.get(l, {
                        headers: (0, i._)({
                            Authorization: "Bearer ".concat(e)
                        }, t)
                    }).then(function(e) {
                        return e.data || []
                    }).catch(function() {
                        return []
                    }) : Promise.resolve([])
                },
                c = function(e) {
                    var t = (0, a.Z)();
                    return (0, o.ZP)(t ? l : null, function() {
                        return s(t)
                    }, {
                        keepPreviousData: !0,
                        fallbackData: e,
                        revalidateOnMount: !(null == e ? void 0 : e.length),
                        revalidateOnFocus: !1
                    })
                }
        },
        83973: function(e, t, n) {
            "use strict";
            n.d(t, {
                M9: function() {
                    return d
                },
                Xo: function() {
                    return m
                },
                gG: function() {
                    return p
                }
            });
            var i = n(20567),
                a = n(47702),
                r = n(85893),
                o = n(63381),
                l = n(67294),
                s = n(86896),
                c = n(50028),
                u = {},
                d = (0, l.memo)(function(e) {
                    var t = e.as,
                        n = void 0 === t ? "p" : t,
                        r = e.name,
                        o = e.replacements,
                        s = void 0 === o ? u : o,
                        c = (0, a._)(e, ["as", "name", "replacements"]),
                        d = f(),
                        m = (0, l.useMemo)(function() {
                            var e = d(r, s);
                            return (0, i._)({}, "string" == typeof e ? {
                                dangerouslySetInnerHTML: {
                                    __html: e
                                }
                            } : {
                                children: e
                            }, c)
                        }, [d, r, s, c]);
                    return (0, l.useMemo)(function() {
                        return (0, l.createElement)(n, m)
                    }, [n, m])
                }),
                m = function() {
                    return (0, l.useCallback)(function(e) {
                        return (0, r.jsx)(d, (0, i._)({}, e))
                    }, [])
                },
                p = function() {
                    for (var e = arguments.length, t = Array(e), n = 0; n < e; n++) t[n] = arguments[n];
                    var i = f();
                    return (0, l.useMemo)(function() {
                        return t.reduce(function(e, t) {
                            return e[t] = i(t), e
                        }, {})
                    }, [i, t])
                };

            function f() {
                var e = (0, s.Z)(),
                    t = e.formatMessage,
                    n = e.messages;
                return (0, l.useCallback)(function(e, a, r) {
                    try {
                        var l = (0, i._)({}, c.us, a),
                            s = e.replace(/\./g, "_");
                        if (s in n) return t({
                            id: s
                        }, l, r);
                        return (0, o.ZK)('Could not find id "'.concat(s, '" \n')), s
                    } catch (t) {
                        return (0, o.ZK)(t), e
                    }
                }, [t, n])
            }
            t.ZP = f
        },
        46415: function(e, t, n) {
            "use strict";
            n.d(t, {
                G: function() {
                    return l
                }
            });
            var i = n(24043),
                a = n(56900),
                r = n(67294),
                o = n(39396),
                l = function() {
                    var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
                        t = e.breakPointOne,
                        n = e.breakPointTwo,
                        a = e.breakPointThree,
                        l = void 0 !== a && a,
                        s = e.breakPointFour,
                        c = void 0 === s ? 390 : s,
                        u = o.ZP.state[o.ZP.EVENTS.MOBILE] ? 0 : 1920,
                        d = (0, r.useCallback)(function() {
                            return window.innerWidth
                        }, [u]),
                        m = (0, i._)((0, r.useState)(d()), 2),
                        p = m[0],
                        f = m[1],
                        v = (0, r.useCallback)(function() {
                            f(d())
                        }, [d]);
                    return ((0, r.useEffect)(function() {
                        return window.addEventListener("resize", v),
                            function() {
                                window.removeEventListener("resize", v)
                            }
                    }, [v]), !1 !== l && p <= l) ? 3 : !1 !== c && p <= c ? 4 : p <= (void 0 === n ? 768 : n) ? 2 : p <= (void 0 === t ? 1100 : t) ? 1 : 0
                };
            t.Z = function() {
                var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
                    t = e.breakPointOne,
                    n = void 0 === t ? 1100 : t,
                    l = e.breakPointTwo,
                    s = void 0 === l ? 768 : l,
                    c = e.breakPointThree,
                    u = void 0 !== c && c,
                    d = e.breakPointFour,
                    m = void 0 !== d && d,
                    p = e.targetElement,
                    f = void 0 === p ? "mainBody" : p,
                    v = e.deviceCheck,
                    h = void 0 !== v && v,
                    x = e.pixelDensity,
                    g = void 0 !== x && x,
                    b = (0, i._)((0, r.useState)(!!o.ZP.state[o.ZP.EVENTS.MOBILE] && "mobile-three"), 2),
                    _ = b[0],
                    w = b[1],
                    y = (0, r.useCallback)(function() {
                        var e = document.getElementById(f);
                        if ("body" === f && (e = document.body), e) {
                            var t = e.clientWidth + 8;
                            if (g) {
                                var i = (0, a.x_)();
                                t = (e.clientWidth + 8) * i
                            }!1 !== m && t <= m ? w("mobile-four") : !1 !== u && t <= u ? w("mobile-three") : t <= s ? w("mobile-two") : t <= n ? w("mobile-one") : h && (0, a.r3)() ? w("mobile-three") : w(!1)
                        }
                    }, [f, g, m, u, s, n, h]);
                return (0, r.useEffect)(function() {
                    var e = document.getElementById("mainBody");
                    if (e) {
                        y(e.clientWidth);
                        var t = new ResizeObserver(function(e) {
                            var t = !0,
                                n = !1,
                                i = void 0;
                            try {
                                for (var a, r = e[Symbol.iterator](); !(t = (a = r.next()).done); t = !0) {
                                    var o = a.value;
                                    y(o.contentRect.width)
                                }
                            } catch (e) {
                                n = !0, i = e
                            } finally {
                                try {
                                    t || null == r.return || r.return()
                                } finally {
                                    if (n) throw i
                                }
                            }
                        });
                        return t.observe(e),
                            function() {
                                t.disconnect()
                            }
                    }
                }, [n, s, u, m, f, y]), _
            }
        },
        32819: function(e, t, n) {
            "use strict";
            n.d(t, {
                Z: function() {
                    return s
                }
            });
            var i = n(11010),
                a = n(24043),
                r = n(97582),
                o = n(5068),
                l = n(75645),
                s = function(e) {
                    var t, n = (0, o.ZP)(e.length >= 3 ? ["public/search", e] : null, (t = (0, i._)(function(e) {
                            var t, n, i, o;
                            return (0, r.Jh)(this, function(r) {
                                switch (r.label) {
                                    case 0:
                                        return n = (t = (0, a._)(e, 2))[0], i = t[1], [4, l.Z.post(n, {
                                            search: i
                                        })];
                                    case 1:
                                        return [2, (null === (o = r.sent().data) || void 0 === o ? void 0 : o.results) || {}]
                                }
                            })
                        }), function(e) {
                            return t.apply(this, arguments)
                        }), {
                            revalidateOnFocus: !1,
                            shouldRetryOnError: !1
                        }),
                        s = n.data,
                        c = n.error;
                    return {
                        results: s,
                        isLoading: n.isLoading,
                        error: c
                    }
                }
        },
        25758: function(e, t, n) {
            "use strict";
            n.d(t, {
                X8: function() {
                    return m
                },
                ZP: function() {
                    return d
                }
            });
            var i = n(24043),
                a = n(248),
                r = n(67294),
                o = n(67642),
                l = n(63694),
                s = n(63381),
                c = function(e) {
                    var t = e.namespace,
                        n = e.publicId;
                    return (0, o.ZP)(t, {
                        withCredentials: !0,
                        path: "/socket.io",
                        transports: ["websocket"],
                        secure: !0,
                        extraHeaders: {
                            "X-Request-With": "HttpFront",
                            "x-public-id": n
                        },
                        auth: {},
                        query: {}
                    })
                },
                u = {};

            function d() {
                var e, t = arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
                    n = (0, i._)((0, r.useState)(u[t] || null), 2),
                    a = n[0],
                    o = n[1],
                    d = (0, l.EC)(),
                    m = d.token,
                    p = d.publicId;
                return (0, r.useEffect)(function() {
                    if (t) {
                        var e = c({
                            namespace: t,
                            publicId: p
                        });
                        o(function() {
                            return e
                        }), u[t] = e
                    }
                }, [t, p]), (0, r.useEffect)(function() {
                    var e;
                    m && (null != a && null !== (e = a.auth) && void 0 !== e && e.token || o(function(e) {
                        return e && (e.disconnect(), e.io.opts.query.token = m, e.auth.token = m, e.connect()), e
                    }))
                }, [null == a ? void 0 : null === (e = a.auth) || void 0 === e ? void 0 : e.token, m]), (0, r.useEffect)(function() {
                    if (a) return a.on("connect", function() {
                            return (0, s.cM)("Socket ".concat(t, " connected"), u)
                        }), a.on("disconnect", function() {
                            return (0, s.cM)("Socket ".concat(t, " disconnected"), u)
                        }),
                        function() {
                            a.off("connect"), a.off("disconnect")
                        }
                }, [t, a]), a
            }
            var m = function(e) {
                var t, n = e.limit,
                    o = void 0 === n ? 12 : n,
                    l = e.initialState,
                    s = void 0 === l ? null : l,
                    c = e.handleMerge,
                    u = void 0 === c ? function() {
                        return !0
                    } : c,
                    m = d("".concat("https://socket.rainbet.com", "/game-history"), !0),
                    p = (0, i._)((0, r.useState)(s), 2),
                    f = p[0],
                    v = p[1],
                    h = (0, r.useCallback)(function(e) {
                        v(function(t) {
                            return (null == t ? void 0 : t.length) && u({
                                data: e
                            }) && t.every(function(t) {
                                return t.id !== e.id
                            }) ? [e].concat((0, a._)(t)).slice(0, o) : t
                        })
                    }, [u, o]);
                return (0, r.useEffect)(function() {
                    v(s)
                }, [s]), (0, r.useEffect)(function() {
                    return null == m || m.on("new-history", h),
                        function() {
                            null == m || m.off("new-history", h)
                        }
                }, [h, m]), {
                    data: (null == f ? void 0 : null === (t = f.slice) || void 0 === t ? void 0 : t.call(f, 0, o)) || null,
                    socket: m
                }
            }
        },
        6042: function(e, t, n) {
            "use strict";
            n.r(t);
            var i = n(85893),
                a = n(9008),
                r = n.n(a),
                o = n(11163),
                l = n(67294),
                s = "https://cdn.rainbet.com/brand/og-banner.webp";
            t.default = (0, l.memo)(function(e) {
                var t, n, a, l, c, u, d, m, p = e.meta,
                    f = e.gamesMeta,
                    v = e.gameName,
                    h = e.caseOpenMeta,
                    x = e.caseOpenName,
                    g = e.caseOpenIcon,
                    b = e.slotsMeta,
                    _ = e.gamesMetaIcon,
                    w = e.providerMeta,
                    y = e.providerName,
                    j = "Rainbet",
                    k = "",
                    N = "",
                    E = "",
                    L = (0, o.useRouter)(),
                    R = L.asPath,
                    C = L.locale,
                    P = R.split("?")[0],
                    F = "https://rainbet.com" + ("en" === C ? "" : "/".concat(C));
                switch (!0) {
                    case !!p:
                        j = (null == p ? void 0 : null === (t = p.meta) || void 0 === t ? void 0 : t.title) || (null == p ? void 0 : p.title) || "Rainbet", k = (null == p ? void 0 : p.description) || (null == p ? void 0 : null === (n = p.meta) || void 0 === n ? void 0 : n.description) || "", N = (null == p ? void 0 : p.image) || (null == p ? void 0 : null === (a = p.meta) || void 0 === a ? void 0 : a.image) || s, E = p.url ? "".concat(p.url) : "".concat(F).concat(P);
                        break;
                    case !!f:
                        j = f.title, k = f.description ? f.description : "", N = _, E = "".concat(F, "/casino/originals/").concat(v);
                        break;
                    case !!h:
                        j = x ? h.title : x + " Case - Rainbet", k = h.description ? h.description : "", N = g, E = "".concat(null == h ? void 0 : h.url);
                        break;
                    case !!w:
                        j = y + " Casino Games – Rainbet", k = "Experience games by " + y + " at Rainbet, offering the best slots, blackjack, roulette, and other table/live games.", E = "".concat(F);
                        break;
                    case !!b:
                        j = (null == b ? void 0 : null === (l = b.meta) || void 0 === l ? void 0 : l.title) ? null == b ? void 0 : null === (c = b.meta) || void 0 === c ? void 0 : c.title : "Slots – Rainbet", k = (null == b ? void 0 : null === (u = b.meta) || void 0 === u ? void 0 : u.description) ? null == b ? void 0 : null === (d = b.meta) || void 0 === d ? void 0 : d.description : "Rainbet Slots", N = null == b ? void 0 : b.icon, E = "".concat(null == b ? void 0 : null === (m = b.meta) || void 0 === m ? void 0 : m.url);
                        break;
                    default:
                        j = "Rainbet", k = "Play casino game modes such as Slots, Blackjack, Baccarat, Roulette, Game Shows, Live Casino games and original RainBet games.", N = s, E = "".concat(F)
                }
                return (0, i.jsxs)(r(), {
                    children: [(0, i.jsx)("title", {
                        children: j
                    }), k && (0, i.jsx)("meta", {
                        name: "description",
                        content: k
                    }), (0, i.jsx)("meta", {
                        property: "og:title",
                        content: j
                    }), k && (0, i.jsx)("meta", {
                        property: "og:description",
                        content: k
                    }), E && (0, i.jsx)("link", {
                        rel: "canonical",
                        href: E
                    }), (0, i.jsx)("meta", {
                        property: "og:site_name",
                        content: "Rainbet"
                    }), (0, i.jsx)("meta", {
                        property: "og:type",
                        content: "website"
                    }), (0, i.jsx)("meta", {
                        name: "apple-mobile-web-app-status-bar-style",
                        content: "black-translucent"
                    }), (0, i.jsx)("meta", {
                        name: "viewport",
                        content: "width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=0, viewport-fit=cover"
                    }), N === s && (0, i.jsxs)(i.Fragment, {
                        children: [(0, i.jsx)("meta", {
                            property: "og:image:type",
                            content: "image/webp"
                        }), (0, i.jsx)("meta", {
                            property: "og:image:width",
                            content: "1200"
                        }), (0, i.jsx)("meta", {
                            property: "og:image:height",
                            content: "630"
                        })]
                    }), (0, i.jsx)("meta", {
                        property: "og:image",
                        content: N
                    })]
                })
            })
        },
        73168: function(e, t, n) {
            "use strict";
            n.d(t, {
                R: function() {
                    return a
                }
            });
            var i = n(25513),
                a = [{
                    id: 4,
                    name: "plinko_title",
                    url: "plinko",
                    icon: i.gameImageMap.plinko,
                    producer: "Rainbet",
                    payout: "",
                    custom_banner: null,
                    type: "",
                    region_blocked: !1,
                    new: !1
                }, {
                    id: 3,
                    name: "dice_title",
                    url: "dice",
                    icon: i.gameImageMap.dice,
                    producer: "Rainbet",
                    payout: "",
                    custom_banner: null,
                    type: "",
                    region_blocked: !1,
                    new: !1
                }, {
                    id: 12,
                    name: "limbo_title",
                    url: "limbo",
                    icon: i.gameImageMap.limbo,
                    producer: "Rainbet",
                    payout: "",
                    custom_banner: null,
                    type: "",
                    region_blocked: !1,
                    new: !0
                }, {
                    id: 11,
                    name: "blackjack_title",
                    url: "blackjack",
                    icon: i.gameImageMap.blackjack,
                    producer: "Rainbet",
                    payout: "",
                    custom_banner: null,
                    type: "",
                    region_blocked: !1,
                    new: !1
                }, {
                    id: 9,
                    name: "mines_title",
                    url: "mines-game",
                    icon: i.gameImageMap.mines,
                    producer: "Rainbet",
                    payout: "",
                    custom_banner: null,
                    type: "",
                    region_blocked: !1,
                    new: !1
                }, {
                    id: 10,
                    name: "keno_title",
                    url: "keno",
                    icon: i.gameImageMap.keno,
                    producer: "Rainbet",
                    payout: "",
                    custom_banner: null,
                    type: "",
                    region_blocked: !1,
                    new: !1
                }, {
                    id: 8,
                    name: "case_battles_title",
                    url: "case-battles",
                    icon: i.gameImageMap["case-battles"],
                    producer: "Rainbet",
                    payout: "",
                    custom_banner: null,
                    type: "",
                    region_blocked: !1,
                    new: !1
                }, {
                    id: 1,
                    name: "case_opening_title",
                    url: "case-opening",
                    icon: i.gameImageMap["case-opening"],
                    producer: "Rainbet",
                    payout: "",
                    custom_banner: null,
                    type: "",
                    region_blocked: !1,
                    new: !1
                }]
        },
        49124: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                __N_SSP: function() {
                    return F
                },
                default: function() {
                    return M
                }
            });
            var i = n(24043),
                a = n(85893),
                r = n(69291),
                o = n(29566),
                l = n(93678),
                s = n(11849),
                c = n(51979),
                u = n(55715),
                d = n(23223),
                m = n(57634),
                p = n(41583),
                f = n(39377),
                v = n(50028),
                h = n(46415),
                x = n(32819),
                g = n(6042),
                b = n(73168),
                _ = n(40108),
                w = n(13114),
                y = n(89681),
                j = n(5152),
                k = n.n(j),
                N = n(41664),
                E = n.n(N),
                L = n(39332),
                R = n(67294),
                C = k()(function() {
                    return Promise.all([n.e(6969), n.e(4894), n.e(4884), n.e(1242)]).then(n.bind(n, 71242))
                }, {
                    loadableGenerated: {
                        webpack: function() {
                            return [71242]
                        }
                    }
                }),
                P = [{
                    id: "casino_all_games",
                    icon: (0, a.jsx)(o.Cl, {}),
                    url: "/casino"
                }, {
                    id: "slots",
                    icon: (0, a.jsx)(s.default, {}),
                    url: "/casino/slots"
                }, {
                    id: "originals",
                    icon: (0, a.jsx)(r.NewLogoIcon, {
                        height: "20",
                        width: "20"
                    }),
                    url: "/casino/originals"
                }, {
                    id: "live-casino",
                    icon: (0, a.jsx)(l.default, {}),
                    url: "/casino/live"
                }],
                F = !0;

            function M(e) {
                var t, n = e.content,
                    r = e.recentGames,
                    l = e.recommended,
                    s = e.releases,
                    j = e.liveCasino,
                    k = e.gameHistory,
                    N = (0, L.usePathname)(),
                    F = (0, L.useRouter)(),
                    M = (0, p.h)(void 0 === r ? null : r).data,
                    S = (0, i._)((0, R.useState)(!1), 2),
                    I = S[0],
                    Z = S[1],
                    B = (0, i._)((0, R.useState)(""), 2),
                    z = B[0],
                    O = B[1],
                    W = (0, R.useDeferredValue)(z),
                    D = (0, i._)((0, R.useState)(P[0].id), 2),
                    T = D[0],
                    A = D[1],
                    X = (0, h.Z)({
                        breakPointThree: 640
                    }),
                    G = (0, i._)((0, R.useState)(!1), 2),
                    $ = G[0],
                    q = G[1],
                    V = (0, i._)((0, R.useState)(0), 2),
                    H = V[0],
                    U = V[1],
                    J = (0, i._)((0, R.useState)(0), 2),
                    K = J[0],
                    Q = J[1],
                    Y = (0, R.useRef)(null),
                    ee = (0, v.ZP)(),
                    et = (0, x.Z)(W),
                    en = et.results,
                    ei = et.isLoading;
                (0, R.useEffect)(function() {
                    var e = Y.current;
                    if (e) {
                        var t = function(t) {
                                t.target.closest(".input-container") || (q(!0), U(t.pageX - e.offsetLeft), Q(e.scrollLeft))
                            },
                            n = function(t) {
                                if ($) {
                                    var n = (t.pageX - e.offsetLeft - H) * 2;
                                    e.scrollLeft = K - n
                                }
                            },
                            i = function() {
                                return q(!1)
                            };
                        return e.addEventListener("mousedown", t), e.addEventListener("mousemove", n), e.addEventListener("mouseup", i), e.addEventListener("mouseleave", i),
                            function() {
                                e.removeEventListener("mousedown", t), e.removeEventListener("mousemove", n), e.removeEventListener("mouseup", i), e.removeEventListener("mouseleave", i)
                            }
                    }
                }, [$, H, K]);
                var ea = (0, R.useMemo)(function() {
                        return !en || (null == W ? void 0 : W.length) < 3 || !en || Object.keys(en).every(function(e) {
                            var t;
                            return !(null === (t = en[e]) || void 0 === t ? void 0 : t.length)
                        }) ? [] : "casino_all_games" === T ? Object.values(en).flat() : en[T] || []
                    }, [null == W ? void 0 : W.length, en, T]),
                    er = function(e) {
                        return e.scrollWidth > e.clientWidth
                    };
                (0, R.useEffect)(function() {
                    "mobile-three" === X && A(P[0].id)
                }, [X]), (0, R.useEffect)(function() {
                    var e = Y.current;
                    if (e) {
                        Z(er(e));
                        var t = new ResizeObserver(function() {
                            Z(er(e))
                        });
                        return t.observe(e),
                            function() {
                                return t.disconnect()
                            }
                    }
                }, []);
                var eo = function(e, t) {
                    "mobile-three" === X ? F.push(t) : A(e)
                };
                return (0, a.jsxs)(a.Fragment, {
                    children: [(0, a.jsx)(g.default, {
                        meta: null == n ? void 0 : n.meta
                    }), (0, a.jsx)(c.Q, {}), (0, a.jsx)("section", {
                        className: "border-solid border border-r-0 border-l-0 border-white/5 py-5",
                        children: (0, a.jsx)("div", {
                            className: "max-w-[1200px] w-full mx-auto px-4 min-h-[185.66px flex items-center]",
                            children: (0, a.jsx)(u.default, {
                                initialData: k
                            })
                        })
                    }), (0, a.jsx)("section", {
                        className: "py-6 border border-r-0 border-l-0 border-t-0 border-solid border-white/5",
                        children: (0, a.jsxs)("div", {
                            className: "max-w-[1200px] w-full mx-auto px-4 relative",
                            children: [(0, a.jsxs)("div", {
                                ref: Y,
                                onScroll: function(e) {
                                    var t = e.currentTarget;
                                    if (!er(t)) {
                                        Z(!1);
                                        return
                                    }
                                    Z(!(t.scrollLeft + t.clientWidth >= t.scrollWidth - 10))
                                },
                                className: "flex items-center gap-[10px] overflow-x-auto scroll-smooth snap-x snap-mandatory cursor-grab ".concat($ ? "select-none" : ""),
                                style: {
                                    scrollbarWidth: "none"
                                },
                                children: [(0, a.jsx)(E(), {
                                    href: {
                                        pathname: N,
                                        query: {
                                            modal: "search"
                                        }
                                    },
                                    className: "block [@media(min-width:640px)]:hidden",
                                    children: (0, a.jsx)(d.z, {
                                        variant: "normal",
                                        className: "h-[46px] min-h-[46px] w-[46px] px-4 border-[#5E679E]/5 select-none",
                                        children: (0, a.jsxs)("svg", {
                                            width: "16",
                                            height: "16",
                                            viewBox: "0 0 16 16",
                                            fill: "none",
                                            xmlns: "http://www.w3.org/2000/svg",
                                            children: [(0, a.jsx)("path", {
                                                d: "M14.668 14.3296L9.66797 9.32959",
                                                stroke: "white",
                                                strokeWidth: "2",
                                                strokeLinecap: "round"
                                            }), (0, a.jsx)("path", {
                                                d: "M10.5007 5.57955C10.5007 6.79512 10.0178 7.96091 9.15822 8.82046C8.29868 9.68 7.13289 10.1629 5.91732 10.1629C4.70174 10.1629 3.53595 9.68 2.67641 8.82046C1.81687 7.96091 1.33398 6.79512 1.33398 5.57955C1.33398 4.36397 1.81687 3.19818 2.67641 2.33864C3.53595 1.4791 4.70174 0.996216 5.91732 0.996216C7.13289 0.996216 8.29868 1.4791 9.15822 2.33864C10.0178 3.19818 10.5007 4.36397 10.5007 5.57955Z",
                                                stroke: "white",
                                                strokeWidth: "2"
                                            })]
                                        })
                                    })
                                }), (0, a.jsx)("div", {
                                    className: "w-full min-w-[145px] z-10 [@media(max-width:640px)]:hidden input-container",
                                    children: (0, a.jsx)(m.W, {
                                        placeholder: ee("search"),
                                        onChange: function(e) {
                                            return O(e.target.value)
                                        },
                                        inputClassName: "rounded-none",
                                        className: "h-[46px] min-h-[46px] border-white/5 [background:radial-gradient(76.33%_100%_at_50%_100%,rgb(38,44,82,0.8)_0%,rgba(38,44,82,0)_100%),rgba(255,255,255,0.05)]",
                                        icon: (0, a.jsxs)("svg", {
                                            width: "16",
                                            height: "16",
                                            viewBox: "0 0 16 16",
                                            fill: "none",
                                            xmlns: "http://www.w3.org/2000/svg",
                                            className: "mr-3",
                                            children: [(0, a.jsx)("path", {
                                                d: "M14.668 14.3296L9.66797 9.32959",
                                                stroke: "#5B628C",
                                                strokeWidth: "2",
                                                strokeLinecap: "round"
                                            }), (0, a.jsx)("path", {
                                                d: "M10.5007 5.57955C10.5007 6.79512 10.0178 7.96091 9.15822 8.82046C8.29868 9.68 7.13289 10.1629 5.91732 10.1629C4.70174 10.1629 3.53595 9.68 2.67641 8.82046C1.81687 7.96091 1.33398 6.79512 1.33398 5.57955C1.33398 4.36397 1.81687 3.19818 2.67641 2.33864C3.53595 1.4791 4.70174 0.996216 5.91732 0.996216C7.13289 0.996216 8.29868 1.4791 9.15822 2.33864C10.0178 3.19818 10.5007 4.36397 10.5007 5.57955Z",
                                                stroke: "#5B628C",
                                                strokeWidth: "2"
                                            })]
                                        })
                                    })
                                }), (0, a.jsx)("div", {
                                    className: "flex items-center gap-[10px]",
                                    children: P.map(function(e) {
                                        var t = e.icon,
                                            n = e.id,
                                            i = e.url;
                                        return (0, a.jsxs)(d.z, {
                                            variant: n === T ? "blue" : "normal",
                                            onClick: function() {
                                                return eo(n, i)
                                            },
                                            className: (0, _.cn)("h-[46px] min-h-[46px] px-4 border-[#5E679E]/5 min-w-[125px] select-none", "casino_all_games" !== n && "[&_path]:fill-[#38A4FF]", n === T && "[&_path]:fill-white"),
                                            children: [t, n && (0, a.jsx)("span", {
                                                children: ee(n)
                                            })]
                                        }, n)
                                    })
                                })]
                            }), I && (0, a.jsx)("div", {
                                className: "absolute inset-y-0 right-0 w-8 bg-gradient-to-l from-[#1F2542] via-[#1F2542]/90 to-transparent pointer-events-none transition-opacity duration-300"
                            })]
                        })
                    }), (0, a.jsx)("section", {
                        className: "pt-8",
                        children: (0, a.jsx)(w.M, {
                            mode: "wait",
                            children: (null == W ? void 0 : W.length) >= 3 && (null == ea ? void 0 : ea.length) === 0 && !ei ? (0, a.jsx)(y.E.div, {
                                className: "max-w-[1200px] w-full mx-auto px-4",
                                initial: {
                                    opacity: 0,
                                    y: -20
                                },
                                animate: {
                                    opacity: 1,
                                    y: 0
                                },
                                exit: {
                                    opacity: 0,
                                    y: -20
                                },
                                transition: {
                                    duration: .1
                                },
                                children: (0, a.jsx)("div", {
                                    className: "text-center bg-[#1F2542] rounded-md border border-solid border-[#7C83B1]/10",
                                    children: (0, a.jsxs)("div", {
                                        className: "flex items-center justify-center flex-col gap-6 min-h-[233.01px]",
                                        children: [(0, a.jsx)(o.nU, {}), (0, a.jsx)("p", {
                                            className: "text-sm font-medium",
                                            children: ee("no_results_found")
                                        })]
                                    })
                                })
                            }, "".concat(T, "-no-results")) : en ? (0, a.jsxs)(y.E.div, {
                                className: "max-w-[1200px] w-full mx-auto px-4 flex flex-col gap-3.5",
                                initial: {
                                    opacity: 0,
                                    y: -20
                                },
                                animate: {
                                    opacity: 1,
                                    y: 0
                                },
                                exit: {
                                    opacity: 0,
                                    y: -20
                                },
                                transition: {
                                    duration: .1
                                },
                                children: [(0, a.jsx)("div", {
                                    className: "flex items-center gap-5",
                                    children: (0, a.jsxs)("div", {
                                        className: "flex items-center gap-[10px] [&_path]:fill-[#38A4FF]",
                                        children: [null === (t = P.find(function(e) {
                                            return e.id === T
                                        })) || void 0 === t ? void 0 : t.icon, (0, a.jsx)("p", {
                                            className: "text-white text-lg font-medium",
                                            children: ee(T)
                                        })]
                                    })
                                }), (0, a.jsx)(f.default, {
                                    isStatic: !0,
                                    carousel: !1,
                                    heading: "",
                                    initialData: {
                                        count: null == ea ? void 0 : ea.length,
                                        games: ea
                                    },
                                    number: null == ea ? void 0 : ea.length
                                })]
                            }, "".concat(T, "-search-results")) : (0, a.jsx)(y.E.div, {
                                className: "max-w-[1200px] w-full mx-auto px-4 flex-col flex gap-10",
                                initial: {
                                    opacity: 0,
                                    y: -20
                                },
                                animate: {
                                    opacity: 1,
                                    y: 0
                                },
                                exit: {
                                    opacity: 0,
                                    y: -20
                                },
                                transition: {
                                    duration: .1
                                },
                                children: "slots" === T ? (0, a.jsx)(f.default, {
                                    heading: "slots",
                                    sortBy: "recommended",
                                    number: 72,
                                    carousel: !1
                                }) : "live-casino" === T ? (0, a.jsx)(f.default, {
                                    heading: "live_casino",
                                    sortBy: "popular",
                                    grouping: "live-casino",
                                    number: 72,
                                    carousel: !1,
                                    initialData: j
                                }) : (0, a.jsx)(a.Fragment, {
                                    children: "originals" === T ? (0, a.jsx)(f.default, {
                                        isStatic: !0,
                                        carousel: !1,
                                        heading: "originals",
                                        initialData: {
                                            count: null === b.R || void 0 === b.R ? void 0 : b.R.length,
                                            games: b.R
                                        },
                                        number: null === b.R || void 0 === b.R ? void 0 : b.R.length
                                    }) : (0, a.jsxs)(a.Fragment, {
                                        children: [(0, a.jsx)(f.default, {
                                            isStatic: !0,
                                            carousel: !0,
                                            heading: "originals",
                                            initialData: {
                                                count: null === b.R || void 0 === b.R ? void 0 : b.R.length,
                                                games: b.R
                                            },
                                            number: null === b.R || void 0 === b.R ? void 0 : b.R.length
                                        }), (0, a.jsx)(f.default, {
                                            heading: "recommended",
                                            sortBy: "recommended",
                                            carousel: !0,
                                            initialData: l
                                        }), (0, a.jsx)(f.default, {
                                            heading: "newReleases",
                                            sortBy: "release",
                                            carousel: !0,
                                            initialData: s
                                        }), (null == M ? void 0 : M.length) ? (0, a.jsx)(f.default, {
                                            isStatic: !0,
                                            heading: "recently_played_games",
                                            carousel: !0,
                                            initialData: {
                                                count: null == M ? void 0 : M.length,
                                                games: M
                                            }
                                        }) : null, (0, a.jsx)(f.default, {
                                            heading: "popular_live_games",
                                            sortBy: "popular",
                                            grouping: "live-casino",
                                            carousel: !0,
                                            number: 21,
                                            initialData: j
                                        }), (0, a.jsx)(C, {
                                            heading: "providers",
                                            carousel: !0,
                                            default_sort_by: "popular"
                                        })]
                                    })
                                })
                            }, "".concat(T, "-default-view"))
                        })
                    }), (0, a.jsx)("div", {
                        className: "w-full pt-14 pb-8 px-8",
                        children: (0, a.jsx)("div", {
                            className: "max-w-[1200px] w-full mx-auto px-4",
                            children: (0, a.jsx)("div", {
                                className: "bg-white/5 h-[1px]"
                            })
                        })
                    })]
                })
            }
        },
        40831: function(e) {
            e.exports = {
                "golden-text": "LiveFeed_golden-text__3sAoc",
                container: "LiveFeed_container__P4yRT",
                placeholder: "LiveFeed_placeholder__fxiNr",
                text: "LiveFeed_text__xe4_5",
                result: "LiveFeed_result__jJas5",
                animate: "LiveFeed_animate__ngZ59",
                fadeIn: "LiveFeed_fadeIn__Hs5IJ",
                "game-image": "LiveFeed_game-image__GuOWo",
                "game-result": "LiveFeed_game-result__DRr_6",
                player: "LiveFeed_player__vR6Gc",
                badge: "LiveFeed_badge__1rTzZ",
                name: "LiveFeed_name__fD8ri",
                hidden: "LiveFeed_hidden__W5_k0",
                payout: "LiveFeed_payout__0lVCy",
                "live-feed-icon": "LiveFeed_live-feed-icon___2r0t",
                circle: "LiveFeed_circle__VKu12",
                pulse: "LiveFeed_pulse__o_clN"
            }
        },
        13114: function(e, t, n) {
            "use strict";
            n.d(t, {
                M: function() {
                    return g
                }
            });
            var i = n(85893),
                a = n(67294),
                r = n(25364),
                o = n(96681),
                l = n(58868),
                s = n(240),
                c = n(93243),
                u = n(16014);
            class d extends a.Component {
                getSnapshotBeforeUpdate(e) {
                    let t = this.props.childRef.current;
                    if (t && e.isPresent && !this.props.isPresent) {
                        let e = t.offsetParent,
                            n = (0, c.R)(e) && e.offsetWidth || 0,
                            i = this.props.sizeRef.current;
                        i.height = t.offsetHeight || 0, i.width = t.offsetWidth || 0, i.top = t.offsetTop, i.left = t.offsetLeft, i.right = n - i.width - i.left
                    }
                    return null
                }
                componentDidUpdate() {}
                render() {
                    return this.props.children
                }
            }

            function m({
                children: e,
                isPresent: t,
                anchorX: n,
                root: r
            }) {
                let o = (0, a.useId)(),
                    l = (0, a.useRef)(null),
                    s = (0, a.useRef)({
                        width: 0,
                        height: 0,
                        top: 0,
                        left: 0,
                        right: 0
                    }),
                    {
                        nonce: c
                    } = (0, a.useContext)(u._);
                return (0, a.useInsertionEffect)(() => {
                    let {
                        width: e,
                        height: i,
                        top: a,
                        left: u,
                        right: d
                    } = s.current;
                    if (t || !l.current || !e || !i) return;
                    let m = "left" === n ? `left: ${u}` : `right: ${d}`;
                    l.current.dataset.motionPopId = o;
                    let p = document.createElement("style");
                    c && (p.nonce = c);
                    let f = r ? ? document.head;
                    return f.appendChild(p), p.sheet && p.sheet.insertRule(`
          [data-motion-pop-id="${o}"] {
            position: absolute !important;
            width: ${e}px !important;
            height: ${i}px !important;
            ${m}px !important;
            top: ${a}px !important;
          }
        `), () => {
                        f.contains(p) && f.removeChild(p)
                    }
                }, [t]), (0, i.jsx)(d, {
                    isPresent: t,
                    childRef: l,
                    sizeRef: s,
                    children: a.cloneElement(e, {
                        ref: l
                    })
                })
            }
            let p = ({
                children: e,
                initial: t,
                isPresent: n,
                onExitComplete: r,
                custom: l,
                presenceAffectsLayout: c,
                mode: u,
                anchorX: d,
                root: p
            }) => {
                let v = (0, o.h)(f),
                    h = (0, a.useId)(),
                    x = !0,
                    g = (0, a.useMemo)(() => (x = !1, {
                        id: h,
                        initial: t,
                        isPresent: n,
                        custom: l,
                        onExitComplete: e => {
                            for (let t of (v.set(e, !0), v.values()))
                                if (!t) return;
                            r && r()
                        },
                        register: e => (v.set(e, !1), () => v.delete(e))
                    }), [n, v, r]);
                return c && x && (g = { ...g
                }), (0, a.useMemo)(() => {
                    v.forEach((e, t) => v.set(t, !1))
                }, [n]), a.useEffect(() => {
                    n || v.size || !r || r()
                }, [n]), "popLayout" === u && (e = (0, i.jsx)(m, {
                    isPresent: n,
                    anchorX: d,
                    root: p,
                    children: e
                })), (0, i.jsx)(s.O.Provider, {
                    value: g,
                    children: e
                })
            };

            function f() {
                return new Map
            }
            var v = n(15947);
            let h = e => e.key || "";

            function x(e) {
                let t = [];
                return a.Children.forEach(e, e => {
                    (0, a.isValidElement)(e) && t.push(e)
                }), t
            }
            let g = ({
                children: e,
                custom: t,
                initial: n = !0,
                onExitComplete: s,
                presenceAffectsLayout: c = !0,
                mode: u = "sync",
                propagate: d = !1,
                anchorX: m = "left",
                root: f
            }) => {
                let [g, b] = (0, v.oO)(d), _ = (0, a.useMemo)(() => x(e), [e]), w = d && !g ? [] : _.map(h), y = (0, a.useRef)(!0), j = (0, a.useRef)(_), k = (0, o.h)(() => new Map), [N, E] = (0, a.useState)(_), [L, R] = (0, a.useState)(_);
                (0, l.L)(() => {
                    y.current = !1, j.current = _;
                    for (let e = 0; e < L.length; e++) {
                        let t = h(L[e]);
                        w.includes(t) ? k.delete(t) : !0 !== k.get(t) && k.set(t, !1)
                    }
                }, [L, w.length, w.join("-")]);
                let C = [];
                if (_ !== N) {
                    let e = [..._];
                    for (let t = 0; t < L.length; t++) {
                        let n = L[t],
                            i = h(n);
                        w.includes(i) || (e.splice(t, 0, n), C.push(n))
                    }
                    return "wait" === u && C.length && (e = C), R(x(e)), E(_), null
                }
                let {
                    forceRender: P
                } = (0, a.useContext)(r.p);
                return (0, i.jsx)(i.Fragment, {
                    children: L.map(e => {
                        let a = h(e),
                            r = (!d || !!g) && (_ === L || w.includes(a));
                        return (0, i.jsx)(p, {
                            isPresent: r,
                            initial: (!y.current || !!n) && void 0,
                            custom: t,
                            presenceAffectsLayout: c,
                            mode: u,
                            root: f,
                            onExitComplete: r ? void 0 : () => {
                                if (!k.has(a)) return;
                                k.set(a, !0);
                                let e = !0;
                                k.forEach(t => {
                                    t || (e = !1)
                                }), e && (P ? .(), R(j.current), d && b ? .(), s && s())
                            },
                            anchorX: m,
                            children: e
                        }, a)
                    })
                })
            }
        }
    },
    function(e) {
        e.O(0, [8802, 5675, 3012, 2438, 2215, 1752, 990, 5386, 8035, 8075, 404, 9291, 5323, 8695, 9377, 6601, 899, 78, 2682, 5513, 2888, 9774, 179], function() {
            return e(e.s = 78508)
        }), _N_E = e.O()
    }
]);