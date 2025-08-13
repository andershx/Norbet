"use strict";
(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [4940], {
        44012: function(e, t, n) {
            var r = n(97582),
                a = n(67294),
                o = n(680),
                i = n(86896);

            function u(e) {
                var t = (0, i.Z)(),
                    n = t.formatMessage,
                    r = t.textComponent,
                    o = void 0 === r ? a.Fragment : r,
                    u = e.id,
                    l = e.description,
                    s = e.defaultMessage,
                    d = e.values,
                    c = e.children,
                    f = e.tagName,
                    v = void 0 === f ? o : f,
                    p = n({
                        id: u,
                        description: l,
                        defaultMessage: s
                    }, d, {
                        ignoreTag: e.ignoreTag
                    });
                return "function" == typeof c ? c(Array.isArray(p) ? p : [p]) : v ? a.createElement(v, null, p) : a.createElement(a.Fragment, null, p)
            }
            u.displayName = "FormattedMessage";
            var l = a.memo(u, function(e, t) {
                var n = e.values,
                    a = (0, r._T)(e, ["values"]),
                    i = t.values,
                    u = (0, r._T)(t, ["values"]);
                return (0, o.wU)(i, n) && (0, o.wU)(a, u)
            });
            l.displayName = "MemoizedFormattedMessage", t.Z = l
        },
        12854: function(e, t, n) {
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
                    return q
                },
                h_: function() {
                    return ee
                },
                x8: function() {
                    return eo
                },
                xz: function() {
                    return G
                }
            });
            var r = n(67294),
                a = n(36206),
                o = n(28771),
                i = n(25360),
                u = n(91276),
                l = n(77342),
                s = n(46063),
                d = n(95420),
                c = n(42651),
                f = n(29115),
                v = n(75320),
                p = n(27552),
                g = n(71930),
                m = n(23541),
                D = n(88426),
                h = n(85893),
                M = "Dialog",
                [y, N] = (0, i.b)(M),
                [x, C] = y(M),
                b = e => {
                    let {
                        __scopeDialog: t,
                        children: n,
                        open: a,
                        defaultOpen: o,
                        onOpenChange: i,
                        modal: s = !0
                    } = e, d = r.useRef(null), c = r.useRef(null), [f, v] = (0, l.T)({
                        prop: a,
                        defaultProp: o ? ? !1,
                        onChange: i,
                        caller: M
                    });
                    return (0, h.jsx)(x, {
                        scope: t,
                        triggerRef: d,
                        contentRef: c,
                        contentId: (0, u.M)(),
                        titleId: (0, u.M)(),
                        descriptionId: (0, u.M)(),
                        open: f,
                        onOpenChange: v,
                        onOpenToggle: r.useCallback(() => v(e => !e), [v]),
                        modal: s,
                        children: n
                    })
                };
            b.displayName = M;
            var w = "DialogTrigger",
                T = r.forwardRef((e, t) => {
                    let {
                        __scopeDialog: n,
                        ...r
                    } = e, i = C(w, n), u = (0, o.e)(t, i.triggerRef);
                    return (0, h.jsx)(v.WV.button, {
                        type: "button",
                        "aria-haspopup": "dialog",
                        "aria-expanded": i.open,
                        "aria-controls": i.contentId,
                        "data-state": P(i.open),
                        ...r,
                        ref: u,
                        onClick: (0, a.M)(e.onClick, i.onOpenToggle)
                    })
                });
            T.displayName = w;
            var _ = "DialogPortal",
                [R, F] = y(_, {
                    forceMount: void 0
                }),
                j = e => {
                    let {
                        __scopeDialog: t,
                        forceMount: n,
                        children: a,
                        container: o
                    } = e, i = C(_, t);
                    return (0, h.jsx)(R, {
                        scope: t,
                        forceMount: n,
                        children: r.Children.map(a, e => (0, h.jsx)(f.z, {
                            present: n || i.open,
                            children: (0, h.jsx)(c.h, {
                                asChild: !0,
                                container: o,
                                children: e
                            })
                        }))
                    })
                };
            j.displayName = _;
            var I = "DialogOverlay",
                E = r.forwardRef((e, t) => {
                    let n = F(I, e.__scopeDialog),
                        {
                            forceMount: r = n.forceMount,
                            ...a
                        } = e,
                        o = C(I, e.__scopeDialog);
                    return o.modal ? (0, h.jsx)(f.z, {
                        present: r || o.open,
                        children: (0, h.jsx)(U, { ...a,
                            ref: t
                        })
                    }) : null
                });
            E.displayName = I;
            var O = (0, D.Z8)("DialogOverlay.RemoveScroll"),
                U = r.forwardRef((e, t) => {
                    let {
                        __scopeDialog: n,
                        ...r
                    } = e, a = C(I, n);
                    return (0, h.jsx)(g.Z, {
                        as: O,
                        allowPinchZoom: !0,
                        shards: [a.contentRef],
                        children: (0, h.jsx)(v.WV.div, {
                            "data-state": P(a.open),
                            ...r,
                            ref: t,
                            style: {
                                pointerEvents: "auto",
                                ...r.style
                            }
                        })
                    })
                }),
                H = "DialogContent",
                Q = r.forwardRef((e, t) => {
                    let n = F(H, e.__scopeDialog),
                        {
                            forceMount: r = n.forceMount,
                            ...a
                        } = e,
                        o = C(H, e.__scopeDialog);
                    return (0, h.jsx)(f.z, {
                        present: r || o.open,
                        children: o.modal ? (0, h.jsx)(S, { ...a,
                            ref: t
                        }) : (0, h.jsx)(X, { ...a,
                            ref: t
                        })
                    })
                });
            Q.displayName = H;
            var S = r.forwardRef((e, t) => {
                    let n = C(H, e.__scopeDialog),
                        i = r.useRef(null),
                        u = (0, o.e)(t, n.contentRef, i);
                    return r.useEffect(() => {
                        let e = i.current;
                        if (e) return (0, m.Ry)(e)
                    }, []), (0, h.jsx)(Y, { ...e,
                        ref: u,
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
                X = r.forwardRef((e, t) => {
                    let n = C(H, e.__scopeDialog),
                        a = r.useRef(!1),
                        o = r.useRef(!1);
                    return (0, h.jsx)(Y, { ...e,
                        ref: t,
                        trapFocus: !1,
                        disableOutsidePointerEvents: !1,
                        onCloseAutoFocus: t => {
                            e.onCloseAutoFocus ? .(t), t.defaultPrevented || (a.current || n.triggerRef.current ? .focus(), t.preventDefault()), a.current = !1, o.current = !1
                        },
                        onInteractOutside: t => {
                            e.onInteractOutside ? .(t), t.defaultPrevented || (a.current = !0, "pointerdown" !== t.detail.originalEvent.type || (o.current = !0));
                            let r = t.target;
                            n.triggerRef.current ? .contains(r) && t.preventDefault(), "focusin" === t.detail.originalEvent.type && o.current && t.preventDefault()
                        }
                    })
                }),
                Y = r.forwardRef((e, t) => {
                    let {
                        __scopeDialog: n,
                        trapFocus: a,
                        onOpenAutoFocus: i,
                        onCloseAutoFocus: u,
                        ...l
                    } = e, c = C(H, n), f = r.useRef(null), v = (0, o.e)(t, f);
                    return (0, p.EW)(), (0, h.jsxs)(h.Fragment, {
                        children: [(0, h.jsx)(d.M, {
                            asChild: !0,
                            loop: !0,
                            trapped: a,
                            onMountAutoFocus: i,
                            onUnmountAutoFocus: u,
                            children: (0, h.jsx)(s.XB, {
                                role: "dialog",
                                id: c.contentId,
                                "aria-describedby": c.descriptionId,
                                "aria-labelledby": c.titleId,
                                "data-state": P(c.open),
                                ...l,
                                ref: v,
                                onDismiss: () => c.onOpenChange(!1)
                            })
                        }), (0, h.jsxs)(h.Fragment, {
                            children: [(0, h.jsx)(L, {
                                titleId: c.titleId
                            }), (0, h.jsx)(K, {
                                contentRef: f,
                                descriptionId: c.descriptionId
                            })]
                        })]
                    })
                }),
                k = "DialogTitle",
                z = r.forwardRef((e, t) => {
                    let {
                        __scopeDialog: n,
                        ...r
                    } = e, a = C(k, n);
                    return (0, h.jsx)(v.WV.h2, {
                        id: a.titleId,
                        ...r,
                        ref: t
                    })
                });
            z.displayName = k;
            var A = "DialogDescription",
                Z = r.forwardRef((e, t) => {
                    let {
                        __scopeDialog: n,
                        ...r
                    } = e, a = C(A, n);
                    return (0, h.jsx)(v.WV.p, {
                        id: a.descriptionId,
                        ...r,
                        ref: t
                    })
                });
            Z.displayName = A;
            var W = "DialogClose",
                $ = r.forwardRef((e, t) => {
                    let {
                        __scopeDialog: n,
                        ...r
                    } = e, o = C(W, n);
                    return (0, h.jsx)(v.WV.button, {
                        type: "button",
                        ...r,
                        ref: t,
                        onClick: (0, a.M)(e.onClick, () => o.onOpenChange(!1))
                    })
                });

            function P(e) {
                return e ? "open" : "closed"
            }
            $.displayName = W;
            var V = "DialogTitleWarning",
                [B, J] = (0, i.k)(V, {
                    contentName: H,
                    titleName: k,
                    docsSlug: "dialog"
                }),
                L = ({
                    titleId: e
                }) => {
                    let t = J(V),
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
                    let n = J("DialogDescriptionWarning"),
                        a = `Warning: Missing \`Description\` or \`aria-describedby={undefined}\` for {${n.contentName}}.`;
                    return r.useEffect(() => {
                        let n = e.current ? .getAttribute("aria-describedby");
                        t && n && !document.getElementById(t) && console.warn(a)
                    }, [a, e, t]), null
                },
                q = b,
                G = T,
                ee = j,
                et = E,
                en = Q,
                er = z,
                ea = Z,
                eo = $
        },
        55945: function(e, t, n) {
            n.d(t, {
                u: function() {
                    return r
                }
            });

            function r(e) {
                return function(t) {
                    var n = (e ? Math[e] : Math.trunc)(t);
                    return 0 === n ? 0 : n
                }
            }
        },
        41609: function(e, t, n) {
            n.d(t, {
                y: function() {
                    return a
                }
            });
            var r = n(16393);

            function a(e) {
                return (0, r.L)(e, Date.now())
            }
        },
        27498: function(e, t, n) {
            n.d(t, {
                X: function() {
                    return i
                }
            });
            var r = n(55945),
                a = n(96707),
                o = n(64077);

            function i(e, t, n) {
                var i = (0, o._)(e, t) / a.yJ;
                return (0, r.u)(null == n ? void 0 : n.roundingMethod)(i)
            }
        },
        37378: function(e, t, n) {
            n.d(t, {
                i: function() {
                    return a
                }
            });
            var r = n(46042);

            function a(e, t) {
                var n = (0, r.Q)(e, null == t ? void 0 : t.in);
                return n.setHours(23, 59, 59, 999), n
            }
        },
        77652: function(e, t, n) {
            n.d(t, {
                Q: function() {
                    return m
                }
            });
            var r = n(41609),
                a = n(24043),
                o = n(248),
                i = n(18647),
                u = n(45662),
                l = n(98422),
                s = n(29675),
                d = n(46042);

            function c(e, t) {
                var n = +(0, d.Q)(e) - +(0, d.Q)(t);
                return n < 0 ? -1 : n > 0 ? 1 : n
            }
            var f = n(96707),
                v = n(37378),
                p = n(55945),
                g = n(64077);

            function m(e, t) {
                return function(e, t, n) {
                    var r, m, D, h, M = (0, u.j)(),
                        y = null !== (D = null !== (m = null == n ? void 0 : n.locale) && void 0 !== m ? m : M.locale) && void 0 !== D ? D : i._,
                        N = c(e, t);
                    if (isNaN(N)) throw RangeError("Invalid time value");
                    var x = Object.assign({}, n, {
                            addSuffix: null == n ? void 0 : n.addSuffix,
                            comparison: N
                        }),
                        C = (0, a._)(s.d.apply(void 0, [null == n ? void 0 : n.in].concat((0, o._)(N > 0 ? [t, e] : [e, t]))), 2),
                        b = C[0],
                        w = C[1],
                        T = (r = (0, g._)(w, b) / 1e3, (0, p.u)(void 0)(r)),
                        _ = Math.round((T - ((0, l.D)(w) - (0, l.D)(b)) / 1e3) / 60);
                    if (_ < 2) {
                        if (null == n ? void 0 : n.includeSeconds) {
                            if (T < 5) return y.formatDistance("lessThanXSeconds", 5, x);
                            if (T < 10) return y.formatDistance("lessThanXSeconds", 10, x);
                            if (T < 20) return y.formatDistance("lessThanXSeconds", 20, x);
                            if (T < 40) return y.formatDistance("halfAMinute", 0, x);
                            else if (T < 60) return y.formatDistance("lessThanXMinutes", 1, x);
                            else return y.formatDistance("xMinutes", 1, x)
                        }
                        return 0 === _ ? y.formatDistance("lessThanXMinutes", 1, x) : y.formatDistance("xMinutes", _, x)
                    }
                    if (_ < 45) return y.formatDistance("xMinutes", _, x);
                    if (_ < 90) return y.formatDistance("aboutXHours", 1, x);
                    if (_ < f.H_) return y.formatDistance("aboutXHours", Math.round(_ / 60), x);
                    if (_ < 2520) return y.formatDistance("xDays", 1, x);
                    if (_ < f.fH) {
                        var R = Math.round(_ / f.H_);
                        return y.formatDistance("xDays", R, x)
                    }
                    if (_ < 2 * f.fH) return h = Math.round(_ / f.fH), y.formatDistance("aboutXMonths", h, x);
                    if ((h = function(e, t, n) {
                            var r, o, i, u, l, f, p, g = (0, a._)((0, s.d)(void 0, e, e, t), 3),
                                m = g[0],
                                D = g[1],
                                h = g[2],
                                M = c(D, h),
                                y = Math.abs((o = (r = (0, a._)((0, s.d)(void 0, D, h), 2))[0], i = r[1], 12 * (o.getFullYear() - i.getFullYear()) + (o.getMonth() - i.getMonth())));
                            if (y < 1) return 0;
                            1 === D.getMonth() && D.getDate() > 27 && D.setDate(30), D.setMonth(D.getMonth() - M * y);
                            var N = c(D, h) === -M;
                            l = (0, d.Q)(m, void 0), +(0, v.i)(l, u) == +(p = (f = (0, d.Q)(l, null == u ? void 0 : u.in)).getMonth(), f.setFullYear(f.getFullYear(), p + 1, 0), f.setHours(23, 59, 59, 999), f) && 1 === y && 1 === c(m, h) && (N = !1);
                            var x = M * (y - +N);
                            return 0 === x ? 0 : x
                        }(w, b)) < 12) {
                        var F = Math.round(_ / f.fH);
                        return y.formatDistance("xMonths", F, x)
                    }
                    var j = h % 12,
                        I = Math.trunc(h / 12);
                    return j < 3 ? y.formatDistance("aboutXYears", I, x) : j < 9 ? y.formatDistance("overXYears", I, x) : y.formatDistance("almostXYears", I + 1, x)
                }(e, (0, r.y)(e), t)
            }
        },
        71483: function(e, t, n) {
            n.d(t, {
                K: function() {
                    return a
                }
            });
            var r = n(46042);

            function a(e, t) {
                return (0, r.Q)(1e3 * e, null == t ? void 0 : t.in)
            }
        },
        44961: function(e, t, n) {
            n.d(t, {
                A: function() {
                    return a
                }
            });
            var r = n(46042);

            function a(e, t) {
                return +(0, r.Q)(e) > +(0, r.Q)(t)
            }
        },
        81719: function(e, t, n) {
            n.d(t, {
                R: function() {
                    return a
                }
            });
            var r = n(46042);

            function a(e, t) {
                return +(0, r.Q)(e) < +(0, r.Q)(t)
            }
        },
        4151: function(e, t, n) {
            n.d(t, {
                z: function() {
                    return l
                }
            });
            var r = n(16393),
                a = n(41609),
                o = n(24043),
                i = n(29675),
                u = n(40324);

            function l(e, t) {
                var n, l, s, d, c;
                return n = (0, r.L)((null == t ? void 0 : t.in) || e, e), l = (0, a.y)((null == t ? void 0 : t.in) || e), d = (s = (0, o._)((0, i.d)(void 0, n, l), 2))[0], c = s[1], +(0, u.b)(d) == +(0, u.b)(c)
            }
        },
        70309: function(e, t, n) {
            n.d(t, {
                D: function() {
                    return i
                }
            });
            var r = n(96707),
                a = n(16393),
                o = n(46042);

            function i(e, t) {
                var n, i, g, m = function() {
                        return (0, a.L)(null == t ? void 0 : t.in, NaN)
                    },
                    D = null !== (n = null == t ? void 0 : t.additionalDigits) && void 0 !== n ? n : 2,
                    h = function(e) {
                        var t, n = {},
                            r = e.split(u.dateTimeDelimiter);
                        if (r.length > 2) return n;
                        if (/:/.test(r[0]) ? t = r[0] : (n.date = r[0], t = r[1], u.timeZoneDelimiter.test(n.date) && (n.date = e.split(u.timeZoneDelimiter)[0], t = e.substr(n.date.length, e.length))), t) {
                            var a = u.timezone.exec(t);
                            a ? (n.time = t.replace(a[1], ""), n.timezone = a[1]) : n.time = t
                        }
                        return n
                    }(e);
                if (h.date) {
                    var M = function(e, t) {
                        var n = RegExp("^(?:(\\d{4}|[+-]\\d{" + (4 + t) + "})|(\\d{2}|[+-]\\d{" + (2 + t) + "})$)"),
                            r = e.match(n);
                        if (!r) return {
                            year: NaN,
                            restDateString: ""
                        };
                        var a = r[1] ? parseInt(r[1]) : null,
                            o = r[2] ? parseInt(r[2]) : null;
                        return {
                            year: null === o ? a : 100 * o,
                            restDateString: e.slice((r[1] || r[2]).length)
                        }
                    }(h.date, D);
                    i = function(e, t) {
                        if (null === t) return new Date(NaN);
                        var n, r, a = e.match(l);
                        if (!a) return new Date(NaN);
                        var o = !!a[4],
                            i = c(a[1]),
                            u = c(a[2]) - 1,
                            s = c(a[3]),
                            d = c(a[4]),
                            f = c(a[5]) - 1;
                        if (o) return d >= 1 && d <= 53 && f >= 0 && f <= 6 ? ((n = new Date(0)).setUTCFullYear(t, 0, 4), r = n.getUTCDay() || 7, n.setUTCDate(n.getUTCDate() + ((d - 1) * 7 + f + 1 - r)), n) : new Date(NaN);
                        var g = new Date(0);
                        return u >= 0 && u <= 11 && s >= 1 && s <= (v[u] || (p(t) ? 29 : 28)) && i >= 1 && i <= (p(t) ? 366 : 365) ? (g.setUTCFullYear(t, u, Math.max(i, s)), g) : new Date(NaN)
                    }(M.restDateString, M.year)
                }
                if (!i || isNaN(+i)) return m();
                var y = +i,
                    N = 0;
                if (h.time && isNaN(N = function(e) {
                        var t = e.match(s);
                        if (!t) return NaN;
                        var n = f(t[1]),
                            a = f(t[2]),
                            o = f(t[3]);
                        return (24 === n ? 0 === a && 0 === o : o >= 0 && o < 60 && a >= 0 && a < 60 && n >= 0 && n < 25) ? n * r.vh + a * r.yJ + 1e3 * o : NaN
                    }(h.time))) return m();
                if (h.timezone) {
                    if (isNaN(g = function(e) {
                            if ("Z" === e) return 0;
                            var t = e.match(d);
                            if (!t) return 0;
                            var n = "+" === t[1] ? -1 : 1,
                                a = parseInt(t[2]),
                                o = t[3] && parseInt(t[3]) || 0;
                            return o >= 0 && o <= 59 ? n * (a * r.vh + o * r.yJ) : NaN
                        }(h.timezone))) return m()
                } else {
                    var x = new Date(y + N),
                        C = (0, o.Q)(0, null == t ? void 0 : t.in);
                    return C.setFullYear(x.getUTCFullYear(), x.getUTCMonth(), x.getUTCDate()), C.setHours(x.getUTCHours(), x.getUTCMinutes(), x.getUTCSeconds(), x.getUTCMilliseconds()), C
                }
                return (0, o.Q)(y + N + g, null == t ? void 0 : t.in)
            }
            var u = {
                    dateTimeDelimiter: /[T ]/,
                    timeZoneDelimiter: /[Z ]/i,
                    timezone: /([Z+-].*)$/
                },
                l = /^-?(?:(\d{3})|(\d{2})(?:-?(\d{2}))?|W(\d{2})(?:-?(\d{1}))?|)$/,
                s = /^(\d{2}(?:[.,]\d*)?)(?::?(\d{2}(?:[.,]\d*)?))?(?::?(\d{2}(?:[.,]\d*)?))?$/,
                d = /^([+-])(\d{2})(?::?(\d{2}))?$/;

            function c(e) {
                return e ? parseInt(e) : 1
            }

            function f(e) {
                return e && parseFloat(e.replace(",", ".")) || 0
            }
            var v = [31, null, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];

            function p(e) {
                return e % 400 == 0 || e % 4 == 0 && e % 100 != 0
            }
        }
    }
]);