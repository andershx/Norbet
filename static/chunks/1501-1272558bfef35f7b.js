(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [1501], {
        35665: function(e, t, n) {
            "use strict";
            n.d(t, {
                Z: function() {
                    return i
                }
            });
            var r = n(20567),
                a = n(85893),
                s = n(26001);

            function i(e) {
                return (0, a.jsx)(s.Z, (0, r._)({
                    code: "ltc"
                }, e))
            }
        },
        28154: function(e, t, n) {
            "use strict";
            n.d(t, {
                Z: function() {
                    return i
                }
            });
            var r = n(20567),
                a = n(14932),
                s = n(85893);

            function i(e) {
                return (0, s.jsxs)("svg", (0, a._)((0, r._)({
                    width: "14",
                    height: "14",
                    viewBox: "0 0 14 14",
                    fill: "none",
                    xmlns: "http://www.w3.org/2000/svg"
                }, e), {
                    children: [(0, s.jsx)("path", {
                        d: "M13.6697 5.19637L9.13504 4.78684L7.33374 0.713894C7.20761 0.428702 6.79236 0.428702 6.66627 0.713894L4.86497 4.78681L0.330322 5.19637C0.0127904 5.22503 -0.11551 5.6096 0.124037 5.81453L3.54544 8.74126L2.54416 13.0673C2.47404 13.3702 2.81002 13.6079 3.08418 13.4494L7 11.1853L10.9158 13.4494C11.19 13.6079 11.5259 13.3702 11.4559 13.0673L10.4545 8.74126L13.876 5.81453C14.1155 5.6096 13.9872 5.22503 13.6697 5.19637Z",
                        fill: "#FFDC64"
                    }), (0, s.jsx)("path", {
                        d: "M7.98874 2.19499L7.33371 0.713894C7.20758 0.428702 6.79233 0.428702 6.66623 0.713894L4.86493 4.78681L0.330322 5.19637C0.0127904 5.22503 -0.11551 5.6096 0.124037 5.81453L3.54544 8.74126L2.54416 13.0673C2.47404 13.3702 2.81002 13.6079 3.08418 13.4494L3.60535 13.148C4.45975 7.76247 6.86174 3.80907 7.98874 2.19499Z",
                        fill: "#FFC442"
                    })]
                }))
            }
            n(67294)
        },
        59921: function(e, t, n) {
            "use strict";
            n.d(t, {
                Z: function() {
                    return i
                }
            });
            var r = n(20567),
                a = n(14932),
                s = n(85893);

            function i(e) {
                return (0, s.jsx)("svg", (0, a._)((0, r._)({
                    width: "14",
                    height: "14",
                    viewBox: "0 0 14 14",
                    fill: "none",
                    xmlns: "http://www.w3.org/2000/svg"
                }, e), {
                    children: (0, s.jsx)("path", {
                        d: "M8.67773 4.98926L8.79688 5.25879L9.08984 5.28516L13.2822 5.66309L10.1299 8.36133L9.89941 8.55859L9.96777 8.85449L10.8945 12.8594L7.25 10.752L7 10.6074L6.75 10.752L3.10449 12.8594L4.03223 8.85449L4.10059 8.55859L3.87012 8.36133L0.716797 5.66309L4.91016 5.28516L5.20312 5.25781L5.32227 4.98926L7 1.19531L8.67773 4.98926Z",
                        stroke: "white",
                        strokeOpacity: "0.2"
                    })
                }))
            }
            n(67294)
        },
        52551: function(e, t, n) {
            "use strict";
            n.d(t, {
                Z: function() {
                    return u
                }
            });
            var r = n(20567),
                a = n(14932),
                s = n(85893),
                i = n(56900),
                o = n(89019),
                l = n.n(o),
                c = n(67294),
                d = function(e) {
                    switch (e) {
                        case "qrCode":
                            return "lds-ring-qr-code";
                        case "fee":
                            return "lds-ring-fee";
                        case "twoFactor":
                            return "lds-ring-two-factor";
                        case "button":
                            return "lds-ring-button";
                        case "slots":
                            return "lds-ring-slots";
                        case "inPlay":
                            return "in-play-ring-slots";
                        default:
                            return "lds-ring"
                    }
                };

            function u(e) {
                var t = e.type,
                    n = e.style,
                    o = (0, c.useMemo)(function() {
                        return d(t)
                    }, [t]);
                return (0, s.jsxs)("div", (0, a._)((0, r._)({
                    style: n
                }, (0, i.dh)(l(), o, "spinner")), {
                    children: [(0, s.jsx)("div", {}), (0, s.jsx)("div", {}), (0, s.jsx)("div", {}), (0, s.jsx)("div", {})]
                }))
            }
        },
        51979: function(e, t, n) {
            "use strict";
            n.d(t, {
                Q: function() {
                    return m
                }
            });
            var r = n(24043),
                a = n(85893),
                s = n(23223),
                i = n(42619),
                o = n(50028),
                l = n(40108),
                c = n(25675),
                d = n.n(c),
                u = n(41664),
                p = n.n(u),
                f = n(67294);

            function m(e) {
                var t = e.isNewDesignPage,
                    n = void 0 !== t && t,
                    c = (0, i.G)().preferences,
                    u = (0, f.useRef)(null),
                    m = (0, r._)((0, f.useState)(!1), 2),
                    x = m[0],
                    h = m[1],
                    g = (0, r._)((0, f.useState)(0), 2),
                    v = g[0],
                    _ = g[1],
                    w = (0, r._)((0, f.useState)(0), 2),
                    b = w[0],
                    y = w[1],
                    N = (0, o.ZP)(),
                    j = (0, o.El)({
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
                return (0, f.useEffect)(function() {
                    var e = u.current;
                    if (e) {
                        var t = function(t) {
                                h(!0), _(t.pageX - e.offsetLeft), y(e.scrollLeft)
                            },
                            n = function(t) {
                                if (x) {
                                    var n = (t.pageX - e.offsetLeft - v) * 2;
                                    e.scrollLeft = b - n
                                }
                            },
                            r = function() {
                                return h(!1)
                            };
                        return e.addEventListener("mousedown", t), e.addEventListener("mousemove", n), e.addEventListener("mouseup", r), e.addEventListener("mouseleave", r),
                            function() {
                                e.removeEventListener("mousedown", t), e.removeEventListener("mousemove", n), e.removeEventListener("mouseup", r), e.removeEventListener("mouseleave", r)
                            }
                    }
                }, [x, v, b]), (0, a.jsx)("section", {
                    className: (0, l.cn)(n ? "" : "bg-[#151A32]", "py-5"),
                    children: (0, a.jsx)("div", {
                        className: (0, l.cn)("max-w-[1200px] w-full mx-auto px-4 relative", n && "px-0"),
                        children: (0, a.jsx)("div", {
                            ref: u,
                            className: (0, l.cn)("flex gap-4 overflow-x-auto scroll-smooth snap-x snap-mandatory cursor-grab", x ? "select-none" : ""),
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
                                    className: (0, l.cn)("relative px-5 py-4 overflow-hidden rounded-md", "[@media(min-width:1300px)]:w-[calc((100%-32px)/3)]", "[@media(max-width:1300px)]:min-w-[calc(50%-8px)]", "[@media(max-width:767px)]:min-w-full", "border border-solid border-[#1C7AC9] min-h-[158px] flex-shrink-0 snap-center", c.chatOpen && !c.sidebarMinified && "[@media(min-width:1301px)_and_(max-width:1800px)]:min-w-[calc(50%-8px)]"),
                                    children: [(0, a.jsx)("div", {
                                        className: "absolute inset-0 z-0",
                                        children: (0, a.jsx)(d(), {
                                            src: e.bg,
                                            alt: "CasinoBanner background",
                                            fill: !0,
                                            quality: 100,
                                            priority: !0,
                                            className: "object-cover object-center",
                                            sizes: "(max-width: 768px) 100vw, 50vw"
                                        })
                                    }), "/Images/banner_nip.png" !== e.bg && (0, a.jsxs)("div", {
                                        className: (0, l.cn)("flex flex-col justify-between h-full gap-[18px] z-10", "/Images/banner_nip.png" === e.bg && "hidden"),
                                        children: [(0, a.jsxs)("div", {
                                            className: "flex flex-col gap-1 z-10",
                                            children: [(0, a.jsx)("div", {
                                                className: "text-[13px] font-medium bg-gradient-to-b from-[#38A4FF] to-[#85C7FF] bg-clip-text text-transparent pb-[2px] leading-tight",
                                                children: N(e.title)
                                            }), (0, a.jsx)("div", {
                                                className: "text-xl font-semibold text-white tracking-[0%] leading-[1.2]",
                                                children: j[e.description]
                                            })]
                                        }), (0, a.jsxs)("div", {
                                            className: "flex items-center gap-2",
                                            children: [(0, a.jsx)(p(), {
                                                href: e.url,
                                                children: (0, a.jsx)(s.z, {
                                                    variant: "blue",
                                                    className: "h-[36px] min-h-[36px] px-[18px] z-10",
                                                    children: N(e.button)
                                                })
                                            }), "slots_tournament" === e.title && (0, a.jsx)(d(), {
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
        51316: function(e, t, n) {
            "use strict";
            n.d(t, {
                PZ: function() {
                    return y
                },
                Vq: function() {
                    return x
                },
                cZ: function() {
                    return v
                },
                cN: function() {
                    return w
                },
                fK: function() {
                    return _
                },
                $N: function() {
                    return b
                },
                TX: function() {
                    return f
                },
                b0: function() {
                    return m
                }
            });
            var r = n(34788),
                a = n(12796),
                s = n(20567),
                i = n(14932),
                o = n(47702),
                l = n(85893),
                c = n(23223),
                d = n(40108),
                u = n(12854),
                p = n(67294),
                f = p.forwardRef(function(e, t) {
                    var n = e.children,
                        r = e.className,
                        a = (0, o._)(e, ["children", "className"]);
                    return (0, l.jsx)("span", (0, i._)((0, s._)({
                        ref: t,
                        className: (0, d.cn)("absolute w-px h-px p-0 overflow-hidden whitespace-nowrap border-0", "clip-[rect(0,0,0,0)]", r)
                    }, a), {
                        children: n
                    }))
                });
            f.displayName = "VisuallyHidden";
            var m = function(e) {
                    var t = (0, r._)({}, (0, a._)(e));
                    return (0, l.jsx)("svg", (0, i._)((0, s._)({
                        width: "14",
                        height: "14",
                        viewBox: "0 0 14 14",
                        fill: "none",
                        xmlns: "http://www.w3.org/2000/svg"
                    }, t), {
                        children: (0, l.jsx)("path", {
                            d: "M8.40994 6.99994L12.7099 2.70994C12.8982 2.52164 13.004 2.26624 13.004 1.99994C13.004 1.73364 12.8982 1.47825 12.7099 1.28994C12.5216 1.10164 12.2662 0.99585 11.9999 0.99585C11.7336 0.99585 11.4782 1.10164 11.2899 1.28994L6.99994 5.58994L2.70994 1.28994C2.52164 1.10164 2.26624 0.99585 1.99994 0.99585C1.73364 0.99585 1.47824 1.10164 1.28994 1.28994C1.10164 1.47825 0.995847 1.73364 0.995847 1.99994C0.995847 2.26624 1.10164 2.52164 1.28994 2.70994L5.58994 6.99994L1.28994 11.2899C1.19621 11.3829 1.12182 11.4935 1.07105 11.6154C1.02028 11.7372 0.994141 11.8679 0.994141 11.9999C0.994141 12.132 1.02028 12.2627 1.07105 12.3845C1.12182 12.5064 1.19621 12.617 1.28994 12.7099C1.3829 12.8037 1.4935 12.8781 1.61536 12.9288C1.73722 12.9796 1.86793 13.0057 1.99994 13.0057C2.13195 13.0057 2.26266 12.9796 2.38452 12.9288C2.50638 12.8781 2.61698 12.8037 2.70994 12.7099L6.99994 8.40994L11.2899 12.7099C11.3829 12.8037 11.4935 12.8781 11.6154 12.9288C11.7372 12.9796 11.8679 13.0057 11.9999 13.0057C12.132 13.0057 12.2627 12.9796 12.3845 12.9288C12.5064 12.8781 12.617 12.8037 12.7099 12.7099C12.8037 12.617 12.8781 12.5064 12.9288 12.3845C12.9796 12.2627 13.0057 12.132 13.0057 11.9999C13.0057 11.8679 12.9796 11.7372 12.9288 11.6154C12.8781 11.4935 12.8037 11.3829 12.7099 11.2899L8.40994 6.99994Z",
                            fill: "white"
                        })
                    }))
                },
                x = u.fC;
            u.xz;
            var h = u.h_;
            u.x8;
            var g = p.forwardRef(function(e, t) {
                var n = e.className,
                    r = (0, o._)(e, ["className"]);
                return (0, l.jsx)(u.aV, (0, s._)({
                    ref: t,
                    className: (0, d.cn)("fixed inset-0 z-[5001] bg-black/60 w-[100vw] h-[100vh]", n)
                }, r))
            });
            g.displayName = u.aV.displayName;
            var v = p.forwardRef(function(e, t) {
                var n = e.className,
                    r = e.children,
                    a = (0, o._)(e, ["className", "children"]);
                return (0, l.jsxs)(h, {
                    children: [(0, l.jsx)(g, {}), (0, l.jsx)("div", {
                        className: "fixed z-[5002] inset-0 flex items-center justify-center",
                        children: (0, l.jsx)(u.VY, (0, i._)((0, s._)({
                            ref: t,
                            className: (0, d.cn)("relative w-full md:w-full", (0, d.cn)("[@media(max-width:550px)]:h-dvh", "[@media(min-width:551px)]:h-auto", "[@media(min-width:551px)]:max-h-[90vh]", "[@media(min-width:551px)]:max-w-max"), "border bg-[#191f3b] p-0", "[@media(min-width:551px)]:rounded-lg", "outline-none ring-0 shadow-none", "duration-200", "data-[state=closed]:animate-zoom-out-95", "data-[state=open]:animate-zoom-in-95", "[@media(max-width:550px)]:pt-[max(26px,env(safe-area-inset-top))]", "[@media(max-width:550px)]:pb-[max(0px,env(safe-area-inset-bottom))]", n)
                        }, a), {
                            children: r
                        }))
                    })]
                })
            });
            v.displayName = u.VY.displayName;
            var _ = function(e) {
                var t = e.className,
                    n = (0, o._)(e, ["className"]);
                return (0, l.jsx)("div", (0, s._)({
                    className: (0, d.cn)("h-[60px]", t)
                }, n))
            };
            _.displayName = "DialogHeader";
            var w = function(e) {
                var t = e.className,
                    n = (0, o._)(e, ["className"]);
                return (0, l.jsx)("div", (0, s._)({
                    className: (0, d.cn)("flex flex-col-reverse sm:flex-row sm:justify-end sm:space-x-2", t)
                }, n))
            };
            w.displayName = "DialogFooter";
            var b = p.forwardRef(function(e, t) {
                var n = e.className,
                    r = (0, o._)(e, ["className"]);
                return (0, l.jsx)(u.Dx, (0, s._)({
                    ref: t,
                    className: (0, d.cn)("text-base font-semibold leading-none tracking-tight", n)
                }, r))
            });
            b.displayName = u.Dx.displayName, p.forwardRef(function(e, t) {
                var n = e.className,
                    r = (0, o._)(e, ["className"]);
                return (0, l.jsx)(u.dk, (0, s._)({
                    ref: t,
                    className: (0, d.cn)("text-sm text-muted-foreground", n)
                }, r))
            }).displayName = u.dk.displayName;
            var y = function(e) {
                var t = e.className,
                    n = (0, o._)(e, ["className"]);
                return (0, l.jsxs)(c.z, (0, i._)((0, s._)({
                    variant: "clean",
                    className: (0, d.cn)("absolute right-6 px-0 top-6 rounded-full z-10 w-[30px] h-[30px] min-h-[30px] grow-0 [&_svg]:size-[8px] bg-[#7C83B1]/[0.08] border-[#7C83B1]/[0.08] hover:bg-[#7C83B1]/[0.15] hover:border-[#7C83B1]/[0.15]", t)
                }, n), {
                    children: [(0, l.jsx)(m, {
                        className: "text-[#FFFFFF]/75"
                    }), (0, l.jsx)("span", {
                        className: "sr-only",
                        children: "Close"
                    })]
                }))
            }
        },
        57634: function(e, t, n) {
            "use strict";
            n.d(t, {
                I: function() {
                    return c
                },
                W: function() {
                    return d
                }
            });
            var r = n(20567),
                a = n(14932),
                s = n(47702),
                i = n(85893),
                o = n(40108),
                l = n(67294),
                c = (0, l.forwardRef)(function(e, t) {
                    var n = e.className,
                        a = e.type,
                        l = (0, s._)(e, ["className", "type"]);
                    return (0, i.jsx)("input", (0, r._)({
                        type: a,
                        className: (0, o.cn)("w-full h-[50px] rounded-md px-5 font-medium text-sm flex items-center overflow-hidden", "bg-[#2E3656] border border-solid border-[#7C83B1]/20", "text-white outline-none", "duration-300 transition-all", "aria-[readonly=true]:opacity-50", "aria-[invalid=true]:!border-[#EC4848] aria-[invalid=true]:focus:border-[#EC4848]", "aria-[readonly=false]:focus:border-primary-stroke-color", "focus:placeholder:opacity-0", n),
                        ref: t
                    }, l))
                });
            c.displayName = "Input";
            var d = (0, l.forwardRef)(function(e, t) {
                var n = e.className,
                    c = e.icon,
                    d = e.type,
                    u = e.inputClassName,
                    p = (0, s._)(e, ["className", "icon", "type", "inputClassName"]),
                    f = (0, l.useId)(),
                    m = "".concat(f, "-").concat(p.name);
                return (0, i.jsxs)("label", {
                    htmlFor: m,
                    className: (0, o.cn)("relative w-full flex h-[50px] items-center gap-1 rounded-md px-3 bg-[#2E3656] border border-solid border-[#7C83B1]/20", c && "pl-11", n),
                    children: [c && (0, i.jsx)("div", {
                        className: "absolute left-3",
                        children: c
                    }), (0, i.jsx)("input", (0, a._)((0, r._)({
                        id: m,
                        placeholder: "0",
                        type: d,
                        ref: t
                    }, p), {
                        className: (0, o.cn)("w-full outline-none duration-75 transition-all aria-[readonly=false]:focus:border-primary-stroke-color overflow-hidden rounded-none font-medium bg-transparent text-white text-sm aria-[readonly=true]:opacity-50 aria-[invalid=true]:!border-[#EC4848] aria-[invalid=true]:focus:border-[#EC4848] inline-flex items-center", "leading-none", "focus:placeholder:opacity-0", u)
                    }))]
                })
            });
            d.displayName = "InputWithIcon"
        },
        36626: function(e, t, n) {
            "use strict";
            n.d(t, {
                Bw: function() {
                    return b
                },
                DI: function() {
                    return v
                },
                Ph: function() {
                    return g
                },
                Ql: function() {
                    return y
                },
                i4: function() {
                    return w
                },
                ki: function() {
                    return _
                },
                tO: function() {
                    return x
                },
                v4: function() {
                    return h
                }
            });
            var r = n(34788),
                a = n(12796),
                s = n(20567),
                i = n(14932),
                o = n(47702),
                l = n(85893),
                c = n(28154),
                d = n(59921),
                u = n(40108),
                p = n(72215),
                f = n(67294),
                m = n(23223),
                x = function(e) {
                    var t = (0, r._)({}, (0, a._)(e));
                    return (0, l.jsxs)("svg", (0, i._)((0, s._)({
                        width: "10",
                        height: "18",
                        viewBox: "0 0 10 18",
                        fill: "none",
                        xmlns: "http://www.w3.org/2000/svg"
                    }, t), {
                        children: [(0, l.jsx)("g", {
                            "clip-path": "url(#clip0_29800_145162)",
                            children: (0, l.jsx)("path", {
                                d: "M8.75 16.5L1.25 9L8.75 1.5",
                                stroke: "#8788A5",
                                strokeWidth: "1.5",
                                strokeLinecap: "round",
                                strokeLinejoin: "round"
                            })
                        }), (0, l.jsx)("defs", {
                            children: (0, l.jsx)("clipPath", {
                                id: "clip0_29800_145162",
                                children: (0, l.jsx)("rect", {
                                    width: "18",
                                    height: "10",
                                    fill: "white",
                                    transform: "translate(10) rotate(90)"
                                })
                            })
                        })]
                    }))
                },
                h = function(e) {
                    var t = (0, r._)({}, (0, a._)(e));
                    return (0, l.jsx)("svg", (0, i._)((0, s._)({
                        xmlns: "http://www.w3.org/2000/svg",
                        fill: "none",
                        viewBox: "0 0 24 24",
                        strokeWidth: 1.5,
                        stroke: "currentColor"
                    }, t), {
                        children: (0, l.jsx)("path", {
                            strokeLinecap: "round",
                            strokeLinejoin: "round",
                            d: "m19.5 8.25-7.5 7.5-7.5-7.5"
                        })
                    }))
                },
                g = p.fC,
                v = p.ZA,
                _ = p.B4,
                w = f.forwardRef(function(e, t) {
                    var n = e.className,
                        r = e.children,
                        a = e.showChevron,
                        c = e.showGlassEffect,
                        d = (0, o._)(e, ["className", "children", "showChevron", "showGlassEffect"]);
                    return (0, l.jsxs)(p.xz, (0, i._)((0, s._)({
                        ref: t,
                        className: (0, u.cn)((0, m.d)({
                            variant: "clean",
                            className: "relative flex flex-1 items-center justify-between w-full h-[38px] min-h-[38px] rounded-md pl-4 pr-2 text-[13px] font-medium bg-[#7C83B1]/10 border border-[#373E60] border-solid overflow-hidden group [&_svg]:size-3 [&_svg]:shrink-0"
                        }), n)
                    }, d), {
                        children: [r, (void 0 === a || a) && (0, l.jsx)(p.JO, {
                            asChild: !0,
                            children: (0, l.jsx)(h, {
                                className: "w-[14px] transition-transform duration-200 group-data-[state=open]:rotate-180"
                            })
                        }), void 0 !== c && c && (0, l.jsx)("div", {
                            className: "absolute inset-0 opacity-0 -translate-x-full group-hover:opacity-100 group-hover:translate-x-full group-hover:animate-shine transition-none"
                        })]
                    }))
                });
            w.displayName = p.xz.displayName;
            var b = f.forwardRef(function(e, t) {
                var n = e.className,
                    r = e.viewPortClassName,
                    a = e.children,
                    c = e.position,
                    d = void 0 === c ? "popper" : c,
                    f = (0, o._)(e, ["className", "viewPortClassName", "children", "position"]);
                return (0, l.jsx)(p.h_, {
                    children: (0, l.jsx)(p.VY, (0, i._)((0, s._)({
                        ref: t,
                        className: (0, u.cn)("relative z-[5004] max-h-96 min-w-[8rem] overflow-hidden border bg-[#171d3b] border-[#262b42] border-solid rounded-md text-popover-foreground data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2", "popper" === d && "data-[side=bottom]:translate-y-1 data-[side=left]:-translate-x-1 data-[side=right]:translate-x-1 data-[side=top]:-translate-y-1", n),
                        position: d
                    }, f), {
                        children: (0, l.jsx)(p.l_, {
                            className: (0, u.cn)("p-0", "popper" === d && "h-[var(--radix-select-trigger-height)] w-[calc(var(--radix-select-trigger-width)-2px)]", r),
                            children: a
                        })
                    }))
                })
            });
            b.displayName = p.VY.displayName, f.forwardRef(function(e, t) {
                var n = e.className,
                    r = (0, o._)(e, ["className"]);
                return (0, l.jsx)(p.__, (0, s._)({
                    ref: t,
                    className: (0, u.cn)("py-1.5 pl-8 pr-2 text-sm font-semibold", n)
                }, r))
            }).displayName = p.__.displayName;
            var y = f.forwardRef(function(e, t) {
                var n = e.className,
                    r = e.children,
                    a = e.withStars,
                    f = (0, o._)(e, ["className", "children", "withStars"]);
                return (0, l.jsxs)(p.ck, (0, i._)((0, s._)({
                    ref: t,
                    className: (0, u.cn)("relative flex w-full cursor-pointer hover:bg-[#212747]/40 h-[42px] select-none items-center py-1.5 px-2 text-[13px] outline-none data-[disabled]:pointer-events-none data-[disabled]:opacity-50 rounded-md [&_span]:text-[#ced1df] [&_span]:hover:text-white", n)
                }, f), {
                    children: [void 0 !== a && a && (0, l.jsxs)("span", {
                        className: "absolute right-2 flex h-3.5 w-3.5 items-center justify-center",
                        children: [(0, l.jsx)(p.wU, {
                            children: (0, l.jsx)(c.Z, {
                                className: "size-[14px]"
                            })
                        }), (0, l.jsx)(d.Z, {
                            className: "size-[14px]"
                        })]
                    }), (0, l.jsx)(p.eT, {
                        children: r
                    })]
                }))
            });
            y.displayName = p.ck.displayName, f.forwardRef(function(e, t) {
                var n = e.className,
                    r = (0, o._)(e, ["className"]);
                return (0, l.jsx)(p.Z0, (0, s._)({
                    ref: t,
                    className: (0, u.cn)("-mx-1 my-1 h-px bg-muted", n)
                }, r))
            }).displayName = p.Z0.displayName
        },
        93955: function(e, t, n) {
            "use strict";
            var r = n(11010),
                a = n(24043),
                s = n(97582),
                i = n(85893),
                o = n(51979),
                l = n(23223),
                c = n(57634),
                d = n(39377),
                u = n(14954),
                p = n(25106),
                f = n(50028),
                m = n(46415),
                x = n(63694),
                h = n(6042),
                g = n(88626),
                v = n(63381);
            n(35338), n(96068);
            var _ = n(25675),
                w = n.n(_),
                b = n(41664),
                y = n.n(b),
                N = n(39332),
                j = n(67294),
                C = {
                    favorites: {
                        defaultSortBy: "recommended",
                        assets: {
                            icon: "/Images/favorites-icon.svg",
                            empty: "/Images/favorites-empty-icon.svg",
                            decoration: "/Images/favorites-decoration.svg"
                        },
                        translations: {
                            title: "favorites",
                            noDataMessage: "no_favorites_to_display",
                            loginMessage: "log_in_access_favorites"
                        }
                    },
                    "recently-played": {
                        defaultSortBy: "last_played",
                        assets: {
                            icon: "/Images/recently-played-icon.svg",
                            empty: "/Images/recently-played-empty-icon.svg",
                            decoration: "/Images/recently-played-decoration.svg"
                        },
                        translations: {
                            title: "recently_played",
                            noDataMessage: "no_recent_games_to_display",
                            loginMessage: "log_in_access_recent_games"
                        }
                    }
                };
            t.Z = function(e) {
                var t = e.type,
                    n = e.initialData,
                    _ = e.content,
                    b = e.providerList,
                    L = e.isUnauthorized,
                    k = (0, a._)((0, j.useState)(C[t].defaultSortBy), 2),
                    D = k[0],
                    E = k[1],
                    I = (0, a._)((0, j.useState)(""), 2),
                    R = I[0],
                    z = I[1],
                    S = (0, a._)((0, j.useState)([]), 2),
                    M = S[0],
                    F = S[1],
                    Z = (0, a._)((0, j.useState)(n), 2),
                    B = Z[0],
                    P = Z[1],
                    O = (0, a._)((0, j.useState)(b), 2),
                    A = O[0],
                    V = O[1],
                    W = (0, a._)((0, j.useState)(!1), 2),
                    T = W[0],
                    q = W[1],
                    G = (0, m.Z)({
                        breakPointThree: 600
                    }),
                    H = (0, N.usePathname)(),
                    Y = (0, x.EC)().token,
                    $ = (0, f.ZP)(),
                    U = (0, j.useMemo)(function() {
                        if (0 === B.length) return [];
                        var e = null == B ? void 0 : B.filter(function(e) {
                            return e.name.toLowerCase().includes(R.toLowerCase())
                        }).filter(function(e) {
                            return 0 === M.length || M.includes(e.producer)
                        });
                        switch (D) {
                            case "a-z":
                                e = e.sort(function(e, t) {
                                    return e.name.localeCompare(t.name)
                                });
                                break;
                            case "z-a":
                                e = e.sort(function(e, t) {
                                    return t.name.localeCompare(e.name)
                                });
                                break;
                            case "last_played":
                                e = e.sort(function(e, t) {
                                    return new Date(t.last_played).getTime() - new Date(e.last_played).getTime()
                                });
                                break;
                            case "release":
                                e = e.sort(function(e, t) {
                                    return new Date(t.release_date).getTime() - new Date(e.release_date).getTime()
                                });
                                break;
                            default:
                                e = e.sort(function(e, t) {
                                    return t.recommended - e.recommended
                                })
                        }
                        return e
                    }, [R, D, M, B]);
                return (0, j.useEffect)(function() {
                    P(n), V(b)
                }, [n, b]), (0, j.useEffect)(function() {
                    E(C[t].defaultSortBy), F([]), z("")
                }, [t]), (0, j.useEffect)(function() {
                    function e() {
                        return (e = (0, r._)(function() {
                            var e, n, r, i;
                            return (0, s.Jh)(this, function(s) {
                                switch (s.label) {
                                    case 0:
                                        if (!Y || !L) return [2];
                                        q(!0), s.label = 1;
                                    case 1:
                                        return s.trys.push([1, 3, 4, 5]), e = "favorites" === t ? "v1/user/favorites" : "v1/user/recent-games", [4, g.Z.get(e, {
                                            headers: {
                                                Authorization: "Bearer ".concat(Y)
                                            }
                                        })];
                                    case 2:
                                        return P(r = (n = s.sent()).data.games ? n.data.games : n.data), V(Object.entries((null == r ? void 0 : r.sort(function(e, t) {
                                            return e.producer.localeCompare(t.producer)
                                        }).reduce(function(e, t) {
                                            return e[t.producer] ? e[t.producer]++ : e[t.producer] = 1, e
                                        }, {})) || {}).map(function(e) {
                                            var t = (0, a._)(e, 2),
                                                n = t[0];
                                            return {
                                                value: n,
                                                label: n,
                                                count: t[1]
                                            }
                                        })), [3, 5];
                                    case 3:
                                        return i = s.sent(), (0, v.H)("Error fetching data after login:", i), [3, 5];
                                    case 4:
                                        return q(!1), [7];
                                    case 5:
                                        return [2]
                                }
                            })
                        })).apply(this, arguments)
                    }! function() {
                        e.apply(this, arguments)
                    }()
                }, [Y, t, L]), (0, i.jsxs)("div", {
                    className: "px-4",
                    children: [(0, i.jsx)(h.default, {
                        meta: null == _ ? void 0 : _.meta
                    }), (0, i.jsxs)("div", {
                        className: "relative w-full h-full z-10",
                        children: [(0, i.jsx)(o.Q, {
                            isNewDesignPage: !0
                        }), (0, i.jsx)("div", {
                            className: "absolute left-1/2 transform -translate-x-1/2 pl-[50vw] pr-[50vw] h-full bg-[#151a32] top-0 z-[-1]"
                        })]
                    }), (0, i.jsxs)("div", {
                        className: "relative w-full h-[72px] flex",
                        children: [(0, i.jsx)("div", {
                            className: "absolute left-1/2 transform -translate-x-1/2 pl-[50vw] pr-[50vw] h-full bg-[#1a203c] border border-solid border-[#242845] overflow-hidden",
                            children: (0, i.jsx)(w(), {
                                src: "/Images/static-page-decoration.png",
                                alt: "Decoration",
                                fill: !0,
                                className: "object-cover"
                            })
                        }), (0, i.jsx)("div", {
                            className: "absolute right-[0px] [@media(min-width:500px)]:right-[45px] top-[-66px] w-[205px] h-[205px] mix-blend-luminosity opacity-70",
                            children: (0, i.jsx)(w(), {
                                src: C[t].assets.decoration,
                                alt: "Decoration",
                                fill: !0,
                                className: "object-contain"
                            })
                        }), (0, i.jsxs)("div", {
                            className: "flex items-center relative gap-[18px] ",
                            children: [(0, i.jsx)("div", {
                                className: "w-[32px] h-[32px] relative",
                                children: (0, i.jsx)(w(), {
                                    src: C[t].assets.icon,
                                    alt: "Bottom content",
                                    fill: !0,
                                    className: "object-contain"
                                })
                            }), (0, i.jsx)("h1", {
                                className: "text-shadow text-[1.5rem] font-bold",
                                children: (null == _ ? void 0 : _.heading) ? null == _ ? void 0 : _.heading : $(C[t].translations.title)
                            })]
                        })]
                    }), (0, i.jsx)("div", {
                        className: "w-full flex flex-col justify-between rounded-[6px] border-none bg-none py-5 ".concat(G ? "flex-col gap-[14px] w-full" : ""),
                        children: (0, i.jsxs)("div", {
                            className: "w-full flex gap-[14px] justify-between relative flex-col xl:flex-row xl:gap-[14px] xl:justify-between ",
                            children: [(0, i.jsx)(c.W, {
                                className: "h-[46px] xl:max-w-[660px] cursor-text focus-within:border-[#2099ff] transition duration-300",
                                inputClassName: "cursor-text text-[13px] placeholder-[rgba(232,229,255,0.75)]",
                                name: "search",
                                value: R,
                                onChange: function(e) {
                                    return z(e.target.value)
                                },
                                placeholder: $("search"),
                                icon: (0, i.jsx)(w(), {
                                    src: "/Images/search-icon.svg",
                                    alt: "Search Icon",
                                    width: 20,
                                    height: 20,
                                    className: "object-contain"
                                })
                            }), (0, i.jsxs)("div", {
                                className: "flex gap-[14px] flex-col w-full  md:flex-row xl:max-w-[530px]",
                                children: [(0, i.jsx)(u.Z, {
                                    providerList: A,
                                    providerState: M,
                                    setProvider: F
                                }), (0, i.jsx)(p.Z, {
                                    sortBy: D,
                                    setSortBy: E,
                                    options: ["recently-played" === t && {
                                        value: "last_played",
                                        label: String($("last_played"))
                                    }, {
                                        value: "recommended",
                                        label: String($("recommended"))
                                    }, {
                                        value: "release",
                                        label: String($("release"))
                                    }, {
                                        value: "a-z",
                                        label: $("alphabetical") + " (A-Z)"
                                    }, {
                                        value: "z-a",
                                        label: $("alphabetical") + " (Z-A)"
                                    }]
                                })]
                            })]
                        })
                    }), (0, i.jsx)("div", {
                        className: "w-full relative",
                        children: (0, i.jsx)("div", {
                            className: "bg-white/5 h-[1px] absolute left-1/2 transform -translate-x-1/2 pl-[50vw] pr-[50vw]"
                        })
                    }), (0, i.jsxs)("div", {
                        className: "mt-[32px] ",
                        children: [U.length || T ? (0, i.jsx)(d.default, {
                            isStatic: !0,
                            initialData: {
                                games: U,
                                count: U.length
                            },
                            searchSection: !1,
                            heading: void 0,
                            showGhostSlots: T
                        }) : (0, i.jsx)(i.Fragment, {
                            children: (0, i.jsx)("div", {
                                className: "w-full h-[233px] bg-[#1f2542] flex justify-center items-center border border-solid border-[#282f58] rounded-[6px]",
                                children: (0, i.jsxs)("div", {
                                    className: "flex flex-col items-center gap-6",
                                    children: [(0, i.jsx)("div", {
                                        className: "w-[70px] h-[70px] relative",
                                        children: (0, i.jsx)(w(), {
                                            src: C[t].assets.empty,
                                            alt: "Empty Image",
                                            fill: !0,
                                            className: "object-contain"
                                        })
                                    }), (0, i.jsx)("p", {
                                        className: "text-[14px] ",
                                        children: $(Y ? C[t].translations.noDataMessage : C[t].translations.loginMessage)
                                    }), !Y && (0, i.jsx)(y(), {
                                        href: {
                                            pathname: H,
                                            query: {
                                                modal: "auth",
                                                tab: "login"
                                            }
                                        },
                                        shallow: !0,
                                        className: "w-[100px]",
                                        children: (0, i.jsx)(l.z, {
                                            variant: "clean",
                                            className: "h-[39px] !min-h-[39px] w-full px-2 bg-[#353E64] border-[#434C73] hover:bg-[#3F4879] hover:border-[#6973AF] transition-colors duration-150",
                                            children: $("login")
                                        })
                                    })]
                                })
                            })
                        }), (0, i.jsx)("div", {
                            className: "w-full pt-14 pb-8",
                            children: (0, i.jsx)("div", {
                                className: "bg-white/5 h-[1px]"
                            })
                        })]
                    })]
                })
            }
        },
        83973: function(e, t, n) {
            "use strict";
            n.d(t, {
                M9: function() {
                    return u
                },
                Xo: function() {
                    return p
                },
                gG: function() {
                    return f
                }
            });
            var r = n(20567),
                a = n(47702),
                s = n(85893),
                i = n(63381),
                o = n(67294),
                l = n(86896),
                c = n(50028),
                d = {},
                u = (0, o.memo)(function(e) {
                    var t = e.as,
                        n = void 0 === t ? "p" : t,
                        s = e.name,
                        i = e.replacements,
                        l = void 0 === i ? d : i,
                        c = (0, a._)(e, ["as", "name", "replacements"]),
                        u = m(),
                        p = (0, o.useMemo)(function() {
                            var e = u(s, l);
                            return (0, r._)({}, "string" == typeof e ? {
                                dangerouslySetInnerHTML: {
                                    __html: e
                                }
                            } : {
                                children: e
                            }, c)
                        }, [u, s, l, c]);
                    return (0, o.useMemo)(function() {
                        return (0, o.createElement)(n, p)
                    }, [n, p])
                }),
                p = function() {
                    return (0, o.useCallback)(function(e) {
                        return (0, s.jsx)(u, (0, r._)({}, e))
                    }, [])
                },
                f = function() {
                    for (var e = arguments.length, t = Array(e), n = 0; n < e; n++) t[n] = arguments[n];
                    var r = m();
                    return (0, o.useMemo)(function() {
                        return t.reduce(function(e, t) {
                            return e[t] = r(t), e
                        }, {})
                    }, [r, t])
                };

            function m() {
                var e = (0, l.Z)(),
                    t = e.formatMessage,
                    n = e.messages;
                return (0, o.useCallback)(function(e, a, s) {
                    try {
                        var o = (0, r._)({}, c.us, a),
                            l = e.replace(/\./g, "_");
                        if (l in n) return t({
                            id: l
                        }, o, s);
                        return (0, i.ZK)('Could not find id "'.concat(l, '" \n')), l
                    } catch (t) {
                        return (0, i.ZK)(t), e
                    }
                }, [t, n])
            }
            t.ZP = m
        },
        89019: function(e) {
            e.exports = {
                spinner: "LoadingSpinner_spinner__ma_Em",
                "lds-ring": "LoadingSpinner_lds-ring__uRh7U",
                "lds-ring-qr-code": "LoadingSpinner_lds-ring-qr-code__IEoEG",
                "lds-ring-two-factor": "LoadingSpinner_lds-ring-two-factor__eUkvS",
                "lds-ring-fee": "LoadingSpinner_lds-ring-fee__0lhYs",
                "lds-ring-button": "LoadingSpinner_lds-ring-button__pJc4E",
                "lds-ring-slots": "LoadingSpinner_lds-ring-slots__DvAxP",
                "in-play-ring-slots": "LoadingSpinner_in-play-ring-slots__VyHqq"
            }
        },
        12854: function(e, t, n) {
            "use strict";
            n.d(t, {
                Dx: function() {
                    return er
                },
                VY: function() {
                    return en
                },
                aV: function() {
                    return et
                },
                dk: function() {
                    return ea
                },
                fC: function() {
                    return J
                },
                h_: function() {
                    return ee
                },
                x8: function() {
                    return es
                },
                xz: function() {
                    return Q
                }
            });
            var r = n(67294),
                a = n(36206),
                s = n(28771),
                i = n(25360),
                o = n(91276),
                l = n(77342),
                c = n(46063),
                d = n(95420),
                u = n(42651),
                p = n(29115),
                f = n(75320),
                m = n(27552),
                x = n(71930),
                h = n(23541),
                g = n(88426),
                v = n(85893),
                _ = "Dialog",
                [w, b] = (0, i.b)(_),
                [y, N] = w(_),
                j = e => {
                    let {
                        __scopeDialog: t,
                        children: n,
                        open: a,
                        defaultOpen: s,
                        onOpenChange: i,
                        modal: c = !0
                    } = e, d = r.useRef(null), u = r.useRef(null), [p, f] = (0, l.T)({
                        prop: a,
                        defaultProp: s ? ? !1,
                        onChange: i,
                        caller: _
                    });
                    return (0, v.jsx)(y, {
                        scope: t,
                        triggerRef: d,
                        contentRef: u,
                        contentId: (0, o.M)(),
                        titleId: (0, o.M)(),
                        descriptionId: (0, o.M)(),
                        open: p,
                        onOpenChange: f,
                        onOpenToggle: r.useCallback(() => f(e => !e), [f]),
                        modal: c,
                        children: n
                    })
                };
            j.displayName = _;
            var C = "DialogTrigger",
                L = r.forwardRef((e, t) => {
                    let {
                        __scopeDialog: n,
                        ...r
                    } = e, i = N(C, n), o = (0, s.e)(t, i.triggerRef);
                    return (0, v.jsx)(f.WV.button, {
                        type: "button",
                        "aria-haspopup": "dialog",
                        "aria-expanded": i.open,
                        "aria-controls": i.contentId,
                        "data-state": H(i.open),
                        ...r,
                        ref: o,
                        onClick: (0, a.M)(e.onClick, i.onOpenToggle)
                    })
                });
            L.displayName = C;
            var k = "DialogPortal",
                [D, E] = w(k, {
                    forceMount: void 0
                }),
                I = e => {
                    let {
                        __scopeDialog: t,
                        forceMount: n,
                        children: a,
                        container: s
                    } = e, i = N(k, t);
                    return (0, v.jsx)(D, {
                        scope: t,
                        forceMount: n,
                        children: r.Children.map(a, e => (0, v.jsx)(p.z, {
                            present: n || i.open,
                            children: (0, v.jsx)(u.h, {
                                asChild: !0,
                                container: s,
                                children: e
                            })
                        }))
                    })
                };
            I.displayName = k;
            var R = "DialogOverlay",
                z = r.forwardRef((e, t) => {
                    let n = E(R, e.__scopeDialog),
                        {
                            forceMount: r = n.forceMount,
                            ...a
                        } = e,
                        s = N(R, e.__scopeDialog);
                    return s.modal ? (0, v.jsx)(p.z, {
                        present: r || s.open,
                        children: (0, v.jsx)(M, { ...a,
                            ref: t
                        })
                    }) : null
                });
            z.displayName = R;
            var S = (0, g.Z8)("DialogOverlay.RemoveScroll"),
                M = r.forwardRef((e, t) => {
                    let {
                        __scopeDialog: n,
                        ...r
                    } = e, a = N(R, n);
                    return (0, v.jsx)(x.Z, {
                        as: S,
                        allowPinchZoom: !0,
                        shards: [a.contentRef],
                        children: (0, v.jsx)(f.WV.div, {
                            "data-state": H(a.open),
                            ...r,
                            ref: t,
                            style: {
                                pointerEvents: "auto",
                                ...r.style
                            }
                        })
                    })
                }),
                F = "DialogContent",
                Z = r.forwardRef((e, t) => {
                    let n = E(F, e.__scopeDialog),
                        {
                            forceMount: r = n.forceMount,
                            ...a
                        } = e,
                        s = N(F, e.__scopeDialog);
                    return (0, v.jsx)(p.z, {
                        present: r || s.open,
                        children: s.modal ? (0, v.jsx)(B, { ...a,
                            ref: t
                        }) : (0, v.jsx)(P, { ...a,
                            ref: t
                        })
                    })
                });
            Z.displayName = F;
            var B = r.forwardRef((e, t) => {
                    let n = N(F, e.__scopeDialog),
                        i = r.useRef(null),
                        o = (0, s.e)(t, n.contentRef, i);
                    return r.useEffect(() => {
                        let e = i.current;
                        if (e) return (0, h.Ry)(e)
                    }, []), (0, v.jsx)(O, { ...e,
                        ref: o,
                        trapFocus: n.open,
                        disableOutsidePointerEvents: !0,
                        onCloseAutoFocus: (0, a.M)(e.onCloseAutoFocus, e => {
                            e.preventDefault(), n.triggerRef.current ? .focus()
                        }),
                        onPointerDownOutside: (0, a.M)(e.onPointerDownOutside, e => {
                            let t = e.detail.originalEvent,
                                n = 0 === t.button && !0 === t.ctrlKey;
                            (2 === t.button || n) && e.preventDefault()
                        }),
                        onFocusOutside: (0, a.M)(e.onFocusOutside, e => e.preventDefault())
                    })
                }),
                P = r.forwardRef((e, t) => {
                    let n = N(F, e.__scopeDialog),
                        a = r.useRef(!1),
                        s = r.useRef(!1);
                    return (0, v.jsx)(O, { ...e,
                        ref: t,
                        trapFocus: !1,
                        disableOutsidePointerEvents: !1,
                        onCloseAutoFocus: t => {
                            e.onCloseAutoFocus ? .(t), t.defaultPrevented || (a.current || n.triggerRef.current ? .focus(), t.preventDefault()), a.current = !1, s.current = !1
                        },
                        onInteractOutside: t => {
                            e.onInteractOutside ? .(t), t.defaultPrevented || (a.current = !0, "pointerdown" !== t.detail.originalEvent.type || (s.current = !0));
                            let r = t.target;
                            n.triggerRef.current ? .contains(r) && t.preventDefault(), "focusin" === t.detail.originalEvent.type && s.current && t.preventDefault()
                        }
                    })
                }),
                O = r.forwardRef((e, t) => {
                    let {
                        __scopeDialog: n,
                        trapFocus: a,
                        onOpenAutoFocus: i,
                        onCloseAutoFocus: o,
                        ...l
                    } = e, u = N(F, n), p = r.useRef(null), f = (0, s.e)(t, p);
                    return (0, m.EW)(), (0, v.jsxs)(v.Fragment, {
                        children: [(0, v.jsx)(d.M, {
                            asChild: !0,
                            loop: !0,
                            trapped: a,
                            onMountAutoFocus: i,
                            onUnmountAutoFocus: o,
                            children: (0, v.jsx)(c.XB, {
                                role: "dialog",
                                id: u.contentId,
                                "aria-describedby": u.descriptionId,
                                "aria-labelledby": u.titleId,
                                "data-state": H(u.open),
                                ...l,
                                ref: f,
                                onDismiss: () => u.onOpenChange(!1)
                            })
                        }), (0, v.jsxs)(v.Fragment, {
                            children: [(0, v.jsx)(X, {
                                titleId: u.titleId
                            }), (0, v.jsx)(K, {
                                contentRef: p,
                                descriptionId: u.descriptionId
                            })]
                        })]
                    })
                }),
                A = "DialogTitle",
                V = r.forwardRef((e, t) => {
                    let {
                        __scopeDialog: n,
                        ...r
                    } = e, a = N(A, n);
                    return (0, v.jsx)(f.WV.h2, {
                        id: a.titleId,
                        ...r,
                        ref: t
                    })
                });
            V.displayName = A;
            var W = "DialogDescription",
                T = r.forwardRef((e, t) => {
                    let {
                        __scopeDialog: n,
                        ...r
                    } = e, a = N(W, n);
                    return (0, v.jsx)(f.WV.p, {
                        id: a.descriptionId,
                        ...r,
                        ref: t
                    })
                });
            T.displayName = W;
            var q = "DialogClose",
                G = r.forwardRef((e, t) => {
                    let {
                        __scopeDialog: n,
                        ...r
                    } = e, s = N(q, n);
                    return (0, v.jsx)(f.WV.button, {
                        type: "button",
                        ...r,
                        ref: t,
                        onClick: (0, a.M)(e.onClick, () => s.onOpenChange(!1))
                    })
                });

            function H(e) {
                return e ? "open" : "closed"
            }
            G.displayName = q;
            var Y = "DialogTitleWarning",
                [$, U] = (0, i.k)(Y, {
                    contentName: F,
                    titleName: A,
                    docsSlug: "dialog"
                }),
                X = ({
                    titleId: e
                }) => {
                    let t = U(Y),
                        n = `\`${t.contentName}\` requires a \`${t.titleName}\` for the component to be accessible for screen reader users.

If you want to hide the \`${t.titleName}\`, you can wrap it with our VisuallyHidden component.

For more information, see https://radix-ui.com/primitives/docs/components/${t.docsSlug}`;
                    return r.useEffect(() => {
                        e && !document.getElementById(e) && console.error(n)
                    }, [n, e]), null
                },
                K = ({
                    contentRef: e,
                    descriptionId: t
                }) => {
                    let n = U("DialogDescriptionWarning"),
                        a = `Warning: Missing \`Description\` or \`aria-describedby={undefined}\` for {${n.contentName}}.`;
                    return r.useEffect(() => {
                        let n = e.current ? .getAttribute("aria-describedby");
                        t && n && !document.getElementById(t) && console.warn(a)
                    }, [a, e, t]), null
                },
                J = j,
                Q = L,
                ee = I,
                et = z,
                en = Z,
                er = V,
                ea = T,
                es = G
        }
    }
]);