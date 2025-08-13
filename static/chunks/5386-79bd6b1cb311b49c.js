"use strict";
(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [5386], {
        34715: function(e, t, n) {
            n.d(t, {
                V: function() {
                    return u
                }
            });
            var r = n(67294),
                o = n(10990);
            let i = "undefined" != typeof document ? r.useLayoutEffect : r.useEffect,
                a = e => e && !Array.isArray(e) && "object" == typeof e,
                l = [],
                c = {},
                s = o.ZP,
                u = (e, t = l) => {
                    let n = c;
                    a(e) ? (n = e, e = null, t = "dependencies" in n ? n.dependencies : l) : a(t) && (t = "dependencies" in (n = t) ? n.dependencies : l), e && "function" != typeof e && console.warn("First parameter must be a function or config object");
                    let {
                        scope: o,
                        revertOnUpdate: u
                    } = n, f = (0, r.useRef)(!1), d = (0, r.useRef)(s.context(() => {}, o)), p = (0, r.useRef)(e => d.current.add(null, e)), m = t && t.length && !u;
                    return m && i(() => (f.current = !0, () => d.current.revert()), l), i(() => {
                        if (e && d.current.add(e, o), !m || !f.current) return () => d.current.revert()
                    }, t), {
                        context: d.current,
                        contextSafe: p.current
                    }
                };
            u.register = e => {
                s = e
            }, u.headless = !0
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
                    return eo
                },
                fC: function() {
                    return J
                },
                h_: function() {
                    return ee
                },
                x8: function() {
                    return ei
                },
                xz: function() {
                    return Q
                }
            });
            var r = n(67294),
                o = n(36206),
                i = n(28771),
                a = n(25360),
                l = n(91276),
                c = n(77342),
                s = n(46063),
                u = n(95420),
                f = n(42651),
                d = n(29115),
                p = n(75320),
                m = n(27552),
                g = n(71930),
                h = n(23541),
                y = n(88426),
                T = n(85893),
                E = "Dialog",
                [b, _] = (0, a.b)(E),
                [A, N] = b(E),
                v = e => {
                    let {
                        __scopeDialog: t,
                        children: n,
                        open: o,
                        defaultOpen: i,
                        onOpenChange: a,
                        modal: s = !0
                    } = e, u = r.useRef(null), f = r.useRef(null), [d, p] = (0, c.T)({
                        prop: o,
                        defaultProp: i ? ? !1,
                        onChange: a,
                        caller: E
                    });
                    return (0, T.jsx)(A, {
                        scope: t,
                        triggerRef: u,
                        contentRef: f,
                        contentId: (0, l.M)(),
                        titleId: (0, l.M)(),
                        descriptionId: (0, l.M)(),
                        open: d,
                        onOpenChange: p,
                        onOpenToggle: r.useCallback(() => p(e => !e), [p]),
                        modal: s,
                        children: n
                    })
                };
            v.displayName = E;
            var S = "DialogTrigger",
                R = r.forwardRef((e, t) => {
                    let {
                        __scopeDialog: n,
                        ...r
                    } = e, a = N(S, n), l = (0, i.e)(t, a.triggerRef);
                    return (0, T.jsx)(p.WV.button, {
                        type: "button",
                        "aria-haspopup": "dialog",
                        "aria-expanded": a.open,
                        "aria-controls": a.contentId,
                        "data-state": V(a.open),
                        ...r,
                        ref: l,
                        onClick: (0, o.M)(e.onClick, a.onOpenToggle)
                    })
                });
            R.displayName = S;
            var w = "DialogPortal",
                [x, D] = b(w, {
                    forceMount: void 0
                }),
                C = e => {
                    let {
                        __scopeDialog: t,
                        forceMount: n,
                        children: o,
                        container: i
                    } = e, a = N(w, t);
                    return (0, T.jsx)(x, {
                        scope: t,
                        forceMount: n,
                        children: r.Children.map(o, e => (0, T.jsx)(d.z, {
                            present: n || a.open,
                            children: (0, T.jsx)(f.h, {
                                asChild: !0,
                                container: i,
                                children: e
                            })
                        }))
                    })
                };
            C.displayName = w;
            var O = "DialogOverlay",
                I = r.forwardRef((e, t) => {
                    let n = D(O, e.__scopeDialog),
                        {
                            forceMount: r = n.forceMount,
                            ...o
                        } = e,
                        i = N(O, e.__scopeDialog);
                    return i.modal ? (0, T.jsx)(d.z, {
                        present: r || i.open,
                        children: (0, T.jsx)(L, { ...o,
                            ref: t
                        })
                    }) : null
                });
            I.displayName = O;
            var k = (0, y.Z8)("DialogOverlay.RemoveScroll"),
                L = r.forwardRef((e, t) => {
                    let {
                        __scopeDialog: n,
                        ...r
                    } = e, o = N(O, n);
                    return (0, T.jsx)(g.Z, {
                        as: k,
                        allowPinchZoom: !0,
                        shards: [o.contentRef],
                        children: (0, T.jsx)(p.WV.div, {
                            "data-state": V(o.open),
                            ...r,
                            ref: t,
                            style: {
                                pointerEvents: "auto",
                                ...r.style
                            }
                        })
                    })
                }),
                M = "DialogContent",
                U = r.forwardRef((e, t) => {
                    let n = D(M, e.__scopeDialog),
                        {
                            forceMount: r = n.forceMount,
                            ...o
                        } = e,
                        i = N(M, e.__scopeDialog);
                    return (0, T.jsx)(d.z, {
                        present: r || i.open,
                        children: i.modal ? (0, T.jsx)(P, { ...o,
                            ref: t
                        }) : (0, T.jsx)(F, { ...o,
                            ref: t
                        })
                    })
                });
            U.displayName = M;
            var P = r.forwardRef((e, t) => {
                    let n = N(M, e.__scopeDialog),
                        a = r.useRef(null),
                        l = (0, i.e)(t, n.contentRef, a);
                    return r.useEffect(() => {
                        let e = a.current;
                        if (e) return (0, h.Ry)(e)
                    }, []), (0, T.jsx)(z, { ...e,
                        ref: l,
                        trapFocus: n.open,
                        disableOutsidePointerEvents: !0,
                        onCloseAutoFocus: (0, o.M)(e.onCloseAutoFocus, e => {
                            e.preventDefault(), n.triggerRef.current ? .focus()
                        }),
                        onPointerDownOutside: (0, o.M)(e.onPointerDownOutside, e => {
                            let t = e.detail.originalEvent,
                                n = 0 === t.button && !0 === t.ctrlKey;
                            (2 === t.button || n) && e.preventDefault()
                        }),
                        onFocusOutside: (0, o.M)(e.onFocusOutside, e => e.preventDefault())
                    })
                }),
                F = r.forwardRef((e, t) => {
                    let n = N(M, e.__scopeDialog),
                        o = r.useRef(!1),
                        i = r.useRef(!1);
                    return (0, T.jsx)(z, { ...e,
                        ref: t,
                        trapFocus: !1,
                        disableOutsidePointerEvents: !1,
                        onCloseAutoFocus: t => {
                            e.onCloseAutoFocus ? .(t), t.defaultPrevented || (o.current || n.triggerRef.current ? .focus(), t.preventDefault()), o.current = !1, i.current = !1
                        },
                        onInteractOutside: t => {
                            e.onInteractOutside ? .(t), t.defaultPrevented || (o.current = !0, "pointerdown" !== t.detail.originalEvent.type || (i.current = !0));
                            let r = t.target;
                            n.triggerRef.current ? .contains(r) && t.preventDefault(), "focusin" === t.detail.originalEvent.type && i.current && t.preventDefault()
                        }
                    })
                }),
                z = r.forwardRef((e, t) => {
                    let {
                        __scopeDialog: n,
                        trapFocus: o,
                        onOpenAutoFocus: a,
                        onCloseAutoFocus: l,
                        ...c
                    } = e, f = N(M, n), d = r.useRef(null), p = (0, i.e)(t, d);
                    return (0, m.EW)(), (0, T.jsxs)(T.Fragment, {
                        children: [(0, T.jsx)(u.M, {
                            asChild: !0,
                            loop: !0,
                            trapped: o,
                            onMountAutoFocus: a,
                            onUnmountAutoFocus: l,
                            children: (0, T.jsx)(s.XB, {
                                role: "dialog",
                                id: f.contentId,
                                "aria-describedby": f.descriptionId,
                                "aria-labelledby": f.titleId,
                                "data-state": V(f.open),
                                ...c,
                                ref: p,
                                onDismiss: () => f.onOpenChange(!1)
                            })
                        }), (0, T.jsxs)(T.Fragment, {
                            children: [(0, T.jsx)(Z, {
                                titleId: f.titleId
                            }), (0, T.jsx)(K, {
                                contentRef: d,
                                descriptionId: f.descriptionId
                            })]
                        })]
                    })
                }),
                H = "DialogTitle",
                j = r.forwardRef((e, t) => {
                    let {
                        __scopeDialog: n,
                        ...r
                    } = e, o = N(H, n);
                    return (0, T.jsx)(p.WV.h2, {
                        id: o.titleId,
                        ...r,
                        ref: t
                    })
                });
            j.displayName = H;
            var W = "DialogDescription",
                B = r.forwardRef((e, t) => {
                    let {
                        __scopeDialog: n,
                        ...r
                    } = e, o = N(W, n);
                    return (0, T.jsx)(p.WV.p, {
                        id: o.descriptionId,
                        ...r,
                        ref: t
                    })
                });
            B.displayName = W;
            var G = "DialogClose",
                Y = r.forwardRef((e, t) => {
                    let {
                        __scopeDialog: n,
                        ...r
                    } = e, i = N(G, n);
                    return (0, T.jsx)(p.WV.button, {
                        type: "button",
                        ...r,
                        ref: t,
                        onClick: (0, o.M)(e.onClick, () => i.onOpenChange(!1))
                    })
                });

            function V(e) {
                return e ? "open" : "closed"
            }
            Y.displayName = G;
            var $ = "DialogTitleWarning",
                [q, X] = (0, a.k)($, {
                    contentName: M,
                    titleName: H,
                    docsSlug: "dialog"
                }),
                Z = ({
                    titleId: e
                }) => {
                    let t = X($),
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
                    let n = X("DialogDescriptionWarning"),
                        o = `Warning: Missing \`Description\` or \`aria-describedby={undefined}\` for {${n.contentName}}.`;
                    return r.useEffect(() => {
                        let n = e.current ? .getAttribute("aria-describedby");
                        t && n && !document.getElementById(t) && console.warn(o)
                    }, [o, e, t]), null
                },
                J = v,
                Q = R,
                ee = C,
                et = I,
                en = U,
                er = j,
                eo = B,
                ei = Y
        },
        22424: function(e, t, n) {
            n.d(t, {
                Z: function() {
                    return en
                }
            });
            let {
                entries: r,
                setPrototypeOf: o,
                isFrozen: i,
                getPrototypeOf: a,
                getOwnPropertyDescriptor: l
            } = Object, {
                freeze: c,
                seal: s,
                create: u
            } = Object, {
                apply: f,
                construct: d
            } = "undefined" != typeof Reflect && Reflect;
            c || (c = function(e) {
                return e
            }), s || (s = function(e) {
                return e
            }), f || (f = function(e, t, n) {
                return e.apply(t, n)
            }), d || (d = function(e, t) {
                return new e(...t)
            });
            let p = w(Array.prototype.forEach),
                m = w(Array.prototype.lastIndexOf),
                g = w(Array.prototype.pop),
                h = w(Array.prototype.push),
                y = w(Array.prototype.splice),
                T = w(String.prototype.toLowerCase),
                E = w(String.prototype.toString),
                b = w(String.prototype.match),
                _ = w(String.prototype.replace),
                A = w(String.prototype.indexOf),
                N = w(String.prototype.trim),
                v = w(Object.prototype.hasOwnProperty),
                S = w(RegExp.prototype.test),
                R = (K = TypeError, function() {
                    for (var e = arguments.length, t = Array(e), n = 0; n < e; n++) t[n] = arguments[n];
                    return d(K, t)
                });

            function w(e) {
                return function(t) {
                    t instanceof RegExp && (t.lastIndex = 0);
                    for (var n = arguments.length, r = Array(n > 1 ? n - 1 : 0), o = 1; o < n; o++) r[o - 1] = arguments[o];
                    return f(e, t, r)
                }
            }

            function x(e, t) {
                let n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : T;
                o && o(e, null);
                let r = t.length;
                for (; r--;) {
                    let o = t[r];
                    if ("string" == typeof o) {
                        let e = n(o);
                        e !== o && (i(t) || (t[r] = e), o = e)
                    }
                    e[o] = !0
                }
                return e
            }

            function D(e) {
                let t = u(null);
                for (let [n, o] of r(e)) v(e, n) && (Array.isArray(o) ? t[n] = function(e) {
                    for (let t = 0; t < e.length; t++) v(e, t) || (e[t] = null);
                    return e
                }(o) : o && "object" == typeof o && o.constructor === Object ? t[n] = D(o) : t[n] = o);
                return t
            }

            function C(e, t) {
                for (; null !== e;) {
                    let n = l(e, t);
                    if (n) {
                        if (n.get) return w(n.get);
                        if ("function" == typeof n.value) return w(n.value)
                    }
                    e = a(e)
                }
                return function() {
                    return null
                }
            }
            let O = c(["a", "abbr", "acronym", "address", "area", "article", "aside", "audio", "b", "bdi", "bdo", "big", "blink", "blockquote", "body", "br", "button", "canvas", "caption", "center", "cite", "code", "col", "colgroup", "content", "data", "datalist", "dd", "decorator", "del", "details", "dfn", "dialog", "dir", "div", "dl", "dt", "element", "em", "fieldset", "figcaption", "figure", "font", "footer", "form", "h1", "h2", "h3", "h4", "h5", "h6", "head", "header", "hgroup", "hr", "html", "i", "img", "input", "ins", "kbd", "label", "legend", "li", "main", "map", "mark", "marquee", "menu", "menuitem", "meter", "nav", "nobr", "ol", "optgroup", "option", "output", "p", "picture", "pre", "progress", "q", "rp", "rt", "ruby", "s", "samp", "section", "select", "shadow", "small", "source", "spacer", "span", "strike", "strong", "style", "sub", "summary", "sup", "table", "tbody", "td", "template", "textarea", "tfoot", "th", "thead", "time", "tr", "track", "tt", "u", "ul", "var", "video", "wbr"]),
                I = c(["svg", "a", "altglyph", "altglyphdef", "altglyphitem", "animatecolor", "animatemotion", "animatetransform", "circle", "clippath", "defs", "desc", "ellipse", "filter", "font", "g", "glyph", "glyphref", "hkern", "image", "line", "lineargradient", "marker", "mask", "metadata", "mpath", "path", "pattern", "polygon", "polyline", "radialgradient", "rect", "stop", "style", "switch", "symbol", "text", "textpath", "title", "tref", "tspan", "view", "vkern"]),
                k = c(["feBlend", "feColorMatrix", "feComponentTransfer", "feComposite", "feConvolveMatrix", "feDiffuseLighting", "feDisplacementMap", "feDistantLight", "feDropShadow", "feFlood", "feFuncA", "feFuncB", "feFuncG", "feFuncR", "feGaussianBlur", "feImage", "feMerge", "feMergeNode", "feMorphology", "feOffset", "fePointLight", "feSpecularLighting", "feSpotLight", "feTile", "feTurbulence"]),
                L = c(["animate", "color-profile", "cursor", "discard", "font-face", "font-face-format", "font-face-name", "font-face-src", "font-face-uri", "foreignobject", "hatch", "hatchpath", "mesh", "meshgradient", "meshpatch", "meshrow", "missing-glyph", "script", "set", "solidcolor", "unknown", "use"]),
                M = c(["math", "menclose", "merror", "mfenced", "mfrac", "mglyph", "mi", "mlabeledtr", "mmultiscripts", "mn", "mo", "mover", "mpadded", "mphantom", "mroot", "mrow", "ms", "mspace", "msqrt", "mstyle", "msub", "msup", "msubsup", "mtable", "mtd", "mtext", "mtr", "munder", "munderover", "mprescripts"]),
                U = c(["maction", "maligngroup", "malignmark", "mlongdiv", "mscarries", "mscarry", "msgroup", "mstack", "msline", "msrow", "semantics", "annotation", "annotation-xml", "mprescripts", "none"]),
                P = c(["#text"]),
                F = c(["accept", "action", "align", "alt", "autocapitalize", "autocomplete", "autopictureinpicture", "autoplay", "background", "bgcolor", "border", "capture", "cellpadding", "cellspacing", "checked", "cite", "class", "clear", "color", "cols", "colspan", "controls", "controlslist", "coords", "crossorigin", "datetime", "decoding", "default", "dir", "disabled", "disablepictureinpicture", "disableremoteplayback", "download", "draggable", "enctype", "enterkeyhint", "face", "for", "headers", "height", "hidden", "high", "href", "hreflang", "id", "inputmode", "integrity", "ismap", "kind", "label", "lang", "list", "loading", "loop", "low", "max", "maxlength", "media", "method", "min", "minlength", "multiple", "muted", "name", "nonce", "noshade", "novalidate", "nowrap", "open", "optimum", "pattern", "placeholder", "playsinline", "popover", "popovertarget", "popovertargetaction", "poster", "preload", "pubdate", "radiogroup", "readonly", "rel", "required", "rev", "reversed", "role", "rows", "rowspan", "spellcheck", "scope", "selected", "shape", "size", "sizes", "span", "srclang", "start", "src", "srcset", "step", "style", "summary", "tabindex", "title", "translate", "type", "usemap", "valign", "value", "width", "wrap", "xmlns", "slot"]),
                z = c(["accent-height", "accumulate", "additive", "alignment-baseline", "amplitude", "ascent", "attributename", "attributetype", "azimuth", "basefrequency", "baseline-shift", "begin", "bias", "by", "class", "clip", "clippathunits", "clip-path", "clip-rule", "color", "color-interpolation", "color-interpolation-filters", "color-profile", "color-rendering", "cx", "cy", "d", "dx", "dy", "diffuseconstant", "direction", "display", "divisor", "dur", "edgemode", "elevation", "end", "exponent", "fill", "fill-opacity", "fill-rule", "filter", "filterunits", "flood-color", "flood-opacity", "font-family", "font-size", "font-size-adjust", "font-stretch", "font-style", "font-variant", "font-weight", "fx", "fy", "g1", "g2", "glyph-name", "glyphref", "gradientunits", "gradienttransform", "height", "href", "id", "image-rendering", "in", "in2", "intercept", "k", "k1", "k2", "k3", "k4", "kerning", "keypoints", "keysplines", "keytimes", "lang", "lengthadjust", "letter-spacing", "kernelmatrix", "kernelunitlength", "lighting-color", "local", "marker-end", "marker-mid", "marker-start", "markerheight", "markerunits", "markerwidth", "maskcontentunits", "maskunits", "max", "mask", "media", "method", "mode", "min", "name", "numoctaves", "offset", "operator", "opacity", "order", "orient", "orientation", "origin", "overflow", "paint-order", "path", "pathlength", "patterncontentunits", "patterntransform", "patternunits", "points", "preservealpha", "preserveaspectratio", "primitiveunits", "r", "rx", "ry", "radius", "refx", "refy", "repeatcount", "repeatdur", "restart", "result", "rotate", "scale", "seed", "shape-rendering", "slope", "specularconstant", "specularexponent", "spreadmethod", "startoffset", "stddeviation", "stitchtiles", "stop-color", "stop-opacity", "stroke-dasharray", "stroke-dashoffset", "stroke-linecap", "stroke-linejoin", "stroke-miterlimit", "stroke-opacity", "stroke", "stroke-width", "style", "surfacescale", "systemlanguage", "tabindex", "tablevalues", "targetx", "targety", "transform", "transform-origin", "text-anchor", "text-decoration", "text-rendering", "textlength", "type", "u1", "u2", "unicode", "values", "viewbox", "visibility", "version", "vert-adv-y", "vert-origin-x", "vert-origin-y", "width", "word-spacing", "wrap", "writing-mode", "xchannelselector", "ychannelselector", "x", "x1", "x2", "xmlns", "y", "y1", "y2", "z", "zoomandpan"]),
                H = c(["accent", "accentunder", "align", "bevelled", "close", "columnsalign", "columnlines", "columnspan", "denomalign", "depth", "dir", "display", "displaystyle", "encoding", "fence", "frame", "height", "href", "id", "largeop", "length", "linethickness", "lspace", "lquote", "mathbackground", "mathcolor", "mathsize", "mathvariant", "maxsize", "minsize", "movablelimits", "notation", "numalign", "open", "rowalign", "rowlines", "rowspacing", "rowspan", "rspace", "rquote", "scriptlevel", "scriptminsize", "scriptsizemultiplier", "selection", "separator", "separators", "stretchy", "subscriptshift", "supscriptshift", "symmetric", "voffset", "width", "xmlns"]),
                j = c(["xlink:href", "xml:id", "xlink:title", "xml:space", "xmlns:xlink"]),
                W = s(/\{\{[\w\W]*|[\w\W]*\}\}/gm),
                B = s(/<%[\w\W]*|[\w\W]*%>/gm),
                G = s(/\$\{[\w\W]*/gm),
                Y = s(/^data-[\-\w.\u00B7-\uFFFF]+$/),
                V = s(/^aria-[\-\w]+$/),
                $ = s(/^(?:(?:(?:f|ht)tps?|mailto|tel|callto|sms|cid|xmpp|matrix):|[^a-z]|[a-z+.\-]+(?:[^a-z+.\-:]|$))/i),
                q = s(/^(?:\w+script|data):/i),
                X = s(/[\u0000-\u0020\u00A0\u1680\u180E\u2000-\u2029\u205F\u3000]/g),
                Z = s(/^html$/i);
            var K, J = Object.freeze({
                __proto__: null,
                ARIA_ATTR: V,
                ATTR_WHITESPACE: X,
                CUSTOM_ELEMENT: s(/^[a-z][.\w]*(-[.\w]+)+$/i),
                DATA_ATTR: Y,
                DOCTYPE_NAME: Z,
                ERB_EXPR: B,
                IS_ALLOWED_URI: $,
                IS_SCRIPT_OR_DATA: q,
                MUSTACHE_EXPR: W,
                TMPLIT_EXPR: G
            });
            let Q = {
                    element: 1,
                    text: 3,
                    progressingInstruction: 7,
                    comment: 8,
                    document: 9
                },
                ee = function(e, t) {
                    if ("object" != typeof e || "function" != typeof e.createPolicy) return null;
                    let n = null,
                        r = "data-tt-policy-suffix";
                    t && t.hasAttribute(r) && (n = t.getAttribute(r));
                    let o = "dompurify" + (n ? "#" + n : "");
                    try {
                        return e.createPolicy(o, {
                            createHTML: e => e,
                            createScriptURL: e => e
                        })
                    } catch (e) {
                        return console.warn("TrustedTypes policy " + o + " could not be created."), null
                    }
                },
                et = function() {
                    return {
                        afterSanitizeAttributes: [],
                        afterSanitizeElements: [],
                        afterSanitizeShadowDOM: [],
                        beforeSanitizeAttributes: [],
                        beforeSanitizeElements: [],
                        beforeSanitizeShadowDOM: [],
                        uponSanitizeAttribute: [],
                        uponSanitizeElement: [],
                        uponSanitizeShadowNode: []
                    }
                };
            var en = function e() {
                let t, n = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "undefined" == typeof window ? null : window,
                    o = t => e(t);
                if (o.version = "3.2.6", o.removed = [], !n || !n.document || n.document.nodeType !== Q.document || !n.Element) return o.isSupported = !1, o;
                let {
                    document: i
                } = n, a = i, l = a.currentScript, {
                    DocumentFragment: s,
                    HTMLTemplateElement: f,
                    Node: d,
                    Element: w,
                    NodeFilter: W,
                    NamedNodeMap: B = n.NamedNodeMap || n.MozNamedAttrMap,
                    HTMLFormElement: G,
                    DOMParser: Y,
                    trustedTypes: V
                } = n, q = w.prototype, X = C(q, "cloneNode"), K = C(q, "remove"), en = C(q, "nextSibling"), er = C(q, "childNodes"), eo = C(q, "parentNode");
                if ("function" == typeof f) {
                    let e = i.createElement("template");
                    e.content && e.content.ownerDocument && (i = e.content.ownerDocument)
                }
                let ei = "",
                    {
                        implementation: ea,
                        createNodeIterator: el,
                        createDocumentFragment: ec,
                        getElementsByTagName: es
                    } = i,
                    {
                        importNode: eu
                    } = a,
                    ef = et();
                o.isSupported = "function" == typeof r && "function" == typeof eo && ea && void 0 !== ea.createHTMLDocument;
                let {
                    MUSTACHE_EXPR: ed,
                    ERB_EXPR: ep,
                    TMPLIT_EXPR: em,
                    DATA_ATTR: eg,
                    ARIA_ATTR: eh,
                    IS_SCRIPT_OR_DATA: ey,
                    ATTR_WHITESPACE: eT,
                    CUSTOM_ELEMENT: eE
                } = J, {
                    IS_ALLOWED_URI: eb
                } = J, e_ = null, eA = x({}, [...O, ...I, ...k, ...M, ...P]), eN = null, ev = x({}, [...F, ...z, ...H, ...j]), eS = Object.seal(u(null, {
                    tagNameCheck: {
                        writable: !0,
                        configurable: !1,
                        enumerable: !0,
                        value: null
                    },
                    attributeNameCheck: {
                        writable: !0,
                        configurable: !1,
                        enumerable: !0,
                        value: null
                    },
                    allowCustomizedBuiltInElements: {
                        writable: !0,
                        configurable: !1,
                        enumerable: !0,
                        value: !1
                    }
                })), eR = null, ew = null, ex = !0, eD = !0, eC = !1, eO = !0, eI = !1, ek = !0, eL = !1, eM = !1, eU = !1, eP = !1, eF = !1, ez = !1, eH = !0, ej = !1, eW = !0, eB = !1, eG = {}, eY = null, eV = x({}, ["annotation-xml", "audio", "colgroup", "desc", "foreignobject", "head", "iframe", "math", "mi", "mn", "mo", "ms", "mtext", "noembed", "noframes", "noscript", "plaintext", "script", "style", "svg", "template", "thead", "title", "video", "xmp"]), e$ = null, eq = x({}, ["audio", "video", "img", "source", "image", "track"]), eX = null, eZ = x({}, ["alt", "class", "for", "id", "label", "name", "pattern", "placeholder", "role", "summary", "title", "value", "style", "xmlns"]), eK = "http://www.w3.org/1998/Math/MathML", eJ = "http://www.w3.org/2000/svg", eQ = "http://www.w3.org/1999/xhtml", e0 = eQ, e1 = !1, e2 = null, e3 = x({}, [eK, eJ, eQ], E), e9 = x({}, ["mi", "mo", "mn", "ms", "mtext"]), e4 = x({}, ["annotation-xml"]), e5 = x({}, ["title", "style", "font", "a", "script"]), e6 = null, e7 = ["application/xhtml+xml", "text/html"], e8 = null, te = null, tt = i.createElement("form"), tn = function(e) {
                    return e instanceof RegExp || e instanceof Function
                }, tr = function() {
                    let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
                    if (!te || te !== e) {
                        if (e && "object" == typeof e || (e = {}), e = D(e), e8 = "application/xhtml+xml" === (e6 = -1 === e7.indexOf(e.PARSER_MEDIA_TYPE) ? "text/html" : e.PARSER_MEDIA_TYPE) ? E : T, e_ = v(e, "ALLOWED_TAGS") ? x({}, e.ALLOWED_TAGS, e8) : eA, eN = v(e, "ALLOWED_ATTR") ? x({}, e.ALLOWED_ATTR, e8) : ev, e2 = v(e, "ALLOWED_NAMESPACES") ? x({}, e.ALLOWED_NAMESPACES, E) : e3, eX = v(e, "ADD_URI_SAFE_ATTR") ? x(D(eZ), e.ADD_URI_SAFE_ATTR, e8) : eZ, e$ = v(e, "ADD_DATA_URI_TAGS") ? x(D(eq), e.ADD_DATA_URI_TAGS, e8) : eq, eY = v(e, "FORBID_CONTENTS") ? x({}, e.FORBID_CONTENTS, e8) : eV, eR = v(e, "FORBID_TAGS") ? x({}, e.FORBID_TAGS, e8) : D({}), ew = v(e, "FORBID_ATTR") ? x({}, e.FORBID_ATTR, e8) : D({}), eG = !!v(e, "USE_PROFILES") && e.USE_PROFILES, ex = !1 !== e.ALLOW_ARIA_ATTR, eD = !1 !== e.ALLOW_DATA_ATTR, eC = e.ALLOW_UNKNOWN_PROTOCOLS || !1, eO = !1 !== e.ALLOW_SELF_CLOSE_IN_ATTR, eI = e.SAFE_FOR_TEMPLATES || !1, ek = !1 !== e.SAFE_FOR_XML, eL = e.WHOLE_DOCUMENT || !1, eP = e.RETURN_DOM || !1, eF = e.RETURN_DOM_FRAGMENT || !1, ez = e.RETURN_TRUSTED_TYPE || !1, eU = e.FORCE_BODY || !1, eH = !1 !== e.SANITIZE_DOM, ej = e.SANITIZE_NAMED_PROPS || !1, eW = !1 !== e.KEEP_CONTENT, eB = e.IN_PLACE || !1, eb = e.ALLOWED_URI_REGEXP || $, e0 = e.NAMESPACE || eQ, e9 = e.MATHML_TEXT_INTEGRATION_POINTS || e9, e4 = e.HTML_INTEGRATION_POINTS || e4, eS = e.CUSTOM_ELEMENT_HANDLING || {}, e.CUSTOM_ELEMENT_HANDLING && tn(e.CUSTOM_ELEMENT_HANDLING.tagNameCheck) && (eS.tagNameCheck = e.CUSTOM_ELEMENT_HANDLING.tagNameCheck), e.CUSTOM_ELEMENT_HANDLING && tn(e.CUSTOM_ELEMENT_HANDLING.attributeNameCheck) && (eS.attributeNameCheck = e.CUSTOM_ELEMENT_HANDLING.attributeNameCheck), e.CUSTOM_ELEMENT_HANDLING && "boolean" == typeof e.CUSTOM_ELEMENT_HANDLING.allowCustomizedBuiltInElements && (eS.allowCustomizedBuiltInElements = e.CUSTOM_ELEMENT_HANDLING.allowCustomizedBuiltInElements), eI && (eD = !1), eF && (eP = !0), eG && (e_ = x({}, P), eN = [], !0 === eG.html && (x(e_, O), x(eN, F)), !0 === eG.svg && (x(e_, I), x(eN, z), x(eN, j)), !0 === eG.svgFilters && (x(e_, k), x(eN, z), x(eN, j)), !0 === eG.mathMl && (x(e_, M), x(eN, H), x(eN, j))), e.ADD_TAGS && (e_ === eA && (e_ = D(e_)), x(e_, e.ADD_TAGS, e8)), e.ADD_ATTR && (eN === ev && (eN = D(eN)), x(eN, e.ADD_ATTR, e8)), e.ADD_URI_SAFE_ATTR && x(eX, e.ADD_URI_SAFE_ATTR, e8), e.FORBID_CONTENTS && (eY === eV && (eY = D(eY)), x(eY, e.FORBID_CONTENTS, e8)), eW && (e_["#text"] = !0), eL && x(e_, ["html", "head", "body"]), e_.table && (x(e_, ["tbody"]), delete eR.tbody), e.TRUSTED_TYPES_POLICY) {
                            if ("function" != typeof e.TRUSTED_TYPES_POLICY.createHTML) throw R('TRUSTED_TYPES_POLICY configuration option must provide a "createHTML" hook.');
                            if ("function" != typeof e.TRUSTED_TYPES_POLICY.createScriptURL) throw R('TRUSTED_TYPES_POLICY configuration option must provide a "createScriptURL" hook.');
                            ei = (t = e.TRUSTED_TYPES_POLICY).createHTML("")
                        } else void 0 === t && (t = ee(V, l)), null !== t && "string" == typeof ei && (ei = t.createHTML(""));
                        c && c(e), te = e
                    }
                }, to = x({}, [...I, ...k, ...L]), ti = x({}, [...M, ...U]), ta = function(e) {
                    let t = eo(e);
                    t && t.tagName || (t = {
                        namespaceURI: e0,
                        tagName: "template"
                    });
                    let n = T(e.tagName),
                        r = T(t.tagName);
                    return !!e2[e.namespaceURI] && (e.namespaceURI === eJ ? t.namespaceURI === eQ ? "svg" === n : t.namespaceURI === eK ? "svg" === n && ("annotation-xml" === r || e9[r]) : !!to[n] : e.namespaceURI === eK ? t.namespaceURI === eQ ? "math" === n : t.namespaceURI === eJ ? "math" === n && e4[r] : !!ti[n] : e.namespaceURI === eQ ? (t.namespaceURI !== eJ || !!e4[r]) && (t.namespaceURI !== eK || !!e9[r]) && !ti[n] && (e5[n] || !to[n]) : "application/xhtml+xml" === e6 && !!e2[e.namespaceURI])
                }, tl = function(e) {
                    h(o.removed, {
                        element: e
                    });
                    try {
                        eo(e).removeChild(e)
                    } catch (t) {
                        K(e)
                    }
                }, tc = function(e, t) {
                    try {
                        h(o.removed, {
                            attribute: t.getAttributeNode(e),
                            from: t
                        })
                    } catch (e) {
                        h(o.removed, {
                            attribute: null,
                            from: t
                        })
                    }
                    if (t.removeAttribute(e), "is" === e) {
                        if (eP || eF) try {
                            tl(t)
                        } catch (e) {} else try {
                            t.setAttribute(e, "")
                        } catch (e) {}
                    }
                }, ts = function(e) {
                    let n = null,
                        r = null;
                    if (eU) e = "<remove></remove>" + e;
                    else {
                        let t = b(e, /^[\r\n\t ]+/);
                        r = t && t[0]
                    }
                    "application/xhtml+xml" === e6 && e0 === eQ && (e = '<html xmlns="http://www.w3.org/1999/xhtml"><head></head><body>' + e + "</body></html>");
                    let o = t ? t.createHTML(e) : e;
                    if (e0 === eQ) try {
                        n = new Y().parseFromString(o, e6)
                    } catch (e) {}
                    if (!n || !n.documentElement) {
                        n = ea.createDocument(e0, "template", null);
                        try {
                            n.documentElement.innerHTML = e1 ? ei : o
                        } catch (e) {}
                    }
                    let a = n.body || n.documentElement;
                    return (e && r && a.insertBefore(i.createTextNode(r), a.childNodes[0] || null), e0 === eQ) ? es.call(n, eL ? "html" : "body")[0] : eL ? n.documentElement : a
                }, tu = function(e) {
                    return el.call(e.ownerDocument || e, e, W.SHOW_ELEMENT | W.SHOW_COMMENT | W.SHOW_TEXT | W.SHOW_PROCESSING_INSTRUCTION | W.SHOW_CDATA_SECTION, null)
                }, tf = function(e) {
                    return e instanceof G && ("string" != typeof e.nodeName || "string" != typeof e.textContent || "function" != typeof e.removeChild || !(e.attributes instanceof B) || "function" != typeof e.removeAttribute || "function" != typeof e.setAttribute || "string" != typeof e.namespaceURI || "function" != typeof e.insertBefore || "function" != typeof e.hasChildNodes)
                }, td = function(e) {
                    return "function" == typeof d && e instanceof d
                };

                function tp(e, t, n) {
                    p(e, e => {
                        e.call(o, t, n, te)
                    })
                }
                let tm = function(e) {
                        let t = null;
                        if (tp(ef.beforeSanitizeElements, e, null), tf(e)) return tl(e), !0;
                        let n = e8(e.nodeName);
                        if (tp(ef.uponSanitizeElement, e, {
                                tagName: n,
                                allowedTags: e_
                            }), ek && e.hasChildNodes() && !td(e.firstElementChild) && S(/<[/\w!]/g, e.innerHTML) && S(/<[/\w!]/g, e.textContent) || e.nodeType === Q.progressingInstruction || ek && e.nodeType === Q.comment && S(/<[/\w]/g, e.data)) return tl(e), !0;
                        if (!e_[n] || eR[n]) {
                            if (!eR[n] && th(n) && (eS.tagNameCheck instanceof RegExp && S(eS.tagNameCheck, n) || eS.tagNameCheck instanceof Function && eS.tagNameCheck(n))) return !1;
                            if (eW && !eY[n]) {
                                let t = eo(e) || e.parentNode,
                                    n = er(e) || e.childNodes;
                                if (n && t) {
                                    let r = n.length;
                                    for (let o = r - 1; o >= 0; --o) {
                                        let r = X(n[o], !0);
                                        r.__removalCount = (e.__removalCount || 0) + 1, t.insertBefore(r, en(e))
                                    }
                                }
                            }
                            return tl(e), !0
                        }
                        return e instanceof w && !ta(e) || ("noscript" === n || "noembed" === n || "noframes" === n) && S(/<\/no(script|embed|frames)/i, e.innerHTML) ? (tl(e), !0) : (eI && e.nodeType === Q.text && (t = e.textContent, p([ed, ep, em], e => {
                            t = _(t, e, " ")
                        }), e.textContent !== t && (h(o.removed, {
                            element: e.cloneNode()
                        }), e.textContent = t)), tp(ef.afterSanitizeElements, e, null), !1)
                    },
                    tg = function(e, t, n) {
                        if (eH && ("id" === t || "name" === t) && (n in i || n in tt)) return !1;
                        if (eD && !ew[t] && S(eg, t));
                        else if (ex && S(eh, t));
                        else if (!eN[t] || ew[t]) {
                            if (!(th(e) && (eS.tagNameCheck instanceof RegExp && S(eS.tagNameCheck, e) || eS.tagNameCheck instanceof Function && eS.tagNameCheck(e)) && (eS.attributeNameCheck instanceof RegExp && S(eS.attributeNameCheck, t) || eS.attributeNameCheck instanceof Function && eS.attributeNameCheck(t)) || "is" === t && eS.allowCustomizedBuiltInElements && (eS.tagNameCheck instanceof RegExp && S(eS.tagNameCheck, n) || eS.tagNameCheck instanceof Function && eS.tagNameCheck(n)))) return !1
                        } else if (eX[t]);
                        else if (S(eb, _(n, eT, "")));
                        else if (("src" === t || "xlink:href" === t || "href" === t) && "script" !== e && 0 === A(n, "data:") && e$[e]);
                        else if (eC && !S(ey, _(n, eT, "")));
                        else if (n) return !1;
                        return !0
                    },
                    th = function(e) {
                        return "annotation-xml" !== e && b(e, eE)
                    },
                    ty = function(e) {
                        tp(ef.beforeSanitizeAttributes, e, null);
                        let {
                            attributes: n
                        } = e;
                        if (!n || tf(e)) return;
                        let r = {
                                attrName: "",
                                attrValue: "",
                                keepAttr: !0,
                                allowedAttributes: eN,
                                forceKeepAttr: void 0
                            },
                            i = n.length;
                        for (; i--;) {
                            let {
                                name: a,
                                namespaceURI: l,
                                value: c
                            } = n[i], s = e8(a), u = "value" === a ? c : N(c);
                            if (r.attrName = s, r.attrValue = u, r.keepAttr = !0, r.forceKeepAttr = void 0, tp(ef.uponSanitizeAttribute, e, r), u = r.attrValue, ej && ("id" === s || "name" === s) && (tc(a, e), u = "user-content-" + u), ek && S(/((--!?|])>)|<\/(style|title)/i, u)) {
                                tc(a, e);
                                continue
                            }
                            if (r.forceKeepAttr) continue;
                            if (!r.keepAttr || !eO && S(/\/>/i, u)) {
                                tc(a, e);
                                continue
                            }
                            eI && p([ed, ep, em], e => {
                                u = _(u, e, " ")
                            });
                            let f = e8(e.nodeName);
                            if (!tg(f, s, u)) {
                                tc(a, e);
                                continue
                            }
                            if (t && "object" == typeof V && "function" == typeof V.getAttributeType) {
                                if (l);
                                else switch (V.getAttributeType(f, s)) {
                                    case "TrustedHTML":
                                        u = t.createHTML(u);
                                        break;
                                    case "TrustedScriptURL":
                                        u = t.createScriptURL(u)
                                }
                            }
                            if (u !== c) try {
                                l ? e.setAttributeNS(l, a, u) : e.setAttribute(a, u), tf(e) ? tl(e) : g(o.removed)
                            } catch (t) {
                                tc(a, e)
                            }
                        }
                        tp(ef.afterSanitizeAttributes, e, null)
                    },
                    tT = function e(t) {
                        let n = null,
                            r = tu(t);
                        for (tp(ef.beforeSanitizeShadowDOM, t, null); n = r.nextNode();) tp(ef.uponSanitizeShadowNode, n, null), tm(n), ty(n), n.content instanceof s && e(n.content);
                        tp(ef.afterSanitizeShadowDOM, t, null)
                    };
                return o.sanitize = function(e) {
                    let n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
                        r = null,
                        i = null,
                        l = null,
                        c = null;
                    if ((e1 = !e) && (e = "<!-->"), "string" != typeof e && !td(e)) {
                        if ("function" == typeof e.toString) {
                            if ("string" != typeof(e = e.toString())) throw R("dirty is not a string, aborting")
                        } else throw R("toString is not a function")
                    }
                    if (!o.isSupported) return e;
                    if (eM || tr(n), o.removed = [], "string" == typeof e && (eB = !1), eB) {
                        if (e.nodeName) {
                            let t = e8(e.nodeName);
                            if (!e_[t] || eR[t]) throw R("root node is forbidden and cannot be sanitized in-place")
                        }
                    } else if (e instanceof d)(i = (r = ts("<!---->")).ownerDocument.importNode(e, !0)).nodeType === Q.element && "BODY" === i.nodeName ? r = i : "HTML" === i.nodeName ? r = i : r.appendChild(i);
                    else {
                        if (!eP && !eI && !eL && -1 === e.indexOf("<")) return t && ez ? t.createHTML(e) : e;
                        if (!(r = ts(e))) return eP ? null : ez ? ei : ""
                    }
                    r && eU && tl(r.firstChild);
                    let u = tu(eB ? e : r);
                    for (; l = u.nextNode();) tm(l), ty(l), l.content instanceof s && tT(l.content);
                    if (eB) return e;
                    if (eP) {
                        if (eF)
                            for (c = ec.call(r.ownerDocument); r.firstChild;) c.appendChild(r.firstChild);
                        else c = r;
                        return (eN.shadowroot || eN.shadowrootmode) && (c = eu.call(a, c, !0)), c
                    }
                    let f = eL ? r.outerHTML : r.innerHTML;
                    return eL && e_["!doctype"] && r.ownerDocument && r.ownerDocument.doctype && r.ownerDocument.doctype.name && S(Z, r.ownerDocument.doctype.name) && (f = "<!DOCTYPE " + r.ownerDocument.doctype.name + ">\n" + f), eI && p([ed, ep, em], e => {
                        f = _(f, e, " ")
                    }), t && ez ? t.createHTML(f) : f
                }, o.setConfig = function() {
                    let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
                    tr(e), eM = !0
                }, o.clearConfig = function() {
                    te = null, eM = !1
                }, o.isValidAttribute = function(e, t, n) {
                    return te || tr({}), tg(e8(e), e8(t), n)
                }, o.addHook = function(e, t) {
                    "function" == typeof t && h(ef[e], t)
                }, o.removeHook = function(e, t) {
                    if (void 0 !== t) {
                        let n = m(ef[e], t);
                        return -1 === n ? void 0 : y(ef[e], n, 1)[0]
                    }
                    return g(ef[e])
                }, o.removeHooks = function(e) {
                    ef[e] = []
                }, o.removeAllHooks = function() {
                    ef = et()
                }, o
            }()
        }
    }
]);