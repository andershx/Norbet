(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [4805, 9947], {
        5682: function(e, t, n) {
            "use strict";
            n.d(t, {
                Z: function() {
                    return r
                }
            });
            var a = n(20567),
                i = n(14932),
                s = n(85893);

            function r(e) {
                return (0, s.jsx)("svg", (0, i._)((0, a._)({
                    width: "18",
                    height: "12",
                    viewBox: "0 0 18 12",
                    fill: "none",
                    xmlns: "http://www.w3.org/2000/svg"
                }, e), {
                    children: (0, s.jsx)("path", {
                        fillRule: "evenodd",
                        clipRule: "evenodd",
                        d: "M4.06794 9.05706C1.88576 7.76882 0.875 6 0.875 6C0.875 6 3.375 1.625 9 1.625C9.81532 1.625 10.565 1.71692 11.2509 1.8741L9.56166 3.56334C9.38112 3.5219 9.19312 3.5 9 3.5C7.61929 3.5 6.5 4.61929 6.5 6C6.5 6.19312 6.5219 6.38112 6.56334 6.56166L4.06794 9.05706ZM6.7491 10.1259C7.43502 10.2831 8.18468 10.375 9 10.375C14.625 10.375 17.125 6 17.125 6C17.125 6 16.1142 4.23118 13.9321 2.94294L11.4367 5.43834C11.4781 5.61888 11.5 5.80688 11.5 6C11.5 7.38071 10.3807 8.5 9 8.5C8.80688 8.5 8.61888 8.4781 8.43834 8.43666L6.7491 10.1259ZM10.875 6C10.875 6.47985 10.6919 6.95971 10.3258 7.32583C9.95971 7.69194 9.47985 7.875 9 7.875L10.875 6ZM9 4.125C8.52015 4.125 8.04029 4.30806 7.67417 4.67417C7.30806 5.04029 7.125 5.52015 7.125 6L9 4.125ZM14 0.375L3.375 11L4 11.625L14.625 1L14 0.375Z",
                        fill: "#7179A5"
                    })
                }))
            }
        },
        88669: function(e, t, n) {
            "use strict";
            n.d(t, {
                Z: function() {
                    return u
                }
            });
            var a = n(85893),
                i = n(25675),
                s = n.n(i),
                r = {
                    src: "/_next/static/media/p1.0302b922.svg",
                    height: 49,
                    width: 58,
                    blurWidth: 0,
                    blurHeight: 0
                },
                l = {
                    src: "/_next/static/media/p2.f5dbab47.svg",
                    height: 29,
                    width: 32,
                    blurWidth: 0,
                    blurHeight: 0
                },
                o = {
                    src: "/_next/static/media/p3.33afc077.svg",
                    height: 29,
                    width: 30,
                    blurWidth: 0,
                    blurHeight: 0
                },
                c = {
                    src: "/_next/static/media/p4.05796c79.svg",
                    height: 29,
                    width: 28,
                    blurWidth: 0,
                    blurHeight: 0
                },
                d = n(67294),
                u = (0, d.memo)(function(e) {
                    var t = e.p,
                        n = void 0 === t ? 4 : t,
                        i = e.width,
                        u = e.height,
                        h = (0, d.useMemo)(function() {
                            var e;
                            return 1 == (e = +n) ? r : 2 === e ? l : 3 === e ? o : c
                        }, [n]),
                        p = h.width * (void 0 === i ? 28 : i) / 28,
                        _ = h.height * (void 0 === u ? 28 : u) / 28;
                    return (0, a.jsxs)("div", {
                        className: "inline-block relative pointer-events-none",
                        style: {
                            width: p,
                            height: _
                        },
                        children: [(0, a.jsx)("span", {
                            className: "absolute w-full h-full z-[1] tabular-nums flex items-center justify-center text-normal ",
                            children: n
                        }), n <= 99 && (0, a.jsx)(s(), {
                            unoptimized: !0,
                            loading: "lazy",
                            src: h.src,
                            alt: "An icon representing the ".concat(n, "th place."),
                            width: p + 1,
                            height: _,
                            className: "w-full h-full "
                        })]
                    })
                })
        },
        26001: function(e, t, n) {
            "use strict";
            n.d(t, {
                Z: function() {
                    return u
                }
            });
            var a = n(20567),
                i = n(47702),
                s = n(24043),
                r = n(85893),
                l = n(20259),
                o = n(25675),
                c = n.n(o),
                d = n(67294);

            function u(e) {
                var t = e.code,
                    n = e.width,
                    o = void 0 === n ? 48 : n,
                    u = e.height,
                    h = void 0 === u ? 48 : u,
                    p = (0, i._)(e, ["code", "width", "height"]),
                    _ = (0, l.Z)().list,
                    v = (0, s._)((0, d.useState)(!1), 2),
                    x = v[0],
                    m = v[1],
                    g = (0, d.useMemo)(function() {
                        var e = null == t ? void 0 : t.toLowerCase(),
                            n = _[e];
                        return (null == n ? void 0 : n.icon) || "https://cdn.rainbet.com/currencies/".concat(e, ".svg")
                    }, [t, _]);
                return x ? (0, r.jsx)("div", (0, a._)({
                    style: {
                        width: +o,
                        height: +h
                    },
                    className: "rounded-full"
                }, p)) : (0, r.jsx)(c(), (0, a._)({
                    src: g,
                    alt: "icon for crypto ".concat(t),
                    width: +o,
                    height: +h,
                    onError: function() {
                        return m(!0)
                    }
                }, p))
            }
        },
        84232: function(e, t, n) {
            "use strict";
            n.d(t, {
                ZP: function() {
                    return O
                }
            });
            var a = n(20567),
                i = n(14932),
                s = n(24043),
                r = n(85893),
                l = n(5682),
                o = n(88669),
                c = n(47702),
                d = n(67294),
                u = n(20166),
                h = n.n(u),
                p = n(56900),
                _ = function(e) {
                    var t = e.label,
                        n = e.name,
                        i = e.value,
                        s = e.register,
                        l = (0, c._)(e, ["label", "name", "value", "register"]),
                        o = "".concat(n, "-").concat(i);
                    return (0, r.jsxs)(r.Fragment, {
                        children: [(0, r.jsx)("input", (0, a._)({
                            type: "radio",
                            name: n,
                            id: o,
                            value: i,
                            hidden: !0
                        }, l, s)), (0, r.jsx)("label", {
                            htmlFor: o,
                            children: t
                        })]
                    })
                },
                v = function(e) {
                    var t = e.color,
                        n = e.options,
                        s = e.name,
                        l = e.defaultChecked,
                        o = e.register,
                        c = (0, d.useId)();
                    return (0, r.jsx)("fieldset", (0, i._)((0, a._)({}, (0, p.dh)(h(), "button-switch")), {
                        style: {
                            "--btn-color": void 0 === t ? "linear-gradient(180deg, #FFCC75 -5%, #d68800 100%)" : t
                        },
                        children: n.map(function(e) {
                            return (0, r.jsx)(_, {
                                name: s || c,
                                label: e.label,
                                value: e.value,
                                defaultChecked: e.value === l,
                                register: o
                            }, e.value)
                        })
                    }))
                },
                x = n(50028),
                m = n(89018),
                g = n(46415),
                f = n(63694),
                w = n(6042),
                j = n(98695),
                b = n(33226),
                y = n(8075),
                C = n(75645),
                N = n(63381);
            n(35338);
            var k = n(40108),
                R = n(45880),
                Z = n.n(R),
                T = n(25675),
                z = n.n(T),
                M = n(41664),
                L = n.n(M),
                S = n(39332),
                I = n(87536),
                P = n(5068),
                D = function() {
                    var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
                        t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
                    return C.Z.post("public/race", e, t).then(function(e) {
                        return e.data
                    }).catch(function(e) {
                        return (0, N.H)(e), null
                    })
                },
                U = function(e) {
                    var t = e.data,
                        n = (0, x.ZP)();
                    return (0, r.jsxs)("section", {
                        className: Z().table,
                        children: [(0, r.jsxs)("div", {
                            className: Z().head,
                            children: [(0, r.jsx)("span", {
                                className: Z().th,
                                children: "#"
                            }), (0, r.jsx)("span", {
                                className: Z().th,
                                children: n("player")
                            }), (0, r.jsx)("span", {
                                className: Z().th,
                                children: n("wagered_amount")
                            }), (0, r.jsx)("span", {
                                className: Z().th,
                                children: n("reward")
                            })]
                        }), (0, r.jsx)("div", {
                            className: Z().tbody,
                            children: t.map(function(e, t) {
                                return (0, r.jsxs)("div", (0, i._)((0, a._)({}, (0, p.dh)(Z(), "tr", (null == e ? void 0 : e.highlighted) && "highlighted")), {
                                    children: [(0, r.jsx)("div", {
                                        className: Z().td,
                                        children: (0, r.jsx)(o.Z, {
                                            p: t + 1
                                        })
                                    }), (0, r.jsx)("div", {
                                        className: Z().td,
                                        children: (0, r.jsxs)("div", {
                                            className: Z()["rank-wrapper"],
                                            children: [(0, r.jsx)(b.Z, {
                                                text: (null == e ? void 0 : e.rank) && "".concat((0, p.kC)(null == e ? void 0 : e.rank), " ").concat(null == e ? void 0 : e.division.toLocaleUpperCase()),
                                                placement: void 0,
                                                transparent: void 0,
                                                children: (null == e ? void 0 : e.rank) && (0, r.jsx)(j.Z, {
                                                    code: null == e ? void 0 : e.rank,
                                                    size: "mlarge"
                                                })
                                            }), (0, r.jsxs)("div", {
                                                className: "text-[14px] flex items-center gap-2",
                                                children: [e.username || (0, r.jsxs)("span", {
                                                    className: "text-font-color-seven [&_svg]:opacity-50 flex gap-2 [&_svg]:mt-[1px]  ml-[-18px] sm:ml-[0px]",
                                                    children: [n("hidden"), (0, r.jsx)(l.Z, {})]
                                                }), e.highlighted && (0, r.jsx)("span", {
                                                    className: Z().gold,
                                                    children: " ∙ You"
                                                })]
                                            })]
                                        })
                                    }), (0, r.jsx)("div", {
                                        className: Z().td,
                                        children: (null == e ? void 0 : e.wagered) ? (0, r.jsx)(y.Z, {
                                            amount: null == e ? void 0 : e.wagered,
                                            size: "mid",
                                            textIcon: !0,
                                            decimals: 0
                                        }) : (0, r.jsx)("div", {
                                            style: {
                                                display: "flex",
                                                alignItems: "center",
                                                gap: 4,
                                                filter: "grayscale(1)",
                                                opacity: .4,
                                                fontSize: 13
                                            },
                                            children: n("hidden")
                                        })
                                    }), (0, r.jsx)("div", (0, i._)((0, a._)({}, (0, p.dh)(Z(), "td", "gold--shadow")), {
                                        children: e.reward > 0 && e.reward && !Number.isNaN(e.reward) ? (0, r.jsx)(y.Z, {
                                            amount: e.reward,
                                            customClass: Z()["gold-color"],
                                            size: "mid",
                                            textIcon: !0,
                                            decimals: 0
                                        }) : null
                                    }))]
                                }), t)
                            })
                        })]
                    })
                },
                F = function(e) {
                    var t = e.end,
                        n = (0, x.ZP)(),
                        a = (0, m.Z)(),
                        i = (0, d.useMemo)(function() {
                            return (0, k.zO)(a, t)
                        }, [a, t]),
                        s = i.days > 0,
                        l = s || i.hours > 0,
                        o = l || i.minutes > 0;
                    return (0, r.jsxs)("div", {
                        className: Z()["number-card-wrapper"],
                        children: [s && (0, r.jsxs)("div", {
                            className: Z()["number-card"],
                            children: [(0, r.jsx)("div", {
                                className: Z().number,
                                children: i.days
                            }), (0, r.jsx)("div", {
                                className: Z().text,
                                children: String(n("days")).toUpperCase()
                            })]
                        }), l && (0, r.jsxs)("div", {
                            className: Z()["number-card"],
                            children: [(0, r.jsx)("div", {
                                className: Z().number,
                                children: i.hours
                            }), (0, r.jsx)("div", {
                                className: Z().text,
                                children: String(n("hour")).toUpperCase()
                            })]
                        }), o && (0, r.jsxs)("div", {
                            className: Z()["number-card"],
                            children: [(0, r.jsx)("div", {
                                className: Z().number,
                                children: i.minutes
                            }), (0, r.jsx)("div", {
                                className: Z().text,
                                children: "MIN"
                            })]
                        }), (0, r.jsxs)("div", {
                            className: Z()["number-card"],
                            children: [(0, r.jsx)("div", {
                                className: Z().number,
                                children: i.seconds
                            }), (0, r.jsx)("div", {
                                className: Z().text,
                                children: String(n("sec")).toUpperCase()
                            })]
                        })]
                    })
                },
                E = function(e) {
                    var t = e.position,
                        n = e.wagered,
                        a = e.next,
                        i = (0, x.ZP)();
                    return (0, r.jsxs)("div", {
                        className: Z().stats,
                        children: [(0, r.jsx)("h3", {
                            children: i("your_stats")
                        }), t && (0, r.jsxs)("div", {
                            className: Z().stat,
                            children: [(0, r.jsxs)("span", {
                                children: [i("position"), ":"]
                            }), (0, r.jsx)(o.Z, {
                                p: t
                            })]
                        }), (0, r.jsxs)("div", {
                            className: Z().stat,
                            children: [(0, r.jsxs)("span", {
                                children: [i("wager"), ":"]
                            }), (0, r.jsx)(y.Z, {
                                amount: n || 0,
                                size: "mid",
                                textIcon: !0
                            })]
                        }), !!a && (0, r.jsxs)("div", {
                            className: Z()["next-stat"],
                            children: [(0, r.jsx)("span", {
                                children: i(t ? "next_position" : "wager_required_leaderboard")
                            }), (0, r.jsx)(y.Z, {
                                amount: a,
                                size: "mid",
                                textIcon: !0
                            })]
                        })]
                    })
                },
                O = function(e) {
                    var t, n, i, l, o = (0, x.ZP)(),
                        c = !1 !== (0, g.Z)({
                            breakPointOne: 840,
                            breakPointTwo: !1
                        }),
                        u = (0, f.EC)().token,
                        h = (0, I.cI)(),
                        p = h.register,
                        _ = h.watch,
                        m = h.setValue,
                        j = _("switch", e.type),
                        b = (0, P.ZP)(["public/race", j, u], function(e) {
                            var t = (0, s._)(e, 3),
                                n = t[1],
                                i = t[2];
                            return D({
                                type: n
                            }, {
                                headers: (0, a._)({}, i && {
                                    Authorization: "Bearer ".concat(i)
                                })
                            })
                        }, {
                            refreshInterval: 9e4,
                            fallbackData: e.racesData,
                            revalidateOnMount: !e.racesData,
                            keepPreviousData: !0
                        }).data,
                        y = null == b ? void 0 : b.player_stats,
                        C = (0, S.useRouter)().replace,
                        N = [{
                            label: o("daily"),
                            value: "daily"
                        }, {
                            label: o("weekly"),
                            value: "weekly"
                        }, {
                            label: o("monthly"),
                            value: "monthly"
                        }];
                    (0, d.useEffect)(function() {
                        m("switch", e.type)
                    }, [e.type, m, C]);
                    var k = {
                            weekly_race: o("".concat(j, "_race")),
                            how_works: o("how_works"),
                            race_reset: o("race_reset")
                        },
                        R = {
                            daily: {
                                image: "/Images/races-5k.png",
                                text: "5K"
                            },
                            weekly: {
                                image: "/Images/races-20k.png",
                                text: "20K"
                            },
                            monthly: {
                                image: "/Images/races-150k.png",
                                text: "150K"
                            }
                        },
                        T = (0, d.useMemo)(function() {
                            return (0, r.jsx)(L(), {
                                shallow: !0,
                                className: "!px-10 !py-4 [@media(max-width:570px)]:w-full",
                                href: {
                                    query: {
                                        modal: "how-races-work"
                                    }
                                },
                                children: k.how_works
                            })
                        }, [k.how_works]);
                    return (0, r.jsxs)("div", {
                        className: Z().races,
                        children: [(0, r.jsx)(w.default, {
                            meta: null == e ? void 0 : e.meta
                        }), (0, r.jsxs)("div", {
                            className: Z().banner,
                            children: [(0, r.jsxs)("div", {
                                className: Z()["prize-row"],
                                children: [(0, r.jsxs)("div", {
                                    className: "".concat(Z()["prize-wrapper"], " "),
                                    children: [(0, r.jsx)(z(), {
                                        src: R[j].image,
                                        alt: "".concat(R[j].text, " Race Prize"),
                                        width: 145,
                                        height: 50,
                                        priority: !0,
                                        className: "min-w-[115px]"
                                    }), (0, r.jsxs)("h1", {
                                        className: Z().text,
                                        children: [String(k.weekly_race).toUpperCase(), A()]
                                    })]
                                }), c && (null == b ? void 0 : null === (t = b.details) || void 0 === t ? void 0 : t.end) && (0, r.jsx)(F, {
                                    end: null == b ? void 0 : null === (n = b.details) || void 0 === n ? void 0 : n.end
                                }), (0, r.jsx)("div", {
                                    className: "flex justify-center w-full",
                                    children: (0, r.jsxs)("div", {
                                        className: "flex  gap-x-5 gap-y-3 flex-wrap items-center justify-center [@media(max-width:570px)]:flex-col [@media(min-width:850px)]:justify-start",
                                        children: [(0, r.jsx)(v, {
                                            options: N,
                                            name: "switch",
                                            register: p("switch", {
                                                onChange: function(e) {
                                                    var t = e.target.value;
                                                    C("/".concat(t, "-race"))
                                                }
                                            }),
                                            defaultChecked: e.type
                                        }), (0, r.jsx)("div", {
                                            className: "w-1 h-7 max-[1372px]:hidden ",
                                            style: {
                                                background: "linear-gradient(90deg, rgba(255, 255, 255, 0.00) 0%, rgba(255, 255, 255, 0.10) 50%, rgba(255, 255, 255, 0.00) 100%)"
                                            }
                                        }), T]
                                    })
                                })]
                            }), (0, r.jsx)("div", {
                                className: "flex justify-center items-center max-w-[418px] w-full min-w-[265px]",
                                children: !c && (0, r.jsxs)("div", {
                                    className: Z().heading,
                                    children: [String(k.race_reset).toUpperCase(), (null == b ? void 0 : null === (i = b.details) || void 0 === i ? void 0 : i.end) && (0, r.jsx)(F, {
                                        end: null == b ? void 0 : null === (l = b.details) || void 0 === l ? void 0 : l.end
                                    })]
                                })
                            })]
                        }), (0, r.jsxs)("div", {
                            className: Z().content,
                            children: [(null == b ? void 0 : b.participants) && (0, r.jsx)(U, {
                                data: b.participants
                            }), y && (0, r.jsx)(E, {
                                position: null == y ? void 0 : y.position,
                                wagered: null == y ? void 0 : y.wagered,
                                next: null == y ? void 0 : y.wager_to_next
                            })]
                        })]
                    })
                },
                A = function() {
                    return (0, r.jsxs)("svg", {
                        xmlns: "http://www.w3.org/2000/svg",
                        viewBox: "0 0 192 7",
                        fill: "none",
                        preserveAspectRatio: "none",
                        className: "mt-2 w-full",
                        children: [(0, r.jsx)("path", {
                            d: "M3.74023 4.27952H189.674",
                            stroke: "url(#paint0_linear_20906_36850)",
                            strokeWidth: 4.42115,
                            strokeLinecap: "round"
                        }), (0, r.jsx)("path", {
                            d: "M2.34326 2.76337H188.277",
                            stroke: "url(#paint1_linear_20906_36850)",
                            strokeWidth: 4.42115,
                            strokeLinecap: "round"
                        }), (0, r.jsxs)("defs", {
                            children: [(0, r.jsxs)("linearGradient", {
                                id: "paint0_linear_20906_36850",
                                x1: 3.7399,
                                y1: 4.09551,
                                x2: 115.885,
                                y2: -88.0383,
                                gradientUnits: "userSpaceOnUse",
                                children: [(0, r.jsx)("stop", {
                                    stopColor: "#F7AC2A",
                                    stopOpacity: 0
                                }), (0, r.jsx)("stop", {
                                    offset: 1,
                                    stopColor: "white"
                                })]
                            }), (0, r.jsxs)("linearGradient", {
                                id: "paint1_linear_20906_36850",
                                x1: 2.34292,
                                y1: 2.57936,
                                x2: 114.488,
                                y2: -89.5544,
                                gradientUnits: "userSpaceOnUse",
                                children: [(0, r.jsx)("stop", {
                                    stopColor: "#FFA70F",
                                    stopOpacity: 0
                                }), (0, r.jsx)("stop", {
                                    offset: 1,
                                    stopColor: "#FFC156"
                                })]
                            })]
                        })]
                    })
                }
        },
        89018: function(e, t, n) {
            "use strict";
            n.d(t, {
                Z: function() {
                    return d
                }
            });
            var a = n(40108),
                i = n(62515),
                s = n(47382),
                r = n(15103),
                l = n(48583),
                o = function() {
                    var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : Date.now();
                    return (0, a.Qd)(e).getTime()
                },
                c = (0, r.cn)(0);

            function d() {
                return (0, l.Dv)(c) || o(s.Z.get(i.Cs))
            }
            c.onMount = function(e) {
                var t = setInterval(function() {
                    e(function(e) {
                        return 0 === e ? o(s.Z.get(i.Cs)) : o()
                    })
                }, 1e3);
                return function() {
                    clearInterval(t)
                }
            }
        },
        20259: function(e, t, n) {
            "use strict";
            n.d(t, {
                Z: function() {
                    return u
                }
            });
            var a = n(20567),
                i = n(14932),
                s = n(67294),
                r = n(5068),
                l = n(75645),
                o = n(63694),
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
                d = function(e) {
                    return l.x.get(e).then(function(e) {
                        return e.data
                    })
                };

            function u() {
                var e, t, n, l = (0, r.ZP)("v1/crypto", d, {
                        revalidateOnFocus: !0
                    }),
                    u = l.data,
                    h = l.isLoading,
                    p = (0, o.EC)().data,
                    _ = null == p ? void 0 : null === (e = p.user) || void 0 === e ? void 0 : e.currencies,
                    v = null == _ ? void 0 : null === (t = _.BRL) || void 0 === t ? void 0 : t.rate,
                    x = null == _ ? void 0 : null === (n = _.CAD) || void 0 === n ? void 0 : n.rate;
                return {
                    list: (0, s.useMemo)(function() {
                        if (!u) return {};
                        var e, t = null == u ? void 0 : null === (e = u.reduce) || void 0 === e ? void 0 : e.call(u, function(e, t) {
                            var n = t.code;
                            return (0, i._)((0, a._)({}, e), {
                                [n]: (0, i._)((0, a._)({}, t), {
                                    api: "url",
                                    id: n
                                })
                            })
                        }, c);
                        return t.pix.rate = v, t.picpay.rate = v, t.interac.rate = x, t
                    }, [u, x, v]),
                    isLoading: h
                }
            }
        },
        33226: function(e, t, n) {
            "use strict";
            n.d(t, {
                Z: function() {
                    return h
                }
            });
            var a = n(20567),
                i = n(14932),
                s = n(24043),
                r = n(85893);
            n(41113), n(46765), n(70937);
            var l = n(89736),
                o = n.n(l),
                c = n(52697),
                d = n(11163),
                u = n(67294);

            function h(e) {
                var t = e.children,
                    n = e.text,
                    l = e.placement,
                    h = e.size,
                    p = e.transparent,
                    _ = e.forceShow,
                    v = void 0 !== _ && _,
                    x = e.showMode,
                    m = void 0 !== x && x,
                    g = e.innerContent,
                    f = void 0 !== g && g,
                    w = e.extraClass,
                    j = void 0 !== w && w,
                    b = e.extraClasses,
                    y = void 0 !== b && b,
                    C = e.ignoreRouteChange,
                    N = void 0 !== C && C,
                    k = e.disabled,
                    R = e.divProps,
                    Z = (0, u.useRef)(null),
                    T = (0, u.useRef)(null),
                    z = (0, s._)((0, u.useState)(!0), 2),
                    M = z[0],
                    L = z[1],
                    S = (0, d.useRouter)(),
                    I = f || (0, r.jsx)("span", {
                        className: "".concat(o()["tippy-container"], " ").concat(j ? o()[j] : "", " ").concat(o()[void 0 === h ? "small" : h], " ").concat(p ? o().transparent : ""),
                        children: void 0 === n ? "" : n
                    });
                return (0, u.useEffect)(function() {
                    var e = function() {
                        N || L(!1)
                    };
                    if (v) return S.events.on("routeChangeStart", e),
                        function() {
                            S.events.off("routeChangeStart", e)
                        }
                }, [S, v, N]), (0, r.jsx)(c.ZP, {
                    placement: l,
                    duration: [200, 100],
                    arrow: !0,
                    animation: "shift-away-subtle",
                    visible: m ? M && v : void 0,
                    disabled: void 0 !== k && k,
                    content: m ? (0, r.jsx)("div", {
                        ref: T,
                        "data-tippy": !0,
                        children: I
                    }) : I,
                    theme: f ? "custom-theme-hover-register" : "custom-theme-hover",
                    onCreate: function(e) {
                        Z.current = e, e.popper.classList.add(m && y ? String(y) : "custom-on-hover-tippy-class")
                    },
                    popperOptions: m && {
                        modifiers: [{
                            name: "flip",
                            enabled: !1
                        }]
                    },
                    children: (0, r.jsx)("div", (0, i._)((0, a._)({}, R), {
                        children: t
                    }))
                })
            }
        },
        20166: function(e) {
            e.exports = {
                "golden-text": "ButtonSwitch_golden-text__j_qVI",
                "button-switch": "ButtonSwitch_button-switch__EZ8xM"
            }
        },
        89736: function(e) {
            e.exports = {
                "golden-text": "ToolTip_golden-text__7smhy",
                container: "ToolTip_container__7uaxp",
                "tippy-container": "ToolTip_tippy-container__TM_Oj",
                big: "ToolTip_big__oVaeD",
                small: "ToolTip_small__65MDf",
                "error-tooltip": "ToolTip_error-tooltip__x0fwO",
                "custom-arrow": "ToolTip_custom-arrow__LnTIB",
                tooltip: "ToolTip_tooltip__1QyCO",
                "flyout-container": "ToolTip_flyout-container__GCXa6",
                "inner-flyout-container": "ToolTip_inner-flyout-container__ewvko",
                "side-menu-nav": "ToolTip_side-menu-nav__ubBdp"
            }
        },
        45880: function(e) {
            e.exports = {
                "golden-text": "Races_golden-text__PU22S",
                "how-it-works": "Races_how-it-works____X2X",
                crown: "Races_crown__iR94l",
                races: "Races_races__tDbUI",
                content: "Races_content__lRP7k",
                table: "Races_table__peFz9",
                stats: "Races_stats__CBM0C",
                stat: "Races_stat__jSV0y",
                "next-stat": "Races_next-stat__DWDq_",
                gold: "Races_gold__fLnKC",
                "gold--shadow": "Races_gold--shadow__63S66",
                "gold-color": "Races_gold-color__co2GL",
                diamond: "Races_diamond__wYfoM",
                platinum: "Races_platinum__J7CF0",
                bronze: "Races_bronze__0EHaH",
                head: "Races_head__0cAuW",
                th: "Races_th__WUfsP",
                tbody: "Races_tbody__NPKsM",
                tr: "Races_tr__lW6NF",
                highlighted: "Races_highlighted__KqSqc",
                td: "Races_td__9rK3N",
                "rank-wrapper": "Races_rank-wrapper__gUEZD",
                rank: "Races_rank__I3ALK",
                banner: "Races_banner__yyqiB",
                heading: "Races_heading__IjM0I",
                "number-card-wrapper": "Races_number-card-wrapper__zSi0U",
                "number-card": "Races_number-card__4ak1E",
                number: "Races_number__EutDc",
                text: "Races_text__xw5Zg",
                "prize-row": "Races_prize-row__Hg8Q3",
                "prize-wrapper": "Races_prize-wrapper__Elvph",
                prize: "Races_prize__y8qgC"
            }
        }
    }
]);