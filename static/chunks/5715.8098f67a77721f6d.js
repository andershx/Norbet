(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [5715], {
        55715: function(e, n, t) {
            "use strict";
            t.r(n), t.d(n, {
                default: function() {
                    return L
                }
            });
            var i = t(20567),
                l = t(14932),
                a = t(85893),
                r = t(40831),
                u = t.n(r),
                c = t(25758),
                o = t(5682),
                s = t(25675),
                d = t.n(s),
                f = t(98695),
                v = t(8075),
                m = t(41664),
                _ = t.n(m),
                p = t(83973),
                x = t(56900),
                h = t(81377),
                g = t(46046),
                y = t(40108),
                j = t(50028),
                b = (0, a.jsxs)("span", {
                    className: "relative flex h-2 w-2",
                    children: [(0, a.jsx)("span", {
                        className: "absolute inline-flex h-full w-full rounded-full bg-green opacity-75 animate-wins-feed-ping"
                    }), (0, a.jsx)("span", {
                        className: "relative inline-flex rounded-full h-2 w-2 bg-light-green"
                    })]
                }),
                N = function() {
                    return Array.from({
                        length: 12
                    }, function(e, n) {
                        return (0, a.jsx)(h.$, {}, n)
                    })
                };

            function w(e) {
                var n, t = e.id,
                    r = e.user,
                    c = void 0 === r ? {} : r,
                    s = e.payout,
                    m = e.animate,
                    p = e.icon,
                    h = e.game,
                    g = e.walletSetting,
                    b = e.currency,
                    N = e.currencyPayout,
                    w = c.username,
                    F = c.rankLevel,
                    L = (0, j.ZP)();
                return (0, a.jsxs)(_(), (0, l._)((0, i._)({}, (0, x.dh)(u(), "result", void 0 !== m && m && "animate")), {
                    shallow: !0,
                    href: {
                        query: {
                            modal: "bet",
                            tab: "result",
                            betId: t
                        }
                    },
                    children: [(0, a.jsx)("div", {
                        className: u()["game-image"],
                        children: p ? (0, a.jsx)(d(), {
                            src: p,
                            alt: "game",
                            fill: !0,
                            sizes: "100px"
                        }) : (0, a.jsx)("div", {
                            className: u().placeholder,
                            children: (0, a.jsx)("div", {
                                className: u().text,
                                children: h.name
                            })
                        })
                    }), (0, a.jsxs)("div", {
                        className: u()["game-result"],
                        children: [(0, a.jsxs)("div", {
                            className: u().player,
                            children: [(null == F ? void 0 : F.name) && w ? (0, a.jsx)("div", {
                                className: "translate-y-[-2px]",
                                children: (0, a.jsx)(f.Z, {
                                    code: null == F ? void 0 : null === (n = F.name) || void 0 === n ? void 0 : n.toUpperCase(),
                                    size: "large"
                                })
                            }) : null, (0, a.jsxs)("div", {
                                className: (0, y.cn)("max-w-[85px] flex gap-1.5 justify-center"),
                                children: [(0, a.jsx)("p", {
                                    className: (0, y.cn)("text-xs text-input-label-color-light truncate", !w && "text-font-color-two"),
                                    children: w || L("hidden")
                                }), !w && (0, a.jsx)(o.Z, {})]
                            })]
                        }), (0, a.jsx)("div", {
                            className: u().payout,
                            children: (0, a.jsx)(v.Z, {
                                raw: g === b,
                                amount: g === b ? N : void 0 === s ? 0 : s,
                                size: "small"
                            })
                        })]
                    })]
                }))
            }
            var F = function(e) {
                var n = e.data;
                return +(null == n ? void 0 : n.multiplier) > 1
            };

            function L(e) {
                var n = e.initialData,
                    t = (0, c.X8)({
                        initialState: void 0 === n ? null : n,
                        limit: 12,
                        room: "LIVE_FEED",
                        handleMerge: F
                    }).data,
                    i = (0, p.ZP)(),
                    l = (0, g.ZP)().walletSetting;
                return (null == t ? void 0 : t.length) === 0 ? null : (0, a.jsxs)("div", {
                    className: u().container,
                    children: [(0, a.jsxs)("div", {
                        className: "pl-[5px] pr-2.5 py-[5px] left-0 top-0 z-10 absolute rounded-md bg-[#333A5B] outline outline-[5px] outline-[#0f1328] inline-flex justify-center items-center gap-[5px]",
                        children: [b, (0, a.jsx)("div", {
                            className: "justify-start text-white text-xs font-medium",
                            children: i("live_feed")
                        })]
                    }), (0, a.jsxs)("div", {
                        className: "w-full flex gap-2.5 relative justify-start",
                        children: [null === t && (0, a.jsx)(N, {}), null == t ? void 0 : t.map(function(e, n) {
                            var t, i, r;
                            return (0, a.jsx)(w, {
                                id: e.id,
                                user: e.user,
                                payout: e.payout,
                                game: e.game,
                                walletSetting: l,
                                currency: e.currency,
                                currencyAmount: e.currencyAmount,
                                currencyPayout: null == e ? void 0 : e.currencyPayout,
                                multiplier: e.multiplier,
                                icon: (null === (t = e.game) || void 0 === t ? void 0 : t.customBanner) || (null === (i = e.game) || void 0 === i ? void 0 : i.custom_banner) || (null === (r = e.game) || void 0 === r ? void 0 : r.icon),
                                animate: 0 === n
                            }, e.id)
                        })]
                    })]
                })
            }
        },
        25758: function(e, n, t) {
            "use strict";
            t.d(n, {
                X8: function() {
                    return f
                },
                ZP: function() {
                    return d
                }
            });
            var i = t(24043),
                l = t(248),
                a = t(67294),
                r = t(67642),
                u = t(63694),
                c = t(63381),
                o = function(e) {
                    var n = e.namespace,
                        t = e.publicId;
                    return (0, r.ZP)(n, {
                        withCredentials: !0,
                        path: "/socket.io",
                        transports: ["websocket"],
                        secure: !0,
                        extraHeaders: {
                            "X-Request-With": "HttpFront",
                            "x-public-id": t
                        },
                        auth: {},
                        query: {}
                    })
                },
                s = {};

            function d() {
                var e, n = arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
                    t = (0, i._)((0, a.useState)(s[n] || null), 2),
                    l = t[0],
                    r = t[1],
                    d = (0, u.EC)(),
                    f = d.token,
                    v = d.publicId;
                return (0, a.useEffect)(function() {
                    if (n) {
                        var e = o({
                            namespace: n,
                            publicId: v
                        });
                        r(function() {
                            return e
                        }), s[n] = e
                    }
                }, [n, v]), (0, a.useEffect)(function() {
                    var e;
                    f && (null != l && null !== (e = l.auth) && void 0 !== e && e.token || r(function(e) {
                        return e && (e.disconnect(), e.io.opts.query.token = f, e.auth.token = f, e.connect()), e
                    }))
                }, [null == l ? void 0 : null === (e = l.auth) || void 0 === e ? void 0 : e.token, f]), (0, a.useEffect)(function() {
                    if (l) return l.on("connect", function() {
                            return (0, c.cM)("Socket ".concat(n, " connected"), s)
                        }), l.on("disconnect", function() {
                            return (0, c.cM)("Socket ".concat(n, " disconnected"), s)
                        }),
                        function() {
                            l.off("connect"), l.off("disconnect")
                        }
                }, [n, l]), l
            }
            var f = function(e) {
                var n, t = e.limit,
                    r = void 0 === t ? 12 : t,
                    u = e.initialState,
                    c = void 0 === u ? null : u,
                    o = e.handleMerge,
                    s = void 0 === o ? function() {
                        return !0
                    } : o,
                    f = d("".concat("https://socket.rainbet.com", "/game-history"), !0),
                    v = (0, i._)((0, a.useState)(c), 2),
                    m = v[0],
                    _ = v[1],
                    p = (0, a.useCallback)(function(e) {
                        _(function(n) {
                            return (null == n ? void 0 : n.length) && s({
                                data: e
                            }) && n.every(function(n) {
                                return n.id !== e.id
                            }) ? [e].concat((0, l._)(n)).slice(0, r) : n
                        })
                    }, [s, r]);
                return (0, a.useEffect)(function() {
                    _(c)
                }, [c]), (0, a.useEffect)(function() {
                    return null == f || f.on("new-history", p),
                        function() {
                            null == f || f.off("new-history", p)
                        }
                }, [p, f]), {
                    data: (null == m ? void 0 : null === (n = m.slice) || void 0 === n ? void 0 : n.call(m, 0, r)) || null,
                    socket: f
                }
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
        }
    }
]);