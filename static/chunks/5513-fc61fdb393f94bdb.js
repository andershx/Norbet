(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [5513], {
        2420: function(e, t, n) {
            "use strict";
            n.d(t, {
                Z: function() {
                    return d
                }
            });
            var r = n(20567),
                a = n(85893),
                i = n(50028),
                s = n(40108),
                c = n(41664),
                o = n.n(c),
                l = n(39332),
                u = n(63694);

            function d(e) {
                var t = e.variant,
                    n = e.additionalQuery,
                    c = (0, i.ZP)(),
                    d = (0, u.EC)().userData,
                    m = (0, l.usePathname)();
                return (0, a.jsxs)(o(), {
                    href: {
                        pathname: m,
                        query: (0, r._)({
                            modal: "fairplay",
                            tab: d ? "seeds" : "verify"
                        }, n)
                    },
                    className: (0, s.cn)("flex items-center gap-1.5 text-[13px] [&_svg]:h-[16px] p-2.5 border border-solid border-transparent", "fair" === t && "bg-[#1a1d3d] rounded-md min-w-0 border border-white/10 p-2.5"),
                    children: [(0, a.jsxs)("svg", {
                        xmlns: "http://www.w3.org/2000/svg",
                        width: "14",
                        height: "16",
                        viewBox: "0 0 14 16",
                        fill: "none",
                        children: [(0, a.jsx)("g", {
                            clipPath: "url(#clip0_10751_28269)",
                            children: (0, a.jsx)("path", {
                                d: "M13.554 6.24468L13.0034 2.66602C9.00336 2.66602 7.00336 0.666016 7.00336 0.666016C7.00336 0.666016 5.00336 2.66602 1.00336 2.66602L0.452692 6.24468C0.223055 7.73534 0.458626 9.26054 1.1273 10.6125C1.79598 11.9644 2.86524 13.0772 4.18936 13.7993L7.00336 15.3327L9.81736 13.7993C11.1415 13.0772 12.2107 11.9644 12.8794 10.6125C13.5481 9.26054 13.7837 7.73534 13.554 6.24468ZM10.1414 6.47068L6.14136 10.4707C6.01634 10.5957 5.8468 10.6659 5.67003 10.6659C5.49325 10.6659 5.32371 10.5957 5.19869 10.4707L3.86536 9.13735C3.80169 9.07585 3.7509 9.00229 3.71596 8.92095C3.68102 8.83962 3.66263 8.75214 3.66186 8.66362C3.66109 8.5751 3.67796 8.48731 3.71148 8.40538C3.745 8.32345 3.7945 8.24901 3.8571 8.18642C3.91969 8.12382 3.99413 8.07432 4.07606 8.0408C4.15799 8.00728 4.24577 7.99041 4.33429 7.99118C4.42281 7.99195 4.51029 8.01034 4.59163 8.04528C4.67297 8.08022 4.74653 8.13101 4.80803 8.19468L5.67003 9.05668L9.19869 5.52802C9.32443 5.40658 9.49283 5.33938 9.66763 5.3409C9.84243 5.34242 10.0096 5.41253 10.1332 5.53614C10.2568 5.65974 10.327 5.82695 10.3285 6.00175C10.33 6.17655 10.2628 6.34495 10.1414 6.47068Z",
                                fill: "white"
                            })
                        }), (0, a.jsx)("defs", {
                            children: (0, a.jsx)("clipPath", {
                                id: "clip0_10751_28269",
                                children: (0, a.jsx)("rect", {
                                    width: "14",
                                    height: "16",
                                    fill: "white"
                                })
                            })
                        })]
                    }), c("text")]
                })
            }
        },
        96202: function(e, t, n) {
            "use strict";
            var r = n(20567),
                a = n(24043),
                i = n(39396),
                s = n(56900),
                c = n(67294),
                o = {
                    1: 1100,
                    2: 768,
                    3: 500,
                    4: 350
                };

            function l(e, t) {
                if (e > t[1]) return 0;
                var n = Object.keys(t).map(Number).sort(function(e, t) {
                        return e - t
                    }),
                    r = n[0],
                    a = !0,
                    i = !1,
                    s = void 0;
                try {
                    for (var c, o = n[Symbol.iterator](); !(a = (c = o.next()).done); a = !0) {
                        var l = c.value;
                        e <= t[l] && (r = l)
                    }
                } catch (e) {
                    i = !0, s = e
                } finally {
                    try {
                        a || null == o.return || o.return()
                    } finally {
                        if (i) throw s
                    }
                }
                return r
            }
            t.Z = function() {
                var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
                    t = e.breakpoints,
                    n = e.mobileModeSize,
                    u = void 0 === n ? o[2] : n,
                    d = e.targetElement,
                    m = void 0 === d ? "mainBody" : d,
                    f = e.deviceCheck,
                    h = void 0 !== f && f,
                    g = e.pixelDensity,
                    x = void 0 !== g && g,
                    p = i.ZP.state[i.ZP.EVENTS.MOBILE] || h && (0, s.r3)(),
                    v = (0, c.useMemo)(function() {
                        return (0, r._)({}, o, t)
                    }, []),
                    b = function() {
                        var e = 0;
                        if ("undefined" != typeof document) {
                            var t = document.getElementById(m);
                            t && (e = t.clientWidth + 8)
                        }
                        return e || (e = window.innerWidth), x && (e *= (0, s.x_)()), e
                    },
                    j = (0, a._)((0, c.useState)(function() {
                        if (p) return u;
                        var e = l(b(), v);
                        return 0 === e ? 0 : e
                    }), 2),
                    y = j[0],
                    w = j[1],
                    k = (0, c.useCallback)(function() {
                        var e = (document.getElementById(m) || document.body).clientWidth + 8;
                        x && (e *= (0, s.x_)());
                        var t = l(e, v),
                            n = 0 === t ? 0 : t;
                        w(function(e) {
                            return e !== n ? n : e
                        })
                    }, [m, x, v]);
                return (0, c.useEffect)(function() {
                    console.log("targetElement effect", m);
                    var e = document.getElementById(m);
                    if (e) {
                        var t = new ResizeObserver(function() {
                            k()
                        });
                        return t.observe(e), k(),
                            function() {
                                t.disconnect()
                            }
                    }
                }, [k, m, h]), y
            }
        },
        41709: function(e, t, n) {
            "use strict";
            n.d(t, {
                Z: function() {
                    return m
                }
            });
            var r = n(24043),
                a = n(4153),
                i = n(48583),
                s = n(11163),
                c = n(67294),
                o = n(41529),
                l = n(96202),
                u = {
                    LARGE: 1100
                },
                d = ["limbo", "dice"];

            function m() {
                var e = (0, l.Z)(),
                    t = (0, r._)((0, c.useState)(function() {
                        return window.innerWidth
                    }), 2),
                    n = t[0],
                    m = t[1],
                    f = (0, r._)((0, i.KO)(o.ce), 2),
                    h = f[0],
                    g = f[1],
                    x = (0, s.useRouter)(),
                    p = (0, c.useMemo)(function() {
                        var e = x.query.game;
                        return d.includes(e)
                    }, [x.query.game]);
                (0, c.useEffect)(function() {
                    var e = function() {
                        m(window.innerWidth)
                    };
                    return window.addEventListener("resize", e),
                        function() {
                            return window.removeEventListener("resize", e)
                        }
                }, []);
                var v = (0, c.useCallback)(function() {
                    p && g(function(e) {
                        var t = !e;
                        return a.Z.setLocalStorageValue("theaterMode", t), t
                    })
                }, [p, g]);
                return (0, c.useEffect)(function() {
                    var t = {
                            container: document.querySelector(".inner-body-container"),
                            body: document.querySelector(".body-content-container"),
                            frameContainer: document.querySelector("#game-frame-container"),
                            frame: document.querySelector("#game-frame-content")
                        },
                        r = x.asPath.includes("".concat(x.query.game));
                    if (e >= 2) {
                        Object.values(t).every(Boolean) && (t.container.style.maxWidth = "", t.container.style.padding = "", t.body.style.paddingTop = "", t.frameContainer.style.borderRadius = "", t.frameContainer.style.height = "", t.frame.style.height = "");
                        return
                    }
                    if (r && Object.values(t).every(Boolean) && p) {
                        var a = t.container,
                            i = t.body,
                            s = t.frameContainer,
                            c = t.frame;
                        return h ? (a.style.maxWidth = "1398px", a.style.padding = "0px", i.style.paddingTop = "0px", s.style.borderRadius = "0px", s.style.height = "calc(100vh - ".concat(n >= u.LARGE ? 67 : 134, "px)"), c.style.height = "calc(100% - ".concat(50, "px)")) : (a.style.maxWidth = "", a.style.padding = "", i.style.paddingTop = "", s.style.borderRadius = "", s.style.height = "", c.style.height = ""),
                            function() {
                                Object.values(t).every(Boolean) && (a.style.maxWidth = "", a.style.padding = "", i.style.paddingTop = "", s.style.borderRadius = "", s.style.height = "", c.style.height = "")
                            }
                    }
                }, [h, x.asPath, x.query.game, x.query.slug, p, e, n]), (0, c.useEffect)(function() {
                    g(a.Z.getLocalStorageValue("theaterMode") || !1)
                }, [x.query.game, g]), {
                    theaterMode: h,
                    toggleTheaterMode: v,
                    isAllowedGame: p
                }
            }
        },
        41529: function(e, t, n) {
            "use strict";
            n.d(t, {
                DK: function() {
                    return j
                },
                LE: function() {
                    return o
                },
                QA: function() {
                    return b
                },
                RT: function() {
                    return d
                },
                SS: function() {
                    return h
                },
                Yq: function() {
                    return u
                },
                _T: function() {
                    return c
                },
                _e: function() {
                    return l
                },
                af: function() {
                    return g
                },
                ce: function() {
                    return y
                },
                eW: function() {
                    return v
                },
                mR: function() {
                    return f
                },
                rP: function() {
                    return i
                },
                rZ: function() {
                    return m
                },
                xu: function() {
                    return s
                },
                yz: function() {
                    return p
                },
                zK: function() {
                    return a
                },
                zT: function() {
                    return x
                }
            });
            var r = n(15103),
                a = (0, r.cn)(!1),
                i = (0, r.cn)(!1),
                s = (0, r.cn)(),
                c = (0, r.cn)(!1),
                o = (0, r.cn)(!1),
                l = (0, r.cn)(!1),
                u = (0, r.cn)(!1),
                d = (0, r.cn)("manual"),
                m = (0, r.cn)({
                    mute: !1,
                    volume: 100
                });
            (0, r.cn)(!1);
            var f = (0, r.cn)(!1),
                h = (0, r.cn)({}),
                g = (0, r.cn)({
                    text: "",
                    active: !1
                }),
                x = (0, r.cn)({
                    text: "",
                    active: !1
                }),
                p = (0, r.cn)({}),
                v = (0, r.cn)({
                    instructions: ""
                });
            (0, r.cn)(!1);
            var b = (0, r.cn)(!0),
                j = (0, r.cn)(!1),
                y = (0, r.cn)(!1)
        },
        62775: function(e, t, n) {
            "use strict";
            var r = n(85893);
            n(67294), t.Z = function() {
                return (0, r.jsxs)("svg", {
                    xmlns: "http://www.w3.org/2000/svg",
                    width: "19",
                    height: "17",
                    fill: "none",
                    viewBox: "0 0 19 17",
                    children: [(0, r.jsx)("path", {
                        fill: "#fff",
                        d: "M10.34 1.053a.534.534 0 00-.568.064l-5.21 4.17h-2.49C1.48 5.286 1 5.766 1 6.356v4.286c0 .591.481 1.071 1.071 1.071h2.49l5.21 4.17a.54.54 0 00.568.062.534.534 0 00.303-.482V1.536a.538.538 0 00-.303-.483zm3.014 3.659a.537.537 0 00-.753.763c.81.799 1.256 1.874 1.256 3.025a4.215 4.215 0 01-1.256 3.026.536.536 0 00.753.76A5.269 5.269 0 0014.928 8.5a5.277 5.277 0 00-1.574-3.788z"
                    }), (0, r.jsx)("path", {
                        fill: "#fff",
                        d: "M14.866 3.202a.536.536 0 00-.755.761A6.343 6.343 0 0116 8.5a6.34 6.34 0 01-1.889 4.537.538.538 0 00-.003.758.539.539 0 00.758.002A7.4 7.4 0 0017.071 8.5a7.404 7.404 0 00-2.205-5.298z"
                    }), (0, r.jsx)("path", {
                        stroke: "#252A45",
                        strokeWidth: "2",
                        d: "M2.607 1.068L17.608 16.068"
                    }), (0, r.jsx)("path", {
                        stroke: "#fff",
                        strokeWidth: "1.5",
                        d: "M1.53 1.847L15.53 15.847"
                    })]
                })
            }
        },
        5729: function(e, t, n) {
            "use strict";
            var r = n(85893);
            n(67294), t.Z = function() {
                return (0, r.jsxs)("svg", {
                    xmlns: "http://www.w3.org/2000/svg",
                    width: "18",
                    height: "15",
                    fill: "none",
                    viewBox: "0 0 18 15",
                    children: [(0, r.jsx)("path", {
                        fill: "#fff",
                        d: "M10.319.053a.532.532 0 00-.566.064l-5.2 4.17H2.07C1.48 4.286 1 4.766 1 5.356v4.286c0 .591.48 1.071 1.069 1.071h2.484l5.2 4.17a.539.539 0 00.566.062.533.533 0 00.302-.482V.536a.538.538 0 00-.302-.483zm3.008 3.659a.535.535 0 10-.751.763A4.22 4.22 0 0113.828 7.5a4.22 4.22 0 01-1.252 3.026.537.537 0 00.375.916.532.532 0 00.376-.155 5.274 5.274 0 001.57-3.787 5.283 5.283 0 00-1.57-3.788z"
                    }), (0, r.jsx)("path", {
                        fill: "#fff",
                        d: "M14.835 2.202a.534.534 0 10-.754.761A6.35 6.35 0 0115.966 7.5c0 1.719-.67 3.33-1.885 4.537a.54.54 0 00-.003.758.537.537 0 00.757.002 7.408 7.408 0 002.2-5.297c0-2.006-.78-3.888-2.2-5.298z"
                    })]
                })
            }
        },
        88181: function(e, t, n) {
            "use strict";
            var r = n(24043),
                a = n(85893),
                i = n(62775),
                s = n(5729),
                c = n(21707),
                o = n.n(c),
                l = n(4153),
                u = n(67294);
            t.Z = (0, u.memo)(function() {
                var e = (0, r._)((0, u.useState)(!1), 2),
                    t = e[0],
                    n = e[1];
                return (0, u.useEffect)(function() {
                    l.Z.getLocalStorageValue("isMuted") && n(!0)
                }, []), (0, a.jsx)("button", {
                    className: o()["sound-setting"],
                    onClick: function() {
                        t ? (n(!1), l.Z.setLocalStorageValue("isMuted", !1)) : (n(!0), l.Z.setLocalStorageValue("isMuted", !0))
                    },
                    children: t ? (0, a.jsx)(i.Z, {}) : (0, a.jsx)(s.Z, {})
                })
            })
        },
        43232: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                __N_SSG: function() {
                    return l
                },
                default: function() {
                    return u
                }
            });
            var r = n(85893),
                a = n(23223),
                i = n(50028),
                s = n(6042),
                c = n(41664),
                o = n.n(c),
                l = !0;

            function u(e) {
                var t = e.content,
                    n = (0, i.El)({
                        page_not_found: {},
                        page_moved: {},
                        back_homepage: {},
                        home_page: {}
                    });
                return (0, r.jsxs)(r.Fragment, {
                    children: [(0, r.jsx)(s.default, {
                        meta: (null == t ? void 0 : t.meta) || {
                            title: "404 – Rainbet"
                        }
                    }), (0, r.jsxs)("div", {
                        className: "flex flex-col items-center justify-center h-full md:p-[87px] py-[100px] relative transition-all duration-200 ease-in-out gap-[95px] overflow-hidden",
                        children: [(0, r.jsx)("h1", {
                            className: "md:text-[350px] text-[200px] bg-gradient-to-b from-[#1c213c] from-[14.57%] to-transparent to-[87.8%] bg-clip-text text-transparent leading-[84%]",
                            children: "404"
                        }), (0, r.jsxs)("div", {
                            className: "text-center flex-col flex items-center gap-4",
                            children: [(0, r.jsx)("h4", {
                                className: "text-2xl text-white",
                                children: n.page_not_found
                            }), (0, r.jsxs)("div", {
                                className: "flex flex-col gap-0",
                                children: [(0, r.jsx)("span", {
                                    className: "text-sm text-[#666c88]",
                                    children: n.page_moved
                                }), (0, r.jsx)("span", {
                                    className: "text-sm text-[#666c88]",
                                    children: n.back_homepage
                                })]
                            }), (0, r.jsx)(o(), {
                                href: "/",
                                children: (0, r.jsx)(a.z, {
                                    variant: "green",
                                    children: n.home_page
                                })
                            })]
                        }), (0, r.jsx)("div", {
                            className: "hidden md:block h-[396px] w-full flex-shrink-0 rounded-[50%] bg-gradient-to-b from-[rgba(105,110,135,0.08)] from-[0.06%] via-[rgba(105,110,135,0.02)] via-[19.8%] to-transparent to-[37.98%] absolute md:-bottom-[80px] -bottom-[100px] -z-10"
                        })]
                    })]
                })
            }
        },
        25513: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                __N_SSP: function() {
                    return P
                },
                default: function() {
                    return q
                },
                gameImageMap: function() {
                    return L
                }
            });
            var r = n(85893),
                a = n(5475),
                i = n(80059),
                s = n(41709),
                c = n(24043),
                o = n(11163),
                l = n(67294),
                u = n(46588),
                d = n(88181),
                m = n(96993),
                f = n.n(m),
                h = n(2420);

            function g() {
                var e = (0, o.useRouter)(),
                    t = (0, c._)((0, l.useState)({}), 2),
                    n = t[0],
                    a = t[1];
                return (0, l.useEffect)(function() {
                    e.query.game && a(function(e) {
                        switch (e) {
                            case "crash":
                                return {
                                    title: "Crash"
                                };
                            case "case-opening":
                                return {
                                    title: "Case Open"
                                };
                            case "gold-chests":
                                return {
                                    title: "Gold Chests"
                                };
                            case "dice":
                                return {
                                    title: "Dice"
                                };
                            case "plinko":
                                return {
                                    title: "Plinko"
                                };
                            case "roulette":
                                return {
                                    title: "Roulette"
                                };
                            case "keno":
                                return {
                                    title: "Keno"
                                };
                            case "mines":
                                return {
                                    title: "Mines"
                                };
                            default:
                                if (e) return {
                                    title: "slots"
                                };
                                return {
                                    title: "No Game"
                                }
                        }
                    }(e.query.game))
                }, [e]), (0, r.jsx)(r.Fragment, {
                    children: "case-opening" !== e.query.game ? (null == n ? void 0 : n.title) === "slots" || "keno" === e.query.game || "mines-game" === e.query.game ? (0, r.jsx)("div", {
                        style: {
                            display: "none"
                        }
                    }) : (0, r.jsxs)("div", {
                        className: f()["games-heading"],
                        children: [(0, r.jsxs)("div", {
                            className: f()["games-heading-title"],
                            children: [(0, r.jsx)(u.Z, {
                                code: null == n ? void 0 : n.title
                            }), (0, r.jsx)("h1", {
                                children: null == n ? void 0 : n.title
                            })]
                        }), (0, r.jsxs)("div", {
                            className: f()["game-heading-nav"],
                            children: [(null == n ? void 0 : n.title) === "Dice" && (0, r.jsx)(d.Z, {}), (null == n ? void 0 : n.title) === "Plinko" && (0, r.jsx)(d.Z, {}), (null == n ? void 0 : n.title) === "Roulette" && (0, r.jsx)(d.Z, {}), (null == n ? void 0 : n.title) === "Keno" && (0, r.jsx)(d.Z, {}), (null == n ? void 0 : n.title) === "Mines" && (0, r.jsx)(d.Z, {}), (0, r.jsx)(h.Z, {})]
                        })]
                    }) : (0, r.jsx)("div", {
                        className: "".concat(f()["games-heading"], " ").concat(f()["case-open-top"]),
                        children: (0, r.jsxs)("div", {
                            className: f()["games-heading-title"],
                            children: [(0, r.jsx)(u.Z, {
                                code: null == n ? void 0 : n.title
                            }), (0, r.jsx)("h1", {
                                children: null == n ? void 0 : n.title
                            })]
                        })
                    })
                })
            }
            var x = n(6042),
                p = n(40108),
                v = n(43232),
                b = n(5152),
                j = n.n(b),
                y = function() {
                    return (0, r.jsx)("div", {
                        className: "relative inset-0 bg-primary-background-color h-[calc(100svh-100px)]",
                        children: (0, r.jsx)("div", {
                            className: "flex justify-center items-center w-full h-full",
                            children: (0, r.jsx)(a.k, {
                                className: "h-14 w-14 animate-spin text-white"
                            })
                        })
                    })
                },
                w = j()(function() {
                    return Promise.all([n.e(6969), n.e(4894), n.e(610)]).then(n.bind(n, 70610))
                }, {
                    loadableGenerated: {
                        webpack: function() {
                            return [70610]
                        }
                    },
                    ssr: !1,
                    loading: function() {
                        return (0, r.jsx)(y, {})
                    }
                }),
                k = j()(function() {
                    return Promise.all([n.e(6240), n.e(1782), n.e(6969), n.e(4894), n.e(2153), n.e(7750), n.e(7536), n.e(5107), n.e(6139), n.e(7305), n.e(3901), n.e(1766), n.e(7454), n.e(4861), n.e(6381), n.e(4235), n.e(1114), n.e(381), n.e(3978)]).then(n.bind(n, 83978))
                }, {
                    loadableGenerated: {
                        webpack: function() {
                            return [83978]
                        }
                    },
                    ssr: !1,
                    loading: function() {
                        return (0, r.jsx)(y, {})
                    }
                }),
                _ = j()(function() {
                    return Promise.all([n.e(6240), n.e(1782), n.e(6969), n.e(4894), n.e(2153), n.e(3501), n.e(7536), n.e(5107), n.e(6139), n.e(7305), n.e(3901), n.e(1766), n.e(7454), n.e(9276), n.e(6182), n.e(4861), n.e(6381), n.e(4235), n.e(1114), n.e(381), n.e(7397), n.e(6473)]).then(n.bind(n, 16473))
                }, {
                    loadableGenerated: {
                        webpack: function() {
                            return [16473]
                        }
                    },
                    ssr: !1,
                    loading: function() {
                        return (0, r.jsx)(y, {})
                    }
                }),
                C = j()(function() {
                    return Promise.all([n.e(6816), n.e(1766), n.e(5421)]).then(n.bind(n, 15421))
                }, {
                    loadableGenerated: {
                        webpack: function() {
                            return [15421]
                        }
                    },
                    ssr: !1,
                    loading: function() {
                        return (0, r.jsx)(y, {})
                    }
                }),
                Z = j()(function() {
                    return Promise.all([n.e(1782), n.e(9243), n.e(7904)]).then(n.bind(n, 77904))
                }, {
                    loadableGenerated: {
                        webpack: function() {
                            return [77904]
                        }
                    },
                    ssr: !1,
                    loading: function() {
                        return (0, r.jsx)(y, {})
                    }
                }),
                N = j()(function() {
                    return Promise.all([n.e(6240), n.e(4390), n.e(7665), n.e(1782), n.e(6969), n.e(4894), n.e(2153), n.e(9997), n.e(7536), n.e(5107), n.e(6139), n.e(7305), n.e(3901), n.e(1766), n.e(4861), n.e(6381), n.e(4235), n.e(1114), n.e(5897), n.e(4300)]).then(n.bind(n, 23714))
                }, {
                    loadableGenerated: {
                        webpack: function() {
                            return [23714]
                        }
                    },
                    ssr: !1,
                    loading: function() {
                        return (0, r.jsx)(y, {})
                    }
                }),
                M = j()(function() {
                    return Promise.all([n.e(7665), n.e(6240), n.e(6169), n.e(4772), n.e(1766), n.e(7454), n.e(1114), n.e(5897), n.e(2966), n.e(5383)]).then(n.bind(n, 65383))
                }, {
                    loadableGenerated: {
                        webpack: function() {
                            return [65383]
                        }
                    },
                    ssr: !1,
                    loading: function() {
                        return (0, r.jsx)(y, {})
                    }
                }),
                S = j()(function() {
                    return Promise.all([n.e(6240), n.e(4324), n.e(1782), n.e(6969), n.e(4894), n.e(2153), n.e(6476), n.e(7536), n.e(5107), n.e(6139), n.e(7305), n.e(3901), n.e(1766), n.e(4861), n.e(6381), n.e(4235), n.e(1114), n.e(5897), n.e(9420)]).then(n.bind(n, 51088))
                }, {
                    loadableGenerated: {
                        webpack: function() {
                            return [51088]
                        }
                    },
                    ssr: !1,
                    loading: function() {
                        return (0, r.jsx)(y, {})
                    }
                }),
                E = j()(function() {
                    return Promise.all([n.e(6240), n.e(1782), n.e(6969), n.e(4894), n.e(2153), n.e(7750), n.e(7536), n.e(5107), n.e(6139), n.e(7305), n.e(3901), n.e(1766), n.e(7454), n.e(4861), n.e(6381), n.e(4235), n.e(1114), n.e(381), n.e(6036)]).then(n.bind(n, 66036))
                }, {
                    loadableGenerated: {
                        webpack: function() {
                            return [66036]
                        }
                    },
                    ssr: !1,
                    loading: function() {
                        return (0, r.jsx)(y, {})
                    }
                }),
                P = !0,
                L = {
                    "case-battles": "".concat("https://cdn.rainbet.com", "/games/case-battles.png"),
                    "case-opening": "".concat("https://cdn.rainbet.com", "/games/case-open.png"),
                    crash: "".concat("https://cdn.rainbet.com", "/games/crash.png"),
                    dice: "".concat("https://cdn.rainbet.com", "/games/dice.png"),
                    plinko: "".concat("https://cdn.rainbet.com", "/games/plinko.png"),
                    roulette: "".concat("https://cdn.rainbet.com", "/games/roulette.png"),
                    keno: "".concat("https://cdn.rainbet.com", "/games/keno.png"),
                    mines: "".concat("https://cdn.rainbet.com", "/games/mines.png"),
                    blackjack: "".concat("https://cdn.rainbet.com", "/games/blackjack.png"),
                    limbo: "".concat("https://cdn.rainbet.com", "/games/limbo.png")
                },
                q = (0, l.memo)(function(e) {
                    var t = e.content,
                        n = e.gameDetails,
                        a = e.gameUrl,
                        c = e.cases,
                        o = e.meta,
                        l = e.caseBattlesData,
                        u = e.requestTime,
                        d = e.minesCheckData,
                        m = {
                            "case-opening": (0, r.jsxs)(r.Fragment, {
                                children: [(0, r.jsx)(g, {}), (0, r.jsx)(w, {
                                    gameDetails: o,
                                    casesData: c,
                                    specialCases: !1
                                })]
                            }),
                            "case-battles": (0, r.jsxs)(r.Fragment, {
                                children: [(0, r.jsx)(g, {}), (0, r.jsx)(Z, {
                                    gameDetails: o,
                                    casesData: c,
                                    specialCases: !1,
                                    caseBattlesDataInitial: l
                                })]
                            }),
                            dice: (0, r.jsx)(r.Fragment, {
                                children: (0, r.jsx)(k, {})
                            }),
                            plinko: (0, r.jsx)(r.Fragment, {
                                children: (0, r.jsx)(_, {})
                            }),
                            roulette: (0, r.jsxs)(r.Fragment, {
                                children: [(0, r.jsx)(g, {}), (0, r.jsx)(C, {
                                    requestTime: u
                                })]
                            }),
                            keno: (0, r.jsx)(r.Fragment, {
                                children: (0, r.jsx)(N, {})
                            }),
                            blackjack: (0, r.jsx)(r.Fragment, {
                                children: (0, r.jsx)(S, {})
                            }),
                            "mines-game": (0, r.jsx)(r.Fragment, {
                                children: (0, r.jsx)(M, {
                                    minesCheckData: d
                                })
                            }),
                            limbo: (0, r.jsx)(r.Fragment, {
                                children: (0, r.jsx)(E, {})
                            })
                        }[a] || (0, r.jsx)(v.default, {}),
                        f = (0, s.Z)(),
                        h = f.theaterMode,
                        b = f.isAllowedGame;
                    return (0, r.jsxs)(r.Fragment, {
                        children: [(0, r.jsx)(x.default, {
                            meta: null == t ? void 0 : t.meta
                        }), m, a && L["mines-game" === a ? "mines" : a] && (0, r.jsx)(r.Fragment, {
                            children: (0, r.jsx)("div", {
                                className: (0, p.cn)("pb-10 max-w-[1200px] mx-auto", {
                                    "[@media(min-width:768px)]:px-4": h && b
                                }),
                                children: (0, r.jsx)(i.Z, {
                                    gameContent: t,
                                    gameDetails: n,
                                    type: "original"
                                })
                            })
                        })]
                    })
                })
        },
        21707: function(e) {
            e.exports = {
                "golden-text": "GlobalSoundManager_golden-text__UPyRg",
                "sound-setting": "GlobalSoundManager_sound-setting__d7q_m"
            }
        }
    }
]);