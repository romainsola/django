var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

/*! pace 1.0.2 */
(function () {
    var a,
        b,
        c,
        d,
        e,
        f,
        g,
        h,
        i,
        j,
        k,
        l,
        m,
        n,
        o,
        p,
        q,
        r,
        s,
        t,
        u,
        _v,
        w,
        x,
        y,
        z,
        A,
        B,
        C,
        D,
        E,
        F,
        G,
        H,
        I,
        J,
        K,
        L,
        M,
        N,
        O,
        P,
        Q,
        R,
        S,
        T,
        U,
        V,
        W,
        X = [].slice,
        Y = {}.hasOwnProperty,
        Z = function Z(a, b) {
        function c() {
            this.constructor = a;
        }for (var d in b) {
            Y.call(b, d) && (a[d] = b[d]);
        }return c.prototype = b.prototype, a.prototype = new c(), a.__super__ = b.prototype, a;
    },
        $ = [].indexOf || function (a) {
        for (var b = 0, c = this.length; c > b; b++) {
            if (b in this && this[b] === a) return b;
        }return -1;
    };for (u = { catchupTime: 100, initialRate: .03, minTime: 250, ghostTime: 100, maxProgressPerFrame: 20, easeFactor: 1.25, startOnPageLoad: !0, restartOnPushState: !0, restartOnRequestAfter: 500, target: "body", elements: { checkInterval: 100, selectors: ["body"] }, eventLag: { minSamples: 10, sampleCount: 3, lagThreshold: 3 }, ajax: { trackMethods: ["GET"], trackWebSockets: !0, ignoreURLs: [] } }, C = function C() {
        var a;return null != (a = "undefined" != typeof performance && null !== performance && "function" == typeof performance.now ? performance.now() : void 0) ? a : +new Date();
    }, E = window.requestAnimationFrame || window.mozRequestAnimationFrame || window.webkitRequestAnimationFrame || window.msRequestAnimationFrame, t = window.cancelAnimationFrame || window.mozCancelAnimationFrame, null == E && (E = function E(a) {
        return setTimeout(a, 50);
    }, t = function t(a) {
        return clearTimeout(a);
    }), G = function G(a) {
        var b, _c;return b = C(), (_c = function c() {
            var d;return d = C() - b, d >= 33 ? (b = C(), a(d, function () {
                return E(_c);
            })) : setTimeout(_c, 33 - d);
        })();
    }, F = function F() {
        var a, b, c;return c = arguments[0], b = arguments[1], a = 3 <= arguments.length ? X.call(arguments, 2) : [], "function" == typeof c[b] ? c[b].apply(c, a) : c[b];
    }, _v = function v() {
        var a, b, c, d, e, f, g;for (b = arguments[0], d = 2 <= arguments.length ? X.call(arguments, 1) : [], f = 0, g = d.length; g > f; f++) {
            if (c = d[f]) for (a in c) {
                Y.call(c, a) && (e = c[a], null != b[a] && "object" == _typeof(b[a]) && null != e && "object" == (typeof e === "undefined" ? "undefined" : _typeof(e)) ? _v(b[a], e) : b[a] = e);
            }
        }return b;
    }, q = function q(a) {
        var b, c, d, e, f;for (c = b = 0, e = 0, f = a.length; f > e; e++) {
            d = a[e], c += Math.abs(d), b++;
        }return c / b;
    }, x = function x(a, b) {
        var c, d, e;if (null == a && (a = "options"), null == b && (b = !0), e = document.querySelector("[data-pace-" + a + "]")) {
            if (c = e.getAttribute("data-pace-" + a), !b) return c;try {
                return JSON.parse(c);
            } catch (f) {
                return d = f, "undefined" != typeof console && null !== console ? console.error("Error parsing inline pace options", d) : void 0;
            }
        }
    }, g = function () {
        function a() {}return a.prototype.on = function (a, b, c, d) {
            var e;return null == d && (d = !1), null == this.bindings && (this.bindings = {}), null == (e = this.bindings)[a] && (e[a] = []), this.bindings[a].push({ handler: b, ctx: c, once: d });
        }, a.prototype.once = function (a, b, c) {
            return this.on(a, b, c, !0);
        }, a.prototype.off = function (a, b) {
            var c, d, e;if (null != (null != (d = this.bindings) ? d[a] : void 0)) {
                if (null == b) return delete this.bindings[a];for (c = 0, e = []; c < this.bindings[a].length;) {
                    e.push(this.bindings[a][c].handler === b ? this.bindings[a].splice(c, 1) : c++);
                }return e;
            }
        }, a.prototype.trigger = function () {
            var a, b, c, d, e, f, g, h, i;if (c = arguments[0], a = 2 <= arguments.length ? X.call(arguments, 1) : [], null != (g = this.bindings) ? g[c] : void 0) {
                for (e = 0, i = []; e < this.bindings[c].length;) {
                    h = this.bindings[c][e], d = h.handler, b = h.ctx, f = h.once, d.apply(null != b ? b : this, a), i.push(f ? this.bindings[c].splice(e, 1) : e++);
                }return i;
            }
        }, a;
    }(), j = window.Pace || {}, window.Pace = j, _v(j, g.prototype), D = j.options = _v({}, u, window.paceOptions, x()), U = ["ajax", "document", "eventLag", "elements"], Q = 0, S = U.length; S > Q; Q++) {
        K = U[Q], D[K] === !0 && (D[K] = u[K]);
    }i = function (a) {
        function b() {
            return V = b.__super__.constructor.apply(this, arguments);
        }return Z(b, a), b;
    }(Error), b = function () {
        function a() {
            this.progress = 0;
        }return a.prototype.getElement = function () {
            var a;if (null == this.el) {
                if (a = document.querySelector(D.target), !a) throw new i();this.el = document.createElement("div"), this.el.className = "pace pace-active", document.body.className = document.body.className.replace(/pace-done/g, ""), document.body.className += " pace-running", this.el.innerHTML = '<div class="pace-progress">\n  <div class="pace-progress-inner"></div>\n</div>\n<div class="pace-activity"></div>', null != a.firstChild ? a.insertBefore(this.el, a.firstChild) : a.appendChild(this.el);
            }return this.el;
        }, a.prototype.finish = function () {
            var a;return a = this.getElement(), a.className = a.className.replace("pace-active", ""), a.className += " pace-inactive", document.body.className = document.body.className.replace("pace-running", ""), document.body.className += " pace-done";
        }, a.prototype.update = function (a) {
            return this.progress = a, this.render();
        }, a.prototype.destroy = function () {
            try {
                this.getElement().parentNode.removeChild(this.getElement());
            } catch (a) {
                i = a;
            }return this.el = void 0;
        }, a.prototype.render = function () {
            var a, b, c, d, e, f, g;if (null == document.querySelector(D.target)) return !1;for (a = this.getElement(), d = "translate3d(" + this.progress + "%, 0, 0)", g = ["webkitTransform", "msTransform", "transform"], e = 0, f = g.length; f > e; e++) {
                b = g[e], a.children[0].style[b] = d;
            }return (!this.lastRenderedProgress || this.lastRenderedProgress | 0 !== this.progress | 0) && (a.children[0].setAttribute("data-progress-text", "" + (0 | this.progress) + "%"), this.progress >= 100 ? c = "99" : (c = this.progress < 10 ? "0" : "", c += 0 | this.progress), a.children[0].setAttribute("data-progress", "" + c)), this.lastRenderedProgress = this.progress;
        }, a.prototype.done = function () {
            return this.progress >= 100;
        }, a;
    }(), h = function () {
        function a() {
            this.bindings = {};
        }return a.prototype.trigger = function (a, b) {
            var c, d, e, f, g;if (null != this.bindings[a]) {
                for (f = this.bindings[a], g = [], d = 0, e = f.length; e > d; d++) {
                    c = f[d], g.push(c.call(this, b));
                }return g;
            }
        }, a.prototype.on = function (a, b) {
            var c;return null == (c = this.bindings)[a] && (c[a] = []), this.bindings[a].push(b);
        }, a;
    }(), P = window.XMLHttpRequest, O = window.XDomainRequest, N = window.WebSocket, w = function w(a, b) {
        var c, d, e;e = [];for (d in b.prototype) {
            try {
                e.push(null == a[d] && "function" != typeof b[d] ? "function" == typeof Object.defineProperty ? Object.defineProperty(a, d, { get: function get() {
                        return b.prototype[d];
                    }, configurable: !0, enumerable: !0 }) : a[d] = b.prototype[d] : void 0);
            } catch (f) {
                c = f;
            }
        }return e;
    }, A = [], j.ignore = function () {
        var a, b, c;return b = arguments[0], a = 2 <= arguments.length ? X.call(arguments, 1) : [], A.unshift("ignore"), c = b.apply(null, a), A.shift(), c;
    }, j.track = function () {
        var a, b, c;return b = arguments[0], a = 2 <= arguments.length ? X.call(arguments, 1) : [], A.unshift("track"), c = b.apply(null, a), A.shift(), c;
    }, J = function J(a) {
        var b;if (null == a && (a = "GET"), "track" === A[0]) return "force";if (!A.length && D.ajax) {
            if ("socket" === a && D.ajax.trackWebSockets) return !0;if (b = a.toUpperCase(), $.call(D.ajax.trackMethods, b) >= 0) return !0;
        }return !1;
    }, k = function (a) {
        function b() {
            var a,
                c = this;b.__super__.constructor.apply(this, arguments), a = function a(_a2) {
                var b;return b = _a2.open, _a2.open = function (d, e) {
                    return J(d) && c.trigger("request", { type: d, url: e, request: _a2 }), b.apply(_a2, arguments);
                };
            }, window.XMLHttpRequest = function (b) {
                var c;return c = new P(b), a(c), c;
            };try {
                w(window.XMLHttpRequest, P);
            } catch (d) {}if (null != O) {
                window.XDomainRequest = function () {
                    var b;return b = new O(), a(b), b;
                };try {
                    w(window.XDomainRequest, O);
                } catch (d) {}
            }if (null != N && D.ajax.trackWebSockets) {
                window.WebSocket = function (a, b) {
                    var d;return d = null != b ? new N(a, b) : new N(a), J("socket") && c.trigger("request", { type: "socket", url: a, protocols: b, request: d }), d;
                };try {
                    w(window.WebSocket, N);
                } catch (d) {}
            }
        }return Z(b, a), b;
    }(h), R = null, y = function y() {
        return null == R && (R = new k()), R;
    }, I = function I(a) {
        var b, c, d, e;for (e = D.ajax.ignoreURLs, c = 0, d = e.length; d > c; c++) {
            if (b = e[c], "string" == typeof b) {
                if (-1 !== a.indexOf(b)) return !0;
            } else if (b.test(a)) return !0;
        }return !1;
    }, y().on("request", function (b) {
        var c, d, e, f, g;return f = b.type, e = b.request, g = b.url, I(g) ? void 0 : j.running || D.restartOnRequestAfter === !1 && "force" !== J(f) ? void 0 : (d = arguments, c = D.restartOnRequestAfter || 0, "boolean" == typeof c && (c = 0), setTimeout(function () {
            var b, c, g, h, i, k;if (b = "socket" === f ? e.readyState < 2 : 0 < (h = e.readyState) && 4 > h) {
                for (j.restart(), i = j.sources, k = [], c = 0, g = i.length; g > c; c++) {
                    if (K = i[c], K instanceof a) {
                        K.watch.apply(K, d);break;
                    }k.push(void 0);
                }return k;
            }
        }, c));
    }), a = function () {
        function a() {
            var a = this;this.elements = [], y().on("request", function () {
                return a.watch.apply(a, arguments);
            });
        }return a.prototype.watch = function (a) {
            var b, c, d, e;return d = a.type, b = a.request, e = a.url, I(e) ? void 0 : (c = "socket" === d ? new n(b) : new o(b), this.elements.push(c));
        }, a;
    }(), o = function () {
        function a(a) {
            var b,
                c,
                d,
                e,
                f,
                g,
                h = this;if (this.progress = 0, null != window.ProgressEvent) for (c = null, a.addEventListener("progress", function (a) {
                return h.progress = a.lengthComputable ? 100 * a.loaded / a.total : h.progress + (100 - h.progress) / 2;
            }, !1), g = ["load", "abort", "timeout", "error"], d = 0, e = g.length; e > d; d++) {
                b = g[d], a.addEventListener(b, function () {
                    return h.progress = 100;
                }, !1);
            } else f = a.onreadystatechange, a.onreadystatechange = function () {
                var b;return 0 === (b = a.readyState) || 4 === b ? h.progress = 100 : 3 === a.readyState && (h.progress = 50), "function" == typeof f ? f.apply(null, arguments) : void 0;
            };
        }return a;
    }(), n = function () {
        function a(a) {
            var b,
                c,
                d,
                e,
                f = this;for (this.progress = 0, e = ["error", "open"], c = 0, d = e.length; d > c; c++) {
                b = e[c], a.addEventListener(b, function () {
                    return f.progress = 100;
                }, !1);
            }
        }return a;
    }(), d = function () {
        function a(a) {
            var b, c, d, f;for (null == a && (a = {}), this.elements = [], null == a.selectors && (a.selectors = []), f = a.selectors, c = 0, d = f.length; d > c; c++) {
                b = f[c], this.elements.push(new e(b));
            }
        }return a;
    }(), e = function () {
        function a(a) {
            this.selector = a, this.progress = 0, this.check();
        }return a.prototype.check = function () {
            var a = this;return document.querySelector(this.selector) ? this.done() : setTimeout(function () {
                return a.check();
            }, D.elements.checkInterval);
        }, a.prototype.done = function () {
            return this.progress = 100;
        }, a;
    }(), c = function () {
        function a() {
            var a,
                b,
                c = this;this.progress = null != (b = this.states[document.readyState]) ? b : 100, a = document.onreadystatechange, document.onreadystatechange = function () {
                return null != c.states[document.readyState] && (c.progress = c.states[document.readyState]), "function" == typeof a ? a.apply(null, arguments) : void 0;
            };
        }return a.prototype.states = { loading: 0, interactive: 50, complete: 100 }, a;
    }(), f = function () {
        function a() {
            var a,
                b,
                c,
                d,
                e,
                f = this;this.progress = 0, a = 0, e = [], d = 0, c = C(), b = setInterval(function () {
                var g;return g = C() - c - 50, c = C(), e.push(g), e.length > D.eventLag.sampleCount && e.shift(), a = q(e), ++d >= D.eventLag.minSamples && a < D.eventLag.lagThreshold ? (f.progress = 100, clearInterval(b)) : f.progress = 100 * (3 / (a + 3));
            }, 50);
        }return a;
    }(), m = function () {
        function a(a) {
            this.source = a, this.last = this.sinceLastUpdate = 0, this.rate = D.initialRate, this.catchup = 0, this.progress = this.lastProgress = 0, null != this.source && (this.progress = F(this.source, "progress"));
        }return a.prototype.tick = function (a, b) {
            var c;return null == b && (b = F(this.source, "progress")), b >= 100 && (this.done = !0), b === this.last ? this.sinceLastUpdate += a : (this.sinceLastUpdate && (this.rate = (b - this.last) / this.sinceLastUpdate), this.catchup = (b - this.progress) / D.catchupTime, this.sinceLastUpdate = 0, this.last = b), b > this.progress && (this.progress += this.catchup * a), c = 1 - Math.pow(this.progress / 100, D.easeFactor), this.progress += c * this.rate * a, this.progress = Math.min(this.lastProgress + D.maxProgressPerFrame, this.progress), this.progress = Math.max(0, this.progress), this.progress = Math.min(100, this.progress), this.lastProgress = this.progress, this.progress;
        }, a;
    }(), L = null, H = null, r = null, M = null, p = null, s = null, j.running = !1, z = function z() {
        return D.restartOnPushState ? j.restart() : void 0;
    }, null != window.history.pushState && (T = window.history.pushState, window.history.pushState = function () {
        return z(), T.apply(window.history, arguments);
    }), null != window.history.replaceState && (W = window.history.replaceState, window.history.replaceState = function () {
        return z(), W.apply(window.history, arguments);
    }), l = { ajax: a, elements: d, document: c, eventLag: f }, (B = function B() {
        var a, c, d, e, f, g, h, i;for (j.sources = L = [], g = ["ajax", "elements", "document", "eventLag"], c = 0, e = g.length; e > c; c++) {
            a = g[c], D[a] !== !1 && L.push(new l[a](D[a]));
        }for (i = null != (h = D.extraSources) ? h : [], d = 0, f = i.length; f > d; d++) {
            K = i[d], L.push(new K(D));
        }return j.bar = r = new b(), H = [], M = new m();
    })(), j.stop = function () {
        return j.trigger("stop"), j.running = !1, r.destroy(), s = !0, null != p && ("function" == typeof t && t(p), p = null), B();
    }, j.restart = function () {
        return j.trigger("restart"), j.stop(), j.start();
    }, j.go = function () {
        var a;return j.running = !0, r.render(), a = C(), s = !1, p = G(function (b, c) {
            var d, e, f, g, h, i, k, l, n, o, p, q, t, u, v, w;for (l = 100 - r.progress, e = p = 0, f = !0, i = q = 0, u = L.length; u > q; i = ++q) {
                for (K = L[i], o = null != H[i] ? H[i] : H[i] = [], h = null != (w = K.elements) ? w : [K], k = t = 0, v = h.length; v > t; k = ++t) {
                    g = h[k], n = null != o[k] ? o[k] : o[k] = new m(g), f &= n.done, n.done || (e++, p += n.tick(b));
                }
            }return d = p / e, r.update(M.tick(b, d)), r.done() || f || s ? (r.update(100), j.trigger("done"), setTimeout(function () {
                return r.finish(), j.running = !1, j.trigger("hide");
            }, Math.max(D.ghostTime, Math.max(D.minTime - (C() - a), 0)))) : c();
        });
    }, j.start = function (a) {
        _v(D, a), j.running = !0;try {
            r.render();
        } catch (b) {
            i = b;
        }return document.querySelector(".pace") ? (j.trigger("start"), j.go()) : setTimeout(j.start, 50);
    }, "function" == typeof define && define.amd ? define(["pace"], function () {
        return j;
    }) : "object" == (typeof exports === "undefined" ? "undefined" : _typeof(exports)) ? module.exports = j : D.startOnPageLoad && j.start();
}).call(this);
!function () {
    "use strict";
    function e(e) {
        function t(t, n) {
            var s,
                h,
                k = t == window,
                y = n && void 0 !== n.message ? n.message : void 0;if (n = e.extend({}, e.blockUI.defaults, n || {}), !n.ignoreIfBlocked || !e(t).data("blockUI.isBlocked")) {
                if (n.overlayCSS = e.extend({}, e.blockUI.defaults.overlayCSS, n.overlayCSS || {}), s = e.extend({}, e.blockUI.defaults.css, n.css || {}), n.onOverlayClick && (n.overlayCSS.cursor = "pointer"), h = e.extend({}, e.blockUI.defaults.themedCSS, n.themedCSS || {}), y = void 0 === y ? n.message : y, k && p && o(window, { fadeOut: 0 }), y && "string" != typeof y && (y.parentNode || y.jquery)) {
                    var m = y.jquery ? y[0] : y,
                        v = {};e(t).data("blockUI.history", v), v.el = m, v.parent = m.parentNode, v.display = m.style.display, v.position = m.style.position, v.parent && v.parent.removeChild(m);
                }e(t).data("blockUI.onUnblock", n.onUnblock);var g,
                    I,
                    w,
                    U,
                    x = n.baseZ;g = e(r || n.forceIframe ? '<iframe class="blockUI" style="z-index:' + x++ + ';display:none;border:none;margin:0;padding:0;position:absolute;width:100%;height:100%;top:0;left:0" src="' + n.iframeSrc + '"></iframe>' : '<div class="blockUI" style="display:none"></div>'), I = e(n.theme ? '<div class="blockUI blockOverlay ui-widget-overlay" style="z-index:' + x++ + ';display:none"></div>' : '<div class="blockUI blockOverlay" style="z-index:' + x++ + ';display:none;border:none;margin:0;padding:0;width:100%;height:100%;top:0;left:0"></div>'), n.theme && k ? (U = '<div class="blockUI ' + n.blockMsgClass + ' blockPage ui-dialog ui-widget ui-corner-all" style="z-index:' + (x + 10) + ';display:none;position:fixed">', n.title && (U += '<div class="ui-widget-header ui-dialog-titlebar ui-corner-all blockTitle">' + (n.title || "&nbsp;") + "</div>"), U += '<div class="ui-widget-content ui-dialog-content"></div>', U += "</div>") : n.theme ? (U = '<div class="blockUI ' + n.blockMsgClass + ' blockElement ui-dialog ui-widget ui-corner-all" style="z-index:' + (x + 10) + ';display:none;position:absolute">', n.title && (U += '<div class="ui-widget-header ui-dialog-titlebar ui-corner-all blockTitle">' + (n.title || "&nbsp;") + "</div>"), U += '<div class="ui-widget-content ui-dialog-content"></div>', U += "</div>") : U = k ? '<div class="blockUI ' + n.blockMsgClass + ' blockPage" style="z-index:' + (x + 10) + ';display:none;position:fixed"></div>' : '<div class="blockUI ' + n.blockMsgClass + ' blockElement" style="z-index:' + (x + 10) + ';display:none;position:absolute"></div>', w = e(U), y && (n.theme ? (w.css(h), w.addClass("ui-widget-content")) : w.css(s)), n.theme || I.css(n.overlayCSS), I.css("position", k ? "fixed" : "absolute"), (r || n.forceIframe) && g.css("opacity", 0);var C = [g, I, w],
                    S = e(k ? "body" : t);e.each(C, function () {
                    this.appendTo(S);
                }), n.theme && n.draggable && e.fn.draggable && w.draggable({ handle: ".ui-dialog-titlebar", cancel: "li" });var O = f && (!e.support.boxModel || e("object,embed", k ? null : t).length > 0);if (u || O) {
                    if (k && n.allowBodyStretch && e.support.boxModel && e("html,body").css("height", "100%"), (u || !e.support.boxModel) && !k) var E = d(t, "borderTopWidth"),
                        T = d(t, "borderLeftWidth"),
                        M = E ? "(0 - " + E + ")" : 0,
                        B = T ? "(0 - " + T + ")" : 0;e.each(C, function (e, t) {
                        var o = t[0].style;if (o.position = "absolute", 2 > e) k ? o.setExpression("height", "Math.max(document.body.scrollHeight, document.body.offsetHeight) - (jQuery.support.boxModel?0:" + n.quirksmodeOffsetHack + ') + "px"') : o.setExpression("height", 'this.parentNode.offsetHeight + "px"'), k ? o.setExpression("width", 'jQuery.support.boxModel && document.documentElement.clientWidth || document.body.clientWidth + "px"') : o.setExpression("width", 'this.parentNode.offsetWidth + "px"'), B && o.setExpression("left", B), M && o.setExpression("top", M);else if (n.centerY) k && o.setExpression("top", '(document.documentElement.clientHeight || document.body.clientHeight) / 2 - (this.offsetHeight / 2) + (blah = document.documentElement.scrollTop ? document.documentElement.scrollTop : document.body.scrollTop) + "px"'), o.marginTop = 0;else if (!n.centerY && k) {
                            var i = n.css && n.css.top ? parseInt(n.css.top, 10) : 0,
                                s = "((document.documentElement.scrollTop ? document.documentElement.scrollTop : document.body.scrollTop) + " + i + ') + "px"';o.setExpression("top", s);
                        }
                    });
                }if (y && (n.theme ? w.find(".ui-widget-content").append(y) : w.append(y), (y.jquery || y.nodeType) && e(y).show()), (r || n.forceIframe) && n.showOverlay && g.show(), n.fadeIn) {
                    var j = n.onBlock ? n.onBlock : c,
                        H = n.showOverlay && !y ? j : c,
                        z = y ? j : c;n.showOverlay && I._fadeIn(n.fadeIn, H), y && w._fadeIn(n.fadeIn, z);
                } else n.showOverlay && I.show(), y && w.show(), n.onBlock && n.onBlock.bind(w)();if (i(1, t, n), k ? (p = w[0], b = e(n.focusableElements, p), n.focusInput && setTimeout(l, 20)) : a(w[0], n.centerX, n.centerY), n.timeout) {
                    var W = setTimeout(function () {
                        k ? e.unblockUI(n) : e(t).unblock(n);
                    }, n.timeout);e(t).data("blockUI.timeout", W);
                }
            }
        }function o(t, o) {
            var s,
                l = t == window,
                a = e(t),
                d = a.data("blockUI.history"),
                c = a.data("blockUI.timeout");c && (clearTimeout(c), a.removeData("blockUI.timeout")), o = e.extend({}, e.blockUI.defaults, o || {}), i(0, t, o), null === o.onUnblock && (o.onUnblock = a.data("blockUI.onUnblock"), a.removeData("blockUI.onUnblock"));var r;r = l ? e("body").children().filter(".blockUI").add("body > .blockUI") : a.find(">.blockUI"), o.cursorReset && (r.length > 1 && (r[1].style.cursor = o.cursorReset), r.length > 2 && (r[2].style.cursor = o.cursorReset)), l && (p = b = null), o.fadeOut ? (s = r.length, r.stop().fadeOut(o.fadeOut, function () {
                0 === --s && n(r, d, o, t);
            })) : n(r, d, o, t);
        }function n(t, o, n, i) {
            var s = e(i);if (!s.data("blockUI.isBlocked")) {
                t.each(function (e, t) {
                    this.parentNode && this.parentNode.removeChild(this);
                }), o && o.el && (o.el.style.display = o.display, o.el.style.position = o.position, o.el.style.cursor = "default", o.parent && o.parent.appendChild(o.el), s.removeData("blockUI.history")), s.data("blockUI.static") && s.css("position", "static"), "function" == typeof n.onUnblock && n.onUnblock(i, n);var l = e(document.body),
                    a = l.width(),
                    d = l[0].style.width;l.width(a - 1).width(a), l[0].style.width = d;
            }
        }function i(t, o, n) {
            var i = o == window,
                l = e(o);if ((t || (!i || p) && (i || l.data("blockUI.isBlocked"))) && (l.data("blockUI.isBlocked", t), i && n.bindEvents && (!t || n.showOverlay))) {
                var a = "mousedown mouseup keydown keypress keyup touchstart touchend touchmove";t ? e(document).bind(a, n, s) : e(document).unbind(a, s);
            }
        }function s(t) {
            if ("keydown" === t.type && t.keyCode && 9 == t.keyCode && p && t.data.constrainTabKey) {
                var o = b,
                    n = !t.shiftKey && t.target === o[o.length - 1],
                    i = t.shiftKey && t.target === o[0];if (n || i) return setTimeout(function () {
                    l(i);
                }, 10), !1;
            }var s = t.data,
                a = e(t.target);return a.hasClass("blockOverlay") && s.onOverlayClick && s.onOverlayClick(t), a.parents("div." + s.blockMsgClass).length > 0 ? !0 : 0 === a.parents().children().filter("div.blockUI").length;
        }function l(e) {
            if (b) {
                var t = b[e === !0 ? b.length - 1 : 0];t && t.focus();
            }
        }function a(e, t, o) {
            var n = e.parentNode,
                i = e.style,
                s = (n.offsetWidth - e.offsetWidth) / 2 - d(n, "borderLeftWidth"),
                l = (n.offsetHeight - e.offsetHeight) / 2 - d(n, "borderTopWidth");t && (i.left = s > 0 ? s + "px" : "0"), o && (i.top = l > 0 ? l + "px" : "0");
        }function d(t, o) {
            return parseInt(e.css(t, o), 10) || 0;
        }e.fn._fadeIn = e.fn.fadeIn;var c = e.noop || function () {},
            r = /MSIE/.test(navigator.userAgent),
            u = /MSIE 6.0/.test(navigator.userAgent) && !/MSIE 8.0/.test(navigator.userAgent),
            f = (document.documentMode || 0, e.isFunction(document.createElement("div").style.setExpression));e.blockUI = function (e) {
            t(window, e);
        }, e.unblockUI = function (e) {
            o(window, e);
        }, e.growlUI = function (t, o, n, i) {
            var s = e('<div class="growlUI"></div>');t && s.append("<h1>" + t + "</h1>"), o && s.append("<h2>" + o + "</h2>"), void 0 === n && (n = 3e3);var l = function l(t) {
                t = t || {}, e.blockUI({ message: s, fadeIn: "undefined" != typeof t.fadeIn ? t.fadeIn : 700, fadeOut: "undefined" != typeof t.fadeOut ? t.fadeOut : 1e3, timeout: "undefined" != typeof t.timeout ? t.timeout : n, centerY: !1, showOverlay: !1, onUnblock: i, css: e.blockUI.defaults.growlCSS });
            };l();s.css("opacity");s.mouseover(function () {
                l({ fadeIn: 0, timeout: 3e4 });var t = e(".blockMsg");t.stop(), t.fadeTo(300, 1);
            }).mouseout(function () {
                e(".blockMsg").fadeOut(1e3);
            });
        }, e.fn.block = function (o) {
            if (this[0] === window) return e.blockUI(o), this;var n = e.extend({}, e.blockUI.defaults, o || {});return this.each(function () {
                var t = e(this);n.ignoreIfBlocked && t.data("blockUI.isBlocked") || t.unblock({ fadeOut: 0 });
            }), this.each(function () {
                "static" == e.css(this, "position") && (this.style.position = "relative", e(this).data("blockUI.static", !0)), this.style.zoom = 1, t(this, o);
            });
        }, e.fn.unblock = function (t) {
            return this[0] === window ? (e.unblockUI(t), this) : this.each(function () {
                o(this, t);
            });
        }, e.blockUI.version = 2.7, e.blockUI.defaults = { message: "<h1>Please wait...</h1>", title: null, draggable: !0, theme: !1, css: { padding: 0, margin: 0, width: "30%", top: "40%", left: "35%", textAlign: "center", color: "#000", border: "3px solid #aaa", backgroundColor: "#fff", cursor: "wait" }, themedCSS: { width: "30%", top: "40%", left: "35%" }, overlayCSS: { backgroundColor: "#000", opacity: .6, cursor: "wait" }, cursorReset: "default", growlCSS: { width: "350px", top: "10px", left: "", right: "10px", border: "none", padding: "5px", opacity: .6, cursor: "default", color: "#fff", backgroundColor: "#000", "-webkit-border-radius": "10px", "-moz-border-radius": "10px", "border-radius": "10px" }, iframeSrc: /^https/i.test(window.location.href || "") ? "javascript:false" : "about:blank", forceIframe: !1, baseZ: 1e3, centerX: !0, centerY: !0, allowBodyStretch: !0, bindEvents: !0, constrainTabKey: !0, fadeIn: 200, fadeOut: 400, timeout: 0, showOverlay: !0, focusInput: !0, focusableElements: ":input:enabled:visible", onBlock: null, onUnblock: null, onOverlayClick: null, quirksmodeOffsetHack: 4, blockMsgClass: "blockMsg", ignoreIfBlocked: !1 };var p = null,
            b = [];
    }"function" == typeof define && define.amd && define.amd.jQuery ? define(["jquery"], e) : e(jQuery);
}();
/*! jQuery v2.1.4 | (c) 2005, 2015 jQuery Foundation, Inc. | jquery.org/license */
!function (a, b) {
    "object" == (typeof module === "undefined" ? "undefined" : _typeof(module)) && "object" == _typeof(module.exports) ? module.exports = a.document ? b(a, !0) : function (a) {
        if (!a.document) throw new Error("jQuery requires a window with a document");return b(a);
    } : b(a);
}("undefined" != typeof window ? window : this, function (a, b) {
    var c = [],
        d = c.slice,
        e = c.concat,
        f = c.push,
        g = c.indexOf,
        h = {},
        i = h.toString,
        j = h.hasOwnProperty,
        k = {},
        l = a.document,
        m = "2.1.4",
        n = function n(a, b) {
        return new n.fn.init(a, b);
    },
        o = /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,
        p = /^-ms-/,
        q = /-([\da-z])/gi,
        r = function r(a, b) {
        return b.toUpperCase();
    };n.fn = n.prototype = { jquery: m, constructor: n, selector: "", length: 0, toArray: function toArray() {
            return d.call(this);
        }, get: function get(a) {
            return null != a ? 0 > a ? this[a + this.length] : this[a] : d.call(this);
        }, pushStack: function pushStack(a) {
            var b = n.merge(this.constructor(), a);return b.prevObject = this, b.context = this.context, b;
        }, each: function each(a, b) {
            return n.each(this, a, b);
        }, map: function map(a) {
            return this.pushStack(n.map(this, function (b, c) {
                return a.call(b, c, b);
            }));
        }, slice: function slice() {
            return this.pushStack(d.apply(this, arguments));
        }, first: function first() {
            return this.eq(0);
        }, last: function last() {
            return this.eq(-1);
        }, eq: function eq(a) {
            var b = this.length,
                c = +a + (0 > a ? b : 0);return this.pushStack(c >= 0 && b > c ? [this[c]] : []);
        }, end: function end() {
            return this.prevObject || this.constructor(null);
        }, push: f, sort: c.sort, splice: c.splice }, n.extend = n.fn.extend = function () {
        var a,
            b,
            c,
            d,
            e,
            f,
            g = arguments[0] || {},
            h = 1,
            i = arguments.length,
            j = !1;for ("boolean" == typeof g && (j = g, g = arguments[h] || {}, h++), "object" == (typeof g === "undefined" ? "undefined" : _typeof(g)) || n.isFunction(g) || (g = {}), h === i && (g = this, h--); i > h; h++) {
            if (null != (a = arguments[h])) for (b in a) {
                c = g[b], d = a[b], g !== d && (j && d && (n.isPlainObject(d) || (e = n.isArray(d))) ? (e ? (e = !1, f = c && n.isArray(c) ? c : []) : f = c && n.isPlainObject(c) ? c : {}, g[b] = n.extend(j, f, d)) : void 0 !== d && (g[b] = d));
            }
        }return g;
    }, n.extend({ expando: "jQuery" + (m + Math.random()).replace(/\D/g, ""), isReady: !0, error: function error(a) {
            throw new Error(a);
        }, noop: function noop() {}, isFunction: function isFunction(a) {
            return "function" === n.type(a);
        }, isArray: Array.isArray, isWindow: function isWindow(a) {
            return null != a && a === a.window;
        }, isNumeric: function isNumeric(a) {
            return !n.isArray(a) && a - parseFloat(a) + 1 >= 0;
        }, isPlainObject: function isPlainObject(a) {
            return "object" !== n.type(a) || a.nodeType || n.isWindow(a) ? !1 : a.constructor && !j.call(a.constructor.prototype, "isPrototypeOf") ? !1 : !0;
        }, isEmptyObject: function isEmptyObject(a) {
            var b;for (b in a) {
                return !1;
            }return !0;
        }, type: function type(a) {
            return null == a ? a + "" : "object" == (typeof a === "undefined" ? "undefined" : _typeof(a)) || "function" == typeof a ? h[i.call(a)] || "object" : typeof a === "undefined" ? "undefined" : _typeof(a);
        }, globalEval: function globalEval(a) {
            var b,
                c = eval;a = n.trim(a), a && (1 === a.indexOf("use strict") ? (b = l.createElement("script"), b.text = a, l.head.appendChild(b).parentNode.removeChild(b)) : c(a));
        }, camelCase: function camelCase(a) {
            return a.replace(p, "ms-").replace(q, r);
        }, nodeName: function nodeName(a, b) {
            return a.nodeName && a.nodeName.toLowerCase() === b.toLowerCase();
        }, each: function each(a, b, c) {
            var d,
                e = 0,
                f = a.length,
                g = s(a);if (c) {
                if (g) {
                    for (; f > e; e++) {
                        if (d = b.apply(a[e], c), d === !1) break;
                    }
                } else for (e in a) {
                    if (d = b.apply(a[e], c), d === !1) break;
                }
            } else if (g) {
                for (; f > e; e++) {
                    if (d = b.call(a[e], e, a[e]), d === !1) break;
                }
            } else for (e in a) {
                if (d = b.call(a[e], e, a[e]), d === !1) break;
            }return a;
        }, trim: function trim(a) {
            return null == a ? "" : (a + "").replace(o, "");
        }, makeArray: function makeArray(a, b) {
            var c = b || [];return null != a && (s(Object(a)) ? n.merge(c, "string" == typeof a ? [a] : a) : f.call(c, a)), c;
        }, inArray: function inArray(a, b, c) {
            return null == b ? -1 : g.call(b, a, c);
        }, merge: function merge(a, b) {
            for (var c = +b.length, d = 0, e = a.length; c > d; d++) {
                a[e++] = b[d];
            }return a.length = e, a;
        }, grep: function grep(a, b, c) {
            for (var d, e = [], f = 0, g = a.length, h = !c; g > f; f++) {
                d = !b(a[f], f), d !== h && e.push(a[f]);
            }return e;
        }, map: function map(a, b, c) {
            var d,
                f = 0,
                g = a.length,
                h = s(a),
                i = [];if (h) for (; g > f; f++) {
                d = b(a[f], f, c), null != d && i.push(d);
            } else for (f in a) {
                d = b(a[f], f, c), null != d && i.push(d);
            }return e.apply([], i);
        }, guid: 1, proxy: function proxy(a, b) {
            var c, e, f;return "string" == typeof b && (c = a[b], b = a, a = c), n.isFunction(a) ? (e = d.call(arguments, 2), f = function f() {
                return a.apply(b || this, e.concat(d.call(arguments)));
            }, f.guid = a.guid = a.guid || n.guid++, f) : void 0;
        }, now: Date.now, support: k }), n.each("Boolean Number String Function Array Date RegExp Object Error".split(" "), function (a, b) {
        h["[object " + b + "]"] = b.toLowerCase();
    });function s(a) {
        var b = "length" in a && a.length,
            c = n.type(a);return "function" === c || n.isWindow(a) ? !1 : 1 === a.nodeType && b ? !0 : "array" === c || 0 === b || "number" == typeof b && b > 0 && b - 1 in a;
    }var t = function (a) {
        var b,
            c,
            d,
            e,
            f,
            g,
            h,
            i,
            j,
            k,
            l,
            m,
            n,
            o,
            p,
            q,
            r,
            s,
            t,
            u = "sizzle" + 1 * new Date(),
            v = a.document,
            w = 0,
            x = 0,
            y = ha(),
            z = ha(),
            A = ha(),
            B = function B(a, b) {
            return a === b && (l = !0), 0;
        },
            C = 1 << 31,
            D = {}.hasOwnProperty,
            E = [],
            F = E.pop,
            G = E.push,
            H = E.push,
            I = E.slice,
            J = function J(a, b) {
            for (var c = 0, d = a.length; d > c; c++) {
                if (a[c] === b) return c;
            }return -1;
        },
            K = "checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",
            L = "[\\x20\\t\\r\\n\\f]",
            M = "(?:\\\\.|[\\w-]|[^\\x00-\\xa0])+",
            N = M.replace("w", "w#"),
            O = "\\[" + L + "*(" + M + ")(?:" + L + "*([*^$|!~]?=)" + L + "*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|(" + N + "))|)" + L + "*\\]",
            P = ":(" + M + ")(?:\\((('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|((?:\\\\.|[^\\\\()[\\]]|" + O + ")*)|.*)\\)|)",
            Q = new RegExp(L + "+", "g"),
            R = new RegExp("^" + L + "+|((?:^|[^\\\\])(?:\\\\.)*)" + L + "+$", "g"),
            S = new RegExp("^" + L + "*," + L + "*"),
            T = new RegExp("^" + L + "*([>+~]|" + L + ")" + L + "*"),
            U = new RegExp("=" + L + "*([^\\]'\"]*?)" + L + "*\\]", "g"),
            V = new RegExp(P),
            W = new RegExp("^" + N + "$"),
            X = { ID: new RegExp("^#(" + M + ")"), CLASS: new RegExp("^\\.(" + M + ")"), TAG: new RegExp("^(" + M.replace("w", "w*") + ")"), ATTR: new RegExp("^" + O), PSEUDO: new RegExp("^" + P), CHILD: new RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\(" + L + "*(even|odd|(([+-]|)(\\d*)n|)" + L + "*(?:([+-]|)" + L + "*(\\d+)|))" + L + "*\\)|)", "i"), bool: new RegExp("^(?:" + K + ")$", "i"), needsContext: new RegExp("^" + L + "*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\(" + L + "*((?:-\\d)?\\d*)" + L + "*\\)|)(?=[^-]|$)", "i") },
            Y = /^(?:input|select|textarea|button)$/i,
            Z = /^h\d$/i,
            $ = /^[^{]+\{\s*\[native \w/,
            _ = /^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,
            aa = /[+~]/,
            ba = /'|\\/g,
            ca = new RegExp("\\\\([\\da-f]{1,6}" + L + "?|(" + L + ")|.)", "ig"),
            da = function da(a, b, c) {
            var d = "0x" + b - 65536;return d !== d || c ? b : 0 > d ? String.fromCharCode(d + 65536) : String.fromCharCode(d >> 10 | 55296, 1023 & d | 56320);
        },
            ea = function ea() {
            m();
        };try {
            H.apply(E = I.call(v.childNodes), v.childNodes), E[v.childNodes.length].nodeType;
        } catch (fa) {
            H = { apply: E.length ? function (a, b) {
                    G.apply(a, I.call(b));
                } : function (a, b) {
                    var c = a.length,
                        d = 0;while (a[c++] = b[d++]) {}a.length = c - 1;
                } };
        }function ga(a, b, d, e) {
            var f, h, j, k, l, o, r, s, w, x;if ((b ? b.ownerDocument || b : v) !== n && m(b), b = b || n, d = d || [], k = b.nodeType, "string" != typeof a || !a || 1 !== k && 9 !== k && 11 !== k) return d;if (!e && p) {
                if (11 !== k && (f = _.exec(a))) if (j = f[1]) {
                    if (9 === k) {
                        if (h = b.getElementById(j), !h || !h.parentNode) return d;if (h.id === j) return d.push(h), d;
                    } else if (b.ownerDocument && (h = b.ownerDocument.getElementById(j)) && t(b, h) && h.id === j) return d.push(h), d;
                } else {
                    if (f[2]) return H.apply(d, b.getElementsByTagName(a)), d;if ((j = f[3]) && c.getElementsByClassName) return H.apply(d, b.getElementsByClassName(j)), d;
                }if (c.qsa && (!q || !q.test(a))) {
                    if (s = r = u, w = b, x = 1 !== k && a, 1 === k && "object" !== b.nodeName.toLowerCase()) {
                        o = g(a), (r = b.getAttribute("id")) ? s = r.replace(ba, "\\$&") : b.setAttribute("id", s), s = "[id='" + s + "'] ", l = o.length;while (l--) {
                            o[l] = s + ra(o[l]);
                        }w = aa.test(a) && pa(b.parentNode) || b, x = o.join(",");
                    }if (x) try {
                        return H.apply(d, w.querySelectorAll(x)), d;
                    } catch (y) {} finally {
                        r || b.removeAttribute("id");
                    }
                }
            }return i(a.replace(R, "$1"), b, d, e);
        }function ha() {
            var a = [];function b(c, e) {
                return a.push(c + " ") > d.cacheLength && delete b[a.shift()], b[c + " "] = e;
            }return b;
        }function ia(a) {
            return a[u] = !0, a;
        }function ja(a) {
            var b = n.createElement("div");try {
                return !!a(b);
            } catch (c) {
                return !1;
            } finally {
                b.parentNode && b.parentNode.removeChild(b), b = null;
            }
        }function ka(a, b) {
            var c = a.split("|"),
                e = a.length;while (e--) {
                d.attrHandle[c[e]] = b;
            }
        }function la(a, b) {
            var c = b && a,
                d = c && 1 === a.nodeType && 1 === b.nodeType && (~b.sourceIndex || C) - (~a.sourceIndex || C);if (d) return d;if (c) while (c = c.nextSibling) {
                if (c === b) return -1;
            }return a ? 1 : -1;
        }function ma(a) {
            return function (b) {
                var c = b.nodeName.toLowerCase();return "input" === c && b.type === a;
            };
        }function na(a) {
            return function (b) {
                var c = b.nodeName.toLowerCase();return ("input" === c || "button" === c) && b.type === a;
            };
        }function oa(a) {
            return ia(function (b) {
                return b = +b, ia(function (c, d) {
                    var e,
                        f = a([], c.length, b),
                        g = f.length;while (g--) {
                        c[e = f[g]] && (c[e] = !(d[e] = c[e]));
                    }
                });
            });
        }function pa(a) {
            return a && "undefined" != typeof a.getElementsByTagName && a;
        }c = ga.support = {}, f = ga.isXML = function (a) {
            var b = a && (a.ownerDocument || a).documentElement;return b ? "HTML" !== b.nodeName : !1;
        }, m = ga.setDocument = function (a) {
            var b,
                e,
                g = a ? a.ownerDocument || a : v;return g !== n && 9 === g.nodeType && g.documentElement ? (n = g, o = g.documentElement, e = g.defaultView, e && e !== e.top && (e.addEventListener ? e.addEventListener("unload", ea, !1) : e.attachEvent && e.attachEvent("onunload", ea)), p = !f(g), c.attributes = ja(function (a) {
                return a.className = "i", !a.getAttribute("className");
            }), c.getElementsByTagName = ja(function (a) {
                return a.appendChild(g.createComment("")), !a.getElementsByTagName("*").length;
            }), c.getElementsByClassName = $.test(g.getElementsByClassName), c.getById = ja(function (a) {
                return o.appendChild(a).id = u, !g.getElementsByName || !g.getElementsByName(u).length;
            }), c.getById ? (d.find.ID = function (a, b) {
                if ("undefined" != typeof b.getElementById && p) {
                    var c = b.getElementById(a);return c && c.parentNode ? [c] : [];
                }
            }, d.filter.ID = function (a) {
                var b = a.replace(ca, da);return function (a) {
                    return a.getAttribute("id") === b;
                };
            }) : (delete d.find.ID, d.filter.ID = function (a) {
                var b = a.replace(ca, da);return function (a) {
                    var c = "undefined" != typeof a.getAttributeNode && a.getAttributeNode("id");return c && c.value === b;
                };
            }), d.find.TAG = c.getElementsByTagName ? function (a, b) {
                return "undefined" != typeof b.getElementsByTagName ? b.getElementsByTagName(a) : c.qsa ? b.querySelectorAll(a) : void 0;
            } : function (a, b) {
                var c,
                    d = [],
                    e = 0,
                    f = b.getElementsByTagName(a);if ("*" === a) {
                    while (c = f[e++]) {
                        1 === c.nodeType && d.push(c);
                    }return d;
                }return f;
            }, d.find.CLASS = c.getElementsByClassName && function (a, b) {
                return p ? b.getElementsByClassName(a) : void 0;
            }, r = [], q = [], (c.qsa = $.test(g.querySelectorAll)) && (ja(function (a) {
                o.appendChild(a).innerHTML = "<a id='" + u + "'></a><select id='" + u + "-\f]' msallowcapture=''><option selected=''></option></select>", a.querySelectorAll("[msallowcapture^='']").length && q.push("[*^$]=" + L + "*(?:''|\"\")"), a.querySelectorAll("[selected]").length || q.push("\\[" + L + "*(?:value|" + K + ")"), a.querySelectorAll("[id~=" + u + "-]").length || q.push("~="), a.querySelectorAll(":checked").length || q.push(":checked"), a.querySelectorAll("a#" + u + "+*").length || q.push(".#.+[+~]");
            }), ja(function (a) {
                var b = g.createElement("input");b.setAttribute("type", "hidden"), a.appendChild(b).setAttribute("name", "D"), a.querySelectorAll("[name=d]").length && q.push("name" + L + "*[*^$|!~]?="), a.querySelectorAll(":enabled").length || q.push(":enabled", ":disabled"), a.querySelectorAll("*,:x"), q.push(",.*:");
            })), (c.matchesSelector = $.test(s = o.matches || o.webkitMatchesSelector || o.mozMatchesSelector || o.oMatchesSelector || o.msMatchesSelector)) && ja(function (a) {
                c.disconnectedMatch = s.call(a, "div"), s.call(a, "[s!='']:x"), r.push("!=", P);
            }), q = q.length && new RegExp(q.join("|")), r = r.length && new RegExp(r.join("|")), b = $.test(o.compareDocumentPosition), t = b || $.test(o.contains) ? function (a, b) {
                var c = 9 === a.nodeType ? a.documentElement : a,
                    d = b && b.parentNode;return a === d || !(!d || 1 !== d.nodeType || !(c.contains ? c.contains(d) : a.compareDocumentPosition && 16 & a.compareDocumentPosition(d)));
            } : function (a, b) {
                if (b) while (b = b.parentNode) {
                    if (b === a) return !0;
                }return !1;
            }, B = b ? function (a, b) {
                if (a === b) return l = !0, 0;var d = !a.compareDocumentPosition - !b.compareDocumentPosition;return d ? d : (d = (a.ownerDocument || a) === (b.ownerDocument || b) ? a.compareDocumentPosition(b) : 1, 1 & d || !c.sortDetached && b.compareDocumentPosition(a) === d ? a === g || a.ownerDocument === v && t(v, a) ? -1 : b === g || b.ownerDocument === v && t(v, b) ? 1 : k ? J(k, a) - J(k, b) : 0 : 4 & d ? -1 : 1);
            } : function (a, b) {
                if (a === b) return l = !0, 0;var c,
                    d = 0,
                    e = a.parentNode,
                    f = b.parentNode,
                    h = [a],
                    i = [b];if (!e || !f) return a === g ? -1 : b === g ? 1 : e ? -1 : f ? 1 : k ? J(k, a) - J(k, b) : 0;if (e === f) return la(a, b);c = a;while (c = c.parentNode) {
                    h.unshift(c);
                }c = b;while (c = c.parentNode) {
                    i.unshift(c);
                }while (h[d] === i[d]) {
                    d++;
                }return d ? la(h[d], i[d]) : h[d] === v ? -1 : i[d] === v ? 1 : 0;
            }, g) : n;
        }, ga.matches = function (a, b) {
            return ga(a, null, null, b);
        }, ga.matchesSelector = function (a, b) {
            if ((a.ownerDocument || a) !== n && m(a), b = b.replace(U, "='$1']"), !(!c.matchesSelector || !p || r && r.test(b) || q && q.test(b))) try {
                var d = s.call(a, b);if (d || c.disconnectedMatch || a.document && 11 !== a.document.nodeType) return d;
            } catch (e) {}return ga(b, n, null, [a]).length > 0;
        }, ga.contains = function (a, b) {
            return (a.ownerDocument || a) !== n && m(a), t(a, b);
        }, ga.attr = function (a, b) {
            (a.ownerDocument || a) !== n && m(a);var e = d.attrHandle[b.toLowerCase()],
                f = e && D.call(d.attrHandle, b.toLowerCase()) ? e(a, b, !p) : void 0;return void 0 !== f ? f : c.attributes || !p ? a.getAttribute(b) : (f = a.getAttributeNode(b)) && f.specified ? f.value : null;
        }, ga.error = function (a) {
            throw new Error("Syntax error, unrecognized expression: " + a);
        }, ga.uniqueSort = function (a) {
            var b,
                d = [],
                e = 0,
                f = 0;if (l = !c.detectDuplicates, k = !c.sortStable && a.slice(0), a.sort(B), l) {
                while (b = a[f++]) {
                    b === a[f] && (e = d.push(f));
                }while (e--) {
                    a.splice(d[e], 1);
                }
            }return k = null, a;
        }, e = ga.getText = function (a) {
            var b,
                c = "",
                d = 0,
                f = a.nodeType;if (f) {
                if (1 === f || 9 === f || 11 === f) {
                    if ("string" == typeof a.textContent) return a.textContent;for (a = a.firstChild; a; a = a.nextSibling) {
                        c += e(a);
                    }
                } else if (3 === f || 4 === f) return a.nodeValue;
            } else while (b = a[d++]) {
                c += e(b);
            }return c;
        }, d = ga.selectors = { cacheLength: 50, createPseudo: ia, match: X, attrHandle: {}, find: {}, relative: { ">": { dir: "parentNode", first: !0 }, " ": { dir: "parentNode" }, "+": { dir: "previousSibling", first: !0 }, "~": { dir: "previousSibling" } }, preFilter: { ATTR: function ATTR(a) {
                    return a[1] = a[1].replace(ca, da), a[3] = (a[3] || a[4] || a[5] || "").replace(ca, da), "~=" === a[2] && (a[3] = " " + a[3] + " "), a.slice(0, 4);
                }, CHILD: function CHILD(a) {
                    return a[1] = a[1].toLowerCase(), "nth" === a[1].slice(0, 3) ? (a[3] || ga.error(a[0]), a[4] = +(a[4] ? a[5] + (a[6] || 1) : 2 * ("even" === a[3] || "odd" === a[3])), a[5] = +(a[7] + a[8] || "odd" === a[3])) : a[3] && ga.error(a[0]), a;
                }, PSEUDO: function PSEUDO(a) {
                    var b,
                        c = !a[6] && a[2];return X.CHILD.test(a[0]) ? null : (a[3] ? a[2] = a[4] || a[5] || "" : c && V.test(c) && (b = g(c, !0)) && (b = c.indexOf(")", c.length - b) - c.length) && (a[0] = a[0].slice(0, b), a[2] = c.slice(0, b)), a.slice(0, 3));
                } }, filter: { TAG: function TAG(a) {
                    var b = a.replace(ca, da).toLowerCase();return "*" === a ? function () {
                        return !0;
                    } : function (a) {
                        return a.nodeName && a.nodeName.toLowerCase() === b;
                    };
                }, CLASS: function CLASS(a) {
                    var b = y[a + " "];return b || (b = new RegExp("(^|" + L + ")" + a + "(" + L + "|$)")) && y(a, function (a) {
                        return b.test("string" == typeof a.className && a.className || "undefined" != typeof a.getAttribute && a.getAttribute("class") || "");
                    });
                }, ATTR: function ATTR(a, b, c) {
                    return function (d) {
                        var e = ga.attr(d, a);return null == e ? "!=" === b : b ? (e += "", "=" === b ? e === c : "!=" === b ? e !== c : "^=" === b ? c && 0 === e.indexOf(c) : "*=" === b ? c && e.indexOf(c) > -1 : "$=" === b ? c && e.slice(-c.length) === c : "~=" === b ? (" " + e.replace(Q, " ") + " ").indexOf(c) > -1 : "|=" === b ? e === c || e.slice(0, c.length + 1) === c + "-" : !1) : !0;
                    };
                }, CHILD: function CHILD(a, b, c, d, e) {
                    var f = "nth" !== a.slice(0, 3),
                        g = "last" !== a.slice(-4),
                        h = "of-type" === b;return 1 === d && 0 === e ? function (a) {
                        return !!a.parentNode;
                    } : function (b, c, i) {
                        var j,
                            k,
                            l,
                            m,
                            n,
                            o,
                            p = f !== g ? "nextSibling" : "previousSibling",
                            q = b.parentNode,
                            r = h && b.nodeName.toLowerCase(),
                            s = !i && !h;if (q) {
                            if (f) {
                                while (p) {
                                    l = b;while (l = l[p]) {
                                        if (h ? l.nodeName.toLowerCase() === r : 1 === l.nodeType) return !1;
                                    }o = p = "only" === a && !o && "nextSibling";
                                }return !0;
                            }if (o = [g ? q.firstChild : q.lastChild], g && s) {
                                k = q[u] || (q[u] = {}), j = k[a] || [], n = j[0] === w && j[1], m = j[0] === w && j[2], l = n && q.childNodes[n];while (l = ++n && l && l[p] || (m = n = 0) || o.pop()) {
                                    if (1 === l.nodeType && ++m && l === b) {
                                        k[a] = [w, n, m];break;
                                    }
                                }
                            } else if (s && (j = (b[u] || (b[u] = {}))[a]) && j[0] === w) m = j[1];else while (l = ++n && l && l[p] || (m = n = 0) || o.pop()) {
                                if ((h ? l.nodeName.toLowerCase() === r : 1 === l.nodeType) && ++m && (s && ((l[u] || (l[u] = {}))[a] = [w, m]), l === b)) break;
                            }return m -= e, m === d || m % d === 0 && m / d >= 0;
                        }
                    };
                }, PSEUDO: function PSEUDO(a, b) {
                    var c,
                        e = d.pseudos[a] || d.setFilters[a.toLowerCase()] || ga.error("unsupported pseudo: " + a);return e[u] ? e(b) : e.length > 1 ? (c = [a, a, "", b], d.setFilters.hasOwnProperty(a.toLowerCase()) ? ia(function (a, c) {
                        var d,
                            f = e(a, b),
                            g = f.length;while (g--) {
                            d = J(a, f[g]), a[d] = !(c[d] = f[g]);
                        }
                    }) : function (a) {
                        return e(a, 0, c);
                    }) : e;
                } }, pseudos: { not: ia(function (a) {
                    var b = [],
                        c = [],
                        d = h(a.replace(R, "$1"));return d[u] ? ia(function (a, b, c, e) {
                        var f,
                            g = d(a, null, e, []),
                            h = a.length;while (h--) {
                            (f = g[h]) && (a[h] = !(b[h] = f));
                        }
                    }) : function (a, e, f) {
                        return b[0] = a, d(b, null, f, c), b[0] = null, !c.pop();
                    };
                }), has: ia(function (a) {
                    return function (b) {
                        return ga(a, b).length > 0;
                    };
                }), contains: ia(function (a) {
                    return a = a.replace(ca, da), function (b) {
                        return (b.textContent || b.innerText || e(b)).indexOf(a) > -1;
                    };
                }), lang: ia(function (a) {
                    return W.test(a || "") || ga.error("unsupported lang: " + a), a = a.replace(ca, da).toLowerCase(), function (b) {
                        var c;do {
                            if (c = p ? b.lang : b.getAttribute("xml:lang") || b.getAttribute("lang")) return c = c.toLowerCase(), c === a || 0 === c.indexOf(a + "-");
                        } while ((b = b.parentNode) && 1 === b.nodeType);return !1;
                    };
                }), target: function target(b) {
                    var c = a.location && a.location.hash;return c && c.slice(1) === b.id;
                }, root: function root(a) {
                    return a === o;
                }, focus: function focus(a) {
                    return a === n.activeElement && (!n.hasFocus || n.hasFocus()) && !!(a.type || a.href || ~a.tabIndex);
                }, enabled: function enabled(a) {
                    return a.disabled === !1;
                }, disabled: function disabled(a) {
                    return a.disabled === !0;
                }, checked: function checked(a) {
                    var b = a.nodeName.toLowerCase();return "input" === b && !!a.checked || "option" === b && !!a.selected;
                }, selected: function selected(a) {
                    return a.parentNode && a.parentNode.selectedIndex, a.selected === !0;
                }, empty: function empty(a) {
                    for (a = a.firstChild; a; a = a.nextSibling) {
                        if (a.nodeType < 6) return !1;
                    }return !0;
                }, parent: function parent(a) {
                    return !d.pseudos.empty(a);
                }, header: function header(a) {
                    return Z.test(a.nodeName);
                }, input: function input(a) {
                    return Y.test(a.nodeName);
                }, button: function button(a) {
                    var b = a.nodeName.toLowerCase();return "input" === b && "button" === a.type || "button" === b;
                }, text: function text(a) {
                    var b;return "input" === a.nodeName.toLowerCase() && "text" === a.type && (null == (b = a.getAttribute("type")) || "text" === b.toLowerCase());
                }, first: oa(function () {
                    return [0];
                }), last: oa(function (a, b) {
                    return [b - 1];
                }), eq: oa(function (a, b, c) {
                    return [0 > c ? c + b : c];
                }), even: oa(function (a, b) {
                    for (var c = 0; b > c; c += 2) {
                        a.push(c);
                    }return a;
                }), odd: oa(function (a, b) {
                    for (var c = 1; b > c; c += 2) {
                        a.push(c);
                    }return a;
                }), lt: oa(function (a, b, c) {
                    for (var d = 0 > c ? c + b : c; --d >= 0;) {
                        a.push(d);
                    }return a;
                }), gt: oa(function (a, b, c) {
                    for (var d = 0 > c ? c + b : c; ++d < b;) {
                        a.push(d);
                    }return a;
                }) } }, d.pseudos.nth = d.pseudos.eq;for (b in { radio: !0, checkbox: !0, file: !0, password: !0, image: !0 }) {
            d.pseudos[b] = ma(b);
        }for (b in { submit: !0, reset: !0 }) {
            d.pseudos[b] = na(b);
        }function qa() {}qa.prototype = d.filters = d.pseudos, d.setFilters = new qa(), g = ga.tokenize = function (a, b) {
            var c,
                e,
                f,
                g,
                h,
                i,
                j,
                k = z[a + " "];if (k) return b ? 0 : k.slice(0);h = a, i = [], j = d.preFilter;while (h) {
                (!c || (e = S.exec(h))) && (e && (h = h.slice(e[0].length) || h), i.push(f = [])), c = !1, (e = T.exec(h)) && (c = e.shift(), f.push({ value: c, type: e[0].replace(R, " ") }), h = h.slice(c.length));for (g in d.filter) {
                    !(e = X[g].exec(h)) || j[g] && !(e = j[g](e)) || (c = e.shift(), f.push({ value: c, type: g, matches: e }), h = h.slice(c.length));
                }if (!c) break;
            }return b ? h.length : h ? ga.error(a) : z(a, i).slice(0);
        };function ra(a) {
            for (var b = 0, c = a.length, d = ""; c > b; b++) {
                d += a[b].value;
            }return d;
        }function sa(a, b, c) {
            var d = b.dir,
                e = c && "parentNode" === d,
                f = x++;return b.first ? function (b, c, f) {
                while (b = b[d]) {
                    if (1 === b.nodeType || e) return a(b, c, f);
                }
            } : function (b, c, g) {
                var h,
                    i,
                    j = [w, f];if (g) {
                    while (b = b[d]) {
                        if ((1 === b.nodeType || e) && a(b, c, g)) return !0;
                    }
                } else while (b = b[d]) {
                    if (1 === b.nodeType || e) {
                        if (i = b[u] || (b[u] = {}), (h = i[d]) && h[0] === w && h[1] === f) return j[2] = h[2];if (i[d] = j, j[2] = a(b, c, g)) return !0;
                    }
                }
            };
        }function ta(a) {
            return a.length > 1 ? function (b, c, d) {
                var e = a.length;while (e--) {
                    if (!a[e](b, c, d)) return !1;
                }return !0;
            } : a[0];
        }function ua(a, b, c) {
            for (var d = 0, e = b.length; e > d; d++) {
                ga(a, b[d], c);
            }return c;
        }function va(a, b, c, d, e) {
            for (var f, g = [], h = 0, i = a.length, j = null != b; i > h; h++) {
                (f = a[h]) && (!c || c(f, d, e)) && (g.push(f), j && b.push(h));
            }return g;
        }function wa(a, b, c, d, e, f) {
            return d && !d[u] && (d = wa(d)), e && !e[u] && (e = wa(e, f)), ia(function (f, g, h, i) {
                var j,
                    k,
                    l,
                    m = [],
                    n = [],
                    o = g.length,
                    p = f || ua(b || "*", h.nodeType ? [h] : h, []),
                    q = !a || !f && b ? p : va(p, m, a, h, i),
                    r = c ? e || (f ? a : o || d) ? [] : g : q;if (c && c(q, r, h, i), d) {
                    j = va(r, n), d(j, [], h, i), k = j.length;while (k--) {
                        (l = j[k]) && (r[n[k]] = !(q[n[k]] = l));
                    }
                }if (f) {
                    if (e || a) {
                        if (e) {
                            j = [], k = r.length;while (k--) {
                                (l = r[k]) && j.push(q[k] = l);
                            }e(null, r = [], j, i);
                        }k = r.length;while (k--) {
                            (l = r[k]) && (j = e ? J(f, l) : m[k]) > -1 && (f[j] = !(g[j] = l));
                        }
                    }
                } else r = va(r === g ? r.splice(o, r.length) : r), e ? e(null, g, r, i) : H.apply(g, r);
            });
        }function xa(a) {
            for (var b, c, e, f = a.length, g = d.relative[a[0].type], h = g || d.relative[" "], i = g ? 1 : 0, k = sa(function (a) {
                return a === b;
            }, h, !0), l = sa(function (a) {
                return J(b, a) > -1;
            }, h, !0), m = [function (a, c, d) {
                var e = !g && (d || c !== j) || ((b = c).nodeType ? k(a, c, d) : l(a, c, d));return b = null, e;
            }]; f > i; i++) {
                if (c = d.relative[a[i].type]) m = [sa(ta(m), c)];else {
                    if (c = d.filter[a[i].type].apply(null, a[i].matches), c[u]) {
                        for (e = ++i; f > e; e++) {
                            if (d.relative[a[e].type]) break;
                        }return wa(i > 1 && ta(m), i > 1 && ra(a.slice(0, i - 1).concat({ value: " " === a[i - 2].type ? "*" : "" })).replace(R, "$1"), c, e > i && xa(a.slice(i, e)), f > e && xa(a = a.slice(e)), f > e && ra(a));
                    }m.push(c);
                }
            }return ta(m);
        }function ya(a, b) {
            var c = b.length > 0,
                e = a.length > 0,
                f = function f(_f, g, h, i, k) {
                var l,
                    m,
                    o,
                    p = 0,
                    q = "0",
                    r = _f && [],
                    s = [],
                    t = j,
                    u = _f || e && d.find.TAG("*", k),
                    v = w += null == t ? 1 : Math.random() || .1,
                    x = u.length;for (k && (j = g !== n && g); q !== x && null != (l = u[q]); q++) {
                    if (e && l) {
                        m = 0;while (o = a[m++]) {
                            if (o(l, g, h)) {
                                i.push(l);break;
                            }
                        }k && (w = v);
                    }c && ((l = !o && l) && p--, _f && r.push(l));
                }if (p += q, c && q !== p) {
                    m = 0;while (o = b[m++]) {
                        o(r, s, g, h);
                    }if (_f) {
                        if (p > 0) while (q--) {
                            r[q] || s[q] || (s[q] = F.call(i));
                        }s = va(s);
                    }H.apply(i, s), k && !_f && s.length > 0 && p + b.length > 1 && ga.uniqueSort(i);
                }return k && (w = v, j = t), r;
            };return c ? ia(f) : f;
        }return h = ga.compile = function (a, b) {
            var c,
                d = [],
                e = [],
                f = A[a + " "];if (!f) {
                b || (b = g(a)), c = b.length;while (c--) {
                    f = xa(b[c]), f[u] ? d.push(f) : e.push(f);
                }f = A(a, ya(e, d)), f.selector = a;
            }return f;
        }, i = ga.select = function (a, b, e, f) {
            var i,
                j,
                k,
                l,
                m,
                n = "function" == typeof a && a,
                o = !f && g(a = n.selector || a);if (e = e || [], 1 === o.length) {
                if (j = o[0] = o[0].slice(0), j.length > 2 && "ID" === (k = j[0]).type && c.getById && 9 === b.nodeType && p && d.relative[j[1].type]) {
                    if (b = (d.find.ID(k.matches[0].replace(ca, da), b) || [])[0], !b) return e;n && (b = b.parentNode), a = a.slice(j.shift().value.length);
                }i = X.needsContext.test(a) ? 0 : j.length;while (i--) {
                    if (k = j[i], d.relative[l = k.type]) break;if ((m = d.find[l]) && (f = m(k.matches[0].replace(ca, da), aa.test(j[0].type) && pa(b.parentNode) || b))) {
                        if (j.splice(i, 1), a = f.length && ra(j), !a) return H.apply(e, f), e;break;
                    }
                }
            }return (n || h(a, o))(f, b, !p, e, aa.test(a) && pa(b.parentNode) || b), e;
        }, c.sortStable = u.split("").sort(B).join("") === u, c.detectDuplicates = !!l, m(), c.sortDetached = ja(function (a) {
            return 1 & a.compareDocumentPosition(n.createElement("div"));
        }), ja(function (a) {
            return a.innerHTML = "<a href='#'></a>", "#" === a.firstChild.getAttribute("href");
        }) || ka("type|href|height|width", function (a, b, c) {
            return c ? void 0 : a.getAttribute(b, "type" === b.toLowerCase() ? 1 : 2);
        }), c.attributes && ja(function (a) {
            return a.innerHTML = "<input/>", a.firstChild.setAttribute("value", ""), "" === a.firstChild.getAttribute("value");
        }) || ka("value", function (a, b, c) {
            return c || "input" !== a.nodeName.toLowerCase() ? void 0 : a.defaultValue;
        }), ja(function (a) {
            return null == a.getAttribute("disabled");
        }) || ka(K, function (a, b, c) {
            var d;return c ? void 0 : a[b] === !0 ? b.toLowerCase() : (d = a.getAttributeNode(b)) && d.specified ? d.value : null;
        }), ga;
    }(a);n.find = t, n.expr = t.selectors, n.expr[":"] = n.expr.pseudos, n.unique = t.uniqueSort, n.text = t.getText, n.isXMLDoc = t.isXML, n.contains = t.contains;var u = n.expr.match.needsContext,
        v = /^<(\w+)\s*\/?>(?:<\/\1>|)$/,
        w = /^.[^:#\[\.,]*$/;function x(a, b, c) {
        if (n.isFunction(b)) return n.grep(a, function (a, d) {
            return !!b.call(a, d, a) !== c;
        });if (b.nodeType) return n.grep(a, function (a) {
            return a === b !== c;
        });if ("string" == typeof b) {
            if (w.test(b)) return n.filter(b, a, c);b = n.filter(b, a);
        }return n.grep(a, function (a) {
            return g.call(b, a) >= 0 !== c;
        });
    }n.filter = function (a, b, c) {
        var d = b[0];return c && (a = ":not(" + a + ")"), 1 === b.length && 1 === d.nodeType ? n.find.matchesSelector(d, a) ? [d] : [] : n.find.matches(a, n.grep(b, function (a) {
            return 1 === a.nodeType;
        }));
    }, n.fn.extend({ find: function find(a) {
            var b,
                c = this.length,
                d = [],
                e = this;if ("string" != typeof a) return this.pushStack(n(a).filter(function () {
                for (b = 0; c > b; b++) {
                    if (n.contains(e[b], this)) return !0;
                }
            }));for (b = 0; c > b; b++) {
                n.find(a, e[b], d);
            }return d = this.pushStack(c > 1 ? n.unique(d) : d), d.selector = this.selector ? this.selector + " " + a : a, d;
        }, filter: function filter(a) {
            return this.pushStack(x(this, a || [], !1));
        }, not: function not(a) {
            return this.pushStack(x(this, a || [], !0));
        }, is: function is(a) {
            return !!x(this, "string" == typeof a && u.test(a) ? n(a) : a || [], !1).length;
        } });var y,
        z = /^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]*))$/,
        A = n.fn.init = function (a, b) {
        var c, d;if (!a) return this;if ("string" == typeof a) {
            if (c = "<" === a[0] && ">" === a[a.length - 1] && a.length >= 3 ? [null, a, null] : z.exec(a), !c || !c[1] && b) return !b || b.jquery ? (b || y).find(a) : this.constructor(b).find(a);if (c[1]) {
                if (b = b instanceof n ? b[0] : b, n.merge(this, n.parseHTML(c[1], b && b.nodeType ? b.ownerDocument || b : l, !0)), v.test(c[1]) && n.isPlainObject(b)) for (c in b) {
                    n.isFunction(this[c]) ? this[c](b[c]) : this.attr(c, b[c]);
                }return this;
            }return d = l.getElementById(c[2]), d && d.parentNode && (this.length = 1, this[0] = d), this.context = l, this.selector = a, this;
        }return a.nodeType ? (this.context = this[0] = a, this.length = 1, this) : n.isFunction(a) ? "undefined" != typeof y.ready ? y.ready(a) : a(n) : (void 0 !== a.selector && (this.selector = a.selector, this.context = a.context), n.makeArray(a, this));
    };A.prototype = n.fn, y = n(l);var B = /^(?:parents|prev(?:Until|All))/,
        C = { children: !0, contents: !0, next: !0, prev: !0 };n.extend({ dir: function dir(a, b, c) {
            var d = [],
                e = void 0 !== c;while ((a = a[b]) && 9 !== a.nodeType) {
                if (1 === a.nodeType) {
                    if (e && n(a).is(c)) break;d.push(a);
                }
            }return d;
        }, sibling: function sibling(a, b) {
            for (var c = []; a; a = a.nextSibling) {
                1 === a.nodeType && a !== b && c.push(a);
            }return c;
        } }), n.fn.extend({ has: function has(a) {
            var b = n(a, this),
                c = b.length;return this.filter(function () {
                for (var a = 0; c > a; a++) {
                    if (n.contains(this, b[a])) return !0;
                }
            });
        }, closest: function closest(a, b) {
            for (var c, d = 0, e = this.length, f = [], g = u.test(a) || "string" != typeof a ? n(a, b || this.context) : 0; e > d; d++) {
                for (c = this[d]; c && c !== b; c = c.parentNode) {
                    if (c.nodeType < 11 && (g ? g.index(c) > -1 : 1 === c.nodeType && n.find.matchesSelector(c, a))) {
                        f.push(c);break;
                    }
                }
            }return this.pushStack(f.length > 1 ? n.unique(f) : f);
        }, index: function index(a) {
            return a ? "string" == typeof a ? g.call(n(a), this[0]) : g.call(this, a.jquery ? a[0] : a) : this[0] && this[0].parentNode ? this.first().prevAll().length : -1;
        }, add: function add(a, b) {
            return this.pushStack(n.unique(n.merge(this.get(), n(a, b))));
        }, addBack: function addBack(a) {
            return this.add(null == a ? this.prevObject : this.prevObject.filter(a));
        } });function D(a, b) {
        while ((a = a[b]) && 1 !== a.nodeType) {}return a;
    }n.each({ parent: function parent(a) {
            var b = a.parentNode;return b && 11 !== b.nodeType ? b : null;
        }, parents: function parents(a) {
            return n.dir(a, "parentNode");
        }, parentsUntil: function parentsUntil(a, b, c) {
            return n.dir(a, "parentNode", c);
        }, next: function next(a) {
            return D(a, "nextSibling");
        }, prev: function prev(a) {
            return D(a, "previousSibling");
        }, nextAll: function nextAll(a) {
            return n.dir(a, "nextSibling");
        }, prevAll: function prevAll(a) {
            return n.dir(a, "previousSibling");
        }, nextUntil: function nextUntil(a, b, c) {
            return n.dir(a, "nextSibling", c);
        }, prevUntil: function prevUntil(a, b, c) {
            return n.dir(a, "previousSibling", c);
        }, siblings: function siblings(a) {
            return n.sibling((a.parentNode || {}).firstChild, a);
        }, children: function children(a) {
            return n.sibling(a.firstChild);
        }, contents: function contents(a) {
            return a.contentDocument || n.merge([], a.childNodes);
        } }, function (a, b) {
        n.fn[a] = function (c, d) {
            var e = n.map(this, b, c);return "Until" !== a.slice(-5) && (d = c), d && "string" == typeof d && (e = n.filter(d, e)), this.length > 1 && (C[a] || n.unique(e), B.test(a) && e.reverse()), this.pushStack(e);
        };
    });var E = /\S+/g,
        F = {};function G(a) {
        var b = F[a] = {};return n.each(a.match(E) || [], function (a, c) {
            b[c] = !0;
        }), b;
    }n.Callbacks = function (a) {
        a = "string" == typeof a ? F[a] || G(a) : n.extend({}, a);var b,
            c,
            d,
            e,
            f,
            g,
            h = [],
            i = !a.once && [],
            j = function j(l) {
            for (b = a.memory && l, c = !0, g = e || 0, e = 0, f = h.length, d = !0; h && f > g; g++) {
                if (h[g].apply(l[0], l[1]) === !1 && a.stopOnFalse) {
                    b = !1;break;
                }
            }d = !1, h && (i ? i.length && j(i.shift()) : b ? h = [] : k.disable());
        },
            k = { add: function add() {
                if (h) {
                    var c = h.length;!function g(b) {
                        n.each(b, function (b, c) {
                            var d = n.type(c);"function" === d ? a.unique && k.has(c) || h.push(c) : c && c.length && "string" !== d && g(c);
                        });
                    }(arguments), d ? f = h.length : b && (e = c, j(b));
                }return this;
            }, remove: function remove() {
                return h && n.each(arguments, function (a, b) {
                    var c;while ((c = n.inArray(b, h, c)) > -1) {
                        h.splice(c, 1), d && (f >= c && f--, g >= c && g--);
                    }
                }), this;
            }, has: function has(a) {
                return a ? n.inArray(a, h) > -1 : !(!h || !h.length);
            }, empty: function empty() {
                return h = [], f = 0, this;
            }, disable: function disable() {
                return h = i = b = void 0, this;
            }, disabled: function disabled() {
                return !h;
            }, lock: function lock() {
                return i = void 0, b || k.disable(), this;
            }, locked: function locked() {
                return !i;
            }, fireWith: function fireWith(a, b) {
                return !h || c && !i || (b = b || [], b = [a, b.slice ? b.slice() : b], d ? i.push(b) : j(b)), this;
            }, fire: function fire() {
                return k.fireWith(this, arguments), this;
            }, fired: function fired() {
                return !!c;
            } };return k;
    }, n.extend({ Deferred: function Deferred(a) {
            var b = [["resolve", "done", n.Callbacks("once memory"), "resolved"], ["reject", "fail", n.Callbacks("once memory"), "rejected"], ["notify", "progress", n.Callbacks("memory")]],
                c = "pending",
                d = { state: function state() {
                    return c;
                }, always: function always() {
                    return e.done(arguments).fail(arguments), this;
                }, then: function then() {
                    var a = arguments;return n.Deferred(function (c) {
                        n.each(b, function (b, f) {
                            var g = n.isFunction(a[b]) && a[b];e[f[1]](function () {
                                var a = g && g.apply(this, arguments);a && n.isFunction(a.promise) ? a.promise().done(c.resolve).fail(c.reject).progress(c.notify) : c[f[0] + "With"](this === d ? c.promise() : this, g ? [a] : arguments);
                            });
                        }), a = null;
                    }).promise();
                }, promise: function promise(a) {
                    return null != a ? n.extend(a, d) : d;
                } },
                e = {};return d.pipe = d.then, n.each(b, function (a, f) {
                var g = f[2],
                    h = f[3];d[f[1]] = g.add, h && g.add(function () {
                    c = h;
                }, b[1 ^ a][2].disable, b[2][2].lock), e[f[0]] = function () {
                    return e[f[0] + "With"](this === e ? d : this, arguments), this;
                }, e[f[0] + "With"] = g.fireWith;
            }), d.promise(e), a && a.call(e, e), e;
        }, when: function when(a) {
            var b = 0,
                c = d.call(arguments),
                e = c.length,
                f = 1 !== e || a && n.isFunction(a.promise) ? e : 0,
                g = 1 === f ? a : n.Deferred(),
                h = function h(a, b, c) {
                return function (e) {
                    b[a] = this, c[a] = arguments.length > 1 ? d.call(arguments) : e, c === i ? g.notifyWith(b, c) : --f || g.resolveWith(b, c);
                };
            },
                i,
                j,
                k;if (e > 1) for (i = new Array(e), j = new Array(e), k = new Array(e); e > b; b++) {
                c[b] && n.isFunction(c[b].promise) ? c[b].promise().done(h(b, k, c)).fail(g.reject).progress(h(b, j, i)) : --f;
            }return f || g.resolveWith(k, c), g.promise();
        } });var H;n.fn.ready = function (a) {
        return n.ready.promise().done(a), this;
    }, n.extend({ isReady: !1, readyWait: 1, holdReady: function holdReady(a) {
            a ? n.readyWait++ : n.ready(!0);
        }, ready: function ready(a) {
            (a === !0 ? --n.readyWait : n.isReady) || (n.isReady = !0, a !== !0 && --n.readyWait > 0 || (H.resolveWith(l, [n]), n.fn.triggerHandler && (n(l).triggerHandler("ready"), n(l).off("ready"))));
        } });function I() {
        l.removeEventListener("DOMContentLoaded", I, !1), a.removeEventListener("load", I, !1), n.ready();
    }n.ready.promise = function (b) {
        return H || (H = n.Deferred(), "complete" === l.readyState ? setTimeout(n.ready) : (l.addEventListener("DOMContentLoaded", I, !1), a.addEventListener("load", I, !1))), H.promise(b);
    }, n.ready.promise();var J = n.access = function (a, b, c, d, e, f, g) {
        var h = 0,
            i = a.length,
            j = null == c;if ("object" === n.type(c)) {
            e = !0;for (h in c) {
                n.access(a, b, h, c[h], !0, f, g);
            }
        } else if (void 0 !== d && (e = !0, n.isFunction(d) || (g = !0), j && (g ? (b.call(a, d), b = null) : (j = b, b = function b(a, _b, c) {
            return j.call(n(a), c);
        })), b)) for (; i > h; h++) {
            b(a[h], c, g ? d : d.call(a[h], h, b(a[h], c)));
        }return e ? a : j ? b.call(a) : i ? b(a[0], c) : f;
    };n.acceptData = function (a) {
        return 1 === a.nodeType || 9 === a.nodeType || !+a.nodeType;
    };function K() {
        Object.defineProperty(this.cache = {}, 0, { get: function get() {
                return {};
            } }), this.expando = n.expando + K.uid++;
    }K.uid = 1, K.accepts = n.acceptData, K.prototype = { key: function key(a) {
            if (!K.accepts(a)) return 0;var b = {},
                c = a[this.expando];if (!c) {
                c = K.uid++;try {
                    b[this.expando] = { value: c }, Object.defineProperties(a, b);
                } catch (d) {
                    b[this.expando] = c, n.extend(a, b);
                }
            }return this.cache[c] || (this.cache[c] = {}), c;
        }, set: function set(a, b, c) {
            var d,
                e = this.key(a),
                f = this.cache[e];if ("string" == typeof b) f[b] = c;else if (n.isEmptyObject(f)) n.extend(this.cache[e], b);else for (d in b) {
                f[d] = b[d];
            }return f;
        }, get: function get(a, b) {
            var c = this.cache[this.key(a)];return void 0 === b ? c : c[b];
        }, access: function access(a, b, c) {
            var d;return void 0 === b || b && "string" == typeof b && void 0 === c ? (d = this.get(a, b), void 0 !== d ? d : this.get(a, n.camelCase(b))) : (this.set(a, b, c), void 0 !== c ? c : b);
        }, remove: function remove(a, b) {
            var c,
                d,
                e,
                f = this.key(a),
                g = this.cache[f];if (void 0 === b) this.cache[f] = {};else {
                n.isArray(b) ? d = b.concat(b.map(n.camelCase)) : (e = n.camelCase(b), b in g ? d = [b, e] : (d = e, d = d in g ? [d] : d.match(E) || [])), c = d.length;while (c--) {
                    delete g[d[c]];
                }
            }
        }, hasData: function hasData(a) {
            return !n.isEmptyObject(this.cache[a[this.expando]] || {});
        }, discard: function discard(a) {
            a[this.expando] && delete this.cache[a[this.expando]];
        } };var L = new K(),
        M = new K(),
        N = /^(?:\{[\w\W]*\}|\[[\w\W]*\])$/,
        O = /([A-Z])/g;function P(a, b, c) {
        var d;if (void 0 === c && 1 === a.nodeType) if (d = "data-" + b.replace(O, "-$1").toLowerCase(), c = a.getAttribute(d), "string" == typeof c) {
            try {
                c = "true" === c ? !0 : "false" === c ? !1 : "null" === c ? null : +c + "" === c ? +c : N.test(c) ? n.parseJSON(c) : c;
            } catch (e) {}M.set(a, b, c);
        } else c = void 0;return c;
    }n.extend({ hasData: function hasData(a) {
            return M.hasData(a) || L.hasData(a);
        }, data: function data(a, b, c) {
            return M.access(a, b, c);
        }, removeData: function removeData(a, b) {
            M.remove(a, b);
        }, _data: function _data(a, b, c) {
            return L.access(a, b, c);
        }, _removeData: function _removeData(a, b) {
            L.remove(a, b);
        } }), n.fn.extend({ data: function data(a, b) {
            var c,
                d,
                e,
                f = this[0],
                g = f && f.attributes;if (void 0 === a) {
                if (this.length && (e = M.get(f), 1 === f.nodeType && !L.get(f, "hasDataAttrs"))) {
                    c = g.length;while (c--) {
                        g[c] && (d = g[c].name, 0 === d.indexOf("data-") && (d = n.camelCase(d.slice(5)), P(f, d, e[d])));
                    }L.set(f, "hasDataAttrs", !0);
                }return e;
            }return "object" == (typeof a === "undefined" ? "undefined" : _typeof(a)) ? this.each(function () {
                M.set(this, a);
            }) : J(this, function (b) {
                var c,
                    d = n.camelCase(a);if (f && void 0 === b) {
                    if (c = M.get(f, a), void 0 !== c) return c;if (c = M.get(f, d), void 0 !== c) return c;if (c = P(f, d, void 0), void 0 !== c) return c;
                } else this.each(function () {
                    var c = M.get(this, d);M.set(this, d, b), -1 !== a.indexOf("-") && void 0 !== c && M.set(this, a, b);
                });
            }, null, b, arguments.length > 1, null, !0);
        }, removeData: function removeData(a) {
            return this.each(function () {
                M.remove(this, a);
            });
        } }), n.extend({ queue: function queue(a, b, c) {
            var d;return a ? (b = (b || "fx") + "queue", d = L.get(a, b), c && (!d || n.isArray(c) ? d = L.access(a, b, n.makeArray(c)) : d.push(c)), d || []) : void 0;
        }, dequeue: function dequeue(a, b) {
            b = b || "fx";var c = n.queue(a, b),
                d = c.length,
                e = c.shift(),
                f = n._queueHooks(a, b),
                g = function g() {
                n.dequeue(a, b);
            };"inprogress" === e && (e = c.shift(), d--), e && ("fx" === b && c.unshift("inprogress"), delete f.stop, e.call(a, g, f)), !d && f && f.empty.fire();
        }, _queueHooks: function _queueHooks(a, b) {
            var c = b + "queueHooks";return L.get(a, c) || L.access(a, c, { empty: n.Callbacks("once memory").add(function () {
                    L.remove(a, [b + "queue", c]);
                }) });
        } }), n.fn.extend({ queue: function queue(a, b) {
            var c = 2;return "string" != typeof a && (b = a, a = "fx", c--), arguments.length < c ? n.queue(this[0], a) : void 0 === b ? this : this.each(function () {
                var c = n.queue(this, a, b);n._queueHooks(this, a), "fx" === a && "inprogress" !== c[0] && n.dequeue(this, a);
            });
        }, dequeue: function dequeue(a) {
            return this.each(function () {
                n.dequeue(this, a);
            });
        }, clearQueue: function clearQueue(a) {
            return this.queue(a || "fx", []);
        }, promise: function promise(a, b) {
            var c,
                d = 1,
                e = n.Deferred(),
                f = this,
                g = this.length,
                h = function h() {
                --d || e.resolveWith(f, [f]);
            };"string" != typeof a && (b = a, a = void 0), a = a || "fx";while (g--) {
                c = L.get(f[g], a + "queueHooks"), c && c.empty && (d++, c.empty.add(h));
            }return h(), e.promise(b);
        } });var Q = /[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source,
        R = ["Top", "Right", "Bottom", "Left"],
        S = function S(a, b) {
        return a = b || a, "none" === n.css(a, "display") || !n.contains(a.ownerDocument, a);
    },
        T = /^(?:checkbox|radio)$/i;!function () {
        var a = l.createDocumentFragment(),
            b = a.appendChild(l.createElement("div")),
            c = l.createElement("input");c.setAttribute("type", "radio"), c.setAttribute("checked", "checked"), c.setAttribute("name", "t"), b.appendChild(c), k.checkClone = b.cloneNode(!0).cloneNode(!0).lastChild.checked, b.innerHTML = "<textarea>x</textarea>", k.noCloneChecked = !!b.cloneNode(!0).lastChild.defaultValue;
    }();var U = "undefined";k.focusinBubbles = "onfocusin" in a;var V = /^key/,
        W = /^(?:mouse|pointer|contextmenu)|click/,
        X = /^(?:focusinfocus|focusoutblur)$/,
        Y = /^([^.]*)(?:\.(.+)|)$/;function Z() {
        return !0;
    }function $() {
        return !1;
    }function _() {
        try {
            return l.activeElement;
        } catch (a) {}
    }n.event = { global: {}, add: function add(a, b, c, d, e) {
            var f,
                g,
                h,
                i,
                j,
                k,
                l,
                m,
                o,
                p,
                q,
                r = L.get(a);if (r) {
                c.handler && (f = c, c = f.handler, e = f.selector), c.guid || (c.guid = n.guid++), (i = r.events) || (i = r.events = {}), (g = r.handle) || (g = r.handle = function (b) {
                    return (typeof n === "undefined" ? "undefined" : _typeof(n)) !== U && n.event.triggered !== b.type ? n.event.dispatch.apply(a, arguments) : void 0;
                }), b = (b || "").match(E) || [""], j = b.length;while (j--) {
                    h = Y.exec(b[j]) || [], o = q = h[1], p = (h[2] || "").split(".").sort(), o && (l = n.event.special[o] || {}, o = (e ? l.delegateType : l.bindType) || o, l = n.event.special[o] || {}, k = n.extend({ type: o, origType: q, data: d, handler: c, guid: c.guid, selector: e, needsContext: e && n.expr.match.needsContext.test(e), namespace: p.join(".") }, f), (m = i[o]) || (m = i[o] = [], m.delegateCount = 0, l.setup && l.setup.call(a, d, p, g) !== !1 || a.addEventListener && a.addEventListener(o, g, !1)), l.add && (l.add.call(a, k), k.handler.guid || (k.handler.guid = c.guid)), e ? m.splice(m.delegateCount++, 0, k) : m.push(k), n.event.global[o] = !0);
                }
            }
        }, remove: function remove(a, b, c, d, e) {
            var f,
                g,
                h,
                i,
                j,
                k,
                l,
                m,
                o,
                p,
                q,
                r = L.hasData(a) && L.get(a);if (r && (i = r.events)) {
                b = (b || "").match(E) || [""], j = b.length;while (j--) {
                    if (h = Y.exec(b[j]) || [], o = q = h[1], p = (h[2] || "").split(".").sort(), o) {
                        l = n.event.special[o] || {}, o = (d ? l.delegateType : l.bindType) || o, m = i[o] || [], h = h[2] && new RegExp("(^|\\.)" + p.join("\\.(?:.*\\.|)") + "(\\.|$)"), g = f = m.length;while (f--) {
                            k = m[f], !e && q !== k.origType || c && c.guid !== k.guid || h && !h.test(k.namespace) || d && d !== k.selector && ("**" !== d || !k.selector) || (m.splice(f, 1), k.selector && m.delegateCount--, l.remove && l.remove.call(a, k));
                        }g && !m.length && (l.teardown && l.teardown.call(a, p, r.handle) !== !1 || n.removeEvent(a, o, r.handle), delete i[o]);
                    } else for (o in i) {
                        n.event.remove(a, o + b[j], c, d, !0);
                    }
                }n.isEmptyObject(i) && (delete r.handle, L.remove(a, "events"));
            }
        }, trigger: function trigger(b, c, d, e) {
            var f,
                g,
                h,
                i,
                k,
                m,
                o,
                p = [d || l],
                q = j.call(b, "type") ? b.type : b,
                r = j.call(b, "namespace") ? b.namespace.split(".") : [];if (g = h = d = d || l, 3 !== d.nodeType && 8 !== d.nodeType && !X.test(q + n.event.triggered) && (q.indexOf(".") >= 0 && (r = q.split("."), q = r.shift(), r.sort()), k = q.indexOf(":") < 0 && "on" + q, b = b[n.expando] ? b : new n.Event(q, "object" == (typeof b === "undefined" ? "undefined" : _typeof(b)) && b), b.isTrigger = e ? 2 : 3, b.namespace = r.join("."), b.namespace_re = b.namespace ? new RegExp("(^|\\.)" + r.join("\\.(?:.*\\.|)") + "(\\.|$)") : null, b.result = void 0, b.target || (b.target = d), c = null == c ? [b] : n.makeArray(c, [b]), o = n.event.special[q] || {}, e || !o.trigger || o.trigger.apply(d, c) !== !1)) {
                if (!e && !o.noBubble && !n.isWindow(d)) {
                    for (i = o.delegateType || q, X.test(i + q) || (g = g.parentNode); g; g = g.parentNode) {
                        p.push(g), h = g;
                    }h === (d.ownerDocument || l) && p.push(h.defaultView || h.parentWindow || a);
                }f = 0;while ((g = p[f++]) && !b.isPropagationStopped()) {
                    b.type = f > 1 ? i : o.bindType || q, m = (L.get(g, "events") || {})[b.type] && L.get(g, "handle"), m && m.apply(g, c), m = k && g[k], m && m.apply && n.acceptData(g) && (b.result = m.apply(g, c), b.result === !1 && b.preventDefault());
                }return b.type = q, e || b.isDefaultPrevented() || o._default && o._default.apply(p.pop(), c) !== !1 || !n.acceptData(d) || k && n.isFunction(d[q]) && !n.isWindow(d) && (h = d[k], h && (d[k] = null), n.event.triggered = q, d[q](), n.event.triggered = void 0, h && (d[k] = h)), b.result;
            }
        }, dispatch: function dispatch(a) {
            a = n.event.fix(a);var b,
                c,
                e,
                f,
                g,
                h = [],
                i = d.call(arguments),
                j = (L.get(this, "events") || {})[a.type] || [],
                k = n.event.special[a.type] || {};if (i[0] = a, a.delegateTarget = this, !k.preDispatch || k.preDispatch.call(this, a) !== !1) {
                h = n.event.handlers.call(this, a, j), b = 0;while ((f = h[b++]) && !a.isPropagationStopped()) {
                    a.currentTarget = f.elem, c = 0;while ((g = f.handlers[c++]) && !a.isImmediatePropagationStopped()) {
                        (!a.namespace_re || a.namespace_re.test(g.namespace)) && (a.handleObj = g, a.data = g.data, e = ((n.event.special[g.origType] || {}).handle || g.handler).apply(f.elem, i), void 0 !== e && (a.result = e) === !1 && (a.preventDefault(), a.stopPropagation()));
                    }
                }return k.postDispatch && k.postDispatch.call(this, a), a.result;
            }
        }, handlers: function handlers(a, b) {
            var c,
                d,
                e,
                f,
                g = [],
                h = b.delegateCount,
                i = a.target;if (h && i.nodeType && (!a.button || "click" !== a.type)) for (; i !== this; i = i.parentNode || this) {
                if (i.disabled !== !0 || "click" !== a.type) {
                    for (d = [], c = 0; h > c; c++) {
                        f = b[c], e = f.selector + " ", void 0 === d[e] && (d[e] = f.needsContext ? n(e, this).index(i) >= 0 : n.find(e, this, null, [i]).length), d[e] && d.push(f);
                    }d.length && g.push({ elem: i, handlers: d });
                }
            }return h < b.length && g.push({ elem: this, handlers: b.slice(h) }), g;
        }, props: "altKey bubbles cancelable ctrlKey currentTarget eventPhase metaKey relatedTarget shiftKey target timeStamp view which".split(" "), fixHooks: {}, keyHooks: { props: "char charCode key keyCode".split(" "), filter: function filter(a, b) {
                return null == a.which && (a.which = null != b.charCode ? b.charCode : b.keyCode), a;
            } }, mouseHooks: { props: "button buttons clientX clientY offsetX offsetY pageX pageY screenX screenY toElement".split(" "), filter: function filter(a, b) {
                var c,
                    d,
                    e,
                    f = b.button;return null == a.pageX && null != b.clientX && (c = a.target.ownerDocument || l, d = c.documentElement, e = c.body, a.pageX = b.clientX + (d && d.scrollLeft || e && e.scrollLeft || 0) - (d && d.clientLeft || e && e.clientLeft || 0), a.pageY = b.clientY + (d && d.scrollTop || e && e.scrollTop || 0) - (d && d.clientTop || e && e.clientTop || 0)), a.which || void 0 === f || (a.which = 1 & f ? 1 : 2 & f ? 3 : 4 & f ? 2 : 0), a;
            } }, fix: function fix(a) {
            if (a[n.expando]) return a;var b,
                c,
                d,
                e = a.type,
                f = a,
                g = this.fixHooks[e];g || (this.fixHooks[e] = g = W.test(e) ? this.mouseHooks : V.test(e) ? this.keyHooks : {}), d = g.props ? this.props.concat(g.props) : this.props, a = new n.Event(f), b = d.length;while (b--) {
                c = d[b], a[c] = f[c];
            }return a.target || (a.target = l), 3 === a.target.nodeType && (a.target = a.target.parentNode), g.filter ? g.filter(a, f) : a;
        }, special: { load: { noBubble: !0 }, focus: { trigger: function trigger() {
                    return this !== _() && this.focus ? (this.focus(), !1) : void 0;
                }, delegateType: "focusin" }, blur: { trigger: function trigger() {
                    return this === _() && this.blur ? (this.blur(), !1) : void 0;
                }, delegateType: "focusout" }, click: { trigger: function trigger() {
                    return "checkbox" === this.type && this.click && n.nodeName(this, "input") ? (this.click(), !1) : void 0;
                }, _default: function _default(a) {
                    return n.nodeName(a.target, "a");
                } }, beforeunload: { postDispatch: function postDispatch(a) {
                    void 0 !== a.result && a.originalEvent && (a.originalEvent.returnValue = a.result);
                } } }, simulate: function simulate(a, b, c, d) {
            var e = n.extend(new n.Event(), c, { type: a, isSimulated: !0, originalEvent: {} });d ? n.event.trigger(e, null, b) : n.event.dispatch.call(b, e), e.isDefaultPrevented() && c.preventDefault();
        } }, n.removeEvent = function (a, b, c) {
        a.removeEventListener && a.removeEventListener(b, c, !1);
    }, n.Event = function (a, b) {
        return this instanceof n.Event ? (a && a.type ? (this.originalEvent = a, this.type = a.type, this.isDefaultPrevented = a.defaultPrevented || void 0 === a.defaultPrevented && a.returnValue === !1 ? Z : $) : this.type = a, b && n.extend(this, b), this.timeStamp = a && a.timeStamp || n.now(), void (this[n.expando] = !0)) : new n.Event(a, b);
    }, n.Event.prototype = { isDefaultPrevented: $, isPropagationStopped: $, isImmediatePropagationStopped: $, preventDefault: function preventDefault() {
            var a = this.originalEvent;this.isDefaultPrevented = Z, a && a.preventDefault && a.preventDefault();
        }, stopPropagation: function stopPropagation() {
            var a = this.originalEvent;this.isPropagationStopped = Z, a && a.stopPropagation && a.stopPropagation();
        }, stopImmediatePropagation: function stopImmediatePropagation() {
            var a = this.originalEvent;this.isImmediatePropagationStopped = Z, a && a.stopImmediatePropagation && a.stopImmediatePropagation(), this.stopPropagation();
        } }, n.each({ mouseenter: "mouseover", mouseleave: "mouseout", pointerenter: "pointerover", pointerleave: "pointerout" }, function (a, b) {
        n.event.special[a] = { delegateType: b, bindType: b, handle: function handle(a) {
                var c,
                    d = this,
                    e = a.relatedTarget,
                    f = a.handleObj;return (!e || e !== d && !n.contains(d, e)) && (a.type = f.origType, c = f.handler.apply(this, arguments), a.type = b), c;
            } };
    }), k.focusinBubbles || n.each({ focus: "focusin", blur: "focusout" }, function (a, b) {
        var c = function c(a) {
            n.event.simulate(b, a.target, n.event.fix(a), !0);
        };n.event.special[b] = { setup: function setup() {
                var d = this.ownerDocument || this,
                    e = L.access(d, b);e || d.addEventListener(a, c, !0), L.access(d, b, (e || 0) + 1);
            }, teardown: function teardown() {
                var d = this.ownerDocument || this,
                    e = L.access(d, b) - 1;e ? L.access(d, b, e) : (d.removeEventListener(a, c, !0), L.remove(d, b));
            } };
    }), n.fn.extend({ on: function on(a, b, c, d, e) {
            var f, g;if ("object" == (typeof a === "undefined" ? "undefined" : _typeof(a))) {
                "string" != typeof b && (c = c || b, b = void 0);for (g in a) {
                    this.on(g, b, c, a[g], e);
                }return this;
            }if (null == c && null == d ? (d = b, c = b = void 0) : null == d && ("string" == typeof b ? (d = c, c = void 0) : (d = c, c = b, b = void 0)), d === !1) d = $;else if (!d) return this;return 1 === e && (f = d, d = function d(a) {
                return n().off(a), f.apply(this, arguments);
            }, d.guid = f.guid || (f.guid = n.guid++)), this.each(function () {
                n.event.add(this, a, d, c, b);
            });
        }, one: function one(a, b, c, d) {
            return this.on(a, b, c, d, 1);
        }, off: function off(a, b, c) {
            var d, e;if (a && a.preventDefault && a.handleObj) return d = a.handleObj, n(a.delegateTarget).off(d.namespace ? d.origType + "." + d.namespace : d.origType, d.selector, d.handler), this;if ("object" == (typeof a === "undefined" ? "undefined" : _typeof(a))) {
                for (e in a) {
                    this.off(e, b, a[e]);
                }return this;
            }return (b === !1 || "function" == typeof b) && (c = b, b = void 0), c === !1 && (c = $), this.each(function () {
                n.event.remove(this, a, c, b);
            });
        }, trigger: function trigger(a, b) {
            return this.each(function () {
                n.event.trigger(a, b, this);
            });
        }, triggerHandler: function triggerHandler(a, b) {
            var c = this[0];return c ? n.event.trigger(a, b, c, !0) : void 0;
        } });var aa = /<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:]+)[^>]*)\/>/gi,
        ba = /<([\w:]+)/,
        ca = /<|&#?\w+;/,
        da = /<(?:script|style|link)/i,
        ea = /checked\s*(?:[^=]|=\s*.checked.)/i,
        fa = /^$|\/(?:java|ecma)script/i,
        ga = /^true\/(.*)/,
        ha = /^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g,
        ia = { option: [1, "<select multiple='multiple'>", "</select>"], thead: [1, "<table>", "</table>"], col: [2, "<table><colgroup>", "</colgroup></table>"], tr: [2, "<table><tbody>", "</tbody></table>"], td: [3, "<table><tbody><tr>", "</tr></tbody></table>"], _default: [0, "", ""] };ia.optgroup = ia.option, ia.tbody = ia.tfoot = ia.colgroup = ia.caption = ia.thead, ia.th = ia.td;function ja(a, b) {
        return n.nodeName(a, "table") && n.nodeName(11 !== b.nodeType ? b : b.firstChild, "tr") ? a.getElementsByTagName("tbody")[0] || a.appendChild(a.ownerDocument.createElement("tbody")) : a;
    }function ka(a) {
        return a.type = (null !== a.getAttribute("type")) + "/" + a.type, a;
    }function la(a) {
        var b = ga.exec(a.type);return b ? a.type = b[1] : a.removeAttribute("type"), a;
    }function ma(a, b) {
        for (var c = 0, d = a.length; d > c; c++) {
            L.set(a[c], "globalEval", !b || L.get(b[c], "globalEval"));
        }
    }function na(a, b) {
        var c, d, e, f, g, h, i, j;if (1 === b.nodeType) {
            if (L.hasData(a) && (f = L.access(a), g = L.set(b, f), j = f.events)) {
                delete g.handle, g.events = {};for (e in j) {
                    for (c = 0, d = j[e].length; d > c; c++) {
                        n.event.add(b, e, j[e][c]);
                    }
                }
            }M.hasData(a) && (h = M.access(a), i = n.extend({}, h), M.set(b, i));
        }
    }function oa(a, b) {
        var c = a.getElementsByTagName ? a.getElementsByTagName(b || "*") : a.querySelectorAll ? a.querySelectorAll(b || "*") : [];return void 0 === b || b && n.nodeName(a, b) ? n.merge([a], c) : c;
    }function pa(a, b) {
        var c = b.nodeName.toLowerCase();"input" === c && T.test(a.type) ? b.checked = a.checked : ("input" === c || "textarea" === c) && (b.defaultValue = a.defaultValue);
    }n.extend({ clone: function clone(a, b, c) {
            var d,
                e,
                f,
                g,
                h = a.cloneNode(!0),
                i = n.contains(a.ownerDocument, a);if (!(k.noCloneChecked || 1 !== a.nodeType && 11 !== a.nodeType || n.isXMLDoc(a))) for (g = oa(h), f = oa(a), d = 0, e = f.length; e > d; d++) {
                pa(f[d], g[d]);
            }if (b) if (c) for (f = f || oa(a), g = g || oa(h), d = 0, e = f.length; e > d; d++) {
                na(f[d], g[d]);
            } else na(a, h);return g = oa(h, "script"), g.length > 0 && ma(g, !i && oa(a, "script")), h;
        }, buildFragment: function buildFragment(a, b, c, d) {
            for (var e, f, g, h, i, j, k = b.createDocumentFragment(), l = [], m = 0, o = a.length; o > m; m++) {
                if (e = a[m], e || 0 === e) if ("object" === n.type(e)) n.merge(l, e.nodeType ? [e] : e);else if (ca.test(e)) {
                    f = f || k.appendChild(b.createElement("div")), g = (ba.exec(e) || ["", ""])[1].toLowerCase(), h = ia[g] || ia._default, f.innerHTML = h[1] + e.replace(aa, "<$1></$2>") + h[2], j = h[0];while (j--) {
                        f = f.lastChild;
                    }n.merge(l, f.childNodes), f = k.firstChild, f.textContent = "";
                } else l.push(b.createTextNode(e));
            }k.textContent = "", m = 0;while (e = l[m++]) {
                if ((!d || -1 === n.inArray(e, d)) && (i = n.contains(e.ownerDocument, e), f = oa(k.appendChild(e), "script"), i && ma(f), c)) {
                    j = 0;while (e = f[j++]) {
                        fa.test(e.type || "") && c.push(e);
                    }
                }
            }return k;
        }, cleanData: function cleanData(a) {
            for (var b, c, d, e, f = n.event.special, g = 0; void 0 !== (c = a[g]); g++) {
                if (n.acceptData(c) && (e = c[L.expando], e && (b = L.cache[e]))) {
                    if (b.events) for (d in b.events) {
                        f[d] ? n.event.remove(c, d) : n.removeEvent(c, d, b.handle);
                    }L.cache[e] && delete L.cache[e];
                }delete M.cache[c[M.expando]];
            }
        } }), n.fn.extend({ text: function text(a) {
            return J(this, function (a) {
                return void 0 === a ? n.text(this) : this.empty().each(function () {
                    (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) && (this.textContent = a);
                });
            }, null, a, arguments.length);
        }, append: function append() {
            return this.domManip(arguments, function (a) {
                if (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) {
                    var b = ja(this, a);b.appendChild(a);
                }
            });
        }, prepend: function prepend() {
            return this.domManip(arguments, function (a) {
                if (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) {
                    var b = ja(this, a);b.insertBefore(a, b.firstChild);
                }
            });
        }, before: function before() {
            return this.domManip(arguments, function (a) {
                this.parentNode && this.parentNode.insertBefore(a, this);
            });
        }, after: function after() {
            return this.domManip(arguments, function (a) {
                this.parentNode && this.parentNode.insertBefore(a, this.nextSibling);
            });
        }, remove: function remove(a, b) {
            for (var c, d = a ? n.filter(a, this) : this, e = 0; null != (c = d[e]); e++) {
                b || 1 !== c.nodeType || n.cleanData(oa(c)), c.parentNode && (b && n.contains(c.ownerDocument, c) && ma(oa(c, "script")), c.parentNode.removeChild(c));
            }return this;
        }, empty: function empty() {
            for (var a, b = 0; null != (a = this[b]); b++) {
                1 === a.nodeType && (n.cleanData(oa(a, !1)), a.textContent = "");
            }return this;
        }, clone: function clone(a, b) {
            return a = null == a ? !1 : a, b = null == b ? a : b, this.map(function () {
                return n.clone(this, a, b);
            });
        }, html: function html(a) {
            return J(this, function (a) {
                var b = this[0] || {},
                    c = 0,
                    d = this.length;if (void 0 === a && 1 === b.nodeType) return b.innerHTML;if ("string" == typeof a && !da.test(a) && !ia[(ba.exec(a) || ["", ""])[1].toLowerCase()]) {
                    a = a.replace(aa, "<$1></$2>");try {
                        for (; d > c; c++) {
                            b = this[c] || {}, 1 === b.nodeType && (n.cleanData(oa(b, !1)), b.innerHTML = a);
                        }b = 0;
                    } catch (e) {}
                }b && this.empty().append(a);
            }, null, a, arguments.length);
        }, replaceWith: function replaceWith() {
            var a = arguments[0];return this.domManip(arguments, function (b) {
                a = this.parentNode, n.cleanData(oa(this)), a && a.replaceChild(b, this);
            }), a && (a.length || a.nodeType) ? this : this.remove();
        }, detach: function detach(a) {
            return this.remove(a, !0);
        }, domManip: function domManip(a, b) {
            a = e.apply([], a);var c,
                d,
                f,
                g,
                h,
                i,
                j = 0,
                l = this.length,
                m = this,
                o = l - 1,
                p = a[0],
                q = n.isFunction(p);if (q || l > 1 && "string" == typeof p && !k.checkClone && ea.test(p)) return this.each(function (c) {
                var d = m.eq(c);q && (a[0] = p.call(this, c, d.html())), d.domManip(a, b);
            });if (l && (c = n.buildFragment(a, this[0].ownerDocument, !1, this), d = c.firstChild, 1 === c.childNodes.length && (c = d), d)) {
                for (f = n.map(oa(c, "script"), ka), g = f.length; l > j; j++) {
                    h = c, j !== o && (h = n.clone(h, !0, !0), g && n.merge(f, oa(h, "script"))), b.call(this[j], h, j);
                }if (g) for (i = f[f.length - 1].ownerDocument, n.map(f, la), j = 0; g > j; j++) {
                    h = f[j], fa.test(h.type || "") && !L.access(h, "globalEval") && n.contains(i, h) && (h.src ? n._evalUrl && n._evalUrl(h.src) : n.globalEval(h.textContent.replace(ha, "")));
                }
            }return this;
        } }), n.each({ appendTo: "append", prependTo: "prepend", insertBefore: "before", insertAfter: "after", replaceAll: "replaceWith" }, function (a, b) {
        n.fn[a] = function (a) {
            for (var c, d = [], e = n(a), g = e.length - 1, h = 0; g >= h; h++) {
                c = h === g ? this : this.clone(!0), n(e[h])[b](c), f.apply(d, c.get());
            }return this.pushStack(d);
        };
    });var qa,
        ra = {};function sa(b, c) {
        var d,
            e = n(c.createElement(b)).appendTo(c.body),
            f = a.getDefaultComputedStyle && (d = a.getDefaultComputedStyle(e[0])) ? d.display : n.css(e[0], "display");return e.detach(), f;
    }function ta(a) {
        var b = l,
            c = ra[a];return c || (c = sa(a, b), "none" !== c && c || (qa = (qa || n("<iframe frameborder='0' width='0' height='0'/>")).appendTo(b.documentElement), b = qa[0].contentDocument, b.write(), b.close(), c = sa(a, b), qa.detach()), ra[a] = c), c;
    }var ua = /^margin/,
        va = new RegExp("^(" + Q + ")(?!px)[a-z%]+$", "i"),
        wa = function wa(b) {
        return b.ownerDocument.defaultView.opener ? b.ownerDocument.defaultView.getComputedStyle(b, null) : a.getComputedStyle(b, null);
    };function xa(a, b, c) {
        var d,
            e,
            f,
            g,
            h = a.style;return c = c || wa(a), c && (g = c.getPropertyValue(b) || c[b]), c && ("" !== g || n.contains(a.ownerDocument, a) || (g = n.style(a, b)), va.test(g) && ua.test(b) && (d = h.width, e = h.minWidth, f = h.maxWidth, h.minWidth = h.maxWidth = h.width = g, g = c.width, h.width = d, h.minWidth = e, h.maxWidth = f)), void 0 !== g ? g + "" : g;
    }function ya(a, b) {
        return { get: function get() {
                return a() ? void delete this.get : (this.get = b).apply(this, arguments);
            } };
    }!function () {
        var b,
            c,
            d = l.documentElement,
            e = l.createElement("div"),
            f = l.createElement("div");if (f.style) {
            var _g = function _g() {
                f.style.cssText = "-webkit-box-sizing:border-box;-moz-box-sizing:border-box;box-sizing:border-box;display:block;margin-top:1%;top:1%;border:1px;padding:1px;width:4px;position:absolute", f.innerHTML = "", d.appendChild(e);var g = a.getComputedStyle(f, null);b = "1%" !== g.top, c = "4px" === g.width, d.removeChild(e);
            };

            f.style.backgroundClip = "content-box", f.cloneNode(!0).style.backgroundClip = "", k.clearCloneStyle = "content-box" === f.style.backgroundClip, e.style.cssText = "border:0;width:0;height:0;top:0;left:-9999px;margin-top:1px;position:absolute", e.appendChild(f);a.getComputedStyle && n.extend(k, { pixelPosition: function pixelPosition() {
                    return _g(), b;
                }, boxSizingReliable: function boxSizingReliable() {
                    return null == c && _g(), c;
                }, reliableMarginRight: function reliableMarginRight() {
                    var b,
                        c = f.appendChild(l.createElement("div"));return c.style.cssText = f.style.cssText = "-webkit-box-sizing:content-box;-moz-box-sizing:content-box;box-sizing:content-box;display:block;margin:0;border:0;padding:0", c.style.marginRight = c.style.width = "0", f.style.width = "1px", d.appendChild(e), b = !parseFloat(a.getComputedStyle(c, null).marginRight), d.removeChild(e), f.removeChild(c), b;
                } });
        }
    }(), n.swap = function (a, b, c, d) {
        var e,
            f,
            g = {};for (f in b) {
            g[f] = a.style[f], a.style[f] = b[f];
        }e = c.apply(a, d || []);for (f in b) {
            a.style[f] = g[f];
        }return e;
    };var za = /^(none|table(?!-c[ea]).+)/,
        Aa = new RegExp("^(" + Q + ")(.*)$", "i"),
        Ba = new RegExp("^([+-])=(" + Q + ")", "i"),
        Ca = { position: "absolute", visibility: "hidden", display: "block" },
        Da = { letterSpacing: "0", fontWeight: "400" },
        Ea = ["Webkit", "O", "Moz", "ms"];function Fa(a, b) {
        if (b in a) return b;var c = b[0].toUpperCase() + b.slice(1),
            d = b,
            e = Ea.length;while (e--) {
            if (b = Ea[e] + c, b in a) return b;
        }return d;
    }function Ga(a, b, c) {
        var d = Aa.exec(b);return d ? Math.max(0, d[1] - (c || 0)) + (d[2] || "px") : b;
    }function Ha(a, b, c, d, e) {
        for (var f = c === (d ? "border" : "content") ? 4 : "width" === b ? 1 : 0, g = 0; 4 > f; f += 2) {
            "margin" === c && (g += n.css(a, c + R[f], !0, e)), d ? ("content" === c && (g -= n.css(a, "padding" + R[f], !0, e)), "margin" !== c && (g -= n.css(a, "border" + R[f] + "Width", !0, e))) : (g += n.css(a, "padding" + R[f], !0, e), "padding" !== c && (g += n.css(a, "border" + R[f] + "Width", !0, e)));
        }return g;
    }function Ia(a, b, c) {
        var d = !0,
            e = "width" === b ? a.offsetWidth : a.offsetHeight,
            f = wa(a),
            g = "border-box" === n.css(a, "boxSizing", !1, f);if (0 >= e || null == e) {
            if (e = xa(a, b, f), (0 > e || null == e) && (e = a.style[b]), va.test(e)) return e;d = g && (k.boxSizingReliable() || e === a.style[b]), e = parseFloat(e) || 0;
        }return e + Ha(a, b, c || (g ? "border" : "content"), d, f) + "px";
    }function Ja(a, b) {
        for (var c, d, e, f = [], g = 0, h = a.length; h > g; g++) {
            d = a[g], d.style && (f[g] = L.get(d, "olddisplay"), c = d.style.display, b ? (f[g] || "none" !== c || (d.style.display = ""), "" === d.style.display && S(d) && (f[g] = L.access(d, "olddisplay", ta(d.nodeName)))) : (e = S(d), "none" === c && e || L.set(d, "olddisplay", e ? c : n.css(d, "display"))));
        }for (g = 0; h > g; g++) {
            d = a[g], d.style && (b && "none" !== d.style.display && "" !== d.style.display || (d.style.display = b ? f[g] || "" : "none"));
        }return a;
    }n.extend({ cssHooks: { opacity: { get: function get(a, b) {
                    if (b) {
                        var c = xa(a, "opacity");return "" === c ? "1" : c;
                    }
                } } }, cssNumber: { columnCount: !0, fillOpacity: !0, flexGrow: !0, flexShrink: !0, fontWeight: !0, lineHeight: !0, opacity: !0, order: !0, orphans: !0, widows: !0, zIndex: !0, zoom: !0 }, cssProps: { "float": "cssFloat" }, style: function style(a, b, c, d) {
            if (a && 3 !== a.nodeType && 8 !== a.nodeType && a.style) {
                var e,
                    f,
                    g,
                    h = n.camelCase(b),
                    i = a.style;return b = n.cssProps[h] || (n.cssProps[h] = Fa(i, h)), g = n.cssHooks[b] || n.cssHooks[h], void 0 === c ? g && "get" in g && void 0 !== (e = g.get(a, !1, d)) ? e : i[b] : (f = typeof c === "undefined" ? "undefined" : _typeof(c), "string" === f && (e = Ba.exec(c)) && (c = (e[1] + 1) * e[2] + parseFloat(n.css(a, b)), f = "number"), null != c && c === c && ("number" !== f || n.cssNumber[h] || (c += "px"), k.clearCloneStyle || "" !== c || 0 !== b.indexOf("background") || (i[b] = "inherit"), g && "set" in g && void 0 === (c = g.set(a, c, d)) || (i[b] = c)), void 0);
            }
        }, css: function css(a, b, c, d) {
            var e,
                f,
                g,
                h = n.camelCase(b);return b = n.cssProps[h] || (n.cssProps[h] = Fa(a.style, h)), g = n.cssHooks[b] || n.cssHooks[h], g && "get" in g && (e = g.get(a, !0, c)), void 0 === e && (e = xa(a, b, d)), "normal" === e && b in Da && (e = Da[b]), "" === c || c ? (f = parseFloat(e), c === !0 || n.isNumeric(f) ? f || 0 : e) : e;
        } }), n.each(["height", "width"], function (a, b) {
        n.cssHooks[b] = { get: function get(a, c, d) {
                return c ? za.test(n.css(a, "display")) && 0 === a.offsetWidth ? n.swap(a, Ca, function () {
                    return Ia(a, b, d);
                }) : Ia(a, b, d) : void 0;
            }, set: function set(a, c, d) {
                var e = d && wa(a);return Ga(a, c, d ? Ha(a, b, d, "border-box" === n.css(a, "boxSizing", !1, e), e) : 0);
            } };
    }), n.cssHooks.marginRight = ya(k.reliableMarginRight, function (a, b) {
        return b ? n.swap(a, { display: "inline-block" }, xa, [a, "marginRight"]) : void 0;
    }), n.each({ margin: "", padding: "", border: "Width" }, function (a, b) {
        n.cssHooks[a + b] = { expand: function expand(c) {
                for (var d = 0, e = {}, f = "string" == typeof c ? c.split(" ") : [c]; 4 > d; d++) {
                    e[a + R[d] + b] = f[d] || f[d - 2] || f[0];
                }return e;
            } }, ua.test(a) || (n.cssHooks[a + b].set = Ga);
    }), n.fn.extend({ css: function css(a, b) {
            return J(this, function (a, b, c) {
                var d,
                    e,
                    f = {},
                    g = 0;if (n.isArray(b)) {
                    for (d = wa(a), e = b.length; e > g; g++) {
                        f[b[g]] = n.css(a, b[g], !1, d);
                    }return f;
                }return void 0 !== c ? n.style(a, b, c) : n.css(a, b);
            }, a, b, arguments.length > 1);
        }, show: function show() {
            return Ja(this, !0);
        }, hide: function hide() {
            return Ja(this);
        }, toggle: function toggle(a) {
            return "boolean" == typeof a ? a ? this.show() : this.hide() : this.each(function () {
                S(this) ? n(this).show() : n(this).hide();
            });
        } });function Ka(a, b, c, d, e) {
        return new Ka.prototype.init(a, b, c, d, e);
    }n.Tween = Ka, Ka.prototype = { constructor: Ka, init: function init(a, b, c, d, e, f) {
            this.elem = a, this.prop = c, this.easing = e || "swing", this.options = b, this.start = this.now = this.cur(), this.end = d, this.unit = f || (n.cssNumber[c] ? "" : "px");
        }, cur: function cur() {
            var a = Ka.propHooks[this.prop];return a && a.get ? a.get(this) : Ka.propHooks._default.get(this);
        }, run: function run(a) {
            var b,
                c = Ka.propHooks[this.prop];return this.options.duration ? this.pos = b = n.easing[this.easing](a, this.options.duration * a, 0, 1, this.options.duration) : this.pos = b = a, this.now = (this.end - this.start) * b + this.start, this.options.step && this.options.step.call(this.elem, this.now, this), c && c.set ? c.set(this) : Ka.propHooks._default.set(this), this;
        } }, Ka.prototype.init.prototype = Ka.prototype, Ka.propHooks = { _default: { get: function get(a) {
                var b;return null == a.elem[a.prop] || a.elem.style && null != a.elem.style[a.prop] ? (b = n.css(a.elem, a.prop, ""), b && "auto" !== b ? b : 0) : a.elem[a.prop];
            }, set: function set(a) {
                n.fx.step[a.prop] ? n.fx.step[a.prop](a) : a.elem.style && (null != a.elem.style[n.cssProps[a.prop]] || n.cssHooks[a.prop]) ? n.style(a.elem, a.prop, a.now + a.unit) : a.elem[a.prop] = a.now;
            } } }, Ka.propHooks.scrollTop = Ka.propHooks.scrollLeft = { set: function set(a) {
            a.elem.nodeType && a.elem.parentNode && (a.elem[a.prop] = a.now);
        } }, n.easing = { linear: function linear(a) {
            return a;
        }, swing: function swing(a) {
            return .5 - Math.cos(a * Math.PI) / 2;
        } }, n.fx = Ka.prototype.init, n.fx.step = {};var La,
        Ma,
        Na = /^(?:toggle|show|hide)$/,
        Oa = new RegExp("^(?:([+-])=|)(" + Q + ")([a-z%]*)$", "i"),
        Pa = /queueHooks$/,
        Qa = [Va],
        Ra = { "*": [function (a, b) {
            var c = this.createTween(a, b),
                d = c.cur(),
                e = Oa.exec(b),
                f = e && e[3] || (n.cssNumber[a] ? "" : "px"),
                g = (n.cssNumber[a] || "px" !== f && +d) && Oa.exec(n.css(c.elem, a)),
                h = 1,
                i = 20;if (g && g[3] !== f) {
                f = f || g[3], e = e || [], g = +d || 1;do {
                    h = h || ".5", g /= h, n.style(c.elem, a, g + f);
                } while (h !== (h = c.cur() / d) && 1 !== h && --i);
            }return e && (g = c.start = +g || +d || 0, c.unit = f, c.end = e[1] ? g + (e[1] + 1) * e[2] : +e[2]), c;
        }] };function Sa() {
        return setTimeout(function () {
            La = void 0;
        }), La = n.now();
    }function Ta(a, b) {
        var c,
            d = 0,
            e = { height: a };for (b = b ? 1 : 0; 4 > d; d += 2 - b) {
            c = R[d], e["margin" + c] = e["padding" + c] = a;
        }return b && (e.opacity = e.width = a), e;
    }function Ua(a, b, c) {
        for (var d, e = (Ra[b] || []).concat(Ra["*"]), f = 0, g = e.length; g > f; f++) {
            if (d = e[f].call(c, b, a)) return d;
        }
    }function Va(a, b, c) {
        var d,
            e,
            f,
            g,
            h,
            i,
            j,
            k,
            l = this,
            m = {},
            o = a.style,
            p = a.nodeType && S(a),
            q = L.get(a, "fxshow");c.queue || (h = n._queueHooks(a, "fx"), null == h.unqueued && (h.unqueued = 0, i = h.empty.fire, h.empty.fire = function () {
            h.unqueued || i();
        }), h.unqueued++, l.always(function () {
            l.always(function () {
                h.unqueued--, n.queue(a, "fx").length || h.empty.fire();
            });
        })), 1 === a.nodeType && ("height" in b || "width" in b) && (c.overflow = [o.overflow, o.overflowX, o.overflowY], j = n.css(a, "display"), k = "none" === j ? L.get(a, "olddisplay") || ta(a.nodeName) : j, "inline" === k && "none" === n.css(a, "float") && (o.display = "inline-block")), c.overflow && (o.overflow = "hidden", l.always(function () {
            o.overflow = c.overflow[0], o.overflowX = c.overflow[1], o.overflowY = c.overflow[2];
        }));for (d in b) {
            if (e = b[d], Na.exec(e)) {
                if (delete b[d], f = f || "toggle" === e, e === (p ? "hide" : "show")) {
                    if ("show" !== e || !q || void 0 === q[d]) continue;p = !0;
                }m[d] = q && q[d] || n.style(a, d);
            } else j = void 0;
        }if (n.isEmptyObject(m)) "inline" === ("none" === j ? ta(a.nodeName) : j) && (o.display = j);else {
            q ? "hidden" in q && (p = q.hidden) : q = L.access(a, "fxshow", {}), f && (q.hidden = !p), p ? n(a).show() : l.done(function () {
                n(a).hide();
            }), l.done(function () {
                var b;L.remove(a, "fxshow");for (b in m) {
                    n.style(a, b, m[b]);
                }
            });for (d in m) {
                g = Ua(p ? q[d] : 0, d, l), d in q || (q[d] = g.start, p && (g.end = g.start, g.start = "width" === d || "height" === d ? 1 : 0));
            }
        }
    }function Wa(a, b) {
        var c, d, e, f, g;for (c in a) {
            if (d = n.camelCase(c), e = b[d], f = a[c], n.isArray(f) && (e = f[1], f = a[c] = f[0]), c !== d && (a[d] = f, delete a[c]), g = n.cssHooks[d], g && "expand" in g) {
                f = g.expand(f), delete a[d];for (c in f) {
                    c in a || (a[c] = f[c], b[c] = e);
                }
            } else b[d] = e;
        }
    }function Xa(a, b, c) {
        var d,
            e,
            f = 0,
            g = Qa.length,
            h = n.Deferred().always(function () {
            delete i.elem;
        }),
            i = function i() {
            if (e) return !1;for (var b = La || Sa(), c = Math.max(0, j.startTime + j.duration - b), d = c / j.duration || 0, f = 1 - d, g = 0, i = j.tweens.length; i > g; g++) {
                j.tweens[g].run(f);
            }return h.notifyWith(a, [j, f, c]), 1 > f && i ? c : (h.resolveWith(a, [j]), !1);
        },
            j = h.promise({ elem: a, props: n.extend({}, b), opts: n.extend(!0, { specialEasing: {} }, c), originalProperties: b, originalOptions: c, startTime: La || Sa(), duration: c.duration, tweens: [], createTween: function createTween(b, c) {
                var d = n.Tween(a, j.opts, b, c, j.opts.specialEasing[b] || j.opts.easing);return j.tweens.push(d), d;
            }, stop: function stop(b) {
                var c = 0,
                    d = b ? j.tweens.length : 0;if (e) return this;for (e = !0; d > c; c++) {
                    j.tweens[c].run(1);
                }return b ? h.resolveWith(a, [j, b]) : h.rejectWith(a, [j, b]), this;
            } }),
            k = j.props;for (Wa(k, j.opts.specialEasing); g > f; f++) {
            if (d = Qa[f].call(j, a, k, j.opts)) return d;
        }return n.map(k, Ua, j), n.isFunction(j.opts.start) && j.opts.start.call(a, j), n.fx.timer(n.extend(i, { elem: a, anim: j, queue: j.opts.queue })), j.progress(j.opts.progress).done(j.opts.done, j.opts.complete).fail(j.opts.fail).always(j.opts.always);
    }n.Animation = n.extend(Xa, { tweener: function tweener(a, b) {
            n.isFunction(a) ? (b = a, a = ["*"]) : a = a.split(" ");for (var c, d = 0, e = a.length; e > d; d++) {
                c = a[d], Ra[c] = Ra[c] || [], Ra[c].unshift(b);
            }
        }, prefilter: function prefilter(a, b) {
            b ? Qa.unshift(a) : Qa.push(a);
        } }), n.speed = function (a, b, c) {
        var d = a && "object" == (typeof a === "undefined" ? "undefined" : _typeof(a)) ? n.extend({}, a) : { complete: c || !c && b || n.isFunction(a) && a, duration: a, easing: c && b || b && !n.isFunction(b) && b };return d.duration = n.fx.off ? 0 : "number" == typeof d.duration ? d.duration : d.duration in n.fx.speeds ? n.fx.speeds[d.duration] : n.fx.speeds._default, (null == d.queue || d.queue === !0) && (d.queue = "fx"), d.old = d.complete, d.complete = function () {
            n.isFunction(d.old) && d.old.call(this), d.queue && n.dequeue(this, d.queue);
        }, d;
    }, n.fn.extend({ fadeTo: function fadeTo(a, b, c, d) {
            return this.filter(S).css("opacity", 0).show().end().animate({ opacity: b }, a, c, d);
        }, animate: function animate(a, b, c, d) {
            var e = n.isEmptyObject(a),
                f = n.speed(b, c, d),
                g = function g() {
                var b = Xa(this, n.extend({}, a), f);(e || L.get(this, "finish")) && b.stop(!0);
            };return g.finish = g, e || f.queue === !1 ? this.each(g) : this.queue(f.queue, g);
        }, stop: function stop(a, b, c) {
            var d = function d(a) {
                var b = a.stop;delete a.stop, b(c);
            };return "string" != typeof a && (c = b, b = a, a = void 0), b && a !== !1 && this.queue(a || "fx", []), this.each(function () {
                var b = !0,
                    e = null != a && a + "queueHooks",
                    f = n.timers,
                    g = L.get(this);if (e) g[e] && g[e].stop && d(g[e]);else for (e in g) {
                    g[e] && g[e].stop && Pa.test(e) && d(g[e]);
                }for (e = f.length; e--;) {
                    f[e].elem !== this || null != a && f[e].queue !== a || (f[e].anim.stop(c), b = !1, f.splice(e, 1));
                }(b || !c) && n.dequeue(this, a);
            });
        }, finish: function finish(a) {
            return a !== !1 && (a = a || "fx"), this.each(function () {
                var b,
                    c = L.get(this),
                    d = c[a + "queue"],
                    e = c[a + "queueHooks"],
                    f = n.timers,
                    g = d ? d.length : 0;for (c.finish = !0, n.queue(this, a, []), e && e.stop && e.stop.call(this, !0), b = f.length; b--;) {
                    f[b].elem === this && f[b].queue === a && (f[b].anim.stop(!0), f.splice(b, 1));
                }for (b = 0; g > b; b++) {
                    d[b] && d[b].finish && d[b].finish.call(this);
                }delete c.finish;
            });
        } }), n.each(["toggle", "show", "hide"], function (a, b) {
        var c = n.fn[b];n.fn[b] = function (a, d, e) {
            return null == a || "boolean" == typeof a ? c.apply(this, arguments) : this.animate(Ta(b, !0), a, d, e);
        };
    }), n.each({ slideDown: Ta("show"), slideUp: Ta("hide"), slideToggle: Ta("toggle"), fadeIn: { opacity: "show" }, fadeOut: { opacity: "hide" }, fadeToggle: { opacity: "toggle" } }, function (a, b) {
        n.fn[a] = function (a, c, d) {
            return this.animate(b, a, c, d);
        };
    }), n.timers = [], n.fx.tick = function () {
        var a,
            b = 0,
            c = n.timers;for (La = n.now(); b < c.length; b++) {
            a = c[b], a() || c[b] !== a || c.splice(b--, 1);
        }c.length || n.fx.stop(), La = void 0;
    }, n.fx.timer = function (a) {
        n.timers.push(a), a() ? n.fx.start() : n.timers.pop();
    }, n.fx.interval = 13, n.fx.start = function () {
        Ma || (Ma = setInterval(n.fx.tick, n.fx.interval));
    }, n.fx.stop = function () {
        clearInterval(Ma), Ma = null;
    }, n.fx.speeds = { slow: 600, fast: 200, _default: 400 }, n.fn.delay = function (a, b) {
        return a = n.fx ? n.fx.speeds[a] || a : a, b = b || "fx", this.queue(b, function (b, c) {
            var d = setTimeout(b, a);c.stop = function () {
                clearTimeout(d);
            };
        });
    }, function () {
        var a = l.createElement("input"),
            b = l.createElement("select"),
            c = b.appendChild(l.createElement("option"));a.type = "checkbox", k.checkOn = "" !== a.value, k.optSelected = c.selected, b.disabled = !0, k.optDisabled = !c.disabled, a = l.createElement("input"), a.value = "t", a.type = "radio", k.radioValue = "t" === a.value;
    }();var Ya,
        Za,
        $a = n.expr.attrHandle;n.fn.extend({ attr: function attr(a, b) {
            return J(this, n.attr, a, b, arguments.length > 1);
        }, removeAttr: function removeAttr(a) {
            return this.each(function () {
                n.removeAttr(this, a);
            });
        } }), n.extend({ attr: function attr(a, b, c) {
            var d,
                e,
                f = a.nodeType;if (a && 3 !== f && 8 !== f && 2 !== f) return _typeof(a.getAttribute) === U ? n.prop(a, b, c) : (1 === f && n.isXMLDoc(a) || (b = b.toLowerCase(), d = n.attrHooks[b] || (n.expr.match.bool.test(b) ? Za : Ya)), void 0 === c ? d && "get" in d && null !== (e = d.get(a, b)) ? e : (e = n.find.attr(a, b), null == e ? void 0 : e) : null !== c ? d && "set" in d && void 0 !== (e = d.set(a, c, b)) ? e : (a.setAttribute(b, c + ""), c) : void n.removeAttr(a, b));
        }, removeAttr: function removeAttr(a, b) {
            var c,
                d,
                e = 0,
                f = b && b.match(E);if (f && 1 === a.nodeType) while (c = f[e++]) {
                d = n.propFix[c] || c, n.expr.match.bool.test(c) && (a[d] = !1), a.removeAttribute(c);
            }
        }, attrHooks: { type: { set: function set(a, b) {
                    if (!k.radioValue && "radio" === b && n.nodeName(a, "input")) {
                        var c = a.value;return a.setAttribute("type", b), c && (a.value = c), b;
                    }
                } } } }), Za = { set: function set(a, b, c) {
            return b === !1 ? n.removeAttr(a, c) : a.setAttribute(c, c), c;
        } }, n.each(n.expr.match.bool.source.match(/\w+/g), function (a, b) {
        var c = $a[b] || n.find.attr;$a[b] = function (a, b, d) {
            var e, f;return d || (f = $a[b], $a[b] = e, e = null != c(a, b, d) ? b.toLowerCase() : null, $a[b] = f), e;
        };
    });var _a = /^(?:input|select|textarea|button)$/i;n.fn.extend({ prop: function prop(a, b) {
            return J(this, n.prop, a, b, arguments.length > 1);
        }, removeProp: function removeProp(a) {
            return this.each(function () {
                delete this[n.propFix[a] || a];
            });
        } }), n.extend({ propFix: { "for": "htmlFor", "class": "className" }, prop: function prop(a, b, c) {
            var d,
                e,
                f,
                g = a.nodeType;if (a && 3 !== g && 8 !== g && 2 !== g) return f = 1 !== g || !n.isXMLDoc(a), f && (b = n.propFix[b] || b, e = n.propHooks[b]), void 0 !== c ? e && "set" in e && void 0 !== (d = e.set(a, c, b)) ? d : a[b] = c : e && "get" in e && null !== (d = e.get(a, b)) ? d : a[b];
        }, propHooks: { tabIndex: { get: function get(a) {
                    return a.hasAttribute("tabindex") || _a.test(a.nodeName) || a.href ? a.tabIndex : -1;
                } } } }), k.optSelected || (n.propHooks.selected = { get: function get(a) {
            var b = a.parentNode;return b && b.parentNode && b.parentNode.selectedIndex, null;
        } }), n.each(["tabIndex", "readOnly", "maxLength", "cellSpacing", "cellPadding", "rowSpan", "colSpan", "useMap", "frameBorder", "contentEditable"], function () {
        n.propFix[this.toLowerCase()] = this;
    });var ab = /[\t\r\n\f]/g;n.fn.extend({ addClass: function addClass(a) {
            var b,
                c,
                d,
                e,
                f,
                g,
                h = "string" == typeof a && a,
                i = 0,
                j = this.length;if (n.isFunction(a)) return this.each(function (b) {
                n(this).addClass(a.call(this, b, this.className));
            });if (h) for (b = (a || "").match(E) || []; j > i; i++) {
                if (c = this[i], d = 1 === c.nodeType && (c.className ? (" " + c.className + " ").replace(ab, " ") : " ")) {
                    f = 0;while (e = b[f++]) {
                        d.indexOf(" " + e + " ") < 0 && (d += e + " ");
                    }g = n.trim(d), c.className !== g && (c.className = g);
                }
            }return this;
        }, removeClass: function removeClass(a) {
            var b,
                c,
                d,
                e,
                f,
                g,
                h = 0 === arguments.length || "string" == typeof a && a,
                i = 0,
                j = this.length;if (n.isFunction(a)) return this.each(function (b) {
                n(this).removeClass(a.call(this, b, this.className));
            });if (h) for (b = (a || "").match(E) || []; j > i; i++) {
                if (c = this[i], d = 1 === c.nodeType && (c.className ? (" " + c.className + " ").replace(ab, " ") : "")) {
                    f = 0;while (e = b[f++]) {
                        while (d.indexOf(" " + e + " ") >= 0) {
                            d = d.replace(" " + e + " ", " ");
                        }
                    }g = a ? n.trim(d) : "", c.className !== g && (c.className = g);
                }
            }return this;
        }, toggleClass: function toggleClass(a, b) {
            var c = typeof a === "undefined" ? "undefined" : _typeof(a);return "boolean" == typeof b && "string" === c ? b ? this.addClass(a) : this.removeClass(a) : this.each(n.isFunction(a) ? function (c) {
                n(this).toggleClass(a.call(this, c, this.className, b), b);
            } : function () {
                if ("string" === c) {
                    var b,
                        d = 0,
                        e = n(this),
                        f = a.match(E) || [];while (b = f[d++]) {
                        e.hasClass(b) ? e.removeClass(b) : e.addClass(b);
                    }
                } else (c === U || "boolean" === c) && (this.className && L.set(this, "__className__", this.className), this.className = this.className || a === !1 ? "" : L.get(this, "__className__") || "");
            });
        }, hasClass: function hasClass(a) {
            for (var b = " " + a + " ", c = 0, d = this.length; d > c; c++) {
                if (1 === this[c].nodeType && (" " + this[c].className + " ").replace(ab, " ").indexOf(b) >= 0) return !0;
            }return !1;
        } });var bb = /\r/g;n.fn.extend({ val: function val(a) {
            var b,
                c,
                d,
                e = this[0];{
                if (arguments.length) return d = n.isFunction(a), this.each(function (c) {
                    var e;1 === this.nodeType && (e = d ? a.call(this, c, n(this).val()) : a, null == e ? e = "" : "number" == typeof e ? e += "" : n.isArray(e) && (e = n.map(e, function (a) {
                        return null == a ? "" : a + "";
                    })), b = n.valHooks[this.type] || n.valHooks[this.nodeName.toLowerCase()], b && "set" in b && void 0 !== b.set(this, e, "value") || (this.value = e));
                });if (e) return b = n.valHooks[e.type] || n.valHooks[e.nodeName.toLowerCase()], b && "get" in b && void 0 !== (c = b.get(e, "value")) ? c : (c = e.value, "string" == typeof c ? c.replace(bb, "") : null == c ? "" : c);
            }
        } }), n.extend({ valHooks: { option: { get: function get(a) {
                    var b = n.find.attr(a, "value");return null != b ? b : n.trim(n.text(a));
                } }, select: { get: function get(a) {
                    for (var b, c, d = a.options, e = a.selectedIndex, f = "select-one" === a.type || 0 > e, g = f ? null : [], h = f ? e + 1 : d.length, i = 0 > e ? h : f ? e : 0; h > i; i++) {
                        if (c = d[i], !(!c.selected && i !== e || (k.optDisabled ? c.disabled : null !== c.getAttribute("disabled")) || c.parentNode.disabled && n.nodeName(c.parentNode, "optgroup"))) {
                            if (b = n(c).val(), f) return b;g.push(b);
                        }
                    }return g;
                }, set: function set(a, b) {
                    var c,
                        d,
                        e = a.options,
                        f = n.makeArray(b),
                        g = e.length;while (g--) {
                        d = e[g], (d.selected = n.inArray(d.value, f) >= 0) && (c = !0);
                    }return c || (a.selectedIndex = -1), f;
                } } } }), n.each(["radio", "checkbox"], function () {
        n.valHooks[this] = { set: function set(a, b) {
                return n.isArray(b) ? a.checked = n.inArray(n(a).val(), b) >= 0 : void 0;
            } }, k.checkOn || (n.valHooks[this].get = function (a) {
            return null === a.getAttribute("value") ? "on" : a.value;
        });
    }), n.each("blur focus focusin focusout load resize scroll unload click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup error contextmenu".split(" "), function (a, b) {
        n.fn[b] = function (a, c) {
            return arguments.length > 0 ? this.on(b, null, a, c) : this.trigger(b);
        };
    }), n.fn.extend({ hover: function hover(a, b) {
            return this.mouseenter(a).mouseleave(b || a);
        }, bind: function bind(a, b, c) {
            return this.on(a, null, b, c);
        }, unbind: function unbind(a, b) {
            return this.off(a, null, b);
        }, delegate: function delegate(a, b, c, d) {
            return this.on(b, a, c, d);
        }, undelegate: function undelegate(a, b, c) {
            return 1 === arguments.length ? this.off(a, "**") : this.off(b, a || "**", c);
        } });var cb = n.now(),
        db = /\?/;n.parseJSON = function (a) {
        return JSON.parse(a + "");
    }, n.parseXML = function (a) {
        var b, c;if (!a || "string" != typeof a) return null;try {
            c = new DOMParser(), b = c.parseFromString(a, "text/xml");
        } catch (d) {
            b = void 0;
        }return (!b || b.getElementsByTagName("parsererror").length) && n.error("Invalid XML: " + a), b;
    };var eb = /#.*$/,
        fb = /([?&])_=[^&]*/,
        gb = /^(.*?):[ \t]*([^\r\n]*)$/gm,
        hb = /^(?:about|app|app-storage|.+-extension|file|res|widget):$/,
        ib = /^(?:GET|HEAD)$/,
        jb = /^\/\//,
        kb = /^([\w.+-]+:)(?:\/\/(?:[^\/?#]*@|)([^\/?#:]*)(?::(\d+)|)|)/,
        lb = {},
        mb = {},
        nb = "*/".concat("*"),
        ob = a.location.href,
        pb = kb.exec(ob.toLowerCase()) || [];function qb(a) {
        return function (b, c) {
            "string" != typeof b && (c = b, b = "*");var d,
                e = 0,
                f = b.toLowerCase().match(E) || [];if (n.isFunction(c)) while (d = f[e++]) {
                "+" === d[0] ? (d = d.slice(1) || "*", (a[d] = a[d] || []).unshift(c)) : (a[d] = a[d] || []).push(c);
            }
        };
    }function rb(a, b, c, d) {
        var e = {},
            f = a === mb;function g(h) {
            var i;return e[h] = !0, n.each(a[h] || [], function (a, h) {
                var j = h(b, c, d);return "string" != typeof j || f || e[j] ? f ? !(i = j) : void 0 : (b.dataTypes.unshift(j), g(j), !1);
            }), i;
        }return g(b.dataTypes[0]) || !e["*"] && g("*");
    }function sb(a, b) {
        var c,
            d,
            e = n.ajaxSettings.flatOptions || {};for (c in b) {
            void 0 !== b[c] && ((e[c] ? a : d || (d = {}))[c] = b[c]);
        }return d && n.extend(!0, a, d), a;
    }function tb(a, b, c) {
        var d,
            e,
            f,
            g,
            h = a.contents,
            i = a.dataTypes;while ("*" === i[0]) {
            i.shift(), void 0 === d && (d = a.mimeType || b.getResponseHeader("Content-Type"));
        }if (d) for (e in h) {
            if (h[e] && h[e].test(d)) {
                i.unshift(e);break;
            }
        }if (i[0] in c) f = i[0];else {
            for (e in c) {
                if (!i[0] || a.converters[e + " " + i[0]]) {
                    f = e;break;
                }g || (g = e);
            }f = f || g;
        }return f ? (f !== i[0] && i.unshift(f), c[f]) : void 0;
    }function ub(a, b, c, d) {
        var e,
            f,
            g,
            h,
            i,
            j = {},
            k = a.dataTypes.slice();if (k[1]) for (g in a.converters) {
            j[g.toLowerCase()] = a.converters[g];
        }f = k.shift();while (f) {
            if (a.responseFields[f] && (c[a.responseFields[f]] = b), !i && d && a.dataFilter && (b = a.dataFilter(b, a.dataType)), i = f, f = k.shift()) if ("*" === f) f = i;else if ("*" !== i && i !== f) {
                if (g = j[i + " " + f] || j["* " + f], !g) for (e in j) {
                    if (h = e.split(" "), h[1] === f && (g = j[i + " " + h[0]] || j["* " + h[0]])) {
                        g === !0 ? g = j[e] : j[e] !== !0 && (f = h[0], k.unshift(h[1]));break;
                    }
                }if (g !== !0) if (g && a["throws"]) b = g(b);else try {
                    b = g(b);
                } catch (l) {
                    return { state: "parsererror", error: g ? l : "No conversion from " + i + " to " + f };
                }
            }
        }return { state: "success", data: b };
    }n.extend({ active: 0, lastModified: {}, etag: {}, ajaxSettings: { url: ob, type: "GET", isLocal: hb.test(pb[1]), global: !0, processData: !0, async: !0, contentType: "application/x-www-form-urlencoded; charset=UTF-8", accepts: { "*": nb, text: "text/plain", html: "text/html", xml: "application/xml, text/xml", json: "application/json, text/javascript" }, contents: { xml: /xml/, html: /html/, json: /json/ }, responseFields: { xml: "responseXML", text: "responseText", json: "responseJSON" }, converters: { "* text": String, "text html": !0, "text json": n.parseJSON, "text xml": n.parseXML }, flatOptions: { url: !0, context: !0 } }, ajaxSetup: function ajaxSetup(a, b) {
            return b ? sb(sb(a, n.ajaxSettings), b) : sb(n.ajaxSettings, a);
        }, ajaxPrefilter: qb(lb), ajaxTransport: qb(mb), ajax: function ajax(a, b) {
            "object" == (typeof a === "undefined" ? "undefined" : _typeof(a)) && (b = a, a = void 0), b = b || {};var c,
                d,
                e,
                f,
                g,
                h,
                i,
                j,
                k = n.ajaxSetup({}, b),
                l = k.context || k,
                m = k.context && (l.nodeType || l.jquery) ? n(l) : n.event,
                o = n.Deferred(),
                p = n.Callbacks("once memory"),
                q = k.statusCode || {},
                r = {},
                s = {},
                t = 0,
                u = "canceled",
                v = { readyState: 0, getResponseHeader: function getResponseHeader(a) {
                    var b;if (2 === t) {
                        if (!f) {
                            f = {};while (b = gb.exec(e)) {
                                f[b[1].toLowerCase()] = b[2];
                            }
                        }b = f[a.toLowerCase()];
                    }return null == b ? null : b;
                }, getAllResponseHeaders: function getAllResponseHeaders() {
                    return 2 === t ? e : null;
                }, setRequestHeader: function setRequestHeader(a, b) {
                    var c = a.toLowerCase();return t || (a = s[c] = s[c] || a, r[a] = b), this;
                }, overrideMimeType: function overrideMimeType(a) {
                    return t || (k.mimeType = a), this;
                }, statusCode: function statusCode(a) {
                    var b;if (a) if (2 > t) for (b in a) {
                        q[b] = [q[b], a[b]];
                    } else v.always(a[v.status]);return this;
                }, abort: function abort(a) {
                    var b = a || u;return c && c.abort(b), x(0, b), this;
                } };if (o.promise(v).complete = p.add, v.success = v.done, v.error = v.fail, k.url = ((a || k.url || ob) + "").replace(eb, "").replace(jb, pb[1] + "//"), k.type = b.method || b.type || k.method || k.type, k.dataTypes = n.trim(k.dataType || "*").toLowerCase().match(E) || [""], null == k.crossDomain && (h = kb.exec(k.url.toLowerCase()), k.crossDomain = !(!h || h[1] === pb[1] && h[2] === pb[2] && (h[3] || ("http:" === h[1] ? "80" : "443")) === (pb[3] || ("http:" === pb[1] ? "80" : "443")))), k.data && k.processData && "string" != typeof k.data && (k.data = n.param(k.data, k.traditional)), rb(lb, k, b, v), 2 === t) return v;i = n.event && k.global, i && 0 === n.active++ && n.event.trigger("ajaxStart"), k.type = k.type.toUpperCase(), k.hasContent = !ib.test(k.type), d = k.url, k.hasContent || (k.data && (d = k.url += (db.test(d) ? "&" : "?") + k.data, delete k.data), k.cache === !1 && (k.url = fb.test(d) ? d.replace(fb, "$1_=" + cb++) : d + (db.test(d) ? "&" : "?") + "_=" + cb++)), k.ifModified && (n.lastModified[d] && v.setRequestHeader("If-Modified-Since", n.lastModified[d]), n.etag[d] && v.setRequestHeader("If-None-Match", n.etag[d])), (k.data && k.hasContent && k.contentType !== !1 || b.contentType) && v.setRequestHeader("Content-Type", k.contentType), v.setRequestHeader("Accept", k.dataTypes[0] && k.accepts[k.dataTypes[0]] ? k.accepts[k.dataTypes[0]] + ("*" !== k.dataTypes[0] ? ", " + nb + "; q=0.01" : "") : k.accepts["*"]);for (j in k.headers) {
                v.setRequestHeader(j, k.headers[j]);
            }if (k.beforeSend && (k.beforeSend.call(l, v, k) === !1 || 2 === t)) return v.abort();u = "abort";for (j in { success: 1, error: 1, complete: 1 }) {
                v[j](k[j]);
            }if (c = rb(mb, k, b, v)) {
                v.readyState = 1, i && m.trigger("ajaxSend", [v, k]), k.async && k.timeout > 0 && (g = setTimeout(function () {
                    v.abort("timeout");
                }, k.timeout));try {
                    t = 1, c.send(r, x);
                } catch (w) {
                    if (!(2 > t)) throw w;x(-1, w);
                }
            } else x(-1, "No Transport");function x(a, b, f, h) {
                var j,
                    r,
                    s,
                    u,
                    w,
                    x = b;2 !== t && (t = 2, g && clearTimeout(g), c = void 0, e = h || "", v.readyState = a > 0 ? 4 : 0, j = a >= 200 && 300 > a || 304 === a, f && (u = tb(k, v, f)), u = ub(k, u, v, j), j ? (k.ifModified && (w = v.getResponseHeader("Last-Modified"), w && (n.lastModified[d] = w), w = v.getResponseHeader("etag"), w && (n.etag[d] = w)), 204 === a || "HEAD" === k.type ? x = "nocontent" : 304 === a ? x = "notmodified" : (x = u.state, r = u.data, s = u.error, j = !s)) : (s = x, (a || !x) && (x = "error", 0 > a && (a = 0))), v.status = a, v.statusText = (b || x) + "", j ? o.resolveWith(l, [r, x, v]) : o.rejectWith(l, [v, x, s]), v.statusCode(q), q = void 0, i && m.trigger(j ? "ajaxSuccess" : "ajaxError", [v, k, j ? r : s]), p.fireWith(l, [v, x]), i && (m.trigger("ajaxComplete", [v, k]), --n.active || n.event.trigger("ajaxStop")));
            }return v;
        }, getJSON: function getJSON(a, b, c) {
            return n.get(a, b, c, "json");
        }, getScript: function getScript(a, b) {
            return n.get(a, void 0, b, "script");
        } }), n.each(["get", "post"], function (a, b) {
        n[b] = function (a, c, d, e) {
            return n.isFunction(c) && (e = e || d, d = c, c = void 0), n.ajax({ url: a, type: b, dataType: e, data: c, success: d });
        };
    }), n._evalUrl = function (a) {
        return n.ajax({ url: a, type: "GET", dataType: "script", async: !1, global: !1, "throws": !0 });
    }, n.fn.extend({ wrapAll: function wrapAll(a) {
            var b;return n.isFunction(a) ? this.each(function (b) {
                n(this).wrapAll(a.call(this, b));
            }) : (this[0] && (b = n(a, this[0].ownerDocument).eq(0).clone(!0), this[0].parentNode && b.insertBefore(this[0]), b.map(function () {
                var a = this;while (a.firstElementChild) {
                    a = a.firstElementChild;
                }return a;
            }).append(this)), this);
        }, wrapInner: function wrapInner(a) {
            return this.each(n.isFunction(a) ? function (b) {
                n(this).wrapInner(a.call(this, b));
            } : function () {
                var b = n(this),
                    c = b.contents();c.length ? c.wrapAll(a) : b.append(a);
            });
        }, wrap: function wrap(a) {
            var b = n.isFunction(a);return this.each(function (c) {
                n(this).wrapAll(b ? a.call(this, c) : a);
            });
        }, unwrap: function unwrap() {
            return this.parent().each(function () {
                n.nodeName(this, "body") || n(this).replaceWith(this.childNodes);
            }).end();
        } }), n.expr.filters.hidden = function (a) {
        return a.offsetWidth <= 0 && a.offsetHeight <= 0;
    }, n.expr.filters.visible = function (a) {
        return !n.expr.filters.hidden(a);
    };var vb = /%20/g,
        wb = /\[\]$/,
        xb = /\r?\n/g,
        yb = /^(?:submit|button|image|reset|file)$/i,
        zb = /^(?:input|select|textarea|keygen)/i;function Ab(a, b, c, d) {
        var e;if (n.isArray(b)) n.each(b, function (b, e) {
            c || wb.test(a) ? d(a, e) : Ab(a + "[" + ("object" == (typeof e === "undefined" ? "undefined" : _typeof(e)) ? b : "") + "]", e, c, d);
        });else if (c || "object" !== n.type(b)) d(a, b);else for (e in b) {
            Ab(a + "[" + e + "]", b[e], c, d);
        }
    }n.param = function (a, b) {
        var c,
            d = [],
            e = function e(a, b) {
            b = n.isFunction(b) ? b() : null == b ? "" : b, d[d.length] = encodeURIComponent(a) + "=" + encodeURIComponent(b);
        };if (void 0 === b && (b = n.ajaxSettings && n.ajaxSettings.traditional), n.isArray(a) || a.jquery && !n.isPlainObject(a)) n.each(a, function () {
            e(this.name, this.value);
        });else for (c in a) {
            Ab(c, a[c], b, e);
        }return d.join("&").replace(vb, "+");
    }, n.fn.extend({ serialize: function serialize() {
            return n.param(this.serializeArray());
        }, serializeArray: function serializeArray() {
            return this.map(function () {
                var a = n.prop(this, "elements");return a ? n.makeArray(a) : this;
            }).filter(function () {
                var a = this.type;return this.name && !n(this).is(":disabled") && zb.test(this.nodeName) && !yb.test(a) && (this.checked || !T.test(a));
            }).map(function (a, b) {
                var c = n(this).val();return null == c ? null : n.isArray(c) ? n.map(c, function (a) {
                    return { name: b.name, value: a.replace(xb, "\r\n") };
                }) : { name: b.name, value: c.replace(xb, "\r\n") };
            }).get();
        } }), n.ajaxSettings.xhr = function () {
        try {
            return new XMLHttpRequest();
        } catch (a) {}
    };var Bb = 0,
        Cb = {},
        Db = { 0: 200, 1223: 204 },
        Eb = n.ajaxSettings.xhr();a.attachEvent && a.attachEvent("onunload", function () {
        for (var a in Cb) {
            Cb[a]();
        }
    }), k.cors = !!Eb && "withCredentials" in Eb, k.ajax = Eb = !!Eb, n.ajaxTransport(function (a) {
        var _b2;return k.cors || Eb && !a.crossDomain ? { send: function send(c, d) {
                var e,
                    f = a.xhr(),
                    g = ++Bb;if (f.open(a.type, a.url, a.async, a.username, a.password), a.xhrFields) for (e in a.xhrFields) {
                    f[e] = a.xhrFields[e];
                }a.mimeType && f.overrideMimeType && f.overrideMimeType(a.mimeType), a.crossDomain || c["X-Requested-With"] || (c["X-Requested-With"] = "XMLHttpRequest");for (e in c) {
                    f.setRequestHeader(e, c[e]);
                }_b2 = function b(a) {
                    return function () {
                        _b2 && (delete Cb[g], _b2 = f.onload = f.onerror = null, "abort" === a ? f.abort() : "error" === a ? d(f.status, f.statusText) : d(Db[f.status] || f.status, f.statusText, "string" == typeof f.responseText ? { text: f.responseText } : void 0, f.getAllResponseHeaders()));
                    };
                }, f.onload = _b2(), f.onerror = _b2("error"), _b2 = Cb[g] = _b2("abort");try {
                    f.send(a.hasContent && a.data || null);
                } catch (h) {
                    if (_b2) throw h;
                }
            }, abort: function abort() {
                _b2 && _b2();
            } } : void 0;
    }), n.ajaxSetup({ accepts: { script: "text/javascript, application/javascript, application/ecmascript, application/x-ecmascript" }, contents: { script: /(?:java|ecma)script/ }, converters: { "text script": function textScript(a) {
                return n.globalEval(a), a;
            } } }), n.ajaxPrefilter("script", function (a) {
        void 0 === a.cache && (a.cache = !1), a.crossDomain && (a.type = "GET");
    }), n.ajaxTransport("script", function (a) {
        if (a.crossDomain) {
            var b, _c2;return { send: function send(d, e) {
                    b = n("<script>").prop({ async: !0, charset: a.scriptCharset, src: a.url }).on("load error", _c2 = function c(a) {
                        b.remove(), _c2 = null, a && e("error" === a.type ? 404 : 200, a.type);
                    }), l.head.appendChild(b[0]);
                }, abort: function abort() {
                    _c2 && _c2();
                } };
        }
    });var Fb = [],
        Gb = /(=)\?(?=&|$)|\?\?/;n.ajaxSetup({ jsonp: "callback", jsonpCallback: function jsonpCallback() {
            var a = Fb.pop() || n.expando + "_" + cb++;return this[a] = !0, a;
        } }), n.ajaxPrefilter("json jsonp", function (b, c, d) {
        var e,
            f,
            g,
            h = b.jsonp !== !1 && (Gb.test(b.url) ? "url" : "string" == typeof b.data && !(b.contentType || "").indexOf("application/x-www-form-urlencoded") && Gb.test(b.data) && "data");return h || "jsonp" === b.dataTypes[0] ? (e = b.jsonpCallback = n.isFunction(b.jsonpCallback) ? b.jsonpCallback() : b.jsonpCallback, h ? b[h] = b[h].replace(Gb, "$1" + e) : b.jsonp !== !1 && (b.url += (db.test(b.url) ? "&" : "?") + b.jsonp + "=" + e), b.converters["script json"] = function () {
            return g || n.error(e + " was not called"), g[0];
        }, b.dataTypes[0] = "json", f = a[e], a[e] = function () {
            g = arguments;
        }, d.always(function () {
            a[e] = f, b[e] && (b.jsonpCallback = c.jsonpCallback, Fb.push(e)), g && n.isFunction(f) && f(g[0]), g = f = void 0;
        }), "script") : void 0;
    }), n.parseHTML = function (a, b, c) {
        if (!a || "string" != typeof a) return null;"boolean" == typeof b && (c = b, b = !1), b = b || l;var d = v.exec(a),
            e = !c && [];return d ? [b.createElement(d[1])] : (d = n.buildFragment([a], b, e), e && e.length && n(e).remove(), n.merge([], d.childNodes));
    };var Hb = n.fn.load;n.fn.load = function (a, b, c) {
        if ("string" != typeof a && Hb) return Hb.apply(this, arguments);var d,
            e,
            f,
            g = this,
            h = a.indexOf(" ");return h >= 0 && (d = n.trim(a.slice(h)), a = a.slice(0, h)), n.isFunction(b) ? (c = b, b = void 0) : b && "object" == (typeof b === "undefined" ? "undefined" : _typeof(b)) && (e = "POST"), g.length > 0 && n.ajax({ url: a, type: e, dataType: "html", data: b }).done(function (a) {
            f = arguments, g.html(d ? n("<div>").append(n.parseHTML(a)).find(d) : a);
        }).complete(c && function (a, b) {
            g.each(c, f || [a.responseText, b, a]);
        }), this;
    }, n.each(["ajaxStart", "ajaxStop", "ajaxComplete", "ajaxError", "ajaxSuccess", "ajaxSend"], function (a, b) {
        n.fn[b] = function (a) {
            return this.on(b, a);
        };
    }), n.expr.filters.animated = function (a) {
        return n.grep(n.timers, function (b) {
            return a === b.elem;
        }).length;
    };var Ib = a.document.documentElement;function Jb(a) {
        return n.isWindow(a) ? a : 9 === a.nodeType && a.defaultView;
    }n.offset = { setOffset: function setOffset(a, b, c) {
            var d,
                e,
                f,
                g,
                h,
                i,
                j,
                k = n.css(a, "position"),
                l = n(a),
                m = {};"static" === k && (a.style.position = "relative"), h = l.offset(), f = n.css(a, "top"), i = n.css(a, "left"), j = ("absolute" === k || "fixed" === k) && (f + i).indexOf("auto") > -1, j ? (d = l.position(), g = d.top, e = d.left) : (g = parseFloat(f) || 0, e = parseFloat(i) || 0), n.isFunction(b) && (b = b.call(a, c, h)), null != b.top && (m.top = b.top - h.top + g), null != b.left && (m.left = b.left - h.left + e), "using" in b ? b.using.call(a, m) : l.css(m);
        } }, n.fn.extend({ offset: function offset(a) {
            if (arguments.length) return void 0 === a ? this : this.each(function (b) {
                n.offset.setOffset(this, a, b);
            });var b,
                c,
                d = this[0],
                e = { top: 0, left: 0 },
                f = d && d.ownerDocument;if (f) return b = f.documentElement, n.contains(b, d) ? (_typeof(d.getBoundingClientRect) !== U && (e = d.getBoundingClientRect()), c = Jb(f), { top: e.top + c.pageYOffset - b.clientTop, left: e.left + c.pageXOffset - b.clientLeft }) : e;
        }, position: function position() {
            if (this[0]) {
                var a,
                    b,
                    c = this[0],
                    d = { top: 0, left: 0 };return "fixed" === n.css(c, "position") ? b = c.getBoundingClientRect() : (a = this.offsetParent(), b = this.offset(), n.nodeName(a[0], "html") || (d = a.offset()), d.top += n.css(a[0], "borderTopWidth", !0), d.left += n.css(a[0], "borderLeftWidth", !0)), { top: b.top - d.top - n.css(c, "marginTop", !0), left: b.left - d.left - n.css(c, "marginLeft", !0) };
            }
        }, offsetParent: function offsetParent() {
            return this.map(function () {
                var a = this.offsetParent || Ib;while (a && !n.nodeName(a, "html") && "static" === n.css(a, "position")) {
                    a = a.offsetParent;
                }return a || Ib;
            });
        } }), n.each({ scrollLeft: "pageXOffset", scrollTop: "pageYOffset" }, function (b, c) {
        var d = "pageYOffset" === c;n.fn[b] = function (e) {
            return J(this, function (b, e, f) {
                var g = Jb(b);return void 0 === f ? g ? g[c] : b[e] : void (g ? g.scrollTo(d ? a.pageXOffset : f, d ? f : a.pageYOffset) : b[e] = f);
            }, b, e, arguments.length, null);
        };
    }), n.each(["top", "left"], function (a, b) {
        n.cssHooks[b] = ya(k.pixelPosition, function (a, c) {
            return c ? (c = xa(a, b), va.test(c) ? n(a).position()[b] + "px" : c) : void 0;
        });
    }), n.each({ Height: "height", Width: "width" }, function (a, b) {
        n.each({ padding: "inner" + a, content: b, "": "outer" + a }, function (c, d) {
            n.fn[d] = function (d, e) {
                var f = arguments.length && (c || "boolean" != typeof d),
                    g = c || (d === !0 || e === !0 ? "margin" : "border");return J(this, function (b, c, d) {
                    var e;return n.isWindow(b) ? b.document.documentElement["client" + a] : 9 === b.nodeType ? (e = b.documentElement, Math.max(b.body["scroll" + a], e["scroll" + a], b.body["offset" + a], e["offset" + a], e["client" + a])) : void 0 === d ? n.css(b, c, g) : n.style(b, c, d, g);
                }, b, f ? d : void 0, f, null);
            };
        });
    }), n.fn.size = function () {
        return this.length;
    }, n.fn.andSelf = n.fn.addBack, "function" == typeof define && define.amd && define("jquery", [], function () {
        return n;
    });var Kb = a.jQuery,
        Lb = a.$;return n.noConflict = function (b) {
        return a.$ === n && (a.$ = Lb), b && a.jQuery === n && (a.jQuery = Kb), n;
    }, (typeof b === "undefined" ? "undefined" : _typeof(b)) === U && (a.jQuery = a.$ = n), n;
});

/*!
 * Bootstrap v3.3.7 (http://getbootstrap.com)
 * Copyright 2011-2016 Twitter, Inc.
 * Licensed under the MIT license
 */
if ("undefined" == typeof jQuery) throw new Error("Bootstrap's JavaScript requires jQuery");+function (a) {
    "use strict";
    var b = a.fn.jquery.split(" ")[0].split(".");if (b[0] < 2 && b[1] < 9 || 1 == b[0] && 9 == b[1] && b[2] < 1 || b[0] > 3) throw new Error("Bootstrap's JavaScript requires jQuery version 1.9.1 or higher, but lower than version 4");
}(jQuery), +function (a) {
    "use strict";
    function b() {
        var a = document.createElement("bootstrap"),
            b = { WebkitTransition: "webkitTransitionEnd", MozTransition: "transitionend", OTransition: "oTransitionEnd otransitionend", transition: "transitionend" };for (var c in b) {
            if (void 0 !== a.style[c]) return { end: b[c] };
        }return !1;
    }a.fn.emulateTransitionEnd = function (b) {
        var c = !1,
            d = this;a(this).one("bsTransitionEnd", function () {
            c = !0;
        });var e = function e() {
            c || a(d).trigger(a.support.transition.end);
        };return setTimeout(e, b), this;
    }, a(function () {
        a.support.transition = b(), a.support.transition && (a.event.special.bsTransitionEnd = { bindType: a.support.transition.end, delegateType: a.support.transition.end, handle: function handle(b) {
                if (a(b.target).is(this)) return b.handleObj.handler.apply(this, arguments);
            } });
    });
}(jQuery), +function (a) {
    "use strict";
    function b(b) {
        return this.each(function () {
            var c = a(this),
                e = c.data("bs.alert");e || c.data("bs.alert", e = new d(this)), "string" == typeof b && e[b].call(c);
        });
    }var c = '[data-dismiss="alert"]',
        d = function d(b) {
        a(b).on("click", c, this.close);
    };d.VERSION = "3.3.7", d.TRANSITION_DURATION = 150, d.prototype.close = function (b) {
        function c() {
            g.detach().trigger("closed.bs.alert").remove();
        }var e = a(this),
            f = e.attr("data-target");f || (f = e.attr("href"), f = f && f.replace(/.*(?=#[^\s]*$)/, ""));var g = a("#" === f ? [] : f);b && b.preventDefault(), g.length || (g = e.closest(".alert")), g.trigger(b = a.Event("close.bs.alert")), b.isDefaultPrevented() || (g.removeClass("in"), a.support.transition && g.hasClass("fade") ? g.one("bsTransitionEnd", c).emulateTransitionEnd(d.TRANSITION_DURATION) : c());
    };var e = a.fn.alert;a.fn.alert = b, a.fn.alert.Constructor = d, a.fn.alert.noConflict = function () {
        return a.fn.alert = e, this;
    }, a(document).on("click.bs.alert.data-api", c, d.prototype.close);
}(jQuery), +function (a) {
    "use strict";
    function b(b) {
        return this.each(function () {
            var d = a(this),
                e = d.data("bs.button"),
                f = "object" == (typeof b === "undefined" ? "undefined" : _typeof(b)) && b;e || d.data("bs.button", e = new c(this, f)), "toggle" == b ? e.toggle() : b && e.setState(b);
        });
    }var c = function c(b, d) {
        this.$element = a(b), this.options = a.extend({}, c.DEFAULTS, d), this.isLoading = !1;
    };c.VERSION = "3.3.7", c.DEFAULTS = { loadingText: "loading..." }, c.prototype.setState = function (b) {
        var c = "disabled",
            d = this.$element,
            e = d.is("input") ? "val" : "html",
            f = d.data();b += "Text", null == f.resetText && d.data("resetText", d[e]()), setTimeout(a.proxy(function () {
            d[e](null == f[b] ? this.options[b] : f[b]), "loadingText" == b ? (this.isLoading = !0, d.addClass(c).attr(c, c).prop(c, !0)) : this.isLoading && (this.isLoading = !1, d.removeClass(c).removeAttr(c).prop(c, !1));
        }, this), 0);
    }, c.prototype.toggle = function () {
        var a = !0,
            b = this.$element.closest('[data-toggle="buttons"]');if (b.length) {
            var c = this.$element.find("input");"radio" == c.prop("type") ? (c.prop("checked") && (a = !1), b.find(".active").removeClass("active"), this.$element.addClass("active")) : "checkbox" == c.prop("type") && (c.prop("checked") !== this.$element.hasClass("active") && (a = !1), this.$element.toggleClass("active")), c.prop("checked", this.$element.hasClass("active")), a && c.trigger("change");
        } else this.$element.attr("aria-pressed", !this.$element.hasClass("active")), this.$element.toggleClass("active");
    };var d = a.fn.button;a.fn.button = b, a.fn.button.Constructor = c, a.fn.button.noConflict = function () {
        return a.fn.button = d, this;
    }, a(document).on("click.bs.button.data-api", '[data-toggle^="button"]', function (c) {
        var d = a(c.target).closest(".btn");b.call(d, "toggle"), a(c.target).is('input[type="radio"], input[type="checkbox"]') || (c.preventDefault(), d.is("input,button") ? d.trigger("focus") : d.find("input:visible,button:visible").first().trigger("focus"));
    }).on("focus.bs.button.data-api blur.bs.button.data-api", '[data-toggle^="button"]', function (b) {
        a(b.target).closest(".btn").toggleClass("focus", /^focus(in)?$/.test(b.type));
    });
}(jQuery), +function (a) {
    "use strict";
    function b(b) {
        return this.each(function () {
            var d = a(this),
                e = d.data("bs.carousel"),
                f = a.extend({}, c.DEFAULTS, d.data(), "object" == (typeof b === "undefined" ? "undefined" : _typeof(b)) && b),
                g = "string" == typeof b ? b : f.slide;e || d.data("bs.carousel", e = new c(this, f)), "number" == typeof b ? e.to(b) : g ? e[g]() : f.interval && e.pause().cycle();
        });
    }var c = function c(b, _c3) {
        this.$element = a(b), this.$indicators = this.$element.find(".carousel-indicators"), this.options = _c3, this.paused = null, this.sliding = null, this.interval = null, this.$active = null, this.$items = null, this.options.keyboard && this.$element.on("keydown.bs.carousel", a.proxy(this.keydown, this)), "hover" == this.options.pause && !("ontouchstart" in document.documentElement) && this.$element.on("mouseenter.bs.carousel", a.proxy(this.pause, this)).on("mouseleave.bs.carousel", a.proxy(this.cycle, this));
    };c.VERSION = "3.3.7", c.TRANSITION_DURATION = 600, c.DEFAULTS = { interval: 5e3, pause: "hover", wrap: !0, keyboard: !0 }, c.prototype.keydown = function (a) {
        if (!/input|textarea/i.test(a.target.tagName)) {
            switch (a.which) {case 37:
                    this.prev();break;case 39:
                    this.next();break;default:
                    return;}a.preventDefault();
        }
    }, c.prototype.cycle = function (b) {
        return b || (this.paused = !1), this.interval && clearInterval(this.interval), this.options.interval && !this.paused && (this.interval = setInterval(a.proxy(this.next, this), this.options.interval)), this;
    }, c.prototype.getItemIndex = function (a) {
        return this.$items = a.parent().children(".item"), this.$items.index(a || this.$active);
    }, c.prototype.getItemForDirection = function (a, b) {
        var c = this.getItemIndex(b),
            d = "prev" == a && 0 === c || "next" == a && c == this.$items.length - 1;if (d && !this.options.wrap) return b;var e = "prev" == a ? -1 : 1,
            f = (c + e) % this.$items.length;return this.$items.eq(f);
    }, c.prototype.to = function (a) {
        var b = this,
            c = this.getItemIndex(this.$active = this.$element.find(".item.active"));if (!(a > this.$items.length - 1 || a < 0)) return this.sliding ? this.$element.one("slid.bs.carousel", function () {
            b.to(a);
        }) : c == a ? this.pause().cycle() : this.slide(a > c ? "next" : "prev", this.$items.eq(a));
    }, c.prototype.pause = function (b) {
        return b || (this.paused = !0), this.$element.find(".next, .prev").length && a.support.transition && (this.$element.trigger(a.support.transition.end), this.cycle(!0)), this.interval = clearInterval(this.interval), this;
    }, c.prototype.next = function () {
        if (!this.sliding) return this.slide("next");
    }, c.prototype.prev = function () {
        if (!this.sliding) return this.slide("prev");
    }, c.prototype.slide = function (b, d) {
        var e = this.$element.find(".item.active"),
            f = d || this.getItemForDirection(b, e),
            g = this.interval,
            h = "next" == b ? "left" : "right",
            i = this;if (f.hasClass("active")) return this.sliding = !1;var j = f[0],
            k = a.Event("slide.bs.carousel", { relatedTarget: j, direction: h });if (this.$element.trigger(k), !k.isDefaultPrevented()) {
            if (this.sliding = !0, g && this.pause(), this.$indicators.length) {
                this.$indicators.find(".active").removeClass("active");var l = a(this.$indicators.children()[this.getItemIndex(f)]);l && l.addClass("active");
            }var m = a.Event("slid.bs.carousel", { relatedTarget: j, direction: h });return a.support.transition && this.$element.hasClass("slide") ? (f.addClass(b), f[0].offsetWidth, e.addClass(h), f.addClass(h), e.one("bsTransitionEnd", function () {
                f.removeClass([b, h].join(" ")).addClass("active"), e.removeClass(["active", h].join(" ")), i.sliding = !1, setTimeout(function () {
                    i.$element.trigger(m);
                }, 0);
            }).emulateTransitionEnd(c.TRANSITION_DURATION)) : (e.removeClass("active"), f.addClass("active"), this.sliding = !1, this.$element.trigger(m)), g && this.cycle(), this;
        }
    };var d = a.fn.carousel;a.fn.carousel = b, a.fn.carousel.Constructor = c, a.fn.carousel.noConflict = function () {
        return a.fn.carousel = d, this;
    };var e = function e(c) {
        var d,
            e = a(this),
            f = a(e.attr("data-target") || (d = e.attr("href")) && d.replace(/.*(?=#[^\s]+$)/, ""));if (f.hasClass("carousel")) {
            var g = a.extend({}, f.data(), e.data()),
                h = e.attr("data-slide-to");h && (g.interval = !1), b.call(f, g), h && f.data("bs.carousel").to(h), c.preventDefault();
        }
    };a(document).on("click.bs.carousel.data-api", "[data-slide]", e).on("click.bs.carousel.data-api", "[data-slide-to]", e), a(window).on("load", function () {
        a('[data-ride="carousel"]').each(function () {
            var c = a(this);b.call(c, c.data());
        });
    });
}(jQuery), +function (a) {
    "use strict";
    function b(b) {
        var c,
            d = b.attr("data-target") || (c = b.attr("href")) && c.replace(/.*(?=#[^\s]+$)/, "");return a(d);
    }function c(b) {
        return this.each(function () {
            var c = a(this),
                e = c.data("bs.collapse"),
                f = a.extend({}, d.DEFAULTS, c.data(), "object" == (typeof b === "undefined" ? "undefined" : _typeof(b)) && b);!e && f.toggle && /show|hide/.test(b) && (f.toggle = !1), e || c.data("bs.collapse", e = new d(this, f)), "string" == typeof b && e[b]();
        });
    }var d = function d(b, c) {
        this.$element = a(b), this.options = a.extend({}, d.DEFAULTS, c), this.$trigger = a('[data-toggle="collapse"][href="#' + b.id + '"],[data-toggle="collapse"][data-target="#' + b.id + '"]'), this.transitioning = null, this.options.parent ? this.$parent = this.getParent() : this.addAriaAndCollapsedClass(this.$element, this.$trigger), this.options.toggle && this.toggle();
    };d.VERSION = "3.3.7", d.TRANSITION_DURATION = 350, d.DEFAULTS = { toggle: !0 }, d.prototype.dimension = function () {
        var a = this.$element.hasClass("width");return a ? "width" : "height";
    }, d.prototype.show = function () {
        if (!this.transitioning && !this.$element.hasClass("in")) {
            var b,
                e = this.$parent && this.$parent.children(".panel").children(".in, .collapsing");if (!(e && e.length && (b = e.data("bs.collapse"), b && b.transitioning))) {
                var f = a.Event("show.bs.collapse");if (this.$element.trigger(f), !f.isDefaultPrevented()) {
                    e && e.length && (c.call(e, "hide"), b || e.data("bs.collapse", null));var g = this.dimension();this.$element.removeClass("collapse").addClass("collapsing")[g](0).attr("aria-expanded", !0), this.$trigger.removeClass("collapsed").attr("aria-expanded", !0), this.transitioning = 1;var h = function h() {
                        this.$element.removeClass("collapsing").addClass("collapse in")[g](""), this.transitioning = 0, this.$element.trigger("shown.bs.collapse");
                    };if (!a.support.transition) return h.call(this);var i = a.camelCase(["scroll", g].join("-"));this.$element.one("bsTransitionEnd", a.proxy(h, this)).emulateTransitionEnd(d.TRANSITION_DURATION)[g](this.$element[0][i]);
                }
            }
        }
    }, d.prototype.hide = function () {
        if (!this.transitioning && this.$element.hasClass("in")) {
            var b = a.Event("hide.bs.collapse");if (this.$element.trigger(b), !b.isDefaultPrevented()) {
                var c = this.dimension();this.$element[c](this.$element[c]())[0].offsetHeight, this.$element.addClass("collapsing").removeClass("collapse in").attr("aria-expanded", !1), this.$trigger.addClass("collapsed").attr("aria-expanded", !1), this.transitioning = 1;var e = function e() {
                    this.transitioning = 0, this.$element.removeClass("collapsing").addClass("collapse").trigger("hidden.bs.collapse");
                };return a.support.transition ? void this.$element[c](0).one("bsTransitionEnd", a.proxy(e, this)).emulateTransitionEnd(d.TRANSITION_DURATION) : e.call(this);
            }
        }
    }, d.prototype.toggle = function () {
        this[this.$element.hasClass("in") ? "hide" : "show"]();
    }, d.prototype.getParent = function () {
        return a(this.options.parent).find('[data-toggle="collapse"][data-parent="' + this.options.parent + '"]').each(a.proxy(function (c, d) {
            var e = a(d);this.addAriaAndCollapsedClass(b(e), e);
        }, this)).end();
    }, d.prototype.addAriaAndCollapsedClass = function (a, b) {
        var c = a.hasClass("in");a.attr("aria-expanded", c), b.toggleClass("collapsed", !c).attr("aria-expanded", c);
    };var e = a.fn.collapse;a.fn.collapse = c, a.fn.collapse.Constructor = d, a.fn.collapse.noConflict = function () {
        return a.fn.collapse = e, this;
    }, a(document).on("click.bs.collapse.data-api", '[data-toggle="collapse"]', function (d) {
        var e = a(this);e.attr("data-target") || d.preventDefault();var f = b(e),
            g = f.data("bs.collapse"),
            h = g ? "toggle" : e.data();c.call(f, h);
    });
}(jQuery), +function (a) {
    "use strict";
    function b(b) {
        var c = b.attr("data-target");c || (c = b.attr("href"), c = c && /#[A-Za-z]/.test(c) && c.replace(/.*(?=#[^\s]*$)/, ""));var d = c && a(c);return d && d.length ? d : b.parent();
    }function c(c) {
        c && 3 === c.which || (a(e).remove(), a(f).each(function () {
            var d = a(this),
                e = b(d),
                f = { relatedTarget: this };e.hasClass("open") && (c && "click" == c.type && /input|textarea/i.test(c.target.tagName) && a.contains(e[0], c.target) || (e.trigger(c = a.Event("hide.bs.dropdown", f)), c.isDefaultPrevented() || (d.attr("aria-expanded", "false"), e.removeClass("open").trigger(a.Event("hidden.bs.dropdown", f)))));
        }));
    }function d(b) {
        return this.each(function () {
            var c = a(this),
                d = c.data("bs.dropdown");d || c.data("bs.dropdown", d = new g(this)), "string" == typeof b && d[b].call(c);
        });
    }var e = ".dropdown-backdrop",
        f = '[data-toggle="dropdown"]',
        g = function g(b) {
        a(b).on("click.bs.dropdown", this.toggle);
    };g.VERSION = "3.3.7", g.prototype.toggle = function (d) {
        var e = a(this);if (!e.is(".disabled, :disabled")) {
            var f = b(e),
                g = f.hasClass("open");if (c(), !g) {
                "ontouchstart" in document.documentElement && !f.closest(".navbar-nav").length && a(document.createElement("div")).addClass("dropdown-backdrop").insertAfter(a(this)).on("click", c);var h = { relatedTarget: this };if (f.trigger(d = a.Event("show.bs.dropdown", h)), d.isDefaultPrevented()) return;e.trigger("focus").attr("aria-expanded", "true"), f.toggleClass("open").trigger(a.Event("shown.bs.dropdown", h));
            }return !1;
        }
    }, g.prototype.keydown = function (c) {
        if (/(38|40|27|32)/.test(c.which) && !/input|textarea/i.test(c.target.tagName)) {
            var d = a(this);if (c.preventDefault(), c.stopPropagation(), !d.is(".disabled, :disabled")) {
                var e = b(d),
                    g = e.hasClass("open");if (!g && 27 != c.which || g && 27 == c.which) return 27 == c.which && e.find(f).trigger("focus"), d.trigger("click");var h = " li:not(.disabled):visible a",
                    i = e.find(".dropdown-menu" + h);if (i.length) {
                    var j = i.index(c.target);38 == c.which && j > 0 && j--, 40 == c.which && j < i.length - 1 && j++, ~j || (j = 0), i.eq(j).trigger("focus");
                }
            }
        }
    };var h = a.fn.dropdown;a.fn.dropdown = d, a.fn.dropdown.Constructor = g, a.fn.dropdown.noConflict = function () {
        return a.fn.dropdown = h, this;
    }, a(document).on("click.bs.dropdown.data-api", c).on("click.bs.dropdown.data-api", ".dropdown form", function (a) {
        a.stopPropagation();
    }).on("click.bs.dropdown.data-api", f, g.prototype.toggle).on("keydown.bs.dropdown.data-api", f, g.prototype.keydown).on("keydown.bs.dropdown.data-api", ".dropdown-menu", g.prototype.keydown);
}(jQuery), +function (a) {
    "use strict";
    function b(b, d) {
        return this.each(function () {
            var e = a(this),
                f = e.data("bs.modal"),
                g = a.extend({}, c.DEFAULTS, e.data(), "object" == (typeof b === "undefined" ? "undefined" : _typeof(b)) && b);f || e.data("bs.modal", f = new c(this, g)), "string" == typeof b ? f[b](d) : g.show && f.show(d);
        });
    }var c = function c(b, _c4) {
        this.options = _c4, this.$body = a(document.body), this.$element = a(b), this.$dialog = this.$element.find(".modal-dialog"), this.$backdrop = null, this.isShown = null, this.originalBodyPad = null, this.scrollbarWidth = 0, this.ignoreBackdropClick = !1, this.options.remote && this.$element.find(".modal-content").load(this.options.remote, a.proxy(function () {
            this.$element.trigger("loaded.bs.modal");
        }, this));
    };c.VERSION = "3.3.7", c.TRANSITION_DURATION = 300, c.BACKDROP_TRANSITION_DURATION = 150, c.DEFAULTS = { backdrop: !0, keyboard: !0, show: !0 }, c.prototype.toggle = function (a) {
        return this.isShown ? this.hide() : this.show(a);
    }, c.prototype.show = function (b) {
        var d = this,
            e = a.Event("show.bs.modal", { relatedTarget: b });this.$element.trigger(e), this.isShown || e.isDefaultPrevented() || (this.isShown = !0, this.checkScrollbar(), this.setScrollbar(), this.$body.addClass("modal-open"), this.escape(), this.resize(), this.$element.on("click.dismiss.bs.modal", '[data-dismiss="modal"]', a.proxy(this.hide, this)), this.$dialog.on("mousedown.dismiss.bs.modal", function () {
            d.$element.one("mouseup.dismiss.bs.modal", function (b) {
                a(b.target).is(d.$element) && (d.ignoreBackdropClick = !0);
            });
        }), this.backdrop(function () {
            var e = a.support.transition && d.$element.hasClass("fade");d.$element.parent().length || d.$element.appendTo(d.$body), d.$element.show().scrollTop(0), d.adjustDialog(), e && d.$element[0].offsetWidth, d.$element.addClass("in"), d.enforceFocus();var f = a.Event("shown.bs.modal", { relatedTarget: b });e ? d.$dialog.one("bsTransitionEnd", function () {
                d.$element.trigger("focus").trigger(f);
            }).emulateTransitionEnd(c.TRANSITION_DURATION) : d.$element.trigger("focus").trigger(f);
        }));
    }, c.prototype.hide = function (b) {
        b && b.preventDefault(), b = a.Event("hide.bs.modal"), this.$element.trigger(b), this.isShown && !b.isDefaultPrevented() && (this.isShown = !1, this.escape(), this.resize(), a(document).off("focusin.bs.modal"), this.$element.removeClass("in").off("click.dismiss.bs.modal").off("mouseup.dismiss.bs.modal"), this.$dialog.off("mousedown.dismiss.bs.modal"), a.support.transition && this.$element.hasClass("fade") ? this.$element.one("bsTransitionEnd", a.proxy(this.hideModal, this)).emulateTransitionEnd(c.TRANSITION_DURATION) : this.hideModal());
    }, c.prototype.enforceFocus = function () {
        a(document).off("focusin.bs.modal").on("focusin.bs.modal", a.proxy(function (a) {
            document === a.target || this.$element[0] === a.target || this.$element.has(a.target).length || this.$element.trigger("focus");
        }, this));
    }, c.prototype.escape = function () {
        this.isShown && this.options.keyboard ? this.$element.on("keydown.dismiss.bs.modal", a.proxy(function (a) {
            27 == a.which && this.hide();
        }, this)) : this.isShown || this.$element.off("keydown.dismiss.bs.modal");
    }, c.prototype.resize = function () {
        this.isShown ? a(window).on("resize.bs.modal", a.proxy(this.handleUpdate, this)) : a(window).off("resize.bs.modal");
    }, c.prototype.hideModal = function () {
        var a = this;this.$element.hide(), this.backdrop(function () {
            a.$body.removeClass("modal-open"), a.resetAdjustments(), a.resetScrollbar(), a.$element.trigger("hidden.bs.modal");
        });
    }, c.prototype.removeBackdrop = function () {
        this.$backdrop && this.$backdrop.remove(), this.$backdrop = null;
    }, c.prototype.backdrop = function (b) {
        var d = this,
            e = this.$element.hasClass("fade") ? "fade" : "";if (this.isShown && this.options.backdrop) {
            var f = a.support.transition && e;if (this.$backdrop = a(document.createElement("div")).addClass("modal-backdrop " + e).appendTo(this.$body), this.$element.on("click.dismiss.bs.modal", a.proxy(function (a) {
                return this.ignoreBackdropClick ? void (this.ignoreBackdropClick = !1) : void (a.target === a.currentTarget && ("static" == this.options.backdrop ? this.$element[0].focus() : this.hide()));
            }, this)), f && this.$backdrop[0].offsetWidth, this.$backdrop.addClass("in"), !b) return;f ? this.$backdrop.one("bsTransitionEnd", b).emulateTransitionEnd(c.BACKDROP_TRANSITION_DURATION) : b();
        } else if (!this.isShown && this.$backdrop) {
            this.$backdrop.removeClass("in");var g = function g() {
                d.removeBackdrop(), b && b();
            };a.support.transition && this.$element.hasClass("fade") ? this.$backdrop.one("bsTransitionEnd", g).emulateTransitionEnd(c.BACKDROP_TRANSITION_DURATION) : g();
        } else b && b();
    }, c.prototype.handleUpdate = function () {
        this.adjustDialog();
    }, c.prototype.adjustDialog = function () {
        var a = this.$element[0].scrollHeight > document.documentElement.clientHeight;this.$element.css({ paddingLeft: !this.bodyIsOverflowing && a ? this.scrollbarWidth : "", paddingRight: this.bodyIsOverflowing && !a ? this.scrollbarWidth : "" });
    }, c.prototype.resetAdjustments = function () {
        this.$element.css({ paddingLeft: "", paddingRight: "" });
    }, c.prototype.checkScrollbar = function () {
        var a = window.innerWidth;if (!a) {
            var b = document.documentElement.getBoundingClientRect();a = b.right - Math.abs(b.left);
        }this.bodyIsOverflowing = document.body.clientWidth < a, this.scrollbarWidth = this.measureScrollbar();
    }, c.prototype.setScrollbar = function () {
        var a = parseInt(this.$body.css("padding-right") || 0, 10);this.originalBodyPad = document.body.style.paddingRight || "", this.bodyIsOverflowing && this.$body.css("padding-right", a + this.scrollbarWidth);
    }, c.prototype.resetScrollbar = function () {
        this.$body.css("padding-right", this.originalBodyPad);
    }, c.prototype.measureScrollbar = function () {
        var a = document.createElement("div");a.className = "modal-scrollbar-measure", this.$body.append(a);var b = a.offsetWidth - a.clientWidth;return this.$body[0].removeChild(a), b;
    };var d = a.fn.modal;a.fn.modal = b, a.fn.modal.Constructor = c, a.fn.modal.noConflict = function () {
        return a.fn.modal = d, this;
    }, a(document).on("click.bs.modal.data-api", '[data-toggle="modal"]', function (c) {
        var d = a(this),
            e = d.attr("href"),
            f = a(d.attr("data-target") || e && e.replace(/.*(?=#[^\s]+$)/, "")),
            g = f.data("bs.modal") ? "toggle" : a.extend({ remote: !/#/.test(e) && e }, f.data(), d.data());d.is("a") && c.preventDefault(), f.one("show.bs.modal", function (a) {
            a.isDefaultPrevented() || f.one("hidden.bs.modal", function () {
                d.is(":visible") && d.trigger("focus");
            });
        }), b.call(f, g, this);
    });
}(jQuery), +function (a) {
    "use strict";
    function b(b) {
        return this.each(function () {
            var d = a(this),
                e = d.data("bs.tooltip"),
                f = "object" == (typeof b === "undefined" ? "undefined" : _typeof(b)) && b;!e && /destroy|hide/.test(b) || (e || d.data("bs.tooltip", e = new c(this, f)), "string" == typeof b && e[b]());
        });
    }var c = function c(a, b) {
        this.type = null, this.options = null, this.enabled = null, this.timeout = null, this.hoverState = null, this.$element = null, this.inState = null, this.init("tooltip", a, b);
    };c.VERSION = "3.3.7", c.TRANSITION_DURATION = 150, c.DEFAULTS = { animation: !0, placement: "top", selector: !1, template: '<div class="tooltip" role="tooltip"><div class="tooltip-arrow"></div><div class="tooltip-inner"></div></div>', trigger: "hover focus", title: "", delay: 0, html: !1, container: !1, viewport: { selector: "body", padding: 0 } }, c.prototype.init = function (b, c, d) {
        if (this.enabled = !0, this.type = b, this.$element = a(c), this.options = this.getOptions(d), this.$viewport = this.options.viewport && a(a.isFunction(this.options.viewport) ? this.options.viewport.call(this, this.$element) : this.options.viewport.selector || this.options.viewport), this.inState = { click: !1, hover: !1, focus: !1 }, this.$element[0] instanceof document.constructor && !this.options.selector) throw new Error("`selector` option must be specified when initializing " + this.type + " on the window.document object!");for (var e = this.options.trigger.split(" "), f = e.length; f--;) {
            var g = e[f];if ("click" == g) this.$element.on("click." + this.type, this.options.selector, a.proxy(this.toggle, this));else if ("manual" != g) {
                var h = "hover" == g ? "mouseenter" : "focusin",
                    i = "hover" == g ? "mouseleave" : "focusout";this.$element.on(h + "." + this.type, this.options.selector, a.proxy(this.enter, this)), this.$element.on(i + "." + this.type, this.options.selector, a.proxy(this.leave, this));
            }
        }this.options.selector ? this._options = a.extend({}, this.options, { trigger: "manual", selector: "" }) : this.fixTitle();
    }, c.prototype.getDefaults = function () {
        return c.DEFAULTS;
    }, c.prototype.getOptions = function (b) {
        return b = a.extend({}, this.getDefaults(), this.$element.data(), b), b.delay && "number" == typeof b.delay && (b.delay = { show: b.delay, hide: b.delay }), b;
    }, c.prototype.getDelegateOptions = function () {
        var b = {},
            c = this.getDefaults();return this._options && a.each(this._options, function (a, d) {
            c[a] != d && (b[a] = d);
        }), b;
    }, c.prototype.enter = function (b) {
        var c = b instanceof this.constructor ? b : a(b.currentTarget).data("bs." + this.type);return c || (c = new this.constructor(b.currentTarget, this.getDelegateOptions()), a(b.currentTarget).data("bs." + this.type, c)), b instanceof a.Event && (c.inState["focusin" == b.type ? "focus" : "hover"] = !0), c.tip().hasClass("in") || "in" == c.hoverState ? void (c.hoverState = "in") : (clearTimeout(c.timeout), c.hoverState = "in", c.options.delay && c.options.delay.show ? void (c.timeout = setTimeout(function () {
            "in" == c.hoverState && c.show();
        }, c.options.delay.show)) : c.show());
    }, c.prototype.isInStateTrue = function () {
        for (var a in this.inState) {
            if (this.inState[a]) return !0;
        }return !1;
    }, c.prototype.leave = function (b) {
        var c = b instanceof this.constructor ? b : a(b.currentTarget).data("bs." + this.type);if (c || (c = new this.constructor(b.currentTarget, this.getDelegateOptions()), a(b.currentTarget).data("bs." + this.type, c)), b instanceof a.Event && (c.inState["focusout" == b.type ? "focus" : "hover"] = !1), !c.isInStateTrue()) return clearTimeout(c.timeout), c.hoverState = "out", c.options.delay && c.options.delay.hide ? void (c.timeout = setTimeout(function () {
            "out" == c.hoverState && c.hide();
        }, c.options.delay.hide)) : c.hide();
    }, c.prototype.show = function () {
        var b = a.Event("show.bs." + this.type);if (this.hasContent() && this.enabled) {
            this.$element.trigger(b);var d = a.contains(this.$element[0].ownerDocument.documentElement, this.$element[0]);if (b.isDefaultPrevented() || !d) return;var e = this,
                f = this.tip(),
                g = this.getUID(this.type);this.setContent(), f.attr("id", g), this.$element.attr("aria-describedby", g), this.options.animation && f.addClass("fade");var h = "function" == typeof this.options.placement ? this.options.placement.call(this, f[0], this.$element[0]) : this.options.placement,
                i = /\s?auto?\s?/i,
                j = i.test(h);j && (h = h.replace(i, "") || "top"), f.detach().css({ top: 0, left: 0, display: "block" }).addClass(h).data("bs." + this.type, this), this.options.container ? f.appendTo(this.options.container) : f.insertAfter(this.$element), this.$element.trigger("inserted.bs." + this.type);var k = this.getPosition(),
                l = f[0].offsetWidth,
                m = f[0].offsetHeight;if (j) {
                var n = h,
                    o = this.getPosition(this.$viewport);h = "bottom" == h && k.bottom + m > o.bottom ? "top" : "top" == h && k.top - m < o.top ? "bottom" : "right" == h && k.right + l > o.width ? "left" : "left" == h && k.left - l < o.left ? "right" : h, f.removeClass(n).addClass(h);
            }var p = this.getCalculatedOffset(h, k, l, m);this.applyPlacement(p, h);var q = function q() {
                var a = e.hoverState;e.$element.trigger("shown.bs." + e.type), e.hoverState = null, "out" == a && e.leave(e);
            };a.support.transition && this.$tip.hasClass("fade") ? f.one("bsTransitionEnd", q).emulateTransitionEnd(c.TRANSITION_DURATION) : q();
        }
    }, c.prototype.applyPlacement = function (b, c) {
        var d = this.tip(),
            e = d[0].offsetWidth,
            f = d[0].offsetHeight,
            g = parseInt(d.css("margin-top"), 10),
            h = parseInt(d.css("margin-left"), 10);isNaN(g) && (g = 0), isNaN(h) && (h = 0), b.top += g, b.left += h, a.offset.setOffset(d[0], a.extend({ using: function using(a) {
                d.css({ top: Math.round(a.top), left: Math.round(a.left) });
            } }, b), 0), d.addClass("in");var i = d[0].offsetWidth,
            j = d[0].offsetHeight;"top" == c && j != f && (b.top = b.top + f - j);var k = this.getViewportAdjustedDelta(c, b, i, j);k.left ? b.left += k.left : b.top += k.top;var l = /top|bottom/.test(c),
            m = l ? 2 * k.left - e + i : 2 * k.top - f + j,
            n = l ? "offsetWidth" : "offsetHeight";d.offset(b), this.replaceArrow(m, d[0][n], l);
    }, c.prototype.replaceArrow = function (a, b, c) {
        this.arrow().css(c ? "left" : "top", 50 * (1 - a / b) + "%").css(c ? "top" : "left", "");
    }, c.prototype.setContent = function () {
        var a = this.tip(),
            b = this.getTitle();a.find(".tooltip-inner")[this.options.html ? "html" : "text"](b), a.removeClass("fade in top bottom left right");
    }, c.prototype.hide = function (b) {
        function d() {
            "in" != e.hoverState && f.detach(), e.$element && e.$element.removeAttr("aria-describedby").trigger("hidden.bs." + e.type), b && b();
        }var e = this,
            f = a(this.$tip),
            g = a.Event("hide.bs." + this.type);if (this.$element.trigger(g), !g.isDefaultPrevented()) return f.removeClass("in"), a.support.transition && f.hasClass("fade") ? f.one("bsTransitionEnd", d).emulateTransitionEnd(c.TRANSITION_DURATION) : d(), this.hoverState = null, this;
    }, c.prototype.fixTitle = function () {
        var a = this.$element;(a.attr("title") || "string" != typeof a.attr("data-original-title")) && a.attr("data-original-title", a.attr("title") || "").attr("title", "");
    }, c.prototype.hasContent = function () {
        return this.getTitle();
    }, c.prototype.getPosition = function (b) {
        b = b || this.$element;var c = b[0],
            d = "BODY" == c.tagName,
            e = c.getBoundingClientRect();null == e.width && (e = a.extend({}, e, { width: e.right - e.left, height: e.bottom - e.top }));var f = window.SVGElement && c instanceof window.SVGElement,
            g = d ? { top: 0, left: 0 } : f ? null : b.offset(),
            h = { scroll: d ? document.documentElement.scrollTop || document.body.scrollTop : b.scrollTop() },
            i = d ? { width: a(window).width(), height: a(window).height() } : null;return a.extend({}, e, h, i, g);
    }, c.prototype.getCalculatedOffset = function (a, b, c, d) {
        return "bottom" == a ? { top: b.top + b.height, left: b.left + b.width / 2 - c / 2 } : "top" == a ? { top: b.top - d, left: b.left + b.width / 2 - c / 2 } : "left" == a ? { top: b.top + b.height / 2 - d / 2, left: b.left - c } : { top: b.top + b.height / 2 - d / 2, left: b.left + b.width };
    }, c.prototype.getViewportAdjustedDelta = function (a, b, c, d) {
        var e = { top: 0, left: 0 };if (!this.$viewport) return e;var f = this.options.viewport && this.options.viewport.padding || 0,
            g = this.getPosition(this.$viewport);if (/right|left/.test(a)) {
            var h = b.top - f - g.scroll,
                i = b.top + f - g.scroll + d;h < g.top ? e.top = g.top - h : i > g.top + g.height && (e.top = g.top + g.height - i);
        } else {
            var j = b.left - f,
                k = b.left + f + c;j < g.left ? e.left = g.left - j : k > g.right && (e.left = g.left + g.width - k);
        }return e;
    }, c.prototype.getTitle = function () {
        var a,
            b = this.$element,
            c = this.options;return a = b.attr("data-original-title") || ("function" == typeof c.title ? c.title.call(b[0]) : c.title);
    }, c.prototype.getUID = function (a) {
        do {
            a += ~~(1e6 * Math.random());
        } while (document.getElementById(a));return a;
    }, c.prototype.tip = function () {
        if (!this.$tip && (this.$tip = a(this.options.template), 1 != this.$tip.length)) throw new Error(this.type + " `template` option must consist of exactly 1 top-level element!");return this.$tip;
    }, c.prototype.arrow = function () {
        return this.$arrow = this.$arrow || this.tip().find(".tooltip-arrow");
    }, c.prototype.enable = function () {
        this.enabled = !0;
    }, c.prototype.disable = function () {
        this.enabled = !1;
    }, c.prototype.toggleEnabled = function () {
        this.enabled = !this.enabled;
    }, c.prototype.toggle = function (b) {
        var c = this;b && (c = a(b.currentTarget).data("bs." + this.type), c || (c = new this.constructor(b.currentTarget, this.getDelegateOptions()), a(b.currentTarget).data("bs." + this.type, c))), b ? (c.inState.click = !c.inState.click, c.isInStateTrue() ? c.enter(c) : c.leave(c)) : c.tip().hasClass("in") ? c.leave(c) : c.enter(c);
    }, c.prototype.destroy = function () {
        var a = this;clearTimeout(this.timeout), this.hide(function () {
            a.$element.off("." + a.type).removeData("bs." + a.type), a.$tip && a.$tip.detach(), a.$tip = null, a.$arrow = null, a.$viewport = null, a.$element = null;
        });
    };var d = a.fn.tooltip;a.fn.tooltip = b, a.fn.tooltip.Constructor = c, a.fn.tooltip.noConflict = function () {
        return a.fn.tooltip = d, this;
    };
}(jQuery), +function (a) {
    "use strict";
    function b(b) {
        return this.each(function () {
            var d = a(this),
                e = d.data("bs.popover"),
                f = "object" == (typeof b === "undefined" ? "undefined" : _typeof(b)) && b;!e && /destroy|hide/.test(b) || (e || d.data("bs.popover", e = new c(this, f)), "string" == typeof b && e[b]());
        });
    }var c = function c(a, b) {
        this.init("popover", a, b);
    };if (!a.fn.tooltip) throw new Error("Popover requires tooltip.js");c.VERSION = "3.3.7", c.DEFAULTS = a.extend({}, a.fn.tooltip.Constructor.DEFAULTS, { placement: "right", trigger: "click", content: "", template: '<div class="popover" role="tooltip"><div class="arrow"></div><h3 class="popover-title"></h3><div class="popover-content"></div></div>' }), c.prototype = a.extend({}, a.fn.tooltip.Constructor.prototype), c.prototype.constructor = c, c.prototype.getDefaults = function () {
        return c.DEFAULTS;
    }, c.prototype.setContent = function () {
        var a = this.tip(),
            b = this.getTitle(),
            c = this.getContent();a.find(".popover-title")[this.options.html ? "html" : "text"](b), a.find(".popover-content").children().detach().end()[this.options.html ? "string" == typeof c ? "html" : "append" : "text"](c), a.removeClass("fade top bottom left right in"), a.find(".popover-title").html() || a.find(".popover-title").hide();
    }, c.prototype.hasContent = function () {
        return this.getTitle() || this.getContent();
    }, c.prototype.getContent = function () {
        var a = this.$element,
            b = this.options;return a.attr("data-content") || ("function" == typeof b.content ? b.content.call(a[0]) : b.content);
    }, c.prototype.arrow = function () {
        return this.$arrow = this.$arrow || this.tip().find(".arrow");
    };var d = a.fn.popover;a.fn.popover = b, a.fn.popover.Constructor = c, a.fn.popover.noConflict = function () {
        return a.fn.popover = d, this;
    };
}(jQuery), +function (a) {
    "use strict";
    function b(c, d) {
        this.$body = a(document.body), this.$scrollElement = a(a(c).is(document.body) ? window : c), this.options = a.extend({}, b.DEFAULTS, d), this.selector = (this.options.target || "") + " .nav li > a", this.offsets = [], this.targets = [], this.activeTarget = null, this.scrollHeight = 0, this.$scrollElement.on("scroll.bs.scrollspy", a.proxy(this.process, this)), this.refresh(), this.process();
    }function c(c) {
        return this.each(function () {
            var d = a(this),
                e = d.data("bs.scrollspy"),
                f = "object" == (typeof c === "undefined" ? "undefined" : _typeof(c)) && c;e || d.data("bs.scrollspy", e = new b(this, f)), "string" == typeof c && e[c]();
        });
    }b.VERSION = "3.3.7", b.DEFAULTS = { offset: 10 }, b.prototype.getScrollHeight = function () {
        return this.$scrollElement[0].scrollHeight || Math.max(this.$body[0].scrollHeight, document.documentElement.scrollHeight);
    }, b.prototype.refresh = function () {
        var b = this,
            c = "offset",
            d = 0;this.offsets = [], this.targets = [], this.scrollHeight = this.getScrollHeight(), a.isWindow(this.$scrollElement[0]) || (c = "position", d = this.$scrollElement.scrollTop()), this.$body.find(this.selector).map(function () {
            var b = a(this),
                e = b.data("target") || b.attr("href"),
                f = /^#./.test(e) && a(e);return f && f.length && f.is(":visible") && [[f[c]().top + d, e]] || null;
        }).sort(function (a, b) {
            return a[0] - b[0];
        }).each(function () {
            b.offsets.push(this[0]), b.targets.push(this[1]);
        });
    }, b.prototype.process = function () {
        var a,
            b = this.$scrollElement.scrollTop() + this.options.offset,
            c = this.getScrollHeight(),
            d = this.options.offset + c - this.$scrollElement.height(),
            e = this.offsets,
            f = this.targets,
            g = this.activeTarget;if (this.scrollHeight != c && this.refresh(), b >= d) return g != (a = f[f.length - 1]) && this.activate(a);if (g && b < e[0]) return this.activeTarget = null, this.clear();for (a = e.length; a--;) {
            g != f[a] && b >= e[a] && (void 0 === e[a + 1] || b < e[a + 1]) && this.activate(f[a]);
        }
    }, b.prototype.activate = function (b) {
        this.activeTarget = b, this.clear();var c = this.selector + '[data-target="' + b + '"],' + this.selector + '[href="' + b + '"]',
            d = a(c).parents("li").addClass("active");d.parent(".dropdown-menu").length && (d = d.closest("li.dropdown").addClass("active")), d.trigger("activate.bs.scrollspy");
    }, b.prototype.clear = function () {
        a(this.selector).parentsUntil(this.options.target, ".active").removeClass("active");
    };var d = a.fn.scrollspy;a.fn.scrollspy = c, a.fn.scrollspy.Constructor = b, a.fn.scrollspy.noConflict = function () {
        return a.fn.scrollspy = d, this;
    }, a(window).on("load.bs.scrollspy.data-api", function () {
        a('[data-spy="scroll"]').each(function () {
            var b = a(this);c.call(b, b.data());
        });
    });
}(jQuery), +function (a) {
    "use strict";
    function b(b) {
        return this.each(function () {
            var d = a(this),
                e = d.data("bs.tab");e || d.data("bs.tab", e = new c(this)), "string" == typeof b && e[b]();
        });
    }var c = function c(b) {
        this.element = a(b);
    };c.VERSION = "3.3.7", c.TRANSITION_DURATION = 150, c.prototype.show = function () {
        var b = this.element,
            c = b.closest("ul:not(.dropdown-menu)"),
            d = b.data("target");if (d || (d = b.attr("href"), d = d && d.replace(/.*(?=#[^\s]*$)/, "")), !b.parent("li").hasClass("active")) {
            var e = c.find(".active:last a"),
                f = a.Event("hide.bs.tab", { relatedTarget: b[0] }),
                g = a.Event("show.bs.tab", { relatedTarget: e[0] });if (e.trigger(f), b.trigger(g), !g.isDefaultPrevented() && !f.isDefaultPrevented()) {
                var h = a(d);this.activate(b.closest("li"), c), this.activate(h, h.parent(), function () {
                    e.trigger({ type: "hidden.bs.tab", relatedTarget: b[0] }), b.trigger({ type: "shown.bs.tab", relatedTarget: e[0] });
                });
            }
        }
    }, c.prototype.activate = function (b, d, e) {
        function f() {
            g.removeClass("active").find("> .dropdown-menu > .active").removeClass("active").end().find('[data-toggle="tab"]').attr("aria-expanded", !1), b.addClass("active").find('[data-toggle="tab"]').attr("aria-expanded", !0), h ? (b[0].offsetWidth, b.addClass("in")) : b.removeClass("fade"), b.parent(".dropdown-menu").length && b.closest("li.dropdown").addClass("active").end().find('[data-toggle="tab"]').attr("aria-expanded", !0), e && e();
        }var g = d.find("> .active"),
            h = e && a.support.transition && (g.length && g.hasClass("fade") || !!d.find("> .fade").length);g.length && h ? g.one("bsTransitionEnd", f).emulateTransitionEnd(c.TRANSITION_DURATION) : f(), g.removeClass("in");
    };var d = a.fn.tab;a.fn.tab = b, a.fn.tab.Constructor = c, a.fn.tab.noConflict = function () {
        return a.fn.tab = d, this;
    };var e = function e(c) {
        c.preventDefault(), b.call(a(this), "show");
    };a(document).on("click.bs.tab.data-api", '[data-toggle="tab"]', e).on("click.bs.tab.data-api", '[data-toggle="pill"]', e);
}(jQuery), +function (a) {
    "use strict";
    function b(b) {
        return this.each(function () {
            var d = a(this),
                e = d.data("bs.affix"),
                f = "object" == (typeof b === "undefined" ? "undefined" : _typeof(b)) && b;e || d.data("bs.affix", e = new c(this, f)), "string" == typeof b && e[b]();
        });
    }var c = function c(b, d) {
        this.options = a.extend({}, c.DEFAULTS, d), this.$target = a(this.options.target).on("scroll.bs.affix.data-api", a.proxy(this.checkPosition, this)).on("click.bs.affix.data-api", a.proxy(this.checkPositionWithEventLoop, this)), this.$element = a(b), this.affixed = null, this.unpin = null, this.pinnedOffset = null, this.checkPosition();
    };c.VERSION = "3.3.7", c.RESET = "affix affix-top affix-bottom", c.DEFAULTS = { offset: 0, target: window }, c.prototype.getState = function (a, b, c, d) {
        var e = this.$target.scrollTop(),
            f = this.$element.offset(),
            g = this.$target.height();if (null != c && "top" == this.affixed) return e < c && "top";if ("bottom" == this.affixed) return null != c ? !(e + this.unpin <= f.top) && "bottom" : !(e + g <= a - d) && "bottom";var h = null == this.affixed,
            i = h ? e : f.top,
            j = h ? g : b;return null != c && e <= c ? "top" : null != d && i + j >= a - d && "bottom";
    }, c.prototype.getPinnedOffset = function () {
        if (this.pinnedOffset) return this.pinnedOffset;this.$element.removeClass(c.RESET).addClass("affix");var a = this.$target.scrollTop(),
            b = this.$element.offset();return this.pinnedOffset = b.top - a;
    }, c.prototype.checkPositionWithEventLoop = function () {
        setTimeout(a.proxy(this.checkPosition, this), 1);
    }, c.prototype.checkPosition = function () {
        if (this.$element.is(":visible")) {
            var b = this.$element.height(),
                d = this.options.offset,
                e = d.top,
                f = d.bottom,
                g = Math.max(a(document).height(), a(document.body).height());"object" != (typeof d === "undefined" ? "undefined" : _typeof(d)) && (f = e = d), "function" == typeof e && (e = d.top(this.$element)), "function" == typeof f && (f = d.bottom(this.$element));var h = this.getState(g, b, e, f);if (this.affixed != h) {
                null != this.unpin && this.$element.css("top", "");var i = "affix" + (h ? "-" + h : ""),
                    j = a.Event(i + ".bs.affix");if (this.$element.trigger(j), j.isDefaultPrevented()) return;this.affixed = h, this.unpin = "bottom" == h ? this.getPinnedOffset() : null, this.$element.removeClass(c.RESET).addClass(i).trigger(i.replace("affix", "affixed") + ".bs.affix");
            }"bottom" == h && this.$element.offset({ top: g - b - f });
        }
    };var d = a.fn.affix;a.fn.affix = b, a.fn.affix.Constructor = c, a.fn.affix.noConflict = function () {
        return a.fn.affix = d, this;
    }, a(window).on("load", function () {
        a('[data-spy="affix"]').each(function () {
            var c = a(this),
                d = c.data();d.offset = d.offset || {}, null != d.offsetBottom && (d.offset.bottom = d.offsetBottom), null != d.offsetTop && (d.offset.top = d.offsetTop), b.call(c, d);
        });
    });
}(jQuery);
(function () {
    function require(name) {
        var module = require.modules[name];if (!module) throw new Error('failed to require "' + name + '"');if (!("exports" in module) && typeof module.definition === "function") {
            module.client = module.component = true;module.definition.call(this, module.exports = {}, module);delete module.definition;
        }return module.exports;
    }require.loader = "component";require.helper = {};require.helper.semVerSort = function (a, b) {
        var aArray = a.version.split(".");var bArray = b.version.split(".");for (var i = 0; i < aArray.length; ++i) {
            var aInt = parseInt(aArray[i], 10);var bInt = parseInt(bArray[i], 10);if (aInt === bInt) {
                var aLex = aArray[i].substr(("" + aInt).length);var bLex = bArray[i].substr(("" + bInt).length);if (aLex === "" && bLex !== "") return 1;if (aLex !== "" && bLex === "") return -1;if (aLex !== "" && bLex !== "") return aLex > bLex ? 1 : -1;continue;
            } else if (aInt > bInt) {
                return 1;
            } else {
                return -1;
            }
        }return 0;
    };require.latest = function (name, returnPath) {
        function showError(name) {
            throw new Error('failed to find latest module of "' + name + '"');
        }var versionRegexp = /(.*)~(.*)@v?(\d+\.\d+\.\d+[^\/]*)$/;var remoteRegexp = /(.*)~(.*)/;if (!remoteRegexp.test(name)) showError(name);var moduleNames = Object.keys(require.modules);var semVerCandidates = [];var otherCandidates = [];for (var i = 0; i < moduleNames.length; i++) {
            var moduleName = moduleNames[i];if (new RegExp(name + "@").test(moduleName)) {
                var version = moduleName.substr(name.length + 1);var semVerMatch = versionRegexp.exec(moduleName);if (semVerMatch != null) {
                    semVerCandidates.push({ version: version, name: moduleName });
                } else {
                    otherCandidates.push({ version: version, name: moduleName });
                }
            }
        }if (semVerCandidates.concat(otherCandidates).length === 0) {
            showError(name);
        }if (semVerCandidates.length > 0) {
            var module = semVerCandidates.sort(require.helper.semVerSort).pop().name;if (returnPath === true) {
                return module;
            }return require(module);
        }var module = otherCandidates.sort(function (a, b) {
            return a.name > b.name;
        })[0].name;if (returnPath === true) {
            return module;
        }return require(module);
    };require.modules = {};require.register = function (name, definition) {
        require.modules[name] = { definition: definition };
    };require.define = function (name, exports) {
        require.modules[name] = { exports: exports };
    };require.register("abpetkov~transitionize@0.0.3", function (exports, module) {
        module.exports = Transitionize;function Transitionize(element, props) {
            if (!(this instanceof Transitionize)) return new Transitionize(element, props);this.element = element;this.props = props || {};this.init();
        }Transitionize.prototype.isSafari = function () {
            return (/Safari/.test(navigator.userAgent) && /Apple Computer/.test(navigator.vendor)
            );
        };Transitionize.prototype.init = function () {
            var transitions = [];for (var key in this.props) {
                transitions.push(key + " " + this.props[key]);
            }this.element.style.transition = transitions.join(", ");if (this.isSafari()) this.element.style.webkitTransition = transitions.join(", ");
        };
    });require.register("ftlabs~fastclick@v0.6.11", function (exports, module) {
        function FastClick(layer) {
            "use strict";
            var oldOnClick,
                self = this;this.trackingClick = false;this.trackingClickStart = 0;this.targetElement = null;this.touchStartX = 0;this.touchStartY = 0;this.lastTouchIdentifier = 0;this.touchBoundary = 10;this.layer = layer;if (!layer || !layer.nodeType) {
                throw new TypeError("Layer must be a document node");
            }this.onClick = function () {
                return FastClick.prototype.onClick.apply(self, arguments);
            };this.onMouse = function () {
                return FastClick.prototype.onMouse.apply(self, arguments);
            };this.onTouchStart = function () {
                return FastClick.prototype.onTouchStart.apply(self, arguments);
            };this.onTouchMove = function () {
                return FastClick.prototype.onTouchMove.apply(self, arguments);
            };this.onTouchEnd = function () {
                return FastClick.prototype.onTouchEnd.apply(self, arguments);
            };this.onTouchCancel = function () {
                return FastClick.prototype.onTouchCancel.apply(self, arguments);
            };if (FastClick.notNeeded(layer)) {
                return;
            }if (this.deviceIsAndroid) {
                layer.addEventListener("mouseover", this.onMouse, true);layer.addEventListener("mousedown", this.onMouse, true);layer.addEventListener("mouseup", this.onMouse, true);
            }layer.addEventListener("click", this.onClick, true);layer.addEventListener("touchstart", this.onTouchStart, false);layer.addEventListener("touchmove", this.onTouchMove, false);layer.addEventListener("touchend", this.onTouchEnd, false);layer.addEventListener("touchcancel", this.onTouchCancel, false);if (!Event.prototype.stopImmediatePropagation) {
                layer.removeEventListener = function (type, callback, capture) {
                    var rmv = Node.prototype.removeEventListener;if (type === "click") {
                        rmv.call(layer, type, callback.hijacked || callback, capture);
                    } else {
                        rmv.call(layer, type, callback, capture);
                    }
                };layer.addEventListener = function (type, callback, capture) {
                    var adv = Node.prototype.addEventListener;if (type === "click") {
                        adv.call(layer, type, callback.hijacked || (callback.hijacked = function (event) {
                            if (!event.propagationStopped) {
                                callback(event);
                            }
                        }), capture);
                    } else {
                        adv.call(layer, type, callback, capture);
                    }
                };
            }if (typeof layer.onclick === "function") {
                oldOnClick = layer.onclick;layer.addEventListener("click", function (event) {
                    oldOnClick(event);
                }, false);layer.onclick = null;
            }
        }FastClick.prototype.deviceIsAndroid = navigator.userAgent.indexOf("Android") > 0;FastClick.prototype.deviceIsIOS = /iP(ad|hone|od)/.test(navigator.userAgent);FastClick.prototype.deviceIsIOS4 = FastClick.prototype.deviceIsIOS && /OS 4_\d(_\d)?/.test(navigator.userAgent);FastClick.prototype.deviceIsIOSWithBadTarget = FastClick.prototype.deviceIsIOS && /OS ([6-9]|\d{2})_\d/.test(navigator.userAgent);FastClick.prototype.needsClick = function (target) {
            "use strict";
            switch (target.nodeName.toLowerCase()) {case "button":case "select":case "textarea":
                    if (target.disabled) {
                        return true;
                    }break;case "input":
                    if (this.deviceIsIOS && target.type === "file" || target.disabled) {
                        return true;
                    }break;case "label":case "video":
                    return true;}return (/\bneedsclick\b/.test(target.className)
            );
        };FastClick.prototype.needsFocus = function (target) {
            "use strict";
            switch (target.nodeName.toLowerCase()) {case "textarea":
                    return true;case "select":
                    return !this.deviceIsAndroid;case "input":
                    switch (target.type) {case "button":case "checkbox":case "file":case "image":case "radio":case "submit":
                            return false;}return !target.disabled && !target.readOnly;default:
                    return (/\bneedsfocus\b/.test(target.className)
                    );}
        };FastClick.prototype.sendClick = function (targetElement, event) {
            "use strict";
            var clickEvent, touch;if (document.activeElement && document.activeElement !== targetElement) {
                document.activeElement.blur();
            }touch = event.changedTouches[0];clickEvent = document.createEvent("MouseEvents");clickEvent.initMouseEvent(this.determineEventType(targetElement), true, true, window, 1, touch.screenX, touch.screenY, touch.clientX, touch.clientY, false, false, false, false, 0, null);clickEvent.forwardedTouchEvent = true;targetElement.dispatchEvent(clickEvent);
        };FastClick.prototype.determineEventType = function (targetElement) {
            "use strict";
            if (this.deviceIsAndroid && targetElement.tagName.toLowerCase() === "select") {
                return "mousedown";
            }return "click";
        };FastClick.prototype.focus = function (targetElement) {
            "use strict";
            var length;if (this.deviceIsIOS && targetElement.setSelectionRange && targetElement.type.indexOf("date") !== 0 && targetElement.type !== "time") {
                length = targetElement.value.length;targetElement.setSelectionRange(length, length);
            } else {
                targetElement.focus();
            }
        };FastClick.prototype.updateScrollParent = function (targetElement) {
            "use strict";
            var scrollParent, parentElement;scrollParent = targetElement.fastClickScrollParent;if (!scrollParent || !scrollParent.contains(targetElement)) {
                parentElement = targetElement;do {
                    if (parentElement.scrollHeight > parentElement.offsetHeight) {
                        scrollParent = parentElement;targetElement.fastClickScrollParent = parentElement;break;
                    }parentElement = parentElement.parentElement;
                } while (parentElement);
            }if (scrollParent) {
                scrollParent.fastClickLastScrollTop = scrollParent.scrollTop;
            }
        };FastClick.prototype.getTargetElementFromEventTarget = function (eventTarget) {
            "use strict";
            if (eventTarget.nodeType === Node.TEXT_NODE) {
                return eventTarget.parentNode;
            }return eventTarget;
        };FastClick.prototype.onTouchStart = function (event) {
            "use strict";
            var targetElement, touch, selection;if (event.targetTouches.length > 1) {
                return true;
            }targetElement = this.getTargetElementFromEventTarget(event.target);touch = event.targetTouches[0];if (this.deviceIsIOS) {
                selection = window.getSelection();if (selection.rangeCount && !selection.isCollapsed) {
                    return true;
                }if (!this.deviceIsIOS4) {
                    if (touch.identifier === this.lastTouchIdentifier) {
                        event.preventDefault();return false;
                    }this.lastTouchIdentifier = touch.identifier;this.updateScrollParent(targetElement);
                }
            }this.trackingClick = true;this.trackingClickStart = event.timeStamp;this.targetElement = targetElement;this.touchStartX = touch.pageX;this.touchStartY = touch.pageY;if (event.timeStamp - this.lastClickTime < 200) {
                event.preventDefault();
            }return true;
        };FastClick.prototype.touchHasMoved = function (event) {
            "use strict";
            var touch = event.changedTouches[0],
                boundary = this.touchBoundary;if (Math.abs(touch.pageX - this.touchStartX) > boundary || Math.abs(touch.pageY - this.touchStartY) > boundary) {
                return true;
            }return false;
        };FastClick.prototype.onTouchMove = function (event) {
            "use strict";
            if (!this.trackingClick) {
                return true;
            }if (this.targetElement !== this.getTargetElementFromEventTarget(event.target) || this.touchHasMoved(event)) {
                this.trackingClick = false;this.targetElement = null;
            }return true;
        };FastClick.prototype.findControl = function (labelElement) {
            "use strict";
            if (labelElement.control !== undefined) {
                return labelElement.control;
            }if (labelElement.htmlFor) {
                return document.getElementById(labelElement.htmlFor);
            }return labelElement.querySelector("button, input:not([type=hidden]), keygen, meter, output, progress, select, textarea");
        };FastClick.prototype.onTouchEnd = function (event) {
            "use strict";
            var forElement,
                trackingClickStart,
                targetTagName,
                scrollParent,
                touch,
                targetElement = this.targetElement;if (!this.trackingClick) {
                return true;
            }if (event.timeStamp - this.lastClickTime < 200) {
                this.cancelNextClick = true;return true;
            }this.cancelNextClick = false;this.lastClickTime = event.timeStamp;trackingClickStart = this.trackingClickStart;this.trackingClick = false;this.trackingClickStart = 0;if (this.deviceIsIOSWithBadTarget) {
                touch = event.changedTouches[0];targetElement = document.elementFromPoint(touch.pageX - window.pageXOffset, touch.pageY - window.pageYOffset) || targetElement;targetElement.fastClickScrollParent = this.targetElement.fastClickScrollParent;
            }targetTagName = targetElement.tagName.toLowerCase();if (targetTagName === "label") {
                forElement = this.findControl(targetElement);if (forElement) {
                    this.focus(targetElement);if (this.deviceIsAndroid) {
                        return false;
                    }targetElement = forElement;
                }
            } else if (this.needsFocus(targetElement)) {
                if (event.timeStamp - trackingClickStart > 100 || this.deviceIsIOS && window.top !== window && targetTagName === "input") {
                    this.targetElement = null;return false;
                }this.focus(targetElement);if (!this.deviceIsIOS4 || targetTagName !== "select") {
                    this.targetElement = null;event.preventDefault();
                }return false;
            }if (this.deviceIsIOS && !this.deviceIsIOS4) {
                scrollParent = targetElement.fastClickScrollParent;if (scrollParent && scrollParent.fastClickLastScrollTop !== scrollParent.scrollTop) {
                    return true;
                }
            }if (!this.needsClick(targetElement)) {
                event.preventDefault();this.sendClick(targetElement, event);
            }return false;
        };FastClick.prototype.onTouchCancel = function () {
            "use strict";
            this.trackingClick = false;this.targetElement = null;
        };FastClick.prototype.onMouse = function (event) {
            "use strict";
            if (!this.targetElement) {
                return true;
            }if (event.forwardedTouchEvent) {
                return true;
            }if (!event.cancelable) {
                return true;
            }if (!this.needsClick(this.targetElement) || this.cancelNextClick) {
                if (event.stopImmediatePropagation) {
                    event.stopImmediatePropagation();
                } else {
                    event.propagationStopped = true;
                }event.stopPropagation();event.preventDefault();return false;
            }return true;
        };FastClick.prototype.onClick = function (event) {
            "use strict";
            var permitted;if (this.trackingClick) {
                this.targetElement = null;this.trackingClick = false;return true;
            }if (event.target.type === "submit" && event.detail === 0) {
                return true;
            }permitted = this.onMouse(event);if (!permitted) {
                this.targetElement = null;
            }return permitted;
        };FastClick.prototype.destroy = function () {
            "use strict";
            var layer = this.layer;if (this.deviceIsAndroid) {
                layer.removeEventListener("mouseover", this.onMouse, true);layer.removeEventListener("mousedown", this.onMouse, true);layer.removeEventListener("mouseup", this.onMouse, true);
            }layer.removeEventListener("click", this.onClick, true);layer.removeEventListener("touchstart", this.onTouchStart, false);layer.removeEventListener("touchmove", this.onTouchMove, false);layer.removeEventListener("touchend", this.onTouchEnd, false);layer.removeEventListener("touchcancel", this.onTouchCancel, false);
        };FastClick.notNeeded = function (layer) {
            "use strict";
            var metaViewport;var chromeVersion;if (typeof window.ontouchstart === "undefined") {
                return true;
            }chromeVersion = +(/Chrome\/([0-9]+)/.exec(navigator.userAgent) || [, 0])[1];if (chromeVersion) {
                if (FastClick.prototype.deviceIsAndroid) {
                    metaViewport = document.querySelector("meta[name=viewport]");if (metaViewport) {
                        if (metaViewport.content.indexOf("user-scalable=no") !== -1) {
                            return true;
                        }if (chromeVersion > 31 && window.innerWidth <= window.screen.width) {
                            return true;
                        }
                    }
                } else {
                    return true;
                }
            }if (layer.style.msTouchAction === "none") {
                return true;
            }return false;
        };FastClick.attach = function (layer) {
            "use strict";
            return new FastClick(layer);
        };if (typeof define !== "undefined" && define.amd) {
            define(function () {
                "use strict";
                return FastClick;
            });
        } else if (typeof module !== "undefined" && module.exports) {
            module.exports = FastClick.attach;module.exports.FastClick = FastClick;
        } else {
            window.FastClick = FastClick;
        }
    });require.register("component~indexof@0.0.3", function (exports, module) {
        module.exports = function (arr, obj) {
            if (arr.indexOf) return arr.indexOf(obj);for (var i = 0; i < arr.length; ++i) {
                if (arr[i] === obj) return i;
            }return -1;
        };
    });require.register("component~classes@1.2.1", function (exports, module) {
        var index = require("component~indexof@0.0.3");var re = /\s+/;var toString = Object.prototype.toString;module.exports = function (el) {
            return new ClassList(el);
        };function ClassList(el) {
            if (!el) throw new Error("A DOM element reference is required");this.el = el;this.list = el.classList;
        }ClassList.prototype.add = function (name) {
            if (this.list) {
                this.list.add(name);return this;
            }var arr = this.array();var i = index(arr, name);if (!~i) arr.push(name);this.el.className = arr.join(" ");return this;
        };ClassList.prototype.remove = function (name) {
            if ("[object RegExp]" == toString.call(name)) {
                return this.removeMatching(name);
            }if (this.list) {
                this.list.remove(name);return this;
            }var arr = this.array();var i = index(arr, name);if (~i) arr.splice(i, 1);this.el.className = arr.join(" ");return this;
        };ClassList.prototype.removeMatching = function (re) {
            var arr = this.array();for (var i = 0; i < arr.length; i++) {
                if (re.test(arr[i])) {
                    this.remove(arr[i]);
                }
            }return this;
        };ClassList.prototype.toggle = function (name, force) {
            if (this.list) {
                if ("undefined" !== typeof force) {
                    if (force !== this.list.toggle(name, force)) {
                        this.list.toggle(name);
                    }
                } else {
                    this.list.toggle(name);
                }return this;
            }if ("undefined" !== typeof force) {
                if (!force) {
                    this.remove(name);
                } else {
                    this.add(name);
                }
            } else {
                if (this.has(name)) {
                    this.remove(name);
                } else {
                    this.add(name);
                }
            }return this;
        };ClassList.prototype.array = function () {
            var str = this.el.className.replace(/^\s+|\s+$/g, "");var arr = str.split(re);if ("" === arr[0]) arr.shift();return arr;
        };ClassList.prototype.has = ClassList.prototype.contains = function (name) {
            return this.list ? this.list.contains(name) : !!~index(this.array(), name);
        };
    });require.register("component~event@0.1.4", function (exports, module) {
        var bind = window.addEventListener ? "addEventListener" : "attachEvent",
            unbind = window.removeEventListener ? "removeEventListener" : "detachEvent",
            prefix = bind !== "addEventListener" ? "on" : "";exports.bind = function (el, type, fn, capture) {
            el[bind](prefix + type, fn, capture || false);return fn;
        };exports.unbind = function (el, type, fn, capture) {
            el[unbind](prefix + type, fn, capture || false);return fn;
        };
    });require.register("component~query@0.0.3", function (exports, module) {
        function one(selector, el) {
            return el.querySelector(selector);
        }exports = module.exports = function (selector, el) {
            el = el || document;return one(selector, el);
        };exports.all = function (selector, el) {
            el = el || document;return el.querySelectorAll(selector);
        };exports.engine = function (obj) {
            if (!obj.one) throw new Error(".one callback required");if (!obj.all) throw new Error(".all callback required");one = obj.one;exports.all = obj.all;return exports;
        };
    });require.register("component~matches-selector@0.1.5", function (exports, module) {
        var query = require("component~query@0.0.3");var proto = Element.prototype;var vendor = proto.matches || proto.webkitMatchesSelector || proto.mozMatchesSelector || proto.msMatchesSelector || proto.oMatchesSelector;module.exports = match;function match(el, selector) {
            if (!el || el.nodeType !== 1) return false;if (vendor) return vendor.call(el, selector);var nodes = query.all(selector, el.parentNode);for (var i = 0; i < nodes.length; ++i) {
                if (nodes[i] == el) return true;
            }return false;
        }
    });require.register("component~closest@0.1.4", function (exports, module) {
        var matches = require("component~matches-selector@0.1.5");module.exports = function (element, selector, checkYoSelf, root) {
            element = checkYoSelf ? { parentNode: element } : element;root = root || document;while ((element = element.parentNode) && element !== document) {
                if (matches(element, selector)) return element;if (element === root) return;
            }
        };
    });require.register("component~delegate@0.2.3", function (exports, module) {
        var closest = require("component~closest@0.1.4"),
            event = require("component~event@0.1.4");exports.bind = function (el, selector, type, fn, capture) {
            return event.bind(el, type, function (e) {
                var target = e.target || e.srcElement;e.delegateTarget = closest(target, selector, true, el);if (e.delegateTarget) fn.call(el, e);
            }, capture);
        };exports.unbind = function (el, type, fn, capture) {
            event.unbind(el, type, fn, capture);
        };
    });require.register("component~events@1.0.9", function (exports, module) {
        var events = require("component~event@0.1.4");var delegate = require("component~delegate@0.2.3");module.exports = Events;function Events(el, obj) {
            if (!(this instanceof Events)) return new Events(el, obj);if (!el) throw new Error("element required");if (!obj) throw new Error("object required");this.el = el;this.obj = obj;this._events = {};
        }Events.prototype.sub = function (event, method, cb) {
            this._events[event] = this._events[event] || {};this._events[event][method] = cb;
        };Events.prototype.bind = function (event, method) {
            var e = parse(event);var el = this.el;var obj = this.obj;var name = e.name;var method = method || "on" + name;var args = [].slice.call(arguments, 2);function cb() {
                var a = [].slice.call(arguments).concat(args);obj[method].apply(obj, a);
            }if (e.selector) {
                cb = delegate.bind(el, e.selector, name, cb);
            } else {
                events.bind(el, name, cb);
            }this.sub(name, method, cb);return cb;
        };Events.prototype.unbind = function (event, method) {
            if (0 == arguments.length) return this.unbindAll();if (1 == arguments.length) return this.unbindAllOf(event);var bindings = this._events[event];if (!bindings) return;var cb = bindings[method];if (!cb) return;events.unbind(this.el, event, cb);
        };Events.prototype.unbindAll = function () {
            for (var event in this._events) {
                this.unbindAllOf(event);
            }
        };Events.prototype.unbindAllOf = function (event) {
            var bindings = this._events[event];if (!bindings) return;for (var method in bindings) {
                this.unbind(event, method);
            }
        };function parse(event) {
            var parts = event.split(/ +/);return { name: parts.shift(), selector: parts.join(" ") };
        }
    });require.register("switchery", function (exports, module) {
        var transitionize = require("abpetkov~transitionize@0.0.3"),
            fastclick = require("ftlabs~fastclick@v0.6.11"),
            classes = require("component~classes@1.2.1"),
            events = require("component~events@1.0.9");module.exports = Switchery;var defaults = { color: "#64bd63", secondaryColor: "#dfdfdf", jackColor: "#fff", jackSecondaryColor: null, className: "switchery", disabled: false, disabledOpacity: .5, speed: "0.4s", size: "default" };function Switchery(element, options) {
            if (!(this instanceof Switchery)) return new Switchery(element, options);this.element = element;this.options = options || {};for (var i in defaults) {
                if (this.options[i] == null) {
                    this.options[i] = defaults[i];
                }
            }if (this.element != null && this.element.type == "checkbox") this.init();if (this.isDisabled() === true) this.disable();
        }Switchery.prototype.hide = function () {
            this.element.style.display = "none";
        };Switchery.prototype.show = function () {
            var switcher = this.create();this.insertAfter(this.element, switcher);
        };Switchery.prototype.create = function () {
            this.switcher = document.createElement("span");this.jack = document.createElement("small");this.switcher.appendChild(this.jack);this.switcher.className = this.options.className;this.events = events(this.switcher, this);return this.switcher;
        };Switchery.prototype.insertAfter = function (reference, target) {
            reference.parentNode.insertBefore(target, reference.nextSibling);
        };Switchery.prototype.setPosition = function (clicked) {
            var checked = this.isChecked(),
                switcher = this.switcher,
                jack = this.jack;if (clicked && checked) checked = false;else if (clicked && !checked) checked = true;if (checked === true) {
                this.element.checked = true;if (window.getComputedStyle) jack.style.left = parseInt(window.getComputedStyle(switcher).width) - parseInt(window.getComputedStyle(jack).width) + "px";else jack.style.left = parseInt(switcher.currentStyle["width"]) - parseInt(jack.currentStyle["width"]) + "px";if (this.options.color) this.colorize();this.setSpeed();
            } else {
                jack.style.left = 0;this.element.checked = false;this.switcher.style.boxShadow = "inset 0 0 0 0 " + this.options.secondaryColor;this.switcher.style.borderColor = this.options.secondaryColor;this.switcher.style.backgroundColor = this.options.secondaryColor !== defaults.secondaryColor ? this.options.secondaryColor : "#fff";this.jack.style.backgroundColor = this.options.jackSecondaryColor !== this.options.jackColor ? this.options.jackSecondaryColor : this.options.jackColor;this.setSpeed();
            }
        };Switchery.prototype.setSpeed = function () {
            var switcherProp = {},
                jackProp = { "background-color": this.options.speed, left: this.options.speed.replace(/[a-z]/, "") / 2 + "s" };if (this.isChecked()) {
                switcherProp = { border: this.options.speed, "box-shadow": this.options.speed, "background-color": this.options.speed.replace(/[a-z]/, "") * 3 + "s" };
            } else {
                switcherProp = { border: this.options.speed, "box-shadow": this.options.speed };
            }transitionize(this.switcher, switcherProp);transitionize(this.jack, jackProp);
        };Switchery.prototype.setSize = function () {
            var small = "switchery-small",
                normal = "switchery-default",
                large = "switchery-large";switch (this.options.size) {case "small":
                    classes(this.switcher).add(small);break;case "large":
                    classes(this.switcher).add(large);break;default:
                    classes(this.switcher).add(normal);break;}
        };Switchery.prototype.colorize = function () {
            var switcherHeight = this.switcher.offsetHeight / 2;this.switcher.style.backgroundColor = this.options.color;this.switcher.style.borderColor = this.options.color;this.switcher.style.boxShadow = "inset 0 0 0 " + switcherHeight + "px " + this.options.color;this.jack.style.backgroundColor = this.options.jackColor;
        };Switchery.prototype.handleOnchange = function (state) {
            if (document.dispatchEvent) {
                var event = document.createEvent("HTMLEvents");event.initEvent("change", true, true);this.element.dispatchEvent(event);
            } else {
                this.element.fireEvent("onchange");
            }
        };Switchery.prototype.handleChange = function () {
            var self = this,
                el = this.element;if (el.addEventListener) {
                el.addEventListener("change", function () {
                    self.setPosition();
                });
            } else {
                el.attachEvent("onchange", function () {
                    self.setPosition();
                });
            }
        };Switchery.prototype.handleClick = function () {
            var switcher = this.switcher;fastclick(switcher);this.events.bind("click", "bindClick");
        };Switchery.prototype.bindClick = function () {
            var parent = this.element.parentNode.tagName.toLowerCase(),
                labelParent = parent === "label" ? false : true;this.setPosition(labelParent);this.handleOnchange(this.element.checked);
        };Switchery.prototype.markAsSwitched = function () {
            this.element.setAttribute("data-switchery", true);
        };Switchery.prototype.markedAsSwitched = function () {
            return this.element.getAttribute("data-switchery");
        };Switchery.prototype.init = function () {
            this.hide();this.show();this.setSize();this.setPosition();this.markAsSwitched();this.handleChange();this.handleClick();
        };Switchery.prototype.isChecked = function () {
            return this.element.checked;
        };Switchery.prototype.isDisabled = function () {
            return this.options.disabled || this.element.disabled || this.element.readOnly;
        };Switchery.prototype.destroy = function () {
            this.events.unbind();
        };Switchery.prototype.enable = function () {
            if (!this.options.disabled) return;if (this.options.disabled) this.options.disabled = false;if (this.element.disabled) this.element.disabled = false;if (this.element.readOnly) this.element.readOnly = false;this.switcher.style.opacity = 1;this.events.bind("click", "bindClick");
        };Switchery.prototype.disable = function () {
            if (this.options.disabled) return;if (!this.options.disabled) this.options.disabled = true;if (!this.element.disabled) this.element.disabled = true;if (!this.element.readOnly) this.element.readOnly = true;this.switcher.style.opacity = this.options.disabledOpacity;this.destroy();
        };
    });if ((typeof exports === "undefined" ? "undefined" : _typeof(exports)) == "object") {
        module.exports = require("switchery");
    } else if (typeof define == "function" && define.amd) {
        define("Switchery", [], function () {
            return require("switchery");
        });
    } else {
        (this || window)["Switchery"] = require("switchery");
    }
})();
!function (e, t, n) {
    "use strict";
    function s(e) {
        var t = Array.prototype.slice.call(arguments, 1);return e.prop ? e.prop.apply(e, t) : e.attr.apply(e, t);
    }function a(e, t, n) {
        var s, a;for (s in n) {
            n.hasOwnProperty(s) && (a = s.replace(/ |$/g, t.eventNamespace), e.bind(a, n[s]));
        }
    }function i(e, t, n) {
        a(e, n, { focus: function focus() {
                t.addClass(n.focusClass);
            }, blur: function blur() {
                t.removeClass(n.focusClass), t.removeClass(n.activeClass);
            }, mouseenter: function mouseenter() {
                t.addClass(n.hoverClass);
            }, mouseleave: function mouseleave() {
                t.removeClass(n.hoverClass), t.removeClass(n.activeClass);
            }, "mousedown touchbegin": function mousedownTouchbegin() {
                e.is(":disabled") || t.addClass(n.activeClass);
            }, "mouseup touchend": function mouseupTouchend() {
                t.removeClass(n.activeClass);
            } });
    }function r(e, t) {
        e.removeClass(t.hoverClass + " " + t.focusClass + " " + t.activeClass);
    }function l(e, t, n) {
        n ? e.addClass(t) : e.removeClass(t);
    }function u(e, t, n) {
        var s = "checked",
            a = t.is(":" + s);t.prop ? t.prop(s, a) : a ? t.attr(s, s) : t.removeAttr(s), l(e, n.checkedClass, a);
    }function o(e, t, n) {
        l(e, n.disabledClass, t.is(":disabled"));
    }function c(e, t, n) {
        switch (n) {case "after":
                return e.after(t), e.next();case "before":
                return e.before(t), e.prev();case "wrap":
                return e.wrap(t), e.parent();}return null;
    }function d(e, n, a) {
        var i, r, l;return a || (a = {}), a = t.extend({ bind: {}, divClass: null, divWrap: "wrap", spanClass: null, spanHtml: null, spanWrap: "wrap" }, a), i = t("<div />"), r = t("<span />"), n.autoHide && e.is(":hidden") && "none" === e.css("display") && i.hide(), a.divClass && i.addClass(a.divClass), n.wrapperClass && i.addClass(n.wrapperClass), a.spanClass && r.addClass(a.spanClass), l = s(e, "id"), n.useID && l && s(i, "id", n.idPrefix + "-" + l), a.spanHtml && r.html(a.spanHtml), i = c(e, i, a.divWrap), r = c(e, r, a.spanWrap), o(i, e, n), { div: i, span: r };
    }function f(e, n) {
        var s;return n.wrapperClass ? (s = t("<span />").addClass(n.wrapperClass), s = c(e, s, "wrap")) : null;
    }function p() {
        var n, s, a, i;return i = "rgb(120,2,153)", s = t('<div style="width:0;height:0;color:' + i + '">'), t("body").append(s), a = s.get(0), n = e.getComputedStyle ? e.getComputedStyle(a, "").color : (a.currentStyle || a.style || {}).color, s.remove(), n.replace(/ /g, "") !== i;
    }function m(e) {
        return e ? t("<span />").text(e).html() : "";
    }function v() {
        return navigator.cpuClass && !navigator.product;
    }function h() {
        return void 0 !== e.XMLHttpRequest;
    }function C(e) {
        var t;return !!e[0].multiple || (t = s(e, "size"), !(!t || t <= 1));
    }function b() {
        return !1;
    }function y(e, t) {
        var n = "none";a(e, t, { "selectstart dragstart mousedown": b }), e.css({ MozUserSelect: n, msUserSelect: n, webkitUserSelect: n, userSelect: n });
    }function w(e, t, n) {
        var s = e.val();"" === s ? s = n.fileDefaultHtml : (s = s.split(/[\/\\]+/), s = s[s.length - 1]), t.text(s);
    }function g(e, t, n) {
        var s, a;for (s = [], e.each(function () {
            var e;for (e in t) {
                Object.prototype.hasOwnProperty.call(t, e) && (s.push({ el: this, name: e, old: this.style[e] }), this.style[e] = t[e]);
            }
        }), n(); s.length;) {
            a = s.pop(), a.el.style[a.name] = a.old;
        }
    }function k(e, t) {
        var n;n = e.parents(), n.push(e[0]), n = n.not(":visible"), g(n, { visibility: "hidden", display: "block", position: "absolute" }, t);
    }function x(e, t) {
        return function () {
            e.unwrap().unwrap().unbind(t.eventNamespace);
        };
    }var H = !0,
        A = !1,
        W = [{ match: function match(e) {
            return e.is("a, button, :submit, :reset, input[type='button']");
        }, apply: function apply(t, n) {
            var l, u, c, f, p;return u = n.submitDefaultHtml, t.is(":reset") && (u = n.resetDefaultHtml), f = t.is("a, button") ? function () {
                return t.html() || u;
            } : function () {
                return m(s(t, "value")) || u;
            }, c = d(t, n, { divClass: n.buttonClass, spanHtml: f() }), l = c.div, i(t, l, n), p = !1, a(l, n, { "click touchend": function clickTouchend() {
                    var n, a, i, r;p || t.is(":disabled") || (p = !0, t[0].dispatchEvent ? (n = document.createEvent("MouseEvents"), n.initEvent("click", !0, !0), a = t[0].dispatchEvent(n), t.is("a") && a && (i = s(t, "target"), r = s(t, "href"), i && "_self" !== i ? e.open(r, i) : document.location.href = r)) : t.click(), p = !1);
                } }), y(l, n), { remove: function remove() {
                    return l.after(t), l.remove(), t.unbind(n.eventNamespace), t;
                }, update: function update() {
                    r(l, n), o(l, t, n), t.detach(), c.span.html(f()).append(t);
                } };
        } }, { match: function match(e) {
            return e.is(":checkbox");
        }, apply: function apply(e, t) {
            var n, s, l;return n = d(e, t, { divClass: t.checkboxClass }), s = n.div, l = n.span, i(e, s, t), a(e, t, { "click touchend": function clickTouchend() {
                    u(l, e, t);
                } }), u(l, e, t), { remove: x(e, t), update: function update() {
                    r(s, t), l.removeClass(t.checkedClass), u(l, e, t), o(s, e, t);
                } };
        } }, { match: function match(e) {
            return e.is(":file");
        }, apply: function apply(e, n) {
            function l() {
                w(e, p, n);
            }var u, f, p, m;return u = d(e, n, { divClass: n.fileClass, spanClass: n.fileButtonClass, spanHtml: n.fileButtonHtml, spanWrap: "after" }), f = u.div, m = u.span, p = t("<span />").html(n.fileDefaultHtml), p.addClass(n.filenameClass), p = c(e, p, "after"), s(e, "size") || s(e, "size", f.width() / 10), i(e, f, n), l(), v() ? a(e, n, { click: function click() {
                    e.trigger("change"), setTimeout(l, 0);
                } }) : a(e, n, { change: l }), y(p, n), y(m, n), { remove: function remove() {
                    return p.remove(), m.remove(), e.unwrap().unbind(n.eventNamespace);
                }, update: function update() {
                    r(f, n), w(e, p, n), o(f, e, n);
                } };
        } }, { match: function match(e) {
            if (e.is("input")) {
                var t = (" " + s(e, "type") + " ").toLowerCase(),
                    n = " color date datetime datetime-local email month number password search tel text time url week ";return n.indexOf(t) >= 0;
            }return !1;
        }, apply: function apply(e, t) {
            var n, a;return n = s(e, "type"), e.addClass(t.inputClass), a = f(e, t), i(e, e, t), t.inputAddTypeAsClass && e.addClass(n), { remove: function remove() {
                    e.removeClass(t.inputClass), t.inputAddTypeAsClass && e.removeClass(n), a && e.unwrap();
                }, update: b };
        } }, { match: function match(e) {
            return e.is(":radio");
        }, apply: function apply(e, n) {
            var l, c, f;return l = d(e, n, { divClass: n.radioClass }), c = l.div, f = l.span, i(e, c, n), a(e, n, { "click touchend": function clickTouchend() {
                    t.uniform.update(t(':radio[name="' + s(e, "name") + '"]'));
                } }), u(f, e, n), { remove: x(e, n), update: function update() {
                    r(c, n), u(f, e, n), o(c, e, n);
                } };
        } }, { match: function match(e) {
            return !(!e.is("select") || C(e));
        }, apply: function apply(e, n) {
            var s, l, u, c;return n.selectAutoWidth && k(e, function () {
                c = e.width();
            }), s = d(e, n, { divClass: n.selectClass, spanHtml: (e.find(":selected:first") || e.find("option:first")).html(), spanWrap: "before" }), l = s.div, u = s.span, n.selectAutoWidth ? k(e, function () {
                g(t([u[0], l[0]]), { display: "block" }, function () {
                    var e;e = u.outerWidth() - u.width(), l.width(c + e), u.width(c);
                });
            }) : l.addClass("fixedWidth"), i(e, l, n), a(e, n, { change: function change() {
                    u.html(e.find(":selected").html()), l.removeClass(n.activeClass);
                }, "click touchend": function clickTouchend() {
                    var t = e.find(":selected").html();u.html() !== t && e.trigger("change");
                }, keyup: function keyup() {
                    u.html(e.find(":selected").html());
                } }), y(u, n), { remove: function remove() {
                    return u.remove(), e.unwrap().unbind(n.eventNamespace), e;
                }, update: function update() {
                    n.selectAutoWidth ? (t.uniform.restore(e), e.uniform(n)) : (r(l, n), e[0].selectedIndex = e[0].selectedIndex, u.html(e.find(":selected").html()), o(l, e, n));
                } };
        } }, { match: function match(e) {
            return !(!e.is("select") || !C(e));
        }, apply: function apply(e, t) {
            var n;return e.addClass(t.selectMultiClass), n = f(e, t), i(e, e, t), { remove: function remove() {
                    e.removeClass(t.selectMultiClass), n && e.unwrap();
                }, update: b };
        } }, { match: function match(e) {
            return e.is("textarea");
        }, apply: function apply(e, t) {
            var n;return e.addClass(t.textareaClass), n = f(e, t), i(e, e, t), { remove: function remove() {
                    e.removeClass(t.textareaClass), n && e.unwrap();
                }, update: b };
        } }];v() && !h() && (H = !1), t.uniform = { defaults: { activeClass: "active", autoHide: !0, buttonClass: "button", checkboxClass: "checker", checkedClass: "checked", disabledClass: "disabled", eventNamespace: ".uniform", fileButtonClass: "action", fileButtonHtml: "Choose File", fileClass: "uploader", fileDefaultHtml: "No file selected", filenameClass: "filename", focusClass: "focus", hoverClass: "hover", idPrefix: "uniform", inputAddTypeAsClass: !0, inputClass: "uniform-input", radioClass: "radio", resetDefaultHtml: "Reset", resetSelector: !1, selectAutoWidth: !0, selectClass: "selector", selectMultiClass: "uniform-multiselect", submitDefaultHtml: "Submit", textareaClass: "uniform", useID: !0, wrapperClass: null }, elements: [] }, t.fn.uniform = function (n) {
        var s = this;return n = t.extend({}, t.uniform.defaults, n), A || (A = !0, p() && (H = !1)), H ? (n.resetSelector && t(n.resetSelector).mouseup(function () {
            e.setTimeout(function () {
                t.uniform.update(s);
            }, 10);
        }), this.each(function () {
            var e,
                s,
                a,
                i = t(this);if (i.data("uniformed")) return void t.uniform.update(i);for (e = 0; e < W.length; e += 1) {
                if (s = W[e], s.match(i, n)) return a = s.apply(i, n), i.data("uniformed", a), void t.uniform.elements.push(i.get(0));
            }
        })) : this;
    }, t.uniform.restore = t.fn.uniform.restore = function (e) {
        e === n && (e = t.uniform.elements), t(e).each(function () {
            var e,
                n,
                s = t(this);n = s.data("uniformed"), n && (n.remove(), e = t.inArray(this, t.uniform.elements), e >= 0 && t.uniform.elements.splice(e, 1), s.removeData("uniformed"));
        });
    }, t.uniform.update = t.fn.uniform.update = function (e) {
        e === n && (e = t.uniform.elements), t(e).each(function () {
            var e,
                n = t(this);e = n.data("uniformed"), e && e.update(n, e.options);
        });
    };
}(this, jQuery);
/*! Select2 4.0.3 | https://github.com/select2/select2/blob/master/LICENSE.md */!function (a) {
    "function" == typeof define && define.amd ? define(["jquery"], a) : a("object" == (typeof exports === "undefined" ? "undefined" : _typeof(exports)) ? require("jquery") : jQuery);
}(function (a) {
    var b = function () {
        if (a && a.fn && a.fn.select2 && a.fn.select2.amd) var b = a.fn.select2.amd;var b;return function () {
            if (!b || !b.requirejs) {
                b ? c = b : b = {};var a, c, d;!function (b) {
                    function e(a, b) {
                        return u.call(a, b);
                    }function f(a, b) {
                        var c,
                            d,
                            e,
                            f,
                            g,
                            h,
                            i,
                            j,
                            k,
                            l,
                            m,
                            n = b && b.split("/"),
                            o = s.map,
                            p = o && o["*"] || {};if (a && "." === a.charAt(0)) if (b) {
                            for (a = a.split("/"), g = a.length - 1, s.nodeIdCompat && w.test(a[g]) && (a[g] = a[g].replace(w, "")), a = n.slice(0, n.length - 1).concat(a), k = 0; k < a.length; k += 1) {
                                if (m = a[k], "." === m) a.splice(k, 1), k -= 1;else if (".." === m) {
                                    if (1 === k && (".." === a[2] || ".." === a[0])) break;k > 0 && (a.splice(k - 1, 2), k -= 2);
                                }
                            }a = a.join("/");
                        } else 0 === a.indexOf("./") && (a = a.substring(2));if ((n || p) && o) {
                            for (c = a.split("/"), k = c.length; k > 0; k -= 1) {
                                if (d = c.slice(0, k).join("/"), n) for (l = n.length; l > 0; l -= 1) {
                                    if (e = o[n.slice(0, l).join("/")], e && (e = e[d])) {
                                        f = e, h = k;break;
                                    }
                                }if (f) break;!i && p && p[d] && (i = p[d], j = k);
                            }!f && i && (f = i, h = j), f && (c.splice(0, h, f), a = c.join("/"));
                        }return a;
                    }function g(a, c) {
                        return function () {
                            var d = v.call(arguments, 0);return "string" != typeof d[0] && 1 === d.length && d.push(null), _n.apply(b, d.concat([a, c]));
                        };
                    }function h(a) {
                        return function (b) {
                            return f(b, a);
                        };
                    }function i(a) {
                        return function (b) {
                            q[a] = b;
                        };
                    }function j(a) {
                        if (e(r, a)) {
                            var c = r[a];delete r[a], t[a] = !0, m.apply(b, c);
                        }if (!e(q, a) && !e(t, a)) throw new Error("No " + a);return q[a];
                    }function k(a) {
                        var b,
                            c = a ? a.indexOf("!") : -1;return c > -1 && (b = a.substring(0, c), a = a.substring(c + 1, a.length)), [b, a];
                    }function l(a) {
                        return function () {
                            return s && s.config && s.config[a] || {};
                        };
                    }var m,
                        _n,
                        o,
                        p,
                        q = {},
                        r = {},
                        s = {},
                        t = {},
                        u = Object.prototype.hasOwnProperty,
                        v = [].slice,
                        w = /\.js$/;o = function o(a, b) {
                        var c,
                            d = k(a),
                            e = d[0];return a = d[1], e && (e = f(e, b), c = j(e)), e ? a = c && c.normalize ? c.normalize(a, h(b)) : f(a, b) : (a = f(a, b), d = k(a), e = d[0], a = d[1], e && (c = j(e))), { f: e ? e + "!" + a : a, n: a, pr: e, p: c };
                    }, p = { require: function require(a) {
                            return g(a);
                        }, exports: function exports(a) {
                            var b = q[a];return "undefined" != typeof b ? b : q[a] = {};
                        }, module: function module(a) {
                            return { id: a, uri: "", exports: q[a], config: l(a) };
                        } }, m = function m(a, c, d, f) {
                        var h,
                            k,
                            l,
                            m,
                            n,
                            s,
                            u = [],
                            v = typeof d === "undefined" ? "undefined" : _typeof(d);if (f = f || a, "undefined" === v || "function" === v) {
                            for (c = !c.length && d.length ? ["require", "exports", "module"] : c, n = 0; n < c.length; n += 1) {
                                if (m = o(c[n], f), k = m.f, "require" === k) u[n] = p.require(a);else if ("exports" === k) u[n] = p.exports(a), s = !0;else if ("module" === k) h = u[n] = p.module(a);else if (e(q, k) || e(r, k) || e(t, k)) u[n] = j(k);else {
                                    if (!m.p) throw new Error(a + " missing " + k);m.p.load(m.n, g(f, !0), i(k), {}), u[n] = q[k];
                                }
                            }l = d ? d.apply(q[a], u) : void 0, a && (h && h.exports !== b && h.exports !== q[a] ? q[a] = h.exports : l === b && s || (q[a] = l));
                        } else a && (q[a] = d);
                    }, a = c = _n = function n(a, c, d, e, f) {
                        if ("string" == typeof a) return p[a] ? p[a](c) : j(o(a, c).f);if (!a.splice) {
                            if (s = a, s.deps && _n(s.deps, s.callback), !c) return;c.splice ? (a = c, c = d, d = null) : a = b;
                        }return c = c || function () {}, "function" == typeof d && (d = e, e = f), e ? m(b, a, c, d) : setTimeout(function () {
                            m(b, a, c, d);
                        }, 4), _n;
                    }, _n.config = function (a) {
                        return _n(a);
                    }, a._defined = q, d = function d(a, b, c) {
                        if ("string" != typeof a) throw new Error("See almond README: incorrect module build, no module name");b.splice || (c = b, b = []), e(q, a) || e(r, a) || (r[a] = [a, b, c]);
                    }, d.amd = { jQuery: !0 };
                }(), b.requirejs = a, b.require = c, b.define = d;
            }
        }(), b.define("almond", function () {}), b.define("jquery", [], function () {
            var b = a || $;return null == b && console && console.error && console.error("Select2: An instance of jQuery or a jQuery-compatible library was not found. Make sure that you are including jQuery before Select2 on your web page."), b;
        }), b.define("select2/utils", ["jquery"], function (a) {
            function b(a) {
                var b = a.prototype,
                    c = [];for (var d in b) {
                    var e = b[d];"function" == typeof e && "constructor" !== d && c.push(d);
                }return c;
            }var c = {};c.Extend = function (a, b) {
                function c() {
                    this.constructor = a;
                }var d = {}.hasOwnProperty;for (var e in b) {
                    d.call(b, e) && (a[e] = b[e]);
                }return c.prototype = b.prototype, a.prototype = new c(), a.__super__ = b.prototype, a;
            }, c.Decorate = function (a, c) {
                function d() {
                    var b = Array.prototype.unshift,
                        d = c.prototype.constructor.length,
                        e = a.prototype.constructor;d > 0 && (b.call(arguments, a.prototype.constructor), e = c.prototype.constructor), e.apply(this, arguments);
                }function e() {
                    this.constructor = d;
                }var f = b(c),
                    g = b(a);c.displayName = a.displayName, d.prototype = new e();for (var h = 0; h < g.length; h++) {
                    var i = g[h];d.prototype[i] = a.prototype[i];
                }for (var j = function j(a) {
                    var b = function b() {};(a in d.prototype) && (b = d.prototype[a]);var e = c.prototype[a];return function () {
                        var a = Array.prototype.unshift;return a.call(arguments, b), e.apply(this, arguments);
                    };
                }, k = 0; k < f.length; k++) {
                    var l = f[k];d.prototype[l] = j(l);
                }return d;
            };var d = function d() {
                this.listeners = {};
            };return d.prototype.on = function (a, b) {
                this.listeners = this.listeners || {}, a in this.listeners ? this.listeners[a].push(b) : this.listeners[a] = [b];
            }, d.prototype.trigger = function (a) {
                var b = Array.prototype.slice,
                    c = b.call(arguments, 1);this.listeners = this.listeners || {}, null == c && (c = []), 0 === c.length && c.push({}), c[0]._type = a, a in this.listeners && this.invoke(this.listeners[a], b.call(arguments, 1)), "*" in this.listeners && this.invoke(this.listeners["*"], arguments);
            }, d.prototype.invoke = function (a, b) {
                for (var c = 0, d = a.length; d > c; c++) {
                    a[c].apply(this, b);
                }
            }, c.Observable = d, c.generateChars = function (a) {
                for (var b = "", c = 0; a > c; c++) {
                    var d = Math.floor(36 * Math.random());b += d.toString(36);
                }return b;
            }, c.bind = function (a, b) {
                return function () {
                    a.apply(b, arguments);
                };
            }, c._convertData = function (a) {
                for (var b in a) {
                    var c = b.split("-"),
                        d = a;if (1 !== c.length) {
                        for (var e = 0; e < c.length; e++) {
                            var f = c[e];f = f.substring(0, 1).toLowerCase() + f.substring(1), f in d || (d[f] = {}), e == c.length - 1 && (d[f] = a[b]), d = d[f];
                        }delete a[b];
                    }
                }return a;
            }, c.hasScroll = function (b, c) {
                var d = a(c),
                    e = c.style.overflowX,
                    f = c.style.overflowY;return e !== f || "hidden" !== f && "visible" !== f ? "scroll" === e || "scroll" === f ? !0 : d.innerHeight() < c.scrollHeight || d.innerWidth() < c.scrollWidth : !1;
            }, c.escapeMarkup = function (a) {
                var b = { "\\": "&#92;", "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;", "/": "&#47;" };return "string" != typeof a ? a : String(a).replace(/[&<>"'\/\\]/g, function (a) {
                    return b[a];
                });
            }, c.appendMany = function (b, c) {
                if ("1.7" === a.fn.jquery.substr(0, 3)) {
                    var d = a();a.map(c, function (a) {
                        d = d.add(a);
                    }), c = d;
                }b.append(c);
            }, c;
        }), b.define("select2/results", ["jquery", "./utils"], function (a, b) {
            function c(a, b, d) {
                this.$element = a, this.data = d, this.options = b, c.__super__.constructor.call(this);
            }return b.Extend(c, b.Observable), c.prototype.render = function () {
                var b = a('<ul class="select2-results__options" role="tree"></ul>');return this.options.get("multiple") && b.attr("aria-multiselectable", "true"), this.$results = b, b;
            }, c.prototype.clear = function () {
                this.$results.empty();
            }, c.prototype.displayMessage = function (b) {
                var c = this.options.get("escapeMarkup");this.clear(), this.hideLoading();var d = a('<li role="treeitem" aria-live="assertive" class="select2-results__option"></li>'),
                    e = this.options.get("translations").get(b.message);d.append(c(e(b.args))), d[0].className += " select2-results__message", this.$results.append(d);
            }, c.prototype.hideMessages = function () {
                this.$results.find(".select2-results__message").remove();
            }, c.prototype.append = function (a) {
                this.hideLoading();var b = [];if (null == a.results || 0 === a.results.length) return void (0 === this.$results.children().length && this.trigger("results:message", { message: "noResults" }));a.results = this.sort(a.results);for (var c = 0; c < a.results.length; c++) {
                    var d = a.results[c],
                        e = this.option(d);b.push(e);
                }this.$results.append(b);
            }, c.prototype.position = function (a, b) {
                var c = b.find(".select2-results");c.append(a);
            }, c.prototype.sort = function (a) {
                var b = this.options.get("sorter");return b(a);
            }, c.prototype.highlightFirstItem = function () {
                var a = this.$results.find(".select2-results__option[aria-selected]"),
                    b = a.filter("[aria-selected=true]");b.length > 0 ? b.first().trigger("mouseenter") : a.first().trigger("mouseenter"), this.ensureHighlightVisible();
            }, c.prototype.setClasses = function () {
                var b = this;this.data.current(function (c) {
                    var d = a.map(c, function (a) {
                        return a.id.toString();
                    }),
                        e = b.$results.find(".select2-results__option[aria-selected]");e.each(function () {
                        var b = a(this),
                            c = a.data(this, "data"),
                            e = "" + c.id;null != c.element && c.element.selected || null == c.element && a.inArray(e, d) > -1 ? b.attr("aria-selected", "true") : b.attr("aria-selected", "false");
                    });
                });
            }, c.prototype.showLoading = function (a) {
                this.hideLoading();var b = this.options.get("translations").get("searching"),
                    c = { disabled: !0, loading: !0, text: b(a) },
                    d = this.option(c);d.className += " loading-results", this.$results.prepend(d);
            }, c.prototype.hideLoading = function () {
                this.$results.find(".loading-results").remove();
            }, c.prototype.option = function (b) {
                var c = document.createElement("li");c.className = "select2-results__option";var d = { role: "treeitem", "aria-selected": "false" };b.disabled && (delete d["aria-selected"], d["aria-disabled"] = "true"), null == b.id && delete d["aria-selected"], null != b._resultId && (c.id = b._resultId), b.title && (c.title = b.title), b.children && (d.role = "group", d["aria-label"] = b.text, delete d["aria-selected"]);for (var e in d) {
                    var f = d[e];c.setAttribute(e, f);
                }if (b.children) {
                    var g = a(c),
                        h = document.createElement("strong");h.className = "select2-results__group";a(h);this.template(b, h);for (var i = [], j = 0; j < b.children.length; j++) {
                        var k = b.children[j],
                            l = this.option(k);i.push(l);
                    }var m = a("<ul></ul>", { "class": "select2-results__options select2-results__options--nested" });m.append(i), g.append(h), g.append(m);
                } else this.template(b, c);return a.data(c, "data", b), c;
            }, c.prototype.bind = function (b, c) {
                var d = this,
                    e = b.id + "-results";this.$results.attr("id", e), b.on("results:all", function (a) {
                    d.clear(), d.append(a.data), b.isOpen() && (d.setClasses(), d.highlightFirstItem());
                }), b.on("results:append", function (a) {
                    d.append(a.data), b.isOpen() && d.setClasses();
                }), b.on("query", function (a) {
                    d.hideMessages(), d.showLoading(a);
                }), b.on("select", function () {
                    b.isOpen() && (d.setClasses(), d.highlightFirstItem());
                }), b.on("unselect", function () {
                    b.isOpen() && (d.setClasses(), d.highlightFirstItem());
                }), b.on("open", function () {
                    d.$results.attr("aria-expanded", "true"), d.$results.attr("aria-hidden", "false"), d.setClasses(), d.ensureHighlightVisible();
                }), b.on("close", function () {
                    d.$results.attr("aria-expanded", "false"), d.$results.attr("aria-hidden", "true"), d.$results.removeAttr("aria-activedescendant");
                }), b.on("results:toggle", function () {
                    var a = d.getHighlightedResults();0 !== a.length && a.trigger("mouseup");
                }), b.on("results:select", function () {
                    var a = d.getHighlightedResults();if (0 !== a.length) {
                        var b = a.data("data");"true" == a.attr("aria-selected") ? d.trigger("close", {}) : d.trigger("select", { data: b });
                    }
                }), b.on("results:previous", function () {
                    var a = d.getHighlightedResults(),
                        b = d.$results.find("[aria-selected]"),
                        c = b.index(a);if (0 !== c) {
                        var e = c - 1;0 === a.length && (e = 0);var f = b.eq(e);f.trigger("mouseenter");var g = d.$results.offset().top,
                            h = f.offset().top,
                            i = d.$results.scrollTop() + (h - g);0 === e ? d.$results.scrollTop(0) : 0 > h - g && d.$results.scrollTop(i);
                    }
                }), b.on("results:next", function () {
                    var a = d.getHighlightedResults(),
                        b = d.$results.find("[aria-selected]"),
                        c = b.index(a),
                        e = c + 1;if (!(e >= b.length)) {
                        var f = b.eq(e);f.trigger("mouseenter");var g = d.$results.offset().top + d.$results.outerHeight(!1),
                            h = f.offset().top + f.outerHeight(!1),
                            i = d.$results.scrollTop() + h - g;0 === e ? d.$results.scrollTop(0) : h > g && d.$results.scrollTop(i);
                    }
                }), b.on("results:focus", function (a) {
                    a.element.addClass("select2-results__option--highlighted");
                }), b.on("results:message", function (a) {
                    d.displayMessage(a);
                }), a.fn.mousewheel && this.$results.on("mousewheel", function (a) {
                    var b = d.$results.scrollTop(),
                        c = d.$results.get(0).scrollHeight - b + a.deltaY,
                        e = a.deltaY > 0 && b - a.deltaY <= 0,
                        f = a.deltaY < 0 && c <= d.$results.height();e ? (d.$results.scrollTop(0), a.preventDefault(), a.stopPropagation()) : f && (d.$results.scrollTop(d.$results.get(0).scrollHeight - d.$results.height()), a.preventDefault(), a.stopPropagation());
                }), this.$results.on("mouseup", ".select2-results__option[aria-selected]", function (b) {
                    var c = a(this),
                        e = c.data("data");return "true" === c.attr("aria-selected") ? void (d.options.get("multiple") ? d.trigger("unselect", { originalEvent: b, data: e }) : d.trigger("close", {})) : void d.trigger("select", { originalEvent: b, data: e });
                }), this.$results.on("mouseenter", ".select2-results__option[aria-selected]", function (b) {
                    var c = a(this).data("data");d.getHighlightedResults().removeClass("select2-results__option--highlighted"), d.trigger("results:focus", { data: c, element: a(this) });
                });
            }, c.prototype.getHighlightedResults = function () {
                var a = this.$results.find(".select2-results__option--highlighted");return a;
            }, c.prototype.destroy = function () {
                this.$results.remove();
            }, c.prototype.ensureHighlightVisible = function () {
                var a = this.getHighlightedResults();if (0 !== a.length) {
                    var b = this.$results.find("[aria-selected]"),
                        c = b.index(a),
                        d = this.$results.offset().top,
                        e = a.offset().top,
                        f = this.$results.scrollTop() + (e - d),
                        g = e - d;f -= 2 * a.outerHeight(!1), 2 >= c ? this.$results.scrollTop(0) : (g > this.$results.outerHeight() || 0 > g) && this.$results.scrollTop(f);
                }
            }, c.prototype.template = function (b, c) {
                var d = this.options.get("templateResult"),
                    e = this.options.get("escapeMarkup"),
                    f = d(b, c);null == f ? c.style.display = "none" : "string" == typeof f ? c.innerHTML = e(f) : a(c).append(f);
            }, c;
        }), b.define("select2/keys", [], function () {
            var a = { BACKSPACE: 8, TAB: 9, ENTER: 13, SHIFT: 16, CTRL: 17, ALT: 18, ESC: 27, SPACE: 32, PAGE_UP: 33, PAGE_DOWN: 34, END: 35, HOME: 36, LEFT: 37, UP: 38, RIGHT: 39, DOWN: 40, DELETE: 46 };return a;
        }), b.define("select2/selection/base", ["jquery", "../utils", "../keys"], function (a, b, c) {
            function d(a, b) {
                this.$element = a, this.options = b, d.__super__.constructor.call(this);
            }return b.Extend(d, b.Observable), d.prototype.render = function () {
                var b = a('<span class="select2-selection" role="combobox"  aria-haspopup="true" aria-expanded="false"></span>');return this._tabindex = 0, null != this.$element.data("old-tabindex") ? this._tabindex = this.$element.data("old-tabindex") : null != this.$element.attr("tabindex") && (this._tabindex = this.$element.attr("tabindex")), b.attr("title", this.$element.attr("title")), b.attr("tabindex", this._tabindex), this.$selection = b, b;
            }, d.prototype.bind = function (a, b) {
                var d = this,
                    e = (a.id + "-container", a.id + "-results");this.container = a, this.$selection.on("focus", function (a) {
                    d.trigger("focus", a);
                }), this.$selection.on("blur", function (a) {
                    d._handleBlur(a);
                }), this.$selection.on("keydown", function (a) {
                    d.trigger("keypress", a), a.which === c.SPACE && a.preventDefault();
                }), a.on("results:focus", function (a) {
                    d.$selection.attr("aria-activedescendant", a.data._resultId);
                }), a.on("selection:update", function (a) {
                    d.update(a.data);
                }), a.on("open", function () {
                    d.$selection.attr("aria-expanded", "true"), d.$selection.attr("aria-owns", e), d._attachCloseHandler(a);
                }), a.on("close", function () {
                    d.$selection.attr("aria-expanded", "false"), d.$selection.removeAttr("aria-activedescendant"), d.$selection.removeAttr("aria-owns"), d.$selection.focus(), d._detachCloseHandler(a);
                }), a.on("enable", function () {
                    d.$selection.attr("tabindex", d._tabindex);
                }), a.on("disable", function () {
                    d.$selection.attr("tabindex", "-1");
                });
            }, d.prototype._handleBlur = function (b) {
                var c = this;window.setTimeout(function () {
                    document.activeElement == c.$selection[0] || a.contains(c.$selection[0], document.activeElement) || c.trigger("blur", b);
                }, 1);
            }, d.prototype._attachCloseHandler = function (b) {
                a(document.body).on("mousedown.select2." + b.id, function (b) {
                    var c = a(b.target),
                        d = c.closest(".select2"),
                        e = a(".select2.select2-container--open");e.each(function () {
                        var b = a(this);if (this != d[0]) {
                            var c = b.data("element");c.select2("close");
                        }
                    });
                });
            }, d.prototype._detachCloseHandler = function (b) {
                a(document.body).off("mousedown.select2." + b.id);
            }, d.prototype.position = function (a, b) {
                var c = b.find(".selection");c.append(a);
            }, d.prototype.destroy = function () {
                this._detachCloseHandler(this.container);
            }, d.prototype.update = function (a) {
                throw new Error("The `update` method must be defined in child classes.");
            }, d;
        }), b.define("select2/selection/single", ["jquery", "./base", "../utils", "../keys"], function (a, b, c, d) {
            function e() {
                e.__super__.constructor.apply(this, arguments);
            }return c.Extend(e, b), e.prototype.render = function () {
                var a = e.__super__.render.call(this);return a.addClass("select2-selection--single"), a.html('<span class="select2-selection__rendered"></span><span class="select2-selection__arrow" role="presentation"><b role="presentation"></b></span>'), a;
            }, e.prototype.bind = function (a, b) {
                var c = this;e.__super__.bind.apply(this, arguments);var d = a.id + "-container";this.$selection.find(".select2-selection__rendered").attr("id", d), this.$selection.attr("aria-labelledby", d), this.$selection.on("mousedown", function (a) {
                    1 === a.which && c.trigger("toggle", { originalEvent: a });
                }), this.$selection.on("focus", function (a) {}), this.$selection.on("blur", function (a) {}), a.on("focus", function (b) {
                    a.isOpen() || c.$selection.focus();
                }), a.on("selection:update", function (a) {
                    c.update(a.data);
                });
            }, e.prototype.clear = function () {
                this.$selection.find(".select2-selection__rendered").empty();
            }, e.prototype.display = function (a, b) {
                var c = this.options.get("templateSelection"),
                    d = this.options.get("escapeMarkup");return d(c(a, b));
            }, e.prototype.selectionContainer = function () {
                return a("<span></span>");
            }, e.prototype.update = function (a) {
                if (0 === a.length) return void this.clear();var b = a[0],
                    c = this.$selection.find(".select2-selection__rendered"),
                    d = this.display(b, c);c.empty().append(d), c.prop("title", b.title || b.text);
            }, e;
        }), b.define("select2/selection/multiple", ["jquery", "./base", "../utils"], function (a, b, c) {
            function d(a, b) {
                d.__super__.constructor.apply(this, arguments);
            }return c.Extend(d, b), d.prototype.render = function () {
                var a = d.__super__.render.call(this);return a.addClass("select2-selection--multiple"), a.html('<ul class="select2-selection__rendered"></ul>'), a;
            }, d.prototype.bind = function (b, c) {
                var e = this;d.__super__.bind.apply(this, arguments), this.$selection.on("click", function (a) {
                    e.trigger("toggle", { originalEvent: a });
                }), this.$selection.on("click", ".select2-selection__choice__remove", function (b) {
                    if (!e.options.get("disabled")) {
                        var c = a(this),
                            d = c.parent(),
                            f = d.data("data");e.trigger("unselect", { originalEvent: b, data: f });
                    }
                });
            }, d.prototype.clear = function () {
                this.$selection.find(".select2-selection__rendered").empty();
            }, d.prototype.display = function (a, b) {
                var c = this.options.get("templateSelection"),
                    d = this.options.get("escapeMarkup");return d(c(a, b));
            }, d.prototype.selectionContainer = function () {
                var b = a('<li class="select2-selection__choice"><span class="select2-selection__choice__remove" role="presentation">&times;</span></li>');return b;
            }, d.prototype.update = function (a) {
                if (this.clear(), 0 !== a.length) {
                    for (var b = [], d = 0; d < a.length; d++) {
                        var e = a[d],
                            f = this.selectionContainer(),
                            g = this.display(e, f);f.append(g), f.prop("title", e.title || e.text), f.data("data", e), b.push(f);
                    }var h = this.$selection.find(".select2-selection__rendered");c.appendMany(h, b);
                }
            }, d;
        }), b.define("select2/selection/placeholder", ["../utils"], function (a) {
            function b(a, b, c) {
                this.placeholder = this.normalizePlaceholder(c.get("placeholder")), a.call(this, b, c);
            }return b.prototype.normalizePlaceholder = function (a, b) {
                return "string" == typeof b && (b = { id: "", text: b }), b;
            }, b.prototype.createPlaceholder = function (a, b) {
                var c = this.selectionContainer();return c.html(this.display(b)), c.addClass("select2-selection__placeholder").removeClass("select2-selection__choice"), c;
            }, b.prototype.update = function (a, b) {
                var c = 1 == b.length && b[0].id != this.placeholder.id,
                    d = b.length > 1;if (d || c) return a.call(this, b);this.clear();var e = this.createPlaceholder(this.placeholder);this.$selection.find(".select2-selection__rendered").append(e);
            }, b;
        }), b.define("select2/selection/allowClear", ["jquery", "../keys"], function (a, b) {
            function c() {}return c.prototype.bind = function (a, b, c) {
                var d = this;a.call(this, b, c), null == this.placeholder && this.options.get("debug") && window.console && console.error && console.error("Select2: The `allowClear` option should be used in combination with the `placeholder` option."), this.$selection.on("mousedown", ".select2-selection__clear", function (a) {
                    d._handleClear(a);
                }), b.on("keypress", function (a) {
                    d._handleKeyboardClear(a, b);
                });
            }, c.prototype._handleClear = function (a, b) {
                if (!this.options.get("disabled")) {
                    var c = this.$selection.find(".select2-selection__clear");if (0 !== c.length) {
                        b.stopPropagation();for (var d = c.data("data"), e = 0; e < d.length; e++) {
                            var f = { data: d[e] };if (this.trigger("unselect", f), f.prevented) return;
                        }this.$element.val(this.placeholder.id).trigger("change"), this.trigger("toggle", {});
                    }
                }
            }, c.prototype._handleKeyboardClear = function (a, c, d) {
                d.isOpen() || (c.which == b.DELETE || c.which == b.BACKSPACE) && this._handleClear(c);
            }, c.prototype.update = function (b, c) {
                if (b.call(this, c), !(this.$selection.find(".select2-selection__placeholder").length > 0 || 0 === c.length)) {
                    var d = a('<span class="select2-selection__clear">&times;</span>');d.data("data", c), this.$selection.find(".select2-selection__rendered").prepend(d);
                }
            }, c;
        }), b.define("select2/selection/search", ["jquery", "../utils", "../keys"], function (a, b, c) {
            function d(a, b, c) {
                a.call(this, b, c);
            }return d.prototype.render = function (b) {
                var c = a('<li class="select2-search select2-search--inline"><input class="select2-search__field" type="search" tabindex="-1" autocomplete="off" autocorrect="off" autocapitalize="off" spellcheck="false" role="textbox" aria-autocomplete="list" /></li>');this.$searchContainer = c, this.$search = c.find("input");var d = b.call(this);return this._transferTabIndex(), d;
            }, d.prototype.bind = function (a, b, d) {
                var e = this;a.call(this, b, d), b.on("open", function () {
                    e.$search.trigger("focus");
                }), b.on("close", function () {
                    e.$search.val(""), e.$search.removeAttr("aria-activedescendant"), e.$search.trigger("focus");
                }), b.on("enable", function () {
                    e.$search.prop("disabled", !1), e._transferTabIndex();
                }), b.on("disable", function () {
                    e.$search.prop("disabled", !0);
                }), b.on("focus", function (a) {
                    e.$search.trigger("focus");
                }), b.on("results:focus", function (a) {
                    e.$search.attr("aria-activedescendant", a.id);
                }), this.$selection.on("focusin", ".select2-search--inline", function (a) {
                    e.trigger("focus", a);
                }), this.$selection.on("focusout", ".select2-search--inline", function (a) {
                    e._handleBlur(a);
                }), this.$selection.on("keydown", ".select2-search--inline", function (a) {
                    a.stopPropagation(), e.trigger("keypress", a), e._keyUpPrevented = a.isDefaultPrevented();var b = a.which;if (b === c.BACKSPACE && "" === e.$search.val()) {
                        var d = e.$searchContainer.prev(".select2-selection__choice");if (d.length > 0) {
                            var f = d.data("data");e.searchRemoveChoice(f), a.preventDefault();
                        }
                    }
                });var f = document.documentMode,
                    g = f && 11 >= f;this.$selection.on("input.searchcheck", ".select2-search--inline", function (a) {
                    return g ? void e.$selection.off("input.search input.searchcheck") : void e.$selection.off("keyup.search");
                }), this.$selection.on("keyup.search input.search", ".select2-search--inline", function (a) {
                    if (g && "input" === a.type) return void e.$selection.off("input.search input.searchcheck");var b = a.which;b != c.SHIFT && b != c.CTRL && b != c.ALT && b != c.TAB && e.handleSearch(a);
                });
            }, d.prototype._transferTabIndex = function (a) {
                this.$search.attr("tabindex", this.$selection.attr("tabindex")), this.$selection.attr("tabindex", "-1");
            }, d.prototype.createPlaceholder = function (a, b) {
                this.$search.attr("placeholder", b.text);
            }, d.prototype.update = function (a, b) {
                var c = this.$search[0] == document.activeElement;this.$search.attr("placeholder", ""), a.call(this, b), this.$selection.find(".select2-selection__rendered").append(this.$searchContainer), this.resizeSearch(), c && this.$search.focus();
            }, d.prototype.handleSearch = function () {
                if (this.resizeSearch(), !this._keyUpPrevented) {
                    var a = this.$search.val();this.trigger("query", { term: a });
                }this._keyUpPrevented = !1;
            }, d.prototype.searchRemoveChoice = function (a, b) {
                this.trigger("unselect", { data: b }), this.$search.val(b.text), this.handleSearch();
            }, d.prototype.resizeSearch = function () {
                this.$search.css("width", "25px");var a = "";if ("" !== this.$search.attr("placeholder")) a = this.$selection.find(".select2-selection__rendered").innerWidth();else {
                    var b = this.$search.val().length + 1;a = .75 * b + "em";
                }this.$search.css("width", a);
            }, d;
        }), b.define("select2/selection/eventRelay", ["jquery"], function (a) {
            function b() {}return b.prototype.bind = function (b, c, d) {
                var e = this,
                    f = ["open", "opening", "close", "closing", "select", "selecting", "unselect", "unselecting"],
                    g = ["opening", "closing", "selecting", "unselecting"];b.call(this, c, d), c.on("*", function (b, c) {
                    if (-1 !== a.inArray(b, f)) {
                        c = c || {};var d = a.Event("select2:" + b, { params: c });e.$element.trigger(d), -1 !== a.inArray(b, g) && (c.prevented = d.isDefaultPrevented());
                    }
                });
            }, b;
        }), b.define("select2/translation", ["jquery", "require"], function (a, b) {
            function c(a) {
                this.dict = a || {};
            }return c.prototype.all = function () {
                return this.dict;
            }, c.prototype.get = function (a) {
                return this.dict[a];
            }, c.prototype.extend = function (b) {
                this.dict = a.extend({}, b.all(), this.dict);
            }, c._cache = {}, c.loadPath = function (a) {
                if (!(a in c._cache)) {
                    var d = b(a);c._cache[a] = d;
                }return new c(c._cache[a]);
            }, c;
        }), b.define("select2/diacritics", [], function () {
            var a = { "Ⓐ": "A", "Ａ": "A", "À": "A", "Á": "A", "Â": "A", "Ầ": "A", "Ấ": "A", "Ẫ": "A", "Ẩ": "A", "Ã": "A", "Ā": "A", "Ă": "A", "Ằ": "A", "Ắ": "A", "Ẵ": "A", "Ẳ": "A", "Ȧ": "A", "Ǡ": "A", "Ä": "A", "Ǟ": "A", "Ả": "A", "Å": "A", "Ǻ": "A", "Ǎ": "A", "Ȁ": "A", "Ȃ": "A", "Ạ": "A", "Ậ": "A", "Ặ": "A", "Ḁ": "A", "Ą": "A", "Ⱥ": "A", "Ɐ": "A", "Ꜳ": "AA", "Æ": "AE", "Ǽ": "AE", "Ǣ": "AE", "Ꜵ": "AO", "Ꜷ": "AU", "Ꜹ": "AV", "Ꜻ": "AV", "Ꜽ": "AY", "Ⓑ": "B", "Ｂ": "B", "Ḃ": "B", "Ḅ": "B", "Ḇ": "B", "Ƀ": "B", "Ƃ": "B", "Ɓ": "B", "Ⓒ": "C", "Ｃ": "C", "Ć": "C", "Ĉ": "C", "Ċ": "C", "Č": "C", "Ç": "C", "Ḉ": "C", "Ƈ": "C", "Ȼ": "C", "Ꜿ": "C", "Ⓓ": "D", "Ｄ": "D", "Ḋ": "D", "Ď": "D", "Ḍ": "D", "Ḑ": "D", "Ḓ": "D", "Ḏ": "D", "Đ": "D", "Ƌ": "D", "Ɗ": "D", "Ɖ": "D", "Ꝺ": "D", "Ǳ": "DZ", "Ǆ": "DZ", "ǲ": "Dz", "ǅ": "Dz", "Ⓔ": "E", "Ｅ": "E", "È": "E", "É": "E", "Ê": "E", "Ề": "E", "Ế": "E", "Ễ": "E", "Ể": "E", "Ẽ": "E", "Ē": "E", "Ḕ": "E", "Ḗ": "E", "Ĕ": "E", "Ė": "E", "Ë": "E", "Ẻ": "E", "Ě": "E", "Ȅ": "E", "Ȇ": "E", "Ẹ": "E", "Ệ": "E", "Ȩ": "E", "Ḝ": "E", "Ę": "E", "Ḙ": "E", "Ḛ": "E", "Ɛ": "E", "Ǝ": "E", "Ⓕ": "F", "Ｆ": "F", "Ḟ": "F", "Ƒ": "F", "Ꝼ": "F", "Ⓖ": "G", "Ｇ": "G", "Ǵ": "G", "Ĝ": "G", "Ḡ": "G", "Ğ": "G", "Ġ": "G", "Ǧ": "G", "Ģ": "G", "Ǥ": "G", "Ɠ": "G", "Ꞡ": "G", "Ᵹ": "G", "Ꝿ": "G", "Ⓗ": "H", "Ｈ": "H", "Ĥ": "H", "Ḣ": "H", "Ḧ": "H", "Ȟ": "H", "Ḥ": "H", "Ḩ": "H", "Ḫ": "H", "Ħ": "H", "Ⱨ": "H", "Ⱶ": "H", "Ɥ": "H", "Ⓘ": "I", "Ｉ": "I", "Ì": "I", "Í": "I", "Î": "I", "Ĩ": "I", "Ī": "I", "Ĭ": "I", "İ": "I", "Ï": "I", "Ḯ": "I", "Ỉ": "I", "Ǐ": "I", "Ȉ": "I", "Ȋ": "I", "Ị": "I", "Į": "I", "Ḭ": "I", "Ɨ": "I", "Ⓙ": "J", "Ｊ": "J", "Ĵ": "J", "Ɉ": "J", "Ⓚ": "K", "Ｋ": "K", "Ḱ": "K", "Ǩ": "K", "Ḳ": "K", "Ķ": "K", "Ḵ": "K", "Ƙ": "K", "Ⱪ": "K", "Ꝁ": "K", "Ꝃ": "K", "Ꝅ": "K", "Ꞣ": "K", "Ⓛ": "L", "Ｌ": "L", "Ŀ": "L", "Ĺ": "L", "Ľ": "L", "Ḷ": "L", "Ḹ": "L", "Ļ": "L", "Ḽ": "L", "Ḻ": "L", "Ł": "L", "Ƚ": "L", "Ɫ": "L", "Ⱡ": "L", "Ꝉ": "L", "Ꝇ": "L", "Ꞁ": "L", "Ǉ": "LJ", "ǈ": "Lj", "Ⓜ": "M", "Ｍ": "M", "Ḿ": "M", "Ṁ": "M", "Ṃ": "M", "Ɱ": "M", "Ɯ": "M", "Ⓝ": "N", "Ｎ": "N", "Ǹ": "N", "Ń": "N", "Ñ": "N", "Ṅ": "N", "Ň": "N", "Ṇ": "N", "Ņ": "N", "Ṋ": "N", "Ṉ": "N", "Ƞ": "N", "Ɲ": "N", "Ꞑ": "N", "Ꞥ": "N", "Ǌ": "NJ", "ǋ": "Nj", "Ⓞ": "O", "Ｏ": "O", "Ò": "O", "Ó": "O", "Ô": "O", "Ồ": "O", "Ố": "O", "Ỗ": "O", "Ổ": "O", "Õ": "O", "Ṍ": "O", "Ȭ": "O", "Ṏ": "O", "Ō": "O", "Ṑ": "O", "Ṓ": "O", "Ŏ": "O", "Ȯ": "O", "Ȱ": "O", "Ö": "O", "Ȫ": "O", "Ỏ": "O", "Ő": "O", "Ǒ": "O", "Ȍ": "O", "Ȏ": "O", "Ơ": "O", "Ờ": "O", "Ớ": "O", "Ỡ": "O", "Ở": "O", "Ợ": "O", "Ọ": "O", "Ộ": "O", "Ǫ": "O", "Ǭ": "O", "Ø": "O", "Ǿ": "O", "Ɔ": "O", "Ɵ": "O", "Ꝋ": "O", "Ꝍ": "O", "Ƣ": "OI", "Ꝏ": "OO", "Ȣ": "OU", "Ⓟ": "P", "Ｐ": "P", "Ṕ": "P", "Ṗ": "P", "Ƥ": "P", "Ᵽ": "P", "Ꝑ": "P", "Ꝓ": "P", "Ꝕ": "P", "Ⓠ": "Q", "Ｑ": "Q", "Ꝗ": "Q", "Ꝙ": "Q", "Ɋ": "Q", "Ⓡ": "R", "Ｒ": "R", "Ŕ": "R", "Ṙ": "R", "Ř": "R", "Ȑ": "R", "Ȓ": "R", "Ṛ": "R", "Ṝ": "R", "Ŗ": "R", "Ṟ": "R", "Ɍ": "R", "Ɽ": "R", "Ꝛ": "R", "Ꞧ": "R", "Ꞃ": "R", "Ⓢ": "S", "Ｓ": "S", "ẞ": "S", "Ś": "S", "Ṥ": "S", "Ŝ": "S", "Ṡ": "S", "Š": "S", "Ṧ": "S", "Ṣ": "S", "Ṩ": "S", "Ș": "S", "Ş": "S", "Ȿ": "S", "Ꞩ": "S", "Ꞅ": "S", "Ⓣ": "T", "Ｔ": "T", "Ṫ": "T", "Ť": "T", "Ṭ": "T", "Ț": "T", "Ţ": "T", "Ṱ": "T", "Ṯ": "T", "Ŧ": "T", "Ƭ": "T", "Ʈ": "T", "Ⱦ": "T", "Ꞇ": "T", "Ꜩ": "TZ", "Ⓤ": "U", "Ｕ": "U", "Ù": "U", "Ú": "U", "Û": "U", "Ũ": "U", "Ṹ": "U", "Ū": "U", "Ṻ": "U", "Ŭ": "U", "Ü": "U", "Ǜ": "U", "Ǘ": "U", "Ǖ": "U", "Ǚ": "U", "Ủ": "U", "Ů": "U", "Ű": "U", "Ǔ": "U", "Ȕ": "U", "Ȗ": "U", "Ư": "U", "Ừ": "U", "Ứ": "U", "Ữ": "U", "Ử": "U", "Ự": "U", "Ụ": "U", "Ṳ": "U", "Ų": "U", "Ṷ": "U", "Ṵ": "U", "Ʉ": "U", "Ⓥ": "V", "Ｖ": "V", "Ṽ": "V", "Ṿ": "V", "Ʋ": "V", "Ꝟ": "V", "Ʌ": "V", "Ꝡ": "VY", "Ⓦ": "W", "Ｗ": "W", "Ẁ": "W", "Ẃ": "W", "Ŵ": "W", "Ẇ": "W", "Ẅ": "W", "Ẉ": "W", "Ⱳ": "W", "Ⓧ": "X", "Ｘ": "X", "Ẋ": "X", "Ẍ": "X", "Ⓨ": "Y", "Ｙ": "Y", "Ỳ": "Y", "Ý": "Y", "Ŷ": "Y", "Ỹ": "Y", "Ȳ": "Y", "Ẏ": "Y", "Ÿ": "Y", "Ỷ": "Y", "Ỵ": "Y", "Ƴ": "Y", "Ɏ": "Y", "Ỿ": "Y", "Ⓩ": "Z", "Ｚ": "Z", "Ź": "Z", "Ẑ": "Z", "Ż": "Z", "Ž": "Z", "Ẓ": "Z", "Ẕ": "Z", "Ƶ": "Z", "Ȥ": "Z", "Ɀ": "Z", "Ⱬ": "Z", "Ꝣ": "Z", "ⓐ": "a", "ａ": "a", "ẚ": "a", "à": "a", "á": "a", "â": "a", "ầ": "a", "ấ": "a", "ẫ": "a", "ẩ": "a", "ã": "a", "ā": "a", "ă": "a", "ằ": "a", "ắ": "a", "ẵ": "a", "ẳ": "a", "ȧ": "a", "ǡ": "a", "ä": "a", "ǟ": "a", "ả": "a", "å": "a", "ǻ": "a", "ǎ": "a", "ȁ": "a", "ȃ": "a", "ạ": "a", "ậ": "a", "ặ": "a", "ḁ": "a", "ą": "a", "ⱥ": "a", "ɐ": "a", "ꜳ": "aa", "æ": "ae", "ǽ": "ae", "ǣ": "ae", "ꜵ": "ao", "ꜷ": "au", "ꜹ": "av", "ꜻ": "av", "ꜽ": "ay", "ⓑ": "b", "ｂ": "b", "ḃ": "b", "ḅ": "b", "ḇ": "b", "ƀ": "b", "ƃ": "b", "ɓ": "b", "ⓒ": "c", "ｃ": "c", "ć": "c", "ĉ": "c", "ċ": "c", "č": "c", "ç": "c", "ḉ": "c", "ƈ": "c", "ȼ": "c", "ꜿ": "c", "ↄ": "c", "ⓓ": "d", "ｄ": "d", "ḋ": "d", "ď": "d", "ḍ": "d", "ḑ": "d", "ḓ": "d", "ḏ": "d", "đ": "d", "ƌ": "d", "ɖ": "d", "ɗ": "d", "ꝺ": "d", "ǳ": "dz", "ǆ": "dz", "ⓔ": "e", "ｅ": "e", "è": "e", "é": "e", "ê": "e", "ề": "e", "ế": "e", "ễ": "e", "ể": "e", "ẽ": "e", "ē": "e", "ḕ": "e", "ḗ": "e", "ĕ": "e", "ė": "e", "ë": "e", "ẻ": "e", "ě": "e", "ȅ": "e", "ȇ": "e", "ẹ": "e", "ệ": "e", "ȩ": "e", "ḝ": "e", "ę": "e", "ḙ": "e", "ḛ": "e", "ɇ": "e", "ɛ": "e", "ǝ": "e", "ⓕ": "f", "ｆ": "f", "ḟ": "f", "ƒ": "f", "ꝼ": "f", "ⓖ": "g", "ｇ": "g", "ǵ": "g", "ĝ": "g", "ḡ": "g", "ğ": "g", "ġ": "g", "ǧ": "g", "ģ": "g", "ǥ": "g", "ɠ": "g", "ꞡ": "g", "ᵹ": "g", "ꝿ": "g", "ⓗ": "h", "ｈ": "h", "ĥ": "h", "ḣ": "h", "ḧ": "h", "ȟ": "h", "ḥ": "h", "ḩ": "h", "ḫ": "h", "ẖ": "h", "ħ": "h", "ⱨ": "h", "ⱶ": "h", "ɥ": "h", "ƕ": "hv", "ⓘ": "i", "ｉ": "i", "ì": "i", "í": "i", "î": "i", "ĩ": "i", "ī": "i", "ĭ": "i", "ï": "i", "ḯ": "i", "ỉ": "i", "ǐ": "i", "ȉ": "i", "ȋ": "i", "ị": "i", "į": "i", "ḭ": "i", "ɨ": "i", "ı": "i", "ⓙ": "j", "ｊ": "j", "ĵ": "j", "ǰ": "j", "ɉ": "j", "ⓚ": "k", "ｋ": "k", "ḱ": "k", "ǩ": "k", "ḳ": "k", "ķ": "k", "ḵ": "k", "ƙ": "k", "ⱪ": "k", "ꝁ": "k", "ꝃ": "k", "ꝅ": "k", "ꞣ": "k", "ⓛ": "l", "ｌ": "l", "ŀ": "l", "ĺ": "l", "ľ": "l", "ḷ": "l", "ḹ": "l", "ļ": "l", "ḽ": "l", "ḻ": "l", "ſ": "l", "ł": "l", "ƚ": "l", "ɫ": "l", "ⱡ": "l", "ꝉ": "l", "ꞁ": "l", "ꝇ": "l", "ǉ": "lj", "ⓜ": "m", "ｍ": "m", "ḿ": "m", "ṁ": "m", "ṃ": "m", "ɱ": "m", "ɯ": "m", "ⓝ": "n", "ｎ": "n", "ǹ": "n", "ń": "n", "ñ": "n", "ṅ": "n", "ň": "n", "ṇ": "n", "ņ": "n", "ṋ": "n", "ṉ": "n", "ƞ": "n", "ɲ": "n", "ŉ": "n", "ꞑ": "n", "ꞥ": "n", "ǌ": "nj", "ⓞ": "o", "ｏ": "o", "ò": "o", "ó": "o", "ô": "o", "ồ": "o", "ố": "o", "ỗ": "o", "ổ": "o", "õ": "o", "ṍ": "o", "ȭ": "o", "ṏ": "o", "ō": "o", "ṑ": "o", "ṓ": "o", "ŏ": "o", "ȯ": "o", "ȱ": "o", "ö": "o", "ȫ": "o", "ỏ": "o", "ő": "o", "ǒ": "o", "ȍ": "o", "ȏ": "o", "ơ": "o", "ờ": "o", "ớ": "o", "ỡ": "o", "ở": "o", "ợ": "o", "ọ": "o", "ộ": "o", "ǫ": "o", "ǭ": "o", "ø": "o", "ǿ": "o", "ɔ": "o", "ꝋ": "o", "ꝍ": "o", "ɵ": "o", "ƣ": "oi", "ȣ": "ou", "ꝏ": "oo", "ⓟ": "p", "ｐ": "p", "ṕ": "p", "ṗ": "p", "ƥ": "p", "ᵽ": "p", "ꝑ": "p", "ꝓ": "p", "ꝕ": "p", "ⓠ": "q", "ｑ": "q", "ɋ": "q", "ꝗ": "q", "ꝙ": "q", "ⓡ": "r", "ｒ": "r", "ŕ": "r", "ṙ": "r", "ř": "r", "ȑ": "r", "ȓ": "r", "ṛ": "r", "ṝ": "r", "ŗ": "r", "ṟ": "r", "ɍ": "r", "ɽ": "r", "ꝛ": "r", "ꞧ": "r", "ꞃ": "r", "ⓢ": "s", "ｓ": "s", "ß": "s", "ś": "s", "ṥ": "s", "ŝ": "s", "ṡ": "s", "š": "s", "ṧ": "s", "ṣ": "s", "ṩ": "s", "ș": "s", "ş": "s", "ȿ": "s", "ꞩ": "s", "ꞅ": "s", "ẛ": "s", "ⓣ": "t", "ｔ": "t", "ṫ": "t", "ẗ": "t", "ť": "t", "ṭ": "t", "ț": "t", "ţ": "t", "ṱ": "t", "ṯ": "t", "ŧ": "t", "ƭ": "t", "ʈ": "t", "ⱦ": "t", "ꞇ": "t", "ꜩ": "tz", "ⓤ": "u", "ｕ": "u", "ù": "u", "ú": "u", "û": "u", "ũ": "u", "ṹ": "u", "ū": "u", "ṻ": "u", "ŭ": "u", "ü": "u", "ǜ": "u", "ǘ": "u", "ǖ": "u", "ǚ": "u", "ủ": "u", "ů": "u", "ű": "u", "ǔ": "u", "ȕ": "u", "ȗ": "u", "ư": "u", "ừ": "u", "ứ": "u", "ữ": "u", "ử": "u", "ự": "u", "ụ": "u", "ṳ": "u", "ų": "u", "ṷ": "u", "ṵ": "u", "ʉ": "u", "ⓥ": "v", "ｖ": "v", "ṽ": "v", "ṿ": "v", "ʋ": "v", "ꝟ": "v", "ʌ": "v", "ꝡ": "vy", "ⓦ": "w", "ｗ": "w", "ẁ": "w", "ẃ": "w", "ŵ": "w", "ẇ": "w", "ẅ": "w", "ẘ": "w", "ẉ": "w", "ⱳ": "w", "ⓧ": "x", "ｘ": "x", "ẋ": "x", "ẍ": "x", "ⓨ": "y", "ｙ": "y", "ỳ": "y", "ý": "y", "ŷ": "y", "ỹ": "y", "ȳ": "y", "ẏ": "y", "ÿ": "y", "ỷ": "y", "ẙ": "y", "ỵ": "y", "ƴ": "y", "ɏ": "y", "ỿ": "y", "ⓩ": "z", "ｚ": "z", "ź": "z", "ẑ": "z", "ż": "z", "ž": "z", "ẓ": "z", "ẕ": "z", "ƶ": "z", "ȥ": "z", "ɀ": "z", "ⱬ": "z", "ꝣ": "z", "Ά": "Α", "Έ": "Ε", "Ή": "Η", "Ί": "Ι", "Ϊ": "Ι", "Ό": "Ο", "Ύ": "Υ", "Ϋ": "Υ", "Ώ": "Ω", "ά": "α", "έ": "ε", "ή": "η", "ί": "ι", "ϊ": "ι", "ΐ": "ι", "ό": "ο", "ύ": "υ", "ϋ": "υ", "ΰ": "υ", "ω": "ω", "ς": "σ" };return a;
        }), b.define("select2/data/base", ["../utils"], function (a) {
            function b(a, c) {
                b.__super__.constructor.call(this);
            }return a.Extend(b, a.Observable), b.prototype.current = function (a) {
                throw new Error("The `current` method must be defined in child classes.");
            }, b.prototype.query = function (a, b) {
                throw new Error("The `query` method must be defined in child classes.");
            }, b.prototype.bind = function (a, b) {}, b.prototype.destroy = function () {}, b.prototype.generateResultId = function (b, c) {
                var d = b.id + "-result-";return d += a.generateChars(4), d += null != c.id ? "-" + c.id.toString() : "-" + a.generateChars(4);
            }, b;
        }), b.define("select2/data/select", ["./base", "../utils", "jquery"], function (a, b, c) {
            function d(a, b) {
                this.$element = a, this.options = b, d.__super__.constructor.call(this);
            }return b.Extend(d, a), d.prototype.current = function (a) {
                var b = [],
                    d = this;this.$element.find(":selected").each(function () {
                    var a = c(this),
                        e = d.item(a);b.push(e);
                }), a(b);
            }, d.prototype.select = function (a) {
                var b = this;if (a.selected = !0, c(a.element).is("option")) return a.element.selected = !0, void this.$element.trigger("change");
                if (this.$element.prop("multiple")) this.current(function (d) {
                    var e = [];a = [a], a.push.apply(a, d);for (var f = 0; f < a.length; f++) {
                        var g = a[f].id;-1 === c.inArray(g, e) && e.push(g);
                    }b.$element.val(e), b.$element.trigger("change");
                });else {
                    var d = a.id;this.$element.val(d), this.$element.trigger("change");
                }
            }, d.prototype.unselect = function (a) {
                var b = this;if (this.$element.prop("multiple")) return a.selected = !1, c(a.element).is("option") ? (a.element.selected = !1, void this.$element.trigger("change")) : void this.current(function (d) {
                    for (var e = [], f = 0; f < d.length; f++) {
                        var g = d[f].id;g !== a.id && -1 === c.inArray(g, e) && e.push(g);
                    }b.$element.val(e), b.$element.trigger("change");
                });
            }, d.prototype.bind = function (a, b) {
                var c = this;this.container = a, a.on("select", function (a) {
                    c.select(a.data);
                }), a.on("unselect", function (a) {
                    c.unselect(a.data);
                });
            }, d.prototype.destroy = function () {
                this.$element.find("*").each(function () {
                    c.removeData(this, "data");
                });
            }, d.prototype.query = function (a, b) {
                var d = [],
                    e = this,
                    f = this.$element.children();f.each(function () {
                    var b = c(this);if (b.is("option") || b.is("optgroup")) {
                        var f = e.item(b),
                            g = e.matches(a, f);null !== g && d.push(g);
                    }
                }), b({ results: d });
            }, d.prototype.addOptions = function (a) {
                b.appendMany(this.$element, a);
            }, d.prototype.option = function (a) {
                var b;a.children ? (b = document.createElement("optgroup"), b.label = a.text) : (b = document.createElement("option"), void 0 !== b.textContent ? b.textContent = a.text : b.innerText = a.text), a.id && (b.value = a.id), a.disabled && (b.disabled = !0), a.selected && (b.selected = !0), a.title && (b.title = a.title);var d = c(b),
                    e = this._normalizeItem(a);return e.element = b, c.data(b, "data", e), d;
            }, d.prototype.item = function (a) {
                var b = {};if (b = c.data(a[0], "data"), null != b) return b;if (a.is("option")) b = { id: a.val(), text: a.text(), disabled: a.prop("disabled"), selected: a.prop("selected"), title: a.prop("title") };else if (a.is("optgroup")) {
                    b = { text: a.prop("label"), children: [], title: a.prop("title") };for (var d = a.children("option"), e = [], f = 0; f < d.length; f++) {
                        var g = c(d[f]),
                            h = this.item(g);e.push(h);
                    }b.children = e;
                }return b = this._normalizeItem(b), b.element = a[0], c.data(a[0], "data", b), b;
            }, d.prototype._normalizeItem = function (a) {
                c.isPlainObject(a) || (a = { id: a, text: a }), a = c.extend({}, { text: "" }, a);var b = { selected: !1, disabled: !1 };return null != a.id && (a.id = a.id.toString()), null != a.text && (a.text = a.text.toString()), null == a._resultId && a.id && null != this.container && (a._resultId = this.generateResultId(this.container, a)), c.extend({}, b, a);
            }, d.prototype.matches = function (a, b) {
                var c = this.options.get("matcher");return c(a, b);
            }, d;
        }), b.define("select2/data/array", ["./select", "../utils", "jquery"], function (a, b, c) {
            function d(a, b) {
                var c = b.get("data") || [];d.__super__.constructor.call(this, a, b), this.addOptions(this.convertToOptions(c));
            }return b.Extend(d, a), d.prototype.select = function (a) {
                var b = this.$element.find("option").filter(function (b, c) {
                    return c.value == a.id.toString();
                });0 === b.length && (b = this.option(a), this.addOptions(b)), d.__super__.select.call(this, a);
            }, d.prototype.convertToOptions = function (a) {
                function d(a) {
                    return function () {
                        return c(this).val() == a.id;
                    };
                }for (var e = this, f = this.$element.find("option"), g = f.map(function () {
                    return e.item(c(this)).id;
                }).get(), h = [], i = 0; i < a.length; i++) {
                    var j = this._normalizeItem(a[i]);if (c.inArray(j.id, g) >= 0) {
                        var k = f.filter(d(j)),
                            l = this.item(k),
                            m = c.extend(!0, {}, j, l),
                            n = this.option(m);k.replaceWith(n);
                    } else {
                        var o = this.option(j);if (j.children) {
                            var p = this.convertToOptions(j.children);b.appendMany(o, p);
                        }h.push(o);
                    }
                }return h;
            }, d;
        }), b.define("select2/data/ajax", ["./array", "../utils", "jquery"], function (a, b, c) {
            function d(a, b) {
                this.ajaxOptions = this._applyDefaults(b.get("ajax")), null != this.ajaxOptions.processResults && (this.processResults = this.ajaxOptions.processResults), d.__super__.constructor.call(this, a, b);
            }return b.Extend(d, a), d.prototype._applyDefaults = function (a) {
                var b = { data: function data(a) {
                        return c.extend({}, a, { q: a.term });
                    }, transport: function transport(a, b, d) {
                        var e = c.ajax(a);return e.then(b), e.fail(d), e;
                    } };return c.extend({}, b, a, !0);
            }, d.prototype.processResults = function (a) {
                return a;
            }, d.prototype.query = function (a, b) {
                function d() {
                    var d = f.transport(f, function (d) {
                        var f = e.processResults(d, a);e.options.get("debug") && window.console && console.error && (f && f.results && c.isArray(f.results) || console.error("Select2: The AJAX results did not return an array in the `results` key of the response.")), b(f);
                    }, function () {
                        d.status && "0" === d.status || e.trigger("results:message", { message: "errorLoading" });
                    });e._request = d;
                }var e = this;null != this._request && (c.isFunction(this._request.abort) && this._request.abort(), this._request = null);var f = c.extend({ type: "GET" }, this.ajaxOptions);"function" == typeof f.url && (f.url = f.url.call(this.$element, a)), "function" == typeof f.data && (f.data = f.data.call(this.$element, a)), this.ajaxOptions.delay && null != a.term ? (this._queryTimeout && window.clearTimeout(this._queryTimeout), this._queryTimeout = window.setTimeout(d, this.ajaxOptions.delay)) : d();
            }, d;
        }), b.define("select2/data/tags", ["jquery"], function (a) {
            function b(b, c, d) {
                var e = d.get("tags"),
                    f = d.get("createTag");void 0 !== f && (this.createTag = f);var g = d.get("insertTag");if (void 0 !== g && (this.insertTag = g), b.call(this, c, d), a.isArray(e)) for (var h = 0; h < e.length; h++) {
                    var i = e[h],
                        j = this._normalizeItem(i),
                        k = this.option(j);this.$element.append(k);
                }
            }return b.prototype.query = function (a, b, c) {
                function d(a, f) {
                    for (var g = a.results, h = 0; h < g.length; h++) {
                        var i = g[h],
                            j = null != i.children && !d({ results: i.children }, !0),
                            k = i.text === b.term;if (k || j) return f ? !1 : (a.data = g, void c(a));
                    }if (f) return !0;var l = e.createTag(b);if (null != l) {
                        var m = e.option(l);m.attr("data-select2-tag", !0), e.addOptions([m]), e.insertTag(g, l);
                    }a.results = g, c(a);
                }var e = this;return this._removeOldTags(), null == b.term || null != b.page ? void a.call(this, b, c) : void a.call(this, b, d);
            }, b.prototype.createTag = function (b, c) {
                var d = a.trim(c.term);return "" === d ? null : { id: d, text: d };
            }, b.prototype.insertTag = function (a, b, c) {
                b.unshift(c);
            }, b.prototype._removeOldTags = function (b) {
                var c = (this._lastTag, this.$element.find("option[data-select2-tag]"));c.each(function () {
                    this.selected || a(this).remove();
                });
            }, b;
        }), b.define("select2/data/tokenizer", ["jquery"], function (a) {
            function b(a, b, c) {
                var d = c.get("tokenizer");void 0 !== d && (this.tokenizer = d), a.call(this, b, c);
            }return b.prototype.bind = function (a, b, c) {
                a.call(this, b, c), this.$search = b.dropdown.$search || b.selection.$search || c.find(".select2-search__field");
            }, b.prototype.query = function (b, c, d) {
                function e(b) {
                    var c = g._normalizeItem(b),
                        d = g.$element.find("option").filter(function () {
                        return a(this).val() === c.id;
                    });if (!d.length) {
                        var e = g.option(c);e.attr("data-select2-tag", !0), g._removeOldTags(), g.addOptions([e]);
                    }f(c);
                }function f(a) {
                    g.trigger("select", { data: a });
                }var g = this;c.term = c.term || "";var h = this.tokenizer(c, this.options, e);h.term !== c.term && (this.$search.length && (this.$search.val(h.term), this.$search.focus()), c.term = h.term), b.call(this, c, d);
            }, b.prototype.tokenizer = function (b, c, d, e) {
                for (var f = d.get("tokenSeparators") || [], g = c.term, h = 0, i = this.createTag || function (a) {
                    return { id: a.term, text: a.term };
                }; h < g.length;) {
                    var j = g[h];if (-1 !== a.inArray(j, f)) {
                        var k = g.substr(0, h),
                            l = a.extend({}, c, { term: k }),
                            m = i(l);null != m ? (e(m), g = g.substr(h + 1) || "", h = 0) : h++;
                    } else h++;
                }return { term: g };
            }, b;
        }), b.define("select2/data/minimumInputLength", [], function () {
            function a(a, b, c) {
                this.minimumInputLength = c.get("minimumInputLength"), a.call(this, b, c);
            }return a.prototype.query = function (a, b, c) {
                return b.term = b.term || "", b.term.length < this.minimumInputLength ? void this.trigger("results:message", { message: "inputTooShort", args: { minimum: this.minimumInputLength, input: b.term, params: b } }) : void a.call(this, b, c);
            }, a;
        }), b.define("select2/data/maximumInputLength", [], function () {
            function a(a, b, c) {
                this.maximumInputLength = c.get("maximumInputLength"), a.call(this, b, c);
            }return a.prototype.query = function (a, b, c) {
                return b.term = b.term || "", this.maximumInputLength > 0 && b.term.length > this.maximumInputLength ? void this.trigger("results:message", { message: "inputTooLong", args: { maximum: this.maximumInputLength, input: b.term, params: b } }) : void a.call(this, b, c);
            }, a;
        }), b.define("select2/data/maximumSelectionLength", [], function () {
            function a(a, b, c) {
                this.maximumSelectionLength = c.get("maximumSelectionLength"), a.call(this, b, c);
            }return a.prototype.query = function (a, b, c) {
                var d = this;this.current(function (e) {
                    var f = null != e ? e.length : 0;return d.maximumSelectionLength > 0 && f >= d.maximumSelectionLength ? void d.trigger("results:message", { message: "maximumSelected", args: { maximum: d.maximumSelectionLength } }) : void a.call(d, b, c);
                });
            }, a;
        }), b.define("select2/dropdown", ["jquery", "./utils"], function (a, b) {
            function c(a, b) {
                this.$element = a, this.options = b, c.__super__.constructor.call(this);
            }return b.Extend(c, b.Observable), c.prototype.render = function () {
                var b = a('<span class="select2-dropdown"><span class="select2-results"></span></span>');return b.attr("dir", this.options.get("dir")), this.$dropdown = b, b;
            }, c.prototype.bind = function () {}, c.prototype.position = function (a, b) {}, c.prototype.destroy = function () {
                this.$dropdown.remove();
            }, c;
        }), b.define("select2/dropdown/search", ["jquery", "../utils"], function (a, b) {
            function c() {}return c.prototype.render = function (b) {
                var c = b.call(this),
                    d = a('<span class="select2-search select2-search--dropdown"><input class="select2-search__field" type="search" tabindex="-1" autocomplete="off" autocorrect="off" autocapitalize="off" spellcheck="false" role="textbox" /></span>');return this.$searchContainer = d, this.$search = d.find("input"), c.prepend(d), c;
            }, c.prototype.bind = function (b, c, d) {
                var e = this;b.call(this, c, d), this.$search.on("keydown", function (a) {
                    e.trigger("keypress", a), e._keyUpPrevented = a.isDefaultPrevented();
                }), this.$search.on("input", function (b) {
                    a(this).off("keyup");
                }), this.$search.on("keyup input", function (a) {
                    e.handleSearch(a);
                }), c.on("open", function () {
                    e.$search.attr("tabindex", 0), e.$search.focus(), window.setTimeout(function () {
                        e.$search.focus();
                    }, 0);
                }), c.on("close", function () {
                    e.$search.attr("tabindex", -1), e.$search.val("");
                }), c.on("focus", function () {
                    c.isOpen() && e.$search.focus();
                }), c.on("results:all", function (a) {
                    if (null == a.query.term || "" === a.query.term) {
                        var b = e.showSearch(a);b ? e.$searchContainer.removeClass("select2-search--hide") : e.$searchContainer.addClass("select2-search--hide");
                    }
                });
            }, c.prototype.handleSearch = function (a) {
                if (!this._keyUpPrevented) {
                    var b = this.$search.val();this.trigger("query", { term: b });
                }this._keyUpPrevented = !1;
            }, c.prototype.showSearch = function (a, b) {
                return !0;
            }, c;
        }), b.define("select2/dropdown/hidePlaceholder", [], function () {
            function a(a, b, c, d) {
                this.placeholder = this.normalizePlaceholder(c.get("placeholder")), a.call(this, b, c, d);
            }return a.prototype.append = function (a, b) {
                b.results = this.removePlaceholder(b.results), a.call(this, b);
            }, a.prototype.normalizePlaceholder = function (a, b) {
                return "string" == typeof b && (b = { id: "", text: b }), b;
            }, a.prototype.removePlaceholder = function (a, b) {
                for (var c = b.slice(0), d = b.length - 1; d >= 0; d--) {
                    var e = b[d];this.placeholder.id === e.id && c.splice(d, 1);
                }return c;
            }, a;
        }), b.define("select2/dropdown/infiniteScroll", ["jquery"], function (a) {
            function b(a, b, c, d) {
                this.lastParams = {}, a.call(this, b, c, d), this.$loadingMore = this.createLoadingMore(), this.loading = !1;
            }return b.prototype.append = function (a, b) {
                this.$loadingMore.remove(), this.loading = !1, a.call(this, b), this.showLoadingMore(b) && this.$results.append(this.$loadingMore);
            }, b.prototype.bind = function (b, c, d) {
                var e = this;b.call(this, c, d), c.on("query", function (a) {
                    e.lastParams = a, e.loading = !0;
                }), c.on("query:append", function (a) {
                    e.lastParams = a, e.loading = !0;
                }), this.$results.on("scroll", function () {
                    var b = a.contains(document.documentElement, e.$loadingMore[0]);if (!e.loading && b) {
                        var c = e.$results.offset().top + e.$results.outerHeight(!1),
                            d = e.$loadingMore.offset().top + e.$loadingMore.outerHeight(!1);c + 50 >= d && e.loadMore();
                    }
                });
            }, b.prototype.loadMore = function () {
                this.loading = !0;var b = a.extend({}, { page: 1 }, this.lastParams);b.page++, this.trigger("query:append", b);
            }, b.prototype.showLoadingMore = function (a, b) {
                return b.pagination && b.pagination.more;
            }, b.prototype.createLoadingMore = function () {
                var b = a('<li class="select2-results__option select2-results__option--load-more"role="treeitem" aria-disabled="true"></li>'),
                    c = this.options.get("translations").get("loadingMore");return b.html(c(this.lastParams)), b;
            }, b;
        }), b.define("select2/dropdown/attachBody", ["jquery", "../utils"], function (a, b) {
            function c(b, c, d) {
                this.$dropdownParent = d.get("dropdownParent") || a(document.body), b.call(this, c, d);
            }return c.prototype.bind = function (a, b, c) {
                var d = this,
                    e = !1;a.call(this, b, c), b.on("open", function () {
                    d._showDropdown(), d._attachPositioningHandler(b), e || (e = !0, b.on("results:all", function () {
                        d._positionDropdown(), d._resizeDropdown();
                    }), b.on("results:append", function () {
                        d._positionDropdown(), d._resizeDropdown();
                    }));
                }), b.on("close", function () {
                    d._hideDropdown(), d._detachPositioningHandler(b);
                }), this.$dropdownContainer.on("mousedown", function (a) {
                    a.stopPropagation();
                });
            }, c.prototype.destroy = function (a) {
                a.call(this), this.$dropdownContainer.remove();
            }, c.prototype.position = function (a, b, c) {
                b.attr("class", c.attr("class")), b.removeClass("select2"), b.addClass("select2-container--open"), b.css({ position: "absolute", top: -999999 }), this.$container = c;
            }, c.prototype.render = function (b) {
                var c = a("<span></span>"),
                    d = b.call(this);return c.append(d), this.$dropdownContainer = c, c;
            }, c.prototype._hideDropdown = function (a) {
                this.$dropdownContainer.detach();
            }, c.prototype._attachPositioningHandler = function (c, d) {
                var e = this,
                    f = "scroll.select2." + d.id,
                    g = "resize.select2." + d.id,
                    h = "orientationchange.select2." + d.id,
                    i = this.$container.parents().filter(b.hasScroll);i.each(function () {
                    a(this).data("select2-scroll-position", { x: a(this).scrollLeft(), y: a(this).scrollTop() });
                }), i.on(f, function (b) {
                    var c = a(this).data("select2-scroll-position");a(this).scrollTop(c.y);
                }), a(window).on(f + " " + g + " " + h, function (a) {
                    e._positionDropdown(), e._resizeDropdown();
                });
            }, c.prototype._detachPositioningHandler = function (c, d) {
                var e = "scroll.select2." + d.id,
                    f = "resize.select2." + d.id,
                    g = "orientationchange.select2." + d.id,
                    h = this.$container.parents().filter(b.hasScroll);h.off(e), a(window).off(e + " " + f + " " + g);
            }, c.prototype._positionDropdown = function () {
                var b = a(window),
                    c = this.$dropdown.hasClass("select2-dropdown--above"),
                    d = this.$dropdown.hasClass("select2-dropdown--below"),
                    e = null,
                    f = this.$container.offset();f.bottom = f.top + this.$container.outerHeight(!1);var g = { height: this.$container.outerHeight(!1) };g.top = f.top, g.bottom = f.top + g.height;var h = { height: this.$dropdown.outerHeight(!1) },
                    i = { top: b.scrollTop(), bottom: b.scrollTop() + b.height() },
                    j = i.top < f.top - h.height,
                    k = i.bottom > f.bottom + h.height,
                    l = { left: f.left, top: g.bottom },
                    m = this.$dropdownParent;"static" === m.css("position") && (m = m.offsetParent());var n = m.offset();l.top -= n.top, l.left -= n.left, c || d || (e = "below"), k || !j || c ? !j && k && c && (e = "below") : e = "above", ("above" == e || c && "below" !== e) && (l.top = g.top - n.top - h.height), null != e && (this.$dropdown.removeClass("select2-dropdown--below select2-dropdown--above").addClass("select2-dropdown--" + e), this.$container.removeClass("select2-container--below select2-container--above").addClass("select2-container--" + e)), this.$dropdownContainer.css(l);
            }, c.prototype._resizeDropdown = function () {
                var a = { width: this.$container.outerWidth(!1) + "px" };this.options.get("dropdownAutoWidth") && (a.minWidth = a.width, a.position = "relative", a.width = "auto"), this.$dropdown.css(a);
            }, c.prototype._showDropdown = function (a) {
                this.$dropdownContainer.appendTo(this.$dropdownParent), this._positionDropdown(), this._resizeDropdown();
            }, c;
        }), b.define("select2/dropdown/minimumResultsForSearch", [], function () {
            function a(b) {
                for (var c = 0, d = 0; d < b.length; d++) {
                    var e = b[d];e.children ? c += a(e.children) : c++;
                }return c;
            }function b(a, b, c, d) {
                this.minimumResultsForSearch = c.get("minimumResultsForSearch"), this.minimumResultsForSearch < 0 && (this.minimumResultsForSearch = 1 / 0), a.call(this, b, c, d);
            }return b.prototype.showSearch = function (b, c) {
                return a(c.data.results) < this.minimumResultsForSearch ? !1 : b.call(this, c);
            }, b;
        }), b.define("select2/dropdown/selectOnClose", [], function () {
            function a() {}return a.prototype.bind = function (a, b, c) {
                var d = this;a.call(this, b, c), b.on("close", function (a) {
                    d._handleSelectOnClose(a);
                });
            }, a.prototype._handleSelectOnClose = function (a, b) {
                if (b && null != b.originalSelect2Event) {
                    var c = b.originalSelect2Event;if ("select" === c._type || "unselect" === c._type) return;
                }var d = this.getHighlightedResults();if (!(d.length < 1)) {
                    var e = d.data("data");null != e.element && e.element.selected || null == e.element && e.selected || this.trigger("select", { data: e });
                }
            }, a;
        }), b.define("select2/dropdown/closeOnSelect", [], function () {
            function a() {}return a.prototype.bind = function (a, b, c) {
                var d = this;a.call(this, b, c), b.on("select", function (a) {
                    d._selectTriggered(a);
                }), b.on("unselect", function (a) {
                    d._selectTriggered(a);
                });
            }, a.prototype._selectTriggered = function (a, b) {
                var c = b.originalEvent;c && c.ctrlKey || this.trigger("close", { originalEvent: c, originalSelect2Event: b });
            }, a;
        }), b.define("select2/i18n/en", [], function () {
            return { errorLoading: function errorLoading() {
                    return "The results could not be loaded.";
                }, inputTooLong: function inputTooLong(a) {
                    var b = a.input.length - a.maximum,
                        c = "Please delete " + b + " character";return 1 != b && (c += "s"), c;
                }, inputTooShort: function inputTooShort(a) {
                    var b = a.minimum - a.input.length,
                        c = "Please enter " + b + " or more characters";return c;
                }, loadingMore: function loadingMore() {
                    return "Loading more results…";
                }, maximumSelected: function maximumSelected(a) {
                    var b = "You can only select " + a.maximum + " item";return 1 != a.maximum && (b += "s"), b;
                }, noResults: function noResults() {
                    return "No results found";
                }, searching: function searching() {
                    return "Searching…";
                } };
        }), b.define("select2/defaults", ["jquery", "require", "./results", "./selection/single", "./selection/multiple", "./selection/placeholder", "./selection/allowClear", "./selection/search", "./selection/eventRelay", "./utils", "./translation", "./diacritics", "./data/select", "./data/array", "./data/ajax", "./data/tags", "./data/tokenizer", "./data/minimumInputLength", "./data/maximumInputLength", "./data/maximumSelectionLength", "./dropdown", "./dropdown/search", "./dropdown/hidePlaceholder", "./dropdown/infiniteScroll", "./dropdown/attachBody", "./dropdown/minimumResultsForSearch", "./dropdown/selectOnClose", "./dropdown/closeOnSelect", "./i18n/en"], function (a, b, c, d, e, f, g, h, i, j, k, l, m, n, o, p, q, r, s, t, u, v, w, x, y, z, A, B, C) {
            function D() {
                this.reset();
            }D.prototype.apply = function (l) {
                if (l = a.extend(!0, {}, this.defaults, l), null == l.dataAdapter) {
                    if (null != l.ajax ? l.dataAdapter = o : null != l.data ? l.dataAdapter = n : l.dataAdapter = m, l.minimumInputLength > 0 && (l.dataAdapter = j.Decorate(l.dataAdapter, r)), l.maximumInputLength > 0 && (l.dataAdapter = j.Decorate(l.dataAdapter, s)), l.maximumSelectionLength > 0 && (l.dataAdapter = j.Decorate(l.dataAdapter, t)), l.tags && (l.dataAdapter = j.Decorate(l.dataAdapter, p)), (null != l.tokenSeparators || null != l.tokenizer) && (l.dataAdapter = j.Decorate(l.dataAdapter, q)), null != l.query) {
                        var C = b(l.amdBase + "compat/query");l.dataAdapter = j.Decorate(l.dataAdapter, C);
                    }if (null != l.initSelection) {
                        var D = b(l.amdBase + "compat/initSelection");l.dataAdapter = j.Decorate(l.dataAdapter, D);
                    }
                }if (null == l.resultsAdapter && (l.resultsAdapter = c, null != l.ajax && (l.resultsAdapter = j.Decorate(l.resultsAdapter, x)), null != l.placeholder && (l.resultsAdapter = j.Decorate(l.resultsAdapter, w)), l.selectOnClose && (l.resultsAdapter = j.Decorate(l.resultsAdapter, A))), null == l.dropdownAdapter) {
                    if (l.multiple) l.dropdownAdapter = u;else {
                        var E = j.Decorate(u, v);l.dropdownAdapter = E;
                    }if (0 !== l.minimumResultsForSearch && (l.dropdownAdapter = j.Decorate(l.dropdownAdapter, z)), l.closeOnSelect && (l.dropdownAdapter = j.Decorate(l.dropdownAdapter, B)), null != l.dropdownCssClass || null != l.dropdownCss || null != l.adaptDropdownCssClass) {
                        var F = b(l.amdBase + "compat/dropdownCss");l.dropdownAdapter = j.Decorate(l.dropdownAdapter, F);
                    }l.dropdownAdapter = j.Decorate(l.dropdownAdapter, y);
                }if (null == l.selectionAdapter) {
                    if (l.multiple ? l.selectionAdapter = e : l.selectionAdapter = d, null != l.placeholder && (l.selectionAdapter = j.Decorate(l.selectionAdapter, f)), l.allowClear && (l.selectionAdapter = j.Decorate(l.selectionAdapter, g)), l.multiple && (l.selectionAdapter = j.Decorate(l.selectionAdapter, h)), null != l.containerCssClass || null != l.containerCss || null != l.adaptContainerCssClass) {
                        var G = b(l.amdBase + "compat/containerCss");l.selectionAdapter = j.Decorate(l.selectionAdapter, G);
                    }l.selectionAdapter = j.Decorate(l.selectionAdapter, i);
                }if ("string" == typeof l.language) if (l.language.indexOf("-") > 0) {
                    var H = l.language.split("-"),
                        I = H[0];l.language = [l.language, I];
                } else l.language = [l.language];if (a.isArray(l.language)) {
                    var J = new k();l.language.push("en");for (var K = l.language, L = 0; L < K.length; L++) {
                        var M = K[L],
                            N = {};try {
                            N = k.loadPath(M);
                        } catch (O) {
                            try {
                                M = this.defaults.amdLanguageBase + M, N = k.loadPath(M);
                            } catch (P) {
                                l.debug && window.console && console.warn && console.warn('Select2: The language file for "' + M + '" could not be automatically loaded. A fallback will be used instead.');continue;
                            }
                        }J.extend(N);
                    }l.translations = J;
                } else {
                    var Q = k.loadPath(this.defaults.amdLanguageBase + "en"),
                        R = new k(l.language);R.extend(Q), l.translations = R;
                }return l;
            }, D.prototype.reset = function () {
                function b(a) {
                    function b(a) {
                        return l[a] || a;
                    }return a.replace(/[^\u0000-\u007E]/g, b);
                }function c(d, e) {
                    if ("" === a.trim(d.term)) return e;if (e.children && e.children.length > 0) {
                        for (var f = a.extend(!0, {}, e), g = e.children.length - 1; g >= 0; g--) {
                            var h = e.children[g],
                                i = c(d, h);null == i && f.children.splice(g, 1);
                        }return f.children.length > 0 ? f : c(d, f);
                    }var j = b(e.text).toUpperCase(),
                        k = b(d.term).toUpperCase();return j.indexOf(k) > -1 ? e : null;
                }this.defaults = { amdBase: "./", amdLanguageBase: "./i18n/", closeOnSelect: !0, debug: !1, dropdownAutoWidth: !1, escapeMarkup: j.escapeMarkup, language: C, matcher: c, minimumInputLength: 0, maximumInputLength: 0, maximumSelectionLength: 0, minimumResultsForSearch: 0, selectOnClose: !1, sorter: function sorter(a) {
                        return a;
                    }, templateResult: function templateResult(a) {
                        return a.text;
                    }, templateSelection: function templateSelection(a) {
                        return a.text;
                    }, theme: "default", width: "100%" };
            }, D.prototype.set = function (b, c) {
                var d = a.camelCase(b),
                    e = {};e[d] = c;var f = j._convertData(e);a.extend(this.defaults, f);
            };var E = new D();return E;
        }), b.define("select2/options", ["require", "jquery", "./defaults", "./utils"], function (a, b, c, d) {
            function e(b, e) {
                if (this.options = b, null != e && this.fromElement(e), this.options = c.apply(this.options), e && e.is("input")) {
                    var f = a(this.get("amdBase") + "compat/inputData");this.options.dataAdapter = d.Decorate(this.options.dataAdapter, f);
                }
            }return e.prototype.fromElement = function (a) {
                var c = ["select2"];null == this.options.multiple && (this.options.multiple = a.prop("multiple")), null == this.options.disabled && (this.options.disabled = a.prop("disabled")), null == this.options.language && (a.prop("lang") ? this.options.language = a.prop("lang").toLowerCase() : a.closest("[lang]").prop("lang") && (this.options.language = a.closest("[lang]").prop("lang"))), null == this.options.dir && (a.prop("dir") ? this.options.dir = a.prop("dir") : a.closest("[dir]").prop("dir") ? this.options.dir = a.closest("[dir]").prop("dir") : this.options.dir = "ltr"), a.prop("disabled", this.options.disabled), a.prop("multiple", this.options.multiple), a.data("select2Tags") && (this.options.debug && window.console && console.warn && console.warn('Select2: The `data-select2-tags` attribute has been changed to use the `data-data` and `data-tags="true"` attributes and will be removed in future versions of Select2.'), a.data("data", a.data("select2Tags")), a.data("tags", !0)), a.data("ajaxUrl") && (this.options.debug && window.console && console.warn && console.warn("Select2: The `data-ajax-url` attribute has been changed to `data-ajax--url` and support for the old attribute will be removed in future versions of Select2."), a.attr("ajax--url", a.data("ajaxUrl")), a.data("ajax--url", a.data("ajaxUrl")));var e = {};e = b.fn.jquery && "1." == b.fn.jquery.substr(0, 2) && a[0].dataset ? b.extend(!0, {}, a[0].dataset, a.data()) : a.data();var f = b.extend(!0, {}, e);f = d._convertData(f);for (var g in f) {
                    b.inArray(g, c) > -1 || (b.isPlainObject(this.options[g]) ? b.extend(this.options[g], f[g]) : this.options[g] = f[g]);
                }return this;
            }, e.prototype.get = function (a) {
                return this.options[a];
            }, e.prototype.set = function (a, b) {
                this.options[a] = b;
            }, e;
        }), b.define("select2/core", ["jquery", "./options", "./utils", "./keys"], function (a, b, c, d) {
            var e = function e(a, c) {
                null != a.data("select2") && a.data("select2").destroy(), this.$element = a, this.id = this._generateId(a), c = c || {}, this.options = new b(c, a), e.__super__.constructor.call(this);var d = a.attr("tabindex") || 0;a.data("old-tabindex", d), a.attr("tabindex", "-1");var f = this.options.get("dataAdapter");this.dataAdapter = new f(a, this.options);var g = this.render();this._placeContainer(g);var h = this.options.get("selectionAdapter");this.selection = new h(a, this.options), this.$selection = this.selection.render(), this.selection.position(this.$selection, g);var i = this.options.get("dropdownAdapter");this.dropdown = new i(a, this.options), this.$dropdown = this.dropdown.render(), this.dropdown.position(this.$dropdown, g);var j = this.options.get("resultsAdapter");this.results = new j(a, this.options, this.dataAdapter), this.$results = this.results.render(), this.results.position(this.$results, this.$dropdown);var k = this;this._bindAdapters(), this._registerDomEvents(), this._registerDataEvents(), this._registerSelectionEvents(), this._registerDropdownEvents(), this._registerResultsEvents(), this._registerEvents(), this.dataAdapter.current(function (a) {
                    k.trigger("selection:update", { data: a });
                }), a.addClass("select2-hidden-accessible"), a.attr("aria-hidden", "true"), this._syncAttributes(), a.data("select2", this);
            };return c.Extend(e, c.Observable), e.prototype._generateId = function (a) {
                var b = "";return b = null != a.attr("id") ? a.attr("id") : null != a.attr("name") ? a.attr("name") + "-" + c.generateChars(2) : c.generateChars(4), b = b.replace(/(:|\.|\[|\]|,)/g, ""), b = "select2-" + b;
            }, e.prototype._placeContainer = function (a) {
                a.insertAfter(this.$element);var b = this._resolveWidth(this.$element, this.options.get("width"));null != b && a.css("width", b);
            }, e.prototype._resolveWidth = function (a, b) {
                var c = /^width:(([-+]?([0-9]*\.)?[0-9]+)(px|em|ex|%|in|cm|mm|pt|pc))/i;if ("resolve" == b) {
                    var d = this._resolveWidth(a, "style");return null != d ? d : this._resolveWidth(a, "element");
                }if ("element" == b) {
                    var e = a.outerWidth(!1);return 0 >= e ? "auto" : e + "px";
                }if ("style" == b) {
                    var f = a.attr("style");if ("string" != typeof f) return null;for (var g = f.split(";"), h = 0, i = g.length; i > h; h += 1) {
                        var j = g[h].replace(/\s/g, ""),
                            k = j.match(c);if (null !== k && k.length >= 1) return k[1];
                    }return null;
                }return b;
            }, e.prototype._bindAdapters = function () {
                this.dataAdapter.bind(this, this.$container), this.selection.bind(this, this.$container), this.dropdown.bind(this, this.$container), this.results.bind(this, this.$container);
            }, e.prototype._registerDomEvents = function () {
                var b = this;this.$element.on("change.select2", function () {
                    b.dataAdapter.current(function (a) {
                        b.trigger("selection:update", { data: a });
                    });
                }), this.$element.on("focus.select2", function (a) {
                    b.trigger("focus", a);
                }), this._syncA = c.bind(this._syncAttributes, this), this._syncS = c.bind(this._syncSubtree, this), this.$element[0].attachEvent && this.$element[0].attachEvent("onpropertychange", this._syncA);var d = window.MutationObserver || window.WebKitMutationObserver || window.MozMutationObserver;null != d ? (this._observer = new d(function (c) {
                    a.each(c, b._syncA), a.each(c, b._syncS);
                }), this._observer.observe(this.$element[0], { attributes: !0, childList: !0, subtree: !1 })) : this.$element[0].addEventListener && (this.$element[0].addEventListener("DOMAttrModified", b._syncA, !1), this.$element[0].addEventListener("DOMNodeInserted", b._syncS, !1), this.$element[0].addEventListener("DOMNodeRemoved", b._syncS, !1));
            }, e.prototype._registerDataEvents = function () {
                var a = this;this.dataAdapter.on("*", function (b, c) {
                    a.trigger(b, c);
                });
            }, e.prototype._registerSelectionEvents = function () {
                var b = this,
                    c = ["toggle", "focus"];this.selection.on("toggle", function () {
                    b.toggleDropdown();
                }), this.selection.on("focus", function (a) {
                    b.focus(a);
                }), this.selection.on("*", function (d, e) {
                    -1 === a.inArray(d, c) && b.trigger(d, e);
                });
            }, e.prototype._registerDropdownEvents = function () {
                var a = this;this.dropdown.on("*", function (b, c) {
                    a.trigger(b, c);
                });
            }, e.prototype._registerResultsEvents = function () {
                var a = this;this.results.on("*", function (b, c) {
                    a.trigger(b, c);
                });
            }, e.prototype._registerEvents = function () {
                var a = this;this.on("open", function () {
                    a.$container.addClass("select2-container--open");
                }), this.on("close", function () {
                    a.$container.removeClass("select2-container--open");
                }), this.on("enable", function () {
                    a.$container.removeClass("select2-container--disabled");
                }), this.on("disable", function () {
                    a.$container.addClass("select2-container--disabled");
                }), this.on("blur", function () {
                    a.$container.removeClass("select2-container--focus");
                }), this.on("query", function (b) {
                    a.isOpen() || a.trigger("open", {}), this.dataAdapter.query(b, function (c) {
                        a.trigger("results:all", { data: c, query: b });
                    });
                }), this.on("query:append", function (b) {
                    this.dataAdapter.query(b, function (c) {
                        a.trigger("results:append", { data: c, query: b });
                    });
                }), this.on("keypress", function (b) {
                    var c = b.which;a.isOpen() ? c === d.ESC || c === d.TAB || c === d.UP && b.altKey ? (a.close(), b.preventDefault()) : c === d.ENTER ? (a.trigger("results:select", {}), b.preventDefault()) : c === d.SPACE && b.ctrlKey ? (a.trigger("results:toggle", {}), b.preventDefault()) : c === d.UP ? (a.trigger("results:previous", {}), b.preventDefault()) : c === d.DOWN && (a.trigger("results:next", {}), b.preventDefault()) : (c === d.ENTER || c === d.SPACE || c === d.DOWN && b.altKey) && (a.open(), b.preventDefault());
                });
            }, e.prototype._syncAttributes = function () {
                this.options.set("disabled", this.$element.prop("disabled")), this.options.get("disabled") ? (this.isOpen() && this.close(), this.trigger("disable", {})) : this.trigger("enable", {});
            }, e.prototype._syncSubtree = function (a, b) {
                var c = !1,
                    d = this;if (!a || !a.target || "OPTION" === a.target.nodeName || "OPTGROUP" === a.target.nodeName) {
                    if (b) {
                        if (b.addedNodes && b.addedNodes.length > 0) for (var e = 0; e < b.addedNodes.length; e++) {
                            var f = b.addedNodes[e];f.selected && (c = !0);
                        } else b.removedNodes && b.removedNodes.length > 0 && (c = !0);
                    } else c = !0;c && this.dataAdapter.current(function (a) {
                        d.trigger("selection:update", { data: a });
                    });
                }
            }, e.prototype.trigger = function (a, b) {
                var c = e.__super__.trigger,
                    d = { open: "opening", close: "closing", select: "selecting", unselect: "unselecting" };if (void 0 === b && (b = {}), a in d) {
                    var f = d[a],
                        g = { prevented: !1, name: a, args: b };if (c.call(this, f, g), g.prevented) return void (b.prevented = !0);
                }c.call(this, a, b);
            }, e.prototype.toggleDropdown = function () {
                this.options.get("disabled") || (this.isOpen() ? this.close() : this.open());
            }, e.prototype.open = function () {
                this.isOpen() || this.trigger("query", {});
            }, e.prototype.close = function () {
                this.isOpen() && this.trigger("close", {});
            }, e.prototype.isOpen = function () {
                return this.$container.hasClass("select2-container--open");
            }, e.prototype.hasFocus = function () {
                return this.$container.hasClass("select2-container--focus");
            }, e.prototype.focus = function (a) {
                this.hasFocus() || (this.$container.addClass("select2-container--focus"), this.trigger("focus", {}));
            }, e.prototype.enable = function (a) {
                this.options.get("debug") && window.console && console.warn && console.warn('Select2: The `select2("enable")` method has been deprecated and will be removed in later Select2 versions. Use $element.prop("disabled") instead.'), (null == a || 0 === a.length) && (a = [!0]);var b = !a[0];this.$element.prop("disabled", b);
            }, e.prototype.data = function () {
                this.options.get("debug") && arguments.length > 0 && window.console && console.warn && console.warn('Select2: Data can no longer be set using `select2("data")`. You should consider setting the value instead using `$element.val()`.');var a = [];return this.dataAdapter.current(function (b) {
                    a = b;
                }), a;
            }, e.prototype.val = function (b) {
                if (this.options.get("debug") && window.console && console.warn && console.warn('Select2: The `select2("val")` method has been deprecated and will be removed in later Select2 versions. Use $element.val() instead.'), null == b || 0 === b.length) return this.$element.val();var c = b[0];a.isArray(c) && (c = a.map(c, function (a) {
                    return a.toString();
                })), this.$element.val(c).trigger("change");
            }, e.prototype.destroy = function () {
                this.$container.remove(), this.$element[0].detachEvent && this.$element[0].detachEvent("onpropertychange", this._syncA), null != this._observer ? (this._observer.disconnect(), this._observer = null) : this.$element[0].removeEventListener && (this.$element[0].removeEventListener("DOMAttrModified", this._syncA, !1), this.$element[0].removeEventListener("DOMNodeInserted", this._syncS, !1), this.$element[0].removeEventListener("DOMNodeRemoved", this._syncS, !1)), this._syncA = null, this._syncS = null, this.$element.off(".select2"), this.$element.attr("tabindex", this.$element.data("old-tabindex")), this.$element.removeClass("select2-hidden-accessible"), this.$element.attr("aria-hidden", "false"), this.$element.removeData("select2"), this.dataAdapter.destroy(), this.selection.destroy(), this.dropdown.destroy(), this.results.destroy(), this.dataAdapter = null, this.selection = null, this.dropdown = null, this.results = null;
            }, e.prototype.render = function () {
                var b = a('<span class="select2 select2-container"><span class="selection"></span><span class="dropdown-wrapper" aria-hidden="true"></span></span>');return b.attr("dir", this.options.get("dir")), this.$container = b, this.$container.addClass("select2-container--" + this.options.get("theme")), b.data("element", this.$element), b;
            }, e;
        }), b.define("select2/compat/utils", ["jquery"], function (a) {
            function b(b, c, d) {
                var e,
                    f,
                    g = [];e = a.trim(b.attr("class")), e && (e = "" + e, a(e.split(/\s+/)).each(function () {
                    0 === this.indexOf("select2-") && g.push(this);
                })), e = a.trim(c.attr("class")), e && (e = "" + e, a(e.split(/\s+/)).each(function () {
                    0 !== this.indexOf("select2-") && (f = d(this), null != f && g.push(f));
                })), b.attr("class", g.join(" "));
            }return { syncCssClasses: b };
        }), b.define("select2/compat/containerCss", ["jquery", "./utils"], function (a, b) {
            function c(a) {
                return null;
            }function d() {}return d.prototype.render = function (d) {
                var e = d.call(this),
                    f = this.options.get("containerCssClass") || "";a.isFunction(f) && (f = f(this.$element));var g = this.options.get("adaptContainerCssClass");if (g = g || c, -1 !== f.indexOf(":all:")) {
                    f = f.replace(":all:", "");var h = g;g = function g(a) {
                        var b = h(a);return null != b ? b + " " + a : a;
                    };
                }var i = this.options.get("containerCss") || {};return a.isFunction(i) && (i = i(this.$element)), b.syncCssClasses(e, this.$element, g), e.css(i), e.addClass(f), e;
            }, d;
        }), b.define("select2/compat/dropdownCss", ["jquery", "./utils"], function (a, b) {
            function c(a) {
                return null;
            }function d() {}return d.prototype.render = function (d) {
                var e = d.call(this),
                    f = this.options.get("dropdownCssClass") || "";a.isFunction(f) && (f = f(this.$element));var g = this.options.get("adaptDropdownCssClass");if (g = g || c, -1 !== f.indexOf(":all:")) {
                    f = f.replace(":all:", "");var h = g;g = function g(a) {
                        var b = h(a);return null != b ? b + " " + a : a;
                    };
                }var i = this.options.get("dropdownCss") || {};return a.isFunction(i) && (i = i(this.$element)), b.syncCssClasses(e, this.$element, g), e.css(i), e.addClass(f), e;
            }, d;
        }), b.define("select2/compat/initSelection", ["jquery"], function (a) {
            function b(a, b, c) {
                c.get("debug") && window.console && console.warn && console.warn("Select2: The `initSelection` option has been deprecated in favor of a custom data adapter that overrides the `current` method. This method is now called multiple times instead of a single time when the instance is initialized. Support will be removed for the `initSelection` option in future versions of Select2"), this.initSelection = c.get("initSelection"), this._isInitialized = !1, a.call(this, b, c);
            }return b.prototype.current = function (b, c) {
                var d = this;return this._isInitialized ? void b.call(this, c) : void this.initSelection.call(null, this.$element, function (b) {
                    d._isInitialized = !0, a.isArray(b) || (b = [b]), c(b);
                });
            }, b;
        }), b.define("select2/compat/inputData", ["jquery"], function (a) {
            function b(a, b, c) {
                this._currentData = [], this._valueSeparator = c.get("valueSeparator") || ",", "hidden" === b.prop("type") && c.get("debug") && console && console.warn && console.warn("Select2: Using a hidden input with Select2 is no longer supported and may stop working in the future. It is recommended to use a `<select>` element instead."), a.call(this, b, c);
            }return b.prototype.current = function (b, c) {
                function d(b, c) {
                    var e = [];return b.selected || -1 !== a.inArray(b.id, c) ? (b.selected = !0, e.push(b)) : b.selected = !1, b.children && e.push.apply(e, d(b.children, c)), e;
                }for (var e = [], f = 0; f < this._currentData.length; f++) {
                    var g = this._currentData[f];e.push.apply(e, d(g, this.$element.val().split(this._valueSeparator)));
                }c(e);
            }, b.prototype.select = function (b, c) {
                if (this.options.get("multiple")) {
                    var d = this.$element.val();d += this._valueSeparator + c.id, this.$element.val(d), this.$element.trigger("change");
                } else this.current(function (b) {
                    a.map(b, function (a) {
                        a.selected = !1;
                    });
                }), this.$element.val(c.id), this.$element.trigger("change");
            }, b.prototype.unselect = function (a, b) {
                var c = this;b.selected = !1, this.current(function (a) {
                    for (var d = [], e = 0; e < a.length; e++) {
                        var f = a[e];b.id != f.id && d.push(f.id);
                    }c.$element.val(d.join(c._valueSeparator)), c.$element.trigger("change");
                });
            }, b.prototype.query = function (a, b, c) {
                for (var d = [], e = 0; e < this._currentData.length; e++) {
                    var f = this._currentData[e],
                        g = this.matches(b, f);null !== g && d.push(g);
                }c({ results: d });
            }, b.prototype.addOptions = function (b, c) {
                var d = a.map(c, function (b) {
                    return a.data(b[0], "data");
                });this._currentData.push.apply(this._currentData, d);
            }, b;
        }), b.define("select2/compat/matcher", ["jquery"], function (a) {
            function b(b) {
                function c(c, d) {
                    var e = a.extend(!0, {}, d);if (null == c.term || "" === a.trim(c.term)) return e;if (d.children) {
                        for (var f = d.children.length - 1; f >= 0; f--) {
                            var g = d.children[f],
                                h = b(c.term, g.text, g);h || e.children.splice(f, 1);
                        }if (e.children.length > 0) return e;
                    }return b(c.term, d.text, d) ? e : null;
                }return c;
            }return b;
        }), b.define("select2/compat/query", [], function () {
            function a(a, b, c) {
                c.get("debug") && window.console && console.warn && console.warn("Select2: The `query` option has been deprecated in favor of a custom data adapter that overrides the `query` method. Support will be removed for the `query` option in future versions of Select2."), a.call(this, b, c);
            }return a.prototype.query = function (a, b, c) {
                b.callback = c;var d = this.options.get("query");d.call(null, b);
            }, a;
        }), b.define("select2/dropdown/attachContainer", [], function () {
            function a(a, b, c) {
                a.call(this, b, c);
            }return a.prototype.position = function (a, b, c) {
                var d = c.find(".dropdown-wrapper");d.append(b), b.addClass("select2-dropdown--below"), c.addClass("select2-container--below");
            }, a;
        }), b.define("select2/dropdown/stopPropagation", [], function () {
            function a() {}return a.prototype.bind = function (a, b, c) {
                a.call(this, b, c);var d = ["blur", "change", "click", "dblclick", "focus", "focusin", "focusout", "input", "keydown", "keyup", "keypress", "mousedown", "mouseenter", "mouseleave", "mousemove", "mouseover", "mouseup", "search", "touchend", "touchstart"];this.$dropdown.on(d.join(" "), function (a) {
                    a.stopPropagation();
                });
            }, a;
        }), b.define("select2/selection/stopPropagation", [], function () {
            function a() {}return a.prototype.bind = function (a, b, c) {
                a.call(this, b, c);var d = ["blur", "change", "click", "dblclick", "focus", "focusin", "focusout", "input", "keydown", "keyup", "keypress", "mousedown", "mouseenter", "mouseleave", "mousemove", "mouseover", "mouseup", "search", "touchend", "touchstart"];this.$selection.on(d.join(" "), function (a) {
                    a.stopPropagation();
                });
            }, a;
        }), function (c) {
            "function" == typeof b.define && b.define.amd ? b.define("jquery-mousewheel", ["jquery"], c) : "object" == (typeof exports === "undefined" ? "undefined" : _typeof(exports)) ? module.exports = c : c(a);
        }(function (a) {
            function b(b) {
                var g = b || window.event,
                    h = i.call(arguments, 1),
                    j = 0,
                    l = 0,
                    m = 0,
                    n = 0,
                    o = 0,
                    p = 0;if (b = a.event.fix(g), b.type = "mousewheel", "detail" in g && (m = -1 * g.detail), "wheelDelta" in g && (m = g.wheelDelta), "wheelDeltaY" in g && (m = g.wheelDeltaY), "wheelDeltaX" in g && (l = -1 * g.wheelDeltaX), "axis" in g && g.axis === g.HORIZONTAL_AXIS && (l = -1 * m, m = 0), j = 0 === m ? l : m, "deltaY" in g && (m = -1 * g.deltaY, j = m), "deltaX" in g && (l = g.deltaX, 0 === m && (j = -1 * l)), 0 !== m || 0 !== l) {
                    if (1 === g.deltaMode) {
                        var q = a.data(this, "mousewheel-line-height");j *= q, m *= q, l *= q;
                    } else if (2 === g.deltaMode) {
                        var r = a.data(this, "mousewheel-page-height");j *= r, m *= r, l *= r;
                    }if (n = Math.max(Math.abs(m), Math.abs(l)), (!f || f > n) && (f = n, d(g, n) && (f /= 40)), d(g, n) && (j /= 40, l /= 40, m /= 40), j = Math[j >= 1 ? "floor" : "ceil"](j / f), l = Math[l >= 1 ? "floor" : "ceil"](l / f), m = Math[m >= 1 ? "floor" : "ceil"](m / f), k.settings.normalizeOffset && this.getBoundingClientRect) {
                        var s = this.getBoundingClientRect();o = b.clientX - s.left, p = b.clientY - s.top;
                    }return b.deltaX = l, b.deltaY = m, b.deltaFactor = f, b.offsetX = o, b.offsetY = p, b.deltaMode = 0, h.unshift(b, j, l, m), e && clearTimeout(e), e = setTimeout(c, 200), (a.event.dispatch || a.event.handle).apply(this, h);
                }
            }function c() {
                f = null;
            }function d(a, b) {
                return k.settings.adjustOldDeltas && "mousewheel" === a.type && b % 120 === 0;
            }var e,
                f,
                g = ["wheel", "mousewheel", "DOMMouseScroll", "MozMousePixelScroll"],
                h = "onwheel" in document || document.documentMode >= 9 ? ["wheel"] : ["mousewheel", "DomMouseScroll", "MozMousePixelScroll"],
                i = Array.prototype.slice;if (a.event.fixHooks) for (var j = g.length; j;) {
                a.event.fixHooks[g[--j]] = a.event.mouseHooks;
            }var k = a.event.special.mousewheel = { version: "3.1.12", setup: function setup() {
                    if (this.addEventListener) for (var c = h.length; c;) {
                        this.addEventListener(h[--c], b, !1);
                    } else this.onmousewheel = b;a.data(this, "mousewheel-line-height", k.getLineHeight(this)), a.data(this, "mousewheel-page-height", k.getPageHeight(this));
                }, teardown: function teardown() {
                    if (this.removeEventListener) for (var c = h.length; c;) {
                        this.removeEventListener(h[--c], b, !1);
                    } else this.onmousewheel = null;a.removeData(this, "mousewheel-line-height"), a.removeData(this, "mousewheel-page-height");
                }, getLineHeight: function getLineHeight(b) {
                    var c = a(b),
                        d = c["offsetParent" in a.fn ? "offsetParent" : "parent"]();return d.length || (d = a("body")), parseInt(d.css("fontSize"), 10) || parseInt(c.css("fontSize"), 10) || 16;
                }, getPageHeight: function getPageHeight(b) {
                    return a(b).height();
                }, settings: { adjustOldDeltas: !0, normalizeOffset: !0 } };a.fn.extend({ mousewheel: function mousewheel(a) {
                    return a ? this.bind("mousewheel", a) : this.trigger("mousewheel");
                }, unmousewheel: function unmousewheel(a) {
                    return this.unbind("mousewheel", a);
                } });
        }), b.define("jquery.select2", ["jquery", "jquery-mousewheel", "./select2/core", "./select2/defaults"], function (a, b, c, d) {
            if (null == a.fn.select2) {
                var e = ["open", "close", "destroy"];a.fn.select2 = function (b) {
                    if (b = b || {}, "object" == (typeof b === "undefined" ? "undefined" : _typeof(b))) return this.each(function () {
                        var d = a.extend(!0, {}, b);new c(a(this), d);
                    }), this;if ("string" == typeof b) {
                        var d,
                            f = Array.prototype.slice.call(arguments, 1);return this.each(function () {
                            var c = a(this).data("select2");null == c && window.console && console.error && console.error("The select2('" + b + "') method was called on an element that is not using Select2."), d = c[b].apply(c, f);
                        }), a.inArray(b, e) > -1 ? this : d;
                    }throw new Error("Invalid arguments for Select2: " + b);
                };
            }return null == a.fn.select2.defaults && (a.fn.select2.defaults = d), c;
        }), { define: b.define, require: b.require };
    }(),
        c = b.require("jquery.select2");return a.fn.select2.amd = b, c;
});
/*!
 * bootstrap-fileinput v4.4.0
 * http://plugins.krajee.com/file-input
 *
 * Author: Kartik Visweswaran
 * Copyright: 2014 - 2017, Kartik Visweswaran, Krajee.com
 *
 * Licensed under the BSD 3-Clause
 * https://github.com/kartik-v/bootstrap-fileinput/blob/master/LICENSE.md
 */!function (e) {
    "use strict";
    "function" == typeof define && define.amd ? define(["jquery"], e) : "object" == (typeof module === "undefined" ? "undefined" : _typeof(module)) && module.exports ? module.exports = e(require("jquery")) : e(window.jQuery);
}(function (e) {
    "use strict";
    e.fn.fileinputLocales = {}, e.fn.fileinputThemes = {};var i, t;i = { FRAMES: ".kv-preview-thumb", SORT_CSS: "file-sortable", STYLE_SETTING: 'style="width:{width};height:{height};"', OBJECT_PARAMS: '<param name="controller" value="true" />\n<param name="allowFullScreen" value="true" />\n<param name="allowScriptAccess" value="always" />\n<param name="autoPlay" value="false" />\n<param name="autoStart" value="false" />\n<param name="quality" value="high" />\n', DEFAULT_PREVIEW: '<div class="file-preview-other">\n<span class="{previewFileIconClass}">{previewFileIcon}</span>\n</div>', MODAL_ID: "kvFileinputModal", MODAL_EVENTS: ["show", "shown", "hide", "hidden", "loaded"], objUrl: window.URL || window.webkitURL, compare: function compare(e, i, t) {
            return void 0 !== e && (t ? e === i : e.match(i));
        }, isIE: function isIE(e) {
            if ("Microsoft Internet Explorer" !== navigator.appName) return !1;if (10 === e) return new RegExp("msie\\s" + e, "i").test(navigator.userAgent);var i,
                t = document.createElement("div");return t.innerHTML = "<!--[if IE " + e + "]> <i></i> <![endif]-->", i = t.getElementsByTagName("i").length, document.body.appendChild(t), t.parentNode.removeChild(t), i;
        }, initModal: function initModal(i) {
            var t = e("body");t.length && i.appendTo(t);
        }, isEmpty: function isEmpty(i, t) {
            return void 0 === i || null === i || 0 === i.length || t && "" === e.trim(i);
        }, isArray: function isArray(e) {
            return Array.isArray(e) || "[object Array]" === Object.prototype.toString.call(e);
        }, ifSet: function ifSet(e, i, t) {
            return t = t || "", i && "object" == (typeof i === "undefined" ? "undefined" : _typeof(i)) && e in i ? i[e] : t;
        }, cleanArray: function cleanArray(e) {
            return e instanceof Array || (e = []), e.filter(function (e) {
                return void 0 !== e && null !== e;
            });
        }, spliceArray: function spliceArray(e, i) {
            var t,
                a = 0,
                r = [];if (!(e instanceof Array)) return [];for (t = 0; t < e.length; t++) {
                t !== i && (r[a] = e[t], a++);
            }return r;
        }, getNum: function getNum(e, i) {
            return i = i || 0, "number" == typeof e ? e : ("string" == typeof e && (e = parseFloat(e)), isNaN(e) ? i : e);
        }, hasFileAPISupport: function hasFileAPISupport() {
            return !(!window.File || !window.FileReader);
        }, hasDragDropSupport: function hasDragDropSupport() {
            var e = document.createElement("div");return !i.isIE(9) && (void 0 !== e.draggable || void 0 !== e.ondragstart && void 0 !== e.ondrop);
        }, hasFileUploadSupport: function hasFileUploadSupport() {
            return i.hasFileAPISupport() && window.FormData;
        }, addCss: function addCss(e, i) {
            e.removeClass(i).addClass(i);
        }, getElement: function getElement(t, a, r) {
            return i.isEmpty(t) || i.isEmpty(t[a]) ? r : e(t[a]);
        }, uniqId: function uniqId() {
            return Math.round(new Date().getTime() + 100 * Math.random());
        }, htmlEncode: function htmlEncode(e) {
            return e.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;").replace(/'/g, "&apos;");
        }, replaceTags: function replaceTags(i, t) {
            var a = i;return t ? (e.each(t, function (e, i) {
                "function" == typeof i && (i = i()), a = a.split(e).join(i);
            }), a) : a;
        }, cleanMemory: function cleanMemory(e) {
            var t = e.is("img") ? e.attr("src") : e.find("source").attr("src");i.objUrl.revokeObjectURL(t);
        }, findFileName: function findFileName(e) {
            var i = e.lastIndexOf("/");return -1 === i && (i = e.lastIndexOf("\\")), e.split(e.substring(i, i + 1)).pop();
        }, checkFullScreen: function checkFullScreen() {
            return document.fullscreenElement || document.mozFullScreenElement || document.webkitFullscreenElement || document.msFullscreenElement;
        }, toggleFullScreen: function toggleFullScreen(e) {
            var t = document,
                a = t.documentElement;a && e && !i.checkFullScreen() ? a.requestFullscreen ? a.requestFullscreen() : a.msRequestFullscreen ? a.msRequestFullscreen() : a.mozRequestFullScreen ? a.mozRequestFullScreen() : a.webkitRequestFullscreen && a.webkitRequestFullscreen(Element.ALLOW_KEYBOARD_INPUT) : t.exitFullscreen ? t.exitFullscreen() : t.msExitFullscreen ? t.msExitFullscreen() : t.mozCancelFullScreen ? t.mozCancelFullScreen() : t.webkitExitFullscreen && t.webkitExitFullscreen();
        }, moveArray: function moveArray(e, i, t) {
            if (t >= e.length) for (var a = t - e.length; a-- + 1;) {
                e.push(void 0);
            }return e.splice(t, 0, e.splice(i, 1)[0]), e;
        }, cleanZoomCache: function cleanZoomCache(e) {
            var i = e.closest(".kv-zoom-cache-theme");i.length || (i = e.closest(".kv-zoom-cache")), i.remove();
        } }, t = function t(_t, a) {
        var r = this;r.$element = e(_t), r._validate() && (r.isPreviewable = i.hasFileAPISupport(), r.isIE9 = i.isIE(9), r.isIE10 = i.isIE(10), r.isPreviewable || r.isIE9 ? (r._init(a), r._listen()) : r.$element.removeClass("file-loading"));
    }, t.prototype = { constructor: t, _init: function _init(t) {
            var a,
                r,
                n = this,
                o = n.$element;n.options = t, e.each(t, function (e, t) {
                switch (e) {case "minFileCount":case "maxFileCount":case "minFileSize":case "maxFileSize":case "maxFilePreviewSize":case "resizeImageQuality":case "resizeIfSizeMoreThan":case "progressUploadThreshold":case "initialPreviewCount":case "zoomModalHeight":case "minImageHeight":case "maxImageHeight":case "minImageWidth":case "maxImageWidth":
                        n[e] = i.getNum(t);break;default:
                        n[e] = t;}
            }), n.$form = o.closest("form"), n._initTemplateDefaults(), n.fileInputCleared = !1, n.fileBatchCompleted = !0, n.isPreviewable || (n.showPreview = !1), n.uploadFileAttr = i.isEmpty(o.attr("name")) ? "file_data" : o.attr("name"), n.reader = null, n.formdata = {}, n.clearStack(), n.uploadCount = 0, n.uploadStatus = {}, n.uploadLog = [], n.uploadAsyncCount = 0, n.loadedImages = [], n.totalImagesCount = 0, n.ajaxRequests = [], n.isError = !1, n.ajaxAborted = !1, n.cancelling = !1, r = n._getLayoutTemplate("progress"), n.progressTemplate = r.replace("{class}", n.progressClass), n.progressCompleteTemplate = r.replace("{class}", n.progressCompleteClass), n.progressErrorTemplate = r.replace("{class}", n.progressErrorClass), n.dropZoneEnabled = i.hasDragDropSupport() && n.dropZoneEnabled, n.isDisabled = o.attr("disabled") || o.attr("readonly"), n.isDisabled && o.attr("disabled", !0), n.isUploadable = i.hasFileUploadSupport() && !i.isEmpty(n.uploadUrl), n.isClickable = n.browseOnZoneClick && n.showPreview && (n.isUploadable && n.dropZoneEnabled || !i.isEmpty(n.defaultPreviewContent)), n.slug = "function" == typeof t.slugCallback ? t.slugCallback : n._slugDefault, n.mainTemplate = n.showCaption ? n._getLayoutTemplate("main1") : n._getLayoutTemplate("main2"), n.captionTemplate = n._getLayoutTemplate("caption"), n.previewGenericTemplate = n._getPreviewTemplate("generic"), n.resizeImage && (n.maxImageWidth || n.maxImageHeight) && (n.imageCanvas = document.createElement("canvas"), n.imageCanvasContext = n.imageCanvas.getContext("2d")), i.isEmpty(o.attr("id")) && o.attr("id", i.uniqId()), n.namespace = ".fileinput_" + o.attr("id").replace(/-/g, "_"), void 0 === n.$container ? n.$container = n._createContainer() : n._refreshContainer(), a = n.$container, n.$dropZone = a.find(".file-drop-zone"), n.$progress = a.find(".kv-upload-progress"), n.$btnUpload = a.find(".fileinput-upload"), n.$captionContainer = i.getElement(t, "elCaptionContainer", a.find(".file-caption")), n.$caption = i.getElement(t, "elCaptionText", a.find(".file-caption-name")), n.$previewContainer = i.getElement(t, "elPreviewContainer", a.find(".file-preview")), n.$preview = i.getElement(t, "elPreviewImage", a.find(".file-preview-thumbnails")), n.$previewStatus = i.getElement(t, "elPreviewStatus", a.find(".file-preview-status")), n.$errorContainer = i.getElement(t, "elErrorContainer", n.$previewContainer.find(".kv-fileinput-error")), i.isEmpty(n.msgErrorClass) || i.addCss(n.$errorContainer, n.msgErrorClass), n.$errorContainer.hide(), n.previewInitId = "preview-" + i.uniqId(), n._initPreviewCache(), n._initPreview(!0), n._initPreviewActions(), n._setFileDropZoneTitle(), o.removeClass("file-loading"), o.attr("disabled") && n.disable(), n._initZoom();
        }, _initTemplateDefaults: function _initTemplateDefaults() {
            var t,
                a,
                r,
                n,
                o,
                l,
                s,
                d,
                c,
                p,
                u,
                f,
                m,
                g,
                v,
                h,
                w,
                _,
                b,
                C,
                y,
                E,
                x,
                T,
                S,
                F,
                I,
                P,
                k,
                z,
                A,
                $,
                D,
                U,
                j,
                R = this;t = '{preview}\n<div class="kv-upload-progress hide"></div>\n<div class="input-group {class}">\n   {caption}\n   <div class="input-group-btn">\n       {remove}\n       {cancel}\n       {upload}\n       {browse}\n   </div>\n</div>', a = '{preview}\n<div class="kv-upload-progress hide"></div>\n{remove}\n{cancel}\n{upload}\n{browse}\n', r = '<div class="file-preview {class}">\n    {close}    <div class="{dropClass}">\n    <div class="file-preview-thumbnails">\n    </div>\n    <div class="clearfix"></div>    <div class="file-preview-status text-center text-success"></div>\n    <div class="kv-fileinput-error"></div>\n    </div>\n</div>', o = '<div class="close fileinput-remove">&times;</div>\n', n = '<i class="glyphicon glyphicon-file kv-caption-icon"></i>', l = '<div tabindex="500" class="form-control file-caption {class}">\n   <div class="file-caption-name"></div>\n</div>\n', s = '<button type="{type}" tabindex="500" title="{title}" class="{css}" {status}>{icon} {label}</button>', d = '<a href="{href}" tabindex="500" title="{title}" class="{css}" {status}>{icon} {label}</a>', c = '<div tabindex="500" class="{css}" {status}>{icon} {label}</div>', p = '<div id="' + i.MODAL_ID + '" class="file-zoom-dialog modal fade" tabindex="-1" aria-labelledby="' + i.MODAL_ID + 'Label"></div>', u = '<div class="modal-dialog modal-lg" role="document">\n  <div class="modal-content">\n    <div class="modal-header">\n      <div class="kv-zoom-actions pull-right">{toggleheader}{fullscreen}{borderless}{close}</div>\n      <h3 class="modal-title">{heading} <small><span class="kv-zoom-title"></span></small></h3>\n    </div>\n    <div class="modal-body">\n      <div class="floating-buttons"></div>\n      <div class="kv-zoom-body file-zoom-content {zoomFrameClass}"></div>\n{prev} {next}\n    </div>\n  </div>\n</div>\n', f = '<div class="progress">\n    <div class="{class}" role="progressbar" aria-valuenow="{percent}" aria-valuemin="0" aria-valuemax="100" style="width:{percent}%;">\n        {status}\n     </div>\n</div>', m = " <samp>({sizeText})</samp>", g = '<div class="file-thumbnail-footer">\n    <div class="file-footer-caption" title="{caption}">{caption}<br>{size}</div>\n    {progress} {actions}\n</div>', v = '<div class="file-upload-indicator" title="{indicatorTitle}">{indicator}</div>\n{drag}\n<div class="file-actions">\n    <div class="file-footer-buttons">\n        {upload} {delete} {zoom} {other}    </div>\n    <div class="clearfix"></div>\n</div>', h = '<button type="button" class="kv-file-remove {removeClass}" title="{removeTitle}" {dataUrl}{dataKey}>{removeIcon}</button>\n', w = '<button type="button" class="kv-file-upload {uploadClass}" title="{uploadTitle}">{uploadIcon}</button>', _ = '<button type="button" class="kv-file-zoom {zoomClass}" title="{zoomTitle}">{zoomIcon}</button>', b = '<span class="file-drag-handle {dragClass}" title="{dragTitle}">{dragIcon}</span>', C = '<div class="file-preview-frame {frameClass}" id="{previewId}" data-fileindex="{fileindex}" data-template="{template}"', y = C + '><div class="kv-file-content">\n', E = C + ' title="{caption}"><div class="kv-file-content">\n', x = "</div>{footer}\n</div>\n", T = "{content}\n", S = '<div class="kv-preview-data file-preview-html" title="{caption}" ' + i.STYLE_SETTING + ">{data}</div>\n", F = '<img src="{data}" class="file-preview-image kv-preview-data" title="{caption}" alt="{caption}" ' + i.STYLE_SETTING + ">\n", I = '<textarea class="kv-preview-data file-preview-text" title="{caption}" readonly ' + i.STYLE_SETTING + ">{data}</textarea>\n", P = '<video class="kv-preview-data file-preview-video" width="{width}" height="{height}" controls>\n<source src="{data}" type="{type}">\n' + i.DEFAULT_PREVIEW + "\n</video>\n", k = '<div class="file-preview-audio"><audio class="kv-preview-data" controls>\n<source src="{data}" type="{type}">\n' + i.DEFAULT_PREVIEW + "\n</audio></div>\n", z = '<object class="kv-preview-data file-object" type="application/x-shockwave-flash" width="{width}" height="{height}" data="{data}">\n' + i.OBJECT_PARAMS + " " + i.DEFAULT_PREVIEW + "\n</object>\n", A = '<object class="kv-preview-data file-object" data="{data}" type="{type}" width="{width}" height="{height}">\n<param name="movie" value="{caption}" />\n' + i.OBJECT_PARAMS + " " + i.DEFAULT_PREVIEW + "\n</object>\n", $ = '<embed class="kv-preview-data" src="{data}" width="{width}" height="{height}" type="application/pdf">\n', D = '<div class="kv-preview-data file-preview-other-frame">\n' + i.DEFAULT_PREVIEW + "\n</div>\n", U = '<div class="kv-zoom-cache" style="display:none">{zoomContent}</div>', j = { width: "100%", height: "100%", "min-height": "480px" }, R.defaults = { layoutTemplates: { main1: t, main2: a, preview: r, close: o, fileIcon: n, caption: l, modalMain: p, modal: u, progress: f, size: m, footer: g, actions: v, actionDelete: h, actionUpload: w, actionZoom: _, actionDrag: b, btnDefault: s, btnLink: d, btnBrowse: c, zoomCache: U }, previewMarkupTags: { tagBefore1: y, tagBefore2: E, tagAfter: x }, previewContentTemplates: { generic: T, html: S, image: F, text: I, video: P, audio: k, flash: z, object: A, pdf: $, other: D }, allowedPreviewTypes: ["image", "html", "text", "video", "audio", "flash", "pdf", "object"], previewTemplates: {}, previewSettings: { image: { width: "auto", height: "160px" }, html: { width: "213px", height: "160px" }, text: { width: "213px", height: "160px" }, video: { width: "213px", height: "160px" }, audio: { width: "213px", height: "80px" }, flash: { width: "213px", height: "160px" }, object: { width: "160px", height: "auto" }, pdf: { width: "160px", height: "160px" }, other: { width: "160px", height: "160px" } }, previewZoomSettings: { image: { width: "auto", height: "auto", "max-width": "100%", "max-height": "100%" }, html: j, text: j, video: { width: "auto", height: "100%", "max-width": "100%" }, audio: { width: "100%", height: "30px" }, flash: { width: "auto", height: "480px" }, object: { width: "auto", height: "100%", "max-width": "100%", "min-height": "480px" }, pdf: j, other: { width: "auto", height: "100%", "min-height": "480px" } }, fileTypeSettings: { image: function image(e, t) {
                        return i.compare(e, "image.*") || i.compare(t, /\.(gif|png|jpe?g)$/i);
                    }, html: function html(e, t) {
                        return i.compare(e, "text/html") || i.compare(t, /\.(htm|html)$/i);
                    }, text: function text(e, t) {
                        return i.compare(e, "text.*") || i.compare(t, /\.(xml|javascript)$/i) || i.compare(t, /\.(txt|md|csv|nfo|ini|json|php|js|css)$/i);
                    }, video: function video(e, t) {
                        return i.compare(e, "video.*") && (i.compare(e, /(ogg|mp4|mp?g|mov|webm|3gp)$/i) || i.compare(t, /\.(og?|mp4|webm|mp?g|mov|3gp)$/i));
                    }, audio: function audio(e, t) {
                        return i.compare(e, "audio.*") && (i.compare(t, /(ogg|mp3|mp?g|wav)$/i) || i.compare(t, /\.(og?|mp3|mp?g|wav)$/i));
                    }, flash: function flash(e, t) {
                        return i.compare(e, "application/x-shockwave-flash", !0) || i.compare(t, /\.(swf)$/i);
                    }, pdf: function pdf(e, t) {
                        return i.compare(e, "application/pdf", !0) || i.compare(t, /\.(pdf)$/i);
                    }, object: function object() {
                        return !0;
                    }, other: function other() {
                        return !0;
                    } }, fileActionSettings: { showRemove: !0, showUpload: !0, showZoom: !0, showDrag: !0, removeIcon: '<i class="glyphicon glyphicon-trash text-danger"></i>', removeClass: "btn btn-xs btn-default", removeTitle: "Remove file", uploadIcon: '<i class="glyphicon glyphicon-upload text-info"></i>', uploadClass: "btn btn-xs btn-default", uploadTitle: "Upload file", zoomIcon: '<i class="glyphicon glyphicon-zoom-in"></i>', zoomClass: "btn btn-xs btn-default", zoomTitle: "View Details", dragIcon: '<i class="glyphicon glyphicon-menu-hamburger"></i>', dragClass: "text-info", dragTitle: "Move / Rearrange", dragSettings: {}, indicatorNew: '<i class="glyphicon glyphicon-hand-down text-warning"></i>', indicatorSuccess: '<i class="glyphicon glyphicon-ok-sign text-success"></i>', indicatorError: '<i class="glyphicon glyphicon-exclamation-sign text-danger"></i>', indicatorLoading: '<i class="glyphicon glyphicon-hand-up text-muted"></i>', indicatorNewTitle: "Not uploaded yet", indicatorSuccessTitle: "Uploaded", indicatorErrorTitle: "Upload Error", indicatorLoadingTitle: "Uploading ..." } }, e.each(R.defaults, function (i, t) {
                return "allowedPreviewTypes" === i ? void (void 0 === R.allowedPreviewTypes && (R.allowedPreviewTypes = t)) : void (R[i] = e.extend(!0, {}, t, R[i]));
            }), R._initPreviewTemplates();
        }, _initPreviewTemplates: function _initPreviewTemplates() {
            var t,
                a = this,
                r = a.defaults,
                n = a.previewMarkupTags,
                o = n.tagAfter;e.each(r.previewContentTemplates, function (e, r) {
                i.isEmpty(a.previewTemplates[e]) && (t = n.tagBefore2, "generic" !== e && "image" !== e && "html" !== e && "text" !== e || (t = n.tagBefore1), a.previewTemplates[e] = t + r + o);
            });
        }, _initPreviewCache: function _initPreviewCache() {
            var t = this;t.previewCache = { data: {}, init: function init() {
                    var e = t.initialPreview;e.length > 0 && !i.isArray(e) && (e = e.split(t.initialPreviewDelimiter)), t.previewCache.data = { content: e, config: t.initialPreviewConfig, tags: t.initialPreviewThumbTags };
                }, fetch: function fetch() {
                    return t.previewCache.data.content.filter(function (e) {
                        return null !== e;
                    });
                }, count: function count(e) {
                    return t.previewCache.data && t.previewCache.data.content ? e ? t.previewCache.data.content.length : t.previewCache.fetch().length : 0;
                }, get: function get(a, r) {
                    var n,
                        o,
                        l,
                        s,
                        d,
                        c,
                        p,
                        u = "init_" + a,
                        f = t.previewCache.data,
                        m = f.config[a],
                        g = f.content[a],
                        v = t.previewInitId + "-" + u,
                        h = i.ifSet("previewAsData", m, t.initialPreviewAsData),
                        w = function w(e, a, r, n, o, l, s, d, c) {
                        return d = " file-preview-initial " + i.SORT_CSS + (d ? " " + d : ""), t._generatePreviewTemplate(e, a, r, n, o, !1, null, d, l, s, c);
                    };return g ? (r = void 0 === r ? !0 : r, l = i.ifSet("type", m, t.initialPreviewFileType || "generic"), d = i.ifSet("filename", m, i.ifSet("caption", m)), c = i.ifSet("filetype", m, l), s = t.previewCache.footer(a, r, m && m.size || null), p = i.ifSet("frameClass", m), n = h ? w(l, g, d, c, v, s, u, p) : w("generic", g, d, c, v, s, u, p, l).replace(/\{content}/g, f.content[a]), f.tags.length && f.tags[a] && (n = i.replaceTags(n, f.tags[a])), i.isEmpty(m) || i.isEmpty(m.frameAttr) || (o = e(document.createElement("div")).html(n), o.find(".file-preview-initial").attr(m.frameAttr), n = o.html(), o.remove()), n) : "";
                }, add: function add(e, a, r, n) {
                    var o,
                        l = t.previewCache.data;return i.isArray(e) || (e = e.split(t.initialPreviewDelimiter)), n ? (o = l.content.push(e) - 1, l.config[o] = a, l.tags[o] = r) : (o = e.length - 1, l.content = e, l.config = a, l.tags = r), t.previewCache.data = l, o;
                }, set: function set(e, a, r, n) {
                    var o,
                        l,
                        s = t.previewCache.data;if (e && e.length && (i.isArray(e) || (e = e.split(t.initialPreviewDelimiter)), l = e.filter(function (e) {
                        return null !== e;
                    }), l.length)) {
                        if (void 0 === s.content && (s.content = []), void 0 === s.config && (s.config = []), void 0 === s.tags && (s.tags = []), n) {
                            for (o = 0; o < e.length; o++) {
                                e[o] && s.content.push(e[o]);
                            }for (o = 0; o < a.length; o++) {
                                a[o] && s.config.push(a[o]);
                            }for (o = 0; o < r.length; o++) {
                                r[o] && s.tags.push(r[o]);
                            }
                        } else s.content = e, s.config = a, s.tags = r;t.previewCache.data = s;
                    }
                }, unset: function unset(e) {
                    var i = t.previewCache.count();if (i) {
                        if (1 === i) return t.previewCache.data.content = [], t.previewCache.data.config = [], t.previewCache.data.tags = [], t.initialPreview = [], t.initialPreviewConfig = [], void (t.initialPreviewThumbTags = []);t.previewCache.data.content[e] = null, t.previewCache.data.config[e] = null, t.previewCache.data.tags[e] = null;
                    }
                }, out: function out() {
                    var e,
                        i,
                        a = "",
                        r = t.previewCache.count(!0);if (0 === r) return { content: "", caption: "" };for (i = 0; r > i; i++) {
                        a += t.previewCache.get(i);
                    }return e = t._getMsgSelected(t.previewCache.count()), { content: a, caption: e };
                }, footer: function footer(e, a, r) {
                    var n = t.previewCache.data;if (!n || !n.config || 0 === n.config.length || i.isEmpty(n.config[e])) return "";a = void 0 === a ? !0 : a;var o = n.config[e],
                        l = i.ifSet("caption", o),
                        s = "",
                        d = i.ifSet("width", o, "auto"),
                        c = i.ifSet("url", o, !1),
                        p = i.ifSet("key", o, null),
                        u = t.fileActionSettings,
                        f = i.ifSet("showDelete", o, !0),
                        m = i.ifSet("showZoom", o, u.showZoom),
                        g = i.ifSet("showDrag", o, u.showDrag),
                        v = c === !1 && a;return t.initialPreviewShowDelete && (s = t._renderFileActions(!1, f, m, g, v, c, p, !0)), t._getLayoutTemplate("footer").replace(/\{progress}/g, t._renderThumbProgress()).replace(/\{actions}/g, s).replace(/\{caption}/g, l).replace(/\{size}/g, t._getSize(r)).replace(/\{width}/g, d).replace(/\{indicator}/g, "").replace(/\{indicatorTitle}/g, "");
                } }, t.previewCache.init();
        }, _handler: function _handler(e, i, t) {
            var a = this,
                r = a.namespace,
                n = i.split(" ").join(r + " ") + r;e && e.length && e.off(n).on(n, t);
        }, _log: function _log(e) {
            var i = this,
                t = i.$element.attr("id");t && (e = '"' + t + '": ' + e), "undefined" != typeof window.console.log ? window.console.log(e) : window.alert(e);
        }, _validate: function _validate() {
            var e = this,
                i = "file" === e.$element.attr("type");return i || e._log('The input "type" must be set to "file" for initializing the "bootstrap-fileinput" plugin.'), i;
        }, _errorsExist: function _errorsExist() {
            var i,
                t = this;return t.$errorContainer.find("li").length ? !0 : (i = e(document.createElement("div")).html(t.$errorContainer.html()), i.find("span.kv-error-close").remove(), i.find("ul").remove(), !!e.trim(i.text()).length);
        }, _errorHandler: function _errorHandler(e, i) {
            var t = this,
                a = e.target.error;a.code === a.NOT_FOUND_ERR ? t._showError(t.msgFileNotFound.replace("{name}", i)) : a.code === a.SECURITY_ERR ? t._showError(t.msgFileSecured.replace("{name}", i)) : a.code === a.NOT_READABLE_ERR ? t._showError(t.msgFileNotReadable.replace("{name}", i)) : a.code === a.ABORT_ERR ? t._showError(t.msgFilePreviewAborted.replace("{name}", i)) : t._showError(t.msgFilePreviewError.replace("{name}", i));
        }, _addError: function _addError(e) {
            var i = this,
                t = i.$errorContainer;e && t.length && (t.html(i.errorCloseButton + e), i._handler(t.find(".kv-error-close"), "click", function () {
                t.fadeOut("slow");
            }));
        }, _resetErrors: function _resetErrors(e) {
            var i = this,
                t = i.$errorContainer;i.isError = !1, i.$container.removeClass("has-error"), t.html(""), e ? t.fadeOut("slow") : t.hide();
        }, _showFolderError: function _showFolderError(e) {
            var t,
                a = this,
                r = a.$errorContainer;e && (t = a.msgFoldersNotAllowed.replace(/\{n}/g, e), a._addError(t), i.addCss(a.$container, "has-error"), r.fadeIn(800), a._raise("filefoldererror", [e, t]));
        }, _showUploadError: function _showUploadError(e, t, a) {
            var r = this,
                n = r.$errorContainer,
                o = a || "fileuploaderror",
                l = t && t.id ? '<li data-file-id="' + t.id + '">' + e + "</li>" : "<li>" + e + "</li>";return 0 === n.find("ul").length ? r._addError("<ul>" + l + "</ul>") : n.find("ul").append(l), n.fadeIn(800), r._raise(o, [t, e]), r.$container.removeClass("file-input-new"), i.addCss(r.$container, "has-error"), !0;
        }, _showError: function _showError(e, t, a) {
            var r = this,
                n = r.$errorContainer,
                o = a || "fileerror";return t = t || {}, t.reader = r.reader, r._addError(e), n.fadeIn(800), r._raise(o, [t, e]), r.isUploadable || r._clearFileInput(), r.$container.removeClass("file-input-new"), i.addCss(r.$container, "has-error"), r.$btnUpload.attr("disabled", !0), !0;
        }, _noFilesError: function _noFilesError(e) {
            var t = this,
                a = t.minFileCount > 1 ? t.filePlural : t.fileSingle,
                r = t.msgFilesTooLess.replace("{n}", t.minFileCount).replace("{files}", a),
                n = t.$errorContainer;t._addError(r), t.isError = !0, t._updateFileDetails(0), n.fadeIn(800), t._raise("fileerror", [e, r]), t._clearFileInput(), i.addCss(t.$container, "has-error");
        }, _parseError: function _parseError(i, t, a, r) {
            var n = this,
                o = e.trim(a + ""),
                l = "." === o.slice(-1) ? "" : ".",
                s = void 0 !== t.responseJSON && void 0 !== t.responseJSON.error ? t.responseJSON.error : t.responseText;return n.cancelling && n.msgUploadAborted && (o = n.msgUploadAborted), n.showAjaxErrorDetails && s ? (s = e.trim(s.replace(/\n\s*\n/g, "\n")), s = s.length > 0 ? "<pre>" + s + "</pre>" : "", o += l + s) : o += l, o === l && (o = n.msgAjaxError.replace("{operation}", i)), n.cancelling = !1, r ? "<b>" + r + ": </b>" + o : o;
        }, _parseFileType: function _parseFileType(e) {
            var t,
                a,
                r,
                n,
                o = this,
                l = o.allowedPreviewTypes || [];for (n = 0; n < l.length; n++) {
                if (r = l[n], t = o.fileTypeSettings[r], a = t(e.type, e.name) ? r : "", !i.isEmpty(a)) return a;
            }return "other";
        }, _getPreviewIcon: function _getPreviewIcon(i) {
            var t,
                a = this,
                r = null;return i && i.indexOf(".") > -1 && (t = i.split(".").pop(), a.previewFileIconSettings && a.previewFileIconSettings[t] && (r = a.previewFileIconSettings[t]), a.previewFileExtSettings && e.each(a.previewFileExtSettings, function (e, i) {
                return a.previewFileIconSettings[e] && i(t) ? void (r = a.previewFileIconSettings[e]) : void 0;
            })), r;
        }, _parseFilePreviewIcon: function _parseFilePreviewIcon(e, i) {
            var t = this,
                a = t._getPreviewIcon(i) || t.previewFileIcon;return e.indexOf("{previewFileIcon}") > -1 && (e = e.replace(/\{previewFileIconClass}/g, t.previewFileIconClass).replace(/\{previewFileIcon}/g, a)), e;
        }, _raise: function _raise(i, t) {
            var a = this,
                r = e.Event(i);if (void 0 !== t ? a.$element.trigger(r, t) : a.$element.trigger(r), r.isDefaultPrevented() || r.result === !1) return !1;switch (i) {case "filebatchuploadcomplete":case "filebatchuploadsuccess":case "fileuploaded":case "fileclear":case "filecleared":case "filereset":case "fileerror":case "filefoldererror":case "fileuploaderror":case "filebatchuploaderror":case "filedeleteerror":case "filecustomerror":case "filesuccessremove":
                    break;default:
                    a.ajaxAborted = r.result;}return !0;
        }, _listenFullScreen: function _listenFullScreen(e) {
            var i,
                t,
                a = this,
                r = a.$modal;r && r.length && (i = r && r.find(".btn-fullscreen"), t = r && r.find(".btn-borderless"), i.length && t.length && (i.removeClass("active").attr("aria-pressed", "false"), t.removeClass("active").attr("aria-pressed", "false"), e ? i.addClass("active").attr("aria-pressed", "true") : t.addClass("active").attr("aria-pressed", "true"), r.hasClass("file-zoom-fullscreen") ? a._maximizeZoomDialog() : e ? a._maximizeZoomDialog() : t.removeClass("active").attr("aria-pressed", "false")));
        }, _listen: function _listen() {
            var t,
                a = this,
                r = a.$element,
                n = a.$form,
                o = a.$container;a._handler(r, "change", e.proxy(a._change, a)), a.showBrowse && a._handler(a.$btnFile, "click", e.proxy(a._browse, a)), a._handler(o.find(".fileinput-remove:not([disabled])"), "click", e.proxy(a.clear, a)), a._handler(o.find(".fileinput-cancel"), "click", e.proxy(a.cancel, a)), a._initDragDrop(), a._handler(n, "reset", e.proxy(a.reset, a)), a.isUploadable || a._handler(n, "submit", e.proxy(a._submitForm, a)), a._handler(a.$container.find(".fileinput-upload"), "click", e.proxy(a._uploadClick, a)), a._handler(e(window), "resize", function () {
                a._listenFullScreen(screen.width === window.innerWidth && screen.height === window.innerHeight);
            }), t = "webkitfullscreenchange mozfullscreenchange fullscreenchange MSFullscreenChange", a._handler(e(document), t, function () {
                a._listenFullScreen(i.checkFullScreen());
            }), a._initClickable();
        }, _initClickable: function _initClickable() {
            var t,
                a = this;a.isClickable && (t = a.isUploadable ? a.$dropZone : a.$preview.find(".file-default-preview"), i.addCss(t, "clickable"), t.attr("tabindex", -1), a._handler(t, "click", function (i) {
                var r = e(i.target);r.parents(".file-preview-thumbnails").length && !r.parents(".file-default-preview").length || (a.$element.trigger("click"), t.blur());
            }));
        }, _initDragDrop: function _initDragDrop() {
            var i = this,
                t = i.$dropZone;i.isUploadable && i.dropZoneEnabled && i.showPreview && (i._handler(t, "dragenter dragover", e.proxy(i._zoneDragEnter, i)), i._handler(t, "dragleave", e.proxy(i._zoneDragLeave, i)), i._handler(t, "drop", e.proxy(i._zoneDrop, i)), i._handler(e(document), "dragenter dragover drop", i._zoneDragDropInit));
        }, _zoneDragDropInit: function _zoneDragDropInit(e) {
            e.stopPropagation(), e.preventDefault();
        }, _zoneDragEnter: function _zoneDragEnter(t) {
            var a = this,
                r = e.inArray("Files", t.originalEvent.dataTransfer.types) > -1;return a._zoneDragDropInit(t), a.isDisabled || !r ? (t.originalEvent.dataTransfer.effectAllowed = "none", void (t.originalEvent.dataTransfer.dropEffect = "none")) : void i.addCss(a.$dropZone, "file-highlighted");
        }, _zoneDragLeave: function _zoneDragLeave(e) {
            var i = this;i._zoneDragDropInit(e), i.isDisabled || i.$dropZone.removeClass("file-highlighted");
        }, _zoneDrop: function _zoneDrop(e) {
            var t = this;e.preventDefault(), t.isDisabled || i.isEmpty(e.originalEvent.dataTransfer.files) || (t._change(e, "dragdrop"), t.$dropZone.removeClass("file-highlighted"));
        }, _uploadClick: function _uploadClick(e) {
            var t,
                a = this,
                r = a.$container.find(".fileinput-upload"),
                n = !r.hasClass("disabled") && i.isEmpty(r.attr("disabled"));if (!e || !e.isDefaultPrevented()) {
                if (!a.isUploadable) return void (n && "submit" !== r.attr("type") && (t = r.closest("form"), t.length && t.trigger("submit"), e.preventDefault()));e.preventDefault(), n && a.upload();
            }
        }, _submitForm: function _submitForm() {
            var e = this,
                i = e.$element,
                t = i.get(0).files;return t && e.minFileCount > 0 && e._getFileCount(t.length) < e.minFileCount ? (e._noFilesError({}), !1) : !e._abort({});
        }, _clearPreview: function _clearPreview() {
            var t = this,
                a = t.$preview,
                r = t.showUploadedThumbs ? a.find(i.FRAMES + ":not(.file-preview-success)") : a.find(i.FRAMES);r.each(function () {
                var t = e(this);t.remove(), i.cleanZoomCache(a.find("#zoom-" + t.attr("id")));
            }), t.$preview.find(i.FRAMES).length && t.showPreview || t._resetUpload(), t._validateDefaultPreview();
        }, _initSortable: function _initSortable() {
            var t,
                a = this,
                r = a.$preview,
                n = "." + i.SORT_CSS;window.KvSortable && 0 !== r.find(n).length && (t = { handle: ".drag-handle-init", dataIdAttr: "data-preview-id", draggable: n, onSort: function onSort(t) {
                    var r,
                        n,
                        o = t.oldIndex,
                        l = t.newIndex;a.initialPreview = i.moveArray(a.initialPreview, o, l), a.initialPreviewConfig = i.moveArray(a.initialPreviewConfig, o, l), a.previewCache.init();for (var s = 0; s < a.initialPreviewConfig.length; s++) {
                        null !== a.initialPreviewConfig[s] && (r = a.initialPreviewConfig[s].key, n = e(".kv-file-remove[data-key='" + r + "']").closest(i.FRAMES), n.attr("data-fileindex", "init_" + s).data("fileindex", "init_" + s));
                    }a._raise("filesorted", { previewId: e(t.item).attr("id"), oldIndex: o, newIndex: l, stack: a.initialPreviewConfig });
                } }, r.data("kvsortable") && r.kvsortable("destroy"), e.extend(!0, t, a.fileActionSettings.dragSettings), r.kvsortable(t));
        }, _initPreview: function _initPreview(e) {
            var t,
                a = this,
                r = a.initialCaption || "";return a.previewCache.count() ? (t = a.previewCache.out(), r = e && a.initialCaption ? a.initialCaption : t.caption, a.$preview.html(t.content), a._setInitThumbAttr(), a._setCaption(r), a._initSortable(), void (i.isEmpty(t.content) || a.$container.removeClass("file-input-new"))) : (a._clearPreview(), void (e ? a._setCaption(r) : a._initCaption()));
        }, _getZoomButton: function _getZoomButton(e) {
            var i = this,
                t = i.previewZoomButtonIcons[e],
                a = i.previewZoomButtonClasses[e],
                r = ' title="' + (i.previewZoomButtonTitles[e] || "") + '" ',
                n = r + ("close" === e ? ' data-dismiss="modal" aria-hidden="true"' : "");return "fullscreen" !== e && "borderless" !== e && "toggleheader" !== e || (n += ' data-toggle="button" aria-pressed="false" autocomplete="off"'), '<button type="button" class="' + a + " btn-" + e + '"' + n + ">" + t + "</button>";
        }, _getModalContent: function _getModalContent() {
            var e = this;return e._getLayoutTemplate("modal").replace(/\{zoomFrameClass}/g, e.frameClass).replace(/\{heading}/g, e.msgZoomModalHeading).replace(/\{prev}/g, e._getZoomButton("prev")).replace(/\{next}/g, e._getZoomButton("next")).replace(/\{toggleheader}/g, e._getZoomButton("toggleheader")).replace(/\{fullscreen}/g, e._getZoomButton("fullscreen")).replace(/\{borderless}/g, e._getZoomButton("borderless")).replace(/\{close}/g, e._getZoomButton("close"));
        }, _listenModalEvent: function _listenModalEvent(e) {
            var t = this,
                a = t.$modal,
                r = function r(e) {
                return { sourceEvent: e, previewId: a.data("previewId"), modal: a };
            };a.on(e + ".bs.modal", function (n) {
                var o = a.find(".btn-fullscreen"),
                    l = a.find(".btn-borderless");t._raise("filezoom" + e, r(n)), "shown" === e && (l.removeClass("active").attr("aria-pressed", "false"), o.removeClass("active").attr("aria-pressed", "false"), a.hasClass("file-zoom-fullscreen") && (t._maximizeZoomDialog(), i.checkFullScreen() ? o.addClass("active").attr("aria-pressed", "true") : l.addClass("active").attr("aria-pressed", "true")));
            });
        }, _initZoom: function _initZoom() {
            var t,
                a = this,
                r = a._getLayoutTemplate("modalMain"),
                n = "#" + i.MODAL_ID;a.showPreview && (a.$modal = e(n), a.$modal && a.$modal.length || (t = e(document.createElement("div")).html(r).insertAfter(a.$container), a.$modal = e(n).insertBefore(t), t.remove()), i.initModal(a.$modal), a.$modal.html(a._getModalContent()), e.each(i.MODAL_EVENTS, function (e, i) {
                a._listenModalEvent(i);
            }));
        }, _initZoomButtons: function _initZoomButtons() {
            var t,
                a,
                r = this,
                n = r.$modal.data("previewId") || "",
                o = r.$preview,
                l = o.find(i.FRAMES).toArray(),
                s = l.length,
                d = r.$modal.find(".btn-prev"),
                c = r.$modal.find(".btn-next");return l.length < 2 ? (d.hide(), void c.hide()) : (d.show(), c.show(), void (s && (t = e(l[0]), a = e(l[s - 1]), d.removeAttr("disabled"), c.removeAttr("disabled"), t.length && t.attr("id") === n && d.attr("disabled", !0), a.length && a.attr("id") === n && c.attr("disabled", !0))));
        }, _maximizeZoomDialog: function _maximizeZoomDialog() {
            var i = this,
                t = i.$modal,
                a = t.find(".modal-header:visible"),
                r = t.find(".modal-footer:visible"),
                n = t.find(".modal-body"),
                o = e(window).height(),
                l = 0;t.addClass("file-zoom-fullscreen"), a && a.length && (o -= a.outerHeight(!0)), r && r.length && (o -= r.outerHeight(!0)), n && n.length && (l = n.outerHeight(!0) - n.height(), o -= l), t.find(".kv-zoom-body").height(o);
        }, _resizeZoomDialog: function _resizeZoomDialog(e) {
            var t = this,
                a = t.$modal,
                r = a.find(".btn-fullscreen"),
                n = a.find(".btn-borderless");if (a.hasClass("file-zoom-fullscreen")) i.toggleFullScreen(!1), e ? r.hasClass("active") || (a.removeClass("file-zoom-fullscreen"), t._resizeZoomDialog(!0), n.hasClass("active") && n.removeClass("active").attr("aria-pressed", "false")) : r.hasClass("active") ? r.removeClass("active").attr("aria-pressed", "false") : (a.removeClass("file-zoom-fullscreen"), t.$modal.find(".kv-zoom-body").css("height", t.zoomModalHeight));else {
                if (!e) return void t._maximizeZoomDialog();i.toggleFullScreen(!0);
            }a.focus();
        }, _setZoomContent: function _setZoomContent(t, a) {
            var r,
                n,
                o,
                l,
                s,
                d,
                c,
                p,
                u,
                f,
                m = this,
                g = t.attr("id"),
                v = m.$modal,
                h = v.find(".btn-prev"),
                w = v.find(".btn-next"),
                _ = v.find(".btn-fullscreen"),
                b = v.find(".btn-borderless"),
                C = v.find(".btn-toggleheader"),
                y = m.$preview.find("#zoom-" + g);n = y.attr("data-template") || "generic", r = y.find(".kv-file-content"), o = r.length ? r.html() : "", u = t.data("caption") || "", f = t.data("size") || "", l = u + " " + f, v.find(".kv-zoom-title").html(l), s = v.find(".kv-zoom-body"), v.removeClass("kv-single-content"), a ? (p = s.clone().insertAfter(s), s.html(o).hide(), p.fadeOut("fast", function () {
                s.fadeIn("fast"), p.remove();
            })) : s.html(o), c = m.previewZoomSettings[n], c && (d = s.find(".kv-preview-data"), i.addCss(d, "file-zoom-detail"), e.each(c, function (e, i) {
                d.css(e, i), (d.attr("width") && "width" === e || d.attr("height") && "height" === e) && d.removeAttr(e);
            })), v.data("previewId", g), m._handler(h, "click", function () {
                m._zoomSlideShow("prev", g);
            }), m._handler(w, "click", function () {
                m._zoomSlideShow("next", g);
            }), m._handler(_, "click", function () {
                m._resizeZoomDialog(!0);
            }), m._handler(b, "click", function () {
                m._resizeZoomDialog(!1);
            }), m._handler(C, "click", function () {
                var e,
                    i = v.find(".modal-header"),
                    t = v.find(".modal-body .floating-buttons"),
                    a = i.find(".kv-zoom-actions"),
                    r = function r(e) {
                    var t = m.$modal.find(".kv-zoom-body"),
                        a = m.zoomModalHeight;v.hasClass("file-zoom-fullscreen") && (a = t.outerHeight(!0), e || (a -= i.outerHeight(!0))), t.css("height", e ? a + e : a);
                };i.is(":visible") ? (e = i.outerHeight(!0), i.slideUp("slow", function () {
                    a.find(".btn").appendTo(t), r(e);
                })) : (t.find(".btn").appendTo(a), i.slideDown("slow", function () {
                    r();
                })), v.focus();
            }), m._handler(v, "keydown", function (e) {
                var i = e.which || e.keyCode;37 !== i || h.attr("disabled") || m._zoomSlideShow("prev", g), 39 !== i || w.attr("disabled") || m._zoomSlideShow("next", g);
            });
        }, _zoomPreview: function _zoomPreview(e) {
            var t,
                a = this,
                r = a.$modal;if (!e.length) throw "Cannot zoom to detailed preview!";i.initModal(r), r.html(a._getModalContent()), t = e.closest(i.FRAMES), a._setZoomContent(t), r.modal("show"), a._initZoomButtons();
        }, _zoomSlideShow: function _zoomSlideShow(t, a) {
            var r,
                n,
                o,
                l = this,
                s = l.$modal.find(".kv-zoom-actions .btn-" + t),
                d = l.$preview.find(i.FRAMES).toArray(),
                c = d.length;if (!s.attr("disabled")) {
                for (n = 0; c > n; n++) {
                    if (e(d[n]).attr("id") === a) {
                        o = "prev" === t ? n - 1 : n + 1;break;
                    }
                }0 > o || o >= c || !d[o] || (r = e(d[o]), r.length && l._setZoomContent(r, !0), l._initZoomButtons(), l._raise("filezoom" + t, { previewId: a, modal: l.$modal }));
            }
        }, _initZoomButton: function _initZoomButton() {
            var i = this;i.$preview.find(".kv-file-zoom").each(function () {
                var t = e(this);i._handler(t, "click", function () {
                    i._zoomPreview(t);
                });
            });
        }, _clearObjects: function _clearObjects(i) {
            i.find("video audio").each(function () {
                this.pause(), e(this).remove();
            }), i.find("img object div").each(function () {
                e(this).remove();
            });
        }, _clearFileInput: function _clearFileInput() {
            var t,
                a,
                r,
                n = this,
                o = n.$element;n.fileInputCleared = !0, i.isEmpty(o.val()) || (n.isIE9 || n.isIE10 ? (t = o.closest("form"), a = e(document.createElement("form")), r = e(document.createElement("div")), o.before(r), t.length ? t.after(a) : r.after(a), a.append(o).trigger("reset"), r.before(o).remove(), a.remove()) : o.val(""));
        }, _resetUpload: function _resetUpload() {
            var e = this;e.uploadCache = { content: [], config: [], tags: [], append: !0 }, e.uploadCount = 0, e.uploadStatus = {}, e.uploadLog = [], e.uploadAsyncCount = 0, e.loadedImages = [], e.totalImagesCount = 0, e.$btnUpload.removeAttr("disabled"), e._setProgress(0), i.addCss(e.$progress, "hide"), e._resetErrors(!1), e.ajaxAborted = !1, e.ajaxRequests = [], e._resetCanvas(), e.cacheInitialPreview = {}, e.overwriteInitial && (e.initialPreview = [], e.initialPreviewConfig = [], e.initialPreviewThumbTags = [], e.previewCache.data = { content: [], config: [], tags: [] });
        }, _resetCanvas: function _resetCanvas() {
            var e = this;e.canvas && e.imageCanvasContext && e.imageCanvasContext.clearRect(0, 0, e.canvas.width, e.canvas.height);
        }, _hasInitialPreview: function _hasInitialPreview() {
            var e = this;return !e.overwriteInitial && e.previewCache.count();
        }, _resetPreview: function _resetPreview() {
            var e,
                i,
                t = this;t.previewCache.count() ? (e = t.previewCache.out(), t.$preview.html(e.content), t._setInitThumbAttr(), i = t.initialCaption ? t.initialCaption : e.caption, t._setCaption(i)) : (t._clearPreview(), t._initCaption()), t.showPreview && (t._initZoom(), t._initSortable());
        }, _clearDefaultPreview: function _clearDefaultPreview() {
            var e = this;e.$preview.find(".file-default-preview").remove();
        }, _validateDefaultPreview: function _validateDefaultPreview() {
            var e = this;e.showPreview && !i.isEmpty(e.defaultPreviewContent) && (e.$preview.html('<div class="file-default-preview">' + e.defaultPreviewContent + "</div>"), e.$container.removeClass("file-input-new"), e._initClickable());
        }, _resetPreviewThumbs: function _resetPreviewThumbs(e) {
            var i,
                t = this;return e ? (t._clearPreview(), void t.clearStack()) : void (t._hasInitialPreview() ? (i = t.previewCache.out(), t.$preview.html(i.content), t._setInitThumbAttr(), t._setCaption(i.caption), t._initPreviewActions()) : t._clearPreview());
        }, _getLayoutTemplate: function _getLayoutTemplate(e) {
            var t = this,
                a = t.layoutTemplates[e];return i.isEmpty(t.customLayoutTags) ? a : i.replaceTags(a, t.customLayoutTags);
        }, _getPreviewTemplate: function _getPreviewTemplate(e) {
            var t = this,
                a = t.previewTemplates[e];return i.isEmpty(t.customPreviewTags) ? a : i.replaceTags(a, t.customPreviewTags);
        }, _getOutData: function _getOutData(e, i, t) {
            var a = this;return e = e || {}, i = i || {}, t = t || a.filestack.slice(0) || {}, { form: a.formdata, files: t, filenames: a.filenames, filescount: a.getFilesCount(), extra: a._getExtraData(), response: i, reader: a.reader, jqXHR: e };
        }, _getMsgSelected: function _getMsgSelected(e) {
            var i = this,
                t = 1 === e ? i.fileSingle : i.filePlural;return e > 0 ? i.msgSelected.replace("{n}", e).replace("{files}", t) : i.msgNoFilesSelected;
        }, _getThumbs: function _getThumbs(e) {
            return e = e || "", this.$preview.find(i.FRAMES + ":not(.file-preview-initial)" + e);
        }, _getExtraData: function _getExtraData(e, i) {
            var t = this,
                a = t.uploadExtraData;return "function" == typeof t.uploadExtraData && (a = t.uploadExtraData(e, i)), a;
        }, _initXhr: function _initXhr(e, i, t) {
            var a = this;return e.upload && e.upload.addEventListener("progress", function (e) {
                var r = 0,
                    n = e.total,
                    o = e.loaded || e.position;e.lengthComputable && (r = Math.floor(o / n * 100)), i ? a._setAsyncUploadStatus(i, r, t) : a._setProgress(r);
            }, !1), e;
        }, _ajaxSubmit: function _ajaxSubmit(i, t, a, r, n, o) {
            var l,
                s = this;s._raise("filepreajax", [n, o]) && (s._uploadExtra(n, o), l = e.extend(!0, {}, { xhr: function xhr() {
                    var i = e.ajaxSettings.xhr();return s._initXhr(i, n, s.getFileStack().length);
                }, url: s.uploadUrl, type: "POST", dataType: "json", data: s.formdata, cache: !1, processData: !1, contentType: !1, beforeSend: i, success: t, complete: a, error: r }, s.ajaxSettings), s.ajaxRequests.push(e.ajax(l)));
        }, _mergeArray: function _mergeArray(e, t) {
            var a = this,
                r = i.cleanArray(a[e]),
                n = i.cleanArray(t);a[e] = r.concat(n);
        }, _initUploadSuccess: function _initUploadSuccess(t, a, r) {
            var n,
                o,
                l,
                s,
                d,
                c,
                p,
                u,
                f,
                m = this;m.showPreview && "object" == (typeof t === "undefined" ? "undefined" : _typeof(t)) && !e.isEmptyObject(t) && void 0 !== t.initialPreview && t.initialPreview.length > 0 && (m.hasInitData = !0, c = t.initialPreview || [], p = t.initialPreviewConfig || [], u = t.initialPreviewThumbTags || [], n = !(void 0 !== t.append && !t.append), c.length > 0 && !i.isArray(c) && (c = c.split(m.initialPreviewDelimiter)), m._mergeArray("initialPreview", c), m._mergeArray("initialPreviewConfig", p), m._mergeArray("initialPreviewThumbTags", u), void 0 !== a ? r ? (f = a.attr("data-fileindex"), m.uploadCache.content[f] = c[0], m.uploadCache.config[f] = p[0] || [], m.uploadCache.tags[f] = u[0] || [], m.uploadCache.append = n) : (l = m.previewCache.add(c, p[0], u[0], n), o = m.previewCache.get(l, !1), s = e(document.createElement("div")).html(o).hide().insertAfter(a), d = s.find(".kv-zoom-cache"), d && d.length && d.insertAfter(a), a.fadeOut("slow", function () {
                var e = s.find(".file-preview-frame");e && e.length && e.insertBefore(a).fadeIn("slow").css("display:inline-block"), m._initPreviewActions(), m._clearFileInput(), i.cleanZoomCache(m.$preview.find("#zoom-" + a.attr("id"))), a.remove(), s.remove(), m._initSortable();
            })) : (m.previewCache.set(c, p, u, n), m._initPreview(), m._initPreviewActions()));
        }, _initSuccessThumbs: function _initSuccessThumbs() {
            var t = this;t.showPreview && t._getThumbs(i.FRAMES + ".file-preview-success").each(function () {
                var a = e(this),
                    r = t.$preview,
                    n = a.find(".kv-file-remove");n.removeAttr("disabled"), t._handler(n, "click", function () {
                    var e = a.attr("id"),
                        n = t._raise("filesuccessremove", [e, a.data("fileindex")]);i.cleanMemory(a), n !== !1 && a.fadeOut("slow", function () {
                        i.cleanZoomCache(r.find("#zoom-" + e)), a.remove(), r.find(i.FRAMES).length || t.reset();
                    });
                });
            });
        }, _checkAsyncComplete: function _checkAsyncComplete() {
            var i,
                t,
                a = this;for (t = 0; t < a.filestack.length; t++) {
                if (a.filestack[t] && (i = a.previewInitId + "-" + t, -1 === e.inArray(i, a.uploadLog))) return !1;
            }return a.uploadAsyncCount === a.uploadLog.length;
        }, _uploadExtra: function _uploadExtra(i, t) {
            var a = this,
                r = a._getExtraData(i, t);0 !== r.length && e.each(r, function (e, i) {
                a.formdata.append(e, i);
            });
        }, _uploadSingle: function _uploadSingle(t, a, r) {
            var n,
                o,
                l,
                s,
                d,
                c,
                p,
                u,
                f,
                m,
                g = this,
                v = g.getFileStack().length,
                h = new FormData(),
                w = g.previewInitId + "-" + t,
                _ = g.filestack.length > 0 || !e.isEmptyObject(g.uploadExtraData),
                b = e("#" + w).find(".file-thumb-progress"),
                C = { id: w, index: t };g.formdata = h, g.showPreview && (o = e("#" + w + ":not(.file-preview-initial)"), s = o.find(".kv-file-upload"), d = o.find(".kv-file-remove"), b.removeClass("hide")), 0 === v || !_ || s && s.hasClass("disabled") || g._abort(C) || (m = function m(e, i) {
                g.updateStack(e, void 0), g.uploadLog.push(i), g._checkAsyncComplete() && (g.fileBatchCompleted = !0);
            }, l = function l() {
                var e,
                    t,
                    a,
                    r = g.uploadCache,
                    n = 0,
                    o = g.cacheInitialPreview;g.fileBatchCompleted && (o && o.content && (n = o.content.length), setTimeout(function () {
                    if (g.showPreview) {
                        if (g.previewCache.set(r.content, r.config, r.tags, r.append), n) {
                            for (t = 0; t < r.content.length; t++) {
                                a = t + n, o.content[a] = r.content[t], o.config.length && (o.config[a] = r.config[t]), o.tags.length && (o.tags[a] = r.tags[t]);
                            }g.initialPreview = i.cleanArray(o.content), g.initialPreviewConfig = i.cleanArray(o.config), g.initialPreviewThumbTags = i.cleanArray(o.tags);
                        } else g.initialPreview = r.content, g.initialPreviewConfig = r.config, g.initialPreviewThumbTags = r.tags;g.cacheInitialPreview = {}, g.hasInitData && (g._initPreview(), g._initPreviewActions());
                    }g.unlock(), g._clearFileInput(), e = g.$preview.find(".file-preview-initial"), g.uploadAsync && e.length && (i.addCss(e, i.SORT_CSS), g._initSortable()), g._raise("filebatchuploadcomplete", [g.filestack, g._getExtraData()]), g.uploadCount = 0, g.uploadStatus = {}, g.uploadLog = [], g._setProgress(101);
                }, 100));
            }, c = function c(a) {
                n = g._getOutData(a), g.fileBatchCompleted = !1, g.showPreview && (o.hasClass("file-preview-success") || (g._setThumbStatus(o, "Loading"), i.addCss(o, "file-uploading")), s.attr("disabled", !0), d.attr("disabled", !0)), r || g.lock(), g._raise("filepreupload", [n, w, t]), e.extend(!0, C, n), g._abort(C) && (a.abort(), g._setProgressCancelled());
            }, p = function p(a, l, d) {
                var c = g.showPreview && o.attr("id") ? o.attr("id") : w;n = g._getOutData(d, a), e.extend(!0, C, n), setTimeout(function () {
                    i.isEmpty(a) || i.isEmpty(a.error) ? (g.showPreview && (g._setThumbStatus(o, "Success"), s.hide(), g._initUploadSuccess(a, o, r), g._setProgress(101, b)), g._raise("fileuploaded", [n, c, t]), r ? m(t, c) : g.updateStack(t, void 0)) : (g._showUploadError(a.error, C), g._setPreviewError(o, t), r && m(t, c));
                }, 100);
            }, u = function u() {
                setTimeout(function () {
                    g.showPreview && (s.removeAttr("disabled"), d.removeAttr("disabled"), o.removeClass("file-uploading")), r ? l() : (g.unlock(!1), g._clearFileInput()), g._initSuccessThumbs();
                }, 100);
            }, f = function f(i, n, l) {
                var s = g.ajaxOperations.uploadThumb,
                    d = g._parseError(s, i, l, r ? a[t].name : null);setTimeout(function () {
                    r && m(t, w), g.uploadStatus[w] = 100, g._setPreviewError(o, t), e.extend(!0, C, g._getOutData(i)), g._setProgress(101, b, g.msgAjaxProgressError.replace("{operation}", s)), g._showUploadError(d, C);
                }, 100);
            }, h.append(g.uploadFileAttr, a[t], g.filenames[t]), h.append("file_id", t), g._ajaxSubmit(c, p, u, f, w, t));
        }, _uploadBatch: function _uploadBatch() {
            var t,
                a,
                r,
                n,
                o,
                l = this,
                s = l.filestack,
                d = s.length,
                c = {},
                p = l.filestack.length > 0 || !e.isEmptyObject(l.uploadExtraData);l.formdata = new FormData(), 0 !== d && p && !l._abort(c) && (o = function o() {
                e.each(s, function (e) {
                    l.updateStack(e, void 0);
                }), l._clearFileInput();
            }, t = function t(_t2) {
                l.lock();var a = l._getOutData(_t2);l.showPreview && l._getThumbs().each(function () {
                    var t = e(this),
                        a = t.find(".kv-file-upload"),
                        r = t.find(".kv-file-remove");t.hasClass("file-preview-success") || (l._setThumbStatus(t, "Loading"), i.addCss(t, "file-uploading")), a.attr("disabled", !0), r.attr("disabled", !0);
                }), l._raise("filebatchpreupload", [a]), l._abort(a) && (_t2.abort(), l._setProgressCancelled());
            }, a = function a(t, _a3, r) {
                var n = l._getOutData(r, t),
                    s = l._getThumbs(":not(.file-preview-error)"),
                    d = 0,
                    c = i.isEmpty(t) || i.isEmpty(t.errorkeys) ? [] : t.errorkeys;i.isEmpty(t) || i.isEmpty(t.error) ? (l._raise("filebatchuploadsuccess", [n]), o(), l.showPreview ? (s.each(function () {
                    var i = e(this),
                        t = i.find(".kv-file-upload");i.find(".kv-file-upload").hide(), l._setThumbStatus(i, "Success"), i.removeClass("file-uploading"), t.removeAttr("disabled");
                }), l._initUploadSuccess(t)) : l.reset(), l._setProgress(101)) : (l.showPreview && (s.each(function () {
                    var i = e(this),
                        t = i.find(".kv-file-remove"),
                        a = i.find(".kv-file-upload");return i.removeClass("file-uploading"), a.removeAttr("disabled"), t.removeAttr("disabled"), 0 === c.length ? void l._setPreviewError(i) : (-1 !== e.inArray(d, c) ? l._setPreviewError(i) : (i.find(".kv-file-upload").hide(), l._setThumbStatus(i, "Success"), l.updateStack(d, void 0)), void d++);
                }), l._initUploadSuccess(t)), l._showUploadError(t.error, n, "filebatchuploaderror"));
            }, n = function n() {
                l.unlock(), l._initSuccessThumbs(), l._clearFileInput(), l._raise("filebatchuploadcomplete", [l.filestack, l._getExtraData()]);
            }, r = function r(i, t, a) {
                var r = l._getOutData(i),
                    n = l.ajaxOperations.uploadBatch,
                    o = l._parseError(n, i, a);l._showUploadError(o, r, "filebatchuploaderror"), l.uploadFileCount = d - 1, l.showPreview && (l._getThumbs().each(function () {
                    var i = e(this),
                        t = i.attr("data-fileindex");i.removeClass("file-uploading"), void 0 !== l.filestack[t] && l._setPreviewError(i);
                }), l._getThumbs().removeClass("file-uploading"), l._getThumbs(" .kv-file-upload").removeAttr("disabled"), l._getThumbs(" .kv-file-delete").removeAttr("disabled"), l._setProgress(101, l.$progress, l.msgAjaxProgressError.replace("{operation}", n)));
            }, e.each(s, function (e, t) {
                i.isEmpty(s[e]) || l.formdata.append(l.uploadFileAttr, t, l.filenames[e]);
            }), l._ajaxSubmit(t, a, n, r));
        }, _uploadExtraOnly: function _uploadExtraOnly() {
            var e,
                t,
                a,
                r,
                n = this,
                o = {};n.formdata = new FormData(), n._abort(o) || (e = function e(_e) {
                n.lock();var i = n._getOutData(_e);n._raise("filebatchpreupload", [i]), n._setProgress(50), o.data = i, o.xhr = _e, n._abort(o) && (_e.abort(), n._setProgressCancelled());
            }, t = function t(e, _t3, a) {
                var r = n._getOutData(a, e);i.isEmpty(e) || i.isEmpty(e.error) ? (n._raise("filebatchuploadsuccess", [r]), n._clearFileInput(), n._initUploadSuccess(e), n._setProgress(101)) : n._showUploadError(e.error, r, "filebatchuploaderror");
            }, a = function a() {
                n.unlock(), n._clearFileInput(), n._raise("filebatchuploadcomplete", [n.filestack, n._getExtraData()]);
            }, r = function r(e, i, t) {
                var a = n._getOutData(e),
                    r = n.ajaxOperations.uploadExtra,
                    l = n._parseError(r, e, t);o.data = a, n._showUploadError(l, a, "filebatchuploaderror"), n._setProgress(101, n.$progress, n.msgAjaxProgressError.replace("{operation}", r));
            }, n._ajaxSubmit(e, t, a, r));
        }, _deleteFileIndex: function _deleteFileIndex(t) {
            var a = this,
                r = t.attr("data-fileindex");"init_" === r.substring(0, 5) && (r = parseInt(r.replace("init_", "")), a.initialPreview = i.spliceArray(a.initialPreview, r), a.initialPreviewConfig = i.spliceArray(a.initialPreviewConfig, r), a.initialPreviewThumbTags = i.spliceArray(a.initialPreviewThumbTags, r), a.$preview.find(i.FRAMES).each(function () {
                var i = e(this),
                    t = i.attr("data-fileindex");"init_" === t.substring(0, 5) && (t = parseInt(t.replace("init_", "")), t > r && (t--, i.attr("data-fileindex", "init_" + t)));
            }), a.uploadAsync && (a.cacheInitialPreview = a.getPreview()));
        }, _initFileActions: function _initFileActions() {
            var t = this,
                a = t.$preview;t.showPreview && (t._initZoomButton(), a.find(i.FRAMES + " .kv-file-remove").each(function () {
                var r,
                    n,
                    o,
                    l,
                    s = e(this),
                    d = s.closest(i.FRAMES),
                    c = d.attr("id"),
                    p = d.attr("data-fileindex");t._handler(s, "click", function () {
                    return l = t._raise("filepreremove", [c, p]), l !== !1 && t._validateMinCount() ? (r = d.hasClass("file-preview-error"), i.cleanMemory(d), void d.fadeOut("slow", function () {
                        i.cleanZoomCache(a.find("#zoom-" + c)), t.updateStack(p, void 0), t._clearObjects(d), d.remove(), c && r && t.$errorContainer.find('li[data-file-id="' + c + '"]').fadeOut("fast", function () {
                            e(this).remove(), t._errorsExist() || t._resetErrors();
                        }), t._clearFileInput();var l = t.getFileStack(!0),
                            s = t.previewCache.count(),
                            u = l.length,
                            f = t.showPreview && a.find(i.FRAMES).length;0 !== u || 0 !== s || f ? (n = s + u, o = n > 1 ? t._getMsgSelected(n) : l[0] ? t._getFileNames()[0] : "", t._setCaption(o)) : t.reset(), t._raise("fileremoved", [c, p]);
                    })) : !1;
                });
            }), t.$preview.find(i.FRAMES + " .kv-file-upload").each(function () {
                var a = e(this);t._handler(a, "click", function () {
                    var e = a.closest(i.FRAMES),
                        r = e.attr("data-fileindex");e.hasClass("file-preview-error") || t._uploadSingle(r, t.filestack, !1);
                });
            }));
        }, _initPreviewActions: function _initPreviewActions() {
            var t = this,
                a = t.$preview,
                r = t.deleteExtraData || {},
                n = i.FRAMES + " .kv-file-remove",
                o = function o() {
                var e = t.isUploadable ? t.previewCache.count() : t.$element.get(0).files.length;0 !== a.find(n).length || e || (t.reset(), t.initialCaption = "");
            };t._initZoomButton(), a.find(n).each(function () {
                var n = e(this),
                    l = n.data("url") || t.deleteUrl,
                    s = n.data("key");if (!i.isEmpty(l) && void 0 !== s) {
                    var d,
                        c,
                        p,
                        u,
                        f = n.closest(i.FRAMES),
                        m = t.previewCache.data,
                        g = f.data("fileindex");g = parseInt(g.replace("init_", "")), p = i.isEmpty(m.config) && i.isEmpty(m.config[g]) ? null : m.config[g], u = i.isEmpty(p) || i.isEmpty(p.extra) ? r : p.extra, "function" == typeof u && (u = u()), c = { id: n.attr("id"), key: s, extra: u }, d = e.extend(!0, {}, { url: l, type: "POST", dataType: "json", data: e.extend(!0, {}, { key: s }, u), beforeSend: function beforeSend(e) {
                            t.ajaxAborted = !1, t._raise("filepredelete", [s, e, u]), t.ajaxAborted ? e.abort() : (i.addCss(f, "file-uploading"), i.addCss(n, "disabled"));
                        }, success: function success(e, r, l) {
                            var d, p;return i.isEmpty(e) || i.isEmpty(e.error) ? (t.previewCache.init(), g = parseInt(f.data("fileindex").replace("init_", "")), t.previewCache.unset(g), d = t.previewCache.count(), p = d > 0 ? t._getMsgSelected(d) : "", t._deleteFileIndex(f), t._setCaption(p), t._raise("filedeleted", [s, l, u]), f.removeClass("file-uploading").addClass("file-deleted"), void f.fadeOut("slow", function () {
                                i.cleanZoomCache(a.find("#zoom-" + f.attr("id"))), t._clearObjects(f), f.remove(), o(), d || 0 !== t.getFileStack().length || (t._setCaption(""), t.reset());
                            })) : (c.jqXHR = l, c.response = e, t._showError(e.error, c, "filedeleteerror"), f.removeClass("file-uploading"), n.removeClass("disabled"), void o());
                        }, error: function error(e, i, a) {
                            var r = t.ajaxOperations.deleteThumb,
                                n = t._parseError(r, e, a);c.jqXHR = e, c.response = {}, t._showError(n, c, "filedeleteerror"), f.removeClass("file-uploading"), o();
                        } }, t.ajaxDeleteSettings), t._handler(n, "click", function () {
                        return t._validateMinCount() ? void e.ajax(d) : !1;
                    });
                }
            });
        }, _hideFileIcon: function _hideFileIcon() {
            this.overwriteInitial && this.$captionContainer.find(".kv-caption-icon").hide();
        }, _showFileIcon: function _showFileIcon() {
            this.$captionContainer.find(".kv-caption-icon").show();
        }, _getSize: function _getSize(i) {
            var t,
                a,
                r,
                n = this,
                o = parseFloat(i),
                l = n.fileSizeGetter;return e.isNumeric(i) && e.isNumeric(o) ? ("function" == typeof l ? r = l(o) : 0 === o ? r = "0.00 B" : (t = Math.floor(Math.log(o) / Math.log(1024)), a = ["B", "KB", "MB", "GB", "TB", "PB", "EB", "ZB", "YB"], r = 1 * (o / Math.pow(1024, t)).toFixed(2) + " " + a[t]), n._getLayoutTemplate("size").replace("{sizeText}", r)) : "";
        }, _generatePreviewTemplate: function _generatePreviewTemplate(e, t, a, r, n, o, l, s, d, c, p) {
            var u,
                f = this,
                m = f.slug(a),
                g = "",
                v = f.previewSettings[e] || f.defaults.previewSettings[e],
                h = v && v.width ? v.width : "",
                w = v && v.height ? v.height : "",
                _ = d || f._renderFileFooter(m, l, i.isEmpty(h) ? "auto" : h, o),
                b = f._getPreviewIcon(a),
                C = b && f.preferIconicPreview,
                y = b && f.preferIconicZoomPreview,
                E = function E(t, o, l, d) {
                var u = l ? "zoom-" + n : n,
                    g = f._getPreviewTemplate(t),
                    v = (s || "") + " " + d;return f.frameClass && (v = f.frameClass + " " + v), l && (v = v.replace(" " + i.SORT_CSS, "")), g = f._parseFilePreviewIcon(g, a), "text" === t && (o = i.htmlEncode(o)), g.replace(/\{previewId}/g, u).replace(/\{caption}/g, m).replace(/\{frameClass}/g, v).replace(/\{type}/g, r).replace(/\{fileindex}/g, c).replace(/\{width}/g, h).replace(/\{height}/g, w).replace(/\{footer}/g, _).replace(/\{data}/g, o).replace(/\{template}/g, p || e);
            };return c = c || n.slice(n.lastIndexOf("-") + 1), f.fileActionSettings.showZoom && (g = E(y ? "other" : e, t, !0, "kv-zoom-thumb")), g = "\n" + f._getLayoutTemplate("zoomCache").replace("{zoomContent}", g), u = E(C ? "other" : e, t, !1, "kv-preview-thumb"), u + g;
        }, _previewDefault: function _previewDefault(t, a, r) {
            var n = this,
                o = n.$preview;if (n.showPreview) {
                var l,
                    s = t ? t.name : "",
                    d = t ? t.type : "",
                    c = t.size || 0,
                    p = n.slug(s),
                    u = r === !0 && !n.isUploadable,
                    f = i.objUrl.createObjectURL(t);n._clearDefaultPreview(), l = n._generatePreviewTemplate("other", f, s, d, a, u, c), o.append("\n" + l), n._setThumbAttr(a, p, c), r === !0 && n.isUploadable && n._setThumbStatus(e("#" + a), "Error");
            }
        }, _previewFile: function _previewFile(e, i, t, a, r) {
            if (this.showPreview) {
                var n,
                    o = this,
                    l = o._parseFileType(i),
                    s = i ? i.name : "",
                    d = o.slug(s),
                    c = o.allowedPreviewTypes,
                    p = o.allowedPreviewMimeTypes,
                    u = o.$preview,
                    f = c && c.indexOf(l) >= 0,
                    m = i.size || 0,
                    g = "text" === l || "html" === l || "image" === l ? t.target.result : r,
                    v = p && -1 !== p.indexOf(i.type);"html" === l && o.purifyHtml && window.DOMPurify && (g = window.DOMPurify.sanitize(g)), f || v ? (n = o._generatePreviewTemplate(l, g, s, i.type, a, !1, m), o._clearDefaultPreview(), u.append("\n" + n), o._validateImage(a, d, i.type, i.size)) : o._previewDefault(i, a), o._setThumbAttr(a, d, m), o._initSortable();
            }
        }, _setThumbAttr: function _setThumbAttr(i, t, a) {
            var r = this,
                n = e("#" + i);n.length && (a = a && a > 0 ? r._getSize(a) : "", n.data({ caption: t, size: a }));
        }, _setInitThumbAttr: function _setInitThumbAttr() {
            var e,
                t,
                a,
                r,
                n = this,
                o = n.previewCache.data,
                l = n.previewCache.count(!0);if (0 !== l) for (var s = 0; l > s; s++) {
                e = o.config[s], r = n.previewInitId + "-init_" + s, t = i.ifSet("caption", e, i.ifSet("filename", e)), a = i.ifSet("size", e), n._setThumbAttr(r, t, a);
            }
        }, _slugDefault: function _slugDefault(e) {
            return i.isEmpty(e) ? "" : String(e).replace(/[\-\[\]\/\{}:;#%=\(\)\*\+\?\\\^\$\|<>&"']/g, "_");
        }, _readFiles: function _readFiles(t) {
            this.reader = new FileReader();var _a4,
                r = this,
                n = r.$element,
                o = r.$preview,
                l = r.reader,
                s = r.$previewContainer,
                d = r.$previewStatus,
                c = r.msgLoading,
                p = r.msgProgress,
                u = r.previewInitId,
                f = t.length,
                m = r.fileTypeSettings,
                g = r.filestack.length,
                v = r.allowedFileTypes,
                h = v ? v.length : 0,
                w = r.allowedFileExtensions,
                _ = i.isEmpty(w) ? "" : w.join(", "),
                b = r.maxFilePreviewSize && parseFloat(r.maxFilePreviewSize),
                C = o.length && (!b || isNaN(b)),
                y = function y(i, n, o, l) {
                var s = e.extend(!0, {}, r._getOutData({}, {}, t), { id: o, index: l }),
                    d = { id: o, index: l, file: n, files: t };return r._previewDefault(n, o, !0), r.isUploadable && (r.addToStack(void 0), setTimeout(function () {
                    _a4(l + 1);
                }, 100)), r._initFileActions(), r.removeFromPreviewOnError && e("#" + o).remove(), r.isUploadable ? r._showUploadError(i, s) : r._showError(i, d);
            };r.loadedImages = [], r.totalImagesCount = 0, e.each(t, function (e, i) {
                var t = r.fileTypeSettings.image;t && t(i.type) && r.totalImagesCount++;
            }), _a4 = function a(e) {
                if (i.isEmpty(n.attr("multiple")) && (f = 1), e >= f) return r.isUploadable && r.filestack.length > 0 ? r._raise("filebatchselected", [r.getFileStack()]) : r._raise("filebatchselected", [t]), s.removeClass("file-thumb-loading"), void d.html("");var E,
                    x,
                    T,
                    S,
                    F,
                    I,
                    P,
                    k,
                    z,
                    A,
                    $ = g + e,
                    D = u + "-" + $,
                    U = t[e],
                    j = U.name ? r.slug(U.name) : "",
                    R = (U.size || 0) / 1e3,
                    M = "",
                    L = i.objUrl.createObjectURL(U),
                    Z = 0,
                    O = "";if (h > 0) for (S = 0; h > S; S++) {
                    k = v[S], z = r.msgFileTypes[k] || k, O += 0 === S ? z : ", " + z;
                }if (j === !1) return void _a4(e + 1);if (0 === j.length) return F = r.msgInvalidFileName.replace("{name}", i.htmlEncode(U.name)), void (r.isError = y(F, U, D, e));if (i.isEmpty(w) || (M = new RegExp("\\.(" + w.join("|") + ")$", "i")), T = R.toFixed(2), r.maxFileSize > 0 && R > r.maxFileSize) return F = r.msgSizeTooLarge.replace("{name}", j).replace("{size}", T).replace("{maxSize}", r.maxFileSize), void (r.isError = y(F, U, D, e));if (null !== r.minFileSize && R <= i.getNum(r.minFileSize)) return F = r.msgSizeTooSmall.replace("{name}", j).replace("{size}", T).replace("{minSize}", r.minFileSize), void (r.isError = y(F, U, D, e));if (!i.isEmpty(v) && i.isArray(v)) {
                    for (S = 0; S < v.length; S += 1) {
                        I = v[S], A = m[I], Z += A && "function" == typeof A && A(U.type, U.name) ? 1 : 0;
                    }if (0 === Z) return F = r.msgInvalidFileType.replace("{name}", j).replace("{types}", O), void (r.isError = y(F, U, D, e));
                }return 0 !== Z || i.isEmpty(w) || !i.isArray(w) || i.isEmpty(M) || (P = i.compare(j, M), Z += i.isEmpty(P) ? 0 : P.length, 0 !== Z) ? r.showPreview ? !C && R > b ? (r.addToStack(U), s.addClass("file-thumb-loading"), r._previewDefault(U, D), r._initFileActions(), r._updateFileDetails(f), void _a4(e + 1)) : (o.length && void 0 !== FileReader ? (d.html(c.replace("{index}", e + 1).replace("{files}", f)), s.addClass("file-thumb-loading"), l.onerror = function (e) {
                    r._errorHandler(e, j);
                }, l.onload = function (i) {
                    r._previewFile(e, U, i, D, L), r._initFileActions();
                }, l.onloadend = function () {
                    F = p.replace("{index}", e + 1).replace("{files}", f).replace("{percent}", 50).replace("{name}", j), setTimeout(function () {
                        d.html(F), r._updateFileDetails(f), _a4(e + 1);
                    }, 100), r._raise("fileloaded", [U, D, e, l]);
                }, l.onprogress = function (i) {
                    if (i.lengthComputable) {
                        var t = i.loaded / i.total * 100,
                            a = Math.ceil(t);F = p.replace("{index}", e + 1).replace("{files}", f).replace("{percent}", a).replace("{name}", j), setTimeout(function () {
                            d.html(F);
                        }, 100);
                    }
                }, E = m.text, x = m.image, E(U.type, j) ? l.readAsText(U, r.textEncoding) : x(U.type, j) ? l.readAsDataURL(U) : l.readAsArrayBuffer(U)) : (r._previewDefault(U, D), setTimeout(function () {
                    _a4(e + 1), r._updateFileDetails(f);
                }, 100), r._raise("fileloaded", [U, D, e, l])), void r.addToStack(U)) : (r.addToStack(U), setTimeout(function () {
                    _a4(e + 1);
                }, 100), void r._raise("fileloaded", [U, D, e, l])) : (F = r.msgInvalidFileExtension.replace("{name}", j).replace("{extensions}", _), void (r.isError = y(F, U, D, e)));
            }, _a4(0), r._updateFileDetails(f, !1);
        }, _updateFileDetails: function _updateFileDetails(e) {
            var t = this,
                a = t.$element,
                r = t.getFileStack(),
                n = i.isIE(9) && i.findFileName(a.val()) || a[0].files[0] && a[0].files[0].name || r.length && r[0].name || "",
                o = t.slug(n),
                l = t.isUploadable ? r.length : e,
                s = t.previewCache.count() + l,
                d = l > 1 ? t._getMsgSelected(s) : o;t.isError ? (t.$previewContainer.removeClass("file-thumb-loading"), t.$previewStatus.html(""), t.$captionContainer.find(".kv-caption-icon").hide()) : t._showFileIcon(), t._setCaption(d, t.isError), t.$container.removeClass("file-input-new file-input-ajax-new"), 1 === arguments.length && t._raise("fileselect", [e, o]), t.previewCache.count() && t._initPreviewActions();
        }, _setThumbStatus: function _setThumbStatus(e, i) {
            var t = this;if (t.showPreview) {
                var a = "indicator" + i,
                    r = a + "Title",
                    n = "file-preview-" + i.toLowerCase(),
                    o = e.find(".file-upload-indicator"),
                    l = t.fileActionSettings;e.removeClass("file-preview-success file-preview-error file-preview-loading"), "Error" === i && e.find(".kv-file-upload").attr("disabled", !0), "Success" === i && (e.find(".file-drag-handle").remove(), o.css("margin-left", 0)), o.html(l[a]), o.attr("title", l[r]), e.addClass(n);
            }
        }, _setProgressCancelled: function _setProgressCancelled() {
            var e = this;e._setProgress(101, e.$progress, e.msgCancelled);
        }, _setProgress: function _setProgress(e, t, a) {
            var r,
                n,
                o = this,
                l = Math.min(e, 100),
                s = o.progressUploadThreshold,
                d = 100 >= e ? o.progressTemplate : o.progressCompleteTemplate,
                c = 100 > l ? o.progressTemplate : a ? o.progressErrorTemplate : d;t = t || o.$progress, i.isEmpty(c) || (s && l > s && 100 >= e ? r = c.replace(/\{percent}/g, s).replace(/\{status}/g, o.msgUploadThreshold) : (n = e > 100 ? o.msgUploadEnd : l + "%", r = c.replace(/\{percent}/g, l).replace(/\{status}/g, n)), t.html(r), a && t.find('[role="progressbar"]').html(a));
        }, _setFileDropZoneTitle: function _setFileDropZoneTitle() {
            var e,
                t = this,
                a = t.$container.find(".file-drop-zone"),
                r = t.dropZoneTitle;t.isClickable && (e = i.isEmpty(t.$element.attr("multiple")) ? t.fileSingle : t.filePlural, r += t.dropZoneClickTitle.replace("{files}", e)), a.find("." + t.dropZoneTitleClass).remove(), t.isUploadable && t.showPreview && 0 !== a.length && !(t.getFileStack().length > 0) && t.dropZoneEnabled && (0 === a.find(i.FRAMES).length && i.isEmpty(t.defaultPreviewContent) && a.prepend('<div class="' + t.dropZoneTitleClass + '">' + r + "</div>"), t.$container.removeClass("file-input-new"), i.addCss(t.$container, "file-input-ajax-new"));
        }, _setAsyncUploadStatus: function _setAsyncUploadStatus(i, t, a) {
            var r = this,
                n = 0;r._setProgress(t, e("#" + i).find(".file-thumb-progress")), r.uploadStatus[i] = t, e.each(r.uploadStatus, function (e, i) {
                n += i;
            }), r._setProgress(Math.floor(n / a));
        }, _validateMinCount: function _validateMinCount() {
            var e = this,
                i = e.isUploadable ? e.getFileStack().length : e.$element.get(0).files.length;return e.validateInitialCount && e.minFileCount > 0 && e._getFileCount(i - 1) < e.minFileCount ? (e._noFilesError({}), !1) : !0;
        }, _getFileCount: function _getFileCount(e) {
            var i = this,
                t = 0;return i.validateInitialCount && !i.overwriteInitial && (t = i.previewCache.count(), e += t), e;
        }, _getFileId: function _getFileId(e) {
            var i,
                t = this,
                a = t.generateFileId;return "function" == typeof a ? a(e, event) : e ? (i = e.webkitRelativePath || e.fileName || e.name || null, i ? e.size + "-" + i.replace(/[^0-9a-zA-Z_-]/gim, "") : null) : null;
        }, _getFileName: function _getFileName(e) {
            return e && e.name ? this.slug(e.name) : void 0;
        }, _getFileIds: function _getFileIds(e) {
            var i = this;return i.fileids.filter(function (i) {
                return e ? void 0 !== i : void 0 !== i && null !== i;
            });
        }, _getFileNames: function _getFileNames(e) {
            var i = this;return i.filenames.filter(function (i) {
                return e ? void 0 !== i : void 0 !== i && null !== i;
            });
        }, _setPreviewError: function _setPreviewError(e, i, t) {
            var a = this;void 0 !== i && a.updateStack(i, t), a.removeFromPreviewOnError ? e.remove() : a._setThumbStatus(e, "Error");
        }, _checkDimensions: function _checkDimensions(e, t, a, r, n, o, l) {
            var s,
                d,
                c,
                p,
                u = this,
                f = "Small" === t ? "min" : "max",
                m = u[f + "Image" + o];!i.isEmpty(m) && a.length && (c = a[0], d = "Width" === o ? c.naturalWidth || c.width : c.naturalHeight || c.height, p = "Small" === t ? d >= m : m >= d, p || (s = u["msgImage" + o + t].replace("{name}", n).replace("{size}", m), u._showUploadError(s, l), u._setPreviewError(r, e, null)));
        }, _validateImage: function _validateImage(e, i, t, a) {
            var r,
                n,
                o,
                l = this,
                s = l.$preview,
                d = s.find("#" + e),
                c = d.attr("data-fileindex"),
                p = d.find("img");i = i || "Untitled", p.length && l._handler(p, "load", function () {
                n = d.width(), o = s.width(), n > o && (p.css("width", "100%"), d.css("width", "97%")), r = { ind: c, id: e }, l._checkDimensions(c, "Small", p, d, i, "Width", r), l._checkDimensions(c, "Small", p, d, i, "Height", r), l.resizeImage || (l._checkDimensions(c, "Large", p, d, i, "Width", r), l._checkDimensions(c, "Large", p, d, i, "Height", r)), l._raise("fileimageloaded", [e]), l.loadedImages.push({ ind: c, img: p, thumb: d, pid: e, typ: t, siz: a, validated: !1 }), l._validateAllImages();
            });
        }, _validateAllImages: function _validateAllImages() {
            var e,
                i,
                t,
                a = this,
                r = { val: 0 },
                n = a.loadedImages.length,
                o = a.resizeIfSizeMoreThan;if (n === a.totalImagesCount && (a._raise("fileimagesloaded"), a.resizeImage)) for (e = 0; e < a.loadedImages.length; e++) {
                i = a.loadedImages[e], i.validated || (t = i.siz, t && o && t > 1e3 * o && a._getResizedImage(i, r, n), a.loadedImages[e].validated = !0);
            }
        }, _getResizedImage: function _getResizedImage(i, t, a) {
            var r,
                n,
                o,
                l,
                s = this,
                d = e(i.img)[0],
                c = d.naturalWidth,
                p = d.naturalHeight,
                u = 1,
                f = s.maxImageWidth || c,
                m = s.maxImageHeight || p,
                g = !(!c || !p),
                v = s.imageCanvas,
                h = s.imageCanvasContext,
                w = i.typ,
                _ = i.pid,
                b = i.ind,
                C = i.thumb;if (o = function o(e, i, t) {
                s.isUploadable ? s._showUploadError(e, i, t) : s._showError(e, i, t), s._setPreviewError(C, b);
            }, (!s.filestack[b] || !g || f >= c && m >= p) && (g && s.filestack[b] && s._raise("fileimageresized", [_, b]), t.val++, t.val === a && s._raise("fileimagesresized"), !g)) return void o(s.msgImageResizeError, { id: _, index: b }, "fileimageresizeerror");w = w || s.resizeDefaultImageType, r = c > f, n = p > m, u = "width" === s.resizePreference ? r ? f / c : n ? m / p : 1 : n ? m / p : r ? f / c : 1, s._resetCanvas(), c *= u, p *= u, v.width = c, v.height = p;try {
                h.drawImage(d, 0, 0, c, p), v.toBlob(function (e) {
                    s.filestack[b] = e, s._raise("fileimageresized", [_, b]), t.val++, t.val === a && s._raise("fileimagesresized", [void 0, void 0]), e instanceof Blob || o(s.msgImageResizeError, { id: _, index: b }, "fileimageresizeerror");
                }, w, s.resizeQuality);
            } catch (y) {
                t.val++, t.val === a && s._raise("fileimagesresized", [void 0, void 0]), l = s.msgImageResizeException.replace("{errors}", y.message), o(l, { id: _, index: b }, "fileimageresizeexception");
            }
        }, _initBrowse: function _initBrowse(e) {
            var i = this;i.showBrowse ? (i.$btnFile = e.find(".btn-file"), i.$btnFile.append(i.$element)) : i.$element.hide();
        }, _initCaption: function _initCaption() {
            var e = this,
                t = e.initialCaption || "";return e.overwriteInitial || i.isEmpty(t) ? (e.$caption.html(""), !1) : (e._setCaption(t), !0);
        }, _setCaption: function _setCaption(t, a) {
            var r,
                n,
                o,
                l,
                s = this,
                d = s.getFileStack();if (s.$caption.length) {
                if (a) r = e("<div>" + s.msgValidationError + "</div>").text(), o = d.length, l = o ? 1 === o && d[0] ? s._getFileNames()[0] : s._getMsgSelected(o) : s._getMsgSelected(s.msgNo), n = '<span class="' + s.msgValidationErrorClass + '">' + s.msgValidationErrorIcon + (i.isEmpty(t) ? l : t) + "</span>";else {
                    if (i.isEmpty(t)) return;r = e("<div>" + t + "</div>").text(), n = s._getLayoutTemplate("fileIcon") + r;
                }s.$caption.html(n), s.$caption.attr("title", r), s.$captionContainer.find(".file-caption-ellipsis").attr("title", r);
            }
        }, _createContainer: function _createContainer() {
            var i = this,
                t = e(document.createElement("div")).attr({ "class": "file-input file-input-new" }).html(i._renderMain());return i.$element.before(t), i._initBrowse(t), i.theme && t.addClass("theme-" + i.theme), t;
        }, _refreshContainer: function _refreshContainer() {
            var e = this,
                i = e.$container;i.before(e.$element), i.html(e._renderMain()), e._initBrowse(i);
        }, _renderMain: function _renderMain() {
            var e = this,
                i = e.isUploadable && e.dropZoneEnabled ? " file-drop-zone" : "file-drop-disabled",
                t = e.showClose ? e._getLayoutTemplate("close") : "",
                a = e.showPreview ? e._getLayoutTemplate("preview").replace(/\{class}/g, e.previewClass).replace(/\{dropClass}/g, i) : "",
                r = e.isDisabled ? e.captionClass + " file-caption-disabled" : e.captionClass,
                n = e.captionTemplate.replace(/\{class}/g, r + " kv-fileinput-caption");return e.mainTemplate.replace(/\{class}/g, e.mainClass + (!e.showBrowse && e.showCaption ? " no-browse" : "")).replace(/\{preview}/g, a).replace(/\{close}/g, t).replace(/\{caption}/g, n).replace(/\{upload}/g, e._renderButton("upload")).replace(/\{remove}/g, e._renderButton("remove")).replace(/\{cancel}/g, e._renderButton("cancel")).replace(/\{browse}/g, e._renderButton("browse"));
        }, _renderButton: function _renderButton(e) {
            var t = this,
                a = t._getLayoutTemplate("btnDefault"),
                r = t[e + "Class"],
                n = t[e + "Title"],
                o = t[e + "Icon"],
                l = t[e + "Label"],
                s = t.isDisabled ? " disabled" : "",
                d = "button";switch (e) {case "remove":
                    if (!t.showRemove) return "";break;case "cancel":
                    if (!t.showCancel) return "";r += " hide";break;case "upload":
                    if (!t.showUpload) return "";t.isUploadable && !t.isDisabled ? a = t._getLayoutTemplate("btnLink").replace("{href}", t.uploadUrl) : d = "submit";break;case "browse":
                    if (!t.showBrowse) return "";a = t._getLayoutTemplate("btnBrowse");break;default:
                    return "";}return r += "browse" === e ? " btn-file" : " fileinput-" + e + " fileinput-" + e + "-button", i.isEmpty(l) || (l = ' <span class="' + t.buttonLabelClass + '">' + l + "</span>"), a.replace("{type}", d).replace("{css}", r).replace("{title}", n).replace("{status}", s).replace("{icon}", o).replace("{label}", l);
        }, _renderThumbProgress: function _renderThumbProgress() {
            var e = this;return '<div class="file-thumb-progress hide">' + e.progressTemplate.replace(/\{percent}/g, "0").replace(/\{status}/g, e.msgUploadBegin) + "</div>";
        }, _renderFileFooter: function _renderFileFooter(e, t, a, r) {
            var n,
                o = this,
                l = o.fileActionSettings,
                s = l.showRemove,
                d = l.showDrag,
                c = l.showUpload,
                p = l.showZoom,
                u = o._getLayoutTemplate("footer"),
                f = r ? l.indicatorError : l.indicatorNew,
                m = r ? l.indicatorErrorTitle : l.indicatorNewTitle;return t = o._getSize(t), n = o.isUploadable ? u.replace(/\{actions}/g, o._renderFileActions(c, s, p, d, !1, !1, !1)).replace(/\{caption}/g, e).replace(/\{size}/g, t).replace(/\{width}/g, a).replace(/\{progress}/g, o._renderThumbProgress()).replace(/\{indicator}/g, f).replace(/\{indicatorTitle}/g, m) : u.replace(/\{actions}/g, o._renderFileActions(!1, !1, p, d, !1, !1, !1)).replace(/\{caption}/g, e).replace(/\{size}/g, t).replace(/\{width}/g, a).replace(/\{progress}/g, "").replace(/\{indicator}/g, f).replace(/\{indicatorTitle}/g, m), n = i.replaceTags(n, o.previewThumbTags);
        }, _renderFileActions: function _renderFileActions(e, i, t, a, r, n, o, l) {
            if (!(e || i || t || a)) return "";var s,
                d = this,
                c = n === !1 ? "" : ' data-url="' + n + '"',
                p = o === !1 ? "" : ' data-key="' + o + '"',
                u = "",
                f = "",
                m = "",
                g = "",
                v = d._getLayoutTemplate("actions"),
                h = d.fileActionSettings,
                w = d.otherActionButtons.replace(/\{dataKey}/g, p),
                _ = r ? h.removeClass + " disabled" : h.removeClass;return i && (u = d._getLayoutTemplate("actionDelete").replace(/\{removeClass}/g, _).replace(/\{removeIcon}/g, h.removeIcon).replace(/\{removeTitle}/g, h.removeTitle).replace(/\{dataUrl}/g, c).replace(/\{dataKey}/g, p)), e && (f = d._getLayoutTemplate("actionUpload").replace(/\{uploadClass}/g, h.uploadClass).replace(/\{uploadIcon}/g, h.uploadIcon).replace(/\{uploadTitle}/g, h.uploadTitle)), t && (m = d._getLayoutTemplate("actionZoom").replace(/\{zoomClass}/g, h.zoomClass).replace(/\{zoomIcon}/g, h.zoomIcon).replace(/\{zoomTitle}/g, h.zoomTitle)), a && l && (s = "drag-handle-init " + h.dragClass, g = d._getLayoutTemplate("actionDrag").replace(/\{dragClass}/g, s).replace(/\{dragTitle}/g, h.dragTitle).replace(/\{dragIcon}/g, h.dragIcon)), v.replace(/\{delete}/g, u).replace(/\{upload}/g, f).replace(/\{zoom}/g, m).replace(/\{drag}/g, g).replace(/\{other}/g, w);
        }, _browse: function _browse(e) {
            var i = this;i._raise("filebrowse"), e && e.isDefaultPrevented() || (i.isError && !i.isUploadable && i.clear(), i.$captionContainer.focus());
        }, _filterDuplicate: function _filterDuplicate(e, i, t) {
            var a = this,
                r = a._getFileId(e);r && t && t.indexOf(r) > -1 || (t || (t = []), i.push(e), t.push(r));
        }, _change: function _change(t) {
            var a = this,
                r = a.$element;if (!a.isUploadable && i.isEmpty(r.val()) && a.fileInputCleared) return void (a.fileInputCleared = !1);a.fileInputCleared = !1;var n,
                o,
                l,
                s,
                d = [],
                c = arguments.length > 1,
                p = a.isUploadable,
                u = c ? t.originalEvent.dataTransfer.files : r.get(0).files,
                f = a.filestack.length,
                m = i.isEmpty(r.attr("multiple")),
                g = m && f > 0,
                v = 0,
                h = a._getFileIds(),
                w = function w(i, t, r, n) {
                var o = e.extend(!0, {}, a._getOutData({}, {}, u), { id: r, index: n }),
                    l = { id: r, index: n, file: t, files: u };return a.isUploadable ? a._showUploadError(i, o) : a._showError(i, l);
            };if (a.reader = null, a._resetUpload(), a._hideFileIcon(), a.isUploadable && a.$container.find(".file-drop-zone ." + a.dropZoneTitleClass).remove(), c ? e.each(u, function (e, i) {
                i && !i.type && void 0 !== i.size && i.size % 4096 === 0 ? v++ : a._filterDuplicate(i, d, h);
            }) : (u = t.target && void 0 === t.target.files ? t.target.value ? [{ name: t.target.value.replace(/^.+\\/, "") }] : [] : t.target.files || {}, e.each(u, function (e, i) {
                a._filterDuplicate(i, d, h);
            })), i.isEmpty(d) || 0 === d.length) return p || a.clear(), a._showFolderError(v), void a._raise("fileselectnone");if (a._resetErrors(), s = d.length, o = a._getFileCount(a.isUploadable ? a.getFileStack().length + s : s), a.maxFileCount > 0 && o > a.maxFileCount) {
                if (!a.autoReplace || s > a.maxFileCount) return l = a.autoReplace && s > a.maxFileCount ? s : o, n = a.msgFilesTooMany.replace("{m}", a.maxFileCount).replace("{n}", l), a.isError = w(n, null, null, null), a.$captionContainer.find(".kv-caption-icon").hide(), a._setCaption("", !0), void a.$container.removeClass("file-input-new file-input-ajax-new");o > a.maxFileCount && a._resetPreviewThumbs(p);
            } else !p || g ? (a._resetPreviewThumbs(!1), g && a.clearStack()) : !p || 0 !== f || a.previewCache.count() && !a.overwriteInitial || a._resetPreviewThumbs(!0);a.isPreviewable ? a._readFiles(d) : a._updateFileDetails(1), a._showFolderError(v);
        }, _abort: function _abort(i) {
            var t,
                a = this;return a.ajaxAborted && "object" == _typeof(a.ajaxAborted) && void 0 !== a.ajaxAborted.message ? (t = e.extend(!0, {}, a._getOutData(), i), t.abortData = a.ajaxAborted.data || {}, t.abortMessage = a.ajaxAborted.message, a.cancel(), a._setProgress(101, a.$progress, a.msgCancelled), a._showUploadError(a.ajaxAborted.message, t, "filecustomerror"), !0) : !1;
        }, _resetFileStack: function _resetFileStack() {
            var t = this,
                a = 0,
                r = [],
                n = [],
                o = [];t._getThumbs().each(function () {
                var l,
                    s = e(this),
                    d = s.attr("data-fileindex"),
                    c = t.filestack[d],
                    p = s.attr("id");"-1" !== d && -1 !== d && (void 0 !== c ? (r[a] = c, n[a] = t._getFileName(c), o[a] = t._getFileId(c), s.attr({ id: t.previewInitId + "-" + a, "data-fileindex": a }), a++) : (l = "uploaded-" + i.uniqId(), s.attr({ id: l, "data-fileindex": "-1" }), t.$preview.find("#zoom-" + p).attr("id", "zoom-" + l)));
            }), t.filestack = r, t.filenames = n, t.fileids = o;
        }, clearStack: function clearStack() {
            var e = this;return e.filestack = [], e.filenames = [], e.fileids = [], e.$element;
        }, updateStack: function updateStack(e, i) {
            var t = this;return t.filestack[e] = i, t.filenames[e] = t._getFileName(i), t.fileids[e] = i && t._getFileId(i) || null, t.$element;
        }, addToStack: function addToStack(e) {
            var i = this;return i.filestack.push(e), i.filenames.push(i._getFileName(e)), i.fileids.push(i._getFileId(e)), i.$element;
        }, getFileStack: function getFileStack(e) {
            var i = this;return i.filestack.filter(function (i) {
                return e ? void 0 !== i : void 0 !== i && null !== i;
            });
        }, getFilesCount: function getFilesCount() {
            var e = this,
                i = e.isUploadable ? e.getFileStack().length : e.$element.get(0).files.length;return e._getFileCount(i);
        }, lock: function lock() {
            var e = this;return e._resetErrors(), e.disable(), e.showRemove && i.addCss(e.$container.find(".fileinput-remove"), "hide"), e.showCancel && e.$container.find(".fileinput-cancel").removeClass("hide"), e._raise("filelock", [e.filestack, e._getExtraData()]), e.$element;
        }, unlock: function unlock(e) {
            var t = this;return void 0 === e && (e = !0), t.enable(), t.showCancel && i.addCss(t.$container.find(".fileinput-cancel"), "hide"), t.showRemove && t.$container.find(".fileinput-remove").removeClass("hide"), e && t._resetFileStack(), t._raise("fileunlock", [t.filestack, t._getExtraData()]), t.$element;
        }, cancel: function cancel() {
            var i,
                t = this,
                a = t.ajaxRequests,
                r = a.length;if (r > 0) for (i = 0; r > i; i += 1) {
                t.cancelling = !0, a[i].abort();
            }return t._setProgressCancelled(), t._getThumbs().each(function () {
                var i = e(this),
                    a = i.attr("data-fileindex");i.removeClass("file-uploading"), void 0 !== t.filestack[a] && (i.find(".kv-file-upload").removeClass("disabled").removeAttr("disabled"), i.find(".kv-file-remove").removeClass("disabled").removeAttr("disabled")), t.unlock();
            }), t.$element;
        }, clear: function clear() {
            var t,
                a = this;if (a._raise("fileclear")) return a.$btnUpload.removeAttr("disabled"), a._getThumbs().find("video,audio,img").each(function () {
                i.cleanMemory(e(this));
            }), a._resetUpload(), a.clearStack(), a._clearFileInput(), a._resetErrors(!0), a._hasInitialPreview() ? (a._showFileIcon(), a._resetPreview(), a._initPreviewActions(), a.$container.removeClass("file-input-new")) : (a._getThumbs().each(function () {
                a._clearObjects(e(this));
            }), a.isUploadable && (a.previewCache.data = {}), a.$preview.html(""), t = !a.overwriteInitial && a.initialCaption.length > 0 ? a.initialCaption : "", a.$caption.html(t), a.$caption.attr("title", ""), i.addCss(a.$container, "file-input-new"), a._validateDefaultPreview()), 0 === a.$container.find(i.FRAMES).length && (a._initCaption() || a.$captionContainer.find(".kv-caption-icon").hide()), a._hideFileIcon(), a._raise("filecleared"), a.$captionContainer.focus(), a._setFileDropZoneTitle(), a.$element;
        }, reset: function reset() {
            var e = this;if (e._raise("filereset")) return e._resetPreview(), e.$container.find(".fileinput-filename").text(""), i.addCss(e.$container, "file-input-new"), (e.$preview.find(i.FRAMES).length || e.isUploadable && e.dropZoneEnabled) && e.$container.removeClass("file-input-new"), e._setFileDropZoneTitle(), e.clearStack(), e.formdata = {}, e.$element;
        }, disable: function disable() {
            var e = this;return e.isDisabled = !0, e._raise("filedisabled"), e.$element.attr("disabled", "disabled"), e.$container.find(".kv-fileinput-caption").addClass("file-caption-disabled"), e.$container.find(".btn-file, .fileinput-remove, .fileinput-upload, .file-preview-frame button").attr("disabled", !0), e._initDragDrop(), e.$element;
        }, enable: function enable() {
            var e = this;return e.isDisabled = !1, e._raise("fileenabled"), e.$element.removeAttr("disabled"), e.$container.find(".kv-fileinput-caption").removeClass("file-caption-disabled"), e.$container.find(".btn-file, .fileinput-remove, .fileinput-upload, .file-preview-frame button").removeAttr("disabled"), e._initDragDrop(), e.$element;
        }, upload: function upload() {
            var t,
                a,
                r,
                n = this,
                o = n.getFileStack().length,
                l = {},
                s = !e.isEmptyObject(n._getExtraData());if (n.isUploadable && !n.isDisabled) {
                if (n.minFileCount > 0 && n._getFileCount(o) < n.minFileCount) return void n._noFilesError(l);if (n._resetUpload(), 0 === o && !s) return void n._showUploadError(n.msgUploadEmpty);if (n.$progress.removeClass("hide"), n.uploadCount = 0, n.uploadStatus = {}, n.uploadLog = [], n.lock(), n._setProgress(2), 0 === o && s) return void n._uploadExtraOnly();if (r = n.filestack.length, n.hasInitData = !1, !n.uploadAsync) return n._uploadBatch(), n.$element;for (a = n._getOutData(), n._raise("filebatchpreupload", [a]), n.fileBatchCompleted = !1, n.uploadCache = { content: [], config: [], tags: [], append: !0 }, n.uploadAsyncCount = n.getFileStack().length, t = 0; r > t; t++) {
                    n.uploadCache.content[t] = null, n.uploadCache.config[t] = null, n.uploadCache.tags[t] = null;
                }for (n.$preview.find(".file-preview-initial").removeClass(i.SORT_CSS), n._initSortable(), n.cacheInitialPreview = n.getPreview(), t = 0; r > t; t++) {
                    void 0 !== n.filestack[t] && n._uploadSingle(t, n.filestack, !0);
                }
            }
        }, destroy: function destroy() {
            var i = this,
                t = i.$form,
                a = i.$container,
                r = i.$element,
                n = i.namespace;return e(document).off(n), e(window).off(n), t && t.length && t.off(n), r.insertBefore(a).off(n).removeData(), a.off().remove(), r;
        }, refresh: function refresh(i) {
            var t = this,
                a = t.$element;return i = i ? e.extend(!0, {}, t.options, i) : t.options, t.destroy(), a.fileinput(i), a.val() && a.trigger("change.fileinput"), a;
        }, zoom: function zoom(t) {
            var a = this,
                r = e("#" + t),
                n = a.$modal;return r.length ? (i.initModal(n), n.html(a._getModalContent()), a._setZoomContent(r), n.modal("show"), void a._initZoomButtons()) : void a._log('Cannot zoom to detailed preview! Invalid frame with id: "' + t + '".');
        }, getPreview: function getPreview() {
            var e = this;return { content: e.initialPreview, config: e.initialPreviewConfig, tags: e.initialPreviewThumbTags };
        } }, e.fn.fileinput = function (a) {
        if (i.hasFileAPISupport() || i.isIE(9)) {
            var r = Array.apply(null, arguments),
                n = [];switch (r.shift(), this.each(function () {
                var o,
                    l = e(this),
                    s = l.data("fileinput"),
                    d = "object" == (typeof a === "undefined" ? "undefined" : _typeof(a)) && a,
                    c = d.theme || l.data("theme"),
                    p = {},
                    u = {},
                    f = d.language || l.data("language") || e.fn.fileinput.defaults.language || "en";s || (c && (u = e.fn.fileinputThemes[c] || {}), "en" === f || i.isEmpty(e.fn.fileinputLocales[f]) || (p = e.fn.fileinputLocales[f] || {}), o = e.extend(!0, {}, e.fn.fileinput.defaults, u, e.fn.fileinputLocales.en, p, d, l.data()), s = new t(this, o), l.data("fileinput", s)), "string" == typeof a && n.push(s[a].apply(s, r));
            }), n.length) {case 0:
                    return this;case 1:
                    return n[0];default:
                    return n;}
        }
    }, e.fn.fileinput.defaults = { language: "en", showCaption: !0, showBrowse: !0, showPreview: !0, showRemove: !0, showUpload: !0, showCancel: !0, showClose: !0, showUploadedThumbs: !0, browseOnZoneClick: !1, autoReplace: !1, generateFileId: null, previewClass: "", captionClass: "", frameClass: "krajee-default", mainClass: "file-caption-main", mainTemplate: null, purifyHtml: !0, fileSizeGetter: null, initialCaption: "", initialPreview: [], initialPreviewDelimiter: "*$$*", initialPreviewAsData: !1, initialPreviewFileType: "image", initialPreviewConfig: [], initialPreviewThumbTags: [], previewThumbTags: {}, initialPreviewShowDelete: !0, removeFromPreviewOnError: !1, deleteUrl: "", deleteExtraData: {}, overwriteInitial: !0, previewZoomButtonIcons: { prev: '<i class="glyphicon glyphicon-triangle-left"></i>', next: '<i class="glyphicon glyphicon-triangle-right"></i>', toggleheader: '<i class="glyphicon glyphicon-resize-vertical"></i>', fullscreen: '<i class="glyphicon glyphicon-fullscreen"></i>', borderless: '<i class="glyphicon glyphicon-resize-full"></i>', close: '<i class="glyphicon glyphicon-remove"></i>' }, previewZoomButtonClasses: { prev: "btn btn-navigate", next: "btn btn-navigate", toggleheader: "btn btn-default btn-header-toggle", fullscreen: "btn btn-default", borderless: "btn btn-default", close: "btn btn-default" }, preferIconicPreview: !1, preferIconicZoomPreview: !1, allowedPreviewTypes: void 0, allowedPreviewMimeTypes: null, allowedFileTypes: null, allowedFileExtensions: null, defaultPreviewContent: null, customLayoutTags: {}, customPreviewTags: {}, previewFileIcon: '<i class="glyphicon glyphicon-file"></i>', previewFileIconClass: "file-other-icon", previewFileIconSettings: {}, previewFileExtSettings: {}, buttonLabelClass: "hidden-xs", browseIcon: '<i class="glyphicon glyphicon-folder-open"></i>&nbsp;', browseClass: "btn btn-primary", removeIcon: '<i class="glyphicon glyphicon-trash"></i>', removeClass: "btn btn-default", cancelIcon: '<i class="glyphicon glyphicon-ban-circle"></i>', cancelClass: "btn btn-default", uploadIcon: '<i class="glyphicon glyphicon-upload"></i>', uploadClass: "btn btn-default", uploadUrl: null, uploadAsync: !0, uploadExtraData: {}, zoomModalHeight: 480, minImageWidth: null, minImageHeight: null, maxImageWidth: null, maxImageHeight: null, resizeImage: !1, resizePreference: "width", resizeQuality: .92, resizeDefaultImageType: "image/jpeg", resizeIfSizeMoreThan: 0, minFileSize: 0, maxFileSize: 0, maxFilePreviewSize: 25600, minFileCount: 0, maxFileCount: 0, validateInitialCount: !1, msgValidationErrorClass: "text-danger", msgValidationErrorIcon: '<i class="glyphicon glyphicon-exclamation-sign"></i> ', msgErrorClass: "file-error-message", progressThumbClass: "progress-bar progress-bar-success progress-bar-striped active", progressClass: "progress-bar progress-bar-success progress-bar-striped active", progressCompleteClass: "progress-bar progress-bar-success", progressErrorClass: "progress-bar progress-bar-danger", progressUploadThreshold: 99, previewFileType: "image", elCaptionContainer: null, elCaptionText: null, elPreviewContainer: null, elPreviewImage: null, elPreviewStatus: null, elErrorContainer: null, errorCloseButton: '<span class="close kv-error-close">&times;</span>', slugCallback: null, dropZoneEnabled: !0, dropZoneTitleClass: "file-drop-zone-title", fileActionSettings: {}, otherActionButtons: "", textEncoding: "UTF-8", ajaxSettings: {}, ajaxDeleteSettings: {}, showAjaxErrorDetails: !0 }, e.fn.fileinputLocales.en = { fileSingle: "file", filePlural: "files", browseLabel: "Browse &hellip;", removeLabel: "Remove", removeTitle: "Clear selected files", cancelLabel: "Cancel", cancelTitle: "Abort ongoing upload", uploadLabel: "Upload", uploadTitle: "Upload selected files", msgNo: "No", msgNoFilesSelected: "No files selected", msgCancelled: "Cancelled", msgZoomModalHeading: "Detailed Preview", msgSizeTooSmall: 'File "{name}" (<b>{size} KB</b>) is too small and must be larger than <b>{minSize} KB</b>.', msgSizeTooLarge: 'File "{name}" (<b>{size} KB</b>) exceeds maximum allowed upload size of <b>{maxSize} KB</b>.', msgFilesTooLess: "You must select at least <b>{n}</b> {files} to upload.", msgFilesTooMany: "Number of files selected for upload <b>({n})</b> exceeds maximum allowed limit of <b>{m}</b>.", msgFileNotFound: 'File "{name}" not found!', msgFileSecured: 'Security restrictions prevent reading the file "{name}".', msgFileNotReadable: 'File "{name}" is not readable.', msgFilePreviewAborted: 'File preview aborted for "{name}".', msgFilePreviewError: 'An error occurred while reading the file "{name}".', msgInvalidFileName: 'Invalid or unsupported characters in file name "{name}".', msgInvalidFileType: 'Invalid type for file "{name}". Only "{types}" files are supported.', msgInvalidFileExtension: 'Invalid extension for file "{name}". Only "{extensions}" files are supported.', msgFileTypes: { image: "image", html: "HTML", text: "text", video: "video", audio: "audio", flash: "flash", pdf: "PDF", object: "object" }, msgUploadAborted: "The file upload was aborted", msgUploadThreshold: "Processing...", msgUploadBegin: "Initializing...", msgUploadEnd: "Done", msgUploadEmpty: "No valid data available for upload.", msgValidationError: "Validation Error", msgLoading: "Loading file {index} of {files} &hellip;", msgProgress: "Loading file {index} of {files} - {name} - {percent}% completed.", msgSelected: "{n} {files} selected", msgFoldersNotAllowed: "Drag & drop files only! {n} folder(s) dropped were skipped.", msgImageWidthSmall: 'Width of image file "{name}" must be at least {size} px.', msgImageHeightSmall: 'Height of image file "{name}" must be at least {size} px.', msgImageWidthLarge: 'Width of image file "{name}" cannot exceed {size} px.', msgImageHeightLarge: 'Height of image file "{name}" cannot exceed {size} px.', msgImageResizeError: "Could not get the image dimensions to resize.", msgImageResizeException: "Error while resizing the image.<pre>{errors}</pre>", msgAjaxError: "Something went wrong with the {operation} operation. Please try again later!", msgAjaxProgressError: "{operation} failed", ajaxOperations: { deleteThumb: "file delete", uploadThumb: "file upload", uploadBatch: "batch file upload", uploadExtra: "form data upload" }, dropZoneTitle: "Drag & drop files here &hellip;", dropZoneClickTitle: "<br>(or click to select {files})", previewZoomButtonTitles: { prev: "View previous file", next: "View next file", toggleheader: "Toggle header", fullscreen: "Toggle full screen", borderless: "Toggle borderless mode", close: "Close detailed preview" } }, e.fn.fileinput.Constructor = t, e(document).ready(function () {
        var i = e("input.file[type=file]");i.length && i.fileinput();
    });
});
/* ------------------------------------------------------------------------------
*
*  # Template JS core
*
*  Core JS file with default functionality configuration
*
*  Version: 1.3
*  Latest update: Aug 10, 2016
*
* ---------------------------------------------------------------------------- */

// Allow CSS transitions when page is loaded
$(window).on('load', function () {
    $('body').removeClass('no-transitions');
});

$(function () {

    // Disable CSS transitions on page load
    $('body').addClass('no-transitions');

    // ========================================
    //
    // Content area height
    //
    // ========================================


    // Calculate min height
    function containerHeight() {
        var availableHeight = $(window).height() - $('.page-container').offset().top - $('.navbar-fixed-bottom').outerHeight();

        $('.page-container').attr('style', 'min-height:' + availableHeight + 'px');
    }

    // Initialize
    containerHeight();

    // ========================================
    //
    // Heading elements
    //
    // ========================================


    // Heading elements toggler
    // -------------------------

    // Add control button toggler to page and panel headers if have heading elements
    $('.panel-footer').has('> .heading-elements:not(.not-collapsible)').prepend('<a class="heading-elements-toggle"><i class="icon-more"></i></a>');
    $('.page-title, .panel-title').parent().has('> .heading-elements:not(.not-collapsible)').children('.page-title, .panel-title').append('<a class="heading-elements-toggle"><i class="icon-more"></i></a>');

    // Toggle visible state of heading elements
    $('.page-title .heading-elements-toggle, .panel-title .heading-elements-toggle').on('click', function () {
        $(this).parent().parent().toggleClass('has-visible-elements').children('.heading-elements').toggleClass('visible-elements');
    });
    $('.panel-footer .heading-elements-toggle').on('click', function () {
        $(this).parent().toggleClass('has-visible-elements').children('.heading-elements').toggleClass('visible-elements');
    });

    // Breadcrumb elements toggler
    // -------------------------

    // Add control button toggler to breadcrumbs if has elements
    $('.breadcrumb-line').has('.breadcrumb-elements').prepend('<a class="breadcrumb-elements-toggle"><i class="icon-menu-open"></i></a>');

    // Toggle visible state of breadcrumb elements
    $('.breadcrumb-elements-toggle').on('click', function () {
        $(this).parent().children('.breadcrumb-elements').toggleClass('visible-elements');
    });

    // ========================================
    //
    // Navbar
    //
    // ========================================


    // Navbar navigation
    // -------------------------

    // Prevent dropdown from closing on click
    $(document).on('click', '.dropdown-content', function (e) {
        e.stopPropagation();
    });

    // Disabled links
    $('.navbar-nav .disabled a').on('click', function (e) {
        e.preventDefault();
        e.stopPropagation();
    });

    // Show tabs inside dropdowns
    $('.dropdown-content a[data-toggle="tab"]').on('click', function (e) {
        $(this).tab('show');
    });

    // ========================================
    //
    // Element controls
    //
    // ========================================


    // Reload elements
    // -------------------------

    // Panels
    $('.panel [data-action=reload]').click(function (e) {
        e.preventDefault();
        var block = $(this).parent().parent().parent().parent().parent();
        $(block).block({
            message: '<i class="icon-spinner2 spinner"></i>',
            overlayCSS: {
                backgroundColor: '#fff',
                opacity: 0.8,
                cursor: 'wait',
                'box-shadow': '0 0 0 1px #ddd'
            },
            css: {
                border: 0,
                padding: 0,
                backgroundColor: 'none'
            }
        });

        // For demo purposes
        window.setTimeout(function () {
            $(block).unblock();
        }, 2000);
    });

    // Sidebar categories
    $('.category-title [data-action=reload]').click(function (e) {
        e.preventDefault();
        var block = $(this).parent().parent().parent().parent();
        $(block).block({
            message: '<i class="icon-spinner2 spinner"></i>',
            overlayCSS: {
                backgroundColor: '#000',
                opacity: 0.5,
                cursor: 'wait',
                'box-shadow': '0 0 0 1px #000'
            },
            css: {
                border: 0,
                padding: 0,
                backgroundColor: 'none',
                color: '#fff'
            }
        });

        // For demo purposes
        window.setTimeout(function () {
            $(block).unblock();
        }, 2000);
    });

    // Light sidebar categories
    $('.sidebar-default .category-title [data-action=reload]').click(function (e) {
        e.preventDefault();
        var block = $(this).parent().parent().parent().parent();
        $(block).block({
            message: '<i class="icon-spinner2 spinner"></i>',
            overlayCSS: {
                backgroundColor: '#fff',
                opacity: 0.8,
                cursor: 'wait',
                'box-shadow': '0 0 0 1px #ddd'
            },
            css: {
                border: 0,
                padding: 0,
                backgroundColor: 'none'
            }
        });

        // For demo purposes
        window.setTimeout(function () {
            $(block).unblock();
        }, 2000);
    });

    // Collapse elements
    // -------------------------

    //
    // Sidebar categories
    //

    // Hide if collapsed by default
    $('.category-collapsed').children('.category-content').hide();

    // Rotate icon if collapsed by default
    $('.category-collapsed').find('[data-action=collapse]').addClass('rotate-180');

    // Collapse on click
    $('.category-title [data-action=collapse]').click(function (e) {
        e.preventDefault();
        var $categoryCollapse = $(this).parent().parent().parent().nextAll();
        $(this).parents('.category-title').toggleClass('category-collapsed');
        $(this).toggleClass('rotate-180');

        containerHeight(); // adjust page height

        $categoryCollapse.slideToggle(150);
    });

    //
    // Panels
    //

    // Hide if collapsed by default
    $('.panel-collapsed').children('.panel-heading').nextAll().hide();

    // Rotate icon if collapsed by default
    $('.panel-collapsed').find('[data-action=collapse]').addClass('rotate-180');

    // Collapse on click
    $('.panel [data-action=collapse]').click(function (e) {
        e.preventDefault();
        var $panelCollapse = $(this).parent().parent().parent().parent().nextAll();
        $(this).parents('.panel').toggleClass('panel-collapsed');
        $(this).toggleClass('rotate-180');

        containerHeight(); // recalculate page height

        $panelCollapse.slideToggle(150);
    });

    // Remove elements
    // -------------------------

    // Panels
    $('.panel [data-action=close]').click(function (e) {
        e.preventDefault();
        var $panelClose = $(this).parent().parent().parent().parent().parent();

        containerHeight(); // recalculate page height

        $panelClose.slideUp(150, function () {
            $(this).remove();
        });
    });

    // Sidebar categories
    $('.category-title [data-action=close]').click(function (e) {
        e.preventDefault();
        var $categoryClose = $(this).parent().parent().parent().parent();

        containerHeight(); // recalculate page height

        $categoryClose.slideUp(150, function () {
            $(this).remove();
        });
    });

    // ========================================
    //
    // Main navigation
    //
    // ========================================


    // Main navigation
    // -------------------------

    // Add 'active' class to parent list item in all levels
    $('.navigation').find('li.active').parents('li').addClass('active');

    // Hide all nested lists
    $('.navigation').find('li').not('.active, .category-title').has('ul').children('ul').addClass('hidden-ul');

    // Highlight children links
    $('.navigation').find('li').has('ul').children('a').addClass('has-ul');

    // Add active state to all dropdown parent levels
    $('.dropdown-menu:not(.dropdown-content), .dropdown-menu:not(.dropdown-content) .dropdown-submenu').has('li.active').addClass('active').parents('.navbar-nav .dropdown:not(.language-switch), .navbar-nav .dropup:not(.language-switch)').addClass('active');

    // Main navigation tooltips positioning
    // -------------------------

    // Left sidebar
    $('.navigation-main > .navigation-header > i').tooltip({
        placement: 'right',
        container: 'body'
    });

    // Collapsible functionality
    // -------------------------

    // Main navigation
    $('.navigation-main').find('li').has('ul').children('a').on('click', function (e) {
        e.preventDefault();

        // Collapsible
        $(this).parent('li').not('.disabled').not($('.sidebar-xs').not('.sidebar-xs-indicator').find('.navigation-main').children('li')).toggleClass('active').children('ul').slideToggle(250);

        // Accordion
        if ($('.navigation-main').hasClass('navigation-accordion')) {
            $(this).parent('li').not('.disabled').not($('.sidebar-xs').not('.sidebar-xs-indicator').find('.navigation-main').children('li')).siblings(':has(.has-ul)').removeClass('active').children('ul').slideUp(250);
        }
    });

    // Alternate navigation
    $('.navigation-alt').find('li').has('ul').children('a').on('click', function (e) {
        e.preventDefault();

        // Collapsible
        $(this).parent('li').not('.disabled').toggleClass('active').children('ul').slideToggle(200);

        // Accordion
        if ($('.navigation-alt').hasClass('navigation-accordion')) {
            $(this).parent('li').not('.disabled').siblings(':has(.has-ul)').removeClass('active').children('ul').slideUp(200);
        }
    });

    // ========================================
    //
    // Sidebars
    //
    // ========================================


    // Mini sidebar
    // -------------------------

    // Toggle mini sidebar
    $('.sidebar-main-toggle').on('click', function (e) {
        e.preventDefault();

        // Toggle min sidebar class
        $('body').toggleClass('sidebar-xs');
    });

    // Sidebar controls
    // -------------------------

    // Disable click in disabled navigation items
    $(document).on('click', '.navigation .disabled a', function (e) {
        e.preventDefault();
    });

    // Adjust page height on sidebar control button click
    $(document).on('click', '.sidebar-control', function (e) {
        containerHeight();
    });

    // Hide main sidebar in Dual Sidebar
    $(document).on('click', '.sidebar-main-hide', function (e) {
        e.preventDefault();
        $('body').toggleClass('sidebar-main-hidden');
    });

    // Toggle second sidebar in Dual Sidebar
    $(document).on('click', '.sidebar-secondary-hide', function (e) {
        e.preventDefault();
        $('body').toggleClass('sidebar-secondary-hidden');
    });

    // Hide detached sidebar
    $(document).on('click', '.sidebar-detached-hide', function (e) {
        e.preventDefault();
        $('body').toggleClass('sidebar-detached-hidden');
    });

    // Hide all sidebars
    $(document).on('click', '.sidebar-all-hide', function (e) {
        e.preventDefault();

        $('body').toggleClass('sidebar-all-hidden');
    });

    //
    // Opposite sidebar
    //

    // Collapse main sidebar if opposite sidebar is visible
    $(document).on('click', '.sidebar-opposite-toggle', function (e) {
        e.preventDefault();

        // Opposite sidebar visibility
        $('body').toggleClass('sidebar-opposite-visible');

        // If visible
        if ($('body').hasClass('sidebar-opposite-visible')) {

            // Make main sidebar mini
            $('body').addClass('sidebar-xs');

            // Hide children lists
            $('.navigation-main').children('li').children('ul').css('display', '');
        } else {

            // Make main sidebar default
            $('body').removeClass('sidebar-xs');
        }
    });

    // Hide main sidebar if opposite sidebar is shown
    $(document).on('click', '.sidebar-opposite-main-hide', function (e) {
        e.preventDefault();

        // Opposite sidebar visibility
        $('body').toggleClass('sidebar-opposite-visible');

        // If visible
        if ($('body').hasClass('sidebar-opposite-visible')) {

            // Hide main sidebar
            $('body').addClass('sidebar-main-hidden');
        } else {

            // Show main sidebar
            $('body').removeClass('sidebar-main-hidden');
        }
    });

    // Hide secondary sidebar if opposite sidebar is shown
    $(document).on('click', '.sidebar-opposite-secondary-hide', function (e) {
        e.preventDefault();

        // Opposite sidebar visibility
        $('body').toggleClass('sidebar-opposite-visible');

        // If visible
        if ($('body').hasClass('sidebar-opposite-visible')) {

            // Hide secondary
            $('body').addClass('sidebar-secondary-hidden');
        } else {

            // Show secondary
            $('body').removeClass('sidebar-secondary-hidden');
        }
    });

    // Hide all sidebars if opposite sidebar is shown
    $(document).on('click', '.sidebar-opposite-hide', function (e) {
        e.preventDefault();

        // Toggle sidebars visibility
        $('body').toggleClass('sidebar-all-hidden');

        // If hidden
        if ($('body').hasClass('sidebar-all-hidden')) {

            // Show opposite
            $('body').addClass('sidebar-opposite-visible');

            // Hide children lists
            $('.navigation-main').children('li').children('ul').css('display', '');
        } else {

            // Hide opposite
            $('body').removeClass('sidebar-opposite-visible');
        }
    });

    // Keep the width of the main sidebar if opposite sidebar is visible
    $(document).on('click', '.sidebar-opposite-fix', function (e) {
        e.preventDefault();

        // Toggle opposite sidebar visibility
        $('body').toggleClass('sidebar-opposite-visible');
    });

    // Mobile sidebar controls
    // -------------------------

    // Toggle main sidebar
    $('.sidebar-mobile-main-toggle').on('click', function (e) {
        e.preventDefault();
        $('body').toggleClass('sidebar-mobile-main').removeClass('sidebar-mobile-secondary sidebar-mobile-opposite sidebar-mobile-detached');
    });

    // Toggle secondary sidebar
    $('.sidebar-mobile-secondary-toggle').on('click', function (e) {
        e.preventDefault();
        $('body').toggleClass('sidebar-mobile-secondary').removeClass('sidebar-mobile-main sidebar-mobile-opposite sidebar-mobile-detached');
    });

    // Toggle opposite sidebar
    $('.sidebar-mobile-opposite-toggle').on('click', function (e) {
        e.preventDefault();
        $('body').toggleClass('sidebar-mobile-opposite').removeClass('sidebar-mobile-main sidebar-mobile-secondary sidebar-mobile-detached');
    });

    // Toggle detached sidebar
    $('.sidebar-mobile-detached-toggle').on('click', function (e) {
        e.preventDefault();
        $('body').toggleClass('sidebar-mobile-detached').removeClass('sidebar-mobile-main sidebar-mobile-secondary sidebar-mobile-opposite');
    });

    // Mobile sidebar setup
    // -------------------------

    $(window).on('resize', function () {
        setTimeout(function () {
            containerHeight();

            if ($(window).width() <= 768) {

                // Add mini sidebar indicator
                $('body').addClass('sidebar-xs-indicator');

                // Place right sidebar before content
                $('.sidebar-opposite').insertBefore('.content-wrapper');

                // Place detached sidebar before content
                $('.sidebar-detached').insertBefore('.content-wrapper');

                // Add mouse events for dropdown submenus
                $('.dropdown-submenu').on('mouseenter', function () {
                    $(this).children('.dropdown-menu').addClass('show');
                }).on('mouseleave', function () {
                    $(this).children('.dropdown-menu').removeClass('show');
                });
            } else {

                // Remove mini sidebar indicator
                $('body').removeClass('sidebar-xs-indicator');

                // Revert back right sidebar
                $('.sidebar-opposite').insertAfter('.content-wrapper');

                // Remove all mobile sidebar classes
                $('body').removeClass('sidebar-mobile-main sidebar-mobile-secondary sidebar-mobile-detached sidebar-mobile-opposite');

                // Revert left detached position
                if ($('body').hasClass('has-detached-left')) {
                    $('.sidebar-detached').insertBefore('.container-detached');
                }

                // Revert right detached position
                else if ($('body').hasClass('has-detached-right')) {
                        $('.sidebar-detached').insertAfter('.container-detached');
                    }

                // Remove visibility of heading elements on desktop
                $('.page-header-content, .panel-heading, .panel-footer').removeClass('has-visible-elements');
                $('.heading-elements').removeClass('visible-elements');

                // Disable appearance of dropdown submenus
                $('.dropdown-submenu').children('.dropdown-menu').removeClass('show');
            }
        }, 100);
    }).resize();

    // ========================================
    //
    // Other code
    //
    // ========================================


    // Plugins
    // -------------------------

    // Popover
    $('[data-popup="popover"]').popover();

    // Tooltip
    $('[data-popup="tooltip"]').tooltip();
});

/* ------------------------------------------------------------------------------
*
*  # LegitRipple
*
* ---------------------------------------------------------------------------- */

!function (t) {
    t.fn.ripple = function (e) {
        if (this.length > 1) return this.each(function (n, i) {
            t(i).ripple(e);
        });if (e = e || {}, this.off(".ripple").data("unbound", !0), e.unbind) return this;var n = function n() {
            return d && !d.data("unbound");
        };this.addClass("legitRipple").removeData("unbound").on("tap.ripple", function (e) {
            n() || (d = t(this), w(e.coords));
        }).on("dragstart.ripple", function (t) {
            g.allowDragging || t.preventDefault();
        }), t(document).on("move.ripple", function (t) {
            n() && b(t.coords);
        }).on("end.ripple", function () {
            n() && y();
        }), t(window).on("scroll.ripple", function (t) {
            n() && y();
        });var i,
            o,
            a,
            r,
            s = function s(t) {
            return !!t.type.match(/^touch/);
        },
            l = function l(t, e) {
            return s(t) && (t = c(t.originalEvent.touches, e)), [t.pageX, t.pageY];
        },
            c = function c(e, n) {
            return t.makeArray(e).filter(function (t, e) {
                return t.identifier == n;
            })[0];
        },
            p = 0,
            u = function u(t) {
            "touchstart" == t.type && (p = 3), "scroll" == t.type && (p = 0);var e = p && !s(t);return e && p--, !e;
        };this.on("mousedown.ripple touchstart.ripple", function (e) {
            u(e) && (i = s(e) ? e.originalEvent.changedTouches[0].identifier : -1, o = t(this), a = t.Event("tap", { coords: l(e, i) }), ~i ? r = setTimeout(function () {
                o.trigger(a), r = null;
            }, g.touchDelay) : o.trigger(a));
        }), t(document).on("mousemove.ripple touchmove.ripple mouseup.ripple touchend.ripple touchcancel.ripple", function (e) {
            var n = e.type.match(/move/);r && !n && (clearTimeout(r), r = null, o.trigger(a)), u(e) && (s(e) ? c(e.originalEvent.changedTouches, i) : !~i) && t(this).trigger(n ? t.Event("move", { coords: l(e, i) }) : "end");
        }).on("contextmenu.ripple", function (t) {
            u(t);
        }).on("touchmove", function () {
            clearTimeout(r), r = null;
        });var d,
            f,
            h,
            m,
            g = {},
            v = 0,
            x = function x() {
            var n = { fixedPos: null, get dragging() {
                    return !g.fixedPos;
                }, get adaptPos() {
                    return g.dragging;
                }, get maxDiameter() {
                    return Math.sqrt(Math.pow(h[0], 2) + Math.pow(h[1], 2)) / d.outerWidth() * Math.ceil(g.adaptPos ? 100 : 200) + "%";
                }, scaleMode: "fixed", template: null, allowDragging: !1, touchDelay: 100, callback: null };t.each(n, function (t, n) {
                g[t] = t in e ? e[t] : n;
            });
        },
            w = function w(e) {
            h = [d.outerWidth(), d.outerHeight()], x(), m = e, f = t("<span/>").addClass("legitRipple-ripple"), g.template && f.append(("object" == _typeof(g.template) ? g.template : d.children(".legitRipple-template").last()).clone().removeClass("legitRipple-template")).addClass("legitRipple-custom"), f.appendTo(d), D(e, !1);var n = f.css("transition-duration").split(","),
                i = [parseFloat(n[0]) + "s"].concat(n.slice(1)).join(",");f.css("transition-duration", i).css("width", g.maxDiameter), f.on("transitionend webkitTransitionEnd oTransitionEnd", function () {
                t(this).data("oneEnded") ? t(this).off().remove() : t(this).data("oneEnded", !0);
            });
        },
            b = function b(t) {
            var e;if (v++, "proportional" === g.scaleMode) {
                var n = Math.pow(v, v / 100 * .6);e = n > 40 ? 40 : n;
            } else if ("fixed" == g.scaleMode && Math.abs(t[1] - m[1]) > 6) return void y();D(t, e);
        },
            y = function y() {
            f.css("width", f.css("width")).css("transition", "none").css("transition", "").css("width", f.css("width")).css("width", g.maxDiameter).css("opacity", "0"), d = null, v = 0;
        },
            D = function D(e, n) {
            var i = [],
                o = g.fixedPos === !0 ? [.5, .5] : [(g.fixedPos ? g.fixedPos[0] : e[0] - d.offset().left) / h[0], (g.fixedPos ? g.fixedPos[1] : e[1] - d.offset().top) / h[1]],
                a = [.5 - o[0], .5 - o[1]],
                r = [100 / parseFloat(g.maxDiameter), 100 / parseFloat(g.maxDiameter) * (h[1] / h[0])],
                s = [a[0] * r[0], a[1] * r[1]],
                l = g.dragging || 0 === v;if (l && "inline" == d.css("display")) {
                var c = t("<span/>").text("Hi!").css("font-size", 0).prependTo(d),
                    p = c.offset().left;c.remove(), i = [e[0] - p + "px", e[1] - d.offset().top + "px"];
            }l && f.css("left", i[0] || 100 * o[0] + "%").css("top", i[1] || 100 * o[1] + "%"), f.css("transform", "translate3d(-50%, -50%, 0)" + (g.adaptPos ? "translate3d(" + 100 * s[0] + "%, " + 100 * s[1] + "%, 0)" : "") + (n ? "scale(" + n + ")" : "")), g.callback && g.callback(d, f, o, g.maxDiameter);
        };return this;
    }, t.ripple = function (e) {
        t.each(e, function (e, n) {
            t(e).ripple(n);
        });
    }, t.ripple.destroy = function () {
        t(".legitRipple").removeClass("legitRipple").add(window).add(document).off(".ripple"), t(".legitRipple-ripple").remove();
    };
}(jQuery);

// Initialization
// ------------------------------

$(function () {

    // Ripple effect
    $(".btn:not(.disabled):not(.multiselect.btn-default):not(.bootstrap-select .btn-default):not(.file-drag-handle), .navigation li:not(.disabled) a, .nav > li:not(.disabled) > a, .sidebar-user-material-menu > a, .sidebar-user-material-content > a, .select2-selection--single[class*=bg-], .breadcrumb-elements > li:not(.disabled) > a, .wizard > .actions a, .ui-button:not(.ui-dialog-titlebar-close), .ui-tabs-anchor:not(.ui-state-disabled), .plupload_button:not(.plupload_disabled), .fc-button, .pagination > li:not(.disabled) > a, .pagination > li:not(.disabled) > span, .pager > li:not(.disabled) > a, .pager > li:not(.disabled) > span").ripple({
        dragging: false,
        adaptPos: false,
        scaleMode: false
    });

    // Unbind ripple in Datepaginator
    $('.dp-item, .dp-nav, .sidebar-xs .sidebar-main .navigation > li > a').ripple({ unbind: true });

    $(document).on('click', '.sidebar-control', function () {
        if ($('body').hasClass('sidebar-xs')) {
            $('.sidebar-main .navigation > li > a').ripple({ unbind: true });
        } else {
            $('.sidebar-main .navigation > li > a').ripple({ unbind: false });
        }
    });
});

/* ------------------------------------------------------------------------------
*
*  # Login page
*
*  Specific JS code additions for login and registration pages
*
*  Version: 1.0
*  Latest update: Aug 1, 2015
*
* ---------------------------------------------------------------------------- */

$(function () {

    // Style checkboxes and radios
    $('.styled').uniform();
});