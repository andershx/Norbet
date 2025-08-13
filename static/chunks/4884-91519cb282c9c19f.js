(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [4884], {
        29384: function(e, n, t) {
            "use strict";
            t.d(n, {
                i: function() {
                    return u
                }
            });
            var i = t(20567),
                o = t(14932),
                r = t(24043),
                a = t(85893),
                l = t(40108),
                s = t(67294);

            function u(e) {
                var n = e.value,
                    t = e.className,
                    i = (0, r._)((0, s.useState)(!1), 2),
                    o = i[0],
                    u = i[1];
                return (0, s.useEffect)(function() {
                    var e = setTimeout(function() {
                        o && u(!1)
                    }, 1200);
                    return function() {
                        return clearTimeout(e)
                    }
                }, [o]), (0, a.jsx)("button", {
                    onClick: function(e) {
                        null == e || e.preventDefault(), n && (navigator.clipboard.writeText(n.toString()), u(!0))
                    },
                    className: (0, l.cn)("appearance-none border-0 outline-none cursor-pointer mt-1 mb-0 flex justify-center items-center relative", t),
                    children: (0, a.jsxs)("div", {
                        className: "relative flex items-center",
                        children: [(0, a.jsx)("div", {
                            className: "div-clip",
                            children: (0, a.jsx)(c, {
                                style: {
                                    strokeDasharray: 50,
                                    strokeDashoffset: o ? -50 : 0
                                },
                                className: "py-0 text-white w-[18px] h-[18px] transition-all duration-300 ease-in-out"
                            })
                        }), (0, a.jsx)(d, {
                            copied: o || void 0,
                            isvisible: o || void 0,
                            style: {
                                zIndex: 4,
                                strokeDasharray: 50,
                                strokeDashoffset: o ? 0 : -50
                            },
                            className: "text-[#6bd35e] absolute top[1]px left-[1]px w-full flex items-center transition-all duration-300 ease-in-out"
                        })]
                    })
                })
            }

            function c(e) {
                return (0, a.jsx)("div", {
                    style: {
                        opacity: (null == e ? void 0 : e.copied) ? 0 : 1
                    },
                    className: "w-[18px] h-[18px] transition-all duration-300 ease-in-out",
                    children: (0, a.jsx)("svg", (0, o._)((0, i._)({
                        viewBox: "0 0 30 30",
                        fill: "#454E79",
                        strokeWidth: "1.5",
                        strokeLinecap: "round",
                        strokeLinejoin: "round"
                    }, e), {
                        style: {
                            opacity: e.copied ? 0 : 1,
                            width: "16px",
                            height: "16px"
                        },
                        children: (0, a.jsx)("path", {
                            d: "M27 4H11C10.7348 4 10.4804 4.10536 10.2929 4.29289C10.1054 4.48043 10 4.73478 10 5V10H5C4.73478 10 4.48043 10.1054 4.29289 10.2929C4.10536 10.4804 4 10.7348 4 11V27C4 27.2652 4.10536 27.5196 4.29289 27.7071C4.48043 27.8946 4.73478 28 5 28H21C21.2652 28 21.5196 27.8946 21.7071 27.7071C21.8946 27.5196 22 27.2652 22 27V22H27C27.2652 22 27.5196 21.8946 27.7071 21.7071C27.8946 21.5196 28 21.2652 28 21V5C28 4.73478 27.8946 4.48043 27.7071 4.29289C27.5196 4.10536 27.2652 4 27 4ZM20 26H6V12H20V26ZM26 20H22V11C22 10.7348 21.8946 10.4804 21.7071 10.2929C21.5196 10.1054 21.2652 10 21 10H12V6H26V20Z",
                            fill: "#454E79"
                        })
                    }))
                })
            }

            function d(e) {
                return (0, a.jsx)("div", {
                    style: {
                        opacity: (null == e ? void 0 : e.copied) ? 1 : 0,
                        padding: "2px"
                    },
                    className: "absolute p-[2px] w-[18px] h-[18px] bg-[#191F3B] rounded-[125px] transition-all duration-300 ease-in-out",
                    children: (0, a.jsx)("svg", (0, o._)((0, i._)({
                        viewBox: "0 0 20 20",
                        fill: "none",
                        stroke: "currentColor",
                        strokeWidth: "1.5",
                        strokeLinecap: "round",
                        strokeLinejoin: "round"
                    }, e), {
                        children: (0, a.jsx)("path", {
                            d: "M13.25 4.75L6 12L2.75 8.75"
                        })
                    }))
                })
            }
        },
        42865: function(e, n, t) {
            "use strict";
            t.d(n, {
                Z: function() {
                    return u
                }
            });
            var i = t(85893),
                o = t(41664),
                r = t.n(o),
                a = t(25675),
                l = t.n(a),
                s = t(39332);

            function u(e) {
                var n = e.item,
                    t = e.providerPage,
                    o = e.isSlotsPage,
                    a = (0, s.usePathname)(),
                    u = n.logo || "/Images/fallback-image.png";
                return (0, i.jsx)(r(), {
                    shallow: !0,
                    prefetch: !1,
                    href: void 0 !== t && t ? {
                        pathname: "/casino/providers/".concat(n.code)
                    } : "Evolution" === n.name ? {
                        pathname: "/casino/live",
                        query: {
                            provider: n.name
                        }
                    } : {
                        pathname: (void 0 !== o && o ? a : "/casino/slots").replace(/\/+/g, "/"),
                        query: {
                            provider: n.name
                        }
                    },
                    className: "block bg-[#282D49] rounded-md p-2.5 border border-transparent hover:border-white/10 border-solid hover:-mt-[3px] duration-150",
                    style: {
                        transitionTimingFunction: "linear"
                    },
                    children: (0, i.jsx)("div", {
                        className: "relative w-full h-[45px] [@media(min-width:640px)]:w-[90px] [@media(min-width:640px)]:h-[45px] mx-auto",
                        children: (0, i.jsx)(l(), {
                            src: u,
                            alt: n.name,
                            fill: !0,
                            quality: 100,
                            priority: !0,
                            sizes: "(max-width: 640px) 100vw, 90px",
                            className: "object-contain",
                            loading: "eager"
                        })
                    })
                })
            }
        },
        19013: function(e, n, t) {
            "use strict";
            t.d(n, {
                Z: function() {
                    return _
                }
            });
            var i = t(20567),
                o = t(14932),
                r = t(24043),
                a = t(85893),
                l = t(67294),
                s = t(80409),
                u = t.n(s),
                c = t(64272),
                d = t(29384),
                p = t(33226);

            function _(e) {
                var n, t = e.name,
                    s = e.value,
                    _ = e.type,
                    h = void 0 === _ ? "text" : _,
                    v = e.label,
                    m = void 0 !== v && v,
                    x = e.dispatch,
                    f = e.method,
                    g = (e.step, e.min, e.eMethod),
                    I = e.param,
                    w = (e.inputType, e.dispatchType),
                    b = void 0 === w ? "FIELD" : w,
                    y = e.size,
                    j = void 0 === y ? 100 : y,
                    C = e.errors,
                    N = void 0 !== C && C,
                    k = e.error,
                    F = (e.errorMsg, e.inputSetup),
                    T = void 0 !== F && F,
                    H = e.rate,
                    Z = e.wallet,
                    V = void 0 !== Z && Z,
                    M = e.readOnly,
                    E = void 0 !== M && M,
                    D = e.classType,
                    L = e.inlineButtons,
                    S = void 0 !== L && L,
                    q = e.inlineError,
                    O = void 0 !== q && q,
                    B = (e.convertValues, e.specialBetSetter, e.icon),
                    P = void 0 !== B && B,
                    Q = e.IconItem,
                    R = void 0 !== Q && Q,
                    U = (e.iconPosition, e.placeholder),
                    W = void 0 === U ? "" : U,
                    A = e.valueIconCode,
                    K = void 0 !== A && A,
                    Y = e.copy,
                    z = void 0 !== Y && Y,
                    J = e.onFocus,
                    G = void 0 !== J && J,
                    X = e.addPlaceHolder,
                    $ = void 0 !== X && X,
                    ee = e.toolTip,
                    en = void 0 !== ee && ee,
                    et = (e.style, e.labelClass),
                    ei = e.outerRef,
                    eo = void 0 === ei ? null : ei,
                    er = e.pointerCursor,
                    ea = e.isFileSelector,
                    el = e.extraHeaderContent,
                    es = e.autoFocus,
                    eu = void 0 !== es && es,
                    ec = (0, l.useMemo)(function() {
                        return {
                            id: t,
                            name: t,
                            value: s,
                            type: h,
                            maxLength: j,
                            placeholder: W,
                            autoFocus: eu
                        }
                    }, [t, s, h, j, W, eu]),
                    ed = (0, r._)((0, l.useState)(!1), 2),
                    ep = (ed[0], ed[1]),
                    e_ = (0, r._)((0, l.useState)(), 2),
                    eh = (e_[0], e_[1]);
                (0, l.useEffect)(function() {
                    V && H && (V.activeFiat ? (ep((s / H[V.selectedFiat]).toFixed(8)), eh((0, a.jsx)(c.Z, {
                        type: "crypto",
                        wallet: V,
                        code: V.selectedCrypto
                    }))) : (eh((0, a.jsx)(c.Z, {
                        type: "fiat",
                        wallet: V
                    })), ep(V.selectedFiat + " " + (s * H[V.selectedFiat]).toFixed(2))))
                }, [V, H, s]);
                var ev = !!N,
                    em = (0, l.useRef)(null);
                x && (ec.onChange = function(e) {
                    ev && (em.current && clearTimeout(em.current), em.current = setTimeout(function() {
                        x({
                            type: "ERRORCHECK",
                            target: t,
                            payload: e.target.value
                        })
                    }, 1e3)), x({
                        type: b,
                        target: t,
                        payload: e.target.value
                    })
                }), f && ("number" === h ? ec.onChange = function(e) {
                    f(e.target.value, I)
                } : "file" === h && void 0 !== ea && ea ? ec.onChange = function(e) {
                    f(e.target.files[0], I)
                } : ec.onChange = function(e) {
                    f(e.target.value, I)
                }), g && ("number" === h ? (ec.onKeyPress = function(e) {
                    var n = e.keyCode || e.which;
                    (n < 48 || n > 57) && 46 !== n && e.preventDefault(), 46 === n && e.target.value.includes(".") && e.preventDefault()
                }, ec.onChange = function(e) {
                    var n = e.target.value;
                    (n.split(".")[1] ? n.split(".")[1].length : 0) > 2 && (n = n.slice(0, -1)), g(n, I)
                }) : ec.onChange = function(e) {
                    g(e.target.value, I)
                }), G && (ec.onFocus = function(e) {
                    G(I)
                });
                var ex = "\n        ".concat((void 0 === D ? [] : D).map(function(e) {
                    return u()[e]
                }).join(" "), "\n        ").concat(u()["reset-file-input"], "\n        ").concat(void 0 !== er && er ? u()["cursor-pointer"] : "", "\n    ");
                return (0, a.jsxs)("div", {
                    className: "".concat(m ? u()["icon-padding"] : null, " ").concat(u().inputWrapper, " ").concat(ex, " ").concat((null === (n = N[t]) || void 0 === n ? void 0 : n.length) || void 0 !== k && k ? u().error : ""),
                    children: [m ? (0, a.jsx)("div", {
                        className: "".concat(u()["label-heading"], " ").concat(u().labelClass),
                        children: (0, a.jsx)("label", {
                            htmlFor: t,
                            className: u()[void 0 === et ? "" : et],
                            children: m
                        })
                    }) : null, void 0 !== el && el || null, R && R, function() {
                        if (S || "inlineContent" === T || z) {
                            var e = (0, a.jsxs)("div", {
                                className: "\n              ".concat(u()["inline-btn-container"], "\n              ").concat(O ? u()["inline-error"] : null, "\n\n              "),
                                children: [K ? (0, a.jsx)("div", {
                                    className: u()["inline-value-icon"],
                                    children: K
                                }) : null, (0, a.jsx)("input", (0, i._)({
                                    id: t,
                                    className: V ? u()["icon-space"] : null
                                }, ec, en ? {
                                    onBlur: function() {
                                        $ && $(), null == en || en.toolTipMethod()
                                    }
                                } : {})), (0, a.jsxs)("div", {
                                    className: u()["btn-container"],
                                    children: [S || null, z && null !== s && (0, a.jsx)(d.i, {
                                        value: s
                                    })]
                                })]
                            });
                            return en ? (0, a.jsx)(p.Z, (0, o._)((0, i._)({}, en), {
                                children: e
                            })) : e
                        }
                        return E ? (0, a.jsx)(a.Fragment, {
                            children: (0, a.jsx)("input", (0, o._)((0, i._)({
                                value: s,
                                className: u()["read-only"],
                                readOnly: !0,
                                autoComplete: "off"
                            }, ec), {
                                required: !0
                            }))
                        }) : en ? (0, a.jsxs)(a.Fragment, {
                            children: [P ? (0, a.jsx)("div", {
                                className: u().icon,
                                children: P
                            }) : null, (0, a.jsx)(p.Z, (0, o._)((0, i._)({}, en), {
                                children: (0, a.jsx)("input", (0, o._)((0, i._)({
                                    className: ex
                                }, ec), {
                                    required: !0
                                }))
                            }))]
                        }) : (0, a.jsxs)(a.Fragment, {
                            children: [P ? (0, a.jsx)("div", {
                                className: u().icon,
                                children: P
                            }) : null, (0, a.jsx)("input", (0, o._)((0, i._)({
                                className: ex
                            }, ec), {
                                required: !0,
                                ref: eo
                            }))]
                        })
                    }()]
                })
            }
        },
        80409: function(e) {
            e.exports = {
                "golden-text": "Input_golden-text__UJs3p",
                inputWrapper: "Input_inputWrapper__ORvbi",
                "no-bottom-padding": "Input_no-bottom-padding__IIvT7",
                error: "Input_error__K5y_V",
                "input-error": "Input_input-error__loGT0",
                "error-item": "Input_error-item__FTM8X",
                row: "Input_row__UQ6Nq",
                "label-heading": "Input_label-heading__QCYSO",
                "label-variation": "Input_label-variation__9PCqm",
                "value-display": "Input_value-display__xUZeY",
                "value-icon": "Input_value-icon__GYh7Q",
                "container-icon": "Input_container-icon__hmar8",
                "row-label": "Input_row-label__ka_bQ",
                "input-drop-down": "Input_input-drop-down__UNQbN",
                "custom-width": "Input_custom-width__ZZA8U",
                icon: "Input_icon__jPyyO",
                "position-default": "Input_position-default__pi_Mp",
                "icon-padding": "Input_icon-padding__IswTH",
                "left-icon": "Input_left-icon__UuaK9",
                "inline-btn-container": "Input_inline-btn-container__Gptvf",
                "inline-value-icon": "Input_inline-value-icon__3RNAN",
                "dice-game-input": "Input_dice-game-input__JMeeZ",
                search: "Input_search__smhNL",
                "search-challenges": "Input_search-challenges__F_vE_",
                "search-input": "Input_search-input__J3iq_",
                "full-width": "Input_full-width__J7o2a",
                "icon-space": "Input_icon-space__pusul",
                "current-winnings": "Input_current-winnings__kuhQn",
                "inline-error": "Input_inline-error__STSY3",
                "btn-container": "Input_btn-container__4Z1OT",
                "mid-height": "Input_mid-height__xp5Hi",
                "crypto-address": "Input_crypto-address__kL1LE",
                "inline-crypto-address": "Input_inline-crypto-address__QXWkV",
                "no-padding": "Input_no-padding__wAtkM",
                flex: "Input_flex__bxxv2",
                "search-dropdown": "Input_search-dropdown__BRT7l",
                "search-dropdown-with-icon": "Input_search-dropdown-with-icon__u_Bz7",
                "search-dropdown-with-text": "Input_search-dropdown-with-text__vd700",
                "inline-drop-down": "Input_inline-drop-down__sn0my",
                "search-dropdown-steam": "Input_search-dropdown-steam__mlVx4",
                "icon-left": "Input_icon-left__NdaDO",
                "icon-adjustment": "Input_icon-adjustment__2_HtU",
                "icon-right": "Input_icon-right__0Kiwx",
                "no-icon-padding": "Input_no-icon-padding__i976K",
                "icon-label": "Input_icon-label__bluNV",
                "edit-height": "Input_edit-height__TvHhQ",
                "edit-height-precent": "Input_edit-height-precent__pskAd",
                "f2A-container": "Input_f2A-container__s76Zz",
                "register-inputs": "Input_register-inputs___TJv4",
                "modal-inputs": "Input_modal-inputs__BikMv",
                "white-placeholder": "Input_white-placeholder__LD_vv",
                "search-modal": "Input_search-modal__qnVC8",
                "no-border": "Input_no-border__p9iNM",
                "no-margin": "Input_no-margin__nWXfC",
                "row-item-small": "Input_row-item-small__slDkh",
                "row-item-large": "Input_row-item-large__OY_On",
                "center-text": "Input_center-text__vh_w_",
                "reset-file-input": "Input_reset-file-input__iIr7Y",
                "cursor-pointer": "Input_cursor-pointer__46ciZ"
            }
        }
    }
]);