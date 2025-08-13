"use strict";
(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [1752], {
        46069: function(e, t, r) {
            r.d(t, {
                fC: function() {
                    return y
                },
                z$: function() {
                    return C
                }
            });
            var n = r(67294),
                o = r(28771),
                a = r(25360),
                l = r(36206),
                u = r(77342),
                i = r(57898),
                c = r(7546),
                d = r(29115),
                s = r(75320),
                f = r(85893),
                p = "Checkbox",
                [v, m] = (0, a.b)(p),
                [h, g] = v(p);

            function w(e) {
                let {
                    __scopeCheckbox: t,
                    checked: r,
                    children: o,
                    defaultChecked: a,
                    disabled: l,
                    form: i,
                    name: c,
                    onCheckedChange: d,
                    required: s,
                    value: v = "on",
                    internal_do_not_use_render: m
                } = e, [g, w] = (0, u.T)({
                    prop: r,
                    defaultProp: a ? ? !1,
                    onChange: d,
                    caller: p
                }), [b, x] = n.useState(null), [y, M] = n.useState(null), C = n.useRef(!1), k = !b || !!i || !!b.closest("form"), E = {
                    checked: g,
                    disabled: l,
                    setChecked: w,
                    control: b,
                    setControl: x,
                    name: c,
                    form: i,
                    value: v,
                    hasConsumerStoppedPropagationRef: C,
                    required: s,
                    defaultChecked: !R(a) && a,
                    isFormControl: k,
                    bubbleInput: y,
                    setBubbleInput: M
                };
                return (0, f.jsx)(h, {
                    scope: t,
                    ...E,
                    children: "function" == typeof m ? m(E) : o
                })
            }
            var b = "CheckboxTrigger",
                x = n.forwardRef(({
                    __scopeCheckbox: e,
                    onKeyDown: t,
                    onClick: r,
                    ...a
                }, u) => {
                    let {
                        control: i,
                        value: c,
                        disabled: d,
                        checked: p,
                        required: v,
                        setControl: m,
                        setChecked: h,
                        hasConsumerStoppedPropagationRef: w,
                        isFormControl: x,
                        bubbleInput: y
                    } = g(b, e), M = (0, o.e)(u, m), C = n.useRef(p);
                    return n.useEffect(() => {
                        let e = i ? .form;
                        if (e) {
                            let t = () => h(C.current);
                            return e.addEventListener("reset", t), () => e.removeEventListener("reset", t)
                        }
                    }, [i, h]), (0, f.jsx)(s.WV.button, {
                        type: "button",
                        role: "checkbox",
                        "aria-checked": R(p) ? "mixed" : p,
                        "aria-required": v,
                        "data-state": j(p),
                        "data-disabled": d ? "" : void 0,
                        disabled: d,
                        value: c,
                        ...a,
                        ref: M,
                        onKeyDown: (0, l.M)(t, e => {
                            "Enter" === e.key && e.preventDefault()
                        }),
                        onClick: (0, l.M)(r, e => {
                            h(e => !!R(e) || !e), y && x && (w.current = e.isPropagationStopped(), w.current || e.stopPropagation())
                        })
                    })
                });
            x.displayName = b;
            var y = n.forwardRef((e, t) => {
                let {
                    __scopeCheckbox: r,
                    name: n,
                    checked: o,
                    defaultChecked: a,
                    required: l,
                    disabled: u,
                    value: i,
                    onCheckedChange: c,
                    form: d,
                    ...s
                } = e;
                return (0, f.jsx)(w, {
                    __scopeCheckbox: r,
                    checked: o,
                    defaultChecked: a,
                    disabled: u,
                    required: l,
                    onCheckedChange: c,
                    name: n,
                    form: d,
                    value: i,
                    internal_do_not_use_render: ({
                        isFormControl: e
                    }) => (0, f.jsxs)(f.Fragment, {
                        children: [(0, f.jsx)(x, { ...s,
                            ref: t,
                            __scopeCheckbox: r
                        }), e && (0, f.jsx)(E, {
                            __scopeCheckbox: r
                        })]
                    })
                })
            });
            y.displayName = p;
            var M = "CheckboxIndicator",
                C = n.forwardRef((e, t) => {
                    let {
                        __scopeCheckbox: r,
                        forceMount: n,
                        ...o
                    } = e, a = g(M, r);
                    return (0, f.jsx)(d.z, {
                        present: n || R(a.checked) || !0 === a.checked,
                        children: (0, f.jsx)(s.WV.span, {
                            "data-state": j(a.checked),
                            "data-disabled": a.disabled ? "" : void 0,
                            ...o,
                            ref: t,
                            style: {
                                pointerEvents: "none",
                                ...e.style
                            }
                        })
                    })
                });
            C.displayName = M;
            var k = "CheckboxBubbleInput",
                E = n.forwardRef(({
                    __scopeCheckbox: e,
                    ...t
                }, r) => {
                    let {
                        control: a,
                        hasConsumerStoppedPropagationRef: l,
                        checked: u,
                        defaultChecked: d,
                        required: p,
                        disabled: v,
                        name: m,
                        value: h,
                        form: w,
                        bubbleInput: b,
                        setBubbleInput: x
                    } = g(k, e), y = (0, o.e)(r, x), M = (0, i.D)(u), C = (0, c.t)(a);
                    n.useEffect(() => {
                        if (!b) return;
                        let e = Object.getOwnPropertyDescriptor(window.HTMLInputElement.prototype, "checked").set,
                            t = !l.current;
                        if (M !== u && e) {
                            let r = new Event("click", {
                                bubbles: t
                            });
                            b.indeterminate = R(u), e.call(b, !R(u) && u), b.dispatchEvent(r)
                        }
                    }, [b, M, u, l]);
                    let E = n.useRef(!R(u) && u);
                    return (0, f.jsx)(s.WV.input, {
                        type: "checkbox",
                        "aria-hidden": !0,
                        defaultChecked: d ? ? E.current,
                        required: p,
                        disabled: v,
                        name: m,
                        value: h,
                        form: w,
                        ...t,
                        tabIndex: -1,
                        ref: y,
                        style: { ...t.style,
                            ...C,
                            position: "absolute",
                            pointerEvents: "none",
                            opacity: 0,
                            margin: 0,
                            transform: "translateX(-100%)"
                        }
                    })
                });

            function R(e) {
                return "indeterminate" === e
            }

            function j(e) {
                return R(e) ? "indeterminate" : e ? "checked" : "unchecked"
            }
            E.displayName = k
        },
        31930: function(e, t, r) {
            r.d(t, {
                oC: function() {
                    return tf
                },
                VY: function() {
                    return ti
                },
                u4: function() {
                    return tr
                },
                ZA: function() {
                    return tc
                },
                ck: function() {
                    return ts
                },
                __: function() {
                    return td
                },
                Uv: function() {
                    return tu
                },
                Ee: function() {
                    return tp
                },
                Rk: function() {
                    return tv
                },
                fC: function() {
                    return ta
                },
                Z0: function() {
                    return tm
                },
                Tr: function() {
                    return th
                },
                tu: function() {
                    return tw
                },
                fF: function() {
                    return tg
                },
                xz: function() {
                    return tl
                }
            });
            var n = r(67294),
                o = r(36206),
                a = r(28771),
                l = r(25360),
                u = r(77342),
                i = r(75320),
                c = r(65936),
                d = r(78990),
                s = r(46063),
                f = r(27552),
                p = r(95420),
                v = r(91276),
                m = r(53990),
                h = r(42651),
                g = r(29115),
                w = r(79698),
                b = r(85893),
                x = "rovingFocusGroup.onEntryFocus",
                y = {
                    bubbles: !1,
                    cancelable: !0
                },
                M = "RovingFocusGroup",
                [C, k, E] = (0, c.B)(M),
                [R, j] = (0, l.b)(M, [E]),
                [D, I] = R(M),
                S = n.forwardRef((e, t) => (0, b.jsx)(C.Provider, {
                    scope: e.__scopeRovingFocusGroup,
                    children: (0, b.jsx)(C.Slot, {
                        scope: e.__scopeRovingFocusGroup,
                        children: (0, b.jsx)(_, { ...e,
                            ref: t
                        })
                    })
                }));
            S.displayName = M;
            var _ = n.forwardRef((e, t) => {
                    let {
                        __scopeRovingFocusGroup: r,
                        orientation: l,
                        loop: c = !1,
                        dir: s,
                        currentTabStopId: f,
                        defaultCurrentTabStopId: p,
                        onCurrentTabStopIdChange: v,
                        onEntryFocus: m,
                        preventScrollOnEntryFocus: h = !1,
                        ...g
                    } = e, C = n.useRef(null), E = (0, a.e)(t, C), R = (0, d.gm)(s), [j, I] = (0, u.T)({
                        prop: f,
                        defaultProp: p ? ? null,
                        onChange: v,
                        caller: M
                    }), [S, _] = n.useState(!1), A = (0, w.W)(m), P = k(r), F = n.useRef(!1), [N, O] = n.useState(0);
                    return n.useEffect(() => {
                        let e = C.current;
                        if (e) return e.addEventListener(x, A), () => e.removeEventListener(x, A)
                    }, [A]), (0, b.jsx)(D, {
                        scope: r,
                        orientation: l,
                        dir: R,
                        loop: c,
                        currentTabStopId: j,
                        onItemFocus: n.useCallback(e => I(e), [I]),
                        onItemShiftTab: n.useCallback(() => _(!0), []),
                        onFocusableItemAdd: n.useCallback(() => O(e => e + 1), []),
                        onFocusableItemRemove: n.useCallback(() => O(e => e - 1), []),
                        children: (0, b.jsx)(i.WV.div, {
                            tabIndex: S || 0 === N ? -1 : 0,
                            "data-orientation": l,
                            ...g,
                            ref: E,
                            style: {
                                outline: "none",
                                ...e.style
                            },
                            onMouseDown: (0, o.M)(e.onMouseDown, () => {
                                F.current = !0
                            }),
                            onFocus: (0, o.M)(e.onFocus, e => {
                                let t = !F.current;
                                if (e.target === e.currentTarget && t && !S) {
                                    let t = new CustomEvent(x, y);
                                    if (e.currentTarget.dispatchEvent(t), !t.defaultPrevented) {
                                        let e = P().filter(e => e.focusable);
                                        T([e.find(e => e.active), e.find(e => e.id === j), ...e].filter(Boolean).map(e => e.ref.current), h)
                                    }
                                }
                                F.current = !1
                            }),
                            onBlur: (0, o.M)(e.onBlur, () => _(!1))
                        })
                    })
                }),
                A = "RovingFocusGroupItem",
                P = n.forwardRef((e, t) => {
                    let {
                        __scopeRovingFocusGroup: r,
                        focusable: a = !0,
                        active: l = !1,
                        tabStopId: u,
                        children: c,
                        ...d
                    } = e, s = (0, v.M)(), f = u || s, p = I(A, r), m = p.currentTabStopId === f, h = k(r), {
                        onFocusableItemAdd: g,
                        onFocusableItemRemove: w,
                        currentTabStopId: x
                    } = p;
                    return n.useEffect(() => {
                        if (a) return g(), () => w()
                    }, [a, g, w]), (0, b.jsx)(C.ItemSlot, {
                        scope: r,
                        id: f,
                        focusable: a,
                        active: l,
                        children: (0, b.jsx)(i.WV.span, {
                            tabIndex: m ? 0 : -1,
                            "data-orientation": p.orientation,
                            ...d,
                            ref: t,
                            onMouseDown: (0, o.M)(e.onMouseDown, e => {
                                a ? p.onItemFocus(f) : e.preventDefault()
                            }),
                            onFocus: (0, o.M)(e.onFocus, () => p.onItemFocus(f)),
                            onKeyDown: (0, o.M)(e.onKeyDown, e => {
                                if ("Tab" === e.key && e.shiftKey) {
                                    p.onItemShiftTab();
                                    return
                                }
                                if (e.target !== e.currentTarget) return;
                                let t = function(e, t, r) {
                                    var n;
                                    let o = (n = e.key, "rtl" !== r ? n : "ArrowLeft" === n ? "ArrowRight" : "ArrowRight" === n ? "ArrowLeft" : n);
                                    if (!("vertical" === t && ["ArrowLeft", "ArrowRight"].includes(o)) && !("horizontal" === t && ["ArrowUp", "ArrowDown"].includes(o))) return F[o]
                                }(e, p.orientation, p.dir);
                                if (void 0 !== t) {
                                    if (e.metaKey || e.ctrlKey || e.altKey || e.shiftKey) return;
                                    e.preventDefault();
                                    let o = h().filter(e => e.focusable).map(e => e.ref.current);
                                    if ("last" === t) o.reverse();
                                    else if ("prev" === t || "next" === t) {
                                        var r, n;
                                        "prev" === t && o.reverse();
                                        let a = o.indexOf(e.currentTarget);
                                        o = p.loop ? (r = o, n = a + 1, r.map((e, t) => r[(n + t) % r.length])) : o.slice(a + 1)
                                    }
                                    setTimeout(() => T(o))
                                }
                            }),
                            children: "function" == typeof c ? c({
                                isCurrentTabStop: m,
                                hasTabStop: null != x
                            }) : c
                        })
                    })
                });
            P.displayName = A;
            var F = {
                ArrowLeft: "prev",
                ArrowUp: "prev",
                ArrowRight: "next",
                ArrowDown: "next",
                PageUp: "first",
                Home: "first",
                PageDown: "last",
                End: "last"
            };

            function T(e, t = !1) {
                let r = document.activeElement;
                for (let n of e)
                    if (n === r || (n.focus({
                            preventScroll: t
                        }), document.activeElement !== r)) return
            }
            var N = r(88426),
                O = r(23541),
                L = r(71930),
                V = ["Enter", " "],
                K = ["ArrowUp", "PageDown", "End"],
                W = ["ArrowDown", "PageUp", "Home", ...K],
                B = {
                    ltr: [...V, "ArrowRight"],
                    rtl: [...V, "ArrowLeft"]
                },
                G = {
                    ltr: ["ArrowLeft"],
                    rtl: ["ArrowRight"]
                },
                U = "Menu",
                [z, $, q] = (0, c.B)(U),
                [X, H] = (0, l.b)(U, [q, m.D7, j]),
                Y = (0, m.D7)(),
                Z = j(),
                [J, Q] = X(U),
                [ee, et] = X(U),
                er = e => {
                    let {
                        __scopeMenu: t,
                        open: r = !1,
                        children: o,
                        dir: a,
                        onOpenChange: l,
                        modal: u = !0
                    } = e, i = Y(t), [c, s] = n.useState(null), f = n.useRef(!1), p = (0, w.W)(l), v = (0, d.gm)(a);
                    return n.useEffect(() => {
                        let e = () => {
                                f.current = !0, document.addEventListener("pointerdown", t, {
                                    capture: !0,
                                    once: !0
                                }), document.addEventListener("pointermove", t, {
                                    capture: !0,
                                    once: !0
                                })
                            },
                            t = () => f.current = !1;
                        return document.addEventListener("keydown", e, {
                            capture: !0
                        }), () => {
                            document.removeEventListener("keydown", e, {
                                capture: !0
                            }), document.removeEventListener("pointerdown", t, {
                                capture: !0
                            }), document.removeEventListener("pointermove", t, {
                                capture: !0
                            })
                        }
                    }, []), (0, b.jsx)(m.fC, { ...i,
                        children: (0, b.jsx)(J, {
                            scope: t,
                            open: r,
                            onOpenChange: p,
                            content: c,
                            onContentChange: s,
                            children: (0, b.jsx)(ee, {
                                scope: t,
                                onClose: n.useCallback(() => p(!1), [p]),
                                isUsingKeyboardRef: f,
                                dir: v,
                                modal: u,
                                children: o
                            })
                        })
                    })
                };
            er.displayName = U;
            var en = n.forwardRef((e, t) => {
                let {
                    __scopeMenu: r,
                    ...n
                } = e, o = Y(r);
                return (0, b.jsx)(m.ee, { ...o,
                    ...n,
                    ref: t
                })
            });
            en.displayName = "MenuAnchor";
            var eo = "MenuPortal",
                [ea, el] = X(eo, {
                    forceMount: void 0
                }),
                eu = e => {
                    let {
                        __scopeMenu: t,
                        forceMount: r,
                        children: n,
                        container: o
                    } = e, a = Q(eo, t);
                    return (0, b.jsx)(ea, {
                        scope: t,
                        forceMount: r,
                        children: (0, b.jsx)(g.z, {
                            present: r || a.open,
                            children: (0, b.jsx)(h.h, {
                                asChild: !0,
                                container: o,
                                children: n
                            })
                        })
                    })
                };
            eu.displayName = eo;
            var ei = "MenuContent",
                [ec, ed] = X(ei),
                es = n.forwardRef((e, t) => {
                    let r = el(ei, e.__scopeMenu),
                        {
                            forceMount: n = r.forceMount,
                            ...o
                        } = e,
                        a = Q(ei, e.__scopeMenu),
                        l = et(ei, e.__scopeMenu);
                    return (0, b.jsx)(z.Provider, {
                        scope: e.__scopeMenu,
                        children: (0, b.jsx)(g.z, {
                            present: n || a.open,
                            children: (0, b.jsx)(z.Slot, {
                                scope: e.__scopeMenu,
                                children: l.modal ? (0, b.jsx)(ef, { ...o,
                                    ref: t
                                }) : (0, b.jsx)(ep, { ...o,
                                    ref: t
                                })
                            })
                        })
                    })
                }),
                ef = n.forwardRef((e, t) => {
                    let r = Q(ei, e.__scopeMenu),
                        l = n.useRef(null),
                        u = (0, a.e)(t, l);
                    return n.useEffect(() => {
                        let e = l.current;
                        if (e) return (0, O.Ry)(e)
                    }, []), (0, b.jsx)(em, { ...e,
                        ref: u,
                        trapFocus: r.open,
                        disableOutsidePointerEvents: r.open,
                        disableOutsideScroll: !0,
                        onFocusOutside: (0, o.M)(e.onFocusOutside, e => e.preventDefault(), {
                            checkForDefaultPrevented: !1
                        }),
                        onDismiss: () => r.onOpenChange(!1)
                    })
                }),
                ep = n.forwardRef((e, t) => {
                    let r = Q(ei, e.__scopeMenu);
                    return (0, b.jsx)(em, { ...e,
                        ref: t,
                        trapFocus: !1,
                        disableOutsidePointerEvents: !1,
                        disableOutsideScroll: !1,
                        onDismiss: () => r.onOpenChange(!1)
                    })
                }),
                ev = (0, N.Z8)("MenuContent.ScrollLock"),
                em = n.forwardRef((e, t) => {
                    let {
                        __scopeMenu: r,
                        loop: l = !1,
                        trapFocus: u,
                        onOpenAutoFocus: i,
                        onCloseAutoFocus: c,
                        disableOutsidePointerEvents: d,
                        onEntryFocus: v,
                        onEscapeKeyDown: h,
                        onPointerDownOutside: g,
                        onFocusOutside: w,
                        onInteractOutside: x,
                        onDismiss: y,
                        disableOutsideScroll: M,
                        ...C
                    } = e, k = Q(ei, r), E = et(ei, r), R = Y(r), j = Z(r), D = $(r), [I, _] = n.useState(null), A = n.useRef(null), P = (0, a.e)(t, A, k.onContentChange), F = n.useRef(0), T = n.useRef(""), N = n.useRef(0), O = n.useRef(null), V = n.useRef("right"), B = n.useRef(0), G = M ? L.Z : n.Fragment, U = e => {
                        let t = T.current + e,
                            r = D().filter(e => !e.disabled),
                            n = document.activeElement,
                            o = r.find(e => e.ref.current === n) ? .textValue,
                            a = function(e, t, r) {
                                var n;
                                let o = t.length > 1 && Array.from(t).every(e => e === t[0]) ? t[0] : t,
                                    a = (n = Math.max(r ? e.indexOf(r) : -1, 0), e.map((t, r) => e[(n + r) % e.length]));
                                1 === o.length && (a = a.filter(e => e !== r));
                                let l = a.find(e => e.toLowerCase().startsWith(o.toLowerCase()));
                                return l !== r ? l : void 0
                            }(r.map(e => e.textValue), t, o),
                            l = r.find(e => e.textValue === a) ? .ref.current;
                        ! function e(t) {
                            T.current = t, window.clearTimeout(F.current), "" !== t && (F.current = window.setTimeout(() => e(""), 1e3))
                        }(t), l && setTimeout(() => l.focus())
                    };
                    n.useEffect(() => () => window.clearTimeout(F.current), []), (0, f.EW)();
                    let z = n.useCallback(e => {
                        var t;
                        return V.current === O.current ? .side && !!(t = O.current ? .area) && function(e, t) {
                            let {
                                x: r,
                                y: n
                            } = e, o = !1;
                            for (let e = 0, a = t.length - 1; e < t.length; a = e++) {
                                let l = t[e],
                                    u = t[a],
                                    i = l.x,
                                    c = l.y,
                                    d = u.x,
                                    s = u.y;
                                c > n != s > n && r < (d - i) * (n - c) / (s - c) + i && (o = !o)
                            }
                            return o
                        }({
                            x: e.clientX,
                            y: e.clientY
                        }, t)
                    }, []);
                    return (0, b.jsx)(ec, {
                        scope: r,
                        searchRef: T,
                        onItemEnter: n.useCallback(e => {
                            z(e) && e.preventDefault()
                        }, [z]),
                        onItemLeave: n.useCallback(e => {
                            z(e) || (A.current ? .focus(), _(null))
                        }, [z]),
                        onTriggerLeave: n.useCallback(e => {
                            z(e) && e.preventDefault()
                        }, [z]),
                        pointerGraceTimerRef: N,
                        onPointerGraceIntentChange: n.useCallback(e => {
                            O.current = e
                        }, []),
                        children: (0, b.jsx)(G, { ...M ? {
                                as: ev,
                                allowPinchZoom: !0
                            } : void 0,
                            children: (0, b.jsx)(p.M, {
                                asChild: !0,
                                trapped: u,
                                onMountAutoFocus: (0, o.M)(i, e => {
                                    e.preventDefault(), A.current ? .focus({
                                        preventScroll: !0
                                    })
                                }),
                                onUnmountAutoFocus: c,
                                children: (0, b.jsx)(s.XB, {
                                    asChild: !0,
                                    disableOutsidePointerEvents: d,
                                    onEscapeKeyDown: h,
                                    onPointerDownOutside: g,
                                    onFocusOutside: w,
                                    onInteractOutside: x,
                                    onDismiss: y,
                                    children: (0, b.jsx)(S, {
                                        asChild: !0,
                                        ...j,
                                        dir: E.dir,
                                        orientation: "vertical",
                                        loop: l,
                                        currentTabStopId: I,
                                        onCurrentTabStopIdChange: _,
                                        onEntryFocus: (0, o.M)(v, e => {
                                            E.isUsingKeyboardRef.current || e.preventDefault()
                                        }),
                                        preventScrollOnEntryFocus: !0,
                                        children: (0, b.jsx)(m.VY, {
                                            role: "menu",
                                            "aria-orientation": "vertical",
                                            "data-state": eG(k.open),
                                            "data-radix-menu-content": "",
                                            dir: E.dir,
                                            ...R,
                                            ...C,
                                            ref: P,
                                            style: {
                                                outline: "none",
                                                ...C.style
                                            },
                                            onKeyDown: (0, o.M)(C.onKeyDown, e => {
                                                let t = e.target.closest("[data-radix-menu-content]") === e.currentTarget,
                                                    r = e.ctrlKey || e.altKey || e.metaKey,
                                                    n = 1 === e.key.length;
                                                t && ("Tab" === e.key && e.preventDefault(), !r && n && U(e.key));
                                                let o = A.current;
                                                if (e.target !== o || !W.includes(e.key)) return;
                                                e.preventDefault();
                                                let a = D().filter(e => !e.disabled).map(e => e.ref.current);
                                                K.includes(e.key) && a.reverse(),
                                                    function(e) {
                                                        let t = document.activeElement;
                                                        for (let r of e)
                                                            if (r === t || (r.focus(), document.activeElement !== t)) return
                                                    }(a)
                                            }),
                                            onBlur: (0, o.M)(e.onBlur, e => {
                                                e.currentTarget.contains(e.target) || (window.clearTimeout(F.current), T.current = "")
                                            }),
                                            onPointerMove: (0, o.M)(e.onPointerMove, e$(e => {
                                                let t = e.target,
                                                    r = B.current !== e.clientX;
                                                if (e.currentTarget.contains(t) && r) {
                                                    let t = e.clientX > B.current ? "right" : "left";
                                                    V.current = t, B.current = e.clientX
                                                }
                                            }))
                                        })
                                    })
                                })
                            })
                        })
                    })
                });
            es.displayName = ei;
            var eh = n.forwardRef((e, t) => {
                let {
                    __scopeMenu: r,
                    ...n
                } = e;
                return (0, b.jsx)(i.WV.div, {
                    role: "group",
                    ...n,
                    ref: t
                })
            });
            eh.displayName = "MenuGroup";
            var eg = n.forwardRef((e, t) => {
                let {
                    __scopeMenu: r,
                    ...n
                } = e;
                return (0, b.jsx)(i.WV.div, { ...n,
                    ref: t
                })
            });
            eg.displayName = "MenuLabel";
            var ew = "MenuItem",
                eb = "menu.itemSelect",
                ex = n.forwardRef((e, t) => {
                    let {
                        disabled: r = !1,
                        onSelect: l,
                        ...u
                    } = e, c = n.useRef(null), d = et(ew, e.__scopeMenu), s = ed(ew, e.__scopeMenu), f = (0, a.e)(t, c), p = n.useRef(!1);
                    return (0, b.jsx)(ey, { ...u,
                        ref: f,
                        disabled: r,
                        onClick: (0, o.M)(e.onClick, () => {
                            let e = c.current;
                            if (!r && e) {
                                let t = new CustomEvent(eb, {
                                    bubbles: !0,
                                    cancelable: !0
                                });
                                e.addEventListener(eb, e => l ? .(e), {
                                    once: !0
                                }), (0, i.jH)(e, t), t.defaultPrevented ? p.current = !1 : d.onClose()
                            }
                        }),
                        onPointerDown: t => {
                            e.onPointerDown ? .(t), p.current = !0
                        },
                        onPointerUp: (0, o.M)(e.onPointerUp, e => {
                            p.current || e.currentTarget ? .click()
                        }),
                        onKeyDown: (0, o.M)(e.onKeyDown, e => {
                            let t = "" !== s.searchRef.current;
                            !r && (!t || " " !== e.key) && V.includes(e.key) && (e.currentTarget.click(), e.preventDefault())
                        })
                    })
                });
            ex.displayName = ew;
            var ey = n.forwardRef((e, t) => {
                    let {
                        __scopeMenu: r,
                        disabled: l = !1,
                        textValue: u,
                        ...c
                    } = e, d = ed(ew, r), s = Z(r), f = n.useRef(null), p = (0, a.e)(t, f), [v, m] = n.useState(!1), [h, g] = n.useState("");
                    return n.useEffect(() => {
                        let e = f.current;
                        e && g((e.textContent ? ? "").trim())
                    }, [c.children]), (0, b.jsx)(z.ItemSlot, {
                        scope: r,
                        disabled: l,
                        textValue: u ? ? h,
                        children: (0, b.jsx)(P, {
                            asChild: !0,
                            ...s,
                            focusable: !l,
                            children: (0, b.jsx)(i.WV.div, {
                                role: "menuitem",
                                "data-highlighted": v ? "" : void 0,
                                "aria-disabled": l || void 0,
                                "data-disabled": l ? "" : void 0,
                                ...c,
                                ref: p,
                                onPointerMove: (0, o.M)(e.onPointerMove, e$(e => {
                                    l ? d.onItemLeave(e) : (d.onItemEnter(e), e.defaultPrevented || e.currentTarget.focus({
                                        preventScroll: !0
                                    }))
                                })),
                                onPointerLeave: (0, o.M)(e.onPointerLeave, e$(e => d.onItemLeave(e))),
                                onFocus: (0, o.M)(e.onFocus, () => m(!0)),
                                onBlur: (0, o.M)(e.onBlur, () => m(!1))
                            })
                        })
                    })
                }),
                eM = n.forwardRef((e, t) => {
                    let {
                        checked: r = !1,
                        onCheckedChange: n,
                        ...a
                    } = e;
                    return (0, b.jsx)(eS, {
                        scope: e.__scopeMenu,
                        checked: r,
                        children: (0, b.jsx)(ex, {
                            role: "menuitemcheckbox",
                            "aria-checked": eU(r) ? "mixed" : r,
                            ...a,
                            ref: t,
                            "data-state": ez(r),
                            onSelect: (0, o.M)(a.onSelect, () => n ? .(!!eU(r) || !r), {
                                checkForDefaultPrevented: !1
                            })
                        })
                    })
                });
            eM.displayName = "MenuCheckboxItem";
            var eC = "MenuRadioGroup",
                [ek, eE] = X(eC, {
                    value: void 0,
                    onValueChange: () => {}
                }),
                eR = n.forwardRef((e, t) => {
                    let {
                        value: r,
                        onValueChange: n,
                        ...o
                    } = e, a = (0, w.W)(n);
                    return (0, b.jsx)(ek, {
                        scope: e.__scopeMenu,
                        value: r,
                        onValueChange: a,
                        children: (0, b.jsx)(eh, { ...o,
                            ref: t
                        })
                    })
                });
            eR.displayName = eC;
            var ej = "MenuRadioItem",
                eD = n.forwardRef((e, t) => {
                    let {
                        value: r,
                        ...n
                    } = e, a = eE(ej, e.__scopeMenu), l = r === a.value;
                    return (0, b.jsx)(eS, {
                        scope: e.__scopeMenu,
                        checked: l,
                        children: (0, b.jsx)(ex, {
                            role: "menuitemradio",
                            "aria-checked": l,
                            ...n,
                            ref: t,
                            "data-state": ez(l),
                            onSelect: (0, o.M)(n.onSelect, () => a.onValueChange ? .(r), {
                                checkForDefaultPrevented: !1
                            })
                        })
                    })
                });
            eD.displayName = ej;
            var eI = "MenuItemIndicator",
                [eS, e_] = X(eI, {
                    checked: !1
                }),
                eA = n.forwardRef((e, t) => {
                    let {
                        __scopeMenu: r,
                        forceMount: n,
                        ...o
                    } = e, a = e_(eI, r);
                    return (0, b.jsx)(g.z, {
                        present: n || eU(a.checked) || !0 === a.checked,
                        children: (0, b.jsx)(i.WV.span, { ...o,
                            ref: t,
                            "data-state": ez(a.checked)
                        })
                    })
                });
            eA.displayName = eI;
            var eP = n.forwardRef((e, t) => {
                let {
                    __scopeMenu: r,
                    ...n
                } = e;
                return (0, b.jsx)(i.WV.div, {
                    role: "separator",
                    "aria-orientation": "horizontal",
                    ...n,
                    ref: t
                })
            });
            eP.displayName = "MenuSeparator";
            var eF = n.forwardRef((e, t) => {
                let {
                    __scopeMenu: r,
                    ...n
                } = e, o = Y(r);
                return (0, b.jsx)(m.Eh, { ...o,
                    ...n,
                    ref: t
                })
            });
            eF.displayName = "MenuArrow";
            var eT = "MenuSub",
                [eN, eO] = X(eT),
                eL = e => {
                    let {
                        __scopeMenu: t,
                        children: r,
                        open: o = !1,
                        onOpenChange: a
                    } = e, l = Q(eT, t), u = Y(t), [i, c] = n.useState(null), [d, s] = n.useState(null), f = (0, w.W)(a);
                    return n.useEffect(() => (!1 === l.open && f(!1), () => f(!1)), [l.open, f]), (0, b.jsx)(m.fC, { ...u,
                        children: (0, b.jsx)(J, {
                            scope: t,
                            open: o,
                            onOpenChange: f,
                            content: d,
                            onContentChange: s,
                            children: (0, b.jsx)(eN, {
                                scope: t,
                                contentId: (0, v.M)(),
                                triggerId: (0, v.M)(),
                                trigger: i,
                                onTriggerChange: c,
                                children: r
                            })
                        })
                    })
                };
            eL.displayName = eT;
            var eV = "MenuSubTrigger",
                eK = n.forwardRef((e, t) => {
                    let r = Q(eV, e.__scopeMenu),
                        l = et(eV, e.__scopeMenu),
                        u = eO(eV, e.__scopeMenu),
                        i = ed(eV, e.__scopeMenu),
                        c = n.useRef(null),
                        {
                            pointerGraceTimerRef: d,
                            onPointerGraceIntentChange: s
                        } = i,
                        f = {
                            __scopeMenu: e.__scopeMenu
                        },
                        p = n.useCallback(() => {
                            c.current && window.clearTimeout(c.current), c.current = null
                        }, []);
                    return n.useEffect(() => p, [p]), n.useEffect(() => {
                        let e = d.current;
                        return () => {
                            window.clearTimeout(e), s(null)
                        }
                    }, [d, s]), (0, b.jsx)(en, {
                        asChild: !0,
                        ...f,
                        children: (0, b.jsx)(ey, {
                            id: u.triggerId,
                            "aria-haspopup": "menu",
                            "aria-expanded": r.open,
                            "aria-controls": u.contentId,
                            "data-state": eG(r.open),
                            ...e,
                            ref: (0, a.F)(t, u.onTriggerChange),
                            onClick: t => {
                                e.onClick ? .(t), e.disabled || t.defaultPrevented || (t.currentTarget.focus(), r.open || r.onOpenChange(!0))
                            },
                            onPointerMove: (0, o.M)(e.onPointerMove, e$(t => {
                                i.onItemEnter(t), t.defaultPrevented || e.disabled || r.open || c.current || (i.onPointerGraceIntentChange(null), c.current = window.setTimeout(() => {
                                    r.onOpenChange(!0), p()
                                }, 100))
                            })),
                            onPointerLeave: (0, o.M)(e.onPointerLeave, e$(e => {
                                p();
                                let t = r.content ? .getBoundingClientRect();
                                if (t) {
                                    let n = r.content ? .dataset.side,
                                        o = "right" === n,
                                        a = t[o ? "left" : "right"],
                                        l = t[o ? "right" : "left"];
                                    i.onPointerGraceIntentChange({
                                        area: [{
                                            x: e.clientX + (o ? -5 : 5),
                                            y: e.clientY
                                        }, {
                                            x: a,
                                            y: t.top
                                        }, {
                                            x: l,
                                            y: t.top
                                        }, {
                                            x: l,
                                            y: t.bottom
                                        }, {
                                            x: a,
                                            y: t.bottom
                                        }],
                                        side: n
                                    }), window.clearTimeout(d.current), d.current = window.setTimeout(() => i.onPointerGraceIntentChange(null), 300)
                                } else {
                                    if (i.onTriggerLeave(e), e.defaultPrevented) return;
                                    i.onPointerGraceIntentChange(null)
                                }
                            })),
                            onKeyDown: (0, o.M)(e.onKeyDown, t => {
                                let n = "" !== i.searchRef.current;
                                !e.disabled && (!n || " " !== t.key) && B[l.dir].includes(t.key) && (r.onOpenChange(!0), r.content ? .focus(), t.preventDefault())
                            })
                        })
                    })
                });
            eK.displayName = eV;
            var eW = "MenuSubContent",
                eB = n.forwardRef((e, t) => {
                    let r = el(ei, e.__scopeMenu),
                        {
                            forceMount: l = r.forceMount,
                            ...u
                        } = e,
                        i = Q(ei, e.__scopeMenu),
                        c = et(ei, e.__scopeMenu),
                        d = eO(eW, e.__scopeMenu),
                        s = n.useRef(null),
                        f = (0, a.e)(t, s);
                    return (0, b.jsx)(z.Provider, {
                        scope: e.__scopeMenu,
                        children: (0, b.jsx)(g.z, {
                            present: l || i.open,
                            children: (0, b.jsx)(z.Slot, {
                                scope: e.__scopeMenu,
                                children: (0, b.jsx)(em, {
                                    id: d.contentId,
                                    "aria-labelledby": d.triggerId,
                                    ...u,
                                    ref: f,
                                    align: "start",
                                    side: "rtl" === c.dir ? "left" : "right",
                                    disableOutsidePointerEvents: !1,
                                    disableOutsideScroll: !1,
                                    trapFocus: !1,
                                    onOpenAutoFocus: e => {
                                        c.isUsingKeyboardRef.current && s.current ? .focus(), e.preventDefault()
                                    },
                                    onCloseAutoFocus: e => e.preventDefault(),
                                    onFocusOutside: (0, o.M)(e.onFocusOutside, e => {
                                        e.target !== d.trigger && i.onOpenChange(!1)
                                    }),
                                    onEscapeKeyDown: (0, o.M)(e.onEscapeKeyDown, e => {
                                        c.onClose(), e.preventDefault()
                                    }),
                                    onKeyDown: (0, o.M)(e.onKeyDown, e => {
                                        let t = e.currentTarget.contains(e.target),
                                            r = G[c.dir].includes(e.key);
                                        t && r && (i.onOpenChange(!1), d.trigger ? .focus(), e.preventDefault())
                                    })
                                })
                            })
                        })
                    })
                });

            function eG(e) {
                return e ? "open" : "closed"
            }

            function eU(e) {
                return "indeterminate" === e
            }

            function ez(e) {
                return eU(e) ? "indeterminate" : e ? "checked" : "unchecked"
            }

            function e$(e) {
                return t => "mouse" === t.pointerType ? e(t) : void 0
            }
            eB.displayName = eW;
            var eq = "DropdownMenu",
                [eX, eH] = (0, l.b)(eq, [H]),
                eY = H(),
                [eZ, eJ] = eX(eq),
                eQ = e => {
                    let {
                        __scopeDropdownMenu: t,
                        children: r,
                        dir: o,
                        open: a,
                        defaultOpen: l,
                        onOpenChange: i,
                        modal: c = !0
                    } = e, d = eY(t), s = n.useRef(null), [f, p] = (0, u.T)({
                        prop: a,
                        defaultProp: l ? ? !1,
                        onChange: i,
                        caller: eq
                    });
                    return (0, b.jsx)(eZ, {
                        scope: t,
                        triggerId: (0, v.M)(),
                        triggerRef: s,
                        contentId: (0, v.M)(),
                        open: f,
                        onOpenChange: p,
                        onOpenToggle: n.useCallback(() => p(e => !e), [p]),
                        modal: c,
                        children: (0, b.jsx)(er, { ...d,
                            open: f,
                            onOpenChange: p,
                            dir: o,
                            modal: c,
                            children: r
                        })
                    })
                };
            eQ.displayName = eq;
            var e0 = "DropdownMenuTrigger",
                e1 = n.forwardRef((e, t) => {
                    let {
                        __scopeDropdownMenu: r,
                        disabled: n = !1,
                        ...l
                    } = e, u = eJ(e0, r), c = eY(r);
                    return (0, b.jsx)(en, {
                        asChild: !0,
                        ...c,
                        children: (0, b.jsx)(i.WV.button, {
                            type: "button",
                            id: u.triggerId,
                            "aria-haspopup": "menu",
                            "aria-expanded": u.open,
                            "aria-controls": u.open ? u.contentId : void 0,
                            "data-state": u.open ? "open" : "closed",
                            "data-disabled": n ? "" : void 0,
                            disabled: n,
                            ...l,
                            ref: (0, a.F)(t, u.triggerRef),
                            onPointerDown: (0, o.M)(e.onPointerDown, e => {
                                n || 0 !== e.button || !1 !== e.ctrlKey || (u.onOpenToggle(), u.open || e.preventDefault())
                            }),
                            onKeyDown: (0, o.M)(e.onKeyDown, e => {
                                !n && (["Enter", " "].includes(e.key) && u.onOpenToggle(), "ArrowDown" === e.key && u.onOpenChange(!0), ["Enter", " ", "ArrowDown"].includes(e.key) && e.preventDefault())
                            })
                        })
                    })
                });
            e1.displayName = e0;
            var e9 = e => {
                let {
                    __scopeDropdownMenu: t,
                    ...r
                } = e, n = eY(t);
                return (0, b.jsx)(eu, { ...n,
                    ...r
                })
            };
            e9.displayName = "DropdownMenuPortal";
            var e2 = "DropdownMenuContent",
                e7 = n.forwardRef((e, t) => {
                    let {
                        __scopeDropdownMenu: r,
                        ...a
                    } = e, l = eJ(e2, r), u = eY(r), i = n.useRef(!1);
                    return (0, b.jsx)(es, {
                        id: l.contentId,
                        "aria-labelledby": l.triggerId,
                        ...u,
                        ...a,
                        ref: t,
                        onCloseAutoFocus: (0, o.M)(e.onCloseAutoFocus, e => {
                            i.current || l.triggerRef.current ? .focus(), i.current = !1, e.preventDefault()
                        }),
                        onInteractOutside: (0, o.M)(e.onInteractOutside, e => {
                            let t = e.detail.originalEvent,
                                r = 0 === t.button && !0 === t.ctrlKey,
                                n = 2 === t.button || r;
                            (!l.modal || n) && (i.current = !0)
                        }),
                        style: { ...e.style,
                            "--radix-dropdown-menu-content-transform-origin": "var(--radix-popper-transform-origin)",
                            "--radix-dropdown-menu-content-available-width": "var(--radix-popper-available-width)",
                            "--radix-dropdown-menu-content-available-height": "var(--radix-popper-available-height)",
                            "--radix-dropdown-menu-trigger-width": "var(--radix-popper-anchor-width)",
                            "--radix-dropdown-menu-trigger-height": "var(--radix-popper-anchor-height)"
                        }
                    })
                });
            e7.displayName = e2;
            var e5 = n.forwardRef((e, t) => {
                let {
                    __scopeDropdownMenu: r,
                    ...n
                } = e, o = eY(r);
                return (0, b.jsx)(eh, { ...o,
                    ...n,
                    ref: t
                })
            });
            e5.displayName = "DropdownMenuGroup";
            var e3 = n.forwardRef((e, t) => {
                let {
                    __scopeDropdownMenu: r,
                    ...n
                } = e, o = eY(r);
                return (0, b.jsx)(eg, { ...o,
                    ...n,
                    ref: t
                })
            });
            e3.displayName = "DropdownMenuLabel";
            var e6 = n.forwardRef((e, t) => {
                let {
                    __scopeDropdownMenu: r,
                    ...n
                } = e, o = eY(r);
                return (0, b.jsx)(ex, { ...o,
                    ...n,
                    ref: t
                })
            });
            e6.displayName = "DropdownMenuItem";
            var e8 = n.forwardRef((e, t) => {
                let {
                    __scopeDropdownMenu: r,
                    ...n
                } = e, o = eY(r);
                return (0, b.jsx)(eM, { ...o,
                    ...n,
                    ref: t
                })
            });
            e8.displayName = "DropdownMenuCheckboxItem";
            var e4 = n.forwardRef((e, t) => {
                let {
                    __scopeDropdownMenu: r,
                    ...n
                } = e, o = eY(r);
                return (0, b.jsx)(eR, { ...o,
                    ...n,
                    ref: t
                })
            });
            e4.displayName = "DropdownMenuRadioGroup";
            var te = n.forwardRef((e, t) => {
                let {
                    __scopeDropdownMenu: r,
                    ...n
                } = e, o = eY(r);
                return (0, b.jsx)(eD, { ...o,
                    ...n,
                    ref: t
                })
            });
            te.displayName = "DropdownMenuRadioItem", n.forwardRef((e, t) => {
                let {
                    __scopeDropdownMenu: r,
                    ...n
                } = e, o = eY(r);
                return (0, b.jsx)(eA, { ...o,
                    ...n,
                    ref: t
                })
            }).displayName = "DropdownMenuItemIndicator";
            var tt = n.forwardRef((e, t) => {
                let {
                    __scopeDropdownMenu: r,
                    ...n
                } = e, o = eY(r);
                return (0, b.jsx)(eP, { ...o,
                    ...n,
                    ref: t
                })
            });
            tt.displayName = "DropdownMenuSeparator";
            var tr = n.forwardRef((e, t) => {
                let {
                    __scopeDropdownMenu: r,
                    ...n
                } = e, o = eY(r);
                return (0, b.jsx)(eF, { ...o,
                    ...n,
                    ref: t
                })
            });
            tr.displayName = "DropdownMenuArrow";
            var tn = n.forwardRef((e, t) => {
                let {
                    __scopeDropdownMenu: r,
                    ...n
                } = e, o = eY(r);
                return (0, b.jsx)(eK, { ...o,
                    ...n,
                    ref: t
                })
            });
            tn.displayName = "DropdownMenuSubTrigger";
            var to = n.forwardRef((e, t) => {
                let {
                    __scopeDropdownMenu: r,
                    ...n
                } = e, o = eY(r);
                return (0, b.jsx)(eB, { ...o,
                    ...n,
                    ref: t,
                    style: { ...e.style,
                        "--radix-dropdown-menu-content-transform-origin": "var(--radix-popper-transform-origin)",
                        "--radix-dropdown-menu-content-available-width": "var(--radix-popper-available-width)",
                        "--radix-dropdown-menu-content-available-height": "var(--radix-popper-available-height)",
                        "--radix-dropdown-menu-trigger-width": "var(--radix-popper-anchor-width)",
                        "--radix-dropdown-menu-trigger-height": "var(--radix-popper-anchor-height)"
                    }
                })
            });
            to.displayName = "DropdownMenuSubContent";
            var ta = eQ,
                tl = e1,
                tu = e9,
                ti = e7,
                tc = e5,
                td = e3,
                ts = e6,
                tf = e8,
                tp = e4,
                tv = te,
                tm = tt,
                th = e => {
                    let {
                        __scopeDropdownMenu: t,
                        children: r,
                        open: n,
                        onOpenChange: o,
                        defaultOpen: a
                    } = e, l = eY(t), [i, c] = (0, u.T)({
                        prop: n,
                        defaultProp: a ? ? !1,
                        onChange: o,
                        caller: "DropdownMenuSub"
                    });
                    return (0, b.jsx)(eL, { ...l,
                        open: i,
                        onOpenChange: c,
                        children: r
                    })
                },
                tg = tn,
                tw = to
        },
        13879: function(e, t, r) {
            r.d(t, {
                mY: function() {
                    return A
                }
            });
            var n = /[\\\/_+.#"@\[\(\{&]/,
                o = /[\\\/_+.#"@\[\(\{&]/g,
                a = /[\s-]/,
                l = /[\s-]/g;

            function u(e) {
                return e.toLowerCase().replace(l, " ")
            }
            var i = r(12854),
                c = r(67294),
                d = r(75320),
                s = r(91276),
                f = r(28771),
                p = '[cmdk-group=""]',
                v = '[cmdk-group-items=""]',
                m = '[cmdk-item=""]',
                h = `${m}:not([aria-disabled="true"])`,
                g = "cmdk-item-select",
                w = "data-value",
                b = (e, t, r) => {
                    var i;
                    return i = e,
                        function e(t, r, u, i, c, d, s) {
                            if (d === r.length) return c === t.length ? 1 : .99;
                            var f = `${c},${d}`;
                            if (void 0 !== s[f]) return s[f];
                            for (var p, v, m, h, g = i.charAt(d), w = u.indexOf(g, c), b = 0; w >= 0;)(p = e(t, r, u, i, w + 1, d + 1, s)) > b && (w === c ? p *= 1 : n.test(t.charAt(w - 1)) ? (p *= .8, (m = t.slice(c, w - 1).match(o)) && c > 0 && (p *= Math.pow(.999, m.length))) : a.test(t.charAt(w - 1)) ? (p *= .9, (h = t.slice(c, w - 1).match(l)) && c > 0 && (p *= Math.pow(.999, h.length))) : (p *= .17, c > 0 && (p *= Math.pow(.999, w - c))), t.charAt(w) !== r.charAt(d) && (p *= .9999)), (p < .1 && u.charAt(w - 1) === i.charAt(d + 1) || i.charAt(d + 1) === i.charAt(d) && u.charAt(w - 1) !== i.charAt(d)) && .1 * (v = e(t, r, u, i, w + 1, d + 2, s)) > p && (p = .1 * v), p > b && (b = p), w = u.indexOf(g, w + 1);
                            return s[f] = b, b
                        }(i = r && r.length > 0 ? `${i+" "+r.join(" ")}` : i, t, u(i), u(t), 0, 0, {})
                },
                x = c.createContext(void 0),
                y = () => c.useContext(x),
                M = c.createContext(void 0),
                C = () => c.useContext(M),
                k = c.createContext(void 0),
                E = c.forwardRef((e, t) => {
                    let r = T(() => {
                            var t, r;
                            return {
                                search: "",
                                value: null != (r = null != (t = e.value) ? t : e.defaultValue) ? r : "",
                                selectedItemId: void 0,
                                filtered: {
                                    count: 0,
                                    items: new Map,
                                    groups: new Set
                                }
                            }
                        }),
                        n = T(() => new Set),
                        o = T(() => new Map),
                        a = T(() => new Map),
                        l = T(() => new Set),
                        u = P(e),
                        {
                            label: i,
                            children: f,
                            value: y,
                            onValueChange: C,
                            filter: k,
                            shouldFilter: E,
                            loop: R,
                            disablePointerSelection: j = !1,
                            vimBindings: D = !0,
                            ...I
                        } = e,
                        S = (0, s.M)(),
                        _ = (0, s.M)(),
                        A = (0, s.M)(),
                        N = c.useRef(null),
                        O = L();
                    F(() => {
                        if (void 0 !== y) {
                            let e = y.trim();
                            r.current.value = e, W.emit()
                        }
                    }, [y]), F(() => {
                        O(6, q)
                    }, []);
                    let W = c.useMemo(() => ({
                            subscribe: e => (l.current.add(e), () => l.current.delete(e)),
                            snapshot: () => r.current,
                            setState: (e, t, n) => {
                                var o, a, l, i;
                                if (!Object.is(r.current[e], t)) {
                                    if (r.current[e] = t, "search" === e) $(), U(), O(1, z);
                                    else if ("value" === e) {
                                        if (document.activeElement.hasAttribute("cmdk-input") || document.activeElement.hasAttribute("cmdk-root")) {
                                            let e = document.getElementById(A);
                                            e ? e.focus() : null == (o = document.getElementById(S)) || o.focus()
                                        }
                                        if (O(7, () => {
                                                var e;
                                                r.current.selectedItemId = null == (e = X()) ? void 0 : e.id, W.emit()
                                            }), n || O(5, q), (null == (a = u.current) ? void 0 : a.value) !== void 0) {
                                            null == (i = (l = u.current).onValueChange) || i.call(l, null != t ? t : "");
                                            return
                                        }
                                    }
                                    W.emit()
                                }
                            },
                            emit: () => {
                                l.current.forEach(e => e())
                            }
                        }), []),
                        B = c.useMemo(() => ({
                            value: (e, t, n) => {
                                var o;
                                t !== (null == (o = a.current.get(e)) ? void 0 : o.value) && (a.current.set(e, {
                                    value: t,
                                    keywords: n
                                }), r.current.filtered.items.set(e, G(t, n)), O(2, () => {
                                    U(), W.emit()
                                }))
                            },
                            item: (e, t) => (n.current.add(e), t && (o.current.has(t) ? o.current.get(t).add(e) : o.current.set(t, new Set([e]))), O(3, () => {
                                $(), U(), r.current.value || z(), W.emit()
                            }), () => {
                                a.current.delete(e), n.current.delete(e), r.current.filtered.items.delete(e);
                                let t = X();
                                O(4, () => {
                                    $(), (null == t ? void 0 : t.getAttribute("id")) === e && z(), W.emit()
                                })
                            }),
                            group: e => (o.current.has(e) || o.current.set(e, new Set), () => {
                                a.current.delete(e), o.current.delete(e)
                            }),
                            filter: () => u.current.shouldFilter,
                            label: i || e["aria-label"],
                            getDisablePointerSelection: () => u.current.disablePointerSelection,
                            listId: S,
                            inputId: A,
                            labelId: _,
                            listInnerRef: N
                        }), []);

                    function G(e, t) {
                        var n, o;
                        let a = null != (o = null == (n = u.current) ? void 0 : n.filter) ? o : b;
                        return e ? a(e, r.current.search, t) : 0
                    }

                    function U() {
                        if (!r.current.search || !1 === u.current.shouldFilter) return;
                        let e = r.current.filtered.items,
                            t = [];
                        r.current.filtered.groups.forEach(r => {
                            let n = o.current.get(r),
                                a = 0;
                            n.forEach(t => {
                                a = Math.max(e.get(t), a)
                            }), t.push([r, a])
                        });
                        let n = N.current;
                        H().sort((t, r) => {
                            var n, o;
                            let a = t.getAttribute("id"),
                                l = r.getAttribute("id");
                            return (null != (n = e.get(l)) ? n : 0) - (null != (o = e.get(a)) ? o : 0)
                        }).forEach(e => {
                            let t = e.closest(v);
                            t ? t.appendChild(e.parentElement === t ? e : e.closest(`${v} > *`)) : n.appendChild(e.parentElement === n ? e : e.closest(`${v} > *`))
                        }), t.sort((e, t) => t[1] - e[1]).forEach(e => {
                            var t;
                            let r = null == (t = N.current) ? void 0 : t.querySelector(`${p}[${w}="${encodeURIComponent(e[0])}"]`);
                            null == r || r.parentElement.appendChild(r)
                        })
                    }

                    function z() {
                        let e = H().find(e => "true" !== e.getAttribute("aria-disabled")),
                            t = null == e ? void 0 : e.getAttribute(w);
                        W.setState("value", t || void 0)
                    }

                    function $() {
                        var e, t, l, i;
                        if (!r.current.search || !1 === u.current.shouldFilter) {
                            r.current.filtered.count = n.current.size;
                            return
                        }
                        r.current.filtered.groups = new Set;
                        let c = 0;
                        for (let o of n.current) {
                            let n = G(null != (t = null == (e = a.current.get(o)) ? void 0 : e.value) ? t : "", null != (i = null == (l = a.current.get(o)) ? void 0 : l.keywords) ? i : []);
                            r.current.filtered.items.set(o, n), n > 0 && c++
                        }
                        for (let [e, t] of o.current)
                            for (let n of t)
                                if (r.current.filtered.items.get(n) > 0) {
                                    r.current.filtered.groups.add(e);
                                    break
                                }
                        r.current.filtered.count = c
                    }

                    function q() {
                        var e, t, r;
                        let n = X();
                        n && ((null == (e = n.parentElement) ? void 0 : e.firstChild) === n && (null == (r = null == (t = n.closest(p)) ? void 0 : t.querySelector('[cmdk-group-heading=""]')) || r.scrollIntoView({
                            block: "nearest"
                        })), n.scrollIntoView({
                            block: "nearest"
                        }))
                    }

                    function X() {
                        var e;
                        return null == (e = N.current) ? void 0 : e.querySelector(`${m}[aria-selected="true"]`)
                    }

                    function H() {
                        var e;
                        return Array.from((null == (e = N.current) ? void 0 : e.querySelectorAll(h)) || [])
                    }

                    function Y(e) {
                        let t = H()[e];
                        t && W.setState("value", t.getAttribute(w))
                    }

                    function Z(e) {
                        var t;
                        let r = X(),
                            n = H(),
                            o = n.findIndex(e => e === r),
                            a = n[o + e];
                        null != (t = u.current) && t.loop && (a = o + e < 0 ? n[n.length - 1] : o + e === n.length ? n[0] : n[o + e]), a && W.setState("value", a.getAttribute(w))
                    }

                    function J(e) {
                        let t = X(),
                            r = null == t ? void 0 : t.closest(p),
                            n;
                        for (; r && !n;) n = null == (r = e > 0 ? function(e, t) {
                            let r = e.nextElementSibling;
                            for (; r;) {
                                if (r.matches(t)) return r;
                                r = r.nextElementSibling
                            }
                        }(r, p) : function(e, t) {
                            let r = e.previousElementSibling;
                            for (; r;) {
                                if (r.matches(t)) return r;
                                r = r.previousElementSibling
                            }
                        }(r, p)) ? void 0 : r.querySelector(h);
                        n ? W.setState("value", n.getAttribute(w)) : Z(e)
                    }
                    let Q = () => Y(H().length - 1),
                        ee = e => {
                            e.preventDefault(), e.metaKey ? Q() : e.altKey ? J(1) : Z(1)
                        },
                        et = e => {
                            e.preventDefault(), e.metaKey ? Y(0) : e.altKey ? J(-1) : Z(-1)
                        };
                    return c.createElement(d.WV.div, {
                        ref: t,
                        tabIndex: -1,
                        ...I,
                        "cmdk-root": "",
                        onKeyDown: e => {
                            var t;
                            null == (t = I.onKeyDown) || t.call(I, e);
                            let r = e.nativeEvent.isComposing || 229 === e.keyCode;
                            if (!(e.defaultPrevented || r)) switch (e.key) {
                                case "n":
                                case "j":
                                    D && e.ctrlKey && ee(e);
                                    break;
                                case "ArrowDown":
                                    ee(e);
                                    break;
                                case "p":
                                case "k":
                                    D && e.ctrlKey && et(e);
                                    break;
                                case "ArrowUp":
                                    et(e);
                                    break;
                                case "Home":
                                    e.preventDefault(), Y(0);
                                    break;
                                case "End":
                                    e.preventDefault(), Q();
                                    break;
                                case "Enter":
                                    {
                                        e.preventDefault();
                                        let t = X();
                                        if (t) {
                                            let e = new Event(g);
                                            t.dispatchEvent(e)
                                        }
                                    }
                            }
                        }
                    }, c.createElement("label", {
                        "cmdk-label": "",
                        htmlFor: B.inputId,
                        id: B.labelId,
                        style: K
                    }, i), V(e, e => c.createElement(M.Provider, {
                        value: W
                    }, c.createElement(x.Provider, {
                        value: B
                    }, e))))
                }),
                R = c.forwardRef((e, t) => {
                    var r, n;
                    let o = (0, s.M)(),
                        a = c.useRef(null),
                        l = c.useContext(k),
                        u = y(),
                        i = P(e),
                        p = null != (n = null == (r = i.current) ? void 0 : r.forceMount) ? n : null == l ? void 0 : l.forceMount;
                    F(() => {
                        if (!p) return u.item(o, null == l ? void 0 : l.id)
                    }, [p]);
                    let v = O(o, a, [e.value, e.children, a], e.keywords),
                        m = C(),
                        h = N(e => e.value && e.value === v.current),
                        w = N(e => !!p || !1 === u.filter() || !e.search || e.filtered.items.get(o) > 0);

                    function b() {
                        var e, t;
                        x(), null == (t = (e = i.current).onSelect) || t.call(e, v.current)
                    }

                    function x() {
                        m.setState("value", v.current, !0)
                    }
                    if (c.useEffect(() => {
                            let t = a.current;
                            if (!(!t || e.disabled)) return t.addEventListener(g, b), () => t.removeEventListener(g, b)
                        }, [w, e.onSelect, e.disabled]), !w) return null;
                    let {
                        disabled: M,
                        value: E,
                        onSelect: R,
                        forceMount: j,
                        keywords: D,
                        ...I
                    } = e;
                    return c.createElement(d.WV.div, {
                        ref: (0, f.F)(a, t),
                        ...I,
                        id: o,
                        "cmdk-item": "",
                        role: "option",
                        "aria-disabled": !!M,
                        "aria-selected": !!h,
                        "data-disabled": !!M,
                        "data-selected": !!h,
                        onPointerMove: M || u.getDisablePointerSelection() ? void 0 : x,
                        onClick: M ? void 0 : b
                    }, e.children)
                }),
                j = c.forwardRef((e, t) => {
                    let {
                        heading: r,
                        children: n,
                        forceMount: o,
                        ...a
                    } = e, l = (0, s.M)(), u = c.useRef(null), i = c.useRef(null), p = (0, s.M)(), v = y(), m = N(e => !!o || !1 === v.filter() || !e.search || e.filtered.groups.has(l));
                    F(() => v.group(l), []), O(l, u, [e.value, e.heading, i]);
                    let h = c.useMemo(() => ({
                        id: l,
                        forceMount: o
                    }), [o]);
                    return c.createElement(d.WV.div, {
                        ref: (0, f.F)(u, t),
                        ...a,
                        "cmdk-group": "",
                        role: "presentation",
                        hidden: !m || void 0
                    }, r && c.createElement("div", {
                        ref: i,
                        "cmdk-group-heading": "",
                        "aria-hidden": !0,
                        id: p
                    }, r), V(e, e => c.createElement("div", {
                        "cmdk-group-items": "",
                        role: "group",
                        "aria-labelledby": r ? p : void 0
                    }, c.createElement(k.Provider, {
                        value: h
                    }, e))))
                }),
                D = c.forwardRef((e, t) => {
                    let {
                        alwaysRender: r,
                        ...n
                    } = e, o = c.useRef(null), a = N(e => !e.search);
                    return r || a ? c.createElement(d.WV.div, {
                        ref: (0, f.F)(o, t),
                        ...n,
                        "cmdk-separator": "",
                        role: "separator"
                    }) : null
                }),
                I = c.forwardRef((e, t) => {
                    let {
                        onValueChange: r,
                        ...n
                    } = e, o = null != e.value, a = C(), l = N(e => e.search), u = N(e => e.selectedItemId), i = y();
                    return c.useEffect(() => {
                        null != e.value && a.setState("search", e.value)
                    }, [e.value]), c.createElement(d.WV.input, {
                        ref: t,
                        ...n,
                        "cmdk-input": "",
                        autoComplete: "off",
                        autoCorrect: "off",
                        spellCheck: !1,
                        "aria-autocomplete": "list",
                        role: "combobox",
                        "aria-expanded": !0,
                        "aria-controls": i.listId,
                        "aria-labelledby": i.labelId,
                        "aria-activedescendant": u,
                        id: i.inputId,
                        type: "text",
                        value: o ? e.value : l,
                        onChange: e => {
                            o || a.setState("search", e.target.value), null == r || r(e.target.value)
                        }
                    })
                }),
                S = c.forwardRef((e, t) => {
                    let {
                        children: r,
                        label: n = "Suggestions",
                        ...o
                    } = e, a = c.useRef(null), l = c.useRef(null), u = N(e => e.selectedItemId), i = y();
                    return c.useEffect(() => {
                        if (l.current && a.current) {
                            let e = l.current,
                                t = a.current,
                                r, n = new ResizeObserver(() => {
                                    r = requestAnimationFrame(() => {
                                        let r = e.offsetHeight;
                                        t.style.setProperty("--cmdk-list-height", r.toFixed(1) + "px")
                                    })
                                });
                            return n.observe(e), () => {
                                cancelAnimationFrame(r), n.unobserve(e)
                            }
                        }
                    }, []), c.createElement(d.WV.div, {
                        ref: (0, f.F)(a, t),
                        ...o,
                        "cmdk-list": "",
                        role: "listbox",
                        tabIndex: -1,
                        "aria-activedescendant": u,
                        "aria-label": n,
                        id: i.listId
                    }, V(e, e => c.createElement("div", {
                        ref: (0, f.F)(l, i.listInnerRef),
                        "cmdk-list-sizer": ""
                    }, e)))
                }),
                _ = c.forwardRef((e, t) => {
                    let {
                        open: r,
                        onOpenChange: n,
                        overlayClassName: o,
                        contentClassName: a,
                        container: l,
                        ...u
                    } = e;
                    return c.createElement(i.fC, {
                        open: r,
                        onOpenChange: n
                    }, c.createElement(i.h_, {
                        container: l
                    }, c.createElement(i.aV, {
                        "cmdk-overlay": "",
                        className: o
                    }), c.createElement(i.VY, {
                        "aria-label": e.label,
                        "cmdk-dialog": "",
                        className: a
                    }, c.createElement(E, {
                        ref: t,
                        ...u
                    }))))
                }),
                A = Object.assign(E, {
                    List: S,
                    Item: R,
                    Input: I,
                    Group: j,
                    Separator: D,
                    Dialog: _,
                    Empty: c.forwardRef((e, t) => N(e => 0 === e.filtered.count) ? c.createElement(d.WV.div, {
                        ref: t,
                        ...e,
                        "cmdk-empty": "",
                        role: "presentation"
                    }) : null),
                    Loading: c.forwardRef((e, t) => {
                        let {
                            progress: r,
                            children: n,
                            label: o = "Loading...",
                            ...a
                        } = e;
                        return c.createElement(d.WV.div, {
                            ref: t,
                            ...a,
                            "cmdk-loading": "",
                            role: "progressbar",
                            "aria-valuenow": r,
                            "aria-valuemin": 0,
                            "aria-valuemax": 100,
                            "aria-label": o
                        }, V(e, e => c.createElement("div", {
                            "aria-hidden": !0
                        }, e)))
                    })
                });

            function P(e) {
                let t = c.useRef(e);
                return F(() => {
                    t.current = e
                }), t
            }
            var F = "undefined" == typeof window ? c.useEffect : c.useLayoutEffect;

            function T(e) {
                let t = c.useRef();
                return void 0 === t.current && (t.current = e()), t
            }

            function N(e) {
                let t = C(),
                    r = () => e(t.snapshot());
                return c.useSyncExternalStore(t.subscribe, r, r)
            }

            function O(e, t, r, n = []) {
                let o = c.useRef(),
                    a = y();
                return F(() => {
                    var l;
                    let u = (() => {
                            var e;
                            for (let t of r) {
                                if ("string" == typeof t) return t.trim();
                                if ("object" == typeof t && "current" in t) return t.current ? null == (e = t.current.textContent) ? void 0 : e.trim() : o.current
                            }
                        })(),
                        i = n.map(e => e.trim());
                    a.value(e, u, i), null == (l = t.current) || l.setAttribute(w, u), o.current = u
                }), o
            }
            var L = () => {
                let [e, t] = c.useState(), r = T(() => new Map);
                return F(() => {
                    r.current.forEach(e => e()), r.current = new Map
                }, [e]), (e, n) => {
                    r.current.set(e, n), t({})
                }
            };

            function V({
                asChild: e,
                children: t
            }, r) {
                let n;
                return e && c.isValidElement(t) ? c.cloneElement("function" == typeof(n = t.type) ? n(t.props) : "render" in n ? n.render(t.props) : t, {
                    ref: t.ref
                }, r(t.props.children)) : r(t)
            }
            var K = {
                position: "absolute",
                width: "1px",
                height: "1px",
                padding: "0",
                margin: "-1px",
                overflow: "hidden",
                clip: "rect(0, 0, 0, 0)",
                whiteSpace: "nowrap",
                borderWidth: "0"
            }
        }
    }
]);