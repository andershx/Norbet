(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [7671], {
        41580: function(e, t, n) {
            (window.__NEXT_P = window.__NEXT_P || []).push(["/new-releases", function() {
                return n(4149)
            }])
        },
        35665: function(e, t, n) {
            "use strict";
            n.d(t, {
                Z: function() {
                    return s
                }
            });
            var r = n(20567),
                a = n(85893),
                i = n(26001);

            function s(e) {
                return (0, a.jsx)(i.Z, (0, r._)({
                    code: "ltc"
                }, e))
            }
        },
        28154: function(e, t, n) {
            "use strict";
            n.d(t, {
                Z: function() {
                    return s
                }
            });
            var r = n(20567),
                a = n(14932),
                i = n(85893);

            function s(e) {
                return (0, i.jsxs)("svg", (0, a._)((0, r._)({
                    width: "14",
                    height: "14",
                    viewBox: "0 0 14 14",
                    fill: "none",
                    xmlns: "http://www.w3.org/2000/svg"
                }, e), {
                    children: [(0, i.jsx)("path", {
                        d: "M13.6697 5.19637L9.13504 4.78684L7.33374 0.713894C7.20761 0.428702 6.79236 0.428702 6.66627 0.713894L4.86497 4.78681L0.330322 5.19637C0.0127904 5.22503 -0.11551 5.6096 0.124037 5.81453L3.54544 8.74126L2.54416 13.0673C2.47404 13.3702 2.81002 13.6079 3.08418 13.4494L7 11.1853L10.9158 13.4494C11.19 13.6079 11.5259 13.3702 11.4559 13.0673L10.4545 8.74126L13.876 5.81453C14.1155 5.6096 13.9872 5.22503 13.6697 5.19637Z",
                        fill: "#FFDC64"
                    }), (0, i.jsx)("path", {
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
                    return s
                }
            });
            var r = n(20567),
                a = n(14932),
                i = n(85893);

            function s(e) {
                return (0, i.jsx)("svg", (0, a._)((0, r._)({
                    width: "14",
                    height: "14",
                    viewBox: "0 0 14 14",
                    fill: "none",
                    xmlns: "http://www.w3.org/2000/svg"
                }, e), {
                    children: (0, i.jsx)("path", {
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
                i = n(85893),
                s = n(56900),
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
                return (0, i.jsxs)("div", (0, a._)((0, r._)({
                    style: n
                }, (0, s.dh)(l(), o, "spinner")), {
                    children: [(0, i.jsx)("div", {}), (0, i.jsx)("div", {}), (0, i.jsx)("div", {}), (0, i.jsx)("div", {})]
                }))
            }
        },
        51979: function(e, t, n) {
            "use strict";
            n.d(t, {
                Q: function() {
                    return f
                }
            });
            var r = n(24043),
                a = n(85893),
                i = n(23223),
                s = n(42619),
                o = n(50028),
                l = n(40108),
                c = n(25675),
                d = n.n(c),
                u = n(41664),
                p = n.n(u),
                m = n(67294);

            function f(e) {
                var t = e.isNewDesignPage,
                    n = void 0 !== t && t,
                    c = (0, s.G)().preferences,
                    u = (0, m.useRef)(null),
                    f = (0, r._)((0, m.useState)(!1), 2),
                    x = f[0],
                    v = f[1],
                    h = (0, r._)((0, m.useState)(0), 2),
                    g = h[0],
                    b = h[1],
                    w = (0, r._)((0, m.useState)(0), 2),
                    _ = w[0],
                    j = w[1],
                    N = (0, o.ZP)(),
                    y = (0, o.El)({
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
                return (0, m.useEffect)(function() {
                    var e = u.current;
                    if (e) {
                        var t = function(t) {
                                v(!0), b(t.pageX - e.offsetLeft), j(e.scrollLeft)
                            },
                            n = function(t) {
                                if (x) {
                                    var n = (t.pageX - e.offsetLeft - g) * 2;
                                    e.scrollLeft = _ - n
                                }
                            },
                            r = function() {
                                return v(!1)
                            };
                        return e.addEventListener("mousedown", t), e.addEventListener("mousemove", n), e.addEventListener("mouseup", r), e.addEventListener("mouseleave", r),
                            function() {
                                e.removeEventListener("mousedown", t), e.removeEventListener("mousemove", n), e.removeEventListener("mouseup", r), e.removeEventListener("mouseleave", r)
                            }
                    }
                }, [x, g, _]), (0, a.jsx)("section", {
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
                                                children: y[e.description]
                                            })]
                                        }), (0, a.jsxs)("div", {
                                            className: "flex items-center gap-2",
                                            children: [(0, a.jsx)(p(), {
                                                href: e.url,
                                                children: (0, a.jsx)(i.z, {
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
                    return j
                },
                Vq: function() {
                    return x
                },
                cZ: function() {
                    return g
                },
                cN: function() {
                    return w
                },
                fK: function() {
                    return b
                },
                $N: function() {
                    return _
                },
                TX: function() {
                    return m
                },
                b0: function() {
                    return f
                }
            });
            var r = n(34788),
                a = n(12796),
                i = n(20567),
                s = n(14932),
                o = n(47702),
                l = n(85893),
                c = n(23223),
                d = n(40108),
                u = n(12854),
                p = n(67294),
                m = p.forwardRef(function(e, t) {
                    var n = e.children,
                        r = e.className,
                        a = (0, o._)(e, ["children", "className"]);
                    return (0, l.jsx)("span", (0, s._)((0, i._)({
                        ref: t,
                        className: (0, d.cn)("absolute w-px h-px p-0 overflow-hidden whitespace-nowrap border-0", "clip-[rect(0,0,0,0)]", r)
                    }, a), {
                        children: n
                    }))
                });
            m.displayName = "VisuallyHidden";
            var f = function(e) {
                    var t = (0, r._)({}, (0, a._)(e));
                    return (0, l.jsx)("svg", (0, s._)((0, i._)({
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
            var v = u.h_;
            u.x8;
            var h = p.forwardRef(function(e, t) {
                var n = e.className,
                    r = (0, o._)(e, ["className"]);
                return (0, l.jsx)(u.aV, (0, i._)({
                    ref: t,
                    className: (0, d.cn)("fixed inset-0 z-[5001] bg-black/60 w-[100vw] h-[100vh]", n)
                }, r))
            });
            h.displayName = u.aV.displayName;
            var g = p.forwardRef(function(e, t) {
                var n = e.className,
                    r = e.children,
                    a = (0, o._)(e, ["className", "children"]);
                return (0, l.jsxs)(v, {
                    children: [(0, l.jsx)(h, {}), (0, l.jsx)("div", {
                        className: "fixed z-[5002] inset-0 flex items-center justify-center",
                        children: (0, l.jsx)(u.VY, (0, s._)((0, i._)({
                            ref: t,
                            className: (0, d.cn)("relative w-full md:w-full", (0, d.cn)("[@media(max-width:550px)]:h-dvh", "[@media(min-width:551px)]:h-auto", "[@media(min-width:551px)]:max-h-[90vh]", "[@media(min-width:551px)]:max-w-max"), "border bg-[#191f3b] p-0", "[@media(min-width:551px)]:rounded-lg", "outline-none ring-0 shadow-none", "duration-200", "data-[state=closed]:animate-zoom-out-95", "data-[state=open]:animate-zoom-in-95", "[@media(max-width:550px)]:pt-[max(26px,env(safe-area-inset-top))]", "[@media(max-width:550px)]:pb-[max(0px,env(safe-area-inset-bottom))]", n)
                        }, a), {
                            children: r
                        }))
                    })]
                })
            });
            g.displayName = u.VY.displayName;
            var b = function(e) {
                var t = e.className,
                    n = (0, o._)(e, ["className"]);
                return (0, l.jsx)("div", (0, i._)({
                    className: (0, d.cn)("h-[60px]", t)
                }, n))
            };
            b.displayName = "DialogHeader";
            var w = function(e) {
                var t = e.className,
                    n = (0, o._)(e, ["className"]);
                return (0, l.jsx)("div", (0, i._)({
                    className: (0, d.cn)("flex flex-col-reverse sm:flex-row sm:justify-end sm:space-x-2", t)
                }, n))
            };
            w.displayName = "DialogFooter";
            var _ = p.forwardRef(function(e, t) {
                var n = e.className,
                    r = (0, o._)(e, ["className"]);
                return (0, l.jsx)(u.Dx, (0, i._)({
                    ref: t,
                    className: (0, d.cn)("text-base font-semibold leading-none tracking-tight", n)
                }, r))
            });
            _.displayName = u.Dx.displayName, p.forwardRef(function(e, t) {
                var n = e.className,
                    r = (0, o._)(e, ["className"]);
                return (0, l.jsx)(u.dk, (0, i._)({
                    ref: t,
                    className: (0, d.cn)("text-sm text-muted-foreground", n)
                }, r))
            }).displayName = u.dk.displayName;
            var j = function(e) {
                var t = e.className,
                    n = (0, o._)(e, ["className"]);
                return (0, l.jsxs)(c.z, (0, s._)((0, i._)({
                    variant: "clean",
                    className: (0, d.cn)("absolute right-6 px-0 top-6 rounded-full z-10 w-[30px] h-[30px] min-h-[30px] grow-0 [&_svg]:size-[8px] bg-[#7C83B1]/[0.08] border-[#7C83B1]/[0.08] hover:bg-[#7C83B1]/[0.15] hover:border-[#7C83B1]/[0.15]", t)
                }, n), {
                    children: [(0, l.jsx)(f, {
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
                i = n(47702),
                s = n(85893),
                o = n(40108),
                l = n(67294),
                c = (0, l.forwardRef)(function(e, t) {
                    var n = e.className,
                        a = e.type,
                        l = (0, i._)(e, ["className", "type"]);
                    return (0, s.jsx)("input", (0, r._)({
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
                    p = (0, i._)(e, ["className", "icon", "type", "inputClassName"]),
                    m = (0, l.useId)(),
                    f = "".concat(m, "-").concat(p.name);
                return (0, s.jsxs)("label", {
                    htmlFor: f,
                    className: (0, o.cn)("relative w-full flex h-[50px] items-center gap-1 rounded-md px-3 bg-[#2E3656] border border-solid border-[#7C83B1]/20", c && "pl-11", n),
                    children: [c && (0, s.jsx)("div", {
                        className: "absolute left-3",
                        children: c
                    }), (0, s.jsx)("input", (0, a._)((0, r._)({
                        id: f,
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
                    return _
                },
                DI: function() {
                    return g
                },
                Ph: function() {
                    return h
                },
                Ql: function() {
                    return j
                },
                i4: function() {
                    return w
                },
                ki: function() {
                    return b
                },
                tO: function() {
                    return x
                },
                v4: function() {
                    return v
                }
            });
            var r = n(34788),
                a = n(12796),
                i = n(20567),
                s = n(14932),
                o = n(47702),
                l = n(85893),
                c = n(28154),
                d = n(59921),
                u = n(40108),
                p = n(72215),
                m = n(67294),
                f = n(23223),
                x = function(e) {
                    var t = (0, r._)({}, (0, a._)(e));
                    return (0, l.jsxs)("svg", (0, s._)((0, i._)({
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
                v = function(e) {
                    var t = (0, r._)({}, (0, a._)(e));
                    return (0, l.jsx)("svg", (0, s._)((0, i._)({
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
                h = p.fC,
                g = p.ZA,
                b = p.B4,
                w = m.forwardRef(function(e, t) {
                    var n = e.className,
                        r = e.children,
                        a = e.showChevron,
                        c = e.showGlassEffect,
                        d = (0, o._)(e, ["className", "children", "showChevron", "showGlassEffect"]);
                    return (0, l.jsxs)(p.xz, (0, s._)((0, i._)({
                        ref: t,
                        className: (0, u.cn)((0, f.d)({
                            variant: "clean",
                            className: "relative flex flex-1 items-center justify-between w-full h-[38px] min-h-[38px] rounded-md pl-4 pr-2 text-[13px] font-medium bg-[#7C83B1]/10 border border-[#373E60] border-solid overflow-hidden group [&_svg]:size-3 [&_svg]:shrink-0"
                        }), n)
                    }, d), {
                        children: [r, (void 0 === a || a) && (0, l.jsx)(p.JO, {
                            asChild: !0,
                            children: (0, l.jsx)(v, {
                                className: "w-[14px] transition-transform duration-200 group-data-[state=open]:rotate-180"
                            })
                        }), void 0 !== c && c && (0, l.jsx)("div", {
                            className: "absolute inset-0 opacity-0 -translate-x-full group-hover:opacity-100 group-hover:translate-x-full group-hover:animate-shine transition-none"
                        })]
                    }))
                });
            w.displayName = p.xz.displayName;
            var _ = m.forwardRef(function(e, t) {
                var n = e.className,
                    r = e.viewPortClassName,
                    a = e.children,
                    c = e.position,
                    d = void 0 === c ? "popper" : c,
                    m = (0, o._)(e, ["className", "viewPortClassName", "children", "position"]);
                return (0, l.jsx)(p.h_, {
                    children: (0, l.jsx)(p.VY, (0, s._)((0, i._)({
                        ref: t,
                        className: (0, u.cn)("relative z-[5004] max-h-96 min-w-[8rem] overflow-hidden border bg-[#171d3b] border-[#262b42] border-solid rounded-md text-popover-foreground data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2", "popper" === d && "data-[side=bottom]:translate-y-1 data-[side=left]:-translate-x-1 data-[side=right]:translate-x-1 data-[side=top]:-translate-y-1", n),
                        position: d
                    }, m), {
                        children: (0, l.jsx)(p.l_, {
                            className: (0, u.cn)("p-0", "popper" === d && "h-[var(--radix-select-trigger-height)] w-[calc(var(--radix-select-trigger-width)-2px)]", r),
                            children: a
                        })
                    }))
                })
            });
            _.displayName = p.VY.displayName, m.forwardRef(function(e, t) {
                var n = e.className,
                    r = (0, o._)(e, ["className"]);
                return (0, l.jsx)(p.__, (0, i._)({
                    ref: t,
                    className: (0, u.cn)("py-1.5 pl-8 pr-2 text-sm font-semibold", n)
                }, r))
            }).displayName = p.__.displayName;
            var j = m.forwardRef(function(e, t) {
                var n = e.className,
                    r = e.children,
                    a = e.withStars,
                    m = (0, o._)(e, ["className", "children", "withStars"]);
                return (0, l.jsxs)(p.ck, (0, s._)((0, i._)({
                    ref: t,
                    className: (0, u.cn)("relative flex w-full cursor-pointer hover:bg-[#212747]/40 h-[42px] select-none items-center py-1.5 px-2 text-[13px] outline-none data-[disabled]:pointer-events-none data-[disabled]:opacity-50 rounded-md [&_span]:text-[#ced1df] [&_span]:hover:text-white", n)
                }, m), {
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
            j.displayName = p.ck.displayName, m.forwardRef(function(e, t) {
                var n = e.className,
                    r = (0, o._)(e, ["className"]);
                return (0, l.jsx)(p.Z0, (0, i._)({
                    ref: t,
                    className: (0, u.cn)("-mx-1 my-1 h-px bg-muted", n)
                }, r))
            }).displayName = p.Z0.displayName
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
                    return m
                }
            });
            var r = n(20567),
                a = n(47702),
                i = n(85893),
                s = n(63381),
                o = n(67294),
                l = n(86896),
                c = n(50028),
                d = {},
                u = (0, o.memo)(function(e) {
                    var t = e.as,
                        n = void 0 === t ? "p" : t,
                        i = e.name,
                        s = e.replacements,
                        l = void 0 === s ? d : s,
                        c = (0, a._)(e, ["as", "name", "replacements"]),
                        u = f(),
                        p = (0, o.useMemo)(function() {
                            var e = u(i, l);
                            return (0, r._)({}, "string" == typeof e ? {
                                dangerouslySetInnerHTML: {
                                    __html: e
                                }
                            } : {
                                children: e
                            }, c)
                        }, [u, i, l, c]);
                    return (0, o.useMemo)(function() {
                        return (0, o.createElement)(n, p)
                    }, [n, p])
                }),
                p = function() {
                    return (0, o.useCallback)(function(e) {
                        return (0, i.jsx)(u, (0, r._)({}, e))
                    }, [])
                },
                m = function() {
                    for (var e = arguments.length, t = Array(e), n = 0; n < e; n++) t[n] = arguments[n];
                    var r = f();
                    return (0, o.useMemo)(function() {
                        return t.reduce(function(e, t) {
                            return e[t] = r(t), e
                        }, {})
                    }, [r, t])
                };

            function f() {
                var e = (0, l.Z)(),
                    t = e.formatMessage,
                    n = e.messages;
                return (0, o.useCallback)(function(e, a, i) {
                    try {
                        var o = (0, r._)({}, c.us, a),
                            l = e.replace(/\./g, "_");
                        if (l in n) return t({
                            id: l
                        }, o, i);
                        return (0, s.ZK)('Could not find id "'.concat(l, '" \n')), l
                    } catch (t) {
                        return (0, s.ZK)(t), e
                    }
                }, [t, n])
            }
            t.ZP = f
        },
        46415: function(e, t, n) {
            "use strict";
            n.d(t, {
                G: function() {
                    return o
                }
            });
            var r = n(24043),
                a = n(56900),
                i = n(67294),
                s = n(39396),
                o = function() {
                    var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
                        t = e.breakPointOne,
                        n = e.breakPointTwo,
                        a = e.breakPointThree,
                        o = void 0 !== a && a,
                        l = e.breakPointFour,
                        c = void 0 === l ? 390 : l,
                        d = s.ZP.state[s.ZP.EVENTS.MOBILE] ? 0 : 1920,
                        u = (0, i.useCallback)(function() {
                            return window.innerWidth
                        }, [d]),
                        p = (0, r._)((0, i.useState)(u()), 2),
                        m = p[0],
                        f = p[1],
                        x = (0, i.useCallback)(function() {
                            f(u())
                        }, [u]);
                    return ((0, i.useEffect)(function() {
                        return window.addEventListener("resize", x),
                            function() {
                                window.removeEventListener("resize", x)
                            }
                    }, [x]), !1 !== o && m <= o) ? 3 : !1 !== c && m <= c ? 4 : m <= (void 0 === n ? 768 : n) ? 2 : m <= (void 0 === t ? 1100 : t) ? 1 : 0
                };
            t.Z = function() {
                var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
                    t = e.breakPointOne,
                    n = void 0 === t ? 1100 : t,
                    o = e.breakPointTwo,
                    l = void 0 === o ? 768 : o,
                    c = e.breakPointThree,
                    d = void 0 !== c && c,
                    u = e.breakPointFour,
                    p = void 0 !== u && u,
                    m = e.targetElement,
                    f = void 0 === m ? "mainBody" : m,
                    x = e.deviceCheck,
                    v = void 0 !== x && x,
                    h = e.pixelDensity,
                    g = void 0 !== h && h,
                    b = (0, r._)((0, i.useState)(!!s.ZP.state[s.ZP.EVENTS.MOBILE] && "mobile-three"), 2),
                    w = b[0],
                    _ = b[1],
                    j = (0, i.useCallback)(function() {
                        var e = document.getElementById(f);
                        if ("body" === f && (e = document.body), e) {
                            var t = e.clientWidth + 8;
                            if (g) {
                                var r = (0, a.x_)();
                                t = (e.clientWidth + 8) * r
                            }!1 !== p && t <= p ? _("mobile-four") : !1 !== d && t <= d ? _("mobile-three") : t <= l ? _("mobile-two") : t <= n ? _("mobile-one") : v && (0, a.r3)() ? _("mobile-three") : _(!1)
                        }
                    }, [f, g, p, d, l, n, v]);
                return (0, i.useEffect)(function() {
                    var e = document.getElementById("mainBody");
                    if (e) {
                        j(e.clientWidth);
                        var t = new ResizeObserver(function(e) {
                            var t = !0,
                                n = !1,
                                r = void 0;
                            try {
                                for (var a, i = e[Symbol.iterator](); !(t = (a = i.next()).done); t = !0) {
                                    var s = a.value;
                                    j(s.contentRect.width)
                                }
                            } catch (e) {
                                n = !0, r = e
                            } finally {
                                try {
                                    t || null == i.return || i.return()
                                } finally {
                                    if (n) throw r
                                }
                            }
                        });
                        return t.observe(e),
                            function() {
                                t.disconnect()
                            }
                    }
                }, [n, l, d, p, f, j]), w
            }
        },
        6042: function(e, t, n) {
            "use strict";
            n.r(t);
            var r = n(85893),
                a = n(9008),
                i = n.n(a),
                s = n(11163),
                o = n(67294),
                l = "https://cdn.rainbet.com/brand/og-banner.webp";
            t.default = (0, o.memo)(function(e) {
                var t, n, a, o, c, d, u, p, m = e.meta,
                    f = e.gamesMeta,
                    x = e.gameName,
                    v = e.caseOpenMeta,
                    h = e.caseOpenName,
                    g = e.caseOpenIcon,
                    b = e.slotsMeta,
                    w = e.gamesMetaIcon,
                    _ = e.providerMeta,
                    j = e.providerName,
                    N = "Rainbet",
                    y = "",
                    C = "",
                    L = "",
                    k = (0, s.useRouter)(),
                    E = k.asPath,
                    R = k.locale,
                    D = E.split("?")[0],
                    I = "https://rainbet.com" + ("en" === R ? "" : "/".concat(R));
                switch (!0) {
                    case !!m:
                        N = (null == m ? void 0 : null === (t = m.meta) || void 0 === t ? void 0 : t.title) || (null == m ? void 0 : m.title) || "Rainbet", y = (null == m ? void 0 : m.description) || (null == m ? void 0 : null === (n = m.meta) || void 0 === n ? void 0 : n.description) || "", C = (null == m ? void 0 : m.image) || (null == m ? void 0 : null === (a = m.meta) || void 0 === a ? void 0 : a.image) || l, L = m.url ? "".concat(m.url) : "".concat(I).concat(D);
                        break;
                    case !!f:
                        N = f.title, y = f.description ? f.description : "", C = w, L = "".concat(I, "/casino/originals/").concat(x);
                        break;
                    case !!v:
                        N = h ? v.title : h + " Case - Rainbet", y = v.description ? v.description : "", C = g, L = "".concat(null == v ? void 0 : v.url);
                        break;
                    case !!_:
                        N = j + " Casino Games – Rainbet", y = "Experience games by " + j + " at Rainbet, offering the best slots, blackjack, roulette, and other table/live games.", L = "".concat(I);
                        break;
                    case !!b:
                        N = (null == b ? void 0 : null === (o = b.meta) || void 0 === o ? void 0 : o.title) ? null == b ? void 0 : null === (c = b.meta) || void 0 === c ? void 0 : c.title : "Slots – Rainbet", y = (null == b ? void 0 : null === (d = b.meta) || void 0 === d ? void 0 : d.description) ? null == b ? void 0 : null === (u = b.meta) || void 0 === u ? void 0 : u.description : "Rainbet Slots", C = null == b ? void 0 : b.icon, L = "".concat(null == b ? void 0 : null === (p = b.meta) || void 0 === p ? void 0 : p.url);
                        break;
                    default:
                        N = "Rainbet", y = "Play casino game modes such as Slots, Blackjack, Baccarat, Roulette, Game Shows, Live Casino games and original RainBet games.", C = l, L = "".concat(I)
                }
                return (0, r.jsxs)(i(), {
                    children: [(0, r.jsx)("title", {
                        children: N
                    }), y && (0, r.jsx)("meta", {
                        name: "description",
                        content: y
                    }), (0, r.jsx)("meta", {
                        property: "og:title",
                        content: N
                    }), y && (0, r.jsx)("meta", {
                        property: "og:description",
                        content: y
                    }), L && (0, r.jsx)("link", {
                        rel: "canonical",
                        href: L
                    }), (0, r.jsx)("meta", {
                        property: "og:site_name",
                        content: "Rainbet"
                    }), (0, r.jsx)("meta", {
                        property: "og:type",
                        content: "website"
                    }), (0, r.jsx)("meta", {
                        name: "apple-mobile-web-app-status-bar-style",
                        content: "black-translucent"
                    }), (0, r.jsx)("meta", {
                        name: "viewport",
                        content: "width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=0, viewport-fit=cover"
                    }), C === l && (0, r.jsxs)(r.Fragment, {
                        children: [(0, r.jsx)("meta", {
                            property: "og:image:type",
                            content: "image/webp"
                        }), (0, r.jsx)("meta", {
                            property: "og:image:width",
                            content: "1200"
                        }), (0, r.jsx)("meta", {
                            property: "og:image:height",
                            content: "630"
                        })]
                    }), (0, r.jsx)("meta", {
                        property: "og:image",
                        content: C
                    })]
                })
            })
        },
        4149: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                __N_SSP: function() {
                    return m
                }
            });
            var r = n(24043),
                a = n(85893),
                i = n(51979),
                s = n(39377),
                o = n(50028),
                l = n(6042),
                c = n(25675),
                d = n.n(c),
                u = n(67294),
                p = {
                    assets: {
                        icon: "/Images/releases-icon.svg",
                        decoration: "/Images/releases-decoration.svg"
                    },
                    translations: {
                        title: "new_releases",
                        noDataMessage: "no_games_to_display"
                    }
                },
                m = !0;
            t.default = function(e) {
                var t = e.initialData,
                    n = e.content,
                    c = (0, r._)((0, u.useState)("release"), 2),
                    m = c[0],
                    f = c[1],
                    x = (0, o.ZP)(),
                    v = (0, u.useMemo)(function() {
                        return (0, a.jsx)(a.Fragment, {
                            children: (0, a.jsx)("div", {
                                className: "w-full h-[233px] bg-[#1f2542] flex justify-center items-center border border-solid border-[#282f58] rounded-[6px]",
                                children: (0, a.jsxs)("div", {
                                    className: "flex flex-col items-center gap-6",
                                    children: [(0, a.jsx)("div", {
                                        className: "w-[70px] h-[70px] relative",
                                        children: (0, a.jsx)(d(), {
                                            src: p.assets.icon,
                                            alt: "Empty Image",
                                            fill: !0,
                                            className: "object-contain"
                                        })
                                    }), (0, a.jsx)("p", {
                                        className: "text-[14px] ",
                                        children: x(p.translations.noDataMessage)
                                    })]
                                })
                            })
                        })
                    }, [x]);
                return (0, a.jsxs)("div", {
                    className: "px-4",
                    children: [(0, a.jsx)(l.default, {
                        meta: null == n ? void 0 : n.meta
                    }), (0, a.jsxs)("div", {
                        className: "relative w-full h-full z-10",
                        children: [(0, a.jsx)(i.Q, {
                            isNewDesignPage: !0
                        }), (0, a.jsx)("div", {
                            className: "absolute left-1/2 transform -translate-x-1/2 pl-[50vw] pr-[50vw] h-full bg-[#151a32] top-0 z-[-1]"
                        })]
                    }), (0, a.jsxs)("div", {
                        className: "relative w-full h-[72px] flex",
                        children: [(0, a.jsx)("div", {
                            className: "absolute left-1/2 transform -translate-x-1/2 pl-[50vw] pr-[50vw] h-full bg-[#1a203c] border border-solid border-[#242845] overflow-hidden",
                            children: (0, a.jsx)(d(), {
                                src: "/Images/static-page-decoration.png",
                                alt: "Decoration",
                                fill: !0,
                                className: "object-cover"
                            })
                        }), (0, a.jsx)("div", {
                            className: "absolute right-[-25px] [@media(min-width:500px)]:right-[45px] top-[-66px] w-[205px] h-[205px] mix-blend-luminosity opacity-70",
                            children: (0, a.jsx)(d(), {
                                src: p.assets.decoration,
                                alt: "Decoration",
                                fill: !0,
                                className: "object-contain"
                            })
                        }), (0, a.jsxs)("div", {
                            className: "flex items-center relative gap-[18px] ",
                            children: [(0, a.jsx)("div", {
                                className: "w-[32px] h-[32px] relative",
                                children: (0, a.jsx)(d(), {
                                    src: p.assets.icon,
                                    alt: "Bottom content",
                                    fill: !0,
                                    className: "object-contain"
                                })
                            }), (0, a.jsx)("h1", {
                                className: "text-shadow text-[1.5rem] font-bold",
                                children: (null == n ? void 0 : n.heading) ? null == n ? void 0 : n.heading : x(p.translations.title)
                            })]
                        })]
                    }), (0, a.jsx)(s.default, {
                        number: 84,
                        sortBy: m,
                        setSortBy: f,
                        initialData: {
                            games: t.games,
                            count: t.count
                        },
                        searchSection: !0,
                        heading: void 0,
                        emptyStateComponent: v,
                        isNewDesign: !0,
                        showAllProviderOptions: !0,
                        sortByOptions: [{
                            value: "release",
                            label: String(x("release"))
                        }]
                    }), (0, a.jsx)("div", {
                        className: "w-full pt-14 pb-8",
                        children: (0, a.jsx)("div", {
                            className: "bg-white/5 h-[1px]"
                        })
                    })]
                })
            }
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
                    return Q
                },
                h_: function() {
                    return ee
                },
                x8: function() {
                    return ei
                },
                xz: function() {
                    return J
                }
            });
            var r = n(67294),
                a = n(36206),
                i = n(28771),
                s = n(25360),
                o = n(91276),
                l = n(77342),
                c = n(46063),
                d = n(95420),
                u = n(42651),
                p = n(29115),
                m = n(75320),
                f = n(27552),
                x = n(71930),
                v = n(23541),
                h = n(88426),
                g = n(85893),
                b = "Dialog",
                [w, _] = (0, s.b)(b),
                [j, N] = w(b),
                y = e => {
                    let {
                        __scopeDialog: t,
                        children: n,
                        open: a,
                        defaultOpen: i,
                        onOpenChange: s,
                        modal: c = !0
                    } = e, d = r.useRef(null), u = r.useRef(null), [p, m] = (0, l.T)({
                        prop: a,
                        defaultProp: i ? ? !1,
                        onChange: s,
                        caller: b
                    });
                    return (0, g.jsx)(j, {
                        scope: t,
                        triggerRef: d,
                        contentRef: u,
                        contentId: (0, o.M)(),
                        titleId: (0, o.M)(),
                        descriptionId: (0, o.M)(),
                        open: p,
                        onOpenChange: m,
                        onOpenToggle: r.useCallback(() => m(e => !e), [m]),
                        modal: c,
                        children: n
                    })
                };
            y.displayName = b;
            var C = "DialogTrigger",
                L = r.forwardRef((e, t) => {
                    let {
                        __scopeDialog: n,
                        ...r
                    } = e, s = N(C, n), o = (0, i.e)(t, s.triggerRef);
                    return (0, g.jsx)(m.WV.button, {
                        type: "button",
                        "aria-haspopup": "dialog",
                        "aria-expanded": s.open,
                        "aria-controls": s.contentId,
                        "data-state": X(s.open),
                        ...r,
                        ref: o,
                        onClick: (0, a.M)(e.onClick, s.onOpenToggle)
                    })
                });
            L.displayName = C;
            var k = "DialogPortal",
                [E, R] = w(k, {
                    forceMount: void 0
                }),
                D = e => {
                    let {
                        __scopeDialog: t,
                        forceMount: n,
                        children: a,
                        container: i
                    } = e, s = N(k, t);
                    return (0, g.jsx)(E, {
                        scope: t,
                        forceMount: n,
                        children: r.Children.map(a, e => (0, g.jsx)(p.z, {
                            present: n || s.open,
                            children: (0, g.jsx)(u.h, {
                                asChild: !0,
                                container: i,
                                children: e
                            })
                        }))
                    })
                };
            D.displayName = k;
            var I = "DialogOverlay",
                P = r.forwardRef((e, t) => {
                    let n = R(I, e.__scopeDialog),
                        {
                            forceMount: r = n.forceMount,
                            ...a
                        } = e,
                        i = N(I, e.__scopeDialog);
                    return i.modal ? (0, g.jsx)(p.z, {
                        present: r || i.open,
                        children: (0, g.jsx)(F, { ...a,
                            ref: t
                        })
                    }) : null
                });
            P.displayName = I;
            var M = (0, h.Z8)("DialogOverlay.RemoveScroll"),
                F = r.forwardRef((e, t) => {
                    let {
                        __scopeDialog: n,
                        ...r
                    } = e, a = N(I, n);
                    return (0, g.jsx)(x.Z, {
                        as: M,
                        allowPinchZoom: !0,
                        shards: [a.contentRef],
                        children: (0, g.jsx)(m.WV.div, {
                            "data-state": X(a.open),
                            ...r,
                            ref: t,
                            style: {
                                pointerEvents: "auto",
                                ...r.style
                            }
                        })
                    })
                }),
                S = "DialogContent",
                z = r.forwardRef((e, t) => {
                    let n = R(S, e.__scopeDialog),
                        {
                            forceMount: r = n.forceMount,
                            ...a
                        } = e,
                        i = N(S, e.__scopeDialog);
                    return (0, g.jsx)(p.z, {
                        present: r || i.open,
                        children: i.modal ? (0, g.jsx)(B, { ...a,
                            ref: t
                        }) : (0, g.jsx)(O, { ...a,
                            ref: t
                        })
                    })
                });
            z.displayName = S;
            var B = r.forwardRef((e, t) => {
                    let n = N(S, e.__scopeDialog),
                        s = r.useRef(null),
                        o = (0, i.e)(t, n.contentRef, s);
                    return r.useEffect(() => {
                        let e = s.current;
                        if (e) return (0, v.Ry)(e)
                    }, []), (0, g.jsx)(Z, { ...e,
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
                O = r.forwardRef((e, t) => {
                    let n = N(S, e.__scopeDialog),
                        a = r.useRef(!1),
                        i = r.useRef(!1);
                    return (0, g.jsx)(Z, { ...e,
                        ref: t,
                        trapFocus: !1,
                        disableOutsidePointerEvents: !1,
                        onCloseAutoFocus: t => {
                            e.onCloseAutoFocus ? .(t), t.defaultPrevented || (a.current || n.triggerRef.current ? .focus(), t.preventDefault()), a.current = !1, i.current = !1
                        },
                        onInteractOutside: t => {
                            e.onInteractOutside ? .(t), t.defaultPrevented || (a.current = !0, "pointerdown" !== t.detail.originalEvent.type || (i.current = !0));
                            let r = t.target;
                            n.triggerRef.current ? .contains(r) && t.preventDefault(), "focusin" === t.detail.originalEvent.type && i.current && t.preventDefault()
                        }
                    })
                }),
                Z = r.forwardRef((e, t) => {
                    let {
                        __scopeDialog: n,
                        trapFocus: a,
                        onOpenAutoFocus: s,
                        onCloseAutoFocus: o,
                        ...l
                    } = e, u = N(S, n), p = r.useRef(null), m = (0, i.e)(t, p);
                    return (0, f.EW)(), (0, g.jsxs)(g.Fragment, {
                        children: [(0, g.jsx)(d.M, {
                            asChild: !0,
                            loop: !0,
                            trapped: a,
                            onMountAutoFocus: s,
                            onUnmountAutoFocus: o,
                            children: (0, g.jsx)(c.XB, {
                                role: "dialog",
                                id: u.contentId,
                                "aria-describedby": u.descriptionId,
                                "aria-labelledby": u.titleId,
                                "data-state": X(u.open),
                                ...l,
                                ref: m,
                                onDismiss: () => u.onOpenChange(!1)
                            })
                        }), (0, g.jsxs)(g.Fragment, {
                            children: [(0, g.jsx)(K, {
                                titleId: u.titleId
                            }), (0, g.jsx)(U, {
                                contentRef: p,
                                descriptionId: u.descriptionId
                            })]
                        })]
                    })
                }),
                V = "DialogTitle",
                W = r.forwardRef((e, t) => {
                    let {
                        __scopeDialog: n,
                        ...r
                    } = e, a = N(V, n);
                    return (0, g.jsx)(m.WV.h2, {
                        id: a.titleId,
                        ...r,
                        ref: t
                    })
                });
            W.displayName = V;
            var T = "DialogDescription",
                A = r.forwardRef((e, t) => {
                    let {
                        __scopeDialog: n,
                        ...r
                    } = e, a = N(T, n);
                    return (0, g.jsx)(m.WV.p, {
                        id: a.descriptionId,
                        ...r,
                        ref: t
                    })
                });
            A.displayName = T;
            var q = "DialogClose",
                G = r.forwardRef((e, t) => {
                    let {
                        __scopeDialog: n,
                        ...r
                    } = e, i = N(q, n);
                    return (0, g.jsx)(m.WV.button, {
                        type: "button",
                        ...r,
                        ref: t,
                        onClick: (0, a.M)(e.onClick, () => i.onOpenChange(!1))
                    })
                });

            function X(e) {
                return e ? "open" : "closed"
            }
            G.displayName = q;
            var Y = "DialogTitleWarning",
                [$, H] = (0, s.k)(Y, {
                    contentName: S,
                    titleName: V,
                    docsSlug: "dialog"
                }),
                K = ({
                    titleId: e
                }) => {
                    let t = H(Y),
                        n = `\`${t.contentName}\` requires a \`${t.titleName}\` for the component to be accessible for screen reader users.

If you want to hide the \`${t.titleName}\`, you can wrap it with our VisuallyHidden component.

For more information, see https://radix-ui.com/primitives/docs/components/${t.docsSlug}`;
                    return r.useEffect(() => {
                        e && !document.getElementById(e) && console.error(n)
                    }, [n, e]), null
                },
                U = ({
                    contentRef: e,
                    descriptionId: t
                }) => {
                    let n = H("DialogDescriptionWarning"),
                        a = `Warning: Missing \`Description\` or \`aria-describedby={undefined}\` for {${n.contentName}}.`;
                    return r.useEffect(() => {
                        let n = e.current ? .getAttribute("aria-describedby");
                        t && n && !document.getElementById(t) && console.warn(a)
                    }, [a, e, t]), null
                },
                Q = y,
                J = L,
                ee = D,
                et = P,
                en = z,
                er = W,
                ea = A,
                ei = G
        }
    },
    function(e) {
        e.O(0, [5675, 2438, 2215, 1752, 9291, 9377, 6601, 2888, 9774, 179], function() {
            return e(e.s = 41580)
        }), _N_E = e.O()
    }
]);