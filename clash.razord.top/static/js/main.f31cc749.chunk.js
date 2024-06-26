(this["webpackJsonpclash-dashboard"] = this["webpackJsonpclash-dashboard"] || []).push([[0], {
    148: function (e, t, n) {
        "use strict";
        n.r(t);
        var a = n(0), r = n.n(a), c = n(17), o = n(25), s = n(8), i = n(9), l = n(4), u = n.n(l), p = n(10), d = n(18);

        function m() {
            return "ClashX Runtime" === navigator.userAgent
        }

        var f = null, v = function () {
            function e(t) {
                var n = this;
                Object(p.a)(this, e), this.instance = null, window.WebViewJavascriptBridge && (this.instance = window.WebViewJavascriptBridge), this.initBridge((function (e) {
                    n.instance = e, t()
                }))
            }

            return Object(d.a)(e, [{
                key: "initBridge", value: function (e) {
                    if (!m()) return null === e || void 0 === e ? void 0 : e(null);
                    if (window.WebViewJavascriptBridge) return e(window.WebViewJavascriptBridge);
                    if (window.WVJBCallbacks) return window.WVJBCallbacks.push(e);
                    window.WVJBCallbacks = [e];
                    var t = document.createElement("iframe");
                    t.style.display = "none", t.src = "https://__bridge_loaded__", document.documentElement.appendChild(t), setTimeout((function () {
                        return document.documentElement.removeChild(t)
                    }), 0)
                }
            }, {
                key: "callHandler", value: function (e, t) {
                    var n = this;
                    return new Promise((function (a) {
                        var r;
                        null === (r = n.instance) || void 0 === r || r.callHandler(e, t, a)
                    }))
                }
            }, {
                key: "ping", value: function () {
                    return this.callHandler("ping")
                }
            }, {
                key: "readConfigString", value: function () {
                    return this.callHandler("readConfigString")
                }
            }, {
                key: "getPasteboard", value: function () {
                    return this.callHandler("getPasteboard")
                }
            }, {
                key: "getAPIInfo", value: function () {
                    return this.callHandler("apiInfo")
                }
            }, {
                key: "setPasteboard", value: function (e) {
                    return this.callHandler("setPasteboard", e)
                }
            }, {
                key: "writeConfigWithString", value: function (e) {
                    return this.callHandler("writeConfigWithString", e)
                }
            }, {
                key: "setSystemProxy", value: function (e) {
                    return this.callHandler("setSystemProxy", e)
                }
            }, {
                key: "getStartAtLogin", value: function () {
                    return this.callHandler("getStartAtLogin")
                }
            }, {
                key: "getProxyDelay", value: function (e) {
                    return this.callHandler("speedTest", e)
                }
            }, {
                key: "setStartAtLogin", value: function (e) {
                    return this.callHandler("setStartAtLogin", e)
                }
            }, {
                key: "isSystemProxySet", value: function () {
                    return this.callHandler("isSystemProxySet")
                }
            }]), e
        }();
        var h, b = n(21), y = n(35), g = n.n(y);
        !function (e) {
            e.SPEED_NOTIFY = "speed-notify"
        }(h || (h = {}));
        var x = new (function () {
            function e() {
                Object(p.a)(this, e), this.EE = new g.a
            }

            return Object(d.a)(e, [{
                key: "notifySpeedTest", value: function () {
                    this.EE.emit(h.SPEED_NOTIFY)
                }
            }, {
                key: "subscribe", value: function (e, t) {
                    this.EE.addListener(e, t)
                }
            }, {
                key: "unsubscribe", value: function (e, t) {
                    this.EE.removeListener(e, t)
                }
            }]), e
        }()), E = n(2), w = n(64), k = n(1), O = n.n(k), j = n(5), N = n(3);

        function C(e) {
            var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "";
            return window.localStorage.getItem(e) || t
        }

        function P(e, t) {
            return window.localStorage.setItem(e, t)
        }

        function S() {
        }

        function T(e) {
            return L.apply(this, arguments)
        }

        function L() {
            return (L = Object(N.a)(O.a.mark((function e(t) {
                var n;
                return O.a.wrap((function (e) {
                    for (; ;) switch (e.prev = e.next) {
                        case 0:
                            return e.prev = 0, e.next = 3, t;
                        case 3:
                            return n = e.sent, e.abrupt("return", [n, null]);
                        case 7:
                            return e.prev = 7, e.t0 = e.catch(0), e.abrupt("return", [null, e.t0]);
                        case 10:
                        case"end":
                            return e.stop()
                    }
                }), e, null, [[0, 7]])
            })))).apply(this, arguments)
        }

        function D(e, t) {
            var n, a = [], r = [], c = Object(j.a)(e);
            try {
                for (c.s(); !(n = c.n()).done;) {
                    var o = n.value;
                    t(o) ? a.push(o) : r.push(o)
                }
            } catch (s) {
                c.e(s)
            } finally {
                c.f()
            }
            return [a, r]
        }

        function R(e) {
            var t = Object(w.a)(e), n = Object(E.a)(t, 2), r = n[0], c = n[1];
            return [r, Object(a.useMemo)((function () {
                return function (e, t) {
                    "string" === typeof e ? c((function (n) {
                        var a = t;
                        n[e] = a
                    })) : "function" === typeof e ? c(e) : "object" === typeof e && c((function (t) {
                        for (var n = e, a = 0, r = Object.keys(n); a < r.length; a++) {
                            var c = r[a];
                            t[c] = n[c]
                        }
                    }))
                }
            }), [c])]
        }

        function I() {
            var e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0], t = Object(a.useState)(e),
                n = Object(E.a)(t, 2), r = n[0], c = n[1];

            function o() {
                c(!1)
            }

            function s() {
                c(!0)
            }

            return {visible: r, hide: o, show: s}
        }

        function A(e) {
            var t = e.title, n = e.children, r = e.className, c = e.style;
            return a.createElement("header", {
                className: u()("header", r),
                style: c
            }, a.createElement("h1", null, t), a.createElement("div", {className: "operations"}, n))
        }

        var B = n(6);

        function H(e) {
            var t = e.type, n = e.size, r = void 0 === n ? 14 : n, c = e.className, o = e.style,
                s = u()("clash-iconfont", "icon-".concat(t), c), i = Object(B.a)({fontSize: r}, o),
                l = Object(B.a)(Object(B.a)({}, e), {}, {className: s, style: i});
            return a.createElement("i", l)
        }

        function M(e) {
            var t = e.className, n = e.checked, r = void 0 !== n && n, c = e.disabled, o = void 0 !== c && c,
                s = e.onChange, i = void 0 === s ? S : s, l = u()("switch", {checked: r, disabled: o}, t);
            return a.createElement("div", {
                className: l, onClick: function () {
                    o || i(!r)
                }
            }, a.createElement(H, {className: "switch-icon", type: "check", size: 20, style: {fontWeight: "bold"}}))
        }

        function U(e) {
            var t = e.className, n = e.style, r = e.children;
            return a.createElement("div", {className: u()("card", t), style: n}, r)
        }

        function z(e) {
            var t = e.gutter, n = void 0 === t ? 24 : t, r = e.align, c = void 0 === r ? "top" : r, o = e.justify,
                s = void 0 === o ? "start" : o, i = e.className, l = e.style, p = e.children;
            return a.createElement("div", {
                className: u()("row", "row-gutter-".concat(n), "row-align-".concat(c), "row-justify-".concat(s), i),
                style: l
            }, p)
        }

        function W(e) {
            var t = e.offset, n = void 0 === t ? 0 : t, r = e.order, c = void 0 === r ? 0 : r, o = e.span,
                s = void 0 === o ? 1 : o, i = e.className, l = e.style, p = e.children,
                d = Object.assign({}, {order: c}, l);
            return a.createElement("div", {
                className: u()("column", "column-offset-".concat(n), "column-span-".concat(s), i),
                style: d
            }, p)
        }

        function _(e) {
            var t = e.options, n = e.value, r = e.onSelect;
            return a.createElement("div", {className: "button-select"}, t.map((function (e) {
                return a.createElement("button", {
                    value: e.value,
                    key: e.value,
                    className: u()("button-select-options", {actived: n === e.value}),
                    onClick: function () {
                        return null === r || void 0 === r ? void 0 : r(e.value)
                    }
                }, e.label)
            })))
        }

        var F = n(65), G = n.n(F), J = n(19), V = {
            en_US: {
                SideBar: {
                    Proxies: "Proxies",
                    Overview: "Overview",
                    Logs: "Logs",
                    Rules: "Rules",
                    Settings: "Setting",
                    Connections: "Connections",
                    Version: "Version"
                },
                Settings: {
                    title: "Settings",
                    labels: {
                        startAtLogin: "Start at login",
                        language: "language",
                        setAsSystemProxy: "Set as system proxy",
                        allowConnectFromLan: "Allow connect from Lan",
                        proxyMode: "Mode",
                        socks5ProxyPort: "Socks5 proxy port",
                        httpProxyPort: "HTTP proxy port",
                        mixedProxyPort: "Mixed proxy port",
                        externalController: "External controller"
                    },
                    values: {
                        cn: "\u4e2d\u6587",
                        en: "English",
                        global: "Global",
                        rules: "Rules",
                        direct: "Direct",
                        script: "Script"
                    },
                    versionString: "Current ClashX is the latest version\uff1a{{version}}",
                    checkUpdate: "Check Update",
                    externalControllerSetting: {
                        title: "External Controller",
                        note: "Please note that modifying this configuration will only configure Dashboard. Will not modify your Clash configuration file. Please make sure that the external controller address matches the address in the Clash configuration file, otherwise, Dashboard will not be able to connect to Clash.",
                        host: "Host",
                        port: "Port",
                        secret: "Secret"
                    }
                },
                Logs: {title: "Logs"},
                Rules: {
                    title: "Rules",
                    providerTitle: "Providers",
                    providerUpdateTime: "Last updated at",
                    ruleCount: "Rule count"
                },
                Connections: {
                    title: "Connections",
                    keepClosed: "Keep closed connections",
                    total: {text: "total", upload: "upload", download: "download"},
                    closeAll: {title: "Warning", content: "This would close all connections"},
                    columns: {
                        host: "Host",
                        network: "Network",
                        type: "Type",
                        chains: "Chains",
                        rule: "Rule",
                        time: "Time",
                        speed: "Speed",
                        upload: "Upload",
                        download: "Download",
                        sourceIP: "Source IP"
                    }
                },
                Proxies: {
                    title: "Proxies",
                    editDialog: {
                        title: "Edit Proxy",
                        color: "Color",
                        name: "Name",
                        type: "Type",
                        server: "Server",
                        port: "Port",
                        password: "Password",
                        cipher: "Cipher",
                        obfs: "Obfs",
                        "obfs-host": "Obfs-host",
                        uuid: "UUID",
                        alterId: "AlterId",
                        tls: "TLS"
                    },
                    groupTitle: "Policy Group",
                    providerTitle: "Providers",
                    providerUpdateTime: "Last updated at",
                    expandText: "Expand",
                    collapseText: "Collapse",
                    speedTestText: "Speed Test",
                    breakConnectionsText: "Close connections which include the group"
                },
                Modal: {ok: "Ok", cancel: "Cancel"}
            }, zh_CN: {
                SideBar: {
                    Proxies: "\u4ee3\u7406",
                    Overview: "\u603b\u89c8",
                    Logs: "\u65e5\u5fd7",
                    Rules: "\u89c4\u5219",
                    Settings: "\u8bbe\u7f6e",
                    Connections: "\u8fde\u63a5",
                    Version: "\u7248\u672c"
                },
                Settings: {
                    title: "\u8bbe\u7f6e",
                    labels: {
                        startAtLogin: "\u5f00\u673a\u65f6\u542f\u52a8",
                        language: "\u8bed\u8a00",
                        setAsSystemProxy: "\u8bbe\u7f6e\u4e3a\u7cfb\u7edf\u4ee3\u7406",
                        allowConnectFromLan: "\u5141\u8bb8\u6765\u81ea\u5c40\u57df\u7f51\u7684\u8fde\u63a5",
                        proxyMode: "\u4ee3\u7406\u6a21\u5f0f",
                        socks5ProxyPort: "Socks5 \u4ee3\u7406\u7aef\u53e3",
                        httpProxyPort: "HTTP \u4ee3\u7406\u7aef\u53e3",
                        mixedProxyPort: "\u6df7\u5408\u4ee3\u7406\u7aef\u53e3",
                        externalController: "\u5916\u90e8\u63a7\u5236\u8bbe\u7f6e"
                    },
                    values: {
                        cn: "\u4e2d\u6587",
                        en: "English",
                        global: "\u5168\u5c40",
                        rules: "\u89c4\u5219",
                        direct: "\u76f4\u8fde",
                        script: "\u811a\u672c"
                    },
                    versionString: "\u5f53\u524d ClashX \u5df2\u662f\u6700\u65b0\u7248\u672c\uff1a{{version}}",
                    checkUpdate: "\u68c0\u67e5\u66f4\u65b0",
                    externalControllerSetting: {
                        title: "\u7f16\u8f91\u5916\u90e8\u63a7\u5236\u8bbe\u7f6e",
                        note: "\u8bf7\u6ce8\u610f\uff0c\u4fee\u6539\u8be5\u914d\u7f6e\u9879\u5e76\u4e0d\u4f1a\u4fee\u6539\u4f60\u7684 Clash \u914d\u7f6e\u6587\u4ef6\uff0c\u8bf7\u786e\u8ba4\u4fee\u6539\u540e\u7684\u5916\u90e8\u63a7\u5236\u5730\u5740\u548c Clash \u914d\u7f6e\u6587\u4ef6\u5185\u7684\u5730\u5740\u4e00\u81f4\uff0c\u5426\u5219\u4f1a\u5bfc\u81f4 Dashboard \u65e0\u6cd5\u8fde\u63a5\u3002",
                        host: "Host",
                        port: "\u7aef\u53e3",
                        secret: "\u5bc6\u94a5"
                    }
                },
                Logs: {title: "\u65e5\u5fd7"},
                Rules: {
                    title: "\u89c4\u5219",
                    providerTitle: "\u89c4\u5219\u96c6",
                    providerUpdateTime: "\u6700\u540e\u66f4\u65b0\u4e8e",
                    ruleCount: "\u89c4\u5219\u6761\u6570"
                },
                Connections: {
                    title: "\u8fde\u63a5",
                    keepClosed: "\u4fdd\u7559\u5173\u95ed\u8fde\u63a5",
                    total: {text: "\u603b\u91cf", upload: "\u4e0a\u4f20", download: "\u4e0b\u8f7d"},
                    closeAll: {title: "\u8b66\u544a", content: "\u5c06\u4f1a\u5173\u95ed\u6240\u6709\u8fde\u63a5"},
                    columns: {
                        host: "\u57df\u540d",
                        network: "\u7f51\u7edc",
                        type: "\u7c7b\u578b",
                        chains: "\u8282\u70b9\u94fe",
                        rule: "\u89c4\u5219",
                        time: "\u8fde\u63a5\u65f6\u95f4",
                        speed: "\u901f\u7387",
                        upload: "\u4e0a\u4f20",
                        download: "\u4e0b\u8f7d",
                        sourceIP: "\u6765\u6e90 IP"
                    }
                },
                Proxies: {
                    title: "\u4ee3\u7406",
                    editDialog: {
                        title: "\u7f16\u8f91\u4ee3\u7406",
                        color: "\u989c\u8272",
                        name: "\u540d\u5b57",
                        type: "\u7c7b\u578b",
                        server: "\u670d\u52a1\u5668",
                        port: "\u7aef\u53e3",
                        password: "\u5bc6\u7801",
                        cipher: "\u52a0\u5bc6\u65b9\u5f0f",
                        obfs: "Obfs",
                        "obfs-host": "Obfs-host",
                        uuid: "UUID",
                        alterId: "AlterId",
                        tls: "TLS"
                    },
                    groupTitle: "\u7b56\u7565\u7ec4",
                    providerTitle: "\u4ee3\u7406\u96c6",
                    providerUpdateTime: "\u6700\u540e\u66f4\u65b0\u4e8e",
                    expandText: "\u5c55\u5f00",
                    collapseText: "\u6536\u8d77",
                    speedTestText: "\u6d4b\u901f",
                    breakConnectionsText: "\u5207\u6362\u65f6\u6253\u65ad\u5305\u542b\u7b56\u7565\u7ec4\u7684\u8fde\u63a5"
                },
                Modal: {ok: "\u786e \u5b9a", cancel: "\u53d6 \u6d88"}
            }
        }, X = "language", Y = Object.keys(V);
        var K = n(22);

        function q(e) {
            var t = Object(s.d)(e), n = Object(E.a)(t, 2), r = n[0], c = n[1];
            return [r, Object(a.useMemo)((function () {
                return function (e, t) {
                    if ("string" === typeof e) c((function (n) {
                        return Object(K.a)(n, (function (n) {
                            var a = t;
                            n[e] = a
                        }))
                    })); else if ("function" === typeof e) {
                        var n = e;
                        c((function (e) {
                            return Object(K.a)(e, n)
                        }))
                    } else "object" === typeof e && c((function (t) {
                        return Object(K.a)(t, (function (t) {
                            for (var n = e, a = 0, r = Object.keys(n); a < r.length; a++) {
                                var c = r[a];
                                t[c] = n[c]
                            }
                        }))
                    }))
                }
            }), [c])]
        }

        var Q = n(66), Z = n.n(Q);

        function $(e) {
            var t = null;
            return Object(N.a)(O.a.mark((function n() {
                return O.a.wrap((function (n) {
                    for (; ;) switch (n.prev = n.next) {
                        case 0:
                            if (!t) {
                                n.next = 2;
                                break
                            }
                            return n.abrupt("return", t);
                        case 2:
                            return t = e(), n.abrupt("return", t.catch((function (e) {
                                throw t = null, e
                            })));
                        case 4:
                        case"end":
                            return n.stop()
                    }
                }), n)
            })))
        }

        var ee = n(24), te = function () {
            function e(t) {
                Object(p.a)(this, e), this.EE = new g.a, this.config = void 0, this.innerBuffer = [], this.isClose = !1, this.config = Object.assign({
                    bufferLength: 0,
                    retryInterval: 5e3,
                    headers: {}
                }, t), this.config.useWebsocket ? this.websocketLoop() : this.loop()
            }

            return Object(d.a)(e, [{
                key: "websocketLoop", value: function () {
                    var e, t = this, n = new URL(this.config.url);
                    n.protocol = "http:" === window.location.protocol ? "ws:" : "wss:", n.searchParams.set("token", null !== (e = this.config.token) && void 0 !== e ? e : "");
                    var a = new WebSocket(n.toString());
                    a.addEventListener("message", (function (e) {
                        var n = JSON.parse(e.data);
                        t.EE.emit("data", [n]), t.config.bufferLength > 0 && (t.innerBuffer.push(n), t.innerBuffer.length > t.config.bufferLength && t.innerBuffer.splice(0, t.innerBuffer.length - t.config.bufferLength))
                    })), a.addEventListener("close", (function () {
                        return setTimeout(t.websocketLoop, t.config.retryInterval)
                    })), a.addEventListener("error", (function (e) {
                        t.EE.emit("error", e), setTimeout(t.websocketLoop, t.config.retryInterval)
                    }))
                }
            }, {
                key: "loop", value: function () {
                    var e = Object(N.a)(O.a.mark((function e() {
                        var t, n, a, r, c, o, s, i, l, u, p, d, m;
                        return O.a.wrap((function (e) {
                            for (; ;) switch (e.prev = e.next) {
                                case 0:
                                    return e.next = 2, T(fetch(this.config.url, {
                                        mode: "cors",
                                        headers: this.config.token ? {Authorization: "Bearer ".concat(this.config.token)} : {}
                                    }));
                                case 2:
                                    if (t = e.sent, n = Object(E.a)(t, 2), a = n[0], !(r = n[1]) && a.body) {
                                        e.next = 9;
                                        break
                                    }
                                    return this.retry(r), e.abrupt("return");
                                case 9:
                                    c = a.body.getReader(), o = new TextDecoder;
                                case 11:
                                    if (!this.isClose) {
                                        e.next = 14;
                                        break
                                    }
                                    return e.abrupt("break", 29);
                                case 14:
                                    return e.next = 16, T(null === c || void 0 === c ? void 0 : c.read());
                                case 16:
                                    if (s = e.sent, i = Object(E.a)(s, 2), l = i[0].value, !(u = i[1])) {
                                        e.next = 23;
                                        break
                                    }
                                    return this.retry(u), e.abrupt("break", 29);
                                case 23:
                                    p = o.decode(l).trim().split("\n"), d = p.map((function (e) {
                                        return JSON.parse(e)
                                    })), this.EE.emit("data", d), this.config.bufferLength > 0 && ((m = this.innerBuffer).push.apply(m, Object(ee.a)(d)), this.innerBuffer.length > this.config.bufferLength && this.innerBuffer.splice(0, this.innerBuffer.length - this.config.bufferLength)), e.next = 11;
                                    break;
                                case 29:
                                case"end":
                                    return e.stop()
                            }
                        }), e, this)
                    })));
                    return function () {
                        return e.apply(this, arguments)
                    }
                }()
            }, {
                key: "retry", value: function (e) {
                    this.isClose || (this.EE.emit("error", e), window.setTimeout(this.loop, this.config.retryInterval))
                }
            }, {
                key: "subscribe", value: function (e, t) {
                    this.EE.addListener(e, t)
                }
            }, {
                key: "unsubscribe", value: function (e, t) {
                    this.EE.removeListener(e, t)
                }
            }, {
                key: "buffer", value: function () {
                    return this.innerBuffer.slice()
                }
            }, {
                key: "destory", value: function () {
                    this.EE.removeAllListeners(), this.isClose = !0
                }
            }]), e
        }();

        function ne() {
            return ae.apply(this, arguments)
        }

        function ae() {
            return (ae = Object(N.a)(O.a.mark((function e() {
                var t, n, a, r;
                return O.a.wrap((function (e) {
                    for (; ;) switch (e.prev = e.next) {
                        case 0:
                            if (!m()) {
                                e.next = 5;
                                break
                            }
                            return e.next = 3, f.getAPIInfo();
                        case 3:
                            return t = e.sent, e.abrupt("return", {hostname: t.host, port: t.port, secret: t.secret});
                        case 5:
                            if (n = C("externalControllerAddr", "192.168.1.3"), a = C("externalControllerPort", "9090"), r = C("secret", ""), n && a) {
                                e.next = 10;
                                break
                            }
                            throw new Error("can't get hostname or port");
                        case 10:
                            return e.abrupt("return", {hostname: n, port: a, secret: r});
                        case 11:
                        case"end":
                            return e.stop()
                    }
                }), e)
            })))).apply(this, arguments)
        }

        var re = $(Object(N.a)(O.a.mark((function e() {
            var t, n, a, r;
            return O.a.wrap((function (e) {
                for (; ;) switch (e.prev = e.next) {
                    case 0:
                        return e.next = 2, ne();
                    case 2:
                        return t = e.sent, n = t.hostname, a = t.port, r = t.secret, e.abrupt("return", Z.a.create({
                            baseURL: "//".concat(n, ":").concat(a),
                            headers: r ? {Authorization: "Bearer ".concat(r)} : {}
                        }));
                    case 7:
                    case"end":
                        return e.stop()
                }
            }), e)
        }))));

        function ce() {
            return oe.apply(this, arguments)
        }

        function oe() {
            return (oe = Object(N.a)(O.a.mark((function e() {
                var t;
                return O.a.wrap((function (e) {
                    for (; ;) switch (e.prev = e.next) {
                        case 0:
                            return e.next = 2, re();
                        case 2:
                            return t = e.sent, e.abrupt("return", t.get("configs"));
                        case 4:
                        case"end":
                            return e.stop()
                    }
                }), e)
            })))).apply(this, arguments)
        }

        function se(e) {
            return ie.apply(this, arguments)
        }

        function ie() {
            return (ie = Object(N.a)(O.a.mark((function e(t) {
                var n;
                return O.a.wrap((function (e) {
                    for (; ;) switch (e.prev = e.next) {
                        case 0:
                            return e.next = 2, re();
                        case 2:
                            return n = e.sent, e.abrupt("return", n.patch("configs", t));
                        case 4:
                        case"end":
                            return e.stop()
                    }
                }), e)
            })))).apply(this, arguments)
        }

        function le() {
            return ue.apply(this, arguments)
        }

        function ue() {
            return (ue = Object(N.a)(O.a.mark((function e() {
                var t;
                return O.a.wrap((function (e) {
                    for (; ;) switch (e.prev = e.next) {
                        case 0:
                            return e.next = 2, re();
                        case 2:
                            return t = e.sent, e.abrupt("return", t.get("rules"));
                        case 4:
                        case"end":
                            return e.stop()
                    }
                }), e)
            })))).apply(this, arguments)
        }

        function pe() {
            return de.apply(this, arguments)
        }

        function de() {
            return (de = Object(N.a)(O.a.mark((function e() {
                var t;
                return O.a.wrap((function (e) {
                    for (; ;) switch (e.prev = e.next) {
                        case 0:
                            return e.next = 2, re();
                        case 2:
                            return t = e.sent, e.abrupt("return", t.get("providers/proxies", {
                                validateStatus: function (e) {
                                    return e >= 200 && e < 300 || 404 === e
                                }
                            }).then((function (e) {
                                return 404 === e.status && (e.data = {providers: {}}), e
                            })));
                        case 4:
                        case"end":
                            return e.stop()
                    }
                }), e)
            })))).apply(this, arguments)
        }

        function me() {
            return fe.apply(this, arguments)
        }

        function fe() {
            return (fe = Object(N.a)(O.a.mark((function e() {
                var t;
                return O.a.wrap((function (e) {
                    for (; ;) switch (e.prev = e.next) {
                        case 0:
                            return e.next = 2, re();
                        case 2:
                            return t = e.sent, e.abrupt("return", t.get("providers/rules"));
                        case 4:
                        case"end":
                            return e.stop()
                    }
                }), e)
            })))).apply(this, arguments)
        }

        function ve() {
            return (ve = Object(N.a)(O.a.mark((function e(t) {
                var n;
                return O.a.wrap((function (e) {
                    for (; ;) switch (e.prev = e.next) {
                        case 0:
                            return e.next = 2, re();
                        case 2:
                            return n = e.sent, e.abrupt("return", n.put("providers/proxies/".concat(encodeURIComponent(t))));
                        case 4:
                        case"end":
                            return e.stop()
                    }
                }), e)
            })))).apply(this, arguments)
        }

        function he() {
            return (he = Object(N.a)(O.a.mark((function e(t) {
                var n;
                return O.a.wrap((function (e) {
                    for (; ;) switch (e.prev = e.next) {
                        case 0:
                            return e.next = 2, re();
                        case 2:
                            return n = e.sent, e.abrupt("return", n.put("providers/rules/".concat(encodeURIComponent(t))));
                        case 4:
                        case"end":
                            return e.stop()
                    }
                }), e)
            })))).apply(this, arguments)
        }

        function be() {
            return (be = Object(N.a)(O.a.mark((function e(t) {
                var n;
                return O.a.wrap((function (e) {
                    for (; ;) switch (e.prev = e.next) {
                        case 0:
                            return e.next = 2, re();
                        case 2:
                            return n = e.sent, e.abrupt("return", n.get("providers/proxies/".concat(encodeURIComponent(t), "/healthcheck")));
                        case 4:
                        case"end":
                            return e.stop()
                    }
                }), e)
            })))).apply(this, arguments)
        }

        function ye() {
            return ge.apply(this, arguments)
        }

        function ge() {
            return (ge = Object(N.a)(O.a.mark((function e() {
                var t;
                return O.a.wrap((function (e) {
                    for (; ;) switch (e.prev = e.next) {
                        case 0:
                            return e.next = 2, re();
                        case 2:
                            return t = e.sent, e.abrupt("return", t.get("proxies"));
                        case 4:
                        case"end":
                            return e.stop()
                    }
                }), e)
            })))).apply(this, arguments)
        }

        function xe() {
            return Ee.apply(this, arguments)
        }

        function Ee() {
            return (Ee = Object(N.a)(O.a.mark((function e() {
                var t;
                return O.a.wrap((function (e) {
                    for (; ;) switch (e.prev = e.next) {
                        case 0:
                            return e.next = 2, re();
                        case 2:
                            return t = e.sent, e.abrupt("return", t.get("version"));
                        case 4:
                        case"end":
                            return e.stop()
                    }
                }), e)
            })))).apply(this, arguments)
        }

        function we(e) {
            return ke.apply(this, arguments)
        }

        function ke() {
            return (ke = Object(N.a)(O.a.mark((function e(t) {
                var n;
                return O.a.wrap((function (e) {
                    for (; ;) switch (e.prev = e.next) {
                        case 0:
                            return e.next = 2, re();
                        case 2:
                            return n = e.sent, e.abrupt("return", n.get("proxies/".concat(encodeURIComponent(t), "/delay"), {
                                params: {
                                    timeout: 5e3,
                                    url: "http://www.gstatic.com/generate_204"
                                }
                            }));
                        case 4:
                        case"end":
                            return e.stop()
                    }
                }), e)
            })))).apply(this, arguments)
        }

        function Oe() {
            return (Oe = Object(N.a)(O.a.mark((function e() {
                var t;
                return O.a.wrap((function (e) {
                    for (; ;) switch (e.prev = e.next) {
                        case 0:
                            return e.next = 2, re();
                        case 2:
                            return t = e.sent, e.abrupt("return", t.delete("connections"));
                        case 4:
                        case"end":
                            return e.stop()
                    }
                }), e)
            })))).apply(this, arguments)
        }

        function je(e) {
            return Ne.apply(this, arguments)
        }

        function Ne() {
            return (Ne = Object(N.a)(O.a.mark((function e(t) {
                var n;
                return O.a.wrap((function (e) {
                    for (; ;) switch (e.prev = e.next) {
                        case 0:
                            return e.next = 2, re();
                        case 2:
                            return n = e.sent, e.abrupt("return", n.delete("connections/".concat(t)));
                        case 4:
                        case"end":
                            return e.stop()
                    }
                }), e)
            })))).apply(this, arguments)
        }

        function Ce() {
            return Pe.apply(this, arguments)
        }

        function Pe() {
            return (Pe = Object(N.a)(O.a.mark((function e() {
                var t;
                return O.a.wrap((function (e) {
                    for (; ;) switch (e.prev = e.next) {
                        case 0:
                            return e.next = 2, re();
                        case 2:
                            return t = e.sent, e.abrupt("return", t.get("connections"));
                        case 4:
                        case"end":
                            return e.stop()
                    }
                }), e)
            })))).apply(this, arguments)
        }

        function Se(e, t) {
            return Te.apply(this, arguments)
        }

        function Te() {
            return (Te = Object(N.a)(O.a.mark((function e(t, n) {
                var a;
                return O.a.wrap((function (e) {
                    for (; ;) switch (e.prev = e.next) {
                        case 0:
                            return e.next = 2, re();
                        case 2:
                            return a = e.sent, e.abrupt("return", a.put("proxies/".concat(encodeURIComponent(t)), {name: n}));
                        case 4:
                        case"end":
                            return e.stop()
                    }
                }), e)
            })))).apply(this, arguments)
        }

        var Le = $(Object(N.a)(O.a.mark((function e() {
            var t, n, a, r, c, o, s, i, l, u;
            return O.a.wrap((function (e) {
                for (; ;) switch (e.prev = e.next) {
                    case 0:
                        return e.next = 2, ne();
                    case 2:
                        return t = e.sent, e.next = 5, ce();
                    case 5:
                        return n = e.sent, a = n.data, e.next = 9, T(xe());
                    case 9:
                        return r = e.sent, c = Object(E.a)(r, 2), o = c[0], s = c[1], i = s ? "unkonwn version" : o.data.version, l = !!i || !0, u = "".concat(window.location.protocol, "//").concat(t.hostname, ":").concat(t.port, "/logs?level=").concat(a["log-level"]), e.abrupt("return", new te({
                            url: u,
                            bufferLength: 200,
                            token: t.secret,
                            useWebsocket: l
                        }));
                    case 17:
                    case"end":
                        return e.stop()
                }
            }), e)
        })))), De = $(Object(N.a)(O.a.mark((function e() {
            var t, n, a, r, c, o, s, i;
            return O.a.wrap((function (e) {
                for (; ;) switch (e.prev = e.next) {
                    case 0:
                        return e.next = 2, ne();
                    case 2:
                        return t = e.sent, e.next = 5, T(xe());
                    case 5:
                        return n = e.sent, a = Object(E.a)(n, 2), r = a[0], c = a[1], o = c ? "unkonwn version" : r.data.version, s = !!o || !0, i = "".concat(window.location.protocol, "//").concat(t.hostname, ":").concat(t.port, "/connections"), e.abrupt("return", new te({
                            url: i,
                            bufferLength: 200,
                            token: t.secret,
                            useWebsocket: s
                        }));
                    case 13:
                    case"end":
                        return e.stop()
                }
            }), e)
        })))), Re = Object(s.b)({key: "identity", default: !0});

        function Ie() {
            var e = Object(s.d)(Re), t = Object(E.a)(e, 2), n = t[0], a = t[1];
            return {
                identity: n, wrapFetcher: function (e) {
                    return Object(N.a)(O.a.mark((function t() {
                        var n, r, c, o, s, i = arguments;
                        return O.a.wrap((function (t) {
                            for (; ;) switch (t.prev = t.next) {
                                case 0:
                                    return t.next = 2, T(e.apply(void 0, i));
                                case 2:
                                    if (n = t.sent, r = Object(E.a)(n, 2), c = r[0], o = r[1], !(s = o) || s.response && 401 !== s.response.status) {
                                        t.next = 10;
                                        break
                                    }
                                    throw a(!1), o;
                                case 10:
                                    return a(!0), t.abrupt("return", c);
                                case 12:
                                case"end":
                                    return t.stop()
                            }
                        }), t)
                    })))
                }, set: a
            }
        }

        var Ae = Object(s.b)({
            key: "i18n", default: function () {
                var e = C(X);
                if (e && Y.includes(e)) return e;
                var t, n = function () {
                    var e = [];
                    if (window.navigator) if (window.navigator.languages) {
                        var t, n = Object(j.a)(window.navigator.languages);
                        try {
                            for (n.s(); !(t = n.n()).done;) {
                                var a = t.value;
                                e.push(a)
                            }
                        } catch (r) {
                            n.e(r)
                        } finally {
                            n.f()
                        }
                    } else window.navigator.language && e.push(navigator.language);
                    return e
                }(), a = Object(j.a)(n);
                try {
                    for (a.s(); !(t = a.n()).done;) {
                        var r = t.value;
                        if (r.includes("zh")) return "zh_CN";
                        if (r.includes("us")) return "en_US"
                    }
                } catch (c) {
                    a.e(c)
                } finally {
                    a.f()
                }
                return "en_US"
            }()
        });

        function Be() {
            var e = Object(s.d)(Ae), t = Object(E.a)(e, 2), n = t[0], r = t[1];
            var c = Object(a.useCallback)((function (e) {
                return {
                    t: function (t) {
                        return G()(V[n][e], t)
                    }
                }
            }), [n]);
            return {
                lang: n, locales: Y, setLang: function (e) {
                    r(e), function (e) {
                        P(X, e)
                    }(e)
                }, translation: c
            }
        }

        var He = Object(s.b)({key: "version", default: {version: "", premium: !1}});

        function Me() {
            var e = Object(s.d)(He), t = Object(E.a)(e, 2), n = t[0], a = t[1], r = Ie().set;

            function c() {
                return (c = Object(N.a)(O.a.mark((function e() {
                    var t, n, c, o;
                    return O.a.wrap((function (e) {
                        for (; ;) switch (e.prev = e.next) {
                            case 0:
                                return e.next = 2, T(xe());
                            case 2:
                                t = e.sent, n = Object(E.a)(t, 2), c = n[0], o = n[1], r(!o), a(o ? {
                                    version: "",
                                    premium: !1
                                } : {version: c.data.version, premium: !!c.data.premium});
                            case 8:
                            case"end":
                                return e.stop()
                        }
                    }), e)
                })))).apply(this, arguments)
            }

            return {
                version: n.version, premium: n.premium, update: function () {
                    return c.apply(this, arguments)
                }
            }
        }

        var Ue = Object(s.b)({key: "config", default: {breakConnections: !1}});

        function ze() {
            var e = q(Ue), t = Object(E.a)(e, 2);
            return {data: t[0], set: t[1]}
        }

        var We = Object(s.b)({key: "proxyProvider", default: []});

        function _e() {
            var e = Object(s.d)(We), t = Object(E.a)(e, 2), n = t[0], r = t[1],
                c = Object(J.a)("/providers/proxy", Object(N.a)(O.a.mark((function e() {
                    var t;
                    return O.a.wrap((function (e) {
                        for (; ;) switch (e.prev = e.next) {
                            case 0:
                                return e.next = 2, pe();
                            case 2:
                                return t = e.sent, e.abrupt("return", Object.keys(t.data.providers).map((function (e) {
                                    return t.data.providers[e]
                                })).filter((function (e) {
                                    return "default" !== e.name
                                })).filter((function (e) {
                                    return "Compatible" !== e.vehicleType
                                })));
                            case 4:
                            case"end":
                                return e.stop()
                        }
                    }), e)
                })))), o = c.data, i = c.mutate;
            return Object(a.useEffect)((function () {
                return r(null !== o && void 0 !== o ? o : [])
            }), [o, r]), {providers: n, update: i}
        }

        function Fe() {
            var e = Object(s.d)(He), t = Object(E.a)(e, 1)[0].premium,
                n = Object(J.a)("/providers/rule", Object(N.a)(O.a.mark((function e() {
                    var n;
                    return O.a.wrap((function (e) {
                        for (; ;) switch (e.prev = e.next) {
                            case 0:
                                if (t) {
                                    e.next = 2;
                                    break
                                }
                                return e.abrupt("return", []);
                            case 2:
                                return e.next = 4, me();
                            case 4:
                                return n = e.sent, e.abrupt("return", Object.keys(n.data.providers).map((function (e) {
                                    return n.data.providers[e]
                                })));
                            case 6:
                            case"end":
                                return e.stop()
                        }
                    }), e)
                })))), a = n.data;
            return {providers: null !== a && void 0 !== a ? a : [], update: n.mutate}
        }

        function Ge() {
            var e = Object(J.a)("/config", Object(N.a)(O.a.mark((function e() {
                var t, n, a;
                return O.a.wrap((function (e) {
                    for (; ;) switch (e.prev = e.next) {
                        case 0:
                            return e.next = 2, ce();
                        case 2:
                            return n = e.sent, a = n.data, e.abrupt("return", {
                                port: a.port,
                                socksPort: a["socks-port"],
                                mixedPort: null !== (t = a["mixed-port"]) && void 0 !== t ? t : 0,
                                redirPort: a["redir-port"],
                                mode: a.mode.toLowerCase(),
                                logLevel: a["log-level"],
                                allowLan: a["allow-lan"]
                            });
                        case 5:
                        case"end":
                            return e.stop()
                    }
                }), e)
            })))), t = e.data;
            return {general: null !== t && void 0 !== t ? t : {}, update: e.mutate}
        }

        var Je = Object(s.b)({
            key: "proxies",
            default: {
                proxies: [],
                groups: [],
                global: {name: "GLOBAL", type: "Selector", now: "", history: [], all: []}
            }
        });

        function Ve() {
            var e = q(Je), t = Object(E.a)(e, 2), n = t[0], r = t[1],
                c = Object(J.a)("/proxies", Object(N.a)(O.a.mark((function e() {
                    var t, n, a, c, o, s, i, l, u;
                    return O.a.wrap((function (e) {
                        for (; ;) switch (e.prev = e.next) {
                            case 0:
                                return e.next = 2, ye();
                            case 2:
                                t = e.sent, (n = t.data.proxies.GLOBAL).name = "GLOBAL", a = new Set(["Selector", "URLTest", "Fallback", "LoadBalance"]), c = new Set(["DIRECT", "REJECT", "GLOBAL"]), o = n.all.filter((function (e) {
                                    return !c.has(e)
                                })).map((function (e) {
                                    return Object(B.a)(Object(B.a)({}, t.data.proxies[e]), {}, {name: e})
                                })), s = D(o, (function (e) {
                                    return !a.has(e.type)
                                })), i = Object(E.a)(s, 2), l = i[0], u = i[1], r({proxies: l, groups: u, global: n});
                            case 10:
                            case"end":
                                return e.stop()
                        }
                    }), e)
                })))).mutate, o = Object(a.useCallback)((function (e, t) {
                    r((function (n) {
                        var a, r = Object(j.a)(n.groups);
                        try {
                            for (r.s(); !(a = r.n()).done;) {
                                var c = a.value;
                                c.name === e && (c.now = t)
                            }
                        } catch (o) {
                            r.e(o)
                        } finally {
                            r.f()
                        }
                    }))
                }), [r]);
            return {proxies: n.proxies, groups: n.groups, global: n.global, update: c, markProxySelected: o, set: r}
        }

        var Xe = Object(s.c)({
            key: "proxyMapping", get: function (e) {
                var t, n = e.get, a = n(Je), r = n(We), c = new Map, o = Object(j.a)(a.proxies);
                try {
                    for (o.s(); !(t = o.n()).done;) {
                        var s = t.value;
                        c.set(s.name, s)
                    }
                } catch (f) {
                    o.e(f)
                } finally {
                    o.f()
                }
                var i, l = Object(j.a)(r);
                try {
                    for (l.s(); !(i = l.n()).done;) {
                        var u, p = i.value, d = Object(j.a)(p.proxies);
                        try {
                            for (d.s(); !(u = d.n()).done;) {
                                var m = u.value;
                                c.set(m.name, m)
                            }
                        } catch (f) {
                            d.e(f)
                        } finally {
                            d.f()
                        }
                    }
                } catch (f) {
                    l.e(f)
                } finally {
                    l.f()
                }
                return c
            }
        });

        function Ye() {
            var e = Object(J.a)("/clashx", Object(N.a)(O.a.mark((function e() {
                var t, n, a, r;
                return O.a.wrap((function (e) {
                    for (; ;) switch (e.prev = e.next) {
                        case 0:
                            if (m()) {
                                e.next = 2;
                                break
                            }
                            return e.abrupt("return", {isClashX: !1, startAtLogin: !1, systemProxy: !1});
                        case 2:
                            return e.next = 4, null === f || void 0 === f ? void 0 : f.getStartAtLogin();
                        case 4:
                            if (e.t1 = t = e.sent, e.t0 = null !== e.t1, !e.t0) {
                                e.next = 8;
                                break
                            }
                            e.t0 = void 0 !== t;
                        case 8:
                            if (!e.t0) {
                                e.next = 12;
                                break
                            }
                            e.t2 = t, e.next = 13;
                            break;
                        case 12:
                            e.t2 = !1;
                        case 13:
                            return a = e.t2, e.next = 16, null === f || void 0 === f ? void 0 : f.isSystemProxySet();
                        case 16:
                            if (e.t4 = n = e.sent, e.t3 = null !== e.t4, !e.t3) {
                                e.next = 20;
                                break
                            }
                            e.t3 = void 0 !== n;
                        case 20:
                            if (!e.t3) {
                                e.next = 24;
                                break
                            }
                            e.t5 = n, e.next = 25;
                            break;
                        case 24:
                            e.t5 = !1;
                        case 25:
                            return r = e.t5, e.abrupt("return", {startAtLogin: a, systemProxy: r, isClashX: !0});
                        case 27:
                        case"end":
                            return e.stop()
                    }
                }), e)
            }))));
            return {data: e.data, update: e.mutate}
        }

        var Ke = Object(s.b)({key: "apiData", default: {hostname: "192.168.1.3", port: "9090", secret: ""}});

        function qe() {
            var e = Object(s.d)(Ke), t = Object(E.a)(e, 2), n = t[0], r = t[1];

            function c() {
                return (c = Object(N.a)(O.a.mark((function e(t) {
                    var n, a, r;
                    return O.a.wrap((function (e) {
                        for (; ;) switch (e.prev = e.next) {
                            case 0:
                                n = t.hostname, a = t.port, r = t.secret, P("externalControllerAddr", n), P("externalControllerPort", a), P("secret", r), window.location.reload();
                            case 5:
                            case"end":
                                return e.stop()
                        }
                    }), e)
                })))).apply(this, arguments)
            }

            return {
                data: n, fetch: Object(a.useCallback)(function () {
                    var e = Object(N.a)(O.a.mark((function e() {
                        var t;
                        return O.a.wrap((function (e) {
                            for (; ;) switch (e.prev = e.next) {
                                case 0:
                                    return e.next = 2, ne();
                                case 2:
                                    t = e.sent, r(Object(B.a)({}, t));
                                case 4:
                                case"end":
                                    return e.stop()
                            }
                        }), e)
                    })));
                    return function () {
                        return e.apply(this, arguments)
                    }
                }(), [r]), update: function (e) {
                    return c.apply(this, arguments)
                }
            }
        }

        var Qe = Object(s.b)({key: "rules", default: []});

        function Ze(e) {
            var t = e.className, n = e.data, c = e.onClick, o = e.select, s = e.canClick, i = e.errSet, l = e.rowHeight,
                p = (0, Be().translation)("Proxies").t, d = Object(a.useState)(!1), m = Object(E.a)(d, 2), f = m[0],
                v = m[1], h = Object(a.useState)(!1), b = Object(E.a)(h, 2), y = b[0], g = b[1],
                x = Object(a.useRef)(null);
            Object(a.useLayoutEffect)((function () {
                var e, t;
                g((null !== (e = null === x || void 0 === x || null === (t = x.current) || void 0 === t ? void 0 : t.offsetHeight) && void 0 !== e ? e : 0) > 30)
            }), []);
            var w = f ? "auto" : l, k = s ? c : S;
            var O = n.map((function (e) {
                var t = u()({
                    "tags-selected": o === e,
                    "can-click": s,
                    error: null === i || void 0 === i ? void 0 : i.has(e)
                });
                return r.a.createElement("li", {
                    className: t, key: e, onClick: function () {
                        return k(e)
                    }
                }, e)
            }));
            return r.a.createElement("div", {
                className: u()("tags-container", t),
                style: {height: w}
            }, r.a.createElement("ul", {
                ref: x,
                className: u()("tags", {expand: f})
            }, O), y && r.a.createElement("span", {
                className: "tags-expand", onClick: function () {
                    v(!f)
                }
            }, p(f ? "collapseText" : "expandText")))
        }

        function $e(e) {
            var t = e.className, n = e.style, r = e.value, c = void 0 === r ? "" : r, o = e.align,
                s = void 0 === o ? "center" : o, i = e.inside, l = void 0 !== i && i, p = e.autoFocus,
                d = void 0 !== p && p, m = e.type, f = void 0 === m ? "text" : m, v = e.disabled, h = void 0 !== v && v,
                b = e.onChange, y = void 0 === b ? S : b, g = e.onBlur, x = void 0 === g ? S : g,
                E = u()("input", "input-align-".concat(s), {"input-inside": l}, t);
            return a.createElement("input", {
                disabled: h,
                className: E,
                style: n,
                value: c,
                autoFocus: d,
                type: f,
                onChange: function (e) {
                    return y(e.target.value, e)
                },
                onBlur: x
            })
        }

        function et(e) {
            var t = e.show, n = void 0 === t || t, o = e.title, s = void 0 === o ? "Modal" : o, i = e.size,
                l = void 0 === i ? "small" : i, p = e.footer, d = void 0 === p || p, m = e.onOk,
                f = void 0 === m ? S : m, v = e.onClose, h = void 0 === v ? S : v, b = e.bodyClassName, y = e.bodyStyle,
                g = e.className, x = e.style, E = e.children, w = (0, Be().translation)("Modal").t,
                k = Object(a.useRef)(document.createElement("div")), O = Object(a.useRef)(null);
            Object(a.useLayoutEffect)((function () {
                var e = k.current;
                return document.body.appendChild(e), function () {
                    document.body.removeChild(e)
                }
            }), []);
            var j = r.a.createElement("div", {
                className: u()("modal-mask", {"modal-show": n}),
                ref: O,
                onMouseDown: function (e) {
                    e.target === O.current && h()
                }
            }, r.a.createElement("div", {
                className: u()("modal", "modal-".concat(l), g),
                style: x
            }, r.a.createElement("div", {className: "modal-title"}, s), r.a.createElement("div", {
                className: u()("modal-body", b),
                style: y
            }, E), d && r.a.createElement("div", {className: "footer"}, r.a.createElement(at, {
                onClick: function () {
                    return h()
                }
            }, w("cancel")), r.a.createElement(at, {
                type: "primary", onClick: function () {
                    return f()
                }
            }, w("ok")))));
            return Object(c.createPortal)(j, k.current)
        }

        var tt = {success: "check", info: "info", warning: "info", error: "close"};

        function nt(e) {
            var t = e.message, n = void 0 === t ? "" : t, a = e.type, c = void 0 === a ? "info" : a, o = e.inside,
                s = void 0 !== o && o, i = e.children, l = e.className, p = e.style,
                d = u()("alert", "alert-".concat(s ? "note" : "box", "-").concat(c), l);
            return r.a.createElement("div", {
                className: d,
                style: p
            }, r.a.createElement("span", {className: "alert-icon"}, r.a.createElement(H, {
                type: tt[c],
                size: 26
            })), n ? r.a.createElement("p", {className: "alert-message"}, n) : r.a.createElement("div", {className: "alert-message"}, i))
        }

        function at(e) {
            var t = e.type, n = void 0 === t ? "normal" : t, r = e.onClick, c = void 0 === r ? S : r, o = e.children,
                s = e.className, i = e.style, l = u()("button", "button-".concat(n), s);
            return a.createElement("button", {className: l, style: i, onClick: c}, o)
        }

        function rt(e) {
            var t = e.className, n = e.checked, r = void 0 !== n && n, c = e.onChange, o = void 0 === c ? S : c,
                s = u()("checkbox", {checked: r}, t);
            return a.createElement("div", {
                className: s, onClick: function () {
                    o(!r)
                }
            }, a.createElement(H, {
                className: "checkbox-icon",
                type: "check",
                size: 18
            }), a.createElement("div", null, e.children))
        }

        function ct(e) {
            var t = e.color, n = e.className, r = e.style, c = u()("tag", n), o = Object(B.a)({color: t}, r),
                s = Object(B.a)(Object(B.a)({}, e), {}, {className: c, style: o});
            return a.createElement("span", s, e.children)
        }

        function ot(e) {
            var t = u()("spinner", e.className);
            return a.createElement("div", {className: t}, a.createElement("div", {className: "spinner-circle"}, a.createElement("div", {className: "spinner-inner"})), a.createElement("div", {className: "spinner-circle"}, a.createElement("div", {className: "spinner-inner"})), a.createElement("div", {className: "spinner-circle"}, a.createElement("div", {className: "spinner-inner"})), a.createElement("div", {className: "spinner-circle"}, a.createElement("div", {className: "spinner-inner"})), a.createElement("div", {className: "spinner-circle"}, a.createElement("div", {className: "spinner-inner"})))
        }

        function st(e) {
            var t = u()("loading", "visible", e.className);
            return e.visible ? r.a.createElement("div", {className: t}, r.a.createElement(ot, {className: e.spinnerClassName})) : null
        }

        var it = {"#909399": 0, "#00c520": 260, "#ff9a28": 600, "#ff3e5e": 1 / 0};

        function lt(e) {
            return ut.apply(this, arguments)
        }

        function ut() {
            return (ut = Object(N.a)(O.a.mark((function e(t) {
                var n, a, r, c;
                return O.a.wrap((function (e) {
                    for (; ;) switch (e.prev = e.next) {
                        case 0:
                            if (!m()) {
                                e.next = 14;
                                break
                            }
                            return e.next = 3, null === f || void 0 === f ? void 0 : f.getProxyDelay(t);
                        case 3:
                            if (e.t1 = n = e.sent, e.t0 = null !== e.t1, !e.t0) {
                                e.next = 7;
                                break
                            }
                            e.t0 = void 0 !== n;
                        case 7:
                            if (!e.t0) {
                                e.next = 11;
                                break
                            }
                            e.t2 = n, e.next = 12;
                            break;
                        case 11:
                            e.t2 = 0;
                        case 12:
                            return a = e.t2, e.abrupt("return", a);
                        case 14:
                            return e.next = 16, we(t);
                        case 16:
                            return r = e.sent, c = r.data.delay, e.abrupt("return", c);
                        case 19:
                        case"end":
                            return e.stop()
                    }
                }), e)
            })))).apply(this, arguments)
        }

        function pt(e) {
            var t = e.config, n = e.className, c = Ve().set,
                o = Object(a.useCallback)(Object(N.a)(O.a.mark((function e() {
                    var n, a, r, o, s;
                    return O.a.wrap((function (e) {
                        for (; ;) switch (e.prev = e.next) {
                            case 0:
                                return e.next = 2, T(lt(t.name));
                            case 2:
                                n = e.sent, a = Object(E.a)(n, 2), r = a[0], o = a[1], s = o ? 0 : r, c((function (e) {
                                    var n = e.proxies.find((function (e) {
                                        return e.name === t.name
                                    }));
                                    n && n.history.push({time: Date.now().toString(), delay: s})
                                }));
                            case 8:
                            case"end":
                                return e.stop()
                        }
                    }), e)
                }))), [t.name, c]), s = Object(a.useMemo)((function () {
                    var e;
                    return (null === (e = t.history) || void 0 === e ? void 0 : e.length) ? t.history.slice(-1)[0].delay : 0
                }), [t]);
            Object(a.useLayoutEffect)((function () {
                return x.subscribe(h.SPEED_NOTIFY, o), function () {
                    return x.unsubscribe(h.SPEED_NOTIFY, o)
                }
            }), [o]);
            var i = Object(a.useMemo)((function () {
                return 0 === s
            }), [s]), l = Object(a.useMemo)((function () {
                return Object.keys(it).find((function (e) {
                    return s <= it[e]
                }))
            }), [s]), p = i ? void 0 : l;
            return r.a.createElement("div", {className: u()("proxy-item", {"proxy-error": i}, n)}, r.a.createElement("span", {
                className: "proxy-type",
                style: {backgroundColor: p}
            }, t.type), r.a.createElement("p", {className: "proxy-name"}, t.name), r.a.createElement("p", {className: "proxy-delay"}, 0 === s ? "-" : "".concat(s, "ms")))
        }

        function dt(e) {
            var t = Ve().markProxySelected, n = Object(s.e)(Xe), c = ze().data, o = e.config;

            function i() {
                return (i = Object(N.a)(O.a.mark((function n(a) {
                    var r, o, s, i, l, u, p;
                    return O.a.wrap((function (n) {
                        for (; ;) switch (n.prev = n.next) {
                            case 0:
                                return n.next = 2, Se(e.config.name, a);
                            case 2:
                                if (t(e.config.name, a), !c.breakConnections) {
                                    n.next = 11;
                                    break
                                }
                                return r = [], n.next = 7, Ce();
                            case 7:
                                o = n.sent, s = Object(j.a)(o.data.connections);
                                try {
                                    for (s.s(); !(i = s.n()).done;) (l = i.value).chains.includes(e.config.name) && r.push(l.id)
                                } catch (d) {
                                    s.e(d)
                                } finally {
                                    s.f()
                                }
                                for (u = 0, p = r; u < p.length; u++) je(p[u]);
                            case 11:
                            case"end":
                                return n.stop()
                        }
                    }), n)
                })))).apply(this, arguments)
            }

            var l = Object(a.useMemo)((function () {
                var e, t = new Set, a = Object(j.a)(o.all);
                try {
                    for (a.s(); !(e = a.n()).done;) {
                        var r, c = e.value, s = null === (r = n.get(c)) || void 0 === r ? void 0 : r.history;
                        (null === s || void 0 === s ? void 0 : s.length) && 0 === s.slice(-1)[0].delay && t.add(c)
                    }
                } catch (i) {
                    a.e(i)
                } finally {
                    a.f()
                }
                return t
            }), [o.all, n]), u = "Selector" === o.type;
            return r.a.createElement("div", {className: "proxy-group"}, r.a.createElement("div", {className: "proxy-group-part"}, r.a.createElement("span", {className: "proxy-group-name"}, o.name), r.a.createElement(ct, {className: "proxy-group-type"}, o.type)), r.a.createElement("div", {className: "proxy-group-tags-container"}, r.a.createElement(Ze, {
                className: "proxy-group-tags",
                data: o.all,
                onClick: function (e) {
                    return i.apply(this, arguments)
                },
                errSet: l,
                select: o.now,
                canClick: u,
                rowHeight: 30
            })))
        }

        var mt, ft, vt = n(23), ht = n.n(vt), bt = n(67), yt = n.n(bt);
        n(135);

        function gt(e, t) {
            var n = "en_US" === t ? "en" : "zh-cn";
            return ht()().locale(n).from(e)
        }

        function xt(e) {
            var t = _e().update, n = Be(), r = n.translation, c = n.lang, o = e.provider, s = r("Proxies").t, i = I(),
                l = i.visible, u = i.hide, p = i.show;
            var d = Object(a.useMemo)((function () {
                return o.proxies.slice().sort((function (e, t) {
                    return -1 * wt(e, t)
                }))
            }), [o.proxies]);
            return a.createElement(U, {className: "proxy-provider"}, a.createElement(st, {visible: l}), a.createElement("div", {className: "proxy-provider-header"}, a.createElement("div", {className: "proxy-provider-header-part"}, a.createElement("span", {className: "proxy-provider-name"}, o.name), a.createElement(ct, null, o.vehicleType)), a.createElement("div", {className: "proxy-provider-header-part"}, o.updatedAt && a.createElement("span", {className: "proxy-provider-update"}, "".concat(s("providerUpdateTime"), ": ").concat(gt(new Date(o.updatedAt), c))), a.createElement(H, {
                className: "proxy-provider-icon healthcheck",
                type: "healthcheck",
                size: 18,
                onClick: function () {
                    p(), function (e) {
                        return be.apply(this, arguments)
                    }(o.name).then((function () {
                        return t()
                    })).finally((function () {
                        return u()
                    }))
                }
            }), a.createElement(H, {
                className: "proxy-provider-icon", type: "update", size: 18, onClick: function () {
                    p(), function (e) {
                        return ve.apply(this, arguments)
                    }(o.name).then((function () {
                        return t()
                    })).finally((function () {
                        return u()
                    }))
                }
            }))), a.createElement("ul", {className: "proxies-list"}, d.map((function (e) {
                return a.createElement("li", {key: e.name}, a.createElement(pt, {
                    className: "proxy-provider-item",
                    config: e
                }))
            }))))
        }

        ht.a.extend(yt.a), function (e) {
            e[e.None = 0] = "None", e[e.Asc = 1] = "Asc", e[e.Desc = 2] = "Desc"
        }(ft || (ft = {}));
        var Et = (mt = {}, Object(b.a)(mt, ft.None, "sort"), Object(b.a)(mt, ft.Asc, "sort-ascending"), Object(b.a)(mt, ft.Desc, "sort-descending"), mt);

        function wt(e, t) {
            var n = e.history.length ? e.history.slice(-1)[0].delay : 0;
            return ((t.history.length ? t.history.slice(-1)[0].delay : 0) || Number.MAX_SAFE_INTEGER) - (n || Number.MAX_SAFE_INTEGER)
        }

        function kt() {
            var e = Ve(), t = e.groups, n = e.global, c = ze(), o = c.data, s = c.set, i = Ge().general,
                l = (0, Be().translation)("Proxies").t, u = Object(a.useMemo)((function () {
                    return "global" === i.mode ? [n] : t
                }), [i, t, n]);
            return r.a.createElement(r.a.Fragment, null, 0 !== u.length && r.a.createElement("div", {className: "proxies-container"}, r.a.createElement(A, {title: l("groupTitle")}, r.a.createElement(rt, {
                className: "connections-filter",
                checked: o.breakConnections,
                onChange: function (e) {
                    return s("breakConnections", e)
                }
            }, l("breakConnectionsText"))), r.a.createElement(U, {className: "proxies-group-card"}, r.a.createElement("ul", {className: "proxies-group-list"}, u.map((function (e) {
                return r.a.createElement("li", {
                    className: "proxies-group-item",
                    key: e.name
                }, r.a.createElement(dt, {config: e}))
            }))))))
        }

        function Ot() {
            var e = _e().providers, t = (0, Be().translation)("Proxies").t;
            return r.a.createElement(r.a.Fragment, null, 0 !== e.length && r.a.createElement("div", {className: "proxies-container"}, r.a.createElement(A, {title: t("providerTitle")}), r.a.createElement("ul", {className: "proxies-providers-list"}, e.map((function (e) {
                return r.a.createElement("li", {
                    className: "proxies-providers-item",
                    key: e.name
                }, r.a.createElement(xt, {provider: e}))
            })))))
        }

        function jt() {
            var e = Ve().proxies, t = (0, Be().translation)("Proxies").t;
            var n = function (e) {
                var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
                if (e.length < 2) throw new Error("List requires at least two elements");
                var n = Object(a.useState)(t), r = Object(E.a)(n, 2), c = r[0], o = r[1];

                function s() {
                    o((c + 1) % e.length)
                }

                return {
                    current: Object(a.useMemo)((function () {
                        return e[c]
                    }), [e, c]), next: s
                }
            }([ft.Asc, ft.Desc, ft.None]), c = n.current, o = n.next, s = Object(a.useMemo)((function () {
                switch (c) {
                    case ft.Desc:
                        return e.slice().sort((function (e, t) {
                            return wt(e, t)
                        }));
                    case ft.Asc:
                        return e.slice().sort((function (e, t) {
                            return -1 * wt(e, t)
                        }));
                    default:
                        return e.slice()
                }
            }), [c, e]), i = o;
            return r.a.createElement(r.a.Fragment, null, 0 !== s.length && r.a.createElement("div", {className: "proxies-container"}, r.a.createElement(A, {title: t("title")}, r.a.createElement(H, {
                className: "proxies-action-icon",
                type: Et[c],
                onClick: i,
                size: 20
            }), r.a.createElement(H, {
                className: "proxies-action-icon",
                type: "speed",
                size: 20
            }), r.a.createElement("span", {
                className: "proxies-speed-test", onClick: function () {
                    x.notifySpeedTest()
                }
            }, t("speedTestText"))), r.a.createElement("ul", {className: "proxies-list"}, s.map((function (e) {
                return r.a.createElement("li", {key: e.name}, r.a.createElement(pt, {config: e}))
            })))))
        }

        function Nt() {
            return r.a.createElement("div", {className: "page"}, r.a.createElement(kt, null), r.a.createElement(Ot, null), r.a.createElement(jt, null))
        }

        function Ct() {
            var e = Object(a.useRef)(null), t = Object(a.useRef)([]), n = Object(a.useState)([]), c = Object(E.a)(n, 2),
                o = c[0], s = c[1], i = (0, Be().translation)("Logs").t;
            return Object(a.useLayoutEffect)((function () {
                var t = e.current;
                t && (t.scrollTop = t.scrollHeight)
            })), Object(a.useEffect)((function () {
                var e = null;

                function n(e) {
                    t.current = t.current.slice().concat(e.map((function (e) {
                        return Object(B.a)(Object(B.a)({}, e), {}, {time: new Date})
                    }))), s(t.current)
                }

                return Object(N.a)(O.a.mark((function a() {
                    return O.a.wrap((function (a) {
                        for (; ;) switch (a.prev = a.next) {
                            case 0:
                                return a.next = 2, Le();
                            case 2:
                                e = a.sent, t.current = e.buffer(), s(t.current), e.subscribe("data", n);
                            case 6:
                            case"end":
                                return a.stop()
                        }
                    }), a)
                })))(), function () {
                    var t;
                    return null === (t = e) || void 0 === t ? void 0 : t.unsubscribe("data", n)
                }
            }), []), r.a.createElement("div", {className: "page"}, r.a.createElement(A, {title: i("title")}), r.a.createElement(U, {className: "logs-card"}, r.a.createElement("ul", {
                className: "logs-panel",
                ref: e
            }, o.map((function (e, t) {
                return r.a.createElement("li", {key: t}, r.a.createElement("span", {className: "logs-panel-time"}, ht()(e.time).format("YYYY-MM-DD HH:mm:ss")), r.a.createElement("span", null, "[", e.type, "] ", e.payload))
            })))))
        }

        var Pt = n(72), St = n(68);

        function Tt(e) {
            var t = Fe().update, n = Be(), r = n.translation, c = n.lang, o = e.provider, s = r("Rules").t, i = I(),
                l = i.visible, p = i.hide, d = i.show;
            var m = u()("rule-provider-icon", {"rule-provider-loading": l});
            return a.createElement(U, {className: "rule-provider"}, a.createElement("div", {className: "rule-provider-header"}, a.createElement("div", {className: "rule-provider-header-part"}, a.createElement("span", {className: "rule-provider-name"}, o.name), a.createElement(ct, null, o.vehicleType), a.createElement(ct, {className: "rule-provider-behavior"}, o.behavior), a.createElement("span", {className: "rule-provider-update"}, "".concat(s("ruleCount"), ": ").concat(o.ruleCount))), a.createElement("div", {className: "rule-provider-header-part"}, o.updatedAt && a.createElement("span", {className: "rule-provider-update"}, "".concat(s("providerUpdateTime"), ": ").concat(gt(new Date(o.updatedAt), c))), a.createElement(H, {
                className: m,
                type: "update",
                size: 18,
                onClick: function () {
                    d(), function (e) {
                        return he.apply(this, arguments)
                    }(o.name).then((function () {
                        return t()
                    })).finally((function () {
                        return p()
                    }))
                }
            }))))
        }

        function Lt() {
            var e = Fe().providers, t = (0, Be().translation)("Rules").t;
            return r.a.createElement(r.a.Fragment, null, 0 !== e.length && r.a.createElement("div", {className: "proxies-container"}, r.a.createElement(A, {title: t("providerTitle")}), r.a.createElement("ul", {className: "proxies-providers-list"}, e.map((function (e) {
                return r.a.createElement("li", {
                    className: "proxies-providers-item",
                    key: e.name
                }, r.a.createElement(Tt, {provider: e}))
            })))))
        }

        function Dt() {
            var e = function () {
                var e = q(Qe), t = Object(E.a)(e, 2), n = t[0], a = t[1];

                function r() {
                    return (r = Object(N.a)(O.a.mark((function e() {
                        var t;
                        return O.a.wrap((function (e) {
                            for (; ;) switch (e.prev = e.next) {
                                case 0:
                                    return e.next = 2, le();
                                case 2:
                                    t = e.sent, a(t.data.rules);
                                case 4:
                                case"end":
                                    return e.stop()
                            }
                        }), e)
                    })))).apply(this, arguments)
                }

                return {
                    rules: n, update: function () {
                        return r.apply(this, arguments)
                    }
                }
            }(), t = e.rules, n = e.update, a = (0, Be().translation)("Rules").t;

            function c(e) {
                var n = e.index, a = e.style, c = t[n];
                return r.a.createElement("li", {
                    className: "rule-item",
                    style: a
                }, r.a.createElement(z, {
                    className: "rule-item-row",
                    gutter: 24,
                    align: "middle"
                }, r.a.createElement(W, {
                    className: "rule-type",
                    span: 6,
                    offset: 1
                }, c.type), r.a.createElement(W, {
                    className: "payload",
                    span: 11
                }, c.payload), r.a.createElement(W, {className: "rule-proxy", span: 6}, c.proxy)))
            }

            return Object(J.a)("rules", n), r.a.createElement("div", {className: "page"}, r.a.createElement(Lt, null), r.a.createElement(A, {title: a("title")}), r.a.createElement(U, {className: "rules-card"}, r.a.createElement(St.a, {className: "rules"}, (function (e) {
                var n = e.height, a = e.width;
                return r.a.createElement(Pt.a, {height: n, width: a, itemCount: t.length, itemSize: 50}, c)
            }))))
        }

        var Rt = n(69), It = n.n(Rt),
            At = [{label: "\u4e2d\u6587", value: "zh_CN"}, {label: "English", value: "en_US"}];

        function Bt() {
            var e, t, n, c = Me().premium, o = Ye(), s = o.data, i = o.update, l = Ge(), p = l.general, d = l.update,
                m = Ie().set, v = qe().data, h = Be(), b = h.translation, y = h.setLang, g = h.lang,
                x = b("Settings").t, w = R({socks5ProxyPort: 7891, httpProxyPort: 7890, mixedProxyPort: 0}),
                k = Object(E.a)(w, 2), j = k[0], C = k[1];

            function P() {
                return (P = Object(N.a)(O.a.mark((function e(t) {
                    return O.a.wrap((function (e) {
                        for (; ;) switch (e.prev = e.next) {
                            case 0:
                                return e.next = 2, se({mode: t});
                            case 2:
                                return e.next = 4, d();
                            case 4:
                            case"end":
                                return e.stop()
                        }
                    }), e)
                })))).apply(this, arguments)
            }

            function S() {
                return (S = Object(N.a)(O.a.mark((function e(t) {
                    return O.a.wrap((function (e) {
                        for (; ;) switch (e.prev = e.next) {
                            case 0:
                                return e.next = 2, null === f || void 0 === f ? void 0 : f.setStartAtLogin(t);
                            case 2:
                                i();
                            case 3:
                            case"end":
                                return e.stop()
                        }
                    }), e)
                })))).apply(this, arguments)
            }

            function T() {
                return (T = Object(N.a)(O.a.mark((function e(t) {
                    return O.a.wrap((function (e) {
                        for (; ;) switch (e.prev = e.next) {
                            case 0:
                                return e.next = 2, null === f || void 0 === f ? void 0 : f.setSystemProxy(t);
                            case 2:
                                i();
                            case 3:
                            case"end":
                                return e.stop()
                        }
                    }), e)
                })))).apply(this, arguments)
            }

            function L() {
                return (L = Object(N.a)(O.a.mark((function e() {
                    return O.a.wrap((function (e) {
                        for (; ;) switch (e.prev = e.next) {
                            case 0:
                                return e.next = 2, se({port: j.httpProxyPort});
                            case 2:
                                return e.next = 4, d();
                            case 4:
                            case"end":
                                return e.stop()
                        }
                    }), e)
                })))).apply(this, arguments)
            }

            function D() {
                return (D = Object(N.a)(O.a.mark((function e() {
                    return O.a.wrap((function (e) {
                        for (; ;) switch (e.prev = e.next) {
                            case 0:
                                return e.next = 2, se({"socks-port": j.socks5ProxyPort});
                            case 2:
                                return e.next = 4, d();
                            case 4:
                            case"end":
                                return e.stop()
                        }
                    }), e)
                })))).apply(this, arguments)
            }

            function I() {
                return (I = Object(N.a)(O.a.mark((function e() {
                    return O.a.wrap((function (e) {
                        for (; ;) switch (e.prev = e.next) {
                            case 0:
                                return e.next = 2, se({"mixed-port": j.mixedProxyPort});
                            case 2:
                                return e.next = 4, d();
                            case 4:
                            case"end":
                                return e.stop()
                        }
                    }), e)
                })))).apply(this, arguments)
            }

            function B() {
                return (B = Object(N.a)(O.a.mark((function e(t) {
                    return O.a.wrap((function (e) {
                        for (; ;) switch (e.prev = e.next) {
                            case 0:
                                return e.next = 2, se({"allow-lan": t});
                            case 2:
                                return e.next = 4, d();
                            case 4:
                            case"end":
                                return e.stop()
                        }
                    }), e)
                })))).apply(this, arguments)
            }

            Object(a.useEffect)((function () {
                var e, t, n;
                C("socks5ProxyPort", null !== (e = null === p || void 0 === p ? void 0 : p.socksPort) && void 0 !== e ? e : 0), C("httpProxyPort", null !== (t = null === p || void 0 === p ? void 0 : p.port) && void 0 !== t ? t : 0), C("mixedProxyPort", null !== (n = null === p || void 0 === p ? void 0 : p.mixedPort) && void 0 !== n ? n : 0)
            }), [p, C]);
            var F = v.hostname, G = v.port, J = p.allowLan, V = p.mode,
                X = null !== (e = null === s || void 0 === s ? void 0 : s.startAtLogin) && void 0 !== e && e,
                Y = null !== (t = null === s || void 0 === s ? void 0 : s.systemProxy) && void 0 !== t && t,
                K = null !== (n = null === s || void 0 === s ? void 0 : s.isClashX) && void 0 !== n && n,
                q = Object(a.useMemo)((function () {
                    var e = [{label: x("values.global"), value: "Global"}, {
                        label: x("values.rules"),
                        value: "Rule"
                    }, {label: x("values.direct"), value: "Direct"}];
                    return c && e.push({label: x("values.script"), value: "Script"}), e
                }), [x, c]);
            return r.a.createElement("div", {className: "page"}, r.a.createElement(A, {title: x("title")}), r.a.createElement(U, {className: "settings-card"}, r.a.createElement(z, {
                gutter: 24,
                align: "middle"
            }, r.a.createElement(W, {span: 12}, r.a.createElement(W, {
                span: 14,
                offset: 1
            }, r.a.createElement("span", {className: "label"}, x("labels.startAtLogin"))), r.a.createElement(W, {
                span: 8,
                className: "value-column"
            }, r.a.createElement(M, {
                disabled: !(null === s || void 0 === s ? void 0 : s.isClashX),
                checked: X,
                onChange: function (e) {
                    return S.apply(this, arguments)
                }
            }))), r.a.createElement(W, {span: 12}, r.a.createElement(W, {
                span: 8,
                offset: 1
            }, r.a.createElement("span", {className: "label"}, x("labels.language"))), r.a.createElement(W, {
                span: 14,
                className: "value-column"
            }, r.a.createElement(_, {
                options: At, value: g, onSelect: function (e) {
                    y(e)
                }
            })))), r.a.createElement(z, {
                gutter: 24,
                align: "middle"
            }, r.a.createElement(W, {span: 12}, r.a.createElement(W, {
                span: 14,
                offset: 1
            }, r.a.createElement("span", {className: "label"}, x("labels.setAsSystemProxy"))), r.a.createElement(W, {
                span: 8,
                className: "value-column"
            }, r.a.createElement(M, {
                disabled: !K, checked: Y, onChange: function (e) {
                    return T.apply(this, arguments)
                }
            }))), r.a.createElement(W, {span: 12}, r.a.createElement(W, {
                span: 14,
                offset: 1
            }, r.a.createElement("span", {className: "label"}, x("labels.allowConnectFromLan"))), r.a.createElement(W, {
                span: 8,
                className: "value-column"
            }, r.a.createElement(M, {
                checked: J, onChange: function (e) {
                    return B.apply(this, arguments)
                }
            }))))), r.a.createElement(U, {className: "settings-card"}, r.a.createElement(z, {
                gutter: 24,
                align: "middle"
            }, r.a.createElement(W, {span: 12}, r.a.createElement(W, {
                span: 8,
                offset: 1
            }, r.a.createElement("span", {className: "label"}, x("labels.proxyMode"))), r.a.createElement(W, {
                span: 14,
                className: "value-column"
            }, r.a.createElement(_, {
                options: q, value: It()(V), onSelect: function (e) {
                    return P.apply(this, arguments)
                }
            }))), r.a.createElement(W, {span: 12}, r.a.createElement(W, {
                span: 14,
                offset: 1
            }, r.a.createElement("span", {className: "label"}, x("labels.socks5ProxyPort"))), r.a.createElement(W, {span: 8}, r.a.createElement($e, {
                disabled: K,
                value: j.socks5ProxyPort,
                onChange: function (e) {
                    return C("socks5ProxyPort", +e)
                },
                onBlur: function () {
                    return D.apply(this, arguments)
                }
            })))), r.a.createElement(z, {
                gutter: 24,
                align: "middle"
            }, r.a.createElement(W, {span: 12}, r.a.createElement(W, {
                span: 14,
                offset: 1
            }, r.a.createElement("span", {className: "label"}, x("labels.httpProxyPort"))), r.a.createElement(W, {span: 8}, r.a.createElement($e, {
                disabled: K,
                value: j.httpProxyPort,
                onChange: function (e) {
                    return C("httpProxyPort", +e)
                },
                onBlur: function () {
                    return L.apply(this, arguments)
                }
            }))), r.a.createElement(W, {span: 12}, r.a.createElement(W, {
                span: 14,
                offset: 1
            }, r.a.createElement("span", {className: "label"}, x("labels.mixedProxyPort"))), r.a.createElement(W, {span: 8}, r.a.createElement($e, {
                disabled: K,
                value: j.mixedProxyPort,
                onChange: function (e) {
                    return C("mixedProxyPort", +e)
                },
                onBlur: function () {
                    return I.apply(this, arguments)
                }
            })))), r.a.createElement(z, null, r.a.createElement(W, {span: 12}, r.a.createElement(W, {
                span: 12,
                offset: 1
            }, r.a.createElement("span", {className: "label"}, x("labels.externalController"))), r.a.createElement(W, {
                className: "external-controller",
                span: 10
            }, r.a.createElement("span", {
                className: u()({"modify-btn": !K}), onClick: function () {
                    return !K && m(!1)
                }
            }, "".concat(F, ":").concat(G)))))), r.a.createElement(U, {
                className: "clash-version",
                style: {display: "none"}
            }, r.a.createElement("span", {className: "check-icon"}, r.a.createElement(H, {
                type: "check",
                size: 20
            })), r.a.createElement("p", {className: "version-info"}, x("versionString")), r.a.createElement("span", {className: "check-update-btn"}, x("checkUpdate"))))
        }

        var Ht = n.p + "static/media/logo.45983944.png";

        function Mt(e) {
            var t = e.routes, n = Be().translation, r = Me(), c = r.version, s = r.premium, i = r.update, l = Ye().data,
                p = n("SideBar").t;
            Object(J.a)("version", i);
            var d = t.map((function (e) {
                var t = e.path, n = e.name, r = e.exact, c = e.noMobile;
                return a.createElement("li", {
                    className: u()("item", {"no-mobile": c}),
                    key: n
                }, a.createElement(o.b, {to: t, activeClassName: "active", exact: !!r}, p(n)))
            }));
            return a.createElement("div", {className: "sidebar"}, a.createElement("img", {
                src: Ht,
                alt: "logo",
                className: "sidebar-logo"
            }), a.createElement("ul", {className: "sidebar-menu"}, d), a.createElement("div", {className: "sidebar-version"}, a.createElement("span", {className: "sidebar-version-label"}, "Clash", (null === l || void 0 === l ? void 0 : l.isClashX) && "X", " ", p("Version")), a.createElement("span", {className: "sidebar-version-text"}, c), s && a.createElement("span", {className: "sidebar-version-label"}, "Premium")))
        }

        var Ut, zt = n(28), Wt = n(150), _t = n(71), Ft = function () {
            function e() {
                Object(p.a)(this, e), this.connections = new Map, this.saveDisconnection = !1
            }

            return Object(d.a)(e, [{
                key: "appendToSet", value: function (e) {
                    var t, n = e.reduce((function (e, t) {
                        return e.set(t.id, t)
                    }), new Map), a = Object(j.a)(this.connections.keys());
                    try {
                        for (a.s(); !(t = a.n()).done;) {
                            var r = t.value;
                            if (!n.has(r)) if (this.saveDisconnection) {
                                var c = this.connections.get(r);
                                c && (c.completed = !0, c.uploadSpeed = 0, c.downloadSpeed = 0)
                            } else this.connections.delete(r)
                        }
                    } catch (d) {
                        a.e(d)
                    } finally {
                        a.f()
                    }
                    var o, s = Object(j.a)(n.keys());
                    try {
                        for (s.s(); !(o = s.n()).done;) {
                            var i, l = o.value;
                            if (this.connections.has(l)) {
                                var u = this.connections.get(l), p = n.get(l);
                                null === (i = this.connections) || void 0 === i || i.set(l, Object(B.a)(Object(B.a)({}, p), {}, {
                                    uploadSpeed: p.upload - u.upload,
                                    downloadSpeed: p.download - u.download
                                }))
                            } else this.connections.set(l, Object(B.a)(Object(B.a)({}, n.get(l)), {}, {
                                uploadSpeed: 0,
                                downloadSpeed: 0
                            }))
                        }
                    } catch (d) {
                        s.e(d)
                    } finally {
                        s.f()
                    }
                }
            }, {
                key: "toggleSave", value: function () {
                    if (this.saveDisconnection) {
                        this.saveDisconnection = !1;
                        var e, t = Object(j.a)(this.connections.keys());
                        try {
                            for (t.s(); !(e = t.n()).done;) {
                                var n, a, r = e.value;
                                (null === (n = this.connections) || void 0 === n || null === (a = n.get(r)) || void 0 === a ? void 0 : a.completed) && this.connections.delete(r)
                            }
                        } catch (c) {
                            t.e(c)
                        } finally {
                            t.f()
                        }
                    } else this.saveDisconnection = !0;
                    return this.saveDisconnection
                }
            }, {
                key: "getConnections", value: function () {
                    return Object(ee.a)(this.connections.values())
                }
            }]), e
        }();
        !function (e) {
            e.Host = "host", e.Network = "network", e.Type = "type", e.Chains = "chains", e.Rule = "rule", e.Speed = "speed", e.Upload = "upload", e.Download = "download", e.SourceIP = "sourceIP", e.Time = "time"
        }(Ut || (Ut = {}));
        var Gt, Jt = new Set([Ut.Network, Ut.Type, Ut.Rule, Ut.Speed, Ut.Upload, Ut.Download, Ut.SourceIP, Ut.Time]);

        function Vt(e) {
            for (var t = ["B", "KB", "MB", "GB", "TB"], n = 0; ~~(e / 1024) && n < t.length;) e /= 1024, n++;
            return "".concat(0 === n ? e : e.toFixed(2), " ").concat(t[n])
        }

        function Xt() {
            var e = Be(), t = e.translation, n = e.lang, c = Object(a.useMemo)((function () {
                    return t("Connections").t
                }), [t]), o = R({uploadTotal: 0, downloadTotal: 0}), s = Object(E.a)(o, 2), i = s[0], l = s[1], p = I(),
                d = p.visible, m = p.show, f = p.hide;
            var v = function () {
                var e = Object(a.useMemo)((function () {
                        return new Ft
                    }), []), t = Object(a.useRef)(!0), n = Object(a.useState)([]), r = Object(E.a)(n, 2), c = r[0],
                    o = r[1], s = Object(a.useState)(!1), i = Object(E.a)(s, 2), l = i[0], u = i[1];
                return {
                    connections: c, feed: Object(a.useCallback)((function (n) {
                        e.appendToSet(n), t.current && o(e.getConnections()), t.current = !t.current
                    }), [e]), toggleSave: Object(a.useCallback)((function () {
                        var n = e.toggleSave();
                        u(n), n || o(e.getConnections()), t.current = !0
                    }), [e]), save: l
                }
            }(), h = v.connections, b = v.feed, y = v.save, g = v.toggleSave, x = Object(a.useMemo)((function () {
                return h.map((function (e) {
                    return {
                        id: e.id,
                        host: "".concat(e.metadata.host || e.metadata.destinationIP, ":").concat(e.metadata.destinationPort),
                        chains: e.chains.slice().reverse().join(" / "),
                        rule: e.rule === _t.RuleType.RuleSet ? "".concat(e.rule, "(").concat(e.rulePayload, ")") : e.rule,
                        time: new Date(e.start).getTime(),
                        upload: e.upload,
                        download: e.download,
                        sourceIP: e.metadata.sourceIP,
                        type: e.metadata.type,
                        network: e.metadata.network.toUpperCase(),
                        speed: {upload: e.uploadSpeed, download: e.downloadSpeed},
                        completed: !!e.completed
                    }
                }))
            }), [h]), w = Object(a.useRef)(null), k = Object(Wt.a)(w).x, C = Object(a.useMemo)((function () {
                return [{
                    Header: c("columns.".concat(Ut.Host)),
                    accessor: Ut.Host,
                    minWidth: 260,
                    width: 260
                }, {
                    Header: c("columns.".concat(Ut.Network)),
                    accessor: Ut.Network,
                    minWidth: 80,
                    width: 80
                }, {
                    Header: c("columns.".concat(Ut.Type)),
                    accessor: Ut.Type,
                    minWidth: 120,
                    width: 120
                }, {
                    Header: c("columns.".concat(Ut.Chains)),
                    accessor: Ut.Chains,
                    minWidth: 200,
                    width: 200
                }, {Header: c("columns.".concat(Ut.Rule)), accessor: Ut.Rule, minWidth: 140, width: 140}, {
                    id: Ut.Speed,
                    Header: c("columns.".concat(Ut.Speed)),
                    accessor: function (e) {
                        return [e.speed.upload, e.speed.download]
                    },
                    sortType: function (e, t) {
                        var n = e.original.speed, a = t.original.speed;
                        return n.download === a.download ? n.upload - a.upload : n.download - a.download
                    },
                    minWidth: 200,
                    width: 200,
                    sortDescFirst: !0
                }, {
                    Header: c("columns.".concat(Ut.Upload)),
                    accessor: Ut.Upload,
                    minWidth: 100,
                    width: 100,
                    sortDescFirst: !0
                }, {
                    Header: c("columns.".concat(Ut.Download)),
                    accessor: Ut.Download,
                    minWidth: 100,
                    width: 100,
                    sortDescFirst: !0
                }, {
                    Header: c("columns.".concat(Ut.SourceIP)),
                    accessor: Ut.SourceIP,
                    minWidth: 140,
                    width: 140
                }, {
                    Header: c("columns.".concat(Ut.Time)),
                    accessor: Ut.Time,
                    minWidth: 120,
                    width: 120,
                    sortType: function (e, t) {
                        return t.original.time - e.original.time
                    }
                }]
            }), [c]);
            Object(a.useLayoutEffect)((function () {
                var e = null;

                function t(e) {
                    var t, n = Object(j.a)(e);
                    try {
                        for (n.s(); !(t = n.n()).done;) {
                            var a = t.value;
                            l({uploadTotal: a.uploadTotal, downloadTotal: a.downloadTotal}), b(a.connections)
                        }
                    } catch (r) {
                        n.e(r)
                    } finally {
                        n.f()
                    }
                }

                return Object(N.a)(O.a.mark((function n() {
                    return O.a.wrap((function (n) {
                        for (; ;) switch (n.prev = n.next) {
                            case 0:
                                return n.next = 2, De();
                            case 2:
                                (e = n.sent).subscribe("data", t);
                            case 4:
                            case"end":
                                return n.stop()
                        }
                    }), n)
                })))(), function () {
                    e && (e.unsubscribe("data", t), e.destory())
                }
            }), [b, l]);
            var P = Object(zt.useTable)({
                    columns: C,
                    data: x,
                    autoResetSortBy: !1,
                    initialState: {sortBy: [{id: Ut.Time, desc: !1}]}
                }, zt.useResizeColumns, zt.useBlockLayout, zt.useSortBy), S = P.getTableProps, T = P.getTableBodyProps,
                L = P.headerGroups, D = P.rows, B = P.prepareRow, M = Object(a.useMemo)((function () {
                    return L[0]
                }), [L]), z = Object(a.useCallback)((function (e) {
                    switch (e.column.id) {
                        case Ut.Speed:
                            return function (e, t) {
                                switch (!0) {
                                    case 0 === e && 0 === t:
                                        return "-";
                                    case 0 !== e && 0 !== t:
                                        return "\u2191 ".concat(Vt(e), "/s \u2193 ").concat(Vt(t), "/s");
                                    case 0 !== e:
                                        return "\u2191 ".concat(Vt(e), "/s");
                                    default:
                                        return "\u2193 ".concat(Vt(t), "/s")
                                }
                            }(e.value[0], e.value[1]);
                        case Ut.Upload:
                        case Ut.Download:
                            return Vt(e.value);
                        case Ut.Time:
                            return gt(new Date(e.value), n);
                        default:
                            return e.value
                    }
                }), [n]);
            return r.a.createElement("div", {className: "page"}, r.a.createElement(A, {title: c("title")}, r.a.createElement("span", {className: "connections-filter total"}, "(".concat(c("total.text"), ": ").concat(c("total.upload"), " ").concat(Vt(i.uploadTotal), " ").concat(c("total.download"), " ").concat(Vt(i.downloadTotal), ")")), r.a.createElement(rt, {
                className: "connections-filter",
                checked: y,
                onChange: g
            }, c("keepClosed")), r.a.createElement(H, {
                className: "connections-filter dangerous",
                onClick: m,
                type: "close-all",
                size: 20
            })), r.a.createElement(U, {className: "connections-card"}, r.a.createElement("div", Object.assign({}, S(), {
                className: "connections",
                ref: w
            }), r.a.createElement("div", Object.assign({}, M.getHeaderGroupProps(), {className: "connections-header"}), M.headers.map((function (e, t) {
                var n = e, a = n.id;
                return r.a.createElement("div", Object.assign({}, n.getHeaderProps(), {
                    className: u()("connections-th", {
                        resizing: n.isResizing,
                        fixed: 0 !== k && n.id === Ut.Host
                    }), key: a
                }), r.a.createElement("div", n.getSortByToggleProps(), e.render("Header"), n.isSorted ? n.isSortedDesc ? " \u2193" : " \u2191" : null), t !== M.headers.length - 1 && r.a.createElement("div", Object.assign({}, n.getResizerProps(), {className: "connections-resizer"})))
            }))), r.a.createElement("div", Object.assign({}, T(), {className: "connections-body"}), D.map((function (e) {
                return B(e), r.a.createElement("div", Object.assign({}, e.getRowProps(), {
                    className: "connections-item",
                    key: e.original.id
                }), e.cells.map((function (t) {
                    var n = u()("connections-block", {
                        center: Jt.has(t.column.id),
                        completed: e.original.completed
                    }, {fixed: 0 !== k && t.column.id === Ut.Host});
                    return r.a.createElement("div", Object.assign({}, t.getCellProps(), {
                        className: n,
                        key: t.column.id
                    }), z(t))
                })))
            }))))), r.a.createElement(et, {
                title: c("closeAll.title"), show: d, onClose: f, onOk: function () {
                    (function () {
                        return Oe.apply(this, arguments)
                    })().finally((function () {
                        return f()
                    }))
                }
            }, c("closeAll.content")))
        }

        function Yt() {
            var e = (0, Be().translation)("Settings").t, t = qe(), n = t.data, c = t.update, o = t.fetch, s = Ie(),
                i = s.identity, l = s.set, u = R({hostname: "", port: "", secret: ""}), p = Object(E.a)(u, 2), d = p[0],
                m = p[1];
            return Object(a.useEffect)((function () {
                o()
            }), [o]), Object(a.useEffect)((function () {
                m({hostname: n.hostname, port: n.port, secret: n.secret})
            }), [n, m]), r.a.createElement(et, {
                show: !i,
                title: e("externalControllerSetting.title"),
                bodyClassName: "external-controller",
                onClose: function () {
                    return l(!0)
                },
                onOk: function () {
                    var e = d.hostname, t = d.port, n = d.secret;
                    c({hostname: e, port: t, secret: n})
                }
            }, r.a.createElement(nt, {
                type: "info",
                inside: !0
            }, r.a.createElement("p", null, e("externalControllerSetting.note"))), r.a.createElement(z, {
                gutter: 24,
                align: "middle"
            }, r.a.createElement(W, {
                span: 4,
                className: "title"
            }, e("externalControllerSetting.host")), r.a.createElement(W, {
                span: 20,
                className: "form"
            }, r.a.createElement($e, {
                align: "left", inside: !0, value: d.hostname, onChange: function (e) {
                    return m("hostname", e)
                }
            }))), r.a.createElement(z, {gutter: 24, align: "middle"}, r.a.createElement(W, {
                span: 4,
                className: "title"
            }, e("externalControllerSetting.port")), r.a.createElement(W, {
                span: 20,
                className: "form"
            }, r.a.createElement($e, {
                align: "left", inside: !0, value: d.port, onChange: function (e) {
                    return m("port", e)
                }
            }))), r.a.createElement(z, {gutter: 24, align: "middle"}, r.a.createElement(W, {
                span: 4,
                className: "title"
            }, e("externalControllerSetting.secret")), r.a.createElement(W, {
                span: 20,
                className: "form"
            }, r.a.createElement($e, {
                align: "left", inside: !0, value: d.secret, onChange: function (e) {
                    return m("secret", e)
                }
            }))))
        }

        function Kt() {
            Object(a.useEffect)((function () {
                Le()
            }), []);
            var e = [{path: "/proxies", name: "Proxies", component: Nt}, {
                path: "/logs",
                name: "Logs",
                component: Ct
            }, {path: "/rules", name: "Rules", component: Dt, noMobile: !0}, {
                path: "/connections",
                name: "Connections",
                component: Xt,
                noMobile: !0
            }, {path: "/settings", name: "Settings", component: Bt}];
            return r.a.createElement("div", {className: u()("app", {"not-clashx": !m()})}, r.a.createElement(Mt, {routes: e}), r.a.createElement("div", {className: "page-container"}, r.a.createElement(i.b, {
                exact: !0,
                path: "/",
                component: function () {
                    return r.a.createElement(i.a, {to: "/proxies"})
                }
            }), e.map((function (e) {
                return r.a.createElement(i.b, {exact: !1, path: e.path, key: e.path, component: e.component})
            }))), r.a.createElement(Yt, null))
        }

        function qt() {
            var e = document.getElementById("root"),
                t = r.a.createElement(s.a, null, r.a.createElement(o.a, null, r.a.createElement(Kt, null)));
            Object(c.render)(t, e)
        }

        m() ? (Gt = function () {
            return qt()
        }, f ? Gt() : f = new v(Gt)) : qt()
    }, 59: function (e, t) {
    }, 60: function (e, t) {
    }, 61: function (e, t, n) {
        "use strict"
    }, 62: function (e, t, n) {
        "use strict";
        var a;
        n.d(t, "a", (function () {
            return a
        })), function (e) {
            e.Domain = "Domain", e.DomainSuffix = "DomainSuffix", e.DomainKeyword = "DomainKeyword", e.GeoIP = "GeoIP", e.IPCIDR = "IPCIDR", e.SrcIPCIDR = "SrcIPCIDR", e.SrcPort = "SrcPort", e.DstPort = "DstPort", e.MATCH = "MATCH", e.RuleSet = "RuleSet"
        }(a || (a = {}))
    }, 63: function (e, t, n) {
        "use strict"
    }, 71: function (e, t, n) {
        "use strict";
        var a = n(59);
        n.o(a, "RuleType") && n.d(t, "RuleType", (function () {
            return a.RuleType
        }));
        var r = n(60);
        n.o(r, "RuleType") && n.d(t, "RuleType", (function () {
            return r.RuleType
        }));
        n(61);
        var c = n(62);
        n.d(t, "RuleType", (function () {
            return c.a
        }));
        n(63)
    }
}, [[148, 1, 2]]]);
