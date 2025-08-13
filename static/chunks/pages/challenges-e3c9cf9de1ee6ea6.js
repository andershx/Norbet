(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [7033, 9947], {
        60894: function(e, t, r) {
            (window.__NEXT_P = window.__NEXT_P || []).push(["/challenges", function() {
                return r(27304)
            }])
        },
        28154: function(e, t, r) {
            "use strict";
            r.d(t, {
                Z: function() {
                    return s
                }
            });
            var a = r(20567),
                n = r(14932),
                i = r(85893);

            function s(e) {
                return (0, i.jsxs)("svg", (0, n._)((0, a._)({
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
            r(67294)
        },
        59921: function(e, t, r) {
            "use strict";
            r.d(t, {
                Z: function() {
                    return s
                }
            });
            var a = r(20567),
                n = r(14932),
                i = r(85893);

            function s(e) {
                return (0, i.jsx)("svg", (0, n._)((0, a._)({
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
            r(67294)
        },
        91452: function(e, t, r) {
            "use strict";
            r.d(t, {
                Z: function() {
                    return s
                }
            });
            var a = r(20567),
                n = r(14932),
                i = r(85893);

            function s(e) {
                return (0, i.jsx)("svg", (0, n._)((0, a._)({
                    xmlns: "http://www.w3.org/2000/svg",
                    width: "28",
                    height: "34",
                    viewBox: "0 0 28 34",
                    fill: "none"
                }, e), {
                    children: (0, i.jsx)("path", {
                        d: "M27.055 14.9547L2.695 0.283333C2.3975 0.10625 2.09125 0 1.74125 0C0.7875 0 0.00874987 0.796875 0.00874987 1.77083H0V32.2292H0.00874987C0.00874987 33.2031 0.7875 34 1.74125 34C2.1 34 2.3975 33.876 2.72125 33.699L27.055 19.0453C27.6325 18.5583 28 17.8234 28 17C28 16.1766 27.6325 15.4505 27.055 14.9547Z",
                        fill: "white"
                    })
                }))
            }
        },
        26001: function(e, t, r) {
            "use strict";
            r.d(t, {
                Z: function() {
                    return u
                }
            });
            var a = r(20567),
                n = r(47702),
                i = r(24043),
                s = r(85893),
                l = r(20259),
                o = r(25675),
                c = r.n(o),
                d = r(67294);

            function u(e) {
                var t = e.code,
                    r = e.width,
                    o = void 0 === r ? 48 : r,
                    u = e.height,
                    x = void 0 === u ? 48 : u,
                    p = (0, n._)(e, ["code", "width", "height"]),
                    m = (0, l.Z)().list,
                    f = (0, i._)((0, d.useState)(!1), 2),
                    h = f[0],
                    v = f[1],
                    g = (0, d.useMemo)(function() {
                        var e = null == t ? void 0 : t.toLowerCase(),
                            r = m[e];
                        return (null == r ? void 0 : r.icon) || "https://cdn.rainbet.com/currencies/".concat(e, ".svg")
                    }, [t, m]);
                return h ? (0, s.jsx)("div", (0, a._)({
                    style: {
                        width: +o,
                        height: +x
                    },
                    className: "rounded-full"
                }, p)) : (0, s.jsx)(c(), (0, a._)({
                    src: g,
                    alt: "icon for crypto ".concat(t),
                    width: +o,
                    height: +x,
                    onError: function() {
                        return v(!0)
                    }
                }, p))
            }
        },
        78994: function(e, t, r) {
            "use strict";
            r.d(t, {
                Qd: function() {
                    return x
                },
                UQ: function() {
                    return u
                },
                o4: function() {
                    return p
                },
                rQ: function() {
                    return m
                },
                vF: function() {
                    return f
                }
            });
            var a = r(20567),
                n = r(14932),
                i = r(47702),
                s = r(85893),
                l = r(67294),
                o = r(47398),
                c = r(40108),
                d = r(36626),
                u = o.fC,
                x = l.forwardRef(function(e, t) {
                    var r = e.className,
                        n = (0, i._)(e, ["className"]);
                    return (0, s.jsx)(o.ck, (0, a._)({
                        ref: t,
                        className: (0, c.cn)("border-b", r)
                    }, n))
                });
            x.displayName = "AccordionItem";
            var p = l.forwardRef(function(e, t) {
                var r = e.className,
                    l = e.children,
                    u = e.classChevron,
                    x = (0, i._)(e, ["className", "children", "classChevron"]);
                return (0, s.jsxs)(o.xz, (0, n._)((0, a._)({
                    ref: t,
                    className: (0, c.cn)("flex flex-1 items-center justify-between w-full font-medium transition-all hover:underline", r)
                }, x), {
                    children: [l, (0, s.jsx)("div", {
                        className: (0, c.cn)("flex items-center justify-center w-[25px] h-[25px] rounded-[2.68px]", u),
                        children: (0, s.jsx)(d.v4, {
                            className: (0, c.cn)("h-2.5 w-2.5 shrink-0 transition-transform duration-200", "group-data-[state=open]:rotate-180")
                        })
                    })]
                }))
            });
            p.displayName = o.xz.displayName;
            var m = l.forwardRef(function(e, t) {
                var r = e.className,
                    l = e.children,
                    d = (0, i._)(e, ["className", "children"]);
                return (0, s.jsx)(o.xz, (0, n._)((0, a._)({
                    ref: t,
                    className: (0, c.cn)("[&[data-state=open]>svg]:rotate-180", r)
                }, d), {
                    children: l
                }))
            });
            m.displayName = o.xz.displayName;
            var f = l.forwardRef(function(e, t) {
                var r = e.className,
                    l = e.children,
                    d = (0, i._)(e, ["className", "children"]);
                return (0, s.jsx)(o.VY, (0, n._)((0, a._)({
                    ref: t,
                    className: "overflow-hidden text-sm transition-all data-[state=closed]:animate-accordion-up data-[state=open]:animate-accordion-down"
                }, d), {
                    children: (0, s.jsx)("div", {
                        className: (0, c.cn)("pb-4 pt-0", r),
                        children: l
                    })
                }))
            });
            f.displayName = o.VY.displayName
        },
        36626: function(e, t, r) {
            "use strict";
            r.d(t, {
                Bw: function() {
                    return j
                },
                DI: function() {
                    return g
                },
                Ph: function() {
                    return v
                },
                Ql: function() {
                    return _
                },
                i4: function() {
                    return b
                },
                ki: function() {
                    return w
                },
                tO: function() {
                    return f
                },
                v4: function() {
                    return h
                }
            });
            var a = r(34788),
                n = r(12796),
                i = r(20567),
                s = r(14932),
                l = r(47702),
                o = r(85893),
                c = r(28154),
                d = r(59921),
                u = r(40108),
                x = r(72215),
                p = r(67294),
                m = r(23223),
                f = function(e) {
                    var t = (0, a._)({}, (0, n._)(e));
                    return (0, o.jsxs)("svg", (0, s._)((0, i._)({
                        width: "10",
                        height: "18",
                        viewBox: "0 0 10 18",
                        fill: "none",
                        xmlns: "http://www.w3.org/2000/svg"
                    }, t), {
                        children: [(0, o.jsx)("g", {
                            "clip-path": "url(#clip0_29800_145162)",
                            children: (0, o.jsx)("path", {
                                d: "M8.75 16.5L1.25 9L8.75 1.5",
                                stroke: "#8788A5",
                                strokeWidth: "1.5",
                                strokeLinecap: "round",
                                strokeLinejoin: "round"
                            })
                        }), (0, o.jsx)("defs", {
                            children: (0, o.jsx)("clipPath", {
                                id: "clip0_29800_145162",
                                children: (0, o.jsx)("rect", {
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
                    var t = (0, a._)({}, (0, n._)(e));
                    return (0, o.jsx)("svg", (0, s._)((0, i._)({
                        xmlns: "http://www.w3.org/2000/svg",
                        fill: "none",
                        viewBox: "0 0 24 24",
                        strokeWidth: 1.5,
                        stroke: "currentColor"
                    }, t), {
                        children: (0, o.jsx)("path", {
                            strokeLinecap: "round",
                            strokeLinejoin: "round",
                            d: "m19.5 8.25-7.5 7.5-7.5-7.5"
                        })
                    }))
                },
                v = x.fC,
                g = x.ZA,
                w = x.B4,
                b = p.forwardRef(function(e, t) {
                    var r = e.className,
                        a = e.children,
                        n = e.showChevron,
                        c = e.showGlassEffect,
                        d = (0, l._)(e, ["className", "children", "showChevron", "showGlassEffect"]);
                    return (0, o.jsxs)(x.xz, (0, s._)((0, i._)({
                        ref: t,
                        className: (0, u.cn)((0, m.d)({
                            variant: "clean",
                            className: "relative flex flex-1 items-center justify-between w-full h-[38px] min-h-[38px] rounded-md pl-4 pr-2 text-[13px] font-medium bg-[#7C83B1]/10 border border-[#373E60] border-solid overflow-hidden group [&_svg]:size-3 [&_svg]:shrink-0"
                        }), r)
                    }, d), {
                        children: [a, (void 0 === n || n) && (0, o.jsx)(x.JO, {
                            asChild: !0,
                            children: (0, o.jsx)(h, {
                                className: "w-[14px] transition-transform duration-200 group-data-[state=open]:rotate-180"
                            })
                        }), void 0 !== c && c && (0, o.jsx)("div", {
                            className: "absolute inset-0 opacity-0 -translate-x-full group-hover:opacity-100 group-hover:translate-x-full group-hover:animate-shine transition-none"
                        })]
                    }))
                });
            b.displayName = x.xz.displayName;
            var j = p.forwardRef(function(e, t) {
                var r = e.className,
                    a = e.viewPortClassName,
                    n = e.children,
                    c = e.position,
                    d = void 0 === c ? "popper" : c,
                    p = (0, l._)(e, ["className", "viewPortClassName", "children", "position"]);
                return (0, o.jsx)(x.h_, {
                    children: (0, o.jsx)(x.VY, (0, s._)((0, i._)({
                        ref: t,
                        className: (0, u.cn)("relative z-[5004] max-h-96 min-w-[8rem] overflow-hidden border bg-[#171d3b] border-[#262b42] border-solid rounded-md text-popover-foreground data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2", "popper" === d && "data-[side=bottom]:translate-y-1 data-[side=left]:-translate-x-1 data-[side=right]:translate-x-1 data-[side=top]:-translate-y-1", r),
                        position: d
                    }, p), {
                        children: (0, o.jsx)(x.l_, {
                            className: (0, u.cn)("p-0", "popper" === d && "h-[var(--radix-select-trigger-height)] w-[calc(var(--radix-select-trigger-width)-2px)]", a),
                            children: n
                        })
                    }))
                })
            });
            j.displayName = x.VY.displayName, p.forwardRef(function(e, t) {
                var r = e.className,
                    a = (0, l._)(e, ["className"]);
                return (0, o.jsx)(x.__, (0, i._)({
                    ref: t,
                    className: (0, u.cn)("py-1.5 pl-8 pr-2 text-sm font-semibold", r)
                }, a))
            }).displayName = x.__.displayName;
            var _ = p.forwardRef(function(e, t) {
                var r = e.className,
                    a = e.children,
                    n = e.withStars,
                    p = (0, l._)(e, ["className", "children", "withStars"]);
                return (0, o.jsxs)(x.ck, (0, s._)((0, i._)({
                    ref: t,
                    className: (0, u.cn)("relative flex w-full cursor-pointer hover:bg-[#212747]/40 h-[42px] select-none items-center py-1.5 px-2 text-[13px] outline-none data-[disabled]:pointer-events-none data-[disabled]:opacity-50 rounded-md [&_span]:text-[#ced1df] [&_span]:hover:text-white", r)
                }, p), {
                    children: [void 0 !== n && n && (0, o.jsxs)("span", {
                        className: "absolute right-2 flex h-3.5 w-3.5 items-center justify-center",
                        children: [(0, o.jsx)(x.wU, {
                            children: (0, o.jsx)(c.Z, {
                                className: "size-[14px]"
                            })
                        }), (0, o.jsx)(d.Z, {
                            className: "size-[14px]"
                        })]
                    }), (0, o.jsx)(x.eT, {
                        children: a
                    })]
                }))
            });
            _.displayName = x.ck.displayName, p.forwardRef(function(e, t) {
                var r = e.className,
                    a = (0, l._)(e, ["className"]);
                return (0, o.jsx)(x.Z0, (0, i._)({
                    ref: t,
                    className: (0, u.cn)("-mx-1 my-1 h-px bg-muted", r)
                }, a))
            }).displayName = x.Z0.displayName
        },
        20259: function(e, t, r) {
            "use strict";
            r.d(t, {
                Z: function() {
                    return u
                }
            });
            var a = r(20567),
                n = r(14932),
                i = r(67294),
                s = r(5068),
                l = r(75645),
                o = r(63694),
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
                var e, t, r, l = (0, s.ZP)("v1/crypto", d, {
                        revalidateOnFocus: !0
                    }),
                    u = l.data,
                    x = l.isLoading,
                    p = (0, o.EC)().data,
                    m = null == p ? void 0 : null === (e = p.user) || void 0 === e ? void 0 : e.currencies,
                    f = null == m ? void 0 : null === (t = m.BRL) || void 0 === t ? void 0 : t.rate,
                    h = null == m ? void 0 : null === (r = m.CAD) || void 0 === r ? void 0 : r.rate;
                return {
                    list: (0, i.useMemo)(function() {
                        if (!u) return {};
                        var e, t = null == u ? void 0 : null === (e = u.reduce) || void 0 === e ? void 0 : e.call(u, function(e, t) {
                            var r = t.code;
                            return (0, n._)((0, a._)({}, e), {
                                [r]: (0, n._)((0, a._)({}, t), {
                                    api: "url",
                                    id: r
                                })
                            })
                        }, c);
                        return t.pix.rate = f, t.picpay.rate = f, t.interac.rate = h, t
                    }, [u, h, f]),
                    isLoading: x
                }
            }
        },
        27304: function(e, t, r) {
            "use strict";
            r.r(t), r.d(t, {
                __N_SSP: function() {
                    return j
                },
                default: function() {
                    return _
                }
            });
            var a = r(24043),
                n = r(85893),
                i = r(85662),
                s = r(95323),
                l = r(58035),
                o = r(98695),
                c = r(8075),
                d = r(25675),
                u = r.n(d),
                x = r(91452),
                p = r(46415),
                m = r(50028),
                f = function(e) {
                    var t = e.game,
                        r = t.type,
                        a = t.url;
                    switch (r) {
                        case "original":
                            return "/casino/originals/".concat(a);
                        case "slot":
                            return "/casino/slots/".concat(a);
                        default:
                            return "/"
                    }
                },
                h = function(e) {
                    var t = new Date(e),
                        r = new Date;
                    return Math.ceil((t.getTime() - r.getTime()) / 864e5)
                };

            function v(e) {
                var t, r, a, i = e.challenge,
                    d = e.locale,
                    v = (0, m.ZP)(),
                    g = (0, p.Z)({
                        breakPointTwo: 600
                    }),
                    w = (0, m.El)({
                        days_left: {
                            days: h(i.expires_at)
                        },
                        first_to_hit: {
                            multiplier: Number(i.requirement).toLocaleString(d, {
                                minimumFractionDigits: Number(i.requirement) % 1 == 0 ? 0 : 2,
                                maximumFractionDigits: Number(i.requirement) % 1 == 0 ? 0 : 2
                            })
                        }
                    }),
                    b = "completed" === i.status || null !== i.winner;
                return (0, n.jsxs)("div", {
                    className: "flex gap-4 p-[14px] w-full sm:max-h-[240px] max-w-[500px] lg:max-w-[600px] h-full  rounded-lg !border-solid bg-[#273349] ".concat(b ? "!border-[2px] !border-[rgba(124,131,177,0.2)] !bg-[#202746]" : "!border-[2px] !border-[#7DD934]"),
                    children: [(0, n.jsx)("div", {
                        className: "flex xs:flex-col items-center gap-2 xs:gap-1",
                        children: (0, n.jsxs)("div", {
                            className: "relative h-full w-full",
                            children: [(0, n.jsx)("div", {
                                className: "overflow-hidden h-full min-w-[141px] max-h-[189px] relative aspect-[141/189]",
                                children: (i.game.custom_banner || i.game.icon) && (0, n.jsx)(u(), {
                                    alt: i.game.name,
                                    src: i.game.custom_banner || i.game.icon,
                                    fill: !0,
                                    sizes: "100vw",
                                    quality: 100,
                                    className: "object-cover h-full rounded-[7.8px] border border-[rgba(255,255,255,0.10)]"
                                })
                            }), (b || 30 >= h(i.expires_at)) && (0, n.jsxs)("span", {
                                className: "inline-flex text-nowrap p-1 items-center gap-1 top-2.5 left-3 absolute rounded-[4px] border-[0.5px] border-[rgba(255,255,255,0.3)] bg-[rgba(35,40,75,0.5)] shadow-[0px_2px_10px_0px_rgba(0,0,0,0.25)] backdrop-blur-[17px] text-white text-[11px] xs:text-xs font-medium",
                                children: [!b && (0, n.jsx)(s.ClockSvg, {}), b ? v("completed") : 1 === h(i.expires_at) ? v("days_left_singular") : w.days_left]
                            })]
                        })
                    }), (0, n.jsx)("div", {
                        className: "w-2/3 flex flex-col ",
                        children: (0, n.jsxs)("div", {
                            className: "flex flex-col justify-between h-full mb-1 xs:mb-0.5 mt-2 xs:mt-1 xs:pl-0 ".concat("mobile-two" === g ? "flex-col" : ""),
                            children: [(0, n.jsxs)("div", {
                                children: [(0, n.jsx)("div", {
                                    className: "text-font-color text-[16px] font-semibold pb-2",
                                    children: i.game.name
                                }), (0, n.jsxs)("div", {
                                    className: "text-[rgba(232,229,255,0.85)] text-[13px] font-normal leading-[140%] xs:pb-1",
                                    children: [(0, n.jsx)("span", {
                                        className: " [&_span]:font-normal [&_span]:text-[rgba(232,229,255,0.85)] text-[rgba(232,229,255,0.85)]",
                                        children: w.first_to_hit
                                    }), (0, n.jsx)(c.Z, {
                                        amount: i.minimum_bet,
                                        decimals: 2,
                                        textIcon: !0,
                                        size: "small",
                                        textSize: 12,
                                        customClass: "inline leading-0 [&_*]:text-[13px] text-[rgba(232,229,255,0.85)] [&_*]:text-[rgba(232,229,255,0.85)] [&_*]:font-normal"
                                    })]
                                })]
                            }), (0, n.jsxs)("div", {
                                className: "flex flex-col gap-[11px]",
                                children: [(0, n.jsxs)("div", {
                                    className: "flex flex-col gap-1.5 text-[rgba(232,229,255,0.75)] w-full",
                                    children: [(0, n.jsxs)("div", {
                                        className: "w-full flex justify-between items-center text-[13px] width-[18px]",
                                        children: [(0, n.jsx)("div", {
                                            className: "text-[rgba(232,229,255,0.65)] font-normal",
                                            children: v("prize")
                                        }), (0, n.jsx)(c.Z, {
                                            amount: i.reward_value,
                                            decimals: i.reward_value % 1 == 0 ? 0 : 2,
                                            textIcon: !0,
                                            textSize: 13
                                        })]
                                    }), (0, n.jsxs)("div", {
                                        className: "w-full flex justify-between items-center width-[18px]",
                                        children: [(0, n.jsx)("div", {
                                            className: "text-[rgba(232,229,255,0.65)] font-normal text-[13px] ",
                                            children: v("creator")
                                        }), (0, n.jsxs)("div", {
                                            className: "flex items-center gap-1 text-[13px]",
                                            children: [(null === (t = i.creator) || void 0 === t ? void 0 : t.rank) && (0, n.jsx)(o.Z, {
                                                code: i.creator.rank.name,
                                                size: "large"
                                            }), (null === (r = i.creator) || void 0 === r ? void 0 : r.username) ? (0, n.jsx)(l.Z, {
                                                buttonType: "link",
                                                query: {
                                                    modal: "user",
                                                    user: i.creator.public_id
                                                },
                                                active: !1,
                                                text: i.creator.username,
                                                classType: ["challenge-username"],
                                                isShallow: !0
                                            }) : (0, n.jsx)("span", {
                                                className: "challenge-username cursor-default",
                                                children: "Rainbet"
                                            })]
                                        })]
                                    }), i.winner && (0, n.jsxs)("div", {
                                        className: "w-full flex justify-between items-center text-[13px]",
                                        children: [(0, n.jsx)("div", {
                                            className: "text-[rgba(232,229,255,0.65)] font-normal text-[13px] ",
                                            children: v("claimed_by")
                                        }), (0, n.jsxs)("div", {
                                            className: "flex gap-1 text-[13px] ",
                                            children: [(null === (a = i.winner) || void 0 === a ? void 0 : a.rank) && (0, n.jsx)(o.Z, {
                                                code: i.winner.rank.name,
                                                size: "large"
                                            }), (0, n.jsx)(l.Z, {
                                                buttonType: "link",
                                                query: {
                                                    modal: "user",
                                                    user: i.winner.public_id
                                                },
                                                active: !1,
                                                text: i.winner.username,
                                                classType: ["challenge-username"],
                                                isShallow: !0
                                            })]
                                        })]
                                    })]
                                }), (0, n.jsx)(l.Z, {
                                    buttonType: "link",
                                    text: v("play_game"),
                                    classType: ["full-width", !b && "green", "challenges-button"].filter(Boolean),
                                    url: {
                                        pathname: f(i)
                                    },
                                    customInnerContent: (0, n.jsxs)("div", {
                                        className: "flex items-center gap-0.5 2xs:gap-2 text-[13px] font-medium",
                                        children: [(0, n.jsx)(x.Z, {
                                            className: "h-[11px] w-[11px]"
                                        }), v("play_game")]
                                    })
                                })]
                            })]
                        })
                    })]
                })
            }
            var g = r(78994),
                w = r(6042),
                b = r(67294),
                j = !0;

            function _(e) {
                var t = e.activeChallenges,
                    r = e.completedChallenges,
                    o = e.meta,
                    c = e.content,
                    d = e.locale,
                    u = (0, m.ZP)(),
                    x = (0, a._)((0, b.useState)("active"), 2),
                    p = x[0],
                    f = x[1],
                    h = "active" === p ? t : r,
                    j = function(e) {
                        f(e)
                    };
                return (0, n.jsxs)(n.Fragment, {
                    children: [(0, n.jsx)(w.default, {
                        meta: o
                    }), (0, n.jsxs)("div", {
                        className: "w-full min-h-[600px] grid gap-6 challenges-page-wrapper overflow-visible @container",
                        id: "challenges-page",
                        children: [(0, n.jsxs)("div", {
                            className: "flex items-center gap-2 mt-4",
                            children: [(0, n.jsx)(s.ChallengeSvg, {
                                width: 24,
                                height: 24
                            }), (0, n.jsx)("h1", {
                                className: "text-xl text-font-color m-0",
                                children: (null == c ? void 0 : c.heading) || u("challenges")
                            })]
                        }), (0, n.jsxs)("div", {
                            className: "gap-5 grid",
                            children: [(0, n.jsxs)("div", {
                                className: "flex h-11 p-1 items-start max-w-[185px] rounded-md bg-[#262c52]",
                                children: [(0, n.jsx)(l.Z, {
                                    buttonType: "base",
                                    classType: ["nav-section-toggle"],
                                    text: u("active"),
                                    activeItem: "active" === p,
                                    method: function() {
                                        return j("active")
                                    }
                                }), (0, n.jsx)(l.Z, {
                                    buttonType: "base",
                                    classType: ["nav-section-toggle"],
                                    text: u("completed"),
                                    activeItem: "completed" === p,
                                    method: function() {
                                        return j("completed")
                                    }
                                })]
                            }), (0, n.jsx)("div", {
                                className: "grid grid-cols-1 @[800px]:grid-cols-2 @[1100px]:grid-cols-3 @[1300px]:grid-cols-3 gap-y-[28px] gap-x-[24px] w-full",
                                children: h && h.length > 0 ? h.map(function(e) {
                                    return (0, n.jsx)(v, {
                                        challenge: e,
                                        locale: d
                                    }, e.id)
                                }) : (0, n.jsx)("div", {
                                    className: "relative text-lg mt-8 mb-9 text-white text-nowrap",
                                    children: (0, n.jsx)("p", {
                                        children: u("no_results_found")
                                    })
                                })
                            }), (null == c ? void 0 : c.content) && (0, n.jsx)("section", {
                                className: "mb-11",
                                children: (0, n.jsx)("div", {
                                    className: "max-w-[1200px] w-full mx-auto",
                                    children: (0, n.jsx)(g.UQ, {
                                        type: "single",
                                        collapsible: !0,
                                        children: (0, n.jsxs)(g.Qd, {
                                            value: "About Rainbet Challenges",
                                            className: "border border-solid border-white/5 rounded-md overflow-hidden",
                                            children: [(0, n.jsx)(g.o4, {
                                                className: "bg-[#282D49] px-5 h-[50px] hover:no-underline text-sm font-medium",
                                                children: u("about_rainbet_challenges")
                                            }), (0, n.jsx)(g.vF, {
                                                className: "bg-[#171b34] p-[15px_20px]",
                                                children: (0, n.jsx)(i.VY, {
                                                    __html: null == c ? void 0 : c.content
                                                })
                                            })]
                                        })
                                    })
                                })
                            })]
                        })]
                    })]
                })
            }
        },
        47398: function(e, t, r) {
            "use strict";
            r.d(t, {
                VY: function() {
                    return en
                },
                ck: function() {
                    return er
                },
                fC: function() {
                    return et
                },
                xz: function() {
                    return ea
                }
            });
            var a = r(67294),
                n = r(25360),
                i = r(65936),
                s = r(28771),
                l = r(36206),
                o = r(77342),
                c = r(75320),
                d = r(9981),
                u = r(29115),
                x = r(91276),
                p = r(85893),
                m = "Collapsible",
                [f, h] = (0, n.b)(m),
                [v, g] = f(m),
                w = a.forwardRef((e, t) => {
                    let {
                        __scopeCollapsible: r,
                        open: n,
                        defaultOpen: i,
                        disabled: s,
                        onOpenChange: l,
                        ...d
                    } = e, [u, f] = (0, o.T)({
                        prop: n,
                        defaultProp: i ? ? !1,
                        onChange: l,
                        caller: m
                    });
                    return (0, p.jsx)(v, {
                        scope: r,
                        disabled: s,
                        contentId: (0, x.M)(),
                        open: u,
                        onOpenToggle: a.useCallback(() => f(e => !e), [f]),
                        children: (0, p.jsx)(c.WV.div, {
                            "data-state": C(u),
                            "data-disabled": s ? "" : void 0,
                            ...d,
                            ref: t
                        })
                    })
                });
            w.displayName = m;
            var b = "CollapsibleTrigger",
                j = a.forwardRef((e, t) => {
                    let {
                        __scopeCollapsible: r,
                        ...a
                    } = e, n = g(b, r);
                    return (0, p.jsx)(c.WV.button, {
                        type: "button",
                        "aria-controls": n.contentId,
                        "aria-expanded": n.open || !1,
                        "data-state": C(n.open),
                        "data-disabled": n.disabled ? "" : void 0,
                        disabled: n.disabled,
                        ...a,
                        ref: t,
                        onClick: (0, l.M)(e.onClick, n.onOpenToggle)
                    })
                });
            j.displayName = b;
            var _ = "CollapsibleContent",
                N = a.forwardRef((e, t) => {
                    let {
                        forceMount: r,
                        ...a
                    } = e, n = g(_, e.__scopeCollapsible);
                    return (0, p.jsx)(u.z, {
                        present: r || n.open,
                        children: ({
                            present: e
                        }) => (0, p.jsx)(y, { ...a,
                            ref: t,
                            present: e
                        })
                    })
                });
            N.displayName = _;
            var y = a.forwardRef((e, t) => {
                let {
                    __scopeCollapsible: r,
                    present: n,
                    children: i,
                    ...l
                } = e, o = g(_, r), [u, x] = a.useState(n), m = a.useRef(null), f = (0, s.e)(t, m), h = a.useRef(0), v = h.current, w = a.useRef(0), b = w.current, j = o.open || u, N = a.useRef(j), y = a.useRef(void 0);
                return a.useEffect(() => {
                    let e = requestAnimationFrame(() => N.current = !1);
                    return () => cancelAnimationFrame(e)
                }, []), (0, d.b)(() => {
                    let e = m.current;
                    if (e) {
                        y.current = y.current || {
                            transitionDuration: e.style.transitionDuration,
                            animationName: e.style.animationName
                        }, e.style.transitionDuration = "0s", e.style.animationName = "none";
                        let t = e.getBoundingClientRect();
                        h.current = t.height, w.current = t.width, N.current || (e.style.transitionDuration = y.current.transitionDuration, e.style.animationName = y.current.animationName), x(n)
                    }
                }, [o.open, n]), (0, p.jsx)(c.WV.div, {
                    "data-state": C(o.open),
                    "data-disabled": o.disabled ? "" : void 0,
                    id: o.contentId,
                    hidden: !j,
                    ...l,
                    ref: f,
                    style: {
                        "--radix-collapsible-content-height": v ? `${v}px` : void 0,
                        "--radix-collapsible-content-width": b ? `${b}px` : void 0,
                        ...e.style
                    },
                    children: j && i
                })
            });

            function C(e) {
                return e ? "open" : "closed"
            }
            var L = r(78990),
                k = "Accordion",
                R = ["Home", "End", "ArrowDown", "ArrowUp", "ArrowLeft", "ArrowRight"],
                [Z, A, z] = (0, i.B)(k),
                [T, D] = (0, n.b)(k, [z, h]),
                I = h(),
                S = a.forwardRef((e, t) => {
                    let {
                        type: r,
                        ...a
                    } = e;
                    return (0, p.jsx)(Z.Provider, {
                        scope: e.__scopeAccordion,
                        children: "multiple" === r ? (0, p.jsx)(O, { ...a,
                            ref: t
                        }) : (0, p.jsx)(F, { ...a,
                            ref: t
                        })
                    })
                });
            S.displayName = k;
            var [P, E] = T(k), [M, B] = T(k, {
                collapsible: !1
            }), F = a.forwardRef((e, t) => {
                let {
                    value: r,
                    defaultValue: n,
                    onValueChange: i = () => {},
                    collapsible: s = !1,
                    ...l
                } = e, [c, d] = (0, o.T)({
                    prop: r,
                    defaultProp: n ? ? "",
                    onChange: i,
                    caller: k
                });
                return (0, p.jsx)(P, {
                    scope: e.__scopeAccordion,
                    value: a.useMemo(() => c ? [c] : [], [c]),
                    onItemOpen: d,
                    onItemClose: a.useCallback(() => s && d(""), [s, d]),
                    children: (0, p.jsx)(M, {
                        scope: e.__scopeAccordion,
                        collapsible: s,
                        children: (0, p.jsx)(W, { ...l,
                            ref: t
                        })
                    })
                })
            }), O = a.forwardRef((e, t) => {
                let {
                    value: r,
                    defaultValue: n,
                    onValueChange: i = () => {},
                    ...s
                } = e, [l, c] = (0, o.T)({
                    prop: r,
                    defaultProp: n ? ? [],
                    onChange: i,
                    caller: k
                }), d = a.useCallback(e => c((t = []) => [...t, e]), [c]), u = a.useCallback(e => c((t = []) => t.filter(t => t !== e)), [c]);
                return (0, p.jsx)(P, {
                    scope: e.__scopeAccordion,
                    value: l,
                    onItemOpen: d,
                    onItemClose: u,
                    children: (0, p.jsx)(M, {
                        scope: e.__scopeAccordion,
                        collapsible: !0,
                        children: (0, p.jsx)(W, { ...s,
                            ref: t
                        })
                    })
                })
            }), [V, q] = T(k), W = a.forwardRef((e, t) => {
                let {
                    __scopeAccordion: r,
                    disabled: n,
                    dir: i,
                    orientation: o = "vertical",
                    ...d
                } = e, u = a.useRef(null), x = (0, s.e)(u, t), m = A(r), f = "ltr" === (0, L.gm)(i), h = (0, l.M)(e.onKeyDown, e => {
                    if (!R.includes(e.key)) return;
                    let t = e.target,
                        r = m().filter(e => !e.ref.current ? .disabled),
                        a = r.findIndex(e => e.ref.current === t),
                        n = r.length;
                    if (-1 === a) return;
                    e.preventDefault();
                    let i = a,
                        s = n - 1,
                        l = () => {
                            (i = a + 1) > s && (i = 0)
                        },
                        c = () => {
                            (i = a - 1) < 0 && (i = s)
                        };
                    switch (e.key) {
                        case "Home":
                            i = 0;
                            break;
                        case "End":
                            i = s;
                            break;
                        case "ArrowRight":
                            "horizontal" === o && (f ? l() : c());
                            break;
                        case "ArrowDown":
                            "vertical" === o && l();
                            break;
                        case "ArrowLeft":
                            "horizontal" === o && (f ? c() : l());
                            break;
                        case "ArrowUp":
                            "vertical" === o && c()
                    }
                    let d = i % n;
                    r[d].ref.current ? .focus()
                });
                return (0, p.jsx)(V, {
                    scope: r,
                    disabled: n,
                    direction: i,
                    orientation: o,
                    children: (0, p.jsx)(Z.Slot, {
                        scope: r,
                        children: (0, p.jsx)(c.WV.div, { ...d,
                            "data-orientation": o,
                            ref: x,
                            onKeyDown: n ? void 0 : h
                        })
                    })
                })
            }), Q = "AccordionItem", [Y, H] = T(Q), U = a.forwardRef((e, t) => {
                let {
                    __scopeAccordion: r,
                    value: a,
                    ...n
                } = e, i = q(Q, r), s = E(Q, r), l = I(r), o = (0, x.M)(), c = a && s.value.includes(a) || !1, d = i.disabled || e.disabled;
                return (0, p.jsx)(Y, {
                    scope: r,
                    open: c,
                    disabled: d,
                    triggerId: o,
                    children: (0, p.jsx)(w, {
                        "data-orientation": i.orientation,
                        "data-state": ee(c),
                        ...l,
                        ...n,
                        ref: t,
                        disabled: d,
                        open: c,
                        onOpenChange: e => {
                            e ? s.onItemOpen(a) : s.onItemClose(a)
                        }
                    })
                })
            });
            U.displayName = Q;
            var G = "AccordionHeader";
            a.forwardRef((e, t) => {
                let {
                    __scopeAccordion: r,
                    ...a
                } = e, n = q(k, r), i = H(G, r);
                return (0, p.jsx)(c.WV.h3, {
                    "data-orientation": n.orientation,
                    "data-state": ee(i.open),
                    "data-disabled": i.disabled ? "" : void 0,
                    ...a,
                    ref: t
                })
            }).displayName = G;
            var K = "AccordionTrigger",
                X = a.forwardRef((e, t) => {
                    let {
                        __scopeAccordion: r,
                        ...a
                    } = e, n = q(k, r), i = H(K, r), s = B(K, r), l = I(r);
                    return (0, p.jsx)(Z.ItemSlot, {
                        scope: r,
                        children: (0, p.jsx)(j, {
                            "aria-disabled": i.open && !s.collapsible || void 0,
                            "data-orientation": n.orientation,
                            id: i.triggerId,
                            ...l,
                            ...a,
                            ref: t
                        })
                    })
                });
            X.displayName = K;
            var $ = "AccordionContent",
                J = a.forwardRef((e, t) => {
                    let {
                        __scopeAccordion: r,
                        ...a
                    } = e, n = q(k, r), i = H($, r), s = I(r);
                    return (0, p.jsx)(N, {
                        role: "region",
                        "aria-labelledby": i.triggerId,
                        "data-orientation": n.orientation,
                        ...s,
                        ...a,
                        ref: t,
                        style: {
                            "--radix-accordion-content-height": "var(--radix-collapsible-content-height)",
                            "--radix-accordion-content-width": "var(--radix-collapsible-content-width)",
                            ...e.style
                        }
                    })
                });

            function ee(e) {
                return e ? "open" : "closed"
            }
            J.displayName = $;
            var et = S,
                er = U,
                ea = X,
                en = J
        }
    },
    function(e) {
        e.O(0, [5675, 3012, 2215, 8035, 8075, 404, 5323, 5662, 8695, 2888, 9774, 179], function() {
            return e(e.s = 60894)
        }), _N_E = e.O()
    }
]);