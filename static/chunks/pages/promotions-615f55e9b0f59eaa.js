(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [2996], {
        98299: function(e, t, n) {
            (window.__NEXT_P = window.__NEXT_P || []).push(["/promotions", function() {
                return n(55210)
            }])
        },
        89683: function(e, t, n) {
            "use strict";
            n.d(t, {
                Z: function() {
                    return c
                }
            });
            var i = n(20567),
                s = n(14932),
                o = n(47702),
                r = n(85893);

            function c(e) {
                var t = e.fill,
                    n = void 0 === t ? "white" : t,
                    c = (0, o._)(e, ["fill"]);
                return (0, r.jsx)("svg", (0, s._)((0, i._)({
                    xmlns: "http://www.w3.org/2000/svg",
                    width: "13",
                    height: "11",
                    viewBox: "0 0 13 11",
                    fill: n
                }, c), {
                    children: (0, r.jsx)("path", {
                        d: "M0 5.8082L4.45177 10.3828L13 1.62411L11.7728 0.382812L4.45177 7.88277L1.21024 4.55817L0 5.8082Z",
                        fill: n
                    })
                }))
            }
        },
        40305: function(e, t, n) {
            "use strict";
            n.d(t, {
                Z: function() {
                    return c
                }
            });
            var i = n(85893),
                s = n(85662),
                o = n(6042);
            n(39520), n(63381), n(96068);
            var r = n(67294);

            function c(e) {
                var t = e.content,
                    n = e.meta;
                return (0, r.useEffect)(function() {
                    document.querySelector(".body-content-container").scrollTo({
                        top: 0,
                        behavior: "instant"
                    })
                }, []), (0, i.jsxs)(i.Fragment, {
                    children: [(0, i.jsx)(o.default, {
                        meta: n
                    }), (0, i.jsx)(s.ZP, {
                        posts: {
                            content: t
                        },
                        nonav: !0,
                        wide: !0,
                        nometa: !0
                    })]
                })
            }
        },
        56526: function(e, t, n) {
            "use strict";
            n.d(t, {
                O: function() {
                    return c
                }
            });
            var i = n(11010),
                s = n(24043),
                o = n(97582),
                r = n(67294);

            function c() {
                var e, t = (0, r.useRef)(!1),
                    n = (0, s._)((0, r.useState)(!1), 2),
                    c = n[0],
                    a = n[1];
                return {
                    submit: (0, r.useCallback)((e = (0, i._)(function(e) {
                        return (0, o.Jh)(this, function(n) {
                            switch (n.label) {
                                case 0:
                                    if (t.current) return [2];
                                    t.current = !0, (0, r.startTransition)(function() {
                                        a(!0)
                                    }), n.label = 1;
                                case 1:
                                    return n.trys.push([1, , 3, 4]), [4, e()];
                                case 2:
                                    return n.sent(), [3, 4];
                                case 3:
                                    return t.current = !1, (0, r.startTransition)(function() {
                                        a(!1)
                                    }), [7];
                                case 4:
                                    return [2]
                            }
                        })
                    }), function(t) {
                        return e.apply(this, arguments)
                    }), []),
                    isSubmitting: c,
                    reset: function() {
                        return a(!1)
                    }
                }
            }
        },
        4596: function(e, t, n) {
            "use strict";
            n.d(t, {
                Z: function() {
                    return r
                }
            });
            var i = n(24043),
                s = n(56900),
                o = n(67294);

            function r(e, t) {
                var n = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
                    r = (0, i._)((0, o.useState)(""), 2),
                    c = r[0],
                    a = r[1],
                    l = (0, i._)((0, o.useState)(!1), 2),
                    d = l[0],
                    u = l[1],
                    m = (0, o.useRef)(null),
                    p = (0, o.useCallback)(function() {
                        var i;
                        if (void 0 === e) {
                            clearInterval(m.current), u(!0);
                            return
                        }(i = n ? (0, s.NI)(e, t) : (0, s.mR)(e, t)) ? (u(!1), a(i)) : (clearInterval(m.current), u(!0))
                    }, [e, n, t]);
                return (0, o.useEffect)(function() {
                    return m.current && clearInterval(m.current), p(), m.current = setInterval(function() {
                            p()
                        }, 1e3),
                        function() {
                            m.current && clearInterval(m.current)
                        }
                }, [p, e]), !d && c
            }
        },
        96068: function(e, t, n) {
            "use strict";
            n.d(t, {
                rb: function() {
                    return x
                }
            });
            var i, s, o = n(11010),
                r = n(20567),
                c = n(14932),
                a = n(97582),
                l = n(75645);
            n(56900), n(11163), n(67294);
            var d = (i = (0, o._)(function(e) {
                    var t, n, i;
                    return (0, a.Jh)(this, function(s) {
                        return t = e.url, n = e.language, i = e.headers, [2, l.x.post("v1/public/content", {
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
                u = n(63381),
                m = n(6623),
                p = n.n(m),
                h = n(87441),
                _ = n(39520),
                x = (s = (0, o._)(function(e) {
                    var t, n;
                    return (0, a.Jh)(this, function(i) {
                        switch (i.label) {
                            case 0:
                                return i.trys.push([0, 2, , 3]), [4, (0, h.TU)(e)];
                            case 1:
                                return t = i.sent(), [2, p().sanitize(t)];
                            case 2:
                                return n = i.sent(), (0, u.H)("Failed to sanitize content", n), [2, _.$t];
                            case 3:
                                return [2]
                        }
                    })
                }), function(e) {
                    return s.apply(this, arguments)
                });
            (0, o._)(function(e) {
                var t, n;
                return (0, a.Jh)(this, function(i) {
                    switch (i.label) {
                        case 0:
                            return [4, d(e)];
                        case 1:
                            if (!(null == (t = i.sent()) ? void 0 : t.content)) return [2, t];
                            return [4, x(null == t ? void 0 : t.content)];
                        case 2:
                            return n = i.sent(), [2, (0, c._)((0, r._)({}, t), {
                                content: n
                            })]
                    }
                })
            })
        },
        55210: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                __N_SSP: function() {
                    return H
                },
                default: function() {
                    return T
                }
            });
            var i = n(11010),
                s = n(24043),
                o = n(97582),
                r = n(85893),
                c = n(20567),
                a = n(14932),
                l = n(40305);

            function d(e) {
                return (0, r.jsx)("svg", (0, a._)((0, c._)({
                    xmlns: "http://www.w3.org/2000/svg",
                    width: "32",
                    height: "32",
                    viewBox: "0 0 32 32",
                    fill: "none"
                }, e), {
                    children: (0, r.jsx)("path", {
                        d: "M25.7081 24.2931C25.801 24.386 25.8747 24.4963 25.9249 24.6177C25.9752 24.7391 26.0011 24.8692 26.0011 25.0006C26.0011 25.132 25.9752 25.2621 25.9249 25.3835C25.8747 25.5048 25.801 25.6151 25.7081 25.7081C25.6151 25.801 25.5048 25.8747 25.3835 25.9249C25.2621 25.9752 25.132 26.0011 25.0006 26.0011C24.8692 26.0011 24.7391 25.9752 24.6177 25.9249C24.4963 25.8747 24.386 25.801 24.2931 25.7081L16.0006 17.4143L7.70806 25.7081C7.52042 25.8957 7.26592 26.0011 7.00056 26.0011C6.73519 26.0011 6.4807 25.8957 6.29306 25.7081C6.10542 25.5204 6 25.2659 6 25.0006C6 24.7352 6.10542 24.4807 6.29306 24.2931L14.5868 16.0006L6.29306 7.70806C6.10542 7.52042 6 7.26592 6 7.00056C6 6.73519 6.10542 6.4807 6.29306 6.29306C6.4807 6.10542 6.73519 6 7.00056 6C7.26592 6 7.52042 6.10542 7.70806 6.29306L16.0006 14.5868L24.2931 6.29306C24.4807 6.10542 24.7352 6 25.0006 6C25.2659 6 25.5204 6.10542 25.7081 6.29306C25.8957 6.4807 26.0011 6.73519 26.0011 7.00056C26.0011 7.26592 25.8957 7.52042 25.7081 7.70806L17.4143 16.0006L25.7081 24.2931Z",
                        fill: "white"
                    })
                }))
            }
            var u = n(89683),
                m = n(23223),
                p = n(50028),
                h = n(46415),
                _ = n(82573),
                x = n.n(_),
                v = n(41664),
                f = n.n(v),
                C = n(11163),
                j = n(67294),
                b = n(56526),
                g = n(4596),
                w = n(83973),
                N = n(63694),
                L = n(75645),
                P = n(72989),
                y = n(56900);

            function k(e) {
                var t, n = e.promoMutate,
                    c = (0, N.EC)(),
                    a = c.userData,
                    l = c.mutate,
                    d = (0, s._)((0, j.useState)(!1), 2),
                    u = d[0],
                    p = d[1],
                    h = (0, b.O)(),
                    _ = h.isSubmitting,
                    x = h.submit,
                    v = h.reset,
                    f = (0, g.Z)(Number(null == a ? void 0 : a.balance_promo), 900),
                    C = function(e) {
                        (0, P.Z)({
                            type: 1,
                            code: "su_reward",
                            replacements: {
                                TOKEN_AMOUNT: e.data.currency_amount_redeemed
                            }
                        })
                    },
                    k = function(e) {
                        (0, P.Z)({
                            type: 0,
                            code: "".concat(e.data.error)
                        })
                    },
                    I = (t = (0, i._)(function() {
                        return (0, o.Jh)(this, function(e) {
                            return x((0, i._)(function() {
                                var e, t;
                                return (0, o.Jh)(this, function(i) {
                                    switch (i.label) {
                                        case 0:
                                            p(!0), i.label = 1;
                                        case 1:
                                            return i.trys.push([1, 3, 4, 5]), [4, L.Z.post("promotions/claim", {
                                                promo_code: "no-wager-lock"
                                            })];
                                        case 2:
                                            return (e = i.sent()).data.success ? C(e) : (k(e), v()), [3, 5];
                                        case 3:
                                            return t = i.sent(), (0, y.F1)(P.Z)(t), v(), [3, 5];
                                        case 4:
                                            return p(!1), l(), n(), [7];
                                        case 5:
                                            return [2]
                                    }
                                })
                            })), [2]
                        })
                    }), function() {
                        return t.apply(this, arguments)
                    });
                return (0, r.jsx)("div", {
                    children: (0, r.jsx)(m.z, {
                        variant: "green",
                        onClick: I,
                        disabled: u || _,
                        className: "h-[36px] min-h-[36px] px-4",
                        children: f || (0, r.jsx)(w.M9, {
                            name: "claim",
                            as: "span"
                        })
                    })
                })
            }

            function I(e) {
                var t, n, i, s, o, c, a = e.pathname,
                    l = e.promotionName,
                    _ = e.promoData,
                    v = e.activePromo,
                    b = e.cancelPromoMethod,
                    g = e.cancelPromo,
                    w = e.setCancelPromo,
                    N = e.promoMutate,
                    L = e.userData,
                    P = e.promoCode,
                    y = e.isSubmitting,
                    I = (0, p.ZP)(),
                    Z = (0, h.Z)({
                        breakPointThree: 600
                    }),
                    z = (0, C.useRouter)(),
                    M = {
                        code: (t = (null == _ ? void 0 : _.promotions[P]) || {}).code,
                        deposited: t.deposited,
                        number: t.number,
                        active: null == v ? void 0 : v[P],
                        status: t.status
                    };
                return (0, j.useEffect)(function() {
                    var e, t, n = ("string" == typeof(null === (e = z.query) || void 0 === e ? void 0 : e.type) ? z.query.type.replace(/-\d$/, "") : "") === (null == M ? void 0 : null === (t = M.code) || void 0 === t ? void 0 : t.replace(/-\d$/, ""));
                    (n && (null == M ? void 0 : M.status) === "ineligible" || n && !L) && z.push("/promotions")
                }, [null == z ? void 0 : z.query]), (0, r.jsxs)("div", {
                    className: "".concat(x()["promotion-items-container"], " ").concat("ineligible" === M.status && x().darken),
                    children: [M.code.includes("wager-locked") ? (0, r.jsxs)("h3", {
                        children: ["40x ", l]
                    }) : (0, r.jsx)("h3", {
                        children: l
                    }), "wager-locked" === P && (0, r.jsxs)("div", {
                        className: "".concat(x()["deposit-list"], " ").concat(Z && x()[Z]),
                        children: [(0, r.jsxs)("div", {
                            className: x()["deposit-item"],
                            children: [(0, r.jsx)("div", {
                                className: "".concat(x()["number-container"], " ").concat(3 === M.number && "complete" === M.status || 2 === M.number || 3 === M.number ? x()["deposit-made"] : ""),
                                children: "1"
                            }), (0, r.jsxs)("div", {
                                className: x()["promotion-description-container"],
                                children: [(0, r.jsx)("div", {
                                    className: "".concat(x()["deposit-title"], " ").concat(3 === M.number && "complete" === M.status || 2 === M.number || 3 === M.number ? x()["deposit-made"] : ""),
                                    children: I("first_deposit_title")
                                }), (0, r.jsx)("div", {
                                    className: x()["deposit-options"],
                                    children: (0, r.jsxs)("div", {
                                        children: [(0, r.jsx)("span", {
                                            children: I("first_deposit_desc")
                                        }), M.code.includes("wager-locked") && (0, r.jsx)("span", {
                                            children: I("first_deposit_freespins")
                                        })]
                                    })
                                })]
                            })]
                        }), (0, r.jsxs)("div", {
                            className: x()["deposit-item"],
                            children: [(0, r.jsx)("div", {
                                className: "".concat(x()["number-container"], " ").concat(3 === M.number && "complete" === M.status || 3 === M.number || 3 === M.number ? x()["deposit-made"] : ""),
                                children: "2"
                            }), (0, r.jsxs)("div", {
                                className: x()["promotion-description-container"],
                                children: [(0, r.jsx)("div", {
                                    className: "".concat(x()["deposit-title"], " ").concat(3 === M.number && "complete" === M.status || 3 === M.number || 3 === M.number ? x()["deposit-made"] : ""),
                                    children: I("second_deposit_title")
                                }), (0, r.jsx)("div", {
                                    className: x()["deposit-options"],
                                    children: (0, r.jsxs)("div", {
                                        children: [(0, r.jsx)("span", {
                                            children: I("second_deposit_desc")
                                        }), M.code.includes("wager-locked") && (0, r.jsx)("span", {
                                            children: I("second_deposit_freespins")
                                        })]
                                    })
                                })]
                            })]
                        }), (0, r.jsxs)("div", {
                            className: x()["deposit-item"],
                            children: [(0, r.jsx)("div", {
                                className: "".concat(x()["number-container"], " ").concat(3 === M.number && "complete" === M.status ? x()["deposit-made"] : ""),
                                children: "3"
                            }), (0, r.jsxs)("div", {
                                className: x()["promotion-description-container"],
                                children: [(0, r.jsx)("div", {
                                    className: "".concat(x()["deposit-title"], " ").concat(3 === M.number && "complete" === M.status ? x()["deposit-made"] : ""),
                                    children: I("third_deposit_title")
                                }), (0, r.jsx)("div", {
                                    className: x()["deposit-options"],
                                    children: (0, r.jsxs)("div", {
                                        children: [(0, r.jsx)("span", {
                                            children: I("third_deposit_desc")
                                        }), M.code.includes("wager-locked") && (0, r.jsx)("span", {
                                            children: I("third_deposit_freespins")
                                        })]
                                    })
                                })]
                            })]
                        })]
                    }), "no-wager-lock" === P && (0, r.jsx)("div", {
                        className: "".concat(x()["deposit-list"], " ").concat(Z && x()[Z]),
                        children: (0, r.jsxs)("div", {
                            className: "".concat(x()["deposit-item"], " ").concat(x()["no-wager"]),
                            children: [(0, r.jsx)("div", {
                                className: "".concat(x()["number-container"], " ").concat("complete" === M.status && x()["deposit-made"]),
                                children: "1"
                            }), (0, r.jsxs)("div", {
                                className: x()["promotion-description-container"],
                                children: [(0, r.jsx)("div", {
                                    className: "".concat(x()["deposit-title"], " ").concat("complete" === M.status && x()["deposit-made"]),
                                    children: I("first_deposit_title")
                                }), (0, r.jsx)("div", {
                                    className: x()["deposit-options"],
                                    children: (0, r.jsx)("div", {
                                        children: (0, r.jsx)("span", {
                                            children: I("first_deposit_no-wager-lock-desc")
                                        })
                                    })
                                })]
                            })]
                        })
                    }), M.code === "".concat(P, "-1") && ("ineligible" === M.status ? (0, r.jsx)(m.z, {
                        variant: "normal",
                        className: "px-6",
                        disabled: !0,
                        children: I("not_eligible")
                    }) : "eligible" === M.status && L ? (0, r.jsx)("div", {
                        className: x()["active-button-container"],
                        children: (0, r.jsx)("div", {
                            children: (0, r.jsx)(f(), {
                                href: {
                                    pathname: a,
                                    query: {
                                        modal: "promotion",
                                        type: M.code
                                    }
                                },
                                children: (0, r.jsx)(m.z, {
                                    variant: "blue",
                                    size: "sm",
                                    className: "h-[36px] p-[12px_20px]",
                                    children: I("activate_promotion")
                                })
                            })
                        })
                    }) : "eligible" === M.status && !L && (0, r.jsx)("div", {
                        className: x()["active-button-container"],
                        children: (0, r.jsx)("div", {
                            children: (0, r.jsx)(f(), {
                                href: {
                                    pathname: a,
                                    query: {
                                        modal: "auth",
                                        tab: "login"
                                    }
                                },
                                replace: !0,
                                children: (0, r.jsx)(m.z, {
                                    variant: "green",
                                    className: "px-6",
                                    children: I("log_in_activate")
                                })
                            })
                        })
                    })), "cancelled" === M.status && (0, r.jsxs)(m.z, {
                        variant: "normal",
                        className: "px-6",
                        children: [(0, r.jsx)(d, {}), I("cancelled")]
                    }), M.code == "".concat(P, "-1") && "active" === M.status && !M.deposited && (0, r.jsxs)("div", {
                        className: "".concat(x()["change-promo"], " ").concat(Z && x()[Z]),
                        children: [(0, r.jsxs)(m.z, {
                            variant: "dark",
                            size: "sm",
                            className: "h-[36px] p-[12px_20px]",
                            children: [(0, r.jsx)(u.Z, {}), I("active_promotion")]
                        }), (0, r.jsx)(m.z, {
                            variant: "normal",
                            size: "sm",
                            className: "h-[36px] p-[12px_20px] border-[#4d5696] border-2 bg-[#3d457c] text-white",
                            onClick: function() {
                                return b(M.code)
                            },
                            disabled: y,
                            children: I("change_promo")
                        })]
                    }), (n = M.number, i = M.status, s = M.deposited, (1 === n && "active" === i && !0 === s || "active" === i && n >= 2) && (0, r.jsx)("div", {
                        className: x()["cancel-promo"],
                        children: g ? (0, r.jsxs)("div", {
                            className: x()["cancel-confirm"],
                            children: [(0, r.jsx)("p", {
                                children: I("are_you_sure")
                            }), (0, r.jsx)("p", {
                                className: x().brighter,
                                children: I("are_you_sure_desc")
                            }), (0, r.jsxs)("div", {
                                className: "flex items-center gap-2 mt-2",
                                children: [(0, r.jsx)("div", {
                                    children: (0, r.jsx)(m.z, {
                                        variant: "ghost",
                                        className: "px-6",
                                        onClick: function() {
                                            return b(M.code)
                                        },
                                        disabled: y,
                                        children: I("yes")
                                    })
                                }), (0, r.jsx)("div", {
                                    children: (0, r.jsx)(m.z, {
                                        variant: "normal",
                                        className: "px-6",
                                        onClick: function() {
                                            return w(!1)
                                        },
                                        children: I("no")
                                    })
                                })]
                            })]
                        }) : (0, r.jsxs)("div", {
                            className: "".concat(x()["change-promo"], " ").concat(Z && x()[Z]),
                            children: [(0, r.jsxs)("div", {
                                className: "".concat(x()["change-claim-container"], " ").concat(Z && x()[Z]),
                                children: [M.code.includes("wager-locked") && (0, r.jsxs)(m.z, {
                                    variant: "blue",
                                    size: "sm",
                                    className: "h-[36px] p-[12px_20px]",
                                    children: [(0, r.jsx)(u.Z, {}), I("promotion_active")]
                                }), M.code.includes("no-wager-lock") && (0, r.jsx)(k, {
                                    promoMutate: N
                                })]
                            }), (0, r.jsx)(f(), {
                                href: {
                                    pathname: a,
                                    query: {
                                        modal: "promotion-cancel",
                                        type: M.code
                                    }
                                },
                                children: (0, r.jsx)(m.z, {
                                    variant: "normal",
                                    size: "sm",
                                    className: "h-[36px] p-[12px_20px] border-[#4d5696] border-2 bg-[#3d457c] text-white",
                                    children: I("change_promo")
                                })
                            })]
                        })
                    })), "complete" === M.status && (0, r.jsx)("div", {
                        className: "".concat(x()["change-promo"], " ").concat(Z && x()[Z]),
                        children: (0, r.jsxs)(m.z, {
                            variant: "blue",
                            size: "sm",
                            className: "h-[36px] p-[12px_20px]",
                            children: [(0, r.jsx)(u.Z, {}), I("promotion_complete")]
                        })
                    }), (o = M.status, c = M.deposited, ("active" === o || "eligible" === o || "active" === o && "false" === c) && ("wager-locked" === P ? (0, r.jsx)("p", {
                        className: x()["games-disabled"],
                        children: I("promo_inactive_desc_wager_locked")
                    }) : (0, r.jsx)("p", {
                        className: x()["games-disabled"],
                        children: I("promo_inactive_desc_no_wager_lock")
                    })))]
                })
            }
            var Z = n(6042),
                z = n(63381),
                M = n(89681),
                S = n(5068),
                E = function(e) {
                    return L.Z.get(e).then(function(e) {
                        return e.data
                    })
                },
                O = [{
                    icon: (0, r.jsx)(function(e) {
                        return (0, r.jsx)("svg", (0, a._)((0, c._)({
                            xmlns: "http://www.w3.org/2000/svg",
                            width: "18",
                            height: "18",
                            viewBox: "0 0 18 18",
                            fill: "none"
                        }, e), {
                            children: (0, r.jsx)("path", {
                                d: "M17.3282 5.14461C17.1597 4.99694 16.951 4.90293 16.7288 4.87462C16.5065 4.84631 16.2809 4.88499 16.0808 4.98571L12.7832 6.62961L9.97066 1.95454C9.86991 1.78726 9.72762 1.64887 9.5576 1.5528C9.38759 1.45673 9.19563 1.40625 9.00035 1.40625C8.80507 1.40625 8.61311 1.45673 8.4431 1.5528C8.27308 1.64887 8.13079 1.78726 8.03004 1.95454L5.21754 6.62961L1.91918 4.98641C1.71928 4.88655 1.49429 4.84808 1.27257 4.87586C1.05085 4.90363 0.842305 4.99641 0.673214 5.14249C0.504123 5.28858 0.382049 5.48144 0.32237 5.69677C0.262691 5.91211 0.268077 6.1403 0.33785 6.35258L2.93941 14.3225C2.97859 14.4426 3.04423 14.5523 3.13149 14.6436C3.21874 14.735 3.32538 14.8055 3.44354 14.8501C3.56171 14.8947 3.68838 14.9122 3.81421 14.9014C3.94004 14.8905 4.06183 14.8515 4.17058 14.7873C4.18746 14.7774 5.93262 13.7811 8.99894 13.7811C12.0653 13.7811 13.8104 14.7788 13.8238 14.7866C13.9325 14.8516 14.0546 14.8914 14.1808 14.9028C14.307 14.9142 14.4342 14.8971 14.5529 14.8526C14.6715 14.8082 14.7787 14.7376 14.8663 14.646C14.954 14.5545 15.0199 14.4444 15.0592 14.3239L17.6607 6.35821C17.7325 6.14581 17.7393 5.9168 17.68 5.70056C17.6207 5.48433 17.4982 5.29073 17.3282 5.14461ZM13.7471 12.9036C12.8085 12.5436 11.1927 12.0936 8.99894 12.0936C6.80519 12.0936 5.18941 12.545 4.25074 12.905L2.3523 7.08946L4.92082 8.36703C5.17608 8.49301 5.46928 8.51877 5.74261 8.43925C6.01593 8.35972 6.24954 8.18068 6.39738 7.93743L8.99894 3.61391L11.6005 7.93813C11.7483 8.18139 11.982 8.36038 12.2554 8.43979C12.5287 8.51919 12.8219 8.49323 13.0771 8.36703L15.6449 7.08735L13.7471 12.9036Z",
                                fill: "white"
                            })
                        }))
                    }, {}),
                    title: "freespins_title",
                    desc: "freespins_desc"
                }, {
                    icon: (0, r.jsx)(function(e) {
                        return (0, r.jsx)("svg", (0, a._)((0, c._)({
                            xmlns: "http://www.w3.org/2000/svg",
                            width: "18",
                            height: "18",
                            viewBox: "0 0 18 18",
                            fill: "none"
                        }, e), {
                            children: (0, r.jsx)("path", {
                                d: "M17.0862 6.75314C17.0007 6.4911 16.8401 6.25996 16.6244 6.08845C16.4086 5.91694 16.1472 5.81262 15.8726 5.78845L11.8648 5.44181L10.2968 1.7054C10.189 1.45131 10.0087 1.23458 9.77855 1.08223C9.54836 0.929872 9.27843 0.848633 9.00239 0.848633C8.72636 0.848633 8.45643 0.929872 8.22624 1.08223C7.99606 1.23458 7.8158 1.45131 7.70794 1.7054L6.13786 5.44181L2.13005 5.78845C1.854 5.81131 1.59084 5.91518 1.3736 6.08704C1.15636 6.2589 0.99472 6.4911 0.908952 6.75448C0.823184 7.01787 0.817113 7.30072 0.8915 7.56754C0.965887 7.83437 1.11742 8.07328 1.32708 8.25431L4.37302 10.9121L3.45896 14.8665C3.39627 15.1358 3.41435 15.4175 3.51093 15.6766C3.60751 15.9356 3.7783 16.1605 4.00197 16.323C4.22563 16.4855 4.49223 16.5785 4.76845 16.5903C5.04467 16.6021 5.31824 16.5323 5.55497 16.3895L9.00029 14.297L12.4456 16.3895C12.6823 16.532 12.9558 16.6017 13.2319 16.5898C13.508 16.5779 13.7744 16.4848 13.998 16.3224C14.2215 16.1599 14.3922 15.9352 14.4888 15.6762C14.5853 15.4173 14.6035 15.1357 14.5409 14.8665L13.6268 10.9121L16.6728 8.25431C16.8819 8.07262 17.0327 7.83323 17.1062 7.56616C17.1798 7.2991 17.1728 7.01626 17.0862 6.75314ZM12.3929 9.74985C12.2 9.91762 12.0566 10.1348 11.9779 10.378C11.8992 10.6211 11.8883 10.8812 11.9464 11.1301L12.7472 14.5979L9.72802 12.7642C9.50876 12.6306 9.257 12.56 9.00029 12.56C8.74357 12.56 8.49181 12.6306 8.27255 12.7642L5.25333 14.5979L6.05419 11.1301C6.11223 10.8812 6.10133 10.6211 6.02266 10.378C5.94399 10.1348 5.80054 9.91762 5.60771 9.74985L2.9295 7.41337L6.45497 7.10821C6.71027 7.08635 6.95467 6.99488 7.16159 6.84376C7.3685 6.69263 7.52999 6.48764 7.62849 6.2511L9.00029 2.98228L10.3721 6.2511C10.4706 6.48764 10.6321 6.69263 10.839 6.84376C11.0459 6.99488 11.2903 7.08635 11.5456 7.10821L15.0711 7.41337L12.3929 9.74985Z",
                                fill: "white"
                            })
                        }))
                    }, {}),
                    title: "deposit_bonuses_title",
                    desc: "deposit_bonuses_desc"
                }, {
                    icon: (0, r.jsx)(function(e) {
                        return (0, r.jsx)("svg", (0, a._)((0, c._)({
                            xmlns: "http://www.w3.org/2000/svg",
                            width: "18",
                            height: "18",
                            viewBox: "0 0 18 18",
                            fill: "none"
                        }, e), {
                            children: (0, r.jsx)("path", {
                                d: "M16.3125 4.21875H14.9062V3.9375C14.9062 3.56454 14.7581 3.20685 14.4944 2.94313C14.2306 2.67941 13.873 2.53125 13.5 2.53125H4.5C4.12704 2.53125 3.76935 2.67941 3.50563 2.94313C3.24191 3.20685 3.09375 3.56454 3.09375 3.9375V4.21875H1.6875C1.50283 4.21875 1.31997 4.25512 1.14935 4.32579C0.978737 4.39646 0.823713 4.50005 0.693131 4.63063C0.429408 4.89435 0.28125 5.25204 0.28125 5.625V6.75C0.28218 7.57023 0.608427 8.3566 1.18842 8.93658C1.76841 9.51657 2.55477 9.84282 3.375 9.84375H3.42914C3.78951 10.8591 4.42021 11.7569 5.25323 12.4402C6.08625 13.1236 7.09 13.5666 8.15625 13.7215V14.9062H6.75C6.52622 14.9062 6.31161 14.9951 6.15338 15.1534C5.99514 15.3116 5.90625 15.5262 5.90625 15.75C5.90625 15.9738 5.99514 16.1884 6.15338 16.3466C6.31161 16.5049 6.52622 16.5938 6.75 16.5938H11.25C11.4738 16.5938 11.6884 16.5049 11.8466 16.3466C12.0049 16.1884 12.0938 15.9738 12.0938 15.75C12.0938 15.5262 12.0049 15.3116 11.8466 15.1534C11.6884 14.9951 11.4738 14.9062 11.25 14.9062H9.84375V13.7187C12.0192 13.4016 13.8185 11.8765 14.5547 9.84375H14.625C15.4452 9.84282 16.2316 9.51657 16.8116 8.93658C17.3916 8.3566 17.7178 7.57023 17.7188 6.75V5.625C17.7188 5.25204 17.5706 4.89435 17.3069 4.63063C17.0431 4.36691 16.6855 4.21875 16.3125 4.21875ZM1.96875 6.75V5.90625H3.09375V7.875C3.09375 7.96008 3.09375 8.04445 3.10008 8.12883C2.78116 8.06525 2.49413 7.89311 2.28786 7.64171C2.08159 7.39031 1.96882 7.07519 1.96875 6.75ZM13.2188 7.81172C13.2188 10.1552 11.3407 12.0762 9.03234 12.0938C8.47561 12.098 7.92354 11.992 7.40796 11.7819C6.89238 11.5718 6.42349 11.2618 6.02831 10.8696C5.63313 10.4774 5.31948 10.0109 5.10545 9.49695C4.89142 8.98299 4.78123 8.43175 4.78125 7.875V4.21875H13.2188V7.81172ZM16.0312 6.75C16.0312 7.07561 15.9183 7.39113 15.7115 7.64272C15.5048 7.8943 15.2172 8.06636 14.8978 8.12953C14.9034 8.02406 14.9062 7.91859 14.9062 7.81172V5.90625H16.0312V6.75Z",
                                fill: "white"
                            })
                        }))
                    }, {}),
                    title: "rewards_title",
                    desc: "rewards_desc",
                    classType: ["no-margin-bottom"]
                }],
                H = !0;

            function T(e) {
                var t, n = e.content,
                    c = e.meta,
                    a = (0, N.EC)(),
                    d = a.mutate,
                    u = a.userData,
                    m = (0, s._)((0, j.useState)(!1), 2),
                    h = m[0],
                    _ = m[1],
                    x = (0, s._)((0, j.useState)(null), 2),
                    v = x[0],
                    f = x[1],
                    g = (0, b.O)(),
                    w = g.isSubmitting,
                    y = g.submit,
                    k = g.reset,
                    H = (0, p.ZP)(),
                    T = (0, C.useRouter)(),
                    V = (0, S.ZP)("promotions/list", E, {
                        revalidateIfStale: !1,
                        revalidateOnFocus: !1,
                        revalidateOnReconnect: !1
                    }),
                    R = V.data,
                    F = V.mutate,
                    J = V.error;
                (0, j.useEffect)(function() {
                    if (null == R ? void 0 : R.promotions) {
                        var e = Object.entries(R.promotions),
                            t = e.some(function(e) {
                                return !0 === (0, s._)(e, 2)[1].selected
                            });
                        f(Object.fromEntries(e.map(function(e) {
                            var n = (0, s._)(e, 2),
                                i = n[0],
                                o = n[1];
                            return [i, !t || !0 === o.selected]
                        })))
                    }
                }, [R]);
                var q = (t = (0, i._)(function(e) {
                    return (0, o.Jh)(this, function(t) {
                        return y((0, i._)(function() {
                            var t, n;
                            return (0, o.Jh)(this, function(i) {
                                switch (i.label) {
                                    case 0:
                                        return i.trys.push([0, 2, 3, 4]), [4, L.Z.post("promotions/cancel", {
                                            promo_code: e
                                        })];
                                    case 1:
                                        return (t = i.sent()).data.success ? (0, P.Z)({
                                            code: "su_promotion_cancelled",
                                            type: 1
                                        }) : ((0, P.Z)({
                                            code: t.data.error,
                                            type: 0
                                        }), k()), F().then(function() {
                                            return d()
                                        }), [3, 4];
                                    case 2:
                                        return n = i.sent(), (0, z.H)(n), k(), [3, 4];
                                    case 3:
                                        return _(!1), [7];
                                    case 4:
                                        return [2]
                                }
                            })
                        })), [2]
                    })
                }), function(e) {
                    return t.apply(this, arguments)
                });
                return (0, j.useEffect)(function() {
                    F(), document.querySelector(".body-content-container").scrollTo({
                        top: 0,
                        behavior: "instant"
                    })
                }, [T.asPath, F]), (0, r.jsxs)(r.Fragment, {
                    children: [(0, r.jsx)(Z.default, {
                        meta: c
                    }), J && "er_no_active_promotions" === J ? null : (0, r.jsxs)(M.E.div, {
                        initial: {
                            opacity: 0
                        },
                        animate: {
                            opacity: 1
                        },
                        exit: {
                            opacity: 0
                        },
                        transition: {
                            duration: .3,
                            delay: .2
                        },
                        className: "bg-[#1c223e] p-[30px] text-[13px] mb-[30px] grid gap-8 rounded-md",
                        children: [(0, r.jsxs)("div", {
                            className: "grid gap-4",
                            children: [(0, r.jsx)("h1", {
                                className: "text-xl m-0 leading-[1em]",
                                children: H("promotions")
                            }), (0, r.jsx)("p", {
                                className: "text-[#7078a3]",
                                children: H("promo_page_desc")
                            })]
                        }), (0, r.jsxs)("div", {
                            className: "grid gap-10 [@media(min-width:1400px)]:grid-cols-2",
                            children: [(null == R ? void 0 : R.promotions) && (0, r.jsx)("div", {
                                className: "grid gap-6",
                                children: Object.keys(R.promotions).map(function(e) {
                                    return (0, r.jsx)(I, {
                                        pathname: T.asPath.split("?")[0],
                                        promotionName: H(e),
                                        activePromo: v,
                                        promoData: R,
                                        cancelPromoMethod: q,
                                        cancelPromo: h,
                                        setCancelPromo: _,
                                        promoMutate: F,
                                        userData: u,
                                        promoCode: e,
                                        isSubmitting: w
                                    }, e)
                                })
                            }), (0, r.jsx)("div", {
                                children: (0, r.jsx)("div", {
                                    className: "grid gap-7",
                                    children: O.map(function(e, t) {
                                        return (0, r.jsxs)("div", {
                                            className: "flex gap-2.5",
                                            children: [(0, r.jsx)("div", {
                                                className: "w-8 h-8 flex-shrink-0 flex justify-center items-center rounded-full bg-primary-fill-color",
                                                children: e.icon
                                            }), (0, r.jsxs)("div", {
                                                className: "grid gap-1",
                                                children: [(0, r.jsx)("div", {
                                                    className: "text-[#c1c4dc] text-[13px] leading-normal",
                                                    children: H(e.title)
                                                }), (0, r.jsx)("p", {
                                                    className: "text-[#7078a3] text-[13px] font-normal leading-[130%]",
                                                    children: H(e.desc)
                                                })]
                                            })]
                                        }, t)
                                    })
                                })
                            })]
                        })]
                    }), (0, r.jsx)(l.Z, {
                        content: n,
                        meta: c
                    })]
                })
            }
        },
        82573: function(e) {
            e.exports = {
                "golden-text": "PromotionItems_golden-text__XuD1m",
                "promotion-items-container": "PromotionItems_promotion-items-container__RSf5b",
                darken: "PromotionItems_darken__7flc5",
                "active-promo": "PromotionItems_active-promo__FrO0U",
                "deposit-list": "PromotionItems_deposit-list__jkl4F",
                "deposit-item": "PromotionItems_deposit-item__Wsm8I",
                "no-wager": "PromotionItems_no-wager__LMY5Y",
                "number-container": "PromotionItems_number-container__3amdH",
                "deposit-made": "PromotionItems_deposit-made__pLyuN",
                "promotion-description-container": "PromotionItems_promotion-description-container__OuFWx",
                "deposit-title": "PromotionItems_deposit-title__ZYRe1",
                "deposit-options": "PromotionItems_deposit-options__kZTrJ",
                "mobile-two": "PromotionItems_mobile-two__ejjKa",
                "mobile-three": "PromotionItems_mobile-three___G633",
                "active-button-container": "PromotionItems_active-button-container__zOgPm",
                "games-disabled": "PromotionItems_games-disabled__0G1Yn",
                "change-promo": "PromotionItems_change-promo__9MR3B",
                "promo-active-button": "PromotionItems_promo-active-button__kiRLw",
                "canceled-button-container": "PromotionItems_canceled-button-container__FI2Sw",
                "promotion-bonus-container": "PromotionItems_promotion-bonus-container__pb9z_",
                "icon-container": "PromotionItems_icon-container__a0EE8",
                "bonus-title": "PromotionItems_bonus-title___W043",
                "no-margin-bottom": "PromotionItems_no-margin-bottom__3_pMw",
                "change-claim-container": "PromotionItems_change-claim-container__WjmKh"
            }
        }
    },
    function(e) {
        e.O(0, [5675, 6710, 5662, 2888, 9774, 179], function() {
            return e(e.s = 98299)
        }), _N_E = e.O()
    }
]);