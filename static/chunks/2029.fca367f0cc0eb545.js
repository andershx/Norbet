"use strict";
(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [2029], {
        48350: function(e, n, r) {
            var t = r(20567),
                o = r(14932),
                s = r(24043),
                i = r(85893),
                a = r(23223),
                u = r(40108),
                c = r(67294),
                l = (0, c.forwardRef)(function(e, n) {
                    var r = e.value,
                        s = e.register,
                        a = e.children,
                        u = s.name,
                        l = (0, c.useId)(),
                        d = (0, c.useMemo)(function() {
                            return encodeURIComponent("".concat(u, "-").concat(l))
                        }, [u, l]);
                    return (0, i.jsxs)("label", {
                        htmlFor: d,
                        ref: n,
                        className: "w-full",
                        children: [(0, i.jsx)("input", (0, o._)((0, t._)({
                            id: d,
                            type: "radio",
                            value: r,
                            className: "peer"
                        }, s), {
                            hidden: !0
                        })), a]
                    })
                });
            l.displayName = "ButtonSwitch-Item";
            var d = ["ghost-blue", "none"],
                p = function(e) {
                    return e.children
                },
                m = (0, c.memo)(function(e) {
                    var n = e.selected,
                        r = e.options,
                        t = e.register,
                        o = e.variant,
                        m = void 0 === o ? d : o,
                        f = e.buttonWrapper,
                        h = void 0 === f ? p : f,
                        x = e.isNew,
                        v = void 0 !== x && x,
                        b = (0, c.useRef)([]),
                        g = (0, s._)((0, c.useMemo)(function() {
                            return [m[0] || "ghost-blue", m[1] || "none"]
                        }, [m]), 2),
                        j = g[0],
                        N = g[1],
                        w = (0, c.useMemo)(function() {
                            return (0, u.cn)("inline-flex border border-solid rounded-[9px] p-[3px]", v ? "bg-[#7C83B1]/10 border-[#7C83B1]/10" : "bg-[#5E679E]/20 border-[#5E679E]/35")
                        }, [v]);
                    return (0, i.jsx)("div", {
                        className: w,
                        children: r.map(function(e, r) {
                            return (0, i.jsx)(l, {
                                value: e.value,
                                register: t,
                                ref: function(e) {
                                    e && (b.current[r] = e)
                                },
                                children: (0, i.jsx)(h, {
                                    option: e,
                                    children: (0, i.jsx)(a.z, {
                                        type: "button",
                                        variant: n === e.value ? j : N,
                                        disabled: !1,
                                        className: (0, u.cn)("h-[38px] min-h-[38px] [&_svg]:size-8 pointer-events-auto disabled:pointer-events-auto", v ? "w-full px-5 text-sm [@media(max-width:650px)]:px-4" : "w-[80px] px-1", v && n !== e.value && "text-[#5B628C]"),
                                        onClick: function() {
                                            var e;
                                            null === (e = b.current[r]) || void 0 === e || e.click()
                                        },
                                        children: v ? e.label : function e(n, r) {
                                            if ("string" == typeof n) return n.length <= r ? n : n.slice(0, r).trim() + "..";
                                            if (c.isValidElement(n)) {
                                                var t = c.Children.map(n.props.children, function(n) {
                                                    return e(n, r)
                                                });
                                                return c.cloneElement(n, {}, t)
                                            }
                                            return Array.isArray(n) ? n.map(function(n) {
                                                return e(n, r)
                                            }) : n
                                        }(e.label, 8)
                                    })
                                })
                            }, e.value)
                        })
                    })
                });
            n.Z = m
        },
        62029: function(e, n, r) {
            r.r(n);
            var t = r(85893),
                o = r(67294),
                s = r(48350),
                i = r(23223),
                a = r(40108),
                u = r(41664),
                c = r.n(u),
                l = r(39332),
                d = r(87536),
                p = r(82375),
                m = r(50028),
                f = (0, o.memo)(function(e) {
                    var n = e.children,
                        r = e.option;
                    return (0, t.jsx)(c(), {
                        href: "/".concat(r.value),
                        children: n
                    })
                }),
                h = (0, o.memo)(function(e) {
                    var n = e.menuState,
                        r = (0, o.useCallback)(function(e) {
                            return (0, a.cn)("w-[34px] h-[34px] min-h-[34px] px-0 [&_svg]:size-5", "border-[1.5px] overflow-hidden", e ? "shadow-[inset_0_0_12px_rgba(255,255,255,0.25)]" : "bg-transparent border-transparent", e ? "[&_path]:opacity-100" : "border-none hover:!bg-white/5")
                        }, []),
                        s = (0, o.useMemo)(function() {
                            return r("casino" === n)
                        }, [r, n]),
                        u = (0, o.useMemo)(function() {
                            return r("sportsbook" === n)
                        }, [r, n]),
                        l = (0, o.useMemo)(function() {
                            return "casino" === n ? "ghost-blue" : "normal"
                        }, [n]),
                        d = (0, o.useMemo)(function() {
                            return "sportsbook" === n ? "ghost-orange" : "normal"
                        }, [n]);
                    return (0, t.jsx)("div", {
                        className: "flex items-center justify-center",
                        children: (0, t.jsxs)("div", {
                            className: "flex items-center flex-col gap-[2px] p-[3px] w-[40px] bg-gradient-to-b from-[#7C83B1]/20 to-[#5E679E]/20 border border-solid border-[#5E679E]/35 rounded-md",
                            children: [(0, t.jsx)(c(), {
                                href: "/casino",
                                children: (0, t.jsx)(i.z, {
                                    variant: l,
                                    className: s,
                                    children: (0, t.jsx)(p.CasinoNavBarIcon, {
                                        miniVersion: !0
                                    })
                                })
                            }), (0, t.jsx)(c(), {
                                href: "/sportsbook",
                                children: (0, t.jsx)(i.z, {
                                    variant: d,
                                    className: u,
                                    children: (0, t.jsx)(p.SportsNavBarIcon, {
                                        miniVersion: !0
                                    })
                                })
                            })]
                        })
                    })
                });
            n.default = (0, o.memo)(function(e) {
                var n = e.miniVersion,
                    r = (0, l.usePathname)(),
                    i = (0, m.ZP)(),
                    a = (0, o.useRef)(),
                    u = (0, o.useMemo)(function() {
                        return r.includes("sports") && !r.includes("sportsbook-rules") ? "sportsbook" : "casino"
                    }, [r]),
                    c = (0, d.cI)({
                        defaultValues: {
                            "menu-state": u
                        }
                    }),
                    x = c.register,
                    v = c.watch,
                    b = c.setValue,
                    g = v("menu-state"),
                    j = (0, o.useMemo)(function() {
                        return (0, t.jsxs)(t.Fragment, {
                            children: [(0, t.jsx)("span", {
                                children: i("casino")
                            }), "casino" === g && (0, t.jsx)(p.CasinoNavBarIcon, {})]
                        })
                    }, [i, g]),
                    N = (0, o.useMemo)(function() {
                        return (0, t.jsxs)(t.Fragment, {
                            children: [(0, t.jsx)("span", {
                                children: i("sports")
                            }), "sportsbook" === g && (0, t.jsx)(p.SportsNavBarIcon, {})]
                        })
                    }, [i, g]),
                    w = (0, o.useMemo)(function() {
                        return [{
                            label: j,
                            value: "casino"
                        }, {
                            label: N,
                            value: "sportsbook"
                        }]
                    }, [j, N]),
                    k = (0, o.useMemo)(function() {
                        return ["casino" === g ? "ghost-blue" : "ghost-orange", "none"]
                    }, [g]);
                return ((0, o.useEffect)(function() {
                    a.current !== r && (a.current = r, b("menu-state", u))
                }, [u, b, r]), n) ? (0, t.jsx)(h, {
                    menuState: g
                }) : (0, t.jsx)(s.Z, {
                    options: w,
                    register: x("menu-state"),
                    selected: g,
                    variant: k,
                    buttonWrapper: f
                })
            })
        }
    }
]);