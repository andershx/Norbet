"use strict";
(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [1242, 5380], {
        32424: function(e, t, n) {
            var a = n(20567),
                o = n(14932),
                l = n(85893);
            n(67294), t.Z = function(e) {
                return (0, l.jsx)("svg", (0, o._)((0, a._)({
                    width: "12",
                    height: "12",
                    viewBox: "0 0 24 24",
                    fill: "none",
                    xmlns: "http://www.w3.org/2000/svg"
                }, e), {
                    children: (0, l.jsx)("path", {
                        d: "M17.296 12.796L9.796 20.296C9.584 20.508 9.298 20.626 8.998 20.626C8.698 20.626 8.412 20.508 8.2 20.296C7.988 20.084 7.87 19.798 7.87 19.498C7.87 19.198 7.988 18.912 8.2 18.7L14.9 12L8.2 5.3C8.1 5.2 8.016 5.084 7.97 4.956C7.924 4.828 7.9 4.698 7.9 4.566C7.9 4.434 7.924 4.304 7.97 4.176C8.016 4.048 8.1 3.932 8.2 3.832C8.3 3.732 8.416 3.648 8.544 3.602C8.672 3.556 8.802 3.532 8.934 3.532C9.066 3.532 9.196 3.556 9.324 3.602C9.452 3.648 9.568 3.732 9.668 3.832L17.168 11.332C17.268 11.432 17.352 11.548 17.398 11.676C17.444 11.804 17.468 11.934 17.468 12.066C17.468 12.198 17.444 12.328 17.398 12.456C17.352 12.584 17.268 12.7 17.168 12.8Z",
                        fill: "#E8E5FF"
                    })
                }))
            }
        },
        47689: function(e, t, n) {
            var a = n(20567),
                o = n(14932),
                l = n(85893);
            n(67294), t.Z = function(e) {
                return (0, l.jsx)("svg", (0, o._)((0, a._)({
                    width: "12",
                    height: "12",
                    viewBox: "0 0 24 24",
                    fill: "none",
                    xmlns: "http://www.w3.org/2000/svg"
                }, e), {
                    children: (0, l.jsx)("path", {
                        d: "M6.704 12.796L14.204 20.296C14.416 20.508 14.702 20.626 15.002 20.626C15.302 20.626 15.588 20.508 15.8 20.296C16.012 20.084 16.13 19.798 16.13 19.498C16.13 19.198 16.012 18.912 15.8 18.7L9.1 12L15.8 5.3C15.9 5.2 15.984 5.084 16.03 4.956C16.076 4.828 16.1 4.698 16.1 4.566C16.1 4.434 16.076 4.304 16.03 4.176C15.984 4.048 15.9 3.932 15.8 3.832C15.7 3.732 15.584 3.648 15.456 3.602C15.328 3.556 15.198 3.532 15.066 3.532C14.934 3.532 14.804 3.556 14.676 3.602C14.548 3.648 14.432 3.732 14.332 3.832L6.832 11.332C6.732 11.432 6.648 11.548 6.602 11.676C6.556 11.804 6.532 11.934 6.532 12.066C6.532 12.198 6.556 12.328 6.602 12.456C6.648 12.584 6.732 12.7 6.832 12.8Z",
                        fill: "#E8E5FF"
                    })
                }))
            }
        },
        71242: function(e, t, n) {
            n.r(t), n.d(t, {
                default: function() {
                    return m
                }
            });
            var a = n(24043),
                o = n(248),
                l = n(85893),
                r = n(32424),
                i = n(47689),
                s = n(29566),
                c = n(50028),
                d = n(46415),
                u = n(39396),
                h = n(39520),
                x = n(89681),
                p = n(13114),
                v = n(67294),
                f = n(55380),
                g = n(19013),
                b = n(42865);

            function m(e) {
                var t, n = e.heading,
                    m = e.searchSection,
                    C = e.default_sort_by,
                    j = e.carousel,
                    w = void 0 !== j && j,
                    _ = e.isSlotsPage,
                    y = void 0 !== _ && _,
                    N = (0, a._)((0, v.useState)(""), 2),
                    S = N[0],
                    E = N[1],
                    Z = (0, a._)((0, v.useState)(""), 2),
                    k = Z[0],
                    L = Z[1],
                    P = (0, a._)((0, v.useState)(void 0 === C ? "popular" : C), 2),
                    F = P[0],
                    O = P[1],
                    B = (0, a._)((0, v.useState)(6), 2),
                    M = B[0],
                    A = B[1],
                    D = null !== (t = (0, u.I4)(u.FP.PROVIDERS, [])) && void 0 !== t ? t : h.ow,
                    T = (0, d.Z)({
                        breakPointThree: 600
                    }),
                    z = (0, a._)((0, v.useState)(0), 2),
                    I = z[0],
                    R = z[1],
                    V = (0, a._)((0, v.useState)(1), 2),
                    W = V[0],
                    q = V[1],
                    G = (0, a._)((0, v.useState)(!1), 2),
                    H = G[0],
                    J = G[1],
                    K = (0, a._)((0, v.useState)(!1), 2),
                    Q = K[0],
                    U = K[1],
                    X = (0, c.ZP)(),
                    Y = (0, v.useCallback)(function() {
                        var e = I + M;
                        e < D.length && (q(1), R(e))
                    }, [M, I, D.length]),
                    $ = (0, v.useCallback)(function() {
                        var e = I - M;
                        e >= 0 && (q(-1), R(e))
                    }, [M, I]);
                (0, v.useEffect)(function() {
                    A("mobile-one" === T ? 6 : "mobile-two" === T ? 5 : "mobile-three" === T ? 4 : "mobile-four" === T ? 3 : 8)
                }, [T]), (0, v.useEffect)(function() {
                    J(!0)
                }, []);
                var ee = (0, v.useMemo)(function() {
                    var e = (0, o._)(D).sort(function(e, t) {
                        return e.sort - t.sort
                    });
                    return w ? e.slice(I, I + M) : e
                }, [D, I, M, w]);
                return (0, l.jsxs)(x.E.section, {
                    initial: {
                        opacity: 0
                    },
                    animate: {
                        opacity: H ? 1 : 0
                    },
                    transition: {
                        duration: .3,
                        ease: "easeOut"
                    },
                    className: "relative overflow-x-hidden pt-1 flex flex-col gap-[14px]",
                    children: [n && (0, l.jsxs)("div", {
                        className: "flex items-center gap-2.5",
                        children: [(0, l.jsx)(s.LC, {
                            className: "w-[22px] h-[22px] text-white"
                        }), (0, l.jsx)("p", {
                            className: "text-lg font-medium text-white",
                            children: X(n)
                        })]
                    }), (0, l.jsxs)("div", {
                        className: "flex absolute right-0 top-0",
                        children: [(0, l.jsx)("button", {
                            className: "flex items-center justify-center w-[49px] h-[32px] rounded-[6px] border border-solid border-[rgba(124,131,177,0.2)] rounded-r-none cursor-pointer border-r-[0.5px] bg-[#292E52] transition-all duration-100 ".concat(0 === I ? "opacity-50 cursor-default" : "hover:border-[rgba(124,131,177,0.4)] hover:from-[rgba(124,131,177,0.4)] hover:to-[rgba(94,103,158,0.4)]"),
                            onClick: 0 === I ? null : $,
                            children: (0, l.jsx)(i.Z, {
                                className: "".concat(0 === I ? "opacity-50" : "")
                            })
                        }), (0, l.jsx)("button", {
                            className: "flex items-center justify-center w-[49px] h-[32px] rounded-[6px] border border-solid border-[rgba(124,131,177,0.2)] rounded-l-none cursor-pointer border-l-[0.5px] bg-[#292E52] transition-all duration-100 ".concat(I + M >= D.length ? "opacity-50 cursor-default" : "hover:border-[rgba(124,131,177,0.4)] hover:from-[rgba(124,131,177,0.4)] hover:to-[rgba(94,103,158,0.4)]"),
                            onClick: I + M >= D.length ? null : Y,
                            children: (0, l.jsx)(r.Z, {
                                className: "".concat(I + M >= D.length ? "opacity-50" : "")
                            })
                        })]
                    }), void 0 !== m && m && (0, l.jsxs)("div", {
                        className: "flex flex-col gap-3 p-6 rounded-lg bg-gradient-to-b from-[#171c36] to-[#171c36]/80 border border-white/5",
                        children: [(0, l.jsx)(g.Z, {
                            name: "search",
                            value: S,
                            onChange: E,
                            placeholder: "Search",
                            icon: (0, l.jsx)("svg", {
                                className: "w-5 h-5 fill-current"
                            })
                        }), (0, l.jsxs)("div", {
                            className: "flex gap-3",
                            children: [(0, l.jsx)(f.default, {
                                value: k,
                                options: [{
                                    value: "Bgaming",
                                    label: "Bgaming"
                                }],
                                onSelect: L,
                                placeholder: "Provider"
                            }), (0, l.jsx)(f.default, {
                                value: F,
                                options: [{
                                    value: "popular",
                                    label: "Popular"
                                }, {
                                    value: "amount-won",
                                    label: "Amount Won"
                                }, {
                                    value: "a-z",
                                    label: "A-Z"
                                }, {
                                    value: "z-a",
                                    label: "Z-A"
                                }],
                                onSelect: O,
                                placeholder: "Sort By"
                            })]
                        })]
                    }), (0, l.jsx)(p.M, {
                        initial: !1,
                        mode: "wait",
                        custom: W,
                        children: (0, l.jsx)(x.E.div, {
                            custom: W,
                            variants: {
                                hidden: function(e) {
                                    return {
                                        x: e > 0 ? "50px" : "-50px",
                                        opacity: 0
                                    }
                                },
                                visible: {
                                    x: 0,
                                    opacity: 1,
                                    transition: {
                                        duration: .2
                                    }
                                },
                                exit: function(e) {
                                    return {
                                        x: e > 0 ? "-50px" : "50px",
                                        opacity: 0,
                                        transition: {
                                            duration: .2
                                        }
                                    }
                                }
                            },
                            initial: !!w && "hidden",
                            animate: "visible",
                            exit: "exit",
                            className: "grid grid-flow-col gap-2.5 auto-cols-[calc(100%_/_var(--cols)_-_10px_*_(var(--cols)-1)/var(--cols))] select-none",
                            style: {
                                "--cols": M
                            },
                            drag: !!w && "x",
                            dragConstraints: {
                                right: 0,
                                left: 0
                            },
                            dragElastic: .2,
                            onDragStart: function() {
                                return U(!0)
                            },
                            onDragEnd: function(e, t) {
                                var n = t.offset,
                                    a = t.velocity;
                                U(!1);
                                var o = Math.abs(n.x) * a.x;
                                o < -50 ? Y() : o > 50 && $()
                            },
                            children: ee.map(function(e, t) {
                                return (0, l.jsx)("div", {
                                    className: "".concat(Q ? "pointer-events-none" : ""),
                                    children: (0, l.jsx)(b.Z, {
                                        item: e,
                                        isSlotsPage: y
                                    })
                                }, "".concat(e.id, "-").concat(I + t))
                            })
                        }, w ? I : "static")
                    })]
                })
            }
        },
        55380: function(e, t, n) {
            n.r(t), n.d(t, {
                default: function() {
                    return c
                }
            });
            var a = n(20567),
                o = n(14932),
                l = n(85893);
            n(67294);
            var r = n(80409),
                i = n.n(r),
                s = n(56900);

            function c(e) {
                var t, n, r = e.label,
                    c = e.errors,
                    d = e.name,
                    u = void 0 !== d && d,
                    h = e.readOnly,
                    x = e.placeholder,
                    p = e.classType,
                    v = e.style,
                    f = e.hasPaddingBottom,
                    g = e.icon,
                    b = void 0 !== g && g,
                    m = e.labelText;
                return (0, l.jsxs)("div", (0, o._)((0, a._)({
                    style: v
                }, (0, s.dh)(i(), "input-drop-down", b && "custom-width", p, b && "row-label", r && "icon-padding", !(void 0 === f || f) && "no-bottom-padding", "inputWrapper", (null == c ? void 0 : null === (t = c[u]) || void 0 === t ? void 0 : t.length) && "error")), {
                    children: [r ? (0, l.jsx)("div", {
                        className: i()["label-heading"],
                        children: (0, l.jsxs)("label", {
                            htmlFor: u,
                            children: [r, c && (null === (n = c[u]) || void 0 === n ? void 0 : n.length) ? c[u].map(function(e, t) {
                                return (0, l.jsx)("span", {
                                    className: i()["error-item"],
                                    children: e
                                }, t)
                            }) : null]
                        })
                    }) : null, (0, l.jsxs)("div", {
                        className: i()["container-icon"],
                        children: [b && (0, l.jsxs)("span", {
                            children: [b, " ", (0, l.jsxs)("label", {
                                htmlFor: u,
                                children: [void 0 !== m && m, ":"]
                            })]
                        }), (0, l.jsxs)("select", (0, o._)((0, a._)({}, {
                            disabled: void 0 !== h && h
                        }), {
                            defaultValue: e.selectedOption,
                            defaultChecked: e.selectedOption,
                            value: e.selectedOption,
                            onChange: e.onSelectOption,
                            id: u,
                            name: u,
                            children: [x && (0, l.jsx)("option", {
                                value: "",
                                disabled: !0,
                                hidden: !0,
                                children: x
                            }), e.options.map(function(e) {
                                return (0, l.jsx)("option", {
                                    value: e.value,
                                    children: e.label
                                }, e.value)
                            })]
                        }))]
                    })]
                }))
            }
        }
    }
]);