"use strict";
(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [2215], {
        42614: function(e, t, r) {
            r.d(t, {
                u: function() {
                    return n
                }
            });

            function n(e, [t, r]) {
                return Math.min(r, Math.max(t, e))
            }
        },
        65936: function(e, t, r) {
            r.d(t, {
                B: function() {
                    return u
                }
            });
            var n = r(67294),
                l = r(25360),
                o = r(28771),
                a = r(88426),
                i = r(85893);

            function u(e) {
                let t = e + "CollectionProvider",
                    [r, u] = (0, l.b)(t),
                    [s, c] = r(t, {
                        collectionRef: {
                            current: null
                        },
                        itemMap: new Map
                    }),
                    d = e => {
                        let {
                            scope: t,
                            children: r
                        } = e, l = n.useRef(null), o = n.useRef(new Map).current;
                        return (0, i.jsx)(s, {
                            scope: t,
                            itemMap: o,
                            collectionRef: l,
                            children: r
                        })
                    };
                d.displayName = t;
                let p = e + "CollectionSlot",
                    f = (0, a.Z8)(p),
                    h = n.forwardRef((e, t) => {
                        let {
                            scope: r,
                            children: n
                        } = e, l = c(p, r), a = (0, o.e)(t, l.collectionRef);
                        return (0, i.jsx)(f, {
                            ref: a,
                            children: n
                        })
                    });
                h.displayName = p;
                let v = e + "CollectionItemSlot",
                    m = "data-radix-collection-item",
                    w = (0, a.Z8)(v),
                    g = n.forwardRef((e, t) => {
                        let {
                            scope: r,
                            children: l,
                            ...a
                        } = e, u = n.useRef(null), s = (0, o.e)(t, u), d = c(v, r);
                        return n.useEffect(() => (d.itemMap.set(u, {
                            ref: u,
                            ...a
                        }), () => void d.itemMap.delete(u))), (0, i.jsx)(w, {
                            [m]: "",
                            ref: s,
                            children: l
                        })
                    });
                return g.displayName = v, [{
                    Provider: d,
                    Slot: h,
                    ItemSlot: g
                }, function(t) {
                    let r = c(e + "CollectionConsumer", t);
                    return n.useCallback(() => {
                        let e = r.collectionRef.current;
                        if (!e) return [];
                        let t = Array.from(e.querySelectorAll(`[${m}]`));
                        return Array.from(r.itemMap.values()).sort((e, r) => t.indexOf(e.ref.current) - t.indexOf(r.ref.current))
                    }, [r.collectionRef, r.itemMap])
                }, u]
            }
        },
        78990: function(e, t, r) {
            r.d(t, {
                gm: function() {
                    return o
                }
            });
            var n = r(67294);
            r(85893);
            var l = n.createContext(void 0);

            function o(e) {
                let t = n.useContext(l);
                return e || t || "ltr"
            }
        },
        72215: function(e, t, r) {
            r.d(t, {
                VY: function() {
                    return eD
                },
                ZA: function() {
                    return eL
                },
                JO: function() {
                    return eP
                },
                ck: function() {
                    return e_
                },
                wU: function() {
                    return eH
                },
                eT: function() {
                    return eA
                },
                __: function() {
                    return eW
                },
                h_: function() {
                    return eN
                },
                fC: function() {
                    return ek
                },
                Z0: function() {
                    return eB
                },
                xz: function() {
                    return eE
                },
                B4: function() {
                    return eI
                },
                l_: function() {
                    return eV
                }
            });
            var n = r(67294),
                l = r(73935),
                o = r(42614),
                a = r(36206),
                i = r(65936),
                u = r(28771),
                s = r(25360),
                c = r(78990),
                d = r(46063),
                p = r(27552),
                f = r(95420),
                h = r(91276),
                v = r(53990),
                m = r(42651),
                w = r(75320),
                g = r(88426),
                x = r(79698),
                y = r(77342),
                b = r(9981),
                S = r(57898),
                C = r(85893),
                M = Object.freeze({
                    position: "absolute",
                    border: 0,
                    width: 1,
                    height: 1,
                    padding: 0,
                    margin: -1,
                    overflow: "hidden",
                    clip: "rect(0, 0, 0, 0)",
                    whiteSpace: "nowrap",
                    wordWrap: "normal"
                });
            n.forwardRef((e, t) => (0, C.jsx)(w.WV.span, { ...e,
                ref: t,
                style: { ...M,
                    ...e.style
                }
            })).displayName = "VisuallyHidden";
            var j = r(23541),
                R = r(71930),
                T = [" ", "Enter", "ArrowUp", "ArrowDown"],
                k = [" ", "Enter"],
                E = "Select",
                [I, P, N] = (0, i.B)(E),
                [D, V] = (0, s.b)(E, [N, v.D7]),
                L = (0, v.D7)(),
                [W, _] = D(E),
                [A, H] = D(E),
                B = e => {
                    let {
                        __scopeSelect: t,
                        children: r,
                        open: l,
                        defaultOpen: o,
                        onOpenChange: a,
                        value: i,
                        defaultValue: u,
                        onValueChange: s,
                        dir: d,
                        name: p,
                        autoComplete: f,
                        disabled: m,
                        required: w,
                        form: g
                    } = e, x = L(t), [b, S] = n.useState(null), [M, j] = n.useState(null), [R, T] = n.useState(!1), k = (0, c.gm)(d), [P, N] = (0, y.T)({
                        prop: l,
                        defaultProp: o ? ? !1,
                        onChange: a,
                        caller: E
                    }), [D, V] = (0, y.T)({
                        prop: i,
                        defaultProp: u,
                        onChange: s,
                        caller: E
                    }), _ = n.useRef(null), H = !b || g || !!b.closest("form"), [B, O] = n.useState(new Set), K = Array.from(B).map(e => e.props.value).join(";");
                    return (0, C.jsx)(v.fC, { ...x,
                        children: (0, C.jsxs)(W, {
                            required: w,
                            scope: t,
                            trigger: b,
                            onTriggerChange: S,
                            valueNode: M,
                            onValueNodeChange: j,
                            valueNodeHasChildren: R,
                            onValueNodeHasChildrenChange: T,
                            contentId: (0, h.M)(),
                            value: D,
                            onValueChange: V,
                            open: P,
                            onOpenChange: N,
                            dir: k,
                            triggerPointerDownPosRef: _,
                            disabled: m,
                            children: [(0, C.jsx)(I.Provider, {
                                scope: t,
                                children: (0, C.jsx)(A, {
                                    scope: e.__scopeSelect,
                                    onNativeOptionAdd: n.useCallback(e => {
                                        O(t => new Set(t).add(e))
                                    }, []),
                                    onNativeOptionRemove: n.useCallback(e => {
                                        O(t => {
                                            let r = new Set(t);
                                            return r.delete(e), r
                                        })
                                    }, []),
                                    children: r
                                })
                            }), H ? (0, C.jsxs)(eM, {
                                "aria-hidden": !0,
                                required: w,
                                tabIndex: -1,
                                name: p,
                                autoComplete: f,
                                value: D,
                                onChange: e => V(e.target.value),
                                disabled: m,
                                form: g,
                                children: [void 0 === D ? (0, C.jsx)("option", {
                                    value: ""
                                }) : null, Array.from(B)]
                            }, K) : null]
                        })
                    })
                };
            B.displayName = E;
            var O = "SelectTrigger",
                K = n.forwardRef((e, t) => {
                    let {
                        __scopeSelect: r,
                        disabled: l = !1,
                        ...o
                    } = e, i = L(r), s = _(O, r), c = s.disabled || l, d = (0, u.e)(t, s.onTriggerChange), p = P(r), f = n.useRef("touch"), [h, m, g] = eR(e => {
                        let t = p().filter(e => !e.disabled),
                            r = t.find(e => e.value === s.value),
                            n = eT(t, e, r);
                        void 0 !== n && s.onValueChange(n.value)
                    }), x = e => {
                        c || (s.onOpenChange(!0), g()), e && (s.triggerPointerDownPosRef.current = {
                            x: Math.round(e.pageX),
                            y: Math.round(e.pageY)
                        })
                    };
                    return (0, C.jsx)(v.ee, {
                        asChild: !0,
                        ...i,
                        children: (0, C.jsx)(w.WV.button, {
                            type: "button",
                            role: "combobox",
                            "aria-controls": s.contentId,
                            "aria-expanded": s.open,
                            "aria-required": s.required,
                            "aria-autocomplete": "none",
                            dir: s.dir,
                            "data-state": s.open ? "open" : "closed",
                            disabled: c,
                            "data-disabled": c ? "" : void 0,
                            "data-placeholder": ej(s.value) ? "" : void 0,
                            ...o,
                            ref: d,
                            onClick: (0, a.M)(o.onClick, e => {
                                e.currentTarget.focus(), "mouse" !== f.current && x(e)
                            }),
                            onPointerDown: (0, a.M)(o.onPointerDown, e => {
                                f.current = e.pointerType;
                                let t = e.target;
                                t.hasPointerCapture(e.pointerId) && t.releasePointerCapture(e.pointerId), 0 === e.button && !1 === e.ctrlKey && "mouse" === e.pointerType && (x(e), e.preventDefault())
                            }),
                            onKeyDown: (0, a.M)(o.onKeyDown, e => {
                                let t = "" !== h.current;
                                e.ctrlKey || e.altKey || e.metaKey || 1 !== e.key.length || m(e.key), (!t || " " !== e.key) && T.includes(e.key) && (x(), e.preventDefault())
                            })
                        })
                    })
                });
            K.displayName = O;
            var F = "SelectValue",
                U = n.forwardRef((e, t) => {
                    let {
                        __scopeSelect: r,
                        className: n,
                        style: l,
                        children: o,
                        placeholder: a = "",
                        ...i
                    } = e, s = _(F, r), {
                        onValueNodeHasChildrenChange: c
                    } = s, d = void 0 !== o, p = (0, u.e)(t, s.onValueNodeChange);
                    return (0, b.b)(() => {
                        c(d)
                    }, [c, d]), (0, C.jsx)(w.WV.span, { ...i,
                        ref: p,
                        style: {
                            pointerEvents: "none"
                        },
                        children: ej(s.value) ? (0, C.jsx)(C.Fragment, {
                            children: a
                        }) : o
                    })
                });
            U.displayName = F;
            var z = n.forwardRef((e, t) => {
                let {
                    __scopeSelect: r,
                    children: n,
                    ...l
                } = e;
                return (0, C.jsx)(w.WV.span, {
                    "aria-hidden": !0,
                    ...l,
                    ref: t,
                    children: n || "▼"
                })
            });
            z.displayName = "SelectIcon";
            var Z = e => (0, C.jsx)(m.h, {
                asChild: !0,
                ...e
            });
            Z.displayName = "SelectPortal";
            var q = "SelectContent",
                Y = n.forwardRef((e, t) => {
                    let r = _(q, e.__scopeSelect),
                        [o, a] = n.useState();
                    return ((0, b.b)(() => {
                        a(new DocumentFragment)
                    }, []), r.open) ? (0, C.jsx)($, { ...e,
                        ref: t
                    }) : o ? l.createPortal((0, C.jsx)(X, {
                        scope: e.__scopeSelect,
                        children: (0, C.jsx)(I.Slot, {
                            scope: e.__scopeSelect,
                            children: (0, C.jsx)("div", {
                                children: e.children
                            })
                        })
                    }), o) : null
                });
            Y.displayName = q;
            var [X, G] = D(q), J = (0, g.Z8)("SelectContent.RemoveScroll"), $ = n.forwardRef((e, t) => {
                let {
                    __scopeSelect: r,
                    position: l = "item-aligned",
                    onCloseAutoFocus: o,
                    onEscapeKeyDown: i,
                    onPointerDownOutside: s,
                    side: c,
                    sideOffset: h,
                    align: v,
                    alignOffset: m,
                    arrowPadding: w,
                    collisionBoundary: g,
                    collisionPadding: x,
                    sticky: y,
                    hideWhenDetached: b,
                    avoidCollisions: S,
                    ...M
                } = e, T = _(q, r), [k, E] = n.useState(null), [I, N] = n.useState(null), D = (0, u.e)(t, e => E(e)), [V, L] = n.useState(null), [W, A] = n.useState(null), H = P(r), [B, O] = n.useState(!1), K = n.useRef(!1);
                n.useEffect(() => {
                    if (k) return (0, j.Ry)(k)
                }, [k]), (0, p.EW)();
                let F = n.useCallback(e => {
                        let [t, ...r] = H().map(e => e.ref.current), [n] = r.slice(-1), l = document.activeElement;
                        for (let r of e)
                            if (r === l || (r ? .scrollIntoView({
                                    block: "nearest"
                                }), r === t && I && (I.scrollTop = 0), r === n && I && (I.scrollTop = I.scrollHeight), r ? .focus(), document.activeElement !== l)) return
                    }, [H, I]),
                    U = n.useCallback(() => F([V, k]), [F, V, k]);
                n.useEffect(() => {
                    B && U()
                }, [B, U]);
                let {
                    onOpenChange: z,
                    triggerPointerDownPosRef: Z
                } = T;
                n.useEffect(() => {
                    if (k) {
                        let e = {
                                x: 0,
                                y: 0
                            },
                            t = t => {
                                e = {
                                    x: Math.abs(Math.round(t.pageX) - (Z.current ? .x ? ? 0)),
                                    y: Math.abs(Math.round(t.pageY) - (Z.current ? .y ? ? 0))
                                }
                            },
                            r = r => {
                                e.x <= 10 && e.y <= 10 ? r.preventDefault() : k.contains(r.target) || z(!1), document.removeEventListener("pointermove", t), Z.current = null
                            };
                        return null !== Z.current && (document.addEventListener("pointermove", t), document.addEventListener("pointerup", r, {
                            capture: !0,
                            once: !0
                        })), () => {
                            document.removeEventListener("pointermove", t), document.removeEventListener("pointerup", r, {
                                capture: !0
                            })
                        }
                    }
                }, [k, z, Z]), n.useEffect(() => {
                    let e = () => z(!1);
                    return window.addEventListener("blur", e), window.addEventListener("resize", e), () => {
                        window.removeEventListener("blur", e), window.removeEventListener("resize", e)
                    }
                }, [z]);
                let [Y, G] = eR(e => {
                    let t = H().filter(e => !e.disabled),
                        r = t.find(e => e.ref.current === document.activeElement),
                        n = eT(t, e, r);
                    n && setTimeout(() => n.ref.current.focus())
                }), $ = n.useCallback((e, t, r) => {
                    let n = !K.current && !r;
                    (void 0 !== T.value && T.value === t || n) && (L(e), n && (K.current = !0))
                }, [T.value]), et = n.useCallback(() => k ? .focus(), [k]), er = n.useCallback((e, t, r) => {
                    let n = !K.current && !r;
                    (void 0 !== T.value && T.value === t || n) && A(e)
                }, [T.value]), en = "popper" === l ? ee : Q, el = en === ee ? {
                    side: c,
                    sideOffset: h,
                    align: v,
                    alignOffset: m,
                    arrowPadding: w,
                    collisionBoundary: g,
                    collisionPadding: x,
                    sticky: y,
                    hideWhenDetached: b,
                    avoidCollisions: S
                } : {};
                return (0, C.jsx)(X, {
                    scope: r,
                    content: k,
                    viewport: I,
                    onViewportChange: N,
                    itemRefCallback: $,
                    selectedItem: V,
                    onItemLeave: et,
                    itemTextRefCallback: er,
                    focusSelectedItem: U,
                    selectedItemText: W,
                    position: l,
                    isPositioned: B,
                    searchRef: Y,
                    children: (0, C.jsx)(R.Z, {
                        as: J,
                        allowPinchZoom: !0,
                        children: (0, C.jsx)(f.M, {
                            asChild: !0,
                            trapped: T.open,
                            onMountAutoFocus: e => {
                                e.preventDefault()
                            },
                            onUnmountAutoFocus: (0, a.M)(o, e => {
                                T.trigger ? .focus({
                                    preventScroll: !0
                                }), e.preventDefault()
                            }),
                            children: (0, C.jsx)(d.XB, {
                                asChild: !0,
                                disableOutsidePointerEvents: !0,
                                onEscapeKeyDown: i,
                                onPointerDownOutside: s,
                                onFocusOutside: e => e.preventDefault(),
                                onDismiss: () => T.onOpenChange(!1),
                                children: (0, C.jsx)(en, {
                                    role: "listbox",
                                    id: T.contentId,
                                    "data-state": T.open ? "open" : "closed",
                                    dir: T.dir,
                                    onContextMenu: e => e.preventDefault(),
                                    ...M,
                                    ...el,
                                    onPlaced: () => O(!0),
                                    ref: D,
                                    style: {
                                        display: "flex",
                                        flexDirection: "column",
                                        outline: "none",
                                        ...M.style
                                    },
                                    onKeyDown: (0, a.M)(M.onKeyDown, e => {
                                        let t = e.ctrlKey || e.altKey || e.metaKey;
                                        if ("Tab" === e.key && e.preventDefault(), t || 1 !== e.key.length || G(e.key), ["ArrowUp", "ArrowDown", "Home", "End"].includes(e.key)) {
                                            let t = H().filter(e => !e.disabled).map(e => e.ref.current);
                                            if (["ArrowUp", "End"].includes(e.key) && (t = t.slice().reverse()), ["ArrowUp", "ArrowDown"].includes(e.key)) {
                                                let r = e.target,
                                                    n = t.indexOf(r);
                                                t = t.slice(n + 1)
                                            }
                                            setTimeout(() => F(t)), e.preventDefault()
                                        }
                                    })
                                })
                            })
                        })
                    })
                })
            });
            $.displayName = "SelectContentImpl";
            var Q = n.forwardRef((e, t) => {
                let {
                    __scopeSelect: r,
                    onPlaced: l,
                    ...a
                } = e, i = _(q, r), s = G(q, r), [c, d] = n.useState(null), [p, f] = n.useState(null), h = (0, u.e)(t, e => f(e)), v = P(r), m = n.useRef(!1), g = n.useRef(!0), {
                    viewport: x,
                    selectedItem: y,
                    selectedItemText: S,
                    focusSelectedItem: M
                } = s, j = n.useCallback(() => {
                    if (i.trigger && i.valueNode && c && p && x && y && S) {
                        let e = i.trigger.getBoundingClientRect(),
                            t = p.getBoundingClientRect(),
                            r = i.valueNode.getBoundingClientRect(),
                            n = S.getBoundingClientRect();
                        if ("rtl" !== i.dir) {
                            let l = n.left - t.left,
                                a = r.left - l,
                                i = e.left - a,
                                u = e.width + i,
                                s = Math.max(u, t.width),
                                d = window.innerWidth - 10,
                                p = (0, o.u)(a, [10, Math.max(10, d - s)]);
                            c.style.minWidth = u + "px", c.style.left = p + "px"
                        } else {
                            let l = t.right - n.right,
                                a = window.innerWidth - r.right - l,
                                i = window.innerWidth - e.right - a,
                                u = e.width + i,
                                s = Math.max(u, t.width),
                                d = window.innerWidth - 10,
                                p = (0, o.u)(a, [10, Math.max(10, d - s)]);
                            c.style.minWidth = u + "px", c.style.right = p + "px"
                        }
                        let a = v(),
                            u = window.innerHeight - 20,
                            s = x.scrollHeight,
                            d = window.getComputedStyle(p),
                            f = parseInt(d.borderTopWidth, 10),
                            h = parseInt(d.paddingTop, 10),
                            w = parseInt(d.borderBottomWidth, 10),
                            g = f + h + s + parseInt(d.paddingBottom, 10) + w,
                            b = Math.min(5 * y.offsetHeight, g),
                            C = window.getComputedStyle(x),
                            M = parseInt(C.paddingTop, 10),
                            j = parseInt(C.paddingBottom, 10),
                            R = e.top + e.height / 2 - 10,
                            T = y.offsetHeight / 2,
                            k = f + h + (y.offsetTop + T);
                        if (k <= R) {
                            let e = a.length > 0 && y === a[a.length - 1].ref.current;
                            c.style.bottom = "0px";
                            let t = p.clientHeight - x.offsetTop - x.offsetHeight;
                            c.style.height = k + Math.max(u - R, T + (e ? j : 0) + t + w) + "px"
                        } else {
                            let e = a.length > 0 && y === a[0].ref.current;
                            c.style.top = "0px";
                            let t = Math.max(R, f + x.offsetTop + (e ? M : 0) + T);
                            c.style.height = t + (g - k) + "px", x.scrollTop = k - R + x.offsetTop
                        }
                        c.style.margin = "10px 0", c.style.minHeight = b + "px", c.style.maxHeight = u + "px", l ? .(), requestAnimationFrame(() => m.current = !0)
                    }
                }, [v, i.trigger, i.valueNode, c, p, x, y, S, i.dir, l]);
                (0, b.b)(() => j(), [j]);
                let [R, T] = n.useState();
                (0, b.b)(() => {
                    p && T(window.getComputedStyle(p).zIndex)
                }, [p]);
                let k = n.useCallback(e => {
                    e && !0 === g.current && (j(), M ? .(), g.current = !1)
                }, [j, M]);
                return (0, C.jsx)(et, {
                    scope: r,
                    contentWrapper: c,
                    shouldExpandOnScrollRef: m,
                    onScrollButtonChange: k,
                    children: (0, C.jsx)("div", {
                        ref: d,
                        style: {
                            display: "flex",
                            flexDirection: "column",
                            position: "fixed",
                            zIndex: R
                        },
                        children: (0, C.jsx)(w.WV.div, { ...a,
                            ref: h,
                            style: {
                                boxSizing: "border-box",
                                maxHeight: "100%",
                                ...a.style
                            }
                        })
                    })
                })
            });
            Q.displayName = "SelectItemAlignedPosition";
            var ee = n.forwardRef((e, t) => {
                let {
                    __scopeSelect: r,
                    align: n = "start",
                    collisionPadding: l = 10,
                    ...o
                } = e, a = L(r);
                return (0, C.jsx)(v.VY, { ...a,
                    ...o,
                    ref: t,
                    align: n,
                    collisionPadding: l,
                    style: {
                        boxSizing: "border-box",
                        ...o.style,
                        "--radix-select-content-transform-origin": "var(--radix-popper-transform-origin)",
                        "--radix-select-content-available-width": "var(--radix-popper-available-width)",
                        "--radix-select-content-available-height": "var(--radix-popper-available-height)",
                        "--radix-select-trigger-width": "var(--radix-popper-anchor-width)",
                        "--radix-select-trigger-height": "var(--radix-popper-anchor-height)"
                    }
                })
            });
            ee.displayName = "SelectPopperPosition";
            var [et, er] = D(q, {}), en = "SelectViewport", el = n.forwardRef((e, t) => {
                let {
                    __scopeSelect: r,
                    nonce: l,
                    ...o
                } = e, i = G(en, r), s = er(en, r), c = (0, u.e)(t, i.onViewportChange), d = n.useRef(0);
                return (0, C.jsxs)(C.Fragment, {
                    children: [(0, C.jsx)("style", {
                        dangerouslySetInnerHTML: {
                            __html: "[data-radix-select-viewport]{scrollbar-width:none;-ms-overflow-style:none;-webkit-overflow-scrolling:touch;}[data-radix-select-viewport]::-webkit-scrollbar{display:none}"
                        },
                        nonce: l
                    }), (0, C.jsx)(I.Slot, {
                        scope: r,
                        children: (0, C.jsx)(w.WV.div, {
                            "data-radix-select-viewport": "",
                            role: "presentation",
                            ...o,
                            ref: c,
                            style: {
                                position: "relative",
                                flex: 1,
                                overflow: "hidden auto",
                                ...o.style
                            },
                            onScroll: (0, a.M)(o.onScroll, e => {
                                let t = e.currentTarget,
                                    {
                                        contentWrapper: r,
                                        shouldExpandOnScrollRef: n
                                    } = s;
                                if (n ? .current && r) {
                                    let e = Math.abs(d.current - t.scrollTop);
                                    if (e > 0) {
                                        let n = window.innerHeight - 20,
                                            l = Math.max(parseFloat(r.style.minHeight), parseFloat(r.style.height));
                                        if (l < n) {
                                            let o = l + e,
                                                a = Math.min(n, o),
                                                i = o - a;
                                            r.style.height = a + "px", "0px" === r.style.bottom && (t.scrollTop = i > 0 ? i : 0, r.style.justifyContent = "flex-end")
                                        }
                                    }
                                }
                                d.current = t.scrollTop
                            })
                        })
                    })]
                })
            });
            el.displayName = en;
            var eo = "SelectGroup",
                [ea, ei] = D(eo),
                eu = n.forwardRef((e, t) => {
                    let {
                        __scopeSelect: r,
                        ...n
                    } = e, l = (0, h.M)();
                    return (0, C.jsx)(ea, {
                        scope: r,
                        id: l,
                        children: (0, C.jsx)(w.WV.div, {
                            role: "group",
                            "aria-labelledby": l,
                            ...n,
                            ref: t
                        })
                    })
                });
            eu.displayName = eo;
            var es = "SelectLabel",
                ec = n.forwardRef((e, t) => {
                    let {
                        __scopeSelect: r,
                        ...n
                    } = e, l = ei(es, r);
                    return (0, C.jsx)(w.WV.div, {
                        id: l.id,
                        ...n,
                        ref: t
                    })
                });
            ec.displayName = es;
            var ed = "SelectItem",
                [ep, ef] = D(ed),
                eh = n.forwardRef((e, t) => {
                    let {
                        __scopeSelect: r,
                        value: l,
                        disabled: o = !1,
                        textValue: i,
                        ...s
                    } = e, c = _(ed, r), d = G(ed, r), p = c.value === l, [f, v] = n.useState(i ? ? ""), [m, g] = n.useState(!1), x = (0, u.e)(t, e => d.itemRefCallback ? .(e, l, o)), y = (0, h.M)(), b = n.useRef("touch"), S = () => {
                        o || (c.onValueChange(l), c.onOpenChange(!1))
                    };
                    if ("" === l) throw Error("A <Select.Item /> must have a value prop that is not an empty string. This is because the Select value can be set to an empty string to clear the selection and show the placeholder.");
                    return (0, C.jsx)(ep, {
                        scope: r,
                        value: l,
                        disabled: o,
                        textId: y,
                        isSelected: p,
                        onItemTextChange: n.useCallback(e => {
                            v(t => t || (e ? .textContent ? ? "").trim())
                        }, []),
                        children: (0, C.jsx)(I.ItemSlot, {
                            scope: r,
                            value: l,
                            disabled: o,
                            textValue: f,
                            children: (0, C.jsx)(w.WV.div, {
                                role: "option",
                                "aria-labelledby": y,
                                "data-highlighted": m ? "" : void 0,
                                "aria-selected": p && m,
                                "data-state": p ? "checked" : "unchecked",
                                "aria-disabled": o || void 0,
                                "data-disabled": o ? "" : void 0,
                                tabIndex: o ? void 0 : -1,
                                ...s,
                                ref: x,
                                onFocus: (0, a.M)(s.onFocus, () => g(!0)),
                                onBlur: (0, a.M)(s.onBlur, () => g(!1)),
                                onClick: (0, a.M)(s.onClick, () => {
                                    "mouse" !== b.current && S()
                                }),
                                onPointerUp: (0, a.M)(s.onPointerUp, () => {
                                    "mouse" === b.current && S()
                                }),
                                onPointerDown: (0, a.M)(s.onPointerDown, e => {
                                    b.current = e.pointerType
                                }),
                                onPointerMove: (0, a.M)(s.onPointerMove, e => {
                                    b.current = e.pointerType, o ? d.onItemLeave ? .() : "mouse" === b.current && e.currentTarget.focus({
                                        preventScroll: !0
                                    })
                                }),
                                onPointerLeave: (0, a.M)(s.onPointerLeave, e => {
                                    e.currentTarget === document.activeElement && d.onItemLeave ? .()
                                }),
                                onKeyDown: (0, a.M)(s.onKeyDown, e => {
                                    d.searchRef ? .current !== "" && " " === e.key || (k.includes(e.key) && S(), " " === e.key && e.preventDefault())
                                })
                            })
                        })
                    })
                });
            eh.displayName = ed;
            var ev = "SelectItemText",
                em = n.forwardRef((e, t) => {
                    let {
                        __scopeSelect: r,
                        className: o,
                        style: a,
                        ...i
                    } = e, s = _(ev, r), c = G(ev, r), d = ef(ev, r), p = H(ev, r), [f, h] = n.useState(null), v = (0, u.e)(t, e => h(e), d.onItemTextChange, e => c.itemTextRefCallback ? .(e, d.value, d.disabled)), m = f ? .textContent, g = n.useMemo(() => (0, C.jsx)("option", {
                        value: d.value,
                        disabled: d.disabled,
                        children: m
                    }, d.value), [d.disabled, d.value, m]), {
                        onNativeOptionAdd: x,
                        onNativeOptionRemove: y
                    } = p;
                    return (0, b.b)(() => (x(g), () => y(g)), [x, y, g]), (0, C.jsxs)(C.Fragment, {
                        children: [(0, C.jsx)(w.WV.span, {
                            id: d.textId,
                            ...i,
                            ref: v
                        }), d.isSelected && s.valueNode && !s.valueNodeHasChildren ? l.createPortal(i.children, s.valueNode) : null]
                    })
                });
            em.displayName = ev;
            var ew = "SelectItemIndicator",
                eg = n.forwardRef((e, t) => {
                    let {
                        __scopeSelect: r,
                        ...n
                    } = e;
                    return ef(ew, r).isSelected ? (0, C.jsx)(w.WV.span, {
                        "aria-hidden": !0,
                        ...n,
                        ref: t
                    }) : null
                });
            eg.displayName = ew;
            var ex = "SelectScrollUpButton";
            n.forwardRef((e, t) => {
                let r = G(ex, e.__scopeSelect),
                    l = er(ex, e.__scopeSelect),
                    [o, a] = n.useState(!1),
                    i = (0, u.e)(t, l.onScrollButtonChange);
                return (0, b.b)(() => {
                    if (r.viewport && r.isPositioned) {
                        let e = function() {
                                a(t.scrollTop > 0)
                            },
                            t = r.viewport;
                        return e(), t.addEventListener("scroll", e), () => t.removeEventListener("scroll", e)
                    }
                }, [r.viewport, r.isPositioned]), o ? (0, C.jsx)(eb, { ...e,
                    ref: i,
                    onAutoScroll: () => {
                        let {
                            viewport: e,
                            selectedItem: t
                        } = r;
                        e && t && (e.scrollTop = e.scrollTop - t.offsetHeight)
                    }
                }) : null
            }).displayName = ex;
            var ey = "SelectScrollDownButton";
            n.forwardRef((e, t) => {
                let r = G(ey, e.__scopeSelect),
                    l = er(ey, e.__scopeSelect),
                    [o, a] = n.useState(!1),
                    i = (0, u.e)(t, l.onScrollButtonChange);
                return (0, b.b)(() => {
                    if (r.viewport && r.isPositioned) {
                        let e = function() {
                                let e = t.scrollHeight - t.clientHeight;
                                a(Math.ceil(t.scrollTop) < e)
                            },
                            t = r.viewport;
                        return e(), t.addEventListener("scroll", e), () => t.removeEventListener("scroll", e)
                    }
                }, [r.viewport, r.isPositioned]), o ? (0, C.jsx)(eb, { ...e,
                    ref: i,
                    onAutoScroll: () => {
                        let {
                            viewport: e,
                            selectedItem: t
                        } = r;
                        e && t && (e.scrollTop = e.scrollTop + t.offsetHeight)
                    }
                }) : null
            }).displayName = ey;
            var eb = n.forwardRef((e, t) => {
                    let {
                        __scopeSelect: r,
                        onAutoScroll: l,
                        ...o
                    } = e, i = G("SelectScrollButton", r), u = n.useRef(null), s = P(r), c = n.useCallback(() => {
                        null !== u.current && (window.clearInterval(u.current), u.current = null)
                    }, []);
                    return n.useEffect(() => () => c(), [c]), (0, b.b)(() => {
                        let e = s().find(e => e.ref.current === document.activeElement);
                        e ? .ref.current ? .scrollIntoView({
                            block: "nearest"
                        })
                    }, [s]), (0, C.jsx)(w.WV.div, {
                        "aria-hidden": !0,
                        ...o,
                        ref: t,
                        style: {
                            flexShrink: 0,
                            ...o.style
                        },
                        onPointerDown: (0, a.M)(o.onPointerDown, () => {
                            null === u.current && (u.current = window.setInterval(l, 50))
                        }),
                        onPointerMove: (0, a.M)(o.onPointerMove, () => {
                            i.onItemLeave ? .(), null === u.current && (u.current = window.setInterval(l, 50))
                        }),
                        onPointerLeave: (0, a.M)(o.onPointerLeave, () => {
                            c()
                        })
                    })
                }),
                eS = n.forwardRef((e, t) => {
                    let {
                        __scopeSelect: r,
                        ...n
                    } = e;
                    return (0, C.jsx)(w.WV.div, {
                        "aria-hidden": !0,
                        ...n,
                        ref: t
                    })
                });
            eS.displayName = "SelectSeparator";
            var eC = "SelectArrow";
            n.forwardRef((e, t) => {
                let {
                    __scopeSelect: r,
                    ...n
                } = e, l = L(r), o = _(eC, r), a = G(eC, r);
                return o.open && "popper" === a.position ? (0, C.jsx)(v.Eh, { ...l,
                    ...n,
                    ref: t
                }) : null
            }).displayName = eC;
            var eM = n.forwardRef(({
                __scopeSelect: e,
                value: t,
                ...r
            }, l) => {
                let o = n.useRef(null),
                    a = (0, u.e)(l, o),
                    i = (0, S.D)(t);
                return n.useEffect(() => {
                    let e = o.current;
                    if (!e) return;
                    let r = Object.getOwnPropertyDescriptor(window.HTMLSelectElement.prototype, "value").set;
                    if (i !== t && r) {
                        let n = new Event("change", {
                            bubbles: !0
                        });
                        r.call(e, t), e.dispatchEvent(n)
                    }
                }, [i, t]), (0, C.jsx)(w.WV.select, { ...r,
                    style: { ...M,
                        ...r.style
                    },
                    ref: a,
                    defaultValue: t
                })
            });

            function ej(e) {
                return "" === e || void 0 === e
            }

            function eR(e) {
                let t = (0, x.W)(e),
                    r = n.useRef(""),
                    l = n.useRef(0),
                    o = n.useCallback(e => {
                        let n = r.current + e;
                        t(n),
                            function e(t) {
                                r.current = t, window.clearTimeout(l.current), "" !== t && (l.current = window.setTimeout(() => e(""), 1e3))
                            }(n)
                    }, [t]),
                    a = n.useCallback(() => {
                        r.current = "", window.clearTimeout(l.current)
                    }, []);
                return n.useEffect(() => () => window.clearTimeout(l.current), []), [r, o, a]
            }

            function eT(e, t, r) {
                var n;
                let l = t.length > 1 && Array.from(t).every(e => e === t[0]) ? t[0] : t,
                    o = (n = Math.max(r ? e.indexOf(r) : -1, 0), e.map((t, r) => e[(n + r) % e.length]));
                1 === l.length && (o = o.filter(e => e !== r));
                let a = o.find(e => e.textValue.toLowerCase().startsWith(l.toLowerCase()));
                return a !== r ? a : void 0
            }
            eM.displayName = "SelectBubbleInput";
            var ek = B,
                eE = K,
                eI = U,
                eP = z,
                eN = Z,
                eD = Y,
                eV = el,
                eL = eu,
                eW = ec,
                e_ = eh,
                eA = em,
                eH = eg,
                eB = eS
        },
        57898: function(e, t, r) {
            r.d(t, {
                D: function() {
                    return l
                }
            });
            var n = r(67294);

            function l(e) {
                let t = n.useRef({
                    value: e,
                    previous: e
                });
                return n.useMemo(() => (t.current.value !== e && (t.current.previous = t.current.value, t.current.value = e), t.current.previous), [e])
            }
        }
    }
]);