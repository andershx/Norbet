(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [9896], {
        77877: function(t, n, o) {
            "use strict";
            o.d(n, {
                Z: function() {
                    return r
                }
            });
            var e = o(20567),
                c = o(85893),
                u = o(25675),
                s = o.n(u);

            function r(t) {
                return (0, c.jsx)(s(), (0, e._)({
                    src: "/Images/headset-icon.svg",
                    alt: "Headset Icon",
                    width: 13,
                    height: 13
                }, t))
            }
        },
        79896: function(t, n, o) {
            "use strict";
            o.r(n), o.d(n, {
                default: function() {
                    return a
                }
            });
            var e = o(85893),
                c = o(77877),
                u = o(51463),
                s = o(26544),
                r = o.n(s);

            function a(t) {
                var n = t.chatOpen;
                return (0, e.jsx)("div", {
                    className: "".concat(r()["intercom-custom-button-container"], " ").concat(n && r()["chat-open"]),
                    onClick: function() {
                        (0, u.show)()
                    },
                    children: (0, e.jsx)(c.Z, {
                        width: 20,
                        height: 20,
                        className: "saturate-0"
                    })
                })
            }
        },
        26544: function(t) {
            t.exports = {
                "golden-text": "IntercomCustomButton_golden-text__AL5rE",
                "intercom-custom-button-container": "IntercomCustomButton_intercom-custom-button-container__NdKFj",
                "chat-open": "IntercomCustomButton_chat-open__vnsVh"
            }
        }
    }
]);