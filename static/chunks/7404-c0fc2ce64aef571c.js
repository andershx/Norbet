"use strict";
(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [7404, 7325], {
        46415: function(e, t, n) {
            n.d(t, {
                G: function() {
                    return s
                }
            });
            var i = n(24043),
                r = n(56900),
                a = n(67294),
                o = n(39396),
                s = function() {
                    var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
                        t = e.breakPointOne,
                        n = e.breakPointTwo,
                        r = e.breakPointThree,
                        s = void 0 !== r && r,
                        l = e.breakPointFour,
                        c = void 0 === l ? 390 : l,
                        u = o.ZP.state[o.ZP.EVENTS.MOBILE] ? 0 : 1920,
                        d = (0, a.useCallback)(function() {
                            return window.innerWidth
                        }, [u]),
                        v = (0, i._)((0, a.useState)(d()), 2),
                        h = v[0],
                        p = v[1],
                        m = (0, a.useCallback)(function() {
                            p(d())
                        }, [d]);
                    return ((0, a.useEffect)(function() {
                        return window.addEventListener("resize", m),
                            function() {
                                window.removeEventListener("resize", m)
                            }
                    }, [m]), !1 !== s && h <= s) ? 3 : !1 !== c && h <= c ? 4 : h <= (void 0 === n ? 768 : n) ? 2 : h <= (void 0 === t ? 1100 : t) ? 1 : 0
                };
            t.Z = function() {
                var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
                    t = e.breakPointOne,
                    n = void 0 === t ? 1100 : t,
                    s = e.breakPointTwo,
                    l = void 0 === s ? 768 : s,
                    c = e.breakPointThree,
                    u = void 0 !== c && c,
                    d = e.breakPointFour,
                    v = void 0 !== d && d,
                    h = e.targetElement,
                    p = void 0 === h ? "mainBody" : h,
                    m = e.deviceCheck,
                    f = void 0 !== m && m,
                    b = e.pixelDensity,
                    g = void 0 !== b && b,
                    k = (0, i._)((0, a.useState)(!!o.ZP.state[o.ZP.EVENTS.MOBILE] && "mobile-three"), 2),
                    y = k[0],
                    w = k[1],
                    _ = (0, a.useCallback)(function() {
                        var e = document.getElementById(p);
                        if ("body" === p && (e = document.body), e) {
                            var t = e.clientWidth + 8;
                            if (g) {
                                var i = (0, r.x_)();
                                t = (e.clientWidth + 8) * i
                            }!1 !== v && t <= v ? w("mobile-four") : !1 !== u && t <= u ? w("mobile-three") : t <= l ? w("mobile-two") : t <= n ? w("mobile-one") : f && (0, r.r3)() ? w("mobile-three") : w(!1)
                        }
                    }, [p, g, v, u, l, n, f]);
                return (0, a.useEffect)(function() {
                    var e = document.getElementById("mainBody");
                    if (e) {
                        _(e.clientWidth);
                        var t = new ResizeObserver(function(e) {
                            var t = !0,
                                n = !1,
                                i = void 0;
                            try {
                                for (var r, a = e[Symbol.iterator](); !(t = (r = a.next()).done); t = !0) {
                                    var o = r.value;
                                    _(o.contentRect.width)
                                }
                            } catch (e) {
                                n = !0, i = e
                            } finally {
                                try {
                                    t || null == a.return || a.return()
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
                }, [n, l, u, v, p, _]), y
            }
        },
        6042: function(e, t, n) {
            n.r(t);
            var i = n(85893),
                r = n(9008),
                a = n.n(r),
                o = n(11163),
                s = n(67294),
                l = "https://cdn.rainbet.com/brand/og-banner.webp";
            t.default = (0, s.memo)(function(e) {
                var t, n, r, s, c, u, d, v, h = e.meta,
                    p = e.gamesMeta,
                    m = e.gameName,
                    f = e.caseOpenMeta,
                    b = e.caseOpenName,
                    g = e.caseOpenIcon,
                    k = e.slotsMeta,
                    y = e.gamesMetaIcon,
                    w = e.providerMeta,
                    _ = e.providerName,
                    x = "Rainbet",
                    E = "",
                    j = "",
                    R = "",
                    S = (0, o.useRouter)(),
                    P = S.asPath,
                    B = S.locale,
                    C = P.split("?")[0],
                    O = "https://rainbet.com" + ("en" === B ? "" : "/".concat(B));
                switch (!0) {
                    case !!h:
                        x = (null == h ? void 0 : null === (t = h.meta) || void 0 === t ? void 0 : t.title) || (null == h ? void 0 : h.title) || "Rainbet", E = (null == h ? void 0 : h.description) || (null == h ? void 0 : null === (n = h.meta) || void 0 === n ? void 0 : n.description) || "", j = (null == h ? void 0 : h.image) || (null == h ? void 0 : null === (r = h.meta) || void 0 === r ? void 0 : r.image) || l, R = h.url ? "".concat(h.url) : "".concat(O).concat(C);
                        break;
                    case !!p:
                        x = p.title, E = p.description ? p.description : "", j = y, R = "".concat(O, "/casino/originals/").concat(m);
                        break;
                    case !!f:
                        x = b ? f.title : b + " Case - Rainbet", E = f.description ? f.description : "", j = g, R = "".concat(null == f ? void 0 : f.url);
                        break;
                    case !!w:
                        x = _ + " Casino Games – Rainbet", E = "Experience games by " + _ + " at Rainbet, offering the best slots, blackjack, roulette, and other table/live games.", R = "".concat(O);
                        break;
                    case !!k:
                        x = (null == k ? void 0 : null === (s = k.meta) || void 0 === s ? void 0 : s.title) ? null == k ? void 0 : null === (c = k.meta) || void 0 === c ? void 0 : c.title : "Slots – Rainbet", E = (null == k ? void 0 : null === (u = k.meta) || void 0 === u ? void 0 : u.description) ? null == k ? void 0 : null === (d = k.meta) || void 0 === d ? void 0 : d.description : "Rainbet Slots", j = null == k ? void 0 : k.icon, R = "".concat(null == k ? void 0 : null === (v = k.meta) || void 0 === v ? void 0 : v.url);
                        break;
                    default:
                        x = "Rainbet", E = "Play casino game modes such as Slots, Blackjack, Baccarat, Roulette, Game Shows, Live Casino games and original RainBet games.", j = l, R = "".concat(O)
                }
                return (0, i.jsxs)(a(), {
                    children: [(0, i.jsx)("title", {
                        children: x
                    }), E && (0, i.jsx)("meta", {
                        name: "description",
                        content: E
                    }), (0, i.jsx)("meta", {
                        property: "og:title",
                        content: x
                    }), E && (0, i.jsx)("meta", {
                        property: "og:description",
                        content: E
                    }), R && (0, i.jsx)("link", {
                        rel: "canonical",
                        href: R
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
                    }), j === l && (0, i.jsxs)(i.Fragment, {
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
                        content: j
                    })]
                })
            })
        },
        96068: function(e, t, n) {
            n.d(t, {
                rb: function() {
                    return f
                }
            });
            var i, r, a = n(11010),
                o = n(20567),
                s = n(14932),
                l = n(97582),
                c = n(75645);
            n(56900), n(11163), n(67294);
            var u = (i = (0, a._)(function(e) {
                    var t, n, i;
                    return (0, l.Jh)(this, function(r) {
                        return t = e.url, n = e.language, i = e.headers, [2, c.x.post("v1/public/content", {
                            url: t,
                            language: n
                        }, {
                            headers: i
                        }).then(function(e) {
                            if (200 !== e.status || !e.data) throw e.data || e;
                            return e.data
                        })]
                    })
                }), function(e) {
                    return i.apply(this, arguments)
                }),
                d = n(63381),
                v = n(6623),
                h = n.n(v),
                p = n(87441),
                m = n(39520),
                f = (r = (0, a._)(function(e) {
                    var t, n;
                    return (0, l.Jh)(this, function(i) {
                        switch (i.label) {
                            case 0:
                                return i.trys.push([0, 2, , 3]), [4, (0, p.TU)(e)];
                            case 1:
                                return t = i.sent(), [2, h().sanitize(t)];
                            case 2:
                                return n = i.sent(), (0, d.H)("Failed to sanitize content", n), [2, m.$t];
                            case 3:
                                return [2]
                        }
                    })
                }), function(e) {
                    return r.apply(this, arguments)
                });
            (0, a._)(function(e) {
                var t, n;
                return (0, l.Jh)(this, function(i) {
                    switch (i.label) {
                        case 0:
                            return [4, u(e)];
                        case 1:
                            if (!(null == (t = i.sent()) ? void 0 : t.content)) return [2, t];
                            return [4, f(null == t ? void 0 : t.content)];
                        case 2:
                            return n = i.sent(), [2, (0, s._)((0, o._)({}, t), {
                                content: n
                            })]
                    }
                })
            })
        },
        47325: function(e, t, n) {
            n.r(t), n.d(t, {
                default: function() {
                    return p
                },
                getServerHeaders: function() {
                    return h
                }
            });
            var i = n(11010),
                r = n(20567),
                a = n(97582),
                o = n(79229),
                s = n(12749),
                l = n(62842),
                c = n(24043),
                u = n(76489),
                d = n(63381);
            (0, i._)(function(e, t) {
                var i, o;
                return (0, a.Jh)(this, function(a) {
                    switch (a.label) {
                        case 0:
                            throw Error("[ssr] must not be called on the client");
                        case 1:
                            return a.trys.push([1, 4, , 5]), [4, n.e(441).then(n.bind(n, 10441))];
                        case 2:
                            if (i = a.sent().authOptions, !(o = function(e) {
                                    if (!e) return null;
                                    var t = "cookies" in e;
                                    try {
                                        var n, i = (null == e ? void 0 : null === (n = e.headers) || void 0 === n ? void 0 : n.cookie) ? (0, u.parse)(e.headers.cookie) : {},
                                            a = t ? e.cookies : {},
                                            o = (0, r._)({}, i, a);
                                        return e.cookies = o, e.headers.cookie = Object.entries(o).map(function(e) {
                                            var t = (0, c._)(e, 2),
                                                n = t[0],
                                                i = t[1];
                                            return (0, u.serialize)(n, i)
                                        }).join("; "), e
                                    } catch (n) {
                                        return (0, d.H)("could not parse cookies", {
                                            error: n,
                                            req: e
                                        }), t || (e.cookies = {}), e
                                    }
                                }(e))) return [2, null];
                            return [4, (0, l.getServerSession)(o, t, i)];
                        case 3:
                            return [2, a.sent()];
                        case 4:
                            return a.sent(), [2, null];
                        case 5:
                            return [2]
                    }
                })
            });
            var v = n(83454),
                h = function() {
                    var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
                        t = e.userAgent,
                        n = e.cookie,
                        i = e.ip,
                        a = e.token;
                    return (0, r._)({
                        "ssr-secret": v.env.SSR_SECRET
                    }, t && {
                        "user-agent": t
                    }, i && {
                        "ssr-client-ip": i
                    }, n && {
                        cookie: n
                    }, a && {
                        Authorization: "Bearer ".concat(a),
                        token: a
                    })
                };

            function p(e) {
                return m.apply(this, arguments)
            }

            function m() {
                return (m = (0, i._)(function(e) {
                    var t, n, i, r, l, c, u, d, v;
                    return (0, a.Jh)(this, function(a) {
                        switch (a.label) {
                            case 0:
                                throw Error("[ssr] must not be called on the client side, import using `const getSSRHeaders = await import('@lib/tools/ssr/get-ssr-headers');`");
                            case 1:
                                if (u = null == (c = a.sent()) ? void 0 : null === (t = c.user) || void 0 === t ? void 0 : t.access_token, "ssr-client-ip" in (d = h({
                                        userAgent: null == e ? void 0 : null === (i = e.req) || void 0 === i ? void 0 : null === (n = i.headers) || void 0 === n ? void 0 : n["user-agent"],
                                        cookie: null == e ? void 0 : null === (l = e.req) || void 0 === l ? void 0 : null === (r = l.headers) || void 0 === r ? void 0 : r.cookie,
                                        ip: (0, s.R)(e),
                                        token: u
                                    }))) return [3, 3];
                                return [4, (0, o._9)(d)];
                            case 2:
                                v = a.sent(), d["ssr-client-ip"] = v.ip, d["x-forwarded-for"] = v.ip, d["x-real-ip"] = v.ip, a.label = 3;
                            case 3:
                                return [2, d]
                        }
                    })
                })).apply(this, arguments)
            }
        },
        35338: function(e, t, n) {
            var i = n(11010),
                r = n(97582),
                a = n(75645),
                o = n(63381),
                s = n(47325);
            (0, i._)(function(e, t) {
                var n, i, l, c, u, d, v, h, p, m;
                return (0, r.Jh)(this, function(r) {
                    switch (r.label) {
                        case 0:
                            n = e.locale, i = t.game_url, l = t.type, r.label = 1;
                        case 1:
                            return r.trys.push([1, 4, , 5]), d = a.x.post, v = ["v1/slots/details", {
                                game_url: i,
                                language: n,
                                type: l
                            }], h = {}, [4, (0, s.default)(e)];
                        case 2:
                            return [4, d.apply(a.x, v.concat([(h.headers = r.sent(), h)]))];
                        case 3:
                            if (u = (c = r.sent()).data, 200 !== c.status) return (0, o.H)("fetchGame failed /".concat(n), {
                                game_url: i,
                                language: n
                            }), [2, null];
                            return [2, u];
                        case 4:
                            return p = r.sent(), (0, o.H)("fetchGame failed /".concat(n), {
                                game_url: i,
                                language: n,
                                data: (null == p ? void 0 : null === (m = p.response) || void 0 === m ? void 0 : m.data) || (null == p ? void 0 : p.data) || p.message
                            }), [2, null];
                        case 5:
                            return [2]
                    }
                })
            }), (0, i._)(function(e, t, n) {
                return (0, r.Jh)(this, function(i) {
                    return [2, a.Z.post("team/" + e, {
                        language: t,
                        url: n
                    }, {
                        headers: (0, s.getServerHeaders)()
                    }).then(function(e) {
                        return e.data
                    })]
                })
            }), n(96068)
        }
    }
]);